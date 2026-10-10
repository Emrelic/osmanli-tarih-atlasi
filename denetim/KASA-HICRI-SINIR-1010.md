# KASA-HICRI-SINIR-1010 — dört "madde çelişkisi" hicrî yıl sınırı mı? + Memlük f ↔ Eyyûbî(Mısır) t

Görev: YILDIRIM BAYEZIT (HICRI-MADDE kararı (b)(c)) · Araştırmacı: KASA · salt okunur, `data/` DONUK.
İki iş:
- **(c)** Dört ±1 yıl ayrışması: muvahhidler t 667↔668 · ziyadi f 202↔203 · hamdani-yemen f 491↔492 · t 569↔570.
  Her biri için:
  - ① iki hicrî yılın miladî aralığı
  - ② olayın kaynaklı miladî tarihi/ayı
  - ③ sınıra uzaklık (gün)
  - ⇒ SINIRA YAKIN (±~60 gün): çelişki değil, §4 kesişimi · UZAK: gerçek çelişki, dar kapsamlı madde esas.
- **(b)** Memlük f (öneri 1250-04-05) ↔ Eyyûbî(Mısır) t: iki yön ölçülür. Boşluk / çakışma / ikisi de artefakt.

## 0. ÖNGÖRÜ (ölçümden ÖNCE, 2026-10-10)
**(c)**
- Dördünün dördünde de kaynağın miladî yılı iki hicrî yıla YAYILIYOR (H/M yazımının yapısı gereği) ⇒ "çelişki" en
  az kısmen yapısal (%85).
- Olayın gün/ayı kaynakta bulunabilen: **2 ± 2** / 4.
- Bulunanlarda olay sınıra **yakın** (±60 gün): **%60**. ⇒ Beklenen: 4'ten **2 ± 2** "çelişki değil, sözleşme", geri
  kalanı ya gerçek çelişki ya ölçülemedi.
**(b)**
- Eyyûbî(Mısır) t yazılı değeri **gün taşıyor** (1250-05-02 civarı; Turanşah'ın öldürülmesi) %60. Memlük f
  1250-04-05 ⇒ **ÇAKIŞMA** (Memlük Eyyûbî'den önce başlıyor) %45 · boşluk %25 · ikisi de artefakt %30.
- Desen: kaynaklar Memlük başlangıcını Turanşah'ın öldürülmesine (Muharrem 648 sonu) bağlar ⇒ doğru ortak gün tek
  olay ⇒ iki ucun AYNI güne çekilmesi gerekir.

## 1. ÖLÇÜM

Hânedan maddeleri çekildi: `muvahhidler` · `meriniler` · `ziyadiler` · `hemdaniler` (`hemdaniler--yemen` 302) ·
`memlukler` · `eyyubiler`. Künye notları main 5ba57827'den okundu.

### 1.1 (c) Dört "±1 yıl" — sınır hesabı ve sınıf
**Yapısal bulgu (dördünde de):** kaynağın verdiği miladî yıl, iki hicrî yılın SINIRINI içeriyor ⇒ iki hicrî yılın
ikisi de o miladî yılla kesişiyor. ±1 yıl ayrışmasının mekanizması bu.
```
çift      sınır (ikinci hicrî yılın ilk günü)   M ∩ H1                  M ∩ H2
667/668   1269-08-31                            1269-01-01…08-30        1269-08-31…12-31
202/203   0818-07-09                            0818-01-01…07-08        0818-07-09…12-31
491/492   1098-11-28                            1098-01-01…11-27        1098-11-28…12-31
569/570   1174-08-02                            1174-01-01…08-01        1174-08-02…12-31
```
**Olayın miladî gün/ayı:** dördünün hiçbirinde kaynakta YOK ⇒ "sınıra kaç gün" sorusu **ÖLÇÜLEMEDİ** (4/4). Ama
sınıflama başka yoldan kapandı:
| vaka | ne çıktı | sınıf | uç için sonuç |
|---|---|---|---|
| **ziyadi f** | `ziyadiler`: "İbn Ziyâd … 202 (818) yılında isyanı bastırmak üzere … bölgeye gönderildi". `yemen`'in "203/818"i ise "Hamdeveyh … İbrâhim'i yenerek bağımsızlığını ilân etti" — **başka kişi, başka olay** | **⑧ BAŞKA OLAY — çelişki DEĞİL** | f 0818-01-01 ∈ 202 ∩ 818 ✓ değişiklik yok |
| **hamdani-yemen t** | `hemdaniler` (hânedanın kendi maddesi): "569'da (1174) … Turan Şah San'a'yı ele geçirerek Hemdânî saltanatına son verdi" ↔ `yemen` "570/1174". Aynı olay | **GERÇEK ±1, yapısal sınır** ⇒ dar kapsam: `hemdaniler` 569 | t 1174-01-01 ∈ 569 ∩ 1174 ✓ değişiklik yok; 570 `ic_not`'ta zaten beyanlı |
| **hamdani-yemen f** | Künyenin olayı Hâtim'in sultanlığı "(1098)", miladî. ±1, ÖNCEKİ olay olan Süleyhî Sebe'nin ölümünde: `hemdaniler` + `yemen` 492 ↔ `suleyhiler` 491. `hemdaniler`: "Ahmed 492'de (1098) ölünce Hemdânîler'den Hâtim b. …" | **GERÇEK ±1, yapısal sınır** ⇒ Hemdânî ucu için dar kapsamlı madde `hemdaniler` (komşu Süleyhî maddesi değil) ⇒ **492** | 🔴 1. tur bu ucu "İÇİNDE" saymıştı; notun içindeki "suleyhiler 491" ifadesine bağlanmıştı (gevşek eşleşme). Doğru okuma ⇒ f ∈ 492 ∩ 1098 = **1098-11-28…12-31** ⇒ 1098-01-01 **DIŞINDA** ⇒ öneri **1098-11-28** |
| **muvahhidler t** | Künye notu zaten beyan ediyor: `muvahhidler` hem "(667/1269)" hem "668'de (1269)" diyor, `meriniler` "(668/1270)"; ayrıca `meriniler` "666'da (1268) … Merakeş civarında mağlûp ederek şehre girdi" | **kaynak KENDİYLE çelişiyor** (dar kapsamlı madde iki yıl veriyor) ⇒ dar kapsam kuralı ÇÖZEMEZ | **ÖLÇÜLEMEDİ**; mevcut 1269-01-01 (667 ∩ 1269) korunur, üç yıl `ic_not`'ta |
**Sonuç:** dört "madde çelişkisi"nin
- 1'i hiç çelişki değil (⑧ başka olay);
- 2'si yapısal hicrî sınır, dar kapsamlı maddeyle çözüldü. Biri yeni bir dış uç ürettirdi: hamdani-yemen f
  → 1098-11-28; 1. turun İÇİNDE hükmü düzeltildi.
- 1'i kaynak-içi çelişki, ölçülemedi.
Sınıra uzaklık dördünde de ölçülemedi: olayların günü kaynakta yok.
⚠️ Öz-düzeltme (1. tur): eşleştiricim aynı yılı taşıyan BİRDEN ÇOK hicrî ifade bulduğunda "biri içeriyorsa İÇİNDE"
diyordu. hamdani-yemen f'de içeren ifade KOMŞU hânedanın maddesinden alıntıydı. ⇒ 1. turun 75 İÇİNDE'sinde aynı
gevşeklik başka vakalar da saklıyor olabilir. Hedefli kontrol: birden çok aday ifadesi olan İÇİNDE'ler.

### 1.2 (b) Memlük f ↔ Eyyûbî(Mısır) t — iki yön ölçüldü
```
eyyubi t   1250-04-30  (künyede yazılı; gün)  eyyubiler: "30 Nisan 1250 tarihinde sultanı öldürdüler"
memluk f   1250-01-01  (yazılı)
  HICRI-MADDE önerim  1250-04-05  ("648'de (1250) kurulan" ⇒ 648'in ilk günü)  ⇒ 🔴 ÇAKIŞMA: Eyyûbî t'den 25 gün ÖNCE
  KAYNAĞIN GÜNÜ       1250-07-03  memlukler: "Memlükler Devleti resmen kurulmuş oldu (1 Rebîülâhir 648 / 3 Temmuz 1250)"
                                  eyyubiler: "Böylece 3 Temmuz 1250 tarihinde Mısır'da Memlükler devri resmen başlamış oldu."
                                  1 Rebîülâhir 648 = 1250-07-03 (tabular, Jülyen) ✓ birebir
```
⇒ **HICRI-MADDE'deki memluk f önerim (1250-04-05) GERİ ÇEKİLDİ.** Gün iki maddede var, gün yılı ezer (§4).
- Doğru memluk f **1250-07-03**.
- Eyyûbî t 1250-04-30 ↔ Memlük f 1250-07-03 ⇒ **64 günlük boşluk**, iki uç da kaynaklı ve iki AYRI olay
  (Turanşah'ın öldürülmesi ↔ Aybek'in tahta çıkışı) ⇒ Rüstemî↔Fâtımî hükmü: **`__BOSLUK__` (N)**, uçlar
  birbirine çekilmez.
- ⚠️ ⑥ aradaki dönem: `memlukler` "ŞECERÜDDÜR Bazı tarihçilere göre Memlükler'in ilk sultanı olan hanım (1250)" ⇒
  bir okul bu 64 günü Memlük sayar. Beyan, künye değişikliği değil.
- Senin üç şıkkından ikisi birden çıktı:
  - Önerim ÇAKIŞMA üretiyordu (üçüncü şık, yeni sınıf). Formülün "ilk gün"ü, başka maddede gün varken uygulandığı
    için.
  - Kaynağın günüyle sonuç BOŞLUK (ikinci şık).
  - Ders: **§4 kesişim formülü, künyenin ilgili bütün maddelerinde gün aranmadan uygulanmamalı.** "Gün yoksa"
    koşulu madde başına değil, KÜNYE başına sınanır.

### 1.3 Öngörü sınavı
```
(c) ±1'in yapısal olması (M iki H'yi kesiyor)      %85        4/4 ✓
    olay gün/ayı bulunan                           2 ± 2      0 ✓ (alt uç)
    "çelişki değil" sayısı                         2 ± 2      1 (⑧) + 2 yapısal-çözüldü ✓
(b) Eyyûbî t gün taşıyor                           %60        ✓ (04-30)
    ÇAKIŞMA                                        %45        önerimle ✓ — kaynağın günüyle ✗ (boşluk)
    desen "tek olay, aynı gün"                     evet       ✗ — İKİ olay, 64 gün
```

## 2. ③ İSTİYORUM
a) **memluk f → 1250-07-03** (HICRI-MADDE'deki 1250-04-05 geri çekildi). 1250-04-30…07-03 **`__BOSLUK__` (N)**,
   Şecerüddür okulu `ic_not`'ta.
b) **hamdani-yemen f → 1098-11-28** (dar kapsam `hemdaniler` 492). 1. turun İÇİNDE hükmü düzeltildi.
c) **ziyadi f, hamdani-yemen t:** değişiklik yok. **muvahhidler t:** ölçülemedi, mevcut korunur.
d) **§4'e iki ek önerisi:**
   - (i) "Gün yoksa" koşulu künyenin ilgili TÜM maddelerinde sınanır. Bir maddede gün varsa formül uygulanmaz.
   - (ii) Kesişim formülü uygulandıktan sonra ardılın/öncülün ucuyla **çakışma kontrolü** zorunlu. Formül tek
     başına çakışma üretebiliyor (memluk vakası).
e) **1. tur için hedefli kontrol:** birden çok aday hicrî ifadesi olan İÇİNDE uçlar. Hangi ifadenin O UCU
   tarihlediğine elle bakılacak; hamdani-yemen f gibi gizli DIŞINDA'lar olabilir. Sonra hânedan-ana maddeleri
   turu (d).
