# TEK-EKSIK-KOVA-1006 — Değişmez 2sk gün-hassas tek-eksik beş kova

TEK-EKSIK-KOVA-1006 (hazır kıta 0610 1237), 6 Ekim 2026. Görev: M-5867 (YILDIRIM BAYEZIT),
UMIT İRTİBAT aktardı. Ağaç: `C:\atlas-p84-tekeksik` @ `origin/makine/umit` b2d4c2ff.
Yetki: yalnız ölçüm + öneri; **hiçbir veri dosyasına yazılmadı, diff yok.**
Betikler (SALT OKUR, kök `__file__`den): `denetim/ARAC-TEK-EKSIK-KOVA-1006.py` (kova listesi) ·
`denetim/ARAC-TEK-EKSIK-KOVA-1006-dokum.py` (beş kovanın dökümü).

## 0. Mükerrer kapısı (ölçümden önce)
`denetim/` (umit ağacı + `C:\atlas\denetim`) beş adla ve "tek-eksik/TEK-EKSIK/tek eksik" ile
tarandı. Adlar 9–15+ dosyada geçiyor (envanter, defter, aday listeleri), ama **bu beş kova
için yazılmış bir hüküm yok** (§9 ters yön: ad geçiyor, hüküm yok). En yakın iki dosya:
- `UMIT-W41b-P3-5-OCAK1-1006.md`: tek-eksik kovaları OCAK-1 sınıfında sayıyor (14 yıl),
  gün-hassas olanlara hüküm vermiyor.
- `UMIT-W54-GDANSK-1006.md:74`: Elbing için "`almanya` 1871→1923 doğru" diyor. Bu 1871
  sahipliği hakkında; 1772 kovası hakkında değil.
⇒ Mükerrer DEĞİL, iş yapıldı.

## 1. ÖNGÖRÜ (ölçümden ÖNCE yazıldı, kovalar henüz üretilmemişti — metin değiştirilmedi)
- **Sayı: 5'ten 2'si kaynakla kapanır** (tahmin: Kili + Elbing).
- **Mekanizma:** gün-hassas tek-eksik bir kovada, kovanın öteki yerlerini açıklayan madde
  büyük bir olayı (fetih, antlaşma) anlatıyor ve eksik yer o olayın ADI ANILMAYAN bir
  parçası. Osmanlı/Avrupa yerlerinde (Kili, Elbing) kaynak o olayı yer adıyla anlatır
  (TDV "Kili" · Elbing için Thorn antlaşması/Prusya taksimi) ⇒ kaynakla kapanır.
  Kal'a-i Hum, Sloboda, Rondonópolis'te kovanın günü büyük ihtimalle atlas içi bir zincirin
  günü (komşu/temsilî). Kaynak o yer için o günü vermez ⇒ AÇIK kalır.
- Yan öngörü: en az biri (Rondonópolis ya da Sloboda) kaynakta TARİHİ BAŞKA çıkar
  (kova günü kaynaksız devralma).

## 2. Ölçüm — kovalar
`degismez2(Y_cekirdek, O, ("s",), yer_sarti=True)` ana akıştaki çağrının birebir aynısı.
- Gün-hassas (`-01-01` olmayan) ve `eksik` uzunluğu 1 olan kova: **246**. Bunların büyük
  çoğunluğu tek üyeli (kova=1); **maske üreten (kova ≥ 2) tek-eksik kova: 26.**
- Beş ad 26'nın içinde, ama **altı kova** var: **Kili iki kovada** eksik (1456-06-01 ve
  1856-03-30). Görev metni Kili'yi tek kalem sayıyordu; ikisi de aşağıda ayrı ayrı.

| # | kova | üye | eksik | kırılma (eski→yeni) | dosya |
|---|---|---|---|---|---|
| 1 | 1456-06-01 | 14 | Kili | eflak → (`v:` tâbi, kid eflak) | yerlesimler.js |
| 2 | 1856-03-30 | 4 | Kili | rusya → (`v:` Boğdan tâbi) | yerlesimler.js |
| 3 | 1654-01-18 | 4 | Sloboda bozkırı | `__BOSLUK__` → rusya | yerlesimler_ek4.js |
| 4 | 1772-08-05 | 7 | Elbing (Elbląg) | lehistan → prusya | yerlesimler.js |
| 5 | 1920-09-02 | 7 | Kal'a-i Hum (Darvaz) | buhara → `__BOSLUK__` | yerlesimler_a78_asya.js |
| 6 | 1920-10-08 | 2 | Rondonópolis | (yok) → brezilya-cumhuriyeti | yerlesimler_a78_amerika.js |

## 3. Kalem kalem

### 3.1 Kili — 1456-06-01 · NEGATİF (kaynak bu günü vermiyor; atlas günü devralınmış)
- Kovayı açıklayan madde: "Boğdan'ın haraca bağlanışı" (1456-06-01, `yer_id` Yaş, kaynak
  `bogdan`). Kovanın öteki 13 üyesi BOĞDAN yerleri. Kili ise kayıtta **EFLAK**
  (`s: 1448-01-01→1456-06-01 eflak`, kaynak "TDV kili: 1448'den sonra Eflak — YIL").
- Denenen yollar: TDV `kili` (200) · TDV `eflak` (200). Gövdeler 1456/1462/1465 ve "Kili"
  çevresinde okundu.
  - TDV kili, birebir: "Kili Kalesi 1448’den sonra tekrar Eflak Voyvodalığı’na geçti." Hemen
    ardından 1462 Eflak seferi ve "(26 Cemâziyelevvel 869 / 24 Ocak 1465)" Stefan'ın
    Kili'yi alışı geliyor. **1456 için Kili hakkında hiçbir cümle yok.**
  - TDV eflak: 1456 yalnız "Voyvoda Vlad Tepeş (1456-1462)" saltanat aralığında geçiyor. Bir
    tâbilik değişimi anlatmıyor. Tam tâbiliği Radu'ya bağlıyor: "Radu tam anlamıyla
    İstanbul’a tâbi oldu ve vergisini ödedi." (1462 sonrası).
- **Ölçülen iç tutarsızlık:** atlasta `eflak` sahipli 13 yer (Bükreş, Tırgovişte, İbrail,
  Krayova…) `s:`→`v:` geçişini **1462-06-01**'de yapıyor. **Kili tek istisna: 1456-06-01.**
  Bu gün Boğdan kovasının günü. ⇒ Kili'nin günü Boğdan'dan devralınmış görünüyor
  (D207 sınıfı); "Eflak yeri, Boğdan günü".
- Sonuç: **Kova AÇIK kalır.** Madde önerilmez; Boğdan maddesine Kili eklemek tam olarak
  yasaklanan tesadüfî kapanmayı imal etmek olur (Kili Boğdan'ın değildi).
- Öneri (UYGULAMA DEĞİL, koordinatör dosyası `yerlesimler.js`): Kili'nin
  `eflak`→`v:eflak` geçişi kaynaksız. İki seçenek:
  ① Eflak'ın öteki 13 yeriyle hizala (1462-06-01). Bu da kaynaksız bir zincir günü, sadece
  tutarlı; kayda "gün Eflak kümesiyle hizalı, kaynak yok" yazılır.
  ② `s: eflak` 1448→1465-01-24 (TDV: Stefan'ın alışı) kesintisiz bırakılır, ara tâbilik
  dilimi kaldırılır. Kaynak tâbiliği Kili için ayrıca söylemiyor.
  Önerim ①: Eflak kümesinden ayrışmanın kaynağı yok. Ama hangi seçenek seçilirse seçilsin
  1456 kovasından çıkış bir veri düzeltmesidir, madde değil.

### 3.2 Kili — 1856-03-30 · KAYNAK VAR (TDV)
- Kovayı açıklayan madde: `data/olaylar_ek5.js:379` "Paris Antlaşması: Kırım Savaşı'nın
  sonu…", `yer:"Paris, İsmail, Kahul, Bolgrad (Güney Besarabya)"`, kaynak `paris-antlasmasi`.
  Kovanın öteki üç üyesi (İsmail, Kahul, Bolgrad) adıyla anılıyor; Kili anılmıyor.
- Denenen yollar: TDV `kili` (200) · TDV `paris-antlasmasi` (200; künyesi "(30 Mart 1856)",
  gövdede Besarabya'nın bir kısmının terki var, Kili adı yok).
- TDV kili, birebir: "Kırım Harbi sonunda imzalanan Paris Antlaşması ile (1856) Rusya,
  Besarabya’nın Kili dahil Kahul (Cahul, Kahulu), İsmâil ve Bolgrad kazalarından mürekkep
  kısmını Osmanlı hâkimiyeti altında olmak şartıyla Boğdan beyliğine terketti."
- Kaynak **aynı olayı, aynı dört kazayı** adıyla sayıyor. Madde zaten öteki üçünü anıyor.
  Kili'yi eklemek alakasız maddeye ad eklemek değil, kaynağın listesini tamamlamak.
  Gün (30 Mart) TDV paris-antlasmasi künyesinden; TDV kili yalnız "(1856)" diyor.
- **Önerilen değişiklik** (UMIT parti sırası, `olaylar_ek5.js`):
  `yer:"Paris, İsmail, Kahul, Bolgrad, Kili (Güney Besarabya)"` ve `kaynak` alanına
  `· kili` eklenmesi (Kili'nin dahil olduğu TDV kili gövdesinden). `d:` metnine istenirse
  "(Kili, Kahul, İsmail ve Bolgrad kazaları)". Tahmini etki: kova 1856-03-30 KAPANIR,
  Kili YER koluyla.

### 3.3 Sloboda bozkırı — 1654-01-18 · NEGATİF (kaynak günü desteklemiyor; kayıt bunu zaten beyan ediyor)
- Kayıt kendisi diyor: "⚠️ BİTİŞ 1654-01-18 KAYNAKLI DEĞİL (Poltava'nın Pereyaslav günü
  devralınmış; çekirdek Pereyaslav maddesi olaylar_ek16.js 1654-01-08) — açık soru."
- Penceredeki tek madde: "Pereyaslav Radası — Zaporojye Kazakları Rus çarına bağlılık
  yemini etti" (1654-01-08, kaynak "bulunamadı"). Hetmanlık yerlerini anıyor (Çernigov,
  Novgorod-Seversk, Baturin).
- Denenen yollar: IEU (Internet Encyclopedia of Ukraine, CIUS) `SlobidskaUkraine.htm` (200)
  · IEU `Kharkivoblast.htm` (200). TDV denenmedi: bölge İslâm dünyası/Osmanlı komşusu
  maddesi değil (Kırım Hanlığı akın sahası; tasarruf kaynağı yok, kayıt kaynağında da öyle).
  - IEU Slobidska Ukraine, birebir: "In the early 16th century it came under the control of
    Muscovy ." · "It was subject directly to Muscovite state authority." · iskân dalgası
    "A similar influx founded Kharkiv in 1654."
  - IEU Kharkiv oblast, birebir: "In the 16th century the lands became nominally part of
    Muscovy ."
- **Kaynaklardan hiçbiri bölgeyi Pereyaslav'a bağlamıyor.** Slobojanşçina Hetmanlığın
  parçası değildi ("In contrast to the Hetman state , Slobidska Ukraine possessed no
  territorial autonomy"). Pereyaslav maddesine Sloboda eklemek tesadüfî kapanma imalatı olur.
- Sonuç: **Kova AÇIK kalır.** Yan öngörü tuttu: kova günü kaynaksız devralma.
- Not (öneri, koordinatör): kaynak "16. yüzyıl başında Moskova kontrolü (nominal)" diyor.
  Kayıttaki `__BOSLUK__` 1441→1654 bu cümleyle **çelişki değil** ama gerilim içinde. İkinci
  bir kaynak olmadan çelişki denmez (§4), o yüzden yalnız not. Kaynaklı tek yıllı olgu
  "Kharkiv 1654" (iskân). Bu bir el değiştirme değil.

### 3.4 Elbing (Elbląg) — 1772-08-05 · KAYNAK VAR, BÖLGE DÜZEYİNDE (şartlı)
- Kovayı açıklayan madde: `data/olaylar_ek16.js:189-195` "Polonya'nın Birinci Paylaşımı —
  Rusya ve Avusturya'ya toprak kaybı". `yer` yalnız Rus ve Avusturya payındaki yerleri
  sayıyor (Dünaburg, Polotsk, Vitebsk, Lvov, Yazlofça). `d:` metni "Prusya kıyı bölgesi
  Kraliyet Prusyası'nı devraldı" diyor, ama Prusya payından tek yer anılmıyor ve **başlık
  Prusya'yı hiç anmıyor**. `kaynak:"bulunamadı"`.
- Denenen yollar:
  - Britannica `place/Elblag`: curl 403; tarayıcıda açıldı. Gövdede 1772/partition
    **YOK** (yalnız 1237, 1246, 1580, 1945). NEGATİF.
  - Britannica `event/Partitions-of-Poland` (tarayıcı): **VAR**, birebir: "On August 5, 1772,
    Russia, Prussia, and Austria signed a treaty that partitioned Poland." · "Prussia gained
    the economically valuable province of Royal Prussia, excluding the cities of Gdańsk
    (Danzig) and Toruń, and also gained the northern portion of the region of Great Poland
    (Wielkopolska)."
  - Britannica `place/Poland/The-First-Partition`: Elbing/Royal Prussia geçmiyor.
  - Britannica `place/West-Prussia`: hata sayfası.
  - Encyklopedia PWN `haslo/Elblag;3897254.html` (arama sonucu): **ölçülemedi**. Sayfa
    "Serwis Nieaktywny" diyor, servis kapalı (gövde yok ≠ yok).
  - elblag.eu `historia-miasta.html`: 403.
  - Cambridge, Friedrich, *The Other Prussia* (kitap sayfası): Elbing adı yalnız arama
    özetinde; açılan sayfada gövde yok. Dayanak sayılmadı.
- **Hüküm:** Kaynak aynı olayı ve aynı günü veriyor ve Prusya payını "Royal Prussia,
  Gdańsk ve Toruń HARİÇ" diye tanımlıyor. Elbing Kraliyet Prusyası şehridir ve istisna
  listesinde yok ⇒ Elbing'in 1772'de Prusya'ya geçtiği bu cümleden **çıkarım** olarak
  okunuyor, **şehir adıyla yazılmış değil.** §4 bayrak kuralı halka için bölgeden şehre
  taşımayı yasaklıyor; kronoloji maddesinin `yer` listesi için hüküm koordinatörde.
- **Önerilen değişiklik** (UMIT parti sırası, `olaylar_ek16.js`). Kova kapansa da kapanmasa
  da yapılmalı, çünkü madde kendi `d:`siyle çelişiyor:
  ① `b:` → "Polonya'nın Birinci Paylaşımı — Rusya, Prusya ve Avusturya'ya toprak kaybı"
  ② `d:`de "Kraliyet Prusyası'nı (Gdańsk ve Toruń hariç)" ③ `kaynak:` "bulunamadı" →
  "Britannica, 'Partitions of Poland' (5 Ağustos 1772; Prusya: Royal Prussia, Gdańsk ve
  Toruń hariç)" ④ ŞARTLI: `yer` listesine "Elbing (Elbląg)", yanında "şehir adı kaynakta
  yok; Royal Prussia − (Gdańsk, Toruń) tanımından" şerhiyle.
  ④ olmadan kova açık kalır. ④ ile kapanır ve kapanış YER koluyla olur. Şehir adını taşıyan
  ikinci bir kaynak (PWN servis dönünce, ya da Elbląg belediyesi) ④'ü şartsız yapar.

### 3.5 Kal'a-i Hum (Darvaz) — 1920-09-02 · NEGATİF + 🔴 KOVA TESADÜFÎ KAPANIYOR
- Kayıt: `buhara` 1873→1920-09-02, sonra `__BOSLUK__` 1920-09-02→1920-10-08. Kaynağı
  "buhara künyesi 1920-09-02'de kapanıyor; emir Doğu Buhara'da 1921 başına dek direndi —
  künye penceresi dışı, komşuya itilmedi". Yani Darvaz için o gün bir el değiştirme yok;
  kırılma künyenin bitişinden doğuyor.
- 🔴 **ASIL BULGU — "tek eksik" yanlış bir resim.** Kovanın öteki altı üyesi (Buhara, Hisar,
  Karşi, Külâb, Termez, Şehrisebz; hepsi buhara→sovyet-rusya) **TAMAMI** tek bir maddeyle,
  TARAF kolundan kapanıyor: `kronoloji_sinir_avrupa_orta.js:67` "Riga Barışı: Letonya–Sovyet
  Rusya sınırı" (1920-08-11, `taraflar:["letonya","sovyet-rusya"]`). Ölçüldü:
  `_2s_tarafi_aniyor` her altısında yalnız bu maddeyi döndürüyor. **±30 günde Buhara'yı
  anan madde 0.**
  ⇒ Bu kova "tek eksik" değil, **yedi eksik**: altısı 2sk'nın "yalnız taraf" kolunun
  tesadüfî kapanmasıyla gizleniyor. Kal'a-i Hum yalnız taraf kolunun yakalayamadığı tek
  üye (yeni sahip `__BOSLUK__`).
- Denenen yollar: TDV `buhara` (200) · TDV `buhara-hanligi` (200; 1920/Darvaz/Doğu Buhara
  geçmiyor) · TDV `darvaz` (**302**, ölü slug).
  - TDV buhara, birebir: "1920 yılı Ağustos sonunda son emîr Âlim Han Kızılordu’nun şehri
    işgali sonunda tahtından uzaklaştırıldı ve 6 Ekim 1920’de Buhara Hanlığı ilga edildi."
- Sonuç: **Kal'a-i Hum için kova AÇIK kalır.** Darvaz'ın o gün el değiştirdiğini anlatan
  kaynak yok; kaynak tam tersine emirin doğuda sürdüğünü söylüyor (kaydın kendi
  kaynağı).
- Öneriler (UYGULAMA DEĞİL):
  ① (UMIT parti) Kovanın **altı üyesi için gerçek madde**: "Kızıl Ordu Buhara'yı aldı —
  Emir Âlim Han tahttan uzaklaştırıldı", `t:` 1920-09-02 değil, kaynağın hassasiyetiyle.
  TDV "Ağustos sonu" diyor (ay) ⇒ gün kaynaksız. Ay hassasiyeti `t:"1920-08"` biçimiyle
  YAZILMAZ (§8, ayın 1'ine genişler). Gün veren ikinci bir kaynak bulunana kadar madde
  yazılırsa gün "bulunamadı" beyanıyla. ⚠️ Bu madde Kal'a-i Hum'u ANMAMALI.
  ② (koordinatör, künye) TDV "6 Ekim 1920'de Buhara Hanlığı ilga edildi" diyor, künye
  1920-09-02'de kapanıyor. Bu **iki kaynak çelişkisi değil**, künyenin günü kaynak değil
  (§4). D205 sınıf ② adayı (aynı polity sürüyor: emir Doğu Buhara'da). Künye penceresi
  doğuda uzatılırsa Kal'a-i Hum'un 09-02 kırılması ortadan kalkar ve kova sorunu kendiliğinden
  çözülür. Ölçmeden hüküm vermiyorum.
  ③ (denetle.py sahibi) Taraf kolunun "Riga Barışı → Buhara" eşleşmesi `sovyet-rusya`
  tarafı üzerinden kuruluyor. Aynı mekanizma başka `→sovyet-rusya` kovalarını da
  kapatıyor olabilir. **Ölçülmedi.** Ayrı kalem önerisi: 1918-1923 `→sovyet-rusya`
  kırılmalarında taraf kolunun kapattığı ama yer adı geçmeyen maddelerin coğrafî uzaklığı.

### 3.6 Rondonópolis — 1920-10-08 · KAYNAK VAR (IBGE), ama kırılma idarî kuruluş
- Kayıt: `kur:"1920-10-08"`, `s:` 1920-10-08→ brezilya-cumhuriyeti (öncesi yok). Kaynağı
  zaten kayıtta: IBGE Cidades.
- Doğrulandı (6 Ekim 2026, `servicodados.ibge.gov.br/api/v1/biblioteca?codmun=5107602&aspas=3`,
  200), `FORMACAO_ADMINISTRATIVA` birebir: "Distrito criado, com a denominação de
  Rondonópolis, pela Resolução Estadual n.º 814, de 08-10-1920, subordinado ao município de
  Cuiabá."
- Kova üyesi Kal'a-i Hum, "Buhara Halk Sovyet Cumhuriyeti ilan edildi" maddesiyle kapanıyor
  (gerçek kapanış). Rondonópolis'i anan madde yok.
- Hüküm: **kaynak var ve gün tam.** Ama bu bir el değiştirme değil, bir noktanın doğuşu.
  Bölge önce de sonra da Brezilya; haritada renk değişimi beklenmez (ölçülmedi: o tarihte
  komşu peteğin sahibi kontrol edilmedi).
- Seçenekler:
  ① (UMIT parti) Yeni madde: `t:"1920-10-08"`, b: "Rondonópolis distrito'su kuruldu (Mato
  Grosso, Resolução Estadual 814)", `yer_id:"Rondonópolis"`, kaynak: IBGE Cidades —
  Formação Administrativa (yukarıdaki birebir cümle). Kova kapanır, YER koluyla. Uydurma
  değil, alakasız maddeye ad ekleme de değil: kendi olayının maddesi.
  ② (denetle.py) `kur:` ile doğan ve komşusuyla aynı sahibe sahip noktanın ilk `f:`
  günü kırılma sayılmasın. Bu bir ölçüt değişikliği, tavan ailesine dokunur.
  Önerim ①: kaynak hazır, ölçütü değiştirmez. ② ayrı bir tartışma, ama bu kovanın
  Brezilya `a78` noktalarında onlarca eşi var (§2'deki 246'nın içinde Brezilya kuruluşları:
  Lins, Marabá, Porto Velho…). Bu yüzden sınıf düzeyinde karar verilmeli.

## 4. Öngörü ↔ ölçüm
| | öngörü | ölçüm |
|---|---|---|
| kalem sayısı | 5 | **6 kova** (Kili iki kovada) |
| kaynakla kapanan | 2 (Kili + Elbing) | **2 kesin** (Kili-1856 TDV · Rondonópolis IBGE) + **1 şartlı** (Elbing, bölge düzeyi) |
| açık kalan | 3 | **3** (Kili-1456 · Sloboda · Kal'a-i Hum) |

- **Sayı kabaca tuttu, eşleme tutmadı.** "Kili kapanır" yarı doğru: 1856 kapanıyor, 1456
  kapanmıyor. Rondonópolis'in açık kalacağı öngörüsü **YANLIŞ**: kaynak kayıtta zaten
  vardı, eksik olan yalnız madde.
- **Mekanizma** ("olay maddesi var, eksik yer adı anılmıyor, kaynak adıyla sayıyor") Kili-1856
  ve Elbing'de **tuttu**. Elbing'de kaynak şehri değil bölgeyi sayıyor, bu öngörülmemişti.
- **Yan öngörü** ("kova günü kaynaksız devralma") **tuttu, üç kez**: Kili-1456 (Boğdan günü),
  Sloboda (Poltava/Pereyaslav günü), Kal'a-i Hum (künye bitişi).
- **Öngörülmeyen:** 1920-09-02 kovasının "tek eksik" değil yedi eksik olması. Altı üye
  Riga Barışı ile tesadüfî kapanıyor. Görevin uyardığı TESADÜFÎ KAPANMA sınıfının bu kova
  üzerinde **ölçülmüş bir örneği.**

## 5. Bulunamayanlar (adıyla)
- Kili 1456 için hiçbir kaynakta gün (TDV kili, TDV eflak).
- Sloboda 1654-01-18 için kaynak (IEU iki madde). TDV denenmedi, gerekçesi §3.3'te.
- Elbing'i 1772 ile ŞEHİR ADIYLA anan erişilebilir kurumsal metin. Britannica Elblag
  gövdesinde yok; PWN servis kapalı (ölçülemedi); elblag.eu 403.
- Buhara'nın Kızıl Ordu'ya düşüşü için GÜN veren kaynak. TDV "Ağustos sonu" diyor; TDV
  `darvaz` 302.
