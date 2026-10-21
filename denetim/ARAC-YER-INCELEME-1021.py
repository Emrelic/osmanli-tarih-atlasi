# -*- coding: utf-8 -*-
"""yt_ aday dosyalarından insan inceleme kontrol listesi üretir: denetim/yer-arastirma/INCELEME-LISTESI.md
Kullanım: py denetim/ARAC-YER-INCELEME-1021.py   (salt okunur; tek çıktı dosyası)"""
import sys, io, os, re, glob, json
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
satir_ = []
sayac = {"yerlesim": 0, "bolge": 0}
risk_say = {}
for f in sorted(glob.glob(os.path.join(KOK, "data", "yerlesimler_once1281_yt_*.js"))):
    s = open(f, encoding="utf-8").read()
    for b in re.split(r"\n(?=\{ ad:)", s)[1:]:
        m = re.match(r'\{ ad:"([^"]*)", tur:"([^"]*)", lat:(-?[\d.]+), lon:(-?[\d.]+)', b)
        if not m:
            continue
        ad, tur, lat, lon = m.group(1), m.group(2), m.group(3), m.group(4)
        kay = re.search(r'kaynak:"((?:[^"\\]|\\.)*)"', b)
        kay = json.loads('"' + kay.group(1) + '"') if kay else ""
        not_ = re.search(r'not:"((?:[^"\\]|\\.)*)"', b)
        not_ = json.loads('"' + not_.group(1) + '"') if not_ else ""
        risk = []
        if tur == "bolge":
            risk.append("BÖLGE: modern/tek merkez; tarihî sınır değil")
            if "Natural Earth" in kay:
                risk.append("Natural Earth son çare (çift tanık değil)")
        if "alias_teyit:false" in not_:
            risk.append("alias teyitsiz")
        elif "ALIAS" in not_:
            risk.append("alias TDV ile teyitli (gövde okundu)")
        if re.search(r"fort-2|findspot|cemetery|bath", kay):
            risk.append("Pleiades türü yerleşim dışı olabilir")
        if "konum_kesinlik:\"yaklasik\"" in b:
            risk.append("konum yaklaşık")
        if "Syriaca" in kay or "ToposText" in kay:
            risk.append("ikinci tanık Pleiades'ten bağımsız değil")
        if "DAI" in kay and "GeoNames" in kay:
            risk.append("DAI/GeoNames aynı koordinat olabilir")
        if tur != "bolge" and "ÇİFT TANIK" not in kay:
            risk.append("çift tanık ifadesi yok")
        for r in risk:
            risk_say[r] = risk_say.get(r, 0) + 1
        sayac["bolge" if tur == "bolge" else "yerlesim"] += 1
        tanik = re.sub(r"\s*·\s*denetim/yer-arastirma/\S+$", "", kay)
        satir_.append("| %s | %s | %s, %s | %s | %s | %s |" % (ad.replace("|", "/"), tur, lat, lon, os.path.basename(f).replace("yerlesimler_once1281_yt_", "").replace(".js", ""),
                                                                    tanik[:260].replace("|", "/"), "; ".join(risk) or "—"))
cikti = ["# YER-TANIMA — insan inceleme kontrol listesi (21 Ekim 2026)", "",
         "Kaynak: `data/yerlesimler_once1281_yt_*.js` (BAĞLANMADI). Üreten: `denetim/ARAC-YER-INCELEME-1021.py`. Toplam %d kayıt: %d yerleşim, %d bölge temsilcisi." % (sum(sayac.values()), sayac["yerlesim"], sayac["bolge"]), "",
         "## Nasıl bakılır", "",
         "1. Her kayıtta **koordinat** gerçekten kronolojideki yeri mi gösteriyor? (aynı ad başka ülkede olabilir; harita: iki tanığın koordinatı birbirine ≤10 km.)",
         "2. **Risk** sütunu doluysa o kayıt bağlanmadan önce elle bakılmalı. Bölge noktaları modern poligon/merkez temsilcisidir; tarihî sınır DEĞİL.",
         "3. Aynı ad iki ayrı yerse `KURAL-AYNI-AD-IKI-YER.md` kuralı: ayrı kayıt + ayırt edici ad.",
         "4. Hiç `s:`/`d:` yok; sahip zinciri DEVLET-LISTESI ile yazılacak. `kur:`/`bit:` henüz yok (Değişmez 1 için bağlama sırasında yazılır).", "",
         "## Risk özeti", ""]
for r, n in sorted(risk_say.items(), key=lambda x: -x[1]):
    cikti.append("- %s: %d" % (r, n))
cikti += ["", "## Kayıtlar", "", "| Ad | Tür | Koordinat | Kutu | Tanıklar | Risk |", "|---|---|---|---|---|---|"] + satir_
open(os.path.join(KOK, "denetim", "yer-arastirma", "INCELEME-LISTESI.md"), "w", encoding="utf-8").write("\n".join(cikti) + "\n")
print(sayac, risk_say)
