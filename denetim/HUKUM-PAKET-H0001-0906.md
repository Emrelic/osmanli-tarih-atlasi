# HÜKÜM — PAKET `H-0001`: **dört işlevin üçü ZATEN VAR**, ve boşlukların sebebi TEK BİR PARAMETRE

> **1.MURAT (Oturum 0) · 6 Eylül 2026 · VERİ/KOD YAZILMADI** (koşu 7b sürüyor).
> Emre: *"bu paketteki meseleleri zaten konuşmuş ve bir kısmını yapmış
> olabiliriz, bayat olabilir — kontrol et, bayat olmayanları yap."*
> **Görseller AÇILMADI** — paketin kendi uyarısı (bir görsel metnine göre
> ~30 kat pahalı) ve metin bu hükmü vermeye yetti.

---

## ⓪ BAYATLIK TABLOSU — madde madde ölçüldü

| Emre'nin istediği | durum | dayanak |
|---|---|---|
| **1. tip**: her şehrin tavanı, aradaki boşluklar görünür | 🟡 **BUGÜNKÜ ÇIKTI BU** | `HUKUM-AB-MIMARI-0906.md` |
| **2. tip**: düzeltilmiş görünüm | 🟡 mimari ÖLÇÜLDÜ, uygulanmadı | aynı |
| (1) enklavları birleştirme | 🟢 **VAR** | `_b2_enklav_birlestir` — *"Ana kütleye ≤800 km, KARASAL, arası BOŞ olan enklavı köprüyle bağlar"* |
| (2) koridor derinliği ≤ ağız genişliği | 🟢 **VAR** | `_b3_koridor_kirp` docstring'i birebir Emre'nin cümlesi: *"Derinliği genişliğini geçen koridorun DİBİNİ doldurur, AĞZINI bırakır"* |
| (3) iki devlet arası boşluğu paylaştırma | 🟢 **VAR — ama KIRPILIYOR** | aşağıda §② |
| (4) Dijkstra prensipleriyle erişim | 🟢 **VAR** | `_kv_dijkstra` (:2238) · çok kaynaklı · kara ızgarasında · **eğim ağırlıklı** |
| "Dijkstra tavanlarını artıralım" | 🔴 **BAYAT DEĞİL — ve TAM İSABET** | §③ |
| topoğrafyaya göre etki alanı (dağ/nehir) | 🟢 kısmen VAR | Dijkstra eğim ağırlığı + nehir/sırt yaslaması |

⇒ **Dört işlevin üçü çalışıyor.** Paket bayat değil ama **teşhisi eksik**:
eksik olan işlev değil, **bir parametre.**

---

## ① 🔴 (2) VE (4) HİÇ EKSİK DEĞİL — kodda adıyla duruyor

`_b3_koridor_kirp`in kendi yorumu, kuralın **ilk yazımının yanlış olduğunu
ve sınavla düzeltildiğini** de kaydediyor:
> *"İLK BİÇİM: `d = çevre/2 − w` … O formül DERİNLİĞİ değil İNCELİĞİ
> ölçüyordu ve her koridor 'derin' görünüyordu. **Emre'nin istediği SIĞ
> GİRİNTİLER de doluyordu** — yani kural amacının TERSİNİ yapıyordu.
> DOĞRU ÖLÇÜ: ağızdan en uzak noktaya olan mesafe."*

⇒ Bu kalem yalnız yapılmamış değil, **bir kez yanlış yapılıp ölçümle
düzeltilmiş.**

---

## ② 🟢 (3) DE VAR — "PAYLAŞTIRMA" ZATEN DIJKSTRA İLE OLUYOR

Motor sahipliği **hücre hücre** dağıtıyor: kara maskesi ızgaraya dökülüyor,
**bütün yerleşimlerden çok kaynaklı Dijkstra** koşuyor, her hücre kendisine
en **ucuz** erişilen yerleşime düşüyor (adım maliyeti gerçek mesafe ×
eğim çarpanı).
⇒ *"İki devlet arasındaki boşluk, erişimi kolay olana verilsin"* —
**tam olarak bu yapılıyor.**

🔴 **AMA SONRA KIRPILIYOR** (`uret_petek.py:1905`):
```python
kes = kara_kesik.intersection(TAVAN_DAIRE[i])
```
Dijkstra'nın verdiği hücre, sahibinin merkezli **200 km yarıçaplı bir
daireyle** kesiliyor. O dairenin dışına düşen toprak **hiç kimseye
kalmıyor** — sahipsizleşiyor.

📌 ⇒ ***Emre'nin gördüğü boşluklar bir PAYLAŞTIRMA EKSİKLİĞİ DEĞİL, bir
KIRPMA SONUCU.*** Paylaştırma zaten yapılmış; sonra kesilmiş.

---

## ③ 🔴🔴 VE SEBEBİ EMRE'NİN KENDİ 2 EYLÜL DENEYİ

`uret_petek.py:900` çevresi, aynen:
```
🔴🔴 EMRE'NİN KARARI, 2 Eylül 2026 — HEPSİ 200 KM.
  "HEPSİ 200 OLSUN, BİR GÖRELİM, SONRA DEĞİŞTİRİRİZ GEREKİRSE."
  ESKİ: {1: 700, 2: 420, 3: 280, 4: 140, 0: 280}
📌 VE BU BİR DENEY: Emre "bir görelim" dedi, "böyle kalsın" demedi.
  Sonuç ölçülüp ona gösterilecek; tavan GERİ ALINABİLİR.
```
Ve damgalı öngörü (`denetim/ONGORU-TAVAN-200.md`, koşudan **önce** yazılmış):
```
kademe  nokta   önce → 200   tavan dairesinin ALANI
k1        259    700          ×0,08     ← EN SERT
k2        210    420          ×0,23
k3       1236    280          ×0,51
k4        679    140          ×2,04     ← tek GENİŞLEYEN
DARALAN 1945 nokta (%74) · GENİŞLEYEN 679 (%26)
```

🔴 **Çağatay ve Altın Orda şehirleri (Semerkant · Buhara · Saray) `k1`/`k2`
kademesindedir** — yani erişim alanı **%92'ye varan oranda** daralan grup.
⇒ ***Emre'nin şikâyet ettiği boşluklar, Emre'nin kendi deneyinin ÖNCEDEN
YAZILMIŞ VE ÖLÇÜLMÜŞ sonucudur.***

🟢 **Ve paketteki kendi sezgisi birebir doğru:**
> *"belki yerleşim yerlerinin Dijkstra tavanlarını artırarak bu problemin
> büyük bölümünü çözebiliriz belki."*

**Evet — ve kaldıraç zaten belgeli:** `TAVAN_KM` geri alınabilir diye
yazılmış.

---

## ④ HÜKÜM VE SIRA

```
🟢 BAYAT (yapılmış, tekrar yapılmaz):
   enklav birleştirme · koridor derinliği kuralı · Dijkstra ·
   topoğrafya ağırlığı · A/B mimarisi ölçümü
🔴 BAYAT DEĞİL, VE SIRADAKİ TEK GERÇEK KALEM:
   TAVAN_KM — 200 km deneyinin SONUCU ölçülüp Emre'ye gösterilecek,
   ve kademeli tavana dönülüp dönülmeyeceğine KARAR VERİLECEK.
   ⚠️ Bu bir KOD değişikliği (`uret_petek.py`) ⇒ koşu bitmeden YAPILAMAZ,
      ve değiştirmek YENİ BİR KOŞU demektir (~16+ saat).
   🔴 ŞU ANKİ KOŞU 7b DE 200 KM İLE KOŞUYOR ⇒ çıktısında AYNI BOŞLUKLAR
      olacak. Bu beklenen, kusur değil.
🟡 GERÇEKTEN AÇIK OLAN TEK MİMARÎ KALEM:
   "iki devlet arası paylaştırma"nın DÜZELTME katmanında yapılması —
   bugünkü B2/B3 tek gövde görüyor. Ama §②'ye göre buna GEREK
   OLMAYABİLİR: paylaştırma zaten Dijkstra'da var, sorun kırpmada.
   ⇒ Önce tavan denenmeli; çözerse ikinci geçişin bu kalemi DÜŞER.
```

## ⑤ ÖLÇMEDİĞİM
```
Tavanı yükseltmenin BEDELİ — 2 Eylül'de "tavan indirimi ek kazanç
   getirmiyordu, ağır bedel bindiriyordu" diye kaydedilmiş; TERS yönün
   bedeli (200 → kademeli) ÖLÇÜLMEDİ. Çöl emilmesi geri gelir mi?
   `COL_PUAN_ESIK` onu tutar mı? ÖLÇÜLMEDİ.
Görseller (15 adet) AÇILMADI — metin yetti, ama Emre'nin işaret ettiği
   belirli boşluklar (2·3·4·5·6·7·8·9·10·11·13·14. resimler) tek tek
   DOĞRULANMADI.
```
