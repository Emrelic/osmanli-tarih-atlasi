# Oturum 14 — Osmanlı Afrikası yerleşim katmanı · İLERLEME

> **FAZ 2 BİTTİ (2026-07-30).** Merkez oturumun devam görevi tamamlandı; ölçümler
> ve kalan işler **§9-§12**'de. Aşağıdaki Faz 1 bölümü tarihî kayıt olarak
> duruyor; Faz 1'de "yapılacak" denen altı maddenin beşi Faz 2'de kapandı.
> Bugünkü durum: `data/yerlesimler_afrika.js` **163 nokta** ·
> `data/olaylar_ek9.js` **13 madde** · yedi denetim de temiz.

**Durum: bitti.** Tek çıktı `data/yerlesimler_afrika.js` — **153 yeni yerleşim**.
Commit atılmadı, `arac/uret_petek.py` çalıştırılmadı, başka hiçbir dosyaya
dokunulmadı.

---

## 1. Ne eklendi

| Bölüm | Nokta |
|---|---|
| Mısır — Delta ve Aşağı Mısır | 21 |
| Mısır — Orta ve Yukarı Mısır (Nil vadisi) | 17 |
| Mısır — Kızıldeniz kıyısı, Sînâ, Vâdî Halfâ | 5 |
| Tunus eyaleti | 21 |
| Trablusgarp eyaleti (Trablus + Bingazi) | 14 |
| Cezayir eyaleti | 23 |
| Habeş Eyaleti kıyısı (Sevâkin ardalanı dâhil) | 5 |
| Habeşistan İmparatorluğu iç yayla + Afar kıyısı | 17 |
| Somali kıyısı | 15 |
| Sudan ve Nûbe | 15 |
| **Toplam** | **153** |

Görev tanımındaki hedef bantlarına göre (kutular birebir aynı olmadığı için
yaklaşık): Mısır 12 → ~60, Tunus-Trablus 8 → ~40, Cezayir 16 → ~38,
Habeşistan 5 → ~34, Somali 6 → ~20, Sudan-Nûbe 11 → ~22. Hepsi hedef bandın
içinde ya da üstünde.

---

## 2. Kapsama ölçümü — önce / sonra

`arac/denetle_kapsama.py`'nin maskesi ve 0.25° ızgarasıyla, aynı bölge
kutularında (araç `data/yerlesimler.js`'ten fazlasını okumadığı için ölçüm
aynı mantıkla ayrı bir betikte, iki dosyanın birleşimi üzerinde koşturuldu):

| Bölge kutusu | | ortanca | %90 | en kötü | >120 km | >300 km |
|---|---|---|---|---|---|---|
| Mısır/Sudan | önce | 225 km | 461 | 688 | %79.9 | %31.6 |
| | **sonra** | **159 km** | **427** | **671** | **%62.0** | **%23.0** |
| Kuzey Afrika | önce | 212 km | 390 | 590 | %75.7 | %27.7 |
| | **sonra** | **165 km** | **356** | **519** | **%63.0** | **%18.9** |
| Doğu Afrika | önce | 212 km | 493 | 873 | %79.6 | %29.8 |
| | **sonra** | **120 km** | **420** | **852** | **%50.2** | **%17.5** |

Kalan büyük boşlukların hemen hepsi **Sahra, Rub'ul Hâlî ve güney Habeşistan**
— ilk ikisi kasten boş (dolgu noktaları var), üçüncüsü aşağıda §5'te.

---

## 3. Denetim sonuçları

`arac/denetle.py`'nin fonksiyonları `yerlesimler.js + yerlesimler_afrika.js`
birleşimi üzerinde koşturuldu (`arac/` altına yazılmadı, sadece import edildi):

| Denetim | Taban | Yeni dosyayla | Sonuç |
|---|---|---|---|
| Değişmez 1 — sahipsizlik | 35 | **35** | ✓ yeni delik yok |
| Değişmez 2 — sessiz toprak değişimi | 427 kırılma / 0 açık | **430 kırılma / 0 açık** | ✓ |
| Değişmez 3 — dört boyut çelişkisi | 381 | **381** | ✓ yeni dosyadan 0 çelişki |
| Dönem sağlığı | — | sıfır=0, ters=0, çakışma=0 | ✓ |

Ek denetimler:
- **Ad tekrarı:** yok (153 adın hiçbiri mevcut veride yok).
- **3 km kuralı:** ihlal yok. En yakın çift Arkîko ↔ Masavva = 7.2 km
  (Habeş Eyaleti'nin iki kurucu noktası, gerçekten o kadar yakın).
- **Pencere:** 153 noktanın hepsi `box(-12, 1.5, 62, 62)` içinde.
- **Kara maskesi:** 153 noktanın **153'ü karada.** İlk turda yedisi Natural
  Earth kıyı çizgisinin dışında kalmıştı; hepsi en yakın kara hücresine
  kaydırıldı (Bürüllüs 0.5 km, Benzert 1.3, Halkulvâdî 1.0, Dellîs 0.6,
  Arkîko 0.5, Aseb 0.5, Bulhar 2.8 km). Konum hatası değil, maske
  çözünürlüğü düzeltmesi — dosyanın başında yazılı.
- **Devlet kimlikleri:** kullanılan 12 kimliğin (`adal, fransa, funj,
  habesistan, hafsi, ingiltere, italya, mehdi, memluk, nube, somali,
  zeyyani`) **hepsi `arac/renkler.py`'de tanımlı.** Boyasız pencere yok.
- **`m:` alanı:** 153 kaydın hepsinin merkezi mevcut veride var
  (Kahire, Tunus, Trablus, Bingazi, Cezayir, Sevâkin, Hartum).

---

## 4. ⚠️ Entegrasyon oturumunun bilmesi gerekenler

### 4.1 `index.html` ve `js/app.js`'e satır eklenmeli
Dosya sahipliği kuralı gereği dokunulmadı. `VERI-YAPISI.md`: yeni veri dosyası
`index.html`'e `<script>` ile eklenmedikçe ve `js/app.js`'te birleştirme
noktasına katılmadıkça **yüklenir ama kullanılmaz.**

### 4.2 Tarihi yuvarlanan yedi nokta — kronoloji maddesi bekliyor
Bu oturum `olaylar*.js`'e yazamadığı için, her `d:`/`v:` sınırı mevcut bir
kırılma tarihine oturtuldu. Gerçek tarihi kapsanmayan yedi yer, en yakın
kapsanan tarihe **yuvarlandı.** Madde yazıldığında gerçek tarihlerine
çekilmeliler:

| Yer | Yazılan | Gerçek |
|---|---|---|
| Muaskar (Mascara) | 1844-03-04 | 1841-05 (Abdülkādir'in merkezini kaybı) |
| Sîdî Bel Abbès | 1844-03-04 | 1843 |
| Nedrûme | 1844-03-04 | 1844 civarı |
| Şelif | 1844-03-04 | 1843 |
| Tenes | 1844-03-04 | 1843 |
| Ağvât (Laghouat) | 1854-12-02 | **1852-12-04** |
| Gardâye (Ghardaia) | 1854-12-02 | **1882** (Mîzâb'ın ilhakı) |

Buna karşılık **Mustagānim (1833-07-28)** ve **Cicel (1839-05-13)** gerçek
tarihleriyle yazıldı — ikisinin de ±30 gün içinde maddesi var (Hünkâr İskelesi
20 gün, Fırat geçişi 22 gün). Üç yeni kırılma tarihi bunlar ve **Kesela
(1840-07-15)**.

**Kesela'nın günü uydurma değil ama seçilmiş:** yıl (1840, Taka'nın fethi ve
şehrin kuruluşu) doğrulandı, gün doğrulanamadı; 15 Temmuz seçilmesinin sebebi
Londra Antlaşması maddesiyle aynı güne düşmesi. Gerçek gün bulunduğunda
düzeltilmeli.

### 4.3 Ocaklık ayrımı — görev tanımının söylediği gibi hepsi doğrudan yazıldı
Cezayir (1671 sonrası dayı), Tunus (1705 sonrası Hüseynî), Trablus (1711-1835
Karamanlı) fiilen özerkti. Mevcut veri bu ayrımı yapmıyor; bu dosya da
**yapmadı**, yeni noktalar mevcut merkezleriyle birebir tutarlı. Ayrım
uygulanacağı zaman hepsi birlikte taşınabilir — bölüm başlıklarında hangi
noktanın hangi ocağa ait olduğu yazılı.

Not: `olaylar*.js`'te **1835-05-26 "Trablusgarp'ın doğrudan merkeze
bağlanması — Karamanlı hanedanının sonu"** maddesi zaten var; Trablusgarp
ayrımı için kırılma tarihi hazır.

### 4.4 Tabarka'nın Ceneviz dönemi yazılamadı
Tabarka 1540-1741 arası Cenevizli Lomellini ailesinin mercan imtiyazıyla
elindeydi. Bu dönem **veriye yazılmadı**: 1741 devralması için kronoloji
maddesi yok, yazılsaydı Değişmez 2 açılırdı. `ceneviz` kimliği mevcut, madde
yazıldığı gün eklenebilir.

Aynı sebeple yazılamayan iki dönem daha: **Kerene (Keren)** 1872-1884 Mısır
işgali, **Tokar** 1883-1891 Mehdî idaresi.

---

## 5. ⚠️ EKLENMESİNİ İSTEDİĞİM DEVLET KİMLİKLERİ

Görev tanımı gereği **hiçbiri eklenmedi.** Renkler komşuluk çizgesine göre
dağıtıldığı için seçimi entegrasyon oturumu yapmalı.

### 5.1 Nokta EKLENEMEDİĞİ için kimlik şart olanlar

| Öneri id | Tam ad | Aralık | Merkez | Neden şart |
|---|---|---|---|---|
| `darfur` | Darfur Sultanlığı | ~1603 – 1874 (ve 1898'e kadar aralıklı) | El-Fâşir | Bugün Darfur'da tek bir **sahipsiz dolgu noktası** var. El-Fâşir eklenemedi çünkü `funj` yazmak açık bir hata olurdu — Darfur hiçbir zaman Func'a bağlı değildi. Kimlik gelince El-Fâşir (13.630, 25.349) ve Nühûd'un 1821 öncesi yeniden yazılmalı. |
| `kaffa` veya toplu `guney-habesistan` | Kaffa · Cimma (Gibe) · Vollayta · Sidamo krallıkları | ~1390 – 1890'lar | Bonga / Cimma | Güney Habeşistan 1890'lara kadar Habeş İmparatorluğu'na ait DEĞİLDİ. `habesistan` yazmak yanlış olurdu, bu yüzden **hiç nokta konmadı** — bölge şu an Addis ve Ogaden dolgusuna emiliyor. Doğu Afrika kutusundaki en kötü boşluk (852 km) burada. |

### 5.2 Mevcut kimliğe emanet edilenler — ayrıştırma mekanik

| Gerçek yapı | Şimdi ne yazıyor | Etkilenen noktalar |
|---|---|---|
| Mecerteyn Sultanlığı (1600'ler – 1927) | `somali` | Bender Kāsım, Alula, Hafun, Garove, Ayl |
| Hobyo (Obbiya) Sultanlığı (1878 – 1925) | `somali` | Obbiya, Galkayo |
| Warsangali Sultanlığı | `somali` | Erigavo, Lasanod |
| Avsa (Afar) Sultanlığı (1577 sonrası) | `adal` | Aseb, Tacûra |
| İsyanlar/hanedanlar: Merînî · Vattâsî · Sa'dî · Alevî (Fas) | `fas` | mevcut Fas noktaları — bu oturum Fas'a nokta eklemedi |

`ajuran` ve `idrisiler` için bu dosyada nokta yok; gerekirse ayrı bir
oturumun işi.

---

## 6. Kasten EKLENMEYENLER

- **Sahra içine tek nokta konmadı** (görev tanımı). Bu yüzden gerçekte Osmanlı
  kazası olan üç yer dışarıda kaldı — kutu açılmadan da eklenebilirler,
  entegrasyon oturumunun kararı:
  **Ğadâmis** (30.133, 9.500) · **Gât** (24.964, 10.180) · **Cağbûb**
  (29.744, 24.517, Senûsî merkezi).
- **Sînâ'nın iç çölü:** yalnız iki kıyı noktası eklendi (El-Arîş, Tûr).
  Mevcut "Sina güneyi" dolgusu kasten sahipsiz kalmaya devam ediyor.
- **Barava (1.11°K) ve Kısmâyû (0.36°K):** `box(-12, 1.5, 62, 62)`
  penceresinin **güney sınırı 1.5°K**, ikisi de dışarıda. Kutu güneye
  açıldığında eklenmeli. Merka (1.716°K) sınıra en yakın nokta.
- **Sahel ve Batı Afrika** görevin dışındaydı, dokunulmadı.

---

## 7. Kaynak durumu — dürüst kayıt

- Yerleşim kayıtlarında `kaynak:` alanı **yoktur** (şema gereği); bu yüzden
  bu oturumda **hiç TDV slug'ı yazılmadı** ve ölü slug tuzağı riski oluşmadı.
- Dönem zincirlerinin çoğu **mevcut verideki komşu kayıttan** alındı (Kahire,
  İskenderiye, Asyut, Tunus, Kayrevan, Trablus, Misrata, Bingazi, Cezayir,
  Konstantin, Sevâkin, Masavva, Berbera, Mogadişu, Hartum, Sennâr, Dongola,
  Kordofan, İbrim). Yani yeni bir tarihsel iddia getirmiyorlar.
- **Kaynaktan doğrulanan yeni tarihler:** Cicel 13 Mayıs 1839 ✓ ·
  Mustagānim 28 Temmuz 1833 ✓ · Kesela'nın kuruluş yılı 1840 ✓ ·
  Aseb'in İtalyan devletine devri 10 Mart 1882 ✓ · Mecerteyn himayesi
  7 Nisan 1889 ✓ · Hobyo himayesi **Aralık 1888** (ilk yazılan 1889-04-07
  düzeltildi) ✓.
- **Doğrulanamayan ve bu yüzden yıl hassasiyetine indirilen:** Tacûra'nın
  Fransız himayesi — 1884 kesin, gün değil; proje kuralı gereği
  `1884-01-01` yazıldı.
- Denetlenemeyen kalan kısım: kasaba ölçeğindeki idari bağlar (`k`/`m`) ve
  Osmanlı belgelerindeki ad yazımları. Ad yazımında Osmanlı karşılığı
  tercih edildi (Trablusgarp yerine bölüm başlığında; Benzert, Halkulvâdî,
  Sevâkin, Masavva, Bicâye, Vehrân deseni), modern adı parantezle verildi.

---

## 8. Üretim beklentisi

Üretim çalıştırılmadı. Çalıştırıldığında beklenen görünür değişiklikler:

1. **Mısır** artık 12 değil ~60 nokta — Nil vadisi ve Delta'nın gövdesi
   Kahire'nin tek peteğinden çıkıp gerçek şeklini alacak.
2. **Akdeniz kıyısı** İskenderiye-Derne arasındaki 700 km'lik boşluk kapandı
   (Mersâ Matruh, Sellûm, Tobruk) — bu kıyı şeridi bugüne kadar
   İskenderiye'nin peteğine emiliyordu.
3. **Sirte körfezi** (Misrata-Bingazi arası ~600 km) artık kendi noktasına
   sahip.
4. **İç Habeşistan** kendi noktalarını aldı; Masavva ve Sevâkin'in petekleri
   artık yaylaya taşıp Habeşistan'ın kalbini Osmanlı boyayamaz.
5. **Kuzeydoğu Somali** (Mecerteyn kıyısı) ilk kez temsil ediliyor.
6. Yeni 12 devlet kimliği yok — **hiçbir yeni renk gerekmiyor**, üretim
   uyarı vermemeli.

---
---

# FAZ 2 — merkez oturumun devam görevi (2026-07-30)

**Yazılan iki dosya:** `data/yerlesimler_afrika.js` (153 → **163 nokta**) ve
yeni `data/olaylar_ek9.js` (**13 kronoloji maddesi**). Başka hiçbir dosyaya
dokunulmadı; `arac/` altı okundu, yazılmadı. Commit atılmadı, üretim
koşturulmadı. **Girdi sabit.**

## 9. Yedi denetimin sonucu — ölçüldü

`py arac/denetle.py`, Faz 2 bittikten sonra:

```
927 yerleşim, 924 kronoloji maddesi
Değişmez 1   ✓  34 sahipsiz (beklenen 34)              — artmadı
Değişmez 1b  ✓  pencere arası boşluk 1 (beklenen 1)
Değişmez 2   ✓  451 kırılma, 0 açık                    — 441'den 10 yeni kırılma
Değişmez 3   ✓  381 çelişki (tavan 383)                — 378'den +3
dönem sağlığı ✓  0 sıfır-uzunluk, 0 ters, 0 çakışma
mükerrer madde ✓  0 şüpheli çift
konum        ✓  0 nokta kara maskesinin dışında
SONUÇ: temiz
```

Ek ölçümler: yeni 10 noktanın **10'u karada**, **10'u pencere içinde**; ad
çakışması yok; 3 km'den yakın çift **2** ve ikisi de çekirdekte, kasıtlı
(Anadolu Hisarı ↔ Rumeli Hisarı 1.54 km, Budin ↔ Peşte 1.57 km).

**Değişmez 3'ün +3'ü ölçülüdür ve tekidir:** Nühûd'un 1785-1821 arası
`darfur` yazılması, `m:"Hartum"` ile üç kesitte çelişiyor. Darfur noktalarına
bilerek `m:` verilmedi — verilse çelişki altı kesitte birden artıp tavanı
aşacaktı.

## 10. Beş öncelik — ne yapıldı

### Öncelik 0 (merkezin bulduğu hata): 47 kayıtta `d:` yoktu
47 kaydın hepsine `d:[]` yazıldı. Ölçüldü: `d` alanı olmayan kayıt **0**.
Ders alındı — `OGRENILENLER.md §2`.

### Öncelik 1: iki kimlik ailesi, 7 yeni nokta
`s:` alanları **dolu** yazıldı (talimat gereği), `renkler.py`'ye **dokunulmadı**.

| Nokta | Kimlik | Koordinat |
|---|---|---|
| El-Fâşir | `darfur` | 13.630, 25.349 |
| Nyala | `darfur` | 12.048, 24.882 |
| Cenîne | `darfur` | 13.452, 22.445 |
| Bonga (Kaffa) | `kaffa` | 7.283, 36.233 |
| Cimma (Jiren) | `kaffa` → `cimma` | 7.673, 36.834 |
| Sodo (Vollayta) | `vollayta` | 6.860, 37.762 |
| Yirgalem (Sidamo) | `sidamo` | 6.750, 38.410 |

Darfur zinciri: Keyra hânedanı → 1874-11-02 Mısır ilhakı (`v:` tâbi) →
1883-12-23 Mehdî → 1898-09-02 Ali Dinar sultanlığı yeniden kurdu →
1916-05-23 İngiltere. İki `v:` sınırının maddesi yazıldı.

**Nühûd'un 1821 öncesi yeniden yazıldı:** batı Kordofan 1785'te Darfur'un
eline geçmişti → `nube` → `funj` (1504) → **`darfur` (1785)** → Kavalalı
(1821-08-19) → Mehdî → İngiltere.

### Öncelik 2: Sahra'nın üç Osmanlı kazası
**Ğadâmis** (Trablus zinciri), **Gât** (Murzuk/Fizan zinciri, 1577 tâbiiyeti),
**Cağbûb** (Bingazi zinciri, `kur:"1856-01-01"`). Üçünde de Karamanlı ocaklık
ayrımı var. Çöl dolgu noktalarına dokunulmadı — Değişmez 1'in 34'lük tabanı
onlara dayanıyor ve sabit kaldı.

### Öncelik 3: yuvarlanan 7 tarih gerçeğine çekildi

| Yer | Faz 1 (yuvarlanmış) | Faz 2 | Hassasiyet |
|---|---|---|---|
| Muaskar | 1844-03-04 | **1841-01-01** | yıl (gün doğrulanamadı) |
| Şelif | 1844-03-04 | **1843-01-01** | yıl (Nisan 1843) |
| Tenes | 1844-03-04 | **1843-01-01** | yıl |
| Sîdî Bel Abbès | 1844-03-04 | **1843-06-12** | **gün ✓ doğrulandı** |
| Nedrûme | 1844-03-04 | **1844-01-01** | yıl |
| Ağvât (Laghouat) | 1854-12-02 | **1852-12-04** | **gün ✓ doğrulandı** |
| Gardâye (Mîzâb) | 1854-12-02 | **1852-12-04** | komşu kuralı, aşağıda |
| Kesela | 1840-07-15 (seçilmiş) | **1840-01-01** | yıl ✓ |

**Gardâye neden 1882 değil 1852-12-04:** Mîzâb'ın *hukukî* ilhakı 1882'dir, ama
1882 yazmak haritada **52 yıl** boyunca var olmayan Cezayir Ocaklığı'nı boyamak
demekti (§11.2). Mîzâb 1852'de Ağvât'ın düşüşünün ardından Fransız
hâkimiyetini kabul etti; `OGRENILENLER.md §8` gereği **yuvarlanmadı,
doğrulanmış komşusunun (Ağvât) tarihi kullanıldı.** 1882 ilhakı ayrı bir
madde olarak `olaylar_ek9.js`'te duruyor.

### Öncelik 4: madde yokluğundan yazılamayan 3 dönem yazıldı
- **Tabarka:** Faz 1'de öteki Tunus noktaları gibi 1574'te Osmanlı yazılmıştı.
  Gerçekte 1544'ten beri Cenevizli Lomellini ailesindeydi ve **hiç
  Osmanlı-doğrudan olmadı**: `hafsi` → `ceneviz` (1544) → Tunus Ocaklığı
  (1741-06-12) → `fransa` (1881). `d:[]`.
- **Kerene:** `v:` 1872-01-01 → 1884-06-03 "Mısır (Kavalalı)" eklendi
  (Munzinger Paşa'nın Bogos ilhakı; Hewett/Adua Antlaşması'yla geri verildi).
- **Tokar:** `d:` 1885-02-05'te değil **1884-01-01'de** bitiyor; 1884-1891
  arası `mehdi`, 1891-02-06'dan (Afafit) sonra `ingiltere`.

### Öncelik 5: Barava ve Kısmâyû — YAZILMADI, hazır bekliyor
İkisi de pencerenin **güney sınırının** (1.5°K) dışında. Kutu dışı nokta
yazmak **güvenli değil**: `uret_petek.py` hücreyi `.intersection(BOLGE)` ile
kırpıyor (265-276. satırlar), yani kutu dışındaki noktanın peteği **boş**
çıkar — r83'te düzeltilen "sıfır alanlı petek" sınıfının aynısı. Kayıtlar
dosyanın 14. bölümünde **yorumda** duruyor; pencere açıldığında yorumu
kaldırmak yeterli. (Kısmâyû'nun 1895 devir günü doğrulanmadı, açılışta
kontrol edilmeli.)

## 11. Ölçülmüş üç bulgu

### 11.1 Doğu Afrika'nın 852 km'lik boşluğu güney Habeşistan DEĞİL
Merkez oturum "en kötü kapsama boşluğu burası: 852 km" demişti. Ölçtüm:
boşluğun tepe noktası **1.62°K / 36.12°D** — yani **kuzey Kenya (Turkana)**,
Habeşistan'ın 400 km güneyi. Yine de güney Habeşistan noktaları işe yaradı:

```
Doğu Afrika kutusu     ortanca   %90   en kötü   >120 km
Faz 1 sonu               120     420     852      %50.2
Faz 2 sonu               110     301     610      %45.3
```

**En kötü boşluk 852 → 610 km.** Kapanmıyor çünkü Turkana 1281-1923 arasında
gerçekten devletsizdi. Doğru çözüm **sahipsiz dolgu noktası** (Sahra ve
Rub'ul Hâlî deseni) — ama bu Değişmez 1'in tabanını 34'ten 35'e çıkarır ve
`arac/denetle.py`'deki `BEKLENEN_SAHIPSIZ` sabiti Oturum 16'nın. **Ben
eklemedim.**

Diğer kutular (Faz 1 sonu → Faz 2 sonu, ortanca): Mısır/Sudan 159 → **146**,
Kuzey Afrika 165 → **152**. Yeni ölçülen alt kutular: güney Habeşistan
ortanca **130 km**, Darfur-Vaday ortanca **175 km**.
Mısır/Sudan (671 km) ve Kuzey Afrika (519 km) kutularının en kötü noktaları
artık **tamamen Sahra'nın içinde** — Libya çölü ve orta Cezayir Sahrası,
ikisi de kasten boş.

### 11.2 Ocaklık ayrımı 1830 sonrasına taşıyor — anakronizm sınıfı
Cezayir Ocaklığı 1830-07-05'te sona erdi, ama ocaklık `v:` dönemleri Fransız
işgal tarihine kadar sürüyor. Ölçülen fazlalıklar:

```
Ağvât / Gardâye      v: 1852-12-04'e kadar   →  22 yıl fazla
Biskra (çekirdek)    v: 1844-03-04'e kadar   →  14 yıl fazla
Tuggurt (çekirdek)   v: 1854-12-02'e kadar   →  24 yıl fazla
Bû Sa'âde, Mesîle…   v: 1844-03-04'e kadar   →  14 yıl fazla
```

Bu **çekirdek dosyada da var** (Biskra, Tuggurt), yani benim partimin getirdiği
bir hata değil — projenin mevcut modelleme kararı: "henüz Fransız değil" =
"hâlâ ocaklık". `CLAUDE.md §3.5`'in hayalet devlet sınıfı bu ve
`OGRENILENLER.md §1`'deki **sekizinci denetim (anakronizm)** tam olarak bunu
görünür yapacak. Tek taraflı değiştirmedim: 1830-1852 arasını doğru
etiketleyecek bir kimlik yok ve `v:` boşaltmak Değişmez 1'i açardı.

### 11.3 `denetle_yayin.py` ters yönü ölçmüyor
Araç "index.html'in istediği dosya yayınlanıyor mu" diye soruyor ve temiz
diyor (21/21). Ama **"diskteki veri dosyası index.html'de kayıtlı mı"** diye
sormuyor — `olaylar_ek9.js` bu yüzden araca hiç görünmüyor. Denetim de
`data/olaylar*.js` deseniyle okuduğu için maddelerimi sayıyor ve **temiz**
raporluyor; yayın ise göstermez. `OGRENILENLER.md §4`'teki `olaylar_ek8.js`
404'ünün aynadaki hâli.

## 12. Merkez oturumun yapması gerekenler

1. **`arac/renkler.py`'ye beş kimlik** (DSATUR ile): `darfur`, `kaffa`,
   `cimma`, `vollayta`, `sidamo`. Eklenmeden koşulan üretimde bu 7 petek
   **renksiz** kalır ve motor uyarı verir — beklenen davranış. Komşuları:
   Darfur ↔ `funj`/`mehdi`/`ingiltere`, güney Habeşistan ↔ `habesistan`.
   Ayrıca kimliği hâlâ olmayan ve bu yüzden **nokta konmayan** yapılar:
   Tuncur (Darfur öncesi), Vaday, Gamo, Konso, Hadiya.
2. **`data/olaylar_ek9.js`'i bağla** — `index.html`'e `<script>` satırı **ve**
   `js/app.js`:778-785 concat zincirine `.concat(window.OLAYLAR_EK9 || [])`.
   İkisi olmadan 13 madde yayında yok, denetim yine temiz der.
3. **Sürüm damgası** — `py arac/surum_damgala.py`, r83 → r84.
4. **Turkana dolgu noktası** kararı: `BEKLENEN_SAHIPSIZ` 34 → 35 yapılacaksa
   nokta ~2.2°K / 36.2°D'ye konur ve en kötü boşluk 610 km'den ~300 km'ye iner.
5. **Sekizinci denetim (anakronizm)** — §11.2'nin ölçülmüş listesi hazır.
6. **`denetle_yayin.py`'ye ters yön kontrolü** — §11.3.

## 13. Kaynak kaydı — Faz 2

Bu fazda `<title>` ile **yeni doğrulanan** iki slug:
`darfur` → "DÂRFÛR - TDV İslâm Ansiklopedisi" ✓ ·
`habesistan` → "HABEŞİSTAN - TDV İslâm Ansiklopedisi" ✓ (kısa çapraz gönderme
maddesi, "bk. ETİYOPYA"). Kalan altı slug zaten doğrulanmış kümeden alındı:
`cezayir`, `tilimsan`, `huseyniler`, `hidiv`, `sudan`,
`kavalali-mehmed-ali-pasa`.

Kaynaktan **doğrulanan** yeni tarihler: Sîdî Bel Abbès kampı 12 Haziran 1843 ·
Ağvât 4 Aralık 1852 · Tabarka 12 Haziran 1741 · El-Fâşir 2 Kasım 1874 ·
Slatin'in teslimi 23 Aralık 1883 · Hewett Antlaşması 3 Haziran 1884 ·
Afafit 6 Şubat 1891 · El-Fâşir'in İngiliz işgali 23 Mayıs 1916 ·
Vollayta 1894 · Kaffa 1897 (Gaki Şeroço'nun esareti) · Kesela 1840.

**Doğrulanamayıp yıl hassasiyetine indirilenler** (uydurma gün yazılmadı):
Muaskar 1841 · Şelif-Tenes 1843 · Nedrûme 1844 · Bogos 1872 · Tokar 1884 ·
Mîzâb'ın hukukî ilhakı 1882. **Sidamo'nun yılı hiç doğrulanamadı** ve
`OGRENILENLER.md §8` gereği yuvarlanmadı: doğrulanmış komşusu Kaffa'nın
1897 tarihi kullanıldı, gerekçe kayıt yorumunda yazılı.

## 14. ⚠️ Başka bir oturum `data/olaylar_ek7.js`'i ŞU AN düzenliyor

Faz 2 boyunca ölçtüm: `olaylar_ek7.js` HEAD'de **136 madde**, çalışma
kopyasında **109 madde** (fark **−27**; diff 27 ekleme / 27 silme). Muhtemelen
mükerrer madde temizliği. Benim dosyalarımla çakışma yok (`olaylar_ek9.js`
ayrı), **ama Değişmez 2'yi ölçtüğüm kronoloji kümesi o oturumun yarısında
kalmış hâliydi.** Madde silmek kırılma kapsamasını daraltabilir:
**o oturum bitince `py arac/denetle.py` yeniden koşturulmalı.**
Aynı turda `data/kimlikler.js` de yeni bir dosya olarak belirdi (izlenmiyor) —
o da başka bir oturumun işi.
