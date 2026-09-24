# -*- coding: utf-8 -*-
"""A-AMERIKA-0078 — aday kayıtlarını SINAYIP data/yerlesimler_a78_amerika.js üretir.

Girdi : denetim/A-AMERIKA-0078-adaylar.json (araştırmanın kabul edilen adayları; her birinde kaynak)
Çıktı : data/yerlesimler_a78_amerika.js → window.YERLESIMLER_A78_AMERIKA
Sınavlar (biri tutmazsa kayıt YAZILMAZ, sebebiyle basılır):
  ① ad atlasta ve partide benzersiz        ② mevcut/parti noktasına ≥ 3 km
  ③ kur biçimi · s[0].f == kur · zincir kesintisiz · son t == 1923-10-29 · f < t
  ④ her d künyede var, dönem künye penceresinde (pad'li dizgi)   ⑤ d BOYALAR'da (ya da harita: anahtarı)
  ⑥ NE 10m karada                            ⑦ kaynak dolu, "wikipedia" tek dayanak değil
Kullanım: py denetim/A-AMERIKA-0078-uret.py [--kuru]   (--kuru: dosya yazmaz, yalnız sınar)
"""
import sys, io, os, re, json, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi, renkler
from shapely.geometry import shape, Point
from shapely.strtree import STRtree

KURU = "--kuru" in sys.argv
ADAY = os.path.join(KOK, "denetim", "A-AMERIKA-0078-adaylar.json")
if "--renk-bekleyen" in sys.argv:   # Orta Amerika: renk dışındaki sınavlar; asla yazmaz
    ADAY, KURU = os.path.join(KOK, "denetim", "A-AMERIKA-0078-renk-bekleyen.json"), True
CIKTI = os.path.join(KOK, "data", "yerlesimler_a78_amerika.js")
SON = "1923-10-29"

def pad(t):
    p = str(t).split("-"); return "%04d-%02d-%02d" % (int(p[0]), int(p[1]) if len(p) > 1 else 1, int(p[2]) if len(p) > 2 else 1)

Y = [y for y in girdi.yukle(sessiz=True) if y.get("lat") is not None]
ADLAR = {y["ad"] for y in Y}
KUNYE = {d["id"]: d for d in girdi.oku_devletler()}
BOYA = set(renkler.BOYALAR)
KARA = []
for f in json.load(io.open(os.path.join(KOK, "veri-kaynak/ne_10m_land.geojson"), encoding="utf-8"))["features"]:
    g = shape(f["geometry"])
    if g.bounds[0] < -30: KARA.append(g if g.is_valid else g.buffer(0))
KT = STRtree(KARA)
def karada(x, y):
    p = Point(x, y); return any(KARA[int(i)].contains(p) for i in KT.query(p))

A = json.load(io.open(ADAY, encoding="utf-8"))
kabul, red = [], []
for a in A:
    h = []
    ad = a["ad"]
    if ad in ADLAR: h.append("① ad atlasta var")
    if any(ad == k["ad"] for k in kabul): h.append("① ad partide tekrar")
    for y in Y + kabul:
        d = girdi.km(a["lat"], a["lon"], y["lat"], y["lon"])
        if d < 3: h.append(f"② {y['ad']} {d:.1f} km"); break
    s = a.get("s") or []
    if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", a.get("kur", "")): h.append("③ kur biçimi")
    if not s: h.append("③ s boş")
    else:
        if s[0]["f"] != a.get("kur"): h.append("③ s[0].f != kur")
        if s[-1]["t"] != SON: h.append("③ son t != " + SON)
        for i, p in enumerate(s):
            if pad(p["f"]) >= pad(p["t"]): h.append(f"③ f>=t {p}")
            if i and s[i - 1]["t"] != p["f"]: h.append(f"③ kesinti {s[i-1]['t']}→{p['f']}")
            k = KUNYE.get(p["d"])
            if not k: h.append(f"④ künye yok {p['d']}"); continue
            kf, kt = pad(k.get("f") or "0001-01-01"), pad(k.get("t") or "9999-12-31")
            if pad(p["f"]) < kf or pad(p["t"]) > kt: h.append(f"④ {p['d']} {p['f']}→{p['t']} künye {kf}→{kt}")
            if p["d"] not in BOYA and k.get("harita") not in BOYA: h.append(f"⑤ renk yok {p['d']}")
    if not karada(a["lon"], a["lat"]): h.append("⑥ karada değil")
    kay = a.get("kaynak", "")
    if not kay or kay == "bulunamadı": h.append("⑦ kaynak yok")
    elif "wikipedia" in kay.lower() and not [u for u in re.findall(r"https?://\S+", kay) if "wikipedia" not in u]:
        h.append("⑦ tek dayanak vikipedi")
    (red if h else kabul).append(a if not h else (ad, h))
print(f"aday {len(A)} · kabul {len(kabul)} · red {len(red)}")
for ad, h in red: print("  RED", ad, "·", " · ".join(h))

def js_str(v): return json.dumps(v, ensure_ascii=False)
def kayit(a):
    s = ",".join("{" + ",".join(f"{k}:{js_str(v)}" for k, v in p.items()) + "}" for p in a["s"])
    alan = [f"ad:{js_str(a['ad'])}", f"tur:{js_str(a.get('tur','sehir'))}", f"lat:{a['lat']}", f"lon:{a['lon']}",
            "g:0", f"kur:{js_str(a['kur'])}"]
    if a.get("kesinlik") and a["kesinlik"] != "gun": alan.append(f"kesinlik:{js_str(a['kesinlik'])}")
    alan += [f"s:[{s}]"]
    if a.get("isg"):
        alan.append("isg:[" + ",".join("{" + ",".join(f"{k}:{js_str(v)}" for k, v in p.items()) + "}" for p in a["isg"]) + "]")
    alan += [f"kaynak:{js_str(a['kaynak'])}", f"neden:{js_str(a['neden'])}"]
    if a.get("not"): alan.append(f"not:{js_str(a['not'])}")
    return "{ " + ",\n  ".join(alan) + " }"

BASLIK = """// =====================================================================
// A-AMERIKA-0078 — 1923'ü bitirme kampanyası, A KATMANI: Latin Amerika boşlukları
// =====================================================================
// 🔴 ÜRETİLMİŞ — elle düzenleme; üretici denetim/A-AMERIKA-0078-uret.py,
// girdi denetim/A-AMERIKA-0078-adaylar.json. Şartname oturumlar/BITIR-1923-0078.md.
// Ölçüm: denetim/A-AMERIKA-0078-olc.py (1923-09-01, 0,5° ızgara).
// Kural: nokta yalnız 1923-09-01'de orada DEVLET İDARESİ varsa (vila/belediye/
// departman merkezi, askerî koloni, devlet istasyonu); kur = idarenin başladığı gün.
// Zincirler atlasın ülke emsalleriyle aynı günlerde kırılır (1822-09-07, 1824-12-09 …).
// Bağlama (index.html + arac/girdi.py GIRDI_DOSYALARI) koordinatörde.
"""
if not KURU:
    with io.open(CIKTI, "w", encoding="utf-8", newline="\n") as f:
        f.write(BASLIK + "\nwindow.YERLESIMLER_A78_AMERIKA = [\n" + ",\n".join(kayit(a) for a in kabul) + "\n];\n")
    print("yazıldı →", os.path.relpath(CIKTI, KOK), len(kabul), "kayıt")
