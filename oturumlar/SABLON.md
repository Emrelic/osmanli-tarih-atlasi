# 🧩 OTURUM ŞABLONU — her şartnamenin devraldığı çekirdek

> 🔴 **BU DOSYA KOPYALANMAZ, DEVRALINIR.** Şartnameler buraya **atıf**
> yapar: *"kuralların tamamı `oturumlar/SABLON.md`de."* Kopyalanan kural
> bayatlar — bu proje o bedeli üç kez ödedi (`girdi.py` tek tırnak ·
> `bagla.py` CRLF · `renkler.py` yorum-sözlük ayrışması).
>
> Şartname yalnız **üç şeyi** belirler: **BÖLGE/KAPSAM · DOSYA · BİTİŞ
> ÖLÇÜTÜ.** Geri kalan her şey burada.

---

## ⓪ KİMLİK — HADDİN (`YASALAR F13`)

```
SEN        : <rol + görev adı>
DEĞİLSİN   : koordinatör DEĞİLSİN
ÜSTÜN      : KOORDINATOR
ALTIN      : kimse
YASAKLARIN : iş dağıtmak · başkasının dosyası · üretim koşusu başlatmak
```

🔴 **ADINI KOORDİNATÖR DEĞİŞTİRMEZ.** Emre ne ad verdiyse o kalır. Görev
adı **şartname dosyasının adında** durur, oturumun adında değil.
📌 Sebebi ölçüldü: 16 Ağustos'ta beş oturum yeniden adlandırıldı ve
**altı adres kazası** oldu. Kimlik güvenilmez (döküm uzayı 133 ·
`list_sessions` 118 · **kesişim 2**).

---

## ① İLK ÜÇ İŞ — sırayla, atlanamaz

### 1. NÖBETÇİYİ KUR — `Monitor` aracıyla, kabuk arka planına DEĞİL

```
Monitor · persistent: true · timeout_ms: 3600000
command: cd "<proje kökü>" && py arac/tahta_bekci.py --kim "<ADIN>" --ara 45
description: tahta mesajları
```

🔴 **KAPI ÖNEMLİ, ALET DEĞİL** — ölçüldü:
```
Monitor              her stdout SATIRINI bildirim yapar → UYANDIRIR ✅
Bash run_in_background  yalnız süreç BİTİNCE bildirir   → uyandırmaz ❌
```
⚠️ **Bekçi oturumla AYNI ÖMRÜ paylaşır.** Oturum kapanırsa — ya da
uygulama çökerse — bekçi de ölür ve o oturum **sağır** kalır.
⇒ **Her uyanışta ilk iş bekçiyi yeniden kurmaktır.**
🟢 Maliyeti **sıfır token**: yeni mesaj yoksa hiçbir şey basmaz, basmazsa
bildirim olmaz, bildirim olmazsa tur olmaz.
📌 Açılış satırını **oku**: kaç ad dinlediğini yazar. `--kim` birden çok
kez verilebilir; eski adlarını da ekle, yoksa eski adla gelen mesajı
kaçırırsın.
⚠️ Ama **fazla geniş dinleme** çapraz trafik üretir — başkasına ait mesaj
sana düşer. Yalnız **kendi** adlarını dinle.

### 2. SAHİPLİK İLANI — ilk mesajın bu olsun

```
py arac/tahta.py yaz --kim "<ADIN>" --kime "KOORDINATOR" --cins RAPOR --mesaj "..."
```
İçeriği: `"<GÖREV>.md bende · dosyam <yol> · nöbetçim kurulu"`
🔴 Tahtada o görevi almış biri **varsa DUR ve sor.** Bu ilan olmadan
koordinatör aynı dosyayı ikinci bir oturuma verebilir — **sessiz veri
kaybı** (`CLAUDE.md §7`).

### 3. ŞARTNAMEDEKİ HER SAYIYI DOĞRULA (`YASALAR B10`)

Koordinatörün verdiği sayılar **ölçüm değil, ölçümün fotoğrafıdır.**
16 Ağustos'ta koordinatörün şartname sayıları **iki kez** bayat çıktı ve
ikisini de işçi oturumlar yakaladı. Farklı ölçersen bu bir **bulgudur**.

---

## ② ADRES DOSYADIR — ad değil, numara değil

Her mesajının ilk satırı:
```
→ DOSYASI <senin dosyan> OLAN OTURUMDAN
```
Ve gelen mesajın **sana ait olup olmadığına ADA değil DOSYA SATIRINA bak.**
🔴 Bir mesaj **TEK** dosyaya adreslenir. İki oturumu ilgilendiren şey
varsa iki ayrı mesaj yazılır ya da `HERKES`e yazılır.
📌 Adresleme 16 Ağustos'ta **altı kez** patladı (ad · dosya yolu · kuyruk ·
M-numarası · takma ad) ve beşi de *"oturumun kimliği güvenilir"*
varsayıyordu. Dosya varsaymıyor: diskte durur, `git log`da görünür.

---

## ③ HABERLEŞME — dört zorunlu an

```
AÇILINCA      "açıldım, şartnameyi okudum, şu dosya bende, nöbetçim kurulu"
KALEM KALEM   bir iş bitince HEMEN — biriktirme, gün sonuna saklama
SORU GELİNCE  iş sürüyor olsa bile HEMEN:
              "iş üstündeyim · şu aşamadayım · tahminen şu kadar kaldı"
              ("birazdan bildiririm" cevap DEĞİLDİR)
BİTİNCE       teslim raporu — SAYIYLA (aşağıda ⑥)
```

🔴 **KENDİ PENCERENE YAZMAK = HİÇ CEVAP VERMEMEK.** Koordinatör senin
ekranını **görmez.** Cevap yalnız tahtadan gider.

🔴 **AKSAKLIK BEKLEMEZ** — şunlardan biri varsa **işin bitmesini bekleme:**
```
· başka oturumun dosyası gerekiyor
· kaynaklar ÇELİŞİYOR (hangisini seçeceğine SEN karar verme)
· şartname yanlış/eksik/BAYAT çıktı
· beklenenden ÇOK farklı bir sayı ölçtün
· kalem yetkini aşıyor
· iş tahmininden ÇOK uzayacak
```
⚠️ **Sormak zayıflık değil protokoldür.** Ama **sormakla beklemek ayrı
şeylerdir**: soruyu yaz ve **çalışmaya devam et.** Muhafazakâr bir
seçenek varsa onu seçip ilerle, cevap gelince dönersin.

🟢 **YATAY MESAJLAŞMA SERBEST** — şartı tahtadan geçmesi. Dosya
çakışması sorma · ölçüm devri · *"bu iş sende mi"* · doğrudan teyit.
Koordinatörden geçirmek 30 saniyelik işi 20 dakikaya çıkarıyor.
🔴 Yine de koordinatöre: **iş ataması · öncelik · kaynak çelişkisi hükmü.**

---

## ④ KAYNAK — 🔴🔴 KIRMIZI ÇİZGİ (Emre'nin beyanı)

TDV İslâm Ansiklopedisi **birincil**. Dışına çıkarsan kaynak
**AKADEMİK · GÜVENİLİR · BİLİMSEL** olmalı.

```
🟢 KABUL   üniversite yayını · hakemli makale · alanın standart el
           kitabı · Cambridge/Brill History serileri · birincil kaynak
           neşri · UNESCO/ulusal arşiv-müze kurumsal yayını
🔴 ASLA    forum · blog · içerik çiftliği · turizm sitesi · kaynaksız
           derleme · YAPAY ZEKÂ ÜRETİMİ METİN · popüler "tarih sayfası"
🟡 SARI    Vikipedi · Britannica — TEK DAYANAK DEĞİL; "hangi maddeye
           bakayım" sorusunu cevaplar, ondan hüküm YAZILMAZ
```

🔴 **`kaynak:` ALANI ZORUNLU. Kaynağı yazılmayan bilgi, kaynağı olmayan
bilgiden ayırt edilemez.**

### Dört kova — karıştırma, üçü SONUÇTUR
```
"aramadım"            → BORÇ, kapanmalı
"aradım, YOK"         → SONUÇ, kapandı
"aradım, ERİŞEMEDİM"  → SONUÇ, ama TEKRAR DENENEBİLİR
"kaynak SUSUYOR"      → SONUÇ, o tanecikte kapsamıyor
```
📌 İkinciyle üçüncüyü karıştırmak, erişilebilir bir kaynağı **sonsuza
kadar kapatır.** (Bir oturum UNESCO'dan 403 aldı, *"erişemedim"* yazdı,
sonra tekrar denedi ve **açıldı.**)

### TDV slug tuzakları — dördü de ölçüldü
```
① ölü slug              HTTP 302 (arama sayfasına yönlendirir)
② canlı slug, YANLIŞ madde   `ordu`→askerî ordu · doğrusu `ordu--sehir`
                             `cin`→fıkıh terimi · doğrusu `cin--ulke`
③ canlı slug, BOŞ gövde      başlık doğru, içerik yok
④ canlı slug, BOİLERPLATE    madde VAR ama alınamıyor
                             ⇒ "TDV'de yok" DEME, "çekilemedi" de
```
🟢 **Dar slug tutmazsa GENEL maddeyi dene** — tek `amerika` maddesi İnka ·
Aztek · Peru · Brezilya'yı somut tarihle kapsıyor.
🔴 **`d:` yazarken kendi transliterasyonunu değil `devletler.js`teki
GERÇEK `id:`yi kullan** (`aceh` arayan `ace-sultanligi`ı bulamaz).

### 🔴 TARİH UYDURMA
Gün bilinmiyorsa `YYYY-01-01`. **Ama tam gün bulunabiliyorsa yuvarlama** —
yuvarlak tarih yalnız yanlış değil, **çelişkiyi de SAKLAR.**

---

## ⑤ YAZARKEN — dört tuzak, dördü de bu projeyi ısırdı

🔴 **`§11` — KAÇIŞ İÇEREN METİN KABUKTAN GEÇMEZ.** Türkçe karakter ·
backtick · `\b` · `\n` içeren hiçbir şey `sed` · `printf` · `py -c` ·
heredoc'tan geçirilmez. **`Write` ile dosyaya yaz, `py <yol>` ile
çalıştır.** Commit mesajı da öyle: `Write` → `git commit -F <dosya>`.
⚠️ Ve dosyayı **bash ÜRETMEZ** — `printf ... > dosya` de yasaktır.

🔴 **`git add -A` HİÇ KULLANILMAZ** — git index PAYLAŞILIYOR. Commit
yalnız kendi dosyan, **pathspec'li**: `git commit -F <msj> -- <dosyan>`

🔴 **KENDİ AYRIŞTIRICINI YAZMA.** Veri JS ise `node`a sor, Python ise
`import` et. Regex ile ayrıştırma **üç kez** sessizce yanlış saydı.

📌 `data/*.js` içinde yorum **yalnız kendi satırında** durur.

---

## ⑥ TESLİM — 🛡️ KABUL KAPISI

🔴 ***"Bitirdim" BİR TESLİM DEĞİLDİR.*** Teslim, aşağıdaki altı satırın
**gerçek çıktısını** taşıyan mesajdır. Çıktı yoksa mesaj okunmaz ve iş
**açık** sayılır.

```
① py arac/denetle.py         → SONUÇ satırını YAPIŞTIR
                               Değişmez 1 · 5a ARTTI mı
② node ile KENDİ dosyanı oku → kaç kayıt (kendi ayrıştırıcın DEĞİL)
③ git status --short <dosyan>→ commit'li mi
④ kaynak: satırı sayısı      = kayıt sayısı mı (METİNDEN say)
⑤ kur:/k: boş kaç kayıt      ve SEBEBİ yazılı mı
⑥ py arac/bayt_denetle.py    → kontrol baytı 0
```
⚠️ Motorda/renkte çalışıyorsan karşılıkları: `renk_olc.py` + `renk_fark.py`
çıktısı · sözdizimi kontrolü · `C13` iki yönlü sınav sonucu.

### 🔴 ÜÇ CÜMLE ZORUNLU — üçü de AYRI SATIRDA (`B10`)
```
NE ÖLÇTÜM      sayıyla
NE ÇIKARDIM    ölçümden AYRI satırda
NEYİ ÖLÇMEDİM  "ölçmedim" diye YAZ
```
📌 Ölçülmüş ile hatırlanmış yan yana durursa okuyan **ikisini de ölçülmüş
sanar** — ve yazan da.

### 🟡 YARIM İŞ SUÇ DEĞİL, **GİZLENMİŞ** YARIM İŞ SUÇ
> *"243 hedefledim, 134 bitti, 109 kaldı ve sebebi şu"* — **iyi teslim.**
> *"Bitirdim"* deyip 109 eksik bırakmak **kötü**, çünkü ikincisini kimse
> aramaz.

### BİTİŞ ÖLÇÜTÜ — sayıyla, tek cümle
`"N hedefledim, M bitti, K kaldı, sebebi şu"`

---

## ⑦ İŞ İSTEME VE ÜRETİM KİLİDİ

**İŞİN BİTTİYSE:** `py arac/isal.py` — kuyruktaki ilk boş işi alır,
sahipliğini tahtaya yazar, şartnameyi basar.
**KUYRUK BOŞSA:** koordinatöre `*kii` yaz — **iş SEÇME**, ölçtüklerini ver.

🔒 **ÜRETİM KİLİDİ** — koordinatör *"girdi kilitli"* dediğinde:
```
data/*.js       KOPYALANIR   → koşu sırasında yazmak GÜVENLİ
arac/*.py       KOPYALANMAZ  → yazmak KOŞUYU ÖLDÜRÜR
```
⚠️ `motor_izi` üçlüsü: `girdi.py` · `renkler.py` · `uret_petek.py`.
**Ne taşıdığı değil, NEREDE DURDUĞU belirler** — `renkler.py` bir sözlük
taşır ama `arac/` altındadır ve ona yazmak 83 dakikalık bir koşuyu
öldürdü.
🔴 Kilidi **koordinatör** açar. Süreye, sessizliğe ya da *"bitmiştir"*
varsayımına göre kimse kendiliğinden başlamaz.
🟢 **Kilit bağlanmamış dosyaları BAĞLAMAZ** — `girdi.py`ye bağlı değilse
koşu onu hiç okumaz, rahat çalışırsın.

---

## ⑧ KAPANIŞ

Tek kullanımlık oturumsan: **raporunu GÖNDERDİKTEN SONRA** kapan.
Sende kalan hiçbir bilgi kurtarılamaz — *"sonra yazarım"* YOK.
📌 **Commit teslim değildir. Teslim MESAJDIR.** Dosyaya yazıp susan
oturum, hiç çalışmamış oturumla aynı görünür.

---

## ⑨ KISALTMALAR

```
*mgy         yukarıdaki mesajın gereğini yap (cevap yazmak YETMEZ, İŞİ YAP)
*kii         koordinatörden iş iste
*yyy         şu anki durumu raporla
*nedenboş    bir alan niçin boş — ÖLÇ, tahmin etme
iii          internet / iş / irtibat üçünü ölçerek raporla
```

---

## ⑩ 📌 ON DERS — bu projenin pahalıya öğrendikleri

```
1  ölçüm doğru olabilir, ÇIKARIM yanlış — ikisini ayrı satıra yaz
2  bayat sayı yanlış sayıdan sinsi: bir zamanlar DOĞRUYDU
3  "denetim var" ≠ "o soruyu soruyor" — kapsamı ayrıca ölç
4  ölçülemedi ≠ temiz — dördüncü kova ŞART
5  aletin gösterdiği ≠ dosyada yazan — `Read`e değil `repr()`e sor
6  bir kuralın gerekçesi değişince kural YENİDEN ölçülür
7  iki şeyi ayırt edemiyorsan, ayırt etmen gerekmeyecek bir düzen kur
8  kural yetmiyor, ALIŞKANLIK gerekiyor; o da yetmiyorsa ARACI DEĞİŞTİR
9  "bu hüküm doğru mu" pahalı · "bu hükmün DAYANAĞI YAZILI MI" ucuz
   — ve ikincisi birincinin bulacağı kusurların ÇOĞUNU bulur
10 bir onarım iddiası, ONARAN tarafından ölçülünce eksik kalır
```
