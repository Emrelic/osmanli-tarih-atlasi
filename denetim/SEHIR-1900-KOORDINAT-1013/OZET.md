# 1900 ŞEHİR LİSTESİ — KOORDİNAT VE ATLAS EŞLEŞMESİ (13 Ekim 2026)

Girdi: `denetim/SEHIR-1900-LISTE-1013/LISTE.tsv` (3.267 şehir). Betik: `koordinat.py`.
Çıktı: `LISTE-KOORD.tsv` (LISTE + lat, lon, geonames_id, geonames_ad, fcode, aday_sayisi, koord_yolu,
atlas_en_yakin, atlas_km, eslesme). Veri DEĞİŞMEDİ.

Koordinat kaynağı: **GeoNames `cities1000`** (geonames.org, CC-BY 4.0, 13 Ekim 2026 indirildi).
Yalnız koordinat bulmak için; atlas verisinde KAYNAK SAYILMAZ (CLAUDE.md kaynak kuralı).
Seçim: modern ülke kodu içinde ad eşleşmesi; fcode sırası PPLC > PPLA > PPLA2 > PPLA3/4 > öteki
(liste idarî merkezlerden oluştuğu için), sonra nüfus.

## Sonuç

| eşleşme | sayı | anlamı |
|---|---|---|
| `atlasta` | **1.275** | 3 km içinde atlas noktası var |
| `atlasta-kayik` | 83 | aynı adlı atlas noktası 3–15 km ötede (aynı şehir; nokta GeoNames merkezinden ayrık) |
| `yakin-incele` | 41 | 3–10 km'de FARKLI adlı nokta — Türkçe/eski ad mı, ayrı yer mi elle bakılır |
| `atlasta-yok` | **1.702** | atlasta karşılığı yok |
| `koordinat-yok` | 166 | GeoNames'te bulunamadı (ad yok ya da `bulunamadı` satırı) |

| bölge | kat | atlasta | kayık | incele | atlasta yok | koord. yok |
|---|---|---|---|---|---|---|
| Osmanlı | 1/2/3 | 7 / 105 / 83 | 0 / 7 / 4 | 0 / 4 / 1 | 0 / 12 / 12 | 0 / 10 / 2 |
| Rusya | 1/2/3 | 1 / 75 / 172 | 0 / 4 / 8 | 0 / 2 / 4 | 0 / 15 / 324 | 0 / 1 / 28 |
| Avrupa | 1/2/3 | 19 / 266 / 18 | 0 / 4 / 0 | 0 / 3 / 1 | 4 / 257 / 25 | 0 / 11 / 0 |
| Asya | 1/2/3 | 5 / 139 / 114 | 0 / 20 / 24 | 1 / 8 / 3 | 1 / 113 / 374 | 0 / 5 / 16 |
| Amerikalar | 1/2/3 | 12 / 125 / 11 | 3 / 4 / 0 | 0 / 9 / 0 | 5 / 218 / 139 | 0 / 14 / 22 |
| Afrika | 1/2/3 | 5 / 91 / 27 | 0 / 3 / 2 | 0 / 5 / 0 | 0 / 157 / 46 | 0 / 41 / 16 |

Okuma: Osmanlı coğrafyası büyük ölçüde atlasta (247'nin 206'sı `atlasta` ya da `atlasta-kayik`). Eksiğin ağırlığı Rus uyezdleri (324),
Çin/Hindistan kat 3 (374), Avrupa kat 2 (257, çoğu département/il merkezi), Amerika kat 2–3 (357).

## ⚠️ Bilinen hata kaynakları — sayılar KESİN DEĞİL
1. **Adaş seçimi: 276 satırda** aynı ülkede birden çok aday vardı; seçim fcode + nüfusla yapıldı.
   Görülen yanlışlar: "Saint-Pierre [Fransa]" Marsilya yanına düştü (deniz aşırı olmalı); Cava Kediri'si
   yerine Lombok'taki Kediri seçildi. Bu satırlar `aday_sayisi > 1` ile süzülür ve elle bakılmalıdır.
2. `yakin-incele` 41 satır karışık: aynı şehir (Hyderabad ↔ Haydarâbâd, Kagoshima ↔ Kagoşima, Ürümqi ↔
   Ürümçi) ve ayrı yer (Callao ↔ Lima, Howrah ↔ Kalküta, Recife ↔ Olinda) bir arada.
3. `atlasta` 3 km ölçütü, atlas noktası bir antik/eski merkeze yazılmışsa yanılabilir (pilotta Van–Tuşpa
   4,7 km vakası: orada antik yer AYRI nokta olacak — Emre kararı).

## İşin büyüklüğü
- İlk anılış araştırması **3.267 şehrin hepsi** için gerekir (atlastakilerin çoğu 1281'de başlıyor —
  pilotun ölçümü: 4.300 noktanın 2.447'si).
- Atlasa **yeni nokta** gerekecek şehir ≈ **1.700–1.900** (atlasta-yok + koordinat-yok + incelenecekler).
  ⚠️ Yeni nokta tek başına eklenemez: Değişmez 1 gereği var olduğu her gün bir sahibi (`s:`) olmalı ⇒
  her yeni nokta sahiplik zinciriyle birlikte yazılır.
