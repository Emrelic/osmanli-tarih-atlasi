# KRONOLOJI-COK-PAKET-1006 — COK + odak + başlık + Kırım-A (UMIT-W37, 2. teslim)

Temel commit: **origin/main `481b0482`** (iş burada yapıldı). Bütün zincir **`ce885ec2`** üstünde de sırayla
`--check` ✓ ve sonuç birebir (`cmp`: app.js · odak_cozum.js · iki veri dosyası).
Ağaç: `C:\atlas-w37e` (atılabilir).

## Uygulama sırası (her diff ayrı dosya, `denetim/`)
| # | diff | dokunduğu | durum |
|---|---|---|---|
| 1 | `KRONO-EZILDI-1006.diff` | app.js | W26 (mevcut) |
| 2 | `KRONO-EZILDI-1006b.diff` | app.js | W26 (mevcut) |
| 3 | `KRONOLOJI-COK-1006.diff` | app.js | commitli `17b202a6` |
| 4 | **`KRONOLOJI-COK-1006b.diff`** | app.js | YENİ: yönlenen her dosya adıyla basılıyor |
| 5 | **`APP-KISI-BASLIK-1006.diff`** | app.js | YENİ ④ |
| 6 | **`KIRIM-ODAK-A-1006.diff`** | app.js + arac/odak_cozum.js | YENİ ⑤, rapor `KIRIM-ODAK-A-1006.md` |
| — | **`KRONOLOJI-COK-ODAK-1006.diff`** | 7 `data/kronoloji_*.js` | YENİ ①, app.js zincirinden bağımsız |

## 🔴 0. Önce bir düzeltme — önceki raporumda YANLIŞ bir cümle vardı
`KRONOLOJI-COK-1006.md §6`da "224 madde künye sekmesinde tıklanınca kamera Osmanlı kutusuna uçar" yazdım. **Kod
okununca yarısı yanlış çıktı.** İki ayrı kamera yolu var:
- **(a) devlet SEKMESİ** (`maddeAc`): `kapsam_genis` + odak yok ⇒ `devletiYay(d.harita)` = o künyenin KENDİ gövdesi.
  Osmanlı'ya UÇMAZ. Gövde yoksa (Kırım vakası) SESSİZ döner.
- **(b) devlet ODAĞI kipi** (`odakKur`, kronoloji listesi künyenin kronolojisi olur) ve öteki listeler →
  `olayaGit` → `haritayiOlayaGotur` ⇒ Osmanlı kutusuna UÇAR. `odak_olc`un BEYANLI→yabancı sayısı bu yolu ölçer.

⇒ 224 maddenin Osmanlı'ya uçması gerçek, ama yalnız (b) yolunda. Hükmü değiştirmiyor (§9: (b) odaksızlıktan kötü),
yerini düzeltiyor.

## ① 224 BEYANLI→yabancı → `KRONOLOJI-COK-ODAK-1006.diff`
- **Kaynak:** her maddeye `odak_kimlik` = maddenin KENDİ `taraflar`ı (yazarın yazdığı alan, pencere içi).
  - Yeni coğrafî iddia YOK, vekil şehir YOK (D257).
  - Kamera, (a) yolunun zaten gösterdiği şeyi (künyenin toprağı) (b) yolunda da gösterir.
  - `kapsam_genis:true` yerinde kalır; beyan doğru, değişen yalnız kamera (app.js'in `odak_yer` yorumundaki ilke).
- **Ölçüm (`odak_olc.py`, gerçek kapı aleti):**
  - BEYANLI→yabancı **653 → 563 (−90)**
  - KUTULU **477 → 567 (+90)**
  - çözülmeyen odak **1 → 1** (yalnız bilinen Ogaden)
  - ODAKSIZ **769 → 769**
- **224'ün dökümü** (`KRONOLOJI-COK-ODAK-1006.tsv`, madde başına):

| dosya | YAZILDI | ÇÖZÜLMEDİ (≥2 yerleşim yok) | ODAK-ASYA'ya bırakıldı | TARAFSIZ |
|---|---|---|---|---|
| anadolu | 38 | 25 | 0 | 7 |
| arabistan | 6 | 2 | 0 | 5 |
| balkan | 30 | 26 | 0 | 24 |
| cin | 0 | 0 | 25 | 0 |
| dogu_afrika | 7 | 2 | 0 | 0 |
| guney_asya | 0 | 0 | 1 | 0 |
| hindistan | 0 | 0 | 7 | 2 |
| iran_ardillari | 4 | 0 | 0 | 0 |
| japonya | 0 | 0 | 6 | 0 |
| kuzeyafrika | 3 | 0 | 0 | 2 |
| misir | 2 | 0 | 0 | 0 |
| **toplam** | **90** | **55** | **39** | **40** |

- **ÇÖZÜLMEDİ 55:** yazılsaydı her biri KIRIK ATIF olurdu ve kapı 0 toleransla öterdi. İlk denemede yazıldı, ölçüldü,
  geri alındı.
  - 17'si 1281 öncesi: selcuklu 6 · kilikya-ermeni 9 · karaman 1 · bulgar-carligi 1.
  - Kalanlar: karadag 19 · zeta 6 · dulkadir 5 · aydin 2 · karaman 2 · yemen-zeydi 2 · evfat 2. O gün o künyenin
    haritada <2 yerleşimi var.
  - ⇒ Çare veri değil yerleşim yoğunluğu (§6).
- **ODAK-ASYA'ya bırakıldı 39** (41 örtüşmenin 2'si tarafsız):
  - 24'ünde ODAK-ASYA zaten AYNI `odak_kimlik`i öneriyor (sınıf C).
  - 15'inde FARKLI ve daha özgül öneriyor (B: `odak_yer` şehirleri / komşu `odak_kimlik`). Örnekler: Zheng He 1414
    → Hürmüz/Mekke/Mogadişu/Malindi · Ming–Vietnam 1406 → `ho-hanedani` · Boksör 1899 → Jinan/Yantai.
  - Talimat gereği DOKUNULMADI. B sınıfı D257 süzmesinden geçmeli (W36).
- **UMIT'in 4 aynı-olay maddesi** (Aigun 1858 · Ubeydullah 1538 · Ebulgazi 1645 · Melik Ahmed Handeş 1370): hiçbiri
  bu diff'te YOK. Diff yalnız 7 dosyaya dokunuyor, cin/ozbek/hindistan aralarında değil. Melik Ahmed (ODAKSIZ)
  için odak YAZILMADI ⇒ Asîrgarh/Burhânpûr ile çelişki doğmadı.
- **COK ile görünür hale gelen ve hâlâ Osmanlı'ya uçan:** 94 = 55 çözülmedi + 39 ODAK-ASYA. 40 tarafsız zaten hiçbir
  künyeye inmiyor.

## ② COK — `KRONOLOJI-COK-1006b.diff` (teyit istenen nokta)
- **Teyit:** 1006 sürümünde yönlendirilen dosyalar YALNIZ "eşlenemedi … çok taraflı yola" uyarısında adıyla
  geçiyordu; kaçının indiği basılmıyordu ⇒ EKLENDİ.
- 0 inen dosya da basılır. Örnek satır: `Atlas: çok taraflı yola yönlenen 15 dosya — KRONOLOJI_CIN 124/136 indi, …,
  KRONOLOJI_SIRBISTAN 15/35 indi`.
- Konsolun kendi sayısı, harici nesne kimliği ölçümüyle (`ARAC-KRONOLOJI-COK-1006-OLC.js`) **15/15 dosyada birebir**:
  1.680 madde.
- Sınavlar: `ARAC-KRONOLOJI-COK-1006-SINAV.js` 15/15 (zincirin sonunda da).

### "Osmanlı künyesiz" — ölçüm hatası mı? HAYIR, tasarım
- `DEVLETLER`de `id:"osmanli"` YOK; id + ad taraması yalnız `misir-eyaleti` · `sirbistan-eyaleti` ·
  `bosna-eyaleti` · `arnavutluk-osmanli` buldu.
- Ama `osmanli` app.js'te ÖZEL kimlik:
  - renk `app.js:8180` · ad `:8666` · `d:` doğrudan idare `:1001`;
  - künyelerde `tabi:[{ust:"osmanli"}]` (8+ kayıt).
- Osmanlı'nın kronolojisi künye değil ÇEKİRDEK (`OLAYLAR`).
- ⇒ "künyesiz" doğru ölçüm, sebebi kusur değil mimari.
- Sonucu: COK ekleyicisi `taraflar`daki `osmanli`yı "künyesi olmayan taraf — osmanli (15)" diye zaten sayıyor
  (bugün de). Bu maddeler Osmanlı'ya ait ama Osmanlı sekmesi yok, çekirdek kronolojiye de girmiyorlar.
  Çekirdeğe almak Değişmez 2 evrenini büyütür ⇒ kapsam kararı Emre'de.

## ③ 113 ODAKSIZ → `bilinen_kusur` — ⚠️ YAZILMADI, itiraz
- Ölçüldü: `bilinen_kusur` yalnız KIRIK ATIF istisnasıdır. `odak_olc.py:200-203` girdileri `(dosya,t,alan,deger)`
  ile `kusur` listesine eşler.
- ODAKSIZ maddenin `alan`/`deger`i yoktur, `kusur`a hiç düşmez. Sonuç:
  - 113 girdi hiçbir şeyi beyan etmez;
  - kapı her koşuda "beyanlı borç KAPANDI: 113 — tavandan düşürülmeli" diye **yalan sinyal** basar (`:220`).
  - Bu, `CLAUDE.md §3.4 ⑤` ölü istisnadır.
- Ve gerek de yok: 15 dosyanın 15'i ODAK-TAVAN `evren`inde (ölçüldü, eksik 0). 113 ODAKSIZ zaten **sayı tavanının
  içinde, beyanlı borç**; gerilerse kapı öter.
- Liste adıyla isteniyorsa: madde madde döküm `odak_olc.py --ayrinti` ile alınır, ya da `bilinen_odaksiz` gibi ayrı
  bir alan + `odak_olc.py` tüketicisi gerekir. `arac/odak_olc.py` benim kilidimde değil ⇒ karar koordinatörde.

## ④ `APP-KISI-BASLIK-1006.diff`
- **K3 başlığı:** "Vâlide sultanlar ve hanedan kadınları" → **"Hanedan üyeleri ve vâlide sultanlar"**. Veriye
  uyduruldu (D207); `kisiler.js`e dokunulmadı.
- **Kişiler sekmesi:** `kisiGruplari()` eklendi.
  - Tanınmayan `tur` HAM adıyla kendi başlığında, türsüz kayıt "(tür belirtilmemiş)" başlığında gösteriliyor.
  - İkisi de konsola SAYILARAK basılıyor (D225). Devlet dizinindeki `digerTurler` kalıbının aynısı.
- **Sınav** `ARAC-APP-KISI-BASLIK-1006-SINAV.js <app.js> [kisiler.js]`, gerçek `dizinDoldur` sahte DOM'da:
  - **sonra 8/8 · önce 2/8.**
  - Gerçek `kisiler.js`: 288/288 kayıt sekmede, bugün uyarı 0.

## ⑤ `KIRIM-ODAK-A-1006.diff` — ayrıntı `KIRIM-ODAK-A-1006.md`
- Öngörü önce: A, BEYANLI→yabancı'yı DEĞİŞTİRMEZ → **563 → 563 ✓**, Kırım 15 → 15.
- Sekme dalında Kırım SESSİZ 12 → **0** ✓ (TABI_KUTU 12).
- Bütün sekmelerde SESSİZ 130 → **116**. "Yarıdan az" öngörüm ✗; künyelerin çoğunun o gün hiç yerleşimi yok.
- `odak_cozum.js` aynı dalı soruyor (`sekme` alanı).
- Sınav 7/7 · önce 0/4.
- ⇒ "A düşük çıkarsa ikisi birlikte iner" şartı A için geçersiz. BEYANLI→yabancı'yı yalnız B (veri) indirir.

## Yayın kapısı — `denetle_yayin.py`, bütün paket uygulanmış ağaçta
**Odak:**
- `yeni çözülmeyen odak atfı: 0` ✓ (bilinen borç 1)
- `ODAKSIZ 438 (tavan 438)` ✓
- `BEYANLI→yabancı 563 (tavan 655 — 92 İYİLEŞME, tavan indirilmeli)` ✓

**🔴 TAVAN ÖNERİSİ (§3.4 ②④ — koordinatör yazar):** `ODAK-TAVAN.json` `beyanli_yabanci` 655 → **563**, COK-ODAK veri
diff'iyle AYNI commit'te.
- 92 = bu paketin 90'ı + main'de zaten olan 2 iyileşme (çıplak main 653).
- Yazmadan hemen önce yeniden ölçülmeli (§3.4 ⓪).

**Ad alanı / adı yanıltan dosya:** TEMİZ (2 önceden var olan uyarı).

**KAPI HÜKMÜ: çıkış 1** (alt satırdaki "SONUÇ: TEMİZ" yalnız ad alanı alt kapısına ait). ✗ satırları ve sebepleri:
- damga artışı / çalışma ağacı: app.js değişti, damga r11374. `surum_damgala.py` commit'ten önce, paketleyicinin işi.
  Her app.js değişikliğinde beklenir.
- üretim izi BAYAT (altlik.js · bekleyenler.js) + `donemler.js YOK`: üretilen dosyalar. Bu paket hiçbirine
  dokunmadı. Çıplak main'de ayrıca koşturulmadı, o yüzden "önceden de vardı" hükmü ÖLÇÜLMEDİ.

## Dokunulmayanlar
- motor tuzu (4 dosya)
- `arac/odak_olc.py` · `ODAK-TAVAN.json`
- 0929 UYGULA · `kisiler.js`
- ODAK-ASYA'nın 39 maddesi
