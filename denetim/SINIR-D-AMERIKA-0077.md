# SINIR-D-AMERIKA-0077 — Amerika 1923 sınırları: YOK → C/E

Evren: `data/d_sinirlar_amerika.js` · 79 kayıt (26 E · 16 C · 37 YOK). Gün: `1923-09-01`.

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (sınav anı 2026-09-24 12:58)

Kayıtların `not`/`dayanak` alanı okundu, KAYNAK henüz açılmadı, renk ölçülmedi.

- **Ö1 · 37 YOK'un en çok 14'ü belgeye bağlanıp çizilebilir** (C ya da E). Adaylar: ar-cl ·
  co-ve · co-br-kuzey · br-gf · bo-br · pa-co (yalnız 1922-03-01 sonrası) · alaska-guneydogu ·
  rio-grande · colorado · lake-of-the-woods · saint-martin · hn-ni-dogu · sr-gf (alt kesim) ·
  bo-cl DEĞİŞTİ kutuları. Kalan ≥ 23 YOK kalır: TARTIŞMALI (ec-pe · bo-py-chaco · gt-hn ·
  cr-pa · ht-do · co-pe · labrador · br-uy-invernada …) ya da belgesiz/fiilî (gt-sv · hn-sv ·
  gy-sr · ar-uy · cl-pe-tacna-arica · br-py-paraguay-nehri). Tartışmalı bir hattı çizmek, o gün
  var olmayan bir hukukî hattı iddia etmektir — merdiven "D yoksa C" der, "belge yoksa uydur" demez.
- **Ö2 · bunların en çok 1'i E kalitesinde** (aday: Alaska güneydoğu — 1903 kararı tepe tepe
  tanımlar, 1904-1920 işaretleme). Canal Zone 1914 metni koordinatlı ama geometrisi elimde yok ⇒
  bulunamadı beklenir.
- **Ö3 · renk:** C hattı yaslamaya GİRMEZ (`_D_YASLA_SINIF_HUKUKI = {F,E}`) ⇒ YOK→C
  dönüşümlerinde "hattın 5 km iki yanı doğru renk" ÖNCE = SONRA olacak (fark 0 puan). Renk yalnız
  E'ye çıkan hatta değişir. Ekrandaki kazanç C'de yalnız siyah çizginin kendisidir.
- **Ö4 · nokta yoğunluğu:** Orta Amerika'da (Honduras · El Salvador · Nikaragua · Kosta Rika)
  1923-09-01 gövdesi YOK — bu dört künye taslak ve `devletler_harita.js`te çizilmiyor
  (ölçüldü: 23 gövde listesinde yoklar). Bu hatlarda yanlış renk "hat yanlış" değil "gövde yok"
  sınıfına düşecek. Güney Amerika iç hatlarında (Amazon, Chaco, Patagonya) ÖNCE doğru renk
  ≤ %70 bekliyorum — seyrek nokta.

## 1. SINAV — öngörü ne oldu (ölçüm 2026-09-24 ~13:40)

| öngörü | sonuç |
|---|---|
| Ö1 ≤ 14 YOK belgeye bağlanır | **13 çağrı yükseltildi** (ar-cl · co-ve · co-br-kuzey · br-gf · bo-br · sr-gf · pa-co · rio-grande · colorado · lake-of-the-woods · alaska-guneydogu · bo-cl-tacna · hn-ni-dogu). saint-martin ve bo-cl DEĞİŞTİ kutuları YOK'ta kaldı (belge hattı tanımlamıyor / kayma bilinmiyor). ✓ tuttu |
| Ö2 ≤ 1 E | **0 E.** Alaska güneydoğu C'de kaldı: "değişmedi" diyen kaynak okunmadı. Canal Zone 1914 koordinatları: bulunamadı (dokunulmadı). ✓ tuttu |
| Ö3 C renge dokunmaz | **ÖNCE = SONRA, 19 yeni C hattın hepsinde, fark 0 puan.** ✓ tuttu |
| Ö4 Orta Amerika gövdesiz; G. Amerika iç hatlar ≤ %70 | hn-ni-dogu 104/104 GÖVDE-YOK · yeni C'lerin en iyisi %55,6. ✓ tuttu |

## 2. NE YAPILDI

`denetim/SINIR-D-AMERIKA-0077-yukselt.py`, D5-AMERIKA üreticisini (`ARAC-D5AM-URET-0916.py`) **değiştirmeden**
sarıyor ve yalnız 13 `yok()` çağrısını yakalıyor. Sınav: yükseltme listesi boşken çıktı, commit'li dosyayla
**birebir aynı** (`--sina`, `cmp` ✓). Üreticinin bilmediği bir elle düzeltme vardı: dosyada künye
`ingiliz-hondurasi`, üreticide `ingiliz-honduras`. Betik bu düzeltmeyi açıkça yeniden uyguluyor.

Kayıtlar: 79 → **92** (E 26 · C 16 → **35** · YOK 37 → **31**). 1923-09-01'de çizilen: 32 hat / 20.943 km →
**51 hat / 35.517 km** (+14.574 km, hepsi C, yani siyah çizgi).

Kural: C'nin geometrisi bugünkü NE çizgisidir, yani bir VEKİLDİR. Bu yüzden kaynağın **sonraki değişiklik**
dediği kesim C'ye alınmadı, YOK kutusu olarak bırakıldı:
- **ar-cl** — Palena–California kesimi (IBS 101 s.2-4: 16–17 numaralı direkler arası, 1966 kararı) ve
  Laguna del Desierto + buz sahası (1994/1998; kaynak OKUNMADI, kutu geniş tutuldu). f = **1902-11-20**
  (hakem kararı). Kaynağa göre 1881–1902 arasında hat tanımsızdı (1893 ve 1896 anlaşmazlığı çözemedi, kesimler
  tahkime gitti), bu yüzden `-oncesi` YOK kaydı yazıldı.
- **co-br-kuzey** — Papuri–Taraira kesimi (IBS 174 s.7): 1907'deki 69°30' meridyeni Taraira'yı kesmiyordu;
  1930–36'da 70°02'37"e çekildi, ≈ 60 km kayma. O kesim YOK kaldı.
- **sr-gf** — yalnız Maroni + Awa hattı C (1891 Çar kararı). Awa'nın yukarısı (Itany/Marouini) TARTIŞMALI olduğu için
  YOK kaldı. Kesim noktası GeoNames "Marouini" 3°17'32"K (konum vekili).
- **pa-co** — C yalnız **1922-03-01**'den sonra (Thomson–Urrutia onayı); 1903–1922 arası YOK.
- **rio-grande** f 1848-05-30 (onay) · Chamizal kutusu çıkarıldı. **colorado** f **1854-06-30**: 1848 hattı bu
  kesimde nehir değildi, nehir kesimini Gadsden md. I tanımladı.
- **hn-ni-dogu** TARTIŞMALI olduğu hâlde C'ye alındı. Gerekçe: UAD 1960 kararı 1906 hakem kararını geçerli ve
  bağlayıcı saydı. **Koordinatörün hükmü (24 Eyl): C'de kalıyor, ama kayıt ihtilafı beyan ediyor.** `not` alanı
  "1923'TE TARAFLAR ARASINDA İHTİLAFLIDIR" diye açılıyor; 1906 kararını, Nikaragua'nın reddini ve UAD 1960
  hükmünü ("pencereden 37 yıl sonra, 1923 için onay sayılmaz") yazıyor. Ret yılı IBS 36'da **yok**; koordinatörün
  verdiği 1912 DOĞRULANMADI, kayda yazılmadı.

TARTIŞMALI ya da belgesiz olup YOK kalanlar: ec-pe · bo-py-chaco · gt-hn · gt-sv · hn-sv · cr-pa · ht-do · co-pe ·
co-ec-dogu · labrador · chamizal · gy-sr · ar-uy · cl-pe-tacna-arica · br-py-paraguay-nehri · ar-py-pilcomayo ·
ar-bo (1925 antlaşması doğu kesimi değiştirdi) · br-uy ×2 · ar-br-brasilera · bo-cl DEĞİŞTİ ×2 · saint-martin ·
us-pa-kanal-bolgesi · ar-cl/co-br/sr-gf alt kutuları.

## 3. ÖLÇÜ — hattın 5 km iki yanı, 1923-09-01 (`SINIR-D-AMERIKA-0077-olc.py`)

B9 ateşleme: 5 bilinen nokta (Kansas→abd · Buenos Aires→arjantin · Manaus→brezilya · Superior gölü→su ·
Atlas→su) tuttu ✓. Ters sınavı: prairie hattının `sol_taraf`ı çevrilince doğru oran %52,6'dan %41,5'e düştü, yani
alet yönü görüyor. Deniz ve göl örnekleri paydaya alınmadı (NE 10m kara − göller).

| | örnek (kara) | DOĞRU | KARŞI (hat/petek uyuşmazlığı) | BOŞ (gövde yok = nokta yok) | GÖVDE-YOK (künye çizilmiyor) | ÜÇÜNCÜ |
|---|---|---|---|---|---|---|
| ÖNCE (bu işten önce, 32 hat) | 3.780 | %28,4 | %24,6 | **%40,8** | %3,7 | %2,4 |
| SONRA (51 hat, yaslama benzetimi) | 6.653 | %36,0 | %10,5 | **%48,0** | %3,7 | %1,8 |

- E hatları (değişmedi): %39,0 → yaslama benzetimiyle **%73,3**. Bu tarayıcı ölçümü değil, üst sınırdır
  (benzetim "yönü doğrulanmayan hat yaslanmaz" korumasını modellemiyor).
- C hatları: %14,0 (16 hat) · 35 hatla %17,8 — **yaslama C'ye dokunmuyor, fark 0**.
- 🔴 **Amerika'nın asıl kusuru hat değil NOKTA:** kara örneklerinin **%48'i hiçbir devletin gövdesine
  düşmüyor.** gy-ve · br-gy · br-sr · bo-cl-1/2/3 hatlarında örneklerin %100'ü BOŞ; co-ve %96 · br-gf %92 ·
  ar-cl-3 %77 BOŞ. Yaslama BOŞ alanı boyamaz (yalnız iki tarafın gövdesini değiştirir), bu yüzden bu kusuru
  hiçbir D/E hattı çözemez. Çare yerleşim noktasıdır (`CLAUDE.md §2`, `data/yerlesimler*.js` — benim kalemim değil).
- GÖVDE-YOK: Honduras · El Salvador · Nikaragua · Kosta Rika 1923-09-01'de `devletler_harita.js`te çizilmiyor
  (hn-ni-bati, ni-cr, hn-ni-dogu örneklerinin %100'ü).

## 4. DOĞRULANMAYANLAR
- Tarayıcı görünümü **bakılmadı**: önizleme açılamadı, klasörün 5 sunucu sınırı başka sohbetlerce dolu.
  Veri tarafı: `node --check` ✓ · `ARAC-MILIMETRIK-0923.js --hepsi` ① 0 · ② aday 21 (önceki gibi, yeni aday yok) ·
  hayalet 1 (önceki gibi) · "f dayanaksız" 202 → 205 (yeni üçü onay günleri: bo-br · bo-cl-tacna · lake-of-the-woods).
- Yeni C hatları için `data/kronoloji_sinir_amerika.js`e madde yazılmadı (benim dosyam değil).
- bo-br: 1928 Natal düzeltmelerinin büyüklüğü ÖLÇÜLMEDİ (notta yazılı).
