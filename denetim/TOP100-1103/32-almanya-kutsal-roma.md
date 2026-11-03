# 32 · Kutsal Roma İmparatorluğu (Almanya) — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 3 Kasım 2026 (ölçer: top100_olc.py `almanya dogu-francia alman-konfederasyonu`)

## Özet
- Eşleşen künye: 3 çekirdek (`almanya` 0962-02-02→1945-06-05, `dogu-francia` 0843→0962, `alman-konfederasyonu` 1815→1866) + ilgili çatı/komşu `habsburg`, `prusya`, `arles-kralligi`, `karolenj-italya`.
- `almanya` künyesi 183 kırılma, **57 AÇIK**; 177 yerleşim kaydı. `dogu-francia` 3 kırılma / 2 açık. `alman-konfederasyonu` **0 yerleşim — haritada görünmüyor**.
- En ağır 3 bulgu: (1) tek künye 983 yıl ve 4 farklı polity'yi (HRE, Konfederasyon çatısı, İkinci/Üçüncü Reich) taşıyor; evre bölünmesi künye düzeyinde YOK (Emre kararı 14 Ekim 2026 bilinçli, aşağıda gerekçe). (2) 17 "AÇIK" kırılmanın karşılayan maddesi evrende VAR ama `yer_id` tek şehre bağlı olduğundan ölçer alâkalı saymıyor (örn. 1871-01-18 maddesi yer_id:"Köln"). (3) Evrende eksik 5 kurucu madde: Altın Ferman 1356, Augsburg Dini Barışı 1555, Ren Konfederasyonu 1806, Bundesakte 1815, Weimar Anayasası 1919.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| almanya | Almanya (Kutsal Roma 962-1806) | 0962-02-02 | 1945-06-05 | Kutsal Roma + Alman Konfederasyonu çatısı + Alman İmparatorluğu + Weimar + Nazi Reich TEK künyede; adı 1806'ya işaret ediyor, t 1945 |
| dogu-francia | Doğu Francia | 0843-01-01 | 0962-02-02 | Kutsal Roma öncesi; f Verdun gününe çekilmeli (aşağıda) |
| alman-konfederasyonu | Alman Konfederasyonu | 1815-06-08 | 1866-08-24 | 0 yerleşim; `almanya` ile çakışan çatı |
| karolenj-italya | İtalya Krallığı (Karolenj-Berengar) | 0774 | 0962-02-02 | HRE'nin İtalya kolunun öncülü (dosya 33) |
| arles-kralligi | Burgonya (Arles) Krallığı | 0933 | 1032-09-06 | HRE'ye bağlanan üçüncü krallık |
| habsburg / prusya | | 1282/1701 | 1918/1871 | HRE içindeki alt devletler: `almanya` ile aynı anda yerleşim sahibi olabiliyor |
Eksik evre değerlendirmesi: HRE'nin kendi sınırları 962-1806 `almanya` s: dönemleriyle temsil ediliyor (1806'da kayıp kırılması yok, çünkü Alman toprakları Prusya/Habsburg/Bavyera vb. künyelerine zaten ayrışmış; `almanya` 1806-1871 arası "çatı" sayılabilir). Evre bölme önerisi: **künyeyi bölmeyin** (Emre kararı KARARLAR-1014 m.7; aynı polity iddiası 1871-1945 için tartışmalı değil, ama 962-1806 ile 1871-1945 arasında 65 yıl süren kopukluk = Alman Konfederasyonu dönemi `almanya` künyesine "çatı" olarak gömülü). Önerim: ya `almanya.t = 1806-08-06` + `almanya-imparatorluk` (1871-01-18 → 1945-06-05) ayrı künye, ya da bugünkü yapı korunup `alman-konfederasyonu` yalnız bilgi künyesi olarak bırakılsın. Karar Emre'nin; ölçüm: yıl:yerleşim 1795:24 → 1844:16 → 1893:59 (1844'te 16 yerleşim hâlâ `almanya`; geri kalan Alman toprağı Prusya/Habsburg/Bavyera künyelerinde). Not: bölünme-sayıları (~21/~25/~11) kaba sınıflamadır, ölçer çıktısından elle ayrıştırıldı.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm |
|---|---|---|---|---|
| almanya.f | 0962-02-02 | Treccani Dizionario di Storia 'Sacro Romano Impero': «A partire da Ottone I di Sassonia (962)» (okundu) | NDB 'Otto I.' (deutsche-biographie.de/sfz74082.html): «Am 2.2.962 salbte und krönte Papst Johannes XII. O. zum Kaiser.» (okundu) | TEYİTLİ: 2 Şubat 962. Alternatif başlangıçlar (800 Charlemagne «data simbolica», Treccani; 936 krallık seçimi) tanım meselesi; künye 962 seçmiş, dogu-francia 843-962 öncülü olarak ayrı — tutarlı. |
| almanya (HRE sonu) | kronoloji 1806-08-06 | Treccani aynı madde: «Francesco II rinunciò (6 agosto 1806) alla corona» (okundu) | ikinci bağımsız akademik kaynak: ÇEKİLEMEDİ (NDB Franz II. makalesinin URL'si tutturulamadı) | Tek kaynakla teyitli; olaylar_avmac_b_1029.js:70'teki madde kendi kaynağını taşıyor. ERİŞİLEMEYEN listesine yazıldı. Takvim: 1582 sonrası, Gregoryen — sorun yok. |
| almanya.t | 1945-06-05 | künyenin `ic_not_t`: AVALON Berlin Deklarasyonu 5 Haziran 1945 (birincil belge neşri) | AVALON wwii/gs11 (8 Mayıs teslim) | Ölçüt: yetkinin Müttefiklere geçişi; ardıl `almanya-muttefik-isgali` f=1945-06-05 ile bitişik. Uyumlu, bende ikinci akademik kaynak yok (AVALON birincil belge neşri sayılır). |
| dogu-francia.f | 0843-01-01 | Enc. Ital. 'Verdun': «agosto 843» (KASA'nın künyesi, ben Treccani 'Franchi'/'Verdun'u tekrar çekemedim) | atlas kronolojisi 0843-08-10 (olaylar_ortacag_bati_avrupa.js:21, kaynağı Britannica) | **ÇELİŞKİ: f=0843-01-01 ama Verdun 10 Ağustos 843.** Ölçer 843-01-01 kırılmasını AÇIK buluyor (en yakın madde 220 gün ötede). Öneri f=0843-08-10 (gün tek kaynaklı → `ic_not`: "Treccani yalnız ay verir; gün Britannica, ikinci akademik kaynak aranıyor"; kaynak yasası gün yoksa 01-01 der, ay biliniyorsa yıl-01-01 değil kesin ay kullanılır). Aynı değişiklik `bati-francia.f`, `orta-francia.f`, `frank.t` için (dosya 33). |
| dogu-francia.t | 0962-02-02 | NDB Otto I (yukarıda) | Treccani Dizionario Biografico Giovanni XII «Domenica 2 febbr. 962» (künye ic_not_t'de) | TEYİTLİ. |
| alman-konfederasyonu.f | 1815-06-08 | DHM LeMO Bundesakte (künye kaynağı; formel imza 10 Haziran) | — | Künye kendi `ic_not_f`'inde beyan; yalnız bir kaynak okundu. |
| alman-konfederasyonu.t | 1866-08-24 | HLB Bundesversammlung (künye) | — | Tek kaynak; ikinci kaynak aranmalı. |
Takvim notu: 1582 öncesi günler (962-02-02, 843-08-10) kaynaktaki gibi kalır; çeviri önerilmez (koordinatör kararı).

## c) Kronoloji (Değişmez 2 evreni: olaylar*.js, kronoloji_sinir*.js)
Var olanlar:
- 962-02-02 I. Otto imparator tacı: data/olaylar_ortacag_bati_avrupa.js:27 (doğru, NDB ile uyumlu).
- 955-08-10 Lechfeld: aynı dosya :26 · 1076 Worms Sinodu olaylar_ortacag_yer_sonrasi.js:5 · 1077 Canossa olaylar_ortacag_italya_dogu_avrupa.js:67 · 1122 Worms Konkordatosu yer_sonrasi:8 · 1155-06-18 Barbarossa taç bati_avrupa:42 · 1648-10-24 Vestfalya olaylar_ek20.js:344 · 1803-02-25 Reichsdeputationshauptschluss olaylar_avmac_b_1029.js:52 · 1805-12-26 Pressburg avmac_b:64 · 1806-08-06 HRE'nin sonu avmac_b:70 · 1801 Lunéville kronoloji_sinir_avrupa_bati.js:190 · 1871-01-18 kronoloji_sinir_avrupa_bati.js:606 (yer_id:"Köln") ve kronoloji_sinir_benelux.js:67 · 1866-08-23 Prag Barışı olaylar_avmac_final_1029.js:6 · 1938-03-13 Anschluss kronoloji_sinir_halef_1923_2000.js:14.
- EVREN DIŞI (yalnız künye içi/kronoloji_*.js): 1806-08-06 künye kronolojisi (devletler.js:1789), 1918-11-09, 1933-01-30 (devletler.js:1793-1794), data/kronoloji_almanya.js'deki 53 madde (Altın Ferman, Reichskammergericht vb. buradadır, evrende değildir).
Eksik (öneri, aday satırlar; günler okunmadı, KASA teyit etmeli):
```
{ t:"1356-12-25", b:"Altın Ferman (Goldene Bulle) Metz'de ilan edildi: imparator seçimi yedi elektöre bağlandı", yer_id:"Metz", kaynak:"ARANACAK: NDB 'Karl IV.' + Treccani 'Bolla d'Oro' (okunmadı); 10 Ocak 1356 Nürnberg ilk bölümü ayrı" }
{ t:"1555-09-25", b:"Augsburg Dini Barışı: cuius regio eius religio, Lutherci prensler tanındı", yer_id:"Augsburg", kaynak:"ARANACAK (okunmadı)" }
{ t:"1806-07-12", b:"Ren Konfederasyonu kuruldu: 16 Alman prensi Kutsal Roma'dan ayrıldı", yer_id:"Münih", kaynak:"ARANACAK: Rheinbundakte 12 Temmuz 1806 (birincil belge neşri); ikinci kaynak NDB/HLB" }
{ t:"1815-06-08", b:"Alman Konfederasyonu (Bundesakte) kuruldu", yer_id:"Frankfurt", kaynak:"DHM LeMO Bundesakte (künyede okundu); resmî imza 10 Haziran" }
{ t:"1919-08-11", b:"Weimar Anayasası yürürlüğe girdi", yer_id:"Berlin", kaynak:"ARANACAK (GHDI weimar-germany-1918-1933 künyede anılıyor, okunmadı)" }
```
Not: 1815 maddesi şu an yalnız `alman-konfederasyonu` künye kronolojisinde (devletler.js:14048, evren dışı); evrene alınması gerekir.

## d) Harita uyumu
`almanya`: 183 kırılma, 57 AÇIK; en geniş an 1942 (93 yerleşim, ayrıca 962: 29 → 1305: 68 → 1942: 93). Aşağıda ölçerin sayıları; "madde var" = ±31 günde madde var ama alâkasız sayılıyor (yer_id tek şehre bağlı).
| gün | yerleşimler | öneri |
|---|---|---|
| 0962-02-02 kazanç | Aachen, Augsburg, Bergamo, Bremen… | madde var (olaylar_ortacag_bati_avrupa.js:27, yer_id:Roma) → `kapsam_genis:true` ekle ya da `odak_yer` genişlet |
| 1000-01-01 kayıp | Anvers, Baden-Baden, Bergamo, Brescia (+ Aachen, Köln, Mainz, Frankfurt, Hamburg, Magdeburg: aynı gün) | 1000-01-01 yuvarlak yıl kırılması: gerçek sahip değişimi kaynaklı değil; yerleşim s: dilimleri "1000" sınırına çekilmiş (Paris, Strazburg, Tours, Poitiers de 1000'den başlıyor). Hem kayıpta hem kazançta madde yok. Öneri: bu "1000" sınırı ilk-anılış/kaynak boşluğu sayılsın; her şehrin kendi sahibine bağlanmalı. |
| 1032-09-06 | Besançon | madde var (III. Rudolf ölümü); yer_id eksik |
| 1801-02-09 | Aachen, Koblenz, Köln, Trier | madde var (Lunéville 1801-02-09, yer_id:"") → yer_id boş olduğundan ölçer kaçırıyor; `odak_yer:["Köln","Aachen","Koblenz","Trier"]` |
| 1803-02-25 | Trento | madde var (RDH, yer_id:Brixen); odak_yer'e Trento (Trient) ekle |
| 1805-12-26 | Freiburg, Konstanz, Lienz | madde var (Pressburg) → odak_yer'e ekle |
| 1814-06-03 | Bregenz, Brixen, Feldkirch, Landeck | madde var (Paris antlaşması Tirol) fakat yer_id Tirol dışı olabilir → odak_yer ekle |
| 1864-10-30 | Aabenraa, Flensburg, Haderslev, Kiel | madde var (Viyana Antlaşması) → odak_yer ekle |
| 1871-01-18 | Berlin, Breslau, Elbing, Gdansk | madde var (kronoloji_sinir_avrupa_bati.js:606) yer_id "Köln" → Berlin, Breslau, Gdansk, Elbing ekle |
| 1871-05-10 | Colmar, Metz, Mulhouse, Strazburg | Frankfurt Barışı 10 Mayıs 1871: **madde YOK** (ölçer "Midhat Paşa" gösterdi). Öneri satırı: `{ t:"1871-05-10", b:"Frankfurt Barışı: Alsas-Loren Almanya'ya geçti", yer_id:"Strazburg", kaynak:"ARANACAK" }` |
| 1883-05-01 / 1884-08-07 | Lüderitz | Alman Güneybatı Afrikası künyesi ayrı (`alman-guneybati-afrikasi` 1884-08-07); Lüderitz 1883'te `almanya`ya girip 1884-08-07'de ayrı künyeye geçiyor: iki kırılma da maddesiz. Öneri: Lüderitz'i 1883'ten değil 1884-08-07'den alman-guneybati-afrikasi'na bağla; `almanya`da hiç olmasın. |
| 1884-11-03 – 1911 | Finschhafen, Kokopo, Madang, Nauru, Jaluit, Apia, Kieta, Aitape, Lorengau, Garapan… | sömürge yerleşimleri `almanya` künyesine bağlı: ayrı sömürge künyeleri (alman-togo vb.) var, Pasifik için YOK. 13 kırılma maddesiz. Öneri: "Alman Yeni Gine / Alman Samoası / Alman Mikronezyası" künyesi ya da her yer için kronoloji maddesi. |
| 1898-03-06 | Qingdao | madde yok; Kiautschou kiralama Mart 1898 (6 Mart 1898 Pekin Sözleşmesi) — tarih ARANACAK |
| 1914-08-29 / 1914-12-09 | Apia, Kieta | I. Dünya Savaşı Pasifik kayıpları: Apia 29 Ağustos 1914 Yeni Zelanda; maddesiz |
| 1918-02-16 | Kaunas, Vilnius | Litvanya bağımsızlık bildirisi (16 Şubat 1918) — `almanya` bu iki şehri hangi s:'de tutuyordu; Ober Ost işgali; maddesiz |
| 1922-06-03 / 1945-01-17 | Kattowitz | Yukarı Silezya bölünmesi madde var ama yer_id farklı |
| 1938-03-13, 1939-10-06, 1940-08-02 | Bregenz.., Karviná.., Colmar.. | maddeler var (Anschluss, Wartheland, Alsas); odak_yer'e şehirler eklenmeli |
Toplam: 57 açık = ~21 "madde var, yer_id tutmuyor" (kolay çözüm) + ~25 gerçek madde eksiği (sömürgeler, 1000-01-01 yuvarlak sınırı, 1871-05-10, 1883) + ~11 HRE-içi ayrışma (Stuttgart 1495, Münih 1506, Basel 1501, Konstanz 1548, Metz 1552, Freiburg 1368, Bern 1191/1353, Luzern 1332, Strazburg…). HRE-içi ayrışmalarda öneri: şehir hâlâ imparatorluk toprağıysa `almanya` s:'si kesilmesin; İsviçre ayrılışı (Basel 1501-07-13 = Basel Antlaşması, 1499 Swabian War sonrası) için madde "Swabian/Schwaben Savaşı Basel Barışı 22 Eylül 1499" (ARANACAK).
`alman-konfederasyonu`: 0 yerleşim — haritada görünmüyor. Üyeleri (Bavyera, Saksonya, Hannover, Württemberg, Baden) ayrı künyelerse (denetlenmedi) çatı künyenin boş olması kabul edilebilir; aksi halde 1815-1866 `almanya` ile çakışır.

## Önerilen düzeltmeler (KASA için)
1. data/devletler.js `dogu-francia` f → "0843-08-10", ic_not: "Treccani Enc. Ital. 'Verdun' yalnız ağustos 843; gün tek kaynak (Britannica)". `bati-francia`, `orta-francia` f ve `frank` t aynı gün (dosya 33).
2. data/kronoloji_sinir_avrupa_bati.js:606 (1871-01-18) `odak_yer:["Berlin","Breslau (Wrocław)","Gdansk","Elbing (Elbląg)","Köln"]`; data/olaylar_ortacag_bati_avrupa.js:27 (962) ve 1801/1803/1805/1814/1864/1938/1939/1940 maddelerine `odak_yer`/`kapsam_genis:true` ekle (ölçerin alâkalı saymasını sağlar; haritada gerçekten o şehirler değişiyor).
3. Eksik 5 madde (c bölümü) + 1871-05-10 Frankfurt Barışı + Qingdao 1898 + Kiel/Flensburg yer_id.
4. Karar bekleyen: `almanya` künyesini 1806'da bitirip 1871-1945'i ayrı künyeye bölmek (öneri, Emre kararı).

## Erişilemeyen kaynaklar
- NDB 'Franz II.' (deutsche-biographie.de, sfz numarası bulunamadı; sfz71277 yanlış maddeye çıktı): soru: Kayser'in tahttan çekilme belgesi tarihi 6 Ağustos 1806 mı?
- Peter H. Wilson, Heart of Europe (Harvard UP 2016) · Cambridge Medieval History vol. 3: Verdun gününün (10 Ağustos 843) ikinci akademik teyidi.
- Treccani 'Bolla d'Oro', 'Augusta, Pace di' (slug bulunamadı): 25 Aralık 1356 ve 25 Eylül 1555.
- Rheinbundakte 12 Temmuz 1806 metni (de.wikisource ya da HLB): tarih.

## Koordinatör kararı — OZET'te en üstte
`almanya` tek künyesi (962-1945) ardıl künyelere bölünsün — öneri:
`kutsal-roma` 962-02-02 → 1806-08-06 · (Ren Konfederasyonu ayrı, Fransız himayesi 1806-07-12 → 1813) ·
`alman-konfederasyonu` 1815-06-08 → 1866-08-23 (künye var, 0 yerleşim) · Kuzey Alman Konfederasyonu
1867-07-01 → 1871-01-18 · `alman-imparatorlugu` 1871-01-18 → 1918-11-09 · `weimar` 1918-11-09 → 1933-03-23 ·
`nazi-almanya` 1933-03-23 → 1945-06-05. Bölünme tavan + renk (renkler.py BOYALAR = tuz) işidir;
**Emre sabah karar verir.** Günler bu dosyanın b) bölümündeki kaynaklarla KASA'da teyit edilsin.

## JSTOR teyidi (HAVVA SALI, tarayıcıdan, 4 Kasım 2026; aktarım)
- **Kutsal Roma'nın sonu — kaynaklı:** P. H. Wilson, «Bolstering the Prestige of the Habsburgs: The End of the
  Holy Roman Empire in 1806», *International History Review* 28/4 (2006) s. 709-736: II. Franz tacı «on 6 August»
  1806 bıraktı ⇒ Treccani + Wilson **1806-08-06 çift teyit**.
- **Ren Konfederasyonu senedi:** A. W. Ward, *EHR* 32 (1917) s. 418-427 («not signed till 12 July 1806») ve
  M. E. Hay, *IHR* 38/3 (2016) s. 482-504 ⇒ **1806-07-12 çift teyit** (arama özetleri).
