# YER DİZİNİ (U4) — ilerleme

`ORGANIZASYON.md Karar 2` gereği dosyaya yazıldı, mesaj beklenmiyor.

## 1. Ölçüm yeniden üretildi — DENETÇİ'ninkine yakın, birebir değil

`denetle.py` içinde `yer:` alanını çözen ayrı bir fonksiyon bulunamadı (proje
içinde bu iş için özel bir ayrıştırıcı yok); DENETÇİ'nin sayısını kendi
yöntemimle yeniden ürettim: virgülle böl, parantez içini ayıkla, hem tam eşleşme
hem **parça eşleşme** (`ARABISTAN-DUZELTMELER.md`'nin "Hısn-ı Mansûr (Adıyaman)"
dersiyle aynı ilke) dene.

```
                    DENETÇİ    ben (bugün, U1'in 5 yeni maddesi dahil)
benzersiz yer:         674        679
virgüllü                433        437
ayrıştırılmış toplam    910        921
ÇÖZÜLEN                 583        593  (%64)
ÇÖZÜLMEYEN              327        328
```

Fark küçük ve açıklanabilir (bu oturumdan önce U1 kimlik karışıklığıyla 5 yeni
kronoloji maddesi eklendi, her biri kendi `yer:` değerini getirdi). Yöntem
DENETÇİ'ninkiyle aynı büyüklük mertebesinde — güvenilir kabul ediyorum.

## 2. 328'in sınıflandırılması — tam liste

⚠️ **Not tam bitmiş bir sınıflandırma değil, İLK TUR.** Aşağıdaki "Bölge/ülke"
kovası hâlâ kabaca dolduruldu; §3'te neden ve ne eksik olduğu yazıyor.

| Sınıf | Adet | Örnekler |
|---|---:|---|
| **Parser artifaktı** (virgül, parantez İÇİNDE geçiyor, yanlış bölünmüş) | 8 | "Divanyolu)", "Yemen)", "Hersek (Nevesinje" |
| **Çok bölgeli / cephe tanımı** ("X ve Y", "X–Y arası") | 9 | "Kafkas ve Kırım cepheleri", "Anadolu ve Rumeli" |
| **Şehir-içi mevki** (saray, meydan, semt, kurum binası) | 38 | Atmeydanı, Topkapı Sarayı, Bâbıâli, Galata, Yıldız Hamidiye Camii |
| **Yabancı şehir** (Osmanlı'ya bağlı değil, andlaşma/toplantı yeri) | 9 | Lozan, Sèvres, Baden-Baden, Linz |
| **Coğrafî oluşum** (dağ, vadi, nehir, körfez, çöl, kıyı şeridi) | 78 | Amanoslar, Tuna boyu, Sina çölü, Ambrakya körfezi |
| **Savaş/mevki** (meydan muharebesi sahası, ufak mevki — yerleşim değil) | 26 | Mercidabık, Otlukbeli, Kosmidion, Sarıkamış |
| **Soyut/kurumsal** (yer değil) | 1 | "imparatorluk geneli" |
| **Bölge/ülke/tarihî toprak adı** (varsayılan kova) | 159 | Anadolu, Bulgaristan, Macaristan, Habeşistan… |

Tam liste, sınıf sınıf: `C:\Users\emrem\AppData\Local\Temp\claude\...\scratchpad\tum_siniflar.json`
(scratchpad session'a özel, istenirse buraya kopyalarım).

## 3. 🔴 "Bölge/ülke" kovası GÜVENİLİR DEĞİL — ikinci tur şart

159'un içini diyakritik-normalize edip yerlesimler.js'e karşı tekrar denedim:

```
9  → aslında YERLEŞİM, yalnız yazım/diyakritik farkı yüzünden kaçmış
     (San'a→Sana, Selânik→Selanik, Reşid→Reşîd (Rosetta), İbrâil→İbrail,
      Kasr-ı Şirin→Kasr-ı Şîrîn, Nahcıvan→Nahçıvan, Sennâr→Sennar,
      Şîraz→Şiraz, Lahsâ (Ahsâ)→Lahsa)
150 → gerçekten çözülmeyen
```

Bu 9'u ayırdıktan sonra bile **150'nin içinde muhtemelen daha fazla
"yerleşim ama yerlesimler.js'te hiç yok" vakası var** — Port Said, Nizip,
Diyarbekir, Üsküdar, Çıldır, Maçka, Kumanova, Sirem, Havran, Dömeke,
Missolonghi, Drivasto gibi adlar gerçek yerleşimler, sadece kayıtlı değiller
(ayrı problem: **yerleşim kapsam boşluğu**, hiyerarşi boşluğu değil). Bunu
diyakritik eşleştirmeyle ayıramadım çünkü kayıt hiç yok, yazım farkı değil.

**Elle taramadım — 150 madde tek tek gözden geçirilmeli.** §7.2'nin kuralı
("ölçümün başka türlü çıkabileceği bir dünyası olmalı") burada ihlal riski
taşıyor: "bölge/ülke" demek şu an "sınıflandıramadığım geri kalan" demekle
neredeyse eşanlamlı. Bir sonraki turda bu 150'yi üçe ayıracağım:
(a) gerçek bölge/ülke/eyalet adı, (b) eksik yerleşim kaydı, (c) hâlâ belirsiz.

## 4. Tam kapsam kaynağı — ÖLÇÜLDÜ, %99,7

Kullanıcı onayıyla `ne_10m_admin_0_countries.geojson` indirildi
(`veri-kaynak/`'a, kamu malı, Natural Earth — GitHub aynası
`nvkelso/natural-earth-vector`, 258 ülke poligonu, 13 MB).

Nokta-poligon testi (kendi ray-casting'im, bbox ön-filtreli — 781 yerleşimin
tamamı üzerinde koştu):

```
Toplam yerleşim     781
Ülkeye düşen        779   (%99,7)
DÜŞMEYEN              2
  Fornoz (Fourni)   37,58K 26,48D  → en yakın: Yunanistan, 0,154° (~17 km)
  Dahlak            15,69K 40,14D  → en yakın: Eritre, 0,004° (~0,4 km)
```

**Sonuç: kaynak gerçekten tam kapsam veriyor**, iki istisna da açıklanabilir —
ikisi de küçük ada, 10m çözünürlüklü ülke poligonunda ya atlanmış ya da kıyı
sadeleştirmesiyle içeri çekilmiş. **Dahlak 400 metre farkla** — bu bir kapsam
boşluğu değil, basit bir tolerans meselesi. Çözüm: en yakın ülkeye ~1° eşiğiyle
bağışlama (petek motorundaki "en yakın sahipli komşuya bağışla" ilkesinin
aynısı, `ARABISTAN-DUZELTMELER.md §C.1`). Bununla kapsam **%100**'e çıkar.

**COĞRAFYA'nın 1. sorusuna cevap netleşti: kaynak (1) — NE admin_0 — çalışıyor,
(2) elle atamaya gerek yok.**

## 5. Tür şeması — TASLAK, karar için

Ölçüme dayanarak önerim (kesin değil, tartışmaya açık):

1. **Bölge/ülke** (modern süzme başlığı, §3 KAİDESİ: tarihî iddia değil) — 150'nin
   arıtılmış hâli + `data/devletler.js`'in modern karşılıkları
2. **Coğrafî oluşum** (dağ/vadi/nehir/körfez/çöl) — 78 + NE `Range/Desert/Plateau`
   katmanları, **seçmeli ikincil etiket**, kapsayıcı değil (COĞRAFYA'nın ölçtüğü
   gibi %20'yi geçmiyor)
3. **Şehir-içi mevki** — 38, ayrı bir düğüm türü, çoğu zaten bir yerleşimin
   (İstanbul, Kahire…) İÇİNDE, `üst_yerlesim` alanıyla bağlanabilir
4. **Savaş mevkii** — 26, coğrafî oluşuma yakın ama işlevi farklı (nokta olay
   yeri, alan değil)
5. **Yabancı şehir** — 9, `yerlesimler.js` kapsamı dışı ama gerçek yerler;
   modern ülke sözlüğüyle otomatik çözülebilir (Lozan→İsviçre)

**Kapsam sorusu hâlâ açık:** Sen "TAM KAPSAMALI olacak" dedin (madde 1) — bu
150'lik kovanın arıtılmasını ve NE admin_0 ölçümünü bekliyor.

## 6. Kullanıcı kararı sonrası — üç netleştirme (koordinatörün 2. mesajı)

### 6.1 Soru 3 (kritik): ZAMAN BOYUTU VAR MI — ÖLÇÜLDÜ

150 kişilik "gerçek bölge/ülke" listesini `data/devletler.js`'e karşı denedim
(id/ad/harita alanları, normalize edilmiş tam+parça eşleşme):

```
devletler.js'te HİÇ eşleşmeyen (saf coğrafî/kültürel ad)         104   (%69)
tek devlete eşleşen, pencerenin (1281-1923) ≥%70'ini kaplayan     12   → fiilen zamansız
tek devlete eşleşen, DAR aralıklı (gerçekten zamana bağlı)        25
birden çok devlete eşleşen (ad, ayrı çağlarda ayrı varlığa döndü)  9
```

⚠️ **25'lik "dar aralıklı" listenin bir kısmı benim eşleştiricimin gürültüsü** —
"Anadolu" %4 ile `selcuklu`ya düştü çünkü devlet kaydının `ad:` alanı "Anadolu
Selçuklu Devleti" yazıyor, alt dize eşleşti. Böyle 4-5 sahte pozitif var
(Anadolu, Leş, Leş (Alessio), Güns…Avusturya). Elden geçirince gerçek liste:

**Gerçekten zamana bağlı olanlar (~20):** Candar toprakları, Germiyan, Hersek,
Menteşe, Teke/Teke ili, Âmid, Şirvan, Trablusgarp, Kırım, Yunanistan, İtalya,
Hicaz (Krallığı), Bosna, Yayça — Bosna, Hindistan (İngiliz)
**+ 9 çok-çağlı ad tekrarı:** Bulgaristan, Macaristan (×3 kayıt), Sırbistan,
Kıbrıs, İran — **aynı ad, 500 yıl arayla FARKLI siyasi varlığa işaret ediyor**
(örn. "Bulgaristan" 1185-1396'da İkinci Bulgar İmparatorluğu, sonra 482 yıl
**hiçbir Bulgaristan yok**, sonra 1878'den itibaren yeniden var).

**Sonuç: senin tahminin doğru çıktı — 327'nin ~300'ü fiilen sabit, sorun
~29-30 addadır.** Bu, **(c) melez şemayı** ucuzlatıyor: 328'in ezici çoğunluğu
kaba/zamansız tarihî bölge etiketi olarak güvenle kullanılabilir; yalnız bu ~30
ad için ya modern-ülke yedeğine düşülür ya da (ucuz olduğu için) doğrudan
kendi devlet kaydının `f`/`t` aralığı etikete iliştirilir — ayrı bir zaman
modeli kurmaya gerek yok, **veri zaten `devletler.js`'te duruyor.**

📌 **Öneri: (c) melez, ama saf değil — "otomatik zaman kontrollü melez".**
Her tarihî bölge adı `devletler.js`'te eşleşiyorsa onun `f`/`t`'sini taşır;
eşleşmiyorsa zamansız kabul edilir. Elle 30 istisna yönetmek değil, 150 kaydı
bir kere devletler.js'e bağlamak yeterli — bakım otomatik kalır.

### 6.2 Soru 2: Her ad NEYE bağlanacak — `bolgeler.js` ÇÖZÜM DEĞİL, ölçüldü

`data/bolgeler.js`'i açtım: **62 kayıt, hepsi bir EYALET MERKEZİ ŞEHRİN adı**
(Adana, Bağdat, Belgrad, Budin, Diyarbakır, Halep, Kahire, Konya, Musul, Sivas,
Şam, Van…) — geometrisi (`g:`) ve zamanı (`f`/`t`) var, ama **benim 328'lik
listemdeki adların hemen hiçbiriyle örtüşmüyor.** "Rumeli", "Hicaz", "Trakya",
"Makedonya", "Kürdistan" gibi geniş kültürel-coğrafî adlar `bolgeler.js`'in
62 şehrinden biri değil — **farklı bir kademe** (eyalet-merkezi vs geniş bölge).

`m:` (merkez) alanı da aynı sorunu taşıyor: her yerleşim tek bir şehre bağlı,
ama o şehrin "Rumeli"de mi "Hicaz"da mı olduğunu söylemiyor — bu ilişkinin
kendisi henüz hiçbir dosyada yok.

**Dürüst sonuç: üçüncü seçenek (yeni bağ kurmak) kaçınılmaz, ama "yeni sınır
çizmek" kadar pahalı değil.** İhtiyaç şu: 150(ish) tarihî bölge adının her biri
için, o bölgeye giren **yerleşim listesi** (nokta kümesi, poligon değil).
`bolgeler.js`'in aksine geometri gerekmiyor — yalnız üyelik. Bu, coğrafî
oluşum sınıfındakiler (Amanoslar, Tuna boyu — 78 adet) için de aynı yöntemle
çözülür.

## 7. 150'lik kovayı otomatik ayırma denemesi — TAVANA ÇARPTI, negatif sonuç da sonuç

Levenshtein mesafesiyle (`eşik: kısa adda 1, uzun adda 2`) yerlesimler.js'e karşı
denedim: 38 "yakın eşleşme" çıktı ama **hemen hepsi gürültü** — kısa Türkçe coğrafî
adların ortak fonetik kalıpları (-an, -ya, -istan) yüzünden anlamsız çiftler
eşleşiyor: *Kosova~Moskova, Kürdistan~Luristan, Kıbrıs~İbrim, İran~Oran,
Anadolu~Anabolu*. Bunlardan biri bile gerçek değil.

**Sonuç: otomatik yöntem burada tavana çarptı.** Diyakritik-normalize eşleştirme
(§3, 9 gerçek vaka buldu) güvenilirdi çünkü **aynı adın** farklı yazımıydı;
Levenshtein ise **farklı adları** benzeşme skoruna göre karıştırıyor — bu ikisi
aynı sınıf hata değil, biri güvenilir sinyal biri gürültü. **Geri kalan 112-150
kayıt yalnız elle, tek tek TDV/coğrafya bilgisiyle ayrılabilir**; bu bir
sonraki turun işi ve zaman alacak (150 madde × araştırma).

📌 Bu negatif sonuç da rapora giriyor çünkü `OGRENILENLER` kültürü "ölçülmeden
eşik koyma" diyor — burada tam tersi oldu: ölçtüm, eşik işe yaramadı, yöntemi
attım. Sessizce sonraki adıma geçmek "denemedim" ile "denedim, işe yaramadı"
farkını kaybettirirdi.

## 8. 150'lik kova — ELLE ayrıldı (tam liste)

Otomasyon tükendiği için (§7) 150 adı tek tek, genel tarih/coğrafya bilgisiyle
gözden geçirdim. ⚠️ Bu bir **sınıflandırma** işi (bu ad bir bölge mi, bir
yerleşim mi), bir **tarihî iddia** değil — `CLAUDE.md §4` kaynak kuralı tarihî
iddialara uygulanıyor, adın ne tür bir şey olduğuna karar vermeye değil. Yine
de emin olmadığım her yerde **belirsiz** dedim, tahmin yazmadım.

### 8.1 ✅ İlk bakışta hata sandım, kaynağa bakınca DEĞİLMİŞ — `Yavuz Selim`

Kişi adı gibi göründüğü için önce "veri hatası" diye işaretledim. Kaydı
buldum (`data/olaylar_ek7.js:111`, `yer:"İstanbul, Yavuz Selim"`) ve gövde
metni açıklıyor: *"Matbaa İstanbul'un **Yavuzselim** semtinde faaliyete
geçti."* — bu bir kişi adı değil, **İstanbul'un bir semti** (Sultan I. Selim'e
adanmış mahalle). Tek fark `yer:` alanında ara boşluklu ("Yavuz Selim"),
gövdede bitişik ("Yavuzselim") yazılmış — küçük bir yazım tutarsızlığı, hata
değil. Şehir-içi mevki sınıfına ekliyorum (§8.5).
📌 Bu, kendi turumda ikinci kez oldu: bir adı hemen "hata" diye etiketlemeden
önce maddenin gövdesini okumak gerekiyor (`OGRENILENLER`'e eklenebilir).

### 8.2 İki isim aslında VAR OLAN bir yerleşimin tarihî adı — spesifik kontrolle bulundu

Levenshtein gürültü verdi (§7) ama **anlam/tarih bilgisiyle** iki isim
çözüldü ve yerlesimler.js'te doğrulandı:
```
Diyarbekir  →  "Diyarbakır" (osmanlıca yazım, VAR)
Âmid        →  "Diyarbakır" (klasik/Arapça ad, VAR — Diyarbekir'le AYNI şehir)
```
Bu, §7'nin dersini güçlendiriyor: **isim benzerliği** değil **isim TARİHİ**
gerekli — hiçbir string algoritması "Âmid = Diyarbakır" bağını bulamaz.

### 8.3 Gerçek tarihî bölge/ülke adı — 76

```
Abhazya · Acara · Anadolu · Arnavutluk · Attika · Azerbaycan · Banat ·
Baranya · Berka · Berka (Cyrenaica) · Besarabya · Bilen ülkesi · Bogos ·
Bosna · Boğdan · Bukovina · Bulgaristan · Candar toprakları · Canik ·
Cebel-i Dürûz · Cebel-i Lübnan · Dağıstan · Deliorman · Dobruca · Eflak ·
Epir · Filistin · Germiyan · Güney Macaristan · Güney Yemen · Güneybatı
Arabistan · Gürcistan · Habeşistan · Havran (Hauran ovası, Suriye) · Hersek ·
Hersek (Hercegovina) · Hicaz · Hindistan · Horasan · Irak · Irak-ı Acem ·
Irâk-ı Arab · Kabiliye · Kosova · Kuzey Boğdan · kuzey Boğdan (aynı, küçük
harf) · Kuzey Irak · Kuzey Macaristan · Kürdistan · Kıbrıs · Kırım · Kırım
yarımadası · Macaristan · Makedonya · Menteşe · Mâzenderan · Rumeli · Sirem ·
Sudan · Suriye · Sırbistan · Taka · Teke · Teke ili · Teselya · Trablusgarp ·
Trakya · Ukrayna · Vehrân eyaleti (=Oran vilayeti) · Yemen · Yunanistan ·
İran · İran'ın iç bölgeleri · İsviçre (yabancı) · İtalya (yabancı) · Şarkıyye
(Mısır'da "doğu" eyaleti) · Şirvan
```

### 8.4 Muhtemelen EKSİK yerleşim kaydı (yerlesimler.js'te gerçekten yok) — 53

```
Adua (Habeşistan, 1896 savaş yeri) · Aydos (Bulgaristan) · Ağvât (Laghouat,
Cezayir) · Bucaş (Buczacz, 1672 antlaşması) · Bulhar (Somali kıyısı) ·
Böğürdelen (Tuna kalesi) · Drivasto (Arnavutluk) · El-Fâşir (Darfur başkenti)
· Fethülislâm (Tuna kalesi, Kladovo) · Gardâye (Ghardaïa, Cezayir) · Giza
(Mısır) · Güns/Kőszeg (Macaristan) · Karlofça (1699 antlaşması) · Kasrılkebir
(Fas, Ksar el-Kebir) · Kerene (Keren, Eritre) · Kerma (Sudan) · Kesela
(Kassala, Sudan) · Kevkebân (Yemen) · Kumanova (Kumanovo, 1912 savaşı) · Kût
(Irak, I. Dünya Savaşı) · Küçük Kaynarca (1774 antlaşması) · Leş (Lezhë,
Arnavutluk) · Leş (Alessio) · Lugoş (Lugoj) · Maçka (Trabzon) · Mersâ (La
Marsa, Tunus) · Missolonghi (Yunanistan, 1826 kuşatması) · Muaskar (Mascara,
Cezayir) · Muaskar (Mascara) · Nedrûme (Nedroma, Cezayir) · Nizip (1839
savaşı) · Pasarofça/Požarevac (1718 antlaşması) · Port Said (Mısır) · Serav
(Sarab, İran) · Sinkat (Sudan) · Sîdî Bel Abbès (Cezayir) · Sîdî Ferruc
(Cezayir) · Tabarka adası (Tunus) · Tagdempt (Cezayir) · Tenes (Cezayir) ·
Tobruk (Libya) · Tokar (Sudan) · Ulaş (Sivas) · Vasvár (1664 antlaşması) ·
Yanbolu/Yambol (Bulgaristan) · Yergöğü/Giurgiu (Romanya) · Yergöğü (Giurgiu) ·
Ziştovi/Svishtov (1791 antlaşması) · Ziştovi (Sviştov) · Çıldır (Kars) ·
Ümmüdurman/Omdurman (Sudan) · Şendî (Shendi, Sudan)
```

⚠️ Bu 53'ün bir kısmı **antlaşma/savaş yeri** olarak zaten önemli (Karlofça,
Küçük Kaynarca, Pasarofça, Vasvár, Ziştovi, Bucaş — hepsi adı andlaşmaya
verilmiş yerleşimler). Yerleşim kaydı eksikliği muhtemelen bu yüzden hiç fark
edilmemiş: harita üzerinde nokta yok ama madde metninde ad geçtiği için
okuyucu fark etmiyor. **Bu liste ilgili bölge oturumlarına (A1-A5) devredilebilir
bir "eksik nokta" envanteri** — YER DİZİNİ'nin değil, coğrafya/yerleşim
katmanının borcu.

### 8.5 Şehir-içi mevki — kaçırdığım 6 tane, sınıf 3'e eklendi

```
Balta Limanı · Baltalimanı (aynı yer, iki yazım) · Hünkâr İskelesi ·
Çırağan Sarayı · Üsküdar · Yavuz Selim (=Yavuzselim semti, §8.1)
```
(İlk turda İstanbul içi mevkilerin çoğu yakalanmıştı, §2'deki 38'lik listeye
+6 — güncel toplam 44.)

### 8.6 Coğrafî oluşum — kaçırdığım 2 tane

```
Dahra (Cezayir'de dağ kütlesi) · Safra geçidi (Hicaz'da dağ geçidi)
```

### 8.7 Belirsiz — 6, tahmin yazmadım

```
Kerden · Menevâşî · Terrûce · Bâbüzüveyle · Halil (muhtemelen Halîlürrahman/
Hebron ama emin değilim) · Dara (Mezopotamya'da antik kale mi, Darfur'da
El-Fâşir yakını bir yer mi belirsiz)
```

### Güncellenmiş toplam tablo (328 üzerinden)

```
Parser artifaktı                    8
Çok bölgeli / cephe tanımı          9 (+2 belirsiz bileşik: Yayça—Bosna,
                                       Hırvatistan–Macaristan sınırı → burada sayıldı)
Şehir-içi mevki                    44
Yabancı şehir/ülke                  9 (+İsviçre, İtalya §8.3'te bölge sayıldı — çakışma var, bkz not)
Coğrafî oluşum                     80
Savaş/mevki                        26
Soyut/kurumsal                      1
Yakın eşleşen yerleşim (diyakritik+tarihi ad) 11  (9 diyakritik + 2 Âmid/Diyarbekir)
Gerçek tarihî bölge/ülke adı       76
Muhtemelen eksik yerleşim kaydı    53
Belirsiz                            6 (+ küçük çakışmalar)
```

⚠️ Toplam tam 328 tutmuyor (~331) çünkü birkaç ad iki sınıfa yakın durdu
(İsviçre/İtalya hem "yabancı şehir" hem "bölge" olabilir; Yayça—Bosna gibi
bileşikler iki yerde sayıldı). Bu, **tek-sınıf zorlaması yanlış olur** demek —
tür şeması tasarlanırken bazı adların çok-etiketli olabileceği kabul edilmeli.

## 10. 🔴 KENDİ HATAM — `CLAUDE.md §5` tuzağının ikinci kurbanı bendim

A3 (ARAP-AFRİKA) buldu: §1'deki bütün ölçümlerim (679/921/328/76/53 ve
NE ülke kapsamı) **yalnız `data/yerlesimler.js`'i okumuştu — `yerlesimler_afrika.js`
hiç yüklenmemişti.** `arac/girdi.py`'nin `GIRDI_DOSYALARI`'na göre CANLI ikili
`yerlesimler.js` + `yerlesimler_afrika.js` (968 kayıt); ben yalnız birinciyi
(783) kullanmıştım. Bu tam olarak `CLAUDE.md §5`'in kayıtlı dersi: "ayrıştırıcıyı
doğrulamak yetmiyor, hangi DOSYALARI okuduğunu da doğrulamak gerekiyor."

**Düzeltilmiş ölçüm (iki canlı dosya, 968 kayıt):**
```
                    v1 (yalnız yerlesimler.js)   v2 (düzeltilmiş)
toplam yerleşim              783                      968
benzersiz yer:                679                      678
ayrıştırılmış toplam          921                      925
ÇÖZÜLEN                       593                      614
ÇÖZÜLMEYEN                    328                      311   (17 daha az)
NE ülke kapsamı              %99,7 (781/781)          %99,8 (966/968)
```
NE kapsam sonucu pratikte değişmedi (aynı iki istisna: Fornoz, Dahlak) — asıl
etki §8.4'ün "eksik yerleşim" listesindeydi: **21 ad aslında zaten kayıtlıymış**,
hepsi Afrika partisinde.

📌 A3'e gönderdiğim 24 kişilik alt-listenin **17'si yanlış alarmmış** (yakın
tarihli git commit'leriyle de doğrulandı, `Böğürdelen` gibi bazı adlar ayrıca
bu oturum içinde başka sessionlarca yeni eklenmiş olabilir). Düzeltilmiş A3
listesi §11'de.

⚠️ **Bu, A1/A2/A4/A5'e gönderdiğim listeleri BOZMAZ** — o bölgeler
`yerlesimler.js`'in kendisinde (Afrika partisinde değil), yani dosya-kapsam
hatası onları etkilemiyor. Yalnız A3'ün Sudan/Kuzey Afrika/Habeşistan alt
kümesi etkilendi.

## 11. A3'e düzeltilmiş liste — 7 kayıt (6 + gözden kaçan Port Said)

A3'ün kendi taraması "16 zaten var" dedi ve 6 kayıtlık "gerçekten eksik"
tablosu verdi (Giza, Mersâ/La Marsa, Sîdî Ferruc, Ümmüdurman, Kasrılkebir,
Tagdempt) — ama orijinal 24'ün **23. unique öğesi olan Port Said**'i ne "var"
ne "yok" listesine koymuş, atlanmış görünüyor. Benim düzeltilmiş ölçümüm
Port Said'i de hâlâ çözülmemiş gösteriyor:
```
Giza · Kasrılkebir · Mersâ (La Marsa) · Port Said · Sîdî Ferruc · Tagdempt ·
Ümmüdurman (Omdurman)
```
A5'in tarih-kayması uyarısını A3 ayrıca üçüne karşı sınadı (Sîdî Ferruc,
Ümmüdurman, Tagdempt) — üçü de gerçek fark buldu ama üçünde de madde ZATEN
vardı (±0 gün), yeni borç doğmadı. Tagdempt'te ayrı bir "yanlış madde
eşleşmesi" kusuru buldu (madde Muaskar'ı anlatıyor, Tagdempt'i değil) —
bu olaylar*.js metninin işi, benim değil, A3/koordinatöre kaldı.

## 12. A2'nin homonim taraması — 5 vaka sınandı, hiçbiri BENİM koduma bulaşmıyor

A2 tüm korpusu (920 parça) hem TAM hem ÖNEK eşleşme yönünde tarayıp beş
tehlikeli vaka buldu (Aydos, Açe(Sumatra)→Aseb, Dara→Dârâb, Baranya→Bar,
Eğriboz→Eğri). Kendi çözücümde tek tek sınadım (`onek_kontrol.js`):

```
"Aydos"          -> []           (eşleşmiyor — güvenli)
"Açe (Sumatra)"  -> []           (eşleşmiyor — güvenli)
"Dara"           -> []           (eşleşmiyor — güvenli)
"Baranya"        -> []           (eşleşmiyor — güvenli)
"Eğriboz adası"  -> [["Eğriboz","ONEK"]]   (doğru eşleşme, "Eğri" YOK)
```

**Beşi de bende zararsız çıktı — ve sebebi şans değil, yön.** Benim
`cozulur()` fonksiyonum yalnız TEK yönde substring arıyor: *bilinen ad,
sorgunun İÇİNDE, kelime sınırlı mı* (`"Adıyaman"` "Hısn-ı Mansûr (Adıyaman)"
içinde mi). A2'nin riskli vakalarının hepsi TERS yönde oluşuyordu (`"Bar"`
`"Baranya"`nın önü) — o yön benim kodumda hiç denenmiyor. Kelime sınırı da
(`\p{L}` öncesi/sonrası) "Bar" gibi kısa adların rastgele bir kelimenin
İÇİNE gömülü çıkmasını zaten engelliyor.

**Sonuç: §8'deki 76/53/11/6'lık sınıflandırma bu beş vaka yüzünden
düzeltilmeye gerek duymuyor.** Ama bu, resolver'ımın **tersi yönde daha az
kapsayıcı** olduğu anlamına da geliyor — bazı gerçek çözümleri KAÇIRMIŞ
olabilirim (yanlış "eksik" damgası), TERSİ değil (yanlış "var" damgası).
Proje kültürüyle uyumlu taraf budur: `§7.2`'nin "eksik alan yanlış alandan
iyidir" ilkesi — benim hatam varsa fazla temkinli olmak yönünde, tehlikeli
yönde değil.

📌 A2'nin iki ucuz sınaması (çok-eşleşme var mı · tam mı önek mi) genel bir
ders: **koordinat doğrulamasına gerek kalmadan** çoğu homonim riski
yakalanabiliyormuş. Denedikleri ve İŞE YARAMAYAN sezgiyi de (900 km eşiği
— 15/15 meşru çıktı, Aydos'u da yakalamazdı) tekrar denemeyeceğim, kayıtlı.

## 13. A2 kendi turunu kapattı — bir şey benim tarafımdan doğrulandı

A2 kendi ölçtüğü riskin **kendi çift-yönlü aracının** riski olduğunu, benim
tek-yönlü `cozulur()`'üme bulaşmadığını doğruladı ve turu kapattı. Tek geride
kalan iddia: **Yenişehir (Bursa) ↔ Yenişehir (Larissa), 621 km, korpusta
tek gerçek homonim** — bu eşleştirici yönünden bağımsız, çünkü ikisi de
`yerlesimler.js`'te AYRI kayıt ve `ad:` alanı birebir aynı kök ("Yenişehir").

Kontrol ettim: çıplak "Yenişehir" (Bursa/Larissa ayrımı olmadan) geçen **3
madde var**, üçü de aynı cümlede "Bursa" da geçiriyor (`"Yenişehir, Bursa"`,
`"Yenişehir Ovası, Bursa"`, `"Köprühisar (Yenişehir), Bursa çevresi"`) — yani
korpusta **fiilen belirsiz kalan tek bir madde yok**, risk teorik kaldı.
Şehir düğümleri kurulurken (§1'deki şema, kademe 4) yine de bu ikisinin AYRI
düğüm olması gerektiği not düşülsün — aynı `ad:` kökü paylaşan iki farklı
gerçek yerleşim, tek düğüme sıkışmamalı.

## 14. A3'ün ikinci bulgusu — parantez-derinliği, üçüncü düzeltme

A3 Port Said'i sordurunca **ikinci bir kusur** buldu: benim virgül-bölme
NAİF, parantez içindeki virgülü de bölüyor. `"Girit (Hanya, Kandiye)"` →
`"Girit (Hanya"` + `"Kandiye)"` — ikisi de gerçek ad değil, kalıcı çöp.

**Düzelttim (derinlik-farkında bölme, A3'ün Python taslağının JS karşılığı)
ve yeniden ölçtüm:**
```
                    v2 (yalnız dosya düzeltmesi)   v3 (+ parantez derinliği)
ayrıştırılmış        925                              915   (-10, çöp gitti)
ÇÖZÜLEN               614                              612
ÇÖZÜLMEYEN            311                              303   (-8)
```
**v2→v3 farkının tamamı §2'deki "parser artifaktı" kategorisiyle örtüşüyor**
(`Divanyolu)`, `Kosova vilâyetleri)`, `Kuleli Kışlası)`, `Lübnan)`,
`Muayede Salonu)`, `Yemen)`, `Yıldız Sarayı)` — 7'si kayboldu, doğru
bileşik ifadeye geri kaynaştı). **§2'deki 8 kişilik "parser artifaktı"
sınıfı artık YOK** — kategori kendini kapattı, ayrı bir kayıt gerekmiyor.

⚠️ A3'ün kendi yüzdesi (%43-44) benimkiyle (%64) uyuşmuyor ama **bu bir
çelişki değil** — farklı normalleştiriciler kullanıyoruz. A3'ün kendi
notu: *"anlamlı olan delta, mutlak sayı değil"* — ben de aynı ilkeyi
uyguluyorum, mutlak sayıyı her turda yeniden dondurmaya çalışmıyorum.

## 15. Port Said düzeltmesi — "eksik" değil, "ad biçimi farklı"

Port Said **VAR** (`yerlesimler_afrika.js`, `ad:"Portsaid"` — bitişik yazım,
madde `"Port Said"` boşluklu yazıyor). §11'deki 7 kayıtlık listeden
**çıkarıldı**, §8.2'nin "yakın eşleşen yerleşim" sınıfına eklendi:
```
Port Said ~ Portsaid   (boşluk farkı)
Kirmasti (M. Kemalpaşa) ~ Kirmasti (M.Kemalpaşa)   (nokta sonrası boşluk)
```
**Düzeltilmiş A3 listesi artık 6 kayıt:** Giza · Kasrılkebir · Mersâ (La
Marsa) · Sîdî Ferruc · Tagdempt · Ümmüdurman — A3'ün orijinal tablosuyla
birebir aynı. (A5'e de aynı doğrulama disiplinini önerdiğim gibi, burada da
"emin olmadan iddia etme" işe yaradı — sormasaydım Port Said hem "eksik" hem
"ad biçimi farklı" iki ayrı kutuda aynı anda görünecekti.)

## 16. A3'ün 6 kaydı — durum netleşti, HENÜZ YAZILMADI

A3 turu kapattı ama net bir uyarıyla: koordinat ölçüldü, **TDV doğrulaması
ve dönem zincirleri yazılmadı.** Sıralama (öncelik koordinatörde):
```
Sîdî Ferruc  → 1830-06-14, madde ±0 gün          — EN HAZIR, doğrudan yazılabilir
Giza·La Marsa·Kasrılkebir → komşusunu tekrarlıyor — kolay ama TDV teyidi eksik
Tagdempt     → tarih tutuyor, madde YANLIŞ yeri anlatıyor (Muaskar) — metin düzeltmesi ister
Ümmüdurman   → hukukî/fiilî katman kararı bekliyor — koordinatörde
```
`data/cografya.js` bu 6'yı **"kayıtlı" saymamalı** — yalnız ölçülmüş, henüz
yazılmamış. §11'deki liste bu notla birlikte okunmalı.

## Sıradaki adım
1. ~~Kullanıcıdan `ne_10m_admin_0_countries` indirme izni al~~ ✅ yapıldı, %99,7 kapsam ölçüldü
2. ~~Zaman boyutu var mı — ölç~~ ✅ yapıldı, §6.1: ~30/328 gerçekten zamana bağlı, öneri "otomatik zaman kontrollü melez"
3. ~~Hangi dosyaya bağlanacak — ölç~~ ✅ yapıldı, §6.2: `bolgeler.js` ve `m:` ikisi de doğrudan çözmüyor, yeni bir üyelik listesi (ad → yerleşim kümesi) gerekiyor
4. ~~150'lik kovayı otomatik ayır~~ ✅ denendi, §7: otomasyon tavana çarptı
5. ~~150'lik kovayı elle ayır~~ ✅ §8: 76 gerçek tarihî bölge/ülke adı · 53 muhtemelen eksik yerleşim · 11 yakın eşleşen yerleşim · 6 belirsiz
6. ~~Katalan Kumpanyası görevi~~ ✅ koordinatör geri aldı, VERİ KRONOLOJİ'ye yönlendirdi — kapandı
7. ~~Şemayı kur~~ ✅ `oturumlar/YERDIZINI-SEMA.md` — ARAYÜZ'ün 4 şartına göre yazıldı, koordinatörün onayını bekliyor
8. ~~§8.4'teki 53 kişilik "eksik yerleşim" listesini ilgili bölge oturumlarına devret~~ ✅ 2026-07-31 — mesajla dağıtıldı: A1 Anadolu (3: Maçka, Nizip, Ulaş) · A2 Balkan (17, çoğu antlaşma/savaş yeri: Karlofça, Pasarofça, Küçük Kaynarca, Vasvár, Ziştovi, Bucaş dahil) · A3 Arap-Afrika (24: Sudan/Cezayir ağırlıklı, Giza ve Ümmüdurman gibi büyük şehirler dahil) · A4 Doğu (3: Kût, Serav, Çıldır) · A5 Arabistan (1: Kevkebân). Kendim yazmadım, `yerlesimler.js` bana kapalı — her oturum kendi DUZELTMELER listesine ekleyip koordinatöre havale edecek.
9. Şema onaylanınca `YERDIZINI-SEMA.md §7`'deki sıraya göre kur: önce alt-bölge listesi + ülke ağacı (mekanik), sonra 76 bölgenin üyelik listesi (araştırma, muhtemelen ayrı tur)

## 9. A5'in geri bildirimi — parser doğrulandı, yeni bir risk sınıfı bulundu

A5 (ARABİSTAN) Kevkebân'ı araştırdı: TDV'de dolu madde ama **koordinat yok**
(yalnız "San'a'nın kuzeydoğusunda" — A5'in kendi bilgisiyle çelişiyor,
kuzeybatı diyor) → **doğru kararla nokta önermedi**, koordinat kaynağı
istiyor. Örnek davranış: emin olmayınca durmak.

A5 ayrıca benim ölçüm yöntemimi sorguladı: *"olaylar_ek9/10/11.js çok satırlı,
satır bazlı tarama onlarda sıfır madde buluyor olabilir."* **Kontrol ettim —
risk gerçekleşmemiş:** benim script'im `eval()` ile tüm dosyayı JS olarak
çalıştırıyor, satır taramıyor; ek9(31)/ek10(21)/ek11(8) A5'in kendi
saydığıyla birebir eşleşti, toplam 997 (994'ten fazla çünkü bu oturumda 6
yeni U1 maddesi eklendi). §1'deki 679/921/328 sayıları güvenilir kalıyor.

### 🔴 Aritmetik netleşti — "994+6=997" açıklaması EKSİKTİ, doğrusu +13

A5 "994+6≠997" diye sordu, haklıydı. `git log` ile kazdım: benim ilk U1
commitimden (`960f1d4`) hemen önce toplam **984**, şimdi **997** → gerçek fark
**+13**, benim +6'ma değil. Fark **eş zamanlı çoklu yazardan**: `olaylar_ek10.js`
tek başına 16→21'e çıkmış (BALKAN ekseni kendi işini yapıyor, son commit
`c4ef62a "Böğürdelen (Sabac) paketi"` — tam da §8.4'ün eksik-yerleşim
listesindeki madde, Balkan zaten harekete geçmiş) ve `d3eeeec`/`c461095`
benden sonraki tarihli, muhtemelen ayrı "VERİ KRONOLOJİ" oturumundan.

**Ders: `data/olaylar*.js` şu an tek yazarlı değil, benim ölçtüğüm anlık bir
sayı "sabit" değil.** Bu, `data/cografya.js`'i kurarken sayıyı DONDURMADAN
hemen önce yeniden ölçmem gerektiği anlamına geliyor — bu oturumun
ortasındaki 679/921/328 gibi sayılar **o anın fotoğrafı**, kalıcı gerçek
değil. Şema (§7-8) hâlâ geçerli (yapı sayıya bağlı değil), ama nihai üyelik
listesi kurulmadan önce §1'in ölçümü tazelenmeli.

🆕 **A5'in bulduğu genel risk — diğer 4 bölgeye ilettim:** nokta eklenince
o yerin GERÇEK tarihi maddenin `t:`sinden farklı çıkabilir (Kevkebân: madde
1567, TDV alınışı 1569 — 2 yıl fark, Değişmez 2 tetikler). 53'lük listenin
çoğunda, özellikle antlaşma yerlerinde (Karlofça, Pasarofça, Küçük Kaynarca,
Vasvár, Ziştovi — antlaşma imza günü ≠ o yerin fiilen el değiştirdiği gün)
olası. Nokta + tarih ayrı ayrı doğrulanmalı, biri diğerini garanti etmiyor.
