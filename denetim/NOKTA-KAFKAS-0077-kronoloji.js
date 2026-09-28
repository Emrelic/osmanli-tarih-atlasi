// ============================================================================
// KRONOLOJİ TASLAĞI — NOKTA-KAFKAS-0077 (28 Eylül 2026) · YILDIRIM BAYEZIT M-5325 "kronoloji teslimi"
// ============================================================================
// 🔴 BU DOSYA TASLAKTIR, data/ ALTINDA DEĞİL — bilerek: data/ altına konsa index.html'e bağlanana
//    kadar ikinci bir "yetim veri dosyası" olurdu. Koordinatör uygun görürse
//    `data/olaylar_p77_kafkas.js` adıyla taşır ve index.html'e <script> satırını ekler.
//    Ad alanı: window.OLAYLAR_P77_KAFKAS (CLAUDE.md §7).
// Şema data/olaylar_p0917dunya.js ile birebir (t · k · etiket · b · gun · yer · kisiler · d ·
//    kaynak · duygu · yer_id). `kaynak:` TDV slug'ı ya da akademik künye — hangisi olduğu yazılı.
//
// ÖLÇÜLDÜ (denetim/NOKTA-KAFKAS-0077-d2.py, denetle.degismez2'nin KENDİSİ, bellekte):
//   Çayeli + Gümüşhane eklenince Değişmez 2 d:/v:  kırılma 591 → 595 · açık 0 → 0
//     (mevcut maddeler zaten ±30 günde: Bitlis 1916-03-01, Erzincan 07-24, Trabzon 1918-02-24,
//      Erzurum 03-12) — ateşleme dalı 1 yeni açık yakaladı, ölçü çalışıyor.
//   2s (s:, yer şartlı) ham açık +4: 1916-03-05 Çayeli · 1916-07-19 Gümüşhane · 1918-03-09 Çayeli
//     · 1473-08-11 Gümüşhane (Otlukbeli maddesi Gümüşhane'yi anmıyor). ① ② ③ aşağıda bu üçünü
//     ADIYLA anarak kapatır; 1473 bu taslağın kapsamı dışında (borç).
// ① ② ③ iki noktamın maddeleri; ④-⑫ koordinatörün §6 düzeltmelerinin (Hopa, Kars, Ardahan,
//   Artvin, Batum, Tiflis) ihtiyaç duyacağı maddeler. Kars 1918-05-25 → 04-25 düzeltmesi
//   koordinatörün kalemi (mevcut madde olaylar_ek5.js:560) — burada YENİDEN YAZILMADI.
// ============================================================================
window.OLAYLAR_P77_KAFKAS = [

// ① Kıyı: Pazar · Çayeli · Rize · Of (H-0025 sıralılığı)
{ t:"1916-03-08", k:"kayip", etiket:["toprak-kayip","savas","konu-askeri"], b:"Rize'nin Rus işgali: Doğu Karadeniz kıyısının düşüşü", gun:"8 Mart 1916", yer:"Rize, Pazar, Çayeli, Of", kisiler:"", d:"7 Şubat 1916'da Batum'dan Arhavi istikametinde taarruza geçen Rus birlikleri kıyı boyunca batıya ilerleyerek 4 Mart'ta Pazar'ı, 5 Mart'ta Çayeli'yi, 8 Mart'ta Rize'yi, 26 Mart'ta Of'u işgal etti. Trabzon bu ilerleyişin sonunda, 18 Nisan 1916'da karadan alındı.", kaynak:"rize · Çaykıran 2021, Askerî Tarih Araştırmaları Dergisi, doi 10.46953/askeritarih.814421", duygu:["😔"], yer_id:"Rize" },

// ② İç hat: Bayburt · Gümüşhane · Kelkit (H-0028 sıralılığı — Erzincan'dan ÖNCE)
{ t:"1916-07-16", k:"kayip", etiket:["toprak-kayip","savas","konu-askeri"], b:"Bayburt ve Gümüşhane'nin Rus işgali", gun:"16 Temmuz 1916", yer:"Bayburt, Gümüşhane, Kelkit", kisiler:"", d:"Kop savunmasının kırılmasıyla Rus birlikleri 16 Temmuz 1916'da Bayburt'u, 19 Temmuz'da Gümüşhane'yi, 22 Temmuz'da Kelkit'i işgal etti; Erzincan bunların ardından, 24 Temmuz'da düştü.", kaynak:"gumushane · M. Sarı, Millî Mücadele Döneminde Bayburt, TÜBA Millî Mücadele'nin Yerel Tarihi c.9 bl.7 · Çaykıran 2021 · Kelkit Kaymakamlığı (kurumsal, 22 Temmuz)", duygu:["😔"], yer_id:"Bayburt" },

// ③ Geri alış: Kelkit · Bayburt · Gümüşhane (ve kıyı: Rize · Çayeli · Hopa)
{ t:"1918-02-19", k:"fetih", etiket:["toprak-kazanc","savas","konu-askeri"], b:"Bayburt ve Gümüşhane'nin kurtuluşu", gun:"19 Şubat 1918", yer:"Bayburt, Gümüşhane, Kelkit", kisiler:"", d:"Erzincan Mütarekesi'nin feshiyle başlayan ileri harekâtta Kelkit 17 Şubat'ta, Bayburt 19 Şubat'ta kurtarıldı; Gümüşhane'deki Rus işgali 28 Şubat 1918'de sona erdi.", kaynak:"gumushane · M. Sarı, TÜBA c.9 bl.7 (Bayburt 19 Şubat) · Kelkit Kaymakamlığı (kurumsal, 17 Şubat)", duygu:["🎉"], yer_id:"Bayburt" },

{ t:"1918-03-02", k:"fetih", etiket:["toprak-kazanc","savas","konu-askeri"], b:"Rize'nin kurtuluşu: Doğu Karadeniz kıyısının geri alınışı", gun:"2 Mart 1918", yer:"Rize, Çayeli, Hopa", kisiler:"", d:"Rusların çekilmesiyle Türk birlikleri kıyı boyunca doğuya ilerledi: Rize 2 Mart, Çayeli 9 Mart, Hopa 14 Mart 1918'de yeniden Osmanlı idaresine girdi.", kaynak:"KURUMSAL (akademik teyit YOK): Rize Ticaret ve Sanayi Odası · Çayeli Kaymakamlığı · Hopa Kaymakamlığı", duygu:["🎉"], yer_id:"Rize" },

// ④ Hopa — 1878'de Osmanlı'da kaldı, 1915'te işgal edildi (ek27 Hopa düzeltmesinin maddesi)
{ t:"1915-02-23", k:"kayip", etiket:["toprak-kayip","savas","konu-askeri"], b:"Hopa'nın Rus işgali", gun:"23 Şubat 1915", yer:"Hopa", kisiler:"", d:"1878 Berlin Antlaşması'ndan sonra Lazistan sancağında Osmanlı kazası olarak kalan Hopa, Birinci Dünya Savaşı'nda Rus birliklerince işgal edildi; işgal 14 Mart 1918'e kadar sürdü.", kaynak:"KURUMSAL: Hopa Kaymakamlığı · 1878 statüsü: lazlar (TDV) · Z. Yücetürk, Karadeniz Araştırmaları XVII/65 (2020)", duygu:["😔"], yer_id:"Hopa" },

// ⑤ Aşkale (Erzurum'dan 8 gün sonra)
{ t:"1916-02-24", k:"kayip", etiket:["toprak-kayip","savas","konu-askeri"], b:"Aşkale'nin Rus işgali", gun:"24 Şubat 1916", yer:"Aşkale", kisiler:"", d:"Erzurum'u 16 Şubat 1916'da alan Rus kuvvetleri batıya ilerleyerek 24 Şubat'ta Aşkale'yi işgal etti. Aşkale 3 Mart 1918'de kurtarıldı.", kaynak:"M. Sarı, TÜBA c.9 bl.7 (24 Şubat) · Aşkale Kaymakamlığı (kurumsal, 3 Mart 1918; işgal için '16 Şubat' der — Erzurum'un günü, akademik esas)", duygu:["😔"], yer_id:"Aşkale" },

// ⑥ Mondros sonrası — Artvin ve Batum İngiliz işgalinde
{ t:"1918-12-17", k:"kayip", etiket:["toprak-kayip","isgal","konu-askeri"], b:"Artvin'in İngiliz işgali", gun:"17 Aralık 1918", yer:"Artvin", kisiler:"", d:"Mondros Mütarekesi gereği Osmanlı ordusunun 1914 sınırlarının gerisine çekilmesiyle boşaltılan Artvin İngilizlerce işgal edildi; İngiliz işgali 1920 Nisanına kadar sürdü, ardından şehir Gürcistan'ın eline geçti.", kaynak:"artvin", duygu:["😔"], yer_id:"Artvin" },

{ t:"1918-12-24", k:"kayip", etiket:["toprak-kayip","isgal","konu-askeri"], b:"Batum'un İngiliz işgali", gun:"24 Aralık 1918", yer:"Batum", kisiler:"", d:"Mondros Mütarekesi ile Osmanlı Devleti Batum'dan çekilmek zorunda kalınca şehir İngilizlerce işgal edildi. İngilizler 7 Temmuz 1920'de Batum'u resmen Gürcü hükümetine devretti.", kaynak:"batum · M. Sarı, Millî Mücadele Döneminde Elviye-i Selâse, TÜBA c.9 bl.4 (7 Temmuz 1920)", duygu:["😔"], yer_id:"Batum" },

// ⑦ Kars — İngiliz baskını, Ermeni idaresi
{ t:"1919-04-30", k:"kayip", etiket:["toprak-kayip","isgal","konu-askeri"], b:"Kars'ın Ermeni idaresine devri", gun:"30 Nisan 1919", yer:"Kars", kisiler:"", d:"12 Nisan 1919'da Kars'ı basıp Cenûb-i Garbî Kafkas Hükûmeti'ni dağıtan İngilizler, 30 Nisan'da şehrin idaresini Kars Valisi yapılan Ermeni Karganof'a devretti. Aynı günlerde (20 Nisan) Gürcüler de Ardahan'ı işgal etti.", kaynak:"M. Sarı, TÜBA c.9 bl.4 · Ardahan: Motif Akademi Halkbilimi Dergisi 12/28 (2019), doi 10.12981/mahder.639022", duygu:["😔"], yer_id:"Kars" },

// ⑧ Kars'ın TBMM'ce geri alınışı
{ t:"1920-10-30", k:"fetih", etiket:["toprak-kazanc","savas","konu-askeri"], b:"Kars'ın kurtuluşu", gun:"30 Ekim 1920", yer:"Kars, Sarıkamış, Kağızman", kisiler:"Kâzım Karabekir Paşa", d:"Doğu Cephesi Komutanı Kâzım Karabekir Paşa kumandasındaki Türk ordusu Ermeni kuvvetlerini bozguna uğratarak Kars'a girdi; bölge bir buçuk yıllık Ermeni idaresinden kurtuldu. Bunu 7 Kasım'da Türk-Ermeni mütarekesi ve 3 Aralık 1920'de Gümrü Antlaşması izledi.", kaynak:"kars · kazim-karabekir · M. Sarı, TÜBA c.9 bl.4", duygu:["🎉"], yer_id:"Kars" },

// ⑨ Ardahan ve Artvin
{ t:"1921-02-23", k:"fetih", etiket:["toprak-kazanc","konu-askeri","konu-diplomasi"], b:"Ardahan ve Artvin'in geri alınışı", gun:"23 Şubat 1921", yer:"Ardahan, Artvin, Posof, Şavşat", kisiler:"Kâzım Karabekir Paşa", d:"TBMM hükümetinin 22 Şubat 1921 notası üzerine Gürcüler 23 Şubat sabahı Ardahan ve Artvin'i tahliye etti; Ardahan, Çıldır ve Posof kazalarıyla Artvin Türk ordusunca teslim alındı. Durum 16 Mart 1921 Moskova Antlaşması'yla hukukîleşti.", kaynak:"ardahan · elviye-i-selase · M. Sarı, TÜBA c.9 bl.4 (TDV artvin '27 Şubat 1921' der — çelişki bildirildi)", duygu:["🎉"], yer_id:"Ardahan" },

// ⑩ Tiflis — Gürcistan Demokratik Cumhuriyeti'nin sonu (H-0075 ②)
{ t:"1921-02-25", k:"savas", etiket:["savas","konu-askeri"], b:"Kızıl Ordu'nun Tiflis'e girişi: Gürcistan Demokratik Cumhuriyeti'nin düşüşü", gun:"25 Şubat 1921", yer:"Tiflis", kisiler:"", d:"26 Mayıs 1918'de bağımsızlığını ilân eden Gürcistan, Şubat 1921'de Sovyet Rusya tarafından işgal edildi; 25 Şubat 1921'de Bolşevikler Tiflis'e girerek Sovyet rejimini kurdu.", kaynak:"gurcistan · acara", duygu:["⚔️"], yer_id:"Tiflis" },

];
