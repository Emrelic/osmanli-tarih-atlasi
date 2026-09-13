# KOŞU 10 SONRASI — inme sırası (13 Eylül 2026, 1.MURAT)

Koşu 10 (PID 8800, başlangıç 13 Eylül 04:16:45) yayınlanana kadar
**yerleşim dosyaları (`girdi.GIRDI_DOSYALARI`), `uret_petek.py`, `renkler.py`,
`girdi.py` DONUK.** Aşağıdaki her kalem hazır ve diskte; yayın inince bu sırayla
uygulanır. Sıra keyfî değil: D166 (bir merge adımının ön koşulu önceki adımlardan
sonraki durumdan türetilir).

## 0 · Yayın doğrulaması (önce)
- [ ] zincir çıktısı: denetle ✓ · denetle_yayin ✓ · push ✓ · canlı sürüm damgası
- [ ] `denetle_yayin` yetim satırı: 9+ dosya "çalışma anında yükleniyor (kanıtlı)"
- [ ] ekran: ek okuma kartları (edebiyat · savaş · antlaşma2 · magazin · mimari ·
      tartışma · kadın · ekonomi) ve C katmanı canlıda görünüyor mu

## 1 · Doğu Anadolu zinciri (sıra ŞART)
1. [ ] `denetim/YAMA-KITA13-VAN-0913.json` — ÖNCE A, SONRA B (Çaldıran · Başkale ·
       Van 1548) — KITA 13
2. [ ] `denetim/YAMA-KITA13-BITLIS-0913.json` + 2 kronoloji maddesi — KITA 13
3. [ ] `denetim/YAMA-KITA29-FERHATPASA-0913.json` — KITA 29
       A: Maku (TDV 1574) · Şerur (BOA TD 633) · Gence+Berde gün 1588-09-01
       B: Eçmiyazin UYGULA · Nahçıvan 1586 BEKLET
       C: Revan 1583-09-13 (yürüyüş emri günü, metinde belirtilir) · Gümrü dokunma
       🔴 KITA 14'ün 1574-01-01 · 1588-09-01 · 1583-09-13 maddeleriyle BİRLİKTE (Değişmez 2)
       🔴 69f110c SÜRÜMÜNÜ kullan (47895c4'teki B1 eski 1583-06-01 taşıyor).
          C1 Revan ile B1 Eçmiyazin AYRILMAZ — ikisinin başı aynı gün 1583-09-13.
          C1 inip B1 eski değerle inerse Eçmiyazin 4 kesitin 4'ünde Revan'dan
          ÖNCE Osmanlı = ters enklav, hiçbir denetim sormaz (KITA 29 benzetimi G).
       Okunan makaleler (dergipark.org.tr/tr/download/article-file/<no>):
          4857484 Adlig 2026 Revan · 638569 Bilgili 2016 (TD 633 + TD 901) ·
          368079 Bilge Nahçıvan sancağı · 3367835 Köse 2024 Eçmiyazin ·
          5211254 Ceribaş 2025 serhad · cahij.com makale_id=23067 İslamoğlu 2015 (özet)
          PDF pasaj aleti: denetim/ARAC-KITA29-BELGEPASAJ-0913.py
4. [ ] `denetim/YAMA-CIZRE-BOHTAN-0913.json` — KITA 16 (künye taslağı)
5. [ ] `denetim/YAMA-KARTLI-KAHETI-0912.json` — KITA 16 (künye f 1490 t 1762)

## 2 · Macaristan
6. [ ] `denetim/YAMA-KITA19-BUDIN-1529-HIMAYE-0913.json` (Budin/Peşte `v:` tâbi 1526 → 1529, TDV budin)
7. [ ] `denetim/YAMA-KITA19-DEBRECEN-K-ETIKET-0913.json` — 6'dan SONRA (tâbi başlangıcı Budin'e dayanıyordu)

## 3 · Kuzey Afrika · Karadeniz
8. [ ] `denetim/YAMA-SIRENAYKA-0912.json` kalanları — iki açık karar Emre'de:
       Derne 1510-1556 zinciri (basit/tam) · Bingazi 1551 mi 1578 mi
9. [ ] `denetim/YAMA-ANAPA-0913.json`
10. [ ] `denetim/YAMA-KITA14-0913.json` (0044 yerleşim tarafı)
10b. [ ] Önceki günlerden bekleyen: `YAMA-2S-RUSYA-0912.json` · `YAMA-KUNYE-ALANI-0912.json` — durumlarını ölç, uygulanmışsa işaretle
11. [ ] KITA 16 dolgu noktası önerisi (Fizan boşluğu — `OLCUM-KITA16-FIZANBOSLUK`)

## 4 · Renk (motor dosyası, donuk)
12. [ ] `renkler.py`: `kavalali` harita anahtarına renk — `misir-kavalali` künyesi
        `harita:'kavalali'` diyor, `devletler_harita.js`te anahtar YOK (KITA 15
        M-3751). C katmanı misir-sudan kaydının Mısır tarafı bu yüzden GRİ.
        Sonra `renk_olc.py` (§9: veriye dokunan her koşudan sonra).

## 5 · Kronoloji (donuk DEĞİL — koşu sürerken de inebilir)
- [ ] İÇ NOT yamasının kalanı: KITA 14'ün 4 dosyası (olaylar_ek7 · ek2 · ek15 ·
      kronoloji_ingiltere) serbest kalınca `py arac/ic_not_uygula.py
      denetim/YAMA-IC-NOT-0913.json --uygula`; olaylar_ek8 (6) ve olaylar_kamerika
      (3) metin değiştiği için YENİDEN TARANMALI (KITA 25 M-3752)
- [ ] `denetim/YAMA-YER-ID-0913.json` 36 öneri — KITA 14'te (M-3747)

## 6 · Koşu 11 motor gündemi (Opus gerekir)
- Ⓐ maliyet yaması · Ⓑ enklav/koridor yaması
- C kıyası (KITA 30, `BULGU-KITA30-KIYAS-OLCUMU.md`): belgeli hat ↔ motor sınırı
  sattularap %56 / 253 km (EN YÜKSEK) · misir-sudan %36 / 222 km ·
  midye-enez %25 / 150 km · bosna-sava %18 / 40 km
- 1727 TD 901 (Karpi · Maku · Şerur · Süregel · Uç Kilise 1724-35) — KITA 29 kapsam dışı ek

## 7 · C katmanı açık soruları (KITA 30 devri, M-3766)
- `kapsama.negatif_taraf` önerisi: app.js işaret kuralı (negatif → taraflar[0])
  NOKTA SIRASINA bağlı; ters sıra tarafı sessizce ters boyar (bosna-sava vakası).
  KITA 15'in maliyet ölçümü bekleniyor, karar yayından sonra.
- `karlofca-bosna-kaleler-1699` ile `karlofca-bosna-una-1699` nokta listeleri
  ÖRTÜŞÜYOR — birleştirme kararı verilmedi.
- banat-maros (cephe hattı + Belgrad yönü noktası) · bahçesaray-özü (yukarı mecra
  noktası) BULUNAMADI — antlaşma metni neşri gerekiyor (ör. Consolidated Treaty
  Series); Tisza-Tuna parçası kısmi hat olarak YAZILMAYACAK (D089).
- C'nin motora girişi (`uret_petek.py`) tasarlandı, SINANMADI — koşu 11.
- 0046 H-0011 odak: mekanizma 56e163b ile indi; `olaylar_ek2.js` Ferhad Paşa
  maddesine `odak_kutu_kaynak:"ferhad-pasa-istanbul-1590"` alanı KITA 14'te.
