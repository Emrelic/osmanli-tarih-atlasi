# P13B · MOTOR KOD — 14 Eylül 2026 (erken kapanış: koordinatör TOPARLA, limit %95)

Dosyalar: `arac/uret_petek.py` (tek yazılan üretim dosyası) · bu rapor · `denetim/ARAC-P13B-*-0914.py`.
**Tam koşu YOK · commit YOK · veri dosyasına yazılmadı.** `py -m py_compile arac/uret_petek.py` → 0.
Motor süreci koşmuyordu (ölçüldü), `uret_petek.py` başlangıçta git-temizdi (HEAD 8ba093e).

## ① UYGULANAN İKİ KALEM (ikisi de sahipliği ve gövde `o`/`v` sınırını DEĞİŞTİRMEZ)

### 0048/H-0010 · Y7 — serbest kenar birleştirme + sadeleştirme — ✅ UYGULANDI
```
kod     SERBEST_SADE_TOL = 0.02 · yeni serbest_sadelestir() · serbest_kenar() dönüşü ondan geçer
ne      boundary∩buffer kesişiminin bitişik parçaları linemerge ile birleşir, her hat
        simplify(0.02, topoloji korumalı). Tol = SERBEST_TOL (hattın konum payı ±2 km).
etki    YALNIZ window.SERBEST / SERBEST_U / DONEMLER[].sb (hale çizgisi)
sınama  denetim/ARAC-P13B-SERBEST-0914.py → 16/16
        sentetik: 2 noktalı hat · tol üstü hat · ayrık iki hat → koordinat BİREBİR
        koşu 10 havuzu: eşsiz hat 362→225 · köşe 6.997→1.442 · en büyük sapma 0,0200°
        hat içi en kısa segment medyanı 0,59→4,76 km
        1600-10-20 dönemi (H-0010): hat 35→34 · köşe 747→252 · min segment 0,10→0,83 km
```
⚠️ Ekrandaki diken ÜÇGEN raporuna göre asıl olarak `js/app.js` hale genişliğinin tavansızlığından
(BULGULAR-UCGEN-19AGU §5); bu motor yarısıdır, app.js yarısı PAKET-UI4/P14'te.

### 0048/H-0009 · Y6 — seyreltme geçerlilik koruması — ✅ UYGULANDI · sınama: aşağıda ②
```
ölçüm   koşu 10 data/devletler_harita.js: 48.302 yabancı parçanın 3.334'ü GEÇERSİZ
        (3.328'inde halka kendini kesiyor · 6'sında delik/dış halka) · 6.375 dönem kullanımı
        (scratchpad/gecersiz.py; paketteki "parça 2762" indeksi koşu 10'da başka parça)
kod     seyrelt(..., sayac=None): halka başına ① eski yol (preserve_topology=False) sonuç
        basitse AYNEN · ② değilse koşular topoloji korumalı yeniden · ③ o da değilse aslı.
        Çok halkalı parça geçersizse ve aslı geçerliyse halkaları aslına (≤4 tur).
        Çağrı yerinde yeni bilanço satırı "🧷 seyreltme geçerlilik koruması …" (SIFIR da basılır).
etki    YALNIZ yabancı havuz köşeleri (bozuk halkalarda); donmuş köşeler hep korunur ⇒ boşluk
        doğamaz; Osmanlı havuzu seyreltilmez (değişmez).
```

## ② SINAMA — Y6
`denetim/ARAC-P13B-SEYRELT-0914.py` (ESKİ = `git show HEAD`, YENİ = çalışma kopyası, AST ile):
① sentetik dişli halkalar (eski kendini kesen üretiyor mu · yeni 0 · eski basitse bit bit aynı ·
donmuş köşe kaybı 0) · ② sentetik delik/dış halka kesişmesi · ③ Osmanlı havuzu üzerinde nedensellik
(seyreltme öncesi/sonrası geçersiz parça) · ④ koşu 10 yabancı havuzunda birebirlik.
SONUÇ (teslim anı):
```
HIZLI kip (P13B_HIZLI=1, yalnız ①②)   9/10
  ✓ eski çıktısı basit her halkada YENİ = ESKİ bit bit (1500/1500) · donmuş köşe kaybı 0
  ✓ delik/dış halka kesişmesi: eski GEÇERSİZ → yeni geçerli (parca_asli=1, kalan 0)
  ✓ geçerli çok halkalı parçada YENİ = ESKİ
  ✗ "eski seyrelt kendini kesen halka üretiyor" — 0/1500: rastgele üreteç kusuru TETİKLEMEDİ.
    Kod hatası değil SINAV eksiği: halka düzeyi koruma dalı (② topoloji korumalı · ③ aslı)
    sentetikte HİÇ ÇALIŞMADI.
TAM kip — teslimden SONRA bitti: 16/17 (tek ✗ yukarıdaki sentetik tetiklenmeme)
  ③ Osmanlı havuzu (seyreltilmemiş girdi, seyreltme benzetimi, koşu 10):
     geçersiz parça  girdi 294 · ESKİ seyrelt sonrası 658 · YENİ sonrası 117
     ⇒ NEDENSELLİK: kusurun ~%55'ini seyreltme üretiyor; %45'i seyreltmeden ÖNCE var
       (gövde birleşiminin kendisi geçersiz — ayrı kalem, bu yama çözmez)
     sayaç halka_koru 478 · halka_asli 127 · parca_asli 2 · kalan geçersiz 49
     birebirlik: eski halkası basit olanlarda 3589/3596 eşit (7 fark = parça dönüşü)
     🔴 KÖŞE BEDELİ +%25,7 (419.959 → 527.988)
  ④ yabancı havuz (ZATEN seyreltilmiş koşu 10 çıktısı): eski basit halkada 50.045/50.045 eşit ·
     yeni çıktıda kendini kesen halka yalnız girdisi zaten kesenler (3.206)
```
🔴 **BEDEL:** Osmanlı benzetiminde köşe +%25,7. Yabancı havuzda gerçek bedel ÖLÇÜLEMEDİ (çıktı zaten
seyreltilmiş); aynı oran tutarsa `devletler_harita.js` (56 MB) yayın bütçesini zorlar — `seyrelt`in
var oluş sebebi bayttı. Koşu 11'e sokmadan önce koordinatör kararı: kabul · geri al · ya da ② dalını
kaldırıp yalnız ③ (aslına dön) bırak (köşe daha da artar ama sayı küçük halkada).
📌 Motor bilanço satırındaki "beklenen 0" düzeltildi: kalan geçersiz 0 BEKLENMEZ (girdisi geçersiz parça).
🔴 İlk teslimde halka düzeyi dal **gerçek veride sınanmadan** motora girmişti; artık sınandı (③). Tetiklendiği tek yer, eski çıktının
ZATEN kendini kestiği halka; en kötü hâlde seyreltilmemiş aslını döndürür. Koordinatör koşu 11'den önce
`py denetim/ARAC-P13B-SEYRELT-0914.py` (tam kip) sonucunu görmeden istemezse geri alma:
`git diff -- arac/uret_petek.py` içinde `seyrelt` gövdesi + çağrı yerindeki `_SEYRELT_SAYAC` bloğu.

## ③ ÖLÇÜLDÜ, UYGULANMADI — tasarım/öneri

### 0048/H-0009 · Y5 — `_dolgu_kumesi` kasitli_bosluk'u tanımıyor — 🟡 TASARIM · KARAR İSTER
`denetim/ARAC-P13B-DOLGU-KB-0914.py` (motor fonksiyonu AST ile; yaklaşıklık: yalnız YAZILI devir,
`_kusatilmis` hariç). Önerinin farkı = bugün kapının doldurduğu kasıtlı boşluk peteği:
```
10 kesit toplamı 148 petek-gün · 23 ayrı kasıtlı boşluk
Doha (Katar) kasitli_bosluk kur 1825 · 1602 kapı → safevi   ✓ H-0009 teşhisi doğrulandı
ama aynı kural şunları da boşaltır: Katar Yarımadası (iç) 1600/1602/1900 → OSMANLI ·
Kuveyt 1600-1700 → OSMANLI · Ramletü Murzuk/Zellâf → OSMANLI/TABI · Abu Dabi · Bayûda/Nûbe çölü …
```
🔴 Y4 veri yamasıyla ÇELİŞİYOR: Y4 Katar'ı tâbi yaparken Doha peteğinin kapıyla dolmasını bekliyor;
Y5 onu boşaltır. ⇒ Doğrusu muhtemelen "kasitli_bosluk'u ZAMANLI yapmak" (Doha bayrağı 1825-1871 için).
Şema kararı → koordinatör/Emre.

### 0021/H-0005 · A6A-Y14 — kurulmamış Uman peteği — 🟡 TASARIM (aleti yazıldı, KOŞULMADI)
Mekanizma (kod okuması): `_kusatilmis` sahnede olmayan+sahipsiz komşuyu PAYDADA tutup PAYA katmıyor
⇒ Uman ile Yelisavetgrad (ikisi de kurulmamış) birbirini kilitliyor. Koşu 10 logu: Yelisavetgrad
1616-1752 devrediliyor, Uman listede yok. Aday çare: bitişik adaylar BİLEŞEN olarak sınanır
(`petek_epok`un "bitişik ölü hücreler birlikte" kuralı), karar = eski ∪ bileşen; tek üyeli bileşende
sonuç tanım gereği aynı. Bedel `denetim/ARAC-P13B-KUSATMA-0914.py` ile ölçülecek (motorun gerçek
`_kusatilmis`ine sadakat sınavı dahil) — **koşulmadı.** Sahiplik değiştirir ⇒ ölçmeden uygulanmaz.

### BOĞAZ kümesi — 0008/H-0005 · 0016/H-0004 · 0016/H-0005 · 0019/H-0018 · 0019/H-0019 · 0031/H-0022 · parti-0002/H-0014 — 🟡 TASARIM
Kod okuması + M-1200 ölçümü: maske boğazları KESİYOR; kör olan KARA-KISITLI SAHİPLİK ızgarası
(KV_ADIM 0,05° ≈5,5 km, İstanbul Boğazı iki yaka hücresi komşu). İkinci bir kapı daha var:
`KV_MIN_KM2 = 200` altındaki karşı yaka parçaları ızgaraya HİÇ sorulmuyor, ve düz hattı karada kalan
parça Voronoi'de kalıyor. Öneri: Dijkstra'da "gizli boğaz kenarı" yasağı (iki ucu kara, merkezleri
arası örneklerde su) + gizli boğaz yakınındaki parçalar için KV_MIN_KM2 muafiyeti. Global sahiplik
değişikliği (Messina · Kerç · Pag · fiyortlar da girer) ⇒ koşu 11'in "tek yapısal değişiklik" kararına
bağlı. Kapsam aleti `denetim/ARAC-P13B-BOGAZ-0914.py` yazıldı (gizli kenar taraması + koşu 10'da
İstanbul/Üsküdar/Kilitbahir/Çanakkale/Çimpe/Gelibolu karşı yaka parçaları) — **koşulmadı.**
0019/H-0019 (Rumeli Hisarı tarihleri) maskeden sonra. 0016/H-0005 Enez/Keşan dönem ölçümü P13A'da.

### SEÇİCİ İNCE — 0014/H-0004 · 0016/H-0003 · 0020/H-0005 · 0029/H-0007 — 🟡 TASARIM (Emre kararı (c))
Kod okuması (ÖLÇÜLMEDİ): kıyıya SADE_TOL uygulanmaz (coverage_simplify KARA kesiminden önce) ⇒
Z-0015'in "KARA_TOL/SADE_TOL" teşhisi koddan tutmuyor. Göl kıyısını Osmanlı gövdesinde
`GOLLER.simplify(0.01)` (≈1,1 km, KARA_TOL'un 5 katı) sınırlıyor (Tuz · Van); yabancı gövdede
(Aral · Baykal · Malta) `seyrelt SEYRELT_TOL 0.03` (≈3,3 km). Öneri: (i) GOLLER tol → KARA_TOL,
(ii) seyrelt'te göl kıyısı ve küçük ada halkası köşelerini dondur. Bayt bedeli ölçülmedi.
Aleti `denetim/ARAC-P13B-INCE-0914.py` yazıldı — **koşulmadı.** 0029/H-0007: Osmanlı havuzu
seyreltilmez; kalan kabalık arayüz tarafında olabilir (GeoJSON kaynak toleransı) — ölçülmedi.

### 0038/H-0003 · Gât kavis — 🟡 TASARIM · 0038/H-0004 köprü rengi — 🟢 KOD ZATEN VAR
H-0004: 29 Ağustos'tan beri köprü yaslandığı gövdenin rengini alıyor; koşu 10 logu
`B2 KÖPRÜ RENGİ: 19.771 DOĞRUDAN · 6.450 TÂBİ` ⇒ dal ateşliyor; paketteki "hep doğrudan" notu çürüdü.
Göz teyidi istenir. H-0003: `B2_KAVIS 0,35` kodda var; Gât köprüsü hiç kurulmuyor (BULGU-GAT).
Kod okumasından ek aday: bant sınavı sahipsiz dolgu hücresini "başka devletin toprağı" sayıyor olabilir.
Aleti `denetim/ARAC-P13B-GAT-0914.py` yazıldı — **koşulmadı.**

## ④ YAPILMADI
```
0012/H-0001  (a) "enklav doldurma" — M-2104 onayı var, TARİFİ bulunamadı (tahta + KARAR-MASASI
             yalnız adını veriyor). Kodda B1/B2/B3/ekleyici kapı zaten var; (a) hangisi? SORU.
0012/H-0002  (b) çok yönlü takviye — onaylanmadı (M-2104)
0034/H-0028 · 0035/H-0001 · H-0047 · H-0064 · H-0102  çöl boyama — Emre kararı: Ⓐ maliyet-mesafe
             beklensin. Bugünkü kural COL_PUAN_ESIK 8 (koşu 10: 33.924 petek-gün takıldı).
0042/H-0005 · H-0012  sürtünme — kod okuması: eğim sürtünmesi yalnız deniz aşırı parçaların ızgara
             kararında etkili; Tuna/Kafkas kara sınırı Voronoi+yaslamadan geliyor ⇒ Ⓐ işi (yapısal).
0035/H-0072 · H-0101  T-kavşak/üçgen — ölçülemedi. Yan not: Y6'nın 3.334 geçersiz yabancı parçası
             bu görünümün bir kaynağı olabilir (hipotez, ölçülmedi); P13A binme ölçümüyle çaprazlanmalı.
0041/H-0001  B görünümü — tasarım yok (Ⓐ/Ⓑ ile tek iş)
0035/H-0087  yol ağı — BES-ALTYAPI 5. unsur; koridor ağı motora girmiyor (M-1850)
```

## ⑤ KOŞU 11 İÇİN
- Bilanço satırları: `🧷 seyreltme geçerlilik koruması …` (beklenen: kalan geçersiz çok halkalı parça 0)
  · `Serbest kenar: N eşsiz hat` (koşu 10: 362 · ölçülmüş benzetim ≈225).
- `devletler_harita.js` boyutu Y6 yüzünden az miktar ARTABİLİR (aslına dönen halkalar); `donemler.js`
  SERBEST havuzu küçülür.
- Y6/Y7 dışında motor davranışı değişmedi; iki değişiklik de sahiplik/dönem kırılması üretmez.
