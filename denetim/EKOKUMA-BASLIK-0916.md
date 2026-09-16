# D-GEOARAC — EK OKUMA başlık + ilgililik denetimi · DALGA-0057 madde 6 · 16 Eylül 2026

Görev: 355 kaydın 249'unda `baslik:` yok (arayüz `tur:` etiketini basıyor); her kayıt için
içerikten başlık öner, bağlı `olay` maddesiyle ilgili mi (evet/hayır/kısmen+gerekçe) sorusuna
cevap ver. Önce Belgrad 1717 / Prens Eugen çevresi.

## 🔴 Sayı taban aldığından beri değişti — 355/249 ARTIK 379/270

Koordinatörün verdiği 355/249, ölçüldüğü ANDA doğruydu; bu turda birden çok EKO-* oturumu
AYNI ANDA `data/ekokuma_*.js`ye yazıyordu (D001/D069: bir sayı bir ÖLÇÜMÜN FOTOĞRAFIDIR).
Bu betiğin kendi ölçümü: **379 kayıt, 270 `baslik:`siz.** Aradaki fark yeni yazılan kartlardan
geliyor — kusur değil, taban kaymış.

## 🔴🔴 İki alet kusuru — ikisi de ÖNCELİKLİ kümeyi (Belgrad/Eugen) elle okurken yakalandı

Görevin "önce Belgrad 1717 / Prens Eugen çevresi" önceliği bir HIZ talimatı değil bir
**DOĞRULAMA adımı** oldu — ikisi de otomatik taramanın YANLIŞ sonuç verdiği yerlerdi:

**① Yorum satırı kusuru (8 dosya, ayrıştırma tamamen ÇÖKÜYORDU).** `arac/girdi.py`nin
`_cevir`'i yalnız YORUM-SATIRI-OLAN satırları atıyor; bir KOD satırının SONUNA eklenmiş
`// PAKET-A2 13 Eyl: ...` yorumunu ve `/* ═══ bölüm başlığı ═══ */` blok yorumlarını
ATLAMIYOR — ikisi de JSON'u kırıyordu. 6 ekokuma dosyası (`antlasma2` · `edebiyat` · `ekonomi`
· `mimari` · `savas` · `sh104`) ve 2 kronoloji dosyası (`kronoloji_italya_sehir` ·
`olaylar_sk105`) bu yüzden **hiç okunamıyordu** — ölçülen ilk sayı (296 kayıt) bu 6 dosyayı
HİÇ içermiyordu, kimse fark etmezdi. Kendi bracket-eşleştiricime dize-FARKINDA bir yorum
temizleyici eklendi (`_yorumlari_temizle`, tek geçişte `//` ve `/* */` ikisini de temizliyor,
`_cevir`'in kendisi DEĞİŞTİRİLMEDİ, D023). Sonuç: 296 → 379 kayıt.

**② Bare-tarih kusuru (Belgrad kümesinin YARISINI yanlış "hayır" yapıyordu).**
`olay:["1739-09-18","1739-10-03"]` gibi **anahtar kelimesiz** (yalnız tarih) bağlar şemada
GEÇERLİ ama ilk sürümüm bunları "biçim hatalı" sayıp hiç değerlendirmiyordu — sonuç: tüm
bağları anahtarsız olan kartlar otomatik "hayır" (ilgisiz) çıkıyordu. Elle okuduğumda
`antlasma-belgrad-1739` ve `sebep-sonuc-belgrad-1739`nin İKİSİ de açıkça 1739 Belgrad
Antlaşması'nı anlatıyordu — kusur karttan değil aletten. Düzeltme: anahtarsız bağlar artık
"o günde herhangi bir madde var mı" diye bakılıyor. Etkisi BÜYÜKTÜ:
```
düzeltmeden ÖNCE   evet 119 · kısmen 52 · hayır 205
düzeltmeden SONRA  evet 355 · kısmen   3 · hayır  20
```
📌 Bu, projenin kendi dersinin (D015 "ölçemediğini eleyen bir süzgeç onu temiz sayar" — burada
TERSİ: ölçemediğini eleyen bir süzgeç onu KİRLİ sayıyordu) somut bir örneği.

## Öncelikli küme — Belgrad 1717/1739 · Prens Eugen (ELLE okundu, 5 kayıt)

| id | dosya | eski öneri | ELLE onaylanan başlık | olay_uygun |
|---|---|---|---|---|
| `dunya3-prens-eugen-kimdir` | ekokuma_dunya.js | "Savoie-Carignan (...)" (regex Fransızca è'yi kaçırdı) | **Prens Eugen (Eugène de Savoie-Carignan, 1663-1736)** | evet |
| `antlasma-belgrad-1739` | ekokuma_antlasma2.js | "Belgrad 1739" (zayıf) | **Belgrad Antlaşması (1739) — hükümler** | evet |
| `sebep-sonuc-belgrad-1739` | ekokuma_antlasma2.js | SORU biçimliydi ("...masada nasıl döndü?") — kural ihlali | **1739 Belgrad Antlaşması — kaybedilen Belgrad'ın geri alınışı** | evet |
| `sebep-sonuc-pasarofca-1718` | ekokuma_antlasma2.js | "Mora geri alındı ama Belgrad gitti" (kabul edilebilir) | **1718 Pasarofça Antlaşması — Mora kaldı, Belgrad gitti** | evet |
| `belgrad-1456-1521-yarim-kalan-hedef` | ekokuma_dalga2.js | uzun hook cümlesi | **Belgrad Kuşatmaları (1456 ve 1521) — Fâtih'in yarım kalan hedefi, Kanûnî'nin ilk fethi** | evet |

Beşi de içerik OKUNARAK doğrulandı (yalnız yapısal tarih/anahtar kontrolü değil) — hepsi
gerçekten iddia ettikleri olayı anlatıyor.

## Genel sonuç (379 kayıt, düzeltilmiş alet)

```
baslik: eksik (öneri üretildi)    269
baslik: zaten var (dokunulmadı)   110  (5'i öncelikli kümede ELLE onaylandı, öteki 105
                                        yapısal — soru biçimi/tur-etiketiyle-aynı UYARISI
                                        varsa `baslik_uyari` alanında işaretli)
olay_uygun: evet                  355
olay_uygun: kısmen                  3
olay_uygun: hayır                  20  ⚠️ bkz. aşağı — ÇOĞU "ilgisiz" değil "olay bağı yok"
mükerrer id                         1  (`kimdir-kuyucu-murad-pasa` — 2 dosyada aynı id, D094)
```

## ⚠️ "hayır" (20) ÇOĞUNLUKLA İLGİSİZLİK DEĞİL — GENEL KONU KARTI

20 "hayır"lı kaydın büyük kısmı `olay:` alanı HİÇ OLMAYAN genel arka-plan kartları (Osmanlı
idari yapı, tahrir defterleri, padişah lakapları, ebru sanatı, İznik çiniciliği gibi) — bunlar
TASARIM GEREĞİ tek bir tarihe bağlı değil, `olay_uygun:"hayır"` burada "kart yanlış yere
bağlanmış" DEMEK DEĞİLDİR. Gerçek inceleme gerektirenler (bağı VAR ama kronolojide
bulunamayan): `teknik-osmanli-devlet-kademeleri` (Çandarlı Halil/1453-05-29 anahtarı o günün
8 maddesinde geçmiyor), `kimdir-ahmed-cevdet-pasa` (1826-06-15 Vaka-i Hayriye tarihi
kronolojide hiç yok), `teknik-cezayir-dayilik` · `teknik-osmanli-fas-iliskileri` (anahtar
kelimeler o günün maddelerinde bulunamadı — künye/tarih uyuşmazlığı olabilir, ELLE
BAKILMADI). Tam liste `denetim/YAMA-0057-BASLIK.json`de her kaydın `olay_detay` alanında.

## Bulunan ayrı bir kusur: mükerrer id

`kimdir-kuyucu-murad-pasa` id'si İKİ ayrı `ekokuma_*.js` dosyasında geçiyor (hangi ikisi
`denetim/_EKOKUMA-MUKERRER-0916.txt`de değil — betik yalnız SAYDI, dosya adlarını
`YAMA-0057-BASLIK.json`da `_dosya` alanından çıkarılabilir). D094 "mükerrer kuralı" gereği
kaydı UYGULAYAN taraf (1.MURAT) hangisinin kalacağına karar vermeli — ben YAZMADIM.

## Çıktı şeması

`denetim/YAMA-0057-BASLIK.json` — `{ id: { baslik, baslik_eylem, baslik_yontem, baslik_uyari,
olay_uygun, olay_uygun_yontem, not, olay_detay, _dosya, _tur } }`. DALGA-0057'nin istediği üçlü
(`baslik`/`olay_uygun`/`not`) BİREBİR var, ek alanlar (`_yontem`, `olay_detay`) izlenebilirlik
için — hangi önerinin ELLE, hangisinin YAPISAL kontrolle üretildiği ayırt edilsin diye.

## Sıradaki iş (yapılmadı)

- 269 önerinin YALNIZ 5'i elle okundu; kalan 264'ü `kisa`/`metin`/id'den YAPISAL üretim —
  1.MURAT uygulamadan önce örnekleyerek göz atmalı, özellikle "id'den türetildi (ZAYIF
  öneri)" etiketli olanlar (baslik_yontem alanında işaretli).
- 20 "hayır"ın gerçek inceleme gerektiren alt kümesi (yukarıdaki 4 örnek) tek tek TDV/kaynağa
  bakılarak doğrulanmadı.
- Görev bundan sonra "antlaşma aletini 13 taranmamış + ~400 kronoloji maddesine genişlet"
  diyor — bu raporun teslimiyle AYRI bir iş, henüz başlanmadı.
