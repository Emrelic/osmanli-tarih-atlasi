# -*- coding: utf-8 -*-
"""TEYİT UYGULAYICI — teyit kampanyasının çıktı tablolarını veriye işler (TEYIT-UYGULA-1014).

Emre (14 Ekim 2026): güvensiz kaynaklı bilgi güvenilir kaynakla teyit edilir ve o kaynağın
damgasıyla damgalanır. Teyit ajanları veriye YAZMAZ; her biri bir tablo üretir
(`anahtar dosya t b hukum yeni_kaynak kaynak_kodu kaynak_tarihi not`). Bu betik:
  · `teyit` / `teyit-yil` satırlarında maddenin `kaynak` alanının BAŞINA `yeni_kaynak`ı ekler
    (eski kaynak SİLİNMEZ, " ; " ile arkada kalır; `teyit-yil`e "[yalnız yıl teyitli]" notu eklenir);
  · `tarih-celiski` / `teyit-edilemedi` satırlarına DOKUNMAZ, karar listesine yazar;
  · maddeyi anahtar + t + b ÜÇÜYLE bulur — biri tutmazsa madde değişmez, rapora "eşlenemedi" düşer;
  · işledikten sonra evreni yeniden yükleyip her maddenin damgasını kaynak_guven.py ile ÖLÇER.

Kullanım:  py arac/teyit_uygula.py <cikti.tsv> [<cikti.tsv> …] [--kuru] [--rapor <dizin>]
Çıkış: 0 hepsi işlendi/raporlandı · 1 eşlenemeyen ya da damgası düzelmeyen madde var · 2 ölçülemedi.
"""
import csv
import io
import json
import os
import re
import sys

KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
sys.path.insert(0, os.path.join(KOK, "arac"))

YIL_NOTU = " [yalnız yıl teyitli; gün teyitsiz]"


# ── JS nesne değişmezi tarayıcı (dizgeleri ve iç içe parantezleri atlar) ────────────
def _dizge_sonu(s, i):
    """s[i] bir tırnaksa kapanış tırnağının indeksini verir."""
    q = s[i]
    i += 1
    while i < len(s):
        c = s[i]
        if c == "\\":
            i += 2
            continue
        if c == q:
            return i
        i += 1
    return -1


def _kapanis(s, i):
    """s[i] == '{' ya da '[' → eşleşen kapanışın indeksi (dizgeleri ve yorumları atlar)."""
    acan = s[i]
    kapan = "}" if acan == "{" else "]"
    d = 0
    while i < len(s):
        c = s[i]
        if c in "\"'`":
            i = _dizge_sonu(s, i)
            if i < 0:
                return -1
        elif c == "/" and s[i:i + 2] == "//":
            j = s.find("\n", i)
            i = len(s) if j < 0 else j
            continue
        elif c == "/" and s[i:i + 2] == "/*":
            j = s.find("*/", i + 2)
            i = len(s) if j < 0 else j + 1
        elif c in "{[":
            d += 1
        elif c in "}]":
            d -= 1
            if d == 0:
                return i if c == kapan else -1
        i += 1
    return -1


def _ust_anahtarlar(s, a, b):
    """s[a]=='{', s[b]=='}' nesnesinin ÜST DÜZEY anahtarları → {ad: (deger_bas, deger_son, tirnakli_anahtar)}.
    Yalnız dizge değerlerin aralığı (tırnaklar dahil) döner; öteki değerler (None, None)."""
    out = {}
    i = a + 1
    while i < b:
        c = s[i]
        if c in " \t\r\n,":
            i += 1
            continue
        if c == "/" and s[i:i + 2] == "//":
            i = s.find("\n", i)
            continue
        # anahtar
        tirnakli = c in "\"'"
        if tirnakli:
            j = _dizge_sonu(s, i)
            ad = s[i + 1:j]
            i = j + 1
        else:
            m = re.compile(r"[A-Za-z_$][\w$]*").match(s, i)
            if not m:
                i += 1
                continue
            ad = m.group(0)
            i = m.end()
        while i < b and s[i] in " \t\r\n":
            i += 1
        if i >= b or s[i] != ":":
            continue
        i += 1
        while i < b and s[i] in " \t\r\n":
            i += 1
        if s[i] in "\"'":
            j = _dizge_sonu(s, i)
            out[ad] = (i, j + 1, tirnakli)
            i = j + 1
        else:
            if s[i] in "{[":
                j = _kapanis(s, i)
                i = j + 1
            else:
                while i < b and s[i] not in ",}\n":
                    i += 1
            out.setdefault(ad, (None, None, tirnakli))
    return out


def _js_dizge(v):
    return json.dumps(v, ensure_ascii=False)


def _js_dizge_oku(lit):
    """'"…"' ya da "'…'" değişmezini Python dizgesine çevirir."""
    if lit[0] == "'":
        lit = '"' + lit[1:-1].replace('\\\'', "'").replace('"', '\\"') + '"'
    return json.loads(lit)


def _nesne_bul(metin, t, b, bolge=(0, None)):
    """Bölgede t ve b'yi ÜST DÜZEY anahtar olarak taşıyan nesneler → [(a, son)]."""
    a0, b0 = bolge
    b0 = len(metin) if b0 is None else b0
    bulunan = []
    adaylar = set()
    for lit in {_js_dizge(b), "'" + b.replace("'", "\\'") + "'"}:
        k = metin.find(lit, a0, b0)
        while k >= 0:
            adaylar.add(k)
            k = metin.find(lit, k + 1, b0)
    for k in adaylar:
        j = k
        while j > a0:                      # en içteki kapsayan '{'
            j = metin.rfind("{", a0, j)
            if j < 0:
                break
            son = _kapanis(metin, j)
            if son > k:
                anah = _ust_anahtarlar(metin, j, son)
                tb, ts = anah.get("t", (None, None, None))[:2]
                bb, bs = anah.get("b", (None, None, None))[:2]
                if tb is not None and bb is not None and _js_dizge_oku(metin[tb:ts]) == t \
                        and _js_dizge_oku(metin[bb:bs]) == b:
                    bulunan.append((j, son))
                break
    return sorted(set(bulunan))


def _kunye_bolgesi(metin, kid):
    m = re.search(r'\bid\s*:\s*"%s"' % re.escape(kid), metin)
    if not m:
        return None
    j = metin.rfind("{", 0, m.start())
    son = _kapanis(metin, j)
    return (j, son) if son > 0 else None


def uygula_satir(metin, dosya, r):
    """→ (yeni_metin, durum, ayrinti). Yalnız bellekte değiştirir."""
    yeni = r["yeni_kaynak"].strip()
    if r["hukum"] == "teyit-yil":
        yeni += YIL_NOTU
    bolge = (0, None)
    if dosya == "data/devletler.js":
        kid = r["anahtar"].split("#")[0]
        bolge = _kunye_bolgesi(metin, kid)
        if not bolge:
            return metin, "eslenemedi", "künye yok: " + kid
    nes = _nesne_bul(metin, r["t"], r["b"], bolge)
    if len(nes) != 1:
        return metin, "eslenemedi", "%d nesne t+b ile eşleşti" % len(nes)
    a, son = nes[0]
    anah = _ust_anahtarlar(metin, a, son)
    if "kaynak" in anah:
        ka, ks, _ = anah["kaynak"]
        if ka is None:
            return metin, "eslenemedi", "kaynak dizge değil (dizi?)"
        eski = _js_dizge_oku(metin[ka:ks])
        if eski.startswith(yeni):
            return metin, "zaten", ""
        deger = yeni + (" ; " + eski if eski.strip() else "")
        return metin[:ka] + _js_dizge(deger) + metin[ks:], "islendi", ""
    tirnakli = any(v[2] for v in anah.values())
    ek = (', "kaynak": ' if tirnakli else ", kaynak:") + _js_dizge(yeni)
    # son anahtarın değerinden sonra, kapanıştan önceki boşluğu koru
    k = son
    while metin[k - 1] in " \t\r\n,":
        k -= 1
    return metin[:k] + ek + metin[k:], "islendi", ""


def main(argv):
    kuru = "--kuru" in argv
    rapor_dizin = None
    if "--rapor" in argv:
        rapor_dizin = argv[argv.index("--rapor") + 1]
    tablolar = [x for x in argv if x.endswith(".tsv")]
    if not tablolar:
        print(__doc__)
        return 2
    satirlar = []
    for t in tablolar:
        with io.open(t, encoding="utf-8") as f:
            for r in csv.DictReader(f, delimiter="\t"):
                r["_tablo"] = os.path.basename(t)
                satirlar.append(r)
    dosyalar = {}
    sonuc = []
    for r in satirlar:
        h = (r.get("hukum") or "").strip()
        if h not in ("teyit", "teyit-yil"):
            sonuc.append((r, "karar" if h == "tarih-celiski" else "dokunulmadi", h))
            continue
        if not (r.get("yeni_kaynak") or "").strip():
            sonuc.append((r, "eslenemedi", "yeni_kaynak boş"))
            continue
        d = r["dosya"]
        if d not in dosyalar:
            dosyalar[d] = io.open(os.path.join(KOK, d), encoding="utf-8", newline="").read()
        dosyalar[d], durum, ayr = uygula_satir(dosyalar[d], d, r)
        sonuc.append((r, durum, ayr))
    if not kuru:
        for d, m in dosyalar.items():
            with io.open(os.path.join(KOK, d), "w", encoding="utf-8", newline="") as f:
                f.write(m)

    # ── ÖLÇÜM: işlenen her maddenin damgası (kaynak_guven.py ile) ────────────────
    olcum = {}
    if not kuru and any(s[1] == "islendi" for s in sonuc):
        import kaynak_guven as kg
        T, _ = kg.tablo_oku()
        S = kg.Siniflayici(T)
        _d, F, KK, _KU = kg.evren_yukle()
        ix = {}
        for m in F + KK:
            ix[(m["dosya"], m["anahtar"])] = m
        for r, durum, _a in sonuc:
            if durum != "islendi":
                continue
            m = ix.get((r["dosya"], r["anahtar"]))
            if not m or m["t"] != r["t"] or m["b"] != r["b"]:
                olcum[id(r)] = "OLCULEMEDI"
                continue
            olcum[id(r)] = S.damgala(m["kaynak"], m["t"])["damga"]

    say = {}
    kotu = 0
    for r, durum, ayr in sonuc:
        dg = olcum.get(id(r), "")
        anahtar = durum + ("/" + dg if dg else "")
        say[anahtar] = say.get(anahtar, 0) + 1
        if durum == "eslenemedi" or (durum == "islendi" and dg not in ("guvenli", "ikincil")):
            kotu += 1
    print("satır: %d · tablo: %s" % (len(sonuc), ", ".join(os.path.basename(t) for t in tablolar)))
    for k, v in sorted(say.items(), key=lambda x: -x[1]):
        print("  %5d  %s" % (v, k))
    if rapor_dizin:
        os.makedirs(rapor_dizin, exist_ok=True)
        with io.open(os.path.join(rapor_dizin, "uygulama.tsv"), "w", encoding="utf-8", newline="") as f:
            w = csv.writer(f, delimiter="\t", lineterminator="\n")
            w.writerow(["tablo", "anahtar", "dosya", "t", "b", "hukum", "durum", "damga_sonra",
                        "ayrinti", "kaynak_tarihi", "not"])
            for r, durum, ayr in sonuc:
                w.writerow([r["_tablo"], r["anahtar"], r["dosya"], r["t"], r["b"], r.get("hukum"),
                            durum, olcum.get(id(r), ""), ayr, r.get("kaynak_tarihi", ""),
                            (r.get("not") or "")[:300]])
    if kotu:
        print("⚠️ eşlenemeyen ya da damgası güvenli/ikincil olmayan: %d (uygulama.tsv)" % kotu)
    return 1 if kotu else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
