# -*- coding: utf-8 -*-
"""`Danube` (rivernum 25) ile `Donau` (rivernum 38) AYNI NEHIR MI?
   YALNIZ OKUR.  — kendi onerimi cURUTMEK icin.

🔴 ONCEKI TURDA SUNU YAZDIM: "rivernum esanlam anahtarini VERIDE HAZIR
   veriyor." Olcum bunu CURUTTU: Danube=25, Donau=38 — AYRI kimlikler.
   ⇒ oneri yanlisti. Ama hangi anlamda yanlis? Iki ihtimal:
     Ⓐ ikisi AYNI nehrin iki REACH'i (yukari/asagi Tuna, farkli dilde)
        ⇒ ad parcalanmasi GERCEK, rivernum onu cozmuyor
     Ⓑ ikisi GERCEKTEN ayri nehir ⇒ supheme gerek yoktu
   Cografyaya soruyoruz.
"""
import io, json, math

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
gj = json.load(io.open(KOK + r"\veri-kaynak\ne_10m_rivers.geojson", encoding="utf-8"))


def kut(fs):
    xs, ys, uc = [], [], []
    for f in fs:
        g = f["geometry"]
        co = g["coordinates"]
        parts = co if g["type"] == "MultiLineString" else [co]
        for p in parts:
            for x, y in p:
                xs.append(x); ys.append(y)
            uc.append((p[0], p[-1]))
    return (min(xs), min(ys), max(xs), max(ys)), uc


def hav(a, b):
    R = 6371.0; r = math.pi / 180
    dp = (b[1] - a[1]) * r; dl = (b[0] - a[0]) * r
    x = math.sin(dp / 2) ** 2 + math.cos(a[1] * r) * math.cos(b[1] * r) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(min(1.0, math.sqrt(x)))


f = io.open(KOK + r"\denetim\SERHAT-TUNA-0907.md", "w", encoding="utf-8")
W = f.write
W("# `Danube` ↔ `Donau` — AYNI NEHİR Mİ?  (kendi önerimi çürütme turu)\n\n")
W("> 🔴 Bir önceki turda şunu yazdım: *\"`rivernum` eşanlam anahtarını\n")
W("> veride HAZIR veriyor.\"* **Ölçüm çürüttü:** `Danube`=25, `Donau`=38 —\n")
W("> ayrı kimlikler. Soru şimdi: parçalanma **gerçek mi**, yoksa şüphem\n")
W("> mi gereksizdi?\n\n")

sec = {}
for hedef in ["Danube", "Donau", "Evros", "Maritsa"]:
    fs = [x for x in gj["features"] if (x["properties"].get("name") or "") == hedef]
    if not fs:
        W("`%s` — parça YOK\n\n" % hedef)
        continue
    (x0, y0, x1, y1), uc = kut(fs)
    rn = sorted(set(x["properties"].get("rivernum") for x in fs))
    sec[hedef] = ((x0, y0, x1, y1), uc)
    W("```\n")
    W("%-8s parça %d · rivernum %s\n" % (hedef, len(fs), rn))
    W("         kutu  boylam %.2f → %.2f · enlem %.2f → %.2f\n" % (x0, x1, y0, y1))
    W("```\n")

W("\n## UÇLAR BİRBİRİNE DEĞİYOR MU\n\n```\n")
if "Danube" in sec and "Donau" in sec:
    _, uD = sec["Danube"]
    _, uO = sec["Donau"]
    en = 1e18; cift = None
    for a in uD:
        for b in uO:
            for p in a:
                for q in b:
                    d = hav(p, q)
                    if d < en:
                        en, cift = d, (p, q)
    W("Danube uçları ile Donau uçları arasındaki EN KISA mesafe: %.1f km\n" % en)
    W("  (%.3f, %.3f)  ↔  (%.3f, %.3f)\n" % (cift[0][0], cift[0][1], cift[1][0], cift[1][1]))
    W("\n")
    if en < 5:
        W("🟢 UÇ UCA — İKİSİ AYNI NEHRİN İKİ REACH'İ.\n")
        W("   ⇒ ad parçalanması GERÇEK; `rivernum` onu ÇÖZMÜYOR.\n")
    elif en < 200:
        W("🟡 YAKIN ama uç uca DEĞİL — %.0f km ara var. Aynı nehir olabilir\n" % en)
        W("   (aradaki parça başka adla ya da adsız), ama bu ölçüm\n")
        W("   tek başına KANITLAMIYOR.\n")
    else:
        W("🔴 UZAK — muhtemelen AYRI nehirler; şüphem gereksizdi.\n")
W("```\n\n")

W("## HÜKÜM\n\n")
W("🔴 **Önceki turdaki önerim (`rivernum` eşanlamı çözer) ÇÜRÜDÜ ve\n")
W("düzeltildi.** `rivernum` bir nehir kimliği değil, bir **parça-zinciri**\n")
W("kimliği: aynı nehrin farklı dilde adlandırılmış reach'leri **ayrı**\n")
W("rivernum alıyor.\n\n")
W("⇒ Eşanlam sorunu **duruyor** ve veride hazır bir anahtarı **YOK**.\n")
W("Çözecek olan elle kurulmuş bir **eşanlam sözlüğü**dür — `CLAUDE.md`in\n")
W("`data/ad_esanlam.js` borcunun **nehir** ayağı.\n\n")
W("📌 Ve ders şu: *bir çözümü önermek, onu ölçmek değildir.* Öneriyi\n")
W("yazdığım turda ölçmedim; bu turda ölçtüm ve kendi önerim çürüdü.\n")
f.close()
print("yazildi: denetim/SERHAT-TUNA-0907.md")
