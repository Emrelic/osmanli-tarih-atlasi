# ASYA — TUR 4: KALAN 335 NOKTANIN KAYNAK DENETİMİ

**Oturum:** ASYA · Emre'nin sevki · 7 Eylül 2026
**Cins:** ÖLÇÜM — veri yazılmadı, commit edilmedi.

---

## SONUÇ — ÜÇ CÜMLE
```
🟢 YETKİLİ TRİYAJ bölgemde YENİ KUSUR SINIFI BULMUYOR (A/B/C/D)
🔴 335 noktanın 286'sında (%85) `kaynak:` alanı HİÇ YOK
🔴 VE KENDİ İLK KIYASIM ŞİŞKİNDİ — dünya oranı %37,9 değil %17,8
```

## ① EVREN — kesinleştirildi
```
ASYA toplam                        586
  sömürge (4 kimlik, tur 3)        238
  hayalet (meysur · maratha)         8
  Orta Asya (11 ad, tur 2)           5   (kalan 11'in 6'sı Buhara kutusunda)
  ⇒ KALAN                          335
```

## ② 🟢 YETKİLİ TRİYAJ — bölgemde yeni kusur YOK
`node denetim/ARAC-1923-TRIYAJ-0906.js` (kendi sınıflandırmamı
uydurmadım, aletin kovalarını kullandım):
```
SINIF A HAYALET    bölgemde meysur 3 + maratha 5 = 8   → ZATEN YAMADA
SINIF B KÜNYESİZ   bölgemde 0   (hicaz · yemen · avusturya · cimma başka bölge)
SINIF C OSMANLI    bölgemde 0
SINIF D BÖLGE DIŞI ingiltere 6 · portekiz 4 · fransa 2 → TUR 3'te ÖLÇÜLDÜ,
                   Seylan/Goa/Makao/Dili DOĞRU çıktı
```
⇒ Kalan 335'te **künye/kimlik tutarsızlığı yok.** Kaynak denetimi
bundan **ayrı bir eksen** — ve asıl açık orada.

## ③ 🔴 `kaynak:` MANZARASI — %85 BOŞ
```
kaynak DOLU                49   (%14,6)
   'bulunamadı' damgalı    14
   gerçek kaynak metni     35
kaynak BOŞ                286   (%85,4)
```

## ④ 🔴🔴 VE KENDİ KIYASIMI ÇÜRÜTTÜM — DÜNYA ORANI DA ŞİŞKİN

İlk turda bölge bölge *"kaynak dolu"* oranını ölçtüm ve şu manşeti
yazacaktım: **"Asya %8,4 · dünya %37,9 ⇒ Asya 4,5 kat geride."**
Kıyası derinleştirince manşet **çöktü**:
```
KUZEY-AMERIKA  386 "kaynaklı" → 372'si LİTERAL "bulunamadı" (çeşitlilik %4)
SAHRA-ALTI     333 "kaynaklı" → 266'sı bulunamadı türevi   (çeşitlilik %6)
OKYANUSYA      100 "kaynaklı" → 95 BENZERSİZ metin          (çeşitlilik %95) 🟢 GERÇEK
```
⇒ *"Dolu"* sayımı **damgaları kaynak sayıyordu.** Üç kovayı ayırıp
yeniden ölçtüm:

| bölge | nokta | **GERÇEK** | oran | gerekçeli `bulunamadı` | çıplak | yok |
|---|---|---|---|---|---|---|
| OKYANUSYA | 115 | 100 | **87,0%** | 0 | 0 | 15 |
| GÜNEY-ORTA-AMERİKA | 152 | 72 | 47,4% | 0 | 0 | 80 |
| KUZEY-AFRİKA | 182 | 72 | 39,6% | 12 | 28 | 70 |
| ORTADOĞU-İRAN | 453 | 95 | 21,0% | 8 | 0 | 350 |
| SAHRA-ALTI-AFRİKA | 501 | 62 | 12,4% | 173 | 98 | 168 |
| **GÜNEY-ORTA-ASYA** | 252 | 16 | **6,3%** | 14 | 0 | 222 |
| **DOĞU-GD-ASYA** | 334 | 19 | **5,7%** | 0 | 0 | 315 |
| KUZEY-AMERİKA | 463 | 13 | 2,8% | 1 | **372** | 77 |
| İBERYA | 103 | 1 | 1,0% | 0 | 0 | 102 |
| **DÜNYA** | 3637 | **646** | **17,8%** | 235 | 498 | 2258 |

🔴 **Dünya oranı %37,9 değil %17,8** — fark 733 `bulunamadı` damgası.
📌 `§11`in *"sayım birimi yanlışsa ölçüm veriyi değil verinin YAPISINI
ölçer"* dersinin bu turdaki vakası, ve **kendi ölçümümde.**

### 🟢 VE DÜZELTME ASYA'YI İKİ YÖNDE DE DEĞİŞTİRDİ
```
ASYA gerçek oran %6,0 — dünya %17,8'in altında AMA
   Kuzey Amerika %2,8 · Kuzey Avrupa %3,1 · İberya %1,0 DAHA DÜŞÜK
⇒ Asya geride, ama AYKIRI DEĞİL. İlk manşetim ("4,5 kat geride")
  hem RAKAMI hem SIRALAMAYI yanlış veriyordu.
```
🟢 **Ve bir kalite ekseni Asya'nın LEHİNE çıktı:** Asya'nın 14
`bulunamadı` damgasının **14'ü de gerekçeli**, çıplak **0**. Kuzey
Amerika'da 372 çıplak damga var. Asya'nınkiler ne aradığını söylüyor:
> *"bulunamadı — TDV `kazakistan` gövdesi okundu, bu kaleyi anmıyor"*

## ⑤ ÖNCELİK ÖLÇÜTÜ — 335'i sıralamak için ölçülebilir bir sinyal

Bir noktanın kaynaksızlığı tek başına öncelik vermez. Dört ölçülebilir
sinyal birleştirildi: **kaynaksız (+2) · 1923 diliminin günü yuvarlak
(+1) · dilim uzunluğu (max +3) · kimlik ≤3 noktalı (+2)**.

```
1923 diliminin günü YUVARLAK olan: 26 / 335 (%8)
```
🔵 Oran düşük çünkü büyük kimlikler **kesin gün** taşıyor
(`cin-cumhuriyeti` 1911-10-10 · `meiji-japonya` 1868-01-03 ·
`sovyet-rusya` 1917-11-07). Yuvarlak günler **küçük prenslik ve
sultanlıklarda** kümeleniyor — ve öncelik listesi tam olarak onlar.

### EN ÖNCELİKLİ ON — "tek nokta, altı yüzyıl, kaynaksız"
| nokta | kimlik | dilim | kimliğin nokta sayısı |
|---|---|---|---|
| **Katmandu** | `nepal` | 1281-01-01 → 1923 (**643 yıl**) | **1** |
| **Trivandrum** | `travankur` | 1281-01-01 → 1923 (643) | **1** |
| **Brunei** | `brunei-sultanligi` | 1281-01-01 → 1923 (643) | **1** |
| **Tidore** | `tidore-sultanligi` | 1281-01-01 → 1923 (643) | **1** |
| Kengtung · Loikaw · Kalaw | `san-devletleri` | 1281-01-01 → 1923 (643) | 3 |
| Johor · Bintan · Muar | `cohor-sultanligi` | 1528-01-01 → 1923 (396) | 3 |
| Bhopâl | `bhopal` | 1707-01-01 → 1923 (217) | 1 |
| Bharatpûr | `bharatpur-cat` | 1733-01-01 → 1923 (191) | 1 |

🔴 **Sınıfın tarifi:** *tek bir nokta, bölünmemiş bir zincirle, altı
yüzyıl boyunca bütün bir polity'yi taşıyor — ve hiçbir kaynak
göstermiyor.* Bunlar en kırılgan kayıtlar: tek noktanın kimliği yanlışsa
o polity haritada **tamamen** yanlış yerde.

### KİMLİK BAZINDA — nerede yığılıyor
```
95 nokta  87 kaynaksız  cin-cumhuriyeti
55        55            meiji-japonya      ← TDV kapsamı DIŞI
73        36            sovyet-rusya
24        24            siyam-chakri
14        14            abd                ← Filipinler
13        13            mogolistan
```

## ÖLÇMEDİM / SONRAKİ TUR
```
⚪ 286 kaynaksız noktanın TEK TEK kaynağını — bu tur MANZARAYI ve
   ÖNCELİĞİ ölçtü; kaynak yazmak ayrı ve uzun bir iş
⚪ 35 gerçek kaynağın DOĞRULUĞUNU — hiçbiri backtick'li TDV slug'ı
   taşımıyor (0 slug), 27'si düz metin ⇒ `§4`ün "slug canlı mı"
   sınavı bu kümede UYGULANAMIYOR
⚪ `cin-cumhuriyeti` 95 noktasının iç sınırlarını (Tibet · Moğolistan ·
   Sincan) — ayrı bir tur
🔵 ÖNERİM: sonraki tur ÖNCELİK LİSTESİNİN İLK ONU — dört tek-noktalı
   kimlik (nepal · travankur · brunei · tidore) en yüksek kaldıraç:
   dört kaynak, dört polity.
```
