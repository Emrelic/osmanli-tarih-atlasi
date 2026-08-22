# İRAN ARDILLARI KRONOLOJİ — ilerleme defteri

**Oturum:** İRAN ARDILLARI KRONOLOJİ (açılış adı: OPUS HAZIR KITA 50)
**Model:** Opus · **Kimlik:** `local_a083bcff-1ed6-4c6b-977e-a415d9d28cf8`
**Görev:** tahta **M-1050** · şartname `oturumlar/KRONOLOJI-SARTNAME.md`
**Dosyalarım:** `data/kronoloji_iran_ardillari.js` → `window.KRONOLOJI_IRAN_ARDILLARI`
· bu defter
**`index.html`e BAĞLAMADIM** — koordinatör bağlayacak.

---

## TUR 1 — TESLİM (22 Ağustos 2026)

### ① Madde sayısı

```
ÖNCE  0        SONRA  155
```

Kapsanan aralık: **1155-01-01 → 1603-01-01**.

Madde/yıl oranı bu dosyada **anlamlı bir ölçü değildir** ve bunu ölçüp
bildiriyorum: dosya tek bir devletin değil **yedi paralel hânedanın**
kronolojisidir, künye ömürleri üst üste biner (İlhanlı 97 + Celâyirli 91 +
Muzafferî 75 + Serbedârî 49 + Kert 144 + İncû 32 + Lur-ı Büzürg 269 = 757
künye-yılı, ama takvim aralığı 448 yıl). Ham oran **155/448 = 0,35
madde/yıl**; Osmanlı ölçütü 1,9'dur.

⚠️ **ÖLÇÜM ile ÇIKARIM ayrı satırda** — çıkarım şudur: bu oran bir
eksiklik göstergesi **değil**, çünkü ardıl hânedanların çoğu için TDV'nin
tek maddesi vardır ve o madde onlarca yılı tek cümlede geçer. Kaynak
bu kadarını verdi. Daha fazlası için `§⑦`deki Tur 2 önerisine bakılmalı.

### ② Konu dağılımı (`tur` alanına göre, şartname §2'nin altı kovası)

```
askerî · siyasî · toprak · antlaşma · hükümdar · isyan      116   (%75)
   hukumdar 27 · savas 20 · siyaset 10 · kurulus 10 · son 10 ·
   toprak-kazanc 10 · isyan 7 · diplomasi 7 · olum 5 · isgal 4 ·
   antlasma 3 · toprak-kayip 3 · bolunme 3 · ic-savas 3 · itaat 1
idarî · hukukî · malî reform                                  6   (%4)
   idari 4 · reform 2
bilim · teknoloji                                             2   (%1)
kültür · sanat · mimarî · edebiyat                           11   (%7)
   mimari 6 · kultur 5
sosyal · dinî · salgın · şehircilik                           8   (%5)
   din 5 · sehircilik 2 · salgin 1
iktisadî                                                      5   (%3)
```

🔴 **HEDEF KARIŞIMI TUTTURAMADIM ve bunu mazeret olarak değil ÖLÇÜM
olarak yazıyorum.** Şartname §2 her 100 maddede kabaca `40 askerî · 15
idarî · 15 bilim · 15 kültür · 10 sosyal · 5 iktisadî` istiyor; bende
askerî-siyasî **%75**, bilim **%1**.

**Sebep ölçüldü:** bu yedi hânedanın TDV maddeleri siyasî-askerî
anlatılardır. Örnek — TDV `muzafferiler` maddesi kendi metninde şunu
yazıyor: *"Muzafferîler dönemi, daha çok hânedan mensuplarının iç
çekişmeleri ve kavgalarıyla geçtiğinden halkın ekonomik ve sosyal
durumunda olduğu gibi ilim ve sanatta da önemli sayılabilecek
ilerlemeler kaydedilememiştir."* ⇒ Kaynak, kültür maddesi yazmamı
engelleyen şeyi **kendisi söylüyor.**

⚠️ Ama bu gerekçe **İlhanlı için geçerli değildir** — İlhanlı devri
İran'ın en zengin ilim-sanat dönemlerinden biridir ve bende yalnız 2
`bilim` maddesi var. Bu **gerçek bir eksiktir**; kapatma yolu `§⑦`de.

### ③ `onem` ve `dunya` dağılımı

```
onem   5→44   4→56   3→46   2→9   1→0
dunya  5→3    4→6    3→25   2→44  1→77
```

`onem:1` hiç yok — çünkü dolgu madde yazmadım (şartname §1: *"bir maddeyi
silsen kronolojiden bir şey eksilir mi?"*). `dunya` ağırlıklı olarak 1-2:
bu hânedanların çoğu bölgesel güçlerdir ve dünya sistemini
değiştirmemişlerdir. `dunya:5` taşıyan üç madde: Bağdat'ın zaptı ve
hilâfetin sonu (1258), Aynicâlût (1260), Kara Ölüm (1347).

### ④ Kapsam

```
ic  98      dis  57
```

### ⑤ `yer_id`

```
DOLU            138
BOŞ              17   (bunların 4'ü `kapsam_genis:true`)
kapsam_genis      4
🔴 EŞLEŞMEYEN     0    ← 2610 yerleşim adına BİREBİR sınandı
```

**Boş bırakılan 17 maddenin gerekçeleri, kova kova:**

| sebep | adet | örnek |
|---|---|---|
| İmparatorluk çapında olay (`kapsam_genis`) | 4 | Gāzân'ın toprak tahriri · 1323 Memlük antlaşması |
| Yer atlasın **penceresi dışında** | 5 | Mültan · Aynicâlût · Elbistan · Vâdilhâzindâr · Kuh-ı Cud |
| Yer **veride kayıtlı değil** | 5 | **Rey (Reyy)** · Aladağ · Baştın · Lâr vadisi (Elburz) · **Hürremâbâd** |
| Olay bu dosyanın konusu değil, yalnız zincir taşıyor | 3 | Ankara Savaşı · Dımaşk 1303 |

🔴 **KOORDİNATÖRE İŞ ÇIKAR — nokta yazdırılması gereken iki ad:**
```
Rey (Reyy)     İlhanlı-Muzafferî tarihinde geçiyor (1391 Zeynelâbidîn'in
               yakalanışı) · Gāzân Han'ın valilik yaptığı yer
Hürremâbâd     Lur-ı Kûçek Atabegliği'nin MERKEZİ · bugün de Luristan
               eyaletinin merkezi (nüfus 293.100)
```
İkisi de 2610 adın içinde YOK. Uydurmadım, `yer_id:""` bıraktım.

### ⑥ Kaynak

```
madde başına `kaynak:` DOLU        155  (%100)
"bulunamadı" damgalı                 1
Vikipedi kaynaklı                    0
```

Dayandığım TDV maddeleri (**hepsinin HTTP kodu ölçüldü ve GÖVDESİ okundu**):

| slug | karakter | kaç madde |
|---|---|---|
| `ilhanlilar` | 36.825 | 30 |
| `serbedariler` | 9.647 | 26 |
| `celayirliler` | 9.334 | 19 |
| `muzafferiler` | 9.365 | 18 |
| `kert` | 6.762 | 14 |
| `inculular` | 8.004 | 13 |
| `gazan-han` | 15.314 | 10 |
| `hasan-i-buzurg` | 6.963 | 10 |
| `luristan` | 6.954 | 7 |
| `tebriz` | 24.785 | 5 |
| `incu` | (yanlış madde, aşağıya bak) | 1 |
| `karakoyunlular` | (devralınan madde) | 1 |

**Ayrıca çekildi ama bu turda kullanılmadı:** `hulagu` (17.410) ·
`ebu-said-bahadir-han` (10.309).

---

## 🔴 BULGULAR — ölçüm ve çıkarım ayrı satırda

### B1 · FETRETİ İFADE EDECEK KİMLİK YOK (M-1050'nin sorusunun cevabı)

**ÖLÇÜM.** TDV `ilhanlilar` maddesinin hükümdar tablosu 1335-1353 arasını
iki rakip blok hâlinde tasnif ediyor: *"Hasan-ı Büzürg tarafından tayin
edilen ilhanlar"* (Muhammed 1336 · Tuga Timur 1337 · Cihan Timur 1338) ve
*"Hasan-ı Kûçek tarafından tayin edilen ilhanlar"* (Sâtî Beg Hatun 1339 ·
Süleyman 1340 · Nûşirevân 1344-1353).

**ÖLÇÜM.** `devletler.js`te aranıp **bulunamayan** künyeler (altısı da
HTTP 302 / kayıt yok): `coban` · `cobanli` · `cobaniler` · `toga-timur` ·
`togatimur` · `melik-esref`. (`cobanogullari` VAR ama o **Kastamonu
beyliğidir**; `esrefogullari` VAR ama o **Beyşehir beyliğidir** — ad
benziyor, devlet başka.)

**ÇIKARIM.** `CLAUDE.md §11` *"veri fetreti ifade etmiyor"* diyor. Ölçüm
bunu **daraltıyor**: veri ifade etmiyor çünkü **ifade edecek kimlik
yazılmamış.** Osmanlı fetreti dört ayrı künyeyle çözülmüştü
(`fetret-suleyman` · `fetret-mehmed` · `fetret-musa` · `fetret-isa`);
İran'ınki için sıfır künye var.

**YAPTIĞIM.** Çobanlı ve Toga Timurlu olaylarını **kimlik beklemeden**
yazdım (14 madde). Kronoloji maddesi künyeye bağlı değildir, `yer_id` ile
haritaya bağlanır; künye açıldığı gün maddeler hazır durur.

### B2 · `CLAUDE.md §11`in "21 AY SAHİPSİZ pencere" satırı BAYAT

**ÖLÇÜM.** `CLAUDE.md §11` şunu yazıyor: *"veride serbedari adayı dönem
`f:1335-12-01` (19 nokta) · künye `f:1337-09-09` ⇒ 21 AY SAHİPSİZ."*
Bugün veride: **Sebzevâr · Tûs · Nîşâbur → `ilhanli 1281-01-01..1337-09-09`,
sonra `serbedariler 1337-09-09..1381-01-01`.**

**ÇIKARIM.** Boşluk **kapatılmış** — ve Serbedârî geri çekilerek değil,
**İlhanlı ileri sarılarak.** Satır düzeltilmezse bir sonraki oturum
kapanmış bir borcu yeniden açar (`§11`in kendi yazdığı *"ödenmiş borç
kayıtsız kalırsa yeniden İŞ diye bulunur"* vakası).

**Kök `*.md` benim dosyam değil — damgalamayı koordinatör yapacak.**

### B3 · `celayirli @ 1335-12-01` HAYALET — kayıtlı, reçete VERİYE İNMEMİŞ

**ÖLÇÜM.** Künye `celayirli f:1340-01-01`; veride **32 nokta** (Bağdat ·
Musul · Kerkük · Basra · Kerbelâ · Şehrizor) `1335-12-01`den itibaren
`celayirli` yazıyor ⇒ **4 yıl 1 ay hayalet** (`§3.5`).

🟢 **YENİDEN KEŞFETMİYORUM.** `denetim/KUTU-BULGULAR.md` ve
`denetim/TDV-TARIH.md` bunu **zaten ölçmüş, teşhis koymuş ve reçete
yazmış** (Bağdat dönemi dörde/beşe bölünecek: 1340 · 1393-08-29 · 1401 ·
1405 · 1411).

**BENİM EKLEDİĞİM TEK ŞEY DURUMU:** reçete **veriye inmemiş.** Bugün
ölçtüm — Bağdat hâlâ tek parça `celayirli 1335-12-01..1411-01-01` ve
`"timurlu"` kelimesi Bağdat kaydında **sıfır** kez geçiyor. Reçeteyi
bekleten şey de kayıtlı: TDV Ahmed Celâyir'in 1393-1401 arası dönüş yılını
vermiyor ve o oturum koordinatöre üç şık sormuş, cevap görünmüyor.

📌 Ben o boşluğu **uydurmadım**: 1394 maddesini yazdım ama `d:` alanında
*"BULUNAMADI · bu bir BEYANDIR, kesin değildir"* diye açıkça damgaladım.

### B4 · TEBRİZ'İN SAHİPLİK ZİNCİRİ VERİDE YANLIŞ — TDV birebir çürütüyor

**ÖLÇÜM — veri:** `Tebriz → s:ilhanli 1281..1340 · s:celayirli 1340..1386`
**ÖLÇÜM — TDV `celayirliler`:** *"Üveys **1358'de** Azerbaycan ile
Tebriz'i … ele geçirerek devletin sınırlarını genişletti."*
**ÖLÇÜM — TDV `tebriz`:** *"İlhanlılar'ın ardından **Çobanlı, Altın Orda,
Muzafferîler** ve Celâyirliler'in hâkimiyetine girdi."*

**ÇIKARIM.** Veri Tebriz'i 1340'ta Celâyirli'ye veriyor; TDV 1358 diyor.
**Aradaki 18 yıl Çobanlılar'ın (1338-1355) ve Altın Orda'nın (1355-1357)
ve kısa bir an Muzafferîler'in (1358).** Aynı desen Sultâniye · Merâga ·
Erdebil kayıtlarında da var (36 nokta `celayirli @ 1340-01-01`).

⚠️ `yerlesimler.js`e **DOKUNMADIM** — M-1050'nin emri buydu. Rapor.

### B5 · `iran` kimliği 1335'ten itibaren DOLGU olarak kullanılıyor

**ÖLÇÜM.** `Isfahan · Kazvin · Kum · Hemedan · Zencan · Luristan` →
`s:iran 1335-12-01..1503/1508` · `Yezd · Kâşân · Sâve · Dâmgan ·
Burûcird` → `s:iran 1335-12-01..1387-11-01` · `Meşhed · Herat ·
Esterâbâd` → `s:iran 1335-12-01..1381/1510`. Toplam **39 nokta** ayrıca
Kafkasya'da (`Revan · Gence · Şamahı · Bakü · Kabala · Ereş`).
Künye `iran` **f:1925-12-12**.

**ÇIKARIM.** `KONTROL.md 3-03` bu hayaletin **Safevî ayağını** kapatmış
(73 kayıt, 40 dönem bölündü, 235 yıl, commit `9754515`). **Pre-1501 ayağı
açık duruyor** ve bu turda ölçülen budur — yeni bulgu değil, **kalan
ayağın ölçümü.**

### B6 · TDV `②` TUZAĞININ İKİ YENİ VAKASI — ikisi de gövde okunarak yakalandı

```
`incu`        200 · YANLIŞ madde — açılan sayfa İlhanlı TOPRAK/EMLÂK
              terimi "incü"dür, hânedan değil. Maddenin kendi sonunda
              "bk. İNCÛLULAR" yazıyor.  DOĞRUSU: `inculular` (200).
              🔴 Ve `devletler.js`teki `incu` künyesi `kaynak:"incu"`
              diyor — yani YANLIŞ maddeye dayanıyor.

`sultaniyye`  200 · <title> "SULTÂNİYYE" ✓ · madde YANLIŞ.
              Açılan sayfa "Memlük Devleti ordusunda kapıkulu
              birlikleri"dir. Kod DOĞRU, BAŞLIK DA DOĞRU, madde yanlış.
              Şehir maddesi için beş slug sınandı, hepsi 302:
              `sultaniye` · `sultaniye--sehir` · `sultaniyye--sehir` ·
              `sultaniye-sehri` · `olcaytu-turbesi`.
```

🔴 **İkincisi `CLAUDE.md §4`ün bilinen vakalarından daha sinsi**: `ordu` ·
`saray` · `cin` vakalarında **başlık** ele veriyordu. Burada başlık da
doğru. **Ayıran tek şey gövdeyi okumak oldu.**

⚠️ **Ve ilk yazımımda bu tuzağa DÜŞTÜM**: iki madde `kaynak:"sultaniyye"`
taşıyordu. Kendi denetimimde yakaladım ve düzelttim; Olcaytu Türbesi
maddesi artık `kaynak:"bulunamadı — …"` taşıyor. **Kusur gizlenmiyor,
kaydediliyor.**

### B7 · `denetle_kronoloji.py` ÇÖKÜYOR — proje çapında, benim dosyam değil

**ÖLÇÜM.**
```
py arac/denetle_kronoloji.py
  … 9 dosya temiz …
  AttributeError: 'str' object has no attribute 'get'   (satır 129)
```
Çöken dosya **`data/kronoloji_eslesme_yama.js`** (bugün 21:42'de yazılmış,
başka bir oturumun dosyası): `window.KRONOLOJI_ESLESME_YAMA` bir **dizi
değil NESNE**; denetim onun elemanlarını kronoloji maddesi sanıp `.get()`
çağırıyor.

**ÇIKARIM — ve asıl zarar burada.** Betik alfabetik sırada **onuncu
dosyada** ölüyor. Ondan sonraki **20+ kronoloji dosyası hiç
denetlenmiyor** — ve benimki de (`i` harfi) onlardan biri. Yani bugün
*"denetle_kronoloji.py temiz"* diyen hiçbir oturum aslında tam bir denetim
görmedi. **Sessiz değil, gürültülü bir arıza — ama kapsamı sessiz.**

**Benim dosyam temiz olduğunu AYRI ölçtüm** (kendi doğrulayıcımla, aynı
denetim kümesi): zorunlu alan eksiği 0 · tarih biçimi bozuk 0 ·
`onem`/`dunya` aralık dışı 0 · eşleşmeyen `yer_id` 0 · mükerrer 0 ·
ad alanı `KRONOLOJI_IRAN_ARDILLARI` ✓ · Vikipedi kaynaklı madde 0.

### B8 · 1402-07-28 ANKARA SAVAŞI `dunya` AYRIŞMASI — benden önce var

```
kronoloji_akkoyunlu.js    dunya:4    ("devralındı" notuyla)
kronoloji_karakoyunlu.js  dunya:4    ("devralındı" notuyla)
kronoloji_bizans.js       dunya:4
kronoloji_timurlu.js      dunya:5    ("koordinatörün kendi hükmü" notuyla)
```
3 kayıt **4**, 1 kayıt **5**. Çoğunluğa uydum (`dunya:4`) ama ayrışmayı
**kapatmadım** — değiştirilecek dosya benim değil.
📌 Aynı gün `kronoloji_anadolu.js`te `dunya:1` taşıyan iki kayıt daha var;
onlar **aynı olay değil** (*"Ankara Savaşı SONRASI toprak iadesi"*) —
ölçüldü ve ayrışma kümesinden elendi.

### B9 · KÜNYE FARKLARI — üçü de bildirildi

```
incu       künye f:1325-01-01 · TDV `inculular` başlığı "1303-1357"
           ⇒ 1325 savunulabilir (Şerefeddin'in FİİLEN bağımsızlaştığı yıl,
             725/1325) ama TDV'nin başlangıcı 22 yıl daha erken.
ilhanli    künye 1256→1353 ✓ · TDV başlığı "(1256-1353)" BİREBİR
celayirli  künye 1340→1431 ✓ · TDV başlığı "1340-1431" BİREBİR
lur-i-buzurg künye 1155→1424 ✓ · TDV `luristan` "Lur-ı Büzürg (1155-1424)" BİREBİR
```

### B10 · SENİN SAYMADIĞIN DÖRT KÜNYE (M-1062'de sorulmuştu, cevap gelmedi)

`lur-i-kucek` (1184-1597) · `kutlughanli` (1222-1306) · `gilan-kiya`
(1371-1592) · `mazenderan-marasi` (1359-1596) — dördü de `bolge:iran`.
Bu turda **`lur-i-kucek`i kapsadım** (kardeş künye, aynı `luristan`
kaynağı, ayırmak yapay olurdu) ve `kutlughanli`ya bir maddede değindim
(1357 Kirman evliliği). **`gilan-kiya` ve `mazenderan-marasi`ye
DOKUNMADIM** — 1592/1596'ya kadar sürüyorlar ve SAFEVÎ KRONOLOJİ
oturumuyla çakışma riski var. Karar senin.

---

## ⑦ NEYİ BULAMADIM — açıkça

```
BULUNAMADI  Ahmed Celâyir'in 1393-1401 arası Bağdat'a dönüş YILI
            (TDV "Timur Semerkant'a dönünce" diyor, tarih vermiyor)
BULUNAMADI  Sultâniye ŞEHRİ / Olcaytu Türbesi TDV maddesi (5 slug sınandı)
BULUNAMADI  Çobanlılar ve Toga Timurlular için müstakil TDV maddesi
            (6 slug sınandı) — olayları KAPSAYICI maddelerden yazıldı
BULUNAMADI  Lur-ı Büzürg'ün 1424'teki sonunun AYRINTISI
            (TDV `luristan` yalnız aralığı veriyor, olayı anlatmıyor)
ARANMADI    Encyclopaedia Iranica "ATĀBAKĀN-E LORESTĀN" (Spuler) —
            `devletler.js` künyesi ona dayanıyor, ben BAKMADIM.
            "bulunamadı" DEĞİL, "aranmadı".
ARANMADI    Melik Eşref'in sonu ile Altın Orda Cânî Beg'in Tebriz'e
            girişi (1355-1357) arasındaki tam gün — kapsam dışı bıraktım
ÖLÇMEDİM    Bu 155 maddenin `Değişmez 2` (±30 gün kırılma senkronu)
            üzerindeki etkisini — `yerlesimler.js` benim dosyam değil
```

### TUR 2 ÖNERİM (kapsamı sen ver, ben seçmiyorum)

`②`de ölçtüğüm **bilim %1 / kültür %7** eksiğini kapatmanın yolu, bu
hânedanların kendi maddeleri değil **kişi ve şehir maddeleridir.** Ölçtüm,
şu sluglar **CANLI** ve bu turda **kullanılmadı**:
```
hulagu (17.410 · çekildi, okunmadı)   ebu-said-bahadir-han (10.309 · aynı)
hafiz-i-sirazi (200)                  ubeyd-i-zakani (200)
abaka (200)                           gazan-han (kısmen kullanıldı)
```
Ayrıca Merâga Rasathanesi · Nasîrüddin Tûsî · Zîc-i İlhânî ·
Reşîdüddin'in tıp ve tarım eserleri · Kutbüddin Şîrâzî · İlhanlı minyatürü
(Demotte Şehnâmesi) için ayrı slug taraması yapılmadı.

---

## ⑧ COMMIT ve BAĞLANTI

```
dosya    data/kronoloji_iran_ardillari.js   →  window.KRONOLOJI_IRAN_ARDILLARI
defter   oturumlar/IRAN-ARDILLARI-ILERLEME.md
commit   (aşağıya bu turda yazılacak)
```

🔴 **`index.html`e BAĞLANMASI GEREKEN DOSYA:**
`data/kronoloji_iran_ardillari.js` — **ben bağlamadım**, koordinatör
bağlayacak. Şartname §5: *"Bu proje bağlanmamış veri dosyasını DÖRT KEZ
yaşadı — sonuncusu 20 Ağustos'ta, 276 kronoloji maddesi ekranda yoktu."*
