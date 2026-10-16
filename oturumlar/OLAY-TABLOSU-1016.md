# OLAY TABLOSU — tek elle yazılan tablo, gerisi üretilir

**Tarih:** 16 Ekim 2026 · **Hazırlayan:** HAVVA oturumu (Emre ile tasarım konuşması)
**Durum:** 🟡 ÖNERİ, Emre/koordinatör onayı bekliyor; hiçbir veri ya da araç değişmedi
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
üretilen sahip çelişirse bu da çakışma sayılır. Ekranda o şehirde/maddede çakışma işareti
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

## 7. Emre'ye açık sorular

1. **Her sahiplik olayının ekranda maddesi olmalı mı,** yoksa `ust:` maddesine bağlı olması
   yeter mi? (Önerim: yeter. Çıldır tek madde, bağlı beş şehir kendi gününü taşır.)
2. **Çakışmada varsayılan seçim:** İslâm dünyası için TDV esas. Başka coğrafyada olaya en
   yakın çağdaş kaynak mı, bölgenin kendi geleneği mi? (Önerim: seçim her zaman elle ve
   gerekçeli yapılsın. Varsayılan kural sessiz yanlış üretir.)
3. **Ad değişimi olay mı:** "Ankyra → Engürü → Ankara" kronolojide madde olarak görünsün mü?
4. **Dosya bölme ölçütü:** bölge mi (önerim), dönem mi?
5. **A2 geçişini kim, hangi koşudan sonra yapar?** (Koordinatör/Emre.)
