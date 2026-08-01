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

---

# TUR 4 — Adriyatik (ÇAPRAZ BATI'nın devri)

> Ölçüm commit'i: `63ff8b9`.

## 12. TESLİM

| kod | konu | hüküm | güç (`§73`) |
|---|---|---|---|
| **D-1** | 1918'de kırılmayan Dalmaçya adası **8 değil 10** | 🔴 ÇELİŞİYOR | KESİN · 49,6 yıl-nokta |
| **D-2a** | dokuz adanın ardılı `yugoslavya 1918-11-11` | 🟢 ÇÖZÜLDÜ | **KESİN** |
| **D-2b** | Cres (Cherso) ardılı `italya` | 🟡 ek kaynak gerekli | **DESEN** |
| **D-3** | Mliyet 1345'ten Ragusa'nın mı | 🟡 DOĞRULANAMADI | **ZAYIF** |

## 13. 🔴 BATI'NIN BULGUSU DA §80'E YAKALANDI — ve bu ilginç

BATI sekiz kayıt devretti. Kendi taramamı koşturdum: **on.** `Pag (Pago)` ve
`Uzunada (Dugi Otok)` aynı kusuru taşıyor, listede yoktu.

📌 Yani **§80 deseninin kendisi, o deseni bildiren bulguda tekrar etti.** Yöntem
doğruydu, kapsam dardı. Bu bir eleştiri değil ölçüm: desen o kadar sistematik ki
**onu arayan taramanın kendisi de eksik kapsıyor.**
⇒ Bu, `§80` araç önerisinin gerekçesini güçlendiriyor: elle eleme kapsamı
kaçırıyor, **taramanın kendisi araç olmalı.**

## 14. BATI'NIN YÖNTEM UYARISI UYGULANDI

BATI: *"Ölçüt eleme için iyi, teşhis için değil — çıktısını 'hata' diye değil
'bakılacak liste' diye oku, yoksa 15 sahte bulgu üretir."*

⇒ D-1'i **liste** olarak aldım, on adayın onunu da **tek tek** kaydından
doğruladım (hepsi iki dönemli, hepsi aynı iki tarih). Ardılı ise ayrı
kaynaklandım ve **ada ada aynı çıkmadı** — Cres ötekilerden ayrıldı. Yani
BATI'nın *"tek ardıl yazmak yanlış olur"* çekincesi **ölçümle doğrulandı.**

⚠️ Ve o çekince olmasaydı bugün **on adaya birden `yugoslavya`** yazılması
önerilebilirdi; Cres yanlış olurdu. **Hüküm vermemek burada doğru hamleydi.**

---

# TUR 5 — kapsam yine değişti + kendi borcum kapandı

## 15. KAPSAM — Kuzey Afrika GERİ ALINDI

```
BENDE      Venedik (1281→1797-05-12) · İyon/Adriyatik zinciri · Suriye-Lübnan (A-4)
BENDE DEĞİL  Kuzey Afrika (→ ÇAPRAZ GÜNEY) · Fransa (→ ÇAPRAZ DOĞU)
             Avusturya + Macaristan (ÇAPRAZ BATI)
```
**B-4 (Fizan/Hafsî, 841 gün × 6) ÇAPRAZ GÜNEY'e devredildi** — ölçüm ve
*"1577-01-01 yıl hassasiyetli, şimdi düzeltilmesin"* çekincem birlikte gitti.

⚠️ Bu, bu oturumun **üçüncü kapsam değişikliği** (Fransa alındı → Kuzey Afrika
verildi → Kuzey Afrika alındı). Üçünde de ölçümler geçerli kaldı ve devredildi;
hiçbiri boşa gitmedi. 📌 Ama not düşüyorum: **kapsam belgeye yazılmadan
dağıtıldığı için üç kez değişti.** `ORGANIZASYON Karar 2`'nin aynı vakası.

## 16. ⚠️ ÇAKIŞMA — sıra 1 zaten teslim edilmişti

Koordinatörün *"1. sekiz Dalmaçya adası"* talimatı ile benim `e63a750`
teslimim **çakıştı**. İş yapılmıştı: sekiz değil **on**, ardıl Rapallo'dan
kaynaklandı, `Cres` ayrıldı. Tekrar yapılmadı.

## 17. TESLİM

| kod | konu | hüküm | güç (`§73`) |
|---|---|---|---|
| **E-1** | Parga — `ÇELİŞİYOR` → **`EKSİK KATMAN`** | 🔄 DÜZELTİLDİ | KESİN |
| **E-2** | B-7'nin ucu: 1809/1810/1814, 1815 değil | 🔴 ÇELİŞİYOR | **DESEN** (gün yok) |

### E-2'nin iki rakamı
```
üçüncü kırılma tek başına   11.470 gün = 31,4 yıl-nokta  (ilk tahminimin 3,7 katı)
tek pencerenin anatomisi     %24,8 doğru · %75,2 yanlış
```

## 18. 🔴 YENİ SINIF ÖNERİSİ — "yutulmuş kırılma"

`§3.5` hayalet devleti tarif ediyor: **var olmayan** devlet boyanıyor.
E-2 farklı bir şey: **var olan** devlet boyanıyor ama **sahip değişimi yok
ediliyor** — üç değişim tek pencereye sıkışmış.

⇒ `Değişmez 2` (sessiz toprak değişimi yok) bunu **yapısal olarak göremez**:
kırılma yoksa maddesi de aranmaz. **Denetim, olmayan kırılmayı sorgulayamıyor.**

📌 Ve bu `§80`in kardeşi ama aynısı değil:
```
§80              olay k noktaya yazılmış, komşusuna yazılmamış   → NOKTA ekseni
yutulmuş kırılma olay hiçbir noktaya yazılmamış, pencere tek     → ZAMAN ekseni
```
⚠️ BATI'nın uyarısıyla da örtüşüyor: kendi 1918 vakasının *"ufka kadar yazıp
bırakmak"* olduğunu, benim üç vakamdan **ayrı sınıf** olduğunu ölçmüştü.
⇒ **Üç ayrı sınıf var ve araç üçünü ayırmalı**, yoksa tek sorguda karışırlar.

---

# TUR 6 — "eksik nokta" taraması (koordinatörün 1. sıra işi)

> Ölçüm commit'i: `8c083c7`. 34 bilinen Venedik mülkü tarandı, her eksiğin
> peteğini yutan nokta ve **o noktanın dört kesitteki sahibi** ölçüldü.

## 19. TESLİM

| kod | konu | hüküm | güç |
|---|---|---|---|
| **F-1** | Girit'in üç kalesi — emilme yönü ölçüldü | 🔴 C-1 DOĞRULANDI | KESİN |
| **F-2** | Venedik Arnavutluğu: kıyıda **sıfır nokta**, 5 mülk | 🔴 BOŞLUK | yapı KESİN · tarih ZAYIF |
| **F-3** | Dalmaçya anakarası: 5 şehir yok | 🟡 doğru renk, **uydurma sınır** | KESİN |
| **F-4** | **Paksos** — Yedi Ada üyesi, kaydı yok | 🔴 EKSİK + A-1 listesi düzeltildi | KESİN |
| **F-5** | Butrinto · Monemvasia | 🟡 eksik, kaynak gerekli | ZAYIF |
| **F-6** | **Kıbrıs: cevap BOŞ** | 🟢 C-6 ikinci kez geçti | KESİN |
| **F-7** | kendi aramamda 4 sahte eşleşme | ⚠️ ARAÇ HATASI | — |

## 20. 🔴 F-4 — kendi bulgumun kümesi yanlıştı

A-1'de *"yedi nokta"* dedim; o yedi **Yedi Ada değildi.** Listemde **Parga**
vardı (anakara kasabası), **Paksos** yoktu (gerçek üye, veride hiç yok).

🟢 **Nokta başına ölçümler geçerli** — 58,4 ve 31,4 yıl-nokta her nokta için tek
tek hesaplandı. **Yanlış olan kümenin bileşimiydi**, rakamların türetilişi değil.

📌 Ve bu, `§80`in bana **üçüncü** dönüşü:
```
1. BATI'nın sekizi → on çıktı              (başkasının bulgusunda)
2. B-7'nin ucu → 3,7 kat büyük çıktı       (kendi tahminimde)
3. A-1'in yedi noktası → küme yanlıştı     (kendi bulgumun kapsamında)
```
⇒ **"Olayın bütün üyeleri sayıldı mı?"** sorusunu bulguyu **yazarken** kendime
sormamışım. Araç önerisinin gerekçesi artık altı vakalı.

## 21. ⚠️ F-7 — arama tuzağının ÖTEKİ ucu

Koordinatörün bugünkü tuzağı: `ad:"X"` tam eşleşme **çok dar**.
Benimki: çıplak alt dizge **çok geniş** — dört sahte eşleşme:
```
"Herceg Novi"→"Çernovitz"  ·  "Bar (Antivari)"→"Bar (Podolya)"
"Zadar (Zara)"→"Hazârasp"  ·  "Lefke"→"Lefke (Osmaneli)"
```
Dördü de **"VAR" raporlandı, gerçekte YOK.** Koordinat kontrolüyle yakalandı.

> ⇒ **`ORGANIZASYON §15`'e ek: tam eşleşme çok dar, çıplak alt dizge çok geniş.
> İkisi de yanlış cevap verir, TERS yönlerde. Doğrusu alt dizge + koordinat.**

📌 Bugünkü **beşinci** araç hatası ve beşi de *"aradım, buldum/bulamadım"*
biçiminde geldi.

## 22. YÖNTEM NOTU — iki adımlı olması şart

Eksik nokta **tek başına hüküm değil.** Peteği yutan nokta doğru sahibi
taşıyorsa renk kazara doğru çıkıyor (F-3, F-4), yanlış taşıyorsa hata görünür
oluyor (F-1, F-2). **Aynı boşluk, iki ayrı sonuç.**
⇒ Bir *"eksik nokta"* listesini önceliklendirmenin tek yolu **emilme yönünü
ölçmek.** Yalnız listeyi vermek, BATI'nın uyardığı gürültüyü üretir.

---

# TUR 7 — A-4 paketlendi

> Ölçüm commit'i: `252325e`.

## 23. TESLİM

| kod | konu | hüküm | güç |
|---|---|---|---|
| **G-1** | ev kuralı ölçüldü — `s:` tek tip, `isg:` gerekmiyor | 🔄 **kendi önerimi çürüttüm** | KESİN |
| **G-2** | işgalci yanlış: 6 iç şehir Faysal'ın idaresinde | 🔴 ÇELİŞİYOR | KESİN · 10,5 yıl-nokta |
| **G-3** | TDV kendiyle çelişiyor: temmuz 1920'nin günü | ⚠️ ay hassasiyeti öneriliyor | DESEN |
| **G-4** | kimlik gerekiyor — kesitimde **renk isteyen ilk paket** | 🟡 karar koordinatörde | — |

## 24. 🔄 G-1 — İLK ÖNERİMİ GERİ ALDIM

A-4'ü ilk yazdığımda *"doğru yapı `d:`+`isg:`dir, tek `s:` değil"* demiştim ve
`girdi.py`'nin Mısır yorumuna dayanmıştım. **Emsali ölçünce çürüdü:**

```
1918-1923 arası açılan pencereler:  [s] 88  ·  [isg] 0
Bağdat · Kudüs · Musul · Cidde … hepsi d:OSM→gün, sonra s:<işgalci>
```
Ev kuralı **tek tip ve istisnasız**. Mısır istisna değil **kanıt**: orada `isg:`
kullanılmış çünkü Osmanlı idaresi (`v:` Kavalalı) yerinde kalmıştı; 1918
Suriye'de kaldırılmıştı.

📌 **Ders:** *"şema şunu taşıyabilir"* ile *"şema bunu böyle kullanıyor"* ayrı
şeyler. Birincisini `girdi.py` yorumundan okudum, ikincisini **ölçmeliydim** —
ve ölçünce öneri değişti. **Yorum belgeyi anlatır, emsal veriyi.**

⚠️ Ve bu, bu oturumda **üçüncü kez** kendi hükmümü düzeltmem oldu (A-3 · C-4/E-1 ·
şimdi G-1). Üçünde de sebep aynı sınıf: **elimdeki kaynağı ölçümün yerine
koymuşum.**

## 25. G-4 — kesitimin ilk "renk gerektiren" paketi

Şimdiye kadar yedi `KESİN` bulgunun altısı renksiz çözülüyordu (`v:`/`k:`, ya da
veride zaten boyalı kimlik). **G-2 çözülmüyor:** Faysal'ın idaresi dizinde yok.
```
(a) mevcut `hicaz`               renksiz · komşu kullanımı var (Maan · Tebük)
                                 ama 8 Mart-14 Temmuz 1920 yanlış kimlik kalır
                                 ⇒ hatayı 10,5 → ~1,1 yıl-noktaya indirir
(b) yeni `suriye-arap-kralligi`  tarihen sıkı · VERİ KİMLİK kuyruğu
```
**Hüküm vermedim** (`§5`), iki yolun maliyetini ölçtüm.

⚠️ Slug kütüğü: **`sam` ÖLÜ** (arama sayfasına düşüyor) · `faysal-i` CANLI.

---

# TUR 8 — F-2 kaynaklaması

> Ölçüm commit'i: `005eb20`.

## 26. TESLİM

| kod | konu | hüküm | güç |
|---|---|---|---|
| **H-1** | TDV `dalmacya` 1737 ⟷ Campo Formio 1797 | 🔴 **TDV YANLIŞ**, bizimki doğru | KESİN |
| **H-2** | Klis sancağı (1537) — 8 kale, **hiçbiri yok** | 🔴 ÇELİŞİYOR, F-3'ten ağır | KESİN |
| **H-3** | F-2 kaynaklaması | 🟡 **beşte bir** (Herceg Novi 1686) | yıl hassasiyetli |
| **H-4** | İşkodra 1479 · Akçahisar 1478 | 🟢 UYUYOR | KESİN |

## 27. 🔴 H-1 — çözülebilen ilk TDV-içi çelişki

Bugün üç TDV-içi çelişki buldum ve **yalnız bu üçüncüsü çözülüyor:**
```
B-6  21 Mart ⟷ 3 Nisan 1800     → SEBEBİ BELİRSİZ (Jülyen şüphesi, teşhis değil)
G-3  "Temmuz 1920" ⟷ "14 Temmuz" → §74, ayrı sorular olabilir
H-1  "1737" ⟷ "Campo Formio"     → ÇÖZÜLDÜ
```
📌 **Farkı ne yapıyor: çelişkinin bir ÖZEL İSME çarpması.** Campo Formio bir
antlaşma adıdır ve tarihi (17 Ekim 1797) sabittir; *"1737'de Campo Formio"*
cümlesi kendi içinde imkânsız. Takvim farkı ya da olay çokluğu **yoruma açık**,
özel isim **değil.**

⇒ **Ölçüt önerisi:** bir tarih çelişkisi **adlandırılmış bir olaya** (antlaşma,
savaş, sefer) bağlıysa, ad tarihi kilitler ve çelişki `SEBEBİ BELİRSİZ`
kalmaz — **çözülür.**

⚠️ Ve yakalanış biçimi kayda değer: **ilk çekiş bana "1737 ... Campo Formio"yu
özet olarak verdi ve ben o özete güvenmedim** (`§4①`: sayısal veri tek çekişten
alınmaz). İkinci çekişte **verbatim** istedim; cümle aynen çıktı, yani özetleyici
hata yapmamıştı — **hata maddenin kendisindeydi.**
📌 `§4①` burada beklenmedik bir iş gördü: özetleyiciyi değil **kaynağı** doğruladı.

## 28. 🔴 H-2 — F-3'ün hükmü DARALTILDI

F-3'te *"Dalmaçya'da renk kazara doğru, sınır uydurma"* demiştim. **Yalnız kıyı
için doğruymuş.**
```
kıyı (Zadar·Split·Trogir·Şibenik·Nin)  → yutan venedik  → renk kazara DOĞRU
iç kesim (Klis sancağı, 8 kale)        → yutan venedik  → renk kazara YANLIŞ
                                          çünkü orası OSMANLI'ydı
```
⇒ Aynı boşluk, **aynı yutan renk**, ama biri doğru biri yanlış çıkıyor — çünkü
gerçek sahip farklı. **Emilme yönünü ölçmek yetmiyor; gerçek sahibi de bilmek
gerekiyor.** Tur 6'daki yöntem notumun sınırı bu.

📌 Ve `§3.5.1` burada ters cevap veriyor: soru *"Osmanlı fazla mı görünüyor"*du;
Dalmaçya'da **eksik görünüyor.**
