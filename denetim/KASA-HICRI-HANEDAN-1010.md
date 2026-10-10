# KASA-HICRI-HANEDAN-1010 — hicrî tuzak, hânedan-ana maddeleri (madde başına)

Görev: YILDIRIM BAYEZIT (ICINDE (d) · PROVENANS (c): sıranın ikincisi) · Araştırmacı: KASA · salt okunur.
**Maddeler:** TDV `osmanlilar` · `selcuklular` · `abbasiler` · `fatimiler`. Ölü slug ⇒ ajax araması.
Yöntem (HICRI-MADDE ile aynı, iki ekle):
- H/M çiftleri cümle cümle. Künyeye bağlama: künye adı kökü + çiftin miladî yılı = künyenin f/t yılı.
- Kesişim kuralı (hicrî ∩ miladî yıl ∩ miladî ay; öneri = ilk gün).
- **Ek 1 (SINIR dersi):** öneri yazılmadan önce künyenin ilgili BÜTÜN maddelerinde gün aranır. Ardıl/öncül ucuyla
  çakışma kontrolü yapılır.
- **Ek 2 (ICINDE (a) kuralı):** polity'nin kendi ucu ⇒ kendi maddesi esas. Bu dört madde KOMŞU polity'nin ucu için
  dar kapsamlı DEĞİL; komşu uç DIŞINDA çıkarsa o polity'nin kendi maddesi çekilip bakılır.
- Elle sınıflama: YENİ-GERÇEK · ÖNCEKİ TUR TEKRARI · BAŞKA OLAY ⑧ · MADDE ÇELİŞKİSİ ⑥ (önce yapısal sınır kontrolü).
- ÖLÇÜLEMEDİ ayrı kova; payda yalnız ölçülenler.

## 0. ÖNGÖRÜ (ölçümden ÖNCE, 2026-10-10) — kendi aralığım
**Desen:**
- ① Yeni gerçek dış uçların hepsi `-01-01` (%95).
- ② Yeni gerçek dış uçlar ağırlıkla bu dört hânedanın **kollarında ve tâbilerinde** (Anadolu/Kirman/Irak
  Selçukluları, beylikler, emîrlikler), ana künyelerde değil. Ana künyeler önceki turlarda zaten gün düzeyine
  getirilmiş (%75).
- ③ `osmanlilar` en çok çifti verir ama künyelere en az bağlanır. Osmanlı dönemi künyelerinin çoğu miladî gün
  taşıyor (%70).
- ④ En az 1 "BAŞKA OLAY ⑧" ve en az 1 yapısal ±1 çıkar (%85).
**Büyüklük:**
- H/M çifti **600 ± 400** · bağlanan uç **60 ± 40** · bunlardan önceki turlarda OLMAYAN **25 ± 20**.
- Yeni gerçek DIŞINDA **6 ± 6** ⇒ 78 → **84 ± 6**.
- Ardıl eşli yeni dış uç **2 ± 2**.

## 1. ÖLÇÜM

**Maddeler** (dördü canlı): `osmanlilar` 685 KB · `selcuklular` 273 KB · `abbasiler` 150 KB · `fatimiler` 88 KB.
H/M çifti: osmanlilar **52** · selcuklular **262** · abbasiler **73** · fatimiler **88** = **475**.
Çıktı: `denetim/KASA-HICRI-HANEDAN-1010.csv` (20 satır).
```
bağlanan uç            17   (önceki turlarda olmayan 5: tunus-ocagi f · selcuklu f · hafsi t · danismendli t · pervane f)
ham hüküm              İÇİNDE 12 satır · DIŞINDA 8 satır
```
**DIŞINDA 8 — elle:**
| uç | ifade (madde) | sınıf | sonuç |
|---|---|---|---|
| kirman-selcuklu f · t, suriye-selcuklu t, fatimi f (4 satır, kirman f iki ifade) | 440/1048 · 583/1187 · 511/1117 · 297 (909) | ÖNCEKİ TUR TEKRARI | aynı hüküm ✓ |
| irak-selcuklu f 1118-05-06 | hükümdar listesi "Mahmud 511 (1118)" | ⑧ liste yılı ↔ künyenin GÜNÜ ("13 Muharrem 512 / 6 Mayıs 1118"); gün ezer | ✅ İÇİNDE kalır |
| selcuklu f 1075-01-01 (Anadolu Selçuklu) | `fatimiler` "…Suriye bölgesindeki yerlerini kaybettiler ve buralar 468'de (1075) Selçuklular'ın eline geçti" | ⑧ **BAŞKA OLAY** (Suriye'nin el değiştirmesi ≠ Anadolu Selçuklu'nun kuruluşu) | kendi maddesi (`selcuklular`) "İznik'i başşehir yaparak Anadolu Selçuklu Devleti'ni kurdu (1075-1080)" — yalnız miladî ⇒ **ÖLÇÜLEMEDİ** (hicrî yok); `turkiye-selcuklulari` taslak |
| **tunus-ocagi f 1574-01-01** | `osmanlilar` "Osmanlılar Tunus'u yeniden fethetti (982/1574)" | **YENİ-GERÇEK** | SINIR dersi uygulandı: önce künyenin kendi maddesinde (`tunus`, künyenin `kaynak`ı) gün arandı ⇒ "…donanma altı günlük bir muhasaranın ardından **12 Eylül 1574'te** Tunus'u geri aldı." ⇒ öneri **1574-09-12** (gün; formülün 1574-04-23'ü UYGULANMADI) |
**Zincir / çakışma kontrolü (SINIR (ii)):**
- tunus-ocagi f'nin öncülü `hafsi` t = **1574-09-13** ⇒ 1574-09-12 önerisi ile **1 gün ÇAKIŞMA**.
- `hafsi` t'nin kronoloji satırı ("Sinan Paşa Tunus'u kesin olarak fethetti…") **kaynak alanı TAŞIMIYOR**; aynı olay
  için TDV `tunus` 12 Eylül diyor.
- ⇒ İki uç AYNI olayın uçları ⇒ **ikisi BİRLİKTE 1574-09-12** (hafsi t 09-13 → 09-12). Çakışma kaynaksız günden
  doğuyordu.
- ⚠️ ⑥ 13 Eylül başka bir kaynakta kalenin (Halkulvâdî/iç kale) teslim günü olabilir. Atlasta kaynağı yok, beyan.

### 1.1 Sayılar
```
yeni gerçek DIŞINDA (hicrî tuzak)        1   tunus-ocagi f (1574-01-01 → 1574-09-12)
eşin düzeltmesi (kaynaksız gün)          1   hafsi t (1574-09-13 → 1574-09-12) — hicrî tuzak DEĞİL, çakışma kontrolünden
BAŞKA OLAY ⑧                             2   selcuklu f (+ ölçülemedi) · irak-selcuklu f (liste ↔ gün)
yeni İÇİNDE                              3   hafsi t (982/1574 yıl düzeyinde; gün düzeyinde yukarıda düzeltildi) ·
                                             danismendli t "574'te (1178)" · pervane f "675/1277"
⇒ gece toplamı 78 → 79 dış uç (hicrî tuzak), hepsi -01-01
```
**78 → 79, TABAN, iki adlı sebeple:** 789 künye ölçülemedi · bu dört madde dışındaki hânedan maddeleri taranmadı.

### 1.2 Öngörü sınavı
```
DESEN ① yeni gerçek DIŞINDA'lar -01-01                %95   1/1 ✓
DESEN ② yeni gerçekler kollarda/tâbilerde              %75   ✓ (Tunus Ocağı = Osmanlı tâbi ocağı)
DESEN ③ osmanlilar çok çift, az bağlanma               %70   ✗ yarı: en AZ çift (52), bağlanma 3 satır — "çok çift" tutmadı
DESEN ④ ≥1 BAŞKA OLAY ve ≥1 yapısal ±1                 %85   ⑧ 2 ✓ · yapısal ±1: irak-selcuklu liste 511 ↔ gün 512 (sınır
                                                              1118-04-24) ✓ zayıf
H/M çifti 600 ± 400                                          475 ✓
bağlanan uç 60 ± 40                                          17 ✗ (altında)
önceki turda olmayan 25 ± 20                                 5 ✓ (alt uç)
yeni gerçek DIŞINDA 6 ± 6 ⇒ 84 ± 6                           1 ⇒ 79 ✓ (alt uç)
ardıl eşli yeni dış uç 2 ± 2                                 1 (tunus ↔ hafsi) ✓
```
Yanılma: hânedan-ana maddeleri künye uçlarına az bağlanıyor. Bu maddeler kendi kollarının uçlarını çoğunlukla
"(1075-1080)" gibi miladî aralıklarla ya da hükümdar listesinde yıl düzeyinde veriyor; H/M cümleleri iç olaylarda
(savaş, fetih) yoğun. ⇒ Kalan hânedan maddelerinin verimi düşük olur. Önerim: tarama bu noktada kapansın.

## 2. ③ İSTİYORUM
a) **tunus-ocagi f + hafsi t BİRLİKTE → 1574-09-12** (TDV `tunus`, gün; hafsi'nin 09-13'ü kaynaksız).
b) Gece toplamı **79** dış uç (hicrî tuzak) + 1 kaynaksız gün düzeltmesi (hafsi t).
c) **Taramanın kapanması önerisi:**
   - Dört turda (künye notu → ülke maddeleri → provenans → hânedan maddeleri) yeni bulgu 70 → 6 → 0 → 1'e indi.
   - Kalan risk: notunda hicrî olmayan 789 künye. Ölçülemedi; madde başına yöntem de onlara az ulaşıyor.
   - §4 sözleşmesi (ileriye dönük) zaten uygulanacak.
   - ⇒ "78-79 taban" cümlesiyle kapatıp Sümer/Sâsânî cephesine ya da başka bir kaleme dönmeyi öneriyorum. Karar senin.
