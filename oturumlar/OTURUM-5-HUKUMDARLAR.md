# Oturum 5 — Dünya hükümdarları

Yeni oturumu proje dizininde aç, ilk mesaj olarak şunu yaz:

    oturumlar/OTURUM-5-HUKUMDARLAR.md dosyasını oku ve içindeki görevi yap

Model: **Sonnet**. Hacimli biyografi doldurma işi.

---

## Önce oku
`CLAUDE.md` — özellikle **§4 kaynak kuralı ve TDV ölü slug tuzağı**; bu görevin
tek gerçek riski odur. · `VERI-YAPISI.md` — `kisiler.js` şeması ·
`data/devletler.js` — senin girdi kaynağın.

## Senin işin

**Dünya hükümdarlarını `data/kisiler.js`'e eklemek.** Bugün 90 kişi var ve
hepsi Osmanlı: padişah, sadrazam, paşa, komutan, denizci. Kronolojide adı geçen
yabancı hükümdarların çoğunun kaydı yok — Şah Abbas, Kanunî'nin muhatabı I.
Ferdinand, Timur, Şarlken, Deli Petro, II. Katerina, Napolyon…

**Girdin hazır:** `data/devletler.js` bu turda 212 kayda çıktı ve her devletin
kronolojisinde `tur:"hukumdar"` maddeleri var. O maddelerde adı geçen
hükümdarları çıkar, kişi kaydına dönüştür.

**Hedef: 150-250 yeni kişi.** Öncelik sırası:
1. **Osmanlı'nın doğrudan muhatapları** — savaş açtığı, antlaşma imzaladığı,
   elçi teâti ettiği hükümdarlar. `data/savaslar.js` (108 savaş, 30 antlaşma) ve
   `data/olaylar*.js` (983 madde) içinde adı geçenler.
2. **Komşu devletlerin hanedan başları** — Safevî şahları, Memlûk sultanları,
   Habsburg imparatorları, Venedik doçları, Rus çarları, Macar ve Leh kralları.
3. **Uzak dünya hükümdarları** — Çin, Hint, Afrika, Amerika. Yalnız devletler
   dizininde adı geçenler; yeni araştırma açma.

## Yazabileceğin tek dosya
**`data/kisiler.js`** — mevcut 90 kaydı **koru**, üzerine yaz**ma**, sadece ekle.

**Dokunma:** `data/devletler.js` (oku, yazma) · `data/yerlesimler.js` ·
`data/olaylar*.js` · `arac/` altındaki her şey · `index.html`, `js/app.js` ·
kök dizindeki `*.md` belgeleri.

**Commit atma. `arac/uret_petek.py`'yi çalıştırma.**

## Biçim
`data/kisiler.js`'in başındaki açıklamayı ve mevcut kayıtları örnek al. Yeni
alan uydurma; mevcut şemaya uy. Bir yabancı hükümdarı Osmanlı sadrazamıyla aynı
şemaya sokarken zorlanırsan `tur` alanına uygun bir değer ekle ve dosyanın
başındaki listeye de yaz.

Her kayıtta **hangi devletin hükümdarı olduğu** açıkça belli olmalı ve mümkünse
`data/devletler.js`'teki `id` ile eşleşmeli — ileride ikisi bağlanacak.

## ⚠️ TDV ölü slug tuzağı
`islamansiklopedisi.org.tr/<slug>` **olmayan slug için de HTTP 200 döndürür** ve
sessizce arama sayfasına yönlendirir. Ölü slug'ı yalnız sayfa başlığı ele verir:
`<title>` **"Arama - TDV İslâm Ansiklopedisi"** ise madde **YOKTUR**.

Doğru slug'ı `https://islamansiklopedisi.org.tr/arama/?q=<kelime>` ile bul.
Zaten doğrulanmış küme:
```bash
grep -oh 'kaynak:"[^"]*"' data/olaylar*.js | sed 's/kaynak:"//;s/"//' | sort -u
```
TDV'nin kapsamadığı hükümdarlar için (Avrupa kralları, Çin imparatorları)
standart akademik referans yeterlidir. **Tarih uydurma:** saltanat yılı
bilinmiyorsa yaz**ma**, alanı boş bırak.

## Çalışma düzeni
Partiler hâlinde ilerle, her partiden sonra dosyayı kaydet:
1. Safevî / Akkoyunlu / Karakoyunlu / Memlûk
2. Habsburg / Macaristan / Lehistan / Venedik
3. Rusya / Kırım / Altın Orda ardılları
4. Batı Avrupa — Fransa, İspanya, İngiltere, Papalık
5. Balkan devletleri — Sırp, Bulgar, Bosna, Eflak, Boğdan, Yunanistan
6. Arap ve İran dünyası — Suûdî, Şammar, Yemen, Umman, Kaçar, Afşar
7. Kuzey Afrika ocakları, Fas, Sudan, Habeşistan
8. Uzak dünya — yalnız devletler dizininde adı geçenler

Her parti sonunda `oturumlar/OTURUM-5-ILERLEME.md`'ye ne eklediğini yaz.

## Bitirdiğinde
```bash
node -e "global.window={};eval(require('fs').readFileSync('data/kisiler.js','utf8'));const K=Object.values(window).find(Array.isArray);const ad=new Set();let d=0;for(const k of K){if(ad.has(k.ad))console.log('TEKRAR:',k.ad);ad.add(k.ad);if(!k.ad||!k.tur)console.log('EKSIK:',JSON.stringify(k).slice(0,80));}console.log('kisi:',K.length);"
```
Kaç kişi eklediğini, hangi partileri bitirdiğini ve kaç yeni TDV slug'ı
doğruladığını **entegrasyon oturumuna bildir**. **Commit etme.**
