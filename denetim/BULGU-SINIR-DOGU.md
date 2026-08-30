# SINIR YERLEŞİMİ — DOĞU KOLU · ölçüm raporu

**Oturum:** HAZIR KITA OPUS 85 · **Tarih:** 30 Ağustos 2026
**Kol:** Ermenistan · Gürcistan (SSCB) + İran (Kaçar)
**Dosya:** `data/yerlesimler_sinir_dogu.js` (dizi KASTEN BOŞ — aşağıda niçin)

---

## 1. TABAN — vekil değil, gerçek sınır poligonu

`veri-kaynak/ne_10m_admin_0_countries.geojson` · TUR sınırı ~2 km'de bir
örneklendi · komşu poligona <1,5 km olanlar KARA sınırı sayıldı.

```
543 örnek ≈ 1086 km hat    (GEO 290 · ARM 300 · IRN 486 · AZE 10 km)
sapma = |d(örnek, en yakın YABANCI) − d(örnek, en yakın OSMANLI)| / 2
```

| | ortanca | en kötü | ≤5 km | ≤10 km |
|---|---|---|---|---|
| **TABAN** | **6,37 km** | 22,9 km | %35 | %77 |
| GEO | 4,30 | 9,7 | %63 | %100 |
| ARM | 7,90 | 20,1 | %22 | — |
| IRN | 8,40 | 19,9 | %27 | — |
| AZE | 21,9 | 22,9 | %0 | — |

⚠️ Etiket: **"BUGÜNKÜ sınıra sapma"**, 1923'e değil.

🔴 Koordinatörün vekili (*"en kötü sapma = çift mesafesinin yarısı"*) bu kolda
~35-75 km öngörüyordu. Gerçek ortanca **6,37 km**. Vekil bir ÜST SINIRDI.

---

## 2. İKİ ÖLÇÜLMÜŞ KURAL

**A. Tek taraflı ekleme sapmayı BÜYÜTÜR** — kural ②'nin sayısı:
```
+Çıldır tek   6,37 → 6,83      +Nehrî tek   6,37 → 7,01
```
`sapma = |dB−dA|/2` ⇒ bir yakayı sınıra yaklaştırmak bisektörü karşı yakaya
iter. Kural değil, **teorem**.

**B. Çift olmak yetmiyor — SİMETRİK olmalı:**
```
🟢 Çıldır ↔ Kartsakhi     6,37 → 6,18
🟢 Aralık ↔ Sardarabad    6,37 → 5,67   (en kötü 22,9 → 18,8)
🔴 Nehrî  ↔ Uşnu          6,37 → 6,83   çift AMA simetrik değil (20 km ↔ 30 km)
```

---

## 3. NİÇİN DİZİ BOŞ — üç bağımsız engel

| engel | durum |
|---|---|
| **KİMLİK** — `rusya` künyesi 1917-03-15'te bitiyor, 344 kayıt aşıyor | küresel partiye sevk (M-1818: bekle) |
| **ARTEFAKT** — Iğdır-Aralık-Dilucu'da 1932 düzenlemesi şüphesi | ÖLÇÜLEMEDİ kovası |
| **KOORDİNAT** — yabancı yakadaki köylerde ±3-5 km, hedef 5 km | kaynak yok |

**Kimlik kapanma testi** (Voronoi komşuluğu = orta nokta testi, alt sınır):
```
27 (koridorum) → 260 kayıt · 32 turda
Finlandiya (Vaasa·Oulu·İnari) → Baltık (Tallinn·Riga·Vilnius) → Ukrayna → Kafkasya
⇒ bölgesel dönüşüm İMKÂNSIZ
```

**Koordinat kaynağı taraması** (bugün yapıldı, tekrar aranmasın):
```
veri-kaynak/    admin_0 · land · lakes · rivers · geography_regions · motor_kara
                yukseklik/ (ETOPO2022) · viabundus/
Viabundus Town_Outlines: 1092 kasaba · 48,72–60,72 K · 2,12–31,30 D
   ⇒ KUZEY AVRUPA. Hiçbir Türkiye sınırına değmiyor (Balkanlara bile:
     en güney 48,72 K, Belgrad 44,8 K). Bu kol için KULLANILAMAZ.
depoda populated_places / gazetteer benzeri katman: YOK
```

---

## 4. 🟢 HEDEF BÖLGE LİSTESİ — koordinat kaynağı olan oturum için

*"Nokta lazım"* isteği burada **koordinatı belli hedeflere** çevrildi.
Her satır: bisektörü gerçek sınıra oturtacak **ideal eş konumu**.
Soru artık *"nereye nokta koyalım"* değil, **"şu konumda gerçek bir
yerleşim var mı"** — gazetteer'ı olan bir oturum bunu mekanik cevaplar.

### En yüksek kazançlı 12 hedef

| yaka | konum | örnek | en kötü | bugünkü çift |
|---|---|---|---|---|
| ARM · **yabancı** | 40,25K 43,75D | 16 | 18,0 km | Digor ↔ Gümrü |
| ARM · **yabancı** | 40,50K 43,50D | 11 | 15,4 km | Digor ↔ Gümrü |
| ARM · **yabancı** | 40,25K 43,50D | 5 | 18,9 km | Digor ↔ Gümrü |
| ARM · **yabancı** | 40,00K 44,00D | 12 | 9,8 km | Iğdır ↔ Eçmiyadzin |
| ARM · osmanlı | 40,75K 43,75D | 15 | 12,0 km | Arpaçay ↔ Gümrü |
| ARM · osmanlı | 40,00K 44,50D | 14 | 6,5 km | Iğdır ↔ Eçmiyadzin |
| IRN · **yabancı** | 37,75K 44,50D | 24 | 15,2 km | Yüksekova ↔ Selmâs |
| IRN · **yabancı** | 38,00K 44,25D | 18 | 17,9 km | Başkale ↔ Selmâs |
| IRN · osmanlı | 38,50K 44,25D | 13 | 12,9 km | Özalp ↔ Kotur |
| IRN · osmanlı | 38,25K 44,50D | 10 | 18,8 km | Özalp ↔ Kotur |
| GEO · **yabancı** | 41,50K 42,75D | 17 | 9,7 km | Posof ↔ Hulo |
| GEO · **yabancı** | 41,50K 41,50D | 7 | 7,9 km | Sarp ↔ Batum |

⚠️ AZE (39,75K 44,75D · 5 örnek · 22,9 km) listeye ALINMADI — 1932
artefakt şüphesi orada, ölçülmeden nokta yazılmaz.

---

## 5. ADAY YOK — ve bu bir sonuçtur

Koordinatı **±5 km'den kesin** bildiğim ve simetrik çift kuran bir aday
aradım, bulamadım:
```
yabancı yakada emin olduğum yerleşimlerin HEPSİ VERİDE ZATEN VAR
   Gümrü · Batum · Ahıska · Ahılkelek · Nahçıvan · Culfa · Eçmiyadzin
   Hoy · Selmâs · Urmiye · Mâku · Kotur · Serdeşt · Şerur
Türk yakasında ilçe merkezleri (koordinat güveni yüksek) tek tek sınandı:
   Çıldır 6,83 · Aralık 6,70 · Kağızman 6,37 · Tuzluca 6,37 · Damal 6,62
   Susuz 6,37 · Şemdinli 7,01        ⇒ HİÇBİRİ ortancayı DÜŞÜRMÜYOR
```
🔴 **Ve bir adayımı kendim çürüttüm:** "Akyaka" diye 40,745/43,635'i
denedim ve ortancayı 6,17'ye düşürdü — sonra fark ettim ki Akyaka,
veride zaten duran **Arpaçay (Akyaka)**'nın kendisi (40,845/43,325) ve
koordinatı **28 km yanlış** girmişim. Sonuç ATILDI.
📌 Kolun tek "iyileştiren" adayı, uydurma bir koordinattan doğmuştu.

---

## 6. YAN BULGULAR

- **Sarp** kaydı (41,520K 41,545D) bugünkü **Gürcistan** poligonunun
  içinde kalıyor — kutudaki 69 kaydın tek uyumsuzu. Sınır değişikliği
  değil, 1921'de ikiye bölünmüş köyün ~200 m'lik kenar meselesi.
  Düzeltme ÖNERMİYORUM: kendi koordinat güvenim ±1-2 km, yani
  öneriyi sınayacak hassasiyetim yok.
- **`digor`** ve **`kagizman`** TDV slugları: `-L` ile HTTP 200 dönüyor
  ama başlıkları *"Arama - TDV İslâm Ansiklopedisi"* ⇒ ÖLÜ (§4 tuzak ①).
- **`igdir`** ÖLÜ, **`igdir--sehir`** CANLI — `--sehir` deseninin bir vakası.
- **`demirkapi`** CANLI ve başlığı doğru ama **YANLIŞ MADDE**: Baysun/
  Termez yakınındaki Orta Asya Demirkapısı. Derbend için doğrusu
  **`derbend--dagistan`** (§4 tuzak ②'nin beşinci vakası).
- TDV'de **1932 Türkiye-İran sınır düzenlemesi** aranıp bulunamadı:
  `dogubayazit` (10.574) · `igdir--sehir` (11.895) · `agri` (7.104) ·
  `iran` (10.820) — dördü de canlı, dördünün de gövdesi okundu.
