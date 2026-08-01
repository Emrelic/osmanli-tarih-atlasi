# YER DİZİNİ (U4) — `data/cografya.js` şema önerisi

`OLCUM-COGRAFYA-EKSENI.md`'nin dört şartına göre kuruldu. Bu bir **öneri**;
koordinatörle `VERI-YAPISI.md`'ye birlikte işlenecek. Veri henüz **doldurulmadı**
— önce iskelet üzerinde anlaşalım, sonra 76+53 kaydı dolduran ayrı bir tur açılır.

---

## 0. Dört şartın karşılığı — tek tek

| Şart | Karşılığı |
|---|---|
| 1. Çok değerlilik bilinçli olsun | §2 — bağlantı `olaylar*.js`'e YAZILMAZ, okuma-anında **ad sözlüğü** ile çözülür; bir madde kaç yere değiniyorsa hepsine bağlanır |
| 2. Kademe 5'i geçmesin | §1 — `kita → alt_bolge → ulke → bolge → sehir`, tam 5 |
| 3. Süzülebilir kademeler işaretlensin | §3 — kademe *varsayılanı* var ama **düğüm başına** ölçülüp işaretleniyor (bazı `bolge` düğümleri de kapatılacak, tier tek başına yetmiyor) |
| 4. Ata zinciri türetilebilir olsun | §4 — her düğüm yalnız `ebeveyn` (tek üst) taşır; zincir küçük bir fonksiyonla hesaplanır, hiçbir yerde tekrar yazılmaz |

---

## 1. Düğüm şeması — 5 kademe, TEK ebeveyn (ağaç, DAG değil)

```js
window.COGRAFYA_DUGUM = [
  // KADEME 0 — kıta (5-7 kayıt, elle, sabit)
  { id:"avrupa", ad:"Avrupa", kademe:"kita", ebeveyn:null },

  // KADEME 1 — alt bölge (COĞRAFYA'nın NE envanterinden, ~15-20 kayıt, elle)
  { id:"balkanlar", ad:"Balkanlar", kademe:"alt_bolge", ebeveyn:"avrupa" },

  // KADEME 2 — ülke (modern, NE admin_0'dan MEKANİK üretilir — elle YAZILMAZ)
  { id:"ulke:turkiye", ad:"Türkiye", kademe:"ulke", ebeveyn:"balkanlar" },
  // ⚠️ bir ülke birden fazla alt-bölgeye dokunabilir (Türkiye hem Balkanlar hem
  // Anadolu/Orta Doğu) — bu vakalarda ebeveyn en BASKIN alt bölge, geri kalanı
  // §5'in "çapraz üyelik" notuna düşer, ikinci bir ebeveyn EKLENMEZ (ağaç bozulmasın)

  // KADEME 3 — bölge (tarihî ad, YERDIZINI-ILERLEME.md §8.3'ün 76 kaydı, elle + araştırma)
  { id:"bolge:rumeli", ad:"Rumeli", kademe:"bolge", ebeveyn:"ulke:turkiye",
    zaman:null },              // §6 — zaman boyutu, aşağıda

  // KADEME 4 — şehir (yerlesimler*.js'ten TÜRETİLİR, cografya.js'e ELLE YAZILMAZ)
];
```

**Şehir kademesi neden dosyada yok:** 925 yaprağı elle tutmak `CLAUDE.md`'nin
"🤖 üretilmiş dosya" ilkesini ihlal eder (tek kaynak `yerlesimler*.js`, ikinci
bir kopya sessizce bayatlar). Şehir düğümleri **çalışma zamanında** ya da
küçük bir üretim adımında `yerlesimler*.js`'in `ad`/`lat`/`lon`'undan kurulur:
ülkesi nokta-poligon testiyle (NE, `YERDIZINI-ILERLEME.md §4`, %99,7 ölçüldü),
bölgesi ise §2'deki üyelik listesinden atanır.

---

## 2. Çok değerlilik — `olaylar*.js`'e DOKUNMADAN

`yer:` serbest metin kalır (KRONOLOJİ'nin dosyası, benim değil). Bağlantı
**ad sözlüğü** ile okuma anında kurulur:

```js
window.COGRAFYA_AD_SOZLUGU = {
  "Rumeli": "bolge:rumeli",
  "Filibe": null,   // ⚠️ şehir adları BURAYA YAZILMAZ — yerlesimler.js'in
                     // kendi `ad:` alanı zaten anahtar, otomatik eşleşir
};
```

Yalnız **kıta/alt bölge/bölge** (kademe 0/1/3) adları için sözlük girdisi
gerekir — kabaca 5-7 + 15-20 + 76 ≈ **~100-110 elle girilen ad**, 925 değil.
Ülke ve şehir adları zaten mekanik/otomatik.

Okuma anında bir madde şöyle çözülür (örnek, `js/app.js`'in işi — burada
yalnız yöntem):
```
"Filibe, Vidin" → ["Filibe","Vidin"] (aynı virgül-ayrıştırma, KRONOLOJİ'nin
                   §7.1 yöntemiyle birebir — iki ayrıştırıcı ayrışmasın)
→ Filibe: yerlesimler.js'te bulunur → şehir düğümü → ata zinciri
→ Vidin:  aynı şekilde
⇒ Madde, İKİ şehrin ata zincirindeki TÜM düğümlere bağlı sayılır (kıta dahil)
```
**Dışlama semantiği** (§`OLCUM`'un uyarısı): "Balkanlar kapalı" demek, yalnız
ata zincirinde Balkanlar GEÇMEYEN maddeler filtrelenir — Filibe+İstanbul
geçen bir madde İstanbul yüzünden görünmeye devam eder. Bu ARAYÜZ'ün
uygulayacağı mantık, ben yalnız veri şeklini böyle kuruyorum ki mantık mümkün olsun.

---

## 3. Süzülebilirlik — kademe VARSAYILANI + düğüm ÖLÇÜMÜ

```js
{ id:"bolge:rumeli", ..., suzulebilir:true, madde_sayisi_alt_agac:0 /* dolgu, üretimde hesaplanır */ }
```

**Kademe varsayılanı:** kıta/alt_bolge/ulke/bolge → `true`, sehir → `false`
(`OLCUM §2`: 925 yaprağın %77'si tek maddelik, kutucuk değil arama).

**Ama tier tek başına yetmiyor — ölçtüm.** `bolge` kademesindeki 76 addan
her birinin bugün **doğrudan** kaç maddede geçtiğini saydım (yalnız `yer:`
alanında ad birebir geçen, henüz şehir-üyelik genişlemesi YOK — bu bir **alt
sınır**, gerçek sayı üyelik listesi kurulunca artacak):

```
Eşik altı (bugünkü ham sayımla <5 madde): 45/62 ölçülebilen addan 45'i
Macaristan 20 · Anadolu 15 · Boğdan 13 · Yemen 11 · Azerbaycan 10 · Eflak 10 ·
Hicaz 9 · Arnavutluk 7 · Trakya 7 · Epir 6 · Irak 6 · Kıbrıs 6 · Kırım 6 ·
Rumeli 6 · Kosova 5 · Trablusgarp 5 · İran 5  ← bunlar bugünden eşik üstü
```
⚠️ **Bu sayı kesin değil, TABAN.** "Rumeli" bugün yalnız kendi adı geçen 6
maddede sayılıyor; Filibe/Vidin/Selanik gibi şehirler üyelik listesine
girince gerçek sayı çok artacak. **Süzülebilirlik kararı üyelik listesi
kurulduktan SONRA yeniden ölçülüp verilmeli** — şimdiki 17/62 rakamı yalnız
"en kötü ihtimalde bile eşiği geçenler" içindir, "geçemeyenler kesin kapalı
kalsın" demek DEĞİLDİR.

**Öneri:** `suzulebilir` alanı üretim adımında **otomatik hesaplanır**
(alt ağacındaki toplam madde sayısına göre, eşik `VERI-YAPISI.md`'de
sabitlenir — 5 mi 10 mu birlikte kararlaştırılır), elle işaretlenmez. Şema
yalnız ALANI taşır; değeri veri belirler. Bu, `§4`'ün "türetilebiliyorsa
yazma" ilkesiyle aynı ruhta.

---

## 4. Ata zinciri — türetme fonksiyonu (yazılmaz, hesaplanır)

```js
function ataZinciri(id, DUGUMLER_IX) {
  const zincir = [];
  let d = DUGUMLER_IX[id];
  while (d) { zincir.unshift(d); d = d.ebeveyn ? DUGUMLER_IX[d.ebeveyn] : null; }
  return zincir;  // [kita, alt_bolge, ulke, bolge?, sehir] — bolge YOKSA 4 uzunluğunda
}
```
`bolge` (kademe 3) **isteğe bağlıdır** — her şehir bir tarihî bölgeye
düşmeyebilir (§`YERDIZINI-ILERLEME.md §8.4`'teki gibi henüz kayıtsız kalan
yerler, ya da hiçbir tarihî bölge adıyla anılmamış küçük yerleşimler). O
zaman zincir doğrudan `ulke`'den `sehir`'e atlar — 5 değil 4 uzunluğunda,
şema bunu KABUL EDER, hata saymaz.

---

## 5. Zaman boyutu — `YERDIZINI-ILERLEME.md §6.1`'in devamı

```js
{ id:"bolge:bulgaristan", ad:"Bulgaristan", kademe:"bolge", ebeveyn:"ulke:bulgaristan",
  zaman:[{f:"1185-01-01",t:"1396-01-01"},{f:"1878-07-13",t:"1923-10-29"}] }
```
`zaman` **yoksa** (`null`/alan hiç yok) düğüm bütün pencere boyunca (1281-1923
öncesi/sonrası dahil) geçerli sayılır — bu, 328'in ~%90'ı için doğru
varsayılan (§`ILERLEME §6.1`, 104/150 hiç devlet kaydına düşmüyor). `zaman`
**varsa** dizi olabilir (Bulgaristan/Macaristan/Sırbistan/Kıbrıs/İran gibi
aynı adın iki ayrı çağda iki ayrı varlığa döndüğü ~9 vaka) — bu, ayrı bir
zaman modeli kurmuyor, doğrudan `devletler.js`'in `f`/`t` çiftini taşıyor.

⚠️ Bu alan **süzgeç için değil, uyarı için**: bir madde `t:"1400-01-01"` ile
`bolge:bulgaristan`'a bağlanırsa (henüz kayıtlı değil, 1396-1878 arası) arayüz
bunu göstermeye devam eder (coğrafya dışlama semantiği, §2) ama **istenirse**
bir tutarlılık uyarısı üretebilir — bu tasarım kararı bende değil, `§3.5`'in
"hayalet devlet" sınıfına yakın, DENETÇİ'yle konuşulmalı.

---

## 6. Çapraz üyelik / çok-ebeveynlik — açık soru, tek yönde çözdüm

Bazı tarihî bölge adları (**Kürdistan, Trakya, Rumeli**) birden fazla modern
ülkeye yayılıyor. Ağaç tek-ebeveynli olduğu için (şart 4) bu adlar **birden
fazla `bolge` düğümü** olarak modellenmeli, aynı görünen ad farklı ülke
altında tekrarlanır:

```
bolge:trakya-tr  ad:"Trakya"  ebeveyn:"ulke:turkiye"
bolge:trakya-gr  ad:"Trakya"  ebeveyn:"ulke:yunanistan"
```
Arayüzde ikisi de "Trakya" görünür ama farklı dallarda durur — kutucuk
işaretlemesi ikisini birden mi seçer yoksa ayrı mı sorar, bu bir **arayüz
kararı**, ben yalnız veri modelinin buna izin verdiğini garanti ediyorum.

📌 Bu, §76'lık listenin **kaçının** çok-ülkeli olduğu ölçülmedi — sıradaki
işlerden biri (muhtemelen küçük bir liste: Kürdistan, Trakya, Rumeli,
Kırım-tartışmalı, belki Dağıstan/Gürcistan sınır bölgeleri).

---

## 7. Ne HENÜZ yapılmadı — dürüst liste

1. **Üyelik listesi kurulmadı** — hangi şehir hangi `bolge`'ye giriyor (76 × N
   araştırma). Bu, `suzulebilir` ölçümünü de, gerçek madde sayılarını da bekletiyor.
2. **Alt bölge listesi (kademe 1) yok** — COĞRAFYA'nın NE envanterinden
   alınacak (koordinatörün mesajında andığı kaynak), ben henüz görmedim.
3. **Ülke ağacı (kademe 2) üretilmedi** — NE'nin 258 kaydından yalnız
   yerleşimlerin gerçekten dokunduğu ~40-60'ı kullanılacak, mekanik.
4. **Çapraz üyelik listesi** (§6) ölçülmedi.
5. `YERDIZINI-ILERLEME.md §8.4`'teki 53 "eksik yerleşim" ilgili bölge
   oturumlarına HENÜZ devredilmedi.

**Öneri sıra:** şema onaylanınca önce (2) ve (3) — mekanik, ucuz, riski düşük
— sonra (1) araştırma turu açılır (muhtemelen ayrı bir oturum, sıkıştırma
oranı ~20:1 olduğu için `KOORDINASYON.md §6b` gereği bana değil ayrı bir
araştırma turuna gider).
