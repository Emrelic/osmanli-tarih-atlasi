# UMIT-W25-BAYAT-CLAUDEMD-1006 — bayat CLAUDE.md ile çalışan UMIT işçileri

## 0. ÖNGÖRÜ (MÜHÜR, ölçümden ÖNCE yazıldı — 2026-10-05 ~23:45 yerel)
- Evren: başlığı UMIT-W6…W24 olan 19 oturum (emekliler dahil).
- Hepsi `C:\atlas`ta açıldı ve `C:\atlas` 23:20:59'daki `reset → origin/main`e kadar bayattı
  ⇒ 19/19 bayat CLAUDE.md ile açılmış olmalı.
- Koordinatörün beklentisi "düşük zarar". Benim öngörüm: **en çok 2 oturumda iz**, diff'e
  girmiş zarar **0**. En olası iz sınıfı bekçi (2 saat tavanı / varsayılan 30 dk) ve
  `kronoloji_sinir*.js`in Değişmez 2 evreninde sayılmaması; çıkış 2 izi beklemiyorum çünkü
  ağaçtaki `denetle.py` de bayattı (kod 2'yi hiç üretmiyordu).
- Bu öngörünün kendisi bir hipotezdir; aşağıdaki ölçüm onu tutturabilir de bozabilir de.

## 0.1 Öngörü ölçümle karşılaştırıldı
- **Zarar 0: TUTTU.** Diff'e, veriye ya da `main`e giren bir bayat kural kusuru yok.
- **"En çok 2 oturumda iz": TUTMADI.** İz geniş ama zararsız. 19/19 oturumun HAZIRIM'i bayat
  yerel tahtada kaldı. 19/19 oturumun ilk bekçisi 30 dakikada düştü. 16/19 oturum TOPOLOJI'yi
  okumadı. 4 oturum 2 saatlik tavandan sonra bekçisini yeniden kurmadı. 1 oturum zaten
  düzeltilmiş bir kuralı "bayat" diye yeniden bildirdi.
- **"Çıkış 2 izi yok, çünkü araç da bayattı": GEREKÇESİ YANLIŞ.** İşçiler iş için `origin/main`den
  taze worktree kurdu (`C:\atlas-wN`). Bu yüzden *araçlar taze, yalnız sistem istemindeki
  CLAUDE.md bayattı.* Çıkış 2 en az 11 koşuda gerçekten üretildi, ve hepsi doğru okundu (§3).

## 1. Ölçüm zemini
- Bayat uç `c504990d` (yedek `yedek/atlas-main-oncesi-1006`). Taze uç `78c74b80`. Arada **613**
  commit var. CLAUDE.md farkı **+73/−10** satır, 19 commit'ten geliyor.
- ⚠️ **İşçilerin okuduğu sürüm `c504990d`deki commit'li sürüm DEĞİL.** Okudukları, çalışma
  ağacındaki **değiştirilmiş** CLAUDE.md'ydi. Bunu taşıdığı damgadan tanıdım: §1.5'te yayın
  `r10976 · 6b7f3ad3`, 2s tavanı 189, 895 künye. Commit'li sürümde yayın `r10883`, 2s tavanı
  191. Kurallar açısından iki sürüm aynı: ikisinde de aşağıdaki K1–K7 YOK.
- **İşçilerin hangi sürümü okuduğu** her oturumun `.jsonl` transkriptinden okundu
  (`~/.claude/projects/C--atlas/`). Sistem istemindeki CLAUDE.md'de `r10976` geçiyor mu, ona
  bakıldı. **19/19 oturumda `r10976` var.** W8'in transkriptinde ayrıca taze sürümün damgaları (`r11195` + "ÜÇ ÇIKIŞ KODU")
  geçiyor (görev sırasında taze dosyayı okumuş).
- Bu makine **UMIT** (`hostname`). 19 oturumun 19'unun `cwd`'si `C:\atlas`.
- Ben de (W25) aynı bayat sürümle açıldım (`r10976`). İlk bekçim de 30 dakikada düştü.

## 2. Taze CLAUDE.md'ye giren kurallar (diff'ten) ve beklenen adaylar
| # | Kural (taze) | Bayatta? | Not |
|---|---|---|---|
| K1 | Belge tablosu: `oturumlar/TOPOLOJI.md` — "EMRELIC dışında bir makinedeysen ŞART" | YOK | |
| K2 | §3 **üç çıkış kodu** 0/1/2; 2 = ÖLÇÜLEMEDİ, "temiz" sayılmaz (`e8b70164`) | YOK | |
| K3 | §5 `kronoloji_sinir*.js` **Değişmez 2 evreninde** (`a155c996`) | YOK — bayatta "KUYRUK" | |
| K4 | §7 **makine rolleri**: UMIT yazıcı, HAVVA koşucu; **`main`in tek yazıcısı koordinatör**, her makine kendi dalına; KOSU kapısı | YOK | |
| K5 | §7.2④ **bekçinin 2 saatlik tavanı**: `killed` arıza değil sınır; 2 saatte bir yeniden kurmak NORMAL | YOK | |
| K6 | §7.2④ **nabız damgası** + `bekci_olc.py`; "sessiz/takıldı" ilanından önce üçlü sıra (D258) | YOK | |
| K7 | §11 ders sayısı 232 → 266 (D233–D266 dizinde) | sayı bayat | D264/265/266 CLAUDE.md'de kural olarak YOK, yalnız DIZIN'de |
| — | §1.5 sayıları (4296→4298, 2s tavanı 191→189, 894→895, yayın) | bayat | kural değil, ölçüm |
| ✗ | "tavan + sabit aynı commit" | **CLAUDE.md'de bulunamadı** | en yakını D262 ("iki sayı: taban + son ölçüm") ve D265 ("basıldığı yer aynı commit'te"); ikisi de ders, kural satırı değil ⇒ tabloya alınmadı |

## 3. Tablo — kural · bayatta var mı · ihlal izi · ihlal eden · zarar
Evren: 19 oturum (W6–W24). Toplam 5.868 transkript mesajı, hepsi tam tarandı (son 40 ile sınırlı değil).

| Kural | Bayatta | İhlal izi (sayıyla) | İhlal eden oturum | Zarar (diff'e girdi mi) |
|---|---|---|---|---|
| **K2 üç çıkış kodu** | YOK | Çıkış 2 olan `denetle.py` koşusu "temiz" diye raporlanmış mı? | **yok.** 11 koşu "TEMİZ DEĞİL — eksik ölçüm, çıkış kodu 2" bastı (W6·W7·W9·W16·W18). Teslimlerde 6 oturum açıkça "çıkış 2 (yalnız D8 ölçülemedi, taze ağaçta `devletler_harita.js` yok)" yazdı (W7·W8·W11·W16·W18 + W9 kod düzeyinde). "Temiz" diyen **0**. | yok. Kural görev mesajlarıyla taşınmış ("çıkış kodunu yaz (0 temiz · 1 ih…"; W4/W12/W13 şartnamelerinde "ÇIKIŞ 2 (ölçülemedi)"). |
| **K3 sınır = Değişmez 2** | YOK (bayatta "kuyruk") | Asistan metninde `kronoloji_sinir` dosyasına "kuyruk" denmiş mi? | **0 oturum.** W17 tersini yaptı: kuralı ölçüp doğru uyguladı ("24 Eylül'den beri Değişmez 2 evreninde"). Ama W17 teslimde *"CLAUDE.md §5'teki satır bayat"* diye koordinatör kararı istedi. Bu satır taze CLAUDE.md'de 4 Ekim'de (`a155c996`) zaten düzeltilmiş. | yok. Bedeli: koordinatöre zaten kapanmış bir madde gitti (1 kalem). |
| **K4 makine rolleri / `main`in tek yazıcısı** | YOK | Oturum bayat yerel `main`e commit/push yaptı mı? | **19/19, ama araç üzerinden ve protokol gereği.** Her oturum hazır kıta açılışında `tahta.py yaz` ile HAZIRIM yazdı. `tahta.py` bayat `C:\atlas` `main`ine commit edip push etmeye çalıştı. Bayat `main`de origin'de olmayan **33 commit** var, 32'si 5 Ekim HAZIRIM'i (M-5718…M-5754). Push reddi transkriptte 3 oturumda görünüyor (W21, W23, W24 — "non-fast-forward"). W23'te M-5741 commit'i 128 koduyla düştü, W24'te M-5742 de düştü; ikisi bayat dalda da yok. M-5751 numarası iki ayrı commit'te tekrarlanmış. İşçilerin kendi elle `git commit`/`git push`u **0**. | yok (diff'e girmedi). Ama **19 HAZIRIM'in 19'u koordinatöre hiç ulaşmadı:** bayat yerel tahtada kaldı, ve tahta numaraları origin'le çatallandı (bayat M-57xx, taze M-58xx). Görevler UMIT İRTİBAT'tan `SendMessage` ile geldiği için iş kaybı yok. |
| **K1 TOPOLOJI şart** | YOK | UMIT'te çalışırken `TOPOLOJI.md` okundu mu? | **16/19 okumadı.** Okuyan: W6, W7, W10. | yok. Koşu, yayın ya da push yapan işçi yok. Worktree düzeni (`origin/main`den) UMIT İRTİBAT'ın görev mesajıyla taşındı. |
| **K5 bekçi 2 saat tavanı** | YOK (bayat HAZIR-KITA.md "süre tavanı yok" diyor) | ① bekçi `timeout`suz kuruldu mu (30 dk varsayılan) ② `killed` "arıza/takıldı" diye mi okundu ③ 2 saatten sonra yeniden kuruldu mu? | ① **19/19** ilk bekçiyi `timeout`suz kurdu, ve 30 dk varsayılanında düştü. 9'u 7.200.000 ile yeniden kurdu: W6, W7, W12, W13, W14, W15, W16, W17, W18. ② "arıza" diyen **0**; hepsi "süre sınırı" dedi. ③ **4 oturum** (W12, W13, W14, W15) 2 saatlik tavana takıldı ve **yeniden KURMADI**. Gerekçeleri: "sınır zaten en yüksek değerde olduğu için yeniden kurmadım" (W12) ve "Sistem bu tavandan sonra yeniden kurmamamı söylediği için" (W14). Taze K5 ise "2 saatte bir yeniden kurma turu NORMALDİR" diyor. | yok. Dört oturuma da görev `SendMessage` ile geldi. Ama bekçisi olmayan bu dört oturum, o aralıkta tahtadan **uyanamazdı**. |
| **K6 nabız damgası** | YOK | Bekçi damga bıraktı mı (`oturumlar/bekci/<AD>.json`)? | **Ölçülemedi, oturum bazında.** Hazır kıta bekçileri bayat `C:\atlas\arac\tahta_bekci.py` ile koştu. O sürümde nabız kodu yok (`c504990d`de "bekci/" 0 geçiyor). `C:\atlas\oturumlar\bekci\` ve `C:\atlas-umit\oturumlar\bekci\` dizinleri **yok** ⇒ 19 bekçinin hiçbiri `bekci_olc.py`ye görünmedi. Bu bir davranış ihlali değil, bayat **araç** etkisi. | yok. |
| **K7 / D264–D266** | ders sayısı bayat | — | ölçülmedi: CLAUDE.md'de kural satırı yok. Bir not: W10 D266'nın **kendi vakası** (PID yeniden kullanımı) üzerinde çalıştı. Raporlanan diff'ler "LF, CR 0" ve `--check` iki yönde. | — |

**Özet sayılar:** ölçülen oturum **19/19**. Bayat CLAUDE.md ile açılan **19/19**. Diff'e,
veriye ya da `main`e giren bayat kural kusuru **0**. Koordinatöre gereksiz giden kalem
**1** (W17). Ulaşmayan HAZIRIM **19/19**. Bekçi tavanında yeniden kurmayan **4**.
TOPOLOJI okumayan **16**.

## 4. Ölçülemeyenler
- **K6 oturum bazında.** Damga dizini hiç yok, bu yüzden bir bekçinin "sessiz mi, ölü mü"
  olduğu geriye dönük ölçülemez.
- **İşçinin CLAUDE.md'yi görev sırasında worktree'den yeniden okuyup okumadığı.** Ölçtüğüm tek
  iz `Read` ile `*.CLAUDE.md` okuması. W8 taze sürümü gördü. Bash `cat`/`grep` ile kısmi
  okumalar bu taramada kaçmış olabilir.
- **Transkripti kısa olan yok.** En kısa W14, 75 mesaj, ve tamamı tarandı.
- **"tavan + sabit aynı commit"**: CLAUDE.md'de böyle bir kural bulunamadı, bu yüzden izi tanımlanamadı.

## 5. Öneri
1. **Asıl kusur bayatlık değil, iki belge arasındaki çelişki.** *Taze*
   `oturumlar/HAZIR-KITA.md:15` hâlâ "Süre tavanı yok" diyor ve bekçi komutunda `timeout`
   vermiyor. `/kita` becerisi de vermiyor. ⇒ Her hazır kıta, taze ağaçta da, ilk bekçisini 30
   dakikada kaybeder (19/19 + W25). Çare: HAZIR-KITA.md §1.4 ve `/kita` metnine
   `timeout: 7200000` ve "2 saatte bir sessizce yeniden kur" eklenmeli. Bu, koordinatörün kök
   `*.md` dosyası.
2. **UMIT'te HAZIRIM → yerel tahta kanalı ölü.** Bayat ya da taze fark etmez: UMIT `main`e
   yazmamalı (K4). Hazır kıta protokolü UMIT için "HAZIRIM'i UMIT İRTİBAT'a `SendMessage` ile
   yaz, tahtaya yazma" diye ayrılmalı. Ya da TOPOLOJI §8'deki web tahtası gelmeli.
3. **Açılış kapısı:** hazır kıta açılışta `git -C C:\atlas rev-list --count HEAD..origin/main`
   ölçsün; > 0 ise tahtaya değil irtibata "ağaç N geride" yazsın. Bu gece 610 commit'lik fark
   hiçbir oturumun açılışında ölçülmedi.
4. **W17'nin "§5 bayat" kalemi kapatılabilir.** Satır taze CLAUDE.md'de zaten düzeltilmiş.

Kaynak betikler (scratchpad, commit yok): `tara.py` (kural izleri) · `den.py` (`denetle.py`
çıkış kodları) · `tes.py` (teslim mesajlarındaki çıkış kodu beyanları).
