# KASA-SESSIZ-KUNYE-1010 — üç sessiz künye: aleut · arua · norvec-isvec-birligi

**Oturum:** KASA-SESSIZ-KUNYE-1010 (KASA, araştırmacı — yalnız metin; `data/`ya YAZILMADI, hüküm VERİLMEDİ)
**Tarih:** 10 Ekim 2026
**Ölçüm tabanı:** ayrı worktree `C:\atlas-sk-1010`, `origin/main` = `6e625e15a` (detached → dal `kasa-sessiz-kunye-1010`)
· `data/devletler.js` sha256 `abe6932cdc4d513f…`
· ⚠️ Ana checkout `C:\atlas` `origin/main`in **5 commit** gerisindeydi ⇒ ana checkout'ta ÖLÇÜLMEDİ (`CLAUDE.md` "AĞACIN GERİDEYSE DUR").
· Yerleşim evreni: `girdi.yukle()` — **4300** nokta.
**Yöntem sınırı:** "hangi petek yutuyor" sorusu **en yakın VAR OLAN nokta** (büyük daire km, `girdi.km`) ile yaklaşıklandı. Bu motor çıktısı DEĞİLDİR (kara maskesi, ~200 km kara tavanı, göller yok). Motor çıktısı (`devlet_harita_ust.js`) **ölçülmedi**.

## Öngörü (ölçümden ÖNCE yazıldı)
```
(a) Aleut kutusunda yalnız Unalaska (1787); 1281-1787'yi Alaska/Kamçatka kıyısından bir nokta yutar.
    Nikolski/Chaluka arkeolojik olarak çok eski; kuruluş YILI yok.
(b) Marajó'da 1616 öncesi kaynaklı nokta: bulunamadı beklenir.
(c) Kiel 1814-01-14 Norveç'i İsveç'e verir ama Norveç tanımadı; birlik 1814-11-04. Künye doğru, veri yanlış beklenir.
```
Tuttu mu: (a) KISMEN (yutan Chignik/alutiiq, 772 km — beklediğimden çok uzak) · (b) TUTTU, ama soru yanlış kurulmuş çıktı (aşağıda) · (c) TUTTU, üstelik ikinci bir fark çıktı (kimlik).

---

## (a) aleut

### Veride ölçülen
Kutu 50–58K, 160D–180 / 180–155B: **3 nokta.**
```
Nijnekamçatsk   56.28, 162.0     kur 1697   rusya ...
Chignik         56.3, -158.4     kur yok    1281-01-01..1784-08-14 alutiiq → rusya → abd
Unalaska        53.87,-166.53    kur 1787   1787-01-01.. rusya → abd
```
`aleut` kimliği **hiçbir yerleşimde yok** (`d:"aleut"` grep: yalnız `devletler.js` + `paket_05.js`).

**Nikolski noktasının (52.94K 168.87B) en yakın VAR OLAN noktası:**
```
1300 · 1500 · 1700 · 1750 · 1784-01  Chignik 772 km [alutiiq]
1786-01                              Chignik 772 km [rusya]   (1784-08-14 sonrası)
1788-01                              Unalaska 187 km [rusya]
```
**Batı Aleut (Attu 52.9K 173.2D):** 1300'de Kamçatka (İtelmen toprakları) 991 km — `s:` dönemi okunmadı (sahibi bu okuyucuyla None);
1745 ve sonrası Nijnekamçatsk 815 km [rusya]. ⇒ Zincirin batı ucu Kamçatka peteğine, doğu ucu Chignik peteğine düşüyor (yaklaşık).
🔴 772 km, motorun ~200 km kara tavanının çok üstünde: motor adaları hiç boyamıyor da olabilir — **ölçülemedi** (motor çıktısı okunmadı).

### Kaynak
- **Chaluka (Nikolski Körfezi, güneybatı Umnak)** — Aigner, J. S., "Carved and Incised Stones from Chaluka and Anangula", *Anthropological Papers of the University of Alaska* 15(2), 1972 (UAF, PDF metni çıkarıldı):
  - Chaluka'yı **"the Aleut base village, Chaluka, on Nikolski Bay, southwest Umnak Island"** diye tanımlıyor.
  - Derin höyük **"3500-plus years"**; üst katmanlar **"date after 550 A.D. (1400 B.P.) - most are probably later than 1000 A.D."**
  - ⇒ Höyüğün üst katmanları MS 1000 sonrasına iniyor = **1281 penceresinin içine kadar iskân kanıtı var** (yüzyıl düzeyinde; YIL değil).
- **NPS, Chaluka Site NHL** (nps.gov/places/chaluka-site.htm): "Villages at Chaluka have been dated to at least 4,000 years old"; site "near Nikolski". NHL tescili 29 Aralık 1962, NRHP #66000155.
- TDV: `nikolski` 302 · `aleut-adalari` 302 (ölü slug); arama Aleut maddesi üretmedi.

### Cevap
| Soru | Cevap |
|---|---|
| Nikolski'nin **kuruluşu** | **bulunamadı** (yıl). Rusça adlı köy olarak (Nikolskoye) kuruluş yılı veren akademik kaynak bulunamadı. |
| Nikolski/Chaluka'nın **varlığı** | **VAR, kaynaklı:** Aigner 1972 — "Aleut base village", üst katmanlar MS 550 sonrası, çoğu MS 1000 sonrası; NPS — ≥4000 yıl. Arkeolojik süreklilik iddiası Chaluka için; Rus dönemiyle kesintisizlik bu turda **doğrulanmadı**. |
| 1281–1784'te bölgeyi **hangi petek yutuyor** | En yakın nokta yaklaşıklamasıyla **Chignik (alutiiq)**, 772 km; batı ucu Kamçatka noktaları (991 / 815 km). 1784-08-14–1787 Chignik [rusya]; 1787'den Unalaska [rusya]. |
| Orada **yerleşim var mıydı** | **Evet** (Chaluka, yukarıdaki iki kaynak). Kesin tarih YOK ⇒ `kur:` yazılacaksa YIL YAZILAMAZ; ancak ufuk (1281-01-01) varlık beyanıyla. |

### Öneri (hüküm değil)
1. Nikolski/Chaluka noktası Aleut künyesine gövde verir; dayanak **Aigner 1972 + NPS** (bu belgede alıntılı). Kuruluş günü için ufuk kullanılırsa kayda "kuruluş yılı bulunamadı · arkeolojik süreklilik (Aigner 1972)" yazılmalı.
2. ⚠️ **Künyenin `t:` sorunu ayrı:** `aleut t:1784-08-14` künyenin KENDİ notuna göre **Kodiak Alutiiq'ine ait bir gün** ("Bu gün Kodiak Alutiiq'ine aittir; Aleut adalarının tâbiiyeti 1760'lardan itibaren kademelidir"). Nikolski noktası bu `t:` ile yazılırsa Aleut adası Kodiak gününde el değiştirir. Bu turda Aleut adalarına özgü bir gün **bulunamadı**. Koordinatöre: nokta yazılmadan önce `t:` sınıflandırılmalı (§3.5 üç sınıf).
3. Doğu-batı ayrımı: tek nokta (Nikolski, doğu Aleut / Fox Adaları) batı Aleut'u (Near/Rat Adaları) yine Kamçatka'ya bırakır — tam kapsam için ikinci nokta gerekir; batı için kaynak bu turda **aranmadı**.

---

## (b) arua

### Veride ölçülen — 🔴 SORU KURULUŞU DÜZELTİLMELİ
Kutu −2.5..0.8K, 51.5..48B: **4 nokta.**
```
Belém              -1.456, -48.490   kur 1616-01-12   ANAKARA (Guajará körfezi)  ← "Marajó'nun en eski noktası" diye anılan bu
Cametá (Tocantins) -2.24,  -49.5     kur 1635         ANAKARA
Macapá              0.039, -51.066   kur 1758         ANAKARA (Amapá)
Chaves (Marajó)    -0.164, -49.987   kur 1758         ADANIN ÜSTÜNDEKİ TEK NOKTA
```
⇒ **Marajó adasının ÜSTÜNDE 1758 öncesi hiç nokta yok.** 1616 Belém'in (anakara) günüdür.
`arua` kimliği hiçbir yerleşimde yok.

**Marajó merkezinin (−0.9, −49.5) en yakın VAR OLAN noktası:**
```
1300 · 1600     "Beyan K2.5 B52.5"  505 km  (sahipsiz beyan noktası)
1617 · 1700     Belém 128 km [portekiz-brezilyasi]
1757            Belém 128 km
1759            Chaves (Marajó) 98 km
```
⇒ 1281–1616 ada beyan/boşluk noktasına, 1616–1758 Belém'e (Portekiz) düşüyor (yaklaşık).

### Kaynak
- **Acevedo Marin, R. E., "Quilombolas na ilha de Marajó: território e organização política"**, *Diversidade do campesinato*, c.1, NEAD/MDA 2009 (UFPA Livro Aberto, PDF metni çıkarıldı), s. 210-212:
  - Vieira'nın emriyle Souto Maior ve Salvador Vale'nin **"instalar a aldeia Nheengaíba ou Ingaíba, reunindo as nações Sacaca, Aruã, Mapuá…"** — 🔴 YIL VERMİYOR (cümle 1655 "guerra defensiva" ile 1666 arasındaki bağlamda; yıl türetilmez).
  - Fransiskenler **"estabeleceram suas aldeias missionárias na ilha durante os treze anos (1666-1679)"** — ad ve konum YOK.
  - **1693**'te misyonlar paylaşıldı; doğu Marajó Santo Antonio Fransiskenlerine.
  - "pesqueiros reais de Joannes e Soure"; **Mondim** (Soure yakını), **Villar** (Ponta de Pedras civarı), **Rebordello** (Caviana adası) "povoados exclusivamente indígenas" (Baena [1839]'a atıfla) — YIL YOK.
- **Sousa, E. da S., "Estudo arqueológico da influência missionária na formação da Vila de Salvaterra na ilha de Marajó"**, Museu Goeldi bursiyer özeti (repositorio.museu-goeldi.br, hdl mgoeldi/2131):
  - Salvaterra **"originou-se de um aldeamento chamado Igarapé Grande fundado pelo padre franciscano Boaventura, e em 1757 foi elevado a categoria de vila (FRAGOSO, 1992)"**; köy **"povoado por índios das etnias Aruã, Sacaca e Maruana"**. Kuruluş yılı YOK; vila günü **1757** (yıl).
- **Lima, A. J. da S., "Levantamento bibliográfico e documental dos sítios arqueológicos missioneiros da Ilha de Marajó"** (Museu Goeldi, hdl mgoeldi/1930): misyonlar "estabelecidas a partir do século XVII"; yalnız **PA-JO-46 Joanes** kazılmış. YIL YOK.
- Rocha, R. A., "Os aruã…", *RBHCS* 10(19), 2018 — künyenin kendi kaynağı; makale metni bu turda **çekilemedi** (Dialnet soket hatası; FURG bağlantısı yalnız dosya sunuşunu verdi, ⑦ "okuyamadım ≠ yok").
- TDV: `marajo` 302. Aruã/Marajó maddesi bulunamadı.

### Cevap
| Soru | Cevap |
|---|---|
| arua künyesi daha eski mi | Evet: `f:1281-01-01` = **atlas ufku** (künyenin kendi beyanı), kuruluş değil. |
| **1281–1616** Marajó'da kaynaklı yerleşim | **bulunamadı** (adlı, yerli, yıllı). Künyenin kendi notu Marajoara höyük kültürünün pencereden önce söndüğünü söylüyor; temas öncesi Aruã köyleri için yıllı kaynak bulunamadı. |
| **1616–1758** Marajó'da kaynaklı yerleşim | **VAR ama YILSIZ:** Nheengaíba/Ingaíba aldeia'sı (Cizvit), 1666-1679 Fransisken aldeia'ları, Igarapé Grande (→ Salvaterra, vila **1757**), Joanes ve Soure pesqueiros, Mondim/Villar/Rebordello. Kuruluş YILI veren cümle **bulunamadı** — Salvaterra'nın 1757 vila günü dışında. |

### Öneri (hüküm değil)
1. 1757 Salvaterra (vila) **yıl düzeyinde** kaynaklıdır (Sousa ← Fragoso 1992) ama Chaves 1758'den yalnız bir yıl erken — Aruã'ya gövde VERMEZ (s: portekiz-brezilyasi olur).
2. Aruã'ya 1616–1758 gövdesi verecek bir nokta için en güçlü aday **Joanes (PA-JO-46)**: kazılmış tek misyon sitesi, Aruã'nın yaşadığı "Ilha de Joanes"in adı. **Kuruluş yılı bulunamadı** ⇒ bugünkü kaynakla yazılamaz (`CLAUDE.md §4`: yıl yoksa yıl yazılmaz). Sonraki tur: Rocha 2018 tam metni + Baena (1839) *Ensaio corográfico*.
3. Mevcut durumda 1281–1616 ada "Beyan" boşluk noktasına düşüyor — bu, sahipsizliği beyanlı gösteriyor; arua'yı oraya taşımanın dayanağı (yerleşim) bulunamadı.

---

## (c) norvec-isvec-birligi

### Veride ölçülen
Norveç'teki **20 nokta**nın 20'si de aynı zinciri taşıyor:
```
s: danimarka   ..1814-01-14
s: isvec       1814-01-14..1905-06-07     ← KİEL günü, kimlik "isvec"
s: norvec      1905-06-07..
```
Noktalar: Oslo · Bergen · Stavanger · Tønsberg · Kristiansand · Trondheim · Ålesund · Molde · Kristiansund · Røros · Sogndal · Lillehammer · Hamar · Skien · Haugesund · Mosjøen · Bodø · Tromsø · Alta · Vardø.
Künye: `norvec-isvec-birligi f:1814-11-04 t:1905-06-07`. `renkler.py`de bu kimlik **0** kez geçiyor; hiçbir yerleşim bu kimliği kullanmıyor ⇒ sessizliğin sebebi tarih değil, **verinin bu kimliği HİÇ kullanmaması** (veri `isvec` yazıyor).

### İki fark — ADIYLA
```
FARK 1 · GÜN      veri 1814-01-14 (Kiel)  ↔  künye 1814-11-04 (olağanüstü Storting)   = 294 GÜN
FARK 2 · KİMLİK   veri "isvec"            ↔  künye "norvec-isvec-birligi"
```
294 gün = 14 Ocak → 4 Kasım 1814 (17+28+31+30+31+30+31+31+30+31+4).

### Kaynak
- **Store norske leksikon, "Kieltraktaten"** (snl.no): imza **"14. januar 1814"**; 4. madde Norveç'i İsveç kralına verir; ama **"Statsrettsleg vart Kieltraktaten aldri godkjent i Noreg"**; 16 Şubat 1814 stormannsmøte; 17 Mayıs 1814 anayasa.
- **Store norske leksikon, "Mossekonvensjonen"** (snl.no): **"Avtalen ble inngått 14. august 1814"**; Storting XIII. Karl'ı (Norveç'te II. Karl) seçti **"den 4. november, som var datoen for etableringen av den svensk-norske union"**; **"Kieltraktaten ble ikke godtatt i Norge."**
- **EB1911** (künyenin kendi kaynağı, bu turda yeniden çekilmedi): Kiel 14 Ocak · Eidsvold 17 Mayıs · Storting 4 Kasım birlik.
- **TDV `isvec`** (200, gövde okundu): YIL düzeyinde — XIII. Karl **"1814'te Norveç'i ele geçirerek bir birlik oluşturdu"**; ayrılık **"(1905)"**. Kiel'i ANMIYOR; günü desteklemiyor, ikisiyle de ÇELİŞMİYOR. `norvec` 302 (ölü) · `kiel` 302.

### Cevap
**Doğru başlangıç: 1814-11-04 (künye).** İki bağımsız kurumsal kaynak (SNL + EB1911) birliğin kuruluşunu 4 Kasım 1814'e koyuyor; SNL Kiel'in Norveç'te hukuken HİÇ tanınmadığını açıkça söylüyor. Kiel bir **devir antlaşmasıdır, fiilî/hukukî geçiş değil** (`§3.5` "devletin yıkılışı ≠ o yerin fethi" ailesi). TDV yıl düzeyinde ikisini de karşılıyor (1814).
⇒ Veri Norveç'i **294 gün erken** İsveç'e boyuyor, ve yanlış kimlikle.

### Öneri (hüküm değil)
1. 20 noktada `isvec 1814-01-14..1905-06-07` → `norvec-isvec-birligi 1814-11-04..1905-06-07` (kimlik + gün).
2. 🔴 **Arada kalan 294 gün kimin?** 1814-01-14..1814-11-04 için iki seçenek, kaynakla:
   - ⓐ Bağımsız Norveç (Christian Frederik naipliği / Eidsvold) — künyenin `not:` alanı bu dilimin "künyeye katılmadı" olduğunu söylüyor ⇒ **yeni künye ya da `norvec` künyesini 1814'e açmak** = kapsam/künye kararı, **koordinatörün**.
   - ⓑ `danimarka`yı 1814-11-04'e uzatmak — ⚠️ künye adı "1814'e kadar Danimarka-Norveç" ve Kiel'le Danimarka hakkından feragat etti; Danimarka'ya boyamak da kaynakla ÇELİŞİR (SNL: Christian Frederik Norveç adına direndi). **Önermiyorum.**
   - Ayrıca Moss (1814-08-14) bir ara gün olarak kronolojide zaten var (`kronoloji_isvec.js:486`); birliği değil ateşkes/kabulü tarihliyor.
3. `renkler.py`de `norvec-isvec-birligi` boyası **yok** (0) ⇒ ① uygulanırsa renk de gerekir; aksi hâlde "renksiz künye — harita deliği" kovasına geçer (`§1.5`). Uygulama `data/` + `renkler.py` işi; KASA'nın değil.
4. Değişmez 2: 1814-11-04 maddesi künyenin kronolojisinde var (`devletler.js:8070`); 20 noktanın kırılması oraya taşınırsa ±30 gün içinde madde bulunur — ⚠️ o dizinin Değişmez 2 EVRENİNDE olup olmadığı bu turda **ölçülmedi**.

---

## Özet (sayıyla)
```
3 kalem · 3'ü de cevaplandı
(a) aleut     Nikolski varlığı KAYNAKLI (Aigner 1972, NPS) · kuruluş yılı BULUNAMADI · yutan petek Chignik/alutiiq 772 km (yaklaşık)
(b) arua      1281-1616 BULUNAMADI · 1616-1758 yerleşim VAR ama YILSIZ (yalnız Salvaterra vila 1757) · "1616" Belém'dir, ADA DEĞİL
(c) birlik    DOĞRU = 1814-11-04 (SNL ×2 + EB1911) · fark 294 GÜN + KİMLİK (isvec ↔ norvec-isvec-birligi) · 20 nokta
```
**Ölçülemedi:** motor çıktısında Aleut/Marajó'nun gerçek boyası (yaklaşıklama yalnız en yakın nokta).
**Bulunamadı:** Nikolski kuruluş yılı · Aleut adalarına özgü Rus tâbiiyet günü · Marajó'da 1758 öncesi YILLI kuruluş (Salvaterra vila 1757 hariç) · Rocha 2018 tam metni.
