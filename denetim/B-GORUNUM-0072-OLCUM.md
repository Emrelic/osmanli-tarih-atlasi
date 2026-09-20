# B-GORUNUM-0072 — B-4 MALİYET ÖLÇÜMÜ + KOŞULAR ARASI ÖNBELLEK SINAVI

Tarih: 20 Eylül 2026 · Oturum: B-GORUNUM-0072 (Opus 5)
Öngörü (ölçümden ÖNCE yazıldı): `denetim/B-GORUNUM-0072-ONGORU.md`
Alet: `arac/dolgu.py` — tek başına koşar, A dosyalarını **YALNIZ OKUR**.
Evren: `data/donemler.js` + `data/devletler_harita.js`, motorun 20 Eylül
12:58'de yazdığı hâl. **4.453 aralık · 1.883 kesit tarihi.**

> ⚠️ ORTAM NOTU — bütün süreler bunun altında okunmalı. 1.MURAT aynı gün
> ölçtü (M-4789): makinede boş RAM **0,7 GB**, 47 claude süreci ~5 GB, ve
> aynı gün `denetle.py` de bellekten düştü. **Farklı saatlerde alınan
> süreler karşılaştırılabilir DEĞİLDİR** — aşağıda aynı koşunun içindeki
> adım kırılımına bakılıyor, koşular arası toplamlara değil.

---

## 0 · Ayarlar (hepsi ortam değişkeniyle çevrilir)
| Ayar | Değer | Anlamı |
|---|---|---|
| `MOTOR_DOLGU_YARICAP_KM` | 120 | 2r = 240 km'den dar boşluk kapanır |
| `MOTOR_DOLGU_ESIK_KM2` | 200 | bundan küçük parça yazılmaz |
| `MOTOR_DOLGU_KABA` | 0,05° (~5 km) | kapanış öncesi gövdeyi kabalaştırma |
| `MOTOR_DOLGU_SADE` | 0,01° (~1 km) | çıktı sadeleştirme |
| `MOTOR_B_DOLGU` | (boş) | motor içinden çağrıyı AÇAR — varsayılan KAPALI |

---

## 1 · B-4'ün üç sorusu

| Soru | ÖLÇÜLEN |
|---|---|
| ① kesit başına ek süre | **280,9 sn** (soğuk, 12 kesit) → **0,31 sn** (sıcak, aynı girdi) |
| ② çıktı boyutu | **566,1 KB / 12 kesit** (4.452 kayıt · 701 halka · 660 parça) |
| ③ A çıktısı değişti mi | **HAYIR — yazılmadı bile.** Betik `data/donemler.js` ve `data/devletler_harita.js`i açar, okur, kapatır; tek yazdığı dosya `data/dolgu.js`tir |

Kesit başına **234–244 canlı gövde** · **634–640 dolgu parçası** ·
cins dağılımı `bosluk` 4.187 · `koridor` 139 · `paylasim` 126 ·
`enklav-bag` **0** · engellenen 1.882.

### 🔴 ①'İN HÜKMÜ: SOĞUK TAM KOŞU BUGÜN YAPILAMAZ
280,9 sn × 1.883 kesit ≈ **147 saat ≈ 6,1 gün.** (İlk ölçümde, önbelleksiz
ve indekssiz hâlde 586 sn/kesit → 12,8 gündü.) Sıcak koşu ise
0,31 × 1.883 ≈ **10 dakika**. Yani sorun "her koşuda ne kadar sürer" değil,
**"İLK kez nasıl hesaplanır"**dır.

---

## 2 · Koşular arası önbellek sınavı (1.MURAT'ın ③. şartı)

Aynı 12 kesit, üç koşu. Önbellek `motor_onbellek.py` (sqlite, içerik adresli).

| | KOŞU A · soğuk | KOŞU B · sıcak, aynı girdi | KOŞU C · **tek devlet oynatıldı** (`bizans`, 100 m) |
|---|---|---|---|
| kesit başına süre | 280,9 sn | **0,31 sn** | 257,6 sn |
| toplam | 3.386 sn | **17,9 sn** (11'i A dosyalarını okumak) | 3.104 sn |
| `dolgu2_talep` (gövde kapanışı) | ıska 262 · isabet 0 | — (kesit katmanı önce vurdu) | **isabet 256 · ıska 6** |
| `dolgu2_kesit` (bütün kesit) | ıska 12 · isabet 0 | **isabet 12 · ıska 0** | **isabet 0 · ıska 12** |
| çıktı | 566,1 KB · 4.452 kayıt · 701 halka · 660 parça | **birebir aynı** | **birebir aynı** |

### Üç sayının cevabı
1. **Değişmemiş girdide dolgu HİÇ yeniden hesaplanmıyor** — 12/12 kesit
   önbellekten geldi, 280,9 → 0,31 sn/kesit (**~900 kat**), çıktı birebir
   aynı. Emre'nin "1288 ile 1300 arasında hiçbir şey değişmiyorsa hesap
   yapma" cümlesi karşılandı.
2. **Tek devlet değişince kapanış katmanı doğru yerelleşiyor:** 262
   kapanışın 256'sı isabet, yalnız **6'sı** (oynatılan devletin 6 dönem
   gövdesi) yeniden hesaplandı — %97,7 isabet.
3. 🔴 **AMA KESİT KATMANI YERELLEŞMİYOR: 12 kesidin 12'si de ıskaladı.**
   Sebebi anahtarın kapsamı: kesit anahtarı o kesitteki HER gövdeyi taşıyor
   (1.MURAT'ın ②. şartı — paylaşım komşuya baktığı için taşımak ZORUNDA).
   Bir gövde değişince o kesit bütünüyle geçersizleşiyor.
   ⇒ Sonuç: tek yerleşim değişikliği, o devletin yaşadığı BÜTÜN kesitleri
   yeniden hesaplatır. Uzun ömürlü bir devlet için bu, koşunun büyük
   kısmı demektir.

### 🔴 KENDİ HÜKMÜMÜ ÇÜRÜTEN ÖLÇÜM (yazılı kalsın)
Önbelleği yazarken *"sürenin ~%99'u kapanış tamponudur"* demiştim.
**KOŞU C onu çürüttü:** kapanışların %97,7'si önbellekten geldiği hâlde
kesit hâlâ 257 sn sürdü. Adım adım karne (ayrı ölçüm, 3 kesit):

```
kesit 2  kapanış   5 sn  ·  çekişme 189 sn  ·  cins 202 sn
kesit 3  kapanış  28 sn  ·  çekişme 225 sn  ·  cins 236 sn
```
⇒ Kapanış kesitin ~%5–10'u. Gerçek maliyet ② talep-talep kesişimleri
(çekişme) ve ③ parça başına cins/ağız ölçümü. **Toplam süre hangi adımın
pahalı olduğunu söylemiyor;** ayrı ölçülmeyen maliyet, yanlış yere yapılan
iyileştirme demektir. `rapor["sn_kapanis"/"sn_cekisme"/"sn_cins"]` bu
yüzden kalıcı olarak koda girdi.

---

## 3 · Öngörünün karnesi (5 maddenin 2'si tuttu, 3'ü çürüdü)

| # | Öngörü | Ölçülen | Hüküm |
|---|---|---|---|
| Ö-1 | 0,8–3,0 sn/kesit | 586 → 281 sn (soğuk) · 0,31 sn (sıcak) | 🔴 **ÇÜRÜDÜ** (soğukta ~100–200 kat) |
| Ö-2 | 250 KB – 1,2 MB (tam koşu) | 566 KB / 12 kesit; tam koşu tahmini aşağıda | 🔴 **ÇÜRÜDÜ** |
| Ö-3 | A değişmez (yapısal) | değişmedi | ✓ **tuttu** |
| Ö-4 | 5–40 parça/kesit; sıra `bosluk`>`koridor`>`paylasim`>`enklav-bag` | 634–640 parça; sıra **AYNEN** | 🔴 sayı ÇÜRÜDÜ ~16 kat · ✓ sıra tuttu |
| Ö-5 | 0–3 engellenen/kesit | 152–160 | 🔴 **ÇÜRÜDÜ** ~50 kat |

**Ö-1 niçin çürüdü:** "kesitte ~40 gövde" varsaymıştım; gerçek **234**.
Öngörü hesabından değil **EVRENİNDEN** çürüdü — atlas artık bütün dünyayı
taşıyor, 1281'de bile 234 gövde canlı.

**②'nin tam koşu tahmini:** 12 kesitte 566 KB, ama halka havuzu ağır
tekrarlıyor (4.452 kayıt ↔ yalnız 701 halka). Kayıt sayısı kesitle doğrusal,
halka sayısı DEĞİL. İki uç: kayıt başına ~0,13 KB doğrusal ölçeklenirse
**~85 MB**; halka havuzu 12 kesitteki gibi doyarsa **~10–15 MB**. ⇒ **Bu
sayı henüz ÖLÇÜLMEDİ, aralık veriyorum.** İkisi de `donemler.js`in bugünkü
61 MB'ı yanında makul; ama 🔴 ikisi de `index.html`e koşulsuz yüklenemez —
tembel yükleme gerekir.

---

## 4 · `enklav-bag` SIFIR — kusur mu?

12 kesitte **0** `enklav-bag` parçası. Öngörümde "sıfır çıkarsa B2'nin
işini yaptığının kanıtıdır" yazmıştım; **doğrulamadan kabul etmiyorum.**
Ölçülen gerekçe: motorun kendi B2'si (`uret_petek.py`, `B2_ENKLAV_KM=250`)
karasal enklavları ZATEN A'nın içinde köprülüyor ve A'ya bakan ölçüm
(0 kimlik karşılıksız) bunu destekliyor. Dolguya kalan iş, B2'nin
"başkasının toprağı var" diye reddettiği yerlerdir — ve o yerlerde dolgu da
aynı kuralla durur (bu doğru davranıştır, Emre'nin 16 Eylül enklav kuralı).
⚠️ Yine de **bu bir çıkarım, ölçüm değil**: sınanan dilim 1281–1301, yani
Osmanlı'nın enklav üreten dönemlerinden (Rumeli sıçraması, Kırım, Eflak)
ÖNCESİ. `enklav-bag`ın hiç ateşlemediği hükmü ancak 1350+ dilimde ölçülerek
verilebilir. Bugün: **ölçülemedi, "yok" değil.**

---

## 5 · "Engellenen" listesi bugünkü hâliyle KULLANILAMAZ

Kesit başına 152–160 "gerçek enklav adayı" çıkıyor
(`denetim/B-GORUNUM-0072-ENGELLENEN.json`). Bu sayı olması gerekenden
onlarca kat büyük ve sebebi ölçüldü: ölçüt "kapanışım başka devletin
toprağına değdi mi" diyor, oysa 234 gövdenin çoğu zaten komşu — sıradan
komşuluk teması da sayılıyor. **Gerçek enklav** ölçütü daha dar olmalı:
*engel, aynı devletin İKİ AYRI parçasını birbirinden ayırıyor mu?*
Bu daraltma yapılmadan liste "incelenecek" kuyruğu olarak kullanılmamalı.

---

## 6 · Hüküm: koşuya hazır mı?

**HAYIR — iki kalem açık, ikisi de ölçülmüş:**
1. **Soğuk ilk hesap 6 gün.** Çare kapanışta değil (ölçüldü), çekişme ve
   cins adımlarında. Bunlar kesit içinde YERELLEŞTİRİLMELİ — yani önbellek
   birimi "kesit" değil "bölge" olmalı. O zaman hem ilk hesap paralelleşir
   hem de tek devlet değişince yalnız o bölge ıskalar (§2.3'ün açık kalemi).
2. **Çıktı boyutu tam koşuda ölçülmedi** (10–85 MB aralığı). Tembel yükleme
   kararı bu sayıya bağlı.

**Koşuya hazır olan kısım:** A'ya hiç dokunulmaması yapısal olarak
sağlandı (③, birebir); arayüz anahtarı ve veri şeması hazır; değişmemiş
girdide yeniden hesap YOK (~900 kat, birebir aynı çıktı).

---

## 7 · Ölçümden sonra yapılan iki iyileştirme (ve ne kadar ettikleri)

Adım adım karne kusuru gösterince iki şey değişti:
① komşu gövde birleşimi EZBERLENDİ (aynı komşu demeti ikinci kez
birleştirilmiyor) · ② çekişmede k tane ardışık `difference` yerine TEK
`difference(∪tᵢ)` (küme cebiri: A−B−C = A−(B∪C)).

Aynı kesit (1285-01-01), aynı makinede, kapanış önbellekten:

| | çekişme | cins | kesit toplamı |
|---|---|---|---|
| önce | 189 sn | 202 sn | 447 sn |
| sonra | **143 sn** | **145 sn** | **326 sn** |
| kazanç | %24 | %28 | %27 |

⚠️ Gerçek ama yetmez: 6 gün → ~4,5 gün. **Büyüklük sırası değişmedi**;
asıl çare yine yerelleştirme (§6).

---

## 8 · B-5 — kalıcı sadeleştirmenin DOLGU BOYUTUNA etkisi

Alet: `denetim/ARAC-B-GORUNUM-SADE-0072.py` (üretilmiş çıktıyı okur, halka
havuzunu yeniden sadeleştirip baytı sayar — her tolerans için 5 saatlik
yeniden hesap gerekmesin diye).
Girdi: 12 kesitlik çıktı, 566,1 KB · 701 halka · 660 parça · 4.452 kayıt.

| tolerans | ≈ km | köşe | halka havuzu | fark |
|---|---|---|---|---|
| 0,000 | 0,0 | 12.636 | 234,6 KB | — |
| 0,005 | 0,6 | 12.614 | 234,2 KB | %−0,2 |
| 0,010 | 1,1 | 12.595 | 233,8 KB | %−0,3 |
| 0,020 | 2,2 | 9.966 | 183,5 KB | **%−21,8** |
| 0,050 | 5,6 | 6.448 | 119,3 KB | **%−49,1** |

### 🔴 B-5'İN CEVABI: KALICI SADELEŞTİRME DOLGUYA AZ DOKUNUR
İki sebep, ikisi de ölçülü:
1. **Dolgu ZATEN sadeleştirilmiş çıkıyor** (`MOTOR_DOLGU_SADE=0,01`) —
   0,005 ve 0,01 arasında kazanç %0,3, yani yok. Motor tarafında kalıcı
   sadeleştirme, dolgunun zaten yaptığı şeyi tekrar etmez.
2. **Dosyanın çoğu halka DEĞİL:** 566,1 KB'ın yalnız **234,6 KB'ı** halka
   havuzu (%41). Geri kalan %59 kayıt listesidir (`f · t · k · c · p`) ve
   sadeleştirmeden **HİÇ etkilenmez**. ⇒ Halkalarda %49'luk bir kesme bile
   dosyanın ancak ~%20'sini götürür.
⇒ Sınır havuzundaki −%87,7 kazancı dolguda TEKRARLANMAZ. Dolgunun boyut
kalemi sadeleştirme değil **kayıt sayısı** (kesit × parça); onu küçültecek
düğme `MOTOR_DOLGU_ESIK_KM2` (bugün 200 km²) ve dönem birleştirmedir.
⚠️ Bu tablo yalnız BAYTI ölçer, görünümün bozulup bozulmadığını DEĞİL.
0,02 ve 0,05'in kabul edilebilirliği gözle kararlaştırılmalı.

---

## 9 · Tarayıcı sınavı — VERİ YOLU DOĞRULANDI, PİKSEL ÖLÇÜLEMEDİ

12 kesitlik çıktı geçici olarak `data/dolgu.js`e kondu, kendi sunucum
açıldı (`py arac/sunucu.py`), sayfa yüklendi. **Sınav bitince dosya
SİLİNDİ** — 1281–1301 arasını kapsayan yarım bir ürün `data/` altında
kalmasın diye.

**Doğrulanan (ölçülmüş sayılarla):**
- `data/dolgu.js` **200** döndü, hatasız ayrıştı, konsolda hata YOK.
- `window.DOLGU` 4.452 kayıt · `DOLGU_PARCALAR` 701 halka yüklendi.
- ④b kutusu (`input[data-katman="dolgu"]`) DOM'da var ve tıklanıyor.
- 1281-06-01'de **636 kayıt aktif**; **636'sının da** çözülmüş geometrisi
  DOLU (`parcaCoz` şemayı birebir çözüyor) · cins dağılımı
  `bosluk` 597 · `koridor` 21 · `paylasim` 18.
- **Renk bulunamayan kayıt: 0** — 141 ayrı devlet rengi `devletler2`den
  geldi, Osmanlı `#8e0b22`. Ayrı palet tutulmadığı doğrulandı.

**Ölçülemeyen:** `harita.isStyleLoaded()` **hiç true olmadı**, `getStyle()`
boş döndü ⇒ ekran görüntüsü alınamadı, `dolgu-b-alan` katmanının gerçekten
boyandığı GÖRÜLEMEDİ. ⚠️ Bu benim değişikliğimle ilgili değil: aynı gün
D1923-CIZGI-0920 de aynı şeyi bildirdi (M-4784 — "35 kaynağın HİÇBİRİ
yüklenmedi, kara/göl/devlet dâhil hiçbir katman boyanmadı"). Bu önizleme
penceresinde MapLibre render etmiyor.
⇒ **"Dolgu ekranda göründü" DİYEMİYORUM.** Saydamlık önerisinin (A opak 1,0
· dolgu 0,72) gözle onayı ve katman sırasının görsel sınavı **Emre'nin ya
da render edebilen bir oturumun** kalemidir.
