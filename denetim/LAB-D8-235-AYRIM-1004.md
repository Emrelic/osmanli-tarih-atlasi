# LAB-D8-235-AYRIM-1004 — Defterden kaybolan 235 birim: düzelme mi, motor değişimi mi?

> Görev: YILDIRIM BAYEZIT, 4 Ekim 2026 (önceki: `LAB-D8-KOR-KOK-1004 §3`).
> Denetleyici: LAB IRTIBAT. **Yalnız ölçüm**; `data/`, `arac/` ve `denetle.py`ye yazılmadı.
> 🔴 **Ölçüm HAVVA'nın süren koşusundan ÖNCEKİ gövdeyle yapıldı.** "Bugün" =
> `main 0e22a060`'tan `kodla.py coz-c` ile üretilen gövde (`devletler_harita.js`
> 2026-10-04 12:35 · `uret_petek 8b6aaea5` = koşu 19). Koşu inince gövde değişecek; bu
> rapordaki "bugün" sayıları o gövdeye aittir.
> Betikler oturum karalama alanında: `d8_235.py` · `d8_235b.py`.

## 0. Yöntem — karşı-olgusal gövde
Defter (`DEGISMEZ-0086-defter.json`) **koşu 15** gövdesiyle yazıldı (`_NOT`: "2026-09-25
20:55 · uret_petek c90fa6c8"). O gövde depoda duruyor: `9ce6c942` ("Koşu 15 çıktısı main'e
indi") ağacında `devletler_harita.js` 65,2 MB · `donemler.js` 39,4 MB · `bolgeler.js`
0,35 MB → `git cat-file blob` ile karalama alanına çıkarıldı (`data/`ya DEĞİL).
```
BUGÜN  = bugünkü gövde (koşu 19) + bugünkü D hatları + bugünkü yerleşim + bugünkü denetle.py
E1     = ESKİ gövde (koşu 15)    + bugünkü D hatları + bugünkü yerleşim + bugünkü denetle.py
```
İki koşu arasındaki TEK fark gövdedir. ⇒ Kayıp birim E1'de **hâlâ varsa** onu gövde değişimi
kaybettirmiştir; E1'de de **yoksa** hat/yerleşim/kod değişimi.
**Yöntem sınaması:** E1, defteri neredeyse birebir üretiyor — **1611 birimin 1602'si ortak**
(yalnız E1'de 4 · yalnız defterde 9). ⇒ Bugünkü `denetle.py` + bugünkü veri, eski gövdeyle
27 Eylül'ün sayısını veriyor; karşılaştırma aynı ölçüm aletiyle yapılıyor.

## 1. 🔴 SONUÇ
```
                                   kayıp 235 (hattı bugün ölçülen)    giren 154
🔴 GÖVDE DEĞİŞİMİ                         226  (%96)                     154  (%100)
🟢 VERİ/KOD (hat · yerleşim · denetle)     9                               0
```
⇒ **`1611 → 1521` farkının neredeyse tamamı motor ÇIKTISININ değişimidir**, Değişmez 8'in
sorduğu verinin (D hatları, yerleşim dönemleri) değişimi değil. Veri tarafı yalnız 9 birim
oynattı — 9'u da "tamamen gitti" (`d1923-tr-sscb-gurcistan` Hopa · `d1923-us-mx-gadsden`
Santa Rita del Cobre/Tubac/Yuma geçidi …).
Gövde kovasının anahtar yapısı: 201 "tamamen gitti" · 25 "aynı hat·gün·yan, başka yer".

## 2. Gövde değişimi kendi içinde: motor kodu mu, motora giren veri mi?
Gövde = motor(kod, girdi). İkisi bu ölçümle **tam ayrılamaz** (ayırmak için aynı girdiyle
eski motoru koşturmak gerekir; koşu LAB'ın işi değil). Ölçülebilen iki gösterge:

**(a) Motor tuzu değişti** (`9ce6c942..HEAD`):
```
76351781 2026-09-27  KOSU 16 — tam inşa (4 motor yaması)
464f91fd 2026-09-28  Paket 0080 (tuz dosyalarından birine dokunuyor)
55dfa2b5 2026-09-30  MOTOR YAMASI İNDİ — BOGAZ-OLCUM-0081: sudan geçen adım YASAK
uret_petek parmak izi: c90fa6c8 (koşu 15) → 8b6aaea5 (koşu 19)
veri-kaynak/: yalnız motor_kara.geojson (2 commit) — o dosya GİRDİ DEĞİL ÇIKTI (§5)
```
**(b) Motorun girdisi az değişti:** 9ce6c942 ↔ bugün, yerleşim satırı 4083 ortak →
**128 değişen · 2 yeni · 0 silinen** (%3,2). Etkilenen birimlerin yerleşimi:
```
                         birim   yer kaydı AYNI   DEĞİŞTİ   YENİ
gövde kaybı               226        196            16        14
gövde girişi              154        141             2        11
```
Kaydı AYNI olan birimler için en yakın değişen/yeni yerleşim (petek komşuluğu):
```
                 ≤50 km   50–150 km   150–400 km   >400 km
kayıp  (196)       26         46          50          74
giriş  (141)        6         24          32          79
```
⇒ Kayıpların **124/196**'sında, girişlerin **111/141**'inde 150 km içinde değişen
yerleşim **yok**. Bu birimlerin değişimini yerleşim verisi açıklayamaz; aralıkta değişen
tek büyük girdi **motor kodudur** (4+1 yama). Bu bir **gösterge**dir, kanıt değil
(petek motoru uzak etkiler de üretebilir: bölge, nehir, kıyı adımı).

## 3. Tavanın anlamı — ölçüm (hüküm koordinatörde)
- `BEKLENEN_D8A` iki ayrı motor çıktısını karşılaştırıyor: defter koşu 15, ölçüm koşu 19.
  Aradaki farkın **%96'sı motor çıktısı**, Değişmez 8'in verisi değil.
- `:4002-4005` yorumundaki "evren %51 büyüdü ve taşma buna rağmen düştü ⇒ iyileşme gerçek"
  cümlesi bu ölçümle **desteklenmiyor**: E1 (eski gövde + bugünkü veri) 1606 veriyor —
  bugünkü veriyle eski motor neredeyse aynı sayıyı üretiyor. Düşüş verinin değil, motorun.
- ⇒ Değişmez 8 bir **motor regresyon ölçüsü** olarak da çalışıyor; ama bunun için tavan
  her koşuda (motor değiştiyse) **yeniden** yazılmalı. Aksi hâlde motorun yeni ürettiği
  taşmalar (bugün 154) eski motorun kapattıklarıyla (226) takas edilir ve sayı tek başına
  ikisini ayıramaz — `LAB-D8-KOR-KOK §3`teki üyelik bulgusunun aynısı.

## 4. Bulunamayan
- Gövde değişiminin kod/veri payı **tam** ayrılmadı (eski motor + bugünkü girdi koşusu
  gerekir — HAVVA'nın işi).
- Yerleşim satırı karşılaştırması tek satırlık kayıtlara dayanıyor (`ad:` + `lat`/`s:`
  aynı satırda): 4298 kaydın 4085'i dizine girdi; çok satırlı ~213 kayıt **ölçülmedi**.
- 154 yeni taşmanın gerçek bir sınır aşımı mı yoksa motorun yeni bir hatası mı olduğu
  — **ölçülmedi** (bunu yalnız birim birim bakmak söyler).

---

## 🔴 ORTAM DÜZELTMESİ — 4 Ekim 2026, 13:04–13:12 (yeniden koşu)
**Bu raporun ilk sürümü YANLIŞ ORTAMI beyan ediyordu.** git reflog: 12:38:43'te commit
için `lab-odak-1003`e (65a887cc tabanlı, `main`in ~225 commit gerisinde) geçildi ve
ölçümler orada koştu. Gövde (`kodla.py coz-c`, gitignore'da) `0e22a060`ten üretilmişti,
ama `denetle.py` (449+/25− satır farklı), D hatlarını taşıyan 8 paket dosyası, 2 yerleşim
dosyası ve `devletler.js` ESKİ daldandı. Rapordaki "main 0e22a060" ibaresi o koşu için
doğru değildi.
**Yeniden koşu:** yerel `lab-1004` dalı = `0e22a060`; her betiğin çıktısının başına ve
sonuna `git rev-parse --short HEAD` basıldı (`HEAD=0e22a060 … HEAD_SONRA=0e22a060`).
**Sonuç: bu rapordaki bütün sayılar temiz ağaçta BİREBİR aynı çıktı.** Tek fark:
`d8_235b` yerleşim dizini "yeni 2" → "yeni 4", değişen/yeni koordinatlı 130 → 132;
uzaklık dağılımları değişmedi. Bağımsız doğrulama: UMIT kendi makinesinde `origin/main`e
rebase edilmiş ağaçta 78/19/175/50'yi aynı ölçtü (koordinatör bildirimi).
