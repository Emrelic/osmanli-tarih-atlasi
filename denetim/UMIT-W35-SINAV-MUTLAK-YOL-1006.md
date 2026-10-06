# UMIT-W35-SINAV-MUTLAK-YOL-1006 — 17 sınav betiğinde mutlak yol → göreli

Devir: `denetim/SINAV-ENVANTER-1006.md §4 (b)` + `.tsv` (W27, `13a3ae93`), ATLANDI/b kovası = 17 betik.
Çalışma ağacı: `C:\atlas-w35` (`origin/main` = `7afbe86f`, detached). Makine: UMIT.

## 0. ÖNGÖRÜ (koşudan ÖNCE yazıldı)

Okuma (koşu yok) sonrası öngörü:

- **Kilit çakışması: 0.** 17 betiğin hiçbiri W31–W34 listesinde değil.
- **Canlı ağaca YAZAN betik (yamasız hâlde): 3 kesin + 1 cwd'ye bağlı.**
  - `ARAC-TUZ-SINAV-0924.py` → `C:\atlas\arac\girdi.py` + `girdi_listesi.py`'yi yeniden yazar
    (sonra geri yükler). 🔴 **`girdi.py` motor tuzunun 4 dosyasından biri** — koşu sürerken
    koşturulursa tuzu oynatır (CLAUDE.md §9.1 ③). Yamasız hâli bu yüzden HİÇ koşturulmayacak.
  - `ACILIS-ANIM-0929-sinav-kur.py` → `C:/atlas/denetim/ACILIS-ANIM-0929-sinav*.html` (4 dosya).
  - `ARAC-BEKCI-SINAV-YARIYAZIM-0911.py` → `C:\atlas\denetim\BEKCI-KOSU9.out`'u siler; nöbetçiyi
    `cwd=C:\atlas` ile canlı ağaçtan başlatır (nöbetçi de logu oraya yazar).
  - `ARAC-SERHAT-IZGARA-SINAV-0907.py` → `denetim/SERHAT-IZGARA-SINAV-0907.md` (cwd'ye göreli;
    mutlak değil ama hangi dizinden koşulursa oraya yazar).
- **İki betiğin mutlak yolu `C:\atlas` DEĞİL, kardeş ağaç:** `ARAC-LEGO-ayikla-sinav.py`
  (`C:/atlas-kosu15`) · `ARAC-YUK-KAPI-SINAV-0925.py` (`C:/atlas-yuk-bolme`). İkisi de bu
  makinede YOK ⇒ ikisi de önce ve sonra HATA öngörülür (aynı sebep).
- **Yardımcı modüllerde de mutlak yol var** (kilidimde değil): `ARAC-SERHAT-CIFT-0907.py` ·
  `ARAC-YERLESIM-UYGULA-0930.py` · `EKOKUMA-0076-B-capa.py` · `ARAC-LEGO-karo-puan.py` ·
  `ARAC-LEGO-karo-olc.py` · `ARAC-BEKCI-KOSU9-0910.py` (bu sonuncusu kendi `KOK`unu kendisi
  hesaplıyor mu — koşuda görülecek).
- (a) önce/sonra: **17/17 aynı kova** öngörülür. Kaba kova öngörüsü: GECTI ~9 · HATA ~5
  (LEGO, YUK-KAPI, silinmiş YAMA dosyaları) · OTTU ~2 · ZAMAN-AŞIMI 1 (BEKCI-YARIYAZIM:
  260 sn büyütme + 300 sn bekleme > 300 sn tavan).
- (b) `C:\atlas` status önce = sonra. Worktree'de 17 `M` + yan etki dosyaları
  (`ACILIS-ANIM-0929-sinav*.html` 4 · `sinav_dh.json` · `SERHAT-IZGARA-SINAV-0907.md` ·
  `BEKCI-KOSU9.out`).
- (c) yamadan sonra `grep -n "C:[/\\]atlas"` 17 dosyada **0**.

## 1. YAMA — `denetim/SINAV-MUTLAK-YOL-1006.diff` (17 dosya, +39 −31)

Kök her betikte `os.path.dirname(os.path.dirname(os.path.abspath(__file__)))`
(denetim/ → depo kökü; dosyaların zaten kullandığı `os.path` deyimi). `git apply --check --cached`
`7afbe86f` üstünde temiz. Özel durumlar:
- `ARAC-LEGO-ayikla-sinav.py` `C:/atlas-kosu15` · `ARAC-YUK-KAPI-SINAV-0925.py` `C:/atlas-yuk-bolme`
  → **depo kökünün KARDEŞİ** (`dirname(KOK)/atlas-kosu15`). `C:\atlas`'ta da `C:\atlas-w35`'te de
  aynı yola çıkar ⇒ davranış aynı. Bu ikisi kendi ağacını değil, BAŞKA bir ağacı okuyor; kardeş
  varsayımı bir beyandır, bu makinede ikisi de YOK.
- `ARAC-SERHAT-IZGARA-SINAV-0907.py`: rapor yazımı cwd'ye göreliydi → `KOK`a bağlandı (kökten
  koşunca aynı dosya).
- `EKOKUMA-0076-B-sina.py` · `EKOKUMA-0077-B-sina.py`: yardımcı `EKOKUMA-0076-B-capa.py` kendi
  `KOK = r"C:\atlas\data"`sini taşıyor ve çağrı ANINDA okuyor ⇒ sınav içinden `capa.KOK = DATA`
  atandı (yardımcıya dokunmadan).

## 2. SINAV

### (a) önce/sonra — 17/17 AYNI çıkış kodu
"Önce" = HEAD'deki asıl betik, yalnız tam kök `C:\atlas` → `C:\atlas-w35` metin ikamesiyle
(yamasız hâli canlıda koşturmak TUZ sınavı yüzünden YASAKTI — §3). Aynı ağaç, aynı veri.

| betik | önce | sonra | not |
|---|---|---|---|
| ACILIS-ANIM-0929-sinav-kur | 1 | 1 | `index.html`'de tek `<body>` assert'i düşüyor (bayat varsayım, yolla ilgisiz) |
| ARAC-BEKCI-SINAV-YARIYAZIM-0911 | ZAMAN-AŞIMI | ZAMAN-AŞIMI | 260 sn büyütme + 300 sn bekleme > 300 sn tavan |
| ARAC-FAZ2-SINAV-0906 | 0 | 0 | |
| ARAC-HIMAYE-SINAV-0914 | 1 | 1 | `NameError: MOTOR_YURUYUS` — AST'le çekilen işlev motorun yeni globalini görmüyor |
| ARAC-LEGO-ayikla-sinav | 1 | 1 | `sys.argv[1]` ister (argümanlı); fark yalnız satır no (+1) |
| ARAC-SERHAT-IZGARA-SINAV-0907 | 0 | 0 | |
| ARAC-SERHAT-SINAV-0907 | 0 | 0 | |
| ARAC-TASIMA-ON-SINAV-0905 | 0 | 0 | |
| ARAC-TUZ-SINAV-0924 | 1 | 1 | 🔴 "DOSYALAR BOZUK" — §3 |
| ARAC-YAMA-SINAV-1001 | 0 | 0 | |
| ARAC-YERLESIM-UYGULA-0930-SINAV | 0 | 0 | |
| ARAC-YUK-KAPI-SINAV-0925 | 1 | 1 | `C:\atlas-yuk-bolme` yok; fark yalnız yol yazımı `C:/`→`C:\` |
| EKOKUMA-0076-A-SINA | 0 | 0 | |
| EKOKUMA-0076-B-sina | 1 | 1 | 14 kart havuzla çakışıyor (kartlar data/'ya inmiş — bayat); fark yalnız küme SIRASI (küme eşit, 14) |
| EKOKUMA-0077-B-sina | 1 | 1 | 4 kusur (16 kart / beklenen 15 vb. — bayat sabit adayı) |
| KRONO-0076-C-sinav | 0 | 0 | |
| SINIR-CIZGI-0076-SINA | 0 | 0 | |

Toplam: GECTI 9 · kaldı/HATA 7 · ZAMAN-AŞIMI 1. Öngörü (9/5/2/1) kabaca tuttu.
Kalan 14 betiğin çıktısı bayt bayt aynı (CR normalize).

### (b) yan etki
- **`C:\atlas` `git status --porcelain`: görev başı = iki koşunun her betiği öncesi/sonrası = görev
  sonu, AYNI.** Ayrıca 13 şüpheli canlı dosyanın sha256'sı (4 motor dosyası + girdi_listesi +
  betiklerin yazdığı 8 dosya) her betik öncesi/sonrası ölçüldü: fark 0. Koşu sırasında `C:\atlas`'ta
  mtime'ı değişen dosyalar yalnız başka oturumların bekçi damgaları (`oturumlar/bekci/*`,
  `.bekci_son_*`) — sınavlardan değil.
- Worktree (yamalı koşu sonu, 17 yama dosyası dışında):
  ```
   M arac/girdi.py            ← ARAC-TUZ-SINAV-0924 (CRLF→LF, içerik farkı 0)
   M arac/girdi_listesi.py    ← ARAC-TUZ-SINAV-0924 (aynı)
   M denetim/BEKCI-KOSU9.out  ← ARAC-BEKCI-SINAV-YARIYAZIM-0911 (nöbetçi logu)
   M denetim/SERHAT-IZGARA-SINAV-0907.md ← kendi raporunu yeniden yazıyor
  ```

### (c) `grep -n -i "C:[/\\]atlas"` 17 dosyada: **0**

## 3. 🔴 YAN ETKİ BULGUSU — canlıya YAZAN betikler (yamasız hâlde)

1. **`ARAC-TUZ-SINAV-0924.py` — motor tuzunu BOZAR.** `girdi.py` ve `girdi_listesi.py`'yi
   `io.open(...).read()` (metin kipi, CRLF→LF) ile yedekleyip `newline=""` ile geri yazıyor ⇒ geri
   yüklenen dosya **LF**. Ölçüm: koşu sonrası `girdi.py` CRLF 0 (başta CRLF), LF-normalize içerik
   EŞİT; sınav kendisi "geri yuklendi → tuz 74a8… 🔴 DOSYALAR BOZUK" diyor. **Canlı
   `C:\atlas\arac\girdi.py` CRLF (872/872)** ⇒ yamasız hâli canlıda koşsaydı `girdi.py`'nin
   sha256'sı, dolayısıyla **motor tuzu kalıcı olarak değişirdi** (tam yeniden inşa) — ve `git diff`
   içerik farkı göstermeyeceği için kimse görmezdi. Yama bu kusuru ÇÖZMEZ (davranış değişmesin
   şartı); yalnız hedefi koşulan ağaca bağlar. Öneri (ayrı iş): yedek/geri yükleme `rb`/`wb`.
2. **`ACILIS-ANIM-0929-sinav-kur.py`** → `C:/atlas/denetim/ACILIS-ANIM-0929-sinav*.html` (4 dosya).
   Bugün assert'te düşüyor, yazmaya gelmiyor.
3. **`ARAC-BEKCI-SINAV-YARIYAZIM-0911.py`** → `C:\atlas\denetim\BEKCI-KOSU9.out`'u SİLER ve
   nöbetçiyi `cwd=C:\atlas`'tan başlatır (nöbetçi logu oraya yazar, bip çalar).
4. (cwd'ye bağlı) `ARAC-SERHAT-IZGARA-SINAV-0907.py` — rapor dosyası koşulan dizine yazılıyordu.

## 4. Bulunamadı / kilit dışı kalan
- **Yardımcı modüllerde mutlak yol duruyor (kilidimde DEĞİL, dokunmadım):**
  `ARAC-SERHAT-CIFT-0907.py` (canlıya `denetim/SERHAT-CIFT-0907.md/.json` yazar; SERHAT-SINAV onu
  YÜKLEMİYOR, yalnız json'unu okuyor) · `ARAC-YERLESIM-UYGULA-0930.py` (`--yaz` ile
  `C:\atlas\data\*` YAZAR; sınav yalnız işlevlerini alıyor, KOK'a uğramıyor) ·
  `EKOKUMA-0076-B-capa.py` (okur; sınavdan bağlandı) · `ARAC-LEGO-karo-puan.py` →
  `C:\atlas\denetim\ARAC-LEGO-karo-olc.py`'yi içe alır · `ARAC-LEGO-karo-olc.py` (`KOK`).
  ⇒ LEGO-ayikla, argümanla koşturulsa bile yardımcı üzerinden canlıdan OKUR.
- `denetim/*.py` içinde `C:\atlas` taşıyan dosya: **184** (bu işin 17'si hariç değil, kaba sayım).
- ZAMAN-AŞIMI betiğinin 300 sn sonrası davranışı: ölçülmedi.

---
# 1006b — TUZ çaresi + 5 yardımcı modül (`denetim/SINAV-MUTLAK-YOL-1006b.diff`)
Taban `origin/main` = `481b0482` (ilk diff `ec819dd3` ile ZATEN mainde; 1b ondan BAĞIMSIZ, tek başına uygulanır). Hiçbir ağaçta UYGULANMADI (koşu 20).
## ÖNGÖRÜ (koşudan önce)
- TUZ yeni (rb/wb): `GECTI`, `girdi.py`+`girdi_listesi.py` sha256 önce = sonra. TUZ eski: `KALDI`, iki dosyanın sha'sı DEĞİŞİR (CRLF→LF), LF-normalize içerik eşit.
- 5 yardımcı: önce (kökü worktree'ye çevrilmiş asıl) / sonra çıkış kodu ve çıktı AYNI; `YERLESIM-UYGULA --yaz` iki sürümde `data/`da AYNI farkı üretir.
## ÖLÇÜM (1006b)
Diff: 6 dosya, +15 −14; `git apply --check --cached` `481b0482` üstünde temiz. Grep `C:[/\]atlas` 6 dosyada **0**.
**TUZ iki yönde (atılabilir `C:\atlas-w35b`):**
```
başta          girdi.py b110d7a82985e629 · girdi_listesi.py a06b5f557a6848d2
ESKİ (main)    KALDI 🔴 "DOSYALAR BOZUK" · sonra 3dfcff1c53584b62 · edb9634d40ff5089  ← sha DEĞİŞTİ (CRLF→LF)
YENİ (rb/wb)   GECTI ✅ "baslangicla ayni"  · sonra b110d7a82985e629 · a06b5f557a6848d2  ← sha AYNI, git status arac/ 0
```
**5 yardımcı, eski (kökü worktree'ye çevrilmiş asıl) / yeni:**
| modül | arg | eski | yeni | çıktı | yan etki (`git diff` sha) |
|---|---|---|---|---|---|
| ARAC-SERHAT-CIFT-0907 | — | 0 | 0 | AYNI | md+json, iki sürümde aynı fark |
| ARAC-YERLESIM-UYGULA-0930 | kuru | 0 | 0 | AYNI | yok |
| ARAC-YERLESIM-UYGULA-0930 | `--yaz` | 0 | 0 | AYNI | `data/` 3 dosya, iki sürümde AYNI fark (`0de1433a01d8`) ⇒ `--yaz` davranışı değişmedi |
| EKOKUMA-0076-B-capa | 1896 1915 | 0 | 0 | AYNI (391 eşleşme) | yok |
| ARAC-LEGO-karo-olc | — | 1 | 1 | AYNI | `sys.argv[1]` ister; argümanlı davranış ÖLÇÜLMEDİ |
| ARAC-LEGO-karo-puan | — | 1 | 1 | AYNI | aynı (olc'u içe alırken düşüyor) |
`C:\atlas` `git status --porcelain` iş başı = iş sonu (AYNI). Worktree kaldırıldı.
⚠️ Kalan: `ARAC-SERHAT-CIFT-0907.py`'nin varsayılan `CIKTI`sı cwd'ye göreli (mutlak değil, dokunulmadı — çıktı metni değişmesin diye); kökten koşulmazsa başka dizine yazar.
📌 Yan gözlem (iş dışı): `YERLESIM-UYGULA --yaz` bugünkü main'de `data/` altında hâlâ 3 dosyayı değiştiriyor — birleştirme ya uygulanmamış ya da yalnız satır sonu; ÖLÇÜLMEDİ.
