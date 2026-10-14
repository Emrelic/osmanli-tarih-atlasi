# -*- coding: utf-8 -*-
"""KAYNAK GÜVEN ÖLÇÜMÜ — kronoloji maddelerinin kaynaklarını sınıflar (SALT OKUR).

KAYNAK-GUVEN-1014 · Emre'nin kuralı (14 Ekim 2026): güvensiz kaynaktan alınan
bilgi güvenli kaynakla teyit edilir; teyit edilemeyen bilgi "güvensiz kaynak"
damgası alır ve SİTEDE KULLANILMAZ.

TABLO   data/kaynak_guven.js (`window.KAYNAK_GUVEN`) — TEK DOĞRULUK KAYNAĞI.
        Bu araç tabloya kural EKLEMEZ; sınıflama mantığı tablonun başındaki
        yorumda tarif edilenin aynısıdır (app.js de aynısını uygulayacak).

EVREN   ① index.html'in GERÇEKTE yüklediği `data/olaylar*.js` + `data/kronoloji*.js`
          (arac/paket_coz.py ile paketler çözülür) — "dosya kronolojileri"
        ② data/devletler.js künyelerinin `kronoloji[]` maddeleri — "künye kronolojileri"
        ③ künyelerin kendi `kaynak` alanı — ayrı sayılır
        Yükleme arac/silsile_yukle.js (node vm, tarayıcı gibi) — regex ile değil.

PARÇA   js/app.js `kaynakcaParcala` ile AYNI bölme; araç her koşuda app.js'teki
        fonksiyonu node'da çalıştırıp bütün kaynak dizgelerinde KARŞILAŞTIRIR
        (iki yönlü: aynı parça sayısı + aynı parçalar). Fark çıkarsa çıkış 2.

DEĞİŞMEZ 2 BAĞIMLILIĞI
        arac/denetle.py `degismez2` / `kapsam_disi` / `yil_temsili_ayir` İÇE
        AKTARILIR (kopyalanmaz). Madde evreni süzülerek yeniden çağrılır:
        süzülmüş evrende AÇIK olup tam evrende AÇIK olmayan kırılma = tanıkları
        yalnız süzülen maddelerden oluşan kırılma.

KULLANIM
    py arac/kaynak_guven.py            # ölç → denetim/KAYNAK-GUVEN-1014/
    py arac/kaynak_guven.py --sinav    # iki yönlü sınav
    py arac/kaynak_guven.py --d2-yok   # Değişmez 2 bölümünü atla (hızlı)
ÇIKIŞ   0 temiz/ölçüldü · 1 sınav kaldı · 2 ölçülemedi
"""
import argparse
import collections
import glob
import hashlib
import json
import os
import re
import subprocess
import sys
import tempfile

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
from paket_coz import index_kaynaklari          # noqa: E402

TABLO_YOLU = os.path.join(KOK, "data", "kaynak_guven.js")
CIKTI = os.path.join(KOK, "denetim", "KAYNAK-GUVEN-1014")
KADEME_SIRA = {"A": 0, "B": 1, "K": 2, "C": 3, "Y": 4, "N": 5}
DAMGALAR = ("guvenli", "ikincil", "taninmayan", "guvensiz", "bulunamadi", "bos")


class Olculemedi(Exception):
    pass


# ════════════════════════════════════════════════════════════════════════
# TABLO
# ════════════════════════════════════════════════════════════════════════
def tablo_oku(yol=TABLO_YOLU):
    s = open(yol, encoding="utf-8").read()
    i = s.index("\nwindow.KAYNAK_GUVEN = ") + len("\nwindow.KAYNAK_GUVEN = ")
    govde = s[i:].rstrip().rstrip(";")
    return json.loads(govde), hashlib.sha256(s.encode("utf-8")).hexdigest()[:12]


class Siniflayici:
    def __init__(self, T):
        self.T = T
        self.ayirici = re.compile(T["parcala"]["ayirici"])
        self.bulunamadi = re.compile(T["bulunamadi_desen"], re.I)
        self.slug = re.compile(T["tdv_slug"]["desen"])
        self.slug_haric = set(T["tdv_slug"]["haric"])
        self.girdiler = []
        for e in T["kaynaklar"]:
            rx = [re.compile(p, re.I) for p in e.get("desen", [])]
            rx += [re.compile(p) for p in e.get("desen_duyarli", [])]
            self.girdiler.append((e["kod"], e["kademe"], bool(e.get("genel")), rx,
                                  e.get("yalniz_sonra"), e.get("once_kademe")))
        self.tdv_kademe = next(e["kademe"] for e in T["kaynaklar"] if e["kod"] == "TDV")

    @staticmethod
    def metin(k):
        """JS `String(k)` karşılığı (dizi → virgülle birleşir)."""
        if k is None:
            return None
        if isinstance(k, list):
            return ",".join("" if x is None else str(x) for x in k)
        return str(k)

    def parcala(self, k):
        return [p.strip() for p in self.ayirici.split(self.metin(k)) if p.strip()]

    @staticmethod
    def tarih_iso(t):
        """Madde tarihini ISO dizgeye çevirir (yıl 4 haneye); okunamazsa/negatifse None."""
        m = re.match(r"^(\d{1,4})(?:-(\d{1,2}))?(?:-(\d{1,2}))?", str(t or "").strip())
        if not m:
            return None
        return "%04d-%02d-%02d" % (int(m.group(1)), int(m.group(2) or 1), int(m.group(3) or 1))

    def _eslesen(self, metin, tarih=None):
        """tarih: ISO dizge ya da None. `yalniz_sonra` girdisi tarih ondan önceyse
        ya da tarih yoksa `once_kademe` ile sayılır (tablo başındaki TARİH KOŞULU)."""
        ozel, genel = [], []
        for kod, kad, gen, rx, sonra, once in self.girdiler:
            if any(r.search(metin) for r in rx):
                if sonra and (tarih is None or tarih < sonra):
                    kad = once
                (genel if gen else ozel).append((kod, kad))
        return ozel or genel

    def parca_sinifla(self, p, tarih=None):
        """→ (kademe | None, [kod…], karisik:bool). None = TANINMAYAN."""
        es = []
        m = self.slug.match(p)
        if m and m.group(1) not in self.slug_haric:
            es.append(("TDV", self.tdv_kademe))
            if m.group(2):
                es += self._eslesen(m.group(2), tarih)
        else:
            es = self._eslesen(p, tarih)
        if not es:
            return None, [], False
        kadeler = {k for _, k in es}
        kodlar = sorted({c for c, _ in es})
        if "C" in kadeler and kadeler & {"A", "B"}:
            return "C", kodlar, True
        en = min(kadeler, key=lambda x: KADEME_SIRA[x])
        return en, kodlar, False

    def damgala(self, kaynak, t=None):
        """→ dict(damga, alt, parcalar=[(parca, kademe, kodlar, karisik)], ic=…).
        t: maddenin tarihi (`yalniz_sonra` koşulu için)."""
        k = self.metin(kaynak)
        if k is None or not k.strip():
            return {"damga": "bos", "alt": None, "parcalar": []}
        k = k.strip()
        tarih = self.tarih_iso(t)
        parcalar = [(p,) + self.parca_sinifla(p, tarih) for p in self.parcala(k)]
        kad = {x[1] for x in parcalar}
        if self.bulunamadi.match(k):
            # "bulunamadı — dayanak: X" — iç dayanağın en iyi kademesi AYRICA sayılır
            ic = [x[1] for x in parcalar[1:] if x[1] in ("A", "B")]
            ic += [x[1] for x in [(None,) + self.parca_sinifla(
                re.sub(r"^bulunamad[ıi]\.?\s*[—–:-]*\s*", "", parcalar[0][0], flags=re.I), tarih)]
                if x[1] in ("A", "B")] if parcalar else []
            return {"damga": "bulunamadi", "alt": None, "parcalar": parcalar,
                    "ic": min(ic, key=lambda x: KADEME_SIRA[x]) if ic else None}
        alt = None
        if "A" in kad:
            d = "guvenli"
        elif "B" in kad:
            d = "ikincil"
        elif None in kad or "K" in kad:
            d = "taninmayan"
        elif "C" in kad:
            d, alt = "guvensiz", "C"
        else:
            # Emre onayı 14 Ekim 2026: adsız beyan (yalnız Y/N) GÜVENSİZ'e katılır
            d, alt = "guvensiz", "adsiz"
        return {"damga": d, "alt": alt, "parcalar": parcalar}


# ════════════════════════════════════════════════════════════════════════
# YÜKLEME (index.html → paket_coz → silsile_yukle.js)
# ════════════════════════════════════════════════════════════════════════
def evren_yukle():
    kay = index_kaynaklari(KOK)
    dosyalar = [x for x in kay if re.match(r"^data/(olaylar|kronoloji)[^/]*\.js$", x)]
    if not dosyalar:
        raise Olculemedi("index.html'den 0 kronoloji dosyası çözüldü")
    if "data/devletler.js" not in kay:
        raise Olculemedi("index.html data/devletler.js yüklemiyor")
    with tempfile.NamedTemporaryFile("w", suffix=".txt", delete=False, encoding="utf-8") as f:
        f.write("\n".join(dosyalar + ["data/devletler.js"]))
        liste = f.name
    try:
        r = subprocess.run(["node", os.path.join("arac", "silsile_yukle.js"), liste],
                           capture_output=True, cwd=KOK)
    finally:
        os.unlink(liste)
    if r.returncode != 0:
        raise Olculemedi("silsile_yukle.js: " + r.stderr.decode("utf-8", "replace")[:600])
    j = json.loads(r.stdout.decode("utf-8"))
    hatali = [d for d in j["dosyalar"] if d["hata"]]
    if hatali:
        raise Olculemedi("yüklenemeyen dosya: %s" % [(d["dosya"], d["hata"]) for d in hatali])
    if j["maddeler"] and "kaynak" not in j["maddeler"][0]:
        raise Olculemedi("silsile_yukle.js `kaynak` alanını taşımıyor (eski yükleyici?)")
    F, KK, KU = [], [], []
    for m in j["maddeler"]:
        if m["dosya"] == "data/devletler.js":
            if m.get("dizi") != "DEVLETLER":
                continue
            KU.append({"evren": "kunye", "dosya": m["dosya"], "anahtar": m.get("id"),
                       "t": m.get("f"), "b": m.get("ad"), "bolge": m.get("bolge"),
                       "kaynak": m.get("kaynak")})
            for jx, kk in enumerate(m.get("kronoloji") or []):
                if not kk:
                    continue
                KK.append({"evren": "kunye-kronoloji", "dosya": m["dosya"],
                           "anahtar": "%s#%d" % (m.get("id"), jx), "devlet": m.get("id"),
                           "bolge": m.get("bolge"), "t": kk.get("t"), "b": kk.get("b"),
                           "kaynak": kk.get("kaynak")})
        else:
            F.append({"evren": "dosya", "dosya": m["dosya"],
                      "anahtar": "%s[%d]" % (m["dizi"], m["i"]), "t": m.get("t"),
                      "b": m.get("b"), "kaynak": m.get("kaynak")})
    if not KU or not KK or not F:
        raise Olculemedi("boş evren: dosya %d · künye %d · künye-kronoloji %d"
                         % (len(F), len(KU), len(KK)))
    return dosyalar, F, KK, KU


def app_parcala_karsilastir(S, metinler):
    """js/app.js `kaynakcaParcala`yı node'da çalıştırır, Python bölmesiyle kıyaslar."""
    app = open(os.path.join(KOK, "js", "app.js"), encoding="utf-8").read()
    m = re.search(r"\nfunction kaynakcaParcala\(k\) \{.*?\n\}\n", app, re.S)
    if not m:
        raise Olculemedi("js/app.js içinde `function kaynakcaParcala` bulunamadı")
    d = tempfile.mkdtemp(prefix="kg_")
    gir, js = os.path.join(d, "g.json"), os.path.join(d, "p.js")
    json.dump(metinler, open(gir, "w", encoding="utf-8"), ensure_ascii=False)
    open(js, "w", encoding="utf-8").write(
        m.group(0) + "\nconst fs=require('fs');const L=JSON.parse(fs.readFileSync(process.argv[2],'utf8'));"
        "process.stdout.write(JSON.stringify(L.map(kaynakcaParcala)));\n")
    r = subprocess.run(["node", js, gir], capture_output=True)
    for y in (gir, js):
        os.unlink(y)
    os.rmdir(d)
    if r.returncode != 0:
        raise Olculemedi("app.js kaynakcaParcala koşturulamadı: "
                         + r.stderr.decode("utf-8", "replace")[:400])
    jsp = json.loads(r.stdout.decode("utf-8"))
    farklar = [(t, a, S.parcala(t)) for t, a in zip(metinler, jsp) if a != S.parcala(t)]
    return len(metinler), farklar


# ════════════════════════════════════════════════════════════════════════
# DEĞİŞMEZ 2 BAĞIMLILIĞI (denetle.py içe aktarılır)
# ════════════════════════════════════════════════════════════════════════
def d2_olc(S, log):
    import io
    import contextlib
    import denetle as D
    buf = io.StringIO()
    with contextlib.redirect_stdout(buf):
        Y = D.yerlesimleri_yukle()
    O_ref = D.olaylari_yukle()
    # Aynı evren, dosya etiketiyle — denetle.olaylari_yukle() ile AYNI glob/sıra/okuyucu
    yollar = sorted(glob.glob(os.path.join(D.DATA, "olaylar*.js")))
    yollar += sorted(glob.glob(os.path.join(D.DATA, "kronoloji_sinir*.js")))
    O = []
    for yol in yollar:
        js = open(yol, encoding="utf-8").read()
        m = re.search(r"window\.(OLAYLAR\w*|KRONOLOJI_SINIR\w*)\s*=", js)
        if not m:
            continue
        for i, o in enumerate(D.oku_pencere(yol, m.group(1))):
            o = dict(o)
            o["_dosya"] = "data/" + os.path.basename(yol)
            o["_anahtar"] = "%s[%d]" % (m.group(1), i)
            O.append(o)
    if len(O) != len(O_ref) or any(a.get("t") != b.get("t") or a.get("b") != b.get("b")
                                   for a, b in zip(O, O_ref)):
        raise Olculemedi("D2 evreni denetle.olaylari_yukle() ile birebir aynı kurulamadı "
                         "(%d ≠ %d)" % (len(O), len(O_ref)))
    for o in O:
        o["_damga"] = S.damgala(o.get("kaynak"), o.get("t"))["damga"]
    Yc = [y for y in Y if y.get("_kaynak") not in D.KUYRUK_DOSYALARI]
    log("  D2 evreni: %d madde (%d dosya) · %d yerleşim (%d çekirdek)"
        % (len(O), len(yollar), len(Y), len(Yc)))

    def kol(Ox):
        out = {}
        with contextlib.redirect_stdout(io.StringIO()):
            kir, acik = D.degismez2(Yc, Ox)
            out["2"] = (kir, {a[0]: a for a in acik}, {a[0]: a for a in acik})
            kir_s, acik_ham = D.degismez2(Yc, Ox, ("s",), yer_sarti=True)
            ici, _disi = D.kapsam_disi(Y, acik_ham)
            _yil, acik_s = D.yil_temsili_ayir(ici)
            out["2s"] = (kir_s, {a[0]: a for a in acik_ham}, {a[0]: a for a in acik_s})
            kir_i, acik_i = D.degismez2(Yc, Ox, ("isg",))
            out["2i"] = (kir_i, {a[0]: a for a in acik_i}, {a[0]: a for a in acik_i})
        return out

    taban = kol(O)
    senaryolar = [
        ("S1-guvensiz", {"guvensiz"}),
        ("S2-guvensiz+bos+bulunamadi", {"guvensiz", "bos", "bulunamadi"}),
        ("S3-yalniz-AB-kalir", {"guvensiz", "bos", "bulunamadi", "taninmayan"}),
    ]
    sonuc = {"evren_madde": len(O), "evren_dosya": len(yollar),
             "damga_d2_evreni": dict(collections.Counter(o["_damga"] for o in O)),
             "taban": {k: {"kirilma": len(v[0]), "acik_ham": len(v[1]), "acik": len(v[2])}
                       for k, v in taban.items()},
             "senaryo": {}}
    satirlar = []
    for ad, sil in senaryolar:
        Of = [o for o in O if o["_damga"] not in sil]
        silinen = [o for o in O if o["_damga"] in sil]
        ss = kol(Of)
        sonuc["senaryo"][ad] = {"silinen_madde": len(silinen)}
        for dg in ("2", "2s", "2i"):
            kir, ham0, son0 = taban[dg]
            _, ham1, son1 = ss[dg]
            yeni_ham = sorted(set(ham1) - set(ham0))
            yeni_son = sorted(set(son1) - set(son0))
            sonuc["senaryo"][ad][dg] = {"yeni_acik_ham": len(yeni_ham), "yeni_acik": len(yeni_son),
                                        "acik_ham": len(ham1), "acik": len(son1)}
            for d in yeni_ham:
                gd = D.gun_no(d)
                tan = sorted((o for o in silinen if abs(D.gun_no(o["t"]) - gd) <= 30),
                             key=lambda o: abs(D.gun_no(o["t"]) - gd))
                k = kir[d]
                adlar = ham1[d][2]
                sah = ["%s: %s→%s" % (a, k["sahip"].get(a, {}).get("eski", ""),
                                      k["sahip"].get(a, {}).get("yeni", "")) for a in adlar[:4]]
                satirlar.append([ad, dg, d, k["t"], "evet" if d in yeni_son else "hayir",
                                 str(len(k["ad"])), ", ".join(adlar[:4]), " | ".join(sah),
                                 str(len(tan)),
                                 " || ".join("%s %s %s [%s] %s" % (o["_dosya"], o["_anahtar"], o["t"],
                                                                   o["_damga"], o.get("b") or "")
                                             for o in tan[:5]),
                                 " || ".join(S.metin(o.get("kaynak")) or "" for o in tan[:5])])
    return sonuc, satirlar, yollar


# ════════════════════════════════════════════════════════════════════════
# SINAV
# ════════════════════════════════════════════════════════════════════════
SINAV = [
    ("osman-gazi", "guvenli"),
    ("https://islamansiklopedisi.org.tr/osman-gazi", "guvenli"),
    ("TDV İslâm Ansiklopedisi, «Osman Gazi» — islamansiklopedisi.org.tr/osman-gazi", "guvenli"),
    ("https://tr.wikipedia.org/wiki/Osman_Gazi", "guvensiz"),
    ("tr.wikipedia.org/wiki/Osman_Gazi", "guvensiz"),
    ("Vikipedi + TDV osman-gazi", "guvenli"),
    ("Vikipedi + osman-gazi", "guvenli"),
    ("Vikipedi + TDV", "guvenli"),
    ("Encyclopaedia Iranica, madde: NĀṢER-AL-DIN SHAH QAJAR ii. TRAVEL DIARIES", "guvenli"),
    ("CDLI 'silli-sin' https://cdli.ox.ac.uk/wiki/silli-sin", "guvenli"),
    ("Wien Geschichte Wiki, 'Attentate'", "ikincil"),
    ("https://en.wikipedia.org/wiki/Free_City_of_L%C3%BCbeck", "guvensiz"),
    ("https://kureansiklopedi.com/tr/detay/x (TDV Vakfı, X)", "guvensiz"),
    ("en.wikipedia.org/wiki/X; hassasiyet: YIL", "guvensiz"),
    ("bulunamadı", "bulunamadi"),
    ("bulunamadı — TDV kapsamıyor", "bulunamadi"),
    ("", "bos"),
    (None, "bos"),
    ("   ", "bos"),
    ("https://www.britannica.com/event/Korean-War", "ikincil"),
    ("Britannica · en.wikipedia.org/wiki/Korean_War", "ikincil"),
    ("Encyclopaedia Iranica, «Kia»", "guvenli"),
    ("Cambridge History of Iran, c.6", "guvenli"),
    ("standart akademik kaynak", "guvensiz"),
    ("el-kitabi", "guvensiz"),
    ("Taylor, CUP 2013 (Wikipedia 'Timeline' üzerinden)", "guvensiz"),
    ("https://www.worldhistory.org/Syracuse/", "guvensiz"),
    ("Qwzx Plorb, Bilinmeyen Eser", "taninmayan"),
    ("https://archive.org/details/x", "taninmayan"),
    ("Un traité de paix", "taninmayan"),
]


# Tarihli vakalar: (kaynak, madde tarihi, beklenen damga, beklenen alt neden)
SINAV_TARIHLI = [
    ("https://www.aljazeera.com/news/x", "1950-03-01", "ikincil", None),
    ("https://www.aljazeera.com/news/x", "1850-03-01", "guvensiz", "C"),
    ("https://www.aljazeera.com/news/x", "1946-01-01", "ikincil", None),
    ("https://www.aljazeera.com/news/x", "1945-12-31", "guvensiz", "C"),
    ("https://www.aljazeera.com/news/x", None, "guvensiz", "C"),
    ("https://www.aljazeera.com/news/x", "-500-01-01", "guvensiz", "C"),
    ("BBC (bbc.co.uk) + https://islamansiklopedisi.org.tr/x", "1850-01-01", "guvenli", None),
    ("https://www.britannica.com/x", "1850-01-01", "ikincil", None),
    ("standart akademik kaynak", "1700-01-01", "guvensiz", "adsiz"),
    ("standart akademik kaynak (Kamen)", "1700-01-01", "guvenli", None),
    ("en.wikipedia.org/wiki/X", "1700-01-01", "guvensiz", "C"),
    ("hassasiyet: YIL", "1700-01-01", "guvensiz", "adsiz"),
]


def sinav(S):
    hata = 0
    for k, bek in SINAV:
        d = S.damgala(k)["damga"]
        ok = d == bek
        hata += not ok
        print("  %s %-62r → %-11s (beklenen %s)" % ("✓" if ok else "✗", k, d, bek))
    for k, t, bek, bek_alt in SINAV_TARIHLI:
        r = S.damgala(k, t)
        ok = r["damga"] == bek and r["alt"] == bek_alt
        hata += not ok
        print("  %s %-50r t=%-11s → %s/%s (beklenen %s/%s)"
              % ("✓" if ok else "✗", k, t, r["damga"], r["alt"], bek, bek_alt))
    return hata


# ════════════════════════════════════════════════════════════════════════
# ANA
# ════════════════════════════════════════════════════════════════════════
def git(*a):
    r = subprocess.run(["git"] + list(a), capture_output=True, cwd=KOK)
    return r.stdout.decode("utf-8", "replace").strip()


def yuzyil(t):
    m = re.match(r"^(-?)(\d{1,4})", str(t or ""))
    if not m:
        return "?"
    y = int(m.group(2)) * (-1 if m.group(1) else 1)
    return "%d" % ((y // 100) * 100)


def tsv(ad, bas, satirlar):
    with open(os.path.join(CIKTI, ad), "w", encoding="utf-8", newline="\n") as f:
        f.write("\t".join(bas) + "\n")
        for s in satirlar:
            f.write("\t".join(re.sub(r"[\t\r\n]+", " ", str(x)) for x in s) + "\n")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--sinav", action="store_true")
    ap.add_argument("--d2-yok", action="store_true")
    a = ap.parse_args()
    os.chdir(KOK)
    try:
        T, tablo_ozet = tablo_oku()
        S = Siniflayici(T)
    except Exception as e:
        print("ÖLÇÜLEMEDİ: tablo okunamadı: %s" % e)
        return 2
    if a.sinav:
        print("SINAV — %d vaka" % (len(SINAV) + len(SINAV_TARIHLI)))
        h = sinav(S)
        print("SINAV %s (%d hata)" % ("GEÇTİ" if not h else "KALDI", h))
        return 1 if h else 0

    def log(*x):
        print(*x, flush=True)

    os.makedirs(CIKTI, exist_ok=True)
    taban_commit = git("rev-parse", "HEAD")
    kirli = git("status", "--porcelain", "--", "data", "arac/silsile_yukle.js",
                "arac/kaynak_guven.py", "js/app.js", "index.html")
    olculemedi = []
    log("evren yükleniyor (index.html → paket_coz → silsile_yukle.js)…")
    try:
        dosyalar, F, KK, KU = evren_yukle()
    except Olculemedi as e:
        print("ÖLÇÜLEMEDİ:", e)
        return 2
    log("  %d kronoloji/olay dosyası · %d dosya maddesi · %d künye · %d künye-kronoloji maddesi"
        % (len(dosyalar), len(F), len(KU), len(KK)))

    # app.js bölmesiyle karşılaştırma
    metinler = sorted({S.metin(x["kaynak"]) for x in F + KK + KU
                       if x["kaynak"] is not None and S.metin(x["kaynak"]).strip()})
    try:
        n_kars, farklar = app_parcala_karsilastir(S, metinler)
    except Olculemedi as e:
        olculemedi.append(str(e))
        n_kars, farklar = 0, []
    if farklar:
        olculemedi.append("app.js bölmesiyle %d dizgede fark" % len(farklar))
    log("  app.js kaynakcaParcala karşılaştırması: %d farklı dizge · %d fark" % (n_kars, len(farklar)))

    # Damgala
    for x in F + KK + KU:
        r = S.damgala(x["kaynak"], x["t"])
        x["alt"] = r.get("alt")
        x["damga"] = r["damga"]
        x["parcalar"] = r["parcalar"]
        x["ic"] = r.get("ic")

    def say(L):
        c = collections.Counter(x["damga"] for x in L)
        return {d: c.get(d, 0) for d in DAMGALAR}

    oz = {"surum": T["surum"], "taban_commit": taban_commit,
          "calisma_agaci_kirli": bool(kirli), "kirli_dosyalar": kirli.splitlines(),
          "tablo_sha256_12": tablo_ozet, "tablo_girdi": len(T["kaynaklar"]),
          "evren": {"kronoloji_dosyasi": len(dosyalar), "dosya_madde": len(F),
                    "kunye": len(KU), "kunye_kronoloji_madde": len(KK)},
          "damga": {"dosya": say(F), "kunye_kronoloji": say(KK), "kunye_kaynak": say(KU)},
          "app_parcala": {"karsilastirilan_dizge": n_kars, "fark": len(farklar)}}
    oz["guvensiz_alt"] = {ad: dict(collections.Counter(x["alt"] for x in L if x["damga"] == "guvensiz"))
                          for ad, L in (("dosya", F), ("kunye_kronoloji", KK), ("kunye_kaynak", KU))}
    # bulunamadı içinde dayanak
    for ad, L in (("dosya", F), ("kunye_kronoloji", KK)):
        c = collections.Counter(x["ic"] for x in L if x["damga"] == "bulunamadi")
        oz.setdefault("bulunamadi_ic_dayanak", {})[ad] = {"A": c.get("A", 0), "B": c.get("B", 0),
                                                         "yok": c.get(None, 0)}
    # parça istatistikleri
    pk = collections.Counter()
    kod_say = collections.Counter()
    karisik = collections.Counter()
    taninmayan = collections.Counter()
    tan_ornek = {}
    for x in F + KK + KU:
        for p, kad, kodlar, kar in x["parcalar"]:
            pk[kad or "TANINMAYAN"] += 1
            for c in kodlar:
                kod_say[c] += 1
            if kar:
                karisik[p] += 1
            if kad is None:
                taninmayan[p] += 1
                tan_ornek.setdefault(p, "%s %s" % (x["dosya"], x["anahtar"]))
    oz["parca_kademe"] = dict(pk)
    oz["parca_karisik"] = sum(karisik.values())
    oz["kod_say"] = dict(kod_say.most_common())
    oz["taninmayan_ayri_parca"] = len(taninmayan)
    # tanınmayan alan adları
    alan = collections.Counter()
    for p, n in taninmayan.items():
        for d in set(re.findall(r"(?:https?://)?(?:www\.)?([a-z0-9][a-z0-9-]*(?:\.[a-z0-9-]+)*\.[a-z]{2,6})(?=[/\s,)»'\"]|$)", p.lower())):
            if not re.search(r"\.(js|py|md|json|html?|php|asp|pdf)$", d):
                alan[d] += n

    # TSV'ler
    tsv("damga_dosya.tsv", ["dosya", "madde"] + list(DAMGALAR),
        [[d, sum(1 for x in F if x["dosya"] == d)] +
         [sum(1 for x in F if x["dosya"] == d and x["damga"] == g) for g in DAMGALAR]
         for d in dosyalar])
    bol = sorted({x["bolge"] or "?" for x in KK})
    tsv("damga_kunye_bolge.tsv", ["bolge", "madde"] + list(DAMGALAR),
        [[b, sum(1 for x in KK if (x["bolge"] or "?") == b)] +
         [sum(1 for x in KK if (x["bolge"] or "?") == b and x["damga"] == g) for g in DAMGALAR]
         for b in bol])
    yy = collections.defaultdict(collections.Counter)
    for x in F:
        yy[("dosya", yuzyil(x["t"]))][x["damga"]] += 1
    for x in KK:
        yy[("kunye-kronoloji", yuzyil(x["t"]))][x["damga"]] += 1

    def ykey(k):
        try:
            return (k[0], int(k[1]))
        except ValueError:
            return (k[0], 99999)
    tsv("damga_yuzyil.tsv", ["evren", "yuzyil", "madde"] + list(DAMGALAR),
        [[k[0], k[1], sum(yy[k].values())] + [yy[k].get(g, 0) for g in DAMGALAR]
         for k in sorted(yy, key=ykey)])
    tsv("taninmayan_parca.tsv", ["sira", "adet", "parca", "ornek_madde"],
        [[i + 1, n, p, tan_ornek[p]] for i, (p, n) in enumerate(taninmayan.most_common(300))])
    tsv("taninmayan_alanadi.tsv", ["adet", "alan_adi"], [[n, d] for d, n in alan.most_common()])
    tsv("karisik_parca.tsv", ["adet", "parca"], [[n, p] for p, n in karisik.most_common()])
    guvs = [x for x in F + KK + KU if x["damga"] == "guvensiz"]
    tsv("guvensiz_maddeler.tsv", ["evren", "dosya", "anahtar", "alt_neden", "t", "b", "kaynak", "kodlar"],
        [[x["evren"], x["dosya"], x["anahtar"], x["alt"], x["t"] or "", x["b"] or "",
          S.metin(x["kaynak"]), ",".join(sorted({c for _, _, ks, _ in x["parcalar"] for c in ks}))]
         for x in guvs])
    bdy = [x for x in F + KK if x["damga"] == "bulunamadi" and x["ic"]]
    tsv("bulunamadi_dayanakli.tsv", ["evren", "dosya", "anahtar", "dayanak_kademe", "t", "b", "kaynak"],
        [[x["evren"], x["dosya"], x["anahtar"], x["ic"], x["t"] or "", x["b"] or "",
          S.metin(x["kaynak"])] for x in bdy])
    if farklar:
        tsv("app_parcala_fark.tsv", ["kaynak", "app_js", "python"],
            [[t, json.dumps(a, ensure_ascii=False), json.dumps(b, ensure_ascii=False)]
             for t, a, b in farklar[:500]])

    # Değişmez 2
    d2 = None
    if not a.d2_yok:
        log("Değişmez 2 bağımlılığı ölçülüyor (denetle.py içe aktarılıyor)…")
        try:
            d2, d2s, d2_yollar = d2_olc(S, log)
            tsv("d2_yalniz_suzulen_tanikli.tsv",
                ["senaryo", "degismez", "tarih", "tip", "son_acik_kovasinda", "yerlesim_sayisi",
                 "yerlesimler", "devlet_eski_yeni", "tanik_sayisi", "taniklar", "tanik_kaynaklari"],
                d2s)
            idx = set(dosyalar)
            d2["index_disi_d2_dosyasi"] = [y for y in ("data/" + os.path.basename(p) for p in d2_yollar)
                                           if y not in idx]
        except Olculemedi as e:
            olculemedi.append("D2: %s" % e)
        except Exception as e:
            olculemedi.append("D2: %s: %s" % (type(e).__name__, e))
    oz["d2"] = d2
    oz["olculemedi"] = olculemedi
    json.dump(oz, open(os.path.join(CIKTI, "ozet.json"), "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)
    rapor(oz, T, taninmayan, alan, karisik)
    log("damga · dosya:", oz["damga"]["dosya"])
    log("damga · künye-kronoloji:", oz["damga"]["kunye_kronoloji"])
    log("damga · künye kaynak:", oz["damga"]["kunye_kaynak"])
    if d2:
        for s, v in d2["senaryo"].items():
            log("  %s: %s" % (s, {k: v[k] for k in ("2", "2s", "2i")}))
    if olculemedi:
        log("ÖLÇÜLEMEDİ:", olculemedi)
        return 2
    return 0


EMRE_KARARLARI = [
    "Britannica → B kalır.",
    "livius.org, chinaknowledge.de → B kalır.",
    "Haber kuruluşları (HABER) → B, AMA yalnız olay tarihi ≥ 1946-01-01 olan maddede; daha eski "
    "(ya da tarihi okunamayan) maddede C. Tabloda `yalniz_sonra`/`once_kademe` alanı.",
    "archontology, FMG/MedLands, kureansiklopedi, erenow, Wikisource üzerinden Britannica 1911 → C kalır.",
    "KARIŞIK kuralı (aynı parçada C ile A/B → C) onaylandı.",
    "`adsiz` (eser adı vermeyen beyan: \"standart akademik kaynak\", \"el-kitabi\") → `guvensiz` damgasına "
    "katıldı (gizlenir, teyide gider); alt neden `adsiz` ayrı sayılır.",
    ".gov/.edu genel sınıfı (RESMI-SITE, UNIV-SITE) → B onaylandı.",
    "\"bulunamadı — dayanak: A eser\" → damga `bulunamadi` kalır; \"dayanak adı geçen\" alt sayısı ayrı "
    "listelenir (`bulunamadi_dayanakli.tsv`).",
]
ACIK_NOTLAR = [
    "**`el-kitabi`** sitede TDV bağına çevriliyor (js/app.js `_KC_SLUG` → islamansiklopedisi.org.tr/el-kitabi): "
    "arayüz işinde `tdv_slug.haric` okunmalı.",
    "**ENCYCLOPEDIA-COM** (B) ve **EBSCO-RS** (B; 92 bağın 92'si /research-starters/) ile **AKADEMIK-ESER** "
    "(yazar adıyla A) için ayrı karar alınmadı; tablo bugünkü hâliyle uygulandı.",
]


def rapor(oz, T, taninmayan, alan, karisik):
    L = []
    w = L.append
    w("# KAYNAK-GUVEN-1014 — kronoloji kaynaklarının güven damgası")
    w("")
    w("> Bu dosyayı `arac/kaynak_guven.py` ÜRETİR — elle düzenleme. Yeniden: `py arac/kaynak_guven.py`.")
    w("")
    w("- **Ölçüldüğü taban commit:** `%s`%s" % (oz["taban_commit"],
      " + çalışma ağacındaki değişiklikler (%s)" % ", ".join(s.strip() for s in oz["kirli_dosyalar"])
      if oz["calisma_agaci_kirli"] else " (temiz ağaç)"))
    w("- **Tablo:** `data/kaynak_guven.js` · %d girdi · sha256[:12] `%s`" % (oz["tablo_girdi"], oz["tablo_sha256_12"]))
    e = oz["evren"]
    w("- **Evren:** index.html → `arac/paket_coz.py` → %d `olaylar*/kronoloji*` dosyası (%d madde) + "
      "`data/devletler.js` (%d künye, %d künye-kronoloji maddesi); yükleme `arac/silsile_yukle.js` (node vm)."
      % (e["kronoloji_dosyasi"], e["dosya_madde"], e["kunye"], e["kunye_kronoloji_madde"]))
    ap_ = oz["app_parcala"]
    w("- **Parçalama = site:** `js/app.js` `kaynakcaParcala` node'da koşturuldu, %d farklı kaynak dizgesinde "
      "Python bölmesiyle kıyaslandı → **%d fark**." % (ap_["karsilastirilan_dizge"], ap_["fark"]))
    if oz["olculemedi"]:
        w("- 🔴 **ÖLÇÜLEMEDİ:** " + " · ".join(oz["olculemedi"]))
    w("")
    w("## 1. Damga dağılımı (madde sayısı)")
    w("")
    w("| damga | dosya kronolojileri | künye kronolojileri | künye `kaynak` alanı |")
    w("|---|---:|---:|---:|")
    for d in DAMGALAR:
        w("| `%s` | %d | %d | %d |" % (d, oz["damga"]["dosya"][d], oz["damga"]["kunye_kronoloji"][d],
                                       oz["damga"]["kunye_kaynak"][d]))
    w("| **toplam** | %d | %d | %d |" % tuple(sum(oz["damga"][k].values())
                                          for k in ("dosya", "kunye_kronoloji", "kunye_kaynak")))
    ga = oz["guvensiz_alt"]
    w("| ↳ `guvensiz` alt neden C | %d | %d | %d |" % tuple(ga[k].get("C", 0) for k in ("dosya", "kunye_kronoloji", "kunye_kaynak")))
    w("| ↳ `guvensiz` alt neden `adsiz` | %d | %d | %d |" % tuple(ga[k].get("adsiz", 0) for k in ("dosya", "kunye_kronoloji", "kunye_kaynak")))
    w("")
    for k, v in T["damgalar"].items():
        w("- `%s` — %s" % (k, v))
    w("")
    b = oz["bulunamadi_ic_dayanak"]
    w("**`bulunamadi` içinde adı geçen dayanak** (\"bulunamadı — … dayanak: X\"): dosya A %d · B %d · yok %d; "
      "künye-kronoloji A %d · B %d · yok %d. Bunlar damgada `bulunamadi` kalır (verinin kendi beyanı) ama "
      "teyit kampanyasında ucuz kazançtır — tam liste `bulunamadi_dayanakli.tsv`." % (b["dosya"]["A"], b["dosya"]["B"], b["dosya"]["yok"],
                                              b["kunye_kronoloji"]["A"], b["kunye_kronoloji"]["B"],
                                              b["kunye_kronoloji"]["yok"]))
    w("")
    w("## 2. Parça düzeyi")
    w("")
    w("Parça kademeleri: " + " · ".join("%s %d" % (k, v) for k, v in sorted(oz["parca_kademe"].items())))
    w("")
    w("KARIŞIK parça (aynı parçada C ve A/B → C sayıldı): **%d** — `karisik_parca.tsv`." % oz["parca_karisik"])
    w("")
    w("En sık eşleşen tablo kodları: " + " · ".join("%s %d" % kv for kv in list(oz["kod_say"].items())[:40]))
    w("")
    w("### En sık 30 tanınmayan parça (%d ayrı parça; tamamı ilk 300 `taninmayan_parca.tsv`)" % oz["taninmayan_ayri_parca"])
    w("")
    w("| # | adet | parça |")
    w("|---:|---:|---|")
    for i, (p, n) in enumerate(taninmayan.most_common(30)):
        w("| %d | %d | %s |" % (i + 1, n, p.replace("|", "\\|")[:160]))
    w("")
    w("### Tanınmayan parçalardaki en sık 30 alan adı (`taninmayan_alanadi.tsv`)")
    w("")
    w(" · ".join("%s %d" % (d, n) for d, n in alan.most_common(30)))
    w("")
    d2 = oz.get("d2")
    w("## 3. Değişmez 2 bağımlılığı")
    w("")
    if not d2:
        w("🔴 ÖLÇÜLMEDİ (`--d2-yok` ya da hata — yukarıdaki ÖLÇÜLEMEDİ satırına bak).")
    else:
        w("Yöntem: `arac/denetle.py` içe aktarıldı; `degismez2`, `kapsam_disi`, `yil_temsili_ayir` "
          "denetle'nin ana akışındaki gibi çağrıldı (çekirdek yerleşimler = `KUYRUK_DOSYALARI` hariç). "
          "Madde evreni = `denetle.olaylari_yukle()` (disk glob: `olaylar*.js` + `kronoloji_sinir*.js`), "
          "%d madde / %d dosya; birebir aynı kurulduğu doğrulandı. Süzülmüş evrende AÇIK olup tam evrende "
          "AÇIK olmayan kırılma = ±30 gün tanıkları YALNIZ süzülen maddeler olan kırılma."
          % (d2["evren_madde"], d2["evren_dosya"]))
        w("")
        w("D2 evreninde damga: " + " · ".join("%s %d" % kv for kv in sorted(d2["damga_d2_evreni"].items())))
        w("")
        t = d2["taban"]
        w("Taban (tam evren): 2 → %d kırılma / %d açık · 2s → %d kırılma / %d ham açık / %d AÇIK · 2i → %d kırılma / %d açık"
          % (t["2"]["kirilma"], t["2"]["acik"], t["2s"]["kirilma"], t["2s"]["acik_ham"], t["2s"]["acik"],
             t["2i"]["kirilma"], t["2i"]["acik"]))
        w("")
        w("| senaryo (gizlenen damgalar) | gizlenen madde | 2 yeni açık | 2s yeni ham açık | 2s yeni AÇIK (kapsam içi, gün hassas) | 2i yeni açık |")
        w("|---|---:|---:|---:|---:|---:|")
        for s, v in d2["senaryo"].items():
            w("| %s | %d | %d | %d | %d | %d |" % (s, v["silinen_madde"], v["2"]["yeni_acik"],
                                                  v["2s"]["yeni_acik_ham"], v["2s"]["yeni_acik"],
                                                  v["2i"]["yeni_acik"]))
        w("")
        w("Liste: `d2_yalniz_suzulen_tanikli.tsv` (senaryo, değişmez, tarih, yerleşimler, devlet eski→yeni, "
          "tanık maddeler, tanık kaynakları). Teyit kampanyasında İLK sıra S1 satırlarıdır.")
        if d2.get("index_disi_d2_dosyasi"):
            w("")
            w("⚠️ D2 evreninde olup index.html'in YÜKLEMEDİĞİ dosya: " + ", ".join(d2["index_disi_d2_dosyasi"]))
    w("")
    w("## 4. Dosyalar")
    w("")
    for f in ("ozet.json", "damga_dosya.tsv", "damga_kunye_bolge.tsv", "damga_yuzyil.tsv",
              "taninmayan_parca.tsv", "taninmayan_alanadi.tsv", "karisik_parca.tsv",
              "guvensiz_maddeler.tsv", "bulunamadi_dayanakli.tsv", "d2_yalniz_suzulen_tanikli.tsv"):
        w("- `%s`" % f)
    w("")
    w("## 5. Emre kararları (14 Ekim 2026) ve açık notlar")
    w("")
    for s in EMRE_KARARLARI:
        w("- ✅ " + s)
    for s in ACIK_NOTLAR:
        w("- " + s)
    open(os.path.join(CIKTI, "RAPOR.md"), "w", encoding="utf-8", newline="\n").write("\n".join(L) + "\n")


if __name__ == "__main__":
    sys.exit(main())
