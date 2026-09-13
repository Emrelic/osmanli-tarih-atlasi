# PAKET-ARAS0048 · ARAŞTIRMA — parti-emrelic-0048 (H-0001 · H-0009 · H-0010 · H-0011 · H-0002) · 13 Eylül 2026

**Sahip:** PAKET-ARAS0048 (işçi, 1.MURAT'a) · **Yazma:** yalnız bu dosya + `denetim/YAMA-0048-0913.json` + `denetim/ARAC-0048-*-0913.py`
**Proje verisine / koduna hiçbir yazma yapılmadı** (koşu 10 sürüyor, `§7`). Motor koşturulmadı.

**Evren:** `arac/girdi.py` `GIRDI_DOSYALARI` → 79 dosya · 3818 nokta (ölçüldü). Yayındaki geometri: `data/donemler.js` + `data/devletler_harita.js` (koşu 9 çıktısı, r7487) · `data/petek_govde.js` taban petekleri **3808** (koşu 9 girdisi — bugünkü 3818'den 10 eksik; taban hücre sorguları bu yüzden "koşu 9 anı"dır).

**Aletler (tekrar koşulabilir, salt okur):**
```
py denetim/ARAC-A6A-OLC-0913.py kutu GUN LAT1 LAT2 LON1 LON2   # (A6A'nın aleti) kutudaki noktalar + sahip
py denetim/ARAC-A6A-IZGARA-0913.py GUN LAT1 LAT2 LON1 LON2 ADIM # (A6A) en-yakın-nokta ızgarası
py denetim/ARAC-0048-GEOM-0913.py GUN LAT1 LAT2 LON1 LON2       # YAYINDAKİ gövdeler: yabancı parça · geçerlilik · Osmanlı parça · serbest hat (u, segment km)
py denetim/ARAC-0048-PETEK-0913.py GUN "lat,lon" …              # test noktası hangi TABAN petekte + o günkü sahibi
```
**TDV:** 45 slug denendi → 30 canlı (gövde okundu) · 15 ölü (302): `lahsa-eyaleti · benu-halid · beni-halid · hive · turkmen · mangislak--kazakistan · ustyurt · abdullah-han-ii · mihal-voyvoda · mihai · cesur-mihail · mihai-viteazul · zitvatorok · bocskai-istvan · bocskay · haclova · hacova-meydan-muharebesi · uzun-savaslar · saraycik · bahreyn--ada · zubare`. Canlı ve okunan: `katar · bahreyn · lahsa · ahsa · harizm · harezm · turkmenler · ebulgazi-bahadir-han · secere-i-terakime · mangislak · abdullah-han · hive-hanligi · nogaylar · salur · eflak · bogdan · erdel · koca-sinan-pasa · sinan-pasa-koca · zitvatorok-antlasmasi · yergogu · mehmed-iii · abbas-i · yemen · hurmuz--iran`.
**Akademik:** Stevens 2024 (*Keshif* 2/1, doi 10.25365/kshf-24-01-09) **okundu** (pypdf; WebFetch "okunamaz" dedi — `§4⑦` tuzağı, ikinci çıkarıcı metni verdi) · Bamford'un Kármán & Kunčević 2013 incelemesi (*Rosetta* 18) **okundu** · Kármán & Kunčević 2013 kitabın kendisi ve Panaite'nin bölümü **okumadım** (erişim yok) · Vikipedi yalnız yön bulmak için (Cecora 1595, Mănăstirea Dealu 1598) — **dayanak değil**.

**Damga sözlüğü:** `bulunamadı` = arandı, yok · `okumadım` = kaynak biliniyor, açılmadı · `ölçülemedi` = alet/erişim ölçemedi.

---

## Özet

| kalem | tarih · alan | hüküm | öneri |
|---|---|---|---|
| H-0001 beyaz bölge | 1590-03-21 · Üstyurt · Karakum · Aşağı Yayık | 🟡 **üç mekanizma üst üste**: ① kasıtlı dolgu (4 nokta, `bos:"kabile"`) ② kurulmamış nokta peteği boş (Guryev kur 1640 · Krasnovodsk kur 1869) ③ 200 km tavan dışı şeritler | Y1 aşiret adlarının haritada yazılması (arayüz) · Y2 Aşağı Yayık–Emba Nogay dolgu noktası (🟡 son gün bulunamadı) · **ek bulgu Y3** Hârizm 1593-1598 Özbek (Buhara) işgali veride YOK |
| H-0011 Doha/Katar Safevî mi | 1602-01-01 | 🔴 **harita yanlış** — Katar Safevî değildi; TDV `katar`: 1559 Katar sancağı, *"tartışmasız biçimde Osmanlı hâkimiyetindeki topraklar"* | Y4 veri (dolgu → tâbi 1559-1670) · Y5 motor (`_dolgu_kumesi` kasıtlı boşluğu boyamasın) |
| H-0009 tuhaf şekil | 1602-01-01 · Katar doğusu–Abu Dabi batısı | ⚙️ **motor** — Safevî gövde parçası 2762 = **Doha'nın kurulmamış peteği** (389), dolgu kapısıyla Safevî'ye katılmış; halka **kendini kesiyor** (geçersiz poligon) | Y5 (kök) + Y6 (geçersiz halka onarımı) |
| H-0010 görüntü bozulması | 1602-01-01 · Katar batısı z8 | ⚙️ **motor/render — bilinen ÜÇGEN kusuru** (`BULGULAR-UCGEN-19AGU.md`): serbest hat 60, u=39,5 km, segmentler 0,31 km … **257 km** | Y7 (`uret_petek.py` serbest hat sadeleştirme — A çaresinin kendi yorumunda "TAM ÇÖZMÜYOR" diye kayıtlı) |
| H-0002 üç voyvodalık isyanı | 1594-1606 · Eflak · Boğdan · Erdel | 📋 **karar araştırması** — veri bugün 47 noktanın 27'sini kesintisiz **tâbi** gösteriyor; kronoloji "elden çıktı" diyor ⇒ harita-kronoloji çelişkisi | Seçenek C (tâbi zemin + ayrı "isyan" katmanı/künyesi, `san-fan` emsali) önerilir · karar Emre'nin |

**Hüküm sayımı:** veri yanlış **1** (H-0011) · motor **2** (H-0009 · H-0010) · kasıtlı+motor+noktasızlık karışık **1** (H-0001) · karar **1** (H-0002) · ek bulgu **2** (Hârizm 1593-98 · Aşağı Yayık Nogay noktasızlığı).
**Yama önerisi:** 7 kalem (JSON `yamalar`) · H-0002 için 3 seçenek + tarih iskeleti (JSON `karar_H0002`).

---

## H-0001 — "Bu beyaz bölgede hiç mi devlet yapısı ve yerleşim yeri yok?"

**Görsel:** 1590-03-21 (Ferhat Paşa Antlaşması maddesi), kutu 37,16-48,45°K · 49,46-64,94°D, z4.9. Hazar'ın doğusu: Mangışlak–Garabogaz kıyısında dar Hîve şeritleri, doğuda Hîve ana gövdesi, kuzeyde Nogay; arada geniş krem-beyaz alan ve içinde **dört kahverengi bulanık benek**.

**Ölçüm (kutu 37-49°K · 46-66°D, 1590-03-21):** 67 nokta · `safevi 15 · OSMANLI 18 · hive 7 · rusya 4 · kazak-hanligi 4 · nogay 2 · buhara 2 · gilan-kiya 2 · TABI 1 · (kurulmamış) 8 · SAHİPSİZ 4`.
Dört sahipsizin dördü de **kasıtlı dolgu** (`kasitli_bosluk:true`, `bos:"kabile"`, `yerlesimler.js`): `Üstyurt platosu (batı)` 43,8/53,5 · `Üstyurt platosu (doğu)` 43,5/56,5 · `Uzboy` 39,9/55,5 · `Karakum` 39,5/58,5 — görseldeki dört benek tam bunlar (benek = `bos:"kabile"` gösterimi).

Izgara (0,25°, 38-46,5°K · 50-60°D): beyaz hücrelerin sahipleri
```
Üstyurt (batı) dolgu   137 hücre   sahipsiz (kasıtlı)
Üstyurt (doğu) dolgu   120         sahipsiz (kasıtlı)
Uzboy dolgu             95         sahipsiz (kasıtlı)
Karakum dolgu           90         sahipsiz (kasıtlı)
Guryev (Atyrau)         58         SAHNEDE DEĞİL — kur 1640
Krasnovodsk             52         SAHNEDE DEĞİL — kur 1869
Aşkabad · Ferahâbâd     15         sahnede değil
```
Taban petek sorgusu (`ARAC-0048-PETEK`): 47,5/51,7 → Guryev peteği · 40,2/53,5 → Krasnovodsk peteği · 44,0/54,5 → Üstyurt (batı) dolgusu · **46,5/52,5 ve 42,2/57,6 → HİÇBİR petekte değil** (200 km tavanı / kara maskesi dışı).

**Hüküm: 🟡 üç ayrı mekanizma.**
1. **Kasıtlı** (büyük kısım): veri bu alanı bilerek kimseye vermiyor; gerekçe *"Karakalpak ve Türkmen aşiretlerinin göçer kullanımı, devlet denetimi dışında"*.
2. **Motor — kurulmamış nokta**: Guryev ve Krasnovodsk peteklerinin kara komşuluğunun ≥%90'ı sahipli değil (komşuları kasıtlı dolgu) ⇒ `_kusatilmis` devretmiyor ⇒ petek BOŞ (A6A H-0005'teki Uman vakasının aynısı).
3. **Motor — tavan**: bazı şeritler hiçbir noktaya 200 km'den yakın değil.

**Kaynak — bölgede 1590'da ne vardı:**
- TDV `mangislak`: *"XVI. yüzyılın başında Hârizm'de kurulan Hîve Hanlığı Mangışlak'ı da kendine bağlamayı başardı. Mangışlak Türkmenleri'nin ancak bir asır sonra nisbeten bağımsızlıklarını kazanabildiği…"*; *"XVI. yüzyılın sonlarında Mangıtlar'ın saldırısına uğradı"*. ⇒ Veri (Mangışlak · Garabogaz · Çeleken `hive` 1512→1600, sonra `turkmen`) **bu cümleyle uyumlu**.
- TDV `turkmenler`: XVI. yy başında Mangışlak'ta **Salur** (İçki Salur kıyıda, **Taşkı Salur "doğuda Hârizm'den gelen ana yol üzerinde"** — yani Üstyurt kervan yolu), **Esen İli** (Çavuldur · İgdir · Soynacı); XVI. yy ikinci yarısında Emba'daki Mangıt/Nogay akınları üzerine **Teke ve Yomutlar Küçük Balhan–Kızılarvat arasındaki Küren dağına** göçtü; Ceyhun 1575-78'de yatak değiştirdi.
- TDV `nogaylar`: Nogay ordasının *"doğu sınırının Emba nehri üzerinden Aral denizine kadar uzanmakta olduğu"*.
- **Yerleşim:** bu alanda 1590 için kaynakta adı geçen yerleşik şehir **bulunamadı**. Üstyurt kervansarayları (Beleuli vb.) Altın Orda dönemidir; Vezir/Dev-Kesken için TDV'de kayıt **bulunamadı** (`hive-hanligi`, `harizm` gövdelerinde geçmiyor).

⇒ **Kullanıcının sorusunun cevabı:** *devlet yapısı* olarak yok (göçer Türkmen boyları, kıyıda Hîve'ye gevşek bağlı), *yerleşik şehir* olarak kaynakta yok; ama **boyların adı var** ve harita onları hiç söylemiyor. Ayrıca kuzeydeki beyaz dilimin bir kısmı (Aşağı Yayık) kasıt değil **noktasızlık/kuruluş artefaktı** — orası 1590'da Nogay yurdudur.

**Öneri:**
- `Y1` (arayüz, Oturum 1): `bos:"kabile"` beneklerine `neden:`deki boy adları haritada kısa etiket olarak yazılsın (*"Salur · Esen İli Türkmenleri"*, *"Teke · Yomut"*) — `app.js:1851` `halka` gösterimi *"yerli aşiretler… devletlerinin yanına yazalım"* (Emre, 20 Ağu) kararının zaten tarif ettiği şey. Dolgu noktalarının `neden:` metinleri TDV `turkmenler`/`mangislak` cümleleriyle zenginleştirilsin.
- `Y2` (veri, 🟡): Aşağı Yayık–Emba dolgu noktası (≈47,4°K · 51,8°D), `s: nogay` — dayanak TDV `nogaylar` (Emba sınırı, XVI. yy). **Başlangıç ve bitiş günü bulunamadı** (`saraycik` 302); komşu `Emba (Cem)` kaydının 1500/1644 günlerinin kendi kaynağı yok ⇒ `§4` şartlı-komşu kuralı **karşılanmıyor**, gün devralınmadı. Yazılmadan önce akademik kaynak (ör. Trepavlov, *Nogay Ordası Tarihi* — **okumadım**) aranmalı.
- `Y3` (veri, **ek bulgu**): **Hârizm 1593-1598 Özbek (Buhara) işgali veride yok.** `Hîve · Köhne Ürgenç · Hazârasp · Küngrat` hepsi `hive` 1512→1740 kesintisiz. TDV `hive-hanligi`: *"Abdullah Han 1593'te Hârizm ülkesine girdi"* · *"1598'de II. Abdullah Han'ın ölümüyle Özbek işgali sona erdi"*; TDV `harizm`: *"1593-1598 yıllarında II. Abdullah Han'ın istilâsına"*; TDV `abdullah-han`: *"Halkı isyan eden Hârizm'i 1596'da yeniden zapteden"*. ⇒ `s: buhara 1593-01-01 → 1598-01-01` (künye `buhara` 1500-1920, pencere tutuyor). ⚠️ TDV yalnız yıl veriyor; 1598 bitişi Abdullah Han'ın ölümü ("1598 yılı başlarında") ⇒ `1598-01-01` kaba güvenli. ⚠️ 1595-96 isyan arası ayrı dönem yapılmadı (gün yok). ⚠️ **Değişmez 2: bu kırılmalar için madde YOK** (kronoloji taraması `bulunamadı`) — iki madde yazılmadan uygulanmamalı.

---

## H-0011 — "Doha/Katar bu tarihte Safevîlerde miymiş?"

**Görsel:** 1602-01-01 (madde: *"Safevîler'in Bahreyn'i Portekiz'den alması"*, `olaylar_ek13.js:286`), Katar'ın doğusu "SAFEVÎ İRAN" pembesiyle boyalı.

**Ölçüm (kutu 22-28°K · 48-54°D, 1602-01-01):** 8 nokta · `Katîf · Cübeyl · Lahsa · Ukayr` OSMANLI · `Manama (Bahreyn)` ve `Kiş` safevi · `Katar Yarımadası (iç, dolgu)` **sahipsiz, kasıtlı** · `Doha (Katar)` **kurulmamış (kur 1825), kasıtlı**.
Katar'da **Safevî sahipli tek bir nokta bile yok.** Pembe, sahipsiz bir peteğin Safevî'ye **katılmasından** geliyor (aşağıda H-0009).

**Kaynak:**
- TDV `katar` (Zekeriya Kurşun, gövde okundu): *"Osmanlı belgeleri arasındaki en eski örnek 1555 yılına aittir"* (Şeyh Muhammed b. Sultan b. Müsellem idaresindeki Katar ahalisi); *"Osmanlı Devleti önce Lahsâ beylerbeyiliğini, arkasından da Katar sancağını kurarak buraya idareciler tayin etti (1559)"*; sancakbeyi Bahreyn seferine katılınca *"burada doğrudan bir Osmanlı idaresinin tesisi girişimi yarım kalmış oldu; ancak Benî Müsellem'e mensup mahallî idarecilerin Lahsâ ile ilişkileri sebebiyle burası da **tartışmasız biçimde Osmanlı hâkimiyetindeki topraklar içinde yer almıştır**"*. Sonraki bilgi 1776 (Âl-i Halîfe, Zübâre). 1602 için Safevî anılmıyor.
- TDV `bahreyn`: Portekizliler adaları *"1602'de İran'a bağlı kuvvetler tarafından dışarı çıkarılmalarına kadar"* tuttu — **yalnız adalar**. TDV `abbas-i`: *"Bahreyn ise daha önce Allah Virdî Han tarafından fethedilmişti"* — yarımadadan söz yok.
- 1670-1776 arası Katar'ın bağlılığı (Benî Hâlid?): TDV `katar`da **bulunamadı**.

**Hüküm: 🔴 harita yanlış.** Safevî 1602'de Katar'a sahip değildi; Safevî fethi Bahreyn adalarıyla sınırlı. Üstelik veri zaten Safevî demiyor — **motor boyuyor** (H-0009).
⚠️ **İkinci çelişki, verinin kendi gerekçesinde:** dolgu noktasının `neden:` alanı *"yarımadanın merkezî bir idareye ilk somut bağı 1868/1871"* diyor; TDV `katar` **1559 sancak + "tartışmasız Osmanlı hâkimiyeti"** diyor. `§4` gereği kaynak esastır.
📌 **Bu yer-tarih üçüncü kez şikâyet konusu:** `0021/H-0007` (Bahreyn) ve `H-0021` (Katar içi Ukayr'a emiliyor) aynı 1602 kesitindendi; dolgu noktası o şikâyetle eklendi (`483787c`, 20 Ağu). Dolgu, Osmanlı emilmesini durdurdu ama **Safevî emilmesini** açtı — `§3.5.1` *"iki uç da ölçülür"* kuralının tam vakası.

**Öneri:**
- `Y4` (veri): `Katar Yarımadası (iç, dolgu)` → `kasitli_bosluk` kaldırılır, `v:[{f:"1559-01-01", t:"1670-01-01", k:"Katar (Benî Müsellem) — Lahsâ beylerbeyiliğine bağlı", statu:"vassal"}]`, `kaynak:` TDV `katar` alıntısı. **1670 sonrası bulunamadı ⇒ sahipsiz kalır** ve `neden:` "bilinmiyor" diye düzeltilir (kasıtlı hüküm DEĞİL). Tâbi seçimi gerekçesi: TDV doğrudan idarenin *"yarım kaldığını"*, hâkimiyetin mahallî Benî Müsellem idarecileri üzerinden yürüdüğünü söylüyor. ⚠️ 1559 başlangıcı Lahsa kaydının `d:` 1550'siyle çelişmez (sancak 1559'da kuruldu).
- Değişmez 2: 1559 kırılması için madde gerekir — **bulunamadı** (tarama yapılmadı: okumadım).
- `Y5` (motor): H-0009'da.

---

## H-0009 — "Bu tuhaf şekilli boyamanın manası nedir?"

**Görsel:** 1602-01-01, 23,00-26,08°K · 51,12-53,21°D, z6.7: Katar doğusundan güneye, Abu Dabi batısına kadar uzanan yarı saydam pembe, iç içe üçgenler ve düz kenarlar; altta kavisli kesik çizgi.

**Ölçüm — yayındaki geometri (`ARAC-0048-GEOM`):**
```
safevi parça 2762   dnm 1602-01-01→1603-10-21   0,772°² (≈8.600 km²)
   bbox 51,35-52,67°D · 23,44-25,94°K
   valid FALSE — Self-intersection [51,443 · 24,609]      ← KENDİNİ KESEN HALKA
safevi parça 2764/2765   50,46-50,67°D · 25,79-26,28°K   ← Bahreyn adaları (Manama)
safevi 2624/2625/2626/2763   ≤0,006°²                     ← Abu Dabi kıyısı adacıkları
```
Taban petek (`ARAC-0048-PETEK`): 25,29/51,53 · 25,0/51,45 · 24,6/51,44 · 23,6/51,8 → **dördü de petek 389 «Doha (Katar)»**. Yani parça 2762 **Doha'nın peteği**; 1602'de Doha sahnede değil (kur 1825) ve kaydı `kasitli_bosluk:true`.

**Mekanizma (kod okundu):**
- `uret_petek.py:3307 _kusatilmis()` → `kasitli_bosluk` noktalarını **atlıyor** (satır 3317: *"KAYNAKLI hüküm: boşluk kasten öyle"*). ✓
- `uret_petek.py:4360 _dolgu_kumesi()` (EKLEYİCİ KAPI) → **`kasitli_bosluk`a hiç bakmıyor.** "Dördüncü sınıf" kuralı (`_dordurcu`: `kur:`/`bit:` yüzünden sahnede olmayan) Doha'yı `bos_ix`e alıyor; puan kapısı (0-200 km 4p …, örtme dilimleri) peteği en çok puanlayan devlete, burada **Safevî**ye (Manama ≈ 110 km) veriyor.
- ⇒ İki fonksiyon aynı bayrağa **ters davranıyor**: biri kasıtlı boşluğu korur, öteki doldurur.

**"Tuhaf şekil"in üç bileşeni:**
1. Petek 389 bir Voronoi hücresi: kuzeyde Katar doğu kıyısı, güneyde ~23,4°K'ye kadar noktasız çöl (Abu Dabi batısında hiç nokta yok — `§2` emilme) ⇒ **uzun sivri üçgen**.
2. Alttaki kavis: 200 km tavan yayı (hücre Doha'dan ~200 km'de kesiliyor; kutu içi ölçüm 23,44°K alt sınırı bununla uyumlu — ✓ yaklaşık, yay ayrıca ölçülmedi).
3. İç içe üçgenler/çizgiler: halka **kendini kesiyor** ⇒ dolgu çift-tek kuralıyla boşluk/örtüşme üretir, `devlet-cizgi` kendini kesen hattı iç çizgi olarak çizer. Görseldeki yarı saydamlık `SIYASI_KIP.yumusak` (devlet-dolgu 0,44) kipiyle uyumlu — kipin açık olduğu **ölçülemedi**.

**Hüküm: ⚙️ motor.** Veri Katar'ı Safevî'ye vermiyor; pembe, kasıtlı boşluğu tanımayan dolgu kapısının ve geçersiz halkanın ürünü.

**Öneri:**
- `Y5` (motor, Oturum 0): `_dolgu_kumesi` içinde `if y.get("kasitli_bosluk"): continue` (bos_ix'e eklemeden önce) — `_kusatilmis`in 3317. satırıyla aynı ilke. ⚠️ **Bedeli ölçülmeli:** `kasitli_bosluk` taşıyan ve `_dordurcu`/`bolge` sınıfıyla bugün doldurulan bütün petekler boşalır; `Değişmez 1b` ve Nâsıriye vakası (BULGULAR-DORDUNCU) yeniden sınanmalı. Doha'nın bayrağı 1825-1871 "devletsiz" dönemi için konmuş, 1825 öncesi için değil ⇒ alternatif: bayrağı zamanlı yapmak (`kasitli_bosluk` → `bos_pencere:[{f,t}]`), bu **şema kararı** (koordinatör).
- `Y6` (motor): yabancı gövde parçaları havuza yazılmadan `make_valid`/`buffer(0)` ile onarılsın ve geçersiz parça sayısı koşu raporuna basılsın (`BULGULAR-UCGEN` Aday 1 yalnız **Osmanlı o/v** parçalarını ölçmüştü — `DEVLET_PARCALAR` **ölçülmemişti**; bugün ilk geçersiz örnek bulundu). Toplam geçersiz yabancı parça sayısı **ölçülmedi** (tek kutu sorgulandı).

---

## H-0010 — "Bu görüntü bozulması sebebi nedir?"

**Görsel:** 1602-01-01, 24,78-26,41°K · 50,60-51,80°D, z8: Katar batı kıyısında Osmanlı kırmızısından dışarı fırlayan bulanık **ışın/diken** biçimli lekeler; ortada beyaz kama, sağda Safevî pembesi.

**Ölçüm (`ARAC-0048-GEOM`, aktif dönem `1600-10-20 → 1603-10-21 "Katılım: Kanije"`):**
```
Osmanlı o parça 1855 (ana gövde) kutuya 51,52°D'ye kadar giriyor  ← Katar BATI yarısı Osmanlı (Ukayr peteği)
serbest hat 60   u=39,5 km · 153 köşe · segment min 0,31 km · medyan 2,34 · MAX 257,53 km
serbest hat 84/64/76/77   u 39,5-49,6 km · segment 0,4-5 km  (kıyı adacıkları)
```
z8'de 25°K'de 1 px ≈ 0,28 km ⇒ `serbest-hale` genişliği u·2^8/67,8 = 149 px → **80 px tavanına** bağlanıyor; 0,31 km'lik segment ≈ **1,1 px** ⇒ genişlik/segment ≈ **72×**. `line-join: bevel` bile olsa her keskin köşede şerit dışa taşıyor.

**Kod kaydı:** `js/app.js:1595-1624` — 20 Ağustos ÜÇGEN düzeltmesi: *"A, … z7-z8 piksel patlamasını ölçülebilir şekilde küçültüyor … ama segment/köşe düzeyindeki asıl oransızlığı (0,1 km'lik bir segmentin 80 px çizilmesi) TAM ÇÖZMÜYOR — o çözüm `arac/uret_petek.py` tarafında geometri sadeleştirmesi (linemerge) gerektiriyor"*.

**Beyaz kama:** 25,4/50,95 · 25,8/51,25 · 25,5/50,85 → petek 2616 «Katar Yarımadası (iç, dolgu)», sahipsiz ⇒ beyaz; kamanın uzun düz kenarı = serbest hat 60'ın **257 km'lik** tek segmenti (Voronoi bisektörü). Hat 60'ın `u=39,5` değeri kıyının ince segmentleriyle aynı hatta ⇒ kıyıda da dev bant.

**Hüküm: ⚙️ motor/render — bilinen ÜÇGEN kusuru, çözülmemiş kısmı.** Veri ile ilgisi yok. Kök `uret_petek.py` serbest kenar hattı (çok ince kıyı segmentleri + dev bisektör segmentleri aynı hatta, tek `u`).

**Öneri:** `Y7` (motor, Oturum 0): serbest hatlar üretimde (a) kara-deniz kıyısı parçaları serbest havuzdan çıkarılsın ya da (b) `simplify(tolerans≈u/20)` + `linemerge` uygulanıp segment tabanı büyütülsün (`BULGULAR-UCGEN-19AGU §İKİNCİL`). Kısa vadeli arayüz yolu (Oturum 1): `serbest-hale` için z≥7'de `TAVAN_PX` düşürülmesi — bedeli belirsizlik bandının yakın zoomda incelmesi (app.js yorumu bu bedeli zaten tartışıyor). ⚠️ Kıyı kenarının neden "serbest" sayıldığı (deniz sahipsiz alan mı?) **ölçülmedi**.

---

## H-0002 — 1594-1606 Eflak · Boğdan · Erdel ayaklanması haritada nasıl gösterilmeli? (karar araştırması, veri değişikliği YOK)

### 1. Veri bugün ne gösteriyor (ölçüldü)
Kutu 43,6-48,3°K · 20,5-30,2°D, 1597-06-15: **47 nokta · TABI 27 · OSMANLI 17 · avusturya 2 (Tokaj, Szatmár) · kurulmamış 1.**
Kayıtlar (1588-1612 penceresi):
```
Bükreş · Tırgovişte · Krayova        v Eflak Voyvodalığı  1462-06-01 → 1878/1718   KESİNTİSİZ
Yaş · Suçava                         v Boğdan Voyvodalığı 1456-06-01 → 1878/1775   KESİNTİSİZ
Erdel (Kaloşvar) · Erdel Belgradı · Brassó · Varad · Yanova
                                     v (Erdel) 1541-08-29 → 1687/1660/1658         KESİNTİSİZ
```
⇒ 1594-1606 arasında haritada **hiçbir kırılma yok**. Oysa kronoloji: `olaylar_ek10.js` 1594-10-05 *"Üç voyvodalığın birden ayaklanması"*, 1594-11-13 Bükreş, 1595-08-23 Kalûgerân (d: *"Üç voyvodalığın birden elden çıkması üzerine…"*), 1595-10 Yergöğü (*"voyvodalık fiilen elden çıkmış olarak kaldı … Haritada bu dönemin üç voyvodalığı hâlâ tâbi renkte görünüyor"*); `olaylar_p0049.js` Cesur Mihail'in Tuna akınları; `kronoloji_macaristan.js` 1604-10-15 Bocskai, 1606-06-23 Viyana Barışı. **Kronoloji "elden çıktı" diyor, harita demiyor** — `§1`in *"kronoloji ile harita birbirini doğrulamalı"* amacına aykırı.
Yan bulgu: künye `erdel` `f:"1570-01-01"` ama noktaların `v:` dönemi 1541'den — künye/veri penceresi uyumsuz (`§3.5` ②/③ sınıflandırması yapılmadı).

### 2. Kaynaklar ne diyor
**TDV (üç madde + yan maddeler, gövde okundu):**
- `eflak`: *"Cesur Mihai diye anılan Mihai Viteazul (1593-1601) vergi yüzünden **isyan** etti"*; Kalûgerân baskını, Báthory yardımıyla Eflak'ı tekrar ele geçirdi; *"Osmanlılar Báthory ve Lehistan ile dostluk kurarak Eflak voyvodasını yalnız bıraktılar"*; üç ülkenin hâkimi ilânı; *"1601'de … Basta'ya yenilerek … öldürüldü. Bundan sonra XVII. yüzyıl boyunca Eflak eskiden olduğu gibi Osmanlı Devleti'ne tâbi"*. Aynı madde Romen ve yabancı tarih yazımının farkını açıkça anıyor.
- `bogdan`: Aron 1594'te Kutsal İttifak'a girdi, *"Aron da Erdel prensine tâbi olarak Avusturya'ya yardım edecekti"*; Razvan *"isyan hareketlerine devam etti, ancak o da Lehliler tarafından öldürüldü. Böylece … ittifak büyük bir başarı elde edemeden dağıldı"*; Mihai 1600'de Boğdan'ın hâkimi; 1601'de *"üç prenslik tekrar ayrıldı"*.
- `erdel`: Zsigmond Báthory *"Habsburglar ve bir ara Eflak Beyi Mihal ile anlaşmalar yapmış, hatta **geçici olarak onlara tâbi** olmuştur"*; *"Erdel'in tekrar Habsburg idaresine girmesine yol açtı (1601-1602)"*; Mózes Székely'nin başarısız Osmanlı yanlısı girişimi; Bocskay'a *"İstanbul'da yaptırılan altın bir taç giydirdi (1605)"*; 1541'den beri *"haraçgüzâr statüsünde bir voyvodalık"*.
- `zitvatorok-antlasmasi`: Bocskay isyanı *"1604 Kasımında"*; Osmanlı heyeti *"Erdel'in kendi hâkimiyeti altında olduğunu ve ondan vazgeçilmeyeceğini"* söylüyordu (4 Eylül 1606). `mehmed-iii`: padişah *"Erdel'in Habsburglar'a terkine şiddetle karşı çıkmış, buradaki eski statünün sürmesini arzuladığını bildirmişti"*.
- `yergogu`: *"1595 Ekiminde Eflak'tan dönen orduyu takip eden akıncılar burada … Mihal'in baskınına uğradılar"*. `koca-sinan-pasa`: *"Eflak üzerine yürüdüyse de başarılı olamadı"*.
- Ölü: `mihai · mihal-voyvoda · cesur-mihail · mihai-viteazul · bocskai-istvan · bocskay · zitvatorok` (302) — Mihai'nin müstakil TDV maddesi **bulunamadı**.

**Akademik:**
- Stevens, S. 2024, "Ottoman Relations with the Danubian Principalities during the Fifteen Years War (1591-1606)", *Keshif* 2/1: 64-70 (**okundu**): prenslikleri *"tributary states"* diye adlandırıyor; savaşın *"rebels against Ottoman rule from Transylvania, Moldavia, and Wallachia"* çektiğini, belgedeki mektubun *"the rebellion of Michael"* dediğini, üç ülkenin *"May to September 1600"* birleştiğini yazıyor. ⇒ Osmanlı belgesinin dili **isyan**, modern akademik dil **tributary + rebels** — iki bakış tek metinde.
- Kármán & Kunčević (ed.) 2013, *The European Tributary States of the Ottoman Empire in the 16th and 17th Centuries* (Brill): kitap **okumadım**; Bamford'un incelemesi (*Rosetta* 18) **okundu** ve kitabın kavramsal ekseninden Kołodziejczyk'in önerisini aktarıyor: *"Instead of asking whether such political entities […] were sovereign or not, it seems more reasonable to discuss the degree of their sovereignty in a given sphere and in a given period"* (s. 431). ⇒ Akademik yaklaşım "tâbi mi müstakil mi" ikiliğini reddediyor, **dereceli ve dönemli** gösterim öneriyor.
- Panaite (aynı cildin Eflak-Boğdan bölümü; *The Ottoman Law of War and Peace*): **okumadım**.
- Vikipedi yön bulma (dayanak DEĞİL): Cecora Ekim 1595 — Movilă'nın Osmanlı tarafından tanınması, Boğdan'ın Lehistan himayesi + Osmanlı haracı (**kondominyum**); 9 Haziran 1598 Mănăstirea Dealu — Mihai'nin Rudolf II metbûluğunu tanıması. İkisi de akademik kaynaktan doğrulanmadan **gün olarak yazılamaz**.

### 3. Üç ülkenin durumu AYNI DEĞİL (kaynaktan çıkan iskelet)
```
EFLAK   1594-11 isyan (Bükreş) → 1595 Kalûgerân/Yergöğü, Sinan Paşa geri çekildi
        → (1598 Rudolf'a tâbiyet — Vikipedi, doğrulanmadı) → 1599-10 Erdel · 1600-05 Boğdan
        → 1600-09 kayıp → 1601 Mihai öldü; TDV: "eskiden olduğu gibi tâbi"
BOĞDAN  1594 sonu Aron ittifakta → Razvan → 1595 Lehliler; Movilă (Leh himayesi + Osmanlı haracı)
        → 1600-05/09 Mihai → 1601 ayrıldı.    ⇒ elden çıkış KISA, sonra ÇİFTE bağlılık
ERDEL   1594-08 Zsigmond ittifakta (Habsburg'a geçici tâbi) → defalarca taraf değiştirme
        → 1599-10/1600-09 Mihai → 1601-1602 Habsburg idaresi (Basta)
        → 1604-11 Bocskay (Osmanlı destekli) → 1605 Osmanlı tacı → 1606 Zitvatorok "Erdel bizim"
```
⇒ **Tek renk, tek tarih aralığı üçüne birden uymaz.** Boğdan'ı 12 yıl "elden çıkmış" boyamak, Movilă dönemini (Osmanlı'nın tanıdığı voyvoda) yanlış gösterir.

### 4. Seçenekler
**A — tâbi rengi kalsın (bugünkü veri; Osmanlı hukukî bakışı)**
- ➕ Osmanlı hiçbir zaman hâkimiyet iddiasından vazgeçmedi (Zitvatorok 1606, III. Mehmed); TDV'nin kendi dili "isyan"; hiçbir yeni künye/renk/kırılma yok; koşu maliyeti sıfır.
- ➖ Kronoloji "elden çıktı" derken harita değişmez (`§1` amacına aykırı, kullanıcının şikâyeti tam bu); Kalûgerân seferi haritada anlamsız; Erdel 1601-1602 **gerçek Habsburg idaresi** (TDV) bile görünmez.

**B — müstakil / Habsburg rengi (Batı tarih yazımı)**
- ➕ Fiilî durumu gösterir.
- ➖ Abartır: Boğdan 1595'ten itibaren Osmanlı'nın tanıdığı voyvodayla ve haraçla döndü; Eflak'ın Habsburg metbûluğu yalnız 1598-1601 (doğrulanmamış), Erdel defalarca taraf değiştirdi ⇒ çok sayıda kısa kırılma, her biri Değişmez 2 maddesi ister; Osmanlı bakışını tamamen siler (`ATLAS REFERANS DEĞİLDİR` ilkesiyle değil, kaynak dengesiyle çelişir); "bağımsız devlet" hiçbir kaynağın dediği şey değil (Mihai'nin kendisi Rudolf'a tâbi).

**C — ara durum: "isyan / fiilen elden çıkmış" (önerilen)**
- Emsal veride **zaten var**: `san-fan` *"Üç Vasal İsyanı (San Fan)"* `tur:"isyan"` künyesi (Qing'e vasal üç generalin 1673-1681 ayaklanması) — 13 noktada `d:"san-fan"`, `renkler.py`de rengi var. Yapısal olarak birebir aynı vaka (vasal ayaklanması, bastırıldı). Diğer emsaller tutarsız: Mora 1821 isyan günü `yunanistan` `s:`ye geçiyor; Belgrad 1806-1813 Karađorđe dönemi hiç gösterilmiyor.
- İki uygulama yolu:
  - **C1 — ayrı isyan künyeleri** (`san-fan` emsali): `eflak-mihai-isyani` · `bogdan-aron-isyani` · (Erdel için `erdel-habsburg-safi`?) `s:` dönemleri; tâbi rengi o aralıkta kalkar. ➕ mevcut motor/arayüz aynen çalışır. ➖ tâbi (hukukî iddia) görünmez olur; üç künye + üç renk + kırılma maddeleri.
  - **C2 — tâbi zemin korunur, üstüne "isyan" taraması** (`isg:` örtüsünün mekanizması): ➕ iki bakış aynı anda görünür (Kołodziejczyk'in "dereceli" önerisi); Değişmez 2'ye yeni `d/v` kırılması eklemez. ➖ `isg:` bugün lejantta **işgal** demek (`VERI-YAPISI.md` himaye③: tarama = işgal) ⇒ ayrı desen ve lejant satırı gerekir (Oturum 1 işi), motor `isg:` kimliğini renk anahtarına bağlıyor mu **ölçülmedi**.
- **Öneri: C2** (iki bakış birlikte, kaynak dengesine en uygun); arayüz desen maliyeti kabul edilmezse **C1**. Her iki yolda da **üç ülke ayrı aralıkla** yazılmalı; en azından şu, TDV'den **yıl** düzeyinde dayanaklı:
  ```
  Eflak   1594 → 1601          (TDV eflak: isyan … 1601'de öldürüldü, sonra tâbi)
  Boğdan  1594 → 1595          (TDV bogdan: Aron/Razvan … Lehliler; ittifak dağıldı)
          1600 → 1601          (TDV bogdan: Mihai Boğdan'ın hâkimi … üç prenslik ayrıldı)
  Erdel   1594 → 1604/1605     (TDV erdel: Zsigmond geçici tâbiyet · 1601-1602 Habsburg idaresi
                                · Bocskay 1605 taç) — iç kırılmalar (1599 Andreas Báthory,
                                1601 Zsigmond'un dönüşü) GÜN OLARAK bulunamadı
  ```
  ⚠️ `§4`: TDV yıl veriyor ⇒ ay/gün **Kármán & Kunčević / Panaite okunmadan yazılmamalı**; mevcut maddelerin günleri (1594-10-05, 1594-11-13) bu kalemde **kaynağa karşı sınanmadı** (okumadım).
  ⚠️ Erdel 1601-1602 **Habsburg idaresi** C'den ayrıdır: TDV onu "isyan" değil *"Habsburg idaresine girmesi"* diye veriyor ⇒ o dilim `avusturya` `isg:`/`s:` olarak ayrıca düşünülmeli (B'nin haklı olduğu tek dilim).

### 5. Kullanıcının öteki iki isteği (bu kalemin kapsamı dışı, not)
- **Harita odağı** geniş açıyor: `data/yer_yama.js:389` 1594-10-05 maddesine `kapsam_genis:true` verilmiş ⇒ imparatorluk görünümüne geçiyor (madde kartındaki *"Bu olayın haritada nokta yeri yok"* uyarısı bu). Çare: üç voyvodalığın kutusuna odak (yer_yama sahibi oturumun işi).
- **"Vassal · özerk · haraçgüzar · himaye · bağlı devlet" makalesi ve kartlar** — ek okuma işi; bu araştırmanın kaynak listesi (TDV eflak/bogdan/erdel "haraçgüzâr", Kármán & Kunčević 2013, Panaite, Kołodziejczyk s.431, Stevens 2024) başlangıç olarak kullanılabilir.

---

## Sınırlar
- **Canlı harita açılmadı**; görseller yayındaki koşu 9 geometrisiyle karşılaştırıldı (r7487). Koşu 10 çıktısında H-0009/H-0010'un sürüp sürmediği **ölçülemedi**.
- Geçersiz yabancı parça **toplamı** ve kıyı kenarlarının serbest havuza giriş sebebi **ölçülmedi** (tek kutu).
- `SIYASI_KIP` (yumuşak/sert) görsel anındaki durumu **ölçülemedi**.
- Kármán & Kunčević 2013 ve Panaite **okumadım**; Vikipedi yalnız yön için kullanıldı.
