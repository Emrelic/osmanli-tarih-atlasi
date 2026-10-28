# UMIT-W8-POLONYA-ISG-1006 — 1915-18 Merkezî Devletler idaresi `isg:`e (8 kayıt)

Ağaç `C:\atlas-w8` (origin/main `8552686e` + D7-ISG-1006 uygulanmış). Ürün:
`denetim/POLONYA-ISG-1006.diff` (yalnız data/, origin/main'e karşı).

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (veri yazılmadan)
Ölçülen başlangıç: 7 KASA kaydı 1914-18'i `s: almanya/avusturya` ile taşıyor; KASA öncesi `s:`
zinciri (KASA-POLONYA-1005-YERLESIM.diff'in `-` satırları) dördünde Lublin'inkiyle BİREBİR:
`kongre-polonyasi → 1917-03-15 rusya-gecici-hukumet → 1917-11-07 sovyet-rusya → 1918-11-11 polonya`.
- Ö1 Değişmez 2 (d/v): değişmez (Osmanlı değil).
- Ö2 2s: kaldırılan KASA kırılma günleri (1914-08-03 · 1914-12-06 · 1915-05-13 · 1915-07-01 ·
  1915-08-01 · 1915-08-05 · 1915-09-01 · 1915-10-01) 2s'den çıkar, eklenen 1917-03-15 /
  1917-11-07 günleri zaten Lublin'den var ⇒ 2s kırılma sayısı DÜŞER (−8 civarı), açık sayısı
  artmaz.
- Ö3 2i: aynı günler `isg:` kırılması olur; `kronoloji_sinir_polonya_1915.js` maddeleri onları
  karşılar ⇒ 2i kırılma +8~+12, **açık 1 → 1** (değişmez).
- Ö4 2t (kırılmasız madde): 13 → 13 (maddeler `isg:` kırılmasıyla eşleşir).
- Ö5 D7 (D7-ISG uygulanmış): ana 733 → **730** (Radom, Zamość-almanya, Kielce-HABSBURG çıkar);
  işgal kovası 34 → 35-37; Zamość 1915-07-01 `isg:almanya` cep olarak görünür; Radom
  (artık 1915-07-20) ve Kielce Lublin işgali yüzünden büyük ihtimalle işgal geçici-cephe
  muafına düşer — kaybolmaz, sınıflanır.

## 1. Ne yazıldı (`denetim/POLONYA-ISG-1006.diff`, 179 satır, LF, CR 0)
**8 kayıt, başka kayda dokunulmadı:**
- `data/yerlesimler.js`: Łódź · Częstochowa · Kielce · Radom (Polonya) · Varşova
- `data/yerlesimler_p0037.js`: Lublin · Chełm (Kholm) · Zamość
- `s:` zinciri KASA öncesine döndü (Lublin'le birebir; dört kayıtta KASA-POLONYA-1005-YERLESIM.diff
  `-` satırıyla doğrulandı): `kongre-polonyasi → 1917-03-15 rusya-gecici-hukumet → 1917-11-07
  sovyet-rusya → 1918-11-11 polonya`. KASA'nın `s:` dönemlerine koyduğu `kaynak:` metinleri `isg:`
  dönemlerine taşındı.
- `isg:` pencereleri (yeni gün UYDURULMADI; hepsi KASA ya da POLONYA-GUN-1006'dan):

| Kayıt | isg | f kaynağı |
|---|---|---|
| Częstochowa | almanya 1914-08-03 → 1918-11-11 | KASA · IPN (Frączkiewicz) |
| Łódź | almanya 1914-12-06 → 1918-11-11 | KASA · Jarosławski/Mikietyński + Daszyńska 2018 (5/6 Aralık gecesi notu) |
| Kielce | almanya 1915-05-13 → 1915-10-01 · avusturya 1915-10-01 → 1918-11-11 (1914'ün üç kısa `isg:`'si korundu, yeniler sona eklendi) | KASA · Kosińska/Kosiński, Rocznik MNK 15 |
| Radom | avusturya **1915-07-20** → 1918-11-11 (KASA ay düzeyi 07-01 → gün) | Słowiński, RNS KUL 2014 (PL-4) |
| Varşova | almanya 1915-08-05 → 1918-11-11 | KASA · Jarosławski 2022 · IPN |
| Lublin | avusturya 1915-07-30 → 1918-11-11 | Surmacz & Szczerbińska-Budzyńska, SiML 22 (PL-3; Lejyon öncüsünün girişi, D211 ⑧) |
| Chełm | avusturya 1915-08-01 → 1918-11-11 | Gołub/Kuźniarska/Mąka, Rocznik Chełmski 22 (PL-5) |
| Zamość | almanya 1915-07-01 → 1915-09-01 · avusturya 1915-09-01 → 1918-11-11 | Stankiewicz 2021; Avusturya devri AY düzeyi (PL-6) |

- **Zamość iki pencere:** veride zaten iki pencereydi (Alman Temmuz → Avusturya Eylül), PL-6 ile
  uyumlu. Eylül ucu `kesinlik:{t:"ay"}` / `{f:"ay"}` ile beyanlı (D213: `1915-09-01` "ayın 1'i"
  değil "ay biliniyor"); 4 Eylül emir günüdür, yazılmadı.
- **Bitiş günü 1918-11-11 — KAYNAKSIZ (D210 raporu):** KASA'da da kaynaksızdı; mevcut `s: polonya`
  başlangıcıyla hizalı **sınır işareti**, ölçüm değil. Her `isg:`'de `kesinlik:{t:"belirsiz"}`
  ve kaynak metninde "t: KAYNAKSIZ …" yazılı. Seçenekler: (a) böyle bırak, beyanlı (diff bu) ·
  (b) Avusturya bölgesi (Lublin, Radom, Kielce, Chełm, Zamość) için Lewandowski 2013 MGGP sonu
  **1918-11-03** (kaynaklı ama idarenin sonu, işgalin şehirdeki son günü değil; `isg:` 3 Kasım'da
  biter, `s: polonya` 11 Kasım'da başlarsa 8 günlük `sovyet-rusya` görünür — iki uç ölçülmeli,
  D206) · (c) Varşova/Alman bölgesi için 11 Kasım 1918 silahsızlandırmasının kaynağı aranır
  (bu oturumda ARANMADI). `yıl yazılmaz` kuralı burada uygulanmaz: yıl biliniyor, gün bilinmiyor;
  `1918-01-01` yazmak işgali 10 ay kısaltırdı.
- **Kronoloji:** W5'in POLONYA-DUZELT-1006.diff'inin kronoloji parçası AYNEN alındı:
  `data/kronoloji_sinir_polonya_1915.js` + üreticisi `denetim/ARAC-KASA-POLONYA-1005-URET.py`.
  Dosya üretilmiş olduğu için elle düzenlenmedi; üretici koşturuldu ve **dosyayı birebir üretti**
  (CR'siz karşılaştırma). Radom maddesi 07-01 ay düzeyi → 07-20; Lublin maddesi eklendi
  (1915-07-30); Chełm ay düzeyi → 1 Ağustos. 16 madde. ⚠️ Üretici KASA'nın dosyası; kilit
  listemde yoktu, açıkça bildiriyorum.
  ⚠️ `data/paket_09.js` bu kronolojiyi içeriyor (`index.html`te yorumlu liste) ⇒ ekranda görünmesi
  için paketin yeniden üretilmesi gerekir (`arac/paketle.py`, koordinatör). Yapmadım.

## 2. ÖNCE/SONRA — tam `denetle.py` (ÖNCE = origin/main + D7-ISG; ikisi de çıkış 2, D8 taze ağaçta yok)
```
                ÖNCE                                      SONRA
2s   1720 kırılma · 187 AÇIK (tavan 189)          1712 kırılma · 187 AÇIK
2sk  3236 kapalı = 1571 YER + 1665 TARAF          3227 kapalı = 1562 YER + 1665 TARAF
2i   171 İŞGAL kırılması · 1 açık (tavan 1)       182 İŞGAL kırılması · 1 açık
2t   13 (tavan 13)                                13
D7   733 · isg 34 cep · 176 sorulmadı · cephe 3   730 · isg 35 cep · 192 sorulmadı · cephe 6
kaynaksız s: 1930 (tavan 1968)                    1935
```
Öteki bütün satırlar (1, 1b, 2, 3, 4, 5, 8, dönem sağlığı, konum, mükerrer…) birebir.
Kronoloji parçası eklenmeden ve eklendikten sonra ayrı ölçüldü: özet satırlarına etkisi **0**
(2i ve 2t zaten karşılanıyordu; parça doğruluk içindir, kapı için değil).
- **kaynaksız `s:` +5:** beş `yerlesimler.js` kaydının kayıt düzeyinde `kaynak:`'ı yok; KASA
  kaynağı `s:` dönemindeydi, şimdi `isg:`'de. Kaynaksızlık ölçümü `isg:` okumuyor — W8-D7ISG
  yan sorusunda bulunan "İLGİLİ ama okumuyor" kusuru burada tam olarak görünüyor. Tavan içinde.
  KASA öncesi hâl de kaynaksızdı (geri dönüş).
- **egemen-isgal-altinda +16** = 8 kayıt × (1917-03-15, 1917-11-07): Rus zinciri işgal altında
  el değiştiriyor, sorulmuyor (D7-ISG ölçütü).

## 3. Sınav — D7-ISG + POLONYA-ISG uygulanmış hâl (üyelikle)
Ana D7 733 → **730**, çıkan üçü:
`1915-07-01 Radom (Polonya) HABSBURG` · `1915-07-01 Zamość almanya` · `1915-10-01 Kielce HABSBURG`.
Hiçbiri kaybolmadı, her biri ölçülerek sınıflandı:
- **Zamość 1915-07-01 `isg:almanya` → İŞGAL CEBİ** (ada Zamość, 185 km Kielce, A-koridor) ✓ görünür.
- **Radom 1915-07-20 `isg:HABSBURG` → işgal geçici-cephe muafı.** Kanıt: `D7_CEPHE_GUN=0` ile
  koşunca cep olarak çıkıyor (ada Radom, 171 km Krakov); bir yıl içinde Lublin/Chełm işgaliyle
  Habsburg gövdesine bağlanıyor.
- **Kielce 1915-10-01 `isg:HABSBURG` → ADA DEĞİL.** O gün Habsburg fiilî bileşeni ≥6 (komşu 6).
  `s:` hâlinde Kielce+Krakov+Radom adasıydı, çünkü Lublin/Chełm/Zamość Habsburg sayılmıyordu.
  Artık Avusturya işgal bölgesi bitişik ⇒ doğru sonuç.
- Aynı muafta yeni: Lublin 1915-07-30 (ada Lublin+Radom) ve Chełm 1915-08-01 (Chełm+Lublin+Radom).
  Cephe muafı 3 → 6 = Radom, Lublin, Chełm.
- Öteki işgal başlangıçları ölçüldü, hiçbiri ada değil: Kielce 1915-05-13 almanya ≥6 · Zamość
  1915-09-01 HABSBURG ≥6 · Varşova 1915-08-05 ≥6 · Łódź 1914-12-06 ≥6 · Częstochowa 1914-08-03 ≥6.
- `denetim/ARAC-D7-ISG-SINAV-1006.py` bu veride de GEÇTİ.
⇒ Beklenti ("üç kayıt cep olarak görünür, kaybolmaz") **kısmen**: kaybolan YOK, ama cep olarak
yalnız Zamość görünüyor; Radom muafta, Kielce ada değil. İkisi de ölçülmüş sınıf, körlük değil.

## 4. Öngörü sınavı (§0)
Ö1 ✓ · Ö2 ✓ (−8 kırılma, açık sabit) · Ö3 ✓ (+11, açık 1) · Ö4 ✓ (13) · Ö5 ✓ sayı (730, kova 35);
mekanizma kısmen: Kielce'nin muafa değil "ada değil"e gideceğini öngörmemiştim.

## 5. Dosyalar · ağaç
- `C:\atlas-umit\denetim\POLONYA-ISG-1006.diff`: data/yerlesimler.js · data/yerlesimler_p0037.js ·
  data/kronoloji_sinir_polonya_1915.js · denetim/ARAC-KASA-POLONYA-1005-URET.py. Taze origin/main
  (8552686e) ağacında ileri ✓ · -R ✗ · D7-ISG-1006.diff ile birlikte ✓.
- Bu rapor. Commit YOK. Motor tuzuna dokunulmadı.
