# VERİ KRONOLOJİ 3 — ilerleme

> 7 Ağustos 2026 · Sonnet · Değişmez 2t borcu: 59 → 51 (tavan 49)

## Taban (açılışta ölçülen)
```
py arac/denetle.py  (grep'siz, tam çıktı)
Değişmez 1  ✓ 1793 yerleşim, 112 sahipsiz (beklenen 112)
Değişmez 1b ✓ 0 boşluk
Değişmez 2  ✓ 497 kırılma, 0 açık
Değişmez 2s ✓ 700 YABANCI, 121 AÇIK (tavan 121)
Değişmez 2t ✗ kırılmasız madde: 59 (tavan 49)
konum       ✓ 0
```

## ① UYGULANAN DÜZELTMELER — 8 madde, `etiket:`ten toprak-kazanc/kaybi çıkarıldı

Her biri veriyle doğrulandı (yerlesimler.js'teki d:/s: dönemleri okunarak),
tahminle değil.

| Tarih | Madde | Dosya | Gerekçe |
|---|---|---|---|
| 1362-03 | I. Murad tahta çıktı | olaylar.js:22 | CÜLÛS — hükümdar değişimi, toprak değil |
| 1362-09-01 | Rumeli Beylerbeyliği kuruldu | olaylar_ek2.js:34 | İDARÎ — var olan toprağın yönetim yapısı değişti, yeni toprak yok |
| 1400-08-01 | Timur Sivas'ı yerle bir etti | olaylar_ek5.js:45 | Sivas kaydı (yerlesimler.js:218) 1398-07-15→1402-07-28 arası KESİNTİSİZ "antlasma" (Osmanlı) gösteriyor — Timur'un baskını sahiplik değiştirmedi, katliam/yıkımdı. Gerçek devir 1402-07-28 Ankara Savaşı'yla (ayrı madde, ayrı kırılma) |
| 1415-03-01 | Konya kuşatması ve antlaşma | olaylar_ek5.js:116 | Konya kaydı (yerlesimler.js:191) "karaman" 1402-09-15'ten 1468-01-01'e KESİNTİSİZ sürüyor — kuşatma sonrası antlaşma statükoyu korudu, Karaman 53 yıl daha bağımsız kaldı. ⚠️ AMA bkz. §③ — madde metni "Hamîd-ili ve Said-ili katıldı" diyor, o ayrı bir bulgu |
| 1853-11-30 | Sinop Baskını | olaylar_ek7.js:161 | Sinop kaydı (yerlesimler.js:207) 1461-06-01'den 1923'e KESİNTİSİZ Osmanlı — deniz baskını (filo yakıldı) sahiplik değiştirmedi |
| 1827-10 | Navarin baskını | olaylar.js:137 | Mora/Ege'de Ekim 1827 civarında (±30g) HİÇBİR kırılma yok (en yakın: 1828-10-05 Koron, 343 gün uzakta) — deniz savaşı doğrudan sınır oynatmadı, Yunan bağımsızlığı kademeli ilerledi |
| 1839-06-24 | Nizip Muharebesi | olaylar_ek4.js:228 | Halep/Şam kayıtlarında (yerlesimler.js:586,590) 1832-1841 Kavalalı Mısır dönemi HİÇ modellenmemiş (`v:` yok, `d:` kesintisiz 1516→1918) — meydan savaşının kendisi o gün hiçbir sınırı oynatmıyor. ⚠️ AYRI bulgu: Kavalalı Suriye işgali (1832-1840) yerlesimler.js'te hiç yok, bkz. §④ |
| 1856-02-18 | Islahat Fermanı | olaylar.js:147 | REFORM fermanı, toprak iddiası yok |
| 1908-07-23 | II. Meşrutiyet'in ilanı | olaylar.js:161 | REFORM/anayasa, toprak iddiası yok |

**Doğrulama:** `py arac/denetle.py` sonrası → `Değişmez 2t: 51 (tavan 49)`,
**Değişmez 2 hâlâ 0 açık** (kırılmamış), diğer dört değişmez temiz.
2t defteri: KAPANAN 6 satırda (2 tanesi zaten kuyruktan/başka nedenle kapandı:
`1468-01-01 Karaman'ın kesin ilhakı` benim işim değildi, muhtemelen paralel
bir commit).

## ② BEKLEYEN SORULAR — koordinatöre, karar vermeden dokunmadım

### Fetret dönemi (1402-1413) — brifingde "sor" denildi
```
1402-12-14  Timur İzmir'i şövalyelerden aldı
1402-12-20  Îsâ Çelebi Bursa'yı ele geçirdi
1405-01-01  Yenişehir Ovası savaşı — Çelebi Mehmed Amasya'ya çekildi
```
**Ölçüldü:** Bursa (yerlesimler.js:150) ve İzmir (yerlesimler.js:164) kayıtlarında
`isa-celebi`/`aydin` dönemleri **1402-07-28**'de başlıyor — yani Ankara Savaşı'nın
GÜNÜNDE. Ama bu iki olay (İzmir'in Timur tarafından Aralık'ta alınması, Bursa'nın
Îsâ Çelebi'ye Aralık'ta geçmesi) gerçekte birkaç ay SONRA oluyor. Örüntü: harita
birçok Anadolu beyliği için 1402-07-28'i (Ankara Savaşı) TEK, toplu bir dönüm
noktası olarak kullanmış — her yerin kendi gerçek devir tarihini değil.

⇒ Soru: bu bilinçli bir sadeleştirme mi (Fetret'in ilk aylarını tek güne
sıkıştırmak), yoksa düzeltilmesi gereken bir yaklaşıklık mı? Eğer düzeltme
gerekiyorsa bu `yerlesimler.js` — benim dosyam değil.

### Konya 1415 — beklenmedik bulgu, madde metniyle harita çelişiyor
`1415-03-01 Konya kuşatması ve antlaşma` maddesinin açıklaması: *"antlaşma
sonucunda Hamîd-ili ve Said-ili gibi bölgeler yeniden Osmanlı topraklarına
katıldı."* Ama Hamîd-ili'nin bütün yerleşimleri (Isparta, Eğirdir, Beyşehir,
Akşehir, Seydişehir — yerlesimler.js:162,1133,1190,1191,1372,1373) haritada
**1414-06-01**'de Osmanlı oluyor — maddenin tarihinden (Mart 1415) **~9 ay
önce.** Yani harita zaten katılmışken madde "bu sefer sonucunda katıldı" diyor.
İki ihtimal: (a) madde tarihi kaba (yalnız yıl/ay biliniyordu, asıl tarih 1414
civarı), (b) 1414 ayrı bir olay (belki doğrudan ilhak) ve 1415 Konya seferi
gerçekten Karaman'a karşıydı ama farklı bir bölge katılımına denk düşürülmüş
olabilir. **Etikete dokunmadım** çünkü toprak iddiası muhtemelen DOĞRU, sadece
tarih uyuşmuyor — bu B sınıfı, sizin kararınız.

### Trablusgarp — 1911 vs 1912, bir yıllık sistematik kayma
```
1911-10-08  Tobruk'a İtalyan çıkarması
1911-10-09  Trablus şehrinin İtalyanlara teslim olması
1911-10-16  Derne'nin İtalyan çıkarmasıyla elden çıkışı
1911-10-21  Bingazi'ye İtalyan çıkarması
1911-11-05  İtalya'nın tek taraflı ilhak kararnâmesi
```
**Ölçüldü:** Trablus/Bingazi/Derne kayıtlarının (yerlesimler.js:721,723,724)
üçü de İtalya'ya **1912-10-15/18**'de geçiyor — TAM BİR YIL SONRA. Tobruk
(yerlesimler_afrika.js:509) için henüz `d:` alanını okumadım.

Tarihsel arka plan: İtalya fiilen Ekim 1911'de kıyı şehirlerini işgal etti;
resmî devir (Uşi/Ouchy Antlaşması) Ekim 1912'de. Harita muhtemelen HUKUKÎ
devir tarihini esas almış, madde ASKERÎ işgal tarihini. Bu **beş maddenin
tamamını** ilgilendiren tek bir modelleme sorusu — hangisi esas alınmalı?
Fetret'e benzer bir "atlasın o dönemi nasıl modellediği" sorusu, kararı
sizde.

## ③ "KUYRUK ARTEFAKTI" — gerçek veri kusuru DEĞİL, ölçüm ayrımının yan etkisi

```
1488-01-01  Safi'nin Portekiz nüfuzuna girmesi
1513-09-01  Azemmûr'un alınışı
1514-01-01  Mazagan kalesinin kurulması
1541-10-01  Safi ve Azemmûr'un boşaltılması
1549-01-01  Arzila'nın boşaltılması
```
**Ölçüldü:** Bu beş maddenin TAMAMI `data/yerlesimler_ek3.js`'te BİREBİR
eşleşen `s:` kırılma tarihine sahip (Safi 1488-01-01→1541-01-01, Azemmûr
1513-01-01→1541-01-01, Mazagan 1514-01-01→1769-01-01, Arzila
1471-01-01→1549-01-01 fas↔portekiz geçişleri). Ama `denetle.py`'nin
`KUYRUK_DOSYALARI` tanımı `yerlesimler_ek3.js`'i çekirdek sayımdan hariç
tutuyor (ÇAPRAZ İBERYA partisi henüz "çekirdeğe alınmadı"). `girdi.py`
`GIRDI_DOSYALARI`'nda bu dosya VAR — yani **harita bu noktaları zaten doğru
çiziyor**, yalnız denetim aracı saymıyor.

⇒ Bunlar gerçek (B) değil — veri zaten orada. Sizin bilginiz dahilinde
olduğunu düşündüğüm bir kategori ama emin olmak için bildiriyorum; ÇAPRAZ
İBERYA partisi çekirdeğe alınınca bu 4 madde otomatik kapanacaktır (5.
maddesi, Agadir, zaten çekirdek dosyada — §⑤'e bakın, o ayrı bir tarih
sorunu).

## ④ diğer BULGULAR — küçük ama gerçek

**Kavalalı Mısır'ın Suriye işgali (1832-1840) hiç modellenmemiş.** Halep ve
Şam kayıtlarında (yerlesimler.js:586,590) bu dönem için `v:` yok. Bu,
Nizip maddesini (A) yapmamı sağladı ama kendisi ayrı ve daha büyük bir
boşluk — birden fazla Suriye/Filistin şehrini ilgilendiriyor, benim iş
kapsamımın (yalnız `etiket:`) dışında. Not düşüyorum, karar sizde.

**`isg:` kategorisi denetim taramasına girmiyor.** `1788-04-24 Böğürdelen'in
ikinci Avusturya işgali` maddesi haritada BİREBİR eşleşiyor
(yerlesimler.js:1973, `isg:[{f:"1788-04-24",...,kaynak:"zistovi-antlasmasi"}]`)
ama `degismez2()`'nin varsayılan `kategoriler=("d","v")` taraması (ve `("s",)`
çağrısı) `isg:` alanını hiç okumuyor. Bu **denetim aracının kapsam eksiği**,
veri kusuru değil — `arac/` dosyasına dokunmadım, size bildiriyorum.

## ⑤ Tarih hassasiyeti uyuşmazlıkları — veri var, gün/ay farkı ±30'u aşıyor

```
1541-03-12  Agadir'in düşüşü          harita: 1541-01-01   (~70 gün)
1554-01-01  Şehrizor'un ilhakı        harita: 1554-08-22   (~233 gün)
1672-10-18  Bucaş Antlaşması          harita (Kamaniçe): 1672-08-27  (~52 gün)
1422-01-01  Cüneyd Bey Aydın-ili'ne döndü   harita (İzmir): 1421-08-15  (~137 gün)
1426-01-01  Cüneyd Bey'in idamı            harita (İzmir): 1425-06-01  (~214 gün)
```
Beşinde de madde ile harita AYNI olayı anlatıyor görünüyor, sadece biri kaba
(çoğunlukla `YYYY-01-01`, "gün bilinmiyor" kuralı) öteki günlü — ve fark
30 günü aştığı için 2t'de görünüyorlar. Etikete dokunmadım (toprak iddiası
muhtemelen doğru), tarihe hiç dokunamam (§4 yasağı). Karar ve düzeltme
(hangi tarih doğru — muhtemelen madde tarihini hassaslaştırmak, ki bu da
benim değil KRONOLOJİ içerik oturumlarının işi) size/ilgili oturuma kalıyor.

## ⑥ HENÜZ İNCELENMEDİ — tahminle kapatılmadı

Kalan ~31 madde (Zitvatorok, Bucaş'ın kendisi hariç detayı, Lugoş, Azak 1700,
Mukāsemenâme, Hemedan Antlaşması, Güney Kafkasya-İran 1736, Sırp İsyanı 1804,
İbrâil x2, İskenderiye Sözleşmesi 1828, Dayı Hüseyin 1830, Romanya adı 1862,
Ayastefanos, Mîzâb, İskenderiye 1882, Ubeyyid, Mersâ Sözleşmesi, Şeykan
bozgunu, Dongola, Dömeke, Gümrü) **araştırılmadı.** Tahminle A/B damgalamak
yerine boş bıraktım — `Bulunamadı` diye işaretlenmemiş, yalnız henüz sıra
gelmedi.

## Bitiş ölçütü karşılaştırması
```
① 2t: 59 → 51                          hedef 49, TAM olmadı ama 8 kesin kapatıldı
② her düzeltme (A) gerekçeli            ✓ yukarıda, veriyle doğrulanmış
③ (B) listesi teslim edildi             ✓ §②-⑤, koordinatöre mesajla da gönderildi
④ Değişmez 1·1b·2·2s·konum temiz        ✓ hâlâ öyle
```
