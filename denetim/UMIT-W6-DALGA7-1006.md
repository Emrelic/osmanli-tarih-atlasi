# UMIT-W6-DALGA7-1006 — B1 × elek: ÖLÇ, sonra B'ye yönel

> 🔴 **KURAL:** `denetim/ARAC-TR1923-YAZ-0914.py` koordinatör kararı olmadan `data/`ya
> koşturulmaz. **ŞARTNAME BEYANI:** eleğin doğruluğu W9 `zincir_kaynagi` beyanlarının
> EKSİKSİZLİĞİNE bağlıdır. Beyansız bir kopya elekten geçer ve zincirleme devralmayı
> sessizce yeniden üretir (dalga 6: Digor vakası).

Görev: UMIT İRTİBAT → UMIT-W6-KAFKAS-1006 (dalga 7). Kilit: `ARAC-TR1923-YAZ-0914.py`.
Ağaç: `C:\atlas-w6b` (ae2e6bbd + dalga 6 değişikliği, commit'siz).
Karar ölçütü (koordinatör, önceden sabit): B ⇔ D1 artışı 0 ∧ D1b artışı 0 ∧ Qaţţīnah
kaybı 0 · A ⇔ B yeni delik açıyor · ARA HÂL ⇔ yalnız Qaţţīnah kirli ⇒ önce elek düzelir.

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (2026-10-05)
- **①** Elek + 45 W9 beyanı: **D1 309 → 309 (+0), D1b 0 → 0.** Sebep: elek komşu
  DEĞİŞTİRİR, zincir SİLMEZ; yeni komşuların hepsi 1923'te sahipli ve uzun zincirli.
  Tek risk: yeni komşunun zincirinde 1281-1923 arası bir delik (beklemiyorum).
- **②** Yeni kaynaklar: **Revan ilk kuşak** (ankrajın kendisi; beyansız ama kaynak).
  **Kars** ve **Doğubayazıt**'tan en az biri **beyansız bir kopya ya da ankraj
  hizalaması** çıkacak (ok110 "her nokta KENDİ BÖLGESİNİN ANKRAJ KAYDINA hizalanıyor"
  yaması bu bölgeye de dokunmuş olabilir). Tahmin: Doğubayazıt şüpheli, Kars ilk kuşak.
- **③** Qaţţīnah, Ceylanpınar beyanlı (ankraj Mardin) olduğu için düşüyor. Bu kusur
  "ele"den değil "ele ve UNUT"tan: kopyayı ele, yerine BEYAN ETTİĞİ KAYNAĞI koy
  (pencere içinde) ⇒ Qaţţīnah Mardin'in zincirini alır, kayıp ≈ 0. Ceylanpınar ile
  Mardin arasında dalga 4'te 250 günlük fark ölçülmüştü ⇒ "kayıp 0" harfiyen değil,
  **250 gün** fark kalır (kaynak doğru olanı). ⇒ **1006b üretilir.**
- **④** Yeni kaynakların uzaklığı bandın **üst yarısında**: 41–73 km (Revan 41,2 ·
  Doğubayazıt 43,4 · Kars 44,4 · Revan 73,3); bant 4,3–133,4 km.

## 1. ÖLÇÜM — özet ve KARAR
| | Öngörü | V0 (1006: ELE) | V1 (1006b: YÖNLENDİR) |
|---|---|---|---|
| ① D1 (309 →) | 309 | **309** (+0, üyelik değişmedi) | **309** (+0) |
| ① D1b (ham 7 →, beyansız 0 →) | 7 / 0 | **7 / 0** | **7 / 0** |
| Qaţţīnah komşu kaybı | V1'de 0 | **KAYIP**: Ceylanpınar düşer, T öncesi Rakka'dan; bugünkü dosyaya karşı **86.070 gün** fark | **0**: Ceylanpınar komşu kalır; T öncesi kökeni Mardin'den; fark **250 gün** |
| Beri / Küçükperveli fark | — | 48.300 / 7.238 gün (Doğubayazıt / Kars'ın bambaşka zinciri) | **275 / 275 gün** (yalnız Revan'ın 1468 düzeltmesi) |
| Norapat / Kliçatak fark | — | 13.224 / 13.224 (Revan) | 13.224 / 13.224 (Revan, aynı) |
| ② yeni kaynakların kökeni | Revan ilk · Doğubayazıt şüpheli | Revan · Kars · Doğubayazıt **üçü de ilk kuşak** (§3) | komşu değişmez |
| ④ uzaklık | 41–73 km | 41,2 · 73,3 · 43,4 · 44,4 km | 22,2 · 37,4 · 17,5 · 30,9 (bugünküyle aynı) |

**KARAR (koordinatörün sabit ölçütüyle):**
- V0 → **ARA HÂL**: D1 ve D1b temiz, ama Qaţţīnah kirli ⇒ "önce elek düzeltilir".
- Düzeltme yapıldı: **V1 = `TR1923-ELEK-1006b.diff`**. V1 ile D1 +0, D1b +0, Qaţţīnah komşu
  kaybı 0 ⇒ **B'nin şartları sağlanır** (kalan 250 gün için §4.3).
- ⚠️ **B koşusu KF-1 kuyruğuna dokunur** (§5): Norapat ve Kliçatak'taki sahte
  `sovyet-rusya` penceresi Revan'ın `transkafkasya` → `ermenistan-dc` zinciriyle yer
  değiştirir. O pencere Emre kararında. ⇒ B, ya KF-1 hükmünden SONRA ya da onunla
  BİRLİKTE koşturulmalı.

## 2. ① D1 / D1b — üyelikle
Yöntem: yeni betik W9 benzetimiyle (45 elle kopya; gerçek kaynak + pencere, dalga 4
§3.2) GEÇİCİ yola koşturuldu. 28 çıktı kaydı bellekte bugünkü verinin yerine kondu.
`denetle.degismez1` / `degismez1b` (aracın KENDİ işlevleri) çağrıldı.
| | D1 | yeni sahipsiz | kalkan | D1b ham | yeni boşluk |
|---|---|---|---|---|---|
| bugün | 309 | — | — | 7 (7/7 beyanlı) | — |
| V0 | 309 | [] | [] | 7 | [] |
| V1 (gerçek betik, 1006b) | 309 | [] | [] | 7 | [] |
V1 gerçek betik çıktısı, ölçümdeki V1 benzetimiyle **zincir düzeyinde birebir** (fark []).

## 3. ② V0'ın yeni kaynakları — köken
Test: (a) kayıt ve dönem metninde kopya/devralma beyanı · (b) 160 km içinde zinciri
BİREBİR aynı kayıt (beyansız kopya avı) · (c) en benzer 4 zincir (benzerlik %, 1281-1923).
| Kaynak | Beyan | Birebir aynı | En benzer | Hüküm |
|---|---|---|---|---|
| **Revan** | yok | yok | Gümrü 99,3 · Eçmiyadzin 99,3 · Şerur 99,0 · Nahçıvan 98,9 | **ilk kuşak**: benzerleri ONUN kopyaları |
| **Kars** | yok (kayıt: "BİRLEŞİM … TDV `kars` gövdesi") | yok | Sarıkamış 99,8 · Ardahan 97,3 | **ilk kuşak**: Sarıkamış ondan "gün komşudan: Kars" alıyor, tersi değil |
| **Doğubayazıt** | 1 (dönem düzeyi): "Gün külliyat içi devralmadır, kaynak DEĞİLDİR — açıkça damgalandı" | yok | Şeyhrumi/Özalp/Çaldıran/Van 94,7 | **ilk kuşak** (TDV `dogubayazit` 1514). AMA zinciri "akkoyunlu 1281→1514-09-06 tek blok": Akkoyunlu 1340'ta kuruldu ⇒ **künye-öncesi boyama (4d sınıfı)**. V0'da Beri bunu devralırdı |
⇒ Öngörü yarı tuttu: üçü de ilk kuşak, ama Doğubayazıt'ın zinciri ayrı bir kusur taşıyor.
⚠️ Test (b) yalnız BİREBİR kopyayı yakalar. Ayrışmış beyansız kopyayı (Digor gibi) ancak
(c) ve metin okuması işaret eder; kesin değildir. Şartname beyanı bu yüzden başta.

## 4. ③ Qaţţīnah — niçin düşüyordu, nasıl düzeldi
### 4.1 Sebep (ölçüldü)
Qaţţīnah BİRLEŞİK: A = en yakın herhangi sahipli kayıt (Ceylanpınar 4,3 km), B = aynı
yakada 1923 sahibi aynı (Rakka 133,4 km), T = 1918-10-26. Ceylanpınar W9'da beyanlı
(ankraj Mardin, birebir). V0 onu adaylardan SİLİYOR. Yeni en yakın sahipli kayıt
uzaklaşınca 40 km / 2× kuralı birleşimi kapatıyor (A = B = Rakka). 1281-1918 Rakka'nın
zinciri olur: memluk 1281→1516 vb. **86.070 gün.** Bu kusur ELE-ve-UNUT'tan geliyor:
elek, kopyanın coğrafî bilgisini (Qaţţīnah'ın 4,3 km yanında bir yer var) içeriğiyle
birlikte atıyor.
### 4.2 Düzeltme (1006b) — yönlendirme
`etkin_kayit(y, AD)`: kopya beyanlı aday ELENMEZ. Beyan ettiği PENCEREDE zinciri
kaynağının zinciriyle, kaynak da kopyaysa özyinelemeyle KÖKENİN zinciriyle değiştirilir.
Pencere dışı kaydın kendisidir. Kaynağı bulunamayan ya da döngülü aday ELENİR (sebep
basılır). `zincir_kaynagi.yer` = coğrafî komşu (Ceylanpınar); kökeni `etkin_kayit` çözer.
W9 benzetiminde 45 beyandan 1 tanesi çok kuşaklı: Bacirge → Yüksekova → Çölemerik.
Bu sonuç ayrıca B1'i de iyileştiriyor: dört köy eski komşularını korur ve kopya pencereleri
(Iğdır/Arpaçay 1281-1508 · Gümrü/Eçmiyadzin tamamı) Revan'dan TEK KUŞAK gelir. Beri ile
Küçükperveli Doğubayazıt'ın künye-öncesi bloğunu ya da Kars'ın zincirini ALMAZ.
### 4.3 Kalan 250 gün — kusur değil, W9 VERİ sorusu
Qaţţīnah'ın T öncesi artık Mardin. Bugünkü dosyadaki Ceylanpınar zincirinden tek farkı
1516-08-24 → 1517-05-01: Ceylanpınar `OSMANLI`, Mardin `safevi`. Bu, Ceylanpınar'ın
**kendi beyan ettiği kaynaktan sapması** (dalga 4: "yön belirsiz, aynı commit"). V1 beyana
güvenir. Beyan "birebir" diyorsa sapma beyanın dışındadır.
⇒ W9, Ceylanpınar'ı "birebir" yazmazsa (ya da penceresini 1516'dan önce bitirirse) fark
**0** olur. Karar W9 verisinin, eleğin değil.

## 5. ⚠️ B'nin dokunduğu yer — KF-1 kuyruğu
V0 de V1 de Norapat ve Kliçatak'a Revan'ın BUGÜNKÜ zincirini getirir (13.224 gün):
1468 `akkoyunlu` · 1583-1604 / 1635-36 / 1724-35 `OSMANLI` · **1917-11-07→1918-05-28
`transkafkasya` · 1918-05-28→1920-12-02 `ermenistan-demokratik-cumhuriyeti`** (bugün ikisi
de `sovyet-rusya`). Talimat: "Gümrü, Eçmiyadzin, Kliçatak ve Norapat'taki sahte
`sovyet-rusya` penceresi KF-1 kuyruğunda, Emre kararında, DOKUNMA." Betik koşusu bu
pencereyi DÜZELTİR, yani dokunur. ⇒ B koşusu KF-1 hükmüyle sıralanmalı.

## 6. ④ Uzaklık
Bugünkü 28 seçimin uzaklıkları: BİREBİR 23 kayıt 4,4–42,3 km (ortanca ~12); BİRLEŞİK
B kolu 55,0–133,4 km, A kolu 4,3–27,1 km.
- V0'ın yeni komşuları **41,2 · 43,4 · 44,4 · 73,3 km**: BİREBİR bandının ÜST ucunda ya
  da DIŞINDA (en büyük birebir 42,3). Kliçatak → Revan 73,3 km, birebir olarak
  benzersiz uzak.
- V1'de komşular değişmez: 22,2 · 37,4 · 17,5 · 30,9 km.
Öngörü tuttu (41-73 km, üst yarı).

## 7. Diff — `C:\atlas-umit\denetim\TR1923-ELEK-1006b.diff`
- **ARTIMLI: 1006'nın ÜSTÜNE** uygulanır (1006 makine/umit ab3c05d1'de).
- Betik **+69/−6** (etkin_kayit, _kirp, yönlendirme döngüsü, başlık) · sınav **+154/−109**
  (①/①c/①q/②/③ yeniden yazıldı). Toplam 223 ekleme, 115 silme. 22.797 bayt, CR **0**, LF.
- Temiz ağaçta (`C:\atlas-w6c` = origin/main + 1006; sınavdan sonra kaldırıldı):
  1006b **ileri ✓** · **-R ✗** · uygulanınca w6b'deki iki dosyayla **birebir**.
- Sınav: `py denetim/ARAC-TR1923-ELEK-SINAV-1006.py --eski-ref origin/main` → **çıkış 0,
  GEÇTİ**:
  - ② beyansız eski↔yeni 0 fark
  - ① 4/4 iki yön: yeni = köken (Revan), eski = bayat kopya; kopya gerçekten bayat ⇒ ayırt edebiliyor
  - ①c 5 beyanlı pencere, köken dışı içerik 0
  - ①q Qaţţīnah komşular [Ceylanpınar, Rakka], T öncesi = Mardin ✓
  - ③ beklenmeyen fark 0
  - UYARI 28
- Motor tuzu: dokunulmadı. `data/`: yazılmadı.

## 8. Hüküm isteyen
1. **B'nin zamanı:** KF-1 (sahte `sovyet-rusya`) hükmünden sonra mı, onunla birlikte mi?
2. **W9 / Ceylanpınar:** "birebir Mardin" beyanı, 1516'daki kendi sapmasıyla çelişiyor.
   W9 ya pencereyi daraltır ya da Ceylanpınar'ı "bilerek ayrılmış" kovasına alır.
3. **Doğubayazıt'ın künye-öncesi `akkoyunlu` bloğu** (1281-1340): ayrı kusur, V1'de
   sınıra inmiyor; Akkoyunlu açılış hizalaması bu kayda uygulanmamış.

## 9. Ağaç
`C:\atlas-w6b` `git status --porcelain`:
```
 M denetim/ARAC-TR1923-YAZ-0914.py
?? denetim/ARAC-TR1923-ELEK-SINAV-1006.py
```
(1006 + 1006b içeriği; `data/` temiz; commit yok.)
