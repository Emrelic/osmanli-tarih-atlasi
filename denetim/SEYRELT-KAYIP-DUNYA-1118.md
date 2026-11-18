# SEYRELT KAYIP TARAMASI — dünya (kutulu, KURU ölçüm) — 18 Kasım 2026

Ağaç: `origin/main` 7bcbf15a3 (seyrelt `[:-1]` düzeltmesi DAHİL; `_halka_sade` son köşeyi artık tolerans bakarak işliyor).
Motor kodu DEĞİŞTİRİLMEDİ, tam koşu YOK. Makine: HAVVA (worktree, Temp dışı), DEM hard-link.

## Yöntem
`denetim/ARAC-UFUK-BANT-GOVDE-SINAV-1117.py` (bölüm ⑥ mantığı) kopyası: seyrelt satırından HEMEN SONRA her devlet-dönemin
seyrelt-öncesi (`_PRE_SEY`) ve sonrası taban gövde alanını (`_ham_km2`) JSON'a yazıp çıkar (bant/dolgu aşaması YOK).
Betik repoda değil (scratchpad `seyrelt1118/tarama.py`; harness'e 12 satırlık ek: ⑥ ölçüsünü seyrelt sonrası yazar). Alan = kutuya kırpılmış gövde.
- **Tarih aralığı sonucu etkilemez:** ⑥ kutuya değen devletlerin BÜTÜN `g`'li dönemlerini tarar (MÖ dahil; Avrupa-Batı kutusunda 45 MÖ,
  264 MS<1281, 1580 1281+ dönem). Bu yüzden "3-4 tarih aralığı" yerine her kutu TEK koşu (1900-01-01..03) ile bütün çağları kapsadı.
- **Maliyet:** her kutu 45-55 dk (FAZ 1 yabancı gövde hesabı 2251 devleti tarıyor; kutu küçültmek maliyeti düşürmüyor,
  ağır devletler — Fransa, Rusya, İngiltere, Almanya, Safevi — her kutuda dönüyor). **Dünya kutusu (−180,−60,180,85) denendi:
  hazırlık 1 s 18 dk, FAZ 1 160 devlet/42 dk ⇒ ~9 saat, iptal edildi.** 11 kutudan 7'si bitti.

## Ölçülen kutular (km² kırpılmış, benzersiz devlet-dönem sayıları kutular arası çakışır)
| kutu (lon/lat) | devlet-dönem | durum |
|---|---|---|
| Avrupa-Batı −5,42,12,52 | 1889 | ölçüldü |
| Anadolu-Yakındoğu 26,32,46,42 | 1680 | ölçüldü |
| Hint 72,10,88,28 | 793 | ölçüldü |
| Doğu Asya 105,25,121,40 | 515 | ölçüldü |
| Kuzey Afrika −8,28,12,37 | 754 | ölçüldü |
| Okyanusya 110,−40,155,−10 | 260 | ölçüldü |
| Kuzey Amerika −105,15,−85,30 (Mezoamerika) | 587 | ölçüldü |
| Avrupa-Doğu 18,44,36,56 | — | **ölçülmedi** (süre) |
| Orta Asya 60,36,78,46 | — | **ölçülmedi** |
| Sahra-altı −10,−5,15,12 | — | **ölçülmedi** |
| Güney Amerika −80,−20,−60,0 | — | **ölçülmedi** |

Hint kutusunda `data/yerlesimler_hint_adalar.js` Defender karantinası yüzünden (Errno 22, Temp kopyası) koşu süresince geçici olarak boş liste yapıldı
(sonra `git checkout`); yalnız noktasız Hint Okyanusu adaları etkilenir, seyrelt oranlarına etkisi ihmal edilebilir.

## Sonuç (7 kutu birleşik, her (devlet, dönem f) için en büyük sapmalı kutu; 4917 benzersiz devlet-dönem, öncesi ≥100 km²)
| ölçü | sayı |
|---|---|
| **>%5 alan kaybı** | **3** (hepsi <1.400 km² gövde: Kanal Adaları, Maitraka, Aydın) |
| >%5 alan kazancı | 0 |
| >%2 kayıp | 18 |
| **>%1 kayıp** | **342** (302'si TEK devlet: `ingiltere`, ortak İngiliz kıyı halkası; geri kalan 40 kayıt ~43 devletten) |
| >%1 kazanç | 32 |
| Toplam alan (öncesi → sonrası) | 1.157.124.559 → 1.156.924.080 km²-dönem (−%0,017) |

Çağ dökümü (devlet-dönem / >%5 / >%1): MÖ 194 / 0 / 17 · MS <1281 1206 / 2 / 17 · 1281+ 3517 / 1 / 340.
Boyuta göre >%1 kayıp: <1.000 km² 4/43 · 1-10 bin 29/680 · 10-100 bin 309/2126 (302'si İngiltere) · >100 bin km² **0/2068**.

### En büyük 20 mutlak kayıp (km²) — hepsi <%1,1
| devlet | tarih | öncesi | sonrası | Δ km² | % |
|---|---|---|---|---|---|
| sur-hanedani | 1540-05-17 | 445.264 | 443.136 | −2.128 | −0,5 |
| avustralya | 1975-09-16 | 4.780.228 | 4.778.784 | −1.444 | −0,03 |
| avustralya | 1911-01-01 (1914-09-17…1947-11-01 aynı) | 4.790.648 | 4.789.395 | −1.252 | −0,03 |
| qing-hanedani | 1645-01-18 | 638.418 | 637.665 | −753 | −0,1 |
| kuzey-bolgesi-sa | 1884-01-01 | 668.491 | 667.776 | −715 | −0,1 |
| ingiltere | 1429-07-16 | 127.425 | 126.752 | −673 | −0,5 |
| avustralya | 1906-01-01 | 4.131.922 | 4.131.250 | −673 | −0,02 |
| ingiltere | 1422-01-01 / 1420-12-01 / 1429-07-10 | 135-144 bin | | −668 | −0,5 |
| ming-hanedani | 1644-05-27 | 305.873 | 305.215 | −658 | −0,2 |
| ingiltere | 1794-06-15…1796-09-01 (7 dönem) | 61.423 | 60.767 | −656 | −1,1 |
(Liste 20'ye ait kalan satırlar: ingiltere 1436/1439/1372/1370/1360 −640…−647; hepsi aynı kıyı halkası.)

### En kötü 5 vaka (oran)
1. kanal-adalari 1204-01-01: 191 → 157 km² (−%17,8)
2. maitraka 0465-01-01 (Hint): 1.387 → 1.268 (−%8,6)
3. aydin 1390-01-01: 335 → 307 (−%8,4)
4. sicilya-aragon 1302-08-31 (Kuzey Afrika kutusu): 530 → 508 (−%4,3)
5. gelre-dukaligi 1339-03-19 / 1514 / 1536: 3.064 → 2.949 (−%3,8); danelaw 0880: −%3,4

(Tam sıralı ilk 40: ham dosya `seyrelt1118/son2.txt`, repoda değil.)

## Düzeltme sonrası hâlâ görülen kayıp NEDENİ
1. **Düzeltmeden kaynaklanan kayıp yok:** >%5 sayısı 3 ve hepsi küçük (<1.400 km²) gövde. Önceki raporun (`UFUK-BANT-DAL-NOTU-1117`) Alp kutusundaki
   >%5 = 9 (Venedik 1281 −%7,3 vb.) bu taramada üretilmedi: Alp kutusu (5,43,17,49) ölçülmedi; Avrupa-Batı kutusunda Venedik/Almanya listede yok.
2. **Kalan kayıp seyreltmenin kendisi (Douglas-Peucker, `SEYRELT_TOL=0,03°` ≈ 3,3 km):** kıyı/vadi girintisini kesiyor; oran gövde küçüldükçe artıyor
   (3 vaka 190-1.400 km²). >%1 vakaların 302'si TEK ortak halka (İngiltere kıyısı, İskoçya fiyortları) — yani "342 dönem" aslında ~40 eşsiz halka.
   Kazanç (+%1 üstü 32) de aynı yöntemden: DP köşeyi dışarı da taşıyabilir. Toplam alan −%0,017.
3. **Ring-fallback kolları:** sayaçlar (seyrelt çıktısındaki `halka_asli / halka_koru / parca_asli / parca_kalan_gecersiz`), kutu başına:
   Avrupa-Batı 426/0/0/204 · Anadolu 547/0/3/250 · Hint 189/12/1/93 · Doğu Asya 154/63/0/79 · K.Afrika 60/0/0/11 · K.Amerika 103/21/0/53 · Okyanusya 23/3/2/12.
   `halka_asli` (aslına dönen) alan KAYBETTİRMEZ; `halka_koru` (topoloji korumalı yeniden-DP) kaybettirir ama sayısı küçük. **`parca_kalan_gecersiz` 11-250:**
   çok halkalı parçada delik/dış halka kesişmesi seyreltme sonrası da düzelmiyor (aslı da geçersiz); alan etkisi ölçülmedi (bu araç geçerliliği değil alanı ölçüyor).
   Bu sayaçların alan kaybına katkısı kol-kol AYRIŞTIRILMADI (**ölçülmedi**); yukarıdaki kayıplar küçük olduğu için baskın neden DP'dir sonucu
   "tutarlı", kanıtlanmış değil.

## Düzeltme ÖNERİSİ (motor DEĞİŞTİRİLMEDİ — yama metni; uygulanırsa `uret_petek.py` tuzu değişir ⇒ tam inşa + `uret_altlik`)
Küçük gövdede alan kaybını sınırlayan "halka alan koruması" (seyrelt döngüsünde, `t2` hesaplandıktan sonra):

```python
# _halka_sade(r, koru, tol_=None) imzasına tol_ ekle; içeride `tol` yerine `tol_ if tol_ else tol`.
def _alan(h):
    try:
        return abs(_PG(h).area)
    except Exception:
        return 0.0
...
    for _hi, r in enumerate(halka_hav):
        t2 = _halka_sade(r, False)
        ...(mevcut üç kademe)...
        # ④ ALAN KORUMASI: halka alanı %3'ten fazla (ya da 0,5 km² eşdeğerinden fazla) değiştiyse
        #    tolerans yarılanarak en çok 2 kez yeniden dene; hâlâ aşıyorsa aslını koru.
        a0 = _alan(r)
        if a0 > 0 and t2 is not r and len(t2) >= 4:
            for _t in (tol / 2, tol / 4):
                if abs(_alan(t2) - a0) <= 0.03 * a0:
                    break
                t3 = _halka_sade(r, True, _t)
                if len(t3) >= 4 and _basit(t3):
                    t2 = t3
            else:
                if abs(_alan(t2) - a0) > 0.03 * a0:
                    t2 = []                      # ③ aslına dön
                    _say["halka_asli"] += 1
```
Not: ortak sınır köşeleri (don_kose) sabit kalır, dolayısıyla komşular arası boşluk riski yoktur; ama alan koruması BAYT bütçesini artırır
(küçük halkalar seyrelmez). Önce tavan: etkilenecek halka sayısı bu taramadan ölçülmedi — uygulamadan önce bir kutuda (Avrupa-Batı) halka başına
alan-oranı histogramı çıkar. Yalnız 3 vaka (>%5) için bu değişiklik **şart değil**; karar Emre'nin.

## Harness/ortam notları
- Harness repo kökünde `data/devletler_harita.js` ve `data/ufuk_bantlari.js` yazar (gitignore'lu); bir sonraki koşunun `_eski_yabanci_taban()`
  adımı onu okuyup çöker (`TypeError: 'float' object is not subscriptable`, `uret_petek.py:7188`) — her koşudan sonra silindi.
- Defender: `yerlesimler_hint_adalar.js` Temp kopyasında Errno 22 (bkz. yukarı).
- Ölçülmeyenler: Avrupa-Doğu, Orta Asya, Sahra-altı, Güney Amerika kutuları; Alp kutusu tekrarı; seyrelt-kol ayrıştırması; MÖ için ayrı kutu (MÖ dönemleri
  Anadolu-Yakındoğu/Avrupa-Batı/Hint/D.Asya/K.Afrika kutularında 194 dönemle kapsandı, Mısır/Mezopotamya geniş MÖ imparatorlukları kısmen).
