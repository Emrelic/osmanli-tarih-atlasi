# -*- coding: utf-8 -*-
"""55 Misir noktasi icin himaye kalibi yamasi URETIR (denetim/'e yazar).
Tam s:/isg: zincirini KORUYARAK (Cacak tuzagi) -- yalniz son 'ingiltere'
donemini boler ve isg: dizisine yeni bir donem EKLER (var olanlari SILMEZ).
"""
import sys, json
sys.path.insert(0, "arac")
import girdi

Y = girdi.yukle(sessiz=True)

GECIS = "1914-12-18"
KRALLIK_GECIS = "1922-03-15"   # TDV: "Sultan Ahmed Fuâd 15 Mart 1922'de kral unvanini aldi"
BITIS = "1923-10-29"

secilenler = []
for y in Y:
    s = y.get("s") or []
    v = y.get("v") or []
    onceki_kavalali_v = any("kavalal" in (p.get("k") or "").lower() and p.get("t") == GECIS for p in v)
    hedef_donem = next((p for p in s if p.get("d") == "ingiltere" and p.get("f") == GECIS and p.get("t") == BITIS), None)
    if onceki_kavalali_v and hedef_donem:
        secilenler.append(y)

print("SECILEN NOKTA SAYISI:", len(secilenler))

def js_metin(x):
    return '"' + str(x).replace("\\", "\\\\").replace('"', '\\"') + '"'

def js_donem(p):
    par = []
    for k in ("f", "t", "d", "k", "kaynak"):
        if k in p and p[k] is not None:
            par.append("%s:%s" % (k, js_metin(p[k])))
    return "{" + ",".join(par) + "}"

def js_dizi(liste):
    return "[" + ",".join(js_donem(p) for p in liste) + "]"

kayitlar = []
for y in secilenler:
    ad = y["ad"]
    s = list(y.get("s") or [])
    # son 'ingiltere' donemini ikiye bol
    yeni_s = []
    for p in s:
        if p.get("d") == "ingiltere" and p.get("f") == GECIS and p.get("t") == BITIS:
            yeni_s.append({"f": GECIS, "t": KRALLIK_GECIS, "d": "misir-sultanligi"})
            yeni_s.append({"f": KRALLIK_GECIS, "t": BITIS, "d": "misir-kralligi"})
        else:
            yeni_s.append(p)
    # isg: -- var olanlari KORU, yeni bir 1914-1923 ingiltere ortusu EKLE
    mevcut_isg = list(y.get("isg") or [])
    # zaten 1882-1914 araligi var (isgal), 1914-1923 arasi HIMAYE olarak AYRI donem
    yeni_isg = mevcut_isg + [{"f": GECIS, "t": BITIS, "d": "ingiltere"}]

    kayit_js = (
        '{ ad:%s,\n  s:%s,\n  isg:%s,\n  kaynak:%s,\n  not:%s },'
        % (
            js_metin(ad),
            js_dizi(yeni_s),
            js_dizi(yeni_isg),
            js_metin(
                "TDV, madde: misir (CANLI, raw HTML dogrulandi, 278.117 kar.) - "
                "AYNEN: '18 Aralik 1914'te tek tarafli olarak Osmanli hukumranlik "
                "haklarini kaldirip Misir'i himayesine aldi' (GUN, mevcut kunye f: "
                "degeriyle BIREBIR) ve 'Sultan Ahmed Fuad 15 Mart 1922'de kral unvanini "
                "aldi ve Misir'da monarsi ilan edildi' (GUN). Himaye kalibi: Kuveyt/"
                "Katar/Bahreyn/Buganda emsali (M-2784)."
            ),
            js_metin(
                "KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e "
                "henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu "
                "5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica "
                "'28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet "
                "ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), "
                "kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik "
                "gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari "
                "('Sultanlik'/'Krallik') basin UNVANINI izliyor."
            ),
        )
    )
    kayitlar.append(kayit_js)

cikti = "window.YER_YAMA_MISIR_HIMAYE = [\n" + "\n\n".join(kayitlar) + "\n\n];\n"
with open("denetim/yer_yama_misir_himaye.js", "w", encoding="utf-8") as f:
    f.write(
        "// =====================================================================\n"
        "// 1923 SINIRLARI -- Misir'in 55 noktasi icin himaye kalibi (M-2919)\n"
        "// Kaynak: denetim/OLCUM-MISIR-1914-1923-0905.md + TDV misir govdesi\n"
        "// Oturum: 1923 SINIRLARI - local_372203f2-6e71-46d2-af5e-563a5c7eca60\n"
        "//\n"
        "// KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e\n"
        "// henuz eklenmedi (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b\n"
        "// bitip kunyeler renklendikten SONRA inmeli (M-2919 sirasi).\n"
        "//\n"
        "// TAM ZINCIR KORUNDU (_sahiplik_uygula.py:566 s:/isg: DIZIYI DEGISTIRIR,\n"
        "// EKLEMEZ -- Cacak tuzagi, her kayitta TAM zincir yazildi).\n"
        "// =====================================================================\n\n"
        + cikti
    )
print("Yazildi: denetim/yer_yama_misir_himaye.js")
