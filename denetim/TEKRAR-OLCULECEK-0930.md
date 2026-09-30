# TEKRAR-OLCULECEK-0930 — 8 `tekrar` + 31 `olculecek`

*30 Eylül 2026 · makine okunur: `TEKRAR-OLCULECEK-0930.json` · ham ölçüm:
`TEKRAR-OLCULECEK-0930-OLCUM.json` · aletler: `ARAC-TEKRAR-OLCULECEK-0930-{GOVDE,TOPLU,CIZ,PETEK}.py`*

**Veriye dokunulmadı.** `git` yok · `denetle.py` koşmadı · `app.js/index.html/css` yalnız OKUNDU.

## İki sayı

```
8 tekrar     → 4 GERÇEK BORÇ · 4 MÜKERRER İŞARET
31 olculecek → 31 ölçüldü (3'ü kısmi) · 0 olculemedi
               yeni hüküm: bayat 17 · sirada 9 · senin-kararin 2 · cozuldu 2 · once-cozuldu 1
```

## Evren ve yöntem

- **Gövde:** koşu 18 çıktısı (2ddede3d, yayında). Kodlanmış dosyalar `kodla.py coz-c` ile
  scratchpad'e çözüldü; havuzlar **mmap + halka ofset dizini** ile okundu (makinede boş RAM
  270 MB–2,8 GB arasında oynadı; 171 MB'lık JSON'u bütün yüklemek yerine).
- **Aletin iki yönlü sınavı:** Rusçuk kutusunda `isg:rusya` 1812-05-01'de 4.146 km² GÖRÜNDÜ,
  1812-12-03'te 0. Yani alet işgali görüyor ve "0" boş evren değil.
- **Boşluk maskesi:** `ne_10m_land − ne_10m_lakes`. İlk koşuyu `motor_kara.geojson` ile yaptım
  ve Kazak kutusunda 55.470 km² "denize taşan boya" çıktı. Sebebi: o dosya motorun ÇIKTISI
  (CLAUDE.md §5); ona göre ölçmek döngüsel. Binme sayıları maskeden bağımsız, iki koşuda aynı.
- **Tarayıcı:** yayındaki site r10713, tek sekme, `queryRenderedFeatures` + DOM + `getPaintProperty`;
  iş bitince kapatıldı.
- **Veri:** `girdi.yukle()` (4.296 nokta). Adlar `ARAC-NORMAL-0903.norm` ile eşlendi.

## Kova ① — 8 `tekrar`

Ayırma ölçütü: aynı somut kusur **daha önceki bir partide** (başka gün) bildirilmiş ve bugünkü
veride **hâlâ duruyorsa** GERÇEK BORÇ. İkizi **aynı partide** (aynı gece) ise MÜKERRER: Emre
ilkinin cevabını görmeden ikincisini yazmış.

| madde | sınıf | ölçüm (bugün) | ilk bildirim | yönlendir |
|---|---|---|---|---|
| 0035/H-0001 Sîva çölü | **GERÇEK** | 1686: tek vaha noktası 100.109 km²'lik kutunun **%95**'ini Osmanlı boyuyor | 0012/H-0001 (11 Ağu) | YAMA-MOTOR (GORUNUM-ABCD, ikiz H-0047) |
| 0035/H-0057 Doğubayazıt + Ferhat Paşa | **GERÇEK** | Doğubayazıt 1514→1920 ada; Erzurum–Doğubayazıt arası (41,4–43,3°D) **0 nokta**. Sakkız/Serdeşt/Merîvan/Sarâb 1590'da safevi | 0021/H-0028 (17 Ağu) + 4 bildirim daha | UYGULA-YERLESIM + Emre (0081/H-0021) |
| 0082/H-0020 Deşt-i Kıpçak | **GERÇEK** | 1739'da v:kirim, dört yanı rusya ⇒ ada. **Çare hazır:** `KAFKAS-KORFEZ-0081-uygula.py --don`, dizgileri bugün 1'er kez eşleşiyor. Koşmadı çünkü Emre kararı D'yi değiştiriyor | 0022/H-0005 (18 Ağu) — **en az 8 bildirim** | **EMRE ONAYI** → UYGULA-YERLESIM |
| ORTA 0053/H-0008 Szatmár | **GERÇEK** | 1526→1918 kesintisiz avusturya, 1683'te Habsburg adası. TDV (1 Eki yeniden, M-5694): 5 yazımda başlık 0; kapsayıcı `tokoli-imre` canlı ama Szatmár'ı anmıyor ⇒ bulunamadı. İz: Angyal 1888-89 · László (ed.) 1983 | 0027/H-0004 (22 Ağu) — **6 bildirim** | kaynak araştırması → UYGULA-YERLESIM |
| 0042/H-0032 Bağdat/Timur | mükerrer | ikiz 0042/H-0030. 1393 başı madde gününe çekilmiş ✓ ama 1393 ve 1402'de Bağdat, 16 Celayirli noktası arasında tek hücre | aynı parti | ikizde |
| 0082/H-0037 Özi 1788 | mükerrer | ikiz H-0032 (başlık birebir aynı). Özi 1788-12-17 s:rusya; isg önerisi inmedi | aynı parti | ikizde |
| 0082/H-0060 Asyut | mükerrer | ikiz H-0058. 🔴 **İkizin notu yanlış:** "isg yok" diyor, oysa isg 1798-07-01'den beri var (2aec5d6e). Kusur gün: kaynak 1798-12-25 | aynı parti | ikizde, tarif düzeltilerek |
| 0082/H-0094 Iğdır | mükerrer | ikiz H-0093. Iğdır d 1534→1878 (1833'te OSM). Aynı kaydın öbür ucu 0081/H-0030'da | aynı parti | ikizde (SAFEVI-DOGU'dan SONRA) |

⚠️ **Hüküm kelimesi:** mükerrer dördüne `gerek-yok` yazdım, `once-cozuldu` DEĞİL. Dördünün de
ikizi AÇIK (`sirada`). `once-cozuldu` "önceki pakette halledilmiş" der ve yanlış kapanış
olurdu. İkiz kapanınca bunlar `once-cozuldu`ya çevrilebilir. Karar senin (koordinatör).

## Kova ② — 31 `olculecek`

### Bayat (17) — kusur bugünkü gövdede YOK

```
0035/H-0100 Rusçuk 1812-12       rusya/isg 0 km² (kontrol: 05-01'de 4.146)
0035/H-0101 Buraymî 1820         boyanmayan 7.763 → 128 km²
0052/H-0012 Vladikavkaz 1605     nokta boyanmıyor (önce %100 tâbi) — dağı aşan üçgen yok
0052/H-0019 Bağdat kaybı         18/18 şehir aynı gün + aynı vurgu (antlasma-fark-dolgu)
0052/H-0069 Azak 1642            düz kenarlı kama yok; binme 81 km² (küçük)
0052/H-0092 Katar 1650           Katar'da safevi 0; safevi yalnız Bahreyn (581). "Düz çizgi" alt sorusu ÖLÇÜLEMEDİ (görsel yok)
0052/H-0097 ×5 1672              binme 1.139 → 29
0052/H-0099 ×3 1672              binme 971 → 0 · ⚠️ Edinburg noktası hâlâ ingiltere 1281→1923
0052/H-0102 Kazak 1672           binme 972 → 0, şerit yok
0052/H-0107 Şan×Toungoo          binme 10.932 → 0 · iki boşluk kaması kaldı
0052/H-0109 Qing bantları        binme 4.654 → 0
0052/H-0110 Hong Kong/Makao      binme 1.425 → 1 · portekiz yalnız 209 km²
0081/H-0008 Slavonya 1512        boyanmayan kara 0
0064/H-0011 Dubrovnik sarı nokta bugün daire katmanı yok
0064/H-0012 Kostajnica halkası   bugün halka yok — "Esri altlık" açıklaması ÇÜRÜDÜ (altlık World_Physical_Map)
0066/H-0004 Hotin 1769           lehistan∩isg:rusya 17 km² (şerit)
0066/H-0011 Vladikavkaz 1774     düz Rusya yeşili, saydam üçgen yok
```

### Çözüldü (2) — değişiklik indi

H-0105 / H-0106 (5 günlük yürüyüş tavanı): koşu 18 `MOTOR_YURUYUS=1` ile koştu. Petekler
MOTOR-0916'nın **sürtünmeli** öngörüsüyle örtüşüyor, düz daireyle değil:

```
Çamdo      20.623 km²   (öngörü 20.815 · düz daire 112.932)
Gauhâtî    46.612       (48.195 · 90.088)
Sibsâgar   49.465       (50.585 · 92.689)
```

### Sırada (9) — kusur SÜRÜYOR, yönlendirildi

```
0042/H-0002  1323 bizans∩OSM 2.009 · 1352 Gelibolu 181 (10 görsel okunmadı — kısmi)   YAMA-MOTOR
0042/H-0016  Ege 1400: denize taşan 1.797 km² (%2,0) · boyanmayan 2.196 (%2,4) — ilk ölçüm, eşik kararı sende
0052/H-0112  B2 zincir yok (uret_petek.py:3176)                                      YAMA-MOTOR (.diff)
0052/H-0124  Vladikavkaz hücresi boş 11.043 km²; kur:1784 + kasitli_bosluk + bos:"hata" çelişkisi   UYGULA-YERLESIM
0075/H-0011  Annaba 1832 tâbi∩fransa 101 km²                                         YAMA-MOTOR
0075/H-0024  Konstantin 1837 tâbi∩fransa 310 km²                                     YAMA-MOTOR
0076/H-0072  Hadramut 1884 kesiri∩kuayti 35.485 km² (kuayti'nin %97'si) · kıyı + Mukalla boyasız   YAMA-MOTOR + UYGULA-YERLESIM
0076/H-0073  = H-0072
0081/H-0032  kırpma: ANT_FARK varken bilerek koşmuyor (app.js:12938); fark katmanı TEK darbe
             (0→0,92 ~0,9 sn→0), adet:2'nin iki yanıp sönmesi gözlenmedi — Emre'nin maddesi bilinmiyor (kısmi)   UFUK-DUGME
```

### Senin kararın (2) · daha önce çözüldü (1)

- **0052/H-0002:** 11 bozkırın 11'i v:kirim gevşek; dayanak Emre kararı D (13 Eyl) + TDV kirim.
  Tek çelişki Deşt-i Kıpçak = yukarıdaki 0082/H-0020 kararı.
- **0064/H-0003:** halka alt sorusu bayat; kalan HE yıl sapmaları (kalem 3) karar bekliyor.
- **0052/H-0126:** once-cozuldu. Soru Emre kararı D + ARASTIRMA-KIRIM-0912 + tartışma kartlarıyla cevaplı.

## Öngörü defteri — ölçümden ÖNCE yazıldı

```
P1 Sınıf A şerit örtüşmesi ≥%80 düşer           TUTTU     7.736 → 29 (−%99,6)
P2 H-0107 ≥1.000 km² kalır                        ÇÜRÜDÜ    0
P3 H-0110 portekiz ≥500 kalır                     ÇÜRÜDÜ    209
P4 H-0012 Vladikavkaz tâbi boyalı                  ÇÜRÜDÜ    boş
P5 H-0124 boşluk > 0                               TUTTU     11.043
P6 H-0102 boşluk artar                             ÖLÇÜLEMEDİ  GEOMETRI-0916 maskesi bilinmiyor
P7 Katar'da safevi > 0                             ÇÜRÜDÜ    Katar 0 (58 km² Bahreyn şeridi)
```
Dört çürüyen öngörünün dördü de iyi yönde: motor benim sandığımdan fazla düzelmiş.

## Yan bulgular

- **Y1 — en önemlisi:** Osmanlı gövdesi (`donemler.js`) × yabancı gövde (`devletler_harita.js`)
  çakışması SÜRÜYOR: 1323 bizans 2.009 · 1352 bizans 181 · **1605 safevi 1.007 (Revan–Gümrü)** ·
  1832 fransa 101 · 1837 fransa 310 km². Aynı ölçümde yabancı×yabancı çiftler ~0 çıktı.
  ⇒ GOVDE-CAKISMA-0079 çaresi Osmanlı×yabancı çiftini kesmiyor gibi. İstisna: kesiri×kuayti
  35.485 km² (yabancı×yabancı). Tek bir yama altı maddeyi birden kapatabilir.
- **Y2:** KAPAT-0081-82'nin 0082/H-0058 notu ("Asyut'ta isg yok") yanlış ölçüm.
- **Y3:** "Bağdat'ın Safevîlere kaybı" maddesi kamerayı z2,5'e, bütün dünyaya açıyor.
- **Y4:** Edinburg `s:ingiltere` 1281→1923 (`data/yerlesimler.js:1034`).
- **Y5:** KAPAT-KUYRUK'ta ayrıca 2 tekrar + 38 olculecek var; bu paketin evreni dışında, dokunulmadı.

## Değişen / yeni dosyalar (hepsi YENİ, hiçbiri mevcut dosyada değişiklik değil)

```
denetim/TEKRAR-OLCULECEK-0930.json
denetim/TEKRAR-OLCULECEK-0930.md
denetim/TEKRAR-OLCULECEK-0930-OLCUM.json
denetim/ARAC-TEKRAR-OLCULECEK-0930-GOVDE.py
denetim/ARAC-TEKRAR-OLCULECEK-0930-TOPLU.py
denetim/ARAC-TEKRAR-OLCULECEK-0930-CIZ.py
denetim/ARAC-TEKRAR-OLCULECEK-0930-PETEK.py
```
⚠️ Aletler çözülmüş gövdeyi scratchpad yolundan okur. Başka oturum kullanacaksa önce
`py arac/kodla.py coz-c data <yol> donem|devlet|govde`, sonra `S=` satırı düzeltilir.
