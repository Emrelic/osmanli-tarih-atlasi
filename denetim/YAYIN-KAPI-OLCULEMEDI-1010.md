# YAYIN-KAPI-OLCULEMEDI-1010 — yayın kapısına üç çıkış kodu + bugünkü çıkış 1'in teşhisi

UMIT · 10 Ekim 2026 · yazıcı işçi · model Opus.
**Taban:** ölçümler `origin/main` `a24a4838` (çıplak ağaç `C:\atlas-yayinkapi`) ve `1d5e2dfd`
(hazır ağaç, `olcum_agaci.py hazirla`). İkisinin arasında `arac/`, `data/`, `js/`, `index.html`
ve `denetim/ODAK-*` dosyalarına dokunan commit **0** tane; aradaki farklar yalnız belge.
Diff `apply --check` sonucu `a24a4838`, `5a37a3e1` ve `1d5e2dfd` üzerinde temiz.
Commit, push ve stash yapılmadı. `C:\atlas`a yazılmadı. Tuz dosyalarına ve `denetle.py`ye dokunulmadı.

---

## AŞAMA 1 — `denetle_yayin` origin/main'de bugün ÇIKIŞ 1 veriyor. Sebebi beş kalem, adlarıyla

Gerçek koşu iki ağaçta yapıldı. Çıplak ağaç 6 dk 38 sn sürdü ve çıkış 1 verdi; hazır ağaç da çıkış 1 verdi.
Hazır ağaçta ✗ satırları şunlar:

| # | ✗ satırı | Sınıf | Hangi commit getirdi | Çare (öneri, veriye dokunulmadı) |
|---|---|---|---|---|
| 1 | **SEKME SESSİZ GERİLEDİ 1** — `1381-01-01\|Timur'un İran seferleri başladı` · **sekme `iran`** (`data/kronoloji_iran.js:74`) | **GERİLEME** | **`14174ef7` KOSU 21** (HAVVA, motor çıktısı). Bisect ile bulundu: `e44734ac..38cf24ae`, 123 commit, 7 adım. İlk kötü `14174ef7`, önceki `71603afe` temiz (sessiz 53, yeni 0). | Aşağıda ① |
| 2 | **SEKME OKUNMAYAN GERİLEDİ 1** — `1026-01-08\|Gazneli Mahmud Somnat Kalesi'ni fethetti` · **sekme `gazneli`** (`data/kronoloji_cok_once1281_iran.js:24`) | **GERİLEME** (yeni kapsamdan) | **`02f33728` ZAMAN-PAKET-v2** (UFUK 1281-1923 → 1000-1945). Önceki commit `f2e9548c`de bu çift yok. | Aşağıda ② |
| 3 | **PAKET BAYAT 13 kaynak** + **PAKET İÇERİĞİ UYUŞMUYOR** paket_05/12/13/14/22/23 | **yalnız BAYATLIK**, içerik kusuru YOK | `e54e60df` Z6 (11 yerleşim dosyası) + `b3fd8874` IZNIK 1097 (`devletler.js`, `kronoloji_anadolu.js`) | `py arac/paketle.py yenile` (aşağıda ③) |
| 4 | **YAYIN BAYAT — YAŞ 2,89 gün > eşik 2** (23 yerleşim dosyası değişmiş) | gerçek bayatlık, **DURDURUCU** | Girdi `e54e60df` (10 Eki), çıktı KOSU 21 (7 Eki). | Tam inşa koşusu (HAVVA, 7-8 saat) |
| 5 | **üretim izi bayat 2**: `altlik.js` · `bekleyenler.js` | biri gerçek, biri ORTAM | aşağıda ④ | `uret_altlik.py` |

🔴 **4. kalem, T1'in bugünkü gerçek bedelidir.** Çıplak `origin/main` ağacında `donemler.js` yoktur.
Bu ağaçta kapı `! yayın tazeliği ÖLÇÜLEMEDİ` basıyor ve ✗ listesinde YAYIN BAYAT çıkmıyor. Aynı taban
hazırlanınca kapı `✗ YAYIN BAYAT … 2,89 gün DURDURUCU` diyor. Yani T1 bugün gerçek bir durdurucuyu
gizliyor. Yama ile çıplak ağaçta da `ÖLÇÜLEMEYEN SORU: yayın tazeliği` adıyla basılıyor.

### ① SESSİZ — Timur 1381 · sekme `iran`
- Künye `iran` = "İran (Pehlevi → İİC)", **`f:"1925-10-31"`**. Madde ise 1381 tarihli, yani künye
  penceresinin 544 yıl öncesinde. Bu durum `§3.5`in künye aşımı ailesine girer: madde Pehlevi
  sekmesinde duruyor, ama olayın devleti o değil.
- KOSU 21 öncesinde bu çift SESSİZ kovasında değildi. KOSU 21'in motor çıktısında, o gün için `iran`
  sekmesinin gövdesi de tâbi kutusu da yok, bu yüzden kamera kıpırdamıyor. Gerileme o koşuda doğdu
  ve **kaydı vardı**: `14174ef7` mesajı *"denetle_yayin cikis 1 — … + 1 YENİ sekme gerilemesi
  (1381 … sekme iran); motor ciktisini durdurmaz"* diyor. O günden beri kapı 3 gündür ✗ veriyor ve
  yayın sürüyor. `kosu_yayin.py` ⑥ `uyari_kodu=True` bunu affediyor; KOSU-YAYIN-KAPI-1010 bunu kapattı.
- Aynı koşuda **8 SESSİZ çift KAPANDI**. Hepsi `macaristan` sekmesinde: 1657 · 1678 · 1720 · 1738 ·
  1831 · 1850 · 1854 · 1878. `§3.4-3` gereği bu çiftler tavandan düşmeli.
- **Öneri (veri sahibine):** önce SINIFLANDIRMA yapılmalı. Madde Timurlu/İlhanlı-ardılı bir künyenin
  kronolojisine taşınmalı, ya da sekme bağlaması çevrilmeli. Tavana yazmak affetmek olur ve `§9`a
  göre gerileme affedilmez.

### ② OKUNMAYAN — Gazneli 1026 · sekme `gazneli`
- Madde Z7 eklemesi. `yer_kon:[20.888,70.401]` yazılı, ama Somnat atlasta yerleşim değil ve sekme
  dalı `yer_kon`u okumuyor. Sonuç: "odak YAZILMIŞ, sekmede ETKİSİZ".
- Bu çift, UFUK 1000'e açılınca evrene girdi. `02f33728`den önce 1026 ufkun dışındaydı.
- `02f33728` sekme tavanını AYNI commit'te güncellemedi. Bu `§3.4-2` ihlalidir.
- ⚠️ ODAKSIZ kovasının bir "YENİ KAPSAM" kovası var, SEKME kovalarının yok. Ufuk genişlemesinin
  getirdiği her yeni çift bu yüzden GERİLEME diye ötüyor.
- **Öneri:** iki yol var. (a) Madde, sekmenin okuduğu bir odak alır. (b) Koordinatör çifti tavana
  ADIYLA ve "yeni kapsam" gerekçesiyle yazar. Yapısal çare: sekme kovalarına da YENİ KAPSAM ayrımı
  (`odak_olc.py`, sahibi başka).
- Tarihçe notu: `38cf24ae` (YIL-DOLGU) ile `f2e9548c` arasında OKUNMAYAN'da 2 yeni + 2 iyileşme
  görünüyordu (`900-01-01 Mapungubwe`, `981-01-01 Bạch Đằng`). Bunlar sıfır dolgulu tavan anahtarı
  ile dolgusuz ölçüm anahtarının ayrışmasıydı ve `02f33728`de kendiliğinden kapandı. Bugün açık değil.

### ③ PAKET — içerik kusuru yok, yalnız bayatlık (ölçüldü)
Altı paketin her farklı bölümü, **künyedeki sha ile birebir aynı**. Yani paket dosyası elle
bozulmamış, künyenin anlık görüntüsüdür. Kaynağa paketin son commit'inden sonra tam olarak
**bir commit** dokunmuş:

| Paket | Bayat kaynak | Kaynağa dokunan commit |
|---|---|---|
| paket_05 | `devletler.js` | `b3fd8874` |
| paket_12 | `kronoloji_anadolu.js` | `b3fd8874` |
| paket_13 | `yerlesimler.js` · `yerlesimler_asya.js` · `yerlesimler_ek3.js` | `e54e60df` |
| paket_14 | `yerlesimler_ek14.js` · `ek15` · `ek16` · `h2_kuzeyafrika` · `ek27` · `ek29` | `e54e60df` |
| paket_22 | `yerlesimler_ok107.js` | `e54e60df` |
| paket_23 | `yerlesimler_anadolu_0914.js` (13. kaynak; kapı listesinde "+1") | `e54e60df` |

Çare `py arac/paketle.py yenile`. Bu, iki inişin paket yenilemesini atlamasıdır; iniş adımına
eklenmeli.

### ④ Üretim izi
- `altlik.js` **gerçekten bayat**. `uret_petek.py` ve `motor_kara.geojson` izdeki sha'dan farklı
  (KOSU 21). Ucuz üretici olduğu için Emre'nin 1 Ekim hükmüyle durduruyor. Çare `uret_altlik.py`.
- `bekleyenler.js` için durum farklı: **CRLF YANLIŞ ALARMI**. `BEKLEYENLER.md`nin LF-sha'sı izdekiyle
  aynı (`45cc3d8a…`). `core.autocrlf=true` bir checkout'ta ham sha `94eb9cfd…` çıkıyor.
  `altlik`in 8 girdisinin 6'sı da aynı yüzden "değişmiş" görünüyor. Bunun sebebi `iz_kapsami`nin
  ham baytı hashlemesi. `paketle._duzle` bu dersi 6 Ekim'de almıştı.
  **Öneri (yazılmadı):** `iz_kapsami` LF-düzlenmiş sha ile kıyaslasın. Bunu bu diff'e koymadım,
  çünkü ihlal satırlarını değiştirir ve "GERİLEME 0" ölçütünü kirletirdi. Ayrı iş olmalı.

### ⑤ ODAK-KAPI-SINAV — iki kusur, ikisi de adıyla
- **Taban kırığı:** ① ve ②'deki aynı iki çift. Sınav çifti basmıyordu. **Kör olan kapı değil,
  sınavın süzgeciydi**: `odak_olc.kapi_olcumu` adı girintili satırda zaten veriyor (yayın kapısı
  çıktısında görünüyor), ama `ODAK-KAPI-SINAV.sina()` yalnız `✗` ile başlayan satırı basıyordu.
  Diff bunu düzeltiyor; ölçüldü, sınav artık çifti adıyla basıyor.
- **"odaksiz 373 ≠ odaksiz_kimlik 374" kusur DEĞİL.** Sınavın ① sorusunun KENDİ enjeksiyonu bu:
  `tv["odaksiz"] = tv["odaksiz"] - 1` yapılıyor, liste değişmiyor. Gerçek tavan tutarlı:
  `odaksiz 374 = len(odaksiz_kimlik) 374`.
  ⚠️ Yan not: ①'in başlığı "GERİLEME" diyor, ama tavan liste olduğundan beri sınanan şey gerileme
  değil, **sayı/liste TUTARSIZLIK** nöbetçisi. Başlığın sınav sahibince düzeltilmesi önerilir.

---

## AŞAMA 2 — DIFF: `denetim/YAYIN-KAPI-OLCULEMEDI-1010.diff`

743 satır, sha256 `032d9dd407c37efb…`. Dört dosya:

| Dosya | Değişiklik |
|---|---|
| `arac/denetle_yayin.py` | `OLCULEMEDI_KOVA` (adlı liste) + `olculemedi(ad, sebep)` · çıkış **2** · blok `🔴 ÖLÇÜLEMEYEN SORU: n` → `• ad sebep` → `SONUÇ:` (`denetle.py` biçimi) |
| `arac/durum_tablosu.py` | T3: `boya_gerekli` okunamazsa `renksiz_beyanli=None` (sessiz `[]` değil), tablo "ÖLÇÜLEMEDİ" der · denetle.py satırı bulunamazsa kovaya düşer · kova doluysa **çıkış 2** ve `--yaz` REDDEDİLİR |
| `denetim/ODAK-KAPI-SINAV.py` | ✗ başlığının altındaki ad satırları da basılır |
| `denetim/ARAC-YAYIN-KAPI-OLCULEMEDI-SINAV-1010.py` | YENİ: 14 soru, iki yönde |

### Kovaya ne girer
- **T1** `bayat_mi → None` → `yayın tazeliği`
- **T2** `git ls-files` düşer → `git izleme`. ✗ satırının yerine `! … ÖLÇÜLEMEDİ` gelir.
  "diskte VAR ve git'te izlenen: 83" yalanı artık basılmaz; yerine
  "diskte VAR: 83 (izlenip izlenmediği ÖLÇÜLEMEDİ)" yazılır.
- **T2 ailesi, yeni bulundu:** `damga_denetimi` git log düşünce "UYARI … ATLANDI" basıp
  `damga_ihlali=False` bırakıyordu. Artık `sürüm damgası artışı` kovaya düşer.
- **1101 (9 Ekim koruması)** şu durumda çalışır: index.html `paket_*.js` yüklüyor, paketle ise
  ya düşüyor ya da `kaynaklar()` boş dönüyor. O zaman `yetim veri dosyası` ölçülemedi sayılır;
  ~156 yanlış "✗ yetim" BASILMAZ ve o tur yetim hükme girmez. Paketsiz index.html'de boş evren
  meşru sayılır, kova boş kalır.
- **Var olan 8 nöbetçi** `except`i (DOM · bağlılık · dizinsiz · odak · kodlama · paket · ufuk ·
  sınama) fail-closed **1 olarak KALIR**, ayrıca kovaya ADIYLA yazılır. `odak_olc`un döndürdüğü
  `✗ … ÖLÇÜLEMEDİ` satırları da kovaya geçer.
- **Kovaya GİRMEYENLER (bilinçli):** `§40 çizilmiyor` (bilgi satırı) ve `iz_olculemedi`
  (Emre, 1 Ekim: bloke etmez). İkisi kendi satırında "ÖLÇÜLEMEDİ" basmaya devam eder.
  → **Koordinatöre soru:** `iz_olculemedi` de 2 olsun mu? Olursa her çıplak ağaç koşusu 2 verir.

### Sınav ve ısırma (ölçüldü)
`py arac/sinav_isirma.py --taban origin/main` (taban `5a37a3e1`, GERİDE 0). Araç
`SINAV-ISIRMA-1010.diff` ile kendi ağacıma uygulandı.
```
A (yamasız)  çıkış 1 · 4/14 · 20 sn      B (yamalı)  çıkış 0 · 14/14 · 19 sn
ISIRIYOR 10: T1 T1B T2 T2D P1 O1 N1 FMT AST2 DT3
TESADÜF-YA-DA-SORULMAMIŞ 4: K0 T2K AST1 DTK   ← dördü de SÜREKLİLİK sorusu (bilinçli)
İKİSİNDE-KALAN 0 · GERİLEME 0 · EŞLEŞMEDİ 0 · worktree ikisi de kaldırıldı
```
Öngörü sınav dosyasının başlığına ölçümden ÖNCE yazıldı ve **birebir tuttu**.
- **DT3, T3'ün tarama ile aynı sayısını gösteriyor:** yamasızda beyanlı/gerçek 5/11 → 0/16 oluyor
  ve sessiz kalıyor. Yamalıda `None`, kovada adı var.
- **FMT**, KOSU-YAYIN-KAPI-1010'un ayrıştırıcısının BİREBİR kopyasıyla sınanıyor:
  blok tek, `SONUÇ`tan hemen önce.

### Gerçek veri: yamalı ile yamasız aynı ihlal satırlarını veriyor (GERİLEME 0)
| Ağaç | Yamasız | Yamalı | Fark |
|---|---|---|---|
| çıplak `a24a4838` | çıkış 1 · 396 satır | çıkış 1 · 400 satır | **yalnız +4 satır**: `ÖLÇÜLEMEYEN SORU: 1 · yayın tazeliği · donemler.js YOK`. ✗/! satırları birebir aynı. |
| hazır `1d5e2dfd` | çıkış 1 | çıkış 1 | **bayt bayt AYNI**. Kova boş, çünkü hazır ağaçta tazelik ölçülebiliyor. |

⇒ Çıplak ağaçtaki tek "ölçülemedi" ortamdan geliyor; ağaç hazırlanınca kayboluyor ve yerine gerçek
hüküm geliyor (YAYIN BAYAT 2,89 gün). Kapının istenen davranışı da bu.

### Çıkış kodunu okuyanlar (tarandı)
| Okuyucu (origin/main) | 2'yi görünce | Durum |
|---|---|---|
| `arac/kos_ve_yayinla.py` `kos(olumcul=True)` | `!= 0` ⇒ zincir durur | **fail-closed, kırılmaz**. Bloğu basmaz (KOSU-YAYIN diff'i basıyor). |
| `arac/kosu_yayin.py` ⑥ `uyari_kodu=True` | **2'yi "çıkış 1 verdi — BİLİNEN BORÇ" diye affeder, zincir SÜRER** | **origin/main'de fail-open**. KOSU-YAYIN-KAPI-1010 (`makine/umit 700bebd9`) düzeltiyor: 2 her zaman durur, blok adıyla basılır. Biçim FMT ile uyumlu. Onların dosyalarına dokunmadım. |
| `denetim/SINAV-KOSU8-KAPI-0907.py` | `main()` içinde `return 1` sayısı == 1 | korundu (AST1) |
| `denetim/ARAC-KAYNAK-DURUM-SINAMA-SINAV-1006.py` Y6 | son ret if'inde `_kapi_ihlali` | korundu (AST1) |
| `denetim/ARAC-STDOUT-A-SINAV-1010.py` | üç kipte rc EŞİTLİĞİ | koddan bağımsız, kırılmaz |
| `arac/denetle_bosluk.py:435` `bayat_mi()[3]` | imza değişmedi (None hâlâ falsy) | kırılmaz |
| `arac/kaynak_durum.py` `kosu_kapisi` | `ARAC-MOTOR-ENV-KAPI-1006`yı koşturur, denetle_yayin'i değil | ilgisiz |
| `arac/_yayin_zinciri.py` · `SINAV-KOSU8-KOS-0907` · `TOPLU-SINAV` · `ARAC-ODAK-KAPAT-UYGULA-1001` | denetle_yayin'i koşturmuyorlar (yalnız anıyorlar) | ilgisiz |
| `durum_tablosu.py` çıkış kodunu okuyan | **bulunamadı** (arac/ + denetim/ tarandı) | yeni 2 kimseyi kırmaz |

## Bulunamayan / ölçülmeyen
- Timur 1381 için KOSU 21 öncesindeki sınıf (GÖVDE mi, TÂBİ_KUTU mu) ölçülmedi. Yalnız "SESSİZ
  değildi" ölçüldü. Gövdenin hangi motor değişikliğiyle kaybolduğu da ölçülmedi
  (UFUK-BANT mı, veri mi). Bulmak için iki koşunun `devlet_harita_ust` çözümü gerekir.
- `durum_tablosu.py`nin `__main__` dalı (çıkış 2 ve `--yaz` reddi) sınavda koşturulmadı: `olc()`
  `denetle.py`yi koşturuyor (~15 dk). Kova mantığı DT3'te sınandı. Ret dalı kod okumasıdır.
- `iz_kapsami` CRLF yanlış alarmı yazılmadı (④).

## Dosyalar
- `denetim/YAYIN-KAPI-OLCULEMEDI-1010.diff`
- `denetim/YAYIN-KAPI-OLCULEMEDI-1010.md` (bu dosya)
- `denetim/ARAC-YAYIN-KAPI-OLCULEMEDI-SINAV-1010.py` (diff'teki ile aynı)
