# ATLANAN-63-1010 — Z6 inişi 63 kaydı nasıl ATLANAN'a taşıdı, ve üç "63" aynı mı

UMIT ölçüm işçisi · 10 Ekim 2026 · yalnız ölçüm/teşhis · commit/push YOK · stash YOK · C:\atlas'a yazılmadı.
Geçici worktree'ler (origin/main `667e283a`, iş bitince kaldırıldı): `C:\atlas-umit-at63` (v1 kuru) ·
`C:\atlas-umit-at63b` (v3 diff + kuru) · `C:\atlas-umit-at63c` (sentetik yama + 104 yamanın tek tek kuru koşusu).
`b3fd8874` ile `667e283a` arasında `data/` ve `arac/` farkı **0** (`git diff --stat` boş) ⇒ A'nın ölçüldüğü veriyle aynı.

YENİ DOSYALAR: denetim/ATLANAN-63-1010.md

## Kısa hüküm
- **AYNI 63.** A63 ∩ B = 63 · A63 ∩ C = 63 · B ∩ C = 63 · bütün farklar (A63∖B, B∖A63, B∖C, C∖B) = **0**. Tek kusur.
  (A = 70 = bu 63 + Z6'dan bağımsız 7 eski KAPSAM DARALDI.)
- **Mekanizma:** Z6, bu 63 kayıtta var olan bir dönemin `f`sini 1281 öncesine çekti (`{f:"1261-07-25",t:"1453-05-29",…}` —
  f ve t yan yana). Z5 v1/v2 o dönemi Z6 öncesi hâliyle (`f:"1281-01-01"`) yeniden yazıyor ⇒ yeni kapsam bugünkünden dar ⇒
  `_sahiplik_uygula.py:1236-1244` "KAPSAM DARALDI" deyip kaydı ATLIYOR.
- 🔴 **YENİ BULGU — 63/14 ayrımını kapsam kontrolünün REGEX KÖRLÜĞÜ belirliyor** (§2b): `ARALIK_RX` (satır 956) yalnız
  `f`'den hemen sonra `t` gelen dönemi görüyor. Z6'nın YENİ eklediği dönemler `{f:…,d:…,kaynak:…,t:…}` sırasında ⇒ kontrol
  onları göremiyor. 14 kayıt (Ankara, Bayburt, …) bu yüzden kapsam kontrolünden geçip TABAN KAPISINA düşüyor (BAYAT); 63 kayıt
  görünür bir dönemi olduğu için ATLANAN'a. Ölçüldü: 63/63 ve 14/14, istisnasız.
- **Kapı sorusu — koordinatörün ölçütüne göre: KALDI.** Yalnız "kapsam daraldı" atlaması olan kuru koşu **çıkış 0** verdi
  ve "TAZE" bastı. Bugünkü main'deki inmiş yamalardan **9 dosya / 10 kayıt** tam bu durumda (çıkış 0 + kapsam-daraldı ≥1).

## ① Üç küme — boyut ve kaynak
| küme | kaynak | boyut | nasıl alındı |
|---|---|---|---|
| **A** | Z5 v1 kuru koşusu, `--taban 67e9ec9d`, origin/main `667e283a` (= `b3fd8874` verisi) | ATLANAN **70** (hepsi KAPSAM DARALDI) · BAYAT TABAN **100** · uygulandı 3912 · **çıkış 2** | **YENİDEN ÜRETİLDİ** (rapor A'da 63'ün listesi yoktu); `--taban-rapor` JSON'unun `atlanan` alanından makinece |
| **B** | `KAYNAK-PENCERE-1009.md` §A4 | **63** | rapordaki tam liste ayrıştırıldı (`- Ad: f→1281-01-01`) |
| **C** | `ZAMAN-Z5-1008.md` §v3 "KAPSAM DARALDI 63" | **63** (+ BAYAT 14 ayrı) | rapordaki tam liste ayrıştırıldı (` · ` ayraçlı) |

A'nın sayıları SAHIPLIK-BAYAT-TABAN-R5 raporuyla birebir (100 + 70 = 170). Adlar NFC'ye normalleştirilip karşılaştırıldı.

## ② Kesişim tablosu (ADIYLA, NFC)
| işlem | sayı | adlar |
|---|---|---|
| A (70) ∖ 63 | 7 | Arpaçay (Akyaka) · Ayn el-Ğazâle (Bomba) · Beri · Digor · Iğdır · Küçükperveli · Tulmeyse (= eski 7, Z6'dan önce de vardı) |
| A63 ∩ B | **63** | — |
| A63 ∩ C | **63** | — |
| B ∩ C | **63** | — |
| A63 ∖ B · B ∖ A63 · B ∖ C · C ∖ B | **0 · 0 · 0 · 0** | boş |
| C'nin BAYAT 14'ü ∩ A'nın BAYAT 100'ü | 14 | 14/14 (Ankara zaten 3429ead9'da kapıdaydı; kalan 13 = R5 raporundaki "kapıya giren 13") |
| 63 ∩ Z6 yaması (`yer_yama_once1281_z6.js`, 80 kayıt) | 63 | 63/63 Z6 kaydı · 14/14 de Z6 kaydı · Z6'nın kalan 3'ü: Dimyat · Kahire · Tunus (Z5 ile çakışmıyor ya da ayrık alan) |

**63 ad + dosya** (A'dan, dosya `girdi.GIRDI_DOSYALARI` taranarak):
Antakya [yerlesimler.js] · Antalya [yerlesimler.js] · Atina [yerlesimler.js] · Ba'lebek (Baalbek) [ek29] · Bağdat [yerlesimler.js] ·
Belh [ek16] · Cizre [ok107] · Delhi [asya] · Derbend [yerlesimler.js] · Dimetoka [yerlesimler.js] · Ecmîr (Ajmer) [asya] ·
Fas (Fez) [yerlesimler.js] · Gelibolu [yerlesimler.js] · Gence [yerlesimler.js] · Giresun [yerlesimler.js] · Girit (Resmo) [yerlesimler.js] ·
Halep [yerlesimler.js] · Hasankeyf [ok107] · Herat [ek16] · Hucend [ek15] · Isfahan [yerlesimler.js] · Isparta [yerlesimler.js] ·
Karaman [yerlesimler.js] · Kars [yerlesimler.js] · Kavala [yerlesimler.js] · Kaşgar [asya] · Koil (Aligarh) [asya] · Konya [yerlesimler.js] ·
Kütahya [yerlesimler.js] · Lahor [asya] · Livadya [yerlesimler.js] · Manisa [yerlesimler.js] · Mardin [yerlesimler.js] · Merakeş [yerlesimler.js] ·
Merv (Mari) [yerlesimler.js] · Merâga [yerlesimler.js] · Modon [yerlesimler.js] · Nakşa [yerlesimler.js] · Niğde [yerlesimler.js] ·
Rabat [yerlesimler.js] · Rakka [yerlesimler.js] · Rize [yerlesimler.js] · Sebte (Ceuta) [ek3] · Semerkant [ek14] · Serahs [yerlesimler.js] ·
Sicilmâse (Tâfilelt) [h2_kuzeyafrika] · Simnân [yerlesimler.js] · Tanca [yerlesimler.js] · Taşkent [ek15] · Tebriz [yerlesimler.js] ·
Tekirdağ [yerlesimler.js] · Tikrit [yerlesimler.js] · Tilimsan [yerlesimler.js] · Trabzon [yerlesimler.js] · Vodina (Edessa) [ok107] ·
Vâsıt [yerlesimler.js] · İskenderun [ek27] · İstanbul [yerlesimler.js] · İstanköy [yerlesimler.js] · İstefe (Tebai) [yerlesimler.js] ·
İzmit [yerlesimler.js] · İznik [yerlesimler.js] · Şehrizor [yerlesimler.js]
(kısaltma: `[ekN]` = `yerlesimler_ekN.js`, `[asya]` = `yerlesimler_asya.js` vb.)

## ③ Mekanizma — kod ve üç örnek

### 2a. Kararı veren kod (`arac/_sahiplik_uygula.py`, origin/main `667e283a`)
- **1236-1244:** `eski_kap = birlestir(araliklar(_dilim(satir, d/s/v)))` · `yeni_kap = …(yeni_satir)` ·
  `kayip_ar = eksilen(eski_kap, yeni_kap)` · boş değilse `ist["kapsam-daraldi"] += 1`, `atlanan.append(...)`, `continue`.
  `isg:` kapsama sayılmaz (yorum 1233).
- **956:** `ARALIK_RX = r'\{\s*"?f"?\s*:\s*"([^"]+)"\s*,\s*"?t"?\s*:\s*"([^"]+)"'` — `araliklar()` (968) bununla toplar.
- **987-1001:** `eksilen()` eski kapsamda olup yenide olmayan aralıkları döndürür; rapora ilk 3'ü basılır (`kayip_ar[:3]`).

### 2b. Üç örnek — bugünkü kayıt ↔ Z5 v1 yaması (kuru koşuda ölçüldü)
| kayıt | bugünkü `s:` ilk dönemler (main) | Z5 v1 yamasındaki `s:` ilk dönem | aracın bastığı kayıp |
|---|---|---|---|
| **İstanbul** | `{f:"0330-05-11",d:"bizans",…,t:"1204-04-13"}` · `{f:"1204-04-13",d:"latin-imparatorlugu",…,t:"1261-07-25"}` · `{f:"1261-07-25",t:"1453-05-29",d:"bizans"}` | `{"f":"1281-01-01","t":"1453-05-29","d":"bizans"}` | `1261-07-25→1281-01-01` **yalnız** |
| **Konya** | `{f:"1097-01-01",t:"1308-01-01",d:"selcuklu",…}` | `{"f":"1281-01-01","t":"1308-01-01","d":"selcuklu"}` | `1097-01-01→1281-01-01` |
| **Gence** | `{f:"1235-01-01",d:"mogol-imparatorlugu",…,t:"1256-01-01"}` · `{f:"1256-01-01",t:"1340-01-01",d:"ilhanli",…}` | `{"f":"1281-01-01","t":"1340-01-01","d":"ilhanli"}` | `1256-01-01→1281-01-01` **yalnız** |

⇒ Hipotez DOĞRULANDI: Z5 yaması Z6 öncesi tabandan (ilk dönem 1281'den) yazılmış, Z6 o dönemin `f`sini geri çekmiş, yeni
dizi daha dar. ⚠️ AMA İstanbul'un **330-1261** (iki dönem) ve Gence'nin **1235-1256** kaybı rapora DÜŞMÜYOR: o dönemlerde
anahtar sırası `f, d, kaynak, t` ve `ARALIK_RX` onları **görmüyor**. Kapı bu kayıtları yine yakalıyor, çünkü her birinde
görünür (f-t bitişik) bir 1281 öncesi dönem var — kaybın TAMAMINI değil, bir parçasını görerek.

### 2c. 63 ↔ 14 ayrımı = görünür/görünmez dönem (ölçüldü, istisnasız)
Her kaydın bugünkü `d/s/v` metninde (isg hariç) `f < 1281-01-01` olan dönemler sayıldı:
- **63/63:** `ARALIK_RX`'in gördüğü ≥ 1 adet 1281 öncesi dönem VAR (Z6 var olan bir dönemin `f`sini geri çekti, f-t bitişik kaldı)
  ⇒ kapsam kontrolü kaybı görür ⇒ **ATLANAN**.
- **14/14** (Ankara · Bayburt · Bitlis · Elbistan · Erzincan · Erzurum · Kayseri · Kemah · Kırşehir · Sinop · Sivas · Tokat · Van · Çankırı):
  1281 öncesi dönem VAR ama **hiçbiri görünür değil** (Z6 YENİ dönem ekledi: `{f:"1134-01-01",d:"danismendli",kaynak:…,t:…}`).
  ⇒ kapsam kontrolü kayıp görmez ⇒ kayıt `taban_aday`a girer ⇒ **TABAN KAPISI BAYAT** (çıkış 2).
- Bugünkü 93 girdi dosyasında `ARALIK_RX`'in görmediği dönem başlangıcı: **110 / 17.462**, ~55 kayıtta (kaba sayım; çok satırlı
  kayıtlarda kayıt adı eşleşmesi eksik kalabilir — dönem sayısı satır bazında kesin).
- ⇒ Kapsam koruması (Çaçak vakası, 29 Ağu) bu 110 döneme **KÖR**. `--taban`/`taban:` beyanı olan yamada taban kapısı
  bu açığı kapatıyor (14 kayıt böyle yakalandı); beyansız yamada çıkış 3 (ölçülemedi) veriyor. Ama yama bu dönemleri silen
  ve taban beyanı da bugüne eşit olan bir kayıtsa (taze ama yanlış yama) **hiçbir kapı görmez.** Düzeltme yazılmadı.

## ④ Gence/Hucend/Kars/Taşkent: kapıdan (BAYAT) ATLANAN'a geçiş — aynı mekanizma, ve öncelik ÖLÇÜLDÜ
- Kod sırası: kapsam kontrolü kayıt döngüsünün İÇİNDE (1236-1244, `continue`); `taban_aday.append` ondan SONRA (1263);
  taban kapısı döngüden sonra yalnız `taban_aday` üzerinde (1448). ⇒ **kapsam-daraldı, bayat-taban kontrolünden ÖNCE**.
- Dört kayıt `3429ead9`'da (Z6 öncesi) 1281 öncesi dönemsizdi ⇒ kapsam temiz ⇒ taban kapısı BAYAT. Z6 sonrası görünür 1281 öncesi
  dönem kazandılar (Gence 1256, Hucend/Taşkent 1227, Kars 1256 — B §A4) ⇒ artık döngüde ATLANAN'a düşüyorlar, taban kapısına
  HİÇ ULAŞMIYORLAR. Aynı mekanizma.
- 🔴 Yan sonuç: bir kayıt hem bayat hem kapsam-daraldı ise **yalnız atlanan** görünür, bayatlığı ölçülmez. Bu yamada
  başka 100 bayat olduğu için çıkış yine 2; tek bayat kayıt bu olsaydı çıkış 0'a düşerdi (§⑥).

## ⑤ Z5 v3 bu 63'ü çözüyor mu — TEYİT EDİLDİ (bugünkü main'de yeniden koşturuldu)
- `ZAMAN-Z5-1009-KOORD-v3.diff`: origin/main `667e283a` üzerinde `git apply --check` ✓ (tek dosya, `data/yer_yama_1923_1945.js`).
- Kuru koşu (`--taban` yok): **çıkış 0** · uygulandı **3987** · kapsam-daraldi **0** · ATLANAN **0** · TABAN KAPISI TAZE (3987) ·
  GERİ ALMA KAPISI TAZE (3987) · mükerrer-tekillendi 2 · not-eklendi 712. ZAMAN-Z5-1008 §v3 ile birebir; artık tmp tabanda değil
  gerçek main'de.
- (v2'yi bugünkü main'de ayrıca koşturmadım: A'nın makine kümesi B ve C'nin rapor listeleriyle 63/63 örtüştü ve v2 kararı zaten
  "kullanılmamalı".)

## ⑥ KAPI SORUSU — koordinatörün ölçütüne karşı: **KALDI**
**Ölçüt (ölçümden önce yazıldı):** en az bir kayıt "kapsam daraldı" diye atlandıysa çıkış ≠ 0.

### 6a. Atlama sebepleri ADIYLA — çıkışa etkisi (kod okundu)
| kova (`ist[...]`) | satır | çıkışı etkiliyor mu |
|---|---|---|
| `cakisma` (iki yama farklı içerik) | 1040-1043 | HAYIR |
| `kendi-kilidi` (`d2_gerek`) | 1045-1048 | HAYIR |
| `taninmadi` (motor okuyor, araç göremiyor) | 1052-1056 | **EVET → çıkış 4** (1592-1596) — tek etkileyen |
| `veride-yok` | 1057-1060 | HAYIR |
| `belirsiz` (çok kayıtta) | 1061-1064 | HAYIR |
| `satir-paylasimli` | 1065-1069 | HAYIR |
| `gun-maddesiz` (`d:` günü maddesiz) | 1072-1082 | HAYIR |
| `mukerrer-anahtar` | 1107-1115 | HAYIR |
| kaynak ayrışan (`kaynak:` farklı) — sayaçsız | 1150-1158 | HAYIR |
| skaler boş değer — sayaçsız | 1160-1163 | HAYIR |
| `<alan>-dolu` (korunan alan dolu) | 1185-1189 | HAYIR |
| `cipa-yok` | 1208-1211 | HAYIR |
| **`kapsam-daraldi`** | **1236-1244** | **HAYIR** |
- Kovalar AYRI sayılıyor (özet kova kova basıyor, D225 düzeltmesi 1276) — ölçütün "tek sayıya toplanmaz" şartı TUTUYOR.
- Çıkış ≠ 0 veren yollar yalnız: 1 node hatası · 2 taban BAYAT / geri alma BAYAT · 3 kapı/taban ölçülemedi · 4 geri okuma / tanınmadı.
  `atlanan` listesi çıkış kararına hiç girmiyor.

### 6b. Sentetik ölçüm — bugünkü main, yalnız kapsam-daraldı
Z5 v1'den 3 kayıt (İstanbul, Konya, Gence) `data/yer_yama_zz_sinav63.js`'e (geçici worktree) kopyalandı,
`--yama-glob '^yer_yama_zz_sinav63\.js$'`, `--taban` yok:
```
kapsam-daraldi 3 · ATLANAN (3) · TABAN KAPISI 0 değişim ✓ TAZE · GERİ ALMA KAPISI 0 değişim ✓ bayat yama yok — 0 değişim TAZE
exit 0
```
⇒ **KALDI.** Üç kaydın hiçbiri yazılmıyor, ama araç çıkış 0 veriyor ve iki kapı da "TAZE" basıyor (0 değişim üzerinde).

### 6c. İkinci soru — inmiş yamalar bugün kapsam-daraldı üretiyor mu (ölçüldü)
Yöntem: `data/` altındaki her `yer_yama*.js` (104 dosya; karantinalı `yer_yama_1923_1945.js` ve sentetik hariç) **tek tek**
`--yama-glob '^<dosya>$'` ile, `--taban` yok, `timeout 150`, bugünkü main'e karşı kuru koşturuldu. Zaman aşımı 0.
- Çıkış dağılımı: **0 → 69 dosya · 2 → 29 · 3 → 6**.
- kapsam-daraldı ≥ 1: **24 dosya, 121 kayıt.** Bunların **9 dosya / 10 kaydı ÇIKIŞ 0** (sessiz):
| yama | kayıt | kaybolacak aralık |
|---|---|---|
| yer_yama_1923_bosluk_0906.js | Honolulu | 1795-01-01→1898-08-12 |
| yer_yama_1923_bosluk_0906.js | Timbuktu | 1281-01-01→1430-01-01; 1468-01-01→1700-01-01 |
| yer_yama_arnavutluk.js | Akçahisar (Kruja) | 1478-06-15→1478-06-16; 1912-11-28→1923-10-29 |
| yer_yama_doguasya.js | Mergen (Nenjiang) | 1686-01-01→1923-10-29 |
| yer_yama_floransa.js | Floransa | 1861-03-17→1923-10-29 |
| yer_yama_litvanya.js | Çehrin (Çigirin) | 1678-07-19→1678-08-21 |
| yer_yama_sh106.js | Ahıska | 1578-08-01→1578-08-09 |
| yer_yama_silistre_0906.js | Silistre | 1413-07-05→1419-01-01 |
| yer_yama_timbuktu.js | Timbuktu | 1281-01-01→1430-01-01; 1468-01-01→1700-01-01 |
| yer_yama_uyg3.js | Şehrizor | 1630-03-16→1638-12-24 |
- Kalan 15 dosya (111 kayıt) çıkış 2/3 veriyor ama sebep kapsam-daraldı DEĞİL (geri alma BAYAT ya da taban ölçülemedi); kapsam-daraldı
  kayıtları orada da çıkışa katkı vermiyor. En büyükleri: vassal_kid_0906 47 · romanya 18 · tbmm_1920_0905 17 · manda_0906 8 ·
  zend_kacar 7. Tam tablo yalnız scratchpad'de (yazılmadı).
- 📌 Akçahisar · Floransa · Ahıska bilinen vakalar: `63bb90dd` "HUKUM KAPSAM DARALDI UCLUSU" (6 Eylül) üçünü adıyla teşhis etmiş,
  "yama olduğu gibi uygulanmaz, birleştirilir" hükmü vermiş. Bugün hâlâ çıkış 0 ile atlanıyorlar. Öteki 7 kaydın hükmünü bulamadım.
- `git log` taraması: commit mesajında "KAPSAM DARALDI" geçen tek commit `63bb90dd`; "atlandı"/"_sahiplik_uygula" aramasında
  inişlerin atlanan listesi mesajlarda tutulmamış ⇒ "geçmişte hangi inişte atlandı" sorusunu commit mesajından çıkaramadım;
  yerine bugünkü durum kuru koşuyla ölçüldü (yukarıdaki tablo).

## Ölçtüm · bulamadım · istiyorum
- **Ölçtüm:** ① A yeniden üretildi (main `667e283a`, Z5 v1 kuru, `--taban 67e9ec9d`): 70 atlanan + 100 bayat, çıkış 2. ② A63 = B = C,
  63/63/63, bütün farklar 0. ③ Mekanizma `_sahiplik_uygula.py:1236-1244` + `ARALIK_RX` (956); 63/14 ayrımı görünür/görünmez dönem
  ile istisnasız açıklanıyor. ④ Öncelik: kapsam kontrolü (döngü içinde) taban kapısından (1448) önce. ⑤ v3 bugünkü main'de çıkış 0,
  3987/3987, atlanan 0. ⑥ Kapı: kapsam-daraldı çıkışı etkilemiyor; sentetik kuru koşu çıkış 0 ⇒ ölçüte göre **KALDI**; 104 inmiş
  yamada 9 dosya / 10 kayıt bugün sessizce atlanıyor.
- **Bulamadım:** Geçmiş inişlerin atlanan listeleri (commit mesajında yok). Honolulu · Timbuktu · Mergen · Çehrin · Silistre · Şehrizor
  için verilmiş bir hüküm. Kör dönem sayımında (110) kayıt adı eşleşmesi çok satırlı kayıtlarda eksik olabilir — 55 kayıt sayısı kaba.
- **İstiyorum (hüküm koordinatörde):** ① Kapı kararı: `kapsam-daraldi > 0` ⇒ çıkış ≠ 0 (ölçütünüz). ② `ARALIK_RX`'in anahtar sırasına
  bağımlılığı ayrı bir kusur olarak açılsın — kapsam koruması bugün 110 döneme kör; kapsam hesabı `girdi._cevir` gibi gerçek bir
  ayrıştırıcıdan yapılmalı (öneri; yazmadım). ③ Kapsam-daraldı + bayat birlikteyken bayatlığın da ölçülmesi (bugün atlanan bayatı gizliyor).
  ④ Z5 için v3 (bugünkü main'e temiz uygulanıyor, 63'ü çözüyor).
