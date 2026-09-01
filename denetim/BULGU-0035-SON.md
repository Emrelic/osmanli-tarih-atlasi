# parti-emrelic-0035 — SON ÜÇTE BİR · teslim raporu

**Oturum:** OPUS HAZIR KITA 103 · 1-2 Eylül 2026 · koordinatör 1.MURAT (M-1903)
**Kesim:** 38 açık maddenin son 12'si + tartışmalı **H-0081** = **13 madde**
(kesim uzlaşması M-1915; H-0081'i boşluk kalmasın diye ben aldım)

H-0088'in tam raporu ayrı dosyada: **`BULGU-0035-SON-H0088.md`**

---

## TESLİM — SAYIYLA

```
13 →  5 cozuldu · 1 zaten-dogru · 1 bayat · 6 senin-kararin
```

| madde | hüküm | tek cümlede |
|---|---|---|
| H-0081 | `cozuldu` (kısmen) + **yeni kusur** | rota yazıldı; işaret ZATEN VARDI ve **MÜKERRER** |
| H-0087 | **`bayat`** | yol/koridor katmanı **kurulmuş ve canlı** |
| H-0088 | `senin-kararin` | ölçüldü; çare iki yamayı kilitliyor → ayrı rapor |
| H-0090 | `senin-kararin` | Emre'nin ①'i **yanlış**, ②'si **doğru** — ölçüldü |
| H-0092 | `senin-kararin` | asimetri ölçüldü; çare TDV'nin susduğu tanecikte |
| H-0093 | `cozuldu` | Napolyon Suriye seferi + çekilişi yazıldı |
| H-0094 | `cozuldu` | Vehhâbî üç harekâtı yazıldı |
| H-0095 | `cozuldu` | Alemdar yürüyüşü yazıldı — **Rusçuk'tan değil Edirne'den** |
| H-0097 | `zaten-dogru` (a) + `senin-kararin` (b) | Rusçuk'un `isg:`i VAR; asıl soru DOKTRİN |
| H-0098 | `cozuldu` | Tosun Paşa Hicaz seferi yazıldı |
| H-0100 | **`bayat`** | 15 kasabalık yama YAZILMIŞ, **inmemiş** |
| H-0101 | `senin-kararin` | motor: `uret_petek.py`de dikiş/T-junction işlemi **YOK** |
| H-0102 | `senin-kararin` | H-0047 ile aynı kapsam (o 101'in kesiminde) |

> ⚠️ **Beş `cozuldu`nun tamamı BİR KARARA BAĞLI** — `js/app.js:2675`.
> Ayrıntı §1. Kayıtlar yazıldı ve doğrulandı; çizilip çizilmeyeceği
> koordinatörün vereceği tek satırlık karara bakıyor.

---

## ① 🔴 ÖNCE ENGEL — `SEFERLER` için ad alanı süzgeci YOK

```
app.js:3609  OLAYLAR   /^OLAYLAR(_[A-Za-z0-9]+)?$/    ✅ ek ad alanı OKUNUR
app.js:2853  KORIDOR   /^KORIDOR_YAMA_[A-Za-z0-9]+$/  ✅ ek ad alanı OKUNUR
app.js:2675  SEFERLER  window.SEFERLER                🔴 ÇIPLAK AD — TEK okuma
```
`grep -n "SEFERLER" js/app.js` → okuma noktası **bir tane**.
⇒ `data/seferler_ok103.js` **bağlansa bile** çizilmez; app.js ona hiç bakmaz,
ne hata verir ne uyarır. `CLAUDE.md §7` ③'ün birebir tekrarı.

Üç şık M-1919'da sunuldu: **Ⓐ** app.js'e OLAYLAR'ın zaten kullandığı desen
(ARAYÜZ oturumunun tek satırlık işi) · **Ⓑ** dosyanın sonu
`window.SEFERLER = (window.SEFERLER||[]).concat(...)` olur (emsal:
`savaslar.js:479` `window.ANTLASMALAR.push`) · **Ⓒ** bir sonraki tura kalır.
**Önerim Ⓐ + Ⓒ** — desen kalıcı olur, benden sonraki her yama da okunur.

## ② YAZILAN — `data/seferler_ok103.js` · 9 kayıt

Doğrulandı: 9 kayıt, ters tarih 0, geçersiz koordinat 0, iki noktadan kısa
yol 0. Tarihlerin **tamamı TDV'den**; bulunamayan **`bulunamadı` diye yazıldı**.

| kayıt | tür | f → t | TDV dayanağı |
|---|---|---|---|
| Napolyon'un Suriye seferi | sefer | 1799-02-18 → 03-19 | `aris` · `cezzar-ahmed-pasa` |
| Napolyon'un Akkâ'dan çekilişi | cekilme | 1799-05-20 → 06-14 | `cezzar-ahmed-pasa` |
| Vehhâbî Kerbelâ baskını | akin | 1801-04-01 → 05-01 | `kerbela` |
| Vehhâbî Tâif–Mekke seferi | sefer | 1803-02-01 → 04-30 | `mekke` |
| Vehhâbî Medine'yi alışı | kusatma | 1805-06-01 → 06-30 | `medine` |
| Alemdar'ın İstanbul'a yürüyüşü | sefer | 1808-07-01 → 07-19 | `alemdar-mustafa-pasa` |
| Tosun Paşa Hicaz seferi | sefer | 1811-03-01 → 1813-01-23 | `kavalali…` · `yenbu` · `medine` · `mekke` |
| Osmanlı donanmasının çekilişi | cekilme | 1770-06-01 → 07-05 | `cesme-vakasi` |
| Rus donanmasının Çeşme baskını | deniz | 1770-06-01 → 07-07 | `cesme-vakasi` |

### 🔴 TDV KENDİ İÇİNDE ÇELİŞİYOR — karar senin (§7.1 ⑥)
```
aris                 El-Ariş Fransız işgali      18 Şubat 1799
akka                 Akkâ kuşatması              18 Mart 1799
cezzar-ahmed-pasa    Akkâ kuşatması              19-20 Mart 1799 · kalkışı 20 Mayıs
yafa                 "Şehir 6 Mayıs 1799'da ... Napolyon tarafından işgal edildi"
```
Yafa, El-Ariş ile Akkâ'nın **arasındadır**. Akkâ 19 Mart'ta kuşatma altındaysa
Yafa 6 Mayıs'ta düşmüş **olamaz**. ⇒ Yafa'nın **tarihini kullanmadım**, yalnız
kıyı yolundaki **yerini** (tartışmasız). Hangisinin esas alınacağına karar
vermek bana düşmez — bildiriyorum.

### 🟢 VE BİR VARSAYIM DÜZELTİLDİ — H-0095
Emre *"alemdar mustafa paşanın istanbula gelmesi"* diyor; proje sezgisi
Rusçuk'tur (Rusçuk yârânı). **TDV başka söylüyor:** ordu ateşkeste
**Edirne**'deydi, *"Edirne'den yola çıkıldı"*, Dâvud Paşa sahrasına
**19 Temmuz 1808**'de varıldı. ⇒ Ok **Edirne'den** başlıyor.
⚠️ Çıkış **günü** TDV'de yok; okun başlangıcı **TAHMİN** diye damgalandı.

### 🔴 YAZILMAYAN — ve niçin yazılmadığı
Emre H-0081'de *"rus filosunun geçip geldiği kesik kesik çizgiler"* istiyor;
bu Baltık'tan Akdeniz'e uzanan yolculuktur. **TDV bu ayağı anlatmıyor**, ve
akademik tarama (Cambridge · JSTOR · Brill · T&F · Project MUSE, beş sorgu)
güzergâhı **vermedi**. ⇒ **Uydurulmadı.** Yazılan, TDV'nin gerçekten
anlattığı **Ege ayağıdır** (Anabolu · Hydra · Termiye · Şira · Paros ·
Sisam Boğazı · Koyun Adaları · Çeşme). `bulunamadı` bir sonuçtur; kaynak
çıkarsa kaydın `yol`u başından uzatılır.

---

## ③ H-0081 — İŞARET ZATEN VARDI, ÜSTELİK **MÜKERRER**

Emre: *"çeşme baskını konusunda **ne bir işaretleme var** ne rus filosunun
geçip geldiği kesik kesik çizgiler var"*. İkiye ayırdım:

```
"işaretleme yok"   🔴 YANLIŞ — ve ölçüm bundan FAZLASINI söyledi
   savaslar.js:247  t:1770-07-06 tur:"deniz" ad:"Çeşme (deniz)"   38.32 / 26.30
   savaslar.js:391  t:1770-07-06 tur:"deniz" ad:"Çeşme baskını"   38.32 / 26.31  sure:400
   ⇒ AYNI GÜN · AYNI TÜR · AYNI SERİ · ~870 m arayla İKİ KAYIT
"kesikli çizgi yok" 🟢 DOĞRU — SEFERLER'de 1770 kaydı yoktu, yazıldı
```
📌 Emre *"işaret yok"* dedi; ölçüm *"iki işaret var"* dedi. **İkisi aynı
sebepten olabilir:** üst üste binen iki çapa tek ve bulanık bir işaret gibi
görünür. `CLAUDE.md §11`in *"yakın mükerrer yerleşim"* tuzağının
**savaşlar tarafı** — ve orada eşik 3 km'dir, burada mesafe 870 m.
⇒ **Bu bir bulgudur ve `savaslar.js` benim dosyam değil**; kaydı düşürecek
oturum koordinatörün seçeceği oturumdur. Ben yalnız ölçtüm.

---

## ④ H-0087 — **BAYAT.** Yol/koridor katmanı kurulmuş ve CANLI

Devraldığım hüküm: *"SEVK: MOTOR … uret_petek.py tasarım/üretim
gerektiriyor, büyük iş."* ⑥'nın ölçümü bunu çürüttü:

```
data/koridor.js          window.KORIDOR_DUGUM  65 · window.KORIDOR_KENAR 64
data/ altındaki koridor dosyaları: koridor.js · koridor_f5c9a5.js ·
   koridor_halka2.js · koridor_owtrad.js · koridor_yama_f5c9a5.js  → BEŞİ DE index.html'de BAĞLI
js/app.js'te "KORIDOR" geçişi: 37 kez
```
⇒ Emre'nin sekiz katmanlık listesinin **5. katmanı (yerleşimler arası
koridorlar ve yollar) YAPILMIŞ.** Madde bir "iş" olarak kuyrukta durmamalı.

🔴 **Ve ölçüm bir kusur da buldu:**
```
data/koridor_yama_e9353f.js   →  index.html'de BAĞLI DEĞİL
```
Beş koridor dosyasının beşi bağlı, **altıncısı değil.** Yine *"yama
UYGULANDI mı diye sorulur, OKUNDU mu diye sorulmaz"* ailesi.
⇒ Kalemim dışında; bağlama koordinatörde (`index.html` kilitli değil ama benim değil).

---

## ⑤ H-0090 — Emre'nin İKİ İDDİASINDAN BİRİ YANLIŞ, ÖTEKİ DOĞRU

```
① "savaş ilan edildiğine dair bir kronolojik madde yok"
   🔴 YANLIŞ — VAR ve tam gününde:
      1787-08-17  "Rusya'ya savaş ilanı — Kırım'ı geri alma teşebbüsü"
   İsmail'in düşüşünden ÜÇ YIL ÖNCE. (Külliyatta savaş ilanı maddesi
   toplam 4: 1714 Venedik · 1768 Rusya · 1787 Rusya · 1798 Fransa.)

② "rusların eflak ve boğdana askeri olarak girmeleri kronolojide yok"
   🟢 DOĞRU — 1787-08-17 ile 1790-12-22 arasında 8 madde var ve
   HİÇBİRİ Tuna prensliklerine girişi anlatmıyor:
      1788-02-09 Avusturya'nın savaşa girmesi · 1788-04-24 Böğürdelen ·
      1788-12-17 Özi'nin düşüşü · 1789-04 Nizâm-ı Cedîd ·
      1789-04-07 I. Abdülhamid'in ölümü · 1789-04-07 III. Selim'in cülûsu ·
      1789-07-14 Bastille · 1790-01-31 Osmanlı-Prusya İttifakı
```
📌 **Ve ①'in yanlış olması tesadüf değil**: Emre 1790 civarını okuyordu,
madde 1787'de. `CLAUDE.md`nin *"şikâyet hâlâ geçerli mi"* ölçümünün
**mekân tarafı**: madde vardı, **görüş alanında değildi.**

⇒ Kalan iş gerçek ama **bir madde değil BİR SINIF**: Emre *"tüm savaş
başlangıçlarında varsa savaş ilanı yığınak hareket işgal"* diyor.
1281 maddede savaş ilanı maddesi **4**. Bu bir kronoloji partisidir,
tek kalem değil. **Kapsam kararı senin.**

---

## ⑥ H-0092 — asimetri ÖLÇÜLDÜ, çare TDV'nin sustuğu tanecikte

```
Mısır kutusunda (22-32,5K / 24-35,5D) `isg:` katmanı:
   1798-07-01 → 1801-10-09  fransa      7 nokta
      Kahire · İskenderiye · Reşîd · Dimyat · Asyut · Süveyş · Sina güneyi
   1882-09-13 → 1914-12-18  ingiltere  ~50 nokta
      Demenhûr · Tanta · Mansûre · Bilbîs · Sâlihiyye · Ebûkîr · Katye ·
      El-Arîş · Benî Süveyf · Feyyûm · Minye · Esna · Edfû · Asvan …
```
⇒ **Aynı coğrafyada iki işgal katmanı var ve biri ötekinin yedi katı
tanecikte.** Emre'nin *"taranmamış alanlar doğru mu"* sorusunun cevabı
budur: taranan 7 doğru, **taranmayanların çoğu yanlış.**

🔴 **Ama çareyi YAZMADIM ve sebebi kaynak disiplinidir:** TDV `misir`
maddesi yalnız *"Fransızlar'ın Temmuz 1798'deki işgali Mısır'da yeni bir
dönem açmış"* diyor — **kasaba kasaba kimin denetiminde olduğunu
söylemiyor.** Uydurmak yerine bırakıyorum.
🟢 **Kanal hazır:** `arac/_sahiplik_uygula.py` `isg` alanını da uyguluyor,
`data/yer_yama*.js` kalıbını glob'luyor. Yani iş, kaynak bulunur bulunmaz
tek dosyayla kapanır.
🟢 **Ve aday listesi hazır:** 1882 İngiliz katmanındaki ~50 adın Aşağı ve
Orta Mısır'da kalanları (Asyut'un kuzeyi) doğrudan aday kümesidir; adlar
veride zaten var, yeni nokta gerekmiyor.
⚠️ **Akkâ AYRI:** kuşatıldı ama **alınamadı** — `isg:` YAZILMAMALI.

---

## ⑦ H-0097 · H-0100 — İŞ YAPILMIŞ, **İNMEMİŞ**. Ve sebebi ölçüldü

### H-0097 (a) — Rusçuk: `zaten-dogru`
```
Rusçuk  isg: [{ f:"1810-09-26", t:"1811-06-01", d:"rusya", kaynak:"ruscuk" }]  ✓ VAR
```
Emre'nin *"Rusçuk taralı gösterilmeli"* isteği **karşılanmış.**

### H-0100 — `bayat`: 15 kasaba YAZILMIŞ, uygulanamamış
`data/yer_yama_p0037.js` **26 kayıt** taşıyor; 15'i tam da Emre'nin
şikâyet ettiği Eflak-Boğdan kuşağı ve üçer işgal penceresiyle:
```
Bükreş · Tırgovişte · Piteşti · Slatina · Buzău · Rimnik-i Sârat ·
Krayova · Tırgu Jiu · Rimnik · Turnu Severin · Kımpulung ·
Yaş · Roman · Birlad · Kalas
   isg: 1806-12-22→1812-05-28 · 1828-06-23→1834-01-01 · 1848-01-01→1849-05-01  rusya
```
**Canlı veride bu noktaların `isg:`i BOŞ.** Yani rapor edilen iş gerçek,
ama haritaya inmemiş.

### 🔴 SEBEP — uygulayıcı **ADA** göre çakışıyor, **ALANA** göre değil
`arac/_sahiplik_uygula.py` kuru koşusu 16 kaydı atlıyor; 6'sı
*"ÇAKIŞMA … KARAR GEREK"*. Bunu alan alan ölçtüm:

```
aynı ada dokunan kayıt: 30
   ALAN kesişen (gerçek çelişki):  7
   ALANLARI AYRIK (tamamlayıcı) : 23      ← boşuna kilitli
```
Örnek — `Tırgu Jiu`, `Rimnik`, `Turnu Severin`, `Kımpulung`, `Roman`,
`Birlad`, `Kalas`:
```
yer_yama_p0037.js    -> isg · kaynak · gerekce
yer_yama_romanya.js  -> s
```
**Aynı kayda dokunuyorlar ama AYRI ALANLARA.** Çelişki yok; yalnız ad
ortak. Yine de ikisi de uygulanmıyor.
⚠️ Gerçek çelişme yalnız 7'de var, ve `Bükreş`/`Yaş`'ta çelişen şey iki
ayrı **`isg:` önerisidir** (`gece_v3` 1806-11-30/12-22 · `p0037` farklı
gün) — bu **karar gerektiren** cinstir, haklı olarak durdurulmuş.

⇒ **İSTEK:** `_sahiplik_uygula.py`nin çakışma testi **alan düzeyine**
inerse 23 kayıt kendiliğinden akar. `arac/` kilitli ve benim değil —
ölçüm burada, karar ve uygulama sende.

🔴 **Ve p0037'de bir kusur var, kayda geçiriyorum:** dosyanın 26. kaydında
`ad` **yok**; alanları `[dosya, t, b, eksik_nokta, not, kaynak]`, yani
**kronoloji-biçimli bir kayıt sahiplik yamasının içine düşmüş.**
`_sahiplik_uygula.py` onu `ad`sız diye sessizce atlar. Kaybolmuş bir kalem
olabilir.

### H-0097 (b) — DOKTRİN SORUSU: `senin-kararin`
Emre'nin asıl istediği bir düzeltme değil bir **kural**:
> *"taralı alan gösterimini ne zaman kullanmamız gerekiyor? bazen
> antlaşmalarda elden çıkan ele giren toprakları gösterirken de
> gösteriyoruz, bazen işgalde gösteriyoruz, bu kafa karışıklığına yol
> açmamalı."*

Bu bir **tasarım kararıdır** ve tek bir oturumun vereceği karar değildir.
Ölçebildiğim: bugün `isg:` **90+ kayıtta** kullanılıyor ve **iki ayrı
anlamda** — geçici askerî işgal (Fransa/Mısır 1798, Rusya/Tuna 1806) ve
hukuken devredilmemiş uzun idare (Avusturya/Bosna 1878-1908, İngiltere/
Mısır 1882-1914). İkincisi 40+ kayıtla çoğunluk. **Kuralı yazmak senin.**

---

## ⑧ H-0101 · H-0102 — MOTOR. Ölçüldü, hüküm verilmedi

### H-0101 — gövde-gövde dikiş / T-junction
Emre: *"iki haritanın sınırlarının birbirine örtüşmemesi ve üstüste
binmesi sonucu oluşan görüntü hatası… harita boyunca tarayıp düzeltecek
bir oturum görevlendirmemiz lazım"*.
```
uret_petek.py içinde   "T-junction"  0 kez      "dikis"  0 kez
                       "Chaikin"     2 kez
                       "yetim"      12 · "_ENKLAV" 10 · "ADA KURALI" 8 · "KARA-KISITLI" 3
```
⇒ Motorun **ada · yetim yüz · kara kısıtı** işlemleri var; **komşu gövdeler
arası dikiş** işlemi **YOK.** Devraldığım hüküm (*"BAŞKA İŞE BAĞLI: MOTOR"*)
ölçümle **doğrulandı** — ve devralınan not'un uyarısı da yerinde:
tarama hedefi **RENK değil GEOMETRİ** olmalı, yanlış oturuma sevk iki tur
kaybettirir.

### H-0102 — emilme
`H-0047` ile **aynı talep** (motorun emilme mekanizmasının değiştirilmesi).
H-0047 **OPUS 101'in kesiminde**; ikisi ayrı ayrı işlenirse iki oturum aynı
motoru iki yönden değiştirmeye kalkar. ⇒ **Birleştirilmeli**, ve birleştirme
kararı koordinatörde. Ben H-0047'ye dokunmadım (kesim dışı).

---

## ⑨ NE YAPMADIM — açıkça

- `js/app.js`, `index.html`, `data/savaslar.js`, `data/yer_yama_kafkas.js`,
  `data/yer_yama_p0037.js`, `arac/` — **hiçbirine yazmadım.** Benim değiller.
- `arac/uret_petek.py · girdi.py · renkler.py` — **koşu kilitli**, yalnız okundu.
- `_sahiplik_uygula.py` ve `yama_uygula.js` yalnız **KURU** koşuldu; `--yaz`
  hiç çağrılmadı.
- Kendi `data/yer_yama_ok103.js` dosyamı **geri çektim** (üç yamayı
  blokluyordu) — ayrıntı `BULGU-0035-SON-H0088.md` §4.

## ⑩ COMMIT — bende değil
`data/seferler_ok103.js` ve bu iki `denetim/*.md` **commit'siz** duruyor;
commit girişimi bu oturumun izin sınıfı tarafından reddedildi.
⚠️ `CLAUDE.md §7`: commit'siz dosya başka bir oturumun `git add -A`'sına
karışabilir. **Koordinatörden commit istiyorum**, yol adlarıyla:
```
data/seferler_ok103.js
denetim/BULGU-0035-SON.md
denetim/BULGU-0035-SON-H0088.md
```
