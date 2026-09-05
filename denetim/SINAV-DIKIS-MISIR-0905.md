# SINAV — Mısır yamasının iki dikişi (M-2943, kısa tutuldu)

**Oturum:** 1923 SINIRLARI · `local_372203f2-6e71-46d2-af5e-563a5c7eca60`

## ① 1914-12-18 dikişi (v:Kavalalı → s:)
```
TAM DİKİŞ: 55/55 · ÖRTÜŞME: 0 · BOŞLUK: 0
```
55 noktanın 55'inde de `v:"Kavalalı hanedanı"` TAM 1914-12-18'de bitiyor, yamanın `s:` dizisi TAM o günde başlıyor. Kusursuz.

## ② 1922-03-15 dikişi (sultanlık→krallık, kendi önerimiz)
```
TAM DİKİŞ: 55/55, SORUNLU: 0
```
Yamanın kendi içinde her kayıtta `misir-sultanligi.t == misir-kralligi.f == 1922-03-15`. Kusursuz.

## ③ 55'in dışında — DELİK DEĞİL, farklı alt-tarih
79 nokta `v:"Kavalalı..."` taşıyor ama 1914-12-18'de bitmiyor. **Bunlar dahil edilmediği için sınırı test ettim ve DELİK olmadıklarını doğruladım**: Girit/Hanya/Kandiye (1830-1841, Kavalalı'nın Yunan isyanı sırasında geçici Girit valiliği — 1841'de Osmanlı'ya iade), Mekke/Medine/Cidde/Yenbu (1813-1841, Vehhabî seferi — 1841'de geri çekildi), Sudan şehirleri (1821-1882/85, Mehdî isyanıyla kaybedildi). Hepsi **1914'ten ÇOK ÖNCE, farklı olaylarla** bitiyor — 1914-12-18/1923 senaryosuyla ilgisizler, imza onları doğru elemiş.

## SONUÇ
```
① dikiş   ✓ kusursuz     ② dikiş   ✓ kusursuz     ③ sınır   ✓ doğru (delik değil)
```
Yamada düzeltme GEREKMİYOR.
