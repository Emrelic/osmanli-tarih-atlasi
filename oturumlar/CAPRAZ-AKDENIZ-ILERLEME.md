# ÇAPRAZ AKDENİZ — ilerleme

> Oturum 1 Ağustos 2026, ~15:0x'te açıldı. Kullanıcının tek talimatı:
> *"ÇAPRAZ AKDENİZ — koordinatör oturumdan görevlerini öğren."*
> Brifing dosyada yoktu; koordinatörün oturum kaydından okundu (§1), onay
> istendi, **ve cevap beklenmeden** iki planda da başkasına ait olmayan
> kesitten ölçüme başlandı.

---

## 1. GÖREV TANIMI — okundu, ONAY BEKLİYOR

`oturumlar/CAPRAZ-GOREV.md` **plan A**'yı anlatıyor (üç oturum) ve orada
Venedik + Fransa **ÇAPRAZ BATI**'da. Koordinatörün kaydı ise **plan B**'yi
taşıyor:

```
ÇAPRAZ AKDENİZ = Venedik + Fransa (1536-1798)
gerekçe: "ikisi de denizci, ikisi de kapitülasyon muhatabı; 1536 k…"
```

⚠️ **İki belge çelişiyor ve bu benim çözeceğim bir çelişki değil** — plan B'ye
göre davrandım, koordinatöre bildirdim.

**Kilitlenmeyi tekrar etmemek için:** ÇAPRAZ BATI aynı boşluğa çarpmış ve
*"koordinatör beş oturum bekliyor, üç oturum brifing bekliyor"* diye yazmış.
Beklemedim; **kesişimden değil, ARTIKTAN başladım** — Fransa, iki planda da
başka kimseye ait değil ve BATI kendi raporunda *"Fransa'ya dokunmadım"* diyor.

### 1.1 Kapsam sorusu — koordinatöre soruldu, cevap beklenmiyor

*"1536-1798"* tarihi **Fransa'nın** ekseni olarak alındı, Venedik'in değil.
Sebep ölçülü: Venedik'in temas pencerelerinin çoğu bu aralığın dışında —
Modon/Koron 1500 · Kıbrıs 1489-1571 · Girit 1645-1669 · Mora 1684-1715 · ve
dizin kaydı `f:"697-01-01"`. 1536'yı Venedik'e de uygulasaydım **kesitin
yarısını görmeden** kapatmış olurdum.

---

## 2. YETKİ — bu oturumda uygulanan

- **Yazdığım dosyalar:** `oturumlar/CAPRAZ-AKDENIZ.md` + bu dosya. Başka hiçbir şey.
- `data/*.js` · `arac/*.py` · kök `*.md` — **okundu, yazılmadı.**
- Commit yol adıyla yapıldı (`ORGANIZASYON §13`): index paylaşılıyor.
- ⚠️ **Bu oturum yanlış klasörde açıldı** (`Projeler\Uibul`). Projeye mutlak yolla
  erişildi; ölçümler `arac/girdi.py`'nin kendi `KOK`'undan okuyor, yani girdi
  kümesi doğru. Yine de: `CLAUDE.md` bu oturumda **otomatik yüklenmedi**, elle
  okundu — aynı klasörde açılacak sonraki oturum için not.

---

## 3. ÖLÇÜM KAYITLARI

### Tur 1 — kesit sayımı (canlı girdi, `girdi.py yukle()`)

```
girdi: 976 nokta   yerlesimler.js 792 + yerlesimler_afrika.js 184
   s:"fransa"    92 pencere /  91 nokta   1281-01-01 → 1923-10-29
   s:"venedik"   80 pencere /  74 nokta   1281-01-01 → 1797-10-17
```

🔴 **VE BU, GÖREV TANIMINDAKİ SAYIYI YALANLIYOR.** `CAPRAZ-GOREV §1` tablosu
*"fransa 178/149 · venedik 83/78"* diyor. Ölçülen: **92/91 · 80/74.**

Fransa'da fark **iki kat.** Sebebi tahmin değil, `CLAUDE.md §5`'te kayıtlı hata
sınıfının aynısı: sayı, **merge bekleyen** `yerlesimler_avrupa.js`'i (228 nokta,
15 tanımsız kimlik) de sayan bir taramadan geliyor olmalı. O dosya
`GIRDI_DOSYALARI`'nda **yok** — yani o 86 pencere **çizilmiyor.**

📌 Ders, `CLAUDE.md §5`'in kendi cümlesiyle: *"ayrıştırıcıyı doğrulamak
yetmiyor, hangi DOSYALARI okuduğunu da doğrulamak gerekiyor."* Görev tanımının
kendisi bu tuzağa düşmüş ve **üç oturumun ilk iş seçimi o sayılara bakıyor.**
⇒ Koordinatöre bildirildi.

### Tur 2 — hayalet hesabı (dizin ömrü ↔ harita kullanımı)

```
fransa    dizin 987-01-01 → 1792-09-21 ("Fransa Krallığı")
          ölümden sonra açılan pencere  85
          en uzun tekil fazlalık        47.883 gün = 131,1 yıl
venedik   dizin 697-01-01 → 1797-05-12
          ölümden sonra açılan pencere  0
          en uzun tekil fazlalık        158 gün = 0,4 yıl   → MEŞRU (Campo Formio)
```

### Tur 3 — İyon zinciri, nokta nokta (`d:`/`v:`/`s:`/`isg:` tam dökümü)

12 nokta tarandı (7 İyon + Malta + Cenova + Dubrovnik + Preveze + Vonitsa).
**Zincir boşluğu (`!! BOSLUK`) sıfır** — yani `Değişmez 1` bu kesitte temiz ve
A-1'deki hata **sahipsizlik değil, YANLIŞ SAHİP.** Üç değişmezin hiçbiri bunu
göremiyor; `CLAUDE.md §3.5`'in sınıfı.

### Tur 4 — kaynak turu (TDV, `<title>` ile slug sınaması)

```
CANLI   yedi-ada-cumhuriyeti   "YEDİ ADA CUMHURİYETİ - TDV İslâm Ansiklopedisi"
CANLI   ayamavra               "AYAMAVRA - TDV İslâm Ansiklopedisi"
CANLI   suriye                 "SURİYE - TDV İslâm Ansiklopedisi"
```
`yedi-ada-cumhuriyeti` `CLAUDE.md §4`'ün canlı slug listesinde **yok** — eklenebilir.
⚠️ `parga` ve `preveze` **ÖLÜ** kayıtlı (§4); A-1'in Parga ucu bu yüzden
kaynaklanamadı ve **açık bırakıldı**, tahmin edilmedi.

---

## 4. TESLİM — 4 bulgu

| kod | konu | hüküm | ölçü |
|---|---|---|---|
| **A-1** | İyon adaları 1799-1807 | 🔴 ÇELİŞİYOR | 58,4 yıl-nokta · 7 nokta |
| **A-2** | `fransa` torba + dizin 1792'de ölü | 🔴 ÇELİŞİYOR (tanım) | 85 pencere · 131,1 yıl |
| **A-3** | BATI'nın B-1 Venedik hayaleti | 🔴 **GERİ ÇEKİLDİ — B-1 gerçekti** | — |
| **A-4** | Şam/Halep 1918 Fransız | 🟡 ÇELİŞİYOR (6 nokta) | ≈10,6 yıl-nokta |

Ayrıntı ve kaynak künyeleri: `CAPRAZ-AKDENIZ.md`.

📌 **Bu turda hiçbir çelişki ÇÖZÜLMEDİ** (`CAPRAZ-GOREV §8`). A-1'in ortasındaki
1799-03-05 → 1800-03-21 penceresi **kasten boş bırakıldı**: TDV o kesitin idarî
statüsünü bu maddede söylemiyor ve *"doğrulanamadı"* tam bir hükümdür.

---

# TUR 2 — koordinatörün cevabı geldi, kapsam DEĞİŞTİ

> Ölçüm commit'i: `c0bc9a8` (`ORGANIZASYON §14`).

## 5. KAPSAM DÜZELTMESİ — Fransa bende DEĞİL

Koordinatör bildirdi: **Fransa ÇAPRAZ DOĞU'da kaldı** (bugün Bordo'yu
kaynaklandırdılar, `cca1861`, 172,5 yıl). Benim *"Fransa hiç kimsenin dokunmadığı
tek kalem"* hükmüm **ölçüm anında doğruydu ama artık geçerli değil.**

```
BENDE   Venedik (tarih sınırı YOK: 1281 → 1797-05-12)
        Kuzey Afrika (292 yerleşim) — sıraya alındı, önce Venedik
        1536 kapitülasyonunun VENEDİK tarafı
BENDE DEĞİL  Fransa (ÇAPRAZ DOĞU) · Avusturya+Macaristan (ÇAPRAZ BATI, aktif)
```

⚠️ **A-2 ve A-4 artık benim kalemim değil** — ölçümleri geçerli, ama sahibi
ÇAPRAZ DOĞU. Koordinatöre devredildi; ben devam ettirmiyorum.
📌 `ARAŞTIRMA ARAP AFRİKA` oturumu ile Kuzey Afrika'da çakışma riski var,
koordinatör ayıracak.

## 6. HAYALET TARAMASI — ve **kendi ölçümümde bulduğum hata**

Koordinatörün ①. işi. Araç: dizin `f`/`t` birleşimi ↔ bütün `s:`/`isg:` pencereleri,
242 dizin kaydı × 976 nokta.

### 🔴 v1 YANLIŞTI — string kıyaslaması, üç haneli yıl

İlk koşuda `venedik` **516,8 yıl**, `papalik` **589,7 yıl**, `nube` **223 yıl**
"erken" çıktı. Hepsi **uydurma**: sınır tarihleri string olarak kıyaslanıyordu ve
```
"1281-01-01" < "697-01-01"   →  True    ('1' < '6')
```
⇒ 1000'den önce kurulmuş **her** devlet "atlas başında erken başlamış" görünüyordu.
`venedik` (697) · `papalik` (756) · `nube` (543) · `almanya` (962) · `fransa` (987)
· `yemen` (897) · `bizans` (330) satırlarının **tamamı** bu yüzden sahteydi.

🟢 v2 `datetime.date` kullanıyor **ve ufuk kenarını muaf tutuyor**: `1281-01-01`de
açılan pencere *"devletten önce"* değil, *"atlastan önce bilinmiyor"*dur.

📌 **Ders — ve bu tam da A-3'te BATI'ya söylediğim şeyin bana dönmesi:**
> *Ölçüm aracının kendisi, ölçtüğü veriden daha az denetleniyor.*

⇒ Ve bir işaret vardı, görmezden gelinebilirdi: çıktıda sınır `987-01-01-01-01`
diye **beş parçalı** basılıyordu. Biçimsiz görünen çıktı, bozuk mantığın ilk
belirtisiydi. **`GEÇ` ekseni v1'de de doğruydu** (bütün sınırlar 4 haneli), o
yüzden B-1/B-2/B-4 rakamları iki koşuda da aynı çıktı.

### Sonuç — kesitim

| kimlik | yön | ölçü | hüküm |
|---|---|---|---|
| **napoli** | GEÇ | 22.902 gün = **62,7 yıl × 4** | 🔴 ÇELİŞİYOR |
| **italya** (Sardunya) | ERKEN | **141,1 yıl × 2** | 🔴 ÇELİŞİYOR |
| **ispanya** (Sardunya) | ERKEN | **155,0 yıl × 2** | 🔴 ÇELİŞİYOR (Aragon kimliği yok) |
| **hafsi** (Fizan) | GEÇ | 841 gün = 2,3 yıl × 6 | 🟡 ÇELİŞİYOR, küçük |
| **toskana** · **italya** | — | 360 gün · 32 gün | 🟢 `§74`, çelişki değil |
| **venedik** | GEÇ | 158 gün × 19, **tek gün** | 🟢 UYUYOR |

### Kesitim dışı — koordinatöre bildirildi, dokunmadım
```
iran        260,1 yıl × 140 pencere   (ÇAPRAZ DOĞU)
lehistan    207,5 yıl · Kiev/Poltava 1362  (ÇAPRAZ KUZEY)
avusturya   Ljubljana 191,3 yıl ERKEN + Viyana/Graz 1918-11-11→1923 GEÇ (BATI)
arnavutluk  dizin 1443-1479, harita 1912-1923 kullanıyor — TORBA, 10,9 yıl
rusya       Smolensk 32,5 yıl ERKEN + 5 nokta 1917 sonrası GEÇ
umman · kirim · altinorda · artuklu · bosna · gurcistan · benihalid …
turkmen     7 pencere — dizinde KARŞILIĞI YOK (tek kimlik)
```

## 7. TUR 2 TESLİM

| kod | konu | hüküm | ölçü |
|---|---|---|---|
| **B-1** | hayalet Venedik taraması (koordinatörün ①) | 🟢 SINIF BOŞ | 158 gün × 19, tek gün |
| **B-2** | Napoli 1861 sonrası | 🔴 ÇELİŞİYOR | 62,7 yıl × 4 |
| **B-3** | Sardunya — kimlik elde, kullanılmamış | 🔴 ÇELİŞİYOR | 141,1 + 155,0 yıl |
| **B-4** | Fizan / Hafsî | 🟡 ÇELİŞİYOR | 2,3 yıl × 6 |
| **B-5** | Toskana · İtalya başlangıcı | 🟢 `§74`, çelişki değil | 360 · 32 gün |
| **B-6** | TDV kendiyle 13 gün çelişiyor (1800) | 🔴 SEBEBİ BELİRSİZ | 13 gün |
| **B-7** | A-1 daraltıldı, zincir 3. yerde kırık | 🔴 ÇELİŞİYOR | 1814-1815 ucu ÖLÇÜLMEDİ |

📌 **B-1 bir "bulgu yok" değil.** Sınıfın boş çıkması, `venedik`in 19 noktada
**tek bir güne** hizalanmış olduğunu gösteriyor — ve o hizayı bozacak bir
"düzeltme" `Değişmez 1`i 34'ten 53'e çıkarırdı. Boş sınıf, **korunması gereken
bir tutarlılığı** ortaya çıkardı.

⚠️ Yeni CANLI slug (`CLAUDE.md §4` listesine eklenebilir):
`yedi-ada-cumhuriyeti` · `korfu` · `suriye` · `ayamavra` · `koron` · `avlonya`.

---

## 8. 🔴 A-3 GERİ ÇEKİLDİ — bu oturumun kendi hatası

Tur 1'de ÇAPRAZ BATI'nın B-1 bulgusunu *"ölçüm artefaktı"* ilan etmiştim.
**Yanlıştı.** B-1 gerçekti ve **aynı gün 14:06'da `894bb82` ile düzeltilmişti**;
ben düzeltilmiş veriyi ölçüp düzeltme öncesi iddiayı yargıladım.

**Kök sebep bir araç körlüğü:** `git log -S` bir *pickaxe*'tır — dizgenin
**sayısını** izler, içeriğini değil. Kaydın **içindeki** dönemleri düzenlemek
`"Ayamavra"` sayısını 1'de bıraktığı için değişiklik bana **hiç görünmedi.**
Doğru araç `-G`.

📌 Ayrıntı, kanıt ve iki genel kural: `CAPRAZ-AKDENIZ.md` A-3.
📌 `OGRENILENLER §79` (`0f9258d`) bu vakadan yazıldı.

⚠️ **Ve hata bende bitmedi:** koordinatör ölçümümü *"kendim doğruladım"* diye
onayladı — o da bugünkü kaydı ölçmüştü. **Üç oturum aynı hatayı yaptı.** Bu,
hatanın kişisel değil **yöntemsel** olduğunu gösteriyor: *"iddiayı bugünkü
veriyle sınamak"* refleksi üçümüzde de vardı.

🟢 **Etkilenmeyen:** A-1 · A-2 · A-4 · tur 2'nin tamamı (B-1…B-7). A-1 özellikle
etkilenmiyor — BATI'nın kendi sözüyle *"zincir düzeltilmeseydi dördüncü halkanın
eksikliği görünmezdi bile."*

---

# TUR 3 — Girit · Kıbrıs · anakara (onaylı sıra)

> Ölçüm commit'i: `995e608`.

## 9. ②'NİN GÜN AYAĞI KAPANMADI — ve bu tam bir hüküm

Koordinatörün ②. işi *"ada ada 1798 sefer günleri"* idi. **TDV veremiyor:**

```
yedi-ada-cumhuriyeti   "ilk olarak 1799'da Zanta'yı ele geçirdi"
                       → ada ada GÜN yok, ve YIL bile 1798 değil 1799 diyor
korfu                  "Kasım 1798 kuşatma · 5 Mart 1799 teslim"
                       → yalnız Korfu, gün hassasiyetli
ayamavra               "Osmanlılar ve Ruslar 1800'de geri aldı"
                       → yıl hassasiyetli
```

⇒ **HÜKÜM: DOĞRULANAMADI** (`CAPRAZ-GOREV §8`: tam bir hükümdür). Ada ada gün
için Rus donanma tarihyazımı gerekiyor — `§3`'e göre *temas olgusu*, yani
**ikisi birden** okunmalı; tek başına TDV yetmiyor.

🟢 **A-1'in rakamı bundan ETKİLENMİYOR:** ilk turda ölçüyü kasten en temkinli
tarihe (Korfu'nun 1799-03-05'i) dayamıştım. TDV'nin 1798 yerine 1799 demesi
ölçümü **büyütmez de küçültmez de** — zaten o tarihten sonrasını sayıyordum.
📌 Temkinli ölçüm seçmenin karşılığı bugün alındı.

## 10. TUR 3 TESLİM

| kod | konu | hüküm | ölçü |
|---|---|---|---|
| **C-1** | Girit'te Suda·Spinalonga·Granbosa yok | 🔴 ÇELİŞİYOR | ≈114,2 yıl-nokta |
| **C-2** | Resmo 1646-11-13 ⟷ TDV 1646-11-15 | 🔴 ÇELİŞİYOR | 2 gün |
| **C-3** | Kandiye 1669-09-27 ⟷ TDV 1669-09-06 | 🟢 `§74`, çelişki değil | 21 gün |
| **C-4** | Parga 1800'de Osmanlı egemenliğinde | 🔴 ÇELİŞİYOR | 19 yıl |
| **C-5** | Butrinto kaydı yok | 🟡 EKSİK NOKTA | — |
| **C-6** | Kıbrıs 1489-1571 | 🟢 UYUYOR | 6/6 gün hassasiyetli |

⚠️ Yeni CANLI slug: `girit` · `resmo`.

## 11. 🔴 ÜÇ TURUN ORTAK DESENİ — ve bu artık tesadüf değil

```
A-1  1798 seferi    Preveze·Vonitsa DOĞRU  ·  yedi ada HİÇ
B-2  1861 ilhakı    Napoli·Palermo… DOĞRU  ·  Brindisi·Taranto·Lecce·Otranto HİÇ
C-4  1800 konvans.  Preveze·Vonitsa DOĞRU  ·  Parga HİÇ
```
> **Bir olay veriye yazılırken bütün noktalarına yazılmıyor; birkaçına yazılıyor,
> gerisi eski penceresinde kalıyor.** Üç değişmez de kör — kalan pencerenin
> **sahibi VAR, yalnız yanlış sahip.**

📌 Üç vakada da doğru yazılmış nokta, eksik kalanın **komşusu**. Yani sebep bilgi
eksikliği değil: **uygulamanın kapsamı ölçülmüyor.**
⇒ **Araç önerisi (DENETÇİ'ye):** bir `f`/`t` tarihi veride *k* noktada geçiyorsa,
aynı tarihin *"neden bu k nokta ve şu komşusu değil"* sorusu sorulabilir. Bugünkü
üç vakanın üçü de böyle bir taramayla **yazıldıkları gün** yakalanırdı.
