# C ÇİZİM KATMANI — ekran tarafı, teslim

Sevk: 1.MURAT (koordinatör) · 11 Eylül 2026 · SONNET (C ÇİZİM KATMANI)
Şema: `denetim/SEMA-C-0911.md` §6/§8. `js/app.js` donuk değildi, uygulandı.

## 🔴🔴 EK — M-3463/M-3467 SONRASI İKİNCİ TUR (aynı gün)

Emre'nin genişlettiği tanımın iki somut sorusuna (①A/B çizgisi görünüyor mu,
③kenar kopukluğu) tarayıcıda YENİDEN test edilerek cevap verildi:

```
① "iki çizgi" riski   ÇÖZÜLDÜ — dolgu opaklığı 1 ve devlet/vassal/osmanli
                       katmanlarının ÜSTÜNE eklendiği için alttaki
                       osmanli-cizgi/devlet-cizgi hattı EKRANDA HİÇ
                       görünmüyor (birden fazla zoom/konumda gözle
                       doğrulandı) — tek çizgi.
② performans           ÖLÇMEYE GEREK KALMADI, TASARIMDA ZATEN ÇÖZÜLÜ:
                       `_cAktifId` önbelleği yalnız AKTİF KAYIT KÜMESİ
                       DEĞİŞTİĞİNDE yeniden hesaplıyor (`guncelle()` her
                       gün çağrılsa da) — bir C penceresi içinde günler
                       ilerlerken maliyet SIFIRA yakın, yalnız pencere
                       açılış/kapanış GÜNLERİNDE bir kez hesaplanıyor.
③ 🔴 KENAR KOPUKLUĞU   GERÇEK VE GÖRÜNÜR — ölçüldü, aşağıda ayrıntı.
```

### ③ Kenar kopukluğu — tam olarak nasıl görünüyor

Test: aynı sahte Midye-Enez kaydı, `kapsama.kutu`nun kuzey kenarına
(`lat_max: 42.0`) yakınlaştırıldı (`[26.3, 42.05]`, z8.3).

**Görülen:** C'nin ürettiği kırmızı (Osmanlı) üçgen **DÜMDÜZ, keskin bir
üst kenarla** kesiliyor (tam `lat_max=42.0` hizasında) — bu benim
poligonumun kendi sınırı. Bu düz kenarın HEMEN ÜSTÜNDE, kutunun
DIŞINDAKİ gerçek A/B verisi (koyu yeşil, Bulgaristan) **kendi doğal/
düzensiz sınır şeklini** koruyarak devam ediyor. İki şekil **BİRBİRİYLE
UYUŞMUYOR** — biri (C) matematiksel bir dikdörtgen kenarı, öteki (A/B)
Voronoi/kıyı çizgisine yaslanmış organik bir kenar. Sonuç: kutunun tam
sınırında GÖRÜNÜR, YAPAY bir "dikiş" — düz bir çentik/kesik hattı.

⚠️ **Bu bir KOD HATASI DEĞİL, YAKLAŞIMIN YAPISAL SINIRI:**
`kapsama.kutu` bir dikdörtgen; altındaki gerçek petek geometrisi
(kıyı/nehir/komşu devlet sınırına yaslanmış) neredeyse HİÇBİR ZAMAN bir
dikdörtgen DEĞİL. Ekran tarafında bunu TAM çözmenin yolu yok — iki
seçenek var:
```
① (VERİ tarafı, ben yapamam) `kapsama.kutu` gerçek veriyi yazan oturum
   tarafından DOĞAL bir sınıra (deniz kıyısı, geniş bir nehir, uzak bir
   komşu devlet sınırı) kadar CÖMERTÇE genişletilir — o zaman dikiş
   HER ZAMAN aynı renkli/belirsiz bir bölgenin İÇİNDE kalır, görünmez
   olur. Bu bir YAZIM KURALI olmalı (şemaya eklenmeli): "kapsama kutusu
   antlaşma sınırından en az X km taşmalı, mümkünse doğal bir sınıra
   dayanmalı".
② (MOTOR tarafı, §8.3, donuk/kapsam dışı) `uret_petek.py` C'yi PETEK
   GEOMETRİSİNE gerçekten işlerse, C'nin kendisi petek kenarı OLUR —
   ayrı bir "kutu" kalmaz, dikiş kavramı ORTADAN KALKAR.
```
📌 **Bu ekran-tarafı çözümün NİHAİ ÇÖZÜM olmadığını, bir KÖPRÜ olduğunu**
açıkça söylüyorum (D107) — Emre'nin "tek otorite" tanımını TAM
karşılamıyor, yalnız YAKLAŞIYOR. Gerçek veri geldiğinde kapsama
kutusunun genişliği bu dikişin GÖRÜNÜRLÜĞÜNÜ belirleyecek en kritik
tek karar.

---

## ① NE YAPILDI

`js/app.js`e üç parça eklendi:

1. **Kaynak+katmanlar** (`osmanli-cizgi`den hemen sonra, ~satır 1263):
   `hukuki-sinir-dolgu` (fill) ve `hukuki-sinir-hat` (line, kesikli).
   devlet/vassal/osmanli dolgularının **üstüne** ekleniyor — SEMA'nın
   "C üçüncü katman DEĞİL" kuralına uyarak `KATMAN_KUMESI`'nin **"Siyasî"**
   kovasına dahil edildi (`/hukuki-sinir-/` eklendi), ayrı bir açma/kapama
   kutusu YOK.
2. **Geometri mantığı** (`_DEVLET_RENK`'ten hemen sonra, ~satır 4827):
   `_cKayitGeometrisi()` — `kapsama.kutu`yu `hat.nokta_dizisi`nin ilk/son
   noktasından geçen doğruya göre Sutherland–Hodgman ile ikiye keser,
   her yarıyı `taraflar[0]`/`taraflar[1]`'in rengiyle boyar (`osmanli` →
   `#8e0b22`, diğerleri `_DEVLET_RENK[id]`'den — DEVLET_HARITA'nın kendi
   renk tablosu, İKİNCİ bir renk kaynağı İCAT EDİLMEDİ).
3. **Güncelleme kancası** (`guncelle()` içinde, `zoomUygula(d)`'dan hemen
   sonra ama `di !== aktifDonem` kapısının **DIŞINDA** — gerekçe: bir
   C penceresi bir dönem sınırıyla çakışmayabilir). Kendi `_cAktifId`
   önbelleği gereksiz `setData`yı engelliyor.

---

## ② 🔴 ŞEMA İLE ÖLÇÜLEN VERİ ÇELİŞTİ — `yon_kurali` isim/işlev uyuşmazlığı

`SEMA-C-0911.md` §8.1 `yon_kurali: "yerel_cross_pozitif_taraf_a"` diyor —
isim POZİTİF cross'un `taraf_a`'ya gittiğini iddia ediyor. Ama AYNI
belgenin §4b'sindeki ÖLÇÜLMÜŞ örnek TERSİNİ gösteriyor:

```
İstanbul   cross = -2,08  → OSMANLI (taraflar[0], taraf_a)
Kırklareli cross = +0,99  → BULGARİSTAN (taraflar[1], taraf_b)
```

Kendi formülümle (§4b'nin BİREBİR aynısı) yeniden hesapladım — SEMA'nın
iki sayısı da (−2,08 / +0,99) doğrulandı. ⇒ **NEGATİF → taraf_a, POZİTİF
→ taraf_b — `yon_kurali` STRİNGİNİN ADI YANLIŞ**, ölçülen örnek doğru.
Kod ADI değil ÖLÇÜMÜ esas aldı (yorumda açıkça yazılı). Şema yazarına
bildiriliyor — gerçek veri gelmeden bu isim düzeltilmeli, yoksa bir
sonraki C kaydı yazan oturum isme güvenip tarafları TERS atar.

---

## ③ SINANDI — tarayıcıda, üç SINAV (D010, SEMA §8.5)

Sahte kayıt (SEMA §8.1'in Midye-Enez örneği, `taraflar` düzeltilmiş:
`["osmanli","bulgaristan"]` — gerçek `devletler_harita.js` id'si; §8.1'in
kendi taslağındaki `bulgaristan-kralligi` de YANLIŞTI, `_DEVLET_RENK`de
yok, denendi ve boş/gri döndüğü ÖLÇÜLEREK bulundu) yalnız tarayıcı
belleğine (`window.HUKUKI_SINIRLAR = [...]`) enjekte edildi —
**`data/` altına hiçbir şey YAZILMADI.**

```
SINAV 1 (pozitif)   1913-06-10: diyagonal YEŞİL/KIRMIZI kesim GÖRÜNÜYOR
                    (Enez→Midye doğrultusunda, ekran görüntüsüyle
                    doğrulandı) · dolgu renkleri programatik olarak da
                    doğrulandı: ["#8e0b22","#2d6c0c"] (osmanli/bulgaristan
                    — DEVLET_HARITA'nın GERÇEK renkleriyle birebir)
SINAV 2 (kapsama    Kutu dışındaki bölgeler (İstanbul, Bursa, Ankara
dışı)               yönü) ekran görüntülerinde HİÇ değişmedi
SINAV 3 (zaman)     1913-05-25 (f'den önce) ve 1913-07-05 (t'den sonra)
                    ikisinde de _cAktifId=null, diyagonal kesim YOK,
                    ekran NORMAL A/B'ye (gerçek tarihsel veri) döndü
KONSOL HATASI       0 (üç tarih değişiminde de, injection sırasında da)
```

⚠️ **Bir çalışma-ortamı notu, kusur DEĞİL:** bu makinede önizleme
sunucusunun `harita.loaded()`/`haritaHazir` bayrağı **~15-25 saniye**
sürüyor (donemler.js 32 MB + Esri raster gecikmesi) — erken bakan bir
ekran görüntüsü BOŞ harita gösterir. `try/catch` ile test edip C
kodumun BU gecikmeye sebep olmadığı doğrulandı (hatasız, ve gecikme
C kodu eklenmeden ÖNCEKİ oturumda da vardı).

---

## ④ BİLİNEN SINIRLAR — açıkça, D107

```
🟡 N>2 noktalı ("eğri", SEMA §8.2 ①b) hatlar için dolgu-bölme yalnız
   İLK ve SON nokta arasındaki DÜZ ÇİZGİYE göre yapılıyor — TAM polyline
   değil. Şemanın kendisi de N-noktalı bölmeyi "tasarlandı, sınanmadı"
   diye işaretliyor (§8.2) — bugün YALNIZ 2 noktalı (cetvel) örnek
   (Midye-Enez) test edildi, yaklaşıklık hiç DEVREYE GİRMEDİ. Hattın
   KENDİSİ (çizilen çizgi) her zaman TAM polyline'ı kullanıyor — yalnız
   dolgu rengi ayrımı yaklaşık.
🟡 `index.html`e YENİ dosya satırı EKLENMEDİ — SEMA §8.4 zaten bunun
   "bu görevde sınanmadı" olduğunu, gerçek veri dosyası geldiğinde
   eklenmesi gerektiğini söylüyor. Bugün `window.HUKUKI_SINIRLAR`
   TANIMSIZSA kod `|| []`e düşüyor, hiçbir şey KIRMIYOR.
🟡 Motor (`arac/uret_petek.py`) tarafına DOKUNULMADI (görev şartı) —
   petek geometrisinin kendisi hâlâ eski; bu C bir CLIENT-SIDE boyama
   düzeltmesi, gerçek petek kenarını DEĞİŞTİRMİYOR (yorumda açık).
```

---

## ⑤ COMMIT

`js/app.js` — tek commit, pathspec'le.
