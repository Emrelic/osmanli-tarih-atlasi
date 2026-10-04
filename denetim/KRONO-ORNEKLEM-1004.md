# KRONO-ORNEKLEM-1004 — kronoloji çekirdeğinin doğruluk örneklemi

Oturum: KRONO-DOGRULUK-ORNEKLEM-1004 · 4 Ekim 2026 · görev: YILDIRIM BAYEZIT (send_message)
**Veriye yazılmadı, düzeltme yapılmadı.**

## 0. Evren ve seçim — ÖLÇÜMDEN ÖNCE DONDURULDU

- Evren: `data/olaylar*.js` — **75 dosya · 1761 madde** (node `vm` ile gerçek JS
  değerlendirmesi; dosyalar ada göre sıralı, dosya içi sıra korunarak tek liste).
  `kronoloji*.js` (kuyruk) bu turda DIŞARIDA.
  ⚠️ Sevkteki "8575 madde" bu evrenin değil, kuyruk dâhil bütün kronolojinin sayısı
  olmalı; çekirdek 1761'dir.
- Seçim: Python `random.seed(1004)` · `random.sample(range(1761), 25)` · sıralı.
  İndisler: `124 217 309 384 429 699 862 1042 1105 1255 1266 1305 1332 1370 1419 1434
  1464 1472 1574 1582 1587 1657 1700 1730 1743`
  Betik: scratchpad `dok.js` (döküm) + `sec.py` (seçim) — yeniden üretilebilir.

| # | dosya | t | başlık | kaynak (kısa) |
|---|---|---|---|---|
| 124 | olaylar_2s_0919.js | 1580-04-10 | Zamość'ın kuruluş belgesi | Zamość Devlet Arşivi |
| 217 | olaylar_amerika_0920.js | 1541-02-12 | Santiago del Nuevo Extremo kuruldu | Pocock 1967 |
| 309 | olaylar_ek.js | 1305-06-01 | Katalan birliklerinin Anadolu seferi | `bizans` |
| 384 | olaylar_ek12.js | 1846-11-11 | Krakov Serbest Şehri kaldırıldı | EB1911 + Hertslet |
| 429 | olaylar_ek14.js | 1580-01-01 | Zal Mahmud Paşa Camii tamamlandı | `zal-mahmud-pasa-kulliyesi` |
| 699 | olaylar_ek3.js | 1409-02-01 | Musa Çelebi Rumeli'ye geçti | `musa-celebi` |
| 862 | olaylar_ek5.js | 1451-02-18 | II. Murad'ın vefatı, II. Mehmed'in 2. cülûsu | `mehmed-ii` |
| 1042 | olaylar_ek5.js | 1799-05-20 | Akkâ Savunması | `cezzar-ahmed-pasa` |
| 1105 | olaylar_ek5.js | 1878-01-31 | Edirne Mütarekesi | `ayastefanos-antlasmasi` |
| 1255 | olaylar_ek6.js | 1885-01-26 | Hartum'un düşüşü | `sudan` |
| 1266 | olaylar_ek6.js | 1920-05-27 | Gümülcine'nin işgali | `gumulcine` |
| 1305 | olaylar_ek7.js | 1622-05-20 | Genç Osman'ın katli | `osman-ii` |
| 1332 | olaylar_ek7.js | 1721-03-21 | Mehmed Efendi'nin XV. Louis'ce kabulü | `yirmisekiz-celebi-mehmed-efendi` |
| 1370 | olaylar_ek7.js | 1834-07-08 | Redif teşkilatı kuruldu | `redif--ordu` |
| 1419 | olaylar_ek8.js | 1468-01-01 | Kâsım Han'ın ölümü, Danyal'ın cülûsu | `kasim-hanligi` |
| 1434 | olaylar_ek9.js | 1844-01-01 | Nedrûme'nin Fransız denetimine geçişi | `tilimsan` |
| 1464 | olaylar_ilirya_0072.js | 1813-01-01 | Avusturya İlirya'yı geri aldı | LZMK (4 madde) |
| 1472 | olaylar_kamerika.js | 1829-01-01 | Fort Pitt kuruldu | `bulunamadı` |
| 1574 | olaylar_p0057.js | 1919-05-11 | İtalyanların GB Anadolu kıyılarına çıkışı | `bodrum` · `sevr-antlasmasi` |
| 1582 | olaylar_p0057.js | 1920-07-20 | Yunanların Doğu Trakya'yı işgali | `milli-mucadele` · `kirklareli` · `edirne` |
| 1587 | olaylar_p0057.js | 1921-03-28 | Türk kuvvetlerinin Batum'u boşaltması | `batum` |
| 1657 | olaylar_p0068b.js | 1789-01-01 | Akkirman'ın Ruslarca alınması | `akkirman` |
| 1700 | olaylar_p0917dunya.js | 1916-03-08 | Rize'nin Rus işgali | `rize` · Çaykıran 2021 |
| 1730 | olaylar_p0917kosu13.js | 1789-11-14 | Bender'in Potemkin'e teslimi | ESBE (2 madde) |
| 1743 | olaylar_p0917taraf.js | 1892-01-01 | 1892 Tunus-Trablusgarp sınır düzenlemesi | IBS 121 |

## 1. ÖNGÖRÜ — ölçümden ÖNCE yazıldı

- **25'te 🔴 4 hata (aralık 2–6) · ⚪ 4 ölçülemedi · ✅ ~17.**
- Mekanizmalar, beklenen ağırlık sırasıyla:
  1. **③ kaynak desteği zayıf** — slug maddenin GENEL konusunu (kişi/yer) gösteriyor ama
     tarihi taşıyan cümle başka bir şeyi tarihliyor (`D211 ⑧`). Özellikle `t`'si gün
     hassasiyetli ama kaynağı geniş bir yer/kişi maddesi olanlar (ör. 1266 `gumulcine`,
     1587 `batum`, 1105 `ayastefanos-antlasmasi`).
  2. **① sahte gün hassasiyeti** — `YYYY-06-01` / `YYYY-02-01` gibi "ayın 1'i" kodları
     (309, 699): kaynak yıl/mevsim veriyor, alan ay taşıyor (`D213`).
  3. **② birleşik olay** — tek maddeye iki olay sığdırılıp `t` birine bağlanmış
     (862 vefat+cülûs, 1574 üç işgal).
- Örüntü öngörüsü: hatalar **eski `olaylar_ek*.js` (TDV slug-only kaynak)** dosyalarında
  yoğunlaşır; yeni paketler (`p0057`, `p0917*`, `2s_*`) AYNEN alıntı taşıdığı için daha temiz.

## 2. Ölçüm

**Kova kuralı (ölçümden önce belirlendi):** maddenin kovası üç sorunun EN KÖTÜSÜDÜR.
🔴 = ① tarih ya da ② içerik kaynağa karşı yanlış, YA DA ③ `kaynak:` gösterilen iddiayı
açıkça taşımıyor (atıf uydurma / desteksiz) · ⚪ = yanlış yok ama en az bir soru
ölçülemedi ya da kaynak alanı beyanlı boş · ✅ = üçü de kaynak cümlesiyle doğrulandı.
"Kısmen" (③ çekirdeği taşıyor, bir yan cümleyi taşımıyor) ✅'yi bozmaz, notta durur.
TDV metinleri 4 Ekim 2026'da canlı çekildi (hepsi HTTP 200, gövde dolu); yalnız TDV dışı
kaynaklar kendi sitesinden okundu. WebFetch (küçük model) KULLANILMADI — ham metin
çekilip cümleler bu oturumda okundu.

| # | ① tarih | ② içerik | ③ kaynak | KOVA |
|---|---|---|---|---|
| 124 | ✅ | ✅ | ✅ | ✅ |
| 217 | ⚪ | ⚪ | ⚪ | ⚪ |
| 309 | 🔴 | ✅ | ✅ (yıl) | 🔴 |
| 384 | ⚪ (gün) | ✅ | kısmen | ⚪ |
| 429 | ✅ | ✅ | ✅ | ✅ |
| 699 | 🔴 | ✅ | 🔴 | 🔴 |
| 862 | ✅ | ✅ | ✅ | ✅ |
| 1042 | ✅ | ✅ | ✅ | ✅ |
| 1105 | ✅ | ✅ | kısmen | ✅ |
| 1255 | ✅ | ✅ | ✅ | ✅ |
| 1266 | 🔴 | 🔴 | 🔴 | 🔴 |
| 1305 | ✅ | ✅ | 🔴 | 🔴 |
| 1332 | ✅ | ✅ | ✅ | ✅ |
| 1370 | ✅ | ✅ | ✅ | ✅ |
| 1419 | ✅ | ✅ | ✅ | ✅ |
| 1434 | ⚪ | ⚪ | 🔴 | 🔴 |
| 1464 | ✅ | ✅ | ✅ | ✅ |
| 1472 | ✅ | ✅ | ⚪ (beyanlı boş) | ⚪ |
| 1574 | ✅ | ✅ | ✅ | ✅ |
| 1582 | ✅ | ✅ | ✅ | ✅ |
| 1587 | ✅ | ✅ | ✅ | ✅ |
| 1657 | ✅ | ✅ | kısmen | ✅ |
| 1700 | ✅ | ✅ | ✅ | ✅ |
| 1730 | ✅ | ✅ | ✅ | ✅ |
| 1743 | ✅ | ✅ | ✅ | ✅ |

### 2.1 Madde madde — kaynak cümlesiyle

- **124 ✅** Zamość Devlet Arşivi: "Pergaminowego aktu, wystawionego 10 kwietnia 1580 roku
  w Jarosławcu przez Jana Zamoyskiego – … kanclerza wielkiego koronnego". Gün, fail, unvan tutuyor.
- **217 ⚪** `t` 1541-02-12, Santiago'nun yaygın kabul gören kuruluş günüdür ve Eylül 1541
  Michimalonco saldırısı da doğru; ama `kaynak:` (Pocock 1967) açılamadı ve kaydın kendi
  `ic_not_d`'si "Basılı sayfadan aynen alıntı yapılmadı" diyor. Kaynak cümlesi okunmadan
  ✅ verilmez.
- **309 🔴 ① sahte ay.** TDV `bizans`: "Roger de Flor idaresindeki 6500 kişilik Katalan
  birliği … Bizans'ın yardımına koştu (1303). Nitekim 1304'te … Alaşehir'i kurtardılar. …
  Bizans … bu birlikleri Trakya'ya geçirdi ve Roger de Flor'u öldürttü (1305)." Kaynak
  YIL veriyor; `t:"1305-06-01"` bir AY (Haziran) taşıyor, ayın dayanağı yok (`§4`:
  gün/ay bilinmiyorsa `YYYY-01-01`). İçerik (geçici başarı, çekilme) doğru. Doğrusu `1305-01-01`.
  ⚠️ Başlık "Anadolu seferi" 1303-1304'ü anlatır, `t` ise 1305 = çekilme yılı; metin
  çekilmeyi anlattığı için tarih metinle tutarlı, başlık değil.
- **384 ⚪** EB1911 'Cracow' (Wikisource'ta okundu): "as the outcome of a conference at
  Vienna (November 1846) the three courts … decided to extinguish the state of Cracow and
  to incorporate it with the dominions of Austria." → AY doğrulandı. GÜN (11 Kasım)
  "Hertslet No. 202 (künyeden)" — yani `devletler.js` künyesinden devralınmış; künye
  Hertslet No. 202'yi "Avusturya imparatorunun 11 Kasım 1846 ilhak beyannamesi" diye
  anıyor. Hertslet'i açamadım (archive.org metni 404) ⇒ gün ölçülemedi. Not: madde metni
  konferans KARARINI anlatıyor (No. 201 = 6 Kasım), `t` ise beyannameyi (No. 202) — `D211 ⑧`
  sınıfı bir ayrışma; başlık ("kaldırıldı, katıldı") beyannameye uyuyor.
- **429 ✅** TDV `zal-mahmud-pasa-kulliyesi`: "Cami inşasının 988'de (1580) tamamlandığı,
  medreselerin yapımının ise 990 (1582) yılına kadar sürdüğü düşünülmektedir." (TDV de
  kesin değil, "düşünülmektedir" diyor; madde bunu kesin cümleye çevirmiş — küçük kayıp.)
- **699 🔴 ① yıl TDV'ye aykırı + ③ kaynak tarih vermiyor.** `kaynak: musa-celebi` geçişi
  hiç tarihlemiyor ("Sinop'tan gemiye binerek Eflak'a geçti"; ilk tarih Yanbolu, "8 Şevval
  812 / 13 Şubat 1410"). Başka TDV maddesi `mehmed-i` tarihliyor: "Mûsâ, Eflak Voyvodası
  Mircea'nın davetini kabul ederek 809'da (1406) Eflak'a deniz yoluyla ulaştı (Dersca …
  1406 tarihini verir. Neşrî'deki Menâkıbnâme'de bu tarih tasdik edilir …)". Atlas
  `1409-02-01` (gun: "1409 başı") — dayanağı bulunamadı. TDV esas ⇒ doğrusu **1406**
  (Eflak'a varış); 1409-1410 Rumeli harekâtının başlangıcı ise ayrı bir olaydır ve TDV onu
  13 Şubat 1410 Yanbolu ile tarihler.
- **862 ✅** TDV `murad-ii`: "II. Murad hastalanarak vefat etti (1 Muharrem 855 / 3 Şubat
  1451)"; `mehmed-ii`: "Mehmed, 16 Muharrem 855'te (18 Şubat 1451) on dokuz yaşında ikinci
  defa Osmanlı tahtına çıktı." `t` cülûsa bağlı, metin iki günü ayrı veriyor — doğru.
  (③: vefat günü `murad-ii`de, kaynak yalnız `mehmed-ii` diyor — kısmen.)
- **1042 ✅** TDV `cezzar-ahmed-pasa`: "19 ve 20 Mart 1799'daki hücumlarla başlayan Akkâ
  muhasarası … Bonapart … 20 Mayıs'ta kuşatmayı kaldırıp geri çekilmeye mecbur oldu."
  Nizâm-ı Cedîd birliği ve İstanbul'daki sevinç de aynı paragrafta.
- **1105 ✅** TDV `ayastefanos-antlasmasi`: "Bâbıâli, muharebeleri durdurmak için Rusya'ya
  başvurdu ve 31 Ocak 1878 tarihinde Edirne Mütarekesi imzalandı." ③ kısmen: metindeki
  "ön barış şartları" (Bulgar özerkliği, bağımsızlıklar, tazminat) TDV'de mütareke
  maddesinde değil, Ayastefanos maddelerinde geçiyor; tarihsel olarak Edirne ön barış
  esasları bunları içerir — yanlış değil, desteksiz yan cümle.
- **1255 ✅** TDV `sudan`: "26 Ocak 1885'te Hartum'a giren … Muhammed Ahmed el-Mehdî";
  Gordon'un öldürülmesi de aynı maddede.
- **1266 🔴 ② içerik yanlış + ① TDV'ye aykırı + ③ desteksiz.** Madde: "1913'te
  Bulgaristan'dan geri alınmış olan bölge, imparatorluğun Rumeli'de kaybettiği son toprak
  oldu." Kendi kaynağı TDV `gumulcine` bunu yalanlıyor: "1371'den 1912'ye kadar kesintisiz
  olarak Osmanlı idaresi altında kalmıştır. … I. Balkan Savaşı sırasında Gümülcine
  Bulgaristan tarafından işgal edildi. II. Balkan Savaşı ile I. Dünya Savaşı arasında
  kurulan ve kısa süren Garbî Trakya Hükûmet-i Müstakillesi'nin başşehri olan Gümülcine,
  I. Dünya Savaşı'nda yeniden Bulgarlar'ın eline geçti." ⇒ 1920'de Gümülcine OSMANLI
  TOPRAĞI DEĞİLDİ; 1913'te Osmanlı'nın geri aldığı Edirne'dir, Batı Trakya değil. "Batı
  Trakya'nın kaybı" başlığı bu yüzden yanlış. Tarih: `gumulcine` 27 Mayıs'ı hiç vermiyor;
  TDV `milli-mucadele` başka gün veriyor: "Yunanistan 4 Haziran'da Batı Trakya'yı işgal
  edip Meriç kenarına kadar geldi." TDV esas ⇒ 27 Mayıs kaynaksız ve TDV ile çelişiyor.
  🔴 **Harita sonucu da olabilir:** bu madde bir Değişmez 2 kırılmasını karşılıyorsa,
  haritada Gümülcine 1913-1920 arası Osmanlı boyanıyor olabilir — ÖLÇMEDİM, yerleşim
  dosyalarına bakmak bu görevin dışında. Koordinatöre ayrı kalem.
- **1305 🔴 ③ atıf uydurma.** Gün doğru — TDV `osman-ii`: "II. Osman'ı yakaladılar (20
  Mayıs). … aynı gün öğleden sonra Yedikule'ye … sevkedildiğini ve burada boğularak
  öldürüldüğünü belirtirler." Ama madde "TDV İslâm Ansiklopedisi'nin 'Osman II' maddesine
  göre bu olay, Osmanlı tarihinde bir padişahın açıkça askerî bir isyanla katledildiği ilk
  vakadır" diyor; TDV maddesinde "ilk" 7 kez geçiyor (ilk oğul, ilk saltanat, ilk günler,
  ilk emir, I. Mustafa'nın tahta çıkışının "ilk defa vuku bulan bir uygulama" olması) ve
  HİÇBİRİ katli nitelemiyor.
  Hüküm tarihsel olarak savunulabilir ama TDV'ye atfı UYDURMADIR.
- **1332 ✅** TDV: "Osmanlı elçisinin 21 Mart 1721'de Kral XV. Louis tarafından Tuileries
  Sarayı'nda kabulü …"
- **1370 ✅** TDV `redif--ordu`: "Redif askerî teşkilâtı 8 Temmuz 1834'te Redif
  Kanunnâmesi'nin çıkarılmasıyla oluşturuldu ve gereğinin yapılması Serasker Koca Hüsrev
  Paşa'ya havale edildi." "1400'er kişilik dört bölüklü taburlar" da birebir.
- **1419 ✅** TDV `kasim-hanligi`: "Kāsım'ın 1468'de (873) vefatıyla yerine oğlu Danyal
  (Danyar) geçti (1468-1486)."
- **1434 🔴 ③ kaynak desteklemiyor; ①② ölçülemedi.** TDV `tilimsan` Nedrûme'yi yalnız
  Murâbıt camisi bağlamında anıyor ("Huneyn, Tilimsân ve Nedrûme'deki (Nedroma) Murâbıtlar
  dönemine ait camiler"); 1843/1844/1845 hiç geçmiyor. Fransız işgali için verdiği tarih
  Tilimsân'ın kendisi: "1842'de antlaşmayı yok sayıp ikinci işgal dönemini başlattılar."
  Isly (14 Ağustos 1844) ve Lâlla Mağniye (18 Mart 1845) tarihleri genel bilgiyle tutarlı
  ama hiçbiri gösterilen kaynakta yok; Nedrûme'nin geçiş yılı ölçülemedi.
- **1464 ✅** LZMK `vojna-krajina` canlı okundu: "Potkraj 1813. habsburške su trupe
  osvojile to područje te je obnovljena stara organizacija pograničja." (YIL hassasiyeti
  beyanlı, `1813-01-01` kurala uygun.)
- **1472 ⚪ ③ beyanlı boş — ama kaynak VAR.** Encyclopedia of Saskatchewan (Regina Üniv.):
  "Founded in 1829 and located at a large bend in the North Saskatchewan River, Fort Pitt
  was the Hudson's Bay Company's major trading post between Fort Carlton and Fort
  Edmonton. From 1829 to 1876 Fort Pitt's main role in the fur trade was to supply
  provisions such as dried meat, buffalo grease, and furs." ⇒ ①② DOĞRU; `kaynak:
  "bulunamadı"` yanlış bir boşluk, doldurulabilir.
- **1574 ✅** TDV `bodrum`: "Bodrum savaş sonunda 11 Mayıs 1919'da İtalyan işgaline
  uğradı." `sevr-antlasmasi`: "5 Mayıs'ta Marmaris'i işgal ettikten sonra … Yunanlılar 11
  Mayıs'ta Fethiye'ye çıkınca İtalyanlar da 13 Mayıs'ta Kuşadası'nı ele geçirdiler."
- **1582 ✅** TDV `milli-mucadele`: "Yunan ordusunun 20 Temmuz'da bütün Trakya'yı ele
  geçirmesi karşısında paniğe kapılan padişah 22 Temmuz'da Saltanat Şûrası'nı topladı."
  `kirklareli`: "26 Temmuz 1920'de Yunan işgaline uğrayan Kırkkilise"; `edirne`: "Temmuz
  1920'de Yunan işgaline uğradı."
- **1587 ✅** TDV `batum`: "Türk kuvvetlerinin şehri boşaltmasından sonra (28 Mart 1921)";
  İngiliz çekilmesi ("Temmuz 1920'de çekildiklerinde Batum'u da boşalttılar ve buraya
  Gürcistan hükümeti el koydu") ve 16 Mart Moskova Antlaşması da birebir.
- **1657 ✅** TDV `akkirman`: "Akkirman 1770 ve 1789 yıllarında iki defa Ruslar tarafından
  kuşatılarak ele geçirildi". ③ kısmen: Tayfur Paşa'nın idamı `akkirman`da YOK ama TDV
  `cezayirli-gazi-hasan-pasa`da var: "Akkirman Kalesi'ni savaşmadan Ruslar'a veren Tayfur
  Paşa'yı idam ettirdi" — içerik doğru, atıf eksik.
- **1700 ✅** TDV `rize`: "ardından 8 Mart 1916'da şehir işgale uğradı." (Pazar/Çayeli/Of
  günleri Çaykıran 2021'e dayanıyor, onu açmadım; `t` ve başlık TDV'yle tutuyor.)
- **1730 ✅** ESBE «Турецкие войны России» (ru.wikisource): "Когда это было исполнено, то 3
  ноября наконец сдались и Бендеры" — eski takvim 3 Kasım + 11 gün = 14 Kasım 1789. ESBE
  «Бендеры»: "В 1789 году … Б. сдались на капитуляцию князю Потемкину".
- **1743 ✅** IBS 121 (FSU kütüphanesi PDF'i, metinden okundu): "A second agreement in 1892
  delimited the boundary with greater accuracy than previously and inland as far as
  Ghudamis." 1910 sözleşmesi ("On May 19, 1910 … delimited the present-day Libya-Tunisia
  boundary") metindeki "on sekiz yıl sonra" ile tutuyor.

## 3. Sonuç

**25'te: 🔴 5 · ⚪ 3 · ✅ 17.**

| ölçü | sayı | oran | Wilson %95 |
|---|---|---|---|
| 🔴 her türlü (tarih/içerik/atıf) | 5/25 | %20 | %8,9 – %39,1 |
| 🔴 yalnız tarih ya da içerik GERÇEKTEN yanlış (309, 699, 1266) | 3/25 | %12 | %4,2 – %30,0 |
| 🔴 yalnız atıf/kaynak (1305, 1434) | 2/25 | %8 | — |
| ⚪ ölçülemedi / beyanlı boş | 3/25 | %12 | — |

⚠️ ⚪ ile ✅ BİRLEŞTİRİLMEDİ. "Doğrulanan" oran %68'dir (17/25), %80 değil.

### 3.1 ÖRÜNTÜ — net ve tek eksenli

**Beş 🔴'nin BEŞİ DE `olaylar_ek*.js` ailesinde** (ek, ek3, ek6, ek7, ek9).

| katman | evrende | örneklemde | 🔴 | oran | Wilson %95 |
|---|---|---|---|---|---|
| `olaylar_ek*.js` (ek, ek2…ek22) | 1233 (%70) | 14 | **5** | %36 | %16 – %61 |
| öteki 53 dosya (paketler `p00xx`, `2s_*`, `p0917*`, bölge dosyaları) | 528 (%30) | 11 | **0** | %0 | %0 – %26 |

Ayırt edici özellik kaynak alanında görünüyor: `ek*` ailesinin 1233 maddesinden yalnız
**12**'si `AYNEN` alıntı taşıyor; öteki 528 maddeden **97**'si. Ama "çıplak slug"
tek başına açıklama DEĞİL: `p0057`/`p0068b`/`p0917dunya` da çıplak slug kullanıyor ve
dördü de ✅ — onlarda metin TDV günlerini cümle içinde açıkça aktarıyor ("TDV'ye göre 5
Mayıs'ta …"). ⇒ Sınıflayıcı DOSYA KUŞAĞIdır, slug biçimi değil.

Hataların mekanizması üç sınıf:
1. **Süsleme / yorum cümlesi** (1266, 1305) — `ek6`/`ek7`'nin uzun anlatı metinleri,
   kaynağın söylemediği hükümler ekliyor ("Rumeli'de kaybettiği son toprak", "TDV'ye
   göre ilk vaka"). 1266'da bu ekleme olguyu TERSİNE çeviriyor. En tehlikeli sınıf:
   tarih doğru olsa bile içerik yanlış.
2. **Kaynak tarihi vermiyor, tarih başka yerden / tahminden** (699, 1434, 309'un ayı) —
   slug konuyu gösteriyor, tarihi taşıyan cümle yok (`D211 ⑧` ailesi). 699'da başka bir TDV
   maddesi farklı YIL veriyor.
3. **Sahte hassasiyet** (309) — yıl kaynağına ay eklenmiş (`D213`).

### 3.2 Öngörü × ölçüm

| öngörü | ölçüm | tuttu mu |
|---|---|---|
| 🔴 4 (2–6) | 🔴 5 | ✅ aralıkta |
| ⚪ 4 | ⚪ 3 | yakın |
| ③ baskın mekanizma | ③ beş hatanın dördünde var (699, 1266, 1305, 1434) | ✅ |
| sahte ay 309 ve 699'da | 309 ✓ · 699 sahte ay DEĞİL, YIL çatışması | yarım |
| birleşik olay 862 ve 1574'te hata | ikisi de ✅ | ❌ tutmadı |
| 1266, 1587, 1105 riskli | 1266 🔴 · 1587 ✅ · 1105 ✅ | 1/3 |
| hatalar eski `ek*`'de, paketler temiz | 5/5 `ek*`, paket 0/11 | ✅ tam |
| **ÖNGÖRÜLMEYEN** | süsleme cümlesi sınıfı (1266, 1305) | ❌ hiç öngörmedim |

### 3.3 Kampanya için öneri (karar koordinatörün)

- Evren geneli %20 (%9–39) bir kampanyayı haklı çıkarır, ama **kampanya bütün 1761'e değil
  `ek*`'nin 1233'üne** yönelmeli: orada beklenen hatalı madde ≈ **200–750** (oran aralığı ×
  1233), öteki 528'de ölçülen 0 (üst sınır %26 — 11'lik alt örneklem az, "temiz" DEĞİL
  "hata bulunmadı").
- `ek*` içinde de öncelik sırası mekanizmaya göre: ① uzun anlatı metni + "TDV'ye göre"
  atfı (süsleme sınıfı — makinece aranabilir: `d` uzunluğu, "TDV'ye göre/maddesine göre"
  geçişi); ② `t` gün/ay hassasiyetli ama `gun` alanı yıl/aralık diyen maddeler (309 tipi —
  `t` ile `gun` karşılaştırılarak makinece çıkar).
- İkinci tur örneklem önerisi: aynı yöntemle `ek*`'den 25 + ötekilerden 25 (tabakalı) —
  ötekilerin %26'lık üst sınırını daraltmak için.
- **Ayrı kalem (harita):** 1266 Gümülcine — haritanın 1913-1920'de Batı Trakya'yı Osmanlı
  gösterip göstermediği ölçülmeli (yerleşim `s:` dönemleri). Bu görevde bakılmadı.
