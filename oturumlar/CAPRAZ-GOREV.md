# ÇAPRAZ OTURUMLAR — GÖREV TANIMI

> Üç oturum: **ÇAPRAZ DOĞU · ÇAPRAZ KUZEY · ÇAPRAZ BATI**
> Bu dosya üçünü birden tanımlar. Kendi bölümünü oku, ortak kuralları hepiniz uygulayın.
> Kullanıcının isteği: *"O devletlerin haritalarını düzeltirsek bizim haritamızda düzelmiş, çaprazlama doğrulanmış olur."*

---

## 0. "ÇAPRAZ" NE DEMEK — ilinti değil, DOĞRULAMA

**Başka bir oturumun teslimini yeniden sınamıyorsunuz.** Yaptığınız şey:

> **Bizim haritamızı ve kronolojimizi, karşı tarafın kendi tarih yazımına karşı sınamak.**

Kullanıcının kurduğu mantık: Osmanlı 1288-1923 arasında sekiz devletle uzun süreli mücadele etti. O devletlerin **kendi kaynakları** aynı sınırları, aynı fetihleri, aynı antlaşmaları **kendi tarafından** anlatıyor. İki anlatı çakışmıyorsa **birimiz yanlışız** — ve hangimiz olduğu araştırılır.

📌 Bugüne kadarki bütün doğrulamamız **tek taraflıydı**: TDV bize Osmanlı'nın ne aldığını söyledi. Çapraz doğrulama, aynı olayı **kaybeden tarafın** kaydından okur.

---

## 1. KAPSAM — sekiz devlet, üç oturum

| oturum | devletler | bugünkü veri (pencere / nokta) |
|---|---|---|
| **ÇAPRAZ DOĞU** | **İran** (İlhanlı → Timurlu → Karakoyunlu → Akkoyunlu → Safevî → **Afşar → Zend → Kaçar**) + **Memlük** | iran 326/176 · safevi 201/164 · ilhanli 143 · timurlu 110 · akkoyunlu 100 · karakoyunlu 94 · **afsar 0 · zend 0 · kacar 0** · memluk 107/101 |
| **ÇAPRAZ KUZEY** | **Rusya + Lehistan** | rusya 128/113 · **lehistan 23/16** ← en zayıf |
| **ÇAPRAZ BATI** | **Avusturya + Macaristan + Venedik + Fransa** | fransa 178/149 · avusturya 90/84 · venedik 83/78 · macaristan 44/30 |

⚠️ **Sınır boylam değil, DEVLET.** Bir olay birden çok oturumu ilgilendiriyorsa (ör. 1699 Karlofça: Avusturya + Venedik + Lehistan + Rusya) **ilgili oturumlar ayrı ayrı bakar** ve sonuçları karşılaştırılır. Bu bir çakışma değil, **kasıtlı örtüşme** — dört ayrı kaynağın aynı antlaşmayı nasıl anlattığı bilginin kendisidir.

🟡 **Kuzey Afrika henüz atanmadı** (Hafsî · Zeyyânî · ocaklıklar · 1830-1911 sömürge dalgası, 292 yerleşim). Ayrı oturum ya da BATI'ya ek olarak sonra karara bağlanacak.

---

## 2. 🔴 TAKVİM — veri gelmeden ÖNCE karara bağlandı

Bu iş başlar başlamaz **sistematik bir çelişki** üretecek ve **anlaşmazlık sanılacak:**

```
Rusya       Jülyen takvim, 1918'e kadar      (19. yy'da 12 gün fark)
Lehistan    1582'de Gregoryen'e geçti
Venedik     1582'de geçti
Avusturya   1583-1584
Macaristan  1587
Osmanlı     Hicrî · Rûmî
```

Rus kaynağı *"12 Eylül"*, bizim kaynağımız *"24 Eylül"* diyecek — **aynı gün.**

> **KURAL: Her dış tarih, kaynağın takvimiyle birlikte kaydedilir. Dönüştürme
> yapılır ama HAM HÂLİ DE KALIR.**

⚠️ Bu kural olmadan yüzlerce **sahte çelişki** üretir ve gerçek olanları gizlersiniz.

---

## 3. KAYNAK HİYERARŞİSİ — alana göre değişir

Bugüne kadar kural tekti: *TDV birincil.* Bu iş için **yetmiyor:**

| ne | birincil | çapraz kontrol |
|---|---|---|
| Osmanlı / İslam dünyası olguları | **TDV** | dış kaynak |
| Bir dış devletin **kendi iç** kronolojisi | **o devletin akademik kaynağı** | TDV |
| **Temas olguları** (X bizden Y'yi ne zaman aldı) | **İKİSİ BİRDEN** | — |

🔴 **Ve üçüncü satır işin özü: orada anlaşmazlık bir KUSUR DEĞİL, BULGUDUR.**
Çözülmeden önce **kaydedilir** — çünkü sistematik bir sapma (takvim gibi) ancak
biriktiğinde görünür. Tek çelişkiyi *"hangisi doğru"* diye çözmek deseni yok eder.

⚠️ **Wikipedia aday üreticidir, kaynak değil.** *"Hangi olaya bakmalıyım"* sorusunu
cevaplar; tarih oradan alınıp **doğrulanmadan yazılmaz.**

---

## 4. 🔴 BUGÜN ÖĞRENİLEN VE SİZE GEÇEN ALTI KURAL

Bunlar bu projede **bedeli ödenmiş** kurallardır — hepsinin bir vakası var.

**① Sayısal veri tek çekişten alınmaz.** TDV özetleyicisi bir çekişte olmayan bir
tarih üretti (`1444`), ikinci çekişte o cümle yoktu.

**② Ve iki çekiş de aynı yanlışı üretebilir.** *"Bu anlaşma Orhan Gazi döneminde
imzalanmıştır"* — anlaşma 1387, Orhan 1362'de öldü. ⇒ **Gelen her tarih,
elimizdeki BAĞIMSIZ bir veriyle çarpıştırılır**: `padisahlar.js` saltanat aralığı ·
hicrî↔milâdî tutarlılık · `devletler.js` ömrü. (`OGRENILENLER §63`)

**③ Slug ölü çıkınca "kaynak yok" denmez.** `kirim-hanligi` ölüydü, doğrusu sade
`kirim`; `mehmed-ali-pasa` ölüydü, doğrusu `kavalali-mehmed-ali-pasa`. **Kaynak
vardı, adres yanlıştı** — bugün iki kez.

**④ İki kaynak maddesi çeliştiğinde OLAYIN KENDİ maddesi esastır.** TDV `memlukler`
Ridâniye'yi 23 Ocak veriyor; `ridaniye-savasi` **22 Ocak** diyor ve 23'ün yanlış
kaydedildiğini **yazıyor.**

**⑤ Kaynağın verdiği hassasiyet, verildiği gibi yazılır.** Mevsimi aya, ayı güne
çevirmek aynı kusur. `t:` sıralanabilir tarih, `gun:` insanın okuduğu hassasiyet
(*"1454 yazı"*, `gun:` alanında 18 emsal var).

**⑥ Bir ölçüm TEK YÖNDE sorulursa ters yöndeki kusuru göremez.** *"Bu boya kaç
devleti yutuyor"* sorusu bir kusur sınıfı buldu; *"bu pencere hangi devlete
düşüyor — hiçbirine düşmüyorsa?"* sorusu **bambaşka** bir sınıf buldu.
(`OGRENILENLER §68`)

---

## 5. YAZMA YETKİSİ — kesin sınır

```
YAZARSINIZ    oturumlar/CAPRAZ-<BÖLGE>.md          (bulgular, öneriler)
              oturumlar/CAPRAZ-<BÖLGE>-ILERLEME.md (ölçüm kayıtları)

YAZMAZSINIZ   data/*.js          ← veri oturumlarının
              arac/*.py          ← koordinatörün / DENETÇİ'nin / MOTOR'un
              js/ css/ index.html ← ARAYÜZ'ün
              CLAUDE.md · ORGANIZASYON.md · OGRENILENLER.md · KARAR-DAYANAK.md
```

📌 Sebep `ORGANIZASYON §7`: iki oturum aynı dosyaya yazınca **sessiz veri kaybı**
oluyor. Bugün üç commit çakışması yaşandı.

🟢 **Öneri yazarsınız, uygulamayı başkası yapar.** Önerileriniz `YAMACI` ·
`VERİ DEVLET` · `VERİ KRONOLOJİ` · `VERİ SAVAŞ`'a koordinatör üzerinden gider.

⚠️ **Commit ederken yol adı yazın** (`ORGANIZASYON §13`):
```
git commit -F - -- oturumlar/CAPRAZ-DOGU.md
```
Index paylaşılıyor; yol adı olmadan başkasının sahnelediği dosya sizin commit'inize girer.

**Modeliniz Opus** — doğru. Sebebi `ORGANIZASYON Karar 1`: yanlış cevap sessizce
"tarihî gerçek" olarak veriye yazılıyorsa Opus.

---

## 6. GİRDİ KİLİDİ — ŞU AN AÇIK

```
üretim koşusu   11:55 → 13:14 (79 dk)  BİTTİ
data/donemler.js · petek_govde.js  13:14'te yazıldı
```
MOTOR on ölçütle doğruluyor. **Zaten veriye yazmıyorsunuz**, kilit sizi
etkilemiyor. `.uretim-basladi` damgası kökte duruyorsa MOTOR temizleyecek.

---

## 7. İLK SOMUT İŞ — oturum başına

### ÇAPRAZ DOĞU

🔴 **Birinci iş: `iran` bir TORBA ve üç hanedan hiç yok.**
```
s:"iran"   326 pencere  ← İlhanlı sonrası her şeyi içine almış
s:"afsar"  0 kayıt   ·  s:"zend"  0  ·  s:"kacar"  0
```
Kullanıcı haritada İran'ın *"benekli parçalı"* göründüğünü bildirdi. Sebebi ölçüldü:
**1500'de `akkoyunlu`(67) ile `iran`(46) aynı bölgede yerleşim yerleşim değişiyor** —
biri gerçek hanedan, öteki torba.

Kullanıcının istediği adlandırma: **"Safevî İranı" · "Afşar İranı" · "Akkoyunlu
İranı" · "Kaçar İranı"** — ayrı kimlikler, ve *"İran"* bunların **birleşimi**
olarak türetilecek.

⇒ **326 pencerenin her biri hangi hanedana ait?** Ölç, öner, `CAPRAZ-DOGU.md`'ye yaz.
⚠️ Yeni kimlik = yeni renk gerektirir; VERİ KİMLİK'in kuyruğu bugün çok uzun.
**Renk olmadan yazılan kimlik BOYANMAZ** — önerini renk ihtiyacıyla birlikte ver.

📌 **Sorduğun soruya cevap:** `yerlesimler_asya.js`'in 344 noktası gerçekten merge
dışı ve tamamı 62°D'nin doğusunda — **ama o senin işin değil**, MOTOR'un pencere
kararı (`KARAR-DAYANAK` 15-18). Sen İran'ın **pencere içindeki** kısmıyla ilgilen.

🟡 **İkinci iş: Memlük.** Bugün iki kusuru çıktı — devletin sonu yanlış tarihteydi
(`1517-01-22` = son savaşın günü; düzeltildi → `1517-04-13`), ve Kızıldeniz
kıyısında **39,7 yıl** fazladan Memlûk boyalı yer var (Arkîko · Halâib · Akīk ·
Tokar · Sinkat · Vâdî Halfâ). Memlük kaynaklarıyla Suriye-Filistin-Hicaz kesitini
çapraz sına.

### ÇAPRAZ KUZEY

🔴 **Birinci iş: Lehistan 16 nokta ile en zayıf devlet.** Osmanlı'nın en uzun
süreli kuzey komşusu için çok az. Kamaniçe (1672-1699), Hotin, Podolya, Ukrayna
kazakları, Zaporojye — bunların kaç tanesi veride?

🟡 **İkinci iş: Rusya'nın Osmanlı sınırına NE ZAMAN dayandığı.** Kullanıcının
sorusu aynen: *"Rusya ne zaman kuruldu, nasıl Osmanlı sınırına dayandı, anlamamız
lazım."* Bugün `rusya` 128 pencere taşıyor ama **ilk teması** hangi tarih?

📌 Ve bir bulgu hazır: **Deşt-i Kıpçak 1441'de değil 1502'de** Kırım'a geçiyor
(bugün düzeltildi) — Altın Orda'nın yıkılışı. Rus/Kazak/Nogay tarafından bu geçiş
nasıl anlatılıyor, çapraz sına.

### ÇAPRAZ BATI

🔴 **Birinci iş: Macaristan 30 nokta, ve ince kimlikleri HİÇ kullanılmıyor.**
```
macaristan  44 pencere ↔ dizinde 3 devlet (bağımsız · Habsburg · naiplik) · kullanım 0
```
1526 Mohaç'tan sonra Macaristan **üçe bölündü** (Kraliyet Macaristanı · Osmanlı
Budin · Erdel) ve haritamız bunu **tek renkle** gösteriyor.

🟡 **İkinci iş: Venedik'in adaları ve iskeleleri.** Kullanıcının sorusu aynen:
*"Venedik kaynaklarında Dubrovnik, Parga, Preveze, Modon, Koron ve çeşitli adalar
hakkında — Girit, Kıbrıs, Rodos vesaire — ne anlatıyor, bizdeki karşılığı nedir?"*
Venedik arşivi (Senato kararları, *Relazioni*) tarih bakımından **çok kesindir**;
bizim tarihlerimizi gün gün sınayabilir.

---

## 8. ÇIKTI BİÇİMİ

Her bulgu şu üçünü taşısın:
```
① BİZDE NE VAR      dosya · alan · tarih (ölçülmüş, tahmin değil)
② KAYNAKTA NE VAR   künye + takvim + alıntı
③ HÜKÜM             uyuyor / çelişiyor / doğrulanamadı
                    ⚠️ "doğrulanamadı" tam bir hükümdür, boşluk değil
```

📌 **Çelişki bulduğunuzda ÇÖZMEYE ÇALIŞMAYIN — kaydedin.** Karar koordinatörde,
ve karar ancak birkaç çelişki birikince doğru verilebilir (takvim sapması gibi
sistematik bir sebep ancak desende görünür).
