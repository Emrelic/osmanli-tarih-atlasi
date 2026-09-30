// ============================================================================
// PAKET-0036 (SONNET HAZIR KITA 105) — B6 / Değişmez 2y triyajı
//
// Ad alani P0036 (CLAUDE.md §7). arac/_yer_eslesme_ok102.py'nin ürettiği
// "33 GERÇEK ADAY" (>600 km yer/madde eşleşme mesafesi) listesinden üç
// tanesi EKSİK MADDE (madde hiç yok, yeni yazıldı, TDV kaynaklı) çıktı —
// kalanı denetim/HUKUM-P0036.json'da ayrı ayrı gerekçelendirildi (çoğu
// antlaşma/ferman maddesinin tek yer_id ile çok yer devretmesi TASARIM
// sınırı). Gyula (Göle) 1566 adayı için TDV/akademik kaynak BULUNAMADI —
// forum/blog kaynakları çıktı (kırmızı çizgi, §4), o yüzden madde
// YAZILMADI; HUKUM'da "bulunamadı" olarak ayrı işaretlendi.
// ============================================================================
window.OLAYLAR_P0036 = [

{ t:"1463-01-01", kesinlik:"yil", k:"kurulus", etiket:["askeri","konu-askeri","konu-siyasi","konu-imar"], b:"Kilitbahir Kalesi'nin inşası — Çanakkale Boğazı'nın kontrolü", gun:"867 (1463) inşa görevi, 869 (1464-65) tamamlanma (Kritovulos, TDV) · Evliya Çelebi 856/1452 der", yer:"Kilitbahir, Çanakkale Boğazı", yer_id:"Kilitbahir", kisiler:"II. Mehmed (Fâtih)",
  d:"Fâtih Sultan Mehmed, Çanakkale Boğazı'nın deniz geçişini denetim altında tutmak için Rumeli yakasında Kilitbahir Kalesi'ni yaptırdı; karşı (Anadolu) yakadaki Kal'a-i Sultâniyye ile birlikte boğazın en dar yerini topla tutan bir çift oluşturdu. Kalenin ne zaman yapıldığı konusunda iki rivayet vardır. Evliya Çelebi kalenin İstanbul'un fethinden önce, 856 (1452) yılında inşa edildiğini yazar. TDV İslâm Ansiklopedisi ise kaleyi fetihten sonra yapılmış kabul eder: dönemin tarihçisi Tursun Bey iki kalenin İstanbul'un fethinin ardından yapıldığını anlatır, Kritovulos da Gelibolu ve Bolayır valisi Yâkub Bey'in 867 (1463) yılında bu işle görevlendirildiğini ve inşaatın 869'da (1464-65) tamamlandığını bildirir. Kale, Kanûnî Sultan Süleyman döneminde tamir edilip bir kule eklenerek genişletildi (948/1541 tarihli kitâbe).", ic_not_d:"13 Eylül 2026 · KART-MADDE-CELISKI-0913: eski d 'henüz İstanbul'u almadan önce … inşa ettirdi' diyerek YALNIZ Evliya rivayetini veriyordu; eski ic_not_d 'fark madde metninde açıkça belirtilir' diyordu ama metinde yoktu. merak.js `canakkale-hisar-ve-zincir` kartıyla zıt düşüyordu. TDV `kilitbahir-kalesi` (200, gövde okundu) tanımı: 'Çanakkale Boğazı'nın Rumeli yakasında İstanbul'un fethinden sonra yapılmış kale.' Gövde: 'Evliya Çelebi, İstanbul'un fethinden hemen sonra yapıldığı tahmin edilen kalenin fetihten önce 856'da (1452) inşa edildiğini belirtir' · Kritovulos '867 (1463) … görevlendirildiğini, 869 (1464-65) … tamamlanmış olduğunu'. ⇒ TDV'nin tercihi fetih SONRASI; madde iki rivayeti okuyucuya söyler, TDV'ninkini ağırlıklı verir. 17 Eyl 2026: yerleşimle BİRLİKTE 1463'e alındı (KOSU10-SONRASI §5-0 · YAMA-0052B-DEVIR #1-2 · KOSU13-YAMA). Eski not: 't 1452-01-01 korundu, 1463'e taşımak kırılmayı maddesiz bırakır' — yerleşim de taşındığı için geçersiz. İZ (koşu sonrası, yerleşim): kur/d 1452 Evliya rivayetine dayanıyor, TDV'nin tercihiyle 1463/1465 olmalı; madde onunla birlikte taşınır. Ayrıca olaylar_ek.js 1366-08-01 ve 1376-09-01 maddeleri 'aynı tarihte elden çıkan/katılan yerleşimler: Kilitbahir' diyor — kur:1452 ile çelişik, o maddelerin metni ayrıca bakılmalı.",
  kaynak:"kilitbahir-kalesi", duygu:["🏛"] },

{ t:"1884-05-01", k:"kayip", etiket:["toprak-kayip","konu-askeri"], b:"Berber'in Mehdî kuvvetlerinin eline geçmesi — Nil yolunun kesilmesi", gun:"Mayıs 1884", yer:"Berber, Sudan (Nil kıyısı)", yer_id:"Berber", kisiler:"Muhammed Ahmed el-Mehdî",
  d:"Sudan'da Mehdî hareketinin yayılması sürerken, Nil kıyısındaki Berber kasabası ve çevresi Mayıs 1884'te Mehdî'ye bağlı kuvvetlerin eline geçti.", ic_not_d:"TDV'nin `mehdiler--sudan` maddesine göre bu, Nil boyunca kuzeye giden ana yolun kesilmesine yol açtı — Hartum'daki General Gordon'un kuzeyle bağlantısını koparan kritik bir dönüm noktasıydı. Berber o güne kadar Mısır (Kavalalı hânedanı) tâbiliğinde bir sancaktı; TDV yalnız ay veriyor, gün belirtmiyor.",
  kaynak:"mehdiler--sudan", duygu:["😔"] },

// UYGULA-OLAYLAR-0930 · UYGULA-YERLESIM-0930 M-5608 B4: Doha + Katar dolgusu 1868'den s:katar — maddesizdi.
{ t:"1868-01-01", kesinlik:"yil", k:"siyaset", kapsam:"dis", etiket:["siyaset","diplomasi","konu-siyasi","konu-diplomasi"], b:"Katar'da Âl-i Sânî öne çıktı — İngiliz müdahalesi ve Bahreyn'e vergi", gun:"1868 sonbaharı", yer:"Doha, Katar", yer_id:"Doha (Katar)", kisiler:"Muhammed b. Sânî",
  d:"Bahreyn Şeyhliği ile Suud Emirliği adına bölgede vergi tahsildarlığı yapan Âl-i Sânî 1860'lardan itibaren Katar siyasetinde belirleyici oldu. Necid'deki Suud ailesi ile Bahreyn'deki Halîfe ailesi içindeki çekişmeler Katar'ı İngilizler için önemli kılınca İngiltere 1868 sonbaharında Katar'a gemi gönderdi ve Muhammed b. Sânî'yi Bahreyn emîrlerine vergi ödemeye mecbur bıraktı. Bu müdahale, Bağdat valisi Midhat Paşa'nın 1871 Lahsâ seferine giden süreci başlattı.",
  ic_not_t:"TDV katar: 'İngilizler … 1868 sonbaharında Katar'a gemi göndererek Muhammed b. Sânî'yi Bahreyn emîrlerine vergi vermeye mecbur bıraktılar' — mevsim verir, ay/gün vermez ⇒ 1868-01-01 + kesinlik:yil (sonbahar metinde). ⚠️ TDV cümlesi Katar'ın BAHREYN nüfuzunda tutulduğunu söyler; yerleşim tarafının s:katar kararı bu cümleye değil Âl-i Sânî'nin 1860'lardaki yükselişine dayanıyorsa kimlik tartışması UYGULA-YERLESIM-0930'ındır.",
  kaynak:"katar", duygu:["⚓"] },

{ t:"1913-07-29", k:"antlasma", etiket:["toprak-kayip","siyaset","konu-askeri","konu-siyasi","konu-diplomasi"], b:"Katar'dan Osmanlı feragati — Londra Sözleşmesi", gun:"29 Temmuz 1913", yer:"Londra, Katar (Doha)", yer_id:"Doha (Katar)", kisiler:"Şeyh Kāsım b. Sânî",
  d:"29 Temmuz 1913'te Londra'da imzalanan İngiliz-Osmanlı sözleşmesiyle Osmanlı Devleti, Katar yarımadası üzerindeki bütün taleplerinden feragat etti; yarımadanın Şeyh Kāsım b. Sânî ve haleflerince yönetilmesi kabul edildi.", ic_not_d:"TDV'nin `katar` maddesine göre sözleşme resmen yürürlüğe girmedi ama fiilî durumu tescil etti — Osmanlı garnizonunun bölgeden tam çekilişi I. Dünya Savaşı ile tamamlandı. Doha (Bida) kaydında bu tarih zaten bir `v:` döneminin bitişi olarak duruyordu; bu madde o kırılmanın kaynağını taşır.",
  kaynak:"katar", duygu:["😔"] },

// UYGULA-OLAYLAR-0930 (0081/H-0040): yukarıdaki başlık notunun "Gyula (Göle) 1566 için
// TDV/akademik kaynak BULUNAMADI" hükmü AŞILDI — TDV `gyula`/`gole` slug'ları ölü (302) ama
// olay YERİN değil KİŞİNİN maddesinde duruyor (CLAUDE.md §4, D217): TDV `pertev-pasa`.
{ t:"1566-09-01", k:"fetih", etiket:["toprak-kazanc","savas","konu-askeri"], b:"Gyula (Göle) Kalesi'nin teslimi — Pertev Paşa'nın Tımışvar serhaddi seferi", gun:"15 Safer 974 (1 Eylül 1566)", yer:"Gyula (Göle), Tımışvar serhaddi", yer_id:"Gyula (Göle)", kisiler:"Pertev Paşa",
  d:"Kanûnî Sultan Süleyman'ın Zigetvar seferi sırasında Pertev Paşa, Tımışvar vilâyeti sınırındaki kalelerden Göle'yi (Gyula) almak üzere serdar tayin edildi; Tımışvar beylerbeyi ile Belgrad sancakbeyinin bütün kuvvetleri emrine verildi. Mayıs 1566'da yeniçeri, silâhdar ve topçularla İstanbul'dan ayrılan Pertev Paşa, bir aydan uzun süren kuşatmanın ardından Göle'yi ve çevresindeki birkaç kaleyi 1 Eylül 1566'da ele geçirdi. Savaşta yararlılık gösterenlerin tımar ve zeametleri artırıldı.",
  ic_not_t:"TDV pertev-pasa: '15 Safer 974'te (1 Eylül 1566) Göle ve civarındaki birkaç kaleyi bir aydan fazla süren kuşatmanın ardından ele geçirdi'. ⚠️ Harita kırılması Gyula d:1566-09-02 (yerlesimler_ek5.js, kaynaksız) — TDV günü 09-01; UYGULA-YERLESIM-0930'a bildirildi.",
  kaynak:"pertev-pasa", duygu:["⚔️"] }

];
