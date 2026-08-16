# RENK AFRİKA — ilerleme

**Dosyam:** `arac/renkler.py` · **Oturum:** RENK AFRİKA (16 Ağustos 2026)

## Teslim — üç parti, BOYALAR 327 → 388

| parti | kimlik | sonuç | tahta |
|---|---|---|---|
| 1 — Batı/Orta/Güney Afrika | 10 | yazıldı, 4 alet temiz | M-0199 · M-0442 |
| 2 — bağlama kapısı | 7 | yazıldı, `--dogrula` 0 fark | M-0362 · M-0442 |
| 3 — Amerika | 44 | yazıldı, 4 alet temiz | M-0470 · M-0501 |

```
bağlı veride RENKSİZ kimlik   44 → 0
renk_fark zincir kusuru       77 → 33   (kalan 33: 32 künyesiz + romanya-kralligi)
```

🔴 **`arac/renkler.py` bu satır yazılırken hâlâ COMMIT'SİZ.** Üç kez
bildirildi (M-0442 ④ · M-0470 · M-0501 ⑦). `arac/` koordinatörün
kapsamında; bu dosya o commit kaybolursa **ölçümlerin kaydı** olsun diye
yazıldı.

---

## Bu oturumun ölçerek bulduğu altı şey

Altısı da **kendi çıktısını okuyarak değil, kendi varsayımını kırmaya
çalışarak** bulundu. Hiçbirini bir denetim betiği yakalamadı.

### ① Tarih METİN olarak karşılaştırılınca 3 haneli yıl kayboluyor
`kanem-bornu` (`f:"800-01-01"`) hiçbir kimlikle örtüşmüyor çıktı:
`"800..." < "1808..."` metin sıralamasında **yanlış**, çünkü `'8' > '1'`.
⇒ engel 0. Yıl 4 haneye dolduruldu ⇒ **engel 0 → 25.**

### ② Denetimin kendisi bu partiye KÖR — ve "temiz" diyordu
`C13`in ateşleme yolu sahte girdiyle zorlandı:
```
mali'ye kongo-kralligi'nin TAM hex'i    → beş başlık sayısı SESSİZ
sokoto'ya kanem-bornu'nun TAM hex'i     → SESSİZ
altlık/deniz dalları                    → ÖTTÜ
```
Sebep `renk_olc.py:358`: veride dönemi olmayan kimlik `çakışan`a değil
**`ölçülemedi`**ye gidiyor. Asıl sayı: `yakin_renk` ölçülemedi
**633 → 837 (+204)**.
⇒ *"Beş sayı tabanla aynı"* demek **"araç bunları hiç ölçmüyor"** demekti.

### ③ Kardeş kuralı — künye örtüşmesinden bağımsız, ama kapsamı COĞRAFÎ
```
mali ↔ sokoto           ΔE 0,9   künyeler HİÇ örtüşmüyor, AYNI COĞRAFYA
hausa ↔ zulu-kralligi   ΔE 1,2   aynı
```
Kurala göre meşru (*"hiç komşu olmasınlar"*), ama kullanıcı zaman
çubuğunu kaydırdıkça Nijer kıvrımında **aynı yeşili arka arkaya**
görüyor. Kardeşler ayrıştırıldı: en dar çift **0,9 → 14,3.**
⚠️ Ve kuralın **kapsamı** parti 2'de daraltıldı: `oranj ↔ yeni-zelanda`
~10.000 km — ayrıştırmanın faydası yok, sadece pay yiyor.
⇒ **Gerekçe mekândı, o hâlde kapsam da mekân olmalı.**

### ④ Maruziyet PARTİNİN coğrafyasına bağlı, projenin geneline değil
`girdi.km()` boylamı sarmalamıyor (mesafeyi BÜYÜK gösterir ⇒ **engel
kaçırılır**).
```
parti 1 (Afrika, -16,5°B…33°D)   kaçırılan 0   ⇒ MARUZ DEĞİL
parti 2 (NZ 179°D · Tonga -176°B) coğrafî olarak MARUZ
        ama ikisinin de 1500 km içinde palet komşusu YOK ⇒ ETKİ 0
```
⇒ **Maruziyet ile etki ayrı şeydir**, ve her partide yeniden sorulur.

### ⑤ 🔴 `--oner` bu partide KULLANILAMAZ çıktı verdi — ve önce tersini iddia ettim
M-0380/M-0442'de yazdım: *"bu partide araç ÇALIŞIYOR, elle zarf yazmam
YANLIŞ olur."* Sınadım:
```
18 İHLAL (eşzamanlı + <600 km + ΔE<12) · 27 uyarı
inka-imparatorlugu ↔ ispanyol-peru   ΔE 1,9 · 0 km
kuyruk düz bir RAMPA: 1,34 · 1,35 · 1,36 · 1,37 …
```
Sebep: `komsuluk()` **Voronoi** tabanlı, Amerika **harita penceresinin
dışında** ⇒ hücre yok ⇒ *"yeniler arası komşuluk: 0 çift"* ⇒ 44 birbirine
**hiç kısıtlanmadı.**
```
ÖLÇTÜM     44'ün hepsinin veride noktası VAR              ✓ doğru
ÇIKARDIM   "⇒ Voronoi komşuluğu ölçülebilir"              ✗ YANLIŞ
GERÇEK     nokta yetmiyor, PENCERE İÇİNDE olmalı
```
📌 Aracın **doğruluğu** ölçülmüş, **kapsamı** ölçülmemişti.

### ⑥ Eşik EVRENSEL DEĞİL — coğrafyanın ÖLÇEĞİNE bağlı
Kendi çözümüm de bütün kısıtları geçti (**0 ihlal**) ve teslim
edilebilirdi. En dar çiftlere bakıldı:
```
bolivya-cumhuriyeti ↔ ekvador-cumhuriyeti  ΔE 0,63
ikisi de 19. yy Güney Amerika cumhuriyeti · EŞZAMANLI · ~2.200 km
```
1500 km eşiği onu *"uzak ⇒ meşru"* saymıştı. `kaffa ↔ sidamo` dersi:
*"iki gövde DEĞMEDEN de aynı ekranda yan yana durur."*
⇒ Afrika'da kimlikler sıktı, 1500 km bir kıta parçasıydı; Amerika'da
ülkeler kıta ölçeğinde. Yeni kova: **1500-4000 km + eşzamanlı → ΔE ≥ 12.**
`C13` gereği kısıtın kurulduğu ayrıca ölçüldü: **197 çift, eşik altı 0,
en dar 12,1** — boş bir sıfır değil.

---

## Araçlara önerilenler (yazılmadı — o dosyalar bu oturumun değil)

1. **`renk_olc.py --oner`**: "0 komşu" durumunda susmamalı —
   *"Voronoi hücresi yok (pencere dışı) ⇒ komşuluk ÖLÇÜLEMEDİ, kısıt
   kurulmadı, çıktı GÜVENİLİR DEĞİL"* diye uyarmalı. Bugün sessizce
   devam etti ve çıktısı **onay isteyen bir liste** gibi göründü.
2. **Renk teslimi ölçütü**: *"0 çakışma"* diyen her rapor, yanında
   **"ölçülemedi kovası kaç büyüdü"** de yazmalı. İkisi ayrı satır
   olmazsa ölçülemeyen parti, ölçülmüş parti gibi görünür.
3. **`arac/tahta.py`** (M-0263'te bildirildi, sonra düzeltildi):
   push reddedilince önce mesajın `tahta.json`a yazıldığını, sonra
   commit'in uzakta olup olmadığını ölç; *"ulaşmadı"* ile *"benim
   push'um düştü"* aynı şey değil.

---

## Ölçülmedi (açıkça)

- 3 sıranın 1'i `ispanyol-peru`da takıldı ⇒ **SIRA** bağlıyor, **YAPI**
  değil (`§11` üçüncü cins). İkinci geçişle açılır mı ölçülmedi;
  *"yapısal"* diye **ilan edilmedi.**
- 4000 km eşiğinin kendisi ölçülmedi — *"aynı ekran"*ın gerçek sınırı
  yakınlaştırma seviyesine bağlı ve o `js/app.js`in konusu.
- Kardeş kapsam daraltmasının parti 2'ye kazancı (koşu, üretimle aynı
  işlemciyi paylaştığı için **durduruldu**; parti 2 kritik yolda değildi).
- Kalan 33 zincir kusuru künye tarafı — bu oturumun dosyası değil.
