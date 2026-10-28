# PAKET-0076-ENKLAV-1004 — Dobruca (A) yamasının Değişmez 7'ye etkisi: +6 sorgusuz enklav

5 Ekim 2026 · oturum PAKET-0076-TASNIF-1004 · koordinatör görevi (Dobruca yaması `b23589e8` sonrası).
Veriye yazılmadı. Tabana dokunulmadı (`KAMPANYA_DONDURMA`, Emre 25 Eylül).

## Yöntem
İki geçici worktree: `b23589e8~1` (ÖNCE, f18e2f80) ve `b23589e8` (SONRA). İkisinde de
`py arac/denetle.py --ayrinti` koştu; Değişmez 7 kova listeleri satır satır karşılaştırıldı
(anahtar: kova · gün · yer · sahip · km · ada üyeleri). Betik: scratchpad `t76/d7_fark.py`.
```
ÖNCE   726  {A-koridor 535 · B-bilinmiyor 182 · C-hakiki 9}
SONRA  732  {A-koridor 541 · B-bilinmiyor 182 · C-hakiki 9}      ÇIKAN 0 · GİREN 6
```
726 → 732 koordinatörün ölçümünü birebir yeniden üretti.

## GİREN 6 — hepsi A-koridor
```
1402-07-28  İshakçı (Isaccea)  → suleyman-celebi  233 km  ada: İshakçı
1410-02-13  İshakçı (Isaccea)  → musa-celebi      233 km  ada: İshakçı
1410-06-15  İshakçı (Isaccea)  → suleyman-celebi  233 km  ada: İshakçı
1411-02-17  İshakçı (Isaccea)  → musa-celebi      233 km  ada: İshakçı
1413-07-05  İshakçı (Isaccea)  → OSMANLI          233 km  ada: İshakçı
1416-01-01  Babadağı (Babadag) → OSMANLI          197 km  ada: Babadağı + İshakçı
```

## Öngörünün sınavı (koordinatör, ölçümden önce yazdı)
> "altısı da A-koridor ve sebebi … *1402-1413'te İshakçı çelebi, komşuları Eflak görünecek*"

- **Kova: TUTTU, 6/6 A-koridor.** C-hakiki 0, B-bilinmiyor 0.
- **Sebep: 5/6 TUTTU, 1/6 KISMEN.** İlk beşi tam beyan edilen borç: İshakçı'nın dört çelebi
  penceresi ve 1413'ten Osmanlı penceresi, Silistre/Köstence/Babadağı Eflak'a geçince ana
  gövdeden 233 km kopuk tek noktalı ada oldu.
- **Altıncı (1416 Babadağı+İshakçı) borçtan değil TDV'nin kendisinden doğuyor:** TDV babadagi
  Babadağı'nı 819/1416'da Osmanlı'ya veriyor; TDV silistre ve kostence Silistre ve Köstence'yi
  1419'a kadar Mircea'da tutuyor. Yani 1416-1419 arası Kuzey Dobruca'da Osmanlı adası
  **kaynakların söylediği şeyin kendisi**. İshakçı ona yalnız komşu olarak katılıyor.
  ⇒ Bu ada büyük ihtimalle HAKİKİ (Değişmez 7'nin uyarısı: "veri DOĞRU olduğu için de doğar").
  Ama 197 km'lik kopukluk Babadağı ile Osmanlı ana gövdesi arasında NOKTA olmadığını da söylüyor.

## 🔴 Çarenin yeri — koordinatörün öngörüsünden FARKLI
Öngörü "çare ara nokta, yani Güney Dobruca noktaları (Dobriç · Balçık · Tutrakan · Mangalya)"
diyordu. **Ölçüm bunu desteklemiyor:** altı adanın altısı da KUZEY Dobruca'da (İshakçı 45,27 K
Tuna deltası · Babadağı 44,89 K). Güney Dobruca noktaları 1402-1416'da Eflak'ta olacakları için
(TDV silistre/balcik: Mircea 1418'e kadar) bu adaları ana gövdeye BAĞLAMAZ — tersine Eflak
şeridini genişletir. Çareler:
```
① İshakçı'nın 1402-1419 halkası (5 ada)   KAYNAK işi, nokta değil. İshakçı'nın kendi TDV
                                           maddesi yok (slug 302); TDV tulca · dobruca ·
                                           babadagi İshakçı'yı ANMIYOR (ham metin tarandı).
                                           Akademik kaynak (Kiel · EI2 "Isakča") aranmadı.
                                           Bulunursa İshakçı da eflak 1402→1416/1419 olur ve
                                           beş ada kendiliğinden düşer.
② 1416 Babadağı adası (1 ada)              büyük ihtimalle HAKİKİ (iki TDV maddesi birlikte).
                                           Çare: dokunma, ya `enklav:true` beyanı ya da kampanya
                                           sonu taban hesabında gerekçesiyle kalsın. Kopukluğun
                                           km'si (197) ara nokta yokluğundan — ama 1416-1419'da
                                           arada Eflak toprağı OLDUĞU için nokta eklense de ada
                                           ada kalır (doğru olarak).
```
⇒ **Güney Dobruca noktaları bu altı adanın çaresi DEĞİL**; onların gerekçesi ayrı ve hâlâ geçerli:
8a `g3-bg-ro-dobruca-p4` kökü (Güney Dobruca içinde nokta 0 — `PAKET-0076-DOBRUCA-1004.md` §8).

## Ölçüm defteri
- ÖNCE/SONRA çıktıları: scratchpad `t76/d7_once.txt` · `t76/d7_sonra.txt` (iki worktree paralel koştu,
  ikisi de silindi).
- ÖLÇÜLMEDİ: İshakçı için TDV dışı akademik kaynak · 1416 Babadağı adasının petek geometrisi
  (motor çıktısı — koşu ister).
