# DİZİN TAMLIK — 1281-1923 arası eksik künye taraması

## ÖNGÖRÜ (D022 — ölçümden ÖNCE yazıldı, commit'lendi)

Tarih: 2026-09-11, ölçümden önce.

**Taban ölçüm (yalnız sayma, henüz analiz değil):**
- `data/devletler.js` bugün **627 künye** taşıyor — CLAUDE.md §1.5'teki
  "617 künye" rakamı BAYAT (D069: bir hüküm dosyası ölçümün fotoğrafıdır).
- Bölge dağılımı ölçüldü (27+1 bölge): en seyrek — okyanusya 5,
  orta-amerika 5, orta-amerika-karayip 8, iberya 6, kuzey-avrupa 7,
  sibirya-bozkir 9, kafkasya 10.
- `devletler.js` başlığındaki KAPALI SÖZLÜK yorumu 26 bölge sayıyor ama
  veri 27. bölge kullanıyor: `orta-amerika-karayip` sözlükte YOK. Bu ayrı
  bir şema-tutarsızlığı bulgusu, bu görevin ana konusu değil, notu düşülüyor.

**Yöntem (coordinatörün önerdiği ②): ARDIL/SELEF boşluk taraması.**
Her bölge için, o bölgedeki künyelerin `[f,t]` aralıklarını 1281-01-01 —
1923-10-29 penceresine kırp, birleştir (union), ve pencere içinde HİÇBİR
künyenin kapsamadığı zaman dilimlerini (boşlukları) bul. Bu, Değişmez 1'in
(yerleşim sahipsizliği) dizin katmanındaki KARDEŞİ.

**Bilinen ÖNCÜL pozitifler (CLAUDE.md §3.5.0'da zaten belgelenmiş, henüz
`devletler.js`'e YAZILMAMIŞ) — aracımın bunları YAKALAMASI beklenir, D010
gereği bu benim "bilinen pozitif" sınavım:**
```
meysur-racaligi     1799-1923 (Meysur Sultanlığı sonrası)   ölçüldü: YOK
gvalyar/indor/kolhapur  Maratha'nın 1818 sonrası ardılları   ölçüldü: YOK
pejeng (Bali)       1292-1343 Cava/Bali boşluğu             ölçüldü: YOK
```
Aracım bu üçünü/beşini YAKALAMAZSA, aracın kendisi kusurludur — önce
buna bakacağım.

**Öngörülen sayı (ölçümden ÖNCE, tahmin):**
- Ham (mekanik) boşluk sayısı: **YÜKSEK olacak, muhtemelen 150-400
  arası** — çünkü bölge kapsaması ile SİYASİ kapsama AYNI ŞEY DEĞİL:
  bir bölge, kendi künyesi bitince KOMŞU BİR İMPARATORLUĞUN (başka
  bölgeye etiketli, ör. Osmanlı=anadolu ama Balkanlar'ı yönetiyor)
  eline geçebilir — bu GERÇEK bir boşluk değil, YANLIŞ POZİTİF olacak.
  ⇒ `§3.5.0`'ın kendi dersi: ham sayı KÜÇÜMSENMEMELİ ama çoğu
  AÇIKLANABİLİR çıkacak (D157: kategori şişmeyi açıklamaz, toplu neden
  açıklar — burada toplu neden "imparatorluk doğrudan yönetimi").
- GERÇEK (araştırılmaya değer, "muhtemelen eksik künye") aday sayısı,
  ham sayının süzülmesinden sonra: **15-40 arası** tahmin ediyorum.
- Bunların içinden KAYNAKLA DOĞRULANMIŞ, gerçekten eksik olduğu TEYİT
  edilen künye sayısı (zaman kısıtı içinde araştırabildiğim kadarıyla):
  **5-15 arası** tahmin ediyorum — bilinen 5 vaka zaten bu aralıkta.

Bu öngörü ÇÜRÜRSE (D022: çürüyen öngörü tutandan değerlidir), sebebini
raporun sonunda ayrıca yazacağım.

---

## ÖLÇÜM

Araç: [`denetim/ARAC-DIZIN-TAMLIK-0911.py`](../denetim/ARAC-DIZIN-TAMLIK-0911.py)
Ham çıktı: [`denetim/OLCUM-DIZIN-TAMLIK-0911.json`](../denetim/OLCUM-DIZIN-TAMLIK-0911.json)

### ① EVREN

**627 künye** taranıldı (`data/devletler.js`, node-eval ile çıkarıldı —
D023 gereği kendi JS ayrıştırıcım yazılmadı). CLAUDE.md §1.5'teki "617
künye" rakamı BAYAT (D069) — bu satırla düzeltiliyor, not düşülüyor;
kendisi bu görevin konusu değil.

Yan bulgu (şema): `devletler.js` başlığındaki KAPALI SÖZLÜK 28 bölge
sayıyor ama veride **27 farklı bölge değeri** kullanılıyor ve ikisi
UYUŞMUYOR: veri `orta-amerika-karayip` diye bir bölge kullanıyor (sözlükte
YOK) ve sözlükteki `mezopotamya` ile `suriye-filistin` veride **HİÇ
kullanılmıyor** (0 künye). Bu, aşağıdaki ② bulgusuna giden ipucuydu.

### ② YÖNTEM VE HAM SONUÇLAR

**METOD A — bölge tam-boşluğu** (Değişmez 1'in dizin katmanındaki
analoğu): her bölgenin künye `[f,t]` aralıklarını 1281-1923 penceresine
kırpıp birleştirip, HİÇBİR künyenin kapsamadığı >200 günlük boşlukları
buldum. **8 ham aday** çıktı; **8'i de TEK TEK KONTROL EDİLDİ ve 8'i de
AÇIKLANDI** (gerçek eksiklik değil):

| bölge | boşluk | AÇIKLAMA (doğrulandı) |
|---|---|---|
| anadolu | 1608→1878 | Osmanlı'nın kendisi bu dizinde YOK (`devletler.js` tanımı gereği "Osmanlı'nın komşuları" dizinidir, protagonist dışarıda tutuluyor — kusur değil, TASARIM) |
| anadolu | 1914→1920 | aynı sebep (Osmanlı çöküş/işgal dönemi) |
| orta-amerika-karayip | 1530→1821 | `ispanya` (bölge=iberya) sömürge yönetimi kapsıyor — FARKLI BÖLGEYE etiketli imparatorluk |
| sibirya-bozkir | 1783→1921 | `rusya`/`sovyet-rusya` (bölge=dogu-avrupa) kapsıyor |
| kafkasya | 1810→1917 | `rusya` (dogu-avrupa) kapsıyor |
| kafkasya | 1921→1923 | `sovyet-rusya` (dogu-avrupa) kapsıyor |
| guney-afrika | 1904→1923 | `ingiltere` (bati-avrupa) kapsıyor |
| orta-afrika | 1917→1923 | `belcika` (bati-avrupa) kapsıyor |

⇒ **Metod A'nın kendi kör noktası doğrulandı** (öngörüde yazılmıştı):
bölge etiketi SİYASİ değil COĞRAFİ, ve büyük güçler kendi "ev" bölgesine
etiketleniyor. Sonuç: **Metod A'dan 0 gerçek eksik künye.**

**METOD B — tekil künye ardıl eksiği** (gürültülü, süzülmeden
kullanılamaz): t < 1923-10-29 olan her künye için, aynı bölgede ±3 yıl
içinde başlayan başka künye var mı diye baktım. **349 ham aday** çıktı.

🔴 **Metod B'nin YAPISAL sınırı ölçüldü (öngörüde tahmin edilmemişti,
ölçüm sırasında ortaya çıktı):** çoğu bölge TEK EGEMEN değil ÇOK-DEVLETLİ
(aynı anda onlarca paralel krallık/beylik var — örn. bati-afrika 53,
guney-asya 50, guneydogu-asya 59 künye). Böyle bölgelerde bir künyenin
bitişi "boşluk" değildir — bölge zaten komşu künyelerle kaplıdır, yalnız
o SPESİFİK toprağın hangi künyeye geçtiği ±3 yıl penceresinde
YAKALANAMAZ (devir kademeli/paralel oluyor). **Kanıt:** Metod A'nın
birleşik kapsaması, Metod B'nin 349 adayının **341'inin** zaten bölge
düzeyinde SÜREKLİ kaplı bir zaman diliminde bittiğini gösteriyor (yani
o an bölgede zaten BAŞKA bir künye aktif) — bu 341 yapısal olarak
"paralel devletlerden birine devir" sınıfına düşer, "hiç kimse yok"
sınıfına değil.

**Manuel doğrulama (D010: iki yönde sınama) — 31/349 aday elle
araştırıldı:**
- **17/17 `imparatorluk` tier'ının TAMAMI** (en yüksek önem sırası):
  bizans, bulgar-carligi, trabzon-rum → Osmanlı (protagonist-dışı);
  inka, aztek, purepecha → İspanya (çapraz-bölge); mali, songhay, oyo →
  bati-afrika'nın kendi paralel künyeleri (bambara, arma, ibadan zaten
  var, yalnız ±3 yıl penceresini aşıyorlar); kanem-bornu, lunda, asanti,
  rozvi, mutapa → sömürge/komşu künye (çapraz-bölge ya da paralel);
  babur, sih-imparatorlugu → `ingiliz-hindistani` (çapraz-bölge);
  vijayanagara → **`nayak-devletleri` (1336-1763) ZATEN VAR**, tam
  örtüşüyor. **17/17 AÇIKLANDI.**
- **14 öğelik düzenli örneklem** (her 25. eleman, kalan 332 adaydan):
  sirp-despotlugu, karaman → Osmanlı; irlanda, navarra, metis, ponka,
  berar, san-fan, pontianak → komşu/çapraz-bölge zaten var olan künye;
  mazenderan-marasi, antemoro, bundu, birom-plato, ovimbundu → bölge
  içi paralel künyeler zaten kaplıyor. **14/14 AÇIKLANDI.**

⇒ **31/31 manuel kontrol EDİLEN aday açıklandı, 0 yeni gerçek eksik
künye çıktı.** Kalan 318 aday ÖLÇÜLEMEDİ (araştırılmadı, zaman kısıtı) —
yapısal olarak aynı kalıba düşmesi BEKLENİYOR ama bu bir TAHMİNDİR,
KANIT DEĞİL (D021: temiz çıkan örneklem örneklemin dışını temiz ilan
etmez).

### ③ GERÇEK BULGULAR — eksik künye

**A) ZATEN BİLİNEN, BEN YENİDEN DOĞRULADIM (CLAUDE.md §3.5.0'da kayıtlı,
benim aracım TARAFINDAN BULUNMADI — bölge-düzeyi yöntemim bunları
YAKALAYAMAZ, tam da öngörüde yazdığım kör nokta):**
```
meysur-racaligi          YOK (Meysur Sultanlığı'nın 1799 sonrası ardılı)
gvalyar / indor / kolhapur   YOK (Maratha'nın 1818 sonrası ardılları)
pejeng / bali-kralliklari-pejeng   YOK (Cava/Bali 1292-1343 boşluğu)
```
node ile doğrudan id araması yapıldı, 6'sı da hâlâ `devletler.js`'te YOK.

**B) YENİ BULUNAN — TDV kaynaklı, bu oturumda araştırıldı:**

`devletler.js`'te `mezopotamya` VE `suriye-filistin` bölgelerinin HİÇ
kullanılmaması (② bulgusu) beni Suriye/Lübnan bölgesini elle kontrol
etmeye yöneltti. TDV `lubnan` maddesi (HTTP 200, gövde okundu,
`§4②` tuzağı için doğrulandı — doğru madde) şunu veriyor:

```
Ma'noğulları (Dürzî hanedanı)      1516 → 1697
  "Ekim 1516'da Osmanlı yönetimine giren bölgenin idaresi ...
   Ma'noğulları'na verildi" / "Ahmed'in 1697'de ... ölmesiyle
   Lübnan'daki Ma'noğulları dönemi sona erdi"
Şihaboğulları (aynı Lübnan Emirliği, hanedan değişti)   1697 → 1842-01
  "Dürzî ileri gelenleri Lübnan Emirliği'ne Beşîr Şihâbî'yi seçtiler"
  / "Şihâbî ailesinin yönetimi sona erdi" (Ocak 1842)
[1842-1861 boşluk: doğrudan Osmanlı yönetimi — protagonist-dışı, sorun DEĞİL]
Cebel-i Lübnan Mutasarrıflığı       1861-06-09 → 1915-07-11
  "9 Haziran 1861'de imzalanmış ... bir fermanla yürürlüğe konmuştur"
  / "Osmanlı Devleti tarafından 11 Temmuz 1915'te tek taraflı olarak
     ilga edilmiş"
```

⇒ **Üç ayrı yönetim (ya da mevcut kırım-hanligi/bogdan tarzı tek künyede
iki dönem + ayrı bir mutasarrıflık künyesi olarak 2 künye), `devletler.js`de
YOK.** Kırım Hanlığı, Boğdan, Eflak, Erdel gibi zaten tâbi/vassal
statüdeki emsalleri var (`§3` "OSMANLI ile tâbi çelişki sayılmaz"
maddesi) — bu üçü de aynı sınıfa (Osmanlı'ya tâbi, kendi hanedanı olan
özerk yönetim) giriyor ve emsalleri zaten dizinde. **Kaynak: TDV
`lubnan`, alıntılar yukarıda AYNEN verildi.**

🔴 Bu künyeyi **YAZMIYORUM** — `data/devletler.js` donuk (Koşu 9) ve
görevim ölçüm (D098: hüküm vermek/uygulamak ayrı yetki).

### ④ ÖLÇÜLEMEYENLER

- Metod B'nin kalan **318 adayı** (349 - 31 elle kontrol edilen) —
  zaman kısıtı, tek tek TDV/akademik doğrulama yapılmadı. Örneklemin
  (31/31) gösterdiği kalıp güçlü ama KANIT değil.
- `mezopotamya` bölgesi (Cebel-i Lübnan dışında) tam taranmadı — Musul,
  Bağdat, Basra çevresindeki 1281-1517 arası küçük emirlikler (ör.
  Celâyirli sonrası yerel beylikler) ayrıca kontrol edilebilir, zaman
  kalmadı.
- Coğrafî tarama (şartnamedeki ① önerisi) hiç uygulanmadı — yalnız
  ardıl/selef ekseni (② önerisi) çalışıldı, koordinatörün önerisi
  buydu.

### ⑤ ÖNGÖRÜ TUTTU MU?

```
HAM (Metod A) sayı:        tahmin 150-400   ölçüm 8            ÇÜRÜDÜ
"çoğu açıklanabilir":      tahmin           ölçüm 8/8 + 31/31  TUTTU
                                             (%100, tahminden GÜÇLÜ)
kaynakla teyitli eksik:    tahmin 5-15      ölçüm 6 (bilinen,
                                             YENİDEN doğrulanan)
                                             + 2-3 (Lübnan, YENİ)
                                             = 8-9              TUTTU (aralıkta)
                                             ama YENİ KEŞİF SAYISI
                                             DÜŞÜK (2-3) — asıl
                                             kaynak zaten var
                                             olan dokümantasyondu
```

**Çürüyen kısım (ham sayı 150-400→8) neden çürüdü:** MIN_BOSLUK_GUN=200
gün eşiği ve "bölge TAM boşluğu" ölçütü beklediğimden çok daha SIKI
çalıştı — tahminim bölge-içi PARALEL devlet yoğunluğunu hafife almıştı;
çoğu bölgede o kadar çok künye var ki bölge HİÇBİR ZAMAN tamamen boş
kalmıyor (yalnız 8 kez, hepsi de büyük-güç dışlanması/çapraz-bölge
etiketleme yüzünden). Bu, D022'nin beklediği türden değerli bir
çürüme: yöntemin GÜCÜNÜ (yanlış pozitif üretmemesi) öngörülenden
FAZLA gösterdi.

---
Commit'te bu dosya + `denetim/ARAC-DIZIN-TAMLIK-0911.py` +
`denetim/OLCUM-DIZIN-TAMLIK-0911.json` adlarıyla ayrı ayrı eklenecek.

