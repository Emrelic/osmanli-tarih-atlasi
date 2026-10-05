# UMIT-W32 — PAKET YÜKLEYİCİ TARAMASI + ok107 mükerrer `s:` (6 Ekim 2026)

Görev: UMIT İRTİBAT, W32'nin doğrudan devamı. Atılabilir worktree (`origin/main`
7afbe86f; diff'ler 3ac2e2b8'e ve `makine/umit` 9e71c58b'ye `git apply --check` TEMİZ;
W32 BAYAT diff'i + bu iki diff BİRLİKTE uygulanıyor). Commit yok.

## 1. Kusur — ölçüldü
`index.html` 70 `src` taşıyor, 30'u `data/paket_NN.js` (arac/paketle.py); açılınca 329
kaynak. `src="(data\/yerlesimler…` gibi **ADLA süzen** bir betik paketin içini görmez.
Ölçüm (her betiğin kendi süzgeci, bugün vs paketler açık):

| sınıf | betik | yüklenen yerleşim | kronoloji öğesi |
|---|---|---|---|
| 🔴 yerleşim süzen 15 | ANTLASMA-AYIRT · -KADEME · -KAPSAM · -MALIYET · -ZINCIR (0074) · ELE-GECIRME-0070 · HALKA-ADARA-0913 · ISY-OLCUM-0913 · ISY-SONDA-0913 · SOHUM-ANIM-0071 · UI2-FARK-0913 · UI2-OLCUM-0913 · UI3-OLCUM-0914 · ODAK-ASYA-0080-ara · -dok | **10** / 4299 | 25 ya da 1829 / 1768-10026 |
| 🔴 yalnız kronoloji süzen 4 | A1-TOPRAK-0913 · EKOKUMA-0077-C-OLAY · HALKA-KRONOLOJI-YUKLE-0913 · HLA-OKU-0913.py | — | **25** / 1768 ya da **1829** / 10026 |
| 🟠 DIŞLAMA kırık 1 | 1DUNYA-A-SINA-0917 (süzgeçsiz ama HEDEF'i `continue` ile dışlıyor; HEDEF `paket_09`un içinde ⇒ iki kez yükleniyor) | 4299 | 10026 (+HEDEF ×2) |
| ✓ süzgeçsiz 7 | A1-PORTRE · A1-TIMUR · EKO-ILGI-0073-YUKLE · EKOKUMA-ANTLASMA-0921 · -0921-SINAV · SEFER-OK-0070 · -ATIF-0070 · -DUMP-0075 | 4299 | 10026 — tarayıcı gibi paketi yükler, DOĞRU |
| ↷ HARİÇ, dokunulmadı | ARAC-HALKA-SINA-0913.js · ODAK-ASYA-0080-sina.js (W27 HATA kovası ⇒ W36 kilidi olabilir) · ARAC-ANTLASMA-KADEME-SINAV-0074.js (W32 BAYAT diff'inde zaten onarıldı) | | |

W33 · W35 (17 mutlak yol) · W31'in 4'ü · KUNYE-SINA-0903 listede YOK.
⚠️ W36'nın 11'lik listesi elimde değildi; HATA kovasındaki ikisini kilitli saydım.

## 2. Çare — tek yardımcı, betiklerin regex'i AYNEN
`denetim/INDEX-KAYNAK-1006.js`: `kaynaklar(html, <betiğin kendi regex'i>)` paketleri
**içerikten** (`/* ==== data/X.js ==== */` işareti) açar, sırayı korur, sonra betiğin
regex'ini her kaynağa "tek başına bağlı olsaydı" etiketiyle uygular ⇒ süzgeçlerin
anlamı DEĞİŞMEZ. Betik başına değişiklik 2-3 satır (require + çağrı + kapı).
**SESSİZ SIFIR kapısı (çıkış 2):** işaretsiz paket · diskte olmayan src · süzgeçten
sıfır dosya · `yerlesimKapisi(Y)`: yüklenen yerleşim < motor evreninin (girdi.py) %90'ı.
Kapı 15 yerleşim betiğine kondu; kronoloji-yalnız 4 betikte yalnız yardımcının dosya
kapıları var (madde için bağımsız bir evren sayısı yok — sabit yazmadım).

## 3. Sonuç — önce / sonra
Onarılan 20 betiğin **20'si çıkış 0**; yerleşim yükleyenlerin hepsi **4299**
(önce 10), madde 1655-1768 (önce 25). Örnek: ELE-GECIRME "yerleşim 4299 · olay 1655 ·
dosya 170"; ANTLASMA-KADEME "YERLESIMLER 4299 · isg: 269 yerleşim".
Yardımcının sınavı `denetim/INDEX-KAYNAK-SINAV-1006.js` **11/11**:
- POZİTİF: açık = 40 + 289 işaret · paket kalmadı · paket dışı sıra aynı · yerleşim
  süzgeci 4299 = girdi.py 4299
- YAPAY (geçici kök): paket içi dosya bulunur · çıplak src yan yana çalışır · dar
  `"><\/script>` regex'i tutar
- NEGATİF (her biri çıkış 2): işaretsiz paket · olmayan src · sıfır süzgeç · 10 kayıtlık Y

## 4. Ölçülen ama ONARILMAYAN
- **1DUNYA-A'nın 4 "MÜKERRER ŞÜPHESİ" GERÇEK** — dışlama onarımından sonra da 4. Sebep
  veri: "Varşova'ya girdi" vb. maddeler sonradan `kronoloji_cok_senkron_0930.js` ·
  `kronoloji_cok_lehistan.js` · `kronoloji_sinir_polonya_1915.js`e de yazılmış.
  W27'nin "GERİLEME ADAYI" hükmü DOĞRU; sebebi yükleyici değil mükerrer madde
  (kronoloji sahibinin kalemi). Dışlama onarımı çıktıyı değiştirmedi (bindirici
  `KRONOLOJI_COK_` anahtarını zaten atlıyor) ama dışlamayı gerçek yaptı.
- **Üretilmiş çıktıya bağımlı iki betik sessizce sıfır basıyor:** ANTLASMA-KAPSAM
  (`petek_govde.js` yok ⇒ "0 KB · ×NaN") · UI2-FARK (`PETEKLER 0 · peteği bulunamayan
  570`). Taze ağaçta beklenir ama bu da bir SESSİZ SIFIR sınıfıdır — ayrı iş.
- Öteki ölçümlerin geçerliliği: bu 20 betiğin 9-28 Eylül arası paketleme sonrası
  ürettiği her sayı 10 yerleşimlik evrene aittir. Paketlemenin indiği commit
  ölçülmedi (`git log -S paket_ -- index.html` ile bulunur).

## 5. ok107 — `OK107-MUKERRER-ANAHTAR-1006.diff` (ÜRETİLDİ, UYGULANMADI)
`yerlesimler_ok107.js` Sayram (İsficâb) + Taraz (Evliya-Ata): her nesnede iki `s:`.
17cd2f98 (30 Eyl, YERLESIM-BIRLESTIR) ikinciyi `kaynak:` satırının SONUNA ekledi.
**JS'te SONUNCUSU kazanır** ⇒ motor 30 Eylül'den beri yalnız ikinciyi okuyor.

| | dönem 1 | dönem 2 | öteki 6 |
|---|---|---|---|
| 🟢 KAZANAN — KALIR (ikinci, `kaynak:` sonundaki) | cagatay →**1370-04-09** | timurlu **1370-04-09**→ | birebir aynı |
| 🔴 KAYBEDEN — SİLİNDİ (birinci, çok satırlı blok) | cagatay →1370-01-01 | timurlu 1370-01-01→ | birebir aynı |

Diff çok satırlı ESKİ bloğu siler, yerine kazanan/kaybedeni yazan 6 satırlık yorum koyar.
**Anlam eşitliği ölçüldü:** `girdi._cevir` önce/sonra 21/21 kayıt birebir aynı.
Mükerrer taraması: 2 → **0** (`SINAV-KOSU8-MUKERRERANAHTAR-0907.py` çıkış 0).
Değişmezler önce = sonra: **1** ✓ 4299/309 · **1b** ✓ 0 · **2** ✓ 623 kırılma 0 açık ·
2s 187/189 · 2i 1/1 · 2t 13/13. `denetle.py` iki koşuda da **çıkış 2** — tek sebep
Değişmez 8: `devletler_harita.js` taze ağaçta yok (üretilmiş çıktı), ok107'den bağımsız.
Haritaya etkisi YOK (motor zaten kazananı okuyordu) ⇒ koşu gerektirmez.
📌 1370-04-09'un kaynağı bu turda okunmadı; kazanan değer olduğu gibi bırakıldı.

## 6. Çıktılar (C:\atlas-umit\denetim, commit yok)
- `PAKET-YUKLEYICI-1006.diff` — 22 dosya (+210/−21): 20 betik + 2 yeni dosya
  (`INDEX-KAYNAK-1006.js` · `INDEX-KAYNAK-SINAV-1006.js`)
- `OK107-MUKERRER-ANAHTAR-1006.diff` — 1 dosya (+12/−16)
- bu rapor
