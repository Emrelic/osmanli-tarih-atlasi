# -*- coding: utf-8 -*-
"""ERİTRE–SUDAN — 1923 dayanağı bulundu, "bugün de aynı" ayağı BULUNAMADI

🔴 VE BU YÜZDEN `hukuki` YAZILMIYOR. Bölgemin 12 `hukuki` kenarının
hepsinde kaynak şu iki şeyi BİRDEN söylüyordu:
   ① sınırı tanımlayan belge ÇAPADAN ÖNCE, ve
   ② o belge BUGÜNKÜ sınırı tanımlıyor
IBS çalışmaları ②'yi kendi cümleleriyle söyler ("The PRESENT boundary
was established by ...", "delimited the PRESENT-DAY boundary").
1911 tarihli bir ansiklopedi ②'yi SÖYLEYEMEZ — 1911'de durur.
⇒ Kayıt `olculemedi` kalır ve EKSİK OLAN ŞEY ADIYLA yazılır.
"""
import io
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "denetim", "SINIR-HUKUKI-KAFRIKA-0907.json")

DAYANAK = (
    "1923'TE: Temmuz 1900 antlaşması ve Kasım 1901 anlaşması Eritre'nin "
    "sırasıyla Habeşistan ve Sudan tarafındaki sınırlarını tanımladı; "
    "ayrıntıları 15 Mayıs 1902'de Adis Ababa'da imzalanan "
    "Anglo-İtalyan-Habeş antlaşması değiştirdi. "
    "BUGÜN: ⚪ ÖLÇÜLMEDİ.")

ALINTI = (
    "«A treaty of July 1900 followed by an agreement of November 1901 "
    "defined the boundaries of Eritrea on the side of Abyssinia and the "
    "Sudan respectively.» || «In certain details the boundaries thus laid "
    "down were modified by an Anglo-Italian-Abyssinian treaty signed at "
    "Adis Ababa on the 15th of May 1902.»")

KAYNAK = (
    "Encyclopaedia Britannica, 11. baskı (1911), Cilt 1, Afrika maddesinin "
    "tarih bölümü — 🟢 AÇIP OKUDUM (nüsha: Wikisource, kamu malı metin). "
    "⚠️ CİNSİ: 1911 tarihli ÜÇÜNCÜL bir kaynak. Sınırı tanımlayan "
    "belgeleri günüyle veriyor, ama 1911'den SONRASI hakkında hiçbir şey "
    "söyleyemez — ve sorunun yarısı tam orada.")

NOT = (
    "⚪ `olculemedi` KALIYOR, ve sebebi kaynağın zayıflığı DEĞİL, "
    "KAPSAMI: sorunun iki ayağı var ve elimde biri var. "
    "① 1923'ün dayanağı — 🟢 BULUNDU (1900/1901/1902, hepsi çapadan önce) "
    "② bugünkü NE çizgisinin hâlâ o çizgi olduğu — ⚪ GÖSTERİLMEDİ. "
    "🔴 Ve bu ayrımı uydurmadım, kendi 12 `hukuki` kenarımdan çıkardım: "
    "onlarda kaynak ikisini BİRDEN söylüyor ve kendi cümlesiyle söylüyor "
    "('The PRESENT boundary was established by the Italo-British-Egyptian "
    "Agreement of 1934' · 'a Franco-Turkish convention delimited the "
    "PRESENT-DAY Libya-Tunisia boundary'). 1911 tarihli bir ansiklopedi "
    "bu cümleyi kuramaz. Aynı ölçütü burada gevşetseydim, 12 kenarın "
    "dayanağını da zayıflatmış olurdum. "
    "🔜 KAPANMASI İÇİN GEREKEN TEK ŞEY: bugünkü hattın 1901/1902 hattı "
    "olduğunu söyleyen bir kaynak. IBS serisinde bu sınır için çalışma "
    "YOK (1-200 tarandı); Brownlie *African Boundaries* denenecek.")


def main():
    d = json.load(io.open(YOL, encoding="utf-8"))
    n = 0
    for k in d["kenarlar"]:
        if (k["a"], k["b"]) == ("Eritrea", "Sudan"):
            k["hal"] = "olculemedi"
            k["nitelik_1923"] = "uluslararasi"
            k["dayanak"] = DAYANAK
            k["dayanak_t"] = "1901-11-01"
            k["kaynak"] = KAYNAK
            k["alinti"] = ALINTI
            k["not"] = NOT
            n += 1
    if not n:
        print("🔴 KENAR BULUNAMADI")
        return 2
    sayac = {}
    for k in d["kenarlar"]:
        sayac[k["hal"]] = sayac.get(k["hal"], 0) + 1
    d["kova"] = sayac
    with io.open(YOL, "w", encoding="utf-8") as f:
        f.write(json.dumps(d, ensure_ascii=False, indent=1))
    print("Eritre-Sudan guncellendi (hal DEGISMEDI: olculemedi).")
    print("kova: %s" % sayac)
    print("alintili kenar: %d/25" % sum(1 for k in d["kenarlar"] if k.get("alinti")))
    return 0


if __name__ == "__main__":
    sys.exit(main())
