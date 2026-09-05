// =====================================================================
// 1923 SINIRLARI — HİMAYE DÜZELTMESİ (Mısır emsali: s: yerel + isg: ingiltere)
// Kaynak: denetim/YAMA-1923-DUZELTME-0905.json (M-2784 hükmü)
// Oturum: 1923 SINIRLARI · local_372203f2-6e71-46d2-af5e-563a5c7eca60
//
// ⚠️ Bu bir YAMA dosyasıdır. `data/`e DOKUNMADIM — koşu 5b canlı, `denetim/`
//    altına yazıldı (M-2776 biçimi, koşu bitince koordinatör taşıyacak).
//
// YÖNTEM: M-2784'ün verdiği emsal — Mısır'da atlas himayeyi `s:` DEĞİL
// `isg:` ile ifade ediyor (Kahire: v:1805-1914 Osmanlı'ya tâbi, isg:1882-1914
// İngiltere işgali, s:1914-1923 ancak sahiplik). Aşağıdaki 4 nokta TDV ile
// doğrulanmış "himaye" (protectorate) durumunda — hiçbiri İLHAK edilmedi,
// hepsi kendi hükümdarıyla (şeyh/kral) yönetilmeye devam etti. Bu yüzden
// mevcut "s: ingiltere" segmentleri "s: <yerel kimlik>" olarak KALIYOR ve
// yanına aynı tarih aralığında bir `isg: ingiltere` ekleniyor.
// =====================================================================

window.YER_YAMA_1923_DUZELTME = [

// ── Manama (Bahreyn) — 1861'de İLHAK DEĞİL himaye ──
// TDV 'bahreyn' (CANLI, raw HTML): "Bu tarihte Osmanlılar'ın hükümranlıktan
// vazgeçmeleri üzerine İNGİLİZ HİMAYESİNE GİREN Bahreyn..." — "İLHAK" kelimesi
// HİÇ geçmiyor, "himaye" geçiyor. Mevcut nokta t:1861-05-31 zaten TDV'nin
// "21 Mayıs 1861" tarihine yakın (10 gün fark, muhtemelen farklı antlaşma
// aşaması) — GÜN'E dokunmadım, yalnız ETİKETİ düzelttim.
{ ad:"Manama (Bahreyn)",
  s:[{f:"1417-01-01",t:"1521-01-01",d:"cebri"},
     {f:"1521-01-01",t:"1602-01-01",d:"portekiz"},
     {f:"1602-01-01",t:"1717-01-01",d:"safevi"},
     {f:"1717-01-01",t:"1753-01-01",d:"umman"},
     {f:"1753-01-01",t:"1783-01-01",d:"zend"},
     {f:"1783-01-01",t:"1923-10-29",d:"bahreyn"}],
  isg:[{f:"1861-05-31",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"TDV, madde: bahreyn — \"İngiliz himayesine giren Bahreyn\" (ilhak değil himaye). Mevcut sahiplik (bahreyn) 1861 sonrası da KORUNDU, İngiltere isg: olarak eklendi (Mısır emsali).",
  neden:"" },

// ── Doha (Katar) — 1916'da İLHAK DEĞİL himaye ──
// TDV 'katar' (CANLI, raw HTML): "3 Kasım 1916'da Katar Emîri Abdullah ile
// ... himaye antlaşması imzaladılar" — mevcut noktanın t:1916-11-03'ü TDV'nin
// gününe BİREBİR UYUYOR. Yalnız etiket düzeltildi, gün zaten doğruydu.
{ ad:"Doha (Katar)",
  v:[{f:"1871-09-20",t:"1913-07-29",k:"Sânî emirliği (Osmanlı kazâsı)"}],
  s:[{f:"1913-07-29",t:"1923-10-29",d:"katar"}],
  isg:[{f:"1916-11-03",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"TDV, madde: katar — \"3 Kasım 1916'da Katar Emîri Abdullah ile ... himaye antlaşması\" (ilhak değil himaye, tarih BİREBİR eşleşti). Mevcut sahiplik (katar) korundu, İngiltere isg: olarak eklendi.",
  neden:"" },

// ── Kuveyt — 1914'te İLHAK DEĞİL himaye ──
// TDV 'kuveyt' (CANLI, raw HTML): "İngiltere savaşta Basra'yı ele geçirince
// (22 Kasım 1914) Küveyt'in KENDİ HİMAYESİNDE olduğunu ilân etti" — mevcut
// noktanın f:1914-11-22'si TDV'nin gününe BİREBİR UYUYOR.
{ ad:"Kuveyt",
  s:[{f:"1716-01-01",t:"1795-04-01",d:"benihalid"},
     {f:"1914-11-22",t:"1923-10-29",d:"kuveyt"}],
  v:[{f:"1795-04-01",t:"1871-01-01",k:"Sabah emirliği (Osmanlı himayesinde)"},
     {f:"1871-01-01",t:"1914-11-22",k:"Sabah emirliği (Osmanlı kazâsı)"}],
  isg:[{f:"1914-11-22",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"TDV, madde: kuveyt — \"İngiltere ... (22 Kasım 1914) Küveyt'in kendi himayesinde olduğunu ilân etti\" (ilhak değil himaye, tarih BİREBİR eşleşti). devletler.js'te zaten VAR olan `kuveyt` künyesi kullanıldı (yeni künye gerekmedi). İngiltere isg: olarak eklendi.",
  neden:"" },

// ── Mengo (Buganda) — 1900'de İLHAK DEĞİL himaye ──
// TDV 'uganda' (CANLI, raw HTML): Buganda kralı Mwanga'ya "himaye antlaşması
// imzalattılar" — ve metin 1922'de Buganda Müslümanlarının kendi okullarını
// açtığını anlatıyor, yani kendi iç idaresi 1920'lerde de SÜRÜYORDU.
// Mevcut noktanın t:1900-01-01'i muhtemelen 1900 Buganda Antlaşması'na
// (iyi bilinen tarihî olay) işaret ediyor — GÜNE dokunmadım.
{ ad:"Mengo (Buganda)",
  s:[{f:"1300-01-01",t:"1923-10-29",d:"buganda",kaynak:"uganda"}],
  isg:[{f:"1900-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"TDV, madde: uganda — Buganda kralı Mwanga ile \"himaye antlaşması\" imzalandı (ilhak değil), 1922'de Buganda Müslümanlarının kendi okulları açması iç idarenin sürdüğünü gösteriyor. İngiltere isg: olarak eklendi.",
  neden:"" }

];

// =====================================================================
// 🔴 RİCA — GERİ ÇEKME: oniki-ada-italyan "8 nokta düzeltmesi" YANLIŞTI
// =====================================================================
// M-2778/M-2784'te "21 noktanın 6'sı osmanli + 2'si yunanistan YANLIŞ"
// dedim — KUTU HATASIYDI. Gerçek Dodecanese adaları (Rodos, Kalimnos,
// Karpatos, Sömbeki/Simi, İleryoz/Leros, İstanköy/Kos) TEK TEK adıyla
// arandı: HEPSİ ZATEN 1923-10-29'da 'italya' gösteriyor, HİÇBİRİ yanlış
// değil. Kutum (35,3-37,7K/26,0-29,0D) yanlışlıkla Muğla ili kıyı
// kasabalarını (Datça·Bodrum·Marmaris·Muğla·Milas·Balat — doğru 'osmanli')
// ve Kuzey Ege adalarını (İkarya·Fourni — doğru 'yunanistan', 1912'den beri)
// da yakalamış; Dodecanese ile HİÇ ilgileri yok. DÜZELTME YAPILMAYACAK.
