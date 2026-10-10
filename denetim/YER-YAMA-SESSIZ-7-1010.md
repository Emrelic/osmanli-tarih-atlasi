# YER-YAMA-SESSIZ-7-1010 — inmiş yamaların ÇIKIŞ 0 ile sessizce atladığı 7 hükümsüz kayıt

UMIT işçisi · 10 Ekim 2026 · ölçüm + teşhis + düzeltme DİFF'i · commit/push YOK · stash YOK · C:\atlas'a yazılmadı.
Geçici worktree'ler: `C:\atlas-umit-ys7` (origin/main `7a613d9e`, ölçüm + düzeltme denemesi) · `C:\atlas-umit-ys7c`
(origin/main `68bcd6c0`, `git apply --check`). İki revizyon arasında `data/` + `arac/` farkı **0**. İş bitince ikisi de kaldırıldı.
Girdi: `ATLANAN-63-1010.md` §6c (9 dosya / 10 kayıt; hükmü olan Akçahisar · Floransa · Ahıska kapsam dışı).

YENİ DOSYALAR: denetim/YER-YAMA-SESSIZ-7-1010.md · denetim/YER-YAMA-SESSIZ-7-1010-KOORD-v2.diff
⚠️ **v1 diff (`…-KOORD.diff`) DİSKTEN KALDIRILDI** — §③ v1'i anlatır (tarihî); geçerli olan **§ v2** (dosyanın sonu).

## Kısa hüküm
| # | yama | kayıt | atlama | veri | tek cümle |
|---|---|---|---|---|---|
| 1 | `yer_yama_1923_bosluk_0906.js` | Honolulu | **HAKLI** | tam | yamanın amacı (`abd 1898→1923`) 7c51072e'de ELLE indi; yama `hawaii-kralligi`ni düşürürdü |
| 2 | `yer_yama_1923_bosluk_0906.js` | Timbuktu | **HAKLI** (parça yama) | 🔴 **EKSİK** | HÜKÜM VARDI, UYGULANMADI: HUKUM-CAKISMA-KUTAISI-TIMBUKTU-0906 "parça yama YOK, TEK ve TAM zincir" |
| 3 | `yer_yama_doguasya.js` | Mergen (Nenjiang) | **HAKLI** | tam (daha iyi) | bugünkü `kur:1686` kaynaklı (Reardon-Anderson); yamanın `qing 1636` yılı kendi beyanıyla kaynaksız |
| 4 | `yer_yama_litvanya.js` | Çehrin (Çigirin) | **HAKLI** | tam (daha iyi) | yama `lehistan`ı kuşatma BAŞINDA (07-19) bitirip 33 günlük delik açardı; veri alınış gününde (08-21, TDV) |
| 5 | `yer_yama_silistre_0906.js` | Silistre | **HAKLI** | tam (daha iyi) | 1402-1419 Eflak (TDV `silistre`, b23589e8) ve 1913-08-10 Bükreş (874940ee) sonradan, kaynakla düzeltildi |
| 6 | `yer_yama_timbuktu.js` | Timbuktu | **HAKLI** (parça yama) | 🔴 **EKSİK** | #2 ile aynı vaka |
| 7 | `yer_yama_uyg3.js` | Şehrizor | **HAKLI** | tam (daha iyi) | ikinci fetih 1638-12-24 → **1630-03-16** (TDV `sehrizor` 1630 + Kılıç 2001 gün), 8b061de9 |

⇒ **7 atlamanın 7'si de kendi başına haklı** (hiçbir yama olduğu gibi uygulanmamalı). Ama **Timbuktu'da veri EKSİK:** dört parça yamanın
yerine geçen TAM zincir (`yer_yama_timbuktu_tam_0906.js`, 415d18ac'de `data/`ye indi) **hiç uygulanmadı** — tam koşuda beş Timbuktu yaması
"ÇAKIŞMA" diye, tek tek koşuda iki parça "KAPSAM DARALDI" diye atlanıyor. Timbuktu bugün **1700'den 1923'e SAHİPSİZ** (Değişmez 1c'nin
4 BELGESİZ'inden biri). Diff bunu kapatıyor.

## ① Kayıt kayıt — ne istiyordu · bugün ne · fark
Ölçüm yolu: her yama tek başına `py arac/_sahiplik_uygula.py --yama-glob '^<dosya>$'` (kuru, `--taban` yok) — 6 dosyanın 6'sı **çıkış 0**;
bugünkü kayıt `girdi.yukle()` ile; sonraki commit'ler `git log -S` ile; TDV maddeleri `curl` GET (5/5 **200**: tinbuktu 104.869 B ·
timbuktu · cehrin-seferi · silistre · sehrizor) ve gövdeden alıntı ayrıştırıldı.

### 1 · Honolulu — HAKLI
- **Yama** (7c51072e, 6 Eyl): `s:[abd 1898-08-12→1923-10-29]` · kaynak = atlasın kendi çapası (`hawaii-kralligi t:1898-08-12`).
- **Bugün** (`yerlesimler_4ff22b.js`): `hawaii-kralligi 1795-01-01→1898-08-12` · `abd 1898-08-12→1923-10-29`.
- **Fark:** yama `s:`i BÜTÜN değiştirir ⇒ `hawaii-kralligi`yi siler (aracın bastığı kayıp `1795-01-01→1898-08-12`). Amaç zaten karşılanmış:
  7c51072e'nin mesajı "uygulayıcı Honolulu'yu YARIM uyguladı … `s:` elle eklendi" diyor. Bugünkü `kaynak:` yamanınkinden zengin
  (TDV hawaii/honolulu/havai 302 ÖLÜ beyanı, a3846de5).
- 🟡 Tam koşuda ayrıca `yer_yama_1923_1945.js` ile ÇAKIŞMA (Z5 — ayrı iş).

### 2 + 6 · Timbuktu — atlama HAKLI, veri EKSİK
- **Parça yamalar:** `1923_bosluk_0906` → `s:[fransa-cumhuriyet 1894→1923]` · `timbuktu.js` (d041a080, 5 Eyl) → 1760-1923 altı dönem.
  İkisi de 1281-1700'ü siler (kayıp `1281→1430; 1468→1700`).
- **Hüküm ZATEN VAR:** `denetim/HUKUM-CAKISMA-KUTAISI-TIMBUKTU-0906.md` §④: "ok107 · timbuktu · 1923_bosluk üçünden Timbuktu `s:` kayıtları
  DÜŞÜRÜLÜR · yerine TEK ve TAM zincir yazılır · belgesiz7'nin `bos:kabile` beyanı KORUNUR". TAM zincir `yer_yama_timbuktu_tam_0906.js`te
  (fas 1700→**1750** + yeni `arma 1750→1760`). 7c51072e'nin mesajı da Timbuktu'yu "elle karar gerekiyor, bu turda dokunulmadı" diye bırakmış.
- **Bugün** (`yerlesimler.js:1048`, `git log -S` ⇒ kayda 28 Temmuz'dan beri DOKUNULMAMIŞ): `mali 1281→1430 · songhay 1468→1591-04-13 ·
  fas 1591-04-13→1700-01-01` — **1700 sonrası 223 yıl sahipsiz.** Kesitte sahipsiz: 1440, 1460, 1700, 1720 … 1920 (14 kesit).
- **Neden hiç inmedi:** tam koşuda 5 yama (`1923_bosluk` · `belgesiz7` · `ok107` · `timbuktu` · `timbuktu_tam`) farklı içerik ⇒ ÇAKIŞMA;
  TAM tek başına koşturulunca **çıkış 3** (taban beyansız). Hüküm parça yamaları düşürmeyi söylüyordu, düşürülmedi ⇒ çakışma kalıcı.
- **Kaynak (GET 200, gövde ayrıştırıldı — TDV `tinbuktu`):** «1163'te (1750) Tinbüktü'de yönetimi ele geçirdiler» · «1760'ta Tevârikler'in
  zaptettiği Tinbüktü on yıl sonra Segu Bambaraları'nın…» · «Tevârikler 1792'de yönetimi tekrar aldılar» · «1894'te Fransız işgal ordusu…».
  Hepsi TUTTU.
  - 🟡 **1770 türetilmiş** («on yıl sonra»), yama zaten damgalamış.
  - 🟡 **1833 — D211 ⑥/⑧ uyarısı (yeni):** cümle «1833'te Ahmedü Lobbo … tarafından **kurulan** Mâsînâ Sultanlığı, 1860'lı yıllarda … Ahmed
    Tâl'in egemenliğine geçti». Rakam dilbilgisel olarak KURULUŞU tarihliyor (künye `massina` 1818, Cambridge); "Timbuktu 1833'te Masina'ya
    geçti" okuması bir YORUMDUR. Künyenin kaynağı «halifelik Cenne ve Tinbuktu'yu hâkimiyeti altına aldı» diyor ama yıl vermiyor. Diff'teki
    `kaynak:` bunu açıkça yazıyor.
  - 🟡 **1862:** TDV «1860'lı yıllarda» (on yıl); yıl `massina` künyesinin kaynağından (Cambridge: 1862 Hamdullahi). Bu bir başka künyenin
    KAYNAĞI, künyenin günü değil (D207). `kaynak:`ta yazıyor.
  - 🟡 **fas 1700→1750 ÇIKARIMDIR:** TDV paşalığı «Merakeş'in idaresindeki Bilâdüssûdan» diye anıyor, bitiş yılı vermiyor; 1750 arma'nın
    yönetimi alışından. Eski 1700 de kaynaksızdı. Hükmü 1.MURAT TAM yamada vermiş. Komşu Gao `1700→1898` · Cenne `1700→1818` BEYANLI
    boşluk olarak duruyor ⇒ D206: Timbuktu'nun 1750'ye uzaması komşulardan farklı bir model. Petek açısından çelişki doğurmuyor
    (Değişmez 4/4c/4d/7-enklav değişmedi), ama koordinatör bilsin.
- **Künye ve renk sınavı (bugün ölçüldü):** arma 1750-01-01→1760-01-01 ✓ (renk `#24c0d2`) · tuareg-ivellemmedan 1281→1899 ✓ · bambara
  1650→1861-03-10 ✓ · massina 1818→1862-05-16 ✓ · tekrur 1852-09-01→1893-01-01 ✓ · fransa-cumhuriyet 1792→1945 ✓ · fas 1549→1945 ✓.
  Hepsi BOYALAR'da. Değişmez 4 hayalet **0→0**.
- **Kapanmayan:** 1893-01-01→1894-01-01 (tekrur künyesi bitti, TDV ilhak için 1894 diyor, arada kaynak yok — uydurulmadı) ⇒ Değişmez 1b'yi
  0→1 yapardı. Diff bunu `BEYAN_EDILEN_BOSLUK`a adıyla ekliyor (**İSTİSNA LİSTESİ = TAVAN AİLESİ, §3.4 ⑤: işçi önerir, koordinatör yazar**).

### 3 · Mergen (Nenjiang) — HAKLI
- **Yama** (d041a080, 5 Eyl, başlığı "YENİ NOKTA — MEVCUT KAYIT YOK"): `qing 1636-05-15→1912-02-12 · cin-cumhuriyeti→1923` +
  `bos:veri-yok` · kendi kaynağı: «KURULUŞ YILI BULUNAMADI ⇒ `kur:` YAZILMADI … 1685-1690 … yazmadım».
- **Bugün** (`yerlesimler_nokta_asya_0917.js`, ee6019e0, 17 Eyl D5-ASYA): `kur:"1686-01-01"` · `qing 1686-01-01→1912-02-12 ·
  cin-cumhuriyeti→1923`, kaynak Reardon-Anderson 2005 s.24 «Mergen (or Nenjiang, 1686)» + Lee 1970.
- **Fark:** yama 1636'yı (Qing'in ilanı; Mergen'in kuruluşu değil) yazardı ⇒ kaynaklı veri kaynaksızla ezilirdi. Bugünkü veri DAHA İYİ.
- 🔴 **YAN BULGU — koruma burada TESADÜFEN tuttu:** yamanın dönemleri `{"d":…,"f":…,"t":…}` sırasında ⇒ `ARALIK_RX` (`_sahiplik_uygula.py:956`)
  yamanın kapsamını **BOŞ** görüyor; kayıp bu yüzden `1686→1923` (TAMAMI) basılıyor. Anahtar sırası `f,t,d` olsaydı yeni kapsam
  (1636→1923) eskiyi KAPSARDI, kapsam koruması geçerdi ve araç kaynaklı 1686'yı kaynaksız 1636'yla **YAZARDI** (`kaynak`/`neden` dolu
  diye atlanır, `s` atlanmaz). ATLANAN-63-1010 §2b körlüğünün TERS YÖNÜ: orada eski kaydın dönemi görünmüyordu, burada yamanınki.

### 4 · Çehrin (Çigirin) — HAKLI
- **Yama** (d041a080): `litvanya 1281→1569-07-01 · lehistan 1569-07-01→1678-07-19 · lehistan 1699-01-26→1793 · rusya … sovyet-rusya→1923`, kaynak:"polonya".
- **Bugün:** `altinorda 1281→1362` (52222fa3, YAMA-A6B-0913 P-CEH-1) · `litvanya 1362→1569-07-01` · `lehistan 1569-07-01→1678-08-21` ·
  `d: 1678-08-21→1699-01-26` (d9cc5293, 16 Eyl) · sonrası yamayla aynı.
- **Fark:** yama `lehistan`ı 07-19'da bitiriyordu, Osmanlı `d:` 08-21'de başlıyor ⇒ 33 gün sahipsiz. TDV `cehrin-seferi` (GET 200): «Kuşatma
  21 Temmuz 1678 günü başladı» · «kale kuşatmanın 33. günü alındı (21 Ağustos 1678)» ⇒ devir alınış günüdür; yamanın 07-19'u kaynakta bile
  yok (kuşatma başı 07-21). Bugünkü veri DAHA İYİ (altinorda 1281-1362 de ayrıca kaynaklı).
- 🟡 **AYRI KALEM, ölçmedim (D204 "yeri yanlış"):** aynı TDV maddesi Çehrin'in 1668'den itibaren «Osmanlı himayesindeki Doroşenko»nun merkezi
  olduğunu, 1672'den sonra «Leh hâkimiyetine son verildiğini» ve Doroşenko'nun Çehrin'i Ruslar'a teslim ettiğini söylüyor. Veri
  `lehistan 1569→1678` tek blok. Bu atlamanın konusu değil; düzeltme yazılmadı.

### 5 · Silistre — HAKLI
- **Yama** (415d18ac, 7 Eyl): `bulgaristan 1281→1393-09-01 · Fetret zinciri (suleyman-celebi/musa-celebi) 1402-07-28→1413-07-05 ·
  bulgaristan-kralligi 1908-10-05→1913-05-30 · romanya-kralligi 1913-05-30→1923` · gerekçe: TDV `balkan-savasi`, Londra 30 Mayıs 1913.
- **Bugün:** `d: 1393-09-01→1402-07-28` · `eflak 1402-07-28→1419-01-01` · `d: 1419-01-01→1878-07-13` · `v` 1878→1908 ·
  `bulgaristan-kralligi 1908-10-05→1913-08-10` · `romanya-kralligi 1913-08-10→1923` · iki `isg:` (Rus 1810-11, 1829-36).
- **Fark:** ① 1402-1419: b23589e8 (5 Eki, "DOBRUCA ZİNCİRİ (A)") TDV `silistre`e göre düzeltti — GET 200, gövde: «Ankara Savaşı'nda (1402) …
  Mircea Silistre'yi tekrar aldı ve 1418'de ölümüne kadar elinde tuttu … 822 (1419) ilkbaharında Çelebi Sultan Mehmed'in Silistre'yi …
  tekrar almasına» ⇒ Fetret zinciri YANLIŞ, Eflak doğru. Kayıp `1413-07-05→1419-01-01` tam bu. ② 1913: 874940ee (5 Eki, PAKET-0076-BITIR-1004
  A8) "Londra Romanya'yı bağlamaz" diye **Bükreş 10 Ağustos 1913**e taşıdı; TDV `silistre` de «1913'te … II. Balkan Savaşı'nda mağlûp olması
  neticesinde Bükreş Antlaşması'na göre» diyor. Yamanın 05-30'u bilinçli bir kararla geçersiz kılınmış.
- 🟡 **YAN BULGU:** kaydın üst düzey `kaynak:` ve `not:` alanları hâlâ **bu yamanın metni** («Londra düzenlemesi, 30 Mayıs 1913 … devir
  II. Balkan Savaşı'ndan ÖNCEDİR») ⇒ dönemin kendi `kaynak:`ı (Bükreş) ile ÇELİŞİYOR. Düzeltme yazılmadı (yerleşim dosyası koordinatörün;
  ayrıca §4 TDV `balkan-savasi` cümlesi yeniden okunmadı).

### 7 · Şehrizor — HAKLI
- **Yama** (df818df6 / a16dc842, 28-29 Ağu, H-0002): `d: 1535-01-01→1550-01-01 · 1554-08-22→1623-11-28 · 1638-12-24→1918-10-30`.
- **Bugün:** `d: 1535→1550 · 1554-08-22→1623-11-28 · 1630-03-16→1918-10-30` · `s: … safevi 1623-11-28→1630-03-16 …`.
- **Fark:** yamanın 1535-1550 penceresi veride VAR (amaç karşılanmış). İkinci fetih 8b061de9'da (14 Eyl, UYGULA-BAGDAT / YAMA-BAGDAT-0914 B)
  1638-12-24'ten **1630-03-16**ya çekilmiş: TDV `sehrizor` (GET 200) «Gülanber Kalesi, Hüsrev Paşa zamanında yeniden inşa edildi (1630)» ✓
  gövdede; gün Remzi Kılıç (Türk Kültürü XXXIX/460, 2001), kayıt "güven ORTA, bu uygulamada yeniden OKUNMADI" diye beyanlı. Yama uygulansa
  1630-1638 Osmanlı penceresini silerdi (aracın bastığı kayıp `1630-03-16→1638-12-24`). Bugünkü veri DAHA İYİ.
- Tam koşuda ayrıca 5 yamalı ÇAKIŞMA (Z5 · manda · ok109_fetret · once1281_z6 · uyg3) — ayrı iş.

## ② Önerilen hüküm metinleri (63bb90dd biçiminde — KOORDİNATÖR YAZAR)
```
HÜKÜM "KAPSAM DARALDI" YEDİLİSİ — altısı yamanın BAYATLIĞI, biri UYGULANMAMIŞ HÜKÜM

Honolulu   YAMA BAYAT · hedefi 7c51072e'de ELLE indi (abd 1898-08-12→1923-10-29)
           ⇒ yer_yama_1923_bosluk_0906.js Honolulu `s:` HÜKÜMLE DÜŞER (yorum satırına)
Mergen     YAMA BAYAT + KAYNAKSIZ · veri ee6019e0'da kaynakla yazıldı (kur 1686,
           Reardon-Anderson 2005) · yamanın 1636'sı kendi beyanıyla kaynaksız
           ⇒ yer_yama_doguasya.js Mergen kaydı HÜKÜMLE DÜŞER
Çehrin     YAMA BAYAT · veri TDV cehrin-seferi'ne göre (alınış 21 Ağustos 1678, d9cc5293)
           yama `lehistan`ı kuşatma başında bitirip 33 gün delik açardı
           ⇒ yer_yama_litvanya.js Çehrin kaydı HÜKÜMLE DÜŞER
Silistre   YAMA BAYAT · 1402-1419 Eflak (TDV silistre, b23589e8) · 1913-08-10 Bükreş
           (874940ee, PAKET-0076-BITIR-1004 A8) yamanın iki kararını da kaynakla geçersiz kıldı
           ⇒ yer_yama_silistre_0906.js Silistre `s:` HÜKÜMLE DÜŞER
           🟡 kaydın üst `kaynak:`/`not:` alanı hâlâ yamanın Londra metni — ayrı kalem
Şehrizor   YAMA BAYAT · 1535-1550 penceresi veride; ikinci fetih 1630-03-16'ya çekildi
           (TDV sehrizor 1630 + Kılıç 2001, 8b061de9) ⇒ yer_yama_uyg3.js Şehrizor `d:` HÜKÜMLE DÜŞER
Timbuktu   ATLAMA HAKLI, VERİ EKSİK · HUKUM-CAKISMA-KUTAISI-TIMBUKTU-0906 hiç uygulanmamıştı
  (iki kayıt) ⇒ TAM zincir (yer_yama_timbuktu_tam_0906.js) veriye ELLE iner, dört parça
           yamanın Timbuktu kaydı HÜKÜMLE DÜŞER, 1893-1894 BEYAN_EDILEN_BOSLUK'a girer
           (YER-YAMA-SESSIZ-7-1010-KOORD.diff)
⚠️ Yedisinde de yama OLDUĞU GİBİ uygulanmaz. Koruma haklıydı; kusur, haklı atlamanın
   ÇIKIŞ 0 ile ve HÜKÜMSÜZ kalması (ATLANAN-63-1010 §6) — her koşuda aynı yedi satır
   yeniden basılıyor ve kimse kapatmıyor.
```
"HÜKÜMLE DÜŞER" biçimi: `yer_yama_uyg3.js`teki Halepçe emsali (alan yorum satırına alınır, başına hüküm/kazanan/uygulayan yazılır, dosya
silinmez). Beş HAKLI kayıt için bu düzenlemeyi diff'e KOYMADIM (görev: diff yalnız EKSİK için); istenirse aynı betikle 5 dk'lık iş.

## ③ Diff — `YER-YAMA-SESSIZ-7-1010-KOORD.diff` (141 satır, 6 dosya)
| dosya | değişiklik |
|---|---|
| `data/yerlesimler.js` | Timbuktu: TAM zincir (10 dönem; fas →1750, +arma 1750-1760, +6 dönem 1760-1923) · `bos:"kabile"` + `neden:` (1430-1468 kabile, 1893-1894 veri-yok) · `kaynak:` genişletildi (1770/1833/1862/fas-1750 çıkarımları AÇIKÇA damgalı) |
| `arac/denetle.py` | `BEYAN_EDILEN_BOSLUK` += `("Timbuktu","1893-01-01","1894-01-01")` gerekçeli — 🔴 istisna listesi, **koordinatör kararı** |
| `data/yer_yama_1923_bosluk_0906.js` · `yer_yama_timbuktu.js` · `yer_yama_ok107.js` · `yer_yama_belgesiz7.js` | Timbuktu kaydı uyg3 biçiminde yorum satırına (hüküm 0906 ①; ok107 ve belgesiz7 yedinin dışında ama hüküm dördünü de sayıyor — çakışmanın kalkması için şart) |
- CRLF: dosyalar çalışma ağacında CRLF, depo LF (`core.autocrlf=true`); diff `git diff` çıktısı ⇒ temiz origin/main `68bcd6c0` üzerinde
  **`git apply --check` ✓**. Düzenleme Python ile bayt düzeyinde, CRLF korunarak yapıldı (betik scratchpad'de).
- Dört parça yama düzenlemeden sonra `node` ile yüklendi: ok107 0 kayıt · timbuktu 0 · belgesiz7 2 (Somali çölü, Ogaden) · 1923_bosluk 3
  (Honolulu, Agadez, Hadramut) — sözdizimi ✓.
- **Uygulayıcı kuru koşusu sonra:** TAM yama tek başına **çıkış 0, zaten-boyle 1** (bos/kaynak/neden dolu, ezilmedi) · `timbuktu.js` / `ok107`
  0 ad · `1923_bosluk` yalnız Honolulu KAPSAM DARALDI (beklenen, HAKLI) · tam koşu: `cakisma 772→771`, `zaten-boyle 50→51`, Timbuktu
  ÇAKIŞMA satırı KALKTI, `kapsam-daraldi 15→15` (Timbuktu tam koşuda zaten çakışma kovasındaydı).

## ④ `denetle.py --ayrinti` önce/sonra (PYTHONHASHSEED=0, `C:\atlas-umit-ys7`, ikisi de çıkış 2 = D8 ölçülemedi, beklenen)
| sayaç | önce | sonra | not |
|---|---|---|---|
| Değişmez 1 sahipsiz | 309 | **309** | Timbuktu 1440/1460 kesitlerinde hâlâ sahipsiz (1430-1468 beyanlı) — kesit listesi 14 → 2 |
| **Değişmez 1c BELGESİZ** | 4 (Agadez · Darfur · Hadramut · Timbuktu) | **3** (Timbuktu çıktı) · belgeli 305→306 | araç: "⚠️ TAVAN GEVŞEK — BEKLENEN_BELGESIZ = 3 yapılmalı" — §3.4 ③ gereği tavan iner; değeri yazmadım (koordinatör) |
| **Değişmez 1b** | 0 beyansız · beyanlı 7/7 | 0 beyansız · **beyanlı 8/8** | diff'teki beyan OLMADAN 1b 0→1 = İHLAL olurdu |
| **Değişmez 2s** | 1805 kırılma · 193 AÇIK · 793 KAPSAM DIŞI · 228 YIL-TEMSİLÎ | **1807** · **193** · **792** · **231** | AÇIK değişmedi (tavan 193 tutuyor); yıl-temsilî borç +3 (zincir YYYY-01-01) — ihlal değil, uyarı eşiği 151 zaten aşıktı |
| Değişmez 7 muaf cografi-tecrit | 4711 | 4718 | enklav sayısı 800 değişmedi |
| Değişmez 2 · 2i · 2t · 4 · 4c · 4d · 4s · 5 · 8 | — | **değişmedi** | |
Başka fark yok (`diff` 28 satır, hepsi yukarıda).

**Bekleyen diff'lerle temas:** KRONO-ONCE1281 A/B/C (`olaylar_once1281_*.js` + `index.html`) · IZNIK-1097 (`devletler.js`, `kronoloji_anadolu.js`)
· ZAMAN-Z5 v3 (`yer_yama_1923_1945.js`) — **dosya kesişimi 0**, hiçbirinde "Timbuktu" geçmiyor. Sayaç teması: KRONO-ONCE1281'in 2s/2t
sayaçlarına dokunması olası (madde ekliyor) ama Timbuktu kırılmaları 1750-1894 arasında, 1281 öncesi madde onları kapatmaz/açmaz.
🔴 **Z5 v3 ile MANTIKSAL temas:** Z5 Timbuktu'yu İÇERMİYOR (bugün Timbuktu 1700'de bittiği için uzatacak dönem yoktu). Bu diff Timbuktu'yu
`fransa-cumhuriyet →1923-10-29` ile bitiriyor ⇒ Z5 v3 inip ufuk 1945'e açılınca Timbuktu **1923-10-29→1945 arasında kuyruk boşluğu**
kalır (`fransa-cumhuriyet` künyesi 1945-09-02'ye kadar). Sırayla inerlerse Z5'e bir Timbuktu satırı gerekir; ölçmedim.

## Ölçtüm · bulamadım · istiyorum
- **Ölçtüm:** ① 6 yama dosyası tek tek kuru: 6/6 çıkış 0, 7 KAPSAM DARALDI satırı ATLANAN-63-1010 ile birebir. ② 7 kaydın bugünkü hâli ve
  yamadan sonra dokunan commit'ler (7c51072e · ee6019e0 · d9cc5293 + 52222fa3 · b23589e8 + 874940ee · 8b061de9; Timbuktu'ya 28 Tem'den beri
  0 commit). ③ TDV GET 5/5 200, alıntılar gövdede bulundu (tinbuktu 1750/1760/1792/1894 · cehrin-seferi 21 Temmuz/21 Ağustos 1678 ·
  silistre Mircea 1402-1418/1419, Bükreş 1913 · sehrizor 1630). ④ 7'nin 7'si atlama HAKLI; Timbuktu'da veri EKSİK — hükmü 6 Eylül'de
  verilmiş, uygulanmamış. ⑤ Diff `git apply --check` ✓ (origin/main 68bcd6c0); denetle farkı: 1c 4→3, 1b beyanlı 7→8, 2s 1805→1807 /
  AÇIK 193→193 / kapsam dışı 793→792 / yıl-temsilî 228→231; öteki değişmezler sabit. ⑥ Mergen'de `ARALIK_RX`'in TERS yön körlüğü: yamanın
  `d,f,t` sıralı dönemleri görünmüyor, koruma tesadüfen tutuyor.
- **Bulamadım:** Timbuktu 1893-1894 için kaynak (TDV `tinbuktu` «1894», tekrur künyesi `el-hac-omer` «1893-1894 yıllarında»); 1833'ün
  Timbuktu için yıl olduğunu söyleyen açık bir cümle (TDV cümlesi kuruluşu tarihliyor); fas'ın Timbuktu'da 1700 ya da 1750'de bittiğini
  söyleyen cümle. Çehrin 1668-1678 (Doroşenko/Rus) dönemi ölçülmedi. Silistre üst `kaynak:` çelişkisi düzeltilmedi. Honolulu TDV ölü-slug
  beyanı yeniden GET edilmedi.
- **İstiyorum (hüküm koordinatörde):** ① `YER-YAMA-SESSIZ-7-1010-KOORD.diff`in inişi (veri + `BEYAN_EDILEN_BOSLUK` AYNI commit'te — §3.4 ②)
  ve aynı commit'te `BEKLENEN_BELGESIZ 4→3` (§3.4 ③; aletin kendi uyarısı). Sonra `py arac/renk_olc.py` (`arma` ilk kez sahneye çıkıyor —
  TAM yamanın kendi notu). ② Beş HAKLI kayıt için ② bölümündeki hüküm metni + yamalarda "HÜKÜMLE DÜŞTÜ" düzenlemesi (istenirse diff'ini
  yazarım). ③ Z5 v3 ile sıra: önce bu diff inerse Z5'e Timbuktu 1923→1945 satırı gerekir. ④ Ayrı kalemler: Çehrin 1668-1678 Doroşenko/Rus
  dönemi (D204) · Silistre üst `kaynak:`/`not:` çelişkisi · `ARALIK_RX` anahtar sırası körlüğü (iki yön de ölçüldü).

---

## § v2 — koordinatör hükmü sonrası (10 Ekim 2026)
Hüküm (üç mesaj): Timbuktu diff'i koşudan sonra iner · istisna YAZILIR, gerekçe üç şeyi birebir taşır · yamaya ŞERH YASAK ·
"hükümle devre dışı" (yoruma alma) yalnız ayrı diff + SHA'lı dayanak + satır silinmeden, ve **yalnız (a) bir kapıyı bozarsa** ·
iniş sırası SAHIPLIK-KAPSAM-1010 → SESSIZ-7 → Z5 v4.

### v2 diff — `YER-YAMA-SESSIZ-7-1010-KOORD-v2.diff` (35 satır, 2 dosya) = seçenek (a)
| dosya | değişiklik |
|---|---|
| `data/yerlesimler.js` | Timbuktu TAM zinciri (v1 ile aynı) · `neden:` 1893-1894 cümlesi yeniden yazıldı: "bir yıllık BİLİNMEZLİK, tasarım tercihi DEĞİL … 1893 ya da 1894 için gün/yıl veren bir kaynak bulunduğunda bu boşluk ve denetle.py istisnası DÜŞER" |
| `arac/denetle.py` | `BEYAN_EDILEN_BOSLUK` += `("Timbuktu","1893-01-01","1894-01-01")`; gerekçe üç şartı BİREBİR taşıyor: ① iki kaynak adıyla — `tekrur` künyesi `t:"1893-01-01"` + künyenin `kaynak:` alanı (TDV `el-hac-omer` «1893-1894 yıllarında», `mali` çelişkisi künyede kayıtlı) · TDV `tinbuktu` «1894'te Fransız işgal ordusu şehri Batı Afrika sömürgesine ilhak etti.» ② "bir yıllık BİLİNMEZLİK, tasarım tercihi DEĞİL" ③ "DÜŞME ŞARTI: 1893 ya da 1894 için gün/yıl veren bir kaynak bulunduğunda bu istisna DÜŞER." |
| yama dosyaları | **DOKUNULMADI** (ne şerh ne yorumlama) |
- `git apply --check` ✓ temiz origin/main **`2d931a6f`** üzerinde (ayrı worktree). CRLF: çalışma ağacı CRLF, depo LF (`autocrlf=true`), diff `git diff` çıktısı.
- v1 diff diskten kaldırıldı. (b) için ayrı diff (`…-DEVREDISI.diff`) **YAZILMADI** — (a) hiçbir kapıyı bozmadı (aşağıda).

### Ölçüm — taban ① bugünkü main `2d931a6f` (PYTHONHASHSEED=0)
**denetle.py --ayrinti** (önce = temiz main · sonra = main + v2; ikisi de çıkış 2 = D8 ölçülemedi, beklenen): fark v1 ile **birebir aynı**
| sayaç | önce | (a) sonra |
|---|---|---|
| Değişmez 1 sahipsiz | 309 | 309 (Timbuktu kesitleri 14 → 2: 1440, 1460) |
| Değişmez 1c BELGESİZ | 4 | **3** (Timbuktu çıktı; araç "TAVAN GEVŞEK — BEKLENEN_BELGESIZ = 3 yapılmalı") |
| Değişmez 1b | 0 beyansız · beyanlı 7/7 | 0 beyansız · **beyanlı 8/8** |
| Değişmez 2s | 1805 · AÇIK 193 · kapsam dışı 793 · yıl-temsilî 228 | 1807 · **AÇIK 193** · 792 · 231 |
| Değişmez 7 muaf cografi-tecrit | 4711 | 4718 (enklav sayısı değişmedi) |
| öteki bütün değişmezler | — | değişmedi |

**772 → 771 sorusu — CEVAP: düşüşü YORUMLAMA getiriyordu, zincir DEĞİL.** Tam kuru koşu (`_sahiplik_uygula.py`, glob varsayılan):
| | önce (main) | (a) main + v2 | (b) v1 (yorumlamalı, 7a613d9e'de ölçülmüştü) |
|---|---|---|---|
| `cakisma` | 772 | **772** | 771 |
| Timbuktu satırı | ÇAKIŞMA (5 yama) | **ÇAKIŞMA (5 yama) — aynen** | yok (yalnız kaynak/bos/neden dolu) |
| `zaten-boyle` | 50 | 50 | 51 |
| `kapsam-daraldi` | 15 | 15 | 15 |
| çıkış | 2 (geri alma BAYAT: İştip vb.) | 3 ⚠️ | 3 ⚠️ |
⚠️ (a) ve (b)'nin çıkış 3'ü **ölçüm artefaktıdır**: geri alma kapısı "hedef dosya COMMİTLENMEMİŞ değişiklik taşıyor: data/yerlesimler.js
⇒ ölçülemedi" diyor (diff worktree'de uygulanmış ama commit'lenmemiş; commit/push YOK kuralı gereği commit'lemedim). İnişten sonraki
gerçek çıkış kodu bu ölçümle BİLİNMİYOR; sayaçlar (kapıdan önce basılan) geçerli.
⇒ Çakışma kovası yamaların İÇERİĞİNİ karşılaştırır, veriyi değil: tam zincir veriye yazılsa da beş Timbuktu yaması birbirinden farklı
olduğu sürece Timbuktu tam koşuda ÇAKIŞMA'da kalır. Yamalara dokunmadan bu kovayı boşaltmanın yolu bugünkü araçta YOK
(çare araçta olurdu: "veri zaten bir yamaya eşitse çakışma sayma" — öneri, yazmadım).

**Tek tek kuru koşu — parça yamalar (a)'da hangi kovaya düşüyor, ADIYLA** (bu gecenin sessiz atlama sınıfı):
| yama | önce (main) | (a) main + v2 | çıkış (a) |
|---|---|---|---|
| `yer_yama_1923_bosluk_0906.js` · Timbuktu | KAPSAM DARALDI `1281→1430; 1468→1700` | KAPSAM DARALDI `1281→1430; 1468→1893` | **0 — SESSİZ** |
| `yer_yama_timbuktu.js` · Timbuktu | KAPSAM DARALDI `1281→1430; 1468→1700` | KAPSAM DARALDI `1281→1430; 1468→1760` | **0 — SESSİZ** |
| `yer_yama_ok107.js` · Timbuktu | **uygulandı** (s+bos+neden+not; s bugünküyle aynı) | 🔴 **YENİ:** KAPSAM DARALDI `1700→1893; 1894→1923-10-29` (+bos/neden dolu) | **0 — SESSİZ** |
| `yer_yama_belgesiz7.js` · Timbuktu | uygulandı (bos+neden) | zaten-böyle / bos-neden dolu | 0 (atlama değil) |
| `yer_yama_timbuktu_tam_0906.js` · Timbuktu | uygulanırdı ama **çıkış 3** (taban beyansız) | **zaten-böyle** | 0 (atlama değil) |
⇒ (a)'da Timbuktu'nun sessiz atlaması **2 → 3** olur (ok107 sınıfa KATILIR — tam zincir onun 1700 sonrası "eksik"liğini daralmaya
çevirdi). Üçü de **bugünkü araçta çıkış 0**. Hiçbiri yıkıcı yazım yapmıyor (üçü de atlanıyor) ⇒ **(a) bir kapıyı BOZMUYOR**, yalnız
bilinen sessiz sınıfı büyütüyor. SAHIPLIK-KAPSAM-1010 ("kapsam atlaması ⇒ 2") inince bu üç kayıt görünür olacak ve tek tek koşuda
çıkış 2 verecek — beklenen; o noktada ya yoruma alma (b, ayrı diff, dayanak `63bb90dd`/`HUKUM-CAKISMA-KUTAISI-TIMBUKTU-0906`) ya da
araçta bir hüküm-listesi gerekecek. Karar koordinatörün.

### (a) ↔ (b) karşılaştırma
| | (a) yamalara dokunmadan — **v2 varsayılan** | (b) dört parça kaydı yoruma alarak (v1'deki gibi, ayrı diff olurdu) |
|---|---|---|
| veri (Timbuktu zinciri) | iner | iner |
| denetle sayaçları | 1c 4→3 · 1b 8/8 · 2s +2/AÇIK 193 | **aynı** |
| tam koşu `cakisma` | 772 (Timbuktu kalır) | 771 (Timbuktu çıkar) |
| tek tek sessiz atlama (Timbuktu) | **3** (bosluk_0906 · timbuktu · ok107) | **0** |
| KAPSAM-1010 inince | 3 kayıt çıkış 2 verir (görünür borç) | etkisiz |
| yama kaydı | el değmemiş | yorumda (satır silinmeden) |
| kapı bozuyor mu | HAYIR | HAYIR |

### Taban ② main + `SAHIPLIK-KAPSAM-1010.diff` — **ÖLÇÜLEMEDİ: KAPSAM diff'i bekleniyor**
`C:\atlas-umit\denetim\SAHIPLIK-KAPSAM-1010*` diskte YOK (10 Ekim, bu teslim anında). Ne ikinci tabanda koşu ne de "KAPSAM'dan sonra
`git apply --check`" yapılabildi. Dosya gelince ölçülecekler: üç parça yamanın tek tek çıkışı (beklenen 2), tam koşu çıkışı, v2'nin
KAPSAM üstüne `apply --check`'i (v2 `arac/denetle.py` + `data/yerlesimler.js`e dokunuyor; KAPSAM büyük olasılıkla
`arac/_sahiplik_uygula.py`ye dokunur ⇒ dosya kesişimi beklenmez, ama ölçülmedi).

### v2 — ölçtüm · bulamadım · istiyorum
- **Ölçtüm:** v2 = (a), 2 dosya, `apply --check` ✓ `2d931a6f`. denetle farkı v1 ile aynı. 772→771'i yorumlama getiriyordu; (a)'da 772 kalır.
  (a)'da Timbuktu'nun sessiz atlaması 2→3 (ok107 yeni), üçü çıkış 0; yıkıcı yazım 0 ⇒ kapı bozulmadı ⇒ (b) diff'i yazılmadı.
- **Bulamadım:** SAHIPLIK-KAPSAM-1010.diff (taban ② ölçülemedi). (a)'nın iniş sonrası gerçek tam-koşu çıkış kodu (commit'siz worktree'de
  geri alma kapısı 3 veriyor — artefakt).
- **İstiyorum:** ① v2'nin koşudan sonra inişi + aynı commit'te `BEKLENEN_BELGESIZ 4→3` (§3.4 ②③) + `renk_olc.py`. ② KAPSAM-1010 gelince
  taban ② için yeniden çağrılmak. ③ (a)'nın bıraktığı 3 görünür borç için hüküm: (b) ayrı diff mi, araçta hüküm listesi mi.
