# ROMA-DOGU-AKDENIZ-1113 — Roma şehir zincirleri, Doğu Akdeniz kümesi (ilk dilim)

Tarih: 13 Kasım 2026 · Dal: `emrelic-1113-roma-dogu-akdeniz` (Roma dalının tepesinden) · Ağır araç (denetle, renk_olc, denetle_yayin, ceviri) KOŞTURULMADI.
Ölçüm: `arac/girdi.yukle()` ile bu worktree; bbox lat 29–42 / lon 19–38, MS 150-01-01'de `s:` dönemi olmayan ya da `__BOSLUK__` olan yerleşim.

## 1. Ölçüm (önce → sonra)
| Ölçüt | Önce | Sonra |
|---|---|---|
| MS 150'de dönemi olmayan/`__BOSLUK__` yerleşim (bbox; Anadolu batısı dahil) | 567 | 559 |
| Doldurulan (kaynaklı Roma zinciri) | — | 8: Antakya, Halep, Hama, Humus, Beyrut, Sayda, Selanik, Hanya |
| Yeni kronoloji maddesi (`data/kronoloji_sinir_antik_roma.js`) | 26 | 48 (+22) |
| Yeni dönemlerde çakışma / sıfır uzunluk / künye aşımı / bilinmeyen kimlik | — | 0 (betikle; kalan uyarılar eski kayıtlara ait) |

Kalan 559'un kırılımı ölçülmedi (bbox Anadolu batısı ve Trakya'yı da içerir; o kısım başka kümenin işi). Listeler scratchpad'de (liste.txt); çoğu ilk dönemi 1000/1281 sonrası olan ortaçağ yerleşimi ya da `s:`siz harabe/höyük/bölge kaydıdır.

## 2. Yazılan zincirler (hepsi mevcut künye kimlikleriyle; yeni kimlik yok)
- **Antakya**: roma-cumhuriyeti -0063 (TDV antakya: MÖ 64 Pompeius, Selefkî Devleti sonu) → roma-imp -0026-01-16 → bizans 395-01-17 → 638 (TDV: «teslim oldu (638)») → beyanlı `__BOSLUK__` → 968 (mevcut).
- **Halep, Hama**: ABİ MERKEZ Antakya (Selefkî şehirleri Beroia/Epifanya; TDV Halep, TDV Hama) ⇒ aynı Roma zinciri; Arap fethi: Halep 16/637 (TDV), Hama 15/636 (TDV) — hicrî ∩ miladî yılının ilk günü (tabular, ±2 gün) 637-02-02 / 636-02-14, `ic_not`ta beyanlı; sonra beyanlı boşluk (Halep→944, Hama→1135).
- **Humus**: TDV humus--suriye «milâttan önce 64'te Pompeius döneminde Roma'ya katılmıştır» → imp → bizans → 16/637 (637-02-02) → boşluk (→1000). TDV'nin 14/635 ve 15/636 anlatıları beyanda.
- **Beyrut**: TDV beyrut «Augustos zamanında (m.ö. 27-14) Roma hâkimiyetine girdi» → roma-imp -0026-01-16 (aralık, beyanlı) → bizans 395 → 635 (yıl) → boşluk (→1000). MÖ 27 öncesi boş.
- **Sayda**: TDV sayda «milâttan sonra 64» yazıyor; TDV Antakya (Suriye MÖ 64) ile çelişir → MÖ 64 (yazım hatası kabulü, `ic_not`ta beyanlı, SORU 1) → imp → bizans → 16 (637) «civarı» (637-02-02) → boşluk (→1198).
- **Selanik**: TDV selanik «Milâttan önce 168'de Roma … parçası olan şehir» → -0167 roma-cumhuriyeti → imp → bizans 395→1205-01-01 (mevcut Selanik Krallığı). Bizans sürekliliği (Norman 1185 kısa) beyanlı.
- **Hanya**: TDV girit «m.ö. 67-66 … tamamıyla Roma'nın hâkimiyetine» (ada geneli, beyanlı) → imp → bizans 395→827-04-02 → girit-emirligi →961-03-06 → bizans →1204-08-12 → beyanlı boşluk →1281 (mevcut Venedik). 827/961/1204 kırılmaları için mevcut maddeler var (yer_id Kandiye (Girit); Hanya `m:` «Kandiye (Girit)»).
- Bütün Arap-sonrası boşluklar **beyanlı**; Sâsânî işgalleri (540, 611-628) Antakya/Halep/Hama/Humus/Sayda için okunmadı (kaynakta BEYANLI YAKLAŞIKLIK).

## 3. Yeni maddeler (22)
7 Roma ilhakı (Antakya, Halep, Hama, Humus, Sayda, Selanik, Hanya) + Beyrut Augustus + 8 × 395 (şehir adlı) + 6 Arap fethi (Antakya, Halep, Hama, Humus, Beyrut, Sayda). Yalnız Türkçe (çeviri yok; Emre kararı). Tarihler yıl hassasiyetinde, `[yalnız yıl teyitli; gün teyitsiz]` notlu.

## 4. Kullanılan kaynaklar (13.11.2026 okundu)
TDV İslâm Ansiklopedisi: antakya, halep, hama, humus--suriye, beyrut, sayda, selanik, girit, kibris, rodos, yafa, bizans.

## 5. Bulunamadı / yazılmadı / ölçülemedi
- **Gazze, Yafa**: TDV Roma tarihi vermez (Yafa: yılsız «Romalılar zamanında»; Gazze: yalnız 13/634 fetih) → yazılmadı.
- **Kıbrıs (Lefkoşa, Baf, Magosa/Salamis)**: TDV «Kıbrıs» yalnız 395 bölünmesini verir; MÖ 58 ilhakı için yalnız Vikipedi-türü sonuçlar bulundu (kural: tek dayanak olamaz) → yazılmadı; Cato/JRS makalesi (Cambridge) metni okunamadı.
- **Korint, Mısır (Memphis, Eski Kahire, Bubastis, Giza), Tripoli, Rodos** (TDV Rodos 168 «cezalandırıldı» ama statü ilhak değil), İnebahtı, Girit'in harabe siteleri (Gortyn, Knossos…), Sparta/Tegea/Delphi/Thasos…: kaynaklı ilhak/zincir bulunamadı ya da okunmadı. Livius.org şehir URL'leri 404 verdi (yol bilinmiyor); Menf/Trablus TDV slug'ı hatalı çıktı.
- Kahire, Yanya, Mora (Tripoliçe), Kandiye, Lefkoşa-sonrası ortaçağ şehirleri o devirde YOK (kuruluşları sonra) — dokunulmadı.
- Tam `denetle.py` (Değişmez 2/2s/3/8) ve çeviri eşitliği ölçülmedi; yeni 22 madde yalnız Türkçe ⇒ `ceviri.py` tavanı kapıda yükselebilir (sonradan raporlanır).

## 6. Karar soruları
1. Sayda: TDV «milâttan sonra 64» ↔ Antakya MÖ 64: yazım hatası kabulü uygun mu?
2. Halep/Hama için ABİ MERKEZ (Antakya) yaklaşıklığı kabul mü, yoksa şehre özgü kaynak mı beklensin?
3. Kıbrıs/Mısır/Yunanistan için akademik kaynak (Barrington/CAH/JRS) tam metin erişimi olan makinede devam edilsin mi?
