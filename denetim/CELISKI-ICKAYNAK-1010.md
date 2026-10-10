# CELISKI-ICKAYNAK-1010 — "KAYNAK DOĞRU, VERİ KAYNAĞI İZLEMİYOR" aday listesi

**Bu bir KAPI DEĞİLDİR.** `denetle.py`ye bağlanmadı, tavan yazılmadı. Tarayıcı LİSTE üretir; hüküm KASA'nındır.
Koordinatörün 10 Ekim düzeltmesi uygulandı: sıralamayı **④ ENGEL-KALKMIŞ** ve **B ÖZ-İLAN** yapar; **A (yıl-iç)** yalnız kaba evren ve ayrı sütundur. "Cümlede başka devlet anılıyor ⇒ YÜKSEK" ölçütü **öldürüldü**, A'da yalnız bilgi sütunu olarak duruyor (`a_anilan_yabanci`).

| | |
|---|---|
| Taban | v1: `79ff492a` · v1.1: `534633f8` · **v1.2: `a51430ccdebcefc32bfd5f7c2b31e8984dbf8039`** (ayrı worktree; alet geriliği kendisi ölçüp basıyor → 0) |
| Evren | `girdi.GIRDI_DOSYALARI` canlı: **93 dosya · 4300 kayıt** · `devletler.js` **897 künye** · `renkler.BOYALAR` **704** |
| Tarayıcı | `denetim/ARAC-CELISKI-ICKAYNAK-1010.py --kok <origin/main worktree> --json <yol>` · **`--kok` ZORUNLU** (yoksa çıkış 2) · ~4 sn + fetch |
| Sınav | `denetim/ARAC-CELISKI-ICKAYNAK-SINAV-1010.py --kok <aynı>` → **57/57** (v1.1'de K1 ve K2 kök kolları; v1.2'de süzgeç, D, G, C2, UÇ kolları eklendi), çıkış 0 |

## 1. Sayılar (bugün)

**(v1/v1.1 sayısı; güncel sayı için §v1.2'ye bakın: 130 YÜKSEK.)** **Bugün 156 YÜKSEK aday var: 27 ENGEL-KALKMIŞ ve 129 ÖZ-İLAN-İSABET. Bunlar 122 ayrı kayıtta.**

| Yüklem | Sınıf | N | Not |
|---|---|---:|---|
| ④ ENGEL | **ENGEL-KALKMIS** (YÜKSEK) | **27** | 3'ü tırnaklı kimlikle, 23'ü güçlü adla, 1'i zayıf adla (Königsberg) yakalandı |
| ④ ENGEL | ENGEL-YARIM | 1 | engel "BOYALAR'da yok"; künye var, boya hâlâ yok (Freistadt → bavyera) |
| ④ ENGEL | ENGEL-DURUYOR | 4 | anılan kimlik bugün de yok (`silluk` ×3, `ife`) |
| ④ ENGEL | ENGEL-DONULMUS | 58 | engel kalkmış, kayıt künyeyi zaten kullanıyor (51'i "KUNYE+RENK BEKLIYOR — misir-sultanligi…") |
| ④ ENGEL | ENGEL-OLCULEMEDI | 75 | metinde künyeye bağlanabilen ad yok (Oromo/Dinka "kimlik yok" türü) |
| B | **OZ-ILAN-ISABET** (YÜKSEK) | **129** | güçlü 87 (YANLIŞ 4 · DEĞİL 2 · yazılmadı/kapsam dışı/borç 59 · ÇIKARIM/yerleşim YOK 22) · zayıf 42 (yalnız bulunamadı/doğrulanamadı) |
| B | OZ-ILAN-OLCULEMEDI | 58 | kendi kimliği anılıyor ama tarih yok (ör. Diyarbakır "'artuklu' KİMLİĞİ DOĞRU ama TARİHLERİ yanlıştı") |
| B | ELENDI | 369 | hüküm başka bir devlet ya da tarih hakkında (DEĞİL 218) · "eski <değer>" · hedef `__BOSLUK__` |
| B | B-REFERANSSIZ | 1280 | anahtar sözcük var, pencerede devlet ya da tarih yok. JSON'da yalnız sayı olarak duruyor |
| A | YALNIZ-A (ORTA, kaba) | 1574 | P alanı: s 1393 · **d 148 (ayrı sütun)** · v 33. 209'unun dönemi aynı zamanda B-İSABET hedefi |

**YÜKSEK adayların dosyaya göre dağılımı:** yerlesimler.js 68 · nokta_asya_0917 15 · h2_afrika 13 · anadolu_0914 9 · a78_avrupa 6 · a78_asya 5 · ek26 5 · ek29 5 · ek_bozkir 5 · e9353f 4 · ek13 4 · öteki 10 dosya 1–3'er (21 dosya). Dökümün tamamı JSON'da.
**YÜKSEK adayların metin alanına göre dağılımı:** s.kaynak 53 · neden 45 · not 37 · kaynak 16 · v.kaynak 2 · d.kaynak 2 · isg.kaynak 1.
**C2 kapatılınca:** A 1574'ten **1656**'ya (+82), B-İSABET 129'dan 131'e çıkıyor. Süzgeç sayıyı gerçekten değiştiriyor (sınavda N2k).

## 2. İlk 20 YÜKSEK aday

Seçim kuralı: önce ENGEL-KALKMIŞ, güçlü kimlik yolu olanlar öne alındı. Sonra güçlü B-İSABET'ler, YANLIŞ/DEĞİL türü önde. Bu liste HÜKÜM DEĞİLDİR. ✔ işareti elle okuduğum adayları gösterir (§5).

| # | Sınıf | Kayıt (dosya · alan) | Hedef / kimlik | Metindeki tetik |
|---|---|---|---|---|
| 1 | ENGEL-KALKMIS ✔ | Anapa (yerlesimler.js · s[1].kaynak) | `cerkez` 1281→1864, boya VAR. Veri hâlâ `__BOSLUK__` 1441-1475 | "Çerkes/Adige künyesi yok, doğrusu `cerkes` künyesi" |
| 2 | ENGEL-KALKMIS ✔ | Draç (yerlesimler.js · s[2].kaynak) | `topia` 1363→1415, boya VAR. Veri venedik 1368-1501 | "Thopia künyesi YOK, 1368-1392 dilimi AÇIK BORÇ" |
| 3 | ENGEL-KALKMIS | Königsberg (yerlesimler.js · s[1].kaynak) | `teuton-sovalyeleri` 1281→1525-04-08, **boya YOK** (ikinci engel) | "'almanya' da YANLIŞ (… Cermen tarikatı devleti) ama künyesi YOK" |
| 4 | ENGEL-KALKMIS ✔ | Papeete (a78_okyanusya · neden) | `tahiti` 1025→1842-09-09, boya VAR. Kayıt 1842 öncesinde BOŞ | "1842 öncesi Tahiti (Pomare krallığı) için atlasta künye YOK" |
| 5 | ENGEL-KALKMIS | Yambio (h2_afrika · neden) | `zende` 1750→1912, boya VAR | "Azande Krallığı — `zende` kimliği yok" |
| 6 | ENGEL-KALKMIS | Tembura (h2_afrika · neden) | `zende` | aynı kalıp |
| 7 | ENGEL-KALKMIS | Maridi (h2_afrika · neden) | `zende` | aynı kalıp |
| 8 | ENGEL-KALKMIS | Kapuas Hulu (a78_asya · s[0].kaynak) | `malay-sultanliklari` 1281→1909 | "Dayak/Malay yönetimleri — künye yok" |
| 9 | ENGEL-KALKMIS | Niani (e9353f · neden) | `bambara` 1650→1861, `tekrur` 1852→1893 | "ardılı (Bambara Segu / Kaarta / Toucouleur) için … KUNYE YOK" |
| 10 | ENGEL-KALKMIS | Raipur (… · not) | `nagpur-bhonsle` 1730→1853, **boya YOK** | "Nagpur Bhonsle künyesi yok -> boş bırakıldı" |
| 11 | ENGEL-KALKMIS | Ağere Maryam (h2_afrika · neden) | `sidamo-kralliklari` 1281→1897 | "Guci/Sidamo kuşağı — kimlik yok" |
| 12 | ENGEL-KALKMIS | Gao (e9353f · neden) | `arma` 1750→1760 (dar pencere) | "arma-pasaligi kunyesi de YOK" |
| 13 | OZ-ILAN-ISABET | Malta (yerlesimler.js · s[1].kaynak) | s: napoli 1282-03-30→1530-03-24 (kimlik+tarih) | "1284-1530 napoli YANLIŞ, kapsam dışı, yazılmadı" |
| 14 | OZ-ILAN-ISABET | Königsberg (yerlesimler.js · s[1].kaynak) | s: almanya 1281→1525-04-08 (kimlik+tarih) | "1281-1525 'almanya' da YANLIŞ" |
| 15 | OZ-ILAN-ISABET ✔ | Palu (yerlesimler.js · not) | s: artuklu 1353→1465 (tarih uçları) | "1353-1465 arası kimlik YANLIŞ olduğu BİLİNİYOR" |
| 16 | OZ-ILAN-ISABET | Çemişgezek (yerlesimler.js · not) | s: akkoyunlu 1420→1507 | "1420-1429 ARASI KISMEN YANLIŞ" |
| 17 | OZ-ILAN-ISABET | Sivrihisar (yerlesimler.js · not) | s: selcuklu 1281→1300 · s: germiyan 1300→1354 | "1281-1300 arası SELÇUKLU DEĞİL" / "1300-1354 arası GERMİYAN DEĞİL" |
| 18 | OZ-ILAN-ISABET ✔ | Alaşehir (yerlesimler.js · s[0].kaynak) | s: germiyan 1300→1390 | "1300-1390 germiyan dilimi de bu cümleyle çelişir — kapsam dışı, yazılmadı" |
| 19 | OZ-ILAN-ISABET | Hama (yerlesimler.js · s[1].kaynak) | s: memluk 1299→1516 | "1310-1342 … Eyyûbî Hama YENİDEN kuruldu — bu ikinci dilim kapsam DIŞI, yazılmadı" |
| 20 | OZ-ILAN-ISABET | Mljet (yerlesimler.js · s[1].kaynak) | s: macaristan 1358→1459 | "1358-1410 ÇIKARIMDIR … BULUNAMADI" |

## 3. Yöntem

### 3.1 Evren — ölçüldü
* `girdi.yukle(sessiz=True)` kullanıldı. `denetle.yerlesimleri_yukle()` de aynı işlevi çağırıyor (denetle.py:1108-1111), yani **evren aynı**.
* **Yamalar `yukle()`de BİRLEŞMİYOR.** `GIRDI_DOSYALARI` 93 dosyadır ve aralarında `yama` geçen dosya **0**. `data/yer_yama*.js` **105 dosyadır**; bunları `_sahiplik_uygula.py` kaynak dosyaya yazar. Bekleyen yama bu taramanın dışındadır.
* JS yorum satırları evrenin dışında kaldı. `girdi._cevir` `//` ile başlayan satırları atıyor; Malta'nın yerlesimler.js:906-936'daki uzun yorum notu bu yüzden okunmadı.

### 3.2 Girdi alanları — varsayılmadan tarandı (4300 kayıt)
| Alan | Dolu kayıt | Ort. uzunluk | Kullanıldı mı |
|---|---:|---:|---|
| `kaynak` (kayıt) | 1859 | 164 | ✔ |
| `not` | 828 | 163 | ✔ |
| `neden` | 796 | 228 | ✔ |
| `devir_beyani` | 2 | 271 | ✔ |
| `s[].kaynak` | 1293 | 236 | ✔ (dönem içi) |
| `d[].kaynak` | 148 | 220 | ✔ (dönem içi) |
| `isg[].kaynak` | 276 | 118 | ✔ (dönem içi) |
| `v[].kaynak` | 49 | 304 | ✔ (dönem içi) |
| `v[].k` | 530 | 27 | ✘ Tâbi devletin görünen adı. Serbest not değil, sahibin kendisi |
| `bos` | 354 | 7.5 | ✘ Değeri sabit listeden (kabile/devletsiz/veri-yok/insansiz/hata) |
| `m`, `kur`, `bit`, `go`, `kesinlik`, `d.y`, `v.statu`, `ikiz`, `kd[]` | — | — | ✘ Ad, tarih ya da sabit listeden değer; `kd[]` öğeleri yalnız f/t/k/m taşıyor |

`ic_not*` alanı yerleşim kayıtlarında **yok**; yalnız `devletler.js` künyelerinde var.
**Dönem içi notun hangi döneme bağlandığı:** her metin, kendi kaydının **bütün** dönemlerine karşı sınanır. Bir dönem notu çoğu zaman BAŞKA bir dilimden söz eder; Königsberg'de s[1] notu s[0]'ı anlatır. JSON'da `metin_kendi_donemi` sütunu durur. B'de not kendi dönemine de isabet ediyorsa yalnız kendi dönemi tutulur (Çehrin: s[0] ve s[1] eşleşti, s[0] tutuldu).

### 3.3 Yıl çıkarımı (`tarih_refleri`)
* **Hicrî(miladî):** "649'da (1251)" ve "818/1415" biçimlerinde miladî yıl tutulur, hicrî atılır. Koşul: iki yıl arasındaki fark 500–660, ya da hicrî <1000 ≤ miladî. Bu yolla 205 hicrî yıl atıldı.
* **C2:** önünde hicrî yıl olmayan, içeriği YALNIZ yıl olan parantez ("(1952)", "(1835)", "(1290-92)", "(1998, s. 12)") atılır. 580 parantez atıldı. ⚠️ "Ankara (1402)" gibi gerçek olay yılları da bu süzgeçle düşüyor; bu bilinen bir kayıptır (§4).
* **Gürültü:** sayfa/cilt ("s. 1284", "c.18 s.397") 738 · ölçü birimi (km/km²/nokta/kayıt…) 698 · kod ve kimlik (EPOK-SAHIP-1008, H-0069, r11995) 1602 · ondalık ve koordinat (35.899, 1.609) 1291 · saat · MÖ. "XV. yüzyıl" ve "15. yy" A'da **atılır**; B ve ENGEL'de tarih eşlemesi için [1401,1500] aralığına çevrilir (Çehrin "14. yy'da yerleşim YOK").
* **Aralık:** "1282-1530" iki uç olarak alınır, "1648-49" da 1648 ve 1649 olur. ISO tarihten yalnız yıl alınır.
* **Kuşak:** 1000–1945 (`girdi.UFUK`) dışındaki sayı atılır (707). Üç haneli yıllar bu yüzden hiçbir P'ye düşemez; 4 haneli olmayan sayı yıl sayılmaz.
* Kıyas `gun.yil(gun.gun(P.f))` ile **sayısal** yapılır, dizgi kıyası yok.

### 3.4 Yüklemler
* **A (yıl-iç):** `yıl(P.f) + 1 < Y < yıl(P.t) − 1`. Yani yf+2 ≤ Y ≤ yt−2; sınavda N1, 1302 işaretleniyor, 1301 işaretlenmiyor.
  **d: dahil, ayrı sütun.** d:'nin sahibi örtük olarak `OSMANLI`dır (künyesi yok). v:'nin sahip kümesi {kid, OSMANLI}'dir, isg:'ninki {isg.d}.
* **B (öz-ilan):** metin "·", ";", "|", "‖", satır sonu ve ". " + Büyük harf ile parçalanır. B'de " — " ile **bölünmez**, çünkü Hama'da tarih "—"nin öbür yakasında. Anahtar sözcük dört türe ayrılır:
  YANLIŞ · BOŞLUK (yazılmadı / dokunulmadı / uygulanmadı / kodlanmadı / kapsam dışı / açık borç) · BELİRSİZ (çıkarım / bulunamadı / doğrulanamadı / yerleşim yok) · NEG (değil / olmadı).
  Pencere, anahtardan önceki metindir; bir önceki anahtarda kesilir. İçindeki tarihler ve kimlikler (güçlü ad ya da tırnaklı kimlik) çıkarılır:
  * NEG ve YANLIŞ: anılan kimlik P'nin sahibi olmalı **ve** tarih P'ye düşmeli. Tarih yoksa sonuç ÖLÇÜLEMEDİ. NEG'de yalnız anahtarın hemen önündeki kimlik sayılır ("X DEĞİL"). YANLIŞ'ta aralık P'nin iki ucuyla ±1 örtüşüyorsa kimlik gerekmez (Palu).
  * BOŞLUK ve BELİRSİZ: tarih, P'nin iki ucuna ±1 oturuyor ya da [yf+2, yt−2] iç kuşağına değiyor olmalı. Tek yıl ancak tek yıllık dönemin kendisiyse uç sayılır (Petseri'deki sahte isabet böyle kapandı).
  * "gün/ay/tarih … BULUNAMADI" bir hassasiyet itirafıdır, atlanır. "eski t/f <değer>" ELENİR. Hedef dilim `__BOSLUK__` ise ELENİR (beyan edilmiş boşluk).
* **④ ENGEL:** künye/kimlik (yok|eksik) · `eksik_kimlik` · boya/renk yok · `BOYALAR'da yok` · "KUNYE+RENK BEKLIYOR" · "devletler.js'e henüz …". Pencere anahtardan önceki 140 karakterdir; "BEKLIYOR" kalıbında anahtardan sonraki 140 karakter de okunur.
  Kimlik yolları ve kabul ölçütleri:
  * Tırnaklı ya da tireli çıplak künye kimliği: künye ömrü dilime en az 2 yıl değmeli.
  * Güçlü ad: aynı ölçüt.
  * Zayıf ad (yalnız ilk iki yol boşsa): dilim metinden gelmeli ve künye ömrünün iki ucu dilimin iki ucuna ±1 oturmalı. Königsberg'de "Cermen **tarikatı** devleti" → `teuton-sovalyeleri` 1281→1525 böyle eşleşti.
  Dilim şu sırayla belirlenir: metindeki aralık, yoksa notun kendi dönemi, yoksa kaydın boş yılları.
  Künye/kimlik engelinin kalkması için künyenin VAR olması ve kaydın onu hiçbir dönemde kullanmaması yeter. Boya ayrı sütundur (`boya`, `ikinci_engel`). Boya/renk engeli ise ancak BOYA varsa kalkar.

### 3.5 Devlet adları
* Ölçülen alanlar şunlar: `devletler.js` künyesinde `id` 897 · `ad` 897 · `harita` 282. **Eşanlam ya da kısa ad alanı yok.** `data/ad_esanlam.js` yerleşim adı sözlüğüdür, devletlere ait değil.
* Güçlü adlar:
  * `ad` "/", "(", "→", "·", "," ile parçalanır; unvan sözcükleri (Krallığı, Sultanlığı, Tacı …) atılır.
  * `id` ve `harita` anahtarları tire→boşluk biçiminde eklenir; "Osmanlı" elle `OSMANLI`ya bağlanır.
  * Tek sözcüklü ad en az 4 harf olmalı. Sözcük anlamı baskın çıkanlar yasaklı listeye alındı: Kasım (ay), birlik, ikinci, kıyı, doğrudan, ordu, Kars↔karşı, bağımsız, İngiliz …
  * Sonuç: 1751 güçlü + 404 zayıf ad.
* **Kök eşleştirme:** ad bir sözcüğün başından başlar. Ardından yalnız Türkçe ek gelebilir (kesme işaretli her ek, -lı/-lu/-lar/-ler, -ya/-ye, -nın, -da/-dan, -ca, tek ünlü). Böylece "Aragonlular'ın" → aragon, "Kastilyalılar'ın" → kastilya eşleşir; Kazan↔kazandı, Şili↔silindi eşleşmez. 5 harften kısa adlar yalnız tam sözcük olarak ya da kesme işaretli ekle eşleşir.
* Normalleştirme `denetim/ARAC-NORMAL-0903.py` `norm()` ile yapılır; `"İ".lower()` tuzağı oradan kapanıyor.
* **Sahiplik kıyası kimlik üzerinden yapılır:** `kanon(id) = künye.harita || id`. Bir ad birden çok künyeye gidiyorsa ve bunlardan biri sahipse, anılan devlet SAHİP sayılır (muhafazakâr kural).

## 4. Bulamadım / ölçemedim
1. **Devletler için eşanlam alanı yok.** Adı değişen eşler kaçıyor: Cenova↔Ceneviz, İngiltere↔İngiliz, Cermen↔Töton. Königsberg ancak "tarikat" sözcüğü ve ömür uçlarının tutmasıyla bulundu; ad eşleşmesiyle bulunmadı.
2. **Künyelerin coğrafî kapsamı ölçülemedi** (künyede geometri yok). Bu yüzden "bu künye o kasabaya ait mi" sorusu sorulamıyor. ENGEL'deki sahte pozitiflerin kaynağı bu (§5: kenya-kuzey-halklari Etiyopya Borana'sına, agadez-sultanligi "Tuareg" üzerinden).
3. Kayıt düzeyindeki ENGEL notlarının 21'inde dilim metinden çıkarılamadı ve kaydın boş yıllarına düşüldü. Bu dilim kaba.
4. **C2 yan etkisi:** "Ankara (1402)" gibi gerçek olay yılları da düşüyor (580 parantez). Şartname bu kuralı ŞART koştuğu için uygulandı; C2 kapalıyken fark A'da +82.
5. **B anahtar listesi kapalı bir listedir.** "çelişir", "ARA ÇÖZÜM", "BİLİNEN EKSİK" tek başına anahtar değil; Alaşehir ve Lienz yanlarındaki "kapsam dışı/yazılmadı" ile yakalandı. Yalnız "çelişir" diyen bir not kaçar. Bu kaybın büyüklüğü ölçülmedi.
6. Kardeş araçlar okundu ama kullanılmadı: `ARAC-NOT-CELISKI-1006` (yıl ↔ dönem uçları, "eski/değil" cümlelerini belirsize atıyor) ve `ARAC-KASA-IC-CELISKI-1004` (kronoloji maddesi ↔ kırılma). Örtüşmeleri ölçülmedi.
7. 1280 B-REFERANSSIZ kayıttan hiçbiri elle okunmadı.

## 5. Elle okuma — tarayıcının isabeti (HÜKÜM DEĞİL)
| Aday | Okuma | Tarayıcı |
|---|---|---|
| Anapa ENGEL → `cerkez` | Not "`cerkes` künyesi" istiyor; `cerkez` (Adige) 1281-1864 bugün var, boyalı; veri hâlâ `__BOSLUK__` | **doğru aday** |
| Draç ENGEL+B → `topia` | "Thopia künyesi YOK, 1368-1392 AÇIK BORÇ"; `topia` 1363-1415 var, boyalı; veri venedik 1368-1501 | **doğru aday** |
| Papeete ENGEL → `tahiti` | Künye 1025→**1842-09-09** var ve kaydın ilk dönemi tam o gün başlıyor; öncesi boş | **doğru aday** |
| Alaşehir B | s[0] notu s[1] germiyan 1300-1390 için "bu cümleyle çelişir — kapsam dışı" diyor | **doğru** |
| Palu B (YANLIŞ) | "1353-1465 arası kimlik YANLIŞ olduğu BİLİNİYOR"; aynı not "kaynak tüketildi, AÇILMASIN" da diyor | **doğru isabet** (açıp açmamak KASA'nın kararı) |
| Goba, Ginir ENGEL → `adal` | "Adal SONRASI devletsiz kuşak, kimlik yok": Adal bir selef | **SAHTE — selef anışı** |
| Valata ENGEL → `agadez-sultanligi` | "Tuareg için künye yok": "Tuareg" adı Agadez künyesinin ad parçasından geliyor | **SAHTE — kapsayıcı etnik ad** |
| Qitai ENGEL → `cungar` | "(cungar 1634-1758) ama kasaba yok": selef ve kuruluş öncesi | **SAHTE — selef anışı** |
| Yabelo/Mega/Moyale/Negele → `kenya-kuzey-halklari` | "Borana Oromo — kimlik yok": künye Kenya tarafının (Borana · Rendille…) | **ŞÜPHELİ — coğrafya ölçülemedi** |
| Surgut B (UYGULANMADI) | "kur:1594 ÖNERİLDİ ama uygulanmadı": konu dilimin sahibi değil, `kur` | **SAHTE (sahip açısından)**, gerçek bir uygulanmamış öneri |
| Başkale B (BULUNAMADI, zayıf) | "Safevî tasarrufu BULUNAMADI": veri zaten Osmanlı | **SAHTE — kanıt yok ⇒ veri doğru** |
| Sambalpur / Sarmiento B (zayıf) | Reddedilmiş bir önerinin ya da kuruluş gününün kaynağı bulunamadı | **SAHTE** |
| Ahar, Sarâb, Nihâvend … B (açık borç) | "'kd:' olarak YAZILAMADI": borç `kd:` penceresi, s: sahibi değil | **SINIF FARKLI — kd borcu** |

**Sahte pozitif sınıfları:** ① selef/halef anışı (ENGEL) · ② kapsayıcı ya da etnik adın bir künyenin ad parçasına düşmesi · ③ coğrafî uygunluğu ölçülemeyen künye · ④ "bulunamadı = kanıt yok" (veri zaten yokluğa göre yazılmış; bu yüzden `guc:"zayif"`) · ⑤ konusu sahip değil `kur:`/`kd:` olan öz-ilan · ⑥ karşı-olgusal "X'e itmek yanlış olur" (hedef `__BOSLUK__` ise ELENDI'ye taşındı).
Sınav (`ARAC-CELISKI-ICKAYNAK-SINAV-1010.py`) iki yönde **30/30** geçti. Bozma sınavı da yapıldı: tolerans `yf ≤ Y ≤ yt` yapılınca N1, hassasiyet süzgeci kapatılınca N6 KALDI. Yani sınav ısırıyor.


---

## §v1.1 — ⑦ düzeltmesi ve ölçümler (koordinatör isteği, 10 Ekim 2026)

**Yeni taban:** `origin/main` **534633f8d21cf022c59d8f66fed41d26b568b75b**. Ölçüm ayrı bir worktree'de yapıldı; alet bu kökü kendisi ölçtü: GERİDE 0. Ana sayılar v1 ile birebir aynı: 156 YÜKSEK (27 ENGEL-KALKMIŞ + 129 ÖZ-İLAN-İSABET) · A 1574 · B-REFERANSSIZ 1280. Güçlü ad sayısı 1751'den 1728'e indi; sebebi `devletler.js`teki değişim, sınıf sayılarına etkisi 0.

### ⑦ `--kok` artık ZORUNLU
* `--kok` verilmezse argparse çıkış **2** verir ve ölçüm yapılmaz. Eski varsayılan kök (`denetim/`in üstü) `C:\atlas-umit` = `makine/umit` dalını sessizce okuyordu.
* Alet kökte `git fetch origin` koşturur, sonra `rev-list --count HEAD..origin/main` sayar. Sonucu basar ve JSON künyesine yazar: `taban_commit` · `geride_origin_main` · `geride_durum`.
  * Fetch ya da sayım başarısız olursa sayı `null` olur ve durum `"olculemedi: <sebep>"` yazılır. **Sessizce 0 yazılmaz.**
  * Sayı 0'dan büyükse `🔴 KÖK GERİDE (N commit)` satırı basılır.
* Sınava iki kol eklendi; sonuç **32/32**:
  * **K1:** `--kok` yoksa çıkış 2.
  * **K2:** `origin/main~2`'den geçici bir worktree açılır, "GERİDE: 2" basılıyor. Geçici worktree sınav sonunda kaldırılır.

### ① 105 `data/yer_yama*.js` — ÖZ-İLAN anahtar sözcüklerinin kaba isabeti
Tek geçiş yapıldı; sınıflama, hedef çözümü ve hüküm yok. Tarayıcının `RX_B` + `RX_ENGEL` kalıpları her satıra uygulandı (64.228 satır, bunların 10.531'i `//` yorum satırı).

| | N |
|---|---:|
| isabet toplamı | **11.835** |
| NEG (değil/olmadı) | 5.940 |
| BELİRSİZ (bulunamadı/çıkarım…) | 4.956 |
| BOŞLUK (yazılmadı/kapsam dışı…) | 526 |
| YANLIŞ | 243 |
| ENGEL (künye/kimlik yok…) | 170 |

* İsabet olan dosya: **104/105**.
* En çok isabet alan dosyalar: yer_yama_1923_1945 7.392 · kademe2 2.720 · yer_yama 200 · misir_himaye 168 · hayalet2 123 · once1281_z6 96 · avrupa_isvec_1923 91 · sahiplik 57 · kafkas 52 · hayalet 51. Tam liste JSON `v1_1.yer_yama_ozilan_kaba`'da.
* ⚠️ Bu sayılar KABADIR. `de[gğ]il\w*` kalıbı "emin değil**sen**" gibi sözcükleri de sayıyor; kademe2'nin binlerce isabeti tek bir şablon cümleden geliyor.
* 5 örnek (tohum 1010):
  * `yer_yama_kademe2.js:17300` [değilsen] "Emre kuralı: \"emin değilsen k3 yaz, k1 değil.\""
  * `yer_yama_kademe2.js:10100` [değilsen] aynı şablon
  * `yer_yama_1923_1945.js:3739` [ÇIKARIM] Sığnak kaydı (s: altinorda→kazak-hanligi→rusya…)
  * `yer_yama_kademe2.js:2707` [bulunamadı] "kaynak": "bulunamadı — varsayılan kademe"
  * `yer_yama_1923_1945.js:1095` [değil] Üstyurt kuzeyi kaydı

### ② 93 girdi dosyasının `//` yorum satırları — aynı kaba sayım
* 14.218 yorum satırında **1.421 isabet** var: NEG 819 · BOŞLUK 222 · BELİRSİZ 158 · YANLIŞ 153 · ENGEL 69.
* İsabet olan dosya 87. En çok isabet alanlar: yerlesimler.js 100 · e9353f 90 · ek29 62 · afrika 46 · h2_afrika 46 · asya 44 · epir 42 · ek31 38 · ek 37 · ek_macaristan 36.
* Satır sonu yorumu (kod + `//`) **0**: yorumların hepsi satır başında ve hepsini `girdi._cevir` atıyor.
* **Malta yerlesimler.js:906-936 bloğu** üç isabet veriyor: 902 "olmadı", 916 "değildi", 926 "YANLIŞ". Bu üçü de **Malta hakkında değil**; Sirenayka, dosya ve Fizan atfı hakkında. Malta'nın kendi öz-ilanı veri satırındaki `s[1].kaynak`ta duruyor ve v1 onu zaten yakalıyordu.
* 5 örnek (tohum 1010):
  * `ek12.js:11` "BATI KENARI YALNIZ İZLANDA DEĞİL"
  * `ek31.js:212` "ÜÇÜ DE YAZILMADI … koordinat bulunamadı"
  * `ek12.js:52` "`1537-01-01` KAYNAKTAN DEĞİL, TUTARLILIKTAN"
  * `asya.js:854` "başkenti UJJAIN'di, GWALIOR DEĞİL"
  * `ek.js:361` "1918 kuyruğu `sirbistan` — … `yugoslavya` DEĞİL"
* ⇒ Yorumlarda kayda bağlanmamış hatırı sayılır bir metin var. Ama bir yorumun **hangi kayda** ait olduğu ölçülmedi: blok başlıkları birden çok kaydı anlatıyor.

### ⑥ Örtüşme — 156 YÜKSEK aday (122 kayıt) ile iki kardeş aletin ÇIKTISI
* **İki alet ne soruyor:**
  * `ARAC-NOT-CELISKI-1006` şunu sorar: metindeki yıl, en yakın olay sözcüğüne (devir/fetih…) bağlanınca alanın yılıyla uyuşuyor mu? Sınıfları ① aday · ② farklı olay · ③ belirsiz. "eski / değil / yanlış" cümleleri ③'e düşer.
  * `ARAC-KASA-IC-CELISKI-1004` şunu sorar: `yer_id`li ve sahiplik fiili taşıyan bir kronoloji maddesinin ±1 yıl içinde kayıtta kırılma yok mu?
* **Kayıtlı çıktılar bayattı.** `KASA-IC-CELISKI-1004-aday.json` 4 Ekim tabanından; `UMIT-W12-NOT-CELISKI-1006.md` yalnız md, JSON değil. Bu yüzden iki alet **534633f8 worktree'sinde taze koşturuldu**. Çıktılar worktree dışındaki bir dosyaya yazıldı. `git status --porcelain --ignored` koşudan önce ve sonra **birebir aynı** çıktı, yani depoya hiçbir şey yazılmadı.
  * NOT-1006 yerleşim: ① 128 bulgu / 107 kayıt · ③ 314 bulgu / 226 kayıt.
  * KASA-1004: ADAY 183 / 95 kayıt.
* Kıyas **kayıt düzeyindedir**; aynı dilim ve aynı iddia olup olmadığı ölçülmedi.

| Karşılaştırma | İkisinde | Yalnız bizde | Yalnız onlarda |
|---|---:|---:|---:|
| dar: NOT-1006 ① ∪ KASA-1004 | **19** kayıt (25 YÜKSEK aday) | 103 | 175 |
| geniş: NOT-1006 ①∪③ ∪ KASA-1004 | 49 kayıt (68 YÜKSEK aday) | 73 | 319 |

* **Dar kesişim, adıyla (19 kayıt):** Alaşehir · Doğubayazıt · Hama · Kirmanşah · Klagenfurt · Konya · Lienz · Lugos (Lugoj) · Luristan · Malta · Nihâvend · Raipur · San Pedro de Atacama · Silistre · Sivrihisar · Soçi (Sâşe) · Suçava (Suceava) · Yaş · Çaldıran.
* Geniş kesişimin 49 kaydı JSON'da (`v1_1.ortusme.kesisim`).
* 27 ENGEL-KALKMIŞ'tan yalnız Qitai, Raipur ve Vitim öteki aletlerde de geçiyor. ⇒ **ENGEL sınıfı büyük ölçüde YALNIZ BİZDE.**

### ④ C2 kaybı — adıyla (süzgeç DEĞİŞTİRİLMEDİ)
C2 kapatılınca A'ya **82**, B-İSABET'e **2** kalem ekleniyor. 82 kalemin hepsi okundu; tam liste ve her kalemin okuması JSON'da (`v1_1.c2_kaybi`).

| A'daki 82 kalemin okuması | N | Örnek |
|---|---:|---|
| **YAYIN YILI** (doğru düşmüş) | **45** | "Roger Bigelow Merriman (1918)" İber kayıtlarında 39 kez · Deutsches Kolonial-Lexikon (1920) ×3 · Imperial Gazetteer (1908) · Lorimer (1915) · Scott & Hardiman (1900) |
| ESER BAŞLIĞINDAKİ DÖNEM (yayın yılı değil, olay da değil) | 11 | Karataş "…Taksimatındaki Yeri (1555-1722)" ×6 · "Siirt Vakıfları (1526-1566)" ×2 · "Great War (1914-1919)" · "(1880-1914)" · "Guerra del Pacífico (1879-1884)" |
| ATLAS İÇ DEĞERİ | 1 | Kuba "yamanın penceresinin (1583-1607)" |
| **GERÇEK OLAY YILI** (C2 yüzünden kaybedildi) | **25** | aşağıda |

**Kaybedilen 25 gerçek olay yılı:**
* Anapa 1427 ve 1456, Maykop 1456, Soçi 1456, Tuapse 1456: hepsi "Yinal (1427-1456)".
* Draç 1388 ("ölümüne kadar (1388)").
* Erciş 1438 ("Cihan Şah döneminde (1438-1467)").
* Rabat 1184 ve 1199 ("el-Mansûr (1184-1199)").
* İzdin 1424 ("Osmanlılar zamanında (1424-1832)").
* Cushamen 1904 (Gastre'nin kuruluş yılı).
* San Antonio de los Cobres 1908 (başkentlik).
* Atapupu 1812 ("İngiliz ara döneminde (1812-16)").
* Ecmîr 1210 ("Aybeg (1206-1210)").
* Andican, Hokand, Hucend, Oş 1494 ("Fergana hâkimiyeti (1494-1504)").
* Mustafapaşa 1574 ve 1595 ("III. Murad devrinden (1574-1595)").
* Doğubayazıt 1512 ve 1520 ("Yavuz … döneminde (1512-1520)").
* Udbina 1791 ("Svištov'a (1791)").
* Dera İsmail Han 1825 ("Hafız Ahmed Han'ı (1815-1825)").
* Brest-Litovsk 1915 ("Alman işgali (1915-1918)").

**B'deki +2 kalem:**
* **Brest-Litovsk:** "Alman işgali (1915-1918) 'isg:' olarak YAZILMADI". Bu **GERÇEK BİR ÖZ-İLAN** ve C2 onu kaçırıyor.
* **Cushamen:** "Gastre'nin kuruluş yılı (1904) … doğrulanamadı". Sahte: konu kuruluş yılı, dilimin sahibi değil.

⇒ **C2'nin bilançosu (yalnız sayı; süzgeci değiştirmek koordinatörün kararı):**
* Düşen 82 yılın 45'i doğru düştü (yayın yılı), 25'i yanlış düştü (gerçek olay), 12'si nötr.
* B'deki kayıp 1 gerçek öz-ilan.
* Olay yıllarının ortak işareti şu: parantezin önünde **dönem/kişi sözü** var ("döneminde", "zamanında", "hâkimiyeti", "ölümüne kadar", bir hükümdar adı). Yayın yıllarının önünde ise **yazar adı ya da eser başlığı** var.

### ⑤ B-REFERANSSIZ 1280 kovasından 20 kalemlik rastgele örnek (tohum **20261010**)
**Sonuç: 0/20 kalem kapalı listenin kaçırdığı açık bir öz-ilan (YANLIŞ/kapsam dışı türü). 2/20 sınırda.**

| # | Kayıt · alan | Tetik | Okuma |
|---|---|---|---|
| 1,4,5,6,7,8,9,12,13,15,16,17,18,19 | Michipicoten · Anaktuvuk Geçidi · Marten Falls · Timbisha · Berens River · Keweenaw · Qeqertarsuaq · Fort Ross · Bissav · Aranos · Kasongo · Fort Nelson · Fort Albany · Aravan — hepsi `kaynak` | "bulunamadı" | **Kayıt kaynaksız beyanı** (14 kalem). Bir dilim hakkında hüküm değil, kaynaksızlık ölçümünün alanı |
| 2 | Tigil · kaynak | "hakemli DEĞİL" | kaynağın niteliği hakkında bir not |
| 3 | Nablus · d[0].kaynak | "varış günü, teslim günü değil" | **SINIRDA:** kendi `d[0].f` gününün dayanağı (gün komşudan, Şam) |
| 10 | Mapungubwe · neden | "'Aramadım' DEĞİL" | yöntem cümlesi |
| 11 | Şerur · s[3].kaynak | "ŞEHİR TANIKLIĞI DEĞİL … bulunamadı" | **SINIRDA:** s[3] karakoyunlu'nun f=1408-04-13'ü bir bölge cümlesine dayanıyor. Aynı parçadaki "bulunamadı" ELENDI'ye düştü, çünkü tek yıl = P.f ve tek yıl uç sayılmıyor. **Bilinen bir kör nokta:** dilimin TAM UCU hakkındaki öz-ilan B'de görünmüyor |
| 14 | Bozüyük · neden | "UYDURMA NOKTA YAZILMADI" | yöntem cümlesi |
| 20 | Gorbitsa · not | "daha eski olup olmadığı bulunamadı" | konu `kur`, dilimin sahibi değil |

⇒ Kapalı anahtar listesinin bu kovadaki kaybı, örneklemde **gözlenmedi**. Asıl kör nokta liste değil, **tek yıl = dönem ucu** kuralı (#11). Bu kuralın kaç kalemi kaçırdığı ölçülmedi.


---

## §v1.2 — KASA geri bildirimi + K1 + K2 (koordinatör onayı, 10 Ekim 2026)

**Taban:** `origin/main` **a51430cc**. Ölçüm 534633f8'de başladı. Alet kökü kendisi ölçtü ve "GERİDE: 2" bastı (⑦ işini gördü). Aradaki iki commit yalnız `CLAUDE.md` ve `oturumlar/PAKET-1010-*` dosyalarına dokunuyor, `data/` ve `arac/` değişmedi. Yine de worktree a51430cc'ye alındı ve bütün koşular orada tekrarlandı; sayılar birebir aynı çıktı.
**Sınav 57/57** (v1.1'de 32/32 idi).

**YÜKSEK aday sayısı 156'dan 130'a indi.** ENGEL-KALKMIŞ 27'den 13'e, ÖZ-İLAN-İSABET 129'dan 117'ye.

| Yüklem | v1.1 → v1.2 geçişi | N | Sebep |
|---|---|---:|---|
| ENGEL | KALKMIS → ENGEL-DURUYOR | 10 | ② künye penceresi |
| ENGEL | KALKMIS → ELENDI | 4 | ① olumsuz bağlam: 3 · ③ coğrafya: 1 |
| ENGEL | (yok) → OLCULEMEDI 17 · DONULMUS 2 · ELENDI 1 | 20 | RX_ENGEL'e `künyesiz` ve `kimliksiz` eklendi |
| B | İSABET → ENGEL-DURUYOR | 9 | **D kuralı** |
| B | İSABET → ENGEL-DEVIR | 1 | D kuralı; aynı parçada ENGEL-KALKMIŞ var (Draç) |
| B | İSABET → ELENDI | 4 | **G kuralı** |
| B | ELENDI → **UC-ILANI** | **81** | **K2** |
| B | ELENDI → İSABET | 1 | **K1** (Brest-Litovsk) |
| B | REFERANSSIZ → İSABET | 1 | K1 (Cushamen) |
| B | REFERANSSIZ → ELENDI | 8 | G kuralı 6 · K1'in açtığı tarih 2 (Bağdat, Viana) |
| A | (yok) → YALNIZ-A | 26 | K1 |

Kalem kalem liste: JSON `v1_2.gecis`.

### 1. Sınıflama düzeltmeleri — kural düzeyinde, elle istisna yok

**D kuralı.** Bir B ilanı İSABET verir ve anahtarın önündeki 80 karakterde bir künye engeli geçerse (`künyesiz` · `kimliksiz` · `künye(si) yok/eksik` · `kimlik(i) yok/eksik` · `eksik_kimlik`), ilan bir öz-ilan değil bir ENGEL'dir: sınıfı **ENGEL-DURUYOR** olur. Aynı parçada ENGEL-KALKMIŞ varsa **ENGEL-DEVIR** olur; bu durumda YÜKSEK sayılan ENGEL kaydıdır, iki kez sayılmaz.
* KASA'nın 9 kalemi buraya geçti: Derbend ×2 · Maykop ×2 · Soçi ×2 · Tuapse ×2 · İlimsk.
* Kuralın KASA'nın listesinde olmayan tek ek etkisi Draç'tır: "Thopia künyesi YOK, 1368-1392 dilimi AÇIK BORÇ" → ENGEL-DEVIR. Draç'ın YÜKSEK kaydı ENGEL-KALKMIŞ / `topia` olarak kalıyor.

**G kuralı.** İki alt kural var:
* **(a) Başka kayıt.** Anahtardan önceki son 3 sözcükte, **yönelme hâlinde** ('a/'e/'ya/'ye/'na/'ne) başka bir atlas kaydının ad özü geçiyorsa ilan ELENDI olur: Grand Cess ("HARPER'A"), Mbande ("KARONGA'YA").
  * Tamlayan ya da ayrılma hâli SAYILMAZ. Ölçülen vaka: Hayber'in "Medine'nin kaydından alındı … ÇIKARIMDIR" cümlesi ilk denemede yanlışlıkla elendi; o cümle kaynağı anıyor, ilan kaydın kendisine dair.
* **(b) Kapsam beyanı.** "dokunulmadı" bir işin kapsam beyanıdır, hata iddiası değildir ⇒ ELENDI.
  * KASA'nın listesinden Sivrihisar (`neden`) ve Şeyhrumi bu kuralla elendi.
  * B-REFERANSSIZ'dan da 6 kalem ELENDI'ye geçti: Arapkir · Culfa · Königsberg · Luristan · Nakşa · Arpaçay. Königsberg'in ISABET'i "YANLIŞ" anahtarından geliyor ve yerinde duruyor.

### 2. ENGEL eşleştiricisi — üç süzgeç, sırayla

YÜKSEK, üç süzgeçten de geçen adaydır. Boya bilgisi `boya` ve `ikinci_engel` sütunlarında ayrı tutuluyor.

* **① Olumsuz bağlam.** Anılan adın iki yanındaki **3'er sözcükte** şu sözlerden biri geçiyorsa ⇒ ELENDI: `sonrası · öncesi · değil · dışında · dışı · hariç · yerine · olmadan · ötesinde · eski`.
  * İstisna: sözün önündeki sözcük bir yılsa söz zamanı niteliyor, devleti değil ("1842 öncesi Tahiti"). Ölçülen vaka: ilk denemede Papeete sahte yere elendi.
* **② Künye penceresi.** Künyenin `f`/`t` yılı `gun.py` ile sayısal olarak alınır ve kaydın ilgili dilimiyle kıyaslanır:
  * Dilim metinden ya da notun kendi döneminden geliyorsa künye onu ±1 yılla TAM örtmeli: f ≤ a+1 ve t ≥ b−1.
  * Dilim kaydın boş yıllarıysa: ufuk 1000'den başladığı için alt uç anlamsız. Künye, boşluğun yazılı bir döneme bağlandığı uçta (b < 1945) b−1 yılında yaşıyor olmalı.
  * Kapsamıyorsa ⇒ **ENGEL-DURUYOR** (künye var ama o dilime ait değil).
  * Dilim artık anahtarın ARDINDAKİ tarih cümleciğini de okuyor (Draç "künyesi YOK, 1368-1392 dilimi").
* **③ Coğrafî kapsam.** Kullanılan alanlar ölçüldü:
  * a) Künye veride kullanılıyorsa (`s:`/`isg:` `d`'si ya da `v:` `kid`'i, `harita` dahil): onu kullanan en yakın kayıt ≤ 400 km olmalı.
  * b) Kullanılmıyorsa: künyenin `baskent` / `ozet` / `ad` alanları kaydın ad özünü anıyor mu.
  * c) O da yoksa: künyenin `bolge`'sindeki künyeleri kullanan en yakın kayıt ≤ 400 km olmalı. Kayıt kendi sahiplerinden biri o bölgedeyse bu kendiliğinden tutar.
  * d) Hiçbiri yoksa ⇒ **ENGEL-OLCULEMEDI**, YÜKSEK değil.
  * Bugünkü 31 adayda ③'e ulaşanlar: a yoluyla 11 (8 geçti, 3 kaldı) · b yoluyla 2 (Königsberg `baskent` "Marienburg → Königsberg", Papeete `baskent` "Papeete") · c yoluyla 4.

**KASA'nın 9 yanlış eşleşmesinin hepsi YÜKSEK'ten çıktı:**

| Kayıt | Künye | v1.2 sınıfı | Süzgeç |
|---|---|---|---|
| Ginir · Goba | `adal` | ELENDI | ① "Adal **sonrası**" |
| Qitai | `cungar` | ELENDI | ① "Kuruluş **öncesi** bölge Cungar" |
| Kapuas Hulu | `malay-sultanliklari` | ELENDI | ③ en yakın kullanım Bintan (Riau) **944 km** |
| Qitai | `ming-hanedani` | ENGEL-DURUYOR | ② künye 1368-1644, boşluk uçları 1771/1876 |
| Vitim | `sibir-hanligi` | ENGEL-DURUYOR | ② künye 1430-1598, boşluk ucu 1661 |
| Valata | `agadez-sultanligi` | ENGEL-DURUYOR | ② künye 1405-1923, boşluk ucu yalnız 1281 (1945 ucu sayılmaz). ③ de onu tutardı (Agadez ~2500 km) |
| Gao · Cenne | `arma` 1750-1760 | ENGEL-DURUYOR | ② 10 yıllık künye boşluğun hiçbir ucunu kapsamıyor |

Öteki geçişler:
* Mega · Moyale · Negele Borana · Yabelo (`kenya-kuzey-halklari`) → ENGEL-DURUYOR (②: künye 1895'te bitiyor, boşluk 1897'de). KASA bunlar için "hüküm koordinatörün" demişti; v1.2 YÜKSEK saymıyor.
* Niani (`bambara`/`tekrur`) → ENGEL-DURUYOR (②).

**v1.2'de ENGEL-KALKMIŞ olan 13 kalem:**

| Kayıt | Künye | Boya | KASA hükmü |
|---|---|---|---|
| Draç | `topia` | VAR | HAZIR |
| Tembura · Yambio | `zende` | VAR | HAZIR |
| Anapa | `cerkez` | VAR | HAZIR-ŞARTLI |
| Papeete | `tahiti` | VAR | HAZIR-ŞARTLI |
| Maridi | `zende` | VAR | HAZIR-ŞARTLI |
| Mizan Teferi | `kaffa-kralligi` | VAR | HAZIR-ŞARTLI |
| Königsberg | `teuton-sovalyeleri` | **YOK** | BOYA BORCU |
| Raipur · Ratanpur | `nagpur-bhonsle` | **YOK** | BOYA BORCU |
| Ağere Maryam · Dilla · Şeşemene | `sidamo-kralliklari` | VAR | ÖLÇÜLEMEDİ |

⇒ Tarayıcının 13'ü KASA'nın HAZIR (3) + ŞARTLI (4) + BOYA BORCU (3) kümesiyle 10 kalemde örtüşüyor. Kalan 3 kalem Sidamo ×3: KASA "şehir tanığı yok, kuşak = bölge cümlesi" dedi. Bu, üç süzgecin soramadığı bir sorudur (bir kuşak cümlesinin şehre taşınması, D208). ⇒ **Kalan sahte oranı 3/13**; bu üçü şehir tanığı sınıfıdır, eşleşme hatası değildir.

**Süzgeçler tek tek kapatıldı** (sınav S kolları); her biri kendi negatif kontrolünü ısırıyor:
* ① kapalı ⇒ Qitai/`cungar` YÜKSEK'e döner.
* ② kapalı ⇒ Gao/`arma` döner.
* ③ kapalı ⇒ Kapuas Hulu/`malay-sultanliklari` döner.

Pozitif kontroller yerinde: Königsberg, Anapa, Draç, Papeete, Tembura, Yambio.

### 3. K1 — dar C2

Karar sırası:
1. Parantezin ardında künye devamı varsa (", *Başlık" · "', Dergi" · ", Bd." · " s.12" · " v11") ⇒ DÜŞER.
2. Önündeki 40 karakterde dönem/olay sözü ya da hükümdar unvanı varsa (döneminde · devri · zamanında · hâkimiyeti · saltanatı · ölüm · kuruluş · kurucu · başkent · işgal · idare · fetih · savaş · antlaşma · barış · Han · Şah · Bey · Sultan · Paşa · el- · Melik · Emîr) ⇒ KORUNUR.
3. Ardında yalnız metin sonu varsa (tırnak olabilir) ⇒ DÜŞER.
4. Hemen önünde ≥2 ardışık büyük harfli, eksiz sözcük varsa (Ad Soyad) ⇒ yazar ⇒ DÜŞER.
5. Öteki durumlarda (cümle sürüyor) ⇒ KORUNUR.

Hicrî biçim zaten korunuyordu, dokunulmadı.

| | C2 kapalı | Eski C2 (geniş, v1.1) | Yeni C2 (dar, v1.2) |
|---|---:|---:|---:|
| A YALNIZ-A | 1656 | 1574 | **1600** |
| B ÖZ-İLAN-İSABET | 117 | 115 | **117** |

**Yeni süzgecin kaybı, adıyla** (v1.1'in 82 kalemlik okumasına karşı):

| v1.1 okuması | N | Dar C2'de |
|---|---:|---|
| YAYIN YILI | 45 | **45/45 hâlâ düşüyor** (Merriman ×39 · Kolonial-Lexikon ×3 · Imperial Gazetteer · Lorimer · Scott & Hardiman) |
| ESER BAŞLIĞI DÖNEMİ | 11 | 11/11 düşüyor (künye devamı "', Dergi"). Nötr kayıp |
| GERÇEK OLAY YILI | 25 | **25/25 kurtuldu** |
| ATLAS İÇ DEĞERİ | 1 | kurtuldu (Kuba "yamanın penceresinin (1583-1607) DISINDA"); nötr |
| B: Brest-Litovsk (gerçek öz-ilan) | 1 | **kurtuldu** → İSABET |
| B: Cushamen (sahte, kuruluş yılı) | 1 | kurtuldu → İSABET (bu bir sahte YÜKSEK; KASA'nın E türü) |

**Kalan sapma 0.** Dar C2'nin kaybı tam olarak 56 kalem: 45 yayın yılı + 11 eser başlığı.
* İlk denemede 5 olay yılı hâlâ düşüyordu: İzdin "zamanında (1424-1832)'" ve Andican/Hokand/Hucend/Oş "hâkimiyeti (1494-1504)"". Sebep, metin sonu kuralının dönem sözünden önce sınanmasıydı; sıra düzeltildi.
* Sınavda iki yön sınandı: Merriman (1918) DÜŞER, Brest-Litovsk (1915-1918) KALIR.

### 4. K2 — UÇ-İLANI
B ilanında **tek yıl = P.f ya da P.t yılı** ise ilan artık ELENDI'ye değil **UC-ILANI**'na gider. Bu ayrı bir sütundur, YÜKSEK değildir.
* Kural `__BOSLUK__` dilimine ve başka devlet hakkındaki NEG/YANLIŞ ilanlarına uygulanmaz; NEG/YANLIŞ için anılan kimlik P'nin sahibi olmalı.
* Etkisi: **81 kalem / 77 kayıt ELENDI'den UC-ILANI'na geçti.** Anahtara göre: bulunamadı 54 · açık borç 10 · yazılmadı 10 · değil 2 · öteki 5.
* Pozitif kontrol: **Şerur s[3] karakoyunlu f=1408-04-13** → UC-ILANI.
* 77 kayıt: Ahar · Ankara · Antakya · Ardahan · Arpaçay · Astara · Barkol · Berde · Beri · Bolgrad · Cenîne · Culfa · Daly Waters · Darende · Dera İsmail Han · Digor · Dimetoka · Doha · Elmina · Eperjes · Erdebil · Ermeni Derbendi · Eçmiyadzin · Fülek · Gence · Gümrü · Halhâl · Herseknovi · Hoy · Iriba · Iğdır · Kahire · Kainsk · Kapuas Hulu · Karaman · Kars · Katar Yarımadası · Kerene · Kliçatak · Küçükperveli · Lenkeran · Lugos · Merend · Merâga · Merîvan · Meşkinşehr · Miyâne · Modon · Munkács · Mâku · Mîyandoab · Nahçıvan · Nakşa · Norapat · Ordubad · Otranto · Oyo-İle · Porto Velho · Revan · Rāzhān · Sakkız · Sarâb · Sarıkamış · Selmâs · Sero · Sin · Sultâniye · Temeşvar · Tokaj · Türabe · Ungvár · Urmiye · Xinyang · Yerbogaçen · Çehrin · Şerur · Şeyh Salû-yi Ulyâ.

### 5. (①) Yama evreni — BENZERSİZ ilan metni
**Normalleştirme kuralı:**
* İsabeti taşıyan JS dize değişmezi alınır; yorum satırında `//` sonrası, ikisi de yoksa satırın kendisi.
* ARAC-NORMAL `norm()` uygulanır (Türkçe katlama, küçük harf).
* Bütün rakam dizileri `#` olur (tarih ve yıl dahil). Kaçışlar (`\"`, `\n`) sökülür, boşluk tekleşir, baştaki ve sondaki noktalama atılır.
* **Kayıt adı İÇERİDE kalır:** adı taşıyan cümle tekil sayılır, yani sayı bir ÜST sınırdır.

| | Ham isabet | Benzersiz ilan metni |
|---|---:|---:|
| **Karantina dışı** (103 dosya) | 4.456 | **1.000** (dosyalar arası tekil) · dosya içi tekil toplamı 1.027 |
| `yer_yama_1923_1945.js` — **LAB KARANTİNASI, toplama KATILMADI** | 7.406 | 143 |

* Şablon etkisi: `yer_yama_kademe2.js` 2.720 ham isabetten yalnız **8** benzersiz metin veriyor; `misir_himaye` 168 → 3, `hayalet2` 123 → 6.
* En çok benzersiz metin: yer_yama.js 162 · once1281_z6 83 · sahiplik 40 · kafkas 28 · japonya 27 · dogafr 27 · kademe_m_0905 26.
* Ham sayı v1.1'deki 11.835'ten 11.862'ye çıktı, çünkü RX_ENGEL'e `künyesiz` ve `kimliksiz` eklendi.
* Sınıflama yok.

(②) Yorum evreni ertelendi, dokunulmadı.

### 6. Bulamadım / ölçemedim (v1.2)
* **Sidamo ×3 ve Maridi/Mizan Teferi'nin "kuşak" notları:** bir bölge cümlesinin şehre taşınması (D208) üç süzgeçle sorulamıyor. Coğrafya süzgeci künyenin YAKINLIĞINI ölçer, notun şehir için tanıklık edip etmediğini ölçmez.
* **③-b metin yolu yalnız kaydın ad özünü arıyor:** eşanlam sözlüğü (`ad_esanlam.js`) kullanılmadı. Königsberg ve Papeete künyenin `baskent` alanında birebir geçtiği için tuttu.
* **400 km eşiği bir ÖLÇÜM DEĞİL, seçimdir.** Bugünkü 11 "kullanım" uzaklığı: geçenler 39–334 km, kalanlar 544 km (Zagreb), 944 km (Kapuas Hulu) ve 1074 km (Sebte). Eşik 335–543 km aralığının herhangi bir yerinde aynı sonucu verir; yeni veride sınanmadı.
* **G-(b) "dokunulmadı" kuralının sahte negatif riski:** bir notta hem kapsam beyanı hem gerçek bir hata iddiası tek anahtarla geliyorsa ilan elenir. Örneklemde gözlenmedi, ölçülmedi.
* **D kuralının ENGEL tarafı:** Derbend/Maykop/Soçi/Tuapse'nin ENGEL kaydı ENGEL-OLCULEMEDI. Sebebi "Gürcü/Beyaz/Dağlı" adlarının bir künyeye bağlanamaması; o dönem künyelerinin bugün var olup olmadığı ölçülmedi.
