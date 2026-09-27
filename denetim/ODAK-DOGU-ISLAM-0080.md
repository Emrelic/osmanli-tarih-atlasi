# ODAK-DOGU-ISLAM-0080 — teslim raporu (27 Eylül 2026)

İran · Kafkas · Kuzey Karadeniz · Arabistan · Memlük — 13 dosya, **202 madde**.
Uygulayıcı: `denetim/ODAK-DOGU-ISLAM-0080-uygula.py` (varsayılan KURU KOŞU, `--uygula` yazar,
`--grup A,B,C,E` kısmî, `--ayrinti` her öneriyi sınıf + gerekçe + kaynakla basar).

## ① Ölçtüm

**Taban** (`py arac/odak_olc.py --dosya … --ayrinti`, 13 dosya): şartname tablosuyla **birebir**
— 96 ODAKSIZ + 106 BEYANLI→yabancı = 202. Bayat değil.

**Sınıf dağılımı** (202):

| sınıf | madde | yazılan |
|---|---|---|
| A | 23 | 12 `yer_id` (havuzda) · 11 `yer_kon` (havuzda yok, konum biliniyor — hepsi YAKLAŞIK işaretli) |
| A→odak_yer | 21 | yer belli ama havuzda yok VE koordinatı kesin veremiyorum → yalnız kamera; veriye "olay burada" YAZILMADI |
| B | 100 | `odak_yer` (havuz adları) ya da `odak_kimlik` (taraflar) |
| C | 50 | `odak_kimlik [devlet]` ya da o ülkenin çerçevesi (`odak_yer`) |
| D | 0 | bu pakette Osmanlı çapında madde yok — 106 beyanın 106'sı kaldırılıyor |
| E | 8 | 7'sine hiçbir şey yazılmadı · 1'inden (APOC 1909) yalnız `kapsam_genis` kaldırılıyor |

**Kuru koşu sayaçları:** değişen 195 · E (dokunulmadı) 7 · kayıt yok 0 · eski tutmuyor 0 ·
şartı sağlamadı 0. Betik şunları sınıyor: `odak_yer` adlarının HEPSİ havuzda mı ·
`odak_kimlik` o GÜN ≥2 yerleşim mi (`suzgec.js sahipKimlikte` taklidi) · `yer_id` havuzda mı.
Sonra düzenlenmiş metni node ile yeniden okuyup **her maddeyi tam eşitlikle** karşılaştırıyor.
Sonuç: 13 dosyada da değişen maddeler beklendiği gibi, başka hiçbir alan değişmemiş ✓.
Dosyanın anahtar üslubu korunuyor (`kronoloji_sinir_ortadogu.js` tırnaklı JSON anahtar kullanıyor).

**ÖNGÖRÜ — ölçümden önce yazıldı.** Koordinatör uyguladıktan sonra
`py arac/odak_olc.py --dosya <dosya>` koşar:

| | önce | sonra (app.js'in gerçek davranışı) | sonra (`odak_olc.py`'nin bugünkü sınavı) |
|---|---|---|---|
| ODAKSIZ | 96 | **8** (7 E + APOC) | **53** |
| BEYANLI→yabancı | 106 | **0** | **0** |

Dosya başına `odak_olc` öngörüsü: akkoyunlu 14→8 · altinorda 13→4 · arabistan 4→6 · gurcistan 0→0 ·
iran 0→7 · iran_ardillari 13→4 · karakoyunlu 23→6 · kirim 0→4 · memluk 0→5 · rusya 0→0 ·
safevi 10→6 · sinir_komsu 8→0 · sinir_ortadogu 11→3. BEYANLI her dosyada → 0.

## ② Bulunamadı

**E sınıfı, 8 madde** — kaynak yer vermiyor, tahmin yazılmadı:
- karakoyunlu 1389-04-01 · Kara Mehmed'in öldüğü savaşın yeri
- karakoyunlu 1406-10-15 · kaynak yalnız "Aras kenarında" diyor. Akademik literatür Nahçıvan yakını diyor, ama bu oturumda o kaynağı açmadım
- akkoyunlu 1493 · Baysungur · akkoyunlu 1499 · Aziz Kendi'nin yeri
- iran_ardillari 1265 · Kuh-ı Cud / Binban
- altinorda 1380-01-01 · Kalka: TDV "Don'a dökülen Kalka" diyor, oysa Kalka Kalmius'a dökülür. Kaynak kendi içinde tutarsız (tuzak ⑥)
- altinorda 1405 · Karaton ırmağı
- iran 1909 APOC · Mescid-i Süleyman havuzda yok. Yalnız `kapsam_genis` kaldırılıyor: madde ODAKSIZ olacak ve panel eksikliği gösterecek

## ③ İstiyorum / bildiriyorum

1. **ALET KUSURU — `arac/odak_olc.py:156`.** Satır `len(ok) >= 2` diyor, yani "en az iki
   KİMLİK" arıyor. `app.js:11751` ise `n >= 2` diyor: en az iki YERLEŞİM. Tek kimlikli
   `odak_kimlik:["safevi"]` app.js'te çalışıyor, alet onu ODAKSIZ sayıyor. Bu pakette 45 madde
   bu yüzden aletin gözünde ODAKSIZ kalacak (53 − 8). Öneri: satır `isinstance(ok, list) and ok`
   olmalı; yerleşim şartı ayrıca sınanmalı. Aletin sahibi koordinatör, ben dokunmadım.
2. **TDV iç çelişkisi — karakoyunlu 1468-07-01 "Hasan Ali'nin yenilgisi".** `karakoyunlular`
   maddesi "Zilhicce 872 / Temmuz 1468" diyor, `uzun-hasan` maddesi aynı yenilgiye (Merend)
   "Safer 873 / Eylül 1468" diyor. Tarih alanına dokunmadım.
3. **Hayalet devlet olabilir — `zend`:** künyede `f:1751-01-01` yazıyor, ama veride
   1750-01-01'de 131 yerleşim `zend` görünüyor (`§3.5` sınıfı).
4. **Kimlik boşlukları (ölçüldü):** `gurcistan` 1231'de 0, 1590'da 0, 1724'te 1 yerleşim ·
   `kibris-krallik` 1271'de 0 yerleşim. Künye pencerede ama haritada toprak yok. Bu yüzden
   bu maddelerde `odak_yer` çerçevesi kullandım.
5. **Ad tuzağı:** havuzdaki `Sûr`, Lübnan'daki Sur (Tyre) değil, Umman'daki Sur. Kullanmadım.
   `Isfahan` havuzda İ'siz yazılı.
6. **Nokta önerileri** (yeni yerleşim eklemedim): Otlukbeli/Tercan · Avnik · Ucan · Alıncak ·
   Eleşkirt · Bingöl/Kiğı (Sancak) · Mescid-i Süleyman · Refah · Birüssebi. Bu noktalar
   eklenirse ilgili `yer_kon`/`odak_yer` alanları `yer_id`ye çevrilebilir.
7. **Yaklaşık `yer_kon` (11):** Otrar · Mercidâbık · Eleşkirt · Bingöl–Kiğı (×2) · Ergani ·
   Sarhad · Gucduvan · Aynicâlût · Kulikovo · Refah · Birüssebi. Bunların hepsi yerin bilinen
   konumu (yerleşim merkezi ya da meydan), tahmini hata payı gerekçede yazılı. Tartışılırsa
   `--grup B,C,E` ile A sınıfı dışarıda bırakılıp ayrıca indirilebilir.

TDV gövdeleri `denetim/ODAK-DOGU-ISLAM-0080-tdv-onbellek/` altında (commit edilmedi). Hepsi
HTTP 200 döndü, gövdeler dolu. Önbelleği `denetim/ODAK-DOGU-ISLAM-0080-tdv.py` üretiyor.
