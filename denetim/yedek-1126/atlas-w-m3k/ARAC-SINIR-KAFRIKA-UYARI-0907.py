# -*- coding: utf-8 -*-
"""Kayıtlara ÇEKİNCE notu ekler — SINIR-KAFRIKA-0907

Dördüncü kovanın mekanik sınavı bölgemde üç yerde ya YANLIŞ cevap veriyor
ya da hiç koşamıyor. Sınav kusurlu değil; GİRDİSİ kusurlu ya da eksik.
Her biri kaydın kendi içine yazılır — bir sonraki oturum `grep` değil
`if` ile sorabilsin.
"""
import io
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "denetim", "SINIR-HUKUKI-KAFRIKA-0907.json")

U_SUDAN = (
    "🔴 MEKANİK SINAV BURADA YANLIŞ CEVAP VERİYOR VE SEBEBİ VERİDE. "
    "Sınav FARKLI diyor (ingiliz-sudani ↔ ingiltere) ⇒ gerçek bir C kenarı "
    "sayardı. Tarihen İKİ YAKA DA Anglo-Mısır Kondominyumu — aynı varlık. "
    "Sebep: atlas Sudan toprağını İKİ kimlikle boyuyor (ingiltere 61 · "
    "ingiliz-sudani 11; enlem aralıkları 9,95-20,83 ve 10,63-20,80, yani "
    "İÇ İÇE — ayrım coğrafî değil). ⇒ Sınav doğru, GİRDİ bozuk. "
    "hal 'bulunamadi' BIRAKILDI: bu kenar 1923'te YOKTU (Güney Sudan "
    "2011-07-09). 'ayni-kimlik' de YAZILAMADI, çünkü veri onu söylemiyor.")

U_BIRTAWIL = (
    "⚠️ İki uç da 'misir-kralligi' GÖRÜNÜYOR ama Bir Tawil ucu EMILME "
    "kovasında ve yetkili tablonun kendi notu şu: 'EMILME bir TAHMİN'. "
    "Tahmine dayanıp 'ayni-kimlik' YAZILMADI — sınav iki uçta da DOGRUDAN "
    "şartıyla koşuldu. Tahmin bir ölçümün yerine geçmez.")

U_BSAHRA = (
    "⚠️ Batı Sahra BOYANMIYOR kovasında — atlas noktası 0, en yakın nokta "
    "200 km'den uzak (motorun kendi TAVAN_KM sabiti). Mekanik sınav bu "
    "kenarda KOŞULAMAZ. 'nitelik_1923' için yazdığım değerlendirme KAYNAĞA "
    "dayanır, VERİYE değil — ve ikisi ayrı şeydir.")

U_TUNUS = (
    "🔴 DÖRDÜNCÜ KOVANIN GEREKÇE ÖRNEĞİ TAM BU KENARDI (M-3183: «Cezayir–"
    "Tunus 1923'te iki Fransız toprağı arasındaki idarî hattı») VE SINAV "
    "BURADA KOŞULAMIYOR: Tunus'un 36 noktası 'v:' ve 'k'/'kid' ikisi de "
    "None ⇒ kimlik makine tarafından sorulamıyor. ⇒ Kovanın bu bölgedeki "
    "kapsamı 'kid' işine BAĞLI. Bu bir itiraz değil, ölçülmüş bir bağımlılık.")

NOT = {
    ("South Sudan", "Sudan"): U_SUDAN,
    ("Bir Tawil", "Egypt"): U_BIRTAWIL,
    ("Bir Tawil", "Sudan"): U_BIRTAWIL,
    ("Morocco", "Western Sahara"): U_BSAHRA,
    ("Mauritania", "Western Sahara"): U_BSAHRA,
    ("Algeria", "Western Sahara"): U_BSAHRA,
    ("Algeria", "Tunisia"): U_TUNUS,
}


def main():
    d = json.load(io.open(YOL, encoding="utf-8"))
    n = 0
    for k in d["kenarlar"]:
        u = NOT.get((k["a"], k["b"]))
        if u:
            k["_UYARI"] = u
            n += 1
    d["_UYARI_OZET"] = (
        "Dördüncü kovanın mekanik sınavı 25 kenarın 18'inde koştu. "
        "Koşamayan 7: Batı Sahra'ya bakan 3 (atlas noktası 0) · Bir Tawil'e "
        "bakan 2 (kimlik bir TAHMİN) · Tunus'a bakan 2 (kid yok). "
        "Ve koşanlardan 1'i (South Sudan–Sudan) YANLIŞ cevap verdi, çünkü "
        "atlas aynı toprağı iki kimlikle boyuyor.")
    with io.open(YOL, "w", encoding="utf-8") as f:
        f.write(json.dumps(d, ensure_ascii=False, indent=1))
    print("uyari eklenen kayit: %d" % n)
    print("kova: %s" % d["kova"])
    print("boyut: %.1f KB" % (os.path.getsize(YOL) / 1024.0))


if __name__ == "__main__":
    main()
