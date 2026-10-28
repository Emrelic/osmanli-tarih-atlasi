# ONCE1281-KUNYE-GUNU-1004 — kaç dönem ucunu bir OLAYDAN değil KÜNYEDEN devralmış?

Oturum: ONCE1281-MOTOR-UFUK-1004 · 5 Ekim 2026 · görev: YILDIRIM BAYEZIT (send_message)
Tetikleyen: Nabesna/Northway (Alaska) `dene → abd` geçişi **1899-06-21** = `dene` künyesinin `t`'si
(Kanada Antlaşma 8) — Alaska 1867-10-18'de ABD'nin. `D207`: *"künye günü bir KAYNAK DEĞİLDİR."*
**Veriye yazılmadı.** Bütün düzeltmeler öneridir.

## 0. Yöntem — ölçümden ÖNCE sabitlendi

- Evren: `girdi.yukle()` · künye: `girdi.oku_devletler()` (`id` ve `harita:` anahtarı). Regex YOK.
- Her `s:` dönemi için `d`'nin künyesi okunur; **dönemin `t`'si = künyenin `t`'si** ya da **dönemin
  `f`'si = künyenin `f`'si** GÜNÜ GÜNÜNE eşitse dönem ADAYDIR.
- **UFUK işaretleri hariç:** `1281-01-01` ve `1923-10-29` (ve son tarafta `1923-11-01`) künye ucu
  olsa bile ölçüm değil pencere işaretidir (`D210`) — o eşitlikler AYRI sayılır, adaya girmez
  (`f=1281` kenet sınıfı `ONCE1281-SEKIL`de zaten ölçüldü).
- **Yapısal ön ayrım** (kaynağa bakmadan, kovayı DARALTMAK için):
  - `t`-ucu: o gün yere gelen SONRAKİ sahip kim?
    - halef: sonraki sahibin künyesi de **aynı gün** başlıyor (A biter, B doğar) ⇒ 🟢 yapısal aday
    - var olan devlet: sonraki sahibin künyesi **daha önce** başlamış (Nabesna: `abd` 1776) ⇒ 🔴 aday
    - Osmanlı (`d:`/`v:`) ya da sahipsiz ⇒ ayrı kova
  - `f`-ucu: simetrik (önceki sahip o gün bitiyor mu).
- 🔴 adayların bir ÖRNEKLEMİ kaynakla sınanır: kesin SAHTE ancak yerin gerçek el değiştirme günü
  kaynakta AYRI okunursa sayılır; okunamazsa ⚪.

## 1. ÖNGÖRÜ — ölçümden ÖNCE yazıldı

- `t`-ucu künyeyle eşit (UFUK hariç): **~500** dönem · `f`-ucu: **~400**.
- 🔴 yapısal aday ("var olan devlete devir" günü = ölen künyenin `t`'si): **~120**.
- Mekanizma: **devletsiz halk / kabile künyeleri** (`dene`, `kri`, `mikmak`, `inuit`, Afrika halk
  kimlikleri) künyelerinin `t`'sini bir sömürge antlaşmasından alıyor (Antlaşma 6/8, 1880 Arktik
  devri …) ve o gün halkın BÜTÜN noktalarına kopyalanıyor — noktanın hangi devletin sınırında
  kaldığına bakılmadan. Nabesna tek değil; 141. meridyenin batısındaki her `dene`/`inuit`
  noktasında ve sınır boylarındaki her halkta aynı desen bekliyorum.
- Kaynakla sınanan örneklemde 🔴 adayların **çoğu SAHTE** çıkacak (Nabesna sınıfı); ama halef
  devletlerde (A biter B doğar) eşitlik **çoğunlukla DOĞRU** olacak.

## 2. Ölçüm

`git rev-parse HEAD` iki betikte de baş = son `e5b1bf4d`. Betikler scratchpad `kunye1.py`, `kunye2.py`.

### 2.1 Eşitlik ne kadar yaygın

| ölçü | sayı |
|---|---|
| `s:` dönemi | 14406 (künyesiz 79) |
| ucu künyenin ucuyla GÜNÜ GÜNÜNE eşit, UFUK işareti (`1281-01-01`/`1923-10-29`) | `t` 277 · `f` 279 — **hariç tutuldu** |
| **ucu künyeyle eşit (UFUK hariç)** | **`t` 3667 · `f` 3555 = 7222 uç** (bir dönemin iki ucu da sayılabilir) |
| ⤷ `t`-ucu: sonraki sahibin künyesi AYNI gün başlıyor (halef) | 2258 |
| ⤷ `t`-ucu: sonraki sahip ZATEN var olan bir devlet | 1418 |
| ⤷ `f`-ucu: öncekinin künyesi AYNI gün bitiyor (halef) | 2327 |
| ⤷ `f`-ucu: önceki sahip HÂLÂ var olan bir devlet | 1228 |

**Öngörü yanlış:** `t` ~500 · `f` ~400 demiştim; gerçek **7 kat** fazla. Künye ucunu dönem ucuna
yazmak istisna değil, verinin **yaygın yazım biçimi**.
**"Var olan devlete devir" ölçütü SAHTELİĞİ AYIRMIYOR** (öngörüm de bunu varsaymıştı — yanlış):
en büyük grupları gerçek olaylar — `suleyman-celebi` 1411-02-17 (ölümü; topraklar Musa ve
Mehmed Çelebi'ye), `zend` 1794, `avusturya` 1918-11-11, `memluk` 1517-04-13.

### 2.2 Keskin ölçüt: "AZINLIK HALEF" — Nabesna'nın imzası

Nabesna'nın asıl imzası: `dene` 1899-06-21'de biten 13 noktanın 9'u `kanada`ya, 4'ü `abd`ye
geçiyor. Olay (Antlaşma 8) Kanada'nın olayı; ABD tarafındaki 4 nokta günü OLAYDAN değil
KÜNYEDEN almış. Genelleştirdim: aynı (kimlik, gün) grubunda karşı taraf KARIŞIKSA, çoğunluktan
farklı olan üyeler adaydır.

| ölçü | sayı |
|---|---|
| eşit uçlu dönem (UFUK hariç) | **8569** · 699 (kimlik, gün) grubu |
| ⤷ karşı tarafı TEK tip grupların üyesi (tek olay, tek halef) | 5783 |
| ⤷ karşı tarafı KARIŞIK grupların üyesi | 2786 |
| ⤷ **AZINLIK adayı** | **390** |

Azınlık ölçütü de gürültülü — çok halefli GERÇEK olaylar (Avusturya'nın dağılması, Lehistan
paylaşımı, Süleyman Çelebi'nin ölümü, Yuan'ın düşüşü) azınlık üretiyor. Bu yüzden grupları tek
tek okudum ve üç kovaya ayırdım.

## 3. SONUÇ — kovalar

### 🔴 SAHTE DEVRALMA — kaynakla KESİN: **12 dönem**

| grup | nokta | neden sahte | dayanak (bu oturumda açıldı) |
|---|---|---|---|
| `dene` `t: 1899-06-21` → `abd` | **4**: Nabesna/Northway · Batzulnetas (Ahtna) · Iliamna/Nondalton (Dena'ina) · **Vashrąįį K'ǫǫ (Arctic Village)** | dört nokta da 141°B'nin batısında = Alaska; ABD'ye geçiş 1867-10-18. 1899-06-21 `dene` künyesinin `t`'si (Kanada Antlaşma 8) | history.state.gov: *"Alaska was formally transferred to the United States on October 18, 1867."* |
| `rusya-gecici-hukumet` `f: 1917-03-15` ← `kongre-polonyasi` | **8**: Varşova · Łódź · Lublin · Radom · Kielce · Częstochowa · Chełm · Zamość | zincir: `kongre-polonyasi →1917-03-15 → rusya-gecici-hukumet → 1917-11-07 → sovyet-rusya → 1918-11-11 → polonya`. Bu şehirler 1917-1918'de Rus ya da Sovyet idaresinde DEĞİLDİ: İttifak Devletleri işgalindeydi | TDV `polonya`: *"Rusya işgalindeki Polonya topraklarının alınması neticesinde buralarda Avusturya-Macaristan ve Almanya'nın ortak bildirimiyle müstakil bir Polonya krallığı kurulduğu ilân edildi (5 Kasım 1916)"* |

⚠️ **Kendi Alaska diff'ime dokunan düzeltme:** diff'te emsal diye gösterdiğim Arctic Village'ın
`dene → abd` geçişi de **1899-06-21** — emsal günde değil, yalnız KİMLİK zincirinde (dene → abd)
doğru. Diff 1867-10-18 kullanıyor (doğru gün); emsal cümlesi düzeltilmeli.
⚠️ Polonya'da doğru zincirin günleri (Varşova'nın Alman işgali 1915, Regency Krallığı 1916-1918)
bu oturumda kaynaktan GÜN olarak okunamadı (Britannica 403, 1914-1918-online boş gövde) — sahtelik
kesin, düzeltmenin günü ⚪.

### ⚪ ÖLÇÜLEMEDİ — güçlü şüpheli: **~150 dönem**

| grup | nokta | şüphe | neden ölçülemedi |
|---|---|---|---|
| `memluk` `t: 1517-04-13` → `habesistan` | 12 (Sevâkin, Masavva, Dahlak, Arkîko, Halâib, Akīk, Tokar, Sinkat, Hayyâ, Trinkitât, Muhammed Kol, Derûdeb) | Memlük'ün Kahire'deki sonu (Tomanbay'ın idamı) Kızıldeniz limanlarının Habeşistan'a geçiş günü olamaz; sahibin kendisi de şüpheli (TDV `habes-eyaleti`: Osmanlılar Masavva'da "1520'lerden beri bir ticaret kolonisi" bulunduruyordu) | yerlerin 1517-1555 arası sahibi kaynakta okunmadı |
| `ingiliz-sudani` `f: 1899-01-19` ← SAHİPSİZ | 23 (Rumbek, Yambio, Nasir, Akobo, Bor, Torit, Nimule, Yei, Maridi …) | 1899 Kondominyum anlaşmasının günü; Güney Sudan'da fiilî idare yer yer 1900-1920'ler | yer başına kaynak açılmadı |
| `avusturya` `t: 1918-11-11` → 7 halef | **109** (grubun tamamı) | İmparatorluğun dağılışı yere göre farklı günlerde (Çekoslovakya 28 Ekim, SHS 29 Ekim / 1 Aralık, Bukovina 28 Kasım, Transilvanya 1 Aralık 1918 …); tek gün (I. Karl'ın çekilmesi) bütün yerlere kopyalanmış görünüyor | bu turda yer başına okunmadı |
| `vaday` `t: 1909-06-02` → `senusi` | 2 (Ounianga, Fada) | Abeşe'nin Fransızlarca alınışı; Ennedi/Ounianga'nın Senûsî bağı daha erken | ölçülmedi |
| küçük gruplar | ~5 | `lunda` 1887 → `portekiz` (Dundo, Saurimo) · `nebhani` 1515 → `portekiz` · `mapuche` 1883 → `sili` (Arauco) | ölçülmedi |

### 🟢 DOĞRU ya da ETİKET geçişi (azınlık ama sahte değil)

`suleyman-celebi` 1411-02-17 (60; topraklar iki kardeşe bölündü — gerçek) · `lehistan` 1569 / 1795
(Lublin Birliği, III. paylaşım — gerçek çok halefli) · `ispanya` 1479 (Kastilya + Aragon birliği) ·
`ingiliz-kuzey-amerika` 1763 ← `ingiltere` (15 HBC/Nova Scotia noktası: **aynı egemen, kimlik
etiketi değişti** — el değiştirme değil) · `ingiliz-sudani` 1899 ← `ingiltere` (6, Kızıldeniz:
aynı mantık) · `yuan` 1368 · `rusya-gecici` 1917-11 → `transkafkasya` · `qing` 1912 → `tibet` …

## 4. Koordinatörün sorusunun cevabı

🔴 **Kaynakla KESİN SAHTE DEVRALMA: 12 dönem** (Alaska 4 + Polonya 8). Bu bir **ALT SINIRDIR**,
toplam değil: 8569 eşit uçtan yalnız azınlık-halef ölçütünün ayırdığı 390 aday okundu, onlardan da
yalnız ikisi kaynakla kapatıldı. **~150 dönem güçlü şüpheli ⚪** (en büyüğü `avusturya` 1918-11-11,
109). Tek tip grupların 5783 üyesi bu turda SINANMADI: "tek olay, tek halef" yapısı doğruluğa
işaret eder ama kanıt değildir — Nabesna sınıfı orada da saklanabilir (ör. bir halkın bütün
noktaları tek bir sömürgeye geçiyorsa).

## 5. Öneriler (uygulama koordinatörde)

1. **Alaska 4** (`dene → abd` 1899-06-21 → **1867-10-18**): kırılma Alaska'nın mevcut 1867-10-18
   grubuna katılır (`ONCE1281-ALASKA` simülasyonuyla aynı yapı). Alaska diff'ine eklenebilir ya da
   ayrı yama — karar sizin; atıf disiplini için AYRI yama öneriyorum.
2. **Polonya 8:** `rusya-gecici-hukumet` / `sovyet-rusya` 1917-1918 dönemleri yanlış; doğru zincir
   (Alman işgali 1915 → Regency Krallığı 1916 → Polonya 1918-11-11) için GÜN kaynağı gerekiyor —
   önce kaynak, sonra yama.
3. **`avusturya` 1918-11-11 (109):** ayrı bir ölçüm kalemi — halef başına gerçek günler
   (Çekoslovakya / SHS / Romanya / Polonya / İtalya) kaynakla okunmalı.
4. **Yazım kuralı (D207'nin veriye inmesi):** dönem ucu künye ucuna eşit yazıldığında `kaynak:`'ta
   yerin kendi devir olayı ADIYLA yazılsın; yazılmamışsa denetim bunu "künyeden devralınmış"
   diye saysın. Bugün 8569 eşit ucun kaçının olay kaynağı taşıdığını ölçmedim.

## 6. Öngörü × ölçüm

| öngörü | ölçüm | |
|---|---|---|
| `t` ~500, `f` ~400 eşit uç | 3667 + 3555 | ❌ 7 kat az tahmin |
| 🔴 yapısal aday ("var olan devlete devir") ~120 | 1418 + 1228 — ve bu ölçüt sahteliği AYIRMIYOR | ❌ ölçüt yanlış seçilmiş |
| mekanizma: halk künyelerinin sömürge-antlaşması `t`'si sınırın öbür yanına kopyalanmış | `dene` → `abd` 4 ✅ — ama en büyük kesin grup (Polonya 8) bu mekanizma DEĞİL: imparatorluk künyesinin (`rusya-gecici-hukumet`) başlangıcı işgal altındaki toprağa kopyalanmış | yarım |
| adayların çoğu SAHTE, halef devletlerde eşitlik çoğunlukla doğru | azınlık adaylarının çoğu GERÇEK çok halefli olay; sahte olanlar küçük, belirgin gruplar | ❌ |
