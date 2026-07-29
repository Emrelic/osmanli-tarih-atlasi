# Tarih Atlası — her oturumun önce okuyacağı dosya

Bu dosya Claude Code tarafından oturum açılışında otomatik okunur. Projenin ne
olduğunu, nasıl çalıştığını, hangi kuralların **ihlal edilemez** olduğunu ve senin
oturumunun hangi dosyalara dokunabileceğini anlatır.

## Belge seti

| Belge | Ne anlatır | Ne zaman okunur |
|---|---|---|
| **`CLAUDE.md`** (bu dosya) | **Nasıl çalışılır** — kurallar, değişmezler, dosya sahipliği, tuzaklar, komutlar | **Her oturumda, baştan sona** |
| `YOL-HARITASI.md` | **Nereye gidiyoruz** — beş eksen, fazlar, bağımlılıklar | Her oturumda |
| `YAPILACAKLAR.md` | **Sıradaki işler** — öncelikli iş listesi | Her oturumda |
| `MIMARI.md` | **Motor ve teknik borç** — petek motoru, çözülmemiş dört sorun | Motora/veri modeline dokunacaksan **şart** |
| `VERI-YAPISI.md` | **Şemalar ve alan sözlüğü** — hangi alan ne demek | Veri yazacaksan **şart** |
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

| Katman | Durum |
|---|---|
| Osmanlı sınırları 1281-1923 | 🟢 740 yerleşimden gün gün üretiliyor, 427 kırılma |
| Kronoloji | 🟢 958 madde, tamamı TDV bağlantılı |
| Harita ↔ kronoloji senkronu | 🟢 427 kırılmanın 427'si maddeli |
| Sahipsiz bölge | 🟢 35 nokta, hepsi kasten boş (çöl / devletsiz bölge) |
| Yabancı devletler haritada | 🟢 104 devlet kendi renginde (`arac/renkler.py`) |
| Padişahlar ve portreler | 🟢 41 kayıt, 36/36 portre |
| Savaş/antlaşma/sefer dizinleri | 🟢 123 + 33 kayıt, 41 sefer güzergâhı |
| Mükerrer madde denetimi | 🟢 `denetle.py`'nin beşinci kontrolü (Jaccard ≥ 0.45) |
| **Devletler dizini** | 🟡 213 kayıt (dünya); derinleştirme sürüyor |
| **Görsel doğrulama** | 🟡 Kullanıcı ekran görüntüsüyle yürütüyor (`hatalar N.docx`) |
| **Dünya kapsamı: yerleşimler** | 🟡 İran 126 · Orta Asya 16 birleşti; Avrupa 228 · Asya 344 · Afrika 153 **merge bekliyor** |
| **Dünya kapsamı: harita penceresi** | 🔴 `box(-12, 1.5, 62, 62)` hâlâ dar; §6'daki sıra beklenecek |

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
kesilir, 117 göl çıkarılır. Bir yerleşim el değiştirince peteği bütün olarak değişir.

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

**Şu an: 740 yerleşimin 35'i sahipsiz ve hepsi KASTEN öyle** — Sahra ve Rub'ul Hâlî
çölleri, 1744 öncesi Necid, körfez şeyhlikleri. Bunlar boş kalması *doğru* olan
yerlerdir; çölün emilip Osmanlı boyanmasını engellemek için konmuş dolgu
noktalarıdır. **Sayı 35'in üstüne çıkarsa yeni bir delik açılmış demektir.**

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

**Şu an: 424 kırılmanın 424'ü maddeli, AÇIK = 0.**

> Tarihsel not: bir ara "238/238 maddeli" deniyordu; o ölçüt fazla gevşekti.
> Ölçüt ±30 güne çekilince 51 maddesiz kırılma ortaya çıktı ve hepsine madde yazıldı
> (`olaylar_ek6.js`). **Ölçütü gevşetme.**

### Değişmez 3 — Dört boyut birbiriyle çelişmez 🟡 henüz sağlanmıyor
Verinin dört boyutu var: **tarih × yerleşim × petek × bölge**. Herhangi bir tarihte,
herhangi bir bölgede "hangi yerleşimler var ve kime aitler" sorusunun **tek tutarlı
cevabı** olmalıdır.

Bu değişmez bugün **sağlanmıyor**, çünkü bölge boyutunun (`k`/`m` alanları) zaman
boyutu yok: bir yerleşim bütün tarih boyunca tek bir merkeze bağlı. Ölçüldü —
**311 yerleşim-tarih çiftinde yerleşim ile bağlı olduğu merkez farklı devletlerin
elinde** (1300'de Söğüt Osmanlı ama `m:"Bursa"` ve Bursa Bizans gibi).

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

`islamansiklopedisi.org.tr/<slug>` **olmayan slug için de HTTP 200 döndürür** ve
sessizce arama sayfasına yönlendirir. "Sayfa açıldı" demek "madde var" demek değildir.
Ölü slug'ı **yalnızca sayfa başlığı** ele verir:

> `<title>` içeriği **"Arama - TDV İslâm Ansiklopedisi"** ise o madde **YOKTUR**.

Her slug'ı bu kontrolle doğrula. Doğru slug'ı bulmak için:
`https://islamansiklopedisi.org.tr/arama/?q=<kelime>` — sonuçlarda gerçek slug'lar var.

Yaşanmış örnekler: `ordu` askerî ordu maddesini açar, şehir maddesi `ordu--sehir`'dir.
`haciemirogullari`, `parga`, `canik`, `asir`, `preveze`, `derbend`, `samahi`,
`salih-reis` diye madde **yoktur**.

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

⚠️ HENÜZ index.html'e BAĞLANMAMIŞ, merge bekleyen yerleşim partileri. Bunlar
   yerlesimler.js şemasıyla birebir aynıdır; ayrı dosya olmalarının tek sebebi
   oturumlar arası çakışmayı önlemekti. Merge ETMEDEN ÖNCE dosya başlarındaki
   uyarı bloklarını oku — çoğu, renkler.py'de karşılığı olmayan devlet kimliği
   kullanıyor ve rastgele renk eklemek DSATUR dengesini bozar (bkz. §7 renkler):
data/yerlesimler_avrupa.js  228 nokta (Oturum 12) — 15 yeni devlet kimliği istiyor
data/yerlesimler_asya.js    344 nokta (Oturum 13) — TAMAMI 62°D'nin doğusunda,
                            harita penceresi açılmadan çizilmez; 98 yeni kimlik
data/yerlesimler_afrika.js  153 nokta (Oturum 14) — pencerenin İÇİNDE, ilk
                            üretimde görünür; 7 nokta yuvarlanmış tarih taşıyor

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
- **Commit ve push yalnız Oturum 0'dan yapılır.** Diğerleri dosyayı yazar, "hazır"
  der. 12-14 MB'lık üretilmiş dosyalarda git çakışması çözmek çok pahalıdır.
- **Oturum 2 ve 6 düzeltme yapmaz, yalnız rapor yazar.** Düzeltmeyi 0 uygular;
  yoksa iki oturum aynı satırı ters yönlerde değiştirir.
- Aynı anda en çok **3 oturum** koştur: 0 + bir Opus + bir Sonnet.
- **Kendi oturumunun dosyaları dışına yazma.** Emin değilsen sor.

Yeni bir oturum başlatılacaksa görev tanımı `oturumlar/` altına yazılır
(örnek: `oturumlar/OTURUM-3-DEVLETLER.md`).

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
py arac/uret_petek.py            # harita üretimi (~15 dk, yalnız Oturum 0)
py arac/surum_damgala.py         # index.html'deki ?v=rNN damgasını yükselt
```

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
