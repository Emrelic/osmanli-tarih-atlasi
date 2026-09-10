# ÇAPRAZ PARALEL — ÜRETEÇ ÇARESİNİN DENETİMİ (ikinci tur)

**Oturum:** ÇAPRAZ PARALEL (OPUS HAZIR KITA 405) · **10 Eylül 2026**
**Kip:** `§7` Oturum 2 — YALNIZ OKUR. `arac/uret_petek.py`ye DOKUNULMADI, koşu AÇILMADI.
**Aletler (üçü de motoru KOŞTURMAZ):**
`ARAC-CAPRAZ-PARALEL-ORTUSME-0910.py` · `ARAC-CAPRAZ-PARALEL-BIRIKIM-0910.py` ·
`ARAC-CAPRAZ-PARALEL-ISTISNA-0910.py`

> ⚠️ **ÖNCE BİR DAMGA — NE ÖLÇTÜĞÜM:** çare **HENÜZ İNMEDİ.**
> `arac/uret_petek.py:4673` hâlâ `_faz1_sonuc = list(_ex.map(...))` diyor.
> Yani **uygulamayı değil ÖNERİYİ ölçtüm.** Bu bilerek: cevaplar yama
> yazılmadan ÖNCE elde olursa yama bir kerede doğru yazılır. **İndiğinde
> diff'i yeniden okumak GEREKİR** — özellikle ②'nin ön koşulu için.

---

## ⓪ ÜÇ SORUNUN CEVABI, TEK BAKIŞTA

| soru | cevap |
|---|---|
| ① Faz örtüşmesi yeni bir yarış doğuruyor mu? | 🟢 **HAYIR** — kesişim tek (`_SAYAC`), ve anahtarlar **ayrık** |
| ② Birikim gerçekten kapanıyor mu? | 🟡 **KOŞULLU** — kapanır, ama koşulu **yazılı değil** ve öngörüm ÇÜRÜDÜ |
| ③ Yarım çıktıyla mı ölüyor? | 🟢 **HAYIR** — dosya yazılmıyor, asılma yok, bekleyenler iptal ediliyor |

**Tek eylem maddesi ②'den çıkıyor** ve kendi önerimi düzeltiyor.

---

## ① FAZ 2 GÖVDESİ, FAZ 1'İN OKUDUĞU BİR ŞEYİ DEĞİŞTİRİYOR MU? — 🟢 HAYIR

`ARAC-CAPRAZ-PARALEL-ORTUSME-0910.py`: FAZ 2'nin ana iş parçacığında yazdığı
**sekiz** paylaşılan kabın, FAZ 1 kapanışındaki (**26 fonksiyon**) görünürlüğü
tarandı.

```
FAZ 2'nin yazdığı :  _PUAN_KESILEN · _PUAN_TAMAMEN · _SAYAC · DEVLET_KAYIT
                     DEV_HALKA · DEV_HALKA_IX · DEV_PARCA · DEV_PARCA_IX
FAZ 1'de GÖRÜLEN  :  yalnız _SAYAC   (sayac():282 üzerinden)
```

🟢 **Koordinatörün asıl endişesi kapandı:** `havuza()`nın yazdığı
`DEV_HALKA` / `DEV_HALKA_IX` / `DEV_PARCA` / `DEV_PARCA_IX` adlarını
**FAZ 1'den ulaşılan HİÇBİR fonksiyon anmıyor** — ne okuyor, ne yazıyor.
Havuz indeksine bakan bir kod yolu **bulunamadı** ⇒ örtüşme havuz yarışı üretmez.

### `_SAYAC` — tek kesişim, ve zararsız çıktı. Sebebi ANAHTARLAR

`sayac()` gövdesi `r = _SAYAC.setdefault(ad, [0, 0.0]); r[0] += n; r[1] += sn`.
Yarış ancak **iki taraf AYNI anahtarı** kullanırsa olur (aynı liste nesnesi).
Anahtar dizgileri iki taraf için ayrı ayrı çıkarıldı:

```
İŞÇİLER (FAZ 1)          'kuşatılmışlık (_kusatilmis)'      _kusatilmis:3274
                         'varlık devri (petek_epok)'        petek_epok:3590
ANA İŞ PARÇACIĞI (FAZ 2) 'yabancı gövde geometrisi'         modül:4649/4657/4685

ORTAK ANAHTAR            YOK
```

⇒ `dict.setdefault` CPython'da atomik; farklı anahtarlar **farklı liste
nesneleri** verir ⇒ ana iş parçacığı ile işçiler **aynı nesneye yazmıyor**.
**Örtüşmenin getirdiği YENİ bir kayıp güncelleme YOK.**

⚠️ Bu, `B4`ü kapatmaz: **işçilerin kendi aralarındaki** yarış (aynı anahtara
dört iş parçacığı) `list()` biçiminde de vardı, üreteç biçiminde de var.
Değişmeyen bir kusur; bu turun konusu değil.

### Yöntemin sınırı — `bulunamadı`, "yok" değil

AST ad taraması şunları **göremez**: `globals()["DEV_HALKA"]` gibi dinamik
erişim · takma adla dolaşan bir başvuru · C uzantısı üzerinden paylaşım.
Üçünü de aradım, **bulunamadı**. `D021`: temiz çıkan tarama, taramanın
dışını temiz ilan etmez.

---

## ② İŞÇİLER ÖNDEN KAÇ İŞ ÇALIŞTIRIR? — 🔴 ÖNGÖRÜM ÇÜRÜDÜ, VE ÖNEMLİ

`ARAC-CAPRAZ-PARALEL-BIRIKIM-0910.py`: 200 iş, 4 işçi, her sonuç 64 KB'lık bir
vekil; **herhangi bir anda hayatta olan sonuç sayısı** (= tepe bellek yükü)
ölçüldü.

```
A) list(map)                    tepe canlı sonuç = 200 / 200      (mevcut biçim)
B) üreteç · HIZLI tüketici      tepe canlı sonuç =   4 / 200   🟢 KAPANIR
C) üreteç · YAVAŞ tüketici      tepe canlı sonuç = 179 / 200   🔴 KAPANMAZ
```

### 🔴 Öngörüm neydi, niçin yanlıştı

Ölçümden **önce** şunu yazmıştım: *"C tepe = O(işçi sayısı) DE OLUR, çünkü
işçiler kuyruktan sırayla çeker ve tüketici en eskiyi bekler; yavaş tüketici
işçileri BEKLETİR."*

**Yanlış.** `Executor.map` CPython'da **bütün işleri baştan `submit` eder**
(`fs = [self.submit(...) for ...]`), sonra sonuçları sırayla verir. Tüketici
**geri basınç uygulamaz**: işçiler kuyruğu boşaltmaya devam eder ve
tamamlanmış-ama-tüketilmemiş sonuçlar **birikir**.

### ⇒ HÜKÜM: çare doğru, ama bir ÖN KOŞULA yaslanıyor ve o koşul YAZILI DEĞİL

> **Üreteç biçimi belleği yalnız FAZ 2 iş başına FAZ 1'den UCUZ olduğu sürece
> sınırlar.**

Bugün bu koşul sağlanıyor ve payı büyük:
```
FAZ 1 / iş   unary_union + delikleri_doldur + gosterim_duzelt
             + KARA kesişimi + puan bölgesi      (onlarca-yüzlerce ms)
FAZ 2 / iş   havuza(mp)  =  halka başına json.dumps + sözlük araması
             + DEVLET_KAYIT.append               (mertebeler daha ucuz)
```
Ama bu bir **tesadüf değil, ölçülmemiş bir varsayım**. Biri FAZ 2'ye iş
taşırsa (bir doğrulama, bir alan hesabı, bir sadeleştirme) **B2 sessizce geri
gelir ve hiçbir denetim ötmez** — çünkü hash aynı kalır, çıktı doğru kalır,
yalnız bellek şişer.

**Çıktıyı/koşuyu NASIL bozar:** çıktıyı bozmaz. FAZ 2 ağırlaşırsa koşu yine
belleğe çarpar — yani B2 kapanmış görünürken **geri gelmeye açık** kalır.

### 🟢 KOŞULSUZ BİÇİM — birkaç satır, ve oranı önemsizleştirir

`.map` yerine **sınırlı pencere**: en çok `2 × işçi` future açık tutulur, en
eskisi tüketilmeden yenisi gönderilmez.

```
from collections import deque
_it = enumerate(BOYALAR.items(), 1)
_pencere = 2 * _MOTOR_PARALEL_ISCI
with _TPE(max_workers=_MOTOR_PARALEL_ISCI) as _ex:
    _kuyruk = deque()
    for _ in range(_pencere):
        _n = next(_it, None)
        if _n is None: break
        _kuyruk.append(_ex.submit(_yabanci_devlet_faz1, _n))
    _dv_i = 0
    while _kuyruk:
        did, dad, renk, ham, tani = _kuyruk.popleft().result()
        _n = next(_it, None)
        if _n is not None:
            _kuyruk.append(_ex.submit(_yabanci_devlet_faz1, _n))
        _dv_i += 1
        ...FAZ 2 gövdesi AYNEN...
```

- **Sıra korunur** — `popleft()` gönderim sırasıyla tüketir ⇒ `havuza()` çağrı
  dizisi değişmez ⇒ sha256 aynı kalmalı (**bu bir ÖNGÖRÜDÜR, `D029` gereği
  sınav yeniden koşturularak doğrulanmalı**).
- Tepe bellek **FAZ 2 / FAZ 1 maliyet oranından bağımsız** O(işçi).
- `ilerleme()` yine gerçek ilerlemeyi basar (B3 kapanır).
- Negatif çapa uygulanabilir kalır.

📌 **Ve bu kendi önerimin düzeltmesidir.** Birinci turda *"tek satır"* dedim;
ölçüm gösterdi ki **tek satır doğru ama KOŞULLU**. Koşulsuzu bu.
⇒ `D129` ailesi: bir çare, ölçüldüğü koşullarla birlikte taşınır.

---

## ③ İSTİSNA FAZ 2'NİN ORTASINDA PATLARSA — 🟢 YARIM ÇIKTI YOK, ASILMA YOK

### (a) Süreç ölür, ve hiçbir çıktı dosyası yazılmaz — üç dayanak

```
① SARMALAYAN try/except YOK    AST: 4440-4700 bölgesini saran try bloğu = 0
                               ⇒ istisna en üste çıkar, süreç ölür
② atexit yalnız KİLİDİ bırakır  uret_petek.py:75  atexit.register(_KILIT.birak)
                               ⇒ hiçbir dosya yazmaz
③ devletler_harita.js DAHA SONRA yazılır
   diff'in kendi yorumu: "YAZIMI ERTELENDİ — B (seyreltme) yüzünden"
   denetle_bosluk.py:436: "Motor devletler_harita.js'i koşu ORTASINDA … yazar"
```

⇒ FAZ 2 ortasında ölen bir koşu **`havuza()`yı yarım uygulamış olur, ama yalnız
BELLEKTE** — ve süreçle birlikte gider. **Diskte yarım çıktı oluşmaz.**

### (b) Asılma ölçüldü — `ARAC-CAPRAZ-PARALEL-ISTISNA-0910.py`

400 iş × 0,02 sn / 4 işçi ⇒ hepsi koşsaydı **~2,00 sn**.

```
A) list(map) · İŞÇİ patlar        0,07 sn · başlayan  11/400 · iptal EVET
B) üreteç    · İŞÇİ patlar        0,07 sn · başlayan  10/400 · iptal EVET
C) üreteç    · TÜKETİCİ patlar    0,09 sn · başlayan  10/400 · iptal EVET  ← YENİ hal
```

Üreteç istisna ile kapanınca `Executor.map`in `finally`si bekleyen future'ları
**iptal ediyor**; `with _TPE(...)` çıkışındaki `shutdown(wait=True)` yalnız
koşmakta olan ≤4 işi bekliyor. **Asılma yok** — öngörüm burada **tuttu**.

### 🟢 Ve üreteç biçimi burada DAHA İYİ

`ilerleme()` FAZ 2'de olduğu için, ölüm anında log **nereye kadar gelindiğini
göstermiş** olur. `list()` biçiminde log bu fazda boştur ⇒ koşu nerede yandı
sorusu yine dosya damgasından tahmin edilirdi — motorun aşama zamanlayıcısının
(`:215` yorumu) emekliye çıkardığı tam o yöntem.

### 🟡 Bu çareyle İLGİSİZ, ama kayda geçsin

`.uretim-basladi` damgası koşu ölünce **silinmiyor** (yalnız başlangıçta
yazılıyor, `atexit` ona dokunmuyor). İki biçimde de aynı ⇒ **önceden var olan**
bir borç, üreteç çaresi onu ne doğuruyor ne büyütüyor.

---

## ④ BULAMADIKLARIM — `D107`

**`bulunamadı`:** FAZ 1'den havuzlara (`DEV_HALKA` ve kardeşleri) bakan bir kod
yolu · ana iş parçacığı ile işçiler arasında ortak `sayac()` anahtarı ·
FAZ 1/FAZ 2 bölgesini saran bir `try` · istisna hâlinde dosya yazan bir
`atexit`/`finally`.

**`ölçülemedi`:** FAZ 2'nin iş başına GERÇEK maliyetinin FAZ 1'e oranı
(②'nin ön koşulu — motoru koşturmadan ölçülemez; **koşu 9'un aşama
bilançosundan bedava gelir**) · dinamik/`globals()` erişimle gizlenmiş bir
paylaşım.

**`okumadım`:** tahta `M-3292` (PARALEL UYGULAMA'nın son teslimi) ve
`oturumlar/PARALEL-UYGULAMA-0910.md`. Kasten — iddiaları koddan ölçüyorum.

---

## ⑤ ÖNGÖRÜLERİM — biri çürüdü, ikisi tuttu

| öngörü (ölçümden ÖNCE yazıldı) | sonuç |
|---|---|
| ①'de kesişim boş çıkacak, havuz yarışı olmayacak | 🟢 **TUTTU** (kesişim tek ve zararsız: `_SAYAC`, ayrık anahtar) |
| ②'de C (yavaş tüketici) de O(işçi) olacak — tüketici işçileri bekletir | 🔴 **ÇÜRÜDÜ** — 179/200. `.map` geri basınç uygulamıyor; **bu turun en değerli bulgusu** |
| ③'te üçünde de bekleyenler iptal edilecek, asılma olmayacak | 🟢 **TUTTU** (10-11/400 başladı, 0,07-0,09 sn) |

📌 Çürüyen tek öngörü, üç sorunun içinde **eyleme dönüşen tek maddeyi** üretti.
Öteki ikisi *"endişe yersiz"* dedi ve kapandı — değerliler, ama iş çıkarmadılar.

---

**ÖZET:** Üreteç çaresi ① ve ③ eksenlerinde **temiz**. ②'de **çalışıyor ama
koşullu**, ve koşul yazılı değil. Öneri: `.map` yerine **sınırlı pencere**
(yukarıda, birkaç satır) — o zaman B2 **koşulsuz** kapanır. Ve hangi biçim
inerse insin, `D029` gereği **bit-denkliği sınavı yeniden koşturulmalı**:
*"hash değişmez"* bugün bir öngörüdür, ölçüm değil.
