# PAKET-0076-BITIR-1004 — parti-emrelic-0076'nın kalan 44 kalemi

4 Ekim 2026 · oturum PAKET-0076-TASNIF-1004 · önceki adım: `PAKET-0076-TASNIF-1004.md`
Hükümler aşağıdaki tabloda ÖNERİDİR; CEVAP.json'a yazılmadı (yazmak koordinatörün).

## SAYIM — 44 kalem
```
✅ cozuldu (değişiklik İNDİ)                 10   H-0149 · H-0123 · 📖 6 · 🟡 2
⏳ kosu-bekliyor (diff HAZIR, uygulama sende)  10   Berlin A + H-0037
▶ sirada                                     8   B sınıfı 5 · Kars · Sırbistan noktaları 2
◔ olculecek                                  1   İşkodra
🟤 cozulemedi                                 2   Dobruca · Karadağ noktaları
🔴 senin-kararin                             13   D-RENK 8 · Karlofça · H-0009 · H-0052 · H-0066 · H-0080
                                             ---
                                              44
```

## ① KATAR — niçin BEŞ KEZ geldi (ölçüldü)
**Hüküm doğruydu, uygulama geç indi.** Kök sebep baştan beri aynıydı: iç dolgu noktasının
penceresi Doha'nınkiyle uyuşmuyordu (NOKTA-ORTADOGU-0077 · SINIR-CIZGI-0076 aynı teşhisi koydu).
Zincir: YAMA C yazıldı → **geri alındı** (2e656b0d, Değişmez 1b deliği açtı) → UYGULA-YERLESIM-0930
dolguya `s: 1868-1871 katar` + `v: 1871-1913` + `isg: 1916` yazdı (52222fa3, koşu 19 girdisi) →
**yayına ancak bugün r11195 ile indi.** Arada Emre üç ayrı tarihte (1871 · 1913 · 1916) aynı
görüntüyü gördü ve iki ayrı pakette (0081 · 0082) daha yazdı.

ÖLÇÜM (localhost r11195, `queryRenderedFeatures`, 6 nokta × 9 gün):
```
1871-04-20  6/6 katar         1871-10-01  6/6 tâbi        1900-01-01  6/6 tâbi
1913-07-28  6/6 tâbi          1913-08-15  6/6 katar       1916-12-01  6/6 katar + isgal
1521-06-01  batı/iç/kuzey cebri · Doha/güney BOŞ                     ← HÂLÂ BÖLÜK
1602-01-01  batı/iç/kuzey tâbi  · Doha/güney SAFEVİ (Bahreyn'den)   ← HÂLÂ BÖLÜK
1830-01-01  batı/iç/kuzey benihalid · Doha/güney BOŞ (Doha devletsiz beyanı) ← HÂLÂ BÖLÜK
```
⇒ **H-0149 (1913) · 0076/H-0023 (1871) · 0077/H-0029 (1916) · 0082/H-0101 (1871) ÇÖZÜLDÜ.**
⇒ **0081/H-0024 (1521) AÇIK:** 1868 öncesi yarımada hâlâ ikiye bölük. 1602'de Doha kesimi
kuş uçuşu en yakın nokta dolgu iken (51,8 km) Bahreyn'in (135,7 km) Safevî rengini alıyor —
bu kuş uçuşu ölçümle açıklanamıyor; motor kalemi (sürtünmeli mesafe/puan), ölçülmedi.

## ② BERLİN A SINIFI → `denetim/PAKET-0076-BERLIN-1004.diff`
`git apply --check` ana depoda TEMİZ (iki kez: yazıldığında ve HEAD c0a3e21c'de).
Üç dosya: `data/yerlesimler.js` · `data/yerlesimler_ek29.js` · `data/olaylar_ek10.js`.
```
A1 Köstendil   d: →1878-07-13 · v: prenslik 1878-1908 · s: krallık 1908→ (önce 1913'e kadar Osmanlı)
A2 İzdin       d: →1832-01-01 · s: yunanistan 1832→ (TDV izdin, YIL) — önce 1881
A3 Bosna ×4    Brod · Dubica · Novi · Krupa: isg: avusturya 1878-07-29→1908-10-05
A4 Sofya       d: →1878-07-13 · isg: rusya 1878-01-04→07-13 · v: prenslik 1878-07-13→
A5 ×3          Niğbolu · Plevne · İhtiman: s: prenslik → v: prenslik (aynı ton, 7 komşu gibi)
A6 Prevadi     v: kid:"bulgaristan-prensligi" eklendi (kimliksizdi)
A8 Silistre    bulgar→romen devri 1913-05-30 (Londra) → 1913-08-10 (Bükreş)
H-0037         15 Eflak/Boğdan noktasında tâbilik bitişi 1878-07-13 → 1877-05-09 (TDV romanya)
+ 2 MADDE      1877-05-09 Romanya'nın bağımsızlık ilânı · 1832-01-01 İzdin Yunanistan'da kaldı
               (ikisi de Değişmez 2 için ŞART — madde olmadan 1 açık kırılma çıkıyordu, ölçüldü)
```
SINAV (geçici worktree, `denetle.py --ayrinti`):
```
Değişmez 1  309 sahipsiz (beklenen 309) ✓   1b 0 boşluk ✓   2 622 kırılma 0 açık ✓
2s tavan içinde ✓   2i 144, 1 açık (tavan 1, eski Bihaç) ✓   2t 13 ✓   4/4c/4d/4s/5 ✓
Değişmez 8  ÖLÇÜLEMEDİ (worktree'de izlenmeyen defter dosyası yok; motor ÇIKTISINI ölçer, koşu ister)
```
İKİ YÖNLÜ SAHİPLİK SINAVI (girdi.yukle, 24 yer×gün): yama SONRASI 24/24 doğru · ana depoda yama
ÖNCESİ 17/24 yanlış ⇒ sınav ayırt ediyor.
🔴 Bir hata yakaladım ve düzelttim: ilk turda Niğbolu'nun `s:` prenslik dönemini silip `v:`
eklemeyi unuttum; denetle 1b + sahipsizlik ile yakaladı.
⚠️ Sofya artık `isg: rusya`, ama komşuları Niğbolu/Plevne 1877-78'i `s: rusya` ile yazıyor — iki
kova, iki dil. Diff bunu değiştirmedi (B kökünün parçası).

ALINMAYANLAR:
- **A7 İşkodra:** TDV `iskodra` yalnız "1913'te … Arnavutluk Devleti'nin sınırlarına dahil
  edildi" diyor; 23 Nisan teslim ve 14 Mayıs boşaltma GÜNÜ yok ⇒ `olculecek`.
- **A9 İmroz:** TDV `imroz`: "1912 … ertesi yıl yapılan Londra Konferansı'nda Osmanlılar'a
  bırakıldı" · "Nihayet Lozan Antlaşması ile … aidiyeti kabul edildi". Yunan fiilî varlığının
  BİTİŞ günü yok; SINIR-BERLIN'in 1913-11-14 önerisi kaynaksız ⇒ yazılmadı, 0076'nın 44'ünde
  değil, ayrı borç.

## ③ H-0123 — İNDİ (commit b1485e56)
K=8 (5/3 = 1,67:1) → **K=9 (6/3 = TAM 2:1)**. SINIR-CIZGI'nin önerdiği K=6 BİLEREK seçilmedi:
ince şerit 3→2 px'e inerdi ve `TARAMA_SERIT_PX`ten türeyen BÜTÜN sefer okları üçte bir
incelirdi (Emre M-4838). Tarayıcıda ölçüldü: 4/4 desen K=9·6/3 · `seferKalinlik` 4,24 (DEĞİŞMEDİ)
· iki lejant %66,7 · konsol hatası 0. Ekran görüntüsünde Yunan şeridi kırmızının iki katı.
⚠️ Yamanın "İtalya sarı ama tarama yeşil" yarısı ayrı: işgal paleti `devirler.js`te (üretilmiş),
düzeltmesi `uret_devirler.py` koşusu ister — 44'e dahil değil, not.

## ④ 📖 8 EK OKUMA KARTI — İNDİ (commit 4a2798bc)
`data/ekokuma_p76i.js` (`window.EKOKUMA_P76I`) + `js/app.js` yükleyici satırı.
H-0003 · H-0007 · H-0014 · H-0017 · H-0024 · H-0025 (istenen 6) + H-0029 · H-0012 (🟡 ikisi
ölçüldü: mevcut kartlar KISMEN karşılıyordu — deli-padisahlar V. Murad'a tek paragraf ayırıyor,
p75b Çerkes kartı "Rusya'nın resmî tutumu BULUNAMADI" diyor ve dünya tepkisini anlatmıyor;
yeni kartlar yalnız BOŞLUĞU dolduruyor). Ölçüldü: havuz 789, p76i 8/8 · 10 çapanın 10'u
`_ekBagEslesir` ile TAM 1 maddeye bağlanıyor · tür 8/8 kayıtlı · id çakışması 0 · `gorsel:` yok.
Kaynak: TDV birincil (30+ madde gövdesi okundu); TDV dışı açıkça yazıldı (Holland 1885 ·
Güran-Uzun Belleten 2006 · Çiçek AÜ SBF 2009 · Kelbaugh 2025). Bulunamayanlar kartların
`kaynak:` alanında `BULUNAMADI` diye duruyor.

## ⑤ BERLİN NOKTALARI — taslak, diff'e ALINMADI
`denetim/PAKET-0076-BITIR-berlin-noktalar.{md,js}` · 23 yer (15 + Ziştovi + 7 ek). Ad + 3 km
taraması: 4298 noktada 23'ünün hiçbiri yok (Ziştovi DAHİL — "zaten var" sanılıyordu, yok).
```
taşınabilir 9  İvranye · Leskofça · Kurşunlu · Ürküp · Bar · Lofça · İslimye · Ziştovi · Dobriç
uygulanamaz 14 Nikşiç · Ülgün · Kolaşin · Tulça · Hırşova · Mangalya · Burgaz · Hasköy ·
               Volos · Alasonya · Kalabaka · Kardiçe · Balçık · Tutrakan  (bir zincir halkası kaynaksız)
```
🔴 Diff'e almadım çünkü "taşınabilir 9"un HER BİRİNDE yorum halkası var (bölge→kasaba taşıması
ya da "muhtemelen") ve yeni kırılmaların Değişmez 2 maddeleri yok (İslimye 1370 · Kurşunlu/
Ürküp 1433 · Ülgün 1880-11-25 · Balçık 1389/1390/1418 · Lofça isg 1877-08-23). Ayrıca DOBRUCA
DESENİ ÇELİŞİYOR: komşular (Babadağı, Köstence, İshakçı, Silistre) kaynaksız bir zincir
kullanıyor, TDV 1390-93 ve 1402-1418 Eflak (Mircea) dönemlerini veriyor — taslak TDV'yi izliyor.
⇒ Bu bir veri kararı; senin.

## ⑥ ⏸ D-RENK-0073 — Emre'ye TEK LİSTE (8 kalem, DOKUNULMADI)
Hepsinde SINIR-CIZGI-0076 ölçtü: **çizgi o gün YÜRÜRLÜKTE, anakronizm YOK; oturmayan renk.**
```
H-0041  1878 Kars          d1829-osm-rus-1/2 [E] (Edirne 1829, t 1878-07-13)
H-0042  GENEL KURAL (8 görsel) "çizgi geçerliyse renk uysun" — çizim zaten pencereye bakıyor
H-0059  1881 Prut/Tuna     d1878-ru-ro-prut/tuna [E] (f 1881-03-26)
H-0118  1910 Libya-Tunus   d1910-libya-tunus/cezayir-gadames (Trablus Sözleşmesi, f TAM o gün)
H-0120  1911 Refah         d1906-filistin-misir-hidivlik [E]
H-0144  1913 Dobruca       g3-bg-ro-dobruca-p4 [E] + g3-bg-ro-tuna-p4 [C]
H-0155  1913 Yunan kuzeyi  g1-gr-srb-1/2 + d1923-gr-bg-bati [E] (f 1913-08-10)
H-0156  1913 İran          d1913-osm-ir-1/2/3 + g1-osm-ir (f TAM o gün, İstanbul Protokolü)
```
Emre'ye sorulacak (D-RENK-0073-OLCUM-0920 §6): ① (a) hat bıçak / (b) hat gövde / (c) karışık —
ölçüm (c) diyor · ② hattın bittiği yerde dikiş: sessiz mi, kesik/soluk "hat yok" mu ·
③ `sol_taraf` borcu (%47 dolu). ⚠️ Bu arada istemci tarafı yaslama İNDİ (`js/d_katman.js:331`,
yalnız E/F sınıfı, 40-65 sn gecikmeli) — yani [E] olan 6 kalem yaslama BİTTİKTEN sonra
kısmen düzelmiş olabilir; görünür bölmede ÖLÇÜLMEDİ. [C] sınıfı (H-0144'ün Tuna yarısı) hiç
yaslanmaz. 0077'de aynı şikâyet 6 kez daha: H-0014 · H-0015 · H-0065 · H-0066 · H-0070 · H-0084.

## ⑦ KOŞUYA BİNECEKLER (diff uygulanırsa)
```
H-0037 · H-0043 · H-0057 · H-0049 · H-0053 · H-0044 · H-0106 · H-0108 · H-0045 · H-0050
```
⚠️ `renk_olc.py` koşudan sonra ŞART (§9): Bulgaristan prenslik noktalarının taban tonu değişiyor.

## KALEM KALEM — 44 (önerilen hüküm + gerekçe)
```
H-0149 cozuldu        Katar 1868-1923 tek renk, r11195'te ölçüldü (6×6). 1868 öncesi 0081/H-0024'te AÇIK
H-0123 cozuldu        K=9, tam 2:1 — b1485e56
H-0003 cozuldu        p76i-avrupa-devletler-sistemi-1856 — 4a2798bc
H-0007 cozuldu        p76i-suriye-lubnan-topluluklari-1860
H-0014 cozuldu        p76i-girit-kibris-rum-mu-helen-mi
H-0017 cozuldu        p76i-imtiyaz-bag-mi-durak-mi-1868
H-0024 cozuldu        p76i-vatan-yahut-silistre-1873 (kişi kartı YAZILMADI — ayrı şema)
H-0025 cozuldu        p76i-hersek-isyani-sebepler-1875
H-0029 cozuldu        p76i-kimdir-murad-v (deli-padisahlar kartı yalnız hastalığı veriyordu)
H-0012 cozuldu        p76i-cerkes-surgunu-dunya-yankisi (p75b kartı dünya tepkisini anlatmıyordu)
H-0037 kosu-bekliyor  diff: 15 nokta 1877-05-09 + madde · ikizi 0076/H-0038 (Sofya yarısı da diff'te)
H-0043 kosu-bekliyor  diff A3 (Bosna 4 isg) · ikizi 0076/H-0095 — o da bununla kapanır
H-0057 kosu-bekliyor  = H-0043
H-0049 kosu-bekliyor  diff A5 (Niğbolu·Plevne·İhtiman v:)
H-0053 kosu-bekliyor  diff A4 (Sofya isg rusya + v: 07-13'ten); Niş yüzü zaten doğruydu
H-0044 kosu-bekliyor  KISMİ: A1+A5 diff'te · nokta yüzü (Lofça·İslimye·Ziştovi taslak; Burgaz·Hasköy kaynaksız) ⑤
H-0106 kosu-bekliyor  KISMİ: = H-0044 kökü; "Osmanlı tepkisi" yüzü p76g kartında zaten var
H-0108 kosu-bekliyor  KISMİ: A1+A3+A5 diff'te; Sırbistan noktaları ⑤
H-0045 kosu-bekliyor  KISMİ: A2 İzdin diff'te · Volos·Alasonya·Kalabaka·Kardiçe uygulanamaz (kaynak)
H-0050 kosu-bekliyor  KISMİ: A8 Silistre diff'te · Dobriç taslak, Balçık·Tutrakan·Mangalya uygulanamaz
H-0046 sirada         4 Sırp noktası taşınabilir taslak (İvranye·Leskofça·Kurşunlu·Ürküp); 1433 maddesi + senin kararın
H-0060 sirada         = H-0046
H-0138 sirada         B1 (14 nokta s:→isg:) — yama tarifi SINIR-BERLIN; KRONO-0076-C eşleşmesi şart; dokunulmadı
H-0143 sirada         = B1 (Midye-Enez doğusu 15 nokta)
H-0145 sirada         B2 (Sırbistan 13 nokta)
H-0146 sirada         = B1; + TDV 20 Temmuz / atlas 21 Temmuz 1913 (Edirne) farkı
H-0151 sirada         B1/B2'den SONRA; tanecik kapsamı Emre'nin
H-0036 sirada         Kars 1877-78 eksklavı: 93 Harbi'nde isg: katmanı hiç yok (Kars 0/34, Tuna 0/58); kaynaklı
                      yer-yer işgal günleri gerekir, bulunmadı — tarih uydurulmadı
H-0134 olculecek      İşkodra: TDV gün vermiyor (yalnız "1913"); 23 Nisan/14 Mayıs için akademik kaynak aranmadı
H-0047 cozulemedi     Tulça·Hırşova·Mangalya: 1281-1419 sahibi bulunamadı (Dobruca Despotluğu künyesi yok)
H-0048 cozulemedi     KISMİ: Bar taşınabilir; Nikşiç (1356-1455) · Ülgün (Zeta→Venedik yılı) · Kolaşin (kuruluş) kaynaksız
H-0041/0042/0059/0118/0120/0144/0155/0156  senin-kararin   ⑥ D-RENK-0073 (a/b/c + dikiş dili)
H-0116 senin-kararin  Karlofça Bosna-Sava düz kirişi — 0082/H-0004'ün üç seçeneği (kaldır · Sava'ya oturt · lejant)
H-0009 senin-kararin  her padişah ölümüne övgü+yergi kartı ≈82 kart — kapsam
H-0052 senin-kararin  9 Balkan ülkesinin anlatısı — var: bakış-bulgar · bakış-romen · p76g; kalan 7 — kapsam
H-0066 senin-kararin  "1800'den beri kapan kapana" — 7 bölge × kart mı tek tartışma mı
H-0080 senin-kararin  1885-02-05 Kızıldeniz 7 noktası İngiltere'ye — maddesi YOK, kaynaklı gün YOK; SC'nin ara çözüm taslağı
```

## Değişen / yeni dosyalar
```
commit b1485e56   js/app.js (H-0123)
commit 4a2798bc   data/ekokuma_p76i.js · js/app.js (1 satır) · denetim/PAKET-0076-BITIR-ekokuma_p76i.js
yeni (commitlenecek, adıyla)
  denetim/PAKET-0076-BERLIN-1004.diff
  denetim/PAKET-0076-BITIR-berlin-noktalar.md · .js
  denetim/PAKET-0076-BITIR-1004.md (bu dosya)
```
