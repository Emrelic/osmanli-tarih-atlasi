# Oturum 14 — Osmanlı Afrikası yerleşim katmanı · İLERLEME

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
