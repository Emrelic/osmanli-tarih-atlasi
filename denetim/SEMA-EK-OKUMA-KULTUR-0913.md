# ŞEMA ÖNERİSİ — "şair/şiir/kültür/sanat" ek okuma türü

KITA 17 · 13 Eylül 2026 · paket 0044, H-0019/H-0020 · veri yazımı YOK,
yalnız öneri. Karar Emre'nin.

---

## ① D045 ÖNCE — ALTYAPI NE KADAR VAR? (ölçüldü, tahmin edilmedi)

### 1.1 Ek okuma mekanizması — ZATEN TAM KURULU, sanılandan geniş

`index.html:756-773` + `js/app.js:6481-6740`: kronoloji maddesi açılınca
alta buton şeridi (`#ob-ekokuma-butonlar`) çıkıyor, her tür kendi penceresini
(`#ekokuma-pencere`) açıyor. Veri `data/ekokuma.js` + `data/merak.js` —
ana yüke KATILMAZ, ilk tıklamada arka planda indirilir (19,8 MB'a
eklenmiyor).

🟢 **`EKOKUMA_TUR` sözlüğü (js/app.js:6524-6585) TAM ON BİR TÜR TAŞIYOR —
CLAUDE.md §1.6'nın "11 başlığın 7'si tanımsız" dediği liste BUDUR:**

```
TANIMLI (4, 2 Eylül'den önce)     İÇERİK VAR MI
  sebep-sonuc  🔗 Sebep-Sonuç      7 kart (data/ekokuma*.js)
  magazin      🎭 Magazin          0 kart  ← buton kurulu, İÇERİK SIFIR
  merak        ❓ Merak            17 kart (data/merak*.js)
  antlasma     📜 Antlaşma hükümleri  41/41 (ANTLASMALAR'a bağlı, ayrı veri değil)

TANIMSIZ OLARAK AÇILDI (7, 2 Eylül ARAYUZ-0902) — BUTON VAR, İÇERİK SIFIR
  tartisma         💬 Tartışma
  teknik-bilimsel  🔬 Teknik / Bilimsel
  kimdir           🪪 Kimdir?
  dis-yankilar     🌐 Dış Yankılar
  kahramanlik      🛡️ Kahramanlık
  menkibeler       📖 Menkıbe
  sok-haberler     📰 Şok Haber
```

⇒ **Bu 7'nin HİÇBİRİ "şair/şiir/kültür/sanat" prensibiyle tam örtüşmüyor.**
`kimdir` biyografiye en yakın ama tek başına şiirin METNİNİ ve eserin
kendisini taşıyacak alanı yok; `menkibeler` rivayet ekseni (`EK-OKUMA.md`
`kesinlik:"rivayet"` ailesi), edebî eser tanıtımı değil.
📌 **Yeni bir 12. tür gerekiyor** ama MEKANİZMA (buton + pencere + tür
sözlüğü + render'daki "son çare" dalı) hazır — maliyeti js/app.js'te
`EKOKUMA_TUR`a ~6 satır + `ekKartHtml`e bir `else if` dalı (7 tanımsız
türün eklenme maliyetiyle AYNI mertebe, ölçüldü: `git log` o commit'i
6 satır + yorum olarak gösteriyor).

### 1.2 `gorsel:` / `gorsel_kaynak:` alanı — SIFIR, gerçekten sıfır

Tarandı: `data/*.js` (tamamı), `js/app.js`. `gorsel:` ya da
`gorsel_kaynak:` bir kronoloji/ekokuma alanı olarak **HİÇBİR KAYITTA
YOK.** (`data/bekleyenler.js`'teki `"gorsel"` bir HATA RAPORU kategorisi
— Emre'nin ekran görüntüsü demek, medya alanı değil; karıştırılmasın.)
`index.html:435`teki `#ob-gorsel` de padişah kartvizitinin PORTRESİ için
(zaten var olan ayrı bir mekanizma, `assets/portreler/`), ek okuma
kartlarıyla ilgisiz.
⇒ **`CLAUDE.md §1.6`nın "① kronoloji maddelerine kendi görseli" kalemi
HENÜZ HİÇ BAŞLAMAMIŞ.** Bu, D045 ailesinin TERSİ bir vaka: bu sefer
"altyapı zaten vardı" değil, **gerçekten yok** — ikisini de ölçerek
ayırt etmek gerekiyordu.

### 1.3 Kültür-sanat/şair maddesi sayımı (`etiket:["kultur"]`)

```
toplam tarihli madde (olaylar*.js + kronoloji*.js)         6143
etiket:["kultur"] taşıyan                                    54
  ├─ DOĞRUDAN ŞAİR/ŞİİR (Bâkî 2 · Fuzûlî 2 · Nedîm 2 · Nef'î 1)      7
  ├─ KİŞİ-MERKEZLİ diğer sanatkâr (hattat/musikişinas/nakkaş)        9
  │    Şeyh Hamdullah 1 · Hâfız Osman 2 · Levnî 2 · Itrî 1 · Dede Ef. 3
  └─ kurumsal/mimari/basın (Süleymaniye açıldı, matbaa kuruldu…)    38
```
⇒ **Emre'nin prensibi dar okunursa (yalnız şair/şiir): 7 madde.**
Geniş okunursa (kişi-merkezli tüm sanatkârlar): 16 madde. Kurumsal/mimari
38 madde için "sanatkârın hayatı" çerçevesi doğrudan uymuyor (bir yapının
mimarı [ör. Sinan] ayrı bir kişi kartı gerektirir, bu ölçüm onu
AÇMADI — kapsam genişlerse ayrıca sayılmalı).
🔴 **Bu sayı 8. boyutun BÜTÜN kültür-sanat kapsamı değil**, yalnız BUGÜN
kronolojide YAZILI olan maddeler. `ONCELIK.md`nin çöl seyyahı ilkesi
gereği toplu yazım burada ÖNERİLMİYOR (sartname madde ③'ün şartı).

### 1.4 Kişi dizini (`data/kisiler.js`)

`Bâkî` / `Baki` **hiç yok** (0 eşleşme). `kimdir` ek-okuma türü ve
`data/kisiler.js` arasında bir köprü yok — bir şair maddesi yazılsa bile
kişi dizininde karşılığı olmayacak. Kapsam dışı bırakıldı (bu tur işi
DEĞİL), ama bir sonraki oturuma not: `kisiler.js`'e şair eklenmesi ayrı
bir kalem.

---

## ② ŞEMA ÖNERİSİ — yeni tür `"edebiyat"`

Var olan üç şemanın (sebep-sonuç, magazin, merak) deseni izlenir: her
tür kendi alanlarını taşır, ortak olan yalnız `id` · `tur` · `kesinlik`
· `kaynak`. `ekKartBagliMi()` zaten `kart.olay || kart.baglanti` ile
çok-tarihli bağlamayı destekliyor — yeni şema onu KULLANIR, yeni bir
bağlama alanı İCAT ETMEZ (D028: alan tasarlamadan önce zaten var
olanı ölç).

```javascript
{ id:"baki-selim-culusiyesi",
  tur:"edebiyat",
  baslik:"Bâkî'nin II. Selim'e cülûsiye sunması",
  eser:   { ad:"Cülûsiye (II. Selim için)", tur:"kaside/cülûsiye" },
  sanatci:{ ad:"Bâkî (Mahmud Abdülbâki)",
            hayat:"…2-3 cümle biyografi…",
            onem:"…edebî önemi, 2-3 cümle…" },
  metin:  "…eserin/olayın 2-4 cümlelik anlatısı — kronoloji maddesinin
            `d:` alanından FARKLI, ONU TEKRARLAMAZ, genişletir…",
  alinti: { metin:"bulunamadı — kamu malı neşir aranmadı", kaynak:null },
  gorsel: null,
  gorsel_kaynak:"bulunamadı",
  kesinlik:"kesin",
  olay:   ["1566-09-30"],           // hangi kronoloji maddesi/maddelerinde çıkar
  kaynak: "TDV: baki--sair" }
```

**Alan gerekçeleri:**
- `eser:` — hangi eserden bahsedildiği ayrı bir küçük nesne (ad+tür);
  ilerde "eser dizini" gerekirse buradan türetilir, şimdiden İCAT
  EDİLMİYOR.
- `sanatci:` — H-0019'un iki şartını (hayat + edebî önem) birebir taşır.
  Ayrı bir kişi kartı DEĞİL (§1.4'te ölçüldü: `kisiler.js` altyapısı
  şairleri kapsamıyor); bu alan o boşluğu GEÇİCİ doldurur.
- `alinti:` — 🔴 TELİF kırmızı çizgisi burada somutlaşıyor: alan
  BOŞ/`bulunamadı` YAZILABİLİR, hiçbir içerik oturumunun modern
  çeviriden kopyalayıp `bulunamadı` yazmaması gerektiği anlamına
  GELMEZ — kaynağı doğrulanmadan doldurulmaz (D107, D144).
- `gorsel:`/`gorsel_kaynak:` — `§1.6`nın kendi adlandırması AYNEN
  kullanıldı; yeni bir isim İCAT EDİLMEDİ.
- `kesinlik:` — `EK-OKUMA.md`nin belkemiği alanı BURADA DA ZORUNLU
  taşınır: bir edebî olayın rivayet mi belgeli mi olduğu (ör. bazı
  "padişaha kaside sundu, karşılığında filanca hediyeyi aldı" anlatıları
  rivayet düzeyinde kalabilir).

**Gösterim (öneri, YAZILMADI):** `ekKartHtml()`e `k.tur === "edebiyat"`
dalı — `sanatci.ad` başlık altı alt-başlık, `metin`, varsa `alinti.metin`
tırnak içinde+kaynağıyla, varsa `gorsel` `<img>`. `EKOKUMA_TUR`a
`"edebiyat": { etiket: "🖋️ Edebiyat", kaynak: function(){return
window.EKOKUMA||[];} }` satırı — mevcut 7 türün eklenme deseninin
BİREBİR aynısı. Bu satırlar js/app.js'e girer, kod DOKUNULMADAN
ÖNERİLDİ — yazımı bu turun kapsamı DIŞINDA (sartname: "veri yazımı YOK").

---

## ③ KAPSAM — sayıyla, TOPLU YAZIM ÖNERİLMİYOR

`ONCELIK.md` çöl seyyahı ilkesi: 8. boyut hâlâ devletler/sınırlardan
SONRA. Bu şema **7 (dar) ile 16 (geniş) arası** maddeyi etkileyebilir —
kesin sayı Emre'nin "prensip" kapsamını hangi genişlikte istediğine
bağlı. Öneri: önce H-0019/H-0020'nin **iki somut örneği** (aşağıdaki
taslak) onaylansın, biçim/uzunluk oturduktan sonra kalan 5-14 madde
AYRI bir sevkle yazılsın.
