# -*- coding: utf-8 -*-
"""ARAC-SINIR-GAFRIKA-1923-0907 — 1923-10-29 EGEMEN tablosu + kenar siniflamasi.

SORAR   "1923-10-29'da bu kenarin IKI YANINDA hangi siyasi yapi vardi,
         ve o gun bu cizgi ULUSLARARASI bir sinir MIYDI?"
SORMAZ  "bugunku cizgi 1923'unkiyle ayni mi"  — o AYRI bir soru ve ancak
        bu sorunun cevabi "EVET, uluslararasiydi" olan kenarlarda ANLAMLI.

📌 NICIN ONCE BU: sevkteki beklenti `uti possidetis` uzerine kuruluydu
   ("cizgi degismedi ⇒ 🟢 kovasi buyuk cikar"). Ama bir cizginin
   DEGISMEMESI, o cizginin 1923'te bir SINIR OLDUGU anlamina gelmez.
   Ayni egemenin iki idari birimi arasindaki cizgi, kademe C'nin
   ("modern uluslararasi ANTLASMALARLA cizilmis HUKUKI sinir") konusu
   DEGILDIR.

DAMGA (ORTAK §9): her kayit kendi `damga` alanini tasir.
  🟢 OLCTUM   = TDV govdesinden CUMLEYLE alindi (kaynak + alinti yazili)
  🟡 DEVRALDIM= genel tarih bilgisi, KAYNAGA SORULMADI
"""
import io
import json
import os
import sys
from collections import Counter

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KENAR = os.path.join(KOK, "denetim", "_gafrika_kenarlar.json")
CIKTI = os.path.join(KOK, "denetim", "SINIR-HUKUKI-GAFRIKA-0907.json")

# ---------------------------------------------------------------------------
# 1923-10-29 EGEMEN TABLOSU
#   yapi   : o gun o toprakta duran SIYASI YAPI (kimlik_1923 adayi)
#   idare  : AYNI idari catiya bagli olanlar AYNI etiketi tasir
#            (AOF · AEF · BELCIKA-KONGO · UNION-SA …) — "ic idari cizgi"
#            sinavi BU alan uzerinden yapilir
#   statu  : koloni | himaye | manda | kondominyum | bagimsiz | dominyon
# ---------------------------------------------------------------------------
T = {
 # ---- FRANSIZ BATI AFRIKASI (AOF) --------------------------------------
 "Senegal":      ("Fransız Batı Afrikası — Senegal", "AOF", "koloni", "🟢",
                  "TDV senegal: «…Fransız Batı Afrikası adıyla bir federasyon oluşturdular (1895)»"),
 "Mali":         ("Fransız Batı Afrikası — Fransız Sudanı", "AOF", "koloni", "🟢",
                  "TDV mali: «16 Haziran 1895'te Fransız Batı Afrikası (AOF) adıyla kurulan federasyonun önemli bir kısmını oluşturdu»"),
 "Niger":        ("Fransız Batı Afrikası — Nijer", "AOF", "koloni", "🟢",
                  "TDV nijer: «…Senegal'den Çad'a kadar uzanan bölgeyi Fransız Batı Afrikası sınırları içinde kabul edip»"),
 "Burkina Faso": ("Fransız Batı Afrikası — Yukarı Volta", "AOF", "koloni", "🟢",
                  "TDV burkina-faso: «1919'da Haute-Senegal-Nijer birliğinden ayrılan ülke Haute-Volta adıyla ayrı bir sömürge haline getirildi»"),
 "Guinea":       ("Fransız Batı Afrikası — Fransız Ginesi", "AOF", "koloni", "🟢",
                  "TDV gine: «…Fransız Ginesi adıyla bir sömürge idaresi kurdular ve bu idareyi 1895'te Fransız Batı Afrikası ile birleştirdiler»"),
 "Côte d'Ivoire":("Fransız Batı Afrikası — Fildişi Sahili", "AOF", "koloni", "🟢",
                  "TDV fildisi-sahili: «1893'te oluşturulan Fildişi Sahili sömürgesi 1900'de Fransız Batı Afrikası'na bağlandı»"),
 "Benin":        ("Fransız Batı Afrikası — Dahomey", "AOF", "koloni", "🟢",
                  "TDV benin: «1904 yılında Fransız Batı Afrikası'na katılan Dahomey»"),
 "Mauritania":   ("Fransız Batı Afrikası — Moritanya", "AOF", "koloni", "🟡",
                  "TDV moritanya govdesi (16.385 kar.) AOF ifadesini HIC GECIRMIYOR — genel tarih bilgisi, DOGRULANMADI"),
 # ---- FRANSIZ EKVATORAL AFRIKASI (AEF) ---------------------------------
 "Chad":         ("Fransız Ekvatoral Afrikası — Çad", "AEF", "koloni", "🟢",
                  "TDV cad: «1920 yılında ise bölge Fransız Ekvatoral Afrikası içinde Çad sömürgesi durumuna getirildi»"),
 "Central African Rep.": ("Fransız Ekvatoral Afrikası — Ubangi-Şari", "AEF", "koloni", "🟡",
                  "TDV orta-afrika-cumhuriyeti: «…Fransız sömürgesi olan ülke (Ubangi-Shari)» — FRANSIZ oldugu OLCULDU, AEF catisi DOGRULANMADI"),
 "Congo":        ("Fransız Ekvatoral Afrikası — Orta Kongo", "AEF", "koloni", "🟡",
                  "TDV `kongo` slug'i OLU (302). Genel tarih bilgisi, DOGRULANMADI"),
 "Gabon":        ("Fransız Ekvatoral Afrikası — Gabon", "AEF", "koloni", "🟡",
                  "TDV gabon govdesi (16.388 kar.) AEF/Ekvatoral ifadesini HIC GECIRMIYOR — DOGRULANMADI"),
 # ---- FRANSIZ MANDA ve ayri sömürgeler ---------------------------------
 "Cameroon":     ("Fransız Kamerun mandası", "FR-MANDA-KAMERUN", "manda", "🟢",
                  "TDV kamerun: «Milletler Cemiyeti … 20 Temmuz 1922'de aldığı bir kararla işgal ettikleri yerleri Fransa ve İngiltere'nin manda yönetimlerine bıraktı»"),
 "Togo":         ("Fransız Togo mandası", "FR-MANDA-TOGO", "manda", "🟡",
                  "genel tarih bilgisi, DOGRULANMADI"),
 "Djibouti":     ("Fransız Somalisi", "FR-SOMALI", "koloni", "🟡",
                  "genel tarih bilgisi, DOGRULANMADI"),
 "Madagascar":   ("Fransız Madagaskar'ı", "FR-MADAGASKAR", "koloni", "🟡", "DOGRULANMADI"),
 "Comoros":      ("Fransız Komor'u", "FR-MADAGASKAR", "koloni", "🟡", "DOGRULANMADI"),
 # ---- INGILIZ ----------------------------------------------------------
 "Nigeria":      ("Nijerya Kolonisi ve Protektorası (+ İngiliz Kamerunu mandası)",
                  "GB-NIJERYA", "koloni", "🟡", "DOGRULANMADI"),
 "Ghana":        ("Altın Sahili Kolonisi (+ İngiliz Togolandı mandası)",
                  "GB-ALTINSAHILI", "koloni", "🟡", "DOGRULANMADI"),
 "Gambia":       ("Gambiya Kolonisi ve Protektorası", "GB-GAMBIYA", "koloni", "🟡",
                  "TDV `gambiya` slug'i OLU (302). DOGRULANMADI"),
 "Sierra Leone": ("Sierra Leone Kolonisi ve Protektorası", "GB-SIERRALEONE", "koloni", "🟡", "DOGRULANMADI"),
 "Kenya":        ("Kenya Kolonisi ve Protektorası", "GB-KENYA", "koloni", "🟡",
                  "TDV kenya: «1895'te İngiltere bölgedeki hâkimiyetini ilân etti» — INGILIZ oldugu tutarli, 1923 STATUSU DOGRULANMADI"),
 "Uganda":       ("Uganda Protektorası", "GB-UGANDA", "himaye", "🟡", "DOGRULANMADI"),
 "Tanzania":     ("Tanganyika (İngiliz mandası) + Zengibar (İngiliz himayesi)",
                  "GB-MANDA-TANGANYIKA", "manda", "🟡", "DOGRULANMADI"),
 "Malawi":       ("Nyasaland Protektorası", "GB-NYASALAND", "himaye", "🟡", "DOGRULANMADI"),
 "Zambia":       ("Kuzey Rodezya", "GB-KRODEZYA", "himaye", "🟡",
                  "⚠️ 1923-10-29'da hala British South Africa Company idaresinde oldugu, Kolonyal Ofis'e 1 Nisan 1924'te gectigi bilgisi DOGRULANMADI"),
 "Zimbabwe":     ("Güney Rodezya (özerk koloni)", "GB-GRODEZYA", "koloni", "🟡",
                  "⚠️ ozerk koloni statusune 1 Ekim 1923'te gectigi — capamizdan 28 GUN once — DOGRULANMADI"),
 "Botswana":     ("Beçuanaland Protektorası", "GB-BECUANA", "himaye", "🟡", "DOGRULANMADI"),
 "Lesotho":      ("Basutoland", "GB-BASUTO", "koloni", "🟡", "DOGRULANMADI"),
 "eSwatini":     ("Svaziland Protektorası", "GB-SVAZI", "himaye", "🟡", "DOGRULANMADI"),
 "Somaliland":   ("İngiliz Somalisi Protektorası", "GB-SOMALI", "himaye", "🟡",
                  "TDV `somaliland` slug'i OLU (302). DOGRULANMADI"),
 "Sudan":        ("Anglo-Mısır Sudanı (kondominyum)", "AMS", "kondominyum", "🟡", "DOGRULANMADI"),
 "S. Sudan":     ("Anglo-Mısır Sudanı (güney vilâyetleri)", "AMS", "kondominyum", "🟡",
                  "⚠️ 1923'te AYRI BIR YAPI DEGIL — Sudan'in ic bolgesi. DOGRULANMADI"),
 # ---- BELCIKA ----------------------------------------------------------
 "Dem. Rep. Congo": ("Belçika Kongosu", "BE-KONGO", "koloni", "🟡", "DOGRULANMADI"),
 "Rwanda":       ("Ruanda-Urundi (Belçika mandası)", "BE-MANDA-RU", "manda", "🟡", "DOGRULANMADI"),
 "Burundi":      ("Ruanda-Urundi (Belçika mandası)", "BE-MANDA-RU", "manda", "🟡",
                  "TDV `burundi` slug'i OLU (302). DOGRULANMADI"),
 # ---- PORTEKIZ ---------------------------------------------------------
 "Angola":       ("Portekiz Angola'sı", "PT-ANGOLA", "koloni", "🟡",
                  "TDV `angola` slug'i OLU (302). DOGRULANMADI"),
 "Mozambique":   ("Portekiz Doğu Afrikası", "PT-MOZAMBIK", "koloni", "🟡", "DOGRULANMADI"),
 "Guinea-Bissau":("Portekiz Ginesi", "PT-GINE", "koloni", "🟡", "DOGRULANMADI"),
 "Cabo Verde":   ("Portekiz Yeşilburun'u", "PT-CABO", "koloni", "🟡", "DOGRULANMADI"),
 "São Tomé and Principe": ("Portekiz São Tomé'si", "PT-STP", "koloni", "🟡", "DOGRULANMADI"),
 # ---- ITALYA / ISPANYA -------------------------------------------------
 "Somalia":      ("İtalyan Somalisi", "IT-SOMALI", "koloni", "🟡", "DOGRULANMADI"),
 "Eritrea":      ("İtalyan Eritresi", "IT-ERITRE", "koloni", "🟡", "DOGRULANMADI"),
 "Eq. Guinea":   ("İspanyol Ginesi (Rio Muni)", "ES-GINE", "koloni", "🟡", "DOGRULANMADI"),
 # ---- BAGIMSIZ / DOMINYON ---------------------------------------------
 "Ethiopia":     ("Habeş İmparatorluğu", "BAGIMSIZ-HABES", "bagimsiz", "🟡",
                  "TDV `habesistan` CANLI — govde okundu ama 1923 statusu icin CUMLE CIKARILMADI"),
 "Liberia":      ("Liberya Cumhuriyeti", "BAGIMSIZ-LIBERYA", "bagimsiz", "🟡", "DOGRULANMADI"),
 "South Africa": ("Güney Afrika Birliği (dominyon)", "UNION-SA", "dominyon", "🟡", "DOGRULANMADI"),
 "Namibia":      ("Güney Batı Afrika (G. Afrika Birliği mandası)", "SA-MANDA-GBA", "manda", "🟡",
                  "TDV `namibya` slug'i OLU (302). DOGRULANMADI"),
}
# 🔴 EGEMEN GRUBU — "ayni egemen" sinavi bunun uzerinden yapilir.
EGEMEN = {
 "AOF": "FR", "AEF": "FR", "FR-MANDA-KAMERUN": "FR", "FR-MANDA-TOGO": "FR",
 "FR-SOMALI": "FR", "FR-MADAGASKAR": "FR",
 "GB-NIJERYA": "GB", "GB-ALTINSAHILI": "GB", "GB-GAMBIYA": "GB",
 "GB-SIERRALEONE": "GB", "GB-KENYA": "GB", "GB-UGANDA": "GB",
 "GB-MANDA-TANGANYIKA": "GB", "GB-NYASALAND": "GB", "GB-KRODEZYA": "GB",
 "GB-GRODEZYA": "GB", "GB-BECUANA": "GB", "GB-BASUTO": "GB", "GB-SVAZI": "GB",
 "GB-SOMALI": "GB", "AMS": "GB-EG",
 "BE-KONGO": "BE", "BE-MANDA-RU": "BE",
 "PT-ANGOLA": "PT", "PT-MOZAMBIK": "PT", "PT-GINE": "PT", "PT-CABO": "PT",
 "PT-STP": "PT", "IT-SOMALI": "IT", "IT-ERITRE": "IT", "ES-GINE": "ES",
 "BAGIMSIZ-HABES": "HABES", "BAGIMSIZ-LIBERYA": "LIBERYA",
 "UNION-SA": "SA", "SA-MANDA-GBA": "SA",
}


def main():
    with io.open(KENAR, encoding="utf-8") as f:
        ham = json.load(f)
    kenarlar = ham["bende"]

    kayitlar, sayac = [], Counter()
    eksik = set()
    for k in kenarlar:
        a, b = k["a"], k["b"]
        ta, tb = T.get(a), T.get(b)
        if not ta or not tb:
            eksik.add(a if not ta else b)
            sinif, hal = "olculemedi", "olculemedi"
            k1923_a = k1923_b = None
            gerekce = "1923 egemeni TABLODA YOK — olculemedi"
        else:
            k1923_a, k1923_b = ta[0], tb[0]
            ega, egb = EGEMEN[ta[1]], EGEMEN[tb[1]]
            if ta[1] == tb[1]:
                sinif = "ic_idari_cizgi"
                gerekce = ("1923-10-29'da iki yan da AYNI idari çatıda: %s"
                           " ⇒ o gün ULUSLARARASI SINIR DEĞİLDİ" % ta[1])
                hal = "bulunamadi"
            elif ega == egb:
                sinif = "ayni_egemen_farkli_yapi"
                gerekce = ("1923-10-29'da iki yan da %s egemenliğinde ama AYRI"
                           " hukukî yapı (%s ↔ %s) ⇒ çizgi bir İDARÎ/MANDA"
                           " sınırıydı, iki devlet arasında değil" % (ega, ta[1], tb[1]))
                hal = "bulunamadi"
            else:
                sinif = "uluslararasi"
                gerekce = ("1923-10-29'da iki yan AYRI egemenlikte (%s ↔ %s)"
                           " ⇒ çizgi gerçekten bir DEVLETLERARASI sınırdı;"
                           " antlaşma metni ARANABİLİR" % (ega, egb))
                hal = "olculemedi"       # metin HENUZ aranmadi — "bulunamadi" YAZMAM
        sayac[sinif] += 1
        kayitlar.append({
            "a": a, "b": b,
            "f": "1923-10-29", "t": "1923-10-29",
            "t_cinsi": "pencere",
            "hal": hal,
            "sinif_1923": sinif,
            "dayanak": gerekce,
            "dayanak_t": "",
            "kaynak": "; ".join(x for x in ((ta[4] if ta else ""), (tb[4] if tb else "")) if x)[:600],
            "damga_1923": "%s/%s" % ((ta[3] if ta else "⚪"), (tb[3] if tb else "⚪")),
            "kimlik_bugun": [a, b],
            "kimlik_1923": [k1923_a, k1923_b],
            "hat_sayisi": k["hat_sayisi"], "tepe": k["tepe"],
            "uzunluk_derece": k["uzunluk_derece"],
            "gc": k["gc"],
        })

    print("=== 89 KENARIN 1923 SINIFLAMASI ===")
    for s, n in sayac.most_common():
        print("   %-28s %3d  (%%%.0f)" % (s, n, 100.0 * n / len(kenarlar)))
    if eksik:
        print("\n🔴 TABLODA OLMAYAN girdiler: %s" % ", ".join(sorted(eksik)))

    print("\n=== ULUSLARARASI cikanlar (antlasma metni ARANABILIR) ===")
    for r in sorted([r for r in kayitlar if r["sinif_1923"] == "uluslararasi"],
                    key=lambda x: (x["a"], x["b"])):
        print("   %-22s ↔ %-22s" % (r["a"], r["b"]))

    print("\n=== ayni egemen / farkli yapi ===")
    for r in sorted([r for r in kayitlar if r["sinif_1923"] == "ayni_egemen_farkli_yapi"],
                    key=lambda x: (x["a"], x["b"])):
        print("   %-22s ↔ %-22s" % (r["a"], r["b"]))

    dam = Counter(r["damga_1923"] for r in kayitlar)
    print("\n=== 1923 EGEMEN DAMGASI (kaynakli mi) ===")
    for d, n in dam.most_common():
        print("   %-8s %3d" % (d, n))

    with io.open(CIKTI, "w", encoding="utf-8") as f:
        json.dump({
            "_NOT": ("SINIR-HUKUKI-GAFRIKA-0907 — TUR 1. Bu dosya kenarlarin "
                     "1923-10-29 SINIFLAMASINI tasir; antlasma metni aramasi "
                     "HENUZ YAPILMADI. `hal:olculemedi` = 'metin aranmadi', "
                     "`hal:bulunamadi` = 'o gun uluslararasi sinir DEGILDI'."),
            "_KAPSAM": "Sahra alti Afrika · iki ucu da bolgede olan 89 kenar",
            "_PAYDA": len(kenarlar),
            "_SAYAC": dict(sayac),
            "kayitlar": kayitlar}, f, ensure_ascii=False)
    print("\nyazildi: %s (%.2f MB)" % (CIKTI, os.path.getsize(CIKTI) / 1e6))
    return 0


if __name__ == "__main__":
    sys.exit(main())
