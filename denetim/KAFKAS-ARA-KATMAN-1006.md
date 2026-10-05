# KAFKAS-ARA-KATMAN-1006 — 11 noktanın 1917-11 → çıkış arası gerçek sahipleri

Görev: UMIT İRTİBAT → UMIT-W6-KAFKAS-1006 (KF-2 · KF-3 · KF-5) · yalnız kaynak, veriye yazılmadı.
Girdi: `denetim/KASA-ERMENISTAN-1921-1005.md` · `denetim/UMIT-TASNIF-1006.md` ④.

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (2026-10-05)

**SAYI:** 11 noktanın **0'ında** ara katmanın TAMAMINI (her geçişi) gün hassasiyetinde
kaynaklayacağım; en az bir ara geçişi gün hassasiyetinde kaynaklanan nokta **2 ± 1**.

**NİÇİN:**
- TDV olay değil yer-kişi ansiklopedisidir (`D217`); ara katman (Brest sonrası dönüş,
  Mondros boşaltması, Cenûb-ı Garbî, İngiliz, Gürcü/Ermeni devri) yer maddelerinde
  çoğunlukla AY ya da yıl düzeyinde geçer ("1918 Martında").
- Gün düzeyinde beklediklerim şehir taneciğinde: Artvin (İngiliz girişi 17 Aralık 1918,
  KASA'da zaten anıldı) ve belki Kars-Arpaçay ekseni (Nisan 1918 dönüş). Iğdır (Revan
  yönü, Haziran 1918 Batum Antlaşması sonrası) ancak akademik kaynakla.
- Köyler (Saylıca, Küçükperveli, Beri) ve Borçka/Hanak/Digor için ara katmanın adıyla
  günü çıkmaz; yalnız bölgesel cümle olur ve `D208` gereği şehre taşınmaz.
- Mondros sonrası boşaltma ve Gürcü/Ermeni devri bölgesel ve kademeli; tek gün yok.

**KF-2 öngörüsü:** üçüncü akademik kaynak **27 Şubat**'ı (ya da 23 Şubat teslim bildirimini)
destekler, 11 Mart'ı değil — 11 Mart Batum'a girişle karışmış olabilir.
**KF-3 öngörüsü:** Digor 22 Ekim 1920 için akademik teyit **bulunamaz** ya da farklı gün
(Kars'la aynı hafta, 29-30 Ekim) çıkar.

## 1. ÖLÇÜM — özet (2026-10-05)

| | Öngörü | Ölçüm | |
|---|---|---|---|
| Ara katmanı TAMAMEN gün hassas nokta | 0 | **0/11** | ✓ |
| En az bir ara geçişi gün hassas + ADIYLA | 2 ± 1 | **2/11** (Artvin · Iğdır) | ✓ |
| KF-2: 11 Mart'ı akademik kaynak desteklemez | evet | **evet**: 11 Mart için kaynak yok, o gün Batum harekâtıdır | ✓ |
| KF-2: akademik kaynak 27 Şubat'ı destekler | 27 ya da 23 | **23 ve 26 Şubat**; 27'yi birebir veren yok | ½ |
| KF-3: Digor için akademik teyit | bulunamaz | **bulunamadı** | ✓ |

**Ana bulgu:** `sovyet-rusya 1917-11-07 → çıkış` penceresinin yerine **üç-dört katman** geçer:
Rus çekilmesi → **Osmanlı (Mart–Mayıs 1918)** → Mondros tahliyesi → **yerel İslâm
hükûmeti / İngiliz** → **Gürcü ya da Ermeni DC** → TBMM. 1917-11 → 1918 bahar arasında
**hiçbir noktada Sovyet denetimi yok**. Bölgeyi Rus ordusunun bıraktığı Ermeni/Gürcü
birlikleri tutuyordu (Kafkasötesi Komiserliği dönemi).

### 1.1 `devletler.js` taraması (id ile; tahmin edilen id aranmadı, dosya tarandı)
| Ara yapı | Künye | Pencere | Not |
|---|---|---|---|
| Kafkasötesi Komiserliği / Seym / TDFR | **`transkafkasya`** | 1917-11-07 → 1918-05-28 | `harita:"transkafkasya"` var. 1917-11 → Osmanlı girişine kadar adayı budur |
| Gürcistan DC | `gurcistan-demokratik-cumhuriyeti` | 1918-05-26 → 1921-03-16 | |
| Ermenistan DC | `ermenistan-demokratik-cumhuriyeti` | 1918-05-28 → 1920-12-02 | |
| Cenûb-ı Garbî Kafkas | **`cenub-i-garbi-kafkas`** | 1918-11-05 → 1919-04-12 | `kronoloji:[]` boş |
| İngiliz işgali | `ingiltere` (`isg:` alanı, `d:` ile) | — | ayrı Kafkas künyesi YOK; `isg:` biçimi yerlesimler.js'te kullanılıyor (`isg:[{f,t,d:"yunanistan",kaynak}]`) |
| **Aras-Türk Hükûmeti** (Iğdır merkezli) | **YOK** | — | `grep -i aras` → 0 künye. Ömrü ~2 ay; künye açmak koordinatör kararı |
| Ahıska Hükûmet-i Muvakkatesi | YOK | — | 11 noktaya düşmüyor, bilgi için |
| Osmanlı | `osmanli` | | |

📌 1917-11-07 → Osmanlı girişi arasındaki doğru künye `transkafkasya`. Ama hiçbir kaynak
11 noktanın herhangi birini o dönemde ADIYLA Komiserliğe bağlamıyor. Kaynaklarda yalnız
bölgesel cümle var (§2.6). `D208` gereği bu bir ÖNERİ, kaynaklı kırılma değil.

## 2. KF-5 — ARA KATMAN, yer yer

Biçim: **yer · gün · kimden → kime · kaynak · AYNEN alıntı.** `—` = gün yok.

### 2.1 Artvin — gün hassas geçiş: 2 (Osmanlı girişi · İngiliz girişi) + 1 çelişkili
| # | Gün | Kimden → kime | Hassasiyet |
|---|---|---|---|
| a | 1917-12/1918-01 (gün yok) | Rus → (Kafkasötesi birlikleri?) | ay; kime: `bulunamadı` |
| b | **1918-03-28** | ? → osmanli | gün (3 kaynak) |
| c | Kasım–Aralık 1918 (gün yok) | osmanli → (boş/yerel) | `bulunamadı` (tahliye günü) |
| d | **1918-12-17** | → ingiltere (`isg:`) | gün (2 kaynak) |
| e | **1920-04-20** ⚠️ / Nisan 1920 / ~Mayıs 1919 | ingiltere → gurcistan-dc | ÇELİŞKİLİ |
| f | 1921-02-23/26/27 | gurcistan-dc → tbmm | KF-1/KF-2 |

- a — TDV `artvin`: "Çarlık yönetimi yıkılınca yeni Sovyet hükümeti ile 18 Aralık 1917'de
  imzalanan Erzincan Ateşkes Antlaşması uyarınca Ruslar Artvin'i boşalttılar." (Boşaltma
  günü yok; kime kaldığı yazmıyor.)
- b — Mustafa Sarı, "Millî Mücadele Döneminde Elviye-i Selâse", *Millî Mücadele'nin Yerel
  Tarihi 1918-1923* c. 9, TÜBA, doi 10.53478/TUBA.978-625-8352-71-9.ch04:
  > "25 Mart'ta sınırı geçen Türk birlikleri Artvin'i 28 Mart'ta, Ardahan'ı ise 3 Nisan'da ele geçirmişlerdi."

  Aynı gün: Aydın & Ergün, "Cenub-i Garbi Kafkas Hükümeti ve Bölgedeki Faaliyetleri",
  *Tarih ve Günce* II/5 (2019) 301-332 (dergipark 778578): "Türk birlikleri 25 Mart'ta
  Oltu'yu, 28 Mart'ta Artvin'i, 3 Nisan'da da Ardahan'ı ele geçirdi." · Sarı, "Batum'da
  Son Türk İdaresi (1921)", *Vakanüvis* 2 (Kafkasya özel sayısı) (dergipark 368105):
  "…28 Mart'ta Artvin'i…" · TDV `artvin`: "1918 Martında Osmanlı birlikleri tekrar
  Artvin'e girdiler" (ay, uyumlu). ⚠️ Mesut Çapa (TÜBA c. 6 ch01) aralık veriyor: "26 Mart-
  4 Nisan 1918 tarihlerinde Ardahan ve Artvin'i geri aldı" (çelişki değil, kaba).
- c — TDV `artvin`: "Mondros Mütarekesi'ne göre … Artvin boşaltıldı ve 17 Aralık 1918'de
  İngilizler tarafından işgal edildi." Boşaltma günü `bulunamadı`.
- d — TDV `artvin` (yukarıda) + Zemzem Yücetürk, "93 Harbi ve Sonrasında Artvin",
  *Karadeniz Araştırmaları* XVII/65 (2020) 73-95: "Bundan sonra Artvin İngilizler
  tarafından 17 Aralık 1918'de işgal edilmiştir."
- e — ⚠️ **ÇELİŞKİ, yılı bile tutmuyor:**
  - Mesut Çapa, "Millî Mücadele Döneminde Artvin", TÜBA c. 6, doi
    10.53478/TUBA.978-625-8352-68-9.ch01: "Artvin 20 Nisan 1920-23 Şubat 1921 tarihleri
    arasında Gürcülerin egemenliği altında kalmıştır." · "İngilizler, Nisan 1920 tarihinde
    Artvin, Ardanuç ve Şavşat'ı boşaltıp Batum'a çekildiler." Çapa bir başka metni
    düzeltiyor: "Metinde, İngilizlerin Artvin'i Gürcülere bıraktığı tarih Nisan 1919 olarak
    verilirken, burada Nisan 1920 şeklinde düzeltilmiştir."
  - TDV `artvin`: "İngiliz işgali 1920 yılının Nisan ayına kadar sürdü." (Çapa ile uyumlu, ay)
  - Serpil Sürmeli, "Batum Milletvekili Ahmed Fevzi (Erdem) ve Şavşat Olayı" (dergipark
    article-file 26167; dergi künyesi PDF'ten okunamadı): "17 Aralık 1918'de İngiliz işgali
    altına giren Artvin, bu tarihten beş ay sonra İngiliz kuvvetlerince Şavşat ve Hopa ile
    birlikte Gürcü işgaline bırakılmıştı." (≈ Mayıs 1919)
  - ⚠️ Çapa'nın "20 Nisan 1920"si kendi metninde Ardahan'ın Gürcü işgal günüdür ("20 Nisan
    1920'de Ardahan bir Gürcü tümeni tarafından işgal edildi"). Cevizliler-Özyürek aynı
    günü **1919** diye veriyor (§2.4). ⇒ Artvin'in Gürcü başlangıç GÜNÜ büyük ihtimalle
    Ardahan'dan taşınmış. Güvenli düzey: **ay, Nisan 1920** (TDV + Çapa). Sürmeli'nin 1919'u
    azınlıkta kalıyor; bildirilir.

### 2.2 Iğdır — gün hassas geçiş: 1 (Osmanlı girişi) + 1 çelişkili (Aras-Türk)
| # | Gün | Kimden → kime | Hassasiyet |
|---|---|---|---|
| a | 1917-11 → 1918-05 | Rus → Ermeni birlikleri (Kafkasötesi) | bölgesel |
| b | **1918-05-20** | Ermeni → osmanli | gün |
| c | 1918-10-21 → 1918-12-04 | osmanli tahliyesi | bölgesel; Iğdır'ın günü yok |
| d | 1918-10-29 / 11-03 / 11-18 | → Aras-Türk Hükûmeti (künye YOK) | ÇELİŞKİLİ |
| e | "Aralık 1918 sonları", **26 Aralık 1918'den önce** | → ermenistan-dc | ay + üst sınır |
| f | 1920-11-12/13/14 | ermenistan-dc → tbmm | KF-1 (aşağıda not) |

- a — Mustafa Sarı, "Millî Mücadele Döneminde Iğdır", TÜBA c. 9, doi
  10.53478/TUBA.978-625-8352-71-9.ch11: "1917 Rus İhtilalleri sonucunda imzalanan
  mütarekelerle Rusya bölgeden çekilirken onların yerini Gürcü ve Ermeniler almaya
  başlamıştı." (bölgesel)
- b — aynı bölüm: "Ermenileri mağlup eden Türkler, 20 Mayıs 1918'de Iğdır'ı ele
  geçirmişlerdi." Bölüm bunu 4 Haziran 1918 Batum Antlaşmasıyla tescil edilmiş sayıyor:
  "Bu suretle Iğdır'daki Türk hâkimiyeti barış antlaşması ile tescil edilmişti."
- c — aynı bölüm: "Türk ordusunun 21 Ekim 1918'den itibaren tahliyeye başladığı Ahıska,
  Ahılkelek, Gümrü, Iğdır ve Nahçıvan gibi yerlerdeki…". Sarı (Elviye-i Selâse bölümü):
  Brest-Litovsk hududu dışının "4 Aralık 1918'de tahliye edilmesini öngörmüştü". Iğdır
  1877 sınırının ÖTESİNDE. Kendi tahliye günü `bulunamadı`.
- d — ⚠️ **Aras-Türk Hükûmeti'nin kuruluşu, aynı bölümün içinde bile çelişiyor:**
  özet "29 Ekim 1918'de Aras-Türk Hükûmeti kurulmuş", sonuç "Iğdır'da 18 Kasım 1918
  tarihinde bir araya gelerek … Aras-Türk Hükûmeti'ni kurmuşlardı". Aydın-Ergün 2019:
  "3 Kasım 1918'de Emir Bey Ekberzade başkanlığında merkezi Iğdır olmak üzere 'Aras Türk
  Hükümeti' kuruldu". M. A. Bolat, "Yeni Türkiye İçin Kars Antlaşması'nın Önemi", *ADAM
  AKADEMİ* 9/2 (2019) 267-306: "Aras Türk Hükümeti ise 3 Kasım 1918'de … Iğdır merkezli
  olarak kurulmuştur." ⇒ 2 kaynak 3 Kasım, 1 kaynak kendi içinde 29 Ekim/18 Kasım.
  **Künye yok.** Bu katman ya `osmanli` içinde kalır (tâbi/yerel yönetim) ya da yeni künye
  ister. Hüküm koordinatörün.
- e — aynı bölüm: "Aras-Türk Hükûmeti'nin başkenti Iğdır, Aralık 1918 ortalarından
  itibaren zor günler yaşamaktaydı. 1.000 kişilik bir Emeni birliği Sürmeli bölgesine
  saldırıda bulunmuştu. Bu saldırıyla Ermeniler Iğdır ve Kulp'u (Tuzluca) ele
  geçirmişlerdi." + "IX. Ordu Komutanı Yakup Şevki Paşa, 26 Aralık'ta Harbiye Nezareti'ne
  gönderdiği telgrafta…: 'Iğdır'ın Osmanlı askerleri tarafından tahliyesi üzerine geri
  dönen Ermeniler mezalim yapmaya başlamışlardır.'" ⇒ Gün yok. 26 Aralık 1918 bir ÜST
  SINIR (terminus ante quem); kırılma günü olarak yazılamaz (`§4` uydurma yasağı).
  ⚠️ Sarı "Ocak 1919'da kurulan Cenûb-i Garbî Kafkas Hükûmeti sınırları içerisinde Iğdır da
  bulunmaktaydı" diyor ama aynı yerde "Iğdır'da ise Ermeni işgali devam ederken". Bu
  İDDİA sınırıdır, fiilî denetim Ermeni'dedir. ⇒ Iğdır `cenub-i-garbi-kafkas`a BOYANMAZ.
- 📌 1919-09-21 kısa yerel baskın: "silahlarıyla beraber 21 Eylül 1919'da Iğdır'a
  saldırmışlar ve şehre girmeyi başarmışlardı". Kalıcılığı yazmıyor; kırılma değil.

### 2.3 Posof · Hanak (Ardahan yöresi) — gün hassas geçiş: 0
- Osmanlı girişi: yalnız **Ardahan şehri** 1918-04-03 (Sarı TÜBA; Aydın-Ergün; Yüksel
  SUTAD 41). Posof/Hanak adıyla: `bulunamadı`. Ardahan'dan taşımak `D208`.
- Tahliye: Sarı (TÜBA c. 9 ch04): "Kars'ta kalacak bu birliklerin dışındaki bütün birlikler
  25 Ocak'ta hudut gerisine alınmışlardı. Bu suretle 1919 Ocak ayı sonlarına doğru Kars ve
  Ardahan livalarının da tahliyesi sona ermişti." (liva düzeyi)
- Cenûb-ı Garbî: kuruluş beyannamesi ilçeleri ADIYLA sayıyor ("… Ardanuç, Şavşat, Posof,
  … Digor, Sürmeli, Iğdır …", Sarı TÜBA ch04). Bu İDDİA alanıdır. Posof için 1919 başı
  fiilî direniş var: "2 Şubat'ta, Gürcüleri öncelikle Posof çayından atan Müslümanlar…".
  ⇒ Posof'un 1918-11 → 1919-04 `cenub-i-garbi-kafkas` olduğuna kaynak YAKIN, gün yok.
- Gürcü işgali: Cevizliler & Özyürek, "Türk, Gürcü ve Ermeni Tarihçilere Göre Ardahan'da
  Hâkimiyet Mücadelesi", *Motif Akademi Halkbilimi Dergisi* 12/28 (2019) 1223-1244:
  "Gürcüler önce Posof'u, ardından İngilizlerin onaylamamasına rağmen 20 Nisan 1919'da
  Ardahan'ı işgal ederek Merdenek'e kadar olan bölgeyi kontrol altına almışlardır."
  ⇒ Posof: **20 Nisan 1919'dan ÖNCE**, gün yok. Sarı (ch04): "Kvinatatze komutasındaki Gürcü
  birlikleri 7 Nisan'da Ahıska'yı, daha sonra da Ardahan ve civarını işgal etmişlerdi."
  Sürmeli (26167): "13 Nisan 1919'da Güneybatı Kafkas Hükümeti'nin İngilizler tarafından
  dağıtılmasından sonra, İngiliz işgal kuvvetlerinin yardımıyla Ardahan'ın Kura ırmağı
  solunda kalan kesimini Gürcüler, sağ tarafını ise Ermeniler işgal etmişti."
  ⚠️ **Hanak için bu cümle tehlikeli:** Kura'nın hangi yakasında kaldığına göre Gürcü ya da
  ERMENİ olur. Kura yakası ölçülmedi ⇒ Hanak'ın 1919-1921 sahibi `ölçülemedi`. Bugünkü
  "Gürcistan DC → TBMM 1921-02-23" (KF-1) Hanak için bu yüzden ayrıca doğrulanmalı.
- Çıkış: KF-1'de (Gürcü → TBMM 1921-02-23).

### 2.4 Şavşat · Borçka · Saylıca — gün hassas geçiş: 0
- Şavşat: İngiliz → Gürcü, Çapa: "İngilizler, Nisan 1920 tarihinde Artvin, Ardanuç ve
  Şavşat'ı boşaltıp Batum'a çekildiler." (ay, ADIYLA) ⚠️ Sürmeli ≈ Mayıs 1919 (§2.1e).
  Osmanlı girişi/tahliyesi/İngiliz girişi adıyla: `bulunamadı`. Şavşat'ın kendisi o sırada
  köydü: Çapa, "Şavşat, daha önceleri 44 hanelik bir köy iken … 1921 yılında kaza merkezi
  haline getirilmiştir" (kaza merkezi Satlel/Söğütlü'ydü, Sürmeli dn. 12).
- Borçka: Batum sancağının kazası (Takvim-i Vekayi 15 Eylül 1918, Sürmeli). Batum'un
  günleri: İngiliz 1918-12-24 (TDV `batum` + Sarı ch04) → Gürcü 1920-07-07 (Sarı ch04:
  "İngilizler'in Batum'u resmî olarak Gürcülere devir-teslimi 7 Temmuz 1920'de
  gerçekleştirilmiştir"; TDV `acara` 1/17 Temmuz; Çapa 9 Temmuz). **Borçka'ya taşınamaz**
  (`D208`). Borçka adıyla: `bulunamadı`. Çapa'nın arşiv alıntısı (2 Mart 1921) Borçka'yı
  "Artvin Kazası hududu haricinde kalan Borçka" diye anıyor; denetim günü vermiyor.
- Saylıca (köy): `bulunamadı`.

### 2.5 Digor · Arpaçay · Küçükperveli (Kars yöresi) — gün hassas geçiş: 0
- Osmanlı girişi: yalnız **Kars şehri**. Sarı ch04: "Türk ordusu 14 Nisan 1918'de Batum'a,
  25 Nisan'da da Kars'a girmiştir." TDV `kars`: "Türk ordusu 23 Nisan 1918'de ileri
  harekâta geçerek Kars'ı Ermeniler'den aldı." (23 = harekâtın başladığı gün; çelişki
  değil, okuma farkı, `§4` ⑧.) ⚠️ Yüksel (SUTAD 41, 2017) "14 Nisan'da Arpaçay'a vardı"
  diyor. Gün Batum'unkiyle aynı, Kars'tan 11 gün önce ve doğuda. Yazım hatası şüphesi var,
  **kullanılmadı**.
- Cenûb-ı Garbî: Digor beyannamede ADIYLA geçiyor (iddia alanı). Kars'ta fiilî idare:
  İngiliz askerî vali 1919-01-13 → 12/13 Nisan 1919 hükûmetin dağıtılması.
  Sarı ch04: "General William Henry Beach komutasında 200 kişilik bir İngiliz müfrezesi ve
  Kars'a askerî vali olarak atadıkları Albay Clive Erington Temperly 13 Ocak'ta Kars'a
  gelmişti." ⚠️ Yani Kars'ta 1919-01-13 → 04-12 arası Şura ile İngiliz askerî valisi
  YAN YANA. `cenub-i-garbi-kafkas` künyesinin anlatısı bunu söylemiyor.
- Ermeni idaresi (Kars şehri): Sarı ch04: "Ermenilerin Kars'ta vali olarak düşündükleri
  Stephan Karganof ve diğer Ermeni memurlar 19 Nisan'da Kars'a gelmişlerdi." · "Nihayet
  Preston 30 Nisan 1919'da geçici şura hükûmetini lağvetmiş ve şehrin idaresini Kars
  Valisi yapılan Karganof'a devretmiştir." Yüksel: "İngilizlerin Kars'ı 13 Nisan 1919'da
  resmen işgal etmesinden üç gün sonra, Ermeni Generali Osebyan askerleriyle birlikte
  şehre girmiş". ⇒ Kars şehri: İngiliz 12/13 Nisan → Ermeni idaresi 30 Nisan 1919
  (devir) / 16-19 Nisan (fiilî giriş). **Digor/Arpaçay/Küçükperveli'ye taşınamaz.**
  Ercilsin (*Anasay* 8/28, 2024) Digor'u ADIYLA anıyor ama gün vermiyor: "İngilizlerin
  Nisan 1919'da Kars'ı işgal ederek Cenub-i Garbi Kafkas Hükümeti'ni dağıtmasının
  ardından Digor Nahiyesi'ne bağlı 38 yerleşim biriminde Ermeni çetelerin yaptıkları
  yağma ve talana dair arşiv kayıtları". Arpaçay (Zaruşad) için: "Şubat 1920'de saldırıya
  uğrayan Zaruşad'ın (Arpaçay) tahrip edildiği, bölgeyi idare eden İslam Şûra Heyeti'nin
  çaresiz kalarak teslim olduğu aktarılıyordu." ⇒ **Arpaçay/Zaruşad'da Şubat 1920'ye
  kadar yerel İslâm Şûrası idaresi sürmüş görünüyor.** Ermeni denetimi oraya Kars'tan
  ~10 ay geç gelmiş olabilir. Gün yok, ay var (Albayrak gazetesi aracılığıyla).

### 2.6 Beri (köy, Aras kıyısı) — `bulunamadı`
Adıyla kaynak yok. Iğdır'la aynı ova (Sürmeli Çukuru); komşu günü şartlı serbest kuralı
(`§4`) geçerli. Hüküm koordinatörün.

## 3. KF-2 — Artvin'in çıkış günü: altı gün, iki olay
| Gün | Ne | Kaynak | Tür |
|---|---|---|---|
| **1921-02-23** | Gürcüler sabah tahliye etti / Türk birlikleri girdi | Sarı *Vakanüvis*: "Tahliyeden sonra Türk birlikleri, 23 Şubat'ta Ardahan ve Artvin'e girdiler." · Sarı TÜBA ch04: "Gürcüler 23 Şubat sabahı erken saatlerinde Ardahan ve Artvin'i tahliye etmiş" · Çapa: "Artvin her ne kadar 23 Şubat'ta boşaltılmışsa da…" | akademik ×2 |
| **1921-02-26** | Türk müfrezesi Artvin'e vardı | Çapa: "Binbaşı Şükrü (Oğuz) Bey komutasındaki müfreze 26 Şubat 1921 günü Artvin'e gelmiştir." | akademik, arşivli |
| 1921-02-27 | "kesin olarak Türkiye topraklarına katılmış oldu" | TDV `artvin` | TDV |
| 1921-03-06 | "Gürcülerden teslim alınarak" | Sürmeli (26167) özet: "23 Şubat 1921'de Ardahan, 6 Mart 1921'de de Artvin, Gürcülerden teslim alınarak…" | akademik |
| 1921-03-07 | resmî kutlama günü | Çapa: "Artvin'in kurtuluş tarihi, tartışmalı da olsa Cumhuriyet'in ilk yıllarından itibaren 7 Mart 1921 tarihi olarak kabul edilmiş" | gelenek |
| 1921-03-11 | Artvin, Ardahan, Batum bırakıldı | TDV `acara` | TDV, tek başına |

- **11 Mart'ı akademik kaynak DESTEKLEMİYOR.** O gün Batum harekâtının günü: Sarı
  *Vakanüvis* "Batum harekâtı 10 Mart 1921 günü sabah saatlerinde … başlatıldı". TDV
  `acara` üç yeri tek cümlede topluyor, Artvin'in günü Batum'unkine karışmış. (öngörü ✓)
- ⚠️ **Çapa'nın kendi arşiv belgesi 26 Şubat'la çelişiyor:** "2 Mart 1921 tarihinde
  … gönderilen bir yazı da bunu teyit etmektedir: 'Bu kere Gürcüler tarafından tahliye ve
  tarafımızdan işgal olunacak olan Artvin'in…'". 2 Mart'ta hâlâ GELECEK zaman kullanılıyor.
  Sürmeli'nin 6 Mart'ı ve 7 Mart kutlaması bu belgeyle uyumlu.
- **ÖNERİ:** iki ayrı olay var. ① Gürcü egemenliğinin bittiği gün **23 Şubat** (2 akademik
  + Posof Kaym.) ② Türk idaresinin fiilen kurulduğu gün **26 Şubat – 6 Mart** arası
  (kaynaklar ayrışıyor). 23-26 Şubat arası Artvin'de kimse yok. `§4` "TDV birincil"
  kuralıyla **27 Şubat korunabilir**, çünkü 26 Şubat'a bir gün uzak ve ② olayının
  aralığında. Ama kayda 23 Şubat (tahliye) · 26 Şubat (Çapa) · 6 Mart (Sürmeli) · 11 Mart
  (TDV acara, Batum'la karışmış) yazılmalı. Hüküm koordinatörün; ben 27'yi korumayı
  öneriyorum.

## 4. KF-3 — Digor 1920-10-22: akademik teyit `bulunamadı`
- 18 akademik metin ve 3 TÜBA bölümü tarandı. Digor adıyla 1920 sonbaharında
  **tarih veren cümle yok.**
- Çerçeve (ADIYLA değil, komşu): Kağızman **5 Ekim 1920** (Sarı TÜBA ch11: "29 Eylül'de
  Sarıkamış, 5 Ekim'de Kağızman ve Kulp (Tuzluca) ele geçirilmişti") · ⚠️ Tunç & Yıldırım,
  *Avrasya Uluslararası Araştırmalar Dergisi* 12/40 (2024): "1 Ekim 1920'de Kağızman,
  Türkler tarafından geri alınmıştır" · Kars **30 Ekim 1920**. Digor ikisinin arasında ve
  1921'de Kağızman kazasının "Nahçıvan (Digor)" nahiyesi (Sarı ch04 nüfus cetveli). 22 Ekim
  coğrafî olarak mümkün; KANITLANMADI.
- ⚠️ Aynı kurum (Kars Valiliği) `/arpacay` sayfasında ilçeler için yalnız genel bir cümle
  kuruyor: "Kazım Karabekir Paşa kumandasındaki ordu 30 Ekim 1920'de bir daha ayrılmamak
  üzere Kars'ı ve İlçelerini Türkiye'ye kazandırmıştır". Digor sayfasının 22 Ekim'i kurum
  içinde de yalnız.
- Kontrol: Sarı ch04'teki bir dipnotta "İleri, 22 Ekim 1920" geçiyor. Gazete künyesi,
  Digor'la ilgisi yok. Tesadüf; kullanılmadı.
- Öneri: Digor 1920-10-22 **düşük güven** damgasıyla kalır ya da kaynaklı aralığa
  (1920-10-05 → 1920-10-30) çekilir. Gün uydurulmaz. Hüküm koordinatörün.

## 5. KF-1'e YAN BULGU — dokunmadım, yalnız bildiriyorum
1. 🔴 **Arpaçay noktası yanlış yerin kaynağını taşıyor olabilir.** Nokta `ad:"Arpaçay
   (Akyaka)"`, `lat:40.845, lon:43.325` (ek26 s.48). Bu koordinat bugünkü **Arpaçay ilçe
   merkezi**; Akyaka ~40.74/43.62'de, ~27 km doğuda (genel bilgi, ölçü aleti değil).
   Ercilsin 2024 iki ayrı yer olarak yazıyor: "Zaruşad'ın (Arpaçay)" · "Şöregel'e
   (Akyaka)". KASA'nın 1920-11-03 günü Kars Valiliği **`/akyaka`** sayfasından alındı ⇒
   Akyaka'nın günü Arpaçay noktasına yazılmış olabilir (`D208`). Kars Valiliği `/arpacay`
   sayfası ayrı gün vermiyor (yalnız 30 Ekim genel cümlesi). Küçükperveli
   (40.673/43.613) ise Akyaka yakınında; KASA'nın "Küçükperveli ↔ Arpaçay" komşu önerisi
   bu yüzden ters eşleşmiş olabilir. Doğru komşu Akyaka günü olur.
2. **Iğdır çıkış günü** (KF-1: 1920-11-12, Üçüncü 2014) ikinci bir akademik kaynakla
   destekleniyor: Cevizliler-Özyürek 2019, "Ermeniler ise 12 Kasım'da Iğdır'ı da boşaltarak
   Aras'ın kuzeyine çekilmişlerdir." Karşı kaynaklar: Bolat 2019 "13 Kasım 1920'de Iğdır …
   ele geçirilmiş" · Sarı TÜBA ch11 "14 Kasım'da yeniden başlamış ve Türk birlikleri Iğdır
   ve Şahtahtı civarında Ermeni birliklerini yenmişlerdi". Ermeni tahliyesi 12, Türk girişi
   13. 12 Kasım savunulabilir; çelişki kayda yazılmalı.
3. **Hanak:** §2.3. Kura'nın sağ yakasındaysa 1919-1921 sahibi Ermenistan DC olur, KF-1'in
   "Gürcistan → TBMM 1921-02-23" kırılması o zaman YANLIŞ kimlikten çıkar. Kura yakası
   ölçülmedi.

## 6. ÖNERİ — asgari tutarlı ara katman (veriye yazılmadı)
Kaynaklı kırılmalar (yalnız bunlar `s:`e girebilir):
```
Artvin   1918-03-28  → osmanli               Sarı TÜBA ch04 · Aydın-Ergün 2019 · Sarı Vakanüvis
Artvin   1918-12-17  isg: ingiltere          TDV artvin · Yücetürk 2020
Artvin   1920-04 (ay) → gurcistan-dc         TDV artvin · Çapa TÜBA ch01   ⚠️ Sürmeli: ~1919-05
Iğdır    1918-05-20  → osmanli               Sarı TÜBA ch11
Iğdır    1918-12 (ay, <12-26) → ermenistan-dc Sarı TÜBA ch11 (Yakup Şevki telgrafı 26 Aralık)
Posof    1919-04 (<04-20) → gurcistan-dc     Cevizliler-Özyürek 2019 ("önce Posof'u")
Şavşat   1920-04 (ay) → gurcistan-dc         Çapa TÜBA ch01 (adıyla)
```
Kaynaksız ama künyesi var, `ölçülemedi` damgasıyla önerilir (hüküm koordinatörde):
- 1917-11-07 → Osmanlı girişi: `sovyet-rusya` yerine **`transkafkasya`** (künye penceresi
  1917-11-07 → 1918-05-28 tam oturuyor; kaynak bölgesel).
- Kars yöresi + Posof/Hanak 1918-11-05 → 1919-04-12: **`cenub-i-garbi-kafkas`**
  (beyannamede ADIYLA sayılan ilçeler: Posof, Şavşat, Ardanuç, Borçka, Artvin, Digor,
  Sürmeli, Iğdır). Iğdır HARİÇ, orada fiilî denetim Ermeni'de.
- 1919-04 → 1920-10: Kars yöresi `ermenistan-demokratik-cumhuriyeti`.
⚠️ **Osmanlı tahliye günlerinin hiçbiri yer adıyla kaynaklanmadı.** Osmanlı → (yerel/
İngiliz) kırılması yalnız sancak/bölge düzeyinde (Kars-Ardahan livaları 25 Ocak 1919 ·
Brest dışı 4 Aralık 1918). Değişmez 2'nin ±30 gün kuralı için kronoloji maddesi
bölgeseldir, yerleşim kırılması tek tek kaynaklanamaz.

## 7. Okunan, işe yaramayan / ölü
TDV 302 (ölü slug): `cenub-i-garbi-kafkas-hukumeti`, `cenubi-garbi-kafkas-hukumeti`,
`kars-islam-surasi`, `brest-litovsk-antlasmasi`, `batum-antlasmasi`, `kafkas-islam-ordusu`,
`kafkas-ordusu`, `igdir`, `surmeli`, `oltu`, `ardanuc`, `yusufeli`. Okunan TDV (200):
`artvin`, `kars`, `ardahan`, `acara`, `elviye-i-selase`, `batum`, `mondros-mutarekesi`,
`kazim-karabekir`, `nahcivan`. Arama özetleri hiçbir yerde kaynak olarak kullanılmadı.
Her alıntı indirilen PDF/HTML'nin metninden alındı.
Alakasız çıkanlar: dergipark 74015 (Çukurova), 33681 (Kırım Harbi), 4858821 (Mondros-
Rethondes karşılaştırması), 3708154 (Iğdır 1923-35).
