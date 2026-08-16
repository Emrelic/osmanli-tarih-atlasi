# HAZIR KITA 21 — ARAYÜZ KORİDOR · ilerleme

**Görev** `oturumlar/ARAYUZ-KORIDOR.md` · **Dosyalarım** `index.html` · `js/app.js` · `css/style.css`
**Tarih** 16 Ağustos 2026 · **Önceki görevim** `KRONOLOJI-KIRILMA` (bitti, `HAZIR-KITA-21-ILERLEME.md`)

---

## BİTİŞ ÖLÇÜTÜ — şartnamenin §⑧ istediği cümle

> **3 koridor dosyası bağlandı · 80 düğüm 64 kenar çiziliyor · zaman süzgeci
> sınavı 11/11 GEÇTİ · `denetle_yayin`de kalan koridor uyarısı: 0**

⚠️ Ve bir de **gizlemediğim yarım kalem** var — aşağıda §④.

---

## ① NE YAPTIM

```
index.html   koridor_halka2.js + koridor_f5c9a5.js script satırı (damga r1859, DEĞİŞTİRİLMEDİ)
             "🐎 Koridor ağı" düğmesi → ☰ Butonlar menüsüne, Veri sınırı deseninde
js/app.js    KORIDOR toplayıcı + koridorKur() + koridorGuncelle(t) + aç/kapa
             ve AYRICA: OLAYLAR süzgeç kusuru (§③ — ayrı iş, aynı dosya)
css/style.css  .koridor-popup · .koridor-uyari · .koridor-kaynak
```

## ② ÜÇ ŞART — üçü de karşılandı, üçü de SINANDI

**① KORİDOR SINIR DEĞİL, YOL.** Kehribar (`#c8861a`) **noktalı** çizgi
(`line-dasharray:[0.4, 2.2]`, `line-cap:"round"` → menzil boncuğu gibi okunuyor).
Karışabileceği üç katmanın hiçbirine benzemiyor:
```
sınır çizgileri  DÜZ · kırmızı (#8e0b22 ailesi)
motor hatları    KESİKLİ · camgöbeği + turuncu
veri sınırı      UZUN KESİK · gri-mavi #5b6b7a
koridor          NOKTALI · kehribar            ← yeni
```

**② ZAMAN ÇERÇEVESİNE UY.** Süzgeç kenarın **kendi `f`/`t`**'sini okuyor;
tarih koda **gömülmedi**. Sınav 11 kesitte koşuldu, **11/11 geçti**:
```
1281 · 1400 · 1489      0 kenar   ✓ ANAKRONİZM YOK
1490 · 1538             3 kenar   ✓ yalnız Habsburg ayağı
1539 · 1600 · 1838     64 kenar   ✓ Osmanlı menzili 61 + Habsburg 3
1839 · 1900             3 kenar   ✓ menzil kalktı, Habsburg sürüyor
1923-10-29              0 kenar   ✓
```

🔴 **VE BU SINAV ÖNCE "KIRMIZI" VERDİ — kusur kodda değil BENİM BEKLENTİMDEYDİ.**
İlk sürüm *"1539-1839 dışında hiç kenar olmamalı"* diyordu ve 1500/1900'de üç
kenar bulup **ANAKRONİZM** dedi. Ölçtüm:
```
koridor_halka2.js · Komárom→Yanıkkale→Bratislava→Viyana
f:1490-01-01  t:1923-10-29
⇒ AYRI BİR KURUM: Habsburg posta ağı (Schobesberger v.d., BRILL
  doi 10.1163/9789004277199_003 — 1490 Innsbruck/Viyana-Brüksel hattı)
```
📌 **Şartname *"menzil 1539-1839"* diyor ve HAKLI — ama veri İKİ AĞ taşıyor.**
Tarihi koda gömseydim (şartnamenin harfi öyle okunabilirdi) Habsburg ayağının
üç kenarını **yanlış kırpardım** ve kaynağı BRILL olan bir hattı silerdim.
Veriden okuduğum için ikisi de doğru çiziliyor.
⇒ **Ölçüm doğruydu, çıkarım yanlıştı — ve çıkarımı yapan bendim** (`B10`).

**③ KAYNAKSIZ DURAK GÖRÜNÜR OLSUN.** Ayrım **tıklamayı beklemiyor**, ekranda:
```
kaynaklı  41 durak  →  İÇİ DOLU kehribar daire
kaynaksız 39 durak  →  İÇİ BOŞ (beyaz) daire, kehribar çember
```
Tıklanınca açılan kartta ayrıca cümleyle: *"Bu durak SEÇİLMİŞTİR, kaynaktan
alınmamıştır… uydurulmadı ama seçildi — ikisi ayrı şeydir."*
Hatlarda da `saat_cinsi` ayrımı korundu: *"arşivden ölçüldü"* ile *"kuş uçuşu
km'den türetildi — ölçülmüş değil"* ayrı yazılıyor.

---

## 🔴 ③ ŞARTNAMENİN GÖRMEDİĞİ İKİ ŞEY — ikisi de ölçüldü

### (a) Borç şartnamede yazılandan BÜYÜKTÜ
```
şartname   "koridor_halka2.js + dört kol daha — app.js OKUMUYOR"
ölçüm      grep -in koridor js/app.js  →  SIFIR SONUÇ
```
`koridor.js` **13 Ağustos'tan beri `index.html`de bağlıydı ve hiç
çizilmiyordu.** İş *"iki dosya bağla"* değil **"katmanı sıfırdan yaz"**dı.
📌 Ve `index.html:408`in kendi yorumu bunu zaten söylüyordu:
*"app.js bunu HENÜZ ÇİZMİYOR."* Uyarı vardı, kimse saymamıştı.

### (b) 🔴 AYNI GÜN, AYNI SINIF, BAŞKA DOSYA: `OLAYLAR_7A4170` ÇİZİLMİYORDU
Kabul kapısı ① (`denetle_yayin.py`) **benim önceki teslimimi** ele verdi:
```
OLAYLAR_7A4170   data/olaylar_7a4170.js   app.js OKUMUYOR
```
Sebep `js/app.js:2419` idi: `/^OLAYLAR(_EK\d*)?$/`. Dosya yükleniyordu,
`denetle.py` glob'la okuyordu (`Değişmez 2` gerçekten 0), **ama app.js listeye
katmıyordu** ⇒ dört madde kullanıcıya görünmüyordu.
```
data/ içindeki OLAYLAR globali   18
eski süzgeç kabul                17   → 1219 madde
yeni süzgeç kabul                18   → 1223 madde
```
Süzgeç **adlandırmadan bağımsız** hâle getirildi ve `C13` gereği **iki yönde**
sınandı:
```
GEÇME    eski 17'nin 17'si hâlâ kabul · SIRA korundu ✓
ATEŞLEME (zorla) dizi olmayan global elendi ✓ · "OLAYLARDIS" elendi ✓
```
🟢 **Ve tarayıcıda CANLI doğrulandı: `olaylar.length === 1223`.**

📌 **Ders:** *elle listeyi desenle değiştirmek listeyi yok etmez, **desenin
içine saklar**.* `app.js:2404`ün *"EK17 bağlandığında BU SATIRA dokunmaya
gerek YOK"* cümlesi bir **varsayım** taşıyordu; `KRONOLOJI-KIRILMA.md §⓪`
adlandırmayı `olaylar_<UUID6>.js` diye değiştirince varsayım çöktü ve
**sessizce** çöktü. Koridor süzgecini bu yüzden kolun **adına** değil
**biçimine** bağladım.

---

## 🟡 ④ YARIM KALAN — gizlemiyorum, ve benim dosyamda DEĞİL

```
düğüm  113 kayıt → 86 koordinatlı → 80 tekil (6 mükerrer, ör. Belgrad iki dosyada)
       27 KOORDİNATSIZ  (26'sı koridor.js `tip:"menzil-eslesmedi"`, 1'i bağlantı ucu)
kenar  107 kayıt → 64 çizilebilir
       43 ÇİZİLEMİYOR   (bir ucu koordinatsız)  = %40
```
⇒ **Kenarların %40'ı haritaya inemiyor** ve sebebi arayüz değil **veri**:
`koridor.js` menzil listesindeki 26 durağı yerleşim verisiyle eşleştirememiş
(`tip:"menzil-eslesmedi"`, `lat:null`). Bu benim dosyam değil, `data/`.
🟢 Sessizce düşürmedim: sayı hem konsola basılıyor hem burada yazılı.

---

## ⑤ KABUL KAPISI — dördü geçti, ikisi ORTAM YÜZÜNDEN KOŞULAMADI

| # | ölçüt | sonuç |
|---|---|---|
| ① | `denetle_yayin.py` koridor kalemi | **12 → 9 · koridor 3 kalem SIFIR** ✓ (kalan 9 kalem BAŞKA oturumların) |
| ② | `node --check js/app.js` | **TEMİZ** ✓ |
| ③ | `py arac/bayt_denetle.py` | **kontrol baytı 0 · çıkış 0** ✓ |
| ④ | git | ilerleme dosyam commit'li · üç kaynak dosyası 🔴 KOORDİNATÖRDE (aşağıda) |
| ⑤ | tarayıcı + konsol hatası | 🟡 **KOŞULAMADI** — sebebi aşağıda |
| ⑥ | 1281 görünmez / 1600 görünür | 🟡 **GÖZLE koşulamadı** · **mantık olarak 11/11 geçti** |

### 🟡 ⑤/⑥ NİÇİN KOŞULAMADI — ve niçin bu benim kusurum DEĞİL
```
harita.isStyleLoaded()   false
harita.getStyle()        null · katman sayısı 0
haritaHazir              false
screenshot               "the Browser pane is not displayed, so the page is
                          not compositing frames"
```
⇒ Tarayıcı paneli görüntülenmediği için sayfa **kare üretmiyor**; MapLibre
stili hiç yüklenmiyor. Sonuç: **HİÇBİR katman yok** — `osmanli` · `veri-siniri`
· `sefer-*` dâhil, yani benden önce var olanlar da. ⇒ Bu bir **ortam sınırı**,
kod kusuru değil.

🟢 **Buna rağmen tarayıcıda ÖLÇÜLENLER:**
```
data/koridor_halka2.js?v=r1859   → HTTP 200 OK
data/koridor_f5c9a5.js?v=r1859   → HTTP 200 OK
6 KORIDOR globali window'da       ✓
btn-koridor DOM'da                ✓
olaylar.length                    1223   ← OLAYLAR düzeltmesi CANLI DOĞRULANDI
```
⇒ `index.html` işi **kanıtlandı**; çizim işi **mantık düzeyinde** kanıtlandı,
**gözle** kanıtlanmadı. İkisini ayrı yazıyorum çünkü ayrı şeyler.

---

## ⑤b TESLİMDEN SONRA BİR SAVUNMA DEĞİŞİKLİĞİ — ve niçin ÖLÇÜLMEDEN yapıldı

Teslimden sonra kendi kodumu ⑤'in ışığında yeniden okudum: **`addLayer`
bu ortamda hiç koşmadı**, yani paint ifadelerim **hiç doğrulanmadı**.
Riskli olan satır şuydu:
```js
"circle-radius": ["case", ["get", "kaynakli"], 4.2, 4.6]
```
MapLibre'nin ifade denetçisi `case` koşulunda **boolean** ister; `["get", …]`
ise `value` tipi döndürür ve bazı sürümlerde **"Expected boolean but found
value"** ile `addLayer`ı düşürür. Yani katman **hiç kurulmayabilirdi.**

**Ölçmeye çalıştım, ölçemedim** — üçü de denendi:
```
① gerçek harita              stil hiç yüklenmiyor (panel kompozit etmiyor)
② BOŞ stille deneme haritası ağ istemeyen {version:8,sources:{},layers:[]}
                             bile `load` ATMADI ⇒ addLayer denenemedi
③ maplibregl namespace       56 anahtar, halka açık ifade doğrulayıcı YOK
                             (yalnız `Style`, doğrulama API'si değil)
```
⇒ **Kumar oynamak yerine belirsizliği kaldırdım:**
`["==", ["get","kaynakli"], true]` her sürümde boolean döndürür ve iki hâlde
de doğrudur. Deneme haritası da temizlendi, sayfaya sızıntı bırakılmadı.

📌 Bu, bu projenin *"ölçülemedi ≠ temiz"* kuralının uygulanışı: ölçemediğim
bir davranışı *"herhalde çalışır"* diye bırakmak, dördüncü kovayı **temiz**
diye raporlamak olurdu. Değişiklik `node --check` ile sınandı (TEMİZ) ve
koridor mantık sınavı yeniden koşuldu (**11/11**, 41/39 durak ayrımı aynı).
⚠️ Ve bu satır bir **kanıt değil**: paint ifadelerinin gerçekten kabul edildiği
hâlâ **ÖLÇÜLMEDİ.** Panel açıldığında ilk bakılacak şey budur.

## 🔴 ⑥ KOORDİNATÖRDE — bir çelişki, bir onay

**(a) COMMIT ÇELİŞKİSİ.** Şartnamem §④ üç kaynak dosyasını *"SENİN"* diyor ve
kabul kapısı ④ *"commit'li mi"* diye soruyor. Ama `CLAUDE.md §7` işçi
oturumun **yalnız `oturumlar/` altındaki kendi dosyasını** commit
edebileceğini, `js/` dâhil her şeyin Oturum 0'da olduğunu söylüyor.
⇒ **Tek taraflı karar vermedim.** İlerleme dosyamı commit ettim; `index.html`
· `js/app.js` · `css/style.css` **commit'siz duruyor.** Hangisi geçerli, söyle.

**(b) SÜRÜM DAMGASI.** Yeni iki satırı mevcut damgayla (`r1859`) yazdım —
şartname §④ öyle emrediyor. Yayına çıkarken `arac/surum_damgala.py`
koşturulmalı, yoksa kullanıcı önbellekten eski `app.js`i görür ve
**koridor da OLAYLAR düzeltmesi de görünmez.**
