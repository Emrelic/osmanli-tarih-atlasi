# Oturum 10 — Savaşlar ve antlaşmalar: taraf bağlama ve genişletme

Yeni oturumu proje dizininde aç, ilk mesaj olarak şunu yaz:

    oturumlar/OTURUM-10-SAVASLAR.md dosyasını oku ve içindeki görevi yap

Model: **Sonnet**.

---

## Önce oku
`CLAUDE.md` (§4 kaynak kuralı ve **TDV ölü slug tuzağı**) ·
`VERI-YAPISI.md` (`savaslar.js` şeması) · `data/devletler.js` (girdin).

## Durum

`data/savaslar.js` dört dizi taşıyor: **SAVASLAR (108)**, **ANTLASMALAR (30)**,
**SERILER (15)**, **SEFERLER (36)**. Hepsi Osmanlı merkezli ve kayıtların çoğu
karşı tarafı **serbest metin** olarak anıyor: "Avusturya", "Venedik-Papalık
ittifakı" gibi.

Bu turda `data/devletler.js` **212 kayda** çıktı ve her devletin `id`'si var.
Senin işin bu ikisini bağlamak ve tabloları genişletmek.

## Görev 1 — Taraf bağlama (asıl iş, mimarî değeri var)

Her savaş ve antlaşma kaydına **taraf devletlerin `id` listesi** eklenecek:

```js
{ ad:"Mohaç Meydan Muharebesi", …,
  taraf:["osmanli","macaristan"],          // YENİ ALAN
  galip:"osmanli" },                        // YENİ ALAN (varsa)

{ ad:"Karlofça Antlaşması", …,
  taraf:["osmanli","avusturya","lehistan","venedik","rusya"] },
```

- `id`'ler **`data/devletler.js`'teki `id` alanıyla birebir eşleşmeli.**
  Eşleşmeyen bir id yazma; devletler dizininde karşılığı yoksa **bildir**,
  uydurma.
- Osmanlı için `"osmanli"` kullan.
- `galip` alanını yalnız açık bir galibi olan meydan muharebelerinde yaz;
  kuşatma, antlaşma ve belirsiz sonuçlarda **boş bırak**.

**Bu neden önemli:** `MIMARI.md` §6.5'te tarif edilen **devlet merkezli
yükleme** için her devletin "ilgi bağları" veriden türetilecek. Üç kaynaktan
biri savaş ve antlaşma birlikteliği. Bu alan olmadan o bağ kurulamaz. Yani bu
görev, ileride "İngiltere'ye bakınca Kanada ve Hindistan yüklensin, Peru
yüklenmesin" davranışını mümkün kılan üç ayaktan biri.

## Görev 2 — Eksik savaş ve antlaşmaları ekle

108 savaş Osmanlı'nın altı yüz yılı için seyrek. Öncelik:
1. **Kronolojide geçip tabloda olmayanlar.** `data/olaylar*.js` 983 madde
   taşıyor; `etiket` alanında `savas` geçen maddeleri tara, tabloda karşılığı
   olmayanları ekle. Bu, en güvenilir kaynak — maddeler zaten TDV doğrulamalı.
2. **Devletler dizininde geçenler.** `data/devletler.js`'in kronolojilerinde
   `tur:"savas"` ve `tur:"antlasma"` maddeleri var; tabloda olmayanları ekle.
3. Osmanlı'nın taraf olmadığı ama komşularını doğrudan etkileyen büyük savaşlar
   (Çaldıran öncesi Safevî-Özbek savaşları, Otuz Yıl Savaşları gibi) —
   **ölçülü** ekle, atlas Osmanlı merkezli.

## Görev 3 — Antlaşma maddelerini netleştir

30 antlaşmanın çoğunda hangi toprağın el değiştirdiği belirsiz. Her antlaşmaya,
**hangi yerin kimden kime geçtiği** kısa ve açık yazılsın. `data/yerlesimler.js`
zaten o tarihlerde sahip değiştiren yerleşimleri taşıyor — çapraz kontrol için
kullan (oku, **yazma**).

## Yazabileceğin tek dosya
**`data/savaslar.js`** + `oturumlar/OTURUM-10-ILERLEME.md`.

**Dokunma:** `data/devletler.js`, `data/kisiler.js`, `data/yerlesimler.js`,
`data/olaylar*.js` (hepsini **oku**, yazma) · `arac/` altındaki her şey ·
`index.html`, `js/app.js` · kök `*.md`.

**Commit atma. `arac/uret_petek.py`'yi çalıştırma.**

⚠️ **SEFERLER dizisine dokunma.** Onun `yol` alanları Osmanlı menzil yollarına
(Rumeli Sağ Kol, Anadolu Orta/Sol/Sağ Kol) oturtulmuş güzergâhlar; harita
üzerinde ok olarak çiziliyor. Yeni sefer ekleyeceksen güzergâhı menzil
yollarına oturt, dosyanın başındaki açıklamayı oku.

## ⚠️ TDV ölü slug tuzağı
`islamansiklopedisi.org.tr/<slug>` olmayan slug için de HTTP 200 döndürür ve
sessizce arama sayfasına yönlendirir. `<title>` **"Arama - TDV İslâm
Ansiklopedisi"** ise madde **YOKTUR**. Arama:
`https://islamansiklopedisi.org.tr/arama/?q=<kelime>`

Zaten doğrulanmış slug kümesi:
```bash
grep -oh 'kaynak:"[^"]*"' data/olaylar*.js | sed 's/kaynak:"//;s/"//' | sort -u
```

**Tarih uydurma.** Gün bilinmiyorsa `YYYY-01-01`.

## Bitirdiğinde
```bash
node -e "global.window={};const fs=require('fs');eval(fs.readFileSync('data/savaslar.js','utf8'));const S=window.SAVASLAR,A=window.ANTLASMALAR;global.window={};eval(fs.readFileSync('data/devletler.js','utf8'));const ids=new Set(window.DEVLETLER.map(d=>d.id));ids.add('osmanli');let kotu=[],bagli=0;for(const x of S.concat(A)){if(!x.taraf)continue;bagli++;for(const t of x.taraf)if(!ids.has(t))kotu.push(x.ad+' -> '+t);}console.log('savas:',S.length,'| antlasma:',A.length,'| taraf alani olan:',bagli);console.log('devletler.js de olmayan id:',kotu.length,kotu.slice(0,8).join(' | '));"
```

Kaç kayda `taraf` eklediğini, kaç yeni savaş/antlaşma yazdığını ve
**devletler dizininde karşılığı bulunmayan taraf adlarının listesini**
entegrasyon oturumuna bildir. **Commit etme.**
