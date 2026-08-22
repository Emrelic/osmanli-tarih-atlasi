# Tarih Atlası — her oturumun önce okuyacağı dosya

Bu dosya Claude Code tarafından oturum açılışında otomatik okunur. Projenin ne
olduğunu, nasıl çalıştığını, hangi kuralların **ihlal edilemez** olduğunu ve senin
oturumunun hangi dosyalara dokunabileceğini anlatır.

## Belge seti

| Belge | Ne anlatır | Ne zaman okunur |
|---|---|---|
| **`CLAUDE.md`** (bu dosya) | **Nasıl çalışılır** — kurallar, değişmezler, dosya sahipliği, tuzaklar, komutlar | **Her oturumda, baştan sona** |
| **`ONCELIK.md`** | **Neyi once, neyi hic** — col seyyahi ilkesi, alti butce kurali, cografi halkalar, zaman sirasi. 🔴 Kapsam istegi geldiginde ONCE BURAYA BAK ve gerekiyorsa ITIRAZ ET (`YASALAR G8`) | Kapsam/oncelik sorusu her ciktiginda |
| `YOL-HARITASI.md` | **Nereye gidiyoruz** — beş eksen, fazlar, bağımlılıklar | Her oturumda |
| `YAPILACAKLAR.md` | **Sıradaki işler** — öncelikli iş listesi | Her oturumda |
| `MIMARI.md` | **Motor ve teknik borç** — petek motoru, çözülmemiş beş sorun | Motora/veri modeline dokunacaksan **şart** |
| **`BES-ALTYAPI.md`** | **BEŞ ALTYAPI UNSURU — Emre'nin kendi beyanı (16 Ağu 2026).** Topoğrafya · yerleşim · bölge yaslanması · doğum-ölüm · koridor ağı. 🔴 `ALTYAPI.md §0`daki "üç iş" bunun ESKİ hâlidir, yerini BU alır | **Altyapı durumu sorulduğunda ÖNCE burası** |
| `VERI-YAPISI.md` | **Şemalar ve alan sözlüğü** — hangi alan ne demek | Veri yazacaksan **şart** |
| **`DURUM.md`** | **Neresi bitti, neresi eksik** — ölçülmüş durum raporu | İşe başlarken |
| **`OGRENILENLER.md`** | **Bu proje bize ne öğretti** — vakalardan çıkan kurallar | **Her oturumda** |
| `ETIKETLEME.md` | **Etiket ve ilinti tasarımı** — beş eksen, kimlik sözlüğü | Etiket/index isi yapacaksan |
| `oturumlar/*.md` | **Görev tanımları** — belirli bir oturumun işi | Sana ait olan varsa |

**Oturuma başlarken sırayla:**
1. Bu dosyayı baştan sona oku — özellikle §2 (motorun zayıf noktası), §3 (üç
   değişmez), §4 (kaynak kuralı) ve §7 (dosya sahipliği).
2. `YOL-HARITASI.md` ve `YAPILACAKLAR.md` — nerede durduğumuz ve ne yapılacağı.
3. İşinin cinsine göre `MIMARI.md` ve/veya `VERI-YAPISI.md`.
4. `oturumlar/` altında **senin oturumuna ait görev tanımı** varsa onu oku; asıl
   işin tarifi oradadır.
5. `git log --oneline -10` — son ne yapılmış.
6. §3'teki denetim komutlarını koştur; **çalışmaya temiz bir zeminden başla.**
   Sayılar §1.5'teki tabloyla uyuşmuyorsa bir şey bozulmuş demektir, önce onu söyle.

---

## 1. Proje nedir

Zaman göstergesi ilerledikçe devlet sınırlarının harita üzerinde değiştiği, yanında
kronolojik olay akışının ve dönemin hükümdarının aktığı **eğitim amaçlı statik web
sitesi**. Sunucu yok, veritabanı yok, derleme adımı yok — tarayıcı `data/` altındaki
düz JS dosyalarını okur.

- **Yayın**: https://emrelic.github.io/osmanli-tarih-atlasi/
- **Depo**: github.com/Emrelic/osmanli-tarih-atlasi — `main`'e her push otomatik yayınlanır
- **Harita kütüphanesi**: MapLibre GL JS 4.7.1 (CDN'den)
- **Çekirdek katman**: Osmanlı İmparatorluğu 1281–1923, **gün hassasiyetinde**
- **Hedef kapsam**: bütün dünya, nihai ufuk MÖ 12000 – MS 2026 (kademeli; bkz. §6)

Zaman çizgisi gündür: İstanbul haritaya 29 Mayıs 1453'te eklenir, 1453 yılında değil.

### Kullanıcı ekranda ne görüyor
- **Ortada harita.** Etiketsiz fiziki altlık üzerine devlet gövdeleri boyanır:
  Osmanlı doğrudan toprağı koyu, tâbi toprağı açık tonda; her yabancı devlet kendi
  renginde. Toprak büyüdükçe otomatik uzaklaşan bir yakınlaştırma var; lejantta o
  anki ≈km² yüzölçümü yazar. Üstte bölge seçici (Anadolu, Rumeli, Ege…).
- **Sağda panel.** Üstte dönemin padişah kartı ve portresi; altında o tarihe kadar
  akmış kronoloji listesi. Bir maddeye tıklanınca detay kartı açılır: gün, yer,
  kişiler, 2-4 cümlelik anlatım ve TDV bağlantısı.
- **Altta zaman çubuğu.** Oynat/duraklat, hız seçimi, "zaman akışı" ya da "olay olay"
  modu, ileri/geri olay atlama.
- **Dizin penceresi.** Kişiler, savaşlar, antlaşmalar, savaş serileri, şehirler ve
  devletler sekmeleri.

### Neden var
Amaç bir "sınır animasyonu" değil, **kronoloji ile haritanın birbirini doğruladığı**
bir öğretim aracı. Bir madde okunduğunda haritada tam olarak o değişimin görünmesi
gerekir. Projenin bütün kalite kuralları (§3) bu tek cümleden türer.

---

## 1.5 Bugün nerede duruyoruz

| Katman | Ölçülen durum |
|---|---|
| Yerleşim (motorun okuduğu) | **2603** nokta, 53 girdi dosyası |
| Kronoloji | **1223** madde · 1223 duygu etiketli · 811 `yer_id` · 26 `vefat_id` |
| Değişmez 1 — sahipsizlik | ✓ 2603 yerleşim, 214 sahipsiz (beklenen 214) |
| Değişmez 1b — iç boşluk | ✓ BEYANSIZ pencere arası boşluk: 0 (beklenen 0) · beyanlı 3/3 — tam tarama |
| Değişmez 2 — Osmanlı senkronu | ✓ 515 kırılma, 0 açık (beklenen 0) |
| Değişmez 2s — yabancı senkron | ✓ 945 YABANCI kırılması · 80 AÇIK (tavan 121) · 178 KAPSAM DIŞI |
| Değişmez 2i — işgal senkronu | ✓ 20 İŞGAL kırılması, 3 açık (tavan 3) |
| Değişmez 2t — kırılmasız madde | ✓ kırılmasız madde: 32 (tavan 42) — bilinen borç |
| Konum denetimi | 179 nokta PENCERE DIŞINDA — ihlal DEĞİL, pencere oraya açılana kadar BEKLEYEN veri |
| Devletler dizini | **431** künye · **400** renk (`renkler.py`) |
| Dizinsiz harita kimliği | 🔴 **1** kimlik / 2 pencere karşılıksız · *kapsam: `girdi.py`nin okuduğu 53 dosya — bağlanmamış partiler HARİÇ* |
| Padişah · kartvizit | 41 kayıt · 36 portre · **41** kartvizit dolu |
| Harita penceresi | `unary_union([box(-12, -11, 146, 82), box(-25, 60, -12, 82)])` |
| Yayın | **r2973** · `52c45dc` |

> ⚙️ **BU TABLO ELLE YAZILMAZ — ÜRETİLİR.**
> ```bash
> py arac/durum_tablosu.py          # ekrana bas
> py arac/durum_tablosu.py --yaz    # §1.5'i yerinde güncelle
> ```
> Değişmez satırlarını uydurmaz, **`denetle.py`ye sorar.** Yani tablo ile denetim
> asla ayrışamaz. Bir oturum tabloya güvenmeden önce bu komutu koştursun —
> koşturmak 15 saniye, yanlış zeminden başlamak bir gün.

🔴 **VE BU İKİNCİ KEZ OLDU — 4 Ağustos'ta ALTI SAYI BİRDEN.**
```
yerleşim   976 → 1713      kronoloji  1009 → 1141
dizin      213 →  302      renk        104 →  233
pencere    box(-12,1.5,62,62) → L şekli
"isg: örtüsü üretilmemiş"  → ÜRETİLİYOR, 9 kayıt, taralı desenle çiziliyor
```
Ve o gün **üç oturum** (ÇAPRAZ AKDENİZ · ÇAPRAZ GÜNEY · MOTOR 2) aynı anda bu
tablodan başladı. ÇAPRAZ AKDENİZ farkı kendi ölçtü ve *"taban değişmiş: 976 →
1713"* diye rapor etti; ötekiler sormasa yanlış zeminden ölçeceklerdi.
📌 **Bir kez bayatlayan belge tekrar bayatlar — çare yeni bir satır değil,
satırı ELLE YAZILMAKTAN ÇIKARMAKTIR.** Yukarıdaki betik onun için yazıldı.

🔴 **1 Ağustos 17:15 — bu tablo DÖRT SAYIDA BİRDEN BAYATTI ve bir oturum
onu ölçüm tabanı olarak kullanmayı REDDETTİ.** NOKTA EKLEME oturumu şunu
yazdı:
> *"**'denetle.py temiz' bu partinin kabul ölçütü OLAMAZ**"* — çünkü zemin
> zaten kırmızıydı (`2` 1 açık · `2s` 116 · `2t` 50) ve tablo `764 · 433 ·
> 34 · AÇIK 0` diyordu.

⇒ Partiyi **canlıymış gibi ayrıca ölçtüler**: ad çakışması · dönem sağlığı ·
`Değişmez 1` günlük tam tarama · 3 km en yakın çift · maske testi · renk
varlığı. **Bayat bir tabloya güvenmek yerine kendi tabanını kurmak** doğru
davranıştı.

📌 Ve `§5`'teki *"bayat satır bir araştırma oturumunu yanılttı"* dersinin
**ikinci vakası** — bu sefer oturum yanılmadı, **tabloyu yanlış ilan etti.**

## 1.6 Kapsam disiplini

Proje yedi boyutta genişler: **1 tarih çizgisi · 2 coğrafi kapsam · 3 devletler ·
4 devlet kronolojileri · 5 yerleşimler ve bölgeleri · 6 kişiler · 7 olaylar**.
Sekizinci bir boyut daha vardır — **konu başlıkları** (askerî, sosyal, bilim,
kültür, din, felsefe) — ve **kasten kapalıdır**. Ayrıntı: `YOL-HARITASI.md`.

> **Şu anda konumuz DEVLETLER ve SINIRLARIDIR.**
> 8. boyut (askerî yapı, sosyal yapı, bilim-teknoloji, kültür-sanat, felsefe, din)
> sonraki fazların işidir. Bir oturum oraya girmeye kalkarsa kapsamı aşıyor demektir.

Sıradaki işler ve öncelikleri: **`YAPILACAKLAR.md`**.

---

## 2. Petek motoru — ve tek zayıf noktası

Sınırlar elle çizilmez, hazır atlas kesitlerinden de gelmez. Her yerleşim
çevresindeki toprağı temsil eden bir **petek** (Voronoi hücresi) sahibidir. Petek
sınırı komşuların tam ortasından geçer, sonra gerçek kıyı çizgisine, nehir yataklarına
ve dağ sırtlarına yaslanır, Chaikin ile yumuşatılır, Natural Earth kara maskesiyle
kesilir, 89 göl çıkarılır (28 modern baraj gölü KASTEN bırakılır — anakronik delik açıyorlardı). Bir yerleşim el değiştirince peteği bütün olarak değişir.

Bütün geometri `data/yerlesimler.js`'ten **her gün için yeniden** üretilir.

> ### ⚠️ Bu projedeki hataların çoğunun tek sebebi
> **Noktası olmayan bölge, en yakın peteğe emilir ve O PETEĞİN SAHİBİYLE boyanır.**
>
> Gerçekleşmiş örnekler: Sardinya 1533'te Osmanlı göründü (Annaba'nın peteğine
> düşüyordu). Kefalonya 1684'e kadar Osmanlı kaldı (Ayamavra'dan). Brač, Hvar,
> Korčula 1483'ten itibaren Osmanlı oldu (Mostar'dan). Ordu-Ünye kıyısında hiç nokta
> olmadığı için Hacıemîroğulları haritada hiç görünmedi.
>
> **Bir "harita yanlış" raporu geldiğinde ilk sorulacak soru budur: o bölgede
> yerleşim noktası var mı?** Cevap hayırsa hata orada, kodda değil.

---

## 3. İhlal edilemez değişmezler

Her veri değişikliğinden sonra üçü de denetlenir. Denetim betikleri geçici
dosyalardır; aşağıdaki komutlar kendi kendine yeterlidir.

### Değişmez 1 — Sahipsizlik yok
Hiçbir yerleşim, var olduğu bir tarihte sahipsiz kalmamalı. Sahipsiz nokta haritada
delik demektir.

```bash
node -e "global.window={};eval(require('fs').readFileSync('data/yerlesimler.js','utf8'));const Y=window.YERLESIMLER;const iR=(a,g)=>a&&a.some(p=>p.f<=g&&g<p.t);const b={};for(let y=1300;y<=1920;y+=20){const g=y+'-06-15';for(const t of Y){if(t.kur&&t.kur>g)continue;if(iR(t.d,g)||iR(t.s,g)||iR(t.v,g))continue;(b[t.ad]=b[t.ad]||[]).push(y);}}console.log('yerlesim:',Y.length,'| sahipsiz:',Object.keys(b).length);for(const [a,ys] of Object.entries(b))console.log('  '+a.padEnd(24)+ys.join(','));"
```

**Şu an: 764 yerleşimin 34'ü sahipsiz ve hepsi KASTEN öyle** — Sahra ve Rub'ul Hâlî
çölleri, 1744 öncesi Necid, körfez şeyhlikleri. Bunlar boş kalması *doğru* olan
yerlerdir; çölün emilip Osmanlı boyanmasını engellemek için konmuş dolgu
noktalarıdır. **Sayı 34'ün üstüne çıkarsa yeni bir delik açılmış demektir.**

⚠️ Yukarıdaki tek satırlık komut 1300'den başlar; **kuruluş devrini hiç örneklemez.**
İnegöl ve Bilecik'in 1281-1299 arası sahipsizliği tam bu yüzden aylarca görülmedi.
Gerçek denetim `arac/denetle.py`'dedir ve 1285/1290/1295 kesitlerini de alır — bu
komut yalnız hızlı bir bakış içindir.

### Değişmez 2 — Sessiz toprak değişimi yok
Haritadaki her kırılmanın (bir `d:` ya da `v:` döneminin başı veya sonu) **±30 gün
içinde** bir kronoloji maddesi olmalı. Yoksa değişim, o güne rastgele denk gelen
alakasız bir maddenin altında belirir — kullanıcının en çok şikâyet ettiği hata bu.

```bash
node -e "const fs=require('fs'),K='data/';global.window={};for(const f of ['olaylar.js','olaylar_ek.js','olaylar_ek2.js','olaylar_ek3.js','olaylar_ek4.js','olaylar_ek5.js','olaylar_ek6.js'])eval(fs.readFileSync(K+f,'utf8'));const O=Object.keys(window).filter(k=>k.startsWith('OLAYLAR')).flatMap(k=>window[k]);global.window={};eval(fs.readFileSync(K+'yerlesimler.js','utf8'));const Y=window.YERLESIMLER;const tam=s=>s.length===7?s+'-01':s,g=s=>Math.round(Date.UTC(+s.slice(0,4),+s.slice(5,7)-1,+(s.slice(8,10)||1))/864e5);const ol=O.map(o=>({g:g(tam(o.t)),b:o.b}));const kir={};for(const y of Y)for(const p of (y.d||[]).concat(y.v||[]))for(const [d,t] of [[p.f,'kazanc'],[p.t,'kayip']]){if(!d||d<='1281-01-01'||d>='1923-10-29')continue;(kir[d]=kir[d]||{t,ad:new Set()}).ad.add(y.ad);}const H=Object.keys(kir).sort(),ac=[];for(const d of H){const gd=g(d),e=ol.reduce((a,o)=>Math.abs(o.g-gd)<Math.abs(a.g-gd)?o:a,ol[0]);if(Math.abs(e.g-gd)>30)ac.push([d,kir[d].t,[...kir[d].ad].slice(0,4).join(', '),e.b]);}console.log('kirilma:',H.length,'| ACIK:',ac.length);for(const r of ac)console.log('  '+r.join('  |  '));"
```

**Şu an: 433 kırılmanın 433'ü maddeli, AÇIK = 0.**

> Tarihsel not: bir ara "238/238 maddeli" deniyordu; o ölçüt fazla gevşekti.
> Ölçüt ±30 güne çekilince 51 maddesiz kırılma ortaya çıktı ve hepsine madde yazıldı
> (`olaylar_ek6.js`). **Ölçütü gevşetme.**

### Değişmez 3 — Dört boyut birbiriyle çelişmez 🟡 henüz sağlanmıyor
Verinin dört boyutu var: **tarih × yerleşim × petek × bölge**. Herhangi bir tarihte,
herhangi bir bölgede "hangi yerleşimler var ve kime aitler" sorusunun **tek tutarlı
cevabı** olmalıdır.

Bu değişmez bugün **sağlanmıyor**, çünkü bölge boyutunun (`k`/`m` alanları) zaman
boyutu yok: bir yerleşim bütün tarih boyunca tek bir merkeze bağlı. Ölçüldü —
**359 yerleşim-tarih çiftinde yerleşim ile bağlı olduğu merkez farklı devletlerin
elinde** (1300'de Söğüt Osmanlı ama `m:"Bursa"` ve Bursa Bizans gibi).

⚠️ **Bu satır 8 Ağustos 2026'da 311 → 359 düzeltildi** — sayı veri büyüdükçe
büyüyor, yani `B3`: *belgedeki sayı ölçüm değil, ölçümün fotoğrafıdır.*
🔴 **Ve asıl teşhis o gün kondu (`BOYUTLAR.md`):** kusur `m:` alanının
güncellenmemesi değil, **`m:`nin yanlış eksende olması.** `m:` bir **idarî
merkez** tutuyor — yani **siyasî** bir şey — ama **coğrafî** bir gruplama için
kullanılıyor. ⇒ Mekân ekseni (M) ile konu ekseni (K) birbirine karışıyor ve
**ikisi de bozuluyor.** Doğrusu: `m:` coğrafî alan göstermeli (Bitinya, Trakya),
idarî bağ ise K-siyasî'nin bir katmanı olmalı **ve zaman boyutu taşımalı.**

Bugün görsel hataya dönüşmüyor çünkü bölge katmanı yalnız Osmanlı dönemlerinde
çiziliyor. **Dünya kapsamında her devletin idari kademesi gerekecek ve o zaman bu
model çöker.** Ayrıntı ve çözüm: `YOL-HARITASI.md` §6.5.

⚠️ **`OSMANLI` ile `tâbi` çelişki SAYILMAZ.** İkisi de Osmanlı sistemi içindedir ve
ayrımın bilerek yan yana durduğu yerler var: Boğdan voyvodalıktır ama Hotin rayası
doğrudandır, Kırım Hanlığı tâbidir ama Kefe sancağı doğrudandır, Erdel prensliktir
ama Varad eyalettir. `denetle.py` bu çifti muaf tutuyor.

---

## 3.5 Denetimin GÖRMEDİĞİ hata sınıfı — hayalet devletler

Üç değişmez de "sahip var mı / maddesi var mı / merkeziyle uyuyor mu" diye sorar.
Hiçbiri **"bu devlet o tarihte yaşıyor mu"** diye sormaz. Bu yüzden veri denetimi
temiz raporlarken harita yıllarca var olmayan devletleri boyayabiliyor:

| Kayıt | Yazılan | Devletin gerçek sonu | Fazlalık |
|---|---|---|---|
| Batnoz (Patmos) | `bizans` 1537'ye kadar | 1453-05-29 | **84 yıl** |
| İbrim | `memluk` 1555'e kadar | 1517-04-13 | 38 yıl |
| Sevâkin, Masavva, Dahlak | `memluk` 1557'ye kadar | 1517-04-13 | 40 yıl |
| Tebriz, Hemedan, Bağdat ve 70 kayıt | `iran` 1501-1736 arası | Safevî dönemi | **235 yıl** |

İlk ikisi haritada **hayalet etiket** üretiyordu: kullanıcı 1482 ve 1499 ekran
görüntülerinde Ege'de "BİZANS", 1550 görüntüsünde Nil'in güneyinde "MEMLÜK" yazısı
gördü. Üçüncüsü daha beteri: Safevî İmparatorluğu'nun coğrafyası iki ayrı devlet
gibi görünüyordu — kocaman bir tan renkli "İRAN" ve Van'ın doğusunda avuç kadar bir
"SAFEVÎ İRAN". Kullanıcı sordu: *"Van civarında Safevîler İran'a hâkim
değiller miydi?"*

**Kural: yeni bir `s:` dönemi yazarken devletin ömrünü kontrol et.**
`data/devletler.js` her devletin `f`/`t` aralığını tutuyor. Bölgesel teslim
gecikmeleri meşrudur (Mekke'nin memlûk dönemi 1517-07-06'da biter, devlet
04-13'te yıkılmıştır) ama yıllar değil aylar mertebesinde olmalıdır.

Bu, dördüncü bir değişmez olarak araca girecek — `YAPILACAKLAR.md`.

### 3.5.1 🔴 TERS YÖN — "OSMANLI FAZLA MI GÖRÜNÜYOR?"

Yukarıdaki tablonun **her satırı fazladan boyanan YABANCI devleti ölçüyor.**
On beş oturum boyunca kimse şunu sormadı:

> **Osmanlı, olmadığı yerde ve olmadığı tarihte boyanıyor mu?**

Bir Osmanlı tarih atlasının en kolay yanılgısı budur ve tablo ona **kör.**
1 Ağustos'ta ÇAPRAZ DOĞU sordu ve Kızıldeniz'de buldu:

```
İbrim                     d: 1517-04-13'ten   TDV sancak 1573    ~55,7 yıl
Sevâkin                   d: 1517-04-13'ten   sancak beyi 1554-04-10  ~37,0 yıl
Akîk · Halâib · Tokar · Sinkat   aynı desen   Habeş Eyaleti 1555-07-05  ~38,2 yıl
TDV habes-eyaleti: "Bu kıyı toprakları 1517'de Memlükler'den DEVRALINMADI."
```

⚠️ **Ve bu satırlar yukarıdaki tablonun İbrim/Sevâkin satırları düzeltilirken
DOĞDU.** Memlük fazlalığı 1517'ye çekildi, boşluk Osmanlı ileri sarılarak
kapandı — **hayalet yok olmadı, taraf değiştirdi.** Sebebi `OGRENILENLER §72`:
`Değişmez 1` *"kimsenin değildi"* cevabını ifade edemiyor, o yüzden veriyi en
yakın komşuya itiyor.

> **KURAL: Bir sınır kayması önerildiğinde iki uç da ölçülür.** *"Bu tarafta
> fazlalık var mı"* yetmez; **"öbür tarafta fazlalık doğuyor mu"** da sorulur.
> Tek uçtan bakan düzeltme, hatayı taşır — silmez.

#### 🔴 VE BU BAŞLIĞIN KENDİSİ TEK YÖNLÜYDÜ — 1 Ağustos'ta düzeltildi

Başlık *"Osmanlı fazla mı görünüyor?"* diye soruyor. ÇAPRAZ BATI Yukarı
Macaristan'ı ölçtü ve **sorunun da tek yönlü olduğunu** gösterdi:

```
Yukarı Macaristan   noktasız → komşusu OSMANLI  → Osmanlı FAZLA görünüyor
                    ~28.000 km² · 91 yıl (1596-1687)
Gyula               noktasız → komşusu tâbi     → Osmanlı EKSİK görünüyor
                    1566'da fethedilip sancak merkezi olmuş
```

> **Noktasızlık İKİ YÖNE de hata üretir, ve hangi yöne ürettiği tamamen
> KOMŞUNUN KİMLİĞİNE bağlıdır.** Tek yönlü aramak (*"fazla mı"*) yarısını
> kaçırır.

📌 Ve ikisinde de **kusur veride değil**: kayıtlar doğru, motor doğru, `§2`
emilme kuralı doğru çalışıyor. **Kusur NOKTASIZLIKTA** — `§2`'nin *"bir
'harita yanlış' raporu geldiğinde ilk sorulacak soru budur"* dediği vaka.
~~Koordinatör doğruladı: `48,0-49,6°K / 18,8-22,6°D` kutusunda **sıfır nokta**;
Kassa · Tokaj · Eperjes · Sopron · Gyula'nın **hiçbirinin kaydı yok.**~~

> 🟢 **BU İKİ SATIR ARTIK YANLIŞ — BORÇ KAPANDI (10 Ağustos 2026).**
> Bir işçi oturum (KUTU DENETİM) belgeyi çürüttü, koordinatör **doğruladı**:
> ```
> Kassa (Košice)   48,71 · 21,26      Sopron   47,71 · 16,60
> Eperjes (Prešov) 49,00 · 21,24      Gyula    46,63 · 21,29
> Tokaj            48,12 · 21,41
> aynı kutuda artık 3 nokta — belge "SIFIR" diyordu
> ```
> ⚠️ **Ve zararı ölçülebilir cinstendi:** bu paragraf bir *"yapılacak iş"* gibi
> duruyordu. Bugün bir oturum onu okuyup Yukarı Macaristan'a nokta yazmaya
> kalksaydı **beş mükerrer nokta** üretecekti — `§11`in *"yakın mükerrer
> yerleşim"* tuzağı, üstelik **belgenin kendi daveti üzerine.**
>
> 📌 **`§1.5` bayatlama ailesinin ÜÇÜNCÜ yüzü.** Orada bayatlayan bir TABLO'ydu
> ve çare onu elle yazılmaktan çıkarmaktı. Burada bayatlayan bir **ANLATI**:
> dersin kendisi (*noktasızlık İKİ YÖNE de hata üretir*) hâlâ **doğru** ve
> değerli — bayatlayan yalnız **vakanın bugünkü durumu.**
> ⇒ Ders SİLİNMEDİ, vakanın durumu DAMGALANDI. Bir vakayı silmek dersi de
> siler; damgalamak dersi korur.
>
> 🔴 Ve bunu bulan şey bir denetim betiği değil, **başka bir bağlamdan bakan
> bir oturumdu** — `§7`nin ÇAPRAZ gerekçesinin canlı kanıtı: *koordinatörün
> hatalarını ÇAPRAZ yakalıyor, denetim betiği yakalamıyor.*

⚠️ Ve aynı sınıfın bugün ölçülen öteki vakaları: **Dalmaçya anakarası** (0
nokta, Karlofça'nın yedi kalesi yok) · **Girit'in üç kalesi** (Suda ·
Spinalonga · Granbosa yok, ada 1669'dan beri bütünüyle Osmanlı boyanıyor).
**Üçü de aynı sebep, üçü de on binlerce km².**

📌 Ve fetih tarihini yazarken ayırt et: **devletin yıkılışı ≠ o yerin fethi.**
1517-04-13 Memlük Devleti'nin sonudur; Kızıldeniz kıyısının, Nûbe'nin, Habeş'in
fethi **değildir.** Merkez düştü diye çevre otomatik devrolmaz.

Ölçüm komutu (Değişmez 3):
```bash
node -e "global.window={};eval(require('fs').readFileSync('data/yerlesimler.js','utf8'));const Y=window.YERLESIMLER,ix={};for(const y of Y)ix[y.ad]=y;const S=(y,g)=>{for(const p of (y.d||[]))if(p.f<=g&&g<p.t)return'OSMANLI';for(const p of (y.v||[]))if(p.f<=g&&g<p.t)return'tabi';for(const p of (y.s||[]))if(p.f<=g&&g<p.t)return p.d;return'—';};let n=0;for(const g of ['1300-06-15','1400-06-15','1500-06-15','1600-06-15','1700-06-15','1800-06-15'])for(const y of Y){if(!y.m)continue;const m=ix[y.m];if(!m)continue;const a=S(y,g),b=S(m,g);if(a!=='—'&&b!=='—'&&a!==b&&!(a==='OSMANLI'&&b==='tabi')&&!(a==='tabi'&&b==='OSMANLI'))n++;}console.log('merkezi ile farkli devlette olan yerlesim-tarih cifti:',n);"
```

---

## 4. Kaynak kuralı

- **İslâm dünyası, Osmanlı ve komşuları için birincil kaynak TDV İslâm
  Ansiklopedisi'dir** (islamansiklopedisi.org.tr). TDV maddesi varsa başkasına
  dayanma; çelişirse TDV esastır.
- **TDV'nin kapsamadığı coğrafyalar** (Doğu Asya, Amerika, Sahra altı Afrika,
  Okyanusya, Avrupa'nın iç tarihi) için standart akademik referans yeterlidir.

### 🔴🔴 KIRMIZI ÇİZGİ — DIŞARI ÇIKINCA NEREYE (kullanıcı beyanı, 9 Ağustos 2026)

> *"TDV dışına çıkabilirsin ama gideceğin kaynaklar **AKADEMİK, GÜVENİLİR ve
> BİLİMSEL** olmalı. İnternetteki saçma sapan bir sürü içeriğe güvenilmesin.
> Bu projede kırmızı çizgi olarak hep akademik bilimsel güvenilir kaynaklara
> başvuralım."*

Bu kural **bugüne kadar yazılı değildi** ve boşluğu ölçülmüş bir vakada
görüldü: `§4`ün *"standart akademik referans yeterlidir"* cümlesi **kapıyı**
tarif ediyordu, **dışarısını** değil. Tanımsız bir *"standart akademik"*
ifadesi, boşluğu **arama sonuçlarının ilk sayfasıyla** doldurur.

```
🟢 KABUL      Encyclopaedia Iranica · Cambridge History serileri ·
              üniversite yayınları · hakemli dergi makalesi · alanın
              standart el kitabı · birincil kaynak neşri/çevirisi
🔴 KULLANILMAZ  forum · blog · içerik çiftliği · kaynaksız derleme site ·
              yapay zekâ üretimi metin · "tarih sayfası" tipi popüler site
🟡 Vikipedi   TEK DAYANAK DEĞİL — yalnız "hangi maddeye bakayım" sorusunu
              cevaplar (bu kural zaten aşağıda yazılıydı, burada tekrarı
              kasıtlı: dışarı çıkış listesinin İÇİNDE görünmesi gerekiyor)
```

⚠️ **Ve üçüncü şart ikisini de denetlenebilir kılar: KAYNAK GİZLENMEZ.**
Hangi kaynağa dayanıldığı `kaynak:` alanına **açıkça** yazılır; bulunamadıysa
`bulunamadı` diye yazılır. **Kaynağı yazılmayan bilgi, kaynağı olmayan
bilgiden ayırt edilemez.** (Loango · Luba · Kuba · Kert künyelerinde
uygulanmış biçimi budur.)

📌 Ve reddedilen küme, kabul edilen kümeden değerlidir: *"akademik kaynak
kullan"* olumlu bir tarif olarak neredeyse boştur — herkes kendi bulduğunu
akademik sanır. Sınanabilir olan, **neyin kullanılmayacağıdır.**

- **Vikipedi hiçbir zaman tek dayanak değildir.** "Hangi olaya bakmalıyım" sorusunu
  cevaplar; tarih oradan alınıp doğrulanmadan yazılmaz.
- **Tarih uydurma.** Gün bilinmiyorsa `YYYY-01-01` yaz — bu, "yıl biliniyor, gün
  bilinmiyor" demenin kabul edilmiş yoludur.

### ⚠️ TDV ölü slug tuzağı — projede en çok hata bunun yüzünden çıktı

`islamansiklopedisi.org.tr/<slug>` olmayan slug için sessizce arama sayfasına
yönlendirir. **"Sayfa açıldı" demek "madde var" demek değildir.**

🔴 **İKİ AYRI TUZAK VAR ve testleri farklı. Karıştırma.**

**① ÖLÜ SLUG — madde YOK.** İki işaret de ele verir, **en ucuzu HTTP kodu**:
```bash
curl -s -o /dev/null -w "%{http_code}" https://islamansiklopedisi.org.tr/<slug>
# 302 → ÖLÜ (arama sayfasına yönleniyor)      200 → madde VAR
```
> `<title>` testi de çalışır ama **`-L` şart** (yönlendirmeyi izlemeli);
> izlenmiş sayfanın başlığı **"Arama - TDV İslâm Ansiklopedisi"** ise madde YOKTUR.

⚠️ **Bu satır 6 Ağustos 2026'da DÜZELTİLDİ.** Önceki hâli *"olmayan slug için
de HTTP 200 döndürür"* diyordu ve **ölçülünce yanlış çıktı**: denenen on bir
ölü slugun (`corlu · kertler · cobanlilar · haciemirogullari · parga ·
nihavend · cildir · hurmuz · derbend · samahi · incular`) **on biri de 302**
döndürdü. ÇAPRAZ İRAN 302 biçimini bildirdi, ölçüm belgeyi düzeltti.
📌 Yani tek istekle, gövde ayrıştırmadan karar verilebiliyor — eski belge
gereksiz yere pahalı bir test öğretiyordu.

**② CANLI SLUG, YANLIŞ MADDE — ve bu testi GEÇER.**
`ordu` HTTP **200** döndürür, `<title>` **"ORDU"** yazar, iki test de temiz —
ama açılan madde **askerî ordu**dur, şehir maddesi `ordu--sehir`'dir.

🔴 **VE BU DESEN ÜÇ KEZ ÖLÇÜLDÜ — üçü de `<title>` testini GEÇİYOR:**
```
ordu     200 · "ORDU"     → askerî ordu       doğrusu  ordu--sehir
saray    200 · "SARAY"    → mimarî saray      doğrusu  saray--sehir
                            (Altın Orda başkenti)
mogadisu 200 · "MOGADİŞU" → İÇİ BOŞ           doğrusu  makdisu
```
⚠️ **Üçüncüsü ayrı bir alt-sınıf:** slug canlı, başlık doğru, **ama gövde
boş.** Yani `<title>` testi *"yanlış madde"*yi de *"boş madde"*yi de
geçiriyor. **Tek çare içeriği OKUMAK.**
⇒ Kod ve başlık *maddenin var olduğunu* söyler, **doğru madde olduğunu
söylemez.** Onu yalnız **içeriği okumak** ele verir.

🔴 **DÖRDÜNCÜ VAKA — `cin` (8 Ağustos 2026):** slug canlı, ama açılan madde
**cin/fıkıh terimi**dir; ülke maddesi **`cin--ulke`**'dir. `ordu` →
`ordu--sehir` ve `saray` → `saray--sehir` deseninin birebir tekrarı.
📌 **Desen artık dörtlendi ve kuralı var: TDV'de bir ülke/şehir adı başka bir
kavramla çakışıyorsa, ülke maddesi `--ulke` / `--sehir` sonekindedir.**

### 🔴 AYNI TUZAĞIN KİMLİK TARAFI: **TÜRKÇE YAZIM EKSENİ**

8 Ağustos 2026'da ölçüldü. Bir kimliği **İngilizce/yerel yazımıyla** aramak,
**Türkçe yazılmış künyeyi bulmaz** — ve "bulunamadı" hükmü yanlış çıkar:
```
aranan      gerçek `id:`              künye adı
aceh    →   ace-sultanligi            Açe Sultanlığı
gowa    →   gova-makassar             Gova (Makassar)
pattani →   malay-sultanliklari       (Kedah · Patani · Perak — TOPLU künye)
dai-viet→   le · mac · tran · ho · tay-son …   (HÂNEDAN künyeleri)
```
⚠️ Son ikisi ayrı bir alt-sınıf: kimlik **var** ama **başka bir taneciklikte**
— toplu künye ya da hânedan künyeleri hâlinde.
⇒ **Kural:** `d:` yazarken kendi transliterasyonunu değil, `devletler.js`teki
**gerçek `id:`yi** kullan. Ve *"bu kimlik yok"* demeden önce **`bolge:` alanını
tara** — elle yazılmış bir aday listesi gerçek kümenin %40'ını kaçırabiliyor
(ölçüldü: 33 elle · 55 gerçek).

### 🔴 KAPSAM BOŞLUĞU İKİ CİNSTİR: COĞRAFÎ ve TANECİKLİK

`§4` *"TDV'nin kapsamadığı **coğrafyalar** için standart akademik referans
yeterlidir"* diyor. **8 Ağustos 2026'da bu kuralın bir boşluğu ölçüldü:**

> NOKTA KALİTE-4: *"İran'ı TDV kapsıyor — ama **küçük kasaba özelinde**
> kapsamıyor. Bu farklı bir durum, netleştirmek istiyorum."*

Ölçüm: `kirman` (57 KB) ve `yezd` (61 KB) maddeleri **il düzeyinde zengin**
ama sancak kasabalarının kendi kuruluş/fetih tarihini taşımıyor; kasaba
slugları (`zerend` · `langerud` · `fuman` · `rudbar`) **tek başına ölü.**

```
COĞRAFÎ boşluk      TDV o bölgeyi hiç görmüyor        (Batı Avrupa %0)
TANECİKLİK boşluğu  TDV bölgeyi görüyor ama O KADAR
                    İNCE taneciklikte konuşmuyor      ← YENİ, ölçüldü
```

⇒ **HÜKÜM: ikisi de aynı muameleyi görür.** Kuralın ruhu *"TDV konuşuyorsa
onu dinle, konuşmuyorsa uydurma"*dır — ve TDV **o tanecikte** susuyorsa,
standart akademik kaynak **meşrudur.** Şartı aynı: `kaynak:` alanına
**açıkça** yazılır (`"bulunamadı — TDV bu taneciği kapsamıyor, dayanak:
standart akademik kaynak"`), gizlenmez.
📌 Bu, Loango/Luba/Kuba künyelerinde zaten uygulanan biçimin ta kendisi;
yeni olan **coğrafya değil TANECİK** gerekçesiyle de geçerli olması.

### ⚠️ VE YENİ BİR TUZAK ALT-SINIFI: canlı slug + BOİLERPLATE gövde

`mazenderan` çekildi: **80 KB ham HTML'in tamamı header/arama JS/CSS**,
madde gövdesi **hiç gelmedi** — *"Safevî" · "Kiyâ" · "Mer'aşî"* kelimelerinin
hiçbiri metinde yok. Aynı yöntemle `gilan` · `kirman` · `yezd` **düzgün
geldi**, yani yöntem kusuru değil.
```
① ölü slug        302
② canlı slug, yanlış madde    200 + yanlış başlık   (ordu · saray · cin)
③ canlı slug, BOŞ gövde       200 + doğru başlık    (mogadisu)
④ canlı slug, BOİLERPLATE gövde  200 + doğru başlık ama içerik HİÇ GELMEZ  ← YENİ
```
📌 ③ ile ④ farklı: ③'te madde gerçekten boş, ④'te **madde var ama alınamıyor**
(muhtemelen sayfa boyutu / geç yüklenen içerik). ⇒ ④'te *"TDV'de yok"*
demek **yanlış** olur; doğru hüküm *"çekilemedi, tekrar denenecek"*.

### 🟢 VE TERSİ DE VAR: dar slug tutmazsa GENEL maddeyi dene

`kaynak:` partisinde ölçüldü. Grup 2 (İtalya · Doğu Asya · Amerika) pilotta
**0/6** vermişti ve *"bu coğrafyalar TDV kapsamı dışı"* sanıldı. Kayıt başına
**iki deneme** sınırıyla yeniden arandı:
```
2. denemede tutan: 10/17  (%59)   ⇒ "%0" ÖRNEKLEM GÜRÜLTÜSÜYMÜŞ
```
**Sebep:** denenen sluglar dar **kurum adlarıydı** (`milano-dukaligi` · `cin` ·
`peru`); oysa TDV'nin **genel ülke/kıta maddesi** aynı konuyu kapsıyordu
(`italya` · `cin--ulke` · `amerika`).
🔴 En çarpıcısı: **TDV'nin tek bir `amerika` (kıta) maddesi İnka · Meksika-Aztek ·
Peru · Brezilya'nın hepsini somut tarihle kapsıyor — beş kayıt tek maddeden
doğrulandı.**
⇒ **Kural: dar slug tutmazsa, kapsayıcı maddeyi dene.** Ve *"TDV bu coğrafyayı
kapsamıyor"* hükmü, **genel madde denenmeden verilemez.**

**Ölçülmüş kapsama sınırı** (381 künyenin tamamı tarandı): Kafkasya · Anadolu ·
İran · Orta Asya · Balkanlar · Mısır-Sudan · Afrika'nın dördü · Amerika'nın üçü
**%100** · Arabistan %86 · İberya %80 · Sibirya %75 · Güney Asya %57 ·
Güneydoğu Asya %53 · **Batı Avrupa %0** (İskoçya · İrlanda · Lüksemburg ·
Bretanya · Burgonya — TDV'de gerçekten yok).

Doğru slug'ı bulmak için: `https://islamansiklopedisi.org.tr/arama/?q=<kelime>`

Yaşanmış örnekler: `ordu` askerî ordu maddesini açar, şehir maddesi `ordu--sehir`'dir.
`haciemirogullari`, `parga`, `canik`, `asir`, `preveze`, `derbend`, `samahi`,
`salih-reis` diye madde **yoktur**.

**ÖLÜ olduğu ölçülmüş sluglar** (2026-07-30 turunda `<title>` ile sınandı):
`cildir` (doğrusu `cildir-eyaleti`) · `selimiye-camii-ve-kulliyesi` ·
`ferhad-pasa-antlasmasi` · `nihavend` · `burucird`.

**6 Ağustos 2026 turunda ölçülenler** (HTTP kodu + `<title>`, ikisi birden):
```
🔴 ÖLÜ    corlu · kertler · cobanlilar · incular · kutlug-hanlilar ·
          mihrabaniler · hurmuz · derbend · samahi
🟢 CANLI  selim-i · mehmed-vi · vahdeddin · herat · merv · seybaniler ·
          timur · muzafferiler · celayirliler · serbedariler · gilan ·
          marasiler · taberistan · incu · kutlughanlilar · sistan ·
          huzistan · semerkant · buhara · taskent · hokand · belh ·
          ilhanlilar · hurmuz--iran · benderabbas · nisabur--iran
```
📌 Desen tekrar tekrar çıkıyor (`§4③`): **kaynak vardı, adres yanlıştı.**
`hurmuz` ölü ama `hurmuz--iran` canlı · `incular` ölü ama `incu` canlı ·
`kutlug-hanlilar` ölü ama `kutlughanlilar` canlı · `nisabur` ölü ama
`nisabur--iran` canlı. ⇒ **"TDV'de yok" demeden önce ARA.** Bir künyede
*"TDV'de madde bulunmadığı için ertelendi"* yazıyorsa, o erteleme bu tuzağa
düşmüş olabilir — `data/devletler.js` `uman` künyesinde gerçekleşmiş vaka var.
> ⚠️ Ferhat Paşa Antlaşması'nın TDV'de **müstakil maddesi yok**; hükümleri yer
> maddelerinden toplanır. TDV'deki adı "İstanbul antlaşması" olarak geçiyor
> (`luristan` maddesi: "998'de (1590) İstanbul'da yapılan antlaşma").

**CANLI olduğu ölçülmüş sluglar** (aynı tur, `kaynak:` alanlarındaki kümeye ek):
`fizan` · `nahcivan` · `sehrizor` · `limni` · `azak` · `kamanice` · `ukrayna` ·
`sirvan` · `cildir-eyaleti` · `karayazici-abdulhalim` · `kirmansah` · `dagistan` ·
`murad-iii` · `ferhad-pasa` · `sultan-ahmed-camii-ve-kulliyesi` · `luristan` ·
`hemedan`.

**8 Ağustos 2026 turunda ölçülenler** (HTTP kodu; beşi ayrıca **gövdesi okundu**):
```
🟢 CANLI   darfur · sadiler · mevlay-ismail · filaliler · cezayir · kabiliye ·
           fransa · magrib · miknas · titvan · sicilmase · darulbeyza · sus ·
           merakes · rabat · atlas · tahert · mizab · benzert · nefuse ·
           fizan · trablusgarp · bingazi · berka · derne
🔴 ÖLÜ     badis · arais · el-arais · larache · mehdiye · mamura · huseyme ·
           alhucemas · tuvat · tidikelt · gurare · bessar · ayn-salih ·
           dar-fur · sadiler-hanedani · fas--sehir · fransa-ihtilali ·
           fransiz-ihtilali · napolyon
```
📌 **Gövde okumak kodu okumaktan başka şey söyledi ve ikisi de gerekliydi.**
Beş maddenin gövdesi kırılma günlerini **doğrudan verdi** — tarih uydurmaya
hiç gerek kalmadı:
```
sadiler        "Fas'ta hüküm süren bir İslâm hânedanı (1511-1659)"
               "Muhammed eş-Şeyh ... Vattâsî hâkimiyetine son verdi (956/1549)"
               "İspanyollar'ın Bâdis'i ele geçirmesi ... (1564)"
darfur         "Kîrâ sülâlesi ... Süleyman Solonc'dan (1695-1715) sonra"
               "XIII ve XIV. yüzyıllar boyunca ... Dâcûlar"
mevlay-ismail  "1100'de (1689) Arâîş'i İspanyollar'dan geri alarak 200 top"
cezayir        "Kabiliye ... 1853, 1854 ve 1857'deki seferler sonunda"
```
⚠️ **Ve ölü slug bir maddeyi yazmaktan alıkoymaz — nasıl yazılacağını
değiştirir.** Kuzey Afrika kıyısındaki beş yerin (Bâdis · el-Arâiş · Mamûra ·
el-Hüseyme · Beşşâr) TDV'de müstakil maddesi **yok**. Maddeler yine yazıldı,
ama her birinin metninde *"TDV'de müstakil maddesi yoktur"* **açıkça** duruyor
ve `kaynak:` alanına konuyu gerçekten kapsayan **en yakın canlı madde** kondu.
📌 *"TDV'de yok"* demek bir **sonuçtur**; uydurmaktan kat kat değerlidir.

### 🔴 Ölçülmüş isabet oranı: **%81** — ve çürüyen %19'un tamamı `②` tuzağı

8 Ağustos'ta 36 aday slug `§4` yöntemiyle (HTTP kodu **ve** içerik okuması)
tek tek sınandı. **29'u doğrulandı, 7'si çürüdü** — ve yedisinin **yedisi de**
HTTP **200** döndürüyordu. Yani ①'in (ölü slug) hiçbiri yakalanmadı; **hepsi
②'ydi: canlı slug, yanlış madde.**

| aday | HTTP | açtığı madde | aranan |
|---|---|---|---|
| `nis` | 200 | **Niş şehri** | İskender Bey |
| `kili` | 200 | **Tuna'da bir kale** | Kilikya Ermeni Krallığı |
| `suleyman-i` | 200 | **Kanûnî Süleyman** | Süleyman Çelebi (Fetret) |
| `bursa` | 200 | Fetret bölümü **1481 Şehzade Cem**'i anlatıyor | 1403 İsa Çelebi |
| `saltanat` | 200 | genel **hukukî kavram** | bir devlet |
| `ahiler` | 200 | Ankara maddesi **yönetim iddiasını desteklemiyor** | Ahî idaresi |
| `sarki-rumeli` | 302 | ölü; sonra bulunan genel Rumeli maddesi **1878-85'i kapsamıyor** | Şarkî Rumeli |

⚠️ **Dördüncü satır en sinsisi:** `bursa` maddesi canlı, doğru şehir, hatta
**Fetret devri bölümü bile var** — ama o bölüm 1403'ü değil **1481'i**
anlatıyor. Yani doğru slug + doğru şehir + doğru konu başlığı, **yanlış olay.**
📌 Ve üçüncü satır TDV'nin kendi metniyle uyarıyor: `suleyman-i` maddesi
okuyucuyu Süleyman Çelebi'yle karıştırmaması için **açıkça ikaz ediyor.**
⇒ **Kaynağı okumak, kaynağın kendi uyarısını da okumaktır.**

**Yedisinin dördü kurtarıldı** — doğru slug bulunup içeriği doğrulanarak:
`iskender-bey` · `emir-suleyman` · `isa-celebi` · `musa-celebi`.
**Üçü kalıcı `bulunamadı`:** `kilikya-ermeni` · `sarki-rumeli` · `ahiler`.
📌 *"Bulunamadı"* üç kez yazıldı ve **üçü de bir sonuçtur** — o üç künye artık
"araştırılmadı" değil, **"arandı, yok"** diye biliniyor.

Zaten doğrulanmış slug kümesi `data/olaylar*.js` içindeki `kaynak:` alanlarından
çıkarılabilir; o küme güvenlidir:
```bash
grep -oh 'kaynak:"[^"]*"' data/olaylar*.js | sed 's/kaynak:"//;s/"//' | sort -u
```

**Küçük model (Haiku) bu projede kullanılmaz** — slug tuzağını düzenli olarak atlıyor
ve uydurma kaynak üretiyor.

---

## 5. Dosya haritası

```
index.html              Tek sayfa uygulama. Tüm data/*.js buradan script ile yüklenir;
                        yeni bir veri dosyası eklersen BURAYA da satır eklemelisin.
js/app.js               Harita + gün bazlı zaman akışı + paneller + dizinler
css/style.css           Görünüm

data/yerlesimler.js     ⭐ ELLE YAZILAN TEK COĞRAFİ KAYNAK — 740 yerleşim
data/olaylar.js         Ana kronoloji (84 madde, detaylı)
data/olaylar_ek*.js     Derinleştirme partileri 1-7 — toplam 958 kronoloji maddesi
data/devletler.js       Devletler dizini (213 kayıt, dünya)
data/padisahlar.js      41 kayıt (36 padişah + Fetret + ara dönemler)
data/kisiler.js         90 kişi
data/savaslar.js        123 savaş + 33 antlaşma + 15 seri + 41 sefer güzergâhı
data/sehirler.js        62 şehir/kale kartı

🔴 **HANGİ DOSYA CANLI — tek doğru kaynak `arac/girdi.py` `GIRDI_DOSYALARI`.**
   Bu satırlar 31 Temmuz'a kadar `yerlesimler_afrika.js`'i "merge bekliyor"
   diye gösteriyordu; **o dosya merge edildi ve 186 nokta taşıyor.** Bayat satır
   bir araştırma oturumunu doğrudan yanılttı: kapsam ölçümünü yalnız
   `yerlesimler.js` üzerinde yaptı, 767 kayıt gördü, gerçek 951'di ve buna
   dayanan üç hüküm eksik çıktı.
   📌 Ders: **ayrıştırıcıyı doğrulamak yetmiyor, hangi DOSYALARI okuduğunu da
   doğrulamak gerekiyor.** İki ayrıştırıcı aynı dosyada aynı sonucu verse bile,
   biri eksik dosya kümesi okuyorsa sayı yanlıştır.

🔴 **BU BÖLÜM ÜÇÜNCÜ KEZ BAYATLADI ve üçünde de aynı zararı verdi. Artık
BURADA DOSYA LİSTESİ YOK — tek otorite `arac/girdi.py`nin `GIRDI_DOSYALARI`
sabitidir.**

```bash
py -c "import sys;sys.path.insert(0,'arac');import girdi;print(len(girdi.GIRDI_DOSYALARI));[print(' ',f) for f in girdi.GIRDI_DOSYALARI]"
```

**7 Ağustos 2026 ölçümü: 29 dosya · 1800 nokta. HEPSİ CANLI.**

⚠️ **Buranın eski hâli `yerlesimler_avrupa.js` · `yerlesimler_asya.js` ·
`yerlesimler_ortaasya2.js` üçünü *"HENÜZ BAĞLANMAMIŞ, merge bekliyor"* diye
gösteriyordu ve *"toplam 951 nokta"* yazıyordu.** Üçü de `GIRDI_DOSYALARI`
içindeydi, yani **canlıydı**; gerçek sayı 1800'dü.

🔴 **Ve zararı ölçüldü — üç ayrı vaka, üçü de aynı kökten:**
```
① 31 Temmuz   yerlesimler_afrika.js "merge bekliyor" diye duruyordu, oysa
              bağlıydı. Bir ARAŞTIRMA oturumu kapsamı yalnız yerlesimler.js
              üzerinde ölçtü, 767 gördü, gerçek 951'di — üç hüküm eksik çıktı.
② 4 Ağustos   aynı bölüm altı sayıda birden bayatladı, üç oturum aynı anda
              o tablodan başladı.
③ 7 Ağustos   RENK 2, 238 pencerelik renk deliğini "kuyrukta, acil değil"
              diye sınıflandırmamı ÖLÇEREK ÇÜRÜTTÜ: 238'in 238'i
              `yerlesimler_asya.js`teydi ve o dosya CANLI —
              yani delik yayının KENDİSİNDEYDİ.
```
📌 **Ve bu bölümün kendi metni zaten şunu söylüyor:** *"ayrıştırıcıyı
doğrulamak yetmiyor, hangi DOSYALARI okuduğunu da doğrulamak gerekiyor."*
Ders yazılıydı; **bayatlayan şey dersin kendisi değil, yanındaki listeydi.**
⇒ Çare yeni bir uyarı satırı değil, **listeyi buradan KALDIRMAK.** Yapıldı.

data/donemler.js        🤖 ÜRETİLMİŞ — 12 MB. ELLE DÜZENLEME.
data/devletler_harita.js 🤖 ÜRETİLMİŞ — 14 MB. ELLE DÜZENLEME.
data/bolgeler.js        🤖 ÜRETİLMİŞ — 61 idari bölge. ELLE DÜZENLEME.

arac/uret_petek.py      ⭐ TEK ÜRETİM BETİĞİ.
arac/renkler.py         Devlet renkleri (BOYALAR) — 104 devlet, DSATUR ölçümü
                        ve "kompozit ΔE" uyarısı dosya başında
arac/denetle.py         ⭐ BEŞ DENETİM — üç değişmez + dönem sağlığı + mükerrer madde
arac/surum_damgala.py   index.html'deki ?v=rNN damgasını günceller
arac/uret_donemler.py   ☠️ ESKİ MOTOR — kullanılmıyor, referans için duruyor

veri-kaynak/            ⭐ MOTORUN GİRDİ VERİSİ — Natural Earth kara maskesi, göller,
                        nehirler, dağ sırtları (27 MB). Bunlar olmadan harita
                        ÜRETİLEMEZ. Bir dönem geçici klasördeydi; depoya alındı.
denetim/                Oturum 2 ve 6 bulgu raporları
oturumlar/              Ayrı oturumlara verilen görev tanımları ve ilerleme notları
assets/portreler/       36 padişah portresi (kamu malı, Wikimedia)

CLAUDE.md               Bu dosya — nasıl çalışılır
YOL-HARITASI.md         Beş eksen, fazlar, bağımlılıklar
YAPILACAKLAR.md         Öncelikli iş listesi
MIMARI.md               Petek motoru, çözülmemiş dört yapısal sorun, teknoloji kararları
VERI-YAPISI.md          Şemalar, alan sözlüğü, kaynak seti
```

Alan alan şema açıklaması **`VERI-YAPISI.md`**'dedir; veri yazmadan önce oku.

---

## 6. Kapsam genişlemesinin zorunlu sırası

Hedef bütün dünya; ama §2'deki emilme davranışı yüzünden sıra **atlanamaz**:

1. **Dizin katmanı** (`data/devletler.js`) — devlet listesi ve kronolojileri.
   Haritayı etkilemez, risksiz.
2. **Yerleşim katmanı** — yeni coğrafyalarda nokta yoğunluğu; ölçüt `MIMARI.md` §5.
3. **Harita penceresi** — `uret_petek.py` içindeki `BOLGE = box(-12, 1.5, 62, 62)`
   kutusu genişletilir.

> **Nokta yoğunluğu sağlanmadan `BOLGE` kutusunu açma.** Mevcut 740 peteğin
> kenardakileri bütün dünyaya yayılır: Kars'ın peteği Çin'i, Fas'ınki Atlantik'i
> boyar. Kutu yalnız kapsanan bölge için ve kademe kademe açılır.

Faz listesi ve her fazın yedi adımlık iş akışı: `YOL-HARITASI.md`, Eksen 2.

---

## 7. Oturum düzeni ve dosya sahipliği — EN ÖNEMLİ KURAL

Bu projede aynı anda birkaç oturum çalışır. Bölme kriteri **konu değil dosyadır**;
her dosyanın **tek sahibi** vardır. İki oturum aynı dosyaya yazarsa `yerlesimler.js`
gibi tek satırlık kayıtlardan oluşan dosyalarda **sessiz veri kaybı** olur.

| Oturum | Yalnız bu dosyalara yazar | Model |
|---|---|---|
| **0 Entegrasyon** | `yerlesimler.js`, `uret_petek.py`, üretilen `data/*.js`, kök dizindeki `*.md` belgeleri | Opus |
| 1 Yazılım/arayüz | `index.html`, `js/app.js`, `css/style.css` | Sonnet |
| 2 Harita hata avı | hiçbiri — sadece okur → `denetim/BULGULAR-*.md` | Opus |
| 3 Devlet kronolojileri | `data/devletler.js` | Sonnet |
| 4 Yerleşim araştırma | yeni `data/yerlesimler_ek.js` | Opus |
| 5 Siyasî figürler | `data/kisiler.js` | Sonnet |
| 6 Yapı denetimi | `arac/denetle.py` + `denetim/YAPI-*.md` | Sonnet |
| 7 Kronoloji yoğunlaştırma | yeni `data/olaylar_ek7.js` | Sonnet |

**Kurallar:**
- **`arac/uret_petek.py`'yi yalnız Oturum 0 çalıştırır.** Üretim ~15 dakika sürer ve
  sırasında veri değişirse çıktı tutarsız olur (bu yüzden dört üretim boşa gitti).
- 🔒 **ÜRETİM KOŞARKEN GİRDİ DOSYALARI DONMUŞTUR.** Kural yalnız "üretimi veri
  değişirken başlatma" değil; **koşu sırasında da yazılmaz.** Motor
  `arac/girdi.py`'deki dosyaları en başta okur (kara maskesi ve nehirlerden hemen
  sonra), yani koşunun 8. dakikasında yapılan bir düzenleme çıktıya HİÇ girmez ama
  denetim temiz görünür — yayın veriden geri kalır ve fark edilmez.
  Yaşanmış (2026-07-30): üretim 01:31:41'de başladı, başka bir oturum 01:39:13'te
  Hemedan'a Ferhad Paşa dönemi ekledi. Yayınlansa, çevresi Osmanlı ortası Safevî
  bir **Hemedan enklavı** çıkacaktı — yani kullanıcının hatalar 4 §10'da şikâyet
  ettiği hatanın aynısı, onu düzeltirken üretilmiş hâli. Beşinci boşa giden üretim.
  **Protokol:** üretimi başlatan oturum diğerlerine "girdi kilitli" der, bitince
  "dosya senin" der. İki oturum arası dosya devri sözle yapılır, varsayımla değil.
- **Commit ve push yalnız Oturum 0'dan yapılır** — **TEK İSTİSNA aşağıda.**
  Diğerleri dosyayı yazar, "hazır" der. 12-14 MB'lık üretilmiş dosyalarda git
  çakışması çözmek çok pahalıdır.

  🔴 **İSTİSNA — kendi ilerleme dosyan, PATHSPEC'li** (4 Ağustos 2026 kararı):
  ```bash
  git commit -F - -- oturumlar/KENDI-DOSYAN.md      # yol adı ZORUNLU
  ```
  Bir oturum **yalnız `oturumlar/` altındaki KENDİ dosyasını** commit edebilir.
  Başka hiçbir şeyi — `data/`, `arac/`, `js/`, kök `*.md` hepsi Oturum 0'da.

  **Niçin istisna var:** `oturumlar/CAPRAZ-GOREV.md §5` dört çapraz oturuma
  yıllardır bunu söylüyordu ve sekiz tur böyle teslim edildi. İki belge
  çelişiyordu; ÇAPRAZ AKDENİZ çelişkiyi bildirdi, hüküm bu.

  **Niçin `--` şart:** git index PAYLAŞILIYOR. Yol adı yazılmazsa başka bir
  oturumun sahnelediği dosya senin commit'ine girer. Ve `git add -A` **hiç**
  kullanılmaz: 4 Ağustos'ta commit'siz bekleyen bir ilerleme dosyası tam bu
  yolla başkasının commit'ine girmek üzereydi.

  ⚠️ **Bu istisna "hazır" demeyi kaldırmaz.** Dosyanı commit et, ama bulguyu
  yine koordinatöre bildir — commit teslim değildir, teslim mesajdır.
- 🔴🔴 **CEVAP KENDİ PENCERENE YAZILMAZ — KOORDİNATÖRE MESAJ ATILIR.**
  **Senin ekrana yazdığın metni koordinatör GÖRMEZ.** Kendi sohbet
  pencerene *"iş üstündeyim"* yazmak, cevap vermemekle **aynı şeydir**.
  Cevap ancak araçla gider:
  ```
  mcp__ccd_session_mgmt__send_message
      session_id : sana mesaj GÖNDEREN oturumun kimliği
                   (mesajın başındaki "From <ad>" etiketi odur;
                    bulamazsan mcp__ccd_session_mgmt__list_sessions ile ara)
      message    : cevabın
  ```
  🔴 **Doğuran vaka — 7 Ağustos 2026.** Dört araştırma oturumu iki kez
  soruldu, ikisinde de "cevap gelmedi" sanıldı ve **ölü ilan edilmek
  üzereydiler.** Kullanıcı baktı ve gördü: **dördü de cevap yazmıştı —
  kendi pencerelerine.** Koordinatöre hiçbiri ulaşmadı.
  ⇒ Kusur ne işçide ne koordinatördeydi: **kimse onlara cevabın nasıl
  gideceğini söylememişti.** Araç vardı, bilgi yoktu.
  📌 Ve bu, `F15`in eksik ayağıdır: *"cevap ver"* demek yetmiyor,
  **"şu kanaldan ver"** demek gerekiyor.
- 🔴 **"NE OLDU BİZİM İŞ?" SORUSU CEVAPSIZ BIRAKILMAZ — ÇALIŞIYOR OLSAN BİLE.**
  Koordinatör sorduğunda, iş sürüyorsa işçi oturum **hemen** şunu yazar:
  ```
  İŞ ÜSTÜNDEYİM · şu aşamadayım · tahminen şu kadar kaldı
  ```
  Bu üç parçalı cevap **zorunludur**; "birazdan bildiririm" değil, **şimdi**.
  Sessizlik "çalışıyor" demek değildir — koordinatör onu **öldü** sayar.

  **Koordinatörün tarafı:** birinci sorudan sonra cevap yoksa tekrar sor;
  **ikinci sorudan sonra da yoksa** oturumu ölü/kayıp kabul et — ama
  **KABUL ETMEDEN ÖNCE GERÇEKTEN ÇALIŞIP ÇALIŞMADIĞINA KENDİN BAK.**
  Ancak ondan sonra işi devral ya da başkasına ver.

  🔴 **Doğuran vaka — 7 Ağustos 2026, ve hatalı olan KOORDİNATÖRDÜ.**
  `RENK 2`ye iki kez soruldu, ses çıkmadı. Koordinatör *"6 Ağustos'tan beri
  sessiz"* deyip kullanıcıya **dosyayı devralma teklifi** götürdü. Sonra
  ölçtü: oturumun son hareketi **aynı gün 13:11**di ve `zend` · `galzay` ·
  `turkmen` renkleri **istenen sırayla zaten yazılmıştı.** Oturum ölü
  değildi — **rapor vermiyordu, iş yapıyordu.**
  ⇒ Kusur iki taraflıydı: işçi *"iş üstündeyim"* demedi, koordinatör de
  **bakmadan hüküm verdi.** Kural ikisini de bağlar.
- **Oturum 2 ve 6 düzeltme yapmaz, yalnız rapor yazar.** Düzeltmeyi 0 uygular;
  yoksa iki oturum aynı satırı ters yönlerde değiştirir.
- Aynı anda en çok **3 oturum** koştur: 0 + bir Opus + bir Sonnet.
- **Kendi oturumunun dosyaları dışına yazma.** Emin değilsen sor.

- 🔴🔴 **AYRI DOSYA VERMEK, AYRI AD ALANI VERMEK DEĞİLDİR.**
  *(16 Ağustos 2026 — bir günde ÜÇ vaka, biri %74 kayıp riski taşıyordu)*

  `§7`'nin tamamı **dosya** sahipliğini koruyor. Ama `data/*.js`
  dosyaları `window.<AD>` küresel değişkenleri tanımlıyor ve
  **JavaScript'te asıl paylaşılan kaynak dosya değil KÜRESEL AD
  ALANIDIR.** İki dosya aynı adı kullanırsa ikincisi birincisini
  **sessizce ezer** — dosyalar ayrı olduğu için `§7` bunu görmez.

  ```
  ① KORIDOR_YAMA      2 dosya · biri DİZİ öteki NESNE
                      koordinatör ikisine ayrı DOSYA adı verdi,
                      DEĞİŞKEN adını sormadı
  ② KADEME_YAMA       5 dosya · TEK ad
                      tek tek okununca 537 kayıt · BİRLİKTE 137
                      ⇒ %74 (400 kayıt) görünmez olurdu
  ③ app.js süzgeci    ada değil BİÇİME bağlıydı — yeni yamaların
                      biçimi tanınmadı, ikisi de ELENDİ
  ```

  🟢 **②'de zarar GERÇEKLEŞMEDİ** ve bunu varsayım değil ölçüm söyledi:
  üç oturum kendi yamasının indiğini ayrı ayrı doğrulamıştı (57/57 ·
  127/127 · 239), yani uygulayıcı dosyaları **tek tek** okumuş.
  ⚠️ Ama bu bir **tasarım kararı değil, tesadüf**: uygulayıcı doğru
  biçimde yazılmıştı. Tek bağlamda `eval` eden biri 400 kaydı sessizce
  yok edebilirdi ve **hiçbir denetim ötmezdi** — denetimler *"yama
  UYGULANDI mı"* diye sorar, *"yama OKUNDU mu"* diye sormaz.

  ⇒ **KURAL:** `data/<tur>_<kısaltma>.js` → `window.<TUR>_<KISALTMA>`.
  **Dosya adındaki ayırt edici parça, değişken adında da olacak.**
  Bir oturuma dosya verirken **ad alanını da ver.**

  📌 Ve ③ ayrı bir ders: elle liste → önek deseni → **biçim varsayımı**.
  Her çare bir öncekinin daha görünmez hâli oldu.
  ***Bir varsayımı kaldırmak, onu bir kademe daha derine gömmek
  olabilir.*** Süzgeç tanımadığını **sessizce elemez, SAYIP BASAR.**

Yeni bir oturum başlatılacaksa görev tanımı `oturumlar/` altına yazılır
(örnek: `oturumlar/OTURUM-3-DEVLETLER.md`).

---

## 7.1 HABERLEŞME PROTOKOLÜ — her şartnameye AYNEN kopyalanır

🔴 **Bu bölüm 7 Ağustos 2026'da doğdu ve sebebi ölçülmüş bir kayıptır.**
Beş araştırma oturumu açıldı; dördü işini yaptı, cevabını yazdı ve
**hiçbiri koordinatöre ulaşmadı** — çünkü cevaplarını **kendi sohbet
pencerelerine** yazmışlardı. Koordinatör iki kez sordu, canlı olup
olmadıklarına baktı, ve **dördünü de ölü ilan edip kümelerini dağıtmak
üzereydi.** Kullanıcı bakıp gördü:
> *"Cevabı kendi sohbet penceresinde veriyorlar sana mesaj atmak yerine.
> Oturumlar seninle nasıl irtibat kuracaklarını bilmiyorlar."*

⇒ Kusur ne işçideydi ne koordinatörde: **şartnamede kanal yazmıyordu.**
Bir işçi oturumun varsayılan davranışı cevabı **ekrana yazmaktır**, ve
ekran koordinatöre **görünmez.**

### ① KANAL — tek yol budur

```
mcp__ccd_session_mgmt__send_message
    session_id : sana mesaj GÖNDEREN oturumun kimliği
                 · gelen mesajın başındaki "From <ad>" etiketi odur
                 · bulamazsan mcp__ccd_session_mgmt__list_sessions ile ara
                   (koordinatör oturumu, sana iş veren oturumdur)
    message    : cevabın
```
⚠️ **Kendi pencerene yazmak = hiç cevap vermemek.** İstisnası yoktur.
⚠️ Kullanıcı senin pencereni okuyabilir ama **koordinatör okuyamaz** —
ikisi ayrı muhataptır. Kullanıcıya anlatır gibi yazdığın rapor,
koordinatöre **hiç yazılmamış** sayılır.

### ② NE ZAMAN MESAJ ATILIR — dördü de zorunlu

```
AÇILINCA    "açıldım, brifingi okudum, şu dosyalar bende"
            (koordinatör hangi dosyanın kimde olduğunu bilmezse aynı
             dosyayı ikinci oturuma verir → SESSİZ VERİ KAYBI)
KALEM KALEM  bir iş bitince HEMEN — biriktirme, gün sonuna saklama
SORU GELİNCE iş sürüyor olsa bile HEMEN:
             "iş üstündeyim · şu aşamadayım · tahminen şu kadar kaldı"
             ("birazdan bildiririm" cevap DEĞİLDİR)
BİTİNCE      teslim raporu — SAYIYLA. "Bitirdim" değil,
             "24 → 7, şu yedisi şu sebeple kaldı"
```

### ③ ~~İŞÇİ İŞÇİYE DOĞRUDAN YAZMAZ~~ → 🔴 **KURAL DEĞİŞTİ, 14 Ağustos 2026**

**ESKİ KURAL (çürüdü):** *"Bir oturumun işi başka bir oturumu
ilgilendiriyorsa koordinatöre yazılır, koordinatör iletir. Sebebi yetki
değil ÖLÇÜM: koordinatör kimin neyi beklediğini bilmezse darboğazı
göremez."*

🔴 **GEREKÇESİ ORTADAN KALKTI VE YASAK KALDI — klasik bayat kural.**
```
kural yazıldığında   kanal `send_message`dı: ÖZEL ve GÖRÜNMEZ. İki işçi
                     konuşursa koordinatör HİÇ göremezdi.        ✓ haklıydı
14 Ağustos 2026      kanal TAHTA (`arac/tahta.py`): HERKESE AÇIK, git'te,
                     `--kime` alanı kimin kime yazdığını taşıyor.
                     Yatay mesajı koordinatör ZATEN GÖRÜYOR.     ✗ gerekçe yok
```

**Ve bedeli aynı gün ölçüldü — Emre sordu:**
> *"Oturumlar birbirleriyle mesajlaşarak anlaşması gerektiği yerde
> birbirlerine mesaj atmıyorlar, öyle aval aval bakıyorlar. Nedir bu
> mesajlaşma kültürünü bozan şey?"*

Ölçüm: **60 tahta mesajının OTURUMDAN OTURUMA olanı: 1.** Ve sebebi
kültür değil, **bu satırdı** — işçiler aval aval bakmıyor, **kurala
uyuyorlardı.**
```
İKİ ÇAKIŞMA (aynı gün): TUNA HAVZASI ve M-0017 iki oturuma birden gitti.
Birbirlerine "bu iş sende mi" diye sorabilselerdi 30 SANİYE;
koordinatörden geçtiği için 20+ DAKİKA sürdü ve biri iki kayıt
yazdıktan sonra Edit uyarısıyla durdu.
```

## 🟢 YENİ KURAL — YATAY MESAJLAŞMA SERBEST, ŞARTI GÖRÜNÜRLÜK
```
py arac/tahta.py yaz --kim "<SEN>" --kime "<ÖTEKİ OTURUM>" --mesaj "..."
```
```
🟢 SERBEST   dosya çakışması sorma · ölçüm devri · "bu iş sende mi" ·
             bir bulgunun ötekini ilgilendiren kısmı · doğrudan teyit
🔴 YİNE DE KOORDİNATÖRE   iş ATAMASI · öncelik değişikliği · kaynak
             çelişkisi hükmü · yetki gerektiren her şey
⚠️ ŞART: TAHTADAN geçecek. Özel kanal (`send_message`) yatay konuşma için
   KULLANILMAZ — görünmezliği, eski yasağın haklı olduğu tek sebepti.
📌 Ve koordinatöre AYRICA haber vermeye gerek yok: tahtayı zaten okuyor.
   Aynı bilgiyi iki kez göndermek, ikisinin de okunmamasına yol açar.
```

📌 **Dersin kendisi:** bir yasak, onu doğuran şart ortadan kalktığında
**kendiliğinden düşmez** — çünkü yasağa uyanlar onu sorgulamaz, uyulduğu
için de kimse bedelini ölçmez. ⇒ *Bir kuralın gerekçesi değişince kuralın
kendisi YENİDEN ÖLÇÜLÜR; "hâlâ yazılı" olması "hâlâ doğru" demek değildir.*

### ④ NE YAZILIR — üçlü kural (`E7`)

Koordinatöre ya da kullanıcıya giden **her madde** üç şey taşır:
```
① NE ÖLÇTÜM           sayıyla
② NEYİ BULAMADIM      açıkça — "bulunamadı" diye yaz, boş bırakma
③ NE İSTİYORUM        tek cümle; seçenekliyse şıklarıyla ve ÖNERİNLE
```
**Bulamadığını `bulunamadı` diye yazmak bir sonuçtur ve uydurmaktan kat
kat değerlidir.**

### ⑤ COMMIT TESLİM DEĞİLDİR

Kendi `oturumlar/` dosyanı commit etmen işi teslim etmez. **Teslim
mesajdır.** Dosyaya yazıp susan oturum, hiç çalışmamış oturumla aynı
görünür.

### ⑥ 🔴 AKSAKLIK RAPORU BEKLEMEZ — iş bitmeden bildirilir

**Bir engel, çelişki ya da koordinatörün bilmesi gereken bir şey
çıktığında, işin bitmesini BEKLEME.** Hemen bildir ya da sor.

```
BEKLEYEBİLİR      normal bulgular · ölçüm sonuçları · tamamlanan kalemler
                  → gün içinde kalem kalem, biriktirmeden

BEKLEYEMEZ        · başka bir oturumun dosyasına ihtiyacın varsa
                  · kaynaklar ÇELİŞİYORSA (hangisini seçeceğine sen karar verme)
                  · şartname yanlış/eksik çıktıysa
                  · beklenenden ÇOK farklı bir sayı ölçtüysen
                  · bir kalem senin yetkin dışına taşıyorsa
                  · iş tahmininden ÇOK uzun sürecekse
                  → BEKLETMEDEN mesaj at
```

**Niçin:** koordinatör başka oturumları senin bitişine göre sıraya diziyor.
Bir engeli sonuna saklarsan, o süre boyunca **yanlış plan üzerine iş
dağıtılır.** Yaşanmış: bir oturum şartnamesindeki yanlış sayıyla çalıştı,
koordinatör düzeltmeyi sonra gönderdi ve üç bölüm iptal oldu — daha erken
sorulsaydı hiç yazılmayacaktı.

⚠️ **"Sormak" zayıflık değil, protokoldür.** Karar veremediğin bir yerde
tahmin etmek, sormaktan **kat kat** pahalıdır: yanlış tahmin veriye girer
ve sonra kimse onun tahmin olduğunu bilmez.

### ⑦ İŞ AKIŞININ TAM ÇEMBERİ — altı durak

```
① GÖREV        koordinatör `oturumlar/<AD>.md` yazar; şartname AÇILIŞ
               PROMPT'udur. Beş alan: AD · MODEL · DİZİN · ŞARTNAME · ClaudEmre
② AÇILIŞ       işçi: "açıldım, brifingi okudum, şu dosyalar bende"
               (bu mesaj olmadan koordinatör dosyayı ikinci oturuma verebilir)
③ GİDİŞAT      kalem kalem bildir · aksaklığı BEKLETMEDEN bildir (§⑥)
④ SORULMA      "ne oldu bizim iş?" gelince HEMEN:
               "iş üstündeyim · şu aşamadayım · ~şu kadar kaldı"
⑤ TESLİM       iş bitince RAPOR — sayıyla. "Bitirdim" değil,
               "24 → 7, şu yedisi şu sebeple kaldı"
⑥ KAPANIŞ      tek kullanımlık oturumsan: raporu gönderdikten SONRA kapan.
               Sende kalan hiçbir bilgi kurtarılamaz — "sonra yazarım" YOK
```

⚠️ **Koordinatörün tarafı da bağlıdır:** iş verdiği her oturumu bekleyen
olarak kaydeder · her tur bekleyenlere tek tek bakar · ses yoksa **sorar** ·
ölü ilan etmeden **önce gerçekten çalışıp çalışmadığına bakar** · ve bir
oturumun sorusuna karşılık bir şey yaptıysa **ona haber verir.**

📌 Ve şu ayrım koordinatör için hayatidir: **duran bir oturum ölü değildir,
cevabı sıkışmış olabilir.** `list_sessions` *"çalışmıyor"* diyorsa bu doğru
olabilir ama sebebi *"öldü"* değil *"işini bitirdi ve raporu iletemedi"*
olabilir. **Ölçüm doğru, çıkarım yanlış** — bu projede yaşandı.

---

## 8. Veri biçimleri

Alan alan tam şema, alan sözlüğü ve kaynak seti: **`VERI-YAPISI.md`**. Veri yazmadan
önce oku. Burada yalnız en sık ihlal edilen üç kural:

- `yerlesimler.js`'te `s:[{d:"..."}]` içindeki devlet kimliği, `uret_petek.py`
  içindeki **`BOYALAR` sözlüğünde tanımlı olmalı**; yoksa bölge boyanmaz.
- **Dönemler çakışmamalı, ters olmamalı, sıfır uzunlukta olmamalı.** Sıfır uzunluk
  gerçek bir hata olarak yaşandı: Tebriz `{f:"1514-09-06",t:"1514-09-06"}` yüzünden
  Çaldıran'dan sonra hiç Osmanlı görünmedi.
- Kronoloji maddelerinde **gün yaz.** Ay hassasiyetli `t:"1526-08"` ayın 1'ine
  genişler ve gün hassasiyetli yerleşim değişimlerinden *önce* sıralanır — senkron
  bozulur.

---

## 9. Komutlar

```bash
py arac/uret_petek.py            # harita üretimi (~40 dk, yalnız Oturum 0)
py arac/uret_devirler.py         # devirler.js — uret_petek'ten SONRA koşar
py arac/renk_olc.py              # 🔴 VERİ DEĞİŞTİYSE ŞART — aşağıya bak
py arac/denetle.py               # altı değişmez
py arac/denetle_yayin.py         # yayın kapısı
py arac/surum_damgala.py         # index.html'deki ?v=rNN damgasını yükselt
```

> 🔴 **PALET VERİNİN FONKSİYONUDUR — renk değişmese bile denetim değişir.**
> `renk_olc.py` iki gövde *"aynı anda sahnede ve komşu"* olduğunda çakışma
> arar. Komşuluk **veriden** gelir. Yani **hiçbir renge dokunmadan**, yalnız
> bir dönem tarihi değişerek yeni bir çakışma doğabilir.
> **Ölçüldü, üç ayrı vaka:**
> ```
> cungar ↔ buhara       Mâverâünnehir bağlanınca      ΔE 10,5
> norvec ↔ portekiz     _ek12 bağlanınca              ΔE  7,4
> cohor  ↔ kamboc       gün içi dönem değişikliği     ΔE 10,5
> ```
> Üçünde de `git diff arac/renkler.py` **boştu**. ⇒ *"Renkler değişmedi,
> denetim de değişmez"* cümlesi **üç kez yanlış çıktı.**
> **Kural: veriye dokunan her koşudan sonra `renk_olc.py` koşulur.**

Notlar:
- Ortamda `python` değil **`py`** var.
- `uret_petek.py` başında stdout'u `TextIOWrapper` ile sarmaladığı için `py -u`
  bile çıktıyı **ancak çıkışta** boşaltır; log dosyası koşarken boş görünür, normaldir.
- Üretim çıktısında **"Doğrulama: tüm yerleşimlerin peteği geçerli ✓"** satırını gör.
- Yayından önce sürüm damgasını yükselt, yoksa kullanıcı tarayıcı önbelleğinden
  eski dosyaları görür ve "değişmemiş" der.
- Yayın gecikmesi: push'tan sonra GitHub Pages'in yeni sürümü sunması ~40-60 sn.

---

## 10. Çalışma protokolü (kullanıcı tercihi)

- **Onay bekleme**, işlemlere devam et.
- Görev tamamlanınca / soru sorarken 3 kere beep:
  ```bash
  powershell -c "[Console]::Beep(800,300); [Console]::Beep(800,300); [Console]::Beep(800,300)"
  ```
- **9 kere beep — uzun işin bitişi** (kullanıcı kuralı). Kullanıcının başında
  beklemediği uzun bir iş bitince. Amaç farklı, o yüzden ton da farklı:
  3 beep *"sıra sende"* der, 9 beep *"masaya dön"* der.
  ```bash
  powershell -c "1..9 | ForEach-Object { [Console]::Beep(880,250); Start-Sleep -Milliseconds 120 }"
  ```
  **Nerede:** petek üretimi (30+ dk), toplu doğrulama koşuları, bir dalganın bütün
  oturumlarının teslim etmesi — kullanıcının başka işle ilgilenip dönmesi beklenen her şey.

  **Nasıl kurulur — kural bu:** tahmini süreyle BEKLENMEZ, **somut bir dosya damgası**
  izlenir. Petek üretimi için tetik `data/donemler.js`'tir, çünkü motor onu koşunun
  SONUNDA yazar. Arka planda bir bekçi damgayı yoklar, değişince 9 beep basar.
  Zaman aşımında (2 saat) üç kalın alçak beep: *"iş bitmedi, takıldı."*

  ⚠️ **Bitti sanıp erken haber vermek, hiç haber vermemekten kötüdür.** Bekçi her
  zaman GERÇEKLEŞMİŞ bir olaya bağlanır — geçen süreye, tahmine ya da bir oturumun
  "bitiyorum" demesine değil. Bunun canlı örneği yaşandı: üretim koşarken girdi
  dosyası değişti; koşu temiz bitecekti ama çıktı bayat olacaktı. "Süre doldu, bitti"
  demek o gün yanıltıcı olurdu.
- Kullanıcı hataları **numaralı partiler hâlinde** bildirir ve haritayı gözle
  denetler. Her maddeyi ayrı ayrı cevapla; birini atlarsan fark eder.
- Kullanıcı "eğer doğru ise ayrı madde ile gösterilmeli ismi ile zikredilmeli" derse
  bu Değişmez 2'nin ihlali demektir — kırılmayı bul, maddesini yaz.

---

## 11. Tekrarlanmaması gereken hatalar

- **`replace(eski, yeni, 1)`** — Python'da sayı argümanı ilk eşleşmeyi değiştirir.
  İbrail ve Özi'de ilk eşleşme `s:` bitiş tarihiydi; `d:` eski kaldı ve 8 aylık
  sahipsiz pencere açıldı. Toplu düzeltmede **tüm eşleşmeleri** değiştir, sonra
  Değişmez 1'i koştur.
- **Yakın mükerrer yerleşim** — Varat/Varad 1 km arayla iki kayıttı; Afyon ve
  Karahisâr-ı Sâhib 100 m arayla **çelişen** zaman çizgileriyle duruyordu. Yeni nokta
  eklerken 3 km içinde başka nokta var mı diye bak.
- **Üretimi veri değişirken başlatma.** Dört üretim bu yüzden çöpe gitti.
- **Denetim ölçütünü gevşetme.** "Maddesi var mı" sorusunun cevabı "aynı gün" ya da
  "±30 gün" olmalı; "aynı yıl" değil.
- **`sed` ile Türkçe karakterli / kesme işaretli düzeltme yapma** — Git Bash'te
  tırnak eşleşmesi bozuluyor. Bunun yerine scratchpad'e `py` betiği yaz ve çalıştır.

  🔴 **VE BU KURAL `heredoc`U DA KAPSAR — 6 Ağustos'ta DÖRT KEZ ısırdı.**
  `py - <<'EOF'` ile yazılan her kaçış (`\b` · `\n` · backtick) bozulabiliyor:
  ```
  girdi.py yorumu     `ek13` ve `cin-cumhuriyeti` backtick'i bash'e ÇALIŞTI, kelimeler SİLİNDİ
  denetle_yayin.py    \n gerçek satır sonuna döndü → sözdizimi hatası
  denetle_yayin.py    \b → 0x08 BACKSPACE BAYTI (aşağıya bak)
  arac2s.py           aynı \n vakası (PETEK/NOKTA'da)
  ```
  ⇒ **Kaçış içeren hiçbir düzeltme bash'ten geçirilmez.** Betiği `Write`
  aracıyla scratchpad'e yaz, sonra `py <yol>` ile çalıştır. İstisna yok.

- 🔴 **"BU GÜN ZATEN VAR" YETMİYOR — HANGİ KOVADA OLDUĞU DA SORULMALI.**
  `Değişmez 2s` **ÇEKİRDEĞİ** ölçüyor (`denetle.py:1589`), kuyruk dosyalarını
  ayrı sayıyor. Yani bir tarih **kuyrukta var ama çekirdekte yok** olabilir.
  **Vaka (7 Ağustos 2026, NOKTA HALKA-2 2):** yeni bir kırılma günü seçerken
  `1500-01-01`i *"külliyatta zaten var"* diye aldı — Emba ve Üstyurt onu
  kullanıyordu. **Ama ikisi de `yerlesimler_asya.js`te, yani KUYRUKTA.**
  Sonuç: gün çekirdek için **yeniydi** ve `2s`yi 121 → 123 yapıyordu.
  ⇒ Oturum bunu kendi yazdığı ölçüm aletiyle yakaladı ve tarihi çekirdeğin
  kendi gününe (`1441-01-01`) çevirdi — **tarih de en az onun kadar
  savunulurdu**, yani doğruluktan ödün verilmedi.
  📌 Ve bu, *"ölçen kendi sorduğu soruyu ölçüyor"* ailesinin **kova** yüzü:
  soru doğruydu (*"bu gün var mı"*), **evren** yanlıştı.

- 🔴 **"DENETİM VAR" ≠ "O SORUYU SORUYOR." Aynı gün ÜÇ ayrı körlük ölçüldü
  (7 Ağustos 2026) ve üçü de TEMİZ rapor veriyordu:**
  ```
  renk_cikti ②   hiç ölçmüyordu          → "0 çift" diyordu, gerçek 653
  --dogrula      yazılanı ÖNERİYLE sorar  → önerinin KÜNYEYLE uyumunu SORMAZ
  renk_olc       yalnız Voronoi KOMŞUSU   → komşu olmayan ama YAKIN çifti
                 çiftini kurar               hiç kurmaz → 5 gerçek ihlal görünmez
  ```
  🔴 En saf vaka: **`kaffa ↔ sidamo`, ΔE 2,8** — neredeyse aynı renk, ve
  **beş yüzyıl boyunca (1390-1897) ikisi de sahnede.** Voronoi komşusu
  olmadıkları için hiçbir denetim bildirmedi. Ölçüt *"hücreler değiyor mu"*
  idi; oysa **iki gövde değmeden de aynı ekranda yan yana durur.**
  ⇒ Bir denetimin **kapsamı**, doğruluğundan ayrı ölçülür: *"hangi çiftleri
  KURUYOR"* sorusu, *"kurduğu çiftleri doğru ölçüyor mu"* sorusundan önce gelir.

- 🔴 **"ÇÖZÜLEMEDİ" DEMEDEN ÖNCE HANGİ KISITIN BAĞLADIĞINI ÖLÇ.**
  `fransa ↔ portekiz` (ΔE 9,6) önce *"çözülemedi"* çıktı — paletin en kısıtlı
  iki düğümü. Kısıtlar tek tek ölçülünce görüldü:
  ```
  tam bant (C* + uyum + Osmanlı şeridi)   en iyi 11,5  🔴 çözülemez
  yalnız C* bandı                          en iyi 13,2  ✓ çözüldü
  ```
  Bağlayan şey **ΔE değil, `uyum` TERCİHİYDİ** — ve `renk_olc.py:132` bunu
  zaten yazıyor: *"uyum ölçüt değil TERCİH; eşiği geçen adaylar arasında ayrım
  yapar, EŞİĞİ DEĞİŞTİRMEZ."*
  ⇒ **Üç kısıt üst üste binince hangisinin gerçek eşik, hangisinin tercih
  olduğu görünmez olur — ve bir TERCİH yüzünden gerçek bir İHLAL açık
  bırakılır.** Eşiği gevşetmek yerine tercihten çıkıldı; hiçbir eşiğe
  dokunulmadı.

- 📌 **BAZI LİSTELER KUYRUK DEĞİL PENCEREDİR.** `SINIRDA` uyarı listesinin
  tepesindeki iki çift kapatılınca **alttan iki yenisi çıktı** (`ahom↔yuan` ·
  `joseon↔ming`) — hep oradaydılar, ilk ondan taşmışlardı. Dördüncü kez
  doğrulandı.
  ```
  EŞİK   (2s tavanı 121, 2t tavanı 42)   bitirilir, tavanın altına inilir
  EKRAN  (SINIRDA maruziyet sırası)      bitirilmez, HEP DOLU olur
  ```
  ⚠️ İkisine aynı gözle bakmak yanlış: bir ekranı *"bitirilecek iş"* sanmak,
  bitmeyen bir işi borç sanmaktır.

- 🔴 **YENİ YAZILAN DENETİM, İKİ YÖNDE DE SINANMADAN "ÇALIŞIYOR" SAYILMAZ.**
  ```
  GEÇME YOLU   kusur yokken TEMİZ diyor mu
  ATEŞLEME     HER kusur dalı için AYRI AYRI, gerçekten ötüyor mu
  ```
  ⚠️ Gerçek veride o kusur yoksa dal koşulamaz ⇒ **sahte girdi ya da geçici
  eşik değişikliğiyle ZORLA ateşlenir. Zorlanamayan dal, denetimsiz daldır.**

  **Vaka (7 Ağustos 2026, RENK 2):** yeni bir nöbetçi (`arac/renk_fark.py`)
  yazıldı. Geçme yolu ✓, ateşlemenin dört dalından üçü ✓ — ama *"var olan
  çift eşiğin altına düştü"* dalı **hiç ateşlemedi**, çünkü bugünkü veride o
  durum yok. Eşik geçici olarak zorlandı → **132 düşen çift, çıkış kodu 1**,
  dal sağlam çıktı.
  🔴 **Ve o dal, tam olarak bir sonraki koşuda beklenen kusur sınıfını
  yakalayacak olan daldı.** Sınanmasaydı yeni denetim **ilk gerçek işinde
  sessizce "TEMİZ" diyecekti.**

  📌 Ve bu, `arac/renkler.py`de yazılı olan uyarının **ters yönü**: orada
  *"ateşleme yolunu sınadım, geçme yolunu değil"* diyor. Proje daha önce
  ateşlemeyi sınayıp geçmeyi sınamamıştı; bu oturum tersini yaptı ve kendi
  eksiğini kapattı. **İki yarım ders bir tam kural ediyor.**
  📌 Bu, `§3.5`teki *"bir veri KATEGORİSİ hiç denetlenmemiş olabilir"*
  dersinin **kod tarafıdır**: orada çağrılmayan bir ARGÜMAN vardı, burada
  ateşlenmeyen bir DAL var. İkisi de *"araç doğru ama kapsamı ölçülmemiş"*.

- 🔴 **VERİ PENCERESİ İLE KÜNYE PENCERESİ AYRI ŞEYLERDİR — biri BUGÜNKÜ,
  öteki YARINKİ kusuru bulur.**
  ```
  VERİ penceresi    bugün ne ÇİZİLİYOR     → bugünkü ihlali bulur
  KÜNYE penceresi   yarın ne ÇİZİLECEK     → yarınki ihlali bulur
  ```
  **Vaka (8 Ağustos 2026, RENK 2):** Güneydoğu Asya paleti iki kez tarandı.
  Birinci tarama **veri dönemlerini** kullandı ve `ava ↔ ayutthaya` ihlalini
  buldu. İkinci tarama **künye pencerelerini** kullandı ve **birincinin hiç
  göremediği** bir çift daha çıkardı:
  ```
  ace-sultanligi ↔ malaka-sultanligi   AYNI HEX #2d8f4a
  855 km · MALAKA BOĞAZI'NIN İKİ YAKASI · künyeler 1496-1511 örtüşüyor
  ```
  Künye *"1496-1511'de ikisi de var"* diyordu; **veri onu henüz ifade
  etmiyordu** — ve o gün başlayan nokta partisi ifade edecekti.
  ⇒ **Bir kusuru DOĞMADAN yakalamak istiyorsan, bugünkü veriye değil
  YARIN ÇİZİLECEK OLANA bak.** Künye, verinin taahhüdüdür.
  📌 `C14`ün ileri yönü: o *"araç sen dokunmadan başkalaşır"* der, bu
  *"evren yarın büyüyecek, ÖLÇÜMÜ ŞİMDİ ORAYA GÖRE KUR"* der.

- 🔴 **BİR SÜZGECİ KALDIRMADAN ÖNCE, SÜZGECİN NEYİ KORUDUĞUNU OKU.**
  Aynı gün, aynı oturum: *"süzgeci tamamen kaldıralım"* önerisi ölçüldü ve
  **86 çiftin 63'ünün tasarımın kendisi olduğu** çıktı. `renkler.py`nin
  kendi başlığı zaten yazıyordu: *"bir rengi birden çok devletin paylaşması
  sorun değildir, **yeter ki o devletler tarih boyunca hiç komşu
  olmasın**."*
  ⇒ Süzgeci kaldırmak, **tasarımın izin verdiği paylaşımı ihlal saymak**
  olurdu: doğru şeyi ölçüp **yanlış evrende** raporlamak.
  Çare tek eşik değil **kademe** oldu: `<600 km` ihlal · `600-1500 km`
  uyarı · `>1500 km` tasarım · `ölçülemedi` AYRI kova.
  📌 Ve dördüncü kova şart: *"ölçülemedi"* asla *"temiz"* diye raporlanmaz.

- 🔴 **`C13`ÜN EKSİK AYAĞI: HANGİ YÖNÜN ZORLANACAĞI ÖNCEDEN BİLİNMEZ.**
  `C13` *"yeni denetim iki yönde de sınanmadan çalışıyor sayılmaz"* der ve
  iki yolu sayar: **geçme** (kusur yokken temiz mi) · **ateşleme** (kusur
  varken ötüyor mu). Ama **hangisinin zorlama gerektireceği vakaya bağlı**
  ve ikisi de olabilir:
  ```
  renk_fark.py     gerçek veride kusur YOKTU  ⇒ ATEŞLEME zorlandı (eşik geçici değişti)
  ikinci kurucu    gerçek veride 72 KUSUR VAR ⇒ GEÇME YOLU zorlandı
                   (mesafe eşiği 0'a VE ΔE eşiği 0'a çekilerek, iki ayrı yoldan)
  ```
  ⇒ **Kural: her iki yolu da zorlamaya HAZIR ol.** *"Ateşleme zordur"*
  varsayımı yarısında yanlış çıkar — ve yanlış çıktığında sınanmayan yol
  **geçme yolu** olur, ki o daha sinsidir: denetim gürültülü çalışır ama
  **temiz veriyi de kirli sayıyor** olabilir.

- 🔴 **YUVARLAK TARİH YALNIZ YANLIŞ DEĞİLDİR — ÇELİŞKİYİ DE SAKLAR.**

  **Vaka (8 Ağustos 2026).** Koordinatör `serbedariler` künyesine
  `f:"1337-01-01"` yazdı (yuvarlak yıl). NOKTA KALİTE-4 TDV'den **tam
  günü** getirdi: *"12 Safer 738 / **9 Eylül 1337**"*. Düzeltildi — **ve
  düzeltilince gizli bir tutarsızlık GÖRÜNÜR OLDU:**
  ```
  veride serbedari adayı dönem   f:1335-12-01 → t:1381-01-01  (19 nokta)
  künye                          f:1337-09-09
  ⇒ 1335-12-01 → 1337-09-09 arası 21 AY SAHİPSİZ kalırdı
  ```
  Yuvarlak `1337-01-01` bu boşluğu **iki ay**a indiriyor ve gözden
  kaçırıyordu; tam gün onu **21 aya** çıkarıp `Değişmez 1b`nin menziline
  soktu.
  ⇒ ***Hassasiyet yalnız doğruluk değil, GÖRÜNÜRLÜK meselesidir.***

  🔴 **Ve asıl bulgu: `1335-12-01` hiçbir ardılın gerçek başlangıcı değil.**
  Tarihin niçin seçildiği belli — **Ebû Saîd 30 Kasım 1335'te öldü**,
  İlhanlı fiilen bitti. Toplu yazımı yapan *"İlhanlı bitti, sırada İran
  var"* demiş. Ama ardılların hiçbiri o gün başlamıyor:
  ```
  serbedariler  1337-09-09   21 ay SONRA
  celayirli     1340-01-01    4 yıl SONRA
  muzafferi     1318-01-01   ← ÖNCE (İlhanlı tâbiiyetinde)
  kert          1245-01-01   ← ÇOK önce
  ```
  ⇒ 1335-1340 arası İran'da bir **FETRET** var ve veri onu ifade etmiyor.
  `OGRENILENLER §72`nin tam vakası: `Değişmez 1` *"kimsenin değildi"*
  diyemediği için boşluk bir kimliğe itilmiş — bu sefer `iran`a.
  📌 Bir devletin **sonu** ile ardılının **başlangıcı** arasındaki boşluk,
  veri modelinde ifade edilemediği için **en yakın kimliğe yapışıyor.**
  Osmanlı Fetret devri (1402-1413) bu projede ayrı künyelerle çözülmüştü;
  İran'ın fetreti çözülmemiş.

  ⚠️ Ve takas **YAPILMADI**: 21 aylık deliği kapatmadan yapmak, bir hayaleti
  kapatıp bir delik açmak olurdu. `§3.5.1`: *bir sınır kayması önerildiğinde
  İKİ UÇ DA ölçülür.*

- 🔴 **ÖLÇEMEDİĞİNİ ELEYEN BİR SÜZGEÇ, ONU TEMİZ SAYAR.**

  **Vaka (8 Ağustos 2026, RENK 2 — ve öngörüsü bunu ORTAYA ÇIKARDI).**
  Koşu 3 için beş kalemlik damgalı bir öngörü yazılmıştı. Dördü tuttu,
  **④ çürüdü:**
  ```
  ④ YENİ Voronoi çakışması     öngörü 0   ölçüm 1
     kuba ↔ lunda-imparatorlugu   ΔE 9,06 · 365 km · Voronoi komşusu
  ```
  🔴 **Ve ilk teşhis de yanlıştı:** araç *"1500 km yetmedi, eşik
  büyütülmeli"* dedi. Ölçüldü — mesafe **365 km**, yani eşiğin çok içinde.
  **Eşik sorunu hiç yoktu.** Gerçek sebep `engel_kumesi()`in bir satırıydı:
  ```python
  if b == kim or b in out or b not in nokta:   # ← b not in nokta
  ```
  `lunda` çözülürken `kuba`nın veride **noktası yoktu** ⇒ engel
  **sayılmadı.** İkisi aynı gün yazıldı; sonra Mushenge ve Musumba indi
  (365 km), komşu oldular ve çizili haritada çakıştılar.

  ⇒ Süzgeç *"ölçemediğim aday"*ı *"sorun olmayan aday"* diye eledi. Bu,
  `§11`in *"ölçülemedi ≠ temiz"* kuralının **engel kümesi tarafı** — ve o
  kuralı aynı gün **üç kez yazan oturum, kendi aletinde uygulamamıştı.**

  **Çare (uygulandı):** verisi olmayan aday, künyesi örtüşüyor **ve aynı
  bölgedeyse** artık engel sayılıyor — ***en kötü hâl varsayılır.***
  `kuba` engel 8 → 9 · `#0072f6` → `#a85a1b` · `lunda`dan ΔE 9,06 → **54,47**
  · çakışan **1 → 0.**

  🟢 **VE ÖNGÖRÜNÜN DEĞERİ TAM BURADA GÖRÜLDÜ:** dört kalem tuttu ve
  **hiçbir şey öğretmedi.** Çürüyen tek kalem hem araçta bir kör nokta hem
  de **teşhis refleksinde** bir hata buldurdu.
  ⇒ ***Beş öngörülük bir kümede bilgiyi yalnız YANLIŞ OLAN taşıdı.***

- 🔴 **ORTAK BİR KANALA ÖZEL BİR MESAJ KOYMAK, ONU HERKESE GÖNDERMEKTİR.**
  **Vaka (8 Ağustos 2026, koordinatörün hatası).** Atlas soruları
  ClaudEmre'nin **kök** `BEKLEYENLER.md`sine yazıldı. Kutu o dosyayı
  `SİSTEM ·` önekiyle **her projede** gösteriyor ⇒ atlas soruları
  **eczane projesinin** kutusunda belirdi. Emre sordu:
  > *"Bu mesajlar atlas projesi için değil mi? Burası EczAsist oturumu…"*
  📌 **Kusur kutuda değildi**: kanal tasarlandığı gibi çalıştı, taşıması
  gerekeni taşıdı. Kusur **içerikteydi** — ortak dosyaya özel iş yazıldı.
  ⇒ Çare: her projenin **kendi** `BEKLEYENLER.md`si; ortak dosya yalnız
  sistem maddeleri. (Yapıldı.)

- 🔴 **BİR DÜZELTME DOĞRU ÇALIŞABİLİR VE SONRAKİ AŞAMA ONU GERİ ALABİLİR —
  ve ikisi arasındaki boşluk hiçbir denetimin sorusu değildir.**

  **Vaka (9 Ağustos 2026, A1 yarıçap tavanı, koşu 4b).** Tavan **doğru**
  hesapladı ve öngörü **birebir** tuttu:
  ```
  öngörü  ~280-310 petek · alan ~%23
  ölçüm    305 petek · KARA alanının %23,0'ü kesildi   ✓✓
  ```
  Ama yayın **durduruldu**, çünkü öngörünün *"mazereti olmayan"* kalemi
  çürüdü:
  ```
  ⑤ öngörü  Osmanlı 0/9 kesitte değişmeli
    ölçüm   Osmanlı 7/9 DEĞİŞTİ · yabancı +%15 (+6,6 M km²)
  ```
  ⚠️ **Bir tavan alanı ARTIRAMAZ.** Sebep tek satırdaydı:
  ```
  20 petek kısaldı, toplam 3.397.649 km² sahipsizleşti
  118 YETİM YÜZ SAHİPLİ KOMŞULARA KATILDI      ← SEBEP
  ```
  Tavan toprağı serbest bırakıyor, motorun **yetim yüz** mantığı onu **en
  yakın komşuya geri veriyor.** Yani tavanın **önlemek için var olduğu şeyi**
  (`§2` emilme) sonraki aşama **yeniden yapıyor.**

  ⇒ ***Kusur ne tavandaydı ne yetim-yüz mantığında — İKİSİNİN ARASINDAYDI.***
  İkisi de kendi başına doğru, ve hiçbir denetim *"bu ikisi birbirini iptal
  ediyor mu"* diye sormuyor.
  📌 Bu, *"denetim var ≠ o soruyu soruyor"* ailesinin **aşamalar arası**
  hâli: bugüne kadarki vakalar tek bir aletin içindeydi, bu **iki aletin
  arasında.**

  🟢 **Ve yayını durduran şey bir sezgi değil, KOŞUDAN ÖNCE YAZILMIŞ BİR
  CÜMLEYDİ:** *"⑤ tutmazsa mazeret yok — harita değil TAVAN düzeltilir."*
  O cümle olmasaydı, Osmanlı'nın %3'lük daralması *"yeni noktalar geldi,
  olur böyle"* diye geçilirdi. **Mazereti önceden yazmak, mazeret üretmeyi
  imkânsız kıldı.**

- 🔴 **BİR DOSYANIN "VERİ Mİ KOD MU" OLDUĞUNU İÇERİĞİ DEĞİL, ARACIN ONA
  NASIL DAVRANDIĞI BELİRLER.**

  **Vaka (8 Ağustos 2026) — bir koşu 83 DAKİKA çalıştı ve öldü:**
  ```
  MOTOR KODU KOŞU SIRASINDA DEĞİŞTİ: renkler.py
  ```
  Koordinatör RENK 2'ye *"renkleri yaz, bir sonraki koşuya girer"* demişti
  ve gerekçesini **ölçmüştü**: `from renkler import BOYALAR` bir import'tur,
  süreç başlarken bir kez okunur. **O ölçüm doğruydu.** Ama yalnız
  **okuma** ölçülmüştü; `motor_izi`nin `girdi.py · renkler.py ·
  uret_petek.py` üçlüsünü parmak izlediği **hiç bakılmamıştı.**

  🟢 **Ve ayrım şuymuş** (`uret_petek.py:253`te zaten yazılıymış):
  ```
  data/*.js    KOPYALANIYOR   → koşu sırasında yazmak GÜVENLİ (koşuya girmez)
  arac/*.py    KOPYALANMIYOR  → koşu sırasında yazmak KOŞUYU ÖLDÜRÜR
  ```
  Aynı gün NOKTA oturumu 17:06'da **32 nokta yazdı ve koşu ölmedi**; RENK 2
  bir **sözlük** değiştirdi ve koşu öldü. İkisi de *"veri"* gibi görünüyor.
  ⇒ ***`renkler.py` bir sözlük TAŞIR ama `arac/` altında bir `.py`DİR.***
  **Ne taşıdığı değil, NEREDE DURDUĞU belirliyor.**

  🔴 **VE İKİ TARAFIN DA ELİNDE DOĞRU BİLGİ VARDI** — RENK 2'nin kendi
  tespiti, koordinatörünkinden değerli:
  > *"Brifingimde **`renkler.py` üretim koşularında parmak izlenir**
  > yazıyordu ve ben bunu okumuştum. Sen 'kilitli değil' dedin, ben
  > **kilidin ne olduğunu sormadım.** Brifingim 'kilitli dediğinde' değil,
  > **'üretim koşularında'** diyordu."*
  ⇒ Biri **okumayı** ölçtü ama nöbetçiyi ölçmedi; öteki **elindeki yazılı
  uyarıyı** hiç ölçmedi. **İkisi de yanlış soruyu sordu**, ve iki yanlış
  soru bir doğru cevabı örtmeye yetti.
  📌 `§7.1 ⑥` *"şartname yanlış/eksik çıktıysa BEKLETMEDEN bildir"* diyor —
  **çelişkiyi bildirmek işçinin işidir**, ve bu sefer bildirilmedi.

  ⇒ **Çare (uygulandı):** `motor_izi_dogrula` yalnız EN SONDA çağrılıyordu
  (`donemler.js`ten hemen önce), oysa değişiklik koşunun **8. dakikasında**
  olmuştu. Artık **her aşamada** çağrılıyor.
  📌 ***Bir nöbetçinin DOĞRU olması yetmiyor, ZAMANINDA olması da
  gerekiyor. Geç öten alarm, ötmeyen alarmdan yalnız biraz iyidir.***

- 🟢 **ÖLÇÜMDEN ÖNCE, HANGİ ÖNGÖRÜNÜN "MAZERETİ OLABİLECEĞİNİ" DE YAZ.**
  **Vaka (8 Ağustos, RENK 2).** Taban 2293 → 2325'e kayınca öngörülerini
  **değiştirmedi** ama kapsamlarını **önceden** ilan etti:
  ```
  TABANA DUYARLI:  ② gövdesiz 22 · ⑤ yakın-ama-değmeyen 7
  TABANA DUYARSIZ: ① eski renk 0 · ③ delik 0 · ④ yeni çakışma 0
  ```
  > *"②/⑤ tutmazsa sebep taban kayması OLABİLİR. Ama ①·③·④ tutmazsa
  > mazeret yok — özellikle ④, çünkü o benim 1500 km seçimimin sınavı ve
  > taban büyümesi onu ZORLAŞTIRIR, mazur GÖSTERMEZ."*
  ⇒ Ölçümden **sonra** *"ha o zaten tabana duyarlıydı"* demek, mazereti
  bulguya benzetir. **Mazeretin de önceden yazılması gerekiyor** — yoksa
  her yanlış öngörü sonradan açıklanabilir hâle gelir ve hiçbiri çürümez.
  📌 `§11`in *"öngörü ölçümden önce yazılır"* kuralının ikinci ayağı.

- 🔴 **"SAHİPSİZ"İN İKİ CİNSİ VARDIR VE SINAVI ŞUDUR: KAYNAK KONUŞUYOR MU,
  SUSUYOR MU?**

  **Vaka (8 Ağustos 2026, NOKTA SİBİRYA).** Üç bölge için `kasitli_bosluk`
  düşünüldü; ikisi aynı kovaya konacaktı, **ölçüm ayırdı:**
  ```
  ÇUKOTKA  kaynak AÇIKÇA konuşuyor  → "devletsiz"
           "never paid yasak … their status as subjects was little more
            than a formality" · 1649 kalesi 1764'te TERK EDİLDİ
  YAKUT    kaynak SUSUYOR           → "veri-yok"
           fetih öncesi siyasî örgütlenmeyi HİÇ TARTIŞMIYOR,
           doğrudan 1620'lerin fethiyle başlıyor
  ```
  ⇒ **Sınav:** *kaynağa sor. **Konuşuyorsa** `devletsiz`, **susuyorsa**
  `veri-yok`.*

  📌 İkisi de `kasitli_bosluk` olarak yazılsa **haritada aynı görünürdü** —
  fark yalnız bir sonraki oturum için vardır: Çukotka'ya **bir daha
  bakılmayacak**, Yakut'a **bakılacak.** *"Boşluk"* kaydetmek yetmiyor;
  **boşluğun CİNSİNİ** kaydetmek gerekiyor.

  🟢 **Ve oturum ilk turda *"devletsiz eğilimliyim"* deyip İKİNCİ TURDA
  KARARI DEĞİŞTİRDİ.** Eğilimi karar diye yazsaydı, **yanlış bir kesinlik**
  kayda geçer ve kimse onu bir daha sorgulamazdı. ⇒ *"Eğilimim şu"* ile
  *"kararım şu"* arasındaki farkı korumak, kararın kendisi kadar değerli.

- 🔴 **TEMİZ ÇIKAN BİR ÖRNEKLEM, ÖRNEKLEMİN DIŞINI TEMİZ İLAN ETMEZ.**
  **Vaka (8 Ağustos, koordinatörün kendi şartnamesi).** NOKTA SİBİRYA'nın
  ön ölçümü Sibir Hanlığı çekirdeğini (Tobolsk · Tümen · Baraba) ve Rus
  ostroglarını **temiz** buldu — ölçüm doğruydu. Koordinatör bundan
  ***"Sibirya'da yanlış sahip yok, sorun yalnız yoğunluk"*** diye şartname
  yazdı. **Çürüdü:**
  ```
  Çukotka: `rusya` — 2.106 km öteden (Sahalin) emiliyor
  Oysa Çukçiler 1281-1923 boyunca HİÇ fethedilmedi
  ```
  ⇒ Çekirdek temizdi, **Uzak Doğu başka bir dünyaydı.** Örneklem 60°D
  civarındaydı, kusur 170°D'deydi.
  📌 Bu, `§5`'teki *"ayrıştırıcıyı doğrulamak yetmiyor, hangi DOSYALARI
  okuduğunu da doğrulamak gerekiyor"* dersinin **coğrafya tarafı**: ölçüm
  doğru, **evreni dar.**

- 🟢 **ÖNGÖRÜ ÖLÇÜMDEN ÖNCE YAZILIR — SONRA YAZILAN BEKLENTİ AYARLANABİLİR,
  ÖNCE YAZILAN ÇÜRÜTÜLEBİLİR.**

  **Vaka (8 Ağustos 2026, RENK 2).** Koordinatör *"koşudan sonra şunu
  doğrula; beklediğimden başka çıkarsa bir varsayımım yanlış demektir"*
  dedi. RENK 2 bunun eksik ayağını gördü:
  > *"O hâlde beklentiyi ÖNCE yazmam gerekti."*

  ⇒ `denetim/kosu-ongoru.json` — üç sayı, **koşu bitmeden**, damgalı.
  ```
  ① eski renkle çizili çıkacak   9
  ② BOYALAR'da var, çizilmeyen   9
  ③ koşuda DELİK                 6   ← koordinatör 4 demişti
  ```
  📌 Sonradan yazılan beklenti, ölçümü gördükten sonra farkında olmadan
  **ona göre şekillenir** ve hiçbir zaman yanlış çıkmaz — yani hiçbir şey
  öğretmez. Önce yazılan beklenti **yanlış çıkabilir**, ve ancak yanlış
  çıkabilen bir şey bilgi taşır.

  🔴 **Ve ilk işinde koordinatörü çürüttü.** Koordinatör dört delik
  bekliyordu; ölçüm **altı** dedi, fazladan ikisi **daha büyük**:
  ```
  svahili-sehirleri   veride 10 dönem    koordinatör "sessiz borç" demişti
  umman-zengibar      veride  8 dönem    koordinatör "sessiz borç" demişti
  (öteki dördü 3 · 3 · 1 · 1 dönem)
  ```
  İkisi koordinatörün **kendi listesindeydi** ama *"künyeli-renksiz, sessiz
  borç"* diye sınıflandırılmıştı. **Veride dönemleri VARDI** ⇒ sessiz borç
  değil **açık delik**, ve dördünden büyük.
  ⇒ **Kova ayrımı doğruydu, ATAMA yanlıştı.** Bir kimliğin hangi kovaya
  düştüğü **künyeye değil VERİYE** bakılarak belirlenir — *"künye penceresi
  ≠ veri penceresi"* dersinin kova tarafı.

- 🔴 **KENDİ YAZDIĞIN AYRIŞTIRICI, VAR OLAN BİR AYRIŞTIRICIDAN HER ZAMAN
  KÖTÜDÜR.**
  Yukarıdaki öngörünün **ilk iki sürümü yanlıştı ve ikisi de SESSİZDİ:**
  ```
  ① regex `[^,]*` kullandı ⇒ ADINDA VİRGÜL olan kimlikleri kaçırdı
     (`dogu-sumatra-sultanliklari`: "…(Jambi, Siak, Deli…)")
     8 kimlik sessizce kayboldu — "310 kimlik" dedi, gerçek 314
  ② düzeltme bash heredoc'undan geçirildi, kaçışlar yendi, regex hiçbir
     şey eşleştirmez oldu → "0 kimlik" ve 298 SAHTE delik
  ```
  ⚠️ İkincisi `§11`in **aynı gün BEŞİNCİ ihlali** — ve tam da o dersi
  uygularken. **Kural yetmiyor.**
  🟢 **Çare regex'i düzeltmek değil, REGEX'İ BIRAKMAK oldu:** `renkler.py`
  o revizyondan dosyaya yazılıp **içe aktarıldı**; ayrıştırma işini Python'un
  kendi ayrıştırıcısı yaptı.
  📌 Bu proje aynı şeyi bugün **üçüncü kez** öğrendi (`girdi.py`nin tek
  tırnak vakası · `bagla.py`nin CRLF vakası · bu). ⇒ **Veri zaten bir dilde
  yazılıysa, o dilin yorumlayıcısını çağır.**

- 🔴 **İKİ AYRI KUSUR TEK SATIRDA RAPORLANIRSA, ÇARELERİ TERS OLSA BİLE
  AYNI ÇARE UYGULANIR — VE DOĞRU VERİ BOZULUR.**

  **Vaka (8 Ağustos 2026, NOKTA EMİLME yakaladı).** `denetle.py` altı noktayı
  *"kara maskesinin dışında"* diye bildirdi ve **dördüne de AYNI** koordinatı
  önerdi (`lat:-10,9995`). Oysa:
  ```
  Sofala · Quelimane · Angoche · Mozambik Adası   -15° … -20° G
  Finschhafen · Port Moresby                       147,2° … 147,9° D
  atlas penceresi:  box(-12, -11, 146, 82) ∪ box(-25, 60, -12, 82)
  ```
  ⇒ Altısı da **doğru yerdeydi**; atlasın penceresi oraları **hiç
  kapsamıyordu.** Öneri uygulansaydı Sofala **1020 km** kuzeye taşınacaktı —
  yani ihlal kapanacak, **gerçek silinecekti.**

  **Sebep:** `kara` maskesi zaten `bolge` ile kesiliyor ⇒ pencerenin dışında
  "kara" diye bir şey **yoktur**, ve *"en yakın kara"* hep pencerenin kenarı
  çıkar. Araç iki apayrı şeyi tek satırda söylüyordu:
  ```
  KARA DIŞI     → nokta YANLIŞ yerde  → ÇARE: koordinatı düzelt
  PENCERE DIŞI  → nokta DOĞRU yerde   → ÇARE: koordinata DOKUNMA
  ```
  ⚠️ **Ve bedeli tek yönlü değil:** pencere dışı bir noktayı *"düzeltmek"*
  ihlali kapatır ama **doğru veriyi bozar** — ve bozulduğu bir daha
  anlaşılmaz, çünkü denetim artık temiz.

  🟢 **Kusuru bir İŞÇİ oturum yakaladı ve reçeteyi UYGULAMAYI REDDETTİ**,
  tek başına karar vermek yerine sordu. ⇒ *"Aracın söylediğini yapmadan önce
  aracın ne ölçtüğünü anla"* — ve bu, aynı gün ölçülen *"reçete kendi
  testini geçmeli"* dersinin **üçüncü** vakası: reçete artık testi geçiyordu
  ama **yanlış soruya** cevap veriyordu.

  ⇒ Ayrıldı: pencere dışı artık `i` (bilgi) kovasında, *"ihlal DEĞİL, pencere
  oraya açılana kadar BEKLEYEN veri"* damgasıyla. `konum` **6 → 0.**
  📌 Ve bu kayıtlar silinmez: **pencere büyüyünce KENDİLİĞİNDEN canlanırlar.**
  Araştırılmış doğru veriyi silmek, onu yeniden araştırmaktan pahalıdır.

- 🔴 **"ÇÖZÜLEMEDİ"NİN ÜÇÜNCÜ CİNSİ: SIRA BAĞLIYOR OLABİLİR — VE BU,
  YAPISAL OLANDAN DAHA TEHLİKELİDİR ÇÜNKÜ AYNI GÖRÜNÜR.**

  **Vaka (8 Ağustos 2026, RENK 2).** Bir renk partisinden sonra *"kalan 20
  çift YAPISAL, çıkış yok"* diye rapor edildi ve koordinatör bunu kabul
  etti. Sonra tek bir kimlik **yalnız başına** ölçüldü:
  ```
  teke  tek başına        709 aday eşiği geçiyor · en iyi 14,6   ✓
  teke  parti içinde      26 renk seçildikten SONRA        0     🔴
  ```
  ⇒ Partide seçilen **her renk bir sonraki kimliğe engel olur**; geç sıraya
  düşen kimlik **çözülemez GÖRÜNÜR.** Aynı parti ikinci kez koşulunca
  **20 → 7** oldu: bildirilen 20'nin **13'ü yapısal değildi.**

  ```
  TERCİH bağlar → kısıttan çık, ÇÖZÜLÜR      (fransa ↔ portekiz)
  YAPI bağlar   → çıkış yok                   (ingiltere · portekiz)
  SIRA bağlar   → İKİNCİ GEÇİŞ çözer          ← ÜÇÜNCÜ CİNS
  ```
  ⚠️ Üçüncüsünün tehlikesi ötekilerden büyük: **yapısal GÖRÜNÜR ama
  değildir**, ve *"yapısal"* damgası bir sonraki oturumu **denemekten
  alıkoyar.** ⇒ *"Çözülemedi"* raporlanmadan önce **ikinci geçiş koşulur.**

  📌 Ve aynı gün ölçülen bir yan bulgu: sıralama ölçütünü değiştirmek
  **baskın bir kazanç vermiyor**, bir ödünleşme veriyor. *"En bozuk çift
  önce"* denendi: `ceneviz ↔ teke`yi kapattı ama üç başka açılış-sahnesi
  çiftini **açtı** (13 kapanan → 12). ⇒ **Tek bir çifti kayırmak üç
  tanesini bozabilir**; koordinatörün *"şu çifti öne al"* isteği ölçülmeden
  uygulanmaz.

- 🔴 **BİR KISIT "UYGULANAMADI" DİYE SESSİZ GEÇİLİRSE, UYGULANMIŞ SANILIR.**

  **Vaka (8 Ağustos 2026, RENK 2).** Koordinatör `luba ↔ lunda` çiftini
  özellikle işaretledi (*"Lunda'nın siyasî modeli Luba'dan türedi, kullanıcı
  o ilişkiyi okurken ayırt edebilmeli"*). Kısıt yazıldı — **ve hiç
  çalışmadı:**
  ```python
  if rk in R.BOYALAR:      # lunda'nın rengi HENÜZ YOKTU
      ...                  # dal HİÇ girilmedi, ÖZEL ÇİFT satırı BASILMADI
  ```
  Çözücü normal bitti, *"çözdüm"* dedi. Kısıtın kurulmadığı ancak **çıktı
  satır satır okununca** görüldü.
  ⇒ **Çare `assert`:** kurulamayan özel kısıt artık çözücüyü **durduruyor.**
  İkinci geçişte kuruldu: `luba ↔ lunda` **ΔE 60,7** (hedef ≥ 25).
  📌 Bu, aynı gün ölçülen *"aletin BASMADIĞI ≠ ölçtüğü"* dersinin **kısıt
  tarafı**: orada bir bölüm hiç ölçmüyordu, burada bir kısıt hiç
  kurulmuyordu — **ve ikisi de sessizdi.** Sessiz atlama, yanlış sonuçtan
  daha zor bulunur: yanlış sonuç bir sayı gösterir, sessiz atlama **hiçbir
  şey göstermez.**

- 🟢 **VE NÖBETÇİ İLK GERÇEK YAKALAYIŞINI YAPTI — "KAÇ TANE VAR" DEĞİL
  "KAÇ TANE YENİ DOĞDU".**
  Beş renk istendi, **dokuz yazıldı**: nöbetçi dört kimliğin `kongo-kralligi`
  · `lunda-imparatorlugu` · `ndongo` · `avustralya` **veride KULLANILDIĞI
  hâlde renksiz** olduğunu buldu.
  ```
  istenen beş     künyeli-renksiz               → sessiz borç
  bulunan dört    VERİDE KULLANILIYOR + renksiz → `§8`: BOYANMIYOR = harita DELİĞİ
  ```
  Ve sayının **2 → 4 diye BÜYÜDÜĞÜNÜ** de gösterdi: nokta oturumu yazarken
  doğuyorlardı. ⇒ Bir sayaç *"dört tane var"* derdi; nöbetçi ***"ikisi az
  önce doğdu"*** dedi — ve asıl bilgi ikincisidir.

- 🔴 **BİR ALAN TASARLAMADAN ÖNCE, O ALANIN ZATEN VAR OLUP OLMADIĞINI ÖLÇ —
  VE VARSA, ONUN NEYLE DOLU OLDUĞUNU DA ÖLÇ.**

  **Vaka (8 Ağustos 2026, koordinatör).** Kullanıcı yerleşimlere zamanla
  değişen bir *sınıf* istedi. Koordinatör `sinif:` diye yeni bir alan
  tasarladı, `ALTYAPI.md`ye yazdı, **kullanıcıya bildirdi.** Sonra üretim
  logunda şu satır çıktı:
  ```
  UYARI kademe: Dubrovnik (k:3) m: zinciri bir k1/k2 merkeze kapanmıyor
  ```
  ⇒ `k:` alanı **zaten vardı**, ve `VERI-YAPISI.md` zamanlı hâlini
  (`kd:[{f,t,k,m}]`) **zaten tasarlamıştı** — *"k/m'nin yerini alacak"*
  notuyla birlikte. Yeni alan **gereksizdi**, ve `kd:` daha iyiydi: kademeyi
  **ve** bağlı merkezi *birlikte* zamanlı yapıyor, yani `Değişmez 3`ün 359
  çiftini de çözüyor — ayrı bir `sinif:` alanı çözmezdi.

  🔴 **Ve ikinci kusur birincisinden ağırdı: TASARIM VERİYE UYGULANINCA
  ÇÖKTÜ.** Koordinatör *"4. sınıf = ağırlık 0, yani kapı ağırlığın özel
  hâlidir"* demişti — matematik doğru, ve kullanıcıya *"güzel bir sonuç"*
  diye sunuldu. Ölçüm:
  ```
  k:4 → 473 NOKTA   İnegöl · Geyve · Kestel · Aydos Kalesi
  k:0 → 1538 NOKTA  (yabancı şehir; "kademesiz" demek, "ağırlıksız" DEĞİL)
  ```
  Ağırlık 0 verilse **473 petek bir gecede silinirdi** ve çoğu **doğruydu**:
  İnegöl 1300'de bir kasabadır ama 40 km'de başka nokta yoktur, toprağı
  tutması gerekir.
  ⇒ Doğrusu ağırlığın **sıfırlanması değil KÜÇÜLTÜLMESİ**: sonucu belirleyen
  ağırlığın kendisi değil **komşusuyla ORANI.** Aynı düşük ağırlık,
  İstanbul'un yanında ihmal edilebilir bir hücre verir, boşlukta ise koca bir
  bölge — **ve ikisi de doğrudur.**

  📌 Ve bu, aynı gün ölçülen `banda-adalari` vakasının tersidir: orada küçük
  bir kimlik **komşusu olmadığı için** 573.188 km² boyuyordu. **Petek
  büyüklüğünü belirleyen şey noktanın kendisi değil ÇEVRESİDİR.** İki vaka,
  tek kural.

  ⚠️ Ve zarar sayıldı: yanlış talimat **çalışan bir oturuma gitti**
  (*"`k:0` yazma"* — oysa 1538 noktanın 1538'i `k:0`). Bir tur boşa gitti.
  ⇒ **Tasarım, veriden ucuz değildir.** Bir alan icat etmek beş dakika,
  `git grep` ile var olanı aramak **on saniye**.

- 🔴 **BİR ARACIN VERDİĞİ REÇETE, UYGULANINCA KENDİ TESTİNİ GEÇMEK
  ZORUNDADIR — GEÇMİYORSA TEŞHİS DOĞRU AMA REÇETE KULLANILAMAZDIR.**

  **Vaka (8 Ağustos 2026).** `denetle.py` dört noktayı *"kara maskesinin
  dışında"* diye bildirdi ve her biri için **"en yakın kara"** koordinatını
  verdi. NOKTA GDASYA noktaları **tam oraya** taşıdı. Denetim üçünü **yine
  reddetti** — bu sefer:
  ```
  Larantuka   0.00 km dışarıda   -8.3416,122.9896 → en yakın kara AYNI NOKTA
  ```
  ⚠️ *"0,00 km dışarıda"* **kendi içinde çelişkili bir cümledir**, ve bir
  aracın ürettiği çelişkili cümle onun **ölçtüğü şeyin sınırına vardığının**
  işaretidir.

  🔴 **VE KOORDİNATÖRÜN İLK TEŞHİSİ YANLIŞTI.** *"Test `contains()`
  kullanıyor, sınırı hariç tutuyor"* dedi — koda bakınca `covers()` çıktı,
  yani sınır **zaten dâhildi.** Gerçek sebep **yuvarlama**: `nearest_points`
  kıyı çizgisinin *üstünde* bir nokta verir, dosyaya **4 ondalıkla (~11 m)**
  yazılınca kıl payı dışarı düşer.
  📌 Yani hüküm doğruydu (*"kusur araçta, veride değil"*) ama teşhis
  yanlıştı — `B10`un koordinatörün kendi üzerinde gerçekleşmiş hâli, ve
  düzeltmeyi **koda bakmak** verdi, akıl yürütmek değil.

  **Çare ölçütü değiştirmek değil, REÇETEYİ SINAMAK oldu:** öneri artık
  içeri doğru kaydırılıyor **ve yazılacağı hassasiyette** (`round(…, 4)`)
  sınanıyor; geçmezse `⚠️ bu öneri sınandı ve GEÇMEDİ` diye damgalanıyor.
  Uygulandı: `konum` **4 → 0**.
  ⇒ **Bir denetimin iki yönü sınanır (`§11`), ama bir REÇETENİN üçüncü bir
  yönü vardır: uygulandığında işe yarıyor mu?** Bu proje ilk ikisini
  biliyordu, üçüncüsünü bilmiyordu.

- 🔴 **ATLAS SEFERİ DEĞİL TASARRUFU BOYAR — bir kimliğin TARİHSEL ERİŞİMİ
  ile HARİTADAKİ GÖVDESİ ayrı şeylerdir.**
  **Vaka (8 Ağustos 2026).** Koordinatör `ace ↔ ming` aynı-hex çiftini
  ölçtürürken şunu yazdı: *"Zheng He seferleri Sumatra'ya ulaşıyordu, Ming
  donanması 15. yüzyılda Malaka Boğazı'ndaydı — eşzamanlı ve yakın bir an
  var mı?"* **Tarihen doğru, ÖLÇÜT OLARAK YANLIŞ.**
  ```
  yanlış soru   "Ming oraya gitti mi?"
  doğru soru    "orada `d:"ming"` yazan bir NOKTA var mı?"
  ```
  Ölçüm: Ming'in en yakın gerçek tasarrufu **Hainan**, eşzamanlı en yakın
  çift **2185 km** ⇒ paylaşım MEŞRU. Donanma boğazdaydı ama **gövde** iki
  bin kilometre ötede.
  🟢 **VE KAYIT DÜZELTİLDİ — bu kural TEK BİR OTURUMUN DEĞİL.** Koordinatör
  onu *"RENK 2'den çıkan kurallar"* listesine koydu; RENK 2 itiraz etti:
  > *"O soruyu SEN sordun. Zheng He'yi sen hatırlattın. Ben yalnız ÖLÇÜTÜ
  > daralttım. Tarihsel bilgi seninkiydi; benim eklediğim HANGİ SORUYU
  > SORMAMIZ GEREKTİĞİYDİ."*

  📌 Ve aynı oturum bunun bir **desen** olduğunu gösterdi — aynı gün üç kez:
  ```
  `renkler.py` başlığı        fikir DOSYADA yazılıydı · ölçütü RENK 2 kurdu
  `ceneviz ↔ teke` eşiği      fikir KOORDİNATÖRDEN · ölçüm onu ÇÜRÜTTÜ
  `ace ↔ ming`                fikir KOORDİNATÖRDEN · ölçütü RENK 2 daralttı
  ```
  ⇒ ***Üçünde de fikir birinden, ÖLÇÜT ötekinden geldi.*** Bir kuralı tek
  bir tarafa yazmak, onu doğuran çevrimi görünmez kılar — ve o çevrim
  kuralın kendisinden daha değerlidir, çünkü **tekrarlanabilir.**

  📌 `§3.5`in *hayalet devlet* dersinin **renk tarafı**: orada **var
  olmayan** devlet boyanıyordu, burada **uğrayan** devlet boyanacaktı.

- 🔴 **EŞİK TEK SAYI DEĞİLDİR: ANLATININ MERKEZİNDEKİ ÇİFT DAHA FAZLASINI
  HAK EDER — VE GEREKÇESİ VERİDE DEĞİL KRONOLOJİDEDİR.**
  **Vaka (8 Ağustos, RENK 2).** `bugis-kralliklari ↔ gova-makassar`:
  ```
  ΔE ≥ 12 (okunabilirlik tabanı)  →  ölçüm 12,4 · GEÇERDİ ama YETMEZDİ
  hedef 25 konarak yeniden çözüldü →  ölçüm 25,8 ✓
  ```
  Sebep veride değil: **Makassar Savaşı'nın iki tarafı bunlar.** Kullanıcı
  o savaşı okurken tarafları ayırt edememek, eşiği teknik olarak geçen bir
  renkten **kat kat** kötüdür.
  ⇒ **Eşik gevşetilmez — SIKILAŞTIRILIR**, ve hangi çiftin sıkılaştırmayı
  hak ettiğini **kronoloji** söyler. (`ava ↔ ayutthaya` — Burma-Siyam
  savaşları — aynı sınıfın ilk vakasıydı.)
  📌 `B15`in aynası: o *"eşiğin taban mı tavan mı olduğunu söyle"* der, bu
  *"tabanın ÜSTÜNE çıkmayı hak eden çift vardır"* der.

- 🔴 **ENGEL KÜMESİ, KAPATILMAK İSTENEN ÇİFTİ İÇERMİYORSA ÇÖZÜM O ÇİFTİ
  ÇÖZMEZ — VE ÇÖZÜCÜ BUNU SÖYLEMEZ, "ÇÖZDÜM" DER.**

  **Vaka (8 Ağustos 2026, RENK 2).** Bir renk çakışması çözülürken engel
  kümesi **600 km** süzgeciyle kuruldu; oysa kapatılacak çiftler **647-1170
  km** aralığındaydı ⇒ **kısıta hiç girmediler.** Çözücü kusursuz çalıştı,
  "çözdüm" dedi, ve hedef çiftler hâlâ eşiğin altındaydı (`le-hanedani`
  11,89 · `mac-hanedani` 10,51).
  ⇒ **Alet başarı bildiriyor ve başarı KENDİ TANIMINA GÖRE gerçek.**
  Bu, *"doğru aleti yanlış evrenle koşturmak"* ailesinin **seçim tarafı**
  ve en sinsi üyesi: hata ne çıktıda ne kodda — **girdide.**
  📌 Çare bir doğrulama adımı: **kapatmak için seçilen her çift, çözüm
  sonrası eşiği GERÇEKTEN geçiyor mu?** `C13`ün bu dalı yoktu.

- 🔴 **"ÇÖZÜLEMEDİ"NİN İKİ CİNSİ VARDIR VE AYIRT EDİLMELİ.**
  ```
  TERCİH bağlıyor      → kısıttan çıkılır, ÇÖZÜLÜR
  YAPI bağlıyor        → çıkış YOK, başka gövde taşınır
  ```
  **İki vaka, aynı cümle, farklı sonuç:**
  ```
  fransa ↔ portekiz    bağlayan `uyum` TERCİHİYDİ (7 Ağustos)
                       ⇒ tercihten çıkıldı, ÇÖZÜLDÜ
  ingiltere/portekiz   bağlayan KOMŞULUK SAYISI: 197 ve 262 komşu,
                       163.446 adayın SIFIRI eşiği geçiyor (8 Ağustos)
                       ⇒ YAPISAL, çıkış yok
  ```
  ⇒ *"Çözülemedi"* raporlanırken **hangi cins olduğu yazılır** — yoksa bir
  sonraki oturum **çözülebileni de imkânsız sanar** ve denemez.

- 🔴 **BİR BİLGİ İKİ YERDE DURUYORSA, BİRİ GÜNCELLENİNCE ÖTEKİ BAYATLAR —
  VE HANGİSİNİN OKUNDUĞUNU ALET SÖYLER, GÖZ DEĞİL.**
  **Vaka (8 Ağustos, RENK 2 — ve nöbetçi YAZARINI yakaladı):** sabah
  eklenen *"beyan edilen paylaşım bozuldu"* uyarısı, öğleden sonra onu
  yazan oturumun kendi düzenlemesinde öttü. Düzeltirken ikinci ders çıktı:
  beyan **iki yerde** duruyordu — insan okunur yorum **ve** makine okunur
  sözlük. **Yorum güncellendi, sözlük unutuldu, uyarı susmadı.**
  📌 `uret_bekleyenler.py`nin *"iki otorite doğar ve ayrışır"* dersinin
  üçüncü vakası — ve ilk kez **aynı dosyanın içinde.**
  📌 Ve asıl ders: ***bir nöbetçinin değeri, onu YAZANI DA bağlamasıdır.***

- 🔴 **BİR RAPORDA ÖLÇÜLMÜŞ İLE HATIRLANMIŞ YAN YANA DURURSA, OKUYAN
  İKİSİNİ DE ÖLÇÜLMÜŞ SANAR — VE YAZAN DA.**

  **Vaka (8 Ağustos 2026, RENK 2'nin kendi çözümlemesi).** Dört satırlık bir
  bulgu bloğu gönderildi; okuyan (koordinatör) dördünü de ölçülmüş sandı ve
  üçüncü bir oturuma aktardı. Sonra ölçüldü:
  ```
  "künyede HİÇ GEÇMİYOR"        ✓ ÖLÇÜLDÜ    (alet doğru çalışmıştı)
  "1288'de bitiyor"             ✗ HATIRLANDI  ve YANLIŞ
  "palembang devralıyor"        ✓ ÖLÇÜLDÜ
  "kasıtlı mı, YAZILI DEĞİL"    ✗ HİÇ BAKILMADI — ve YAZILIYDI, İKİ YERDE
  ```
  🔴 **Üçüncüsü en ağırı:** *"kabul edilmiş borç kayıtsız kalırsa yarın
  kusur diye yeniden bulunur"* dersini **yazan oturumun kendisi**, bu sefer
  **kaydı ARAMADAN "kayıtsız" ilan etti.** Dersi uyguladı sandı; **ölçmeden
  uyguladı.**
  ⇒ **Çare:** ölçülmemiş her cümle **açıkça işaretlenir** ya da **yazılmaz.**
  `§7.1 ④`ün *"bulamadığını `bulunamadı` diye yaz"* kuralının ters yüzü:
  ***ölçmediğini `ölçmedim` diye yaz.***
  📌 Ve blok hâlinde sunmak tehlikeyi büyütüyor: ölçülmüş satırlar,
  yanlarındaki ölçülmemiş satıra **kendi güvenilirliklerini ödünç veriyor.**

  🟢 **Ve zincir NİÇİN KIRILMADI — üçüncü bir ölçüm sayesinde.** Yanlış
  bilgi aktarılan oturum ona göre karar **vermemişti**: kararı zaten
  vermişti, **doğru tarihle**, ve kendi ilerleme dosyasına yazmıştı.
  ⇒ `B10` ihlali gerçekti ama **zararı bağımsız bir ölçüm emdi.** Üç
  oturumun üçünün de kendi ölçümüne güvenmesi, tek bir yanlış aktarımın
  yayılmasını engelledi.

- 🔴 **HÜKÜM İLE TEŞHİS AYRI ŞEYLERDİR — bir raporu kabul etmeden ÖLÇ.**
  RENK 2 şunu bildirdi: *"`merini` rengini yazdım ama hiçbir zaman
  boyanmayacaktı — künyesi `harita:"fas"` diyor."* **Hüküm doğruydu.**
  Ölçüldü, **teşhis yanlıştı**:
  ```
  BOYALAR içinde "merini"      VAR
  veride  d:"merini" dönemi      0     ← ASIL SEBEP BU
  ```
  Renk görünmüyordu çünkü **onu kullanan veri yoktu** — Fas göçü hiç
  yapılmamıştı. Bildirilen `harita:` alanı düzeltilseydi **renk yine
  görünmeyecekti** ve kusur "kapatıldı" sayılacaktı.
  ⇒ Doğru hüküm, yanlış teşhisle gelebilir. **Rapor ne kadar iyi olursa
  olsun, düzeltmeden önce sebebi kendin ölç.**

- 🔴 **BİR ALETİN EVRENİ DEĞİŞİNCE, ALET DEĞİŞMEDEN SESSİZCE YANILIR.**
  7 Ağustos'ta **üç ayrı oturum** aynı tuzağa düştü, üçünde de kod bir
  satır bile değişmemişti — değişen **taban**dı:
  ```
  NOKTA HALKA-2 1   dosyası girdi.py'ye bağlanınca kendi 181 noktasını
                    KENDİSİYLE karşılaştırdı  → 181 sahte mükerrer, 0,00 km
  NOKTA HALKA-2 2   aynı sebep                → 88 sahte mükerrer
  NOKTA HALKA-2 3   aynı sebep                → "128 hata"
  ```
  Üçü de yanlış alarmı kendi yakaladı ve düzeltti. **Kural: bir dosya
  bağlandığı gün, o veriye bakan BÜTÜN ölçüm aletlerinin tabanı yeniden
  doğrulanır.** Aletin doğruluğu evreninden bağımsız değildir.

- 🔴 **"ŞU DÜZELTMEYİ YAP" DENİNCE ÖNCE KUSURUN ÜREYİP ÜREMEDİĞİNİ ÖLÇ —
  ve düzeltmenin HER DALDA doğru olduğunu.**
  `id:` ∪ `harita:` okuma önerisi RENK 2'ye gitti. Ölçtü:
  ```
                            harita-or-id (mevcut)   id ∪ harita (önerilen)
  künyesi var, rengi yok           63  ✓                96  🔴 +33 YANLIŞ
  rengi var, künyesi yok            3                    2  ✓
  ```
  33 fazlanın sebebi: `bosna-kralligi` (harita=`bosna`) gibi künyelerin
  `harita:` alanı **başka anahtara** bakar — kendi renklerine ihtiyaçları
  **yoktur**. Birleşim onları "rengi eksik" sayardı.
  ⇒ Çare birleşim değil **ayrı bir dal** oldu: *"künye var ama `harita:`
  başka anahtarda"*. Ve o dal **ilk koşusunda gerçek bir bulgu** verdi.
  📌 Ama **`js/app.js`te birleşim DOĞRUYDU** ve uygulandı: `devletAdi()`
  yalnız `d.id` okuduğu için **30 gövde ham slug gösteriyordu** (`kaffa` ·
  `sirbistan` · `ceneviz` · `sovalye`…). **Aynı soru, iki yerde iki farklı
  cevap — ve ikisine de ölçüm karar verdi, kural değil.**

- 🔴 **BİR KURALIN YAZILI OLMASI, UYGULANDIĞI ANLAMINA GELMİYOR — ve ihlaller
  GİDEREK SESSİZLEŞİYOR.** `§11`in *"kaçış içeren hiçbir düzeltme bash'ten
  geçirilmez"* kuralı 8 Ağustos'ta **dört oturumun dördü tarafından da**
  ihlal edildi (koordinatör beş kez). Ama asıl bulgu sayı değil **dizilim**:
  ```
  ① betik patladı                        gürültülü — hemen görülür
  ② betik patladı                        gürültülü
  ③ metin sessizce boşaldı               sessiz — gözle bulunur
  ④ commit BOŞA GİTTİ ama "başarılı" BASTI   ← EN TEHLİKELİSİ
  ```
  Dördüncüsünde `git commit` backtick yüzünden hiç çalışmadı, **ama ekrana
  "commit tamam" yazıldı.** Fark edilmeseydi o oturumun bütün raporu
  commit'siz kalacaktı — yani **rapor vardı, dayanağı yoktu.**
  ⇒ *"Patlayan → sessizce bozan → başarılı görünen."* Aynı kural, giderek
  daha zor fark edilen üç biçimde çiğnendi.
  📌 Teşhis RENK 2'nin: ***"Kural yetmiyor, ALIŞKANLIK gerekiyor."***

  🔴 **VE KURAL, KENDİ COMMIT'İNDE BEŞİNCİ KEZ ÇİĞNENDİ — aynı gün, aynı saat.**
  Yukarıdaki dersi yazan commit'in mesajı `py -c "…"` ile kabuktan geçirildi
  ve içindeki `` `kavalali` `` backtick'i **çalıştı**:
  ```
  yazılan  "Ve aynı gün bedeli ölçüldü: `kavalali` bir yıl boyunca…"
  inen     "Ve aynı gün bedeli ölçüldü:  bir yıl boyunca…"
  git      kod=0 · push kod=0 · ekranda hiçbir uyarı YOK
  ```
  Cümlenin **öznesi silindi**, commit *"başarılı"* göründü, ve kusur ancak
  `git log` okunarak bulundu. ⇒ Dizilimin dördüncü basamağının **canlı
  örneği**, ve dersi yazan metnin kendisinde.
  ⚠️ **Düzeltilmedi:** commit push'lanmış ve üstüne başka bir oturum commit
  atmıştı; geçmişi yeniden yazmak paylaşılan index'te daha pahalıdır. **Kusur
  silinmedi, KAYDEDİLDİ** — bu satır onun kaydıdır.
  📌 Ve asıl ders şu: **kuralı bilmek, hatta o anda yazıyor olmak bile
  yetmiyor.** Yeter olan tek şey **aracı değiştirmek**: metin `Write` ile
  dosyaya yazılır, `git commit -F <dosya>` ile verilir, kabuk hiç görmez.
  **Çare:** commit mesajı da dosyaya yazılır ve `git commit -F <dosya>` ile
  verilir. Kaçış içeren hiçbir metin kabuktan geçmez — **ne veri, ne betik,
  ne commit mesajı.**

- 🔴 **KOORDİNATÖRÜN "HIZLI BİR BAKIŞ" ÖLÇÜMÜ, İŞ DAĞITIMININ TABANI
  OLUNCA ARTIK HIZLI BİR BAKIŞ DEĞİLDİR** — *(10 Ağustos 2026, aynı gün
  DÖRT vaka)*

  Koordinatör gün boyu `grep -c` ve tek satırlık regex'lerle sayı üretti ve
  o sayıları **şartnameye yazdı.** Dördü de çürüdü, ve **dördünü de işçi
  oturumlar düzeltti** — hepsi kaydı gerçekten okuyarak:
  ```
  renk sayısı        330  →  333   üreteç (`durum_tablosu.py`) düzeltti
  içerik kalemi       17  →    6   KUTU DENETİM kartları saydı: 11'i ZATEN yazılmış
  içerik kartı         5  →    7   İÇERİK: "iki ayrı soru, tek karta inmez"
  padişah alanları  0/41 → 7·11·7  PADİŞAH: "lakap/esler/cocuk zaten kısmen dolu"
                  boş kart 16 → 14  (ikisi `ozel:true` — tasarım, eksiklik değil)
  ```

  🔴 **Ve bedeli tek bir yanlış sayı değil: YANLIŞ İŞ TARİFİ.** *"17 içerik
  kalemi bekliyor"* diye yazılan şartname, **ödenmiş bir borcu yeniden
  kuyruğa** koyuyordu; oturum onu okuyup 11 kartı **yeniden yazabilirdi.**
  📌 Bu, `§11`in *"kabul edilmiş borç kayıtsız kalırsa yarın kusur diye
  yeniden bulunur"* kuralının **TERS YÜZÜ**: ödenmiş bir borç da kayıtsız
  kalırsa yeniden **iş** diye bulunur. **Kayıt iki yöne de gerekiyor.**

  ⚠️ Kural zaten yazılıydı — *"veri zaten bir dilde yazılıysa, o dilin
  yorumlayıcısını çağır"* (`girdi.py` tek tırnak · `bagla.py` CRLF · regex
  yerine import). Bugünkü dördü de **aynı kuralın ihlali**, ve ihlal eden
  onu yazan taraftı.

  🟢 **KURAL:** bir sayı **yalnız kendi turumu bilgilendiriyorsa**
  kaba ölçüm yeter. Ama o sayı **bir şartnameye, bir kabul ölçütüne ya da
  bir başkasının iş tarifine** giriyorsa:
  ```
  ① veriyi kendi dilinde ayrıştır (JS → node · Python → import)
  ② ya da var olan ÜRETECİ çağır (`durum_tablosu.py` · `denetle.py`)
  ③ ikisi de yoksa: sayının yanına "kaba ölçüm, doğrulanmadı" YAZ
  ```
  📌 ③ en ucuzu ve en çok atlananı. Şartnameye *"~17 kalem (kaba sayım)"*
  yazmak, işçinin ilk işini **doğrulama** yapar; *"17 kalem"* yazmak onu
  **taban** yapar. Aradaki fark bir tilde işareti.

  🟢 Ve iyi haber ölçüldü: **dördünü de işçi oturumlar yakaladı**, çünkü
  şartnameleri *"devraldığın rakamı doğrulamadan aktarma"* diyordu ve
  **uyguladılar.** Sistem çalıştı — ama kaynağında düzeltilirse dört tur
  daha ucuza çalışır.


- 🔴 **`-F <dosya>` KULLANMAK YETMİYOR — O DOSYANIN NASIL YAZILDIĞI DA
  KURALIN İÇİNDE.** *(altıncı vaka, 10 Ağustos 2026)*

  `§11` şöyle bitiyordu: *"commit mesajı da dosyaya yazılır ve `git commit -F
  <dosya>` ile verilir. Kaçış içeren hiçbir metin kabuktan geçmez."* Bugün o
  kural **harfiyen uygulandı ve amacı yine çiğnendi:**
  ```
  yapılan   printf '%s\n' "... VERİ DEVLET 2 `toga-timur` künyesi önerdi ..." > c11.txt
            git commit -F c11.txt          ← kural burada SAĞLANDI
  olan      backtick PRINTF'İN ARGÜMANINDA, yani mesaj dosyaya yazılmadan
            ÖNCE bash tarafından çalıştırıldı: "toga-timur: command not found"
  inen      "VERİ DEVLET 2  künyesi önerdi"   ← ÖZNE SİLİNDİ
  git       kod=0 · push kod=0 · ekranda tek uyarı YOK
  ```
  ⚠️ Yani `-F` doğru yerdeydi; **delik bir adım YUKARIDAYDI.** Kural
  *"mesajı kabuktan geçirme"* diyor, ama mesajı **kabukta ÜRETMEK** de aynı
  şeydir — metin `-F`e ulaşmadan çoktan bozulmuştur.

  🟢 **TAM BİÇİM:** mesaj **`Write` aracıyla** dosyaya yazılır, bash o
  dosyaya **hiç dokunmaz**, sonra `git commit -F <dosya>`. Üç adımın üçü de
  şart; ikisi yeterli değil.

  📌 Ve asıl ders `§11`in kendi cümlesinin bir kademe ötesi: orada
  *"kural yetmiyor, ALIŞKANLIK gerekiyor"* deniyordu, sonra *"yeter olan tek
  şey ARACI DEĞİŞTİRMEK"*. Bu vaka üçüncüsünü ekliyor: **aracı değiştirmek de
  yetmiyorsa, ARACIN GİRDİSİNİN nereden geldiğine bakılır.** Doğru alete
  bozuk metin vermek, yanlış alet kullanmakla aynı sonucu verir.

  ⚠️ **Düzeltilmedi, KAYDEDİLDİ:** commit push'lanmıştı ve iki işçi oturum
  canlıydı; paylaşılan depoda geçmişi yeniden yazmak (force-push) bu satırı
  kurtarmaktan pahalıdır. `kavalali` vakasında verilen kararın aynısı.

- 🔴 **BİR DÜZELTMENİN VERİDE İNMESİ, HARİTADA İNDİĞİ ANLAMINA GELMEZ.**
  Sıra kuralının **üç** ayağı var ve üçüncüsü aynı gün tamamlanamaz:
  ```
  veri → renk → KOŞU
  ilk ikisi aynı gün yapılabilir · ÜÇÜNCÜSÜ YAPILAMAZ (~73 dk)
  ```
  **Vaka (8 Ağustos):** `ainu` kaydı veriden kaldırıldı (2 → 0), rengi
  `BOYALAR`dan düşürüldü — ama koşu **veri düzeltilmeden önce** bitmişti.
  `renk_cikti` yayını okudu ve *"`ainu` · çizilen `#1b8ae4` · **beyan YOK**"*
  dedi: **hayalet canlı yayında** ve ancak bir sonraki koşuda düşecek.
  ⚠️ Bu bir kusur değil **kabul edilmiş borçtur** — ama *yazılmazsa* bir
  sonraki oturum onu kusur diye ikinci kez keşfeder.
  ⇒ **Veriyle çıktı arasında bir tur gecikme varsa, o tur TESPİHE YAZILIR.**

  📌 En keskin hâli RENK 2'nin: ***"Çıktı, girdinin bir tur gerisindedir ve
  bu bir kusur değil bir GECİKMEdir — ama gecikme KAYITSIZSA kusurdan ayırt
  edilemez."*** Ve aynı gün bunun bedeli ölçüldü: `kavalali` bir yıl boyunca
  *"kronoloji bekliyor"* diye kuyrukta durdu, çünkü kaydedilen şey **ölçüm
  değil teşhisti** ve teşhis yanlıştı.
  ⚠️ Ölçülmüş ve kabul edilmiş bir borç, **kayıtsız kalırsa yarın bir kusur
  olarak yeniden bulunur** — ve ikinci keşif, ilkinin emeğini boşa çıkarır.

- 🔴 **ALETİN GÖSTERDİĞİ ≠ DOSYADA YAZAN.** Bir `\b` kaçışı bozulup dosyaya
  **0x08 (BACKSPACE) baytı** yazıldı. `Read` onu **görünmez** gösterdi —
  satır ekranda kusursuz görünüyordu:
  ```
  ekranda   re.findall(r"<script(?![^>]*\bsrc=)…"
  dosyada   re.findall(r"<script(?![^>]*␈src=)…"     ← 0x08
  ```
  Sonuç: lookahead hiç eşleşmedi, denetim `<script src=…>` etiketlerini de
  saydı (1 yerine **55**). Denetim **çalışıyordu ama sayısı yalandı** —
  yani ne çıktı hata verdi ne de göz.
  > **Bir düzenlemenin doğruluğundan şüphelenmek için sebep varsa,
  > `Read`'e değil `repr()`'e sor.** `inspect.getsource(...)` + `repr` ya da
  > `open(yol,"rb").read().count(b"\x00…")` görünmeyeni gösterir.

  📌 Bu, kusur listesinin **onuncu** sınıfı ve öncekilerin hiçbirine
  benzemiyor: ①-⑦ *yanlış şeyi ölçmek*, ⑧-⑨ *hiç ölçmemek*, ⑩ ise
  **doğru şeyi ölçüp ALETİN yalan söylemesi.**

- 🔴 **BİR ŞİKÂYET, ŞİKÂYET EDİLEN ŞEYDEN DAHA HIZLI BAYATLAR — VE EKRAN
  GÖRÜNTÜSÜ KENDİ TARİHİNİ TAŞIR.** *(10 Ağustos 2026, İÇERİK)*

  `h15#10`: Emre bir ekran görüntüsünde Hotin çevresinde **yeşil** bir alan
  ve üstünde `BOĞDAN VOYVODALIĞI` etiketi gördü. Üç ölçüm yapıldı:
  ```
  yerleşim katmanı   Boğdan kutusu 1600 · 1621 · 1650 → ÜÇÜNDE DE 8/8 TÂBİ
  devlet katmanı     bogdan gövdesi TEK dönem: 1281-01-01 → 1456-06-01
                     ⇒ 1621'de aktif dönem: 0 · yeşil ÇİZİLEMEZ
  katman sırası      app.js:761 vassal-dolgu, app.js:725 devlet-dolgunun ÜSTÜNDE
  ```
  Üçü de *"bugünkü veri bunu üretemez"* diyordu ama hiçbiri **niçin**
  göründüğünü söylemiyordu. Cevabı **görselin kendisi** verdi:
  ```
  ekran görüntüsündeki kronoloji başlığı   "422 / 951 başlık"
  bugün                                          1161 madde
  ⇒ görüntü 210 madde geride bir yayından
  ```
  🟢 **Ve buradan bir alet çıktı:** *kronoloji panelindeki `N / TOPLAM
  başlık` sayısı, görüntünün hangi yayından olduğunu birebir söyler.*
  ⇒ Her görsel şikâyette **ilk soru** *"bu kusur var mı"* değil,
  ***"bu şikâyet hâlâ geçerli mi"*** olmalı — ve cevabı ölçümle değil
  **görsele bakarak** verilebiliyor.
  ⚠️ Sınırı ölçülmedi: panel her görselde okunmuyor (dar kırpılmış olanlar
  var), kaçında okunabildiği **sayılmadı.**

  📌 Bu, *"çıktı girdinin bir tur gerisindedir"* dersinin **kullanıcı
  tarafı.** Orada bayatlayan bizim çıktımızdı; burada bayatlayan
  **kullanıcının şikâyeti** — ve o daha sinsi, çünkü şikâyet bir **talep**
  gibi okunur, bir **ölçüm** gibi değil. Bayat bir talebi düzeltmeye
  kalkmak, düzelmiş bir şeyi bozmaktır.

- 🔴🔴 **"İSTENEN ŞEYİN ALTYAPISI ZATEN VARDI" — BİR GÜNDE BEŞ KEZ.**
  *(10 Ağustos 2026 — üç ayrı oturum + koordinatör)*
  ```
  _ENKLAV                     yetim yüz muafiyeti · uret_petek.py:874   MOTOR aradı, VARDI
  isg: · k:                   işgal örtüsü (83 kayıt) · kademe (729 nokta)  İÇERİK
  tur:"deniz" · tur:"cekilme" savaslar.js'te 9 + 3 kayıt                 İÇERİK
  ADA KURALI + KARA-KISITLI   uret_petek.py:997 · :1085 — ve yorumları
  SAHİPLİK                    Emre'nin vakalarını ADIYLA sayıyor          MOTOR
  HAREKET tipolojisi          9 tür · 9 glif · 9 katman · dinamik lejant  ARAYÜZ
                              commit 591a5c6, 30 Temmuz 17:20
  ```
  🔴 **Ve sebebi ölçüldü:** kullanıcının hata külliyatı **29 Temmuz – 1 Ağustos**
  tarihli; tarama **10 Ağustos**'ta yapıldı. **Arada on gün iş yapılmış.**

  📌 En keskin vaka `hareket tipolojisi`: commit **30 Temmuz 17:20**, Emre'nin
  `K10` şikâyeti (`h11#31`) **30 Temmuz 16:58** — **yirmi iki dakika önce.**
  Aynı külliyattaki `h18#6` ise **1 Ağustos 00:58**, yani commit'ten **31 saat
  sonra** ⇒ o şikâyet *"tipoloji yok"* demiyor, **başka bir şey** söylüyor
  (rota verisi). ***Dakika farkı, iki şikâyeti iki ayrı kovaya koydu.***

  🟢 **KURAL:** bir kullanıcı talebini işe dönüştürmeden önce **iki ölçüm**:
  ```
  ① git log — bu iş zaten yapılmış mı?      (10 saniye)
  ② şikâyetin TARİHİ ile düzeltmenin TARİHİ  (docx dosya damgası · commit)
  ```
  ⚠️ İkisi de yapılmazsa bedeli *"boşa iş"* değil, daha kötüsü: **yapılmış bir
  işi yeniden yapıp "kapsamı dört katına çıkardım" diye teslim etmek.**

- 🔴 **BİR DERS VERİYE *SERBEST METİN* OLARAK İNERSE, İNMİŞ SAYILMAZ — VE
  `grep` ONU "UYGULANMIŞ" GÖSTERİR.** *(10 Ağustos 2026)*

  Kullanıcı `h17#7`de şunu istedi: *"boş alanların taranarak teyit edilmesi
  gerekmektedir… orada müstakil bir siyasî yapı var ise **etiketlenip
  boyanmalı**."* Yani **boşluğun cinsi ekranda belli olsun.**

  Oysa proje o ayrımı **iki gün önce öğrenmişti** (`§11`, NOKTA SİBİRYA):
  *"Sınav: kaynağa sor. Konuşuyorsa `devletsiz`, susuyorsa `veri-yok`."*
  Ölçüldü:
  ```
  kasitli_bosluk nokta      138
    neden: alanı VAR        133        "devletsiz" 35 · "veri-yok" 2
    cinsi YAZILMAMIŞ         97
  ```
  ⇒ **Ders inmiş — ama `neden:` serbest metninin içine.** Sonuç:
  ```
  🔴 makine SORAMAZ    cins yapılandırılmış alan değil, metne gömülü kelime
  🔴 harita ÇİZEMEZ    motor `neden:` metnini ayrıştırmıyor
  🔴 denetim GÖREMEZ   "cinsi yazılmamış 97 nokta" diye ötecek nöbetçi yok
  ```
  🔴 **Ve sinsiliği burada:** `git grep devletsiz` **45 sonuç** verir. Ders
  *"uygulanmış"* görünür. Uygulanmamış olan **yapı** — ve yapı olmadan ders
  yalnız **o kaydı yazan oturum** için vardır.

  📌 Kusur listesinin **on birinci** sınıfı: ①-⑦ *yanlış şeyi ölçmek* ·
  ⑧-⑨ *hiç ölçmemek* · ⑩ *aletin yalan söylemesi* · ⑪ ***doğru öğrenilmiş bir
  dersin makinenin göremeyeceği yere yazılması.***
  🟢 **Sınavı tek soru:** *bu bilgiyi bir `if` ile sorabiliyor muyum?*
  Sorulamıyorsa kayıt vardır, **veri yoktur.**

  ⚠️ Ve koordinatörün ilk ölçümü de yanlıştı (*"138'inin 138'i düz `true`,
  cinsi yazılı olan 0"*): `kasitli_bosluk` alanının **değerine** baktı, cins
  **başka alandaydı.** *"Ölçüm doğru, evren dar"* — düzeltmeyi işçi oturum yaptı.

- 🔴 **LOG DA BİR ÇIKTIDIR VE O DA BAYATLAR — VE DOSYA ADI NUMARASI TARİHLE
  İLGİSİZ.** *(10 Ağustos 2026, İÇERİK yakaladı)*

  Koordinatör *"topografya yaslaması yetersiz"* hükmünü ölçtü ve şartnameye
  **taban** olarak yazdı:
  ```
  kosu9.log   "43 nehir parçası"  ·  yaslama 8sn      ← okuduğu
  kosu7.log   "187 nehir parçası" ·  yaslama 17sn     ← BUGÜNKÜ KOŞU
  ```
  🔴 **`kosu9.log` 4 Ağustos'a, `kosu7.log` 10 Ağustos'a ait.** En yüksek
  numaralı log **en yeni log değil** — numara koşunun sırasını değil, o gün
  seçilen dosya adını gösteriyor.

  Ve arada duran commit her şeyi söylüyordu:
  ```
  f42f90f · 7 Ağustos · "COGRAFYA KADEME 1: nehir 43 -> 157 parca"
      "Sebep pencere DEĞİLDİ, 31 adlık beyaz listeydi ve tamamı Osmanlı
       kuşağıydı … VERİ DURUYORDU, SÜZGEÇ GEÇİRMİYORDU."
  ```
  ⇒ İş **zaten yapılmıştı.** Şartname düzeltilmeseydi motor oturumu **bitmiş
  bir işi ikinci kez** yapacaktı — ve `43` rakamıyla başlayıp *"kapsamı dört
  katına çıkardım"* diye teslim edecekti.

  📌 Ve üç an üst üste binmişti, üçü de ayrı:
  ```
  31 Tem / 1 Ağu   Emre şikâyet etti      motor: nehir  43
   7 Ağu           KADEME 1 yapıldı       motor: nehir 157
  10 Ağu           bugünkü koşu           motor: nehir 187
  ```
  ⇒ **Emre düzeltmeyi hiç görmedi**, koordinatör düzeltmeden önceki logu okudu,
  ve ikisi birbirini **doğruluyor gibi** göründü. *"Şikâyet var + ölçüm de
  düşük diyor"* = sahte bir teyit.

  🟢 **Kural:** bir koşu logu okunacaksa **tarihi** ölçülür (`ls -l`), adı
  değil. Ve bir kusur hükmü verilmeden önce **`git log`da o kusurun düzeltilmiş
  olup olmadığına** bakılır. İkisi de on saniyelik iş.

- 🔴 **BUGÜNÜN EN SIK HATASI TEK BİR SINIFTI: ÖLÇÜM DOĞRU, ÇIKARIM YANLIŞ.**
  *(10 Ağustos 2026 — bir günde ALTI vaka, üç ayrı oturum + koordinatör)*
  ```
  koordinatör   "118 yetim yüz ← SEBEP"      mutlak sayıyı fark sandı (taban 116)
  koordinatör   Girit "ada ikiye bölünmüş"   geri çekilmiş ölçüme hüküm bağladı
  İÇERİK        h15#20 "1829 Edirne"         ölçüm doğru, VARSAYIM yanlış (1713)
  İÇERİK        h15#10 "iki katman çelişiyor" ölçüm doğru (8/8 tâbi), ÇIKARIM ters
  VERİ DEVLET 2 hanthawaddy "künye bölünmeli" veri ZATEN bölünmüş (toungoo 1539-1740)
  RENK 2        merini "harita: alanı yanlış" sebep O DEĞİL (veride 0 dönem)
  ```
  ⇒ Altısında da **sayı doğruydu.** Yanlış olan, sayıdan çıkarılan hükümdü.
  📌 Ve altısının beşini **başka bir oturum** yakaladı, hiçbirini denetim
  betiği yakalamadı — çünkü betik **sayıyı** denetler, **çıkarımı** değil.
  🟢 Çare bir denetim değil bir **cümle**: rapora *"ölçtüğüm şu, bundan
  çıkardığım şu"* diye **iki ayrı satır** yazmak. Tek satırda birleşince
  çıkarım, ölçümün güvenilirliğini **ödünç alıyor.**
