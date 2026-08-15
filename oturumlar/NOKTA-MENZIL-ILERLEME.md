<!-- DURUM: CALISIYORUM | 2026-08-16 | HALKA 2 AVUSTURYA KOLU yazildi (koridor_halka2.js · 11 dugum · 10 kenar · kirik uc 0) · index.html satiri KOORDINATORDE · BULGU: koridor agi hic cizilmiyor -->

## ③ HALKA 2 · AVUSTURYA KOLU — tahta M-0099 ile alındı

**Teslim:** `data/koridor_halka2.js` — 11 düğüm · 10 kenar · 632,7 km
Belgrad → Varadin → Ösek → Mohaç → Şimontorna → Budin → Estergon ‖
Komárom → Yanıkkale → Bratislava → **Viyana**

### Doğrulama — JS yorumlayıcısıyla (kendi ayrıştırıcım DEĞİL)
```
kenar uçları tanımlı        10/10
tek parça mı                belgrad'dan ulaşılan 11/11 · KIRIK UÇ 0
çift boyama                 YOK (belgrad koridor.js'te boyar=true, bende false)
saat/km tutarlılık (4,25)   sapma 0
TDV aralığı (3-28 saat)     dışında kalan 0
```

### 🟢 TDV zaman çerçevesini doğruladı — `menzil--osmanli`
Kuruluş **1539**, kaldırılış **1839**, menziller arası **"üç saatten yirmi
sekiz saate kadar"**. ⇒ `koridor.js`'in kullandığı tarihler doğrulandı, ve
benim on kenarımın türetilmiş saatleri (8,9-22,9) o aralığın **içinde**.

### 🔴 Güzergâh kaynaksız — damgalandı, gizlenmedi
TDV üç ana koldan söz ediyor ama **duraklarını saymıyor**; `budin` maddesi
de yolu anlatmıyor. Duraklar veride var olan yerleşimlerden ve Tuna boyu
ordu yolundan **seçildi**. Hepsi `kesinlik:3` + `kaynak:"bulunamadı"`.
**Uydurulmuş durak yok; seçilmiş duraklar var ve fark budur.**

### ⚠️ İki hız karıştırılmadı
Osmanlı ulağı ~120 km/gün (4,25 km-sa kalibrasyonu) · Habsburg postası
**150 km/gün** (BRILL). Bütün `saat` değerleri koridor.js'in kendi
kalibrasyonuyla türetildi; 150 km/gün ayrı bir ölçü olarak **karıştırılmadı**.
Farkın sebebi ölçülmedi.

### 🔴 Sınırın yerini VERİ söyledi
Osmanlı ayağı **Estergon**'da biter, Habsburg ayağı **Komárom**'da başlar —
çünkü Komárom Osmanlı eline hiç geçmedi (dün ölçüldü). Temas kenarı ayrı
damgalandı: `kalinlik:"tali"`, *"bu bir posta hattı değil, bir temastır"*.

### 🔴🔴 YOLDA ÖLÇÜLEN BULGU — koridor ağı HİÇ ÇİZİLMİYOR
```
index.html:406   <script src="data/koridor.js?v=r1452">      YÜKLÜ
grep "KORIDOR_DUGUM|KORIDOR_KENAR" js/ index.html        →   0 sonuç
grep -ril "koridor" js/                                  →   0 dosya
```
65 düğüm · 64 kenar tarayıcıya yükleniyor ve **hiçbir kod okumuyor.**
⚠️ Ölçüm bu; çıkarım ayrı: *"henüz yapılmadı"* mı *"yapıldı ve bozuldu"* mu
**ölçmedim.** `js/` ve `index.html` benim dosyam değil, dokunmadım.
# NOKTA MENZİL — ilerleme

**Oturum:** `local_dc1f5720-f6a1-4891-a08a-e22c1fe02da4`
**Tahta anahtarı:** `OPUS HAZIR KITA 6` (yeni adım NOKTA MENZİL, ikisi aynı oturum)
**Görev:** [oturumlar/NOKTA-MENZIL.md](NOKTA-MENZIL.md) · tahta `M-0082`
**Yazdığım dosyalar:** `data/yerlesimler_ek29.js` · bu dosya

---

## ⓪ IS 0 — yazmadan önce ölçüldü

Taban **2500 nokta**, `girdi.yukle()` ile okundu (kendi ayrıştırıcım değil).
28 hedefin her biri için **25 km yarıçap** taraması, **koordinatla — adla değil.**

```
ZATEN VAR (<=3 km) :  1   ⇒ yazılmayacak
YAKIN (3-25 km)    :  3   ⇒ tek tek karar
YOK (>25 km)       : 24   ⇒ yazılacak
```

### 🔴 İki bulgu — ikisi de şartnameyi düzeltiyor (tahta `M-0084`)

**① `yerlesimler_ek27.js` YENİ DEĞİL.** 12 Ağustos'ta yazılmış, 5 nokta
taşıyor (Artvin · Hopa · Mersin · İskenderun), `girdi.py`ye **bağlı**, ve
başka bir oturumun teslimi (`d466c60`). ek28 de dolu; ek numaraları 2..28
kesintisiz. ⇒ **`yerlesimler_ek29.js`** yazıyorum. Şartnamenin niyeti
*"YENİ ve benim olan dosya"*ydı; ek29 o tarife uyuyor.

**② Hedef 28 değil 27.** `Firecik` veride **zaten var**:
`Ferecik (Feres)` (40,8970 / 26,1720), **0,59 km**. Şartnamenin kendi ⑤②
uyarısı (*"kayıt başka yazımla olabilir"*) şartnamenin kendi listesinde
ateşledi.

### 🟡 Üç kalem yakın çıktı — karar koordinatörde
```
Üsküdar    en yakın "İstanbul"  3,4 km   ← 3 km eşiğinin hemen dışında
Praviște   en yakın "Kavala"   13,8 km
Lanzaka    en yakın "Selanik"  16,0 km
```
Üsküdar ayrı bir soru: menzil ağının **başlangıç durağı**, ama İstanbul
noktası Boğaz'ın Avrupa yakasında. Üç şık soruldu, önerim (A) yaz.

### 🟢 Ad tuzağı yakalandı ve elendi
`Aşkale` araması **`Başkale`** getirdi — 355 km ötede, Van'da. Koordinatörün
*"Hasan Çelebi → Hâş"* vakasının aynısı; **koordinatı bastığım için görüldü.**

---

## ① GYULAFEHÉRVÁR — YAZILDI ✅ `1/1`

`data/yerlesimler_ek29.js` · **`Erdel Belgradı (Gyulafehérvár)`** ·
46,0678 / 23,5800 · `k:2`

**Ad:** TDV `belgradcik` maddesi Osmanlıca adı verdi — *"Erdel'deki
(Transilvanya) **Erdel Belgradı**'ndan (Alba Julia) ayırt edilmek için
Belgradcık şeklinde anılmıştır."* Proje geleneği Osmanlıca-önce
(`Ahılkelek (Akhalkalaki)`).

**Dönemler** — kardeş nokta `Erdel (Kaloşvar)` ile **birebir**. Gün
uydurulmadı; kutudaki mevcut kırılma günleri ölçülüp kullanılanlar seçildi:
```
1526-09-01  (kutuda 18 kayıt)      1541-08-29  (12 kayıt)
1687-08-12  ( 4 kayıt)             1918-11-11 · 1923-10-29
```
Üçünün de kronolojide karşılığı var ⇒ **Değişmez 2 açılmıyor.**
Dönemler kesintisiz, boşluk yok ⇒ **Değişmez 1 temiz.**

### 🔴 `d:"erdel"` YAZILMADI — kasıtlı
`erdel` künyesi **var**, rengi **yok** (`M-0021`). `§8`: BOYALAR'da
tanımsız kimlik **boyanmaz** ⇒ yazsaydım 158 yıllık prensliği **beyaz**
bırakırdım. Zincirin sırası bağlayıcı: **RENK önce.** Bugün kardeş nokta
gibi jenerik `v:` kullanıldı; RENK 3 rengi yazdıktan **sonra** iki `v:`
dönemi `s:[{d:"erdel"}]` ile değiştirilebilir.

### 🔴 Kaynak çelişkisi — bildirdim, düzeltmedim
```
TDV `erdel`   "1697'de Erdel'i de işgal ettiler" · "1699 Karlofça ile
              Erdel Avusturya'ya terkedildi"
VERİDE        1687-08-12  (kardeş nokta Kolozsvár)
fark          10-12 YIL
```
`§4` TDV'yi birincil sayar, ama mevcut kaydı değiştirmek yetkim değil ve
kardeşiyle tutarsız bir nokta haritayı ikiye böler. ⇒ **Tutarlılığı
seçtim, çelişkiyi bildirdim.** Karar koordinatörün.

### ⚠️ Başkentlik DOĞRULANAMADI
TDV `erdel` Alba Julia'yı *"belli başlı şehirler"* arasında sayıyor ama
**başkent olduğunu yazmıyor** — taneciklik boşluğu (`§4`). Başkentlik
hükmü şartnameden geldi; ben TDV'de doğrulayamadım ve *"doğruladım"* diye
yazmadım. Noktanın yazılması için başkentlik şartı yok: koordinat ve
sahiplik dönemi yeter.

---

## ② TESLİM — 27/27 TAMAM ✅
```
Macaristan merkezleri   10/10  ✅
menzil durakları        17/17  ✅
TOPLAM                  27/27
```

### 🟢 KABUL ÖLÇÜTÜ — şartname ⑧, projenin kendi denetimiyle
```
py arac/denetle.py        SONUÇ: temiz · EXIT 0
Değişmez 1                2527 yerleşim · 196 sahipsiz (beklenen 202) — ARTMADI
Değişmez 1b               pencere arası boşluk: 0
Değişmez 2                506 kırılma · 0 AÇIK        ← 27 noktanın hiçbiri açmadı
mükerrer madde            0 şüpheli çift
konum / kara maskesi      0 nokta dışarıda
ek29 girdi.py'ye BAĞLI    ✓ 44 girdi dosyası
```
📌 **Değişmez 2'nin 0 kalması yöntemin sınavıydı:** 27 noktanın hiçbirinde
gün uydurmadım, hepsi çekirdeğin zaten kullandığı günlere yaslandı. Tek bir
uydurma gün olsaydı bu satır açılırdı.

### ÜSKÜDAR — Emre'nin doğrudan talimatıyla, ve TDV üçünü de doğruladı
```
① fetih   "1329'da ... Pelekanon Savaşı'nda ... Üsküdar'ın da Osmanlılar'ın
           kontrolü altına girdiği tahmin edilir"  ⇒ 1329-06-01, Gebze'de VAR
② menzil  "İstanbul'dan Anadolu'ya açılan yolların başlangıç ... noktası"
           ⇒ şartnamenin bu noktayı istemesinin gerekçesi TDV'de yazılı
③ idarî   "Koca-ili (İzmit) sancağına bağlı Gebze kazası içinde ... kadılık
           merkezi"  ⇒ k:3, ve kardeş seçimi Gebze — kolaylık değil, idarî gerçek
```
İstanbul'a **3,39 km** — 3 km eşiğinin üstünde, ihlal yok.

### Kendi denetimim — bağlanmadan ÖNCE, üç soru
```
① Değişmez 1  boşluk taraması        26/26 KESİNTİSİZ    (Karlovac kur:1579'dan)
② §8          kullanılan 22 kimlik   22/22 RENGİ VAR     harita deliği 0
③ 3 km        en yakın çift          13,83 km (Praviște-Kavala)  ihlal 0
yorum nöbetçisi                       TEMİZ
```

### Yöntem — 16 menzil durağının hiçbirinde gün UYDURMADIM
Her durak için **en yakın mevcut noktaların zaman çizgisi ölçüldü** ve o
çizgi izlendi. Sebep Değişmez 2: uydurulmuş bir kırılma günü kronolojide
karşılıksız olduğu için denetimi **açar**; komşunun günü zaten maddeli.
📌 Ve bu kolaycılık değil — menzil durağı bağlı olduğu kazanın kaderini
paylaşır, ayrı bir siyasî birim değildir.

### 🟢 TDV'den gelen iki kesin bilgi
```
uyvar          "sekiz idarî bölge: Uyvar, Narhid, Barş, Komaran, Hond,
                NİTRA, Jabokrek ve Şele"      ⇒ Nitra Osmanlı sancağı, k:2
               fetih 1663 · geri alış "19 Ağustos 1685" — ikisi de veride VAR
sebinkarahisar "878'de (1473) aldı" (Otlukbeli sonrası) · "müstakil sancak
                haline getirildi ve Erzurum beylerbeyiliğine bağlandı" ⇒ k:2
```

### 🔴 YAZMADIKLARIM — ve her birinin sebebi yazılı
```
Komárom `d:`   TDV sancak listesinde "Komaran" VAR ama KALE hiç düşmedi
               ⇒ §11 "atlas seferi değil TASARRUFU boyar". İdarî iddia ≠ gövde.
Léva `d:`      TDV `uyvar` sancak listesinde Léva GEÇMİYOR + 1664 için
               veride kırılma günü yok ⇒ uydurma gün Değişmez 2'yi açardı
Sisak `d:`     1593 sonrası kısa tutuş anlatısı TDV'de doğrulanamadı
Silivri 1390-1403  Osmanlı dönemi ve 1403 iadesi — günleri veride yok
Ilgın 1832     Konya'nın Kavalalı dönemi Ilgın için doğrulanamadı
Lanzaka 1403-30  Selanik'in Bizans/Venedik devri ŞEHRE ait, iç bölgeye değil
```
Hepsinde `kaynak:` alanı **`bulunamadı`** yazılı — boş bırakılmadı.

### 🔴 ÖLÇTÜĞÜM BİR BOŞLUK — Kuzey Dobruca
Babadağı ve İshakçı'nın **25 km çevresinde hiç nokta yok**; en yakınlar
Tuna'nın karşı kıyısında (İsmail 52 km, İbrail 72 km) ve onlar
**Boğdan/Eflak çizgisinde** — Dobruca'nın çizgisi değil. ⇒ Kuzey Dobruca
bu atlasta noktasız bir şeritti ve `§2` gereği karşı kıyının peteğine
emiliyor olmalı. İki nokta o şeridi açtı ama **yeterli değil**, ayrıca
bildirildi.

🔴 **Dosya `girdi.py`ye BAĞLANMADI** — bağlama koordinatörde. Bağlanmamış
veri dosyası bu projede üç kez yaşandı (`§5`): dosya durdu, motor okumadı,
denetim temiz raporladı.
