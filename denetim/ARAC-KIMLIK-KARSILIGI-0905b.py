# -*- coding: utf-8 -*-
"""ADIM ⑥ ON KOSULU — tasima sonrasi HARITA DELIGI dogacak mi?

Merge adim ⑥'dan ONCE kosulur. Beklenen: "GERCEK renksiz: 0".

════════════════════════════════════════════════════════════════════════
OLCUT — uc kademeli, ve iki kademesi ACI TECRUBEYLE eklendi
════════════════════════════════════════════════════════════════════════
① kimlik `BOYALAR`da mi?
② degilse: kunyesinin `harita:` anahtari BOYALAR'da mi?
   🔴 BU KADEME ILK SURUMDE YOKTU ve 17 dedi; gercek 13.
      `§11` (RENK 2): *"renk `harita:` ANAHTARINA bakar, `id`ye DEGIL"*
      · *"kunye var ama `harita:` baska anahtardaysa kendi rengine
      ihtiyaci YOKTUR."*
③ VE `harita:` dususu YALNIZ `s:` icin calisiyor.
   🔴 BU SART DA SONRADAN OLCULDU (`NEHIR SURTUNME`):
      `uret_petek.py:727` dongusu `for sp in y["s"]` uzerinde. Bir yama
      ayni kimligi `d:`/`v:`/`isg:`e koyarsa dusus KURTARMAZ ve delik
      GERCEK olur. Bugun oyle bir kayit yok — ama alet bunu VARSAYMAZ.

UCUNCU AYAK — URETIM KANITI (bu alet onu olcmez, ama kayda deger):
   `bulgaristan-kralligi` canli veride 43 `s:` donemi ·
   `arnavutluk-bagimsiz` 14 · ve `§1.5` HARITA DELIGI ✓ 0.
   ⇒ Dusus calismasaydi BUGUNKU YAYINDA zaten 57 donemlik delik olurdu.
   Bir mekanizmanin calistigini, calismasaydi KIRILACAK OLAN bir
   degismezin SAGLAM olmasiyla kanitlamak — kodu okumaktan guclu.

⚠️ VE BIR SESSIZ ARIZA: `_HARITA_ALT` `girdi.oku_devletler()`ten
   try/except icinde kuruluyor; okuma basarisiz olursa dusus SESSIZCE
   devre disi kalir. Kosu logunda su satir GORULMELI:
       "boya anahtari `harita:`ya dusen donem: N"
   (satir HER ZAMAN basiliyor, N=0 olsa bile — o yuzden N'i OKU.)

SALT OKUR. Cikti ASCII.
"""
import io, os, re, sys, unicodedata, collections
KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
DEN = os.path.join(KOK, "denetim")

# dususun GECERLI oldugu tek kategori (uret_petek.py:727)
DUSUS_KATEGORISI = "s"


def a(s):
    s = str(s).replace("İ", "I").replace("ı", "i").replace("Ş", "S").replace("ş", "s")
    s = s.replace("Ğ", "G").replace("ğ", "g").replace("Ü", "U").replace("ü", "u")
    s = s.replace("Ö", "O").replace("ö", "o").replace("Ç", "C").replace("ç", "c")
    return "".join(c for c in unicodedata.normalize("NFKD", s) if ord(c) < 128)


def p(s=""):
    print(a(s))


sys.path.insert(0, os.path.join(KOK, "arac"))
import renkler
BOYALAR = set(renkler.BOYALAR)

dv = io.open(os.path.join(KOK, "data", "devletler.js"),
             encoding="utf-8", errors="replace").read()
# KUNYE evreni = id ∪ harita  (§1.5: dizinsiz kimlik olcumu boyle kurulu)
KUNYE = set(re.findall(r'\bid:\s*"([^"]+)"', dv)) | \
        set(re.findall(r'\bharita:\s*"([^"]+)"', dv))
# id -> harita  (blok basina; `_HARITA_ALT`in esdegeri)
HARITA_OF = {}
for blok in re.split(r"\n\s*\{", dv):
    mid = re.search(r'\bid:\s*"([^"]+)"', blok)
    mh = re.search(r'\bharita:\s*"([^"]+)"', blok)
    if mid and mh:
        HARITA_OF[mid.group(1)] = mh.group(1)

p("BOYALAR %d · kunye (id u harita) %d · `harita:` esleme %d"
  % (len(BOYALAR), len(KUNYE), len(HARITA_OF)))

# bekleyen yamalarin kullandigi kimlik — KATEGORISIYLE
KALIP = re.compile(r"^yer_yama.*\.js$")
kul = collections.defaultdict(lambda: {"dosya": set(), "kat": collections.Counter()})
for f in sorted(os.listdir(DEN)):
    if not KALIP.match(f):
        continue
    s = io.open(os.path.join(DEN, f), encoding="utf-8", errors="replace").read()
    govde = "\n".join(l for l in s.split("\n") if not l.lstrip().startswith("//"))
    # her `d:"..."` icin ONUNDEKI en yakin kategori anahtarini bul
    for m in re.finditer(r'\b([dsv]|isg):\s*\[', govde):
        kat = m.group(1)
        # bu kategorinin dizisi icindeki `d:"..."`lar
        i = m.end()
        derinlik, j = 1, i
        while j < len(govde) and derinlik:
            if govde[j] == "[":
                derinlik += 1
            elif govde[j] == "]":
                derinlik -= 1
            j += 1
        for mm in re.finditer(r'\bd:\s*"([^"]+)"', govde[i:j]):
            kul[mm.group(1)]["dosya"].add(f)
            kul[mm.group(1)]["kat"][kat] += 1

p("bekleyen yamalarin kullandigi kimlik: %d" % len(kul))

kunyesiz, gercek, kurtulan = [], [], []
for k in sorted(kul):
    if k not in KUNYE:
        kunyesiz.append(k)
    if k in BOYALAR:
        continue
    alt = HARITA_OF.get(k)
    kats = set(kul[k]["kat"])
    if alt and alt in BOYALAR and kats <= {DUSUS_KATEGORISI}:
        kurtulan.append((k, alt))
    else:
        sebep = "harita: YOK" if not alt else (
            "harita:%s BOYASIZ" % alt if alt not in BOYALAR else
            "kategori %s — dusus YALNIZ `s:` icin" % ",".join(sorted(kats)))
        gercek.append((k, sebep))

p("")
p("=== 🟢 `harita:` DUSUSUYLE KURTULAN (delik DEGIL) : %d ===" % len(kurtulan))
for k, alt in kurtulan:
    p("  %-28s -> harita:\"%s\"" % (k, alt))

p("")
p("=== 🔴 KUNYESI YOK : %d ===" % len(kunyesiz))
for k in kunyesiz:
    p("  %s" % k)
if not kunyesiz:
    p("  (yok)")

p("")
p("=== 🔴 GERCEK RENKSIZ — HARITA DELIGI : %d ===" % len(gercek))
for k, sebep in gercek:
    p("  %-24s %-34s %s" % (k, sebep, ", ".join(sorted(kul[k]["dosya"]))[:34]))
if not gercek:
    p("  (yok)")

p("")
p("=== SONUC ===")
p("  kimlik %d · kunyesiz %d · kurtulan %d · 🔴 GERCEK RENKSIZ %d"
  % (len(kul), len(kunyesiz), len(kurtulan), len(gercek)))
p("  ⇒ adim ⑥ ICIN BEKLENEN: GERCEK RENKSIZ = 0")
sys.exit(1 if gercek else 0)
