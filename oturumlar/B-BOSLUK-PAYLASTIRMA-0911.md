# ŞARTNAME — B③ BOŞLUK PAYLAŞTIRMA (11 Eylül 2026)

```
AD      B BOŞLUK PAYLAŞTIRMA
MODEL   Opus
DİZİN   C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
🔒 arac/ DONUK — bu bir ŞARTNAME, kod YAZILMADI, koşu AÇILMADI.
```

Öngörü: `denetim/ONGORU-B-BOSLUK-PAYLASTIRMA-0911.json`, commit
`da9d821`. Bu bir ölçüm değil bir SENTEZ görevi — kanıtlar bu gecenin
iki kardeş oturumundan (`TAŞMA ÖLÇÜM`, `TAŞMA PROTOTİP`) geliyor,
tekrar ölçülmedi, kaynağıyla birlikte alıntılandı.

Emre'nin kuralı (`oturumlar/GORUNUM-ABC-0910.md`, kendi tarifi):
> *"Bir tarafta sıradağ, öteki tarafta düzlük ⇒ düzlük daha çok pay
> alır."*

---

## ① MOTORUN NE YAPMASI GEREKTİĞİ — üç kapı, satır satır

`arac/uret_petek.py` satır 2384-2429, PETEK_D'ye eğim-tabanlı devir
uygulayan döngü. Üç kapı:

```python
2388  if _kvana[_i] is not None and _p.equals(_kvana[_i]):
2389      _kvana_korundu += 1
2390      continue                      # tohumun ÜSTÜNDEKİ parça DEVREDİLMEZ

2391      _a = _ham_km2(_p)
2392      if _a < KV_MIN_KM2:           # KV_MIN_KM2 = 200
2393          _kvkucuk_n += 1; ...
2394          continue                      # 200 km² altı parça ELENİR

2396      if _kvkp.contains(LineString([_ptl[_i], _rp])):
2397          continue                      # tohumdan parçaya düz hat KARADA
                                            # kalıyorsa ızgaranın cevabı ATILIR
```

### Her kapı için: kalksın mı, niçin?

**`:2388` (_kvana koruması) — KALMALI.** Bu kapı bir GÜVENLİK kilididir:
bir yerleşimin KENDİ tohum-parçasının (ana kütlesinin) bir başkasına
devredilmesini engeller — bu davranış akış-tabanlı bir modelde de
gereklidir (bir noktanın kendi merkezini kaybetmesi hiçbir zaman doğru
olamaz). **Akış-tabanlı geçişe TAŞINACAK, kaldırılmayacak.**

**`:2391` (`KV_MIN_KM2` = 200) — KALMALI, ama YENİDEN KALİBRE
EDİLECEK.** Bu, "ızgara çözünürlüğünün güvenilir olduğu taban" — ızgara
adımı (`KV_ADIM` ≈ 5,57 km hücre kenarı) sabit kaldığı sürece 200 km²
eşiği (≈ 6,4 hücre) anlamlı kalır. **Akış-tabanlı geçiş ızgara adımını
DEĞİŞTİRMEZ**, yalnız o ızgaranın CEVABININ nasıl kullanıldığını
değiştirir — bu eşik dokunulmadan kalabilir.

**`:2396` (düz-hat-karada süzgeci) — BU KAPI SORUNUN KENDİSİ, ama
KALDIRILMASI ÇÖZÜM DEĞİL.** `TAŞMA ÖLÇÜM`in ölçtüğü gibi
(`oturumlar/TASMA-OLCUM-0911.md`, "GERÇEKTEN BİLEŞENE OKUNAN"):
```
:2388/:2391/:2427   parçayı BÜTÜN OLARAK bir sahipten ötekine TAŞIR
                    — sınır ÇİZMEZ, hazır Voronoi parçasını devreder
```
🔴 **Üçü de kalksa NE OLUR — ölçüldü, bu gecenin en değerli
bulgusu:** *"Süzgeç TAMAMEN kaldırılsa bile hiçbir sınır çizgisi YER
DEĞİŞTİRMEZ; tek parçalı (Polygon) bir petek hiç etkilenemez —
`_kvana` korunuyor; yalnız ÇOK PARÇALI peteklerin ≥200 km² parçaları el
değiştirebilir."* Yani `:2396`'yı kaldırmak, sürtünmeyi kara-kara
çiftlerinde de "duyurur" ama **sınırın ŞEKLİNİ değiştirmez** — yalnız
HANGİ HAZIR PARÇANIN kime gideceğini değiştirir. Emre'nin *"düzlük daha
çok pay alır"* tarifi bir ŞEKİL değişikliği istiyor (sınırın kendisi
düzlükte daha ileri gitmeli), parça-devri değil.

### ⇒ ASIL DEĞİŞİKLİK: `_kvsahip` IZGARASININ POLİGONLAŞTIRILMASI

Üç kapının tartışması bu yüzden İKİNCİL. Gerçek iş: bugün yalnız
"kim kazandı" diye ARA SONUÇ olarak kullanılan `_kvsahip[]` ızgarasının
(çok-kaynaklı, sürtünmeli Dijkstra'nın ürettiği, her hücreye bir sahip
atayan dizi) **KENDİSİNİN** peteğin GEOMETRİSİ hâline getirilmesi —
yani petek sınırının düz-çizgi Voronoi + yaslama yerine, doğrudan bu
ızgaradan (`rasterio.features.shapes` sınıfı bir kenar-izleme ile)
üretilmesi.

**Bu iş bu gecenin `POLİGON FİYAT` oturumunca ÖLÇÜLDÜ** (aynı oturum,
`denetim/BULGU-POLIGON-0911.md`):
```
poligon sayısı (mertebe)   ~4.000-20.000     (sentetik ölçüm: 3.843,
                                              gerçek boyutta cKDTree-
                                              Voronoi, 0,496 sn)
süre (mertebe)             ~0,5-5 saniye     — Dijkstra'nın (1,5-2 dk/
                                              çağrı) yanında İHMAL
                                              EDİLEBİLİR
darboğaz                   poligonlaştırmada DEĞİL, onu besleyen
                            Dijkstra'nın belleğinde (637+159 MB/çağrı,
                            A/B için iki çağrı ⇒ ~1,6 GB)
```
**Ve bugün `TAŞMA PROTOTİP` bunu GERÇEK bir pilot kutuda ÇALIŞTIRDI**
(M-3428, commit `c04d390`):
```
ızgara 440×180 · kara 55.174 hücre · tohum 376 (370 oturdu)
poligon 396 · ham köşe 12.232 · POLİGONLAŞTIRMA 0,04 SANİYE
Dijkstra 8 yön 3,20 sn · 16 yön 4,37 sn (pilot ölçek)
GÖZLE HÜKÜM: "sınırlar GERÇEKTEN araziyi görüyor — vadiden akıyor, dik
  yamaçtan kaçıyor, körfezi dolaşıyor. Fark bakar bakmaz görülüyor."
```
⇒ **Poligonlaştırma UCUZ olduğu iki bağımsız ölçümle (sentetik +
gerçek pilot) doğrulandı.** Şartname bunu kapsamalı: `_kvsahip`
doğrudan poligonlaştırılacak, üç kapının hiçbiri bu yeni geometriye
uygulanmayacak (onlar eski Voronoi-devir mantığının parçası, akış-
tabanlı üretimde YERLERİ YOK — `_kvana` koruması istisna, bkz. yukarı).

### 🟡 EKSİK — nehir/sırt ENGEL terimi henüz yok

`TAŞMA PROTOTİP`in kendi damgası: *"bu prototip YALNIZ eğim taşıyor,
Emre'nin 'nehirde duracak' tarifi HENÜZ DENENMEDİ."* `POLİGON FİYAT`
oturumu bir çapa TÜRETMİŞTİ (`uret_petek.py:1207/1221`,
`dogal_hatta_yasla(nehir_mes=0.30, sirt_mes=0.35)`):
```
R_nehir = 0,30° ≈ 33,4 km    R_sırt = 0,35° ≈ 39,0 km
Δ_nehir = 66,8 km ⇒ çarpan 1 + 66,8/5,57 ≈ 13,0
Δ_sırt  = 77,9 km ⇒ çarpan ≈ 15,0
(motorun en pahalı eğim hücresi 11,03 — Annapurna; 13-15 AYNI mertebede)
```
Bu ÇÜRÜTÜLEBİLİR bir türetme, gerçek koşuda SINANMADI. **B③'ün İKİNCİ
adımı** (birinci adım poligonlaştırma, ikinci adım bu çarpanın
sürtünme formülüne eklenmesi) budur — `TAŞMA PROTOTİP` "engel terimli
ikinci tur ~5 dakikada koşar" dedi, bu şartnamenin hazırlanmasından
SONRA istenebilir.

---

## ② TAŞMA PROTOTİP İLE İŞ BÖLÜMÜ

Tahtadan konuşuldu (M-3439). **Ölçüm ONLARDA, şartname BENDE** —
tekrar ölçüm YAPILMADI. Bu belgedeki tüm sayılar ya `TAŞMA ÖLÇÜM`
ya `TAŞMA PROTOTİP` ya `POLİGON FİYAT` oturumlarından (üçü de bu
gecenin ürünü) alıntı, kaynağıyla birlikte.

---

## ③ GÖÇÜN BEDELİ — hangi tavan/eşik yeniden ölçülmeli

`D129`: *bir eşik, ölçüldüğü tabanla birlikte taşınır.* Bugünkü
tavan/eşiklerin TAMAMI düz-çizgi Voronoi + yaslama tabanında kalibre
edildi. Taban akış-tabanlı poligona geçerse:

```
🔴 KESİN YENİDEN TÜRETİLMELİ (SEKLE/BOYUTA dayalı):
   Değişmez 2s tavanı (121 açık kırılma)     — yabancı senkron sınırı,
     bugünkü petek parçalama deseniyle kalibre; akış-tabanlı sınırlar
     FARKLI SAYIDA/BOYUTTA parça üretecek (TAŞMA PROTOTİP: pilotta 396
     poligon / 370 tohum — bugünkü petek parça sayısıyla KARŞILAŞTIRMA
     YAPILMADI, bu görevin dışında kaldı, sonraki turun işi)
   Değişmez 2i tavanı (3 açık işgal kırılması) — aynı sebep
   Değişmez 2t tavanı (42 kırılmasız madde)   — aynı sebep
   B2_ENKLAV_KM (800 km, enklav köprüleme eşiği) — akış-tabanlı sınırlar
     KENDİLİĞİNDEN daha az enklav üretebilir (su gibi yayılan bir alan
     doğal olarak dar boğazlardan geçer) — GORUNUM-ABC'nin kendi notu
     zaten "eşik gevşetilecek" diyor, YÖN belirsiz (gevşetme mi
     sıkılaştırma mı GEREKİYOR, ölçülmeden bilinemez)
   renk_olc.py ΔE komşuluk taraması            — komşuluk akış-tabanlı
     sınırlarda DEĞİŞİR (bugün komşu olmayan iki petek, su-gibi-yayılma
     ile komşu olabilir ya da tersi) — `§9`'un kendi uyarısı zaten
     "veri değişince ΔE değişir" diyor, taban değişimi bunun EN BÜYÜK
     örneği
   SADE_TOL / KARA_TOL (0,012°/0,002° sadeleştirme toleransları)
     — `TAŞMA PROTOTİP`in "ÇİRKİN OLAN" bulgusu: Chaikin merdiveni
     siler ama sınırı DALGALANDIRIR (fisto deseni) — bugünkü tolerans
     bu yeni dalgalanma biçimine göre YENİDEN ÖLÇÜLMELİ
   3 km yakın-mükerrer eşiği (`D066`)          — bu bir NOKTA-NOKTA
     eşiği (yerleşim çakışması), petek şeklinden BAĞIMSIZ olabilir,
     ama D066'nın kendi şartı ("zaman çizgileri farklı olmalı") akış-
     tabanlı komşulukla YENİDEN sınanmalı

🟢 MUHTEMELEN DEĞİŞMEZ (VARLIĞA bakıyor, ŞEKLE değil):
   Değişmez 1 (sahipsizlik, 315 beklenen)      — bir noktanın sahibi
     olup olmadığı soruyor, petek ŞEKLİNE bakmıyor
   Değişmez 1b (iç boşluk, 0 beklenen)         — aynı sebep
   Konum denetimi (0 nokta kara maskesi dışı)  — noktaların KENDİ
     konumu, petek şeklinden bağımsız
   KV_MIN_KM2 (200)                            — ızgara ÇÖZÜNÜRLÜĞÜNE
     bağlı, petek üretim YÖNTEMİNE değil; ızgara adımı değişmedikçe
     sabit kalır (bkz. ①)

⚪ ÖLÇÜLEMEDİ — bu şartnamenin kapsamı dışında kaldı, sonraki turun işi:
   Değişmez 3 (m: coğrafî eksen)               — petek şeklinden
     TAMAMEN bağımsız görünüyor ama TAM incelenmedi
   Bileşen kilidi (:2421, `_kv_bilesen`)       — akış-tabanlı üretimde
     bu kavramın (ayrı kara kütlesi = ayrı bileşen) NASIL karşılık
     bulacağı bu görevde İNCELENMEDİ
```

---

## ④ GERİ DÖNÜŞ YOLU

`MOTOR_PARALEL_KAPALI=1` emsali doğrudan izlenmeli — bu gece TAM
BİR KOŞUYU KURTARDI (`7e87e6f`), şansa bırakılmaz.

```
Önerilen ad     MOTOR_AKIS_SINIR_KAPALI=1
Yeri            arac/uret_petek.py, PETEK_D üretim aşamasının en başı
                (mevcut MOTOR_PARALEL_KAPALI okuma satırının yanı)
Davranış        1 ise: bugünkü düz-çizgi Voronoi + yaslama + üç-kapılı
                devir YOLU çalışır (BUGÜNKÜ davranış, değişmeden)
                yoksa (varsayılan, yeni davranış AÇIK olduğunda):
                akış-tabanlı `_kvsahip` poligonlaştırması çalışır
🔴 varsayılan YÖN kararı Emre'nin: yeni özelliğin varsayılan AÇIK mı
   KAPALI mı başlayacağı bu şartnamede seçilmedi — ilk koşuda hangi
   yönde başlanacağı ayrı bir onay gerektirir.
```

---

## TESLİM

```
① üç kapı: :2388 KALMALI (güvenlik) · :2391 KALMALI (ızgara çözünürlüğü,
   sabit) · :2396 kaldırılsa bile SINIR DEĞİŞMEZ (kanıtlandı) — asıl
   değişiklik _kvsahip'in POLİGONLAŞTIRILMASI (0,04-5 sn mertebesinde
   ucuz, iki bağımsız ölçümle doğrulandı)
② TAŞMA PROTOTİP ile iş bölümü net: ölçüm onlarda, şartname burada
③ göçün bedeli: 8 eşik/tavan KESİN yeniden türetilmeli (D129), 4'ü
   muhtemelen değişmez, 2'si ölçülemedi — ADIYLA listelendi
④ geri dönüş yolu: MOTOR_AKIS_SINIR_KAPALI=1 önerildi, varsayılan yön
   Emre'nin kararı
```

Karar gerektiren açık sorular: (1) yeni özelliğin varsayılan açık/kapalı
başlaması, (2) nehir/sırt engel teriminin (13,0/15,0 çarpanı) bu turda
mı sonraki turda mı sınanacağı, (3) 8 "kesin yeniden türetilmeli"
eşiğin hangi sırada ele alınacağı.
