# Oturum 9 — Devletler dizini: derinleştirme ve tutarsızlık temizliği

Yeni oturumu proje dizininde aç, ilk mesaj olarak şunu yaz:

    oturumlar/OTURUM-9-DEVLET-DERINLESTIRME.md dosyasını oku ve içindeki görevi yap

Model: **Sonnet**.

---

## Önce oku
`CLAUDE.md` (§4 kaynak kuralı ve **TDV ölü slug tuzağı**) · `VERI-YAPISI.md`
(`devletler.js` şeması) · `oturumlar/OTURUM-3-ILERLEME.md` (bu dosyayı kuran
oturumun notları — nerede kararsız kaldığını yazmış).

## Durum

`data/devletler.js` bir önceki oturumda **77'den 212 kayda** çıktı, 847
kronoloji maddesi ve 101 harita eşleşmesi var. O oturum **K-1 aşamasını**
(başlık düzeyinde kronoloji) bitirdi. Senin işin **K-2**: madde sayısını
artırmak ve bıraktığı tutarsızlıkları temizlemek.

## Görev 1 — Bilinen üç tutarsızlık

Bunlar önceki oturumun kendi raporunda bıraktığı, düzeltilmemiş noktalar:

1. **`suud-ikinci`** kaydı `t:"1891-01-01"` ile bitiyor ama kronolojisinde
   **1902-01-15** tarihli bir madde var. Üçüncü Suûdî devleti (1902'de İbn Suûd'un
   Riyad'ı geri alışıyla başlayan) için **ayrı kayıt açılmalı**; 1902 maddesi
   oraya taşınmalı.
2. **`danimarka`** kaydı "Danimarka-Norveç, 1380-1923" diyor ama **1814'teki
   birlik dağılmasını** yansıtmıyor. Norveç 1814-1905 arası İsveç'le birlikteydi;
   ayrı `norvec` kaydı (1905-1923) zaten var. `danimarka`nın kapsamı düzeltilmeli.
3. **Doğrulama betiğinin yanlış alarmı**: 12 kayıt "ters aralık" veriyordu.
   Sebep, 3 haneli yılın (`"330-05-11"`) 4 haneli yılla **metin olarak**
   karşılaştırılması. Gerçek ters aralık **yok** (sayısal kıyaslamayla sıfır).
   Doğrulama komutunu sayısal kıyaslamaya çevir, aşağıdaki sürümü kullan.

## Görev 2 — Kronolojileri derinleştir (asıl iş)

Bugün devlet başına ortalama **4 madde** var. Hedef: **Osmanlı ile teması olan
devletlerde 10-20 madde**, uzak dünya devletlerinde 5-8.

Öncelik sırası — kapsam değil derinlik:
1. **Osmanlı'nın doğrudan muhatapları**: Bizans, Venedik, Macaristan, Habsburg,
   Safevî, Memlûk, Rusya, Lehistan, Ceneviz, Karamanoğulları, Kırım
2. **Balkan ve Kafkas komşuları**: Sırp, Bulgar, Bosna, Eflak, Boğdan, Erdel,
   Gürcistan, Şirvanşah, Karadağ
3. **Anadolu beylikleri** — bu turda haritada tarihleri düzeltildi, kronolojileri
   de eşleşmeli (aşağıya bak)
4. Kalanlar

Madde tipleri (`kronoloji[].tur`): `kurulus` · `hukumdar` · `toprak-kazanc` ·
`toprak-kayip` · `savas` · `antlasma` · `bolunme` · `birlesme` · `ittifak` ·
`isyan` · `isgal` · `son`. Bir devletin kronolojisi en azından **kuruluş,
hükümdar değişimleri, büyük savaş/antlaşmalar ve son**u taşımalı.

`kronoloji[].b` **kısa başlıktır, tek satır.** Burası bir dizin, `olaylar*.js`
değil — detay paragrafı yazma, o sonraki fazın işi.

## Görev 3 — Beylik tarihleriyle hizalama

Bu turda haritadaki beylik kuruluş tarihleri TDV'ye göre düzeltildi. Dizindeki
kayıtlar da aynı tarihleri taşımalı:

| Beylik | TDV kuruluş | Not |
|---|---|---|
| Ramazanoğulları | 1352 | öncesi Kilikya Ermeni Krallığı |
| Karakoyunlular | 1351 | Bayram Hoca, Van-Erciş merkez |
| Akkoyunlular | 1340 | Tur Ali Bey |
| Dulkadiroğulları | 1337 | Karaca Bey, Elbistan→Maraş |
| Hacıemîroğulları | ~1350 | Ordu-Bayramlı |
| Karamanoğulları | ~1256; **Konya 1366-67** | ilk yurt Ermenek |
| Saruhanoğulları | ~1290'lar; **Manisa 1310 sonrası** | öncesi Bizans |
| Aydınoğulları | XIV. yy başı; **İzmir 1328-29** | ilk merkez Birgi |
| Candaroğulları | XIV. yy başı | ilk merkez Eflani |
| Karesioğulları | 1296-97; **ilhak 1345** | Balıkesir→Bergama |
| Hamîdoğulları | ~1297 | ilk merkez Uluborlu |
| Germiyanoğulları | XIII. yy sonu | 1381 çeyiz, 1390 ilhak, 1429 sancak |
| Sâhib Ataoğulları | 1275-1341 | 1341'de Germiyan ilhak etti |
| Çobanoğulları | ~1211-1309 | 1309'da Candar aldı |
| Pervâneoğulları | 1277-1322 | 1322'de Candar aldı |
| Eşrefoğulları | ~1280-1326 | Beyşehir |

Ayrıca haritaya bu turda **üç yeni devlet** eklendi; dizinde karşılıkları olmalı
ve `harita:` alanıyla bağlanmalı:
- `selcuklu` — Anadolu Selçukluları (1308'e kadar)
- `trabzon-rum` — Trabzon Rum İmparatorluğu (1204-1461, Komnenos)
- `kilikya-ermeni` — Kilikya Ermeni Krallığı (1198-1375)

## Yazabileceğin tek dosya
**`data/devletler.js`** + `oturumlar/OTURUM-9-ILERLEME.md`.
Mevcut 212 kaydın **`id`'lerini değiştirme** — bağlantıları kırar.

**Dokunma:** `data/yerlesimler.js`, `data/kisiler.js`, `data/olaylar*.js`,
`arac/` altındaki her şey, `index.html`, `js/app.js`, kök `*.md`.
**Commit atma. Üretim betiğini çalıştırma.**

## ⚠️ TDV ölü slug tuzağı
`islamansiklopedisi.org.tr/<slug>` olmayan slug için de HTTP 200 döndürür.
`<title>` **"Arama - TDV İslâm Ansiklopedisi"** ise madde **YOKTUR**.
Arama: `https://islamansiklopedisi.org.tr/arama/?q=<kelime>`

## Bitirdiğinde
```bash
node -e "global.window={};eval(require('fs').readFileSync('data/devletler.js','utf8'));const D=window.DEVLETLER;const id=new Set();let h=0,k=0,ters=[];const yil=s=>parseInt(s.split('-')[0],10);for(const d of D){if(id.has(d.id))console.log('TEKRAR:',d.id);id.add(d.id);if(!d.ad||!d.tur||!d.f||!d.t)console.log('EKSIK:',d.id);if(yil(d.t)<yil(d.f))ters.push(d.id);k+=(d.kronoloji||[]).length;if(d.harita)h++;}console.log('kayit:',D.length,'| kronoloji:',k,'| ortalama:',(k/D.length).toFixed(1),'| harita:',h,'| ters:',ters.join(',')||'yok');"
```
Kaç madde eklediğini, ortalama madde/devlet oranını ve üç tutarsızlığın
durumunu **entegrasyon oturumuna bildir**. **Commit etme.**
