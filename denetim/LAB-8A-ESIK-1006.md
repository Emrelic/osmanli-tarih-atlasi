# LAB-8A-ESIK-1006 — eşik eğrisi, ve "ham parça"nın da ETİKETE BAĞLI olduğu

**Tek satır öneri:** (A)'yı **parça alanı** (km², etiketten bağımsız) üzerine kur. Eşiğe duyarlılığı 1 → 20 km² aralığında **%0,064** (1 204 km² / 1,895 milyon). 5 → 10 geçişi **348 km²** (%0,018). **Ama "ham parça = 1637" bir rapor kolonu olarak bile etikete duyarsız DEĞİL:** o sayı parça × etiket girdisidir ve etiket çıkışı senaryolarının **822/1509**'unda oynar. Etiketten bağımsız sayı **geometrik parça sayısı: 1101**.

**Gövde:** `2fe8ada77`, site damgalı geometri (`0ef2d3e2`). Araç: scratchpad klonunda `denetle.py` kopyası; `D8_ALAN_8A` **yalnız bellekte** değiştirildi, kopya silindi, `arac/` dokunulmadı. 5 km² satırı tam denetimle aynı: anahtar 1509, girdi 1637. Liste: `LAB-8A-ESIK-1006.tsv`.

## 🔴 Önce düzeltme: "ham parça" etikete duyarsız DEĞİL

Koordinatörün tasarımındaki `8a-ham = ham parça sayısı (etikete duyarsız)` satırının dayanağı benim `LAB-8A-ALAN`daki "ham parça 1637" sayımdı. Kodu yeniden okudum. `R["a"]` satırı **her parça × her etiket** (≥ eşik pay alan) için bir kayıttır; Lugos'un bir parçası iki etikete bölünse 2 satır olur.
- **Dinamik kanıt:** grup düzeyindeki 1509 etiket-çıkışı senaryosunda girdi sayısının Δ dağılımı −2: 14 · −1: 518 · 0: 687 · +1: 231 · +2: 45 · +3: 14. **822 senaryoda değişiyor.**
- 600e/2fe8'de eşit kalması (1637 = 1637) **tesadüftü**: Lugos'un parçaları her iki gövdede de birer etiket taşıyordu.
- **Etiketten bağımsız iki ölçü** (parçalar etiketlemeden ÖNCE kaydedildi, `Y` yalnız etiket ağacına girer):
  - **geometrik parça sayısı:** 1101 (600e · 99d3 · 2fe8, üçünde de)
  - **parça alanı:** 1 895 364 km² (üçünde de)
- Etiket alanı (bugünkü `km2` toplamı, 1 895 260) etikete bağlı: küçük etiket payları eşik altında düşer (birleşmedeki −88 km² buydu).

## ① Eşik eğrisi (2fe8ada77)

| eşik km² | geometrik parça | parça alanı km² | girdi (parça×etiket) | anahtar (8a) | etiket alanı km² | 1 örnekli parça | 2 örnekli parça |
|---|---|---|---|---|---|---|---|
| 1 | 1131 | 1 895 516 | 1693 | 1554 | 1 895 516 | 32 | 26 |
| 2 | 1127 | 1 895 500 | 1689 | 1552 | 1 895 500 | 28 | 26 |
| 4 | 1107 | 1 895 396 | 1669 | 1536 | 1 895 396 | 14 | 20 |
| **5** | **1101** | **1 895 364** | **1637** | **1509** | **1 895 260** | **10** | 18 |
| 8 | 1080 | 1 895 212 | 1626 | 1502 | 1 895 148 | 0 | 13 |
| 10 | 1060 | 1 895 016 | 1592 | 1479 | 1 894 840 | 0 | 2 |
| 20 | 1021 | 1 894 312 | 1515 | 1418 | 1 893 552 | 0 | 0 |

- **5 km² civarı:** etiket payları 4 km²'lik basamaklarla gelir (2 km ızgara). 5 km²'de 4 km²'lik pay **0** (eşik onu zaten düşürür); 8 km²'lik pay 30, 12 km²'lik 29.
- **Eşiğin iki yüzü uyuşmuyor:** parça eşiği gerçek alana (`d.area`) bakar, etiket eşiği örnek sayısına (4 km²'lik basamak). 5 km²'de **10 parça** parça testini geçiyor ama tek örnekli (4 km²). Hiçbir etiketi 5'i geçemez ⇒ **parça var, birim üretemez**, raporda görünmez. 8 km²'de bu sınıf 0.
- **5 → 10:** geometrik parça −41 · parça alanı −348 km² · anahtar −30.

## ② Bulamadım / ölçmediğim

- Eşiğe göre **etiket-senaryosu kararsızlığı** (BİRLEŞME senaryolarını her eşikte yeniden koşmak). Parça alanı ve geometrik parça tanım gereği etiketten bağımsız, onlar için gerek yok. Anahtar ve girdi için ölçülmedi.
- Izgara çözünürlüğünün (2 km) payı: parça alanı ızgara sayımıdır, `d.area` değil. Gerçek alanla farkı ölçülmedi.

## ③ Öneri (yazmadım)

1. **(A) = parça alanı (km²).** Etiketten bağımsız (üç gövdede birebir, senaryolardan bağımsız), eşiğe neredeyse duyarsız (%0,06). Senin son sorunun cevabı: **tamamen bağımsız değil ama ihmal edilebilir**; düşen alan tanım gereği en küçük parçaların alanı.
2. **İkinci kolon (rapor ya da ikinci tavan) = geometrik parça sayısı, `R["a"]` girdisi DEĞİL.** Girdi sayısı etikete bağlı; tasarımda "ham" adı onu çağrıştırıyor.
3. **Eşik:** alan için fark etmez. Parça sayısı da kapıda kalacaksa **8 km²** öneririm. 2 km ızgaranın 2 örneğine denk düşer, "parça var ama birim üretemez" sınıfını (bugün 10) sıfırlar. Parça sayısını 21 düşürür, alanı 152 km².
