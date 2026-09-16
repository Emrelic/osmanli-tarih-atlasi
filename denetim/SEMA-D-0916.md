# ŞEMA — D (kesin koordinatlı sınır) · D1-TURKIYE · 16 Eylül 2026

Tanım: `oturumlar/GORUNUM-ABCD-0916.md` §D. Öncelik `D > C > (A|B)`.
Türetildiği şema: C (`denetim/SEMA-C-0911.md` §8.1, `data/hukuki_sinirlar.js`).
Dosya ↔ ad alanı (§7): `data/d_sinirlar.js` → `window.D_SINIRLAR` ·
D2 `data/d_sinirlar_komsu.js` → `window.D_SINIRLAR_KOMSU` · D3 `data/d_sinirlar_avrupa.js` → `window.D_SINIRLAR_AVRUPA`.

## 1. C'DEN FARKI — iki bulgu

```
C  bir ANTLAŞMA = bir kayıt; hat kaba (cetvel / doğal-tanımsız), kapsama kutusu + yön kuralı
D  bir SINIR PARÇASI = bir kayıt; aynı antlaşmanın parçaları FARKLI kesinlikte ve FARKLI
   tarihte değişmiş olabilir (Türk-İran: 1913 hattı + 1932'de değişen 3 kesim + 1937)
```
- **Parça birimi zorunlu**: D1 ölçümünde tek bir komşuluk (Türkiye–İran) üç ayrı hükme ayrıldı.
- **"Bugünkü geometri" bir dayanak DEĞİL, bir VEKİLDİR** — kullanılabilirliği ayrı bir
  `degisti` alanıyla, kaynağıyla birlikte beyan edilir (şartname md.3).
- **Tahdit ≠ işaretleme**: 29 Ekim 1923'te pek çok hat METİNLE belirliydi ama yerinde
  işaretsizdi (Yunanistan 1925-26, SSCB 1925-26, Suriye 1926-30). `tahdit` alanı bunu taşır.

## 2. ALANLAR

```js
{
  id: "d1923-tr-ir-2",                    // ZORUNLU, benzersiz; çok parçalıysa -N soneki
  taraflar: ["tbmm-turkiye", "kacar"],    // ZORUNLU, devletler.js künye id'leri (C ile aynı kural)
  f: "1920-04-23", t: "1923-10-29",       // ZORUNLU, geçerlilik (A/B d:/s:/v: biçimi)
  kategori: "D",                          // ZORUNLU: D | C | fiili | D-YOK
                                          //   C      belge kaba (D yoksa C katmanı gibi çizilir)
                                          //   fiili  hukukî hat YOK (şartname md.4) — fiilî durum vekili
                                          //   D-YOK  bu KUTUDA D çizilmez: bugünkü çizgi o tarihi göstermez
  sol_taraf: "kacar",                     // `hat` ilerleme yönüne göre SOLDA kalan devlet (render)
  hat: [[lon,lat], ...],                  // D/C/fiili'de ZORUNLU, D-YOK'ta null
  kutu: [lon0,lat0,lon1,lat1],            // D-YOK'ta ZORUNLU
  uzunluk_km: 47.1,
  geometri_kaynagi: "Natural Earth 10m admin-0 (bugünkü sınır) — …",
  degisti: { deger: false|true|null, kaynak: "IBS 28", not: "…" },   // 29 Ekim 1923 → bugün
  tahdit:  { t: "1914-10", not: "…" },    // yerinde işaretleme tarihi (1923'ten SONRA olabilir)
  kesinlik_km: 2.0, kesinlik_not: "…",    // ÖLÇÜLMEMİŞSE bunu söyler
  dayanak: [ { ad, madde, tarih, tur, kaynak|url, sayfa, alinti } ],  // ZORUNLU, ≥1; alıntı ≤15 kelime
  not: "…",
  kiyas_atlas: { ornek, ortanca_km, p90_km, enkotu_km, le5_yuzde }   // üretici yazar
}
```
🔴 `degisti.deger:null` "bilmiyorum" demektir — `false` yazılmaz (D107; SINIR-ANADOLU dersi).
🔴 `kategori:"fiili"` bir D değildir; renderer onu D gibi keskin çizmemeli (UI kararı).

## 3. RENDER İÇİN (UI oturumuna — yazmadım)

- `hat` bir polyline; tarafı `sol_taraf` belirler (C'deki `negatif_taraf` karşılığı, nokta sırası
  ÜRETİCİDE sabit — orta noktadan 3 km sola bakılıp `tr1923` poligonuna soruluyor).
- `D-YOK` kutusu içinde D çizilmez; A/B geçerli kalır.
- D varsa aynı parça için C (`HUKUKI_SINIRLAR` `*-1923` kayıtları) çizilmemeli — öncelik kuralı.

## 4. AÇIK SORULAR

1. `fiili` kategorisi D katmanında mı çizilsin, C'de mi? (Öneri: D katmanında ama kesik çizgi.)
2. `D-YOK` kutusunun sınırları TAHMİNİ (±10 km). 1913 protokol haritası okunursa kutu hatta dönüşür.
3. Meriç talvegi 1926'dan bu yana kaymış olabilir — nehir parçaları için `degisti:false` bir
   HUKUKÎ hükümdür, geometrik değil.
