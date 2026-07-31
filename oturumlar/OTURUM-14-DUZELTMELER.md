# OTURUM 14 — `data/yerlesimler.js` DÜZELTME LİSTESİ

**Uygulayan: merkez oturum.** Ben yazmadım (KOORDINASYON.md §1 — `yerlesimler.js`
tek çekişmeli dosya). Her madde: kayıt adı · mevcut değer · önerilen değer ·
TDV slug'ı · gerekçe.

**Kapsam:** hatalar 11 · md.16 · 17 · 18 · 23 · 27 · 40 · 41 · 42 · 43 · 44 ·
51 · 52 · 56.

**Bu turda `<title>` ile doğrulanan sluglar:** `urabi-pasa` · `trablusgarp-savasi`
· `muhammed-ahmed-el-mehdi` · `aden` · `tunus` · `duyun-i-umumiyye` ·
`senusiyye` · `abdulkadir-el-cezairi` · `cezayir` · `sudan` · `misir` · `fizan`
— **hepsi CANLI.** ÖLÜ çıkanlar: `siva` · `vaha` araması (§5).

---

## 0. Önce iki şema notu

### 0a. 🔴 `isg:` içindeki kaynak alanı `y:` DEĞİL, `kaynak:`

Devir mesajınızda şema şöyle yazılmıştı:

```js
isg:[{f:"1882-09-14",t:"1914-12-18",d:"ingiltere",y:"..."}]
```

Verideki Bosna örneği ve `arac/girdi.py`:130-138 bunu **çürütüyor**:

```js
isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"berlin-antlasmasi"}]
```

`girdi.py`'nin gerekçesi kayıtlı: `y:` **iki anlamda** kullanılmıştı — `d:`/`s:`
içinde kazanım enum'u (`kusatma` 85, `savas` 77, `antlasma` 67 kayıt), `isg:`
içinde kaynak slug'ı. Ayrıldı ve `isg:` tarafı `kaynak:` oldu. **Aşağıdaki
bütün öneriler `kaynak:` kullanır.** Devir mesajındaki `y:` uygulanırsa
`girdi.py` "bilinmeyen alan" uyarısı verir ve `uret_devirler.py` kaynağı okuyamaz.

### 0b. `BEKLENEN_SAHIPSIZ` 34 → 40

md.17 gereği Libya çölüne **altı kasten sahipsiz nokta** eklendi (§6).
`arac/denetle.py` Oturum 2'nin dosyası, dokunmadım. Sayı güncellenene kadar
Değişmez 1 **✗ 40 sahipsiz (beklenen 34)** raporlar; ihlal gerçek değil,
beklentinin eskimesidir. Diğer altı denetim temiz.

---

## 1. MISIR — İngiliz işgali örtüsü + 1914 tarihi (md.41 · md.42)

### 1a. Tarih düzeltmesi: `1914-11-05` → `1914-12-18`

**On kayıt** Osmanlı hükümranlığını 5 Kasım 1914'te bitiriyor:

> Kahire · İskenderiye · Dimyat · Asyut · Asvan · İbrim · Süveyş · Reşîd
> (Rosetta) · Sina güneyi · **Kuveyt**

5 Kasım 1914 **İngiltere'nin Osmanlı'ya savaş ilânıdır**; Mısır'ın hukukî
durumunu değiştirmez. Osmanlı hükümranlığı **18 Aralık 1914'te** himaye ilânıyla
bitti — ve o günün maddesi zaten var: *"Mısır'ın İngiliz himayesine alınarak
sultanlık ilan edilmesi"*. Bugün bu on kayıt **-4 gün** farkla *"I. Dünya
Savaşı'na giriş"* maddesine bağlanıyor; yani Mısır'ın hukukî kaybı, savaşa giriş
maddesinin altında beliriyor.

| Kayıt | Mevcut | Önerilen |
|---|---|---|
| 10 kaydın hepsinde | `v:` bitiş **1914-11-05**, `s:"ingiltere"` başlangıç **1914-11-05** | **1914-12-18** |

⚠️ **Kuveyt bu listede ama Mısır değil** — Kuveyt'in İngiliz himayesi
1914-11-03'te ilân edildi, 12-18 ile alâkasız. **Kuveyt'e dokunmayın**, ayrı
ölçülmeli (Oturum 4'ün Arabistan bloğuna ait).

> Ben yeni yazdığım dört vaha kaydında (§5) **doğru tarihi** kullandım. Bu
> düzeltme uygulanana kadar 43 günlük görünür bir dikiş kalır. Kasıtlı: çelişkiyi
> gizlemek yerine görünür kılıyor.

### 1b. `isg:` işgal örtüsü

Bugün **1882 İngiliz işgali veride HİÇ YOK** — 32 yıllık fiilî denetim haritada
görünmüyor. `v:` (Kavalalı) olduğu gibi kalır, üstüne örtü gelir:

```js
isg:[{f:"1882-09-14", t:"1914-12-18", d:"ingiltere", kaynak:"urabi-pasa"}]
```

**Uygulanacak kayıtlar (9):** Kahire · Dimyat · Asyut · Asvan · İbrim · Süveyş ·
Reşîd · Sina güneyi + **benim dört vaham** (Hârice · Dâhile · Ferâfire · Bahriye
— bunları ben ekleyebilirim, söyleyin yeter).

**İskenderiye ayrı tarih ister:**

```js
isg:[{f:"1882-07-15", t:"1914-12-18", d:"ingiltere", kaynak:"urabi-pasa"}]
```

TDV `urabi-pasa`: bombardıman **11-12 Temmuz 1882**, İskenderiye'nin işgali
**15 Temmuz 1882**; Tel el-Kebîr **13 Eylül**, Urâbî'nin teslimi ve Kahire
**14 Eylül**. Yani kıyı iki ay önce düştü — örtü bunu göstermeli.

### 1c. Kronoloji maddesi

Mevcut **`1882-09`** maddesi (*"Mısır'ın İngiliz işgali"*) **AY hassasiyetinde**.
CLAUDE.md §8: *"Kronoloji maddelerinde gün yaz. Ay hassasiyetli `t:"1526-08"`
ayın 1'ine genişler ve gün hassasiyetli yerleşim değişimlerinden önce
sıralanır — senkron bozulur."*
→ **`1882-09-14` yapın.** Adımları ben yazdım (`olaylar_ek9.js`: 1882-07-11
bombardıman/çıkarma, 1882-09-13 Tel el-Kebîr).

---

## 2. TRABLUSGARP — İtalyan işgali örtüsü (md.56)

### 2a. Bugünkü durum ölçüldü

Haritada Libya **1912-10-15/18'e kadar hiç değişmiyor.** Oysa İtalyan işgali
**bir yıl önce**, Ekim 1911'de tamamlanmıştı. Kullanıcının istediği "adım adım"
tam bu on iki ay.

TDV `trablusgarp-savasi`, doğrulanmış tarihler:

| Tarih | Olay |
|---|---|
| 25-26 Eylül 1911 | Abluka başlıyor |
| **8 Ekim 1911** | **Tobruk** |
| **9 Ekim 1911** | **Trablus teslim** |
| **16 Ekim 1911** | **Derne** |
| **21 Ekim 1911** | **Bingazi** |
| 5 Kasım 1911 | İtalya'nın tek taraflı ilhak kararnâmesi |
| **15 Ekim 1912** | Muhtariyet kararnâmesi |
| **18 Ekim 1912** | **Uşi (Ouchy) Antlaşması imzalandı** |

### 2b. Önerilen örtüler

```js
Trablus  isg:[{f:"1911-10-09", t:"1912-10-18", d:"italya", kaynak:"trablusgarp-savasi"}]
Derne    isg:[{f:"1911-10-16", t:"1912-10-18", d:"italya", kaynak:"trablusgarp-savasi"}]
Bingazi  isg:[{f:"1911-10-21", t:"1912-10-18", d:"italya", kaynak:"trablusgarp-savasi"}]
Tobruk   isg:[{f:"1911-10-08", t:"1912-10-18", d:"italya", kaynak:"trablusgarp-savasi"}]
```

(Tobruk **benim dosyamda** — söyleyin, ben yazayım.)

🔴 **Misrata ve Murzuk'a örtü KOYMAYIN.** İtalyanlar savaşın sonuna kadar kıyı
şeridine hapsedildi; Misrata 1912'de, Fizan hiç işgal edilmedi. Örtüyü onlara
yaymak, kullanıcının şikâyet ettiği hatanın (fiilî denetimi olmayan yeri boyalı
göstermek) tersten tekrarı olur.

### 2c. Uşi tarihi çekirdekte tutarsız

| Kayıt | Bugün |
|---|---|
| Trablus · Bingazi | **1912-10-15** |
| Derne · Misrata · Murzuk · Taşoz | **1912-10-18** |

Aynı antlaşma, iki tarih. TDV: **antlaşma 18 Ekim**, 15 Ekim muhtariyet
kararnâmesidir. **Altısını da `1912-10-18` yapın** ve mevcut
*"1912-10-15 Uşi Antlaşması"* maddesinin gününü de 18'e çekin — yoksa madde
antlaşmadan üç gün önce görünür.

### 2d. `1911-09` maddesi ay hassasiyetinde
*"Trablusgarp Savaşı"* → **`1911-09-29`** (savaş ilânı). Beş adım maddesini
`olaylar_ek9.js`'e yazdım.

---

## 3. CEZAYİR — 1830 sonrası "Osmanlı pembesi" (md.23 · md.16 · md.27)

### 3a. Kullanıcının sorusunun cevabı: HAYIR, bağ kalmadı

Ocaklık **5 Temmuz 1830'da lağvedildi.** Ama **27 kayıt**
`v:"Cezayir Ocaklığı (dayı idaresi)"` etiketini o tarihten sonra da taşıyor:

| Fazlalık | Kayıt |
|---|---|
| **24 yıl** | Tuggurt (→1854-12-02) |
| 22 yıl | Ağvât · Gardâye (→1852-12-04) |
| 14 yıl | Biskra · Dellîs · Ayn Temûşent · Sûk Ahrâs · Tebesse · Batna · Mesîle · Bû Sa'âde (→1844-03-04) |
| 13 yıl | Nedrûme · Tenes · Şelif · Sîdî Bel Abbès |
| 11 yıl | Muaskar · Cicel |
| 8 yıl | Setif · Kolo · Sikikde · Berc Bû Areric |
| 7 yıl | Konstantin · Mîle · Kalme |
| 3 yıl | Bicâye · Mustagānim |
| 2 yıl | Annaba |

**Altısı `yerlesimler.js`'te** (Konstantin · Annaba · Bicâye · Setif · Biskra ·
Tuggurt), **yirmi biri benim dosyamda.**

### 3b. 1830'dan sonra orada ne vardı — ölçülmüş

- **Doğu (Konstantin çevresi):** son bey **Ahmed Bey** Konstantin'de idaresini
  sürdürdü ve **Osmanlı adına hareket ettiğini ilân etti** → `v:` doğru,
  yalnız **etiketi yanlış**. Konstantin 13 Ekim 1837'de düştü, Ahmed Bey 1848'de
  teslim oldu.
- **Batı ve iç (Muaskar–Tagdempt):** **Emîr Abdülkādir** 22 Kasım 1832'de
  "emîrü'l-mü'minîn" biatıyla düzenli bir devlet kurdu; darphanesi, barut
  imalâthanesi ve başkenti vardı. 🔴 **Osmanlı'ya değil FAS SULTANI
  Abdurrahman'ın metbûiyetine sığındı** → `v:` (Osmanlı tâbiiyeti) **yanlış**.
  30 Mayıs 1837 Tâfnâ Antlaşması, 23 Aralık 1847 teslim.
- TDV `cezayir`: Osmanlı **1847'de** Cezayir üzerindeki haklarının sona erdiğini
  ilân etti.

### 3c. 🔴 `k:` etiketini değiştirmek YETMEZ

`girdi.py`:129 — `k:` alanı *"tâbi devletin adı — v: içinde (**motor okumaz**,
gösterim için)"*. Yani etiketi düzeltmek haritanın rengini **hiç değiştirmez**;
kullanıcı aynı pembeyi görmeye devam eder. **Kozmetik düzeltme md.23'ü kapatmaz.**

### 3d. Önerilen çözüm — yeni kimlik gerekiyor

Oturum 16 ölçtü: 261 kimliğin hepsi eklense **8 renk yetiyor**, tavan
zorlanmıyor. Yani kimlik maliyeti yok.

**İstenen kimlik: `abdulkadir`** — "Emîr Abdülkādir Devleti", 1832-11-22 →
1847-12-23. (Oturum 3 / Oturum 9'a iletilmeli.)

Uygulanacak yapı — batı ve iç Cezayir noktaları için:

```js
v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},
   {f:"1830-07-05", t:"1832-11-22", k:"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)"}],
s:[… , {f:"1832-11-22", t:"<o yerin Fransız tarihi>", d:"abdulkadir"}, …]
```

Doğu (Konstantin · Mîle · Kalme · Setif · Sikikde · Kolo · Berc Bû Areric ·
Cicel · Annaba · Bicâye) için `v:` kalır, ikinci dönemin etiketi
**"Ahmed Bey'in Konstantin beyliği"** olur — Ahmed Bey Osmanlı adına hareket
ettiği için `v:` burada doğrudur.

**Kırılma maliyeti:** her noktaya iki yeni sınır. `1830-07-05`in maddesi var
(*"Cezayir'in Fransız işgali"*); **`1832-11-22`nin maddesini yazdım**
(`olaylar_ek9.js` §G1). Yani Değişmez 2 için ek iş yok.

**Ben 21 kaydı uygulamaya hazırım — `abdulkadir` kimliği `renkler.py`'ye girer
girmez.** Tanımsız kimlik yazarsam bölge hiç boyanmaz (CLAUDE.md §8), o yüzden
bekliyorum.

### 3e. md.16 — Bicaye: **veri DOĞRU, hata yok**

Ölçtüm:

| Ölçüt | Sonuç |
|---|---|
| Kayıt | `s:` fransa **1833-09-29** ✓ doğru tarih |
| Kronoloji maddesi | *"Bicâye'nin (Bougie) işgali"* **+0 gün** ✓ var |
| Petek alanı | **14.612 km²** — Konstantin'in (5.363) **2,7 katı**, Cezayir'inkiyle (14.319) aynı |

Yani nokta da, tarih de, madde de, petek de yerinde. **Görünmüyor olmasının
sebebi §3a'daki anakronizm:** 1830-1833 arası Bicâye'nin çevresindeki her şey
(Setif 1838, Cicel 1839, Konstantin 1837, Biskra 1844) hâlâ "Osmanlı" boyalı
olduğu için Bicâye'nin 1833'teki dönüşü **tek renkli büyük bir kütlenin içinde
kayboluyor.** §3d uygulanınca kendiliğinden görünür hâle gelir.

### 3f. md.27 — Tuggurt: **veri DOĞRU**

`s:` fransa **1854-12-02** ✓ · madde *"Tuggurt'un işgali — Cezayir'in tamamının
elden çıkışı"* **+0 gün** ✓ · petek **68.409 km²** (görünür).
Kullanıcının "işaretlenmeli" dediği şey yine §3a: Tuggurt **24 yıl** fazladan
Osmanlı boyanıyor, sonra bir anda Fransız oluyor. Sebep kayıp veri değil,
anakronik `v:`.

### 3g. Ölçülmüş ama KAYNAKSIZ — 10 kasaba tarihi

Faz 1'de mevcut kırılmalara **yuvarlanmış** ve hâlâ öyle duran noktalar:

| Yuvarlandığı tarih | Kayıtlar |
|---|---|
| 1844-03-04 (Biskra) | Dellîs · Ayn Temûşent · Sûk Ahrâs · Tebesse · Batna · Mesîle · Bû Sa'âde |
| 1838-10-13 (Setif) | Kolo · Sikikde · Berc Bû Areric |

TDV kasaba düzeyinde Fransız işgal tarihi vermiyor (`cezayir` maddesi yalnız
1830 · 1837 · 1847 · 1853-57 veriyor). **Uydurmadım, bırakıyorum ve
bildiriyorum.** Kaynak bulunursa madde + kayıt birlikte düzeltilmeli.

---

## 4. FİZAN — üçüncü yanlış eşleşme (md.17 ile ilgili)

**Murzuk (Fizan)** kaydının `1577-01-01` kırılması bugün
*"İstanbul Rasathanesi kuruldu"* maddesine **+0 gün** bağlanıyor. Sahra'nın
ortasındaki **215.417 km²**lik petek, bir rasathane maddesinin altında el
değiştiriyor.

TDV `fizan`: Fizan **1551 Trablus fethinden sonra sancak** sayıldı; 1577'ye ayrı
bir hüküm verilmiyor. Verideki 1577 tarihinin kaynağı doğrulanamadı.

⚠️ **Yanlış eşleşme bu tur içinde kendiliğinden kapandı:** ben madde yazarken
**başka bir oturum** `olaylar_ek8.js`'e aynı güne *"Fizan'ın Osmanlı tâbiiyetine
girmesi — Murzuk"* maddesini yazdı. Mükerrer denetimi ikisini yakaladı, **benimki
silindi** (kayıt `olaylar_ek9.js` §G2'de duruyor). Murzuk artık rasathane
maddesine değil, kendi maddesine bağlı.

Geriye yalnız tarih sorusu kalıyor:

| Seçenek | Etki |
|---|---|
| **A (önerdiğim)** — `1577-01-01` → **`1551-08-15`**, Murzuk Trablus zincirine katılır | Bir kırılma **eksilir**, TDV'yle birebir uyar. ⚠️ Benim Sokna ve Câlû noktalarım ve ek8'in maddesi de aynı anda çekilmeli |
| B — 1577 kalır | Madde var, eşleşme doğru; ama tarihin kaynağı **doğrulanmamış** kalır |

**Ayrıca kayıtlı değil:** TDV, Fizan'ın **Mayıs 1842'de** Abdülcelîl'in idamından
sonra **doğrudan Trablus'a bağlı kaza** olduğunu söylüyor. Veride Murzuk
1835-05-26'da zaten `d:`ye geçiyor, yani 1842 ayrı bir kırılma değil — bilgi
olarak not.

---

## 5. MISIR'IN BATI ÇÖLÜ (md.40) — dördü yazıldı, Siva SİZDE

**Yazdım** (`yerlesimler_afrika.js` §15, dördü de Kahire'nin dönem yapısını
birebir tekrarlar, **yeni kırılma üretmezler**):

> Hârice (Vâhât) 25.440/30.546 · Dâhile 25.494/28.976 ·
> Ferâfire 27.058/27.970 · Bahriye (Bâvîtî) 28.349/28.864

Bu, Oturum 16'nın ölçtüğü asimetriyi kapatır: artık 1885'te Cağbûb'un
doğusundaki Mısır batı çölü boş değil.

### 🔴 md.40 KAPANMADI — 260.114 km²'lik açık borç

**"md.40 tamam" diye işaretlenmemeli.** Ölçüm (shapely `voronoi_diagram`,
aynı `BOLGE`):

| Vaha | Peteği |
|---|---|
| Dâhile | 112.926 km² |
| Bahriye (Bâvîtî) | 59.151 km² |
| Hârice (Vâhât) | 49.809 km² |
| Ferâfire | 38.228 km² |
| **toplam** | **260.114 km²** |

Oturum 16 Batı çölü boşluğunu **423.525 km²** ölçmüştü → dört nokta boşluğun
**%61'ini Mısır boyuyor.**

**Bu tarihen fazla iddialı.** Osmanlı-Mısır idaresi vahalara ulaştı, aralarındaki
kum denizlerine ulaşmadı. Bugünkü hâliyle harita **Büyük Kum Denizi'ni ve Gilf
el-Kebîr'i** Mısır idaresi gibi gösteriyor. Voronoi'nin doğası bu; nokta
yerleştirmesiyle önlenemez — tek çözüm çölün içine **kasten sahipsiz** dolgu
noktası koymak, yani Libya'ya uyguladığım tedaviyi (§6) Mısır'a da uygulamak.

**Sonraki pencereye ertelendi** (merkez oturumun kararı: girdiyi tekrar
hareketlendirmenin maliyeti kesin, kazancı inceltme). Hazır öneri:

| Nokta | Konum |
|---|---|
| Ramletü'l-kübrâ (Büyük Kum Denizi) | 26.5 / 26.0 |
| Gilf el-Kebîr | 23.5 / 26.0 |
| Selîme (Nûbe çölü) | 21.5 / 29.3 |

⚠️ Uygulandığında **`BEKLENEN_SAHIPSIZ` 40 → 43** olur.

Komşulara bugünkü etki (önce → sonra, ölçülmüş):

| Kayıt | Önce | Sonra | Fark |
|---|---|---|---|
| Murzuk (Fizan) | 215.417 | 86.100 | **-60%** |
| Cağbûb | 170.490 | 97.374 | **-43%** |
| Asyut | 17.642 | 12.900 | -27% |
| İbrim | 63.536 | 49.128 | -23% |
| Gât | 270.915 | 239.123 | -12% |
| Ğadâmis | 118.999 | 109.200 | -8% |
| Kahire · Trablus · Bingazi · Hartum · Dongola | — | — | değişmedi |

### 🔴 SİVA YAZILMADI — kaynak yok

Siva 1820'ye kadar fiilen müstakil bir Berberî vahasıydı; Kavalalı Mehmed Ali o
yıl ilhak etti. TDV'de karşılığı **yok**:

- `siva` slug'ı **ÖLÜ** (arama sayfası; Sivas maddeleri çıkıyor)
- `arama/?q=vaha` → dört alâkasız madde
- `kavalali-mehmed-ali-pasa` maddesi Siva'dan **hiç söz etmiyor** (Hicaz 1813-18,
  Sudan 1820, Mora 1827 var; vahalar yok)

En yakın kırılma **1820-07-20** (*"Sudan seferi başladı"*), **201 gün** uzakta —
yuvarlanamaz. Kaynak yoksa uydurulmaz (KOORDINASYON.md §3). İki seçenek:

| Seçenek | Ne olur |
|---|---|
| **A** — `kur:"1820-01-01"` + `v:` Kavalalı 1820→1914-12-18 | Motor 1820 öncesi peteği komşuya devreder; sahipsiz nokta **doğmaz**, hayalet sahiplik **doğmaz**. ⚠️ `1820-01-01`e madde gerekir (yıl doğru, gün kaynaksız) |
| B — dört vaha gibi 1517'den Osmanlı | Kırılma gerekmez ama Siva'yı 300 yıl fazladan Osmanlı boyar — §3a'daki hatanın aynısı |

**A'yı öneriyorum.** Kararı ve maddenin metnini isterseniz yazarım.

---

## 6. LİBYA (md.17) — sekiz nokta yazıldı, altısı kasten sahipsiz

Şartınız uygulandı: *"eklenecek noktaların **çoğu** kasten sahipsiz kalmalı."*
**8 noktanın 6'sı** (3/4) sahipsiz.

Ölçülen petek alanları (shapely `voronoi_diagram`, aynı `BOLGE`):

| Nokta | Alan |
|---|---|
| Gât | **270.915 km²** |
| Murzuk (Fizan) | 215.417 km² |
| Cağbûb | 170.490 km² |
| Ğadâmis | 118.999 km² |
| Bingazi | 77.682 km² |
| Trablus | 22.951 km² |
| *karşılaştırma:* Kahire | **5.272 km²** |

Tek bir Gât noktası, Kahire'nin peteğinin **51 katını** boyuyor.

- **İdare edilen (2):** Sokna 29.070/15.792 · Câlû 29.033/21.548 —
  Murzuk/Bingazi zinciri, **yeni kırılma yok**
- **Kasten sahipsiz (6):** Serîr · Tâzirbû · Rebyâne · Vâv el-Kebîr ·
  İdehân Murzuk · **Kufra (el-Cûf)**

**Kufra bilerek sahipsiz:** Senûsiyye'nin zâviyesi dinî bir merkezdi, Osmanlı
idaresi oraya hiç ulaşmadı, İtalya ancak **1931'de** — atlasın kapsamı dışında —
girdi. TDV `senusiyye`: Kufra Tâc zâviyesi, merkez oraya Muhammed el-Mehdî
zamanında taşındı; Fransızlar Çad gölü yakınındaki zâviyeyi **20 Ocak 1902**'de
aldı.

⚠️ **Sürt, Zuvâra ve Geryan'ı önce yazdım, sonra sildim** — denetimin yakınlık
kontrolü üçünü de **0.00 km**'de mükerrer buldu; Faz 1'de zaten eklemiştim.
CLAUDE.md §11'in "yakın mükerrer yerleşim" tuzağına kendi dosyamda düştüm.

---

## 7. MEHDÎ DEVLETİ (md.43) — iki tarih yanlış

Bugün veride Mehdî devleti **tek hamlede doğup tek hamlede yıkılıyor**:
1885-01-26 → 1899-01-19. Gerçekte on üç yıllık bir devlet ve geri fethi üç yıl
sürdü. TDV `sudan` + `muhammed-ahmed-el-mehdi`:

| Kayıt | Alan | Mevcut | Önerilen | Gerekçe |
|---|---|---|---|---|
| **Dongola** | `s:"mehdi"` bitiş / `s:"ingiltere"` başlangıç | 1899-01-19 | **1896-09-23** | Kitchener Dongola vilâyetini 23 Eylül 1896'da geri aldı — Ümmüdurman'dan **iki yıl önce**. Bugün Hartum'la aynı güne bağlı |
| **Hartum** | `s:"mehdi"` bitiş / `s:"ingiltere"` başlangıç | 1899-01-19 | **1898-09-02** | Ümmüdurman Muharebesi; ertesi gün Hartum'a girildi. 19 Ocak 1899 fiilî fetih değil, **kondominyum antlaşmasıdır** |

⚠️ **Tutarlılık:** benim Darfur noktalarım (El-Fâşir · Nyala · Cenîne) zaten
`1898-09-02` kullanıyor. Bugün Darfur ile Hartum arasında **4,5 aylık sahte bir
fark** var: Darfur 1898'de İngiliz, Hartum hâlâ Mehdî.

**Maddeleri yazdım** (`olaylar_ek9.js` §J): 1883-11-05 Şeykan · 1896-09-23
Dongola · 1898-09-02 Ümmüdurman · 1899-01-19 Kondominyum. Yani düzeltme
uygulandığında Değişmez 2 için ek iş yok.

### ⚠️ TDV kendi içinde çelişiyor — Ubeyd
`sudan` maddesi **19 Ocak 1883**, `muhammed-ahmed-el-mehdi` maddesi
**24 Şevval 1299 / 7 Eylül 1882** diyor. İkincisi büyük ihtimalle kuşatmanın
başlangıcı. Ubeyd'in veride noktası olmadığı için karar gerekmedi; nokta
eklenirse bu çelişki çözülmeli.

---

## 8. KIZILDENİZ (md.44) — Zeyla yanlış maddeye bağlı

**Zeyla**'nın `1884-01-01` kırılması bugün *"**Reji İdaresi kuruldu (tütün
tekeli)**"* maddesine **+0 gün** bağlanıyor. 1559'dan beri Habeş eyaletine bağlı
bir limanın kaybı, bir tütün tekeli maddesinin altında beliriyor.

**Madde yazıldı** (`olaylar_ek9.js` §K: *"Zeyla ve Somali sahilinin İngiliz
idaresine geçişi"*, `kaynak:"aden"`). **Veri değişikliği gerekmiyor** — tarih
zaten doğru.

### Şüpheli: Sevâkin
`s:"ingiltere"` başlangıcı **1885-02-05**, yani **Masavva'nın İtalyan işgali**
günü. İki farklı devlet, iki farklı olay, aynı gün — Faz 1'deki yuvarlama
desenine benziyor. Sevâkin hiç Mehdî'ye düşmedi; İngiliz-Mısır garnizonu
**1884'ten** beri oradaydı. Ölçtüm ama TDV'de gün bulamadım → **kaynaksız
işaretliyorum**, düzeltmiyorum.

---

## 9. TUNUS ve DÜYÛN-ı UMÛMİYYE (md.51) — madde AYRILMALI

Kullanıcı haklı, iki olayın birbiriyle **hiç ilgisi yok**:

| Mevcut madde | Sorun |
|---|---|
| `1881-05-12` — *"Tunus'un işgali **ve Düyûn-ı Umûmiyye**"* | İki ayrı olay tek maddede |
| `1881-12-20` — *"Muharrem Kararnâmesi ve Düyûn-ı Umûmiyye İdaresi'nin kuruluşu"* | **Zaten var ve doğru** |

TDV `duyun-i-umumiyye`: Muharrem Kararnâmesi **28 Muharrem 1299 / 20 Aralık
1881**; madde Tunus'tan **hiç söz etmiyor**. TDV `tunus`: Fransız ordusu Mart
1881'de girdi, **Bardo (Kasrüssaîd) Antlaşması 12 Mayıs 1881**, **Mersâ
(La Marsa) Sözleşmesi 8 Haziran 1883**.

**Öneri:** `1881-05-12` maddesinin başlığından ve metninden Düyûn-ı Umûmiyye
çıkarılsın; başlık *"Tunus'un işgali — Bardo (Kasrüssaîd) Antlaşması"* olsun.
Düyûn zaten 1881-12-20'de duruyor, **mükerrer üretmez**.
İşgalin ikinci adımını yazdım (`olaylar_ek9.js` §L: 1883-06-08 Mersâ Sözleşmesi).

⚠️ Bu madde hangi dosyada olduğunu bulamadım (benim `olaylar_ek9.js`'imde değil).
Sahibi kimse ona iletilmeli.

---

## 10. BOGOS (md.52) — **kapandı, iş yok**

Kullanıcı *"neresi olduğu haritada yok"* demişti. Faz 2'de **Kerene**
(15.778/38.451) eklendi — Bogos bölgesinin merkezidir. Zinciri:
`habesistan` → `v:` Mısır (Kavalalı) **1872-01-01** → `habesistan` **1884-06-03**
→ `italya` 1889. Her iki kırılmanın da maddesi var (`olaylar_ek9.js` §D).
**Doğrulandı, ek iş yok.**

---

## 11. CEBEL-i DÜRÜZ (md.18) — kullanıcının sorusunun cevabı

> *"Cebel-i Dürüz neresi, kime karşı ayaklandı; Cezayir'den Fransa'ya geçen parça
> bu maddeyle mi ilgili?"*

**Neresi:** Suriye'de, Havran'ın güneydoğusunda, Şam'ın ~100 km güneyinde bir
volkanik dağ bölgesi (Cebelü'd-Dürûz / Cebelü'l-Arab). Dürzîler 17. yüzyıldan
itibaren buraya yerleşti.
**Kime karşı:** Osmanlı merkez idaresine — vergi ve askere alma düzenlemelerine.

**Cezayir'le ilgisi: HİÇ YOK.** Ama kullanıcının neden öyle sandığı **ölçüldü**:

```
Konstantin'in Fransa'ya geçişi  1837-10-13
Cebel-i Dürûz ayaklanması       1837-10-15   →  2 GÜN ARAYLA
```

Konstantin'in kırılmasının **kendi maddesi yoktu**; Değişmez 2 ±30 gün ölçütüyle
en yakın maddeyi eşleştirdiği için Cezayir'in doğusundaki toprak değişimi
**Suriye'deki bir Dürzî ayaklanmasının altında beliriyordu.** Denetim bunu
"451/451 maddeli, 0 açık" diye **temiz** raporluyordu — çünkü Değişmez 2
maddenin **var olup olmadığını** sorar, **doğru madde olup olmadığını** sormaz.

**Kapatıldı:** *"Konstantin'in düşüşü — doğu Cezayir beyliğinin sonu"* maddesi
yazıldı (`olaylar_ek9.js` §G), eşleşme artık **+0 gün**.

### 🔴 Bu bir DENETİM BOŞLUĞU sınıfıdır — Oturum 2'ye
Ölçtüm: bu turda **üç** yanlış eşleşme buldum ve üçü de denetimden temiz
geçiyordu.

| Kırılma | Bağlandığı madde | Fark |
|---|---|---|
| Konstantin 1837-10-13 | *Cebel-i Dürûz ayaklanması* (Suriye) | +2 gün |
| Zeyla 1884-01-01 | *Reji İdaresi kuruldu* (tütün tekeli) | +0 gün |
| Murzuk 1577-01-01 | *İstanbul Rasathanesi kuruldu* | +0 gün |

**Önerilen onuncu denetim — "yer uyuşması":** kırılmanın yerleşim adı (ya da
`m:` merkezi, ya da ülke/bölge adı) eşleştiği maddenin `yer:` alanında veya
başlığında geçiyor mu? Geçmiyorsa **şüpheli** listelensin — ihlal değil, gözden
geçirme listesi (mükerrer denetimindeki "ZAYIF ölçüt" gibi). Üç vakanın üçü de
bu ölçütle yakalanırdı.

---

## 12. Ölçülmüş durum

`py arac/denetle.py`, bu oturumun değişiklikleri uygulanmış hâlde:

```
939 yerleşim, 957 kronoloji maddesi
Değişmez 1   ✗  40 sahipsiz (beklenen 34)  ← §0b, beklenti eskimesi
Değişmez 1b  ✓  pencere arası boşluk 1 (beklenen 1)
Değişmez 2   ✓  452 kırılma, 0 açık
Değişmez 3   ✓  381 çelişki (beklenen ≤383)
dönem sağlığı ✓  0 sıfır-uzunluk, 0 ters, 0 kategori-içi çakışma
mükerrer madde ✓ 0 şüpheli çift
konum         ✓  0 nokta kara maskesinin dışında
yakınlık      ✓  0 yeni mükerrer (3'ü yazıldıktan sonra silindi)
denetle_statu ✓  temiz
```

Yerleşim 927 → **939** (+12: 4 vaha, 2 idarî Libya, 6 sahipsiz Libya).
Kırılma 451 → **452** (+1: vahaların `1914-12-18`i, maddesi var).
`olaylar_ek9.js` 13 → **28 madde** (+15 yazıldı, 2 silindi: Fizan mükerreri).

### ⚠️ Ölçüm sırasında iki eşzamanlı yazma yakalandı

1. **`data/olaylar_ek7.js`** — commit'lenmemiş **+29 madde**. Benimkilerle
   çakışmıyor.
2. **`data/olaylar_ek8.js`** — Fizan maddesi ben yazarken eklendi ve benimkiyle
   **mükerrer** oldu (§4). Denetim yakaladı, benimki silindi.

Kronoloji sayısı üç koşu arasında **948 → 950 → 957** diye ilerledi; yani
ölçümüm hareketli bir zemin üzerinde alındı. **Üretimden önce denetim yeniden
koşturulmalı.**

Bu ikinci vaka `CLAUDE.md §7`'nin dosya sahipliği kuralının **kronoloji
dosyalarında da gerektiğini** gösteriyor: `olaylar_ek*.js` dosyalarının ayrı
sahipleri var ama **tarih uzayı ortak** — iki oturum ayrı dosyalara yazarken
aynı güne mükerrer madde üretebiliyor. Denetim bunu yakaladı; yakalamasaydı
kullanıcı aynı olayı iki kere görecekti (Âli Paşa vakasının aynısı).

---

## 13. Kapanmayan üç iş

| İş | Neden bende kapanmadı |
|---|---|
| **Cezayir `abdulkadir` uygulaması** (21 kayıt bende) | Kimlik `renkler.py`'de yok; tanımsız kimlik yazılırsa bölge hiç boyanmaz (CLAUDE.md §8). Kimlik girer girmez uygularım |
| **Siva** | TDV'de kaynak yok (§5); karar sizde |
| **10 Cezayir kasabasının gerçek tarihi** | TDV kasaba düzeyinde vermiyor (§3g); uydurmadım |
| **md.40 çölü** | 260.114 km² açık borç (§5); üç dolgu noktası sonraki pencereye ertelendi |

---

## 14. ALÂİYE — dönemli ayrım çözüldü (Anadolu, Afrika dışı)

Kilit penceresinde bakabildiğim iş buydu. **Sonuç: ilk turda size verdiğim
tavsiye yanlıştı, düzeltiyorum.**

İlk turda *"Alâiye ayrı beylik değil, `karaman`'a katılmalı; ayrı kimlik
gereksiz DSATUR düğümü ekler"* demiştim. İki dayanağı da çürüdü:

1. Oturum 16 ölçtü — **renk maliyeti yok** (261 kimlik → 8 renk).
2. `alaiye` slug'ının `alanya`'ya yönlendirme olduğunu görüp **durmuştum**.
   Müstakil madde var: **`alaiye-beyligi`** → `<title>` = "ALÂİYE BEYLİĞİ - TDV
   İslâm Ansiklopedisi" ✓ CANLI. Bir arama daha yapsaydım ilk turda bulacaktım.

### Belirleyici bulgu

`alaiye-beyligi` maddesi, birebir:

> *"Karaman b. Savcı Bey tarafından **1427** yılında **5000 altın** karşılığında
> **Memlük Sultanı Barsbay**'a satıldı."*

Alâiye'nin son 44 yılı Karamanlı **değil, Memlük**. Sizin sezginiz ("erken dönem
Karaman kolu, geç dönem ayrı") **doğruydu**; ama geç dönem "fiilen müstakil"
değil, **başka bir devletin toprağı** — ve o devletin kimliği (`memluk`) zaten var.

### Mevcut kayıt

```js
{ ad:"Alanya", tur:"liman", lat:36.5502, lon:31.9997, g:1, k:3, m:"Antalya",
  s:[{f:"1281-01-01",t:"1293-01-01",d:"karaman"},
     {f:"1293-01-01",t:"1471-01-01",d:"alaiye"}],
  d:[{f:"1471-01-01",t:"1923-10-29",y:"savas"}] },
```

### Önerilen

```js
  s:[{f:"1281-01-01",t:"1293-01-01",d:"karaman"},        // ⚠️ ayrı mesele, aşağıda
     {f:"1293-01-01",t:"1427-01-01",d:"alaiye"},         // Karamanoğulları kolu
     {f:"1427-01-01",t:"1471-01-01",d:"memluk"}],        // Barsbay'a satıldı
  d:[{f:"1471-01-01",t:"1923-10-29",y:"savas"}]
```

**`alaiye` kimliği KALIR** — silinmez, birleştirilmez; yalnız dönemi 1471 değil
**1427**'de biter. Tek satırlık değişiklik.

### Kırılma maliyeti ve wrong-match riski

`1427-01-01` yeni bir kırılma. O günde **üç madde zaten var** —
*Tâceddinoğulları Beyliği'nin ilhakı: Niksar* · *Belgrad'ın Macaristan'a
bırakılması* · (1427-06-01 Hacıemîroğulları). Yani Değişmez 2 **+0 gün** ile
geçer **ama §11'deki yanlış-eşleşme sınıfına düşer**: Alâiye'nin Memlükler'e
satılışı, Niksar'ın ilhakı maddesinin altında belirir.

→ **Maddeyi yazdım** (`olaylar_ek9.js` §M). Uygulanınca eşleşme doğru olur.

⚠️ **Ayrıca:** `1281-01-01 → 1293-01-01` aralığı bugün `karaman` yazıyor. TDV
`alanya` maddesi bu dönemde Alâiye'nin **Kıbrıs Krallığı**'na bağlı olduğunu
söylüyor (Selçuklu 1221'de almış, 1243 sonrası elden çıkmış). Bu **pencere içinde
Latin hâkimiyeti** demek ve `kibris` kimliği gerekir — **Oturum 13'ün alanı**,
epok kararıyla birlikte ele alınmalı. Ayrıntı: `OTURUM-14-BEYLIKLER.md` §3.11.

⚠️ **Dosya notu:** Alâiye maddesi Anadolu'ya ait ama `olaylar_ek9.js`'e yazıldı —
elimdeki tek kronoloji dosyası o. Başka bir dosyaya taşınması gerekiyorsa söyleyin.
`olaylar_ek8.js` Fizan vakasında görüldüğü gibi **tarih uzayı ortak**; taşımadan
önce 1427-01-01'e başka bir oturumun yazıp yazmadığı kontrol edilmeli.

---

## 15. md.17'nin İKİNCİ YARISI — Libya iç noktaları (HAZIR LİSTE, yazılmadı)

Kilit sürerken hazırlandı. **Yazılmadı** — `yerlesimler_afrika.js` donuk.

### 15a. Önce: durum bugün ne?

| Ölçüt | Değer |
|---|---|
| Libya kutusundaki nokta | **36** (9'u kasten sahipsiz, %25) |
| Yoğunluk | **48.876 km²/nokta** |
| *merkezin ilk ölçümü* | *192.614 km²/nokta (8 nokta)* |
| *Batı Anadolu* | *1.868 km²/nokta* |

Yoğunluk **4 kat** iyileşmiş (benim 8 noktam + başka oturumun eklemeleri:
Zâviye · Hums · Zilten · Mîzde · Benî Velîd · Yefren · Merc · Beyzâ · Ecdâbiye ·
Sirte iç çölü · Fizan güneyi · Tibesti · Büyük Doğu Ergi). Hâlâ Batı
Anadolu'nun **26 katı** kaba.

### 15b. 🔴 Ölçütümü bir kez değiştirmek zorunda kaldım

İlk ölçümde "80 km üstü düz kenar" saydım ve bir aday liste kurdum. **Simülasyon
listemi çürüttü:** kenar sayısı 72 → 85, toplam 17.986 → 20.246 km (**+%13**).
Sebep: seyrek bölgeye nokta eklemek uzun kenarı bölerken **yeni uzun kenarlar
doğuruyor**; net etki artı çıkabiliyor.

Yanlış olan şeyi sayıyordum. **Bir kenar ancak iki tarafındaki hücrenin SAHİBİ
farklıysa haritada çizgi olarak görünür.** Doğru ölçüt bu:

| Tarih | Görünür düz kenar (>80 km, karada, farklı sahip) |
|---|---|
| 1700-06-15 | 15 adet · 3.803 km · en uzun **438 km** |
| 1880-06-15 | 18 adet · 4.298 km · en uzun **438 km** |
| 1911-06-15 | 18 adet · 4.298 km · en uzun **438 km** |

**Üç tarihte de aynı** — kullanıcının "cetvelle çizilmiş gibi" dediği tam bu:
iki yüz yıl boyunca kımıldamayan bir çizgi.

**Ve beşinin beşi de `(boş) | OSMANLI` sınırı.** Yani cetvel çizgisi Osmanlı ile
başka bir devletin arasında değil, **Osmanlı ile sahipsiz çölün arasında.**

| Uzunluk | Orta noktası | Taraflar |
|---|---|---|
| 438 km | 25.83°K / 11.15°D | (boş) ↔ OSMANLI |
| 432 km | 26.34°K / 13.21°D | (boş) ↔ OSMANLI |
| 424 km | 22.34°K / 11.25°D | (boş) ↔ OSMANLI |
| 311 km | 28.24°K / 21.70°D | (boş) ↔ OSMANLI |
| 275 km | 25.72°K / 15.58°D | (boş) ↔ OSMANLI |

### 15c. 🔴 ASIL SEBEP NOKTA DEĞİL — motorun yaslanacağı hat yok

`uret_petek.py`:347 — petek sınırı **nehir yatağına (0.30° ≈ 33 km)** ya da
**dağ sırtına (0.35° ≈ 39 km)** yaslanır. Ölçtüm:

| | Libya | Anadolu |
|---|---|---|
| Motorun okuduğu **nehir** parçası | **0** | 17 parça · ~6.746 km |
| Motorun sırt saydığı (`FEATURECLA` ⊃ "Range") | 3 parça · ~3.937 km | 3 parça · ~3.978 km |

Libya'nın üç sırtı: **Jabal bin Ghunaymah** (orta) · **Al Jabal al Akhdar**
(Berka kıyısı) · **Tibesti** (uzak güney). **Hiçbiri Fizan sınırında değil** —
oysa görünür cetvel çizgilerinin beşi de orada (22–28°K, 10–16°D).

> **Sonuç: Fizan'daki Osmanlı/çöl sınırının 33–39 km içinde yaslanacak HİÇBİR
> ŞEYİ yok.** Ham Voronoi orta dikmesi olarak kalıyor — ve orta dikme tanımı
> gereği düz bir doğrudur. Cetvel görüntüsü veri eksikliği değil, **çölde
> topografya olmamasının sonucu.**

Bu, Oturum 16'nın md.17 teşhisini ("çöl sınırı cetvel değil, nokta yokluğu")
**yarısından düzeltir:** nokta yokluğu gerçekti ve giderildi (192.614 → 48.876),
ama cetvel görüntüsü ondan bağımsız olarak devam ediyor.

### 15d. Nokta eklemenin ölçülmüş tavanı

Aşağıdaki dokuz nokta simüle edildi (1880-06-15, görünür kenar ölçütü):

| Deneme | Kenar | Toplam | En uzun |
|---|---|---|---|
| bugünkü hâl | 18 | 4.298 km | **438 km** |
| 7 nokta | 19 | 4.010 km | 451 km ⚠️ *arttı* |
| 8 nokta (+Tâsîlî) | 20 | 4.137 km | **390 km** |
| **9 nokta** | 21 | **3.931 km** | **390 km** |

**Kazanç: en uzun çizgi -%11, toplam -%9.** Dokuz nokta için mütevazı; §15c
yüzünden tavan bu. **md.17 nokta ekleyerek KAPANMAZ, yalnız yumuşar.**

⚠️ Yedi nokta aşamasında en uzun kenarın **artması** (438 → 451) tesadüf değil:
İdehân Ubârî eklenince Gât'ın batı sınırı yeni tepe oldu. Tâsîlî n'Accer onu
kırıyor. **Listeden nokta çıkarılırsa bu ölçüm geçersizdir** — dokuzu birlikte
çalışıyor.

### 15e. HAZIR LİSTE — 9 nokta, 7'si kasten sahipsiz (%78)

Hepsi kara maskesinin içinde; en yakın komşuya mesafe ≥ 57 km (3 km kuralı
fazlasıyla sağlanıyor). Hiçbiri mevcut bir kaydın adı değil — Sürt/Zuvâra/Geryan
hatası tekrarlanmasın diye 36 noktanın hepsiyle karşılaştırıldı.

**KASTEN SAHİPSİZ (7)** — `s:[], d:[], v:[]`, hiç dönem yok:

| Ad | Enlem | Boylam | Neyi kırıyor |
|---|---|---|---|
| İdehân Ubârî | 25.90 | 11.30 | 438 km'lik kenar |
| Ramletü Murzuk (güneybatı) | 24.60 | 12.10 | 432 km'lik kenar |
| Vâdî Tanezzûft | 22.40 | 11.30 | 424 km'lik kenar |
| Serîr Kalanşû | 28.20 | 21.70 | 311 km'lik kenar |
| Ramletü Zellâf | 25.60 | 15.60 | 275 km'lik kenar |
| Ma'tan es-Sarra | 21.70 | 21.85 | güney sınırı |
| **Tâsîlî n'Accer** | 25.30 | 9.20 | Gât'ın batı sınırı — ⚠️ **Cezayir toprağı**, Libya değil |

**SAHİPLİ (2)** — Fizan'ın gerçek kaza merkezleri, Murzuk'un dönem zincirini
birebir tekrarlar, **yeni kırılma üretmezler**:

| Ad | Enlem | Boylam |
|---|---|---|
| Sebha | 27.038 | 14.428 |
| Ubârî | 26.590 | 12.777 |

```js
// sahipli ikisi için dönem zinciri (Murzuk ile aynı):
s:[{f:"1281-01-01",t:"1577-01-01",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
d:[{f:"1577-01-01",t:"1711-03-01"},{f:"1835-05-26",t:"1912-10-18"}],
v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}]
```

🔴 **İkisi de zaten Osmanlı boyalı hücrenin İÇİNDE** — Murzuk'un peteğini böler,
sınırı dışarı taşımaz. Toprak **büyümez**. md.40'ta dört vahanın boş çölü
yutması gibi bir etki burada yok; ölçüldü.

⚠️ **`BEKLENEN_SAHIPSIZ` 40 → 47** (md.40'ın üç dolgusu da eklenirse **50**).

### 15f. Kararı gerektiren nokta

**Motor tarafı (Oturum 16'ya):** §15c'ye göre asıl kaldıraç nokta değil,
sınırın yaslanacağı hat. İki seçenek ölçülebilir:
1. `ne_10m_geography_regions_polys`'ten **kum denizi / erg / serîr** poligonlarını
   da yaslama hedefi yapmak (bugün yalnız `"Range"` alınıyor — Libya'da
   22 poligon var, motorun 3'ünü sayıyor).
2. Sahipsiz/sahipli sınırını **keskin çizgi yerine geçişli** çizmek — çölde
   sınır gerçekten tanımsızdı; keskin çizgi olmayan bir kesinlik iddia ediyor.

İkisi de motorun işi, benim değil. Ölçüm yukarıda.

---

## 16. hatalar 16 turu — dört iş

### 16a. ✅ 21 Cezayir kaydı UYGULANDI (§3d'nin karşılığı)

`abdulkadir` kimliği gelince (`a9feea6`, `#26a69a`) kendi dosyamdaki 21 kaydı
düzelttim. **Denetim tamamen temiz:**

```
939 yerleşim, 971 kronoloji maddesi
Değişmez 1   ✓  40 sahipsiz (beklenen 40)
Değişmez 1b  ✓  pencere arası boşluk 0 (beklenen 0)
Değişmez 2   ✓  448 kırılma, 0 açık
Değişmez 3   ✓  381 çelişki (≤383)
dönem sağlığı ✓ · mükerrer ✓ 0 · konum ✓ 0 · denetle_statu.py ✓ temiz
SONUÇ: temiz
```

Üç gruba ayrıldı:

| Grup | Kayıt | Yapı |
|---|---|---|
| **A — `abdulkadir`** (10) | Dellîs · Tenes · Şelif · Mustagānim · Muaskar · Sîdî Bel Abbès · Ayn Temûşent · Nedrûme · Mesîle · Bû Sa'âde | `v:` ocaklık →1830-07-05, `v:` "Osmanlı hükümranlık iddiası" →1832-11-22, **`s:"abdulkadir"`** → o yerin Fransız tarihi |
| **B — Ahmed Bey** (9) | Cicel · Kolo · Sikikde · Mîle · Kalme · Sûk Ahrâs · Tebesse · Batna · Berc Bû Areric | `v:` ocaklık →1830-07-05, `v:` **"Ahmed Bey'in Konstantin beyliği"** → Fransız tarihi |
| **C — Sahra** (2) | Ağvât · Gardâye | `v:` ocaklık →1830-07-05, `v:` **"Sahra vahalarının özerk idaresi"** → 1852-12-04 |

A'da `v:` değil **`s:`** kullanıldı — Abdülkādir Osmanlı'ya değil Fas sultanına
sığındığı için "tâbi" yanlış olurdu. Değişmez 3'e etkisi **sıfır**: denetim
1300–1800 kesitlerini örnekliyor, bu dönemlerin hepsi 1830 sonrası.

### 16b. 🔴 SORUNUZUN CEVABI — Biskra ve Tuggurt

**Önce bir düzeltme:** *"Annaba ile Bicâye'nin `v:` dönemleri zaten
1830-07-05'te bitiyormuş, anakronik değiller"* demişsiniz. **Ölçüm bunu
doğrulamıyor** — dördü de hâlâ anakronik:

| Kayıt | `v:` bitişi | Fazlalık |
|---|---|---|
| Annaba | **1832-03-01** | 1 yıl 8 ay |
| Bicâye | **1833-09-29** | 3 yıl 3 ay |
| Biskra | 1844-03-04 | 13 yıl 8 ay |
| Tuggurt | 1854-12-02 | 24 yıl 5 ay |

Dördü de `yerlesimler.js`'te, yani sizde.

#### 🔴 TDV'DE KAYNAK YOK — dört arama, dördü de boş

| Arama | Sonuç |
|---|---|
| `arama/?q=tuggurt` | *"tuggurt için madde başlıklarında sonuç bulunamadı"* — 0 madde, 0 içerik |
| `arama/?q=cellâb` | yalnız **İBNÜ'l-CELLÂB** (Mâlikî fakihi) — hânedanla ilgisiz |
| `arama/?q=biskre` | Cerîd · Gāniye · Hammâdîler · İbn Haldûn… — hiçbiri Biskra maddesi değil |
| `arama/?q=zîbân` | Burç (astroloji) · İbn Receb — bölge maddesi yok |

**Uydurmuyorum.** Aşağıdaki cevap TDV'ye değil, kaydın kendi iç tutarlılığına
dayanıyor ve gerekçesi açık:

**BİSKRA → (a) Ahmed Bey, yani B grubu.**
Biskra Zîbân bölgesindedir ve Osmanlı Cezayir'inde **Konstantin beyliğinin**
(Beylerbeyliği'nin doğu kolu) idaresindeydi. Aynı bölgedeki komşularını —
**Batna · Tebesse · Sûk Ahrâs**, üçü de aynı Fransız tarihini (1844-03-04)
taşıyor — B grubuna koydum. Biskra'yı ayrı tutmak aynı Aurès-Zîbân kuşağını
iki farklı sahiple boyamak olur. Tutarlılık (a)'yı gerektiriyor.

**TUGGURT → (c) kendi başına, yani C grubu.**
Sizin de yazdığınız gibi Benî Cellâb kendi hânedanıydı. Ne Ahmed Bey'in
beyliğine ne Abdülkādir'e bağlıydı — Vâdî Rîğ, Tell'in çok güneyinde, iki
gücün de erişemediği bir vaha zinciridir. **Ağvât ve Gardâye ile aynı sınıf**,
o yüzden aynı etiketi öneriyorum: `k:"Sahra vahalarının özerk idaresi"`.

Önerilen (dördü de `yerlesimler.js`, sizde):

```js
Annaba   v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)"},
            {f:"1830-07-05",t:"1832-03-01",k:"Ahmed Bey'in Konstantin beyliği"}]
Bicâye   v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)"},
            {f:"1830-07-05",t:"1833-09-29",k:"Ahmed Bey'in Konstantin beyliği"}]
Biskra   v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)"},
            {f:"1830-07-05",t:"1844-03-04",k:"Ahmed Bey'in Konstantin beyliği"}]
Tuggurt  v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)"},
            {f:"1830-07-05",t:"1854-12-02",k:"Sahra vahalarının özerk idaresi"}]
```

⚠️ **`k:` etiketi rengi DEĞİŞTİRMEZ** (`girdi.py`:129 — motor okumaz). Yani bu
düzeltme dürüstlük kazandırır, haritayı düzeltmez. Tuggurt'un 24 yıl Osmanlı
tonunda kalması ancak ayrı bir kimlikle (`benicellab` ya da genel bir
`sahra-vahalari`) çözülür — **kimlik kararı sizin/Oturum 9'un.** Ben yalnız
ölçüp sınıflandırdım.

### 16c. md.6 — NAPOLYON'UN MISIR İŞGALİ

Kullanıcı haklı: veride **1798–1801 arası hiçbir iz yok**. Kahire 1517-02-15'ten
1805-07-09'a kadar kesintisiz `d:`.

**Önerilen örtü** — `d:` (Osmanlı doğrudan) altta kalır, üstüne Fransız taraması:

```js
isg:[{f:"1798-07-01", t:"1801-10-09", d:"fransa", kaynak:"kahire"}]
```

**Uygulanacak kayıtlar (7, hepsi sizde):** Kahire · İskenderiye · Dimyat ·
Reşîd · Süveyş · Asyut · Sina güneyi.
⚠️ **Asvan ve İbrim'i dışarıda bırakmanızı öneriyorum** — Yukarı Mısır'a Fransız
denetimi Murad Bey'i kovalayarak ulaştı ama kalıcı olmadı.

#### ⚠️ İki madde yazdım, sonra sildim — kronolojide zaten vardı

Mükerrer denetimi yakaladı (ikisi de oran **0.60**):

| Yazdığım | Çakıştığı |
|---|---|
| 1798-07-01 *Napolyon'un Mısır'a çıkarması* | `olaylar.js` **1798-07** *Napolyon'un Mısır'ı işgali* |
| 1801-09-02 *Fransızların Mısır'dan tahliyesi* | `olaylar_ek5.js` **1801-10-09** *Mısır'ın Fransızlardan tahliyesi* |

Napolyon devri kronolojide **zaten tamdı**: 1798-07 işgal · 1798-09-03 Fransa'ya
savaş ilânı · 1799-05-20 Akkâ Savunması · 1801-10-09 tahliye. **Eksik olan
harita tarafıydı, kronoloji değil.** Yazmadan önce 1798–1801 aralığını
taramamıştım (1830–1914'ü taramıştım) — Fizan hatasının ikinci tekrarı:
**dosya ayrı, tarih uzayı ortak.**

**İyi haber:** örtünün iki ucu zaten maddeli olduğu için **D-4 kendiliğinden
sağlanıyor** — başı `1798-07` (+0 gün), sonu `1801-10-09` (+0 gün). Örtünün
bitişini bu yüzden **1801-10-09** yaptım, kendi yazdığım 1801-09-02'yi değil.

**Kalan iki madde** (`olaylar_ek9.js` §N) gerçekten eksikti:
- **1798-07-21 Piramitler Muharebesi ve Kahire'nin alınması** — hiçbir yerde yoktu
- **1799-03-18 Akkâ kuşatmasının başlaması** — `ek5`'teki 1799-05-20 kuşatmanın
  *püskürtülmesi*, ayrı olay; denetim 63 gün arayla ikisini ayırt etti

⚠️ Mevcut **`1798-07`** maddesi AY hassasiyetinde (CLAUDE.md §8) → **1798-07-01**
yapılmalı. Sizde.

#### 🔴 Kaynak durumu açıkça
TDV bu olayın **gün düzeyini vermiyor**:

| Kaynak | Verdiği |
|---|---|
| `kahire` ✓ CANLI | yalnız **"1798"** — gün yok |
| `aris` ✓ CANLI | 18 Şubat 1799 (Arîş'in işgali) · 17 Kasım 1799 (geri alınışı) · 24 Ocak 1800 (Arîş Antlaşması); tahliyeyi **"aynı yıl"** diyor |
| `akka` ✓ CANLI | **18 Mart 1799** — bu tur içindeki TEK gün-kesin TDV tarihi |

⚠️ `aris` maddesinin tahliyeyi 1800'e koyması **eksiktir**: Arîş Antlaşması
İngiltere'ce onaylanmadı ve Fransızlar 1801'e kadar kaldı (Kahire 27 Haziran,
İskenderiye 2 Eylül 1801). 1798-07-01, 1798-07-21 ve 1801-09-02 günleri
standart kayıttan alınmıştır ve maddelerde **böyle işaretlenmiştir.**

### 16d. md.11 — GİRİT: ÖLÇÜLDÜ, KULLANICI HAKLI

Adadaki **beş noktanın beşi de**, 1829 · 1832 · 1838 · 1841 kesitlerinin
**hepsinde `d:` (doğrudan Osmanlı)**:

| Nokta | 1829 | 1832 | 1838 | 1841 |
|---|---|---|---|---|
| Hanya · Girit (Resmo) · Kandiye · İsfakiye · Sitiye | `d:` | `d:` | `d:` | `d:` |

**Mısır dönemi veride HİÇ YOK.** Yani kullanıcının "hepsi açık kırmızı olmalı"
şikâyeti doğru ve sebebi "bir kısmı `d:` kalmış" değil — **hiçbiri `v:` değil.**

⚠️ Ve bu, Değişmez 2'nin **aynadaki hâli**: kronolojide
*"1830-11-01 Girit'in idaresi Mehmed Ali'ye bırakıldı"* maddesi **var**, ama
karşılığında hiçbir kırılma yok. Denetim maddesiz kırılmayı yakalıyor,
**kırılmasız maddeyi yakalamıyor.** Oturum 2'ye ikinci bir denetim fikri.

**TDV `girit`** (✓ CANLI) doğruluyor: idare **1830**'da Mehmed Ali'ye verildi,
*"15 Temmuz 1840 tarihinde Londra Antlaşması gereğince bu ada üzerindeki
tasarruf hakkını kaybetti."*

**Önerilen (5 kayıt, hepsi sizde):**

```js
// mevcut d: dönemi 1830-11-01'de kesilir, 1840-07-15'te devam eder
d:[{f:"<mevcut başlangıç>", t:"1830-11-01"}, {f:"1840-07-15", t:"<mevcut bitiş>"}],
v:[{f:"1830-11-01", t:"1840-07-15", k:"Mısır (Kavalalı)"}]
```

**Her iki sınırın da maddesi ZATEN VAR** — `1830-11-01` *"Girit'in idaresi
Mehmed Ali'ye bırakıldı"*, `1840-07-15` Londra Antlaşması. **Yeni kronoloji
maddesi gerekmiyor.**

📌 Kullanıcının `hatalar 11 md.11`'deki ilk hâli ("yalnız Girit'in orta bölümü
boyasız") ayrı bir belirti ve **bu düzeltmeyle açıklanmıyor** — beş nokta da
aynı sahibi taşıdığına göre orta bölümün boyasız görünmesi göl/maske kaynaklı
olmalı. Ölçümü Oturum 16'da; bu düzeltme uygulandıktan sonra tekrar bakılmalı.

---

## 17. ✅ DOKUZ LİBYA NOKTASI UYGULANDI

`data/yerlesimler_afrika.js` §17'ye yazıldı (7 sahipsiz + 2 sahipli).
Üretim 02:44'te `donemler.js`'i yazıp bittiği için girdi serbestti.

**Yazmadan ÖNCE ölçüldü** (Sürt/Zuvâra/Geryan hatasının dersi): dokuz nokta
**1.525 mevcut noktanın hepsiyle** karşılaştırıldı — dört yerleşim dosyası
birden, yalnız Libya kutusu değil.

| Yeni nokta | En yakın komşu | Mesafe |
|---|---|---|
| Ubârî | İdehân Murzuk | **57,4 km** ← en dar |
| Serîr Kalanşû | Serîr | 83,2 km |
| Tâsîlî n'Accer | Gât | 105,5 km |
| İdehân Ubârî | İdehân Murzuk | 114,8 km |
| Sebha | Murzuk (Fizan) | 134,3 km |
| Ramletü Zellâf | Vâv el-Kebîr | 164,8 km |
| Ramletü Murzuk | İdehân Murzuk | 180,4 km |
| Ma'tan es-Sarra | Rebyâne | 280,3 km |
| Vâdî Tanezzûft | Fizan güneyi | 284,9 km |

3 km kuralı en dar noktada **19 kat** sağlanıyor; ad çakışması yok.

### 17a. Uygulama sonrası denetim — TAM ÇIKTI

```
951 yerleşim, 978 kronoloji maddesi
Değişmez 1  ✗  951 yerleşim, 50 sahipsiz (beklenen 43)   ← TEK KIRMIZI, BEKLENEN
Değişmez 1b ✓  pencere arası boşluk: 0
Değişmez 2  ✓  448 kırılma, 0 açık          ← DEĞİŞMEDİ
Değişmez 2s ✓  566 yabancı kırılması, 115 açık (tavan 115)
Değişmez 2t ✓  kırılmasız madde: 67 (tavan 67)
Değişmez 3  ✓  381 çelişki (tavan 383)      ← DEĞİŞMEDİ
dönem sağlığı ✓ · mükerrer ✓ 0 · konum ✓ 0 nokta maske dışında
```

Üç şey **ölçümle** doğrulandı, varsayımla değil:
1. **Kırılma 448'de kaldı** — Sebha ve Ubârî'nin Murzuk zincirini birebir
   tekrarladığı iddiası doğruydu; yeni sınır üretmediler.
2. **Konum 0** — dokuz noktanın dokuzu da kara maskesinin içinde.
3. **Değişmez 3 oynamadı** — `m:"Murzuk (Fizan)"` bağı çelişki üretmiyor.

### 17b. 🔴 SİZDE KALAN TEK İŞ

```python
# arac/denetle.py:67  (Oturum 2'nin dosyası, dokunmadım)
BEKLENEN_SAHIPSIZ = 50      # 43 idi
```
Bu güncellenene kadar denetim Değişmez 1'i **İHLAL** raporlar; ihlal gerçek
değil, beklentinin eskimesidir. 43 + 7 = 50, artışın tamamı §17a'nın
kasten sahipsiz noktalarıdır.

---

## 18. NAPOLYON `isg:` ÖRTÜSÜ — KESİNLEŞMİŞ LİSTE

### 18a. 🔴 ÖNCE BİR DÜZELTME: D-4 gerekçeniz doğru sonuca YANLIŞ yoldan varıyor

*"D-4 kendiliğinden sağlanıyor: örtünün iki ucunun da maddesi zaten var"*
demiştiniz. Sonuç doğru ama sebep bu değil — **ölçtüm:**

| Dosya | `isg:` okuyor mu |
|---|---|
| `arac/uret_petek.py` | **0 eşleşme** — hiç okumuyor |
| `arac/uret_devirler.py` | **0 eşleşme** |
| `arac/denetle.py`:637-643 | yalnız **dönem sağlığı** (sıfır uzunluk / ters / çakışma) |

Yani `isg:` **hiçbir yerde kırılma üretmez.** Örtünün uçlarında madde olsa da
olmasa da Değişmez 2 kımıldamaz. Bu ayrım pratik: **`isg:` sınırları serbestçe
seçilebilir**, kronoloji borcu doğurmadan.

### 18b. Uygulanacak — 7 kayıt

```js
isg:[{f:"1798-07-01",t:"1801-10-09",d:"fransa",kaynak:"kahire"}]
```

| Kayıt | Satır | Notu |
|---|---|---|
| Kahire | 607 | |
| İskenderiye | 609 | |
| Dimyat | 611 | |
| Asyut | 613 | ⚠️ bkz. 18d |
| Reşîd (Rosetta) | 980 | |
| Süveyş | 666 | `s:` yok, yalnız `d:` — örtü yine `d:` dönemine düşer |
| Sina güneyi | 829 | |

**DIŞARIDA (2):** `Asvan` (615) · `İbrim` (617) — Fransız denetimi Yukarı
Mısır'a Murad Bey'i kovalayarak ulaştı ama idare kurmadı.

`kaynak:"kahire"` seçildi çünkü o maddeyi **kendim okudum** ve işgali
(yıl hassasiyetinde) andığını gördüm. `misir` da canlı ve semantik olarak
belki daha uygun, ama içeriğini doğrulamadım — **okumadığım bir maddeye
atıf yapmaktansa okuduğuma yapmak** doğru olan.

`kaynak:` alan adı Bosna'nın üç kaydında (`berlin-antlasmasi`) canlı olarak
duruyor — `y:` düzeltmesi uygulanmış, teyit ettim.

### 18c. Sınırların gerekçesi

- **`f:"1798-07-01"`** — donanmanın İskenderiye önlerine varışı. `olaylar.js`'te
  `1798-07` maddesi var; **onu gün hassasiyetine çekmek sizde.**
- **`t:"1801-10-09"`** — `olaylar_ek5.js`'te zaten bu günde madde var. İlk
  önerim 1801-09-02 (İskenderiye'nin teslimi) idi; mükerrer denetimi 0.60
  oranıyla çarpınca mevcut maddeye hizaladım.

### 18d. ⚠️ AÇIK BORÇ — örtünün granülaritesi (md.40'ın oazis borcu gibi)

Tek örtü, yedi kayıt, aynı gün. **Gerçekte kademeliydi:** İskenderiye Temmuz
1798, Kahire Piramitler'den sonra, Süveyş Aralık 1798, **Asyut ancak Ocak
1799** (Desaix'in Yukarı Mısır seferi). Yani Asyut'un örtüsü ~6 ay fazla
yer kaplıyor.

**Kademelendirmedim, çünkü kademe günleri TDV'de YOK.** §16c'nin tablosu:
`kahire` yalnız "1798" diyor, `aris` tahliyeyi yanlışlıkla 1800'e koyuyor,
tek gün-kesin TDV tarihi 18 Mart 1799 (`akka`). Şehir şehir gün yazmak
standart kayıttan alıp TDV'ye yamamak olurdu — **CLAUDE.md §4'ün "tarih
uydurma" yasağı tam olarak bu.**

18a yüzünden kademelendirme *teknik olarak* bedavaydı (kırılma doğurmuyor).
Engel teknik değil **kaynak**tı. Bunu yazıyorum ki "yapılabilirdi ama
yapılmadı" ile "yapılamazdı" karışmasın.

📌 Örtünün doğası bu kabaca yaklaşımı `d:`/`s:`ten daha çok kaldırır: `isg:`
"bu toprak fiilen X'in denetimindeydi" der, "şu gün el değiştirdi" demez.
Ama borç borçtur ve md.40'ınki gibi açıkça kayda geçiyor.

---

## 19. 🔴 §16b'DE KALAN İŞ VAR — etiket düzeldi, DÖNEM BÖLÜNMEDİ

*"Onları ben uyguladım (etiketler düzeldi). Kalan bir şey varsa söyle."*
→ **Var.** Ölçtüm:

| Kayıt | Bugünkü `v:` |
|---|---|
| Annaba | `1671-01-01 → 1832-03-01` **Ahmed Bey'in Konstantin beyliği (Osmanlı adına)** |
| Bicâye | `1671-01-01 → 1833-09-29` **Ahmed Bey'in Konstantin beyliği (Osmanlı adına)** |
| Biskra | `1671-01-01 → 1844-03-04` **Ahmed Bey'in Konstantin beyliği (Osmanlı adına)** |
| Tuggurt | `1671-01-01 → 1854-12-02` **Sahra vahalarının özerk idaresi** |

Etiket değişti ama **tek dönem kaldı**. Sonuç: anakronizm yok olmadı,
**yönü tersine döndü.** Ahmed Bey 1826'da bey oldu ve beyliği Osmanlı adına
ancak ocaklığın lağvından sonra hareket etti; **1671'de Konstantin beyliği
diye bir şey yoktu.** 1671-1830 arası gerçekten *Cezayir Ocaklığı*ydı ve o
etiket doğruydu — silinmemeliydi, **kesilmeliydi.**

Fazlalık: Annaba **159 yıl**, Bicâye 159, Biskra 159, Tuggurt 159.
(Önceki hata Annaba'da 2 yıl, Bicâye'de 3 yıldı — düzeltme, düzelttiğinden
elli kat büyük bir etiket hatası bıraktı.)

**Kendi 21 kaydımda desen böyle** (ölçüldü, karşılaştırma için):

```
Cicel:   1671-01-01 → 1830-07-05   Cezayir Ocaklığı (dayı idaresi)
         1830-07-05 → 1839-05-13   Ahmed Bey'in Konstantin beyliği
Ağvât:   1671-01-01 → 1830-07-05   Cezayir Ocaklığı (dayı idaresi)
         1830-07-05 → 1852-12-04   Sahra vahalarının özerk idaresi
```

### 19a. Uygulanacak — 4 kayıt, `yerlesimler.js` (sizde)

```js
// Annaba
v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},
   {f:"1830-07-05", t:"1832-03-01", k:"Ahmed Bey'in Konstantin beyliği"}],
// Bicâye
v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},
   {f:"1830-07-05", t:"1833-09-29", k:"Ahmed Bey'in Konstantin beyliği"}],
// Biskra
v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},
   {f:"1830-07-05", t:"1844-03-04", k:"Ahmed Bey'in Konstantin beyliği"}],
// Tuggurt   (§16b'deki sınıflandırma: Ağvât/Gardâye ile aynı sınıf)
v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},
   {f:"1830-07-05", t:"1854-12-02", k:"Sahra vahalarının özerk idaresi"}],
```

**Bölme sınırı 1830-07-05 kırılma DEĞİLDİR** — `v:` içi bölünme, sahip
değişmiyor (`v:` boyunca tâbi). Değişmez 2'ye yük binmez, `denetle.py`
dönem sağlığı da temiz kalır (ters/sıfır/çakışma yok). Ölçtüm: kendi 21
kaydımda aynı bölme 448 kırılmayı kımıldatmadı.

### 19b. 📌 Neden gözden kaçtı — ve tuzağın adı

`k:` alanını **motor okumuyor** (`girdi.py`:129 *"motor okumaz, gösterim
için"*). Yani bu hata:
- haritada **hiçbir renk değiştirmez**,
- denetimin **yedi kontrolünün hiçbirine takılmaz**,
- yalnız kullanıcı sağ panelde bir yere tıkladığında görünür.

Cezayir turunun tamamı bu sınıftandı: kullanıcı hatayı **ekranda okuyarak**
buldu, hiçbir betik bulamazdı. Denetimin `k:` etiketiyle dönem tarihleri
arasında tutarlılık aramaması sekizinci bir denetim fikri — Oturum 2'ye:
*"bir `k:` etiketi, andığı kurumun/kişinin ömrünün dışına taşıyor mu?"*
(§3.5'teki hayalet devlet denetiminin `v:` etiketlerine uygulanmış hâli.)
