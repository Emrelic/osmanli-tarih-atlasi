# ÖLÇÜM — Ferhad Paşa 1590 kaydının taşınması, bulunan hata

> KITA 30 · 13 Eylül 2026. KITA 29'un `denetim/TASLAK-C-KITA29-1590-
> 0913.js`i `data/hukuki_sinirlar.js`e (8. kayıt) taşındı, KITA 15'in
> `denetim/ARAC-KITA15-CKATMAN-DOGRULA-0913.js` aracıyla ölçüldü.

## 🔴 BULUNAN HATA — `nokta_atamalari` yanlış iç içelikte

KITA 29'un taslağı `nokta_atamalari:`yı kaydın KÖK seviyesinde
(`hat:{...}`in DIŞINDA, kardeşi olarak) tutuyordu. Render kodu
(`_cNoktaKumesiOzellikleri`, app.js:5269) `kayit.hat.nokta_atamalari`ya
bakıyor — üç önceki kayıt (karlofca-lehistan/venedik/kaleler) bunu
`hat:{tur:"nokta-kumesi", nokta_atamalari:[...]}` biçiminde doğru
yerleştirmişti, bu SEKİZİNCİ kayıt farklı bir şemayla geldi ve
UYUŞMADI.

## ÖLÇÜLDÜ (ilk koşu, düzeltmeden önce)
```
🔴 ferhad-pasa-istanbul-1590   ciziliyor: false   renkler: []
SONUC: 6/8
```

## DÜZELTME
`nokta_atamalari:` dizisi `hat:{...}` bloğunun İÇİNE taşındı (kayıt
kök seviyesindeki eski konumundan). Başka hiçbir alan değişmedi.

## ÖLÇÜLDÜ (düzeltmeden sonra)
```
✓ ferhad-pasa-istanbul-1590   ciziliyor: true    renkler: 14× "#8e0b22" (osmanli)
SONUC: 7/8 çiziliyor VE renk doğru (gri yok)
```
Kalan 1 (misir-sudan-22-paralel-1899, misir-kavalali GRİ) daha önce
ölçülmüş, doğrulanmış bir VERİ eksikliği (`data/devletler_harita.js`de
`"kavalali"` anahtarı yok) — kod hatası değil, kusur sayılmıyor
(1.MURAT'ın kendi talimatı, M-öncesi).

## SONUÇ
**8 kayıt · 7 çiziliyor · renk doğru · 1 bilinen veri eksikliği
(renksiz künye, kusur değil).**

📌 Ders (D-aday, D064/D191'in bir yüzü): *"Şema aynı proje içinde bile
kayıt kayıt kayabilir — yeni bir kayıt eklerken önceki BENZER türdeki
kaydın TAM YAPISIYLA karşılaştırmak, yalnız alan adlarına bakmaktan
daha güvenilirdir."* KITA 29'un verisi doğruydu (14/17 nokta gerçek
koordinatla), yalnız YERLEŞİMİ yanlıştı — ve bunu yakalayan şey KITA
15'in doğrulama aracının HER kaydı tek tek render etmesiydi, göz
denetimi değil.
