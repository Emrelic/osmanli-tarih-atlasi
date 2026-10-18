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
{ ad:"Payas",isg:[{f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet",kaynak:"bulunamadı — TDV'de müstakil madde YOK (302) ve kapsayıcı maddeler (adana · tarsus · osmaniye · sanliurfa) bu yerleşimi işgal bağlamında ANMIYOR; gün mevcut veriden devralındı, KAYNAKSIZ"}],kaynak:"Belen muharebesi 29 Temmuz 1832 (TDV `ibrahim-pasa-kavalali`) Payas'ın hemen kuzeyindeki geçitte; Adana bölgesi 1833-1840 İbrâhim Paşa'da (TDV `adana`, gövdesi okundu: '1833-1840 yıllarında ... İbrâhim Paşa'nın eline geçmiş, Londra Antlaşması ile de 1841'de tekrar Osmanlı Devleti'ne bağlanmıştır'). Bitiş külliyatın Adana günü.", tur:"kale", lat:36.755, lon:36.213, g:0, k:3, m:"Halep",
  // kaynak: UK Cmd.1556 / LNTS Vol.54 pp.178-193, Ankara İtilâfnâmesi Md.8 (doğrulandı, bkz. yukarı)
  s:[{f:"1281-01-01",t:"1516-08-24",d:"memluk"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti",kaynak:"TDV Islam Ansiklopedisi 'Turkiye Cumhuriyeti'; Cumhuriyet ilani 1923-10-29"}],
  d:[{f:"1516-08-24",t:"1920-04-23"}], v:[{f:"1832-07-29",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)",statu:"vassal",kid:"misir-kavalali"}] },

// ───────── ③ ÇUKUROVA · İskenderun körfezinin KUZEY kıyısı ─────────
// Kaynak (üçü için): TÜBA "Occupation and Liberation of Adana" (Nejla
// Günay) — tuba.gov.tr yayını, hakemli akademik seri; + dergipark
// "Cebel-i Bereket Sancağı'nın İdari Yapısı (1879-1933)" (idari statü için).
// TDV bu taneciği (kaza/nahiye düzeyi) kapsamıyor — dortyol/erzin/
// yumurtalik sluglarının hepsi 302 (ölü). Akademik kaynağa geçildi, §4.

{ ad:"Dörtyol", kd:[{f:"1281-01-01",t:"1516-08-24",k:0,m:null},{f:"1920-04-23",t:"1923-10-29",k:0,m:null}],isg:[{f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet",kaynak:"bulunamadı — TDV'de müstakil madde YOK (302) ve kapsayıcı maddeler (adana · tarsus · osmaniye · sanliurfa) bu yerleşimi işgal bağlamında ANMIYOR; gün mevcut veriden devralındı, KAYNAKSIZ"}],kaynak:"Adana sancağının doğrulanmış işgal dönemi (parti-emrelic-0036/H-0011, ve savaslar.js:436-437 Kütahya Sözleşmesi) — aynı idari birim, sancak merkezinin tarihiyle tutarlılık", tur:"kasaba", lat:36.845, lon:36.221, g:0, k:3, m:"Adana",
  // GEREKÇE k:3: 1909'da padişah iradesiyle Adana vilayeti Cebel-i Bereket
  // sancağına bağlı KAZA MERKEZİ oldu (öncesi Payas/Erzin'e bağlı nahiye).
  // kaynak: dergipark "Cebel-i Bereket Sancağının İdari Yapısı"; TÜBA (işgal/tahliye)
  s:[{f:"1281-01-01",t:"1516-08-24",d:"memluk"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti",kaynak:"TDV Islam Ansiklopedisi 'Turkiye Cumhuriyeti'; Cumhuriyet ilani 1923-10-29"}],
  d:[{f:"1516-08-24",t:"1920-04-23"}], v:[] },

{ ad:"Erzin", kd:[{f:"1281-01-01",t:"1516-08-24",k:0,m:null},{f:"1920-04-23",t:"1923-10-29",k:0,m:null}],isg:[{f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet",kaynak:"bulunamadı — TDV'de müstakil madde YOK (302) ve kapsayıcı maddeler (adana · tarsus · osmaniye · sanliurfa) bu yerleşimi işgal bağlamında ANMIYOR; gün mevcut veriden devralındı, KAYNAKSIZ"}],kaynak:"bkz. H-0007 (Dörtyol)", tur:"kasaba", lat:36.955, lon:36.201, g:0, k:4, m:"Adana",
  // GEREKÇE k:4 (k:3 DEĞİL): 1906-1909 arası GEÇİCİ olarak Cebel-i Bereket
  // sancak merkeziydi, ama 1909 reorganizasyonuyla Dörtyol kazasına bağlı
  // NAHİYE statüsüne düştü — 1923 itibariyle müstakil kaza değil.
  // kaynak: dergipark "Cebel-i Bereket Sancağının İdari Yapısı"
  s:[{f:"1281-01-01",t:"1516-08-24",d:"memluk"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti",kaynak:"TDV Islam Ansiklopedisi 'Turkiye Cumhuriyeti'; Cumhuriyet ilani 1923-10-29"}],
  d:[{f:"1516-08-24",t:"1920-04-23"}], v:[] },

{ ad:"Yumurtalık", kd:[{f:"1281-01-01",t:"1516-08-24",k:0,m:null},{f:"1920-04-23",t:"1923-10-29",k:0,m:null}],isg:[{f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet",kaynak:"bulunamadı — TDV'de müstakil madde YOK (302) ve kapsayıcı maddeler (adana · tarsus · osmaniye · sanliurfa) bu yerleşimi işgal bağlamında ANMIYOR; gün mevcut veriden devralındı, KAYNAKSIZ"}],kaynak:"bkz. H-0007 (Dörtyol)", tur:"liman", lat:36.7721, lon:35.7870, g:0, k:4, m:"Adana",
  // GEREKÇE k:4 (k:3 DEĞİL): Ceyhan kazasına bağlı NAHİYE merkeziydi,
  // müstakil kaza değildi (117 köy + 26 çiftlikli Ceyhan kazasının bir parçası).
  // kaynak: dergipark "Cebel-i Bereket Sancağının İdari Yapısı"
  // ⚠️ İşgal/tahliye için Yumurtalık'a ÖZEL tarih bulunamadı — bölgesel
  // Çukurova çerçevesi (Mersin/Payas ile aynı) kullanıldı, bkz. yukarı not.
  s:[{f:"1281-01-01",t:"1516-08-24",d:"memluk"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti",kaynak:"TDV Islam Ansiklopedisi 'Turkiye Cumhuriyeti'; Cumhuriyet ilani 1923-10-29"}],
  d:[{f:"1516-08-24",t:"1920-04-23"}], v:[] },

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
  s:[{f:"1281-01-01",t:"1461-08-15",d:"trabzon-rum"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti",kaynak:"TDV Islam Ansiklopedisi 'Turkiye Cumhuriyeti'; Cumhuriyet ilani 1923-10-29"}],
  d:[{f:"1461-08-15",t:"1920-04-23"}], v:[] },

{ ad:"Borçka", kd:[{f:"1281-01-01",t:"1551-01-01",k:0,m:null},{f:"1878-03-03",t:"1923-10-29",k:0,m:null}], tur:"kasaba", lat:41.339, lon:41.677, g:0, k:4, m:"Erzurum",
  // GEREKÇE k:4 (k:3 DEĞİL): 1878'de Gönye kazasına bağlı NAHİYE
  // merkeziydi, müstakil kaza değildi. Daha sonraki kaza-ilan tarihi
  // bulunamadı.
  // kaynak: borcka.bel.tr resmi tarihçe ("Şehrin Nüfusu ve Tarihi") +
  //   Artvin/Şavşat kaydıyla aynı bölgesel desen (İskender Paşa 1551,
  //   San Stefano 1878-03-03, Kars Antlaşması 1921-10-13)
  s:[{f:"1281-01-01",t:"1551-01-01",d:"gurcistan"},{f:"1878-03-03",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-03-28",d:"sovyet-rusya"},{f:"1918-12-17",t:"1920-04-01",d:"ingiltere",kesinlik:"ay",kaynak:"TDV artvin: 17 Aralık 1918 İngiliz işgali; işgal 1920 yılının Nisan ayına kadar sürdü (bitiş AY hassasiyeti: Nisan 1920)"},{f:"1920-04-01",t:"1921-02-23",d:"gurcistan-demokratik-cumhuriyeti",kesinlik:"ay",kaynak:"TDV artvin: İngilizler çekilirken şehri Gürcistan'a bıraktılar (Nisan 1920) · bitiş 23 Şubat 1921: M. Sarı, Millî Mücadele Döneminde Elviye-i Selâse (Kars, Ardahan ve Batum), Millî Mücadele'nin Yerel Tarihi 1918-1923 c.9, TÜBA 2022 (doi 10.53478/TUBA.978-625-8352-71-9.ch04)"},{f:"1921-02-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti",kaynak:"TDV Islam Ansiklopedisi 'Turkiye Cumhuriyeti'; Cumhuriyet ilani 1923-10-29"}],
  d:[{f:"1551-01-01",t:"1878-03-03"},{f:"1918-03-28",t:"1918-12-17",kaynak:"gün komşudan: Artvin · Sarı-ES (Artvin sancağı kazası) · Artvin'in alınışı 28 Mart 1918: M. Sarı, Millî Mücadele Döneminde Elviye-i Selâse (Kars, Ardahan ve Batum), Millî Mücadele'nin Yerel Tarihi 1918-1923 c.9, TÜBA 2022 (doi 10.53478/TUBA.978-625-8352-71-9.ch04) (TDV artvin yalnız '1918 Martında') · bitiş 17 Aralık 1918: TDV artvin (Mondros sonrası İngiliz işgali)"}], v:[] },

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
  s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli",kaynak:"gün komşudan: Kars · TDV kars (1358 Celâyirli · 1386 Timur · Timur sonrası Karakoyunlu · 1467 Uzun Hasan) — Kars'ın kendi günleri TDV ile birebir değil (YAMA-0052B-RENK #3)"},{f:"1340-01-01",t:"1386-01-01",d:"celayirli",kaynak:"gün komşudan: Kars · TDV kars (1358 Celâyirli · 1386 Timur · Timur sonrası Karakoyunlu · 1467 Uzun Hasan) — Kars'ın kendi günleri TDV ile birebir değil (YAMA-0052B-RENK #3)"},{f:"1386-01-01",t:"1408-04-13",d:"timurlu",kaynak:"gün komşudan: Kars · TDV kars (1358 Celâyirli · 1386 Timur · Timur sonrası Karakoyunlu · 1467 Uzun Hasan) — Kars'ın kendi günleri TDV ile birebir değil (YAMA-0052B-RENK #3) · BİTİŞ 1406-10-21→1408-04-13 (TEBRIZ-1388-KARAKOYUNLU-1006)"},{f:"1408-04-13",t:"1467-01-01",d:"karakoyunlu",kaynak:"BÖLGE CÜMLESİ, ŞEHİR TANIKLIĞI DEĞİL (D208): TDV `karakoyunlular` Serdrûd 13 Nisan 1408 — \"Serdrûd zaferi Kara Yûsuf’a Azerbaycan’ı kazandırdı.\" Bu noktayı adıyla tarihleyen kaynak bulunamadı; adım Tebriz zinciriyle tutarlılık için · eski 1406-10-21 kaynaksızdı (TEBRIZ-1388-KARAKOYUNLU-1006)"},{f:"1467-01-01",t:"1501-07-01",d:"akkoyunlu",kaynak:"gün komşudan: Kars · TDV kars (1358 Celâyirli · 1386 Timur · Timur sonrası Karakoyunlu · 1467 Uzun Hasan) — Kars'ın kendi günleri TDV ile birebir değil (YAMA-0052B-RENK #3)"},{f:"1501-07-01",t:"1534-06-01",d:"safevi",kaynak:"gün komşudan: Kars · TDV kars (907/1501, Sevündük Han) — TDV sarikamis (302, ölü slug) bu yıllar için tarih VERMİYOR (bulunamadı) · aynı süreç, 47 km · DOGU-SAFEVI-0086 H-0009 · önceki not: gün komşudan: Kars · TDV kars (1358 Celâyirli · 1386 Timur · Timur sonrası Karakoyunlu · 1467 Uzun Hasan) — Kars'ın kendi günleri TDV ile birebir değil (YAMA-0052B-RENK #3)"},{f:"1878-07-13",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-04-25",d:"sovyet-rusya"},{f:"1919-04-30",t:"1920-10-30",d:"ermenistan-demokratik-cumhuriyeti",kaynak:"M. Sarı, Millî Mücadele Döneminde Elviye-i Selâse (Kars, Ardahan ve Batum), Millî Mücadele'nin Yerel Tarihi 1918-1923 c.9, TÜBA 2022 (doi 10.53478/TUBA.978-625-8352-71-9.ch04): Preston 30 Nisan 1919'da idareyi Kars Valisi Karganof'a devretti · TDV kars: Karabekir 30 Ekim 1920'de Kars'a girdi · gün komşudan: Kars (yalnız komşu kaydında)"},{f:"1920-10-30",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti",kaynak:"TDV Islam Ansiklopedisi 'Turkiye Cumhuriyeti'; Cumhuriyet ilani 1923-10-29"}],
  d:[{f:"1534-06-01",t:"1878-07-13"},{f:"1918-04-25",t:"1919-04-30",y:"antlasma",kaynak:"gün komşudan: Kars · Sarı-ES · bitiş: Kars idaresinin İngilizlerce Ermenilere devri, M. Sarı, Millî Mücadele Döneminde Elviye-i Selâse (Kars, Ardahan ve Batum), Millî Mücadele'nin Yerel Tarihi 1918-1923 c.9, TÜBA 2022 (doi 10.53478/TUBA.978-625-8352-71-9.ch04) · 1919-01-13→04-30 arası Cenûb-ı Garbî Kafkas Hükûmeti/İngiliz dönemi KÜNYESİZ: Osmanlı d: ile temsil (Emre kararı 13 Ekim 2026, NOKTA-KAFKAS-0077 §6-B)"}], v:[] },

// ───────── ⑧ DOĞU SINIRI · Ahılkelek (Gürcistan tarafı — Ahıska'nın komşusu) ─────────
{ ad:"Ahılkelek (Akhalkalaki)", kd:[{f:"1281-01-01",t:"1578-08-09",k:0,m:null},{f:"1829-09-14",t:"1923-10-29",k:0,m:null}], tur:"kale", lat:41.403, lon:43.484, g:0, k:3, m:"Erzurum",
  // GEREKÇE k:3: KALE + SANCAK MERKEZİ — Çıldır Eyaleti'nin sekiz
  // sancağından biri (Ahılkelek Sancağı).
  // kaynak: TDV cildir-eyaleti (doğrulandı, HTTP 200, içerik okundu):
  //   "1551'de Erzurum Beylerbeyi İskender Paşa Ardanuç ve Ardahan
  //    yöresini alarak Ahılkelek ve Ahıska civarına kadar ilerledi" —
  //   ⚠️ Ahılkelek'in fethi 1551 (İskender Paşa), Ahıska'nınkinden
  //   (1578 zafer / 1639 Kasr-ı Şirin ile resmîleşme) FARKLI VE ERKEN.
  //   Wikipedia "Ahılkelek Sancağı" bu ayrımı bulanıklaştırıyordu (TEK
  //   DAYANAK OLARAK KULLANILMADI, yalnız TDV'yle çapraz okundu).
  // 🔴 KUTU-A-1014 (0088/H-0050) DÜZELTME: yukarıdaki "fethi 1551" okuması
  //   YANLIŞTI. Aynı TDV cildir-eyaleti maddesi 1551'den sonra "Çıldır,
  //   Ahılkelek ve Tümük Osmanlılar'dan yüz çevirip" (Keyhusrev'in elinde)
  //   der ve Çıldır Savaşı'nın ardından Osmanlı kuvvetlerinin "Hırtıs ve
  //   Ahılkelek'i zaptetmiş" olduğunu yazar. 1551 = ilerleme, fetih değil.
  //   ⇒ 1551-1578 gurcistan (Samtshe atabegliği, Ahıska ile aynı kimlik);
  //   Osmanlı başlangıcı 1578-08-09 — gün komşudan: Çıldır Savaşı
  //   (TDV lala-mustafa-pasa / cildir-eyaleti), madde olaylar_p0049.js
  //   Ahılkelek'i adıyla sayıyor.
  // 1829-09-14: Edirne Antlaşması — Ahıska+Ahılkelek birlikte Rusya'ya
  //   bırakıldı (mevcut Ahıska kaydıyla, data/yerlesimler.js:757, AYNI).
  // 1921 Kars Antlaşması'yla Türkiye'ye DÖNMEDİ — Gürcistan'a kaldı, bu
  //   yüzden Ahıska'nın (yerlesimler.js:757) ORİJİNAL kaydı gibi 1829'dan
  //   1923'e kadar KESİNTİSİZ rusya; ek26'daki 1921 kırılmalı ikinci
  //   Ahıska kaydını (muhtemel mükerrer/tutarsızlık) TEKRARLAMADIM.
  s:[{f:"1281-01-01",t:"1578-08-09",d:"gurcistan"},{f:"1829-09-14",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-04-09",d:"sovyet-rusya"},{f:"1991-04-09",t:"2000-12-31",d:"gurcistan-cumhuriyeti",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}],
  d:[{f:"1578-08-09",t:"1829-09-14",kaynak:"TDV cildir-eyaleti: Çıldır Savaşı ardından Osmanlı kuvvetleri 'Hırtıs ve Ahılkelek'i zaptetmişti' · gün komşudan: Çıldır Savaşı 1578-08-09 · KUTU-A-1014"}], v:[] },
// ── KUTU-A-1014 · yeni noktalar (0080/H-0020 · 0033/H-0018 · 0088/H-0001 · 0074/H-0014) ──
// Mükerrer taraması (ad + 3 km) KUTU-A araştırmasında yapıldı: Gori→Tiflis 63 km · Telavi→Zagem 35 km ·
// Duşeti→Tiflis 42 km · Kiğı→Aşkale 74 km · Pasinler→Erzurum 36 km · Poti→Batum 56 km; 3 km içinde nokta YOK.
{ ad:"Gori", tur:"kale", lat:41.9847, lon:44.1167, g:0, k:0, kaynak:"TDV gurcistan (1578 itaat · 1587 Gori eyaleti · 1603) · TDV tiflis (1723-1735 livâ) · koordinat GeoNames",
  neden:"KUTU-A-1014 (0080/H-0020): Tiflis'in kuzey/batısında nokta yoktu ⇒ Tiflis peteği kuzeye üçgen gibi uzanıyordu. Koordinat GeoNames (denetim/KAFKAS-KORFEZ-0081-nokta.md).",
  s:[{f:"1281-01-01",t:"1484-01-01",d:"gurcistan"},{f:"1484-01-01",t:"1762-01-01",d:"kartli-kralligi",kesinlik:"yil",kaynak:"KUTU-F2-1014 (0043/H-0010): ankraj Tiflis — Encyclopaedia Iranica 'KARTLI' 'From 1484 to 1762 Kartli was as a distinct political entity' · TDV gurcistan 1762 birleşme · beyanlı yaklaşıklık kalktı (kartli-kralligi rengi BOYALAR'da, ed84e4343)"},{f:"1762-01-01",t:"1801-09-12",d:"gurcistan"},{f:"1801-09-12",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-05-26",d:"transkafkasya"},{f:"1918-05-26",t:"1921-02-25",d:"gurcistan-demokratik-cumhuriyeti",kaynak:"gün komşudan: Tiflis (TDV tiflis / TDV acara)"},{f:"1921-02-25",t:"1991-04-09",d:"sovyet-rusya"},{f:"1991-04-09",t:"2000-12-31",d:"gurcistan-cumhuriyeti"}],
  v:[{f:"1578-08-24",t:"1587-01-01",k:"Gori ve Muhran Gürcü beyleri (tâbi)",statu:"vassal",kaynak:"TDV gurcistan: 'Ağustos 1578'de … Osmanlılar, Gori ve Muhran kesimlerindeki Gürcü beylerini itaat altına aldılar ve 24 Ağustos'ta Tiflis şehrini savaşsız ele geçirdiler' — gün komşudan: Tiflis (en erken sınır)"}],
  d:[{f:"1587-01-01",t:"1603-01-01",kesinlik:"yil",kaynak:"TDV gurcistan: 'batı bölgesinde Gori eyaletini (1587) kurmuş' · bitiş TDV tiflis/gurcistan 1603 (Şah Abbas) · ⚠️ Simon'un Gori Kalesi'ni ele geçirip Osmanlıların 1601'de geri alması (başı yılsız) modellenmedi"},{f:"1723-06-23",t:"1735-08-12",kaynak:"TDV tiflis: 1723-1735 Tiflis eyaletinin livâları arasında Gori · gün komşudan: Tiflis (TDV tiflis '23-24 Haziran 1723' / '12 Ağustos 1735')"}] },
{ ad:"Telavi", tur:"sehir", lat:41.9167, lon:45.4833, g:0, k:0, kaynak:"ankraj Zagem (Kaheti) — TDV gurcistan · EB1911 'Georgia' (kaheti-kralligi künyesi) · koordinat GeoNames",
  neden:"KUTU-A-1014 (0080/H-0020): Kaheti'de yalnız Zagem vardı. Zincir Zagem (Kaheti) kaydıyla aynıdır — ŞEHİR TANIKLIĞI DEĞİL, ankraj Zagem (35 km). Koordinat GeoNames.",
  s:[{f:"1281-01-01",t:"1492-01-01",d:"gurcistan"},{f:"1492-01-01",t:"1762-01-01",d:"kaheti-kralligi",kesinlik:"yil",kaynak:"ankraj Zagem: künye kaheti-kralligi (EB1911 1492 · TDV gurcistan 1762)"},{f:"1762-01-01",t:"1801-09-12",d:"gurcistan"},{f:"1801-09-12",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-05-26",d:"transkafkasya"},{f:"1918-05-26",t:"1921-02-25",d:"gurcistan-demokratik-cumhuriyeti"},{f:"1921-02-25",t:"1991-04-09",d:"sovyet-rusya"},{f:"1991-04-09",t:"2000-12-31",d:"gurcistan-cumhuriyeti"}],
  v:[{f:"1578-08-24",t:"1603-01-01",kesinlik:{f:"gun",t:"yil"},k:"Kaheti krallığı (tâbi)",kid:"kaheti-kralligi",statu:"vassal",kaynak:"ankraj Zagem · TDV gurcistan 'Tiflis'in fethinden sonra İmeret ve Kahet yöneticileri Osmanlılar'a itaatlerini bildirdiler' · bitiş TDV gurcistan 1603"}] },
{ ad:"Duşeti", tur:"kasaba", lat:42.0851, lon:44.6960, g:0, k:0, kaynak:"ankraj Tiflis — TDV gurcistan (Kartli) · TDV tiflis · koordinat GeoNames",
  neden:"KUTU-A-1014 (0080/H-0020): Tiflis'in kuzeyi (Aragvi vadisi) noktasızdı. Osmanlı penceresi YOK: TDV Duşeti'yi şehir düzeyinde anmıyor. Koordinat GeoNames.",
  s:[{f:"1281-01-01",t:"1484-01-01",d:"gurcistan"},{f:"1484-01-01",t:"1762-01-01",d:"kartli-kralligi",kesinlik:"yil",kaynak:"KUTU-F2-1014 (0043/H-0010): ankraj Tiflis — Encyclopaedia Iranica 'KARTLI' 1484-1762 · TDV gurcistan 1762 birleşme · beyanlı yaklaşıklık kalktı (kartli-kralligi rengi BOYALAR'da, ed84e4343)"},{f:"1762-01-01",t:"1801-09-12",d:"gurcistan"},{f:"1801-09-12",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-05-26",d:"transkafkasya"},{f:"1918-05-26",t:"1921-02-25",d:"gurcistan-demokratik-cumhuriyeti"},{f:"1921-02-25",t:"1991-04-09",d:"sovyet-rusya"},{f:"1991-04-09",t:"2000-12-31",d:"gurcistan-cumhuriyeti"}] },
{ ad:"Pasinler (Hasankale)", tur:"kale", lat:39.979, lon:41.676, g:0, k:0, kaynak:"TDV kars (940/1534 Pasin) · TDV kazim-karabekir (1918 Hasankale) · öncesi/sonrası ankraj Erzurum (TDV erzurum · akkoyunlular)",
  neden:"KUTU-A-1014 → KUTU-F2-1014 (0088/H-0001): Erzurum ile Sarıkamış/Kars arasında nokta yoktu ⇒ düz petek orta dikmesi. Mükerrer tarandı: 3 km içinde kayıt yok (en yakın Erzurum 35,9 km). 1534 ÖNCESİ zincir ŞEHİR TANIKLIĞI DEĞİL: ankraj Erzurum (36 km). 1916/1918 günleri Erzurum'dan: 1916-02-16 ÜST SINIR (Hasankale Erzurum'dan önce düştü), 1918-03-12 EN ERKEN sınır (Erzurum'un ardından alındı) — Hasankale'nin kendi günleri kaynakta yok.",
  s:[{f:"1281-01-01",t:"1360-01-01",d:"ilhanli"},{f:"1360-01-01",t:"1385-01-01",d:"eretna"},{f:"1385-01-01",t:"1387-01-01",d:"karakoyunlu"},{f:"1387-01-01",t:"1403-01-01",d:"timurlu"},{f:"1403-01-01",t:"1408-01-01",d:"mutahharten"},{f:"1408-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1534-01-01",d:"safevi",kaynak:"ankraj Erzurum · bitiş TDV kars"},{f:"1916-02-16",t:"1917-03-15",d:"rusya",kaynak:"gün komşudan: Erzurum (ÜST SINIR)"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-03-12",d:"transkafkasya"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti"}],
  d:[{f:"1534-01-01",t:"1916-02-16",kesinlik:{f:"yil",t:"gun"},kaynak:"TDV kars: 'Kanûnî Sultan Süleyman'ın Irakeyn Seferi sırasında (940/1534) Pasin, Şüregel, Oltu gibi kalelerin Osmanlılar tarafından ele geçirildiği' · hicrî 940 (1533-07 → 1534-07) ∩ mîlâdî 1534 ⇒ kesişimin ilk günü 1534-01-01"},{f:"1918-03-12",t:"1920-04-23",kaynak:"TDV kazim-karabekir: 'Erzincan'ı, Erzurum'u ve Hasankale'yi geri alarak' (gün yok) · gün komşudan: Erzurum (TDV erzurum 12 Mart 1918)"}] },
{ ad:"Refah", tur:"kasaba", lat:31.2972, lon:34.2436, g:0, k:0, kaynak:"koordinat GeoNames (KUTU-A-1014 notu) · 1906 hattı: Taba hakem kararı RIAA XX (1988) Ek B / palquest.org 'Rafah agreement' (1 Ekim 1906, 'signed and exchanged at Rafeh') · 1917: Australian War Memorial, N. Steel, 'Gateway to Palestine' (9 Ocak 2007)",
  neden:"KUTU-F2-1014 (0076/H-0103): 1906 Refah-Taba hattının kuzey ucunda nokta yoktu (en yakın Han Yûnus 7 km, El-Arîş 45 km); hattın Filistin yakasını taşır. Mükerrer tarandı: 3 km içinde kayıt yok. 1281-1917 ve 1920 sonrası zincir ŞEHİR TANIKLIĞI DEĞİL: ankraj Han Yûnus. Napolyon 1799 geçişi ve 1906 bunalımı modellenmedi.",
  s:[{f:"1281-01-01",t:"1516-12-21",d:"memluk"},{f:"1917-01-09",t:"1920-07-01",d:"ingiltere",kaynak:"AWM (N. Steel, 'Gateway to Palestine'): 'On the morning of 9 January 1917, the Anzac Mounted Divison, the Imperial Camel Corps Brigade …' · 'the position, together with nearby Rafa, was secured' — GÜN; Gazze/Han Yûnus'tan 10 ay önce"},{f:"1920-07-01",t:"1948-05-14",d:"filistin-mandasi",kaynak:"gün komşudan: Han Yûnus / Gazze (TDV filistin, AY)"},{f:"1948-05-14",t:"1953-06-18",d:"misir-kralligi",kaynak:"ankraj Han Yûnus/Gazze: Mısır idaresi 1948-67 (Britannica Gaza Strip; Office of the Historian)"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti"},{f:"1958-02-22",t:"1967-06-05",d:"birlesik-arap-cumhuriyeti"},{f:"1967-06-05",t:"2000-12-31",d:"israil-devleti"}],
  d:[{f:"1516-12-21",t:"1917-01-09",kaynak:"başı gün komşudan: Han Yûnus (TDV ridaniye-savasi Hanyûnus çatışması 26 Zilkade 922 / 21 Aralık 1516) · sonu AWM 9 Ocak 1917"}],
  v:[{f:"1831-10-31",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)",statu:"vassal",kid:"misir-kavalali",kesinlik:{f:"ay"},kaynak:"gün komşudan: Han Yûnus / Gazze v: — SIRA TUTARLILIĞI, Refah'a özel tanıklık yok; El-Arîş ile Han Yûnus arasında Osmanlı adası doğmasın diye"}] },
{ ad:"Taba", tur:"kasaba", lat:29.4920, lon:34.8957, g:0, k:0, m:"Kahire", kaynak:"koordinat GeoNames (KUTU-A-1014 notu) · 1906 hattı: Taba hakem kararı RIAA XX (1988) Ek B / palquest.org 'Rafah agreement' (1 Ekim 1906: hat 'the point of Ras Taba on the western shore of the Gulf of Akaba'dan başlar) · zincir ankraj Sina güneyi (TDV misir · selim-i)",
  neden:"KUTU-F2-1014 (0076/H-0103): 1906 Refah-Taba hattının güney ucunda (Akabe Körfezi) nokta yoktu (en yakın Maan 112 km). Mükerrer tarandı: 3 km içinde kayıt yok. Zincir Sina güneyi kaydıyla birebir — ŞEHİR TANIKLIĞI DEĞİL. Ocak-Mayıs 1906 Osmanlı askerî varlığı (Taba bunalımı) ve 1967-1989 İsrail idaresi MODELLENMEDİ (Sina güneyi de modellemiyor; kaynaklı gün gerekiyor).",
  isg:[{f:"1914-12-18",t:"1923-10-29",d:"ingiltere",kaynak:"ankraj Sina güneyi: TDV misir 'İngiltere, 18 Aralık 1914'te tek taraflı olarak Osmanlı hükümranlık haklarını kaldırıp Mısır'ı himayesine aldı'"}],
  s:[{f:"1281-01-01",t:"1517-01-24",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-01-24",t:"1805-07-03",kaynak:"ankraj Sina güneyi — gün komşudan: Kahire 1517-01-24 (TDV selim-i); kendi günü yok"}],
  v:[{f:"1805-07-03",t:"1867-06-08",k:"Mısır valiliği (Kavalalı hanedanı)",kid:"misir-kavalali",statu:"vassal"},{f:"1867-06-08",t:"1914-12-18",k:"Mısır Hidivliği",kid:"misir-kavalali",statu:"vassal"}] },
{ ad:"Kiğı", tur:"kale", lat:39.312, lon:40.348, g:0, k:0, kaynak:"TDV biyikli-mehmed-pasa (15 Ekim 1514) · öncesi ankraj Bayburt (TDV bayburt · akkoyunlular · erzincan) · 1501-07-01 Safevî başlangıcı BAYBURT'TAN ÇIKARIMDIR: TDV'de Kiğı'ya ait bağımsız 1501 tanıklığı yok; Bayburt (TDV bayburt '1501'de Safevîler tarafından alındı') ile Erzurum/Erzincan (1502-01-01 Akkoyunlu sonu) arasındaki ~6 aylık eksklav bilinçli olarak TDV'ye sadık bırakıldı (Emre, post-it #72, 18 Ekim 2026)",
  neden:"KUTU-A-1014 (0033/H-0018): Yavuz'un 1514 dönüşünde teslim alınan kalelerden Kiğı'nın noktası yoktu. 1514 ÖNCESİ zincir ŞEHİR TANIKLIĞI DEĞİL: Bayburt zinciri (aynı süreç; madde olaylar_p0058.js 'Bayburt ve Kiğı kaleleri Safevîlerden teslim alındı'). 1916 Rus işgali araştırılmadı, YAZILMADI.",
  s:[{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"},{f:"1335-01-01",t:"1378-01-01",d:"eretna"},{f:"1378-01-01",t:"1410-01-01",d:"mutahharten"},{f:"1410-01-01",t:"1422-01-01",d:"karakoyunlu"},{f:"1422-01-01",t:"1501-07-01",d:"akkoyunlu"},{f:"1501-07-01",t:"1514-10-15",d:"safevi",kaynak:"gün komşudan: Bayburt (bölge zinciri)"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti"}],
  d:[{f:"1514-10-15",t:"1920-04-23",kaynak:"TDV biyikli-mehmed-pasa: '15 Ekim 1514'te Erzurum civarındaki Titkir mevkiine vardığında Bayburt ve Kiğı'nın fethedildiği haberini aldı' ⇒ ÜST SINIR (fetih bu gün ya da önce)"}] },
{ ad:"Poti (Faş Kalesi)", tur:"kale", lat:42.146, lon:41.672, g:0, k:0, v:[{f:"1555-05-29",t:"1579-07-26",k:"İmereti krallığı (tâbi)",kaynak:"TDV gurcistan: Amasya (1555) — İmereti Osmanlı nüfuz bölgesine; Poti'nin İmereti'ye aidiyeti ankraj Kutaisi (BEYANLI), Kutaisi v: ile aynı pencere (POSTIT-96)"}],kaynak:"TDV fas--gurcistan (M. Aydın 2020) · TDV edirne-antlasmasi · öncesi ankraj Kutaisi",
  neden:"KUTU-A-1014 (0074/H-0014): Rioni ağzındaki Osmanlı Faş Kalesi'nin noktası yoktu. Bütün Osmanlı uçları TDV fas--gurcistan (Mustafa Aydın, 2020). 🟡 1579 ÖNCESİ imereti: ŞEHİR TANIKLIĞI DEĞİL, ankraj Kutaisi zinciri. 1640-1724 __BOSLUK__: kale yıkıldı ve sahibi kaynakta yok. 1828-1917 rusya: Kars deseni (fiilî teslimden itibaren); hukukî devir Edirne 1829-09-14.",
  s:[{f:"1281-01-01",t:"1490-01-01",d:"gurcistan"},{f:"1490-01-01",t:"1579-07-26",d:"imereti",kaynak:"ankraj Kutaisi (BEYANLI) — TDV fas--gurcistan 1461 sonrası 'Faş kıyıları da Osmanlı Devleti'ne bağlandı' der, yılsız"},{f:"1640-01-01",t:"1724-03-01",d:"__BOSLUK__",kaynak:"TDV fas--gurcistan: '1640'ta Faş Kalesi, Gürya ve Mingrelli prenslerin katılımıyla İmeretiya birlikleri tarafından yerle bir edildi' — 1640-1724 sahibi ADIYLA söylenmiyor; en yakın kimliğe İTİLMEDİ"},{f:"1809-11-27",t:"1812-12-19",d:"rusya"},{f:"1828-06-26",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-05-26",d:"transkafkasya"},{f:"1918-05-26",t:"1921-03-16",d:"gurcistan-demokratik-cumhuriyeti",kaynak:"ankraj Kutaisi"},{f:"1921-03-16",t:"1991-04-09",d:"sovyet-rusya"},{f:"1991-04-09",t:"2000-12-31",d:"gurcistan-cumhuriyeti"}],
  d:[{f:"1579-07-26",t:"1640-01-01",kesinlik:{f:"gun",t:"yil"},kaynak:"TDV fas--gurcistan: Kılıç Ali Paşa '26 Temmuz 1579'da Faş Kalesi'ni inşa etti' · bitiş '1640'ta … yerle bir edildi' (YIL)"},{f:"1724-03-01",t:"1809-11-27",kesinlik:{f:"ay",t:"gun"},kaynak:"TDV fas--gurcistan: inşa kararı 23 Aralık 1723 · 'Kalenin inşasına Mart 1724'te başlandı' (AY) · '27 Kasım 1809'da' Ruslara teslim"},{f:"1812-12-19",t:"1828-06-26",y:"antlasma",kaynak:"TDV fas--gurcistan: '1812 Bükreş Antlaşması gereğince Faş Kalesi … Osmanlı Devleti'ne verildi (19 Aralık 1812)' · '26 Haziran 1828'de Ruslar'a teslim edildi'"}] },

];
