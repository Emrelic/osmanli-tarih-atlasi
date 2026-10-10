# KASA-FAZ2-1010 — gece boyunca doğrulanmış kuyruğun FAZ 2 veri diff'i

Görev: YILDIRIM BAYEZIT (UCSUZ-ISGAL hükmü (d) ①: "yazılabilir kuyruğun FAZ 2 diff'ini yaz") · Yazan: KASA ·
`data/` DONUK ⇒ yalnız `denetim/KASA-FAZ2-1010.diff` (250 satır, 7 dosya).
Zemin: `origin/main` 14bb94b9 + FAZ 1'in ilk beşi (ayrı worktree, yerel commit, itilmedi). `git apply --check`:
**FAZ 1 yığını üstüne ✓ · çıplak main 14bb94b9'a ✓.**

## 0. 🔴 ÖNCE: iki ŞEMA çelişkisi — hükümlerin bir kısmı bu şemaya OLDUĞU GİBİ yazılamıyor
### 0.1 `v:` bir "yabancı metbû" alanı DEĞİL
`VERI-YAPISI.md:121-129`: `s` = yabancı sahip · `d` = **doğrudan Osmanlı** · `v` = *"Tâbi / dolaylı idare / işgal
dönemleri"* (Osmanlı'ya göre; motor *"Osmanlı doğrudan koyu, tâbi AÇIK"* boyar — CLAUDE.md:54) · `isg` = *"İşgal
dönemleri — sahiplik DEĞİŞTİRMEZ, üstüne biner. `d:` işgal eden, `kaynak:` zorunlu."* `girdi.py:330` `kid`: *"tâbi
devletin KÜNYE kimliği — v: içinde"*.
⇒ `v:fransa` (Madrid, Sevilla, Córdoba, Oviedo, Görice 1916-18), `v:memluk` (Hama), `v:germiyan`/`v:aydin`
(Alaşehir), `v:macaristan` (Dubrovnik) yazılırsa motor bu yerleri **OSMANLI TÂBİSİ** (açık Osmanlı tonu) çizer.
Şemada "yabancı A, yabancı B'ye tâbi" diye bir alan YOK.
⇒ **Bu diff'te uyguladığım eşleme (adıyla beyan; hüküm senin):**
| hükmün dediği | yazdığım | gerekçe |
|---|---|---|
| işgal/Joseph krallığı `v:fransa` | **`isg:fransa-cumhuriyet`** | `isg` tam bu: sahiplik `ispanya` kalır, işgal üstüne biner |
| Görice 1916-12-10 → 1918-02-16 `v:fransa` + 1918-02-16 → 1920-05-24 `isg` | **tek `isg:` 1916-10 → 1920-05-24** | himaye kademesi `v:`'de yazılamıyor; ayrım `kaynak:`'ta ADIYLA |
| Hama `d:eyyubi-hama` + `v:memluk` | **`s:eyyubi-hama`**, Memlük tâbiyeti `kaynak:`'ta | yabancı metbû alanı yok |
| Alaşehir `v:germiyan` + `v:aydin` | **yalnız `s:bizans` 1281→1390**, metbûluk `not:`'ta | aynı |
| Dubrovnik `d:dubrovnik` + `v:macaristan` | **`s:dubrovnik`**, Macar himayesi `not:`'ta | aynı |
⚠️ Madrid, Sevilla ve önceki `v:fransa` hükümleri bu diff'te YOK (onlar önceki FAZ 2 `2r` kuyruğundaydı). Aynı eşleme
onlara da uygulanmalı — yoksa İspanya'nın ortası Osmanlı tâbisi boyanır.
### 0.2 TAKVİM: "ÇEVİRME YAPILMAZ" — benim Bayburt çevirim kuralı ÇİĞNİYORDU
`VERI-YAPISI.md` §TAKVİM: *"Bu atlasın tarihleri JÜLYEN'dir. ÇEVİRME YAPILMAZ."* · *"Batı kaynağından gelen tarih
kaynağın hangi takvimde olduğu ÖLÇÜLÜR"* · *"çevirme YAPILMAZ — ve yapıldıysa `kaynak:`ta YAZILIR"*.
UCSUZ-ISGAL'de Bayburt'un Rus (Jülyen) günlerini +12 ile Gregoryen'e ÇEVİRDİM ve sen onayladın (1829-07-19 →
09-08). **İkimiz de kuralı atladık.** ⇒ Diff Bayburt'u **kaynağın takviminde** yazıyor: `isg:rusya` **1829-07-07 →
1829-08-27** (Jülyen; Gregoryen karşılığı `kaynak:`ta beyan). Batı kaynakları (Allgemeine Zeitung, Henry, Begolli,
Oman, HLS) kendi takvimlerinde (Gregoryen) olduğu gibi.

## 1. Diff'teki kalemler (15 kayıt + 9 kronoloji maddesi + 4 kronoloji kimliği)
| kayıt | değişiklik | dayanak (birebir alıntılar `kaynak:` alanında) |
|---|---|---|
| **Klagenfurt** | `isg:` fransa-cumhuriyet **1809-05-19 → 1810-01-11** · yugoslavya **1919-06-06 → 1919-07-31** · `not:` İlirya iddiasının ÇÜRÜTÜLDÜĞÜ (iddia SİLİNMEDİ, kaynak alanında duruyor) | Allgemeine Zeitung 27.01.1810 · AEIOU · Ghon · Austria-Forum |
| **Lienz** | `almanya` 1805-1814 bölündü: **`fransa-cumhuriyet` 1810 → 1813** (YIL) | HE "Ilirske pokrajine" |
| **Thonon** | **`isvicre` 1536 → 1567** (YIL; Lozan emsali) | HLS "Thonon" |
| **Aosta** | **`fransa-cumhuriyet` 1800-05-16 → 1814** (son YIL) · `isg:fransa` **1691-06-18 → 07-06** · `isg:fransa` **1704 → 1706** (YIL) · `not:` 1798-99 neden YAZILMADI | Enc. Italiana · Henry 1929 · napoleon.org |
| **Görice** | `isg:yunanistan` **1912-12 → 1914-03-01** · `isg:fransa-cumhuriyet` **1916-10 → 1920-05-24** (§0.1) | Begolli 2018 · TDV gorice |
| **Oviedo** | `isg:fransa-cumhuriyet` **1810-03-29 → 1811-06-14** | Oman III · IV (tek eser, sayfa ölçülemedi) |
| **Córdoba** | `isg:fransa-cumhuriyet` **1810-01-24 → 1812-09** (son AY) | Oman III · IV · V |
| **Girona** | `ispanya` bölündü: **`fransa-cumhuriyet` 1812 → 1814-03** (doğrudan ilhak) · `isg:fransa` **1694 → 1697** (YIL) | Oman V · VII · EB1911 Gerona/Barcelona |
| **Alaşehir** | `bizans` **1281 → 1390** (1300-1390 `germiyan` KALDIRILDI) · `not:` metbûluk zinciri, ⑥ 1390↔1391, 1402-1429 Aydınoğlu neden yazılmadı | TDV alasehir · aydinogullari · cuneyd-bey |
| **Hama** | **`eyyubi-hama` 1310-10-03 → 1342** (memluk bölündü) | TDV hama · eyyubiler |
| **Dubrovnik** | 1358-1459 **`macaristan` → `dubrovnik`** · `not:` | koordinatör hükmü, zincirin kendi "himaye" notu |
| **Königsberg** | 1281-1525 **`almanya` → `teuton-devleti`** | NDB 'Albrecht' (Ordensstaat) · kaydın kendi öz-ilanı |
| **Surgut · Berezov** | `rusya` **1592 → 1593** | ЭСБЕ ×2 · TDV kucum-han (başlangıç ≠ kuruluş) |
| **Bayburt** | `isg:rusya` **1829-07-07 → 1829-08-27** (Jülyen, §0.2) | ЭСБЕ · Ushakov 1836 s.234 |
| `kronoloji_almanya.js` | `"teuton-sovalyeleri"` → `"teuton-devleti"` (4 geçiş: 2 `devlet:` + 2 `etiket`) | Töton hükmü |
| `olaylar_kronoeksik_0921.js` | **9 madde:** 1310-10-03 Hama · 1342 Hama · 1567 Thonon · 1593 Berezov/Surgut · 1706 Aosta · 1800-05-16 Aosta · 1809-05-19 / 1810-01-11 Klagenfurt · 1914-03-01 Görice — YIL olanların `gun:` alanı bunu AÇIKÇA yazar | aynı kaynaklar |

## 2. Kapı (tam `denetle.py`, yığın ↔ yığın + FAZ 2)
**İlk koşu (maddeler YOKKEN) iki kapı düştü — tavan YÜKSELTİLMEDİ, madde yazıldı (Çukurova emsali):**
```
Değişmez 2i  ✗  5 açık (tavan 1)    yeni: 1706-01-01 Aosta · 1809-05-19 / 1810-01-11 Klagenfurt · 1914-03-01 Görice
Değişmez 2s  ✗  195 açık (tavan 193) yeni gün: 1310-10-03 Hama · 1800-05-16 Aosta (+ YIL-temsilî 1342 · 1567 · 1593)
```
**Maddelerle (son hâl):**
```
Değişmez 2i  ✓  185 işgal kırılması, 1 açık (tavan 1)       — önce 171 / 1
Değişmez 2s  ✓  1811 yabancı kırılma, 193 AÇIK (tavan 193)  — önce 1807 / 193 · YIL-temsilî borç 231 → 233 (ihlal değil)
Değişmez 5t  Berezov "olası gerçek çelişki" KAPANDI (kur 1593 = rusya f 1593)
kaynaksız s: 1841 → 1839 · isg dönemi 372 → 382 · kronoloji maddesi 2223 → 2232
Değişmez 7 (🧊, ihlal sayılmıyor) 800 → 802 · isg cebi 35 → 40 (Bayburt 1829 Rus işgali 298 km ada — beklenen)
taban-ölçülemedi 188 → 189: Girona (yama yer_yama_avrupa_dayanak_1923.js, NET TAKAS) — ihlal değil, aşağıda §3
çıkış kodu: 2 ↔ 2 (scratch: üretilmiş devletler_harita.js yok ⇒ Değişmez 8/R ÖLÇÜLEMEDİ — veri değil)
```
⚠️ 2s'te Thonon 1536 · Lienz 1810/1813 · Aosta 1814 · Berezov'un düşen 1592'si ZATEN açık olan günlere katıldı (sayı
değişmedi) — maddeleri yazılmadı, YIL-temsilî kovada.

## 3. 🔴 Bayat yama riski — `yer_yama_1923_1945.js`
15 kaydın 15'i de `yer_yama_1923_1945.js`'te (1923 → 1945 uzatma yaması, İNMEMİŞ: Berezov tabanda 1923'te bitiyor,
yamada 1945'e uzanıyor ve **1592**'den başlıyor). `_sahiplik_uygula.py` `s:`'i bütün olarak yazar. Bu diff inince
yamanın 1923-öncesi zinciri 10 kayıtta BAYAT olur (Thonon · Lienz · Aosta · Girona · Alaşehir · Hama · Dubrovnik ·
Königsberg · Surgut · Berezov).
- Koruma VAR: uygulayıcının TABAN KAPISI (`taban ≠ bugün` ⇒ BAYAT, çıkış 2, yazmaz; taban beyansızsa ÖLÇÜLEMEDİ, 3).
  Sessiz geri alma olmaz; ama yama 1923-1945 işi için YENİDEN TABANLANMALI. (Mersin'in Çukurova yamasıyla aynı aile.)
- Girona ayrıca `yer_yama_avrupa_dayanak_1923.js`'te — denetle bunu zaten "taban-ölçülemedi" diye ADIYLA basıyor.

## 4. Diff'e GİRMEYENLER (sebebiyle)
| kalem | sebep |
|---|---|
| Kostajnica | **ZATEN YAZILI**: `fransa-cumhuriyet 1809-10-14 → 1813-01-01` (kaynaklı) — değişiklik gerekmedi |
| Jaén | son yalnız alt sınır (≥ Nisan 1812) ⇒ uçsuz, §8 |
| Bayburt 2. işgal | Jülyen 27 Eyl → 3/5 Eki; son gün belirsiz ⇒ yazılmadı (§0.2 düzeltildi: Jülyen'de f Eylül, t Ekim — ay hassasiyeti ARTIK TERS DEĞİL, ama günü belirsiz) |
| Aosta 1798-99 | iki uç YIL ⇒ sahte 1 yıl (§8) — `not:`'ta |
| Alaşehir 1402-1429 Aydınoğlu | son yılsız — `not:`'ta |
| Draç · Tembura · Yambio · Belh · Çehrin | ŞARTLI / VARLIK (`kur:`/`bit:` kalemi) |
| Madrid · Sevilla · Barselona · Lleida · Valensiya · … (önceki FAZ 2 `2r`) | bu kuyruğun parçası değildi; §0.1 eşlemesi onlara da uygulanmalı |
| Girona 1809-12 → 1812 | baş EB1911, son Oman — iki ayrı kaynak, birleştirilmedi |

## 5. Uygulama notları
- `paket_*.js` dosyalarına DOKUNULMADI: `index.html` *"PAKETLENDİ (arac/paketle.py)"* — üretilmiş; kaynak değişince
  `py arac/paketle.py yenile` (yayın kapısı tazeliği sınar). `kronoloji_almanya.js`'in `paket_08` kopyası bu yolla tazelenir.
- Satır sonları: dosyaların hepsi CRLF; diff üretirken eklediğim 4 çıplak LF düzeltildi (karışık satır sonu 0).
- İlk yazımda `yerlesimler_ek9.js`'e bir `\'` kaçışı girdi ve `girdi.yukle` JSON hatası verdi — düzeltildi; 4300 kayıt yükleniyor.
- Boya borçları (renksiz çizilecek dilimler): `teuton-devleti` (Königsberg) · `dubrovnik` (1358-1459) · `eyyubi-hama`
  (Hama 1310-1342; 1281-1299 dilimi zaten renksizdi). `boya_gerekli:true` künye alanı senin dosyan (`devletler.js`).
- Yazıcı betiği yeniden üretilebilir: `scratchpad/faz2_yaz.py` + `faz2_olay.py` (kayıt bloğu içinde birebir değiştirme,
  her eski dizgi tam bir kez).
