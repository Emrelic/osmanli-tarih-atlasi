// denetim/ARAC-KPS2-LISTE-0914.js — PAKET-KAPSAM2 · sınırdaki maddelerin HÜKÜM LİSTESİ (tek otorite)
// Emre (14 Eylül 2026): "Kararsız kalan 45 madde dünya olayı sayılsın ama bölgesel bazda Osmanlı'yı
// ilgilendirdiği için önemli derecede 5. derece ya da 4. derece önem puanı alanlar, eğer 'dış
// olayların 4 ya da 5 puan olanlarını göster' seçeneği işaretliyse … kronolojide zikredilecektir."
// Kaynak listeler: PAKET-KAPSAM-0913.md §3.1 (22) + §3.3 (24) · PAKET-KRON3-0913.md §2.1 (9 bağlam).
// Biçim: [dosya#sıra, t, b başı, onem, kova, gerekçe]   (kapsam her satırda "dis")
//   onem 5 · Osmanlı'yı doğrudan ve büyük ölçekte etkileyen bölgesel olay
//   onem 4 · Osmanlı sınır bölgesini / rakibini ilgilendiren önemli olay
//   onem 3 · Osmanlı'yla ilişkisi zayıf — dis kalır, 4 eşiğinde görünmez
//   onem 2 · Osmanlı'yla ilişkisi yok denecek kadar az
// 🔴 olaylar_ek5.js satırları KİLİTLİ (ARAS-CALDIRAN) — uygulayıcı `--ek5` olmadan YAZMAZ.
// 🔴 Var olan `onem` değeri EZİLMEZ: KRON3 §2.1'in 8 maddesi (ek20 · ek22) burada YOK, raporda.
module.exports = [
  // ---- PAKET-KAPSAM §3.1 · B'den okundu, bağlam/komşu (22) ----
  ['olaylar.js#52',      '1798-06-12', 'Malta şövalyelerinin tasfiyesi', 4, '3.1', "Mısır seferinin yolu; birkaç hafta sonra Osmanlı Mısırı'na çıkışın durağı"],
  ['olaylar_ek11.js#7',  '1510-12-02', 'Merv Savaşı', 4, '3.1', "Safevî sınırını Ceyhun'a taşıdı; Osmanlı doğusunda denk büyüklükte rakip devlet tamamlandı"],
  ['olaylar_ek11.js#12', '1747-06-20', "Nâdir Şah'ın öldürülmesi", 4, '3.1', "Osmanlı ile üç savaş yapan rakibin sonu; doğu sınırı uzun süre sakinledi"],
  ['olaylar_ek11.js#13', '1796-01-01', 'Kaçar hânedanının', 4, '3.1', "1923'e kadar Osmanlı'nın doğu komşusu olacak devletin İran'ı birleştirmesi"],
  ['olaylar_ek13.js#12', '1521-01-01', "Portekiz'in Bahreyn'i alışı", 4, '3.1', "Körfezde Osmanlı-Portekiz çekişmesinin hedefi olan adanın Portekiz'e geçişi"],
  ['olaylar_ek13.js#18', '1861-05-31', "Bahreyn'in İngiltere ile", 3, '3.1', "Körfezde İngiliz himayesinin başlangıcı; Osmanlı'ya bağı dolaylı (1871 Lahsa'dan sonra da dışarıda)"],
  ['olaylar_ek15.js#2',  '1564-01-01', "İspanya'nın Bâdis", 3, '3.1', "Fas kıyısında küçük mevzi; Osmanlı-İspanyol çekişmesine dolaylı dokunuyor"],
  ['olaylar_ek15.js#11', '1792-09-22', "Fransa'da Birinci Cumhuriyet", 4, '3.1', "Osmanlı'nın başlıca Avrupa muhatabının rejim değişikliği; 1798 Mısır seferinin ön şartı"],
  ['olaylar_ek15.js#12', '1659-01-01', 'Sa’dî hânedanının sonu', 3, '3.1', "Gövdenin kendisi: Osmanlı'ya hiçbir dönemde bağlanmayan Fas hânedanı"],
  ['olaylar_ek16.js#10', '1452-01-01', 'Karakoyunlu Cihan Şah', 3, '3.1', "Karakoyunlu'nun güney-orta İran'a genişlemesi; Osmanlı sınırından uzak"],
  ['olaylar_ek5.js#0',   '1381-04-01', "Timur Herat'ı aldı", 3, '3.1', "Timur'un Horasan'daki ilk büyük fethi; Anadolu'dan uzak, yirmi yıl önce"],
  ['olaylar_ek5.js#54',  '1467-11-10', "Karakoyunlu Devleti'nin çöküşü", 4, '3.1', "Doğu Anadolu Akkoyunlu'ya geçti; Otlukbeli'ne giden rakibin yükselişi"],
  ['olaylar_ek7.js#118', '1335-12-01', "İlhanlı Devleti'nin dağılması", 4, '3.1', "Anadolu beyliklerini İlhanlı üst hâkimiyetinden kurtaran, Osmanlı'nın büyüme ortamını açan çözülme"],
  ['olaylar_ek7.js#119', '1387-11-01', "Timur'un İran'ın büyük", 4, '3.1', "Timur'un Osmanlı doğu sınırına yaklaşması; Anadolu seferinin önü"],
  ['olaylar_ek7.js#125', '1736-03-08', "Nadir Şah'ın Mugan", 4, '3.1', "Osmanlı ile savaşları süren İran'da yeni hânedan; Safevî-Osmanlı çekişmesinin mezhep şartı gövdede"],
  ['olaylar_ek9.js#10',  '1884-06-03', 'Hewett (Adua)', 3, '3.1', "Mısır (Hidivlik) garnizonlarının tahliyesi; Osmanlı'ya bağı yalnız itibari Mısır üzerinden"],
  ['olaylar_ok106.js#2', '1571-01-01', "Lehistan'ın Dinyeper hattını", 3, '3.1', "Kırım akın yolu üstünde Leh uç kasabası; Osmanlı'ya bağı tâbi Kırım üzerinden, zayıf"],
  ['olaylar_ok106.js#3', '1616-01-01', "Lehistan'ın Yedisan uç hattında", 3, '3.1', "Yedisan hattında Leh yerleşimi; Osmanlı'ya bağı dolaylı"],
  ['olaylar_ok106.js#4', '1638-01-01', "Moskova'nın bozkır savunma", 3, '3.1', "Moskova'nın Kırım'a karşı savunma hattı; Osmanlı'ya bağı dolaylı"],
  ['olaylar_ok106.js#5', '1652-01-01', "Slobodskaya Ukrayna'nın kuruluşu", 3, '3.1', "Moskova güney sınırında yerleşim kuşağı; Osmanlı'ya bağı dolaylı"],
  ['olaylar_ok109.js#1', '1918-10-30', "Avusturya Cumhuriyeti'nin kuruluşu", 4, '3.1', "Osmanlı'nın savaş müttefiki imparatorluğun sonu, Mondros ile aynı gün"],
  ['olaylar_ok109.js#9', '1919-06-28', 'Versailles Antlaşması', 4, '3.1', "Sevr'i de doğuran Paris barış düzeninin ilk antlaşması"],
  // ---- PAKET-KAPSAM §3.3 · C'nin zayıf sebeplilerinden sınırdakiler (24) ----
  ['olaylar_ek16.js#12', '1797-10-17', 'Campo Formio', 4, '3.3', "Preveze, Parga ve İyon Adaları Fransa'ya geçti; Fransa Osmanlı'nın Rumeli komşusu oldu"],
  ['olaylar_ek16.js#19', '1772-08-05', "Polonya'nın Birinci Paylaşımı", 4, '3.3', "1768-74 Osmanlı-Rus Savaşı sürerken Rusya ve Avusturya Osmanlı sınırı boyunca büyüdü (Yazlofça)"],
  ['olaylar_ek16.js#20', '1793-01-23', "Polonya'nın İkinci Paylaşımı", 4, '3.3', "Kamaniçe ve Bar Rusya'ya geçti; Rusya Hotin sınırına dayandı"],
  ['olaylar_ek16.js#34', '1509-05-17', "Oran'ın İspanya'ya düşüşü", 4, '3.3', "İspanya'nın Mağrib kıyısına yerleşmesi; Barbaros kardeşlerin ve Osmanlı Cezayiri'nin doğuş ortamı"],
  ['olaylar_ek16.js#6',  '1340-01-01', 'Celayirli Devleti', 3, '3.3', "Tebriz merkezli İlhanlı ardılı; erken Osmanlı'dan uzak"],
  ['olaylar_ek16.js#7',  '1411-01-01', "Bağdat'ın Karakoyunlu", 3, '3.3', "Irak'ta Karakoyunlu-Celâyirli el değiştirmesi; Osmanlı henüz bölgede değil"],
  ['olaylar_ek16.js#9',  '1441-01-01', "Kırım Hanlığı'nın kuruluşu", 4, '3.3', "1475'ten sonra Osmanlı'nın en önemli tâbisi olacak hanlığın doğuşu"],
  ['olaylar_ek16.js#44', '1891-01-01', 'Müleydâ Savaşı', 3, '3.3', "Necid'de Suud-Reşîdî çekişmesi; Osmanlı'ya bağı itibari"],
  ['olaylar_ek16.js#57', '1891-02-06', "Tokar'ın İngiliz-Mısır", 3, '3.3', "Mehdî Savaşı'nda İngiliz-Mısır harekâtı; Osmanlı'ya bağı itibari Mısır üzerinden"],
  ['olaylar_ek16.js#55', '1916-11-03', 'İngiliz-Katar Antlaşması', 4, '3.3', "Dünya Savaşı içinde Osmanlı kazası Katar'ın İngiliz himayesine hukuken geçişi"],
  ['olaylar_ek13.js#11', '1417-01-01', 'Bahreyn adalarının Cebrîler', 2, '3.3', "Körfez adasında yerel hânedan değişimi; Osmanlı ile ilişkisi yok"],
  ['olaylar_ek15.js#1',  '1695-01-01', "Dârfûr Sultanlığı'nın kuruluşu", 3, '3.3', "Uzak Sudan sultanlığı; Bâbıâli ile yazışması sonraki yüzyıllarda"],
  ['olaylar_ek15.js#7',  '1857-07-11', "Büyük Kabiliye'nin düşüşü", 4, '3.3', "Eski Osmanlı Cezayiri'nde Fransız işgalinin tamamlanması. İçerik 3 derdi; 4'e ÇEKİLDİ (④): atlasta Tîzî Vezzû + Akbû v: (Osmanlı tâbi) dönemi aynı gün bitiyor ve ±30 günde tek madde bu — 3 kalsa Osmanlı kırılması maddesiz kalırdı"],
  ['olaylar_ek5.js#1',   '1386-01-01', "Timur'un 'üç yıllık sefer'i", 4, '3.3', "Tebriz ve Azerbaycan Timur'a geçti; Anadolu seferinin önü"],
  ['olaylar_ek5.js#2',   '1393-01-01', 'Muzafferî hânedanının sonu', 3, '3.3', "Fars'ta Timurlu fethi; Anadolu'dan uzak"],
  ['olaylar_ek7.js#120', '1406-10-21', "Kara Yusuf'un Tebriz", 3, '3.3', "Karakoyunlu'nun Azerbaycan'da devletleşmesi; Fetret'teki Osmanlı sınırına dokunmuyor"],
  ['olaylar_ek7.js#121', '1468-04-01', "Uzun Hasan'ın Karakoyunlu", 4, '3.3', "Akkoyunlu'nun doğu Anadolu-İran'da tek güç olması; Otlukbeli'nin önü"],
  ['olaylar_ek7.js#122', '1501-07-01', "Şah İsmail'in Tebriz'i alması", 5, '3.3', "Safevî Devleti'nin kuruluşu — iki asır sürecek Osmanlı-Safevî çekişmesinin başı"],
  ['olaylar_ek7.js#126', '1828-02-22', 'Türkmençay Antlaşması', 4, '3.3', "Rusya Revan ve Nahcıvan'ı aldı; 1828-29 Osmanlı-Rus Savaşı'nın eşiğinde doğu sınırı komşusu değişti"],
  ['olaylar_ek7.js#127', '1902-01-15', "Abdülazîz b. Suûd'un Riyad'ı", 4, '3.3', "Osmanlı Necid'inde Suûdî yükselişin başı; 1913'te Lahsa'yı Osmanlı'dan alacak güç"],
  ['olaylar_ok109.js#0', '1918-10-28', "Çekoslovakya'nın bağımsızlık", 3, '3.3', "Habsburg ardılı; Osmanlı topraklarıyla bağı yok denecek kadar az"],
  ['olaylar_ok109.js#4', '1918-11-11', 'Avusturya-Macaristan mirasının', 4, '3.3', "Budin, Erdel, Belgrad dahil eski Osmanlı Rumelisi'nin ardıl devletlere toplu geçişi"],
  ['olaylar_ok109.js#6', '1918-12-01', 'Sırp-Hırvat-Sloven Krallığı', 4, '3.3', "Bosna, Sırbistan ve Erdel'i kapsayan iki Balkan devletinin kuruluşu — eski Osmanlı toprağı"],
  ['olaylar_ok109.js#10','1919-11-27', 'Neuilly Antlaşması', 4, '3.3', "Batı Trakya (Gümülcine, İskeçe, Dedeağaç) Bulgaristan'dan çıktı — Türk sınırını belirleyen düzen"],
  // ---- PAKET-KRON3 §2.1 · kalan 9'un `onem`i OLMAYAN tek maddesi (kapsam zaten dis) ----
  ['olaylar_ek16.js#15', '1861-02-13', 'Gaeta Kuşatması', 3, 'KRON3-2.1', "İki Sicilya'nın çöküşü; Osmanlı ile ilgisi zayıf (KRON3'ün kendi hükmü)"],
];
