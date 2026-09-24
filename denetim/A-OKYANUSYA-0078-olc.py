# A-OKYANUSYA-0078 — 1923-09-01 Okyanusya kapsam ölçümü
# Bütün canlı girdiyi (girdi.yukle) okur, kutudaki noktaların o günkü sahibini sayar.
import sys, os, collections
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "arac"))
import girdi

GUN = sys.argv[1] if len(sys.argv) > 1 and sys.argv[1][0].isdigit() else "1923-09-01"
AYRINTI = "--ayrinti" in sys.argv

def sahip(y, gun):
    for kat in ("d", "v", "s"):
        for p in y.get(kat) or []:
            if p.get("f", "0000") <= gun < p.get("t", "9999"):
                return (kat, p.get("d") or p.get("s") or "?")
    return None

def var_mi(y, gun):
    if y.get("kur") and y["kur"] > gun: return False
    if y.get("bit") and y["bit"] <= gun: return False
    return True

# Bölgeler: (ad, lon0, lon1, lat0, lat1)
BOLGE = [
    ("Yeni Gine", 130.5, 151.0, -11.0, 0.0),
    ("Bismarck/Solomon", 146.0, 163.0, -12.0, -1.0),
    ("Avustralya", 112.0, 154.0, -44.0, -10.0),
    ("Yeni Zelanda", 165.0, 179.9, -48.0, -34.0),
    ("Melanezya-D (Fiji/YHebrid/YKaledonya)", 163.0, 180.0, -23.0, -12.0),
    ("Mikronezya", 130.0, 180.0, 0.0, 22.0),
    ("Polinezya (180 dogusu)", -180.0, -120.0, -30.0, 22.0),
    ("Nauru/Gilbert/Ellice/Samoa/Tonga (180 batisi)", 163.0, 180.0, -12.0, 0.0),
]

if "--sonra" in sys.argv:  # bağlanmamış dosyamı BELLEKTE ekle (girdi.py'ye dokunmadan)
    girdi.GIRDI_DOSYALARI.append("yerlesimler_a78_okyanusya.js")
Y = girdi.yukle(sessiz=True)
print(f"toplam canlı nokta: {len(Y)} · gün {GUN}")
# Pozitif kontrol — bilinen noktalar
for kontrol in ("Noumea (Yeni Kaledonya)", "Samarai"):
    y = next((z for z in Y if z["ad"] == kontrol), None)
    print(f"  POZİTİF KONTROL {kontrol}: {'bulundu' if y else 'YOK'} · sahip={sahip(y, GUN) if y else '-'}")

for ad, x0, x1, y0, y1 in BOLGE:
    icinde = [y for y in Y if x0 <= y["lon"] <= x1 and y0 <= y["lat"] <= y1]
    say = collections.Counter()
    sahipsiz, bosluk = [], []
    for y in icinde:
        if not var_mi(y, GUN):
            say["henüz yok/bitti"] += 1; continue
        s = sahip(y, GUN)
        if s:
            say[s[1]] += 1
            if AYRINTI: print(f"     sahipli : {y['ad']} ({y['lat']},{y['lon']}) {s[1]}")
        elif y.get("kasitli_bosluk"):
            bosluk.append(y); say["kasıtlı boşluk beyanı (sahipsiz)"] += 1
        else:
            sahipsiz.append(y); say["SAHİPSİZ"] += 1
    print(f"\n== {ad} [{x0},{x1}]x[{y0},{y1}] — {len(icinde)} nokta")
    for k, v in say.most_common(): print(f"   {v:4d}  {k}")
    if AYRINTI:
        for y in sahipsiz: print(f"     sahipsiz: {y['ad']} ({y['lat']},{y['lon']}) [{y['_kaynak']}]")
        for y in bosluk: print(f"     beyan   : {y['ad']} ({y['lat']},{y['lon']}) bos={y.get('bos')} [{y['_kaynak']}]")
