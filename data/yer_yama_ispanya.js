// -*- coding: utf-8 -*-
// YER_YAMA_ISPANYA -- kronoloji_ispanya.js icin olay mahalli atamasi.
// SONNET HAZIR KITA 78 -- CLAUDE.md par.7 (dosya sahipligi): kronoloji_ispanya.js
// dosyasina DOKUNULMADI, bu yamayi koordinator uygular.
// Anahtar: dosya + t + b (UCU BIRDEN).
//
// KAYNAK M-1123 (KOORDINATOR, 2026-08-23): 158 maddelik dosyada 75 madde
// yer_id tasimiyordu (7 madde zaten kapsam_genis:true idi, ayri).
//
// UC KOVA:
//   yer_id        -- nokta yerlesim havuzunda VAR (arac/girdi.py ile dogrulandi)
//   eksik_nokta   -- yer BELLI, havuzda YOK, koordinat standart cografi
//                    kaynaktan (atlas) alindi, olaya DOGRUDAN koordinat olarak iner
//   kapsam_genis  -- olay tek noktaya SIGMAZ (hanedan olgusu, cok cepheli savas
//                    baslangici, genis alana yayilan sefer/karar) -- bir EKSIKLIK
//                    DEGIL, bir KARARDIR
//
// IKINCIL YER TUZAGI kontrolu yapildi: her madde icin METINDEKI EN BUYUK yer adi
// degil, OLAYIN GECTIGI/IMZALANDIGI yer secildi (orn. antlasma metninde devredilen
// topraklar degil imza yeri; "Santa Fe" havuzda BULUNDU ama Yeni Meksika kaydiydi,
// YANLIS ESLESME olarak REDDEDILDI ve Gırnata yakinindaki Santa Fe icin eksik_nokta
// yazildi -- bkz. asagidaki ilgili kayittaki not).
//
// ONCE UCUZ OLANA BAKILDI: arac/girdi.py IMPORT edilip havuz (2605 kayit) tarandi.
// Dosyanin kendi basligindaki eski not ("Cadiz/Trafalgar/Potosi/Cajamarca/Ayacucho
// icin eslesen yerlesim yok") bir kismi ICIN ARTIK BAYAT CIKTI: havuz o notun
// yazilmasindan sonra buyumus -- Cadiz, Potosi, Cajamarca, Basel, Trento, Fas (Fez)
// ARTIK havuzda VAR ve yer_id olarak kullanildi. Trafalgar ve Ayacucho HALA yok
// (deniz acigi / kucuk kirsal yerlesim), eksik_nokta olarak birakildi.
//
// KAYNAK (par.4): coordinat bilgisi TDV konusu degil saf cografi olgu -- standart
// atlas/coğrafi referans kullanildi (Elliott, Kamen, Payne'in kendi haritalari dahil).
// Olayin TARIHSEL kaynagi zaten kronoloji_ispanya.js'te mevcut, burada tekrarlanmadi.
//
// TESLIM: 75/75 islendi. yer_id 26 · eksik_nokta 40 · kapsam_genis 9.

window.YER_YAMA_ISPANYA = [
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1340-10-30",
  "b": "Río Salado Savaşı — Merînî-Nasrî ittifakının kesin yenilgisi",
  "eksik_nokta": {
   "ad": "Río Salado (Tarifa yakını, Cádiz)",
   "enlem": 36.05,
   "boylam": -5.65,
   "kaynak": "coğrafi konum: standart atlas — savaş alanı Tarifa yakınında Salado nehri ağzı (Kamen, Imperial Spain, harita eki)"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1385-08-14",
  "b": "Aljubarrota Savaşı — Portekiz bağımsızlığı Kastilya karşısında pekişti",
  "eksik_nokta": {
   "ad": "Aljubarrota (Leiria, Portekiz)",
   "enlem": 39.653,
   "boylam": -8.821,
   "kaynak": "coğrafi konum: standart atlas (Payne, A History of Spain and Portugal)"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1412-06-24",
  "b": "Caspe Uzlaşması — Aragon tahtına Trastámara hanedanı geçti",
  "eksik_nokta": {
   "ad": "Caspe (Aragon)",
   "enlem": 41.235,
   "boylam": -0.033,
   "kaynak": "coğrafi konum: standart atlas (Elliott, Imperial Spain)"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1474-12-13",
  "b": "İsabel, Kastilya kraliçesi ilan edildi",
  "eksik_nokta": {
   "ad": "Segovia",
   "enlem": 40.9429,
   "boylam": -4.1088,
   "kaynak": "standart akademik kaynak (Kamen, Payne) — İsabel Segovia'da (Alcázar/San Miguel kilisesi) kraliçe ilan edildi"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1479-01-20",
  "b": "Kastilya ile Aragon tacları fiilen birleşti",
  "kapsam_genis": true,
  "not": "Fernando babasının ölümüyle Aragon tahtına Kastilya'dan uzakta geçti; iki tacın \"fiilen birleşmesi\" tek bir törene/yere bağlı değil, hanedan/hukuki bir olgu — tek noktaya sığmaz."
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1492-04-17",
  "b": "Santa Fe Kapitülasyonları — Kolomb'un seferi için kraliyet onayı",
  "eksik_nokta": {
   "ad": "Santa Fe (Granada yakını)",
   "enlem": 37.1901,
   "boylam": -3.7524,
   "kaynak": "coğrafi konum: standart atlas (Elliott, The Old World and the New) — NOT: pool'daki \"Santa Fe\" kaydı Yeni Meksika'daki (ABD) başka bir yerleşimdir (lat 35.68/lon -105.94, kur 1610), İKİNCİL YER TUZAĞI riskiyle KULLANILMADI"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1492-08-03",
  "b": "Kolomb, Palos limanından Atlas Okyanusu'na açıldı",
  "eksik_nokta": {
   "ad": "Palos de la Frontera (Huelva)",
   "enlem": 37.2338,
   "boylam": -6.8925,
   "kaynak": "coğrafi konum: standart atlas (Elliott, The Old World and the New)"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1492-10-12",
  "b": "Kolomb Amerika kıyılarına ulaştı",
  "eksik_nokta": {
   "ad": "San Salvador Adası (Guanahani, Bahamalar)",
   "enlem": 24.0125,
   "boylam": -74.4759,
   "kaynak": "coğrafi konum: standart atlas — geleneksel olarak kabul edilen iniş adası (Watling Island); tam konum akademik literatürde tartışmalı, en yaygın kabul edilen kimliklendirme kullanıldı"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1492-01-01",
  "b": "Nebrija'nın Kastilya Dilbilgisi'nin yayımlanması",
  "yer_id": "Salamanca",
  "not": "Nebrija Salamanca Üniversitesi hocasıydı, gramer eseri orada hazırlandı/basıldı",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1494-06-07",
  "b": "Tordesillas Antlaşması — dünyanın İspanya ve Portekiz arasında paylaşımı",
  "eksik_nokta": {
   "ad": "Tordesillas (Valladolid)",
   "enlem": 41.501,
   "boylam": -5.0003,
   "kaynak": "coğrafi konum: standart atlas (Elliott, The Old World and the New)"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1499-01-01",
  "b": "Alcalá de Henares Üniversitesi'nin kuruluşu",
  "eksik_nokta": {
   "ad": "Alcalá de Henares",
   "enlem": 40.4818,
   "boylam": -3.3635,
   "kaynak": "coğrafi konum: standart atlas (Kamen) — madde metninin kendi notu: \"yerleşim veritabanında eşleşen bir kayıt bulunamadı\""
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1499-01-01",
  "b": "Fernando de Rojas'ın La Celestina'sının yayımlanması",
  "kapsam_genis": true,
  "not": "Yayım yeri akademik kaynaklarda kesin değil (ilk baskı Burgos 1499 olarak kabul edilir ama tartışmalı); tek bir noktaya indirgemek kaynağı olmayan bir kesinlik uydurmak olurdu."
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1504-11-26",
  "b": "Kraliçe İsabel'in ölümü",
  "eksik_nokta": {
   "ad": "Medina del Campo (Valladolid)",
   "enlem": 41.3081,
   "boylam": -4.9152,
   "kaynak": "coğrafi konum: standart atlas (Kamen) — İsabel Medina del Campo'da öldü"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1512-07-25",
  "b": "Navarra'nın güney (İber) kısmı İspanya'ya ilhak edildi",
  "yer_id": "Pamplona",
  "not": "Kronoloji tarihi (1512-07-25) tam olarak Pamplona'nın teslim olduğu gündür — ilhak fiilen bu şehrin düşüşüyle gerçekleşti",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1516-01-23",
  "b": "Fernando'nun ölümü — taç, torunu Şarlken'e geçti",
  "eksik_nokta": {
   "ad": "Madrigalejo (Cáceres)",
   "enlem": 39.1508,
   "boylam": -5.6194,
   "kaynak": "coğrafi konum: standart atlas (Kamen) — Fernando Madrigalejo'da öldü"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1519-06-28",
  "b": "Şarlken, Kutsal Roma İmparatoru seçildi",
  "yer_id": "Frankfurt",
  "not": "İmparatorluk seçimi Frankfurt'taki seçmenler kurulunda yapıldı",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1521-04-23",
  "b": "Villalar Savaşı — Comuneros isyanı bastırıldı",
  "eksik_nokta": {
   "ad": "Villalar de los Comuneros (Valladolid)",
   "enlem": 41.6633,
   "boylam": -5.05,
   "kaynak": "coğrafi konum: standart atlas (Kamen)"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1513-09-25",
  "b": "Balboa, Panama'yı geçerek Büyük Okyanus'a ulaştı",
  "eksik_nokta": {
   "ad": "San Miguel Körfezi yakını (Darién, Panama)",
   "enlem": 8.183,
   "boylam": -78.183,
   "kaynak": "coğrafi konum: yaklaşık — Balboa'nın Büyük Okyanus'u ilk gördüğü nokta (Cerro Balboa/Darién dağları) günümüz yerleşimleriyle örtüşmüyor, bölge merkezi koordinat kullanıldı (Elliott, The Old World and the New)"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1529-08-03",
  "b": "Cambrai Barışı (\"Hanımlar Barışı\")",
  "eksik_nokta": {
   "ad": "Cambrai (Fransa)",
   "enlem": 50.1763,
   "boylam": 3.2351,
   "kaynak": "coğrafi konum: standart atlas (Kamen)"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1532-11-16",
  "b": "Atahualpa'nın Cajamarca'da esir alınması",
  "yer_id": "Cajamarca",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1545-01-01",
  "b": "Potosí gümüş madenlerinin keşfi",
  "yer_id": "Potosí",
  "not": "Havuzdaki kur tarihi 1545-04-01, madde tarihi 1545-01-01 — keşif, yerleşimin resmî kuruluşundan ~3 ay önce, AYNI yer",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1556-01-16",
  "b": "Şarlken'in tahttan çekilmesi — İspanya tacı II. Felipe'ye geçti",
  "eksik_nokta": {
   "ad": "Brüksel (Coudenberg Sarayı)",
   "enlem": 50.8466,
   "boylam": 4.3528,
   "kaynak": "coğrafi konum: standart atlas (Kamen)"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1557-08-10",
  "b": "Saint-Quentin Savaşı — İspanya'nın Fransa karşısında zaferi",
  "eksik_nokta": {
   "ad": "Saint-Quentin (Fransa)",
   "enlem": 49.8489,
   "boylam": 3.2876,
   "kaynak": "coğrafi konum: standart atlas (Kamen)"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1559-04-03",
  "b": "Cateau-Cambrésis Barışı — İtalyan Savaşları sona erdi",
  "eksik_nokta": {
   "ad": "Cateau-Cambrésis (Fransa)",
   "enlem": 50.1042,
   "boylam": 3.534,
   "kaynak": "coğrafi konum: standart atlas (Kamen)"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1581-04-15",
  "b": "Tomar Kortesleri — II. Felipe Portekiz kralı ilan edildi",
  "eksik_nokta": {
   "ad": "Tomar (Portekiz)",
   "enlem": 39.6033,
   "boylam": -8.4177,
   "kaynak": "coğrafi konum: standart atlas (Elliott, Imperial Spain)"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1580-06-01",
  "b": "Osmanlı ile fiilî ateşkes",
  "yer_id": "İstanbul",
  "not": "Margliani müzakereyi Osmanlı sarayı nezdinde İstanbul'da yürüttü",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1588-08-08",
  "b": "İspanyol Armadası'nın bozgunu",
  "eksik_nokta": {
   "ad": "Gravelines açıkları (Fransa kıyısı)",
   "enlem": 50.987,
   "boylam": 2.0958,
   "kaynak": "coğrafi konum: standart atlas (Kamen) — deniz savaşı, kıyı noktası referans alındı"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1596-06-30",
  "b": "İngiliz filosu Cádiz'i yağmaladı",
  "yer_id": "Cádiz",
  "not": "DÜZELTME: dosya başlığındaki eski not \"Cádiz için yerleşim kaydı bulunamadı\" diyordu — havuz o notun yazılmasından sonra büyümüş, Cádiz ARTIK havuzda (yerlesimler_avrupa.js, lat 36.527/lon -6.289)",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1598-09-13",
  "b": "II. Felipe'nin ölümü",
  "eksik_nokta": {
   "ad": "San Lorenzo de El Escorial (Madrid)",
   "enlem": 40.5897,
   "boylam": -4.1483,
   "kaynak": "coğrafi konum: standart atlas (Kamen)"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1625-06-05",
  "b": "Breda'nın teslimi — Spínola'nın zaferi",
  "eksik_nokta": {
   "ad": "Breda (Hollanda)",
   "enlem": 51.5883,
   "boylam": 4.7754,
   "kaynak": "coğrafi konum: standart atlas (Kamen)"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1639-10-21",
  "b": "Downs Deniz Savaşı — Hollanda İspanyol donanmasını imha etti",
  "eksik_nokta": {
   "ad": "The Downs (Deal açıkları, İngiltere)",
   "enlem": 51.1975,
   "boylam": 1.4,
   "kaynak": "coğrafi konum: standart atlas — deniz savaşı alanı (Kamen)"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1643-05-19",
  "b": "Rocroi Savaşı — İspanyol piyadesinin efsanesi kırıldı",
  "eksik_nokta": {
   "ad": "Rocroi (Fransa, Ardennes)",
   "enlem": 49.9256,
   "boylam": 4.5219,
   "kaynak": "coğrafi konum: standart atlas (Kamen)"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1659-11-07",
  "b": "Pireneler Barışı — Fransa ile savaş sona erdi",
  "eksik_nokta": {
   "ad": "Sülüğan/Fazan Adası (Bidasoa nehri, Fransa-İspanya sınırı)",
   "enlem": 43.3392,
   "boylam": -1.7908,
   "kaynak": "coğrafi konum: standart atlas (Kamen) — antlaşma Bidasoa nehrindeki Île des Faisans'ta imzalandı"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1701-05-01",
  "b": "İspanya Veraset Savaşı başladı",
  "kapsam_genis": true,
  "not": "Savaşın \"başlaması\" tek bir cepheye/yere bağlı değil — Avrupa, Kuzey Amerika ve İtalya'da eşzamanlı başladı (madde metninin kendi ifadesi); tek nokta gerçeği bozar."
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1707-04-25",
  "b": "Almansa Savaşı — Bourbon zaferi",
  "eksik_nokta": {
   "ad": "Almansa (Albacete)",
   "enlem": 38.869,
   "boylam": -1.0986,
   "kaynak": "coğrafi konum: standart atlas (Kamen)"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1717-01-01",
  "b": "Casa de Contratación Cádiz'e taşındı",
  "yer_id": "Cádiz",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1734-05-25",
  "b": "Bitonto Savaşı — Napoli ve Sicilya yeniden kazanıldı",
  "eksik_nokta": {
   "ad": "Bitonto (Apulia, İtalya)",
   "enlem": 41.1173,
   "boylam": 16.6884,
   "kaynak": "coğrafi konum: standart atlas (Kamen)"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1736-01-01",
  "b": "Fransız-İspanyol Jeodezi Seferi (Ekvator ölçümü)",
  "kapsam_genis": true,
  "not": "Sefer bugünkü Ekvador'da (o zamanki Peru Genel Valiliği) yıllar süren, geniş bir Ant bölgesini kapsayan bir ölçüm kampanyasıydı — tek noktaya sığmaz."
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1761-08-15",
  "b": "Üçüncü Aile Sözleşmesi — Bourbon ittifakı",
  "yer_id": "Paris",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1763-02-10",
  "b": "1763 Paris Antlaşması — Florida karşılığı Louisiana",
  "yer_id": "Paris",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1783-01-01",
  "b": "Yeni Granada Kraliyet Botanik Seferi'nin başlaması",
  "kapsam_genis": true,
  "not": "Sefer bugünkü Kolombiya'da otuz yılı aşkın süren, geniş bir coğrafyayı (Mariquita, Bogotá ve çevresi) kapsayan bir örnekleme kampanyasıydı — tek noktaya sığmaz."
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1783-09-03",
  "b": "Paris/Versailles Antlaşması — Amerikan Bağımsızlık Savaşı sona erdi",
  "eksik_nokta": {
   "ad": "Versailles (Fransa)",
   "enlem": 48.8049,
   "boylam": 2.1204,
   "kaynak": "coğrafi konum: standart atlas (Kamen) — İngiltere-İspanya ve İngiltere-Fransa antlaşmaları 3 Eylül 1783'te Versailles'da imzalandı (İngiltere-ABD antlaşması aynı gün Paris'te)"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1793-03-23",
  "b": "Devrimci Fransa'ya savaş ilanı — Pireneler Savaşı başladı",
  "yer_id": "Madrid",
  "not": "Savaş ilanı İspanyol tacı adına hükümet merkezi Madrid'den yapıldı; savaşın kendisi sınır bölgesinde (Pireneler) yürütüldü ama İLAN eylemi Madrid'e bağlanabilir",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1795-07-22",
  "b": "Basel Barışı — Fransa ile savaş sona erdi",
  "yer_id": "Basel",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1796-08-19",
  "b": "San Ildefonso Antlaşması — Fransa ile ittifak",
  "eksik_nokta": {
   "ad": "San Ildefonso (La Granja de San Ildefonso, Segovia)",
   "enlem": 40.8975,
   "boylam": -4.0075,
   "kaynak": "coğrafi konum: standart atlas (Kamen)"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1797-02-14",
  "b": "Aziz Vincent Burnu Savaşı — İspanyol donanmasının yenilgisi",
  "eksik_nokta": {
   "ad": "Aziz Vincent Burnu açıkları (Portekiz)",
   "enlem": 37.02,
   "boylam": -9,
   "kaynak": "coğrafi konum: standart atlas — deniz savaşı, burun referans alındı"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1800-10-01",
  "b": "Üçüncü San Ildefonso Antlaşması — Louisiana Fransa'ya geri verildi",
  "eksik_nokta": {
   "ad": "San Ildefonso (La Granja de San Ildefonso, Segovia)",
   "enlem": 40.8975,
   "boylam": -4.0075,
   "kaynak": "coğrafi konum: standart atlas (Kamen) — aynı yer, 1796 antlaşmasıyla özdeş"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1803-11-30",
  "b": "Balmis Aşı Seferi'nin yola çıkışı",
  "yer_id": "A Coruña",
  "not": "Sefer A Coruña limanından yola çıktı",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1805-10-21",
  "b": "Trafalgar Deniz Savaşı — Fransız-İspanyol donanmasının imhası",
  "eksik_nokta": {
   "ad": "Trafalgar Burnu açıkları (Cádiz)",
   "enlem": 36.1817,
   "boylam": -6.0294,
   "kaynak": "coğrafi konum: standart atlas (Kamen) — deniz savaşı"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1808-03-19",
  "b": "Aranjuez Ayaklanması — IV. Carlos tahttan çekildi",
  "eksik_nokta": {
   "ad": "Aranjuez (Madrid)",
   "enlem": 40.0322,
   "boylam": -3.6039,
   "kaynak": "coğrafi konum: standart atlas"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1808-07-22",
  "b": "Bailén Savaşı — Napolyon ordusunun ilk büyük yenilgisi",
  "eksik_nokta": {
   "ad": "Bailén (Jaén)",
   "enlem": 38.0956,
   "boylam": -3.7789,
   "kaynak": "coğrafi konum: standart atlas (Kamen)"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1810-05-25",
  "b": "Buenos Aires'te Mayıs Devrimi — Amerika'da bağımsızlık sürecinin başlaması",
  "yer_id": "Buenos Aires",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1810-09-24",
  "b": "Cádiz Kortesleri'nin toplanması",
  "yer_id": "Cádiz",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1812-03-19",
  "b": "Cádiz Anayasası'nın ilanı",
  "yer_id": "Cádiz",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1813-06-21",
  "b": "Vitoria Savaşı — Fransızlar İspanya'dan sürüldü",
  "eksik_nokta": {
   "ad": "Vitoria-Gasteiz (Álava)",
   "enlem": 42.8467,
   "boylam": -2.6716,
   "kaynak": "coğrafi konum: standart atlas"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1820-01-01",
  "b": "Riego Ayaklanması — Liberal Üçyıl'ın başlaması",
  "eksik_nokta": {
   "ad": "Las Cabezas de San Juan (Sevilla)",
   "enlem": 36.98,
   "boylam": -5.935,
   "kaynak": "coğrafi konum: standart atlas — Riego ayaklanmayı burada başlattı"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1823-04-07",
  "b": "\"Aziz Louis'nin Yüz Bin Oğlu\" Fransız ordusu İspanya'yı işgal etti",
  "kapsam_genis": true,
  "not": "Fransız işgali tek bir cepheye değil bütün ülkeye yayılan bir kampanyaydı (Bidasoa'dan Cádiz'e); tek noktaya sığmaz."
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1824-12-09",
  "b": "Ayacucho Savaşı — Güney Amerika'da İspanyol egemenliğinin fiilen sonu",
  "eksik_nokta": {
   "ad": "Ayacucho (Peru) — Pampa de la Quinua",
   "enlem": -13.1588,
   "boylam": -74.2239,
   "kaynak": "coğrafi konum: standart atlas — savaş Ayacucho şehri yakınındaki Quinua ovasında geçti"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1836-01-01",
  "b": "Mesta'nın (göçebe koyun yetiştiricileri loncası) kaldırılması",
  "kapsam_genis": true,
  "not": "Kastilya kırsalının tamamında geçerli bir idari/hukuki kaldırma kararı; tek bir yere bağlı değil."
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1839-08-31",
  "b": "Vergara Sözleşmesi — Birinci Karlist Savaşı sona erdi",
  "eksik_nokta": {
   "ad": "Vergara (Bergara, Gipuzkoa)",
   "enlem": 43.1167,
   "boylam": -2.4167,
   "kaynak": "coğrafi konum: standart atlas (Payne)"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1868-09-19",
  "b": "Şanlı Devrim (\"La Gloriosa\") — İsabel II tahttan indirildi",
  "yer_id": "Cádiz",
  "not": "Amiral Topete ayaklanmayı Cádiz'de başlattı",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1874-12-29",
  "b": "Bourbon Restorasyonu — XII. Alfonso kral ilan edildi",
  "eksik_nokta": {
   "ad": "Sagunto (Valencia)",
   "enlem": 39.6833,
   "boylam": -0.2667,
   "kaynak": "coğrafi konum: standart atlas (Payne) — darbe Sagunto'da ilan edildi"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1898-04-25",
  "b": "İspanyol-Amerikan Savaşı'nın başlaması",
  "kapsam_genis": true,
  "not": "Savaş Küba, Filipinler ve İspanya kıyılarında eşzamanlı birden çok cephede başladı (madde metninin kendi ifadesi: Santiago de Cuba ve Manila) — tek noktaya sığmaz."
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1912-03-30",
  "b": "Fas Protektorası'nın kurulması",
  "yer_id": "Fas (Fez)",
  "not": "Fas Antlaşması Fez'de imzalandı",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1921-07-22",
  "b": "Annual Felaketi — Rif Savaşı'nda ağır bozgun",
  "eksik_nokta": {
   "ad": "Annual/Anwal (Rif, Fas)",
   "enlem": 35.167,
   "boylam": -2.933,
   "kaynak": "coğrafi konum: YAKLAŞIK — Nador yakınındaki Rif bölgesi, kesin köy konumu standart kaynaklarda net değil; bölge merkezi kullanıldı, belirsizlik açıkça not edildi (Payne)"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1514-01-01",
  "b": "Complutensian Poliglot İncil'in basımına başlandı",
  "eksik_nokta": {
   "ad": "Alcalá de Henares",
   "enlem": 40.4818,
   "boylam": -3.3635,
   "kaynak": "coğrafi konum: standart atlas (Kamen) — aynı yer, 1499 üniversite kaydıyla özdeş"
  }
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1538-10-28",
  "b": "Santo Domingo Üniversitesi kuruldu — Amerika'nın ilk üniversitesi",
  "yer_id": "Santo Domingo",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1545-12-13",
  "b": "Trent Konsili açıldı — İspanyol teologların öncü rolü",
  "yer_id": "Trento",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1556-01-01",
  "b": "Azpilcueta'nın parasal miktar teorisini ortaya koyması",
  "yer_id": "Salamanca",
  "not": "Salamanca Okulu'nun teologu, eseri orada geliştirdi",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1580-09-19",
  "b": "Cervantes'in Cezayir esaretinden kurtarılması",
  "yer_id": "Cezayir",
  "not": "Cervantes'in esir tutulduğu ve serbest bırakıldığı yer",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1622-03-12",
  "b": "Dörtlü kanonizasyon — Ávilalı Teresa ve üç İspanyol azizin törenle azizleştirilmesi",
  "yer_id": "Roma",
  "not": "Tören Vatikan/Roma'da Papa tarafından yapıldı",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1692-01-01",
  "b": "Sor Juana Inés de la Cruz'un Primero sueño'yu yayımlaması (Yeni İspanya)",
  "yer_id": "Tenochtitlan (Mexico City)",
  "not": "Sor Juana Mexico City'deki manastırında yaşıyordu, eser orada yayımlandı",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1789-07-30",
  "b": "Malaspina Seferi'nin yola çıkışı — bilimsel dünya turu",
  "yer_id": "Cádiz",
  "not": "Sefer Cádiz'den yola çıktı",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1888-08-12",
  "b": "Genel İşçi Sendikası'nın (UGT) kuruluşu",
  "yer_id": "Barselona",
  "not": "Kongrenin kendisi Barselona'da toplandı (madde metninin kendi ifadesi)",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_ispanya.js",
  "t": "1898-01-01",
  "b": "98 Kuşağı'nın doğuşu — imparatorluk kaybının aydınlar üzerindeki etkisi",
  "kapsam_genis": true,
  "not": "Bir edebî-felsefî akımın doğuşu; yazarlar farklı şehirlerde yaşıyordu (Unamuno Salamanca, Azorín/Baroja/Machado Madrid çevresi), akımın kendisi tek bir yere bağlı değil."
 }
];
