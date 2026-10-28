# PAKET-0076-ISHAKCI-1004 — İshakçı 1402-1419 halkası (Stănică 2016)

5 Ekim 2026 · oturum PAKET-0076-TASNIF-1004 · koordinatör görevi. **Öneri; veriye yazılmadı.**

## 0 · ÖNGÖRÜ — ÖLÇÜMDEN ÖNCE YAZILDI VE COMMİTLENDİ
```
Değişmez 7 (sorgusuz enklav)   732 → 727   (−5: İshakçı'nın 1402-07-28 · 1410-02-13 · 1410-06-15 ·
                                             1411-02-17 · 1413-07-05 tek noktalı adaları düşer)
1416-01-01 Babadağı+İshakçı adası          KALIR (TDV babadagi 1416 ↔ Silistre/Köstence 1419 — kaynaklı ada)
Değişmez 1 · 1b · 2 · 2i                   değişmez (2: kırılma sayısı İshakçı'nın 1410/1411/1413 kırılmaları
                                             düştüğü için AZALIR; açık 0 kalır — 1402 ve 1419 maddelerine
                                             İsakçı adı EKLENİRSE)
```
Tutmazsa teşhis yanlıştır (koordinatör).

## 1 · KAYNAK — kendim okudum (Emre'nin indirdiği PDF, Downloads/1AURELDANIELSTANICA.pdf, 30 s., pypdf)
Aurel-Daniel STĂNICĂ, "The Missing Fortresses in Dobrogea. Case Study: Turkish Fortifications",
*Dobrogea. Coordonate istorice și arheologice* (2016). Koordinatörün aktardığı cümleler metinle BİREBİR:
```
s.4 dn.3  "Anca Ghiaţă has decided for an uninterrupted affiliation of Dobrogea to Wallachia from 1388 to
           the battles of 1419-1420" · "The chronology of all these Ottoman conquests is not elucidated in detail."
s.4       "it's only during the reign of Mihail, the successor of Mircea cel Bătrân in 1419 or the spring of 1420
           that the Ottomans manage to extend their effective dominance over Dobrogea, the empire frontier being
           established on the line formed by the fortresses Enisala (Yeni-Sal) and Isaccea (Isakci) which become
           serhat (edge fortresses), being repaired and fortified by order of Sultan Mehmed I Celebi"
s.5       "N. Iorga … 1416. C.C. Giurescu, rev. Stefanescu and Gh. I. Brătianu … 1417" · "after the years 1419 to 1420"
```
⚠️ Beyan (D208 sınırı): **1419/20 serhat cümlesi İsakçı'yı ADIYLA anar**; 1402-1419 Eflak okuması ise
Ghiaţă'nın **"Dobrogea"** için verdiği BÖLGE hükmüdür. Koordinatör hükmüyle uygulandı, kayıtta yazılı.

## 2 · YAMA → `denetim/PAKET-0076-ISHAKCI-1004.diff` (49 satır) — 🔴 Dobriç diff'inden SONRA uygulanır
```
yerlesimler_ek29.js  İshakçı: çelebi ×4 → s eflak 1402-07-28 → 1419-01-01 (kaynak: Stănică cümleleri AYNEN)
                     d 1413-07-05 → 1419-01-01 başlar · not: ÜÇ OKUMA (Iorga 1416 · Giurescu vd. 1417 ·
                     Ghiaţă 1388-1419/20 kesintisiz Eflak) + "not elucidated in detail" AYNEN
olaylar_ek10.js      D261: 1402-07-28 maddesi başlık/yer/metne İsakçı · 1419-01-01 maddesi yer/metne İsakçı +
                     Enisala-İsakçı serhat cümlesi · kaynak yorumuna Stănică
```
⚠️ SIRA: Dobriç diff'i İshakçı satırının hemen önüne ekleme yapıyor ⇒ hunk bağlamı ortak. Ölçüldü:
HEAD'e (Dobriç'siz) `apply --check` ✗ "patch does not apply" · Dobriç uygulanmış tabana ✓ TEMİZ.

## 3 · SINAV (worktree: HEAD 1fa44e84 + Dobriç diff = ÖNCE · + İshakçı = SONRA)
```
                     ÖNCE                      SONRA
Değişmez 7           732                       727   ✓ ÖNGÖRÜ TUTTU
  ÇIKAN 6 · GİREN 1: İshakçı 1402-07-28 · 1410-02-13 · 1410-06-15 · 1411-02-17 · 1413-07-05 (öngörülen 5)
                     + 1416 "Babadağı+İshakçı" adası ÇIKTI, yerine 1416 "Babadağı" GİRDİ (aynı ada, İshakçı
                     artık Eflak'ta ⇒ ada yalnız Babadağı — kaynaklı ada KALDI, öngörüdeki gibi)
Değişmez 1 / 1b      309/309 · 0                aynı
Değişmez 2           623 kırılma · 0 açık       623 · 0 açık    ✗ ALT ÖNGÖRÜ ÇÜRÜDÜ: "AZALIR" demiştim —
                     İshakçı'nın Osmanlı kırılması 1413'ten 1419'a KAYDI (biri düştü, biri doğdu); çelebi
                     pencereleri D2'nin değil 2s'nin evreni. Sayı değişmedi.
Değişmez 2s          1711 · 189 açık            aynı · yıl-temsilî borç 164 → 165 (+1: 1419-01-01, Silistre gibi)
2sk "yalnız taraf"   1604 (tavan 1602, ⚠️ önceden aşık)   1603 (1 iyileşti)
4 / 5 / 2i / 2t      ✓                           ✓
SAHİPLİK (girdi.yukle)  SONRA 9/9 doğru · ÖNCE 4/9 yanlış (dördü de değişen halkada: 1405 · 1412 · 1415 · 1418)
```
Değişmez 8: worktree'de ölçülemedi (beklenen; motor çıktısını ölçer).
