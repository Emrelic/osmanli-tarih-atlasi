# D ADIMI — yerleşim sahipliğinin kaynakla teyidi (UMIT, 4 Kasım 2026)

Proje: Osmanlı Tarih Atlası.
- Depo SALT OKUNUR: `C:\atlas\.claude\worktrees\umit-1104-dadim` (origin/main ceb0ce402). Depoya yazma, git komutu çalıştırma.
- Ortamda `py` var.
- Tek yazacağın dosya, sana verilen sonuç dosyasıdır (scratchpad).

## İş
Atlasta her yerleşimin bir sahiplik zinciri var: hangi tarihten hangi tarihe hangi devletin elindeydi. Dönem türleri:
- `s:` yabancı devlet;
- `d:` doğrudan Osmanlı;
- `v:` tâbi;
- `isg:` işgal.

Bu dönemlerin büyük kısmının kaynağı boş, ya da `DEVRALMA` (kronoloji maddesinden türetilmiş, yerleşime özgü kaynak değil). Senin işin, partideki yerleşimlerin bu dönemlerini akademik kaynakla teyit etmek.

Parti dosyasındaki her yerleşimin `donemler` listesinde şunlar var:
- `alan`, `d` (devlet künye id'si), `f`/`t`;
- `mevcut_kaynak`: şu anki kaynak metni;
- `dosya_satir`: KASA'nın düzelteceği yer.

## Öncelik
1. **Kaynağı boş ya da `DEVRALMA` ile başlayan dönemler.** Hedef bunlar.
2. Okurken mevcut kaynaklı bir dönemle **açıkça çelişen** bir şey görürsen onu da öneri olarak yaz. Kaynaklı dönemi baştan doğrulamaya çalışma.

## Atlasın sahiplik kuralları (öneri yazmadan önce oku)

### 🔴 Asıl otorite: VERI-YAPISI.md §"isg: mi s:/d: mi — TAHRİR ÖLÇÜTÜ" (Emre, 24 Eylül 2026)
Aşağıdaki TEK KURAL bu ölçütün uygulamasıdır, onun yerine geçmez. Ölçüt **belgeye** sorulur:
- **Ele geçiren yeri kendi idaresine KATTIYSA** → `s:` ya da `d:` (fetih). Bunun belgesi:
  - kendi vergisini toplaması;
  - kendi defterine yazması;
  - bir idarî birime bağlaması.
  Osmanlı için somut sınav: yer tahrir defterine girdi mi, bir sancağa bağlandı mı?
- **Ele geçiren orayı kendi toprağı SAYMIYORSA** → `isg`. İşaretleri:
  - eski sahibin iddiası sürüyor;
  - devir geçici ya da askerî.
- **🔴 Antlaşma günü ölçüt DEĞİLDİR** (EMRELİC düzeltmesi, 4 Kasım 2026 akşam). Fetih ile antlaşma arasındaki dönemde ele geçiren güç yeri kendi idaresine kattıysa, `s:` FETİH gününden başlar ve antlaşma `ic_not`a yazılır.
  - Örnekler: Habsburg Macaristan 1686-99 (Neoacquistica, kamara, komitat), Rus Estonyası 1710.
  - "Fetihten antlaşmaya kadar isg" yalnız idareye katmanın belgesi yoksa ya da işgalci toprağı kendi saymıyorsa yazılır.
- **Kaynak susuyorsa uydurma** → BULUNAMADI yaz. "Muhtemelen" diye birini seçme.
- Hukukî antlaşma günü, idareye katmanın en güçlü belgesi olarak kullanılır.
- **Her `isg`/`s:` önerisinde** `not` alanına hangi ölçüte dayandığını yaz:
  - `ÖLÇÜT: idareye katma — <belge>`
  - ya da `ÖLÇÜT: geçici/askerî — <belge>`
  - Örnek: Doğu Anadolu 1916-18'deki "Türk Ermenistanı Genel Valiliği" askerî valilikti ve Osmanlı iddiası sürüyordu → `geçici/askerî`, yani `isg`.

- **De jure devir antlaşma günündedir** (Emre kararı F8). Örnek: Trianon 1920-06-04. Fiilî askerî işgal sahiplik değildir.
  - İşgal dönemleri ayrı `isg:` katmanıdır. Örnekler: Rodos 1912-1923 İtalyan işgali, İstanbul 1918-1923 İtilaf işgali.
  - "Osmanlı dönemi 1912'de bitmeli" gibi bir öneri yazma. Onun yerine "isg: italya 1912-05-17 → 1923-07-24 eklenmeli (TDV Rodos)" yaz.
  - Fiilî ile de jure ayrımını `not` alanında açıkla.
- **TEK KURAL — işgal ve sahiplik** (koordinatör, 4 Kasım 2026; öncekileri geçersiz kılar):
  - Savaş işgali, ilhak ya da egemenlik devri gerçekleşene kadar **`isg:`** olarak yazılır.
  - **`s:`** sahipliği hukukî ilhak ya da devir gününden başlar. Ham işgal günü `not` alanına ic_not olarak yazılır.
  - İstisna: işgalci egemenliği açıkça devralırsa sahiplik o gün başlar. Örnek: Berlin Deklarasyonu 1945-06-05.
  - Uygulama örnekleri:
    - Brüksel 1794 → ilhak: isg fransa.
    - Rodos 1912-1923: isg italya.
    - Kâbil 1839-42: isg ingiltere.
- **Fiilî denetim ilkesi** (eski not; yalnız işgal SAYILMAYAN, idareye katılmış durumlar için geçerli): dönem ucu fiilî denetimin başladığı gündür (Delhi 1803-09-11, Şam 1918-10-01). Hukukî tanınma tarihi `not` alanında ic_not beyanı olarak yazılır; ucu değiştirmez. İşgal ile denetim arasındaki ayrım: ele geçiren yeri kendi idaresine katmadıysa ve eski sahibin iddiası sürüyorsa bu `isg:`dir. Örnekler: Rodos 1912-23, İstanbul 1918-23.
- **TBMM (`tbmm-turkiye`) 1920-04-23'te başlar.** Bu atlasın kuralıdır. Kuralı değiştiren bir öneri yazma. Kaynak başka bir şey diyorsa `not` alanında "KURAL KARARI" diye işaretle.
- **Koordinatör kararı (EMRELİC, 4 Kasım 2026):**
  - Sovyet ardılı cumhuriyetlerin başlangıcı **bağımsızlık ilanı günüdür**. Örnek: Türkmenistan 1991-10-27.
  - Bunu `ic_not` alanına şöyle beyan et: "SSCB'nin sona erişi 1991-12-26; uluslararası tanınma Aralık 1991".
  - Kural Orta Asya ve Kafkasya ardıllarının hepsine uygulanır. Atlasta 1991-12-26 kullanan bir ardıl dönem görürsen ONERI yaz.
- **ÇİFT-TDV kuralı (koordinatör kararı):** İki TDV maddesi çelişiyorsa önce üçüncü, bağımsız bir akademik kaynak ara (Iranica, EI, Cambridge).
  - Bulursan: onu esas al.
  - Bulamazsan: yerleşimin **kendi şehir maddesindeki** TDV tarihi esastır. Öteki TDV maddesi `not` alanında beyan edilir. Örnek: Bağdat için TDV «Bağdat», Sana için TDV «San'â».
- **İki TDV maddesi çelişiyorsa** önerinin yanına `not` alanında iki maddeyi de yaz. Hangisinin doğru olduğuna sen karar verme.
- **Devamcı devlet istisnası (EMRELİC):** `rusya-federasyonu` SSCB'nin devamcısıdır; başlangıcı 1991-12-26 (142-N). Bağımsızlık ilanı kuralı ona uygulanmaz.
- **Takvim çevirisi (EMRELİC):** Çin, Vietnam, Kore ve Japon ay-güneş günlerini (ganzhi, saltanat yılı/ay) **elle çevirme**.
  - Kaynak Batı karşılığını veriyorsa onu kullan.
  - Vermiyorsa yalnız ay ya da yıl hassasiyetini yaz. Çevrilecek günü (ör. "Hongwu 20, 6. ay 丁酉") `not` alanına "Academia Sinica ile çevrilecek" (Çin/Vietnam; NAOJ yalnız Japon takvimi). Çevirme **toplu olarak EMRELİC'te** yapılır, ajan yapmaz. İfadeyi `not` alanına aynen yaz: hanedan yılı/ay/ganzhi + kaynak + cilt. Mingshi ve Qing shi gao günleri KAYIT günüdür. diye yaz; hüküm ONERI olur.
- **Üsküp emsali:** Emre'nin açık kuralı (ör. 1913 Balkan devirleri Londra 1913-05-30) TDV'nin farklı gününün önündedir. TDV günü `not`a yazılır.
- **Ön barış ≠ devir (Milano 1859):** ön barış (Villafranca) hukukî devir sayılmaz. Hukukî devir kesin antlaşmadır (Zürih). Arada kalan süre `isg` yazılır.
- **Ortaçağ ölçütü (Gelibolu 1366):** antlaşma yoksa yönetimin fiilen devredildiği gün esas alınır. Hükümdarın onayı ya da devri bir tasarruf sayılır (Selanik 1403-06-09).
- **Levant 1917-1921:** Filistin ve Irak'ta işgal süresince `d:` Osmanlı ile `isg` işgalci yazılır; sahiplik mandadan ya da krallıktan itibaren başlar. İç Suriye (Şam, Humus, Hama, Halep) için kural farklı: 1918-10 → 1920-07-25 arası `s: suriye-arap-kralligi` (Şam emsali).
- **Fiilî yönetim + halef ilanı (Draç 1912):** halef devletin bağımsızlık ilanı yalnız ilanı yapan hükümetin **fiilen yönettiği** yerlerde `s:` başlatır (Arnavutluk 1912-11-28 → Avlonya).
  - Başka bir gücün o sırada ele geçirdiği yerde `isg` yazılır; `s:` hukukî devirden başlar.
- **Ada istisnası (Sisam):** Londra 1913 Ege adalarını devretmedi. Sisam ve Ege adalarına Londra emsali uygulanmaz; devir 1914 Şubat'taki büyük devletler notasıyla olur.
- **Elviye-i selâse (Kars, Ardahan, Batum 1918):** Brest-Litovsk bu bölgeyi devretmez. Dönemler şöyle yazılır:
  - `s: rusya` → 1918-03-03.
  - Ardından fiilî yönetim: `transkafkasya`.
  - Osmanlı girişinden itibaren `isg osmanli`.
  - `s:` Osmanlı 1918-06-04 Batum Antlaşması'ndan başlar.
- **TBMM ve işgal altındaki yerler (EMRELİC düzeltmesi, Mersin emsali).** Emre'nin (a) kararı (BEKLEYENLER.md §tbmm-turkiye) "Ankara hükûmetinin **denetlediği** toprağı" ayrı boyamaktır.
  - TBMM'nin fiilen yönettiği yerde `s: tbmm` 1920-04-23'ten başlar.
  - Yunan, İtilaf ya da Fransız işgali altındaki yerde işgal boyunca `d: osmanli` + `isg <işgalci>` yazılır. Hukukî egemen İstanbul hükûmetidir.
  - Bu yerlerde `s: tbmm`, TBMM'nin şehri **fiilen teslim aldığı** günden başlar (Mersin 1922-01-03, Bursa/Mudanya 1922-09-11 vb.; günler kaynaktan).
- **🔴 BULUNAMADI ile BAKILMADI farklıdır (UMIT, 4 Kasım 2026 gece):**
  - Bütçe, zaman ya da erişim yüzünden **hiç aramadığın** dönemin hükmü `BAKILMADI` olur.
  - `BULUNAMADI` yalnız aradığın ve kaynakta bulamadığın dönem içindir.
  - `BULUNAMADI` satırının `not` alanına nereye baktığını yaz.
- **🔴 TEK ÖLÇÜ — antlaşma devrinde hangi gün (EMRELİC, 4 Kasım 2026 gece-9):**
  - Devralan devlet toprağı zaten fiilen yönetiyorsa `s:` antlaşmanın **İMZA** günündendir.
  - Yönetmiyorsa `s:` **TESLİM** günündendir (fiilî idarenin başladığı gün).
  - **Yürürlük** günü her zaman `ic_not`'a yazılır, `s:` günü olmaz.
  - Mütareke ya da ön barış hukukî devir içermiyorsa sayılmaz. Toprak devri içeriyorsa sayılır (Petsamo).
  - Emsaller: Lozan imza 1923-07-24; Berlin imza 1878-07-13; Trieste/Trento Saint-Germain imza 1919-09-10; Toruń teslim 1920-01-18; Petsamo mütareke 1944-09-19.
- **Fransız Çinhindi (EMRELİC, 4 Kasım 2026 gece-10):**
  - Annam ve Tonkin **himayedir**: Patenôtre 1884-06-06'dan `v: fransa`, 1945-03-09 Japon darbesine kadar.
  - `s:` Nguyễn/Annam sürer. Çinhindi Birliği'ne katılış (1887) ilhak değildir; `s: fransa` yazılmaz.
  - Yalnız Koşinşin ve imtiyaz şehirleri (Hanoi, Hai Phong, Tourane) `s: fransa`'dır.
  - **Kamboçya** (gece-11): `v: fransa` 1863-08-11 → 1945-03-09.
    - Siem Reap ve Battambang 1907'ye kadar `s: siam`; Fransa'ya teslim günü kaynakla bulunur (TEK ÖLÇÜ).
  - **Laos:**
    - Vientiane doğrudan idaredir, `s: fransa` (teslim günü, kaynakla).
    - Luang Prabang `v: fransa`.
- **Künye var mı, ölç (gece-12):** "künye adayı", "künye yok" ya da "id bilinmiyor" yazmadan önce depodaki `data/devletler.js`'te devletin adını ve olası kimliğini grep'le ara. Örnek hata: Trieste Serbest Toprağı (`triyeste-serbest-toprak`) zaten vardı.
- **Hayalet devlet kontrolü (gece-11):** Fiilî yönetim ya da Draç emsaliyle erken bir gün önerirken önce künyenin `f`'sine bak. Künye o günü kapsamıyorsa yerleşimi künye gününde bırak, erken günü `ic_not`'a yaz, künye sorusunu LAB'a gönder.
- **Lübnan kıyısı (EMRELİC gece-10):** 1918-10'dan `d: osmanli` + `isg fransa`. `s:` Fransız mandası 1920-09-01'den (Büyük Lübnan). 1920-07-25 yalnız iç Suriye içindir.
- **Hukukî iade + fiilî çekiliş (EMRELİC, 4 Kasım 2026 gece-4):**
  - Hukukî devir antlaşması ile idare birlikte kurulduysa `s:` antlaşma gününden başlar (Petsamo: Moskova Mütarekesi 1944-09-19; Gîlân: Reşt 1732-02-01).
  - Hukukî devirden sonra eski askerin fiilî çekilişi gecikirse ara dönem `isg <eski>` olur; tahliye ya da teslim günü `ic_not`'a yazılır (Borçka: Berlin 1878-07-13, Batum teslimi 1878-08-25).
  - Ön barış (Ayastefanos, Villafranca) devir sayılmaz.
  - Fetih sırasındaki birkaç günlük ilerleme `isg` olarak yazılmaz; `s:` halef rejimin fiilen yönettiği günden başlar, gün yoksa ilan günü + beyan (Telavi: Gürcistan SSC 1921-02-25).
  - Fetih işgal sayılır, `s:` idareye katma gününden başlar (Kızılarvat: Zakaspi oblastı); antlaşma `ic_not`'a.
  - Endonezya 1945-49: Cumhuriyet'in fiilen yönettiği yerde `s: endonezya` 1945-08-17'den; Hollanda'nın geri aldığı yerde `s: hollanda`, 1949-12-27 devrine kadar.
- **Musul vilayeti (Musul, Kerkük, Erbil, Süleymaniye, İmâdiye…):**
  - İşgal boyunca `d: osmanli` + `isg ingiltere`.
  - `s: irak-kralligi` 1921-08-23'ten başlar.
  - Türkiye'nin 1926-06-05'e kadar süren iddiası ic_not'a yazılır.
- **Londra 1913 ve Kuzey Epir:**
  - Ege Makedonyası ve Epir'de `s: yunanistan` 1913-05-30'dan başlar.
  - Struma'nın doğusunda önce `s: bulgaristan`, Bükreş 1913-08-10'dan sonra `s: yunanistan`.
  - Kuzey Epir'de Floransa Protokolü 1913-12-17'ye kadar `d: osmanli` + `isg yunanistan`, ardından `s: arnavutluk`.
- **Fetret 1402-1413 (UMIT):** savaş günleri (Yanbolu 1410-02-13, Kosmidion 1410-06-15, Musa'nın ölümü 1413-07-05 vb.) ülke ya da bölge düzeyindedir; bir yerleşimin fiilî devir günü değildir.
  - Yerleşime özgü tanıklık yoksa hüküm "YIL düzeyi, ABİ MERKEZ" olur; gün düzeyinde KAYNAKLI sayma.
- **Jülyen takvim (EMRELİC):** Rusya 1918'e, Yunanistan 1923'e kadar Jülyen takvimi kullandı. 19. yüzyıl eserleri (Finlay, Phillips, ESBE) çoğu zaman eski takvimle tarih verir.
  - `not` alanına "Jülyen X = Gregoryen Y" yaz. Takvim belirsizse bunu beyan et.
  - 19. yüzyıl eserlerinin kaynak alanına "[19. yy kaynağı]" ekle.
- **Lozan:** imza 1923-07-24, `s:` devri için esas alınan gün budur. Yürürlük **1924-08-06**'dır (1923-08-06 değil).
- **Ülke düzeyi kaynak:** kaynak şehri değil yalnız ülkeyi anlatıyorsa (örnek: "Çin 1644'te Qing'e geçti") hüküm KAYNAKLI olabilir. Ama `not` alanına "ÜLKE DÜZEYİ" yaz. KASA bunu beyanlı yaklaşıklık olarak yazar.

## Kaynak sırası (katı)
- İslâm dünyası, Osmanlı ve komşuları: **TDV İslâm Ansiklopedisi** önce. Madde yalnız yıl veriyorsa ya da kapsamıyorsa sıradaki basamağa geç.
- Avrupa: Treccani (güncel maddeler), Deutsche Biographie / NDB, Historisches Lexikon der Schweiz, Magyar Katolikus Lexikon, Hrvatska enciklopedija, British History Online.
- Hindistan: Imperial Gazetteer 1908 (archive.org). Afrika: UNESCO GHA (archive.org açık ciltleri). Kanada: DCB. Çin, Orta Asya, İran: archive.org'daki açık Cambridge History ciltleri. İran için ayrıca Encyclopaedia Iranica.
- **Yasak ya da sınırlı kaynaklar:**
  - Vikipedi tek dayanak olamaz.
  - EB 1911 ve Enciclopedia Italiana (1929-37) eski başvuru eseridir: tek başına en çok `kismen` sayılır.
  - Forum, blog, popüler site ve YouTube kullanılmaz.
- **Arama özeti teyit değildir.** Sayfayı aç, tarihi taşıyan cümleyi oku.
- **Tarih uydurma.** Kaynak yalnız yıl veriyorsa "YIL" yaz. Hicrî tarihi hicrî aralığıyla yaz.

## Araç
- WebFetch yerine aşağıdaki betiği PowerShell aracıyla, tam yolla kullan.
- Betik robots.txt'e uyar ve istekler arasında 3 sn bekler.
- 403 ya da robots yasağı veren siteyi zorlama.
```
$A="C:\Users\user\AppData\Local\Temp\claude\C--Users-user--claude-spares-spare-8Zbs26\25fde957-3448-462a-8c9b-d06de99d88cf\scratchpad\arac\sayfa.py"
py -I -X utf8 $A tdv-ara "<kelime>"
py -I -X utf8 $A oku "https://islamansiklopedisi.org.tr/<slug>" "<anahtar1>,<anahtar2>" 300
py -I -X utf8 $A oku "<url>" "<anahtarlar>" 300
py -I -X utf8 $A ia-ara "<sorgu>" ; py -I -X utf8 $A ia-oku <kimlik> "<anahtarlar>" 300
```
- TDV araması yalnız birebir başlık döndürür. Slug'ı Türkçe madde adından tahmin et: küçük harf, şapkasız, tireli. Örnek: `bagdat`, `halep`, `kudus`.

## Çıktı
Sonuç dosyası bir JSON sözlüktür: `{"<yerleşim adı>": [ <satır>, ... ], ...}`. Partideki **her yerleşim** için bir giriş olsun. Hiçbir şey bulamadıysan boş liste yerine bir `BULUNAMADI` satırı yaz.

Satır biçimi:
```json
{"dosya_satir": "data/yerlesimler.js:1194", "alan": "s", "d": "roma-imp", "f": "-0026-01-16", "t": "0395-01-17",
 "hukum": "KAYNAKLI | ONERI | BULUNAMADI",
 "kaynak": "Eser, madde, yazar, URL",
 "alinti": "tarihi taşıyan cümleden en çok 15 kelime",
 "oneri": {"f": "...", "t": "...", "d": "..."},
 "not": "kısa açıklama"}
```
Hüküm türleri:
- **KAYNAKLI:** dönemin devleti ve uçları (en az yıl düzeyinde) kaynakta var. `oneri` boş kalır. KASA bu kaynağı dönemin `kaynak:` alanına yazar.
- **ONERI:** kaynak başka bir şey söylüyor. Değişeni `oneri`ye yaz: başka devlet, başka uç günü ya da dönem bölünmeli/birleşmeli. Bölünme gerekiyorsa `not`a yaz.
- **BULUNAMADI:** baktın ama yok. Nereye baktığını `not`a yaz.

Dosyayı **her 5 yerleşimde bir** diske yaz. Bitirmeden önce `py -I -X utf8 -c "import json;print(len(json.load(open(r'<yol>',encoding='utf-8'))))"` ile partideki yerleşim sayısını doğrula.

Bir yerleşime en çok 8-10 araç çağrısı harca. Büyük şehirlerde (Bağdat, Kahire, Şam…) TDV şehir maddesi çoğu dönemi tek seferde verir; o maddeyi bir kez oku, birden çok dönemi teyit et.

Bu bir eczane bilgisayarı ve CPU sınırlı. Ağır döngü kurma, büyük dosya indirme.
