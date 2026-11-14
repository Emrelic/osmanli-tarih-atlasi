# ANTLAŞMA-1113 — KARLOFÇA 1699 mikro oynatıcı verisi (UMIT, 13 Kasım 2026)

Çıktı: `data/antlasma_madde_karlofca.js` (53 adım) · `index.html` +1 satır (`?v=r1`, damgayı push kapısı üretir). Üretici: `karlofca-uret.js` (scratch; `uret_antlasma.js` ile aynı çıktı biçimi — o araç tek numara dizisi + tekrar no reddi yaptığı için çok taraflı antlaşmada elle kuruldu).

## ① Sayılar
53 adım = 1 çerçeve + Habsburg md. 1-20 (20) + Venedik giriş + md. 1-16 + onay (18) + Lehistan giriş + md. 1-11 (12) + Rusya (2: ateşkes, İstanbul 1700). Doğrulanmadı işaretli adım: 2 (Rusya). Yer tablosu: 48 yer. `node --check` temiz; `syntax_kontrol.js` çıkış 0 (Lozan da 0); `eslesen` («Karlofça Antlaşması — ilk büyük toprak kaybı», 1699-01-26) kayda eşleşir.

## ② Kaynak basamağı
OKUNAN (ham metin): *A General Collection of Treatys…* Vol. IV (Londra 1732, İngilizce çeviri) s. 290-322 — https://archive.org/download/generalcollectio04whatuoft/generalcollectio04whatuoft_djvu.txt (curl, OCR metni, satır satır okundu): Habsburg 20 madde, Venedik 16 madde + Doge onayı, Lehistan 11 madde. Lehistan metni ayrıca Wikisource «Treaty of Karlowitz (Poland and Turkey)» (aynı çeviri, 11 madde, API parse) ile çapraz okundu.
KISMEN: TDV https://islamansiklopedisi.org.tr/karlofca — yalnız WebFetch özetleyici aracı (curl Cloudflare engeli); ham gövde görülmedi, iki çağrının ayrıntısı tutarsız (Venedik hükümlerinde). Yalnız TARİHLER için kullanıldı.
ULAŞILAMAYAN/OKUNMAYAN: Rusya ateşkesi ve İstanbul 1700 metni; Noradounghian, Hurewitz, Dumont, CTS, Düstur, DergiPark/TTK makaleleri; Türkçe resmî metin. Wikisource'ta Habsburg ve Venedik metni yok (yalnız Lehistan).

## ③ ⚠ DOĞRULANMADI
- Rusya 2 adım (ateşkes 22 Receb 1110 = 24 Ocak 1699; İstanbul 27 Muharrem 1112 = 14 Temmuz 1700; Yenikale): yalnız TDV özet aracı; metin okunmadı. Adımlarda `dogrulanmadi:true`.
- TDV'nin (özet aracıyla) verdiği «Edirne protokolü 15 Receb 1109 = 27 Ocak 1698», «müzakere 9 Cemâziyelevvel 1110 = 13 Kasım 1698» yalnız Giriş adımında «Kasım 1698» olarak geçti; gün yazılmadı. Ayrıca bir çağrıda «Lehistan 11 madde 18 Cemâziyelevvel (22 Kasım 1698)» geldi; ham metin 26 Ocak 1699 verdiği için kullanılmadı (önceden mutabakat olabilir, teyit yok).
- Habsburg md. 5 yer adları (Novi, Dubica, Jasenovac, Brod; bir ad OCR'dan seçilemedi), md. 2 Çanad/Lipova/Lugoş/Karansebeş okunuşları 1732 OCR'ına dayanır; Türkçe karşılıklar resmî metinle teyitsiz. Venedik md. 8 «Çiçlut», «Zaduara» yazımı OCR okunuşu (Çiçlut yer tablosuna konmadı).
- TDV'nin «Podolya'da Kazak hetmanlığının kaldırılması» hükmü 1732 metninde yok; yazılmadı. «Bucaş 1672 iptali» metinde adıyla geçmez — yalnız md. 11'in genel «aykırı eski hükümler geçersiz» hükmü yazıldı.

## ④ Kaynak çelişkileri (ic_not mantığı)
- Görev emrindeki «16 Cemâziyelevvel 1110» tarihi tutmuyor: TDV (özet aracı) imza = 24 Receb 1110 (26 Ocak 1699); 1732 Venedik belgesi de «24 Receb 1110» der (başlıkta OCR «14»). Cemâziyelevvel 1110 ≈ Kasım 1698 (kongre açılışı, 9 Cemâziyelevvel = 13 Kasım 1698). TDV esas: 26 Ocak 1699.
- 1732 Habsburg ve Venedik başlıklarında OCR «16th of January 1690/1609»; imza satırı ve Lehistan/Venedik metinleri «26 Ocak 1699». İmza satırı esas alındı.
- Venedik: belge 26 Ocak 1699 (Osmanlı + Habsburg/Lehistan elçileri, Venedik elçisi imzasız); Doge onayı 7 Şubat 1699 (1732 s. 322). TDV «16 maddelik Venedik antlaşması 24 Receb 1110'da imzalandı» der — onay ayrı adım olarak yazıldı.
- Süre: Habsburg md. 20 «25 yıl» (TDV ile aynı). Lehistan metni süre vermez («perpetual»); Venedik md. 16 süreyi sonraya bırakır. «Barış 25 yıl» yalnız Habsburg için yazıldı.
- 1732 çevirisi barışı «Armistice/Truce» diye çevirir (sulhnâme).

## ⑤ Koordinat güvenilirliği
Tümü kendi bilgimden, şehirler ±0.05°; ülke/bölge/nehir (Erdel, Podolya, Ukrayna, Mora, Dalmaçya, Bosna, Bačka, Maros/Tisa/Tuna/Sava/Una, Ege Adaları, Kırım, Bucak, Boğdan, Eflak) yaklaşık ODAK noktasıdır, sınır değil. `yerler-ortak.json` ile kesişen ad yok (karşılaştırılacak fark yok). Haritalar kaydıyla: Temeşvar 45.76/21.23 aynı. Kadraj [14,35.5,41,50]: Dalmaçya, Mora, Podolya, Azak'ı kapsar.

## ⑥ Şema / alan notları
- Yeni alanlar kayıt kökünde: `anahtarlar:["Karlofça Antlaşması","Karlofça"]` (kronoloji `b` başlıklarında GERÇEKTE geçen biçimler: «Karlofça Antlaşması — …», «…: …», «Karlofça — …», «Karlofça ile …»; git grep origin/main -- data) ve `onceki_t:"1683-07-14"` (II. Viyana Kuşatması'nın başlaması — `data/kronoloji_habsburg.js:275`; `data/olaylar_ek3.js` ic_not_t: TDV merzifonlu-kara-mustafa-pasa «19 Receb 1094 (14 Temmuz 1683)» + TDV viyana). `js/antlasma_oynatici.js` ve `uret_antlasma.js` şu an bu iki alanı TANIMAZ (grep boş); oynatıcı `ad` ile eşler. Tüketici kodu güncellenene kadar zararsızdır, işlenmez.
- `etki[]` YAZILMADI: Karlofça'nın haritası (`antlasma_haritalari.js`, 5 bölge) var, etki oradan türetilebilir.
- `antlasma_id` yok; ileride kronoloji maddesine bağlamak istenirse mevcut madde alanı için `antlasma_id:"karlofca-1699"` önerilir.
- Çok taraflı antlaşma: oynatıcı başlığı «md. {no}» yazdığından `no` alanı «Venedik 3», «Lehistan 11», «Rusya ateşkes», «Giriş» biçiminde string; `bolum` ikili antlaşmayı ve md. numarasını açıkça taşır. Öneri: `uret_antlasma.js` bölüm-başına numaralandırmayı (`taraf` alanı) desteklemeli; oynatıcı başlığında `bolum` kısa etiketi gösterilebilir. Aksi hâlde «Karlofça Antlaşması — md. Venedik 3» biraz tuhaf okunur.
- Rusya adımları bir ikili antlaşma değil ateşkestir; Azak noktası haritada Rus elinde kalan yer olarak işaretlenir (haritalar kaydında Rusya bölgesi yok).

## ⑦ Madde düzeyinde ikinci kaynak karşılaştırması (UMIT, 14 Kasım 2026)
İkinci kaynak: Dumont, *Corps universel diplomatique*, t. VII/2 (1731), s. 451-458 (archive.org corpsuniverseldi72dumo, djvu OCR; Latince/İtalyanca/Fransızca). Birinci kaynak: 1732 *General Collection of Treatys* IV (İngilizce). Bağımsızlık kanıtlanamaz (1732 çevirisinin dayandığı nüsha belirtilmez) ama md. 3 hetman cümlesi yalnız Dumont'ta olduğundan ortak türev de değildir.
- **Venedik giriş + md. 1-16 + Doge onayı: 18/18 UYUMLU.** Yer adı OCR şüpheleri (Zaduara = Duare/Zadvar, Çiçlut = Ciclut, Vrlika = Verlica, Vrgorac = Vergoraz, Rumeli Kalesi = Romelie) doğrulandı. Dumont md. 8'e ek ayrıntı verir (Çiçlut için yanda iki saatlik toprak); özet eksik, çelişki yok.
- **Okunmadı:** md. 11 ekinoks gününün sayısı (Dumont OCR bozuk); Doge onayının yılı (OCR «1659», «M.V.» = Venedik takvimi işareti) — 7 Şubat 1699 değeri 1732 metnine dayanır.
- **Hicrî gün:** Dumont Venedik belgesi «24 Receb 1110» (TDV ile aynı); Noradounghian'ın 20 Receb'i Habsburg kaydı içindir.
- **Lehistan giriş + md. 1-11: 10/12 UYUMLU, 2 düzeltme.** md. 2: hem Dumont («ante penultimum Bellum») hem 1732 («before the last War but one») «sondan bir önceki savaştan önce» der; önceki özet «son savaştan önceki» yazıyordu — özet HATASI düzeltildi. md. 3: Dumont Latince metninde «Ukrayna Kazak hetmanı, şimdi Boğdan'da, görevden alınır» hükmü var; 1732 çevirisinde yok (TDV özetiyle örtüşür) — özete eklendi, hakemli karar kayıt `kaynak` alanında.
- **Yapılmadı:** Habsburg md. 1-20 (Dumont s. 447-451) madde düzeyinde karşılaştırılmadı; Noradounghian madde metni okunmadı; Rusya adımları değişmedi.
- Her adımın `kaynak` alanında madde/sayfa teyidi yazılıdır (oynatıcı adım `kaynak`ını gösterir: `js/antlasma_oynatici.js` satır 223). `uret_antlasma.js` adım düzeyinde `kaynak` alanını henüz üretmez; yeniden üretimde bu alan kaybolur — üretici bir satırla genişletilmeli.
