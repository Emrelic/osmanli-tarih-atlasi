# KASA-GOVDE-TANIK-TARAMA-1010 — "gövdesi tanıksız uzun dilim": kaynak cümlesi dilimin neresini tarihliyor?

Görev: YILDIRIM BAYEZIT (UZUN-DILIM kararı ④b, sıranın başı) · Araştırmacı: KASA · `data/` DONUK · salt okuma.
Çıkış noktası: UZUN-DILIM §1.4 — uzun dilimde `kaynak:` dolu olmak koruma sağlamadı (kontrol 5/6 YANLIŞ), çünkü
kaynak bir UCU tarihliyor, gövdeyi değil. Bu tarama "kaynak dolu mu" yerine "kaynak dilimin ne kadarını kapsıyor"
diye soruyor.

## 0. ÖNGÖRÜ ve ÖLÇÜT (ölçümden ÖNCE, 2026-10-10 — ayrı commit, sayım yapılmadan)

### 0.1 Tanımlar (kilitli)
- **Dilim, uzunluk L, kırpma:** UZUN-DILIM §0.1 ile aynı (`girdi.yukle`, `gun.gun`, `__BOSLUK__` hariç; `t` yoksa
  `UFUK[1]`).
- **Kaynak yılları Ykay:** dilimin `kaynak` metnindeki 3-4 haneli sayılar; yalnız **[f−5, t+5]** aralığına düşenler
  tutulur. (Hicrî yıl miladî aralığa denk düşerse yanlış eşleşebilir; beyanlı sınır. Parantezli miladî karşılık
  zaten metinde olduğundan etki küçük beklenir.)
- **Kapsama C:** Ykay'da en az 2 farklı yıl varsa `C = (max − min) / L` (0-1'e kırpılır); 1 yıl ya da hiç yıl
  yoksa `C = 0`. Kaynaksız dilimde `C = 0`.
- **Tanıksız gövde U (risk):** `U = L × (1 − C)` yıl.
- **Sınıflar:** `KAYNAKSIZ` · `GÖVDESİZ` (kaynaklı, C < 0,5) · `GÖVDELİ` (kaynaklı, C ≥ 0,5). Ayrıca kaynaklılar
  için uç etiketi: BAŞ (Ykay'da f ± 5 var) · SON (t ± 5 var) · İKİ UÇ · HİÇBİRİ. UFUK DAMGASI ucu kendiliğinden
  "kapsanmış" SAYILMAZ (kapı tarih değildir).
- **`kaynak:"bulunamadi"`** (koordinatör hükmü ⑤): KAYNAKSIZ sayılır.
- **Örneklem G (risk):** GÖVDESİZ sınıfından U'ya göre azalan ilk 40; UZUN-DILIM'de okunan 20 kontrol dilimi
  çıkarılır (tekrar okunmaz, hükümleri ayrıca raporlanır). Eşitlikte dosya+satır sırası.
- **Örneklem K (kontrol):** GÖVDELİ sınıfından, L ≥ G'nin en küçük L'sinin yarısı olanlar arasından
  `random.Random(1010)` ile 20.
- **YANLIŞ / TEMİZ / ÖLÇÜLEMEDİ:** UZUN-DILIM §0.1 ile aynı (şehir adlı tanık; iç ≥ 1 yıl başka `d:`, terk, VARLIK;
  uç ≥ 5 yıl sapma; `v:` farkı ve S sayılmaz; ÖLÇÜLEMEDİ paydaya girmez). Ek: **TEMİZ-ZAYIF** ayrı etiket — tanık
  sahibi doğruluyor ama kesintisizlik yalnız sessizlikten (UZUN-DILIM'in 19'u gibi). Oran iki türlü verilir:
  ZAYIF TEMİZ'e sayılarak ve ÖLÇÜLEMEDİ'ye sayılarak.
- Kaynak kuralı: İslâm dünyası TDV birincil; dışı akademik/ansiklopedik birincil; Vikipedi tanık sayılmaz.
- Napolyon İspanyası (koordinatör ③): bu taramada çıkan İspanyol dilimleri için şehir başına "doğrudan Fransa ilhakı
  (Katalonya 1812) ↔ Joseph Bonaparte krallığı" ayrımı aranır; ölçülemezse beyan.

### 0.2 Sayısal öngörüler (sayımdan önce)
- Kaynaklı 1.231 (− 6 `bulunamadi`) dilimin sınıfları: GÖVDELİ **%35 ± 15**, GÖVDESİZ **%65 ± 15**; GÖVDESİZ'in
  içinde hiç yıl taşımayan (`mali`, `sokoto` türü) **%10 ± 10**.
- L ≥ 200 yıllık kaynaklılarda GÖVDELİ payı daha düşük: **%20 ± 15**.
- Uç etiketi (kaynaklılar): BAŞ ağırlıklı — BAŞ-yalnız **%45 ± 15**, SON-yalnız **%20 ± 10**, İKİ UÇ **%25 ± 15**.
- G'nin U eşiği (40.'nın U'su): **250 ± 100 yıl**. G'de `osmanli` payı **≥ %30** (fetih yılını tarihleyen kaynak +
  1918/1923'e uzanan gövde); `ispanya` (UZUN-DILIM kontrolü dışındakiler) ikinci.
- **G YANLIŞ oranı** (ZAYIF TEMİZ'e sayılarak): **%40 ± 20**. **K YANLIŞ oranı:** **%15 ± 15**.
- Hipotez: G − K ≥ **20 puan** ⇒ "kapsama" ölçütü "kaynak dolu mu"dan iyi ayırıyor.
- Ege kutusu (enlem 35-41, boylam 23-28,5): bütün dilimler (kaynaksız dahil) U'ya göre sıralandığında ilk 500'de
  **10 ± 8** Ege dilimi; çoğu `osmanli` ya da `venedik`/`ceneviz`.

### 0.3 Yanlışlanma şartları
- G − K < 10 puan ⇒ kapsama ölçütü de ayırt etmiyor; risk = yalnız L kalır ve beyan edilir.
- K'da ölçülebilen < 8 ⇒ oran raporlanır, hüküm verilmez.
- G'nin YANLIŞ'larının ≥ %50'si kaynağın TARİHLEDİĞİ uçta çıkarsa (gövdede değil) ⇒ hipotezin mekanizması
  ("kaynak ucu belgeliyor, hata gövdede") yanlış.
