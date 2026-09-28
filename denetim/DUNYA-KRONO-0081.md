# DUNYA-KRONO-0081 — parti-emrelic-0081'den 6 madde (M-5362 + M-5369 düzeltmesi)

Kapsam: H-0006 · H-0007 · H-0013 · H-0039 · H-0040 · H-0044. (H-0047/0048/0050 M-5369 ile
BALKAN-MACAR-0081'e geçti; çift atamayı M-5363'te ben bildirdim.)
Uygulayıcı: `denetim/DUNYA-KRONO-0081-uygula.py` (kuru koşu varsayılan, 11 eşleşmenin 11'i count==1;
scratchpad kopyasında `--uygula` koşuldu, 5 dosyanın 5'i `node --check` temiz, vm ile yüklendi).
**`data/` ve `js/`e bu oturum YAZMADI** — koşu 17 sürüyor, uygulama koordinatörde.

## 0. ÖNGÖRÜ (ölçümden ÖNCE yazıldı, 28 Eyl ~03:30, yalnız paket gövdeleri okunmuşken)

İlk hâli 9 madde içindi; M-5369'dan sonra kalan 6 madde için:

| madde | öngörü | ölçülen | tuttu mu |
|---|---|---|---|
| H-0006 | istek (ek okuma), hata değil | ek okuma ZATEN VAR; ama maddenin kendisi kaynak kuralını çiğniyor | ✗ (hata çıktı) |
| H-0007 | istek | istek — kart yok, yazıldı | ✓ |
| H-0013 | GERÇEK (senkron/sıra) | veri doğru; arayüz adayı, tarayıcıda ölçülemedi | ✗ (veri hatası yok) |
| H-0039 | GERÇEK (sıra) | GERÇEK — ama kök OK değil, MERSİYENİN TARİHİ | ✓ (sebep farklı) |
| H-0040 | GERÇEK (Değişmez 2 kör noktası) | GERÇEK, tam öngörülen sınıf | ✓ |
| H-0044 | istek/kapsam | istek — ölçüldü | ✓ |

**Öngörü: 3 gerçek hata (0013, 0039, 0040). Ölçülen: 3 gerçek hata (0006, 0039, 0040).** Sayı tuttu,
küme tutmadı: 0013'ü fazla, 0006'yı eksik tahmin ettim. Ders: "ek okuma istiyor" diye yazılmış bir
maddenin kendi kaydı da açılıp okunmalı — 0006'daki hata isteğin içinde değil, maddenin `kaynak:`ındaydı.

---

## 1. H-0039 · "Zigetvar sefer oku bir madde önden görünüyor" — GERÇEK, kök VERİ

```
olaylar_ek14.js:81  t:"1566-09-01"  "Bâkî'nin Kanunî için mersiye yazması"  gun:"Eylül 1566"
olaylar.js:76       t:"1566-09-07"  "Zigetvar — Kanunî'nin vefatı"
```
Mersiye, yazılmasına sebep olan ölümden **6 gün ÖNCE** sıralanıyor (D213: "Eylül" ayın 1'ine kodlanmış).
Emre mersiye maddesinde Zigetvar okunu görüyor; ok aslında o gün için tarihen doğru (kuşatma 5 Ağustos–
8 Eylül sürüyordu; `seferGuncelle` kırpması oku 1566-07-16'dan gösterir), yanlış olan maddenin yeri.
- **TDV `baki--sair`:** "Kanûnî Sultan Süleyman'ın Sigetvar'dan ölüm haberi geldi (Eylül 1566). …
  mersiyesini yazdı. … mersiyenin ardından da II. Selim tahta çıktığında (15 Rebîülevvel 974 / 30 Eylül
  1566) hemen bir cülûsiye takdim etti." ⇒ kaynak **AY** verir; alt sınır vefat (TDV `suleyman-i`:
  "20-21 Safer 974 (6-7 Eylül 1566) gecesi").
- **Çare:** `t:"1566-09-07"` (alt sınır, gün UYDURULMADI) · `kesinlik:"ay"` · `gs:60` (aynı gün vefat
  maddesinin ardından) · gün alanı açıklamalı.
- Yan düzeltmeler (aynı iki satır): d'deki "Sigetvar seferi **dönüşünde**" yanlış — ordu Sigetvar'dan
  21 Ekim'de ayrıldı (TDV `selim-ii`); cülûsiye maddesindeki "mersiyeden yalnızca **birkaç hafta** sonra"
  TDV'de yok, TDV "mersiyenin ardından … hemen" der.
- Etki: 1566-09-07 aynı-gün grubu oluşur (ARAYUZ-0077'nin 92 grubu → 93); `gs` sıralaması çözer.

## 2. H-0040 · "Gyula (Göle) düşmüş görünüyor, kronolojide yok" — GERÇEK

```
yerlesimler_ek5.js  Gyula (Göle)  d: 1566-09-02 → 1699-01-26
±30 gün içindeki madde: 1566-09-07 Zigetvar (5 gün)  ⇒ Değişmez 2 "kapalı" sayıyor
```
Tam CLAUDE.md §3'ün uyardığı kör nokta: kırılma başka bir olayın maddesine yapışık. Dosyanın kendi
başlığı bunu "yanlış maddeye yapışma sınıfına girmiyor, aynı sefer" diye savunmuş — Emre'nin sorusu
("zigetvar ile gyulanın ne ilgisi var") savunmanın okuyucuya ulaşmadığını gösteriyor.
- **TDV:** `gyula`/`göle` maddesi YOK (arama boş); `timisvar` yalnız "Göle (Gyula) ve Arad (birlikte)"
  sancağını anar; `suleyman-i`, `sigetvar`, `selim-ii`, `sokullu-mehmed-pasa` Gyula'yı tarihlemez.
- **Akademik (§4 meşru, açıkça yazıldı):** Bánlaky, *A magyar nemzet hadtörténelme*, MEK 09477,
  B 0013/1056 (Karácsonyi, *Békésvármegye története* I'e dayanır): Pertev 2 Haziran'da Gyula önüne
  geldi · teslim sözleşmesi **30 Ağustos 1566** imzalandı · garnizon **2 Eylül öğlen** çıktı · Kerecsényi
  esir alındı · ardından Jenő (Yanova) garnizonu kaçtı. B 0013/1057: Pertev'in görevi seferin
  başında "önce Gyula'yı almak"tı ⇒ **Zigetvar ile ilgisi: aynı seferin ikinci kolu.**
- **Çare:** yeni madde `t:"1566-09-02"` (atlas kırılmasıyla aynı gün, kaynak GÜN veriyor), `yer_id:"Gyula (Göle)"`,
  `fethedilen:["Gyula (Göle)"]`, `olaylar.js`de Zigetvar maddesinin önüne.
- Yan düzeltme: Zigetvar maddesinin `kaynak:"zigetvar"` alanı **ölü stub** — TDV'de "bk. SİGETVAR",
  gövde yok (D211 ④) → `sigetvar · suleyman-i`.
- ⚠️ Ölçülmedi, bildiriyorum: Bánlaky'ye göre Yanova (Jenő) ve Világos Gyula'nın ARDINDAN düştü;
  atlasın o iki kaydının 1566 günleri bu işte sınanmadı. Gyula kaydının `kaynak:` alanı boş —
  uygulayıcı yerleşime dokunmadı (koordinatör dosyası), Bánlaky satırı eklenebilir.

## 3. H-0006 · Oran 1509 — ek okuma ZATEN VAR, ama madde kaynak kuralını çiğniyor

- **İstek karşılanmış:** `data/ekokuma_akdeniz.js` → `tartisma-akdeniz-vehran-onemi` ("Vehrân (Oran):
  iki asır boyunca alınıp verilen bir liman…"), `olay:["1509-05-17|Oran", …]`, yükleyici `app.js:10453`
  kayıtlı; `_ekBagEslesir` ile madde başlığı ("Oran'ın…") eşleşiyor ⇒ kart o maddede 💬 Tartışma
  düğmesiyle açılmalı. **Emre'ye sorulacak:** kartı görmediyse bu bir görünürlük sorunudur (arayüz),
  gördü ve yetmediyse neyin eksik olduğu.
- **Asıl hata:** madde `kaynak:"bulunamadı — TDV bu olayı yeterli ayrıntıda doğrulamıyor, dayanak:
  standart akademik kaynak (Spanish conquest of Oran, 1509 tarihyazımı)"` diyor ve d "TDV'nin
  Cezayir/Mağrib maddeleri bu olayı doğrulamıyor" diye başlıyor. **TDV `vehran` gün vererek doğruluyor:**
  "Kastilya Krallığı 17 Mayıs 1509'da Vehrân'ı işgal edip halkının büyük kısmını katletti".
  Kaynak alanı bir Vikipedi makale başlığına benziyor (§4 kırmızı çizgi); d'deki sayılar (80 gemi,
  10-12 bin, 12.000 kayıp, <30) adsız; "Cartagena'dan (zaten 1505'ten beri İspanyol elinde olan)"
  cümlesi karışık (1505'te alınan Mersa'l-Kebîr'dir, Cartagena İspanya'dadır).
- **Çare:** gun `17 Mayıs 1509` · d TDV `vehran`dan yeniden yazıldı · kaynak TDV alıntısı · eski
  ayrıntıların neden çıktığı `ic_not_d`de. `t` değişmedi (zaten 1509-05-17).
- ⚠️ Kalan: başlıktaki "Kardinal Cisneros" ve `kisiler` (Cisneros, Navarro) TDV'de geçmiyor; genel
  akademik bilgi, dokunulmadı — istenirse başlıktan çıkarılır.

## 4. H-0007 · Osmanlı'nın Kızıldeniz–Hint Okyanusu siyaseti — kart YAZILDI

- Mükerrer taraması: `data/ekokuma*.js`'te Hint Okyanusu/Portekiz/Diû/Malaka kartı **0**. En yakınlar
  başka soruyu cevaplıyor (`dunya-donanma-avrupa-kiyaslama` → Çeşme 1770; `dunya-hurmuz-bogazi-onemi` → 1414).
- Taslak: `denetim/DUNYA-KRONO-0081-ekokuma_hint0081.js` → uygulayıcı `data/ekokuma_hint0081.js`
  (`window.EKOKUMA_HINT0081`) olarak kurar ve `js/app.js` yükleyici dizisine `ekokuma_p75c`
  satırının altına ekler. **`js/app.js` benim dosyam değil — o satırı uygulamak koordinatör/ARAYÜZ kararı.**
- İçerik: ① yol değişti (Vasco da Gama 1497, Diû 1509, Malaka 10 Ağustos 1511, Dehlek 1513) ② Memlük
  mirası (Selman Reis Cidde 18 Nisan 1517, 1525 raporu, Aden 1538) ③ üç sefer, üç geri dönüş (Diû
  6 Kasım 1538 · Pîrî Reis Hürmüz 1552, 1553 sonu Mısır'da öldürüldü · Seydi Ali Reis 1554, karadan
  dönüş) ④ neden: deniz (Akdeniz'e alışık denizci, muson; Portekiz kalyon filosu), üs (Goa/Diû/Hürmüz/
  Malaka), müttefik (Gucerât'ın gidip gelmesi; Açe 1567) ⑤ sonuç: Kızıldeniz tutuldu, okyanus değil.
- Kaynak: TDV `kizildeniz · selman-reis · suleyman-pasa-hadim · piri-reis · seydi-ali-reis · diu ·
  malaka · ace`, gövdeler okundu. ④'teki "üç sebep" bir SENTEZ olduğu için `kesinlik:"tartismali"`.
- Bağlar: `1511-08-10|Malaka · 1517-04-18|Cidde · 1538-08-03|Aden · 1538-06-13|Diu · 1567-10-01|Açe`
  (beşi de ana kronolojide var, başlıkları `_ekNorm` ile tutuyor).
- ⚠️ Yan bulgu, dokunulmadı: `olaylar_ek2.js:60` "Hint Okyanusu seferi: Diu kuşatması" `t:1538-06-13`;
  TDV `suleyman-pasa-hadim` Süveyş'ten ayrılışı **28 Haziran 1538**, Diû önüne varışı **Eylül 1538**
  verir. · `olaylar_ek2.js:55` "Pîrî Reis'in idamı" 1554-01-01 ile `olaylar_ek7.js:39` "Kaptan-ı derya
  Pîrî Reis idam edildi" 1553-12-01 **mükerrer görünüyor** (TDV: "1553 sonları").

## 5. H-0013 · "Kemah fethi bir önceki maddede görünüyor (bazen)" — VERİ DOĞRU, arayüz adayı

```
yerlesimler.js:1487 Kemah  s: safevi 1502-01-01 → 1515-05-19 · d: 1515-05-19 →
donemler.js kırılma günleri: 1514-10-23 · 1515-05-19 · 1515-06-13 …   ⇒ üretilen harita da 05-19'da değişiyor
madde: olaylar_ek5.js:150 "Kemah Kalesi'nin Safevîler'den fethi" t:1515-05-19
önceki maddeler: 1515-04-01 Hürmüz (kapsam:dis) · 1515-01-01 Tersâne · 1514-11-24
```
Veri, üretilmiş harita ve madde aynı günü taşıyor. Emre'nin "bir sefer öyle, bir sonraki seferinde
doğru" demesi deterministik olmayan bir şeyi işaret ediyor — veri deterministiktir. İki aday:
① "Yaklaşan" önizlemesi (`app.js:3618-3626`): 365 gün içinde değişecek yer soluk/kesikli işaretle
gösterilir — Tersâne (138 gün) ve Hürmüz (48 gün) maddelerinde Kemah işareti belirir. Bu kasıtlı
(p4/H-0013, Emre'nin kendi isteği) ama "fethedilmiş görünüyor" diye okunabilir. ② Geri yönde gezinmede
harita/petek çiziminin bir kare geriden gelmesi (yarış). **Tarayıcıda ölçülemedi**: yayın sayfası
açıldı, `app.js` kapalı kapsamda (global `olaylar` yok), ekran görüntüsü iki kez zaman aşımına uğradı.
- Tersâne maddesinin kendisi TDV ile uyumlu: `tersane-i-amire` "1515'te 160 göz olarak tamamlandı"
  (1513 sonbaharı ilk dört göz, 1514 yaz sonu 100 göz) → `t:1515-01-01` yıl hassasiyeti doğru.
- **Öneri:** ARAYÜZ ailesine — Tersâne ve Hürmüz maddelerinde, ileri ve GERİ gezinerek Kemah
  peteğinin rengini `queryRenderedFeatures` ile ölçmek. Veri düzeltmesi YOK.

## 6. H-0044 · Dünyanın en önemli olayları kronolojide anılıyor mu — ÖLÇÜLDÜ

Alet: `denetim/ARAC-DUNYA-KRONO-0081-KAPSAM.js` (çıktı `denetim/DUNYA-KRONO-0081-kapsam.txt`).
1281-1923 arası **50 dünya olayı** (Osmanlı'nın kendi olayları hariç), yalnız başlık (`b`) eşleşmesiyle:

```
ANA kronolojide kendi maddesi var      10   Gırnata 1492 · Felemenk 1581 · Vestfalya · Petersburg ·
                                            Rastatt 1714 · Bastil 1789 · Viyana Kongresi · Orta Amerika
                                            1821 · İtalya 1861 · Versay 1919  (+ Vilcabamba 1572, listede yok)
yalnız devlet kronolojisinde (kuyruk)  38   ör. Luther 1517 · Armada 1588 · Otuz Yıl 1618 · Waterloo ·
                                            ABD 1776 (künye) · Afyon Savaşı · Meiji · Alman İmp. 1871 ·
                                            Bolşevik 1917 — 6'sı ana kronolojide yalnız metin içinde anılıyor
hiç bulunamadı (bu regexle)             2   Gutenberg matbaası · Saint-Barthélemy
```
Ana kronoloji `kapsam:"dis"` payı yüzyıla göre: 14.yy 35/145 · 15. 24/187 · 16. 65/342 · 17. 28/196 ·
18. 37/269 · 19. 75/381 · 20. 55/207. Kuyruk+künye 1281-1923'te `dunya:5` puanlı **159**, `dunya:4` **542** madde.

**Cevap:** olaylar büyük ölçüde VERİDE VAR (48/50) ama ana zaman çizgisinde değil, devlet
kronolojilerinde (dizin penceresinde "ek devlet" olarak seçilince) duruyor. "Dış haber" için iki yol:
- **(A) KOPYALAMA (önermiyorum):** kuyruk maddelerini `olaylar*.js`e kopyalamak — aynı olgu iki yerde,
  biri bayatlar (ekokuma antlaşma kararındaki gerekçenin aynısı), ve her kopya Değişmez 2 evrenine girer.
- **(B) ÖNERİM — BAĞLAMA:** kuyruktaki `dunya:5` maddeler (159) ana kronolojide ayrı biçimli bir
  "🌍 Dünyada" satırı olarak GÖSTERİLİR, veri taşınmaz; eşik mevcut `EK_DUNYA_ESIK` düğmesiyle
  aynı mantık (`app.js:13950`). Bu bir ARAYÜZ işi + önce 159'un mükerrer/yerel olanlarının
  ayıklanması (aynı olay birden çok devlet kronolojisinde). Karar Emre'nin (8. boyut/kapsam).

## 7. Değişen / yazılan dosyalar (hepsi `denetim/`, bu oturumun öneki)

- `DUNYA-KRONO-0081.md` (bu rapor) · `DUNYA-KRONO-0081-uygula.py` · `DUNYA-KRONO-0081-ekokuma_hint0081.js`
- `ARAC-DUNYA-KRONO-0081-TDV.py` · `ARAC-DUNYA-KRONO-0081-BANLAKY.py` · `ARAC-DUNYA-KRONO-0081-KAPSAM.js`
  · `DUNYA-KRONO-0081-kapsam.txt`
- Önbellekler (`DUNYA-KRONO-0081-tdv-onbellek/`, `-banlaky-onbellek/`) commit EDİLMEDİ (telifli metin).

Uygulayıcının dokunacağı: `data/olaylar.js` · `data/olaylar_ek14.js` · `data/olaylar_ek16.js` ·
yeni `data/ekokuma_hint0081.js` · `js/app.js` (1 yükleyici satırı). Sonra `py arac/denetle.py`
(beklenen: Gyula 1566-09-02 kırılması kendi maddesine bağlanır, sayılar değişmez) ve `denetle_yayin.py`
(yeni ekokuma dosyası yükleyicide kayıtlı olmalı; odak kapısı: yeni maddenin `yer_id` çözülüyor).
