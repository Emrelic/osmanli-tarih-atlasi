# KRONO-AMERIKA-G-0929 — Güney Amerika kronolojisi · teslim raporu (29 Eylül 2026)

Model Sonnet 5.5 (`§3.1 ③` yakınlık kuralı — keskinlik hedefi %80, doğruluk hedefi %100).
Dosya: `data/kronoloji_cok_guney_amerika.js` → `window.KRONOLOJI_COK_GUNEY_AMERIKA` (**98 madde**).
Üretici (veri tek yerde): `denetim/ARAC-KRONO-AMERIKA-G-0929-URET.py`. Ölçü araçları: `…-KONTROL.py` (künye penceresi) ·
`…-SINIF.py` (aday sınıflaması) · `…-OLC.py`.

## 1. Ölçtüğüm (sayıyla)
| Ölçü | Değer |
|---|---|
| Madde | **98** (kuruluş 30 · savaş 16 · isyan 11 · antlaşma 8 · son 6 · işgal 5 · …) |
| Künye penceresi ihlali (M-5416 kural 2) | **0** — her madde, `t` gününde VAR olan künyeye bağlı |
| Odak (`odak_olc.py`) | **67 çözülen / 31 odaksız · 0 kırık atıf** (kırık atıf listesindeki 2 satır BENİM değil: Kuzey Amerika `Tucson`, Doğu Afrika `Ogaden`) |
| `denetle.py` | **SONUÇ: temiz** (12 dk 55 sn; dosya `index.html`e bağlı değil, evren dışı) |
| `node --check` | temiz |
| Defter (`SENKRON-DEFTER-0929`, 16:39 damgalı) | `PAKETSIZ:guney-amerika` net aday **232 → 201** (defter bu paketin ilk sürümünü sayıyor; son sürümü DEĞİL — yeniden koşturulmalı) |
| Kaynak | TDV bu coğrafyayı kapsamaz; her kayıtta yazar+eser açık. **Sayfa numarası doğrulanmadı** (her `kaynak:` alanında yazılı) |

## 2. 🔴 Ana soru — gerçek mi, artefakt mı, ölçülemedi mi? (201 net aday grubu, defter 16:39)
```
A  YAZILDI (madde ±30 gün içinde)                                   16 grup
B  ARTEFAKT  kasıtlı-boşluk "Beyan G.. B.." noktaları               19 kayıt (Mapuche/Pampa 1725·1883·1828) — 1725'i maddeledim
C  YIL-TEMSİLÎ (gün kaynaksız, `-01-01`)                            58 grup / 87 kayıt — gün UYDURULMADI
D  GERÇEK ama düşük önemli yerleşim KURULUŞU (madde yazılmadı)      126 grup   (liste: …-SINIF-LISTESI.txt)
E  ÖLÇÜLEMEDİ — devir, eşleşen madde yok                            1 grup: 1888-07-13 Bolivya→Şili (San Pedro de Atacama, Tocopilla)
```
**Okuma:**
- Açık **255 kayıtın 218'i (%85) `—→X`**: siyasi devir değil, yerleşimin KENDİ doğumu (şehir/misyon kuruluşu). Bunların
  Brezilya tarafındaki günleri yerleşim girdisinde IBGE atfıyla duruyor; ben yeniden doğrulamadım ⇒ `%80` hedefi gereği
  yalnız önemli olanları (Cartagena, Arequipa, Potosí, La Paz, Concepción, Caracas, Buenos Aires, São Paulo, Rio, Belém,
  Colonia, Vila Rica, Cuiabá, Montevideo, Punta Arenas, Ushuaia…) yazdım; **126 grup yazılmadı, bilerek**.
- **Gerçek siyasi devir 17 grup: 16'sı yazıldı, 1'i ölçülemedi** (1888-07-13; atlas günü 1884 Valparaíso mütarekesinden
  4 yıl sonra — bkz. DUZELTME §5).
- **Noktasızlık artefaktı ölçtüğüm yerde YOK, ama iki başka artefakt sınıfı çıktı (asıl bulgu):**
  1. **Künyesiz valilik boyaması — 32 kayıt `ispanyol-peru`.** Yeni Granada, Venezuela, Quito, Río de la Plata topraklarındaki
     BÜTÜN bağımsızlık kırılmaları "eski sahip: Peru Genel Valiliği" diye görünüyor; oysa 1739'dan beri Yeni Granada,
     1776'dan beri Río de la Plata ayrı valilikti. Devir GERÇEK, "eski sahip" etiketi YANLIŞ. Çare künye (`KUNYE.md`).
  2. **Künye penceresi artefaktı:** `ispanyol-peru` künyesi 1824-12-09'da bitiyor ama harita Charcas'ı (Bolivya, 5 yerleşim)
     1825-08-06'ya, Chiloé/Callao'yu 1826'ya kadar bu künyeyle boyuyor (D205 sınıf ②: künye kısa). Ayrıca 1533-1540
     arası 5 grup (Cartagena, Trujillo, Guayaquil, Sucre, Arequipa) künye `f:`inden (1542) ÖNCE `ispanyol-peru` boyalı.
- **Mükerrer önleme:** künyelerin gömülü kronolojisinde (`devletler.js`) aynı olayın kaydı ZATEN vardı (Angostura, Carabobo,
  Şili 1818, Paraguay 1811, Üçlü İttifak, Antofagasta/Lima/Ancón, Altın Kanun, Guyana…) — 22 madde bu yüzden YAZILMADI
  (ORTAK §5.1). Gün yıl düzeyindeyse ya da olay yeni devletin künyesinde zaten varsa (Tucumán, Angostura, Carabobo, Uruguay, Ekvador) kaydı **kaybeden künyeye** bağladım
  (`ic_not_d` yazılı) ki Değişmez 2 kapısı kapansın, yeni devletin çizgisinde iki kez görünmesin.

## 3. Bulamadım (`bulunamadı` bir sonuçtur)
- Sayfa düzeyinde kaynak: yok — tarihler standart tarihyazımı düzeyinde (Lynch · CHLA · Bethell · Whigham · Sater · Rock …).
  Yüksek güvenle yazdıklarım major olaylar; **Villarrica 1883-01-01 (Şili)**, **Oruro 1606-11-01**, **Potosí 1545-04-01**,
  **Cuiabá 1719-04-08**, **Belém 1616-01-12**, **Chiloé 1826-01-15**, **Callao 1826-01-23**, **Peru–Bolivya Konfederasyonu 1836-10-28**
  günleri için ilk kaynak okuması gerekir (sayfa doğrulama listesi). Doğrulanmamış günleri `gun:` alanı işaretler.
- Ledger'daki 126 yerleşim kuruluşu ve 58 yıl-temsilî grubun günü: yazılmadı, uydurulmadı.
- 1811-1825 arası Şili/Peru yurtsever hükûmetlerinin künyeleri yok (Junta dönemi `ispanyol-peru`ya bağlı).

## 4. İstediğim / önerim
1. **Künye:** `denetim/KRONO-AMERIKA-G-0929-KUNYE.md` — 4 künyesiz id (98 maddenin 10'u bunlara bağlı) + 2 pencere düzeltmesi.
2. **Düzeltme hükmü:** `…-DUZELTME.md` — künye gömülü kayıtlarında 14 gün/yıl hatası (Boyacá, Tucumán, Bolivya, Uruguay,
   Ekvador, Túpac Amaru "bastırıldı"…) + `kronoloji_portekiz.js` Salvador günü. Hüküm sizde.
3. **Yerleşim:** `…-YERLESIM-ONERI.md` — 11 aday nokta (Antofagasta, Iquique, Tacna, Arica, Valparaíso…), koşu sizde.
4. `index.html`e satır + `arac/paketle.py` — sizde; dosya bağlanana kadar **sitede görünmez** (arıza değil).
5. Ledger'ı yeniden koşturun; benim son sürümüm 16:39'dan sonra kesinleşti.
6. Devamı: **126 kuruluş grubu** istenirse ayrı, kaynak-doğrulamalı bir paket olur (IBGE/Biblioteca Nacional okuması gerekir).

## 5. Yatay — ATLANTIK-B ile çakışma riski
`1667-07-31 Breda Antlaşması` (Surinam → Hollanda) benim dosyamda `hollanda-guyanasi`na bağlı; metropol tarafı
(ATLANTIK-B) aynı olayı yazarsa `t`+`b` ayrışabilir. Bende tek kopya; onlara söylenmedi (tahta tasarrufu).
