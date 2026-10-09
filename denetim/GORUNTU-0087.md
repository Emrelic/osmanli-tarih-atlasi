# GORUNTU-0087 — paket 0087 görüntü maddeleri (H-0014 · H-0015 · H-0019 · H-0022)

Oturum: GORUNTU-0087 (UMIT) · görevi veren UMIT İRTİBAT · ağaç `C:\atlas-goruntu` = `origin/main`
`6865cc87` · commit/push yok · veri değişikliği yalnız DIFF (UYGULANMADI).

**Açılan görseller** (gizli depo `parti-emrelic-0087`, kopyalanmadı): `H-0014-1.png` · `H-0015-1.png` ·
`H-0015-2.png` · `H-0015-3.png` · `H-0019-1.png` · `H-0022-1.png`. Görsellerde zaman çubuğu yok; yer
etiketlerden okundu (Tulmeyse · Derne · Ayn el-Ğazâle (Bomba) · "İSPANYA" · Herseknovi · "VENEDİK"), gün
paket sırasından (H-0013 Rodos 1522 → H-0021 1523-01-05) ve İspanya boyasının penceresinden (Derne
`s:ispanya` 1510-07-25 → 1530-03-24) daraltıldı. Yeniden üretim: **1523-01-05**, headless Chrome, gerçek
`index.html` (`denetim/ARAC-GORUNTU-0087.js`). Dört görselin dördü de bu günde BİREBİR çıktı
(`SINAV-GORUNTU-0087-berka-1523-01-05-z6.png`, `…-boka-1523-01-05-z8.png`).

## 1. HÜKÜM

| madde | ne | sınıf | çare |
|---|---|---|---|
| **H-0015** Berka sahiplikleri | 1523'te Berka'da dört ayrı statü yan yana: Tulmeyse + Bomba **Osmanlı** (1517-05-19'dan) · Derne **İspanya** (1510-1530, sonra şövalyeler) · Bingazi, Merc, Beyzâ, Tobruk, Ecdâbiye **SAHİPSİZ** (1551'e dek hiç dönem yok) · Câlû **Kanem-Bornu** | **veri — KAYNAK ÇELİŞKİSİ** (üç TDV maddesi üç ayrı şey söylüyor, her nokta başka bir maddeden yazılmış) | karar gerekli (§3) — diff YAZILMADI |
| **H-0014** sivri kama | Osmanlı gövdesinin güneybatıya uzanan keskin kaması; ölçülen pikselde (22,005 D / 29,866 K) **`osmanli-dolgu` ile Kanem-Bornu `devlet-dolgu` ÜST ÜSTE** | **motor geometrisi** (gövde çakışması — `donemler.js`/`devletler_harita.js`) · tetikleyen **veri** (H-0015'in yamalı sahipliği) | koşu ister; kök çare H-0015 kararı |
| **H-0022** sivri / bulanık dişler | iki ayrı şey: ① bulanık koyu dişler = **`serbest-hale` / `serbest-cekirdek`** katmanı (sahipsiz alana komşu sınırın "sönen kenar"ı, `u` = parça uzunluğu 46-149 km) ② düz kenarlı keskin kama = H-0014'ün aynısı | ① **arayüz** (tasarım gereği belirsizlik hâlesi; dişler sahipsiz komşudan doğuyor) ② motor | ikisi de H-0015 kararıyla ortadan kalkar: sahipsiz komşu kalmazsa serbest kenar da kama da oluşmaz |
| **H-0019** sarı toprak | **Kotor (Cattaro)** peteği — `s:venedik` 1420-01-01 → 1797-10-17. Ölçüldü: o noktada `devlet-dolgu {id:"venedik"}`. Nokta var, ama **işareti çizilmiyor** (`ekli:false`) | **arayüz** (etiket seçimi) — tetikleyen **veri** (`g:0`) | `GORUNTU-0087-KOORD.diff`: Kotor `g:0 → g:1` (ölçüldü: işaret ÇİZİLİYOR) |

## 2. ÖLÇÜM

### H-0019 — Kotor
```
1523-01-05 · z8,5 · queryRenderedFeatures
  Kotor (18,768 D / 42,421 K)      devlet-dolgu {renk:#fcfc06, id:"venedik"}   ← sarı toprak
  sarı kamanın kuzeyi             osmanli-dolgu + bolge {ad:"Saraybosna"}
  Herceg Novi                      osmanli-dolgu + bolge {ad:"Saraybosna"}
işaret durumu (app.js `sehirler` dizisi, kendi nesneleri)
                  ÖNCE (g:0)                      SONRA (g:1, diff uygulanmış)
  Kotor           gecici:true · ekli:false        gecici:false · ekli:true · ekranda ✓
  Herseknovi      ekli:true                       ekli:true
  Cetinje         ekli:true · ekranda ✓           ekli:false   ← 🔴 BEDEL (ters yön, D206)
```
- Kotor `g:0` ⇒ app.js'te "geçici" işaret: adını yalnız el değiştirdiği pencerede gösterir; son değişimi
  1420 olduğu için 1523'te **hiç** görünmüyor. Bölge sarı boyalı, adı yok ⇒ "hangi şehrin bölgesi?".
- `g:1` ile Kotor kalıcı işaret olur — ama etiket çakışma elemesinde **Cetinje'yi** ekrandan itiyor
  (Cetinje 1523'te `v:zeta` penceresi dışında, kendisi de geçici). Kotor 1420-1797 Venedik'in Arnavutluk
  kıyısındaki ana limanı; Cetinje o yıllarda küçük bir yer. Öneri g:1, bedel açıkça bildirildi.
- Motor `g`'yi okumuyor (araştırılan `uret_petek.py`/`girdi.py`/`denetle.py`'de yerleşim `g` okuması
  bulunmadı) ⇒ **koşu gerekmez**, yalnız `py arac/paketle.py yenile` (paket_13).

### H-0014 / H-0022 — Berka (1523-01-05, z6,3, piksel sorgusu)
```
nokta                       katmanlar
22,84 D 31,01 K             serbest-hale{u:46.3} · osmanli-dolgu        ← bulanık diş
23,64 D 31,34 K             serbest-hale{u:46.3} · osmanli-dolgu
22,53 D 30,67 K             serbest-hale{u:149.3,115.2} · osmanli-dolgu
22,14 D 30,33 K             serbest-hale · osmanli-dolgu · devlet-dolgu{kanem-bornu}   ← ÇAKIŞMA
22,01 D 29,87 K             osmanli-dolgu · devlet-dolgu{kanem-bornu}                  ← ÇAKIŞMA (kama ucu)
21,52 D 31,84 K / 20,89 D 32,25 K   (boş — sahipsiz, boyanmıyor)
Derne                       devlet-cizgi{ispanya}
```
1523-01-05'te bölgedeki noktaların sahibi (`girdi.yukle`): Osmanlı = Tulmeyse · Bomba · Sellûm · Sîva ·
İspanya = Derne · Kanem-Bornu = Câlû · Merâde · Zilla · Hafsî = Nûfiliye · **SAHİPSİZ = Bingazi · Merc ·
Beyzâ · Tobruk · Ecdâbiye · Serîr · Serîr Kalanşû · Tâzirbû · Rebyâne · Kufra** (Cağbûb `kur:1856`).
⇒ Osmanlı peteklerinin (Tulmeyse, Bomba) komşularının çoğu sahipsiz: sahipsiz petek boyanmadığı için
Osmanlı peteklerinin Voronoi kenarları ÇIPLAK kalıyor (düz çizgiler + sivri köşeler), her sahipsiz kenara
bir serbest hâle çiziliyor (bulanık dişler), ve Osmanlı gövdesi Kanem-Bornu (Câlû) gövdesinin üstüne
biniyor (kama). `CLAUDE.md §2`: *"o bölgede yerleşim noktası var mı?"* — var, ama sahibi yok.

## 3. H-0015 — KAYNAK ÇELİŞKİSİ (TDV, gövde okundu, HTTP 200; birebir)

- `berka`: *"Tarih boyunca Mısır'a bağımlı olduğu görülen Berka bölgesi, Mısır'ın Osmanlılar tarafından
  fethinden sonra bu idareye bağlandı"* ⇒ Berka 1517'den sonra Osmanlı (Tulmeyse/Bomba kaydıyla uyumlu).
- `bingazi`: *"1551 Trablusgarp seferi sırasında Berka bölgesinin Osmanlı hâkimiyetine girmesinden sonra
  Bingazi de kesin olarak Osmanlı yönetimine katıldı (1578)."* ⇒ Berka 1551'de Osmanlı.
- `derne`: *"Tunus'taki Hafsî hânedanının idaresi sırasında Trablusgarp ile birlikte 1510'da İspanyollar
  tarafından zaptedildi. 1530'dan itibaren Malta adasıyla beraber Rodos'tan çıkarılan Saint Jean
  şövalyelerine verildi. 1551'de Osmanlı idaresine geçti."* — ve AYNI maddede hemen ardından: Turgut Reis
  beylerbeyi olarak *"doğuda Tobruk ve Derne'yi almıştı"* ⇒ madde kendi içinde de gerilimli (1551'de
  Trablus'la birlikte mi, Turgut'un beylerbeyiliğinde mi?). Tuzak ⑥.
- Atlas her noktaya başka maddeyi uygulamış: Tulmeyse/Bomba ← `berka` (1517) · Bingazi/Merc/Beyzâ/
  Ecdâbiye/Tobruk ← `bingazi` (1551; ÖNCESİ BOŞ) · Derne ← `derne`. Sonuç tek bir bölgede dört statü.
- Derne'nin üç kırılma günü kaydın kendi `kaynak:` alanına göre *"külliyattan devralındı (olaylar_ek20
  1510-07-25 · 1530-03-24 · 1551-08-15)"* — bunlar **Trablus'un** günleri (Trablus kaydıyla birebir).

**Seçenekler (karar Emre/koordinatörde; ben önermem: B):**
- **A — `berka`yı esas al:** Berka'nın bütün noktaları 1517-05-19'dan Osmanlı (`d:`). Derne'nin İspanya/
  şövalye dönemleri kalkar. Sahipsiz kalmaz ⇒ H-0014/H-0022'nin kaması ve dişleri biter. Ama `derne` ve
  `bingazi` maddeleriyle çelişir.
- **B — `bingazi` + `derne`yi esas al, ama tutarlı:** Berka 1551'e dek "Osmanlı değil"; o halde Tulmeyse ve
  Bomba'nın 1517 Osmanlı dönemi de kaynaksız sayılır ve öteki Berka noktalarıyla aynı statüye iner. Derne'nin
  İspanya dönemi yalnız `derne`nin tek cümlesine dayanıyor; o cümle Trablus'un tarihini anlatan cümleyle aynı
  kalıpta ve aynı madde Derne'yi sonra Turgut'a aldırıyor ⇒ D204 ("devlet var, yeri yanlış") adayı, akademik
  ikinci kaynakla teyit edilmeden tutulmamalı. Sahipsizlik ise `§3.5.1 __BOSLUK__` beyanıyla yazılmalı.
- **C — bugünkü hâl + beyan:** dokunma, yalnız `__BOSLUK__`/beyan ekle. Görüntü sorunları SÜRER.

## 4. BULUNAMADI / ÖLÇÜLMEDİ

- Görsellerin günü görselde yok; 1523-01-05 bir YENİDEN ÜRETİM, görselin çekildiği gün olduğu kanıtlanmadı
  (Derne İspanya penceresi 1510-1530 içinde her gün aynı sahne çıkar).
- Tulmeyse ve Bomba'nın 1517 Osmanlı dönemlerinin kayıttaki kaynağı bu oturumda okunmadı.
- Câlû'nun `s:kanem-bornu` dönemi (`kaynak:"fizan"`) doğrulanmadı — Câlû Berka'da (Ecdâbiye'nin güneyi); D204 adayı.
- Gövde çakışmasının alanı ölçülmedi (yalnız iki pikselde her iki dolgu birden var).
- `mercidabik`/öteki slug'lar bu işte kullanılmadı.

## 5. YAN BULGU — yayın paketleri

`py arac/paketle.py yenile`, temiz `origin/main` `6865cc87` üstünde koşunca **8 kaynağın paketinin bayat**
olduğunu bildirdi (ör. `paket_14` ← `yerlesimler_ek26.js`, `paket_21` ← `yerlesimler_ok110.js`). Yani yayın
şu an bu 8 dosyanın ESKİ hâlini sunuyor olabilir. Benim değişikliğim değil; ölçümden önce gördüm.

## 6. DOSYALAR

- `denetim/GORUNTU-0087-KOORD.diff` — `data/yerlesimler_ek.js` tek satır (Kotor `g:0 → g:1`). Sahibi
  koordinatör (yerleşim dosyası). Temel `origin/main` `6865cc87`, `git apply --check` ✓, CR 0.
  Uygulandıktan sonra `py arac/paketle.py yenile` (paket_13) — koşu GEREKMEZ.
- `denetim/ARAC-GORUNTU-0087.js` — sahne + sorgu aleti (headless Chrome, `tarihAyarla`/`queryRenderedFeatures`/`sehirler`).
- Görüntüler: `SINAV-GORUNTU-0087-berka-1523-01-05-z6.png` (H-0014/H-0015/H-0022'nin yeniden üretimi) ·
  `SINAV-GORUNTU-0087-boka-1523-01-05-z8.png` (H-0019'un yeniden üretimi).
- ⚠️ **Olay bildirimi:** ölçüm sırasında bir PowerShell `[IO.File]::WriteAllBytes` çağrısı göreli yolu
  süreç dizinine göre çözdü ve Kotor satırını bir an **`C:\atlas\data\yerlesimler_ek.js`'e (UMIT ana
  deposu)** yazdı. Fark edildi, aynı satır ters değişiklikle geri alındı; `git -C C:\atlas status` TEMİZ
  (ölçüldü). Başka dosya etkilenmedi.
