// -*- coding: utf-8 -*-
// YER_YAMA_ACIK -- VERİ AÇIK oturumu, 27 Ağustos 2026, ORHANGAZİ sevkiyle.
// KAYNAK KÜMESİ: 284 açık maddenin (5 HUKUM-*.json: 0031-0032, 0033-0034,
// 0035, 0036, BAYAT) VERİ türü olanları + 10 Ağustos'ta yazılmış ama HİÇ
// UYGULANMAMIŞ denetim/TDV-TARIH.md'nin "NET · bedava" kalemleri.
//
// Bu dosya bir YAMA'DIR — var olan `data/yerlesimler.js` kayıtlarını AD
// EŞLEŞTİREREK düzeltir. Yeni koordinat YOK, yeni nokta YOK.
// `data/*.js`/`arac/*.py`'ye hiçbir yazma yapılmadı; uygulamayı koordinatör
// yapar.
//
// ⚠️ ÖNEMLİ BULGU (7 kalemin 6'sı için): bu düzeltmeler denetim/TDV-TARIH.md
// tarafından 10 Ağustos 2026'da TDV kaynaklarıyla zaten NET olarak
// belgelenmişti ve "koordinatör uygular" notuyla bırakılmıştı — 17 gün
// hiç uygulanmadı. Ben yalnız (a) bugünkü canlı veriyle HÂLÂ AYNEN AÇIK
// olduklarını node ile tek tek doğruladım, (b) uygulanabilir yama biçimine
// çevirdim. TDV araştırmasının kendisi bana ait değil, kaynağı kaydım.

window.YER_YAMA_ACIK = [
 {
  "no": "TDV-K1 (parti-emrelic-0004/H-0006)",
  "baslik": "Erzincan'ın Osmanlı'ya girişi 42 yıl erken + aradaki Karakoyunlu 12 yıl hiç yok",
  "tur": "veri",
  "olcum": "denetim/TDV-TARIH.md KALEM 1 (10 Ağustos, NET, iki bağımsız TDV maddesiyle: `erzincan` + `kemah`). Bugün (27 Ağustos) node ile doğrulandı: data/yerlesimler.js hâlâ ESKİ hâliyle duruyor — d:1473-08-11 (Otlukbeli'yi fetih sayıyor, TDV: Otlukbeli'den SONRA da Akkoyunlu'da kaldı), s: dizisinde 1410-1473 tek parça 'akkoyunlu' (TDV: 1410-1422 Karakoyunlu, sonra Akkoyunlu).",
  "hukum": "cozuldu-oneri: ad='Erzincan' eşleştir. d: dizisindeki f:'1473-08-11' → f:'1514-10-23' olarak değiştir (Çaldıran sonrası, TDV'nin verdiği TEK tam gün — 1514-01-01 YAZILMADI çünkü Ocak 1514'te şehir hâlâ Nûr Ali Halife'nin elindeydi, yuvarlak yıl burada YANLIŞ bir gerçek yazardı). s: dizisindeki {f:'1410-01-01',t:'1473-08-11',d:'akkoyunlu'} kaydını ÜÇE böl: {f:'1410-01-01',t:'1422-01-01',d:'karakoyunlu'}, {f:'1422-01-01',t:'1502-01-01',d:'akkoyunlu'}, {f:'1502-01-01',t:'1514-10-23',d:'safevi'}. Not: Kemah'ın (1515-05-19) ve Erzurum'un (1518) zaten kullandığı 1502-01-01 sınırıyla birebir uyumlu, boşluk açmaz.",
  "kaynak": "denetim/TDV-TARIH.md KALEM 1 · TDV `erzincan` [46,60] + `kemah` [44]"
 },
 {
  "no": "TDV-K2 (parti-0002/H-0016 ailesi)",
  "baslik": "İlhanlı üçlüsü (Konya·Aksaray·Niğde): 1335 Eretna kırılması hiç yok, Niğde'de ayrıca 5 yıllık Osmanlı dönemi eksik",
  "tur": "veri",
  "olcum": "denetim/TDV-TARIH.md KALEM 2 (NET, dört bağımsız TDV maddesi). Bugün doğrulandı: Konya/Aksaray/Niğde'nin üçünde de s: dizisi hâlâ {f:'1308-01-01',t:'1366-01-01',d:'ilhanli'} tek parça (TDV: 1335'te Eretna kuruldu, bölge ona geçti). Ayrıca Konya ve Aksaray'da d:{f:'1397-07-01',t:'1402-07-28'} (Akçay Muharebesi sonrası Osmanlı) VAR ama Niğde'de o kayıt YOK — aynı cümlede aynı savaşta alınan üç şehrin ikisi Osmanlı oluyor, üçüncüsü olmuyor.",
  "hukum": "cozuldu-oneri: ÜÇÜNDE DE (ad='Konya','Aksaray','Niğde') s: dizisindeki {f:'1308-01-01',t:'1366-01-01',d:'ilhanli'} kaydını ikiye böl: {f:'1308-01-01',t:'1335-01-01',d:'ilhanli'}, {f:'1335-01-01',t:'1366-01-01',d:'eretna'}. AYRICA yalnız Niğde'ye Konya/Aksaray'daki gibi d: dizisine {f:'1397-07-01',t:'1402-07-28'} ekle VE s: dizisindeki {f:'1366-01-01',t:'1468-01-01',d:'karaman'} kaydını {f:'1366-01-01',t:'1397-07-01',d:'karaman'} + {f:'1402-07-28' [timurlu/karaman, Konya-Aksaray'daki gibi] ...,t:'1468-01-01',d:'karaman'} olarak böl. SIFIR yeni kırılma günü gerektirir — 1335/1397/1402 hepsi çekirdekte zaten var, 1335 için madde de zaten var ('Eretna Beyliği'nin kuruluşu').",
  "kaynak": "denetim/TDV-TARIH.md KALEM 2 · TDV `karamanogullari`[62] + `eretnaogullari`[39] + `nigde`[55,58] + `konya`[71]"
 },
 {
  "no": "TDV-K3 (parti-0002/H-0015 + parti-emrelic-0008/H-0001 + parti-emrelic-0029/H-0002)",
  "baslik": "Sivrihisar 'Germiyan çeyizi' YANLIŞ — o listede Sivrihisar hiç geçmiyor, gerçek sahibi Karaman",
  "tur": "veri",
  "olcum": "denetim/TDV-TARIH.md KALEM 3 (NET). Aynı kusur BAYAT AVCISI turunda (bugün) BAĞIMSIZ olarak da bulundu (grup-D/parti-emrelic-0008/H-0001, grup-I/parti-emrelic-0029/H-0002) — üç ayrı ölçüm aynı sonuca varıyor. TDV `germiyanogullari` maddesindeki çeyiz listesi (Kütahya·Simav·Eğrigöz·Tavşanlı) Sivrihisar'ı HİÇ içermiyor; TDV `sivrihisar` maddesi gerçek sahibi olarak Karamanoğulları'nı gösteriyor. Bugün doğrulandı: data/yerlesimler.js hâlâ s:germiyan 1300→1354.",
  "hukum": "cozuldu-oneri (UCUZ seçenek B — TDV'nin kendi önerdiği ucuz sürüm): ad='Sivrihisar' eşleştir. Yalnız SAHİBİ düzelt, tarihlere DOKUNMA: s: dizisindeki d:'germiyan' → d:'karaman'; s: dizisindeki d:'timurlu' (1402-1404), d:'suleyman-celebi' (1404-1411), d:'mehmed-celebi' (1411-1413) kayıtlarının ÜÇÜNÜ DE d:'karaman' yap (TDV: Timur Sivrihisar'ı Karamanoğulları'na verdi, Süleyman Çelebi kuşattı ama ALAMADI). SIFIR yeni kırılma günü, SIFIR yeni madde. (TAM sürüm — dört yeni kırılma günü 1356/1362/1363/1415 ile — ayrı, daha pahalı bir iş; TDV yalnız hicrî yıl veriyor, gün yok.)",
  "kaynak": "denetim/TDV-TARIH.md KALEM 3 · TDV `sivrihisar`[40] + `germiyanogullari`[53,56]"
 },
 {
  "no": "TDV-K4 (parti-0002/H-0015)",
  "baslik": "Çankırı'nın Candaroğulları'ndan Osmanlı'ya girişi 38 yıl erken — Ankara'nın gününe yapışmış",
  "tur": "veri",
  "olcum": "denetim/TDV-TARIH.md KALEM 4 (NET). Bugün doğrulandı: data/yerlesimler.js hâlâ s:{f:'1309-01-01',t:'1354-08-01',d:'candar'} → d:{f:'1354-08-01',...} (Ankara'nın 1354 fetih gününe yapışmış). TDV: Çankırı, Candaroğulları'nın Kastamonu şubesiyle birlikte 1392'de (Kastamonu'nun ilhakı günü) düştü, 1354'te DEĞİL.",
  "hukum": "cozuldu-oneri: ad='Çankırı' eşleştir. s: dizisindeki {f:'1309-01-01',t:'1354-08-01',d:'candar'} kaydının t: alanını '1392-11-01' yap; d: dizisindeki ilgili kaydın f: alanını da '1392-11-01' yap. 🔴 GÜN '1392-01-01' DEĞİL '1392-11-01' — '1392-01-01' günü zaten dolu ve YANLIŞ bir maddeye yapıştırırdı ('Teke ilinin ilhakı: Antalya'). '1392-11-01' zaten çekirdekte var, zaten madde taşıyor ('Kastamonu'nun ilhakı', olaylar_ek.js) ve 14 uçlu bir kırılma günü (Kastamonu, Bartın, Safranbolu, Eflani, Devrek, Akçakoca, Karadeniz Ereğli ile aynı gün) — SIFIR yeni madde.",
  "kaynak": "denetim/TDV-TARIH.md KALEM 4 · TDV `candarogullari`[52] + `cankiri`[45]"
 },
 {
  "no": "TDV-K10 (parti-0003/H-0018)",
  "baslik": "Eflak'ın Osmanlı tâbiliği 45 yıl geç başlıyor — 1462 bir tâbiiyet başlangıcı değil, voyvoda değişimi (Vlad→Radu)",
  "tur": "veri",
  "olcum": "denetim/TDV-TARIH.md KALEM 10 (NET). Bugün 13 kayıt (Bükreş, Tırgovişte, Piteşti, Slatina, Buzău, Rimnik-i Sârat, Krayova, Tırgu Jiu, Rimnik, Turnu Severin, Kımpulung — Yergöğü/İbrail hariç, onlar zaten ayrı düzeltilmiş) node ile sorgulandı: hepsinin v: (tâbi) dizisi hâlâ f:'1462-06-01'den başlıyor. TDV: Eflak 1396'da Bayezid'i tanıdı, 1417'de KESİNLEŞTİ (Segedin Antlaşması'na kadar sürdü); 1462 yalnız Vlad'ın (Kazıklı Voyvoda) tahttan inip Radu'nun İstanbul'a tam tâbi olmasıdır — REJİM DEĞİŞİKLİĞİ, tâbiiyet BAŞLANGICI değil.",
  "hukum": "cozuldu-oneri: yukarıdaki 11 yerleşimin (Bükreş, Tırgovişte, Piteşti, Slatina, Buzău, Rimnik-i Sârat, Krayova, Tırgu Jiu, Rimnik, Turnu Severin, Kımpulung) HER BİRİNDE v: dizisindeki İLK kaydın f: alanını '1462-06-01' → '1417-01-01' yap (Krayova/Tırgu Jiu/Rimnik/Turnu Severin'in ikinci Avusturya-arası dönemine DOKUNMA, yalnız ilk f:). Böylece 1462-06-01'deki 22 uç (11×2) tamamen kalkar. ⚠️ Yan not (ARAŞTIRILMADI, bu yamanın kapsamı dışı): künye `eflak` f:1330-01-01 ama 12 kaydın s: dizisi 1281-01-01'den 'eflak' yazıyor — künye doğmadan 49 yıl önce boyanıyor, kimin yazılacağı (muhtemelen Macar nüfuzu) ölçülmedi.",
  "kaynak": "denetim/TDV-TARIH.md KALEM 10 · TDV `eflak`[45,46]"
 },
 {
  "no": "TDV-K11b (parti-emrelic-0008/H-0003)",
  "baslik": "Malatya'nın Memlük dönemi 34 yıl erken başlıyor VE 1402-1516 arası yanlış sahip (Memlük yerine Dulkadıroğulları olmalı) VE fetih günü 27 gün yanlış",
  "tur": "veri",
  "olcum": "denetim/TDV-TARIH.md KALEM 11b (NET, TDV TAM GÜN veriyor: 4 ayrı `malatya` maddesi alıntısı). Bugün doğrulandı: data/yerlesimler.js hâlâ s:[{f:'1281-01-01',t:'1399-09-01',d:'memluk'},{f:'1402-07-28',t:'1516-08-24',d:'memluk'}], d:{f:'1516-08-24'}.",
  "hukum": "cozuldu-oneri: ad='Malatya' eşleştir. (1) s: dizisindeki ilk kaydın f: alanını '1281-01-01' → '1315-04-28' yap (TDV: Memlük ordusu 28 Nisan 1315'te girdi; öncesi başka sahip — bu yamanın kapsamı DIŞINDA, ARAŞTIRILMADI). (2) s: dizisindeki ikinci kaydı {f:'1402-07-28',t:'1516-08-24',d:'memluk'} yerine {f:'1402-07-28',t:'1516-07-28',d:'dulkadir'} yap (TDV: 1338'den itibaren Dulkadıroğulları ile Memlük mücadele alanı, ama 1402 sonrası fiilen Dulkadıroğulları hâkim). (3) d: dizisindeki f:'1516-08-24' → '1516-07-28' yap (TDV: 28 Temmuz 1516, veri 27 gün geç).",
  "kaynak": "denetim/TDV-TARIH.md KALEM 11b · TDV `malatya`[63,65,66,67]"
 },
 {
  "no": "TDV-K11a (parti-emrelic-0008/H-0003)",
  "baslik": "Divriği'nin Memlük dönemi 110 yıl erken başlıyor — bitiş (1516-08-24) TDV ile birebir doğru, BAŞLANGIÇ yanlış",
  "tur": "olculecek",
  "olcum": "denetim/TDV-TARIH.md KALEM 11a (NET — yalnız BİTİŞ tarihi ve 'memluk 1391'den önce başlamamalı' hükmü net; PRE-1391 zincirin kendisi — hangi tarihte kimden kime geçtiği — TDV'nin bu maddede AÇIKÇA vermediği bir ayrıntı, yorum satırında 'Mengücüklü → İlhanlı → Selçuklu → ERETNA' sırası anılıyor ama tarihleri yok). Bugün doğrulandı: hâlâ s:{f:'1281-01-01',t:'1399-09-01',d:'memluk'}.",
  "hukum": "olculecek: kesin olan TEK ŞEY — memluk 1391'den ÖNCE başlayamaz (TDV: 'Memlükler tarafından zaptedildi (1391)'), d:'1516-08-24' zaten doğru. NE ölçülecek: 1281-1391 arası Divriği'nin gerçek sahip zinciri (muhtemelen Mengücüklü→İlhanlı→Selçuklu/Eretna karışımı, ama tarihleri TDV'nin bu maddesinde yok) — komşu Sivas/Kayseri zincirleriyle karşılaştırmalı ayrı bir araştırma gerekiyor. Tarih uydurulmadı.",
  "kaynak": "denetim/TDV-TARIH.md KALEM 11a · TDV `divrigi`[48,49]"
 },
 {
  "no": "H-0008+H-0011 (parti-emrelic-0036)",
  "baslik": "Urfa'nın 1832 Mısır işgal tarihi TDV ile çelişiyor — TDV 1839 diyor",
  "tur": "veri",
  "olcum": "Bugünkü BULGU-PAKET-0036.md turunda bulundu. data/yerlesimler.js Urfa kaydı v:{f:'1832-08-15',t:'1841-02-25'} taşıyor. TDV `sanliurfa` maddesi (canlı, içerik okundu): 'Urfa'nın 1839'da Kavalalı Mehmed Ali Paşa'nın oğlu İbrahim Paşa'nın kısa süre kontrolü altına giren...' — yani işgal 1839'da (2. Mısır buhranı), 1832'de DEĞİL. Kütahya Sözleşmesi'nin (1833) resmî verilen-vilayet listesi de Urfa'yı hiç saymıyor.",
  "hukum": "olculecek: ad='Urfa' (Şanlıurfa) — v: dizisindeki f:'1832-08-15' muhtemelen YANLIŞ, muhtemel doğrusu 1839 civarı (2. Mısır buhranı, Nizip Savaşı sonrası). NE ölçülecek: TDV'nin 'kısa süre' ifadesini gün hassasiyetine indirgeyecek ek kaynak (Nizip sonrası İbrahim Paşa'nın Diyarbakır/Urfa ilerleyişi) — kesin gün olmadan yalnız yıl değiştirmek de yarım kalır, bu yüzden veriye şimdi yazmadım.",
  "kaynak": "denetim/BULGU-PAKET-0036.md · TDV `sanliurfa`"
 },
 {
  "no": "H-0011 (parti-emrelic-0036)",
  "baslik": "Maraş'ın Mısır işgal süresi TDV'ye göre ~7 yıl fazla ve başlangıcı da yanlış",
  "tur": "veri",
  "olcum": "Bugünkü BULGU-PAKET-0036.md turunda bulundu. data/yerlesimler.js Maraş (Kahramanmaraş) civarı kaydı v:{f:'1832-07-29',t:'1841-02-25'} taşıyor. TDV `kahramanmaras` maddesi (canlı, içerik okundu): 'Maraş 1833'te Kavalalı İbrahim Paşa'nın işgaline uğradı ve on dokuz aya yakın onun idaresinde kaldı' — yani başlangıç 1833 (1832 değil) ve süre ~19 ay (≈1834-35'te biter, 1841'e DEĞİL).",
  "hukum": "olculecek: ad='Kahramanmaraş'/'Maraş' — v: dizisindeki f:'1832-07-29' muhtemelen '1833-...' olmalı, t:'1841-02-25' muhtemelen ~19 ay sonrası (≈1834/1835 civarı) olmalı. NE ölçülecek: TDV'nin '1833'te' ve '19 ay' ifadelerini gün hassasiyetine indirgeyecek ikinci bir akademik kaynak — TDV kendisi kesin gün vermiyor.",
  "kaynak": "denetim/BULGU-PAKET-0036.md · TDV `kahramanmaras`"
 }
];
