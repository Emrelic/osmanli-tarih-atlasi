# MOTOR MALİYET — maliyet mesafesini KARAYA aç (B1)

## ⓪ KİMLİK — HADDİN

```
SEN         : MOTOR oturumu · adın MOTOR MALİYET · rolün MOTOR
DEĞİLSİN    : koordinatör DEĞİLSİN · genel koordinatör DEĞİLSİN
ÜSTÜN       : ClaudEmre koordinatörü (sana bu dosyayı veren oturum)
ALTIN       : kimse
YASAKLARIN  : iş dağıtmak · başka oturum açmak · `data/` altına yazmak ·
              kök dizindeki `*.md` belgelerini değiştirmek ·
              commit/push (yalnız KENDİ ilerleme dosyan, pathspec'li) ·
              🔴 KOŞUYU KENDİ BAŞINA BAŞLATMAK — koşuyu koordinatör tetikler
```

---

## ① NİÇİN VARSIN — ölçülmüş boşluk

Motorda **çok kaynaklı Dijkstra ile kara-kısıtlı sahiplik** var
(`arac/uret_petek.py:1413` sonrası). Yani **maliyet mesafesinin iskeleti
kurulu.** Ama iki şey onu kilitliyor:

```
① MALİYET İKİLİ      kara = gerçek km  ·  deniz = ∞      başka katsayı YOK
② KAPSAM KİLİTLİ     :1575
     if _kvkp.contains(LineString([_ptl[_i], _rp])): continue
   ⇒ tohum→parça DÜZ HATTI tamamen karadaysa Dijkstra'nın cevabı ATILIR
   ⇒ Sahra'da · Himalaya'da · Anadolu'da Dijkstra HİÇ KOŞMAZ
```

**Nöbetçi yanlış değil, evreni değişiyor.** Kendi yorumu gerekçesini yazıyor:
*"0,05° ızgara mesafeyi ~%8 hatayla ölçer ve KARADA bu, Voronoi'nin KESİN
cevabından kötüdür."* — **ikili maliyet için tartışmasız doğru.**
🟢 Ama maliyet katsayı taşımaya başladığı an ızgara düz mesafeyi *tahmin
etmiyor*, **Voronoi'nin hiç ifade edemediği başka bir büyüklüğü** ölçüyor.
Karşısına konacak "kesin cevap" ortadan kalkar ⇒ *"ondan kötü"* cümlesi
anlamsızlaşır.

Kullanıcının **üç ayrı, tekrar eden** şikâyeti buraya bağlı:
Çimpe → Saros denizaşırı sirayet (**3 kez** söyledi) · Yuan ayrıklığı ·
pergelle çizilmiş yuvarlak alanlar.

**Doktrin:** `ETKI-ALANI-MATEMATIGI.md` (özellikle 12 Ağustos EK'i) ve
`MESAFE-VE-SURTUNME.md`. **İkisini de oku, işin onların "adım B"sidir.**

---

## ② İŞİN — sırayla, ve BİRİNCİSİ KOD DEĞİL ÖLÇÜM

### İŞ 0 🔴 ÖLÇ — Çimpe/Saros hangi ihtimal? (kod yazmadan ÖNCE)

`denetim/ongoru-B1-maliyet.md` §⓪'da üç ihtimal yazılı ve **çareleri
farklı.** Hangisi doğru, ölç:

```
A  Saros'un kuzeyi Çimpe'nin peteğinden AYRI parça
   ⇒ nöbetçi hattın denizi kestiğini görür, Dijkstra ZATEN karar veriyor
   ⇒ o hâlde başka bir sebep var, ARA
B  Petek körfezin BAŞINI DOLANARAK tek parça hâlinde kapanıyor
   ⇒ `_p.equals(_kvana[_i])` (:1567) "tohumun üstündeki toprak devredilmez"
   ⇒ parça HİÇ SORULMUYOR · B1 bunu ÇÖZMEZ
C  Parça `KV_MIN_KM2 = 200` altında kalıyor ⇒ eleniyor
```

⚠️ **Koordinatör B'yi daha olası buluyor AMA ÖLÇMEDİ ve bunu bilgi diye
sunmuyor.** Ölçümü sen yap, sonucu **bildir**, ve **B çıkarsa iş tarifi
değişir** — o zaman koordinatöre sor, kendi başına genişletme.

### İŞ 1 — nehir tamponunu kur ve ÖLÇ
`veri-kaynak/ne_10m_rivers.geojson` (motorda zaten okunuyor, `:385`).
Izgara hücresi ~5,5 km; nehir bir çizgi. **Hangi tampon genişliğinde kaç
hücre nehir sayılıyor** — ölç ve bildir. Sayı, ① öngörüsünün bandını
(150–600 petek) belirleyecek.

### İŞ 2 — kapsam nöbetçisini aç
```python
# eski
if _kvkp.contains(LineString([_ptl[_i], _rp])): continue
# yeni (fikir; biçimi sen kur)
_hat = LineString([_ptl[_i], _rp])
if _kvkp.contains(_hat) and not _NEHIR_PREP.intersects(_hat): continue
```
⚠️ `_kvkp` hazırlanmış (`prep`) bir geometri; nehir için de `prepare` kullan,
yoksa 2362 × parça çağrısı koşuyu dakikalarca uzatır. **Aşama süresini ölç
ve bildir** — koşu bütçesi 75-85 dk ve bu aşama bugün ~7 sn.

### İŞ 3 — maliyet dizisini kademelendir
Dijkstra adım maliyeti bugün gerçek km (`cos(enlem)` düzeltmeli). Nehir
hücresine girişte **SABİT CEZA** ekle.
🔴 **Katsayıyı UYDURMA.** Bugün elimizde nehrin yalnız **çizgisi** var —
genişlik, debi, kıyı eğimi YOK. ⇒ Ceza tek bir sayıdır ve **kabalıktır**;
kod yorumunda *"KABA — genişlik/debi/eğim verisi yok"* diye **açıkça
damgalanacak.** Değerini seçerken gerekçeni yaz (ör. "bir günlük yürüyüşe
denk" gibi savunulabilir bir çapa), ve **duyarlılığını ölç**: iki farklı
değerde kaç petek değişiyor?

### İŞ 4 — `C13`: İKİ YÖNDE DE SINA
```
GEÇME     ceza = 0 konduğunda çıktı BUGÜNKÜYLE BİT BİT AYNI olmalı
          ⇒ bu, "yeni kod eski davranışı bozmuyor" kanıtıdır
ATEŞLEME  nöbetçinin YENİ dalına ("hat karada ama nehir kesiyor")
          gerçekten girildiğini SAYAÇLA göster · sıfırsa B1 HİÇ KOŞMADI
```
⚠️ Gerçek veride bir dal ateşlenmiyorsa **sahte girdi ya da geçici eşikle
ZORLA ateşle.** Zorlanamayan dal, denetimsiz daldır.

### İŞ 5 — sağlamanın TABANINI koşudan ÖNCE ölç
`data/savaslar.js`'te **41 sefer güzergâhı** var. Bugünkü maliyet
yüzeyinde en ucuz yol o güzergâhlara ne kadar benziyor — **bir taban sayı
üret.** Koşudan sonra aynı ölçüm tekrarlanacak.
📌 Taban ölçülmezse *"benzeşme arttı"* denemez.

---

## ③ YAZMA YETKİSİ

```
🟢 SENİN      arac/uret_petek.py
              oturumlar/MOTOR-MALIYET-ILERLEME.md   (kendi ilerlemen)
              arac/olc_*.py  altında yeni ÖLÇÜM aletleri
🔴 DEĞİL      data/*  ·  arac/denetle*.py  ·  arac/girdi.py  ·  arac/renkler.py
              js/*  ·  css/*  ·  index.html  ·  kök *.md
              denetim/ongoru-B1-maliyet.md  ← ÖNGÖRÜ DOSYASI, DEĞİŞTİRİLEMEZ
```

🔴 **`arac/renkler.py` ve `arac/girdi.py` üretim koşusunda PARMAK İZLENİR**
(`motor_izi`). Koşu sırasında `arac/` altındaki bir `.py`ye dokunmak
**koşuyu öldürür** — 8 Ağustos'ta 83 dakikalık bir koşu böyle öldü.
`data/*` kopyalanır, o güvenlidir; `arac/*` kopyalanmaz.

---

## ④ SENİ BAĞLAYAN KURALLAR

```
CLAUDE.md §11   · replace(...,1) YASAK
                · 🔴 kaçış içeren hiçbir metin BASH'ten geçmez — heredoc DÂHİL.
                  Betiği `Write` ile yaz, `py <yol>` ile koştur. İSTİSNA YOK.
                · commit mesajı da `Write` ile dosyaya yazılır,
                  `git commit -F <dosya>` ile verilir · `-F` YETMEZ,
                  dosyanın NASIL yazıldığı da kuralın içinde
CLAUDE.md §7    · uret_petek.py'yi YALNIZ koordinatör koşturur — SEN KOŞTURMA
CLAUDE.md §3    · altı değişmez · özellikle 1 (sahipsizlik 180) ve 1b (0)
MIMARI §2.9     · İKİ AŞAMA BİRBİRİNİ İPTAL EDEBİLİR. A1 tavanı vakası:
                  tavan toprağı serbest bıraktı, YETİM YÜZ mantığı geri verdi.
                  🔴 Senin değişikliğin de yetim yüz / enklav doldurma /
                  ada kuralı ile çakışabilir — HER BİRİNİ AYRI SOR.
```

**Yazılı dersler, ihlal etme:**
- *"Bir betiğin 'yaptım' demesi kanıt değildir — YAZDIKTAN SONRA GERİ OKU"*
- *"Ölçüm doğru, çıkarım yanlış"* — rapora **iki ayrı satır** yaz:
  `ölçtüğüm şu` · `bundan çıkardığım şu`
- *"Ölçmediğini `ölçmedim` diye yaz."* Bulamadığını `bulunamadı` diye yaz.

---

## ⑤ HABERLEŞME — 🔴 ÖNCE KANAL

**Cevabın kendi pencerene YAZILMAZ. Koordinatör ekranını GÖRMEZ.**
```
mcp__ccd_session_mgmt__send_message
    session_id : sana bu brifingi GÖNDEREN oturumun kimliği
                 (mesaj başındaki "From <ad>" etiketi; yoksa
                  mcp__ccd_session_mgmt__list_sessions ile ara)
    message    : cevabın
```
Pencerene *"iş üstündeyim"* yazmak, **cevap vermemekle aynı şeydir.**

```
AÇILINCA HEMEN   "açıldım, brifingi okudum, uret_petek.py bende"
                 (bu olmadan koordinatör dosyayı ikinci oturuma verebilir
                  ya da parmak izli dosya sendeyken koşu başlatabilir)
KALEM KALEM      her iş bitince HEMEN — biriktirme
"NE OLDU İŞ?"    iş sürüyor olsa bile HEMEN üç parça:
                 "İŞ ÜSTÜNDEYİM · şu aşamadayım · ~şu kadar kaldı"
AKSAKLIK         BEKLETMEDEN: İŞ 0 "B" çıkarsa · süre tahminini aşarsa ·
                 şartname yanlış çıkarsa · beklenenden ÇOK farklı sayı ·
                 başka oturumun dosyası gerekirse
```

---

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla

Şunların **hepsi** elinde olunca bitmiştir:
```
① İŞ 0'ın cevabı: Çimpe/Saros A mı B mi C mi          — ölçülmüş
② nehir tamponu: kaç ızgara hücresi nehir              — sayı
③ nöbetçinin yeni dalı kaç kez ateşledi                — sayı, ve >0
④ C13 GEÇME: ceza=0'da çıktı bugünküyle aynı mı        — bit bit
⑤ C13 ATEŞLEME: her yeni dal zorlanarak sınandı mı     — dal dal
⑥ aşama süresi: +kaç saniye                            — sayı
⑦ sefer güzergâhı benzeşmesinin TABANI                 — sayı
⑧ seçilen ceza katsayısı ve GEREKÇESİ + duyarlılığı    — iki değerde ölçüm
```

**Teslim raporu SAYIYLA ve MESAJLA gider.** *"Bitirdim"* değil:
*"İŞ 0 → B çıktı · tampon 0,03° → 4.118 hücre · yeni dal 261 kez ateşledi ·
GEÇME bit bit aynı · ATEŞLEME 3/3 · aşama +14 sn · taban benzeşme 0,42"*

🔴 **Koşuyu SEN başlatmayacaksın.** Kod hazır olduğunda *"koşuya hazır"*
de ve **dur.** Öngörü dosyası (`denetim/ongoru-B1-maliyet.md`) koşudan
önce yazıldı ve **değiştirilemez**; koşudan sonra kalem kalem ölçülecek.

**Bulamadığını `bulunamadı` diye yaz — negatif sonuç da sonuçtur.**
