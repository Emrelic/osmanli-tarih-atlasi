# IRAN-KAFKAS-0082 — YERLEŞİM ÖNERİLERİ (noktasızlık)

> `yerlesimler.js`e DOKUNULMADI. 🔴 **Koordinatların hiçbiri ÖLÇÜLMEDİ.** Bu oturumda
> gazetteer yoktu (`veri-kaynak/` altında GeoNames yok). Aşağıdaki değerler **yalnız
> yer tarifidir**. Yazmadan önce GeoNames (`yerlesimler_sinir_dogu.js` başındaki rehber
> yöntemiyle) ölçülmeli ve yeni noktadan önce ad + 3 km mükerrer taraması yapılmalı
> (CLAUDE.md §11). Bir önceki kol (`BULGU-SINIR-DOGU.md` §5) bu ilçe merkezlerini "koordinat
> güveni yüksek" diye sınamıştı, ama değerleri o dosyada yazılı değil.

Ölçülen boşluk: 1833-02-20'de 39.4-40.9 K / 43.0-45.0 D kutusunda 13 nokta var.
Aras'ın güney yakasında Digor (43.41 D) ile Iğdır (44.045 D) arasında **hiç nokta yok**.
Ad araması (`Tuzluca|Kulp|Kağızman|Aralık`): **0 kayıt**.

| Öneri | Yer tarifi (ÖLÇÜLMEDİ) | Niçin | Zincir kaynağı |
|---|---|---|---|
| **Tuzluca (Kulp)** | Aras'ın güney yakası, Iğdır'ın ~35 km batısı (≈40.04 K, 43.66 D) | H-0093 düzeltmesinden sonra Digor–Iğdır orta çizgisi 43.73 D'ye oturur ve Kulp yanlış (Osmanlı) yakaya düşer. D206'nın ikinci ucu. | Kulp'un Surmalu'ya bağlılığı: **kaynak bulunamadı**. Zincir yazılamaz ⇒ önce kaynak (TDV arama `Kulp`/`Tuzluca`: başlık 0) |
| **Aralık** | Iğdır'ın ~40 km doğusu, Aras güneyi (≈39.87 K, 44.52 D) | TDV'nin Iğdır için andığı kaza merkezi: *"Iğdır Revan eyaletinin Aralık kazası içinde"*. Beri noktası ovanın doğusunu zaten tutuyor, öncelik DÜŞÜK. | TDV `igdir--sehir` (kaza adı) · zincir Iğdır'ınki (H-0093) |
| **Kağızman** | Aras'ın güney yakası, Kars'ın ~50 km güneydoğusu (≈40.15 K, 43.12 D) | Kars sancağı, 1878'e dek Osmanlı. Nokta yokken Digor peteği taşıyor. 1833 için etkisi küçük, 1878-1918 Kars oblastı için gerekli. | **bulunamadı** (bu partide okunmadı) |

📌 **Önerim:** yalnız **Tuzluca**, o da kaynağı bulunduktan sonra. Aralık ve Kağızman
bu partinin sorusunu değiştirmiyor. H-0093'ün asıl düzeltmesi mevcut iki noktanın
(Iğdır, Beri) zinciridir ve nokta beklemeden uygulanabilir.
