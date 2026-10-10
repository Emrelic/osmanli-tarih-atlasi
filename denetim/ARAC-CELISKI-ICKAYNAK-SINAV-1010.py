# -*- coding: utf-8 -*-
"""ARAC-CELISKI-ICKAYNAK-SINAV-1010 — tarayıcının İKİ YÖNLÜ sınavı.

POZİTİF (GERÇEK veri, girdi.yukle() — enjekte kayıt değil):
  P1  A    Malta: 1284 ve 1410, s: napoli 1282-03-30→1530-03-24 içinde (YALNIZ-A);
           bilgi sütununda Aragon + Kastilya (napoli DEĞİL)
  P2  B    Malta · Hama · Mljet · Çehrin · Königsberg → OZ-ILAN-ISABET
  P3  ④    Königsberg → ENGEL-KALKMIS, kimlik teuton-sovalyeleri
  P4  evren boş DEĞİL: kayıt > 0, aday > 0 (sessiz boş küme yasak)
NEGATİF (sentetik kayıt, GERÇEK devletler.js):
  N1  Y = yıl(P.f), yıl(P.f)+1, yıl(P.t)-1, yıl(P.t) → A işaretlemez
  N2  "Vicens Vives (1952)" ve "Hammer (1835)" → A işaretlemez (C2)
  N2k C2 KAPALI iken "Hammer (1835)" A'ya GİRER (süzgeç ısırıyor)
  N3  "649'da (1251)" → 1251 korunur, 649 çıkmaz
  N4  dönem sahibini anan metin → a_anilan_yabanci BOŞ, yüksek DEĞİL
  N5  "Venedik DEĞİL" (venedik kaydın hiçbir sahibi değil) → ELENDI
  N6  "gün BULUNAMADI" (hassasiyet itirafı) → B bulgusu YOK
  N7  "eski t 1797-10-17 YANLIŞTI" → ELENDI
  N8  "`yokboyle` kimliği yok" → ENGEL-DURUYOR · kaydın kendi kimliği → DONULMUS
  N9  GERÇEK: "hiç Meksika olmadı" (St. Louis) ve "Vattâsî/merini DEĞİL" (Agadir) → ELENDI
  N11 hedef dilim zaten __BOSLUK__ → ELENDI
  N10 "XV. yüzyıl", "s. 1284", "1.609 km²", "EPOK-SAHIP-1008" yıl ÜRETMEZ
KÖK (⑦):
  K1  --kok verilmezse çıkış 2, ölçüm yok
  K2  origin/main~2'den açılmış geçici worktree ⇒ "GERİDE: N" (N ≥ 2) basılıyor
      (geçici worktree sınav sonunda kaldırılır)
v1.2 (koordinatör + KASA geri bildirimi):
  E-  yanlış eşleşmeler YÜKSEK'te DEĞİL: Kapuas Hulu · Vitim · Ginir · Goba · Valata ·
      Qitai ×2 · Gao · Cenne
  E+  Königsberg (teuton) · Anapa (cerkez) · Draç (topia) · Papeete (tahiti) ·
      Tembura/Yambio (zende) ENGEL-KALKMIS'te KALIR
  S1/S2/S3  süzgeç TEK TEK kapatılınca ilgili negatif YÜKSEK'e döner:
      ① olumsuz bağlam → Qitai/cungar · ② künye penceresi → Gao/arma · ③ coğrafya → Kapuas/malay
  D   Derbend/Maykop/Soçi/Tuapse/İlimsk "künyesiz KODLANMADI" → ENGEL-DURUYOR (B'de)
  G   Grand Cess (HARPER'A) · Mbande (KARONGA'YA) · Sivrihisar/Şeyhrumi "dokunulmadı" → ELENDI;
      Hayber ("Medine'nin kaydından … ÇIKARIMDIR", tamlayan hâli) ELENMEZ
  C2a K1: "Merriman (1918), *The Rise…" DÜŞER (Madrid A'da 1918 yok)
  C2b K1: "Alman işgali (1915-1918) 'isg:' YAZILMADI" KALIR (Brest-Litovsk B-İSABET)
  U   K2: Şerur s[3].f 1408 → UC-ILANI
Çıkış: 0 hepsi geçti · 1 en az biri kaldı.
"""
import argparse
import importlib.util
import io
import os
import sys

BURASI = os.path.dirname(os.path.abspath(__file__))
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

ap = argparse.ArgumentParser()
ap.add_argument("--kok", required=True)
ARGS = ap.parse_args()

spec = importlib.util.spec_from_file_location(
    "tarayici", os.path.join(BURASI, "ARAC-CELISKI-ICKAYNAK-1010.py"))
T = importlib.util.module_from_spec(spec)
spec.loader.exec_module(T)
girdi, gun, renkler, norm = T.ortam(ARGS.kok)
DEV = girdi.oku_devletler()
BOY = renkler.BOYALAR
SONUC = []


def sina(ad, kosul, ayrinti=""):
    SONUC.append((ad, bool(kosul)))
    print("  %s  %-58s %s" % ("GEÇTİ" if kosul else "KALDI", ad, ayrinti))


def kayit(ad, s, **kw):
    y = {"ad": ad, "_kaynak": "SINAV", "s": s, "d": [], "v": [], "isg": []}
    y.update(kw)
    return y


def tara(kayitlar, c2=True):
    out, _, _ = T.tara(kayitlar, DEV, gun, norm, BOY, c2=c2)
    return out


# ── POZİTİF: gerçek veri ─────────────────────────────────────────────────
print("POZİTİF (gerçek veri)")
Y = girdi.yukle(sessiz=True)
GER = tara(Y)
sina("P4 evren dolu", len(Y) > 4000 and len(GER) > 100, "%d kayıt · %d bulgu" % (len(Y), len(GER)))
malta_a = [x for x in GER if x["ad"] == "Malta" and x["yuklem"] == "A" and x["P"]["d"] == "napoli"]
yillar = {x["Y"] for x in malta_a}
yab = set()
for x in malta_a:
    yab |= set(x["a_anilan_yabanci"])
sina("P1 Malta A: 1284 ve 1410 napoli içinde", {1284, 1410} <= yillar, sorted(yillar))
sina("P1 Malta A bilgi: Aragon + Kastilya anılıyor",
     any("aragon" in s for s in yab) and any("kastilya" in s for s in yab), sorted(yab))
for ad, beklenen in [("Malta", "napoli"), ("Hama", "memluk"), ("Mliyet (Mljet)", "macaristan"),
                     ("Çehrin (Çigirin)", "altinorda"), ("Königsberg", "almanya")]:
    b = [x for x in GER if x["ad"] == ad and x["yuklem"] == "B" and x["sinif"] == "OZ-ILAN-ISABET"]
    hed = {h["d"] for x in b for h in x["hedef"]}
    sina("P2 B ISABET %s → %s" % (ad, beklenen), beklenen in hed, sorted(hed))
k = [x for x in GER if x["ad"] == "Königsberg" and x["yuklem"] == "ENGEL" and x["sinif"] == "ENGEL-KALKMIS"]
kid = {kk["kimlik"] for x in k for kk in x["kimlikler"] if kk["durum"] == "ENGEL-KALKMIS"}
sina("P3 ENGEL-KALKMIS Königsberg → teuton-sovalyeleri", "teuton-sovalyeleri" in kid, sorted(kid))

# ── NEGATİF: sentetik ────────────────────────────────────────────────────
print("NEGATİF (sentetik kayıt, gerçek künyeler)")
P = [{"f": "1300-05-01", "t": "1400-07-01", "d": "venedik"}]


def a_yillari(metin, c2=True, s=P):
    out = tara([kayit("SINAV-X", [dict(s[0], kaynak=metin)])], c2=c2)
    return sorted({x["Y"] for x in out if x["yuklem"] == "A"}), out


ys, _ = a_yillari("1300'de, 1301'de, 1399'da ve 1400'de olanlar")
sina("N1 uç yıllar (1300,1301,1399,1400) işaretlenmez", ys == [], ys)
ys, _ = a_yillari("1302'de olan")
sina("N1 kontrol: 1302 işaretlenir (tolerans tam ±1)", ys == [1302], ys)
P18 = [{"f": "1800-01-01", "t": "1900-01-01", "d": "venedik"}]
ys, _ = a_yillari("Vicens Vives (1952) · Hammer (1835)", s=P18)
sina("N2 C2 açık: yayın yılları işaretlenmez", ys == [], ys)
ys, _ = a_yillari("Vicens Vives (1952) · Hammer (1835)", c2=False, s=P18)
sina("N2k C2 KAPALI: (1835) A'ya GİRER — süzgeç ısırıyor", ys == [1835], ys)
P12 = [{"f": "1240-01-01", "t": "1300-01-01", "d": "venedik"}]
ys, _ = a_yillari("TDV: 649'da (1251) şehir alındı", s=P12)
sina("N3 649'da (1251) → 1251 korunur", ys == [1251], ys)
gl = []
yy = [y for y, _ in T.yillari_cikar("TDV: 649'da (1251) şehir alındı", gunluk=gl)]
sina("N3 hicrî 649 yıl olarak ÇIKMAZ", 649 not in yy and 1251 in yy, yy)
_, out = a_yillari("1350'de Venedikliler adayı tahkim etti")
a = [x for x in out if x["yuklem"] == "A"]
sina("N4 sahibi anan metin: yabancı bilgi boş, yüksek değil",
     a and not a[0]["a_anilan_yabanci"] and not a[0]["yuksek"],
     [(x["Y"], x["a_anilan_yabanci"], x["sinif"]) for x in a])
_, out = a_yillari("1350'de ada Macaristan DEĞİL")
b = [x for x in out if x["yuklem"] == "B"]
sina("N5 'Macaristan DEĞİL' (sahip değil) → ELENDI",
     b and all(x["sinif"] == "ELENDI" for x in b), [x["sinif"] for x in b])
_, out = a_yillari("1350'de ada Venedik DEĞİL")
b = [x for x in out if x["yuklem"] == "B"]
sina("N5 ters yön: 'Venedik DEĞİL' (KENDİ sahibi, tarih içinde) → ISABET",
     b and b[0]["sinif"] == "OZ-ILAN-ISABET", [x["sinif"] for x in b])
_, out = a_yillari("başlangıç günü BULUNAMADI · 1350 günü bulunamadı")
b = [x for x in out if x["yuklem"] == "B"]
sina("N6 'gün BULUNAMADI' hassasiyet itirafı → B YOK", b == [], [x["sinif"] for x in b])
_, out = a_yillari("eski t 1350-10-17 YANLIŞTI")
b = [x for x in out if x["yuklem"] == "B"]
sina("N7 'eski t … YANLIŞTI' → ELENDI", b and b[0]["sinif"] == "ELENDI", [x["sinif"] for x in b])
_, out = a_yillari("1300-1400 arası `yokboyle` kimliği yok")
e = [x for x in out if x["yuklem"] == "ENGEL"]
sina("N8 bugün de olmayan kimlik → ENGEL-DURUYOR", e and e[0]["sinif"] == "ENGEL-DURUYOR",
     [x["sinif"] for x in e])
_, out = a_yillari("1300-1400 arası `venedik` künyesi yok")
e = [x for x in out if x["yuklem"] == "ENGEL"]
sina("N8 kaydın kendi kimliği → ENGEL-DONULMUS (YÜKSEK değil)",
     e and e[0]["sinif"] == "ENGEL-DONULMUS", [x["sinif"] for x in e])
for ad, parca in [("St. Louis", "Meksika"), ("Agadir", "merini")]:
    b = [x for x in GER if x["ad"] == ad and x["yuklem"] == "B"
         and any(parca.lower() in k.lower() for k in x["kimlikler"])]
    sina("N9 GERÇEK %s '%s … DEĞİL/olmadı' → ELENDI" % (ad, parca),
         b and all(x["sinif"] == "ELENDI" for x in b), [x["sinif"] for x in b])
_, out = a_yillari("1350'de egemen BULUNAMADI · 1360 için yanlış atıf olur",
                   s=[{"f": "1300-05-01", "t": "1400-07-01", "d": "__BOSLUK__"}])
b = [x for x in out if x["yuklem"] == "B"]
sina("N11 hedef dilim __BOSLUK__ (beyanlı) → ELENDI", b and all(x["sinif"] == "ELENDI" for x in b),
     [x["sinif"] for x in b])
for metin in ["XV. yüzyıl", "s. 1284", "1.609 km²", "EPOK-SAHIP-1008", "35.899 / 14.514"]:
    yy = T.yillari_cikar(metin)
    sina("N10 gürültü yıl üretmez: %r" % metin, yy == [], yy)

# ── v1.2 ──────────────────────────────────────────────────────────────────
print("v1.2 (ENGEL süzgeçleri · D · G · K1 · K2)")


def kalkmis(L):
    out = {}
    for x in L:
        if x["yuklem"] == "ENGEL" and x["sinif"] == "ENGEL-KALKMIS":
            for k in x["kimlikler"]:
                if k.get("durum") == "ENGEL-KALKMIS":
                    out.setdefault(x["ad"], set()).add(k["kimlik"])
    return out


KM = kalkmis(GER)
YANLIS = ["Kapuas Hulu (bölge)", "Vitim (Vitimskoye zimov'e / Vitimskiy ostrog)", "Ginir", "Goba",
          "Valata (Oualata)", "Qitai (Gucheng)", "Gao", "Cenne (Djenné)"]
sina("E- 7 yanlış eşleşme + arma ×2 YÜKSEK'te YOK", not [a for a in YANLIS if a in KM],
     [a for a in YANLIS if a in KM])
for ad, kid in [("Königsberg", "teuton-sovalyeleri"), ("Anapa", "cerkez"), ("Draç", "topia"),
                ("Papeete", "tahiti"), ("Tembura", "zende"), ("Yambio", "zende")]:
    sina("E+ %s → %s ENGEL-KALKMIS" % (ad, kid), kid in KM.get(ad, set()), sorted(KM.get(ad, set())))
for anahtar, ad, kid in [("olumsuz", "Qitai (Gucheng)", "cungar"), ("pencere", "Gao", "arma"),
                         ("cografya", "Kapuas Hulu (bölge)", "malay-sultanliklari")]:
    T.SUZGEC[anahtar] = False
    try:
        km2 = kalkmis(tara(Y))
    finally:
        T.SUZGEC[anahtar] = True
    sina("S %s KAPALI ⇒ %s/%s YÜKSEK'e döner (süzgeç ısırıyor)" % (anahtar, ad, kid),
         kid in km2.get(ad, set()), sorted(km2.get(ad, set())))
for ad in ["Derbend", "Maykop (Çerkezya)", "Soçi (Sâşe)", "Tuapse", "İlimsk (Ilimskiy ostrog)"]:
    b = [x["sinif"] for x in GER if x["ad"] == ad and x["yuklem"] == "B"
         and x["sinif"] in ("ENGEL-DURUYOR", "OZ-ILAN-ISABET")]
    sina("D %s künyesiz → ENGEL-DURUYOR, İSABET değil" % ad,
         b and all(c == "ENGEL-DURUYOR" for c in b), b)
for ad, anahtar in [("Grand Cess (Kru)", "dokunulmad"), ("Mbande (Ngonde)", "dokunulmad"),
                    ("Sivrihisar", "dokunulmad"), ("Şeyhrumi (Yücelen)", "dokunulmad")]:
    b = [x["sinif"] for x in GER if x["ad"] == ad and x["yuklem"] == "B"
         and anahtar in x["anahtar"].lower().replace("ı", "i")]
    sina("G %s 'dokunulmadı' → ELENDI" % ad, b and all(c == "ELENDI" for c in b), b)
b = [x["sinif"] for x in GER if x["ad"] == "Hayber" and x["yuklem"] == "B" and "ARIM" in x["anahtar"].upper()]
sina("G ters yön: Hayber (Medine'nin — tamlayan) ELENMEZ", b and "ELENDI" not in b, b)
a = [x for x in GER if x["ad"] == "Madrid" and x["yuklem"] == "A" and x["Y"] == 1918]
sina("C2a K1: Merriman (1918) DÜŞER — Madrid A'da 1918 yok", a == [], len(a))
b = [x for x in GER if x["ad"] == "Brest-Litovsk" and x["yuklem"] == "B" and x["sinif"] == "OZ-ILAN-ISABET"]
sina("C2b K1: Brest-Litovsk (1915-1918) KALIR → B-İSABET", bool(b), len(b))
yy = [y for y, _ in T.yillari_cikar("ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire*")]
sina("C2a' birim: Merriman (1918) yıl üretmez", yy == [], yy)
yy = [y for y, _ in T.yillari_cikar("Alman işgali (1915-1918) 'isg:' olarak YAZILMADI")]
sina("C2b' birim: Alman işgali (1915-1918) korunur", yy == [1915, 1918], yy)
u = [x for x in GER if x["ad"] == "Şerur (Sharur)" and x["sinif"] == "UC-ILANI"]
sina("U K2: Şerur s[3].f 1408 → UC-ILANI",
     any(h["alan"] == "s" and h["i"] == 3 for x in u for h in x["hedef"]),
     [(h["d"], h["f"]) for x in u for h in x["hedef"]])

# ── ⑦ KÖK KOLLARI (koordinatör, 10 Ekim) ──────────────────────────────────
print("KÖK (⑦)")
import re as _re
import subprocess
import tempfile
ARAC = os.path.join(BURASI, "ARAC-CELISKI-ICKAYNAK-1010.py")
r = subprocess.run([sys.executable, ARAC, "--ozet"], capture_output=True, text=True,
                   encoding="utf-8", errors="replace")
sina("K1 --kok YOK ⇒ çıkış 2, ölçüm yok", r.returncode == 2 and "evren:" not in r.stdout,
     "çıkış %d" % r.returncode)
gecici = tempfile.mkdtemp(prefix="celiski-geride-")
yol = os.path.join(gecici, "agac")
w = subprocess.run(["git", "-C", ARGS.kok, "worktree", "add", yol, "origin/main~2", "--detach"],
                   capture_output=True, text=True)
try:
    if w.returncode != 0:
        sina("K2 geride kök ⇒ sayı basılıyor", False, "worktree açılamadı: " + w.stderr[:120])
    else:
        r = subprocess.run([sys.executable, ARAC, "--kok", yol, "--ozet"], capture_output=True,
                           text=True, encoding="utf-8", errors="replace")
        m = _re.search(r"GERİDE: (\d+)", r.stdout)
        sina("K2 origin/main~2 kökü ⇒ 'GERİDE: N' basılıyor, N ≥ 2",
             m is not None and int(m.group(1)) >= 2 and "KÖK GERİDE" in r.stdout,
             (m.group(0) if m else r.stdout[:120]))
finally:
    subprocess.run(["git", "-C", ARGS.kok, "worktree", "remove", "--force", yol], capture_output=True)

kalan = [ad for ad, ok in SONUC if not ok]
print("SONUÇ: %d/%d geçti%s" % (len(SONUC) - len(kalan), len(SONUC),
                                "" if not kalan else " · KALAN: " + ", ".join(kalan)))
sys.exit(1 if kalan else 0)
