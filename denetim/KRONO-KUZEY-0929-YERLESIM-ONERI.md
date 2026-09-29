# KRONO-KUZEY-0929 — YERLEŞİM ÖNERİLERİ (Oturum 0'a; `data/yerlesimler*.js`e DOKUNULMADI)

29 Eylül 2026. ORTAK §1(b): tarihte değişim var ama haritada yok / haritada değişim yanlış.
Mevcut satırlar `girdi.yukle()` ile okundu (ölçüm aleti: pencereleri döken kısa betik,
scratchpad). **Kanıt gücü üç sınıf:** 🟢 kaynak cümlesi okundu · 🟡 kaynak özeti / iç
tutarlılık · ⚪ şüphe, ölçülemedi — uygulamadan önce kaynak aranmalı.

## 1. Osmanlı'ya yakın (AÇIK kovası) — öncelik

### 1.1 🟢 Kongre Polonyası 1915-1918: harita "Rusya Geçici Hükûmeti"ne veriyor, oysa Merkezî Devletlerin işgalindeydi
`yerlesimler.js`: Varşova · Kielce · Radom (Polonya) · Częstochowa · Łódź — `yerlesimler_p0037.js`: Lublin · Chełm (Kholm) (+ defterde toplam 8 yer)
```
mevcut : s:1815-06-09→1917-03-15:kongre-polonyasi | s:1917-03-15→1917-11-07:rusya-gecici-hukumet | s:1917-11-07→1918-11-11:sovyet-rusya
öneri  : kongre-polonyasi → (Varşova'nın düşüşü, Ağustos 1915) ; isg:almanya / isg:avusturya → 1918-11-11 ; 1916-11-05'ten "Polonya Krallığı" (naiplik) künyesi AÇILIRSA s: ona
```
Kaynak: TDV `polonya` (gövde okundu): "Rusya işgalindeki Polonya topraklarının alınması neticesinde buralarda Avusturya-Macaristan ve Almanya'nın ortak bildirimiyle müstakil bir Polonya krallığı kurulduğu ilân edildi (5 Kasım 1916)". ⇒ 1917'de bu şehirlerde Rus idaresi YOKTU; "Şubat Devrimi ile Geçici Hükûmet'e, Ekim'de Sovyet Rusya'ya geçti" çizimi tarihen yanlış.
Eksik: Varşova'nın düşüş günü ve Alman/Avusturya işgal bölgelerinin sınırı (Lublin–Kielce–Radom Avusturya-Macaristan bölgesiydi — 🟡, kaynak gerekli) — **bulunamadı**, uygulamadan önce kaynak.

### 1.2 🟡 Kielce ve Radom 1795-1809: harita `prusya`, oysa aynı taksim bölgesindeki Lublin/Chełm doğru biçimde `avusturya`
```
Kielce, Radom (Polonya) [yerlesimler.js]
mevcut : s:1795-10-24→1806-11-28:prusya | s:1806-11-28→1815-06-09:varsova-dukaligi
öneri  : s:1795-10-24→1809-10-14:avusturya | s:1809-10-14→1815-06-09:varsova-dukaligi   (Lublin/Chełm ile aynı satır)
```
Gerekçe: Üçüncü Taksim'de Kraków–Lublin arası (Batı Galiçya) Avusturya'ya düştü; Radom ve Kielce bu bölgededir ve Varşova Dukalığı'na ancak 1809 Schönbrunn'la katıldı. Atlas zaten Lublin ve Chełm'i böyle çiziyor (`1809-10-14`). **Kaynak cümlesi okunmadı** — iç tutarlılık + genel bilgi; uygulamadan önce kaynak.

### 1.3 🟡 1806-11-28 `prusya→varsova-dukaligi` (Varşova · Łódź · Częstochowa): dukalık henüz yok
Künye `varsova-dukaligi` f=1807-07-22. 28 Kasım 1806 Murat'ın Varşova'ya girdiği gündür (napoleon.org — yeni madde cok_lehistan). Öneri: `s:1806-11-28→1807-07-22` aralığı `isg:fransa-cumhuriyet` (Fransız askerî işgali) ya da künye f'si öne alınır — **hüküm künye**, `-KUNYE.md` §2.

### 1.4 🟡 Litvanya ve Estonya 1918: harita Sovyet Rusya'dan devrediyor, oysa Alman işgali vardı
```
Kaunas, Šiauliai [yerlesimler_ek7.js]
mevcut : s:1795-10-24→1917-03-15:rusya | …rusya-gecici-hukumet | s:1917-11-07→1918-02-16:sovyet-rusya | s:1918-02-16→:litvanya
öneri  : 1915 (Alman işgali; gün kaynakla) → 1918-11-11 isg:almanya ; litvanya s: bağımsızlık ilanıyla (1918-02-16) KALABİLİR ama işgal katmanı eklenmeli
Narva, Pärnu, Tartu (Dorpat) [yerlesimler_ek11.js]
öneri  : isg:almanya 1918-02-25 → Kasım 1918 (Alman çekilişi)
```
Kaynak: EBSCO Research Starters "Baltic States Gain Independence" + Britannica "Baltic states" [özet]: Litvanyalılar 1915'ten beri Alman işgali altında; Taryba Alman denetiminde çalıştı · Tallinn yalnız 24 Şubat'ta serbest kaldı, 25 Şubat'ta Alman kuvvetleri girdi, Kasım 1918'de çekildi.

### 1.5 🟡 1621-09-15 `lehistan→isvec` Tartu · Pärnu · Cēsis: Riga'nın düşüş günü üç şehre birden verilmiş
```
[yerlesimler_ek11.js / ek7.js]  mevcut: s:…→1621-09-15:lehistan | s:1621-09-15→1721-08-30:isvec
öneri  : Tartu → 1625 (İsveç Livonya seferi; gün kaynakla) · Pärnu → 1617 İsveç'e geçti (1617-1618 seferi; sonraki el değiştirmeler kaynakla) · Cēsis → kaynak bulunamadı
```
Kaynak: EBSCO "Polish-Swedish Wars for Livonia" [özet]: 1625'te Gustav Adolf "bütün Livonya'yı ele geçirdi". Tartu için 27 Ağustos 1625 ve Pärnu 1617 günleri Vikipedi özetinden — **tek dayanak olamaz**, uygulamadan önce kaynak.
⚠️ Bu kırılmaya madde YAZMADIM: yanlış günü kalıcılaştırırdı (DALGA2 §4).

### 1.6 ⚪ Iğdır: 1534-1878 kesintisiz Osmanlı, 1878'de Rusya — Revan Hanlığı'nın kaderinden kopuk
```
Iğdır [yerlesimler_ek26.js]  mevcut: d:1534-01-01→1878-03-03 | s:1878-03-03→1917-03-15:rusya
```
TDV `revan` (gövde okundu): "Şubat 1828'de yapılan Türkmençay Antlaşması ile Revan Ruslar'ın hâkimiyetine geçti". Iğdır (Sürmeli) Revan Hanlığı'na bağlıysa 1828'de Rusya'ya geçmiştir; 1878 Ayastefanos'ta değil. **TDV'de ığdır maddesi yok** (302, arama boş) — bağlılık cümlesi bulunamadı. KRONO-KAFKAS'a yatay gönderildi (M-5455). Ters yön uyarısı (CLAUDE.md §3.5): düzeltme Osmanlı rengini azaltır, iki uç da ölçülmeli.

### 1.7 ⚪ Hopa ve Sarp: 1878-03-03'ten 1917'ye `rusya`
`yerlesimler_ek27.js` · mevcut `d:1551→1878-03-03` sonra `s:rusya`. Berlin (1878-07-13) sınırının kıyıda nereye indiği (Hopa Osmanlı'da mı kaldı?) **ölçülemedi**. Ayastefanos'un öngördüğü ile Berlin'in bıraktığı farklıdır; harita 03-03'ü kalıcı devir sayıyor.

### 1.8 ⚪ Pinsk ve Rivne: 1795-10-24 `lehistan→rusya`
İkinci Taksim (1793) çizgisinin doğusunda olabilirler (o zaman kırılma 1793-01-23). **Ölçülemedi**; yeni başlık (1795) bu ikisini de kapatıyor — kaynak bulunursa kırılma taşınmalı.

### 1.9 🟡 Bryansk 1500-08-01
Kaynak (Rusya Savunma Bakanlığı Askerî Ansiklopedisi [özet]): Bryansk **1500 ilkbaharında** alındı; harekât Mayıs'ta başladı. 1 Ağustos günü kaynaksız görünüyor. Öneri: günün kaynağı bulunamazsa ay/mevsim düzeyi (`1500-05`?) — D213 gereği hassasiyet alanıyla.

## 2. Orta Asya (KAPSAM DIŞI kovası)

| yer | mevcut | öneri | kanıt |
|---|---|---|---|
| Balasagun (Ak-Beşim) `ortaasya3` | `hokand→rusya 1862-09-04` | Pişpek iki kez alındı: **4 Eylül 1860** ve **24 Ekim 1862** — 1862-09-04 ikisinin karışımı görünüyor | 🟡 Bişkek belediyesi resmî tarih sayfası (bishkek.gov.kg) [özet] |
| Taraz (Evliya-Ata) `ok107` | `hokand→rusya 1864-09-22` (Çimkent günü) | Evliya-Ata Çimkent'ten ÖNCE, 1864 yazında alındı — gün kaynakla | ⚪ ölçülemedi |
| Sayram `ok107` | aynı | Çimkent seferinde — gün kaynakla | ⚪ |
| Almalık `1882-03-22 rusya→qing` | iade günü | 1911 Britannica [özet]: tahliye **1883 baharı** — 1882 ile çelişiyor | ⚪ bulunamadı |
| Horog · Gunt · Rûşan · İşkâşim `1905-01-01 buhara→rusya` | — | kaynak **bulunamadı** | ⚪ |

## 3. Sibirya / Uzak Doğu / Alaska — kuruluş yılı FARKLI çıkanlar
Ham tablo: `denetim/KRONO-KUZEY-0929-SIBIRYA-KAYNAK.md` (iki ajan, arama özeti — 🟡).
Öneri: `s:` penceresinin BAŞLANGICI (yerleşimin ilk günü) aşağıdaki yıla çekilsin.

| yerleşim | atlas | kaynak | kaynak adı |
|---|---|---|---|
| Ufa | 1574 | kale **1586** (1574 = XVIII. yy'dan kalma hipotez) | BRE "Ufa" |
| Narım | 1596 | **1598** | BRE "Narımskiy kray" |
| Kansk | 1636 | **1640** | Britannica "Kansk" |
| Yalutorovsk | 1639 | **1659** | Tümen oblast idaresi |
| Albazin | 1651 | Rus kalesi **1665** (1651 = Habarov'un Daur kasabasını alıp yakması) | BRE/IES |
| Blagoveşçensk | 1651 | **1856** (Ust-Zeya karakolu) | BRE + Britannica |
| Verhneudinsk (Ulan-Ude) | 1665 | **1666** | BRE "Ulan-Ude" |
| Ayan | 1679 | **1843** (Rus-Amerika Şirketi) | bölge kaynakları — orta |
| Sretensk | 1689 | ilk belge **1714** | Entsiklopediya Zabaykalya |
| Sayansk ostrogu | 1709 | **1718** | IES |
| Unalaska | 1787 | **1770'ler** | Britannica "Unalaska" |
| Ostrovnoye | 1794 | ilk panayır **1788**; 1794 taşınma | CyberLeninka makale |
| Nelkan | 1844 | **1818** | bölge idaresi |
| Sofiysk (Amur) | 1859 | **21 Haziran 1858** | Habarovsk Devlet Arşivi (gahk.ru) |
| Kurgan | 1662 | Britannica 1553 (yerleşim) / 1782 (şehir) — belirsiz | ⚪ |
| Essey · Kirensk · Volochanka | 1630 · 1630 · 1643 | 1632 · 1631 · XVII. yy sonu — **zayıf kaynak** | ⚪ |

**Gün düzeyinde uyumsuzluk** (yerleşimin ilk günü; madde kaynak günüyle yazıldı, harita `-01-01`/farklı gün taşıyor — kırılma ±30 gün dışında kaldığı için KAPANMADI):
Yakutsk 1632-01-01 → **1632-09-25** (Jülyen, BRE) · Olyokminsk → **1635-07-17** · Ohotsk → **1647-05-23** · Perm → **1723-05-04** · Yekaterinburg → **1723-11-07** · Karkaralı → **1824-04-08** · Kökçetav → **1824-04-29** · Kazakeviçevo → **1858-05-31**.
**Atlas günü kaynaksız** (kaynak yalnız yıl/ay verir): Srednekolımsk 07-30 · Balagansk 05-01 (kaynak Mayıs-Haziran) · Bolşeretsk 08-06 · Üç Aziz Körfezi 08-14 (kaynak Ağustos) · Sitka 07-01 (turizm kaynakları 7 Temmuz) · Nijneudinsk 10-01 (kaynak 14 Ekim, zayıf).

**Kaynak BULUNAMADI** (madde yazılmadı, kırılma açık kaldı): Hantayka zimovyesi · Bulun · Ust-Olenyok · Podşiversk · Demyanskoye · Ust-Yansk · Uyandina · Verholensk · Alazeya · Gijiga · Bauntovsk · Telembinsk · Kabansk · İlyinsk · Vitim · Çita (1653) · Yerbogaçen · Markovo · Ust-Maya.
**Zayıf kaynaklı olduğu için madde YAZILMADI** (yıl tutuyor ama kaynak turizm/haber/derleme): Bahmut 1703 · Minusinsk 1739 · Tigil 1747 · Bolgrad 1821 · Ayagöz 1831 · Sitka 1799 · Rıkovskoye 1878 · Vladimirovka 1882 · Verhnekolımsk 1647 · Dalmatovo 1644 · Hatanga (kaynak "1625-26") · İrbit ("1631/32") · Biysk ("1708-09") · Verhnekamçatsk ("1697/98").
