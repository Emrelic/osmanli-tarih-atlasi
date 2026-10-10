# KASA-KUR-ANADOLU-1010 — Anadolu noktalarının `kur:` borcu ve MÖ kapısı

Görev: YILDIRIM BAYEZIT (NOKTA-ANADOLU-MO kararı (e)) · Araştırmacı: KASA · `data/` DONUK.
Girdi: `denetim/LAB-KUR-SAYIM-1010-kursuz-2823.csv` (LAB; `bolge_kaba` sütunu) — yeniden tarama
yapılmaz. Bilinen (LAB ölçümü, öngörü değil): Anadolu `kur:`suz **316**.
Motor kuralı (LAB-KUR-SAYIM §0, `uret_petek.py:5023-5026`): `kur:` yoksa nokta en baştan sahnede.
Sorular: ① kur: VAR/YOK sayıları · ② kur:'suzlardan kutuda olanlar · ③ en kârlı 20'sinin tasdik
sınıfı (A/A'/B/C/D) · ④ bu borç ölçülmeden Anadolu MÖ p95'i ölçülebilir mi.

## 0. ÖNGÖRÜ (ölçümden ÖNCE, 2026-10-10)
- **① Anadolu toplam nokta 340 ± 20**; `kur:` VAR **25 ± 10** (çoğu Osmanlı/Cumhuriyet dönemi kurulan
  kasaba, 18-19. yy) ⇒ `kur:`suz oranı **~%92**.
- **② Kutuda olan kur:'suz:** LAB'in "Anadolu" sınıfı zaten kutu ⇒ **316'nın hepsi** (Trakya Avrupa-Balkan'da).
- **④ Kapı:** iki ölçüm verilecek — (i) **motor bugünkü hâliyle** (316 kur:'suz MÖ 3000'de sahnede):
  p95 ≈ bugünkü **70 km** = YAPAY · (ii) **temkinli** (yalnız MÖ varlığı kaynaklı noktalar: 7 yeni
  Hitit noktası + tasdikli A/A' sınıfı): p95 **≥ 200 km** ⇒ KAPALI/SINIR. Fark bu borcun BÜYÜKLÜĞÜDÜR.
  ⇒ Cevap: **"hayır — borç ölçülmeden Anadolu MÖ p95'i ölçülemez"**, ve bunu bir aralıkla göstereceğim.
- **③ En kârlı 20** (çıkarılınca p95'i en çok değiştiren kur:'suzlar): Pleiades'te antik karşılığı
  **bulunur 15 ± 3** (Anadolu kentlerinin çoğu antik: Ankara/Ancyra, Kayseri/Mazaka, Konya/Ikonion …);
  sınıf dağılımı **A 4 ± 2 · A'/B 6 ± 3 · C (MÖ 1. binyıl ve sonrası, Helenistik/Roma kuruluş) 6 ± 3 ·
  D 4 ± 2**. Yani en kârlı noktaların bile **yarısı MÖ 2. binyılda VAR sayılamaz**.

## 1. ÖLÇÜM (2026-10-10)

### 1.0 Kutu ve sayılar (①②)
**Kutu tanımı (benim):** Türkiye toprağı (`ne_10m_admin_0_countries` TUR) ∩ motor karası
(`motor_kara.geojson`), **Trakya hariç** (Boğaz/Çanakkale çizgisinin batısı) — koordinatörün
"Anadolu" tanımı. Izgara 0,05° hücre merkezi, **31.090 kara hücresi**, R=6371,0088.
```
                                   ölçüm         öngörü
① Anadolu (TR-Asya) atlas noktası  218           340 ± 20   — TUTMADI (çok az)
   kur: VAR                        3 (1301 · 1402 · 1550)   25 ± 10 — TUTMADI
   kur: YOK                        215 (%98,6)   ~%92       — TUTMADI (daha kötü)
② kutuda olan kur:'suz              215 (hepsi)   316 (LAB "Anadolu") — fark AÇIKLANDI ↓
```
⚠️ **LAB'in 316'sı ile benim 215'im neden farklı:** LAB'in `bolge_kaba` "Anadolu" sınıfı bir
DİKDÖRTGEN (enlem 36,5-42,2 · boylam 26-45) — Trakya (Edirne, Kırklareli, Tekirdağ, İstanbul,
Gelibolu …), Ege adaları (Sakız …), Gürcistan/Ermenistan/Irak sınır noktalarını içeriyor.
Ortak 207 · yalnız LAB 109 · yalnız ben 8. Bu bir hata değil, **iki ayrı kutu tanımı** — MÖ
Anadolu kapısı hangisiyle ölçülecek, koordinatör tanımlamalı (2a).

### 1.1 En kârlı 20 (③) — marjinal etki ve tasdik sınıfı
"Kârlı" = MÖ 3000 kesitinde (motorun bugünkü hâli) çıkarılınca Anadolu p95'ini en çok
DEĞİŞTİREN kur:'suz nokta (taban p95 70,85 km; 68 nokta p95'i > 0 değiştiriyor). Sınıf = Pleiades
en yakın kayıt (≤10 km) ve en erken dönem etiketi (Anadolu için Yunan-Roma etiketleri KAPSAM İÇİ
— Barrington Anadolu'yu kapsar).
| # | nokta | Δp95 (km) | Pleiades (km) | en erken tasdik | sınıf |
|---|---|---|---|---|---|
| 1 | Ankara | 5,37 | Ancyra 619103 (1,2) | 1200-bc-middle-east (MÖ 1200) | **B** |
| 2 | Kırşehir | 4,81 | Aquae Saravenae 619110 (0,3) | late-antique (MS 300) | **D** (MÖ'de YOK) |
| 3 | Sivrihisar | 3,20 | Spaleia 609533 (2,1) | late-antique | **D** |
| 4 | Erzurum | 2,32 | Erzurum 874373 (0,9) | 1200-bc-middle-east | **B** |
| 5 | Kayseri | 2,24 | Mazaka/Caesarea 629035 (1,0) | early-iron-age-anatolia (MÖ 1200) | **B** ⚠️ ⑧ |
| 6 | Bitlis | 2,19 | Cymiza/Balaleisa 874438 (0,1) | late-antique | **D** |
| 7 | Sarıkamış | 1,97 | Sarıkamış 308320791 (0,8) | sixteenth-ce | **D** |
| 8 | Palu | 1,95 | — (10 km'de eşleşme YOK) | — | `bulunamadı` |
| 9 | Sivas | 1,68 | Sebasteia 629075 (0,2) | middle-bronze-age-anatolia (MÖ 1750) | **B** |
| 10 | Çorum | 1,61 | — (en yakın Ximene? 14,3) | — | `bulunamadı` |
| 11 | Denizli | 1,42 | Laodicea ad Lycum 638955 (6,0) | classical (MÖ 550) | **C** ⚠️ 6 km: Laodikeia ≠ Denizli şehri |
| 12 | Çankırı | 1,27 | Gangra 844926 (0,2) | hellenistic (MÖ 330) | **C** |
| 13 | Sinop | 1,24 | Sinope 857321 (0,7) | middle-bronze-age-anatolia | **B** |
| 14 | Erciş | 1,11 | Elegoana 874463 (0,6) | late-antique | **D** |
| 15 | Göksun | 1,03 | Kokousos 629013 (1,2) | roman (MÖ 30) | **C** |
| 16 | Kastamonu | 1,02 | Kastamonu 844974 (2,5) | classical | **C** |
| 17 | Zamantı (Pınarbaşı) | 0,98 | — (en yakın Ariaratheia 14,7) | — | `bulunamadı` |
| 18 | Diyarbakır | 0,95 | Amida 874298 (0,3) | achaemenid (MÖ 550) | **C** |
| 19 | Aksaray | 0,83 | Garsaura 619164 (0,9) | hellenistic | **C** |
| 20 | Antalya | 0,77 | Attalea 638778 (0,5) | middle-bronze-age-anatolia (!) | **B** ⚠️ ⑥ |
```
                 öngörü      ölçüm
A (≤MÖ 3000)     4 ± 2       0   — TUTMADI
A'/B             6 ± 3       6   (A' 0 · B 6) — TUTTU
C                6 ± 3       6   — TUTTU
D (yalnız MS)    4 ± 2       5   — TUTTU
bulunamadı       —           3
"yarısı MÖ 2. binyılda VAR sayılamaz"   14/20 (C+D+bulunamadı) — TUTTU, fazlasıyla
```
**Uyarılar:**
- ⑧ **Kayseri:** TDV `kayseri` "Kültepe’de ele geçen arkeolojik buluntular … iskânın milâttan önce
  3500’lere kadar indiğini" — cümle **Kültepe**'yi (Kaneş, 18,8 km) tarihliyor, Kayseri şehrini
  DEĞİL ⇒ Kayseri'ye A verilmez; Kaneş ayrı nokta (KASA-NOKTA-ANADOLU-MO).
- ⑥ **Antalya:** Pleiades `Attalea` "middle-bronze-age-anatolia" etiketi taşıyor — Attaleia'nın
  Helenistik kuruluşuyla çelişiyor; etiket tek başına `kur:` kaynağı yapılmamalı (aynı sınıf:
  Pleiades'in "Early Bronze Age Anatolia (2000–1750)" tanımı, NOKTA-ANADOLU-MO §1.1).
- **Denizli ↔ Laodikeia 6,0 km:** antik Laodikeia modern Denizli'den AYRI site ⇒ Denizli
  noktasına Laodikeia'nın tasdikini vermek konum kusuru sınıfı (LAB-KONUM-KUSURU deseni).

### 1.2 ④ KAPI — bu borç ölçülmeden Anadolu MÖ p95'i ÖLÇÜLEBİLİR Mİ?
Üç senaryo, yalnız Anadolu noktaları (komşu bölge noktaları katılmadı — kenar etkisi beyan):
```
kesit     MOTOR (kur:suz 215 hepsi sahnede)   TASDİKLİ (9 MÖ nok. + top-20 sınıfı)   TASDİKLİ + kalan 195 "var"
MÖ 3000   p95  67,0 · azamî 110,1  AÇ          n=5   p95 620,2 · azamî 756,7  KAPALI    p95 105,0 · azamî 167,9  AÇ
MÖ 2000   p95  66,5 · azamî 106,8  AÇ          n=8   p95 532,9 · azamî 691,6  KAPALI    p95  99,5
MÖ 1500   p95  66,5                AÇ          n=12  p95 466,7                KAPALI    p95  98,7
MÖ 1000   p95  67,0                AÇ          n=11  p95 347,2                KAPALI    p95  88,7
MÖ  500   p95  70,4                AÇ          n=11  p95 267,9                SINIR     p95  92,8
```
🔴 **CEVAP: HAYIR.** Aynı kesitte (MÖ 3000) Anadolu p95'i, kaynağa ne kadar güvendiğine göre
**67 km (AÇ) ile 620 km (KAPALI) arasında** — kapının her iki tarafına düşüyor. Aradaki fark
**ölçüm değil, 195 noktanın ölçülmemiş varlığı.** Motorun bugünkü 67 km'si bir ölçüm değil,
`kur:` yokluğunun YAN ÜRÜNÜ.
⇒ **Kapıyı tanımlayan cümle:** *"Anadolu'nun MÖ yoğunluğu, kutudaki 215 kur:'suz noktanın en az
p95'i belirleyen ~70'inin MÖ tasdik sınıfı ölçülmeden ÖLÇÜLEMEZ; bugünkü 67-70 km, `kur:`
borcunun yarattığı yapay bir sayıdır."*
Ve en kârlı 20'nin ölçümü bunun ne yöne döneceğini gösteriyor: **hiçbiri A değil**, 14'ü MÖ 2.
binyılda yok ⇒ borç ödendikçe Anadolu MÖ p95'i AŞAĞI DEĞİL **YUKARI** gidecek.

### 1.3 Milid (KASA-MILID-1010) — LAB teyidi
LAB (makine/lab `1e74bb13`): Malatya "TEMİZ-ÖLÇÜLDÜ" → **ÖLÇÜLEMEDİ**'ye alındı; Pleiades 629040
Melitene = Arslantepe (0,02 km) teyit; ayrıca **629039 "Melitene" 38.4417/37.6847** diye ayrı ve uzak
bir kayıt daha var; Ṯ `MALATIN_383E383N_S` modern merkezi veriyor (2,1 km). ⇒ Milid **ayrı nokta**
(Arslantepe); atlas Malatya'nın 1281-1839 konumu açık (ikinci tanık gerekli).

## 2. ③ İSTİYORUM
a) **Kutu tanımı:** MÖ Anadolu kapısı benim TR-Asya kutumla mı (215), LAB'in dikdörtgeniyle mi
   (316)? Fark Trakya + adalar + sınır ötesi; MIMARI §5.1'e Sümer çekirdeği gibi resmî tanım gerek.
b) **Kapı cümlesi** (1.2) MIMARI §5.1'e girsin mi? "bugünkü 67-70 km yapay; borç ödendikçe p95 yukarı gider".
c) **Borcun ödenmesi:** marjinal etkisi > 0 olan **68** nokta asıl iş (215'in hepsi değil). En kârlı
   20 bu raporda; kalan 48 için aynı tur? Tahminim: onların da çoğu C/D.
d) **D sınıfı 5 nokta** (Kırşehir · Sivrihisar · Bitlis · Sarıkamış · Erciş): `kur:` = en erken
   tasdik (MS 300 / 1500) ⇒ MÖ'de sahneden çıkarlar. Onay? (Bu, MÖ Anadolu'da 5 noktayı
   doğrudan kaldırır.)
