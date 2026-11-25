# Öteki devletler için ek okuma: ortak şartname ve iş bölümü (25 Kasım 2026)

Genel koordinatör: EMRELİC 21 KASIM.

## Emre'nin isteği
Osmanlı'da yapılan her şey (ek okuma kartları, kişi kartları, savaşlar, antlaşmalar, tartışmalı
meseleler, ilginç olaylar) öteki devletler için de yapılacak. Konular en çok ilgi gören ve en çok
tartışılan meselelerden seçilecek ve ilgili kronoloji maddesine bağlanacak. Metinler bilgilendiren,
merak uyandıran, ilgiyle okunan anlatılar olacak. Dayanak popüler site ya da blog değil, doğrudan
akademik kaynak: halkın yanlış anlattığı meselelerin akademik gerçeği ortaya konacak.

| Kademe | Devletler |
|---|---|
| 1 | İran, Rusya, Avusturya, Lehistan, Venedik |
| 2 | Almanya, Fransa, İngiltere, Mısır (Memlük, Hidivlik, Kavalalı dönemleri) |
| 3 | İspanya, Portekiz, Macaristan, Hollanda, Ceneviz, Papalık, İsveç |
| 4 | Çin, Hindistan, Japonya |

## Osmanlı ölçüsü (origin/main, 25.11 ölçümü)
Yaklaşık 1090 ek okuma kartı (`data/ekokuma*.js`). Türler: tartisma 293, sebep-sonuc 216,
antlasma 157, savas-hikayesi 131, teknik-bilimsel 69, magazin 63, kimdir 62, karsi-anlati 36,
mimari 22, dis-yankilar 17 ve küçük türler. `metin` ortanca uzunluğu yaklaşık 1600 karakter.
Ayrıca: `KISILER` 288, `PADISAHLAR` 41 (ayrıntılı hükümdar kaydı), savaş künyesi 204,
`SAVASLAR` 169, `ANTLASMALAR` 42 ile madde madde antlaşma dosyaları ve haritaları, sefer okları.
Ek okuma metinleri çeviri sistemine dahil DEĞİL (`ceviri.py` türleri: arayuz, devlet, olay);
yabancı dil kullanıcısı bu kartları Türkçe görür. Bu ayrı bir karar konusu.

## Üç aşama (sıra bozulmaz)
1. **Envanter ve konu listesi** (devlet başına `denetim/EKOKUMA-<DEVLET>-KONU.md`): o devletin
   atlasta var olan künye ve kronoloji maddeleri; kronoloji boşlukları (listelenir); 60–100 konu
   adayı, her biri: ilgi sinyali (nerede tartışılıyor), bağlanacağı madde (`gün|başlık parçası`),
   kart türü, akademik kaynak (okundu/okunmadı), yaygın yanlış ve akademik durum. İlk 40 sıralı.
2. **Örnek 8 kart** (en az 4 türden, 1 hükümdar kaydı ve 2 kişi kartı dahil). Emre üslubu
   onaylamadan seri üretime geçilmez.
3. **Seri üretim:** 20'şerlik partiler, her parti ayrı commit.

## Kaynak kuralı
CLAUDE.md "Kaynak kuralı" geçerli. Forum, sözlük sitesi, video ve popüler siteler YALNIZ "neye ilgi
var" sinyalidir; hiçbir olgu oradan alınmaz ve kaynak diye yazılmaz. Her kartın olguları akademik
kaynaktan (hakemli dergi, akademik yayınevi, Encyclopaedia Iranica gibi akademik ansiklopedi, TDV,
tez, belge neşri) ve OKUNARAK yazılır: yazar, eser, yıl, sayfa ya da madde/URL. Vikipedi tek dayanak
olamaz. Okunamayan kaynak "okunmadı" yazılır ve BORC-DEFTERI'ne girer; ücretli duvar aşılmaz.
Uydurma alıntı, uydurma diyalog, uydurma tarih yok. Tarihçiler ayrışıyorsa iki görüş de adıyla
verilir, `kesinlik` alanı buna göre doldurulur. Ulusal hassasiyetli konularda (katliam, sürgün, din)
dil ölçülü ve kaynaklı olur. Kaynaktan cümle kopyalanmaz; metin özgündür. Küçük model (Haiku)
araştırmada kullanılmaz.

## Üslup
Başlık ve `kisa` merak uyandırır (soru ya da çarpıcı karşıtlık), abartı ve tık tuzağı yok. Metin
sade Türkçe, kısa paragraflar, ilk cümle okuru içeri alır, sonda "tarihçiler bugün ne diyor".
İç not, geliştirici dili, "atlas/oturum/Claude" gibi sözler görünen alanlara yazılmaz (`ic_not*`).

## Teknik
- Mevcut Osmanlı kartlarının şeması örnek alınır (aynı alan adları). Dosya:
  `data/ekokuma_dev_<devlet>_<parti>.js` → `window.EKOKUMA_DEV<DEVLET><PARTI>`; ayrı ad alanı.
  🔴 DÜZELTME (KASA ölçümü, koddan doğrulandı): `js/app.js` `_ekHavuz` deseni
  `^EKOKUMA(_[A-Z0-9]+)?$` yalnız TEK alt çizgi kabul eder. `EKOKUMA_DEV_IRAN_01` gibi bir ad
  hata vermeden görünmez kalır. Doğrusu bitişik yazım: `EKOKUMA_DEVIRAN01`, `EKOKUMA_DEVVENEDIK01`.
- Hükümdar, kişi ve savaş kayıtlarının her birine `devlet: "<künye id>"` alanı yazılır.
- Yabancı kişiler `KISILER`e EKLENMEZ (Osmanlı maddelerinde yanlış eşleşir):
  `window.KISI_<DEVLET>`. Savaş kaydında `devlet` ve `taraf` zorunlu (yoksa sefer oku Osmanlı
  sayılır). `HUKUMDAR_*` bugün arayüzde hiç okunmuyor; panel altyapı işinde yapılacak.
  (KASA bunları koddan okudu, tarayıcıda sınanmadı.)
- Bağlama güne göre yapılır: aynı gün Osmanlı ya da başka devlet maddesi olabilir, bu yüzden
  `olay` her zaman `"YYYY-MM-DD|ayırt edici başlık parçası"` biçiminde yazılır ve yanlış maddede
  görünmediği sınanır (`js/app.js` `ekKartBagliMi`). Kart `id`leri devlet önekli ve benzersiz.
- Yeni dosyanın siteye girmesi için `index.html` ya da ek okuma yükleyici listesi
  (`js/app.js` `_EKOKUMA_DOSYA_ADLARI`) gerekir; bunu altyapı işi tek elden yapar. İçerik dalları
  `index.html` ve `js/` dosyalarına dokunmaz.
- Eksik kronoloji maddesi gerekiyorsa ek okuma dalında yazılmaz; listelenir.
- Dal: `ekokuma-<devlet>-1125`; kendi worktree'n; sık commit ve push; `main`e itme, paketle,
  damga, push_kapisi yok.

## İş bölümü ve kaynak analizi
| Makine | Durum (25.11) | Görev |
|---|---|---|
| UMIT | çeviri bitti, dünya eksik raporu sürüyor; Pzt–Cmt 09–19 eczane mesaisi | İran, sonra Rusya. Mesaide en çok 2 hafif ajan; ağır dalga 19:00'dan sonra |
| LAB | çeviri denetimi sürüyor, sonra boş | Avusturya, sonra Lehistan |
| EMRELİC | belleği dar; koordinasyon ve Türkçe denetim burada | Venedik, Türkçe denetim bitince; en çok 2 ajan |
| KASA | push kapısı + çeviri teyidi; D: diski bu akşam doldu; içerik yazmaz | Kapı. Altyapı (hükümdar/kişi paneli, yükleyici, bağlama sınaması) için ölçüm ve plan, disk ve kapı elverirse |
| HAVVA | Koşu 40 sürüyor, bellek payı dar (24.11: yaklaşık 5 GB) | Görev yok. Koşu inip mesai dışı olunca 2. kademe konu listesi için yeniden değerlendirilir |

2. kademe, 1. kademede bir devlet bitince o makineye geçer: Almanya, Fransa, İngiltere, Mısır.

## Bilinen altyapı açığı (ölçülecek)
Osmanlı dışı devletlerde hükümdar paneli, kişi kartı satırları, savaş künyesi, antlaşma haritası ve
sefer okunun arayüzde nasıl görüneceği ölçülmedi. İçerik yazımı bunu beklemez; hükümdar kayıtları
`PADISAHLAR` şemasıyla `data/hukumdar_<devlet>.js` → `window.HUKUMDAR_<DEVLET>` olarak, her
kayıtta `devlet` alanıyla yazılır.
