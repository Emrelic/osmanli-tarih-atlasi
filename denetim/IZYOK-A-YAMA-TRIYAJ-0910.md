# İZ-YOK DENETİM A — YAMA TRİYAJI

```
OTURUM   İZ-YOK DENETİM A  ·  local_144c89d6-c3d6-4c9c-930f-3b4328a539df
SEVK     1.MURAT · 10 Eylül 2026
SORU     `data/` altında duran ama `girdi.py`nin OKUMADIĞI yama dosyaları
         ARŞİV mi · BEKLEYEN mi · UNUTULMUŞ mu?
```

## ⓪ SAYIM — **94 = 📦54 · ⏳14 · 🔴23 · ⚪3**

🔴 **PAYDA 81 DEĞİL 94** — sevkin listesi eksikti, sebebi `§①`de.

```
📦 ARŞİV       54   içeriği canlı veriye İNMİŞ (kayıt kayıt doğrulandı)
⏳ BEKLEYEN    14   dosyanın KENDİSİ geçerli bir sebep beyan ediyor
🔴 UNUTULMUŞ   23   inmemiş, VE bekleme beyanı yok ya da beyan GEÇERSİZ
⚪ ÖLÇÜLEMEDİ   3   (biri yama değil RAPOR · biri boş · biri uygulanamaz şema)
                94
```

Kayıt düzeyinde (dosya değil):

```
A ailesi (kronoloji)  1633 kayıt · uygulayıcı `arac/yama_uygula.js`
    kuru koşu: zaten vardı 1554 · yazılacak 1 · eşleşme yok 8
B ailesi (sahiplik)   1360 kayıt · uygulayıcı BİLİNMİYOR
    🟢 İNDİ 1289 · 🟡 KISMEN 23 · 🔴 İNMEDİ 49 · ⚠️ AD-YOK 66
C ailesi (öteki)        80 kayıt
```

## ① 🔴 SEVKİN PAYDASI YANLIŞTI — 13 DOSYA SESSİZCE ATLANIYORDU

`denetim/ARAC-BAGLANMAMIS-YAMA-0910.py` üç süzgeç uyguluyor ve üçüncüsü
bir **kör nokta**:

```python
ALAN = re.compile(r'\bad\s*:\s*"')     # süzgeç
if not n: continue                     # ← EŞLEŞME YOKSA SESSİZCE ATLANIR
```

Bu kalıp `ad:"Bağdat"` yazımını tutar, **`"ad": "Bağdat"` yazımını
TUTMAZ** (`ad`dan sonra `:` değil `"` gelir). Ölçüm
(`ARAC-IZYOK-A-EVREN-0910.py`):

```
SAYILAN (sevkin 81'i)                          81 dosya
🔴 JSON BİÇİMLİ — ATLANAN                      13 dosya · 447 kayıt
🔴 TEK TIRNAKLI                                 0
`ad` taşımayan (DOĞRU elenme)                  12
DESEN dışı (etiket_/koridor_/olay_yama)         4
```

Atlananların en büyüğü **`yer_yama_tbmm_1920_0905.js` — 218 kayıt**,
kümenin ikinci en büyük dosyası.

🔴🔴 **VE ALET KENDİ GEREKÇESİNİ GÖRMÜYOR.** Üst yazısı üç motive edici
vaka sayıyor; üçüncüsü **`data/yer_yama_uyg2.js`** ve o dosya atlananların
içinde. ⇒ `D060` (*bir alet, aradığı şeyin NEREDE OLMAYACAĞINI da
bilmeli*) + `D187` (*boş bir küme her öngörüyü doğrular, alet `✓` basar*).

## ② YÖNTEM — ve sevkten bir SAPMA, gerekçesiyle

Sevk *"3-5 kayıt ÖRNEKLE"* diyordu. **Örneklemedim, TAM TARADIM.**

- Karşılaştırma O(1) ve toplam 1360 kayıt ⇒ tam tarama örneklemeden ucuz.
- `D021` riski (örneklem dışını temiz ilan etmek) böylece **sıfırlandı**.
- Sapmayı sevk sahibine bekletmeden bildirdim, gizlemedim.

**"İNDİ" ölçütü:** yama kaydı bir FARK değil, **kaydın YENİ HÂLİDİR**
(`yer_yama_p19.js`in kendi beyanı). Dolayısıyla yamanın **beyan ettiği
her alan** (`d`/`s`/`v`/`isg` küme olarak; `m`/`k`/`bos`/`tur`/`kur` düz
karşılaştırma) canlı kayıtla birebir tutuyorsa İNDİ.
⚠️ Yamanın **beyan etmediği** alan karşılaştırılmaz — kayıt o alan
hakkında bir iddia taşımıyor (`D152`).

**Ayrıştırıcı:** kendi ayrıştırıcımı yazmadım (`D023`). Dosyalar `node`
ile eval edildi (94/94, **eval hatası 0**), canlı veri `girdi.yukle()`,
ad eşleme `ARAC-NORMAL-0903.py::norm`.

## ③ ⏳ BEKLEYEN — 14 dosya, ve BEYANIN GEÇERLİLİĞİ SORULDU

Bir dosyanın *"bekliyorum"* demesi yetmez; **sebebin hâlâ geçerli olması**
gerekir. İki geçerli sebep bulundu:

```
① YENİ NOKTA        "mevcut kayıt YOK — uygulayıcı ekleyemez, koordinatör
                     ELLE ekleyecek (M-2776)".  AD-YOK bu dosyalarda
                     KUSUR DEĞİL, BEKLENEN HÂLDİR.
   doguasya(19) · zaza(7) · 1923_yeni(6) · 1923_nepal_karayip(6) ·
   gronland_col(3) · cermik_sason(2) · hadramut_nokta(2) · hizan(1)
② SIRA / BAĞIMLILIK  "önce şu künye inecek, sonra bu yama"
   misir_himaye(56) · arnavutluk(2) · ada_istankoy(1) · agadez_0906(1)
③ KASTEN GLOB DIŞI   yama_p0037_bekleyen(21) — adı bilerek `yer_yama*`
                     kalıbının dışında, dosya bunu yazıyor
```

## ④ 🔴 UNUTULMUŞ — 23 dosya · ve İÇİNDE BİR ALT SINIF VAR

### ⓐ «BEYAN GEÇERSİZ» — 5 dosya, en sinsi hâl

Bu dosyalar *"`data/` DONUK (koşu 5b/7b), bu dosya `denetim/` altında
BEKLİYOR"* diyor — **ama dosya ARTIK `data/` altında.** Yani taşındı, ve
taşındıktan sonra uygulanmadı. Bekleme sebebi *"koşu sürüyor"*du; koşu
bitti (bugün koşu 9).

```
yer_yama_1923_duzeltme.js         1 kayıt inmemiş
yer_yama_avrupa_1923.js           1
yer_yama_ortadogu_misir_1923.js   5
yer_yama_timbuktu_tam_0906.js     1
yerlesimler_ok102.js              1
```

📌 ***Bir beyanın VARLIĞI değil, GEÇERLİLİĞİ sorulur*** — yoksa bir kez
yazılan *"bekliyorum"* dosyayı sonsuza kadar korur ve `🔴` kovası boşalır.

### ⓑ ORAN GİZLENMESİN — dosya kovası bir ÜST SINIRDIR

En büyük iki `🔴` dosyası neredeyse tamamen inmiş:

```
yer_yama_tbmm_1920_0905.js   218 kayıt → 215 İNDİ, 3 açık
yer_yama_manda_0906.js        58 kayıt →  54 İNDİ, 4 açık
yer_yama_ok109_fetret.js      31 kayıt →  28 İNDİ, 3 açık
```

⇒ *"24 dosya unutulmuş"* cümlesi **yanıltıcı olurdu.** Gerçek iş listesi
**dosya değil KAYIT**: 49 İNMEDİ + 23 KISMEN.

## ⑤ 🟢 ASIL BULGU — İNMEYEN KAYITLAR DAĞINIK DEĞİL, KÜMELENİYOR

İnmeyen kayıtların adları **tekrar ediyor**, ve `yer_yama_doguasya.js`in
üst yazısı tam o adları *"8 ÇAKIŞMA LİSTESİ"* diye anıyor:
Bağdat · Başkale · Halepçe · Kasr-ı Şîrîn · Kutaisi · Yergöğü ·
Çaldıran · Şehrizor.

```
ÖNGÖRÜ (ölçümden ÖNCE):  inmeyenlerin YARISINDAN ÇOĞU o sekiz adsa,
                         "UNUTULMUŞ" tanısı YANLIŞ demektir
ÖLÇÜM:                   %30  ⇒ 🔴 ÖNGÖRÜ ÇÜRÜDÜ, tanı AYAKTA
```

🟢 **Ama çürüyen öngörü bir şey buldu — DOKUZUNCU çakışma noktası:**

```
Timbuktu            5 DOSYADA  ← listede YOK, ve kümenin EN ÇOK
                               çakışan noktası
Kasr-ı Şîrîn        3 (listede)
Mersin              2  ← DİLİM 1'deki 🔴 bulgumun aynısı
Süveyş · Kusayr · Sefâce · Tûr (Sînâ) · Sina güneyi   2'şer
```

**Timbuktu'da iki yama BİRBİRİYLE ÇELİŞİYOR** ve ikisi de inmemiş:

```
yer_yama_ok107.js       bos:"veri-yok"
   gerekçe: "Tuareg için devletler.js'te KÜNYE YOK"
yer_yama_belgesiz7.js   bos:"kabile"
   gerekçe: "TDV `tinbuktu` Tevârikler'in elinde olduğunu AÇIKÇA söylüyor"
```

📌 Ve projenin kendi dersi (`D020`: *"sahipsiz"in sınavı — KAYNAK
KONUŞUYOR MU, SUSUYOR MU*) bu ikisi arasında **karar veriyor**: kaynak
konuşuyor ⇒ `kabile`. `ok107`in gerekçesi *künye* yokluğuna dayanıyor,
oysa ölçüt künye değil KAYNAK. ⇒ **Hüküm koordinatörün, ama dayanak hazır.**

## ⑥ ⚪ ÖLÇÜLEMEDİ — 3 dosya, üçü de ayrı sebep

```
yama_kronoloji_eslesme.js   🔴 BU BİR YAMA DEĞİL, ÖLÇÜM RAPORU.
   Alanları `ad`/`m` taşıdığı için aletim onu yama sandı ve 5 "AD-YOK"
   üretti — ama o adlar yerleşim değil, KRONOLOJİ DOSYASI tarifleri
   ("Çin (Yuan · Ming · Qing)"). Elle düzelttim.
   📌 `arac/yama_uygula.js`in kendi üst yazısı bu sınıfı ADIYLA
   anlatıyor: *"BU KALIBA YALNIZ YAMA KOYULUR, RAPOR KOYULMAZ"* —
   iki rapor daha önce aynı hatayı yapmış, `denetim/` altına taşınmıştı.
   ⇒ ÜÇÜNCÜ VAKA. Dosya `denetim/` altına taşınmalı (`D095`).
yer_yama_owtrad.js          BOŞ — dizi 0 kayıt. Kusur değil, kayıt.
yer_yama_uyg2.js            {alan, eski, yeni} TASNİF şeması — hiçbir
   uygulayıcı bunu indiremez (p0037'nin üst yazısı bunu zaten yazmış).
   Ölçütü YOK, elle hükme muhtaç.
```

## ⑦ ⚠️ KENDİ ALETİMİN ÜÇ KUSURU — üçü de kaydedildi

```
① dict-of-list biçimindeki yamaları SESSİZCE kaçırıyordum. `arac/
   _yama_aile.py` ile sayılarım ayrışınca gördüm — yani İKİNCİ BİR ALET
   gösterdi (D172). Düzeltildi.
② C kovasını ilk turda 80 kayıt/8 dosya diye ⚪'ye attım. İçine bakınca
   çoğunun ölçütü VARDI (`m:` ve `bos:` alanları karşılaştırılabilir).
   ⚪ 8 → 3. 📌 "ölçülemedi" ile "ÖLÇMEDİM" ayrı şeylerdir (D107).
③ 8-çakışma eşleştiricim TAM EŞİTLİK arıyordu ve «Yergöğü (Giurgiu)»yu
   kaçırdı (yamalar parantezli varyant yazıyor). %26 → %30.
   ⇒ Bu, bu oturumda ad ekseninin ÜÇÜNCÜ vakası ve üçü de BENİM
     aletimde (önce "Meriç"→"Limerick"). D064.
```

## ⑧ SINIRLAR — ne ölçmedim

```
⚪ A ailesinin DOSYA BAŞINA durumu: `yama_uygula.js` toplu rapor veriyor
   (1554 indi · 1 bekliyor · 8 eşleşmiyor), dosya kırılımı ÖLÇÜLMEDİ.
   A ailesi dosyaları bu yüzden toplu olarak 📦 sayıldı.
⚪ `§⑤`teki tekrar sayımı bir ÜST SINIRDIR: aletim dosya başına en çok
   6 örnek basıyor. Yön için yeterli, ORAN için değil.
⚪ 8 "eşleşme yok" kronoloji kaydının 7'si ay hassasiyetli `t:` taşıyor
   (`1770-07` · `1389-06` …) — kronoloji o maddelere gün verdiği için
   anahtar tutmuyor. Yamalar BAYAT, kusur kronolojide değil. Ölçtüm,
   düzeltme ÖNERMİYORUM (yetkim dışı).
```

---

## ⑨ AD-YOK'UN AYRIŞTIRILMASI — 1.MURAT'ın ④. sorusu

**Soru:** bir yama kaydının canlı veride karşılığı olmaması iki ayrı şey
olabilir — (a) yerleşim hiç yok, (b) ad ayrışıyor (`Diyarbekir ↔
Diyarbakır` sınıfı, normalleştiricinin **çözmediği ve çözmemesi
gereken**). Hangisi?

**Alet:** `denetim/ARAC-IZYOK-A-ADYOK-0910.py` — üç bağımsız ölçüt, ve
üçü de **ayrı** raporlanır, tek sayıya indirilmez:

```
① KOORDİNAT      yamada lat/lon varsa en yakın canlı nokta kaç km
② AD BENZERLİĞİ  normalleştirilmiş adlar arası difflib oranı ≥ 0.80
③ ÖNEK/PARANTEZ  "Şibâm" ↔ "Şibâm (Hadramut)" sınıfı
```

### CEVAP — **AD-YOK 66 = (a) 61 · (b) 0 · ⚪ 5**

```
(a) GERÇEK BOŞLUK                   61   yerleşim atlasta HİÇ yok
(b) EŞANLAM BORCU                    0   kesin vaka YOK
⚪ RAPOR ARTEFAKTI                   5   yama değil, ölçüm raporu
                                        (yama_kronoloji_eslesme.js)
```

### 🔴 VE ASIL DERS: AD BENZERLİĞİ TEK BAŞINA BEŞ SAHTE BORÇ ÜRETTİ

`difflib ≥ 0.80` ölçütü **5 eşleşme** buldu. Koordinat sütunu eklenince
**beşi de çürüdü** — ve absürtlükleri ölçülebilir:

```
Kiğı (Erzurum)        ~0.80  Kigali (RUANDA)          en yakın canlı 74,4 km
Genç (Bingöl)         ~0.89  Gence (AZERBAYCAN)       54,3 km
Turan (Tuva)          ~0.91  Turfan (Doğu Türkistan)  157,3 km
Batang (Kham)         ~0.86  Batangas (FİLİPİNLER)    224,5 km
Acdîr (Fas)           ~0.85  Vacir/Wajir (KENYA)      5,3 km*
```
`*` Acdîr'in 5,3 km'lik komşusu el-Hüseyme — Wajir DEĞİL. Yani ad
eşleşmesi ile koordinat eşleşmesi **farklı yerleri gösteriyor**.

📌 ***Bir eşanlam sözlüğü, ADA bakarak kurulamaz — YERE bakarak kurulur.***
Bu, `CLAUDE.md §4`ün *"`Diyarbekir ↔ Diyarbakır` bir yazım varyantı değil
AYRI BİR ADdır; normalleştirici onu çözmez ve ÇÖZMEMELİDİR"* kuralının
**ters yüzü**: normalleştirici fazla çözmediği için güvenli; **bulanık
eşleştirici fazla çözdüğü için tehlikeli.**

### 🟡 İKİ ŞÜPHELİ ÖLÇÜLDÜ VE (a) ÇIKTI

```
Patan (Lalitpur)   Katmandu'ya  5,6 km
Bhaktapur          Katmandu'ya 11,5 km
```
Yakınlık gerçek ama eşanlam **değil**: dosyanın kendi üst yazısı sebebini
yazıyor — *"Nepal XV. yüzyılda Katmandu, Bhaktapur ve Lalitpur"* **üç ayrı
Malla krallığı**. Üç başkent, üç ayrı nokta. ⇒ (a).

### ⚠️ SINIR

Ölçüt ② yalnız `≥0.80` eşiğinin üstünü getirir; eşiğin **altında** kalan
bir eşanlam çifti (ör. `Budin ↔ Buda` gibi kısa/ayrık yazımlar) bu
taramada **görünmez**. *"(b) = 0"* demek **"eşik üstünde kesin vaka yok"**
demektir, *"hiç yok"* demek değildir (`D021`).
