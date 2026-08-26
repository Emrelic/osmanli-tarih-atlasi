# DEĞİŞMEZ 7 — ENKLAV SORGUSU

```
AD        DEĞİŞMEZ 7 ENKLAV
MODEL     Opus
DİZİN     C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
ŞARTNAME  bu dosya
ClaudEmre koordinatör ORHANGAZİ · tahta: py arac/tahta.py
```

## ① İŞ — Emre'nin kendi cümlesi

> *"Eğer bir toprak kazancı ana parçadan ada gibi enklav şekilde kopuk ise
> veya yarımada gibi olup arada kocaman bir koridor var ise, sistem ana
> parça ile bu kazanılan yeni topraklar arasındaki toprakların aslında
> fethedilip fethedilmediğini **sorgulaması** lazım."*

Emre bunun `Değişmez 7` olarak yazılmasını onayladı — yani **bu partinin
düzeltmesi değil, KALICI bir denetim maddesi.**

## ② ZATEN NE VAR — sıfırdan başlamıyorsun, ÖLÇTÜM

```
arac/uret_petek.py:1341   _ENKLAV = frozenset(...)  ← `s:` içinde `enklav:` alanı
arac/uret_petek.py:1352   "enklav: N nokta yetim yüz EMMEYECEK"
data/yer_yama_enklav.js   36 kayıt `enklav:true` — HAZIR, henüz BAĞLANMADI
```

🔴 **Ama bu bir BEYAN, senin yazacağın SORGU.** Fark hayatî:
```
VAR   enklav BEYANI   "burası bilerek adadır, emme"   → emilmeyi ENGELLER
YOK   enklav SORGUSU  "koridor fethedilmiş mi?"       → EKSİK VERİYİ bulur
```
📌 Ve bu, `CLAUDE.md §2` emilme dersinin **ters yönü**: orada noktasız bölge
yanlış sahibe emiliyordu; burada **kopuk bir gövde**, aradaki fethin veriye
hiç yazılmadığını ele veriyor.

## ③ VAKALAR — Emre'nin verdiği, paketlerde görselli

```
İRAN HATTI (Tebriz seferi)  Hoy · Merend · Selmas · Culfa · Şerur · Maku
BALKAN                      Belgrad · Vidin · Niş
```
Bunlar **örnek**, kapsam değil. Denetim bütün külliyatı taramalı.

## ④ ÖLÇÜT — ve bunu SEN tasarlayacaksın

Kaba tarif: bir devletin belli bir günde sahip olduğu gövde **kopuk
parçalara** ayrılıyorsa, parçalar arasındaki mesafe ve aradaki toprağın
sahibi sorgulanır. Ama eşiği, "meşru enklav" muafiyetini ve gürültü
seviyesini **ölçerek** sen belirle.

⚠️ **MEŞRU ENKLAV VARDIR ve elenmeli** — yoksa denetim gürültüden okunmaz:
ada fetihleri (Girit · Kıbrıs · Rodos) · deniz aşırı kaleler · `enklav:true`
beyanlı 36 kayıt · `kasitli_bosluk` noktaları (245 tane).

## ⑤ SENİN DOSYALARIN — başkasına yazma

```
🟢 SENİN     arac/denetle.py  (Değişmez 7 buraya)
             denetim/BULGU-ENKLAV-SORGU.md
🔴 DEĞİL     arac/uret_petek.py · arac/renkler.py · arac/girdi.py
             data/*.js · js/* · kök *.md · kutu/giden/*/CEVAP.json
```
📌 `uret_petek.py` sana kapalı: motor **veri üretir**, denetim **soru sorar**.
Bulgun motor değişikliği gerektiriyorsa ÖNER, uygulama — bana yaz.

## ⑥ İKİ YÖNDE DE SINA — yoksa "çalışıyor" sayılmaz

```
GEÇME      kusur yokken TEMİZ diyor mu
ATEŞLEME   HER kusur dalı için AYRI AYRI ötüyor mu
ÇIKTI      ötme ANINDA yazdıracağı metin, cp1254 konsolda basılabiliyor mu
```
🔴 **ÜÇÜNCÜSÜNÜ ATLAMA.** 25 Ağustos'ta üç ayrı nöbetçi bu dalda sınandı,
biri öldü (`UnicodeEncodeError`, kilit emojisi) ve **sessizce** öldü —
dışarıdan zaman aşımı gibi göründü. Nöbetçiyi ALT SÜREÇ olarak, gerçek
konsolda, en zorlu değerle koştur.

## ⑦ HABERLEŞME — kanal TAHTA, özel kanal DEĞİL

```bash
py arac/tahta.py yaz --kim "DEĞİŞMEZ 7 ENKLAV" --kime "KOORDINATOR" --mesaj-dosya <yol>
```
⚠️ Metni `Write` ile dosyaya yaz, bash ona **hiç dokunmasın**, sonra
`--mesaj-dosya`. Backtick/emoji kabuktan geçerse sessizce silinir.

```
AÇILINCA     "açıldım, brifingi okudum, şu dosyalar bende"
KALEM KALEM  bir iş bitince HEMEN — biriktirme
SORU GELİNCE iş sürüyor olsa bile: "iş üstündeyim · şu aşamada · ~şu kadar kaldı"
BİTİNCE      SAYIYLA: "şu kadar kopuk gövde, şu kadarı meşru, şu kadarı KUSUR"
AKSAKLIK     BEKLETMEDEN bildir (§7.1⑥)
```
**Ölçmediğini `ölçmedim` diye yaz.** Bulamadığını `bulunamadı` diye yaz.
İkisi de sonuçtur ve uydurmaktan kat kat değerlidir.

## ⑧ KOŞU DURUMU

🟢 Şu an koşu YOK. `arac/denetle.py` serbest. Ama koşu bu iş bitince
başlayacak — yani **sen darboğazdasın**, hızlı ve doğru bitir.
