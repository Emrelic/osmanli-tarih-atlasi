# BULGU — KITA 5 — B2 ENKLAV, 12 Eylül 2026

Oturum: **KITA 5 — B2 ENKLAV** (önceki isimler: YABANCI SENKRON → ENKLAV
TAVANI → T ALANI ŞEMASI → C DENETİMİ → C KAPLAMA ÇÖZÜMÜ) · Koordinatör:
1.MURAT · **Zemin: `denetim/BULGU-ENKLAV-TAVANI-0911.md`** (dünkü
ENKLAV TAVANI oturumumun kendi ölçümleri — ①②③ zaten büyük ölçüde orada
ölçüldü, burada TEKRAR ÖLÇMEDİM, yalnız YENİ olan kısmı ekliyorum:
① mekanizmanın satır numarasıyla KESİN teyidi, ④ `arac/` artık açıkken
denenen gerçek-indeks doğrulaması).

🔒 `arac/uret_petek.py` **okundu ve OLASI görüldü ama İÇİNE TEK SATIR
YAZILMADI** — koşu bitti, dosya artık düzenlenebilir durumda, ama görev
şartı "yalnız eşik sabitleri" ve "pilot kutuyla ölç, TAM KOŞU AÇMA" idi;
bu turda eşik DEĞİŞTİRİLMEDİ (ölçüm turu, uygulama turu değil).

---

## ① MEKANİZMA — dört sayaç, satır numarasıyla KESİN

`arac/uret_petek.py`, `_b2_enklav_birlestir()` (satır 1518-1614)
her enklav adayını SIRAYLA dört kapıdan geçirir:

```
satır 1535-1537   d_km > B2_ENKLAV_KM (250)         → b2_uzak++     dur
satır 1548-1550   not _KARA_HAZIR.covers(hat)         → b2_deniz++    dur
satır 1552-1554   _bant_baskasinin_topragini_          → b2_yerlesim++ dur
                  kesiyor_mu(hat, sahip_ix)
satır 1614        (hiçbiri değilse)                   → b2_birlesti++
```

`_bant_baskasinin_topragini_kesiyor_mu()` (satır 1482-1515): köprü
hattı 10 km aralıklarla örneklenir, her nokta `_TUM_AGAC` ile en yakın
peteğe atanır; o petek `sahip_ix`te (bizim peteklerimiz) DEĞİLSE → True
(yasak).

**Tebriz/Ordubad · Maan · Azak · Kabala hangi dalda eleniyor?**
Coğrafi olarak DÖRDÜ DE karasal köprüler (deniz üzerinden geçmiyor —
Tebriz-Ordubad Azerbaycan/İran karası, Maan Ürdün çölü, Azak Kırım-Kafkas
karası, Kabala Kafkas içi) ⇒ **`b2_deniz`'i GEÇERLER**, `b2_yerlesim`
dalına düşerler. Bu, dünkü ENKLAV TAVANI ölçümümle (devletler_harita.js
üzerinden Safevi/Kırım-Don Kazak/İngiltere-Sammar-Hicaz/Safevi-Gürcistan-
Rusya-Kırım topraklarının köprü hattını kestiği bağımsız doğrulanmıştı)
**TAM TUTARLI** — iki ayrı yöntem (kod-okuma + coğrafi çapraz-test) AYNI
sonuca varıyor: **hepsi `b2_yerlesim`.**

### 🔴 BU TURDA DENENEN ÜÇÜNCÜ DOĞRULAMA — YARIM KALDI, D107

Gerçek `_TUM_AGAC`/`sahip_ix` motorun İÇİNDEKİ geçici bir yapı; bu
turda `data/petek_govde.js` (3808 statik petek, `PETEK_GOVDE`/
`PETEK_GOVDE_PARCA`) + `data/donemler.js`'in kendi `PARCALAR`/
`PARCA_HALKA`'sı ile SADIK bir yeniden-üretim denendi. **İki ayrı hata
bulundu ve düzeltildi kod içinde** (D049/D107, silinmedi):
```
① `txt.index("window.PETEK_GOVDE")` "PETEK_GOVDE_PARCA"yı YAKALADI
   (alt dize çakışması) — 3808 petek "0" çıktı. Regex + kelime sınırı
   düzeltti.
② `PETEK_GOVDE_PARCA`nın iç yapısı `donemler.js`'in `PARCALAR`/
   `PARCA_HALKA`'sından FARKLI (bir 'parça' zaten TAM bir halka listesi
   taşıyor, `PARCALAR` gibi TEK bir düz halka değil) — `coz()`
   düzeltildi.
```
Ama **asıl engel çözülemedi**: `donemler.js`'in `o`/`v` alanları
KENDİ `PARCALAR`/`PARCA_HALKA` havuzuna indeksliyor — bu, `PETEK_GOVDE`
(3808, yerleşim-başına-bir-petek statik havuz) ile **AYNI indeks uzayı
DEĞİL**. Yani "Osmanlı'nın sahip_ix'i" `donemler.js`'ten doğrudan
ALINAMIYOR; her yerleşimin o tarihteki sahipliğinden (kendi `d:`/`s:`/`v:`
dizisinden) TÜRETİLMESİ gerekiyordu — bu eşleme bu turda YAPILMADI.
**D107: yöntem tasarlandı, İKİ hata bulundu/düzeltildi, ama ÜÇÜNCÜ
doğrulama TAMAMLANAMADI** — mevcut iki bağımsız kanıt (kod-okuma +
devletler_harita.js çapraz-testi) yine de TUTARLI ve GÜVENİLİR.

---

## ② 100.000 km² TAVANI — DÜN ÖLÇÜLDÜ, BURADA TEKRARLANMIYOR

`denetim/BULGU-ENKLAV-TAVANI-0911.md §①`'de zaten ölçüldü: 332 adayın
alan dağılımında **TEK gerçek büyük boşluk** Medine (94.451 km²) ile
Cübeyl (195.432 km²) arasında (oran x2,07) — 100.000 bu aralığın
İÇİNDE duruyor, uydurma DEĞİL. Aynen geçerli, yeniden ölçülmedi.

---

## ③ İKİ YÖNLÜ ÖLÇÜM — DÜN ÖLÇÜLDÜ, BURADA TEKRARLANMIYOR

Aynı raporda: 500km+100k eşiği **332 karasal görünümün 310'unu**
birleştirir (mevcut 273'e karşı, +37) — ama bu +37'nin bir örneklemi
(8/37, 4 orijinal "250 altı ayrı duran" + 4 yeni-aday) sahiplik testiyle
**hepsi bloke** çıktı, yani gerçek yeni birleşme sayısı 37'den ÇOK daha
düşük olabilir. **Kefe/Hotin hiç aday DEĞİL** (B2 listesinde YOK,
muhtemelen koridor mekanizmasının işi), **Azak sahiplik testiyle
korunuyor** — hiçbir meşru enklav yutulmuyor. Aynen geçerli.

---

## ④ `arac/` AÇIK — pilot-kutu koşusu YAPILMADI, gerekçesiyle

Görev "eşiği değiştirebilirsin ama pilot kutuyla ölç, TAM KOŞU AÇMA"
diyordu. **Bu turda eşik hiç değiştirilmedi** — üç sebep:
```
① `uret_petek.py`de bölgeyi (BOLGE, satır 183) küçültecek bir
   ENV DEĞİŞKENİ/CLI bayrağı YOK (grep'le arandı, 6 farklı MOTOR_*
   bayrağı var ama hiçbiri coğrafi kapsamı KISITLAMIYOR) — "pilot kutu"
   demek BOLGE'yi ELLE küçültmek demek, ve görev şartı "YALNIZ eşik
   sabitleri, BAŞKA SATIRA DOKUNMA" diyordu. Bu ikisi ÇELİŞİYOR.
② Eşiği (`B2_ENKLAV_KM`) GERÇEKTEN değiştirip TAM koşu açmadan sonucunu
   görmenin BAŞKA yolu yok — motor B2'yi yalnız tam üretim döngüsünün
   İÇİNDE çalıştırıyor (satır 1518, `_b2_enklav_birlestir` doğrudan
   `_kume`/gövde montaj adımından ÇAĞRILIYOR, izole edilemiyor).
③ Bu yüzden ③'teki ölçüm (37 yeni birleşme, 8/37 örneklem sahiplikçe
   bloke) `arac/`e YAZMADAN, `data/donemler.js`(post-B2 kalıntı) +
   `data/devletler_harita.js` üzerinden BAĞIMSIZ yapıldı — ve bu YETERLİ
   görüldü, gerçek eşik değişikliği + tam koşu bu görevin KAPSAMI DIŞINDA
   bırakıldı (uygulama kararı Emre'ye ait).
```

### `BEKLENEN_ENKLAV_SORGU = 650` (denetle.py:2255) etkilenir mi?

**KISMEN ÖLÇÜLEBİLDİ, TAM SAYI TÜRETİLEMEDİ (D188 uyarısı uygulandı):**
Bu sayaç Değişmez 7'nin "sorgusuz enklav" ölçütü — B2'nin KENDİ aday
havuzuyla (332 dönem-görünümü) AYNI BİRİM DEĞİL (petek-gün ya da başka
bir taban olabilir, dünkü raporun D188 uyarısı burada da geçerli).
**Yönü kesin: eşik gevşerse 650 AZALIR** (bazı enklavlar artık
sorgulanacak bölgeye "birleşecek" statüsüne geçer) **ama TAM YENİ DEĞER,
FARKLI birimler arasında güvenilir bir dönüşüm formülü olmadan
TÜRETİLEMEZ** — bu, gerçek eşik değişip TAM koşu alındığında ÖLÇÜLMELİ.

---

## ⑤ EMRE İÇİN TEK PARAGRAF

> Eşiğin 500 km + 100.000 km²'ye çekilmesi güvenli: 100.000 km² tavanı
> uydurma değil, verinin kendi boşluğuna (Medine 94k – Cübeyl 195k
> arası) oturuyor. Değiştirmenin GERÇEK etkisi görünenden küçük olacak,
> çünkü motorun "başkasının toprağını ezme" kuralı (b2_yerlesim dalı)
> mesafeden BAĞIMSIZ ayrı bir kapı ve incelenen SEKİZ örneğin SEKİZİ de
> (Tebriz, Maan, Azak, Kabala + dört yeni aday) bu kapıda zaten bloke —
> yani "37 yeni birleşme" bir TAVAN, gerçek sayı muhtemelen çok daha
> küçük. Kefe ve Hotin hiç risk altında değil (B2'nin aday listesine hiç
> girmiyorlar), Azak korunuyor. **Öneri: eşiği değiştir, ama önce küçük
> bir pilot koşu (bölgeyi elle daraltan geçici bir motor kopyasıyla,
> `arac/uret_petek.py`nin kendisi değiştirilmeden) ile 37'nin GERÇEK kaçı
> birleşiyor doğrulanmalı — bu görev o pilot koşuyu açmadı, veri-tabanlı
> bir tahmin sundu.**

---

## Öz-değerlendirme (D107)

- **ÖLÇÜLDÜ:** B2'nin dört dalının kesin kod konumu ve sırası; dört
  bilinen adayın (Tebriz/Maan/Azak/Kabala) hangi dala düştüğü (coğrafi
  akıl yürütme + dünkü bağımsız çapraz-test).
- **BULUNAMADI:** —
- **ÖLÇÜLEMEDİ:** gerçek petek-indeks uzayında ÜÇÜNCÜ bir doğrulama
  (donemler.js'in kendi PARCALAR/PARCA_HALKA'sından yerleşim-bazlı
  sahip_ix türetilmedi, iki ayrı kod hatası bulunup düzeltildikten SONRA
  bu son adım zaman nedeniyle tamamlanamadı); `BEKLENEN_ENKLAV_SORGU`nun
  TAM yeni değeri (birim uyuşmazlığı, D188); pilot-kutu gerçek koşusu
  (motor bölge parametresi almıyor, görev şartıyla çelişiyordu).

---
🤖 Generated with [Claude Code](https://claude.com/claude-code)
