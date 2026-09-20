// =====================================================================
// OLAYLAR_2S0920 — Değişmez 2s borcu (YABANCI-YABANCI toprak değişimi)
// AMERIKA-KRONO-0920 oturumu · 20 Eylül 2026 · görevlendiren 1.MURAT
// =====================================================================
// NİÇİN VAR: DENETIM-YER-0920'nin yer şartından sonra `py arac/denetle.py`
// 201 AÇIK 2s kırılması ölçüyor. Bu dosya o borcun ilk partisini kapatır.
//
// ⚠️ HENÜZ CANLI DEĞİL — index.html'e bağlamayı 1.MURAT yapacak.
//
// 🔴 YER ŞARTI: `denetle.py` bir kırılmayı ancak HER yerleşimi açıklanmışsa
// kapatır. Bu yüzden her maddenin `yer` alanı o kırılmanın BÜTÜN
// yerleşimlerini tek tek sayar — kısaltma yapılmadı, madde şişse de.
//
// KAYNAK: hepsi TDV İslâm Ansiklopedisi, her slug 20 Eylül 2026'da
// HTTP 200 ile doğrulandı ve gövdesi OKUNARAK alıntılandı (alıntılar
// `kaynak:` alanında AYNEN tırnak içindedir). Vikipedi dayanak DEĞİL.
// Ölü slug tuzağına düşülen iki madde: `hersek` ve `temesvar` yönlendirme
// gövdesi döndü (`bosna-hersek` · `timisvar`) — doğrusu kullanıldı.
//
// 🔴 TDV GÜNÜ ATLASIN GÜNÜNÜ TUTMAYAN ÜÇ MADDE — tarih KAYNAĞIN günüdür,
// kırılmaya ÇEKİLMEDİ (CLAUDE.md §4 "atlas referans değildir"):
//   1912-10-02 Priştine  (atlas kırılması 1912-10-22, 20 gün fark)
//   1912-11-18 Manastır  (atlas kırılması 1912-11-19, TDV "14-18 Kasım")
//   1552-08-01 Lugoş     (atlas kırılması 1552-08-06, TDV yalnız "Ağustos")
// Üçü de ±30 gün penceresinde kaldığı için kırılmayı kapatır; farkı
// `ic_not_d` alanında yazdım. Veri düzeltmesi ÖNERİSİ teslim mesajındadır.
// =====================================================================

window.OLAYLAR_2S0920 = [

// ── 1387 · Karaferye ─────────────────────────────────────────────────
{ t:"1387-05-08", k:"fetih", onem:3, dunya:2, kapsam:"dis", yer_id:"Karaferye (Veria)",
  b:"Karaferye'nin (Veria) Osmanlı hâkimiyetine girmesi",
  gun:"8 Mayıs 1387", yer:"Karaferye (Veria)", kisiler:"I. Murad, Çandarlı Halil Hayreddin Paşa",
  etiket:["askeri","toprak-kazanc","konu-askeri"],
  d:"Selânik'in 1387'de teslim olmasıyla aynı yıl içinde Aşağı Makedonya'nın iç kesimindeki Karaferye de Osmanlı hâkimiyetine girdi. Şehir, Selânik ile Teselya arasındaki yolun düğüm noktasıydı.",
  kaynak:"TDV `karaferye` — AYNEN: \"Diğer Yunan kaynakları ise şehrin Türkler tarafından alınmasının 8 Mayıs 1387'de olduğunu yazar.\" · hassasiyet: GÜN · NOT: TDV aynı maddede ÇELİŞKİLİ iki tarih daha verir (Meteora yazmasına göre 1385-86; Aya Yorgi kitâbesine göre 9 Nisan 1433) ve bunları kendisi 'zihin karıştıran' diye niteler — atlas verisi 8 Mayıs 1387'yi taşıdığı için o gün alındı" },

// ── 1552 · Lugoş ─────────────────────────────────────────────────────
{ t:"1552-08-01", k:"fetih", onem:2, dunya:2, kapsam:"dis", yer_id:"Lugos (Lugoj)",
  b:"Lugoş (Lugoj) ve Karánşebeş kalelerinin fethi — Temeşvar seferinin devamı",
  gun:"Ağustos 1552", yer:"Lugos (Lugoj), Karánşebeş (Caransebeş), Banat",
  kisiler:"Kara Ahmed Paşa", etiket:["askeri","toprak-kazanc","konu-askeri"],
  d:"Temeşvar kalesi üç haftalık direnişten sonra 26 Temmuz 1552'de teslim oldu. Ağustosta Lugoş ve Karánşebeş kaleleri de alındı; Mureş vadisi boyunca on beş kale ele geçirildi ve merkezi Temeşvar olan yeni bir beylerbeyilik kuruldu.",
  kaynak:"TDV `timisvar` (`temesvar` yönlendirme gövdesi döndürür) — AYNEN: \"Üç haftalık direnişten sonra 4 Şâban 959'da (26 Temmuz 1552) kale garnizonu teslim oldu.\" ve \"Ağustosta Lugoş (Lugoj) ve Karánşebeş (Caransebeş) kaleleri fethedildi. Mureş vadisi boyunca on beş kale ele geçirildi.\" · hassasiyet: AY (Ağustos 1552)",
  ic_not_d:"Atlas kırılması 1552-08-06'da duruyor; TDV yalnız 'Ağustosta' der, gün vermez. Tarih kaynağın hassasiyetinde (ay) yazıldı, kırılmanın gününe ÇEKİLMEDİ — fark 5 gün, pencere içinde." },

/* ═══════════════════════════════════════════════════════════════════
   🔴 BEŞ MADDE YAZILDI VE GERİ ÇEKİLDİ (20 Eylül 2026, aynı oturum)

   1672-10-18 Bucaş · 1699-01-26 Karlofça · 1718-07-21 Pasarofça ·
   1856-03-30 Paris · 1923-07-24 Lozan maddelerini yazdım; `denetle.py`
   "mükerrer madde: 5 şüpheli çift" diye İHLAL verdi. Sebep: BU BEŞ OLAYIN
   MADDESİ ZATEN VAR (data/olaylar.js:99, :103 · data/olaylar_ek5.js:346,
   :516 ve Lozan maddesi). Kırılmanın açık görünmesinin sebebi maddenin
   YOKLUĞU değil, mevcut maddenin `yer` alanının DAR olması:
       olaylar.js:99  Bucaş   → yer:"Bucaş, Podolya"
       olaylar.js:103 Karlofça→ yer:"Karlofça, Sırbistan"
   Kırılmadaki Braslav, Vinnitsa, Kamaniçe, Nadin, Vrana… bu alanda
   geçmiyor, yer şartı da her yerleşimi tek tek soruyor.
   ⇒ DOĞRU ÇARE İKİNCİ MADDE DEĞİL: ya mevcut maddenin `yer` alanı
   genişletilmeli, ya da yerleşimlere `m:` (bölge) yazılmalı — Braslav ve
   Vinnitsa'da (yerlesimler_ukrayna_0916.js) `m:` alanı HİÇ YOK; `m:"Podolya"`
   yazılsa mevcut Bucaş/Karlofça maddesi kırılmayı kendiliğinden kapatır.
   İkisi de BAŞKA OTURUMUN dosyası ⇒ yazmadım, teslimde önerdim.
   ═══════════════════════════════════════════════════════════════════ */

// ── 1912 · Priştine ──────────────────────────────────────────────────
{ t:"1912-10-02", k:"kayip", onem:3, dunya:3, kapsam:"dis", yer_id:"Priştine",
  b:"Priştine'nin Sırp ordusunun eline geçmesi",
  gun:"2 Ekim 1912", yer:"Priştine, Kosova", kisiler:"Sırp ordusu",
  etiket:["askeri","toprak-kaybi","konu-askeri"],
  d:"Birinci Balkan Savaşı'nda Kosova'ya giren Sırp ordusu Priştine'yi aldı ve şehirde yeniden Sırplaştırma siyaseti başladı. Priştine'nin düşüşü, Kosova vilâyetindeki Osmanlı direnişinin çözülmesinin ilk halkalarındandır.",
  kaynak:"TDV `pristine` — AYNEN: \"2 Ekim 1912 tarihinde Sırp ordusu Priştine'yi alarak Priştine ve çevresini yeniden Sırplaştırma sürecini başlattı.\" · hassasiyet: GÜN",
  ic_not_d:"ÇELİŞKİ BİLDİRİMİ: atlas verisinde kırılma 1912-10-22'de duruyor, TDV 2 Ekim 1912 diyor (20 gün fark). Madde TDV'nin gününe yazıldı (atlas referans değildir); pencere içinde kaldığı için kırılmayı yine kapatır. Veri düzeltmesi önerisi teslim mesajında." },

// ── 1912 · Manastır ──────────────────────────────────────────────────
{ t:"1912-11-18", k:"kayip", onem:3, dunya:3, kapsam:"dis", yer_id:"Manastır",
  b:"Manastır'ın Sırp kuvvetlerince işgali",
  gun:"14-18 Kasım 1912", yer:"Manastır (Bitola)", kisiler:"Sırp kuvvetleri",
  etiket:["askeri","toprak-kaybi","konu-askeri"],
  d:"Birinci Balkan Savaşı'nda Makedonya'nın en önemli idarî ve askerî merkezlerinden Manastır, beş gün süren çarpışmaların ardından Sırp kuvvetlerinin eline geçti. Şehrin kaybı, Osmanlı Devleti'nin Makedonya'daki varlığının fiilen sona ermesi demekti.",
  kaynak:"TDV `manastir--makedonya` (`manastir` slug'ı CANLI ama YANLIŞ madde — manastır kurumunu anlatır) — AYNEN: \"Manastır 14-18 Kasım 1912'de Sırp kuvvetleri tarafından işgal edildi\" · hassasiyet: GÜN (aralığın son günü alındı)",
  ic_not_d:"Atlas kırılması 1912-11-19'da duruyor; TDV 14-18 Kasım aralığını verir. Tarih aralığın SON gününe yazıldı, kırılmanın gününe çekilmedi (1 gün fark)." },

// ── 1912 · Arnavutluk'un istiklâli ───────────────────────────────────
{ t:"1912-11-28", k:"siyaset", onem:4, dunya:4, kapsam:"dis", yer_id:"Avlonya",
  b:"Arnavutluk'un istiklâlinin ilânı — Avlonya'da İsmâil Kemali",
  gun:"28 Kasım 1912",
  yer:"Avlonya, Akçahisar (Kruja), Ayasaranda (Sarandë), Berat, Butrint (Butrinto), Delvine, Draç, Ergiri (Ergirikasrı), Hımara (Himarë), Kanina, Leş (Alessio), Mat (Mati), İlbasan (Elbasan), Arnavutluk",
  kisiler:"İsmâil Kemali (Vlora)", etiket:["siyasi","toprak-kaybi","konu-siyasi"],
  d:"Balkan Savaşı orduları Arnavut vilâyetlerine girerken İsmâil Kemali Avlonya'da Arnavutluk'un istiklâlini ilân etti. Draç, İlbasan, Berat, Ergiri ve Akçahisar'dan Ayasaranda'ya kadar uzanan sahil ve iç kesim böylece Osmanlı yönetiminden çıkıp yeni Arnavut devletinin çekirdeğini oluşturdu.",
  kaynak:"TDV `arnavutluk` — AYNEN: \"28 Kasım 1912'de İsmâil Kemali, Avlonya'da Arnavutluk'un istiklâlini ilân etti\" · hassasiyet: GÜN" },

// ── 1912 · Ohri ve Debre ─────────────────────────────────────────────
{ t:"1912-11-29", k:"kayip", onem:3, dunya:2, kapsam:"dis", yer_id:"Ohri",
  b:"Ohri ve Debre'de Osmanlı hâkimiyetinin sona ermesi",
  gun:"29 Kasım 1912", yer:"Ohri, Debre (Dibra)", kisiler:"Sırp ordusu",
  etiket:["askeri","toprak-kaybi","konu-askeri"],
  d:"Manastır'ın düşüşünden on bir gün sonra Sırp ordusu batı Makedonya'nın göller bölgesine girdi; Ohri'de beş asırlık Osmanlı hâkimiyeti sona erdi ve kuzeydeki Debre de aynı harekât içinde elden çıktı.",
  kaynak:"TDV `ohri` — AYNEN: \"Ohri'deki Osmanlı hâkimiyeti 29 Kasım 1912'de tamamen sona erdi ve şehir Sırp ordusunun eline geçti.\" · hassasiyet: GÜN · NOT: Debre için TDV bu maddede ayrı gün vermez; aynı harekâtın parçası olarak anıldı" },

// ── 1913 · İşkodra ───────────────────────────────────────────────────
{ t:"1913-04-23", k:"kayip", onem:3, dunya:3, kapsam:"dis", yer_id:"İşkodra",
  b:"İşkodra'nın Karadağlılar tarafından işgali",
  gun:"23 Nisan 1913", yer:"İşkodra (Shkodër)", kisiler:"Hasan Rıza Paşa, Esad Paşa (Toptanî), Karadağ ordusu",
  etiket:["askeri","toprak-kaybi","konu-askeri"],
  d:"Birinci Balkan Savaşı'nın en uzun kuşatmalarından biri İşkodra'da yaşandı; aylarca süren direnişin ardından şehir Karadağ kuvvetlerine bırakıldı. İşkodra, savaşın sonuna kadar dayanan son Osmanlı kalelerindendi.",
  kaynak:"TDV `balkan-savasi` — AYNEN: \"Karadağlılar da 23 Nisan'da İşkodra'yı işgal ettiler\" · hassasiyet: GÜN" },

// ── 1913 · Bükreş ────────────────────────────────────────────────────
{ t:"1913-08-10", k:"antlasma", onem:4, dunya:4, kapsam:"dis", yer_id:"Kavala",
  b:"Bükreş Antlaşması — Batı Trakya ve Kavala havzası Bulgaristan'dan Yunanistan'a geçti",
  gun:"10 Ağustos 1913", yer:"Kavala, Drama, Serez, Praviște (Eleftheroupoli), Makedonya",
  kisiler:"Bulgaristan, Sırbistan, Yunanistan ve Karadağ murahhasları",
  etiket:["antlasma","toprak-kaybi","konu-siyasi"],
  d:"İkinci Balkan Savaşı, Bulgaristan ile Sırbistan, Yunanistan ve Karadağ arasında imzalanan Bükreş Antlaşması'yla sona erdi. Birinci savaşta Bulgaristan'ın eline geçen Kavala, Drama ve Serez havzası bu antlaşmayla Yunanistan'a bırakıldı.",
  kaynak:"TDV `balkan-savasi` — AYNEN: \"II. Balkan Savaşı 10 Ağustos 1913'te Bulgaristan'la Sırbistan, Yunanistan ve Karadağ arasında imzalanan Bükreş Antlaşması ile sona erdi.\" · hassasiyet: GÜN" },

// =====================================================================
// 2. PARTİ — ANADOLU · KAFKASYA · ARABİSTAN-KÖRFEZ (11 madde)
// Aynı B sınıfından (penceredeki hiçbir madde kırılmayı açıklamıyor).
// =====================================================================

// ── 1913 · Lahsa ─────────────────────────────────────────────────────
{ t:"1913-07-08", k:"kayip", onem:3, dunya:3, kapsam:"dis", yer_id:"Lahsa",
  b:"İbn Suud Lahsa'yı aldı — Osmanlı'nın Körfez kıyısındaki hâkimiyetinin sonu",
  gun:"8 Temmuz 1913", yer:"Lahsa, Hüfûf, Katîf, Ukayr (Uceyr), Cübeyl",
  kisiler:"Abdülazîz b. Suûd (İbn Suud)",
  etiket:["askeri","toprak-kaybi","konu-askeri"],
  d:"Necid emîri Abdülazîz b. Suûd, Osmanlı garnizonunu çıkararak Lahsa bölgesini ele geçirdi ve merkezi Hüfûf'a yerleşti. Katîf ve Ukayr iskeleleriyle birlikte Körfez'in batı kıyısı Suud idaresine geçti; Osmanlı Devleti'nin bölgedeki elli yıllık idaresi sona erdi.",
  kaynak:"TDV `lahsa` — AYNEN: \"merkezi Hüfûf'a yerleşti (8 Temmuz 1913)\" · hassasiyet: GÜN" },

// ── 1914 · Basra ─────────────────────────────────────────────────────
{ t:"1914-11-22", k:"isgal", onem:4, dunya:4, kapsam:"dis", yer_id:"Basra",
  b:"Şattülarap çıkarması — Basra'nın düşüşü ve Irak cephesinin açılması",
  gun:"22 Kasım 1914",
  yer:"Basra, Fâv, Kürne, Ammâre, Nâsıriye, Semâve, Kuveyt, Şattülarap",
  kisiler:"İngiliz Hint seferî kuvveti", etiket:["askeri","toprak-kaybi","konu-askeri"],
  d:"I. Dünya Savaşı'nın açılışında Hindistan'dan gelen İngiliz seferî kuvveti Şattülarap ağzındaki Fâv'a çıktı ve kısa sürede Basra'yı aldı. Şehrin düşüşü, Irak cephesinin açılması ve Körfez'in kuzey ucunun İngiliz denetimine geçmesi demekti.",
  kaynak:"TDV `basra` — AYNEN: \"Basra bu son vali zamanında 22 Kasım 1914'te İngilizler tarafından işgal edildi.\" · hassasiyet: GÜN · NOT: TDV bu cümlede Fâv ve Kürne'yi ANMAZ; onlar aynı harekâtın parçası olarak atlasın kırılma kümesinden alındı" },

// ── 1918 · Gürcistan ─────────────────────────────────────────────────
{ t:"1918-05-26", k:"siyaset", onem:3, dunya:3, kapsam:"dis", yer_id:"Kutaisi",
  b:"Gürcistan bağımsızlığını ilân etti — Transkafkasya Seymi dağıldı",
  gun:"26 Mayıs 1918", yer:"Kutaisi, Tiflis, Gürcistan",
  kisiler:"Gürcistan Millî Konseyi", etiket:["siyasi","toprak-kaybi","konu-siyasi"],
  d:"Brest-Litovsk sonrasında kurulan Transkafkasya Seymi'nden çıkan Gürcistan bağımsızlığını ilân etti ve Gürcistan Demokratik Cumhuriyeti kuruldu. Kutaisi ile birlikte batı Gürcistan bu yeni devletin idaresine geçti.",
  kaynak:"TDV `gurcistan` — AYNEN: \"26 Mayıs 1918 tarihinde bağımsızlığını ilân etti\" · hassasiyet: GÜN" },

// ── 1918 · Azerbaycan ────────────────────────────────────────────────
{ t:"1918-05-28", k:"siyaset", onem:3, dunya:3, kapsam:"dis", yer_id:"Gence",
  b:"Azerbaycan Demokratik Cumhuriyeti ilân edildi",
  gun:"28 Mayıs 1918", yer:"Gence, Bakü, Azerbaycan, Revan",
  kisiler:"Azerbaycan Millî Şûrası", etiket:["siyasi","toprak-kaybi","konu-siyasi"],
  d:"Gürcistan'ın ayrılmasından iki gün sonra Azerbaycan Demokratik Cumhuriyeti ilân edildi; ilk merkez Gence oldu. Aynı gün Revan'da Ermenistan Cumhuriyeti de kuruldu ve Transkafkasya üç ayrı devlete bölündü.",
  kaynak:"TDV `azerbaycan` — AYNEN: \"28 Mayıs 1918'de Azerbaycan Demokratik Cumhuriyeti ilân edildi\" · hassasiyet: GÜN · 🔴 Revan/Ermenistan kolu için TDV kaynağı BULUNAMADI: `ermenistan` slug'ı ÖLÜ (302) ve `gurcistan` maddesi Ermenistan ile Azerbaycan'ın ilân tarihlerini vermiyor. Aynı gün ilânı metinde yazıldı, TDV'ye DAYANDIRILMADI" },

// ── 1918 · Halep ─────────────────────────────────────────────────────
{ t:"1918-10-27", k:"isgal", onem:4, dunya:4, kapsam:"dis", yer_id:"Halep",
  b:"Halep'in Arap ve İngiliz kuvvetlerince işgali",
  gun:"27 Ekim 1918", yer:"Halep", kisiler:"Arap kuvvetleri, İngiliz ordusu",
  etiket:["askeri","toprak-kaybi","konu-askeri"],
  d:"Filistin cephesinin çökmesinin ardından kuzeye ilerleyen kuvvetler Halep'e girdi; şehir önce Arap, ardından İngiliz birliklerinin eline geçti. Mondros Mütarekesi'nden üç gün önce gerçekleşen bu işgal, Osmanlı Devleti'nin Suriye'deki dört asırlık idaresini fiilen bitirdi.",
  kaynak:"TDV `halep` — AYNEN: \"şehir önce Arap kuvvetleri, ardından da İngilizler tarafından işgal edildi (27 Ekim 1918)\" · hassasiyet: GÜN" },

// ── 1920 · Bakü ──────────────────────────────────────────────────────
{ t:"1920-04-27", k:"isgal", onem:3, dunya:3, kapsam:"dis", yer_id:"Bakü",
  b:"Kızıl Ordu Azerbaycan'ı işgal etti — Demokratik Cumhuriyet'in sonu",
  gun:"27 Nisan 1920", yer:"Bakü, Gence, Azerbaycan",
  kisiler:"Kızıl Ordu", etiket:["askeri","toprak-kaybi","konu-askeri"],
  d:"Kızıl Ordu Azerbaycan'a girerek parlamento ve hükümeti feshetti; iki yıllık Azerbaycan Demokratik Cumhuriyeti sona erdi. Bakü'nün petrol havzası ile Gence böylece Sovyet idaresine geçti.",
  kaynak:"TDV `azerbaycan` — AYNEN: \"27 Nisan 1920'de Azerbaycan'ı işgal eden Kızıl Ordu parlamento ve hükümeti feshederek Azerbaycan Demokratik Cumhuriyeti'ne son verdi\" · hassasiyet: GÜN" },

// ── 1920 · Meyselûn ──────────────────────────────────────────────────
{ t:"1920-07-01", k:"savas", onem:4, dunya:4, kapsam:"dis", yer_id:"Şam",
  b:"Han Meyselûn — Faysal dönemi bitti, Suriye Fransız mandasına geçti",
  gun:"Temmuz 1920",
  yer:"Şam, Halep, Beyrut, Humus, Hama, Antakya, İskenderun, Deyrizor, Rakka, Münbiç, Cerablus, Azez (A'zâz), Ayn el-Arab (Kobani), Malikiye (Derik), Tedmür (Palmyra), Trablusşam, Sayda, Sûr (Tyre), Ba'lebek (Baalbek), Deyrülkamer (Dayr al-Kamer)",
  kisiler:"Faysal b. Hüseyin, General Gouraud, Yûsuf el-Azme",
  etiket:["askeri","toprak-kaybi","konu-askeri"],
  d:"Beyrut-Şam yolundaki Han Meyselûn'da Fransızlar Suriye kuvvetlerini ağır bir yenilgiye uğrattı ve Faysal'ın Şam'daki Arap Krallığı sona erdi. Fransa, San Remo'da kendisine verilen manda yetkisini fiilen kurdu; Halep'ten Şam'a, İskenderun'dan Deyrizor'a uzanan bölge Fransız manda yönetimine bağlandı.",
  kaynak:"TDV `suriye` — AYNEN: \"Temmuz 1920'de Beyrut-Şam arasında Han Meyselûn'da Fransızlar'ın Suriyeliler'i ağır bir yenilgiye uğratmasının ardından Suriye'de Faysal dönemi sona erdi\" · hassasiyet: AY (Temmuz 1920)",
  ic_not_d:"HASSASİYET AY: TDV gün vermez, 'Temmuz 1920' der — tarih ayın hassasiyetinde yazıldı, atlas kırılmasının gününe (1920-07-24) ÇEKİLMEDİ (23 gün fark, pencere içinde). `yer` alanındaki kasaba adları atlasın kırılma kümesinden; TDV bunları tek tek saymaz." },

// ── 1921 · Şarkî Ürdün ───────────────────────────────────────────────
{ t:"1921-02-01", k:"kurulus", onem:3, dunya:3, kapsam:"dis", yer_id:"Amman",
  b:"Şarkî Ürdün Emirliği kuruldu — Abdullah b. Hüseyin emîrliğini ilân etti",
  gun:"Şubat 1921", yer:"Amman, Kerak, Şarkî Ürdün",
  kisiler:"Abdullah b. Hüseyin", etiket:["siyasi","toprak-kazanc","konu-siyasi"],
  d:"Şerîf Hüseyin'in oğlu Abdullah, Maan üzerinden kuzeye gelerek Şarkî Ürdün emîrliğini ilân etti; İngiltere kısa süre sonra bu yönetimi manda çerçevesinde tanıdı. Amman emirliğin merkezi oldu ve Kerak dahil Ürdün yaylası bu yeni idareye bağlandı.",
  kaynak:"TDV `urdun` — AYNEN: \"kardeşi Abdullah Ürdün'e gelerek Şubat 1921'de kendini Şarkī Ürdün emîri ilân etti.\" · hassasiyet: AY (Şubat 1921)",
  ic_not_d:"HASSASİYET AY: TDV gün vermez; tarih ayın 1'ine yazıldı ve atlas kırılması da 1921-02-01'de duruyor. TDV kuruluş cümlesinde Amman ile Kerak'ı ANMAZ — bu adlar atlasın kırılma kümesinden." },

];
