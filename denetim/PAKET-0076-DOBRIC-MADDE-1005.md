# PAKET-0076-DOBRIC-MADDE-1005 — Dobriç adı 1908 / 1913 maddelerinde

5 Ekim 2026 · oturum PAKET-0076-TASNIF-1004 · koordinatör görevi (M-5820 hükmü ③).
Şart: KAYNAKLI; iki gün AYRI aranır; madde metni sayı düşsün diye zenginleştirilmez.

## 1913-08-10 Bükreş — BULUNDU, eklendi (diff)
TDV `hacioglupazarcigi` (Machiel Kiel), ham metin curl 200, önbellek
`denetim/PAKET-0076-DOBRIC-MADDE-1005-tdv-onbellek/hacioglupazarcigi.txt`:
> "II. Balkan Savaşı’nın ardından mağlûp Bulgaristan, Güney Dobruca’yı terketmek zorunda kaldı,
> Dobriç, Balçık ve Silistre Romanya’ya bırakıldı."

Cümle ŞEHRİ adıyla anıyor (D208 bölgeden şehre taşıma değil). Gün bu cümlede yok; günü
TDV `bulgaristan` veriyor: "10 Ağustos 1913’te Bükreş Barış Antlaşması’nı imzalayarak Güney Dobruca’yı
Romanya’ya bıraktığı". Aynı olay (II. Balkan Savaşı'nı bitiren barış, Güney Dobruca'nın devri) — iki TDV
maddesinin aynı olayı anlatması; kaynak alanına İKİSİ de ayrı ayrı yazıldı.

Diff: `denetim/PAKET-0076-DOBRIC-MADDE-1005.diff` → `data/kronoloji_sinir_komsu.js`, 1913-08-10
Romanya–Bulgaristan maddesi (`g3-bg-ro-dobruca-p4`):
- `d:` "Güney Dobruca Romanya'ya geçti**; Dobriç (Hacıoğlupazarcığı), Balçık ve Silistre Romanya'ya bırakıldı.**"
  (Kiel cümlesinin özeti; şehir listesi kaynağınki, bizim seçimimiz değil)
- `kaynak:` + TDV hacioglupazarcigi alıntısı + gün için TDV bulgaristan alıntısı.
`git apply --check` (C:\atlas) temiz.

## 1908-10-05 Bulgaristan bağımsızlığı — BULUNAMADI, eklenmedi
- TDV `hacioglupazarcigi`: 1908 hiç geçmiyor. Şehir için yalnız "1877-1878 savaşından sonra Hacıoğlu ve
  bölgesi yeni kurulan Bulgaristan’ın bir parçası oldu" (1878) ve 1882 ad değişikliği.
- TDV `bulgaristan` (önbellek KRONO-BALKAN-D-0929): 1908 cümleleri ülke düzeyinde ("Bulgaristan 5 Ekim
  1908 tarihinde bağımsızlığını ilân ettikten sonra…"); Dobriç yalnız nüfus/etnik dağılım cümlesinde.
- TDV `dobruca` (önbellek KRONO-TUNA-0929): 1908 yok.
⇒ `bulunamadı`. Bağımsızlık ülke çapında bir statü değişikliği; şehri maddeye yazmak, ülke hükmünü şehre
taşımak olurdu (D208). Bu kırılmanın taraf koluyla kapanması doğası gereği DOĞRU sınıftır — kusur değil.

## ÖLÇÜM (worktree: HEAD eb73d41d + ISHAKCI-DUZELT diff + bu diff)
```
2sk  önce (C:\atlas çalışma ağacı, İshakçı düzeltmesi uygulanmış)  3162 = 1559 YER + 1603 TARAF
     sonra                                                         3162 = 1560 YER + 1602 TARAF
değişen tek birim: 1913-08-10 Hacıoğlupazarcığı (Dobrich)  yalnız taraf → YER
```
Tavan 1602 ⇒ ⚠️ söner (eşit). 1601 hedefi tutmadı: 1908 bulunamadığı için 1 birim değil 2 birim
düşmesi beklenmişti; düşmemesi doğru.

⚠️ Not: HEAD'de (eb73d41d) İshakçı düzeltmesi henüz COMMİTLİ DEĞİL — koordinatörün çalışma ağacında
uygulanmış (`M data/olaylar_ek10.js`, `M data/yerlesimler_ek29.js`). Worktree'de ilk ölçüm bu yüzden
1419 kovasını yine açık gösterdi; düzeltme diff'i worktree'ye de uygulanıp yeniden ölçüldü.

TAM DENETİM: §EK'te.

## §EK — TAM DENETİM (worktree, `py arac/denetle.py`)
```
D1 ✓ 309 · 1c ✓ 4 · 1b ✓ 0 · D2 ✓ 623/0 · 2s ✓ 189 açık (tavan 189) · 164 yıl-temsilî
2sk 3162 = 1560 YER + 1602 TARAF (tavan 1602)  ← ⚠️ YOK
2i ✓ 1 açık · 2t ✓ 13 · 4/4c/4d/4s/5 ✓ · D7 727
D8 ÖLÇÜLEMEDİ (worktree'de motor çıktısı yok — beklenen) ⇒ çıkış 2
```
⚠️ Yeni satır: "YIL-TEMSİLÎ BORÇ tavanı aşıldı (164 > 151)". Bu diff yıl-temsilî sayısını DEĞİŞTİRMEDİ
(önce de 164). 151 tavanı koordinatörün yeni eklediği tavan; 164'ün içeriği bu işin konusu değil.
