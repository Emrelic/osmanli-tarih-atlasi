# YAMA-MOTOR-0930 — BOYALAR yamasinin DUZENLENMIS KOPYASINI uretir.
# arac/renkler.py'ye YAZMAZ: depodaki dosyayi okur, degisikligi <cikti>
# kopyasina yazar; .diff'i ARAC-YAMA-MOTOR-0930-DIFF.py cikarir.
#   py denetim/ARAC-YAMA-MOTOR-0930-BOYALAR.py <oneri-artefakti.txt> <cikti-kopya>
import re, sys, pathlib
sys.stdout.reconfigure(encoding="utf-8")
KOK = pathlib.Path(__file__).resolve().parent.parent
oneri_yol, cikti = sys.argv[1], sys.argv[2]

HARIC = {"karakoyunlu"}   # arac yine macenta verdi (#e41ee4) — H-0033'u cozmez

ham = (KOK / "arac" / "renkler.py").read_bytes()
nl = "\r\n" if b"\r\n" in ham else "\n"
metin = ham.decode("utf-8")

# kunye adlari (devletler.js) — etiket kunyenin adi olur
dv = (KOK / "data" / "devletler.js").read_text(encoding="utf-8")
ad = {}
for m in re.finditer(r'\{\s*id:"([^"]+)",\s*ad:"((?:[^"\\]|\\.)*)"', dv):
    ad.setdefault(m.group(1), m.group(2))

oneri = []
for s in open(oneri_yol, encoding="utf-8-sig"):
    s = s.strip()
    if not s or s.startswith("//"):
        continue
    k, hx = s.split()[:2]
    if k in HARIC:
        continue
    oneri.append((k, hx.lower()))

# mevcut anahtar tekrari olmasin
mevcut = set(re.findall(r'^\s*"([a-z0-9-]+)"\s*:\s*\(', metin, re.M))
tekrar = [k for k, _ in oneri if k in mevcut]
if tekrar:
    sys.exit("BOYALAR'da zaten var: %s" % tekrar)
adsiz = [k for k, _ in oneri if k not in ad]
if adsiz:
    sys.exit("devletler.js'te kunye adi bulunamadi: %s" % adsiz)

# --- 1) iki etiket duzeltmesi (tek eslesme SAYILARAK) ---
ETIKET = [
    ('"danimarka":  ("Danimarka-Norveç",       "#b484e7"),',
     '"danimarka":  ("Danimarka Krallığı",     "#b484e7"),'),
    ('"ferrara": ("Ferrara Dukalığı", "#300c93"),',
     '"ferrara": ("Este Devleti (Ferrara / Modena)", "#300c93"),'),
]
for eski, yeni in ETIKET:
    n = metin.count(eski)
    if n != 1:
        sys.exit("etiket eslesmesi %d (1 bekleniyordu): %s" % (n, eski))
    metin = metin.replace(eski, yeni)

# --- 2) yeni kimlikler: BOYALAR'in kapanis '}'undan once ---
bas = metin.index("BOYALAR = {")
kap = re.compile(r"^\}", re.M).search(metin, bas).start()
blok = [
    "    # ═══ YAMA-MOTOR-0930 · 30 Eylül 2026 — %d YENİ KİMLİK ═══════════════" % len(oneri),
    "    # Kaynak: ONCE1281-{AFRIKA,ANADOLU,DOGU-ASYA,HINT-AMERIKA,IRAN}-KUNYE.json",
    "    # `boya_gerekli:true` + künyesi devletler.js'te OLAN kalemler, ve",
    "    # `kaheti-kralligi` (KAFKAS-KORFEZ-0081 · H-0001: kök sebep kimliksizlik).",
    "    # Renk: `py arac/renk_olc.py --oner` BİRLİKTE çözdü, artefakt",
    "    # `denetim/%s`. Etiket = künyenin `ad:`ı." % pathlib.Path(oneri_yol).name,
    "    # 🟡 DÜŞÜK GÜVEN — araç kendisi söyledi: 93 kimliğin 93'ünün de",
    "    #   \"komşusu ölçülemeyen kimlik\" (girdi.py'nin okuduğu dosyalarda",
    "    #   verisi YOK) ⇒ öneri yalnız altlık + Osmanlı ikilisine ve AYNI",
    "    #   BÖLGE varsayımına dayanır. Yerleşim noktaları indikten sonra",
    "    #   `renk_olc.py --dogrula` ile YENİDEN ölçülmeden güvenilmemeli.",
    "    #   Bugün haritada DELİK AÇMIYORLAR (hiçbiri s:/isg: alanında yok);",
    "    #   yama, veri indiğinde delik açılmasın diye önceden taşınır.",
]
gen = max(len(k) for k, _ in oneri) + 3
for k, hx in oneri:
    anahtar = ('"%s":' % k).ljust(gen)
    blok.append('    %s("%s", "%s"),' % (anahtar, ad[k], hx))
ek = nl.join(blok) + nl
# kapanistan onceki bos satiri koru: ekleme '}'un hemen onune
metin = metin[:kap] + ek + nl + metin[kap:]

out = metin.replace("\r\n", "\n").replace("\n", nl) if nl == "\r\n" else metin
pathlib.Path(cikti).parent.mkdir(parents=True, exist_ok=True)
open(cikti, "wb").write(out.encode("utf-8"))
print("yeni kimlik", len(oneri), "· etiket", len(ETIKET), "· yazildi", cikti)
