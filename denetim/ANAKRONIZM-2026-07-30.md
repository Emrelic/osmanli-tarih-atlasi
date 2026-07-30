# Sekizinci denetim — anakronizm · 30 Temmuz 2026

**Araç:** `arac/denetle_anakronizm.py` (yeni dosya; `denetle.py`'ye dokunulmadı —
o şu an Oturum 16'nın elinde).
**Soru:** *bir yerleşim, o tarihte var olmayan bir devlete ait mi görünüyor?*
`ETIKETLEME.md §7` madde 2'nin uygulaması.

```bash
py arac/denetle_anakronizm.py            # bulgular
py arac/denetle_anakronizm.py --dagilim  # eşik seçmek için ham dağılım
py arac/denetle_anakronizm.py --hepsi    # eleme yapmadan her şey
```

Ölçüm `devletler.js`'in `harita:` alanı üzerinden yapılıyor: 213 devlet kaydının
108'i bir boya kimliğine eşlenmiş, 103 kimliğin ömrü böyle çözülüyor.

---

## Neden üç değişmez bunu göremiyordu

Üçü de "sahip **var mı** / maddesi **var mı** / merkeziyle **uyuyor mu**" diye
sorar. Hiçbiri **"bu devlet o tarihte yaşıyor mu"** diye sormaz. Bizans'ın 84 yıl,
Memlûk'ün 40 yıl fazla yaşaması tam bu boşluktaydı.

---

## ⚠️ Önce yanlış alarm sorunu — ham tarama kullanılamazdı

İlk koşu **1091 alarm** verdi. `OGRENILENLER.md §3`'ün uyardığı tuzak: 101 yanlış
alarmlı bir denetim güvenilirliğini kaybeder. Dağılımı basınca sebep çıktı:

**Bir BOYA KİMLİĞİ ile bir DEVLET KAYDI aynı şey değil.** Boya kimliği haritada
süregiden siyasî varlığı temsil eder; `devletler.js` kaydı belirli bir devlet
biçimini. Fransa Krallığı 1792'de bitti, `fransa` boyası 1923'e kadar sürüyor —
ve bu **doğru**, çünkü Cumhuriyet de Fransa'dır.

Üç eleme, her biri ölçüme dayalı:

| Eleme | Kaç alarm | Gerekçe |
|---|---|---|
| **ERKEN yön tamamen** | 609 → 0 | Boya kimliği eşlendiği kayıttan neredeyse hep eskidir (atlas İran'ı 1281'den boyar, Safevî kaydı 1501'de başlar). Sistematik, hata değil |
| **Sürekli kimlikler** (17 kimlik) | 201 | Kaydın bitişi *biçim değişikliği*, yıkılış değil — `fransa`, `rusya`, `ispanya`, `avusturya`, `iran`… Her biri gerekçesiyle `SUREKLI_KIMLIK`'te yazılı |
| **Beyaz liste** (tekil) | 0 | Gîlân/Mâzenderan gibi kasıtlı vakalar için mekanizma hazır |

**1091 → 281.** Eşik 365 gün: bölgesel teslim gecikmeleri meşrudur (Mekke'nin
memlûk dönemi devletin yıkılışından 84 gün sonra biter), yıllar mertebesi değil.
Dağılımda 1 yılın altında 258 kayıt var ve bunların çoğu teslim gecikmesi.

**Kalan 281'in tamamının gerçek hata olduğunu iddia etmiyorum** — tarihsel
doğrulamasını yapmadım. Aşağıda "kesin" diye işaretlediklerim doğrulandı; gerisi
Oturum 9'un hükmünü bekliyor. Denetimin kazancı şu: **679 dağınık alarm yerine
26 satırlık, sahibi belli bir liste.**

---

## A) Kimlik ömrü şüpheli — 10 kimlik, 221 dönem → **Oturum 9**

Aynı kimlikteki dönemlerin ≥%60'ı taşıyorsa sebep tek tek yerleşimlerde değil,
`devletler.js`'teki `t` alanındadır.

| Kimlik | Taşan | Kaydın ömrü | En büyük taşma |
|---|---|---|---|
| `karakoyunlu` | 91/94 | 1351→1467 | 2,0 yıl |
| `akkoyunlu` | 76/100 | 1340→1501 | 14,7 yıl |
| `macaristan` | 27/39 | 1000→1526-08-29 | 74,1 yıl |
| `romanya` | 9/9 | 1859→1881 | 42,6 yıl |
| `arnavutluk` | 7/9 | 1443→1479 | 10,9 yıl |
| `artuklu` | 3/5 | 1102→1409 | 56,0 yıl |
| `katalan` | 3/3 | 1311→1388 | 6,0 yıl |
| `bosna` | 2/3 | 1377→1463 | 64,7 yıl |
| `cagatay` | 2/2 | 1227→1370 | 9,0 yıl |
| `karadag` | 1/1 | 1516→1918 | 4,9 yıl |

`macaristan` kaydı Mohaç'ta (1526) bitiyor ama Kraliyet Macaristanı 1526 sonrası
da vardı; `romanya` 1881'de krallık oldu, yok olmadı. Bunların çoğu muhtemelen
**A değil "sürekli kimlik"** — karar Oturum 9'un.

## B) Tekil hayalet — 16 kimlik, 60 dönem → **asıl av**

Aynı kimlikteki dönemlerin çoğu ömre uyuyor; bunlar sarkmış. Bizans/Memlûk sınıfı.

| Taşma | Yerleşim | Kimlik | Kayıt | Not |
|---|---|---|---|---|
| **268,2 yıl** | Malta | `sovalye` | 1530→1798 | **kesin** — Şövalyeler 1530'da Malta'ya geçti, kayıt Rodos'ta (1522) bitiyor. `devletler.js`'e Malta dönemi eksik |
| **126,5 yıl** | Ayamavra (Lefkada) | `venedik` | 1684→**1923** | **kesin** — Venedik 1797'de yıkıldı; ada 1923'e kadar Venedik boyalı |
| 54,0 yıl ×6 | Astrahan, Saratov, Tsaritsyn, Terek deltası, Kalmuk bozkırı, Ural eteği | `altinorda` | 1281→1556 | Altın Orda 1502'de dağıldı; ardıl hanlıklar ayrı kimlik ister |
| 46,4 yıl ×3 | Soçi, Tuapse, Maykop | `kirim` | 1281→1829 | Kırım 1783'te ilhak edildi; Çerkez sahili ayrı |
| 41,6 yıl ×11 | Belgrad, Niş, Üsküp, Saraybosna… | `sirbistan` | →1923 | muhtemelen **süreklilik** (1882 krallık), Oturum 9 karar versin |
| **39,9 yıl ×6** | Arkîko, Halâib, Akīk, Tokar, Sinkat, Vâdî Halfâ | `memluk` | 1281→1557 | **kesin** — bilinen Memlûk sınıfı hâlâ Kızıldeniz kıyısında duruyor |
| **17,4 yıl ×2** | Limni, Bozbaba (Ay Strati) | `bizans` | 1281→1479 | **kesin** — bilinen Bizans sınıfının kalanı |
| 15,1 yıl ×10 | Filibe… | `bulgaristan` | →1923 | muhtemelen süreklilik (1908 bağımsızlık) |
| 11,7 yıl ×5 | Isparta, Uluborlu, Eğirdir, Burdur, Yalvaç | `hamid` | 1402→1414 | Fetret'te beylik diriltmesi — tarih incelenmeli |
| 8,5 yıl | Varşova | `lehistan` | 1806→1815 | Varşova Dukalığı ayrı kimlik olmalı |
| 7,0 · 6,7 · 2,3 · 1,4 yıl | Erzincan, Manisa, Murzuk, Menteşe kıyısı ×6 | çeşitli | | Fetret dönemi beylik dirilişleri |

**Doğrulanmış dört vaka** (Malta, Lefkada, Memlûk kalıntısı, Bizans kalıntısı)
tek başına denetimin bedelini çıkarıyor: ikisi hiç bilinmiyordu.

---

## Yan bulgular

**1. `girdi._cevir` `devletler.js`'i okuyamıyor.** Anahtar tırnaklama regex'i
dizgi içeriğine de dokunuyor; bir `ozet` metnindeki `(kaynak: TDV, madde:
gurcistan)` ifadesini anahtar sanıp bozuyor ve `JSONDecodeError` veriyor.
`yerlesimler.js`'te serbest metin az olduğu için görünmemiş. Bu, `OGRENILENLER
§2`'nin "tek okuyucu" kuralının kör noktası: tek okuyucu var ama **tek dosya
türü** için yazılmış. `denetle_anakronizm.py` içine dizgi farkında bir çevirici
yazıldı; `girdi.py`'ye dokunmadım (paylaşılan dosya).
→ Öneri: `_anahtarlari_tirnakla` `girdi.py`'ye taşınsın, `_cevir` onu kullansın.

**2. `turkmen` kimliğinin `devletler.js`'te `harita:` karşılığı yok** —
o kimlikle boyanan hiçbir dönem denetlenemiyor. 104 kimlikten 103'ü çözülüyor.

**3. Beyaz liste mekanizması kuruldu ama ilk koşuda boş kaldı** — Gîlân ve
Mâzenderan vakaları `iran` sürekli kimlik sayıldığı için zaten eleniyor.
Mekanizma tekil istisnalar için hazır duruyor.

---

## Denetimin kör noktası (§9: aracın kendi kör noktasını ölç)

- **`d:` ve `v:` dönemleri denetlenmiyor** — yalnız `s:` (yabancı sahiplik)
  bakılıyor. Osmanlı dönemleri 1281-1923 aralığında olduğu için anakronik
  olamaz; ama Fetret şehzade kimlikleri `s:`'te olduğu için kapsama giriyor.
- **ERKEN yön tamamen elendi.** İçinde gerçek hata olabilir (bir yerleşim
  gerçekten var olmayan devlete verilmiş olabilir) ama kimlik sürekliliği modeli
  ayrıştırmayı imkânsız kılıyor. Bunu çözmek için kimliklerin kendi `f`/`t`
  ömrü gerekir — `ETIKETLEME.md §7`'nin asıl işi.
- **17 kimlik elle "sürekli" ilan edildi.** Yanlış ilan edilen bir kimlik,
  gerçek bir hayaleti gizler. Liste gerekçeleriyle yazılı, gözden geçirilebilir.
