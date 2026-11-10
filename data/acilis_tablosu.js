/* AÇILIŞ TABLOSU — ACILIS-MADDESI-1110 (Emre, 10 Kasım 2026). Okuyan: js/acilis.js.
   Emre: "haritayı açan kullanıcının konumuna göre … her milletin en şanlı şerefli, çok
   sevilen olayından başlasın; o bölgenin devletinin kronolojisinden açılsın." Olumsuz olay
   (yenilgi, katliam) SEÇİLMEZ.

   ÖLÇÜT (keyfî görünmesin diye yazılı): ① ülkenin RESMÎ MİLLÎ GÜNÜ — devletin kendi ilan
   ettiği en kutlu gün — atlasın verisinde madde olarak varsa o; ② yoksa o milletin tarih
   anlatısında zafer/kuruluş olarak kutlanan bir dönüm noktası (sebebi `neden`de).
   Türkiye istisnası Emre'nin seçimidir: millî gün (29 Ekim 1923) değil İstanbul'un fethi.

   Alanlar: d = kronolojisi açılacak devlet id'si (data/devletler.js; "osmanli" = ana
   kronoloji) · t = gün · k = aynı gündeki maddeler arasından seçmek için başlıkta aranan
   kelime · neden = seçimin gerekçesi (ekranda görünmez, çevrilmez).
   Ölçüm (10 Kasım 2026, yerel tarayıcı, main 9c93e07e4): 23 satırın hepsinin maddesi kendi
   devletinin kronolojisinde o günde VAR. Madde kaybolursa js/acilis.js dünya satırına düşer
   ve konsola yazar — tablo açılışı bozamaz.
   Yeni ülke: buraya bir satır + js/acilis.js SAAT_DILIMI/DIL eşlemesi. */
window.ACILIS_TABLOSU = {
  DUNYA: { d: "osmanli", t: "1453-05-29", k: "fethi",
           neden: "Dünya varsayılanı: Orta Çağ'ın sonu sayılan ortak eşik; atlasın en sağlam verisi; haritada o gün görünen değişim." },
  TR: { d: "osmanli", t: "1453-05-29", k: "fethi", neden: "Emre'nin seçimi: İstanbul'un fethi." },
  GR: { d: "yunanistan", t: "1821-03-25", k: "İsyan", neden: "Millî gün (25 Mart, Yunan bağımsızlık ayaklanması)." },
  US: { d: "abd", t: "1776-07-04", k: "Bağımsızlık", neden: "Millî gün (Independence Day)." },
  FR: { d: "fransa", t: "1789-07-14", k: "Bastille", neden: "Millî gün (Fête nationale)." },
  DE: { d: "almanya", t: "1871-01-18", k: "ilan", neden: "Birlik: Alman İmparatorluğu'nun ilanı (millî gün 3 Ekim 1990 veri penceresinin dışında)." },
  IT: { d: "italya", t: "1861-03-17", k: "ilan", neden: "Birlik günü (İtalya Krallığı'nın ilanı)." },
  ES: { d: "ispanya", t: "1492-01-02", k: "Gırnata", neden: "Reconquista'nın tamamlanışı (Toma de Granada)." },
  PT: { d: "portekiz", t: "1640-12-01", k: "Bragança", neden: "Millî bayram (Restauração da Independência)." },
  BR: { d: "brezilya-imparatorlugu", t: "1822-09-07", k: "bağımsızlığını", neden: "Millî gün (Independência, 7 Eylül)." },
  RU: { d: "moskova", t: "1380-09-08", k: "Kulikovo", neden: "Askerî şeref günü; Moskova knezliğinin yükselişi (Kulikovo)." },
  HU: { d: "macaristan", t: "1848-03-15", k: "Pest", neden: "Millî bayram (15 Mart 1848)." },
  RS: { d: "sirbistan-prensligi", t: "1804-02-14", k: "Sırp", neden: "Devlet günü (Sretenje, Birinci Sırp Ayaklanması)." },
  AL: { d: "arnavutluk-bagimsiz", t: "1912-11-28", k: "bağımsızlığı", neden: "Bayrak ve bağımsızlık günü (28 Kasım)." },
  FI: { d: "finlandiya", t: "1917-12-06", k: "bağımsızlığını", neden: "Bağımsızlık günü (6 Aralık)." },
  RO: { d: "romanya-kralligi", t: "1918-12-01", k: "Büyük Romanya", neden: "Millî gün (Büyük Birlik, 1 Aralık)." },
  PL: { d: "polonya-erken", t: "1410-07-15", k: "Grunwald", neden: "Grunwald zaferi (millî gün 11 Kasım 1918'in Polonya kronolojisinde maddesi yok)." },
  AT: { d: "habsburg", t: "1683-09-12", k: "Viyana", neden: "Viyana'nın kurtarılması (Kahlenberg)." },
  JP: { d: "meiji-japonya", t: "1868-01-03", k: "Meiji", neden: "Meiji Restorasyonu (modern Japonya'nın kuruluşu)." },
  CA: { d: "kanada", t: "1867-07-01", k: "Dominyon", neden: "Millî gün (Canada Day)." },
  MX: { d: "yeni-ispanya", t: "1810-09-16", k: "Hidalgo", neden: "Bağımsızlık günü (Grito de Dolores)." },
  AR: { d: "rio-de-la-plata-valiligi", t: "1810-05-25", k: "Mayıs", neden: "Millî gün (Revolución de Mayo)." },
  ARAP: { d: "eyyubi", t: "1187-10-02", k: "Kudüs", neden: "Selâhaddin'in Kudüs'ü alışı — Arap dünyasının ortak zafer anlatısı." }
};
/* Saat dilimi (IANA) → ülke. Yalnız tablodaki ülkeler; ötekiler js/acilis.js'te dil adımına düşer. */
window.ACILIS_SAAT_DILIMI = {
  "Europe/Istanbul": "TR", "Asia/Istanbul": "TR", "Europe/Athens": "GR", "Europe/Paris": "FR",
  "Europe/Berlin": "DE", "Europe/Rome": "IT", "Europe/Madrid": "ES", "Atlantic/Canary": "ES",
  "Europe/Lisbon": "PT", "Europe/Moscow": "RU", "Europe/Budapest": "HU", "Europe/Belgrade": "RS",
  "Europe/Tirane": "AL", "Europe/Helsinki": "FI", "Europe/Bucharest": "RO", "Europe/Warsaw": "PL",
  "Europe/Vienna": "AT", "Asia/Tokyo": "JP", "America/Sao_Paulo": "BR", "America/Mexico_City": "MX",
  "America/Argentina/Buenos_Aires": "AR", "America/Buenos_Aires": "AR",
  "America/Toronto": "CA", "America/Vancouver": "CA", "America/Montreal": "CA", "America/Edmonton": "CA",
  "America/Halifax": "CA", "America/Winnipeg": "CA",
  "America/New_York": "US", "America/Chicago": "US", "America/Denver": "US", "America/Phoenix": "US",
  "America/Los_Angeles": "US", "America/Anchorage": "US", "Pacific/Honolulu": "US",
  "America/Detroit": "US", "America/Indiana/Indianapolis": "US", "America/Boise": "US",
  "Asia/Riyadh": "SA", "Africa/Cairo": "EG", "Asia/Damascus": "SY", "Asia/Baghdad": "IQ",
  "Asia/Amman": "JO", "Asia/Beirut": "LB", "Asia/Gaza": "PS", "Asia/Hebron": "PS",
  "Asia/Dubai": "AE", "Asia/Kuwait": "KW", "Asia/Qatar": "QA", "Asia/Bahrain": "BH",
  "Asia/Muscat": "OM", "Asia/Aden": "YE", "Africa/Tripoli": "LY", "Africa/Tunis": "TN",
  "Africa/Algiers": "DZ", "Africa/Casablanca": "MA", "Africa/Khartoum": "SD"
};
