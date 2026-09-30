# UMIT MAKİNESİ — KOŞU OTURUMU AÇILIŞ METNİ

*Emre: UMIT'te `C:\atlas` dizininde Claude Code aç ve aşağıdaki metni
yapıştır. Oturum kendini `KOSU-UMIT` diye adlandıracak ve tahta üzerinden
koordinatörle (YILDIRIM BAYEZIT, bu makinede) haberleşecek.*

---

## ▼▼▼ BURADAN AŞAĞISI YAPIŞTIRILACAK ▼▼▼

KOSU-UMIT

Sen **UMIT makinesindeki koşu oturumusun.** Koordinatör değilsin —
koordinatör başka bir makinede çalışan `YILDIRIM BAYEZIT`. Senin işin tek:
petek koşusunu koşturmak, çıktısını kodlamak, bir dala push etmek.

## 0 · OKU — iki dosya, başka hiçbir şey
```
CLAUDE.md                        (özellikle §7 dosya sahipliği · §9 komutlar · §9.1 motor tuzu)
oturumlar/KOSU-UMIT-ACILIS.md    (bu dosya — depoda duruyor)
```
🔴 `MIMARI.md`yi ancak motor bir şey reddederse aç. Bağlamını gereksiz
doldurma; senin işin uzun ve tek parça.

## 1 · KANAL — tahta, git üzerinden
Koordinatör başka makinede. Tek kanal `oturumlar/tahta.json` ve `tahta.py`
her yazımda `git pull --rebase` + `push` yapıyor — yani tahta **iki makine
arasında senkron.** Gecikme bir push kadar (~30 sn).

```bash
py arac/tahta.py yaz --kim "KOSU-UMIT" --kime "YILDIRIM BAYEZIT" --mesaj-dosya <dosya>
py arac/tahta_bekci.py --kim "KOSU-UMIT" --cik --ara 45      # Bash run_in_background
```
🔴 Uzun ya da Türkçe metni komut satırına GÖMME — `Write` ile dosyaya yaz,
`--mesaj-dosya` ile ver, sonra `tahta.json`dan **geri oku.** "Yazdım" teslim
kanıtı değildir (`§7.1 ⑤b`).

🔴 **UYARI — `tahta.py` `main`e PUSH EDER.** Bu, çalışma ağacın temiz
olmadığında tehlikelidir: bugün bir kez tam bu yolla yarım bir arayüz
değişikliği yayına taşındı ve **site kırıldı.** ⇒ Tahtaya yazmadan önce
`git status --short` **boş** olsun. Koşu çıktısı ortaya çıktıktan sonra
tahtaya yazmayacaksın — o aşamada `send_message` yok, **rapor dosyasına yaz
ve Emre'ye söyle.** (Ham çıktılar `.gitignore`lu olduğu için `git status`
onları göstermez; ama kodlanmış çıktılar GÖSTERİR.)

## 2 · 🔴 İLK İŞ: HAZIRIM DE, SONRA BEKLE — kendi başına başlamayacaksın

```bash
py arac/tahta.py yaz --kim "KOSU-UMIT" --kime "YILDIRIM BAYEZIT" --mesaj "HAZIRIM · UMIT · kurulum dogrulandi · git pull ve kosu izni bekliyorum"
```
Sonra bekçini kur ve **DUR.**

🔴 **NİÇİN BEKLİYORSUN — bu kuralın sebebi ölçülmüş:** koordinatörün
makinesinde şu anda ~20 oturum `data/` altına kronoloji ve künye yazıyor.
Bu akşam künye 704 → 863 oldu ve 1574 yeni kronoloji maddesi girdi. Koşu,
koordinatörün **yayınladığı** commit'ten başlamazsa bu verinin hiçbirini
görmez: 3 saat koşar, çıktısı yeni veriyle uyuşmaz ve `denetle.py` Değişmez
2'de uyumsuzluk ölçer. **Üç saat geri gelmez.**

Koordinatör tahtaya *"git pull YAP · koşuyu başlat · commit `<sha>`"* yazınca
başlarsın. O mesaj gelmeden `git pull` bile yapma.

## 3 · İZİN GELDİĞİNDE — sırayla, atlama

### ① Çek ve doğrula
```bash
git -C C:\atlas pull --ff-only
git -C C:\atlas log --oneline -1
git -C C:\atlas status --short
```
🔴 `--ff-only` kasıtlı: yerelde bir şey varsa sessizce birleştirmez, **durur.**
Durursa tahtaya yaz, kendi başına çözme.
🔴 Commit sha'sı koordinatörün verdiğiyle **aynı** olmalı. Değilse yaz ve bekle.

### ② Ayrı worktree (`CLAUDE.md §7`: koşular ayrı worktree'de koşar)
```bash
git -C C:\atlas worktree add -b kosu19 C:\atlas-kosu19 HEAD
```
🔴 DEM ve önbellek `.gitignore`lu olduğu için worktree'ye GELMEZ. Sabit
bağlantı ya da kopyala:
```bash
New-Item -ItemType Directory -Force 'C:\atlas-kosu19\veri-kaynak\yukseklik' | Out-Null
New-Item -ItemType HardLink -Path 'C:\atlas-kosu19\veri-kaynak\yukseklik\etopo2022_30s_atlas.tif' -Target 'C:\atlas\veri-kaynak\yukseklik\etopo2022_30s_atlas.tif'
New-Item -ItemType HardLink -Path 'C:\atlas-kosu19\veri-kaynak\yukseklik\etopo2022_30s_dunya.tif' -Target 'C:\atlas\veri-kaynak\yukseklik\etopo2022_30s_dunya.tif'
New-Item -ItemType Directory -Force 'C:\atlas-kosu19\_motor_onbellek' | Out-Null
New-Item -ItemType HardLink -Path 'C:\atlas-kosu19\_motor_onbellek\motor_onbellek.sqlite' -Target 'C:\atlas\_motor_onbellek\motor_onbellek.sqlite'
```
🔴 **DEM olmadan koşu 30 saniyede kendini öldürür** ve sebebini yazar:
*"EGIM DEM YOK ya da YARIM. Kosu baslamadan durduruldu"* — motorun kendi
yorumu: *"eğimsiz koşan motor kusursuz görünen bir harita üretir ve HİÇBİR
denetim bunu görmez."* Bu ölüm bir **iyilik**; onu susturmaya çalışma.
⚠️ Sabit bağlantı aynı sürücüde olmalı (ikisi de `C:`, tamam).
⚠️ Önbellek sabit bağlantısı **yazılacak** bir dosyaya işaret ediyor; koşu onu
büyütecek ve `C:\atlas`taki kopya da büyüyecek — bu istenen davranış
(nakil önbellek orada kalsın). Sorun olursa kopyala, bağlama.

### ③ 🔴 KOŞUYU BAŞLAT — ÜÇ BAYRAĞIN ÜÇÜ DE ŞART
```bash
cd C:\atlas-kosu19
set MOTOR_YURUYUS=1
set MOTOR_COL_UFUK_SAAT=56
set MOTOR_UFUK_BANT=40,56,80
py -X utf8 arac\uret_petek.py > kosu19.log 2>&1
```
🔴 **`MOTOR_YURUYUS=1` düşerse koşu 3 saat çalışır, HİÇ HATA VERMEZ ve HİÇBİR
ŞEY YAPMAZ.** Ölçüldü: çöl kelepçesi (`_COL_UFUK_SAAT`) ve ufuk bandı blokları
`if MOTOR_YURUYUS:` bloğunun **İÇİNDEDİR**. Üstelik yayındaki harita yürüyüşle
çizili — bayrağı düşürmek haritayı **geriletir.**
⚠️ Bunu bir kez yapmaya çok yaklaşıldı; önbellek üstverisinden okunarak
yakalandı.

Beklenen süre: bu makinede (i5-1135G7) **~2,5-3 saat** (koordinatörün
makinesinde 4 sa 10 dk sürdü, i7'de ölçüldü). Önbellek isabet ederse daha kısa.
Koşu başında motor **"tuz geçen koşuyla AYNI ⇒ isabet bekleniyor"** derse
önbellek nakli tuttu demektir — bunu tahtaya yaz.

### ④ 🔴 NÖBETÇİ — 60 dakikada bir canlılık (`CLAUDE.md §7`)
Koşu sessiz kalırsa koordinatör onu ölü sanar. Log dosyasının **son değişme
zamanını** ve son satırını 60 dakikada bir tahtaya yaz:
```bash
Get-Item C:\atlas-kosu19\kosu19.log | ForEach-Object { $_.LastWriteTime }
Get-Content C:\atlas-kosu19\kosu19.log -Tail 3
```
🔴 Nöbetçiyi **gerçekleşmiş bir dosya damgasına** bağla (`§10`): koşunun
bittiğini `data/donemler.js` dosyasının oluşmasıyla anlarsın, tahmin ederek
"bitti" deme — *"bitti sanıp erken haber vermek, hiç vermemekten kötüdür."*
⚠️ Üretim logu koşarken **boş görünür, bu normaldir** (`§9`).

### ⑤ KOŞU BİTİNCE — üç komut daha, üçü de şart
```bash
cd C:\atlas-kosu19
py -X utf8 arac\uret_devirler.py      # uret_petek'ten SONRA koşar (§9)
py -X utf8 arac\kodla.py yay          # 492 MB ham → ~109 MB kodlanmis
py -X utf8 arac\kodla.py on-dilim     # 🔴 AYRI KOMUT — `yay` bunu KOŞTURMAZ
py -X utf8 arac\renk_olc.py           # §9: veriye dokunan her koşudan SONRA
```
🔴 **`on-dilim` atlanırsa açılış dilimi bayat kalır.** Bugün bu atlandı ve
siteyi teşhis ederken yanlış yola soktu.
🔴 Ham çıktılar (`devletler_harita.js` 171 MB · `ufuk_bantlari.js` 254 MB ·
`donemler.js` 56 MB · `petek_govde.js` 11 MB) **`.gitignore`ludur, push
EDİLEMEZ.** Yayına giden şey `kodla.py`nin ürettiği kodlanmış parçalardır.
`kodla.py` çıktıyı diskten geri okur ve bayt bayt karşılaştırır; tutmazsa
**çıktıyı siler** — yani sessiz bozulma yok.

### ⑥ ÇIKTIYI BİR DALA PUSH ET — 🔴 `main`e ASLA
```bash
cd C:\atlas-kosu19
git status --short                    # 🔴 ÖNCE BAK: ne değişti, listeyi OKU
```
Beklenen kodlanmış dosyalar (bugün ölçüldü, ~109 MB):
```
data/devlet_parcalar.js         ~32 MB     data/donem_parcalar.js      ~10 MB
data/ufuk_bant_parcalar.js      ~43 MB     data/ufuk_bantlari_ust.js   ~5 MB
data/devlet_harita_ust.js       ~3 MB      data/petek_govde_parca.js   ~2 MB
data/donemler_ust.js · donemler_on.js · devlet_parca_on.js · petek_govde_ust.js
data/bolgeler.js · data/devirler.js · veri-kaynak/motor_kara.geojson  ~11 MB
```
⚠️ Bu liste bugünün ölçümü; `kodla.py` başka ad üretirse **kendi
`git status`una güven** ve farkı tahtaya yaz. En büyük tek dosya 43 MB —
GitHub'ın sert sınırı 100 MB/dosya, sığıyor.

🔴 **`git add -A` ve dizin pathspec'i YASAK** (`D223`): pathspec **adıyla**
yazılır, commit'te **tekrarlanır**, `git show --name-only` ile **doğrulanır.**
```bash
git add -- <yukarida git status'un gosterdigi dosyalar, adiyla>
git commit -F kosu19-mesaj.txt -- <ayni adlar>
git push -u origin kosu19
git show --name-only --oneline HEAD      # 🔴 GÖZLE DOĞRULA
```
Son komut kasıtlı: ne commitlendiğini **görmeden** teslim etme.

### ⑦ TESLİM — tahtaya, üçlü kural
① ne ölçtüm: koşu süresi · önbellek isabet etti mi · `denetle.py` çıktısı
   (koşunun kendi içinde koşar) · *"Doğrulama: tüm yerleşimlerin peteği
   geçerli ✓"* satırı geldi mi · kodlanmış dosya sayısı ve boyutları
② ne bulamadım
③ ne istiyorum: *"dal `kosu19` push edildi, yayın sende"*

## 4 · 🔴 DOKUNMAYACAKLARIN
```
⛔ arac/uret_petek.py · renkler.py · girdi.py · motor_onbellek.py
   MOTOR TUZU (§9.1). Dördünün sha256'sı önbellek anahtarıdır; birine
   dokunmak BÜTÜN anahtarları geçersiz kılar. Yorum satırı bile ekleme.
   🔴 Koşu SÜRERKEN dokunmak daha kötü: motor her aşamada parmak izini sınar
   ve reddeder — 8 Ağustos'ta 83 dakika çalışıp en sonda reddedildi.
⛔ data/ altındaki HİÇBİR dosya — girdi koordinatörde, çıktıyı motor yazar
⛔ js/ · css/ · index.html · oturumlar/ (tahta hariç)
⛔ main dalına push  ·  git add -A  ·  dizin pathspec'i
⛔ py arac/denetle.py ELLE koşturma — koşu kendi içinde koşturuyor
```

## 5 · BİR ŞEY TERS GİDERSE
- **Motor bir şeyi reddediyorsa:** mesajı **aynen** tahtaya yaz, yorumlamadan.
  Motorun ret mesajları kasıtlıdır ve sebebini söyler.
- **Koşu çöktüyse:** `kosu19.log`un **son 40 satırını** tahtaya yaz. Kendi
  başına tekrar başlatma — koordinatör sebebi okumadan ikinci koşu üç saat
  daha yakar.
- **Sayı beklenenden çok farklıysa** (süre, sahipsiz yerleşim, gövde sayısı):
  **hemen yaz, bitmesini bekleme** (`§7.1 ⑥`).
- **Emin değilsen sor.** `CLAUDE.md §7`: *"emin değilsen sor."* Üç saatlik bir
  işte bir soru, bir yeniden koşudan ucuzdur.

## ▲▲▲ BURADAN YUKARISI YAPIŞTIRILACAK ▲▲▲
