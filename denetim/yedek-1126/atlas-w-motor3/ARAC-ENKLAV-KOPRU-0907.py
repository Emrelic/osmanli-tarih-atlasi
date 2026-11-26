# -*- coding: utf-8 -*-
"""ENKLAV-0907 — `KORİDOR-ADAY` kovasının ALT AYRIMI: KÖPRÜ MESAFESİ.

🔴 NİÇİN GEREKLİ: şartname B kovasını *"🟢 KORİDOR VAR → aradaki kayıtlara
   DÖNEM yazılmalı"* diye tarif ediyor. Ama ölçüm bunu ÇÜRÜTÜYOR:
   `KORİDOR-ADAY` kayıtlarında aradaki noktalar ZATEN o kimliği taşıyor
   (Zaachila 1535: arada 11 nokta, 11'i de `yeni-ispanya`). Yani eksik
   olan DÖNEM DEĞİL.

   Eksik olan `D7_BAG_KM`: `denetle.py:2029` *"aynı devletin iki yerleşimi
   bu mesafede BAĞLI"* — **150 km**. Zincir aynı kimlikten geçiyor ama bir
   yerinde 150 km'den geniş bir ATLAMA var ⇒ gövde kopuk görünüyor.

   ⇒ Çare `enklav:true` DEĞİL, DÖNEM de değil: **NOKTA YOĞUNLUĞU**
     (`§2`: *"o bölgede yerleşim noktası var mı? Cevap hayırsa hata
     orada, kodda değil"*).

🔴 BU ALET O ATLAMAYI ÖLÇER — "ne kadar az kalmış"ı sayıya çevirir:
     köprü ≤ 200 km   bir-iki nokta eklemek zinciri kapatır  ⇒ UCUZ
     köprü 200-400    araştırma ister
     köprü > 400 km   gerçek boşluk — `enklav:true` savunulabilir
"""
import sys, os, math, json, io

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
sys.stdout.reconfigure(encoding="utf-8")
import denetle

BAG = denetle.D7_BAG_KM
Y = denetle.yerlesimleri_yukle()
d7, _ = denetle.degismez7(Y)
assert len(d7) == 661, "TABAN 661 DEĞİL (%d)" % len(d7)
assert BAG == 150.0, "D7_BAG_KM değişti: %r — eşik taşınmalı" % BAG

ix = {}
for y in Y:
    ix.setdefault(y["ad"], []).append(y)

def km(a, b):
    return denetle._d7_km((a["lat"], a["lon"]), (b["lat"], b["lon"]))

def sahip(y, g):
    for p in y.get("d", []):
        if p["f"] <= g < p["t"]: return "OSMANLI"
    for p in y.get("v", []):
        if p["f"] <= g < p["t"]: return "tâbi"
    for p in y.get("s", []):
        if p["f"] <= g < p["t"]: return p["d"]
    return None

sonuc = []
for r in d7:
    ad, g, kim, anaAd = r["yerlesim"], r["gun"], r["sahip"], r.get("ana")
    if ad not in ix or not anaAd or anaAd not in ix:
        continue
    # O gün o kimliği taşıyan BÜTÜN noktalar — köprü bunların arasından kurulur
    K = [y for y in Y if sahip(y, g) == kim]
    if len(K) < 2:
        continue
    n = len(K)
    yer = {y["ad"]: i for i, y in enumerate(K)}
    if ad not in yer or anaAd not in yer:
        continue
    # 150 km grafiğinde `ada` ile `ana`nın bileşenleri
    komsu = [[] for _ in range(n)]
    for i in range(n):
        for j in range(i + 1, n):
            if km(K[i], K[j]) <= BAG:
                komsu[i].append(j); komsu[j].append(i)
    def bilesen(bas):
        gor, yig = {bas}, [bas]
        while yig:
            u = yig.pop()
            for v in komsu[u]:
                if v not in gor:
                    gor.add(v); yig.append(v)
        return gor
    A = bilesen(yer[ad])
    if yer[anaAd] in A:
        continue                      # aynı bileşende — ada değil (olmamalı)
    B = bilesen(yer[anaAd])
    # İki bileşen arasındaki EN KISA atlama = köprü
    kopru, cift = float("inf"), None
    for i in A:
        for j in B:
            d = km(K[i], K[j])
            if d < kopru:
                kopru, cift = d, (K[i]["ad"], K[j]["ad"])
    sonuc.append({"gun": g, "yerlesim": ad, "sahip": kim, "kova": r["kova"],
                  "ana_km": r["ana_km"], "kopru_km": round(kopru, 1),
                  "kopru_cift": cift, "ada_n": len(A), "gövde_n": len(B)})

bant = {"≤200 km (UCUZ)": 0, "200-400 km": 0, ">400 km (GERÇEK BOŞLUK)": 0}
for s in sonuc:
    k = s["kopru_km"]
    bant["≤200 km (UCUZ)" if k <= 200 else
         "200-400 km" if k <= 400 else ">400 km (GERÇEK BOŞLUK)"] += 1
print("köprüsü ölçülen kayıt: %d / %d" % (len(sonuc), len(d7)))
print("D7_BAG_KM = %.0f km\n" % BAG)
for k, v in bant.items():
    print("   %-26s %4d" % (k, v))

print("\nKOVA × BANT")
for kv in ("A-koridor", "B-bilinmiyor", "C-hakiki"):
    L = [s for s in sonuc if s["kova"] == kv]
    if not L: continue
    a = sum(1 for s in L if s["kopru_km"] <= 200)
    b = sum(1 for s in L if 200 < s["kopru_km"] <= 400)
    c = len(L) - a - b
    print("   %-14s n=%3d   ≤200:%3d   200-400:%3d   >400:%3d" % (kv, len(L), a, b, c))

print("\nEN UCUZ 20 — bir nokta eklemek zinciri kapatabilir")
for s in sorted(sonuc, key=lambda x: x["kopru_km"])[:20]:
    print("   %6.1f km  %s  %-24s → %-20s  [%s ↔ %s]"
          % (s["kopru_km"], s["gun"], s["yerlesim"][:24], s["sahip"][:20],
             s["kopru_cift"][0][:18], s["kopru_cift"][1][:18]))

with io.open("denetim/TRIYAJ-ENKLAV-KOPRU-0907.json", "w", encoding="utf-8") as f:
    json.dump({
        "_NOT": "ENKLAV-0907 · her sorgusuz enklav için ADA ile ANA GÖVDE "
                "arasındaki EN KISA ATLAMA (köprü). `D7_BAG_KM`=150 km: aynı "
                "devletin iki yerleşimi bu mesafede BAĞLI sayılır. Köprü bu "
                "eşiğe ne kadar yakınsa, ada o kadar SEYREKLİKTEN doğuyor "
                "demektir — ve çare `enklav:true` değil NOKTA EKLEMEKtir (§2).",
        "_UYARI": "Bu bir HÜKÜM listesi DEĞİL. Köprünün kısa olması koridorun "
                  "TARİHEN var olduğunu göstermez; yalnız FİZİKSEL olarak "
                  "mümkün olduğunu gösterir. Kaynak sorusu AÇIK kalır.",
        "_ESIK": {"D7_BAG_KM": BAG, "taban": len(d7),
                  "tavan": denetle.BEKLENEN_ENKLAV_SORGU},
        "bant": bant, "n": len(sonuc), "kayitlar": sonuc,
    }, f, ensure_ascii=False, indent=1)
print("\nyazıldı: denetim/TRIYAJ-ENKLAV-KOPRU-0907.json")
