# BULGU — KASR-I ŞİRİN ZİNCİRİ: Osmanlı-İran sınır belgeleri zinciri

> **Oturum:** KITA 4 — KASR-I ŞİRİN ZİNCİRİ (local_3cda9279) · **Sevk:** 1.MURAT,
> 11 Eylül 2026 · `data/` ve `arac/` DONUK (M-3487), yalnız OKUNDU.
> **Teslim:** `denetim/ZINCIR-C-IRAN-0911.json`

## D022 ÖNGÖRÜSÜ — kısmen uygulanabilir, açıkça damgalanıyor

Bu görev çoğunlukla **niceliksel bir ölçüm değil, dağınık kaynakların bir
zincire dizilmesi**. Klasik D022 ("sayıyla öngörü yaz, sonra ölç") burada
tam oturmuyor — ama BİR yerde oturuyor ve öngörü ÖNCEDEN yazıldı:

> **ÖNGÖRÜ (araştırmaya başlamadan önce, konuşma içinde):** "1847 II. Erzurum
> muhtemelen ①çizgi hassasiyetinde ve C_GEREKLİ olacak çünkü TDV `sattularap`
> maddesi onu 'en kapsamlı' antlaşma diye tanımlıyor."

**ÖLÇÜM:** ÇÜRÜDÜ. `denetim/BIRINCIL-C-0911.json`'ın kendi
`DUZELTME_0911_ucuncu_pilot` bloğu bunu zaten benden önce ölçüp düzeltmişti:
Şattülarap nehri motorun **ikinci kapısında** (scalerank≤5.0 eşiği) zaten
tanınıyor, kod değişikliği gerekmiyor — yani **AB_YETER**, C_GEREKLİ değil.
Bu görevin talimatı "1847'yi C olarak kodla" diyordu; ben bunun yerine
**neden kodlamadığımı** açıkça yazdım (bkz. JSON §③) — sessizce atlamak
`D026` ("bir kısıt uygulanamadı diye sessiz geçilirse, uygulanmış sanılır")
olurdu.

---

## 1. ZİNCİR — 9 belge, sırayla, hassasiyet damgalı

| # | Belge | Tarih | Hassasiyet | Durum |
|---|---|---|---|---|
| 1 | Amasya | 1555-05-29 | ②yer | AB_YETER |
| 2 | Ferhad Paşa/İstanbul | 1590-03-21 | ②yer | AB_YETER |
| 3 | Nasuh Paşa | 1612-11-20 | ②yer (miras) | AB_YETER |
| 4 | Serav | 1618-09-26 | ②yer (🟡 zayıf kaynak) | AB_YETER (zararsız) |
| 5 | **Kasr-ı Şirin** | 1639-05-17 | **③bölge** | **C_GEREKLİ — KODLANDI** |
| 6 | Kerden | 1746-09-04 | ③bölge (miras) | C kaydı gerekmiyor — TEYİT |
| 7 | I. Erzurum | 1823-07-29 | ③bölge (miras, 🟡 zayıf kaynak) | C kaydı gerekmiyor — TEYİT |
| 8 | **II. Erzurum/Şattülarap** | 1847-05-31 | ①çizgi (yalnız o segment) | 🔴 **AB_YETER — C KAYDI BİLEREK KODLANMADI** |
| 9 | İstanbul Protokolü | 1913-11 → 1914-10 | ①çizgi (TAM hat+sınır taşı) | C_GEREKLİ — **tespit edildi, kodlanmadı** (kapsam dışı) |

**Tam sayıyla:** 9 belgenin **4'ü** (①-③ arası) doğrudan/dolaylı ②yer,
**3'ü** ③bölge (biri asıl, ikisi miras-teyit), **1'i** ①çizgi ama C
gerektirmiyor (motor zaten çözüyor), **1'i** gerçek ①çizgi C_GEREKLİ ama
görev kapsamı dışında bırakıldı (yalnız tespit edildi).

**Kaynak sağlamlığı:** 9 belgenin 6'sı sağlam (TDV canlı ya da whitelisted
akademik: Encyclopaedia Iranica, Iranian Studies/Cambridge), 2'si 🟡 zayıf
(Serav, I. Erzurum — Wikipedia/Fandom-türevi özetler, **alıntı olarak
kullanılmadı**, yalnız işaretlendi), 1'i (İstanbul Protokolü) whitelisted
akademik kaynakla doğrulandı ama tam metne inilmedi.

---

## 2. SORU ① — C şeması "hassasiyet" alanı gerektiriyor mu?

**EVET.** Aynı sınırın kendi tarihi içinde ①→③→①'e sıçradığı ölçüldü
(1639 ③bölge → 1847 kısmi ①çizgi-ama-C-değil → 1913 gerçek ①çizgi-C).
Tek bir `C_GEREKLI: true/false` bayrağı bu zinciri **yanlış temsil eder**
— `D116` ("çok parçalı bir ilişkiyi tek sayıya indiren ölçü, kusuru alt
sınır olarak gösterir") burada tam örneğini buluyor.

**Önerilen alan:** `hassasiyet: ①çizgi | ②yer | ③bölge | ④suskun`, ve bu
alan **belge düzeyinde değil MADDE/KLOZ düzeyinde** tutulmalı — çünkü
kardeş oturumun Karlofça pilotu (SEMA-C-0911 §3) aynı belgenin farklı
maddelerinin farklı hassasiyette olduğunu zaten göstermişti; bu zincir
onu belgeler-ARASI ölçekte doğruluyor.

Bu bulgu **C ŞEMA** ve **C DOSYA YAZIM** oturumlarına tahtadan bildirildi
(bkz. §4).

---

## 3. SORU ③ — 1639/1847 zaman penceresi: KESİNTİSİZ mi, BOŞLUKLU mu?

**HÜKÜM: KESİNTİSİZ (contiguous), zamanda BOŞLUK yok — ama COĞRAFİ bir
istisna var.**

Kanıt: **1746 Kerden** ("restored WITHOUT CHANGE") ve **1823 I. Erzurum**
("essentially confirmed the 1639 border") ikisi de 1639 metninin arada
**hiç kesintiye uğramadan** geçerli kaldığını doğrudan söylüyor — yani
1639-1746 ve 1746-1823 arasında sınırın "belirsiz kalıp A/B'ye düştüğü"
bir dönem YOK, tam tersine kaynaklar sürekliliği açıkça beyan ediyor.

**Ama 1847'de bir COĞRAFİ (zamansal değil) istisna açılıyor:** Şattülarap
segmenti o tarihten itibaren 1639'un ③bölge kaydının SORUMLULUĞUNDAN
çıkıp AB'nin (motorun scalerank kapısı) eline geçiyor. Bu, `f:`/`t:`
alanlarıyla ifade edilemeyen bir üçüncü boyut: **bir C kaydının kapsadığı
ALAN, zaman içinde COĞRAFİ olarak küçülebilir**, tarihleri değişmeden.
Şemada buna karşılık gelen bir alan YOK — bu da §2'deki "hassasiyet
madde/kloz düzeyinde tutulmalı" önerisini pekiştiriyor.

1639 kaydı `t:1913-11-17`'de kesiliyor çünkü o gün biten şey kaydın
GEÇERLİLİĞİ değil, **hassasiyetinin ③bölgeden ①çizgiye YÜKSELMESİ.**

---

## 4. SORU ④ — 1555-1639 parçalı Kafkasya belgeleri: C mi, A/B mi?

**Ne saf A/B ne saf C — üçüncü bir hücre: "②KISMİ-C".**

Dört belgenin (Amasya/Ferhad Paşa/Nasuh Paşa/Serav) dördü de adlandırdığı
yerlerin TAMAMI zaten `yerlesimler.js`'te nokta olarak var — bu yüzden
kardeş oturumun `BIRINCIL-C-0911.json`'ı hepsini **AB_YETER** damgalamış.

🔴 **AMA BURADA İKİ KARDEŞ OTURUM AYNI VERİYE FARKLI İSİM VERMİŞ VE BEN
BU ÇELİŞKİYİ ÇÖZMEDİM, YALNIZ ÖLÇTÜM:**
```
BIRINCIL-C-0911.json          Amasya = AB_YETER (normal d:/s: yazımı yeter)
BULGU-BELGE-HASSASIYETI §D    "② YER DÜZEYİ — C KISMEN uygulanır, SAF
                               nokta-Voronoi (yalnız belgenin adlandırdığı
                               noktalar arasında, başka nokta/sezgi yok)"
```
İkisi de Amasya'nın aynı 7 yer adından bahsediyor (`D073`: çelişki ilan
etmeden önce aynı yerden bahsettiklerini doğrula — burada gerçekten
öyle, kaynak farkı değil). Sorunun özü: **belge zaten var olan bir petek
sınırına dokunmuyorsa (AB_YETER) mı yeterli, yoksa o peteğin komşularla
ilişkisini YENİDEN, yalnız belgenin adlarıyla SINIRLI bir Voronoi ile mi
hesaplamak gerekiyor (KISMİ-C)?** Bu ayrım pratikte fark yaratabilir
(normal Voronoi ile sınırlı-Voronoi farklı sınır çizebilir) ama BU
GÖREVDE geometrik olarak TEST EDİLMEDİ.

**Sevk edilen soru (tahtadan, C ŞEMA + C DOSYA YAZIM'a):** *"Bir polity'nin
peteği zaten var ve belge yalnız hangi tarafa geçtiğini söylüyorsa
(Amasya gibi), bu normal d:/s: yazımı mı, yoksa sınırlı-Voronoi mi?"*

---

## 5. TESLİM DOSYASI

`denetim/ZINCIR-C-IRAN-0911.json` — 9 belgelik tam zincir, hassasiyet
şeması sorusu, 1639/1847 kayıtları (1847 BİLEREK null/degenerate
bırakıldı, gerekçesi dosyada), 1555-1639 parçalı belgeler için "②KISMİ-C"
hücresi, ve ölçmediklerim.

## 6. ÖLÇMEDİKLERİM (sayıyla)

```
① Serav 1618 tam metni            BULUNAMADI (TDV sessiz + akademik erişilemedi)
② I. Erzurum 1823 ikinci kaynak    ARANMADI (rate-limit, tek WebSearch turu yeterli sayıldı)
③ İstanbul Protokolü tam metni     OKUNMADI (yalnız Iranica özeti)
④ "KISMİ-C" sınırlı-Voronoi        TASARLANMADI/SINANMADI (kavramsal, KITA 3'ün
                                    işiyle çakışıyor olabilir, koordine EDİLMEDİ)
⑤ 1847 coğrafi-istisna geometrisi  KODLANMADI (arac/ donuk, yalnız analitik)
```

---

**Emre'ye özet (tek paragraf):** Osmanlı-İran sınırı 1555'ten 1913'e tek
bir çizgi değil, hassasiyeti sürekli değişen bir zincir: 1555-1618 arası
dört belge sadece "hangi şehir kime" diyor (yer listesi, motor zaten
noktalarla çözüyor), 1639 Kasr-ı Şirin sınırı "geniş bir kuşak" olarak
tarif edip 274 yıl (1746 ve 1823'te AÇIKÇA TEYİT EDİLEREK) böyle kalıyor,
1847'de yalnız Şattülarap parçası kazayla-değil-ama-motorun-kendi-mekanizmasıyla
netleşiyor, ve gerçek kesin çizgi ancak 1913-14 İstanbul Protokolü'nün
sınır taşlarıyla geliyor. C şemasının bir "hassasiyet" alanına ihtiyacı
olduğu bu zincirle somut olarak gösterildi; iki kardeş oturumun Amasya
için verdiği farklı hükmü ise çözmedim, ÇELİŞKİ OLARAK bildiriyorum.
