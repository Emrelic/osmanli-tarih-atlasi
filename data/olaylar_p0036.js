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

{ t:"1452-01-01", k:"kurulus", etiket:["askeri"], b:"Kilitbahir Kalesi'nin inşası — Çanakkale Boğazı'nın kontrolü", gun:"1452", yer:"Kilitbahir, Çanakkale Boğazı", yer_id:"Kilitbahir", kisiler:"II. Mehmed (Fâtih)",
  d:"II. Mehmed, henüz İstanbul'u almadan önce Çanakkale Boğazı'nı denetim altına almak için Rumeli yakasında Kilitbahir Kalesi'ni inşa ettirdi; karşı (Anadolu) yakadaki Kal'a-i Sultâniyye ile birlikte boğazı çapraz ateşe alan bir çift oluşturdu. TDV'nin `kilitbahir-kalesi` maddesi Evliya Çelebi'ye dayanarak inşayı 856 (1452) yılına tarihler, Kritovulos ise Gelibolu-Bolayır sancak beyi Yâkub Bey'in nezaretinde işin 869'da (1464-65) tamamlandığını yazar — iki rivayet arasındaki fark madde metninde açıkça belirtilir. Kale, Kanûnî döneminde (948/1541) bir kule eklenerek genişletildi.",
  kaynak:"kilitbahir-kalesi", duygu:["🏛"] },

{ t:"1884-05-01", k:"kayip", etiket:["toprak-kayip"], b:"Berber'in Mehdî kuvvetlerinin eline geçmesi — Nil yolunun kesilmesi", gun:"Mayıs 1884", yer:"Berber, Sudan (Nil kıyısı)", yer_id:"Berber", kisiler:"Muhammed Ahmed el-Mehdî",
  d:"Sudan'da Mehdî hareketinin yayılması sürerken, Nil kıyısındaki Berber kasabası ve çevresi Mayıs 1884'te Mehdî'ye bağlı kuvvetlerin eline geçti. TDV'nin `mehdiler--sudan` maddesine göre bu, Nil boyunca kuzeye giden ana yolun kesilmesine yol açtı — Hartum'daki General Gordon'un kuzeyle bağlantısını koparan kritik bir dönüm noktasıydı. Berber o güne kadar Mısır (Kavalalı hânedanı) tâbiliğinde bir sancaktı; TDV yalnız ay veriyor, gün belirtmiyor.",
  kaynak:"mehdiler--sudan", duygu:["😔"] },

{ t:"1913-07-29", k:"antlasma", etiket:["toprak-kayip","siyaset"], b:"Katar'dan Osmanlı feragati — Londra Sözleşmesi", gun:"29 Temmuz 1913", yer:"Londra, Katar (Doha)", yer_id:"Doha (Katar)", kisiler:"Şeyh Kāsım b. Sânî",
  d:"29 Temmuz 1913'te Londra'da imzalanan İngiliz-Osmanlı sözleşmesiyle Osmanlı Devleti, Katar yarımadası üzerindeki bütün taleplerinden feragat etti; yarımadanın Şeyh Kāsım b. Sânî ve haleflerince yönetilmesi kabul edildi. TDV'nin `katar` maddesine göre sözleşme resmen yürürlüğe girmedi ama fiilî durumu tescil etti — Osmanlı garnizonunun bölgeden tam çekilişi I. Dünya Savaşı ile tamamlandı. Doha (Bida) kaydında bu tarih zaten bir `v:` döneminin bitişi olarak duruyordu; bu madde o kırılmanın kaynağını taşır.",
  kaynak:"katar", duygu:["😔"] }

];
