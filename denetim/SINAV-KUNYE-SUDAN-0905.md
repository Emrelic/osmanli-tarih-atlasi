# SINAV — `ingiliz-sudani` künye penceresi + Darfur boşluk kontrolü (M-2937 ②)

**Oturum:** 1923 SINIRLARI · `local_372203f2-6e71-46d2-af5e-563a5c7eca60`

## ① SINGHASARI ŞARTI — künye penceresi 1916-1923'ü kapsıyor mu?

```
ingiliz-sudani   f:1899-01-19   t:1923-10-29
sınanan aralık   1916-11-06 → 1923-10-29
```

**EVET, RAHATÇA.** f: (1899-01-19) sınanan aralığın başından (1916-11-06)
**17 yıl ÖNCE**; t: (1923-10-29) sınanan aralığın sonuyla (1923-10-29)
**BİREBİR** — künye penceresi 1916-1923'ün tamamını kapsıyor, kıl payı
değil geniş bir marjla.

## ② DARFUR BOŞLUĞU — VARDI, KAPATILDI

🔴 **Sınav BOŞLUK BULDU** — ve bu turda kapatıldı. `denetim/
yer_yama_belgesiz4.js`'teki Darfur kaydı bu ana kadar İKİ dönemde
duruyordu:

```
ÖNCE (boşluklu):
  s:[{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},
     {f:"1695-01-01",t:"1916-11-06",d:"darfur"}]
  ⇒ 1916-11-06'dan 1923-10-29'a kadar HİÇBİR PERİYOT YOK — 6 yıl 11 ay
  ⚠️ Bu bir GERÇEK VERİ değil, henüz UYGULANMAMIŞ bir yamaydı — yani
  bugünkü canlı haritada Değişmez 1 ihlali YOK (yama zaten queued),
  ama yama BU HALİYLE inseydi 1916 sonrası Darfur SAHİPSİZ kalırdı.

SONRA (bu turda DÜZELTİLDİ):
  s:[{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},
     {f:"1695-01-01",t:"1916-11-06",d:"darfur"},
     {f:"1916-11-06",t:"1923-10-29",d:"ingiliz-sudani"}]
  ⇒ Üçüncü dönemin f: değeri (1916-11-06) darfur'un t: değeriyle
  BİREBİR — ARADA BOŞLUK KALMADI.
```

Kaynak aynen: TDV `sudan` gövdesi — "Bir süre sonra Dârfûr toprakları bir
eyalet halinde İngiliz Sudanı'na bağlandı" (Ali Dînâr'ın 6 Kasım 1916'da
öldürülmesinden hemen sonra) — `darfur` künyesinin kendi `t:1916-11-06`
değeriyle zaten bağımsız doğrulanmıştı (M-2867/M-2908 turlarında).

## ③ SIRA UYARISI — bu güncelleme de renk bekliyor

`ingiliz-sudani` künyesi ONAYLANDI (M-2914/M-2919) ama henüz devletler.js'e
İNMEDİ ve RENKSİZ. Darfur kaydına eklenen üçüncü dönem, `misir-sultanligi`/
`misir-kralligi` ile AYNI kısıtı taşıyor: künye+renk inmeden bu güncelleme
UYGULANAMAZ — dosyanın kendi `not:` alanına açıkça yazıldı.

## SONUÇ

```
① Pencere şartı        ✓ GEÇTİ, geniş marjla
② Darfur boşluğu       🔴 VARDI (queued yamada) → 🟢 KAPATILDI (bu turda)
③ Sıra bağımlılığı     künye+renk → sonra bu güncelleme
```
