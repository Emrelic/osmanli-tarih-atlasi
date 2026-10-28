# BOZKIR (Orta Asya + Avrasya bozkırı) — rapor

Yazar: alt ajan, bu oturumda HİÇ web sayfası açılmadı (WebSearch/WebFetch kullanılmadı). Bütün kayıtlar
`dogrulama: "taslak"`; `kaynak` alanındaki girişler "aday kaynak, açılmadı" etiketlidir (uydurma künye yok,
yalnız gerçek yayınların adı). Metinlerde Türkçe karakter yok (ASCII yazıldı) — ana oturum düzeltmeli.

## ① Sayılar
| Dilim | Kayıt | okundu / taslak | eksik | var | var-f-t-farkli | var-kisa |
|---|---|---|---|---|---|---|
| A (MÖ 12000–3001) | 0 | 0/0 | 0 | 0 | 0 | 0 |
| B (MÖ 3000–501) | 8 | 0/8 | 8 | 0 | 0 | 0 |
| C (MÖ 500–MS 499) | 41 | 0/41 | 31 | 7 | 1 | 2 |
| D (MS 500–999) | 34 | 0/34 | 14 | 19 | 1 | 0 |
| E (MS 1000–1280) | 14 | 0/14 | 4 | 7 | 3 | 0 |
| Toplam | 97 | 0/97 | 57 | 33 | 5 | 2 |

Not: dilim f'ye göre; Samanî/Karahanlı/Gaznelî D'de, Kerâyit (f=1007), Karahıtay, Moğol E'dedir.
`mevcut_id` değerlerinin hepsi `mevcut_once1281.tsv`'de doğrulandı (otomatik kontrol).

## ② Bulamadıklarım / sığ yerler
- A dilimi boş: bozkırda MÖ 3000 öncesi siyasî birim yok (Jeitun vb. zaten kültür olarak künyeli).
- Hiçbir tarih kaynakta okunmadı: f=null kayıtlar (Saka, Massaget, Dahae, Antik Hârezm, Sarmat, Alan, Donghu,
  Yuezhi, Wusun, Kangju, Fergana, Hotan, Kuça, Kaşgar/Shule, Loulan-Şanşan, Cheshi, Yanqi, Yuwen/Duan/Murong,
  Tiele, Onogur, Kutrigur/Utigur/Sabir, Kurykan, Buhara/Semerkant/Çaç/Üsrûşana, Naiman, Merkit, Tatar,
  Öngüt) tarihleri gerçekten belirsiz ya da kaynakta okunmamış hâlleridir; null bırakıldı, uydurulmadı.
- Sığ: Tarım havzası şehir devletleri (Yarkand/Suoju, Aksu/Wensu, Gumo, Pishan...), Sogd alt krallıkları
  (Keş, Nahşeb, Kabûdhan, Ferganalı alt beyler), Tokharistan yerel şahları (Çağaniyan Muhtaçoğulları,
  Huttal, Fîrîgunîler), Kimek alt-boyları, Kangly/Uz, Burtas, Başkurt, Kurykan, Yakut öncesi, Kumandin, Tuva,
  Tagar-Tashtyk-Pazyryk dışı Sibirya kültürleri. Kumandin için 1281 öncesi siyasî birim bulunmadı.
- Moğol öncesi bozkır boyları sığ: Kongırat, Celâyir, Tayiçiud, Kıyat-Borcigin, Ongut dışında yazılmadı.
- Başka bölgeye ait ama komşu: Türk Şahiler/Kabil Şahları, Nezak, Zunbil, Hint-İskit/Hint-Yunan (GUNEY_ASYA);
  Büyük Selçuklu, Saffârî, Tâhirî (IRAN); Xi Xia, Liao, Jin, Tibet, Zhou-Han-Zhao-Xia (Helian) ve Beş Barbar 16 Krallık
  (DOGU_ASYA); Bosporos Krallığı, Hunlar sonrası Gepid/Got (DOGU_AVRUPA). DOGU_ASYA kayıtları (Yan, Wei, Dai,
  Güney Xiongnu, Qifu/Tufa, Gansu Uygur) ile çakışma riski var; birleştirme aşamasında mükerrer taransın.
- Mevcut mükerrer: `kirgiz-yenisey` (orta-asya 840-920) ve `yenisey-kirgiz` (sibirya-bozkir 840-1207) aynı polity.

## Künye bulguları (taslak, ölçülecek)
- `xianbei` var-kisa: künye 155-235; 91/93 sonrası yükseliş ve ardıl Xianbei devletleri eksik.
- `kirgiz-yenisey` / `yenisey-kirgiz` mükerrer; Kırgız Göktürk vasalı öncesi (Jiankun) ayrı `var-kisa`.
- `turges` f 699 (Tang) vs 717; `kusan` f ~30 vs 50 künye; `kerayit` mevcut 1199-1203 çok geç (f ~1007);
  `karahitay` 1124 vs 1130 künye; `nayman` f yıl belirsiz.
- `hun-avrupa` mevcut 370-455; yaygın dönemleme 375-469.

## ③ Ana oturumdan istediklerim
1. Bu kayıtların KAYNAK OKUMALI doğrulaması (özellikle f=null olanlar; Iranica, Han kaynakları, Golden/Sinor).
2. Kültürlerin (BMAC, Pazyryk, Tagar, Tashtyk) devlet listesine alınıp alınmayacağına karar: `tur_yeni: kultur-kompleksi`.
3. Etnik-ad/boy sorunu: Massaget, Dahae, Sarmat, Alan, Tatar, Merkit, Kurykan, Tiele, Kutrigur/Utigur/Sabir siyasî birim mi?
4. DOGU_ASYA ile Xianbei devletlerinin (Yan/Wei/Dai/Qifu/Tufa) tek elden yazılması.
5. Önerim: Tarım havzası ve Sogd şehir devletlerini ayrı bir "VAHA" alt işine ver (kaynak: Han Bati Bölgeleri + Tang kaynakları).
