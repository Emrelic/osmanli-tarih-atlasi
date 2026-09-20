# D-RENK-0073 — EK ÖLÇÜM: **"o tarihte geçerli ise"**
21 Eylül 2026 · DALGA-0074 **H-0009** (ve H-0006'nın renk ayağı) · oturum D-RENK-0073
Ana rapor: [`D-RENK-0073-OLCUM-0920.md`](D-RENK-0073-OLCUM-0920.md) · betikler
`denetim/ARAC-D-RENK-0073-{YURURLUK.py,GOVDEGUN.js,GORSELSAPMA.py,KUNYEDOK.js}`
KOD YAZILMADI · KOŞU İSTENMEDİ · `data/` dosyalarına DOKUNULMADI.

> Emre, H-0009: *"bu sınır eğer o tarihte geçerli ise sınırı bu çizgilere göre çizmemiz lazım."*
> Emre, H-0006: *"bu çizgiler o sene için geçerli ise sınır bu çizgilere göre çizilmek zorunda…
> renklerin bu sınırlara birebir oturması lazım ama oturmuyor."*

1.MURAT'ın şartı: **renk-çizgi uyumu sorulmadan önce çizginin o gün yürürlükte olup
olmadığı sorulmalı.** Bu belge o soruyu üç katmanda ölçüyor: ① pencere var mı ②
çizim o pencereye bakıyor mu ③ pencerenin kendisi güvenilir mi.

⚠️ Dürüstlük notu: ana raporun öngörüleri ölçümden önce yazılmıştı; **bu ikinci turda
öngörü yazılmadı**, ölçüm doğrudan koştu.

---

## 1. ① Pencere var mı — VAR, istisnasız

| ölçü | sonuç |
|---|---|
| Çizilebilen kayıt (geometrili) | 350 / 723 |
| `f` alanı dolu | **350 (%100)** |
| `t` alanı dolu | **350 (%100)** |
| Pencere uzunluğu | ortalama 19,0 yıl · medyan **8,1 yıl** · en uzun 122 yıl (`d1923-es-pt-olivenza`) |

## 2. ② Çizim pencereye bakıyor mu — BAKIYOR

`js/d_katman.js` → `_dAktifKayitlar(gun)`: kayıt `hat`sızsa atlanır, sınıf görünüme
uymuyorsa atlanır, sonra **`f ≤ gün < t`** (açık uç D061/D195 kuralıyla). Yani
"o tarihte geçerli mi" sorusu, KAYIT PENCERESİ düzeyinde **zaten soruluyor**.
Ampirik doğrulama: Emre'nin 1828-02-22 görselinde o kutuda yürürlükteki kayıt **tam 1**
(ekranda da tek çizgi var), 1827-07-06 görselinde **tam 2**.

## 3. ③ Pencerenin kendisi güvenilir mi — İKİ KUSUR ÖLÇÜLDÜ

**(a) Tasarım günü, bitiş sanılıyor.** Çizilebilen 350 kaydın **197'si (%56)** tam
`1923-10-29`da bitiyor — bu, "1923'ten geriye sarma" programının başlangıç günü,
tarihî bir bitiş değil. (Sonraki en sık bitişler: 1918-11-11 → 9 · 1917-11-07 → 8 ·
1917-03-15 → 8.) Yani bu kayıtlar "şu tarihte kurulmuş ve 1923'e kadar sürmüş" DEMEZ;
"1923 hattını şu tarihe kadar geriye sardık" der. **Rengi bu pencereye oturtmak,
geriye sarmanın iddiasını harita gerçeği hâline getirir.**

**(b) Hayalet çizgi — 700 taraf-kayıt çiftinden 1'i künyesini aşıyor, ve o tam da
Emre'nin H-0009 görselindeki çizgi:**

| kayıt | sınıf | hat penceresi | taraf | tarafın künyesi | aşım |
|---|---|---|---|---|---|
| `d1746-osm-afsar-kerden` | **C** | 1746-09-04 → 1847-05-31 | `afsar` | 1736-03-08 → **1796-01-01** | **51 yıl** |

Emre'nin görselinin günü **1828-02-22**: çizgi, 32 yıl önce ölmüş bir devletin
(Afşar) hattı olarak çiziliyor; haritada o toprağı boyayan devlet ise **Kaçar**.
Ayrıca sınıfı **C = "belgeli KABA sınır"** (GORUNUM-ABCD-0916) — Emre'nin "milimetrik"
dediği çizgi, şemanın kendi diliyle KABA bir çizgidir; ekranda C ile E'yi ayıran tek
şey kesik deseni.
(`osmanli` tarafının `devletler.js`te künyesi yok — 17 kayıt; bu beklenen, Osmanlı
gövdesi `donemler.js` katmanındadır, kusur değildir.)

## 4. Emre'nin iki görselinde renk hattan NE KADAR sapıyor

Yöntem: o gün çizilen hattın üzerinde ~5 km'de bir nokta; her noktanın 5 km sağı ve
solu haritada hangi devlete boyalı (gövdeler `devletler_harita.js` + `donemler.js`ten
o güne çözüldü; `parcaCoz` ile aynı çözüm).

### H-0009 · 1828-02-22 · Osmanlı–İran · `d1746-osm-afsar-kerden` (C, 447 km, 89 nokta)

| yanların durumu | nokta | oran |
|---|---|---|
| iki yan da **Osmanlı** (renk hattı DOĞUYA taşmış) | 50 | %56 |
| iki yan da **Kaçar** (renk hattın BATISINDA kalmış) | 22 | %25 |
| bir yan Kaçar, bir yan Osmanlı (hat gerçekten ayırıyor) | 16 | **%18** |
| iki yan da kaydın kendi taraflarına uyan (`osmanli`+`afsar`) | **0** | %0 |

Rengin hattı aşma derinliği: Osmanlı tarafında **medyan 10 km** (en fazla 22 km),
Kaçar tarafında medyan 8 km (en fazla 18 km).
⇒ Hattın %82'si bir devletin İÇİNDEN geçiyor; hiçbir noktada kaydın beyan ettiği
ikili (Osmanlı/Afşar) haritada karşılık bulmuyor, çünkü 1828'de orada Afşar yok.

### H-0006 · 1827-07-06 · Hollanda çevresi

| kayıt | sınıf · pencere | uzunluk · nokta | hat gerçekten ayırıyor | iki yan aynı devlet | aşma derinliği |
|---|---|---|---|---|---|
| `d1923-nl-de` | E · 1824-07-02→1923-10-29 | 476 km · 95 | **10 nokta (%11)** | hollanda 53 · almanya 29 | medyan **11 km**, en fazla 40 km |
| `dg4-nl-fr-kortrijk` | E · 1820-03-28→1830-10-04 | 462 km · 92 | **16 nokta (%17)** | hollanda 74 · fransa 2 | medyan **17 km**, en fazla 36 km |

⇒ Emre haklı: çizgiler o gün yürürlükte ve çiziliyor, ama renk onlara oturmuyor —
kenarın **%83–89'unda** hat, tek bir devletin gövdesinin içinde kalıyor.
Sapma ölçeği bu iki pencerede **8–17 km medyan** (dünya geneli medyan 117 km'nin
çok altında: buradaki kusur yerel ve düzeltilebilir cinsten).

## 5. Bu ölçümün ana plana etkisi

Ana rapordaki üç seçenek (a kesme · b hattan poligon · c karışık) **değişmiyor**;
"o tarihte geçerli mi" sorusu onların ÖN KOŞULU olarak eklendi:

1. **Pencere sorgusu motora da taşınmalı.** `js/d_katman.js` `f ≤ gün < t` süzgecini
   uyguluyor; motor tarafında böyle bir süzgeç YOK (motor hattı hiç okumuyor).
   (a)/(c) seçeneğinde kesim, gövde kesitinin tarihine göre **aynı süzgeçle**
   seçilmiş hatlarla yapılmalı — yoksa yanlış yılın sınırı doğru sanılır.
2. **%56'lık "1923-10-29'da biter" kümesi, kesim için OLDUĞU GİBİ kullanılamaz.**
   Bu kayıtlar geriye sarma beyanıdır; rengi onlara oturtmak beyanı ölçüm hâline
   getirir. Öneri: kesim yalnız **bitişi gerçek bir olaya bağlı** kayıtlarla yapılsın,
   ötekiler `geriye_sarma: true` gibi bir alanla işaretlensin (şema kararı Emre'nin).
3. **Sınıf ayrımı kesime girmeli.** C (kaba) bir hatla gövde kesmek, kaba bir belgeye
   koordinat kesinliği atfeder. Öneri: kesim **E/F** ile yapılsın, **C** yalnız çizgi
   olarak kalsın, **D (fiilî)** yalnız fiilî görünümde kessin.
4. **Hayalet taraf denetlenmeli.** Bugün 1 vaka var ve tam da Emre'nin gösterdiği
   çizgi. `denetle.py`ye tek satırlık bir sorgu eklenebilir: *"hat penceresi her iki
   tarafın künye penceresinin içinde mi?"* — bu, `denetim/ARAC-D-RENK-0073-YURURLUK.py`
   §K2'nin aynısıdır ve bugün 700 çiftte 1 ihlal veriyor.

## 6. Ne istiyorum (hüküm Emre'nin; ana rapordaki 4 soruya EK)

5. `1923-10-29`da biten 197 kayıt kesimde **kullanılsın mı**, yoksa "geriye sarma"
   damgasıyla yalnız çizgi olarak mı kalsın?
6. Kesim hangi sınıflarla yapılsın — yalnız E/F mi, C de dâhil mi?
7. `d1746-osm-afsar-kerden`in penceresi (1746→1847, tarafı 1796'da ölmüş) düzeltilsin
   mi? Kaydın sahibi D-KÜNYE/bölge oturumudur, **ben dokunmadım**; doğrusu muhtemelen
   tarafın `afsar`→`kacar` devri (1796) ile pencerenin ikiye bölünmesidir, ama bu bir
   KAYNAK işidir (TDV `kerden-antlasmasi` / `turkmencay-antlasmasi`), ölçüm işi değil.
