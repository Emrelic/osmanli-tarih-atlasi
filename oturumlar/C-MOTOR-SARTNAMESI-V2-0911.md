# ŞARTNAME v2 — C MOTOR ENTEGRASYONU (Emre'nin M-3463 tanım düzeltmesinden sonra)

```
🔒 arac/ DONUK — şartname + yama, kod motora YAPIŞTIRILMADI.
```

Önceki hâl: `oturumlar/C-MOTOR-SARTNAMESI-0911.md` (v1) — **ÇÜRÜDÜ**, v1
C'yi bir "tabi/dogrudan küme üyeliği override'ı" (dar bir ekleme
noktası) sanıyordu. Emre'nin M-3463'ü (tam metin tahtada) C'yi bir
**DEVRALMA/OTORİTE** olarak yeniden tanımladı: kapsama alanı içinde
A/B'nin TÜM sezgisel mekanizmaları kapanır, tek otorite belgedir.

Öngörü (v2): `denetim/ONGORU-C-MOTOR-V2-0911.json`, commit `c8849ca`.

---

## ① HER MEKANİZMA — koddaki yeri, satır numarasıyla

```
:793   PETEK = voronoi_diagram(...)         ← §2 EMİLME KURALININ KENDİSİ
                                              (ham Voronoi, TÜM dünya kutusu
                                              TEK seferde bölünüyor — "kapsama
                                              alanını atla" diye bir şart
                                              buraya İŞLENEMEZ, çünkü tek bir
                                              global çağrı)
:900   TAVAN_KM = {...}                     ← A1 yarıçap tavanının sabiti
:1066-1129  _tavan_cokgen() / TAVAN_DAIRE   ← A1 YARIÇAP TAVANI — her nokta
                                              için PETEK[i]'yi kesen bir
                                              işlem, nokta bazında (i)
:1512  _b2_enklav_birlestir()               ← B2 ENKLAV (tanım)
:1614  _b3_koridor_kirp()                   ← B3 KORİDOR (tanım)
:1688  gosterim_duzelt()                    ← B2+B3'ü SIRAYLA çağıran sarmalayıcı
:1740-1750  dogal_hatta_yasla + Chaikin     ← YASLAMA (kenar bazında, _kenarlar
                                              listesi üzerinde tek geçiş)
:1896  Kıyı kesimi (KARA) — statik
:2076-2453  eğim-tabanlı Dijkstra devri     ← BOŞLUK PAYLAŞTIRMA (bu oturumun
                                              `B BOŞLUK PAYLAŞTIRMA`
                                              şartnamesinin konusu — PETEK_D
                                              parça bazında el değiştiriyor)
:2637  COL_TAVAN_KM = 300.0                 ← ÇÖL TAVANI sabiti (kullanımı
                                              ~2739-2740, ayrı bir şekil-
                                              düzeltme adımı, A1'in bir türevi)
:4581  gosterim_duzelt() PER-DÖNEM çağrısı  ← B2/B3'ün TARİHE BAĞLI tekrarı
:4842+ "Dönemler kuruluyor" döngüsü         ← tabi/dogrudan (v1'in odaklandığı
                                              yer, HÂLÂ geçerli ama artık YETERSİZ)
```

### 🔴 SONUÇ: "her mekanizmaya ayrı kapsama-kontrolü enjekte etmek" YANLIŞ MİMARİ

Yukarıdaki 6+ mekanizma **6 farklı veri yapısında, 6 farklı granülerlikte**
çalışıyor — bazısı NOKTA bazında (`i` indeksli, TAVAN_KM), bazısı KENAR
bazında (`_kenarlar` listesi, yaslama), bazısı PARÇA bazında (PETEK_D,
eğim devri), bazısı GÖVDE bazında (gosterim_duzelt, B2/B3). Her birine
ayrı ayrı *"bu C kapsamında mı"* sorusu enjekte etmek:
- **6 ayrı kod konumu** demek, `D043`'ün sınıfına düşme riski (biri
  unutulursa hatasız görünüp yanlış çalışır — TAM `§7①`nin sırf o
  yüzden var olduğu risk sınıfı);
- Ve satır `:793`'teki tek global `voronoi_diagram()` çağrısına bir
  "atla" şartı zaten TEKNİK OLARAK GİREMEZ (fonksiyon TÜM noktaları TEK
  seferde bölüyor, kapsama kutusunu "görmüyor").

**⇒ Doğru mimari: TEK BİR POST-HOC DEVRALMA noktası.** Statik boru
hattının TAMAMI (yukarıdaki tüm adımlar) HER ZAMANKİ GİBİ çalışır —
kapsama kutusu içinde bile, İSRAF ama ZARARSIZ (o bölgedeki PETEK_D
sonucu birazdan TAMAMEN ATILACAK). **Kıyı kesiminden (:1896) VE
eğim-devrinden (:2453) SONRA, TEK bir yeni adımda:** kapsama kutusu
içine düşen TÜM `PETEK_D[i]` parçaları SİLİNİR ve belgenin kendi nokta
kümesinden (nehir uçları + dağ uçları + isimlendirilmiş yerleşimler)
KURULAN YEREL bir mini-Voronoi ile YENİDEN DOLDURULUR — kutunun
DIŞINDAki hiçbir şeye dokunulmadan.

---

## ② EMİLME KURALININ KAPANMASI — ön koşul olarak çözüldü

Emre'nin kendi çözümü: *"belgede belirtilen nehir dağ yerleşim ne
varsa haritaya KONUR."* Motor bunu bir **ÖN KOŞUL DENETİMİ** olarak
uygulamalı, ÖZELLİKLE C'nin post-hoc devralma adımının İÇİNDE:

```
① Belgenin nokta kümesi (yeni eklenenler DAHİL — Karlofça'nın Bosna
   kaleleri gibi) alınır.
② Bu kümeden YEREL bir Voronoi kurulur, kapsama kutusuyla KESİŞTİRİLİR,
   KARA maskesiyle KESİLİR (aynı `PETEK`/`KARA` mekanizması, YALNIZ bu
   küçük kutuda).
③ Bu yerel örtünün ALANI, kapsama kutusunun (∩ KARA) ALANINA EŞİT Mİ
   diye DENETLENİR (fark payı: `KV_MIN_KM2` (200 km²) mertebesinde bir
   tolerans önerilir — B BOŞLUK PAYLAŞTIRMA şartnamesindeki AYNI eşik,
   "ızgara çözünürlüğünün güvenilir olduğu taban").
④ Fark toleransı AŞARSA: C UYGULANMAZ, motor HATA/UYARI basar —
   "belgenin nokta kümesi kapsama kutusunu tam kaplamıyor, X km² boşluk
   var, önce nokta ekle" (isimlerle, D107 gereği).
```

⚠️ Bu ön koşul, **motorun kendisinde ÇALIŞTIRILABİLİR BİR SINAV** —
tasarım değil, ölçülebilir bir if/else. Ama BU YAMADA henüz koşulmadı
(`arac/` donuk); yalnız algoritma TARİF edildi.

---

## ③ SIRA — Voronoi'den önce mi sonra mı? ÖLÇÜLDÜ VE GEREKÇELENDİ

```
SEÇENEK A — ÖNCE (Voronoi kurulmadan, C alanı hiç görmez)
  Maliyet: TEKNİK OLARAK YAPILAMAZ (yukarı, `:793`) — shapely'nin
  `voronoi_diagram()`ı TEK bir MultiPoint'ten TEK bir global diyagram
  üretiyor; belirli bir bölgeyi "girdi kümesinden çıkarmak" onun İÇİNDE
  başka noktalar varsa (Midye-Enez kutusunda İstanbul/Kırklareli GİBİ
  yerleşimler zaten var) o noktaları da SİLMEK anlamına gelir — ama
  onlar C'nin KENDİ nokta kümesinin bir parçası olabilir/olmayabilir,
  bu ayrım global çağrıdan ÖNCE bilinemez (hangi noktaların C'nin resmi
  belge-kümesi, hangisinin sıradan bir yerleşim olduğu ayrı bir sınıflama
  gerektirir).

SEÇENEK B — SONRA (kurulur, sonra kutu içindeki kısmı TAMAMEN ATILIP
  YEREL olarak yeniden kurulur) — 🟢 ÖNERİLEN, ①'in gerekçesiyle AYNI
  Maliyet: küçük bir kutu için YEREL bir `voronoi_diagram()` çağrısı +
  KARA kesişimi — `B BOŞLUK`teki poligonlaştırma ölçümüyle AYNI mertebe
  (0,04-0,5 saniye, TAŞMA PROTOTİP/POLİGON FİYAT'ın bu gece ölçtüğü
  rakamlar — küçük bir kutu için bu SÜRENİN ÇOK ALTINDA kalır).
  Risk: kutunun SINIRINDA (kapsama kutusu kenarı) yeni geometri ile
  ESKİ (dışarıdaki, dokunulmamış) geometri arasında bir DİKİŞ/ÇATLAK
  oluşabilir (poligon kapanmama) — SEMA-C'nin kendi §2.3 uyarısının
  AYNISI ("açık eğri + kapalı bölge → iki yarım poligon"). Bu risk
  ÖLÇÜLMEDİ, bir uygulama oturumunun kabul testi olmalı (`SEMA-C §8.5
  SINAV 2`nin AYNISI: kutu dışının BİREBİR değişmediği doğrulanmalı,
  EK olarak kutu SINIRININ topolojik olarak KAPALI kaldığı da
  sınanmalı).
```

⇒ **B seçildi** — hem tek TEKNİK OLARAK MÜMKÜN yol (A shapely'nin API'siyle
doğrudan çakışıyor), hem de maliyeti bu gecenin iki bağımsız ölçümüyle
(TAŞMA PROTOTİP, POLİGON FİYAT) zaten UCUZ olduğu kanıtlanmış bir
işlemle (küçük-kutu poligonlaştırma) aynı sınıfta.

---

## ④ GERİ DÖNÜŞ YOLU — değişmedi

`MOTOR_C_KAPALI=1` — v1'deki tasarım hâlâ geçerli, konum/mekanizma
değişse de ortam-değişkeni deseni AYNI kalıyor.

---

## ⑤ ÖNGÖRÜ GÜNCELLEMESİ — kapsam ÇOK DAHA BÜYÜK

v1'in "küçük, mertebe onlarca yerleşim" tahmini M-3463 ile ÇÜRÜDÜ.
Yeni öngörü (`denetim/ONGORU-C-MOTOR-V2-0911.json`):

```
Karlofça'nın KENDİSİ artık C'dir (Bosna kale listesi — Kostayniça,
  Bihke/Bihać, Novi, Krupa, Brod — 5 isim, HİÇBİRİ yerlesimler.js'te
  yok, bkz. SEMA-C §3.3). C'nin işi artık YALNIZ hat çizmek değil, bu
  5 noktayı da EKLEMEK.
⇒ ENVANTER-C-II'nin "geniş ölçüt %83" (110 antlaşmanın ~91'i) sayısı,
  "dar %15" (16 antlaşma, yalnız net-tanımlı hat) sayısından ARTIK
  DAHA YAKIN bir mertebe olabilir — kesin sayı BU GÖREVDE YENİDEN
  ÖLÇÜLMEDİ, bir sonraki envanter turunun işi.
Kapsam büyüklüğü: küçük bir bölgeden (Doğu Trakya) BÜTÜN Osmanlı
  tarihindeki İSİMLE ANILAN her antlaşma-kalesi/nehri/dağına genişliyor
  — bu, `§2` yerleşim ekleme işiyle (mevcut, ayrı bir görev sınıfı)
  DOĞRUDAN KESİŞEN bir iş yükü demek.
```

---

## TESLİM

```
① 6+ mekanizma satır satır bulundu — HİÇBİRİNE tek tek enjeksiyon
   ÖNERİLMİYOR, tek post-hoc devralma noktası (kıyı kesimi + eğim devri
   SONRASI) öneriliyor, gerekçeli.
② emilme ön koşulu: motorun KENDİ ölçebileceği bir alan-eşitliği testi
   olarak tasarlandı (algoritma verildi, kod yazılmadı).
③ sıra: SONRA (B seçeneği) — ÖNCE teknik olarak imkânsız (shapely API'si).
④ geri dönüş: MOTOR_C_KAPALI=1, değişmedi.
⑤ öngörü büyüdü: Karlofça dahil, kapsam §2 yerleşim-ekleme işiyle
   kesişiyor, kesin sayı bu görevde ölçülmedi.
```

Karar gerektiren açık sorular: (1) post-hoc devralma mimarisi onaylanır
mı, yoksa tek-tek-enjeksiyon ısrarla mı isteniyor; (2) emilme ön koşulu
başarısız olursa motor HATA verip DURSUN mu yoksa o antlaşmayı SESSİZCE
atlayıp devam mı etsin; (3) Karlofça'nın 5 kalesinin nokta-ekleme işi
ayrı bir oturuma mı devrediliyor.
