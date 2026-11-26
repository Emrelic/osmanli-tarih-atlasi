# -*- coding: utf-8 -*-
"""BEŞ AÇIK KENAR — ikinci kaynak turu · SINIR-KAFRIKA-0907

🔴 AYRIM KORUNUYOR (§9):
   🟢 OKUDUM      kaynağın kendisini açtım, alıntı VERBATIM
   🟡 DEVRALDIM   yalnız bir arama ÖZETİ gördüm — kaynağı AÇMADIM
   ⚪ okumadim    hiç bakmadım

Bir arama motorunun özeti bir KAYNAK DEĞİLDİR; onu okunmuş saymak,
`§4`ün "kaynağı yazılmayan bilgi" kuralının en sinsi hâli olur — çünkü
alan DOLU görünür.
"""
import io
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "denetim", "SINIR-HUKUKI-KAFRIKA-0907.json")

SERI_TUKENDI = (
    "IBS serisi TÜKETİLDİ: 1-200 arası numara denendi, seride 175 çalışma "
    "VAR ve bu sınır için çalışma YOK. Bu artık bir tahmin değil ÖLÇÜM — "
    "ama yalnız O SERİ için. Başka kaynak arandı, sonucu aşağıda.")

GUNCEL = {
 ("Ethiopia", "Sudan"): dict(
   hal="hukuki", nitelik_1923="uluslararasi",
   dayanak="1902 (15 Mayıs) ve 1907 Anglo-Etiyopya delimitasyon "
           "antlaşmaları; sırasıyla 1903 (Binbaşı Charles Gwynn) ve "
           "1909'da demarke edildi",
   dayanak_t="1902-05-15",
   kaynak="Wondwosen Teshome, 'Colonial Boundaries of Africa: The Case of "
          "Ethiopia's Boundary with Sudan', Ege Academic Review, 2009 "
          "(hakemli, acik erisim) — 🟢 OKUDUM",
   alinti="The present-day boundary between Ethiopia and Sudan is "
          "principally the result of the 1902 and 1907 Anglo-Ethiopian "
          "delimitation treaties which were demarcated in 1903 and 1909 "
          "respectively.",
   not_=SERI_TUKENDI + " 🟢 Dayanak 1902/1907 ⇒ ÇAPADAN ÖNCE, ve bugünkü "
        "hattın esası hâlâ o. ⇒ NE'nin çizgisi 1923 için kullanılabilir. "
        "⚠️ ÇEKİNCE, gizlenmiyor: Gwynn 1903'te demarkasyonu TEK TARAFLI "
        "yaptı (Etiyopya temsilcisi yokken) ve Etiyopya bunu bugün de "
        "kabul etmiyor. Bu bir HUKUKÎ İHTİLÂF — ama hattın 1923'te de "
        "aynı hat olduğunu DEĞİŞTİRMİYOR, ve atlas tasarrufu boyar."),
}

EK_NOT = {
 ("Algeria", "Morocco"): (
   SERI_TUKENDI + " İKİNCİ TUR — 🟡 DEVRALDIM, KAYNAĞI AÇMADIM: "
   "arama özetleri iki şey söylüyor ve ikisi de birbirini destekliyor: "
   "① 1845 Lalla Maghnia Antlaşması sınırı Akdeniz'den yalnız ~165 km "
   "içeri delimite etti ve 4. maddesi çölün delimitasyonunu AÇIKÇA "
   "gereksiz saydı; ② bugünkü hat 15 Haziran 1972 Rabat Sözleşmesi'nden "
   "geliyor (ortak komisyon 27 Mayıs 1970). "
   "🔴 BUNLARI KAYNAKTAN OKUMADIM — yalnız arama özeti gördüm, ve bir "
   "özet bir kaynak değildir. Bu yüzden `olculemedi` BIRAKILDI. "
   "⚠️ Doğruysa sonuç ağır: NE'nin çizdiği 1.551 km'nin büyük kısmı "
   "1923'te DELİMİTE EDİLMEMİŞTİ ⇒ Mısır–Libya ile aynı sınıf. "
   "Bölgemin EN UZUN ikinci kenarı; bir sonraki turun ilk işi. "
   "🔴 VE BİR TUZAK KAYDA GEÇSİN: arama sonucu bu sözleşmeyi UNTS "
   "vol. 1035, I-15406 diye verdi; belgeyi indirip OKUDUM ve o belge "
   "MORİTANYA–FAS 14 Nisan 1976 sözleşmesi çıktı. Eşleşme bulmak, "
   "doğru şeyi bulmak değildir."),
 ("Eritrea", "Sudan"): (
   SERI_TUKENDI + " İKİNCİ TUR — 🟡 DEVRALDIM, KAYNAĞI AÇMADIM: "
   "1891 (24 Mart · 15 Nisan) ve 1894 (5 Mayıs) Anglo-İtalyan "
   "protokolleri; ilk delimitasyon 1898, Anglo-İtalyan demarkasyon "
   "komisyonu 1899; Kasım 1901 anlaşması Eritre'nin Sudan tarafındaki "
   "sınırını tanımlıyor; ayrıntılar 15 Mayıs 1902 Anglo-İtalyan-Habeş "
   "antlaşmasıyla değiştirilmiş. Hepsi ÇAPADAN ÖNCE ⇒ muhtemelen "
   "🟢 olacak. AMA KAYNAĞI AÇMADIM ⇒ `olculemedi` DURUYOR."),
 ("Algeria", "Tunisia"): (
   SERI_TUKENDI + " ⚠️ VE BU KENAR İKİ KEZ BLOKE: kaynak yok, VE Tunus'un "
   "atlas kimliği ölçülemiyor (36 nokta, k/kid ikisi de None). Kaynak "
   "bulunsa bile dördüncü kova sınavı koşamaz."),
 ("Morocco", "Spain"): (
   SERI_TUKENDI + " ⚠️ Ceuta ve Melilla. 1923 kimliği ayrıca karışık: "
   "atlasta `rif-cumhuriyeti` künyesi VAR (1921-09-18 → 1923-10-29) ve "
   "tam bu çevrede; ayrıca `KIMLIK-1923-0907` Şefşâven'in ufku aşan "
   "`t:9999-01-01` kaydını bildirdi (M-3205 ④) — o da bu bölgede. "
   "⚪ Hiçbirini ölçmedim. `okumadim`."),
}


def main():
    d = json.load(io.open(YOL, encoding="utf-8"))
    n_g = n_n = 0
    for k in d["kenarlar"]:
        p = (k["a"], k["b"])
        if p in GUNCEL:
            g = GUNCEL[p]
            k["hal"] = g["hal"]
            k["nitelik_1923"] = g["nitelik_1923"]
            k["dayanak"] = g["dayanak"]
            k["dayanak_t"] = g["dayanak_t"]
            k["kaynak"] = g["kaynak"]
            k["alinti"] = g["alinti"]
            k["not"] = g["not_"]
            n_g += 1
        if p in EK_NOT:
            k["not"] = EK_NOT[p]
            n_n += 1
    sayac = {}
    for k in d["kenarlar"]:
        sayac[k["hal"]] = sayac.get(k["hal"], 0) + 1
    d["kova"] = sayac
    d["_IBS_TUKENDI"] = SERI_TUKENDI
    with io.open(YOL, "w", encoding="utf-8") as f:
        f.write(json.dumps(d, ensure_ascii=False, indent=1))
    print("hal degisen: %d   not eklenen: %d" % (n_g, n_n))
    print("kova: %s" % sayac)
    okundu = sum(1 for k in d["kenarlar"]
                 if k.get("kaynak") and "OKUDUM" in str(k.get("kaynak")))
    print("kaynagini ACIP OKUDUGUM kenar: %d" % (
        sum(1 for k in d["kenarlar"] if k.get("alinti"))))


if __name__ == "__main__":
    main()
