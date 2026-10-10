# KASA-KUR-ANADOLU-48-1010 — kalan 48 etkili `kur:`'suz Anadolu noktasının tasdik sınıfı

Görev: YILDIRIM BAYEZIT (KUR-ANADOLU kararı (c)) · Araştırmacı: KASA · `data/` DONUK.
Kutu (HÜKÜM (a)): TR-Asya ∩ `motor_kara`, Trakya hariç · 31.090 hücre · R=6371,0088.
Evren: MÖ 3000 kesitinde (motorun bugünkü hâli) p95'i > 0 değiştiren **68** kur:'suz nokta; ilk 20
KASA-KUR-ANADOLU-1010'da sınıflandı (A 0 · B 6 · C 6 · D 5 · bulunamadı 3); bu tur kalan **48**.
Şema: A (≤MÖ 3000) · A' (3. binyıl) · B (2. binyıl) · C (1. binyıl) · D (yalnız MS) · bulunamadı.
§6.2: ÖNCE NESNEYİ SOR — Pleiades eşleşmesi >3 km ise ayrı nesne şüphesi; "MÖ iskân" cümlesi
HANGİ höyüğü tarihliyor (Kayseri/Kültepe dersi).
Kabul edilen (HÜKÜM (d)): D sınıfı noktalar `kur:` = en erken tasdik ⇒ MÖ'de sahnede DEĞİL.

## 0. ÖNGÖRÜ (ölçümden ÖNCE, 2026-10-10)
**48'in sınıf dağılımı:** A **2 ± 2** · A' **1 ± 1** · B **10 ± 4** · C **17 ± 5** · D **9 ± 4** ·
bulunamadı **9 ± 4** (küçük kasaba/kale noktaları Pleiades'te 10 km içinde eşleşmez).
§6.2 ayrı-nesne şüphesi (eşleşme 3-10 km): **6 ± 3**.
**Ödendikten sonra MÖ 3000 p95 (TR-Asya):**
- TASDİKLİ (9 MÖ noktası + 68'in A/A' olanları): **450-600 km** — KAPALI kalır.
- TASDİKLİ + etkisiz 147 nokta "var": **110-140 km** — 105'ten yukarı, hâlâ AÇ sınırında.
⇒ **Anadolu MÖ 3000 kutusu kaynakla AÇILMAZ**; açılması 147 etkisiz noktanın varlığına (yine
ölçülmemiş) bağlı kalır. MÖ 1000/500 kesitlerinde C sınıfı devreye girer ⇒ p95 **150-250 km**
(SINIR).

## 1. ÖLÇÜM

Zemin: atlas `origin/main` a42fd6f5 (68 noktanın listesi `top68.json`, KUR-ANADOLU-1010 ile aynı kutu ve
taban). Pleiades: `search_rss` + `places/<id>/json`, en yakın kayıt ≤10 km (adı ve antik adı sorgulandı).
Dönem → yıl eşlemesi Pleiades'in kendi `vocabularies/time-periods` sayfasından alındı (136 etiket, BC/AD
başlangıcı; yalnız MS etiketleri ayrıştırılmadı ⇒ D sayıldı). Sınıf = en erken etiketin başlangıcı
(astronomik): A ≤ -2999 · A' ≤ -2000 · B ≤ -1000 · C ≤ 0 · D > 0.

### 1.0 🔴 Ölçerken çıkan yöntem bulgusu: TAVO etiketleri MODERN şehir adına bağlı
48'in **bütün A/A'/B etiketleri** (Konya MÖ 9000 · Mersin MÖ 6000 · Van MÖ 2000 · Bolu · Erzincan ·
Samsun · Burdur · Manisa MÖ 1750) Pleiades kaydının **antik adından değil**, `provenance: TAVO Index` olan
**modern ad** girdisinden geliyor ("Konya" GANE 34400 · "Mersin" GANE 39799 · "Bolu, Boli, Bolou"
GANE 10321 · "Samsun" GANE 52411 · "Burdur" GANE 11014 · "Manisa" GANE 38247 · "Erzincan" GANE 17700 ·
"Van" GANE 64480). Örnekler:
- **Burdur:** Barrington adı [Praetoria] yalnız `late-antique`; MÖ 1750'yi taşıyan tek şey "Burdur" TAVO girdisi.
- **Mersin:** Barrington Zephyrion MÖ 550; MÖ 6000 "Mersin" TAVO girdisinde. Neolitik iskân bilinen
  Yumuktepe höyüğü ayrı bir nesne (⑧, Kayseri/Kültepe dersi). Bu turda ölçülmedi.
- **Konya:** tek istisna. TAVO-dışı bir tanık da var: "OSM location of Alaaddin Tepesi", `2nd-millenium-bce`
  (şehrin içindeki höyük, kayda 0,1 km) ⇒ **B**.

KUR-ANADOLU-1010'daki **Antalya ⑥** uyarısı da ("Attalea middle-bronze-age-anatolia") aynı kaynaktan
geliyor. ⇒ TAVO dizin etiketi, şehrin o dönemde VAR olduğunun cümlesi değil; dönem haritasındaki
adın/yerin dizin kaydı. `kur:` kaynağı yapılmadı (§6.2 "önce nesneyi sor": etiket hangi nesneyi
tarihliyor, bilinmiyor). **İki sayım da aşağıda; karar koordinatörün (İstek a).**

### 1.1 48 noktanın sınıfı
| # | nokta | Δp95 | Pleiades (km) | en erken (tümü) | en erken (TAVO-hariç) | sınıf | not |
|---|---|---|---|---|---|---|---|
| 21 | Konya | 0.754 | Iconium/Claudiconium 648647 (0.1) | MÖ 9000 | MÖ 2000 | **B** | TAVO etiketi A |
| 22 | Niğde | 0.735 | Šinuhtu 344804124 (18.4) | — | — | **bulunamadı** |  |
| 23 | Ceylanpınar | 0.6 | — | — | — | **bulunamadı** |  |
| 24 | Ilgın | 0.594 | *Lageina 609448 (0.6) | MÖ 30 | MÖ 30 | **C** |  |
| 25 | Silifke | 0.526 | Temple of Jupiter (Silifke) 503731094 (7.5) | MÖ 30 | MÖ 30 | **C** | §6.2 7.5 km |
| 26 | Aşkale | 0.497 | Sinara 874698 (0.2) | — | — | **D** |  |
| 27 | Uşak | 0.475 | Unnamed place 612318 (0.8) | MÖ 30 | MÖ 30 | **C** |  |
| 28 | Alanya | 0.447 | Korakesion 638933 (1.9) | MÖ 330 | MÖ 330 | **C** |  |
| 29 | Bolu | 0.41 | Bithynion/Claudiopolis/Hadriana 844879 (2.8) | MÖ 1750 | MÖ 330 | **C** | TAVO etiketi B |
| 30 | Divriği | 0.354 | Odur Kalesi 629047 (12.8) | — | — | **bulunamadı** |  |
| 31 | Balıkesir | 0.354 | Apias Pedion 550439 (5.0) | MÖ 330 | MÖ 330 | **C** | §6.2 5.0 km |
| 32 | Adana | 0.354 | Taşköprü 650062 (2.0) | MÖ 30 | MÖ 30 | **C** |  |
| 33 | Elmalı | 0.338 | Kızılbel 638924 (4.7) | MÖ 550 | MÖ 550 | **C** | §6.2 4.7 km |
| 34 | Tokat | 0.331 | Dazimon 857105 (1.1) | MÖ 330 | MÖ 330 | **C** |  |
| 35 | Karapınar | 0.3 | — | — | — | **bulunamadı** |  |
| 36 | Çölemerik (Hakkâri) | 0.3 | — | — | — | **bulunamadı** |  |
| 37 | Karahisâr-ı Sâhib (Afyon) | 0.257 | Akroenos/[Akroinos] 609295 (0.7) | MÖ 30 | MÖ 30 | **C** |  |
| 38 | Erzincan | 0.247 | Eriza 874467 (0.7) | MÖ 1750 | MÖ 30 | **C** | TAVO etiketi B |
| 39 | Karaman | 0.229 | Laranda 648693 (0.2) | MÖ 550 | MÖ 550 | **C** |  |
| 40 | Siverek | 0.223 | — | — | — | **bulunamadı** |  |
| 41 | Hasankeyf | 0.223 | (Ris)Kepha(s) 874664 (0.2) | — | — | **D** |  |
| 42 | Artvin | 0.223 | — | — | — | **bulunamadı** |  |
| 43 | Safranbolu | 0.211 | — | — | — | **bulunamadı** |  |
| 44 | Simav | 0.179 | Synaos 609537 (0.3) | MÖ 30 | MÖ 30 | **C** |  |
| 45 | Samsun | 0.144 | Amisus/Peiraieus 857024 (0.7) | MÖ 1750 | MÖ 550 | **C** | TAVO etiketi B |
| 46 | Amasya | 0.13 | Pontic rock-cut tombs 825080162 (0.5) | MÖ 330 | MÖ 330 | **C** |  |
| 47 | Fethiye (Makri) | 0.13 | Village of the Kardakoi 652389977 (0.2) | MÖ 330 | MÖ 330 | **C** |  |
| 48 | Van | 0.13 | Thospia/Bouana/‘Ospa’/Ṭušpa 874771 (4.7) | MÖ 2000 | MÖ 900 | **C** | §6.2 4.7 km · TAVO etiketi B |
| 49 | Mudurnu | 0.098 | Modra 845022 (5.9) | MÖ 30 | MÖ 30 | **C** | §6.2 5.9 km |
| 50 | Osmancık | 0.085 | Pimolisa 845039 (0.6) | MÖ 330 | MÖ 330 | **C** |  |
| 51 | Giresun | 0.085 | Kerasous/Pharnakeia 857185 (0.8) | MÖ 550 | MÖ 550 | **C** |  |
| 52 | Erzin | 0.065 | Zimara 629106 (332.9) | — | — | **bulunamadı** |  |
| 53 | Karahisâr-ı Şarkî (Şebinkarahisar) | 0.059 | Koloneia 857194 (2.3) | MÖ 330 | MÖ 330 | **C** |  |
| 54 | Burdur | 0.059 | [Praetoria] 639070 (1.8) | MÖ 1750 | — | **D** | TAVO etiketi B |
| 55 | Eflani | 0.059 | — | — | — | **bulunamadı** |  |
| 56 | Seydişehir | 0.055 | Seydişehir 117729018 (9.9) | — | — | **D** | §6.2 9.9 km |
| 57 | Siirt | 0.055 | Başur Höyük 453123696 (15.2) | — | — | **bulunamadı** |  |
| 58 | Manisa | 0.055 | Magnesia ad Sipylum 550706 (0.4) | MÖ 1750 | MÖ 550 | **C** | TAVO etiketi B |
| 59 | Digor | 0.049 | — | — | — | **bulunamadı** |  |
| 60 | Çayeli (Mapavri) | 0.049 | — | — | — | **bulunamadı** |  |
| 61 | Mersin | 0.045 | Zephyrion/Hadrianopolis 648810 (1.1) | MÖ 6000 | MÖ 550 | **C** | TAVO etiketi A |
| 62 | Gürün | 0.035 | Gauraina 628982 (1.2) | MÖ 1000 | MÖ 1000 | **C** |  |
| 63 | Silopi | 0.035 | — | — | — | **bulunamadı** |  |
| 64 | Ulukışla | 0.011 | — | — | — | **bulunamadı** |  |
| 65 | Alaşehir | 0.011 | Philadelpheia 550822 (0.1) | MÖ 330 | MÖ 330 | **C** |  |
| 66 | Harput (Elazığ) | 0.011 | Harput 217446454 (1.6) | — | — | **D** |  |
| 67 | Doğubayazıt | 0.011 | Teroua? 874759 (7.9) | MÖ 30 | MÖ 30 | **C** | §6.2 7.9 km |
| 68 | Iğdır | 0.011 | Gazandži (Kazana) 904615255 (9.8) | — | — | **D** | §6.2 9.8 km |

```
                 öngörü      TAVO-HARİÇ (benim önerim)   TAVO DAHİL
A                2 ± 2       0   ✓                       2 (Konya, Mersin)
A'               1 ± 1       0   ✓                       0
B               10 ± 4       1   ✗ (Konya)               6
C               17 ± 5      26   ✗ (fazla)               20
D                9 ± 4       6   ✓                       5
bulunamadı       9 ± 4      15   ✗ (fazla; 13 sınırı)    15
§6.2 (3-10 km)   6 ± 3       8   ✓  Silifke 7,5 · Balıkesir 5,0 · Elmalı 4,7 (Kızılbel = mezar, AYRI nesne) ·
                                    Van 4,7 (Ṭušpa = Van Kalesi ↔ modern merkez) · Mudurnu 5,9 · Seydişehir 9,9 ·
                                    Doğubayazıt 7,9 · Iğdır 9,8
```
⚠️ ⑦ **D ≠ "MÖ'de yoktu":** D, Pleiades'in TAVO-dışı kayıtlarında MÖ etiketi olmaması demek.
Örneğin Hasankeyf, Harput ve Aşkale için yalnız late-antique/XVI. yy etiketi var. Bu bir yokluk
kanıtı değil, **tasdik bulunamadı** demek.

### 1.2 🔴 ÖZ-DÜZELTME: 1. turun ilk 20'si de aynı süzgeçten geçince
Aynı TAVO süzgeci KUR-ANADOLU-1010 §1.1'e uygulanınca **1. turun bütün B'leri düşüyor**:
```
Ankara      B → C   (MÖ 1200 TAVO → MÖ 330)
Kayseri     B → C   (MÖ 1200 → MÖ 750)        — ⑧ uyarısı zaten vardı
Sivas       B → C   (MÖ 1750 → MÖ 750)
Sinop       B → C   (MÖ 1750 → MÖ 750)
Antalya     B → C   (MÖ 1750 → MÖ 330)        — ⑥ uyarısı zaten vardı
Erzurum     B → D   (MÖ 1200 → yalnız MS)
Bitlis      C → D   (MÖ 140 → yalnız MS)
Diyarbakır  C → D   (Achaemenid TAVO → yalnız MS)  ⚠️ ⑦: Amida/Amedi Asur kaynaklarında bilinir; Pleiades-dışı tanık gerekir
1. tur: B 6 · C 6 · D 5 · bul. 3   →   B 0 · C 10 · D 7 · bul. 3
```
⇒ **68 noktanın tamamı (TAVO-hariç): A 0 · A' 0 · B 1 · C 36 · D 13 · bulunamadı 18.**
MÖ 2. binyılda sahnede kalabilen kur:'suz Anadolu şehri: **yalnız Konya** (Alaaddin Tepesi).

### 1.3 Borç ödendikten sonra Anadolu p95'i (TR-Asya, 31.090 hücre)
TASDİKLİ = 9 kaynaklı MÖ noktası (KASA-NOKTA-ANADOLU-MO §1.1 pencereleri, `t` dışlayıcı) + 68'in sınıfı
(sınıfın başlangıç yılından itibaren sahnede). "+147" = etkisiz 147 kur:'suz nokta da "var" sayılırsa.
1. turun TASDİKLİ satırları bu yöntemle birebir yeniden üretildi (MÖ 3000 n=5, p95 620,2).
```
                    TAVO-HARİÇ, §6.2 HARİÇ            TAVO-HARİÇ, §6.2 DAHİL      TAVO DAHİL
kesit      n   p95 / azamî          +147        n   p95 / azamî     +147     n   p95 / azamî        +147
MÖ 3000    5   620,2 / 756,7 KAPALI 135,7 AÇ    5   620,2 KAPALI    135,7    7   483,8 / 600,5 KAP  129,6 AÇ
MÖ 2000    9   483,8 / 600,5 KAPALI 120,4 AÇ    9   483,8 KAPALI    120,4   11   425,8 KAPALI       118,4 AÇ
MÖ 1500   10   483,8 / 600,5 KAPALI 120,3 AÇ   10   483,8 KAPALI    120,3   20   207,9 / 343,3 SINIR 115,5 AÇ
MÖ 1000    7   483,8 / 600,5 KAPALI 129,6 AÇ    7   483,8 KAPALI    129,6   20   186,6 / 261,8 SINIR 104,5 AÇ
MÖ  500   13   438,8 / 601,8 KAPALI 132,7 AÇ   16   257,8 / 347,9 SINIR 131,1   23 170,4 / 235,8 SINIR 103,8 AÇ
MOTOR (bugün, 215 kur:'suz hepsi sahnede): p95 70,9 · azamî 110,1
```
🔴 **Sonuç:**
- **Kaynakla (TAVO-hariç) Anadolu bütün MÖ kesitlerinde KAPALI.** MÖ 500'de bile 438,8 km; 1. binyılın
  C noktaları çoğunlukla MÖ 330 / MÖ 30 başlangıçlı (Helenistik/Roma), MÖ 500'e yetişmiyor.
- Kutuyu AÇAN tek şey **147 etkisiz noktanın ölçülmemiş varlığı**: hepsi "var" sayılırsa her kesitte
  120-136 km AÇ.
- TAVO dahil edilirse MÖ 1500-500 SINIR'a iniyor. **TAVO kararı kapıyı KAPALI ↔ SINIR arasında oynatıyor**,
  AÇ'a getirmiyor.

## 2. ÖNGÖRÜ ↔ ÖLÇÜM
| öngörü | ölçüm (TAVO-hariç) | |
|---|---|---|
| TASDİKLİ MÖ 3000 p95 450-600 | 620,2 (TAVO dahil 483,8) | ✗ (az farkla üstünde) |
| +147 "var" MÖ 3000 110-140 | 135,7 | ✓ |
| MÖ 1000/500 SINIR 150-250 | 483,8 / 438,8 KAPALI | ✗ — yalnız TAVO dahil tutuyor (186,6 / 170,4) |
| "kaynakla AÇILMAZ" | AÇILMAZ — hiçbir kesitte | ✓ |
| B 10 ± 4 | 1 | ✗ — yanılma kaynağı TAVO etiketleri (1. turda B'yi onlardan saymıştım) |

## 3. ③ İSTİYORUM
a) **TAVO kararı:** Pleiades'teki `TAVO Index` dönem etiketleri `kur:` kaynağı sayılır mı? Önerim:
   **HAYIR**. Etiket antik adda değil modern adda; hangi nesneyi tarihlediği belli değil (Mersin ↔ Yumuktepe,
   Antalya ⑥). Karar 1. turun sınıflarını da değiştiriyor (§1.2).
b) **D 13 nokta** HÜKÜM (d) gereği MÖ'de sahneden çıkıyor (kur: = en erken tasdik). ⑦ Diyarbakır (Amida)
   ve Van (Ṭušpa, ama §6.2 4,7 km) için Pleiades-dışı ikinci tanık aranmalı; ikisi de MÖ 1. binyılda bilinen yerler.
c) **Kapı cümlesi güncellemesi** (MIMARI §5.1b): "Anadolu MÖ kutusu kaynakla hiçbir kesitte açılmaz
   (TAVO-hariç p95 439-620 km); bugünkü 70,9 km yalnız kur: yokluğunun ürünü; açılma 147 etkisiz noktanın
   varlığına bağlı."
d) **Sonraki ölçüm:** 147 etkisiz noktanın sınıfı. Kutuyu açık tutan onlar; aynı süzgeçten geçerlerse
   (tahminim çoğu C/D/bulunamadı) MÖ Anadolu'da kapı kesin KAPALI kalır.
