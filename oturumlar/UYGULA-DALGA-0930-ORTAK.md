# UYGULAMA DALGASI — ORTAK ŞARTNAME (30 Eylül 2026)

*Koordinatör: YILDIRIM BAYEZIT. Kendi payın sana gelen mesajdadır.
Bu dosya dokuz oturumun ORTAK kurallarıdır.*

---

## 0 · NİÇİN BU DALGA VAR — bugün ölçüldü

Bugün 81 atlas partisinin **1404 maddesi** okundu ve hüküm yazıldı. Sonuç:

```
KAPANDI (delilli)     345      cozuldu · bayat · once-cozuldu · zaten-dogru
AÇIK                  259      🔴 BU DALGANIN İŞİ
  sirada              175      kabul edildi, YAPILACAK — henüz YAPILMADI
  senin-kararin        40      Emre'ye gidecek, sen dokunmazsın
  olculecek            31      hüküm için ÖNCE ölçüm gerekiyor
  tekrar                8      🔴 aynı şikâyet İKİNCİ kez — ilkinde ÇÖZÜLMEMİŞ
  kosu-bekliyor         3      makineyi bekliyor, sen dokunmazsın
  onay-bekliyor         2      Emre'yi bekliyor, sen dokunmazsın
```

🔴 **Senin işin ÖLÇMEK değil UYGULAMAK.** Hüküm zaten yazıldı, delili
`denetim/KAPAT-*.json`da dosya:satır ile duruyor. Bu dalga "ne olmuş?" diye
sormuyor, "yazılanı veriye geçir" diyor.

🔴 **VE BUGÜN BİR ŞEY DAHA ÖLÇÜLDÜ:** yazılmış ama **hiç koşturulmamış**
uygulama betikleri var. Maddelerin notunda aynen şöyle yazıyor:
*"SAFEVI-DOGU-0081-uygula.py koşturulmadı"* · *"Yapılacak:
KAFKAS-KORFEZ-0081-uygula.py"*. Yani iş yapılmış, diske yazılmış, **veriye
hiç dokunmamış.** Kendi işini bu hâle düşürme: betik yazdıysan KOŞTUR ve
sonucunu ÖLÇ.

---

## 1 · 🔴 DOSYA SAHİPLİĞİ — bu dalganın EN TEHLİKELİ yeri

`CLAUDE.md §7`: *"Bölme ölçütü DOSYADIR; her dosyanın tek sahibi var."*
Şu anda **17 oturum** aynı depoda çalışıyor. Bu dalga partiye göre değil
**DOSYAYA göre** bölündü — senin payında hangi dosya varsa **yalnız onu**
yazarsın, başka partinin maddesi olsa bile.

### ⛔ HİÇ KİMSENİN DOKUNMAYACAĞI DOSYALAR
```
js/app.js · index.html · css/style.css    UFUK-DUGME-0930 üçünü BİRLİKTE
                                          yayına hazırlıyor — DEĞMEYECEKSİN
arac/uret_petek.py · arac/renkler.py      🔴 MOTOR TUZU (§9.1) — DOKUNULMAZ
arac/girdi.py · arac/motor_onbellek.py    aynı tuz
data/donemler.js · devletler_harita.js    ÜRETİLMİŞ — elle düzenlenmez
data/bolgeler.js · petek_govde.js         aynı
data/devletler.js                         sahibi KUNYE-1945-0930
```

🔴 **Yayın bugün BİR KEZ KIRILDI ve sebebi tam buydu:** bir oturumun yarım
kalmış `index.html`i commitlendi, eşi olan `js/app.js` commitlenmedi; site
açılış animasyonunda takıldı ve geri alınana kadar **yayında kaldı.**
*"Bozulan site, eksik özellikten kötüdür."*

### MOTOR MADDESİ GELİRSE — düzeltme değil YAMA yaz
`sirada` maddelerinin ölçülen dağılımında `renkler.py` 7 · `uret_petek.py` 5
madde var. Bunlar **motor tuzundadır**: dokunmak bütün önbellek anahtarlarını
geçersiz kılar (`CLAUDE.md §9.1`). Yapacağın:
```
denetim/<SENİN-ÖNEKİN>-<konu>.diff        ← git apply --check TEMİZ olacak
```
ve tahtaya "şu yama bekliyor" diye yazarsın. Tam inşa koşusunda **hepsi tek
seferde** girer. ⚠️ Bugün ölçüldü: altı eski bekleyen yama **BAYAT**
(`git apply --check` reddediyor) çünkü kimse tazeliğini ölçmüyor. Yamanı
yazdıktan sonra `git apply --check`i KOŞTUR ve teslimde sonucunu yaz.

---

## 2 · UYGULAMA YÖNTEMİ — dört adım, atlanmaz

```
① DELİLİ OKU     denetim/KAPAT-*.json → maddenin `not` alanı dosya:satır verir
② BUGÜNKÜ VERİYİ OKU   delil BAYAT olabilir — 12 oturum bugün veri yazdı
③ DEĞİŞTİR      Edit/Write ile; toplu değişiklikte betik yaz ve KOŞTUR
④ SINA          node --check <değiştirdiğin her .js>     🔴 ŞART
```

🔴 **② ATLANMAZ.** Bugün ölçülen bir vaka: bir madde *"Kusayr hâlâ Osmanlı
adası"* diyordu; bugünkü veri okunduğunda **düzelmiş** olduğu görüldü, o madde
`bayat` oldu. Delile göre düzeltme yapan, düzelmiş veriyi bozar.

🔴 **TOPLU DÜZELTME TUZAKLARI** (`CLAUDE.md §11`):
- `replace(…, 1)` yalnız İLK eşleşmeyi değiştirir — kaç yerde olduğunu SAY.
- Türkçe/kesme işaretli metinde **`sed` KULLANMA.**
- Heredoc yerine `Write` + `py <yol>`. (Heredoc kaçışı `\b`yi bir kez
  0x08 BACKSPACE baytına çevirdi ve `Read` onu GÖRÜNMEZ gösterdi.)
- 🔴 **DİZGİ İÇİNDE KOD ALINTISI VAR.** Bugün bir araç `data/yerlesimler.js`i
  BOZDU: Zagem (Kaheti) kaydının `neden:` alanı içinde `v:[{\"f\":\"1578-08-24\"}]`
  diye bir **alıntı** duruyor ve regex onun İÇİNE yazdı. `node --check`
  yakaladı ("Unexpected identifier 'f'"), 14 dosya geri alındı.
  ⇒ Alan arayan kalıbın **dizgi farkındalığı** olmalı. Hazır çözüm:
  `denetim/ARAC-YERLESIM-UYGULA-0930.py` içindeki `_ust_duzey_alanlar`,
  `_dengeli_son`, `alan_yaz` işlevleri — 19 çift yönlü sınavdan geçti
  (`denetim/ARAC-YERLESIM-UYGULA-0930-SINAV.py`). **Yeniden yazma, ONU KULLAN.**

🔴 **ÜÇ YAZIM BİÇİMİ** (`dersler/D240`): `{ t:"…" }` çıplak · `{"t": "…"}`
JSON tırnaklı · **dizgi içinde kod alıntısı** — üçü bu depoda bir arada
yaşıyor. Yalnız birini arayan kalıp **sessizce "0" der.** **0 bulursan
evreninin kaç eleman olduğunu da bas** — evren 0 ise sonuç "temiz" değil
`ölçülemedi`.

⚠️ Türkçe karşılaştırmada `lower()` KULLANMA — `"İ".lower()` iki kod noktası
verir, `casefold()` de çözmez → `denetim/ARAC-NORMAL-0903.py`.

---

## 3 · 🔴 DEĞİŞMEZ 2 — kronoloji maddesine dokunuyorsan

`CLAUDE.md §3`: her `d:`/`v:` toprak kırılmasının **±30 gün** içinde kronoloji
maddesi olmalı. **Ölçütü gevşetme.**

⇒ Bir yerleşim döneminin gününü değiştiriyorsan, o kırılmanın kronoloji
maddesi de o güne gelmeli — yoksa **yeni bir Değişmez 2 kırılması açarsın.**
İkisini AYNI değişiklikte yap, ya da yapamıyorsan tahtaya yaz.

🔴 **GÜN YAZ, AY YAZMA** (`§8`): `t:"1526-08"` ayın 1'ine genişler ve gün
hassasiyetli yerleşim değişimlerinden **ÖNCE** sıralanır ⇒ senkron bozulur.

🔴 **SÜZME = GİZLEME, SİLME DEĞİL.** `olaylar` dizisinden madde SİLMEZSİN;
zaman çubuğu, ikili arama ve harita eşlemesi **İNDEKS** üzerinde çalışır.
Madde yanlışsa düzeltilir, kaldırılması gerekiyorsa tahtaya yazılır.

---

## 4 · NE YAZILMAZ

- 🔴 `senin-kararin` (40) · `onay-bekliyor` (2) · `kosu-bekliyor` (3)
  maddelerine **DOKUNMAZSIN.** Biri Emre'nin, biri makinenin.
  Payında böyle bir madde varsa atla ve teslimde "atladım: N" diye yaz.
- 🔴 **Tarih uydurma** (`§4`, `D210`): gün bilinmiyorsa `YYYY-01-01`,
  **yıl bilinmiyorsa yıl da yazılmaz.** Künyenin `f:`/`t:` günü bir KAYNAK
  DEĞİLDİR. Atlasın kendi kaydı dayanak olamaz — **atlas mamul üründür.**
- 🔴 `ic_not_*` alanları kullanıcıya **HİÇ gösterilmez.** Şüpheni, çeliştiğin
  kaynağı, ölçemediğini oraya yaz; metne taşıma.
- `git add` / `commit` / `push` **YASAK.** Koordinatör commitler.
- 🔴 `py arac/denetle.py` **ÇALIŞTIRMA** — tepesi 2,4 GB ve **17 oturum**
  çalışıyor. Koordinatör hepiniz bitince TEK SEFER koşturur. Kendi
  değişikliğini `node --check` ile sınarsın, denetle.py ile değil.

---

## 5 · HÜKÜM SÖZLÜĞÜ — cevabını hangi kelimeyle yazacaksın

Tek otorite `C:/claudemre/kutu/asama.py`deki `HUKUMLER`. En sık karıştırılan
dört çift, ve karıştırmanın bedeli:
```
gerek-yok  ≠ vazgecildi    biri KOORDİNATÖRÜN, öteki EMRE'NİN kararı
yapilamaz  ≠ cozulemedi    biri HİÇ DENENMEZ, öteki DENENDİ ve olmadı
tekrar     ≠ once-cozuldu  tam TERSİ: ilkinde çözülMEmiş ↔ çözülMÜŞ
sirada     ≠ kosu-bekliyor ikincisi bizi değil MAKİNEYİ bekliyor
```
🔴 **DELİLSİZ `cozuldu` YASAK.** `cozuldu` yazdığın her madde için
**dosya:satır** ver. Delil yazamıyorsan hüküm `sirada` kalır.
⚠️ `gerek-yok`·`vazgecildi`·`yapilamaz`·`cozulemedi`·`kapsam-disi`
**gerekçesiz yazılamaz.**

---

## 6 · TESLİM

Ürettiğin makine okunur dosya: `denetim/<ADIN>.json` — her maddede
`{parti, madde, eski_hukum, yeni_hukum, delil, dosya, satir}`.
İnsan raporu: `denetim/<ADIN>.md`.

**TESLİM — üçlü kural** (`§7.1 ④`): ① ne ölçtüm (sayıyla) ② ne bulamadım
(`bulunamadı` bir SONUÇTUR) ③ ne istiyorum. + **değiştirdiğin dosyaların
listesi** (koordinatör onları commitleyecek, listesiz commit edilemez).
Sonuna tek satır: **"bekçimi öldüreyim mi?"**

**AKSAKLIK BEKLEMEZ** (`§7.1 ⑥`): başka oturumun dosyası gerekiyorsa ·
kaynaklar çelişiyorsa · sayı beklenenden çok farklıysa · kalem yetkini
aşıyorsa · iş çok uzayacaksa → **hemen yaz.**

```bash
py arac/tahta.py yaz --kim "<ADIN>" --kime "YILDIRIM BAYEZIT" --mesaj-dosya <dosya>
py arac/tahta_bekci.py --kim "<ADIN>" --cik --ara 45      # Bash run_in_background
```
Uzun ya da Türkçe metni komut satırına gömme — `Write` ile dosyaya yaz,
`--mesaj-dosya` ile ver, sonra `tahta.json`dan **geri oku.** "Yazdım" teslim
kanıtı değildir.
