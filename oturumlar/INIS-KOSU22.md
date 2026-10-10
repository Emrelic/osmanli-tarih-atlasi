# İNİŞ KONTROL LİSTESİ — KOŞU 22 (FAZ 0)

Koordinatör (YILDIRIM BAYEZIT) 09:15-09:30'da bunu uygular. Hazırlandı 06:20,
koşu sürerken — **amaç: iniş anında karar vermemek.**

---

## 🔴 0. İLK KURAL — DOSYA LİSTESİ EZBERDEN OKUNMAZ

KOŞU 21 (`14174ef7`) **33 dosya** taşıdı ve bu bir **ŞABLON**, bir liste değil:
```
30  data/*.js + data/paket_kunye.json
 1  denetim/DEGISMEZ-KOSU21-HAVVA.log
 1  index.html                      (sürüm damgası ?v=rNN)
 1  veri-kaynak/motor_kara.geojson  (§5: GİRDİ DEĞİL ÇIKTI)
```
⚠️ KOŞU 22'nin kümesi FARKLI olabilir — `paket_23` yeniden paketleme konuşuldu,
ve paket sayısı kırılma sayısına bağlı. ⇒ **Liste HAVVA'nın commit'inden
OKUNUR:**
```bash
git fetch origin --quiet
git show --name-only --format="%h %s" <HAVVA'nın commit'i>
```
📌 Bu, `D219`un ("hangi dosyanın canlı olduğu yalnız `GIRDI_DOSYALARI`'ndan
okunur") iniş yüzü: **hangi dosyaların üretildiği yalnız KOŞUNUN KENDİ
COMMIT'İNDEN okunur.** Aşağıdaki liste karşılaştırma içindir, kopyalanmak için
değil.

---

## 1. ÖNCE OKU, SONRA AL

```bash
① git fetch origin --quiet && git rev-list --count HEAD..origin/main   # 0 olmalı
② git log --oneline origin/kosu/22 -3                                  # dal var mı
③ git show --name-only --format="%h %s" <commit>                       # LİSTE
④ HAVVA'nın teslim mesajındaki DÖRT SATIRI oku (aşağıda ⑤)
```
🔴 **ÜÇ ŞEY DOĞRULANMADAN DOSYA ALINMAZ:**
```
ⓐ koşunun kendi `denetle.py` çıkışı       → 1 ise DUR (aşağıda §3)
ⓑ `DEGISMEZ-KOSU22-*.log` commit'te VAR MI
ⓒ taban: koşu `e54e60df` üstünde başladı; arada main çok ilerledi —
   bu NORMAL ve YAYINI DURDURMAZ (`§9`: *"koşu çıktısı her zaman bayattır,
   yine de yayınlanır"*). Durduran yalnız koşunun KENDİ ihlalidir.
```

## 2. ALMA BİÇİMİ — birleştirme YOK

```bash
git checkout origin/kosu/22 -- <③'ten gelen dosyalar, ADIYLA>
```
⚠️ `git merge` YAPILMAZ. `§7`: **üretilmiş `data/*.js` çatışması
birleştirilmez, yeniden üretilir.** Dosyalar olduğu gibi alınır.
⚠️ `index.html` de alınır (sürüm damgası içinde) — ama o dosya KOORDİNATÖRÜN:
almadan önce **kendi bekleyen düzenlemem var mı** diye bak. Şu an YOK
(FAZ 2'nin `olaylar_once1281_zincir_1010.js` satırı HENÜZ eklenmedi; o satır
FAZ 2'de, bu inişten SONRA).
⚠️ `veri-kaynak/motor_kara.geojson` ÇIKTIDIR, girdi sanıp atlanmaz.

## 3. ÇIKIŞ KODUNA GÖRE — ve `8a` İSTİSNASI

```
0  temiz          → al, yayınla
2  ÖLÇÜLEMEDİ     → al, yayınla; ölçülemeyen soruyu ADIYLA `§1.5`e işaretle
1  İHLAL          → 🔴 DUR
```
🔴 **`1` gelir ve TEK ihlal `8a` ise: YAYIN DURUR, kararı ben veririm.**
(HAVVA'nın emrinde bu yazılı; burada da duruyor.)

## 4. ALDIKTAN SONRA — sıra bağlayıcı

```bash
py arac/uret_devirler.py        # uret_petek'ten SONRA  (HAVVA koştuysa atla)
py arac/renk_olc.py             # 🔴 veri değiştiyse ŞART
py arac/denetle.py              # tek kapı
py arac/surum_damgala.py        # ?v=rNN yükselt
py arac/denetle_yayin.py        # yayın kapısı
git push origin main            # = YAYIN · Pages gecikmesi ~40-60 sn
```
⚠️ Koşu bittiği an ≠ yayın indiği an; yayın inene kadar motor donuk (`§9`).

## 5. 🔴 HAVVA'NIN RAPORUNDAN ADIYLA İSTEDİĞİM DÖRT SATIR
```
① 8a Hanak        KAYBOLDU mu KALDI mı
② Tehuantepec
③ Kıbrıs 1000-1192
④ 1000-1280 görüntüsü
```
Dördü gelmeden iniş TAMAM sayılmaz — bunlar koşunun **kabul ölçütü.**

## 6. ⚠️ BU KOŞUNUN BİLİNEN KUSURU — sayaçlar

İşçi 2 **çöktü** (GEOS segfault `0xC0000005`, 02:27:46). Çıktı EKSİK DEĞİL
(yedek yol 175 devleti ana süreçte hesapladı, 61'i çökmeden önce diske
yazılmıştı) **ama:**
```
🔴 GOVDE-CAKISMA ve EKLEYİCİ KAPI sayaçları YALNIZ ANA SÜRECİN PAYI
   (logun kendisi beyan ediyor) ⇒ bu koşuda ALT SINIR, ölçüm DEĞİL
   ⇒ `§1.5`e KOYULMAZ; `ölçülemedi` diye ADIYLA işaretlenir
```
📌 **ÜRÜN SAĞLAM, ÖLÇÜSÜ SAKAT** — ikisini ayırt etmek bu inişin en kolay
kaçırılacak şeyi.

## 6b. 🟢 DİFF'LER SINANDI — 07:00, koşu sürerken, AYRI WORKTREE'DE

Tek tek değil **İNİŞ SIRASINDA, KÜMÜLATİF** denendi (`origin/main` `0f893331`
üstünde, `/c/atlas-sira-sinav`, ana ağaca DOKUNULMADI):
```
FAZ1   SAHIPLIK-KAPSAM-1010-v2.diff                 UYGULANDI
FAZ1   D5-GUN-1010-v2.diff                          UYGULANDI
FAZ1   KASA-DIKIS-KAPI-1010.diff                    UYGULANDI
FAZ2a  YER-YAMA-SESSIZ-7-1010-KOORD-v2.diff         UYGULANDI
FAZ2b  LAB-KONUM-ONERI-1010-v3.diff                 UYGULANDI
FAZ2b  LAB-KONUM-ONERI-1010-v3-ikame.diff           UYGULANDI
FAZ2b  LAB-KONUM-ONERI-1010-v3-balasagun-not.diff   UYGULANDI
FAZ2c  ZAMAN-Z5-1009-KOORD-v4.diff                  UYGULANDI
FAZ2k  KUNYE-SUMER-7-1010-v2.diff                   UYGULANDI
⇒ 16 dosya: 3 arac/*.py · 7 data/*.js · 1 sınav · 5 YENİ dosya
   (hüküm listesi · iki defter · D5C defteri · KAPSAM sınavı)
```
🔴 **NİÇİN TEK TEK YETMEZ:** on diff tek tek `apply --check` geçebilir ve
**sırayla çakışabilir** — her biri öncekinin değiştirdiği satırların üstüne
geliyor. `D269`un dersi: *`--check` çatışması bir teşhis değil*, ve
`--check` İKİ AĞAÇTA ayrı sonuç verir (`autocrlf`) ⇒ **sınav İNİŞ AĞACINDA
yapıldı.**
⚠️ Ve bu sınav **bir fotoğraftır:** `main` ilerledikçe ya da yeni diff
geldikçe (`SAHIPLIK-KUR-KAPI` · `D5-GUN-v3`) **yeniden koşulur.**
Betik: `scratchpad/diff_sira.sh` (ayrı worktree kurar, iner, kaldırır).

🔴 **BİR UYARI, sınavdan çıktı:** `data/yer_yama_1923_1945.js` **DEĞİŞİYOR**
(SESSIZ-7-v2 dokunuyor) — ve bu, LAB'ın karantina uyarısındaki dosyanın
kendisi: *"karantinadaki `yer_yama_1923_1945.js` etkinleşirse Kandehar ve
Angkor'un tam zincirini geri yazar."* ⇒ Dosya **karantinada KALIR**; iniş
sonrası o iki kayıt **adıyla** kontrol edilir (`§5.1` açık kalemim).

## 7. İNİŞTEN SONRA SIRA
```
FAZ 1  KAPILAR (veriden ÖNCE): SAHIPLIK-KAPSAM + hüküm listesi + hızlı kip
       + 🔴 KASA'nın DİKİŞ KAPISI v2 (ESKI_UFUKLAR + gun() kıyası, tek diff)
FAZ 2  VERİ — `KAMPANYA-SUMER-2000.md §10 ⑤` sırası (2a…2q)
FAZ 3  MOTOR PARTİSİ + SÜMER BLOĞU (tuz bir kez değişir)
FAZ 4  tam inşa + yayın
```
🔴 Ve `§1.5` **koşu sonrası `py arac/durum_tablosu.py --yaz` ile** tazelenir
(`D199`: elle yazılmaz) — ama ⑥'nın iki sayacı elle `ölçülemedi` işaretlenir.
