# BULGU — `kaynak:` DENETİMİ · aleti YAZILDI ve KOŞTU

**Oturum:** KAYNAK-DENETIM-0907 · `local_a6f8263a-6b20-402f-9873-fa068acf6e26`
**Şartname:** `denetim/SARTNAME-KAYNAK-DENETIMI-0905.md` (NEHİR SÜRTÜNME, 5 Eylül)
**Alet:** `denetim/ARAC-KAYNAK-DENETIM-0907.py`
**Cins:** ÖLÇÜM + ALET. Veri yazılmadı, yama üretilmedi, `data/`+`arac/` DONUK (koşu 8).

---

## ⓪ BİTİŞ ÖLÇÜTÜ — SAYIYLA

```
alet KOŞUYOR ✓   ·   C13 DÖRT AYAK: 26 sınavın 26'sı GEÇTİ ✓

KÜNYE     demet 172 · uç 172     🔴 15 · 🟡 110 · ⚪ 43 · ⚫ 4
YERLEŞİM  demet  56 · uç 268     🔴  5 · 🟡  40 · ⚪ 11 · ⚫ 0
                                  (uç)  72      105      91      0
──────────────────────────────────────────────────────────────
🔴 TOPLAM  20 demet · 87 uç
```
⚠️ `⚪` **"temiz" DEĞİL** — `doğrulanmadı`. `§4⑧`: rakamın geçmesi, o rakamı
taşıyan cümlenin doğru şeyi tarihlediğini göstermez.

**§3 ŞİŞME: 440 uç / 228 demet = 1,93×.** Uç sayan bir rapor kusuru **iki
kat büyük**, çareyi de iki kat pahalı gösterirdi.

---

## ① ALET ŞARTNAMENİN YER DOĞRUSUNA KARŞI SINANDI — VE İKİ GERÇEK KUSUR ÇIKTI

Şartname `§5`te dört vakayı **elle** ölçmüş. Aleti onlara karşı koşturdum;
`C13`ün dört ayağı **sentetik** girdiyle sınar, bu **gerçek** yer doğrusudur.

### 🔴 KUSUR 1 — sayfa aralığı hicrî yıl sanıldı (`portekiz`)
```
alet dedi   🟡  «yıl YOK ama takvim kapısı tuttu (hicri:533)»
gövdedeki   «…Stuttgart 1968, III, 652-662; IV, 579-584; VI, 533-538.»
gerçek      533 bir BİBLİYOGRAFYA SAYFA ARALIĞI · doğru kova 🔴
```
Sınır koruması `(?<!\d)533(?!\d)` `1533`ü eler ama **tire rakam değildir**.
🔴 Ve şartname bu vakayı **adıyla** yazmıştı (`§2④`: *"`533` sayfa aralığını
(`533-538`) tarih sanar"*) — **ben onu hicrî kapısında yeniden ürettim.**
📌 Ve tuzak **sistemik**, tek vaka değil: ölçüldü, **124 gövdenin 121'inde**
`NNN-NNN` deseni var.
🟢 ÇARE: hicrî adayında `kati=True` — tire de sınır sayılır. **Yalnız hicrîde**,
çünkü 4 haneli `1801-1805` gerçek bir **yıl aralığıdır** (1801 gerçekten geçer),
3 haneli `533-538` ise sayfa.

### 🔴 KUSUR 2 — gün eşleşmesi BAŞKA YILA aitti ⇒ **SAHTE ⚪** (`kirim`)
```
alet dedi   ⚪  «gün biçimi geçiyor (19 Nisan)»
gövdedeki   «19 Nisan 1918'de Alman askerî birlikleri Kırım'a girmeye başladı»
verinin     1783-04-19                        ⇒ 135 YIL SONRAKİ BAŞKA OLAY
aynı kayıt  f=1771-07-01 için bulunan «1 Temmuz» da «1 Temmuz 1919»du
```
🔴 En tehlikeli kova **⚪**'dir, çünkü *"çürütülmedi"* diye okunur — ve orayı
**sahte** dolduruyordu. Şartname bunu da yazmıştı (`§7`: *"«19 Nisan» → «19
Nisan 1918» — BAŞKA YIL"*).
🟢 ÇARE: gün eşleşmesi **ancak yılı ±250 karakter içinde ise** sayılır; yoksa
eşleşme yok sayılır ve kayıt **🟡**'ye düşer — ki doğru hüküm odur:
***gün bu kaynaktan gelmiyor.***
⚠️ Ve ters yön sınandı (`§7`: *"sıkı ayıklar ve KAYBEDER"*): `urabi-pasa
f=1882-09-13` gövdede *"13 Eylül'de"* geçiyor, yıl ~110 karakter ötede —
pencere 250 tutuldu, **kaybolmadı**, ve 400 karakterde kaybettiği de ayrı
bir dalla sınandı.

### 🔴 KUSUR 3 — alet İMPORT EDİLEMİYORDU (kendi kusurum, ayrı eksen)
Modül seviyesinde `sys.stdout = io.TextIOWrapper(sys.stdout.buffer, …)`
yazmıştım. Bir başka betik aleti **import edince** eski sarmalayıcı GC'ye
gidip altındaki buffer'ı **kapatıyor** ve import eden betik ilk `print`te
`ValueError: I/O operation on closed file` ile **çöküyordu**.
⇒ `denetim/` aletleri yeniden kullanılıyor; **import edilebilir** olmalılar.
Sarmalama `if __name__ == "__main__"` içine alındı.

### 🟢 DÜZELTMELERİN ÖLÇÜLEN ETKİSİ
```
                ÖNCE            SONRA
KÜNYE      🔴 14 🟡 103 ⚪ 51   🔴 15 🟡 110 ⚪ 43
YERLEŞİM   🔴  5 🟡  35 ⚪ 16   🔴  5 🟡  40 ⚪ 11
──────────────────────────────────────────────────
⚪ TOPLAM       67                54     ⇒ 13 SAHTE ⚪ ELENDİ
```
📌 İki kusur da **şartnamede yazılıydı** ve ben ikisini de yeniden ürettim.
`§11`: ***kural yetmiyor.*** Yakalayan şey kural değil, **yer doğrusuna karşı
koşulmuş bir sınav** oldu — ve o sınav `C13`ün dört ayağında **yok**.
🟢 ⇒ `C13`e önerilen beşinci ayak: **⑤ YER DOĞRUSU — aletin, elle ölçülmüş
bilinen vakalarla uyuştuğu gösterilir.** Sentetik girdi aletin *mantığını*
sınar; yer doğrusu *gerçek metnin* onu nasıl kırdığını gösterir.

---

## ② `kahire` — KUSUR DEĞİL, **OTOMASYONUN SINIRI**

Şartname `kahire`yi 🔴 diyor, alet 🟡 diyor. **Alet kendi tanımına göre
doğru**, ve fark şartnamenin kendi kuralını doğruluyor:
```
gövdede `1801` TAM 1 KEZ geçiyor:
   «…ülke ve başşehri önce Fransız işgalinin (1798), daha sonra ise
     1801-1805 yıllarının krizini yaşadı»
⇒ yıl VAR (otomatik ölçüt: 🟡) ama İLGİSİZ BİR BAĞLAMDA (insan ölçütü: 🔴)
```
🔴 **VE BU BİR SINIRI GENİŞLETİYOR.** Şartname `§7` *"yalnız 🔴
otomatikleşir; ⚪/🟡 insan okuması ister"* diyor. `kahire` gösteriyor ki
**otomatik 🟡 kovası da insan-🔴'ları saklıyor.**
⇒ Dürüst ifade: ***otomatik 🔴, kusurun TAMAMI değil ALT SINIRIDIR.***
`🔴 20 demet` bir taban; gerçek sayı daha büyük ve **ölçülemez**.

---

## ③ 🔴 EN BÜYÜK KALEM — ÇARE BİLİNİYOR, ÖLÇÜLDÜ, AMA VERİYE İNMEMİŞ

```
urabi-pasa  t=1914-12-18   🔴   ×55 kayıt   (f ucuyla birlikte 110 uç)
```
Şartname `§5` bunu *"🔴 KESİN → **ÇÖZÜLDÜ**: `kaynak:"misir"` (55 kayıt)"*
diye kaydediyor. **Veride hâlâ `urabi-pasa` yazıyor** — çare inmemiş.

🟢 **VE ÇAREYİ ALETİN KENDİ SINIFLAYICISIYLA SINADIM — İŞLİYOR:**
```
                   1882-09-13 (f)        1914-12-18 (t)
urabi-pasa (18.167 kar)   ⚪                    🔴
misir     (232.120 kar)   ⚪                    ⚪   ← 🔴 KAPANIYOR
```
⇒ **Tek bir alan değişikliği 55 kaydı 🔴'dan çıkarıyor.** `§3`ün kendi dersi:
*bir 🔴 düzeltilirse 55 kayıt birden düzelir — kalem göründüğünden UCUZ.*

### 🔴🔴 AMA YAMA YAZAMAM — VE SEBEBİ ÖLÇÜLDÜ
`arac/_sahiplik_uygula.py:504` — `kaynak` **`SKALER_KORUNAN`**:
> *"`kaynak:` ÜZERİNE YAZILMAZ — dolu bir `kaynak:`ı ezmek, DOĞRULANMIŞ bir
> dayanağı silmektir. Yalnız BOŞSA yazılır; doluysa `kaynak-dolu` diye
> sayılır ve ATLANIR. **Değiştirmek isteyen ELLE yapar.**"*

⇒ `denetim/yer_yama_kaynak_*_0907.js` yazsaydım **sessizce atlanırdı** ve
rapor *"yama indi"* derdi. `§11`in *"alet sessizce hiçbir şey yapar ve
çıktısı senin öngörünle aynı olur"* tuzağı. **YAZMADIM.**
🟢 Ve uygulayıcının sözleşmesi **doğru** — bu bir kusur değil bir **kapı**:
55 kaydın dayanağını değiştirmek, bir araştırmacı beyanını değiştirmektir.
⇒ **Oturum 0'ın kalemi**, koşu bitince, elle.

---

## ④ ÖTEKİ 🔴'LAR — 20 demet

```
UÇ AĞIRLIKLI (çare ucuz)
   1914-12-18  t  urabi-pasa            ×55   → çare ÖLÇÜLDÜ (`misir`), yukarı bak
   1908-10-05  t  berlin-antlasmasi     ×14   → 🔴 sınıf ③ «BAŞKA ŞEY DİYOR»:
                                                TDV «7 Ekim 1908», veri 5 Ekim.
                                                AYNI FİİL («ilân»), iki gün fark.
                                                Şartname bunu ayrıştırmış ve
                                                ÇÖZMEMİŞ ⇒ damga HAK EDİLMİŞ.
TEKİL (her biri 1 uç)
   bizans 1461-08-15 · kacarlar 1789-03-21 · rusya 1547-01-16 ·
   rodos 1798-06-12 · kavalali-mehmed-ali-pasa 1914-12-18 · karadag 1918-11-26 ·
   ispanya 1479-01-20 · portekiz 1139-07-25 · timur 1507-05-01 ·
   sardinya 1720-08-02 · cin--ulke 1234-02-09 · cin--ulke 1636-05-15 ·
   amerika 1572-09-24 · kastilya--ispanya 1230-09-23 ve 1479-01-20 ·
   eflak 1806-11-30 ve 1812-05-28 · bogdan 1806-11-30
```
⚠️ Bu liste bir **kusur listesi değil bir OKUMA listesidir**: 🔴 «kaynak bu
tarihi taşımıyor» der, «tarih yanlış» **demez** (`§0`).

---

## ⑤ ⚫ ÖLÇÜLEMEDİ — 4 demet, ve hiçbiri "TDV'de yok" DEĞİL

```
emir-suleyman  ×2  yönlendirme kütüğü   (§4⑥)
sulu           ×1  yönlendirme kütüğü   ·  gövde 2.572 kar
kolombiya      ×1  302 — ölü slug
```
🔴 `§4⑤`: **ölçülemedi ≠ ölü ≠ yok.** Bu dördü için *"TDV'de yok"*
**yazılmadı** ve yazılmamalı.

---

## ⑥ NE ÖLÇMEDİM — `ölçmedim` diye yazıyorum

```
⚫ `🟡` (150 demet) ve `⚪` (54 demet) kovalarının CÜMLELERİ okunmadı.
   Şartname `§7` zaten «otomatikleştirilemez» diyor; ben de OKUMADIM.
⚫ Künye evreninde SLUG OLMAYAN 399 · yerleşimde 147 dayanak — serbest
   metin, bu şartname onlara UYGULANMAZ. AMA ölçtüm: birçoğu ters tırnak
   içinde bir slug TAŞIYOR (`TDV \`sanliurfa\` — AY hassasiyeti`) ⇒
   çıkarılabilir. Bir sonraki tur için kalem, bu turun işi DEĞİL.
⚫ Kronoloji katmanı (`olaylar*.js` · `kronoloji*.js`) — hiç dokunulmadı.
⚫ `kahire` ve `berlin-antlasmasi` için DOĞRU kaynak ARANMADI.
```

---

## ⑦ TABAN BÜYÜMÜŞ — şartnamenin sayıları 5 Eylül'e ait

```
                 şartname (5 Eyl)   ÖLÇÜM (7 Eyl)
künye toplam           591               627
künye slug dayanak     148               228
yerleşim dönem-slug    101               179
```
⇒ Şartnamenin `§4` evren zinciri **bayat**; kendi zincirimi kurdum ve
adımlarını `--evren` çıktısında elenen sayılarıyla birlikte basıyorum.

🟢 **VE BİR VARSAYIMI ÖLÇTÜM, ÇÜRÜDÜ:** şartname *"kayıt üstündeki `kaynak:`ı
dönemlere miras saydım — %77 miras"* diyor. `girdi.yukle()` bu mirası
**KENDİSİ YAPMIYOR**: `dönem.kaynak == kayıt.kaynak` olan yalnız **12** dönem
var ve onlar da elle aynı yazılmış (`oniki-ada`). ⇒ Miras, ölçen oturumun
**kendi mantığındandı**; `p.get("kaynak")` doğru alan.

---

## ⑧ KOMUTLAR

```bash
py denetim/ARAC-KAYNAK-DENETIM-0907.py --sinav    # C13 dört ayak (26 sınav)
py denetim/ARAC-KAYNAK-DENETIM-0907.py --evren    # HTTP YOK, evren + eleme
py denetim/ARAC-KAYNAK-DENETIM-0907.py --kosu --json denetim/_kaynak_denetim_0907.json
```
Gövdeler `denetim/_kaynak_govde/` altında önbellekte (124 slug) — ikinci
koşu HTTP'siz. 🔴 `arac/denetle.py`ye **KONMADI** (şartname `§6`: ölçüt HTTP
gerektiriyor, o alet çevrimdışı olmak zorunda).
