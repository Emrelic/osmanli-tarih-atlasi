# DÖRT KATMAN — Emre'nin 3 Eylül 2026 talebi ve ÖLÇÜLMÜŞ durumu

> **Emre:** *"Coğrafi katman ismi ile bir buton yapıp katmanları üst
> üste koyabilmeliyiz ve ilk katmanda bu olmalı. İkinci katman
> yerleşim yerleri, üçüncü katman koridor ve yollar, dördüncü katman
> siyasî yapılar — ve bu siyasî yapılara göre renklendirme ile siyasî
> harita katmanını en üste koyacağız."*

🔴 **Bu belge bir ÖLÇÜMDÜR, tahmin değil.** Sayılar 3 Eylül 19:30'da
`data/` ve `veri-kaynak/` okunarak alındı.

---

## ① COĞRAFYA KATMANI — 🔴 EN EKSİK KATMAN

```
VAR — data/altlik.js (ÜRETİLMİŞ · arac/uret_altlik.py)
   nehir        1454 öğe
   dag_alan      205 öğe
   göl             1 (birleşik poligon)
   kara            1 (birleşik)
   nehir_motorun  43 · sirt_motorun 205   (motorun yaslandığı hatlar)
```
```
🔴 HİÇ VERİ YOK — Emre'nin saydıklarından altısı
   çöl · orman · bataklık · bozkır · ova · yayla · vadi
🔴 YÜKSELTİ / RAKIM — veri VAR, KULLANILMIYOR
   veri-kaynak/yukseklik/etopo2022_30s_dunya.tif
   veri-kaynak/yukseklik/etopo2022_30s_atlas.tif
   ⇒ ne `js/app.js` ne `arac/uret_altlik.py` bu dosyaları okuyor
   ⇒ haritada hiçbir yükselti gölgesi/renklendirmesi YOK
🟡 BİYOM KAYNAĞI VAR, KATMANA GİRMİYOR
   veri-kaynak/ne_10m_geography_regions_polys.geojson
   yalnız `arac/olc_denizasiri/olc_topografya2.py` (bir ÖLÇÜM betiği)
   okuyor; `uret_altlik.py` HİÇ okumuyor
```

⇒ **Bugünkü coğrafya katmanı = su + dağ sırtı.** Fizikî atlas için
gereken **yükselti** ve **arazi örtüsü** yok.

### YAPILACAK — üç ayrı iş
```
1.1 YÜKSELTİ  etopo2022 → hipsometrik renk bantları ya da hillshade
              🔴 sahibi: uret_altlik.py (Oturum 0) + app.js (Oturum 1)
              ⚠️ TIF 30 arcsec — dünya için büyük; kademeli çözünürlük
                 ya da önceden üretilmiş raster gerekir
1.2 BİYOM     ne_10m_geography_regions_polys → çöl · orman · bozkır …
              ⚠️ ÖNCE ÖLÇ: o dosya hangi sınıfları taşıyor? Emre'nin
                 saydığı yedi sınıfın kaçını karşılıyor?
              🔴 Ve `§4`: modern biyom sınırları 1281-1923 için
                 ANAKRONİK olabilir — Sahra'nın sınırı değişti.
                 Bu bir KARAR gerektirir, veri işi değil.
1.3 VADI/OVA/YAYLA  ne_10m'de KARŞILIĞI YOK — başka kaynak gerekir
```

---

## ② YERLEŞİM KATMANI — 🟡 bu dalgada bitiyor

```
3 Eylül 19:30: 2843 nokta (Okyanusya indi)
bekleyen: K.Amerika 377 · Afrika 389+ · G.Amerika ~118 · Sibirya 80+
⇒ dalga bitince ~3800
```
Dünya boşluğu (2° ızgara · tavan 200 km): **2005 / 3769 açık (%53,2)**
→ bölgesel ölçümler uygulandığında Afrika %3,4 · K.Amerika %5 ·
Okyanusya %30 · Sibirya %34 · G.Amerika %40.

🔴 **VE ZAMAN KESİTİ AYRI BİR BORÇ** (`DUNYA-YERLESIM-PROGRAMI §⑧`):
ölçüt `kur:`a bakmıyor; 1400 kesitinde boşluk çok daha büyük.

---

## ③ KORİDOR / YOLLAR — 🔴 NEREDEYSE HİÇ

```
data/koridor*.js — TOPLAM 262 kenar
   KORIDOR_H2B_KENAR 53 · KORIDOR_HALKA2_KENAR 10 · ötekiler nesne
🟡 KAYNAK VAR, KULLANILMAMIŞ:
   veri-kaynak/viabundus/Viabundus-1.3-Edges.geojson
   (Kuzey Avrupa yol ağı, 1350-1650, hakemli)
   + Viabundus-1.3-Town_Outlines.geojson
```
⇒ Dünya ölçeğinde bir yol ağı **yok.** İpek Yolu · Trans-Sahara ·
hac yolları · Osmanlı menzil teşkilâtı — hiçbiri veride değil.

---

## ④ SİYASÎ KATMAN — 🟢 EN İLERİ

```
künye        587  (441 → 587, 3 Eylül)
renk         406 BOYALAR + bu turda ~148 daha gelecek
kronoloji   1303 madde
gövde        data/donemler.js · petek_govde.js · devletler_harita.js
             (üretilmiş, koşu 3 · 18:04)
```
🔴 Borçlar: 1374 dönem künye ömrü dışında (`BULGU-OMUR-KAPISI-0903.md`)
· `v:` yalnız Osmanlı tâbiiyetini ifade edebiliyor (`MIMARI §3.6`).

---

## ⑤ KATMAN DÜĞMELERİ — 🟡 mekanizma VAR, ARAYÜZ YOK

```
js/app.js `setLayoutProperty(..., "visibility")` ZATEN kullanılıyor:
   :804  altlık aç/kapa
   :5828 veri-sınırı çizgisi
   :5845 koridor katmanı
```
⇒ Aç/kapa **mekanizması kurulu.** Eksik olan, Emre'nin istediği
**dört katmanlı sıralı düğme seti** ve **z-sırası**:
```
1. COĞRAFYA   (en altta)
2. YERLEŞİM
3. KORİDOR / YOLLAR
4. SİYASÎ     (en üstte — renklendirme burada)
```
🔴 **Sahibi Oturum 1** (`js/app.js` · `css/style.css`) — ayrı bir sevk
gerektirir. Bugün açık bir arayüz oturumu YOK.

---

## SIRA ÖNERİSİ — `ONCELIK.md` çöl seyyahı ile
```
① bu dalga insin (yerleşim + siyasî)         — DEVAM EDİYOR
② KATMAN DÜĞMELERİ — arayüz oturumu          ← en ucuz, en görünür
   mekanizma zaten var; iş düğme + z-sırası
③ YÜKSELTİ (etopo2022)                       — coğrafyanın en büyük eksiği
④ BİYOM (ne_10m_geography_regions) + ANAKRONİ KARARI
⑤ KORİDOR — viabundus ile Kuzey Avrupa, sonra dünya
```
