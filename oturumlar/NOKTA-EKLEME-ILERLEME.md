# NOKTA EKLEME — İLERLEME

> Görev tanımı: `oturumlar/NOKTA-EKLEME.md` (`0ecf58d`)
> Ölçüm zemini: `git log --oneline -1` → `0ecf58d` (§14)
> Yazılan tek veri dosyası: `data/yerlesimler_ek.js` — **12 nokta**

---

## 0. TEK CÜMLE

Üç boşluktan **ikisi kapatıldı** (Yukarı Macaristan 4 nokta, Dalmaçya 8 nokta);
**Girit kapatılmadı ve bu bir eksiklik değil, ölçülmüş bir karardır** — önerilen
düzeltme ölçüldüğünde kapatacağı hatadan **2000 kat büyük** bir hata üretiyor.

---

## 1. 🔴 GİRİT — ÖLÇÜLDÜ, YAZILMADI

Görev tanımı Girit'i "en ucuz" diye ilk sıraya koymuştu: kaynak hazır, emsal
tarih hazır. Kaynak gerçekten hazırdı. **Sorun kaynakta değil, geometride
çıktı.**

### Kaynak turu — hepsi doğrulandı
TDV `girit` **CANLI** (`<title>` = "GİRİT - TDV İslâm Ansiklopedisi"):

> "Bu anlaşma ile Venedikliler'in elinde kalmış olan **Spinalonga ile Suda**
> kaleleri daha sonra **1127 (1715)** yılında Venedik'e karşı açılan Mora
> seferi sırasında fethedildi." · "**Granbosa** Kalesi ise **1692** yılında ele
> geçirilmişti."

Koordinatlar GeoNames'ten doğrulandı:
```
Suda        Nisi Souda / Lazaretta adacığı   35.48860 / 24.15237
Spinalonga  Kalydon adacığı                  35.29760 / 25.73840
Granbosa    Ímeri Gramvoúsa adacığı          35.61125 / 23.57901
```

### 🔴 Üçü de ADACIK — ve ikisi kara maskesinin DIŞINDA
```
Suda adacığı        ✗ maske dışı — en yakın kara 35.5073,24.1517 (Akrotiri)
Spinalonga adası    ✗ maske dışı — en yakın kara 35.3018,25.7354
İmeri Gramvusa      ✗ maske dışı — en yakın kara 35.5998,23.5962
```
`denetle.py`'nin kendi kuralı: **maske dışındaki nokta HİÇ toprak sahibi
olamaz.** Yani üçü de ya yazıldıkları yerde etkisiz kalır, ya da anakaraya
kaydırılır.

### 🔴 Kaydırılınca ne oluyor — ÖLÇÜLDÜ
Çıplak Voronoi, 0,004° ızgara, kara maskesiyle kesilmiş (976 mevcut nokta +
üç aday, en yakın kara hücresine kaydırılmış hâlleriyle):

```
Suda           305,5 km²
Spinalonga   1.171,6 km²
Granbosa       685,8 km²
──────────────────────
TOPLAM       2.163,0 km²      Girit ≈ 8.336 km²  ⇒  adanın %26'sı
```

**Venedik'in 1669'dan sonra Girit'te fiilen tuttuğu toprak ~1 km²'dir** —
üç tahkimli adacık. Etraflarındaki kara Osmanlı'ydı; kaleler zaten bu yüzden
dayanabildi.

```
BUGÜNKÜ HATA      ~1 km²'yi Osmanlı boyamak        (45,9 yıl ×2 + 22,3 yıl)
ÖNERİLEN DÜZELTME  2.162 km²'yi VENEDİK boyamak
```

`CLAUDE.md §3.5.1`: *"Bir sınır kayması önerildiğinde **iki uç da ölçülür.**
'Bu tarafta fazlalık var mı' yetmez; 'öbür tarafta fazlalık doğuyor mu' da
sorulur. Tek uçtan bakan düzeltme, hatayı taşır — silmez."*

Burada tek uçtan bakılsa hata taşınmakla kalmaz, **2000 katına çıkardı.**

### Bu bir "bulunamadı" değil — motorun ifade edemediği bir gerçeklik
`§2`'nin emilme kuralı bir **yarıçap kabulü** taşıyor: her nokta "çevresindeki
toprak" demektir. Adacık kalesi tam olarak bunun tersidir — **toprağı olmayan
bir tutunma noktası.** Petek motoru bu şekli üretemez.

**Girit'in doğru düzeltmesi harita değil KRONOLOJİ katmanındadır:** 1692 ve
1715 fetihleri madde ister, petek istemez. Kronoloji oturumunun işi.
📌 Ve `1715-09-07` kırılması veride **zaten var** (Çuha Adası, Ayamavra) —
yani Mora seferinin o günü haritada zaten kırılıyor.

⚠️ **Ayrıca bir tarih çelişkisi:** TDV `girit` Kandiye teslim anlaşmasını
**6 Eylül 1669** diyor; veride beş Girit kaydı da **1669-09-27** kullanıyor
(muhtemelen tahliye/teslim alma günü). `§74` — aynı sorunun cevabı değiller.
Bu oturum mevcut kayda dokunmadı (`§2` yazma yetkisi); koordinatörün kalemi.

---

## 2. ✅ YUKARI MACARİSTAN — 4 nokta

ÇAPRAZ BATI'nın ölçtüğü boşluk doğrulandı: `48,0-49,6°K / 18,8-22,6°D`
kutusunda mevcut veride **sıfır nokta**; en yakın sahipli komşu Eğri.

| Nokta | Koordinat (GeoNames) | En yakın komşu | Peteğin iddiası | Güç |
|---|---|---|---|---|
| Kassa (Košice) | 48.714 / 21.258 | Eğri 111,51 km | 9.717,6 km² | **KESİN** |
| Eperjes (Prešov) | 48.999 / 21.236 | Eğri 137,61 km | 21.605,1 km² | **KESİN** |
| Tokaj | 48.117 / 21.409 | Eğri 80,52 km | 15.289,7 km² | **KESİN** |
| Sopron | 47.685 / 16.590 | Viyana 60,44 km | 7.794,5 km² | **KESİN** |

**Toplam 54.407 km²** — ÇAPRAZ BATI'nın ölçtüğü boşluk 51.178 km² idi, aynı
mertebe.

Dördü de **salt `s:`** — hiç Osmanlı dönemi yok ⇒ **Değişmez 2 borcu YOK.**
Zincir: `macaristan` 1281 → **1526-08-29 (Mohaç)** → `avusturya` → 1918-11-11
→ `cekoslovakya` (Kassa, Eperjes) / `macaristan` (Tokaj, Sopron).
Mohaç kırılması mevcut **Bratislava** kaydının emsalidir (`§78` gereği emsal
sınandı: Bratislava da k:0 bir Habsburg şehri, aynı sınıf).

### 🟡 SANA AİT BİR KALEM: TÖKÖLİ — bilerek yazmadım
TDV `tokoli-imre` (CANLI):
> "16 Eylül'de Fülek Kalesi önünde İmre Tököli'ye prenslik alâmetlerini verdi;
> IV. Mehmed'den de berat alınmıştı. Buna göre **Orta Macar** adıyla yeni bir
> devlet kuruluyor…" · Tököli **15 Ekim 1685**'te yakalandı.

Bu, haritanın `v:` ile ifade edebileceği **gerçek bir Osmanlı tâbiiyeti** ve
`§3.5.1`'in *"Osmanlı EKSİK görünüyor"* yönündeki tam vakası. İki kırılmanın
da maddesi **VAR** (1682-09-16 tam gün · 1685-10-25'e 6 gün) — yani teknik
engel yok.

**Yazmama sebebi tek: `§80`.** Tököli'nin hâkimiyeti Kassa · Eperjes ·
Tokaj'ın üçünü de kapsıyordu (Sopron'u kapsamıyordu). Yalnız Kassa'ya yazmak
"birkaçına yazıp bırakma" olurdu; üçüne birden yazmak içinse **şehir şehir
denetim tarihi** gerekiyor ve kaynak turunda bulunamadı (TDV maddesi Kassa'yı
merkez olarak adıyla anmıyor).
⇒ **Kaynaklı araştırma kalemi olarak sana devrediyorum.**

---

## 3. ✅ DALMAÇYA — 8 nokta

ÇAPRAZ BATI'nın bulgusu doğrulandı: Dalmaçya kutusundaki 14 noktanın 7
Venedik'i **hepsi ADA**, anakara kıyısında **sıfır** nokta. Lika/Hırvat sınır
boyunda da (`44,2-46,0°K / 14,5-17,5°D`) yalnız Zagreb, Krk, Rab, Pag,
Banaluka, Yayça var — **Bihać dahil hiçbir iç nokta yok.**

### 3.1 Salt Venedik kıyı şehirleri — sıfır borç
Tek işleri anakara kıyısının peteğini **adalardan değil kendilerinden**
almasını sağlamak (ÇAPRAZ BATI: *"rengi doğru ama peteği ADA'dan geliyor —
sınır KURGUSAL"*).

| Nokta | Koordinat | En yakın komşu | Peteğin iddiası | Güç |
|---|---|---|---|---|
| Zadar (Zara) | 44.124 / 15.232 ⚠️ | Uzunada 18,95 km | 2.005,3 km² | **KESİN** |
| Şibenik (Sebenico) | 43.734 / 15.894 | Knin 41,94 km | 1.668,6 km² | **KESİN** |
| Split (Spalato) | 43.511 / 16.439 ⚠️ | Klis 8,38 km | 474,5 km² | **KESİN** |
| Kotor (Cattaro) | 42.421 / 18.768 | Cetinje 12,46 km | 1.188,4 km² | **KESİN** |

⚠️ **Zadar ve Split GeoNames değeriyle kara maskesinin DIŞINDA kalıyordu.**
`denetle.py`'nin talimatı uyarınca en yakın kara hücresine kaydırıldı:
Split 310 m; Zadar 1,09 km (eski şehri Natural Earth 10m'de çözülmeyen bir
yarımadada — maske sınırının **tam üstü** de `covers` testini geçmiyor,
ölçüldü). GeoNames değerleri kayıtların yanında yazılı.

📌 **Kotor, BALKAN'ın "Venedik Arnavutluğu tamamen yok" bulgusunun doğrudan
karşılığıdır** — Cetinje 12,46 km'den bütün Boka Kotorska'yı yutuyordu.

Tarihler: Zadar Antlaşması **1358-02-18** · Ladislas'ın satışı 1409 (gün
belirsiz, `§76` → `1409-01-01`) · Şibenik teslim sözleşmesi **1412-10-30** ·
Split 1420 (gün belirsiz) · Kotor Venedik himayesi 1420.

### 3.2 Osmanlı dönemi olan kaleler
| Nokta | Koordinat | Osmanlı dönemi | Peteğin iddiası | Güç |
|---|---|---|---|---|
| Knin | 44.041 / 16.197 | 1522-05-29 → 1688-09-11 | 6.238,9 km² | **KESİN** |
| Sin (Sinj) | 43.704 / 16.639 | 1513-01-01 → 1686-09-30 | 1.451,6 km² | **DESEN** |
| Klis | 43.559 / 16.519 | 1537-03-12 → 1648-03-31 | 541,9 km² | **DESEN** |
| Herseknovi | 42.453 / 18.538 | 1482-01-01 → 1687-09-30 | 1.259,9 km² | **KESİN** |

- **Knin** — Gazi Hüsrev Bey'in kuşatması; Vojković 28 Mayıs 1522'de teslim
  oldu, Osmanlı **29 Mayıs**'ta girdi. Venedik **11 Eylül 1688** (Cornaro).
- **Sin** — Osmanlı **1513** (gün yok, `§76` → `1513-01-01`); Venedik
  **30 Eylül 1686**, Poljica milisleriyle. DESEN: fetih yılı TDV dışı kaynakta.
- **Klis** — TDV `klis` (CANLI) fethi 1537'de Murad Bey'e veriyor; kale
  **12 Mart 1537**'de Kružić'in ölümüyle düştü. Venedik **31 Mart 1648**
  (Foscolo) — 1648 günü yalnız Vikipedi türevi kaynaklarda, `§4` gereği DESEN.
  ⚠️ **`§74` uygulandı:** TDV aynı maddede *"Klis 1826'ya kadar Osmanlı
  **sancağı** olarak varlığını sürdürdü"* diyor. Bu **aynı sorunun cevabı
  değildir** — sancak idarî birimdir ve merkezi 1648'den sonra Livno'ya
  taşınmıştır; **kale** 1648'de Venedik'e geçti. Kayıt kaleyi yazar.
- **Herseknovi** — 1382'de I. Tvrtko kurdu ⇒ `kur:"1382-01-01"`. Osmanlı 1482,
  Venedik **30 Eylül 1687** (Cornaro). **Tek Osmanlı dönemi kaydı ki iki
  kırılmasının da maddesi VAR** (0 gün ve 4 gün).
  ⚠️ **ÇELİŞKİLİ, yazılmadı:** 1538-1539 Kutsal İttifak/İspanyol ara işgali.
  Alınış Ekim 1538, Barbaros'un geri alışı kimi kaynakta Temmuz 1539 başı
  kiminde Ağustos; ikisinin de ±30 günde maddesi yok. *Eksik alan yanlış
  alandan iyidir.*

### 3.3 🔴 KARLOFÇA'NIN YEDİ KALESİNDEN BEŞİ — BULUNAMADI
TDV `karlofca` (CANLI, 26 Ocak 1699) Venedik'te kalanları adıyla sayıyor:
`Knin · Signe (Sin) · Verlice · Delovar · Zadvar · Vergoriçe · Çiklit`.

Bu parti **ikisini** yazdı (Knin, Sin). Kalan beşi **yazılmadı**:
```
Verlice   → muhtemelen Vrlika      TDV müstakil madde YOK, eşleşme Vikipedi
Zadvar    → muhtemelen Zadvarje    aynı
Vergoriçe → muhtemelen Vrgorac     aynı
Çiklit    → muhtemelen Čitluk      aynı — ve Čitluk adı Bosna'da MÜKERRER
Delovar   → HİÇBİR modern adla eşleştirilemedi   🔴 BULUNAMADI
```
`CLAUDE.md §4`: Vikipedi tek dayanak değildir. Beş kalenin **kimliği** ancak
Vikipedi üzerinden kuruluyor; koordinat yazmak için yeterli değil.
📌 BALKAN'ın işaret ettiği damar (Alberghetti 1732 haritası · Fürst-Bjeliš
2007 · Tea Mayhew) bu beş adı çözebilir — **kartografik kaynak turu gerekiyor**,
ve bu bir araştırma oturumunun işi.

### 3.4 🟡 ÜÇ KADEMELİ SINIR — bu parti kademe YAZMIYOR
BALKAN `§44`: Linea Nani 1671 (Acquisto Vecchio) · Linea Grimani 1699/1700
(Acquisto Nuovo) · Linea Mocenigo 1718/1720/1721 (Acquisto Nuovissimo).

Bu parti **nokta ekler, hat çizmez** — petek motoru zaten hat kabul etmiyor,
sınırı noktalardan üretiyor. Eklenen sekiz nokta üç kademenin **Nuovo**
kademesini (Knin/Sin dahil) taşıyor; **Mocenigo 1718 kademesi noktasız
kaldı** (Vergoriçe/Çiklit oradaydı — yani 3.3'teki bulunamayanlarla aynı küme).

---

## 4. DOĞRULAMA

### 4.1 🔴 `denetle.py` BU DOSYAYI GÖRMÜYOR — ve bu bir tuzak
`data/yerlesimler_ek.js` **`arac/girdi.py`'deki `GIRDI_DOSYALARI` listesinde
YOK.** Motor da denetim de onu okumuyor. `denetle.py` çıktısı **976 yerleşim**
diyor — yani 988 değil.

⇒ **`denetle.py`'nin "temiz" demesi bu parti hakkında HİÇBİR ŞEY söylemez.**
Bu, `girdi.py`'nin kendi dosya başında uyardığı hata sınıfının aynısı:
*"ayrıştırıcıyı doğrulamak yetmiyor, hangi DOSYALARI okuduğunu da doğrulamak
gerekiyor."*

Bu yüzden parti **canlıymış gibi birleştirilip ayrıca ölçüldü** (scratchpad
doğrulayıcı, `girdi.py`'nin kendi ayrıştırıcısıyla):

```
① ad çakışması / alan kütüğü   ✓ çakışma yok, bilinmeyen alan yok
② dönem sağlığı                ✓ 0 ters, 0 sıfır uzunluk, 0 çakışma
③ Değişmez 1                   ✓ 12 noktanın 12'si KESİNTİSİZ
                                 (GÜNLÜK tam tarama, örnekleme değil)
④ 3 km kuralı                  ✓ en yakın çift Split ↔ Klis 8,38 km
⑤ kara maskesi                 ✓ 12/12 içeride (Zadar ve Split kaydırıldıktan sonra)
⑥ BOYALAR                      ✓ 7 kimliğin 7'si renkler.py'de tanımlı
                                 (avusturya·bosna·cekoslovakya·macaristan·
                                  sirbistan·venedik·yugoslavya — YENİ RENK GEREKMİYOR)
⑦ Değişmez 2                   🔴 4 AÇIK KIRILMA — aşağıda
```

### 4.2 🔴 CANLIYA ALMADAN ÖNCE ÖDENECEK BORÇ: DÖRT KRONOLOJİ MADDESİ
```
1522-05-29  Knin'in fethi (Gazi Hüsrev Bey)   en yakın madde 206 gün
1513-01-01  Sin'in (Sinj) fethi                en yakın madde  59 gün
1537-03-12  Klis'in fethi (Murad Bey)          en yakın madde 166 gün
1648-03-31  Klis'in Venedik'e kaybı            en yakın madde  31 gün
```
Dosya bugün girdiye eklenirse **Değişmez 2 AÇIK 0'dan 4'e çıkar.**
Maddeler Kronoloji oturumunun işi; bu oturumun yazma yetkisi yok.
⚠️ **Alternatif:** Knin · Sin · Klis kayıtlarını çıkarıp kalan **dokuz nokta**
alınabilir — o dokuz **sıfır borç** doğuruyor (Herseknovi dahil).

### 4.3 ⚠️ ZEMİN ZATEN KIRMIZI — ve belgeler bayat
`py arac/denetle.py` **benim işimden ÖNCE de** çıkış kodu 1 veriyor:
```
Değişmez 1  ✓  976 yerleşim, 50 sahipsiz (beklenen 50)
Değişmez 2  ✗  484 kırılma, 1 açık (beklenen 0)
Değişmez 2s ✗  596 YABANCI kırılması, 116 açık (tavan 114) — bilinen borç
Değişmez 2t ✗  kırılmasız madde: 50 (tavan 49) — bilinen borç
Ek denetim  ✓  konum: 0 nokta kara maskesinin dışında
SONUÇ: İHLAL VAR — çıkış kodu 1
```
Bu **benim eserim değil** (dosyam okunmuyor, sayı 976'da sabit) ama bilinmesi
gerekiyor: `CLAUDE.md §1.5` hâlâ *"764 yerleşim · 433 kırılma · 34 sahipsiz ·
AÇIK 0"* diyor; gerçek **976 · 484 · 50 · 1**. Belge dört sayının dördünde de
geride. `§5`'teki *"bayat satır bir araştırma oturumunu doğrudan yanılttı"*
dersinin tekrarı.

---

## 5. KOORDİNATÖRDEN İSTENENLER

1. **`arac/girdi.py` → `GIRDI_DOSYALARI`'na `"yerlesimler_ek.js"` satırı.**
   Yalnız sen ekleyebilirsin (`§7`: `arac/*.py` bu oturuma kapalı).
   **Dört madde yazılmadan ekleme** (4.2).
2. **Kronoloji oturumuna dört madde kalemi** (4.2).
3. **Tököli / Orta Macar `v:` kalemi** araştırma oturumuna (2. bölüm sonu).
4. **Karlofça'nın beş kalesi** için kartografik kaynak turu (3.3) —
   özellikle `Delovar`'ın kimliği.
5. **Girit kararı senin** (1. bölüm): benim hükmüm *nokta eklenmemeli, madde
   yazılmalı*. Karşı karar verirsen 2.163 km²'lik bedeli bilerek veriyor olursun.
6. **Kandiye teslim tarihi çelişkisi** (1. bölüm sonu) — mevcut kayıt kalemi,
   bana kapalı.
7. **`CLAUDE.md §1.5`'in dört sayısı** (4.3).

---

## 6. YAPILMAYANLAR — açıkça

```
Girit üç kale        YAZILMADI — ölçüldü, gerekçe §1
Karlofça'nın 5 kalesi YAZILMADI — Delovar BULUNAMADI, dördü kaynak yetersiz
Tököli v: dönemi      YAZILMADI — §80, şehir şehir tarih yok
Herseknovi 1538-39    YAZILMADI — ÇELİŞKİLİ
Butrinto              KAPSAMIMDA DEĞİL — koordinatör ÇAPRAZ AKDENİZ'de tuttu
Lika/Bihać            KAPSAMIMDA DEĞİL — ama Lika'da SIFIR nokta var (§3),
                      Knin'in 6.238,9 km²'lik peteği oraya taşıyor. Ölçülmesi
                      gereken bir sonraki kalem bu olabilir.
py arac/uret_petek.py ÇALIŞTIRILMADI — koordinatör tetikler
data/yerlesimler.js   DOKUNULMADI
```
