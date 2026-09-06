# AVRUPA — 1923 SINIR DENETİMİ

```
AD        AVRUPA
MODEL     Opus
DİZİN     C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
ClaudEmre HAYIR — İŞÇİ oturumsun, koordinatör 1.MURAT HÜDAVENDİGAR
```
> Okuma sıran: **① `CLAUDE.md` · ② `oturumlar/YONTEM-1923-SINIR.md` · ③ bu dosya.**

## ① İŞ
`1923-10-28` kesitinde **Batı-Orta Avrupa (132) + Kuzey Avrupa (159) +
İberya (103) + İtalya (63) = 457 yerleşimin** sahiplik kimliklerini
kaynağa karşı denetle. **VERİ YAZMA** — koşu 7b sürüyor.

## ② DOSYALARIN (`§7`)
```
🟢 denetim/yer_yama_avrupa_1923.js · denetim/AVRUPA-*.md
   denetim/KRONOLOJI-AVRUPA-*.json · oturumlar/AVRUPA-1923.md
🔴 data/* · arac/* · js/* · kök *.md · başka oturumun dosyaları
```

## ③ TABAN — ölçüt YAZILI
```
const {bolge, SAHIP} = require('./ARAC-BOLGE-KUTU-0906.js')
BATI-ORTA-AVRUPA 132 · KUZEY-AVRUPA 159 · IBERYA 103 · ITALYA 63 = 457
BENZERSİZ kimlik 26   (alt bölge toplamı 35 — o ŞİŞİK, kimlikler bölünmez)
```
🟢 Cascade ⇒ örtüşme YOK, boşluk YOK. **İlk işin kendin ölçmek** (`B10`).

## ④ 🔴 CASCADE'İN İKİ SÜRPRİZİ — kusur değil, SEÇİM. Dokunma.
```
① MAĞRİB KIYISI "ITALYA" KOVASINA DÜŞÜYOR.
   Tunus (36,8K · 10,2D) Avrupa kutusunun içinde ve lon 5-20 bandında
   ⇒ ITALYA ⇒ senin survey'in. Ölçüldü: 26 örtülü nokta sende görünüyor.
   🔴 AMA TUNUS ORTADOĞU'NUN KALEMİ ve o ölçtü bile. DOKUNMA.
   KURAL: cascade SURVEY'i yönetir, KİMLİK kalemlerini DEĞİL.
② `avusturya` hayaletinin Viyana ayağı sende görünüyor (Graz BALKAN'da).
   🔴 O kalem BALKAN'ın — ilk o ölçtü. DOKUNMA.
```
⇒ Bir kimlik senin kutunda görünüyor diye senin değildir. Şüphelenirsen
**tahtadan sor**, iki oturum aynı zincire iki farklı gün yazmasın.

## ⑤ ÖLÇÜLMÜŞ AÇIK KALEMLER
```
① 🔴 HAYALET · piombino  1 nokta · künye t:1548-01-01 · 375,8 YIL FAZLA
   Bütün dünyanın EN BÜYÜK tek anakronizmi.
   ⚠️ AMA ÖLÇEK BİR ÖNCELDİR, HÜKÜM DEĞİL (`§3.5.0`): `sardinya` da
     439 yıl çıkmıştı ve MEŞRU olduğu ölçüldü (ad/unvan ömrü ≠ tasarruf
     sürekliliği). Piombino'yu da ÖLÇ, büyüklüğüne bakıp hüküm verme.
② 🟡 4d · isvec 3 nokta (Umeå · Luleå · Jukkasjärvi) 242,4 yıl
   BALKAN bunu ölçtü ve "kutu artefaktı, KUZEY AVRUPA'nın işi" diye
   sana bıraktı. Muhtemelen `§3.5.0 ③` sınıfı (ikisi de doğru, farklı
   şey ölçüyor) — ama ÖLÇ.
③ D SINIFI · `ingiltere` 420 · `fransa-cumhuriyet` 278 · `portekiz` 60 ·
   `belcika` 59 · `ispanya` 47 — bunların METROPOL noktaları sende,
   SÖMÜRGE noktaları başka oturumlarda. Senin işin metropolün KENDİ
   sınırları (Ren · Alpler · Pireneler · İskandinav).
④ `irlanda-serbest-devlet` 10 nokta · künye 1922-12-06 → 1923-10-29
   ⇒ pencere ÇOK dar, `4d` riski yüksek — ölç.
⑤ GERİ KALAN ~440 noktanın kaynak denetimi
```

## ⑥ 🔴 ÖRTÜLÜ KAYIT UYARISI — bugün ORTADOĞU bu tuzağa düştü
Bir noktanın 1923'te **ne çizdiğini** sormak için `d:` → `v:` → `s:` →
**`isg:`** DÖRDÜ BİRDEN okunur. ORTADOĞU yalnız `v:`ye bakıp *"Tunus 42
yıl anakronizm"* dedi; `isg:` örtüsü **36/36 zaten oradaydı** ve doğru
günü taşıyordu. Kendi çürüttü.
📌 Ve koordinatörün 1923 tabanı da aynı körlüğü taşıyordu — ölçüldü:
**90 nokta örtülü (%2,5)**, 26'sı senin kovanda.

## ⑦ HABERLEŞME · DAMGALAR · COMMIT
→ `YONTEM-1923-SINIR.md` §④ ⑥ ⑦.
🔴 **Cevabını kendi pencerene yazmak = hiç cevap vermemek.**

---
## İLERLEME NOTU


### 2026-09-06/07 · TUR 1 — taban + üç kalem

**TABAN KENDİM ÖLÇTÜM (B10), BİREBİR TUTTU.** `denetim/ARAC-AVRUPA-TABAN-0906.js`
(bölge ölçütünü taklit etmedim, `ARAC-BOLGE-KUTU-0906.js`ten require ettim):
`132 + 159 + 103 + 63 = 457` · benzersiz kimlik **26**.
`isg:` ile ikinci kez ölçtüm: 26 örtülü nokta (Tunus kümesi) — koordinatörün
sayısı tuttu. İş yüküm **24 kimlik / 430 nokta** (OSMANLI-tabi ve avusturya
başkasının kalemi).

**SİSTEMATİK TARAMA** (`ARAC-AVRUPA-TARAMA-0906.js`):
A hayalet 2 · B erken 29 · C künyesiz **0** · D renksiz **0** · E yalnız-gün 1.

**KALEM ① piombino — İKİ kusur üst üste, çareleri TERS (§3.5.0).**
375,8 yılın 267,4'ü *künye dar* (Treccani: 1548 «sia pure temporaneamente»,
1557 iade), 108,4'ü *veri fazla* (1815 Viyana Kongresi ⇒ Toskana).
`sardinya` emsali sınandı ve ÇÜRÜDÜ. Ve yama 5 Eylül'de SİLİNMİŞ iki dönemi
(`toskana`/`italya`) geri getiriyor.

**KALEM ② Dublin — ŞARTNAMEDE YOKTU, kutu ölçümü buldu.**
1923'te `ingiltere` boyanıyor, oysa İrlanda Serbest Devleti'nin başkenti.
Kanıt kaydın kendi içinde: `kd:` 1922-12-06'yı biliyor, `s:` bilmiyor.
Kaçma sebebi: Dublin `yerlesimler.js`te, öteki 10 nokta `yerlesimler_avrupa.js`te.

**KALEM ③ İspanya — 9 nokta, öncül taçlar.**
`kastilya`/`aragon`/`granada` künyeleri VAR ve `ispanya`nın `f:`siyle gün gün
bitişik; emsal 40 nokta. Madrid · Sevilla · Barselona konvansiyonun dışındaydı.

**YAMA:** `denetim/yer_yama_avrupa_1923.js` — **11 kayıt**, CANLI VERİDEN
ÜRETİLDİ. C13: geçme 🟢 · ateşleme 11/11 🟢 · ön koşul 1/11 (Elba, beklenen).
**ÖN KOŞUL:** `piombino` künyesi `t:` 1548 -> 1815-06-09
(`ONERI-KUNYE-DUZELTME-AVRUPA-0906.json`, adı KASTEN `ONERI-`).
**ÇEKİRDEK BORCU:** `1922-12-06` (`KRONOLOJI-AVRUPA-0906.json`).

**KOORDİNATÖRE SORULAN, CEVAP BEKLENEN:**
1. İsveç 42 nokta (şartname 3 diyordu — 14 kat) — yeni `2s` günü doğuruyor, kapsam kararı
2. `not:` alanı — 17 künye beyanı sessizce düşüyor (`_kunye_uygula.py:136`)
3. Şefşâven — cascade onu benim kovama düşürüyor, kimlik ORTADOĞU'nun

**KENDİ KUSURLARIM (kayda geçiyor):** aletim iki yanlış pozitif üretti
(`oncesi` kipinde muafiyet yönü ters ⇒ 423 sahte KAYBOLAN; `ceneviz`/`sardinya`
paylaşılan boya anahtarı olduğu hâlde «künye yok» dedi). İkisi de düzeltildi;
sınav artık yamanın GETİRDİĞİ kusuru mevcut olandan ayırıyor.
