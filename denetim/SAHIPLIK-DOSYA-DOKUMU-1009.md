# SAHIPLIK-DOSYA-DOKUMU-1009 — `_sahiplik_uygula.py --dosya-dokumu` (salt okunur)

Temel: `origin/makine/umit` `8f93a2e8` (SAHIPLIK-UYGULA-KUSUR-1008 yamasını TAŞIYOR; `main` taşımıyor) ·
worktree `C:\atlas-dokum` · 103 `data/yer_yama*.js`.

## ① ÖNGÖRÜ — dökümün kodu yazılmadan, ölçümden ÖNCE (9 Ekim 2026)

Bilinen tek ölçüm (öngörüden önce, aracın KENDİ kuru koşusu, bu tabanda): yama kaydı 1.369 ·
benzersiz ad 1.053 · uygulandi **174** · zaten-boyle **722** · cakisma 20 · kendi-kilidi 2 ·
gun-maddesiz 18 · veride-yok 60 · **kapsam-daraldi 57** (yedinci ana kova — koordinatörün "altı
kova"sında yok; 174+722+20+2+18+60+57 = 1.053). Koordinatörün 210/726'sı bu tabanla TUTMUYOR —
ölçtüğü araç büyük ihtimalle `main`deki (1008 öncesi) sürüm; fark adıyla ölçülecek.

| soru | öngörü |
|---|---|
| dökümün ad kovası toplamları | kuru koşuyla BİREBİR: 174/722/20/2/18/60/57 (aynı süreç, aynı sayaç) |
| dökümün kayıt toplamı (dosya×kayıt) | 1.369 (= YAMA KAYDI) |
| birden çok dosyada geçen ad | ~260 (223 ayrık + 13 yalnız-kaynak + 20 çakışma + birkaç birleşen) |
| ARŞİVLENEBİLİR dosya | ~50 / 103 |
| ARŞİVLENEMEZ dosya | ~45 (en sık sebep `uygulandi`, sonra `kapsam-daraldi`) |
| kayıtsız / süzgeçte boş dosya (hüküm verilemez) | ~3 (ör. `yer_yama_emilme2.js` "DOSYA ARTIK BOŞ" diyor) |
| değişken adı çakışan dosya (node'da biri ötekini ezer) | 0 |
| veride-yok alt sınıfları (60) | ad-değişmiş ~20 · girdi-dışı dosyada ~5 · hiç-yok (yeni nokta) ~35 |
| bayat-yama kapısı (174 değişim) | ~170 BAYAT (6 Ekim ölçümü 177'de 174'tü) |
| gerileme (`--dosya-dokumu` yok) | çıktı + çıkış kodu bayt bayt aynı |

## ② ÖLÇÜM (9 Ekim 2026)

### Ne eklendi — `arac/_sahiplik_uygula.py` (+409/−0, yalnız ekleme)
- `--dosya-dokumu` · `--json <yol>` (ya da `--json -` ⇒ stdout'ta tek satır `DOKUM_JSON {…}`; `--json`
  tek başına dökümü de açar). Döküm, kapı sorulduktan SONRA ve `--yaz` bloğundan ÖNCE basılır;
  exit 2/3/4 yollarında da basılır (kapı hükmü "ÖLÇÜLEMEDİ" olarak). **Salt okunur.**
- Ana döngüde her adın ANA kovası `kova_ad`a yazılır (12 satır `kova_ad[ad] = "…"`, sayaçlara dokunmaz).
  Döküm önce **öz-sınav** basar: kova sayımı = aracın kendi sayacı.
- Her yama dosyası node'da **tek başına** (temiz `window`) yeniden okunur — süzgeç metni ana `JS`ten
  AYNEN çekilir. Eval hatası ya da sayı uyuşmazlığı (aynı `window.X` iki dosyada) ⇒ "ÖLÇÜLEMEDİ"
  (ana okuma eval hatasını SESSİZCE atlıyordu; boş küme "hepsi zaten-böyle" sayılmasın).
- Hüküm sınıfları: **ARŞİVLENEBİLİR** (bütün kayıtlar `zaten-boyle`, ya da `veride-yok` ama içeriği
  benzer adlı kayıtta İNMİŞ) · **ARŞİVLENEMEZ: <kova> N** (uygulandi · cakisma · kendi-kilidi ·
  gun-maddesiz · kapsam-daraldi · belirsiz · cipa-yok · mukerrer-anahtar · satir-paylasimli · taninmadi)
  · **KARAR GEREK: veride-yok/<alt> N** · **SAHİPLİK DIŞI** (`ad`lı kayıt 0) · **ÖLÇÜLEMEDİ**.
- `veride-yok` alt sınıfı (sırayla): `ad-benzeri/icerik-inmis` (normalleştirilmiş ad parçası `X (Y)` ya da
  ≤3 km bir girdi kaydı, ve yamanın yazılabilir alanları o kayıtta VAR — engel değil) ·
  `ad-benzeri/icerik-farkli` · `girdi-disi-dosyada` (GIRDI_DOSYALARI'nda olmayan bir `yerlesimler*.js`) ·
  `silinmis` (tek `git log -p -U0 -- data/yerlesimler*.js` geçişinde adı `+` satırında var) · `hic-yok`.
- Ek bilgi satırları (hükmü değiştirmez): `uygulandi`nın kaçında BU dosyanın kendi kaydı zaten veride
  (değişimi öteki dosya getiriyor) · `zaten-boyle`nin kaçında korunan skaler veridekinden FARKLI.
- Kapı sütunu: dosyanın `uygulandi` adlarından kaçı bayat-yama kapısınca BAYAT.

### Sınav — `py denetim/ARAC-SAHIPLIK-DOSYA-DOKUMU-SINAV-1009.py` → **21/21 GEÇTİ, çıkış 0** (~10 dk)
HEAD'den geçici worktree (`%TEMP%`), yamalı araç kopyalanır, iş bitince silinir; `--yaz` YOK.

| | soru | sonuç |
|---|---|---|
| D1–D2 | bayraksız: eski (1008 blob `7b1118c0`) ile çıkış kodu ve çıktı bayt bayt | ✓ 2=2 · 91.443 karakter aynı |
| D3–D4 | bayraklı: aynı çıkış kodu; döküm bloğu (454 satır) çıkarılınca bayraksızın aynısı | ✓ |
| A0–A6 | gerçek korpus: JSON okundu · ad kovaları = bayraksız özet (174/722/20/2/18/60/57) · dosya×kayıt 1.369 = YAMA KAYDI · ad 1.053 · dosya kovaları = kayıt · ARŞİVLENEBİLİR'de engel yok · 103/103 dosya | ✓ |
| C1–C3 | uydurma `data/yer_yama_zz_sinav_1009.js` (Bozüyük · Ermeni Derbendi · Pazaryeri, `m:` veridekiyle aynı) | ✓ 3 zaten-boyle · ARŞİVLENEBİLİR · çıkış 0 |
| B1–B7 | aynı dosyaya Aydın `m:"İzmir SINAV-1009"` eklenince, varsayılan glob | ✓ glob'a girdi · U1+Z3 · **"ARŞİVLENEMEZ: uygulandi 1"** · korpus U 174→175 · öteki 102 dosyanın hükmü aynı · kapı 0/1 · `data/`da yalnız uydurma dosya |

📌 Sınavın ilk koşusu 20/21 verdi: D4'ün döküm bloğunu kesen regex'i sınavın KENDİ kusuruydu
(başlıktaki ikinci `═` çizgisinde duruyordu); satır tabanlı kesimle 21/21. Araç kodu değişmedi.

### Gerçek korpusun dosya dökümü — taban `origin/makine/umit` `8f93a2e8`
U uygulandi · Z zaten-boyle · Ç cakisma · K kendi-kilidi · G gun-maddesiz · V veride-yok · D kapsam-daraldi.
Son sütun: aynı yeni aracın `main@e28edfdc` (koordinatörün ağacı) verisindeki farkı.

| dosya | kayıt | U | Z | Ç | K | G | V | D | kapı (U için) | HÜKÜM (umit `8f93a2e8`) | main `e28edfdc` farkı |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|
| `yer_yama_1923.js` | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | — | **ARŞİVLENEBİLİR** | aynı |
| `yer_yama_afrika_1923.js` | 34 | 0 | 34 | 0 | 0 | 0 | 0 | 0 | — | **ARŞİVLENEBİLİR** | aynı |
| `yer_yama_amerika_1923.js` | 3 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | — | **ARŞİVLENEBİLİR** | aynı |
| `yer_yama_avrupa_dayanak_1923.js` | 51 | 0 | 51 | 0 | 0 | 0 | 0 | 0 | — | **ARŞİVLENEBİLİR** | aynı |
| `yer_yama_avrupa_isvec_1923.js` | 42 | 0 | 42 | 0 | 0 | 0 | 0 | 0 | — | **ARŞİVLENEBİLİR** | aynı |
| `yer_yama_belgesiz4.js` | 2 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | — | **ARŞİVLENEBİLİR** | aynı |
| `yer_yama_fizan.js` | 12 | 0 | 12 | 0 | 0 | 0 | 0 | 0 | — | **ARŞİVLENEBİLİR** | aynı |
| `yer_yama_guyana.js` | 5 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | — | **ARŞİVLENEBİLİR** | aynı |
| `yer_yama_makdisu.js` | 5 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | — | **ARŞİVLENEBİLİR** | aynı |
| `yer_yama_moskito.js` | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | — | **ARŞİVLENEBİLİR** | aynı |
| `yer_yama_ortadogu_1923.js` | 2 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | — | **ARŞİVLENEBİLİR** | aynı |
| `yer_yama_yunananakara.js` | 17 | 0 | 17 | 0 | 0 | 0 | 0 | 0 | — | **ARŞİVLENEBİLİR** <br>_(korunan skaler farklı 7)_ | aynı |
| `yer_yama_1923_nepal_karayip.js` | 6 | 0 | 0 | 0 | 0 | 0 | 6 | 0 | — | KARAR GEREK: veride-yok/ad-benzeri/icerik-farkli 2 · veride-yok/hic-yok 4 | aynı |
| `yer_yama_1923_yeni.js` | 6 | 0 | 0 | 0 | 0 | 0 | 6 | 0 | — | KARAR GEREK: veride-yok/hic-yok 6 | aynı |
| `yer_yama_cermik_sason.js` | 2 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | — | KARAR GEREK: veride-yok/hic-yok 2 | aynı |
| `yer_yama_gronland_col.js` | 9 | 0 | 0 | 0 | 0 | 0 | 9 | 0 | — | KARAR GEREK: veride-yok/hic-yok 9 | aynı |
| `yer_yama_hadramut_nokta.js` | 2 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | — | KARAR GEREK: veride-yok/ad-benzeri/icerik-farkli 2 | aynı |
| `yer_yama_hizan.js` | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | — | KARAR GEREK: veride-yok/hic-yok 1 | aynı |
| `yer_yama_sibirya_beyan.js` | 8 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | — | KARAR GEREK: veride-yok/hic-yok 8 | aynı |
| `yer_yama_zaza.js` | 7 | 0 | 0 | 0 | 0 | 0 | 7 | 0 | — | KARAR GEREK: veride-yok/hic-yok 7 | aynı |
| `yer_yama_1923_bosluk_0906.js` | 4 | 0 | 1 | 2 | 0 | 0 | 0 | 1 | — | ARŞİVLENEMEZ: cakisma 2 · kapsam-daraldi 1 | aynı |
| `yer_yama_1923_duzeltme.js` | 4 | 0 | 2 | 1 | 0 | 0 | 0 | 1 | — | ARŞİVLENEMEZ: cakisma 1 · kapsam-daraldi 1 | aynı |
| `yer_yama_ada_istankoy.js` | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | — | ARŞİVLENEMEZ: cakisma 1 | aynı |
| `yer_yama_ada_kaynak.js` | 13 | 0 | 12 | 1 | 0 | 0 | 0 | 0 | — | ARŞİVLENEMEZ: cakisma 1 | aynı |
| `yer_yama_agadez_0906.js` | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | — | ARŞİVLENEMEZ: cakisma 1 | aynı |
| `yer_yama_arnavutluk.js` | 2 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | — | ARŞİVLENEMEZ: kapsam-daraldi 1 <br>_(korunan skaler farklı 1)_ | aynı |
| `yer_yama_avrupa_1923.js` | 11 | 1 | 9 | 1 | 0 | 0 | 0 | 0 | 1/1 BAYAT | ARŞİVLENEMEZ: uygulandi 1 · cakisma 1 | aynı |
| `yer_yama_balkan_1923.js` | 13 | 10 | 3 | 0 | 0 | 0 | 0 | 0 | 10/10 BAYAT | ARŞİVLENEMEZ: uygulandi 10 | aynı |
| `yer_yama_balkan_trakya.js` | 4 | 1 | 2 | 0 | 0 | 1 | 0 | 0 | 1/1 BAYAT | ARŞİVLENEMEZ: uygulandi 1 · gun-maddesiz 1 | aynı |
| `yer_yama_barka_dogu8.js` | 8 | 6 | 2 | 0 | 0 | 0 | 0 | 0 | 6/6 BAYAT | ARŞİVLENEMEZ: uygulandi 6 | aynı |
| `yer_yama_belgesiz7.js` | 3 | 0 | 2 | 1 | 0 | 0 | 0 | 0 | — | ARŞİVLENEMEZ: cakisma 1 | aynı |
| `yer_yama_cukurova_isg_0907.js` | 15 | 3 | 12 | 0 | 0 | 0 | 0 | 0 | 2/3 BAYAT | ARŞİVLENEMEZ: uygulandi 3 <br>_(U'nun 1'inde kendi kaydı veride)_ | aynı |
| `yer_yama_doguasya.js` | 19 | 0 | 0 | 0 | 0 | 0 | 18 | 1 | — | ARŞİVLENEMEZ: kapsam-daraldi 1 · veride-yok/ad-benzeri/icerik-farkli 1 · veride-yok/hic-yok 17 | aynı |
| `yer_yama_dogumakedonya.js` | 4 | 1 | 3 | 0 | 0 | 0 | 0 | 0 | 1/1 BAYAT | ARŞİVLENEMEZ: uygulandi 1 <br>_(korunan skaler farklı 1)_ | aynı |
| `yer_yama_egeadalari.js` | 10 | 3 | 7 | 0 | 0 | 0 | 0 | 0 | 3/3 BAYAT | ARŞİVLENEMEZ: uygulandi 3 | aynı |
| `yer_yama_elba.js` | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | — | ARŞİVLENEMEZ: cakisma 1 | aynı |
| `yer_yama_erken.js` | 8 | 4 | 0 | 4 | 0 | 0 | 0 | 0 | 4/4 BAYAT | ARŞİVLENEMEZ: uygulandi 4 · cakisma 4 | aynı |
| `yer_yama_ferhatpasa.js` | 4 | 2 | 0 | 2 | 0 | 0 | 0 | 0 | 2/2 BAYAT | ARŞİVLENEMEZ: uygulandi 2 · cakisma 2 | aynı |
| `yer_yama_floransa.js` | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | — | ARŞİVLENEMEZ: kapsam-daraldi 1 | aynı |
| `yer_yama_gece_v1.js` | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | — | ARŞİVLENEMEZ: cakisma 1 | aynı |
| `yer_yama_gece_v3.js` | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2/2 BAYAT | ARŞİVLENEMEZ: uygulandi 2 | aynı |
| `yer_yama_iran.js` | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2/2 BAYAT | ARŞİVLENEMEZ: uygulandi 2 | aynı |
| `yer_yama_isg_yunan_kaynak.js` | 25 | 3 | 22 | 0 | 0 | 0 | 0 | 0 | 3/3 BAYAT | ARŞİVLENEMEZ: uygulandi 3 <br>_(korunan skaler farklı 7)_ | aynı |
| `yer_yama_kademe_m_0905.js` | 23 | 10 | 12 | 1 | 0 | 0 | 0 | 0 | 10/10 BAYAT | ARŞİVLENEMEZ: uygulandi 10 · cakisma 1 <br>_(korunan skaler farklı 3 · U'nun 6'inde kendi kaydı veride)_ | aynı |
| `yer_yama_kademe_zincir.js` | 17 | 0 | 12 | 0 | 0 | 0 | 0 | 5 | — | ARŞİVLENEMEZ: kapsam-daraldi 5 | aynı |
| `yer_yama_kafkas.js` | 2 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | — | ARŞİVLENEMEZ: cakisma 2 | aynı |
| `yer_yama_kafkas_rusya.js` | 4 | 0 | 0 | 4 | 0 | 0 | 0 | 0 | — | ARŞİVLENEMEZ: cakisma 4 | aynı |
| `yer_yama_kid20_0907.js` | 25 | 17 | 1 | 6 | 0 | 0 | 0 | 1 | 17/17 BAYAT | ARŞİVLENEMEZ: uygulandi 17 · cakisma 6 · kapsam-daraldi 1 | aynı |
| `yer_yama_litvanya.js` | 19 | 0 | 18 | 0 | 0 | 0 | 0 | 1 | — | ARŞİVLENEMEZ: kapsam-daraldi 1 <br>_(korunan skaler farklı 9)_ | aynı |
| `yer_yama_manda_0906.js` | 42 | 3 | 34 | 3 | 0 | 0 | 0 | 2 | 3/3 BAYAT | ARŞİVLENEMEZ: uygulandi 3 · cakisma 3 · kapsam-daraldi 2 <br>_(korunan skaler farklı 11 · U'nun 1'inde kendi kaydı veride)_ | aynı |
| `yer_yama_misir_himaye.js` | 56 | 6 | 45 | 5 | 0 | 0 | 0 | 0 | 6/6 BAYAT | ARŞİVLENEMEZ: uygulandi 6 · cakisma 5 | aynı |
| `yer_yama_ok101.js` | 6 | 0 | 1 | 5 | 0 | 0 | 0 | 0 | — | ARŞİVLENEMEZ: cakisma 5 | aynı |
| `yer_yama_ok105.js` | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1/1 BAYAT | ARŞİVLENEMEZ: uygulandi 1 | aynı |
| `yer_yama_ok106.js` | 2 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 1/1 BAYAT | ARŞİVLENEMEZ: uygulandi 1 | aynı |
| `yer_yama_ok107.js` | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | — | ARŞİVLENEMEZ: cakisma 1 | aynı |
| `yer_yama_ok109.js` | 2 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | — | ARŞİVLENEMEZ: kendi-kilidi 2 | aynı |
| `yer_yama_ok109_fetret.js` | 15 | 2 | 9 | 3 | 0 | 0 | 0 | 1 | 2/2 BAYAT | ARŞİVLENEMEZ: uygulandi 2 · cakisma 3 · kapsam-daraldi 1 | aynı |
| `yer_yama_ok110.js` | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1/1 BAYAT | ARŞİVLENEMEZ: uygulandi 1 | aynı |
| `yer_yama_onikiada.js` | 13 | 0 | 12 | 1 | 0 | 0 | 0 | 0 | — | ARŞİVLENEMEZ: cakisma 1 | aynı |
| `yer_yama_ortadogu_misir_1923.js` | 7 | 0 | 2 | 5 | 0 | 0 | 0 | 0 | — | ARŞİVLENEMEZ: cakisma 5 | aynı |
| `yer_yama_p0035.js` | 3 | 2 | 0 | 1 | 0 | 0 | 0 | 0 | 2/2 BAYAT | ARŞİVLENEMEZ: uygulandi 2 · cakisma 1 | aynı |
| `yer_yama_romanya.js` | 20 | 17 | 0 | 0 | 0 | 0 | 0 | 3 | 17/17 BAYAT | ARŞİVLENEMEZ: uygulandi 17 · kapsam-daraldi 3 | aynı |
| `yer_yama_sh106.js` | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | — | ARŞİVLENEMEZ: kapsam-daraldi 1 | aynı |
| `yer_yama_sh107.js` | 8 | 1 | 7 | 0 | 0 | 0 | 0 | 0 | 1/1 BAYAT | ARŞİVLENEMEZ: uygulandi 1 <br>_(korunan skaler farklı 1)_ | aynı |
| `yer_yama_silistre_0906.js` | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | — | ARŞİVLENEMEZ: kapsam-daraldi 1 | aynı |
| `yer_yama_sohum.js` | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | — | ARŞİVLENEMEZ: cakisma 1 | aynı |
| `yer_yama_sutter_0906.js` | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0/1 BAYAT | ARŞİVLENEMEZ: uygulandi 1 | aynı |
| `yer_yama_tbmm_1920_0905.js` | 216 | 37 | 162 | 0 | 0 | 17 | 0 | 0 | 37/37 BAYAT | ARŞİVLENEMEZ: uygulandi 37 · gun-maddesiz 17 <br>_(korunan skaler farklı 3 · U'nun 3'inde kendi kaydı veride)_ | ARŞİVLENEMEZ: uygulandi 34 · gun-maddesiz 17 · U34 Z165 |
| `yer_yama_timbuktu.js` | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | — | ARŞİVLENEMEZ: cakisma 1 | aynı |
| `yer_yama_timbuktu_tam_0906.js` | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | — | ARŞİVLENEMEZ: cakisma 1 | aynı |
| `yer_yama_uyg2.js` | 7 | 2 | 4 | 0 | 0 | 0 | 1 | 0 | 2/2 BAYAT | ARŞİVLENEMEZ: uygulandi 2 · veride-yok/hic-yok 1 <br>_(U'nun 1'inde kendi kaydı veride)_ | aynı |
| `yer_yama_uyg3.js` | 2 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | — | ARŞİVLENEMEZ: cakisma 2 | aynı |
| `yer_yama_vassal_kid_0906.js` | 367 | 86 | 227 | 6 | 0 | 1 | 0 | 47 | 84/86 BAYAT | ARŞİVLENEMEZ: uygulandi 86 · cakisma 6 · gun-maddesiz 1 · kapsam-daraldi 47 <br>_(U'nun 57'inde kendi kaydı veride)_ | aynı |
| `yer_yama_zend_kacar.js` | 132 | 36 | 94 | 2 | 0 | 0 | 0 | 0 | 36/36 BAYAT | ARŞİVLENEMEZ: uygulandi 36 · cakisma 2 | aynı |

**SAHİPLİK DIŞI (29)** — `ad`lı kayıt 0, başka yama ailesi, hüküm yok: `yer_yama.js`, `yer_yama_acik.js`, `yer_yama_almanya.js`, `yer_yama_anadolu.js`, `yer_yama_balkan_makedonya.js`, `yer_yama_cin.js`, `yer_yama_dogafr.js`, `yer_yama_emilme.js`, `yer_yama_emilme2.js`, `yer_yama_enklav.js`, `yer_yama_fransa.js`, `yer_yama_hayalet.js`, `yer_yama_hayalet2.js`, `yer_yama_ing.js`, `yer_yama_ispanya.js`, `yer_yama_isvec.js`, `yer_yama_italya.js`, `yer_yama_japonya.js`, `yer_yama_kademe.js`, `yer_yama_kademe2.js`, `yer_yama_kapsam.js`, `yer_yama_kuzafr.js`, `yer_yama_macar.js`, `yer_yama_memluk.js`, `yer_yama_misir.js`, `yer_yama_owtrad.js`, `yer_yama_p32.js`, `yer_yama_sahiplik.js`, `yer_yama_veri31.js`

Toplam: 103 dosya · ARŞİVLENEBİLİR **12** · KARAR GEREK 8 · ARŞİVLENEMEZ 54 · SAHİPLİK DIŞI 29 · ÖLÇÜLEMEDİ 0.
Kayıt başına: U 261 · Z 894 · Ç 66 · K 2 · G 19 · V 60 · D 67 (= 1.369). Ortak ad 256 (listesi `--dosya-dokumu` çıktısında ADIYLA).

### Öngörü ↔ ölçüm

| soru | öngörü | ÖLÇÜM |
|---|---|---|
| ad kovaları = kuru koşu | birebir 174/722/20/2/18/60/57 | ✓ birebir (öz-sınav + sınav A1) |
| dosya×kayıt toplamı | 1.369 | ✓ 1.369 |
| ortak ad | ~260 | 256 |
| ARŞİVLENEBİLİR | ~50 | ✗ **12** — çok iyimserdim |
| ARŞİVLENEMEZ | ~45 | 54 (+ 8 KARAR GEREK) |
| kayıtsız dosya | ~3 | ✗ **29** — hepsi başka yama ailesi (kronoloji `{dosya,t,b}` · kademe `{yerlesim}` · rapor `{no,baslik}`), `ad`lı kayıt 0. "Boş" değil **SAHİPLİK DIŞI**; bu araç onlar için hüküm vermez |
| değişken çakışması / eval hatası | 0 | ✓ 0 (103/103 dosya tek başına okundu, sayılar ana okumayla birebir) |
| veride-yok alt sınıfı | ad-değişmiş ~20 · girdi-dışı ~5 · hiç-yok ~35 | ✗ ad-benzeri 5 (hepsi içerik-FARKLI) · girdi-dışı 0 · silinmiş 0 · **hiç-yok 55** |
| kapı BAYAT | ~170 | ✓ 170 / 174 (umit) · 167 / 171 (main) |
| gerileme | birebir | ✓ çıktı 91.443 karakter bayt bayt, çıkış 2 = 2 |

### Koordinatörün 210/726'sı — ADIYLA

Koordinatörün sayısı **`main@e28edfdc` + main'deki (1008 ÖNCESİ) araçla** birebir üretildi
(210/726/20/2/18/60). 1008 sürümü (umit) ile fark 44 ad, iki sınıf:

- **uygulandi → kapsam-daraldi (40)** — 1008'in K1/K2 düzeltmesi kapsam-daralma korumasını
  JSON/çok satırlı kayıtta GÖRÜR yaptı; eski araç bunları "uygulandı" sayıyordu (ve eski özet
  `kapsam-daraldi` kovasını hiç BASMIYORDU — 17 ad görünmüyordu): Akçahisar (Kruja) · Benzert (Bizerte) ·
  Beyrut · Bin Gerdân · Bâce (Béja) · Cendûbe · Cerbe (Djerba) · Cerciş (Zarzis) · Dûz · Gabes ·
  Halkulvâdî · Honolulu · Kafsa · Kasrayn · Kayrevan · Kef · Kelîbiye · Kerkene (Kerkennah) · Kragujevac ·
  Kıbillî (Nefzâve) · Medenîn · Mehdiye · Mekter (Maktar) · Metlâvî · Munastır · Mâtir (Mateur) · Nefta ·
  Nâbil (Nabeul) · Sfaks · Sîdî Bû Zeyd · Sûse · Sübaytıla · Tatavin · Testûr · Tozer · Tunus · Zağvân ·
  Çaçak · Ğar Dimâv · Ğâru'l-Melh (Porto Farina)
- **zaten-boyle → uygulandi (4)** — Harput (Elazığ) · Palu · Çemişgezek (umit verisi main'den farklı:
  DIVRIGI-MEMLUK bölgesi) · Sutter's Fort (Sacramento).
- Yeni araç `main@e28edfdc` verisinde: 171/725/20/2/18/60/57; dosya hükümlerinde tek fark
  `yer_yama_tbmm_1920_0905.js` (U 37→34) — **ARŞİVLENEBİLİR listesi iki tabanda AYNI (12).**

## ③ NE BULAMADIM
- Silinmiş ya da girdi-dışı dosyada duran `veride-yok` kaydı: **0** (dal kodda var, git geçmişi
  taraması 4.331 ad gördü, 31'i bugün yok — ama hiçbiri yamalarda değil). Dal bugün ateşlenmiyor.
- `ad-benzeri` 5 adın gerçekten aynı yer olup olmadığı: ölçülmedi (Patan (Lalitpur)↔Patan (Anhilvâda)
  farklı şehirler; Şibâm/Şihr ↔ Hadramut bölge adı eşleşmesi). İçerik veride değil ⇒ KARAR GEREK.
- `SAHİPLİK DIŞI` 29 dosyanın arşivlenebilirliği: bu araç ölçmez (A/B ailesinin kendi uygulayıcıları var).

## ④ NE İSTİYORUM
1. Diff'i indir: `git apply denetim/SAHIPLIK-DOSYA-DOKUMU-1009.diff` — **önce
   `SAHIPLIK-UYGULA-KUSUR-1008.diff`** (main'de yok; main+1008 üstünde `--check` temiz, umit üstünde temiz).
   Motor tuzuna dokunmuyor; bayraksız davranış birebir.
2. Arşiv taşıması için: **12 ARŞİVLENEBİLİR** dosya taşınabilir. `yer_yama_yunananakara.js`te 7 kaydın
   korunan skaleri (kaynak/neden) veridekinden farklı — araç onu hiç yazmaz, yani arşivde kalan tek
   kopya o metindir (kayıp yok, ama belge sorusu arşive gider).
3. KARAR GEREK 8 dosya (55 "hiç yok" yeni nokta + 5 ad-benzeri): arşivlemek yazılmış ama hiç inmemiş
   YENİ NOKTA işini kaybettirir — koordinatör kararı.
4. ARŞİVLENEMEZ dosyalarda kapı sütunu: `uygulandi`ların 170/174'ü BAYAT (bir kez inmiş, sonra
   düzeltilmiş). Taze olan 4: Sutter's Fort (`yer_yama_sutter_0906.js`), `cukurova_isg_0907` 1,
   `vassal_kid_0906` 2 — bunlar gerçekten inmemiş iş. Bayat-yalnız dosyaların arşivi ayrı bir hüküm ister
   (sınıf kuralı koordinatörün: "tek uygulandi ⇒ arşivlenemez").
