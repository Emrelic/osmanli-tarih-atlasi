# CELISKI-ICKAYNAK-1010 — "KAYNAK DOĞRU, VERİ KAYNAĞI İZLEMİYOR" aday listesi

**Bu bir KAPI DEĞİLDİR.** `denetle.py`ye bağlanmadı, tavan yazılmadı. Tarayıcı LİSTE üretir; hüküm KASA'nındır.
Koordinatörün 10 Ekim düzeltmesi uygulandı: sıralamayı **④ ENGEL-KALKMIŞ** ve **B ÖZ-İLAN** yapar; **A (yıl-iç)** yalnız kaba evren ve ayrı sütundur. "Cümlede başka devlet anılıyor ⇒ YÜKSEK" ölçütü **öldürüldü**, A'da yalnız bilgi sütunu olarak duruyor (`a_anilan_yabanci`).

| | |
|---|---|
| Taban | `origin/main` **79ff492a225c124bd48a83be6868861c1d62b8bb** (ayrı worktree, `--detach`; teslim anında `HEAD..origin/main` = 0) |
| Evren | `girdi.GIRDI_DOSYALARI` canlı: **93 dosya · 4300 kayıt** · `devletler.js` **897 künye** · `renkler.BOYALAR` **704** |
| Tarayıcı | `denetim/ARAC-CELISKI-ICKAYNAK-1010.py --kok <origin/main worktree> --json <yol>` (~4 sn) |
| Sınav | `denetim/ARAC-CELISKI-ICKAYNAK-SINAV-1010.py --kok <aynı>` → **30/30**, çıkış 0 |

## 1. Sayılar (bugün)

**Bugün 156 YÜKSEK aday var: 27 ENGEL-KALKMIŞ ve 129 ÖZ-İLAN-İSABET. Bunlar 122 ayrı kayıtta.**

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
