# KIRIM-ODAK-A-1006 — devlet sekmesinde gövdesi olmayan künye: sessiz dönüş yerine tâbi/kimlik kutusu

Görev: UMIT-W37 paketi ⑤ (UMIT İRTİBAT). Kaynak: `denetim/UMIT-W43-KIRIM-TABI-1006.md` (öneri A).
Temel commit **origin/main `481b0482`** · ağaç `C:\atlas-w37e` (atılabilir).

app.js uygulama sırası:
1. `KRONO-EZILDI-1006`
2. `KRONO-EZILDI-1006b`
3. `KRONOLOJI-COK-1006`
4. `KRONOLOJI-COK-1006b`
5. `APP-KISI-BASLIK-1006`
6. **bu paket**

## 0. ÖNGÖRÜ — ölçmeden ve kod yazılmadan ÖNCE mühürlendi
- **A, `odak_olc`un BEYANLI→yabancı sayısını DEĞİŞTİRMEZ.** O sayı `haritayiOlayaGotur` yolunu (Osmanlı kutusu)
  ölçer; A ise yalnız devlet sekmesi dalını (`maddeAc` → `devletiYay`) değiştirir.
  - Toplam **563 → 563**. Bu sayı COK-ODAK veri diff'i uygulanmış ağaçta; çıplak main'de 653.
  - `kronoloji_kirim.js` **15 → 15**.
  - ⇒ "A düşük çıkarsa ikisi birlikte iner" şartı A için **anlamsız**: A o sayıya dokunmaz. O sayıyı yalnız B
    (veri, 15 → 3) indirir.
- Sekme dalında yeni ölçüt **SESSİZ**: gövde yok + odak yok + tâbi/kimlik kutusu yok ⇒ kamera kıpırdamaz ve hiçbir
  şey söylenmez.
  - Kırım: **12 → 0**. W43 her gün 12-25 tâbi yerleşim ölçmüştü.
  - Bütün künye sekmeleri: önce **60 ± 40**, sonra önceki değerin **yarısından az**. Tahmin; evren ilk kez
    ölçülüyor.
- Düşürme (A'nın da kutu kuramadığı madde): sayılır ve konsola basılır; 0 değil, > 0 bekliyorum.

### Öngörü tuttu mu
| öngörü | ölçülen | |
|---|---|---|
| BEYANLI→yabancı 563 → 563 · kirim 15 → 15 | **563 · 15** | ✓ |
| Kırım SESSİZ 12 → 0 | 12 madde → **TABI_KUTU 12**. Kırım'da kalan SESSİZ 1: 1792, künye bitişi 1783'ten sonra; W13 "dışı" vakası, delik değil | ✓ |
| bütün sekmeler SESSİZ önce 60 ± 40 | **130** (SESSİZ 116 + TABI_KUTU 14) | ✗ ölçek tutmadı |
| sonra önceki değerin yarısından az | **116** (−14, %11) | ✗ TUTMADI. A yalnız tâbi-çizili künyeyi kurtarıyor; geri kalan 116 künyenin o gün **hiç** yerleşimi yok (≥2 şartı) |
| düşürme > 0 | 116, sayılıp basılıyor | ✓ |

## 1. Kod
### `js/app.js`
- `devletiYay` artık `true/false` döndürüyor. Eski 4 çağıran dönüşü okumuyor; davranışları aynı.
- Devlet sekmesi dalında gövde yoksa `maddeOdakKutusu({t, gi, odak_kimlik:[d.id]})` çağrılıyor. Bu, `odak_kimlik`
  ile AYNI çözücü (SUZGEC, tâbi yerleşimini sayar, ≥2 şartı).
- O kutu da kurulamazsa:
  - `SEKME_ODAK_DUSEN` sayacı artar ve konsola künye + gün basılır;
  - panele "📍 Bu tarihte <devlet> haritada çizili değil — harita yerinde kaldı." yazılır.
  - Eski sessizlik bitti.

### `arac/odak_cozum.js`
- AYNI dal, her dosya için yeni `sekme` alanında ölçülüyor: `GOVDE / KUTU / TABI_KUTU / SESSIZ / OLCULEMEDI`, ayrıca
  `sekme_sessiz` listesi (künye · t · b).
- Künye eşlemesi app.js kuralıyla: ad eşlemesi, yoksa taraflar.
- `DEVLET_HARITA` diskte yoksa `OLCULEMEDI` döner, "temiz" SAYILMAZ.
- `odak_olc.py` bu alanı henüz BASMIYOR. Araç benim değil; okuyucu tarafı sahibine öneri.

## 2. Ölçüm — `sekme` (bütün odak evreni, COK + odak verisi uygulanmış ağaç)
`GOVDE 534 · KUTU 104 · TABI_KUTU 14 · SESSIZ 116 · OLCULEMEDI 0`

En çok SESSİZ künyeler:
- iran 16 · kilikya-ermeni 9 · macaristan 8 · selcuklu 6 · zeta 6 · dulkadir 5 · karadag 5 · evfat 5 · karaman 3 ·
  fransa 3 · norse-gronland 3 · …
- `iran` 16 = `KRONOLOJI_IRAN` dosyası Pehlevi künyesine (1925+) bağlı; maddeleri 1295-1923 arası (W26 §2.2'nin 107
  maddelik eşleme kusuru). A bunu ÇÖZEMEZ, çünkü kusur künye seçiminde.
- `karadag` / `zeta`: künye o gün haritada hiç yerleşim taşımıyor. COK-ODAK'ın düşen 55'iyle aynı sınıf.

## 3. Sınav — `denetim/ARAC-KIRIM-ODAK-A-1006-SINAV.js <app.js>` (app.js'in GERÇEK metninden kesit)
- **Sonra 7/7 · önce 0/4.** Önce: `devletiYay` `undefined` döndürüyor, geri düşüş bloğu yok.
- Sınanan durumlar:
  - gövde var → `true` + fitBounds
  - dönem yok → `false`
  - id yok → `false`
  - gövde yok + kutu var → kutuya uçar (`odak_kimlik:["kirim"]`, `gi` geçer)
  - gövde yok + kutu yok → sayılır, konsol + panel
  - gövde varken geri düşüş ÇAĞRILMAZ

## 4. Not
A, `haritayiOlayaGotur` dalının (Osmanlı kutusu) kusurunu DÜZELTMEZ. O dal künye kimliğini bilmiyor. Kırım'ın
BEYANLI→yabancı 15'i için B (veri, `odak_kimlik:["kirim"]`) gerekir; B'yi kronoloji_kirim.js sahibi yazar. A ve B
çelişmez.
