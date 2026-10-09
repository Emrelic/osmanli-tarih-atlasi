# YIL-DOLGU-1009 — künye `f:` + künye-içi `kronoloji[].t` üç haneli yıl → `0YYY` + `ODAK-TAVAN.json` anahtarları (UYGULANMAMIŞ diff)

## ① ÖNGÖRÜ — ölçümden ÖNCE yazıldı (9 Ekim 2026)
Sınav anı: worktree `C:\atlas-dolgu2` = `origin/makine/umit` `d16c2b0f`. Okunan: `YIL-DOLGU-1008.md`,
`MOTOR-TARIH-TARAMA-1008.md` (§⑥, §1.4), `odak_cozum.js:410-500`, `odak_olc.py:342-560`,
`ODAK-TAVAN.json` anahtar listesi. `devletler.js` 1.410.368 bayt (1008 ile aynı). Eval, kapı,
renk_olc HENÜZ KOŞULMADI. Evren: `data/devletler.js` (bütün künye alanları) + `denetim/ODAK-TAVAN.json`.
1. Künye `f`/`t` evreni 110 = 64 değişen (`f` 64 · `t` 0) + 46 zaten dolgulu (32 `f` + 14 `t`).
2. `kronoloji[].t` üç haneli 47 → hepsi değişir; zaten dolgulu `kronoloji[].t` sayısı ayrıca ölçülür.
3. Dosyada üç haneli yıl taşıyan BAŞKA alan (künye `f/t` ve `kronoloji[].t` dışı; ör. `kronoloji[].f`,
   iç içe alanlar) = **0**.
4. Diff: 111 satır değişimi (bazı künyelerde `f` ve `kronoloji[0].t` farklı satırdaysa 111 satır;
   aynı satırdaysa daha az) — bayt +111 → 1.410.479; satır/CRLF/LF/CR sayıları aynı.
5. `ODAK-TAVAN.json`: kimlik listelerinde `k` alanı dolgusuz üç haneli yıllı **49** öğe; HEPSİ bu 47
   kronoloji maddesinden birine çözülür (49 > 47 ⇒ bazı maddeler iki listede). Kronoloji
   dosyalarından (künye dışı) gelen dolgusuz anahtar 0. Dolguluya çevrilince mevcut 65 dolgulu
   anahtarla çakışma (aynı liste içinde çift) **0**.
6. ⚠️ Ek risk (şartnamede yok): `evren_ozet` = sha1[:8](kimlik) — 47 maddenin eski özeti orada;
   etkisi kapı çıktısında görünmez (maddeler zaten listede) ama ölçülüp beyan edilir.
   ⚠️ İkinci risk: `odak_cozum.js` `tbSekme` ikiz düşürmesi `t|b` ile — bir `KRONOLOJI_*` dosyasında
   aynı maddenin DOLGULU kopyası varsa dolgudan sonra ikiz sayılır ve madde sayısı oynar. Öngörü: 0.
7. Kapı: `denetle.py` 2 → 2 birebir (PYTHONHASHSEED=0); `odak_olc.py` 0 → 0 birebir;
   `ODAK-KAPI-SINAV.py` önce = sonra; `node --check` 0 → 0.
8. `renk_olc.py`: `ayni_anahtar` örtüşen çift 60 → 70 (+10, ingiltere↔koloniler);
   `yakin_renk` "ölçülemedi" 2.041 → 2.725 (+684). Çıktının geri kalanı bu iki farkın türevi.

## 🟢 HÜKÜM: diff İNEBİLİR (odak kapısında "bulunamadı / ölü istisna" DOĞMADI; tersine 2 bayat anahtar kapandı)
`git apply --check` `d16c2b0f` (origin/makine/umit) üstünde temiz; `--check --reverse` reddediyor (diff uygulanmamış
ağaca karşı üretildi). Uygulanan dosyalar üretilen kopyalarla `cmp` ile bayt bayt aynı.

## ÖNGÖRÜ KARNESİ
| öngörü | ölçüm | hüküm |
|---|---|---|
| ① künye evreni 110 = 64 değişen + 46 zaten dolgulu | 64 (`f` 64 · `t` 0) + 46 (`f` 32 · `t` 14) | ✓ |
| ② `kronoloji[].t` üç haneli 47, hepsi değişir | 47 değişti; zaten dolgulu 62 → sonra 109 | ✓ |
| ③ başka alanda üç haneli yıl 0 | **0** alan (özyinelemeli, bütün dizgi değerleri) — 4 serbest METİN notunda gömülü (⑧b) | ✓ (açıklamalı) |
| ④ 111 satır, 1.410.368 → 1.410.479, satır sonu sayıları aynı | 111 satır (−111/+111) · 1.410.479 · CRLF 10495 · LF 10712 · CR 10496 önce = sonra | ✓ |
| ⑤ 49 dolgusuz anahtarın HEPSİ 47 maddeye çözülür | **✗ ÇÜRÜDÜ:** 47'si bu 47 maddeye (`yeni_kapsam_kimlik`), **2'si BAŞKA DOSYADAN** (`sekme_okunmayan_kimlik`, `kronoloji_cok_once1281_*`): veri `6e39f055`te (ZAMAN-Z7 PAD) ZATEN dolgulanmış, tavan eşlenmemiş (§3.4-2 açığı) ve bugün kapıda ÖTÜYOR | ✗ → diff'e alındı |
| ⑤ çift kayıt 0 | aynı liste içinde yeni çift **0** (önceden var olan 20 çoklu-küme ikizi `yeni_kapsam_kimlik`te 20 → 20, tasarım gereği) | ✓ |
| ⑥ `evren_ozet` 47 eski özet | **49** eski özet var, yeni özet 0 → 49 değiştirildi | ✓ (49) |
| ⑥ `tbSekme` ikiz düşmesi 0 | `odak_olc.py` çıktısı birebir (ikiz 98 → 98) | ✓ |
| ⑦ `denetle.py` 2→2 birebir · `odak_olc.py` 0→0 birebir · `node --check` 0→0 | ✓ · ✓ · ✓ | ✓ |
| ⑦ `ODAK-KAPI-SINAV.py` önce = sonra | çıkış 1 → 1, SONUÇ satırı aynı ("geçen 2 · BAŞARISIZ 3"); **tek fark** SEKME OKUNMAYAN 3 → 1 | ✗ (iyileşme yönünde) |
| ⑧ renk_olc örtüşen 60 → 70 | 60 → 70 (+10, hepsi `ingiltere` ↔ koloniler) | ✓ |
| ⑧ yakin_renk(kunye) ölçülemedi 2.041 → 2.725 | **2.023 → 2.707** (taban bugün 18 düşük; fark **+684 birebir**) | ✓ (fark) |

## ② YÖNTEM
- `devletler.js` node `vm` eval → 896 künye; bütün dizgi değerleri özyinelemeli taranıp dolgusuz
  (`^-?\d{1,3}(-\d\d){0,2}$`) ve dolgulu (`^0\d{3}…`) kovalarına ayrıldı.
- Bayt düzeyi yazım: her künyenin aralığı = kendi `id:"X"` eşleşmesi (dosyada tam 1, `assert`; dosya sırası eval
  sırasıyla aynı, `assert`) → sonraki künyenin `id:`si. Aralıkta `(?<![\w$])(f|t)\s*:\s*"<eski>"` eşleşme sayısı =
  o künyedeki hedef sayısı (`assert`); değerin ilk rakamının önüne tek bayt `0`, 111 konum, sondan başa. `replace(…,1)` yok.
- `ODAK-TAVAN.json` (5549 satır, hepsi CRLF; satır başına bir kimlik): her hedef satırın `json.dumps` ile yeniden
  üretimi ESKİ satırla bayt bayt aynı olduğu `assert` edildi, yalnız `k` değiştirildi. `evren_ozet` satırında 49
  özet değiştirildi, dizi `tavan_yaz` biçiminde (`"".join(sorted(...))`) yeniden sıralandı. CRLF 5549 → 5549.
- 2 ek anahtarın şartı `assert` edildi: kaynak dosyada `t:"0900-01-01", b:"…"` / `t:"0981-01-01", b:"…"` tam 1,
  dolgusuz biçim 0.
- Kapı koşuları aynı worktree'de: önce temiz `d16c2b0f`, sonra diff uygulanmış; `PYTHONHASHSEED=0`.
- `ODAK-KAPI-SINAV.py` diff'li ağaçta `git status data/` kirli diye REDDEDER ⇒ sarmalayıcıyla koşturuldu
  (yalnız `git_temiz_mi` → True; başka hiçbir şey değişmedi). Diff'siz ağaçta doğrudan koştu.
- Kapının TAVAN karşılaştırması (`kapi_olcumu`) `odak_olc.py`nin düz çıktısında YOK (yalnız `denetle_yayin` çağırır) ⇒
  ayrıca doğrudan çağrıldı, üç ağaçta (temiz · yalnız veri · veri+tavan).

## ③ GERİ OKUMA
- `devletler.js`: künye 896 → 896, `id` sırası aynı, her künyenin anahtar sırası aynı. JSON farkı **111 = 64 `f` +
  47 `kronoloji[].t`**, hepsi "baştaki tek `0`", fark kümesi hedef listesiyle birebir; başka fark **0**. Sonra üç
  haneli: **0**. `node --check` 0 → 0.
- Diff hunk denetimi: `devletler.js` −111/+111, 111/111 satır sonu korunmuş, 111/111 tek `0` eklemesi.
  `ODAK-TAVAN.json` −50/+50 = 49 kimlik satırı (49/49 tek `0` eklemesi) + 1 `evren_ozet` satırı; satır sonu 50/50 korunmuş.
- `ODAK-TAVAN.json`: geçerli JSON; üst anahtar 22 → 22, sıra aynı; çift JSON anahtarı 0/0; değişen kimlik **tam 49**
  (`yeni_kapsam_kimlik` 47 · `sekme_okunmayan_kimlik` 2), her biri yalnız `k`'de baştaki `0`; sayı alanları dokunulmadı
  (liste uzunlukları aynı, sağlama tutarlı); sonra dolgusuz `k`: **0** (bütün listelerde).
- `evren_ozet`: 12.899 → 12.899 özet; çıkan 49, giren 49; çift özet 0; sıralı.

## ④ KAPI
| | diff'siz | diff'li |
|---|---|---|
| `denetle.py` çıkış · satır | 2 · 348 | 2 · 348 — **ham `diff` 0 satır** |
| ÖLÇÜLEMEDİ | yalnız Değişmez 8 (`devletler_harita.js` YOK) | aynı |
| `odak_olc.py` çıkış | 0 | 0 — **ham `diff` 0 satır** |
| `kapi_olcumu()` ihlal | True | True (aynı önceden var olan sebep) |
| · ODAKSIZ / YENİ KAPSAM / yk kapandı | yeni 0 · 4 · 2 | **aynı** |
| · SEKME SESSİZ | GERİLEDİ 1 (`1381 Timur … sekme iran`) · iyileşme 8 | aynı |
| · SEKME OKUNMAYAN | GERİLEDİ **3** (`0900 Mapungubwe`, `0981 Bạch Đằng`, `1026-01-08 Somnat/gazneli`) · iyileşme **2** | GERİLEDİ **1** (yalnız gazneli) · iyileşme satırı **yok** |
| `ODAK-KAPI-SINAV.py` | çıkış 1 · geçen 2 · BAŞARISIZ 3 | çıkış 1 · geçen 2 · BAŞARISIZ 3 (her bölümde OKUNMAYAN 3 → 1) |
| `node --check` | 0 | 0 |

🔴 **Kapı diff'SİZ ağaçta ZATEN ihlalde** (bu görevden bağımsız): SEKME SESSİZ 1 (iran) + SEKME OKUNMAYAN 1
(gazneli `1026-01-08`) — sınavın ⓿ taban, ② ve ④ bölümleri bu yüzden BAŞARISIZ. Diff bu ikisine dokunmuyor.

📌 **③ ön şartın kanıtı — yalnız veri uygulanıp tavan uygulanmasa** (üçüncü ağaç, ölçüldü): `YENİ KAPSAM` 4 → **51**
(47 dolgulu madde "dondurmada yok" diye basılır) ve "yeni kapsam listesinden **49** kimlik kapandı" — yani 47 yeni ölü
anahtar doğar. Bloke etmez (`devletler.js` tavan evreninde değil) ama tam §3.4-5'in ölü istisnası. Aynı commit şart.

## ⑧ RENK_OLC (beklenen iyileşme — dizgi kıyası artık doğru)
| | diff'siz | diff'li |
|---|---|---|
| `renk_olc.py` çıkış | 0 | 0 |
| AYNI ANAHTARI PAYLAŞIP TARİHİ ÖRTÜŞEN | 60 | **70** (+10: `ingiltere 0927→1945` ↔ siyera-leon, nijerya, altın-kıyısı, becuanaland, güney-rodezya, kuzey-rodezya, nyasaland, kenya, güneybatı-afrika mandası, tanganika mandası) |
| çakışma · görünmez · aynı-hex · yakın-ama-değmeyen | 7 · 0 · 0 · 9 | aynı |
| `yakin_renk(kunye=True)` ölçülemedi (k=komşuluk ve k=None) | 2.023 | **2.707** (+684) |
| `yakin_renk(kunye=True)` ihlal · sınırda · n (k=komşuluk) | 9 · 133 · 142 | aynı |
| `yakin_renk(kunye=False)` ihlal · sınırda · ölçülemedi | 9 · 130 · 7.568 | aynı (veri zarfı künyeyi okumaz) |

Çıktıda değişen yalnız: satır 117 (60→70), 20 yeni döküm satırı, özet satırı. 684 çift dolgusuz veride "eşzamanlı
değil" diye SUSULUYORDU; artık "örtüşme penceresinde eşzamanlı nokta yok" (ölçülemedi) kovasına düşüyor — yeni ihlal 0.
2.041 (DENETLE-TARIH-KALAN) ↔ 2.023 (bugün): taban 18 farklı (araya giren veri), fark 684 birebir.

## ⑤ DOĞRULAMA TABLOSU — künye `f`/`t` evreni 110

### ⑤a DEĞİŞEN 64 (`f` 64 · `t` 0) — sonra sütunu diff uygulanmış dosyanın node `vm` eval'inden GERİ OKUNDU

| # | id | alan | önce | sonra (geri okuma) | |
|---|---|---|---|---|---|
| 1 | bizans | f | 330-05-11 | 0330-05-11 | ✓ |
| 2 | venedik | f | 697-01-01 | 0697-01-01 | ✓ |
| 3 | polonya-erken | f | 966-01-01 | 0966-01-01 | ✓ |
| 4 | papalik | f | 756-01-01 | 0756-01-01 | ✓ |
| 5 | fransa | f | 987-01-01 | 0987-01-01 | ✓ |
| 6 | ingiltere | f | 927-01-01 | 0927-01-01 | ✓ |
| 7 | sirvansah | f | 861-01-01 | 0861-01-01 | ✓ |
| 8 | yemen-zeydi | f | 897-01-01 | 0897-01-01 | ✓ |
| 9 | almanya | f | 962-02-02 | 0962-02-02 | ✓ |
| 10 | danimarka | f | 950-01-01 | 0950-01-01 | ✓ |
| 11 | dubrovnik | f | 700-01-01 | 0700-01-01 | ✓ |
| 12 | nube | f | 543-01-01 | 0543-01-01 | ✓ |
| 13 | norvec-kralligi | f | 872-01-01 | 0872-01-01 | ✓ |
| 14 | song | f | 960-01-01 | 0960-01-01 | ✓ |
| 15 | goryeo | f | 918-01-01 | 0918-01-01 | ✓ |
| 16 | poni | f | 977-01-01 | 0977-01-01 | ✓ |
| 17 | kanem-bornu | f | 800-01-01 | 0800-01-01 | ✓ |
| 18 | iskocya | f | 843-01-01 | 0843-01-01 | ✓ |
| 19 | bretanya | f | 939-01-01 | 0939-01-01 | ✓ |
| 20 | navarra | f | 824-01-01 | 0824-01-01 | ✓ |
| 21 | angkor-kmer | f | 802-01-01 | 0802-01-01 | ✓ |
| 22 | pagan | f | 849-01-01 | 0849-01-01 | ✓ |
| 23 | sunda-pajajaran | f | 669-01-01 | 0669-01-01 | ✓ |
| 24 | ziriler | f | 972-01-01 | 0972-01-01 | ✓ |
| 25 | magrave-sicilmase | f | 976-01-01 | 0976-01-01 | ✓ |
| 26 | suve-emirligi | f | 896-01-01 | 0896-01-01 | ✓ |
| 27 | mapungubwe | f | 900-01-01 | 0900-01-01 | ✓ |
| 28 | liao-hanedani | f | 916-01-01 | 0916-01-01 | ✓ |
| 29 | dali-kralligi | f | 937-01-01 | 0937-01-01 | ✓ |
| 30 | tien-le-hanedani | f | 980-01-01 | 0980-01-01 | ✓ |
| 31 | heian-japonya | f | 794-01-01 | 0794-01-01 | ✓ |
| 32 | srivijaya | f | 683-01-01 | 0683-01-01 | ✓ |
| 33 | medang | f | 732-01-01 | 0732-01-01 | ✓ |
| 34 | bali-warmadewa | f | 914-01-01 | 0914-01-01 | ✓ |
| 35 | gazneli | f | 963-01-01 | 0963-01-01 | ✓ |
| 36 | karahanli | f | 840-01-01 | 0840-01-01 | ✓ |
| 37 | samani | f | 819-01-01 | 0819-01-01 | ✓ |
| 38 | buveyhi | f | 932-01-01 | 0932-01-01 | ✓ |
| 39 | ziyari | f | 928-01-01 | 0928-01-01 | ✓ |
| 40 | revvadi | f | 979-01-01 | 0979-01-01 | ✓ |
| 41 | bavendi | f | 665-01-01 | 0665-01-01 | ✓ |
| 42 | annazi | f | 991-01-01 | 0991-01-01 | ✓ |
| 43 | musafiri | f | 942-01-01 | 0942-01-01 | ✓ |
| 44 | badusbani | f | 723-01-01 | 0723-01-01 | ✓ |
| 45 | idil-bulgar | f | 965-01-01 | 0965-01-01 | ✓ |
| 46 | koco-uygur | f | 911-01-01 | 0911-01-01 | ✓ |
| 47 | mervani | f | 983-01-01 | 0983-01-01 | ✓ |
| 48 | endulus-emevi | f | 756-05-15 | 0756-05-15 | ✓ |
| 49 | leon-kralligi | f | 910-01-01 | 0910-01-01 | ✓ |
| 50 | barselona-kontlugu | f | 801-01-01 | 0801-01-01 | ✓ |
| 51 | normandiya | f | 911-01-01 | 0911-01-01 | ✓ |
| 52 | flandre | f | 862-01-01 | 0862-01-01 | ✓ |
| 53 | toulouse | f | 849-01-01 | 0849-01-01 | ✓ |
| 54 | arles-kralligi | f | 933-01-01 | 0933-01-01 | ✓ |
| 55 | sicilya-emirligi | f | 947-01-01 | 0947-01-01 | ✓ |
| 56 | izlanda-serbest-devleti | f | 930-01-01 | 0930-01-01 | ✓ |
| 57 | kiev-rusu | f | 882-01-01 | 0882-01-01 | ✓ |
| 58 | birinci-bulgar | f | 681-01-01 | 0681-01-01 | ✓ |
| 59 | hirvatistan-kralligi | f | 925-01-01 | 0925-01-01 | ✓ |
| 60 | ani-bagratli-kralligi | f | 884-01-01 | 0884-01-01 | ✓ |
| 61 | kars-vanand-kralligi | f | 962-01-01 | 0962-01-01 | ✓ |
| 62 | lori-kralligi | f | 982-01-01 | 0982-01-01 | ✓ |
| 63 | seddadiler-gence | f | 951-01-01 | 0951-01-01 | ✓ |
| 64 | derbent-hasimi-emirligi | f | 869-01-01 | 0869-01-01 | ✓ |

### ⑤b ZATEN DOLGULU 46 (`f` 32 · `t` 14) — DOKUNULMADI (önce = sonra, "00YYY" yok)

| # | id | alan | önce | sonra | |
|---|---|---|---|---|---|
| 1 | norse-gronland | f | 0985-01-01 | 0985-01-01 | ✓ |
| 2 | mekke-serifligi | f | 0969-01-01 | 0969-01-01 | ✓ |
| 3 | cola | f | 0850-01-01 | 0850-01-01 | ✓ |
| 4 | bati-calukya | f | 0973-01-01 | 0973-01-01 | ✓ |
| 5 | dogu-calukya | f | 0624-01-01 | 0624-01-01 | ✓ |
| 6 | pala | f | 0750-01-01 | 0750-01-01 | ✓ |
| 7 | toltek | f | 0900-01-01 | 0900-01-01 | ✓ |
| 8 | ata-pueblo | f | 0850-01-01 | 0850-01-01 | ✓ |
| 9 | abbasi | f | 0749-11-28 | 0749-11-28 | ✓ |
| 10 | ukayli | f | 0990-01-01 | 0990-01-01 | ✓ |
| 11 | mezyedi | f | 0997-01-01 | 0997-01-01 | ✓ |
| 12 | hamdani-halep | f | 0944-10-29 | 0944-10-29 | ✓ |
| 13 | numeyri | f | 0991-01-01 | 0991-01-01 | ✓ |
| 14 | fatimi | f | 0909-01-01 | 0909-01-01 | ✓ |
| 15 | karmati | f | 0899-01-01 | 0899-01-01 | ✓ |
| 16 | medine-emirligi | f | 0969-01-01 | 0969-01-01 | ✓ |
| 17 | hulefa-yi-rasidin | f | 0632-01-01 | 0632-01-01 | ✓ |
| 18 | hulefa-yi-rasidin | t | 0661-01-01 | 0661-01-01 | ✓ |
| 19 | emevi | f | 0661-01-01 | 0661-01-01 | ✓ |
| 20 | emevi | t | 0750-08-05 | 0750-08-05 | ✓ |
| 21 | sasani | f | 0226-01-01 | 0226-01-01 | ✓ |
| 22 | sasani | t | 0651-01-01 | 0651-01-01 | ✓ |
| 23 | tahiri-horasan | f | 0821-01-01 | 0821-01-01 | ✓ |
| 24 | tahiri-horasan | t | 0873-01-01 | 0873-01-01 | ✓ |
| 25 | saffari | f | 0861-01-01 | 0861-01-01 | ✓ |
| 26 | sacogullari | f | 0889-01-01 | 0889-01-01 | ✓ |
| 27 | sacogullari | t | 0929-01-01 | 0929-01-01 | ✓ |
| 28 | tolunogullari | f | 0868-01-01 | 0868-01-01 | ✓ |
| 29 | tolunogullari | t | 0905-01-01 | 0905-01-01 | ✓ |
| 30 | ihsidi | f | 0935-01-01 | 0935-01-01 | ✓ |
| 31 | ihsidi | t | 0969-07-06 | 0969-07-06 | ✓ |
| 32 | aglebi | f | 0800-01-01 | 0800-01-01 | ✓ |
| 33 | aglebi | t | 0909-03-18 | 0909-03-18 | ✓ |
| 34 | idrisi | f | 0789-01-01 | 0789-01-01 | ✓ |
| 35 | idrisi | t | 0985-01-01 | 0985-01-01 | ✓ |
| 36 | rustemi | f | 0777-01-01 | 0777-01-01 | ✓ |
| 37 | rustemi | t | 0909-01-01 | 0909-01-01 | ✓ |
| 38 | midrari | f | 0772-01-01 | 0772-01-01 | ✓ |
| 39 | midrari | t | 0976-01-01 | 0976-01-01 | ✓ |
| 40 | hamdani-musul | f | 0905-01-01 | 0905-01-01 | ✓ |
| 41 | hamdani-musul | t | 0979-01-01 | 0979-01-01 | ✓ |
| 42 | hazar-kaganligi | f | 0630-01-01 | 0630-01-01 | ✓ |
| 43 | hazar-kaganligi | t | 0965-01-01 | 0965-01-01 | ✓ |
| 44 | uygur-kaganligi | f | 0745-01-01 | 0745-01-01 | ✓ |
| 45 | uygur-kaganligi | t | 0840-01-01 | 0840-01-01 | ✓ |
| 46 | ziyadi | f | 0818-01-01 | 0818-01-01 | ✓ |

## ⑥ KÜNYE-İÇİ `kronoloji[].t` — 47 DEĞİŞEN

| # | id | yol | önce | sonra (geri okuma) | |
|---|---|---|---|---|---|
| 1 | sirvansah | kronoloji[0].t | 861-01-01 | 0861-01-01 | ✓ |
| 2 | nube | kronoloji[0].t | 543-01-01 | 0543-01-01 | ✓ |
| 3 | nube | kronoloji[1].t | 651-01-01 | 0651-01-01 | ✓ |
| 4 | song | kronoloji[0].t | 960-01-01 | 0960-01-01 | ✓ |
| 5 | goryeo | kronoloji[0].t | 918-01-01 | 0918-01-01 | ✓ |
| 6 | poni | kronoloji[0].t | 977-01-01 | 0977-01-01 | ✓ |
| 7 | kanem-bornu | kronoloji[0].t | 800-01-01 | 0800-01-01 | ✓ |
| 8 | iskocya | kronoloji[0].t | 843-01-01 | 0843-01-01 | ✓ |
| 9 | bretanya | kronoloji[0].t | 939-01-01 | 0939-01-01 | ✓ |
| 10 | navarra | kronoloji[0].t | 824-01-01 | 0824-01-01 | ✓ |
| 11 | angkor-kmer | kronoloji[4].t | 802-01-01 | 0802-01-01 | ✓ |
| 12 | ziriler | kronoloji[0].t | 972-01-01 | 0972-01-01 | ✓ |
| 13 | magrave-sicilmase | kronoloji[0].t | 976-01-01 | 0976-01-01 | ✓ |
| 14 | suve-emirligi | kronoloji[0].t | 896-01-01 | 0896-01-01 | ✓ |
| 15 | liao-hanedani | kronoloji[0].t | 916-01-01 | 0916-01-01 | ✓ |
| 16 | dali-kralligi | kronoloji[0].t | 937-01-01 | 0937-01-01 | ✓ |
| 17 | tien-le-hanedani | kronoloji[0].t | 980-01-01 | 0980-01-01 | ✓ |
| 18 | heian-japonya | kronoloji[0].t | 794-01-01 | 0794-01-01 | ✓ |
| 19 | srivijaya | kronoloji[0].t | 683-01-01 | 0683-01-01 | ✓ |
| 20 | medang | kronoloji[0].t | 732-01-01 | 0732-01-01 | ✓ |
| 21 | medang | kronoloji[1].t | 929-01-01 | 0929-01-01 | ✓ |
| 22 | bali-warmadewa | kronoloji[0].t | 914-01-01 | 0914-01-01 | ✓ |
| 23 | gazneli | kronoloji[0].t | 963-01-01 | 0963-01-01 | ✓ |
| 24 | karahanli | kronoloji[0].t | 840-01-01 | 0840-01-01 | ✓ |
| 25 | samani | kronoloji[0].t | 819-01-01 | 0819-01-01 | ✓ |
| 26 | buveyhi | kronoloji[0].t | 932-01-01 | 0932-01-01 | ✓ |
| 27 | ziyari | kronoloji[0].t | 928-01-01 | 0928-01-01 | ✓ |
| 28 | revvadi | kronoloji[0].t | 979-01-01 | 0979-01-01 | ✓ |
| 29 | bavendi | kronoloji[0].t | 665-01-01 | 0665-01-01 | ✓ |
| 30 | annazi | kronoloji[0].t | 991-01-01 | 0991-01-01 | ✓ |
| 31 | musafiri | kronoloji[0].t | 942-01-01 | 0942-01-01 | ✓ |
| 32 | musafiri | kronoloji[1].t | 979-01-01 | 0979-01-01 | ✓ |
| 33 | badusbani | kronoloji[0].t | 723-01-01 | 0723-01-01 | ✓ |
| 34 | mervani | kronoloji[0].t | 983-01-01 | 0983-01-01 | ✓ |
| 35 | normandiya | kronoloji[0].t | 911-01-01 | 0911-01-01 | ✓ |
| 36 | flandre | kronoloji[0].t | 862-01-01 | 0862-01-01 | ✓ |
| 37 | toulouse | kronoloji[0].t | 849-01-01 | 0849-01-01 | ✓ |
| 38 | arles-kralligi | kronoloji[0].t | 933-01-01 | 0933-01-01 | ✓ |
| 39 | arles-kralligi | kronoloji[1].t | 993-01-01 | 0993-01-01 | ✓ |
| 40 | sicilya-emirligi | kronoloji[0].t | 947-01-01 | 0947-01-01 | ✓ |
| 41 | ani-bagratli-kralligi | kronoloji[0].t | 884-01-01 | 0884-01-01 | ✓ |
| 42 | ani-bagratli-kralligi | kronoloji[1].t | 962-01-01 | 0962-01-01 | ✓ |
| 43 | kars-vanand-kralligi | kronoloji[0].t | 962-01-01 | 0962-01-01 | ✓ |
| 44 | lori-kralligi | kronoloji[0].t | 982-01-01 | 0982-01-01 | ✓ |
| 45 | seddadiler-gence | kronoloji[0].t | 951-01-01 | 0951-01-01 | ✓ |
| 46 | seddadiler-gence | kronoloji[1].t | 971-01-01 | 0971-01-01 | ✓ |
| 47 | derbent-hasimi-emirligi | kronoloji[0].t | 869-01-01 | 0869-01-01 | ✓ |

Zaten dolgulu `kronoloji[].t` (dokunulmadı): 62 · sonra dolgulu toplam 109 (= 62 + 47).

## ⑦ `ODAK-TAVAN.json` — 49 ANAHTAR

| # | liste | eski `k` (b kısaltıldı) | yeni `t` | `d` | kaynak |
|---|---|---|---|---|---|
| 1 | yeni_kapsam_kimlik | 543-01-01\|Makurya Krallığı Hristiyanlığı kabul etti (Do | 0543-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 2 | yeni_kapsam_kimlik | 651-01-01\|Araplarla Bakt Antlaşması imzalandı, uzun bir | 0651-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 3 | yeni_kapsam_kimlik | 665-01-01\|Bâv b. Şâpûr Taberistan halkınca hükümdar seç | 0665-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 4 | yeni_kapsam_kimlik | 683-01-01\|Kedukan Bukit yazıtı: Srivicaya'nın bilinen i | 0683-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 5 | yeni_kapsam_kimlik | 723-01-01\|Bâdüsbânî hânedanı Taberistan'da hüküm sürüyo | 0723-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 6 | yeni_kapsam_kimlik | 732-01-01\|Canggal yazıtı: Sanjaya'nın Orta Cava'daki kr | 0732-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 7 | yeni_kapsam_kimlik | 794-01-01\|Başkent Heian'a (Kyoto) taşındı, Heian dönemi | 0794-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 8 | yeni_kapsam_kimlik | 800-01-01\|Kanem Krallığı, Çad Gölü'nün kuzeydoğusunda k | 0800-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 9 | yeni_kapsam_kimlik | 802-01-01\|II. Jayavarman Kulen dağında kutsanıp Kmer kr | 0802-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 10 | yeni_kapsam_kimlik | 819-01-01\|Halife Me'mûn'un emriyle Sâmânhudât'ın torunl | 0819-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 11 | yeni_kapsam_kimlik | 824-01-01\|İñigo Arista, Pamplona Krallığı'nı kurdu | 0824-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 12 | yeni_kapsam_kimlik | 840-01-01\|Uygur Devleti'nin yıkılışından sonra Kâşgar-B | 0840-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 13 | yeni_kapsam_kimlik | 843-01-01\|Kenneth MacAlpin, Pikte ve İskoç krallıkların | 0843-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 14 | yeni_kapsam_kimlik | 849-01-01\|Kont Fredelon Toulouse'u Kel Charles'a teslim | 0849-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 15 | yeni_kapsam_kimlik | 861-01-01\|Yezîdî hanedanı tarafından Şamahı merkezli ku | 0861-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 16 | yeni_kapsam_kimlik | 862-01-01\|I. Baudouin Flandre kontu atanır | 0862-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 17 | yeni_kapsam_kimlik | 869-01-01\|Hâşim b. Sürâka Derbend'de bağımsızlığını ilâ | 0869-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 18 | yeni_kapsam_kimlik | 884-01-01\|Bagratlı Aşot prensliği krallığa dönüştürdü | 0884-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 19 | yeni_kapsam_kimlik | 896-01-01\|Mahzûmîler Harar'ın kuzeybatısında Şüve Emirl | 0896-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 20 | yeni_kapsam_kimlik | 911-01-01\|Saint-Clair-sur-Epte Antlaşması: Rouen ve Sei | 0911-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 21 | yeni_kapsam_kimlik | 914-01-01\|Blanjong yazıtı: Sri Kesari Warmadewa Bali'de | 0914-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 22 | yeni_kapsam_kimlik | 916-01-01\|Hıtay reisi Apaoki (Yelü Abaoji) kendini hükü | 0916-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 23 | yeni_kapsam_kimlik | 918-01-01\|Wang Geon, Goryeo hanedanını kurdu | 0918-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 24 | yeni_kapsam_kimlik | 928-01-01\|Merdâvîc Cürcân merkezli Ziyârî hânedanını ku | 0928-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 25 | yeni_kapsam_kimlik | 929-01-01\|Mpu Sindok krallığın merkezini Doğu Cava'ya t | 0929-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 26 | yeni_kapsam_kimlik | 932-01-01\|Büveyhî Ali İsfahan'ı işgal etti; hânedan İra | 0932-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 27 | yeni_kapsam_kimlik | 933-01-01\|Aşağı ve Yukarı Burgonya birleşerek Burgonya  | 0933-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 28 | yeni_kapsam_kimlik | 937-01-01\|Duan Siping Dali Krallığı'nı kurdu | 0937-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 29 | yeni_kapsam_kimlik | 939-01-01\|Alan II, Normanları kovup dükalığı yeniden ku | 0939-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 30 | yeni_kapsam_kimlik | 942-01-01\|Vehsûdân ve Merzübân babalarını indirip Şemîr | 0942-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 31 | yeni_kapsam_kimlik | 947-01-01\|Hasan b. Ali el-Kelbî Sicilya valisi: Kelbî e | 0947-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 32 | yeni_kapsam_kimlik | 951-01-01\|Muhammed b. Şeddâd Dvin'i ele geçirip hânedan | 0951-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 33 | yeni_kapsam_kimlik | 960-01-01\|General Zhao Kuangyin (Taizu), Çin'i yeniden  | 0960-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 34 | yeni_kapsam_kimlik | 962-01-01\|III. Aşot Vanand bölgesini merkezi Kars olmak | 0962-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 35 | yeni_kapsam_kimlik | 962-01-01\|III. Aşot krallığın merkezini Ani'ye taşıdı,  | 0962-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 36 | yeni_kapsam_kimlik | 963-01-01\|Alp Tegin Gazne'yi Levikler'den alarak Gaznel | 0963-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 37 | yeni_kapsam_kimlik | 971-01-01\|Fazl ile Ali el-Leşkerî Gence'yi ele geçirdi | 0971-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 38 | yeni_kapsam_kimlik | 972-01-01\|Bulukkîn b. Zîrî, Fâtımî halifesince Mağrib v | 0972-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 39 | yeni_kapsam_kimlik | 976-01-01\|Mağrâve emîri Hazrûn b. Fülfûl Midrârî emîrin | 0976-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 40 | yeni_kapsam_kimlik | 977-01-01\|Çin Song hanedanına ilk haraç/elçilik heyeti  | 0977-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 41 | yeni_kapsam_kimlik | 979-01-01\|Azerbaycan Revvâdîlerin eline geçti; Müsâfirî | 0979-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 42 | yeni_kapsam_kimlik | 979-01-01\|Tebriz hâkimi Ebü'l-Heycâ Hüseyin Müsâfirîler | 0979-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 43 | yeni_kapsam_kimlik | 980-01-01\|Lê Hoàn tahta çıktı, Erken Lê hanedanı başlad | 0980-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 44 | yeni_kapsam_kimlik | 982-01-01\|Taşir'de Lori merkezli Bagratlı krallığı kuru | 0982-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 45 | yeni_kapsam_kimlik | 983-01-01\|Bâd Meyyâfârikīn'ı alarak Mervânî devletinin  | 0983-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 46 | yeni_kapsam_kimlik | 991-01-01\|Ebü'l-Feth Muhammed b. Annâz Hulvân'da hüküm  | 0991-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 47 | yeni_kapsam_kimlik | 993-01-01\|III. Rudolf Burgonya kralı olur | 0993-01-01 | devletler.js | bu diff (devletler.js kronoloji) |
| 48 | sekme_okunmayan_kimlik | 900-01-01\|Limpopo-Shashe birleşiminde Mapungubwe krallı | 0900-01-01 | kronoloji_cok_once1281_afrika.js | 6e39f055 ZAMAN-Z7 PAD — veri ZATEN dolgulu, tavan eşlenmemişti |
| 49 | sekme_okunmayan_kimlik | 981-01-01\|Bạch Đằng — Lê Hoàn, Song istilasını püskürtt | 0981-01-01 | kronoloji_cok_once1281_dogu_asya.js | 6e39f055 ZAMAN-Z7 PAD — veri ZATEN dolgulu, tavan eşlenmemişti |

`evren_ozet` (sha1[:8] dizisi): 49 eski özet çıktı, 49 yeni özet girdi, 12.899 özet sabit, dizi yeniden sıralı (`tavan_yaz`ın ürettiği biçim: `"".join(sorted(...))`).


## ⑧b GÖMÜLÜ METİN (alan DEĞİL — değiştirilmedi, beyan)
Serbest açıklama notlarında eski değer metin olarak geçiyor (kaynak türetimini anlatan cümle):
`liao-hanedani.ic_not_f` "→ 916-01-01" · `gazneli.ic_not_f` "→ 963-01-01" · `bavendi.ic_not_kollar`
"Keyûsiyye 665-01-01→…" · `mervani.ic_not_f` "⇒ 983-01-01". Bunları tarih olarak okuyan kod ÖLÇÜLMEDİ.
İstenirse ayrı küçük diff.

# TESLİM
## ① ne ölçtüm
- Künye evreni **110**: 64 değişen (`f` 64 · `t` 0) + 46 zaten dolgulu (`f` 32 · `t` 14, dokunulmadı).
- `kronoloji[].t` **47** değişti (zaten dolgulu 62 dokunulmadı). Diff sonrası dosyada üç haneli yıl taşıyan alan **0**.
- `ODAK-TAVAN.json` **49** anahtar = 47 (bu diff'in kronoloji maddeleri, `yeni_kapsam_kimlik`) + 2 (veri `6e39f055`te
  dolgulanmış, tavan eşlenmemiş, `sekme_okunmayan_kimlik`) + `evren_ozet`te 49 özet. Çift kayıt 0.
- Kapı: `denetle.py` 2→2 ve `odak_olc.py` 0→0 **birebir**; `kapi_olcumu` SEKME OKUNMAYAN 3→1; sınav 1→1 (aynı SONUÇ).
- `renk_olc`: örtüşen 60→70, künye-ölçülemedi 2.023→2.707 (+684).
## ② ne bulamadım
- "49 anahtarın hepsi bu 47 kronoloji t'sine bağlı" varsayımını doğrulayan ölçüm bulunamadı: 2'si başka dosyadan.
- Diff'siz ağaçta kapıyı temiz gösteren durum bulunamadı: SEKME SESSİZ (iran 1381) + OKUNMAYAN (gazneli 1026-01-08)
  zaten ihlalde — sebebi ölçülmedi.
- Ekrana "0861" sızması, `app.js` `localeCompare` sırası: ÖLÇÜLMEDİ (görev dışı; MOTOR-TARAMA ②'de açık).
- `evren_ozet` güncellemesi bugünkü kapı çıktısını etkilemiyor (maddeler zaten listede); etkisi gelecekteki göç
  sınıflamasında. Şartnamede yoktu, §3.4-5 gereği eklendi.
## ③ ne istiyorum
1. Diff'i TEK commit'te indir (§3.4-2: veri + tavan aynı commit). `git apply --check` `d16c2b0f` üstünde temiz.
2. 2 ek anahtar (Mapungubwe / Bạch Đằng) kapsam genişlemesidir. ÖNERİM: kalsın (bugün kapıda ötüyorlar, ölü
   istisnadırlar). İstenmezse `sekme_okunmayan_kimlik`'teki 2 hunk satırı + `evren_ozet`'teki 2 özet çıkarılmalı.
3. Ayrı iş kalemi: kapı diff'siz tabanda zaten ihlalde (iran SESSİZ + gazneli OKUNMAYAN) — sınav ⓿/②/④ kırmızı.
4. `ODAK-KAPI-SINAV.py` kirli `data/`yı reddettiği için diff'li ağaçta ancak sarmalayıcıyla sınandı; uygulamadan
   sonra commit'li ağaçta bir kez daha doğrudan koşturulsun.

## Dosyalar
- `denetim/YIL-DOLGU-1009.diff` — `data/devletler.js` (111 satır) + `denetim/ODAK-TAVAN.json` (50 satır)
- `denetim/YIL-DOLGU-1009.md` — bu rapor (öngörü en üstte, ölçümden önce yazıldı)
