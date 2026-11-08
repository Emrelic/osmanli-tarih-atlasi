# RENK-1108 — Koşu 35 sonrası renk partisi (HAVVA HAFTASONU, 8 Kasım 2026)

Emir: EMRELİC CUMA (Emre onayı, 8 Kasım), 7 madde. Ölçüm ağacı: origin/main e95b52fee (Koşu 35 inişi);
ham `devletler_harita.js` / `donemler.js` Koşu 35 çıktısı. Analiz betikleri HAVVA oturum scratchpad'inde
(`renk1108_analiz.py`, `renk1108_fark.py`, `renk1108_uygula.py`).

## Sonuç tablosu (`py arac/renk_olc.py`, çıkış 0, aynı ağaç, parti öncesi → sonrası)

| ölçü | önce | sonra |
|---|---:|---:|
| görünmez | 0 | 0 |
| komşusuyla çakışan çift (ΔE < 12) | 10 | 9 |
| aynı-hex eşzamanlı < 600 km | 6 | 6 |
| yakın-ama-değmeyen | 36 | 36 |
| denizle karışan (birleşim) | 459 | 454 |
| beyansız PAYLAŞIM uyarısı | 111 | 108 |

Not: RAPOR.md (5 Kasım) ve Koşu 35 ağacı (taban 57af6004e) 2 çakışma / 14 yakın-değmeyen ölçüyordu. Buradaki
10 / 36, origin/main'e o günden beri giren verinin (KASA, FAZ 2 dalgaları) sonucudur, partinin değil.

## Maddeler

1. **avusturya ↔ habsburg (#bdab3f) — UYGULANMADI, karar Emre'de.** Ortak renk `PAYLASIM`'da bilinçli:
   "avusturya anahtarı → habsburg künye id çevirisi (KASA), aynı polity, harita değişmesin". Veride `habsburg`
   yalnız 4 yerleşimde (Galiçya, 1772-08-05 → 1918-11-12; `yerlesimler_ms1_1281_yeni.js:142` ve 3 zincir
   kaydı), `avusturya` 204 yerleşimde; çakışma noktaları 11 km. İki renk Galiçya'nın içinde SAHTE SINIR çizer.
   Doğru çare veri: 4 kaydı tek kimliğe çevirmek (KASA'nın s: çevirisi). Emre yine de iki renk isterse
   PAYLASIM girdisi kaldırılır ve habsburg'a avusturya'dan ΔE 12-15 bir ton verilir.
2. **maratha ↔ portekiz-hindistani-goa ΔE 6,4 — UYGULANDI.** Goa `#00d89c` → `#12ae24`
   (`renk_olc --oner`, 82 renkli engel, en yakın engel ΔE 12,0; artefakt `denetim/RENK-1105/oneri-20261108-204048.txt`).
   Komşu çakışma 10 → 9.
3. **Yakın ama değmeyen — ÖLÇÜLDÜ.** Koşu 35 ağacında 14, bugünkü main'de 36 (yukarıdaki not). Bu satırın
   `renk_olc` çıkış koduna bağlı tavanı yok; tavan önerisi: 36 (bugünkü ölçüm), iyileştikçe iner.
4. **"32 ölü renk" — 12 silindi, 20'si ölü DEĞİL.** 32'lik liste künye ayrıştırıcısının `"id":"..."` (JSON
   biçimli) künyeleri görmemesinden doğuyor. Düzeltilmiş ölçüm:
   - 15'i JSON biçimli künye, `boya_gerekli:true` (afrasiyabiler, alevi-devleti-lazkiye, baban-emirligi,
     bohtan-emirligi, cebel-durzi-devleti, cizre-emirligi, halep-devleti, ingiliz-mezopotamya-idaresi,
     irak-sam-islam-devleti, iskenderun-sancagi-ozel-idare, misir-gazze-idaresi, muntefik-basra,
     oeta-bati-fransiz, oeta-guney, sam-devleti) → SİLİNMEZ.
   - 4'ü veride `d:` olarak kullanılıyor: fransiz-fas (yer_yama_halef_1946), hitit-imp (sehir_tarihce_k3_g1),
     teuton-sovalyeleri, xin (sehir_tarihce_k12) → SİLİNMEZ.
   - britanya-imp kronolojide `taraflar` olarak geçiyor (kronoloji_cok_ms1_1000_batiavrupa) → SİLİNMEDİ
     (künyesi yok; künye ya da taraf düzeltmesi veri işi).
   - **SİLİNEN 12** (künye değil, `harita:` hedefi değil, PAYLAŞIM üyesi değil, veride d/v/kid yok, kodda
     yalnız BOYALAR satırı): chimu, fransiz-somalisi, hitit-eski, meroe-krallik, mogolistan-hanligi,
     monte-alban-zapotek, ogedey-ulusu-kaydu, ternate, tidore, tikal-mutal, tubo-tibet-imparatorlugu, xiongnu.
5. **Ertelenen 4 koloni — renk AYRILDI, KULLANILMADI** (BOYALAR'a yazılmadı; künye girince yeniden ölçülmeli,
   çünkü veride komşusu olmadığı için öneri yalnız altlık + Osmanlı ikilisine dayanıyor;
   artefakt `denetim/RENK-1105/oneri-20261108-204104.txt`):
   - hollanda-yeni-gine `#242ad8`
   - becuanaland-kraliyet-kolonisi `#24c6d8`
   - alman-yeni-gine `#24d824` (en yakın engel ΔE 12,2)
   - britanya-kolumbiyasi-kolonisi `#24d85a` (en yakın engel ΔE 12,2; alman-yeni-gine ile aynı yeşil ailesi —
     coğrafyaları ayrı, sakınca yok)
6. **Künye 2266 ↔ renk 2257 farkı AÇIKLANDI.** Künye 2266 (devletler.js + devletler_bk_ok106.js, iki yazım
   biçimi). Bunların 2215'inin kendi BOYALAR rengi var; 51'i `harita:` anahtarıyla boyanıyor (boyasız künye 0).
   BOYALAR 2257 = 2215 künye + 42 künye-dışı anahtar: 25 `harita:` hedefi (avusturya, ceneviz, bulgaristan …),
   4 veride kullanılan, 13 kullanılmayan (12'si bu partide silindi, britanya-imp kaldı). Parti sonrası BOYALAR 2245.
7. **Denizle karışan / beyansız PAYLAŞIM — SINIFLANDI.**
   - Deniz 454 = DAL1 (ΔE < 18, gerçekten denize yakın) 240 + DAL2 (yalnız açıklık benzer, ΔE < 51) 214.
     DAL2 kusur sayılmaz (ton farkı açık); DAL1'in kıyı devletlerinde olanları kusur adayıdır — tek tek
     kıyı/iç ayrımı bu turda ölçülmedi.
   - Beyansız PAYLAŞIM (künye ömrüne göre, bu turdaki ayrıştırma): 28 grup en az bir EŞZAMANLI çift içerir
     (gerçek ayrım adayı; ör. #05eba2 1918-1920 devletleri, #08cdff kyrene/maurya/nanda), 75 grup ayrı çağ
     (kasıtlıysa PAYLASIM'a yazılabilir, harita kusuru değil), 10 grup ömrü ölçülemedi.

## Ölçülemeyen / açık
- avusturya↔habsburg kararı (madde 1).
- Deniz DAL1 kıyı/iç ayrımı; PAYLAŞIM eşzamanlı 28 grubun mesafe ölçümü (aynı-hex < 600 km evreni `renk_olc`ta 6).
- 90 360 çift "ölçülemedi" (canlı veride dönemi olmayan kimlikler) — temiz değildir.
