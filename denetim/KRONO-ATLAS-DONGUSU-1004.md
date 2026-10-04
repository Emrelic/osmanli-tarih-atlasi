# KRONO-ATLAS-DONGUSU-1004 — kronoloji maddesi atlasın kendi boyamasından mı türetilmiş?

Oturum: KRONO-DOGRULUK-ORNEKLEM-1004 · 4 Ekim 2026 · görev: YILDIRIM BAYEZIT (send_message)
Önceki: [`KRONO-ORNEKLEM-2-1004.md`](KRONO-ORNEKLEM-2-1004.md) §2.4 (304 Şam 1918 "Hama, Humus").
**Veriye yazılmadı, düzeltme yapılmadı.**

## 0. Evren, sayım ve seçim — ÖLÇÜMDEN ÖNCE DONDURULDU

- Kronoloji evreni: `data/olaylar*.js` **1761 madde** (node `vm` dökümü, 1. ve 2. turla aynı).
- Yerleşim evreni: `girdi.yukle()` — **4298 nokta** (regex DEĞİL; yükleyicinin kendisi).
- Kalıp araması `d` + `b` alanlarında, büyük/küçük harf duyarsız:

| kalıp | madde |
|---|---|
| "aynı tarihte" | **77** |
| "ile birlikte" | 28 |
| "aynı gün" | 26 |
| "birlikte elden çıktı" | 0 |
| **en az biri** | **130** (99'u `ek*`) |
| ⤷ "aynı tarihte … yerler/yerleşimler:" LİSTE biçimi | **76** |
| ⤷ kalıplı cümlede en az bir `girdi` yerleşim adı geçen | 107 |

- Sıralama ölçütü: kalıbı taşıyan cümle(ler)de geçen **farklı `girdi` yerleşim adı sayısı**
  (uzun ad önce eşlenir, alt dizgi tekrarı sayılmaz). Eşitlikte küçük indis önce.
  Betik: scratchpad `dongu1.py` (sayım) · `dongu2.py` (döküm).
- **Seçilen 10** (sayı = kalıplı cümledeki yerleşim adı):

| sıra | # | dosya | t | başlık | ad | kalıp | `kaynak:` |
|---|---|---|---|---|---|---|---|
| 1 | 9 | olaylar.js | 1402-07-28 | Ankara Savaşı — Fetret Devri | **116** | aynı tarihte elden çıkan | `ankara-savasi` |
| 2 | 64 | olaylar.js | 1878-07-13 | Berlin Antlaşması | 10 | aynı tarihte elden çıkan | `berlin-antlasmasi` |
| 3 | 786 | olaylar_ek4.js | 1841-02-25 | Mısır ordusu Suriye ve Çukurova'yı boşalttı | 10 | aynı tarihte elden çıkan | `suriye` |
| 4 | 731 | olaylar_ek4.js | 1805-07-03 | Mısır valiliği fermanı | 8 | aynı tarihte tâbi katmana geçen | `misir` |
| 5 | 291 | olaylar_ek.js | 1812-05-28 | Bükreş Antlaşması — Besarabya | 5 | aynı tarihte elden çıkan | `bukres-antlasmalari` |
| 6 | 22 | olaylar.js | 1517-01-22 | Ridaniye — Mısır'ın fethi | 4 | aynı tarihte katılan | `ridaniye-savasi` |
| 7 | 55 | olaylar.js | 1821-03-25 | Yunan İsyanı başladı | 4 | aynı tarihte elden çıkan | `mora` |
| 8 | 65 | olaylar.js | 1881-05-12 | Tunus'un işgali | 4 | aynı tarihte elden çıkan | `duyun-i-umumiyye` |
| 9 | 295 | olaylar_ek.js | 1881-07-02 | Teselya'nın Yunanistan'a bırakılması | 4 | aynı tarihte elden çıkan | `tesalya` |
| 10 | 519 | olaylar_ek16.js | 1308-01-01 | Aydınoğulları Beyliği'nin kuruluşu | 4 | ile birlikte | `aydinogullari` |

📌 Ölçümden önce görülen ama hükme katılmayan iz: #22'nin `ic_not_d` alanı **"eski ifade:
Aynı tarihte haritaya katılan diğer yerleşimler:"** diyor — yani kalıbın eski biçimi
"HARİTAYA katılan" idi. #786 ve #731 metinleri de "Haritada … geçer" diye haritayı anlatıyor.
Bu, sınıfın kökeni hakkında bir ipucu; ölçüm değil.

## 1. ÖNGÖRÜ — ölçümden ÖNCE yazıldı

- **② evet + ① hayır: 8 / 10 (aralık 6–9).**
- Mekanizma: "Aynı tarihte (elden çıkan | katılan | tâbi katmana geçen) diğer yerleşimler:
  …" son eki, yerleşim dosyalarındaki aynı-gün kırılmalarından MEKANİK olarak üretilmiş
  ve maddenin ana metnine eklenmiş. Kaynak (çıplak TDV slug) bu adları saymıyor.
- Beklenen istisnalar: **#519** (kalıp "ile birlikte", TDV cümlesinden geliyor — ①
  muhtemelen evet) ve antlaşma maddelerinden biri (#64 Berlin ya da #291 Bükreş: kaynak
  bazı adları — ör. Bender, Akkirman, Varna — sayıyor olabilir, ① kısmen).
- ③ öngörüsü: liste uzadıkça bağımsız kaynak desteği düşer; **#9 Ankara'nın 116 adının
  çoğu (ör. Bursa, Edirne, İznik) 1402'de "elden çıkmadı"** — Osmanlı şehzadelerinin elinde
  kaldı. Yani ③ bu madde için yalnız "desteksiz" değil, "yanlış" çıkacak.
- ② ölçümü: her ad için `girdi.yukle()` kaydının `s:` dönemlerinde `t` gününde biten /
  başlayan bir dönem var mı (sahip değişimi tam o gün mü). `v:` (tâbi) ayrıca bakılır
  (#731 "tâbi katmana" diyor).

## 2. Ölçüm

**② yöntemi:** listedeki her ad `girdi.yukle()` kaydında aranır; `d` (doğrudan Osmanlı),
`v` (tâbi), `s` (yabancı), `isg` dönemlerinden birinin `f` ya da `t` günü maddenin `t`
gününe EŞİT mi diye bakılır (betik `dongu3.py`). **① yöntemi:** maddenin kendi `kaynak:`
slug'ının TDV gövdesi bu oturumda çekildi; ad geçiyorsa geçtiği CÜMLE okundu — ad
gövdede geçiyor ama o olayı/tarihi anlatmıyorsa ① HAYIR sayıldı (`dongu4.py` + elle okuma).

| # | madde | ② aynı gün (atlas) | ① kaynak adıyla sayıyor mu | ②evet+①hayır | ③ bağımsız kaynak |
|---|---|---|---|---|---|
| 9 | Ankara 1402 | **116/118** (Afyon girdide yok · Kilitbahir'in ±3 yılda kırılması yok) | HAYIR — `ankara-savasi`'nde 118 addan 7'si geçiyor, hepsi savaş ÖNCESİ yürüyüş/kuşatma cümlelerinde | **EVET** | 🔴 YANLIŞ — aşağıda |
| 64 | Berlin 1878 | **10/10** | HAYIR — `berlin-antlasmasi` 10 addan 0'ını sayıyor | **EVET** | kısmen — Filibe "elden çıkmadı", Şarkî Rumeli'ye geçti |
| 786 | Mısır'ın Suriye'yi boşaltması 1841 | **10/10** | HAYIR — `suriye` yalnız bölge düzeyinde | **EVET** | 🔴 YÖN TERS — aşağıda |
| 731 | Mısır valiliği fermanı 1805 | **8/8** | HAYIR — `misir` yalnız "Mısır valiliğine getirildi (1805)" | **EVET** | tutarlı (bölgeden şehre) |
| 291 | Bükreş 1812 | **5/5** | HAYIR — `bukres-antlasmalari` ÖLÜ slug (302); `bukres-antlasmasi` da ölü | **EVET** | ✅ doğru — `akkirman`, `hotin` |
| 22 | Ridaniye 1517 | **0/4** | HAYIR — `ridaniye-savasi` 4 addan 0'ı | hayır (②) | 🔴 kronoloji HARİTAYLA çelişiyor — aşağıda |
| 55 | Yunan isyanı 1821 | **4/4** | HAYIR — `mora` 1821 cümlesinde yalnız Tripoliçe | **EVET** | 🔴 — `balyabadra` |
| 65 | Tunus 1881 | **4/4** | HAYIR — `duyun-i-umumiyye` 4 addan 0'ı | **EVET** | ⚪ — `kayrevan` yalnız yıl |
| 295 | Teselya 1881 | **4/4** | HAYIR — `tesalya` 1881 cümlesi bölge düzeyinde; 3 şehir yalnız coğrafya bölümünde, Arta hiç yok | **EVET** | ⚪ — yalnız yıl |
| 519 | Aydınoğulları 1308 | 2/4 (İzmir kırılmasız · Bodemya girdide yok) | **EVET** — `aydinogullari`: "İzmir'in müslüman kesimi ile Ayasuluk (Selçuk), Tire, Sultanhisarı ve Bodemya'yı da ele geçirdi" | hayır | ✅ |

### 2.1 SONUÇ: **10'da 8 — ② evet + ① hayır.**

Öngörü 8 (6–9) idi: **tam tuttu.** İstisnalardan biri öngörüldüğü gibi #519 (kalıp TDV
cümlesinden gelen "ile birlikte"); öteki öngördüğüm antlaşma maddesi DEĞİL, **#22** çıktı —
ve #22 sınıfı ÇÜRÜTMÜYOR, daha kötü bir alt sınıfını gösteriyor (§2.3).

### 2.2 Türetmenin İZİ — sayı değil, kaydın kendi notu

76 liste maddesinin tamamında ölçüldü (`dongu5.py`):

| ölçü | sayı |
|---|---|
| "Aynı tarihte … yerler/yerleşimler: …" liste maddesi | **76** |
| ⤷ fiil: "katılan öteki" / "elden çıkan diğer" / "tâbi katmana geçen" / "tâbi katmandan doğrudan katmana dönen" | 51 / 23 / 1 / 1 |
| ⤷ listedeki adların HEPSİ atlasta tam o günde kırılıyor | **59** |
| ⤷ kısmen | 3 |
| ⤷ HİÇBİRİ o günde kırılmıyor (bayat liste) | **14** |
| listedeki toplam ad / atlasta tam o gün kırılan | 282 / **252 (%89,4)** |
| `ic_not_d` alanında **"eski ifade: Aynı tarihte haritaya katılan diğer yerleşimler:"** | **51** |

(Çakışma ayrıca doğrulandı: "katılan öteki" fiilli 51 maddenin 51'i bu notu taşıyor;
liste kalıbı TAŞIMAYAN 3 madde daha `ic_not_d`'de "haritaya" geçiriyor — onlara bakmadım.)

🔴 **Bu son satır ölçümün en güçlü kanıtıdır.** "Katılan öteki" fiilli 51 maddenin 51'inde
kayıt KENDİSİ eski metninin "**haritaya** katılan" olduğunu not ediyor. Yani liste atlastan
üretilmiş, sonra "haritaya" kelimesi metinden çıkarılmış ve cümle tarihsel bir iddia gibi
okunur hâle gelmiş. Kalıbın fiilleri de motorun katman dilidir, tarihin dili değil: "tâbi
katmana geçen", "tâbi katmandan doğrudan katmana dönen".

### 2.3 Üç alt sınıf — çareleri farklı

**(a) Türetilmiş ve tarihsel olarak YANLIŞ (atlasın modellemesi tarih gibi okunuyor)**
- **#9 Ankara — 116 yer "elden çıktı".** TDV `fetret-devri`: "Timur, Ankara Savaşı'nı
  kazandıktan sonra Anadolu beylerine ait toprakları Osmanlılar'dan alıp eski sahiplerine
  iade etmiş, geri kalan yerleri de Bayezid'in oğulları arasında paylaştırmıştı." ve
  "Süleyman Çelebi Edirne'de, Îsâ Çelebi Balıkesir ve Bursa'da … Mehmed Çelebi de
  Amasya'da Timur'a tâbi olarak hükümdar oldular." ⇒ Edirne, Sofya, Bursa, İznik, Amasya
  vb. hanedanın elinden ÇIKMADI; atlas bunları `suleyman-celebi`/`musa-celebi` gibi ayrı
  kimliklerle boyuyor (ör. Vidin `s: suleyman-celebi 1402-07-28`), liste bu boyamayı
  "elden çıkan" diye okuyor. Ayrıca Selanik ve Tesalya'nın Bizans'a geçişi 28 Temmuz
  1402 değil, TDV'ye göre Şubat 1403 Gelibolu Antlaşması ("Rumeli'de Selânik ve Tesalya'yı
  Bizanslılar'a terkediyordu"). Kilitbahir listede ama atlasta 1402 civarında hiç kırılması
  yok.
- **#786 — yön TERS.** Madde "Aynı tarihte elden çıkan diğer yerleşimler: Urfa, Maraş, …
  Şam, Kudüs" diyor. TDV `suriye`: "Şubat 1841 itibariyle Suriye ve Filistin tekrar Osmanlı
  yönetimine girdi." Atlas ölçümü sebebi gösteriyor: bu yerlerde biten dönem
  `v-misir-kavalali` (Kavalalı tâbiliği). Üretici "bir dönem bitti" olayını Osmanlı'nın
  kaybı diye yazmış; gerçekte Osmanlı GERİ ALDI. Aynı maddenin ilk cümlesi bile
  "yeniden doğrudan Osmanlı idaresine geçer" diyor — madde kendisiyle çelişiyor.
- **#55 — Yunan isyanı.** "Aynı tarihte elden çıkan: Atina, Balyabadra, İstefe, Livadya"
  (25 Mart 1821). TDV `balyabadra`: "Osmanlılar'a karşı ilk direniş gösteren şehirler
  arasında Balyabadra da vardı (4 Nisan 1821). Bu sıradaki uzun mücadeleler sonucu şehir
  bütünüyle harap oldu." — direnişin BAŞLADIĞI gün bile 25 Mart değil; elden çıkış hiç
  tarihlenmiyor. Atina, İstefe, Livadya Mora'da da değil.
- **#64 Berlin — kısmen.** Filibe'de atlas `d-osm` bitip `v+sarki-rumeli` başlıyor — yani
  atlasın kendisi Filibe'yi TÂBİ (Osmanlı'ya bağlı özerk vilayet) çiziyor; liste bunu da
  "elden çıkan" yazıyor.

**(b) Türetilmiş ama DOĞRU (atlas doğruyu çiziyor, kaynak yine de yok)**
- **#291 Bükreş** — TDV `akkirman`: "Bükreş Antlaşması (1812) ile şehir Ruslar'a
  bırakıldı"; `hotin`: "1812'deki Bükreş Antlaşması ile de Dinyester ve Boh (Besarabya)
  arasında kalan araziyle birlikte Rusya'ya bırakıldı." İçerik doğru; ama maddenin kendi
  kaynağı ölü slug ve listeyi doğrulayan şey atlas. Doğruluk tesadüfî: atlas yanlış olsaydı
  madde de yanlış olacaktı.
- **#731** (Mısır valiliği → şehirler tâbi): bölgeden şehre taşınan hüküm, zararsız.

**(c) Türetilmiş ve BAYATLAMIŞ — kronoloji haritayla ÇELİŞİYOR (②'yi "hayır" yapan)**
- **#22 Ridaniye:** "Aynı tarihte katılan öteki yerler: Akkâ, Maan, Sayda, Kerak" (22 Ocak
  1517). Atlas BUGÜN: Akkâ ve Sayda `d.f=1516-09-27` (Şam'ın günü), Maan ve Kerak
  `d.f=1517-01-01`. `ic_not_d`: "eski ifade: Aynı tarihte **haritaya** katılan diğer
  yerleşimler:". ⇒ Liste haritanın ESKİ hâlinden türetilmiş; harita sonradan düzeltilmiş,
  liste kalmış. Şimdi kronoloji haritayı doğrulamıyor, **yalanlıyor** — ve 76'nın **14**'ünde
  aynı durum var (liste ile atlas arasında hiç aynı-gün kırılması yok): #0 Osmanlı'nın
  kuruluşu · #29 Preveze · #72 Şerif Hüseyin · #73 Mondros · #250 Germiyan çeyizi · #253
  Niğbolu · #306 İzmir'in işgali · #729 · #849 Gelibolu · #911 · #981 Varad · #1038 Yaş ·
  #1128 İstanbul Antlaşması 1913.

## 3. Hüküm

1. **Sınıf VAR ve ölçüldü.** En çok yer sayan 10 kalıplı maddenin **8'i** listeyi kaynaktan
   değil atlastan alıyor (② evet + ① hayır). 76 liste maddesinin **51'inde** kayıt bunu
   KENDİSİ not ediyor ("eski ifade: … haritaya katılan"). Listelerdeki 282 adın **%89'u**
   atlasta tam o günde kırılıyor.
2. **Neden tehlikeli — mekanizma tam koordinatörün dediği gibi:** bu cümleler Değişmez 2'nin
   aradığı "kırılmanın ±30 gününde madde" şartını kendi kendine sağlıyor. Liste kırılmadan
   üretildiği için **senkron her zaman ✓ çıkar**; harita yanlışsa (#9, #786) kronoloji
   yanlışı tekrarlar, harita sonradan düzelirse (#22 ve 13 benzeri) kronoloji eskide kalır
   ve artık haritayı yalanlar. İki durumda da "kronoloji ile harita birbirini doğruluyor"
   iddiası boştur.
3. **Ölçemediğim:** Değişmez 2'nin bu 252 kırılmadan kaçını YALNIZ bu liste maddeleri
   sayesinde "kapalı" saydığı. Bu `denetle.py` evrenine dokunmayı ister (her kırılma için
   onu karşılayan maddeler listesi); görev dışı, ölçmedim. Eğer çoğu ise, Değişmez 2'nin
   "0 açık"ının bir kısmı bu döngüden geliyor demektir.

## 4. Öneri (karar koordinatörün)

- **Ölçülecek ilk şey (§3.3):** liste maddeleri Değişmez 2 evreninden çıkarılırsa kaç
  kırılma AÇIK düşer. O sayı döngünün denetime ne kadar sızdığını söyler. Bu `denetle.py`
  sahibinin işi.
- **Liste son eki bir kaynak iddiası gibi durmamalı.** Seçenekler: ① sil, ② metinden ayırıp
  ayrı bir alana taşı (`haritada_ayni_gun:` gibi, ekranda "haritada aynı gün değişen" diye
  etiketli), ③ her adı kaynakla tek tek doğrula. 76 madde × ortalama 3,7 ad = ~282 iddia;
  ③ büyük iştir ve #9 tek başına 118 ad.
- **14 bayat liste** (§2.3 c) en acil olanı: bugün kronoloji haritayla çelişiyor.
- **#786 ve #9** içerik olarak yanlış; düzeltme yetkisi veri sahibinde.
- Kalıp üreticisinin kendisi (hangi araç "Aynı tarihte haritaya katılan…" yazdı) bulunmalı ki
  yeni madde üretmesin. Ben aramadım.
