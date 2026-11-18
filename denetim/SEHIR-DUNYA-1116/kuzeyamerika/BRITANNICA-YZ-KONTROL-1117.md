# Britannica YZ-özeti kontrolü — Kuzey Amerika F2 (17 Kasım 2026)

Ölçüm: `data/sehir_tarihce_kuzey_amerika_1..4.js` (kasa-1116-inis ağacı, salt-okuma). Britannica kaynaklı kayıt: 291 alan, 54 şehir.
Örnek: her 3. şehir (1., 4., 7. … 52.) + son 2 = **20 şehir, 109 alan, 22 Britannica URL'si** (Philadelphia ve Winnipeg alanları başka şehir sayfalarına da atıf yapıyor: Richmond, Toronto/History, York-Factory). Gömülü tarayıcıda kendi sekmede, sayfa arası ≥5 sn.

## Yöntem
Her sayfada DOM'dan YZ kapsayıcıları (`class/id` içinde `ai-`/`-ai`) ayrıldı; `tanik` (… ile bölünmüş parçalar, normalize: küçük harf, tırnak/tire, boşluk) ayrı ayrı (a) YZ kapsayıcıları DIŞINDAKİ gövde metni, (b) YZ kapsayıcıları, (c) tüm sayfa metninde arandı.

## Sonuç dağılımı (109 alan)
| sonuç | n |
|---|---|
| GOVDE (YZ bloğu dışında birebir) | 95 |
| YZ-OZETI | **0** |
| HICBIRI | 2 |
| TANIK-YOK (kaynak var, `tanik` boş; çoğu `sahip[]`) | 12 |
| GOVDE-KESIK / OKUNAMADI | 0 / 0 |

**YZ-özeti kaynaklı alıntı bulunan şehir: yok.** Hiçbir `tanik` yalnızca YZ bloğunda geçmiyor.

## Bulgular
- 12/22 sayfada "Created from Britannica articles using AI" bloğu var (bugünkü sayfa metni "Summary created…" değil, "Created from Britannica articles using AI. AI can make mistakes…" diyor). Özet gövdesi DOM'a tembel yükleniyor, bu yüzden YZ özetinin içeriği ölçülemedi; fakat tüm `tanik`ler YZ kapsayıcısı DIŞINDA bulundu. Sayfalar tam gövde ("Load Next Page" sayfalama; paywall yok).
- **HICBIRI (2): Britannica'ya yanlış atıf, YZ değil.** Her ikisinde `kaynak` iki kaynaklı, alıntı öteki kaynağa ait:
  - `atlanta-us` `.ilk` (kuzey_amerika_2): "…a century after Savannah" Britannica Atlanta'da yok (New Georgia Encyclopedia metni).
  - `sitka-us` `.olay[3]` (kuzey_amerika_3): "…1804 Battle of Sitka" Britannica Sitka'da yok (NPS Sitka NHP metni).
- **TANIK-YOK (12):** `sahip[]` kayıtlarında "Britannica … tam gövde okundu" yazıyor ama `tanik` boş (boston, concord, montgomery, philadelphia, vincennes, bismarck, monte-alban, victoria, winnipeg ×2, york-factory ×2). Bu kayıtlar doğrulanamaz.

## Kural önerisi (`arac/denetle_yayin`/`sehir_tarihce.py` denetimi için, ölçülebilir)
1. **YZ-kalıbı yasağı:** `tanik` içinde (norm. küçük harf) "created from britannica", "using ai", "ai can make mistakes", "summary created", "quick summary", "britannica ai" geçerse hata.
2. **Boş tanik:** `kaynak` Britannica içeren her `ilk/olay/sahip/ark/bit` kaydında `tanik` boş olamaz (şu an 12 örnekte ihlal; tüm 291 alanda sayılabilir).
3. **Çok kaynaklı atıf:** `kaynak` içinde birden fazla URL varsa `tanik` her birine atfedilemez; `tanik_kaynak: <url>` alanı (ya da tanik başına tek kaynak) zorunlu — Atlanta/Sitka vakası.
4. **Yayın öncesi canlı sına (isteğe bağlı, ağ gerektirir):** Britannica URL'li `tanik` ≥6 kelimelik alt dizgesi, DOM'da YZ kapsayıcısı (`[class*="ai-"]`) dışında aranır; bulunmazsa uyarı. Salt metinle YZ bloğunu ayırmak güvenilmez; DOM kapsayıcısı ayırt edicidir.

Çıktı: `BRITANNICA-YZ-KONTROL-1117.tsv` (alan başına bir satır).
