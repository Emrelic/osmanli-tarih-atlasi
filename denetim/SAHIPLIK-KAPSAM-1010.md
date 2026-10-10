# SAHIPLIK-KAPSAM-1010 (v2) — `_sahiplik_uygula.py`: kapsam kusurları + hüküm listesi + hızlı kip + denetle köprüsü

UMIT yazıcı · 10 Ekim 2026 · teslim DİFF (commit/push YOK, stash YOK, C:\atlas'a yazılmadı) · `--check` tabanı **origin/main `d50ddbed`** (sınavlar `7a613d9e`/`7b542dc4` üzerinde; aradaki commitler `data/` ve bu diff'in dosyalarına DOKUNMUYOR — ölçüldü).
Diff: **`denetim/SAHIPLIK-KAPSAM-1010-v2.diff`** (v1'in YERİNE; v1 diskten kaldırıldı; 8 dosya; v2 farkı §10) — LF, BOM yok, CR 0; temiz origin/main ağacında `git apply --check` ✓;
`YER-YAMA-SESSIZ-7-1010-KOORD-v2.diff` ile **iki sırada** da `--check` ✓ (KAPSAM→SESSIZ ✓ · SESSIZ→KAPSAM ✓; ortak
dosya `arac/denetle.py`, hunk'lar ayrı: SESSIZ-7 `:1396`, bu diff `:6526+` ve `main()`).
Tuz dosyalarına (uret_petek · renkler · girdi · motor_onbellek · gun · yukseklik) DOKUNULMADI; `girdi._cevir` yalnız İTHAL edildi.

YENİ DOSYALAR: arac/_hukum_listesi.py · denetim/ARAC-SAHIPLIK-KAPSAM-SINAV-1010.py · denetim/SAHIPLIK-HUKUM-LISTESI.json · denetim/SAHIPLIK-TABAN-OLCULEMEDI.json
DEĞİŞEN DOSYALAR: arac/_sahiplik_uygula.py · arac/_bayat_yama_kapi.py · arac/denetle.py · denetim/ARAC-SAHIPLIK-BAYAT-TABAN-SINAV-1009.py

## 0. Kısa hüküm
| kalem | önce | sonra |
|---|---|---|
| ① kapsam atlaması çıkışı | çıkış 0, "TAZE" | **çıkış 2**, hiçbir dosya yazılmaz; kova kova `ATLAMA_CIKIS` tablosu |
| ② `ARALIK_RX` körlüğü | `{f,d,kaynak,t}`, `{d,f,t}` … GÖRÜNMEZ (bugün **252 dönem / 150 kayıt**) | kapsam `girdi._cevir`den; desen KALKTI; 48 anahtar sırasında TEK sonuç |
| ③ kontrol sırası | daralan kaydın bayatlığı hiç ölçülmüyordu | daralan kayıt taban sorusuna GİRER, iki kovada ADIYLA |
| ④ ATLANAN bloğu | yok (commit mesajında iz yoktu) | her çıkış yolunda `ATLANAN (n): ad [kova] · …` + `ATLAMA KOVALARI:` |
| ⓑ hüküm listesi | kasıtlı ≡ kaza atlaması | `denetim/SAHIPLIK-HUKUM-LISTESI.json` (5 satır); dayanaksız/ölü satır ⇒ 3 |
| ⓐ denetle liste denetimi | — | `hukum_listesi_rapor`: dayanak · dayanaksız · ucuz ölü ⇒ OLCULEMEDI_KOVA |
| hızlı kip + denetle köprüsü | — | `--atlama-yalniz --json` (12 sn) · denetle JSON'u §3'e çevirir: listeli 0 · listesiz 2 · yıkıcı 1 |
| kök / log / git hatası | `KOK = os.getcwd()` | kök aracın yolundan + `rev-parse --show-toplevel` (uyuşmazsa 3) · satır tamponlu · dönüş kodlu git hatası |

🔴 **Ölçülmüş yan sonuç (koordinatörün haberi olsun):** bu diff inince `py arac/denetle.py` bugünkü veride **çıkış 2**
verir (önce de 2'ydi — Değişmez 8 `devletler_harita.js` yok; şimdi ölçülemeyen soru **1 → 196**): **195 listesiz atlama**
ADIYLA kovaya düşer (§7). İhlal (1) YOK, yıkıcı 0. Süre 126 → 157 sn (hızlı kip 10-16 sn; ölçüm sırasında makinede
paralel koşular vardı).

## 1. Üç kusurun satırları (origin/main `_sahiplik_uygula.py`) ve çare
| kusur | eski satır | çare (yeni dosyada) |
|---|---|---|
| ① atlama çıkışa girmiyor | atlamalar `atlanan`a düşüyor, karar `:1530-1596`te yalnız 1/2/3/4 kapı yollarından | `ATLAMA_CIKIS` (`:1150`) + `_atlama_kodu`; `⑧c` (`:1968`) ihlal(2) > ölçülemedi(3); 4'lü kovalar en sonda |
| ② `ARALIK_RX` | `:956` desen · `:959 _dilim` · `:968 araliklar` | SİLİNDİ. `_kayit_nesnesi` + `_kayit_cevir` (motorun okuyucusu) + `kapsam()` (`:1032-1100`); kayıt `{…}` sınırı tarayıcıda saklanır (`nesne_sinir`) |
| ③ sıra | `:1240-1244` `continue` → kayıt `taban_aday`a hiç girmiyor (`:1263`) | daralan kayıt `taban_aday`a girer (`:1418`); yazılmayacağı için taban sonucu ADIYLA basılır ama çıkışı kapsam belirler |

**② ayrıntı:** bugünkü veri ve yamalı kayıt AYNI ayrıştırıcıdan geçer (`satir_orj` ve `yeni_satir` → kaydın kendi
`{…}` metni → `window.X = [ … ];` sarmalı → `girdi._cevir`). Tarihler dizgi değil sayı üçlüsü (`-0500` < `-0300`; eski
dizgi karşılaştırması MÖ'de yanlıştı). Ayrıştırılamayan kayıt / `f`-`t`'si eksik dönem / çözülmeyen tarih ⇒
**`kapsam-olculemedi`** (çıkış 3) — sessizce "kayıp yok" denmez.
Bugünkü 93 girdi dosyasında eski desenin göremediği d·s·v dönemi: **252 / 16.485, 150 kayıtta** (aracın kendi kayıt
tarayıcısı + eski desen, kayıt kayıt). Anahtar sırası dökümü (motorun okuyucusuyla, 266): `{d,f,t}` **173** ·
`{f,d,kaynak,t}` **76** · `{f,kesinlik,t,d}` 6 · `{f,kaynak,t,d}` 6 · `{f,kaynak,t}` 3 · `{f,kesinlik,kaynak,t}` 2.
(ATLANAN-63'ün "110" sayısı yalnız `{f,…}` ile başlayanı sayıyordu; `{d,f,t}` ailesini — Mergen yönü — saymıyordu.)

**② İKİ YÖN:** körlük yalnız yanlış ATLAMA değil yanlış KORUMA da üretiyordu. Mergen (Nenjiang) gerçek vakası:
yama dönemleri `{d,f,t}` → eski desen yamanın kapsamını BOŞ gördü → "KAPSAM DARALDI 1686→1923" dedi ve kaydı
TESADÜFEN korudu. Gerçekte yama GENİŞLETİYOR (1636 < 1686). Yeni araç kapsamı doğru görür (daralma YOK) ve kaydı
DOĞRU sebeple durdurur: `TABAN-OLCULEMEDI` — `--taban d041a080` (yamanın commit'i) ile "kayıt YOK": Mergen kaydı
yamadan **12 gün sonra** (`ee6019e0`, 17 Eyl) doğdu. Çıkış 3, hiçbir şey yazılmaz, iki sırada AYNI.
⚠️ Koordinatörün "f,t,d olsaydı kur:1686'yı EZERDİ" cümlesi ölçüldü: eski araç f,t,d sırasında **taban kapısıyla**
(bayat/ölçülemedi) yine durur; ancak yamaya `taban:` = bugün beyanı yazılırsa (taze ama yanlış) ESKİ de YENİ de
yazar — çünkü sözleşme "genişleme serbest"tir. `kur:` ile çelişen (kur'dan önce başlayan) dönem bugün HİÇBİR kapının
sorusu değil → **bulamadım/açık sınıf** (§9).

### ATLAMA_CIKIS — sebep sebep (§6a'nın her satırı)
| kova | kod | gerekçe |
|---|---|---|
| `kapsam-daraldi` | **2** (yazılmaz) | BAYAT ailesi: uygulansa gün SİLER (koordinatör hükmü) |
| `kapsam-olculemedi` | **3** (yazılmaz) | kapsam ayrıştırılamadı — ölçülemedi ≠ temiz |
| `taninmadi` | 4 | 1008'den beri 4 (motor okuyor, araç göremiyor) |
| `cipa-yok` · `mukerrer-anahtar` · `satir-paylasimli` | 4 | araç İNDİREMEDİ — yama doğru olabilir, yazıcı yazamıyor |
| `cakisma` · `belirsiz` · `veride-yok` · `gun-maddesiz` | 4 | ⚠️ **EMİN DEĞİLİM → varsayılan YANSIR** (koordinatöre soru, §9). Karar bekleyen atlamalar; `veride-yok` adı değişmiş kaydın bayat yaması da olabilir |
| `kendi-kilidi` | 0 | yazar `d2_gerek` ile BİLEREK kilitledi (başlık ③) |
| `<alan>-dolu` (kaynak/bos/neden/kur) | 0 | sözleşme: korunan alan ezilmez; kaydın öteki alanları İNDİ |
| `kaynak-ayrisan` | 0 | veri İNDİ, yalnız kaynak yazılmadı — 2 Eylül koordinatör hükmü |
| `skaler-bos` | 0 | yamanın değeri boş — yazılacak bir şey yok |
| `hukumlu:<kova>` | 0 | hüküm listesinde, dayanaklı (ⓑ) |
| tabloda olmayan kova | 4 | tanınmayan kova MEŞRU SAYILMAZ |
4'lü kovalar `taninmadi` gibi öteki kayıtların yazılmasını engellemez (çıkış 4, en sonda); 2 ve 3 HİÇBİR dosya yazdırmaz.

## 2. Hüküm listesi (ⓑ) — `denetim/SAHIPLIK-HUKUM-LISTESI.json`
- **Yer gerekçesi:** emsal `denetim/KAYNAK-TAVAN.json` (denetle.py okur). Kod dosyası kendi istisnasını düzenlemez;
  liste VERİ, onu okuyan KAPI. Okuyucu TEK: `arac/_hukum_listesi.py` (araç + denetle aynı okuyucuyu kullanır).
- **Satır:** yama · ad · kova · dayanak · gerekçe. Dayanak = ` · ` ile ayrılmış parçalar; parça ya commit SHA'sı
  (`git cat-file -e <sha>^{commit}`) ya da `denetim|dersler|oturumlar|arac|data/…[:bölüm]` (dosya VAR, bölüm metinde
  GEÇER). En az bir parça çözülmeli, hiçbiri çözülmeden kalmamalı. "koordinatör hükmü bekleniyor" ⇒ REDDEDİLİR.
- **İlk içerik (5):** Akçahisar (Kruja) [arnavutluk] · Floransa [floransa] · Ahıska [sh106] — `63bb90dd ·
  denetim/HUKUM-KAPSAM-DARALDI-0906.md:## ③ HÜKÜM` · Timbuktu [1923_bosluk_0906] · Timbuktu [timbuktu] — `fea0f1b9 ·
  denetim/HUKUM-CAKISMA-KUTAISI-TIMBUKTU-0906.md:ÇARE: TEK VE TAM ZİNCİR` (fea0f1b9 o dosyayı ekleyen commit).
  Ahıska: hüküm "yama haklı ama EKSİK — olduğu gibi uygulanmaz"; atlama kasıtlı sayıldı (gerekçe satırda).
- **ok107 Timbuktu satırı — SESSIZ-7 v2 ile AYNI commit'te eklenecek** (koşullu satır YOK, koordinatör hükmü ①). Metni:
  `{"yama": "yer_yama_ok107.js", "ad": "Timbuktu", "kova": "kapsam-daraldi", "dayanak": "fea0f1b9 · denetim/HUKUM-CAKISMA-KUTAISI-TIMBUKTU-0906.md:ÇARE: TEK VE TAM ZİNCİR", "gerekce": "parça yama YOK, tek ve tam zincir — SESSIZ-7 v2 tam zinciri indirdikten sonra ok107'nin parçası kapsamı daraltır"}`
  Bugün eklenirse ÖLÜ satırdır (ok107 Timbuktu bugün "uygulandı") ⇒ araç 3 verir.
- **Listeye GİRMEYENLER (koordinatör hükmü ②):** Honolulu · Çehrin (Çigirin) · Silistre · Şehrizor (+ hükmü olmayan
  öbürleri) — dayanaksız satır reddedilir kuralı ⇒ listede değil, **2 vererek iner, borç ADIYLA görünür**. Mergen
  bugün zaten kapsam atlaması DEĞİL (§1 ②) ⇒ listeye konacak bir atlaması yok; 3 (taban) verir.
- **ATLANAN-63 (Z5 v1/v2):** `girdi._cevir` ile 63'ün durumu DEĞİŞMEDİ — hâlâ kapsam daraldı (artık kaybın TAMAMI
  görünür: İstanbul `0330-05-11→1281-01-01`, eskiden yalnız `1261-07-25→1281-01-01`) + 14'ü (Ankara…) da artık görünür.
  ⇒ Z5 v1/v2 için 2 doğru; **listeye GİRMEZ** (v1/v2 inmeyecek).
- **Kurallar:** listeli atlama `hukumlu:<kova>`, `HUKUMLU` satırıyla ADIYLA, 0'a izin verir · listesiz ⇒ tablo (kapsam 2) ·
  reddedilen satır `HUKUM-RED` ⇒ 3 · ÖLÜ satır `HUKUM-OLU` ⇒ 3 (yama data/'da yok, ya da yama glob'da ama kayıt
  ATLANMIYOR). Ölü neden 3 (2 değil): veri bozulmadı; istisna listesinin veriyle bağı koptu — KAPININ ayarı
  ölçülemez. Hiçbir dosya yazılmaz. Yaması glob dışındaki satır ölü değil "kapsam dışı" (sayısı basılır).
  Kayıt BAŞKA kovayla atlanıyorsa (tam glob'da Timbuktu iki yamada ⇒ `cakisma`) satır ölü değil `HUKUM-KOVA-UYUSMAZ`,
  o kovayı AFFETMEZ.

## 3. denetle.py (ⓐ + hızlı kip köprüsü)
- **ⓐ `hukum_listesi_rapor`** (araç KOŞMAZ): dayanak çözülüyor mu · dayanaksız/eksik alan · UCUZ ölü (yama dosyası yok ·
  kayıt yamada yok · yama İNMİŞ = üzerine yazan alanları d·s·v·isg·m bugünkü kayıtla birebir) · liste dosyası yok ⇒ hepsi
  `OLCULEMEDI_KOVA`ya ADIYLA (çıkış 2). "O kovayla HÂLÂ atlanıyor mu"nun tamamı pahalı — onu araç her koşuda sorar.
- **Hızlı kip köprüsü `sahiplik_atlama_rapor`:** `_sahiplik_uygula --atlama-yalniz --json` alt süreç; evren
  `yer_yama*.js` − `SAHIPLIK_HIZLI_HARIC = ("yer_yama_1923_1945.js",)` (Z5 v1 karantinası; dahil edilirse 772 çakışma
  gürültüsü — v3/v4 inince koordinatör kaldırır). **İLKE kod yorumunda:** §3 tablosu yalnız denetle'nindir; alt aracın kodu
  §3'e taşınmaz (orada 2 = BAYAT ihlal, burada 2 = ölçülemedi). Çeviri JSON KOVALARINDAN: `listeli_atlama` → 0 (adıyla
  bilgi) · `listesiz_atlama` → 2 OLCULEMEDI ADIYLA · `yikici` → 1 İHLAL · `olculemedi` içinden hukum-red/olu, kapsam/geri-alma
  ölçülemedi → 2 · JSON YOK / geçersiz / kova EKSİK ya da liste değil / öğe bozuk / alt süreç çöktü / zaman aşımı (180 sn)
  → 2, ASLA 0. ⚠️ `taban-olculemedi` (beyansız yama, bugün 247) **BİLGİ** sayıldı: o soru yazımın sorusu (tam kipte 3),
  atlama sınıfının değil — koordinatöre soru (§9).
- **Yıkıcı tanımı (④, sayıyla):** değişimler BELLEKTE uygulandıktan sonra değişen her dosya önce/sonra `girdi._cevir`den
  geçer; bir kaydın d·s·v **birleşik kapsamı** bir gün kaybediyorsa ya da kayıt silindiyse/çiftlendiyse YIKICI. Desen yok,
  kayıt tarayıcısı yok (kapsam kontrolünden BAĞIMSIZ yol). ⚠️ Bir devletin döneminin kısalması tek başına yıkıcı
  DEĞİL: her düzeltme yaması bunu yapar (`b 1281-1600 → b 1281-1550 + yeni 1550-1600`); yıkıcı olan SAHİPSİZ kalan
  gündür. Bugün **0** (Z5 v3/v4 dahil). Tam kipte yıkıcı ⇒ çıkış 2, hiçbir şey yazılmaz.
- **Süre beyanı:** denetle.py'de süre beyanı BULUNAMADI (aranan: "133", "sn", "saniye") — güncellenecek satır yok;
  ölçüm: önce 126 sn · sonra 157 sn (hızlı kip payı 10-16 sn).

### Hızlı kip `--atlama-yalniz` (ölçüldü, saniyeyle, KAPSAM düzeltmeli ağaçta)
| evren | süre | sonuç |
|---|---|---|
| varsayılan glob (Z5 karantinası dahil) | **19 sn** | uygulanan 3214 · listeli 1 · listesiz 846 (cakisma 772 · veride-yok 60 · kapsam 14) · yıkıcı 0 · taban-ölç. 3307 |
| denetle evreni (Z5 hariç) | **12 sn** (denetle içinden 6-16 sn) | uygulanan 194 · listeli 3 · listesiz 195 · yıkıcı 0 · taban-ölç. 247 |
60 sn sınırının altında. `--atlama-yalniz --yaz` ⇒ çıkış 3 "REDDEDİLDİ". Kip sözleşmesi: 0 · 2 (listesiz/kapsam/yıkıcı/
bayat taban; 4'lü kovalar bu kipte 2'dir) · 3. Geri alma kapısı "SORULMADI (--atlama-yalniz)" diye basılır.

### Geri alma kapısı süresi ~ değişim sayısı (koşu sonrası kalemi)
104 tek-dosya koşusundan (5 paralel işçi, çekişmeli): 0 değişim ~3 sn (yükleme) · 24 → 12 sn · 51 → 20-33 sn · 72 → 41 sn ·
Z5 3.975 değişim → ~15-21 dk (1009 ölçümü). ≈ **doğrusal, değişim başına ~0,25-0,5 sn** (her değişim için bir
`git log -L`, 6 iş parçacığı). Temiz ölçüm yöntemi (yapılmadı): aynı ağaçta, tek koşu, `kapi_aday`ın N=100/400/1600
alt kümeleriyle `KAPI.tara` süresi, çekişmesiz makinede.

## 4. Kök / log / git hatası (koordinatör ek ①-④)
- ① `KOK = dirname(dirname(abspath(__file__)))`; `git -C KOK rev-parse --show-toplevel HEAD` uyuşmazsa ya da git yoksa
  **çıkış 3** "KÖK UYUŞMAZ". Kapatma bayrağı YOK (--yaz dahil). Hüküm listesi yolu da kökten.
- ② açılışta ayrı satırlar: `KÖK:` · `HEAD:` (tam SHA) · `git:` · `node:` (tam yol); cwd ≠ kök ise bilgi satırı.
- ③ `sys.stdout.reconfigure(..., line_buffering=True)` (hasattr korumalı).
- ④ `_bayat_yama_kapi.git_hata`: `<ne>: dönüş kodu N · stderr …`; 127/1 + (çıktı başlamış ya da stderr boş) ⇒ "süreç
  DIŞARIDAN sonlandırılmış olabilir". `hazirlik` · `_kirli_mi` · `_gecmis` bunu kullanır.

## 5. Sınav — `denetim/ARAC-SAHIPLIK-KAPSAM-SINAV-1010.py` (ESKİ = origin/main aracı, YENİ = çalışma ağacı)
Hızlı kol (`--gercek-yok`, gerçek veriyi yalnız okuyan D/F4 dahil): **78/78** (son yapı).
| kol | ne sorar | sonuç |
|---|---|---|
| K1 | İstanbul eşi: görünür + görünmez kayıp | ESKİ 0 (yalnız 1261→1281) · YENİ 2, kaybın TAMAMI 0330→1281 |
| K2 | YALNIZ `{f,d,kaynak,t}` dönem kaybı, taban TAZE | ESKİ 0 + `--yaz` danismendli dönemini SİLDİ · YENİ 2, dosya bayt bayt aynı |
| K3 | daralan + bayat | ESKİ 0 (bayat ölçülmez) · YENİ 2, KAPSAM-DARALDI + TABAN-BAYAT + "İKİ KOVADA" |
| K4 | meşru atlama (kendi-kilidi · kaynak-dolu) + taze | ESKİ 0 · YENİ 0, taze yazıldı, kaynak ezilmedi (gerileme yok) |
| K5 | ATLANAN bloğu | `ATLANAN (3): …`, n = ad sayısı, kova eşleşmesi, `ATLAMA KOVALARI`, kuru ve --yaz |
| K6 | veride-yok (karar bekleyen) | YENİ 4 (varsayılan yansır) · ESKİ 0 |
| K7 | f/t'si eksik dönem | YENİ 3, KAPSAM-OLCULEMEDI, dosya aynı |
| K8 | MÖ kaybı -0500→-0300 | YENİ 2 (sayı karşılaştırması) |
| K9 | Mergen eşi {d,f,t} / {f,t,d} | ESKİ {d,f,t} 0 + SAHTE "KAPSAM DARALDI" · ESKİ {f,t,d} 2 bayat · YENİ iki sırada 2, TABAN-BAYAT, kapsam'da YOK |
| **K10** | **SINIF: {f,t,d,kaynak} 24 permütasyon × 2 eksen (ortak sıra · yalnız yama sırası) = 48 koşu** | **YENİ 1 imza** (çıkış · blok · kapsam satırları · bayat · inen) · ESKİ **4 farklı sonuç** (20/20/6/2) |
| H1-H6 | hüküm listesi | listeli 0 · listesiz 2 · dayanaksız/çözülmeyen SHA/geçmeyen bölüm/olmayan dosya/eksik gerekçe 3 (ihlalle birlikte 2, RED yine basılı) · ölü (indi / yama yok) 3 · glob dışı ölü değil · liste yok ⇒ istisna 0 · başka kova ⇒ UYUSMAZ, 4 |
| F1-F4 | hızlı kip + denetle (DÖRT YÖN) | listeli 0 · listesiz 2 · yıkıcı 1 (kanca) / kancasız 0 · JSON YOK/GEÇERSİZ/kova EKSİK/liste değil → 2 (alt süreç 0 dönse bile) · `--yaz` reddi 3 · gerçek ağaç ≤ 60 sn |
| R1-R5 | kök | A'dan --yaz, cwd B ⇒ A yazıldı, B aynı · alt dizin ⇒ 3 · KÖK/HEAD/git/node satırları · line_buffering · git_hata 127/128 |
| D1-D2 | denetle ⓐ | temiz liste ⇒ kova 0 · bozuk SHA · dayanaksız · bölüm yok · yama yok · kayıt yamada yok · yama İNMİŞ (Şefşâven, yer_yama_1923.js) · dosya yok ⇒ hepsi ADIYLA |
| G1-G5 | gerçek veri | §5b |

### 5b. Gerçek kol
Tam koşu (son yapı, `7a613d9e` verisi = bugünkü main verisi; 8 Z5 koşusu paralel): **111/113** — iki KALDI açıklandı:
| kol | sonuç |
|---|---|
| G1 ATLANAN-63 §6b (İstanbul · Konya · Gence, Z5 v1'den) | ESKİ **0** · YENİ **2**, üçü KAPSAM-DARALDI'da ve blokta ADIYLA; İstanbul kaybın TAMAMI `0330-05-11→1281-01-01` |
| G2 Z5 v3 (`fac601ed^`ten — v3 diskten kaldırılmıştı) | YENİ **0** · uygulandı **3987** · geri okuma **3987/3987** · kapsam 0 · yıkıcı 0 · `ATLANAN (0)` · ESKİ ile aynı (0, 3987) — gerileme YOK |
| G2b Z5 v4 + SESSIZ-7 v2 | uygulandı 3988 · geri okuma 3988/3988 · kapsam 0 · yıkıcı 0 · tam kip **3** (ESKİ de 3): `KAPI ÖLÇEMEDİ — hedef dosya COMMİTLENMEMİŞ: data/yerlesimler.js` — SESSIZ-7 commitlenmeden uygulandı (commit YOK kuralı); v4'ün beyan ettiği iniş sırasında (SESSIZ-7 ÖNCE commit) bu düşer. Hızlı kip ayrıca koşuldu: **0**, 12 sn, taban TAZE. ✗ sınavın eski beklentisi "0" idi → beklenti düzeltildi (tam kip 3 YALNIZ bu sebeple + hızlı kip 0); düzeltilmiş kol bu son koşunun ÇIKTISIYLA ve elle hızlı kip koşusuyla doğrulandı, tam test yeniden koşturulmadı (~45 dk) |
| G3 Z5 v1 `--taban 67e9ec9d` | YENİ **2** · KAPSAM DARALDI **84** (ESKİ 70 ⊆) · BAYAT TABAN **170** (ESKİ 100 ⊆) · iki kovada 84 · blok n=84. YENİ GÖRÜNEN kapsam (14): Ankara · Bayburt · Bitlis · Elbistan · Erzincan · Erzurum · Kayseri · Kemah · Kırşehir · Sinop · Sivas · Tokat · Van · Çankırı. YENİ ÖLÇÜLEN bayat 70 = eskiden kapsam yüzünden sorulmayan 63 + 7 (hepsi kapsam-daralan). 170 = kâhin 170 (BAYAT-TABAN R2/R5) |
| G4 GERÇEK Mergen yaması iki sırada, `--taban d041a080` | YENİ {d,f,t} ve {f,t,d}: KAPSAM-DARALDI'da YOK · TABAN-OLCULEMEDI "d041a080'de kayıt YOK" · çıkış 3 · iki sırada AYNI. ESKİ {d,f,t}: 0 + sahte "KAPSAM DARALDI" · ESKİ {f,t,d}: 3 |
| G5 koordinatör hükmü ② | bosluk_0906 2 (Honolulu KAPSAM, Timbuktu HÜKÜMLÜ) · litvanya 2 (Çehrin) · silistre_0906 2 (Silistre) · uyg3 2 (Şehrizor) · arnavutluk/floransa/sh106/timbuktu **0** HÜKÜMLÜ · doguasya (Mergen) **3** — kapsam değil, taban |
| SON git status | ✗ `C:\atlas-umit` değişti — bu md ve diff koşu sırasında `C:\atlas-umit\denetim`e yazıldı (benim teslimim) + başka oturumların dosyaları; `C:\atlas` AYNI |

## 6. Gerileme (önce = origin/main aracı, sonra = bu diff)
| sınav | önce | sonra |
|---|---|---|
| `ARAC-SAHIPLIK-KAPI-SINAV-1006.py` | 17/17 | **17/17** (son yapı) |
| `ARAC-SAHIPLIK-BAYAT-TABAN-SINAV-1009.py --gercek-yok` | 24/24 | **24/24** (son yapı) |
| `ARAC-SAHIPLIK-BAYAT-TABAN-SINAV-1009.py` tam (R1-R6, R5 dahil) | **35/36** — tek KALDI `SON C:\atlas-umit git status` (dış: başka oturum v4/SESSIZ dosyalarını yazdı + benim teslim diff'im aynı dizine) | ara yapı (hüküm listesi var, hızlı kip/kök yok): **35/36**, aynı tek dış KALDI · R2 `bayat∩atlanan 84` (önce 70: +14 görünür olan) · R3 → **2** (kapsam daralan var: ihlal > ölçülemedi; TABAN-OLCULEMEDI basılı) · R5 fark 0 · son yapı: **35/36** (son yapı, yeniden koşu) — R1-R6 ve R5 GEÇTİ, R2 `bayat∩atlanan 84`, R3 2; tek KALDI yine `SON C:\atlas-umit git status` (koşu sırasında benim teslim dosyalarım o dizine yazıldı) |
| `ARAC-SAHIPLIK-DOSYA-DOKUMU-SINAV-1009.py` | main'de YOK — koşulmadı | — |
- BAYAT-TABAN sınavında değişen iki ölçüt (diff'te): **R2** = kâhin bayat − taban sorusuna GİRMEYEN atlananlar (kapsam
  daralan artık taban sorusuna girer; kovasız eski rapor için eski ölçüt) · **R3** = kapsam daralan varsa 2, yoksa 3.
- denetle.py tam koşu: önce çıkış 2 (Değişmez 8 ölçülemedi, 1 soru) · sonra çıkış 2 (1 + 195 listesiz atlama = 196).
  İki satır eklendi, öteki BÜTÜN satırlar birebir (diff ile ölçüldü).
- **04:15 dış öldürme (UMIT İRTİBAT):** o aralıkta BAYAT-TABAN önce/sonra tam kolları koşuyordu (R1 Z5 koşusu,
  `git log -L`). Belirtisi yok (R1a çıkış 2, KAPI ÖLÇEMEDİ satırı 0, R1-R6 GEÇTİ). Yine de "sonra" kolu son yapıyla
  YENİDEN koşturuldu (04:15 dış öldürme (UMIT İRTİBAT) nedeniyle yeniden + yapı değişti). 104 koşusu (04:19-04:22 ve
  sonrası) ve denetle ölçümleri pencere DIŞINDA.

## 7. 104 `yer_yama*.js` yeniden koşu (tek tek, `--taban` yok, kuru; Z5 karantinası hariç)
| | 0 | 2 | 3 | 4 |
|---|---|---|---|---|
| ESKİ (origin/main) | 69 | 29 | 6 | — |
| YENİ, listesiz (ara) | 51 | 37 | 7 | 9 |
| **YENİ + hüküm listesi (son)** | **55** | **33** | **7** | **9** |
(Hızlı kipte 4'lüler 2 sayılır ⇒ 55 / 42 / 7.) Geçişler ADIYLA:
- **0 → 0** (55): yer_yama · 1923 · acik · afrika_1923 · almanya · amerika_1923 · anadolu · arnavutluk · avrupa_dayanak_1923 · avrupa_isvec_1923 · balkan_makedonya · belgesiz4 · belgesiz7 · cin · dogafr · emilme · emilme2 · enklav · fizan · floransa · fransa · gece_v1 · gece_v3 · guyana · hayalet · hayalet2 · ing · iran · ispanya · isvec · italya · japonya · kademe · kademe2 · kademe_zincir · kapsam · kuzafr · macar · makdisu · memluk · misir · moskito · ok107 · ok109 · once1281_z6 · ortadogu_1923 · owtrad · p32 · sahiplik · sh106 · sh107 · sohum · sutter_0906 · timbuktu · veri31
- **0 → 2** (4): 1923_bosluk_0906 · litvanya · silistre_0906 · uyg3
- **0 → 3** (1): doguasya
- **0 → 4** (9): 1923_nepal_karayip · 1923_yeni · cermik_sason · gronland_col · hadramut_nokta · hizan · sibirya_beyan · uyg2 · zaza
- **2 → 2** (29): 1923_duzeltme · avrupa_1923 · balkan_1923 · balkan_trakya · barka_dogu8 · cukurova_isg_0907 · dogumakedonya · egeadalari · elba · erken · ferhatpasa · isg_yunan_kaynak · kafkas · kafkas_rusya · kid20_0907 · manda_0906 · misir_himaye · ok101 · ok105 · ok106 · ok109_fetret · ok110 · onikiada · p0035 · romanya · tbmm_1920_0905 · vassal_kid_0906 · yunananakara · zend_kacar
- **3 → 3** (6): ada_istankoy · ada_kaynak · agadez_0906 · kademe_m_0905 · ortadogu_misir_1923 · timbuktu_tam_0906
- **Sessiz 9 dosya / 10 kayıt (ATLANAN-63 §6c) artık ≠ 0:** Honolulu (bosluk_0906 → 2) · Akçahisar · Floransa · Ahıska ·
  Timbuktu ×2 → HÜKÜMLÜ, 0 (bosluk_0906 Honolulu yüzünden 2) · Çehrin (litvanya) · Silistre · Şehrizor (uyg3) → 2 ·
  **Mergen (doguasya) → 3**: kapsam daralması SAHTEYDİ (eski desen `{d,f,t}`yi göremiyordu), yeni araç doğru görür,
  kayıt taban beyansız ⇒ ölçülemedi.
- 0 → 4 (9 dosya): yalnız `veride-yok` (karar bekleyen kova, varsayılan yansır) — nepal_karayip 6 · 1923_yeni 6 ·
  cermik_sason 2 · gronland_col 9 · hadramut_nokta 2 · hizan 1 · sibirya_beyan 8 · uyg2 1 · zaza 7.
- Görünmez dönem artık görünüyor: kapsam-daraldı kayıt toplamı 121 → **133**; `tbmm_1920_0905`te 17 → **30**
  (YENİ GÖRÜNEN 13: Ankara · Bitlis · Elbistan · Erzincan · Erzurum · Kayseri · Kemah · Kırşehir · Sinop · Sivas · Tokat ·
  Van · Çankırı — ATLANAN-63'ün "14"ü, Bayburt bu dosyada yok). Eskide olup yenide olmayan: yalnız Mergen (sahte).
- Yıkıcı: 104 dosyanın hiçbirinde 0.

### denetle'nin bugün ADIYLA bastığı 195 listesiz atlama (Z5 hariç tam glob)
- **cakisma** (67): Agadez · Ankara · Antakya · Antalya · Bağdat · Bitlis · Cizre · Derbend · Dimetoka · Dimyat · Elba · Elbistan · Erzincan · Erzurum · Gelibolu · Gence · Giresun · Halep · Halepçe · Hasankeyf · Isfahan · Isparta · Kahire · Karaman · Kars · Kasr-ı Şîrîn · Kavala · Kayseri · Kemah · Konya · Kusayr · Kutaisi · Kütahya · Kırşehir · Manama (Bahreyn) · Manisa · Mardin · Maykop (Çerkezya) · Merâga · Niğde · Rakka · Rize · Sefâce · Serahs · Simnân · Sina güneyi · Sinop · Sivas · Sohum · Soçi (Sâşe) · Süveyş · Tebriz · Tekirdağ · Timbuktu · Tokat · Trabzon · Tuapse · Tûr (Sînâ) · Van · Vodina (Edessa) · Çankırı · İskenderun · İstanbul · İstanköy · İzmit · İznik · Şehrizor
- **veride-yok** (60): Acdîr (Ajdir) · Atak · Batang · Batı Sibirya bataklıkları beyan noktası (62.5K/82.5D) · Batı Sibirya bataklıkları beyan noktası (62.5K/83.5D) · Bhaktapur · Cap-Haïtien (Cap-Français) · Dartsedo (Kangding) · Derge (Dege) · Dolonnor (Duolun) · Enval (Annual) · Ergani · Eystribygð (Doğu Yerleşimi) · Eğil · Genç · Gobi doğu (Sünid) · Gobi içi (Alaşan) · Grönland güney buz alanı · Grönland iç buz tabakası · Guatemala City (Nueva Guatemala) · Hailar (Hulunbuir) · Hazro (Tercil) · Hizan · Hunçun · Jyekundo (Yuşu) · Kiğı · Kolyma-Çukotka beyan noktası (69.5K/176.5D) · Kolyma-Çukotka beyan noktası (69.5K/177.5D) · Kızıl (Belotsarsk) · Litang · Nagçu (Nagqu) · Ngawa (Aba) · Nikolsk (Ussuriysk) · Ningçeng (Liao Zhongjing) · Nuuk (Godthåb) · Orta Sibirya yaylası beyan noktası (62.5K/97.5D) · Orta Sibirya yaylası beyan noktası (63.5K/98.5D) · Patan (Lalitpur) · Petuna (Bedune) · Port-au-Prince · Santiago de los Caballeros · Sanşing (Yilan) · Sason · Sağlı · Songpan (Zungchu) · Taklamakan doğu (Lop çölü) · Taklamakan kum denizi · Tsona (Cona) · Turan · Urmiye · Selmâs · Sulduz · Dizmâr · Sarukurgân · Saidâbâd · Vestribygð (Batı Yerleşimi) · Yakutistan-Lena havzası beyan noktası (58.5K/127.5D) · Yakutistan-Lena havzası beyan noktası (69.5K/115.5D) · Çaa-Höl · Çapakçur (Bingöl) · Çermik · Şangdu (Kaiping) · Şibâm (Hadramut) · Şihr (Hadramut) · Şilingol (Abaga)
- **kapsam-daraldi** (53): Akmescid · Babadağı (Babadag) · Bahçesaray · Benzert (Bizerte) · Beyrut · Bin Gerdân · Bâce (Béja) · Cendûbe · Cerbe (Djerba) · Cerciş (Zarzis) · Doha (Katar) · Dûz · Eski Kırım (Solhat) · Gabes · Gözleve (Kezlev) · Halkulvâdî · Honolulu · Kafsa · Karasubazar · Kasrayn · Kayrevan · Kef · Kelîbiye · Kerkene (Kerkennah) · Kragujevac · Köstence · Kıbillî (Nefzâve) · Medenîn · Mehdiye · Mekter (Maktar) · Metlâvî · Munastır · Musul · Mâtir (Mateur) · Nefta · Nâbil (Nabeul) · Or Kapı (Ferahkirman) · Sfaks · Silistre · Sisam · Sîdî Bû Zeyd · Sûse · Sübaytıla · Tatavin · Testûr · Tozer · Tunus · Zağvân · Çaçak · Çehrin (Çigirin) · Ğar Dimâv · Ğâru'l-Melh (Porto Farina) · İshakçı (Isaccea)
- **gun-maddesiz** (15): Akşehir · Alaşehir · Beyşehir · Burdur · Edirne · Emet (Eğrigöz) · Eğirdir · Karahisâr-ı Sâhib (Afyon) · Seydişehir · Simav · Tavşanlı · Uluborlu · Uşak · Yalvaç · İshaklı

## 8. Ölçtüm · bulamadım · istiyorum
- **Ölçtüm:** ① kapsam atlaması artık 2 (sentetik ATLANAN-63 üçlüsü: ESKİ 0 → YENİ 2, üçü ADIYLA). ② eski desen 252 dönem /
  150 kayıtta kördü; 48 anahtar sırasında YENİ tek sonuç, ESKİ 4 farklı sonuç; Mergen yönü (yanlış koruma) da kapandı.
  ③ daralan+bayat iki kovada. ④ blok her çıkış yolunda. Hüküm listesi 5 satır, temiz; denetle ⓐ temiz listede sessiz,
  bozuk listede ADIYLA. Hızlı kip 12-19 sn. 104 koşusu 69/29/6 → 55/33/7/9. denetle bugün 2 (196 soru).
- **Bulamadım:** denetle.py'de süre beyanı (güncellenecek satır yok). `kur:` ile çelişen (kuruluştan önce başlayan)
  dönemi soran bir kapı — Mergen'in koordinatörün kaygısındaki hâli (taze-beyanlı genişletme) hiçbir kapıya takılmaz.
  Geri alma kapısı süresinin çekişmesiz ölçümü (yalnız yöntem yazıldı).
- **İstiyorum (hüküm koordinatörde):** ① `cakisma` · `belirsiz` · `veride-yok` · `gun-maddesiz` meşru mu (0) yoksa
  yansısın mı (bugün 4)? Bugün 9 dosya yalnız `veride-yok` yüzünden 4. ② denetle'de `taban-olculemedi` BİLGİ mi kalsın,
  2'ye mi girsin (girerse bugün +247)? ③ `SAHIPLIK_HIZLI_HARIC` (Z5 karantinası) — v3/v4 inişiyle kaldırılsın.
  ④ 195 listesiz atlama denetle'yi kalıcı 2'de tutar — inmiş yamaların glob dışına taşınması (arşiv) bu sayıyı düşürür.
  ⑤ ok107 Timbuktu satırı SESSIZ-7 v2 commit'ine (§2'deki metin).

## 9. Temizlik
Worktree'ler kaldırıldı (`C:\atlas-umit-kps` · `-kps-once` · `-kps-chk` · `-kps-g3` · `-kps-g4` · sınavların geçici `Temp/kapsam_*`, `taban_gercek_*` dizinleri; `git worktree list`te kalan 0). `--yaz` yalnız sınavın geçici `git init` depolarında. git stash kullanılmadı.
`C:\atlas` ve `C:\atlas-umit` `git status --short` sonda: `C:\atlas` → boş · `C:\atlas-umit` → ` M denetim/NEGATIF-YIL-1010-A.md` (başka oturum, işe başlarken vardı) · `?? denetim/SAHIPLIK-KAPSAM-1010-v2.diff` · `?? denetim/SAHIPLIK-KAPSAM-1010.md` (bu teslim) · `?? denetim/ZAMAN-Z6-tdv/` (başlangıçta vardı)

## 10. v2 (FAZ 1 kabulünden sonra, koordinatör ek ② ③) — `SAHIPLIK-KAPSAM-1010-v2.diff`
Taban: origin/main `48df6bf1` üzerine v1 uygulandı, v2 eklendi; `--check` origin/main **`b860f4c9`**'da ✓, SESSIZ-7 v2 ile iki
sırada ✓ (V2→SESSIZ ✓ · SESSIZ→V2 ✓). v1 (`SAHIPLIK-KAPSAM-1010.diff`) diskten SİLİNDİ. `_sahiplik_uygula.py` v2'de
DEĞİŞMEDİ; yalnız `arac/denetle.py`, sınav ve yeni defter.

### ② Gruplu basım (sunum; hüküm ve çıkış kodu DEĞİŞMEZ)
- `olculemedi_grup(ad, sebep)` grubu kaydın KENDİSİNDEN türetir (durumsuz — `OLCULEMEDI_KOVA` biçimi 2'li kaldı, hiçbir
  tüketici kırılmadı): `sahiplik atlama <ad>` + `[yama] <kova> — …` ⇒ `sahiplik atlama: <kova>` · `hüküm listesi …` ⇒ tek
  grup · öteki her soru kendi grubu (D8 tek satırı AYNEN).
- `olculemedi_bas(ayrinti)`: varsayılanda grup + SAYI (`(adlar: --ayrinti)`), `--ayrinti`'de adlar; sonda
  `toplam N = a + b + …` ve `assert` (sayan = basan).
- Bugünkü gerçek çıktı (`py arac/denetle.py`, çıkış **2**, değişmedi):
```
🔴 ÖLÇÜLEMEYEN SORU: 196 — bu kapı o soruda TEMİZ DEĞİL
     • Değişmez 8             RuntimeError: devletler_harita.js YOK (üretilmiş + gitignore'lu çıktı) — …
     • sahiplik atlama: veride-yok 60   (adlar: --ayrinti)
     • sahiplik atlama: cakisma 67   (adlar: --ayrinti)
     • sahiplik atlama: kapsam-daraldi 53   (adlar: --ayrinti)
     • sahiplik atlama: gun-maddesiz 15   (adlar: --ayrinti)
     toplam 196 = 1 + 60 + 67 + 53 + 15
```
  ⚠️ Koordinatör mesajındaki "142 kalem" sayısını ÖLÇMEDİM/BULAMADIM: bugünkü ölçüm 195 sahiplik + 1 D8 = 196
  (67 + 60 + 53 + 15 = 195). Hepsi 2'de KALDI.

### ③ TABAN-ÖLÇÜLEMEDİ — 2'ye GİRMEZ, SAYI + DEFTER tavanı
- Birim KAYIT = `ad [yama]` (aynı kaydın birden çok alanı TEK sayılır; JSON'da 247 alan → 190 kayıt).
- **Liste mi sayı mı → İKİSİ birlikte, gerekçe:** §3.4⑤ istisna listesi tavan ailesidir; yalnız sayı tutan tavan bir
  kayıt düzelip başkası bozulunca (NET TAKAS) HİÇBİR şey görmez. Defter `denetim/SAHIPLIK-TABAN-OLCULEMEDI.json`
  (`KAYNAK-TAVAN.json` emsali, `kayitlar` dizisi + ölçüm künyesi); sabit `BEKLENEN_TABAN_OLCULEMEDI` `denetle.py`de.
  Defter sayısı ≠ sabit ⇒ ÖLÇÜLEMEDİ (§3.4②: ikisi AYNI commit'te değişir).
- Kural: bugünkü küme sayısı > tavan **ya da** defterde OLMAYAN kayıt belirdi ⇒ **İHLAL** (adıyla `+ ad [yama]`; sayı
  aynıysa "NET TAKAS"). Azalma ya da defterden düşen kayıt ⇒ `⚠️ TAVAN GEVŞEK — BEKLENEN_TABAN_OLCULEMEDI = n yapılmalı`
  (ihlal değil, §3.4③). Defter yok/bozuk ⇒ ÖLÇÜLEMEDİ.
- **ÖNERİ (§3.4④ — koordinatör yeniden ölçüp YAZAR): `BEKLENEN_TABAN_OLCULEMEDI = 190` · ölçüm anı origin/main
  `48df6bf1`, 10 Ekim 2026 06:26 · evren `yer_yama*.js − yer_yama_1923_1945.js`.** Diff'te sabit = 190, defter = 190
  kayıt (aynı ölçümden üretildi). Bugünkü denetle satırı: `taban-ölçülemedi 190 (tavan 190)`, gevşeklik/ihlal yok.
- `SAHIPLIK_HIZLI_HARIC` KALIYOR — yorumu güncellendi: "v4 indiği COMMİT'te kaldırılır (koordinatör), daha önce DEĞİL".
  ⚠️ O commit'te evren değişir ⇒ taban-ölçülemedi kümesi de değişir: defter + sabit AYNI commit'te yeniden ölçülmeli.

### Sınav (v2) — `ARAC-SAHIPLIK-KAPSAM-SINAV-1010.py --gercek-yok`: **90/90**
- V1 gruplu basım iki yönde (varsayılan: sayı, ad yok · --ayrinti: adlar; D8 aynen; toplam 8 = 1+3+2+1+1).
- V2 gerçek `denetle.py` ± `--ayrinti`: çıkış 2 · toplam = ÖLÇÜLEMEYEN (196) = Σ grup · varsayılanda tekil ad satırı 0 ·
  `--ayrinti`'de isimli satır 195 = Σ sahiplik grubu · D8 satırı görünür.
- V3 tavan (sahte alt süreç + geçici defter): eşit → 0 · artış → İHLAL adıyla · NET TAKAS → İHLAL · azalma → GEVŞEK, ihlal
  yok · defter yok → ÖLÇÜLEMEDİ · defter ≠ sabit → ÖLÇÜLEMEDİ · depodaki defter = sabit 190.
- Önceki kollar (K/H/F/R/D) aynı koşuda yine GEÇTİ. Tam (gerçek Z5) kolu koşturulmadı: `_sahiplik_uygula.py` v2'de değişmedi;
  denetle.py değişikliği V2'de GERÇEK `denetle.py` koşusuyla ölçüldü.
- Gerileme (v2 yapısı): `ARAC-SAHIPLIK-KAPI-SINAV-1006` **17/17** · `ARAC-SAHIPLIK-BAYAT-TABAN-SINAV-1009 --gercek-yok` **24/24**.
- `py arac/denetle.py`: çıkış 2 (önce de 2), 66 sn (makine boşken; v1 ölçümü 157 sn çekişmeliydi).

### v2 — ölçtüm · bulamadım · istiyorum
- **Ölçtüm:** taban-ölçülemedi 190 kayıt (247 alan); gruplu basımda 196 = 1 + 60 + 67 + 53 + 15; v2 sınavı 90/90.
- **Bulamadım:** "142 kalem"in kaynağı (bugünkü ölçüm 195 sahiplik kalemi).
- **İstiyorum:** ① `BEKLENEN_TABAN_OLCULEMEDI = 190` önerisini yeniden ölçüp yaz (defter de aynı ölçümle, aynı commit).
  ② v4 inişinde `SAHIPLIK_HIZLI_HARIC` kaldırılırken defter + sabit o commit'te yeniden üretilsin.
