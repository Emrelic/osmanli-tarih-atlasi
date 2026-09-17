// -*- coding: utf-8 -*-
// YERLESIMLER_NOKTA_SIBIRYA_0917 — NOKTA-SIBIRYA (D1-TURKIYE oturumu), 17 Eylül 2026
// Görev: oturumlar/KOSU13-OTOBUS.md "EK KADRO" — denetim/NOKTASIZLIK-ADAY-0917.json
//   NOKTASIZ-ADAY kümelerinden Sibirya-Orta Asya (merkez_lat ≥ 43, merkez_lon > 50): 68 küme.
// Kural: o dönemde devlet yoksa boşluk doğrudur; varsa KAYNAKLI nokta.
// Şema data/yerlesimler.js ile aynı. girdi.py kaydı 1.MURAT'ındır — bu dosya BAĞLI DEĞİL.
//
// YÖNTEM
//   1. Her kümenin merkezine max(120 km, 1,2 × eşdeğer yarıçap) içindeki GeoNames yerleşimleri
//      (allCountries, P sınıfı, RU/KZ/MN/CN/JP) → 12.114 aday.
//   2. Küme başına en yakın 30 aday + idarî merkezler + tarihî ad listesi, Rusça adıyla
//      ЭСБЕ / МЭСБЕ (ru.wikisource) maddelerinde arandı.
//   3. YALNIZ maddesi KURULUŞ YILINI veren yerleşim yazıldı. Gün yok ⇒ YYYY-01-01 (§4).
//   4. Atlasın 82 girdi dosyasındaki (3859 nokta) en yakın noktaya mesafe > 3 km (D002).
//   Kuruluştan ÖNCESİ yazılmadı: kur: öncesinde yerleşim yoktur (VERI-YAPISI).
//   Rus dönemleri atlas geleneğiyle bölündü: rusya → rusya-gecici-hukumet (1917-03-15) →
//   sovyet-rusya (1917-11-07) → 1923-10-29. Üç kimliğin de renkler.py'de boyası VAR.
//
// KOORDİNAT: GeoNames kimliği her kayıtta. Atlas noktası koordinat kaynağı olarak KULLANILMADI.
window.YERLESIMLER_NOKTA_SIBIRYA_0917 = [
{ ad:"Akşa (Akşinsk kalesi)", tur:"kale", lat:50.28105, lon:113.287, g:0, k:0, kur:"1765-01-01",
  s:[{f:"1765-01-01", t:"1917-03-15", d:"rusya"},
     {f:"1917-03-15", t:"1917-11-07", d:"rusya-gecici-hukumet"},
     {f:"1917-11-07", t:"1923-10-29", d:"sovyet-rusya"}],
  kaynak:"ЭСБЕ «Акша» (ru.wikisource): \"Пограничная крепость А. была основана в 1765 г.\" · \"при впадении реки Акши в Онон\" · GeoNames 2028028",
  not:"küme: 50.29/113.53 (27.372 km², komşular Irgen · Nerçinsk · Çita) — merkeze 17 km; en yakın atlas noktası 182 km. kur: YIL (gün yok)." },
{ ad:"Gorbitsa (Gorbiçenskaya)", tur:"kale", lat:53.10004, lon:119.21745, g:0, k:0, kur:"1762-01-01",
  s:[{f:"1762-01-01", t:"1917-03-15", d:"rusya"},
     {f:"1917-03-15", t:"1917-11-07", d:"rusya-gecici-hukumet"},
     {f:"1917-11-07", t:"1923-10-29", d:"sovyet-rusya"}],
  kaynak:"МЭСБЕ «Горбица» (ru.wikisource): \"станица Забайк. обл., Нерчинск. окр., при впадении реки Г. в Шилку. С 1762 была крепостью до половины XIX в.\" · GeoNames 2023965",
  not:"küme: 53.81/119.01 (15.968 km², komşu Sretensk) — merkeze 80 km. kur: YIL; 1762 kaynakta KALE oluşunun başı — yerleşimin daha eski olup olmadığı bulunamadı." },
{ ad:"Kazakevičevo (Kazakevičeva stanitsası)", tur:"kale", lat:48.26922, lon:134.73811, g:0, k:0, kur:"1858-01-01",
  s:[{f:"1858-01-01", t:"1917-03-15", d:"rusya"},
     {f:"1917-03-15", t:"1917-11-07", d:"rusya-gecici-hukumet"},
     {f:"1917-11-07", t:"1923-10-29", d:"sovyet-rusya"}],
  kaynak:"ЭСБЕ «Казакевичева» (ru.wikisource): \"станица Приморской обл., Северно-Уссурийского края, на пр. берегу Уссури, в 40 в. от Хабаровки. Основана в 1858 г.\" · GeoNames 2023021 (Habarovsk'a ≈34 km kuş uçuşu; kaynak 40 verst ≈ 43 km, nehir yolu)",
  not:"küme: 48.7/134.78 (53.536 km², komşu Habarovka) — merkeze 48 km. ⚠️ Rus stanitsası 1858'de kuruldu, Ussuri'nin sağ yakası hukuken 1860 Pekin Antlaşması'na kadar ortak/Qing sayılır; atlas fiilî tasarruf boyar ⇒ rusya 1858. Komşu Habarovka kaydı qing-hanedani'yi 1860-11-14'e kadar sürdürüyor: Habarovka da 1858'de Rus karakolu olarak kuruldu — iki kayıt ÇELİŞİYOR, hüküm 1.MURAT'ın." },
{ ad:"Sofiysk (Amur)", tur:"sehir", lat:51.5733, lon:139.8455, g:0, k:0, kur:"1859-01-01",
  s:[{f:"1859-01-01", t:"1917-03-15", d:"rusya"},
     {f:"1917-03-15", t:"1917-11-07", d:"rusya-gecici-hukumet"},
     {f:"1917-11-07", t:"1923-10-29", d:"sovyet-rusya"}],
  kaynak:"ЭСБЕ «Софийск» (ru.wikisource): \"сел. Приморской обл., Хабаровского окр., расположено на прав. берегу р. Амура в его низовьях, у подошвы горы Джай. Основ. в 1859 г.; до 1896 г. С. был окружным городом\" · МЭСБЕ «Софийск»: \"основ. 1859\" · GeoNames 2016364",
  not:"küme: 52.27/138.65 (20.930 km², komşu Nikolayevsk) — merkeze 113 km. ⚠️ GeoNames'te iki Sofiysk var; 2016363 (52.26/133.99, Amur oblastı, iç kesim) ESBE'nin tarif ettiği yer DEĞİL — aşağı Amur kıyısındaki 2016364 alındı." }
];
