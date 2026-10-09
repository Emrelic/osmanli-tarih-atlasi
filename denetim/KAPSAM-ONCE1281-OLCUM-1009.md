# KAPSAM-ONCE1281-OLCUM-1009: "Sümer'den bu yana" kapsamda BUGÜN ne var, ne yok (YALNIZ ÖLÇÜM)

Bu iş UMIT'te yapılan bir ölçümdür (9 Ekim 2026). **Hiçbir dosya değiştirilmedi.** Commit, push ve stash YOK. Tek çıktı bu dosya.

## 0. Taban ve yöntem
- **Bugün:** `origin/main` `0c4b383c`, geçici worktree `C:\atlas-umit-kapsam`.
- **Paket:** `origin/main` `0e9e8f71` üstüne `git apply -C1 denetim/ZAMAN-PAKET-1009.diff` uygulandı. Kontrol temiz geçti (yalnız "Context reduced to (1/1)" uyarısı verdi). Worktree `C:\atlas-umit-kapsam-z`, 18 dosya değişti.
  - ⚠️ İki worktree eklenirken arada `origin/main` ilerledi. `0c4b383c..0e9e8f71` farkı yalnız `.claude/commands/kita.md`, `oturumlar/HAZIR-KITA.md` ve `denetim/KITA-AD-MODEL-1009.diff` dosyalarına dokunuyor. `data/`, `arac/`, `js/` ve `index.html` iki tabanda aynı.
- **Z5 ve Z6 gövdeleri motor tarafından OKUNMUYOR.** Paketli ağaçta da öyle: `GIRDI_DOSYALARI` 93 dosya içeriyor, bunların hiçbiri `yer_yama*` değil. Etkileri bu yüzden ayrıca **SİMÜLE EDİLDİ**:
  - Yamadaki kayıt adıyla eşleştirildi.
  - `s/d/v/isg` alanları TAM DİZİ olarak değiştirildi. Bu `_sahiplik_uygula.py`nin alan semantiğidir.
  - Uygulayıcının süzgeçleri uygulanmadı (bayat kapısı, d2 kilidi, maddesiz gün).
  - Eşleşen kayıt: Z5 3982/3982, Z6 80/80.
- **Ayrıştırma:**
  - Yerleşimler motorun kendi okuyucusuyla okundu: `girdi.yukle()` → JSON (93 dosya, 4300 nokta). BOYALAR `arac/renkler.py`den alındı (704 anahtar).
  - Öteki her şey node `vm` ile okundu. `index.html`deki `<script src="data/…">` sırası izlendi; her `paket_NN.js` yerine paketin "İçindekiler" yorumundaki kaynak dosyalar aynı sırayla, tek bir bağlamda (`window = global`) koşturuldu. Toplam 330 kaynak, 1 hata: `acilis_siluet.js` `document` istiyor ve veri değil.
  - Her dosyanın yarattığı ya da büyüttüğü `window.X` dizisi kaydedildi.
- **Tarih:** `js/gun.js` (C0 gün sayacı, astronomik yıl) ile dizgi tam sayı güne çevrildi.
  - Dilimler yarı açık aralıklardır: `[MÖ: <0001-01-01)` · `[0001,1000)` · `[1000,1281)` · `[1281,1924)` · `[1924,1946)` · `[1946,2027)`.
  - Dönem dilimle örtüşüyorsa (`f < dilim sonu` ve `t > dilim başı`) o dilimde sayıldı.
  - Künye **yaşayan** sayıldı eğer `f < dilim sonu` ve `t ≥ dilim başı`.
  - **Renkli** künye: `id` ya da `harita:` değeri BOYALAR'da olan künye.
- **Aletler** (scratchpad, depoya girmedi): `…\scratchpad\kapsam1009\olc2.js` · `haritasiz.js` · `z5fark.js` · `dump.py`. Ham sonuçlar: `R_once.json` · `R_paket.json` · `R_paket_z6.json` · `R_paket_z5z6.json`.
- **§1.5 ile fark:** künye **897** (§1.5'te 896), yerleşim **4300** (§1.5'te 4299). Bu sayılar bugün ölçüldü; §1.5 bayat.

## 1. TABLO: dilim × boyut

Hücre biçimi: **bugün → paket**. Paket yerleşime dokunmuyor. Yerleşim satırlarındaki köşeli parantez, Z6 ve Z5 gövdelerinin simülasyonudur: `[+Z6 · +Z6+Z5]`.

| boyut | MÖ | MS 1–999 | 1000–1280 | 1281–1923 | 1924–1945 | 1946–2026 |
|---|---|---|---|---|---|---|
| Künye, dilimde BAŞLAYAN (renkli) | 0 | 96 (53) | 182 (142) | 602 (535) | 17 (5) | 0 |
| Künye, dilimde YAŞAYAN | **0** | 96 | 264 | 745 | 157 | 54 |
| …bunlardan renkli | 0 | 53 | 195 | 660 | 140 | 51 |
| …yaşayıp haritada görünen künye ¹ | 0 | 0 [1 · 1] | 1 [35 · 35] | 640 [640 · **633**] | 2 [2 · 133] | 0 [0 · 0] |
| Yerleşim, dilimde sahipli dönemi olan ² | **0** | 0 [1 · 1] | 1 [81 · 81] | 4148 [4148 · 4148] | 1 [1 · **3906**] | 1 [1 · 1] |
| Sahipli dönem (s+d+v) | 0 | 0 [1 · 1] | 1 [143 · 143] | 16407 [16404 · **16594**] | 3 [3 · 4461] | 1 [1 · 1] |
| …bunlardan `s:` · `__BOSLUK__` | 0 · 0 | 0 · 0 [1 · 1] | 1 · 0 [143] | 14521 · 101 [14518 · 101 / 14708 · **80**] | 3 · 0 [4425] | 1 · 0 |
| Yerleşimin İLK dönemi bu dilimde | 0 | 0 [1] | 1 [80] | 4147 [4067] | 0 | 0 |
| `s:` dönemlerinde geçen kimlik sayısı (künyesiz/renksiz) | 0 | 0 [1] | 1 [35 (1/4)] | 608 (22/7) [608 · 602 (22/1)] | 2 [2 · 113 (3/6)] | 1 |
| Kronoloji, D2 evreni (olaylar* + kronoloji_sinir*) | 0 | 0 | 0 | 2222 | 1 | 0 |
| Kronoloji, kuyruk (öteki kronoloji*) | 0 | 23 | 1179 → **1180** | 6133 | 502 → **505** | 4 |
| Kişi (`kisiler.js` 288): doğum · vefat ³ | 0 · 0 | 1 · 1 | 5 · 9 | 160 · 225 | 0 · 9 | 0 · 8 |
| Padişah (41): saltanat başı · doğum · ölüm ⁴ | 0 | 0 | 0 · 1 · 0 | 41 · 38 · 38 | 0 · 0 · 1 | 0 |
| Savaş · antlaşma · sefer (174 · 41 · 88) | 0 | 0 | 0 | 174 · 41 · 88 | 0 | 0 |

**Kronoloji toplamları.** D2 evreni 86 dosya, 2223 madde (iki ağaçta aynı). Kuyruk 98 dosya: 7841 → 7845 madde.
- Paketin +4 maddesi:
  - `kronoloji_cok_once1281_iran` 169 → 170.
  - `kronoloji_cok_1923_1945` 500 → 503.
- `kronoloji_cok_once1281_*` dosyalarının yedisi de `index.html`de **bugün yüklü**. Toplam 963 madde → paketle 964. Hepsi kuyrukta, D2 evreninde DEĞİL. Dilimlere dağılımı: 1000–1280'de 957, MS 1–999'da 4, 1281–1923'te 2.

**Dipnotlar:**
1. **Haritada görünen künye:** künye `id`si ya da `harita:` değeri o dilimde bir yerleşimin `s:`/`isg:`/`v:` (`d`, `kid`) alanında geçiyor. Osmanlı için `d:` dönemi sayıldı.
2. **Dilim dışına taşan dönemler bugün yalnız iki tane:**
   - Lapaha (Muʻa), `tui-tonga-imparatorlugu`, 1220→1845. Bu, 1000–1280 dilimindeki tek yerleşimdir.
   - Şefşâven (`yerlesimler_h2_kuzeyafrika.js`): `rif-cumhuriyeti` 1924–1926 ve ardından `fas` 1926→açık.

   Kalan **4130** sahipli dönem tam `1923-10-29`da bitiyor. **2527** dönem tam `1281-01-01`de başlıyor.
3. **Kişi alanları:** `kisiler.js`te `f` doğum, `t` vefat demektir. 122 kişide `f` alanı YOK, 36 kişide `t` alanı YOK; bunlar tabloya girmedi. MS 1–999'daki tek kişi `zhao-kuangyin` (927–976).
4. **Padişah tarihleri:** `dogum`/`olum` serbest metin. Yıllar elle ayıklandı, çünkü hicrî yılları (788, 1000) aletim miladî sanmıştı. 2 kayıtta (`fetret`, `hilafet`) doğum/ölüm yok. 1000–1280'deki tek doğum Osman Gazi ("1257 dolayı"). 1924–1945'teki tek ölüm Mehmed VI (1926-05-16).

### Motor ve uygulama tarafı (madde 7)
| | bugün (`0c4b383c`) | ZAMAN paketi sonrası |
|---|---|---|
| Zaman çubuğu (`js/app.js`) | `BASLANGIC = gunIdx("1281-01-01")` · `BITIS = gunIdx("1923-10-29")` (satır 89-90) | `1000-01-01` → `1945-09-02` (satır 168-169, kodda "ÖNERİ" diye işaretli), ayrıca `VERI_UFKU = ["1281-01-01","1923-10-29"]` |
| Motor kesit aralığı (`uret_petek.py`) | `EPOK = "1281-01-01"` (2903) · kesitler `EPOK ≤ t ≤ "1923-11-01"` (4570, 6636, 6890, 7158) | `EPOK = girdi.UFUK[0]` = 1000-01-01 · `KESIT_SON = UFUK[1] + 3 gün` = 1945-09-05 · motor tuzu DEĞİŞİYOR (tam inşa) |
| `girdi.UFUK` | `("1281-01-01","1923-10-29")` | `UFUK ("1000-01-01","1945-09-02")` + `VERI_UFKU ("1281-01-01","1923-10-29")` + `UFUK_DAMGASI` |
| Üretilmiş harita (`data/donemler_ust.js`, git'te) | 629 tekil gün, ilk `1281-01-01`, son `1923-10-29`. `C:\atlas-umit\data\donemler.js` (60 MB, git dışı, 4 Ekim) aynı uçları taşıyor | yeni koşu yapılana kadar aynı |
| MÖ gün sayacı | `js/gun.js` ve `arac/gun.py` main'de VAR (`f02a0170`), ama **tüketicisi yok**: `index.html` `gun.js`i yüklemiyor, `app.js`te `window.GUN`/`GUN.gun(` 0 kez geçiyor, `arac/*.py`de `import gun` 0 kez geçiyor | paket de bağlamıyor (0 / 0) |
| `app.js` `gunIdx` MÖ'de | `gunIdx("-2999-01-01")` = 65683 → **2149-11-01**. `gunIdx("0050-01-01")` → 1950-01-01 | değişmiyor (aynı `split("-")` + `Date.UTC`) |
| Motorun MÖ'de davranışı (Python) | `datetime.date.fromisoformat("-2999-01-01")` → **ValueError**. Dizgi kıyası `"-2999" < "-0001"` → False (yanlış sıra) | paketteki `KESIT_SON` tam olarak `fromisoformat` kullanıyor ⇒ UFUK MÖ'ye çekilirse motor açılışta düşer (koşturulmadı; çıkarım `fromisoformat` ölçümüne dayanıyor) |

### Z5 ve Z6 gövdelerinin yan etkisi (simülasyon; ölçüm)
- **1281–1923 dilimi bozuluyor.** Mevcut veriden bu dilimde FARKLI olan kayıtlar (bu ölçümde `s/d/v/isg` uçları 1281/1923'e kırpılarak karşılaştırıldı):
  - Z5: **98** kayıt. Örnekler: Balyabadra, Budin, Eğri, Kanije, Gence, Şamahı. Paket raporu `s:` ölçütüyle **83** demişti; fark ölçütten geliyor.
  - Z6: **6** kayıt (Ankara, Kars, Kahire, Gence, Taşkent, Hucend).
- Z5+Z6 uygulanırsa 1281–1923'te ölçülen geri adımlar:
  - haritada görünen künye 640 → 633,
  - `s:` kimliği 608 → 602,
  - `__BOSLUK__` dönemi 101 → 80.

  Z5 bu hâliyle 1924–1945'i açar (yerleşim 1 → 3906), ama 1281–1923'ü geri alır.

## 2. Bu koşu Sümer'i AÇAR MI? **HAYIR.**
ZAMAN paketiyle yapılacak tam inşa koşusu pencereyi en fazla `1000-01-01 → 1945-09-02` aralığına açar (`girdi.UFUK`, `app.js BASLANGIC/BITIS`). MÖ ~3000 bu pencerenin 4000 yıl gerisinde kalıyor. Pencere MÖ'ye çekilse bile bugün sorun dört katmanda birden var:

1. **Veri hiçbir katmanda yok.** MÖ dilimi her satırda **0**: künye 0, yerleşim 0, dönem 0, kronoloji 0, kişi 0, savaş 0.
   - `data/*.js` içinde `f/t/from/to/dogum/olum` alanlarında eksi işaretli tarih **0** dosyada var.
   - En erken künye `sasani` 0226.
   - "Sümer" geçen tek künye satırı Faruk Sümer'e yapılan bir atıf.
2. **Arayüz MÖ tarihini yanlış yıla koyuyor.** `gunIdx` MÖ 3000'i 2149 yılına yerleştiriyor.
3. **Motor MÖ tarihini okuyamıyor.** `fromisoformat` ValueError veriyor; dizgi kıyası negatif yılları ters sıralıyor.
4. **Gün sayacının tüketicisi yok.** `gun.js`/`gun.py` main'de var ama tüketicisi 0, ve tasarımın kendi kuralı "MÖ verisi C3'ten önce yazılmaz" diyor.

Koşunun gerçekten açtığı pencere içinde de durum şu: 1000–1280'de yerleşim 1 (Z6 simülasyonuyla 81), 1924–1945'te 1 (Z5'le 3906, ama Z5 karantinada ve bayat). Kıyas için 1281–1923'te 4148 yerleşim var. ⇒ §6 sırası (dizin → yerleşim yoğunluğu → harita penceresi) açısından paket, pencereyi yerleşim yoğunluğundan ÖNCE açıyor. Bu ölçülmüş bir durum tespiti; hükmü koordinatöre bırakıyorum. Paket bunu `VERI_UFKU` ve D1 "KAPSAM DIŞI" kovasıyla beyan ediyor.

## 3. Sümer→2000 için EKSİK (boyut boyut, ölçülen)
"Eksik" burada ya ölçülen sıfır demektir ya da 1281–1923 dilimine göre ölçülen fark. Hedef sayı yazılmadı; tahmin yasak.

| boyut | MÖ | MS 1–999 | 1000–1280 | 1924–1945 | 1946–2026 |
|---|---|---|---|---|---|
| **Dizin** (yaşayan künye; renksiz) | **0 künye** (en büyük eksik) | 96; renksiz 43 | 264; renksiz 69 | 157; renksiz 17 | 54; renksiz 3 |
| **Devlet haritada** (yaşayan ama hiçbir yerleşimde geçmeyen künye) | 0 (künye yok) | 96 (Z6'yla 95) | 263 (Z6'yla 229) | 155 (Z5'le 24) | 54 |
| **Yerleşim** (sahipli dönemi olan; 1281–1923'te 4148) | 0 | 0 (Z6'yla 1) | 1 (Z6'yla 81) | 1 (Z5'le 3906, karantina) | 1 |
| **Kronoloji D2 evreni** (1281–1923'te 2222) | 0 | 0 | 0 | 1 | 0 |
| **Kronoloji kuyruğu** (1281–1923'te 6133) | 0 | 23 | 1179 (paketle 1180) | 502 (paketle 505) | 4 |
| **Olay**: savaş · antlaşma · sefer (1281–1923'te 174 · 41 · 88) | 0 · 0 · 0 | 0 · 0 · 0 | 0 · 0 · 0 | 0 · 0 · 0 | 0 · 0 · 0 |
| **Kişi** doğum/vefat (1281–1923'te 160/225); padişah yalnız Osmanlı (41) | 0 / 0 | 1 / 1 | 5 / 9 | 0 / 9 | 0 / 8 |
| **Harita penceresi** (motor + çubuk) | YOK; paketle de yok | YOK; paketle de yok (UFUK 1000'de başlıyor) | bugün yok → paketle VAR | bugün yok → paketle VAR (1945-09-02'ye kadar) | YOK; paketle de yok |
| **Altyapı** | gun.js/gun.py tüketicisiz · `gunIdx` MÖ'yü 2149'a koyuyor · motor `fromisoformat` ve dizgi kıyası (tasarım dökümü 281 site, 122'si "sınırda çevir") | `gunIdx` 0001-0099 aralığında yanlış (0050 → 1950) | dizgi kıyası 4 haneli yılda güvenli | — | — |

**Her dilimin en büyük eksiği (§6 sırasıyla):**
- **MÖ:** DİZİN, 0 künye. Altyapı da hazır değil.
- **MS 1–999:** YERLEŞİM. Dizinde 96 künye var, yerleşim 0. Pencere de yok.
- **1000–1280:** YERLEŞİM. 264 künye var ama 1 yerleşim (Z6 bayat gövdesiyle 81). 263 künye haritada görünmüyor. Pencereyi paket açıyor.
- **1924–1945:** YERLEŞİM. 157 künye, 1 yerleşim. Z5 gövdesi 3906 yerleşim getiriyor ama karantinada ve 98 kaydı 1281–1923 diliminde geri yazıyor. Pencereyi paket açıyor.
- **1946–2026:** DİZİN de az (54 künye, 0'ı haritada) hem de yerleşim 1, madde 4. Pencere yok.

**ÖLÇÜLEMEDİ:**
- `devletler_harita.js` bu ağaçta yok (git dışı); motorun gövde çıktısı dilim başına ölçülmedi.
- Paketli bir motor koşusu yapılmadı (tam inşa ister, bu bir ölçüm işi). "Koşu 1000–1280'de ne çizer" sorusu **ölçülmedi**.
- Kronoloji maddesinin hangi künyeye ait olduğu (künye başına madde kapsaması) dilim bazında ölçülmedi. Alan adları dosyadan dosyaya değişiyor ve tek bir anahtar yok.

## 4. Temizlik kanıtı
Worktree'ler kaldırıldıktan sonra alındı: önce `git worktree remove C:/atlas-umit-kapsam`, sonra `remove --force C:/atlas-umit-kapsam-z` (içindeki tek değişiklik paket uygulamasıydı), en son `prune`. `ls C:/atlas-umit-kapsam*` → yok.
```
git -C C:\atlas status --short          #  M .claude/commands/kita.md · M oturumlar/HAZIR-KITA.md
                                        #  (oturum başında da vardı, bu işten değil; C:\atlas'a yazılmadı)
git -C C:\atlas-umit status --short     # ?? denetim/KAPSAM-ONCE1281-OLCUM-1009.md   ← bu rapor
                                        # ?? denetim/ZAMAN-Z6-tdv/                    ← önceden vardı, bu işten değil
git worktree list                       # kapsam / kapsam-z YOK. Listede kalanlar (atlas-umit-boya, -kapi,
                                        # -tahtaweb, atlas-w*, Temp/taban_gercek…) bu işten önce de vardı.
```
