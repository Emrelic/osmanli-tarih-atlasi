# KIZILDENIZ-0073 — H-0009 raporu (20 Eylül 2026)

Sınav anı **1822-10-24** (üç görselin alt şeridi · madde "Şendî'de İsmâil
Paşa'nın öldürülmesi"). Öngörü ölçümden ÖNCE yazıldı:
`denetim/KIZILDENIZ-0073-ONGORU.md`.

Aletler ve ham çıktılar:
- `denetim/ARAC-KIZILDENIZ-0073.py` → `OLCUM-KIZILDENIZ-0073.json` (üç kutu · sahiplik)
- `denetim/ARAC-KIZILDENIZ-0073B.py` → `OLCUM-KIZILDENIZ-0073B.json` (boşluk · en yakın nokta)
- `denetim/ARAC-KIZILDENIZ-0073C.py` → `OLCUM-KIZILDENIZ-0073C.json` (motor_kara ızgarası)
- `denetim/ARAC-KIZILDENIZ-0073D.py` → `OLCUM-KIZILDENIZ-0073D.json` (kaynak maske kıyası)

Veri DEĞİŞTİRİLMEDİ ⇒ `denetle.py` koşturulmadı (şartname: değişmediyse koşturma).

---

## 1. soru — Masavva ve Dahlak 1822-10-24'te Osmanlı egemenliğinde miydi?

**EVET. Haritadaki gösterim DOĞRU.**

Atlas verisi (`arac/girdi.py` evreni, 3921 nokta):

| yerleşim | koordinat | 1822-10-24 sahibi | alan |
|---|---|---|---|
| Masavva | 15.612N 39.472E | **OSMANLI** | `d:` |
| Dahlak | 15.692N 40.138E | **OSMANLI** | `d:` |
| Arkîko | 15.548N 39.449E | **OSMANLI** | `d:` |
| Sevâkin | 19.106N 37.332E | **OSMANLI** | `d:` |

Veride dördünün de penceresi `d:OSMANLI 1557-01-01 → 1865-01-01`
(Arkîko'nunki 1885-02-05'e kadar).

TDV tanıklığı (birincil kaynak):
- **Masavva** — *"2 Cemâziyelâhir 964'te (2 Nisan 1557) Özdemir Paşa
  tarafından Osmanlı topraklarına katıldı"*; Habeş eyaletine bağlı sancak
  merkezi. Mısır'a devir maddede **1846**: *"Sultan Abdülmecid tarafından
  Mısır Hidivi Mehmed Ali Paşa'ya Sevâkin ile birlikte sâlyâne olarak
  verilen Masavva'"*. İtalyan işgali *"5 Şubat 1885"*.
  (`islamansiklopedisi.org.tr/masavva`)
- **Dehlek (Dahlak)** — Habeş eyaleti *"15 Şâban 962 (5 Temmuz 1555)"*
  kurulunca Yemen beylerbeyiliğinden alınıp ona bağlandı; Özdemir Paşa 1557'de
  Masavva ve çevresini ilhak ederken adaları kullandı. Mısır'a devir bu maddede
  **1865** (Hidiv İsmâil Paşa fermanı, Masavva ve Sevâkin ile birlikte);
  *"1886 yılında İtalya tarafından işgal edildi"*.
  (`islamansiklopedisi.org.tr/dehlek` — `dahlak` slug'ı ÖLÜ, arama ile bulundu)
- **Habeş eyaleti** — Sevâkin ilk merkez; Masavva, Arkiko, Zeyla, Dehlek
  eyaletin limanları. 17. yüzyıldan sonra merkezî önem azalmış, idare
  Medine'de oturan mütesellim + yerel görevliler eliyle yürümüş.
  (`islamansiklopedisi.org.tr/habes-eyaleti`)

⇒ Devir tarihi hangisi olursa olsun (1846 ya da 1865) **1822'den sonradır**;
1822-10-24'te Masavva ve Dahlak Osmanlı'dır. Fiilî idare yerel/naib eliyle
yürüyordu, ama bu Osmanlı çatısını kaldırmaz — haritanın "doğrudan Osmanlı"
boyaması savunulabilir.

🔴 **TDV kendiyle çelişiyor** (tuzak ⑥): Masavva maddesi sâlyâne devrini
**1846**, Dehlek maddesi **1865** diyor. Atlas 1865'i kullanıyor. Çelişki
çözülmeden düzeltme önermiyorum — bildiriyorum.

---

## 2. soru — O bölgedeki boşluğun sebebi nedir?

Emre'nin iki görselinde iki AYRI şey var; ikisinin de sebebi ölçüldü ve
**ikisi de "veri boşluğu" değil**.

### (A) H-0009-1'deki gri alan — BOŞLUK DEĞİL, HABEŞİSTAN BOYASI
K1 kutusunda (13.80–17.75N · 37.95–42.14E) **16 nokta var, SAHİPSİZ 0**.
Nakfa · Kerene · Adi Kayh · Asmara · Zula · Aksum · Adua · Debârve · Ğındâ ·
Şire · Adigrat · Adi Kuala — hepsinin 1822-10-24 sahibi **`habesistan`**
(`s:` alanından). Barentu (15.106N 37.590E) kutunun batısında, o da
`habesistan`. Ferasan `yemen`.

Sebep bir veri deliği değil **renk görünürlüğü**: `arac/renkler.py`de
`habesistan` = `#4e3f39` (koyu kahve-gri). Bu ton yükselti altlığının
kendi kahve-gri dokusundan görsel olarak ayrışmıyor — Emre'nin "boş"
gördüğü alan aslında boyalı. Osmanlı kıyı şeridinin (Masavva–Arkîko–Dahlak)
parçalı görünmesi de doğru: Habeş eyaleti fiilen kıyı ve adalardan ibaretti,
iç kesim Habeşistan'dı.

### (B) H-0009-2'deki beyaz alan — HİÇBİR PETEĞİN ÖRTMEDİĞİ KARA
K2 kutusunda (12.20–14.94N · 40.30–41.98E) **nokta sayısı 0**.
0.2° ızgara (126 hücre) ile ölçüldü:

| ölçü | sayı |
|---|---|
| motor peteklerinin örttüğü hücre | **76** |
| Natural Earth'te göl | **0** |
| **NE'de kara VAR, motor peteği YOK** | **33** |
| NE'de de kara yok (deniz) | 17 |
| en yakın yerleşimi 200 km'yi aşan hücre | **0** (azami 188,6 km) |

Örtülen 76 hücrenin Voronoi sahibi: `adal` 40 · `habesistan` 35 · `OSMANLI` 1.
Kutunun köşelerine en yakın noktalar: Zula 74,9 km · Kemeran 79,7 km ·
Alamata 85,1 km · Asâyita 91,7 km; merkeze Vukro 168,2 km.

⇒ Beyaz alan **Danakil (Afar) çukuru**dur ve boşluk motorun **beyan edilmiş**
davranışıdır: `uret_petek.py`deki R7 nöbetçisi bunu her koşuda "ÖRTÜLMEYEN
KARA" diye basar ve kaynağın kendi cümlesiyle *"kusur DEĞİL — noktası olmayan
yer boyanmaz"*. `motor_kara.geojson` zaten `PETEK_D` birleşimidir; kutuda
nokta olmadığı için petek de yok.

🔴 **Sebep A1 yarıçap tavanı (200 km) DEĞİL** — hiçbir hücre 200 km'yi
aşmıyor (azami 188,6). Kesme, `_tavan_cokgen`in yöne duyarlı alan koruyan
şekli ve/veya çöl dolgu eşiği (`COL_PUAN_ESIK = 8`, çöl dışında 4) tarafından
yapılıyor. **Hangisi olduğunu koşusuz ayıramadım** — ayrım `uret_petek.py`
koşusu ister, o Oturum 0 kalemidir. İkisinin de ÇARESİ AYNI olduğu için
ayrım hükmü değiştirmiyor: o kutuya yerleşim noktası eklemek.

**Nokta önerisi yazılamadı — kaynak bulunamadı.** TDV'de `dankali` araması
0 sonuç; `afar` araması yalnız CİBUTİ · ERİTRE · ETİYOPYA ülke maddelerine
çıkıyor, Danakil çukurundaki yerleşim taneciğinde madde yok. Kutunun içi
(40.3–41.98E · 12.2–14.94N) dünyanın en çorak alanlarından biridir; 1822'de
orada kalıcı yerleşim olmaması **tarihen de beklenen**dir. Atlas referans
olamayacağı için (D207) komşu kayıtlardan koordinat türetmedim.

---

## 3. soru — Zeyla 1822-10-24'te Osmanlı egemenliğinde miydi?

**EVET (nominal olarak). Haritadaki gösterim DOĞRU.**

Atlas verisi: Zeyla (11.355N 43.473E) → `s:adal 1281-01-01→1559-01-01`,
**`d:OSMANLI 1559-01-01→1884-01-01`**, `s:ingiltere 1884-01-01→1923-10-29`.

TDV (`islamansiklopedisi.org.tr/zeyla`): *"Özdemir Paşa 954'te (1547)
bölgedeki faaliyetlerini arttırdı, iskelesini 966'da (1559) Osmanlı
Devleti'ne bağlandı"* — Habeş beylerbeyiliğinde sancak merkezi, sonra
Yemen'e bağlanmış. Mısır'a devir: *"1 Haziran 1875 tarihli bir başka
fermanla Zeyla' ve civarı takip etti"*. 1884-1888 arası Osmanlı doğrudan
idareyi kısa süre geri almış, 1916'da fiilî otorite kaybedilmiş.

⇒ Atlasın başlangıç günü (1559) TDV ile birebir uyuyor ve devir 1875'tir;
1822-10-24'te Zeyla Osmanlı'dır. K3 kutusunun geri kalanı da tutarlı:
Tacûra · Obok · Alî Sabîh · Dikhil `adal`, Borama · Bulhar `somali`.
Cibûtî noktası 1822'de sahipsiz — penceresi `s:fransa-cumhuriyet
1888-01-01→` olduğu için **doğru davranış** (şehir o tarihte henüz yok).

---

## Bulunan kusurlar — hepsi 1822 DIŞINDA, düzeltme YAPILMADI

Üç sorunun üçünde de harita doğru olduğu için veriye dokunmadım. Ama
kronoloji doğrulaması istendiği için aşağıdakiler ölçüldü:

| # | kusur | bugünkü veri | TDV | gereken kırılma |
|---|---|---|---|---|
| K1 | Osmanlı fethi yıl hassasiyetli | `1557-01-01` (Masavva · Dahlak · Arkîko · Sevâkin) | **2 Nisan 1557** (Masavva maddesi, hicrî karşılığıyla) | 0 yeni kırılma, 4 kaydın günü kayar |
| K2 | Zeyla'nın Mısır'a devri YOK | `d:OSMANLI 1559→1884` kesintisiz | **1 Haziran 1875** fermanı | +1 kırılma (`v:misir-kavalali` 1875-06-01) |
| K3 | Zeyla'da 1884-1888 Osmanlı dönüşü YOK | 1884'te doğrudan İngiltere | TDV: 1884-1888 Osmanlı doğrudan | +2 kırılma |
| K4 | Masavva/Sevâkin sâlyâne yılı | `1865-01-01` | TDV **çelişik**: 1846 (masavva) ↔ 1865 (dehlek) | çözülmeden düzeltilmez |

**Değişmez 2s bütçesi:** K2 + K3 toplam **3 yeni kırılma** ⇒ ±30 günde
**3 kronoloji maddesi** ister. Bugünkü durum 178 AÇIK / tavan 195 ve
YIL-TEMSİLÎ BORÇ 151/151 (ikinci kovada sıfır pay). K1 yeni kırılma
açmıyor ama 4 kaydın gününü kaydırdığı için mevcut ±30 gün eşleşmelerini
bozabilir — tek başına ölçülmeden yapılmamalı.

**Yetki istiyorum:** K1 (gün düzeltmesi, 4 kayıt) ve K2 (Zeyla 1875 devri,
1 kırılma + 1 madde) için. K3 ve K4 bence ertelenmeli: K3 kısa ömürlü bir
dönüş, K4'te kaynak kendiyle çelişik.
