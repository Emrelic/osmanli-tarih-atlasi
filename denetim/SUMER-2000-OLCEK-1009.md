# SUMER-2000-OLCEK-1009 — MÖ 3000 → MS 2000: elimizde ne var, ne kadar yoğun, MÖ tarih nasıl yazılır

Oturum: SUMER-2000-OLCEK-1009 (UMIT) · 9 Ekim 2026 · ağaç `C:\atlas-sumer` @ `origin/makine/umit` `77abc6b9`
Görev: UMIT İRTİBAT (koordinatör). **YALNIZ ÖLÇÜM, ÇARE YOK.** Veriye, koda, git'e yazılmadı.

## ④ ÖNGÖRÜ — ölçümden ÖNCE yazıldı (betik koşmadan; yalnız UFUK-DISI-1008 · ZAMAN-Z6-1008 · MOTOR-TARIH-TARAMA-1008 · YIL-DOLGU-1008 okundu)

| soru | öngörü | dayanak |
|---|---|---|
| MÖ (negatif yıl) tarih taşıyan kayıt — yerleşim · künye · madde | **0 · 0 · 0** | gun_no negatifte çöküyor; denetim temiz koşuyor ⇒ hiç yok |
| Yerleşim, sahipli nokta: MÖ 3000-1200 / MÖ 1200-476 / 476-1000 / 1000-1281 / 1281-1923 / 1923-2000 | **0 / 0 / ~1 / ~1-30 / ~4.200 / ~150** | Z6: f<1281 tek nokta (Lapaha); Z6 KOORD diff'i inmemiş; 1923 sonrası yalnız Şefşâven + t>1923 olanlar |
| Künye (o çağda yaşayan, pad'li): aynı 6 çağ | **~5 / ~25 / ~70 / ~200 / ~800 / ~150** | 96 künye f<1000 (UFUK-DISI L3); 54 künye t>1945 |
| Kronoloji maddesi: aynı 6 çağ | **0 / ~10 / ~120 / ~1.600 / ~10.900 / ~650** | UFUK-DISI: <1000 132 · 1000-1281 1.592 · iç 10.862 · 1923-45 594 · >1945 57 |
| 1281-1923 yoğunluk (sahipli nokta / 1000 km² kara) | Anadolu ~0,4 · Mezopotamya ~0,1 · Mısır ~0,1 · dünya ~0,03 | 4.300 nokta / ~135 M km² kara |
| MÖ çağlarında yoğunluk | **0 her bölgede** | veri yok |
| MÖ temsili için en ucuz seçenek | ölçülecek; sezgi: **astronomik yıl + dolgulu işaretli dizgi** app.js'te en az site (gunIdx sayısal); motor/denetimde **dizgi karşılaştırmasının hepsi** (48 site) bozulur, her seçenek motoru etkiler | MOTOR-TARIH-TARAMA §HÜKÜM |

## HÜKÜM — dört cümle
1. **MÖ 3000 – MS 476 arasında atlasta bugün neredeyse hiçbir şey yok.** Hiçbir katmanda negatif yıl yok.
   Yerleşim 0, madde 1 (0226 Sâsânî), künye 2 (sâsânî 226 · bizans 330). Sümer çağı (MÖ 3000-1200) her katmanda **0**.
2. Veri yoğunluğu yalnız 1281-1923'te var: 4.148 sahipli nokta, dünya ortalaması **0,031 / 1000 km² kara**. En yoğun
   Anadolu 0,369, Ege-Balkan 0,337, Levant 0,134, Mezopotamya **0,102**, Mısır **0,047**. Öteki her çağda ve bölgede
   yoğunluk **0,000** (1000-1281'de 1 nokta, 1923-2000'de 1 nokta). Bekleyen Z6 1000-1281'e 80 nokta, Z5 1923-1945'e
   4.130 nokta getirir; 1945-2000 ve 1000 öncesi için bekleyen veri yok.
3. **Listelenen dört temsilin hiçbiri bugünkü okuyucularla doğrudan çalışmıyor.** app.js'in `gunIdx`'i her negatif
   biçimde **çökmeden 2149 yılına düşüyor** (sessiz yanlış). Python `datetime` yıl ≤ 0'ı hiç taşımıyor. Dizgi
   sıralaması iki işaretli seçenekte (dizgi+işaret, astronomik) negatifleri **ters** diziyor; ISO ± biçiminde ayrıca
   `+`, `-`'nin önüne geçiyor.
4. Aynı tuzak MS 1-99 için de var: `Date.UTC` bu yılları **1900+** yapıyor (yıl 50 → 1950, ölçüldü). Sümer → MS 2000
   ufku bu aralığı da kapsıyor.

## ① BUGÜN NE VAR — çağ çağ (`77abc6b9`; evren: index.html'in 71 betiği node vm'de eval edildi, hata 0 · `girdi.yukle()` 93 dosya / 4.300 nokta)

| çağ | yerleşim: o çağda SAHİPLİ nokta | yerleşim: `kur:` bu çağda | künye: o çağda yaşayan | künye: `f` bu çağda | kronoloji maddesi (`t`) |
|---|---|---|---|---|---|
| < MÖ 3000 | 0 | 0 | 0 | 0 | 0 |
| **MÖ 3000-1200** (Sümer → Tunç sonu) | **0** | 0 | **0** | 0 | **0** |
| MÖ 1200 - MS 476 | 0 | 0 | 2 (sâsânî, bizans) | 2 | 1 (`0226-01-01`, künye-içi) |
| 476-1000 | 0 | 0 | 96 | 94 | 131 |
| 1000-1281 | 1 (Lapaha) | 2 | 264 | 182 | 1.592 |
| 1281-1923 | **4.148** | 1.474 | 742 | 601 | **10.862** |
| 1923-2000 | 1 (Şefşâven) | 0 | 155 | 17 | 664 |
| > 2000 | — | — | — | — | 0 |

- Madde evreni **13.250** (UFUK-DISI-1008 13.237 demişti; fark 13 aradaki commit'lerden geliyor, kalem kalem ölçülmedi).
  Künye 896. Yerleşim tarih alanı **36.295**, hepsi 4 hane.
- **Bekleyen (inmemiş) veri, raporlarından:** Z6 KOORD → 1000-1281'e **80 nokta** (okunan 1.263'ün %6,3'ü; duvarın
  2.526 noktasının ~%95'i 1000-1281'de sahipsiz kalır). Z5 KOORD → 1923-1945'e **4.130 nokta** (%96,4).
  1945-2000: **0** nokta (1945 sonrası künye `t>1945` 54). 476 öncesi için hazırlanan veri yok.
- **Tarih biçimi karışıklığı (② engelinin ölçümü):** madde `t` 13.118 dört hane · **85 dolgulu `0YYY`** · **47
  dolgusuz üç hane**. Künye `f/t` 1.682 · **46 dolgulu** · **64 dolgusuz**. Yerleşimde 36.295 alanın hepsi 4 hane,
  karışıklık yok. Negatif: her yerde **0**.

## ② YOĞUNLUK — o çağda sahipli nokta / 1000 km² kara (Natural Earth 10m kara, eşit alanlı izdüşüm; bölge kutuları İLK eşleşen)

| bölge (kara, bin km²) | MÖ 3000-1200 | MÖ 1200-476 | 476-1000 | 1000-1281 | **1281-1923** | 1923-2000 |
|---|---|---|---|---|---|---|
| Mezopotamya (1.010) | 0 | 0 | 0 | 0 | 103 (**0,102**) | 0 |
| Levant (315) | 0 | 0 | 0 | 0 | 42 (0,134) | 0 |
| Mısır (1.268) | 0 | 0 | 0 | 0 | 60 (0,047) | 0 |
| Anadolu (751) | 0 | 0 | 0 | 0 | 277 (**0,369**) | 0 |
| Ege-Balkan (522) | 0 | 0 | 0 | 0 | 176 (0,337) | 0 |
| İtalya (634) | 0 | 0 | 0 | 0 | 148 (0,233) | 0 |
| İran (2.106) | 0 | 0 | 0 | 0 | 100 (0,047) | 0 |
| Hint (5.176) | 0 | 0 | 0 | 0 | 137 (0,026) | 0 |
| Çin (5.872) | 0 | 0 | 0 | 0 | 115 (0,020) | 0 |
| Avrupa-kalan (5.959) | 0 | 0 | 0 | 0 | 539 (0,090) | 1 |
| Dünya-kalan (110.865) | 0 | 0 | 0 | 1 | 2.451 (0,022) | 0 |
| **dünya (134.477)** | **0** | **0** | **0** | 1 | **4.148 (0,031)** | 1 |

Kutular (lon0, lat0, lon1, lat1): Mezopotamya 38,29,49,38 · Levant 33,29,38,37.5 · Mısır 24,21,37,32 · Anadolu 26,36,45,42.5 ·
Ege-Balkan 19,34,30,46 · İtalya 6,36,19,47.5 · İran 44,25,63,40 · Hint 66,6,92,36 · Çin 98,18,125,45 · Avrupa-kalan −11,35,40,72.
⚠️ `§6`'nın sayısal bir eşiği yok: "yoğunluk sağlanmadan pencere açılmaz" diyor ama sayı vermiyor. Tek ölçüt
bugünkü çekirdek. Sümer çekirdeği Mezopotamya'nın 1281-1923 yoğunluğu 0,102; Anadolu'nunkinin (0,369) **3,6'da
1'i**. MÖ çağlarında her bölgede 0, yani her eşikte "açılamaz".

## ③ MÖ TARİH TEMSİLİ — dört seçenek, ölçülen davranış (öneri YOK)

### Dil düzeyinde ölçüm (node + app.js'in GERÇEK `gunIdx`/`idxTarih`'i · Python 3.13)
| girdi | app.js `gunIdx` → `idxTarih` | JS `Date.parse` | Python `date` | dizgi sıralaması |
|---|---|---|---|---|
| dizgi + işaret `-3000-01-01` | **65713 → y=2149** (sessiz yanlış: `split("-")[0]` = `""` → yıl 0 → 1900 + 2999 ay) | yanlış (32472133200000) | `fromisoformat` **ValueError** · `MINYEAR = 1` | `-0500 < -1200 < -3000` **TERS** (Py ve JS aynı) · negatif < pozitif ✓ |
| aynısı dolgulu `-03000-01-01` | 65713 → y=2149 | — | ValueError | ters |
| astronomik `-2999-01-01` (MÖ 3000) | 65683 → y=2149 | — | ValueError (yıl 0 da: "year 0 is out of range") | ters |
| ISO genişletilmiş `-002999-01-01` | 65683 → y=2149 | **DOĞRU** (−156.806.496.000.000 ms; JS 6 haneyi tanır) | ValueError | `+000330 < +001281 < -001200 < -003000` — **işaretler arası da TERS** |
| yıl 50 `0050-01-01` | **y=1950** (`Date.UTC` 0-99 → 1900+) | — | 0050 ✓ | ✓ |
| kontrol `1923-10-29` / `+001923-10-29` | ✓ / ✓ | | | |
- JS `Date.UTC(-2999,0,1)` doğrudan çağrılınca DOĞRU (−1.814.890 gün): JS'in iç takvimi astronomik ve MÖ'yü
  taşıyor. Bozan `gunIdx`'in `split("-")` ayrıştırması.
- Python `date` hiçbir biçimde yıl ≤ 0 taşımıyor. `datetime` kullanan her site, dört seçenekte de datetime dışı
  bir gün hesabına geçmek zorunda.

### Okuyucu siteleri — dosya × sınıf (`denetim/ARAC-SUMER-2000-SITE-1009.py`, DESEN sayımı, AST değil, yorumsuz)
| dosya | gunIdx | Date.* | split('-') | ilk-4 dilim | int(…[:4]) | gun_no | _gun_farki | date/fromiso | literal kıyas | f/t kıyas | sort/min/max |
|---|---|---|---|---|---|---|---|---|---|---|---|
| js/app.js | **78** | 7 (+13 idxTarih/getUTCFullYear) | 4 | 5 | 0 | — | — | — | 0 | 21 | 123 |
| arac/odak_cozum.js | 7 | 0 | 0 | 0 | 0 | — | — | — | 0 | 0 | 7 |
| arac/denetle.py | — | — | 3 | 6 | 4 | **13** | **11** | 7 | 9 | 20 | 107 |
| arac/renk_olc.py | — | — | 0 | 7 | 2 | — | — | 0 | 0 | 2 | 70 |
| arac/uret_petek.py | — | — | 1 | 0 | 0 | — | — | 0 | 6 | 39 | 187 |
| arac/uret_devirler.py | — | — | 0 | 0 | 0 | — | — | 0 | 0 | 7 | 2 |
| arac/girdi.py · motor_onbellek.py | — | — | 0 | 0 | 0 | — | — | 0 | 0 | 0 | 4 · 2 |
| arac/denetle_yayin.py | — | — | 0 | 1 | 1 | — | — | 0 | 0 | 0 | 18 |
| data/*.js (paket hariç, ÇALIŞAN kod) | | | | | | | | | **0** | | |
- **Motor için desen sayımı değil MOTOR-TARIH-TARAMA-1008'in AST'li ölçümü esas:** 4 tuz dosyasında **59 gerçek
  tarih sitesi**. **48'i dizgi sıralaması/kıyası** (SESSİZ YANLIŞ kovası; 19'u dönem içerme testi `f <= g < t`),
  **11'i eşitlik/küme** (yazım tek biçimdeyse doğru). `sort/min/max` sütunu tarih dışı sıralamaları da sayıyor, üst sınırdır.
- **Mevcut iki okuyucunun negatif yılda davranışı (koddan):** `denetle.gun_no`: `pad` sonrası `int(s[0:4])` =
  `"-300"`, sonra `int(s[5:7])` **ValueError** (gürültülü çöküş). `denetle._gun_farki`: `split("-")` → `int("")`
  hatası **yakalanıyor ve `None` dönüyor** ⇒ 11 çağrı sitesi `if g is not None and g > …` kalıbıyla **SESSİZCE
  GEÇER** (ihlal görünmez).

### Seçenek × site sınıfı — negatif yıl girince ne olur (yukarıdaki ölçümden türetildi)
| site sınıfı (sayı) | ① datetime-dışı gün sayacı | ② dizgi + işaret | ③ astronomik yıl (0 var) | ④ ISO ±YYYYY(Y) |
|---|---|---|---|---|
| dizgi sıralaması/kıyası (motor 48 · denetle ~29 · uret_devirler ~7 · renk_olc ≥2) | veri sayıya çevrilirse **doğru**; dizgi kalır ve anahtarla okunursa **her site değişir** | negatifler arası **TERS**, sessiz | ② ile aynı (biçim aynı) | işaretler arası VE negatifler arası **TERS**; bütün veri `+` almazsa karışık |
| eşitlik/küme (motor 11) | tek biçim şartı | tek biçim şartı (`-0500` ≠ `-500`) | ② ile aynı | tek biçim şartı (`+001923` ≠ `1923`) |
| app.js `gunIdx` (78 çağrı, 1 tanım) | tanım değişir, çağrılar değişmez | **tanım değişmezse SESSİZ 2149** | aynı | aynı (6 hane `Date.parse` doğru ama gunIdx `split` kullanıyor) |
| app.js `idxTarih`/`getUTCFullYear` (13) | JS astronomik verir; "MÖ" gösterimi için ±1 | gösterimde MÖ n ↔ astronomik −(n−1) | **doğrudan** (JS'in iç düzeni) | doğrudan |
| app.js ilk-4 dilim (5) + split (4) | değişir | `"-300"` keser, sessiz | aynı | `"+001"` / `"-002"` keser |
| Python `datetime` (denetle gun_no 13 · _gun_farki 11 · date 7 · renk_olc int/[:4] 9) | **zorunlu yeniden yazım** (MINYEAR=1) — dört seçenekte aynı | çöker (gun_no) / sessiz None (_gun_farki) | aynı | aynı |
| MS 1-99 (`Date.UTC` → 1900+) | gün sayacı JS Date'i atlıyorsa yok | var | var | var |
| veri yeniden yazımı | her tarih alanı çevrilirse: yerleşim 36.295 · madde 13.250 · künye 1.792 | yok (yalnız yeni MÖ kayıtlar) | yok (MÖ kayıtlar −(n−1) ile yazılır) | tek biçim için **51.337 alan** `+` alır |
| Z2 `yilDizgi`/`isoDizgi` (diff'te 16 satır, inmemiş) | — | işareti taşır, `-3000` basar ("MÖ" yazmaz) | `-2999` basar (MÖ 3000 değil) | `+`'yı soymaz |
- **Kaydırıcı:** `kaydirici.min/max` gün indeksi (sayı). MÖ 3000 → MS 2000 ≈ **1,83 milyon gün**. JS Date aralığı
  ±271.821 yıl, sınır değil. Sorun yalnız `gunIdx`'in girdisi.
- **odak_cozum.js:** 7 `W.gunIdx` çağrısı app.js'ten kesilen tanımı kullanıyor, app.js'in kaderini paylaşıyor.

## ③b BULAMADIM / ÖLÇMEDİM
- Bölge kutuları kaba (dikdörtgen, ilk eşleşen; "Mezopotamya" Suriye çölünü de kapsıyor). Yoğunluklar mertebe, sınır değil.
- `§6`'nın sayısal eşiği yok. "Açılabilir" hükmü için eşik koordinatörün/Emre'nin.
- Desen sayımı AST değil. Motor için TARAMA'nın 59'u esas; denetle/app için sınıflandırılmış (hangi sitenin gerçekten
  tarih taşıdığı) sayım YAPILMADI. Rakamlar üst sınır niteliğinde (özellikle sort/min/max).
- Madde evreninin 13.237 → 13.250 farkı kalem kalem açılmadı.
- MÖ kaynak durumu (TDV'nin Sümer/Akad/Babil maddeleri, gün hassasiyeti) ölçülmedi. Görev dışı.

## ④ ÖNGÖRÜ KARNESİ
| öngörü | ölçüm | |
|---|---|---|
| MÖ kayıt 0/0/0 | 0/0/0 | ✓ |
| yerleşim 0/0/~1/~1-30/~4.200/~150 | 0/0/**0**/**1**/4.148/**1** | 1923-2000 ✗: dönemlerin `t:1923-10-29`da bittiğini unuttum |
| künye ~5/~25/~70/~200/~800/~150 | **0/2/96/264/742/155** | mertebe ✓, MÖ ucu fazla |
| madde 0/~10/~120/~1.600/~10.900/~650 | 0/**1**/131/1.592/10.862/664 | ✓ (MÖ 1200-476 fazla) |
| yoğunluk Anadolu ~0,4 · Mezopotamya ~0,1 · Mısır ~0,1 · dünya ~0,03 | 0,369 · 0,102 · **0,047** · 0,031 | Mısır yarısı |
| MÖ'de yoğunluk 0 | 0 | ✓ |
| "her seçenek motoru etkiler" | ✓ (dört seçenekte dizgi kovası) · **ek:** gunIdx'in SESSİZ 2149'u ve _gun_farki'nin SESSİZ None'u öngörülmemişti | ✓ + iki yeni sessiz sınıf |

## Dosyalar
`SUMER-2000-OLCEK-1009.md` (bu rapor) · `ARAC-SUMER-2000-TOPLA-1009.js` (node vm evren dökümü) ·
`ARAC-SUMER-2000-OLC-1009.py` (çağ × bölge sayımı) · `ARAC-SUMER-2000-SITE-1009.py` (site desen sayımı). Hepsi yalnız okur.
