# «DÖNEM KÜNYEDEN UZUN» — `§3.5.0`ın üç kovasına ayrıldı

**Oturum:** KIMLIK-KID-0907 · **Sevk:** M-3162 (1.MURAT) · 7 Eylül 2026
**ANLIK GÖRÜNTÜ:** koşu 8 sürerken · `data/*.js` DONUK, yalnız **okundu**.
**Cins:** ÖLÇÜM — hiçbir künye/dönem değiştirilmedi.

---

## 🔴 SONUÇ — «ÜÇÜ TEK SINIF» ÇÜRÜDÜ: İKİ AYRI KOVA, VE ÇARELERİ TERS

Sevk *"Memlûk · Tunus · Boğdan üçü tek sınıf: künye himaye/ilhak gününde
bitiyor, polity himaye olarak sürüyor"* diyordu. Künye künye ölçüldü:

```
① KISALT (BATNOZ)   0 vaka   — ÖLÇÜLDÜ, DÖRDÜNDE DE UYGULANAMAZ
② GENİŞLET (ZEND)  36 dönem  — Tunus ailesi
③ ARDİL            19 dönem  — Eflak 11 + Boğdan 4 + Besarabya 3  (künye HAZIR)
                    1 dönem  — Memlûk/Zebîd                        (künye YOK)
```

## ① «KISALT» KOVASI BOŞ — ve bu ölçülerek çıktı

Her vakada dönem kaldırılıp `Değişmez 1` **denetle.py'nin semantiğiyle**
(yalnız `d`·`v`·`s`; `isg:` **sayılmaz**) uygulandı:

| vaka | kesim | kısaltırsak sahipsiz |
|---|---|---|
| Tunus (35) | 1881-05-12 | **35** 🔴 |
| Eflak (11) | 1859-01-24 | **11** 🔴 |
| Boğdan (4) | 1859-01-24 | **4** 🔴 |
| Memlûk (1) | 1517-04-13 | **1** 🔴 |

⇒ `§3.5.0`ın *"kısaltmak DELİK AÇAR"* uyarısı dördünde de **ölçülmüş**
biçimde geçerli.

### 🔴 VE İLK ÖLÇÜMÜM YANLIŞTI — İKİ AYRI SEBEPTEN
İlk turda Tunus ve Memlûk için *"kısaltma delik açmaz"* yazmıştım:
```
① `isg:` DOLDURUYOR sandım — `Değişmez 1` `isg:`e BAKMAZ.
   Tunus'ta 1881-1923'ü YALNIZ `isg:fransa-cumhuriyet` örtüyor;
   kısaltılsa `d`/`v`/`s` katmanlarında HİÇBİR ŞEY kalmıyor.
② Hariç tutma mantığım yalnız `t ∈ {1878, 1923}` dönemleri eliyordu;
   Memlûk'ün `t`si 1539 olduğu için KESİLEN DÖNEMİN KENDİSİNİ
   «başka katman» saydı ve 0 bastı.
```
📌 İkisi de *"temiz bir sayı üretip hata vermeyen"* cinsten (`§11`).

---

## ② ZEND — TUNUS (36 dönem) · ve kararı **EMSAL** verdi, sezgi değil

**Soru:** bir polity işgal/himaye altına girince atlasın künyesi **biter mi,
sürer mi?** Külliyat tarandı — `v:` dönemiyle **örtüşen** bir `isg:` taşıyan
bütün kayıtlar:

```
künye işgalden SONRA da SÜREN dönem : 55
künye işgal gününde BİTEN dönem     :  0
```
| kimlik | künye `t:` | `isg:` başlangıcı | |
|---|---|---|---|
| `misir-kavalali` ×51 | 1914-12-18 | 1882-09-13 (ingiltere) | 🟢 32 yıl sürüyor |
| `eflak` ×2 | 1859-01-24 | 1806-11-30 (rusya) | 🟢 |
| `bogdan` ×2 | 1859-01-24 | 1806-11-30 (rusya) | 🟢 |

⇒ **Konvansiyon 55/55.** Tunus tam aynı şekle sahip (`v:` + `isg:fransa-
cumhuriyet` 1881-05-12'den) ama künyesi **tam işgal gününde** bitiyor —
külliyattaki **tek** istisna.

🟢 **HÜKÜM: `tunus-ocagi` ② ZEND kovasındadır — künye GENİŞLETİLMELİ.**
`§3.5.0`: *"AYNI polity sürüyor · KÜNYE PENCERESİ dar ⇒ künyeyi GENİŞLET.
Veri doğru."* Hüseynî beyliği himaye altında sürdü; Fransız denetimini
`isg:` katmanı **zaten** taşıyor.

⚠️ **VE BİR ÇELİŞKİ BİLDİRİYORUM, ÇÖZMÜYORUM:** künyenin **kendi özeti**
ters yönde:
> *"Osmanlı beylerbeyiliğinden özerk hanedanlığa evrilen Kuzey Afrika ocağı;
> **Fransız protektorasıyla fiilen sona erdi**."*

Yani künye yazarı 1881'i **bilerek** son saymış. Konvansiyon (55/55) ile
künyenin beyanı çatışıyor. Künye benim dosyam değil (`§7`) — **karar
koordinatörün.**

---

## ③ ARDİL — iki alt kova, ve ikisi çok farklı

### Ⓐ ARDİL KÜNYESİ **HAZIR** — Eflak 11 · Boğdan 4 · Besarabya 3 = **18**
```
künye eflak/bogdan  t: 1859-01-24   = Eflak+Boğdan BİRLEŞMESİ   → DOĞRU
dönem               t: 1878-07-13   = BERLİN, tâbiiyetin sonu   → DOĞRU
romanya künyesi     1859-01-24 → 1881-03-26  ⇒ aralığı TAM KAPSIYOR ✓
```
⇒ Kusur ne künyede ne veride: **dönem iki polity'ye yayılıyor.**
**ÇARE: dönem `1859-01-24`te BÖLÜNSÜN**, ikinci parça `kid:"romanya"`.
🟢 `§3.5.0`ın ③ ön koşulu **sağlanıyor**: ardıl künye var **ve penceresi
boşluğu kapatıyor** — yeni künye GEREKMİYOR.

### Ⓑ ARDİL KÜNYESİ **YOK** — Memlûk/Zebîd ×1
```
künye memluk  1250 → 1517-04-13     dönem  1517-07-06 → 1539-01-01
```
Dönem künyenin **tamamen dışında** (83 gün sonra başlıyor). Ve `k` metni
zaten *"eski Memlûk beyleri (Osmanlı desteğiyle)"* — Memlûk **Sultanlığı
değil**, onun Osmanlı destekli ardıl yapısı.
⇒ `§3.5.0` ③: **yeni künye gerek** (+ renk). Koordinatörün kalemi.

### Ⓒ ⚠️ VE AYNI KOVANIN **BAŞ UCU** — Erdel 3+3 · Sofya 1
```
erdel                künye f:1570 > dönem f:1541   (Zapolya boşluğu — künye YOK)
bulgaristan-prensligi künye f:1878-07-13 > dönem f:1878-01-04  (190 gün,
                      Rus işgal ara dönemi — `bulgaristan-prensligi` DEĞİL)
```
İkisi de ③ ARDİL ama **ÖNCEKİ** polity eksik. Zapolya `DORT-KALEM`de.

---

## ④ SAYIM
```
② ZEND  (künye genişlet)      36   tunus-ocagi
③ Ⓐ ARDİL, künye HAZIR        18   → dönem böl, kid:romanya
③ Ⓑ ARDİL, künye YOK           1   → yeni künye (Zebîd)
③ Ⓒ ARDİL, BAŞ ucu             7   → Erdel 6 (Zapolya) + Sofya 1
① KISALT                       0   ölçüldü, uygulanamaz
────────────────────────────────
TOPLAM                        62   = 429'un %14,5'i
```

## ⑤ ÖLÇMEDİM
```
⚪ `tunus-ocagi`in genişletilirse hangi güne kadar gideceği — 1923-10-29
   (atlas penceresi) mi, Hüseynî beyliğinin gerçek sonu mu? Kaynağa sorulmadı.
⚪ Zebîd için ardıl künyenin ADI ve penceresi
⚪ Sofya'nın 1878-01-04 → 1878-07-13 ara döneminin doğru kimliği
⚪ Bu 62'nin `denetle.py` üzerindeki etkisi — `kid` hiçbir değişmezin
   evreninde değil, ama SINANMADI
```
