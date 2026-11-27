# MOTOR ENVANTERİ — yeniden yazımdan önce bugünkü petek motorunun kuralları (27 Kasım 2026, HAVVA)

Emre, 27.11.2026: "sıfırdan yazmaya başlamadan önce bugünkü kodun bütün elemanlarını mantıklarını hepsinin
listesini al. ayrıca bunu bana yeniden teyid et. eski kod da yamalı bohçaya döndü ve mantıksız yapılar
olabilir."

**Bu belge teyit içindir; karar içermez.** §3'teki "yeni yapıda akıbeti" sütunu benim önerimdir, Emre'nin
onayı yoktur.

**Nasıl üretildi, ne kadar güvenilir:** `arac/uret_petek.py` (10.668 satır) dört dilime bölündü; her dilimi
bir okuyucu alt ajan baştan sona okuyup kural kural yazdı (142 madde; ayrıntı `envanter/dilim-1…4.md`,
her maddede satır aralığı, amaç, yöntem, ayar, bağ, şüphe). Bu özet o dört dosyadan derlendi.
`[DOĞRULANDI]` yazan satırlara kodda kendim baktım; ötekiler **ajan okumasıdır, ayrıca doğrulanmadı**.
`arac/dolgu.py` (Ⓑ) bu oturumda baştan sona benim tarafımdan okundu. `renkler.py` (boyalar) ve `girdi.py`
(girdi listesi, izler) envantere alınmadı: kural taşımazlar.

---

## 1. Geri dönüş reçetesi [DOĞRULANDI]

| Ne | Nerede |
|---|---|
| Kod | origin'de etiket **`motor-eski-kosu40-1127`** → commit `be618bf23` (Koşu 40'ın commit'i). 27.11 itibarıyla `origin/main`deki `uret_petek.py · dolgu.py · renkler.py · girdi.py · motor_onbellek.py · gun.py` bu commit'le aynı (`git diff` boş). |
| Dönüş | `git checkout motor-eski-kosu40-1127 -- arac/uret_petek.py arac/dolgu.py arac/renkler.py arac/girdi.py arac/motor_onbellek.py arac/gun.py` |
| Koşu bayrakları | `C:\atlas-kosu40\kosu40-20261119-004922-bayraklar.log` (24 bayrak; aşağıda §2) |
| Son BİTMİŞ harita (karşılaştırma tabanı) | `C:\atlas-kosu39\data\` (`donemler.js`, `devletler_harita.js`, `petek_govde.js`) — Koşu 39, 5/7/10 gün bantlı, Ⓑ'siz |
| Koşu 40'ın yarım çıktısı | `C:\atlas-kosu40\data\devletler_harita.js` (392 MB, yabancı gövdeler tam; Osmanlı dönemleri ve dolgu yazılmadı) |
| Önbellek | `C:\atlas-onbellek\motor_onbellek.sqlite` (12,4 GB, tuz `d7de80374c5d`) |

## 2. Bugün haritayı GERÇEKTE çizen kurallar (Koşu 40 bayrak kümesi) — TEYİT LİSTESİ

Koşu 40 bayrakları, 18 Kasım 2026 "TEK HARİTA: 5 gün + B dolgusu, bütün zamanlarda aynı" kararının
uygulanışıdır (`denetim/YAMA-TASARIMI-5GUN-B-1118.md`). Kodda duran kuralların yarıya yakını bu
bayraklarla ÖLÜDÜR (§4). Canlı olanlar, düz cümleyle:

**Kim sahnede (o gün hangi yerleşim var sayılır)**
1. Yerleşim `kur:` gününden önce ve `bit:` gününden sonra sahnede değildir; peteği sahnedeki komşulara
   paylaştırılır (varlık epokları, `MOTOR_KUR_DEVIR`).
2. `kur:`u olmayan yerleşim, en erken yazılı sahiplik kaydından önce sahnede değildir (sahne kuralı;
   eskiden yalnız 1281 öncesi, 18 Kasım'dan beri her çağda — `MOTOR_MO_SINIR=9999-12-31`) [DOĞRULANDI].
3. Kademe 4 (`k:4`) yerleşim kendi bölgesini almaz; toprağı en yakın merkezlere gider (merkez kuralı,
   `MOTOR_TARIH_BASI_MERKEZ=1`, her çağda; "şimdilik", abi-merkez işi bitene kadar).
4. Sahibi yazılmamış ama kara komşuluğunun ≥%90'ı sahipli olan yerleşim (Rumeli Hisarı gibi) çevresinin
   devletine devredilir (kuşatılmışlık); bitişik adaylar birlikte değerlendirilir (bileşen).
5. `kasitli_bosluk` taşıyan yerleşim devredilmez, deliği doldurulmaz.
6. `enklav: true` dönemindeki kale (Oran, Badis…) ölü komşu peteğinden pay almaz ve kendi hücresinin
   yalnız kaleye ≤10 km'lik kısmını tutar; artan pay enklav olmayan komşulara bölünür (enklav kırpma,
   güne bağlı: aynı yer Osmanlı dönemindeyken kırpılmaz).

**Toprak kime gider, nereye kadar**
7. Her kara noktası, sürtünmeli yürüyüşle (eğim, nehir geçiş bedeli, geçitler) en yakın yerleşimindir;
   hesap 0,05°'lik ızgarada, yalnız kara üzerinden yapılır (denizaşırı petek olmaz).
8. Bu sahiplik en çok 40 saat = 5 günlük yürüyüşe kadardır; ötesi sahipsizdir.
9. Dar su hatlarından (boğaz) yürüyüş adımı geçemez; kıstak/burun kentleri için köprü istisnası vardır.
10. Yerleşim nehrin hangi yakasındaysa tohumu o yakada sayılır (tohum yakası); petek, noktasının ham
    hücresine karşılık gelmeyen yakadaki yüzü alamaz (yaka kilidi).
11. Petek kendi kara parçasının dışına taşamaz (ada kuralı); kıyıda kopan küçük parçalar kara yolu daha
    kısa olan komşuya geçer.
12. Çölde petek payı noktadan 300 km'den uzağa uzanamaz (çöl tavanı; 5 günlük sınır yüzünden bugün
    büyük ölçüde etkisiz — etkisi ölçülmedi).
13. Antlaşma hattı (sınıf C, D, E, F) kısıttır: yabancı gövde hattın karşı yakasına geçemez; hattın kendi
    yakasındaki pay ona verilir. (A tarafında Osmanlı'nın taraf olduğu hatlar uygulanmaz; Ⓑ'de uygulanır.)

**Sınırın şekli**
14. Petek sınırları nehir yatağına ve dağ sırtına yaslanır, yumuşatılır; kıyı, kara maskesinden kesilir.

**Gövde (devletin toprağı) ve güzelleştirme**
15. Devletin gövdesi o gün sahip olduğu peteklerin birleşimidir.
16. Aynı devletin 33 km'den dar aralıkla ayrılmış parçaları kapatılır (içinde başka devletin yerleşimi
    yoksa).
17. Devletin tamamen çevrelediği boşluk (dağ bloğu, ova) doldurulur (B1); kasıtlı boşluk hariç.
18. Karasal enklav, ana kütleye 400 km'ye kadar iç bükey köprüyle bağlanır (B2); arada başka devletin
    toprağı ya da deniz varsa bağlanmaz.
19. Koridorun derinliği genişliğini geçemez; dipten ağıza doğru doldurulur (B3).
20. Bu eklemelerin komşunun peteğine binen kısmı geri çıkarılır; iki devletin eklemeleri çakışırsa
    aradan bölüştürülür.
21. Osmanlı gövdesi doğrudan ve tâbi (vasal) olarak ayrı tutulur; himaye gövdeleri ayrı çizilir.

**Ⓑ dolgu (ayrı katman, `dolgu.py`)**
22. Her devlet gövdesi 201,6 km yarıçapla (kuşuçuşu) "kapatılır": ≈400 km'den dar boşluk, girinti ve
    gövde–deniz arası şerit dolgu adayıdır. Deniz sayılan su kütlesi ≥100.000 km²'dir.
23. Adayın başka devlet toprağına denk gelen kısmı dolmaz ("engellendi" diye raporlanır).
24. İki devletin birden istediği alan, sürtünmeli en yakın yerleşime göre bölüşülür.
25. Koridor biçimli dolgu, ağzına yakın kısmı boş bırakılarak kırpılır.
26. Devletin kendi içindeki delik boyutuna bakılmadan dolar; içinde başka devlet ya da sahnede
    kabile/devletsiz yerleşim varsa dolmaz.
27. Antlaşma hattı Ⓑ dolgusu için de duvardır (250 km karşı yaka tamponu).

> **Emre'den istenen teyit:** yukarıdaki 27 madde, "bugün haritayı çizen fikirler" olarak doğru mu?
> Eksik ya da artık istemediğin var mı? (Numarayla cevap yeter.)

## 3. Fikir → kod haritası ve yeni yapıda akıbeti (akıbet = öneri)

| Grup | Bugünkü mekanizmalar (dilim/madde) | Bugün | Yeni tek kuralda |
|---|---|---|---|
| Coğrafya zemini | kara, göl (baraj kuralı), nehir sınıfları, geçitler, sırtlar, DEM eğim sürtünmesi (d1: 17–22, 30–31) | canlı | **Aynen kalır** (bir kez hesaplanır) |
| En yakın yerleşim | Voronoi ham hücre (d2:1) + ızgara Dijkstra (d1:28–35) + "karar dışında Voronoi" | canlı | **Yalnız ızgara** kalır; Voronoi gereksiz |
| Dar su / kıyı düzeltmeleri | boğaz yasağı, kıstak köprüsü, tohum yakası, pencere dışı tohum (d1:29, 32–34); ada kuralı, kara-kısıtlı devir, bileşen kilidi (d2:22, 24) | canlı | Boğaz yasağı + elle geçit listesi kalır; ada kuralı ve devir **erir** (ızgara zaten kara üzerinden) |
| Ne kadar uzağa | A1 200 km tavan + yöne duyarlı tavan (d2:3–4), yürüyüş 40 saat (d1:39, 48), çöl tavanı 300 km (d2:26), çöl kelepçesi, BTB, puan kapısı, ekleyici kapı, çöl eşiği 8 (d1:40–41; d3:17–21), ufuk bantları (d1:43; d4:26), Ⓑ kapanış | 2'si canlı, ötekiler ölü/etkisiz | **Tek ölçü**: 5 gün çekirdek + 10 güne kadar kapanış, hepsi sürtünmeli saatle |
| Sınırın şekli | doğal hatta yaslama, Chaikin, koruma payı, mini-Voronoi, yetim yüz, yaka kilidi, örtü sadeleştirme, serbest kenar (d2:6, 15–19; d3:5) | canlı | Sürtünme nehri ve sırtı zaten cezalandırıyor ⇒ yaslama zinciri **erir**; tek sadeleştirme kalır. **Görsel kabul ister** |
| Kim sahnede | varlık epokları, sahne kuralı, merkez kuralı, devir kümesi, `petek_epok` paylaştırma, komşu-kur-böl (d3:4, 6, 8, 11) | canlı | Kurallar **kalır**; "ölü peteği paylaştır" kodu **erir** (sahnede olmayan nokta kaynak olmaz) |
| Sahipsiz ama çevrili | kuşatılmışlık + bileşen + 159 adlık beklenen listesi (d3:2–3, 10) | canlı | Kural **kalır**, liste gözden geçirilir |
| Enklav kale | enklav kırpma 10 km, ENKLAV kısıtı (d3:7; d2:18) | canlı | **Karar gerek** (Emre'ye soruldu) |
| Antlaşma hattı | sınır kısıt (d1:10; d3:22–25), Ⓑ duvarı (d4:28) | canlı, iki ayrı uygulama | **Tek uygulama**: ızgarada geçilmez kenar |
| Gövde güzelleştirme | kapat 33 km, B1, B2 400 km, B3, komşu toprak çıkar, eklenti bölüştür, H0016 (d2:8, 11–14; d4:2, 5–6, 20) | canlı | Kapanış kuralına **erir**; delik kuralı (B1) ayrı kalır |
| Ⓑ dolgu | `dolgu.py`: kapanış, deniz, koridor, paylaşım, duvar, delik | canlı | A ile **birleşir** |
| Osmanlı / vasal / himaye | doğrudan–tâbi ayrımı, himaye gövdeleri, delta (d4:16–17, 19) | canlı | **Kalır** (renk ve kayıt işi, geometri değil) |
| Çıktı | halka havuzu, seyreltme + dondurulmuş köşe, `bolgeler.js`, `donemler.js`, `devletler_harita.js`, `petek_govde.js`, üretim izi, çıktı kıyası (d3:12–15; d4:22–25, 29–32) | canlı | Şema **kalır** (site aynı dosyaları okur); üretim yolu sadeleşir |
| İşletim | ithal kilidi, canlı log, koşu kilidi, aşama sayacı, süreç/iş parçacığı, DEVAM, önbellek katmanları, 20'ye yakın ezber (d1:1–3, 8, 12–16; d4:11–13, 34) | canlı | Aşama başına ayrı süreç + diske yazım; çoğu **gereksizleşir** |

## 4. Çelişkiler, mükerrerlikler, mantıksız yapılar

1. **Aynı soruya dokuz cevap.** "Bir yerleşim boş toprağa ne kadar uzanır, arada kalan boşluğu kim alır"
   sorusu için kodda dokuz mekanizma var: A1 200 km tavanı, yöne duyarlı tavan, yürüyüş bütçesi, çöl
   tavanı, çöl kelepçesi, boş toprak bölüşümü (BTB), puan kapısı, ekleyici kapı, Ⓑ kapanış. Bugün ikisi
   karar veriyor (yürüyüş 40 saat + Ⓑ); ötekilerin kodu duruyor, bir kısmı hâlâ koşuyor (madde 7).
2. **İki ayrı ölçü.** A tarafı sürtünmeli saatle ölçer; Ⓑ ve güzelleştirme kuşuçuşu kilometreyle (kapat
   33 km, B2 400 km, kapanış 201,6 km, duvar 250 km, çöl 300 km). Dağda 5 günlük yürüyüş 100 km, ovada
   200 km iken dolgu her yerde 201,6 km açılır. `_DG_DUVAR_KM=250` sabiti "dolgu yarıçapı ≤201,6 km"
   varsayımına bağlıdır ve koruması yoktur.
3. **Adı "MÖ kuralı", işi her çağ.** `MOTOR_MO_SINIR=9999-12-31` ile "MÖ" yolu bütün tarihlerde çalışır
   [DOĞRULANDI]; 1281 sonrası için yazılmış yolların çoğu ölüdür. Ajan okumasına göre 16 Ağustos "sonradan
   doğan yerleşim kendi bölgesini kapmalı" kuralının asıl kodu ve kabul sayaçları da bu yüzden pratikte
   ölü (doğrulanmadı). Yorumlar "MS'de bu ikisi boş küme" diyor; bu bayraklarla yanlış.
4. **Komşunun toprağını kesmek için altı katman:** `kapat` engeli → `_komsu_toprak_cikar` →
   `_eklenti_bolustur` → Osmanlı için H0016 → sınır kısıtı → Ⓑ duvarı. Hepsi aynı kusuru onarır: önce
   toprak eklenir, sonra komşuya binen kısım geri alınır.
5. **Aynı kuralın kopyaları.** "O gün bu yerleşim kimin" kuralı en az dört yerde ayrı yazılmış;
   Dijkstra adımı üç kopya ve **boğaz yasağı yalnız ikisinde var**, epok devrinde kullanılan
   `_yr_yerel_dijkstra`da yok [DOĞRULANDI: `_KVSU` yalnız :2022 ve :2098'de]; kuşatma kararı önbellekli ve
   önbelleksiz iki kopya; "komşu / değiyor" için dört ayrı ölçüt (0,02° tampon · ≥1 km ortak kenar ·
   0,002° · ±3 hücre).
6. **Yaslamanın yan etkilerini onaran zincir:** koruma payı → mini-Voronoi → yetim yüz ataması + enklav
   kısıtı → yaka kilidi. Ayrıca tohum yakası ile kıstak köprüsü art arda koşar; köprü nehir yakasını
   sınamaz.
7. **Sonucu etkilemeyen ama koşan işler:** iki tam ızgara Dijkstra'sı yalnız eğim ve nehir etkisini
   ölçmek için; bütün petekler için yöne duyarlı tavan araması (çıktısı yalnız ızgara dışı payda okunur);
   80 saatlik yürüyüş saat matrisi (tek tüketicisi olan ekleyici kapı kapalı, ama matris kurulur ve
   önbellek anahtarına girer); tek bant varken bant taşıması; işçi sürecin bütün ön aşamayı ikinci kez
   koşması.
8. **A ile Ⓑ aynı hatta farklı davranır.** A'nın sınır kısıtı Osmanlı'nın taraf olduğu hatları
   uygulamaz ("v1 kapsam dışı"), Ⓑ duvarı uygular [DOĞRULANDI: `uret_petek.py:10178-10180` yorumu].
9. **Çalışan ama ölçülmeyen.** B1/B2/B3 karnesi ve "B3 kalan ihlal" listesi, ekleyici kapı bilançosunun
   `else` dalındadır; ekleyici kapı kapalıyken (Koşu 40) hiç basılmaz, oysa B2/B3 çalışır [DOĞRULANDI:
   :9798-9827]. Süreç yolunda komşu çıkarma, eklenti ve sınır kısıtı sayaçları işçiden toplanmaz.
10. **Elle bakım isteyen yapılar ve artıklar:** 159 adlık `_KUS_BEKLENEN` listesi; 1830–1842 dönemlerini
    basan sabit tarihli ölçüm artığı; birçok yorumdaki satır numarası ve sayı bayat (B2 docstring'i
    "≤800 km", sabit 400); `muaf=False`, `MOTOR_BOGAZ_KAPALI` kolu, `MOTOR_PARALEL_KAPALI` eski yolu
    (komşu-kur-böl mantığını taşımıyor, yani "bit denklik tabanı" artık taban değil).
11. **`petek_govde.js` zamansızdır:** `kur:/bit:` devirlerini taşımaz, eski tarihlerde yanlış cevap
    verir ve uyarmaz (kodda bilinen kusur olarak yazılı).

## 4b. Emre'nin kararları (27.11.2026 akşam, istişare) ve 27 kural için önerim

Emre'nin kendi sözleri:
1. "İki yalnız şehir arası bölge şöyle olmalı. Bu iki şehrin 5 günlük sürtünmeli bölgesi zaten olacak.
   Aradaki bölgeleri de bu gövdeye birleştiririz." (Benim okumam: daralan köprü değil, iki şehrin kendi
   genişliğinde TAM şerit; koşul önceki mesajındaki gibi iki şehir arası ≤20 gün.)
2. Devlet içi delik kuralı: "Kalsın."
3. "Kuşatılmış tek düşman şehri herkes gibi 5 gün." (⇒ enklav kırpma, kural 6, kalkar.)
4. Su geçişleri: "Liste yapalım."
Ayrıca: "A B yapısı meselesini kaldıralım ve tek bir yapı ortaya koyalım."

27 kural için önerim (Emre'nin teyidi BEKLENİYOR):

| # | Kural | Öneri | Gerekçe |
|---|---|---|---|
| 1 | `kur:`/`bit:` dışında sahnede değil | Kalsın | |
| 2 | `kur:`suz yer ilk sahiplik kaydından önce sahnede değil | Kalsın | Kural doğru; 2.038 zincir 1281-01-01'de başlıyor, bu veri borcu |
| 3 | `k:4` kendi bölgesini almaz | Motor kuralı kalksın, yerine veri kuralı | Her yerleşim kaynak olur; `k:4` sahibini abi merkezinden veride alır. Abi-merkez işi bitmeden geçilmez |
| 4 | Kuşatılmışlık (%90 çevrili sahipsiz yer devredilir) | Kalsın, emniyet ağı olarak | Her tetiklenen yer veri borcu diye listelensin; 159 adlık liste gözden geçsin |
| 5 | Kasıtlı boşluk dolmaz | Kalsın | |
| 6 | Enklav kale 10 km | Kalksın | Karar 3 |
| 7 | Sürtünmeli en yakın yerleşim, ızgarada, kara üzerinden | Kalsın | Çekirdek kural |
| 8 | En çok 5 gün | Kalsın | |
| 9 | Boğaz yasağı + kıstak köprüsü | Değişsin: elle geçit listesi | Karar 4 |
| 10 | Tohum yakası + yaka kilidi | Tohum yakası kalsın; yaka kilidi erir | Yaslama kalkarsa kilide gerek kalmaz |
| 11 | Ada kuralı, kıyıda kopan parça devri | Erir | Izgara zaten kara üzerinden hesaplar |
| 12 | Çöl tavanı 300 km | Kalksın | 18 Kasım karar 9: çöle özel kural yok; 5 gün zaten altında |
| 13 | Antlaşma hattı C–F kısıttır | Kalsın, tek uygulama, Osmanlı hatları dahil | A/Ⓑ tutarsızlığı biter |
| 14 | Sınır nehre/sırta yaslanır | Prototipte yan yana bakılıp karar | Sürtünme zaten nehri ve eğimi cezalandırıyor |
| 15 | Gövde = peteklerin birleşimi | Kalsın | Tanım |
| 16 | 33 km'den dar aralık kapanır | Erir | Karar 1'in şeridi kapsar |
| 17 | Çevrelenmiş boşluk dolar (B1) | Kalsın, 26 ile tek kural | Karar 2 |
| 18 | Enklav köprüsü 400 km (B2) | Değişsin: karar 1 (≤20 gün, şerit) | km değil gün |
| 19 | Koridor derinliği ≤ genişliği (B3) | Kalksın | Şerit kuralı koridor üretmez |
| 20 | Komşuya binen ek geri çıkarılır | Erir | Her hücrenin tek sahibi olur |
| 21 | Osmanlı doğrudan/tâbi, himaye | Kalsın | Renk ve kayıt işi |
| 22 | Ⓑ kapanış 201,6 km + deniz ≥100.000 km² | Değişsin: karar 1'in ölçüsüyle, gün olarak; deniz eşiği kalsın | |
| 23 | Başka devlet toprağına denk gelen dolmaz | Erir; "engellendi" raporu kalsın | |
| 24 | Çekişmeli alan sürtünmeli bölüşülür | Kalsın | Çekirdek kuralın kendisi |
| 25 | Koridor biçimli dolgu kırpılır | Kalksın | 19 ile aynı |
| 26 | Devlet içi delik boyuta bakılmadan dolar | Kalsın | Karar 2 |
| 27 | Antlaşma hattı Ⓑ için de duvar | 13 ile birleşir | |
| 28 | (27'de EKSİKTİ) Kabile/devletsiz nokta kaynak yılı −25…+50 penceresinde geçerlidir | Kalsın | 18 Kasım karar 6 |

## 5. Bu envanterin göremedikleri

- Dört dilim ajan okumasıdır; §4'te `[DOĞRULANDI]` yazmayan her iddia doğrulanmayı bekler.
- Kuralların **haritadaki etkisi** ölçülmedi: hangi kural kaç km² boyuyor, hangisi kaldırılsa harita
  değişmez. Bu ancak koşu loglarındaki bilançolardan ya da prototiple görülür.
- Veri tarafındaki kurallar (`VERI-YAPISI.md`: `s:`, `v:`, `m:`, `kd:`, `k:`, `bos:`, `enklav:`,
  `kasitli_bosluk:`, `himaye:`) bu belgenin konusu değil; yeni motor aynı veriyi okumak zorunda.
- `denetle.py` değişmezleri (1, 2, 3, 8) motorun çıktısını ölçer; yeni motorun kabul sınavı da onlardır.
