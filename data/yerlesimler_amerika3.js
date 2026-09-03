// ============================================================================
// YERLEŞİM VERİ SETİ — AMERİKA 3  (Oturum: AMERIKA-0902, 2 Eylül 2026)
// ============================================================================
// data/yerlesimler.js ile AYNI ŞEMA. Alan sözlüğü: VERI-YAPISI.md.
// Görev tanımı: oturumlar/AMERIKA-0902.md
// Ad alanı: window.YERLESIMLER_AMERIKA3   (CLAUDE.md §7 — "ayrı dosya vermek,
// ayrı ad alanı vermek değildir"; dosya adındaki ayırt edici parça değişken
// adında da duruyor.)
//
// ---------------------------------------------------------------------------
// BU DOSYANIN SEBEBİ — ŞARTNAMENİN ADAY LİSTESİ ÇÜRÜDÜ, ÖLÇÜM YENİSİNİ ÜRETTİ
// ---------------------------------------------------------------------------
// Şartname dört kalem sayıyordu (And · Brezilya · Kuzey Amerika · Mezoamerika)
// ve her birinde eksik olduğu varsayılan şehirleri ADIYLA listeliyordu.
// ÖLÇÜLDÜ (M-2158): adıyla sayılan ~41 hedefin ~35'i atlasta ZATEN VARDI —
// Cusco · Quito · Potosí · Sucre · La Paz · Arequipa · Trujillo · Cajamarca ·
// Santiago · Concepción · Asunción · Salvador · Olinda · Rio · São Paulo ·
// São Luís · Belém · Montevideo · Córdoba · Quebec · Montreal · Boston ·
// New Amsterdam · Philadelphia · Charleston · St. Augustine · Santa Fe ·
// New Orleans · Detroit · Onondaga · Chota · Werowocomoco · Taos + Acoma ·
// Comanchería · Mérida · Campeche · Guadalajara.
// Sebebi git log'da: commit 91e3d1c "AMERIKA 134 NOKTA" — önceki bir Amerika
// oturumu (13 Ağustos) o işi zaten yapmış. Şartname uygulansaydı Cusco'nun
// yanına Cusco yazılacaktı: `CLAUDE.md §11` Varat/Varad tuzağı ~35 kez.
//
// ⇒ Aday listesi ELLE değil ÖLÇÜMLE kuruldu (M-2161):
//   ① Natural Earth kara maskesi üzerinde 0,5° ızgara — 17.963 kara hücresi
//   ② her hücrenin en yakın yerleşime uzaklığı
//   ③ ve asıl sınav: `CLAUDE.md §2` — o boşluğu BUGÜN KİM BOYUYOR?
//      Düşük yoğunluk tek başına kusur DEĞİLDİR; kusur YANLIŞ SAHİPTİR.
//
// ---------------------------------------------------------------------------
// ÖLÇÜLEN YALAN — bu dosyanın kapattığı şey
// ---------------------------------------------------------------------------
// Kuzey Meksika kutusunda (22-32K / 118-97B) atlasta TOPLAM 1 NOKTA vardı:
// San Antonio — ve o Teksas'ta, yani 1845'ten sonra ABD. Sonuç:
//
//   25 ızgara hücresinin 15'i 1870'te `abd` BOYANIYORDU
//   Chihuahua (29K,106B) → 683 km öteden Acoma Pueblo'dan (Yeni Meksika) emiliyor
//   Sonora   (29K,110B) → 704 km öteden aynı noktadan
//   Baja Cal.(29K,115B) → 462 km öteden San Diego'dan
//
// 1870'te orası MEKSİKA'dır. Guadalupe Hidalgo (1848) sınırı Gila-Rio Grande
// hattıdır; atlas onu 23-25° enlemine kadar indiriyordu. Güney sıralar zaten
// doğruydu (Compostela/Guadalajara'dan `meksika` geliyordu) — yani kusur
// kimlikte değil, NOKTASIZLIKTA: `CLAUDE.md §2`nin birebir vakası, ve
// `§3.5.1`in "noktasızlık İKİ YÖNE de hata üretir" dersinin Amerika yüzü.
//
// ---------------------------------------------------------------------------
// KAYNAK — `CLAUDE.md §4`, TANECİKLİK BOŞLUĞU (ölçüldü, varsayılmadı)
// ---------------------------------------------------------------------------
// TDV slug sınavı (HTTP kodu, §4①):
//   amerika  200 CANLI      meksika  302 ÖLÜ      brezilya 302 ÖLÜ
//   yeni-ispanya 302 ÖLÜ    kizilderili 302 ÖLÜ
// Kapsayıcı madde denendi (§4 "dar slug tutmazsa genel maddeyi dene") ve
// GÖVDESİ OKUNDU (184 KB, 74.729 karakter düz metin): `amerika` maddesi
// Aztek/İnka/Maya'yı ve 1519-1521 fethini somut olarak veriyor, ama
// "Chihuahua" kelimesi metinde HİÇ GEÇMİYOR; kuzey Meksika kasabalarının
// kuruluş tarihini o tanecikte konuşmuyor.
// ⇒ Bu bir COĞRAFÎ boşluk değil TANECİKLİK boşluğudur (`kirman` 57 KB /
//   `yezd` 61 KB vakasının aynısı) ve `§4`ün hükmü açık: "ikisi de aynı
//   muameleyi görür" — standart akademik kaynak MEŞRUDUR, şartı `kaynak:`
//   alanına AÇIKÇA yazmaktır. Her kayıtta yazılıdır; gizlenmemiştir.
//
// Dayanak akademik külliyat (§4 kırmızı çizgi: akademik · bilimsel · güvenilir;
// forum/blog/içerik çiftliği KULLANILMADI, Vikipedi tek dayanak DEĞİL):
//   Peter Gerhard, "The North Frontier of New Spain" (Princeton Univ. Press, 1982)
//   David J. Weber, "The Spanish Frontier in North America" (Yale Univ. Press, 1992)
//     — bu ikincisi zaten `yerlesimler_amerika.js`in Pueblo İsyanı kaydının dayanağı
//
// ---------------------------------------------------------------------------
// ŞEMA KARARLARI — niçin böyle yazıldı
// ---------------------------------------------------------------------------
// · `kur:` kullanıldı ⇒ kuruluştan ÖNCE nokta YOKTUR, dolayısıyla sahipsiz
//   pencere DOĞMAZ (`Değişmez 1` temiz kalır). Fetih öncesi kuzey Meksika
//   (Chichimeca · Tepehuán · Tarahumara · Yaqui) göçebe/yarı-göçebedir ve
//   devlet künyesi yoktur; Emre'nin hükmü gereği UYDURULMADI:
//   "yerleşim var ise nokta konur, yok ise uyduracak halimiz yok."
// · Sahiplik zinciri: `yeni-ispanya` (1535-04-17 → 1821-09-27) →
//   `meksika` (1821-09-27 → 1923-10-29). İkisi de `devletler.js`te VAR,
//   ikisi de `renkler.py` BOYALAR'da VAR (32 aday kimliğin 32'si ölçüldü,
//   renksiz 0) ⇒ bu dosya RENK BORCU ÜRETMİYOR.
// · `abd` HİÇBİR kayda yazılmadı: 1848 sınırının GÜNEYİ hepsi.
// · `m:` alanı YAZILMADI — `yerlesimler_amerika.js`in kendi uygulaması da
//   böyle; `m:` bir yerleşim adına birebir eşleşmek zorunda ve eşleşmeyen
//   `m:` kademe zinciri uyarısı üretiyor.
//
// 🔴 BİR HAYALET BULDUM — BENİM DOSYAM DEĞİL, RAPOR EDİYORUM (M-2163)
//   `yerlesimler_amerika.js` Compostela ve Culiacán çevresinde `yeni-ispanya`yı
//   1531'den başlatıyor; oysa o künye `devletler.js`te 1535-04-17'de BAŞLIYOR
//   ⇒ ~4 yıllık hayalet (`CLAUDE.md §3.5`). Benim Culiacán kaydım bu tuzağa
//   DÜŞMÜYOR: 1531-1535 arası `ispanya`ya yazıldı. Ötekinin düzeltmesi
//   dosya sahibinindir.
// ============================================================================

window.YERLESIMLER_AMERIKA3 = [

// ---------------------------------------------------------------------------
// ① KUZEY MEKSİKA — ölçülen 15 hücrelik "1870'te ABD" yalanını kapatır
// ---------------------------------------------------------------------------

{ ad:"Zacatecas", tur:"sehir", lat:22.7709, lon:-102.5832, g:1, k:1,
  kur:"1546-09-08",
  s:[{f:"1546-09-08",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 8 Eylül 1546 gümüş keşfi ve yerleşimin kuruluşu; TDV bu taneciği kapsamıyor (amerika maddesi gövdesi okundu, geçmiyor)" },
// k gerekçesi: Nueva Galicia'nın gümüş başkenti, sonra Zacatecas intendanslığının merkezi — k:1

{ ad:"Durango (Victoria de Durango)", tur:"sehir", lat:24.0277, lon:-104.6532, g:1, k:1,
  kur:"1563-07-08",
  s:[{f:"1563-07-08",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 8 Temmuz 1563, Francisco de Ibarra; Nueva Vizcaya'nın başkenti. TDV taneciği kapsamıyor" },
// k gerekçesi: Nueva Vizcaya eyaletinin başkenti — k:1

{ ad:"Saltillo", tur:"sehir", lat:25.4232, lon:-101.0053, g:0, k:1,
  kur:"1577-07-25",
  s:[{f:"1577-07-25",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 1577, Alberto del Canto; sonradan Coahuila'nın başkenti. TDV taneciği kapsamıyor" },
// k gerekçesi: Coahuila eyalet merkezi — k:1

{ ad:"Monterrey", tur:"sehir", lat:25.6866, lon:-100.3161, g:1, k:1,
  kur:"1596-09-20",
  s:[{f:"1596-09-20",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 20 Eylül 1596, Diego de Montemayor; Nuevo León'un başkenti. TDV taneciği kapsamıyor" },
// k gerekçesi: Nuevo León eyaletinin başkenti — k:1

{ ad:"Chihuahua (San Felipe el Real)", tur:"sehir", lat:28.6353, lon:-106.0889, g:1, k:1,
  kur:"1709-10-12",
  s:[{f:"1709-10-12",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 12 Ekim 1709 kuruluşu (San Felipe el Real de Chihuahua). TDV taneciği kapsamıyor" },
// k gerekçesi: ölçülen yalanın MERKEZİ — 683 km öteden Acoma Pueblo'dan emiliyordu. k:1

{ ad:"San José del Parral", tur:"sehir", lat:26.9333, lon:-105.6667, g:0, k:2,
  kur:"1631-01-01",
  s:[{f:"1631-01-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 1631 gümüş keşfi; 1640-1731 arası Nueva Vizcaya'nın fiilî idarî merkezi. GÜN BİLİNMİYOR, CLAUDE.md §4 gereği YYYY-01-01 yazıldı, uydurulmadı" },
// k gerekçesi: bir asır boyunca Nueva Vizcaya'nın fiilî merkezi — k:2

{ ad:"Monclova (Santiago de la Monclova)", tur:"sehir", lat:26.9014, lon:-101.4211, g:0, k:2,
  kur:"1689-01-01",
  s:[{f:"1689-01-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 1689 yeniden kuruluşu (önceki 1577/1674 denemeleri kalıcı olmadı); Coahuila'nın ilk başkenti. GÜN BİLİNMİYOR" },
// k gerekçesi: Coahuila'nın ilk eyalet merkezi, sonra Saltillo'ya devretti — k:2

{ ad:"Culiacán (San Miguel de Culiacán)", tur:"sehir", lat:24.8091, lon:-107.3940, g:0, k:2,
  kur:"1531-01-01",
  s:[{f:"1531-01-01",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 1531, Nuño Beltrán de Guzmán; kuzeybatının en eski İspanyol yerleşimi. GÜN BİLİNMİYOR. 1531-1535 arası KASTEN ispanya: yeni-ispanya künyesi devletler.js'te 1535-04-17'de başlıyor, §3.5 hayalet sınavı" },
// k gerekçesi: Sinaloa'nın idarî merkezi — k:2

{ ad:"Álamos", tur:"sehir", lat:27.0264, lon:-108.9364, g:0, k:2,
  kur:"1682-01-01",
  s:[{f:"1682-01-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 1682 gümüş yatağı ve real de minas kuruluşu; Sonora'nın güney kapısı. GÜN BİLİNMİYOR" },
// k gerekçesi: Sonora'nın en zengin maden merkezi — k:2

{ ad:"Arizpe", tur:"sehir", lat:30.3378, lon:-110.1631, g:0, k:2,
  kur:"1646-01-01",
  s:[{f:"1646-01-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 1646 Cizvit misyonu; 1776'da Provincias Internas'ın başkenti yapıldı. GÜN BİLİNMİYOR" },
// k gerekçesi: 1776-1780'ler Provincias Internas başkenti — k:2

{ ad:"Pitic (Hermosillo)", tur:"sehir", lat:29.0729, lon:-110.9559, g:0, k:2,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 1700 civarı Presidio de Pitic; 1828'de Hermosillo adını aldı. GÜN BİLİNMİYOR" },
// k gerekçesi: Sonora kıyı ovasının merkezi — k:2

{ ad:"Loreto (Baja California)", tur:"liman", lat:26.0111, lon:-111.3436, g:0, k:1,
  kur:"1697-10-25",
  s:[{f:"1697-10-25",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 25 Ekim 1697, Juan María de Salvatierra; Kaliforniyalar'ın ilk kalıcı İspanyol yerleşimi ve 1697-1777 başkenti. TDV taneciği kapsamıyor" },
// k gerekçesi: Kaliforniyalar'ın başkenti (1697-1777) — k:1
// ⚠️ Baja California 1848'den SONRA da Meksika'da kaldı; `abd` YAZILMADI.

{ ad:"Misión San Vicente Ferrer", tur:"kale", lat:31.3319, lon:-116.2469, g:0, k:2,
  kur:"1780-08-27",
  s:[{f:"1780-08-27",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 27 Ağustos 1780, Dominiken misyonu ve presidio; kuzey Baja California'nın sınır karakolu" },
// 🔴 BU KAYIT ÖLÇÜMÜN İKİNCİ TURUNDA DOĞDU — VARSAYIMLA DEĞİL.
// İlk 12 nokta yazıldıktan sonra ızgara YENİDEN koşuldu: 1870'te `abd` boyanan
// hücre 15 → 4'e indi. Kalan dördü tek tek bakıldı ve ÜÇÜ DOĞRU ÇIKTI
// (29K/99B · 31K/102B · 31K/99B — üçü de Teksas, 1870'te gerçekten ABD).
// Yalnız 31K/115B gerçek kusurdu: kuzey Baja California, 279 km öteden
// San Diego'dan (ABD) emiliyordu. Bu kayıt onu kapatır ⇒ 4 → 3, ve kalan üçü
// KUSUR DEĞİL.
// 📌 Ders: "kalan ihlal" sayısını düzeltme sanmadan önce tek tek bakmak
// gerekiyordu — dördünün üçü zaten doğruydu. `CLAUDE.md §11`: ölçüm doğru,
// çıkarım yanlış olabilir.

// ---------------------------------------------------------------------------
// ② BREZİLYA İÇİ + AMAZON — ölçülen ikinci yalan
// ---------------------------------------------------------------------------
// ÖLÇÜLDÜ (M-2161), 1700 ve 1870 kesitlerinde en yakın nokta kimse o boyuyordu:
//   Manaus çevresi (2G,60B)  → New Amsterdam (BERBICE, Guyana) 958 km
//                              ⇒ 1700 `hollanda` · 1870 `ingiltere`
//   Batı Amazon   (5G,65B)   → Ollantaytambo/Cusco 978-1216 km ⇒ 1870 `peru`
//   Mato Grosso  (16G,56B)   → Sucre 1038 km ⇒ 1800 `ispanyol-peru` · 1870 `bolivya`
//   Cerrado      (14G,48B)   → Ouro Preto 856 km
//
// Yani Brezilya'nın iç yarısı haritada Britanya · Peru · Bolivya görünüyordu.
// Portekiz Amazon'a 1616'da (Belém) yerleşti ve 1750 Madrid Antlaşması sınırı
// resmîleştirdi; bu kayıtların hepsi o yerleşmenin GERÇEK karakollarıdır.
//
// Zincir: `portekiz-brezilyasi` (1549-01-01 → 1822-09-07) →
//         `brezilya-imparatorlugu` (1822-09-07 → 1889-11-15) →
//         `brezilya-cumhuriyeti` (1889-11-15 → 1923-10-29)
// Üçü de `devletler.js`te ve BOYALAR'da VAR (ölçüldü).
// Hepsi 1549'dan SONRA kurulmuş ⇒ hayalet riski yok (`§3.5`).
//
// ⚠️ RECIFE YAZILMADI — KASTEN. Şartname onu sayıyordu ve atlasta yok; ama
// Olinda'ya 5,5 km uzakta. `CLAUDE.md §11` Varat/Varad tuzağının tam eşiği:
// 3 km sınavını teknik olarak geçer, harita faydası ~sıfır, mükerrer riski
// yüksek. Olinda o körfezi zaten temsil ediyor.

{ ad:"Manaus (Forte de São José do Rio Negro)", tur:"kale", lat:-3.1190, lon:-60.0217, g:1, k:1,
  kur:"1669-01-01",
  s:[{f:"1669-01-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  kaynak:"John Hemming, Amazon Frontier / Red Gold (Harvard Univ. Press) — 1669 Forte de São José do Rio Negro, Francisco da Mota Falcão; Rio Negro ağzının Portekiz karakolu, 1832'de Manaus adını aldı. GÜN BİLİNMİYOR, uydurulmadı" },
// k gerekçesi: orta Amazon'un merkezi — ölçülen yalanın çekirdeği (958 km öteden
// Berbice'den emilip 1870'te `ingiltere` boyanıyordu). k:1

{ ad:"Santarém (Tapajós)", tur:"sehir", lat:-2.4400, lon:-54.7080, g:0, k:2,
  kur:"1661-01-01",
  s:[{f:"1661-01-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  kaynak:"John Hemming, Amazon Frontier — 1661 Cizvit misyonu (Tapajós ağzı), 1758'de vila. GÜN BİLİNMİYOR" },
// k gerekçesi: Tapajós-Amazon kavşağı — k:2

{ ad:"Óbidos (Pauxis)", tur:"kale", lat:-1.9075, lon:-55.5175, g:0, k:2,
  kur:"1697-01-01",
  s:[{f:"1697-01-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  kaynak:"John Hemming, Amazon Frontier — 1697 Forte dos Pauxis; Amazon'un en dar boğazını tutan Portekiz kalesi. GÜN BİLİNMİYOR" },
// k gerekçesi: Amazon'un en dar geçidini denetleyen kale — k:2

{ ad:"Tabatinga", tur:"kale", lat:-4.2528, lon:-69.9381, g:0, k:2,
  kur:"1766-01-01",
  s:[{f:"1766-01-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  kaynak:"John Hemming, Amazon Frontier — 1766 Portekiz sınır karakolu (Solimões üzerinde, İspanyol Maynas'a karşı). GÜN BİLİNMİYOR" },
// k gerekçesi: yukarı Amazon'un Portekiz sınır karakolu — batı Amazon'u
// Cusco'dan emilip `peru` boyanmaktan kurtaran nokta. k:2

{ ad:"Barcelos (Mariuá)", tur:"sehir", lat:-0.9750, lon:-62.9236, g:0, k:2,
  kur:"1758-01-01",
  s:[{f:"1758-01-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  kaynak:"John Hemming, Amazon Frontier — 1758'de Rio Negro kaptanlığının ilk başkenti (Mariuá karmelit misyonu üzerine). GÜN BİLİNMİYOR" },
// k gerekçesi: Rio Negro kaptanlığının ilk başkenti — k:2

{ ad:"Macapá", tur:"kale", lat:0.0389, lon:-51.0664, g:0, k:2,
  kur:"1758-01-01",
  s:[{f:"1758-01-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  kaynak:"John Hemming, Amazon Frontier — 1758 Vila de São José de Macapá; Fortaleza inşaatı 1764. Amazon ağzının kuzey yakasını Fransız Guyanası'na karşı tutar. GÜN BİLİNMİYOR" },
// k gerekçesi: Amazon ağzının kuzey kıyısı, Fransa'ya karşı sınır — k:2

{ ad:"Cuiabá", tur:"sehir", lat:-15.6014, lon:-56.0979, g:1, k:1,
  kur:"1719-04-08",
  s:[{f:"1719-04-08",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  kaynak:"Charles R. Boxer, The Golden Age of Brazil 1695-1750 (Univ. of California Press, 1962) — 8 Nisan 1719 altın keşfi ve arraial kuruluşu (Pascoal Moreira Cabral); 1727'de Vila Real do Bom Jesus do Cuiabá" },
// k gerekçesi: Mato Grosso'nun merkezi — 1038 km öteden Sucre'den emilip
// 1870'te `bolivya` boyanıyordu. k:1

{ ad:"Vila Bela da Santíssima Trindade", tur:"sehir", lat:-15.0069, lon:-59.9506, g:0, k:1,
  kur:"1752-03-19",
  s:[{f:"1752-03-19",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  kaynak:"Charles R. Boxer, The Golden Age of Brazil (1962) — 19 Mart 1752, Antônio Rolim de Moura; Mato Grosso kaptanlığının başkenti, 1750 Madrid Antlaşması sınırını fiilen tutmak için kuruldu" },
// k gerekçesi: Mato Grosso kaptanlığının başkenti (1752-1820) — k:1

{ ad:"Forte Príncipe da Beira", tur:"kale", lat:-12.4181, lon:-64.4200, g:0, k:2,
  kur:"1776-06-20",
  s:[{f:"1776-06-20",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  kaynak:"Charles R. Boxer / John Hemming — 20 Haziran 1776 temel atma; Guaporé üzerinde İspanyol Moxos'a karşı Portekiz sınır kalesi" },
// k gerekçesi: Guaporé sınır hattı — Rondônia'yı Bolivya'dan emilmekten kurtarır. k:2

{ ad:"Vila Boa de Goiás", tur:"sehir", lat:-15.9339, lon:-50.1400, g:0, k:1,
  kur:"1727-01-01",
  s:[{f:"1727-01-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  kaynak:"Charles R. Boxer, The Golden Age of Brazil (1962) — 1727 altın arraial'i (Bartolomeu Bueno da Silva), 1739'da vila ve Goiás kaptanlığının başkenti. GÜN BİLİNMİYOR" },
// k gerekçesi: Goiás kaptanlığının başkenti — Cerrado boşluğunu kapatır. k:1

{ ad:"Oeiras (Piauí)", tur:"sehir", lat:-7.0250, lon:-42.1311, g:0, k:1,
  kur:"1712-01-01",
  s:[{f:"1712-01-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  kaynak:"Stuart B. Schwartz, Sugar Plantations in the Formation of Brazilian Society (Cambridge Univ. Press, 1985) — 1712 Vila da Mocha, 1761'de Oeiras adıyla Piauí kaptanlığının başkenti. GÜN BİLİNMİYOR" },
// k gerekçesi: Piauí kaptanlığının başkenti — Caatinga boşluğunu kapatır. k:1

{ ad:"São Cristóvão (Sergipe)", tur:"sehir", lat:-11.0147, lon:-37.2064, g:0, k:1,
  kur:"1590-01-01",
  s:[{f:"1590-01-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  kaynak:"Stuart B. Schwartz, Sugar Plantations in the Formation of Brazilian Society (1985) — 1590, Cristóvão de Barros; Sergipe kaptanlığının başkenti. GÜN BİLİNMİYOR" },
// k gerekçesi: Sergipe kaptanlığının başkenti — k:1
// ⚠️ 1630-1654 Hollanda işgali Sergipe'yi de kapsadı; `s:` içine YAZMADIM
// çünkü işgalin bu yerleşim için başlangıç/bitiş GÜNÜNÜ ölçemedim.
// `bulunamadı` demek uydurmaktan iyidir (`CLAUDE.md §4`). AÇIK KALEM.

];
