# D ADIMI — yerleşim sahipliğinin kaynakla teyidi · ölçüm ve yöntem

Ölçen: UMIT SALI · 4 Kasım 2026 · dal `umit-1104-dadim` · ağaç **origin/main ceb0ce402**.
Görev EMRELİC 1 KASIM'dan geldi; öncelik Emre'nin, çekirdek denetimidir.
Salt denetimdir: veri dosyalarına yazılmadı. Uygulama KASA'nındır.

## Ölçüm (`girdi.yukle()`, sitenin yüklediği yerleşim evreni)

| alan | dönem | kaynağı boş |
|---|---|---|
| `s:` | 25.584 | 8.469 |
| `d:` | 1.489 | 1.154 |
| `v:` | 682 | 506 |
| `isg:` | 585 | 93 |
| toplam | 28.340 | 10.222 |

- Yerleşim 5.532; kaynağı boş dönemi olan yerleşim 3.744.
- En çok boş dönem taşıyan dosyalar: `yerlesimler.js` 3.279 · `yerlesimler_asya.js` 1.100 · `yerlesimler_afrika2.js` 537 · `yerlesimler_afrika.js` 499 · `yerlesimler_kamerika.js` 445.

Kaynak sınıfları (s/d/v, 27.755 dönem):

| sınıf | dönem | % |
|---|---|---|
| boş | 10.129 | 36,5 |
| DEVRALMA (kronoloji maddesinden türetilmiş; yerleşim tanıklığı değil) | 7.528 | 27,1 |
| öteki akademik kaynak | 3.514 | 12,7 |
| TDV | 2.750 | 9,9 |
| beyanlı / ABİ MERKEZ | 2.016 | 7,3 |
| Britannica / Vikipedi | 1.818 | 6,6 |

**Boş + DEVRALMA = 17.657.** Bu, işin hedef evrenidir (EMRELİC tahmini: ~18.000).

## Evren 1: TOP100 devletlerinin başkent ve büyük merkezleri
- **Seçim yöntemi:**
  - `denetim/TOP100-1103/OZET.md`'deki 100 künye taranır. Her künyenin `baskent` alanı atlas yerleşimiyle eşlenir; eşleme normalleştirilmiş adla ve elle yazılmış eşanlam tablosuyla yapılır.
  - Ayrıca her devlet için k 1-2 yerleşimlerden sahiplik süresi en uzun 3 merkez alınır.
- **Evren:** 200 yerleşim, 2.009 dönem; bunların 864'ü boş ya da DEVRALMA.
- **Eşlenemeyenler:** 44 başkent parçası eşlenemedi (`evren1_eslesmeyen.json`). Bunların bir kısmı atlasta yerleşim değil: Ötüken, Karabalgasun, Pi-Ramesses, Napata, Njimi gibi. Bir kısmı ise atlasta başka adla duruyor: Stockholm, Buda, Addis Ababa gibi. Bu ikinci grup ayrı tarama ister.
- **Partiler:** Parti 1, 25 yerleşimlik bir partiydi; kapsamı düşük kaldı (129 hedef dönemden 43'ü KAYNAKLI). Kalan 175 yerleşim 13'lük partilere bölündü. Parti 1'de hiç bakılmayan 4 yerleşim ayrı partiye kondu.

## Atlas kuralları (ajan brifinde; öneriler bu kurallara göre okunur)
- **De jure devir antlaşma günündedir (F8).** Fiilî işgal sahiplik değildir, `isg:` katmanına girer.
- **TBMM** 1920-04-23'te başlar.
- **İki TDV maddesi çelişirse** iki madde de yazılır; seçim yapılmaz, `ic_not` beyanı gerekir.
- **Ülke düzeyi kaynak** beyanlı yaklaşıklıktır.
- **Önerilerdeki `YYYY-MM` biçimi ay hassasiyetidir.** KASA bunu `YYYY-MM-01` + beyan olarak yazar (CLAUDE.md: gün yaz).

## Koordinatör kararları (EMRELİC 1 KASIM, 4 Kasım 2026; Emre isterse değiştirir)

### 1. Sovyet ardılları
- **Karar:** cumhuriyetin başlangıcı bağımsızlık ilanı günüdür. Örnek: Türkmenistan 1991-10-27. Kayda konacak `ic_not`: "SSCB'nin sona erişi 1991-12-26; uluslararası tanınma Aralık 1991".
- **Ölçüm (ceb0ce402):**
  - Künyelerin `f`'si bu kuralla zaten uyumlu.
  - Ardıl künyeyle başlayan 525 yerleşim döneminden yalnız **3'ü tutarsız**:

  | yerleşim | dosya | dönem | şimdiki f | olması gereken |
  |---|---|---|---|---|
  | Brest-Litovsk | `yerlesimler_p0037.js` | `belarus` | 1991-12-25 | 1991-08-25 (künye f) |
  | Grodno | `yerlesimler_p0037.js` | `belarus` | 1991-12-25 | 1991-08-25 (künye f) |
  | Viipuri (Vyborg) | `yerlesimler_avrupa.js` | `rusya-federasyonu` | 1991-12-25 | 1991-12-26 (künye f) |

  - Belarus satırlarında önceki dönemin `t`'si de aynı güne çekilir.

### 2. ÇİFT-TDV
- **Karar:** iki TDV maddesi çelişiyorsa önce üçüncü, bağımsız bir akademik kaynak aranır (Iranica, EI, Cambridge).
- Bulunamazsa yerleşimin **kendi şehir maddesindeki** TDV tarihi esastır; öteki madde `ic_not`ta beyan edilir.
- **Bu kurala göre karar verilenler:**
  - Bağdat Karakoyunlu/Akkoyunlu: TDV «Bağdat» esas.
  - Sana: TDV «San'â» esas.
- **Iranica bekleniyor:** Nîşâbur Afşar/Abdalî için «NISHAPUR» maddesi okunacak (EMRELİC okutuyor).

### 3. Fiilî denetim ilkesi
Bu karar TBMM 1920 ve Ege 1912 kararlarıyla tutarlıdır.
- **Delhi:**
  - `ingiliz-hindistani` f 1803-09-11 olarak **kalır**: Delhi Muharebesi'nden sonra fiilî denetim Şirket'in elindedir.
  - TDV'deki 1858 tarihi Bâbür'ün nominal sonudur; `ic_not` alanında beyan edilir.
  - **Künye:** `ingiliz-hindistani` tek künye olarak kalır; şimdilik bölünmez (koordinatör kararı). Bölmek haritada görünür bir fark yaratmaz, ama renk/tuz değişikliği ister. "EIC/Taç ayrımı (1858-08-02)" Emre'nin karar listesine eklendi.
- **Şam:** atlastaki zincir bu kararla zaten uyumlu.
  - 1918-10-01'de `suriye-arap-kralligi` başlar. Bu tarih Arap-İngiliz birliklerinin fiilî girişidir.
  - 1920-07-25'te `suriye-lubnan-mandasi` başlar: Fransız girişi, Meysellûn 24 Temmuz.
  - San Remo (Nisan 1920) hukukî adımdır; `ic_not` alanında beyan edilir.
  - `suriye-lubnan-mandasi` künyesi 1920-07-01'de başlıyor; Şam'daki dönem 07-25'te başlıyor. Bu **sorun değildir** (koordinatör): künye Lübnan kıyısı gibi başka yerleri de kapsar, künye f ≤ ilk dönem yeterlidir.
- **Asîrgarh:** 1370-~1399 arası için boşluk doldurma merdiveni uygulanır. Önce Râcpût künyesi aranır, sonra ABİ MERKEZ Burhânpûr.

### 4. TEK KURAL: işgal ve sahiplik (EMRELİC, 4 Kasım 2026; önceki "fiilî" yazımları geçersiz kılar)
- Savaş işgali, ilhak ya da egemenlik devri gerçekleşene kadar **`isg:`** olarak yazılır.
- `s:` sahipliği hukukî ilhak ya da devir gününden başlar. Ham işgal günü ic_not alanına yazılır.
- İstisna: işgalci egemenliği açıkça devralırsa sahiplik o gün başlar. Örnek: Berlin Deklarasyonu 1945-06-05.

| yerleşim | uygulama | açık |
|---|---|---|
| Brüksel | isg fransa 1794 → ilhak; s: fransa ilhaktan itibaren | İlhak kararnamesi 1795-10-01 (9 Vendémiaire IV) koordinatörün belleğinden, KAYNAKLA TEYİT GEREK. Treccani «Belgio» yalnız "ilhak, Campo Formio ve Lunéville ile onaylandı" diyor |
| Aachen | isg fransa 1794 → hukukî ilhak | İlhak günü KAYNAK GEREK. Adaylar: Campo Formio 1797-10-17, 1798 département düzeni, Lunéville 1801-02-09. Alman ya da Fransız akademik kaynak belirlemeli |
| Kâbil | isg ingiltere 1839-42 ve 1879-80; afganistan s: kesintisiz | — |
| Berlin | almanya t 1945-06-05 kalır (devir istisnası); isg sovyet-rusya 1945-05-02 → 1949-10-07 | Uç DDR'nin kuruluşu; KASA teyit etmeli |

**KASA listesi (bu karardan):**
- **Künye genişletme:** `almanya-muttefik-isgali` t 1949-09-20 → **1949-10-07**. Aynı polity sürüyor: Sovyet bölgesi 10-07'ye kadar işgal altındaydı. Kayda konacak ic_not: "batı bölgeleri 1949-09-20'de BRD".
- **Batı Berlin:** ayrı nokta **zaten var**. "Batı Berlin (Charlottenburg)", `yerlesimler_halef_1946.js`, `kur` 1948-12-07, Berlin noktasından 7,3 km; ayrıca "Spandau (Batı Berlin)". Yeni nokta açılmaz. Mükerrer taraması yapıldı: 3 km içinde ikinci nokta yok.

### 5. Kudüs, Levant ve Çin kararları (EMRELİC, 4 Kasım 2026)
- **Kudüs:**
  - `s: filistin-mandasi` 1920-07-01'den başlar (Samuel'in sivil idaresi; San Remo tahsisiyle yetki devri).
  - 1917-12-09 → 1920-07-01 arası `isg: ingiltere` olur.
  - ic_not'a yazılacaklar: San Remo 1920-04-25, manda yürürlüğü 1923-09-29, Lozan.
- **Kudüs Eski Şehir 1948-67:**
  - `s: urdun-hasimi-krallik` Ürdün denetiminin başladığı günden başlar. Bu gün Mayıs 1948'de; günün kendisi kaynak bekliyor.
  - 1967-06-07 → 1967-06-28 arası `isg: israil`.
  - 1967-06-28'den sonra `s: israil-devleti`. ic_not'a yazılacaklar: 1950 ilhakı; BMGK 252 ve 478 (tanınmama).
- **Batı Kudüs:** ayrı nokta **yok**. Kudüs noktasının 10 km çevresinde yalnız antik Gibea var. Mükerrer taraması temiz; nokta KASA-YER kuyruğuna eklendi.
- **Wu (Zhu Yuanzhang 1364-68):**
  - Yeni künye açılmaz. Bunun yerine `ming-hanedani` künyesinin `f` ucu (şimdi 1368-01-23) Wu krallığının ilanına **genişletilir**. İlan günü Ming shi'den alınmalı; kaynak bekliyor.
  - Changsha 1364 ve Hangzhou 1366-12-15 `ming`'e yazılır.
- **Kaifeng 1358-59 Kızıl Sarık/Song:** künyesi **yok**. Ölçümde yalnız 960-1279 `song` künyesi çıktı. Ayrı bir künye için yeni BOYALAR anahtarı gerekir; bu, KASA'nın künye kuyruğuna "renk partisi borcu" olarak girdi. O zamana kadar bu dönem yazılmaz.
- **Urmiye ve Merâga** önerileri onaylandı.

**Irak-Levant toplu ölçümü (ceb0ce402; enlem 29-38, boylam 34-49; 1917-1923 arasında başlayan dönemler):**

| künye | dönem | örnek |
|---|---|---|
| `ingiltere` | 44 | Kudüs 1917-12-09→1920-07-01 · Gazze · Akkâ · Şehrizor 1918-10-30→1921-08-23 |
| `irak-kralligi` | 37 | Bağdat, Musul, Kerkük 1921-08-23→ |
| `suriye-lubnan-mandasi` | 25 | Halep, Şam 1920-07-25→ · Antakya 1920-07-24→ |
| `fransa-cumhuriyet` | 21 | Beyrut 1918-10-07→1920-07-24 · Sayda · Trablusşam · Antakya |
| `filistin-mandasi` | 9 | Kudüs, Gazze, Yafa, Akkâ 1920-07-01→ |
| `suriye-arap-kralligi` | 4 | Şam, Hama, Humus 1918-10-01→1920-07-25 |
| `urdun-emirligi` | 2 | Amman, Kerak 1921-02-01→ |

- **Tek kurala göre yapılacak:** `ingiltere` (44) ve `fransa-cumhuriyet` (21) dönemleri `isg` olur; `s:` ilk hukukî devirden başlar.
- **Filistin:** devir 1920-07-01'dir, bu karar verildi.
- **Irak için açık soru:** Irak'taki 1918-1921 `ingiltere` dönemlerinin altında hangi `s:` sahibi duracak?
  - `osmanli` künyesi 1922'de bitiyor; Lozan'ı beklemek hayalet devlet doğurur.
  - Irak Krallığı 1921-08-23'te başlıyor.
  - Bu yüzden Irak'ta San Remo/manda devrinin günü ya da bir manda künyesi gerekiyor. Karar koordinatörün.

### 6. Irak-Levant 1917-1923: TEK KURAL'ın toplu uygulaması (EMRELİC, 4 Kasım 2026)
**İlke:** işgal süresince sahip, son hukukî egemen olan Osmanlı'dır. Bu dönemler Osmanlı'nın `d:` alanına yazılır; `osmanli` 1922-11-01'e kadar sürer. İşgalci `isg` olarak işlenir. `s:` ancak yeni bir yönetim birimi açık bir tasarrufla kurulduğu gün değişir:
- `filistin-mandasi`: 1920-07-01
- `irak-kralligi`: 1921-08-23. San Remo 1920-04-25 ve 1920-11-11 geçici Arap hükûmeti ic_not'a yazılır. Yeni manda künyesi açılmaz.
- `suriye-lubnan-mandasi`: 1920-07-01

**Liste:** `levant_isg.json`. 65 dönem, her biri dosya:satır ile; hepsi `ingiltere` ya da `fransa-cumhuriyet` olup 1917-1923 arasında başlıyor. Ölçüm ağacı ceb0ce402.

| sonraki s: | dönem | not |
|---|---|---|
| `irak-kralligi` | 31 | uç 1921-08-23, atlasla aynı |
| `suriye-lubnan-mandasi` | 20 | **uç farkı:** atlas 1920-07-24 yazıyor, karar 1920-07-01 diyor (Beyrut, Trablusşam, Sayda, Antakya…) |
| `filistin-mandasi` | 8 | uç 1920-07-01, atlasla aynı |
| `tbmm-turkiye` | 3 | KARAR GEREK: Fransız işgali sonrası TBMM bölgesi (Antep/Urfa/Maraş türü) |
| `urdun-emirligi` | 2 | KARAR GEREK |
| `ingiltere` | 1 | KARAR GEREK |

**Değişmez 2: ±30 gün içinde kronoloji maddesi var mı (ölçüm ceb0ce402):**
- Filistin 1920-07-01: **var**. Kaynaklar `kronoloji_sinir_ortadogu.js` ("Filistin'de sivil manda yönetimi"), `kronoloji_sinir_once1281_geriye.js` ve `olaylar_p0050.js`.
- Irak 1921-08-23: **var** (`kronoloji_sinir_komsu.js`, `irak-kralligi`).
- Lübnan/Beyrut 1920-07-01: **madde bulunamadı**. Yalnız 1920-07-25 Fransızların Şam'a girişi var. Bu madde Lübnan yerleşimlerinin kırılmasını yer şartıyla karşılamayabilir. → **KASA kuyruğu: "kronoloji maddesi gerekli: Lübnan/Beyrut manda yönetiminin başlangıcı 1920-07-01".**

**Koordinatörün ek kararları (4 Kasım, ikinci ve üçüncü tur):**
- **Şam:** `suriye-arap-kralligi` 1918-10-01 **kalır**. Faysal'ın Arap hükümeti yerel bir yönetimdir ve krallığın kendisidir. 1920-03-08 krallığın ilanıdır, ic_not'a yazılır. 1920-07-25 kalır: Gouraud yönetimi doğrudan devraldı.
- **Lübnan kıyısı ve Antakya/İskenderun:** manda ne 07-01'de ne 07-24'te başlar. Başlangıç, Büyük Lübnan'ın ve Halep Devleti'nin kurulduğu Eylül günüdür.
  - Bu gün **ÇELİŞKİLİ:** TDV «Lübnan» "Eylül 1921" diyor, koordinatör bellekten 1920-09-01 diyor.
  - Üçüncü kaynak aranıyor; bulunana kadar KASA uygulamaz. Bulununca iki kaynak ic_not'a yazılır.
  - Değişmez 2: Büyük Lübnan için kronoloji maddesi **yok** (ölçüldü). Madde KASA kuyruğunda.
- **Musul vilayeti** (Musul, Kerkük, Erbil, Süleymaniye):
  - İşgal boyunca sahip `d:` Osmanlı, işgalci `isg ingiltere` olarak yazılır. Bunlar Mayıs 1918'deki kısa Kerkük girişi ve Mondros sonrası dönemdir.
  - 1921-08-23'ten itibaren sahip `irak-kralligi`.
  - ic_not: Musul meselesi; Milletler Cemiyeti kararı 1925-12-16; Ankara Antlaşması 1926-06-05.
  - Türkiye bu toprakları fiilen yönetmediği için `s:` almaz.
- **Mersin, Silopi, Cumai:**
  - İşgal boyunca `d:` Osmanlı + `isg`.
  - `s: tbmm` TBMM'nin şehri **fiilen teslim aldığı** günden başlar; Ankara Antlaşması'nın imza günü (1921-10-20) değil.
  - Silopi ve Cumai'deki "ingiltere" işgalcisi şüpheli, çünkü Ankara Antlaşması Fransa'yla yapıldı. İşgalci ve bitiş günü ölçülecek.
- **Amman ve Kerak:**
  - 1918 sonbaharı → 1920-07: `suriye-arap-kralligi`.
  - Ardından yerel hükümetler, sonra 1921 Abdullah emirliği.
  - Kerak'ın 1918-01-01'i büyük ihtimalle yıl yer tutucusu.

**Şam için açık soru** (çözüldü, yukarıda): atlasta `suriye-arap-kralligi` 1918-10-01'de başlıyor; künye f'si de 1918-10-01. Koordinatör "1920-03-08 → 07-24 kendi s: dönemi" dedi. Tek kurala göre 1918-10-01 → 1920-03-08 arası nasıl yazılacak: Osmanlı `d:` + isg mi, yoksa 1918-10-01'den başlayan Arap idaresi açık bir tasarruf mu? Koordinatöre soruldu.

## 7. Levant/Aachen araştırma sonuçları (UMIT, 4 Kasım 2026 akşamı — `levant_arastirma.json`)
- **S1 Büyük Lübnan:**
  - Sonuç: 1920-09-01, gün hassasiyetinde.
  - 318 sayılı kararname 31 Ağustos 1920 tarihli; ilan 1 Eylül 1920'de yapıldı.
  - Kaynaklar: AUB Libraries rehberi, TDV «Halep» (Gouraud'nun 1 Eylül 1920 bildirisi) ve LoC (yalnız yıl veriyor).
  - TDV «Lübnan»daki "Eylül 1921" büyük ihtimalle yazım hatası. Bu bir ÇİFT-TDV durumu: TDV «Halep» ile TDV «Lübnan» çelişiyor.
  - Hakemli çift teyit yok, çünkü Longrigg ve Zamir açılamadı. **KASA, 1920-09-01'i ic_not beyanıyla uygulayabilir.**
- **S2 Halep Devleti:**
  - Kuruluş 1920-09-01 (TDV «Halep»).
  - İskenderun aynı bildiriyle Halep'e bağlandı; ayrı bir gün yok.
  - İşgal zinciri (TDV «İskenderun»): İngiliz 1918-11-09, Fransız 1918-11-10, Fransız idaresi Ekim 1919.
- **S3 Mersin:**
  - Fransız çıkarması 1918-12-17 (TDV «Mersin»). Atlastaki 1918-10-30 kaynaksız.
  - TBMM kuvvetleri 1922-01-03'te şehre girdi; son Fransız birliği 1922-01-04'te ayrıldı.
  - **Öneri:** `isg fransa` 1918-12-17 → 1922-01-03, ardından `s: tbmm` 1922-01-03'ten başlar.
  - Not: atlasta işgalci zaten fransa-cumhuriyet yazıyor.
- **S3 Silopi ve Cumai:** BULUNAMADI.
  - TDV «Nusaybin»e göre işgalci önce İngiliz, sonra Fransız olabilir.
  - Ankara Antlaşması'nın günü iki TDV maddesinde farklı: 20 Ekim (TDV «İskenderun») ve 21 Ekim (TDV «Nusaybin»).
  - Silopi ve Cumai ABİ MERKEZ merdivenine (Nusaybin ya da Cizre) gider.
- **S4 Amman ve Kerak:**
  - Amman'ı Arap kuvvetleri 1918-09-25'te aldı (TDV «Amman»). 1918-1920 arası sahibi Şam'daki Faysal yönetimi.
  - Ürdün Emirliği'nin kuruluşu için TDV yalnız "Şubat 1921" diyor; 1921-04-11 teyit edilemedi.
  - Kerak'ın günü BULUNAMADI. 1920-07 → 1921 arası yerel hükümetler dönemi için kaynak yok.
- **S5 Kerkük:**
  - İngilizler 1918-05-07'de girdi; Osmanlı 1918-05-27'de geri aldı (TDV «Kerkük»).
  - Öneri: bu aralık `isg ingiltere`, `d:` Osmanlı sürer.
  - İngilizlerin çekiliş günü akademik bir kaynakta bulunamadı.
- **S6 Aachen:**
  - Hukukî ilhak Lunéville Antlaşması'yla, 1801-02-09 (Treccani «Luneville»).
  - Campo Formio'da yalnız gizli madde var; Roer département'ı 1798'de kuruldu. Ayrı bir ilhak yasası bulunamadı.
  - **Öneri:** `isg fransa` 1794 → 1801-02-09, `s: fransa` 1801-02-09'dan başlar.
  - Rheinische Geschichte sayfası SSL hatası verdi; teyit sayılmadı.
- **S7 Brüksel:**
  - İlhak kararı 1795-10-01 (9 Vendémiaire IV). Kaynak: Digithèque MJP, Univ. Perpignan; birincil belge neşri.
  - Sayfanın dipnotunda "8 vendémiaire" yazıyor; kaynak içinde 1 günlük çelişki var.
  - **Öneri:** `s: fransa` 1795-10-01'den başlar; çelişki ic_not'a yazılır.

## 8. Burgonya (EMRELİC vakası, 4 Kasım 2026)
- **Ölçüm** (ceb0ce402): bölgede 1400-1530 dönemine uyan 3 nokta var.
  - Dijon (`data/yerlesimler_avrupa.js:214`): s burgonya → 1477-01-05, s fransa 1477-01-05 → 1792. Kaynak DEVRALMA.
  - Auxerre (`data/yerlesimler_ms1_1281_yeni.js:79-80`): s burgonya 1435-01-01 → 1477-01-01. Bu tarihler yalnız yıl yer tutucusu; Arras I'in günü 1435-09-21.
  - Besançon (`data/yerlesimler_avrupa.js:216`): s almanya → 1516-01-23, sonra ispanya.
- Beaune, Chalon, Autun, Mâcon, Dole, Gray, Salins ve Nevers **veride yok** → KASA-YER kuyruğu.
- **Koordinatör kararı:**
  - XI. Louis'nin dükalığı tâca bağlaması (réunion) ve Dijon Estates'in tanıması kaynakla teyit edilirse, `s: fransa` o günden başlar ve isg ara dönemi yazılmaz.
  - Arras 1482, Senlis 1493, Madrid 1526 ve Cambrai 1529 ic_not'a yazılır.
- **Araştırma sonucu** (`burgonya_arastirma.json`): yalnız ikincil kaynaklar okunabildi, hakemli kaynak ele geçmedi. **İstisna teyitli DEĞİL.**
  - **B1:**
    - Açık bir réunion kararnamesi bulunamadı.
    - Estates 1477-01-29'da dükalığı **Marie'nin hakları saklı, Dauphin evliliği şartıyla** teslim etti. Bu bir emanet; egemenliğin üstlenilmesi değil.
    - Louis XI'in Ocak 1477 mektupları da Marie'nin hakkını koruyacağını söylüyor.
    - İlk açık egemenlik tasarrufu: Louis XI'in 1477-03-18 tarihli Arras aktı; Dijon'da parlamento kurdu (Cosmovisions, BnF Fr.5325 kaydı).
    - Tek kurala göre öneri:
      - Dijon: s burgonya → 1477-03-18 · isg fransa 1477-01 (giriş günü BULUNAMADI) → 1477-03-18 · s fransa 1477-03-18'den.
      - Gün yarı teyitli; KASA uygulamadan önce Chevanne 1930 okunmalı: "Les États de Bourgogne et la réunion du Duché à la France en 1477", Mém. Soc. archéol. Beaune, s. 195-245.
    - Dijon'daki şimdiki 1477-01-05 ucu Şarl'ın ölüm günü; devir günü değil.
  - **B2:**
    - Arras: 1482-12-23. Dükalık antlaşmada anılmıyor (sessiz tanıma).
    - Senlis: 1493-05-23. Cambrai: 1529-08-05.
    - Bunlar yalnız ic_not'a girer. Hakemli çift teyit eksik.
  - **B3:** dükalık için düşer. Marie'nin ölüm günü kaynakta 25 Mart, brifte 27 Mart; çelişki.
  - **B4 (Auxerre):**
    - 1435-01-01 → 1435-09-21 (Arras I). Kaynak popüler (herodote.net), hakemli teyit yok.
    - 1477 ucu B1'e bağlı.
    - Arras 1482'de Auxerre Marguerite'in çeyizine yazıldı (yalnız Cosmovisions). Bu, 1482-1493 arası ayrı bir dilim demek olabilir; ölçülmedi.
  - **B5:** Besançon'a dokunulmaz. Dole 1479-05-25 teyit edilemedi. Franche-Comté olayları ic_not'a.

## 9. Koordinatör kararları, gece partisi (EMRELİC, 4 Kasım 2026)
Kararlar dadim_sonuc.json'daki ilgili ONERI satırlarının `not` alanına işlendi: 12 yerleşim, 23 satır. Günler her yerde kaynaktan alınacak.
- **Varşova ve Krakov:**
  - Generalgouvernement **ilhak değildir**, bu yüzden `s: polonya` sürer.
  - `isg almanya` başlangıcı: Varşova'da 1939-09-28 teslimi, Krakov'da Eylül 1939 girişi. Bitiş 1945-01'deki kurtuluş.
  - Kaynaksız 1939-10-06 düşer.
  - 1945 sonrası için Lublin Komitesi/TRJN künyesi ölçülecek.
- **Vilnius:**
  - 1915-18: `isg almanya`. `s: rusya` Brest-Litovsk'a (1918-03-03) kadar sürer, sonra litvanya.
  - 1919-20 ve Żeligowski sonrası: `isg polonya`.
  - `s: polonya` 1922-03-24'ten başlar. 1923 tanıması ic_not'a yazılır.
- **Murzuk:**
  - `s: italya` 1947-09-15'e kadar; `isg fransa` 1943-01-07'den.
  - 1947-09-15 ile 1951-12-24 arasında hukukî egemen yok. Kudüs 1948 ilkesine göre `s: fransa`.
  - 1951-12-24'ten sonra libya.
  - Fransız askerinin 1955-08'de çekilişi ic_not'a yazılır.
- **Pûne, Gazne, Taşkent:** üçü de kurala uygun.
  - Pûne: `s: maratha` 1818'deki teslim ya da ilhaka kadar sürer.
  - Taşkent: `s: rusya` 1866 ilhakından başlar.
- **Ahmedâbâd:** Bombay Başkanlığı toprağıdır, bu yüzden 1947-08-15. TDV'deki 1948 üçüncü bir kaynakla çürütülür ve ic_not'a yazılır.
- **Zaria ve Katsina:**
  - Önce iki TDV maddesinin aynı şehri anlatıp anlatmadığı ölçülecek.
  - Üçüncü kaynak: Last, *The Sokoto Caliphate* ya da CHA V.
- **Kaşgar:** soru açık bırakılır, üçüncü kaynak gerekiyor.
- **Atina** (Şam emsali):
  - `s: yunanistan` 1822'den.
  - 1827-06'da `d: Osmanlı`.
  - 1833'ten itibaren yeniden yunanistan.

## 10. Evren 2: kronolojide en çok anılan 500 yerleşim (`evren2.json`, `evren2.py`)
Ölçüm: ceb0ce402 üzerinde.
- **Sayım yöntemi:**
  - 167 dosya (`olaylar*.js` ve `kronoloji_sinir*.js`) taranır; yorum satırları ile `kaynak:` alanları atılır.
  - Kesme işaretinden sonraki ek atılır, metinde 1-3 kelimelik dizilerin sayısı çıkarılır.
  - Her yerleşim **ana adının** (parantez öncesi) kaç kez geçtiği sayılır. Evren 1'deki yerleşimler sayıma alınmaz.
- **Elenenler:**
  - Bölge, kıyı ve vadi noktaları.
  - `_yt_` dosyalarında devlet adıyla aynı adı taşıyan yer tutucular (Mısır, İtalya…).
  - Ana adı başka bir yerleşimle ortak olan parantezli adaşlar (Roma (Queensland)).
  - Cins kelime ve kaynak adı listesi (Cambridge, Ordu, Kara, Bulgar…).
- **Sonuç:** 2.812 aday arasından 500 yerleşim seçildi; eşik 17 anılma. İlk sıradakiler: Babil 325, Halep 257, Edirne 239, Bombay 210, Musul 190.
  - 5.314 dönemin 2.347'si hedef (kaynağı boş ya da DEVRALMA).
  - 39 parti var (`db_q01`–`q39`, 13'erli).
- **Sınır:** sayım ad eşleşmesine dayanır. Kalan gürültü: bölge adları (Mora, Girit, Erdel), Haliç, Chengdu/Çengdu adaş çifti (mükerrer adayı, KASA-YER). Sıralamadaki yeri yaklaşıktır.
  - **Ad karışması ölçüldü** (q01 bulgusu):
    - "Mora" (`yerlesimler_ek7.js`, 61.0°N 14.5°E) İsveç'teki Mora kasabasıdır; kronolojide geçen 170 anılma Peloponez'e ait.
    - "Haliç" (`yerlesimler_ms1_1281_yeni.js`, 49.1°N 24.7°E) Halych'tir (Galiçya); anılmaların çoğu İstanbul Haliç'i.
    - İkisi de sayımda yanlış yüksek çıktı. Kendi dönemleri yine de teyit edilir.
    - q06'dan sonraki brife "AD KARIŞMASI" notu eklendi.
    - Peloponez için ayrı bir "Mora" noktası var mı? Ölçülmedi, KASA-YER.

## Teslim dosyaları
- `dadim_sonuc.json`: bütün satırlar. Satır biçimi: dosya:satır · alan · d · f/t · hüküm (KAYNAKLI / ONERI / BULUNAMADI) · kaynak · alıntı · öneri · not.
- `ONERILER.md`: ONERI satırları, bayraklarıyla.
  - **KURAL:** öneri bir atlas kuralına dokunuyor.
  - **ÇİFT-TDV:** iki TDV maddesi çelişiyor.
  - **ÜLKE:** kaynak yalnız ülke düzeyinde.
- `topla.py`: parti sonuçlarını bu iki dosyaya toplar.
