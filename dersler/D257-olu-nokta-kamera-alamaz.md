# D257 — Ölü nokta kamera alamaz: `sehirler` havuzunun `d`/`v`/`s` süzgeci

> 3 Ekim 2026 · 1281 öncesi pilotu · ölçen YILDIRIM BAYEZIT, tetikleyen KASA-DALGA1-1003

## Kural

**Bir yerleşim ancak `d:` / `v:` / `s:` dizilerinden BİRİ DOLUYSA `yer_id` ile
çözülebilir.** Üçü de boşsa nokta `sehirler` havuzuna girmez, ona yazılan
`yer_id` **kırık atıf** olur ve yayın kapısı öter (yeniye 0 tolerans, §9).

```js
// arac/odak_cozum.js:80
const dolu = (y.d && y.d.length) || (y.v && y.v.length) || (y.s && y.s.length);
if (!dolu) return;                 // havuza GİRMEZ
```
```python
# arac/girdi.py:170-172
"s": "yabancı sahiplik dönemleri — MOTOR BOYAR"
"d": "doğrudan Osmanlı dönemleri — MOTOR BOYAR"
"v": "tâbi / dolaylı idare dönemleri — MOTOR BOYAR"
```

## Niçin bu bir KISKAÇ, sıradan bir şart değil

Üçü de **MOTOR BOYAR**. Yani kameraya girmenin tek yolu, motora "bu nokta şu
tarihte şu devletin toprağıdır" demektir. `UFUK` (1281-01-01 – 1923-10-29)
içinde **yaşamayan** bir yerleşim için bu cümle **yanlıştır**. İki seçenek
var ve ikisi de kamera vermez:

| yazım | sonuç |
|---|---|
| `s:` **BOŞ** (+ `bit:` 1281 öncesi) | Değişmez 1 temiz, motor doğru · ama havuzda YOK ⇒ `yer_id` yazılamaz |
| `s:` **DOLU** | havuzda var, kamera çalışır · ama **var olmayan şehre toprak boyanır** |

İkincisi [`D256`](D256-cozuluyor-ama-yanlis-cozuluyor.md)nın ta kendisidir:
kapı ötmesin diye veriye yanlış yazmak.

## Ölçülen vaka

Askalân (TDV: Baybars **1270**'te yıktı, yeniden iskân yok) ve Dvin (Iranica
+ Kettenhofen: Moğol yıkımı **1233-1236**) pilotun "kaynaklı, sıfır çekirdek
riski" dilimiydi. Ben bundan **"o hâlde bedava kamera kazancı"** sonucunu
çıkardım ve KASA'ya *"6 madde kamera kazanır"* yazdım. **Yanlıştı.** İkisi de
UFUK'un tamamen dışında ölüyor ⇒ `s:` yazılamaz ⇒ havuzda yoklar ⇒ bugünkü
kamera değeri **sıfır**. Noktalar yine yazıldı (`614b0914`), `yer_id`
yazılmadı; değeri yalnız UFUK geriye uzatıldığında hazır olmalarıdır.

🔴 **Ve bu kıskaç vekil kayıtları AÇIKLAR** ([`D256`](D256-cozuluyor-ama-yanlis-cozuluyor.md)
· ~97 kalem): yazarlar doğru şehri (Rey, Dînever, Malazgirt, Meyyâfârikîn)
yazmak istediklerinde o nokta havuzda **yoktu**, kapı ötüyordu — kapı ötmesin
diye **komşu şehri** yazdılar. Kusur yazarın tembelliği değil, **kapının
basıncı**. Bir kapı, kaçınılması kolay bir yanlış bırakıyorsa o yanlış
yazılır.

## Türetilen iş kuralı

Bir maddenin `yer_id`sini düzeltirken **önce hedef noktanın havuzda olup
olmadığı sorulur.** Hedef nokta `d`/`v`/`s` taşımıyorsa:

```
yer_id'yi SİLMEK (odaksız bırakmak)  >  yanlış şehre bırakmak
```
Odaksızlık **beyanlı borçtur** (tavanı var, sayılır); yanlış odak **sessiz
kusurdur** ve yazıldığı an denetlenemez hâle gelir.

## İki rakamım yanlıştı — ikisi de aynı aileden

- **"veride zaten 62 nokta `bit:` taşıyor"** → gerçek **19**. 62 benim regex
  sayımımdı, yorum satırlarını da saydı. [`D219`](D219-dosya-haritasi-tam.md):
  ayrıştırıcıyı değil **projenin okuyucusunu** (`girdi.yukle()`) kullan.
- **"şema zaten çözüyor, emsal var"** → `bit:` 1281 **öncesine** düşen nokta
  sayısı **0**'dı. Emsal YOKTU; şema "çözüyor" değil "çözmesi bekleniyor"du.
  Sonradan sınandı ve gerçekten çözüyor (`denetle.py`: 4298 yerleşim, 309
  sahipsiz — **beklenen 309**, sayı artmadı). Ama bunu **sınamadan önce**
  söyledim. *Bir işlevin VAR olması, ÇAĞRILDIĞI anlamına gelmez* — `kd:`
  tuzağının (CLAUDE.md §3) birebir aynısı, ve bu kez tersi çıktı: `bit:`
  gerçekten okunuyor (`y.get("bit")` dokuz yerde, `petek_epok` on çağrı).

## Yan bulgu — verinin kendi yorumları bayat

`data/yerlesimler.js` üç yerde *"motor `bit:`i okumadığı için `s:` zinciri
1923'e kadar tam bırakıldı"* diyor (Zerenc, Tûs, +1). O cümle `petek_epok`
inmeden önce yazılmış ve bugün **yanlış**. Zararsız ama yanıltıcı; bir
sonraki okuyucuya "`bit:` işe yaramaz" dedirtir. `uret_petek.py:4659` de
*"34 `kur:` + 3 `bit:`"* diyor, bugün 19.
📌 **Veri içindeki yorum, kodun durumu hakkında bir KAYIT tutar, ÖLÇÜM
yapmaz.** Kodu okumadan yoruma güvenmek, bayat tabloyla kabul ölçütü
kurmaktır ([`D199`](D199-durum-tablosu-elle-yazilmaz.md)).

## Motor tarafı — kıyı engel DEĞİL

`_kusatilmis` (`uret_petek.py:4835`) ölü/kurulmamış **ve sahipsiz** peteği,
**kara** komşuluğunun ≥ `KUSATMA_ESIK` (%90) kadarı sahipliyse yutar.
`_ic_kara(i)` **kıyıyı paydadan çıkarır** ⇒ Askalân'ın kıyıda olması engel
değil; tamamen kıyı olan nokta "karar verilemez" deyip bırakılır.
⚠️ Bu bir **kod okumasıdır**. Geometrinin fiilen değişmediği ancak bir veri
koşusundan sonra ölçülür. "Sıfır risk" değil, **ölçülmemiş risk**.
