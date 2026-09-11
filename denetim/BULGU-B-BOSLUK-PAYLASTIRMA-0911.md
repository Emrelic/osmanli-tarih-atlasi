# KITA 3 — B BOŞLUK PAYLAŞTIRMA — motora taşıma yolu (final sentez)

Görev: koordinatör sevki (11-12 Eylül 2026 gecesi). `arac/` şu an AÇIK
(koşu bitti) ama **tam koşu AÇILMADI** — bu bir SENTEZ/KARAR belgesidir,
`oturumlar/B-BOSLUK-PAYLASTIRMA-0911.md` (kardeş şartname) üzerine
kurulu, onun YAZILDIĞI andan SONRA `oturumlar/TASMA-OLCUM-0911.md`da
biriken YENİ ölçümler (özellikle SIRT engel teriminin fiilen test
edilmiş olması) buraya KATILDI. KITA 8'e tahtadan (M-3520) soruldu,
cevap gelmeden bu belge yazıldı — cevap gelirse GÜNCELLENİR.

## ① MEVCUT ŞARTNAMENİN KABULÜ + BİR EKLEME

`oturumlar/B-BOSLUK-PAYLASTIRMA-0911.md`nin ①③④ bölümleri BAĞIMSIZ
gözden geçirildi (kaynak zincirleri: `TASMA-OLCUM` → `POLİGON FİYAT`
bağımsız yeniden-ölçümü ile doğrulanmış) ve KABUL EDİLİYOR:

```
✓ :2388 (_kvana koruması)   KALIYOR — akış-tabanlı geçişe TAŞINACAK
✓ :2391 (KV_MIN_KM2=200)    KALIYOR — ızgara çözünürlüğüne bağlı, motor
                            YÖNTEMİNE değil
✓ :2396 (düz-hat süzgeci)   KALDIRILABİLİR AMA SINIRIN ŞEKLİNİ
                            DEĞİŞTİRMEZ (ölçüldü) — asıl iş bu kapıda
                            değil
✓ ASIL DEĞİŞİKLİK           `_kvsahip` ızgarasının DOĞRUDAN
                            poligonlaştırılması (rasterio.features.shapes)
                            — 0,5-5 sn mertebesinde, İKİ BAĞIMSIZ ölçümle
                            doğrulandı (sentetik 0,496 sn / gerçek pilot
                            0,04 sn), darboğaz DEĞİL
```

**Bağımsız gözle doğrulama (BEN, bu görevde):**
`TASMA-PROTOTIP-7-UC-ASAMA-0911.png` açıldı ve okundu — ① düz-Voronoi
sert köşeli hücreler, ② sürtünme sınırı eğriltiyor ama sırta
kilitlemiyor, ③ (p85 eşiği) mor bant boyunca sınırın GERÇEKTEN o banda
yaklaştığı GÖZLE görülüyor. Rapor edilen "+%32 sırt kesişimi" görsel
olarak İNANDIRICI, "gözde ikincil" damgası (`TASMA-OLCUM`in kendi
dürüstlüğü) da haklı — büyük bir SIÇRAMA değil ama GERÇEK bir iyileşme.

## ② 🔴 EKLENEN — SIRT ENGEL TERİMİ ARTIK "EKSİK" DEĞİL, "TEST EDİLDİ"

Kardeş şartname (`B-BOSLUK-PAYLASTIRMA-0911.md:111`) bunu **"🟡 EKSİK"**
diye bırakmıştı — ama `TASMA-OLCUM-0911.md`nin İKİNCİ yarısı (§"①
GEÇİT SINAVIM TERS ETİKETLİYDİ" ve sonrası, satır 619+) bunu O
ŞARTNAMEDEN SONRA fiilen test etmiş:

```
Yöntem   sürtünme = 1 + 0,005·|eğim| formülüne ÜÇÜNCÜ terim: engel bandı
         (sırt+nehir yaslama yarıçapından türetilmiş eşik: p70/p85/p95)
Sınav    "engel, sınırı sırt bandının İÇİNE taşımalı" (D081 dersiyle
         DÜZELTİLMİŞ, önceki hatalı sınav ["kesişim AZALMALI"] atıldı)
SONUÇ    p70 +%34 · p85 +%32 · p95 +%29 sırt-bandı-içi kesişim artışı
         — SINAV GEÇTİ, üç eşikte de
Maliyet  🟢 BEDAVA — Dijkstra YAVAŞLAMIYOR, HIZLANIYOR (pahalı hücreler
         erken elendiği için): 1,49-1,58 sn (engelsiz 3,20 sn'nin YARISI)
```

🔴 **AÇIK KALAN TEK PARÇA — NEHİR:** `_ad_sadelestir`/`BUYUK_SADE`
nehir detayını engel testinden ÖNCE siliyor, bu yüzden "geniş nehre
gelince duracak" tarifi PRATİKTE hâlâ sınanamadı (`⚪ ölçülemedi`,
`bulunamadı` DEĞİL). **ÖNERİ:** entegrasyonda engel-tespiti
sadeleştirmeden ÖNCEKİ ham nehir geometrisi üzerinden yapılsın (final
çizim hâlâ sadeleştirilmiş olabilir — yalnız ENGEL TARAMASI ham veriye
baksın). Bu, B③'ün ÜÇÜNCÜ adımı olarak eklenmelidir (birinci
poligonlaştırma, ikinci sırt-engeli — HAZIR, üçüncü nehir-engeli —
AÇIK).

**EŞİK SEÇİMİ — karar gerekiyor, üçünden biri:**
```
p70   17.012 engelli hücre · +%34 · en GENİŞ etki alanı (en RİSKLİ)
p85    8.772 engelli hücre · +%32 · ORTA (görselde KULLANILAN buydu)
p95    1.495 engelli hücre · +%29 · en DAR, en TEMKİNLİ
```
📌 **ÖNERİM: p85.** Gerekçe: p70 ile p95 arasında etkinin (%34→%29)
FARKI küçük ama ETKİLENEN HÜCRE SAYISI (17.012→1.495) 11 KAT
değişiyor — yani p70 marjinal fayda için orantısız GENİŞ bir alanı
"engelli" işaretliyor. p85 halihazırda görsel kanıtta (③ paneli)
KULLANILMIŞ ve gözle de makul duruyor. **Bu bir tercih, ölçüm değil**
— nihai karar Emre'nin.

## ③ ENTEGRASYON YOLU — `arac/uret_petek.py`, adım adım

```
YER: PETEK_D üretim aşamasının BAŞI (mevcut MOTOR_PARALEL_KAPALI
     okumasının yanı, kardeş şartnamenin önerdiği gibi)

if MOTOR_AKIS_SINIR_KAPALI:                    # varsayılan: bkz. ④
    # BUGÜNKÜ YOL — değişmeden: düz-çizgi Voronoi + yaslama +
    # üç-kapılı devir (:2388/:2391/:2396)
    ...mevcut kod...
else:
    # YENİ YOL:
    # 1) _kvsahip ızgarasını sürtünmeli Dijkstra ile üret (ZATEN VAR,
    #    değişmiyor — yalnız ÇIKTISININ KULLANIMI değişiyor)
    # 2) YENİ: engel bandını (sırt+nehir, p85 eşiği) sürtünme
    #    formülüne üçüncü terim olarak ekle — nehir tarafı SADELEŞTİRME
    #    ÖNCESİ ham geometriden okunacak (② altındaki öneri)
    # 3) _kvana koruması (:2388 mantığı) ızgara üzerinde UYGULANMAYA
    #    DEVAM EDER (bir hücrenin kendi tohumundan başkasına
    #    geçmesini engeller) — TAŞINACAK, KALDIRILMAYACAK
    # 4) _kvsahip'i rasterio.features.shapes ile DOĞRUDAN
    #    poligonlaştır (0,5-5 sn) — :2391/:2396 bu ADIMDA
    #    KULLANILMAZ (eski Voronoi-devir mantığının parçası)
    ...yeni kod...
```

## ④ GERİ DÖNÜŞ YOLU VE VARSAYILAN — KARAR

`MOTOR_AKIS_SINIR_KAPALI=1` adı ve konumu AYNEN kabul ediliyor
(`MOTOR_PARALEL_KAPALI` emsali, bu gece 1 koşuyu kurtardı).

🔴 **VARSAYILAN: `MOTOR_AKIS_SINIR_KAPALI=1` (yani YENİ YOL VARSAYILAN
KAPALI, bugünkü davranış korunur) — gerekçeli öneri, nihai karar
Emre'nin:**
```
① ③'teki nehir-engeli hâlâ AÇIK bir iş (ölçülmedi)
② ④'teki (aşağıda) 8 eşiğin 6'sı henüz YENİDEN TÜRETİLMEDİ — yeni
   geometriyle üretilmiş bir harita bu eşiklerle denetlenirse
   Değişmez 2s/2i/2t YANLIŞ ALARM verebilir (ya da YANLIŞLIKLA temiz
   görünebilir — ikisi de tehlikeli)
③ Tam koşu 20 saat — varsayılanı AÇIK yapıp bir hata bulmak, 20 saatlik
   bir koşuyu (ya da daha kötü, YAYINLANMIŞ bir haritayı) riske atar
④ KAPALI varsayılan, YENİ yolu tamamen ÇALIŞIR ve TEST EDİLEBİLİR
   bırakır (bayrak açıkça verilerek) — geri dönüş maliyeti SIFIR
```

## ⑤ GÖÇÜN BEDELİ — sıralama önerisiyle

Kardeş şartnamenin listesi (8 KESİN · 4 MUHTEMELEN DEĞİŞMEZ · 2
ÖLÇÜLEMEDİ) AYNEN kabul ediliyor. Eklenen: **SIRALAMA önerisi**
(şartname sırayı boş bırakmıştı):

```
1. B2_ENKLAV_KM (800→250 km eşiği)   — EN UCUZ yeniden türetilebilir
   (statik ölçüm, koşu gerektirmez GİBİ görünüyor ama GERÇEKTE yeni
   petek şekli lazım — bu yüzden GERÇEKTE 2'den SONRA gelmeli,
   DÜZELTME: sıralama BUNU 2. sıraya alır)
1. SADE_TOL/KARA_TOL (fisto deseni)  — PİLOT KUTUDA, tam koşu
   gerekmeden, GÖRSEL olarak ayarlanabilir — GERÇEKTEN ilk sırada
2. B2_ENKLAV_KM                      — pilot kutunun akış-tabanlı
   enklav sayısını/boyutunu ölçtükten SONRA
3. Değişmez 2s/2i/2t tavanları        — TAM KOŞU sonrası, yeni
   geometriyle üretilmiş GERÇEK veri ister — en PAHALI adım
4. renk_olc.py ΔE komşuluk            — 3'ten SONRA (komşuluk yeni
   geometriye bağlı, tam koşu çıktısı gerektirir)
5. 3 km yakın-mükerrer eşiği (D066)   — nokta-nokta eşiği, petek
   şeklinden bağımsız OLABİLİR ama D066'nın "zaman çizgisi farklı
   olmalı" şartı yeni komşulukla AYRICA sınanmalı — 4 ile birlikte
```
**Gerekçe:** 1-2 pilot ölçekte (dakikalar) yapılabilir, KARAR
VERİLMEDEN önce ucuz geri bildirim verir; 3-5 TAM KOŞU (20 saat)
gerektirir — yalnız 1-2 sonuçlandıktan ve MOTOR_AKIS_SINIR_KAPALI=0
ile bir tam koşu YAPILMASINA karar verildikten SONRA anlamlı.

## ⑥ TESLİM — SAYIYLA

```
① Şartname kabul edildi + bağımsız gözle doğrulandı (PNG okundu)
② YENİ KATKI: sırt engeli ARTIK "eksik" değil "test edildi, geçti"
   (+%29-34, 3 eşik ölçüldü) — eşik önerisi: p85 (gerekçeli, KARAR
   Emre'nin). Nehir engeli hâlâ AÇIK (①③ nedeniyle, sadeleştirme
   öncesi ham veri önerisi eklendi)
③ Entegrasyon yolu 4 adımlı olarak yazıldı (kod YAZILMADI/commit
   edilmedi — bu bir PLAN, arac/uret_petek.py'ye dokunulmadı)
④ Varsayılan öneri: MOTOR_AKIS_SINIR_KAPALI=1 (KAPALI/eski davranış),
   4 gerekçeyle — nihai karar Emre'nin
⑤ 8 eşiğin sıralaması önerildi: pilot-ölçek (SADE_TOL, B2_ENKLAV_KM)
   önce, tam-koşu-gerektiren (Değişmez 2s/2i/2t, ΔE, 3km) sonra
KITA 8'e soruldu (M-3520), cevap BEKLENİYOR — gelirse belge güncellenir
```

Kod YAZILMADI, koşu AÇILMADI (§⑤ talimatı) — bu belge Oturum 0'ın
uygulaması için HAZIR bir PLANDIR.
