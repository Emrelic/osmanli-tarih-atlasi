# -*- coding: utf-8 -*-
"""RİF — hipotez SINANDI, sonucu KAYNAKLANDI · SINIR-KAFRIKA-0907

1.MURAT'ın hipotezi (M-3237) AYAKTA ve bir sonucu var. Üç ölçüm:
  ① RIFKUTU     Rif çekirdeğinde atlas noktası VAR MI?
  ② RIFEMILME   yoksa orası KİMİN kimliğiyle boyanıyor?
  ③ TDV `fas`   o tarihte orası GERÇEKTE kimindi?
"""
import io
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "denetim", "SINIR-HUKUKI-KAFRIKA-0907.json")

BULGU = {
 "_NOT": "Rif bulgusu — bir KENAR kaydı degil, BOLGESEL bir olcum. "
         "Fas-Ispanya kenarini kapatirken cikti, kenarin kendisine ait "
         "degil. Kalem acilmadi; kayit burada duruyor.",
 "hipotez_sahibi": "1.MURAT (M-3237) — ve AYAKTA cikti",
 "olcum_1_nokta": {
   "soru": "Rif cekirdeginde atlas noktasi var mi?",
   "kutu": "34,6-35,4 K / 5,0-3,2 B (Acdir-Targuist ekseni)",
   "sonuc": "2 nokta, IKISI DE Ispanyol egemenlik adacigi "
            "(el-Huseyme/Alhucemas · Badis/Penon de Velez)",
   "hukum": "Rif IC BOLGESINDE atlas noktasi YOK. Genis kutuda (34,2-35,9 K "
            "/ 6,0-2,5 B) 10 nokta var ama hepsi kiyida ya da Rif'in "
            "disinda: Sebte · Tanca · Titvan · Melile · Sefsaven · "
            "Kasrulkebir · Vezzan · Taze.",
 },
 "olcum_2_emilme": {
   "soru": "Noktasiz Rif ici KIMIN kimligiyle boyaniyor? (§2)",
   "yontem": "EN YAKIN NOKTA — 6 temsili Rif ic noktasi",
   "sonuc": "6/6 -> `ispanya`  (Acdir 6,2 km Alhucemas · Nador 13,6 km "
            "Melilla · Beni Urriaguel 21,9 km Alhucemas · Targuist 25,9 km "
            "Badis · Ketame 37,3 km Badis · Vadi Kert 46,1 km Melilla)",
   "cekince": "🔴 YAKLASIKLIK: motorun kiyi/nehir yaslamasi ve TAVAN_KM'si "
              "hesaba KATILMADI. Kesin cevap `data/donemler.js`ten okunur; "
              "kosu 8 suruyor, o dosya donuk. ⚪ URETILMIS GEOMETRIDEN "
              "DOGRULANMADI.",
 },
 "olcum_3_kaynak": {
   "soru": "O tarihte Rif GERCEKTE kimindi?",
   "kaynak": "TDV Islam Ansiklopedisi, `fas` maddesi — 🟢 ACIP OKUDUM "
             "(govde 114.199 karakter, KESILMEDI). §4: Islam dunyasi icin "
             "BIRINCIL kaynak.",
   "alinti": "«Abdulkerim el-Hattabi, 22 Haziran 1921 gunu Annoual'da "
             "Ispanyollar'i buyuk bir yenilgiye ugratti ve arkasindan "
             "ISPANYOL HIMAYESINDEKI BOLGENIN ONEMLI BIR KISMINI "
             "KURTARARAK bagimsizligini ilan etti (19 Eylul 1921).» || "
             "«...Abdulkerim el-Hattabi'yi esir alarak (21 Mayis 1926) "
             "devletine son verdiler.» || «Rif Cumhuriyeti'nin kurucusu "
             "ve baskani (1921-1926)»",
 },
 "hukum": "🔴 Atlas, 1921 Eylul'unden 1923-10-29 ufkuna kadar Rif ic "
          "bolgesini `ispanya` ile boyuyor — TDV'nin «Ispanyol "
          "himayesindeki bolgenin onemli bir kismini KURTARARAK» dedigi "
          "donemde. Ve `rif-cumhuriyeti` kunyesi TAM O PENCERE icin var "
          "(f:1921-09-18 -> t:1923-10-29) ama onu TASIYACAK NOKTA YOK. "
          "⇒ Kusur kunyede DEGIL, `§2` NOKTASIZLIGINDA. 1.MURAT'in "
          "hipotezi AYAKTA.",
 "care_adayi": "⚪ ONERMIYORUM, olcmedim: Rif ic bolgesine nokta yazmak "
               "(Acdir/Targuist) kimligi tasinabilir kilar — ama nokta "
               "yazmak benim kalemim degil ve `§11`in 3 km mukerrer "
               "sinavi ayrica kosulmali.",
 "kunye_gun_farki": "🟡 KUCUK AMA KAYDA DEGER: kunye `f:1921-09-18`, TDV "
                    "«19 Eylul 1921» diyor — BIR GUN fark. Ve veri donemi "
                    "`t:1926-05-27`, TDV esir alinmayi «21 Mayis 1926» "
                    "veriyor — ALTI GUN fark. Ikisi de benim kalemim "
                    "degil; bildiriyorum.",
 "kendi_duzeltmem": "🔴 Bir onceki aletimde (RIFEMILME) tarihi cekinceyi "
                    "«1921 TEMMUZ'unda Annual» diye yazmistim. TDV «22 "
                    "HAZIRAN 1921» diyor. Hafizamdan yazmisim ve YANLISTI; "
                    "kaynaga sordugum icin duzeldi.",
}


def main():
    d = json.load(io.open(YOL, encoding="utf-8"))
    d["_RIF_BULGUSU"] = BULGU
    for k in d["kenarlar"]:
        if (k["a"], k["b"]) == ("Morocco", "Spain"):
            k["not"] = (k.get("not") or "") + (
                " 🟢 RİF BULGUSU KAYNAKLANDI — ayrıntısı dosyanın "
                "`_RIF_BULGUSU` bloğunda: Rif iç bölgesinde atlas noktası "
                "YOK, 6/6 temsilî nokta `ispanya`ya emiliyor, ve TDV `fas` "
                "o dönemde Rif Cumhuriyeti'nin «İspanyol himayesindeki "
                "bölgenin önemli bir kısmını kurtardığını» söylüyor. "
                "⇒ Kusur künyede değil `§2` noktasızlığında.")
    with io.open(YOL, "w", encoding="utf-8") as f:
        f.write(json.dumps(d, ensure_ascii=False, indent=1))
    print("_RIF_BULGUSU yazildi.")
    print("olcum 1: Rif icinde nokta YOK (2 nokta, ikisi de Ispanyol adacigi)")
    print("olcum 2: 6/6 -> ispanya")
    print("olcum 3: TDV `fas` — 22 Haziran 1921 Annoual · 19 Eylul 1921 ilan")
    print("hukum  : hipotez AYAKTA — kusur §2 noktasizliginda")
    return 0


if __name__ == "__main__":
    sys.exit(main())
