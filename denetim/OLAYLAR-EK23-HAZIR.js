// -*- coding: utf-8 -*-
// OLAYLAR_EK23 — ÇEKİRDEK KRONOLOJİ BORCU · ⑪ KOL · 7 Eylül 2026
// Oturum: ÇEKİRDEK KRONOLOJİ (BALKAN-DOĞU AVRUPA) · Koordinatör: 1.MURAT
//
// 🔴 BU DOSYA `denetim/` ALTINDA — `data/`ye KOYULMADI (Koşu 7b canlı).
//    Koşu bitince koordinatör `data/olaylar_ek23.js` olarak taşıyacak.
// 🔴 `index.html`E SATIR EKLENMELİ — yeni bir veri dosyası (`CLAUDE.md §5`).
//    Ad alanı: `window.OLAYLAR_EK23`.
//
// ═══════════ NİÇİN VAR ═══════════
// `Değişmez 2`nin evreni YALNIZ `data/olaylar*.js`. `data/kronoloji*.js`e
// yazılan madde CANLI olduğu hâlde denetime GÖRÜNMEZ. Dört oturumun
// bekleyen çekirdek maddesi bu dosyada toplandı.
//
// ═══════════ ÖLÇÜM — "bütün bekleyenler" 440 DEĞİL 39 ═══════════
// 23 `denetim/KRONOLOJI-*` artefaktı tarandı, şema TAHMİN EDİLMEDİ, DÖKÜLDÜ:
//   madde görünümlü kayıt TOPLAM                       440
//      /kunyeler[]/eklenen[]                           418  🟡 KÜNYE
//      öteki yollar                                     22  🟢 ÇEKİRDEK
//   + `KRONOLOJI-ISG-FAZ2-cukurova.js`                  17  🟢 ÇEKİRDEK
// 🔴 O 418 `data/devletler.js`teki künyelerin `kronoloji:` dizisine gider,
//    `olaylar*.js`e DEĞİL — altı dosya bunu `hedef_dosya` alanında AÇIKÇA
//    yazıyor. Çekirdeğe dökülselerdi yanlış kovaya girerlerdi.
// 🟢 Ölçüt (yolu `kunyeler` içeren → künye) 13 beyanlı dosyanın 13'ünde de
//    tuttu; beyansız 8 dosya bu ölçütle ayrıldı.
//
// ═══════════ MÜKERRER — İKİ EŞİKLE ÖLÇÜLDÜ ═══════════
// ① `denetle.py`nin kendi eşiği taklit edildi (400 gün · 0.34 benzerlik):
//    **55 eşleşme** verdi ve okununca ÇOĞU SAHTE çıktı —
//      «Tarsus'un kurtuluşu» ↔ «Büyük Taarruz ve İzmir'in kurtuluşu» 0.59
//      «Urfa'nın … işgali»   ↔ «Maraş'ın … işgali»                   0.92
//    ⇒ 0.34 bir TARAMA eşiği, bir HÜKÜM eşiği DEĞİL.
// ② AYNI GÜN ölçüldü (mükerrerlik iddiası için gün eşleşmesi ÖN KOŞUL):
//      çekirdekte aynı günde madde var        4
//         → GERÇEK mükerrer                   1  (Zend)
//         → aynı gün, BAŞKA konu              3
//      çekirdekte o gün hiç madde yok        35
//
// ═══════════ ÜÇ DÜŞÜRME — hepsi ÖLÇÜME dayanıyor ═══════════
// ① `1794-01-01` Zend hânedanının sonu — **ÇEKİRDEKTE ZATEN VAR**
//    (`olaylar_ek22.js`, aynı gün, benzerlik 0.61). Şartname onu
//    "bekliyor" diye sayıyordu; BORÇ ÖDENMİŞ. (`§11`: kendi ödediğin
//    borcu kaydını okumadan yeniden iş sanabilirsin.)
// ② + ③ `1917-03-15` ve `1917-11-07` — `KRONOLOJI-BALKAN`ın sürümleri
//    düşürüldü; `KRONOLOJI-1917-TASIMA`nınkiler KAYNAKLI (Riasanovsky &
//    Steinberg, *A History of Russia*) ve takvimi metinde AÇIKÇA yazıyor.
//    🔴 İkisi de BU OTURUMUN kendi kayıtlarıydı — kendi mükerrerimi
//    düşürüyorum.
//
// ═══════════ 🔴 ŞEMA ÇEVİRİSİ — TAŞIMA BİR KOPYALAMA DEĞİL ═══════════
// İki kova FARKLI ŞEMA kullanıyor ve bu ölçüldü:
//   ÇEKİRDEK (olaylar*.js · 1317 madde)  `k` %96 · `gun` %96 · `kisiler` %97
//                                        · `duygu` %96 · `tur` YALNIZ %4
//   KUYRUK   (kronoloji*.js · 4652 madde) `tur` %100 · `onem` %100
//                                        · `dunya` %100 · `k` %0
// Ve okuyan taraf `k`: `js/app.js:1898` → `MUHAREBE_K[o.k]` ·
// `denetle.py:3371,3389` → `o.get("k")`. ⇒ `tur:` ile gelen bir maddenin
// türü çekirdekte **hiçbir yerde okunmaz** (bugün AVRUPA'nın `not:`
// vakasıyla aynı sınıf).
// 🟢 ÇARE MEKANİK OLDUĞU YERDE UYGULANDI: `tur` değeri çekirdeğin 28
//    değerlik `k` sözlüğünde VARSA `k` olarak da yazıldı; `tur` SİLİNMEDİ.
// 🔴 SÖZLÜKTE OLMAYAN BEŞ DEĞER ÇEVRİLMEDİ — eşleşme UYDURULMAZ:
//      1917-03-15 · 1917-11-07 · 1906-01-01 · 1918-11-26   tur="son"
//      1918-01-01                                tur="toprak-kazanc"
//    Çekirdek `k` sözlüğünde `son` ve `toprak-kazanc` YOK.
//    ⇒ Bu beşinin `k:` değeri bir SEMANTİK KARAR ister (`son` → `taht` mı
//      `siyaset` mi `kayip` mı?) ve o karar bu oturumun değil.
//      **Koordinatör ya da maddenin yazarı seçmeli.**
//
// ═══════════ GÜN HASSASİYETİ (şartname: "gün yaz") ═══════════
//   `YYYY` ya da `YYYY-MM` biçimli madde: **0** — hiçbiri ay hassasiyetinde
//   `YYYY-01-01` (yıl hassasiyeti, `§4`ün kabul edilmiş yazımı): 5
//      1415-01-01 · 1443-01-01 (Arnavutluk) · 1906-01-01 (Agadez) ·
//      1918-01-01 (Besarabya) · 1919-01-01 (Urfa)
//   🟡 Beşi de "yıl biliniyor, gün bilinmiyor" demenin kabul edilmiş yolu;
//     ay hassasiyetinin ayın 1'ine genişlemesi tuzağı BURADA YOK.
//     Her birinin gerekçesi kendi kaynak dosyasında yazılı.
//
// ═══════════ 🔴 TAŞIMA: KUYRUKTAN SİLİNMESİ GEREKENLER ═══════════
// `KRONOLOJI-1917-TASIMA-0906.json`un üç maddesi `data/kronoloji_rusya.js`te
// HÂLÂ DURUYOR. İkisi de `index.html`de yüklü ⇒ **kopyalanırsa madde
// arayüzde İKİ KEZ görünür** ve mükerrer denetimi öter.
//   1917-03-08 · 1917-03-15 · 1917-11-07  →  `kronoloji_rusya.js`ten SİL
//

window.OLAYLAR_EK23 = [
  // [KRONOLOJI-ARNAVUTLUK-0905.json]
  { t: "1415-01-01",
    b: "Kruya'nın Kastrioti eline geçmesi ve Osmanlı tâbiiyeti — Akçahisar",
    d: "Kruya'yı ailesi adına geri alan Nikola Thopia'nın ölümüyle Topia hânedanının şehir üzerindeki elli yıllık hâkimiyeti sona erdi. Yerine geçen Gjon Kastrioti şehrin idaresini Osmanlılar'ın vasali sıfatıyla üstlendi; böylece Kruya, doğrudan bir fetihle değil bir tâbiiyet bağıyla Osmanlı düzenine girdi. Bu bağ, Gjon'un oğlu İskender Bey'in 1443'teki isyanına kadar sürecek ve Arnavutluk'un iç beylikleri ile Osmanlı arasındaki ilişkinin tipik biçimini teşkil edecekti. TDV'nin verdiği tarih yıl hassasiyetindedir; Nikola Thopia'nın ölüm günü kaynakta bulunamadı.",
    k: "siyaset",
    etiket: ["siyaset"],
    yer: "Akçahisar (Kruja), Orta Arnavutluk",
    yer_id: "Akçahisar (Kruja)",
    kisiler: "Gjon Kastrioti, Nikola Thopia",
    gun: "1415",
    duygu: ["🤝"],
    kaynak: "kruya",
    statu_vasal: ["Akçahisar (Kruja)"] },

  // [KRONOLOJI-ARNAVUTLUK-0905.json]
  { t: "1443-01-01",
    b: "İskender Bey'in isyanı ve Akçahisar'ın elden çıkması",
    d: "Gjon Kastrioti'nin oğlu İskender Bey, babasından devraldığı Osmanlı tâbiiyetini bırakarak isyan etti ve kuzey Arnavutluk yolundaki Svetigrad (Kocacık) Hisarı ile Akçahisar'ı zaptetti. Kruya böylece yirmi sekiz yıllık vasal statüsünden çıkıp otuz beş yıl sürecek bir direniş merkezine dönüştü; şehir ancak İskender Bey'in ölümünden on yıl sonra Osmanlı idaresine girecekti. ⚠️ TDV isyanın başlangıcını kendi şüphesiyle aktarır: Batı kaynaklarına göre İskender Bey İzlâdi savaşında (1443) timarlı sipahi olarak bulunmuş, bozgunun ardından Osmanlı ordusundan kaçmış ve sonra isyana kalkışmış olabilir. Ansiklopedi bunu kesin bir vâkıa olarak değil bir iddia olarak kaydeder. Gün kaynakta bulunamadı.",
    k: "isyan",
    etiket: ["isyan", "toprak-kayip"],
    yer: "Akçahisar (Kruja), Svetigrad (Kocacık), Kuzey Arnavutluk",
    yer_id: "Akçahisar (Kruja)",
    kisiler: "İskender Bey (Gjergj Kastrioti), II. Murad",
    gun: "1443",
    duygu: ["⚔️"],
    kaynak: "iskender-bey",
    kaybedilen: ["Akçahisar (Kruja)"] },

  // [KRONOLOJI-AVRUPA-0906.json]
  { t: "1523-06-06",
    b: "Kalmar Birliği'nin dağılması — Gustav Vasa'nın İsveç kralı seçilmesi",
    d: "6 Haziran 1523'te Strängnäs'ta toplanan İsveç Riksdag'ı, Danimarka kralı II. Christian'ın halefini tanımayı reddederek Gustav Eriksson Vasa'yı kral seçti. 1397'den beri Danimarka, Norveç ve İsveç'i tek hükümdarda birleştiren Kalmar Birliği böylece fiilen sona erdi ve İsveç bağımsız bir krallık olarak yoluna devam etti. Norveç ise birlikte kalarak Danimarka'ya bağlandı; İskandinavya'nın üç yüz yıl sürecek Danimarka-İsveç rekabeti bu ayrılıkla başladı.",
    k: "siyaset",
    etiket: ["siyaset", "bagimsizlik"],
    yer: "Strängnäs, İsveç",
    yer_id: "Stokholm",
    kisiler: "Gustav Vasa, II. Christian",
    gun: "6 Haziran 1523",
    duygu: ["🏛"],
    kaynak: "EBSCO Research Starters (editöryal incelemeli akademik özet, imzalı: Joseph P. Byrne, 2022): «The Swedish Estates refused to recognize Frederick as the new monarch and elected Gustav by acclamation on June 6, 1523.» — TDV kapsam dışı, Kuzey Avrupa TDV kapsamı %0 (§4)." },

  // [KRONOLOJI-SISAM-0905.json]
  { t: "1832-12-10",
    b: "Sisam'a özerklik — vasal prensliğin kuruluşu",
    d: "Yunan İsyanı'nın ardından Batılı büyük devletlerin baskısı altında kalan Osmanlı hükûmeti, Sisam adasının özerkliğini kabul ederek burayı vasal bir prensliğe dönüştürdü. Ada dış işlerinde Osmanlı Devleti'ne bağlı kaldı; buna karşılık kendi bayrağını çekti ve koruyucu güçlerin himâyesinde iç işlerinde tamamen bağımsız hâle geldi. Yönetimi bir Ortodoks vali ile meclis üstlendi; Osmanlı adada garnizon tuttu fakat prensi kendisi tayin etmedi. Böylece Sisam, Şarkî Rumeli ve Girit'te sonradan tekrarlanacak olan «hükümranlık Osmanlı'da, idare yerli» düzeninin erken bir örneği oldu ve bu statü seksen yıl sürdü.",
    k: "siyaset",
    etiket: ["siyaset"],
    yer: "Sisam (Samos), Ege",
    yer_id: "Sisam",
    kisiler: "II. Mahmud",
    gun: "1832-12-10",
    duygu: ["🏛"],
    kaynak: "sisam",
    statu_vasal: ["Sisam"] },

  // [KRONOLOJI-AGADEZ-1906-0906.json]
  { t: "1906-01-01",
    b: "Fransa Agadez'i işgal etti — Aïr Tuareg sultanlığı sona erdi",
    d: "Fransız kuvvetleri Aïr bölgesinin merkezi Agadez'i işgal ederek şehirdeki Tuareg sultanlığının fiilî hâkimiyetine son verdi. TDV `nijer` maddesi işgalin gerekçelerinden birini açıkça kaydediyor: Fransızlar bu adımla bölge halkının Osmanlı Devleti ile irtibata geçmesini engellemeyi amaçlıyordu. 1405'ten beri süren Agadez (Aïr) Sultanlığı böylece bağımsız bir siyasî yapı olmaktan çıktı ve bölge Fransız Batı Afrikası'na bağlandı.",
    tur: "son",
    etiket: ["somurge", "isgal"],
    yer: "Agadez",
    yer_id: "Agadez",
    gun: "1906 (TDV YIL veriyor, gün vermiyor — `§4` gereği yıl hassasiyeti)",
    duygu: ["😔"],
    onem: 2,
    dunya: 1,
    kapsam: "dunya",
    kaynak: "nijer" },

  // [KRONOLOJI-YUNANANAKARA-0905.json]
  { t: "1912-10-21",
    b: "Preveze ve Vonitsa'nın kaybı — Ambrakya körfezi",
    d: "Balkan Savaşı'nın açılış haftasında Yunan kuvvetleri Ambrakya körfezinin ağzındaki Preveze ile karşı kıyıdaki Vonitsa'yı ele geçirdi. Körfezin kontrolü, Epir içlerine ve Yanya'ya yönelecek harekâtın deniz ikmalini güvence altına aldı; Yanya ancak dört ay sonra düşecekti. 🔴 TDV'de müstakil bir «Preveze» maddesi YOKTUR (slug ölçüldü, 302 döndü) ve kapsayıcı «Balkan Savaşı» maddesi de Preveze'yi anmaz. Buradaki gün, atlasın kendi kırılma kaydından gelmektedir; olayın kendisi için akademik bir kaynak ARANMAMIŞTIR.",
    k: "kayip",
    etiket: ["toprak-kayip"],
    yer: "Preveze, Vonitsa, Epir",
    yer_id: "Preveze",
    kisiler: "",
    gun: "1912-10-21",
    duygu: ["😔"],
    kaynak: "bulunamadı — TDV `preveze` slug'ı ÖLÜ (302, ölçüldü); kapsayıcı `balkan-savasi` gövdesi Preveze'yi anmıyor. Akademik kaynak ARANMADI.",
    kaybedilen: ["Preveze", "Vonitsa"] },

  // [KRONOLOJI-YUNANANAKARA-0905.json]
  { t: "1912-11-02",
    b: "Aynaroz ve Kesendire'nin elden çıkması — Halkidikya yarımadası",
    d: "Balkan Savaşı'nda Yunan ordusu Halkidikya yarımadasına girerek Aynaroz'daki Türk idaresine son verdi. Manastır cumhuriyeti, siyasî hâkimiyet değişmesine rağmen kendi müstakil idaresini korudu: Türk memurun yerini bir Yunan idareci aldı, liman ve iskele denetimi Yunan gümrüğü ile polisine geçti, fakat Aynaroz sıradan Yunan toprağından idarî olarak ayrı kaldı ve bu özel statü sonraki antlaşmalarda da sürdürüldü. ⚠️ TDV bu olayı yalnız «1912 yılı Kasım ayında» diye verir, GÜN VERMEZ; buradaki 2 Kasım günü kaynaktan değil atlasın kendi kırılma kaydından gelir.",
    k: "kayip",
    etiket: ["toprak-kayip"],
    yer: "Aynaroz (Athos), Kesendire (Kassandra), Halkidikya",
    yer_id: "Aynaroz (Athos)",
    kisiler: "",
    gun: "Kasım 1912",
    duygu: ["😔"],
    kaynak: "aynaroz",
    kaybedilen: ["Aynaroz (Athos)", "Kesendire (Kassandra)"] },

  // [KRONOLOJI-YUNANANAKARA-0905.json]
  { t: "1912-11-08",
    b: "Selânik'in teslimi — Hasan Tahsin Paşa'nın şehri Yunan ordusuna bırakması",
    d: "Balkan Savaşı'nın ilk haftalarında Yunan ordusu güneyden, Bulgar ordusu kuzeyden Selânik üzerine yürüdü; şehrin hangi devlete kalacağı iki müttefik arasında bir yarışa dönüştü. Vali Hasan Tahsin Paşa, kuşatmayı sürdürmenin şehri yıkıma götüreceğini görerek Selânik'i Yunanlılar'a teslim etti. Beş yüz yılı aşkın Osmanlı idaresi böylece sona erdi; şehrin Türk idaresinde kalmayı isteyen ahalisi ve özellikle yahudi cemaati sonradan protestolarda bulundu. Devrin resmî tanınması ise ancak 1913 antlaşmalarıyla geldi. ⚠️ TDV günü Rumî takvimle 26 Ekim 1912 olarak verir; buradaki 8 Kasım 1912 aynı günün mîlâdî karşılığıdır.",
    k: "kayip",
    etiket: ["toprak-kayip"],
    yer: "Selânik, Makedonya",
    yer_id: "Selanik",
    kisiler: "Hasan Tahsin Paşa",
    gun: "1912-11-08",
    duygu: ["😔"],
    kaynak: "selanik",
    kaybedilen: ["Selanik"] },

  // [KRONOLOJI-AFRIKA-0906.json]
  { t: "1916-11-06",
    b: "Ali Dinar'ın öldürülmesi — Dârfûr'un İngiliz Sudanı'na ilhakı",
    d: "Mehdî Devleti'nin 1898'de yıkılmasından sonra Ali Dinar Dârfûr Sultanlığı'nı yeniden kurmuş ve yirmi yıla yakın bağımsız hüküm sürmüştü. I. Dünya Savaşı'nda Osmanlı Devleti'nden yana tavır alması üzerine İngiliz kuvvetleriyle çatıştı ve 6 Kasım 1916'da öldürüldü. Dârfûr toprakları bir eyalet hâlinde İngiliz Sudanı'na bağlandı; böylece Sudan'ın bugünkü sınırları içindeki son bağımsız yapı da ortadan kalktı. Atlasta üç Dârfûr noktası (Ed-Da'în · Burâm · Radom) bugün `1916-05-23`te el değiştiriyor — o gün kaynaksız ve `darfur` künyesinin kendi `t:` değeriyle (1916-11-06) çelişiyor.",
    k: "fetih",
    etiket: ["toprak-kazanc", "savas"],
    yer: "Dârfûr, el-Fâşir",
    yer_id: "Darfur",
    kisiler: "Ali Dinar",
    gun: "6 Kasım 1916",
    duygu: ["😢"],
    kaynak: "sudan" },

  // [KRONOLOJI-1917-TASIMA-0906.json]
  { t: "1917-03-08",
    b: "Şubat Devrimi başladı (Petrograd ekmek ayaklanmaları)",
    d: "Petrograd'da ekmek kıtlığı ve savaş yorgunluğuyla başlayan gösteriler, günler içinde garnizon birliklerinin de isyana katılmasıyla genel bir ayaklanmaya dönüştü (Jülyen takvimiyle 23 Şubat, bu yüzden \"Şubat Devrimi\" adını taşır — Gregoryen'de 8 Mart). Rus tarihyazımında bu, üç yüz yıllık Romanov hanedanının fiilen sona erdiği hafta olarak kaydedilir.",
    k: "isyan",
    tur: "isyan",
    etiket: ["isyan", "devrim"],
    yer_id: "St. Petersburg",
    onem: 5,
    dunya: 4,
    kapsam: "ic",
    kaynak: "Riasanovsky & Steinberg, A History of Russia" },

  // [KRONOLOJI-1917-TASIMA-0906.json]
  { t: "1917-03-15",
    b: "II. Nikolay tahttan çekildi, Romanov hanedanı sona erdi ⭐",
    d: "II. Nikolay, kendisi ve oğlu adına tahttan çekildiğini ilan etti; kardeşi Mihail'in de ertesi gün tacı kabul etmeyi reddetmesiyle 1613'ten beri 304 yıl süren Romanov hanedanı ve üç yüzyıllık otokratik monarşi resmen sona erdi. Rus tarihyazımında Kulikovo, 1613, 1812 ve 1861 ile aynı düzeyde, imparatorluk döneminin kapanış tarihidir (bkz. [[rusya-gecici-hukumet]], [[sovyet-rusya]]).",
    tur: "son",
    etiket: ["siyaset", "taht"],
    yer_id: "Pskov",
    onem: 5,
    dunya: 4,
    kapsam: "ic",
    kaynak: "Riasanovsky & Steinberg, A History of Russia — devletler.js:299'dan taşındı, doğrulandı" },

  // [KRONOLOJI-1917-TASIMA-0906.json]
  { t: "1917-11-07",
    b: "Ekim Devrimi — Bolşevikler iktidarı ele geçirdi",
    d: "Lenin önderliğindeki Bolşevikler, Petrograd'da Geçici Hükûmet'i devirerek iktidarı ele geçirdi (Jülyen takvimiyle 25 Ekim, bu yüzden \"Ekim Devrimi\"). Bu dosyanın kapsamı imparatorluk dönemiyle (1281-1917) sınırlı olduğundan yalnız KAPANIŞ İŞARETİ olarak eklenmiştir — devamı için bkz. data/devletler.js `sovyet-rusya` kronolojisi ve [[rusya-gecici-hukumet]].",
    tur: "son",
    etiket: ["devrim", "siyaset"],
    yer_id: "St. Petersburg",
    onem: 5,
    dunya: 5,
    kapsam: "ic",
    kaynak: "Riasanovsky & Steinberg, A History of Russia" },

  // [KRONOLOJI-BALKAN-0906.json]
  { t: "1918-01-01",
    b: "Besarabya'nın Romanya'ya katılması — Prut ile Dinyester arasındaki bölge, 1812'den beri Rus idaresindeydi",
    tur: "toprak-kazanc",
    yer: "Kişinev (Chişinău)",
    kaynak: "TDV `bucak` (HTTP 200, 18.848 kar., müellif Kemal Karpat) — AYNEN: «Bolşevik İhtilâli sonunda Federal Moldavya Demokrat Cumhuriyeti adını alan Besarabya, 21 Aralık 1917'de Rumen ordusu tarafından işgal edildi; 24 Ocak 1918 tarihli 'Memleket Konseyi' kararıyla da Romanya'ya katıldı.» ve «1918'den 1940'a kadar Besarabya Rumen idaresinde kalmış, eski Bucak arazisi ise İsmâil, Cetatea Alba (Akkirman), Tighina (Bender) ve Kahul adlarıyla dört vilâyete bölünmüştür.» · İkinci gövde TDV `kili` (16.071 kar.): «1918'de Kili dahil Besarabya tekrar Romanya'ya verildi.»" },

  // [KRONOLOJI-BALKAN-0906.json]
  { t: "1918-11-26",
    b: "Karadağ Krallığı'nın Sırbistan'a katılması — Podgorica'da toplanan meclisin kararı; beş gün sonra Sırp-Hırvat-Sloven Krallığı ilân edildi",
    tur: "son",
    yer: "Podgorica",
    kaynak: "🔴 bulunamadı — TDV `karadag` (HTTP 200, 15.362 kar.) gövdesi okundu: birleşme için TARİH VERMİYOR. Gövdenin tek ilgili cümlesi TARİHSİZ: «Sırplar'ın idaresindeki Yugoslav Krallığı'nın bir parçası olarak Karadağ politik kimliğini kaybetti.» TDV `sirbistan` da yalnız yıl veriyor: «…1918'de anayasayla yönetilen Sırp, Hırvat ve Sloven Krallığı kuruldu.»" },

  // [KRONOLOJI-ISG-FAZ2-cukurova.js]
  { t: "1918-12-06",
    b: "Kilis'in İngilizler tarafından işgali",
    d: "Mondros Mütarekesi'nin ardından İtilâf kuvvetleri Güneydoğu'ya girdi ve Kilis İngiliz işgaline uğradı. İşgal bir yıldan fazla sürdü; İngilizler şehri 29 Ekim 1919'da Fransızlara devretti. TDV'nin kaydı şöyledir: \"Kilis, Mondros Mütarekesi'nin ardından 6 Aralık 1918 tarihinde İngilizler tarafından işgal edildi.\"",
    k: "savas",
    etiket: ["isgal", "toprak-kayip"],
    yer: "Kilis",
    yer_id: "Kilis",
    onem: 2,
    dunya: 0,
    kapsam: "ic",
    kaynak: "kilis" },

  // [KRONOLOJI-ISG-FAZ2-cukurova.js]
  { t: "1918-12-17",
    b: "Fransız kuvvetlerinin Mersin'e çıkarma yapması",
    d: "Fransız askerleri Çukurova işgalini denizden başlattı; Mersin limanına yapılan çıkarma, bölgenin iç kesimlerine yürüyüşün de başlangıcı oldu. TDV'nin kaydı şöyledir: \"I. Dünya Savaşı sonunda 17 Aralık 1918'de Fransız askerleri denizden Mersin'e çıkarma yapmaya başladı.\"",
    k: "savas",
    etiket: ["isgal", "toprak-kayip"],
    yer: "Mersin",
    yer_id: "Mersin",
    onem: 2,
    dunya: 0,
    kapsam: "ic",
    kaynak: "mersin" },

  // [KRONOLOJI-ISG-FAZ2-cukurova.js]
  { t: "1918-12-17",
    b: "Tarsus'un Fransız işgaline uğraması",
    d: "Mersin'e çıkan Fransız kuvvetleri aynı gün Tarsus'a ulaştı. TDV'nin kaydı şöyledir: \"Tarsus … 17 Aralık 1918'de Fransız işgaline ve Ermeni çetelerinin zulmüne uğradı.\"",
    k: "savas",
    etiket: ["isgal", "toprak-kayip"],
    yer: "Tarsus",
    yer_id: "Tarsus",
    onem: 2,
    dunya: 0,
    kapsam: "ic",
    kaynak: "tarsus" },

  // [KRONOLOJI-ISG-FAZ2-cukurova.js]
  { t: "1918-12-17",
    b: "Antep'e İngiliz kuvvetlerinin girmesi",
    d: "Güneydoğu'da işgalin ilk safhası İngiliz safhasıdır; Antep bir yıla yakın İngiliz idaresinde kaldı ve 5 Kasım 1919'da Fransızlara devredildi. TDV'nin kaydı şöyledir: \"I. Dünya Savaşı'ndan sonra ilk olarak 17 Aralık 1918'de İngilizler şehre girdiler.\"",
    k: "savas",
    etiket: ["isgal", "toprak-kayip"],
    yer: "Antep",
    yer_id: "Antep",
    onem: 2,
    dunya: 0,
    kapsam: "ic",
    kaynak: "gaziantep" },

  // [KRONOLOJI-ISG-FAZ2-cukurova.js]
  { t: "1918-12-24",
    b: "Adana'nın Fransızlar tarafından işgali",
    d: "Çukurova'nın merkezi olan Adana, Mersin ve Tarsus'un ardından işgal edildi ve Fransız idaresinin merkezi oldu. TDV'nin kaydı şöyledir: \"I. Dünya Savaşı sonunda 24 Aralık 1918'de Fransızlar tarafından işgal edilen Adana, halkın şiddetli mukavemeti neticesinde iki yıllık Fransız hâkimiyetinden sonra, 1921'de Ankara İtilâfnâmesi ile Türkiye'ye teslim edilmiş…\"",
    k: "savas",
    etiket: ["isgal", "toprak-kayip"],
    yer: "Adana",
    yer_id: "Adana",
    onem: 3,
    dunya: 0,
    kapsam: "ic",
    kaynak: "adana" },

  // [KRONOLOJI-ISG-FAZ2-cukurova.js]
  { t: "1919-01-01",
    b: "Urfa'nın İngilizler tarafından işgali",
    d: "Kaynak ay veriyor, gün vermiyor; tarih alanı `§4` gereği yıl hassasiyetinde yazıldı ve ay bu metinde duruyor. TDV'nin kaydı şöyledir: \"Urfa Mart 1919'da İngilizler, yedi ay kadar sonra da Fransızlar tarafından işgal edildi.\"",
    k: "savas",
    etiket: ["isgal", "toprak-kayip"],
    yer: "Urfa",
    yer_id: "Urfa",
    gun: "Mart 1919",
    onem: 2,
    dunya: 0,
    kapsam: "ic",
    kaynak: "sanliurfa",
    kesinlik: "ay" },

  // [KRONOLOJI-ISG-FAZ2-cukurova.js]
  { t: "1919-02-22",
    b: "Maraş'ın İngilizler tarafından işgali",
    d: "Maraş, I. Dünya Savaşı sonrası Fransız nüfuz bölgesinde bırakılmıştı; buna rağmen şehre önce İngiliz kuvvetleri girdi ve sekiz ay sonra idareyi Fransızlara devretti. TDV'nin kaydı şöyledir: \"Mondros Mütarekesi'nin ardından İngilizler 22 Şubat 1919'da şehri işgal ettiler.\"",
    k: "savas",
    etiket: ["isgal", "toprak-kayip"],
    yer: "Maraş",
    yer_id: "Maraş",
    onem: 2,
    dunya: 0,
    kapsam: "ic",
    kaynak: "kahramanmaras" },

  // [KRONOLOJI-ISG-FAZ2-cukurova.js]
  { t: "1919-10-29",
    b: "Maraş'ın İngilizlerden Fransızlara devredilmesi",
    d: "İngiltere ile Fransa arasındaki anlaşma gereği Güneydoğu'nun işgal idaresi el değiştirdi. TDV'nin kaydı şöyledir: \"İngiltere ile Fransa arasında yapılan antlaşma neticesinde Maraş ve çevresi Fransa'ya devredilince 29 Ekim 1919'da Fransızlar Maraş'a girdiler.\"",
    k: "siyaset",
    etiket: ["isgal"],
    yer: "Maraş",
    yer_id: "Maraş",
    onem: 2,
    dunya: 0,
    kapsam: "ic",
    kaynak: "kahramanmaras" },

  // [KRONOLOJI-ISG-FAZ2-cukurova.js]
  { t: "1919-10-29",
    b: "Kilis'in İngilizlerden Fransızlara devredilmesi",
    d: "Aynı devir Kilis'te de gerçekleşti. TDV'nin kaydı şöyledir: \"Bir yıldan fazla bir süre devam eden bu işgalden sonra İngilizler burayı 29 Ekim 1919'da Fransız kuvvetlerine terkettiler.\"",
    k: "siyaset",
    etiket: ["isgal"],
    yer: "Kilis",
    yer_id: "Kilis",
    onem: 2,
    dunya: 0,
    kapsam: "ic",
    kaynak: "kilis" },

  // [KRONOLOJI-ISG-FAZ2-cukurova.js]
  { t: "1919-11-05",
    b: "Antep'in İngilizlerden Fransızlara devredilmesi",
    d: "Antep'in devri Maraş ve Kilis'ten bir hafta sonra oldu. TDV'nin kaydı şöyledir: \"Yaklaşık bir yıl süren işgalin ardından Fransızlar ile yaptıkları anlaşma gereği burayı onlara terkettiler (5 Kasım 1919).\"",
    k: "siyaset",
    etiket: ["isgal"],
    yer: "Antep",
    yer_id: "Antep",
    onem: 2,
    dunya: 0,
    kapsam: "ic",
    kaynak: "gaziantep" },

  // [KRONOLOJI-ISG-FAZ2-cukurova.js]
  { t: "1920-02-11",
    b: "Maraş'ın kurtuluşu — Fransızların şehri boşaltması",
    d: "Yirmi iki gün süren şehir savaşının ardından Fransız kuvvetleri Maraş'ı boşalttı. Bu, Millî Mücadele'de bir şehrin halkın direnişiyle kurtarıldığı ilk vakadır; TBMM 5 Nisan 1925'te şehre kahramanlık unvanı verdi. TDV'nin kaydı şöyledir: \"Fransızlar 11 Şubat 1920'de şehri boşaltarak İslâhiye tarafına doğru çekilmeye başladılar.\"",
    k: "savas",
    etiket: ["isgal", "toprak-kazanc"],
    yer: "Maraş",
    yer_id: "Maraş",
    onem: 3,
    dunya: 0,
    kapsam: "ic",
    kaynak: "kahramanmaras" },

  // [KRONOLOJI-ISG-FAZ2-cukurova.js]
  { t: "1920-04-10",
    b: "Urfa'nın kurtuluşu — Fransızların antlaşmayla çekilmesi",
    d: "7 Şubat 1920'de başlayan halk ayaklanması iki ay süren çarpışmalarla sonuçlandı ve Fransız kuvvetleri şehri antlaşma şartlarıyla boşalttı. TDV'nin kaydı şöyledir: \"7 Şubat 1920'de işgal güçlerine karşı halk ayaklandı. Çarpışmalar neticesinde 10 Nisan 1920'de Fransızlar antlaşma şartlarıyla Urfa'yı boşalttı.\"",
    k: "savas",
    etiket: ["isgal", "toprak-kazanc"],
    yer: "Urfa",
    yer_id: "Urfa",
    onem: 3,
    dunya: 0,
    kapsam: "ic",
    kaynak: "sanliurfa" },

  // [KRONOLOJI-MANDA-0906.json]
  { t: "1920-07-01",
    b: "Filistin'de İngiliz mülkî manda idaresinin kurulması — askerî yönetimin sonu",
    d: "Aralık 1917'de Kudüs'ün alınmasıyla başlayan İngiliz askerî yönetimi, Temmuz 1920'de mülkî bir manda idaresine dönüştü. TDV: \"1920 Temmuzu'ndan itibaren Filistin'de mülkî bir manda idaresi kuruldu.\" Milletler Cemiyeti mandayı 24 Temmuz 1922'de resmen onayladı. Atlasta bu gün, Filistin'in altı yerleşiminin `ingiltere` kimliğinden `filistin-mandasi` kimliğine geçtiği gündür. GUNUN HASSASIYETI: TDV yalnız AY veriyor; 1 Temmuz 1920 aynı zamanda mülkî idarenin fiilî başlangıç günüdür, yani iki gerekçe çakışıyor ve hangisinin yazıldığı VERIDEN AYIRT EDILEMEZ — bu yüzden burada beyan edilmiştir. Mâverâ-yı Ürdün (Amman, Kerak) bu maddenin kapsamı DIŞINDADIR: hukuken aynı mandanın toprağı olsa da ayrı bir idaredir ve atlasta künyesi henüz yoktur.",
    k: "siyaset",
    etiket: ["siyaset"],
    yer: "Kudüs, Yafa, Gazze, Akkâ, Nablus, Han Yûnus",
    kisiler: "Sir Herbert Samuel",
    gun: "Temmuz 1920",
    kaynak: "filistin" },

  // [KRONOLOJI-MANDA-0906.json]
  { t: "1920-07-24",
    b: "Han Meysalun — Faysal'ın Şam hükûmetinin sonu ve Fransız manda idaresinin kuruluşu",
    d: "San Remo Konferansı'nda (19-26 Nisan 1920) Suriye ve Lübnan'ın Fransa'ya bırakılmasının ardından Fransız kuvvetleri Şam'a yürüdü; Han Meysalun'da Faysal'ın kuvvetleri yenildi ve Şam hükûmetine son verildi. TDV, işgalin \"iki yıl sonra Milletler Cemiyeti'nin onayıyla resmen manda yönetimine dönüştü\"ğünü kaydeder. Atlasta bu gün, Suriye ve Lübnan'ın on yedi yerleşiminin `fransa-cumhuriyet` kimliğinden `suriye-lubnan-mandasi` kimliğine geçtiği gündür: toprak degismez, GORUNEN KIMLIK degisir — Suriye o güne kadar haritada Fransa ile aynı renkte boyanıyordu. Künye `suriye-lubnan-mandasi` penceresi 1920-07-01'dir ve künyenin kendi beyanına göre AY hassasiyetlidir; veri kaynakta adı geçen GÜNÜ kullanır.",
    k: "savas",
    etiket: ["siyaset", "askeri"],
    yer: "Han Meysalun (Şam batısı), Şam, Halep, Beyrut",
    kisiler: "Emîr Faysal, Yûsuf el-Azma, General Henri Gouraud",
    gun: "24 Temmuz 1920",
    kaynak: "suriye" },

  // [KRONOLOJI-ORTADOGU-URDUN-0907.json]
  { t: "1921-02-01",
    b: "Şarkî Ürdün Emirliği'nin kurulması — Abdullah b. Hüseyin'in emirliğini ilânı",
    d: "Şerîf Hüseyin'in oğlu Faysal'ın 1920'de Fransızlar tarafından Suriye'den çıkarılmasının ardından kardeşi Abdullah Ürdün'e geldi ve kendini Şarkî Ürdün emîri ilân etti. Emirlik, Filistin mandası içinde ayrı bir idarî birim olarak İngiliz desteğiyle kuruldu; Amman ve Kerak bu tarihten sonra Osmanlı sonrası İngiliz askerî idaresinden çıkıp emirliğin idaresine girdi. TDV'nin kaydı şöyledir: \"Faysal'ın 1920'de Fransızlar tarafından Suriye'den çıkarılmasının ardından kardeşi Abdullah Ürdün'e gelerek Şubat 1921'de kendini Şarkī Ürdün emîri ilân etti. Onun yönetimi bölgeyi elinde tutan İngilizler tarafından desteklendi ve İngiliz manda yönetimi kuruldu.\" Kaynak ay veriyor, gün vermiyor; tarih alanı künyenin gününü devralmıştır.",
    k: "siyaset",
    etiket: ["kurulus", "siyaset"],
    yer: "Amman",
    yer_id: "Amman",
    kisiler: "Abdullah b. Hüseyin",
    gun: "Şubat 1921",
    onem: 3,
    dunya: 0,
    kapsam: "dis",
    kaynak: "urdun",
    kesinlik: "ay" },

  // [KRONOLOJI-MANDA-0906.json]
  { t: "1921-08-23",
    b: "Faysal'ın Irak kralı ilân edilmesi — İngiliz mandası altında Irak Krallığı",
    d: "San Remo Konferansı'nda (19-26 Nisan 1920) Irak'ın İngiltere'ye bırakılmasının ardından, Suriye'den çıkarılan Emîr Faysal 23 Ağustos 1921'de Bağdat'ta Irak kralı ilân edildi; krallık İngiliz mandası altında kuruldu ve manda 1932'de sona erdi. Atlasta bu gün, Irak'ın otuz beş yerleşiminin `ingiltere` kimliğinden `irak-kralligi` kimliğine geçtiği gündür. MUSUL bu tarihte hâlâ İHTİLÂFLIDIR — Lozan meseleyi çözmemiş, sınır Brüksel hattı (1924), Milletler Cemiyeti kararı (1925) ve 1926 antlaşmasıyla belirlenmiştir; 1923'te fiilî idare İngiliz-Irak elindedir. KAYNAK NOTU: TDV `irak--ulke` maddesinin gövdesi ÇEKİLEBİLİYOR (150.000+ karakter) ama anlatısı 1920'de biter — \"İngilizler'in Irak'ta ele geçirdikleri topraklarda kurdukları askerî yönetim 1920'ye kadar devam etti\" — ve 1921 hiç geçmez. Yani bu bir 'çekilemedi' değil, ARANDI VE KAYNAK SUSUYOR durumudur (§4 TANECIKLIK boşluğu); taç giyme günü akademik kaynağa dayanır.",
    k: "kurulus",
    etiket: ["siyaset"],
    yer: "Bağdat, Musul, Basra, Kerkük",
    kisiler: "Kral I. Faysal, Sir Percy Cox",
    gun: "23 Ağustos 1921",
    kaynak: "irak--ulke" },

  // [KRONOLOJI-ISG-FAZ2-cukurova.js]
  { t: "1921-12-23",
    b: "Kilis'in kurtuluşu",
    d: "20 Ekim 1921 tarihli Ankara İtilâfnâmesi'nin ardından Fransızlar 7 Aralık'tan itibaren tahliyeye başladı ve tahliye 23 Aralık'ta tamamlandı. TDV'nin kaydı şöyledir: \"7 Aralık 1921'den itibaren Fransızlar Kilis'i tahliye etmeye başladılar. Nihayet 23 Aralık 1921'de Kilis'in kurtuluşu gerçekleşmiş oldu.\"",
    k: "savas",
    etiket: ["isgal", "toprak-kazanc"],
    yer: "Kilis",
    yer_id: "Kilis",
    onem: 2,
    dunya: 0,
    kapsam: "ic",
    kaynak: "kilis" },

  // [KRONOLOJI-ISG-FAZ2-cukurova.js]
  { t: "1921-12-25",
    b: "Antep'in kurtuluşu — iki yıllık işgalin sonu",
    d: "Antep halkı 1 Nisan 1920'den 7 Şubat 1921'e kadar Fransız kuvvetlerine karşı on ay direndi; TBMM 6 Şubat 1921'de şehre gazilik unvanı verdi ve şehir Gaziantep adıyla anılmaya başlandı. TDV'nin kaydı şöyledir: \"Fransızlar Ankara Antlaşması'nın ardından 25 Aralık 1921'de şehri boşalttılar ve Gaziantep iki yıl süren işgalden kurtuldu.\"",
    k: "savas",
    etiket: ["isgal", "toprak-kazanc"],
    yer: "Antep",
    yer_id: "Antep",
    onem: 3,
    dunya: 0,
    kapsam: "ic",
    kaynak: "gaziantep" },

  // [KRONOLOJI-ISG-FAZ2-cukurova.js]
  { t: "1921-12-27",
    b: "Tarsus'un kurtuluşu",
    d: "Ankara İtilâfnâmesi'nin ardından Fransızlar Çukurova'yı şehir şehir boşalttı; Tarsus tahliye edilen ilk büyük merkezlerdendi. TDV'nin kaydı şöyledir: \"Fransızlar, Ankara Antlaşması'yla 27 Aralık 1921'de şehri boşalttılar.\"",
    k: "savas",
    etiket: ["isgal", "toprak-kazanc"],
    yer: "Tarsus",
    yer_id: "Tarsus",
    onem: 2,
    dunya: 0,
    kapsam: "ic",
    kaynak: "tarsus" },

  // [KRONOLOJI-ISG-FAZ2-cukurova.js]
  { t: "1922-01-03",
    b: "Mersin'in kurtuluşu",
    d: "İşgalin denizden başladığı şehir, üç yıl bir ay sonra millî kuvvetlerin girmesiyle kurtuldu; son Fransız birliği ertesi gün ayrıldı. TDV'nin kaydı şöyledir: \"3 Ocak 1922'de millî kuvvetler Mersin'e girerek şehri kurtardı ve son Fransız kuvvetleri ertesi gün şehri terketti.\"",
    k: "savas",
    etiket: ["isgal", "toprak-kazanc"],
    yer: "Mersin",
    yer_id: "Mersin",
    onem: 2,
    dunya: 0,
    kapsam: "ic",
    kaynak: "mersin" },

  // [KRONOLOJI-ISG-FAZ2-cukurova.js]
  { t: "1922-01-05",
    b: "Adana'nın kurtuluşu — Çukurova işgalinin sonu",
    d: "Ankara İtilâfnâmesi'nden iki buçuk ay sonra tamamlanan tahliyeyle Çukurova'daki Fransız işgali sona erdi. TDV'nin kaydı şöyledir: \"…1921'de Ankara İtilâfnâmesi ile Türkiye'ye teslim edilmiş ve 5 Ocak 1922'de Fransızlar, şehri, kendilerine yardımcı olan Ermeniler'le birlikte terketmişlerdir.\"",
    k: "savas",
    etiket: ["isgal", "toprak-kazanc"],
    yer: "Adana",
    yer_id: "Adana",
    onem: 3,
    dunya: 0,
    kapsam: "ic",
    kaynak: "adana" },

  // [KRONOLOJI-AVRUPA-0906.json]
  { t: "1922-12-06",
    b: "İrlanda Serbest Devleti'nin kuruluşu",
    d: "6 Aralık 1922'de İrlanda Serbest Devleti anayasası yürürlüğe girdi ve V. George'un bildirisiyle yeni devlet resmen kuruldu. İrlanda'nın otuz iki kontluğundan yirmi altısı Britanya'dan ayrılarak Britanya İmparatorluğu içinde dominyon statüsü kazandı ve Dublin başkent oldu. Kuzey İrlanda'nın altı kontluğu ise antlaşmanın tanıdığı hakla ertesi gün Serbest Devlet'ten çekilerek Birleşik Krallık'ta kaldı; adanın bölünmesi böylece kalıcılaştı.",
    k: "siyaset",
    etiket: ["siyaset", "antlasma"],
    yer: "Dublin, İrlanda",
    yer_id: "Dublin",
    kisiler: "V. George",
    gun: "6 Aralık 1922",
    duygu: ["🏛"],
    kaynak: "RTÉ Century Ireland (İrlanda ulusal yayıncısı RTÉ'nin Boston College ortaklığıyla yürüttüğü akademik tarih projesi): «The constitution of the Irish Free State became law on 6 December 1922.» — TDV kapsam dışı, Batı Avrupa TDV kapsamı %0 (§4)." }
];
