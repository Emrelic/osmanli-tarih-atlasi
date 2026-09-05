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
| Yerleşim (motorun okuduğu) | **3805** nokta, 77 girdi dosyası |
| Kronoloji | **1293** madde · 1238 duygu etiketli · 1196 `yer_id` · 28 `vefat_id` |
| Değişmez 1 — sahipsizlik | ✓ 3805 yerleşim, 315 sahipsiz (beklenen 315) |
| Değişmez 1b — iç boşluk | ✓ BEYANSIZ pencere arası boşluk: 0 (beklenen 0) · beyanlı 5/5 — tam tarama |
| Değişmez 2 — Osmanlı senkronu | ✓ 536 kırılma, 0 açık (beklenen 0) |
| Değişmez 2s — yabancı senkron | ✓ 1327 YABANCI kırılması · 101 AÇIK (tavan 121) · 364 KAPSAM DIŞI |
| Değişmez 2i — işgal senkronu | ✓ 26 İŞGAL kırılması, 3 açık (tavan 3) |
| Değişmez 2t — kırılmasız madde | ✓ kırılmasız madde: 12 (tavan 42) — bilinen borç |
| Konum denetimi | 0 nokta kara maskesinin dışında (beklenen 0) |
| Devletler dizini | **591** künye · **550** renk (`renkler.py`) |
| Dizinsiz harita kimliği | ✓ **0** kimlik / 0 pencere karşılıksız · *kapsam: `girdi.py`nin okuduğu 77 dosya, `s:`+`isg:` alanları — bağlanmamış partiler HARİÇ* |
| Kasıtlı boşluk kimliği | 🟡 **1** kimlik / 2 pencere · *`__BOSLUK__` — hiçbir künyenin kapsamadığı dilim; en yakın kimliğe İTİLMEDİ (`§3.5.1`). Kusur değil, BEYAN* |
| Renkli-künyesiz kimlik | ✓ **0** çiziliyor ama dizinsiz · *kapsam: `renkler.py` BOYALAR − (künye `id` ∪ `harita:`)* |
| Renksiz künye — HARİTA DELİĞİ | ✓ **0** kimlik veride kullanılıyor ama BOYANMIYOR · 🟡 32 sessiz borç (künye var, veride yok) · *kapsam: künye `id` ∪ veride kullanılan − BOYALAR(`harita:` varsa o) · `__BOSLUK__` muaf* |
| Padişah · kartvizit | 41 kayıt · 36 portre · **41** kartvizit dolu |
| Harita penceresi | `box(-180, -60, 180, 85)` |
| Yayın | **r5644** · `d4e56e7` |

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

> ~~**Şu anda konumuz DEVLETLER ve SINIRLARIDIR.**~~
> ~~8. boyut (askerî yapı, sosyal yapı, bilim-teknoloji, kültür-sanat, felsefe, din)~~
> ~~sonraki fazların işidir. Bir oturum oraya girmeye kalkarsa kapsamı aşıyor demektir.~~

### 🟢🟢 8. BOYUT AÇILDI — EMRE'NİN KARARI, 2 EYLÜL 2026

> *"SEKİZİNCİ BOYUTU AÇ."*
> *"Kronoloji maddelerine o konu ile ilgili görsel ekleyelim."*

Yukarıdaki üstü çizili paragraf **artık yürürlükte değildir.** Kapı iki
yıldır kapalıydı ve **kapatan da açan da Emre'dir**; bir oturum kendi
başına ne kapatabilir ne açabilir.

⚠️ **AMA "AÇILDI" ≠ "SINIRSIZ".** Açılan şey bir *kapı*, bir *bütçe*
değil. `ONCELIK.md`in **çöl seyyahı ilkesi** yürürlükte kalır: 1. derece
işler bitmeden 2. dereceye geçilmez, ve 8. boyut hâlâ **devletler ve
sınırlardan sonra** gelir. Bu satır bir oturuma *"artık kültür-sanat
maddesi yazabilirim"* demek için yeterli **değildir** — sevk gerekir.

**Şu an açılan iki somut kalem, fazlası değil:**
```
① kronoloji maddelerine KENDİ GÖRSELİ  (soru 09 · `gorsel:` alanı)
   🔴 lisans kırmızı çizgisi: YALNIZ kamu malı / CC0. Kaynağı
      `gorsel_kaynak:` alanına AÇIKÇA yazılır — `§4`ün "kaynağı
      yazılmayan bilgi, kaynağı olmayan bilgiden ayırt edilemez"
      kuralının görsel ekseni.
② EK OKUMA türlerinin tanımlanması     (soru 14 · 11 başlığın 7'si tanımsız)
```
Öteki 8. boyut konuları (askerî yapı · sosyal yapı · bilim-teknoloji ·
felsefe · din) **hâlâ sevk beklemektedir.**

📌 Ve kapının açılması `§1.6`nın kendisini geçersiz kılmaz: proje hâlâ
yedi boyutta genişliyor, sekizinci **artık yasak değil, sıralı.**

Sıradaki işler ve öncelikleri: **`YAPILACAKLAR.md`**.

---

## 2. Petek motoru — ve tek zayıf noktası

Sınırlar elle çizilmez, hazır atlas kesitlerinden de gelmez. Her yerleşim
çevresindeki toprağı temsil eden bir **petek** (Voronoi hücresi) sahibidir. Petek
sınırı komşuların tam ortasından geçer, sonra gerçek kıyı çizgisine, nehir yataklarına
ve dağ sırtlarına yaslanır, Chaikin ile yumuşatılır, Natural Earth kara maskesiyle
kesilir, **705** göl çıkarılır (28 modern baraj gölü KASTEN bırakılır — anakronik delik açıyorlardı). Bir yerleşim el değiştirince peteği bütün olarak değişir.

> ⚠️ **BU PARAGRAFTAKİ SAYILAR KOŞUNUN LOGUNDAN GELİR, ELLE YAZILMAZ.**
> 2 Eylül 2026'da **beşi birden** bayat çıktı ve hepsini bir işçi oturum
> (OPUS HAZIR KITA 107) koşan üretimin **kendi logundan** ölçtü:
> ```
> göl              89 →  705      nehir parçası   187 →  293  (211 adlı akarsu)
> dağ sırası      127 →  275      idarî bölge      61 →   77
> çöl tavanı  "yapısal olarak hiçbir şey kesemez" → 60 petek · 1.297.338 km²
> ```
> 📌 Beşi de **dünya penceresi açıldıktan** (`box(-180,-60,180,85)`) sonra
> bayatladı. Kusur ölçümde değil **anlatıda**: sayılar kodda dinamik, yalnız
> yorumlar eski. Ve `uret_petek.py:888`inki ayrı bir sınıf — orada *"bu
> mekanizma hiçbir şey yapmıyor"* yazıyordu ve **1,3 milyon km² kesiyordu**;
> bir koordinatör o yoruma dayanıp Emre'ye *"çöl tavanı âtıl"* dedi ve
> koşunun kendi logu onu çürüttü.
> ⇒ **Bir sayı okumadan önce koşunun logunu aç.** `§1.5`in "elle yazma,
> ÜRET" dersinin motor tarafı; orada çare bir betikti, burada henüz yok —
> bu satır o borcun kaydıdır.

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

### 🔴🔴 3.5.-1 VE HAYALETİN KARDEŞİ: **DEVLET VAR, YERİ YANLIŞ**
*(5 Eylül 2026 · `NEHİR SÜRTÜNME` · ve bulgu bir KUYRUK sayesinde çıktı)*

Yukarıdaki tablo **var olmayan** devleti yakalar. Kardeşi hiç
sorulmamıştı: ***devlet gerçekten vardı, ama ORADA DEĞİLDİ.***
```
atlas   12 Fizan noktası (Murzuk · Gat · Sokna · Sebha · Ubari …)
        `hafsi` 1281 → 1577                      = 296 YIL
TDV `fizan`  918 Benî Hattâb → 1190 Karakuş → "Fizan KÂNİM
        SULTANLIĞI'NIN KONTROLÜ ALTINA GİRDİ" → 16. yy Evlâd-i
        Muhammed → 1551 Osmanlı sancağı
⇒ HAFSÎ HÂKİMİYETİ HİÇ ANILMIYOR. Hafsîler Tunus'ta, Fizan 1.500 km
  güneydoğuda.
```
🔴 **VE `4c` BUNU YALNIZ 2,3 YILLIK BİR KUYRUK YÜZÜNDEN GÖSTERDİ.**
Künye `hafsi` 1574'te bitiyor, veri 1577'ye kadar boyuyor — o üç yıllık
taşma olmasaydı **296 yıllık yanlış atıf hiç görünmeyecekti.**
```
`4c`/`4d` sorar   "bu kimlik künye PENCERESİNİ aşıyor mu?"
SORMAZ            "bu kimlik oraya HİÇ ait miydi?"
⇒ YANLIŞ ATIF, ancak TESADÜFEN bir pencereyi de aşıyorsa görünür
```
⚠️ ⇒ Aynı soru **her kimlik için** açık: `hafsi`nin **aşmayan**
kayıtlarında da yanlış atıf var mı? Hiçbir denetim onu sormuyor.

🔴🔴 **VE ÖLÇÜLDÜ — GÖRÜNMEYEN, GÖRÜNENDEN ÇOK:**
```
`hafsi` kullanan dönem              76
menzil DIŞI                         27   (%36)
   künye penceresini AŞAN           10   ← `4c` GÖRÜR
   künye penceresi İÇİNDE KALAN     17   ← HİÇBİR DENETİM GÖRMEZ
```
> 🟡 **İlk yazımda 29/12 diye kaydedilmişti; ölçen oturum kendi sayısını
> düzeltti.** `Gât` (10,180°D) ve `Ubârî` (12,777°D) Trablus çizgisinin
> (13,19°D) **batısında** — yani menzilin İÇİNDE. Sebep: *coğrafî* bir
> ölçütle (boylam) *kümesel* bir ölçüt (Fizan partisi) aynı sayıya
> toplanmıştı. ⇒ `§11`in *"aynı sayı ≠ aynı vaka"* dersinin **tersi**.
> 🟢 Ve düzeltme manşeti **güçlendirdi**: görünmeyenin görünene oranı
> 1,4'ten **1,7**'ye çıktı. Fizan yaması etkilenmiyor — o yama boylama
> değil **kaynağa** dayanıyor (TDV `fizan` Hafsî'yi hiç anmıyor).
Menzil TDV'den **ölçülebilir** biçimde alındı: *"nüfuzu batıda Cezayir
şehrinden doğuda **TRABLUS'a** kadar"* ⇒ **13,19°D**, bir çizgi.
🔴 Görünmeyen 17'nin içinde **Tobruk** var — Trablus'un **1080 km**
doğusunda, ve dönemi `1551-08-15`te bitiyor, yani künyenin
(1574-09-13) **içinde.**
📌 Ve `Fizan` kümesinin görünmesi **tesadüf**: `t:1577` künyeyi 2 yıl
3 ay aştığı için `4c` ötmüş. Aşmasaydı o 12 de görünmeyecekti.
⇒ ***Bir denetimin gördüğü şey, kusurun BÜYÜKLÜĞÜYLE değil, kusurun
denetimin SORDUĞU SORUYA denk gelmesiyle belirlenir.***

🟢 **VE YÖNTEM ÇIKTI, tekrarlanabilir:** kimliğin menzilini önce bir
**sayıya** çevir (`hafsi`de boylam, `artuklu`da kol bitiş tarihleri),
sonra veriyi ona karşı tara. Menzil ölçülebilir değilse tarama da
yapılamaz — ve o zaman `ölçülemedi` yazılır.

> 🔴 **`Diyarbakır` SATIRININ TEŞHİSİ AYNI GÜN DÜZELDİ — vaka duruyor,
> tanı değişti.** Aşağıda *"TDV: Amid 1232'de çıktı ⇒ aynı hata"*
> yazıyordu; ölçen oturum kendi raporunu çürüttü:
> ```
> TDV `diyarbakir`: 1303 Gazan Han Amid'i MARDİN ARTUKLU sultanına VERDİ
>                   1317 ayaklanma, Artuklu idaresi DEVAM
>                   1343 Sutayoğulları · 1353 Celâyirli · 1394 Timur
>                   1401 Karayülük · 1507 Safevî · 1515-09-10 Osmanlı
> ```
> ⇒ `artuklu` **yanlış atıf DEĞİL** — kimlik meşru, **tarihler yanlış.**
> Sınıf: **YANLIŞ TARİH + EKSİK ZİNCİR** (veri üç kimliği yutuyor).
> 🟢 **Kör nokta dersi etkilenmiyor:** kayıt hâlâ kusurlu ve denetime
> hâlâ görünmez (kimlik künyeye OTURUYOR). Değişen yalnız **kusurun
> cinsi.** `§11`: *"doğru hüküm, yanlış teşhisle gelebilir."*

🔴 **VE İLK DOĞRULANMIŞ VAKA AYNI GÜN GELDİ — `artuklu`:**
```
Harput · Çemişgezek · Palu  `artuklu` 1281 → 1465
   TDV: Harput kolu 1234'te sona erdi ("Ağustos 1234")
   ⇒ 184 YIL yanlış · `4c`de GÖRÜNDÜ (künye 1409, 56 yıllık kuyruk)
Diyarbakır                  `artuklu` 1281 → 1378
   TDV: Amid Artuklulardan 1232'de çıktı
   ⇒ AYNI HATA · `4c`ye DÜŞMÜYOR (1378 < 1409) ⇒ GÖRÜNMÜYOR
```
⇒ **Tek bir kimlikte iki yanlış atıf**: biri bir kuyruk sayesinde
görüldü, öteki görünmüyor. Kör nokta artık bir hipotez değil, **ölçülmüş.**

🟢 **VE ONU ELE VEREN ŞEY KOMŞULARIN AYRINTISI OLDU:** aynı bölgede
Erzurum 4 dönem · Sivas 4 · Erzincan 4 · Siirt 3 · Mardin 2 taşıyor;
Harput üçlüsü **tek 184 yıllık blok.**
📌 ***Bir bölgenin en ayrıntılı modellenmiş yeri, en az ayrıntılı
kaydını en iyi ele veren yerdir.*** Blok tek parça olduğu için
*"eksik"* görünmüyordu — ama komşularının yanında **istisna** olarak
okunuyor.
📌 `§11`in *"denetim var ≠ o soruyu soruyor"* ailesinin en pahalı üyesi:
burada denetim doğru çalışıyor, **soru hiç yok.**


### 🔴🔴 3.5.0 ÜÇ SINIF, TEK TABLO — VE ÇARELERİ TERS
*(5 Eylül 2026 · `NEHİR SÜRTÜNME`, ve ölçen taraf kendi manşetini çürüttü)*

Yukarıdaki tablo bütün künye aşımlarını **tek cins** sayıyor: *"devlet
yıkıldı, veri onu boyamaya devam ediyor."* Üç aday ölçüldü ve **üçü de
farklı çıktı** — ve çareleri **birbirinin tersi**:
```
① BATNOZ   devlet ÖLDÜ · yerine BAŞKASI geçti · veri ÖLÜYÜ boyuyor
           ⇒ ÇARE: dönemi KISALT. (tablo bunu tarif ediyor)
② ZEND     AYNI polity sürüyor · KÜNYE PENCERESİ dar
           ⇒ ÇARE: künyeyi GENİŞLET. Veri doğru.
③ ARDİL 🆕 devlet öldü · BAŞKA BİR YAPI geçti · veri ESKİ KİMLİĞİ
           sürdürüyor — AMA TOPRAK GERÇEKTEN DOLU
           ⇒ ÇARE: YENİ KÜNYE (+ renk). Kısaltmak DELİK AÇAR.
```
🔴 **VE ③'ÜN ÇARESİ AYNI GÜN DÜZELTİLDİ — "yeni künye" YETMEZ:**
*(`singhasari` · `NEHİR SÜRTÜNME`, ve öngörüsü ÇÜRÜYEREK buldu)*
```
`majapahit` künyesi VAR (1293-1527) — AMA YAZILAMAZ
Cava çekirdeği  singhasari →1292 · majapahit 1292→1527   ✓ doğru
Doğu adaları    singhasari →1343 · majapahit 1343→1478   ve 1343 DOĞRU
                (Gajah Mada Bali'yi 1343'te aldı)
⇒ 1292-1343 arası ada BAĞIMSIZDI (Pejeng) ve o kimlik YOK
  (`bali-kralliklari` 1478'de başlıyor — 135 yıl GEÇ)
```
⇒ Kısaltmak **51 yıllık delik** açar, genişletmek **fetihten 51 yıl
önce** boyar. ***ARDIL KÜNYENİN VAR OLMASI, YAZILABİLİR OLDUĞU ANLAMINA
GELMEZ — PENCERESİ DE TUTMALI.*** Ön koşul *"künye var mı"* değil,
**"künye var mı VE penceresi boşluğu kapatıyor mu."**
🔴 **Ve ③'ü ①'e benzetip dönemi kısaltmak, `Değişmez 1`i ihlal eder:**
toprak boş değildi, yalnız adı değişmişti.

**Ölçülmüş vakalar:**
```
filipin-racaliklari  ZEND — künye `t:` MANİLA'nın gününü (1571-06-24)
   bütün racalıklar için son sayıyor; oysa İspanyol fethi YETMİŞ YILA
   yayılmış (Cebu 1565 · Iloilo 1569 · Vigan 1572 · Zamboanga 1635) ve
   veri her adanın KENDİ gününü taşıyor. **Veri doğru, künye dar.**
meysur   ARDİL — TDV: *"beş yaşında bir Hindu hanedan üyesini tahta
   oturtup ESKİ RACALIĞI TEKRAR İHDAS ETTİLER"* · İngiliz hâkimiyeti
   **1947'ye kadar.** Toprak dolu; ama künyenin adı *"Sultanlığı (Haydar
   Ali / Tipu)"* ve 1799'da o sultanlık BİTTİ. **Genişletmekle çözülmez:
   aynı devlet değil.**
maratha  ARDİL — 31 dönemin 23'ü GERÇEK günlerde bitiyor (1803 · 1818);
   kalanlar Scindia · Holkar · Kolhapur, yani 1947'ye kadar süren
   Maratha kökenli prenslikler.
```
> 🔴🔴 **BU SATIR AYNI GÜN, KIRK DAKİKA SONRA ÇÜRÜDÜ — ve çürüten,
> onu yazan oturumdu.** İlk hâli şöyleydi: *"üçünde de ardıl kimlik YOK:
> `ingiliz-hindistan` / `britanya-hindistan` tarandı, yok."*
> ```
> aranan   ingiliz-hindistan · britanya-hindistan   → BULUNAMADI
> GERÇEK   ingiliz-hindistani  1757-06-23 → 1923-10-29   ← SONDA BİR 'i'
> ```
> ⇒ **Ardıl künye VARDI ve 70-76 noktada KULLANILIYOR.** Ve atlasın
> konvansiyonu sağlam: prenslikler kendi künyeleriyle 1923'e kadar
> sürüyor (`haydarabad-nizam` 1724→1923 · `racput` · `bharatpur-cat` ·
> `cunagadh` · `travankur`). 1850 ve 1900 kesitlerinde **sahipsizlik 0.**
>
> 🟢 **Teşhis TERSİNE DÖNDÜ, ve çare UCUZLADI:** sorun *"ardıl yok"*
> değil ***"ardıl var, `meysur` (3 nokta) ve `maratha` (5 nokta) o
> konvansiyona KATILMAMIŞ."*** Emsal hazır:
> ```
> haydarabad-nizam 1724 → 1923   Nizamlık PRENSLİK olarak sürdü ← EMSAL
> meysur           1761 → 1799   ⇒ EKSİK: `meysur-racaligi` 1799→1923
> maratha          1674 → 1818   ⇒ EKSİK: Gvalyar · İndor · Kolhapur
> ```
> ⚠️ **ARDİL SINIFININ KENDİSİ DOĞRU** — çürüyen yalnız *"ardıl kimlik
> yok"* iddiası. Ders korunur, vaka damgalanır (`§3.5.1` emsali).

🔴 **VE BİR DÜZELTMEYİ BİR ALETE KOYMAK, ONU ÖTEKİ ALETLERE KOYMAZ.**
Üç haneli yıl tuzağı (`"800-01-01" <= "1281-01-01"` → **False**, çünkü
`"8" > "1"`) bir gecede **dört** alette çıktı: `dubrovnik` (elendi) ·
`nube` (47 sahte pozitif) · `ARAC-4C` (pad kondu) · ve ardıl kontrolü
(`kanem-bornu` yanlışlıkla *"kapsamaz"* bastı). `pad()` iki alete
yazılmıştı ve `CLAUDE.md`de kayıtlıydı; üçüncüsüne konmadı.
🟢 Yakalayan şey alet değil **göz** oldu: *"800 ≤ 1281 apaçık."*
⇒ Bir aletin çıktısını gözle sınamak, alete güvenmenin yerine geçmez
**ama onu yakalar.**

🔴 **VE BU, BİR GECEDE ÜÇÜNCÜ TEK-HARF KÜNYE KAÇIRMASI:**
```
tuareg-iwellemmedan  ✗ → tuareg-ivellemmedan  ✓   (w/v · YAKALANDI)
litvanya-buyuk-dukaligi ✗ → litvanya-buyuk-dukalik ✓  (YAKALANDI)
ingiliz-hindistan    ✗ → ingiliz-hindistani   ✓   (KAÇIRILDI, ve
                                                    ÜSTÜNE HÜKÜM VERİLDİ)
```
⇒ ***Bir kimliği "yok" ilan etmeden önce `devletler.js` TARANIR;
TAHMİN EDİLEN id ARANMAZ.*** Bu, `§4`ün Türkçe yazım ekseninin en sinsi
üyesi: orada yazım **görünür** biçimde farklıydı (`usku` ≠ `Üsküp`),
burada id **doğru görünüyor** ve tek bir harf eksik.
⚠️ Ve bedeli ölçüldü: yokluk üzerine bir **hüküm** kuruldu
(*"yazmak delik açar"*), oysa yazmak bir deliği **kapatacaktı.**

📌 Ve ölçen oturum bunu **kendi kırk dakika önceki manşetini çürüterek**
buldu: *"`4c`de GERÇEK hayaletler var, meysur 124,5 yıl — Batnoz'un
üstünde."* Ölçüm o cümleyi yanlış çıkardı. ***Bir sayının büyük olması,
onun bilinen bir sınıfa ait olduğunu göstermez.***

#### 🔴 VE AYNI GÜN İKİNCİ KEZ: **ÖLÇEK SINIFI BELİRLEMEZ**
Aynı oturum bir sonraki turda `sardinya`yı *"gecenin en büyük tek
anakronizmi, 439 yıl"* diye önerdi. Ölçtü — **anakronizm değil:**
```
napoli    künye 1282-03-30 · veri 1281 · 15 AY     ┐ İKİSİ DE
sardinya  künye 1720-08-02 · veri 1281 · 439 YIL   ┘ AYNI SINIF
```
Torino ve Chambéry **Savoya'nın tarihî merkezleri**; Savoya Kontluğu
11. yüzyıldan beri vardı ve künye **kraliyet unvanının** doğduğu günü
gösteriyor. ⇒ Ad/unvan ömrü ≠ tasarruf sürekliliği, ve **ölçek 350 kat
farklı olsa bile cins aynı.**
⚠️ Ve koordinatör o kalemi *"ölçüt sayı değil GÖRÜNÜRLÜK"* diyerek
seçmişti. ⇒ ***Görünürlük de sınıfı belirlemiyor — yalnız ÖLÇÜM
belirliyor.*** Büyüklük bir **öncelik** ölçütü olabilir; bir **teşhis**
ölçütü değildir.

#### 🔴 VE ÇERÇEVENİN KENDİSİ EKSİKTİ — EN SIK VAKA İÇİNDE YOKTU
*(5 Eylül 2026 · bir gecede ~10 kalem ölçüldükten sonra)*

`4c`/`4d` kalemleri iki kovayla çerçeveleniyordu: **künye DAR** ·
**veri ERKEN**. Gece boyunca en sık çıkan sonuç **üçüncüsüydü**, ve
bugün **dördüncüsü** de çıktı:
```
③ İKİSİ DE DOĞRU, FARKLI ŞEY ÖLÇÜYOR   ad/unvan ömrü ≠ tasarruf sürekliliği
   napoli (15 ay) · sardinya (439 yıl) · isvec (242 yıl)
④ KÜNYE DOĞRU, VERİ KAYNAKSIZ 🆕
   mentese · serbedariler — TDV YIL veriyor, künye `YYYY-01-01` ile
   doğru kodluyor; kaynaksız olan VERİNİN günleri
```
🔴 ④'ün önerisi *"künye yuvarlak, veri gün biliyor ⇒ künyeyi güncelle"*
idi ve uygulansaydı **iki DOĞRU künye kaynaksız günlere taşınacaktı.**
Önleyen şart: ***"künyeyi veriye uydurmak, veriyi kaynak yerine
koymaktır"*** — `§4`ün *"künyenin `f:`/`t:` günü bir KAYNAK DEĞİLDİR"*
kuralının **ters yönü**: bu sefer kaynak sanılan şey **VERİYDİ.**

⚠️ **Ve buradan "çoğu DOKUNMA çıkar" diye bir taban beklenti
ÜRETİLMEZ** — aynı gece `toskana` · `litvanya` · `makdisu` · `sisam` ·
`girit` gerçek kusur çıktı ve düzeltildi.
```
DOKUNMA / meşru    napoli · sardinya · isvec · mentese · serbedariler
GERÇEK, yazıldı    toskana · litvanya · makdisu · sisam · girit …
GERÇEK, BLOKE      zend · meysur · maratha · singhasari · artuklu
```
⇒ Doğru beklenti *"kusur yok"* değil ***"kusur VARSA da çoğu bugün
YAZILAMAZ"*** (ardıl kimlik yok, ya da penceresi tutmuyor, ya da renk
donuk). ⇒ ***İlk iş düzeltme değil SINIFLANDIRMA.***

🟡 **AMA BU SATIR "ÖLÇEĞİ YOK SAY" DİYE OKUNMAMALI** — ertesi tur
düzeltildi. Aynı oturum ölçeği bilinçli olarak yeniden kullandı, riski
**öngörüsüne yazdı**, ve bu sefer **tuttu**: `1,4-2,3 yıl → gün kararı`
· `51-56 yıl → gerçek kusur`. ⇒ ***Ölçek bir KORELASYONDUR, bir KURAL
DEĞİL:*** bir **öncel**dir, bir hüküm değil. Nereden şüpheleneceğini
söyler; ne olduğunu ölçüm söyler.

🟢 **VE AYNI TURDA BİR ARAÇ DERSİ:** ölçüm aleti `sardinya`yı künye
`id`si sanıp `NoneType.get` ile **ÇÖKTÜ** — ve çökmesi doğru davranıştı:
sessizce `None` dönseydi *"künye yok"* diye raporlayacaktı, ve o hata
aynı gece bir kez zaten yapılmıştı (`ingiliz-hindistani`).
📌 ***Bir aracın çökmesi, yanlış cevap vermesinden İYİDİR.*** Bu belge
dört kez *"alet hata vermedi, temiz bir sayı üretti"* diye kusur
kaydediyor; bu onun olumlu yüzü.
⚠️ Ve kusurun kendisi de kayda değer: **renk `harita:` anahtarına bakar,
`id`ye DEĞİL** (`sardinya-piyemonte` id olarak yok, `sardinya` harita
anahtarı olarak var).


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

#### 🔴 ARA BÖLGE — kırmızı liste BAĞLAYICIDIR, yeşil liste DEĞİL
*(4 Eylül 2026 · `KRONOLOJİ AFRİKA GÖVDE` sordu, boşluğu doğru yerde buldu)*

Yukarıdaki iki liste arasında **tanımsız bir orta bölge** var ve bir oturum
orada sıkıştı: SAHO (devlet destekli, kaynakçalı kamu tarih arşivi) ve
Britannica (imzalı uzman maddesi) 🔴 listenin **hiçbir maddesine girmiyor**,
ama 🟢 listenin tam ortasında da değil. *"Cambridge/UNESCO'nun kendisine mi
inmeliyim?"* diye sordu — ve cevabı 65 künyenin hızını belirliyordu.

🟢 **HÜKÜM: bağlayıcı sınav 🔴 LİSTEDİR.** Bu bölümün kendi cümlesi zaten
onu söylüyor (*"sınanabilir olan, neyin kullanılmayacağıdır"*); yeşil liste
bir **örnek kümesi**dir, bir kapı değil. Kırmızıya girmeyen kurumsal /
ansiklopedik kaynak **kabul edilir**, şartı: adıyla yazılır ve mümkün olan
yerde ikinci bağımsız bir kaynakla eşleşir.
📌 Ve `§4`ün TANECİKLİK kuralı zaten bunu meşru kılıyordu — o oturumun
32 sluglık ölçümü (8 canlı / 24 ölü) boşluğun gerçek olduğunu gösterdi.

#### 🔴🔴 HASSASİYET KAYNAĞI AŞAMAZ — ve proje bunu 161 kez ihlal etmiş

`§4` *"tarih uydurma, gün bilinmiyorsa `YYYY-01-01` yaz"* diyor. Bugün o
kuralın **iki eksik ayağı** ölçüldü.

**① `YYYY-01-01` GÜNÜ bilinmeyen içindir, YILI bilinmeyen için DEĞİL.**
`KRONOLOJİ ORTA AMERİKA` bir madde yazdı, sonra **kendi sildi**:
> *"Zapotek'in Guiengola'da Mexica ordularını yenmesi için `1490-01-01`
> yazıp «temsilî» diye damgalamıştım. SİLDİM. Kaynak yalnız «during the
> late fifteenth century» diyor. **Yıl uydurmak tarih uydurmaktır ve
> 'temsilî' damgası onu meşrulaştırmaz, yalnız GÖRÜNMEZ KILAR.**"*

**② Ve tersi daha yaygın: SAHTE KESİNLİK.** Aynı oturum `purepecha`ya
`son` maddesi yazmayı reddetti — künye `t:1530-02-14` (gün!), akademik
tarama 1529, ve künyenin **kendi** `kaynak` alanı şöyle diyor:
> *"bulunamadı — … Tarihin dayanağı DURUYOR: f:/t: **BAĞLI VERİNİN
> kullandığı aralığa HİZALANDI.** Akademik kaynak ARANACAK."*

Tek vaka sanıldı; **tarandı, sistemik çıktı:**
```
591 künyenin 161'i  gün hassasiyetli tarih taşıyor VE `kaynak` alanı
                    LİTERAL olarak "bulunamadı" ile BAŞLIYOR
novgorod 1478-01-15 · pskov 1510-01-13 · tver 1485-09-12 · moskova
1547-01-16 · litvanya 1569-07-01 · cenova 1797-06-14 · imereti 1810-02-20
```

> 🔴 **PAYDA DÜZELTİLDİ 4 Eylül — 161 DEĞİL 147.** `KRONOLOJİ ORTA AMERİKA`
> örneklemi çekerken gördü, koordinatör bağımsız doğruladı (tam **14**
> künye): bunlar kümeye **yalnız `1923-10-29`** yüzünden girmiş, ve o
> atlasın **pencere sonu** — bir gün iddiası değil.
> `cimma-sultanligi · somali · buganda · umman-zengibar · haiti · racput ·
> manipur · nepal · travankur · san-devletleri · cohor-sultanligi ·
> tidore-sultanligi · bharatpur-cat · cunagadh`
> ⇒ Gerçek küme **147**, *"yalnız geometride"* kovası **97**.
>
> 📌 Ve aynı tuzak bugün **ÜÇ ayrı ölçümde** çıktı: istatistik sınavında
> taban şişti (29. gün 109 kez) · kronoloji çapraz kontrolünde eşleşmelerin
> çoğu `1923-10-29` çıktı · ve burada paydada. ⇒ ***Pencere uçları bir
> ÖLÇÜM DEĞERİ değil, bir SINIR İŞARETİDİR; her sayımda ayrıca elenir.***
>
> 🟢 **VE ÖLÇÜLDÜ — çürüme oranı ≈ 0:** 97'den `random.Random(20260904)`
> ile çekilen 20 künyede **gün doğrulandı 6 · yıl/ay doğrulandı 7 ·
> ölçülemedi 7 · ÇÜRÜYEN 0**. Altısı birincil belgeden (Pontotoc Creek
> 1832-10-20 · Greenville 1795-08-03 · Estonya 1918-02-24 …).
> ⚠️ Sınırı: 20'lik örneklem küçük bir oranı ayırt edemez. *"Sıfır çürüme"*
> = **"oran düşük"**, *"oran sıfır"* DEĞİL.
> ⇒ Hüküm: **97 künye SÜPÜRÜLMEYECEK.** Kova bir borç değil, bir kayıt.
⚠️ **Çoğu muhtemelen DOĞRU** — Moskova `1547-01-16` IV. İvan'ın taç
giymesidir. Kusur *yanlışlık* değil **yanlış HASSASİYET**: gün yazmak
*"bu günü biliyorum"* demektir, oysa aynı kaydın `kaynak` alanı
*"bilmiyorum"* diyor — ve **gün, kaynağın yokluğunu ÖRTÜYOR.**

📌 Bu, `§11`in *"yuvarlak tarih yalnız yanlış değildir, çelişkiyi de
saklar"* dersinin **AYNASI**: orada yuvarlaklık bir boşluğu gizliyordu,
burada **sahte kesinlik** bir dayanaksızlığı gizliyor. ⇒ *Hassasiyet
yalnız doğruluk değil, GÖRÜNÜRLÜK meselesidir* — ve iki yöne de bozulur.
🔴 **Kural: künyenin `f:`/`t:` günü bir KAYNAK DEĞİLDİR.** Kaynak yıl
diyorsa yıl yazılır, künye gün dese bile — ve fark **bildirilir.**

#### 🔴 TDV TUZAK LİSTESİNE İKİ EKSEN DAHA *(ikisi de 4 Eylül, işçi ölçümü)*

```
⑤ 000 BİR HTTP KODU DEĞİLDİR — taşıma arızasıdır, "ölü" diye damgalanmaz
⑥ CANLI slug · DOĞRU madde · DOLU gövde · ve KENDİ İÇİNDE ÇELİŞİK
⑦ 🆕 "METİN ÇIKARILAMADI" ≠ BELGEDE METİN YOK
⑧ 🆕 RAKAM GÖVDEDE GEÇİYOR ≠ GÖVDE O DEĞERİ DESTEKLİYOR
```
⑧ (5 Eylül 2026 · `KÜRE GÖRÜNÜM`): `nube` künyesi `f:543-01-01` taşıyor,
adı *"Nûbe Krallıkları (Makurya-Alve)"*, ve TDV gövdesinde **"543"
geçiyor** — bir arama onu **DESTEKLENDİ** diye işaretler. Cümle ise şu:
> *"Misyonerlerin Nûbe'de Hıristiyanlığı yayma faaliyetleri ilk defa
> **543**'te başlamış…"*

⇒ Hıristiyanlaşmanın başlangıcı; **krallıkların kuruluşu değil.**

🔴 **VE BİR KADEME DAHA KÖTÜSÜ AYNI GÜN ÖLÇÜLDÜ — `saruhan`:**
```
künye  f:1313
gövde  "Manisa'nın fetih tarihinin 713 (1313) olarak gösterilmesi de
        DOĞRUDAN ÇAĞDAŞ BİR KAYNAĞA DAYANMAMAKTADIR."
TDV'nin KENDİ tarihi: "1290'lı yıllardan itibaren … kurulmuş"
```
⇒ Gövde o yılı **REDDETMEK için** anıyor, ve kendi tarihi künyeden
**~20 yıl önce.** ***Bir sayı eşleşmesi yalnız yanlış dayanak üretmez —
kaynağın AKSİNİ söylediği yerde onu DESTEK gibi gösterir.***

🔴 **VE ÜÇÜNCÜ BİÇİM: ÇOK EŞLEŞME = SAHTE GÜVEN.** `rusya t:1917-03-15`
— gövdede *"1917"* **17 cümlede** geçiyor, ama *"Mart 1917"* 0 kez,
*"Şubat 1917"* 0 kez; gövdenin verdiği olay **Ekim** İhtilâli.
⇒ *"17 cümle bulundu"* diyen bir sayaç bunu **güçlü dayanak** sanırdı.
📌 ***Bir eşleşme sayısının büyüklüğü, dayanağın gücü DEĞİLDİR.***

🟢 **Ve desen ölçüldü** (224 künye evreni, 25'lik örneklem, 45 değer):
`🟢 26 · 🟠 4 · 🟡 3 · ⚪ 12`. `nube` tek değil — ama **4 vaka bir ORAN
vermez**, varlık gösterir.
🔴 ***Değer gövdeye İZLENEBİLİR ama gövde onu BAŞKA BİR ŞEYE bağlıyor.***
Ve bu, öteki yedi tuzaktan **daha sinsi**: onlar bir doğrulamayı
*başarısız* kılar, bu onu **YANLIŞ BAŞARILI** kılar — bir arama
**sahte pozitif** üretir ve kimse bakmaz.
📌 `§11`in *"eşleşme bulmak, doğru şeyi bulmak değildir"* dersinin
**tarih doğrulama** yüzü. ⇒ Bir künye tarihini gövdeyle doğrularken
rakamı bulmak yetmez: **o rakamı taşıyan CÜMLENİN neyi tarihlediği**
okunur.
⑦ (5 Eylül 2026 · `NEHİR SÜRTÜNME`): `WebFetch` üç akademik PDF için de
*"metin çıkarılamıyor / JBIG2"* dedi. **Üçünün de metin katmanı vardı** —
`pypdf` on saniyede okudu (Toksoy 55.959 · Ünal 48.133 · Alanoğlu 33.002
karakter). Ve o "boş" sonuca dayanarak *"Toksoy Harput 1429'u HİÇ
ANMIYOR"* diye bir kayıt yazılmıştı: gövdede **10 kez "Harput", 2 kez
"1429"**, ve aranan cümleler tam orada.
⇒ ***Bir çıkarıcının "okuyamadım"ı, belgenin İÇERİĞİ hakkında hiçbir şey
söylemez.*** İkinci bir çıkarıcı denenmeden `bulunamadi` yazılamaz.
📌 Ve bu, ⑤'in kardeşi: orada bir HTTP kodu içerik hakkında bir iddia
sanılmıştı, burada bir **ayrıştırıcı hatası.** İkisi de *"ölçülemedi ≠
yok"* ailesinden.
⑤ `KRONOLOJİ AFRİKA GÖVDE`: `guney-afrika-cumhuriyeti` ilk turda `000`
döndü, *"ölü"* **yazmadı**, yeniden ölçtü — **200 CANLI** ve bölgenin TDV'de
kapsayan **tek** maddesiydi. İlk turu kaydetseydi onu *"yok"* diye
damgalayacaktı. *"Ölçülemedi ≠ ölü"* burada somut bir kayıp önledi.

⑥ `KRONOLOJİ GÜNEY AMERİKA`: TDV `amerika` gövdesi Tordesillas'ı bir yerde
**1494**, başka yerde **1498** veriyor. Dört tuzağın hiçbiri bunu
yakalamaz — slug canlı, madde doğru, gövde dolu. ⇒ `§4`ün *"kaynağın kendi
uyarısını da oku"* kuralının bir kademe ötesi: **kaynak bazen uyarı vermez,
kendiyle çelişir** — ve o zaman çelişkiyi BİLDİRMEK, taraf seçmekten
değerlidir.

#### 🔴 VE ⑥'NIN YAZILI OLMAYAN ÖN KOŞULU: **ÖNCE AYRIŞTIR, SONRA ÇELİŞKİ İLAN ET**
*(5 Eylül 2026 · `NEHİR SÜRTÜNME` — bir "çelişki" bildirdi, ölçtü, ÇELİŞKİ YOKTU)*

İki TDV maddesi Harput'un 1429'daki el değiştirmesinde **ters yön**
veriyor sanıldı. Ölçüldü — **aynı yönü veriyorlar**, ve fark bir
ayrıştırma hatasıydı:
```
"Dulkadirlılar 1429'da Akkoyunlular'a kaptırdıkları Harput'u geri aldılar"
                └──────── YAN CÜMLE ────────┘
`1429'da` VE `Akkoyunlular'a` ikisi de `kaptırdıkları` yüklemine bağlı
⇒ 1429 = KAYIP yılı, geri alış TARİHSİZ
(geri alış 1429 olsaydı: "…kaptırdıkları Harput'u 1429'da geri aldılar")
```
📌 Ölçen oturumun cümlesi: ***"Bir kaynağın ÇELİŞMESİ ile benim onu
YANLIŞ AYRIŞTIRMAM bana AYNI görünüyor."***
⇒ ⑥'yı ilan etmeden önce: **cümleyi doğru ayrıştırdığından emin ol.**
Türkçede zaman zarfı, girdiği yan cümlenin içindedir — ve TDV yoğun
yan cümleli yazar.

🔴 **VE BEDELİ ÖLÇÜLDÜ:** yanlış ayrıştırma bir yamaya inmişti
(`dulkadir 1429→1465`, ters yönde) ve koordinatör onu **onaylamıştı.**
Yakalayan şey bir denetim değil, sevkin **sırasıydı**: *"önce üçüncü
kaynağı ara, sonra damgala."* Damgalama önce yapılsaydı ters kimlik
**meşrulaşmış** ve bir sonraki oturuma *"kaynaklı"* görünmüş olurdu.
⇒ ***Bir damga, damgaladığı şeyi doğrulamaz — ama doğrulanmış gösterir.***

⚠️ **Ve aşağıdaki kapsama tablosunun bir satırı ÖLÇÜLEMEZ:** *"Afrika'nın
dördü %100"* **hangi dördü** olduğunu söylemiyor. `devletler.js`te beş
Afrika bölgesi var (kuzey 12 · doğu 39 · batı 51 · orta 24 · güney 18) ve
bir oturumun 32 sluglık ölçümü güney için o iddiayı **çürüttü** (8 canlı /
24 ölü; `zulu` · `transvaal` · `oranj` · `lesotho` · `herero` · `ndebele`
hepsi 302). ⇒ **Bu satırdan bir bölge için hüküm çıkarma; kendi ölçümüne
dayan.**

#### 🔴 VE TERSİ DE GEÇERLİ: KAYNAK YOĞUNLUĞU KOMŞU BÖLGEYE TAŞINMAZ
*(4 Eylül 2026 · `KRONOLOJİ AFRİKA GÖVDE` — ve hatayı ÖLÇEN taraf yaptı)*

Aynı oturum güney Afrika'da TDV'nin neredeyse yok olduğunu **ölçtü** (32
slug / 8 canlı) ve **batı Afrika için de akademik kaynakla yazmaya
hazırlanıyordu.** Onu bir kural değil, `tekrur` künyesinin **kendi `kaynak`
alanı** durdurdu — orada TDV `el-hac-omer` yazıyordu. Batıyı ayrıca ölçtü:

```
guney-afrika   32 slug →  8 CANLI / 24 ölü   (%25)
bati-afrika    38 slug → 26 CANLI / 12 ölü   (%68)
samori-ture · el-hac-omer · osman-b-fudi · sokoto · tekrur · timbuktu ·
kano · bornu  — HEPSİ CANLI
```
⇒ Britannica'ya dayansaydı `§4`ün *"TDV maddesi varsa başkasına dayanma"*
kuralını **çiğnemiş olacaktı.**

🟢 **Ve TDV orada akademik kaynaktan ÜSTÜN çıktı — GÜN veriyor:**
Kaarta'nın fethi **11 Kasım 1854** · El-Hâc Ömer'in ölümü **14 Şubat 1864**
· Samori'nin antlaşması **13 Şubat 1889** · Tabkin Kwatto **21 Haziran
1804** · Osman b. Fûdî'nin ölümü *3 Cemâziyelâhir 1232 =* **20 Nisan 1817**.

📌 **Bu, bir günde bu ailenin ÜÇÜNCÜ vakası** ve üçü de *"ölçüm doğru,
EVREN dar"*: yukarıdaki tablonun adsız *"Afrika'nın dördü"*, koordinatörün
*"bölge oturumları daha ucuz"* varsayımı, ve bu. ⇒ **Bir bölgede ölçülen
kaynak yoğunluğu, komşu bölge için bir tahmin bile değildir.**

#### 🔴 ÜÇÜNCÜ HASSASİYET EKSENİ: AY, AYIN 1'İNE KODLANMIŞ — 42 künye

Aynı oturum `tekrur f:1852-09-01` gördü: künye **ay hassasiyetini ayın
1'ine kodluyor**. Tarandı — **42 künyenin `f:`/`t:` değeri `YYYY-MM-01`**
(safevi 1501-07-01 · lehistan 1569-07-01 · bosna-kralligi 1463-05-01 ·
saruhan 1416-09-01 …).

⚠️ **Ve bir kısmı GERÇEKTEN ayın 1'i** — Lublin Birliği *gerçekten* 1
Temmuz 1569'dur. ⇒ **Biçim, "ayın 1'i" ile "ay biliniyor, gün
bilinmiyor"u AYIRT EDEMİYOR.**
```
① gün HİZALAMA ürünü         veriye bakar     (purepecha 1530-02-14)
② gün HAFIZADAN alınmış      hafızaya bakar   (Haiti: kaynak "July 1915",
                                               bilinen 28 Temmuz KULLANILMADI)
③ AY, ayın 1'ine kodlanmış   BİÇİME bakar     🆕 42 künye
```
③'ün farkı: kayıt **yalan söylemiyor**, iki ayrı şeyi **aynı biçimde**
yazıyor. `kaynak` alanına bakmak yetmez; **kaynağın ne dediğini** okumak
gerekir.

🟢 **KURAL — maddede:** tarih alanı kaynağın desteklediği **en kaba
güvenli** düzeyi taşır, gerisi **metinde** durur. Kaynak *"Eylül 1852"*
diyorsa `1852-01-01` yazılır ve ay `b`/`kaynak` metnine konur.

🔴 **VE KURALIN BİR ŞARTI VAR — künye penceresi.** *(5 Eylül 2026 ·
`KRONOLOJİ BOŞ KÜNYE` çatışmayı gösterdi)* Kaba tarihi yazmak, maddeyi
künyenin **kendi penceresinin dışına** düşürebilir:
```
kaynak "1763" diyor      → kural gereği `1763-01-01`
künyenin `f:`            → `1763-02-10`
⇒ madde künyenin BAŞLANGICINDAN 40 GÜN ÖNCE düşer, künye kendi içinde çelişir
```
⇒ **O zaman kaba tarih yazılmaz: künyenin günü DEVRALINIR, ve künyenin
gününün de kaynaksız olduğu BİLDİRİLİR.** Kural *uydurmayı* yasaklar;
devralmak uydurmak değildir — **yazılmadığında** uydurma olur.
📌 Ve ölçen oturumun gerekçesi kuraldan ince: günü TDV'den değil
**künyenin kendi içinden** aldı (aynı olayın mevcut `kurulus` maddesi
zaten o günü taşıyordu), yani yeni bir hassasiyet üretmedi. ⇒ Kusur
yayılmaz, **kayda geçer.**

🟢 **VE BİR KURAL DAHA, aynı turdan:** bir yılı iki cümleden **türetmek**
meşrudur (*"Mart 1886 … bir yıl sonra"* → 1887), **ama türetilen sayı
ALINTIYA YAZILMAZ.** O oturumun cümlesi: *"kaynağın söylemediği bir sayıyı
alıntıya yazmak uydurmaktan KÖTÜDÜR, çünkü SAHTE BİR DAYANAK üretir."*

##### 🔴 VE EKSEN KÜNYELERE ÖZGÜ DEĞİL — BİR ÇELİŞKİYİ YARISINDAN UYDURDU
*(5 Eylül 2026 · `KÜRE GÖRÜNÜM` ölçtü · yanılanlar İKİ İŞÇİ VE KOORDİNATÖR)*

Yukarıdaki 42 vaka **künyelerde** ölçülmüştü. Aynı biçim bir **kronoloji
maddesinde** çıktı ve on yıllık bir "çelişki"nin yarısını tek başına
üretti:
```
veri  `1913-11-01`   ← GÜN sanıldı
madde `gun:` alanı   "Kasım 1913"        ← AY, ayın 1'ine kodlanmış
TDV   "20 Eylül 1923'te kurtarıldı"
⇒ üç oturum bunu "ON YIL FARK" diye taşıdı; farkın yarısı HİÇ YOKTU
```
⚠️ Ve yanılmak için kayda bakmak yetmiyordu: `d:`/`s:` alanında duran
`1913-11-01` **gün gibi görünür**; onu çürüten şey maddenin **kendi
`gun:` metni** oldu. ⇒ ***Bir tarihin hassasiyeti, tarihin YAZILDIĞI
alandan değil, onu AÇIKLAYAN alandan okunur.***
📌 Kural (`§8`: *"kronoloji maddelerinde gün yaz"*) bu biçimi yasaklıyor
ama **veride zaten var**, ve tarandığında `YYYY-MM-01` künye kalıbıyla
aynı görünüyor.

🟢 **VE SAYILDI — `denetim/ARAC-AY-KODLU-MADDE-0905.js`** (evren: `data/`
altındaki 76 `olaylar*`+`kronoloji*` dosyası, yani **çekirdek VE kuyruk**):
```
madde toplam           6154
t: ayın 1'ine denk      2783
🔴 HASSASİYET ŞİŞMİŞ      53   `gun:` AY diyor, `t:` GÜN yazıyor
⚪ `YYYY-01-01`         2052   §4'ün KENDİ yazımı — KUSUR DEĞİL
🟡 şüpheli (ay ≠ 01)     648   `gun:` susuyor, ayırt edilemiyor
🟢 gerçekten ayın 1'i     30   `gun:` gün diyor
```
⇒ Eksen künyelerde **42**, kronolojide **53 kesin + 648 ölçülemeyen.**
⚠️ Ve 2052'yi *"şişmiş"* saymak en kolay hata olurdu: `YYYY-01-01` bu
belgenin **kendi tarif ettiği** yazımdır (*"yıl biliniyor, gün
bilinmiyor"*). Bir ölçüm kovalarını ayırmazsa, **kuralın kendisini kusur
diye raporlar.**
🔴 **HÜKÜM YOK, ve çare `t:`yi bozmak değil:** bu bir kusur değil bir
**beyan uyumsuzluğu** — `t:` gün iddia ediyor, `gun:` etmiyor. `§4`ün
kuralı zaten yazılı: *tarih alanı kaynağın desteklediği en kaba güvenli
düzeyi taşır, gerisi metinde durur.* 53'ün her biri **kaynağına
sorulmadan** değiştirilmez.


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

🔴 **BEŞİNCİ VAKA — `torun` (3 Eylül 2026, `PRUSYA-0903` ölçtü):** Polonya
şehri Toruń arandı, slug **200** döndü, ve açılan madde bir **akrabalık
terimi**: *"Torun kelimesinin Arapça'da en bilinen karşılığı … hafîd
olup"*. Denenen 15 sluğun **14'ü 302**, tek `200` ise **yanlış madde.**
⚠️ **Ve bu vaka öncekilerden bir kademe kötü:** `ordu`/`saray`/`cin`de
doğru madde bir sonekle **vardı** (`--sehir` / `--ulke`); burada madde
**hiç yok** — yani sonek kuralı da çare değil. TDV Prusya'nın Polonya
tarafını (Krakov 1525 · Wehlau 1657 · Oliwa 1660 · Danzig · Poznan)
**altı konunun altısında da** kapsamıyor.
⇒ Bu bir **coğrafî boşluktur** ve `§4`e göre akademik kaynak meşrudur;
`kaynak:` alanına açıkça yazılır, **TDV diye gösterilmez.**

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

#### 🔴🔴 VE BU EKSENİN **KOD** YÜZÜ: `"İ".lower()` İKİ KOD NOKTASI VERİR
*(3 Eylül 2026 · `DUNYA-KAMERIKA-0903` ölçtü — 377 adayın **58'ini**
sessizce kaçırdıktan sonra)*

Yukarıdaki ders **insan yazımını** anlatıyor (`usku` ≠ `Üsküp`). Bunun
bir de **Python'un kendi davranışından** doğan hâli var ve **daha
sinsi**, çünkü kodu yazan doğru şeyi yaptığını sanır:
```python
"İnyupiak".lower()  →  'i̇nyupiak'      # 'i' + U+0307 BİRLEŞİK NOKTA
"inyupiak" in "İnyupiak".lower()  →  False
len("İstanbul") 8  →  len(.lower()) 9   # dizgi UZUYOR
```
⚠️ **`casefold()` DE ÇÖZMEZ** — aynı sonucu verir. Ve alet **ötmez,
hata vermez, yalnız sessizce kaçırır.**

🟢 **ÇARE — ORTAK NORMALLEŞTİRİCİ** (`denetim/ARAC-NORMAL-0903.py`),
ve `lower()` çağrılmadan **ÖNCE** eşleme yapar:
```python
s.translate({İ→i, I→i, ı→i, Ş→s, Ğ→g, Ü→u, Ö→o, Ç→c, Â→a, ’→' …})
→ NFKD → birleşik işaretleri at → lower()
```
Ölçüldü — `lower()`ın kaçırdığı beşin beşi:
```
aranan       ad             lower()   norm()
inyupiak     İnyupiak       False     True
usku         Üsküp          False     True
egirdir      Eğirdir        False     True
igdir        Iğdır          False     True
diyarbakir   Diyarbekir     False     False  ← 🔴 VE BU DOĞRU
```
🔴 **Son satır kasıtlı:** `Diyarbekir` ↔ `Diyarbakır` bir **yazım
varyantı değil AYRI BİR ADdır.** Normalleştirici onu çözmez ve
**çözmemelidir** — onu bir **eşanlam sözlüğü** çözer (`Budin ↔ Buda`
ile aynı sınıf). İkisini karıştırmak, normalleştiriciyi bir sözlük
sanmaktır.

📌 Ve bu, `§11`in *"aletin gösterdiği ≠ dosyada yazan"* ailesinin
**dil** yüzü: burada yalan söyleyen bir dosya ya da bir birim değil,
**standart kütüphanenin kendisi.**

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

#### 🔴🔴 VE 2 EYLÜL 2026'DA BU KURALIN **NİÇİN** İŞLEDİĞİ ÖLÇÜLDÜ

Külliyattaki **553 benzersiz `kaynak:` slugu** HTTP ile tarandı. Ölüm
oranı slug **cinsine** göre **24 KAT** değişiyor:
```
OLAY                 5 / 5     %100   ← hepsi ölü
SAVAŞ               13 / 27     %48
ANTLAŞMA             7 / 25     %28
YER · KİŞİ · YAPI   12 / 502     %2   ← neredeyse hepsi canlı
```

> ***TDV bir OLAY ansiklopedisi değil, YER-KİŞİ-KAVRAM
> ansiklopedisidir.*** Bir savaşın ya da antlaşmanın kendi maddesi çoğu
> zaman **yoktur**; anlatı **yerin ya da kişinin** maddesinde durur.

🟢 **Kanıtı aynı olayın iki adresi:**
```
kasr-i-sirin-antlasmasi   302   ÖLÜ
murad-iv                  200   CANLI — ve gövdesi olayı GÜNÜYLE veriyor:
   "Kasrışîrin civarındaki Zühâb mevkiinde … Kasrışîrin Antlaşması
    imzalanmıştı (14 Muharrem 1049 / 17 Mayıs 1639)"
```
⇒ Bilgi TDV'de **vardı**, yalnız **yanlış kapıdan** aranmıştı.

📌 Yukarıdaki *"kapsayıcı maddeyi dene"* kuralı bir **sezgiydi**; artık
bir **yön**ü var: **kapsayıcı madde genellikle YER ya da KİŞİ
maddesidir.** Bir olay slug'ı ölü çıktığında rastgele deneme yapılmaz —
o olayın **geçtiği yere** ya da **başındaki kişiye** bakılır.
⚠️ Ve desen **yönü** söyler, **adresi vermez**: hangi yer ya da hangi
kişi olduğu yine aranır.

⚠️ **VE İKİNCİ KOVA "TEMİZ" DEĞİLDİR:** taramanın 515 slug'ı `200`
döndü, ama `200` *"doğru madde"* demek **değildir** (`ordu` askerî
ordudur, şehir maddesi `ordu--sehir`). Tarama `§4②` tuzağını **ölçmez**.
Rapor iki kovalı tutuldu ve ikincisi **`ölçülemedi`** diye yazıldı.

🟢 Ve bu ölçüm mevcut bilgiyi **çürütmedi, genişletti**: bu belgede
adıyla kayıtlı ölü slug sayısı **3 → 37.**

**Ölçülmüş kapsama sınırı** (381 künyenin tamamı tarandı): Kafkasya · Anadolu ·
İran · Orta Asya · Balkanlar · Mısır-Sudan · Afrika'nın dördü · Amerika'nın üçü
**%100** · Arabistan %86 · İberya %80 · Sibirya %75 · Güney Asya %57 ·
Güneydoğu Asya %53 · **Batı Avrupa %0** (İskoçya · İrlanda · Lüksemburg ·
Bretanya · Burgonya — TDV'de gerçekten yok).

> 🔴 **BU TABLO KÜNYE KAPSAMASINI ÖLÇER — TANECİK KAPSAMASINI DEĞİL.**
> *"381 KÜNYENİN tamamı tarandı"* diyor: yani *"o bölgenin DEVLETLERİ
> TDV'de var mı"*. **"O bölgedeki kasabanın kuruluş tarihi var mı" sorusunu
> ÖLÇMEZ**, ve iki soru aynı bölgede farklı cevap verir.
>
> **Vaka (2 Eylül 2026, ve yanılan KOORDİNATÖRDÜ):** beş Rus Kafkas hattı
> kalesi (Mozdok · Georgiyevsk · Stavropol · Uryupinsk · Macar) için
> koordinatör *"Kafkasya %100, önce TDV"* diye yönlendirdi. Ölçüm:
> ```
> dar slug            7/7 → 302 ÖLÜ
> kapsayıcı 3 madde   kabartaylar · kafkasya · dagistan — GÖVDELERİ OKUNDU
>                     ÜÇÜ DE 18. yy kale kuruluş tarihi VERMİYOR
>                     `kabartaylar`da "Kafkas hattı" ifadesi HİÇ GEÇMİYOR
>                     `dagistan` Kızlar (1735) ve Mozdok (1763) DEMİYOR
> ```
> ⇒ Yönlendirme yanlıştı, ve dayandığı sayı **başka bir şeyi ölçüyordu.**
> 📌 `§4`ün kendi ayrımı (**COĞRAFÎ boşluk ≠ TANECİKLİK boşluğu**) burada
> da geçerli: TDV Kafkasya'yı **görüyor**, ama o kadar **ince** taneciğe
> inmiyor. `kirman` (57 KB) ve `yezd` (61 KB) vakasının aynısı.
> ⇒ **Bu tablodan bir KASABA için hüküm çıkarma.** Tablo künyeler içindir.

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

data/yerlesimler.js     ⭐ ELLE YAZILAN TEK COĞRAFİ KAYNAK
data/olaylar*.js        Kronoloji ÇEKİRDEĞİ — `denetle.py`nin Değişmez 2 evreni
data/kronoloji*.js      Kronoloji KUYRUĞU — index.html'de bağlı (CANLI) ama
                        `Değişmez 2`nin evreninde DEĞİL. İki kova KASITLI:
                        `§11` *"bu gün zaten var yetmiyor — HANGİ KOVADA
                        olduğu da sorulmalı."*
data/devletler.js       Devletler dizini (künye + `harita:` boya anahtarı)
data/padisahlar.js      Padişah kartları (36 padişah + Fetret + ara dönemler)
data/kisiler.js         Kişi dizini
data/savaslar.js        Savaş · antlaşma · seri · sefer güzergâhı (`SEFERLER`)
data/sehirler.js        Şehir/kale kartları

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

data/donemler.js        🤖 ÜRETİLMİŞ — ELLE DÜZENLEME.
data/devletler_harita.js 🤖 ÜRETİLMİŞ — ELLE DÜZENLEME.
data/bolgeler.js        🤖 ÜRETİLMİŞ — idarî bölgeler. ELLE DÜZENLEME.

arac/uret_petek.py      ⭐ TEK ÜRETİM BETİĞİ.
arac/renkler.py         Devlet renkleri (BOYALAR) — DSATUR ölçümü
                        ve "kompozit ΔE" uyarısı dosya başında
arac/denetle.py         ⭐ BEŞ DENETİM — üç değişmez + dönem sağlığı + mükerrer madde
arac/surum_damgala.py   index.html'deki ?v=rNN damgasını günceller
arac/uret_donemler.py   ☠️ ESKİ MOTOR — kullanılmıyor, referans için duruyor

🔴 `veri-kaynak/motor_kara.geojson` BİR GİRDİ DEĞİL, ÇIKTIDIR — ve adı
   yanıltıcıdır. `uret_petek.py:2776` onu KOŞUNUN SONUNDA yazar:
   `unary_union(PETEK_D)` = **motorun ÇİZDİĞİ kara**, Natural Earth'ün
   kara maskesi DEĞİL. Girdi maskesi `ne_10m_land.geojson`dur.
   ⚠️ İkisi AYRIŞIR ve ayrışma KUSUR DEĞİL: ölçüldü (2 Eylül 2026),
   `motor_kara` **A1 yarıçap tavanıyla** biçimlenmiş — kaplama 0-150 km
   bandında %89-100, 200 km'de kırılıyor, 400 km ötesinde **1.694
   hücrenin sıfırı** boyalı. Yani hiçbir petek noktasından ~200 km
   öteye uzanmıyor (`TAVAN_KM` hepsi 200).
   ⇒ Bu dosyayı "kara maskesi" sanmak bir koordinatörü yanılttı:
   `ne_10m_land`in yarısı kadar kara görünce *"maske bayat/dar"* diye
   düşündü, ve *"sadeleştirme"* diye tahmin etti. Bir işçi oturum
   ölçtü, **ikisi de çürüdü** — geçiş tam 200 km'de ve omuzlu, ve
   sadeleştirme düzgün bir mesafe gradyanı üretmez.
   📌 Ve doğru okuma Emre'nin hükmünün kendisi: motor Çang Tang'ı
   **yanlış boyamıyor, HİÇ boyamıyor** — *"devasa boşluklar olacaksa
   olsun."* Dosyanın adı yanlış, davranışı doğru.
   🔜 BORÇ: adı `motor_cizdigi_kara.geojson` olmalı; yeniden adlandırma
   dört aracı (`maliyet.py` · `olc_ekleyici.py` · `uret_altlik.py` ·
   `_enklav_kara.py`) ve `kosu_yayin.py`i bağlar.

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

  🔴🔴 **VE MOTORUN KENDİ SATIRI BU KURALI ÇÜRÜTÜYOR GİBİ OKUNUYOR —
  2 Eylül 2026'da bir koordinatörü bütün gün yanılttı.** Koşu şunu basar:
  ```
  Girdi anlık görüntüsü: 73 dosya kopyalandı → girdi dosyaları SERBEST
  ```
  Cümle **yarım doğrudur** ve koordinatör o yarıyı ekibe kural diye
  tekrarladı (*"`data/*.js` GÜVENLİ, `arac/*.py` KİLİTLİ"*):
  ```
  DOĞRU   data/*.js yazmak KOŞUYU ÖLDÜRMEZ — anlık görüntü alındı
  EKSİK   ama ÇIKTIYI YAYINLANAMAZ HÂLE GETİRİR
  ```
  **Bedeli ölçüldü:** koşu 10 saat 35 dakika çalıştı, *"Doğrulama: tüm
  yerleşimlerin peteği geçerli ✓"* ile temiz bitti, ve yayın kapısı
  reddetti:
  ```
  ✗ YAYIN BAYAT — üretim girdiden geride (sha256 izi, 18 yerleşim dosyası)
  ✗ üretim izi: taze 3 · BAYAT 4
    donemler.js · bolgeler.js · devletler_harita.js · petek_govde.js
  ```
  Koşu 11:01'de girdiyi dondurdu; 21:36'ya kadar veri **altı kez**
  değişti (137 yama · ikiz beyanı · Varşova künyesi · Kongre Polonyası —
  dördü de koordinatörün kendi commit'leri).
  ⇒ **KOŞU SÜRERKEN `data/` VE `arac/` İKİSİ DE DONMUŞTUR.** Motorun
  "SERBEST" demesi bunu değiştirmez: o cümle **koşunun sağlığı** hakkında,
  **çıktının yayınlanabilirliği** hakkında değil.
  📌 Ve bu, `§11`in *"silinen kodun mezar taşı hayatta kalan kod hakkında
  bir İDDİADIR ve güven verdiği için kimse onu ölçmez"* dersinin **canlı
  kod** hâli: burada iddia bir yorumda değil, **koşunun kendi çıktısında**
  duruyor ve her koşuda tekrar okunuyor.

- 🔴 **NÖBETÇİ DE ALTYAPIYA BAĞLIDIR VE ALTYAPIYLA BİRLİKTE ÖLÜR.**
  *(3 Eylül 2026)*
  ```
  koşu başlangıcı   01:25:36 · PID 16848
  log son yazım     01:49:26  ← 24 dakika sonra
  sebep             Emre'nin bilgisayarı kapandı
  koordinatörün nöbetçisi   AYNI ANDA ÖLDÜ
  fark edilme       09:37 — SEKİZ SAAT sonra, ve Emre SORDUĞU İÇİN
  ```
  🔴 Koordinatör o sabah *"koşu sürüyor"* diye rapor edecekti. Nöbetçi
  yalnız **olay anında** konuşuyordu; öldüğünde de sustuğu için
  **sessizlik "iyi gidiyor" diye okundu.**
  ⇒ **KURAL: bir nöbetçi DÜZENLİ olarak "hâlâ nöbetteyim" demelidir.**
  Yeni nöbetçi her 60 dakikada bir canlılık raporu basıyor:
  ```
  ⏳ koşu SÜRÜYOR · 60 dk · <son log satırı>
  ```
  Bir saat ses gelmezse hüküm *"koşu iyi gidiyor"* değil,
  ***"nöbetçi ölmüş olabilir"*** — ve **sorulur.**
  📌 `§11`in *"ölçülemedi ≠ temiz"* kuralının **nöbetçi** yüzü: bir
  nöbetçinin sessizliği bir ölçüm değildir, ve ölçüm sanılırsa en
  pahalı hâline gelir — çünkü kimse ona bakmaz.
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


- 🔴🔴 **`§7` DOSYA SAHİPLİĞİNİ KORUYOR AMA *KAYNAK* SAHİPLİĞİ DİYE BİR
  ŞEY YOK — ve bir gecede İKİ KEZ ısırdı.** *(3 Eylül 2026)*

  `§7`nin tamamı *"hangi dosyaya kim yazar"* sorusunu cevaplıyor. Ama
  uzun bir koşu bir dosyaya yazmaz — **CPU'yu, belleği ve saati**
  tüketir, ve o kaynakların sahibi yazılı değil.
  ```
  22:54:46  koordinatör 143 kimlik renk koşusunu başlattı  (~60 dk)
  22:55:33  PRUSYA-0903 AYNI koşuyu başlattı               (~60 dk)
  arada 47 SANİYE · ikisi de "başlıyorum" dedi, ikisi de SORMADI
  ```
  ⇒ İki koşu aynı CPU'yu paylaştı, **ikisi de yavaşladı**, ve iki ayrı
  artefakt doğacaktı. Kusur iki taraflı: biri *"koştur"* dedi ama
  **kendi de koşturdu**; öteki *"başlıyorum"* dedi ama **sormadı.**

  🟢 **KURAL:** birkaç dakikadan uzun süren bir işi başlatan taraf,
  **başlatmadan ÖNCE** tahtaya yazar ve **60 saniye bekler**:
  ```
  py arac/tahta.py yaz --kim "<SEN>" --kime "HERKES" \
      --mesaj "KOŞUYU BEN BAŞLATIYORUM · <ne> · ~<süre>"
  ```
  ⚠️ Ve bu bir nezaket değil ölçüm meselesi: aynı anda koşan iki iş
  yalnız yavaşlamaz, **süre ölçümünü de bozar** — *"60-90 dakika
  sürüyor"* hükmü o gece verilseydi yanlış olurdu.

  📌 Ve tereddüdü doğuran şey kaydedilmeye değer: koordinatör koşusunun
  saatini **yanlış beyan etti** (*"23:1x"*, gerçek 22:54:46) ve karşı
  taraf bir an *"yanlış olanı durduruyorum"* diye duraksadı. Süreçlerden
  ölçtü, beyandan değil, ve doğruyu buldu.
  ⇒ ***Bir çakışmayı çözerken beyana değil SÜREÇ DAMGASINA bak.***

  🔴 Aynı turda koordinatörün ikinci teşhisi de çürüdü: *"seninki
  muhtemelen 550 renkli `BOYALAR` ile başladı"* dedi; ölçüldü, koşu
  `checkout`tan **67 saniye SONRA** başlamıştı ve çıktısında *"zaten
  tanımlı"* satırı **0**'dı. ⇒ **Hüküm doğru (koşu durmalı), teşhis
  yanlış (sebep o değil).** Bu ayrım korunmazsa bir sonraki oturum
  yanlış sebebi düzeltmeye kalkar.

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

### ⑤b 🔴🔴 «YAZILDI» CEVABI TESLİM KANITI DEĞİLDİR — TAHTA MESAJ KAYBEDER
*(2 Eylül 2026 — iki oturum bağımsız ölçtü, koordinatör doğruladı)*

`.git/index.lock` 27 dakika sahipsiz kaldı ve o pencerede `tahta.py`
**mesaj kaybetti.** Kayıp, aracın *"M-xxxx yazıldı"* cevabına rağmen oldu.

```
OK127'nin 19:48 raporu   "M-2299 yazıldı" cevabı ALDI · tahtada YOK
M-2299'un gerçek sahibi  1.MURAT → OPUS HAZIR KITA 128 (SONRAKİ yazar)
OK125'in AÇILIŞ mesajı   hiç var olmamış — 13 kaydının arasında yok
```

🔴 **VE DOSYA İÇERİDEN TUTARLI: 2305 kayıt · 0 mükerrer no · 0 boşluk.**
Bu bir sağlık işareti **değil** — tam tersinin kanıtı:

> ***Kayıp iz bırakmıyor, çünkü sayaç bir sonraki yazarın `max+1`iyle
> doluyor. Mükerrer bir numara ya da bir boşluk GÖRÜNÜRDÜ; ezilen yazım
> görünmüyor.***

**Mekanizma:** kayıp güncelleme yarışı (read-modify-write). İki oturum
tahtayı aynı anda okur, ikisi de `max+1` numarasını alır, ikincisinin
yazımı birincisininkini **üstüne yazar.**

⇒ **KURAL:**
```
🔴 Kritik bir mesaj yazdıysan — aksaklık raporu, teslim, karar isteği —
   `tahta.json`dan GERİ OKU ve kendi kaydını ARA. "Yazıldı" cevabı
   YETMEZ.
🔴 Aracın "mesaj tahta.json'da VAR, TEKRAR YAZMA" talimatı bu arızada
   YANILTICIDIR — bir rapor tam o talimata uyulduğu için kaybolacaktı.
🟢 Tahta çalışmıyorken kritik raporu ÖZEL KANALDAN yaz. `§7.1③` yatay
   mesajın tahtadan geçmesini şart koşar ÇÜNKÜ TAHTA GÖRÜNÜRDÜR;
   tahta çalışmıyorsa o şartın gerekçesi düşer. Görünmez bir kanaldan
   göndermek, hiç göndermemekten iyidir.
```
📌 Ve `§11`in *"sessiz atlama, yanlış sonuçtan pahalıdır"* dersinin
haberleşme yüzü: yanlış bir numara bir gün fark edilir, **kayıp asla.**

🟢 Bir de doğru davranışın kaydı: kilidi **üç işçi oturum da ölçtü ve
üçü de SİLMEDİ** — *"`.git` paylaşılan altyapı, 17 oturum aynı index'i
kullanıyor, `§7`ye göre paylaşılan şeylerde karar Oturum 0'ın."*
Koordinatörün kendi denemesini de izin katmanı durdurdu. Kilit
kendiliğinden kalktı; **kimse zorlamadı.**

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

  > 🔴🔴 **BU HÜKÜM IRAK İÇİN ÖLÇÜLDÜ VE ÇÜRÜDÜ — 2 Eylül 2026.**
  > Bir işçi oturum (OPUS HAZIR KITA 109) kaynağa sordu ve **fetret diye
  > bir şey çıkmadı:**
  > ```
  > TDV `ilhanlilar`   "İran'da kurulan bir Moğol devleti (1256-1353)"
  >                    ve 1335 SONRASI ilhanları TEK TEK sayıyor:
  >                    Arpa 1335 · Mûsâ 1336 · Muhammed 1336 · Tuga Timur 1337
  >                    Cihan Timur 1338 · Sâtî Beg 1339 · Süleyman 1340
  >                    Nûşirevân 1344-1353
  > TDV `celayirliler` "1340-1431 yılları arasında…", "bağımsız bir devlet
  >                    kurdu (1340)"
  > ```
  > ⇒ 1335-1340 arası **sahipsiz değildi.** Veri bir *fetret* taşımıyor,
  > **YANLIŞ SINIR GÜNÜ** taşıyor: 33 dönem `1335-12-01`de kesiliyor, oysa
  > `devletler.js`in `ilhanli` künyesi **zaten doğruyu söylüyordu** —
  > 1256-01-01 → **1353-01-01**. Veri künyesinden **17 yıl erken** kesmiş.
  > Çare kova değil **gün**: `ilhanli t:` ve `celayirli f:` 1340-01-01'e
  > kayar; kimlik değişmez, boşluk doğmaz, `4d` 469 → 436.
  >
  > 🔴 **Ve yanılan koordinatördü:** iş *"fetret var, kovaları ayır
  > (`devletsiz` · `veri-yok` · `başka devlet`)"* diye sevk edildi. **Üç
  > kova da yanlıştı** — 33'ün 33'ü zaten doğru kimliğe aitti. Üçüncü
  > ihtimal (**doğru kimlik, yanlış tarih**) hiç sayılmamıştı.
  > 📌 ***Bir çerçeve vermek, çerçevenin doğruluğunu peşinen kabul
  > ettirmektir.*** Sevk *"ölç"* diyordu ama **neyi ölçeceğini de
  > söylüyordu**; işçi oturum çerçevenin kendisini ölçtü ve çürüttü.
  > Beş öngörüsünün dördü çürüdü ve bilgiyi çürüyenler taşıdı.
  >
  > ⚠️ **KAPSAM DARALTILDI, SİLİNMEDİ.** Ölçülen **33 Irâk-ı Arab kaydıdır**;
  > İran ardılları (serbedârîler 1337-09-09 · muzafferî · kert) **ölçülmedi.**
  > Yukarıdaki paragrafın İran tarafı hâlâ **açık bir sorudur** — ama
  > *"1335-1340 arası bir fetret vardır"* genel hükmü **Irak için yanlıştır**
  > ve bir daha oradan iş türetilmemelidir.

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

  🔴🔴 **VE BU DERSİN ALAN ADI YANLIŞ YAZILMIŞ — 3 Eylül 2026'da ölçüldü
  ve ALTI OTURUMU birden yanlış yönlendirmek üzereydi.**
  Ders **doğru**, ama yukarıdaki anlatı (ve `arac/denetle.py:262-268`
  yorumu) cinsi `neden:` alanına yazıyormuş gibi okunuyor. **Gerçek alan
  `bos:`, ve kova sayısı iki değil BEŞ:**
  ```
  girdi.py:831  "bos":   "boşluğun CİNSİ: devletsiz | veri-yok | kabile |
                          insansiz | hata"
  girdi.py:840  "neden": "kasitli_bosluk'un GEREKÇESİ — niçin kasten boş"
  ÖLÇÜM (2731 nokta): 201 kaydın 201'i `bos:` kullanıyor ·
                      `neden:`e cins yazan 0
  dağılım: devletsiz 120 · kabile 51 · veri-yok 14 · insansiz 9 · hata 7
  ```
  🔴 **ÜÇÜNCÜ KOVA ÖNEMLİ VE İKİLİ SINAV ONU İFADE EDEMİYOR:**
  `kabile` — kaynak **susmuyor** (⇒ `veri-yok` değil) ama merkezî devlet
  de **tarif etmiyor** (⇒ `devletsiz` değil); klan/iwi/hapū/boy
  örgütlenmesi anlatıyor. Aborijin · Māori · Kuzey Amerika yerli
  toplumları çoğunlukla buraya girer. İki kovaya zorlanırsa ya
  **yanlış işlenir** ya **araştırılmamış görünür.**

  ⚠️ **Ve kusurun yolu kaydedilmeye değer:** yanlış alan adı bir
  **yorumda** yaşadı (`denetle.py:262`), oradan bu belgeye geçti,
  belgeden bir şartnameye, şartnameden **altı oturuma.** Hiçbir aşamada
  veri okunmadı — çünkü her aşamada bir öncekine güvenildi.
  🟢 Zinciri kıran şey bir denetim değil, kendi bölgesinin verisini
  okuyan bir işçi oturum oldu (`DUNYA-OKYANUSYA-0903`): *"201/201 `bos:`
  kullanıyor, şartnamenin biçimini destekleyen kayıt SIFIR."*
  📌 ⇒ ***Bir alan adı, kullanıldığı yerden değil TANIMLANDIĞI yerden
  okunur.*** Yorum bir tanım değildir; `girdi.py`nin `BILINEN_ALANLAR`
  kütüğü tanımdır.

  ⚠️ Ve aynı turda ölçülen bir bayat sayı: *"97 noktanın cinsi yazılmamış"*
  diye taşınan borç **ÖDENMİŞTİ (ölçüm: 0)**. O sayı 10 Ağustos'a ait;
  `bos:` alanı **12 Ağustos'ta doğmuş.** ⇒ Şartnameye iki gün öncesinin
  sayısı kopyalanmış — *"kendi ödediğin borcu kaydını okumadan yeniden iş
  sanabilirsin"* dersinin dördüncü vakası.

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

- 🔴 **SİLİNEN KODUN MEZAR TAŞI, HAYATTA KALAN KOD HAKKINDA BİR İDDİADIR —
  VE GÜVEN VERDİĞİ İÇİN KİMSE ONU ÖLÇMEZ.** *(24 Ağustos 2026)*

  22 Ağustos'ta `yakinlikKm` silindi ve yerine örnek bir kayıt notu
  bırakıldı — *"silinen ölçüm, yeniden ölçülmesin diye"*. Notun kendisi
  **doğru ve değerliydi**:
  ```
  zoom→km dönüşümü MapLibre'nin KENDİ döşeme kuralıyla yapılıyordu:
  512px, 256 DEĞİL (Google/Bing'in eski 256px kuralı burada TAM 2× YANLIŞ
  sonuç veriyordu, ölçülüp düzeltilmişti).
  ⇒ Ters yön (`kmDanZoom`) YAŞIYOR ve uçuşun kalbi; BU BİLGİ ORADA DURUYOR.
  ```
  🔴 **Son cümle yanlıştı ve tam iki gün sonra ölçüldü.** `kmDanZoom`
  `156543.03392` kullanıyordu — **256 piksellik** sabit. Yani:
  ```
  silinen fonksiyon    kuralı BİLİYORDU ve uyguluyordu
  yaşayan fonksiyon    kuralı ÇİĞNİYORDU, tam 2× yanlış
  mezar taşı           "bu bilgi orada duruyor" DİYORDU
  ```
  Zararı da not tarafından **önceden tarif edilmişti** (*"tam 2× yanlış"*)
  ve bugün birebir o çıktı: istenen 1919 km, gerçek 846 km, oran 1,97.

  📌 **Ve kusur, notun yanlış olmasından değil, GÜVEN VERMESİNDEN
  büyüdü.** *"Bu bilgi orada duruyor"* cümlesi, okuyanı oraya
  BAKMAKTAN alıkoyar. Bir uyarı okuru ölçüme iter; bir güvence ölçümden
  ÇEVİRİR. ⇒ ***Yanlış bir güvence, hiç yazılmamış bir nottan kötüdür.***

  ⚠️ Ve bedeli tek bir sürgüde kalmadı: `gorusGenisligiKm`, odak devletin
  genişliğini **1,35 ile çarpıp** onu çerçeveye sığdırmak için yazılmıştı.
  Yarıya inince 1,35 kat istek 0,675 kata dönüştü — yani **devleti
  SIĞDIRMASI gereken çarpan, onu KESMEYİ garanti etti.** Emre iki ayrı
  pakette *"Osmanlı topraklarının genelini harita dışında tutarak"* diye
  şikâyet etti; sebebi buydu ve kimse çarpanın kendisinden şüphelenmedi,
  çünkü çarpan **doğruydu.**

  🟢 **KURAL:** bir kodu silerken komşusu hakkında **iddia yazma** —
  ya ÖLÇ, ya *"ölçmedim"* de. `§11`in *"ölçmediğini `ölçmedim` diye yaz"*
  kuralının **miras tarafı**: silinen kodun notu, kalan koda dair bir
  **taahhüt** gibi okunuyor ve o taahhüdü kimse denetlemiyor.

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

- 🔴 **BİR DEFTERİN ANAHTARI KARARSIZSA, DEFTER SESSİZCE YALAN SÖYLER —
  ve yalanı "gerileme" gibi görünür.** *(2 Eylül 2026 — bir gecede ÜÇ
  defterde ölçüldü)*

  Defter, *"hangi şüpheli YENİ doğdu"* sorusunu cevaplayan kümedir. Kayıtlar
  bir **anahtarla** kimliklenir. Anahtar, **bulgu değişmeden** değişebiliyorsa
  aynı kayıt bir KAPANAN + bir YENİ olarak görünür — ve okuyan bunu *"bir
  şey düzeldi, bir şey bozuldu"* diye okur. **Hiçbiri olmamıştır.**
```
§A  anahtar "tarih|kırılan İLK yer"   o güne yeni yerleşim eklenince
                                      alfabetik ilk sıra KAYIYOR
    ⇒ "45 YENİ"nin 18'i SAHTE — gerileme adayı listesinin %40'ı gürültü
§B  anahtar "tarih|yer:"              maddenin `t:` alanı AYdan GÜNe inince
                                      anahtar değişiyor
    ⇒ `1783-04|Kırım` → `1783-04-19|Kırım` : AYNI SATIR, iki kayıt gibi
§C  defteri YOKTU                     açılırken anahtar ÖNCE ÖLÇÜLDÜ:
                                      `tarih` tek başına 1 ÇAKIŞMA verdi
                                      ⇒ `tarih|yer_id` seçildi, çakışma 0
```
  ⇒ **KURAL (bulan oturumun kendi cümlesi):** *"Anahtar, DEĞİŞMESİ BULGUYU
  DEĞİŞTİREN şeylere dayanmalı."* `ilk yer` bulgu değişmeden değişir
  (gürültü); `yer_id` değişirse **maddenin gösterdiği yer** değişir (gerçek).

  ⚠️ **Ve anahtarı düzeltmek defteri SIFIRLAR** — yani bir kararı gerektirir:
```
eski defter SİLİNMEZ, `.ONCEKI.json` olarak durur
`_NOT` alanına sıfırlamanın SEBEBİ · TARİHİ · eski dosya adı yazılır
```
  Sebebi `§11`in kendi dersi: sıfırlama **denetlenebilir** olmalı. Yarın
  *"bu taban nereden geldi"* diye soran biri cevabı ölçebilsin.

  🔴 **VE SINAV, BOZULAN ÖZELLİĞİ HEDEF ALMALI — aletin genel sağlığını
  değil.** `§A`nın kusuru *"çakışma"* değil **KARARSIZLIK**tı; yalnız
  *"yeni/kapanan sayıyor mu"* diye sormak onu bir daha kaçırırdı. Doğru
  sınav: sahte bir yerleşim adını listenin başına **zorla sok** ve anahtarın
  **DEĞİŞMEDİĞİNİ** göster.
  📌 `C13` *"iki yönü sına"* der ama **hangi özelliğin** sınanacağını
  söylemez. Bu, onun eksik ayağı.

- 🔴 **İKİ AYRI SORUNUN AYNI CEVABI VERMESİ, AYNI SORU OLDUĞU ANLAMINA
  GELMEZ.** *(2 Eylül 2026)*

  Bir oturum `1783-04-19`u *"meşru ödünç tarih — tek olaya bağlı"* diye
  ölçtü. Başka bir oturum aynı günü **başka bir soruyla** inceledi
  (*"eşleşme şüphesi mi?"*) ve aynı yöne vardı — ama gerekçesi farklıydı:
  *"`yer_id` doğru, Kırım kutusundaki 14 noktanın 13'ünde o gün kırılma
  var."*
  🟢 İkincisi birincinin hükmünü **DEVRALMADI**, kendi ölçtü. Ve ayrımı
  kendi kurdu:
  > *"Sonuç aynı yöne çıktı ama gerekçe farklı. İki ayrı sorunun aynı
  > cevabı vermesi, aynı soru olduğu anlamına gelmiyor."*

  ⇒ Devralsaydı **tek dayanağı** olurdu. Ayrı ölçtüğü için **iki bağımsız
  kanıt** var ve biri çürürse öteki ayakta kalır.
  📌 Bu, *"ölçüm doğru, çıkarım yanlış"* ailesinin en ince üyesi: iki ölçüm
  aynı sonuca varınca **birini ötekinin doğrulaması sanmak.** Doğrulama,
  aynı soruya iki yoldan gitmektir — farklı sorulara aynı cevabı almak
  değil.

- 🔴 **BİR ALET YANLIŞ BİRİM ETİKETİ BASIYORSA, ONA YAZILAN ÖNGÖRÜ
  ÇÜRÜTÜLEMEZ HÂLE GELİR — NE TUTAR NE ÇÜRÜR, YALNIZ YANILTIR.**
  *(2 Eylül 2026 — iki oturumu, on yedi gün arayla, aynı satır yanılttı)*

  `uret_petek.py`nin puanlama kapısı şu satırı basıyor:
  ```
  🚪 PUANLAMA KAPISI: kesilen 743.793.802 km²
  ```
  Sayı doğru. **Birim yanlış.** Kod okununca çıktı:
  ```python
  _PUAN_KESILEN[0] += max(0.0, _onceki_alan - _ham_km2(g))  # her devlet × her DÖNEM
  if g.is_empty: _PUAN_TAMAMEN[0] += 1                       # AYRIK sayım
  ```
  ⇒ `kesilen` **km²·DÖNEM**, `tamamen boşalan` **adet**. 391 devlet ×
  2865 dönem ⇒ 743.793.802 / 2865 ≈ **259.600 km² / gövde-dönem.**

  **İki oturum, on yedi gün arayla, aynı etikete güvendi:**
  ```
  16 Ağustos  öngörüyü YAZAN oturum bandı km² sandı  → "2-15 M km²" yazdı
   2 Eylül    koordinatör sayıyı km² sandı           → "50 KAT SAPMA,
              yayın durabilir" diye alarm verdi ve bir kolu ACİL'e çevirdi
  ```
  🟢 Ve çürüten şey bir sezgi değil **kodu okumak** oldu: koordinatör
  *"birim uyuşmazlığı OLABİLİR"* diye doğru tahmin etti ama **dayanağı
  yoktu**; işçi oturum `uret_petek.py:4354`ü açtı ve dayanağı verdi.

  ⚠️ **VE SAPMANIN YÖNÜ DE AÇIKLANDI:** sayaç `max(0, …)` kullanıyor,
  yani **negatif olamaz.** Çok gövdenin kenarını her dönemde budamak,
  **hiçbirini boşaltmadan** dev bir toplam üretir. *"Kesilen bandın 50 kat
  üstünde ama boşalan bandın altında"* çelişkisi bir kaçak değil,
  **iki farklı birimin yan yana basılmasıydı.**

  📌 Bu, `§11`in *"aletin gösterdiği ≠ dosyada yazan"* dersinin **BİRİM**
  yüzü. Orada bir bayt görünmez olmuştu (0x08); burada bir **birim yanlış
  yazılı** — ve ikincisi daha sinsi, çünkü **hiçbir şey bozuk görünmüyor.**

  🟢 **VE ÜÇÜNCÜ BİR DAMGA GEREKTİĞİ ORTAYA ÇIKTI.** Proje *"ölçülemedi ≠
  temiz"* kuralını biliyordu. İşçi oturum ikinci yarısını ekledi:
  > *"'ölçülemedi' asla TEMİZ diye raporlanmaz — **ama 'ÇÜRÜDÜ' diye de
  > raporlanmaz.**"*
  ```
  TUTTU        öngörü doğrulandı
  ÇÜRÜDÜ       öngörü yanlıştı            → BİLGİ taşır, dersi alınır
  ÖLÇÜLEMEDİ   alet o soruyu cevaplamıyor → kalem HÂLÂ AÇIK
  ```
  ⚠️ Yanlış damga pahalı: **çürük** damgası bir öngörüyü kapatır ve bir
  sonraki oturumu onu ölçmekten alıkoyar. *Ölçülemedi* onu açık tutar.

  🔴 **VE SINAVIN KENDİSİ DE BOZULABİLİR:** aynı öngörünün ⑤ kalemi
  *"kesilen km² toplamı ile kesitlerdeki alan düşüşü tutarlı olmalı"*
  diyordu — ama **sol taraf km²·dönem, sağ taraf km²**; karşılaştırılamazlar.
  Yani yanlış birim yalnız öngörüyü değil, **onu sınayacak sınavı da**
  geçersiz kılmıştı. Çare: sol tarafı sayaçtan değil **çıktıdan** türetmek.

  🟢 **KURAL — bir sonraki öngörü şablonuna:** her kalemin yanına
  ***"bunu HANGİ ÇIKTIDAN, HANGİ BİRİMDE okuyacağım"*** yazılır. Bir
  öngörü, aletin bastığı birimi doğrulamadan yazılırsa çürütülemez.
  ⇒ Ve borç kaydı: `uret_petek.py`deki o satır `kesilen … km²·dönem`
  diye düzeltilecek, yanına *"ayrık alan DEĞİLDİR"* notuyla.

- 🔴 **`C13`ÜN ÜÇÜNCÜ AYAĞI: GİRDİYİ GERÇEK KAYNAĞINDAN OKUMA YOLU DA
  SINANIR.** *(2 Eylül 2026 — ve bir nöbetçi, önlemek için yazıldığı
  kusuru İLK GERÇEK GİRDİSİNDE kendi üzerinde üretti)*

  `C13` iki yol sayıyor: **geçme** (kusur yokken temiz mi) · **ateşleme**
  (kusur varken ötüyor mu). `arac/_bk_nobetci.py` ikisini de geçti —
  ateşleme sahte bir adla (`ZZZ-YOK-OLAN-BASKENT-QQQ`) zorlandı, geçme
  temiz kümede gösterildi. **Ve yine de çalışmadı:**
  ```
  ilk gerçek dosya yazıldı  →  nöbetçi "0 kayıt · TEMİZ · çıkış 0" bastı
  gerçek                    →  4 kayıt vardı
  ```
  ⇒ **Sınavların ikisi de kayıtları BELLEĞE ENJEKTE ederek yapılmıştı.**
  Dosyadan okuma yolu **hiç koşulmamıştı** ve kusur tam oradaydı: regex
  `bk:[` dizisinin ilk öğesinde duruyor, gövdeyi boş yakalıyordu.

  🔴 **Ve tehlikesi şu: nöbetçi, VAR OLMAK İÇİN YAZILDIĞI kusuru üretti.**
  `bk[].ad` eşleşmemesi *sessiz başarısızlık* olduğu için nöbetçi
  yazılmıştı; nöbetçinin kendisi de **sessizce** boş döndü. Sessiz bir
  kusuru yakalayan alet, sessizce bozulursa **hiçbir şey ötmez.**

  🟢 **Çare regex'i düzeltmek DEĞİL, regex'i BIRAKMAK oldu:** artık
  `girdi._cevir` kullanılıyor — motorun kendi JS okuyucusu.
  📌 Bu proje aynı dersi (*"veri zaten bir dilde yazılıysa, o dilin
  yorumlayıcısını çağır"*) **dördüncü kez** öğrendi: `girdi.py` tek tırnak
  · `bagla.py` CRLF · `renkler.py` regex ayrıştırması · ve şimdi bu.
  ⚠️ **Dördüncüsünün farkı:** öncekiler eski aletlerde çıktı, bu **aynı
  gün yazılmış YENİ bir nöbetçide** çıktı — yani kural yazılıyken bile
  ihlal edildi. *"Kural yetmiyor, ALIŞKANLIK gerekiyor"*un bir üstü:
  **alet yazarken varsayılan JS okuyucusu OLMALI, regex istisna.**

  🟢 **KURAL — `C13` artık ÜÇ AYAKLI:**
  ```
  ① GEÇME      kusur yokken TEMİZ diyor mu
  ② ATEŞLEME   her kusur dalı için AYRI AYRI ötüyor mu
  ③ GİRDİ      🆕 girdiyi GERÇEK kaynağından (dosya) okuma yolu koşuldu mu
  ```
  ⚠️ ③ olmadan ① ve ② **aletin mantığını** sınar, **aletin kendisini**
  değil. Enjekte girdiyle yapılan bir sınav, ayrıştırıcıyı hiç çağırmaz —
  ve bu projede kusurların çoğu **ayrıştırıcıda.**

  📌 Ve bulan oturumun kendi cümlesi kaydın özü:
  > *"Nöbetçi C13'ü geçmişti — ama iki yolu da ENJEKTE kayıtla
  > sınamıştım, yani dosya okuma yolunu hiç sınamamıştım."*

- 🔴 **"ATLASTA YOK" HÜKMÜ, NORMALLEŞTİRİCİSİZ BİR ARAMAYLA VERİLEMEZ —
  ve bu, `§4`ün Türkçe yazım ekseninin BEŞİNCİ vakası, ilk kez BİR NOKTA
  PARTİSİNİ durdurdu.** *(2 Eylül 2026)*

  `bk:` kolu *"çok-başkentli künyelerin 42 adayının atlasta noktası yok"*
  diye ölçtü ve nokta yazma kolu açılmak üzereydi. **Altısı çürüdü:**
  ```
  Buda      → Budin       🟢 VAR      Iaşi                → Yaş        🟢 VAR
  Smederevo → Semendire   🟢 VAR      Larende             → Karaman    🟢 VAR
  Skopje    → Üsküp       🟢 VAR      Haydarâbâd (Dekken) → aynen      🟢 VAR
  Pozsony / Pojon / Pressburg                             🔴 gerçekten YOK
  ```
  ⇒ Kol açılsaydı `Budin`in yanına **`Buda`**, `Üsküp`ün yanına
  **`Skopje`** yazılacaktı: `§11`in Varat/Varad tuzağı, **altı kez
  birden**, ve hepsi *"eksik veriyi tamamlıyoruz"* diye.

  ⚠️ **VE AYNI TUZAĞA ÖNCE KOORDİNATÖR DÜŞTÜ.** İlk doğrulama araması
  ASCII ile yapıldı (`usku` · `egirdir`) ve **`Üsküp` ile `Eğirdir`i
  bulamadı**: `"Üsküp".toLowerCase()` = `"üsküp"`, içinde `"usku"` **yok**.
  Yani *"Skopje atlasta yok"* hükmü **yazılmak üzereydi.**
  📌 Aynı gün bu tuzak **dört kez kaydedilmişti** ve beşincisine kaydı
  yazan taraf düştü. ⇒ ***Kural yetmiyordu, alışkanlık da yetmiyor —
  ALET gerekiyor.***

  🔴 **Ve bir hüküm daha çürüdü, ters yönde:** aynı ölçüm
  `Haydarâbâd (Dekken)`in **var olduğunu** gösterdi. İşçi oturum
  `Haydarâbâd (Sind)`i bulup *"başka şehir, 1500 km"* demiş ve Golkonda'yı
  **yazmamıştı** — korkusu yerindeydi (Sind'e yazmak yıldızı yanlış ülkeye
  düşürürdü) ama **aday listesi eksikti.** ⇒ Doğru kapı, eksik girdi.

  🟢 **KURAL — iki ayrı şey ve ikisi de gerekli:**
  ```
  ① NORMALLEŞTİRİCİ  Türkçe harf + diakritik + kesme. ORTAK olmalı —
                     üç ayrı alet üç ayrı normalleştirici yazarsa
                     üç ayrı kör nokta doğar.
  ② EŞANLAM SÖZLÜĞÜ  `data/ad_esanlam.js`, ATLASIN ADI anahtar.
                     Normalleştirici `Budin`↔`Buda`yı çözmez —
                     onlar aynı dizginin varyantı değil, AYRI adlar.
  ```
  ⚠️ Ve sözlük **ölçerek** kurulur: her eşanlam için *atlasta o ad var mı*
  **ve** *koordinatlar aynı yeri mi gösteriyor?* `Haydarâbâd (Sind)` ile
  `Haydarâbâd (Dekken)` neredeyse aynı ad ve **1500 km** ötede —
  ad benzerliği eşanlam DEĞİLDİR.

  📌 `Diyarbekir/Diyarbakır` bu ailenin en çok ısıran üyesi: koridor
  ağında 4 kenar kopardı · bir ad süzgeci yanlış kabul etti · bir sonraki
  yanlış reddetti · ve `bk:` kolunda dördüncü kez çıktı. **Aynı kayıt,
  dört alet, dört yön.** Tesadüf değil — sözlüğün yokluğunun imzası.

- 🔴 **BİR ÖNGÖRÜ, SINAVININ KOŞULACAĞI ANI DA TARİF ETMELİDİR — damga
  yetmiyor.** *(2 Eylül 2026, puanlama kapısı öngörüsü)*

  Proje öngörü disiplinini üç adımda öğrenmişti: *ölçümden ÖNCE yaz* ·
  *mazereti de önceden yaz* · *hangi çıktıdan hangi BİRİMDE okuyacağını
  yaz*. Dördüncüsü bugün ölçüldü ve eksikti.

  16 Ağustos'ta sekiz kalemlik damgalı bir öngörü yazıldı. 2 Eylül'de
  sınandı ve **dördü ölçülemedi** — hepsinin kökü tek:
  ```
  öngörü kapının İLK koşusu için yazılmıştı
  ama kapı 27 AĞUSTOS'TAN BERİ açık
  ⇒ varsayılan deney (kapısız → kapılı) HİÇ YAPILMAMIŞ
  ```
  Kıyas *"dün bugün ne değişti"* sorusunu cevaplıyordu; öngörünün sorduğu
  *"kapı ne yaptı"* sorusunu **değil.** Alet doğru çalıştı, **kontrol
  grubu yoktu.**
  📌 Aynı öngörünün ①'inde eksik olan **birim**di, ④⑤⑦'sinde **kontrol
  grubu**. İkisi de "doğru aleti yanlış evrenle koşturmak" ailesinden.

  🟢 **KURAL:** her öngörü kalemi dört şey yazar —
  ```
  ① NE bekliyorum        (sayı ya da yön)
  ② MAZERETİ var mı      (yoksa "mazeret YOK" diye YAZ)
  ③ HANGİ ÇIKTIDAN, HANGİ BİRİMDE okuyacağım
  ④ 🆕 HANGİ KOŞUDA ve NEYE KARŞI ölçülecek
  ```
  ④ olmadan bir öngörü **damgalı ama sınanamaz** olur: kimse onu
  çürütemez, kimse doğrulayamaz, ve yalnız yanıltır.

- 🟢 **VE BİR ÖNGÖRÜ ÜÇ AYRI CİNSTEN ÇÜRÜR — ÜÇÜNCÜSÜ EN DEĞERLİSİ.**
  Aynı turda ölçüldü:
  ```
  ① SAYI YANLIŞ        öngörü 900-1400, ölçüm 604 — bant kayması
  ② ÖLÇÜLEMEDİ         alet o soruyu cevaplamıyor (kalem AÇIK kalır)
  ③ MEKANİZMA YOK      🆕 tarif edilen şey YAPISAL OLARAK imkânsız
  ```
  ③'ün vakası: öngörü *"50-400 gövde TAMAMEN boşalır"* diyordu. İşçi
  oturum sayıyı çürütmedi, **mekanizmanın var olamayacağını** gösterdi:
  ```
  PUAN_ESIK = 4  ve  0-200 km halkası = 4 puan
  ⇒ bir devletin KENDİ noktasının 200 km'si tek başına eşiği geçiyor
  ⇒ gövde kendi noktalarından kurulduğu için EN AZ BİR NOKTASI OLAN
    GÖVDE ASLA TAMAMEN BOŞALAMAZ — sayaç 0'dan başka değer ALAMAZ
  ```
  ⇒ ①'de sayıyı düzeltmek yeter; ③'te **soruyu değiştirmek** gerekir.
  📌 Ve ③ ancak **kodu okuyarak** bulunur; hiçbir koşu sayısı onu
  göstermez, çünkü sayı hep 0 çıkar ve *"demek hiç boşalmıyor"* diye
  okunur.

- 🟢 **BİR KOD ARGÜMANI, BİR KONTROL KOŞUSUNDAN GENİŞ OLABİLİR —
  ve 11,5 SAAT KURTARDI.** *(aynı gün, aynı öngörü)*

  Yayın kapısı şu kalemde asılıydı: *"kapı Osmanlı'ya dokundu mu?"*
  Sayısal cevap bir **kontrol koşusu** istiyordu (`MOTOR_PUAN_KAPALI=1`,
  ~11,5 saat). Bunun yerine kod okundu ve **dört bağımsız ayakla**
  gösterildi:
  ```
  ① kapı `for … BOYALAR.items()` döngüsünün İÇİNDE          (:4354-60)
  ② BOYALAR 403 anahtar · "osman" 0 · "tabi/vassal" 0
  ③ kapı bloğunda `PETEK_D`ye YAZIM YOK (4340-4405 tarandı)
  ④ Osmanlı gövdesi yabancıların TÜMLEYENİ DEĞİL — kendi hücrelerinin
     birleşimi: `unary_union([_pe[j] for j in dogrudan])`   (:4470±)
  ```
  ⇒ Kapı, Osmanlı gövdesinin girdisine **hiçbir yoldan** dokunamıyor.

  📌 **Ve gerekçe kapanışın kendisinden değerli:** *"kontrol koşusu BİR
  koşuyu ölçerdi; kod argümanı BÜTÜN koşuları kapsar."* Bir ölçüm tek bir
  örneği doğrular, bir yapı argümanı **sınıfı** doğrular.
  ⚠️ Sınırı da yazıldı ve kapanışı zayıflatmadı, **kullanılabilir kıldı:**
  *"bu STATİK bir doğrulama; `petek_epok` içinde kapıdan etkilenen bir
  önbellek gibi bir yan etkiyi kaçırmış olabilirim — onu ÖLÇMEDİM."*
  ⇒ Kayıt *"ölçülemedi"* değil, **"kod üzerinden KANITLANDI, sayısal
  kontrol koşusu gerekmiyor"** diye tutuldu. Laundering değil, çünkü
  hangi soruya hangi yoldan cevap verildiği **yazılı.**

- 🔴 **DOĞRU SONUCU GÜVENİLMEZ YOLDAN VEREN ALET — ve kendini ELE VERMEZ.**
  *(2 Eylül 2026, işçi oturumun kendi aletini ihbarı)*

  Bu proje *"yanlış sonuç veren alet"* vakalarını çok kaydetti. Bugün
  eksik olan sınıf ölçüldü: **doğru sayıya vardığı hâlde yöntemi
  güvenilmez olan alet.**

  Bir oturum *"27 çatışmanın kaçı karara bağlandı"* diye sordu ve iki kez
  ölçtü:
  ```
  ① AD ARAMASI      "adı belgede geçiyor mu"     → 18/18 kapsanmış
  ② BÖLÜM AYIRMA    "adın geçtiği BÖLÜMDE hüküm var mı"
                     (20 bölüm · 16'sında HÜKÜM satırı, ilk satırlar basıldı)
  ```
  ⇒ *"'Adı geçiyor' ile 'hükme bağlanmış' AYNI ŞEY DEĞİL."* Birinci ölçüm
  doğru sayıya varıyordu ama **yanlış soruyu** soruyordu.

  🔴 **Ve ikinci alet de bir yanlış pozitif verdi:** `Manama` için
  önsözdeki *"HÜKÜM VERİLDİ — M-2115…"* satırını eşleşme saydı; o
  bölümün kendi hükmü değildi. Elle açıldı, hüküm **gerçekten vardı** —
  ama standart damgayı taşımıyordu.

  📌 **Ve asıl kayıt oturumun kendi cümlesi:**
  > *"Aletim damga DİZİSİNE bakıyor, İFADEYE değil. Bugün doğru sayıya
  > vardı ama **TESADÜFEN** — bir sonraki belgede aynı yazım farkı sessiz
  > bir yanlış negatif üretir. **Sayı doğru diye yöntem doğru sayılmaz.**"*

  ⇒ Bu sınıf ötekilerden **daha sinsi**, çünkü kendini ele vermiyor:
  yanlış sonuç bir gün fark edilir, **doğru sonuç asla sorgulanmaz.**
  Aletin kırılganlığı ancak **onu yazan** söylerse bilinir.
  ⚠️ Bir aletin çıktısını kabul ederken sorulacak soru *"sayı doğru mu"*
  değil, ***"bu sayıya nasıl vardı"***.

  🔴 **VE AYNI GÜN, AYNI OTURUMDA, BİR KADEME DERİNİ: BAŞLIK ≠ KAPSAM.**
  Aynı oturum saatler sonra hükümleri **veriye uygulamak** üzereyken
  durdu. Yeni aleti çatışmaları hükümlere **başlıkta ad arayarak**
  bağlıyordu:
  ```
  aletin bağladığı  "## ② GRUP B — KARS/Revan koridoru" → ok110.js KAZANIR
  gerçek            GRUP B'nin kapsadığı beş ad İKİNCİ SATIRDA:
                    Arpaçay · Digor · Iğdır · Eçmiyadzin · Gümrü
                    — KARS ONLARIN ARASINDA YOK
  Kars'ın hükmü     "## ⑥ Ardahan + ⑦ Kars" → BİRLEŞTİR
  Kars'ın çatışması `kafkas.js ↔ uyg1.js` — `ok110.js` TARAF BİLE DEĞİL
  ```
  ⇒ Uygulasaydı `uyg1.js`in **akademik kaynaklı** (Allen & Muratoff 1953)
  Kars fetih günü düzeltmesini **silecekti** — oysa hüküm *"ikisi de
  doğru, farklı sorunlara bakıyor, BİRLEŞTİR"* diyordu.

  📌 ***EŞLEŞME BULMAK, DOĞRU ŞEYİ BULMAK DEĞİLDİR.*** Yukarıdaki vakada
  **damga dizisi** hükmün *varlığı* sanılmıştı; burada **başlıktaki bir
  yer adı** hükmün *kapsamı* sanıldı. Aynı aile, daha derin — ve bu
  sefer bedeli veri kaybı olacaktı.

  🟢 **ÇARE BİR TUTARLILIK KONTROLÜ, ve onu aletin sahibi önerdi:**
  ```
  hükümdeki KAZANAN dosya, o çatışmanın TARAFLARINDAN BİRİ Mİ?
     değilse → UYGULAMA, DUR, BİLDİR
  ```
  Kars tam bu kontrolle yakalanır. ⇒ Bir haritalama aleti, kurduğu bağın
  **iki ucunu da** sınamalı: yalnız *"hüküm buldum"* değil, *"bulduğum
  hüküm bu çatışmadan mı bahsediyor"*.

  🟢 Ve aynı oturum aynı gün **üç kez** kendi çıktısına güvenmedi: kendi
  hipotezini ölçüp çürüttü · kendi aletinin yöntemini ihbar etti · kendi
  haritalamasını çürütüp **durdu.** Bu projede en pahalı hatalar, doğru
  çalıştığı **sanılan** aletlerden çıktı.

- 🔴 **BİR HÜKÜM, VERİYE İNMEDİKÇE HÜKÜM DEĞİL BİR METİNDİR.**
  *(aynı gün, aynı küme)*

  27 yama çatışmasının 27'si karara bağlandı ve `YAMA-CAKISMA.md`ye
  yazıldı. Sonra ölçüldü:
  ```
  py arac/_sahiplik_uygula.py
     uygulandi 83 · cakisma 27      ← 27'sinin 27'si HÂLÂ BLOKE
  ```
  Sebep basit ve kolay gözden kaçar: **uygulayıcı betik o belgeyi hiç
  açmıyor.** Hüküm *"hangi yama kazanır"* diyor, ama kazanmak
  kendiliğinden olmuyor — **kaybeden kaydın kendi dosyasından
  düşürülmesi** gerekiyor.

  📌 `§11`in *"bir ders veriye SERBEST METİN olarak inerse inmiş
  sayılmaz"* dersinin **karar** tarafı: orada bir bilgi makinenin
  göremeyeceği yere yazılmıştı, burada bir **hüküm.** İkisinde de
  `grep` *"var"* der, makine *"yok"* der.
  🟢 Sınavı aynı tek soru: ***bu hükmü bir `if` ile sorabiliyor muyum?***

- 🔴🔴 **BİR ALET, ARADIĞI ŞEYİN *NEREDE OLMAYACAĞINI* DA BİLMELİ.**
  *(2 Eylül 2026 — bir günde YEDİ kusur, hepsi tek kökten, ve yedisini de
  aletleri yazan oturum kendi üzerinde yakaladı)*

  Bu proje aletlerine hep **nerede arayacağını** öğretti. Bir gün boyunca
  yedi kusur çıktı ve yedisi de bunun tersinden geldi: alet aradığı şeyi
  **olmaması gereken yerde buldu.**

  ```
  ① damga ≠ ifade        hüküm damgası dizi olarak arandı; damgasız ama
                         GERÇEK bir hüküm (Manama) yanlış sınıflandı
  ② başlık ≠ kapsam      "GRUP B — KARS/Revan" başlığında Kars vardı,
                         bölümün KAPSAMINDA yoktu → yanlış hüküm bağlandı
  ③ eşleşme ≠ doğru şey  aynı vakanın genel hâli: eşleşme bulmak,
                         doğru şeyi bulmak değildir
  ④ bir yazım biçimi ≠ biçimin tamamı
                         regex `ad:` biliyordu, `{"ad":` bilmiyordu —
                         dört kayıt bulunamadı
  ⑤ yorumdaki süslü parantez ≠ kaydın süslü parantezi
                         `rfind("{")` kaydın ÜSTÜNDEKİ yorumdaki `{`yi
                         yakaladı → "s: BULUNAMADI"
  ⑥ yorumdaki ad ≠ kayıttaki ad
                         `ad:"Halepçe"` eşleşmesi bir YORUMUN İÇİNDE
                         bulundu — dosya kendi çakışmasını anlatıyordu
  ⑦ ASCII ≠ Türkçe       `usku` araması `Üsküp`ü bulamadı; altı mükerrer
                         nokta yazılmak üzereydi (bu koordinatörün hatası)
  ```

  🟢 **VE YEDİSİ DE YAKALANDI, çünkü aletler "BULUNAMADI" DİYE BASTI.**
  Sessizce atlasalardı:
  ```
  ④'te  dört hüküm uygulanmamış kalır, çakışma 13 çıkar, ve rapor
        "öngörü ÇÜRÜDÜ" diye YANLIŞ TEŞHİSLE yazılırdı
  ⑤⑥'da Halepçe'nin `s:`i düşmez, çakışma 6 çıkar, ve rapor
        "hüküm uygulandı" diye YANLIŞ BİR TAMAMLANMA verirdi
  ```
  ⇒ ***Sessiz atlama, yanlış sonuçtan pahalıdır.*** Yanlış sonuç bir gün
  fark edilir; sessiz atlama **hiçbir iz bırakmaz** ve üstüne
  *"tamamlandı"* raporu yazılır.

  📌 **VE BU, GÜNÜN ÖTEKİ DERSLERİNİ BİRLEŞTİRİYOR.** *"Doğru sonucu
  güvenilmez yoldan veren alet"* · *"eşleşme ≠ doğru şey"* · *"kendi
  yazdığın ayrıştırıcı her zaman kötüdür"* — üçü de bunun yüzleri.
  Aletin bilmesi gereken iki şey var ve proje yalnız birincisini
  öğretiyordu:
  ```
  ① aradığım şey NEREDE OLUR      (öğretiliyordu)
  ② aradığım şey NEREDE OLMAZ     ← eksik olan
     yorumda · başlıkta · önsözde · başka bir yazım biçiminde ·
     başka bir alfabede
  ```
  🟢 En ucuz uygulaması: **veriyi kendi dilinin yorumlayıcısına ver.**
  `node`/`import` yorumu koddan zaten ayırır; regex ayıramaz. Bu proje o
  dersi bugün **beşinci kez** öğrendi (girdi.py tek tırnak · bagla.py CRLF
  · renkler.py regex · _bk_nobetci regex · bu) — ve beşincisinde
  aletlerin sahibi kendi kendine şunu yazdı:
  > *"Bir ayrıştırıcı daha eklemek SEKİZİNCİ kusuru davet ederdi."*

- 🔴🔴 **KENDİ KURDUĞUN ÖLÇÜM PENCERESİ, GÖRMEDİĞİNİ "YOK" DİYE GÖSTERİR —
  VE O YOKLUK ÜZERİNE YAZILAN YAMA, GERÇEĞİ SİLER.**
  *(5 Eylül 2026 · `NEHİR SÜRTÜNME` · ve kusuru YAZAN taraf yakaladı)*

  Bu proje *"kendi yazdığın ayrıştırıcı her zaman kötüdür"* dersini altı
  kez öğrendi. Yedincisi **ayrı bir cins**: ayrıştırıcı doğruydu, veri
  doğruydu — **ekrana ne geleceğini seçen pencere** yanlıştı.
```
zincirleri basarken:  if t >= "1900-01-01"      ← ölçüm filtresi
ekrana gelen       :  yalnız son dönem
çıkarılan hüküm    :  "bu noktaların TEK `d:` dönemi var"
gerçek             :  Drama'nın ÜÇ, ötekilerin İKİ dönemi var
                      (1374 Sırp fethi · 1383 · 1387 · Fetret 1402-1413)
```
  Elle yazılan yama o hükme dayandı ve **dört ortaçağ kırılmasını
  siliyordu**: `1374-01-01 · 1383-09-19 · 1387-04-09 · 1402-07-28`.

  🟢 **Ve yakalayan şey sezgi değil SINAV oldu** — `KAYBOLAN kırılma`
  satırı ötüyordu. Çare de doğru cinstendi: filtreyi düzeltmek değil,
  **yamayı elden değil VERİDEN üretmek.**
  📌 Bulan oturumun cümlesi kaydın özü: ***"Filtre veriyi bozmadı, BENİ
  bozdu."***

  🔴 **VE AYNI OTURUM AYNI GÜN İKİNCİSİNİ ÜRETTİ — bir aile oldu.**
  Bir simülasyon betiğinin ekran etiketleri yanlış sıradaydı: `kos()`
  `(ihlal, künyesiz, 4c, 4d)` döndürüyordu, çıktı `hayalet/4c/4d/künyesiz`
  diye basıyordu. Değerler bilinen tabanla birebir uyuştuğu için **sonuç
  etkilenmedi** — ve oturum bunu gizlemek yerine raporun içine yazdı:
  *"etiketi düzeltmeden kimse o satıra güvenmesin."*
```
① ÖLÇÜM FİLTRESİ   gördüğünü kısıtladı   → dört dönem GÖRÜNMEDİ
② ETİKET SIRASI    gördüğünü yanlış adlandırdı → sayı DOĞRU, adı YANLIŞ
③ EŞİK 🆕          denetimin TOLERANSINI taşımadı → temiz kayıt İHLAL göründü
```
  ③'ün vakası (aynı gün, aynı oturum): `AŞIYOR` bayrağı basit `t > kt`
  karşılaştırmasıydı, oysa `denetle.py` **400 GÜNLÜK tolerans** uyguluyor.
  `Ecmir` künyeyi **22 gün** aşıyordu ve listede ihlal göründü — değildi.
  ⇒ ***Bir aleti taklit eden ölçüm, onun EŞİĞİNİ de taşımalı*** — yoksa
  aynı veriye bakıp farklı cevap verir, ve fark sessizdir.
  ⇒ ***İkisi de veriyi değil OKUMAYI bozdu*** — ve ikisi de hiçbir
  denetimin sorusu değil, çünkü denetimler **veriyi** sorar.
  ⚠️ ②'nin sinsiliği ①'den fazla: orada bir şey eksikti, burada her şey
  yerinde ve **yalnız adları karışık**; değerler tabanla uyuşursa
  hiç fark edilmez. ⇒ `§11`in *"`0`, 'yok' ile 'bakmadım' arasında ayrım
  yapmaz"* dersinin **görüntüleme** yüzü: burada `0` bile yoktu, yalnız
  **kısaltılmış bir liste** vardı ve tam olduğu sanıldı.

- 🔴 **BİR SEVK, TAŞIDIĞI ÖNCÜLÜ DE DOĞRULAMALIDIR — koordinatör tarafı
  yazılı değildi.** *(2 Eylül 2026 — bir günde ÜÇ vaka, üçü de aynı
  koordinatörün sevklerinde, üçünü de aynı işçi oturum çürüttü)*

  Proje işçilere yıllardır şunu söylüyor: *"devraldığın rakamı
  doğrulamadan aktarma."* Bugün onun **aynadaki hâli** ölçüldü ve
  eksikti: **koordinatör de bir maddenin kendi notundaki öncülü ölçmeden
  sevke yazıyor.**
  ```
  sevk yazdı                          ölçüm çıkardı
  ─────────────────────────────────────────────────────────────────
  "1335-1340 arası bir FETRET var,    fetret YOKTU — TDV `ilhanlilar`
   kovaları ayır (devletsiz ·         1256-1353 diyor ve 1335 sonrası
   veri-yok · başka devlet)"          SEKİZ ilhan sayıyor. Veri bir
                                      fetret değil YANLIŞ SINIR GÜNÜ
                                      taşıyordu. Üç kova da yanlıştı.
  "42 aday başkentin atlasta          ALTISI Türkçe adıyla VARDI
   noktası yok"                       (Buda→Budin · Skopje→Üsküp ·
                                      Iaşi→Yaş · Smederevo→Semendire ·
                                      Larende→Karaman · Haydarâbâd)
  "`zuhab-antlasmasi` CANLI,          302. Üstelik BEŞ slug ölü.
   gövdesinin tamamı okunmalı"        Okunacak gövde YOKTU.
  ```
  ⇒ Üçünde de öncül **maddenin kendi notundan** geldi ve koordinatör onu
  **ölçmeden** sevke taşıdı. Ve bir sevkte yazılı bir öncül, işçi için
  **veri gibi** okunur — çünkü koordinatörden gelmiştir.

  🔴 **VE İKİNCİSİ BİR NOKTA PARTİSİNİ DURDURDU:** kol açılsaydı `Budin`in
  yanına `Buda`, `Üsküp`ün yanına `Skopje` yazılacaktı — altı mükerrer,
  ve hepsi *"eksik veriyi tamamlıyoruz"* diye.

  🟢 **Üçünü de aynı şey kurtardı: KAPSAYICI MADDEYE ÇIKMAK.**
  `ilhanlilar` · `Üsküp` (normalleştiriciyle) · `murad-iv` — `§4`ün *"dar
  slug tutmazsa kapsayıcıyı dene"* kuralı bir günde **sekiz kez** işledi.

  🟢 **KURAL:** bir sevk yazarken, taşınan her öncülün yanına **onu kimin
  ölçtüğü** yazılır:
  ```
  ÖLÇTÜM        → sayı ve yöntem
  DEVRALDIM     → nereden, ve DOĞRULANMADI diye AÇIKÇA
  ```
  ⚠️ İkincisi yazılmazsa işçi onu ölçülmüş sanır ve **üstüne inşa eder** —
  bugün üç kez öyle oldu, ve üçünde de kurtaran şey işçinin
  *"devraldığım öncülü önce ölçtüm"* refleksiydi. **Refleks olmasaydı üç
  yanlış iş yapılmış olacaktı.**

- 🔴 **DOĞRU BİLGİ, ÖLÜ ADRES — `kaynak:` alanının yarım çalışan hâli.**
  *(2 Eylül 2026)*

  `§4`ün kırmızı çizgisi şudur: *"Kaynağı yazılmayan bilgi, kaynağı
  olmayan bilgiden ayırt edilemez."* Bugün onun **yarım** hâli ölçüldü:
  ```
  Kasr-ı Şirin Antlaşması maddesi
     gün      1639-05-17   ✓ TDV `murad-iv` gövdesiyle BİREBİR
     veri     9 kırılma ucu, Değişmez 2 sıfır gün uzaklıkta ve İLGİLİ
     kaynak:  `kasr-i-sirin-antlasmasi`  🔴 302 — ÖLÜ ADRES
  ```
  ⇒ Kaynak **yazılmış** ama **izlenemez.** Bilgi doğru, adres ölü. Bu,
  *"kaynağı yazılmayan"*dan farklı ve daha sinsi bir sınıf: alan DOLU
  olduğu için hiçbir denetim ötmüyor, ve okuyan *"kaynaklı"* sanıyor.

  🔜 **Ölçüm başlatıldı:** külliyattaki **553 benzersiz `kaynak:` slugu**
  HTTP ile taranıyor. ⚠️ Ve sınırı **taramadan önce** yazıldı:
  > *"Tarama yalnız ÖLÜ olanı bulur; 200 dönen bir slug 'doğru madde'
  > demek DEĞİLDİR (`ordu` askerî ordudur) — bu tarama onu ÖLÇMEZ."*
  ⇒ Rapor **iki kovalı** olacak: `🔴 ÖLÜ (302)` ve `⚪ CANLI ama
  DOĞRULANMADI`. İkincisi **asla "temiz" diye raporlanmayacak.**

- 🔴🔴 **BİR ARAMA, ARADIĞI ŞEYİN KAÇ AYRI BİÇİMDE YAZILABİLECEĞİNİ
  BİLMELİ — BEŞ EKSEN ÖLÇÜLDÜ, BEŞİ DE GERÇEK KAYIP ÜRETTİ.**
  *(2 Eylül 2026 akşamı — 553 slug taramasının damga turunda)*

  Altı kayıt *"bulunamadı — arandı, TDV'de o yıl için gövde yok"* diye
  damgalandı. Yeniden ölçüldü: **yalnız BİRİ ayaktaydı.**
  ```
  ÇÜRÜYEN 3    AYAKTA 1    🔴 ÖLÇÜLEMEDİ 2
  ```
  Ve çürüyen üçünün üçü de **ayrı bir eksende** kaçmıştı:
  ```
  ① YIL BİÇİMİ    düz `1395` araması, kaynağın yazdığı "1394-95"
                  dizgisinde EŞLEŞMEZ — orada `1395` alt-dizgisi YOKTUR
                  (anadoluhisari: "797'de (1394-95) yapılmıştır")
  ② TAKVİM        kaynak çoğu zaman HİCRÎ verir ve mîlâdîyi hiç yazmaz
                  (selimiye → edirne: "976-982 (1568-1574)")
  ③ SLUG YAZIMI   `anadolu-hisari` 3.556 kar. BOILERPLATE (§4④);
                  canlı madde TİRESİZ: `anadoluhisari` 12.502 kar.
                  ⚠️ ve boilerplate eşiği 2000'di — 3.556 GEÇTİ
  ④ CÜMLE KALIBI  "İstanbul antlaşması" ≠ "İstanbul'DA YAPILAN antlaşma"
                  (ferhad-pasa 1590 → luristan)
  ⑤ NOKTALAMA     TDV TİPOGRAFİK kesme kullanır (U+2019 `’`); düz kesme
                  (U+0027 `'`) ile arama BULMAZ — aynı cümle, aynı gövde,
                  farklı KOD NOKTASI
  ```
  🔴 **Beşincisine, ilk dördünü YAZAN koordinatör düştü** — doğrulama
  araması sırasında, ve aynı saatte. ⇒ Bu ailenin altıncısı zaten
  yazılıydı: **Türkçe yazım ekseni** (`usku` ≠ `Üsküp`, `İ`/`I`).

  ⇒ ***Ortak kök tek: alet, aradığı şeyin NEREDE OLMAYACAĞINI bilmiyor.***

  🔴 **VE EN SİNSİ ALTINCI EKSEN: OLMAYAN BİR ALANI ARAMAK.**
  Aynı gün, aynı aile, ama ötekilerden farklı: burada alet **yanlış yerde**
  aramadı — **var olmayan bir yerde** aradı.
  ```
  aranan alan  o.b  ·  o.a
  gerçek       açıklama alanının adı `d` — `a` DİYE BİR ALAN YOK
  sonuç        1303 maddenin AÇIKLAMA METİNLERİ hiç taranmadı
               eşleşme 9 sanıldı · gerçek 30
  ```
  ⚠️ **`0`, "yok" ile "bakmadım" arasında ayrım yapmaz** — ve alet hiç
  ötmedi. Öteki eksenlerde yanlış bir sonuç çıkıyordu; burada **hiçbir
  sonuç çıkmadı ve o boşluk «temiz» diye okundu.**
  🟢 Bulunan cümle tam orada duruyormuş, üstelik künyenin `f:` gününde:
  *"Varşova Dukalığı'nın büyük kısmı «Kongre Polonyası» adıyla Rusya'ya
  bağlandı"* — üç kimlik tek cümlede, ve renk sıkılaştırmasını hak eden
  bir anlatı. Yanlış ölçüm *"sıkılaştırma hak edilmiyor"* diye hüküm
  vermişti.
  ⇒ **Çare: gerçek alan kümesini ÖLÇ, varsayma.** (Bulan oturum 23 alan
  adını tek tek çıkardı: `t · b · d · etiket · kaynak · yer · kisiler ·
  k · gun · duygu · yer_id · yer_kon · tur · onem · dunya · kapsam ·
  vefat_id · fethedilen · statu_dogrudan · statu_vasal · kaybedilen ·
  boyut · kesinlik`.)
  📌 Ve bu, `§11`in *"kendi yazdığın ayrıştırıcı her zaman kötüdür"*
  dersinin **alan adı** yüzü: veriyi kendi dilinin yorumlayıcısına verip
  `Object.keys()` sormak, alan adını hatırlamaya çalışmaktan güvenlidir.
  📌 Ve `§4`ün *"kaynağın kendi uyarısını da oku"* kuralının bir kademe
  ötesi çıktı: **`ferhad-pasa`nın cevabı `CLAUDE.md §4`te ZATEN ALINTILIYDI**
  (`luristan` maddesi: *"998'de (1590) İstanbul'da yapılan antlaşma"*), ve
  damgayı vuran oturum o paragrafı aynı turda **alıntılamıştı bile** —
  yalnız yanındaki cümleyi kullanmamıştı.
  ⇒ ***Belgeyi okumak, belgenin KENDİ ALINTISINI da okumaktır.***

  🟢 **VE ÜÇÜNCÜ DAMGA BURADA KAZANILDI:** iki kayıt *"arandı, yok"* diye
  kapatılmıştı, oysa TDV gövdesi hiç **alınamamıştı** (`fazil-mustafa-pasa`
  üç denemede de 2.369 kar. boilerplate — ve adam **Salankamen'de şehit
  düşmüştü**, yani damganın en ilgili maddesi).
  ```
  "arandı, yok"   bir TEMİZLİK biçimidir — gövde ALINAMADIYSA verilemez
  "ölçülemedi"    kalemi AÇIK tutar
  ```
  ⚠️ Yanlış damga en pahalısıdır: **bir sonraki oturumu ARAMAKTAN alıkoyar**,
  yani hata KALICILAŞIR.

- 🔴 **BİR DÜZELTME SLUGA DEĞİL KAYDA BAKAR — aynı slug iki kayıtta
  farklı yere gidebilir.** *(2 Eylül 2026)*
  ```
  ferhad-pasa-antlasmasi  1588 · olaylar_ek5.js "Karabağ ve Gence'nin
                                 ilhakı"          → `gence`   ADRES
                          1590 · olaylar_ek2.js "Ferhad Paşa Antlaşması"
                                                  → DAMGA (adres YOK)
  derbend                 İKİ kaydı da `dagistan`a → slug bazlı GÜVENLİ
  ```
  Global `sed s/ferhad-pasa-antlasmasi/gence/` 1590 **antlaşmasını** `gence`
  maddesine dayandırırdı ve o gövde 1590'ı vermiyor.
  ⇒ **Uygulayıcı `t:` + eski değer çiftiyle eşler, ve eşleşme 1 değilse
  DURUR — hiçbir dosya yazılmaz.** Aynı gün ikinci vaka: `lehistan` veride
  **50 dönemde** geçiyor, yalnız **4'ü** hayaletti; kör bir değiştirme
  **46 meşru dönemi** bozardı.
  📌 Ve eşleştirmenin kendisi de dar kurulabilir: ilk uygulayıcı `ad:` ile
  dönemi **aynı satırda** aradı, oysa kayıt çok satırlıydı ⇒ 0 eşleşme.
  Nöbetçi durdurdu. ⇒ *Dosya bazlı ve **beklenen sayı önceden yazılı**
  bir eşleştirme, satır bazlıdan güvenlidir.*

- 🔴 **3 KM BİR YASAK DEĞİL, BİR ŞÜPHE EŞİĞİDİR — ve şartı ZAMAN
  ÇİZGİLERİNİN FARKLI OLMASIDIR.** *(2 Eylül 2026)*

  Kuralın doğduğu vakalara bak: **Varat/Varad** (aynı yer iki kayıt) ve
  **Afyon/Karahisâr-ı Sâhib** (100 m, **çelişen** zaman çizgileri). Kusur
  *yakınlık* değil, **aynı yerin iki kez ve tutarsız yazılmasıydı.**
  ```
  3 km altı + zaman çizgileri FARKLI   → mükerrer DEĞİL, ikisi de yazılır
  3 km altı + zaman çizgileri AYNI     → mükerrer şüphesi HAKLI
  ```
  🟢 `denetle.py` bunun kapısını zaten taşıyordu ve **katı**: karşılıklı
  `ikiz:` **ve iki tarafta da `kaynak:`** — *"beyan kaynaksız geçmez"*,
  böylece takma-ad çiftleri beyan **edilemez** ve mükerrer tespiti
  zayıflamaz. İki emsal beyansız duruyordu, ölçülüp beyan edildi:
  ```
  1,54 km  Anadolu Hisarı ↔ Rumeli Hisarı   Boğaz'ın iki yakası
  1,57 km  Budin ↔ Peşte                    Tuna'nın iki yakası
  ```
  (`Peşte`nin kendi maddesi yok; kapsayıcı `budin` gövdesi onu **19 kez**
  anıyor ve ayrımı kendisi kuruyor: *"Nehrin sol kıyısındaki Peşte…"*)

  🔴 **VE KURALIN DEĞERİ REDDETTİĞİNDE ÖLÇÜLDÜ — Karaağaç.** Edirne'ye
  **2,40 km**, ve *"iki proje kuralı kesişiyor"* diye rapor edilmişti.
  Ölçüm şartı çürüttü: dört TDV maddesi Karaağaç'ın sahibinin **her
  dönemde Edirne ile aynı** olduğunu gösterdi (`mudanya-mutarekesi`:
  *"Karaağaç **dâhil** Meriç'in sağ kıyısı"*).
  ```
  Karaağaç'ın SAHİBİ      hiçbir gün Edirne'den farklı DEĞİL
  Lozan'ın değiştirdiği   sınır ÇİZGİSİNİN nereden geçtiği
  ```
  ⇒ Atlas **sahiplik** boyuyor, **sınır geometrisi** boyamıyor. Voronoi
  noktası bu farkı ifade edemez, **çünkü ifade edilecek fark yok.**
  ⇒ Kalem nokta işi değil **geometri** işi.
  📌 Ve bir ayrım kalemi doğru kapattı: ***"Yunanistan bıraktı" demek
  "Yunanistan'ın elindeydi" demek DEĞİLDİR.*** Tazminat hukukî
  **gerekçe**, tasarruf başka şey — ve atlas tasarrufu boyar.

- 🔴 **BİR BEYAN, ARACIN ALAN KÜMESİNDE YOKSA SESSİZCE DÜŞER — VE
  YAMANIN YARISI İNER, YARISI DÜŞER.** *(2 Eylül 2026)*

  `Değişmez 1b`nin tek beyansız boşluğu **Timbuktu 1430-1468** (13.879 gün,
  Tevârik dönemi) çıktı. Boşluk **kaza değildi**: ölçülmüş, kaynaklanmış
  (TDV `tinbuktu`), bilerek bırakılmıştı. Düşüren şey kayıt değil **araç**:
  ```
  _sahiplik_uygula.py:318  ALAN_RX        = d · s · v · isg
  _sahiplik_uygula.py:342  SKALER_ALANLAR = m · kaynak
  ⇒ `bos:` ve `neden:` HİÇBİR KÜMEDE YOK
  yamada:  s: ✓ İNDİ · kaynak: ✓ İNDİ · bos: ✗ DÜŞTÜ · neden: ✗ DÜŞTÜ
  ```
  🟢 **Ve yamayı yazan oturum bunu ÖNCEDEN yazmıştı:** *"bu alanlar İNMEZ;
  dosya sahibinin elle koyması gerekiyor — yoksa Timbuktu yine 'beyansız
  delik' sayılır."* **Uyarı yazıldı, okunmadı, öngördüğü kusur gerçekleşti.**

  📌 `§11`in *"bir ders veriye SERBEST METİN olarak inerse inmiş sayılmaz"*
  dersinin **bir kademe ötesi**: burada ders serbest metin **değildi**,
  doğru biçimde **yapılandırılmış bir alana** yazılmıştı — ve onu düşüren
  şey kaydın kendisi değil **aracın alan kümesi** oldu. `grep` beyanı
  bulur (yamada duruyor), `denetle.py` bulamaz (veride yok).
  ⇒ Sınav yine tek soru: ***bu bilgiyi bir `if` ile sorabiliyor muyum?***
  Ve yeni bir soru daha: ***onu yazan araç, o alanı yazabiliyor mu?***

  > 🟢🟢 **BU VAKANIN DURUMU DEĞİŞTİ — BORÇ ÖDENDİ (2 Eylül 2026), ve bu
  > satır 5 Eylül'de damgalandı çünkü BAYATLIĞI İKİ OTURUMA İŞ ÇIKARDI.**
  > ```
  > _sahiplik_uygula.py:389  SKALER_ALANLAR = ("m","kaynak","bos","neden","not")
  > _sahiplik_uygula.py:392  SKALER_KORUNAN = ("kaynak","bos","neden","not")
  > :254 CATISABILIR de üçünü taşıyor · :397 `assert` ikisini birbirine bağlıyor
  > ```
  > Araç artık `bos:`/`neden:`/`not:` **indiriyor** — ve `kaynak`la aynı
  > sözleşmeyle: **üzerine YAZMIYOR**, yalnız boşsa dolduruyor. Bir
  > araştırmacı beyanını sessizce ezmek, *"kimse burayı araştırmadı"* ile
  > *"biri araştırdı ve şu sonuca vardı"* arasındaki farkı siler.
  >
  > 🔴 **VE BAYATLIĞIN BEDELİ ÖLÇÜLDÜ — koordinatörün kendi hatası:**
  > 5 Eylül gecesi bu paragraf okundu ve **iki ayrı sevke** *"bu alanlar
  > İNMEZ, `elle_konacak` listesi tut"* diye yazıldı. İki oturum da o
  > listeyi tuttu; **gereksizdi.** Borcu ödeyen sevk de aynı koordinatörden
  > çıkmıştı (`arac/_sahiplik_uygula.py:245` — *"1.MURAT sevki"*).
  > 📌 `§11`in *"kendi ödediğin borcu, kaydını okumadan yeniden iş
  > sanabilirsin"* dersinin **dördüncü** vakası — ve bu sefer bayatlayan
  > şey bir tablo ya da bir log değil, **dersin kendi metni.**
  >
  > ⚠️ **DERS SİLİNMEDİ, VAKA DAMGALANDI** (`§3.5.1`in Yukarı Macaristan
  > emsali): *"bir vakayı silmek dersi de siler; damgalamak dersi korur."*
  > Yukarıdaki iki soru — *bir `if` ile sorabiliyor muyum* ve *onu yazan
  > araç o alanı yazabiliyor mu* — **hâlâ doğru ve hâlâ sorulmalı.**

- 🔴 **BİR DÖNGÜDE BAŞARI VARLIKLA, HATA YOKLUKLA BİLDİRİLİRSE HATA
  GÖRÜNMEZ — VE ÇIKIŞ KODU SON YİNELEMENİNKİDİR.** *(2 Eylül 2026)*

  Dört oturuma toplu sevk yollandı:
  ```bash
  for … ; do py arac/tahta.py yaz … >/dev/null 2>&1 && echo "-> $k"; done
  ```
  Çıktı **üç ad** bastı, dördüncüsü yoktu, ve komut **exit 0** verdi.
  Sonuç: bir oturum **üç buçuk saat** iş beklemeden bekledi ve
  **beklediğini bilmiyordu** (tahtada ona giden mesaj: 0/2254).
  ```
  🔴 hata /dev/null'a gitti      → NİÇİN düştüğü kayboldu
  🔴 başarı VARLIK, hata YOKLUK  → yokluk SAYILMADAN görünmez
  🔴 exit 0 = SON yineleme       → "hepsi başardı" DEMEK DEĞİL
  ```
  🟢 Yakalayan bir denetim değil, **başka bir işçi oturum** oldu:
  *"bölüm ⑩'un adresine giden mesaj: HÂLÂ 0"* diye **saydı**.
  ⇒ Toplu bir işlemde **beklenen sayı önceden yazılır ve sonunda
  DOĞRULANIR**; `&&`li bir echo teslim kanıtı değildir.

- 🔴 **BİR HÜKÜM DOSYASI BİR ÖLÇÜM DEĞİL, ÖLÇÜMÜN FOTOĞRAFIDIR — ve
  fotoğraf eskir.** *(2 Eylül 2026 — bir günde ÜÇ kalem)*

  Koordinatör `denetim/HUKUM-OK110.json`dan üç iş türetti; **üçü de bayat
  çıktı ve üçünü de işçi oturumlar ölçerek çürüttü:**
  ```
  Trakya      "Kofçaz ↔ Malko Tırnova 51 km boşluk"
              → şerit 11 Ağustos'ta `d333096` ile KURULMUŞ (16 nokta),
                ve o commit'i yazan KOORDİNATÖRÜN KENDİSİYDİ
  Uzunyayla   "çare belli, dört nokta yaz"
              → `Darende` yazılmış (başka oturumun dosyasında), ve
                "çare" sanılan şey bana sorulmuş CEVAPSIZ BİR SORUYDU
  Polesya     "262 km boşluk · Brest 183 · Pinsk 221"
              → 81,3 km · Brest VAR · Pinsk VAR
  ```
  ⇒ Üçünde de kusur ölçümde değil **yaşta**. Ve `§11`in *"işe dönüştürmeden
  önce `git log`"* kuralı üç kez birden ihlal edildi — **on saniyelik iş.**
  📌 En keskin ders: ***kendi ödediğin borcu, kaydını okumadan yeniden iş
  sanabilirsin.*** Kayıt iki yöne de gerekiyor — açık borç için de,
  **ödenmiş** borç için de.

- 🔴🔴 **DOĞRU KAPIYA GİDİP YANLIŞ YERDEN DİNLEMEK — yokluğu TEMİZLİK
  sanmak.** *(3 Eylül 2026 · bir saat içinde ÜÇ ALETTE, üçü de aynı
  koordinatörün, ve üçüncüsü DERSİN KENDİSİ YAZILIRKEN)*

  `denetle.py` iki noktaya *"⚠️ bu öneri sınandı ve GEÇMEDİ"* damgası
  bastı. Koordinatör `§11`in *"bir denetçiyi taklit etme, ONU KOŞTUR"*
  kuralını **uyguladı** — `konum_denetimi`yi doğrudan çağırdı. Yine de
  iki yanlış koordinat üretti, sonra bir doğrulayıcı yazdı ve o da
  yanıldı, sonra bir ölçüm yaptı ve o da:
  ```
  ① çözücü        fonksiyonun BASILAN çıktısını okudu
                  → o fonksiyon HİÇBİR ŞEY BASMIYOR, DÖNDÜRÜYOR
                  → boş metin "1900 adayın hepsi temiz" diye okundu
                  → gerçek: 1,227 km ve 0,062 km DIŞARIDA
  ② doğrulayıcı   dönüşü okudu ama oge[0]'ı AD sandı — o MESAFE,
                  ad oge[1]. Ad eşleşmeyince yine "dördü de geçti"
  ③ tahta ölçümü  `kim` alanını sordu — o alan YOK, adı `kimden`
                  → "2626 mesajın 0'ı AFRIKA adına" dedi
                  → gerçek 37. Ve bir işçi oturum, hiç yapmadığı bir
                    kusurla suçlanmak üzereydi.
  ```
  ⇒ Üçü de tek cümle: ***bir şey bulamadım ⇒ sorun yok.*** Ve hiçbiri
  hata vermedi; üçü de **temiz bir sayı** üretti.

  🟢 **Ve üçünü de İŞÇİ OTURUMLAR çürüttü, hiçbirini denetim betiği.**
  `DUNYA-KAMERIKA-0903` aynı ızgarayı aynı denetçiye sordu ama
  **dönüşü doğru okudu**: docstring 6 alan diyordu, gerçek 7'ydi,
  `IndexError` aldı ve **ölçtü.** `DUNYA-AFRIKA-0903` kayıt alanlarını
  **döktü.** Koordinatör iki durumda da hata almadı ve yanıldı.
  📌 ***Hata vermeyen bir yanlış okuma, hata verenden pahalıdır.***

  🔴 Ve zarar tek yönlü değil: koordinatörden gelen bir sayı sorgusuz
  uygulanır. ①'de `konum` 0'dan 2'ye **geri dönerdi**; ③'te bir oturum
  **çalıştığı hâlde** protokol ihlaliyle damgalanıyordu.

  ⇒ **KURAL:** bir aletin **dönüş yapısı ve bir kaydın ALAN KÜMESİ
  varsayılmaz, DÖKÜLÜR** (`repr` · `len` · `sorted(d.keys())`). Ve
  `C13`ün üç ayağına dördüncüsü:
  ```
  ① GEÇME  ② ATEŞLEME  ③ GİRDİ (gerçek kaynaktan)
  ④ 🆕 ÇIKTI — aletin cevabını DOĞRU YERDEN okuduğunu göster:
       bilerek kusurlu bir girdi ver, alet onu BİLDİRSİN.
       Bildirmiyorsa bozuk olan senin OKUMAN, aletin değil.
  ```
  📌 `§11`in *"`0`, 'yok' ile 'bakmadım' arasında ayrım yapmaz"*
  dersinin **dönüş değeri** ve **alan adı** yüzleri — ve `§4`ün
  *"bir alan adı, kullanıldığı yerden değil TANIMLANDIĞI yerden
  okunur"* kuralının dördüncü vakası. Kural yazılıydı; yazan çiğnedi.

  🔴 **VE AYNI GÜN ÜÇÜNCÜ EKSEN: SAYIYI BİLMEK, SAYININ NEYE GÖRE
  OLDUĞUNU BİLMEK DEĞİLDİR.** `DUNYA-AFRIKA-0903` `2s`nin kapsam
  eşiğini (2014 km) **biliyordu** ama **neye 2014 km** olduğunu
  varsaydı — Osmanlı **başkentlerine** ölçtü ve 401 noktasının 15'ini
  kapsam içi buldu. Sonra gerçek küreyi ölçtü (`d:` ya da `v:` taşıyan
  **bütün** noktalar, 929 nokta):
  ```
  küre Fizan'a (Gât · Murzuk) ve Dârfûr'a (Cenîne · Tîne) UZANIYOR
  en güney ucu Radom, 9,95°K — Bahrülgazâl
  kapsam içi nokta:  15 sanıldı  →  gerçek 165   (ON KAT)
  ```
  ⇒ Öngörüsü (`2s` 83) çürüdü ve **niçin** çürüdüğü ancak referans
  ölçülünce anlaşıldı: kapsam Kuzey Afrika'da bitmiyor, **Sahel ve
  Çad havzasını da içine alıyor.** *"Sahra altı kapsam dışıdır"*
  akıl yürütmesi doğru bir sayıya yanlış bir çerçeveden bakıyordu.

  📌 **Üç eksen, tek aile — ve üçü de aynı gün:**
  ```
  BİRİM      "743.793.802 km²"  →  aslında km²·DÖNEM   (puanlama kapısı)
  ALAN ADI   `kim` sorgusu 0    →  alanın adı `kimden` (tahta ölçümü)
  REFERANS   "2014 km"          →  neye? başkente DEĞİL, GÖVDEYE
  ```
  Üçü de *"sayıyı biliyorum"* der; üçü de ***"sayının neye göre
  olduğunu bilmiyorum"*** durumudur. Ve üçü de **hata vermez.**

- 🔴🔴 **BİR REFERANS, ÖLÇTÜĞÜ ŞEYİN YANINDA DURMALI — BEYANIN YANINDA
  DEĞİL.** *(4 Eylül 2026 · `PAKET RENK 0904` ölçtü, koordinatörü çürüttü)*

  Emre *"renkler denizle benzer, ayırt etmek zorlaşıyor"* dedi. Koordinatör
  `renk_olc.py`nin deniz denetimini koşturdu ve *"eşiğin altında **0**,
  denetim TEMİZ diyor ⇒ metrik doğru, EŞİK gevşek"* diye teşhis koydu.
  **İki yarısı da yanlıştı, ve bir işçi oturum ikisini de çürüttü.**

  **① KOORDİNATÖR ALETİN YARDIMCISINI ÇAĞIRDI, ALETİN KENDİ SORUSUNU DEĞİL:**
```
                lab(hex)  ← koordinatör   gorunen()  ← ALETİN kullandığı
novgorod          17.87                     13.25    ← eşiğin ALTINDA
le-hanedani       19.66                     14.61    ← eşiğin ALTINDA
norvec-kralligi   43.89                     13.95    ← 30 ΔE fark, HİÇ görülmedi
R.deniz_ihlal() → DAL1 12 · DAL2 ek 9 · BİRLEŞİM 21      ("0" DEĞİL)
```
  `gorunen(k) = lab(bind(hex))` — gövde **altlıkla harmanlanmış** hâliyle
  ölçülüyor; ham hex hiçbir yerde ekranda yok.
  📌 Aynı koordinatörün aynı gün **üçüncü** *"aletin cevabını yanlış yerden
  okuma"* vakası (`konum_denetimi`in dönüşü · tahtanın `kim` alanı · bu).
  Üçü de **hata vermedi**, üçü de **temiz bir sayı** üretti.

  **② VE ASIL KUSUR BİR KADEME DERİNDE — REFERANSIN KENDİSİ EKRANDA YOK:**
```
js/app.js:673   { id:"zemin",  background-color: SU_RENGI }  #c4dcea
js/app.js:674   { id:"altlik", type:"raster" }  ← ÜSTÜNDE, Esri World Physical
```
  `SU_RENGI` bir **arka plan**; üstüne dünya çapında bir raster biniyor ve
  kullanıcının deniz diye gördüğü şey **Esri'nin okyanusu**. `g-gol` de
  kurtarmıyor — o da rasterin ALTINDA (`app.js:705`, *"Grup A — rasterin
  ALTINDA"*).
```
beyan (SU_RENGI)   #c4dcea             L* 86.4
EKRANDA çizilen    #78b0d0 · #80b8d8   L* 69-72
                   ΔE00 19.5-21.8   ·   |ΔL*| 14.3-17.3
```
  ⇒ **Aletin referansı, ölçtüğü şeyden ΔE ~20 uzakta** — kendi eşiğinden
  (15) büyük.

  🔴 **Ve `_deniz_oku()` bunu göremiyor çünkü YANLIŞ SORUYU SORUYOR:**
  *"beyan iki yerde tutarlı mı"* diye soruyor (zemin ↔ `g-gol`, ayrışırsa
  `SystemExit`), ***"beyan EKRANDA GÖRÜNÜYOR MU"*** diye sormuyor.
  📌 Alet 12 Ağustos'ta tam *"denetim var ≠ o soruyu soruyor"* dersi için
  yazılmış ve **aynı sınıfa kendisi düşmüş.** Dersin bir kademe ötesi:
  ***bir ÇAPRAZ denetim iki BEYANI karşılaştırabilir ve ikisi de ekranda
  olmayabilir.***

  🟢 **Ve Emre haklı çıktı, alet kör:** `ilhanli` ekranda L* 67.8, ekrandaki
  Hazar L* 70.7 ⇒ **|ΔL*| 2.9** — neredeyse aynı açıklık. Emre *"deniz
  TONUNA yakın"* derken ton = açıklık, ve birebir haklı. `renk_olc`in
  `DAL 2`si (|ΔL*| < 4) tam bunu yakalamak için yazılmış ve **yanlış
  referans yüzünden ateşlemiyor.**

  ⚠️ Ve bir tasarım sonucu: Emre'nin *"deniz daha AÇIK renk olmalı"*
  isteği bugün **uygulanamaz** — `SU_RENGI`yi değiştirmek ekranda hiçbir
  şeyi değiştirmez. Referansı düzeltmek, o isteğin ÖN KOŞULU.

- 🔴 **DAMGA BİR İDDİAYI NE MEŞRULAŞTIRIR NE DÜZELTİR — YALNIZ GÖRÜNÜR
  KILAR.** *(4 Eylül 2026 — iki işçi oturum aynı kuralın iki yüzünü buldu)*
```
KRONOLOJİ ORTA AMERİKA  "yıl uydurmak tarih uydurmaktır ve «temsilî»
                         damgası onu MEŞRULAŞTIRMAZ, yalnız görünmez kılar"
                         ⇒ yazdığı maddeyi SİLDİ
KRONOLOJİ GÜNEY AMERİKA "damgalamıştım — ama damga tarihi DÜZELTMİYORDU,
                         tarihin kendisi hâlâ gün iddia ediyordu"
                         ⇒ on maddeyi kaynağın hassasiyetine İNDİRDİ
```
  ⇒ Damgalamak bir **ilk adım**; düzeltmek **ayrı bir iştir** ve damga onu
  yapmış saydırmaz.
  🟢 Ve üçüncü bir yüzü: **türetilen sayı ALINTIYA YAZILMAZ.** Bir yılı iki
  cümleden türetmek meşrudur (*"Mart 1886 … bir yıl sonra"* → 1887), ama o
  sayıyı alıntı metnine eklemek *"kaynağın söylemediği bir sayıya SAHTE BİR
  DAYANAK üretir"* (`KRONOLOJİ AFRİKA GÖVDE`).

- 🔴 **"BULUNAMADI" · "ÖLÇÜLEMEDİ" · "OKUMADIM" — ÜÇ AYRI DAMGA.**
  *(4 Eylül 2026 · `KRONOLOJİ GÜNEY AMERİKA`)*
  Proje ilk ikisini biliyordu. Üçüncüsü şu cümleyle doğdu:
  > *"«Bulunamadı» aradım-ama-yok demektir; ben **aramadım bile**."*
```
BULUNAMADI   aradım, yok                 → bir SONUÇ, uydurmaktan değerli
ÖLÇÜLEMEDİ   aradım, alet cevap veremedi → kalem AÇIK kalır
OKUMADIM     aramadım bile               → kalem HİÇ AÇILMADI
```
  🔴 Üçüncüsü en kolay kaybolanı: `bulunamadı` yazılsaydı bir sonraki oturum
  o kaydı **bir daha aramazdı**. ***Yanlış damga, hatayı KALICILAŞTIRIR.***

- 🔴 **VE BİR DÜZELTME, YANLIŞ UYGULANIRSA DOĞRU VERİYİ BOZAR — "ÇEK"
  KOVASI ŞART TAŞIR.** *(4 Eylül · `KRONOLOJİ ORTA AMERİKA` uyardı)*
  *"Yanlış hassasiyet"* bulgusunun onarım kovası *"gün hizalama ürünü →
  `YYYY-01-01`e ÇEK"* diye yazılmıştı. İşçi oturum durdurdu:
  > *"«Doğrulayamadım» «yanlış» demek değildir, ve `YYYY-01-01`e çekmek
  > DOĞRU BİR GÜNÜ KAYBETTİREBİLİR."*
  ⇒ **ŞART:** bir gün ancak kaydın **KENDİ beyanı** onu çürütüyorsa
  (`"hizalandı"` · `"bağlı verinin aralığına"`) çekilir. Purépecha'da o
  beyan **vardı**; Novgorod'da **yok** — ikisi aynı kovaya girmez.
  📌 `denetle.py`nin altı noktaya aynı koordinatı önerdiği vakanın aynısı:
  ihlali kapatan bir reçete, **gerçeği silebilir.**

- 🔴 **TDV TUZAK LİSTESİNE ALTINCI: CANLI YÖNLENDİRME KÜTÜĞÜ.**
  *(4 Eylül · `KRONOLOJİ AFRİKA GÖVDE`)*
  `dahomey` slug'ı **200** döner ve gövdenin tamamı tek satırdır:
  > *«bk. BENİN — Batı Afrika'da İslâm Konferansı Teşkilâtı üyesi olan bir
  > ülke.»*

  Bir **adres**, bir madde değil. Dört tuzağın hiçbiri bunu yakalamaz —
  slug canlı, gövde geliyor, boş değil, yanlış konu da değil.
  🔴 **Ve en tehlikeli yanı:** o oturumun kendi 38 sluglık taraması onu
  *"CANLI"* saymıştı. Bir HTTP taraması bundan *"TDV Dahomey'i kapsıyor"*
  hükmü çıkarır.
  📌 `000` ekseninin **aynası**: orada **ölçülemedi ≠ ölü**, burada
  **200 ≠ madde**. İkisi de bir HTTP kodunun taşıyamayacağı bir bilgiyi
  taşıdığını sanmaktan doğuyor.
  🟢 Çare yönlendirmeyi **izlemek**: `benin` gövdesi altı maddenin altısını
  verdi. Ama dikkat — TDV `benin` **modern Benin**'dir, Nijerya'daki
  **Benin Krallığı** değil (`§4②` tuzağının altıncı vakası).

- 🔴🔴 **TDV TUZAK LİSTESİNE YEDİNCİ: TAKVİM — VE TDV KENDİ İÇİNDE
  KARIŞIK KULLANIYOR.** *(5 Eylül 2026 · `NEHİR SÜRTÜNME`, ve bir
  "çelişki" yine çelişki çıkmadı)*

  Selanik'in teslimi için iki tarih göründü ve 13 gün ayrışıyordu:
```
TDV `selanik`   "26 Ekim 1912'de Yunanlılar'a bıraktı"
atlas verisi    1912-11-08
fark            13 GÜN  → çelişki GİBİ
```
  🟢 **ÇELİŞKİ DEĞİL, AYNI GÜN.** Jülyen/Rumî takvim 20. yüzyılda
  Milâdî'nin tam **13 gün** gerisindedir: 26 Ekim + 13 = **8 Kasım 1912.**
  Veri doğruydu ve **değiştirilmemeliydi.**

  🔴 **VE ASIL TUZAK BU DEĞİL — TDV AYNI SAVAŞ İÇİN İKİ TAKVİM
  KULLANIYOR, ve hangisi olduğunu SÖYLEMİYOR:**
```
`selanik`        "26 Ekim 1912"    → RUMÎ   (Milâdî karşılığı 8 Kasım)
`balkan-savasi`  "6 Mart'ta Yanya" → MİLÂDÎ (veri de 1913-03-06)
```
  ⇒ ***Bir TDV gününü veriye yazmadan önce HANGİ TAKVİM olduğu
  sorulur.*** Ve soru ucuz: aynı olayın başka bir maddedeki tarihiyle
  ya da bilinen bir Milâdî çapayla karşılaştır; 13 günlük (19. yy'da 12)
  bir sapma takvim farkının imzasıdır.

  🟢 **VE SINAV KOŞULDU — bu satırın yazılmasından on beş dakika sonra.**
  `balkan-savasi` gövdesinden çıkarılan **altı çapanın altısı da Milâdî
  ve hiçbiri kaymamış** (Londra 30 Mayıs 1913 · Bükreş 10 Ağustos 1913 ·
  İstanbul 29 Eylül 1913 · Atina 14 Kasım 1913 · Karadağ 8 Ekim 1912 ·
  Edirne 21 Temmuz) ⇒ aynı gövdedeki *"6 Mart"* da **Milâdî**, ve
  atlasın `1913-03-06`sı **DOĞRU. Değiştirilmedi.**
  📌 Sonuç *"düzelt"* değil ***"dokunma"*** çıktı — ve bir sınavın en
  değerli sonucu çoğu zaman budur.

  🟡 **HİPOTEZ (kural DEĞİL, n=1/n=1):** ölçen oturum deseni şöyle
  daralttı — *"TDV'nin GENEL ANLATI maddeleri Milâdî, ama ŞEHİR maddeleri
  Osmanlı belge tarihini (Rumî) taşıyabiliyor."* Makul ve şimdilik
  tutarlı, **ama tek bir anlatı ve tek bir şehir maddesiyle ölçüldü.**
  ⇒ Bunu bir kural gibi kullanma; **işleyen şey hâlâ ÇAPA SINAVIDIR** ve
  o her madde için ayrı koşulur. Hipotez yalnız *nereden şüpheleneceğini*
  söyler.

  🟢 Ve sınav aranmayan üç şeyi de doğruladı: Atina `14 Kasım 1913` artık
  **TDV'den de** dayanaklı (17 noktalık yamanın günü iki bağımsız
  kaynakta) · `1913-09-29` İstanbul Antlaşması atlasta 4 Bulgar döneminin
  başlangıcı · `1913-07-21` Edirne'nin geri alınışı atlasla birebir.
  ⇒ ***Bir çapa sınavı, sınadığı şeyden fazlasını doğrular.***

  ⚠️ **Ve yanlış yönde düzeltmek daha pahalı:** burada veriyi TDV'ye
  uydurmak, doğru bir Milâdî günü Rumî'ye çevirmek olurdu — yani
  **doğru veriyi bozmak.** `§11`in *"bir ihlali kapatan reçete gerçeği
  silebilir"* ailesi, bu sefer takvim ekseninde.

  📌 Ve bu, bir gecede *"çelişki sandığım şey çelişki çıkmadı"*nın
  **ÜÇÜNCÜ** vakası — Sisam'ın iki günü (*"X'ten çıktı" ≠ "Y'ye
  katıldı"*) · Bozcaada'nın `1913-11-01`i (ay, ayın 1'ine kodlanmış) ·
  ve bu (takvim). ⇒ ***Üçünde de fark bir HATA değil bir KAYIT CİNSİ
  farkıydı*** — ve üçünde de düzeltmek veriyi bozacaktı.
  🟢 Projenin bazı maddeleri bunu zaten doğru yapıyor ve emsal
  niteliğinde: *"30 Ocak 1667 (Jülyen) / 9 Şubat 1667 (Gregoryen)"* —
  **iki takvimi de yazmak**, sonraki oturumu bu tuzaktan kurtarır.

- 🔴 **BİR DEVLETİN KRONOLOJİSİNE, TARAF OLMADIĞI BİR OLAY YAZILMAZ.**
  *(4 Eylül · `KRONOLOJİ AFRİKA GÖVDE`)*
  14 Haziran 1898 Paris Konvansiyonu TDV `gana`da **günüyle** geçiyor — gün
  taşıyan bir madde en cazip olandır. Oturum **yazmadı**: Aşanti o
  antlaşmanın tarafı değil, üç Avrupa devleti arasında.
  > *"Bir devletin kronolojisine taraf olmadığı bir olayı yazmak, onu
  > oturmadığı bir masaya oturtur."*
  📌 `§11`in *"ATLAS SEFERİ DEĞİL TASARRUFU BOYAR"* dersinin **kronoloji**
  tarafı. Ve yazmama kararının **dosyaya kaydedilmesi** ikinci yarısı: bir
  sonraki oturum onu *"atlanmış"* sanacaktı.

- 🔴🔴 **BİR KAYNAĞIN MARKASI, ONUN PROVENANSI DEĞİLDİR — aynı alan adı
  bugün hem imzalı madde hem YZ ÜRETİMİ ÖZET sunuyor.**
  *(4 Eylül 2026 · `KRONOLOJİ GÜNEY AMERİKA` ölçtü · koordinatör tarayıcıyla
  BAĞIMSIZ doğruladı)*

  Aynı gün koordinatör *"Britannica `§4`ün 🔴 listesinde değil ⇒ KABUL"*
  diye hüküm vermişti. Bir işçi oturum onu **daralttı** ve dayanağı
  sayfanın **kendi metni** oldu:

  `britannica.com/topic/Conquest-of-the-Desert` — birebir:
  > *"This summary is created from Britannica articles using **AI**. AI can
  > make mistakes, so verify using Britannica articles."*
  > *"Britannica **doesn't have a full article** on this topic, so we've
  > curated a list of our relevant coverage."*

  İmza da bir uzman değil: *"The Information Architects of Encyclopaedia
  Britannica"*. ⇒ `§4`ün 🔴 listesi **YZ üretimi metni** zaten yasaklıyor;
  yeni olan, o metnin **kabul edilmiş bir markanın altından** gelmesi.

```
🔴 KULLANILMAZ   "Quick Summary" + "created from Britannica articles using AI"
🟢 KULLANILIR    altındaki KÜRE EDİLMİŞ ALINTILAR — ama künye o alıntının
                 geldiği GERÇEK maddeye verilir, özet sayfasına değil
🟢 KULLANILIR    imzalı uzman maddesi (klasik Britannica maddesi)
```
  ⇒ ***Bir Britannica bağlantısı, tek başına "kabul edilebilir kaynak"
  demek DEĞİLDİR.*** Sayfanın **hangi cinsten** olduğuna bakılır.

  ⚠️ Ve tuzağın biçimi tanıdık: sayfa `200` döner, gövde gelir, boş
  değildir, yanlış konu da değildir — `§4`ün **altıncı** tuzağının
  (canlı yönlendirme kütüğü) kardeşi. Orada gövde bir **adres**ti, burada
  bir **YZ özeti**. İkisi de *"kaynak var"* diye okunur.

  📌 Ve asıl ders bir alan adından büyük: **bir kaynağın güvenilirliği
  ARTIK SAYFA DÜZEYİNDEDİR, site düzeyinde değil.** `§4`ün 🟢/🔴
  listeleri site adlarıyla yazılmıştı; bu vaka onların **sayfa başına**
  sınanması gerektiğini gösteriyor.

  🟢 Doğru davranışın kaydı: o oturum `ranquel` maddesini özetten değil,
  **altındaki gerçek madde aktarmasından** yazdı ve provenansı `kaynak`
  alanına açıkça koydu.

- 🟢 **VE HASSASİYETİ DÜŞÜRMEK BİLGİYİ SİLMEZ — DAYANAĞINI GÖRÜNÜR KILAR.**
  *(aynı oturum, aynı gün)*
  `paraguay f:1811-05-14` kaynaksız diye `1811-01-01`e indirilmişti. Yeni
  bir kaynak günü **aynen** verdi (*«declared their independence on May 14,
  1811»*) ve gün **geri alındı** — ama artık künyeden değil **kaynaktan**
  geliyor.
  ⇒ Kural önce doğruyu kaybettirdi gibi göründü; sonra aynı kural onu
  **dayanaklı** hâle getirdi. ***Kaybolan şey gün değil, gerekçesizlikti.***

- 🔴 **BİR BULGUNUN SAHİBİ, BULGUNUN KENDİSİ KADAR KAYITTIR.**
  *(4 Eylül 2026 · koordinatörün hatası, ve düzelten MAL EDİLEN taraf oldu)*

  Koordinatör bir kapanış notunda üç düzeltmeyi tek oturuma mal etti.
  Oturum itiraz etti ve **ikisinin kendisine ait olmadığını** gösterdi:
```
"18+7 → 20+5"        KRONOLOJİ GÜNEY AMERİKA'nın
deniz ölçümü (0→21)  PAKET RENK 0904'ün — ve koordinatör onu o oturuma
                     UYARI olarak kendisi iletmişti, sonra kendi ilettiği
                     şeyi ona MAL ETTİ
payda (161→147)      ✅ gerçekten onun
```
  > *"Ölçmediğimi «ölçtüm» diye kaydettirmem."*

  ⇒ Bu, `§11`in *"ölçmediğini `ölçmedim` diye yaz"* kuralının **aynası**, ve
  iki hata aynı sınıf:
```
ölçmediğini ölçtüm sanmak       → yanlış BİLGİ
ölçmediğini kendine mal etmek   → yanlış KAYIT
```
  🔴 **Ve bedeli nezaket değil, izlenebilirlik:** yarın biri *"deniz
  ölçümünü kim çürüttü"* diye sorarsa yanlış oturuma gider ve **gerçekten
  çürüten oturumun kaydı silinmiş olur.** Bir sonraki koordinatör o kaydı
  okuyup yanlış oturumu çağırır.

  ⚠️ Aynı turda ikinci bir ölçülmemiş sayı da geri çekildi: koordinatör
  *"bugün beni yedi kez düzelttiler"* demişti — **o sayıyı da saymamıştı.**
  Sayınca en az on çıktı. ⇒ *Bir başarı sayısı da bir ölçümdür.*

- 🔴🔴 **YAYIN, VERİNİN BEŞ PARTİ GERİSİNDE — VE HİÇBİR DENETİM BUNU
  SORMUYORDU.** *(4 Eylül 2026 · `PAKET GEOMETRİ 0904` ölçtü)*
```
girdi 3805 nokta · yayındaki geometri 2731 petek · PETEĞİ OLMAYAN 1074 (%28,2)
  yerlesimler_afrika2.js  401/401  %100     kamerika  377/377  %100
  okyanusya               118/118  %100     gamerika  112/112  %100
  sibirya2                 64/64   %100     yerlesimler.js 2/792
⇒ 1074'ün 1072'si (%99,8) BEŞ TAM PARTİ. Sebep ZAMAN değil PARTİ.
```
  ⇒ **Yayındaki harita Amerika'nın, Okyanusya'nın ve Sibirya-2'nin HİÇBİR
  noktasını çizmiyor.** Veri var, harita çizmiyor.

  📌 Ve bu, Emre'nin *"Kuzey Amerika · Güney Amerika · Sahra altı Afrika ·
  Avustralya-Mikronezya-Yeni Gine · Sibirya… tüm bu yerlerdeki devletler,
  şehirler, kronolojiler tam mı?"* sorusunun cevabının **yarısı** — ve
  kimse *"veri tam mı"* ile *"harita çiziyor mu"* sorularını ayrı
  sormamıştı.

  ⚠️ Bu bir **kusur değil bir GECİKME** (`§11`: *"çıktı girdinin bir tur
  gerisindedir"*) — ama gecikme **beş partilik** olduğunda ve kimse ölçmediğinde
  kusurdan ayırt edilemez hâle geliyor. Tek bir vaka (`Cânet`in peteği yok)
  bir kullanıcı şikâyeti olarak geldi; arkasındaki 1074 ancak **oran
  sorulunca** göründü.
  🟢 Sınavı hazır (`peteksiz.js`): koşu inince peteksiz oran **%100 → %0**
  olmalı, `PETEKLER` 2731 → ~3800.

- 🔴 **ÇOK PARÇALI BİR İLİŞKİYİ TEK SAYIYA İNDİREN ÖLÇÜ, KUSURU ALT SINIR
  OLARAK GÖSTERİR.** *(4 Eylül 2026 · aleti yazan oturum kendi çürüttü)*

  Gövde–gövde boşluğu ölçen alet mesafeyi **tek bir sayı** olarak alıyordu.
  Bir çift bir yerde değiyorsa mesafe `0`; başka bir dikişte 5 km açık olsa
  bile *"DEĞEN"* sayılıyor.
```
KUTU A ölçümü       almanya ↔ macaristan = 5,245 km AÇIK
küresel ölçüm       aynı çift            = DEĞEN (0 km)
```
  🔴 Ve kanıt **aynı raporun içindeydi.** ⇒ *"17 çift"* kusurun ölçüsü
  değil, bir **ALT SINIR**; doğru evren çift değil **dikiş parçası**.
  🟢 Düzeltilmiş ölçü üç aileyi ayırdı ve üçünün çaresi ayrı:
```
DİKİŞ         95 parça ·  15.526 km²   ≤8 km · 2+ gövde
KIYI KENARI 2.159 parça ·  85.765 km²  ≤8 km · ≤1 gövde   🆕 5,5 KAT büyük
KAPSAMA        19 parça · 127.232 km²  >8 km
```
  ⚠️ Ve niçin ayrılmaları gerektiğini oturumun kendisi yazdı: *"üçü tek
  satırda raporlansaydı aynı çare uygulanırdı — dikişi kapatır, kıyı
  kenarına HİÇBİR ŞEY yapmaz, ve «boşluk çözüldü» sanılırdı."*

  📌 Mesafe bir **minimum** alır; kusur bir **maksimum** meselesidir. Bir
  ölçünün yanlış olması gerekmiyor — **yanlış yönde özetlemesi** yetiyor.

- 🟢 **AYNI SAYININ TEKRAR ETMESİ, İLK ÖNCE ALETTEN ŞÜPHELENDİRİR.**
  Üç kesitte de boşluklu çift sayısı **17** çıktı. Oturum bunu bulgu
  saymadı, **sorguladı**: *"aynı sayı üç kez çıkınca ilk şüphelenilmesi
  gereken şey ALETİN kendini tekrarlamasıdır."* Ölçtü — üç kesitte ortak
  olan yalnız **3 çift**, gerisi kesite özgü.
  ⇒ ***Aynı sayı ≠ aynı vaka.***

- 🔴 **GİZLİ BİR SEKMEDE YAPILAN HER TARAYICI ÖLÇÜMÜ «YOK» DER — VE «YOK»
  BİR SONUÇ SANILIR.** *(4 Eylül 2026 · aynı günün DÖRDÜNCÜ vakası)*

  `serbest-*` katmanları düzeltildikten sonra doğrulama yapıldı ve alet
  ısrarla *"katman YOK"* dedi. Yayındaki sürüm de aynı şeyi dedi ⇒ bir an
  *"haritayı ben kırdım"* hükmü verilmek üzereydi. Gerçek sebep tek satır:
```
document.visibilityState === "hidden"
```
  Browser paneli gizliydi. **MapLibre gizli belgede çizim yapmaz; çizim
  olmayınca `load` ateşlemez; `load` ateşlemeyince hiçbir katman eklenmez.**
```
gizliyken   isStyleLoaded() false · getStyle() undefined · getLayer() null
            harita.loaded() false · katman sayısı 2 (yalnız başlangıç stili)
görünürken  katman 39 · devlet-dolgu VAR · serbest-hale VAR
```
  ⇒ Bütün o *"katman yok"* ölçümleri **bir artefakttı**, ve hiçbiri hata
  vermedi — dördü de **temiz bir sayı** üretti.

  🟢 **KURAL: bir tarayıcı ölçümü almadan önce `document.visibilityState`
  sorulur.** *"hidden"* ise render'a bağlı her ölçüm (`isStyleLoaded` ·
  `getStyle` · `getLayer` · `loaded` · ekran görüntüsü) **`ölçülemedi`**
  kovasına girer — **`YOK` değil.** Ekran görüntüsü almak çizimi zorlar ve
  paneli görünür kılar; ölçümden önce bir kare almak en ucuz çaredir.

  ⚠️ **VE KONSOL TAMPONU GEZİNMEDE TEMİZLENMİYOR.** Düzeltmeden sonra aynı
  dört hata satırı hâlâ görünüyordu ve bir an *"düzelmedi"* sanıldı. Hüküm
  sonunda **katmanın kendisinden** verildi: geçersiz bir paint ifadesiyle
  katman HİÇ oluşmaz, oysa katman vardı ve yeni ifadeyi taşıyordu.
  ⇒ ***Bir kusurun kaybolduğunu, kusurun İZİNDEN değil KONUSUNDAN ölç.***

  📌 Ve bu, `§11`in *"doğru kapıya gidip yanlış yerden dinlemek"* ailesinin
  bir günde **dördüncü** vakası: `konum_denetimi`in dönüşü · tahtanın `kim`
  alanı · `renk_olc`un `gorunen()`i · ve bu. Dördünün ortak deseni tek:
  **alet hata vermedi, temiz bir sayı üretti.**

- 🔴 **AYNI RENGİ İKİ ALET FARKLI HARMANLIYOR — VE BİRİ EKRANDA OLMAYAN BİR
  RENGİ ÖLÇÜYOR.** *(4 Eylül 2026 · `ispanya` uyarısını kovalarken çıktı)*

  `renk_olc` her koşuda tek bir uyarı basıyordu: *"ispanya ALTLIKTAN
  yeterince ayrışmıyor, DE 15,0"*. Ölçüldü ve **iki alet aynı renk için
  farklı sayı veriyor:**
```
renkler.py  _de3(lab_r, alt)  = 14,9820   → uyarı ÖTÜYOR  (< 15)
renk_olc    dE(lab_o, ALT)    = 15,0766   → ötmez         (≥ 15)
renk_olc    dE(lab_r, ALT)    = 14,9820   → AYNI  ⇒ FORMÜL AYNI
```
  ⇒ Ayrışan şey metrik değil **harman**:
```
renkler._bindirilmis_lab   harmanlar → 8 BİTE YUVARLAR → Lab
renk_olc.bind              harmanlar → FLOAT bırakır   → Lab
```
  📌 Ve **doğru olan `renkler.py`**: ekran 8 bit gösterir, yani gerçekten
  çizilen renk yuvarlanmış olandır. `renk_olc` **gösterilemeyen** bir rengi
  ölçüyor. Bu, `§11`in *"referans, ölçtüğü şeyin yanında durmalı"* dersinin
  aynı ailesi — orada deniz beyanı ekranda yoktu, burada ölçülen renk.

  🔴 **AMA DÜZELTME DENENDİ VE GERİ ALINDI — ETKİSİ ÖLÇÜLDÜ, BÜYÜK ÇIKTI:**
```
FLOAT (bugünkü)   0 görünmez ·  0 çakışma · 1 yakın-ama-değmeyen
8 BİTE YUVARLI    1 görünmez · 10 çakışma · 7 yakın-ama-değmeyen
```
  0,1'lik bir ΔE kaymasının yapabileceği bir şey değil. ⇒ Ya yama yanlıştı
  (`bind` başka çağrı yollarında farklı ölçekte veri alıyor olabilir), ya
  fark sanıldığından derin. **İkisi de ÖLÇÜLMEDİ.**
  🟢 Yama geri alındı (`git diff` boş, ölçüm 0/0/1'e döndü) ve kalem
  **AÇIK** bırakıldı — *"anlamadan tutma"*.

  ⚠️ Ve `ispanya` DEĞİŞTİRİLMEDİ: asgari müdahale (ton ve açıklık sabit,
  yalnız doygunluk) doygunluk 1,0'a kadar denendi ve **çözmedi**; tam çözüm
  tanınan bir kimliğin tonunu 0,02'lik bir eşik payı için değiştirirdi.
  Orantısız. Kayıt burada, karar Emre'nin.

- 🟢 **AÇIK KALEM KAPANDI: "10 ÇAKIŞMA" BİR YAMA KUSURU DEĞİL, GERÇEKTİ —
  VE KÖK SEBEP ÇÖZÜCÜNÜN PAY BIRAKMAMASI.** *(4 Eylül 2026 gecesi)*

  Aynı gün `bind()`i 8 bite yuvarlamayı denemiş, çakışma `0 → 10` fırlayınca
  *"0,1'lik bir ΔE kaymasının yapabileceği şey değil"* deyip geri almıştım.
  Kalem **açık** bırakıldı: *"önce niçin 10 çakışma doğduğunu ölç."* Ölçüldü:
```
bind()'in bütün çağrıları 0-255 ölçekte     ⇒ yamada ölçek hatası YOK
en düşük SINIRDA değerler: 12,02 · 12,04 · 12,05 · 12,05 · 12,07 · 12,08 …
8 bit yuvarlamanın kayması ~0,3            ⇒ bunların ~10'u eşiğin ALTINA iner
```
  ⇒ **Sayı birebir tuttu.** Yani o 10 çift bir artefakt değil: **ekranda
  (8 bit) zaten eşiğin altındalar.** `renk_olc`un float harmanı **iyimser**.

  🔴 **KÖK SEBEP: çözücü eşiğin KIL PAYI üstünü seçiyor.** 4 Eylül'de
  uygulanan 16 rengin *"en yakın engel"* değerleri: 12,1 · 12,1 · 12,2 ·
  12,2 · 12,3 · 12,4 · 12,5 … Pay **0,1**. Ölçüm biçimindeki en küçük
  değişiklik — ya da ekranın 8 bitlik gerçeği — onları çeviriyor.

  🟢 **VE PROJE BU İLKEYİ ZATEN BİLİYOR, YALNIZ BİR YERDE UYGULUYOR:**
```
renkler.py:3513   _GUVENLI_PAY = 13.0   "sınırda (12,0-13,0) geçen bir aday
                                         KABUL EDİLMEZ … amaç ucu ucuna
                                         değil RAHATÇA geçmek"
renk_olc.py --oner   DE_KOMSU = 12.0    pay YOK
```
  Aynı proje, aynı ilke, iki farklı sayı. Açıklık yükseltmesi rahat geçmeyi
  şart koşuyor, renk çözücüsü koşmuyor.

  ⇒ **BORÇ (koşu 5 bitince):** `oner()` hedefi `DE_KOMSU + pay` olsun
  (`renkler.py`nin 13,0'ı emsal). Bedeli ölçülmeli: pay büyüdükçe çözülemeyen
  kimlik artar — `§11`in *"eşiği gevşetme, SIKILAŞTIR"* kuralıyla birlikte
  okunmalı.
  ⚠️ Bugün UYGULANMADI: `renkler.py` koşu sırasında DONUK (üç parmak izli
  dosyadan biri) ve pay değişikliği yeniden çözüm gerektirir.

  📌 Ve dersin kendisi: ***bir eşiğin kıl payı üstünde durmak, eşiği
  geçmek değildir.*** Ölçüm değişmese bile ÇİZİM değişir — ve çizim 8 bittir.

- 🔴🔴 **KOMŞULUK BİR İPUCUDUR, KANIT DEĞİLDİR — VE BİR KİMLİĞİ ATAMAK
  İÇİN DELİL ARARKEN ATAMAMAK İÇİN DELİL ÇIKABİLİR.**
  *(5 Eylül 2026 · `NEHİR SÜRTÜNME`, ve aday kimliği ÇÜRÜTEN taraf onu
  ÖNEREN taraftı)*

  Sekiz nokta 1281'den beri `iran` kimliğiyle boyanıyordu — künye
  **1925-12-12 → 2026-08-07**, yani dönem künyeden **424 yıl** uzakta.
  Kaspi üçlüsü (Derbend · Tarki · Agraham burnu) için `sirvansah` en makul
  adaydı ve **iki bağımsız işaret** onu destekliyordu:
```
komşuluk        Kuba 80 km · Saburan 110 km · Kabala 125 km — hepsi sirvansah
künye penceresi 861 → 1538 · dönemi TAM örtüyor
```
  Oturum delil ararken **aleyhine** delil buldu:
```
TDV `sirvan`: Osmanlı döneminde Derbend, Şirvan'dan AYRI bir eyalet —
"merkezi Demirkapı/Derbend olan Derbend eyaleti", Şemâhî'den AYRI sayılıyor
```
  ⇒ Derbend'i Şirvan'a bağlamak yalnız **dayanaksız** değil, kaynağın
  gösterdiği **idarî ayrıma da aykırı** olurdu.

  📌 Bulan oturumun kendi cümlesi: ***"Komşuluk bir ipucudur, KANIT DEĞİL —
  ve bu vakada YANLIŞ YÖNE işaret ediyordu."*** Ve yanındaki daha da
  değerli: ***"bir kimliği ATAMAK için delil ararken, ATAMAMAK için delil
  buldum."***

  🟢 **Bu, `§3.5.1`in *"bir sınır kayması önerildiğinde İKİ UÇ DA ölçülür"*
  kuralının KAYNAK tarafıdır** — orada ölçülen şey coğrafyanın iki ucuydu,
  burada **delilin iki yönü.** Bir hipotezi doğrulayan delil aranırken,
  onu çürüten delil de aynı gövdededir; yalnız aranmaz.

  ⚠️ Ve `bulunamadı` damgası bu turda **hak edildi**: `§4`ün *"dar slug
  tutmazsa KAPSAYICI maddeyi dene"* kuralı **tüketildi** — beş canlı gövde
  (`derbend--dagistan` · `dagistan` · `hurmuz--iran` · `sirvansahlar` ·
  `sirvan`) tek tek okundu ve hiçbiri 1281-1509 için kimlik+tarih vermiyor.
  ⇒ *"Bulunamadı"* iki maddelik bir denemeyle değil, **beş maddelik bir
  tüketmeyle** yazılır; ve o zaman bir sonraki oturumu **aramaktan haklı
  olarak alıkoyar.**

  🟢 **VE SİLMEK BİR SEÇENEK DEĞİLDİ — iki uç ölçüldü:** sekizinin
  sekizinde de `iran` dönemi `s:` zincirinin **ilk** dönemi; geri çekmek
  1281→~1510 arası **sekiz sahipsiz nokta** = sekiz harita deliği üretirdi.
  📌 `OGRENILENLER §72`nin tarif ettiği şeyin ta kendisi: `Değişmez 1`
  *"kimsenin değildi"* diyemediği için veri en yakın kimliğe itilmiş — ve
  bu sefer **o dönemde var olmayan** bir kimliğe.

  🔴 **Ve `bos:` altıncı bir kova GEREKTİRMİYOR** (ölçen oturum sordu):
  Kaspi'de **sahip var** — TDV sırayı sayıyor (İlhanlılar → Altın Orda →
  Timurlular → Şirvanşahlar → Safevîler) — bilmediğimiz **gün**.
  ⇒ Bu bir *boşluk* değil bir **TARİH BİLİNMEZLİĞİ**; `bos:` onu ifade
  edemez çünkü **etmemeli.** Kova eklemek, iki ayrı kusuru tek ada bağlardı.

- 🟢🟢 **İKİ OTURUM, AYNI GECE, KENDİ MANŞET SAYISINI ÇÜRÜTTÜ — VE İKİSİ DE
  KABUL ÖLÇÜTÜNÜ KARŞILADIKTAN SONRA.** *(5 Eylül 2026 gecesi)*

  `KÜRE GÖRÜNÜM` ve `NEHİR SÜRTÜNME` işlerini teslim etti, ölçütleri
  karşıladı, sonra **geri dönüp kendilerini sınadılar.** Kimse istemedi.
```
KÜRE   "481 DOM işaretçisi ÇÜRÜDÜ → 173"  →  "O DAMGA YANLIŞ, 481 DOĞRUYMUŞ"
NEHİR  "geçiş cezası 75 birim"            →  "çapraz kontrol bandı açtı, 60"
```
  📌 Bir kabul ölçütü karşılandıktan **sonra** kimse geri dönüp bakmaz —
  ölçüt bir kapıdır ve kapıdan geçen iş *"bitti"* sayılır. Bu iki oturum
  kapıdan geçtikten sonra baktı, ve ikisi de kendi sayısını düşürdü.

  ### ① *"YÜKLENDİ" BİR AN DEĞİL BİR ARALIKTIR*
```
sayfa yüklenirken (~20 sn)  173 işaretçi   ← ölçümün alındığı an
TAM yüklü, Anadolu z5,5     481
dünya görünümü z1,2         951 – 1.104
```
  Ölçüm **doğruydu**, ölçülen **an** yanlıştı: şehir ve devlet etiketleri
  (308 adet) o sırada henüz yaratılmamıştı. Sayı `load` olayından **sonra
  da** büyümeye devam ediyor.
  ⇒ Bir sayfayı ölçerken *"yüklendi mi"* sorusu yetmez; **"ne zamandan
  beri yüklü"** de sorulur.
  📌 `§11`in *"gizli sekmede yapılan ölçüm «YOK» der"* dersinin kardeşi:
  orada sayfa **hiç** çizmiyordu, burada **henüz** bitmemişti. İkisi de
  temiz bir sayı üretti.

  ### ② *TEKRAR, EVRENİ GENİŞLETMEZ*
  O oturumun kendi cümlesi:
  > *"«Sabit» demek «ölçtüm» demek değil: on tarih ve dört zoom denedim,
  > hepsini AYNI ERKEN PENCEREDE ölçtüm."*

  Kırk ölçüm alınmıştı ve kırkı da aynı kör noktadaydı. ⇒ **Örneklem
  büyüklüğü, örneklem ÇEŞİTLİLİĞİ değildir.** Bir değişkeni (tarih, zoom)
  çeşitlendirip ötekini (ölçüm anı) sabit tutmak, evreni genişletmez —
  yalnız aynı hatayı kırk kez tekrarlar.
  📌 `§11`in *"temiz çıkan bir örneklem, örneklemin dışını temiz ilan
  etmez"* dersinin **eksen** yüzü: orada evren coğrafî olarak dardı,
  burada **zamansal** olarak.

  ### ③ BİR ÇAPA TEK VAKADA İŞE YARAYABİLİR VE GENELLEŞMEZ
  `NEHİR SÜRTÜNME` Tuna için bir çapa kurdu — geçitler arası **yarım
  aralık** — ve 75 birim çıkardı. Sonra aynı çapayı dünyaya uyguladı:
```
sınıf A 76,8  ·  sınıf B 96,2  ·  sınıf C 60,8      → DÜZ ve TERS SIRALI
Sakarya sr8 (küçük nehir) medyan aralık  14,2 km  ← 10 Osmanlı noktası
Congo   sr2 (dev nehir)   medyan aralık 537,4 km  ← Afrika'da seyrek
```
  ⇒ Metrik **nehri değil ATLASI ölçüyordu**: aralık, yerleşim
  yoğunluğunun fonksiyonu — nehrin geçilebilirliğinin değil. Coğrafî
  örneklem yanlılığı.
  🟢 **Ve çapayı çürüten şey onu BAŞKA VAKALARA UYGULAMAK oldu.** Tek
  vakada test edilen bir ölçüt, test edilmiş sayılmaz; ***bir çapa ancak
  çapalamadığı bir yerde sınanabilir.***
  ⚠️ Ve aynı çapraz kontrol **Tuna'nın kendi sayısını da** zayıflattı
  (135,2 → 106,2 → 88,3 km, yani 75 → 59 → 49 birim). Oturum manşetini
  bandın üst ucundan ortancasına indirdi: *"75'i tek sayı olarak artık
  savunmuyorum."*

  🟢 **VE ÜÇÜNÜN ORTAK ÇARESİ AYNI: KONTROL.** KÜRE arka yüz çaresini
  sınarken bir **kontrol satırı** koydu (*çare KAPALI iken aynı görünümde
  gizlenen: 0*) ve ancak onunla ölçtüğü şeyin çarenin kendi etkisi olduğunu
  gösterebildi. NEHİR iki bağımsız yöntemle aynı deseni buldu. ⇒ *Bir
  ölçümü doğrulayan şey ikinci bir ölçüm değil, **ölçümün yokluğunda ne
  olduğunu** gösteren bir kontroldür.*
