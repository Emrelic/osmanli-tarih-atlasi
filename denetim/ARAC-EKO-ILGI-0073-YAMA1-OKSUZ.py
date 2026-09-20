# -*- coding: utf-8 -*-
"""EKO-ILGI-0073 — OKSUZ BAG YAMASI.

Sinif (c): ayirt edici maddenin BASLIGINDA gecmiyor -> kart o maddede HIC cikmiyor
Sinif (b): kronoloji gunu keskinlestirilmis, bag bayatlamis

Kasitli sigorta ciftleri (rusiran 1722-08-23 + 1722-09-03, deniz 1798-09-03 +
1798-09-09, antlasma3 1912-10-15 + 1912-10-18) DOKUNULMADI — kayitlarin kendi
ic_not'lari bunlarin bilerek iki gune baglandigini yaziyor.
Maddesi HIC OLMAYAN baglar da dokunulmadi (yeni kronoloji maddesi ister,
bu oturumun dosyasi degil) — raporda listelendi.
"""
import io, sys, os

os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

YAMA = [
 # (dosya, eski, yeni, gerekce)
 ("data/ekokuma_ihtilal.js",
  'olay:["1789-07-14|Paris","1798-07-01|Kahire"],',
  'olay:["1789-07-14|Bastille","1798-07-01|Mısır"],',
  "madde basliklari 'Bastille\\'in dusumu' ve 'Napolyon\\'un Misir\\'i isgali' — Paris/Kahire baslikta YOK"),
 ("data/ekokuma_ihtilal.js",
  'olay:["1798-07-21|Kahire","1801-09-02|İskenderiye","1805-07-03|Kahire"],',
  'olay:["1798-07-21|Kahire","1801-08-31|İskenderiye","1805-07-03|fermanı"],',
  "1801-09-02 gunu atlasta YOK (Iskenderiye kapitulasyonu 1801-08-31 kayitli); 1805-07-03 baslikta Kahire gecmiyor"),
 ("data/ekokuma_ihtilal.js",
  'olay:["1804-02-14|Belgrad","1821-03-25|Mora ve Eflak"],',
  'olay:["1804-02-14|Sırp","1821-03-25|İsyan"],',
  "basliklar 'Birinci Sirp Isyani' ve 'Yunan/Mora Isyani basladi' — Belgrad ve 'Mora ve Eflak' baslikta YOK"),
 ("data/ekokuma_ihtilal.js",
  'olay:["1804-08-11|Viyana","1805-12-02","1806-08-06|Viyana"],',
  'olay:["1804-08-11|Avusturya İmparatorluğu","1805-12-02","1806-08-06|Kutsal Roma"],',
  "basliklar 'Avusturya Imparatorlugu\\'nun ilani' ve 'Kutsal Roma Imparatorlugu\\'nun sonu' — Viyana baslikta YOK"),
 ("data/ekokuma_ihtilal.js",
  'olay:["1797-07-09|Milano","1797-10-17"],',
  'olay:["1797-07-09|Cisalpine","1797-10-17"],',
  "baslik 'Cisalpine Cumhuriyeti\\'nin ilani' — Milano baslikta YOK"),
 ("data/ekokuma_ihtilal.js",
  'olay:["1797-04-20|Venedik","1797-05-12|Venedik","1797-10-17"],',
  'olay:["1797-04-20|Lido","1797-05-12|Venedik","1797-10-17"],',
  "baslik 'Lido olayi — Fransiz gemisine ates acilmasi' — Venedik baslikta YOK"),
 ("data/ekokuma_ihtilal.js",
  'olay:["1798-07-01|İskenderiye","1798-08-01|Nil Savaşı","1798-08-01|Ebukır"],',
  'olay:["1798-07-01|Mısır","1798-08-01|Nil Savaşı","1798-08-01|Ebukır"],',
  "baslik 'Napolyon\\'un Misir\\'i isgali' — Iskenderiye baslikta YOK"),
 ("data/ekokuma_kurum2.js",
  'olay:["1775-04-29|Mühendishâne-i Bahrî-i Hümâyun (Fransız arşiv tarihi)","1795-01-01|Mühendishâne-i Berrî-i Hümâyun ayrıldı"],',
  'olay:["1775-04-29|Mühendishâne","1795-01-01|Mühendishâne-i Berrî-i Hümâyun ayrıldı"],',
  "parantezli ek ayirt ediciyi bozuyordu; baslik 'Muhendishane-i Bahri-i Humayun\\'un acilisi'. Ikinci bag 1795-01-01 icin madde YOK — dokunulmadi, raporda"),
 ("data/ekokuma_kurum2.js",
  'olay:["1775-06-01|Esham sisteminin ihdası","1856-01-01|Islahat Fermanı (cizyenin kaldırılışı)"],',
  'olay:["1775-06-01|Esham sisteminin ihdası","1856-02-18|Islahat Fermanı"],',
  "Islahat Fermani atlasta 1856-02-18 (olaylar.js) — 1856-01-01 diye bir madde yok"),
 ("data/ekokuma_kurum2.js",
  'olay:["1791-08-11|Şumnu kararı","1807-05-25|Kabakçı İsyanı başladı"],',
  'olay:["1791-08-11|Kalas","1807-05-25|Kabakçı"],',
  "basliklar 'Kalas (Galac) Mutarekesi' ve 'Kabakci Mustafa isyani basladi'"),
 ("data/ekokuma_kurum.js",
  'olay:["1453-05-29|Çandarlı Halil","1425-01-01|Molla Fenârî"],',
  'olay:["1453-06-01|Çandarlı Halil","1425-01-01|Molla Fenârî"],',
  "Candarli Halil Pasa'nin azli ve idami maddesi 1453-06-01 (olaylar_ek2) — 29 Mayis basliklarinda adi gecmiyor"),
 ("data/ekokuma_alemdar.js",
  'olay:["1810-07-01|Sohum","1810-09-26|Rusçuk"],',
  'olay:["1810-07-11|Sohum","1810-09-26|Rusçuk"],',
  "kaydin kendi ic_not'u bunu ongormustu: madde gunu 1810-07-11'e keskinlestirildi, bag bayatladi"),
 ("data/ekokuma_avusturya.js",
  'olay:["1737-07-13|Özi (Ochakov)","1735-06-19|Baghavard","1736-09-01|Güney Kafkasya","1738-08-01|Özi\'nin geri alınışı","1739-09-18|Semendire ve kuzey Sırbistan","1739-10-03|Niş Antlaşması"],',
  'olay:["1737-07-11|Özi","1735-06-19|Baghavard","1736-09-01|Güney Kafkasya","1738-08-01|Özi\'nin geri alınışı","1739-09-18|Semendire ve kuzey Sırbistan","1739-10-03|Niş Antlaşması"],',
  "madde 1737-07-11 'Ozi (Ochakov) Kalesi'nin Ruslara dususu'; parantezli ayirt edici de tutmuyordu"),
 ("data/ekokuma_savas.js",
  '    "1596-10",',
  '    "1596-10-26|Haçova",',
  "1596-10 diye bir madde yok; Hacova Meydan Muharebesi 1596-10-26"),
 ("data/ekokuma_statu.js",
  'olay:["1519-09-01","1534-09-22","1551-08-15","1574-08-25","1671-01-01","1711-03-01","1830-07-05"],',
  'olay:["1519-09-01","1534-09-22","1551-08-15","1574-08-25","1671-01-01","1711-07-29|Karamanlı","1830-07-05"],',
  "1711-03-01 diye madde yok; Trablusgarp'ta Karamanli hanedaninin kurulusu 1711-07-29"),
 ("data/ekokuma_vezir.js",
  'olay:["1607-10-23"],',
  'olay:["1607-10-24|Canbolatoğlu"],',
  "1607-10-23 diye madde yok; Kuyucu Murad Pasa'nin Oruc Ovasi zaferi 1607-10-24"),
]

hata = 0
for dosya, eski, yeni, gerekce in YAMA:
    with io.open(dosya, encoding="utf-8") as f:
        s = f.read()
    n = s.count(eski)
    if n != 1:
        print("HATA  %-32s  %d kez bulundu (1 bekleniyordu)" % (dosya, n))
        print("      eski: %s" % eski[:110])
        hata += 1
        continue
    s = s.replace(eski, yeni, 1)
    with io.open(dosya, "w", encoding="utf-8", newline="") as f:
        f.write(s)
    print("OK    %-32s  %s" % (dosya, gerekce[:90]))

print("\n%d yama, %d hata" % (len(YAMA), hata))
sys.exit(1 if hata else 0)
