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
           py arac/teyit_uygula.py <cikti.tsv> … --yil-karari [--kuru] [--rapor <dizin>]
             (yalnız `teyit-yil` satırları; Emre kararı ① 14 Ekim 2026 — aşağıda `yil_karari`)
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


# ════════════════════════════════════════════════════════════════════════
# --yil-karari — EMRE KARARI ①, 14 Ekim 2026 (TEYIT-KARAR-1014)
#   `teyit-yil` (kaynak olayı ve YILI doğruluyor, gün teyitsiz):
#     · madde bir SINIR KIRILMASINA BAĞLI DEĞİLSE t → YYYY-01-01; eski gün
#       `ic_not_t`ye; `gun:` varsa yıla iner; `yeni_kaynak` kaynağın başına.
#     · BAĞLIYSA t KALIR; kaynak "[yalnız yıl teyitli; gün teyitsiz]" notuyla eklenir.
#   "Bağlı" = (i) madde Değişmez 2 evreninde (olaylar*/kronoloji_sinir*) ve
#   denetle.degismez2 (2 · 2s · 2i) kırılmalarından birinin ±30 gün içinde;
#   (ii) t, maddenin künyesinin f ya da t'sine eşit; (iii) t bir yerleşimin
#   s:/d:/v:/isg: dönem ucuna eşit ve o dönemin kimliği künye/taraflardan biri.
#   Ek koruma (karar dışı, beyanlı): YYYY-01-01 künyenin f'sinden önceye ya da
#   t'sinden sonraya düşüyorsa madde inmez ("künye-penceresi") — hayalet madde olmasın.
# ════════════════════════════════════════════════════════════════════════
KARAR_TARIHI = "14 Ekim 2026"
URETILMIS = ("donemler.js", "devletler_harita.js", "bolgeler.js", "devlet_harita_ust.js",
             "ufuk_bantlari_ust.js", "kimlikler.js")


# Başlıktan çıkmayan taraf beyanı (elle, gerekçeli). anahtar → [künye id]
TARAF_EK = {
    # Rumelihisarı'nı Osmanlı yaptırdı; yerleşimin `d:` dönemi tamamlanma günü başlar
    "KRONOLOJI_BIZANS[75]": ["osmanli"],
}


def _nrm(s):
    """Türkçe güvenli küçük harf (İ→i, I→ı; "İ".lower() iki kod noktası verir)."""
    return (s or "").replace("İ", "i").replace("I", "ı").lower()


def _kunye_id(dosya, anahtar):
    if dosya == "data/devletler.js":
        return anahtar.split("#")[0]
    m = re.match(r"KRONOLOJI_(\w+)\[", anahtar)
    if m and not re.match(r"(SINIR|COK)_", m.group(1)):
        return m.group(1).lower().replace("_", "-")
    return None


class Baglilik:
    """Sınır bağlılığını denetle.py'yi İÇE AKTARARAK ölçer (kopyalamaz)."""

    def __init__(self):
        import contextlib
        import denetle as D
        self.D = D
        with contextlib.redirect_stdout(io.StringIO()):
            self.Y = D.yerlesimleri_yukle()
        hk = D._devletler_yukle()
        if hk is None:
            raise RuntimeError("devletler.js node ile okunamadı")
        self.kunye = hk
        self.ham = {d["id"]: d for d in (D._DEVLETLER_HAM or []) if d.get("id")}
        self._kir = None
        # yerleşim dönem uçları: gün → [(yer, kat, kimlik, uc)]
        self.uc = {}
        for y in self.Y:
            for kat in ("s", "d", "v", "isg"):
                for p in (y.get(kat) or []):
                    for u in ("f", "t"):
                        g = p.get(u)
                        if isinstance(g, str) and g:
                            self.uc.setdefault(D.pad(g), []).append(
                                (y.get("ad"), kat, p.get("d") or "", u))

    def kirilmalar(self):
        if self._kir is None:
            import contextlib
            D = self.D
            O = D.olaylari_yukle()
            Yc = [y for y in self.Y if y.get("_kaynak") not in D.KUYRUK_DOSYALARI]
            g = set()
            with contextlib.redirect_stdout(io.StringIO()):
                for kat, ys in ((("d", "v"), False), (("s",), True), (("isg",), False)):
                    kir, _ = D.degismez2(Yc, O, kat, yer_sarti=ys)
                    g |= {D.gun_no(d) for d in kir}
            self._kir = sorted(g)
        return self._kir

    def olc(self, dosya, anahtar, t, b="", taraflar=()):
        """→ (bagli: bool, neden: str, bilgi: str)"""
        D = self.D
        tp = D.pad(t)
        nedenler, bilgi = [], []
        base = os.path.basename(dosya)
        if re.match(r"(olaylar|kronoloji_sinir)", base):
            gt = D.gun_no(tp)
            yakin = [k for k in self.kirilmalar() if abs(k - gt) <= 30]
            if yakin:
                nedenler.append("i:D2-tanik(%d kirilma ±30g)" % len(yakin))
        kid = _kunye_id(dosya, anahtar)
        ids = {x for x in ([kid] + list(taraflar) + TARAF_EK.get(anahtar, [])) if x}
        uc = self.uc.get(tp, [])
        # TARAF: başlıkta adı geçen devlet — yalnız o gün ucu olan künyeler arasından aranır
        nb = _nrm(b)
        for aday in set(u[2] or ("osmanli" if u[1] in ("d", "v") else "") for u in uc) | \
                {i for i, (f, tt) in self.kunye.items() if tp in (D.pad(f or ""), D.pad(tt or ""))}:
            if aday in ids or aday not in self.ham:
                continue
            kok = _nrm(self.ham[aday].get("ad") or "").split()
            if kok and len(kok[0]) >= 4 and re.search(r"\b" + re.escape(kok[0]), nb):
                ids.add(aday)
                bilgi.append("taraf (başlıkta adı geçiyor): %s" % aday)
        for i in sorted(ids):
            if i not in self.kunye:
                if i == kid:
                    bilgi.append("künye yok: %s" % kid)
                continue
            f, tt = self.kunye[i]
            if D.pad(f or "") == tp:
                nedenler.append("ii:kunye-f(%s)" % i)
            if D.pad(tt or "") == tp:
                nedenler.append("ii:kunye-t(%s)" % i)
        # `d:` (doğrudan) ve `v:` (vasal) dönemleri kimlik taşımaz — Osmanlı'nındır
        uc = [(a, k, d or ("osmanli" if k in ("d", "v") else ""), u) for a, k, d, u in uc]
        es = [u for u in uc if u[2] in ids]
        if es:
            nedenler.append("iii:yerlesim-ucu(%d: %s)" % (len(es), ", ".join(
                "%s %s:%s.%s" % (a, k, d, u) for a, k, d, u in es[:4])))
        yab = [u for u in uc if u[2] not in ids]
        if yab:
            bilgi.append("aynı gün başka kimlik ucu %d: %s" % (len(yab), ", ".join(
                "%s %s:%s.%s" % (a, k, d, u) for a, k, d, u in yab[:4])))
        return bool(nedenler), " + ".join(nedenler), " · ".join(bilgi)

    def pencere_disi(self, dosya, anahtar, yeni_t):
        kid = _kunye_id(dosya, anahtar)
        if not kid or kid not in self.kunye:
            return ""
        D = self.D
        f, tt = self.kunye[kid]
        g = D.gun_no(D.pad(yeni_t))
        if f and g < D.gun_no(D.pad(f)):
            return "künye-penceresi: %s < %s.f %s" % (yeni_t, kid, f)
        if tt and g > D.gun_no(D.pad(tt)):
            return "künye-penceresi: %s > %s.t %s" % (yeni_t, kid, tt)
        return ""


def _yil_metni(t):
    y = int(t[:-6]) if t.startswith("-") else int(t[:4])
    return ("MÖ %d" % (1 - y)) if y <= 0 else str(y)


def _yila_in(t):
    """'1311-03-15' → '1311-01-01' ; '-0017-05-02' → '-0017-01-01'."""
    return t[:-6] + "-01-01"


def uygula_yil_satir(metin, dosya, r, bagli):
    """Karar ①'i tek maddeye uygular → (yeni_metin, durum, ayrinti, eski_t, yeni_t)."""
    yeni = r["yeni_kaynak"].strip()
    bolge = (0, None)
    if dosya == "data/devletler.js":
        bolge = _kunye_bolgesi(metin, r["anahtar"].split("#")[0])
        if not bolge:
            return metin, "eslenemedi", "künye yok", r["t"], r["t"]
    nes = _nesne_bul(metin, r["t"], r["b"], bolge)
    if len(nes) != 1:
        return metin, "eslenemedi", "%d nesne t+b ile eşleşti" % len(nes), r["t"], r["t"]
    a, son = nes[0]
    anah = _ust_anahtarlar(metin, a, son)
    tirnakli = any(v[2] for v in anah.values())
    eski_t = r["t"]
    hedef_t = _yila_in(eski_t)
    indir = (not bagli) and hedef_t != eski_t
    duzen = []          # (bas, son, yeni_metin) — sondan başa uygulanır
    eklenecek = []      # kapanıştan önce eklenecek "anahtar: değer"
    # kaynak
    kyn = yeni + ("" if (indir or hedef_t == eski_t) else YIL_NOTU)
    if "kaynak" in anah:
        ka, ks, _ = anah["kaynak"]
        if ka is None:
            return metin, "eslenemedi", "kaynak dizge değil", eski_t, eski_t
        eski = _js_dizge_oku(metin[ka:ks])
        if not eski.startswith(yeni):
            duzen.append((ka, ks, _js_dizge(kyn + (" ; " + eski if eski.strip() else ""))))
    else:
        eklenecek.append(("kaynak", kyn))
    if indir:
        tb, ts, _ = anah["t"]
        duzen.append((tb, ts, _js_dizge(hedef_t)))
        not_ = ("gün yalnız güvensiz kaynakta: %s" % eski_t)
        if "gun" in anah and anah["gun"][0] is not None:
            ga, gs, _ = anah["gun"]
            eski_gun = _js_dizge_oku(metin[ga:gs])
            not_ += " (gun: «%s»)" % eski_gun
            duzen.append((ga, gs, _js_dizge(_yil_metni(hedef_t))))
        kt = (r.get("kaynak_tarihi") or "").strip()
        if kt:
            not_ += "; güvenilir kaynağın tarihi: %s" % kt
        not_ += "; %s Emre kararıyla yıla indirildi (TEYIT-KARAR-1014)" % KARAR_TARIHI
        if "ic_not_t" in anah and anah["ic_not_t"][0] is not None:
            na, ns, _ = anah["ic_not_t"]
            duzen.append((na, ns, _js_dizge(_js_dizge_oku(metin[na:ns]) + " · " + not_)))
        else:
            eklenecek.append(("ic_not_t", not_))
    if eklenecek:
        k = son
        while metin[k - 1] in " \t\r\n,":
            k -= 1
        ek = "".join((', "%s": ' % ad if tirnakli else ", %s:" % ad) + _js_dizge(v)
                     for ad, v in eklenecek)
        duzen.append((k, k, ek))
    if not duzen:
        return metin, "zaten", "", eski_t, eski_t
    for b0, s0, yv in sorted(duzen, key=lambda x: -x[0]):
        metin = metin[:b0] + yv + metin[s0:]
    return metin, ("indi" if indir else ("zaten-yil" if hedef_t == eski_t else "bagli-notlu")), "", \
        eski_t, (hedef_t if indir else eski_t)


def _baglanti_guncelle(degisen, kuru, bellek=None):
    bellek = bellek or {}
    """t'si değişen maddeye (dosya + eski t + b) dosya adıyla bağlı kayıtları (yer_yama_* vb.)
    yeni t'ye çeker. → [(dosya, eski_t, b, kayit_dosyasi, sayi)]"""
    out = []
    if not degisen:
        return out
    ddir = os.path.join(KOK, "data")
    adaylar = [f for f in sorted(os.listdir(ddir)) if f.endswith(".js")
               and f not in URETILMIS and not f.startswith("paket_") and "_parca" not in f]
    for f in adaylar:
        yol = os.path.join(ddir, f)
        metin = bellek.get("data/" + f)
        if metin is None:
            metin = io.open(yol, encoding="utf-8", newline="").read()
        once = metin
        for dosya, eski_t, yeni_t, b in degisen:
            if b not in metin and _js_dizge(b)[1:-1] not in metin:
                continue
            nes = _nesne_bul(metin, eski_t, b)
            n = 0
            for a, son in sorted(nes, reverse=True):
                anah = _ust_anahtarlar(metin, a, son)
                if "dosya" not in anah or anah["dosya"][0] is None:
                    out.append((dosya, eski_t, b, "data/" + f, "DOSYASIZ-ESLESME (dokunulmadı)"))
                    continue
                dv = _js_dizge_oku(metin[anah["dosya"][0]:anah["dosya"][1]])
                if os.path.basename(dv) != os.path.basename(dosya):
                    continue
                tb, ts, _ = anah["t"]
                metin = metin[:tb] + _js_dizge(yeni_t) + metin[ts:]
                n += 1
            if n:
                out.append((dosya, eski_t, b, "data/" + f, str(n)))
        if metin != once and not kuru:
            with io.open(yol, "w", encoding="utf-8", newline="") as fh:
                fh.write(metin)
    return out


def yil_karari(satirlar, kuru, rapor_dizin):
    B = Baglilik()
    dosyalar, sonuc, degisen = {}, [], []
    for r in satirlar:
        h = (r.get("hukum") or "").strip()
        if h != "teyit-yil":
            continue
        if not (r.get("yeni_kaynak") or "").strip():
            sonuc.append((r, "eslenemedi", "", "", "yeni_kaynak boş", r["t"], r["t"]))
            continue
        d = r["dosya"]
        bagli, neden, bilgi = B.olc(d, r["anahtar"], r["t"], r["b"])
        if not bagli:
            pd = B.pencere_disi(d, r["anahtar"], _yila_in(r["t"]))
            if pd and _yila_in(r["t"]) != r["t"]:
                bagli, neden = True, pd
        if d not in dosyalar:
            dosyalar[d] = io.open(os.path.join(KOK, d), encoding="utf-8", newline="").read()
        dosyalar[d], durum, ayr, et, yt = uygula_yil_satir(dosyalar[d], d, r, bagli)
        if durum == "indi":
            degisen.append((d, et, yt, r["b"]))
        sonuc.append((r, durum, "evet" if bagli else "hayir", neden, " · ".join(
            x for x in (ayr, bilgi) if x), et, yt))
    if not kuru:
        for d, m in dosyalar.items():
            with io.open(os.path.join(KOK, d), "w", encoding="utf-8", newline="") as f:
                f.write(m)
    bag = _baglanti_guncelle(degisen, kuru, dosyalar)
    say = {}
    for s in sonuc:
        say[s[1]] = say.get(s[1], 0) + 1
    print("teyit-yil satırı: %d" % len(sonuc))
    for k, v in sorted(say.items(), key=lambda x: -x[1]):
        print("  %5d  %s" % (v, k))
    print("bağlı kayıt güncellemesi: %d" % len(bag))
    for x in bag:
        print("   ", x[3], x[1], "→", x[4], "·", x[2][:60])
    if rapor_dizin:
        os.makedirs(rapor_dizin, exist_ok=True)
        with io.open(os.path.join(rapor_dizin, "uygulama.tsv"), "w", encoding="utf-8",
                     newline="") as f:
            w = csv.writer(f, delimiter="\t", lineterminator="\n")
            w.writerow(["tablo", "anahtar", "dosya", "t_eski", "t_yeni", "b", "hukum", "durum",
                        "sinira_bagli", "baglilik_nedeni", "ayrinti", "kaynak_tarihi"])
            for r, durum, bg, neden, ayr, et, yt in sonuc:
                w.writerow([r["_tablo"], r["anahtar"], r["dosya"], et, yt, r["b"], "teyit-yil",
                            durum, bg, neden, ayr, r.get("kaynak_tarihi", "")])
        with io.open(os.path.join(rapor_dizin, "baglanti.tsv"), "w", encoding="utf-8",
                     newline="") as f:
            w = csv.writer(f, delimiter="\t", lineterminator="\n")
            w.writerow(["madde_dosyasi", "t_eski", "b", "kayit_dosyasi", "guncellenen"])
            for x in bag:
                w.writerow([x[0], x[1], x[2], x[3], x[4]])
    kotu = sum(1 for s in sonuc if s[1] == "eslenemedi") + \
        sum(1 for x in bag if x[4].startswith("DOSYASIZ"))
    return 1 if kotu else 0


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
    if "--yil-karari" in argv:
        return yil_karari(satirlar, kuru, rapor_dizin)
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
