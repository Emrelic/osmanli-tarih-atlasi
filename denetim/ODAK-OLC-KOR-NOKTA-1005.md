# ODAK-OLC-KOR-NOKTA-1005 — `odak_olc.py`nin devlet sekmesi körlüğü

Ölçüm aleti: `denetim/ODAK-OLC-KOR-NOKTA-1005-olc.js` (yalnız okur). index.html'in app.js'ten
önceki betiklerini — satır içi olanlar dâhil — aynı sırayla koşturur, app.js'ten
`derinKronolojiBindir` + `cokTarafliKronolojiEkle` + `AD_KONUM` + `_khGunStr`'ı METİNLE
keser ve eval eder. Böylece tarayıcının `DEVLETLER[].kronoloji`si aynen kurulur.
**Gerçek koşulda doğrulandı:** yayındaki r11374 sitesinde (`emrelic.github.io`) aynı
sorular konsoldan soruldu, sayılar birebir tuttu (aşağıda ✅ ile işaretli).
Araçlara (`odak_olc.py` · `odak_cozum.js` · `ODAK-TAVAN.json` · `js/`) DOKUNULMADI.

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı, ikisi de ÇÜRÜDÜ

| öngörü | ölçüm | hüküm |
|---|---|---|
| (a) dalına ~750 madde (tavandaki 655 BEYANLI→yabancı + odaklı ~100) | **386** | ✗ — 655'in 298'i hiçbir künyeye bağlanmayan değişkenlerdeydi (§3) |
| `kapsam_genis` olmayan, `odak_*` yazılı ama okunmayan ~200 | **424** (+662 `yer_kon`) | mekanizma doğru, sayı yarı yarıya düşük |

Uzlaştırma: (a) dalındaki 355 BEYANLI + bağlanmayan değişkenlerdeki 298 BEYANLI (t+b ikizleri
dâhil) = **653 =
`odak_olc.py`nin bugünkü BEYANLI→yabancı'sı, BİREBİR.** Kronoloji tarafında
odak_olc 8258 = 6097 sekmede + 2161 hiçbir yerde açılamayan, BİREBİR. Olaylar tarafında
odak_olc 1768 − tarayıcı `OLAYLAR` 1656 = 112: §3c, BİREBİR.

## 1. `odak_olc.py` tam olarak NE soruyor

- **Evren:** `data/` altında `kronoloji_*` ya da `olaylar*` ile başlayan .js dosyaları (DİSK
  listesi — index.html değil, künye bağlantısı değil). Her dosyanın tanımladığı SON
  yeni diziyi alır (`odak_cozum.js:190-197`). Bugün birden çok dizili dosya: 0.
- **Alanlar:** `yer_kon` · `yer_id` · `odak_kutu_kaynak` · `odak_yer` · `odak_kimlik` ·
  `kapsam_genis`. Sınıf: KONUMLU › KUTULU › BEYANLI › ODAKSIZ.
- **Taklit ettiği kod yolu:** `haritayiOlayaGotur()` (app.js:12684), yani **(b)** yolu.
  `yer_id`/`yer_kon` → nokta; değilse `maddeOdakKutusu`; değilse `kapsam_genis` → Osmanlı
  kutusu; değilse kıpırdamaz. Gün olarak `o.t` kullanılır (`gs = o.t`).
- **Havuz:** `yer_id`/`odak_yer` için `SEHIR` = d/v/s taşıyan yerleşimler. Bu, app.js'in
  27 Eylül'den beri kullandığı `AD_KONUM` havuzu DEĞİL (§4).

🔴 **Ama (b) yolundan yalnız `OLAYLAR*` maddeleri geçer.** `olaylar` dizisi
`/^OLAYLAR(_[A-Za-z0-9]+)?$/` ile kurulur (app.js:7034); `haritayiOlayaGotur` yalnız
`olayaGit`ten (Osmanlı listesi) ve `maddeAc`ın KONUMLU dalından çağrılır (grep: 2 çağrı).
⇒ **`kronoloji_*` maddelerinin hiçbiri, konumsuzken (b) yolunu GÖRMEZ.** odak_olc'un
"BEYANLI→yabancı — kamera OSMANLI kutusuna uçar" satırı, bu maddeler için yanlış bir
mekanizmayı tarif ediyor: gerçekte (a) dalında devletin KENDİ gövdesine açılırlar.

## 2. Devlet sekmesinin evreni — `maddeAc` (app.js:15017-15093) dal dal

Evren = `DEVLETLER[].kronoloji`, bağlama sonrası: **9072 tekil madde** (11253 künye×madde
çifti, 892 künye) ✅ canlıda 9072. Dal sırası koddan:
```
hedefYer = m.yer_id ? olayKonumu(m) : null      ← yer_kon YALNIZ yer_id varsa okunur
 hedefYer           → B: haritayiOlayaGotur          3987  (%44)
 !kapsam_genis      → C: KAMERA KIPIRDAMAZ           4699  (%52)  maddeOdakKutusu ÇAĞRILMAZ
 kapsam_genis       → A: maddeOdakKutusu ‖ devletiYay  386  (%4)
                         ├ odak kutusu çalışıyor       14  (hepsi odak_yer; c52bb5ec'nin kazancı)
                         └ BÜTÜN GÖVDEYE açılıyor     372  (372'sinde de odak alanı YAZILMAMIŞ)
```
**Soru 2'nin cevabı:** devlet sekmesinden açılabilen maddelerden `yer_id` çözülmeyen +
`kapsam_genis:true` olan = **386.** 22 Ağustos yorumundaki 189 bayattı (o gün 2961 madde).

### Odak_olc'un TEMİZ saydığı ama sekmede ÇALIŞMAYAN — 1103 madde
| sınıf | sayı | odak_olc ne diyor | sekmede ne oluyor |
|---|---|---|---|
| C · `odak_yer`/`odak_kimlik` yazılı, `kapsam_genis` YOK, `yer_id` YOK | **424** | KUTULU ✓ | kamera kıpırdamaz — `odak_*` hiç okunmaz. 424'ünün 424'ü okunsa çözülürdü |
| C · `yer_kon` var, `yer_id` YOK | **662** | KONUMLU ✓ | kamera kıpırdamaz — `maddeAc` yalnız `m.yer_id`ye bakar |
| A · `yer_kon` var, `yer_id` YOK, `kapsam_genis` | **17** | KONUMLU ✓ | bütün gövdeye açılır (ör. rusya 1812-06-24 Napoleon'un istilası) |

Örnekler: bizans 1040-01-01 Petar Delyan `odak_yer:"Üsküp"` · bizans 1081-01-01
`odak_yer:"Draç"` · memluk 1516-08-24 Mercidâbık `yer_kon` · memluk 1517-01-22 Ridâniye `yer_kon`.

### 🔴 Gizli kusur — `odak_kimlik` devlet sekmesinde HİÇBİR ZAMAN çözülemez
`maddeAc` `maddeOdakKutusu(m)`'e HAM `m`yi verir. `maddeOdakKutusu` `odak_kimlik` için
`_khGunStr(o.gi)` okur; devlet maddelerinde `gi` yok (**9072/9072** ✅ canlıda 0 dolu).
`_khGunStr(undefined)` = `"0NaN-NaN-NaN"` ✅ ⇒ hiçbir yerleşim o gün "aktif" değildir.
Ölçüm: sekmede `odak_kimlik` yazılı **129** madde → doğru günle **129/129** çözülür,
ham `m` ile **0/129**. ✅ Canlıda: bizans 1460-05-29 (Mistra) `maddeOdakKutusu(m)` = null,
`gi` eklenince = kutu. `kopyaMaddesi()` (app.js:14780) tam bu iş için var (`mo.gi =
gunIdx(m.t)`) ama yalnız ek okumaya veriliyor, kameraya verilmiyor.
Bugün 129'un hepsi C dalında (zaten okunmuyor), A'da 0 ⇒ **görünür vaka 0, gizli vaka 129**:
C dalı bağlandığı gün bu 129 madde sessizce düşer. c52bb5ec'nin A dalı da aynı ham `m`yi
veriyor.

## 3. Soru 3 — kırık atıf
- Devlet sekmesinde `odak_*` yazılı madde: 438 (C 424 + A 14). App.js'in `AD_KONUM`/doğru
  gün ölçüsüyle **çözülmeyen: 0.** (a) dalında kırık atıf: **0.**
- odak_olc'un tek "bilinen kusur"u (`kronoloji_dogu_afrika.js` 1897 `yer_id:"Ogaden"`)
  **YANLIŞ KİRLİ:** app.js `adKonumBul("Ogaden")` onu ÇÖZÜYOR ✅. Sebep §4.

## 3b. Evrenin dışında kalan iki sınıf (odak_olc bunlarda iki yönde yanılıyor)
- **2975 madde — odak_olc'un HİÇ görmediği:** `devletler.js`teki künyelerin KENDİ
  kronolojileri (bir KRONOLOJI_* dosyasından gelmeyenler). Hepsi C × ODAKSIZ: kamera
  kıpırdamaz. odak_olc disk dosyası saydığı için bunlar ODAKSIZ 769'un içinde DEĞİL.
- **2059 madde — odak_olc'un saydığı ama hiçbir ekranda AÇILAMAYAN** (102 t+b ikizi
  ayıklandıktan sonra): 16 `KRONOLOJI_*` değişkeni hiçbir künyeye bağlanmıyor
  (`KRONOLOJI_CIN`→`cin`, `_ANADOLU`→`anadolu` … DEVLETLER'de böyle id yok; app.js bunu
  konsola `eşlenemedi` diye yazıyor). En büyükleri: ANADOLU 273 · DOGU_AFRIKA 217 ·
  ORTA_ASYA 205 · ITALYA_SEHIR 181 · BALKAN 171 · IRAN_ARDILLARI 154 · GUNEY_ASYA 153 ·
  CIN 135 · HINDISTAN 130 · MISIR 119. ✅ Canlıda ANADOLU+CIN+BALKAN'dan sekmede: 0.
  js/* içinde başka tüketici: bulunamadı (grep). odak_olc bunları "1721 KONUMLU" sayıp
  temize katıyor; 219 BEYANLI'yı da tavana sokuyor.

## 3c. Aynı sınıf, Osmanlı tarafında — 112 madde listeye girmiyor
`olaylar` regex'i tek parçalı sonek ister. 7 dosyanın değişkeni iki parçalı:
`OLAYLAR_2S_0919` 71 · `_2S_0918` 20 · `_CUKUROVA_0907` 6 · `_0073_IRAN_YANYA` 5 ·
`_SENUSI_0919` 5 · `_ORTADOGU_0919` 3 · `_SENKRON_0930` 2 = **112.**
✅ Canlıda dördü ölçüldü: listede 0. Odaktan ayrı bir kusur; kasıtlı mı (ör. Değişmez 2
desteği, ekranda olmasın) bulunamadı. Kronoloji sahibine sorulmalı.

## 4. Havuz ayrışması — §9'un "süzgeç değişirse kendiliğinden takip eder" iddiası tutmuyor
`odak_cozum.js` `SUZGEC` işlevlerini gerçekten çağırıyor, ama `yer_id`/`odak_yer` havuzunu
KENDİ kuruyor (`SEHIR` = d/v/s süzgeci, :78-87). app.js 27 Eylül'de (ODAK-MEKANIZMA-0080)
kamerayı ayrı `AD_KONUM` havuzuna taşıdı: 4299 kayıt, `SEHIR`de olmayan **152 ad**
(bölge/dolgu: Ogaden, Tibesti, Karakum …). ⇒ odak_olc bu 152 ada yazılan her odağı kırık
sayar (yanlış kirli yönü). Bugün 1 vaka (Ogaden). "İki dil, iki otorite" ilkesi burada
bozulmuş: havuz kodu kopya.

## 5. ÖNERİ — uygulanmadı

**En ucuz yol (önerim): `odak_cozum.js`e İKİNCİ bir sınıflandırıcı, sekme dalı için.**
`siniflandir(o)`a dokunmadan yanına `sekmeDali(o)` eklenir; `maddeAc`ın üç satırlık
kararını yürütür:
```
hedef = o.yer_id && (yer_kon || adKonumBul(o.yer_id))  → SEKME_NOKTA
!o.kapsam_genis                                       → SEKME_KIPIRDAMAZ
                                                        (+ odak_* ya da yer_kon YAZILIYSA → SEKME_OKUNMAYAN)
maddeOdakKutusu(HAM o)  ‖                             → SEKME_KUTU | SEKME_GOVDE
```
Kapıya yeni bir donmuş sayı eklenir: **SEKME_OKUNMAYAN = 1103** (yazılmış ama sekmede
etkisiz). ODAKSIZ deseniyle aynı: yalnız gerileme öter. `odak_kimlik` HAM `o` ile
sorulmalı (`gs` = `_khGunStr(o.gi)`); ancak o zaman 129'luk gizli kusur görünür olur.
Sekme sınıfı yalnız `/^KRONOLOJI_/` evreninden gelen maddelere uygulanır, `OLAYLAR`a
uygulanmaz.

Bununla birlikte yapılması gereken iki şey (ucuzdan pahalıya):
1. **Havuz:** `SEHIR` yerine `AD_KONUM` kurulsun. En iyisi app.js'teki
   `var AD_KONUM = (function` bloğunu metinle kesip eval etmek (bu aletin yaptığı gibi).
   Kopyalamak §11'in yasakladığı ayrışmayı yeniden doğurur. Ogaden "bilinen kusur"dan düşer.
2. **Evren:** disk listesi yerine tarayıcı evreni. index.html sırasıyla yükle, iki bağlama
   IIFE'sini metinle kesip eval et (yöntem bu aletin ①-② bölümünde, 20 satır). Bu, 2975
   görünmeyen ve 2059 açılamayan maddeyi doğru kovaya koyar. Kesim işareti bulunamazsa
   sonuç ÖLÇÜLEMEDİ (çıkış 2) olmalı, asla temiz değil.

**Kalıcı çare (js/ sahibinin işi, yalnız öneri):** `maddeAc`ın dal kararı DOM'suz saf bir
işleve çıkarılmalı (ör. `SUZGEC.sekmeKameraDali`). O zaman `odak_cozum.js` (b)'yi
çağırdığı gibi onu da çağırır ve üçüncü bir kopya doğmaz. Aynı yamada `maddeAc` HAM `m`
yerine `kopyaMaddesi(d, m)` vermeli; bu `gi` kusurunu kapatır. C dalının
`odak_*`/`yer_kon` okuması ayrı bir ürün kararıdır.

## 6. Nasıl sınanır — iki yön, gerçek maddelerle
| # | vaka | beklenen | neyi sınar |
|---|---|---|---|
| Ö1 ötmeli | bizans 1040-01-01 Petar Delyan (`odak_yer:"Üsküp"`, yer_id/kapsam_genis yok) | SEKME_OKUNMAYAN | C dalı körlüğü |
| Ö2 ötmeli | memluk 1516-08-24 Mercidâbık (`yer_kon`, yer_id yok) | SEKME_OKUNMAYAN | `yer_kon` körlüğü |
| Ö3 ötmeli | sentetik: `kapsam_genis:true` + `odak_kimlik:["eflak","bogdan","erdel"]` + t 1594-10-05, bir KRONOLOJI_* kopyasına | SEKME_GOVDE (ham `m` → 0 yerleşim) | `gi` kusuru; alet doğru günle sorarsa YANLIŞ TEMİZ verir |
| Ö4 ötmeli | sentetik gerileme: tavanlı bir dosyaya C dalında `odak_yer` yazılı yeni madde | kapı çıkış 1 (1103 → 1104) | tavanın kendisi |
| N1 ötmemeli | rusya 1877-04-24 93 Harbi (`kapsam_genis` + `odak_yer` Bender/Bükreş/Rusçuk) | SEKME_KUTU | A dalı c52bb5ec ile çalışıyor |
| N2 ötmemeli | bizans 0831-09-12 Palermo (`yer_id` çözülüyor) | SEKME_NOKTA | B dalı |
| N3 ötmemeli | kronoloji_dogu_afrika 1897 `yer_id:"Ogaden"` | kırık atıf DEĞİL | havuz düzeltmesi (bugün YANLIŞ öter) |
Ö3, gerçek koşulda tarayıcıda zaten yapıldı (§2, Mistra): ham `m` null, `gi`li kutu.
