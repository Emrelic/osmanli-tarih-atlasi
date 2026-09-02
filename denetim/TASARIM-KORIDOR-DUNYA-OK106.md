# TASARIM — KORİDOR AĞININ DÜNYA AYAĞI (B3 · şık c)

> Oturum **OPUS HAZIR KITA 106** · 2 Eylül 2026 · koordinatör 1.MURAT (onay)
> 🔒 `arac/uret_petek.py · girdi.py · renkler.py` YASAK — dokunulmadı.
> `arac/maliyet.py` **yalnız OKUNDU**, çalıştırılmadı, değiştirilmedi.
> `js/app.js` PAKET-0035-C'de — dokunulmadı. **Hiçbir şey indirilmedi.**
> 🔴 Bu bir TASARIM ve ÖLÇÜM belgesidir; tek satır veri üretmez.

---

## 0. ÜÇ CÜMLEDE

```
① DÜĞÜM SORUNU YOK: dünya ayağının düğümleri ZATEN ATLASTA. Koridor
   kutusunun dışında 1803 yerleşim var, 1341'i k1-k3. Yeni araştırma
   GEREKMİYOR — seçim ve bağlama işi.
② KENAR SORUNU VAR VE ADI KONULMALI: `maliyet.py` maliyet YÜZEYİ üretiyor,
   YOL üretmiyor. Emre'nin (a) kararı "DEM'den TÜRET" diyor; türetmenin
   son adımı — maliyet alanından GÜZERGÂH çıkarmak — bugün YOK.
③ VE NAİF ÇÖZÜM İMKÂNSIZ: her düğüm için atlas penceresi boyunca tek
   kaynaklı Dijkstra koşmak ~467 tam koşu demek. Tasarım bunu ATLAMALI —
   çözüm ÇİFT BAŞINA KÜÇÜK KUTU.
```

---

## 1. ① DÜĞÜM — nereden gelecek (ÖLÇÜLDÜ)

Koridorun bugünkü kutusu (`BULGU-KORIDOR-OK106`de ölçüldü):
`21,42-49,84K / 12,33-48,05D`

```
atlas yerleşimi TOPLAM              2624
  koridor kutusu İÇİNDE              821
  koridor kutusu DIŞINDA            1803   ← dünya ayağının aday havuzu
      k1-k3 (gerçek merkez)         1341
```

**Kuşak kuşak (kutu dışı):**
```
SAHRA ALTI AFRİKA          328   (k1-k3 182 · k0 dolgu 76)
DOĞU ASYA                  324   (k1-k3 252 · k0 dolgu 45)
KUZEY/DOĞU AVRUPA-RUSYA    319   (k1-k3 262 · k0 dolgu  8)
BATI AVRUPA-İBERYA         262   (k1-k3 182 · k0 dolgu  0)
GÜNEY ASYA                 211   (k1-k3 161 · k0 dolgu 26)
AMERİKA                    143   (k1-k3 133 · k0 dolgu 10)
ÖTEKİ                      120   (k1-k3  96 · k0 dolgu 14)
OKYANUSYA                   81   (k1-k3  65 · k0 dolgu 16)
KUZEYBATI AFRİKA            15   (k1-k3   8 · k0 dolgu  6)
```

**Ölçek — bugünkü koridor yoğunluğu tabana alınırsa:**
```
koridor kutusu ~10,2 milyon km² · 286 konumlu düğüm ⇒ 28 düğüm/milyon km²
düğüm / kutu-içi-yerleşim oranı: 286 / 821 = 0,35
⇒ dışarıdaki 1341 k1-k3 yerleşim için ~467 düğüm
```
🟡 Bu bir **ölçek tahminidir**, hedef değil: gerçek sayı seçim ölçütüne bağlı.
📌 **Ama asıl bulgu şu: yeni ARAŞTIRMA gerekmiyor.** Koridorun Osmanlı ayağı
kaynak taramasıyla kurulmuştu (Sak-Çetin menzil defterleri, OWTRAD); dünya
ayağının düğümleri **zaten atlasın kendi verisinde** duruyor.

### Önerilen seçim ölçütü (sıralı, ölçülebilir)
```
① k1 ve k2'nin TAMAMI          büyük merkezler — atlanamaz
② k3'ten, en yakın seçili düğüme > 400 km olanlar   boşluk doldurma
③ k0 dolgu noktaları ASLA      onlar toprak boyamak için var, yerleşim değil
④ `kasitli_bosluk` noktaları ASLA
```
⚠️ `400 km` bir BAŞLANGIÇ sayısıdır, ölçülmüş değil. Osmanlı ayağının
komşu aralığı ortancası ölçülebilir ve ölçüt ona göre ayarlanmalıdır —
**bu ölçüm yapılmadı.**

---

## 2. ② KENAR — ve `maliyet.py` NEYİ VERİR, NEYİ VERMEZ

`arac/maliyet.py` **satır satır okundu** (çalıştırılmadı). Bulunanlar:

### 2.1 🟢 VEREBİLDİKLERİ
```
surtunme(kutu, adim)          sürtünme yüzeyi — kara/deniz/nehir/göl
surtunme_dem(kutu, adim)      DEM + EĞİM ile sürtünme  (30 Ağustos'ta eklendi)
maliyet_mesafe(...)           ÇOK KAYNAKLI Dijkstra → (sahip, skor, tür)
maliyet_mesafe_np(...)        aynı model, SAF NUMPY — `hiz` komutu ikisinin
                              AYNI sahipliği ürettiğini her koşuda sınıyor
voronoi(...)                  düz Voronoi (bugünkü motorun sorusu)
kara_bilesenleri(...)         kara bileşenleri
hiz(...)                      çözünürlük ↔ süre eğrisi
```
🟢 **Ve `skor` alanı elimizde:** çok kaynaklı koşu her hücre için birikmiş
maliyeti döndürüyor. Yani maliyet YÜZEYİ **var.**

### 2.2 🔴 VEREMEDİKLERİ — ve bu, dünya ayağının GERÇEK boşluğu
```
🔴 GÜZERGÂH ÇIKARMA YOK
   `skor` alanından bir hedef hücreden kaynağa GERİ YÜRÜYEN (backtracking)
   ve bir çizgi (polyline) döndüren fonksiyon YOK. Aranan: yol/rota/patika/
   guzergah — `maliyet.py`de böyle bir işlev bulunmadı.
🔴 TEK KAYNAKLI KOŞU YOK
   `maliyet_mesafe` ÇOK kaynaklıdır ve her hücreyi EN YAKIN kaynağa atar.
   Bu TOPRAK üretir, YOL üretmez: A'dan B'ye maliyet, ancak B'nin kendi
   bölgesindeyken A'dan ölçülemez.
🔴 ÇİFT SEÇİMİ YOK
   "hangi iki düğüm arasında kenar olmalı" sorusu bu betiğin konusu değil.
```
⇒ **Emre'nin (a) kararındaki "DEM'den TÜRET" cümlesinin son adımı bugün
YAZILI DEĞİL.** Sürtünme var, Dijkstra var, maliyet alanı var; **yol yok.**

---

## 3. ③ NAİF ÇÖZÜM NİÇİN İMKÂNSIZ — ve doğru mimari

**Naif:** her düğüm için atlas penceresinde tek kaynaklı Dijkstra → ~467 tam
koşu. `BULGU-MALIYET §6.4` atlas penceresinin TEK koşusunu ölçmüş:
```
0,10°  ~59 dk        0,05°  ~4,3 saat        0,02°  ~32 saat   (Ⓐ, saf Python)
```
🟡 **Kaba çarpım — ölçüm DEĞİL, ölçek göstergesi:** 467 × 4,3 saat ≈ **83 gün.**
Numpy sürümü bunu kaç kat indirir, `hiz` komutu ölçebilir; **ölçmedim** (betik
kilitli değil ama koşturmadım — koşu sürerken makineyi meşgul etmemek için).
⇒ Rakam ne olursa olsun **mimari yanlış**: dünya ölçeğinde tek kaynaklı koşu
tekrarlanamaz.

### 🟢 ÖNERİLEN MİMARİ — ÇİFT BAŞINA KÜÇÜK KUTU
```
ADIM 1  ADAY ÇİFT ÜRET      kuş uçuşu k-en-yakın-komşu (k≈3-4)
                            ~467 düğüm × 3,5 ≈ 1600 aday kenar
                            MALİYET: saniyeler · DEM GEREKMEZ
ADIM 2  ÇİFTİ SÜZ           deniz aşırı çiftleri ele (kara bileşeni farklıysa
                            kara koridoru olamaz) — `kara_bilesenleri` VAR
ADIM 3  HER ÇİFT İÇİN       çifti çevreleyen KÜÇÜK kutu (+%20 pay) üzerinde
        KÜÇÜK KUTU          `surtunme_dem` + tek kaynaklı Dijkstra + geri yürüme
                            MALİYET: kutu alanıyla orantılı, atlas penceresinin
                            binde biri mertebesinde
ADIM 4  GÜZERGÂHI SADELEŞTİR  Douglas-Peucker benzeri seyreltme, koridor
                            biçimine çevir (u1·u2·km·kalinlik·f·t·kaynak)
```
🟢 **Bu mimarinin kazancı ölçülebilir bir varsayıma dayanıyor:** iki komşu
düğüm arasındaki en ucuz yol, o iki düğümü çevreleyen kutunun DIŞINA
çıkmaz — dağ silsilesi çok uzun bir dolambaç dayatmadıkça.
🔴 **VE BU VARSAYIM SINANMALI, ÖLÇMEDİM.** Sınav takımı hazır: koridorun
Osmanlı ayağındaki **84 kenarda km DOLU**; aynı çiftler için kutu yöntemi
koşulup gerçek menzil güzergâhıyla karşılaştırılabilir. Sapma büyükse pay
(+%20) büyütülür.

### Eksik olan tek fonksiyon
```python
def guzergah(kutu, adim, fr, nehir, bas, son):
    """Tek kaynaklı Dijkstra + geri yürüme → [(lat,lon), …]"""
```
📌 `maliyet_mesafe`in gövdesi zaten Dijkstra; eksik olan (a) tek kaynak ile
çağrılması ve (b) `skor` alanında hedeften kaynağa geri yürüme. **Küçük bir
ek, yeni bir motor değil.** Ama `arac/` altına yazılacağı için **benim işim
değil** — tasarımı burada, yazımı sahibinde.

---

## 4. 🔴 DÜNYA AYAĞININ DÜRÜSTLÜK SORUNU — tasarımın en önemli maddesi

Osmanlı ayağının her kenarı bir **kaynağa** dayanıyor (menzil defteri, OWTRAD
haritası) ve `saat_cinsi` alanı *ölçüldü / türetildi / ölçülemedi* diye
**ayrılıyor**. Dünya ayağında böyle bir kaynak **yok** — kenarlar tamamen
DEM'den türetilecek.
⇒ **İki ayak aynı katmanda ama epistemik olarak AYRI**, ve bu veride
görünmelidir:
```
🟢 ÖNERİ   her dünya kenarı  kaynak:"turetildi — DEM maliyet-mesafe"
                             saat_cinsi:"turetildi"
                             kesinlik: (Osmanlı ayağından DÜŞÜK bir değer)
🔴 YASAK   dünya kenarını Osmanlı kenarıyla aynı görsellikte çizmek —
           kullanıcı "bu da bir menzil yolu" sanır. Ayrımı ARAYÜZ de
           göstermeli (`js/app.js`, benim dosyam değil, koordinatöre not).
```
📌 Bu, `CLAUDE.md`nin *"ölçülmüş ile türetilmiş yan yana durursa okuyan
ikisini de ölçülmüş sanır"* dersinin koridor tarafı.

---

## 5. TESLİM — ölçüm ve çıkarım AYRI

```
ÖLÇTÜĞÜM
  koridor kutusu dışında 1803 yerleşim · 1341'i k1-k3 · kuşak dağılımı
  bugünkü koridor yoğunluğu 28 düğüm/milyon km² · 0,35 düğüm/yerleşim
  maliyet.py'nin 9 işlevi okundu: sürtünme·DEM·çok-kaynaklı Dijkstra·
    numpy ikizi·Voronoi·kara bileşeni·hız eğrisi VAR
  maliyet.py'de güzergâh çıkarma · tek kaynaklı koşu · çift seçimi YOK

ÇIKARDIĞIM
  ① dünya ayağı bir ARAŞTIRMA işi değil ÜRETİM işi — düğümler zaten elde
  ② eksik olan tek şey `guzergah()` benzeri küçük bir ek işlev
  ③ mimari çift-başına-küçük-kutu olmalı; dünya ölçeğinde tek kaynaklı
    koşu tekrarlanamaz (kaba çarpım ~83 gün — ölçüm değil, ölçek göstergesi)
  ④ ve dünya kenarları Osmanlı kenarlarından EPİSTEMİK OLARAK ayrılmalı,
    yoksa türetilmiş yol ölçülmüş menzil gibi okunur

ÖLÇMEDİĞİM (ve "ölçtüm" demiyorum)
  numpy sürümünün gerçek hızı · küçük-kutu varsayımının sapması ·
  400 km eşiğinin doğruluğu · maliyet.py'nin bugünkü DEM ayarlarıyla
  Osmanlı ayağını ne kadar iyi yeniden üretebildiği
```
