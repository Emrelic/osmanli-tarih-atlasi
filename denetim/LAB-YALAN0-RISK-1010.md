# LAB-YALAN0-RISK-1010 — YALAN-0 araçlarının çağrı grafiği (STATİK, yalnız ölçüm)

> 🕰 10 Ekim güncellemesi: UMIT ab9aa957 + 60b7731c ile 7 aracın çıkış kodu düzeltildi; aşağıdaki işaretler o tarihten. Ölçüm değerleri değiştirilmedi — yalnız durum notu eklendi.

- **Ölçülen ağaç:** origin/main `6df8c2cd84aec31af69c1b8d5da3239660b4216d` (ayrık worktree `C:\atlas-yalan0-olcum`, iş sonunda kaldırıldı).
- **Girdi:** `denetim/LAB-KAPI-CIKIS-KODU-1009.md` §2.2 (21 YALAN-0) + §2.4/tablo (10 BELIRSIZ) = 31 araç.
- **Hiçbir araç KOŞULMADI.** data/ ve arac/'a dokunulmadı. Tek yürütülen kod, scratch'teki kendi okuyucum
  (`SESSIZ-SIFIR-TARA-1006.py`nin regex'lerini dosyadan okuyup 31 dosyaya uygulayan; repo aracı değil).
- **Soru:** "Bu aracın başarısızlıkta 0 dönmesi BU GECE bir şeyi yanlışlıkla TEMİZ gösterebilir mi?"

## 0. Kısa hüküm

| Kova | Sayı | Adlar |
|---|---|---|
| 🔴 KAPI ZİNCİRİNDE | **0** | — |
| 🟡 ELLE ÇAĞRILAN | **11** (9 YALAN-0 + 2 BELIRSIZ) | §3 |
| ⚪ ÖLÜ | **20** (12 YALAN-0 + 8 BELIRSIZ) | §4 |

**Bu gecenin yayın/kapı zincirinden (denetle · denetle_yayin · kos_ve_yayinla · tahta_bekci · paketle ·
_sahiplik_uygula · kaynak_durum ve çağırdıkları) 31 aracın HİÇBİRİNE yol yok** — ne doğrudan ad, ne
glob keşfi, ne importlib/exec, ne .bat/.ps1, ne git kancası, ne zamanlanmış görev, ne CLAUDE.md kapı talimatı.
⇒ Statik cevap: **bu gece kapıyı yanlış YEŞİL yapamazlar.** ("Bu gece güveniliyor mu" → ölçülemedi, §6.)

**Ama iki gizli kanal var (sürpriz):**
1. **`SINAV-ENVANTER-1006` (UMIT-W27, 6 Eki) bu araçların 14'ünü çıkış koduyla "GECTI" saydı** ve
   bunların **13'ü** (7 YALAN-0 + 6 BELIRSIZ) "kapıya aday hızlı küme (66 betik, 241 sn)" ölçütüne giriyor.
   `oturumlar/SABAH-1004.md:1366-1371` bunu **denetle_yayin'e bağlama kararı ③** olarak koordinatöre sunuyor
   (karar AÇIK; hiçbir dalda uygulanmamış — §5). ③ çıkış koduyla uygulanırsa bu 13 araç o gün 🔴 olur.
2. **`denetim/SESSIZ-SIFIR-TARA-1006.py` bir glob koşucusu**: `denetim/`+`arac/` altını listeler, koşturur,
   **çıkış 0'ı "TEMIZ?" kovasına** koyar (L84-100). Docstring: "KAPIYA BAĞLI DEĞİL. Elle ya da gece koşturulur".
   31 aracın 3'ü onun evreninde (§3). Kapı değil ama gece koşabilen bir rapor üreticisi.

## 1. Yöntem (tam olarak ne arandı)

1. **Ad taraması (her araç için):** `git grep -l -i -F "<taban ad, .py'siz>"` bütün izlenen dosyalarda
   (11 906 dosya: kod + md + json + tsv + diff + data/*.js yorumları), aracın kendisi hariç. Ayrıca
   `py <ad>` çağrı talimatı için `git grep -i -E "py(thon)?[^a-z]{0,6}(denetim/)?<ad>(\.py)?"`.
2. **Aynı ad taraması bütün dallarda** — 26 origin dalı + 8 yerel dal üzerinde `arac/*`, `*.bat`, `*.ps1`,
   `CLAUDE.md`, `KOSU-DEVIR-CEVRIMI.md` için: **her dalda 0 isabet.**
3. **Zincir kökleri:** 7 kök dosyadaki bütün `*.py/*.js/*.bat/*.ps1` dizgeleri ve `import`ları çıkarıldı.
   arac/ altında `denetim/<x>.py`'yi kodda açan TEK yer `arac/kaynak_durum.py:89` →
   `ARAC-MOTOR-ENV-KAPI-1006.py` (listede değil; o da 31 adın hiçbirini anmıyor).
   `arac/_sahiplik_uygula.py`deki `denetim/ARAC-*` adları yorum/sınav atfı (listede değil).
4. **Dinamik yükleme:** `runpy|exec(|__import__|spec_from_file_location|import_module|os.system|os.popen`
   arac/ + .bat/.ps1'de: `c13_delikleri_doldur.py:52` (uret_petek kaynağından ast), `uret_altlik.py:94`
   (regex'le kendi fonksiyonu), `donanim.py:178`/`olcut.py:114` (shapely/numpy...) — hiçbiri denetim/ değil.
   Adlarda tire var ⇒ düz `import` İMKÂNSIZ; yüklemek için dosya adı gerekir ⇒ ad taraması kapsar.
5. **Dinamik ad kurma:** `"%s"/f"{..}"/+` ile `-sina|-sinav|olc|uygula|capa|kapi` + `.py` kuran dizge ve
   `ARAC-%s`/`SINAV-{` önekleri: 0 ilgili isabet.
6. **Glob keşfi:** glob/listdir/scandir/walk/iterdir/readdirSync/Get-ChildItem içeren VE
   subprocess/exec/spawn içeren 289 dosya tek tek süzüldü; `denetim/` altını listeleyip **koşturan**
   tek dosya `denetim/SESSIZ-SIFIR-TARA-1006.py` (L63-75 evren, L105-117 koşu, L84-100 kova).
   Diğer denetim/ listeleyicileri (`ARAC-DONEMLER-OKUYUCU-SINAV-1004.py:318` "ÇALIŞTIRILMADI",
   `ARAC-PAKET-KORLUK-1001.py:123`, `ARAC-HAZIRLIK-0905.py:57`, `ARAC-TRIYAJ-METROPOL-0907.js:44`,
   `ARAC-MERGE-BAGIMLILIK-0907.py:155`, `ARAC-YAMA-MOTOR-0930-TAZELIK.py:8`) yalnız OKUR.
7. **Git kancaları:** `git config --show-origin --get-all core.hooksPath` → boş (yerel/global/sistem).
   `C:\atlas\.git\hooks` → yalnız `*.sample`. (Ayrık worktree'ler aynı ortak hooks dizinini paylaşır.)
8. **Zamanlanmış görevler:** `schtasks /query /fo LIST /v` (523 blok) `atlas|denetim|osmanli|\arac\|py.exe|python`
   süzgeci → tek isabet `\ClaudEmre Kutu Esitle` (`C:\claudemre\ClaudEmre-kutu\tasi.py`) — atlas DEĞİL.
   ⚠️ Yalnız BU makine; KOŞU 22 makinesi ölçülemedi.
9. **Protokol belgeleri:** `CLAUDE.md` ve `.claude/commands/kita.md` — 31 adın hiçbiri yok; CLAUDE.md'nin
   kapı talimatı `py arac/denetle.py` (L109) ve `py arac/denetle_yayin.py` (L624).
10. **Kod/yapılandırma listeleri:** 31 adı kodda/JSON/YAML'da sınav listesi olarak taşıyan dosya yok;
    `SINAV-ENVANTER-1006.tsv` bir ÇIKTI, onu okuyan kod yok (`git grep SINAV-ENVANTER -- *.py *.js *.bat *.ps1` = 0).

## 2. Çağrı grafiği — bulunan BÜTÜN kenarlar (31 araca gelen)

| Çağıran | → Araç | Biçim | Çıkış kodu okunuyor mu | Çağıranı kim çağırıyor |
|---|---|---|---|---|
| `denetim/EKOKUMA-0076-B-sina.py:24-28,101` | EKOKUMA-0076-B-capa | importlib + `capa.sina()` dönüş değeri | **Hayır — dönüş değeri** (False ⇒ `hata += 1`) — YALAN-0 yolu bu kenarda YOK | yalnız belgeler (ELLE) |
| `denetim/EKOKUMA-0077-B-sina.py:34,172` | EKOKUMA-0076-B-capa | aynı | Hayır — `return 1` | yalnız belgeler |
| `denetim/EKOKUMA-0077-B-tara.py:12-17` | EKOKUMA-0076-B-capa | aynı | Hayır — `sys.exit(1)` | yalnız `EKOKUMA-0077-B.md` |
| `denetim/ARAC-BEKCI-SINAV-YARIYAZIM-0911.py:25,45` | ARAC-BEKCI-SINAV-SAHTEMOTOR-0911 | subprocess.Popen, sahte süreç | Hayır — sonda `kill` (L77); okunan bekçinin kodu | yalnız belgeler + SESSIZ-SIFIR-TARA |
| `denetim/SESSIZ-SIFIR-TARA-1006.py:63-117` (glob) | ARAC-BEKCI-SINAV-YARIYAZIM-0911 · ODAK-BALKAN-0080-uygula · SINIR-D-OKYANUSYA-0077-olc | `subprocess.run(["py", yol])` argümansız | **EVET** — kod 0 ⇒ "TEMIZ?" (çıktıda "ölçülemedi"/NaN/"… 0" yoksa) | Kimse (docstring: "KAPIYA BAĞLI DEĞİL. Elle ya da gece") |
| UMIT-W27 envanter koşusu (repo'da koşucu yok; ürün `denetim/SINAV-ENVANTER-1006.tsv`, commit `13a3ae934`) | 14 araç "GECTI" | tek seferlik oturum koşusu | **EVET** (`cikis_kodu` sütunu); KAMERIKA için ayrıca çıktı izi okumuş: `çıkış0-ama-başarısızlık-izi` | Kimse; SABAH-1004 ⑦ kararına girdi |

`SESSIZ-SIFIR-TARA` evren tespiti (scratch okuyucu, aynı ATIF/MUTLAK/AGIR regex'leri): 31 araçtan
KOŞULUR = `ARAC-BEKCI-SINAV-YARIYAZIM-0911`, `ODAK-BALKAN-0080-uygula`, `SINIR-D-OKYANUSYA-0077-olc`; kalan 28 EVREN-DIŞI.
ODAK-BALKAN'ın YALAN-0 yolu `--ters` kipinde (L287-288); tarayıcı argümansız koşturur ⇒ o yol orada tetiklenmez.

**Zincir köklerinden 31 araca yol: YOK.** Kökler → (denetle_eslesme, denetle_statu, denetle_kapsama,
denetle_anakronizm, uret_*, surum_damgala, renk_olc, adres_nobetci, tahta, bekci_olc, tahta_kaynak,
kodla, yama_uygula.js, _kademe_uygula, _bayat_yama_kapi, kaynak_durum → ARAC-MOTOR-ENV-KAPI-1006) —
31 adın hiçbiri bu dosyalarda geçmiyor (§1.1-1.2) ve yukarıdaki çağıranların hiçbiri arac/'tan çağrılmıyor
(`EKOKUMA-0076-B-sina`, `EKOKUMA-0077-B-sina`, `EKOKUMA-0077-B-tara`, `ARAC-BEKCI-SINAV-YARIYAZIM-0911`,
`SESSIZ-SIFIR-TARA-1006` için ayrıca ad taraması: arac/ · .bat · .ps1 · CLAUDE.md = 0).

## 3. 🟡 ELLE ÇAĞRILAN — 11

Ölçüt: kodda kapı-dışı bir çağıranı var YA DA yaşayan bir belge/mesaj onu yeniden koşturmayı söylüyor.
Yanlış 0 bir tur kaybettirir, yayın kaybettirmez.

| Araç | Kova (1009) | Kanıt |
|---|---|---|
| ARAC-KIMLIK-SINA-0903 | YALAN-0 → KAPANDI (canlı, bugün 0/1) · ab9aa957 | `oturumlar/TAHTA.md:2606` (M-2595, 3 Eyl, **HERKES'e**): "`py denetim/ARAC-KIMLIK-SINA-0903.py <sizin json>` # künye · renk · ömür" — teslim öncesi elle kapı; `oturumlar/BAYRAK-DEVRI-0903.md:49` "üç kapı". Ayrıca envanter GECTI + hızlı-66 |
| EKOKUMA-0076-A-SINA | YALAN-0 (ÖLÇÜLDÜ) | `denetim/EKOKUMA-0076-A.md:14`, `denetim/EKOKUMA-0076-A-YAMA-app.js:44` ("`py denetim/EKOKUMA-0076-A-SINA.py` → ④ 'TANIMSIZ 0' demeli"), `js/app.js:12009` (yorum), TAHTA M-5050 |
| KRONO-0076-C-sinav | YALAN-0 | `denetim/KRONO-0076-C.md:123` "`py denetim/KRONO-0076-C-sinav.py` ile tekrarlanabilir", TAHTA M-5027 |
| ODAK-BALKAN-0080-uygula | YALAN-0 (`--ters`) | `denetim/ODAK-BALKAN-0080.md:48-51` (`--ters` "süzgecin ters sınavı"); SESSIZ-SIFIR-TARA evreninde (argümansız) |
| SINIR-D-OKYANUSYA-0077-olc | YALAN-0 | SESSIZ-SIFIR-TARA evreninde — **çıkış kodu okunuyor**, ✗ yolu (L267) 0 dönerse "TEMIZ?" |
| ARAC-BEKCI-SINAV-YARIYAZIM-0911 | YALAN-0 | SESSIZ-SIFIR-TARA evreninde (çıkış kodu okunuyor); belgeler `SINAV-MUTLAK-YOL-1006.diff` |
| EKOKUMA-0076-B-capa | YALAN-0 (`--sina`) | 3 denetim aracı importlib ile yükleyip `sina()` **dönüş değerini** kullanıyor — bu kenarlarda YALAN-0 yok; risk yalnız elle `--sina` |
| UMIT-W46b-OLC-1006 | YALAN-0 (`sina`) | `denetim/UMIT-W46-KESINTISIZ-SAHIPLIK-1006b.md:34,111` alt komut kullanımı |
| ARAC-OMUR-KAPISI-0903 | YALAN-0 | `oturumlar/BAYRAK-DEVRI-0903.md:52` devir listesinde; `oturumlar/KOSU-SONRASI-0903.md:200` ölçülmüş borç (1374) — kol AÇILMADI |
| SINIR-D-AMERIKA-0077-yukselt | BELIRSIZ (veri yazar) | `data/d_sinirlar_amerika.js:4` "Üretici: … 🔴 ELLE DÜZENLEME, yeniden üret" |
| ARAC-BEKCI-SINAV-SAHTEMOTOR-0911 | BELIRSIZ | YARIYAZIM'ın sahte süreci; kodu okunmuyor, öldürülüyor |

## 4. ⚪ ÖLÜ — 20

Ölçüt: kodda çağıranı yok; ad yalnız doğduğu rapor/TAHTA teslim mesajı + toplu taramalar
(SINAV-ENVANTER-1006, LAB-KAPI-CIKIS-KODU-1009, SINAV-MUTLAK-YOL/YANETKI/SESSIZ-SIFIR diff'leri — bunlar aracın
KENDİSİNİ yamalıyor, çağırmıyor) ve data/ yorumlarında geçiyor. Neden duruyor: depo kuralı denetim/ aletlerini
kanıt olarak saklıyor (ölçümün tekrarlanabilirliği); hiçbiri ömür beyan etmiyor (envanter: 167'nin 160'ı "belirsiz").

| Araç | Kova | Son commit (tek commit'liyse doğum) | Ne içindi |
|---|---|---|---|
| A-OKYANUSYA-0078-sina | YALAN-0 → KAPANDI (TARİHÎ, bugün 2) | `2074550a8` 24 Eyl | yeni Okyanusya dosyasının kabul sınavı; `data/paket_24.js:2669` yorumda "sınav:" diye anılıyor. Envanter GECTI, **hızlı-66** · 🕰 TARİHÎ — teslim-öncesi araç, bugün 2 ÖLÇÜLEMEDİ (a78 GIRDI'de, 61 nokta kendisiyle), gerileme sezicisi · ab9aa957 |
| A-OKYANUSYA-0078-alan | YALAN-0 | `2074550a8` 24 Eyl | 1923 alan vekili ölçümü (`--sina`) |
| ARAC-HARITA-DURUM-0074-KABARTMA-SINAV | YALAN-0 → KAPANDI (canlı, bugün 0) · 60b7731c | `75a3ccbbc` 21 Eyl | kabartma kör noktası iki yönlü sınavı (TAHTA M-4949). Envanter GECTI, **hızlı-66** |
| ARAC-KAMERIKA-0903-kunye-sina | YALAN-0 → KAPANDI (TARİHÎ, bugün 2) | `12d9d93bb` 3 Eyl | K.Amerika künye reçetesi teslim sınavı. Envanter GECTI (alt sebep "çıkış0-ama-başarısızlık-izi"), **hızlı-66** · 🕰 TARİHÎ — teslim-öncesi araç, bugün 2 ÖLÇÜLEMEDİ (46/46 reçete devletler.js'te), gerileme sezicisi · ab9aa957 |
| ARAC-MUKERRER-KAPI-0930 | YALAN-0 | `52222fa3c` 1 Eki | denetle.py'nin mükerrer ölçütünü modül olarak içe alıp ölçer (yön: araç → denetle, tersi değil) |
| ARAC-TASIMA-ON-SINAV-0905 | YALAN-0 | `ec819dd3a` 6 Eki (mutlak yol yaması) | MERGE adım ⑥ ön hazırlığı; `KOSU-SONRASI-KUYRUK.md:2363,2800` geçmiş kullanım |
| ARAC-UYGULA4-ONSINAV-0918 | YALAN-0 → KAPANDI (TARİHÎ, bugün 2) | `98dd71454` 22 Eyl | UYGULA-4 yaması ön sınavı (TAHTA M-4493 tarihi). Envanter GECTI, **hızlı-66** · 🕰 TARİHÎ — teslim-öncesi araç, bugün 2 ÖLÇÜLEMEDİ (yama inmiş, nokta kendisi), gerileme sezicisi · 60b7731c |
| ARAC-YERLESIM-1281-ONCE-C | YALAN-0 | `52222fa3c` 1 Eki | 1281 öncesi yerleşim öneri JSON üretici (adım C); ad yalnız LAB-1009'da |
| NOKTA-KAFKAS-0077-sina | YALAN-0 → KAPANDI (canlı, bugün 0/1) · ab9aa957 | `120015e8d` 27 Eyl | Kafkas nokta dosyasının kabul sınavı. Envanter GECTI, **hızlı-66** |
| SINAV-DONEM-KAYNAK-0907 | YALAN-0 → KAPANDI (canlı, bugün 0) · 60b7731c | `e1da4ae78` 7 Eyl | dönem-içi `kaynak:` iniyor mu (dayanak yaması kapısı; KUSUR'da yamayı kendisi yazmıyor). Envanter GECTI, **hızlı-66** ⚠️ envanter "yan etkisiz", LAB-1009 "dosya yazar" diyor — çelişki, ölçülemedi · DÜZELTME (UMIT Y §1, audit hook ölçümü): yalnız %TEMP%'e yazar, siler; repo yan etkisi YOK — LAB'ın statik AST sınıflaması geçici dizini repo yazımından ayırmıyordu |
| SINAV-RENK-98-0903 | YALAN-0 | `d041a0800` 5 Eyl | renk partisi öngörü sınavı; UMIT-W32 "yanlış kova — yan etkili akış aracı". Envanter OTTU (bayat sabit) |
| SINIR-CIZGI-0076-SINA | YALAN-0 | `ec819dd3a` 6 Eki (mutlak yol yaması) | üretilen sınır dosyalarının node --check sınavı |
| ACILIS-ANIM-0929-sina | BELIRSIZ | `5e77ff104` 29 Eyl | perde animasyonu ölçümü (`data/acilis_siluet.js:55` yorum; `-sinav-kur.py` ile ad benzerliği tesadüf) |
| ARAC-EKO-BOLGE-BAG-SINA-0920 | BELIRSIZ | `ec819dd3a` 6 Eki | kart bağ sınavı (`data/ekokuma_bolge0073.js:61` yorum); envanter GECTI ama yan etkili |
| ARAC-INCE-BATI-AFRIKA-SINA | BELIRSIZ | `52222fa3c` 1 Eki | taraf kimliği kapı ②③. Envanter GECTI, **hızlı-66** |
| ARAC-KITA13-KUTU-SINAV-0912 | BELIRSIZ | `0fa4ea571` 12 Eyl | koordinatör kutularını tekrarlar. **hızlı-66** |
| ARAC-SICIL-SINAV-0910 | BELIRSIZ | `7a02aad83` 22 Eyl | kümeleme sınavı (`oturumlar/SICIL-INSA.md:75` listesinde). **hızlı-66** |
| ARAC-SINIR-ASYA-CIPA-SINAV-0907 | BELIRSIZ | `0bc074fbf` 7 Eyl | çıpa günü sınavı. **hızlı-66** |
| ARAC-TR1923-ZINCIR-SINAV-0914 | BELIRSIZ | `8340883bc` 15 Eyl | TR-1923 zincir oranları (eşiksiz). **hızlı-66** |
| ARAC-YUK-SINAV-OKU-0925 | BELIRSIZ | `a643af6a1` 25 Eyl | YUK-ACILIS çıktısı özeti. **hızlı-66** |

## 5. KAPI tipi notu (statik)

🔴 araç yok ⇒ "kapı çıkış koduna mı dayanıyor, çıktıyı mı ayrıştırıyor" sorusu bu gece için boş.
İki kapı-benzeri okuyucu için statik cevap:
- **SESSIZ-SIFIR-TARA-1006** (L84-100): önce çıkış koduna, 0 ise çıktıda yalnız `ölçülemedi|yüklenemedi`,
  `NaN|undefined`, "<üretilmiş> 0" desenlerine bakıyor. `✗`, `KALDI`, `🔴`, `İHLAL` ARAMIYOR ⇒ YALAN-0
  aracın başarısızlığı "TEMIZ?" görünür. (Amacı "girdi yokken sayı basmak" sınıfı; genel geçti/kaldı değil.)
- **SINAV-ENVANTER-1006 koşucusu** (repo'da yok): `cikis_kodu` + en az bir çıktı izi deseni
  (KAMERIKA'yı "çıkış0-ama-başarısızlık-izi" diye işaretlemiş). Hangi desenler — ölçülemedi (koşucu yok).
- **SABAH-1004 ⑦ kararı ③** ("denetle_yayin'e bağlanır ⇒ sınav ötmeden yayın çıkmaz", `oturumlar/SABAH-1004.md:1366-1371`,
  ⑰ L1561): uygulanmamış — 34 dalın hiçbirinde arac/'ta ad yok, `TOPLU-SINAV` dosyası yok.
  Uygulanırsa ve çıkış koduna dayanırsa: hızlı-66'daki 7 YALAN-0 başarısızlıkta YEŞİL, 6 BELIRSIZ HER ZAMAN YEŞİL olur.

## 6. Risk sırası (yüksekten düşüğe; hepsi "bu gece" için statik olarak sıfır yol)

1. **ARAC-KIMLIK-SINA-0903** — HERKES'e teslim-öncesi kapı diye duyurulmuş (M-2595) + hızlı-66.
2. **A-OKYANUSYA-0078-sina · NOKTA-KAFKAS-0077-sina · SINAV-DONEM-KAYNAK-0907 · ARAC-UYGULA4-ONSINAV-0918 ·
   ARAC-HARITA-DURUM-0074-KABARTMA-SINAV** — envanterde exit 0 ile GECTI, hızlı-66 (⑦③ olursa doğrudan 🔴).
3. **ARAC-KAMERIKA-0903-kunye-sina** — aynı küme, ama envanter çıktı izinden yakalamış.
4. **SINIR-D-OKYANUSYA-0077-olc · ARAC-BEKCI-SINAV-YARIYAZIM-0911 · ODAK-BALKAN-0080-uygula** — gece koşabilen
   SESSIZ-SIFIR-TARA çıkış kodunu okuyor (ODAK'ın YALAN yolu orada tetiklenmez).
5. **EKOKUMA-0076-A-SINA** (ölçülmüş YALAN-0; belgede "şu satırı görmeli" talimatı) · **KRONO-0076-C-sinav** ·
   **UMIT-W46b-OLC-1006** · **ARAC-OMUR-KAPISI-0903** — elle, belgeli.
6. **ARAC-INCE-BATI-AFRIKA-SINA · ARAC-KITA13-KUTU-SINAV-0912 · ARAC-SICIL-SINAV-0910 · ARAC-SINIR-ASYA-CIPA-SINAV-0907 ·
   ARAC-TR1923-ZINCIR-SINAV-0914 · ARAC-YUK-SINAV-OKU-0925** — BELIRSIZ ama hızlı-66'da; hükümsüz ⇒ kapıya bağlanırsa daima 0.
7. **EKOKUMA-0076-B-capa** — içe aktarma yolu dönüş değeriyle doğru; yalnız elle `--sina`.
8. **SINIR-D-AMERIKA-0077-yukselt** — veri üreticisi; YALAN değil ama "BİREBİR aynı" iddiası ölçümde tutmamıştı (LAB-1009).
9. Kalan ÖLÜ'ler: A-OKYANUSYA-0078-alan · ARAC-MUKERRER-KAPI-0930 · ARAC-TASIMA-ON-SINAV-0905 · ARAC-YERLESIM-1281-ONCE-C ·
   SINAV-RENK-98-0903 · SINIR-CIZGI-0076-SINA · ACILIS-ANIM-0929-sina · ARAC-EKO-BOLGE-BAG-SINA-0920 · ARAC-BEKCI-SINAV-SAHTEMOTOR-0911.

## 7. ÖLÇÜLEMEDİ

- **"Bu gece güveniliyor mu?"** — statik olarak cevaplanamaz: bir oturumun/işçinin bu gece bunlardan birini
  elle koşturup 0'ı "temiz" diye rapor edip etmeyeceği.
- **KOŞU 22 makinesi:** zamanlanmış görevleri, yerel kancaları, izlenmeyen betikleri, hangi dalı/commit'i koştuğu.
  Yalnız bu makine (schtasks) ve origin + yerel dallar ölçüldü.
- **`C:\atlas` (ana worktree) izlenmeyen dosyaları** — dokunma yasağı nedeniyle bakılmadı (git status index'e yazabilir).
- **UMIT-W27 envanter koşucusu** repo'da yok; ayrıştırdığı desenler bilinmiyor.
- **SESSIZ-SIFIR-TARA'nın gerçekten gece koşturulup koşturulmadığı** (zamanlanmış görev yok; "gece" = elle).
- **SINAV-DONEM-KAYNAK-0907 yan etki çelişkisi** (envanter: yok · LAB-1009: dosya yazar). → 10 Ekim: ÇÖZÜLDÜ — DÜZELTME (UMIT Y §1, audit hook ölçümü): yalnız %TEMP%'e yazar, siler; repo yan etkisi YOK — LAB'ın statik AST sınıflaması geçici dizini repo yazımından ayırmıyordu
- Statik tarama exec/dinamik yüklemeyi kaçırabilir; burada adlar tireli olduğundan dosya adı dizgesi gerekir —
  ad taraması bunu kapsıyor, ama ad bir dosyadan/ağdan okunup kurulursa (ör. bir .tsv'den) görünmez.
  Repo'da `SINAV-ENVANTER-1006.tsv`yi okuyan kod yok.

## 8. EK — 10 Ekim: UMIT'in çağrı grafiği düzeltmesi ve dördüncü kova (yeniden ölçüm değil, not)

**Ne geldi (koordinatör üzerinden, UMIT ölçümü):** `denetle.py`'deki `denetle_eslesme · _statu · _anakronizm · _kapsama`
adları YALNIZ yorum/docstring'de geçiyor — çağrı değil. Kaba ilk geçişte her "x.py" dizgisi çağrı sayıldığı için
9 araç köklere YANLIŞ bağlanmış; kenarlar kod okunarak doğrulanınca A sınıfının 15 dosyasından kapı zincirinde
yalnız `denetle_yayin` kaldı. Sınıf: `dersler/D269` ("desen METNİ eşledi, ÇAĞRIYI eşlemedi") · `D267` ("adla süzme yasak").

**Bu raporun kovalarına etkisi — sayı DEĞİŞMİYOR:**
- 🔴 KAPI ZİNCİRİNDE **0 → 0.** Bu rapor 31 araçtan hiçbirine kökten kenar bulmamıştı (§2); düşen kenarlar UMIT'in
  evrenindeki 9 araca aitti, bu raporun 31'ine değil. Kenar düşmesi "bu gece kapı zincirinde YALAN-0 yok" hükmünü
  **güçlendirir**, değiştirmez.
- 🟡 ELLE **11 → 11.** Bu kovanın kanıtı zaten çağrı değil, belge/TAHTA/yorum atfıdır (§3 tablosu) — "elle çağrılan"
  tanımı gereği. D269 düzeltmesi bu kovayı etkilemez; ama §3'teki `js/app.js:12009 (yorum)` gibi atıflar
  ÇAĞRI kanıtı DEĞİL, yalnız "bir insan/oturum bunu koşturdu/koştursun" kanıtıdır — öyle okunmalı.
- ⚪ ÖLÜ **20 → 20.**
- 🔴ₛ (yeni kova, aşağıda) **0.** §2'de `kos_ve_yayinla` kök olarak tarandı; 31 araçtan hiçbirini ayrı süreç olarak başlatmıyor.

**UMIT'in dördüncü kovası:** `🔴ₛ` = `kos_ve_yayinla`'nın AYRI SÜREÇ olarak başlattıkları (8 kopya). Çöküşleri
BORUYU durdurur, ama StringIO/yakalama kusuru ayrı süreçte ateşlenemez. UMIT'in sayıları (kendi evreni, 94 araç):
`🔴 kapı (aynı süreç) 7 · 🔴ₛ boru 8 · 🟡 elle 51 · ⚪ ölü 28`. Bu raporun 31 aracı o evrenin alt kümesidir;
iki rapor ayrı soruları soruyordu (bu rapor: YALAN-0 araçlarına yol var mı · UMIT: kapı zincirinin tamamı).

**⚪ kovasının sınırı (UMIT'in beyanı, bu rapor için de geçerli):** "ölü" = **çağrı yolu BULUNAMADI**, "çağrılmıyor"
DEĞİL. TAHTA'dan ya da bir oturumdan elle koşturulan bir aracı bu kova göremez (§7 ilk madde ile aynı sınır).

**Taban değişikliği (bilgi):** 65b8965d (denetle.py boru altında çökmesi kapandı) ve 19f20c2e (yayın kapısı + 14 araç,
stdout kusuru) ile iki ana kapı artık boru/yakalama altında da çökmüyor. LAB-KAPI-CIKIS-KODU-1009'un
"iki ana kapı dürüst" hükmüne "çökmüyor da" eklenebilir — bu raporun ölçüm tabanı (6df8c2cd8) bunlardan öncedir.
