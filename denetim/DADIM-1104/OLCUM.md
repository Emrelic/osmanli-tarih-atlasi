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

## 11. Koordinatör kararları, evren 2 q01-q04 (EMRELİC, 4 Kasım 2026 akşam)
Kararlar 11 yerleşimin ONERI satırlarına yazıldı (40 satır, `not` alanı).
- **Akkâ ve Remle:** Levant kararına bağlı. İşgal süresince `d:` Osmanlı ve `isg ingiltere`; 1920-07-01'den sonra `filistin-mandasi`.
- **Humus (Şam emsali):**
  - 1918-10 → 1920-07-25 `s: suriye-arap-kralligi`.
  - Ardından `suriye-lubnan-mandasi`.
  - 1922 Milletler Cemiyeti onayı ic_not'a yazılır.
- **Basra:**
  - `isg ingiltere` 1914-11-22 → 1921-08-23.
  - 1775-79 arası `isg zend`.
- **Milano:**
  - 1706 → 1714-03-07 (Rastatt) `isg avusturya`; İspanya'nın 1725 Viyana feragati ic_not'a.
  - 1859: Sardunya girişi (Haziran) → Zürih 1859-11-10 `isg sardinya`. Villafranca bir ön barıştır, hukukî devir sayılmaz.
- **Selanik:**
  - `s: bizans` 1403-06-09'dan başlar; bu, hukukî tasarruftur.
  - 06-17 tahliyesi ic_not'a.
  - Gelibolu Antlaşması'nın günü kaynakta varsa o gün esas alınır.
- **Kars:** Safevî dilimleri eklenir; 1828 ve 1855 Rus girişleri `isg`.
- **Urfa:** TDV «Şanlıurfa» zinciri uygulanır.
- **Amasya:** Osmanlı `f` 1398.
- **Erzurum:** 1916-18 dilimleri `isg rusya` olur; 1829'daki Rus işgali `isg` olarak eklenir.
- **Gelibolu:** 1366 → 1367 `isg savoy`, sonra `s: bizans`.
  - **Genel ölçüt:** ortaçağda antlaşma yoksa yönetimin fiilen devredildiği gün esas alınır.

## 12. Kararlar (EMRELİC, 4 Kasım 2026 akşam) ve Filistin 1967 sonrası ölçümü
- **Sisam:**
  - Londra emsali uygulanmaz.
  - v: Sisam Prensliği sürer.
  - 1912-11 → isg yunanistan.
  - s: yunanistan, büyük devletlerin 1914 Şubat notasından başlar.
  - Atina 1913-11-14 ve Lozan ic_not'a yazılır.
- **Draç:**
  - Halef ilanı yalnız fiilen yönetilen yere uygulanır (Avlonya).
  - Draç: 1912-11-29 → Sırp çekilişi isg sirbistan.
  - s: arnavutluk Londra 1913-05-30'dan.
  - Bu ölçüt brife "fiilî yönetim + halef ilanı" olarak eklendi.
- **Gazze 1948-67:** s: Mısır (Kudüs 1948 ilkesi). Tüm Filistin Hükümeti ic_not'a. 1967'den isg israil.
- **Filistin, 1967 sonrası ölçümü** (ceb0ce402; karar **BEKLE**):
  - **Künyeler** (`devletler.js`):
    - `filistin-mandasi` (1920-07-01 → 1948-05-14).
    - `filistin-devleti` (f 1988-11-15, Cezayir bildirgesi; BOYALAR'da var).
    - `filistin-pentapolis` (antik).
    - **Filistin Ulusal Yönetimi / Oslo (1994) künyesi YOK.** Tüm Filistin Hükümeti (1948) künyesi YOK.
  - **Gazze Şeridi noktaları:**
    - Gazze (`data/yerlesimler.js:884`), Han Yûnus (`:1677`), Refah (`data/yerlesimler_ek28.js:171`).
    - Üçünde de dönem zinciri aynı: filistin-mandasi → misir-kralligi 1948-05-14 → misir-cumhuriyeti 1953-06-18 → birlesik-arap-cumhuriyeti 1958-02-22 → **s: israil-devleti 1967-06-05 → 2000-12-31** (kaynak DEVRALMA).
  - **Batı Şeria:**
    - Nablus (`data/yerlesimler.js:1141`): urdun-hasimi-krallik 1948-05-14 → israil-devleti 1967-06-05 → **filistin-devleti 1988-11-15 → 2000-12-31**.
  - **Tutarsızlık:**
    - Atlas Gazze'yi 2000'e kadar İsrail'e, Nablus'u 1988'den itibaren Filistin Devleti'ne veriyor.
    - 1988 bildirgesi toprak üzerinde denetim kurmadı; Oslo sonrası Filistin Ulusal Yönetimi (Gazze-Eriha 1994-05-04, Nablus 1995-12) için künye yok.
  - **Eksik:** Gazze'de 1956-11 → 1957-03 İsrail işgali (Süveyş) isg olarak yok.
  - **Karar seçenekleri** (EMRELİC/Emre):
    - ① 1967 → 2000 isg israil, s: için hukukî egemen yok. Fiilî denetim ilkesiyle s: israil yazılır, ic_not: BMGK 242, uluslararası tanınmama.
    - ② 1994/95'ten (Oslo) yeni `filistin-ulusal-yonetimi` künyesi: A bölgelerindeki şehirler (Gazze, Nablus) için.
    - ③ Nablus'un 1988 filistin-devleti dilimi her hâlde düşer, çünkü bildirgenin denetimi yok.

## 13. Filistin 1967 sonrası kararı + q07-q08 kararları (EMRELİC, 4 Kasım 2026 akşam)
- **Filistin (BEKLE; Emre görene kadar KASA uygulamaz):**
  - Seçenek (1) ve (2) reddedildi. Seçenek (3) reddedildi; Nablus 1988 dilimi KALIR.
  - **İlke:** ilhak yoksa `isg`; `s:` olmaz. "Denetim = sahiplik" yalnız hiçbir hukukî iddia sahibi yokken geçerlidir.
  - **Gazze, Han Yûnus, Refah:**
    - s: misir 1948 → 1988-11-15, sonra filistin-devleti.
    - isg israil 1967-06 → 2000.
    - Eklenecek: isg israil 1956-11 → 1957-03.
  - **Nablus:** s: urdun → 1988-11-15, sonra filistin-devleti. isg israil 1967-06 → 2000.
  - Filistin Ulusal Yönetimi için künye açılmaz; Oslo ic_not'a yazılır.
  - Kaynak: BMGK 242, UAD 2004, TDV.
  - dadim_sonuc'a 4 ONERI satırı yazıldı (`_etiket`: "Filistin 1967 sonrası — EMRELİC").
- **q07-q08 kararları** (8 yerleşim, 21 satır):
  - Trabzon 1916-18: isg rusya.
  - Nahçıvan 1918-21: zincir "fiilî yönetim + halef ilanı" ölçütüyle kurulur.
  - Derbend: TDV'deki Kuba zinciri esas alınır.
  - Ravenna: Venedik 1449-1509 dilimi eklenir.
  - Tarsus: TDV esas.
  - Smolensk: 1654-10-13 Gregoryen'den itibaren isg rusya, Andrusovo'ya kadar.
  - İzmit 1920-21: isg ingiltere/yunanistan.
  - **Ganzhou ad karışması:**
    - Gansu noktası veride **zaten var**: "Zhangye (Ganzhou)", `data/yerlesimler_asya.js:2257`, 38.93°N 100.45°E.
    - Yeni nokta gerekmez. KASA-YER kuyruğuna giden iş: kronolojideki Gansu anılmalarının bağını Zhangye'ye çevirmek.

## 14. Kararlar, q09-q12 (EMRELİC, 4 Kasım 2026 akşam-3)
Kararlar 11 yerleşimde 34 satırın `not` alanına işlendi.
- **Kars, Ardahan, Batum:**
  - Brest-Litovsk bu üç sancağı devretmedi (md. IV).
  - `s: rusya` → 1918-03-03, ardından `transkafkasya`.
  - `isg osmanli` Osmanlı girişinden itibaren.
  - `s:` Osmanlı **1918-06-04 Batum Antlaşması**'ndan.
  - 1918-12 sonrası zincir ayrıca ölçülecek.
- **Dimetoka:**
  - Zincir: 1913 Osmanlı → 1915 Bulgaristan → Neuilly 1919-11-27 → Müttefik idaresi → 1920-05 `isg yunanistan`.
  - `s: yunanistan` Lozan imzasından (1923-07-24) başlar.
  - **Düzeltme:** Lozan'ın yürürlüğü 1924-08-06'dır. Önceki mesajdaki 1923-08-06 yanlıştı.
- **Kili ve Bender (Besarabya):** `s: romanya` 1918-04-09'da Sfatul Țării birleşme kararıyla başlar. Paris Protokolü 1920 ic_not'a yazılır.
- **Aydın, Verona, Taranto, Dunhuang, Dubrovnik:** öneriler uygun, kaynakla işlenir.

## 15. Osmanlı toprağında 1915-18 Rus/Transkafkasya `s:` dilimleri: TEK KURAL düzeltme listesi (`kafkas_isg.json`)
- **Ölçüt** (EMRELİC, 4 Kasım 2026 akşam):
  - Osmanlı toprağında, yani 1914-01-01'i kapsayan bir `d:` dönemi olan yerleşimde, `rusya`, `rusya-gecici-hukumet` ve `transkafkasya` dönemleri **isg**'dir.
  - Rus çekilişinden sonra kalan Ermeni/Transkafkasya birlikleri de işgalcidir.
  - `transkafkasya` yalnız Rusya'nın hukukî toprağında `s:` olabilir (elviye-i selâse, Kafkasya).
- **Ölçüm** (ceb0ce402): 13 yerleşimde **34 dilim** Osmanlı toprağında `s:` olarak yazılmış: 13 rusya, 11 rusya-gecici-hukumet, 10 transkafkasya.
  - Yerleşimler: Muş, Gümüşhane, Trabzon, Rize, Erzincan, Erzurum, Bitlis, Hopa, Pasinler, Kelkit, Aşkale, Bayburt.
  - Satırları `kafkas_isg.json`'da; dosya:satır ve öneri birlikte.
- **Öneri:** `d:` Osmanlı kesintisiz sürer; bu 34 dilim aynı uçlarla `isg`'e taşınır. Bitiş günleri Osmanlı'nın geri alış günleridir ve mevcut uçlar korunur.
- **KASA notu:** Değişmez 2'ye göre `d:` kırılmaları kalkar; `isg` ise kronoloji maddesiyle eşleşmeye devam eder. Geri alış maddeleri zaten var.
- **ONAY** (EMRELİC, 4 Kasım 2026 akşam): 34 dilim `isg`'e taşınır. Dayanak: VERI-YAPISI.md "TAHRİR ÖLÇÜTÜ" (Emre, 24 Eylül 2026).
  - Bu ölçüt asıl otoritedir; TEK KURAL onun uygulamasıdır.
  - Hüküm: "geçici/askerî" — Türk Ermenistanı Genel Valiliği askerî valilikti ve Osmanlı iddiası sürüyordu.
  - Brife eklenen kural: her `isg`/`s:` önerisinin `not` alanında ölçüt maddesi yazılır.
- **Elviye ve Kafkasya:** `rusya-gecici-hukumet` 503 + `transkafkasya` 23 dilim Rus hukukî toprağında kalıyor; bunlara dokunulmaz.

## 16. TAHRİR ÖLÇÜTÜ taraması — KASA kuyruğu (`tahrir_olcum.json`, `tahrir_siniflar.json`)
EMRELİC, 4 Kasım 2026 akşam: "çekirdek denetimin parçası". VERI-YAPISI §185'teki açık kalem bu taramayla karşılanır.
- **Mevcut isg** (ceb0ce402):
  - Bugün **585 isg kaydı** var; 24 Eylül'deki sayı 238'di.
  - Bunlar 389 yerleşime dağılıyor. 68 yerleşime (103 kayıt) D adımı dokundu; **321 yerleşime (482 kayıt) dokunmadı**.
- **Ters yön:** `s:`/`d:` olarak yazılmış ama ölçüte göre `isg` olabilecek dilimler.
  - Desen: A → B → A (aynı sahip geri geliyor). B en çok 15 yıl sürüyor; ardışık Rus alt künyeleri tek blok sayılıyor.
  - Bu, Kafkas 1916-18 vakasının bütün imparatorluklara genellenmesidir. **1.261 aday** çıktı; 1.026'sı D adımının dışında.
- **Sınıflar:**

| Sınıf | Aday | D dışı | Değerlendirme |
|---|---:|---:|---|
| 1 — hanedan içi (Fetret vb.) | 250 | 224 | Ölçüt dışı; dokunulmaz |
| 2 — II. Dünya Savaşı işgali ve kukla rejimler | 333 | 298 | Güçlü isg adayı |
| 3 — 1914-24 | 85 | 70 | isg adayı (Kafkas/Levant emsali) |
| 4 — Osmanlı sınır el değiştirmeleri | 169 | 129 | **Tahrir sınavı**: tahrire girdi mi, sancağa bağlandı mı |
| 5 — 1792-1815 | 83 | 68 | İlhak yasası varsa `s:`, yoksa isg |
| 6 — öteki | 341 | 237 | Belgeyle tek tek |

- **Yöntem:** 1 ajanlık ayrı akış (`TAHRIR-BRIEF.md`).
  - Sınıf 2, 3 ve 5 **künye deseni başına bir hükümle** ilerler: bir kaynak, desene uyan bütün satırlar.
  - Sınıf 4 yerleşim yerleşim ilerler.
- **Sınır:** desen sezgiseldir. A→B→A olmayan işgaller bu taramada görünmez; örneğin işgalin sonunda üçüncü bir sahibe geçiş. Bunlar D adımının yerleşim taramasında yakalanır.

## 17. TAHRİR ÖLÇÜTÜ taraması, 1. tur: sınıf 2, 3 ve 5'in bir kısmı (`tahrir_sonuc.json`)
- **Kapsam:** 35 desen, 490 aday satır.
  - Hükümler: **isg 161**, **s 114**, **kukla-kalir 56**, **BULUNAMADI 159**. BULUNAMADI'ların 57'si sınıf 5'te işlenmemiş satırlar.
  - Sınıf 4 (169) ve 6 (341) bu turda ele alınmadı. Sınıf 4 için 2. tur çalışıyor (`tahrir_sonuc_s4.json`).
- **En çok satırı etkileyen desenler:**
  - meiji-japonya 1942-45, Hollanda Doğu Hint: **isg (b)**, 79 satır. Kaynak: LoC Indonesia (16. ve 25. Ordu, deniz komutanlığı idaresi).
  - italyan-dogu-afrikasi 1936-41, Habeşistan: **s (a)**, 64 satır. 1936-06-01 kararnamesiyle AOI'ye governatorato olarak katıldı; İngiltere ve Fransa 1938'de tanıdı (Treccani).
  - meiji-japonya: Filipinler, Burma, Malaya **isg**, 36 satır.
  - salo-cumhuriyeti **kukla-kalir**, 17 satır.
  - ispanya-milliyetci 1936-39 **s**, 23 satır (iç savaşta rakip hükûmet).
  - Ostland ve SSCB'deki Alman idaresi **isg**, 31 satır. Kaynak zayıf.
  - Südetler, Güney Slovakya, Elsas-Lorraine, Besarabya 1940 **s (a)**.
  - Protektora, Slovakya, NDH, Helvetik **kukla-kalir**.
- **Açık sorular (EMRELİC'e):**
  - **sirbistan-nedic:** kukla künyesi var, ama Treccani "occupata militarmente" diyor. Kural (b) mi uygulanır, (c) mi?
  - **Habeşistan 1936-41:** kural (a) uygulandığında s: italya çıkıyor. 1941'de İmparator'un dönüşü ve savaş sonrası hükümsüzlük ic_not'a yazılır.
- **Bulunamayanlar:**
  - Hainan, Portekiz Timoru, Besarabya/Transnistria 1941-44, Finlandiya 1941-44, Eupen-Malmedy, Moğolistan 1919-21, Lombardiya 1799-1800.
  - Ukrayna 1917-20 iç savaşı: rakip rejimler olduğu için tahrir ölçütü uygulanmıyor.
  - Sınıf 5'in kalanı.
- **Yanlış sınıflanmış satırlar:** sınıf 2'de 1805-16 almanya ve avusturya satırları (7 satır) var; bunlar sınıf 5'e ait.

## 18. Kararlar: Nedić, Habeşistan, Baltık; yeniden sınama sonucu (EMRELİC, 4 Kasım 2026 akşam)
- **sirbistan-nedic:**
  - Sınıfı (b): askerî idareye tâbi, kendi devlet iddiası yok.
  - Veride **12 `s:` dönemi** var: Niş, Belgrad, Kragujevac… 1941-08-29 → 1944-10-06.
  - Öneri: altta `s: yugoslavya` sürer (sürgün hükûmeti), üstte `isg almanya`. Nedić hükûmetinin kuruluşu (1941-08-29) ic_not'a yazılır.
  - KASA notu: künye veriden düşünce BOYALAR'da **ölü renk +1** kalır. Tuz dosyasına dokunulmaz.
- **Habeşistan 1936-41:** `s: italya`.
  - İdareye katmanın belgeleri: 1936-05-09 ilhak ilanı ve 1936-06-01 AOI kararnamesi.
  - Tanınmama ve 1941 iadesi ic_not'a.
  - Ölçüt Filistin kararıyla tutarlı: İtalya kattı, İsrail katmadı.
- **Baltık 1940** (ölçüm, ceb0ce402; 12 yerleşim):
  - Zincir her yerde aynı: estonya / letonya / litvanya → **s: sovyet-rusya 1940-08-06** → **s: ostland 1941-07/08** → s: sovyet-rusya 1944 → s: *-cumhuriyeti-yeniden 1990/91.
  - Sovyet ilhakı `s:` olarak yazılmış ve ölçüte uygun. Tanınmama (Welles bildirisi 1940-07-23 vb.) ic_not'a.
  - ⚠️ **Gün sorunu:** üç cumhuriyete de 1940-08-06 yazılmış. SSCB Yüksek Sovyeti'nin kabul günleri farklı: Litvanya 08-03, Letonya 08-05, Estonya 08-06. Günler kaynaktan teyit edilmeli.
  - ⚠️ **Ostland:** atlasta `s:` olarak yazılmış. Ostland bir Reichskommissariat'tı, ilhak değildi (tahrir 1. tur: isg). Öneri: 1941-44 arası `s: sovyet-rusya` sürer, üstte `isg almanya`.
  - Klaipėda 1939 Alman ilhakı `s:` olarak kalır (EMRELİC (a): Memel 1939).
- **Yeniden sınama sonucu** (`yeniden_sina_sonuc.json`; 75 ONERI satırı işaretlendi):
  - Desenlerin çoğunda idareye katma ya da katmama belgesi **BULUNAMADI**. Ölçüt gereği "antlaşmaya kadar isg" önerileri **ASKIDA**; mevcut atlas verisi kalır.
    - Askıdakiler: Habsburg Macaristan 1686-99, Belgrad ve Semendire, Fransız Belçika 1794-95, Milano 1706, Rus Baltık 1710, İngiliz Kap, Malta, Pûne, Pagan.
  - **isg kalır:**
    - Niğbolu ve Rusçuk 1877-78 (TDV "işgal").
    - Konya ve Karaman 1832-33. Bu ikisinde dayanak zayıf: yalnız arama özeti var.
  - **Smolensk:** "Andrusovo'ya kadar isg" önerisi geri çekildi; atlastaki 1654 kalır. Gregoryen düzeltmesi 10-13 geçerli.
  - **Araştırılmadı:** Rus Orta Asya, Hazar 1723, Artvin, Saygon, Dijon, Venedik/Verona.
  - Habsburg Macaristan ve Rus Baltık için TDV dışı kaynak gerekiyor: Cambridge, DergiPark, Hrvatska enciklopedija. EMRELİC tarayıcısından okunabilir.

## 19. TAHRİR ÖLÇÜTÜ 2. tur: sınıf 4, Osmanlı sınırı (`tahrir_sonuc_s4.json`)
- **Hükümler (169 aday):** `s` 60, `isg` 2, BULUNAMADI 107. BULUNAMADI'nın 88'i araştırıldı ama kaynak çıkmadı; 19'u hiç işlenmedi.
  - `s` hükümlerinin 22'si yere özel belgeye dayanıyor.
  - 38'i yalnız desen kaynağına dayanıyor; satırlarında "DESEN" notu var: Bayezid dönemi beylikleri 1390-1402 ve Sırp despotluğu 1444-59.
- **İdareye katmanın belgelendiği yerler:**
  - Bağdat 1623-38: Safevî beylerbeyi Safî Kulı Han (Iranica ve TDV) → `s: safevi`.
  - Lefkada 1715-18: tahrir defteri (TK TD 87).
  - Győr 1594-98: beylerbeyi tayini.
  - Kastamonu 1392.
  - Menteşe ve Teke: Bayezid'in valileri.
- **isg çıkanlar:**
  - Tunus 1573-74: İspanyol işgali, Hafsî kukla.
  - Limni 1656-57.
- **Atlas ile TDV çelişkileri (KASA'ya):**
  - Anapa 1774-81.
  - Doğubayazıt: TDV'ye göre 1514'ten itibaren Osmanlı.
  - Van ve Erciş: Safevî dönüşü 1536.
  - Kerkük: Safevî dönemi 1624-30.
  - Silistre: 1388 / 1390 / 1394.
  - Birgi, Tire, Ayasuluk 1390-1402: TDV'ye göre Tire'de İsa Bey bırakıldı.
  - Erzincan, Kemah, Kelkit, Refahiye 1390-1402: doğrudan Osmanlı idaresi değil (Mutahharten); `v:` adayı.
- **BULUNAMADI ağırlığı:**
  - Habsburg 1688-90 Sırbistan (16 yer), Estergon 1595-1605.
  - Irak'taki Safevî yerleri 1623-38 (15 yer, Bağdat dışında).
  - Gerekli kaynaklar: Ćirković, Ivić (Sırp akademik) ve Iranica dışı Safevî kaynakları.
- **Cezayir 1830-48 ölçümü** (soru S7 için): veride **35 Cezayir noktası** `s: fransa`'ya 1830-1844 arasında geçiyor; her biri kendi fetih gününde.
  - Tahrir ölçütüne göre Genel Valilik (1834-07-22) öncesi `isg` adayı. Sonrası, idareye katma (Cezayir'in Fransa'ya bağlanması) olarak ayrıca ölçülecek.

## 20. Toplu kararlar ve tarayıcı okumaları (EMRELİC, 4 Kasım 2026 gece)
- **Kıbrıs 1878-1914** (S1):
  - `d: Osmanlı` + `isg ingiltere` → 1914-11-05, ardından `s: ingiltere`; Lozan md. 20 ic_not'a.
  - Veride 6 nokta etkileniyor: Lefkoşa, Magosa, Girne, Baf, Limasol, Tuzla (`toplu_kural.json`).
- **Mısır 1882-1914:**
  - `v:` Osmanlı (Hidivlik) + `isg ingiltere` → 1914-12-18, ardından himaye.
  - Ölçüt "s: ingiltere 1882-1914" deseniyle aradı; veride bu desende **dilim çıkmadı**. Mısır zinciri başka künyelerle kurulmuş olabilir; ayrıca ölçülecek.
- **Cezayir 1830-34** (S4/S7):
  - 1830-34 arası fetihler `isg fransa` → 1834-07-22'den itibaren `s:`; `v:` Cezayir Ocağı sürer.
  - 10 nokta etkileniyor: Cezayir, Oran, Annaba, Bicâye, Şerşel, Medea, Mersa'l-Kebîr, Blida, Miliana, Mustaganem (`toplu_kural.json`). 1834 sonrası fetihler kendi günüyle kalır.
- **Lahsa** (S5 değişti): İbn Suud 1913'te aldı ve idaresine kattı; bu bir fetih, `s: suud` 1913'ten. 1914 Mayıs → 1915-12-26 arası `v: osmanli`.
- **Otranto:** `isg osmanli`. **Erzincan çevresi 1390-1402:** `v:` Mutahharten. **Uydu devletler:** S2 kabul edildi.
- **Habsburg Macaristan (A1):** askı kalktı, idareye katma belgelendi.
  - Kaynak: Hodson, *Austrian History Yearbook* 38 (2007) s.103, 106. 1685 kameral idare, 1688 Neoacquistica, öşür.
  - `s: habsburg` fetih gününden; Karlofça ic_not'a.
  - Belgrad 1688-90 ve Temeşvar'a uygulanmaz.
- **Rus Estonya ve Livonya 1710 (A2):** askı kalktı, idareye katma belgelendi.
  - Kaynak: 1710 kapitülasyonları; CUP *Encyclopedia of European Migration and Minorities*.
  - `s: rusya` kapitülasyon gününden (Riga 1710-07, Reval 1710-09; Jülyen → Gregoryen). Narva 1704. Nystad ic_not'a.
- **Baltık SSCB'ye kabul günleri (A3):**
  - Letonya 1940-08-05 ve Estonya 1940-08-06 teyitli.
  - Litvanya'da 08-03 / 08-05 çelişkisi var (Oxford Companion 08-05); ikisi de ic_not'a yazılır, **BEKLE**.
- **Slot sayacı:** `slot.py` eklendi; en çok 6 ajan, dolunca `al` reddediyor.

## 21. Mora 1821-1829 ve Hicaz 1924-32 ölçümü (S9/S10 kararları, EMRELİC 4 Kasım 2026 gece)
- **Mora:** veride **18 yerleşimde** `s: yunanistan` başlangıç tarihi şöyle dağılıyor:
  - **14'ü 1821-03-25:** Tripoliçe, Modon, Patras, Vostitsa, Kalavrita, Damala, Methana, Ermiyoni, Kranidi, İstefe, Kulluk, Egina, Hidra, Elafonisos. Bu gün ayaklanmanın sembolik başlangıcıdır; hiçbir yerin el değiştirdiği gün değildir.
  - Kalan 4'ü farklı günlerde başlıyor: Korint 1822-01-01, Nauplion 1822-12-12, Koron 1828-10-05, İnebahtı 1829-04-01.
- **Yanlış olduğu bilinenler:**
  - Modon ve Patras 1828'e kadar Osmanlı ve Mısır elindeydi (TDV Modon). Patras'ın Osmanlı'da kaldığı ayrıca kaynakla teyit edilmeli.
  - Tripoliçe 1821-09-23'te alındı; İbrahim Paşa 1825'te geri aldı.
- **Öneri (S9 kararı + Atina 1822 emsali + "fiilî yönetim + halef ilanı"):**
  - `s: yunanistan` her yerde, geçici Yunan hükümetinin o yeri fiilen yönettiği günden başlar.
  - Ölçüt: Epidavros anayasası 1822-01 ya da yerin alınış günü, hangisi sonraysa.
  - İbrahim Paşa'nın 1825-28 geri alışları `d:` Osmanlı/Mısır'a dönüştür. Maison 1828 → `isg fransa` → Kapodistrias'a devir.
  - **Bu 18 yerleşimin zinciri kaynakla yeniden kurulmalı.** İş TDV Mora, TDV Yunanistan ve akademik kaynaklarla KASA'ya, ayrı bir ajan işi olarak verilecek.
- **Hicaz** (veride 7 yerleşim):
  - Zincir: `hicaz-kralligi` (1916) → `suud-ucuncu` → `suudi-arabistan` 1932-09-18. Künye geçişleri doğru.
  - Gün sorunu: Mekke dışındaki 6 yerin hepsinde `suud-ucuncu` 1925-12-19'da başlıyor. Oysa Tâif TDV'ye göre 1924-09-08'de alındı, Medine 1925-12-05 civarında, Yenbu 1925-12 civarında.
  - S10 kararı: her şehir kendi fetih ya da teslim gününden başlar. Günler kaynaktan alınacak.
- **Split:** S11 (a) işlendi, `s: italya` 1941-05-18 → 1943-09.

## 22. Mora 1821-33 zinciri kaynaktan (`mora_sonuc.json`; dadim_sonuc'a `_etiket: MORA-1821` ile eklendi, ezilmedi)
- **Kaynaklar:** TDV maddeleri (Mora, Tripoliçe, Modon, Navarin, Koron, Balyabadra, İnebahtı, İbrâhim Paşa, Yunanistan) ve Phillips 1897 ile Finlay 1861. Bu iki eski eser tek başına KISMEN sayıldı.
- **Bulgu:** 14 yerleşimdeki 1821-03-25 hiçbir kaynakta yok; sahte bir kırılma.
- **Öneriler (ONERI):**
  - **Tripoliçe:**
    - `s: yunanistan` 1821-10-05 → 1825-06-23. Bu Gregoryen gündür; kaynak Jülyen 23 Eylül veriyor, çeviri için ikinci kaynak gerekli.
    - `d:` 1825-06-23'ten 1828'e (İbrahim Paşa).
    - 1828 sonrası `s: yunanistan`. Gün BULUNAMADI.
    - ÇİFT-TDV: TDV Tripoliçe "Ekim 1822" diyor.
  - **Modon:** `d:` Osmanlı → 1828-10-08 · `isg fransa` → Yunan teslimi. Atlastaki 1821 ve 1825 yanlış.
  - **Koron:** 1828-10-05, İbrahim Paşa'nın ayrılış günüdür. Sonra `isg fransa`. ÇİFT-TDV: Koron maddesi 1827 diyor.
  - **Patras:** 1828'e kadar `d:` Osmanlı, sonra `s: yunanistan`.
  - **İstefe/Teb:** 1829'a kadar Osmanlı garnizonu, sonra `s: yunanistan`. Gün BULUNAMADI.
  - **Kalavrita:** 1821-04-02.
  - **Hidra:** 1821-04-28.
  - **İnebahtı:** 1829-04-30.
  - **Korint:** 1822 → 1822-07 Dramali `d:` → 1822-11-07 `s: yunanistan`.
- **KAYNAKLI:** Anabolu 1822-12-12 (Palamidi).
- **BULUNAMADI** (mevcut veri kalır): Vostitsa, Damala, Methana, Ermiyoni, Kranidi, Egina, Salamis, Elafonisos. Fransızların Yunanlara teslim günleri de bulunamadı.
- **KASA-YER:** Spetses veride **YOK**. Phillips 1821-04-07 katılışını veriyor; yeni yerleşim önerisi.
- **İşlem notu:** birleştirme sırasında Tripoliçe satırları İsveç'teki Mora'ya düştü (ad karışması); onarıldı. Satırlar artık "Mora (Tripoliçe)" altında.

## 23. TBMM 1920-22: işgal altındaki yerler (`tbmm_sonuc.json`) — YALNIZ ÖNERİ, Emre görmeden uygulanmaz
- **Ölçüt:** Emre'nin (a) kararının gerekçesi, "Ankara hükûmetinin DENETLEDİĞİ toprak". İşgal altındaki yerde işgal süresince `d: osmanli` + `isg`; `s: tbmm` kurtuluş günü başlar (Mersin emsali).
- **149 aday** (ayrıca emsal olarak Mersin):
  - **89 evet.**
  - **2 hayır:** Niğde, Ulukışla. TDV "işgaline uğramadı" diyor; buralarda `s: tbmm` 1920-04-23 kalır.
  - **59 BULUNAMADI.** Kaynak suskun; "işgal edilmedi" yazılamaz.
- **İl bazında kurtuluş günleri (TDV):**
  - Fransız bölgesi: Adana 1922-01-05 · Tarsus 1921-12-27 · Mersin 1922-01-03 · Antep 1921-12-25 · Kilis 1921-12-23.
  - Maraş 1920-02-11 ve Urfa 1920-04-11: TBMM'den önce boşaltıldıkları için `s: tbmm` 1920-04-23.
  - Yunan bölgesi: Afyon 1922-08-27 · Kütahya 08-30 · Uşak 09-01 · Eskişehir 09-02 · Tire 09-04 · Bilecik 09-06 · Aydın 09-07 · İzmir 09-09 · Bursa 09-11 · Adapazarı 1921-06-21 (kısa işgal).
  - Trakya: Kırklareli 1922-11-10 · Tekirdağ 11-13 · Edirne Kasım 1922. Gelibolu 10-03 şüpheli, çünkü Mudanya 10-11.
  - İstanbul: işgal 1918-11-13 → çekiliş 1923-10-02, giriş 1923-10-06.
  - İtalyan bölgesi: Muğla 1919-07-23 → 1921-07-05 · Antalya 1919-04-29 → 1921-06-01 (boşaltmanın başlangıcı).
- **Dikkat gerektirenler:**
  - Alaşehir için TDV "4 Eylül 1921" diyor; muhtemel yazım hatası.
  - Bodrum: mevcut veride Yunan isg var, TDV İtalyan diyor.
  - İlçelerin çoğunda gün, il merkezinin günüdür (ABİ MERKEZ, beyanlı).
  - Bursa ilçelerinde mevcut 1920-10-25 → 1922-09-06 isg kaydı kaynaksız.
  - Ajan il başına araç sınırına ve ara yazmaya uymadı (beyanlı).
- **BULUNAMADI kümeleri:** Çanakkale/Boğazlar, Balıkesir kıyısı, Bilecik/Kütahya/Afyon köyleri, Sakarya yöresi, Kocaeli yarımadası, Silivri/Çatalca, Adıyaman/Siverek/Suruç.

## 24. Londra 1913 kuralı: Ege Makedonyası ve Epir (`londra_1913.json`; EMRELİC S25, 4 Kasım 2026 gece)
- **Karar:** Osmanlı, Londra Antlaşması'nda (1913-05-30) Enez-Midye hattının batısındaki karadan feragat etti → `s: yunanistan` 1913-05-30'dan başlar.
  - Yunan girişinden 1913-05-30'a kadar: `d: osmanli` + `isg yunanistan`.
  - Bükreş (1913-08-10) ve Atina (1913-11-14) ic_not'a yazılır.
- **Ölçüm** (ceb0ce402, kaba kutu 39.2-41.4N 20.0-24.6E):
  - Bu bölgede `s: yunanistan` 1912-14'te başlayan **22 yerleşim** var; **hiçbiri Londra gününde başlamıyor**.
  - **18'i Atina 1913-11-14'te başlıyor:** Selanik, Yanya, Parga, Aynaroz, Kesendire, Lankaza, Alasonya, Aydonat, Margiliç, Sûli, Gomenice, Filat, Kılkış, Vodina, Karaferye, Yenice-i Vardar, Kesriye, Filorina. Bunlar Londra kuralıyla `s: yunanistan` 1913-05-30 olur.
  - **4'ü Bükreş 1913-08-10'da başlıyor:** Drama, Serez, Kavala, Praviște. ⚠️ Bu dördü Struma'nın doğusunda kalıyor; 1912-13'te **Bulgar** işgalindeydiler.
    - Londra feragati müttefiklere ortaktı. 1913-05-30 ile Yunan girişi (1913 Temmuz, İkinci Balkan Savaşı) arasında fiilî yönetim Bulgar'daydı.
    - Önerim: 1913-05-30 → Yunan girişi `s: bulgaristan`; Yunan girişi → Bükreş `isg yunanistan`; `s: yunanistan` Bükreş'ten. "Fiilî yönetim + halef" ölçütü uygulanır.
    - **EMRELİC kararına sunuldu.**
- **Astara:** KASA-YER kuyruğuna "koordinat ve yaka ölçümü" olarak yazıldı. Nokta 38.429/48.873, Astara Çayı sınırında. Kacar 1923-10-29 satırı hata şüphesiyle **BEKLE**.

## 25. Londra kararının uygulanması ve Kuzey Epir ölçümü (EMRELİC, 4 Kasım 2026 gece)
- **18 yerleşim** (Selanik, Yanya, Kesriye …): `s: yunanistan` 1913-05-30'dan başlar. Yunan girişinden o güne `d: osmanli` + `isg yunanistan`. Atina 1913-11-14 ic_not'a.
- **Drama, Serez, Kavala, Praviște:**
  - Bulgar girişi (1912-10/11) → 1913-05-30: `d: osmanli` + `isg bulgaristan`.
  - 1913-05-30 → Yunan girişi (Temmuz 1913, gün kaynaktan): `s: bulgaristan`.
  - Yunan girişi → Bükreş: `isg yunanistan`.
  - 1913-08-10'dan itibaren `s: yunanistan`.
- **Değişmez 2:** her yeni kırılma için kronoloji maddesi gerekiyor.
  - 1913-05-30 Londra ve 1913-08-10 Bükreş maddeleri kronolojide **var**: olaylar.js, kronoloji_sinir_avrupa_orta, kronoloji_sinir_turkiye, kronoloji_sinir_komsu.
  - Eksik olan, şehir başına Yunan ve Bulgar giriş günleri → KASA kuyruğuna.
- **Kuzey Epir** (ceb0ce402; ayrı vaka):
  - Ergiri, Delvine, Hımara, Ayasaranda, Butrint (`yerlesimler_epir.js`) ve Görice (`yerlesimler_a78_avrupa.js`): hepsinde `s: arnavutluk-bagimsiz` **1912-11-28**'de başlıyor (Avlonya ilanı).
  - "Fiilî yönetim + halef ilanı" ölçütüne göre ilan yalnız Avlonya'yı bağlar. Bu yerler 1912-14'te **Yunan işgalindeydi**; Görice'de bu durum zaten `isg yunanistan` 1912-12-20 → 1914-03-31 olarak var.
  - Ardından gelen dönemler:
    - Floransa Protokolü 1913-12-17 bölgeyi Arnavutluk'a verdi.
    - 1914 Kuzey Epir Özerk Cumhuriyeti kuruldu (Korfu Protokolü 1914-05-17).
    - Yunan çekilişi 1914 başı.
    - 1914-16 Yunan ve İtalyan girişleri oldu.
  - **KARAR (EMRELİC):** Londra, Arnavutluk'un sınırını büyük devletlere bıraktı; sınırı Floransa Protokolü belirledi.
    - Yunan girişinden 1913-12-17'ye kadar: `d: osmanli` + `isg yunanistan`.
    - 1913-12-17'den itibaren `s: arnavutluk`.
    - Avlonya ilanı ic_not'a yazılır; Draç emsaline göre bu yerleri bağlamaz.
    - Korfu Protokolü (1914-05-17) Arnavutluk içinde özerklik tanıdı; `s: arnavutluk` sürer.
    - 1914 Şubat-Mayıs fiilî yönetimi kaynakla gösterilirse KASA'ya **künye adayı** olarak: "Kuzey Epir Özerk Cumhuriyeti".
    - Yunan işgali 1914-10 → 1916 ve İtalyan işgali 1916 → günleri kaynaktan alınır.
- **Ufuk-1923 artığı** (`ufuk_1923.json`): Türkiye dışında 1923-10-29'da başlayan **28 dönem** var (Astara ve Culfa'dan genelleme).
  - Bu gün Türkiye Cumhuriyeti'nin ilanıdır; bu yerler için anlamsızdır. Eski ufkun kesiğinden kalmış.
  - Dağılım: Şan devletleri → ingiliz-burma 5; Malaya 2; Hollanda Doğu Hint 3; Kaçar 3 (Culfa, Astara, Bacirge); Moğolistan 2; Chaco 2; ABD-Meksika 2; ayrıca Kunfüze, Ferasan, Zerenc, Halâib, Sarp, Avsa, Caruru, Patagonya.
  - Hepsinin kendi devir günü kaynaktan bulunmalı; KASA kuyruğuna yazıldı.

## 26. Hukukî iade ve fiilî çekiliş kararları (EMRELİC, 4 Kasım 2026 gece-4; `karar31` notları, 46 satır)
- **Petsamo:** `s: sovyet` 1944-09-19. Moskova Mütarekesi md. 7 hukukî iadedir ve Sovyet idaresi kuruldu; Paris 1947-02-10 `ic_not`'a.
- **Telavi:** `s:` Gürcistan SSC'nin bölgeyi fiilen yönettiği günden. Gün yoksa SSC ilanı 1921-02-25 + beyan; ilerleme günleri `isg` yazılmaz.
- **Silopi:** Musul/Mersin emsali. `d: osmanli` + `isg ingiltere`, `s: tbmm` fiilî devirden; 1926 Ankara Antlaşması `ic_not`'a.
- **Lâhîcan ve Bender Enzeli:** Reşt 1732-02-01 hukukî iade → `s: iran`. TDV Gîlân'ın 1734'ü fiilî çekilişse 1732-1734 `isg rusya` (iki kaynak `ic_not`'ta). TDV iadeyi 1734 diye tarihliyorsa TDV esas → KASA TDV cümlesini okur.
- **Borçka:** Ayastefanos ön barıştır, sayılmaz. `s: rusya` 1878-07-13 Berlin; Batum teslimi 1878-08-25 `ic_not`'a (Selanik emsali). TBMM 1921-02-27, Kars Antlaşması `ic_not`'a.
- **Kudus (Cava):** 1743 VOC'ye antlaşmayla devir + VOC idaresi → `s: voc`, "kiralama" `ic_not`'a. 1945-49 rakip hükûmet kuralı: fiilen yöneten (Cumhuriyet 1945-08-17 / Hollanda → 1949-12-27).
- **Kızılarvat:** 1881 fethi `isg`; `s: rusya` Zakaspi oblastının kuruluşundan; Ahal-Horasan 1881-12-21 `ic_not`'a.
- **Uygun bulunan öneriler:** Kursk, Gulca, Şerur, Mangışlak, Çorum, Manila.
- **Malikiye (Derik):** AD KARIŞMASI → KASA-YER kuyruğu.

## 27. Akra/Musul ve Mustafapaşa (EMRELİC, 4 Kasım 2026 gece-5; `karar32` notları)
- **Akra, Tirwānīsh, Rewândiz:** Levant kuralı aynı kalır (`s: irak` 1921-08-23). `ic_not`'a iki tarih yazılır: TDV Musul'un hukukî kalış günü (1926-06-05 Ankara Antlaşması) ve kuralın 1921-08-23'ü.
- **Mustafapaşa (Svilengrad): ASKIDA.** 1915'e uzatmanın iki şartı var:
  1. TDV cümlesi okundu (Halaçoğlu 1993): "1915'te Bulgaristan Krallığı'nın Alman ittifakına katılması için Almanya'nın baskısıyla yapılan bir sınır düzeltmesinde Bulgaristan'a terkedilen kasaba". Aynı maddede 1913 geçmiyor.
  2. 1913 İstanbul Antlaşması'nın sınır maddesi ikinci kaynaktan okunacak (Mustafapaşa kimde kaldı?). 1915 devir günü (EMRELİC'in hatırladığı Sofya 1915-09-06) kaynakla doğrulanacak.
  - Teyit edilemezse 1913 kaydı durur. Dimetoka ve Edirne kıyısındaki 1915 devir yerleri (Karaağaç hariç) aynı zincire bağlanır. TDV Dimetoka (Kiel) 1913/1915'i anmıyor.
- **Kural uygulamaları (UMIT):**
  - Hanak ve Posof: Borçka emsali.
  - İmroz: ada istisnası, 1923-09-20'ye kadar `isg yunanistan`.
  - Görice: Kuzey Epir emsali + 1916 Fransız işgali.
- **ASKIDA, EMRELİC'e soruldu:**
  - Torun: Versay yürürlüğü 1920-01-10 mu, teslim 1920-01-18 mi?
  - Babū ve Himû: Cezire hattında Fransız işgali.

## 28. Toruń ve Cezire hattı (EMRELİC, 4 Kasım 2026 gece-6; `karar33`)
- **Toruń:** `s: polonya` 1920-01-18 (teslim günü).
  - 01-10 ile 01-18 arasında Alman idaresi sürdü; `s: almanya` kalır, `isg` yazılmaz.
  - Versay'ın yürürlüğe girdiği 1920-01-10 `ic_not`'a yazılır.
  - Teslim günü kaynakta okunacak.
- **Cezire hattı (Babū, Himû):** Levant kuralının uzantısı.
  - 1919–21: `d: osmanli` + `isg fransa`.
  - Ankara hattının güneyi: Fransız mandası künyesiyle `s:` 1921-10-20'den. 1923-09-29 `ic_not`'a yazılır.
  - Kaynak Fransız fiilî idaresini daha geç gösterirse o gün alınır.
  - Kuzey taraf: `s: tbmm` Fransız tahliyesinin fiilî gününden (Antep emsali).
- **Mustafapaşa: sonuç (`mustafapasa_1915.json`, güven orta).**
  - **1913:** `s: bulgaristan` 1913-09-29 kaydı **durur**. Sarıoğlu'nun hakemli makalesi (TTK PDF; Halaçoğlu s.34 ve Akın s.2179'a dayanıyor) "29 Eylül 1913'te imzalanan İstanbul Antlaşması ile bölgenin kaza merkezi dahil bir kısmı, Bulgaristan'a bırakılmıştır" diyor. Spectator'ın 1913-09-20 haberi ikincil destek veriyor. Antlaşma metni okunmadı.
  - **TDV ile ilişki:** TDV'nin 1915'i kazanın kalan kısmı içindir. Kapsam farkıdır, çelişki değil.
  - **1915:** Osmanlı-Bulgar Hudut Tashihi Antlaşması 1915-09-06'da Sofya'da imzalandı (Türkiyat Mecmuası 29, 2019, s.127-150, DOI 10.26650/iuturkiyat.655554). Devredilenler: Meriç'in batı yakasında dar şerit, Karaağaç, Dimetoka ve kazanın kalanı. Fiilî teslim günü bulunamadı.
  - **Dimetoka:** kasabanın tamamının mı, yalnız demiryolu şeridinin mi devredildiği belirsiz. Yiğit (Bilig 63, 2012) ve Bıyıklıoğlu (TTK 1987) okunmadan boyanmaz.
- **Mersin emsali uygulamaları** (Hanak, Posof, İmroz, Görice): EMRELİC uygun buldu.

## 29. Doğu Trakya 1912-13, Mustafapaşa onayı, Belgrad (EMRELİC, 4 Kasım 2026 gece-7; `karar34`)
- **Kofçaz ve Dereköy** (1913-09-29 İstanbul Antlaşması ile Osmanlı'da kalan yerler): `d: osmanli` + `isg bulgaristan` 1912-10-24 → 1913-07-21 kesintisiz; Londra 1913-05-30 `ic_not`'a.
  - Bu, **Üsküp kuralından sapmadır.** Gerekçe: Emre'nin H-0138 maddesi ve Londra devrinin hiç uygulanmadan geri alınması.
  - EMRELİC sabah raporunda Emre'ye soracak; ONERI notu "Emre onayı bekliyor".
- **Malko Tırnova** (Bulgaristan'da kalan yer): `isg` 1912-10-24 → 1913-05-30, ardından `s: bulgaristan` 1913-05-30'dan (Üsküp emsali).
- **Kofçaz ve Dereköy TBMM zinciri:** Mersin emsali, uygun.
- **Mustafapaşa:** öneri onaylandı.
  - 1913-09-29 kaydı durur.
  - Edirne kıyısındaki 1915 kırılmaları 1915-09-06'dan, "teslim günü teyitsiz" beyanıyla.
  - Dimetoka hariç tutulur; karar Yiğit ve Bıyıklıoğlu okununca verilir.
- **Belgrad:** kurtuluş TDV'nin 1944-10-20'si alınır. Atlastaki 1944-10-06 `ic_not`'a yazılır; büyük ihtimalle harekâtın başlangıcıdır.

- **Hatay (EMRELİC gece-8):** İskenderun, Sincan ve Antakya için `isg fransa` uygun.
  - `isg`, Levant zincirindeki Fransız mandasının `s:` gününde biter (İç Suriye 1920-07-25 emsali).
  - Ankara 1921-10-20 sancağın özel rejimini teyit eder; `ic_not`'a yazılır.
  - Hatay Devleti 1938-09-02 ve Türkiye'ye katılış 1939-06-29 (fiilî devir 07-23) ayrı bakılır; gün kaynakla.
- **Huy:** Brüksel emsali uygun.

## 30. BAKILMADI yeniden araştırma turu (UMIT, 4 Kasım 2026 gece)
- Evren 1-3'te 600-1923 arası BAKILMADI satırı: **577 satır, 302 yerleşim.** Bunlar 24 partiye bölündü (`db_b_NN`, `bak_parti.py`; satır sayısı çok olan önce).
- Sonuç dosyası `db_rb_NN.json` biçiminde; `bak_topla.py` yalnız eşleşen BAKILMADI satırının yerine koyar (eşleşme: `dosya_satir` + `alan` + `d` + `f`).
- Evren 3'ün son partileri bittikçe kalan BAKILMADI satırları ikinci geçişle eklenir.

## Teslim dosyaları
- `dadim_sonuc.json`: bütün satırlar. Satır biçimi: dosya:satır · alan · d · f/t · hüküm (KAYNAKLI / ONERI / BULUNAMADI) · kaynak · alıntı · öneri · not.
- `ONERILER.md`: ONERI satırları, bayraklarıyla.
  - **KURAL:** öneri bir atlas kuralına dokunuyor.
  - **ÇİFT-TDV:** iki TDV maddesi çelişiyor.
  - **ÜLKE:** kaynak yalnız ülke düzeyinde.
- `topla.py`: parti sonuçlarını bu iki dosyaya toplar.
