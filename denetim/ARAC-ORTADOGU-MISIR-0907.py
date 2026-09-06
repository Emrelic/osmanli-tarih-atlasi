# -*- coding: utf-8 -*-
"""⑥ MISIR/SUDAN — TRİYAJ'ın "5 nokta" adayı ölçüldü, **7 oldu, iki sınıf**.

🔴 Damgası `okumadım`dı; kaynağa SORULDU (TDV `misir`, 330.454 kar.).
🔴 Yama CANLI VERİDEN üretilir, elle yazılmaz. `denetim/` altına.
"""
import copy
import io
import json
import os
import sys

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
import girdi  # noqa: E402

SON = "1923-10-29"
KA_MISIR = "TDV `misir` — «İngiltere 28 Şubat 1922'de tek taraflı olarak " \
    "Mısır'ı bağımsız devlet ilân etti» ve «Sultan Ahmed Fuâd 15 Mart " \
    "1922'de kral (melik) unvanını aldı ve Mısır'da monarşi ilân " \
    "edildi». 🟢 OLAYIN dayanağı KESİN, GÜNÜN dayanağı da KESİN " \
    "(15 Mart 1922 gövdede tam dizgi). Dört İngiliz çekincesinin " \
    "HİÇBİRİ TOPRAK DEVRETMİYOR: haberleşme güvenliği · savunma · " \
    "azınlık hakları · Sudan'ın yönetimi — hepsi bağımsız Mısır " \
    "üzerinde HAK, tasarruf değil."
KA_SUDAN = "künye `ingiliz-sudani` f:1899-01-19 — kaydın kendi günü " \
    "künyenin AÇILIŞ günüyle BİREBİR aynı (Anglo-Mısır Kondominyumu). " \
    "🟡 Kimlik düzeltmesi bu eşleşmeye dayanıyor; TDV'ye AYRICA " \
    "sorulmadı (damga: okumadım)."

SINIF = {
    "misir-kralligi": (["Süveyş", "Sina güneyi", "Tûr (Sînâ)", "Sefâce",
                        "Kusayr"], "1922-03-15", KA_MISIR),
    "ingiliz-sudani": (["Abrî (Mahas)", "Delgo (Sükkût)"],
                       "1899-01-19", KA_SUDAN),
}

Y = girdi.yukle(sessiz=True)
ix = {z["ad"]: z for z in Y}
yama, atlanan = [], []
for kim, (adlar, gun, kay) in SINIF.items():
    for ad in adlar:
        z = ix.get(ad)
        if z is None:
            atlanan.append((ad, "ATLASTA YOK"))
            continue
        s = [dict(q) for q in (z.get("s") or [])]
        # 🔴 SIRA ÖNEMLİ — ÇEVİRME ÖNCE SORULUR.
        #   İlk yazımda BÖLME dalını önce koydum ve `Abrî`/`Delgo` için
        #   SIFIR UZUNLUKTA dönem ürettim (`1899-01-19→1899-01-19`) —
        #   `§8`in adıyla yasakladığı Tebriz vakası. Gün dönemin
        #   BAŞLANGICINA eşitse bölünecek bir şey YOK, kimlik DEĞİŞİR.
        tam = [q for q in s if q.get("d") == "ingiltere"
               and q.get("f") == gun]
        if len(tam) == 1:
            q = tam[0]
            yeni = [dict(x) if x is not q else
                    dict(x, d=kim, kaynak=kay) for x in s]
        else:
            hedef = [q for q in s if q.get("d") == "ingiltere"
                     and q.get("f", "") < gun < q.get("t", "")]
            if len(hedef) != 1:
                atlanan.append((ad, "🔴 hedef dönem %d" % len(hedef)))
                continue
            q = hedef[0]
            yeni = []
            for x in s:
                if x is q:
                    yeni.append(dict(x, t=gun))
                    yeni.append({"f": gun, "t": q["t"], "d": kim,
                                 "kaynak": kay})
                else:
                    yeni.append(dict(x))
        yeni.sort(key=lambda x: x["f"])
        # SINAV: süreklilik
        dil = sorted([(x["f"], x["t"]) for x in
                      yeni + [dict(p) for p in (z.get("d") or [])]
                      + [dict(p) for p in (z.get("v") or [])]],
                     key=lambda x: x[0])
        im, bos = dil[0][0], []
        for f, t in dil:
            if t <= im:
                continue
            if f > im:
                bos.append("%s→%s" % (im, f))
            im = max(im, t)
        if im < SON:
            bos.append("%s→%s" % (im, SON))
        if bos:
            atlanan.append((ad, "🔴 BOŞLUK: %s" % " ".join(bos)))
            continue
        yama.append({"ad": ad, "s": yeni})

print("═══ YAMA: %d kayıt · atlanan %d" % (len(yama), len(atlanan)))
for k in yama:
    print("   %-18s %s" % (k["ad"][:18],
                           " | ".join("%s→%s:%s" % (q["f"], q["t"],
                                                    q.get("d") or "OSM")
                                      for q in k["s"] if q["f"] >= "1880")))
for a, s in atlanan:
    print("   🔴 %-18s %s" % (a[:18], s))

# C13 ATEŞLEME
if yama:
    bz = copy.deepcopy(yama[0])
    for q in bz["s"]:
        if q.get("d") == "misir-kralligi":
            q["f"] = "1923-01-01"
    dil = sorted([(x["f"], x["t"]) for x in bz["s"]], key=lambda x: x[0])
    im, bos = dil[0][0], []
    for f, t in dil:
        if t <= im:
            continue
        if f > im:
            bos.append("%s→%s" % (im, f))
        im = max(im, t)
    print("\n═══ C13 ATEŞLEME: %s" % (bos or "🔴 DAL ATEŞLEMEDİ"))
    assert bos, "🔴 C13 İHLALİ"

yol = os.path.join(KOK, "denetim", "yer_yama_ortadogu_misir_1923.js")
with open(yol, "w", encoding="utf-8") as f:
    f.write("// denetim/yer_yama_ortadogu_misir_1923.js — ORTADOĞU\n")
    f.write("// 7 Eylül 2026 · TASLAK · veri yazılmadı · koşu 7b sürüyor\n")
    f.write("window.YER_YAMA_ORTADOGU_MISIR_1923 = ")
    json.dump(yama, f, ensure_ascii=False, indent=1)
    f.write(";\n")
print("\n⇒ %s" % yol)
