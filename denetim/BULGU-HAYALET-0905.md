# BULGU — HAYALET DEVLET NÖBETÇİSİ · `denetim/ARAC-HAYALET-0905.py`

> Oturum **NEHİR SÜRTÜNME** · sevk `1.MURAT` M-2736 · 5 Eylül 2026
> 🔴 Düzeltme yapılmadı. Alet `denetim/` altında doğdu; `arac/`a taşıma
> kararı koordinatörün. Koşu 5b canlı — motora ve `data/`ya dokunulmadı.

---

## ⓪ SEVKİN ÖNCÜLÜ KISMEN ÇÜRÜDÜ — ve düzeltme işi DEĞİŞTİRDİ

Sevk: *"`§3.5` bunu «dördüncü bir değişmez olarak araca girecek» diye
yazılı bıraktı — **hiç girmedi**."*

🔴 **GİRMİŞ.** `arac/denetle.py`de `Değişmez 4` **var ve çalışıyor**
(2 Eylül'de kendim ölçmüştüm: *"12 hayalet dönem, beklenen 8"*).

🟢 **AMA EVRENİ DAR — ve asıl bulgu bu:**
```
denetle.py:1782    for p in (y.get("s") or []):     ← YALNIZ `s:`
```
Ölçtüm: **`isg:` alanı da KİMLİK TAŞIYOR**
```
isg:[{f:"1737-07-01", t:"1737-10-01", d:"avusturya", kaynak:"nis"}]
```
⇒ **İşgal dönemleri künye penceresine karşı HİÇ SINANMIYOR.**
📌 `CLAUDE.md §11` — *"denetim var ≠ o soruyu soruyor"*: burada soru
**doğru** soruluyor ama **yalnız bir alanda**.

⇒ Bu yüzden alet `denetle.py`nin **yerine geçmiyor**, **kör noktasını
ölçüyor**.

---

## ① ÖLÇÜM — 4 alan · 14.092 dönem

```
girdi.GIRDI_DOSYALARI   77 dosya      ← ELLE LİSTE YOK, sabit ÇAĞRILDI
girdi.yukle()           3.805 yerleşim
girdi.oku_devletler()   591 künye
taranan dönem          14.092 · kimlik TAŞIYAN 12.438
alanlar                 d · s · v · isg
```

```
🔴 TAM DIŞARIDA   11    dönem künye penceresiyle HİÇ kesişmiyor
🟡 TAŞAN         267    kısmen dışarıda (tolerans 400 gün)
⚪ SINIR İŞARETİ 314    pencere ucu — İHLAL SAYILMADI
⚠️ KÜNYESİZ      (Fetret kimlikleri: isa-celebi · mehmed-celebi ·
                  suleyman-celebi — künyede yok)
```

### 🔴🔴 ALAN BAZLI — KÖR NOKTA ÖLÇÜLDÜ
```
d       0     (kimlik taşımaz — Osmanlı örtük)
s     271     ← denetle.py BUNU TARIYOR
v       0     (kimlik taşımaz)
isg     7     ← denetle.py'nin YAPISAL OLARAK GÖREMEDİĞİ KOVA
```

---

## ② KÖR NOKTADAKİ YEDİ KAYIT — hepsi TEK VAKA, ve düzeltmesi KESİN

```
Kahire · İskenderiye · Dimyat · Asyut · Süveyş · Sina güneyi · Reşîd
   isg:  1798-07-01 → 1801-10-09   d:"fransa"
   künye fransa:  987-01-01 → 1792-09-22
   ⇒ dönem künyenin ölümünden 5,8 YIL SONRA başlıyor
```

🟢 **VE DOĞRU KÜNYE ZATEN VAR — ölçtüm:**
```
devletler.js:789   fransa              987-01-01  → 1792-09-22   "Fransa Krallığı"
devletler.js:805   fransa-cumhuriyet   1792-09-22 → 1923-10-29   "Fransa (1792 Sonrası)"
```
⇒ Mısır seferi (1798-1801) **Cumhuriyet/Napolyon** Fransası'nın işidir;
kayıtlar **Krallık** künyesini gösteriyor.
**DÜZELTME:** yedi `isg:` kaydında `d:"fransa"` → `d:"fransa-cumhuriyet"`.
Tarihlere **dokunulmaz**; yalnız kimlik değişir.
🔴 **UYGULAMADIM** — `data/*.js` yasak ve karar künye sahibinin.

---

## ③ EN BÜYÜK 20 — `TAM DIŞARIDA` + `TAŞAN` başı

| yerleşim | alan | kimlik | dönem | künye | yıl |
|---|---|---|---|---|---|
| Dihistan ovası | `s` | iran | 1507→1510 | 1925→2026 | **415,0** |
| Kızılarvat | `s` | iran | 1507→1510 | 1925→2026 | **415,0** |
| Kahire ⋯ Reşîd (7 kayıt) | `isg` | fransa | 1798→1801 | 987→1792 | 5,8 |
| Tenochtitlan | `s` | aztek-imparatorlugu | 1325→1428 | 1428→1521 | 0,0 |
| Tlacopan | `s` | aztek-imparatorlugu | 1400→1428 | 1428→1521 | 0,0 |
| Kiev | `s` | lehistan | 1362→1667 | 1569→1795 | 207,5 |
| Poltava · Baturin · Lubnı | `s` | lehistan | 1362→1654 | 1569→1795 | 207,5 |
| Pisa | `s` | toskana | 1406→1861 | 1532→1860 | 125,2 |
| Gdansk · Elbing · Toruń | `s` | lehistan | 1466→1793 | 1569→1795 | 102,7 |
| Surakarta | `s` | mataram-sultanligi | 1745→1811 | 1587→1755 | 56,5 |
| Sirhind | `s` | sih-imparatorlugu | 1764→1849 | 1801→1849 | 37,2 |
| Lahor · Amritsar · Râvalpindi ⋯ | `s` | sih-imparatorlugu | 1765→1849 | 1801→1849 | 36,0 |
| Nagpûr | `s` | maratha | 1743→1853 | 1674→1818 | 35,5 |
| Satâra | `s` | maratha | 1674→1848 | 1674→1818 | 29,8 |
| Dunhuang | `s` | kuzey-yuan | 1524→1720 | 1368→1691 | 28,6 |

🟡 **İki Aztek kaydı «0,0 yıl»** — dönem künyenin doğumundan *hemen önce*
bitiyor (1325→1428 vs künye 1428→). Tolerans dışı değil, **kesişim yok**.
Bu bir *"imparatorluk öncesi şehir devleti"* vakası olabilir — Tenochtitlan
1325'te kuruldu, Üçlü İttifak 1428'de. ⇒ Muhtemelen **künye taneciği**
sorunu, hayalet değil. **ÖLÇMEDİM.**

---

## ④ 🔴 KENDİ KOVA KURALIMIN KUSURU — ve `11` bir ALT SINIR

Kuralım: *"dönemin ya da künyenin ucu `1281-01-01` / `1923-10-29` ise
⚪ SINIR İŞARETİ kovasına koy, ihlal sayma."*

**Bu kural FAZLA GENİŞ ve ölçüm onu ele veriyor.** ⚪ kovasının başında:
```
Tarki (Tarku)   s  iran     1281-01-01→1501-07-01   künye 1925→2026   424,4 yıl
Kiş · Derbend · Hürmüz · Kişm            aynı desen                   415-418 yıl
Kamaniçe · Krakov · Varşova · Vilnius    lehistan  1281→…  künye 1569→ 288,5 yıl
```
⇒ Bunlar **gerçek hayalet**: dönem künye penceresiyle **hiç kesişmiyor**,
ve `f:1281-01-01` olması bunu **mazur göstermiyor**. Kuralım onları
sessizce ihlal dışına çıkardı.

**DOĞRU KURAL (öneri):** ⚪ kovası yalnız **tek kusuru pencere ucu olan**
vakayı yutmalı — yani dönem künyeyle **kesişiyor** ama ucu pencereye
dayanıyorsa. **Hiç kesişmeyen** bir dönem, ucu nerede olursa olsun 🔴'dır.
```
bugünkü ölçüm   🔴 11   ⚪ 314
düzeltilmiş kuralla   🔴 ARTACAK · ⚪ AZALACAK    ← YÖNÜ belli, MİKTARI ÖLÇMEDİM
```
⇒ **`11` bir ALT SINIRDIR.** Aleti düzeltmeden sayıyı «11» diye
raporlamak yanıltıcı olurdu; **bildiriyorum.**
📌 `§11`: *bir aletin çıktısını kabul ederken sorulacak soru "sayı doğru
mu" değil, "bu sayıya nasıl vardı"*. Kendi aletime sordum.

---

## ⑤ C13 — DÖRT AYAK, hepsi koşuldu

```
① GEÇME      temiz kayıtta SUSUYOR → tam 0 · taşan 0 · sınır 0 · künyesiz 0   ✓
② ATEŞLEME   (a) TAM DIŞARIDA           → 1  ✓
             (b) TAŞAN                  → 1  ✓
             (c) KÜNYESİZ, `isg:` DALINDAN → 1  ✓
             (d) SINIR İŞARETİ ayrı kovada → sınır 1 · ihlal 0  ✓
             (e) 🔴 3 HANELİ YIL (962) yanlış ötmüyor → ihlal 0  ✓
③ GİRDİ      gerçek dosyalardan: girdi.GIRDI_DOSYALARI (77) → yukle() (3.805)
④ ÇIKTI      oku_devletler() dönüşü ÖLÇÜLDÜ ve BASILDI:
             "list · uzunluk 591 · öğe dict · anahtarlar [ad, baskent,
              bolge, f, harita, id, kaynak, kronoloji, ozet]"
```
🔴 **(e) dalı özellikle yazıldı.** Bu projede 18 künye 3 haneli yıl taşıyor
(`bizans 330` · `venedik 697` · `almanya 962` …) ve `"1281-01-01" <
"962-02-02"` **dizgi olarak True** döner — 5 Eylül'de kendi aletimde
ölçtüğüm tuzak. Alet `datetime.date` kullanıyor ve sınav bunu **zorluyor**.

---

## ÖLÇMEDİKLERİM

```
ÖLÇMEDİM   Düzeltilmiş kova kuralıyla 🔴'nin kaça çıkacağını (yönü belli,
           miktarı değil)
ÖLÇMEDİM   İki Aztek kaydının künye taneciği mi hayalet mi olduğunu
ÖLÇMEDİM   267 TAŞAN kaydın kaçının MEŞRU bölgesel gecikme olduğunu —
           `§3.5` aylar mertebesini meşru sayıyor, tolerans 400 gün ama
           listenin başı 200+ YIL; ortasını AÇMADIM
ÖLÇMEDİM   KÜNYESİZ kimliklerin tam sayısını (Fetret kimlikleri görüldü,
           sayı basılmadı — aletin çıktısı kesildi)
OKUMADIM   `§3.5` tablosunun bugünkü hâlini (Batnoz · İbrim · Sevâkin
           satırları) — sevk *"bayat olabilir"* dedi, ben de DEVRALMADIM
           ve ölçümümü tablodan bağımsız kurdum
```

---

## TESLİM — sayıyla

```
alet        denetim/ARAC-HAYALET-0905.py · C13 dört ayak GEÇTİ (5 ateşleme dalı)
öncül       sevkin "hiç girmedi"i ÇÜRÜDÜ — girmiş, ama EVRENİ `s:` ile sınırlı
ölçüm       14.092 dönem · 12.438 kimlikli · 4 alan
            🔴 11 tam dışarıda · 🟡 267 taşan · ⚪ 314 sınır işareti
KÖR NOKTA   isg: 7 ihlal — denetle.py'nin YAPISAL olarak göremediği kova
            7'sinin 7'si TEK VAKA: Mısır'ın Fransız işgali 1798-1801
            d:"fransa" (künye 1792'de bitiyor) → doğrusu "fransa-cumhuriyet"
            ve o künye ZATEN VAR (devletler.js:805)
öz-ihbar    kova kuralım FAZLA GENİŞ; 11 bir ALT SINIR
```
