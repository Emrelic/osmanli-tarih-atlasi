// -*- coding: utf-8 -*-
// YER_YAMA_TIMBUKTU — KRONOLOJI BOS KUNYE oturumu, 5 Eylül 2026, 1.MURAT sevki (M-2845)
//
// ⚠️ MEVCUT KAYDA EK — yeni nokta DEĞİL. Atlasta `Timbuktu` (16,775 / -3,009) VAR.
//    Uygulayıcı: `py arac/_sahiplik_uygula.py` (mevcut kayıtları günceller).
//
// ═══════════ NİÇİN VAR — 223 YILLIK SAHİPSİZ BANT ═══════════
// Ölçtüm: kaydın `s:` zinciri **1700-01-01'de bitiyor** ve 1923'e kadar
// sahiplik YOK (mali-imparatorlugu 1281-1430 · songhay 1468-1591 · fas 1591-1700).
// Bu yama o bandın **1760-1923 arasını** kapatıyor — İKİ DELİK HARİÇ:
// 1700-1760 (60 yıl · kimlik yok) ve 1893-1894 (1 yıl · künye penceresi).
// İkisinin de gerekçesi dosyanın SONUNDA.
// 🔴 1700-1760 arası KAPANMADI — sebebi aşağıda, ve KİMLİK YOKLUĞUDUR.
//
// ═══════════ KAYNAK — TDV `tinbuktu`, gövde açıldı, alıntılar AYNEN ═══════════
// slug bizzat sınandı: `tinbuktu` 200 · `timbuktu` 200 (ikisi de canlı)
//   «1760'ta Tevârikler'in zaptettiği Tinbüktü on yıl sonra Segu
//    Bambaraları'nın hâkimiyetine girdi.»
//   «Tevârikler 1792'de yönetimi tekrar aldılar.»
//   «1833'te Ahmedü Lobbo (Seku Amadü) tarafından kurulan Mâsînâ Sultanlığı…»
//   «1894'te Fransız işgal ordusu şehri Batı Afrika sömürgesine ilhak etti.»
//   «Ebü'l-Mahallî liderliğinde 1163'te (1750) Tinbüktü'de yönetimi ele geçirdiler.»
//
// 🔴 HASSASİYET: TDV bu bandın TAMAMINDA yalnız YIL veriyor, GÜN vermiyor
//    ⇒ bütün dönem uçları `YYYY-01-01`. Gün UYDURULMADI.
// 🟡 1770 tarihi TDV'nin KENDİ aritmetiğinden: «1760'ta … on yıl sonra».
//    Metinde «1770» rakamı GEÇMİYOR — türetilmiş bir yıldır, damgalıyorum.
// 🟢 1862-1893 dilimi İKİNCİ TURDA DOĞRULANDI — «DOĞRULANMADI» damgası
//    KALDIRILDI. TDV gövdesi Massina→Tekrûr geçişini AYNEN veriyor;
//    alıntı dosyanın sonunda. Dönem BAŞI (1862) `massina` künyesinden,
//    dönem SONU (1893) `tekrur` künyesinden — ikisi de kardeş künye,
//    ikisi de kaynaklı.
//
// ═══════════ KİMLİK SINAVI — dördü de İKİ YERDE birden ═══════════
//   tuareg-ivellemmedan  künye 1281-1899 ✓   renkler.py TANIMLI ✓
//   bambara              künye 1650-1861 ✓   renkler.py TANIMLI ✓
//   massina              künye 1818-1862 ✓   renkler.py TANIMLI ✓
//   tekrur               künye 1852-1893 ✓   renkler.py TANIMLI ✓
//   fransa-cumhuriyet    künye 1792-1923 ✓   renkler.py TANIMLI ✓
// 🔴 HİÇBİRİ HARİTA DELİĞİ AÇMAZ — sevkin şartı buydu, beşini de sınadım.
//
// 🔴 VE BİR YAZIM TUZAĞI: önce `tuareg-iwellemmedan` (w ile) aradım, «YOK»
//    çıktı. Atlas onu **`tuareg-ivellemmedan`** (v ile) yazıyor. Dar arama
//    «kimlik yok» dedirtecekti; bölge taraması kurtardı.
// 🔴 VE KULLANMADIĞIM BİR KİMLİK: `tuareg-ahaggar` künyesi VAR ve rengi VAR —
//    ama o Cezayir'in Ahaggar'ıdır, Timbuktu'nun 1500 km kuzeydoğusunda.
//    Ad benziyor diye kullanmak yanlış gövdeyi boyardı.

window.YER_YAMA_TIMBUKTU = [
  { ad: "Timbuktu",
    s: [
      { f: "1760-01-01", t: "1770-01-01", d: "tuareg-ivellemmedan" },
      { f: "1770-01-01", t: "1792-01-01", d: "bambara" },
      { f: "1792-01-01", t: "1833-01-01", d: "tuareg-ivellemmedan" },
      { f: "1833-01-01", t: "1862-01-01", d: "massina" },
      { f: "1862-01-01", t: "1893-01-01", d: "tekrur" },
      { f: "1894-01-01", t: "1923-10-29", d: "fransa-cumhuriyet" }
    ],
    kaynak: "tinbuktu — TDV, gövde açıldı; alıntılar dosya başlığında AYNEN. 1770 TÜRETİLMİŞ («on yıl sonra», metinde o rakam geçmiyor). 1862-1893 dilimi DOĞRULANDI (TDV: «1860'lı yıllarda üçüncü Tekrûr Devleti'nin … Ahmed Tâl'in egemenliğine geçti»); dönem uçları kardeş künyelerden (massina 1862 · tekrur 1893). 1893-1894 arası BOŞ — gerekçe dosya sonunda."
  }
];

// ═══════════ 🔴 KAPANMAYAN: 1700-01-01 … 1760-01-01 (60 yıl) ═══════════
// TDV o bandı Arma paşalığıyla anlatıyor: «Merakeşli askerlerin yerli
// kadınlarla evliliğinden doğan ve 'arma' denilen çocukları…» ve
// «Ebü'l-Mahallî liderliğinde 1163'te (1750) Tinbüktü'de yönetimi ele geçirdiler.»
//
// 🔴 AMA `arma` DİYE BİR KÜNYE YOK ve rengi de YOK (ikisini de ölçtüm).
// 🔴 VE BU BİR `bos:` DEĞİLDİR. Sevkin ⑤. şartı: *bir rotasyon "kimsenin
//    değildi" demek DEĞİLDİR.* Burada da öyle: Arma paşalığı bir YÖNETİMDİR,
//    boşluk değil. `bos:"devletsiz"` yazmak kaynağın söylediğinin TERSİ olurdu.
// ⇒ Bu 60 yıl için gereken şey beyan değil KÜNYE: `arma` (Tinbüktü Paşalığı)
//    künyesi açılmalı ve renk verilmeli. Karar koordinatörün.
// 🟡 Kolay olan `fas`ı 1760'a uzatmaktı — YAPMADIM: TDV Arma'yı Merakeşli
//    askerlerin yerli kadınlardan doğan çocukları diye tanımlıyor, yani
//    Fas'ın kendisi değil ondan TÜREYEN ayrı bir yönetici zümre.
//
// ⇒ SONUÇ: 223 yıllık sahipsiz bant **61 yıla** indi (%73 kapandı) —
//   60 yıl kimlik eksiği (1700-1760) + 1 yıl künye penceresi (1893-1894).
//   🔴 «60» değil «61» yazıyorum: bir yıllık deliği saymamak, onu
//   görünmez kılmak olurdu.

// 🔴 NOT: aşağıdaki iki bölüm dosyanın BAŞINI da düzeltti — bir düzeltmeyi
//    yalnız sona eklemek, dosyayı kendi içinde çelişkiye sokuyordu.
//
// ═══════════ 🔴 DÜZELTME — KENDİ YAMAMDA HAYALET DEVLET RİSKİ BULDUM ═══════════
// İlk sürümde `tekrur` dönemini **1894-01-01**'e kadar yazmıştım. Ölçtüm:
//     `tekrur` künyesi  1852-09-01 → **1893-01-01**
// ⇒ Dönem künyenin ÖMRÜNÜ BİR YIL AŞIYORDU. `CLAUDE.md §3.5`in tam vakası:
//   *"yeni bir `s:` dönemi yazarken devletin ömrünü kontrol et"* — hayalet
//   devlet böyle doğar. Kendi yamamda ürettim, kendim yakaladım.
// ⇒ Dönem `1893-01-01`de kapatıldı.
//
// 🔴 VE BU BİR BOŞLUK DOĞURDU: 1893-01-01 … 1894-01-01 (bir yıl) SAHİPSİZ.
//    Kapatmadım ve sebebi: TDV Fransız ilhakını **1894** diyor, `tekrur`
//    künyesi **1893**'te bitiyor. İkisinin arasını doldurmak için elimde
//    KAYNAK YOK. `fransa-cumhuriyet`i 1893'e çekmek kolaydı — kaynağın
//    söylemediğini söyletmek olurdu.
//    🟡 Not: `tekrur` künyesinin kendi kaynağı TDV `el-hac-omer`den
//    «1893-1894 yıllarında Fransızlarca işgal» diye ARALIK aktarıyor —
//    yani bir yıllık belirsizlik kaynağın KENDİSİNDE var, veride değil.
//
// ═══════════ 🟢 `tekrur` DİLİMİ DOĞRULANDI — damga kaldırıldı ═══════════
// İlk sürümde 1862-1894 dilimini 🟡 «gövdede geçiyor, aynen alınamadı» diye
// damgalamıştım. İkinci turda gövdeden AYNEN alındı:
//   «1833'te Ahmedü Lobbo (Seku Amadü) tarafından kurulan Mâsînâ Sultanlığı,
//    1860'lı yıllarda üçüncü TEKRÛR DEVLETİ'nin kurucusu el-Hâc Ömer'in oğlu
//    Ahmed el-Kebîr el-Medenî'nin (Ahmed Tâl) egemenliğine geçti.»
// 🟢 VE ÖNEMLİ: **«Tekrûr Devleti» TDV'nin KENDİ terimidir.** Atlasın
//    `tekrur` kimliği bir çeviri tercihi değil, kaynağın kullandığı ad.
//    ⇒ Tukulör / Toucouleur / Umarî / Segu Tukulör = **Tekrûr**. Bir sonraki
//    oturum ad benzemezliğinde takılmasın diye buraya yazıyorum.
// 🟡 HASSASİYET: TDV geçişi «1860'lı yıllarda» diyor — ON YIL, yıl değil.
//    Dönem başı `1862-01-01`, `massina` künyesinin kendi bitişinden alındı
//    (o künyenin kaynağı Cambridge History of Africa: Umar Taal'ın birlikleri
//    Hamdullahi'yi 1862'de aldı). ⇒ Yıl TDV'den DEĞİL, kardeş künyeden;
//    ve iki kaynak birbiriyle ÇELİŞMİYOR («1860'lı yıllar» 1862'yi kapsıyor).
