# SUDAN 1820-1821 — kronoloji düzeltme + madde taslağı (UMIT 21 → LAB)

Hazırlayan: UMIT 21 KASIM, 21 Kasım 2026. Dal: `umit-21-sudan-1121`.
Yerleşim değişikliği yazıldı: `data/yerlesimler_afrika.js` (s: funj bitişi + v: başlangıcı) ve
`data/yer_yama_vassal_kid_0906.js` (v: başlangıcı).

| Yer | Eski | Yeni | Gerekçe |
|---|---|---|---|
| Kerma, Debbe, Merevî | Mısır (Kavalalı) `v` f 1821-01-04 | **1820-12-04** | Cebel ed-Dayqa'da Şayqiya'nın kesin yenilgisi (Beška 2019 s.41); bölge çıkarımı BEYANLI |
| Ebû Hamed | 1821-01-04 | **1821-03-05** | Berber'in Mısır'a girişi, Rubâtâb/Hassâniye teslimi (Beška s.43); GÜN TEYİTSİZ |
| Berber (yama dosyası) | 1821-01-04 | **1821-03-05** | afrika.js'te UMIT 19 zaten 03-05 yazmıştı; yama dosyası geride kalmıştı |

## Kaynak (birebir okundu, 21 Kasım 2026)

**Beška, E.**, «Muḥammad ʿAlī's Conquest of Sudan (1820–1824)», *Asian and African Studies* 28/1 (2019), s. 30-46
(https://www.sav.sk/journals/uploads/0521120903_BESKA_final.pdf). Dayandığı: English 1822, Waddington-Hanbury 1822, Robinson 1925, Hill 1959.
- s.39: «Dongola was also taken without violence»; «In June 1820, before the arrival of Ismāʿīl Pasha's expedition, the Mamlūks left Dongola.»
- s.41: «On 4 November 1820, the first major encounter took place at Kūrtī in the western part of Shāyqīya territory»; «A month later on 4 December 1820, a second and decisive battle near Jabal aḍ-Ḍayqa took place.» (Şayqiya Makk Ṣubayr teslim olur; Makk Shāwīsh direnmeye devam eder.)
- s.43: «on 5 March, it arrived at the important trading town of Barbar»; Rubâtâb ve Hassâniye de teslim olur.
- s.44: «On 6 April 1821, ʿĀbidīn Kāshif left the camp in Barbar … to assume the post of governor in the newly established province of Dongola.»

**İkinci kaynak (nitel; Gregoryen gün VERMEZ):** English, *A Narrative of the Expedition to Dongola and Sennaar* (1822; archive.org `anarrativeexped01englgoog`):
Kûrtî savaşı (Dongola'nın dört gün ötesi) sonra Şayqiya vilayetinde dağ eteğindeki ikinci savaş — iki savaş sırasıyla anlatılır, Hicrî tarihli (Zilhadgi/Rebi). Waddington-Hanbury 1822 (`journalavisitto00hanbgoog`): Merawe = «the city of Malek Chowes (Shawish)», Şayqiya başkenti; Korti savaşı anlatısı (s. 90-101). Robinson 1925 ve Hill 1959 OKUNMADI → Dayqa 4 Aralık için TEK AKADEMİK KAYNAK Beška.
⚠️ İç çelişki (beyan): English'in Hicrî günleri (Vâdî Halfa'dan 26 Zilhadgi 1235 ≈ 4 Ekim 1820 + 10 gün) Kûrtî'yi Ekim 1820'ye yaklaştırır; Beška 4 Kasım der. Dayqa için English «Rebi' [I] 1236'nın 1?'inde kampa vardım, savaş birkaç gün önceydi» (≈ Aralık 1820) — Beška'yla uyumlu. Kûrtî günü bu yüzden teyitsiz sayılmalı; Dayqa günü tek kaynak.

## Madde 1 — DÜZELTME: «Dongola alındı» (kronoloji_misir.js:130 ve olaylar_ek4.js:111)

Eski: t 1821-01-04, «Dongola alındı — Kölemen bakiyesi dağıtıldı», gun «Ocak 1821». **Destek YOK**: Memlükler Dongola'yı Haziran 1820'de terk etti (Beška s.39), Ocak 1821'de Kölemen bakiyesi yok.
Yeni: t **1820-11-01** (AY hassasiyeti; gün teyitsiz), gun «Kasım 1820»; Dongola şiddetsiz alındı. b: «Dongola şiddetsiz Mısır ordusuna geçer (Memlükler Haziran 1820'de terk etmişti)»; d: Kölemen bakiyesi cümlesi KALDIRILSIN. kaynak: Beška s.39-41. ic_not: Dongola girişi için kaynakta gün yok; English'in Hicrî günleri Ekim 1820'ye de götürür (Kûrtî'nin 4 Kasım'ı Dongola'dan ≥4 gün sonra) → ay hassasiyeti Ekim-Kasım 1820; TEK AKADEMİK KAYNAK.
Not: t değişince 20 dil çeviri anahtarı da taşınır (LAB).

## Madde 2 — YENİ: Cebel ed-Dayqa (Değişmez 2: Kerma/Debbe/Merevî kırılması 1820-12-04)

- t **1820-12-04**, k «savas», yer_id «Merevî», odak_yer [«Merevî», «Debbe», «Kerma»], gun «4 Aralık 1820»
- b: «Cebel ed-Dayqa Savaşı — Şayqiya konfederasyonu Mısır ordusuna kesin yenilir»
- d: «Muhammed Ali Paşa'nın oğlu İsmâil Paşa'nın ordusu, Kûrtî'deki ilk yenilgiden bir ay sonra Cebel ed-Dayqa yakınında topçusuyla Şayqiya'yı bozdu. Şayqiya reisi Makk Ṣubayr kızının iyi karşılanması üzerine teslim oldu; Makk Şâvîş direndi. Mısır'ın Nil kıvrımındaki hâkimiyeti bundan sonra kalıcılaştı.»
- kaynak: Beška 2019 s.41 (birebir yukarıda). ic_not: TEK AKADEMİK KAYNAK (Beška); English 1822 ve Waddington-Hanbury 1822 iki savaşı sırayla anlatır ama Gregoryen gün vermez (nitel teyit); Robinson 1925/Hill 1959 OKUNMADI. Yer→bölge: Kerma/Debbe/Merevî'nin bu savaşla Mısır'a geçtiği ÇIKARIMDIR (BEYANLI YAKLAŞIKLIK); Merawe Şayqiya reisi Shawish'in başkenti (Waddington-Hanbury, «Merawe—Djebel el Berkel»).
- Takvim: Gregoryen (Beška Batı takvimiyle yazar).

## Madde 3 — kontrol: Berber/Ebû Hamed 1821-03-05

Berber 5 Mart 1821 maddesi LAB'de main'de zaten var (UMIT 19 yerleşim-gün, Berber 1821-03-05). Ebû Hamed'in 1821-03-05 kırılması aynı maddenin ±30 günündedir; yer_id/odak_yer'e «Ebû Hamed» eklenebilir (gün teyitsiz beyanıyla).

## Funj sahipliği (YAZILMADI — borç)

Beška s.37-40: Şayqiya Funj'dan 17. yy sonundan beri bağımsız; Dongola 1811-1820 Memlük devleti. Atlasın 'funj' sahipliği bu dört yer için şüpheli ama sahip değişimi için kaynaklı gün/tanık bulunmadı → s: 'funj' dönemi korundu, `kaynak:`ında ⚠️ beyanı var.
