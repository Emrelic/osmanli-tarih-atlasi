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
| Yerleşim (motorun okuduğu) | **2133** nokta, 32 girdi dosyası |
| Kronoloji | **1158** madde · 1158 duygu etiketli · 432 `yer_id` · 26 `vefat_id` |
| Değişmez 1 — sahipsizlik | ✓ 2133 yerleşim, 172 sahipsiz (beklenen 172) |
| Değişmez 1b — iç boşluk | ✓ pencere arası boşluk: 0 (beklenen 0) — örnekleme YAPILMAZ, tam tarama |
| Değişmez 2 — Osmanlı senkronu | ✓ 499 kırılma, 0 açık (beklenen 0) |
| Değişmez 2s — yabancı senkron | ✓ 712 YABANCI kırılması · 121 AÇIK (tavan 121) · 39 KAPSAM DIŞI |
| Değişmez 2i — işgal senkronu | ✓ 20 İŞGAL kırılması, 3 açık (tavan 3) |
| Değişmez 2t — kırılmasız madde | ✓ kırılmasız madde: 38 (tavan 42) — bilinen borç |
| Konum denetimi | 0 nokta kara maskesinin dışında (beklenen 0) |
| Devletler dizini | **381** künye · **318** renk (`renkler.py`) |
| Dizinsiz harita kimliği | 🔴 **0** kimlik / 0 pencere karşılıksız · *kapsam: `girdi.py`nin okuduğu 32 dosya — bağlanmamış partiler HARİÇ* |
| Padişah · kartvizit | 41 kayıt · 36 portre · **26** kartvizit dolu |
| Harita penceresi | `unary_union([box(-12, -11, 146, 82), box(-25, 60, -12, 82)])` |
| Yayın | **r979** · `5c1597a` |

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
Koordinatör doğruladı: `48,0-49,6°K / 18,8-22,6°D` kutusunda **sıfır nokta**;
Kassa · Tokaj · Eperjes · Sopron · Gyula'nın **hiçbirinin kaydı yok.**

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

### ③ İŞÇİ İŞÇİYE DOĞRUDAN YAZMAZ

Bir oturumun işi başka bir oturumu ilgilendiriyorsa **koordinatöre**
yazılır, koordinatör iletir. Sebebi yetki değil **ölçüm**: koordinatör
kimin neyi beklediğini bilmezse darboğazı göremez, ve iki oturum
birbirini beklerken üçüncü bir işi kimse yapmaz.
📌 İstisna: koordinatör *"şu oturuma doğrudan yaz"* derse.

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
