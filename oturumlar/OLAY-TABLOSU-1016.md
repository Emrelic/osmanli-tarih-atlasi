# OLAY TABLOSU — tek elle yazılan tablo, gerisi üretilir

**Tarih:** 16 Ekim 2026 · **Hazırlayan:** HAVVA oturumu (Emre ile tasarım konuşması)
**Durum:** 🟢 Şema yönü onaylı, §8'de beş karar (K1-K3 Emre, K4-K5 Emre'nin bıraktığı) ·
sıradaki iş A1 · hiçbir veri ya da araç değişmedi
**Dal:** `olay/tablo-1016` (worktree `C:\atlas-w-olay`, taban `origin/main` `c2f35156b`)

---

## 0. Emre'nin kararı (16 Ekim 2026, bu konuşmadan)

> *"kronoloji maddeleri ve şehir kronolojileri birbiri ile örtüşüyor olmalı …
> yeni bir olay bulduğumuzda … şehrin kronolojisi de etkilenmeli. tam tersi
> şehir kronolojisi araştırılırken ek bir olay bulunduğu zaman … devlet
> kronolojileri de etkilenmeli."*

Aynı konuşmada üç karar daha verildi; tasarım bunları taşır:
1. **Kimlik koordinata dayanmalı,** ad değişikliği karışıklık yaratmamalı.
2. **Kapsam işleve göre seçilir:** bir şehir, herhangi bir dönemde bölgesinin askerî,
   siyasî, idarî ya da ekonomik merkezi olduysa kapsama girer. Bugünkü il/ilçe statüsü
   belirleyici değildir (Merzifon girer; Kilis, Yalova, Bartın, Bilecik, Osmaniye kendiliğinden
   girmez). Seçimin birimi **coğrafî/tarihî bölgedir**, kuş uçuşu ızgara değil.
3. **İki kaynak farklı diyorsa çakışma görünür olmalı;** şehir kronolojisi bölgeyi çevreleyen
   geleneklerin kaynaklarıyla çapraz doğrulanmalıdır (Kafkasya için Osmanlı, İran, Rus ve
   Kafkas kaynakları; Orta Avrupa için Alman, Avusturya, Venedik, Türk, Leh ve Rus kaynakları).

---

## 1. Bugün ne var — ölçüldü (`origin/main` `c2f35156b`)

| Ölçüm | Değer |
|---|---|
| Yerleşim (`girdi.py`, 96 dosya) | **4.646** |
| Sahiplik dönemi (`s`+`d`+`v`+`isg`) | **23.117** · kaynaklı **7.669 (%33)** |
| Dönem ucu (`f`/`t`) | 46.234 · `YYYY-01-01` olan **10.915 (%24)** |
| `kur:` dolu yerleşim | 1.781 (%38) |
| İlk dönemi 1281'den önce başlayan | 116 (T5 partileri) · tam 1281'de başlayan 2.490 |
| Kronoloji/olay dosyası (`olaylar*`+`kronoloji*`) | 192 |
| `yer_id` atfı | 6.931 · yerleşim **ADINA** çözülen 6.923 |
| Aynı adı taşıyan yerleşim çifti | 0 |

📌 KOŞU 27 dalı (`683ded13d`) bunun 18 yerleşim önündedir; sayılar tabanla birlikte değişir.

### Bugünkü yapının kusuru — tek cümle
Aynı bilgi iki yere, iki kez, elle yazılıyor: toprak değişimi `yerlesimler*.js`te **dönem
ucu** olarak (motor bunu okur), anlatısı `olaylar*/kronoloji*.js`te **madde** olarak (ekran
bunu okur). Bu ikisini bağlayan şey yapı değil, sonradan koşan **Değişmez 2 denetimidir**
(±30 gün). Bağ da **ada** dayanıyor: `yer_id:"Bursa"`. Bugün tutuyor (çift ad 0), ama bir
yeniden adlandırma bütün atıfları sessizce koparır.

---

## 2. Tasarım — üç katman

```
① VARLIKLAR   kimlik sözlüğü: şehir · bölge · devlet · kişi        (elle, seyrek değişir)
② OLAYLAR     TEK elle yazılan tarih tablosu                      (elle, araştırma buraya)
③ GÖRÜNÜMLER  şehir/devlet/kişi kronolojisi · motor dönemleri     (ÜRETİLİR, elle dokunulmaz)
```

### 2.1 Varlık kimlikleri
| Varlık | Kimlik | Kaynak |
|---|---|---|
| devlet | `devletler.js` `id` | **değişmez, zaten tek otorite**, yeni kimlik açılmaz |
| kişi | `kisiler.js` / `padisahlar.js` kimliği | aynı |
| şehir | 🆕 `sid` (örn. `sx-000123`), **bir kez atanır, ASLA değişmez** | yeni: `data/varlik_sehir.js` |
| bölge | 🆕 `bid` (örn. `bx-canik`) | yeni: `data/varlik_bolge.js` |

**Neden koordinattan TÜRETİLMİŞ değil, ATANMIŞ kimlik:** koordinat düzeltildiğinde (bu sık
oluyor) kimlik kaymamalı. Koordinat ve ad kimliğin **nitelikleridir**:

```js
{ sid:"sx-000123", lat:41.7151, lon:44.8271, izgara:"N41E044", tur:"sehir",
  adlar:[ {ad:"Tiflis", dil:"tr"}, {ad:"Tbilisi", dil:"ka"},
          {ad:"Tiflis", dil:"ru", f:"1801-09-12", t:"1936-01-01", kaynak:"…"} ],
  bolge:[ {bid:"bx-kartli"} ],
  merkez:[ {bid:"bx-kartli", f:"…", t:"…", islev:["siyasi","askeri"], kaynak:"…"} ] }
```
`merkez:` alanı §0'daki 2. kararı veriye indirir: kapsam bu alandan ölçülür, statüden değil.

### 2.2 Olay kaydı
```js
{ id:"ol-1578-0824-tiflis",
  tarih:"1578-08-24", hassasiyet:"gun",          // gun | ay | yil | onyil — VERI-YAPISI §hassasiyet
  tur:"fetih",                                   // sözlük §2.3
  ust:"ol-1578-0809-cildir",                     // isteğe bağlı: bu olay hangi büyük olayın sonucu
  katilanlar:[ {v:"sx-000123",  rol:"yer"},
               {v:"osmanli",    rol:"yeni_sahip", bag:"dogrudan"},
               {v:"kartli",     rol:"eski_sahip"},
               {v:"ks-lala-mustafa", rol:"komutan"} ],
  madde:{ b:"Tiflis'in fethi", d:"…", gun:"24 Ağustos 1578", etiket:[…] },  // yoksa ekranda madde yok
                                                 // A2'de metin yerine madde_ref: (§8 K5-6)
  tanikliklar:[ {kaynak:"TDV «Tiflis»", sayfa:"…", alinti:"…", gelenek:"osmanli"},
                {kaynak:"…", gelenek:"gurcu", tarih:"1578-08-28"} ],
  secim:{ tarih:"1578-08-24", gerekce:"TDV esas (CLAUDE.md §4)" } }        // yalnız çakışmada
```

- **`ust:` alanı** Çıldır/Tiflis vakasını (VERI-YAPISI: "1578-08-09 toptan yazılmış") yapısal
  olarak çözer: büyük olay tek maddedir, şehirler ona bağlı ayrı olaylardır, her biri kendi
  gününü taşır.
- **`bag:`** `dogrudan | tabi | isgal` → motor alanını belirler (§3).
- **`madde:`** yoksa olay ekranda kendi maddesi olarak görünmez. O zaman Değişmez 2'nin yeni
  hâli devreye girer: sahiplik değiştiren her olayın kendi maddesi ya da maddeli bir `ust:`
  olayı olmalıdır (§4).

### 2.3 Olay türleri (ilk sözlük; Emre genişletir)
`kurulus` · `ilk_anilis` · `fetih` · `teslim` · `antlasma` · `ilhak` · `miras` · `tabiyet` ·
`isgal` · `isgal_sonu` · `ayaklanma` · `terk` · `yikim` · `ad_degisimi` · `merkez_oldu` ·
`merkez_kaybetti` · `durum` (**durum tanıklığı**: "1520 tahririnde Amasya Osmanlı sancağı";
sahiplik DEĞİŞTİRMEZ, üretilen sahibi doğrular ya da çakışma açar).

### 2.4 Çakışma
İki tanıklık aynı olay için farklı tarih ya da farklı taraf verirse olay **tek kalır,**
tanıklıklar yan yana durur ve `secim:` yazılır. `secim:` yoksa üretici o olayı **çizmez,
ölçemedi kovasına düşürür**: çakışma sessizce ilk kaynağa bırakılmaz. Durum tanıklığı ile
üretilen sahip çelişirse bu da çakışma sayılır. Çözüm yolu bölgenin kaynak
geleneklerinden geçer (§8 K2). Ekranda o şehirde/maddede çakışma işareti
görünür, tıklanınca iki kaynak açılır.

---

## 3. Üretim: olaydan motor dönemine

Üretici `arac/olay_uret.py` (yeni). Bir şehrin olaylarını tarih sırasıyla katlar:

```
yeni_sahip=osmanli + bag=dogrudan  → d:[{f}]        (Osmanlı doğrudan)
yeni_sahip=osmanli + bag=tabi      → v:[{f, k:…}]
yeni_sahip=X≠osmanli               → s:[{f, d:X}]
bag=isgal                          → isg:[{f, d:X}]  (sahipliği değiştirmez, üstüne biner)
sonraki sahiplik olayı             → açık dönemin t'si
kurulus                            → kur:
```

**Çıktı bugünkü `yerlesimler*.js` biçimindedir.** ⇒ Motor (`uret_petek.py`) DEĞİŞMEZ ve tuz
(§9.1) DEĞİŞMEZ. İş, motor dondurmasıyla çatışmadan yürür; bu tasarımın en önemli kısıtıdır.

Üretilen öteki görünümler: `data/sehir_kronoloji.js` · devlet kronolojisi (`devletler.js`
`kronoloji[]` yerine) · ekran maddeleri (`olaylar*.js` biçiminde). Bunlar **ÜRETİLMİŞ**
dosyalar listesine (§5) girer ve elle düzenlenmez.

---

## 4. Değişmezlerin yeni hâli

| Bugün | Olay tablosundan sonra |
|---|---|
| Değişmez 2: her kırılmanın ±30 günde bir maddesi var mı (denetim) | **Yapısal:** kırılma yalnız bir olaydan üretilir. Kalan soru: o olayın ya da `ust:`ünün `madde:`si var mı? |
| `yer_id` ada bağlı | `sid`e bağlı; ad değişince atıf kopmaz |
| Kaynaklı/kaynaksız dönem ayrımı alan alan | Olay başına tanıklık sayısı ve **gelenek sayısı** ölçülür |
| Çakışma görünmez | `secim:`li çakışma: beyan · `secim:`siz: ÖLÇÜLEMEDİ (çıkış 2) |
| — | 🆕 **MİRAS sayacı:** göçten gelen kaynaksız olay sayısı; tavan konur, yalnız AZALABİLİR |

---

## 5. Aşamalar ve kabul ölçütleri

### A0 — Şema onayı (Emre) · *veri değişmez*
Bu belge ve §7'deki sorular.

### A1 — İçe aktarma + gidiş-dönüş sınavı · *veri değişmez, yalnız yeni dosya*
1. `sid` ataması: her yerleşime bir `sid` (sıra, `ad`→`sid` tablosu dondurulur).
2. Her dönem ucu bir olaya çevrilir. Eşleme sırası: aynı `yer_id` + ±30 gün + aynı devlet
   olan kronoloji maddesi → `madde:`li olay; bulunamazsa **`miras:true`** olay (kaynaksız,
   uydurma tarih YOK, uç neyse o).
3. Dönemlerin `kaynak:` alanı olayın `tanikliklar`ına taşınır.

**Kabul ölçütü (motor KOŞMADAN sınanır):**
- 🔴 `olay_uret.py`nin ürettiği dönemler, bugünkü `yerlesimler*.js` dönemleriyle **alan alan
  BİREBİR aynı**: fark 0. Fark ≠ 0 ise aktarma kusurludur, harita değil.
- Her `yer_id` bir `sid`e çözülür (bugün 6.931/6.923 → çözülemeyen 8 adıyla listelenir).
- `denetle.py` iki tarafta aynı sonucu verir.
- Sınav iki yönde: kasıtlı bozulmuş bir olay farkı ÜRETMELİ (CLAUDE.md §11 son satır).

### A2 — Kaynağın yer değiştirmesi · *koordinatör kararı, koşu takvimiyle*
`yerlesimler*.js` elle yazılmaz olur, **üretilen** dosyalar listesine geçer. Elle yazılan
tek kaynak olay tablosu olur. Geçiş anı bir koşunun hemen ARDINDAN seçilir; geçiş günü
açık veri partisi bırakılmaz.

### A3 — Ekran görünümleri
Şehir kronolojisi paneli, devlet kronolojisinin olaydan üretilmesi ve çakışma işareti
(`js/app.js`). Kabul: bugünkü maddeler ekranda aynı görünür (ODAK kapısı + `denetle_yayin`).

### A4 — Pilot: Orta Anadolu / Rum-Danişmend (~20-30 merkez)
Sivas, Tokat, Amasya, Merzifon, Kayseri, Niğde, Çorum, Kırşehir gibi merkezler. Gerçek
tanıklık (TDV + en az bir başka gelenek), `merkez:` alanı ve çakışma kayıtları girilir.
**Ölçülecekler:** şehir başına token maliyeti (bugünkü tahmin 30-50 bin, ÖLÇÜLMEDİ), miras→
kaynaklı dönüşüm oranı, çıkan çakışma sayısı, mevcut verinin yanlış/eksik payı.
⇒ Dünyaya yayılma kararı bu rakamlarla verilir.

### A5 — İkinci pilot: Kafkasya (çok gelenek sınavı)
Osmanlı · Safevî/Kaçar · Rus · Gürcü/Ermeni kaynakları. Asıl sınanan `gelenek:` ölçümü ve
çakışma akışı.

### A6 — Bölge listesi ve kapsam
`varlik_bolge.js`: tarihî-coğrafî bölgeler, her dönemdeki merkezleriyle. Izgara (1°×1°)
yalnız **boşluk ölçümü** için kullanılır: merkez olmayan hücre listelenir, çöl ile eksik ayrılır.

---

## 6. Riskler

- **Göç yükü:** 46.234 dönem ucu. A1 mekaniktir ama eşleme kusuru sessiz olabilir; bu yüzden
  kabul ölçütü "fark 0"dır, örneklem değildir.
- **Eşzamanlılık:** KOŞU 27 bu akşam (16 Ekim 19:30). A1 `data/` ve `arac/`a YAZMAZ; yeni
  araç bu dalda yazılır, tuz dosyalarına dokunulmaz (§9.1).
- **Tek tablo ≠ tek dosya:** beş makine tek dosyaya yazarsa `TAHTA.md` çatışması veride
  yaşanır. Şema tektir, kimlik uzayı tektir; dosyalar bölge bölge ayrılır
  (`data/olay_<bolge>.js` → `window.OLAY_<BOLGE>`, CLAUDE.md §7 ad alanı kuralı).
- **Paralel yazım:** A2'ye kadar eski yoldan (`yerlesimler*.js`e doğrudan) yazılan her parti,
  aktarmanın yeniden koşmasını gerektirir. A1 bu yüzden **tekrar koşturulabilir** olmalı
  (aynı girdi → aynı olay kimlikleri).

---

## 7. Açık sorular — 16 Ekim'de beşi de karara bağlandı → §8

---

## 8. KARARLAR (16 Ekim 2026)

### K1 — Büyük olayın maddesi yeter (Emre)
> *"bağlı olduğu büyük olayın maddesi yeter. eğer osmanlı tebrizi almışsa etrafındaki pek
> çok şehir ile birlikte almıştır, teker teker saymaya gerek yok"*

⇒ Sahiplik değiştiren olay için kural: **kendi `madde:`si VEYA maddeli bir `ust:` olayı.**
Bağlı şehirler ekranda ayrı madde olmaz, ama her biri kendi olay kaydını (gün, taraf,
tanıklık) taşır ve haritayı o kayıt çizer. Değişmez 2'nin yeni hâli budur (§4).
⚠️ `ust:` bağı aynı süreç olmalıdır (aynı sefer, aynı antlaşma); yalnız aynı yıl olmak
yetmez. `ust:` olayının tarihi ile bağlı olayın tarihi arasındaki fark ölçülür ve basılır.

### K2 — Çakışmada bölgenin kaynaklarına gidilir (Emre)
> *"iki kaynak çeliştiğinde o bölgedeki yerel veya büyük devletlerin kaynaklarına
> başvurmalı. mesela sırbistan ile ilgili bir olayda sırp kaynaklarına ve macaristan
> avusturya kaynaklarına başvurulabilir"*

⇒ Her bölge kaydı (`varlik_bolge.js`) **`gelenekler:`** listesi taşır: o bölgede söz sahibi
yerel ve büyük devletlerin kaynak gelenekleri. Örnek:
```
bx-sirbistan   gelenekler:["sirp","macar","avusturya","osmanli","bizans"]
bx-kafkasya    gelenekler:["gurcu","ermeni","osmanli","iran","rus"]
bx-orta-avrupa gelenekler:["alman","avusturya","venedik","osmanli","leh","rus"]
```
Çakışma akışı: ① iki tanıklık ayrışıyor → olay `secim:`siz kalır (ÖLÇÜLEMEDİ, çizilmez)
② bölgenin `gelenekler:`inden henüz tanıklığı olmayan gelenek(ler) aranır ③ yeni tanıklıkla
`secim:` yazılır, gerekçesi hangi geleneklerin neyi desteklediğini sayar.
📌 CLAUDE.md §4'ün *"İslâm dünyası ve Osmanlı'da TDV birincil, çelişirse TDV esastır"*
kuralı bu kararla **kaldırılmadı.** K2 o kuralın dışındaki coğrafyada ve TDV'nin
susan/çelişen olduğu durumda yürür. İkisinin ilişkisini Emre teyit edecek (açık nokta).

### K3 — Ad değişimi madde olur, ama araştırma konusu OLMAZ (Emre)
> *"ad değişimi kronolojide madde olarak görünsün. ama bunun için ek araştırma yapmaya
> gitmeyelim. eğer bilgi var ise eklensin, bilgi yok ise araştırılmaya gidilmesin."*

⇒ `ad_degisimi` olayı yalnız **zaten okunan bir kaynakta** geçiyorsa yazılır, `madde:`si
olur. Ad değişimi için hiçbir şartnameye kalem konmaz, sayacı/tavanı olmaz, "eksik" diye
ölçülmez. Ad bilgisi kaynakta tarihsiz geçiyorsa (`adlar:` alanına `f`/`t`'siz) yazılır,
olay açılmaz: tarih uydurulmaz (§4).

### K4 — Dosyalar coğrafî bölgeye göre bölünür (Emre bana bıraktı; gerekçe aşağıda)
**Karar:** `data/olay_<bolge>.js` → `window.OLAY_<BOLGE>`. `<bolge>` anahtarı
`devletler.js`teki **KAPALI 28 bölgelik sözlüktür** (`anadolu · balkanlar · kafkasya ·
iran · …`). Yeni sözlük icat edilmez; o sözlük zaten var ve tek otoritedir.

**Bir olay hangi dosyaya gider, deterministik kural:**
1. `rol:"yer"` olan şehrin bölgesi. Şehrin bölgesi koordinatından **sabit poligonla** bir kez
   atanır (`varlik_sehir.js` `bolge_dosya:`), sonra değişmez. Sınır değişince dosya değişmez.
2. Yeri olmayan olay (cülus, antlaşma, kişi olayı) → birincil devletin `devletler.js` `bolge:`u.
3. İkisi de yoksa → `olay_genel.js`, ve sayısı basılır (kova büyürse kural kusurludur).
4. Bir bölge dosyası ~2 MB'ı geçerse **o bölge içinde** yüzyıla bölünür
   (`olay_anadolu_15.js`). Bölme ölçütü değişmez, yalnız ince ayar yapılır.

**Neden bölge — elenen seçenekler:**
| Seçenek | Neden elendi |
|---|---|
| Devlete göre | Bir fethin en az iki devleti var (alan ve kaybeden). Olayın tek bir "evi" olmaz, ya kopyalanır ya keyfî seçilir. Bugünkü iki-kopya kusurunu yeniden üretir. |
| Döneme göre | Yoğun yüzyıllar (1500-1700) dev dosya olur. Bütün bölge ekipleri aynı dosyaya yazar ve `TAHTA.md` çatışması veride yaşanır. Aynı şehrin olayları dosyalara dağılır. |
| Tek dosya | Beş makinenin tek dosyaya yazması (CLAUDE.md §7 ölçümü: çatışmanın asıl kaynağı). |
| **Bölge** ✅ | Şehir yer değiştirmez ⇒ olayın evi **tektir ve kalıcıdır.** İş zaten bölge bölge örgütleniyor (kıta oturumları, `d_sinirlar_<bolge>.js`, pilotlar). Aynı şehrin bütün olayları aynı dosyadadır, kaynak gelenekleri de bölgeye bağlıdır (K2). |

⚠️ Bölgeler arası büyük olay (Tebriz seferi: `ust:` İran'da, bağlı şehirler Kafkasya'da):
kimlik uzayı tek olduğu için `ust:` başka dosyaya işaret edebilir. Üretici kırık `ust:`
atfını ihlal (çıkış 1) sayar.

### K5 — Geçiş (A2): kim, ne zaman (Emre bana bıraktı)
**Karar:**
1. **Hazırlık bu dalda, HAVVA'da yapılır** (A1 aracı + gidiş-dönüş sınavı). `main`e
   yazılmaz, `data/` ve tuz dosyalarına dokunulmaz.
2. **Geçiş commit'ini koordinatör atar** (`main`in tek yazıcısı, CLAUDE.md §7). HAVVA
   atmaz.
3. **Zamanı: A1 sınavı "fark 0" verdikten sonraki İLK YAYINLANMIŞ koşunun hemen ardından,
   bir sonraki koşu başlamadan.** KOŞU 27'den önce kesinlikle değil. Gerekçe: koşu sürerken
   `data/` donmuştur (§7), ve geçişten hemen sonraki koşu yeni kaynağın ilk tam sınavı olur.
   Yani hata yayına inmeden yakalanır.
4. **Geçiş günü açık veri dalı bırakılmaz:** bütün bekleyen yerleşim partileri ya geçişten
   önce `main`e alınır ya da geçişten sonra olay biçimine çevrilir. A1 aracı tekrar
   koşturulabilir olduğu için (aynı girdi → aynı olay kimliği) bu güvenlidir.
5. **Geçişten sonra `yerlesimler*.js` ÜRETİLMİŞ dosyadır:** `denetle_yayin.py`ye kapı eklenir.
   Dosya üreticinin çıktısıyla birebir değilse (elle dokunulmuşsa) yayın durur.
6. **Kronoloji maddesi metni A2'de TAŞINMAZ.** Olay, mevcut maddeye `madde_ref:` ile
   işaret eder; metin `olaylar*/kronoloji*.js`te kalır. Metni taşımak A3'ün işidir.
   Gerekçe: A2'de metin iki yerde olursa bugünkü iki-kopya kusuru bu kez metinde doğar.
7. **Geri dönüş yolu:** geçiş commit'i tektir ve `git revert` ile geri alınabilir. Geçişten
   önceki `yerlesimler*.js`, A1 üreticisinin çıktısıyla birebir aynı olduğu için kayıp olmaz.
