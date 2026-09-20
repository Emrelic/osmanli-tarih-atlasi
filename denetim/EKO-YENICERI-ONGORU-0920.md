# EKO-YENICERI-0073 — ÖNGÖRÜ (ölçümden ÖNCE yazıldı)

Yazan: EKO-YENICERI-0073 · 20 Eylül 2026 · şartname `oturumlar/DALGA-0073.md`
Sınav anı: kartlar `data/ekokuma_yeniceri.js`e yazıldıktan SONRA, bağ doğrulayıcı
(`denetim/ARAC-EKO-YENICERI-BAG-0920.py`) koşturulduğunda.

## Evren
`data/olaylar*.js` + `data/kronoloji*.js` (126 dosya) içindeki her kronoloji
maddesinin `t` + `b` çifti. Bağ değeri `"<t>|<ayırt edici>"` biçimindedir ve
`js/app.js:_ekBagEslesir` **gün kısmında TAM EŞİTLİK**, ayırt edicide
normalleştirilmiş ALT DİZİ arar.

## Öngörüler (ölçümden önce)
1. Yazacağım kartların `olay:` alanındaki bağların **hepsi** (hedef: 100 %) veride
   TAM EŞİTLİKLE karşılık bulacak — yani `bulunamayan bağ = 0`.
2. Kullanacağım türlerin hepsi `js/app.js` `EKOKUMA_TUR` sözlüğünde KAYITLI olacak;
   yeni tür AÇILMAYACAK (`tanımsız tür = 0`).
3. Vak'a-i Hayriyye maddesinin `t` değeri **gün değil AY hassasiyetindedir**
   (`"1826-06"`); dolayısıyla o maddeye bağ `"1826-06|…"` yazılacak, `"1826-06-15|…"`
   YAZILMAYACAK — yazılsaydı kart sessizce görünmezdi.
4. TDV `vaka-i-hayriyye` (Beydilli) ile TDV `yeniceri` (aynı müellif) ocağın
   kaldırılış GÜNÜNDE birbiriyle çelişecek (§4 TDV tuzağı ⑥); atlasın kendi kaydı
   (15 Haziran 1826) üçüncü bir değerdir. Kart hiçbirini "doğru" ilan etmeyecek,
   üçünü de adıyla verecek.
5. H-0012 tartışma kartında karşı-olgusal soruya ("yeniçeriler kaldırılmasaydı")
   hiçbir kaynak cevap vermeyecek; kart bunu açıkça söyleyecek ve kendi hükmünü
   yazmayacak.

## Ölçülecek sayı (öngörü)
- yazılan kart: 4 (H-0014 için 2, H-0013 için 1, H-0012 için 1)
- toplam bağ: ~25-35
- bulunamayan bağ: **0**
- tanımsız tür: **0**
