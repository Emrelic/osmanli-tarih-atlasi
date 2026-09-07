# -*- coding: utf-8 -*-
"""ONERI-RENK-MERGE-0907.json üreticisi · SINIR-KAFRIKA-0907

Sevkin istediği dört alan: ad + hex + ΔE + engel.
Ve istenmeyen ama ZORUNLU beşinci: **o ΔE'nin ne kadar güvenilir olduğu.**
"""
import io
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# `renk_olc --oner` ciktisi — artefakt: denetim/oneri-20260907-223328.txt
ONERI = {
 "arvanid-sancagi":      ("#54d224", 81.6, 129.3, 29.1),
 "avusturya-cumhuriyet": ("#6c24d2", 64.0, 313.1, 14.0),
 "cezayir-ocagi":        ("#6cd224", 82.2, 125.1, 25.3),
 "dejanovic-prensligi":  ("#7224d2", 64.2, 314.4, 13.0),
 "dubrovnik":            ("#96d224", 83.5, 116.9, 18.6),
 "gvalyar-sindiya":      ("#c024d2", 67.8, 330.5, 13.0),
 "indor-holkar":         ("#d25a24", 72.1,  58.4, 12.4),
 "kaheti-kralligi":      ("#9cd224", 83.7, 115.6, 17.7),
 "konstantin-beyligi":   ("#a2d224", 83.8, 114.3, 16.8),
 "kumuk-samhalligi":     ("#d28424", 76.7,  78.2, 12.3),
 "mekke-serifligi":      ("#a8d224", 84.0, 113.0, 15.8),
 "meysur-racaligi":      ("#d2ae24", 81.4,  94.0, 12.3),
 "orta-macar-kralligi":  ("#aed224", 84.2, 111.7, 15.0),
 "sarki-rumeli":         ("#bad224", 84.6, 109.0, 13.3),
 "trablusgarp-ocagi":    ("#2424d8", 61.3, 296.6, 25.1),
}

KUNYESIZ = {"gvalyar-sindiya", "indor-holkar", "meysur-racaligi"}

BANT_ALT, BANT_UST = 12.0, 13.0


def main():
    engel = json.load(io.open(os.path.join(KOK, "denetim",
                      "OLCUM-SINIR-KAFRIKA-ENGEL-0907.json"),
                      encoding="utf-8"))["kimlikler"]

    kayit = []
    for kim, (hexr, L, ton, de) in sorted(ONERI.items()):
        e = engel.get(kim, {})
        yakin = e.get("yakin_renkli") or {}
        koor = e.get("koordinatli", 0)
        kayit.append({
            "kimlik": kim,
            "hex": hexr,
            "L_yildiz": L,
            "ton_derece": ton,
            "de_en_yakin_engel": de,
            "sinirda_bant": BANT_ALT <= de <= BANT_UST,
            "kunye_var": kim not in KUNYESIZ,
            "aracin_kullandigi_engel": "2-3 (araç: '0 komşu')",
            "gercek_600km_renkli_kimlik": (len(yakin) if koor else None),
            "gercek_en_yakin_uc": (sorted(yakin.items(),
                                          key=lambda x: x[1])[:3]
                                   if koor else None),
            "engel_olcumu": ("olculdu" if koor else "olculemedi — yamada "
                             "`ad:` baglami bulunamadi"),
        })

    bant = [k for k in kayit if k["sinirda_bant"]]
    kunyesiz = [k for k in kayit if not k["kunye_var"]]
    olculemedi = [k for k in kayit if k["engel_olcumu"].startswith("olculemedi")]
    olculen = [k for k in kayit if not k["engel_olcumu"].startswith("olculemedi")]
    ort = (sum(k["gercek_600km_renkli_kimlik"] for k in olculen) / len(olculen)
           if olculen else 0)

    cikti = {
        "_NOT": "MERGE GECESI RENK HAZIRLIGI — SINIR-KAFRIKA-0907. "
                "UYGULANMADI: `arac/renkler.py` parmak izli ve koşu 8 canlı. "
                "Bu dosya bir ONERI'dir, bir yama degil.",
        "_URETIM": "arac/renk_olc.py --oner <15 kimlik>  ·  artefakt "
                   "denetim/oneri-20260907-223328.txt",
        "_KAYNAK_LISTE": "Kimlikler YENI KUNYE ONERILERINDEN degil, BEKLEYEN "
                         "YAMALARIN kullandigi `d:`/`kid:` kimliklerinden "
                         "turetildi (payda 154 · renksiz ham 26 · `harita:` "
                         "dolaylamasindan sonra 17 · gercek 15).",

        "🔴 _EN_ONEMLI_CEKINCE": (
            "BU ΔE DEGERLERI KOR BIR EVRENDE URETILDI VE OLDUKLARI GIBI "
            "UYGULANAMAZ. `renk_olc --oner` 15 kimligin HEPSI icin "
            "'🔴 komsusu olculemeyen kimlik ... 0 komsu, 2-3 renkli engel' "
            "bastı — cunku bu kimliklerin verisi girdi.py'nin okudugu "
            "dosyalarda DEGIL, BEKLEYEN YAMALARDA. "
            "OLCTUM: yamalar ininde 600 km icinde ORTALAMA %.1f RENKLI "
            "KIMLIK komsu olacak (olculebilen 10 kimlikte 12-46 arasi, ve "
            "cogunda 0 km — ayni yerlesim, farkli devir). "
            "⇒ Arac 2-3 engelle cozdu; gercek evren ~%.0f. "
            "📌 `§11` ÖLÇÜLMÜŞ VAKA: 'ÖLÇEMEDİĞİNİ ELEYEN BİR SÜZGEÇ ONU "
            "TEMİZ SAYAR' — `kuba ↔ lunda` aynen boyle olmustu (engel "
            "sayilmadi, sonra 365 km komsu oldular, ΔE 9,06)."
            % (ort, ort)),

        "🟢 _ONERILEN_SIRA": (
            "Sevkin zinciri '① kunye → ⑧ renk → ⑥ tasima' idi. Olcum bunu "
            "DEGISTIRIYOR: renk, verisi TASINDIKTAN SONRA olculmeli, yoksa "
            "engel kumesi bos kalir. ⇒ '① kunye → ⑥ tasima → ⑧ renk → kosu'. "
            "KILITLENME YOK: renksiz gecen an ile renk yazimi arasinda bir "
            "kosu YAPILMIYOR, yani `§8` harita deligi hic olusmuyor. "
            "Bu dosya o turda `--oner`i YENIDEN kosturmak icin hazir bir "
            "aday listesidir — bir son karar degil."),

        "🔴 _KUNYE_BLOKE": (
            "Uc kimligin KUNYESI YOK: gvalyar-sindiya · indor-holkar · "
            "meysur-racaligi. Ucu de `CLAUDE.md §3.5.0`da ADIYLA eksik ilan "
            "edilmis. `§8`e gore kunyesiz renk anlamsiz ⇒ renk REZERVE "
            "edilebilir ama kunye inmeden UYGULANMAZ."),

        "_SINIRDA_BANT": (
            "ΔE 12,0-13,0 arasi AYRICA isaretlendi (`sinirda_bant`). "
            "Gerekce `renkler.py:3513`in kendi kurali: `_GUVENLI_PAY = 13.0` "
            "— 'sinirda gecen bir aday KABUL EDILMEZ ... amac ucu ucuna "
            "degil RAHATCA gecmek'. Ekran 8 bit cizer ve yuvarlama ΔE'yi "
            "~0,3 kaydirir. 🔴 ESIGE DOKUNULMADI — pay buyutmenin bedeli "
            "(cozulemeyen kimlik artisi) OLCULMEDI."),

        "ozet": {
            "kimlik": len(kayit),
            "cozulemedi": 0,
            "sinirda_bant_12_13": len(bant),
            "kunyesiz": len(kunyesiz),
            "engel_olculemedi": len(olculemedi),
            "gercek_engel_ortalamasi_600km": round(ort, 1),
        },
        "oneriler": kayit,
    }

    yol = os.path.join(KOK, "denetim", "ONERI-RENK-MERGE-0907.json")
    with io.open(yol, "w", encoding="utf-8") as f:
        f.write(json.dumps(cikti, ensure_ascii=False, indent=1))

    print("yazildi: %s" % yol)
    print("kimlik %d · cozulemedi 0 · sinirda bant %d · kunyesiz %d · "
          "engel olculemedi %d" % (len(kayit), len(bant), len(kunyesiz),
                                   len(olculemedi)))
    print("")
    print("SINIRDA BANT (12,0-13,0):")
    for k in bant:
        print("   %-24s %s  ΔE %.1f" % (k["kimlik"], k["hex"],
                                        k["de_en_yakin_engel"]))
    print("")
    print("ENGEL OLCULEMEDI (yamada `ad:` baglami yok):")
    for k in olculemedi:
        print("   %s" % k["kimlik"])
    print("")
    print("gercek engel ortalamasi (600 km, olculebilen 10): %.1f" % ort)
    return 0


if __name__ == "__main__":
    sys.exit(main())
