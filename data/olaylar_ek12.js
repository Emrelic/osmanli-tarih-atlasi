// ============================================================================
// DERİNLEŞTİRME PARTİSİ 12 — CERBE 1560 (PETEK/NOKTA oturumu, 3 Ağustos 2026)
// ============================================================================
// ⚠️ HENÜZ YAYINA BAĞLI DEĞİL. Bağlamak için İKİ satır gerekiyor ve ikisi de
//    benim dosyam değil:
//      index.html   <script src="data/olaylar_ek12.js?v=rNN"></script>
//      js/app.js    .concat(window.OLAYLAR_EK12 || [])
//    ⇒ Oturum 0 / ARAYÜZ bağlar. Bağlanmadan madde SAYILMAZ; `olaylar_ek9`
//      vakası (dosya yazıldı, yayına bağlanmadı) bu yüzden yaşandı.
//
// ── NİÇİN VAR ───────────────────────────────────────────────────────────────
// Kendi ölçümümün kapanışı. `yerlesimler.js`teki Cerbe kaydı şöyle:
//     s:[{1281-01-01 → 1560-05-14, hafsi}]   d:[{1560-05-14 → 1705-07-17}]
// İki kusur ölçüldü:
//   ① İSPANYOL DÖNEMİ HİÇ YOK — ada 1560'ta Haçlı donanmasının elindeydi.
//   ② FETİH GÜNÜ YANLIŞ GÜNE BAĞLI — 1560-05-14, TDV'ye göre **deniz
//      zaferinin** günüdür; kale iki ay sonra, **30 Temmuz 1560**'ta düştü.
//
// ②'yi düzeltmek `1560-07-30` kırılması açar ve o güne madde YOKTU: en yakın
// madde 1560-05-14 "Cerbe Deniz Zaferi", **77 gün** uzakta — Değişmez 2 eşiği
// 30 gün. Yani tarihi düzeltmek AÇIK KIRILMA doğururdu.
// ⇒ Bu dosya o borcu ÖNCEDEN kapatıyor: madde önce, tarih sonra.
//    (Mankup'ta da aynı desen kuruldu: `yerlesimler_ek2.js`, 1475-12-01.)
//
// ── 🔴 OTURUM 0'A: CERBE KAYDI `yerlesimler_ek4.js`e YAZILAMAZ ─────────────
// Koordinatör "ya sen yerlesimler_ek4.js'e düzeltilmiş kaydı yazarsın" dedi.
// ÖLÇTÜM: **BU MÜMKÜN DEĞİL.** `arac/girdi.py` `yukle()` aynı adı iki dosyada
// görünce ValueError fırlatıyor:
//     if y["ad"] in nereden: raise ValueError("AD ÇAKIŞMASI: …")
// "Cerbe (Djerba)" zaten `yerlesimler.js`te (bağlı) olduğu için ikinci bir
// kayıt yükleyiciyi ÇÖKERTİR — üretim başlamadan düşer.
// ⇒ Düzeltme YALNIZCA `yerlesimler.js` içinde, yerinde yapılabilir.
//   Önerilen son hâl (madde bağlandıktan SONRA):
//     s:[{1281-01-01 → 1560-03-01, hafsi},
//        {1560-03-01 → 1560-07-30, ispanya},
//        {1881-05-12 → 1923-10-29, fransa}]
//     d:[{1560-07-30 → 1705-07-17, y:"kusatma"}]
//     v:[{1705-07-17 → 1881-05-12, k:"Tunus Ocaklığı (Hüseynîler)"}]
//   ⚠️ `1560-03-01` bir YER TUTUCUYDU — 🟢 13 Eylül 2026: TDV `piyale-pasa`
//     GÜNÜ veriyor (12 Mart 1560) ⇒ önerilen değer `1560-03-12` (KITA 14).
//     s:→s: geçişi olduğu için kırılma üretmez; Değişmez 2'yi etkilemez.
//     `d:` başlangıcı ise TDV'nin verdiği KESİN gündür.
//   ⚠️ `y:"savas"` → `y:"kusatma"` olmalı: TDV "iki ay kadar süren
//     kuşatmadan sonra" diyor, deniz muharebesi ayrı olaydır.
// ============================================================================

window.OLAYLAR_EK12 = [

// ---------------------------------------------------------------------------
// A-1 — Haçlı donanmasının Cerbe'yi işgali
// ---------------------------------------------------------------------------
// 🔴 GÜN BULUNDU (KITA 14, 13 Eylül 2026 — KITA 20 savaş pilotu bulgusu):
// TDV `cerbe` yalnız "1560 yılı başlarında" diyor; ama TDV `piyale-pasa`
// GÜNÜ veriyor: "İspanya yönetimindeki müttefik hıristiyan donanması
// 14 Cemâziyelâhir 967'de (12 Mart 1560) Cerbe adasını işgal etti."
// ⇒ `t:` yer tutucu 1560-01-01'den 1560-03-12'ye çekildi. Önceki "ay ve gün
//   kaynakta yok" hükmü tek maddeye (cerbe) bakmıştı.
// 📌 Bu madde Değişmez 2 için GEREKLİ DEĞİL (İspanyol dönemi s:→s: geçişi,
//   kırılma üretmez). 1560-01-01 ve 1560-03-12'nin ±30 gün penceresinde
//   kırılma YOK (ARAC-KITA14-PENCERE-0913.py ile ölçüldü) — taşıma hiçbir
//   kırılmayı açmıyor, yanlışlıkla da kapatmıyor.
{ t:"1560-03-12", k:"savas", etiket:["savas","konu-askeri"],
  b:"Haçlı donanması Cerbe'yi işgal etti — Turgut Paşa'nın üssü elden çıktı",
  gun:"12 Mart 1560 (14 Cemâziyelâhir 967)", yer:"Cerbe (Djerba), Trablusgarp", yer_id:"Cerbe (Djerba)",
  kisiler:"Turgut Paşa, Piyâle Paşa",
  d:"İspanya, Papalık, Malta, Ceneviz ve Floransa gemilerinden kurulu Haçlı donanması, Turgut Reis'in 1551'den beri akın üssü olarak kullandığı Cerbe'yi hedef aldı. Fırtınalar ve salgın yüzünden ada önlerine ancak 1560 yılı başlarında ulaşabildi; 12 Mart 1560'ta adayı işgal edip bir kale inşa etti. Haberi alan Piyâle Paşa 28 Mart'ta 120 kadırgalık donanmasıyla İstanbul'dan yola çıktı. İşgal uzun sürmedi: Osmanlı donanması mayısta Cerbe önünde müttefikleri yendi, kale de temmuz sonunda geri alındı. Bu sefer, Preveze'den sonra Akdeniz'de Osmanlı üstünlüğünü pekiştiren ikinci büyük deniz harekâtının başlangıcıdır.",
  kaynak:"cerbe + piyale-pasa — TDV piyale-pasa birebir: 'İspanya yönetimindeki müttefik hıristiyan donanması 14 Cemâziyelâhir 967’de (12 Mart 1560) Cerbe adasını işgal etti. Bunun üzerine Piyâle Paşa, 120 kadırgadan oluşan donanmasıyla 1 Receb 967’de (28 Mart 1560) İstanbul’dan yola çıktı.' · TDV cerbe: '1560 yılı başlarında' (gün vermiyor). · Düzeltme (KITA 14, 13 Eylül 2026): t: 1560-01-01 → 1560-03-12; önceki metindeki 'beş ay içinde' ifadesi çıkarıldı (işgal 12 Mart, kale 30 Temmuz).", duygu:["⚔️","😔"] },

// ---------------------------------------------------------------------------
// A-2 — Cerbe kalesinin düşüşü  🔴 ASIL BORÇ KAPATAN MADDE
// ---------------------------------------------------------------------------
// TDV `cerbe`: deniz muharebesi **14 Mayıs 1560**, kale ise "iki ay kadar
// süren kuşatmadan" sonra **"30 Temmuz 1560 günü"** alındı. İki ayrı olay,
// iki ayrı gün — atlas ikisini tek güne (14 Mayıs) bindirmişti.
// ⇒ Bu madde bağlandıktan sonra Cerbe kaydının `d:` başlangıcı
//   1560-05-14'ten 1560-07-30'a çekilebilir; kırılma bu maddeye basar.
{ t:"1560-07-30", k:"fetih", etiket:["toprak-kazanc","konu-askeri"],
  b:"Cerbe kalesinin düşüşü — adanın Osmanlı idaresine geçişi",
  gun:"30 Temmuz 1560", yer:"Cerbe (Djerba)", yer_id:"Cerbe (Djerba)",
  kisiler:"Piyâle Paşa, Turgut Paşa",
  d:"Piyâle Paşa'nın 14 Mayıs 1560'taki deniz zaferinden sonra Haçlı kuvvetleri adada inşa ettikleri kaleye kapandı; Trablusgarp beylerbeyi Turgut Paşa'nın kuvvetleri karadan kuşattı. İki ay süren muhasara 30 Temmuz 1560'ta kalenin düşmesiyle bitti ve ada Trablusgarp beylerbeyiliğine bağlandı. Deniz zaferi ile kalenin fethi arasında yetmiş yedi gün vardır; ada 14 Mayıs'ta değil 30 Temmuz'da fiilen el değiştirmiştir.", ic_not_d:"haritada toprak değişimi ikincisine (30 Temmuz) bağlanmalıdır",
  kaynak:"cerbe", duygu:["🎉","😔"] },

// ---------------------------------------------------------------------------
// GEMINI-DOGRULA — 19 Eylül 2026 (M-4598). denetim/YAMA-KIRILMASIZ-0919.json ve
// YAMA-SESSIZ-BORC-0919.json'daki veri düzeltmelerinin kırılmalarına basan
// kaynaklı maddeler. Her maddede kaynak cümlesi AYNEN; gün kaynaktan değilse
// açıkça yazıldı.
// ---------------------------------------------------------------------------
{ t:"1527-09-23", k:"kayip", etiket:["toprak-kaybi","konu-askeri"],
  b:"Ferdinand Budin'i ele geçirdi — Szapolyai başşehirden çıkarıldı",
  gun:"23 Eylül 1527", ic_not_gun:"TDV kendi içinde çelişiyor: suleyman-i '23 Eylül 1527', budin '1527 Ağustosu'. Günü veren tek cümle suleyman-i'deki olduğu için o alındı.",
  yer:"Budin (Buda), Peşte", yer_id:"Budin", kisiler:"I. Ferdinand, János Szapolyai, Kanûnî Sultan Süleyman",
  d:"Mohaç'tan sonra Macar tahtında iki kral çıkmıştı: soyluların bir kısmı János Szapolyai'yi, bir kısmı Habsburg Ferdinand'ı seçmişti. Ferdinand 1527'de Budin'i ele geçirip Szapolyai'yi başşehirden çıkardı; Szapolyai Sultan Süleyman'dan yardım istedi. Bu, 1529 Viyana seferinin ilk hedefinin Budin olmasının sebebidir.",
  kaynak:"TDV suleyman-i AYNEN: '23 Eylül 1527'de Ferdinand, Szapolyai'yi Budin'den çıkarınca içerideki ağır krize rağmen Kanûnî Sultan Süleyman ve İbrâhim Paşa bütün dikkatlerini buraya yöneltti.' · TDV budin AYNEN: '1527 Ağustosunda Buda'yı ele geçiren Ferdinand'a karşı János Szapolyai Sultan Süleyman'dan yardım istedi.'" },

{ t:"1537-01-01", k:"vassal", etiket:["toprak-kazanc","siyaset","konu-askeri","konu-siyasi"],
  b:"Barbaros'un Ege adaları seferi — Nakşa Dükalığı Osmanlı kontrolüne girdi",
  gun:"944-945 (1537-1538)", ic_not_gun:"Kaynak yalnız hicrî yıl aralığı veriyor; tarih alanı YIL düzeyindedir (§4), ay-gün yok.",
  yer:"Nakşa (Naxos), Paros ve çevre adalar", yer_id:"Nakşa", kisiler:"Barbaros Hayreddin Paşa",
  d:"1207'den beri Venedik vesâyetinde Latin dükleri tarafından yönetilen Nakşa Dükalığı, Barbaros Hayreddin Paşa'nın adalar seferiyle Osmanlı kontrolü altına girdi. Adanın statüsüne dokunulmadı; dükalık Osmanlı'ya tâbi olarak sürdü ve 1540 Osmanlı-Venedik antlaşmasıyla hâkimiyet hakkı resmen Osmanlılar'a devredildi.",
  kaynak:"TDV naksa AYNEN: 'Nakşa ve civarındaki adalar, 944-945 (1537-1538) yıllarında Barbaros Hayreddin Paşa'nın adalar seferiyle Osmanlı kontrolü altına girdi.' · '1540'taki Osmanlı-Venedik antlaşmasıyla hâkimiyet hakkı resmen Osmanlılar'a devredildi.' · 'Ancak adanın statüsüne dokunulmadı ve düklük Yasef Nasi'ye verildi (974/1566).'" },

{ t:"1913-08-31", k:"siyaset", kapsam:"dis", etiket:["siyaset","konu-siyasi"],
  b:"Gümülcine merkezli Garbî Trakya Hükûmet-i Muvakkatesi ilân edildi",
  gun:"31 Ağustos 1913", yer:"Gümülcine, Batı Trakya", yer_id:"Gümülcine", kisiler:"Müderris Sâlih Efendi",
  d:"Bükreş Antlaşması (10 Ağustos 1913) Batı Trakya'yı Bulgaristan'a bırakınca bölgenin Türk halkı Gümülcine merkezli geçici bir hükümet ilân etti; Dedeağaç'ın alınmasından sonra hükümet bağımsızlığını 'Garbî Trakya Hükûmet-i Müstakillesi' adıyla duyurdu. Büyük devletlerin müdahalesiyle Osmanlı hükümeti onu desteklemedi; 29 Eylül 1913 İstanbul Antlaşması Batı Trakya'yı Bulgarlar'a bıraktı ve hükümet 25 Ekim 1913'e kadar ancak elli yedi gün yaşadı.",
  kaynak:"TDV bati-trakya AYNEN: '31 Ağustos 1913'te merkezi Gümülcine olmak üzere Garbî Trakya Hükûmet-i Muvakkatesi ilân edildi.' · '25 Ekim 1913'e kadar Bulgaristan'a teslimi şart koşulan Batı Trakya'da Garbî Trakya Hükûmet-i Müstakillesi varlığını ancak elli yedi gün sürdürebildi.'" },

{ t:"1814-02-04", k:"siyaset", kapsam:"dis", etiket:["siyaset","konu-siyasi"],
  b:"Danzig'de Rus-Prusya ikili iktidarı sona erdi — Napolyon'un serbest şehri Prusya'ya döndü",
  gun:"4 Şubat 1814", yer:"Danzig (Gdańsk)", yer_id:"Gdansk", kisiler:"I. Aleksandr",
  d:"Tilsit barışıyla (9 Temmuz 1807) Prusya'dan ayrılıp Fransız koruması altında serbest şehir yapılan Danzig'i Napolyon'un kuvvetleri 1813 kuşatmasından sonra terk etti. 2 Ocak – 4 Şubat 1814 arasında şehirde Rus-Prusya ikili iktidarı sürdü; Çar Aleksandr'ın Danzig ve Vistül ağzını alma planından vazgeçmesiyle şehir Prusya idaresine geçti.",
  kaynak:"Gedanopedia (Encyklopedia Gdańska), 'WOLNE MIASTO GDAŃSK, 1807–1815' AYNEN: 'Po opuszczeniu przez wojska napoleońskie miasta na krótko, między 2 stycznia a 4 lutego 1814, doszło w nim do dwuwładzy.' · 'Sytuację wyjaśniło wycofanie się z końcem stycznia 1814 cara Aleksandra I z planów zajęcia przez Rosję Gdańska i ujścia Wisły.' · kuruluş: '… traktatów … francusko-pruskiego z 9 VII 1807 zawartych w Tylży …'" },

{ t:"1920-11-15", k:"siyaset", kapsam:"dis", etiket:["siyaset","konu-siyasi"],
  b:"Danzig Serbest Şehri Milletler Cemiyeti koruması altında kuruldu",
  gun:"15 Kasım 1920", yer:"Danzig (Gdańsk)", yer_id:"Gdansk",
  d:"Versay Antlaşması'yla Almanya'dan ayrılan Danzig, 10 Ocak 1920'den itibaren müttefik büyük devletlerin geçiş idaresinde kaldı; 15 Kasım 1920'de Milletler Cemiyeti'nin koruması altında Polonya ile gümrük birliği içindeki serbest şehir olarak kuruldu.",
  kaynak:"Gedanopedia (Encyklopedia Gdańska), 'WOLNE MIASTO GDAŃSK, 1920–1939' AYNEN: 'Od 10 I do 15 XI 1920, w okresie przejściowym, II WMG znajdowało się pod zarządem głównych mocarstw sprzymierzonych.' · '9 I 1920 podpisano protokół przejęcia Gdańska przez aliantów, w wyniku którego Niemcy straciły wszelkie prawa na jego obszarze.'" },

{ t:"1815-05-03", k:"siyaset", kapsam:"dis", etiket:["siyaset","diplomasi","konu-diplomasi"],
  b:"Viyana'da Krakov serbest, bağımsız ve tarafsız şehir ilân edildi",
  gun:"3 Mayıs 1815", ic_not_gun:"Gün Encyclopædia Britannica 1911'de YOK; künye krakow-serbest-sehri'nin kaynağından (Hertslet, The Map of Europe by Treaty, No. 14, '21st April / 3rd May 1815') — bu turda yeniden okunmadı.",
  yer:"Krakov", yer_id:"Krakov",
  d:"Viyana Kongresi'nde Rusya, Avusturya ve Prusya, Krakov şehrini çevresiyle birlikte üç devletin koruması altında serbest bir devlet yaptı; Viyana Nihai Senedi bu düzeni tescil etti.",
  kaynak:"Encyclopædia Britannica 1911, 'Cracow' (Wikisource) AYNEN: 'by the Final Act of the congress signed at Vienna in 1815, \"the town of Cracow, with its territory, is declared to be for ever a free, independent and strictly neutral city, under the protection of Russia, Austria and Prussia.\"' · gün: Hertslet No. 14 (künyeden)" },

{ t:"1846-11-11", k:"siyaset", kapsam:"dis", etiket:["siyaset","diplomasi","konu-diplomasi"],
  b:"Krakov Serbest Şehri kaldırıldı, Avusturya'ya katıldı",
  gun:"11 Kasım 1846", ic_not_gun:"EB1911 yalnız 'November 1846' veriyor; gün künye krakow-serbest-sehri'nin kaynağından (Hertslet No. 202, Avusturya imparatorunun ilhak beyannamesi) — bu turda yeniden okunmadı.",
  yer:"Krakov", yer_id:"Krakov",
  d:"Şubat 1846 Krakov ayaklanmasını bahane eden Rusya, Avusturya ve Prusya, Viyana'daki konferansta serbest şehri kaldırıp Avusturya topraklarına katmaya karar verdi; İngiltere ve Fransa'nın itirazları sonuç vermedi.",
  kaynak:"Encyclopædia Britannica 1911, 'Cracow' (Wikisource) AYNEN: 'as the outcome of a conference at Vienna (November 1846) the three courts … decided to extinguish the state of Cracow and to incorporate it with the dominions of Austria.' · gün: Hertslet No. 202 (künyeden)" },

{ t:"1893-01-01", k:"fetih", kapsam:"dis", etiket:["askeri","konu-askeri"],
  b:"Bornu, Râbih b. Zübeyr'in hâkimiyetine girdi",
  gun:"1893", ic_not_gun:"Kaynak yalnız YIL veriyor (§4).",
  yer:"Bornu (Kukava, Dikeo)", yer_id:"Dikva (Dikeo)", kisiler:"Râbih b. Zübeyr",
  d:"Bagirmi ve Vedây'ı sarsan Sudanlı savaş beyi Râbih b. Zübeyr Bornu'yu ele geçirdi; 1896'ya kadar ülkenin tamamını alıp Dikeo'yu merkez edindi.",
  kaynak:"TDV bornu AYNEN: '… Bornu, Bagirmi Sultanı Râbih b. Zübeyir'in hâkimiyetine girdi (1893).' · '1896'ya kadar ülkenin tamamını ele geçiren ve Dikeo'yu merkez edinen Râbih 1900'de Fransız sömürge ordusu tarafından mağlûp edilerek öldürülünce yerine oğlu hâkimiyetini devam ettirmek istedi, fakat Fransızlar karşısında tutunamadı.'" },

{ t:"1900-01-01", k:"savas", kapsam:"dis", etiket:["savas","konu-askeri"],
  b:"Râbih b. Zübeyr Fransızlara yenilip öldürüldü — Bornu'daki hâkimiyeti çözüldü",
  gun:"1900", ic_not_gun:"TDV yalnız YIL veriyor; ay-gün yazılmadı (§4). TDV bornu 'Fransız sömürge ordusu', TDV cad 'Dikoa'daki (Dikwa) savaşta esir düştü' diyor.",
  yer:"Bornu", yer_id:"Dikva (Dikeo)", kisiler:"Râbih b. Zübeyr",
  d:"Fransız sömürge ordusuna yenilen Râbih öldürüldü; oğlu hâkimiyeti sürdürmek istediyse de tutunamadı ve Bornu 1902'de Fransa, İngiltere ve Almanya arasında paylaşıldı.",
  kaynak:"TDV bornu AYNEN: '… Râbih 1900'de Fransız sömürge ordusu tarafından mağlûp edilerek öldürülünce yerine oğlu hâkimiyetini devam ettirmek istedi, fakat Fransızlar karşısında tutunamadı.' · TDV cad AYNEN: '… Dikoa'daki (Dikwa) savaşta esir düştü ve öldürüldü (1900).'" },

];
