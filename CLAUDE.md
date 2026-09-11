# Tarih Atlası — her oturumun önce okuyacağı dosya

Bu dosya Claude Code tarafından oturum açılışında otomatik okunur. Projenin ne
olduğunu, nasıl çalıştığını, hangi kuralların **ihlal edilemez** olduğunu ve senin
oturumunun hangi dosyalara dokunabileceğini anlatır.

## Belge seti

| Belge | Ne anlatır | Ne zaman okunur |
|---|---|---|
| **`CLAUDE.md`** (bu dosya) | **Nasıl çalışılır** — kurallar, değişmezler, dosya sahipliği, tuzaklar, komutlar | **Her oturumda, baştan sona** |
| **`dersler/D<NNN>-*.md`** | **`§11` derslerinin VAKALARI** — bedeli · vakası · kuralı. `§11` yalnız SLOGANI taşır, gerekçe burada durur (10 Eylül 2026 budaması: 293.163 → 33.137 karakter) | **Bir kural TARTIŞILINCA** — yoksa slogan yeter. Toplu okunmaz |
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
| Yerleşim (motorun okuduğu) | **3808** nokta, 77 girdi dosyası |
| Kronoloji | **1300** madde · 1238 duygu etiketli · 1202 `yer_id` · 28 `vefat_id` |
| Değişmez 1 — sahipsizlik | ✓ 3808 yerleşim, 314 sahipsiz (beklenen 314) |
| Değişmez 1b — iç boşluk | ✓ BEYANSIZ pencere arası boşluk: 0 (beklenen 0) · beyanlı 5/5 — tam tarama |
| Değişmez 2 — Osmanlı senkronu | ✓ 520 kırılma, 0 açık (beklenen 0) |
| Değişmez 2s — yabancı senkron | ✓ 1327 YABANCI kırılması · 104 AÇIK (tavan 121) · 364 KAPSAM DIŞI |
| Değişmez 2i — işgal senkronu | ✓ 62 İŞGAL kırılması, 3 açık (tavan 3) |
| Değişmez 2t — kırılmasız madde | ✓ kırılmasız madde: 12 (tavan 42) — bilinen borç |
| Konum denetimi | 0 nokta kara maskesinin dışında (beklenen 0) |
| Devletler dizini | **627** künye · **579** renk (`renkler.py`) |
| Dizinsiz harita kimliği | ✓ **0** kimlik / 0 pencere karşılıksız · *kapsam: `girdi.py`nin okuduğu 77 dosya, `s:`+`isg:` alanları — bağlanmamış partiler HARİÇ* |
| Kasıtlı boşluk kimliği | 🟡 **1** kimlik / 2 pencere · *`__BOSLUK__` — hiçbir künyenin kapsamadığı dilim; en yakın kimliğe İTİLMEDİ (`§3.5.1`). Kusur değil, BEYAN* |
| Renkli-künyesiz kimlik | ✓ **0** çiziliyor ama dizinsiz · *kapsam: `renkler.py` BOYALAR − (künye `id` ∪ `harita:`)* |
| Renksiz künye — HARİTA DELİĞİ | ✓ **0** kimlik veride kullanılıyor ama BOYANMIYOR · 🟡 39 sessiz borç (künye var, veride yok) · *kapsam: künye `id` ∪ veride kullanılan − BOYALAR(`harita:` varsa o) · `__BOSLUK__` muaf* |
| Padişah · kartvizit | 41 kayıt · 36 portre · **41** kartvizit dolu |
| Harita penceresi | `box(-180, -60, 180, 85)` |
| Yayın | **r7487** · `a00592d` |

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

> 🔴🔴 **BU TEŞHİS ÖLÇÜLDÜ VE ÇOK GENİŞ ÇIKTI — 7 Eylül 2026,
> `DEGISMEZ3-0907`.** Teşhis bir yıl boyunca **sınanmadan** taşındı;
> sınanabilir hâle getirildiğinde payı ölçüldü:
> ```
> ÖNGÖRÜ (ölçümden ÖNCE yazıldı)  coğrafî kova %10-30
> ÖLÇÜM                            çift %1,0 · çift-gün %7,0   ⇒ ÇÜRÜDÜ
> ```
> ```
> 🟠 EKSEN kusuru (saf coğrafî · uyum <%5)     7 çift   (%1,0)
> 🟢 ZAMAN kusuru (siyasî — bir dönem AYNI devlette olmuş)  683   (%93,0)
> 🔴 saf coğrafî (hiç aynı devlette olmamış)     0
> ```
> ⇒ ***`m:` DOĞRU EKSENDE.*** 690 çiftin **683'ünde** yerleşim ile merkez
> gerçekten bir dönem aynı devlette olmuş; eksik olan tek şey **ZAMAN
> PENCERESİ** — yani `kd:`nin çözdüğü şey.
> ⚠️ **Ama %7 «yok» demek değil:** o 7 çifti (6'sı Yanya — Korfu ·
> Otranto · Kefalonya) `kd:` **çözmez**, ve tek satırda raporlansalardı
> *"çözüldü"* sayılıp kaybolurlardı.
>
> 📌 **Ve dersin kendisi:** bir teşhis **doğru olabilir ve yine de
> yanlış BÜYÜKLÜKTE** olabilir. Bu teşhis *"asıl kusur bu"* diye
> yazıldı; ölçüm onu **kusurun onda birinden azına** indirdi. `§11`in
> *"ölçüm doğru, çıkarım yanlış"* ailesinin **ağırlık** yüzü: burada
> çıkarım yanlış değil, **oransız.**
>
> 🟢 **VE TAM SAYI DA ÖLÇÜLDÜ — 493 bir örneklemdi:**
> ```
> 6 kesitlik ölçüm (bugün)      493   (8 Ağu 359 · 4 Ağu 311)
> TAM TARAMA benzersiz çift      690  ·  çelişki aralığı 2531
> 🔴 6 kesitin HİÇ GÖRMEDİĞİ    436 / 690  (%63)
> çelişki EVRENİ                 814  (`m:` taşıyan) — 3805 DEĞİL
> ```
> 🟢 Ve tam tarama **denklik sınavıyla** bağlandı: 6 kesite daraltılınca
> `denetle.degismez3` ile birebir (`493=493 · 486=486`), yoksa
> `exit(1)`. ⇒ `§11`in *"bir aleti taklit eden ölçüm, onun EŞİĞİNİ ve
> KOVA YAPISINI da taşımalı"* dersinin ilk **önceden sınanmış**
> uygulaması — `4s` kovasındaki sessiz ayrışma tekrarlanmadı.

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
`🟢 26 · 🟠 2 · 🟡 3 · ⚪ 12`. `nube` tek değil — ama **2 vaka bir ORAN
vermez**, varlık gösterir.
> 🔴 **İlk yazımda 🟠 4 diye kaydedilmişti; ölçen oturum düzeltti (4→2)**
> ve gerekçesi tek: *"TDV gövdesine baktım, KÜNYENİN KENDİ BEYANINA
> bakmadım — taramam ilişkinin TEK UCUNU ölçüyordu."*
> ⇒ `§3.5.1`in *"iki uç da ölçülür"* kuralının **kaynak yüzü**:
> ***gövde ile künye KARŞILIKLI okunur.***
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
`kutlug-hanlilar` ölü ama `kutlughanlilar` canlı · `derbend` ölü ama **`derbend--dagistan` canlı** (5 Eylül 2026'da ölçüldü — bu belge `derbend`i ölü diye kaydetmiş ama canlı varyantını bilmiyordu) · `nisabur` ölü ama
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
   yanıltıcıdır. ~~`uret_petek.py:2776` onu KOŞUNUN SONUNDA yazar:~~

   > 🔴🔴 **«KOŞUNUN SONUNDA» YANLIŞ — ölçüldü, 7 Eylül 2026
   > (`SINAV-KOSU8-0907`).**
   > ```
   > yazılı     "uret_petek.py:2776 · KOŞUNUN SONUNDA"
   > ÖLÇÜM      satır 2811 · koşunun 70. DAKİKASINDA yazılıyor
   >            (koşu 8: 11:17:46 başladı → dosya 12:27:30)
   > ```
   > ⚠️ **Ve bedeli somut: bir bekçi buna tetik olarak bağlanırsa ON
   > ALTI SAAT ERKEN öter** — ve `§10`un *"bitti sanıp erken haber
   > vermek, hiç haber vermemekten kötüdür"* kuralını tam olarak
   > çiğnetir. Tetik `data/donemler.js` olmaya devam ediyor.
   > 📌 Ve satır numarası da kaymış (2776 → 2811): ***bir dosya
   > numarası, kod değişmese bile komşusu değişince kayar*** — bu belge
   > bugün üç kez satır numarası devretti ve üçünde de ölçüm istendi.

   `unary_union(PETEK_D)` = **motorun ÇİZDİĞİ kara**, Natural Earth'ün
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

  ### 🔴🔴 İSTİSNA GENİŞLETİLDİ — 7 Eylül 2026 · ve sebebi KOORDİNATÖRÜN İHLALİ
  *(`SINIR-ANADOLU-0907` ölçtü ve `§7.1⑥` gereği bekletmeden bildirdi)*

  `git add -A` yasağı yazılıydı. Koordinatör onu çiğnemedi — **DİZİN
  PATHSPEC'i** kullandı (`git add -- denetim/`) ve sonuç **aynı**:
```
d143e65   "IKI DERS + KOSU 8 BITIS TAHMINI DUZELDI"   →  140 DOSYA
ec869d9   "ALTI KITA DAHA SEVK EDILDI"                →   23 DOSYA
⇒ on iki oturumun ÇALIŞAN dosyaları, konusu onlar OLMAYAN commit'lere girdi
```
  🔴 ***BİR DİZİN PATHSPEC'İ, `git add -A` KADAR SÜPÜRÜCÜDÜR.*** Kuralın
  ruhu *"pathspec yaz"* değil, **"YALNIZ KENDİ DOSYALARINI, ADIYLA"**.

  🟢 **VERİ KAYBI OLMADI** (ölçüldü: `git status` üç dosya için de boş,
  içerik diskteki hâlle aynı) — **ama KAYBOLAN ŞEY GEREKÇEYDİ.** O
  oturumun commit mesajı (iki öngörünün çürümesi, bir kararın sebebi)
  **hiç yazılmadı**; `git log`da işi başkasının başlığı altında duruyor.
  ⇒ `§7` istisnası bir kolaylık değil bir **izlenebilirlik** aracıdır.

  🔴 **VE ASIL RİSK O OTURUMDA DEĞİLDİ:** dosyaları o an TAM olduğu için
  şanslıydı. Aynı anda **yarım yazılmış** bir dosyası olan bir oturumun
  bozuk hâli commit'lenirdi **ve kimse bilmezdi** — commit mesajı o
  dosyadan hiç söz etmiyor.
  📌 `§7` bunu 4 Ağustos'ta *"girmek üzereydi"* diye kaydetmişti. Bugün
  **GİRDİ**, ve 21 oturumluk bir kadroda süpürücü commit'in yakalayacağı
  yarım dosya sayısı, tek tek pathspec'in maliyetinden büyük.

  🟢 **HÜKÜM — istisna genişliyor:**
```
Bir oturum KENDİ ÜRETTİĞİ dosyaları commit EDER:
   oturumlar/<KENDİ ADI>.md
   denetim/<KENDİ ÖNEKİYLE başlayan alet · ölçüm · bulgu · yama dosyaları>
Şartı DEĞİŞMEDİ: her dosya ADIYLA yazılır. DİZİN PATHSPEC'İ YASAK.
   🔴 git add -- denetim/          ← SÜPÜRÜCÜ, YASAK
   🟢 git add -- denetim/ARAC-X-0907.py denetim/OLCUM-X-0907.json
```

  ### 🔴🔴 VE KURAL İKİ ADIMDA ÇALIŞIYOR — `add` YETMEZ, `commit` DE
  PATHSPEC İSTER *(7 Eylül · `SINIR-ANADOLU-0907` ölçtü, aynı gün)*

  Kural yazıldıktan **iki saat sonra** yarış gerçekleşti ve ölçüldü:
```
git add -- <9 kendi dosyam>
git diff --cached → 10 DOSYA
   denetim/ARAC-SINIR-KAFRIKA-PENCERE-0907.py  ← BAŞKA BİR KOLUN
28b45f1  15:39:34  KAFRIKA kendi commit'ini attı
173075d  15:39:51  benim commit'im — 17 SANİYE SONRA
```
  ⇒ ***Kural süpürmeyi merkezden dağıtıma çevirdi, YOK ETMEDİ.*** Yarış
  `add` ile `commit` **arasında**: index paylaşılıyor ve o aralıkta
  başka bir oturum sahneleme yapabiliyor.
```
🔴 git add -- <adlar>                          YETMEZ
🟢 git commit -F <msg> -- <AYNI ADLAR>         KESER
   ⇒ PATHSPEC COMMIT'TE DE TEKRARLANIR
🟢 ve doğrula:  git show --name-only <kendi commit'in>
```
  ⚠️ **Bu bir «dikkat» meselesi değil bir SIRALAMA meselesi.** Yeni
  kuralı okuyup pathspec'i yalnız `add`de kullanan bir oturum **kendini
  korunmuş sanar** ve komşusunun dosyasını commit'ler.
  📌 Ve bulan oturum bunu `M-3214`te **hipotez olarak yazmış**,
  *"⚪ gerçekleşme sıklığını ÖLÇMEDİM"* diye damgalamıştı. İki saat
  sonra gerçekleşti. ⇒ *Damgalanmış bir «ölçmedim», ölçülmeyi bekleyen
  bir tahmindir — ve bazen kendisi gelir.*
  **Niçin genişledi:** eski kural `denetim/`i Oturum 0'a bırakıyordu ve
  bu, 21 oturumluk bir kadroda koordinatörü **süpürmeye mecbur
  ediyordu.** Kural kendi ihlalini üretiyordu.

  📌 Ve dersin kendisi, bulan oturumun cümlesi:
  ***"`§7` istisnası bir HAK verir ama onu KORUMAZ."*** Paylaşılan bir
  index'te *"kendi dosyamı kendim commit ederim"* hakkı, başkasının
  süpürücü commit'i karşısında hükümsüz — **ve hükümsüz kalışı
  SESSİZDİR:** hakkını kullanmaya çalışan oturuma dönen cevap yalnızca
  `"no changes added to commit"`tir.
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

> 🔴 **BU BÖLÜM BİR DİZİNDİR — her satır bir DERSİN SLOGANI, ve vakası
> `dersler/<kimlik>.md`dedir.** Bir kural seni ilgilendiriyorsa **vakasını
> aç**; ilgilendirmiyorsa sloganı okumak yeter.
>
> **Niçin böyle** *(10 Eylül 2026'da ölçüldü)*: bu bölüm **293.163
> karakterdi** ve `CLAUDE.md`nin **%73'üydü** — yani her oturumun, her
> compact'ın ve her işçinin ödediği bağlam bedelinin çoğu buydu. Ve
> **hiçbir oturum onu baştan sona okumuyordu.** ClaudEmre'nin `A6`
> yasası: *okunmayan kural koruma sağlamaz — kural yazılıydı,
> uygulanmıyordu ve UYGULANAMAZDI.*
> ⇒ **Hiçbir ders silinmedi.** Slogan burada kaldı, vaka bir tık öteye
> taşındı: `293.163 → 18.250` karakter, **16 kat.**
>
> 📌 Emsali ClaudEmre'nin kendi doktrini: `yasalar/gelen/` ~86.000 token
> → `DIZIN.md` ~7.000. Aynı ameliyat, aynı gerekçe.
> ⚠️ **Yeni bir ders yazarken:** sloganı BURAYA tek satır, vakayı
> `dersler/D<sıra>-<slug>.md`e. İkisini birden buraya yazmak, bu bölümü
> yeniden 293 bin karaktere çıkaran yoldur.

- **`replace(eski, yeni, 1)`** — [`D001`](dersler/D001-replace-eski-yeni-1.md)
- **Yakın mükerrer yerleşim** — [`D002`](dersler/D002-yakin-mukerrer-yerlesim.md)
- **Üretimi veri değişirken başlatma.** — [`D003`](dersler/D003-uretimi-veri-degisirken-baslatma.md)
- **Denetim ölçütünü gevşetme.** — [`D004`](dersler/D004-denetim-olcutunu-gevsetme.md)
- **`sed` ile Türkçe karakterli / kesme işaretli düzeltme yapma** — [`D005`](dersler/D005-sed-ile-turkce-karakterli-kesme-isaretli.md)
- 🔴 **"BU GÜN ZATEN VAR" YETMİYOR — HANGİ KOVADA OLDUĞU DA SORULMALI.** — [`D006`](dersler/D006-bu-gun-zaten-var-yetmiyor-hangi-kovada.md)
- 🔴 **"DENETİM VAR" ≠ "O SORUYU SORUYOR." Aynı gün ÜÇ ayrı körlük ölçüldü (7 Ağustos 2026) ve üçü de TEMİZ rapor veriyordu:** — [`D007`](dersler/D007-denetim-var-o-soruyu-soruyor-ayni-gun-uc.md)
- 🔴 **"ÇÖZÜLEMEDİ" DEMEDEN ÖNCE HANGİ KISITIN BAĞLADIĞINI ÖLÇ.** — [`D008`](dersler/D008-cozulemedi-demeden-once-hangi-kisitin.md)
- 📌 **BAZI LİSTELER KUYRUK DEĞİL PENCEREDİR.** — [`D009`](dersler/D009-bazi-listeler-kuyruk-degil-penceredir.md)
- 🔴 **YENİ YAZILAN DENETİM, İKİ YÖNDE DE SINANMADAN "ÇALIŞIYOR" SAYILMAZ.** — [`D010`](dersler/D010-yeni-yazilan-denetim-iki-yonde-de-sinanmadan.md)
- 🔴 **VERİ PENCERESİ İLE KÜNYE PENCERESİ AYRI ŞEYLERDİR — biri BUGÜNKÜ, öteki YARINKİ kusuru bulur.** — [`D011`](dersler/D011-veri-penceresi-ile-kunye-penceresi-ayri.md)
- 🔴 **BİR SÜZGECİ KALDIRMADAN ÖNCE, SÜZGECİN NEYİ KORUDUĞUNU OKU.** — [`D012`](dersler/D012-bir-suzgeci-kaldirmadan-once-suzgecin-neyi.md)
- 🔴 **`C13`ÜN EKSİK AYAĞI: HANGİ YÖNÜN ZORLANACAĞI ÖNCEDEN BİLİNMEZ.** — [`D013`](dersler/D013-c13-un-eksik-ayagi-hangi-yonun-zorlanacagi.md)
- 🔴 **YUVARLAK TARİH YALNIZ YANLIŞ DEĞİLDİR — ÇELİŞKİYİ DE SAKLAR.** — [`D014`](dersler/D014-yuvarlak-tarih-yalniz-yanlis-degildir.md)
- 🔴 **ÖLÇEMEDİĞİNİ ELEYEN BİR SÜZGEÇ, ONU TEMİZ SAYAR.** — [`D015`](dersler/D015-olcemedigini-eleyen-bir-suzgec-onu-temiz.md)
- 🔴 **ORTAK BİR KANALA ÖZEL BİR MESAJ KOYMAK, ONU HERKESE GÖNDERMEKTİR.** — [`D016`](dersler/D016-ortak-bir-kanala-ozel-bir-mesaj-koymak-onu.md)
- 🔴 **BİR DÜZELTME DOĞRU ÇALIŞABİLİR VE SONRAKİ AŞAMA ONU GERİ ALABİLİR — ve ikisi arasındaki boşluk hiçbir denetimin sorusu değildir.** — [`D017`](dersler/D017-bir-duzeltme-dogru-calisabilir-ve-sonraki.md)
- 🔴 **BİR DOSYANIN "VERİ Mİ KOD MU" OLDUĞUNU İÇERİĞİ DEĞİL, ARACIN ONA NASIL DAVRANDIĞI BELİRLER.** — [`D018`](dersler/D018-bir-dosyanin-veri-mi-kod-mu-oldugunu-icerigi.md)
- 🟢 **ÖLÇÜMDEN ÖNCE, HANGİ ÖNGÖRÜNÜN "MAZERETİ OLABİLECEĞİNİ" DE YAZ.** — [`D019`](dersler/D019-olcumden-once-hangi-ongorunun-mazereti.md)
- 🔴 **"SAHİPSİZ"İN İKİ CİNSİ VARDIR VE SINAVI ŞUDUR: KAYNAK KONUŞUYOR MU, SUSUYOR MU?** — [`D020`](dersler/D020-sahipsiz-in-iki-cinsi-vardir-ve-sinavi-sudur.md)
- 🔴 **TEMİZ ÇIKAN BİR ÖRNEKLEM, ÖRNEKLEMİN DIŞINI TEMİZ İLAN ETMEZ.** — [`D021`](dersler/D021-temiz-cikan-bir-orneklem-orneklemin-disini.md)
- 🟢 **ÖNGÖRÜ ÖLÇÜMDEN ÖNCE YAZILIR — SONRA YAZILAN BEKLENTİ AYARLANABİLİR, ÖNCE YAZILAN ÇÜRÜTÜLEBİLİR.** — [`D022`](dersler/D022-ongoru-olcumden-once-yazilir-sonra-yazilan.md)
- 🔴 **KENDİ YAZDIĞIN AYRIŞTIRICI, VAR OLAN BİR AYRIŞTIRICIDAN HER ZAMAN KÖTÜDÜR.** — [`D023`](dersler/D023-kendi-yazdigin-ayristirici-var-olan-bir.md)
- 🔴 **İKİ AYRI KUSUR TEK SATIRDA RAPORLANIRSA, ÇARELERİ TERS OLSA BİLE AYNI ÇARE UYGULANIR — VE DOĞRU VERİ BOZULUR.** — [`D024`](dersler/D024-iki-ayri-kusur-tek-satirda-raporlanirsa.md)
- 🔴 **"ÇÖZÜLEMEDİ"NİN ÜÇÜNCÜ CİNSİ: SIRA BAĞLIYOR OLABİLİR — VE BU, YAPISAL OLANDAN DAHA TEHLİKELİDİR ÇÜNKÜ AYNI GÖRÜNÜR.** — [`D025`](dersler/D025-cozulemedi-nin-ucuncu-cinsi-sira-bagliyor.md)
- 🔴 **BİR KISIT "UYGULANAMADI" DİYE SESSİZ GEÇİLİRSE, UYGULANMIŞ SANILIR.** — [`D026`](dersler/D026-bir-kisit-uygulanamadi-diye-sessiz-gecilirse.md)
- 🟢 **VE NÖBETÇİ İLK GERÇEK YAKALAYIŞINI YAPTI — "KAÇ TANE VAR" DEĞİL "KAÇ TANE YENİ DOĞDU".** — [`D027`](dersler/D027-ve-nobetci-ilk-gercek-yakalayisini-yapti-kac.md)
- 🔴 **BİR ALAN TASARLAMADAN ÖNCE, O ALANIN ZATEN VAR OLUP OLMADIĞINI ÖLÇ — VE VARSA, ONUN NEYLE DOLU OLDUĞUNU DA ÖLÇ.** — [`D028`](dersler/D028-bir-alan-tasarlamadan-once-o-alanin-zaten.md)
- 🔴 **BİR ARACIN VERDİĞİ REÇETE, UYGULANINCA KENDİ TESTİNİ GEÇMEK ZORUNDADIR — GEÇMİYORSA TEŞHİS DOĞRU AMA REÇETE KULLANILAMAZDIR.** — [`D029`](dersler/D029-bir-aracin-verdigi-recete-uygulaninca-kendi.md)
- 🔴 **ATLAS SEFERİ DEĞİL TASARRUFU BOYAR — bir kimliğin TARİHSEL ERİŞİMİ ile HARİTADAKİ GÖVDESİ ayrı şeylerdir.** — [`D030`](dersler/D030-atlas-seferi-degil-tasarrufu-boyar-bir.md)
- 🔴 **EŞİK TEK SAYI DEĞİLDİR: ANLATININ MERKEZİNDEKİ ÇİFT DAHA FAZLASINI HAK EDER — VE GEREKÇESİ VERİDE DEĞİL KRONOLOJİDEDİR.** — [`D031`](dersler/D031-esik-tek-sayi-degildir-anlatinin.md)
- 🔴 **ENGEL KÜMESİ, KAPATILMAK İSTENEN ÇİFTİ İÇERMİYORSA ÇÖZÜM O ÇİFTİ ÇÖZMEZ — VE ÇÖZÜCÜ BUNU SÖYLEMEZ, "ÇÖZDÜM" DER.** — [`D032`](dersler/D032-engel-kumesi-kapatilmak-istenen-cifti.md)
- 🔴 **"ÇÖZÜLEMEDİ"NİN İKİ CİNSİ VARDIR VE AYIRT EDİLMELİ.** — [`D033`](dersler/D033-cozulemedi-nin-iki-cinsi-vardir-ve-ayirt.md)
- 🔴 **BİR BİLGİ İKİ YERDE DURUYORSA, BİRİ GÜNCELLENİNCE ÖTEKİ BAYATLAR — VE HANGİSİNİN OKUNDUĞUNU ALET SÖYLER, GÖZ DEĞİL.** — [`D034`](dersler/D034-bir-bilgi-iki-yerde-duruyorsa-biri.md)
- 🔴 **BİR RAPORDA ÖLÇÜLMÜŞ İLE HATIRLANMIŞ YAN YANA DURURSA, OKUYAN İKİSİNİ DE ÖLÇÜLMÜŞ SANAR — VE YAZAN DA.** — [`D035`](dersler/D035-bir-raporda-olculmus-ile-hatirlanmis-yan.md)
- 🔴 **HÜKÜM İLE TEŞHİS AYRI ŞEYLERDİR — bir raporu kabul etmeden ÖLÇ.** — [`D036`](dersler/D036-hukum-ile-teshis-ayri-seylerdir-bir-raporu.md)
- 🔴 **BİR ALETİN EVRENİ DEĞİŞİNCE, ALET DEĞİŞMEDEN SESSİZCE YANILIR.** — [`D037`](dersler/D037-bir-aletin-evreni-degisince-alet-degismeden.md)
- 🔴 **"ŞU DÜZELTMEYİ YAP" DENİNCE ÖNCE KUSURUN ÜREYİP ÜREMEDİĞİNİ ÖLÇ — ve düzeltmenin HER DALDA doğru olduğunu.** — [`D038`](dersler/D038-su-duzeltmeyi-yap-denince-once-kusurun.md)
- 🔴 **BİR KURALIN YAZILI OLMASI, UYGULANDIĞI ANLAMINA GELMİYOR — ve ihlaller GİDEREK SESSİZLEŞİYOR.** — [`D039`](dersler/D039-bir-kuralin-yazili-olmasi-uygulandigi.md)
- 🔴 **KOORDİNATÖRÜN "HIZLI BİR BAKIŞ" ÖLÇÜMÜ, İŞ DAĞITIMININ TABANI OLUNCA ARTIK HIZLI BİR BAKIŞ DEĞİLDİR** — [`D040`](dersler/D040-koordinatorun-hizli-bir-bakis-olcumu-is.md)
- 🔴 **`-F <dosya>` KULLANMAK YETMİYOR — O DOSYANIN NASIL YAZILDIĞI DA KURALIN İÇİNDE.** — [`D041`](dersler/D041-f-dosya-kullanmak-yetmiyor-o-dosyanin-nasil.md)
- 🔴 **BİR DÜZELTMENİN VERİDE İNMESİ, HARİTADA İNDİĞİ ANLAMINA GELMEZ.** — [`D042`](dersler/D042-bir-duzeltmenin-veride-inmesi-haritada.md)
- 🔴 **ALETİN GÖSTERDİĞİ ≠ DOSYADA YAZAN.** — [`D043`](dersler/D043-aletin-gosterdigi-dosyada-yazan.md)
- 🔴 **BİR ŞİKÂYET, ŞİKÂYET EDİLEN ŞEYDEN DAHA HIZLI BAYATLAR — VE EKRAN GÖRÜNTÜSÜ KENDİ TARİHİNİ TAŞIR.** — [`D044`](dersler/D044-bir-sikayet-sikayet-edilen-seyden-daha-hizli.md)
- 🔴🔴 **"İSTENEN ŞEYİN ALTYAPISI ZATEN VARDI" — BİR GÜNDE BEŞ KEZ.** — [`D045`](dersler/D045-istenen-seyin-altyapisi-zaten-vardi-bir.md)
- 🔴 **BİR DERS VERİYE *SERBEST METİN* OLARAK İNERSE, İNMİŞ SAYILMAZ — VE `grep` ONU "UYGULANMIŞ" GÖSTERİR.** — [`D046`](dersler/D046-bir-ders-veriye-serbest-metin-olarak-inerse.md)
- 🔴 **LOG DA BİR ÇIKTIDIR VE O DA BAYATLAR — VE DOSYA ADI NUMARASI TARİHLE İLGİSİZ.** — [`D047`](dersler/D047-log-da-bir-ciktidir-ve-o-da-bayatlar-ve.md)
- 🔴 **SİLİNEN KODUN MEZAR TAŞI, HAYATTA KALAN KOD HAKKINDA BİR İDDİADIR — VE GÜVEN VERDİĞİ İÇİN KİMSE ONU ÖLÇMEZ.** — [`D048`](dersler/D048-silinen-kodun-mezar-tasi-hayatta-kalan-kod.md)
- 🔴 **BUGÜNÜN EN SIK HATASI TEK BİR SINIFTI: ÖLÇÜM DOĞRU, ÇIKARIM YANLIŞ.** — [`D049`](dersler/D049-bugunun-en-sik-hatasi-tek-bir-sinifti-olcum.md)
- 🔴 **BİR DEFTERİN ANAHTARI KARARSIZSA, DEFTER SESSİZCE YALAN SÖYLER — ve yalanı "gerileme" gibi görünür.** — [`D050`](dersler/D050-bir-defterin-anahtari-kararsizsa-defter.md)
- 🔴 **İKİ AYRI SORUNUN AYNI CEVABI VERMESİ, AYNI SORU OLDUĞU ANLAMINA GELMEZ.** — [`D051`](dersler/D051-iki-ayri-sorunun-ayni-cevabi-vermesi-ayni.md)
- 🔴 **BİR ALET YANLIŞ BİRİM ETİKETİ BASIYORSA, ONA YAZILAN ÖNGÖRÜ ÇÜRÜTÜLEMEZ HÂLE GELİR — NE TUTAR NE ÇÜRÜR, YALNIZ YANILTIR.** — [`D052`](dersler/D052-bir-alet-yanlis-birim-etiketi-basiyorsa-ona.md)
- 🔴 **`C13`ÜN ÜÇÜNCÜ AYAĞI: GİRDİYİ GERÇEK KAYNAĞINDAN OKUMA YOLU DA SINANIR.** — [`D053`](dersler/D053-c13-un-ucuncu-ayagi-girdiyi-gercek.md)
- 🔴 **"ATLASTA YOK" HÜKMÜ, NORMALLEŞTİRİCİSİZ BİR ARAMAYLA VERİLEMEZ — ve bu, `§4`ün Türkçe yazım ekseninin BEŞİNCİ vakası, ilk kez BİR NOKTA PARTİSİNİ durdurdu.** — [`D054`](dersler/D054-atlasta-yok-hukmu-normallestiricisiz-bir.md)
- 🔴 **BİR ÖNGÖRÜ, SINAVININ KOŞULACAĞI ANI DA TARİF ETMELİDİR — damga yetmiyor.** — [`D055`](dersler/D055-bir-ongoru-sinavinin-kosulacagi-ani-da-tarif.md)
- 🟢 **VE BİR ÖNGÖRÜ ÜÇ AYRI CİNSTEN ÇÜRÜR — ÜÇÜNCÜSÜ EN DEĞERLİSİ.** — [`D056`](dersler/D056-ve-bir-ongoru-uc-ayri-cinsten-curur-ucuncusu.md)
- 🟢 **BİR KOD ARGÜMANI, BİR KONTROL KOŞUSUNDAN GENİŞ OLABİLİR — ve 11,5 SAAT KURTARDI.** — [`D057`](dersler/D057-bir-kod-argumani-bir-kontrol-kosusundan.md)
- 🔴 **DOĞRU SONUCU GÜVENİLMEZ YOLDAN VEREN ALET — ve kendini ELE VERMEZ.** — [`D058`](dersler/D058-dogru-sonucu-guvenilmez-yoldan-veren-alet-ve.md)
- 🔴 **BİR HÜKÜM, VERİYE İNMEDİKÇE HÜKÜM DEĞİL BİR METİNDİR.** — [`D059`](dersler/D059-bir-hukum-veriye-inmedikce-hukum-degil-bir.md)
- 🔴🔴 **BİR ALET, ARADIĞI ŞEYİN *NEREDE OLMAYACAĞINI* DA BİLMELİ.** — [`D060`](dersler/D060-bir-alet-aradigi-seyin-nerede-olmayacagini.md)
- 🔴🔴 **KENDİ KURDUĞUN ÖLÇÜM PENCERESİ, GÖRMEDİĞİNİ "YOK" DİYE GÖSTERİR — VE O YOKLUK ÜZERİNE YAZILAN YAMA, GERÇEĞİ SİLER.** — [`D061`](dersler/D061-kendi-kurdugun-olcum-penceresi-gormedigini.md)
- 🔴 **BİR SEVK, TAŞIDIĞI ÖNCÜLÜ DE DOĞRULAMALIDIR — koordinatör tarafı yazılı değildi.** — [`D062`](dersler/D062-bir-sevk-tasidigi-onculu-de-dogrulamalidir.md)
- 🔴 **DOĞRU BİLGİ, ÖLÜ ADRES — `kaynak:` alanının yarım çalışan hâli.** — [`D063`](dersler/D063-dogru-bilgi-olu-adres-kaynak-alaninin-yarim.md)
- 🔴🔴 **BİR ARAMA, ARADIĞI ŞEYİN KAÇ AYRI BİÇİMDE YAZILABİLECEĞİNİ BİLMELİ — BEŞ EKSEN ÖLÇÜLDÜ, BEŞİ DE GERÇEK KAYIP ÜRETTİ.** — [`D064`](dersler/D064-bir-arama-aradigi-seyin-kac-ayri-bicimde.md)
- 🔴 **BİR DÜZELTME SLUGA DEĞİL KAYDA BAKAR — aynı slug iki kayıtta farklı yere gidebilir.** — [`D065`](dersler/D065-bir-duzeltme-sluga-degil-kayda-bakar-ayni.md)
- 🔴 **3 KM BİR YASAK DEĞİL, BİR ŞÜPHE EŞİĞİDİR — ve şartı ZAMAN ÇİZGİLERİNİN FARKLI OLMASIDIR.** — [`D066`](dersler/D066-3-km-bir-yasak-degil-bir-suphe-esigidir-ve.md)
- 🔴 **BİR BEYAN, ARACIN ALAN KÜMESİNDE YOKSA SESSİZCE DÜŞER — VE YAMANIN YARISI İNER, YARISI DÜŞER.** — [`D067`](dersler/D067-bir-beyan-aracin-alan-kumesinde-yoksa.md)
- 🔴 **BİR DÖNGÜDE BAŞARI VARLIKLA, HATA YOKLUKLA BİLDİRİLİRSE HATA GÖRÜNMEZ — VE ÇIKIŞ KODU SON YİNELEMENİNKİDİR.** — [`D068`](dersler/D068-bir-dongude-basari-varlikla-hata-yoklukla.md)
- 🔴 **BİR HÜKÜM DOSYASI BİR ÖLÇÜM DEĞİL, ÖLÇÜMÜN FOTOĞRAFIDIR — ve fotoğraf eskir.** — [`D069`](dersler/D069-bir-hukum-dosyasi-bir-olcum-degil-olcumun.md)
- 🔴🔴 **DOĞRU KAPIYA GİDİP YANLIŞ YERDEN DİNLEMEK — yokluğu TEMİZLİK sanmak.** — [`D070`](dersler/D070-dogru-kapiya-gidip-yanlis-yerden-dinlemek.md)
- 🟢🟢 **BİR DENETİM ADAYI ÖLÇÜLDÜ VE "BUNU YAZMAYIN" DİYE RAPORLANDI — ve ölçen, kovayı AÇAN oturumdu.** — [`D071`](dersler/D071-bir-denetim-adayi-olculdu-ve-bunu-yazmayin.md)
- 🔴 **KIRPILMIŞ BİR ÇIKTI DA BİR ÖLÇÜM DEĞİLDİR.** — [`D072`](dersler/D072-kirpilmis-bir-cikti-da-bir-olcum-degildir.md)
- 🔴🔴 **İKİ KAYNAK ÇELİŞİYOR DEMEDEN ÖNCE, İKİSİNİN AYNI YERDEN BAHSETTİĞİNİ DOĞRULA — ve "X'in idaresi SIRASINDA" bir ZAMAN ifadesidir, bir EGEMENLİK iddiası DEĞİL.** — [`D073`](dersler/D073-iki-kaynak-celisiyor-demeden-once-ikisinin.md)
- 🟢 **ÜÇ BAĞIMSIZ ÖLÇÜT AYNI KÜMEYE YAKINSARSA, BU KÜMENİN *TAM* OLDUĞUNUN KANITIDIR — *DOĞRU* OLDUĞUNUN DEĞİL.** — [`D074`](dersler/D074-uc-bagimsiz-olcut-ayni-kumeye-yakinsarsa-bu.md)
- 🟢 **AYNI DAMGA, FARKLI DAYANAK GÜCÜ — damga GÖRÜNÜR kılar, ama NE KADAR SAĞLAM olduğunu KAYDETMEZ.** — [`D075`](dersler/D075-ayni-damga-farkli-dayanak-gucu-damga-gorunur.md)
- 🔴 **VARLIK ÇAPASI, TASARRUF ÇAPASI DEĞİLDİR — ve atlas tasarruf boyar.** — [`D076`](dersler/D076-varlik-capasi-tasarruf-capasi-degildir-ve.md)
- 🔴🔴 **BİR TUTARSIZLIK BİR TERCİH DEĞİL, BİR EKSİĞİN SONUCU OLABİLİR — ve o zaman "hangisi doğru" SORUSU YANLIŞTIR.** — [`D077`](dersler/D077-bir-tutarsizlik-bir-tercih-degil-bir-eksigin.md)
- 🔴 **BİR YER ADI GÖVDEDE GEÇEBİLİR VE GÖVDE ONU KAPSAMIYOR OLABİLİR — SINIR olarak geçmiştir.** — [`D078`](dersler/D078-bir-yer-adi-govdede-gecebilir-ve-govde-onu.md)
- 🔴 **YETERLİ AMA GEREKLİ OLMAYAN BİR ÖLÇÜT, MALİYETİ FAZLA SAYAR — ve fazla saymak, az saymak kadar bozar.** — [`D079`](dersler/D079-yeterli-ama-gerekli-olmayan-bir-olcut.md)
- 🔴 **BİR İSYANIN VARLIĞI TASARRUFU DEĞİŞTİRMEZ — SONUCU DEĞİŞTİRİR.** — [`D080`](dersler/D080-bir-isyanin-varligi-tasarrufu-degistirmez.md)
- 🔴 **BİR ÖLÇÜT, KARŞILAŞTIRILAN İKİ SEÇENEĞİ AYIRT ETMİYORSA, CEVABI "EVET" OLSA BİLE SORU YANLIŞ SORULMUŞTUR.** — [`D081`](dersler/D081-bir-olcut-karsilastirilan-iki-secenegi-ayirt.md)
- 🔴🔴 **EŞANLAM BORCUNUN ÜÇÜNCÜ EKSENİ: KAYNAK VERİSİNİN KENDİSİ BOZUK OLABİLİR — ve normalleştirici onu ÇÖZEMEZ.** — [`D082`](dersler/D082-esanlam-borcunun-ucuncu-ekseni-kaynak.md)
- 🔴 **İDARÎ DEVİR, SAHİPLİK DEĞİŞİMİ DEĞİLDİR — ve atlas sahiplik çizer.** — [`D083`](dersler/D083-idari-devir-sahiplik-degisimi-degildir-ve.md)
- 🟢 **KOMŞUSUNUN KULLANDIĞI GÜNÜ KULLANMAK, KENDİ GÜNÜNÜ SEÇMEKTEN DAYANAKLIDIR.** — [`D084`](dersler/D084-komsusunun-kullandigi-gunu-kullanmak-kendi.md)
- 🔴 **BİR ÇARENİN MALİYETİ, BEKLENEN EKSENDE OLMAYABİLİR — ve yanlış eksenden bakan tahmin onu yanlış fiyatlar.** — [`D085`](dersler/D085-bir-carenin-maliyeti-beklenen-eksende.md)
- 🟢 **BİR KUSURUN YAPISAL SEBEBİNİ BULMAK, ONUN YAYGINLIĞINI DA SÖYLER.** — [`D086`](dersler/D086-bir-kusurun-yapisal-sebebini-bulmak-onun.md)
- 🟢 **ELENEN BİR ADAYIN GEREKÇESİ, SONRADAN BULUNAN VERİYLE ÖLÇÜLEBİLİR HÂLE GELEBİLİR.** — [`D087`](dersler/D087-elenen-bir-adayin-gerekcesi-sonradan-bulunan.md)
- 🟢🟢 **YAZILI OLMAYAN BİR KONVANSİYON, ANCAK ONA UYMAYAN BİR KAYIT ÇAKIŞINCA GÖRÜNÜR OLUR — ve o zaman "kusur mu" sorusu YANLIŞTIR.** — [`D088`](dersler/D088-yazili-olmayan-bir-konvansiyon-ancak-ona.md)
- 🔴🔴 **VERİ MODELİNİN İFADE EDEMEDİĞİ BİR İLİŞKİYİ, EDEBİLDİĞİ BİR İLİŞKİYE ÇEVİRMEK — YAKLAŞIKLAMA DEĞİL, BAŞKA BİR İDDİADIR.** — [`D089`](dersler/D089-veri-modelinin-ifade-edemedigi-bir-iliskiyi.md)
- 🟢 **BİR SLUG'I TAHMİN ETME — KAYNAĞIN KENDİ BAĞLANTISINI OKU.** — [`D090`](dersler/D090-bir-slug-i-tahmin-etme-kaynagin-kendi.md)
- 🟢🟢 **UZUN BİR KOŞUDA CANLILIĞIN ÜÇÜNCÜ SİNYALİ: CPU DELTASI — ve ötekilerin çözemediği belirsizliği O çözer.** — [`D091`](dersler/D091-uzun-bir-kosuda-canliligin-ucuncu-sinyali.md)
- 🟢🟢 **"ÇELİŞKİ" SANILAN ŞEYİN BEŞ MEKANİZMASI — bir gecede beşi de ölçüldü, ve BEŞİNDE DE ÇELİŞKİ ÇIKMADI.** — [`D092`](dersler/D092-celiski-sanilan-seyin-bes-mekanizmasi-bir.md)
- 🔴🔴 **"ADIYLA ANIYOR" İLE "TARİHLİYOR" AYNI ŞEY DEĞİLDİR — ve gövdedeki TEK tarih BAŞKA BİR POLITY'ye ait olabilir.** — [`D093`](dersler/D093-adiyla-aniyor-ile-tarihliyor-ayni-sey.md)
- 🔴 **BİR MÜKERRER KURALI HEP MEVCUDU KAYIRIYORSA, MEVCUDUN HATASINI DA KORUR.** — [`D094`](dersler/D094-bir-mukerrer-kurali-hep-mevcudu-kayiriyorsa.md)
- 🔴🔴 **BİR GLOB BİR AD SÖZLEŞMESİDİR: DOSYANIN ADI ONUN CİNSİNİ İLÂN EDER — ve yanlış ad, dosyayı YANLIŞ ALETE teslim eder.** — [`D095`](dersler/D095-bir-glob-bir-ad-sozlesmesidir-dosyanin-adi.md)
- 🔴🔴 **KAYNAK BULUNAMIYORSA, ÖNCE ARANAN ŞEYİN DOĞRU OLDUĞUNU DOĞRULA — bir devir kaydı VARLIĞI ile GÜNÜ yanlış eşleştirmiş olabilir.** — [`D096`](dersler/D096-kaynak-bulunamiyorsa-once-aranan-seyin-dogru.md)
- 🔴 **"MÜKERRER" GEREKÇESİ İKİ SINIF SAKLAYABİLİR — VE BİRİ SESSİZ BİR SEÇİMDİR, ÖLÇÜTÜ DOSYA OKUMA SIRASI.** — [`D097`](dersler/D097-mukerrer-gerekcesi-iki-sinif-saklayabilir-ve.md)
- 🔴 **BİR HÜKMÜ VERMEK İLE UYGULAMAK AYRI YETKİLERDİR — ve `§7` UYGULAYANI belirler.** — [`D098`](dersler/D098-bir-hukmu-vermek-ile-uygulamak-ayri.md)
- 🔴🔴 **BİR ARTEFAKT HİÇBİR ALETİN GLOB'UNA GİRMİYORSA, YAPILMAMIŞ OLMAKLA AYNI SONUCU VERİR — ve hiçbir denetim ötmez.** — [`D099`](dersler/D099-bir-artefakt-hicbir-aletin-glob-una.md)
- 🔴🔴 **İZLENEBİLİRLİK, DOĞRULANMIŞLIKTAN ÖNCE GELİR — çünkü izlenebilir olan sonradan doğrulanabilir, doğrulanmış ama izlenemeyen bir daha sınanamaz.** — [`D100`](dersler/D100-izlenebilirlik-dogrulanmisliktan-once-gelir.md)
- 🟢 **BİR DAMGA, BİR HÜKMÜN DAYANAĞI OLABİLİR.** — [`D101`](dersler/D101-bir-damga-bir-hukmun-dayanagi-olabilir.md)
- 🟢 **BİR DAVRANIŞ KASITLI OLABİLİR VE YİNE DE EKSİK OLABİLİR — kusur DAVRANIŞTA değil, olmayan bir ÖLÇÜTTEDİR.** — [`D102`](dersler/D102-bir-davranis-kasitli-olabilir-ve-yine-de.md)
- 🟢 **İÇERİK ÖLÇÜTÜ BİR SAYIM DEĞİL: "SINANABİLİR ÖĞE" SAYMAK YETMEZ, ÖĞENİN YENİ BİLGİ TAŞIYIP TAŞIMADIĞI SORULUR.** — [`D103`](dersler/D103-icerik-olcutu-bir-sayim-degil-sinanabilir.md)
- 🔴 **BİR CÜMLE İKİ KAYIT ARASINDA TAŞINIRKEN KAYNAĞINI DA TAŞIR — yoksa hakemli bir kaydın içine adsız bir iddia girer.** — [`D104`](dersler/D104-bir-cumle-iki-kayit-arasinda-tasinirken.md)
- 🔴🔴 **BİR REFERANS, ÖLÇTÜĞÜ ŞEYİN YANINDA DURMALI — BEYANIN YANINDA DEĞİL.** — [`D105`](dersler/D105-bir-referans-olctugu-seyin-yaninda-durmali.md)
- 🔴 **DAMGA BİR İDDİAYI NE MEŞRULAŞTIRIR NE DÜZELTİR — YALNIZ GÖRÜNÜR KILAR.** — [`D106`](dersler/D106-damga-bir-iddiayi-ne-mesrulastirir-ne.md)
- 🔴 **"BULUNAMADI" · "ÖLÇÜLEMEDİ" · "OKUMADIM" — ÜÇ AYRI DAMGA.** — [`D107`](dersler/D107-bulunamadi-olculemedi-okumadim-uc-ayri-damga.md)
- 🔴 **VE BİR DÜZELTME, YANLIŞ UYGULANIRSA DOĞRU VERİYİ BOZAR — "ÇEK" KOVASI ŞART TAŞIR.** — [`D108`](dersler/D108-ve-bir-duzeltme-yanlis-uygulanirsa-dogru.md)
- 🔴 **TDV TUZAK LİSTESİNE ALTINCI: CANLI YÖNLENDİRME KÜTÜĞÜ.** — [`D109`](dersler/D109-tdv-tuzak-listesine-altinci-canli.md)
- 🔴🔴 **TDV TUZAK LİSTESİNE YEDİNCİ: TAKVİM — VE TDV KENDİ İÇİNDE KARIŞIK KULLANIYOR.** — [`D110`](dersler/D110-tdv-tuzak-listesine-yedinci-takvim-ve-tdv.md)
- 🔴 **BİR DEVLETİN KRONOLOJİSİNE, TARAF OLMADIĞI BİR OLAY YAZILMAZ.** — [`D111`](dersler/D111-bir-devletin-kronolojisine-taraf-olmadigi.md)
- 🔴🔴 **BİR KAYNAĞIN MARKASI, ONUN PROVENANSI DEĞİLDİR — aynı alan adı bugün hem imzalı madde hem YZ ÜRETİMİ ÖZET sunuyor.** — [`D112`](dersler/D112-bir-kaynagin-markasi-onun-provenansi.md)
- 🟢 **VE HASSASİYETİ DÜŞÜRMEK BİLGİYİ SİLMEZ — DAYANAĞINI GÖRÜNÜR KILAR.** — [`D113`](dersler/D113-ve-hassasiyeti-dusurmek-bilgiyi-silmez.md)
- 🔴 **BİR BULGUNUN SAHİBİ, BULGUNUN KENDİSİ KADAR KAYITTIR.** — [`D114`](dersler/D114-bir-bulgunun-sahibi-bulgunun-kendisi-kadar.md)
- 🔴🔴 **YAYIN, VERİNİN BEŞ PARTİ GERİSİNDE — VE HİÇBİR DENETİM BUNU SORMUYORDU.** — [`D115`](dersler/D115-yayin-verinin-bes-parti-gerisinde-ve-hicbir.md)
- 🔴 **ÇOK PARÇALI BİR İLİŞKİYİ TEK SAYIYA İNDİREN ÖLÇÜ, KUSURU ALT SINIR OLARAK GÖSTERİR.** — [`D116`](dersler/D116-cok-parcali-bir-iliskiyi-tek-sayiya-indiren.md)
- 🟢 **AYNI SAYININ TEKRAR ETMESİ, İLK ÖNCE ALETTEN ŞÜPHELENDİRİR.** — [`D117`](dersler/D117-ayni-sayinin-tekrar-etmesi-ilk-once-aletten.md)
- 🔴 **GİZLİ BİR SEKMEDE YAPILAN HER TARAYICI ÖLÇÜMÜ «YOK» DER — VE «YOK» BİR SONUÇ SANILIR.** — [`D118`](dersler/D118-gizli-bir-sekmede-yapilan-her-tarayici.md)
- 🔴 **AYNI RENGİ İKİ ALET FARKLI HARMANLIYOR — VE BİRİ EKRANDA OLMAYAN BİR RENGİ ÖLÇÜYOR.** — [`D119`](dersler/D119-ayni-rengi-iki-alet-farkli-harmanliyor-ve.md)
- 🟢 **AÇIK KALEM KAPANDI: "10 ÇAKIŞMA" BİR YAMA KUSURU DEĞİL, GERÇEKTİ — VE KÖK SEBEP ÇÖZÜCÜNÜN PAY BIRAKMAMASI.** — [`D120`](dersler/D120-acik-kalem-kapandi-10-cakisma-bir-yama.md)
- 🔴🔴 **KOMŞULUK BİR İPUCUDUR, KANIT DEĞİLDİR — VE BİR KİMLİĞİ ATAMAK İÇİN DELİL ARARKEN ATAMAMAK İÇİN DELİL ÇIKABİLİR.** — [`D121`](dersler/D121-komsuluk-bir-ipucudur-kanit-degildir-ve-bir.md)
- 🟢🟢 **İKİ OTURUM, AYNI GECE, KENDİ MANŞET SAYISINI ÇÜRÜTTÜ — VE İKİSİ DE KABUL ÖLÇÜTÜNÜ KARŞILADIKTAN SONRA.** — [`D122`](dersler/D122-iki-oturum-ayni-gece-kendi-manset-sayisini.md)
- 🔴🔴🔴 **İÇ TUTARLILIK, DOĞRULAMA DEĞİLDİR — yanlış bir taban, üzerine kurulan her ölçümü yanlış ama UYUMLU yapar.** — [`D123`](dersler/D123-ic-tutarlilik-dogrulama-degildir-yanlis-bir.md)
- 🔴 **AYNI KELİME İKİ AYRI ŞEYİ ANLATIYORSA, BİRİNİ ÖLÇEN ÖTEKİNİ ÖLÇTÜĞÜNÜ SANIR — `KUYRUK` vakası.** — [`D124`](dersler/D124-ayni-kelime-iki-ayri-seyi-anlatiyorsa-birini.md)
- 🔴 **BİR REGEX'İN GÖRMEDİĞİ YAZIM BİÇİMİ ÖLÇÜLDÜ: `t:"` 1285 kayıt · `t: "` 14 kayıt — ve ikisi 2 dosyada toplanmış.** — [`D125`](dersler/D125-bir-regex-in-gormedigi-yazim-bicimi-olculdu.md)
- 🟢 **BİR AYRIŞTIRICI KUSURU BULUNDUĞUNDA, ONUNLA ÖLÇÜLEN HER SAYI AYNI ÖLÇÜDE KİRLENMEZ — DELTA TEMİZ KALIRKEN MUTLAK SAYI KİRLENEBİLİR.** — [`D126`](dersler/D126-bir-ayristirici-kusuru-bulundugunda-onunla.md)
- 🔴 **BİR ORANI BAŞKA BİR KATMANA TAŞIMAK, O KATMANIN KENDİ YAPISINI YOK SAYAR — ve iki yönde birden yanılabilir.** — [`D127`](dersler/D127-bir-orani-baska-bir-katmana-tasimak-o.md)
- 🟢 **TAŞIMANIN GETİRDİĞİ İLE ZATEN ORADA OLANI AYIRMAK — yoksa taşımaya haksız yüklenir.** — [`D128`](dersler/D128-tasimanin-getirdigi-ile-zaten-orada-olani.md)
- 🔴 **BİR EŞİK, ÖLÇÜLDÜĞÜ TABANLA BİRLİKTE TAŞINIR — taban değişince eşik geçersizleşir ve YENİDEN TÜRETİLMEDEN kullanılamaz.** — [`D129`](dersler/D129-bir-esik-olculdugu-tabanla-birlikte-tasinir.md)
- 🟢🟢 **İKİ ÖLÇÜMÜN ORANLARININ ORANI, FARKIN SEBEBİNİ VEREBİLİR.** — [`D130`](dersler/D130-iki-olcumun-oranlarinin-orani-farkin.md)
- 🔴 **`mtime` BİR ÖLÇÜM DEĞİL BİR DAMGADIR — içerik değişmeden değişir.** — [`D131`](dersler/D131-mtime-bir-olcum-degil-bir-damgadir-icerik.md)
- 🔴 **BİR KONTROL DEĞİŞKENİ SORULURKEN YANLIŞ EKSEN SEÇİLEBİLİR — ve cevap "temiz" çıkarsa yanlış eksen hiç görünmez.** — [`D132`](dersler/D132-bir-kontrol-degiskeni-sorulurken-yanlis.md)
- 🔴 **ÇAKIŞMA, DOSYANIN BÜYÜKLÜĞÜNDEN DEĞİL, BAŞKALARININ ZATEN YAZDIĞI TOPRAĞA DOKUNMASINDAN DOĞAR.** — [`D133`](dersler/D133-cakisma-dosyanin-buyuklugunden-degil.md)
- 🟢 **VE 17 ÇAKIŞMA 17 SORU DEĞİLDİ — DÖRT.** — [`D134`](dersler/D134-ve-17-cakisma-17-soru-degildi-dort.md)
- 🔴🔴 **BİR UYARININ BEKLENDİĞİNİ YAZMAK, GELEN UYARININ O OLDUĞUNU GÖSTERMEZ — ve öngörü "tuttu" sanıldığı için kimse bakmaz.** — [`D135`](dersler/D135-bir-uyarinin-beklendigini-yazmak-gelen.md)
- 🔴 **"HER EKSENDE TEMİZ" DEMEK, SAYDIĞIN EKSENLERDE TEMİZ DEMEKTİR.** — [`D136`](dersler/D136-her-eksende-temiz-demek-saydigin-eksenlerde.md)
- 🔴🔴 **BİR SEVKTE ADAY TARİH SAYMAK, İŞÇİYE KAYNAKSIZ BİR ÇERÇEVE VERMEKTİR — ve adaylar MAKUL olduğu için tuzak görünmez.** — [`D137`](dersler/D137-bir-sevkte-aday-tarih-saymak-isciye.md)
- 🔴🔴 **BİR YÖNTEM EMEKLİ EDİLMİŞ OLABİLİR VE YERİNE GELEN ALET ULAŞILAMAZ OLABİLİR — o zaman herkes emekli yönteme döner, ve bilmediğinden değil MECBUR OLDUĞUNDAN.** — [`D138`](dersler/D138-bir-yontem-emekli-edilmis-olabilir-ve-yerine.md)
- 🔴🔴 **BİR ŞEMADA `b:` ALANI `t:`DEN SONRA GELİYORSA, `t:`DEN GERİYE ARAMAK HEP BİR ÖNCEKİ KAYDIN ALANINI BULUR — ve uydurma bir manşet üretir.** — [`D139`](dersler/D139-bir-semada-b-alani-t-den-sonra-geliyorsa-t.md)
- 🟢🟢 **BİR EŞLEŞTİRİCİNİN DOĞRULUĞU, İSABET ORANINI ADAY KÜMESİNİN BÜYÜKLÜĞÜYLE İLİŞKİLENDİREREK SINANIR — İKİSİ BİRLİKTE ARTIYORSA ÖLÇÜLEN ŞEY İÇERİK DEĞİL ANAHTAR UZAYIDIR.** — [`D140`](dersler/D140-bir-eslestiricinin-dogrulugu-isabet-oranini.md)
- 🔴 **BİR KOŞU SÜRESİ TAHMİNİ, ÖLÇÜLDÜĞÜ GİRDİ BÜYÜKLÜĞÜYLE BİRLİKTE TAŞINIR — ve fırlatıcının kendi kaydı bir TAHMİNDEN iyidir ama TABANSIZ okunursa yanıltır.** — [`D141`](dersler/D141-bir-kosu-suresi-tahmini-olculdugu-girdi.md)
- 🔴🔴 **BİR İDDİAYI AKTARIRKEN YOLU "NORMALLEŞTİRMEK" ONU ÇÜRÜTEBİLİR — ve sonra kendi normalleştirmeni ölçüp karşı tarafı haksız çıkarırsın.** — [`D142`](dersler/D142-bir-iddiayi-aktarirken-yolu-normallestirmek.md)
- 🔴🔴 **AYNI İŞİ YAPAN İKİ ZİNCİR BETİĞİ VARSA, DÜZELTME YALNIZ BİRİNE İNER — ve hangisinin koştuğu ANCAK SÜREÇTEN ölçülür.** — [`D143`](dersler/D143-ayni-isi-yapan-iki-zincir-betigi-varsa.md)
- 🔴🔴 **BEYAN EDİLEN KAYNAK, İDDİAYI TAŞIMIYOR OLABİLİR — ve hiçbir denetim bunu sormuyor.** — [`D144`](dersler/D144-beyan-edilen-kaynak-iddiayi-tasimiyor.md)
- 🔴 **YUVARLAK BİR TARİH YALNIZ HASSASİYETİ DEĞİL, BORÇLARI DA BİRLEŞTİRİR — bir madde sayacı kapatır, borcu kapatmaz.** — [`D145`](dersler/D145-yuvarlak-bir-tarih-yalniz-hassasiyeti-degil.md)
- 🔴 **BİR GÖVDEYİ İLK `BİBLİYOGRAFYA`DA KESMEK, ÇOK BÖLÜMLÜ TDV MADDESİNİN %79'UNU ATABİLİR.** — [`D146`](dersler/D146-bir-govdeyi-ilk-bibliyografya-da-kesmek-cok.md)
- 🔴🔴 **`DEĞİŞMEZ 2`NİN "KAPALI" HÜKMÜ, O GÜNÜN BÜTÜN GEÇİŞLERİNİN ANLATILDIĞI ANLAMINA GELMEZ — YALNIZ** — [`D147`](dersler/D147-degismez-2-nin-kapali-hukmu-o-gunun-butun.md)
- 🔴🔴 **VE SINIFIN EN AĞIR ÜYESİ: KAYNAK AYNI ŞEYİ** — [`D148`](dersler/D148-ve-sinifin-en-agir-uyesi-kaynak-ayni-seyi.md)
- 🔴🔴 **SÜZGEÇ GÖRÜNÜR ELER, İZDÜŞÜM SESSİZ KIRPAR — ve bir aletin hangisini yaptığı sorulmadan alan kapsaması ölçülemez.** — [`D149`](dersler/D149-suzgec-gorunur-eler-izdusum-sessiz-kirpar-ve.md)
- 🔴🔴 **BAYAT BİR KABUL ÖLÇÜTÜ, YANLIŞ SEBEPTEN GEÇER — ve geçtiği için kimse ona bakmaz.** — [`D150`](dersler/D150-bayat-bir-kabul-olcutu-yanlis-sebepten-gecer.md)
- 🔴🔴 ~~ **BİR DÖNEMİN `kaynak:`I ÇOĞU ZAMAN ONU BAŞLATAN OLAYIN KAYNAĞIDIR; BİTİREN OLAYINKİ DEĞİL** — [`D151`](dersler/D151-bir-donemin-kaynak-i-cogu-zaman-onu-baslatan.md)
- 🔴 **MİRAS ALINMIŞ BİR ÖZNİTELİK, BİR BEYAN DEĞİLDİR — ona karşı ölçmek, kaydın hiç yapmadığı bir iddiayı sınamaktır.** — [`D152`](dersler/D152-miras-alinmis-bir-oznitelik-bir-beyan.md)
- 🔴🔴 **BİR EVRENİN YARISINDAN ÇOĞU TEK BİR ÜYEDEYSE, RASTGELE ÖRNEKLEM EVRENİ DEĞİL O ÜYEYİ ÖLÇER — ve sonuç "ölçüldü" diye kaydedilir.** — [`D153`](dersler/D153-bir-evrenin-yarisindan-cogu-tek-bir-uyedeyse.md)
- 🟢 **`§7.1⑤b` TEK TARAFLIYDI — TAHTA ARIZASININ İKİ CİNSİ VAR, VE ARACIN "TEKRAR YAZMA" TALİMATI BİRİNDE DOĞRU ÖTEKİNDE YANLIŞ.** — [`D154`](dersler/D154-7-1-b-tek-tarafliydi-tahta-arizasinin-iki.md)
- 🔴 **BİR KORUMA ÇAPASI, BELGEDE ZATEN GEÇEN BİR İFADEYSE, BETİK "ZATEN VAR" DEYİP SESSİZCE HİÇBİR ŞEY YAPMAZ.** — [`D155`](dersler/D155-bir-koruma-capasi-belgede-zaten-gecen-bir.md)
- 🔴🔴 **BİR SAYIM BİRİMİ YANLIŞSA, ÖLÇÜM VERİYİ DEĞİL VERİNİN YAPISINI ÖLÇER — ve gecenin üç bulgusu da bu tek kökten çıktı.** — [`D156`](dersler/D156-bir-sayim-birimi-yanlissa-olcum-veriyi-degil.md)
- 🔴 **BİR KATEGORİ ŞİŞMEYİ AÇIKLAMAZ — ŞİŞMEYİ *TOPLU ATAMA* AÇIKLAR, ve ikisi karıştırılırsa çare yanlış yere gider.** — [`D157`](dersler/D157-bir-kategori-sismeyi-aciklamaz-sismeyi-toplu.md)
- 🟢🟢 **KAPSAYICI MADDE, DAR MADDENİN İFADE EDEMEDİĞİ** — [`D158`](dersler/D158-kapsayici-madde-dar-maddenin-ifade-edemedigi.md)
- 🔴 **BÜYÜK/KÜÇÜK HARF DUYARSIZ ALT-DİZGİ ARAMASI, BİR ADI BAŞKA BİR KELİMENİN İÇİNDE BULUR — ve "geçiyor ama ilgisiz" diye raporlanır.** — [`D159`](dersler/D159-buyuk-kucuk-harf-duyarsiz-alt-dizgi-aramasi.md)
- 🔴🔴 **BİR SINIFTA OTOMATİK SINAV NE GEVŞETİLEREK NE SIKILAŞTIRILARAK DOĞRU ÇALIŞABİLİR — ve bunu ancak ÇAREYİ DE SINAYARAK öğrenirsin.** — [`D160`](dersler/D160-bir-sinifta-otomatik-sinav-ne-gevsetilerek.md)
- 🟢🟢 **BİR DENETİM ŞARTNAMESİNİN EN DEĞERLİ SATIRI, NE ÖLÇTÜĞÜ DEĞİL** — [`D161`](dersler/D161-bir-denetim-sartnamesinin-en-degerli-satiri.md)
- 🔴🔴 **BİR CÜMLEYİ ALINTILAMADAN ÖNCE** — [`D162`](dersler/D162-bir-cumleyi-alintilamadan-once.md)
- 🔴 **BİR SÖZLÜKTE OLMAYAN SINIF, VERİDE** — [`D163`](dersler/D163-bir-sozlukte-olmayan-sinif-veride.md)
- 🔴 **BİR KOORDİNATÖR, OKUDUĞUNDAN HIZLI SEVK EDERSE İKİ KUSUR ÜRETİR: MÜKERRER İŞ VE HAKSIZ SORU.** — [`D164`](dersler/D164-bir-koordinator-okudugundan-hizli-sevk.md)
- 🔴🔴 **BİR ÖN-SINAV, SORDUĞU RİSKLERDE TEMİZ ÇIKIP EN BÜYÜK RİSKİ HİÇ SORMAMIŞ OLABİLİR — ve "mekanik" damgası onu kapatır.** — [`D165`](dersler/D165-bir-on-sinav-sordugu-risklerde-temiz-cikip.md)
- 🔴🔴 **BİR MERGE ADIMININ ÖN KOŞULU, O ADIMIN KENDİ GİRDİSİNDEN TÜRETİLEMEZ — ÖNCEKİ ADIMLARDAN SONRAKİ DURUMDAN türetilir.** — [`D166`](dersler/D166-bir-merge-adiminin-on-kosulu-o-adimin-kendi.md)
- 🔴 **BİR ÖLÇÜMÜN BİR EKSENİNİ DÜZELTMEK, ÖTEKİ EKSENİNİ BOZABİLİR — ve düzeltilmiş sürüm "daha doğru" sanıldığı için ikisi birden kabul edilir.** — [`D167`](dersler/D167-bir-olcumun-bir-eksenini-duzeltmek-oteki.md)
- 🟢🟢 **BİR MEKANİZMANIN ÇALIŞTIĞINI, ÇALIŞMASAYDI** — [`D168`](dersler/D168-bir-mekanizmanin-calistigini-calismasaydi.md)
- 🔴 **KAPSAYICI MADDE HER ZAMAN EN İYİ ADRES DEĞİLDİR — bazen günü KOMŞU ÜLKENİN maddesi verir.** — [`D169`](dersler/D169-kapsayici-madde-her-zaman-en-iyi-adres.md)
- 🟡 **UZUN BİR KOŞUDA DÖRDÜNCÜ SİNYAL: BELLEK SALINIMI — ve sınırı ÖNCEDEN yazılmalı.** — [`D170`](dersler/D170-uzun-bir-kosuda-dorduncu-sinyal-bellek.md)
- 🔴🔴 **HER KAYDI TEK TEK DOĞRU BULAN DENETİMLER, KAYITLAR ARASINDAKİ TUTARSIZLIĞI GÖRMEZ — ve toplu bir yama tam o boşlukta kusur üretir.** — [`D171`](dersler/D171-her-kaydi-tek-tek-dogru-bulan-denetimler.md)
- 🔴🔴 **BİR ALETİN CEVABI DOĞRU OLABİLİR VE SORDUĞU SORU YETERSİZ OLABİLİR — ve bunu ancak İKİNCİ BİR ALET gösterir.** — [`D172`](dersler/D172-bir-aletin-cevabi-dogru-olabilir-ve-sordugu.md)
- 🔴 **BİR LİSTEDE OLMAYAN ŞEY, ELENMİŞ OLANDAN AYIRT EDİLEMEZ — eleme GEREKÇESİ ölçülmedikçe.** — [`D173`](dersler/D173-bir-listede-olmayan-sey-elenmis-olandan.md)
- 🔴 **AYRI BİR REALM'DE KOŞAN VERİDE `instanceof` SESSİZCE FALSE DÖNER — ve bu kusuru GERÇEK VERİ GÖSTEREMEZ.** — [`D174`](dersler/D174-ayri-bir-realm-de-kosan-veride-instanceof.md)
- 🟢🟢 **`§7` AD ALANI DERSİ İLK KEZ ÖNLEYİCİ İŞLEDİ — çakışma OLMADAN ÖNCE.** — [`D175`](dersler/D175-7-ad-alani-dersi-ilk-kez-onleyici-isledi.md)
- 🔴🔴 **UYGULANMAMIŞ BİR YAMA İKİ GEÇERLİ «ŞİMDİ» YARATIR — ve bir sayı hangisine ait olduğu yazılmadan taşınırsa İKİ TARAF DA HAKLI ÇIKAR.** — [`D176`](dersler/D176-uygulanmamis-bir-yama-iki-gecerli-simdi.md)
- 🟢🟢 **BİR İŞÇİ, KOORDİNATÖRÜN DÜZELTMESİNE UYMAYARAK HAKLI OLABİLİR — ve `§7.1` bunun nasıl olacağını yazmıyordu.** — [`D177`](dersler/D177-bir-isci-koordinatorun-duzeltmesine.md)
- 🔴🔴 **BAYATLAYAN BİR BELGE, YALNIZ KENDİSİNİ DEĞİL ONU KOPYALAYAN BRİFİNGİ DE BAYATLATIR — ve zinciri kimse izlemez.** — [`D178`](dersler/D178-bayatlayan-bir-belge-yalniz-kendisini-degil.md)
- 🟢🟢 **BİR EŞİĞİ SABİT SAYI DEĞİL İLİŞKİ OLARAK YAZMAK, TABAN TAŞIMA PROBLEMİNİ YÖNETMEZ — ORTADAN KALDIRIR.** — [`D179`](dersler/D179-bir-esigi-sabit-sayi-degil-iliski-olarak.md)
- 🔴🔴 **PENCERE UCU BİR SORGU GÜNÜ OLARAK KULLANILAMAZ — ve cevabı SESSİZDİR.** — [`D180`](dersler/D180-pencere-ucu-bir-sorgu-gunu-olarak.md)
- 🔴🔴 **BİR DENETİM BİR VERİ DEĞERİNE BAĞLANIRSA, VERİ O DEĞERİ TERK ETTİĞİNDE SESSİZCE ÖLÜR — «denetim var ≠ o soruyu soruyor» DEĞİL, «denetim VARDI, ARTIK SORMUYOR».** — [`D181`](dersler/D181-bir-denetim-bir-veri-degerine-baglanirsa.md)
- 🔴🔴 **BİR KORUMA, ONU UYGULAYAN YAMADA DEĞİL, YAMAYI UYGULAYAN ARAÇTA DURMALIDIR.** — [`D182`](dersler/D182-bir-koruma-onu-uygulayan-yamada-degil-yamayi.md)
- 🔴🔴 **ÖKSÜZLEŞMİŞ ÖNGÖRÜ — ne tutmuştur, ne çürümüştür: YOKTUR.** — [`D183`](dersler/D183-oksuzlesmis-ongoru-ne-tutmustur-ne.md)
- 🔴 **BİR SINIFLANDIRICININ KÖR NOKTASINI DÜZELTMEK, YENİ BİR KÖR NOKTA AÇAR — VE İKİSİ FARKLI YERDE OLUR.** — [`D184`](dersler/D184-bir-siniflandiricinin-kor-noktasini.md)
- 🔴 **BİR AD ARAMASI İKİ YÖNE DE YANILIR — VE «TAMAMLANDI» YÖNÜ DAHA PAHALIDIR.** — [`D185`](dersler/D185-bir-ad-aramasi-iki-yone-de-yanilir-ve.md)
- 🔴 **ELLE YAZILAN BİR TARİH, BİR GLOB'UN İÇİNDE BİR SON KULLANMA TARİHİDİR — ve geçtiğinde alet SESSİZCE HİÇBİR ŞEY YAPMAZ.** — [`D186`](dersler/D186-elle-yazilan-bir-tarih-bir-glob-un-icinde.md)
- 🔴🔴 **BOŞ BİR KÜME HER ÖNGÖRÜYÜ DOĞRULAR — ve alet `✓` basar.** — [`D187`](dersler/D187-bos-bir-kume-her-ongoruyu-dogrular-ve-alet.md)
- 🔴 **«SAYIYI BİLİYORUM ≠ SAYININ NEYE GÖRE OLDUĞUNU BİLİYORUM» — BEŞİNCİ EKSEN: KÜME.** — [`D188`](dersler/D188-sayiyi-biliyorum-sayinin-neye-gore-oldugunu.md)
- 🟢 **VE AYNI TURDA ÖLÇÜLEN BİR SAYI, ÖNCÜL TUTSAYDI HİÇ ÖLÇÜLMEYECEKTİ:** — [`D189`](dersler/D189-ve-ayni-turda-olculen-bir-sayi-oncul.md)
- 🔴🔴 **AYNI AD, TERS ANLAM — `savaslar.js`in dört kardeş kümesinde `t` bir yerde BAŞLANGIÇ, bir yerde BİTİŞ.** — [`D190`](dersler/D190-ayni-ad-ters-anlam-savaslar-js-in-dort.md)
- 🔴 **«BİR `if` İLE SORULABİLİYOR MU» YETMİYOR — SORUYU SORACAK `if` YAZILMIŞ MI?** — [`D191`](dersler/D191-bir-if-ile-sorulabiliyor-mu-yetmiyor-soruyu.md)
- 🔴🔴 **BİR ALET YANLIŞ BİR *SIRA* ÜRETEBİLİR — ve sıra, değerden daha sessiz yalan söyler.** — [`D192`](dersler/D192-bir-alet-yanlis-bir-sira-uretebilir-ve-sira.md)
- 🔴 **KÜNYE AŞIMI HEP SONRASINI SORAR, ÖNCESİNİ HİÇ SORMAZ — ve ölçülünce %8,9 çıktı.** — [`D193`](dersler/D193-kunye-oncesi-kullanim-sadece-sonrasi.md)
- 🔴 **BİR DÜZELTME KOMŞU DİLİMİ GÖRÜNMEZ BIRAKABİLİR — düzeltmenin KENDİSİ kör nokta üretti.** — [`D194`](dersler/D194-bir-duzeltme-komsu-dilimi-gorunmez.md)
- 🔴🔴 **`t:` ALANI İKİ ANLAMA GELİYOR — "devlet bitti" ve "atlasın penceresi bitiyor" — ve kayıtta ikisi AYRIŞTIRILAMIYOR.** — [`D195`](dersler/D195-t-alani-iki-anlama-geliyor.md)
- 🔴 **YANLIŞ OLAY SEÇİLMİŞ — tarih doğru, metin doğru, ama tarih KOMŞU bir olayın günü.** — [`D196`](dersler/D196-yanlis-olay-secilmis-komsu-olayin-gunu.md)
- 🔴🔴 **RSS YANLIŞ SİNYALDİ — aynı bant hem sağlıklı hem ölümcül olabiliyor, bir gecede ÜÇ yönden.** — [`D197`](dersler/D197-rss-yanlis-sinyaldi-uc-yonden.md)
- 🔴 **BİR KOŞUNUN ÇIKTISI ALETİN HÂLİNE BAĞLIDIR — "koşu bitti" YAYININ İNDİĞİ AN DEĞİLDİR.** — [`D198`](dersler/D198-yayin-inene-kadar-alet-donuk.md)
