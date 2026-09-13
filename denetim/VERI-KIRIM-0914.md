# VERI-KIRIM — Kırım bozkırı: YAMA-KIRIM2 + Tambov + Emre kararı D (14 Eylül 2026)

```
OTURUM   VERI-KIRIM · koordinatör 1.MURAT · tahta M-3886 (açılış) · M-3897 · M-3901 · M-3902
SEVK     oturumlar/KOSU10-SONRASI.md "Kırım bozkırı (0043/H-0003)" — Emre kararı D (üç ton)
ÖNCÜL    denetim/ARASTIRMA-KIRIM2-0913.md · YAMA-KIRIM2-0913.json · ARASTIRMA-KIRIM-0912.md ·
         YAMA-ANAPA-0913.json · MOTOR-HIMAYE-0914.md
KOŞU     yok · COMMIT atılmadı · motor koşusu yapılmadı
```

## ⓪ ÖZET

```
① YAMA-KIRIM2   14 satır / 13 kayıt uygulandı (her `eski` kayıt bloğunda TAM 1 kez — doğrulandı)
                + Anapa isg: 2 dönem YALNIZ YAMA-ANAPA-0913'ten (YAMA-KIRIM2 kopyası uygulanmadı)
② Tambov        __BOSLUK__ 1441-01-01 → 1636-04-17 (kaynak: ESBE, kuzey dört kayıtla aynı hüküm)
   Borisoglebsk · Penza   yalnız ölçüldü, raporda (aşağıda)
②b Taganrog     (M-3901 hükmü b) s:kirim 1711-07-21 → 1739-09-18 → __BOSLUK__ (TDV prut-antlasmasi)
③ D dönüşümü    18 kayıt · 18 v: gevşek himaye dönemi · 6 yerleşim dosyası
④ etiket        renkler.py:746 "Kırım Hanlığı bozkırı" → "Kırım Hanlığı" (renk #b45a1e DEĞİŞMEDİ)
⑤ madde         YENİ data/olaylar_p0051.js — 4 madde (3 sevkte + 1570 Don, M-3902 onaylı)
                olaylar_ek16.js 1441 maddesinin yer: alanından Kabartay (Nalçik) · Kuban (Yekaterinodar) çıktı
```

## ① YAMA-KIRIM2 — uygulanan satırlar

Uygulayıcı: kayıt bloğu (ad → bir sonraki `{ ad:"`) içinde; `ad:"X"` dosyada 1 kez, `eski` blokta 1 kez
şartı her satırda assert edildi (D001 — Hacıbey/Özi ve Kuban/Soçi/Tuapse/Maykop aynı dizgiyi taşıyor).

| kayıt | dosya | önce | sonra |
|---|---|---|---|
| Voronej | yerlesimler.js | kirim 1441→1585-01-01 | `__BOSLUK__` (aynı günler) |
| Belgorod | yerlesimler_ek17.js | kirim 1441→1596-01-01 | `__BOSLUK__` |
| Harkov | yerlesimler.js | kirim 1441→1654-01-01 | `__BOSLUK__` |
| Sloboda bozkırı | yerlesimler_ek4.js | kirim 1441→1654-01-18 | `__BOSLUK__` (bitiş kaynaksız — açık soru, dönem `kaynak:`ında yazılı) |
| Kuban (Yekaterinodar) | yerlesimler.js | altinorda →1441 · kirim 1441→1783 | altinorda →**1502-03-01** · kirim 1502-03-01→1783 |
| Kuban Nogay bozkırı | yerlesimler_ek_bozkir.js | aynı | aynı |
| Stavropol–Kuma bozkırı | yerlesimler_ek_bozkir.js | aynı | aynı (+ 1502-1557 sahibi BULUNAMADI notu) |
| Anapa | yerlesimler.js | kirim 1441→1781 | `__BOSLUK__` 1441→1475-06-06 · kirim 1475-06-06→1781 · **isg** 1791-07-26→1792-01-09 + 1828-06-24→1829-09-14 (YAMA-ANAPA) |
| Soçi (Sâşe) · Tuapse · Maykop (Çerkezya) | yerlesimler.js | kirim 1441→1783 | `__BOSLUK__` 1441→1475-06-06 · kirim 1475-06-06→1783 |
| Kabartay (Nalçik) | yerlesimler.js | kirim 1441→1739-09-18 · `__BOSLUK__` →1774-07-21 | tek **kabartay** 1441→1774-07-21 |
| Hacıbey (Odessa) | yerlesimler.js | kirim 1441→1538-09-01 | **litvanya-buyuk-dukalik** 1441→1480-01-01 · kirim 1480→1538-09-01 |

Her değişen dönemde dönem-düzeyi `kaynak:` (rapordaki kaynak, adıyla); her kayda `neden:` (yoksa yeni alan,
varsa ÖNÜNE eklendi — eski metin "ÖNCEKİ:" ile korundu, mükerrer anahtar yok). Kabartay'ın eski `neden:`i
(`__BOSLUK__` ara çözümünü anlatan) tarihçe olarak durur, başına güncel hüküm yazıldı.

## ② TAMBOV — kaynakla sınandı, `__BOSLUK__` YAZILDI

```
kayıt   yerlesimler_ek17.js Tambov  kirim 1441-01-01 → 1636-04-17  ⇒  __BOSLUK__ (günler aynı)
```
**Kaynak** (ru.wikisource, ham metin çekilip cümleler grep'le doğrulandı — özetleyici modele güvenilmedi):
- **ESBE "Tambov"** (imza N. Romanov): kuruluş 1636, *"против частых в то время набегов крымских, ногайских и азовских татар"* tahkimatı.
- **ESBE "Tambovskaya guberniya"** (N. Romanov), tarih bölümü: güney şerit *"долго не имела постоянного населения, представляя дикую степь"*, orada Kumanlar, sonra Kalmuklar, Azak ve Kırım Tatarları göçebe dolaştı; *"Ногайскою стороною"* denen güney kesim Tambov ve Kozlov'un kuruluşundan (1636) önce kalıcı iskân görmedi.

⇒ Kuzey dört kayıtla **aynı hüküm**: kaynak Kırım TASARRUFU yazmıyor, akın/göçebe dolaşma tasarruf değil (D030).
⚠️ Aynı ESBE paragrafı Rus iskânı/idaresinin **batıdaki Meşçera kesiminde** (Ryazan uzantısı, Şatsk 1553) ve
Temnikov'da (1536) önce yerleştiğini yazıyor — Tambov noktasına **taşınmadı**, tarih vermiyor; dönem `kaynak:`ında yazılı.
🔴 Denenen ve **okunamayan**: Britannica Tambov (403) · bigenc.ru (ruwiki'ye yönleniyor) · tmbreg.ru (bağlantı reddi) ·
Davies, *State Power and Community… Kozlov 1635-1649* (Springer yalnız önizleme). Rus haber siteleri yön bulmak için görüldü, DAYANAK YAPILMADI.
Kırılma günü 1636-04-17'nin kendi kaynağı bu turda **ölçülmedi** (değiştirilmedi).

### Borisoglebsk · Penza — YALNIZ ÖLÇÜLDÜ
```
Borisoglebsk  yerlesimler_ek22.js:105  altinorda →1441 · nogay 1441→1663-01-01 · rusya 1663→
Penza         yerlesimler_ek17.js:177  altinorda →1441 · nogay 1441→1663-01-01 · rusya 1663→
```
- ESBE "Tambovskaya guberniya": *"Вскоре (1646) основаны и крайние южные города, Усмань и Борисоглебск"* ⇒
  Borisoglebsk'in rusya başlangıcı veride **1663**, ESBE **1646** diyor (17 yıl). Borisoglebsk'in zinciri
  kendi başlığına göre Penza'dan kopyalanmış (komşu günü, kaynaksız devralma). 🟠 düzeltme adayı, YAZILMADI.
- Penza: 1663 bu turda kaynakla sınanmadı. `nogay` 1441-1663 kimliği de sınanmadı (ESBE Tambov guberniyası
  için "Nogay tarafı" adını veriyor — bu bir ad, tasarruf beyanı değil). ölçülmedi.

## ②b TAGANROG — M-3897 onayı, M-3901 hükmü (b)

```
yerlesimler_h2_rusya.js Taganrog   s:kirim 1711-07-21 → 1739-09-18  ⇒  __BOSLUK__ (günler aynı)
```
- **TDV `prut-antlasmasi`** (200, gövde okundu): *"Azak Kalesi arazi ve mühimmatıyla iade edilecek, Taygan, Kamenka ve Samara suyu kenarındaki Yenikale yıkılacak … buralarda her iki tarafça başka bir kale yapılmayacak."*
- **TDV `azak`** (200): 1711 Prut sonrası Azak geri alındı; 1713 Edirne ile Osmanlı'ya bırakıldı; 1736 Rus; Belgrad (1739) ile Rusya'ya terk.
- `taganrog` · `taygan` → 302 ÖLÜ.
⇒ Kaynak ne Kırım nüfuzu ne doğrudan Osmanlı yazıyor: yıkık, kalesiz tampon kıyı. Mevcut kirim kaynaksızdı.
🔴 **BORÇ:** akademik kaynak (B. Davies, *Warfare, State and Society on the Black Sea Steppe 1500-1700*) OKUNMADI.

## ③ D DÖNÜŞÜMÜ — ölçülen liste ve uygulanan

Evren: `girdi.yukle()` (canlı 78 dosya) içinde ①'den sonra `s:{d:"kirim"}` taşıyan **her** kayıt ölçüldü (31).
Yarımada (Bahçesaray · Gözleve · Or Kapı · Akmescid · Karasubazar · Eski Kırım — `v: kid:kirim vassal`)
**dokunulmadı**; onların s:kirim dilimleri zaten pencere dışında (1441-1475 · 1774-1783). Or Kapı yarımada kalesi ⇒ DOKUNMA.
Kefe sancağı (Kefe · Kerç · Taman · Sudak · Azak) s:kirim taşımıyor. Kuzey dört + Tambov ①/② ile kirim'den çıktı.
Taganrog ②b ile `__BOSLUK__`.

Kural: s:kirim ∩ [1475-06-06, 1774-07-21) → `v:[{f,t,k:"Kırım Hanlığı",kid:"kirim",statu:"gevsek",himaye:true,kaynak}]`;
dışı s:kirim kaldı. `d:` ile çakışan v: YAZILMADI (ölçüldü: himaye v × d çakışması **0**). Hedeflerin hiçbirinde önceden
`v:` dizisi yoktu (assert). Dönem kaynağı: TDV `kirim` "gevşek" cümlesi + Emre kararı D + pencerenin iki olayı
(Kefe fethi 1475-06-06 · Küçük Kaynarca 1774-07-21, ikisi de olaylar.js'te); önceki s:kirim dönemi `kaynak:` taşıyorsa
(Hacıbey) v:'ye "ÖNCEKİ s:kirim KAYNAĞI" diye taşındı.

| kayıt | dosya | s:kirim (① sonrası) | v: gevşek himaye | kalan s:kirim |
|---|---|---|---|---|
| Özi | yerlesimler.js | 1441→1538-09-01 | 1475-06-06→1538-09-01 | 1441→1475-06-06 |
| Anapa | yerlesimler.js | 1475-06-06→1781-01-01 | 1475-06-06→1774-07-21 | 1774-07-21→1781-01-01 |
| Soçi (Sâşe) | yerlesimler.js | 1475-06-06→1783-04-19 | 1475-06-06→1774-07-21 | 1774-07-21→1783-04-19 |
| Tuapse | yerlesimler.js | 〃 | 〃 | 〃 |
| Maykop (Çerkezya) | yerlesimler.js | 〃 | 〃 | 〃 |
| Kuban (Yekaterinodar) | yerlesimler.js | 1502-03-01→1783-04-19 | 1502-03-01→1774-07-21 | 1774-07-21→1783-04-19 |
| Hacıbey (Odessa) | yerlesimler.js | 1480-01-01→1538-09-01 | 1480-01-01→1538-09-01 | — |
| Bozkır (Deşt-i Kıpçak) | yerlesimler.js | 1502-03-01→1783-04-19 | 1502-03-01→1774-07-21 | 1774-07-21→1783-04-19 |
| Yediçkul bozkırı | yerlesimler_ek3.js | 〃 | 〃 | 〃 |
| Camboyluk bozkırı | yerlesimler_ek3.js | 〃 | 〃 | 〃 |
| Yedisan bozkırı | yerlesimler_ek_bozkir.js | 〃 (d: 1783-1792) | 〃 | 〃 |
| Kuban Nogay bozkırı | yerlesimler_ek_bozkir.js | 〃 | 〃 | 〃 |
| Stavropol–Kuma bozkırı | yerlesimler_ek_bozkir.js | 〃 | 〃 | 〃 |
| Zaporojye Seçi | yerlesimler_ek4.js | 1502-03-01→1552-01-01 | 1502-03-01→1552-01-01 | — |
| Çerkask (Razdory) | yerlesimler_ek6.js | 1502-03-01→1570-01-01 | 1502-03-01→1570-01-01 | — |
| Don bozkırı (Sal) | yerlesimler_ek6.js | 〃 | 〃 | — |
| Donets bozkırı | yerlesimler_ek6.js | 〃 | 〃 | — |
| Kızıkermen (Gazi Kerman) | yerlesimler_ok106.js | 1441→1526-01-01 (kesinlik yuzyil) | 1475-06-06→1526-01-01 | 1441→1475-06-06 (kesinlik korundu) |

**18 kayıt · 18 v: dönemi.** Brifteki beklenen listeden fark: yok (Kuban ×3 dahil); ek aday Taganrog ②b'ye gitti.

## ④ ETİKET
`arac/renkler.py:746` `("Kırım Hanlığı bozkırı", "#b45a1e")` → `("Kırım Hanlığı", "#b45a1e")`. `py_compile` 0.

## ⑤ MADDE — data/olaylar_p0051.js (window.OLAYLAR_P0051)

| t | madde | kaynak (bu oturumca yeniden okundu) |
|---|---|---|
| 1480-01-01 · kesinlik yil | Hacıbey kalesinin Litvanya'nın elinden çıkması | IEU 'Odesa' ("In 1480 the fortress was captured by the Turks…") · IEU 'Ochakiv' · TDV bucak — **çelişki metinde (ic_not_d) açık** |
| 1585-01-01 · yil | Moskova'nın Voronej'de ileri garnizon kurması | IEU 'Slobidska Ukraine' ("…Orel, Livny, and Voronezh (1585)") |
| 1596-01-01 · yil | Belgorod, Oskol, Kursk garnizonları | IEU 'Slobidska Ukraine' + 'Belgorod' ("From 1596 it was a fortress town…") |
| 1570-01-01 · yil | IV. İvan'ın Don kazaklarına gramotası | Военная энциклопедия (Sytin) 'Донское казачье войско' ("Старшинство войска считается с 1570 г." — Novosiltsev gramotası) · ESBE 'Козачество' (В. М—н) |

🆕 **1570 maddesi sevkte yoktu:** ③ Çerkask · Don bozkırı · Donets'in kirim→don-kazak geçişini s:→s:'den v: bitişine
çevirdi ⇒ ara denetimde **Değişmez 2 ✗ 1 açık (1570-01-01, en yakın madde 203 gün)**. Bekletmeden bildirildi (M-3902),
koordinatör onayladı (kesinlik:"yil"). ⚠️ Madde bir örgütlenme/tanınma kaydını tarihliyor; kaynaklar Don bozkırının
1570'te Kırım nüfuzundan çıktığını SÖYLEMİYOR ⇒ atlasın 1502-1570 kirim modeli bu maddeyle kaynağa bağlanmış sayılmaz
(KIMLIK-DON-KAZAK.md "1502→1570 nogay … kirim DEĞİL, ölçülmeli" borcu açık).

`olaylar_ek16.js:88` (1441 Kırım'ın kuruluşu) `yer:` → "Kabartay (Nalçik), Kuban (Yekaterinodar)" çıkarıldı, başka alan
değişmedi. ⚠️ Aynı listede **Taganrog** da duruyor (kur 1698) — sevk kapsamı dışı, yalnız raporlanıyor.

**index.html bağlama satırı (koordinatör ekler)** — p0051 bağlanana kadar yayında YETİM/CANLI DEĞİL (D099):
```html
<script src="data/olaylar_p0051.js?v=rNNNN"></script>
```

## ⑥ KABUL — ÖNCE / SONRA

İki ölçüm tabanı tutuldu:
- **önce (00:1x)**: işe başlamadan, canlı ağaç.
- **A/B**: çalışma ağacının tam kopyası, YALNIZ benim 8 yerleşim dosyam `git show HEAD:` ile geri çekili — araya
  başka işçilerin inen verisi ayrışsın diye (MOTOR-HIMAYE emsali). Aşağıdaki "önce" sütunu A/B'dir; farklıysa ayrıca yazıldı.

```
node --check     10 veri dosyası (9 yerleşim + p0051 + ek16) 0 hata · py_compile arac/renkler.py 0
Değişmez 1       324 sahipsiz → 324   ✓ ARTMADI (__BOSLUK__ s: dönemi sayılıyor — ölçüldü; Taganrog öncesi ara ölçüm de 324)
Değişmez 1c      4 (tavan 4) → 4 ✓
Değişmez 1b      beyansız boşluk 0 → 0 ✓
Değişmez 2       528 kırılma 0 açık → 531 kırılma 0 açık ✓
                 (ara ölçümde 531 / 1 AÇIK: 1570-01-01 — 1570 maddesiyle kapandı; 1480-01-01 · 1585 · 1596 p0051 ile,
                  1475-06-06 olaylar.js:47, 1502-03-01 olaylar_ek5.js:142, 1774-07-21 olaylar.js:120, 1552-01-01 olaylar_ek17.js:173
                  — sonuncusu ALAKASIZ Cezayir maddesi, tesadüfen kapatıyor: Zaporojye Seçi v: bitişi. BORÇ)
Değişmez 2s      1331 · 99 AÇIK · 356 kapsam dışı → 1329 · 100 AÇIK · 355   ✓ tavan 121 aşılmadı
                 (+1 AÇIK'ın hangi kırılma olduğu ÖLÇÜLEMEDİ: --ayrinti 2s açık listesini basmıyor)
Değişmez 2i      62 kırılma 3 açık → 65 kırılma 3 açık ✓ (Anapa isg: 1791-07-26 · 1792-01-09 · 1828-06-24)
Değişmez 2t      15 → 15 ✓
Değişmez 3       m:/egemen uyuşmazlığı 486 → 481 (Özi · Anapa ×3 kesit · Hacıbey 1500 — kirim≠merkez OSMANLI çelişkisi,
                 v: tâbi ile OSMANLI muaf çiftine girdi)
Değişmez 4/4c/4d/4s   6 / 129 / 356 / 5 → aynı ✓ (4c kötüleşmedi: Kuban×3 altinorda 1502-03-01 kuyruğu künye t:1502-01-01'i
                 59 gün aşıyor ama 4c eşiği altında kaldı / sayıya girmedi)
KÜNYESİZ kimlik  916 → 925 dönem (+9 __BOSLUK__: kuzey 4 + Tambov + Çerkes 4 + Taganrog − Kabartay 1) — beklenen, ihlal değil
Değişmez 7  🔴   650 ✓ → 658 ✗  SONUÇ İHLAL — aşağıda, tahta M-3912
A2 bağ           551/551 · HATA 0 · UYARI 141 → aynı ✓
denetle_yayin    yetim 0/332 → 2/334: data/olaylar_p0051.js (BENİM — index.html bağlanana dek beklenen)
                 + data/olaylar_p0052.js (BENİM DEĞİL). YAYIN BAYAT listesine benim 8 dosyam eklendi (koşu 11 bekliyor).
renk_olc         0 görünmez · 2 çakışma · 0 aynı-anahtar · 0 aynı-hex · 6 → 7 yakın-ama-değmeyen (çıkış kodunu değiştirmeyen kova)
                 🟠 YENİ: afsar ↔ kabartay  ΔE 9,73 · 302 km · 1736-1774  (Voronoi komşusu DEĞİL, ΔE<12 eşzamanlı ≤600 km)
                    Sebep: kabartay artık 1441-1774 boyanıyor (önce 1739-1774 __BOSLUK__ idi) ⇒ Afşar İran'la eşzamanlı oldu.
                    kirim · litvanya komşuluğunda YENİ ihlal YOK. Ölçülemeyen çift 1097 → 1022.
hızlı D2 (kendi) 533 kırılma / 3 ">30 gün" (1554-08-22 · 1637-06-18 · 1657-11-15) — üçü de ÖNCEDEN VAR, denetle.py muafiyet
                 kovalarıyla 0 açık sayıyor; bu alet muafiyet bilmez, yalnız çapraz bakış. Benim günlerimden açık kalan YOK.
```

### 🔴 Değişmez 7 — +8 sorgusuz enklav (A/B satır satır diff)

Koordinatör hükmü (M-3912): veri Değişmez 7 için BÜKÜLMEZ; Kuban'ı 1475'e çekmek kaynaksız olur; beklenen değer
650 → 658'i koordinatör `arac/denetle.py`de çekecek, gerekçe satırına aşağıdaki liste girecek.

| # | kayıt (ada) | kırılma / dönem | sebep | kaynaklı mı |
|---|---|---|---|---|
| 1 | Anapa (ada: Anapa) | 1441-01-01 → `__BOSLUK__` (1441→1475-06-06) | Çerkes kıyısı 1441'de Kırım'dan çıktı; komşu Taman/Kefe ceneviz, Kuban altinorda ⇒ tek başına boşluk adası | 🟠 kaynaklı ARA ÇÖZÜM (TDV anapa · cerkezler; Çerkes künyesi yok) |
| 2 | Maykop (Çerkezya) (ada: Maykop+Soçi+Tuapse) | 1441-01-01 → `__BOSLUK__` | aynı | 🟠 aynı (Maykop iç kesim — güven daha düşük) |
| 3 | Soçi (Sâşe) (aynı ada) | 1441-01-01 → `__BOSLUK__` | aynı | 🟠 aynı |
| 4 | Tuapse (aynı ada) | 1441-01-01 → `__BOSLUK__` | aynı | 🟠 aynı |
| 5 | Maykop (Çerkezya) (ada: Maykop+Soçi+Tuapse) | 1475-06-06 → OSMANLI sistemi (v: gevşek) | Kuban 1502-03-01'e kadar altinorda ⇒ kıyı gevşek gövdesi 1475-1502 arası Anapa/Taman'dan kopuk | 🟠 iki kaynaklı hükmün (TDV anapa 1475 · TDV altin-orda 1502) geometrik sonucu |
| 6 | Soçi (Sâşe) (aynı ada) | 1475-06-06 → OSMANLI sistemi | aynı | 🟠 aynı |
| 7 | Tuapse (aynı ada) | 1475-06-06 → OSMANLI sistemi | aynı | 🟠 aynı |
| 8 | **Hacıbey (Odessa)** (ada: Hacıbey) | 1441-01-01 → litvanya-buyuk-dukalik (1441→1480) | Vytautas'ın Karadeniz kıyı kalesi; komşu Akkirman Boğdan, Özi kirim, Yedisan altinorda | 🟢 kaynaklı (IEU Odesa) — **HAKİKİ ENKLAV ADAYI** (`enklav:true` beyanı koordinatörün) |
| 9 | Yedisan bozkırı (ada: Yedisan) | 1774-07-21 → kirim (1774→1783) | v: gevşek bitişi 1774'te YENİ kırılma; Özi/Kızıkermen d:/rusya araya giriyor | 🟡 Emre kararı D penceresinin geometrik sonucu (kirim s: 1774-83 zaten vardı) |
| − | Taganrog (ada: Taganrog) | 1711-07-21 → kirim | KALKTI — dilim `__BOSLUK__` oldu (M-3901 b) | — |

Net: +9 −1 = **+8** (650 → 658). 1:1 değişenler (sayıyı etkilemez): Belgorod · Harkov · Sloboda 1441 `→ kirim` ⇒ `→ __BOSLUK__`
(aynı ada) · Donets 1502-03-01 `→ kirim` ⇒ `→ OSMANLI` (ada: Donets) · Çerkask 1502-03-01 `→ kirim` ⇒ `→ OSMANLI` (ada: Azak+Çerkask).
Değişmez 7'nin kendi başlığı: *"bu dal VERİ DEĞİL YÖNTEM ölçer … kayıtları silerek kapatmak hakiki enklavları yok etmek olur"*. **Veri bükülmedi.**

### Koordinatör hükümleri bu turda
```
M-3886 → olaylar_ek16.js'teki commit'siz değişiklik PAKET-KAPSAM2'nindi, 926d349 ile commit'lendi; yalnız 1441 yer: alanı
M-3897 → Taganrog için h2_rusya.js açıldı (yalnız o kayıt), önce kaynakla sına
M-3901 → hüküm (b): Taganrog 1711-1739 __BOSLUK__, Davies borç
M-3902 → 1570 maddesi onay, kesinlik:"yil"
M-3912 → Değişmez 7 için veri bükülmez; tavan 658'i koordinatör çeker
```

## ⑦ §3.5.1 — `__BOSLUK__` noktalarının petek komşuları

Delaunay komşuluğu (≈ Voronoi), `girdi.yukle()` canlı veri, ③ sonrası:
```
1600-06-15
Harkov [__BOSLUK__]      → Belgorod 71 km rusya · Sloboda 112 km __BOSLUK__ · Poltava 129 km lehistan · Putivl 223 km rusya
Sloboda bozkırı [__BOSLUK__] → Harkov __BOSLUK__ · Donets 139 km don-kazak · Belgorod 160 km rusya · Poltava 197 km lehistan ·
                           Camboyluk 234 km tâbi:kirim/himaye · Zaporojye Seçi 239 km zaporojye
Tambov [__BOSLUK__]      → Borisoglebsk 156 km nogay · Voronej 193 km rusya · Ryazan 239 km rusya · Temnikov 242 km rusya · Penza 244 km nogay
Voronej [rusya] · Belgorod [rusya] (1585/1596 sonrası)
1450-06-15
Voronej · Belgorod · Harkov · Sloboda · Tambov   birbirine komşu __BOSLUK__ kuşağı; dış komşular Kursk/Orel/Putivl/Poltava
                           litvanya · Borisoglebsk/Penza nogay · Ryazan ryazan · Donets altinorda
Anapa · Soçi · Tuapse · Maykop  __BOSLUK__ kuşağı; dış komşular Taman/Kefe ceneviz · Kuban altinorda · Sohum gurcistan
```
⇒ Noktalar **duruyor**, peteklerini kendileri tutuyor: bozkır kuşağı komşuya emilmiyor, kimse kirim'in yerini ALMIYOR.
Tek kazanan Hacıbey 1441-1480 litvanya (kaynaklı). ⚠️ Sınır: Delaunay ≈ petek komşuluğu; gerçek petek (nehir/sırt
yaslanması, 200 km tavanı) motor koşusu ister — ÖLÇÜLMEDİ.

## ⑧ BULUNAMADI / OKUNMADI / AÇIK

```
OKUNMADI     Davies 'Warfare, State and Society…' (Taganrog borcu) · Davies 'State Power… Kozlov' (önizleme)
OKUNMADI     Britannica Tambov (403) · bigenc.ru · tmbreg.ru
ÖLÇÜLMEDİ    Tambov 1636-04-17 günü kaynağı · Penza 1663 · nogay 1441-1663 kimliği · gerçek petek/renk etkisi (koşu)
AÇIK         Borisoglebsk rusya 1663 ↔ ESBE 1646 · Sloboda 1654-01-18 ↔ Pereyaslav 1654-01-08 ·
             Stavropol–Kuma 1502-1557 sahibi · Özi Litvanya→Kırım geçiş yılı · Çerkes künyesi (kıyı __BOSLUK__ ara çözüm) ·
             1502 gün hizalaması (künye 1502-01-01 / veri+madde 1502-03-01) · Don bozkırı 1502-1570 kirim kaynaksız ·
             olaylar_ek16 1441 yer: Taganrog
RİSK         data/yer_yama_ok110.js:101 Yedisan bozkırı için ESKİ s: dizisini (kirim 1502→1783, v: YOK) taşıyor;
             girdi.py okumuyor ama bir sahiplik uygulayıcısı yeniden koşulursa ③'ü GERİ ALIR (D017). Bu dosyaya dokunulmadı.
NOT          sayım regex'i 'himaye:true'yu 36 buldu — 18'i v: dönemi, 18'i neden: METNİNDEKİ geçiş (D046 sınıfı; gerçek 18)
```
