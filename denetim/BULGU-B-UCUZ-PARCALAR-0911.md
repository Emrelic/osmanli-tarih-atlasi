# BULGU — B UCUZ PARÇALAR, 11 Eylül 2026

Oturum: B UCUZ PARÇALAR · Görev: 1.MURAT'ın tahta sevki (M-3348'e cevap)
Araç: `denetim/ARAC-B-UCUZ-PARCALAR-0911.py` (öngörü + ölçüm, commit
`207a523` önce yazıldı, ölçüm ondan SONRA koşuldu — D022).

🔴 **D022 SONUCU — öngörünün BİRİ tuttu, BİRİ ÇÜRÜDÜ, ve çürüyen kendi
ölçüm yöntemimin kusurunu ele verdi:**
```
① B2 enklav   ÖNGÖRÜ: "gevşetirsen çok daha fazla enklav gelir"  → ÇÜRÜDÜ
   250→800 km arası yalnız 8 YENİ adlı enklav getiriyor, 3'ün değil.
   Ama BEKLENMEYEN bir şey çıktı: gelenlerden biri (Cebel Merre,
   406.228 km²) HİÇ "küçük" değil — Emre'nin istediğinin TERSİ.
② B3 koridor  ÖNGÖRÜ: "kalan ihlal ~0 çıkar (B3 zaten çalıştı)" → ÇÜRÜDÜ
   106.123 "ihlal" bulundu. AMA ölçüp ölçmeyi bitirince kendi yöntemimin
   BOZUK olduğunu fark ettim — aşağıda §2, açıkça itiraf ediliyor.
```

---

## §1 — ① ENKLAV BİRLEŞTİRME EŞİĞİ

### 1.1 Bugünkü eşik ve KOD İÇİNDEKİ ÇELİŞKİ (küçük ama gerçek bir bulgu)

```
SABİT:      B2_ENKLAV_KM = 250.0   (arac/uret_petek.py:1422)
            "Emre: 'karasal' · ölçülen en uzak vaka 223 km"
DOCSTRING:  _b2_enklav_birlestir() (satır 1513):
            "Ana kütleye ≤800 km, KARASAL, arası BOŞ olan enklavı
             köprüyle bağlar."
```
🔴 **Docstring 800 km diyor, sabit 250 km.** Bu tam olarak `CLAUDE.md
§2`'nin uyardığı sınıf: *"sayılar kodda dinamik, yorumlar eski."*
Zararsız (kod sabitten okuyor, yorumdan değil) ama okuyan bir sonraki
oturumu yanıltabilir — düzeltilmesi ÖNERİLİR (bu görevin dışı, `arac/`
donuk, dokunmadım).

### 1.2 TAM SAYIM — 523 dönemin HEPSİ (6 kesit örneklemi DEĞİL)

`data/donemler.js` (koşu 8 çıktısı, **POST-B2** — yani B2 zaten
uygulanmış hâliyle) üzerinde, HER 523 dönem-kırılmasında ana gövdeden
kopuk kalan parçalar arandı:

```
Toplam enklav-görünümü:         49.552   (dönem-değişimi × parça, TEKİL DEĞİL)
  KARASAL (B2'nin değerlendirdiği): 332
  DENİZ AŞIRI (B2 zaten reddeder): 49.220
```

⚠️ Bu 332/49.552 sayısı **DÖNEM-DEĞİŞİMİ bazında**dır — üretim logundaki
"petek-gün" sayaçlarıyla (aşağıda) BİRİM OLARAK FARKLI, karıştırılmasın
(`D188`: "sayıyı biliyorum ≠ neye göre olduğunu biliyorum").

**Kümülatif (mesafe ≤ X km):**
```
<=100 km :   96 görünüm ·    835.213 km²
<=200 km :  144 görünüm ·  1.017.500 km²
<=250 km :  273 görünüm ·  2.823.955 km²   ← BUGÜNKÜ EŞİK
<=300 km :  282 görünüm ·  3.352.234 km²   (+9)
<=400 km :  311 görünüm ·  5.206.422 km²   (+29)
<=500 km :  319 görünüm ·  5.451.714 km²   (+8)
<=600 km :  324 görünüm ·  5.923.970 km²   (+5)
<=800 km :  328 görünüm ·  6.301.776 km²   (+4)
<=sonsuz :  332 görünüm ·  6.679.581 km²   (+4)
```
🟢 **ÖNGÖRÜ ÇÜRÜDÜ — "çok daha fazla" YANLIŞ.** Eşik zaten adayların
%82'sini (273/332) kapsıyor; 250→800 km arası yalnız **8 farklı adlı**
enklav ekliyor (dönem-görünümü olarak +55, ama bu 8 kimliğin tekrarları):

```
Cebel Merre        1 görünüm  · en büyük  406.228 km² · 279 km (1883-12-23)
Cübeyl             8 görünüm  · en büyük  195.432 km² · 387 km (1629-01-01)
Medine             9 görünüm  · en büyük   94.451 km² · 552 km (1918-04-14)
Nâsıriye           8 görünüm  · en büyük   30.662 km² · 458 km (1629-01-01)
Nühûd              5 görünüm  · en büyük   18.801 km² · 279 km (1884-01-01)
Azak              18 görünüm  · en büyük   15.796 km² · 323 km (1555-09-27)
Tîzî Vezzû         3 görünüm  · en büyük    9.349 km² · 285 km (1856-01-01)
Tarsus             3 görünüm  · en büyük    2.137 km² · 371 km (1352-03-01)
```

🔴🔴 **VE BEKLENMEYEN BULGU — D010, iki yöne bak, ve bir yön Emre'nin
NİYETİNİN TAM TERSİNİ buluyor.** Emre "küçük enklavların yutulmasını"
istiyor. **Cebel Merre 406.228 km²** — bu bir "küçük enklav" değil,
Bulgaristan'dan (110.879 km²) BÜYÜK bir alan. Yalnızca mesafe eşiğini
gevşetmek bunu da otomatik yutar; bu muhtemelen **istenen değil**.
Aynı ailede Cübeyl (195.432 km²) de şüpheli büyüklükte; Medine
(94.451 km²) sınırda. Buna karşılık Tarsus (2.137) · Tîzî Vezzû (9.349)
· Azak (15.796) · Nühûd (18.801) · Nâsıriye (30.662) gerçekten "küçük
enklav" tarifine uyuyor.

⚠️ **Ve mesafeyle ayıklanamaz**: Cebel Merre'nin mesafesi (279 km) listedeki
EN KISA mesafelerden biri — Cübeyl'den (387 km) bile daha yakın. Yani
mesafe eşiğini "Cebel Merre'yi dışarıda bırakacak ama Tarsus'u içeri
alacak" şekilde ayarlamak MÜMKÜN DEĞİL; ikisi neredeyse aynı bantta.

### 1.3 250 km altında ama HÂLÂ ayrı duran (mesafe suçlu değil)

```
1607-01-01   191,4 km    69.692 km²  (Kabala)
1725-08/09    32,6 km    18.522-57.673 km²  (Ordubad, Tebriz)
1918 (5 kez)  62,4 km    37.426 km²  (Maan)
1578-1585    223,0 km    15.796 km²  (Azak, 5 kez)
```
Bunların hepsi BUGÜNKÜ 250 km eşiğinin ALTINDA, ama B2 onları GENE DE
birleştirmemiş. Mesafe suçlu değil — muhtemel sebep `_bant_baskasinin_
topragini_kesiyor_mu` (araya başka devletin toprağı giriyor). **Bu
DOĞRU davranış olabilir** (1725'te Tebriz-Ordubad arası hâlâ Safevî
toprağıysa, birleştirmemek doğrudur) — ama BEN bu kontrolü tekrar
KURAMADIM (`_TUM_AGAC`/`sahip_ix` motorun içinde, betiğim onu okumuyor).
**Bu satır DOĞRULANMADI, yalnız işaretlendi** (`D107`: okumadım).

### 1.4 ③ SAYI ÖNERİSİ — nereden geldiği

```
🟢 ÖNERİ: B2_ENKLAV_KM  250 → 500 km  (Medine·Nâsıriye·Nühûd·Azak·
   Tîzî Vezzû'yu kapsar; Cübeyl 387<500 zaten girer)
🟢 EK ÖNERİ (yeni bir eşik, ayrı bir sabit): B2_ENKLAV_ALAN_TAVAN
   ~100.000 km² — Cebel Merre'yi (406k) VE Cübeyl'i (195k, sınırda
   ama tercihen dışarıda) DIŞARIDA bırakır; Medine (94k) sınırın hemen
   altında kalır ve KAPSANIR.
   Sayının kaynağı: bugün ZATEN merge edilen en büyük vakanın
   (223 km, Azak civarı, 15.796 km²) ÜSTÜNE mütevazı bir pay — 100.000
   km², "bir sancak/eyalet ölçeği" ile "bir ülke ölçeği" arasındaki
   gözle görülür sınır (Cebel Merre 406k gerçekten bir ÜLKE büyüklüğü).
```
⚠️ Bu iki sayı da **öneridir, karar Emre'nin.** Cebel Merre'nin NEDEN bu
kadar büyük bir "enklav" göründüğü (gerçek tarihî izolasyon mu, yoksa bir
veri/sahiplik hatası mı) AYRICA incelenmeli — bu görev bunu ÇÖZMEDİ, YALNIZ
GÖRÜNÜR KILDI.

---

## §2 — ② KORİDOR KURALI — VE KENDİ YÖNTEMİMİN ÇÜRÜMESİ

### 2.1 Ham bulgu

Aynı yöntemle (`kapat` + ağız/derinlik/genişlik testi, `_b3_koridor_kirp`
ile AYNI formül) 523 dönemin hepsinde "post-B3 gövdede kalan ihlal"
arandı: **106.123** bulundu — en sık tekrar eden `Tûr (Sînâ)` (Sina
Yarımadası, Kızıldeniz kıyısı), derinlik 276 km > genişlik 22 km,
1517'den itibaren neredeyse HER dönemde aynı şekille tekrarlanıyor.

### 2.2 🔴🔴 İTİRAF — bu sayı GÜVENİLİR DEĞİL, ve sebebini buldum

`arac/uret_petek.py`nin GERÇEK B3 çağrı sırası şudur (satır 4580-4583):
```
g = delikleri_doldur(kapat(g), sahip_ix=aktif)
g = gosterim_duzelt(g, aktif)        # B2 + B3 BURADA çalışır
g = poligonal(g.intersection(KARA))  # KIYIYA KESME BURADA, B3'TEN SONRA
```
**B3, kıyı kesiminden ÖNCE çalışıyor** — yani Voronoi tabanlı, henüz
kıyıya oturmamış "ham" bir gövde üzerinde derinlik/genişlik ölçüyor.
Ama BENİM elimde yalnız `data/donemler.js`'teki **KAYDEDİLMİŞ** (yani
zaten kıyıya kesilmiş, POST-`intersection(KARA)`) gövde var — kıyı
kesiminden ÖNCEKİ ham hâli hiçbir dosyada SAKLANMIYOR (yorum: "Geometri
gönderilmez; yalnızca aktif petek indeksleri").

⇒ **Benim testim, GERÇEK kıyı çizgisinin kendisini "koridor" sanıyor.**
Sina Yarımadası'nın Kızıldeniz kıyısı GERÇEKTEN uzun ve dar bir doğal
şerittir (derinlik/genişlik oranı yüksek) — bu bir Voronoi-artefaktı
DEĞİL, GERÇEK COĞRAFYA. B3 buna hiç bakmadı çünkü B3 çalıştığında bu
şerit henüz kıyıya kesilmemişti; ben ona baktığımda kıyıya ÇOKTAN
kesilmişti. **106.123 sayısı bu yüzden `ölçülemedi` diye damgalanıyor
— `bulunamadı` değil, `okudum ama yanlış katmanı okudum`.**

📌 `D107`: "bulunamadı / ölçülemedi / okumadım" üç ayrı damga — bu
tam olarak ortadaki kutu: ben bir şey ÖLÇTÜM, ama ölçtüğüm şey
sorulan soruyu CEVAPLAMIYOR.

### 2.3 O zaman gerçek kanıt nedir — ÜRETİM LOGUNDAN

`arac/*.py` çalıştırılmadı; ama **son tam koşuların (30 Ağu - 3 Eylül)
kendi bastığı** B2/B3 sayaçları (`kosu_3eylul_2.log`, en güncel tam log)
gerçek, PRE-kıyı-kesim ölçümdür:

```
B3 KORİDOR: 181.538 dolduruldu · 666.244 SIĞ diye BIRAKILDI
            (Emre bunu istiyor) · 18.845 kapalı · 3.081 yerleşimli
            · 17 k.boşluk
```
(Not: bu sayı **petek-gün** birimi, benim 523-dönem sayımım gibi
DEĞİL — birim farkı `§1.2`'deki uyarıyla aynı sınıftan.)

⇒ Doldurulan/bırakılan oranı **%21,4 / %78,6**. B3 aktif ve büyük
hacimde çalışıyor; "SIĞ" (dokunulmayan) çoğunluk BEKLENEN (Emre bunu
istiyor). Bu oranın kendisi B3'ün BOZUK olduğuna dair bir işaret
TAŞIMIYOR.

### 2.4 ③ SAYI ÖNERİSİ — koridor için

```
🟡 ÖNERMİYORUM — güvenilir bir ölçüm YAPAMADIM (§2.2). B3_KAPAMA_DER
   (0,45° ≈ 50 km) için bir DEĞİŞİKLİK önerecek kanıtım yok; üretim
   logundaki oran (%21/%79) makul görünüyor ve `D010`'un istediği "iki
   yönde bak" testi BU görevde YAPILAMADI çünkü ham (pre-kıyı) geometri
   hiçbir dosyada durmuyor.
   TEK GÜVENİLİR YOL: bir sonraki TAM KOŞUYA `_b3_koridor_kirp` içine
   BİR SATIRLIK bir loglama eklemek — "kalan ihlal" sayısını gerçek
   pipeline'ın İÇİNDEN, kıyı kesiminden ÖNCE basmak. Bu görev `arac/`e
   dokunamadığı için (donuk) burada YAPILAMADI; AYRI bir sevk gerekir.
```

---

## §3 — ÖLÇMEDİKLERİM (`§7.1④`)

```
① Yabancı devletlerin (`data/devletler_harita.js`) enklav/koridor
   durumu ÖLÇÜLMEDİ — yalnız Osmanlı (`data/donemler.js`) tarandı.
   Emre'nin verdiği örnekler (Kefe, Hotin) Osmanlı-tarafı olduğu için
   kapsam BUNA göre seçildi, ama görev metni yabancı devletleri
   dışlamıyordu.
② `_bant_baskasinin_topragini_kesiyor_mu` (başkasının toprağı testi)
   yeniden KURULMADI — §1.3'teki "250 km altı ama ayrı" liste bu
   yüzden DOĞRULANAMADI, yalnız işaretlendi.
③ Cebel Merre'nin GERÇEK sebebi (tarihî izolasyon mu, veri hatası mı)
   araştırılmadı — yalnız BÜYÜKLÜĞÜ ölçüldü ve TERS bulundu.
④ B3 için "kaç petek/gövde ihlal ediyor" sorusu net cevaplanamadı
   (§2.2) — bu görevin en önemli negatif sonucu: SORULAN SORU, elimdeki
   veriyle CEVAPLANAMAZ, yalnız bir SONRAKİ KOŞUDA enstrümantasyonla
   cevaplanabilir.
⑤ `motor_kara.geojson` bugünkü (koşu 9, Sep 11) taze hâliyle kullanıldı;
   `donemler.js` koşu 8'in (Sep 8) çıktısı — üç günlük bir versiyon
   farkı var, etkisi küçük varsayıldı ama ÖLÇÜLMEDİ.
⑥ Motor koşulmadı, `arac/*.py`ye hiçbir satır yazılmadı.
```
