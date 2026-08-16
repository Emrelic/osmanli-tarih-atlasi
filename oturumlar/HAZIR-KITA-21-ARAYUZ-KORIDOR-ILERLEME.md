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

## 🟢 ⑤c PANEL AÇILDI — ⑤ KAPANDI, ⑥'nın YARISI KAPANDI

Emre tarayıcı panelini açtı ve kapının tıkalı ayakları koşuldu. **Ölçülenler:**
```
harita.isStyleLoaded()   true          (önce false idi)
haritaHazir              true
katman sayısı            36
koridor-kenar-cizgi      VAR ✓         koridor-dugum-daire  VAR ✓
KORIDOR                  80 düğüm · 64 kenar · atlanan 27/43
olaylar.length           1223
```
🟢 **VE ⑤b'DEKİ AÇIK SORU KAPANDI:** iki koridor katmanı da **gerçekten
kuruldu** ⇒ `addLayer` paint ifadelerimi **kabul etti.** Savunmaya alınmış
`["==", ["get","kaynakli"], true]` biçimi çalışıyor. (Eski `["case",["get",…]]`
biçiminin reddedilip reddedilmeyeceği **hâlâ ölçülmedi** — gerek de kalmadı.)

**Konsol (kapı ⑤):**
```
[log] Atlas: koridor ağı — 80 düğüm · 64 kenar kuruldu
      (koordinatsız atlanan: 27 düğüm, 43 kenar)      ← kendi satırım, ötüyor
app.js kaynaklı HATA: YOK
```
⚠️ Konsolda iki `error` duruyor ama **ikisi de benim probe betiğimden**
(`at <anonymous>`), harita yüklenmeden önce `getLayoutProperty` çağırmıştım.
`app.js` satırı taşıyan tek bir hata yok. **Kendi gürültümü bulgu diye
raporlamıyorum.**

**Ekran görüntüsüyle doğrulananlar:**
```
✓ harita çiziliyor, gövdeler boyalı
✓ kronoloji başlığı "2 / 1223 başlık"   ← OLAYLAR düzeltmesi ARAYÜZDE
✓ ☰ Butonlar menüsünde "🐎 Koridor ağı" düğmesi, öteki dört katmanla
  AYNI desende (Dizin · Coğrafya · Motor hatları · Veri sınırı)
```

### 🟡 ⑥ HÂLÂ YARIM — ve tam olarak neyin eksik olduğunu yazıyorum
Düğmeye 1281'de tıkladım; **tıklamanın sonucunu göremeden oturum sınırı geldi**
ve panel yeniden kapandı (`preview_start` sunucuyu yeniden başlattı,
`isStyleLoaded()` tekrar `false`).
```
KAPANDI    katman kuruluyor · düğme yerinde · konsol temiz · veri sayıları tuttu
EKSİK      1281'de koridor GÖRÜNMÜYOR / 1600'de GÖRÜNÜYOR — GÖZLE, ekran
           görüntüsüyle. Mantık sınavı bunu 11/11 veriyor ama GÖZ DEĞİL.
```
📌 Ve bu ayrımı koruyorum: *"mantık geçti"* ile *"gözle görüldü"* aynı şey
değil, ve bu projede tam olarak o farktan kusur çıktı (`OLAYLAR_7A4170`
yükleniyordu, denetim okuyordu, **ekranda yoktu**).

## 🔴 ⑤d İKİNCİ İŞ — M-0534, VE BANA HİÇ ULAŞMAMIŞTI

M-0579 *"adres tuzağının yedinci vakası"*nı duyurunca kendi kutumu taradım:
**koordinatörün bana yazdığı üç mesaj yanlış adrese gitmiş.**
```
M-0265  VERİ ZAMAN 2 → kime='KADEME-ARAP-IRAN'   gövde: "DOSYASI olaylar_7a4170.js OLAN OTURUMA"
M-0280  VERİ ZAMAN 2 → kime='KADEME-ARAP-IRAN'   (M-0265'in düzeltmesi)
M-0534  KOORDINATOR  → kime='DOSYASI INDEX.HTML OLAN OTURUM'   ← EMİR, BANA
```
🟢 İlk ikisi zararsız kaldı: dört kırılmanın dökümünü **beklemeyip kendim
ölçmüştüm** (`denetle.py --ayrinti`). Beklemiş olsaydım iş hiç başlamazdı.
📌 *"Tahtadan al"* talimatını üreteçle değiştirmek, o gün bir tercih gibi
görünüyordu; bugün **kayıp bir mesajın telafisi** olduğu görüldü.

### M-0534'ÜN İSTEDİĞİ — yapıldı
```
index.html'e DÖRT satır (yerlesimler_amerika.js'in ALTINA):
  yerlesimler_ek30.js · yerlesimler_ek31.js
  yerlesimler_0ee15e.js · yerlesimler_e9353f.js
yerlesimler_8beb2b.js  EKLENMEDİ
```
**B10 — koordinatörün her sayısını kendim ölçtüm:**
```
8beb2b "dizi BOŞ"        →  YERLESIMLER_8BEB2B = 0 kayıt · 10399 bayt (hepsi yorum) ✓
"62 nokta"               →  EK30 23 + EK31 6 + 0EE15E 4 + E9353F 29 = 62 ✓ BİREBİR
"girdi.py 48 dosya"      →  48 ✓
```

### 🟢 ④ BİRLEŞTİRME SINAVI — *"yüklemek birleştirmek değildir"*
Koordinatör haklı olarak *"ölçerek bak"* dedi. Ölçtüm:
```
dört yeni global de birleştirmeye KATILDI ✓
  YERLESIMLER_EK30 · _EK31 · _0EE15E · _E9353F
sebebi: index.html:394 zaten DESEN kullanıyor (/^YERLESIMLER_/ + isArray),
        elle liste değil — 11 Ağustos'ta kaldırılmış
```
**İKİ KAPI ARTIK EŞİT:**
```
girdi.py (motor)      48 dosya · 2589 nokta
index.html (tarayıcı) 48 dosya · 2589 nokta
FARK                   0 dosya ·    0 nokta
```

### ⚠️ VE BU ÖLÇÜMDE KENDİ HATAMI YAKALADIM
İlk sayımım *"tarayıcı 1796, motor 2589 — 793 fark"* dedi ve bunu **gerçek bir
boşluk sandım.** Sebep: `index.html`in birleştirmesi bir **TOHUM**la başlıyor
(`(window.YERLESIMLER || []).slice()` — yani `yerlesimler.js`in kendi 793
noktası) ve ben yalnız `YERLESIMLER_` önekli olanları toplamıştım.
⇒ Boşluk yoktu; **ölçütüm eksikti.** Bildirseydim var olmayan bir kusuru
tahtaya sokacaktım.

### 🔴 VE BİR KUSUR: KENDİ YORUMUM DENETİMİ KIRDI
Eklediğim HTML yorumunda betik etiketini **açık yazmıştım**. `denetle_yayin.py`
satır içi blokları regex'le ayıklıyor ve onu **gerçek bir etiket sandı**:
```
✗ inline SÖZDİZİMİ: 2 blokta 1 HATA — window.YERLESIMLER HİÇ atanmıyor olabilir
```
Yorum, **anlattığı şeyi yazarak** denetimi kırdı. Etiket adı metinden
çıkarıldı, denetim düzeldi (`✓ 1 blok temiz`).
📌 Bu, `§11`in *"kaçış içeren metin araçtan geçmez"* ailesinin **yorum**
tarafı: zararsız sandığım bir açıklama, aracın girdi dilinde **veri**ydi.

### ÖLÇÜM — `denetle_yayin.py` "ÇİZİLMİYOR"
```
önce   12 kalem     (koridor 3 · OLAYLAR_7A4170 · KADEME×4 · YERLESIMLER×4 · BEKLEYENLER)
sonra   1 kalem     BEKLEYENLER — benim dosyam DEĞİL
```

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
