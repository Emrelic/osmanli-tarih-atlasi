# MOTOR · DALGA-0052 — nehir geçiş bedeli + H-0100/101/104/105/106/112

```
TARİH      16 Eylül 2026 · şartname oturumlar/DALGA-0052.md (MOTOR satırı + §3)
DOSYALAR   arac/uret_petek.py · denetim/ARAC-MOTOR-NEHIR-0916.py · .json · bu rapor
DAYANAK    denetim/NEHIR-GECIS-SURE-0915.md (commit 9151774) · ARASTIRMA-NEHIR-0912.md
KOŞU       BAŞLATILMADI. Koşu 12 (C:/atlas-kosu12) dokunulmadı. Yalnız ölçüm betiği.
DERLEME    py -m py_compile arac/uret_petek.py  ✓
```

# ⓪ TEK CÜMLEYLE

Nehir geçiş bedeli motora **kenar bedeli** olarak girdi ve ızgarada hücrelerin
**%4,6'sının** (Osmanlı kutusu) sahibini değiştiriyor. Ama bu Dijkstra haritaya
bugün **yalnız denizi kesen parçalar için** iniyor. Emre'nin H-0105/106'da
sorduğu "5 gün sürtünmeli yürüme" ilkesi **kararlaştırıldı ama koda girmedi.**
Çamdo'da bu fark **5,4 kattır.**

---

# ① NE YAPILDI — `arac/uret_petek.py`

| Yer | Değişiklik |
|---|---|
| Nehir yatakları (`NEHIR_SINIF1_*`, `NEHIR_SINIFI`) | Kapıdan geçen her parça bir **bedel sınıfı** taşıyor. **Kapı değişmedi**, yaslama kümesi aynı. Sınıf 1: `scalerank ≤ 3` ya da araştırılan 16 nehirden biri (adıyla). Sınıf 2: kapıdan geçen öteki parçalar. |
| `_gecitleri_oku()` · `GECIT_KAYIT` / `GECIT_IZI` | `data/gecitler.js` (63 kayıt) **koşunun başında** okunuyor; sha256 özeti loga basılıyor. Motor dosyayı yalnız okuyor. |
| `NEHIR_BEDEL_SAAT` · `_nehir_kenar_kur()` | Bir ızgara adımı (merkezden merkeze) nehir hattını **kesiyorsa** o adıma ek bedel yazılıyor. Bedel saat × 5,04 = km-eşdeğeri. Nehre paralel adım bedel ödemiyor. Adımın orta noktası bir geçidin `etki_km`si içindeyse bedel = min(geçitsiz, tür bedeli). |
| `_kv_dijkstra(surt, nehir=None)` | Kenar bedelini okuyor. `nehir=None` eski davranış. Komşu sırası `_KV_YON` sabitinde; kurucu ile Dijkstra aynı sabiti kullanıyor. |
| ① eğim A/B | Artık iki tarafta da nehir **açık** ⇒ fark yalnız eğim. Eski hâliyle kalsaydı eğim ile nehir farkını birlikte sayacaktı. |
| ② nehir A/B (yeni) | Nehirsiz ikinci Dijkstra: ızgara farkı ve **haritaya inen parça farkı** (`_abn_parca`) basılıyor. Üretime karışmıyor. |

**Anahtarlar:**
```
MOTOR_NEHIR_KAPALI=1      nehir bedeli 0 (eski davranış)
MOTOR_NEHIR_OZNE=ordu     ordu tablosu (varsayılan: idare)
MOTOR_NEHIR_AB_KAPALI=1   nehir A/B ölçümünü atla
```

**Tablo (yürüyüş saati)** — her sayı `NEHIR-GECIS-SURE-0915.json` `onerilen_adim_bedeli`nden:

| | geçitsiz sınıf-1 | geçitsiz sınıf-2 | köprü | feribot / kale-çifti | sığ geçit |
|---|---|---|---|---|---|
| **idare** (açık) | **16** | **4** ⚠️ | 0 | 8 | 4 ⚠️ |
| ordu (kapalı) | 72 | 72 (bulunamadı → en kötü hâl) | 16 | 72 | bulunamadı → geçitsiz |

- **Kaynaklı değerler:**
  - Geçitsiz 16 saat: Musul 1737 (2 gün) ve Misis 1737 (6 gün) aralığının alt ucu.
  - Köprü 0 saat: Evliya, Ösek köprüsü.
  - Feribot 8 saat: 5 kafile kaydının beşinde günün kalanı gitti.
- ⚠️ **Türetilen iki değer:**
  - Sınıf-2 geçitsiz 4 saat: fiilî kafile geçişi; küçük nehirde kurumsal gün kaybı varsayılmadı.
  - Sığ geçit 4 saat: Herzog oranı (1:4) × 16.
  - İkisinin de kaynağı yok; **karar bekliyor** (§⑥).

---

# ② ÖLÇÜM — `denetim/ARAC-MOTOR-NEHIR-0916.py` (koşusuz)

**Yöntem — aynı kod kuralı:** Betik motorun mantığını kopyalamıyor. `uret_petek.py`'den
metin işaretleriyle üç dilim kesip aynen koşturuyor:
1. eğim DEM seçimi, kara maskesi ve göller;
2. nehir yatakları (sınıf ve geçit okuma dahil);
3. ızgara, tohum, eğim yüzeyi, nehir kenarları ve `_kv_dijkstra`.

İşaret kayarsa betik ölüyor.

🔴 **Tam dünya ölçülmedi, sebebi ölçüldü:** makinede 11,9 GB bellek var. Koşu 12
çalışırken boş bellek 1,6 GB ve CPU %98. Tam ızgara 20,9 milyon hücre × üç
Dijkstra birkaç GB ister ve koşu 12'yi sayfa dosyasına iterdi. Bu yüzden
**bölgesel kutular** kullanıldı. Bedeli: kutu dışındaki tohumlar yarışmıyor, bu
yüzden oranlar güvenilir, mutlak km² değerleri kutuya bağlı. Tam ölçüm koşu 12 bitince:
`py denetim/ARAC-MOTOR-NEHIR-0916.py` (argümansız = motorun `BOLGE`'si).

| Kutu | Erişilen hücre | Sahibi değişen | % | km² |
|---|---|---|---|---|
| **Osmanlı dünyası** 5-62D 20-58K | 691.169 | 31.972 | **4,63** | 696.336 |
| · Tuna havzası 8-30D 42-50K | 61.871 | 5.799 | 9,37 | 122.493 |
| · Balkanlar | 21.315 | 1.165 | 5,47 | 26.204 |
| · Anadolu | 38.208 | 2.713 | 7,10 | 65.238 |
| · Mezopotamya | 38.935 | 3.094 | 7,95 | 79.809 |
| · Mısır-Nil | 27.283 | 4.020 | **14,73** | 112.164 |
| · Kafkasya | 21.925 | 1.612 | 7,35 | 38.350 |
| · Karadeniz kuzeyi | 96.047 | 10.670 | 11,11 | 210.418 |
| **Assam** 85-100D 20-32K | 67.345 | 5.805 | 8,62 | 162.124 |
| **Tibet** 85-105D 22-38K | 126.957 | 15.817 | 12,46 | 415.569 |

**Osmanlı kutusu kenar sayıları:**
- 8.316 nehir hücresi var; 202.537 aday adımın 44.996'sı nehri kesiyor (sınıf-1 27.906 · sınıf-2 17.090).
- **2.508** adımda geçit indirimi uygulandı; bunların **1.536**'sı köprü, yani bedelsiz.
- Dijkstra süresi: nehirli 21 sn, nehirsiz 24 sn. Nehir bedeli Dijkstra'yı yavaşlatmıyor.
- Erişilen hücre nehirli ve nehirsiz koşuda aynı (bedel sonlu).

**En çok toprak değiştiren yerleşimler (Osmanlı kutusu):**
- **Kaybeden:** Regensburg −13.633 km² · Benî Süveyf −13.226 · Çernigov −12.136 · Kamışin −9.646 · Smolensk −9.146
- **Kazanan:** Prag +12.130 · Vetluga +10.047 · Atfîh +9.315 · Nürnberg +9.076 · Volokolamsk +8.749

Nil vadisindeki (Benî Süveyf ↔ Atfîh) yer değiştirme, nehrin iki yakasındaki şehirlerin artık karşı kıyıyı ucuza almadığını gösteriyor. İstenen davranış bu.

## 🔒 ÖNGÖRÜ — koşu 13'ten ÖNCE yazıldı (çürütülebilir)

Emsal olarak eğimin kendi A/B'si alındı (`kosu_zincir.log:6467`): ızgarada %5,19 değişim → haritada **28 parça / 43.918 km²**.
```
② ızgarada sahibi değişen hücre   %4 – %12   (tam dünya; kutular 4,6 / 8,6 / 12,5)
② NEHİR ETKİSİ parça               10 – 60 parça
② NEHİR ETKİSİ alan                20.000 – 150.000 km²
ek süre                           +1 Dijkstra (eğim A/B ile aynı mertebe) + kenar kurma ~1 dk
```
⚠️ Mazeret şimdiden yazılıyor (`D019`): tam dünya bu kutulardan farklıysa
sebep Kuzey Amerika ve Sibirya'nın geniş nehir ağları olabilir. Bu kutuların hiçbiri
o bölgeleri örneklemedi.

---

# ③ H-0105 · H-0106 — "5 gün sürtünmeli yürüme neden görünmüyor?"

## Teşhis: karar VAR, kod YOK

`oturumlar/MENZIL-KARARLARI-0912.md` ②, 12 Eylül: *"tek yön 40 saat"* ·
**"TAVAN ARTIK KİLOMETRE DEĞİL SAAT."** Bu karar motora **inmedi**:
```
TAVAN_KM = {…: 200}          A1 tavanı: 200 km elips (komşusuz noktada TAM DAİRE)
PUAN_HALKA 200/300/400 km    puan kapısı: DÜZ mesafe, np.sqrt(dx²+dy²)
_kv_dijkstra (sürtünmeli)    YALNIZ düz hattı denizi kesen parçaya karar veriyor
```
⇒ Çamdo (H-0105) ekranda **basamaklı bir daire** gösteriyor:
- Daire: komşusuz nokta, A1 tavanı ve puan kapısının 200 km halkası.
- Basamak: puan kapısının 0,05° raster kenarı.

Dağ, nehir, eğim bu şekle **hiç girmiyor.**

## Ölçüm: tavan Dijkstra'ya bağlansaydı ne değişirdi

Aynı ızgara; "kendi erişimi" = yerleşimin sahip olduğu ve maliyeti bütçenin içindeki hücreler.
```
                     düz ≤200 km       sürtünmeli ≤40 saat    oran
Çamdo (Tibet)        112.932 km²          20.815 km²          %18   ← 5,4 KAT küçük
Gauhâtî (Assam)       90.088 km²          48.195 km²          %53
Sibsâgar (Assam)      92.689 km²          50.585 km²          %55
Tibet kutusu       1.609.831 km²         895.366 km²          %56
Assam kutusu       1.417.560 km²         901.669 km²          %64
Osmanlı kutusu    14.903.333 km²      14.404.619 km²          %97   ← yoğun nokta + düz arazi
```
- 📌 Çamdo'da sürtünmeli en uzak sahip hücre **234 saat** uzakta. Bugün 200 km'lik daire onu aynı rahatlıkla boyuyor.
- ⚠️ Düz taraf 0,05° ızgarada 8 komşulu mesafedir; gerçek daireden %8'e kadar sapar.
- ⚠️ Gauhâtî sayıları iki ayrı kutuda birebir aynı çıktı. Aletten şüphelenildi (`D117`). Sebebi: toprağı iki kutunun da kenarından >400 km içeride ve yakın komşu tohumları aynı.

**Yapılması gereken (öneri, yapılmadı — şartname teşhis istiyor):**
Tavanı `_kvuzak ≤ 40 × 5,04` şartına bağlamak. Hesap ızgarada **zaten var**
(`_kvuzak` km-eşdeğeri, `_kvsahip` sahip). Eksik olan, bu sonucun A1 tavanının
ve puan kapısının yerine geçmesi. Bu bir **motor değişikliğidir** ve
`GORUNUM-ABC-0910.md` ④'ün "kara-kara sürtünmeli Dijkstra" kalemiyle aynı iştir.
Emre'nin tek-değişken kuralı (`D017`/A1 vakası) gereği nehir bedelinden **ayrı bir koşuda** inmeli.

---

# ④ H-0100 · H-0101 · H-0104 · H-0112 — "B görünümü ne aşamada?"

**Özet: B'nin parçaları her koşuda zaten çalışıyor. Ekrandaki harita onların SONRASI. Eksik olan paylaştırma ve iki çıktı.**

```
B1  delikleri_doldur   boşluk kapatma      🟢 HER KOŞUDA açık · 🔴 anahtarı YOK
B2  enklav birleştirme                     🟢 açık (MOTOR_B23_KAPALI ile kapanır)
B3  koridor kırpma                         🟢 açık
B4  iki devlet arası sahipsiz toprağı      🔴 FONKSİYON YOK
    PAYLAŞTIRMA
iki çıktı (A ham · B rötuşlu)               🔴 YOK — koşu tek görünüm üretir
arayüzde A/B seçimi                          🔴 YOK
```

**Son koşunun kendi sayacı** (`kosu_zincir.log:9580-9582`):
```
B2 ENKLAV   1.537 birleşti · 60.939 DENİZ AŞIRI red · 67.519 UZAK (>250 km) red
            · 1.594 arada başka devletin yerleşimi var
B3 KORİDOR  266.781 dolduruldu · 1.009.091 SIĞ diye bırakıldı · 28.182 kapalı
```

**H-0112 (Sibirya benekleri birleşmiyor):** Sebep ölçüldü ve yapısal.
- `_b2_enklav_birlestir` her enklavı yalnız **en büyük parçaya** (ana kütleye) bağlıyor, ≤250 km şartıyla.
- Sibirya benekleri birbirine yakın ama Rusya'nın ana kütlesine binlerce km uzak. Hepsi **"uzak"** kovasına düşüyor.
- **Enklavdan enklava zincirleme bağlama yok.** Adaylarının %52'si bu kovada.
- ⇒ Motor değişikliği gerekiyor:
  - B2'ye zincir bağlama (en yakın parçaya, ana kütleye değil);
  - ya da B4 (paylaştırma), ızgaradaki sürtünmeli Dijkstra ile.

**H-0100 / H-0101 / H-0104 (boşluk ve sahipsiz toprak düzelecek mi):**
- **Boşluk kapatma (B1):** zaten açık. B1'in doldurmadığı boşluk ya bir **başka devletin yerleşimini** içeriyor, ya B2/B3 şartlarına takılıyor, ya da boşluk bir delik değil **tavanın dışında kalan** toprak (A1/puan).
- **İki devlet arası sahipsiz toprağı paylaştırma (B4):** yok. Gereken ölçüt `GORUNUM-ABC` ③'te yazılı: *"sıradağ tarafı az, ova tarafı çok pay alır"*. Bu, ızgaradaki **sürtünmeli ve nehirli Dijkstra'nın** (bu dalgada kuruldu) kara-kara çiftlerinde de karar vermesi demek.
- ⇒ Bugünkü nehir bedeli B4'ün **zeminini** hazırlıyor; B4'ün kendisi yok.

**Sıra önerisi** (`GORUNUM-ABC` ④ ile uyumlu):
1. **B1 anahtarı:** tek satır.
2. **Tavanı saate bağlama:** §③, ayrı koşu.
3. **B4 paylaştırma + B2 zinciri:** aynı Dijkstra zemininden.
4. **İki çıktı ve arayüz seçimi.**

---

# ⑤ SINIRLAR VE BORÇLAR

```
🔴 gecitler.js ANLIK GÖRÜNTÜYE girmiyor — `girdi.anlik_goruntu()` yalnız
   GIRDI_DOSYALARI + goller.js kopyalıyor, `_GIRDI_IZI`ne de girmiyor.
   Erken okuma pencereyi DARALTTI, KAPATMADI. Çare girdi.py'de (UYGULA'nın).
🟡 geçit NEHİR ADIYLA değil YAKINLIKLA eşleniyor — kavşak geçidi (Belgrad)
   iki nehre birden indirim veriyor
🟡 `etki_km` (30/20/15/10) kalibre edilmemiş (gecitler.js'in kendi beyanı)
🟡 gecitler.js `f`/`t` okunmuyor — Emre 22 Ağu: "geçit köprüden eskidir"
🟡 sınıf-1 ad kümesi "don" içeriyor — NE'de iki "Don" parçası var (6.0);
   biri başka bir Don olabilir, AYIRT EDİLMEDİ
⚪ ölçülemedi: tam dünya ızgara farkı (bellek — §②)
⚪ ölçülemedi: haritaya inen parça farkı — koşu gerektiriyor (koşu 13 basacak)
```

# ⑥ KARAR BEKLEYENLER — Emre

1. **Özne:** Varsayılan **idare**. Ordu tablosu yazılı ama kapalı.
2. **Sınıf-2 geçitsiz bedeli:** 4 saat mi (fiilî kafile geçişi, türetildi), 8 saat mi (gün kaybı)?
   - **Önerim 4.** Küçük akarsuyun kurumsal geçit düzeni kaydı yok.
3. **Tavanı 40 saate bağlamak** (H-0105/106): kararı 12 Eylül'de verildi, kodu yok.
   - **Önerim:** nehir bedelinden sonra, **ayrı bir koşuda.**
