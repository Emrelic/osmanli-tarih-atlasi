# -*- coding: utf-8 -*-
"""A-AMERIKA-0078 — altı bölge araştırmasının aday dosyalarını (scratchpad aday_*.json) KARARLARLA birleştirir.
Çıktı: denetim/A-AMERIKA-0078-adaylar.json        (uret.py'nin girdisi — renkli, zinciri tam kayıtlar)
       denetim/A-AMERIKA-0078-renk-bekleyen.json  (künyesi var, arac/renkler.py BOYALAR'da rengi yok — Orta Amerika)
       denetim/A-AMERIKA-0078-bulunamadi.json     (hedef başına "idare yok / kaynak yok" beyanı)
Kararlar aşağıda AÇIKÇA; her biri kaydın `not` alanına da işlenir.
Kullanım: py denetim/A-AMERIKA-0078-birlestir.py <scratchpad_dizini>
"""
import sys, io, os, json, glob, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
S = sys.argv[1]
SON = "1923-10-29"
RENKSIZ = {"honduras-cumhuriyeti", "nikaragua-cumhuriyeti", "el-salvador-cumhuriyeti", "kosta-rika-cumhuriyeti"}

# ── KARARLAR ────────────────────────────────────────────────────────────────
DUS = {  # ad → gerekçe (kayıt yazılmaz)
}
# aday_*_ek.json: ikinci tur araştırma (Atacama/Tacna zincirleri + isg, Taltal Taltalia kaynağı, yıl hassasiyetine
# indirilen Tandil/Rivadavia/Villaguay, Gobernador Gregores). Ek kayıt ana kaydın yerine geçer; ekte olup anada
# olmayan kayıt YENİ kayıt olarak eklenir.
# Orta Amerika sömürge kentleri: guatemala künyesi 1821-09-15'ten federasyon dönemini de taşır (devletler.js ozet).
ULKE_F = {"honduras-cumhuriyeti": "1838-10-26", "nikaragua-cumhuriyeti": "1838-04-30",
          "el-salvador-cumhuriyeti": "1841-01-01", "kosta-rika-cumhuriyeti": "1838-01-01"}
OA = {"Tegucigalpa": "honduras-cumhuriyeti", "Comayagua": "honduras-cumhuriyeti", "San Pedro Sula": "honduras-cumhuriyeti",
      "San Salvador": "el-salvador-cumhuriyeti", "San Miguel (El Salvador)": "el-salvador-cumhuriyeti",
      "Santa Ana (El Salvador)": "el-salvador-cumhuriyeti", "Managua": "nikaragua-cumhuriyeti",
      "León (Nikaragua)": "nikaragua-cumhuriyeti", "Granada (Nikaragua)": "nikaragua-cumhuriyeti",
      "San José (Kosta Rika)": "kosta-rika-cumhuriyeti", "Cartago (Kosta Rika)": "kosta-rika-cumhuriyeti",
      "Liberia (Kosta Rika)": "kosta-rika-cumhuriyeti"}
def oa_zincir(kur, ulke):
    z = []
    if kur < "1821-09-15":
        if kur < "1535-04-17":
            z.append({"f": kur, "t": "1535-04-17", "d": "ispanya"}); z.append({"f": "1535-04-17", "t": "1821-09-15", "d": "yeni-ispanya"})
        else:
            z.append({"f": kur, "t": "1821-09-15", "d": "yeni-ispanya"})
        z.append({"f": "1821-09-15", "t": ULKE_F[ulke], "d": "guatemala"})
    else:
        z.append({"f": kur, "t": ULKE_F[ulke], "d": "guatemala"})
    z.append({"f": ULKE_F[ulke], "t": SON, "d": ulke})
    return z
ZINCIR = {  # ad → (s, not)
    "Xapuri": ([{"f": "1904-08-22", "t": SON, "d": "brezilya-cumhuriyeti"}],
               "kur Brezilya idaresinin başladığı gün (Território do Acre); 1883 yerleşimi ve Bolivya ('Mariscal Sucre') dönemi kaynaksız — yazılmadı"),
}
KUR = {"Xapuri": ("1904-08-22", "gun")}
KESINLIK = {"Quines": "yil"}   # gün 'fecha aproximada' — yıla indirildi
# Kıyı noktaları NE 10m kara maskesinin 0,2-0,7 km dışında — en yakın kara kenarından 0,01° içeri çekildi.
KONUM = {"Almeirim": (-1.5134, -52.5797), "Ushuaia": (-54.8098, -68.3239), "Puerto Deseado": (-47.7398, -65.8995)}
def kunye_bolu(s):
    """İlk dönem künyesinden ÖNCE başlıyorsa atlas emsaliyle böl: portekiz-brezilyasi 1549-01-01'den,
    ispanyol-peru 1542-11-20'den (öncesi portekiz / ispanya — emsal: Olinda, Kolombiya zincirleri)."""
    b = {"portekiz-brezilyasi": ("1549-01-01", "portekiz"), "ispanyol-peru": ("1542-11-20", "ispanya")}
    p = s[0]
    if p["d"] in b and p["f"] < b[p["d"]][0]:
        g, onc = b[p["d"]]
        return [{"f": p["f"], "t": g, "d": onc}, dict(p, f=g)] + s[1:], f"zincirin ilk dönemi künye başlangıcından ({g}) önce: öncesi {onc}"
    return s, None
# ────────────────────────────────────────────────────────────────────────────

def km(a, b):
    o = math.radians((a[0] + b[0]) / 2); return 111.32 * math.hypot(a[0] - b[0], (a[1] - b[1]) * math.cos(o))
kabul, renk, bulun, dusen, bekleyen = [], [], [], [], []
ek = {}
for yol in glob.glob(os.path.join(S, "aday_*_ek.json")):
    for a in json.load(io.open(yol, encoding="utf-8")):
        if "ad" in a: ek[a["ad"]] = a
def kaynaklar():
    gorulen = set()
    for yol in sorted(glob.glob(os.path.join(S, "aday_*.json"))):
        if yol.endswith("_ek.json"): continue
        grup = os.path.basename(yol)[5:-5]
        for a in json.load(io.open(yol, encoding="utf-8")):
            if "ad" in a: gorulen.add(a["ad"])
            yield grup, a
    for ad, a in ek.items():
        if ad not in gorulen: yield "EK", a
for grup, a in kaynaklar():
        if a.get("bulunamadi") and any(e.get("hedef") == a["hedef"] for e in ek.values()):
            continue   # hedef ekte noktaya döndü
        if a.get("bulunamadi"):
            bulun.append({"grup": grup, "hedef": a["hedef"], "neden": a.get("neden", "")}); continue
        if "ad" not in a or a.get("ayni"): continue
        if a["ad"] in ek:
            a = dict(a, **ek[a["ad"]])
        ad = a["ad"]
        if ad in DUS or a.get("dus"):
            dusen.append((ad, DUS.get(ad) or a.get("dus"))); continue
        if ad in KUR: a["kur"], a["hassasiyet"] = KUR[ad]
        if ad in ZINCIR: a["s"], znot = ZINCIR[ad]; a["sorun"] = ""; a["neden"] += " · " + znot
        if ad in OA: a["s"] = oa_zincir(a["kur"], OA[ad]); a["sorun"] = ""; a["neden"] += (
            " · zincir: yeni-ispanya → guatemala (1821-09-15; atlas künyesi Orta Amerika Federasyonu dönemini bu kimlikle izler) → "
            + OA[ad] + " (" + ULKE_F[OA[ad]] + ")")
        if ad in KESINLIK: a["hassasiyet"] = KESINLIK[ad]
        if not a.get("s"):
            bekleyen.append((ad, a.get("sorun", "")[:200])); continue
        if any(x["ad"] == ad or km((x["lat"], x["lon"]), (a["lat"], a["lon"])) < 3 for x in kabul + renk):
            dusen.append((ad, "başka grupta aynı yer (mükerrer)")); continue
        not_ = []
        a["s"], bnot = kunye_bolu(a["s"])
        if bnot: not_.append(bnot)
        if ad in KONUM:
            not_.append(f"konum NE 10m kara maskesine çekildi ({a['lat']},{a['lon']} → {KONUM[ad][0]},{KONUM[ad][1]})")
            a["lat"], a["lon"] = KONUM[ad]
        if a.get("sorun"): not_.append("SORUN (araştırma): " + a["sorun"])
        if a.get("mesafe_km") is not None: not_.append(f"hedef {a.get('hedef')} · {a['mesafe_km']} km")
        r = {"ad": ad, "tur": a.get("tur", "sehir"), "lat": round(float(a["lat"]), 4), "lon": round(float(a["lon"]), 4),
             "kur": a["kur"], "kesinlik": a.get("hassasiyet", "gun"), "s": a["s"], "kaynak": a["kaynak"],
             "neden": a["neden"], "not": " · ".join(not_), "grup": grup}
        if a.get("isg"):
            # isg veri dosyasına YAZILMAZ: kronoloji maddesi olmadan Değişmez 2i'yi deler (ölçüldü: 5 kırılma, 4 açık,
            # tavan 3). Kronoloji dosyaları koordinatörün ⇒ öneri olarak saklanır, teslimde bildirilir.
            r["isg_oneri"] = a["isg"]
            r["not"] += (" · " if r["not"] else "") + "işgal öncesi dönem (isg önerisi, kronoloji bekliyor): " + \
                ", ".join(f"{p['d']} {p['f']}→{p['t']}" for p in a["isg"])
        (renk if any(p["d"] in RENKSIZ for p in a["s"]) else kabul).append(r)
json.dump(kabul, io.open(os.path.join(KOK, "denetim/A-AMERIKA-0078-adaylar.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
json.dump(renk, io.open(os.path.join(KOK, "denetim/A-AMERIKA-0078-renk-bekleyen.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
json.dump(bulun, io.open(os.path.join(KOK, "denetim/A-AMERIKA-0078-bulunamadi.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(f"kabul {len(kabul)} · renk-bekleyen {len(renk)} · zinciri bekleyen {len(bekleyen)} · düşen {len(dusen)} · bulunamadı {len(bulun)}")
for x in dusen: print("  DÜŞTÜ", *x)
for x in bekleyen: print("  ZİNCİR BEKLİYOR", *x)
