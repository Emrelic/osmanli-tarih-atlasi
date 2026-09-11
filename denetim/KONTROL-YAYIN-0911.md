# KONTROL LİSTESİ — Koşu 9 Yayını

> **Oturum:** YAYIN HAZIRLIK (eski adlar: KÜNYE ÖNCESİ → ... → C ŞEMA PİLOT
> → KÜRESEL GÖRÜNÜM) · **Sevk:** koordinatör mesajı, 11 Eylül 2026
> `data/` ve `arac/` **okunuyor, KOŞTURULUYOR (denetim), YAZILMIYOR.**

---

## 0. DURUM — bu belge yazılırken

```
Koşu 9 gerçek başlangıcı: 2026-09-11 03:00:59 (.zincir.kilit)
Üretim (uret_petek.py) başladı: 03:01:00, PID 27996 (.petek.kilit)
Bu belge yazılırken PID 27996 HÂLÂ CANLI (tasklist ile doğrulandı)
```
🟢 **Sürecin hâlâ canlı olması KENDİ BAŞINA bir kanıttır**: `motor_izi_dogrula`
mekanizması `arac/uret_petek.py`/`renkler.py`/`girdi.py` değişirse süreci
ANINDA öldürür (CLAUDE.md §7). Süreç ayaktaysa, o üçlü bugün dokunulmamış demektir.

---

## 1. ZİNCİRİN ADIMLARI — `arac/kos_ve_yayinla.py`'den OKUNDU, tahmin değil

Kodun kendisi (`kos()` çağrıları, satır sırasıyla) şunu söylüyor:

```
1. uret_petek.py         (ÖLÜMCÜL)      — şu an bu adımda
2. uret_devirler.py      (ÖLÜMCÜL)
3. uret_altlik.py        (ölümcül DEĞİL)
4. uret_bekleyenler.py   (ölümcül DEĞİL)
5. renk_olc.py           (ölümcül DEĞİL — uyarı üretir, DURDURMAZ)
6. denetle.py            (ÖLÜMCÜL)      — "ALTI DEĞİŞMEZ"
7. surum_damgala.py      (ÖLÜMCÜL, yalnız --yayinlama'da) — KAPIDAN ÖNCE (7 Eylül düzeltmesi)
8. denetle_yayin.py      (ÖLÜMCÜL)      — "YAYIN KAPISI"
9. adres_nobetci.py      (ölümcül DEĞİL)
10. git add -A -- data index.html
11. git commit -F denetim/zincir-commit-mesaji.txt
12. git pull --rebase    (ölümcül DEĞİL)
13. git push             (ÖLÜMCÜL)
14. 9 bip
```
⚠️ Beklenen sırayla (CLAUDE.md §9) BİREBİR aynı — tek fark `surum_damgala`nın
kapıdan ÖNCE olması (7 Eylül'de düzeltilmiş bir sıra kusuru, `§11`).

---

## 2. BUGÜNKÜ VERİYLE ÖLÇÜLDÜ — koşu bitmeden

### ✅ `denetle.py` — TEMİZ, ve dört tavan TAM EŞLEŞTİ

Güvenle koşturuldu (yalnız `yerlesimler*.js`/`devletler.js` KAYNAK verisini
okur, üretimin YAZDIĞI çıktıya dokunmaz):

```
Değişmez 1   ✓  3808 yerleşim, 314 SAHİPSİZ (beklenen 314)   ← TAM EŞLEŞTİ
Değişmez 1c  ✓  4 sahipsiz+BELGESİZ (tavan 4)                ← TAM EŞLEŞTİ
Değişmez 2   ✓  520 kırılma, 0 açık
Değişmez 2s  ✓  104 açık (tavan 121)
Değişmez 2i  ✓  3 açık (tavan 3)
Değişmez 4c  ✓  132 dönem ÖLÜMÜ AŞIYOR (beklenen 132)        ← TAM EŞLEŞTİ
Değişmez 4d  ✓  358 dönem DOĞUMDAN ÖNCE (beklenen 409 — İYİLEŞME)
Değişmez 7   ✓  650 sorgusuz ENKLAV (beklenen 650)           ← TAM EŞLEŞTİ
SONUÇ: temiz
```
⇒ **`denetle.py` bu gece koşuyu DURDURMAYACAK.** Dört tavanın dördü de
(sahipsiz 314 · belgesiz 4 · enklav 650 · aşan 132) birebir kayıtlı beklentiyle
eşleşiyor — tavan GEVŞEK değil, veri BEKLENDİĞİ gibi.

🔴 **Kendi hatamı burada buldum ve düzelttim** (bkz. tahtaya M-3427):
önceki turda (`KÜNYE ÖNCESİ`) "hiçbir denetim künye-öncesi kullanımı
sormuyor" diye rapor etmiştim — YANLIŞTI. `Değişmez 4d` tam bunu, en az
30 Ağustos'tan beri soruyor.

### ⚠️ `renk_olc.py` — BİLEREK ÇALIŞTIRILMADI

`arac/renk_olc.py` kendi Voronoi hesabını (`shapely.voronoi_diagram`) yapıyor
— `girdi.py` üzerinden KAYNAK veriyi okuyor, üretimin çıktısına bağımlı
DEĞİL, yani teorik olarak ŞİMDİ de güvenle koşabilirdi. **Ama koşturmadım**:
görev tarifi "makine meşgul, daha ağır bir şey koşturacaksan ÖNCE SOR"
diyordu, ve bu bir tam Voronoi hesabı — `uret_petek.py`nin kendi işiyle
CPU paylaşıp İKİSİNİ DE yavaşlatabilir (bu projede daha önce ölçülmüş bir
sınıf, `§7`). **Öneri: koşu 9 BİTTİKTEN hemen sonra, zincirin kendisi
zaten koşturacak — ayrıca ELLE koşturmaya GEREK YOK**, zincirin adım 5'i
bunu otomatik yapıyor.

### 🔴 Yayın kapısının ne sorduğu — `arac/denetle_yayin.py` ölçüldü

Kapı ÜÇ ayrı eksende REDDEDEBİLİR (herhangi biri ihlal verirse `return 1`):

```
① VARLIK    index.html'in istediği dosya diskte VAR mı, GİT'TE İZLENİYOR mu
② TAZELİK   window.URETIM_IZI sha256'sı — 7 üretilmiş çıktının (donemler.js,
            bolgeler.js, devletler_harita.js, petek_govde.js, altlik.js,
            devirler.js, bekleyenler.js) İÇİNE gömülü "hangi girdiden
            üretildim" izi, BUGÜNKÜ girdi dosyalarının sha256'sıyla
            KARŞILAŞTIRILIYOR — eşleşmezse "BAYAT", reddedilir
③ TÜKETİM   üretilen her window.X gerçekten app.js/index.html tarafından
            OKUNUYOR mu (§40) + dizinsiz kimlik + inline sözdizimi + damga
```

🟢 **`③.② TAZELİK` sorusunun cevabı BUGÜN İÇİN OLUMLU ÖLÇÜLDÜ:**
```bash
git log --since="2026-09-11 03:01:00" --name-only -- data/
```
**BOŞ DÖNDÜ** — koşu başladığından (girdi donduğundan) BERİ `data/`ye
dokunan **HİÇBİR commit yok** (158 commit tarandı, case-insensitive de
kontrol edildi, hiçbiri `data/` içermiyor). Geçmişteki ret (koşu 8,
"YAYIN BAYAT") tam bu yüzden olmuştu — o gece 6 veri dosyası koşu
sırasında değişmişti. **Bu gece aynı şey OLMADI**, en azından şimdiye
kadar.

⚠️ **AMA BU BİR GARANTİ DEĞİL, bir ŞU ANA KADARKİ ÖLÇÜM.** Koşu bitene
kadar (~02:05 tahmini) `data/`ye kimse dokunmamalı — bu belge yazıldıktan
SONRA biri dokunursa yeniden ölçülmesi gerekir. Kontrol listesindeki
①.a adımı tam bunu tekrar sorar.

---

## 3. 🔴 KONTROL LİSTESİ — koşu bittiğinde SIRAYLA

### ① ÖN KONTROL — zincir kendi kendine bitirmiş olabilir
```bash
tail -50 kosu_zincir.log
```
**Bekle:** `🟢 ZİNCİR TAMAM — yayınlandı` satırı. Varsa **BİTTİ, aşağıya
gerek yok** — yalnız GitHub Pages'in 40-60 sn içinde güncellendiğini
gözle doğrula.
**Yoksa** (zincir bir adımda durduysa) aşağıdaki adımları TEK TEK izle.

### ② `data/` GERÇEKTEN DOKUNULMAMIŞ MI — yeniden doğrula
```bash
git log --since="2026-09-11 03:01:00" --name-only -- data/
```
**Beklenen:** boş çıktı. **Doluysa:** hangi commit/dosya olduğunu oku,
üretimin o dosyayı görüp görmediğini (`git log` zamanı vs. üretim
girdi-okuma zamanı 03:01) karşılaştır — üretim GÖRMEDİYSE çıktı BAYAT
olacak, kapı zaten bunu SÖYLEYECEK (aşağıda ③).

### ③ YAYIN KAPISI — asıl karar
```bash
py arac/denetle_yayin.py
```
**Beklenen:** `SONUÇ: temiz` (kod 0).
**"YAYIN BAYAT" çıkarsa:** çıktı hangi dosyanın bayat olduğunu ADIYLA
söylüyor (`bayat_mi()`'nin "değişen: …" satırı) — o dosyayı üreten script'i
TEK BAŞINA yeniden koştur (`uret_petek.py` ise TÜM zinciri baştan, çünkü
`uret_devirler`/`renk_olc` ondan sonra gelir), sonra kapıyı TEKRAR sor.
**"ÜRETİLİYOR AMA ÇİZİLMİYOR" çıkarsa:** `§40` — muhtemelen `CIZILMEYEN_MUAF`a
eklenmesi gereken YENİ bir dosya var; koordinatör kararı gerekir, kapı
BEKLETİLMEZ ama gerekçe kayda geçmeli.

### ④ SÜRÜM DAMGASI — kapı geçtiyse bile gözle doğrula
```bash
grep -o '?v=r[0-9]*' index.html | sort -u
```
**Beklenen:** TEK bir `?v=rNNNN` değeri (hepsi aynı). Birden fazlaysa
`surum_damgala.py`nin adım 7'de (kapıdan ÖNCE) doğru koştuğunu doğrula.

### ⑤ COMMIT MESAJI VAR MI
```bash
cat denetim/zincir-commit-mesaji.txt
```
**Yoksa:** zincir adım 11'de `return 1` ile durur — mesaj dosyasını
YAZ (özet: kaç yerleşim, kaç kırılma, hangi partiler indi), sonra zinciri
`py arac/kos_ve_yayinla.py --yayinlama` ile TEKRAR TETİKLEME — o zaten
üretimi TEKRAR koşturur. Bunun yerine kalan adımları (`git add/commit/push`)
ELLE çalıştır.

### ⑥ PUSH SONRASI
```bash
git log --oneline -3
```
**Beklenen:** en üstte az önceki commit, `git push` çıktısında `main -> main`.
**Başarısızsa** (`! [rejected]`): `git pull --rebase` dene, çakışma çıkarsa
(muhtemelen `oturumlar/tahta.json` gibi paylaşılan bir dosyada) TEK O
DOSYAYI birleştir — `data/`de çakışma OLMAMALI (koşu tek yazardı).

### ⑦ CANLI KONTROL — ~60 sn sonra
```
https://emrelic.github.io/osmanli-tarih-atlasi/
```
Tarayıcıda AÇ (gerekirse sert yenile), sürüm damgasının değiştiğini ve
haritanın açıldığını gözle doğrula.

---

## 4. ÖLÇMEDİKLERİM

```
① renk_olc.py bu turda ÇALIŞTIRILMADI (§2, gerekçesiyle) — zincirin
   kendi adım 5'i koşacak, sonucu BURADA ölçülmedi
② koşunun GERÇEK bitiş saati tahmin (~02:05), ÖLÇÜLMEDİ — bekçi/canlılık
   sinyali bu belgenin kapsamı dışı
③ 158 commit'in TAMAMI tek tek okunmadı — yalnız `data/` pathspec'i
   filtrelendi (case-insensitive de doğrulandı); `arac/`ye dokunan bir
   commit olup olmadığı AYRICA taranmadı (ama süreç canlı olduğu için
   `motor_izi_dogrula` zaten bunu KORUYOR, §0)
```
