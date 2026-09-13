# PAKET SINIFLAMASI — 201 açık madde, engeline göre

> PAKET-SINIF · 13 Eylül 2026 · 1.MURAT sevki · salt okuma (bu dosya ve `PAKET-SINIF-0913.json` dışında yazılan dosya yok, commit yok)
> Kaynak: `ClaudEmre/kutu/KUTU.md` §AÇIK MADDELER (19:17'de `ozet.py "atlas"` ile yenilendi) · her maddenin `giden/<parti>/PARTI.json` + `CEVAP.json` metni · `oturumlar/KOSU10-SONRASI.md` · `git log` · bugünkü dosyalardan yapılan ölçümler

## Emre'nin sorusunun cevabı

**Koşu engelliyor mu? 201 maddenin 125'inde hayır.** 69 madde bugün serbest dosyalarla bitirilebilir (A). 56 maddenin araştırması ve yama JSON'u şimdi hazırlanabilir, yalnız inişi koşu 10 yayınını bekler (B).
Koşunun gerçekten beklettiği: yaması hazır 20 madde (C) ve motor dosyasına dokunan 37 madde (D, koşu 11 gündemi; tasarım ve benzetim şimdi yapılabilir). 2 madde Emre'nin kararını bekliyor (E).
17 madde aslında kapanmış ama hükmü eski kalmış (F); yeniden damgalanmalı.

## Özet tablo

| sınıf | anlamı | madde | 🔵 sırada | 🟡 ölçülecek | ⏳ koşu bekliyor |
|---|---|---:|---:|---:|---:|
| **A** | ŞİMDİ YAPILABİLİR | **69** | 45 | 24 | 0 |
| **B** | ŞİMDİ HAZIRLANIR, KOŞU SONRASI İNER | **56** | 42 | 11 | 3 |
| **C** | YAMA HAZIR, KOŞUYU BEKLİYOR | **20** | 17 | 1 | 2 |
| **D** | MOTOR İŞİ | **37** | 22 | 15 | 0 |
| **E** | EMRE KARARI BEKLİYOR | **2** | 2 | 0 | 0 |
| **F** | ASLINDA KAPANMIŞ (yeniden damgalanmalı) | **17** | 16 | 1 | 0 |
| | **toplam** | **201** | 144 | 52 | 5 |

Donuk dosyalar (koşu 10 yayınına kadar): `girdi.GIRDI_DOSYALARI` (79 yerleşim dosyası) · `arac/uret_petek.py` · `arac/renkler.py` · `arac/girdi.py` · `data/devletler.js`.

⚠️ KUTU'daki 3 'karar bekliyor' maddesi (0043/H-0003 Kırım bozkırı · H-0009 Anapa · H-0019 aynı gün üç olay) bu 201'in **dışında**; KUTU açık listesi onları saymıyor.

## A · ŞİMDİ YAPILABİLİR — 69 madde, dosya sahipliğine göre paketler

Her paket tek bir işçiye verilebilir; iki paket aynı dosyaya dokunmaz. **Tek istisna A5:** A3 ile aynı dosyalara yazar, o yüzden A3'ten sonra ya da aynı işçiyle yürür.
A6 paketleri yalnız `denetim/<kendi önekli>` raporu yazar; düzeltme çıkarsa ilgili kalem B'ye geçer.
⚠️ KOSU10-SONRASI §5'e göre `olaylar_ek5 · ek7 · ek8 · ek15 · p0044` KITA 14'te; A3'ün bu dosyalara düşen maddeleri (0046/H-0001 · 0045/H-0008 · 0042/H-0010) KITA 14 bırakınca yürür.

| paket | madde |
|---|---:|
| A1 · ARAYÜZ — js/app.js · js/suzgec.js · css/ · index.html | 13 |
| A2 · EK OKUMA + GÖRSEL — data/ekokuma*.js · data/gorsel_madde.js | 11 |
| A3 · KRONOLOJİ — data/olaylar*.js · data/kronoloji*.js | 11 |
| A4 · SEFER KAYITLARI — data/savaslar.js | 6 |
| A5 · ETİKET — olaylar/kronoloji (A3 ile AYNI dosyalar → A3'ten SONRA ya da aynı işçi) | 2 |
| A6a · ARAŞTIRMA (yalnız denetim/ raporu) — Balkan · Anadolu | 12 |
| A6b · ARAŞTIRMA — Lehistan · Rus · Karadeniz | 6 |
| A6c · ARAŞTIRMA — Doğu · Arap · renk/taralı alan ölçümleri | 8 |

### A1 · ARAYÜZ — js/app.js · js/suzgec.js · css/ · index.html — 13

| madde | ne | dosya / engel | var olan yama · rapor | boyut | not |
|---|---|---|---|---|---|
| `0042/H-0003` | Yalnız toprak kazanç/kayıp maddelerini oynat ayarı | js/app.js · js/suzgec.js · index.html | — | M | Odak süzgeci önem eşiğiyle çalışıyor, 'toprak' dalı yok (suzgec.js:262 toprak→askeri). Kırılma eşleşmesi Değişmez 2'den türetilebilir. |
| `0042/H-0023` | Savra savaşı uzak zoomda işaretsiz | js/app.js (savasGuncelle eleme) | — | S | Odaktaki muharebe korunuyor ama odak dışı işaret şehir etiketine feda ediliyor (app.js:3199-3216). İstenen: her zoomda küçük çift kılıç. |
| `0042/H-0024` | Frenkyazısı uzak zoomda işaretsiz | js/app.js | — | S | H-0023 ile tek iş. |
| `0042/H-0026` | Bileca uzak zoomda işaretsiz | js/app.js | — | S | H-0023 ile tek iş. |
| `0042/H-0035` | Timur seferleri kesikli oklarla | js/app.js (ölçüm) · data/savaslar.js kayıtları var | 038e686 Seçenek B | S | B indikten sonra Timur seferlerinin görünürlüğü ekranda ölçülmedi. Hâlâ kırpılıyorsa çare sefer başı maddesi (A3). |
| `0042/H-0036` | Timur'un Anadolu'dan çekilişi oku | js/app.js (ölçüm) | 038e686 | S | H-0035 ile tek iş. |
| `0042/H-0040` | Karakoyunlu Bağdat maddesinde I. Ahmed portresi | js/app.js padisahEslesmesi (app.js:6960-6990) | — | S | Tek kelimelik ad ('Ahmed', 'Süleyman') tek ortak kelimeyle padişaha eşleşiyor (aw.length<2 → ortak≥1). Koruma yok. |
| `0042/H-0041` | Emir Süleyman'ın ölümünde Kanuni portresi | js/app.js padisahEslesmesi | — | S | H-0040 ile tek iş; çare Emir/Çelebi/Celayirli için PADISAH_OLAMAZ ya da madde vefat_id alanı. |
| `0031/H-0005` | Koyu kırmızı bölge (katman sırası) | js/app.js katman sırası | M-2104 onayı (b) | S | '(c) doğrusuydu, (b) ile 0031/H-0019 örtüldü' diye kayda yazılacak. |
| `0030/H-0001` | Bizans mavisi üstüne Osmanlı kırmızısı: koyu renk | js/app.js katman sırası | 0031/H-0005 ile aynı | S |  |
| `0027/H-0006` | Kutsal İttifak rozetleri ve bağlantı | js/app.js · yeni data/ittifaklar.js · index.html | denetim/ITTIFAK-TASARIM.md | L | data/ittifaklar.js yok (ölçüldü). Rotayı bükme (düşman toprağından dolanma) yeni fonksiyon ister. |
| `0023/H-0003` | Kutsal İttifak rozeti + tek seferlik vurgu animasyonu | js/app.js · data/ittifaklar.js · index.html | ITTIFAK-TASARIM.md | L | 0027/H-0006 ile tek iş. |
| `0021/H-0030` | Eflak seferi işareti + üç voyvodalığa ateş simgesi | js/app.js (+ birkaç kronoloji maddesi) | 4581d71 (işaret yarısı) | M | İlk iş: seferin işaretinin ekranda çıktığını doğrulamak. Madde kısmı A3 sahibine devredilir. |

### A2 · EK OKUMA + GÖRSEL — data/ekokuma*.js · data/gorsel_madde.js — 11

| madde | ne | dosya / engel | var olan yama · rapor | boyut | not |
|---|---|---|---|---|---|
| `0045/H-0007` | Savaş hikâyeleri tüm savaş maddelerinde | data/ekokuma_savas.js | 8982dfb · d4b12b6 (dalga 2: 12 kart) | L | Aday liste hazır: Otlukbeli · Rodos · Budin 1541 · Hacova · Prut · Çeşme · Nizip · Sinop · Plevne. |
| `0045/H-0009` | Antlaşma hükümleri / önem / sebep-sonuç kartları | data/ekokuma_antlasma2.js | 8982dfb | L |  |
| `0045/H-0010` | Padişah magazin/komplo kartları | data/ekokuma_magazin.js | 8982dfb | M | 'Kod sınırı' (tek madde) bugünkü ekKartBagliMi'de yok: olay/baglanti listesi okunuyor (app.js:7514). Kalan iş içerik. |
| `0045/H-0011` | Mimari üslup/teknik ek okumalar | data/ekokuma_mimari.js | 7e2cc6d (aynı gün çarpışması 22→0) | M |  |
| `0044/H-0020` | Bâkî görseli (Divan yazması vb.) | data/gorsel_madde.js | cülûsiye kartı d5a0618'de indi | S | Kamu malı görsel henüz aranmadı. |
| `0034/H-0044` | Hâfız Osman maddelerine hat örneği | data/gorsel_madde.js | — | S | gorsel_madde.js'te hat görseli yok (ölçüldü). |
| `0032/H-0009` | Topkapı Sarayı mimari/merak kartları | data/ekokuma_mimari.js | — | S | Ek okumada Yeni Saray'ın tamamlanmasıyla ilgili bir kayıt var; mimari özellik kartı yok. Kapsam okunmadı. |
| `0032/H-0010` | Sultânî altını maddesine sikke görseli | data/gorsel_madde.js | — | S | gorsel_madde.js'te yok (ölçüldü). |
| `0032/H-0013` | Tüm maddelere merak/sebep-sonuç/dış yankılar | data/ekokuma*.js | EKOKUMA_TUR 13 tür tanımlı | L | Çok dalgalı içerik fazı. |
| `0032/H-0014` | Otranto tahliyesi kartları | data/ekokuma*.js | MERAK.md kuyruğu 4. madde | S | Ek okumada Otranto kartı yok (ölçüldü). |
| `0027/H-0005` | Madde görselleri maddeyle ilgili olsun (Piri Reis · İnebahtı …) | data/gorsel_madde.js | gorsel_madde.js: Merzifonlu · II. Viyana · Preveze var | M | Piri Reis haritası, İnebahtı ve Sultanahmet açılışı dışında kalanlar aranacak. |

### A3 · KRONOLOJİ — data/olaylar*.js · data/kronoloji*.js — 11

| madde | ne | dosya / engel | var olan yama · rapor | boyut | not |
|---|---|---|---|---|---|
| `0046/H-0001` | Fizan maddesindeki iç notun ayrılması | data/olaylar_ek8.js (KITA 14'te) | denetim/YAMA-IC-NOT-0913.json · arac/ic_not_uygula.py + ic_not_duzelt.py | S | 'TDV BU SÜRECİ 1551'E BAĞLAR' cümlesi okur metninde hâlâ duruyor (1 kez, ölçüldü). ek8 metni değiştiği için yeniden eşlenmeli. |
| `0045/H-0008` | Kasım Hanlığı'na harita odağı (yer_id) | data/olaylar*.js (KITA 14'te) | denetim/YAMA-YER-ID-0913.json (36 öneri) | M | Darfur aksan düzeltmesi dahil. |
| `0042/H-0004` | Katalan seferi oku görünmüyor | data/olaylar*.js (sefer başı maddesi 1303) | OLCUM-SEFER-KIRPMA-0912.md | S | B'de Katalan kasten kırpılı kalıyor; kodun kendi yorumuna göre asıl çare seferin başına madde yazmak. |
| `0042/H-0010` | İznik medresesi maddesi fetihten önce sıralanıyor | data/olaylar_ek5.js (KITA 14'te) | — | S | Ölçüm: medrese t:1331-01-01, fetih t:1331-03-02. Kaynak gün vermiyorsa fetihten sonraki gün devralınır ve devralındığı yazılır. |
| `0039/H-0004` | 1918-1923 doğu/güney cephesi kronolojisi | yeni data/olaylar_*.js dosyası | — | L | olaylar_ok109'daki 11 madde başka bir konu. |
| `0035/H-0059` | 1425 'yeniden ilhak' başlığında Teke tekrarı | data/olaylar_ek.js:45 | — | S | Başlık hâlâ 'Aydın, Menteşe, Teke' (ölçüldü). Germiyan görünümü kısmı ayrıca canlıda ölçülecek. |
| `0035/H-0062` | Maddenin Osmanlı açısından önemi | data/olaylar*.js (hangi madde: görsel) | — | S | Editoryal; madde görselden belirlenecek. |
| `0035/H-0065` | Haritada değişiklik olmayan madde | data/olaylar*.js | — | S | Editoryal. |
| `0035/H-0090` | Savaş başlangıçları: ilan · yığınak · Eflak-Boğdan'a giriş | data/olaylar*.js (+ savaslar.js okları) | commit 591a5c6 (ok tipolojisi) | L | Tek madde değil bir sınıf. |
| `0032/H-0003` | Uzun Hasan'ın Karakoyunlu'ya son vermesinde harita yeri | data/olaylar*.js (yer_id · tarih) | — | S | TDV Temmuz 1468 diyor, veri 1468-04-01. |
| `0020/H-0013` | Ahıska'nın fethine ayrı madde (Vâdisseyl'e yapışmış) | data/olaylar*.js (+ yerleşim günü B) | — | S | Ölçüm: 1578-08 aralığında Ahıska maddesi yok; veride d:1578-08-01, Çıldır zaferi 08-09. Tarih kaynakla sınanacak; yerleşim tarafı koşu sonrası. |

### A4 · SEFER KAYITLARI — data/savaslar.js — 6

| madde | ne | dosya / engel | var olan yama · rapor | boyut | not |
|---|---|---|---|---|---|
| `0035/H-0081` | Çeşme baskını: Rus filosunun kesikli yolu | data/savaslar.js SEFERLER | — | M | Savaş işareti var (savaslar.js:247/391 tur:deniz); Baltık→Ege filo güzergâhı kaydı yok. |
| `0035/H-0093` | Napolyon'un Akka harekâtı okları | data/savaslar.js | — | S | Akkâ savunması işareti var (:151), sefer güzergâhı yok. |
| `0035/H-0094` | Vehhabî askerî hareketleri okları | data/savaslar.js | — | M | Kayıt yok (ölçüldü). |
| `0035/H-0095` | Alemdar Mustafa Paşa'nın İstanbul yürüyüşü | data/savaslar.js | — | S | Kayıt yok. |
| `0035/H-0098` | Tosun Paşa'nın Hicaz seferi | data/savaslar.js | — | S | Kayıt yok. |
| `0033/H-0018` | Yavuz'un Tebriz güzergâhı ve alınan kaleler | data/savaslar.js (+ kronoloji) | savaslar.js:686 'Tebriz seferi' var | M | Güzergâh araştırması şimdi yapılabilir; kalelerin fetih günleri yerleşime dokunursa o kısım B. |

### A5 · ETİKET — olaylar/kronoloji (A3 ile AYNI dosyalar → A3'ten SONRA ya da aynı işçi) — 2

| madde | ne | dosya / engel | var olan yama · rapor | boyut | not |
|---|---|---|---|---|---|
| `0035/H-0034` | Afet etiketleri (deprem · yangın · sel) | data/olaylar*.js · kronoloji*.js · js/suzgec.js | data/etiket_yama.js · denetim/BULGU-KONU-ETIKET.md | M | Aynı dosyalara dokunduğu için A3 ile aynı anda yürümez. |
| `0035/H-0066` | 25 başlıklı konu etiket sistemi | data/olaylar*.js · kronoloji*.js · js/suzgec.js | etiket_yama.js (6 şemsiye ölçüldü) | L |  |

### A6a · ARAŞTIRMA (yalnız denetim/ raporu) — Balkan · Anadolu — 12

| madde | ne | dosya / engel | var olan yama · rapor | boyut | not |
|---|---|---|---|---|---|
| `0042/H-0011` | Kemah Akkoyunlu'ya geçmiş mi, kaynak var mı | — (rapor denetim/) | — | S | Veri: s:akkoyunlu 1340-1401, 1402-1502. Düzeltme çıkarsa B'ye geçer. |
| `0042/H-0025` | Selanik teslimi / Ceneviz ahidnamesi: Sırp enklavı doğru mu | — | — | S |  |
| `0042/H-0027` | Vodina Üsküp'le mi, önce mi katıldı | — | Vodina yerlesimler_ok107.js d:1392-01-15 | S | Nokta artık var. Madde ve kaynak sınanacak. |
| `0042/H-0028` | Dejanoviç prensliği vassal mıydı | — (devletler.js okunur) | — | S |  |
| `0042/H-0029` | Bu tarihlerde bu enklavlar var mıydı | — | görseller pakette: H-0029-1..3.png | S | Not 'görüntü bende yok' diyordu; görseller paket klasöründe duruyor. |
| `0042/H-0031` | Canik sonrası Ordu-Ünye vassal mı doğrudan mı | — | veri: v:haciemir 1398-1402 · d:1427-06-01 | S |  |
| `0042/H-0043` | Saruhanoğulları bu tarihte var mıydı | — (devletler.js okunur) | — | S | Künye f:1313 TDV'nin reddettiği yıl. |
| `0035/H-0052` | II. Kosova'da boş toprak girip çıkıyor | — | — | S | Görselden gün ve kutu okunacak. |
| `0035/H-0070` | Solnok kaybında iki renk üst üste | — (canlı harita ölçümü) | e53c86a (taralı alan kökü) | S | Veri: d →1685-10-19, sonra avusturya. Düzeltmenin yayına girip girmediği canlıda bakılacak. |
| `0034/H-0036` | Bu bölgede yalnız kayıtlı yerleşimler mi var | — | görsel pakette | S | Görselden bölge ve tarih okunacak. |
| `0021/H-0005` | Tuna'daki iki boşluk | — | görsel pakette | S | Kutu merkezi ölçümü yetersiz; görselin iki noktası okunacak. |
| `0019/H-0050` | Canbirdi Gazâlî ileride yenilmiş: aradaki topraklar | — | sohbet ⑦: öncü kuvvet taraması HAYIR | S | Yalnız ① (ileri harekât) kısmı açık. |

### A6b · ARAŞTIRMA — Lehistan · Rus · Karadeniz — 6

| madde | ne | dosya / engel | var olan yama · rapor | boyut | not |
|---|---|---|---|---|---|
| `0042/H-0006` | Çehrin Litvanya'ya mı aitti | — | veri: litvanya-buyuk-dukalik →1569-07-01, sonra lehistan | S | Lublin'e bağlı cevap; akademik kaynak meşru. |
| `0042/H-0007` | Lehistan ile Litvanya iki ayrı devlet mi | — | — | S | MASTER — önce bu cevaplanır. |
| `0040/H-0009` | Çehrin Lehistan'a mı ait | — | — | S | H-0007'ye bağlı. |
| `0035/H-0035` | Hotin 1769-74 kara bağlantısız Rus enklavı mı | — | veri: s:rusya 1769-09-19→1774-07-21 | S |  |
| `0035/H-0077` | Ruslar Özi'ye nereden geldi | — (+ istenirse savaslar.js) | — | M |  |
| `0035/H-0080` | Ruslar Hotin'e nereden geldi | — (+ savaslar.js) | — | S | H-0035 ile birleşik. |

### A6c · ARAŞTIRMA — Doğu · Arap · renk/taralı alan ölçümleri — 8

| madde | ne | dosya / engel | var olan yama · rapor | boyut | not |
|---|---|---|---|---|---|
| `0035/H-0020` | İstanbul Mukasemenamesi (1724): Şirvan enklav şekli | — (1724-35 kesit ölçümü) | — | M | Veri tutarlı; geometri kesitte ölçülecek. Motor kusuru çıkarsa D'ye geçer. |
| `0035/H-0037` | Basra işgalinde Fâv Osmanlı'da kaldı mı | — | veri: Fâv d:1546→1914 kesintisiz | S | Kaynak: Perry, Karim Khan Zand. |
| `0035/H-0039` | Bahreyn fatihinin rengine neden boyanmıyor | — (renkler.py OKUNUR) | — | S | Önce veride o dönem var mı bakılır. |
| `0035/H-0058` | Kaheti ve Terki vassal renginde | — | — | S | Kartli-Kaheti yamasıyla ilişkili olabilir. |
| `0035/H-0063` | Bölge işgal altında görünüyor, maddesi yok | — | — | S | Görselden madde ve kutu okunacak. |
| `0035/H-0076` | Ahmed Paşa Antlaşması taralı alan tutarsızlığı | — (canlı ölçüm) | e53c86a | S | Derbend veride 1722-1735 rusya. Devir çözücüsünün düzeltmesi yayında mı bakılacak. |
| `0035/H-0088` | Osmanlı içinde farklı kırmızı ve 'Safevî' yazan bölgeler | — | — | S |  |
| `0033/H-0019` | Tebük-Medine arasında yerleşim yok mu | — | görsel pakette | S | Koridor/durak kısmı B (0035/H-0054). |

## B · ŞİMDİ HAZIRLANIR, KOŞU SONRASI İNER — 56 madde

Araştırma ve yama JSON'u bugün `denetim/` altında yazılabilir. Veriye iniş koşu 10 yayınından sonra, KOSU10-SONRASI sırasına eklenerek yapılır. 'yama' sütunu boşsa henüz yama yok.

| paket | madde |
|---|---:|
| B1 · KÜNYE + RENK — devletler.js · renkler.py (donuk) | 14 |
| B2 · İŞGAL (isg:) — yerleşim (donuk) | 4 |
| B3 · TRAKYA FETİH SIRASI — yerleşim + kronoloji | 5 |
| B4 · ANADOLU · BALKAN · FETRET verisi ve eksik noktalar | 14 |
| B5 · DOĞU · ARABİSTAN · AFRİKA | 8 |
| B6 · KUZEYDOĞU AVRUPA · BOZKIR | 3 |
| B7 · UZAK COĞRAFYADA NOKTA YOĞUNLUĞU | 7 |
| B8 · 1923 GÜNEY/DOĞU SINIR NOKTALARI | 1 |

### B1 · KÜNYE + RENK — devletler.js · renkler.py (donuk) — 14

| madde | ne | dosya / engel | var olan yama · rapor | boyut | not |
|---|---|---|---|---|---|
| `0042/H-0014` | Osmanlı kırmızısı yalnız Osmanlı'ya ayrılsın | arac/renkler.py | — | S | Mersin hayaleti veride düzeldi (bkz. 0042/H-0033); kalan renk rezervi politikası. |
| `0042/H-0038` | Karakoyunlu = Gürcistan rengi; Kars-Ardahan ayrı bölge | renkler.py · yerleşim | — | M | Renk ve veri iki ayrı çare (D024). |
| `0040/H-0004` | Mavi tonlu devlet renkleri koyulaşsın | arac/renkler.py | — | M | Deniz rengi kısmı Emre kararıyla kapandı (sohbet 10). |
| `0040/H-0005` | İlhanlı · Novgorod renkleri denize yakın | arac/renkler.py | — | S | Öncelik: novgorod > ilhanli > bosna. |
| `0039/H-0007` | 1923'te Kutsal Roma: `almanya` 962-1923 tek künye | data/devletler.js · arac/renkler.py · yerleşim | — | L | Ölçüm: devletler.js:1475 id:almanya ad 'Kutsal Roma / Almanya', bölünmemiş. Künye bölme taslağı şimdi yazılabilir. |
| `0039/H-0008` | 1923 Avusturya/Çekoslovakya/Macaristan | arac/renkler.py · data/devletler.js | — | S | avusturya-cumhuriyet künyesi var (devletler.js:4164); renkler.py'de anahtar bulunamadı. Künye günü 1918-11-12→11. |
| `0025/H-0004` | Vilnius 1561: Königsberg/Memel `almanya` anakronik | devletler.js (prusya-dukaligi · kurlandiya) · yerleşim | — | M | Veri: Königsberg almanya →1701. Tilsit/Gumbinnen/Ragnit noktaları yok (ölçüldü). |
| `0025/H-0005` | Açık yeşil Macaristan toprakları doğru mu | devletler.js · renkler.py | sohbet ⑧ | S | kraliyet-macaristani künyesine bağlı. |
| `0019/H-0007` | Gürcistan ve Karakoyunlu aynı renk | arac/renkler.py | — | S | 'Yakın ama değmeyen' çift renk_olc.py'de kurulmuyor olabilir. |
| `0019/H-0061` | Mohaç sonrası Macaristan tartışması | devletler.js (kraliyet-macaristani) · renkler.py · yerleşim | Budin yaması C · sohbet ⑧ 'açılsın' | M | Künye → renk → veri sırası. |
| `0014/H-0005` | Lehistan-Litvanya üçgeni + Kutsal Roma rengi | yerleşim · renkler.py | denetim/BULGU-OK124-POLESYA.md | M | Batı Polesya kapandı (Brest/Pinsk var), Doğu Polesya 189,6 km açık. Asıl kök: litvanya-buyuk-dukalik çekirdekte kullanılmıyor. |
| `parti-0004/H-0011` | Başkent yıldızı yalnız o tarihteki başkente | data/devletler.js (bk:[{f,t,ad}]) + js/app.js | denetim/ONGORU-BASKENT-OK106.md · EKSIK-BASKENT-TAM-LISTE-OK106.md · ARAC-BASKENT-* | L | devletler.js'te bk: kullanımı 0 (ölçüldü). Öneri JSON'u şimdi üretilebilir, app.js okuyucusu şimdi yazılabilir. |
| `parti-0002/H-0005` | Bizans gövdesi çok koyu (gölge gibi) | arac/renkler.py (açıklık tabanı kuralı) | — | S |  |
| `parti-0002/H-0011` | Söğüt · Bursa · Edirne · İstanbul aynı anda yıldızlı olmasın | devletler.js (bk:) + app.js | H-0011 ile aynı | S |  |

### B2 · İŞGAL (isg:) — yerleşim (donuk) — 4

| madde | ne | dosya / engel | var olan yama · rapor | boyut | not |
|---|---|---|---|---|---|
| `0039/H-0003` | Sakarya-Büyük Taarruz gün be gün ilerleme | yerleşim (isg:) + kronoloji | — | L | H-0005'ten sonra. |
| `0039/H-0005` | Yunan/İtalyan işgal alanları taralı | yerleşim (isg:) | — | L | Ölçüm: 1919-22 isg kayıtları 14 tane, hepsi Fransız veya İngiliz (Güney/Kilikya); Yunan 0 · İtalyan 0. Kaynak araştırması şimdi. |
| `0035/H-0092` | Napolyon'un Mısır işgali taralı alanları | yerleşim (isg:) | — | M | Kahire · Süveyş · Sina güneyi isg 1798 var; Feyyum vb. yok (ölçüldü). Akkâ yazılmaz. |
| `0035/H-0100` | Bükreş sonrası boş Rus enklavı; Rusçuk boyanmamış | yerleşim (isg:) | — | M | Rusçuk isg 1810-09-26 indi; Silistre ve diğer Tuna kaleleri yok. Kural kısmı 0035/H-0097'de (E). |

### B3 · TRAKYA FETİH SIRASI — yerleşim + kronoloji — 5

| madde | ne | dosya / engel | var olan yama · rapor | boyut | not |
|---|---|---|---|---|---|
| `0042/H-0018` | Pençik Kanunu: Trakya fetih sırası (18 yerleşim) | yerleşim (d: günleri) + kronoloji | CEVAP 0030/H-0009 (10 yuvarlak gün, ~107 yerleşim) | L | Kaynak araştırması şimdi, yerleşim günleri koşu sonrası; maddeler (serbest) yerleşimle birlikte iner (Değişmez 2). |
| `0042/H-0019` | Gümülcine · Uzunköprü · Meriç · Dedeağaç · Enez · Çirmen sırası | yerleşim + kronoloji | — | M | H-0018 ile tek iş. |
| `0042/H-0021` | Çirmen sonrası toprak Osmanlı görünüyor | yerleşim + kronoloji | — | S | Değişmez 2 kovası sorulacak. |
| `0030/H-0009` | Pençik'te büyük toprak; 1361 yığını | yerleşim + kronoloji | — | L | 1361-01-01'de 12 yerleşim. |
| `0025/H-0009` | Dimetoka … alınmadan Edirne ve kuzeyi alınmış | yerleşim + kronoloji | — | S | Aynı yığın. |

### B4 · ANADOLU · BALKAN · FETRET verisi ve eksik noktalar — 14

| madde | ne | dosya / engel | var olan yama · rapor | boyut | not |
|---|---|---|---|---|---|
| `0044/H-0002` | Mohaç sonrası yerleşimsiz parça (Debrecen) | yerlesimler_kdmacar.js | denetim/YAMA-KITA19-DEBRECEN-K-ETIKET-0913.json · OLCUM-KITA19-MACARISTAN-0913.md | S | Yama var ama Erdel · Varad · Debrecen 1526-1529 TDV sorgusu açık (M-3678). Veri: Debrecen v:1526-08-29. |
| `0042/H-0022` | Bizans'ın Osmanlı yarı-tâbiliği açık tonla | yerleşim (statu:haraçgüzâr) + app.js renk | STATU_YAZI app.js:693 hazır | M | Emre kararı var. Veride statu değerleri: vassal 421 · özerk 3 · haraçgüzâr 0 (ölçüldü). 1373/1379/1391-94/1403/1424 pencereleri kaynaktan. |
| `0042/H-0030` | Timur Bağdat'ı zaptetmeden önce Timurlu enklavı | yerlesimler.js (Bağdat) | — | S | Veri iki ayrı Timurlu dönemi taşıyor (1393-1394 · 1401-1405) ama ilki 1393-01-01'de başlıyor; madde 1393-08-29 ⇒ ~8 ay erken. |
| `0042/H-0032` | Timur Bağdat'ı iki kez aldı: gösterim | yerlesimler.js (Bağdat) | — | S | H-0030 ile tek iş. İkinci işgalin günü de madde ile sınanacak. |
| `0042/H-0034` | Fetret'te Pirot (Şehirköy) Osmanlı kırmızısı | yerlesimler_serhat.js | — | S | Veri: d:1386-01-01→1413-07-05 kesintisiz; Silistre emsalinde suleyman-celebi/musa-celebi dönemleri var. Mükerrer anahtar değil (tarama 0). |
| `0042/H-0037` | Ankara'nın Emir Süleyman'a geçişi ne zaman | yerlesimler.js (Ankara) | — | S | Veri: timurlu 1402-07-28→1404-03-01 · suleyman-celebi 1404-03-01 (yuvarlak ay). |
| `0042/H-0042` | Çamurlu: Pirot etrafı enklav | yerlesimler_serhat.js | — | S | H-0034 ile tek iş. |
| `0032/H-0016` | Bug-Dinyester (Yedisan) boşluğu 1493 | yerleşim (yeni nokta) | — | M | Kutuda 0 nokta, en yakını 143 km. |
| `0031/H-0019` | Germiyanoğulları eğri planda | yerleşim (nokta/boşluk beyanı) | — | S | Emilme kümesi; tek tek ölçülmedi. |
| `0030/H-0004` | Ordu peteğinin sivri ucu (Eretna) | yerleşim (yeni nokta) | — | M | Mesudiye · Reşadiye · Koyulhisar yok (ölçüldü). |
| `0030/H-0018` | Dulkadir teal üçgeni (1392) | yerleşim (yeni nokta) | — | M | Malatya var; Besni · Göksun · Andırın · Kadirli yok (ölçüldü). |
| `0017/H-0001` | Dulkadir'in Kayseri tarafında üçgen | yerleşim (yeni nokta) | — | M | Pınarbaşı · Sarız · Gürün yok; Darende var (yerlesimler_ok110.js). |
| `0016/H-0002` | Bu yapı hata mı | yerleşim | — | S | Emilme kümesi; tek tek ölçülmedi. |
| `0008/H-0001` | Germiyan-Sahibata kademeli yutma | yerleşim | — | M | sahibata 1281-1341 tek dönem. |

### B5 · DOĞU · ARABİSTAN · AFRİKA — 8

| madde | ne | dosya / engel | var olan yama · rapor | boyut | not |
|---|---|---|---|---|---|
| `0045/H-0012` | Fizan ile kıyı arasındaki boşluk | yerleşim (kasıtlı boşluk dolgu noktası) | denetim/OLCUM-KITA16-FIZANBOSLUK-0913.md · KOSU10-SONRASI §3.11 | S |  |
| `0035/H-0053` | Yavuz: Süveyş/Kusayr Kahire'den önce mi | yerleşim (d: günü) | — | M | Hepsi 1517-01-22 (Kahire günü). |
| `0035/H-0054` | Hicaz yolunda durak/yerleşim yok mu | yerleşim (durak noktaları) · koridor ağı | BES-ALTYAPI.md 5. unsur | M |  |
| `0035/H-0055` | Tebük-Yenbu-Medine yolu ve durakları | yerleşim · koridor ağı | BES-ALTYAPI.md | M |  |
| `0035/H-0079` | Hâil ve Nefud'un Vehhabî boyanması | yerleşim | — | S | Diriyye noktası artık var (yerlesimler.js:728). Hâil veride sammar 1836'dan, öncesi devletsiz. |
| `0024/H-0005` | Basra'yı çaprazlayan Safevî dili (1703) | yerleşim (dolgu noktası) | — | S | Zübeyr / Ümmü Kasr kaydı yok. İki uç ölçülür (§3.5.1). |
| `0021/H-0010` | IV. Murad Bağdat'ı alırken Erbil · Kerkük · Samerra · Tikrit | yerlesimler.js | — | M | Veri: Erbil ve Kerkük d:1638-12-25, Bağdat 12-24. Günlerin kaynağı sınanacak (atlas referans değil). |
| `parti-0006/H-0001` | Katif güneybatısında Safevî; Hürmüz'de Portekiz | yerleşim | oturumlar/CAPRAZ-IBERYA-ILERLEME.md (7 karar kalemi) | M |  |

### B6 · KUZEYDOĞU AVRUPA · BOZKIR — 3

| madde | ne | dosya / engel | var olan yama · rapor | boyut | not |
|---|---|---|---|---|---|
| `0035/H-0013` | Prut sonrası Azak ve Taygan | yerlesimler_h2_rusya.js (Taganrog) | — | S | Not 'Taygan noktası yok' diyordu; nokta var. Ama 1711-07-21→1739 `kirim` yazılı: Osmanlı mı Kırım mı, kaynakla sınanacak. |
| `0024/H-0008` | St. Petersburg 1703: İngriya tek petek | yerleşim (Nyen · Koporye · İvangorod) | — | M | Üçü de yok (ölçüldü). |
| `0022/H-0005` | Yedisan/Kıpçak/Kuban bozkırları 1678 kime ait | yerleşim | — | L | Bozkır kayıtlarının s: dönemleri kaba; kaynak oturumu. |

### B7 · UZAK COĞRAFYADA NOKTA YOĞUNLUĞU — 7

| madde | ne | dosya / engel | var olan yama · rapor | boyut | not |
|---|---|---|---|---|---|
| `0033/H-0006` | Çağatay'ın yuvarlak alanları | yerleşim (yeni nokta) | — | M | Kayıt yoksa dokunulmaz (Emre kuralı). |
| `0033/H-0007` | Kazak Hanlığı yuvarlak alanları | yerleşim | — | M |  |
| `0033/H-0008` | Sibir Hanlığı | yerleşim | denetim/BULGU-SIBIRYA-0903.md · SIBIRYA-0903-adaylar.json | M | Aday listesi var. |
| `0033/H-0009` | Nogay-Buhara arası boş şerit | yerleşim | — | M |  |
| `0033/H-0010` | Kandehar pergel görünümü | yerleşim | — | S |  |
| `0033/H-0013` | Songhay güneybatısındaki küçük boyama | yerleşim | — | S | Kume ataması; tek tek ölçülmedi. |
| `0033/H-0014` | Kanem-Bornu kopuk parçalar | yerleşim | — | M | Yalnız 2 nokta, arası ~500 km. |

### B8 · 1923 GÜNEY/DOĞU SINIR NOKTALARI — 1

| madde | ne | dosya / engel | var olan yama · rapor | boyut | not |
|---|---|---|---|---|---|
| `0039/H-0002` | Suriye · Irak · Ermenistan · Gürcistan · İran sınırı | yerleşim (sınır nokta çiftleri) | denetim/BULGU-SINIR-GUNEY-OK109.md | L | yerlesimler_sinir_guney.js boş; Hatay 139 km varsayım dışı. |

## C · YAMA HAZIR, KOŞUYU BEKLİYOR — 20 madde

Yalnız uygulanmayı bekliyor; sıra KOSU10-SONRASI.md §1-§3'te. İki madde (0042/H-0001 · H-0033) için veri zaten indi, yalnız yayın teyidi bekleniyor.

| madde | ne | dosya / engel | var olan yama · rapor | boyut | not |
|---|---|---|---|---|---|
| `0047/H-0001` | Ferhat Paşa sonrası Kasr-ı Şirin · Zencan · Merivan … kimde | yerlesimler*.js · YAMA-FERHATPASA-BIRLESIK-0913.json | denetim/YAMA-FERHATPASA-BIRLESIK-0913.json (25 kalem) · OLCUM-0047-FERHATPASA-BATI-0913.md | M | §5-0: komşudan devralınan günler uygulanmadan önce tek tek sınanır. |
| `0046/H-0007` | Revan alınırken Gümrü ve Eçmiyazin | yerlesimler*.js · YAMA-FERHATPASA-BIRLESIK-0913.json | YAMA-FERHATPASA-BIRLESIK-0913.json G-REVAN · G-ECMIYADZIN · G-GUMRU | S | Veride Gümrü hiç Osmanlı değil. KITA 14'ün 1583-09-13 maddesiyle birlikte iner (Değişmez 2). |
| `0046/H-0010b` | Nahçıvan/Ordubad ile Şerur · Maku · Çaldıran · Başkale | yerlesimler*.js · YAMA-FERHATPASA-BIRLESIK-0913.json | YAMA-KITA29-FERHATPASA-0913.json · BIRLESIK · YAMA-KITA13-VAN-0913.json | M | Nahçıvan 1586 kalemi BEKLET durumunda. 69f110c sürümü kullanılacak (KOSU10-SONRASI §1.3). |
| `0046/H-0012` | Ferhat Paşa: Çaldıran · Başkale · Gümrü · Eçmiyazin · Maku · Şerur · Merend · Selmas | yerlesimler*.js · YAMA-FERHATPASA-BIRLESIK-0913.json | YAMA-FERHATPASA-BIRLESIK-0913.json | M | 13 Eylül kararları işlendi. |
| `0044/H-0004` | Mohaç sonrası Macaristan himayesi gösterimi | yerlesimler.js (Budin) | YAMA-KITA19-BUDIN-1529-HIMAYE-0913.json · arayüz 8e14a50 + 26b336a | S | Şerit kodu indi. Budin veride hâlâ v:1526-09-01; yama 1529'a çekiyor. İndikten sonra Emre gözle bakacak. |
| `0044/H-0012` | Van fethi öncesi/sonrası; Çaldıran ve Başkale | yerleşim girdi dosyaları | denetim/YAMA-KITA13-VAN-0913.json (önce A, sonra B) | S | Veride Çaldıran/Başkale hâlâ d:1639-05-17 başlıyor (ölçüldü). Kotur/Bargiri için ek iş yok. |
| `0043/H-0010` | Gürcistan üçe bölündü ama iki parça görünüyor | data/devletler.js · arac/renkler.py · yerleşim | denetim/YAMA-KARTLI-KAHETI-0912.json | M | Tiflis ve Zagem veride hâlâ `gurcistan` 1281-1801 (ölçüldü). |
| `0043/H-0015` | Cizre çevresindeki boşluk | data/devletler.js · yerlesimler_ok107.js | denetim/YAMA-CIZRE-BOHTAN-0913.json | S | Veride 1508-1515 bos:veri-yok duruyor; çare künye. |
| `0042/H-0001` | Söğüt-Domaniç bağlantısı (Bozüyük · Pazaryeri) | — (veri indi) | 7c7e80d | S | Veri 10 Eylül'de indi, koşu 10 girdisinde. Yalnız yayın bekleniyor; yayından sonra F. |
| `0042/H-0033` | Fetret devrinde Mersin'de anlamsız kırmızı | — (veri indi) | Mersin yerlesimler_ek27.js kur/d 1671 · mükerrer anahtar taraması 0/79 dosya (bugün koşuldu) | S | Hayalet veride yok. Canlı yayında teyit edilince F. |
| `0038/H-0005` | Eçmiyazin ve Gümrü Safevî enklavı | yerlesimler*.js · YAMA-FERHATPASA-BIRLESIK-0913.json | BIRLESIK G-GUMRU · G-ECMIYADZIN | S | Emre 2 Eylül: çıkarım işaretli yazılsın. 13 Eylül: örtülü Osmanlı. |
| `0038/H-0006` | Aradaki koridor ve enklavlar Osmanlı mı | yerlesimler*.js · YAMA-FERHATPASA-BIRLESIK-0913.json | BIRLESIK (eski data/yer_yama_ferhatpasa.js yerine geçti) | M | Kutaisi 1490 madde borcu notta duruyor; ayrıca bakılmalı. |
| `0038/H-0007` | Kasr-ı Şirin Osmanlıya geçmiş olmalı | yerlesimler*.js · YAMA-FERHATPASA-BIRLESIK-0913.json | BIRLESIK · denetim/BULGU-KASR-I-SIRIN-ZINCIRI-0911.md | S | Veride Kasr-ı Şirin d: yalnız 1723-1730 (ölçüldü). |
| `0034/H-0023` | Tiflis/Gence kaybı sonrası Gürcistan mı İran mı | devletler.js · yerleşim | YAMA-KARTLI-KAHETI-0912.json | S | 'Gürcistan tek kimlik' kökünden. |
| `0033/H-0017` | Tiflis bölgesi Kafkasları nasıl aşıyor | devletler.js · renkler.py (künye) · uret_petek.py (dağ) | YAMA-KARTLI-KAHETI-0912.json | M | Künye kısmının yaması hazır; Samtskhe künyesi yok. Dağ aşma kısmı D (sürtünme). |
| `0025/H-0001` | 1711 Gürcistan iki kopuk parça | devletler.js · yerleşim | YAMA-KARTLI-KAHETI-0912.json | S | Kutaisi zaten `imereti` (ölçüldü); kalan Tiflis ve Zagem. |
| `0021/H-0027` | Tebriz alınmış, Van'ın doğusu alınmamış mı | yerlesimler*.js · YAMA-FERHATPASA-BIRLESIK-0913.json | BIRLESIK | S |  |
| `0021/H-0028` | Ferhat Paşa: Yüksekova → Merivan 21 şehir | yerlesimler*.js · YAMA-FERHATPASA-BIRLESIK-0913.json | BIRLESIK · YAMA-FERHATPASA-SEHIR-MATRISI-0913.json | M |  |
| `0020/H-0012` | Ferhat Paşa sınırları hatalı | yerlesimler*.js · YAMA-FERHATPASA-BIRLESIK-0913.json · data/hukuki_sinirlar.js (serbest, indi) | BIRLESIK · 3ab8adb (sınır çizgisi köşeleri) | M | Belgeli çizgi indi; yerleşim tarafı koşuyu bekliyor. |
| `0020/H-0014` | Doğu seferi ilerlemesi; Hemedan · Zencan · Sultaniye | yerlesimler*.js · YAMA-FERHATPASA-BIRLESIK-0913.json | BIRLESIK (Hemedan + Burucird Safevî kararı) | M |  |

## D · MOTOR İŞİ — 37 madde

`uret_petek.py` / kara maskesi / algoritma. Kod koşu sırasında donuk; tasarım, benzetim ve ölçüm şimdi yapılabilir. Kök gruplar: boğaz maskesi (0002/H-0014 · 0008/H-0005 · 0016/H-0004 · H-0005 · 0019/H-0018 · H-0019 · 0031/H-0022 · 0030/H-0002 · 0042/H-0009 · H-0015) · B görünümü / boşluk-binme (0041/H-0001 · 0042/H-0002 · H-0008 · H-0013 · H-0039 · 0040/H-0001 · H-0003) · sürtünme (0042/H-0005 · H-0012 · 0040/H-0002 · H-0007) · çöl/girinti (0035/H-0047 · H-0102 · 0034/H-0028 · 0012/H-0001 · 0038/H-0003 · H-0004) · kıyı/dikiş (0020/H-0005 · 0029/H-0007 · 0028/H-0007 · 0031/H-0002 · 0035/H-0072 · H-0101 · 0042/H-0016 · 0044/H-0011 · 0043/H-0017) · yol katmanı (0035/H-0087).

| madde | ne | dosya / engel | var olan yama · rapor | boyut | not |
|---|---|---|---|---|---|
| `0044/H-0011` | Basra kıyısında ışınsal bozulma | arac/uret_petek.py (+ dolgu noktası) | denetim/OLCUM-KITA16-GORUNTU-0913.md | M | Sebep adayları: yarıçap tavanı, Chaikin, kendini kesen poligon. Motor koşusu olmadan ölçülemedi. |
| `0043/H-0017` | Yıldız/kirpi deseni (Mısır batı çölü · Libya) | uret_petek.py | CEVAP notu (Berka hinterlandı 169 km) | M | Ⓑ enklav/koridor işine bağlı. |
| `0042/H-0002` | Boşluk ve üst üste binme — MASTER (10 görsel) | uret_petek.py (TAVAN_KM · kırpma) | 0041/H-0001 ile tek karar | L | İki kusurun çaresi ters: boşluk paylaştırma ister, binme kırpma ister (D024). |
| `0042/H-0005` | Tuna'da sürtünme var mı + Bulgaristan/Eflak akademik sınırları | uret_petek.py | CEVAP notu (_kv_dijkstra :2236 · :2396) | L | Akademik harita araştırması şimdi yapılabilir (A6'ya eklenebilir). |
| `0042/H-0008` | Üst üste binme kolu | uret_petek.py | — | M |  |
| `0042/H-0009` | Pelekanon sonrası Boğaz'ın ötesine geçiş | uret_petek.py · veri-kaynak kara maskesi | 0016/H-0004 notu (Boğaz maskede kesilmemiş) | M | uret_petek.py'de boğaz kesiği yok (bugün grep ile bakıldı). |
| `0042/H-0012` | Kafkaslarda sürtünme; Vladikafkas'ın ötesi | uret_petek.py | — | L | 'Vladikafkas'ın üstü doğru mu' kısmı veri araştırması. |
| `0042/H-0013` | Binme/boşluk örnekleri | uret_petek.py | H-0002 ile aynı | S |  |
| `0042/H-0015` | Çimpe'nin etki alanı Saroz'un kuzeyine taşmış | uret_petek.py · kara maskesi | 0016/H-0004 notu | M |  |
| `0042/H-0016` | Ege adalarının kıyı oturması | uret_petek.py (ADA KURALI · kıyı kesimi) | — | M |  |
| `0042/H-0039` | Mardin/Artuklu'da kıvrılmış çapraz renkler | uret_petek.py / çizim | — | M | Önce is_valid ölçülmeli; çizim kusuru çıkarsa app.js'e düşer. |
| `0041/H-0001` | B görünümü: enklav birleştirme · koridor sığlaştırma · boşluk paylaştırma | uret_petek.py | KOSU10-SONRASI §6 Ⓐ/Ⓑ | L | Külliyatın en büyük tek maddesi; koşu 11 gündemi. |
| `0040/H-0001` | Çizgiler, örtüşmeyen ve aralık kalan yapılar | uret_petek.py | — | L | Küme A master grubu. |
| `0040/H-0002` | Tallinn peteği denizi geçmiş | uret_petek.py | — | M | Deniz aşırı kapısı. |
| `0040/H-0003` | Boşluk kalan yerler | uret_petek.py (TAVAN_KM 200) | — | S | Çoğu tasarım gereği; B görünümüne bağlı. |
| `0040/H-0007` | Aral Gölü kenarı oturmuyor | uret_petek.py · veri-kaynak göl maskesi | — | M | Modern (kurumuş) Aral maskesi anakronik olabilir. |
| `0038/H-0003` | Gat enklavının kavisli birleşmesi | uret_petek.py (_b2_enklav_birlestir) | — | L |  |
| `0038/H-0004` | Girinti dolguları bağlandığı katmanın renginde olsun | uret_petek.py | — | M | Köprü rengi hep 'doğrudan' yazılıyor. |
| `0035/H-0047` | Boş arazilerin boyanması + girinti yumuşatma | uret_petek.py | — | L | Emre 2 Eylül: Ⓐ maliyet işi beklenecek. |
| `0035/H-0072` | Sınırlarda örtüşmeme (Nystad) | uret_petek.py (T-kavşak dikişi) | — | M |  |
| `0035/H-0087` | Yol ağı ve katmanlı harita tasarımı | uret_petek.py + yeni katman (BES-ALTYAPI 5. unsur) | BES-ALTYAPI.md | L |  |
| `0035/H-0101` | Üçgen: sınır örtüşmemesi ve binme | uret_petek.py (Chaikin dikişi) | — | M |  |
| `0035/H-0102` | Anlamsız boş topraklarda Osmanlı kırmızısı | uret_petek.py | H-0047 ile aynı | S |  |
| `0034/H-0028` | Sahra'da fazladan boyanan yerler | uret_petek.py | Emre kararı ㉔(b): maliyet-mesafe işini bekle | M |  |
| `0031/H-0002` | Kıyı renk örtüşme kalitesi | uret_petek.py | — | M |  |
| `0031/H-0022` | Boğazkesen (Rumeli Hisarı) öncesinde toprak geçmiş görünüyor | uret_petek.py · kara maskesi | 0016/H-0004 notu | S | Rumeli Hisarı kaydı doğru (kur 1452-08-31, ölçüldü). Taşma boğaz maskesinden. |
| `0030/H-0002` | Pelekanon: Boğaz'ı geçiş + küçük hata + koyu kırmızı | uret_petek.py · kara maskesi (+ app.js katman sırası) | denetim/BULGU-RUMELI-0030.js | M | Koyu kırmızı kısmı A1'deki 0031/H-0005 ile aynı çare. |
| `0029/H-0007` | Kıyı örtüşmezlikleri (Osmanlı çekirdeği, 6. kalite) | uret_petek.py | — | M | MOTOR EPOK sevki okunmamış; yeniden sevk edilmeli. |
| `0028/H-0007` | Kuzey Afrika'daki bozuk görünümler | uret_petek.py | — | M |  |
| `0020/H-0005` | Malta kıyı örtüşmesi | uret_petek.py (KARA_TOL · SADE_TOL) | Z-0015 inceltme reçetesi | M | Kabul edilmiş borç. |
| `0019/H-0018` | Anadolu Hisarı: bölge boğazı geçmesin | kara maskesi · uret_petek.py | 0016/H-0004 notu | M | Sıra: önce maske, sonra hisar tarihleri. |
| `0019/H-0019` | Rumeli Hisarı tamamlanınca Avrupa yakası | kara maskesi · uret_petek.py | — | S | H-0018'e bağlı. |
| `0016/H-0004` | Kilitbahir'in karşısındaki toprak | veri-kaynak kara maskesi · uret_petek.py | CEVAP notu (Boğaz bileşeni #1762) | M | İki boğaz da maskede kesilmemiş. |
| `0016/H-0005` | Çimpe sonrası Saroz'un kuzeyi | kara maskesi · uret_petek.py | — | S |  |
| `0012/H-0001` | Girintileri yumuşatma (çöl 200 km) | uret_petek.py | M-2104 onayı: (a) enklav doldurma | M |  |
| `0008/H-0005` | Petekler deniz ötesine geçmesin (Çimpe) | uret_petek.py (sürtünme: deniz sonsuz) | ALTYAPI.md kuralı | L | Çimpe/Gelibolu doğrulama sınavı olarak kayıtlı. |
| `parti-0002/H-0014` | Gelibolu alınınca Saroz'un kuzeyi | kara maskesi · uret_petek.py | — | S | 0016/H-0004 ile aynı kök. |

## E · EMRE KARARI BEKLİYOR — 2 madde

Açık karar soruları aşağıda, 'not' sütununda tek cümle.

| madde | ne | dosya / engel | var olan yama · rapor | boyut | not |
|---|---|---|---|---|---|
| `0035/H-0030` | Ek okumalar akordeon mu, küçük pencere mi | js/app.js | — | M | SORU: ek okuma satırları madde kutusunda akordeon gibi mi açılsın, ayrı küçük pencerede mi? (Emre 'istişare edelim' demişti; bugün düğme + kart var.) |
| `0035/H-0097` | Rusçuk taralı mı düz mü: taralı gösterim ne zaman | yerleşim (isg) + app.js | — | M | SORU: taralı desen yalnız İŞGAL için mi kullanılsın, antlaşma devri için de mi? Ölçüm: Rusçuk isg 1810-09-26 artık var; Silistre · İsmail · Bender · Kili · Vidin … hâlâ yok. Veri kısmı B. |

## F · ASLINDA KAPANMIŞ (yeniden damgalanmalı) — 17 madde

CEVAP.json hükmü eski. Kanıtı 'yama · rapor' sütununda; koordinatör yeniden damgalamalı.

| madde | ne | dosya / engel | var olan yama · rapor | boyut | not |
|---|---|---|---|---|---|
| `0046/H-0010` | Osmanlı ekonomisi ek okumaları + eksik kaime maddesi | — | d5a0618 (5 kart) · 158a32b (kaime maddesi) | S | Notun 'tek eksik madde sırada' dediği kaime maddesi 158a32b ile indi. Osmanlı Bankası 1856 için 'dayanak bulunamadı' notu kalır. |
| `0045/H-0002` | Mimari görseller; Mostar + Mihrimah bağlantısı | — | c4a9ab2 · 7e2cc6d · data/gorsel_madde.js:582 ve :600 | S | Not 'Mostar ve Mihrimah henüz bağlanmadı' diyordu. 7e2cc6d başlık ayırıcıyı indirdi, iki görsel de kendi başlığına bağlı. |
| `0043/H-0001` | Sefer okları kesikli gösterilsin (çapa kararı) | — | 038e686 SEFER OKU SEÇENEK B · denetim/OLCUM-SEFER-KIRPMA-0912.md | S | Not 'kararı sen vereceksin' diyordu. Ölçüm Seçenek B'yi seçtirdi ve indi: Mısır 43→167 gün, Çaldıran 108→190 gün. Emre'nin gözle teyidi istenmeli; Mora'nın hangi kayıt olduğu belirsiz. |
| `0040/H-0008` | Haritadaki çizgiler ne, kapatma düğmesi | — | index.html:75-79 '⑥ Motor tanı hatları' (varsayılan kapalı) | S | Katman bu maddeye atıfla eklenmiş (4 Eylül). |
| `0039/H-0001` | 1923 Türkiye Trakya sınırı | — | d333096 (Trakya sınır şeridi, 16 nokta) · denetim/BULGU-SINIR-TRAKYA.md · BULGU-OK109-TRAKYA.md | S | Not 'kol teslim edilmedi' diyordu; OK109 bunu çürüttü (hattın %83'ü ≤5 km). Drama/Kavala enklavı ayrıca gözle teyit edilmeli. |
| `0035/H-0015` | Bahreyn maddesindeki editoryal not | — | data/olaylar_ek13.js:301 (not ic_not_d alanına taşınmış) | S | Okur metninde not yok. |
| `0034/H-0022` | Eksik 7 ek okuma türü tanımlansın | — | js/app.js:7579-7585 EKOKUMA_TUR | S | Yedi tür (tartışma · teknik-bilimsel · kimdir · dış yankılar · kahramanlık · menkıbe · şok haber) tanımlı. Kalan içerik işi A2 paketinde. |
| `0034/H-0040` | Tüm maddeleri ek okumalarla donatan yapı | — | js/app.js:7525-7596 · 8982dfb (kart dağıtımı) | S | H-0022 ile aynı karar; yapı kurulu. İçerik üretimi A2 paketinde sürüyor. |
| `0033/H-0015` | Nusaybin · Derik · Silopi kronoloji maddesi | — | data/olaylar_ok107.js:46 (index.html'de bağlı) | S | Madde var. 'Enklav görünümü' kısmına gözle bakılabilir. |
| `0032/H-0002` | Karakoyunlu çöküşü: odak ve renk | — | sohbet 3 | S | Yer TDV'ye sadık (Bingöl-Kiğı), çevresi gerçekten Akkoyunlu. Hüküm: kusur değil. |
| `0030/H-0006` | Panel düğmesi gideceği durumu yazsın | — | js/app.js:8075 · sohbet 4 'UYGULANDI' | S | CEVAP.json hâlâ 'sirada' diyor. |
| `0030/H-0013` | Selanik-Üsküp arasında Vardar boğumu | — | data/yerlesimler_ok107.js: Köprülü · İştip · Ustrumca · Doyran · Gevgili · Kılkış · Vodina · Karaferye · Yenice-i Vardar | S | Notun 'kayıt yok' dediği dokuz noktanın dokuzu da inmiş. Canlıda gözle teyit edilmeli. |
| `0030/H-0014` | Yabancı haber önem ayarı / her devlet için tutarlı bakış | — | önem ekseni + odak süzgeci: index.html:300-370 · js/suzgec.js · sohbet 2 | M | Odak devlet seçici ve süzgeç indi. 'Dünyada olup kronolojide görünmeyen olaylar' derlemesi ayrı bir içerik işi olarak kalır. |
| `0019/H-0081` | Deniz/göl rengi açılsın mı | — | sohbet 10 (10 Eylül) | S | Emre: 'hayır hiçbir şey yapma böyle kalsın' (#bcd6e6). |
| `0016/H-0003` | Tuz Gölü kıyısı 6. kalite | — | sohbet 11 (koordinatör 11 Eylül) | S | Göller NE poligonundan olduğu gibi kesiliyor, 'işlem gerekmiyor'. |
| `0014/H-0004` | Aral/Baykal kıyısı 4. kalite | — | sohbet 12 | S | Sohbet 11 ile aynı cevap. Aral'ın 1960 sonrası küçülmesi ayrı bilgi kalemi (0040/H-0007, D). |
| `0012/H-0002` | İlginç girintiler | — | sohbet 14 | S | Koordinatör: gözlem raporuydu, yapılacak iş yok, kapatıldı. |

## Yöntem ve sınırlar

- Her maddenin tam istek metni ve CEVAP notu okundu. Notlardaki 'eksik / yok / uygulanmadı' iddiaları bugünkü dosyalarda ölçüldü: 80 yerleşim dosyası node ile yüklendi (3821 kayıt), `app.js`, `index.html`, `gorsel_madde.js`, `ekokuma*.js`, `savaslar.js`, `devletler.js`, `denetim/SINAV-KOSU8-MUKERRERANAHTAR-0907.py` (0 mükerrer). F kalemlerinin hepsi bu ölçümlere ya da kapanmış sohbet kayıtlarına (`kutu/durum.json`) dayanıyor.
- **Ölçülmeyenler:** canlı harita (tarayıcı açılmadı) — sefer okları, uzak zoom işaretleri, Vardar boğumu, Trakya/Drama enklavı ekranda görülmedi. `renkler.py` BOYALAR anahtar biçimi betikle okunamadı, renk varlıkları CEVAP notlarından alındı. 'Küme ataması' diye işaretli eski notlarda (0031/H-0019 · 0016/H-0002 · 0033/H-0013) kusurun gerçekliği tek tek ölçülmedi.
- Boyut: S ≈ birkaç kayıt / bir oturumun bir kısmı · M ≈ bir oturum · L ≈ çok oturumlu.
- Paket numarası çakışması: 0046'da 'H-0010' iki maddeye verilmiş; CEVAP'taki 'H-0010b' (Nahçıvan) ayrı sayıldı.
