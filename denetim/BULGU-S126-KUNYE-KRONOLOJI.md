# BULGU — S126 · `data/devletler.js` künye/kronoloji/kaynak ölçümü

**Oturum:** SONNET HAZIR KITA 126 · `local_372203f2-6e71-46d2-af5e-563a5c7eca60`
**Sevk:** M-2281/M-2292 (1.MURAT) · ÖLÇÜM oturumu — düzeltme YAPILMADI, yalnız ölçüldü.
**Yöntem:** `node -e "global.window={};eval(fs.readFileSync('data/devletler.js'))"` — regex DEĞİL,
dosyanın kendi JS yorumlayıcısı (`CLAUDE.md §11`: "veri zaten bir dilde yazılıysa, o dilin
yorumlayıcısını çağır"). Script: bu dosyanın altına iliştirilmedi, scratchpad'te
`olc_devletler.js` — istenirse yeniden koşulabilir.

---

## ① NE ÖLÇTÜM

### Taban
- **TOPLAM künye: 440.** `id` mükerrerliği: **0** (ölçümün kendi zemini temiz).
- `kronoloji` alanı **440 künyenin 440'ında da mevcut** (anahtar hiç eksik değil);
  boş olanlar `kronoloji:[]` biçiminde yazılmış, **44 kayıt.**
- `kaynak` alanı **440 künyenin 440'ında string tipinde dolu** — literal **BOŞ: 0/440.**

### Bölge bölge — `kronoloji:[]` (boş) sayımı

⚠️ **Çapraz doğrulama ÖNCE:** M-2281'in referansı *"Amerika'da 47/35 ölçüldü"* idi.
Şemanın kapalı sözlüğündeki üç Amerika bölgesiyle (`kuzey-amerika` · `orta-amerika` ·
`guney-amerika`) topladığımda **39/27** çıktı — **eşleşmedi.** Sebebini aradım:
dosyada **`orta-amerika-karayip`** adında DÖRDÜNCÜ bir bölge etiketi var (8 kayıt,
8'i de boş) ve bu etiket **şemanın kendi başlık yorumundaki kapalı bölge listesinde
YOK** (bkz. ② ve aşağıdaki şema bulgusu). Dördünü birlikte saydığımda:

```
kuzey-amerika + orta-amerika + guney-amerika + orta-amerika-karayip
= 47 künye · 35 boş   ✓ M-2281'in sayısıyla BİREBİR ÖRTÜŞÜYOR
```

⇒ **TUTTU.** Referans doğrulandı ve bu ölçümün yöntemi ondan bağımsız olarak
aynı sonuca vardığı için **kendi kendini de doğrulamış oldu.**

**Tam tablo — 27 şema-içi bölge + görülen şema-dışı 1 bölge, künye sayısına göre boş
oranı > 0 olanlar (sıfır olan 19 bölge listenin altında toplu verildi):**

| bölge | toplam | boş | boş id'ler |
|---|---:|---:|---|
| guney-amerika | 21 | 16 | arjantin-cumhuriyeti, bolivya-cumhuriyeti, sili-cumhuriyeti, paraguay-cumhuriyeti, peru-cumhuriyeti, uruguay-cumhuriyeti, ekvador-cumhuriyeti, venezuela-cumhuriyeti, kolombiya-cumhuriyeti, brezilya-cumhuriyeti, chimu-krallik, colla-krallik, lupaqa-krallik, diaguita-calchaqui-konfederasyonu, mapuche-araukanya, muisca-konfederasyonu |
| kuzey-amerika | 13 | 11 | teksas-cumhuriyeti, cahokia, cherokee, choctaw, creek-konfederasyonu, haudenosaunee, powhatan, natchez, pueblo-bagimsizligi, apaci-ovalar, komanci |
| **orta-amerika-karayip** 🔴 şema dışı | 8 | 8 | dominik-cumhuriyeti, kuba-cumhuriyeti, guatemala, nahua-sehir-devletleri, purepecha-imparatorlugu, tututepec-krallik, zapotek-krallik, panama-cumhuriyeti |
| guney-afrika | 5 | 4 | transvaal, oranj, mutapa, zimbabve-kralligi |
| bati-afrika | 10 | 2 | massina, tekrur |
| anadolu | 33 | 1 | eyyubi-hisnikeyfa |
| guney-asya | 50 | 1 | farukiler |
| okyanusya | 5 | 1 | tui-tonga-imparatorlugu |
| orta-amerika (şema-içi, karayip HARİÇ) | 5 | 0 | — |

**Sıfır çıkan 19 bölge** (boş yok): balkanlar(33) · misir-sudan(9) · iran(19) ·
sibirya-bozkir(8) · orta-avrupa(10) · dogu-avrupa(18) · italya(16) · bati-avrupa(11) ·
kuzey-avrupa(7) · kafkasya(7) · arabistan(15) · kuzey-afrika(10) · iberya(6) ·
dogu-afrika(13) · orta-asya(14) · dogu-asya(28) · guneydogu-asya(59) · orta-afrika(7).

**TOPLAM (27 şema-içi bölge + `orta-amerika-karayip`):** 440 künye · **44 boş kronoloji** (%10).

**Yüzyıl dağılımı** (boş 44 kaydın `f:` alanına göre, yüzyıl başlangıcı):
1200'ler **18** · 1800'ler **17** · 1300'ler 2 · 1400'ler 2 · 1000'ler 1 · 1600'ler 1 ·
1700'ler 1 · 1900'ler 2. ⇒ İki tepe var: **atlas ufkunda (1200'ler) zaten var olan ve
tarihi belirsiz devletler** (çoğu Amerika/Afrika yerli siyasî yapıları) ile **19. yüzyıl
bağımsızlık dalgası** (Latin Amerika cumhuriyetleri, Afrika krallıkları çöküşü) — ikisi
de "kuruluş/dönüm/son" araştırmasının EN UCUZ olduğu uçlar değil, en PAHALI olduğu uçlar.

### `kaynak` alanı boşluğu

**Literal boş: 0/440.** Ama bu sayı tek başına yanıltıcı okunabilir, o yüzden ikinci
bir kova ölçtüm:

```
kaynak = "bulunamadı — ..." (CLAUDE.md §4'ün onayladığı dürüst-boşluk biçimi)  158/440  (%36)
kaynak = gerçek bir slug/madde/eser adı                                        282/440  (%64)
```

⇒ Alan **hiçbir zaman literal boş değil** — bu proje `bulunamadı` disiplinini
(`§4`: *"kaynağı yazılmayan bilgi, kaynağı olmayan bilgiden ayırt edilemez"*)
`devletler.js` künye seviyesinde **tutarlı uyguluyor.** 158 kayıt kaynak
**bulamadığını açıkça yazmış**, uydurmamış — bu bir kusur değil, disiplinin izi.

**Hem kronoloji hem kaynak boş olan künye: 0.** (Kaynak zaten hiç literal boş
olmadığı için bu kesişim boş çıkması matematiksel bir sonuç, ayrı bir bulgu değil.)

---

## ② NEYİ BULAMADIM / ÖLÇMEDİM

- **44 boş kronolojinin HER BİRİ için TDV/akademik kaynak taraması yapmadım.**
  Bu görev M-2281'de yalnız Amerika için (47/35) ayrı bir araştırma kolu olarak
  açılmıştı; benim sevkim *"kaçı boş, bölge bölge"* diye SAYIM istiyordu,
  araştırma istemiyordu — o yüzden 44'ün hangilerinin TDV'de karşılığı olduğunu
  **araştırmadım.** İsteniyorsa ayrı bir kol olarak açılmalı.
- **`bulunamadı` yazan 158 kaydın kaynak arama sürecini yeniden doğrulamadım**
  (yani "gerçekten arandı mı" diye tek tek slug denemedim) — yalnız alanın
  **dolu ve `§4` biçimine uygun** olduğunu ölçtüm. İçeriğin doğruluğu ayrı bir
  denetim ister.
- **`bati-afrika`daki 2 (massina, tekrur) ve `guney-asya`daki 1 (farukiler),
  `anadolu`daki 1 (eyyubi-hisnikeyfa) niçin boş kaldı — kasıtlı mı unutulmuş mu —
  ölçmedim.** Sayıyı verdim, nedenini araştırmadım (kapsam dışı: bu bir SAYIM
  görevi).
- `harita` alanının `renkler.py`deki `BOYALAR` karşılığı var mı — bu sevkin
  kapsamında DEĞİLDİ, ölçmedim.

---

## ③ NE İSTİYORUM

1. **Şema düzeltmesi (ben uygulamıyorum, öneriyorum):** `data/devletler.js`
   başlığındaki `bolge` KAPALI SÖZLÜK yorumuna **`orta-amerika-karayip`** eklenmeli
   — 8 kayıt zaten bu değeri taşıyor ve dosyanın kendi kuralı (*"yetmezse yeni
   bölge eklenebilir, BU LİSTEYE DE YAZILMALI"*) bu adımı atlamış görünüyor.
   Alternatif: bu 8 kaydı üç kanonik Amerika bölgesinden birine (coğrafyaya göre
   `orta-amerika` ya da `kuzey-amerika`) dağıtmak — hangisi tercih edilirse
   `renk_olc.py`/`durum_tablosu.py` gibi `bolge` okuyan araçların da güncellenmesi
   gerekir. **Karar koordinatörde**, ben yalnız tutarsızlığı buldum.
2. **44 boş kronoloji için araştırma kolu açılacaksa**, yukarıdaki tablo hazır
   taban — Amerika'daki 35'i zaten AMERİKA-0902'ye sevk edilmiş (M-2281), geri
   kalan **9 kayıt** (guney-afrika 4 · bati-afrika 2 · anadolu 1 · guney-asya 1 ·
   okyanusya 1) henüz kimseye verilmemiş görünüyor.
3. Bu ölçüm ile M-2281'in "47/35" referansı **birbirini doğruladı** — ayrı bir
   düzeltme gerektirmiyor, yalnız kayda geçiyorum.

---

## ⑤ DAMGA

| kalem | damga |
|---|---|
| Amerika 47/35 referansı | **TUTTU** (birebir, `orta-amerika-karayip` dahil edilince) |
| `kaynak` alanı literal boş | **TUTTU** — 0/440, ayrıca 158/440 `bulunamadı` (disiplin izi, kusur değil) |
| bölge şeması `orta-amerika-karayip`ı tanımıyor | **BULGU** — şema kirliliği, düzeltme koordinatörde |
| 44 kaydın niçin boş kaldığı (kasıt/unutma) | **ÖLÇÜLEMEDİ** — kapsam dışı, ayrı görev ister |

---

`✅ boştayım` — bu görev bitti, yeni iş bekliyorum.
