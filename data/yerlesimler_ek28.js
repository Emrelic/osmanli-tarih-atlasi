// =====================================================================
// VERİ SINIR 2 — 1923 sınırının ölçülmüş boşlukları
// YAPIMCI oturum: VERİ SINIR 2 · 12 Ağustos 2026
// Görev: oturumlar/VERI-SINIR-2.md
//
// ① PAYAS DÜZELTMESİ — hüküm: DOĞRULANDI
//   Kaynak: UK Cmd. 1556 "Turkey No. 2 (1921)" — Franco-Turkish Agreement
//   signed at Angora, 20 October 1921 (League of Nations Treaty Series,
//   Vol. 54, pp. 178-193), Article 8: sınır hattı "immediately south of
//   the locality of Payas" noktasından başlayıp Meidan-Ekbez'e (Suriye'de
//   kalacak) doğru ilerliyor. ⇒ Payas hattın KUZEYİNDE, yani TÜRKİYE
//   tarafında. Wikipedia "Treaty of Ankara (1921)" maddesi aynı LNTS
//   kaynağını göstererek aynı tarifi veriyor — iki bağımsız okuma örtüşüyor.
//   Kırılma günü: 1921-10-20 (imza günü) — kronolojide karşılığı VAR:
//   data/olaylar_ek5.js:425 "Ankara İtilâfnâmesi: Fransa ile barış..."
//   ⚠️ data/yerlesimler_ek27.js'teki MEVCUT Payas kaydı (satır 63-65) bu
//   düzeltmeyi YANSITMIYOR — KOORDİNATÖR/Oturum 0 o kaydı BUNUNLA
//   DEĞİŞTİRMELİ (ben ek27.js'e dokunamam, YASAK).
//
// ② 7 EKSİK NOKTA — İskenderun körfezi kuzeyi (Çukurova) + doğu sınırı
//   k:3/k:4 kararı Emre'nin çift yönlü yetkisine göre verildi:
//   "sınır ilçe/kasabalara 3. sınıf verilebilir" AMA "hak etmeyen 4. sınıf
//   yerlere bölge atfetmeyelim" (11 Ağustos). Her nokta için GEREKÇE
//   satır içinde yazılı. Kaynak bulunamayan hiçbir tarih UYDURULMADI.
//
//   🔴 ARAŞTIRMA SIRASINDA ÇÖZÜLEN KAYNAK ÇELİŞKİSİ (Hopa):
//   İlk arama "Hopa 1878'de Osmanlı'da kaldı" dedi; ikinci ve üçüncü arama
//   (sınır komisyonu tarifiyle, "sınır Esenköy'ün doğusundaki Kopmuş
//   Burnu'ndan başlar") bunu ÇÜRÜTTÜ: Hopa'nın kendisi Rus tarafında
//   kalmış. data/yerlesimler_ek27.js'teki MEVCUT Hopa kaydı (rusya
//   1878-1921) bu ikinci/üçüncü kaynakla UYUŞUYOR — yani ek27 kaydı
//   YANLIŞ DEĞİL, benim ilk kaynağım yanlıştı. Arhavi ise (Hopa'nın
//   GÜNEYBATISINDA, sınırdan uzakta) hep Osmanlı kaldı — aşağıda ⑥.
//
//   🟡 TARİH HASSASİYETİ NOTU (Dörtyol/Erzin/Yumurtalık):
//   Akademik kaynak (TÜBA, bkz ③) çok daha kesin tahliye tarihleri veriyor
//   (Dörtyol 1921-12-31, Erzin/Toprakkale 1922-01-04) — ama bu tarihlerin
//   kronolojide karşılığı YOK ve ben olaylar*.js'e yazamam. Bu yüzden
//   BİLEREK sibling kayıtla (Mersin, ek27.js:51-53) AYNI tarihi
//   (1921-10-20, Ankara İtilâfnâmesi) kullandım — Değişmez 2 açık
//   kalmasın diye. Daha kesin tarih istenirse önce olaylar*.js'e
//   1921-12-31 ve 1922-01-04 için madde eklenmeli, SONRA bu üç kayıt
//   güncellenmeli. Koordinatöre bu şekilde bildirildi.
// =====================================================================

window.YERLESIMLER_EK28 = [

// ───────── ① PAYAS DÜZELTMESİ (ek27.js:63-65'in YERİNE geçecek) ─────────
{ ad:"Payas", tur:"kale", lat:36.755, lon:36.213, g:0, k:3, m:"Halep",
  // kaynak: UK Cmd.1556 / LNTS Vol.54 pp.178-193, Ankara İtilâfnâmesi Md.8 (doğrulandı, bkz. yukarı)
  s:[{f:"1281-01-01",t:"1516-08-24",d:"memluk"},{f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet"}],
  d:[{f:"1516-08-24",t:"1918-10-30"},{f:"1921-10-20",t:"1923-10-29"}], v:[] },

// ───────── ③ ÇUKUROVA · İskenderun körfezinin KUZEY kıyısı ─────────
// Kaynak (üçü için): TÜBA "Occupation and Liberation of Adana" (Nejla
// Günay) — tuba.gov.tr yayını, hakemli akademik seri; + dergipark
// "Cebel-i Bereket Sancağı'nın İdari Yapısı (1879-1933)" (idari statü için).
// TDV bu taneciği (kaza/nahiye düzeyi) kapsamıyor — dortyol/erzin/
// yumurtalik sluglarının hepsi 302 (ölü). Akademik kaynağa geçildi, §4.

{ ad:"Dörtyol", tur:"kasaba", lat:36.845, lon:36.221, g:0, k:3, m:"Adana",
  // GEREKÇE k:3: 1909'da padişah iradesiyle Adana vilayeti Cebel-i Bereket
  // sancağına bağlı KAZA MERKEZİ oldu (öncesi Payas/Erzin'e bağlı nahiye).
  // kaynak: dergipark "Cebel-i Bereket Sancağının İdari Yapısı"; TÜBA (işgal/tahliye)
  s:[{f:"1281-01-01",t:"1516-08-24",d:"memluk"},{f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet"}],
  d:[{f:"1516-08-24",t:"1918-10-30"},{f:"1921-10-20",t:"1923-10-29"}], v:[] },

{ ad:"Erzin", tur:"kasaba", lat:36.955, lon:36.201, g:0, k:4, m:"Adana",
  // GEREKÇE k:4 (k:3 DEĞİL): 1906-1909 arası GEÇİCİ olarak Cebel-i Bereket
  // sancak merkeziydi, ama 1909 reorganizasyonuyla Dörtyol kazasına bağlı
  // NAHİYE statüsüne düştü — 1923 itibariyle müstakil kaza değil.
  // kaynak: dergipark "Cebel-i Bereket Sancağının İdari Yapısı"
  s:[{f:"1281-01-01",t:"1516-08-24",d:"memluk"},{f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet"}],
  d:[{f:"1516-08-24",t:"1918-10-30"},{f:"1921-10-20",t:"1923-10-29"}], v:[] },

{ ad:"Yumurtalık", tur:"liman", lat:36.7721, lon:35.7870, g:0, k:4, m:"Adana",
  // GEREKÇE k:4 (k:3 DEĞİL): Ceyhan kazasına bağlı NAHİYE merkeziydi,
  // müstakil kaza değildi (117 köy + 26 çiftlikli Ceyhan kazasının bir parçası).
  // kaynak: dergipark "Cebel-i Bereket Sancağının İdari Yapısı"
  // ⚠️ İşgal/tahliye için Yumurtalık'a ÖZEL tarih bulunamadı — bölgesel
  // Çukurova çerçevesi (Mersin/Payas ile aynı) kullanıldı, bkz. yukarı not.
  s:[{f:"1281-01-01",t:"1516-08-24",d:"memluk"},{f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet"}],
  d:[{f:"1516-08-24",t:"1918-10-30"},{f:"1921-10-20",t:"1923-10-29"}], v:[] },

// ───────── ⑥ DOĞU SINIRI · Gürcistan hattının BATI (Karadeniz kıyısı) ucu ─────────
// Kaynak: sınır komisyonu tarifi (1878 Berlin) — "sınır sahilde Esenkıyı
// Köyü'nün doğusundaki Kopmuş Burnu'ndan başlar" ⇒ Arhavi (Hopa'nın
// GÜNEYBATISINDA) hattın Osmanlı tarafında kaldı, hiç Rus toprağı olmadı.
// TDV bu taneciği kapsamıyor (arhavi 302 ölü) — akademik/yerel kaynağa geçildi.

{ ad:"Arhavi", tur:"kasaba", lat:41.354, lon:41.316, g:0, k:4, m:"Trabzon",
  // GEREKÇE k:4 (k:3 DEĞİL): Hopa kazasına bağlı NAHİYE merkeziydi,
  // müstakil kaza değildi.
  // ⚠️ 1878 sınırı Hopa'nın DOĞUSUNDAN geçti (Kopmuş Burnu), Arhavi hep
  // Osmanlı kaldı — bu yüzden s: rusya dönemi YOK, Rize ile aynı desen.
  // kaynak: sınır tarifi (bkz. yukarı) + Rize kaydıyla aynı fetih tarihi (Trabzon 1461)
  s:[{f:"1281-01-01",t:"1461-08-15",d:"trabzon-rum"}],
  d:[{f:"1461-08-15",t:"1923-10-29"}], v:[] },

{ ad:"Borçka", tur:"kasaba", lat:41.339, lon:41.677, g:0, k:4, m:"Erzurum",
  // GEREKÇE k:4 (k:3 DEĞİL): 1878'de Gönye kazasına bağlı NAHİYE
  // merkeziydi, müstakil kaza değildi. Daha sonraki kaza-ilan tarihi
  // bulunamadı.
  // kaynak: borcka.bel.tr resmi tarihçe ("Şehrin Nüfusu ve Tarihi") +
  //   Artvin/Şavşat kaydıyla aynı bölgesel desen (İskender Paşa 1551,
  //   San Stefano 1878-03-03, Kars Antlaşması 1921-10-13)
  s:[{f:"1281-01-01",t:"1551-01-01",d:"gurcistan"},{f:"1878-03-03",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-10-13",d:"sovyet-rusya"}],
  d:[{f:"1551-01-01",t:"1878-03-03"},{f:"1921-10-13",t:"1923-10-29"}], v:[] },

// ───────── ⑦ DOĞU SINIRI · Kars sanjağı (Sarıkamış) ─────────
{ ad:"Sarıkamış", tur:"kasaba", lat:40.328, lon:42.578, g:0, k:3, m:"Kars",
  // GEREKÇE k:3: GARNİZON — Rus 39. Piyade Tümeni 2. Tugay karargâhı +
  // askerî depoları koruyan iki gönüllü bölük; 1899/1913 stratejik
  // demiryolu kavşağı (Tiflis-Gümrü-Kars-Sarıkamış-Erzurum hattı).
  // I. Dünya Savaşı'nın en büyük Osmanlı-Rus muharebelerinden birinin
  // (Aralık 1914-Ocak 1915) merkezi.
  // kaynak: academia.edu "Garnizon Kent Sarıkamış'ta Rus Mimarisi";
  //   TDV sarikamis-harekati (canlı, HTTP 200)
  // Tarihler Kars kaydıyla (data/yerlesimler.js:232) BİREBİR aynı —
  // aynı sanjak, aynı kader.
  s:[{f:"1281-01-01",t:"1534-06-01",d:"gurcistan"},{f:"1878-07-13",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-05-25",d:"sovyet-rusya"}],
  d:[{f:"1534-06-01",t:"1878-07-13"},{f:"1918-05-25",t:"1923-10-29"}], v:[] },

// ───────── ⑧ DOĞU SINIRI · Ahılkelek (Gürcistan tarafı — Ahıska'nın komşusu) ─────────
{ ad:"Ahılkelek (Akhalkalaki)", tur:"kale", lat:41.403, lon:43.484, g:0, k:3, m:"Erzurum",
  // GEREKÇE k:3: KALE + SANCAK MERKEZİ — Çıldır Eyaleti'nin sekiz
  // sancağından biri (Ahılkelek Sancağı).
  // kaynak: TDV cildir-eyaleti (doğrulandı, HTTP 200, içerik okundu):
  //   "1551'de Erzurum Beylerbeyi İskender Paşa Ardanuç ve Ardahan
  //    yöresini alarak Ahılkelek ve Ahıska civarına kadar ilerledi" —
  //   ⚠️ Ahılkelek'in fethi 1551 (İskender Paşa), Ahıska'nınkinden
  //   (1578 zafer / 1639 Kasr-ı Şirin ile resmîleşme) FARKLI VE ERKEN.
  //   Wikipedia "Ahılkelek Sancağı" bu ayrımı bulanıklaştırıyordu (TEK
  //   DAYANAK OLARAK KULLANILMADI, yalnız TDV'yle çapraz okundu).
  // 1829-09-14: Edirne Antlaşması — Ahıska+Ahılkelek birlikte Rusya'ya
  //   bırakıldı (mevcut Ahıska kaydıyla, data/yerlesimler.js:757, AYNI).
  // 1921 Kars Antlaşması'yla Türkiye'ye DÖNMEDİ — Gürcistan'a kaldı, bu
  //   yüzden Ahıska'nın (yerlesimler.js:757) ORİJİNAL kaydı gibi 1829'dan
  //   1923'e kadar KESİNTİSİZ rusya; ek26'daki 1921 kırılmalı ikinci
  //   Ahıska kaydını (muhtemel mükerrer/tutarsızlık) TEKRARLAMADIM.
  s:[{f:"1281-01-01",t:"1551-01-01",d:"gurcistan"},{f:"1829-09-14",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
  d:[{f:"1551-01-01",t:"1829-09-14"}], v:[] },

];
