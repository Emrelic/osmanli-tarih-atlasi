# KASA · 4 Ekim 2026 · KASA-ZINCIR-1004.json -> rapor tablosu (koordinatorun
# keskinlestirdigi olcut): "KOMSUNUN devralinan bilgisi KOMSUNUN KENDI
# KAYNAGINA dayaniyor mu?" + kova. Kullanim:
#   py denetim/ARAC-KASA-ZINCIR-TABLO-1004.py > tablo.md
import json, os, sys
from collections import Counter
sys.stdout.reconfigure(encoding="utf-8")
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), "KASA-ZINCIR-1004.json")
d = json.load(open(D, encoding="utf-8"))

# Gun kaynagini kendi kaynak: alaninda DOGRUDAN anan kayitlar (elle okundu):
# komsu kaydi bos olsa da gun bir kaynaga dayaniyor.
DOGRUDAN = {
 "Başkale": "TDV `van` '24 Ağustos 1548' kayıtta doğrudan",
 "Çaldıran": "TDV `van` '24 Ağustos 1548' kayıtta doğrudan",
 "Şeyhrumi (Yücelen)": "TDV `van` '24 Ağustos 1548' kayıtta doğrudan; Çaldıran'dan almadığını beyan ediyor",
 "Gümülcine": "1913-05-30 Londra Antlaşması kayıtta doğrudan (TDV `gumulcine` olayı veriyor)",
}
# Komsu kaynakli ama baska sart (yakinlik / karisik komsu) suphe doguruyor
SART_SUPHE = {
 "Vanimo": "komşu Herbertshöhe kaynaklı (NLA) ama 600 km — yakınlık şartı kendi beyanında zayıf",
 "Filorina (Florina)": "karışık: Kesriye kaynaklı, Manastır boş, Vodina yalnız slug",
}

def komsu_dayanak(z):
    parca = z["yol"].split(" ← ")
    uc = z["uc"]
    if z["derinlik"] >= 2:
        return "HAYIR — komşu da devralmış"
    if uc == "BOS":
        return "HAYIR — komşu kaynaksız"
    if uc == "ADSIZ":
        return "BELİRSİZ — komşu adı yok"
    if uc.startswith("ZAYIF") or uc == "YALNIZ-DONEM":
        return "BELİRSİZ — " + uc.replace("ZAYIF:", "").replace("YALNIZ-DONEM", "yalnız dönem içi kaynak") \
            .replace("yalniz", "yalnız").replace("gunu", "günü").replace("kaynagi degil", "kaynağı değil")
    return "EVET (görünüşte)"

rows = []
for s in d:
    if s["alan"] in ("KADEME", "YANLIS", "KUNYE", "OLAY-GUNU", "OKUNMADI"):
        continue
    zs = s["zincir"] or [dict(yol=s["ad"] + " ← (adsız 'komşu kayıtlar')", derinlik=1, uc="ADSIZ")]
    dy = [komsu_dayanak(z) for z in zs]
    mx = max(z["derinlik"] for z in zs)
    gun = s["alan"] == "GUN"
    if not gun:
        kova = "C · BEYANLI ama DEVLET/YIL — izinsiz sınıf"
    elif s["ad"] in DOGRUDAN:
        kova = "A · BEYANLI-ŞARTLI (izinli) — gün kaynağı kayıtta"
    elif s["ad"] in SART_SUPHE:
        kova = "D · ŞÜPHELİ"
    elif all(x.startswith("EVET") for x in dy):
        kova = "A · BEYANLI-ŞARTLI (izinli)"
    elif any(x.startswith("HAYIR") for x in dy):
        kova = "B · BEYANLI ama 1. ŞART DÜŞÜYOR — izinsiz"
    else:
        kova = "D · ŞÜPHELİ"
    not_ = DOGRUDAN.get(s["ad"]) or SART_SUPHE.get(s["ad"]) or ""
    rows.append(dict(kova=kova, ad=s["ad"], dosya=s["dosya"].replace("yerlesimler_", ""),
                     der=mx, alan=s["alan"].replace("GUN", "GÜN"),
                     yol="<br>".join(z["yol"] for z in zs), dy="<br>".join(dy), not_=not_))
rows.sort(key=lambda r: (r["kova"], -r["der"], r["ad"]))
print("| kova | ad | dosya | derinlik | devralınan | zincir (← dayandığı) | komşunun bilgisi kendi kaynağına dayanıyor mu | not |")
print("|---|---|---|:-:|---|---|---|---|")
for r in rows:
    print(f"| {r['kova'][0]} | {r['ad']} | {r['dosya']} | {r['der']} | {r['alan']} | {r['yol']} | {r['dy']} | {r['not_']} |")
c = Counter(r["kova"] for r in rows)
c2 = Counter((r["kova"][0], r["dy"].split(" —")[0].split("<br>")[0]) for r in rows if r["kova"][0] == "C")
print("\n<!--SAYIM " + json.dumps(dict(c), ensure_ascii=False) + " C-dayanak " + json.dumps({f"{k[1]}": v for k, v in c2.items()}, ensure_ascii=False) + " -->")
