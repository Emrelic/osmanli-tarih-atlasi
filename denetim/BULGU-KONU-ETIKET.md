# BULGU — KONU ŞEMSİYELERİ VE ETİKETLER

**OPUS HAZIR KITA 87** · 25 Ağustos 2026 · OSMANGAZİ sevkiyle (üçüncü şartname)
Teslim: bu rapor + `data/etiket_yama.js` → `window.ETIKET_YAMA`
`olaylar*.js` · `kronoloji_*.js` · `js/suzgec.js` **koordinatörde** — yazılmadı.

---

## ① ŞEMSİYE TABLOSU — kullanıcının göreceği tek ekran

**Altı şemsiye.** Ölçüm 6064 madde üzerinde, `etiket:` ekseniyle.
Sayılar **yama uygulanmış** hâli gösteriyor; parantezde yama öncesi.

| şemsiye | ① madde | ② yalnız burada | ayırt edicilik | (yama öncesi) |
|---|---:|---:|---:|---|
| **Askerî** | 2977 | 1462 | **%49** | 2974 / 1479 |
| **Kültür-bilim** | 1461 | 444 | **%30** | 1396 / 595 |
| **Hânedan** | 1241 | 267 | %22 | 1191 / 270 |
| **İktisat** | 486 | 81 | %17 | 486 / 95 |
| **Siyasî** | 2162 | 325 | %15 🟡 | 2150 / 359 |
| **İç düzen** | 1674 | 208 | %12 🟡 | 1435 / 219 |
| Sınıflandırılmamış | **20** | 20 | %100 | 21 |
| **toplam üyelik** | **10021** | | madde sayısının **1,65 katı** | 9653 |

- **Maddelerin %53,7'si birden çok şemsiyede** (3257 madde) — Emre'nin istediği
  kesişme çalışıyor demektir.
- ⚠️ **Kesişmenin ölçülebilir bedeli:** yeni etiketler (`imar` · `islahat` ·
  darbe üçlüsü) maddeleri ikinci bir şemsiyeye taşıdığı için **ayırt edicilik
  düştü** — en çok Kültür-bilim'de (%43 → **%30**). Bu bir kusur değil, çapraz
  bağlamanın doğal sonucu; ama söylenmesi gerekiyordu.
- **Sınıflandırılmamış 4890 → 21.** Bugün pencere kurulsa maddelerin %80,6'sı
  o kutuya düşerdi; `etiket:` eksenine geçince **%0,3**.

### 🟡 İki şemsiye zayıf — söylemem istenmişti, söylüyorum

**Siyasî (%17)** ve **İç düzen (%15)**: seçilseler de seçilmeseler de
maddelerinin büyük kısmı başka şemsiyeden zaten görünüyor. Sebebi kusur değil
**kesişme**: `antlasma` ve `ittifak` Askerî'yle, `egitim`/`sosyal`
Kültür-bilim'le paylaşılıyor. Ama kullanıcı için sonucu şu: *bu iki kutucuğu
kapatmak ekranı beklendiği kadar değiştirmez.*
⇒ **Önerim yine de kalsınlar** — kaldırmak 359 + 219 maddeyi ulaşılmaz yapar.

---

## 🔴 EMRE'NİN ÖRNEKLERİ İLE "YENİ ŞEMSİYE AÇMA" KURALI ÇELİŞİYORDU — ÖLÇÜM KARAR VERDİ

Emre'nin örnek listesinde **Diplomasi** ve **Islahat** ana başlık gibi
görünüyor; şartname ise yeni şemsiye açmayı yasaklıyor. İkisini de ölçtüm:

| senaryo | Diplomasi | Islahat | İç düzen | üyelik |
|---|---|---|---|---|
| **A — altı şemsiye** | (Siyasî+Askerî içinde) | (İç düzen içinde) | 1435 / **219** | 9653 |
| **B — sekiz şemsiye** | 1020 / **65** (%6) | 402 / **1** (%0) | 1316 / **117** (%9) | 10083 |

🔴 **Senaryo B kendi ölçütünüzle çürüyor:** *"①'i büyük ama ②'si küçükse o
şemsiye işe yaramaz."* **Islahat şemsiyesinin ②'si 1** — yani açılsa,
seçilmesi ile seçilmemesi arasında **tek bir madde** fark eder. Diplomasi %6.
Üstelik B, **İç düzen'i de %15'ten %9'a düşürüyor**: yeni şemsiyeler kütleyi
bölüyor ama ayırt edicilik üretmiyor.

⇒ **ALTI ŞEMSİYE KALSIN.** `Diplomasi` ve `islahat` **etiket** olarak yaşasın —
zaten öyleler. Böylece Emre'nin istediği alt dallar korunuyor, ekran altı
kutucukta kalıyor, ve `§1.6` ihlal edilmiyor. **Üçü birden sağlanıyor.**

---

## ② ETİKET → ŞEMSİYE — alt dallar ve kesişmeler

```
Askerî        savas · kusatma · sefer · fetih · kayip · toprak-kazanc ·
              toprak-kayip · denizcilik · serhat · hacli · yikim ·
              antlasma* · ittifak* · askeri-islahat*
Siyasî        siyaset · diplomasi · vassal · bolunme · milliyetcilik ·
              koloni · antlasma* · ittifak* · suikast*
Hânedan       taht · culus · hal · olum · dogum · evlilik · sadrazam · saray ·
              kurulus · son · darbe · darbe-askeri · darbe-siyasi ·
              taht-kavgasi · suikast*
İç düzen      isyan · reform · islahat · kanun · idari · kriz · imar ·
              sosyal* · egitim* · askeri-islahat*
Kültür-bilim  kultur · bilim · kesif · mimari · spor · felsefe · din ·
              salgin · sosyal* · egitim*
İktisat       ekonomi
                                            * = birden çok şemsiyede
```

**Kesişen altı etiket — Emre'nin özellikle istediği şey:**

| etiket | şemsiyeler | gerekçe |
|---|---|---|
| `antlasma` · `ittifak` | Askerî + Siyasî | savaşı bitiren antlaşma ikisine de ait |
| `askeri-islahat` | Askerî + İç düzen | Emre'nin kendi örneği |
| `egitim` | İç düzen + Kültür-bilim | medrese açılışı kültür, Maârif Nizamnâmesi ıslahat |
| `sosyal` | İç düzen + Kültür-bilim | nüfus sayımı idarî, kahvehane kültürel |
| `suikast` | Hânedan + Siyasî | aşağıda ölçümle |

### 🔴 `suikast` — tartışmalı olduğunu söylemiştiniz; ölçtüm

35 suikast kaydının **kurbanına** baktım:
```
hükümdar / hânedan üyesi : 20    (Franz Ferdinand · I. Umberto · IV. Henri · I. Pavel)
vezir / siyasetçi / diğer: 15    (Sokullu · Midhat Paşa · Mahmud Şevket Paşa ·
                                  Kapodistrias · Marat · Orléans Dükü)
```
⇒ **Tek şemsiyeye koymak 15 ya da 20 kaydı yanlış yere iter.** Sizin öneriniz
(*yalnız Hânedan*) 15 kaydı hânedan sayardı — Marat bir hânedan olayı değil.
**Kararım: `suikast` HER İKİ şemsiyede.** Zaten mimarinin tanıdığı şey bu.

### `sosyal yasam` ayrı şemsiye olmalı mı — SAYIYLA cevap

```
`sosyal` etiketli madde                        279
Kültür-bilim'in BAŞKA bir etiketini de taşıyan 117  (%42)
YALNIZ `sosyal` taşıyan                        162  (corpus'un %2,7'si)
```
⇒ **Önerim: HAYIR.** 162 madde bir şemsiyeyi taşımaz — bugünkü en küçük şemsiye
İktisat **486**. Ve yeni bir kutucuk, Emre'nin *"detaya boğma"* uyarısıyla
doğrudan çelişir. `sosyal` zaten **iki** şemsiyede kesişiyor; gündelik hayat
arayan kullanıcı onu Kültür-bilim'de bulur.
⚠️ Karşı argümanı da yazıyorum: %58'i Kültür-bilim'le örtüşmüyor — yani sınıf
gerçekten ayrı bir şey. Karar Emre'nin.

### `egitim` ve `sosyal` — ölçüm

Sizin `egitim` 27 · `sosyal` 76 sayınız **ANA kümenin `etiket:` alanı** içindi.
Bütün külliyatta, normalizasyondan sonra: **`egitim` 31 · `sosyal` 279**
(`sosyoloji` · `demografi` · `goc` birleştirildi). Metin taramanızın 311/332
sayıları ise üst sınır: *"Uzun Hasan Tahran'da Pir Ömer'i yendi"* gürültüsü
benim ölçümümde **yok**, çünkü metni değil **etiketi** saydım.

---

## ③ SÜZGEÇ ÖNERİSİ — `js/suzgec.js` (sizde; tarif ediyorum, yazmadım)

Bugünkü dosya `k:` üzerine kurulu ve **bölüyor**: `maddeGrubu(o)` tek bir grup
döndürüyor. İstenen mimari **kesişiyor**. Üç değişiklik yeter:

1. **`KONU_GRUPLARI`nin `k:` dizisi → `etiket:` dizisi.** Yukarıdaki tablo.
   Yapı aynı kalıyor, içerik `etiket_yama.js`'in `semsiye_tablosu` bölümünden.
2. **`maddeGrubu(o)` → `maddeSemsiyeleri(o)`**: tek `id` yerine **`id` kümesi**.
   Bir maddenin etkin etiket kümesi = `normalize(k ∪ tur ∪ etiket)`.
   ⚠️ `tur:` de okunmalı — yabancı 4838 maddenin tek değerli alanı o.
3. **`suz()` semantiği: BİRLEŞİM.** Bir madde, seçili şemsiyelerden
   **herhangi birinin** etiketini taşıyorsa görünür. (Bugünkü `indexOf(deger) < 0`
   satırı, küme kesişimi kontrolüne dönüşür.)
   Aileler arası **VE** kuralı **değişmiyor** — o katman doğru.
4. `grupSayilari()` aynı mantıkla, ama **iki sayı** döndürmeli: ① ve ②.
   Kullanıcı kutucuğun yanında ①'i görür; ② geliştirici ölçüsüdür.

⚠️ **`bilinmeyenler()` korunmalı ve genişletilmeli:** bugün tanınmayan `k:`
değerini `diger`e düşürüp **görünür** kılıyor. Etiket ekseninde bu daha da
gerekli, çünkü etiket sözlüğü 566 değerli ve büyümeye devam edecek.

---

## ④ SÖZLÜK KÖPRÜSÜ — iki ayrı sözlük vardı

| küme | dosya | konu alanı | değer |
|---|---|---|---|
| ANA | `olaylar*.js` (19) | `k:` + `etiket:` | 30 · 31 |
| YABANCI | `kronoloji_*.js` (42) | **`k:` YOK** · `tur:` · `etiket:` | 0 · **60** · **566** |

Köprü **`tur:`den** kuruldu, `etiket:`ten değil — çünkü `etiket:` bir konu ekseni
değil, **karışık torba**: içinde `Mardin` · `ingiltere` · `floransa` · `Memlük`
gibi **yer ve hânedan adları** var (ölçüm: 13.719 etiket kullanımının **1695'i**
konu değil ad).

```
BAĞLANDI    4706 madde (%97,3)   ·   BAĞLANAMADI 132 (%2,7)
   kriz 67   çok anlamlı (malî · siyasî · veraset) — okunarak bölünmeli
   diger 44  zaten `diger`
   salgin 15 · felaket 6   →   Kültür-bilim altında `salgin` etiketi
```

### Yazım / eşanlam — 11 çift birleştirildi

`toprak-kazanci→toprak-kazanc` (1→853) · `toprak-kaybi→toprak-kayip` (390→389) ·
**`ayaklanma→isyan`** (221→361) · `idare→idari` · `iktisadi/iktisat→ekonomi` ·
`siyasi→siyaset` · `dini→din` · `hukuki→hukuk` · `kultur-sanat`/`sanat`→`kultur`

🔴 **`ayaklanma ↔ isyan` yönü sizin ölçümünüzün tersi.** Sizin sayınız
(89↔3) **doğruydu** ama yalnız ANA kümenin `etiket:` alanı için; bütün
külliyatta `isyan` 361 ↔ `ayaklanma` 221. `§11`'in *"ölçüm doğru, evren dar"*
sınıfı. Zararı sınırlı: ikisi de **aynı şemsiyeye** düşüyor.

---

## ⑤ DARBE VE ISLAHAT — etiket düzeyinde, ekranda görünmez

Şartnameniz bunları **etiket** saydı; ikisi de kendi şemsiyelerinin altında
kalıyor, pencereye kutucuk eklenmiyor.

```
DARBE — 198 aday okundu (sizin 116'nız üst sınırdı; ilk kendi taramam da
        yanlıştı: 89 buluyordu ve zaten etiketli 19 kaydın 11'ini kaçırıyordu)
   darbe-askeri  35  ·  darbe-siyasi 26  ·  taht-kavgasi 32   → Hânedan
   [eleme] suikast 35 → Hânedan + Siyasî   ·   [eleme] darbe-degil 70

ISLAHAT — 213 etiketsiz aday, üç sınavla
   EVET 64  ·  TARTIŞILIR 22  ·  HAYIR 127        → İç düzen (+ Askerî kesişimi)
```

**Ölçüt — darbe:** iktidarın, düzenin kendi kuralları dışında, örgütlü bir güçle
el değiştirmesi (hedef iktidar · yol düzen dışı · sonuç fiilen değişmiş).
**Ölçüt — ıslahat:** fail devlet mi · amaç düzeni değiştirmek mi · yeni bir şey
getiriyor mu. Üçüncü sınav en çok eleyen: *"Prag Üniversitesi (1348)"* bir
yenileşme tedbiri değil, döneminin **olağan** kurumudur.

`islahat` · `reform` · `yenilesme` · `modernlesme` **tek etikette** birleşti:
**`islahat`** (sizin öneriniz, uygulandı).

Ayrıntı — üç sınır kararı, mecaz elemeleri ve tam listeler:
`data/etiket_yama.js`'in `darbe` ve `islahat` bölümleri.

---

## ⑥ İKİNCİ TUR — Emre'nin dört kararı (25 Ağustos)

### `imar` — SEKİZ GEÇİŞ, ve her geçiş bir yanlış-pozitif sınıfı buldu

İlk teslimim (248 kayıt) **koordinatör tarafından durduruldu**: `köprü` kelimesi
**Köprülü Mehmed Paşa**'yı yakalıyordu. Süzgeç üç ayağa çıkarıldı; **her geçiş
yeni bir sınıf** ortaya çıkardı ve **üçü de aynı kökten** — *kelime konuyu değil
başka bir şeyi işaret ediyor*:

```
①  ÖZEL AD    Köprülü · Köprühisar · köprübaşı        (koordinatör buldu)
              Balta Limanı · Liman von Sanders · Surnâme-i Vehbî ·
              Çeşme baskını · Tersane Konferansı · Fabrika Yasası   (2. geçiş)
②  OLAY       "Fatih Camii'nde fetva" · "Mudanya limanının ablukası" ·
              "Mimar Sinan'ın ATANMASI" · "Bağdat Demiryolu ANTLAŞMASI"
③  YER OLARAK LİMAN — en kalabalığı, 3. geçişte çıktı
              "Kolomb PALOS LİMANINDAN açıldı" · "Brezilya LİMANLARI açıldı"
              ⇒ `liman … açıldı` TİCARETTİR; `kanal … açıldı` İNŞAATIN BİTİŞİ
```

**Sekiz geçişin sayıları:** 248 → 267 → 259 → 255 → 246 → 251 → 260 → **264**

```
ALTYAPI / ÜRETİM  → `islahat` + `imar`    40
OLAĞAN İMAR       → yalnız `imar`        224
                    ─────────────────────────
                    TOPLAM KALAN         264
elenen — ÖZEL AD                          15
elenen — OLAY                             43
elenen — işaretsiz                        17
gövde (`d:`) okunarak kurtarılan          38
```

🔴 **Ve eleme kovasını ÜÇ KEZ kendi içinde taradım** — kendi dersimin
uygulaması. Her turda gerçek `imar` kaydı çıktı: ilk taramada 30 elenenin
**~12'si** (Galata Kulesi · Rialto Köprüsü · Ginkaku-ji · Saint Peter Kalesi),
ikincisinde 5'i. Kök her seferinde **çekim eksikliğiydi**: `yapılması` ·
`imar ettirdi` · `yükseldi` · `modernleştirilmesi` YAPIM listesinde yoktu.

⚠️ **Artık hata ölçüldü ve gizlenmedi:** son 17 elenenin **2'si** hâlâ gerçek
imar görünüyor (Fort Manoel'in *"adanın imarı"* · Fonte Gaia anıtsal çeşmesi)
⇒ **yanlış-negatif ~%12**. Dokuzuncu geçiş kazancı azaltıyor; sayıyı
saklamak yerine **bildiriyorum**. Elenenlerin tamamı `imar_elenen` kovasında.

📌 **Başlık okuyarak tasnifin bedeli bu vakada ölçüldü.** Gövde (`d:`) okuması
38 kaydı kurtardı — yani başlığa güvenmek o 38'i kaybettirecekti.

**🔴 Baş ad: `imar` — ve gerekçesi ölçüm.** Bugünkü `mimari` etiketi **212**
kayıtta var ve **207'si eser/bayındırlık**, yalnız **5'i** üslup/sanat
(*"Mimar Sinan'ın hassa mimarbaşılığına atanması"* · *"Muzafferî mimarisi"* ·
*"cephe mimarisinde bir buluş"*). Yani **etiketin adı içeriğine yanlış**.
⇒ `imar` baş ad olur, `mimari` o beş üslup kaydında kalır. Göç mekanik: tek
kural, 207 kayıt. **Ama bu bir veri göçüdür — karar koordinatörün.**
Alternatif: `mimari` baş ad kalsın, `imar` ona bağlansın — göçsüz, ama
Emre'nin ayrımı (bayındırlık işi ≠ mimari üslup) kaybolur.

**Şemsiye: Kültür-bilim + İç düzen.** 362 adayın *başka* etiketleri
Kültür-bilim %54 · İç düzen %20 · İktisat %15 · Askerî %12.
⚠️ **Ama yerleştirme kararını ölçüm BELİRLEMİYOR:** üç varyantı da koşturdum
(yalnız Kültür / yalnız İç düzen / ikisi) ve fark **≤2 puan** — çünkü bu
kayıtlar zaten `mimari`, `islahat`, `ekonomi` gibi etiketlerle her iki
şemsiyede görünüyor. **Karar semantik, istatistik değil.**

### 🔴 `isyan` — eleme kovası boş değildi, haklıydınız

`darbe-degil` kovasındaki **70 kaydın 16'sı aslında ISYAN**: Patrona Halil
isyanı çevresi (2) · Şendî (2) · Katalan İntikamı (2) · Ocak Ayaklanması ·
Dózsa · Martinovics · Aradi Vértanúk · Muhammed Yûsuf · Muvanga ·
II. Mehmed Giray · Vak'a-i Hayriyye (2) · yeniçeri baskısı.
📌 Ders: **bir eleme kovası, kendi içinde yeniden taranmalı.** "Darbe değil"
demek "hiçbir şey değil" demek değildir.

**Baş ad `isyan`** (361 ↔ `ayaklanma` 221) — `İç düzen` altında.

### `kriz` 67 kayıt okundu ve dağıtıldı — ATANMAMIŞ 0

```
savas 13 · taht 13 · ekonomi 10 · isyan 10 · diplomasi 8 · siyaset 8 · salgin 5
```
🔴 **Hüküm: `kriz` tek başına bir konu değil, bir HÂL bildirir.** Malî kriz ·
veraset krizi · diplomatik kriz · isyan aynı kelimeyi taşıyor; 67 kayıt **altı
şemsiyenin hepsine** dağıldı. ⇒ `kriz` ikincil etiket olarak kalsın, ama her
kayıt **kendi ailesinden bir etiket de** alsın. (İlk turda *"bağlanamadı"*
demem doğruydu; şimdi sebebi ölçülmüş hâlde.)

### `taht-kavgasi` — üçüncü kova açıldı, 32 kayıt, `Hânedan` altında.

---

## ⑦ Ölçmediklerim

- **`etiket:`in 566 değerinin tamamı tasnif edilmedi.** 1695 kullanımın ad
  (yer/hânedan) olduğunu **ölçtüm**, temizliğini **yapmadım** — ayrı iş, ve
  M ekseniyle (`ETIKETLEME.md`) kesişiyor.
- **`kriz` 67 kayıt okunmadı.**
- **Darbe/ıslahat tasnifi başlık (`b:`) okunarak** yapıldı, madde gövdesi değil.
- **Hiçbir öneri tarayıcıda denenmedi**; `suzgec.js` node'da sınanabilir bir
  modül ama yamayı uygulamadım.
- **Normalizasyon sözlüğü (46 eşleme) editoryaldır** — ölçümle değil okumayla
  kuruldu. `etiket_yama.js`'in `normalizasyon` bölümünde tam hâli var; itiraz
  edilecek satır varsa oradadır.
