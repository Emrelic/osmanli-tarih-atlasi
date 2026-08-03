# KİMLİK TASLAĞI — Don Kazak Ordası

**3 Ağustos 2026 · VERİ KİMLİK 3 · Opus.** Koşu sürerken yazıldı;
`data/devletler.js` ve `arac/renkler.py` **KİLİTLİ, dokunulmadı.**
Koordinatör yayından sonra tek commit'te işleyecek.

## ✅ "YOK" İDDİASI BU SEFER ÖLÇÜLDÜ

Zaporog vakasının dersi uygulandı — iletilen bilgi doğrulanmadan iş
yazılmadı:
```
grep -in "don-kazak|donkazak|\"don\"" renkler.py devletler.js   → 0
grep  d:"...don..."  data/yerlesimler*.js                       → 0
```
`don-kazak` **gerçekten yok**: ne rengi, ne künyesi, ne veride kullanımı.

## 🔴 AMA KOMŞU LİSTENDE İKİNCİ BİR EKSİK VAR — `kalmuk` de YOK

Verdiğin komşu kümesi `zaporojye · kirim · rusya · nogay · kalmuk ·
altinorda` idi. Ölçüldü:
```
kalmuk    BOYALAR'da YOK · devletler.js'te YOK · veride YOK
cungar    VAR (#7b1fa2) ama BAŞKA DEVLET — Cungarya'daki Oyrat hanlığı,
          Volga Kalmuk Hanlığı (1630-1771) değil
```
⇒ **Volga Kalmuk Hanlığı da eksik bir kimlik** ve Don Ordası'nın
*doğrudan* komşusu: 1630'dan itibaren Volga-Manıç arasında, tam o 13
hücrenin doğusunda. Ölçüye alınamadı (rengi yok, engel kümesine
giremedi).
📌 Yani Zaporog'da söylediğimin aynısı bir kez daha: **eksik olan bir
kimlik değil, bir kimlik kümesi.** `kalmuk` yazılmazsa Don'un doğu
komşusu ya `nogay`a ya `rusya`ya emilecek — ikisi de yanlış.

---

## ① `data/devletler.js` künye taslağı

```javascript
{ id:"don-kazak", ad:"Don Kazak Ordası", tur:"devlet", bolge:"sibirya-bozkir",
  f:"1570-01-01", t:"1721-01-01", baskent:"Çerkassk (Razdory → Çerkassk)", harita:"don-kazak",
  tabi:[{f:"1671-01-01", t:"1721-01-01", ust:"rusya"}],
  ozet:"Don aşağısında seçilmiş atamanlarca yönetilen kazak ordası; Azak'ı 1637'de alıp beş yıl tuttu, Razin ayaklanmasından sonra çara biat etti ve I. Petro döneminde Rus askerî yapısına bağlandı (kaynak: TDV, madde: azak).",
  kronoloji:[
    { t:"1570-01-01", tur:"kurulus", b:"IV. İvan'ın fermanıyla Don kazakları ordu olarak tanındı" },
    { t:"1637-01-01", tur:"toprak-kazanc", b:"Kazaklar Azak Kalesi'ni ele geçirdi" },
    { t:"1641-09-01", tur:"savas", b:"Deli Hüseyin Paşa'nın üç aylık kuşatması sonuç vermeden kaldırıldı" },
    { t:"1642-01-01", tur:"toprak-kayip", b:"Yeni Osmanlı seferi üzerine kazaklar kaleyi yakıp çekildi" },
    { t:"1671-01-01", tur:"antlasma", b:"Razin ayaklanmasının bastırılmasından sonra orda çara biat etti" },
    { t:"1721-01-01", tur:"son", b:"I. Petro ordayı Askerî Kollegium'a bağladı, siyasî varlığı sona erdi" }
  ]
},
```

### Tarihlerin kaynağı

**TDV `azak`** (sayfa açıldı, `<title>` sınandı: *"AZAK - TDV İslâm
Ansiklopedisi"*) — Osmanlı'ya bakan bütün olayları veriyor:

| tarih | TDV'nin sözü |
|---|---|
| 1559 | Kazakların ilk Azak kuşatması, Ali Reis püskürttü |
| **1637** | *"Nihayet 1637'de Kazaklar kaleyi ele geçirdiler"* |
| **1641** | Deli Hüseyin Paşa üç ay kuşattı, eylül sonunda vazgeçti |
| **1642** | Sultanzâde Mehmed Paşa ve IV. Mehmed Giray'ın seferi üzerine kazaklar *"kaleyi ateşe verip kaçtılar"* |
| 1696 | I. Petro Azak'ı aldı (31.000 asker, 170 top) |
| 1711 | Prut'tan sonra Osmanlı Azak'ı geri aldı |

⚠️ **ATIF UYARISI — ve tam senin çizdiğin Dinyeper/Don sınırında:**
TDV bu olaylarda yalnız *"Kazaklar"* diyor, **Don mu Zaporog mu
ayırmıyor.** 1637-1642 Azak vakası standart literatürde **Don
Ordası'na** atfedilir (Zaporogların katılımıyla). Künyeye o şekilde
yazıldı ama bu **TDV'nin cümlesi değil, literatürün ayrımı** — kayda
geçiyor.

⚠️ **Uydurulmayan günler:** 1570 fermanının, 1637 fethinin, 1642
çekilişinin ve 1671 biatının GÜNÜ TDV'de yok. `YYYY-01-01` yazıldı.
1641 kuşatmasının kaldırılışı TDV'de *"eylül sonu"* — `1641-09-01`
yazıldı ve ay bilgisi korundu.

---

## 🔴 ② SENİN SORDUĞUN ÜÇ AYRIM — iki ucu da gösteriyorum

### (a) 1671 sonrası: ayrı kimlik mi · `v:` mi · `rusya` mı?

```
AYRI KİMLİK + tabi:   ✅ ÖNERİM
   Deponun kendi kalıbı. `kirim` 1441-1783 arası TEK kayıttır ve Osmanlı
   tâbiliği tabi:[{1475→1774}] ile yazılmıştır — 299 yılın 299'u `kirim`
   rengiyle boyanır. `zaporojye` de aynı. Don için farklı davranmak
   tutarsızlık olur.

`v:` ALANI          🔴 KULLANMA — ölçüldü, yanlış anlam üretir
   `v:` Osmanlı sisteminin tâbi toprağıdır ve haritada OSMANLI'nın açık
   tonuyla boyanır (CLAUDE.md §1.5: "doğrudan toprağı koyu, tâbi toprağı
   açık"). Don'a `v:` yazmak, Rus tâbiliğini OSMANLI tâbiliği gibi
   gösterir. Motor `v:` içinde `d:` taşıyabiliyor ama opaklık Osmanlı
   ikilisinden geliyor — anlam kayması sessiz olur.

DOĞRUDAN `rusya`    ⬜ meşru ama erken
   1671 bir biattır, ilhak değil. Orda kendi atamanını seçmeye,
   kendi toprağını yönetmeye devam etti. `rusya` yazmak, senin
   PETEK/NOKTA'ya söylediğin hatanın aynısı: "Rusya'yı yüz yıl erkene
   çekmek."
```

### (b) Bitiş: 1721 · 1775 · 1835 — hangisi atlasın ölçütüne uyar?

Atlasın sorusu **"bu toprağı kim yönetiyor"**. Üç eşiğin anlamı farklı:

```
1721  I. Petro ordayı Askerî Kollegium'a bağladı.
      ⇒ Orda bir DEVLET olmaktan çıkıp Rus ordusunun bir kolu oldu.
      ✅ ÖNERİM — atlasın ölçütüne uyan eşik budur.
1775  Pugaçev sonrası sivil idarenin yeniden düzenlenmesi.
      Zaporojye Seçi'nin kaldırılışıyla aynı yıl ama AYNI OLAY DEĞİL;
      Don ordusu kaldırılmadı. Bu tarihi almak iki ordayı aynı kefeye
      koymak olur.
1835  Nizamnâme — Don Ordası Vilâyeti düzenli bir idarî birim oldu.
      "Kendi idaresi vardı" ölçütünü esas alırsan bu doğru eşiktir,
      ama o ölçüt `kirim`e uygulanmıyor (Kırım 1475'ten beri tâbi ama
      1783'e kadar boyanıyor — çünkü KENDİ HANI vardı).
```
📌 Ayırt edici soru: **1721'den sonra Don'un kendi başı var mı?** Yok —
ataman artık çar tarafından atanıyor. Kırım'ın hanı 1783'e kadar
kendi hanedanındandı. Bu yüzden `kirim` 1783'e, `don-kazak` 1721'e
kadar. Ölçüt tutarlı kalıyor.
⚠️ Karar senin; 1835 seçilirse `tabi` aralığı da 1835'e uzatılmalı.

---

## ③ `arac/renkler.py` rengi — ÖLÇÜLDÜ

```python
"don-kazak":  ("Don Kazak Ordası", "#429cba"),
```

```
#429cba    ton 199,3°  (turkuaz-mavi)   L* 75,8

  zaporojye  23,2   ← 🔴 KRİTİK AYRIM, iki katı marjla geçti
  rusya      19,7
  altinorda  19,6   ← en dar
  kirim      31,5
  nogay      48,2
  teodoro    35,8
  OSMANLI    61,0 / 47,3
  ZEMİN      23,6   ← eşik 15

  (bilgi) kazak-hanligi 43,7 · cungar 40,5
```
**En dar marj 19,6** — eşiğin (12) bir buçuk katı. Kullanıcının
*"Ukrayna kazakları ile Türk olan Kazaklar karışmasın"* uyarısı iki
yönde de karşılandı: `kazak-hanligi`den 43,7, `zaporojye`den 23,2.

### `teodoro` ölçüye SONRADAN eklendi — ve seçimi değiştirdi
İlk çözüm `#48ba42` (yeşil) verdi: komşulardan 21,4 ile temizdi ama
`teodoro` (#42ba42, Kırım'ın güneybatısı) ile **ΔE ~2**. İkisi tarihçe
örtüşmüyor (Theodoro 1475'te bitiyor, Don 1570'te başlıyor) — yani
araç bunu **ihlal saymazdı.** Ama ikisi de Karadeniz'in aynı köşesinde
ve kullanıcı haritaya bakarken tarihe değil renge bakıyor.
⇒ `teodoro` engel kümesine kondu, yeniden çözüldü. 📌 Bu, Hindistan'ın
yedi mavisinde verdiğim kararın aynısı: **komşuluk ölçütü geçiyor diye
okunabilirlik geçmiş olmuyor.**

### 🔴 RENK'in uyarısı ÖLÇÜLDÜ — palet gerçekten doymuş

```
BOYALAR  226 kimlik · 184 ayrı hex
eşikleri geçen aday havuzu (uyum ≤ 0,05)             639
bu havuzdaki HİÇBİR adayın palet geneline uzaklığı   ΔE 4,6'dan fazla DEĞİL
seçilenin palet genelinde en yakını                  guney-ming 2,9 · belcika 3,1
```
⇒ Artık **her yeni renk, uzak bir devletin rengine ΔE ~3-5 içinde
düşüyor** ve bundan kaçış yok. Bu bir kusur değil, paletin doyması;
`renkler.py`nin kendi doktrini zaten buna izin veriyor: *"bir rengi
birden çok devletin paylaşması sorun değildir — yeter ki o devletler
tarih boyunca hiç komşu olmasın."* `guney-ming` Çin'de, `belcika`
Batı Avrupa'da; Don Ordası ile hiçbir gün komşu değiller.
⚠️ Ama artık bu **kural değil zorunluluk.** Yeni kimlik eklendikçe
"komşu değilse paylaşsın" ilkesi tek seçenek hâline geliyor ve
**komşuluk ölçümünün doğruluğu kritikleşiyor** — yanlış ölçülen bir
komşuluk artık doğrudan görünür hataya dönüşür.

**İşlendikten sonra:** `py arac/renk_olc.py` — taban 10 / 55 / 0 artmamalı.

---

## 🔴 ④ PETEK/NOKTA'YA — bu kimlik 13 hücrenin YARISINI, o yarının da BİR PARÇASINI açıyor

Kimlik `1570 → 1721`. Atlas penceresi `1281 → 1923`. Rostov / Don aşağısı
hücrelerinde **iki uçta hâlâ sahip yok**:

```
1281 → 1570   289 yıl   ⬜   1721 → 1923   202 yıl   ⬜
```
Yani `don-kazak` o hücrelerin ömrünün **%23'ünü** kaplıyor. Yalnız bu
kimlikle nokta eklenirse Değişmez 1 iki yeni sahipsiz pencere görür.

İskelet öneri (üçü de mevcut kimlik, yeni renk gerekmez):
```
1281 → 1502   altinorda
1502 → 1570   nogay        (Mangıt/Nogay bozkırı — kirim DEĞİL, ölçülmeli)
1570 → 1721   don-kazak    ← bu taslak
1721 → 1923   rusya
```
⚠️ Devir günleri **kaynakla** konmalı; yukarısı iskelettir. Ve
`§3.5.1` gereği iki uç da sorulmalı: `nogay`ı Don aşağısına kadar
taşımak Nogay'ı olmadığı yere götürüyor mu? Ölçen PETEK/NOKTA olmalı.

📌 Ve doğu komşusu için `kalmuk` (Volga Kalmuk Hanlığı, 1630-1771)
**hâlâ eksik** — o yazılmadan Don'un doğu sınırı doğru çizilemez.

---

## İŞLEME SIRASI

```
① devletler.js'e künyeyi ekle        (yukarıdaki blok)
② renkler.py'ye rengi ekle           "don-kazak": ("Don Kazak Ordası", "#429cba")
③ py arac/renk_olc.py                10 / 55 / 0 ARTMAMALI
④ PETEK/NOKTA'ya §④'ü ilet           zaman zinciri + kalmuk eksiği
⑤ kalmuk kimliği                     Volga Kalmuk Hanlığı 1630-1771 — SIRADAKİ KALEM
```
