# UMIT-W57 Z8 — W39d'nin ÜSTÜNE yeniden temellendi (karar a)

Görev UMIT İRTİBAT'tan geldi: W39d (`c47120d8`) yerinde kalıyor, Z8 onun üstüne. **UYGULANMADI**, commit yok.

| | |
|---|---|
| taban | `cdc1ccea` (bugünkü `origin/makine/umit`) |
| ilk üretim | `1d83f4f1`; iki uç arasında 11 veri dosyası değişti |
| yeniden ölçüm | tavan yeni uçta yeniden üretildi, `cmp` ile **bayt bayt AYNI** |

## Teslim
- **`denetim/ODAK-Z8-KIMLIK-1006.diff`** — TEK diff seti; kod + sınav + **tavan aynı dosyada** (şart 3).
  - 7 dosya, +5936 −524. CR 0.
  - `cdc1ccea` üstünde: `apply --check` ✓ · uygulanmış ağaç `write-tree` EŞİT · `-R` ✓.
- **`denetim/ODAK-Z8-GECIS-1006.tsv`** — GEÇİŞ dosyası (şart 1), 4621 satır, kimlik kimlik.
  - Sütunlar: kova · yön (ÇIKTI/GİRDİ) · kimlik · künye/alan · eski dosya · yeni yol · yeni sınıf · yeni dal · yeni dosya · neden.
- Bu rapor.

| diffteki dosya | ne |
|---|---|
| `arac/odak_cozum.js` | W13 mimarisi (tarayıcı evreni · `AD_KONUM` · `sekmeDali` · KIRIM-A katıldı · kıstırma · `yay_dogrula`) **+ W39d'nin `kimlik()`/`ozet8()`'i**. Kimlik, evren özeti, beyanlı (yol ile), SESSİZ/OKUNMAYAN çifti, `sekme_kutu` (E1b adayı) dökümde. |
| `arac/odak_olc.py` | W39d kapısı **AYNEN** (kimlik listesi, sağlama, ODAKSIZ/YENİ KAPSAM/TAŞINDI, SESSİZ, ÇEKİRDEĞE GÖÇ, iki kilitli `--tavan-yaz`) + W13 `olc()`/`ozetle()`/tablolar + **SEKME OKUNMAYAN kimlik kapısı** (SESSİZ ile aynı desen) + D265 satırı. Yabancı/çekirdek ayrımı artık dosya adından değil YOLDAN. |
| `denetim/ODAK-TAVAN.json` | yeni tavan (W39d biçimi; `evren` 152 dosya AYNEN) |
| `denetim/ODAK-KAPI-SINAV.py` | geçici köke `index.html` + `js/` + `data/` hardlink. W39d'nin +3 satırı korundu. |
| `denetim/ODAK-KAPI-KIMLIK-SINAV-1006.py` | aynı kök + göçmen dosya düzeltmesi + sentetik beyanlı kusur (§4) |
| `denetim/ARAC-ODAK-SEKME-SINAV-1006.py` | W13 sınavı; tavana SAYI yazmıyor, canlı kimlik tavanıyla karşılaştırıyor |
| `denetim/ARAC-ODAK-Z8-GECIS-1006.py` | tavanı ELLE kuran + geçişi yazan araç (`--tavan-yaz` DEĞİL) |

## 1. GEÇİŞ — hangi kimlik nereye (şart 1)
`py denetim/ARAC-ODAK-Z8-GECIS-1006.py --eski <W39d tavanı> --tavan <yol> --gecis <yol>`

| kova | W39d | Z8 | çıkan | giren |
|---|---|---|---|---|
| ODAKSIZ (evren içi) | 401 | **374** | 27 | 0 |
| YENİ KAPSAM | 331 | **3358** | 0 | 3027 |
| BEYANLI→yabancı | 426 | **312** | 114 | 0 |
| BEYANLI çekirdek | 14 | 14 | 0 | 0 |
| SEKME SESSİZ | 97 çift | **53** | 44 | 0 |
| SEKME OKUNMAYAN | — | **1408** | — | 1408 (yeni alan) |
| bilinen kusur | 1 | **0** | 1 (Ogaden) | 0 |

### "Evren büyürken düşüş şüpheli" — açıklama
Evren büyüdü, ama büyüyen kısım evren DIŞI kovaya (YENİ KAPSAM) düştü. Evren İÇİNDEN çıkanların hepsi adıyla açıklandı; hiçbiri "kayboldu" değil.

**ODAKSIZ 401 → 374 (−27):**
- **24 AÇILAMAZ.** Künyesiz `KRONOLOJI_*` dosyalarında duruyorlar (sırbistan 10 · orta_asya 5 · dogu_afrika 2 · …). Tarayıcıda hiçbir ekranda açılmıyorlar; eski disk ölçüsü onları sayıyordu.
- **2 KONUMLU.** Biri Ogaden: `AD_KONUM` çözüyor.
- **1 YENİ KAPSAM'a geçti.** Tarayıcının gösterdiği kopya `devletler.js`'teki, o dosya evren dışı.
- Evren içine GİREN odaksız kimlik: **0**.

**BEYANLI→yabancı 426 → 312 (−114):**
- **37 AÇILAMAZ.**
- **1 KONUMLU.**
- 🔴 **76 → ODAKSIZ.** 74'ü `kronoloji_sinir_guney_g8.js`, 2'si `kronoloji_balkan.js`.
  - Aynı t+b `devletler.js`'teki künye-içi kronolojide DE var. Tarayıcı İLK yükleneni bağlıyor; çok taraflı ekleyici t+b ikizini EKLEMİYOR.
  - Ekranda görünen kopyada `kapsam_genis` YOK. Dosyaya yazılmış beyan **ekrana hiç çıkmıyor**.
  - Bu bir veri bulgusu, alet kusuru değil: kronoloji sahibine. Sınıf: "beyan yanlış kopyada".

**SEKME SESSİZ 97 → 53 (−44):**
- **27 → GOVDE.** Sebep app.js'teki 1281–1923 kıstırması. W39d (KIRIM-A ölçüsü) kıstırmıyordu ⇒ 1281 öncesi madde "gövde yok" sayılıyordu, oysa app.js 1281'in gövdesine bakıyor. Yanlış kirliydi.
  - Künyeler: kilikya-ermeni 9 · selcuklu 6 · …
- **17 → KIPIRDAMAZ.** Görünen kopya `devletler.js`'te, `kapsam_genis` yok (76'yla aynı sınıf).
- Kalan 53'ün **53'ü de** eski 97'nin içinde, aynı künyeyle. Yeni giren çift 0.
- Ölçü farkı: W39d madde × künye (dosya adıyla bağlama) sayıyordu. Z8 tekil sayıyor: tarayıcının bağladığı İLK künye.

**YENİ KAPSAM 331 → 3358 (+3027):**
- **3027 = `devletler.js` künye-içi kronoloji.** Eski disk evreni bunu HİÇ görmüyordu (W13 O3). Hepsi odaksız (`devletler.js` %100).
- Diğer 8 dosya aynen duruyor: once1281 ×6 · ince ×2 = 331.

## 2. Commit'ten HEMEN ÖNCE yeniden ölç (şart 2)
Ölçümü `cdc1ccea`'da yeniden koşturdum; tavan bayt bayt aynı çıktı. Uygulamadan önce bir kez daha:

```
git show HEAD:denetim/ODAK-TAVAN.json > eski.json        # diff uygulanmadan ÖNCE
git apply denetim/ODAK-Z8-KIMLIK-1006.diff
py denetim/ARAC-ODAK-Z8-GECIS-1006.py --eski eski.json --tavan yeni.json --gecis g.tsv
cmp yeni.json denetim/ODAK-TAVAN.json                     # (satır sonu farkı: tr -d '\r')
```

Bugün: **sekme_okunmayan 1408 · sekme_sessiz 53**.

**1408'in ne olduğu, tek cümle:** devlet sekmesinde açılan ve odak alanı (`odak_yer` / `odak_kimlik` / `odak_kutu_kaynak`) ya da `yer_kon` YAZILMIŞ 1408 madde; app.js `maddeAc` bu alanları okumadığı ya da ham `m` ile çözemediği için yazılan odak kamerayı hiç etkilemiyor.
- 1303'ünde `kapsam_genis` yok, kamera hiç kıpırdamıyor.
- 105'i gövdeye ya da tâbi kutusuna gidiyor.

## 3. Ogaden kapanışı (şart 4)
`bilinen_kusur` → `[]`. Geçiş satırı:

```
bilinen_kusur  ÇIKTI  1897-01-01|Somali-Habeşistan sınırını çizme teşebbüsü  yer_id=Ogaden
               → SEKME / KONUMLU / SEKME_NOKTA / kronoloji_dogu_afrika.js · kusur listesi []
```

- **Neden kapandı:** `Ogaden`, `data/yerlesimler.js`te `tur:"bolge"` kaydı. d/v/s taşımadığı için ESKİ aracın kendi kurduğu `SEHIR` havuzundan düşüyordu.
- app.js ise kamerayı 27 Eylül'den beri ayrı `AD_KONUM` havuzundan çözüyor (`app.js` "ODAK-MEKANIZMA-0080" yorumu: *"119'u tur:"bolge" — Ogaden, Tibesti …"*).
- Z8'in çözücüsü app.js'in GERÇEK `adKonumBul`unu kesip çağırıyor ⇒ Ogaden çözülüyor ve madde NOKTA'ya uçuyor.
- Kusur veride değil eski ölçüdeydi (yanlış kirli). W13 O2.

## 4. Sınavlar — iki yönde, `cdc1ccea` + diff
| sınav | sonuç |
|---|---|
| `ARAC-ODAK-SEKME-SINAV-1006.py` (W13 + Kırım A1/A2) | **28/0** |
| `ODAK-KAPI-KIMLIK-SINAV-1006.py` (W39d E1–E9) | **14/14, atlanan 0** |
| `ODAK-KAPI-SINAV.py` | **5/0** |
| `ARAC-KRONO-BAGLAMA-KAPI-SINAV-1006.py` (dokunulmadı) | **5/5** |
| `odak_olc.py --yay-dogrula` | 344/73 · geometri-boş 0 · uyuşmazlık 0 |
| `kapi_olcumu()` | ihlal **False**, ✗ 0 |

W39d sınavında yaptığım üç değişiklik (hepsi sınav metninde yazılı):
1. **Geçici kök tarayıcı evrenini taşıyor.**
2. **GÖÇMEN dosya:** eski hâli YENİ bir dosyaydı (`kronoloji_zz_sinav_1006.js`). index.html yüklemediği için tarayıcıda madde **göç etmiyor, kayboluyor**. Yerine yüklenen ama evren dışında kalan `kronoloji_cok_1923_1945.js` kullanılıyor; taşınan maddeye kaynağının künyesi `taraflar` olarak veriliyor.
   - E7'de adayın kendi künyesi `iran` iken kapı ötmedi. Sebep **ölçülmedi**; hipotez: `KRONOLOJI_IRAN` künyeyi `derinKronolojiBindir` ile eziyor. ODAKSIZ adayının künyesi kullanılınca ötüyor.
3. **`bilinen_kusur` boş ⇒ E4/E9 ölçemezdi.** Geçici kökte SENTETİK bir beyanlı kusur kuruluyor: OLAYLAR yolundaki tavan-odaksız maddeye çözülmeyen `odak_yer` yazılıp beyan ediliyor.

`ODAK-KAPI-SINAV` ①, kimlik tavanında artık "tavan TUTARSIZ" ile ötüyor (W39d'de de öyle). Sayı-gerilemesini değil sayı/liste sağlamasını sınıyor.

## 5. Bulamadım / açık
- **SEKME_OLCULEMEDI'nin gerçek koşulda sınavı YOK.** `DEVLET_HARITA`yı evrenden çıkarmak `data/` ya da `index.html`e dokunmayı gerektiriyor. Kapı dalı var; bugünkü değer 0.
- **Tavan 818 KB** (W39d 242 KB). Büyüklüğü OKUNMAYAN 1408 çift, YENİ KAPSAM 3358 kimlik ve evren özeti getiriyor. Satır başına tek nesne; diff okunur.
- **76 + 17 "beyan yanlış kopyada" maddesi** veri işi (kronoloji_sinir_guney_g8 · balkan sahipleri). Ben dokunmadım.
- `CLAUDE.md §9` odak paragrafı ("ODAKSIZ 485 · BEYANLI 669", "kamera OSMANLI sınırına uçar") bayat. Kök md koordinatörün dosyası, diff yazmadım.
