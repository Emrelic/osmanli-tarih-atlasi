<!-- DURUM: CALISIYORUM | 2026-08-14 08:10 | IS 0 + IS 1 BITTI — rapor denetim/TUNA-HAVZASI-RAPOR.md · 43 merkez · 9 TDV-dogrulamali · 4 celiski -->

## İŞ 1 ✅ BİTTİ (08:10) — teslim: `denetim/TUNA-HAVZASI-RAPOR.md`

```
53 merkez istendi · 43 veride VAR · 10 veride HİÇ YOK
118 dönem sınırı çıkarıldı · 17 gün TDV ile DOĞRUDAN doğrulandı · 101 doğrulanmadı
9 TDV maddesi gövdesiyle okundu: erdel · macaristan · budin · egri · kanije ·
  varad · uyvar · tokoli-imre (+ arama sayfası)
4 kaynak çelişkisi · dört açık sorunun dördüne de hüküm
```

🔴 **Asıl bulgu, aranan şeyden büyük çıktı:** kusur "üç yanlış yeşil" değil,
**`macaristan` ile `avusturya`nın AYNI DEVLETİ göstermesi.** Kraliyet
Macaristanı 6 noktada `avusturya`, 3 noktada `macaristan` çiziliyor — ayıran
şey siyasî durum değil, **noktanın fetih tarihi.**

🔴 **En büyük tarih sapması:** Erdel'in tâbiiyeti veride **1687-08-12**
bitiyor, TDV **1697 işgal / 1699 Karlofça** diyor — **10-12 yıl.**

🟢 **Beklenen desen ÇIKMADI:** şartname "Osmanlı fetih gününü, Habsburg
antlaşma gününü sayar, fark yıllardır" diyordu; doğrulanan 9 merkezin
**6'sında veri ile TDV birebir aynı gün.** Bu havzada sorun tarihlerde değil
**kimlik ve statüde.**

---

<!-- IS 0 kaydi asagida -->
<!-- DURUM: CALISIYORUM | 2026-08-14 07:30 | IS 0 BITTI — uc sayi da DOGRULANDI, dort YENI bulgu -->

# TUNA HAVZASI 1521–1699 — ilerleme

**Oturum kimliği:** `local_ab11dc50-8879-494a-890a-8b43f6b2cb01`
(eski adı: Opus hazır kıta 7 · işi 14 Ağustos 07:19'da tahtadan aldım, M-0032)
**Yazma yetkim:** `denetim/TUNA-HAVZASI-RAPOR.md` · bu dosya. **Veriye DOKUNMUYORUM.**

---

## İŞ 0 — TABAN ÖLÇÜMÜ ✅ BİTTİ (07:30)

Yöntem: `arac/girdi.py`den içe aktarıldı, kendi ayrıştırıcım yazılmadı
(`CLAUDE.md §11`). Taban: **2503 nokta**, 42-50°K / 13-27°D kutusu, sekiz kesit
(Belgrad 1521-08-29 · Mohaç 1526-08-29 · Budin 1541-08-29 · Speyer 1570-08-16 ·
Zitvatorok 1606-11-11 · Vasvar 1664-08-10 · 2. Viyana 1683-09-12 ·
Karlofça 1699-01-26).

### 🟢 Devraldığım üç sayı — ÜÇÜ DE DOĞRULANDI (`YASALAR B10`)

| şartname | benim ölçümüm | hüküm |
|---|---|---|
| kutuda 116 nokta | **116** | ✅ birebir |
| en çok iki sahip 91 | **91** (1 sahip 73 · 2 sahip 18) | ✅ birebir |
| üç ve fazlası 25 | **25** (3 sahip 23 · 4 sahip 2) | ✅ birebir |

📌 Ve dağılımın içi, tek başına toplamdan daha ağır: **73 nokta 178 yılda
TEK sahip görmüş.** Yani "en çok iki" ifadesi kusuru hafif gösteriyor —
kusurun ağırlık merkezi ikilerde değil **teklerde.**

### 🟢 `erdel` ölçümü — doğrulandı ve GENİŞLEDİ
```
kutuda  s:"erdel" dönemi : 0
TÜM VERİDE s:"erdel"     : 0        ← şartname yalnız kutuyu söylüyordu
devletler.js künye id:"erdel" : VAR (1 kayıt)
```
⇒ Künye var, veri yok, renk yok. Koordinatörün M-0021'deki zinciri **teyit
edildi** ve bir adım genişledi: eksik yalnız kutuda değil, **verinin
tamamında.**

### 🔴 YENİ BULGU 1 — `avusturya`: 93 dönem çiziliyor, KÜNYESİ YOK
```
kutuda s:"avusturya" dönemi : 93   ← en çok kullanılan kimlik
devletler.js künye id:"avusturya" : 0
devletler.js künye id:"habsburg"  : 1
```
Koordinatör M-0021'de bu ikiliği bildirmişti; ben **niceliğini** ölçtüm:
kutunun **en yoğun kimliği**, ve dizinde karşılığı yok. Kullanıcı gövdeye
tıklarsa künye bulamaz.

### 🔴 YENİ BULGU 2 — `thokoly` ve `hirvatistan`: ne künye ne veri
```
devletler.js id:"thokoly"     : 0        veride s: dönemi : 0
devletler.js id:"hirvatistan" : 0        veride s: dönemi : 0
```
⇒ M-0021 bunları "rengi yok" diye sayıyordu; ölçüm **künyelerinin de
olmadığını** gösteriyor. Yani sıra `RENK → VERİ → KOŞU` değil, bu ikisi için
**KÜNYE → RENK → VERİ → KOŞU.** Bir basamak daha var ve atlanırsa renk
yazılamaz.

### 🔴 YENİ BULGU 3 — kutudaki 41 `v:` döneminin **41'i de JENERİK**
```
kutuda v: dönemi : 41      kimliği yazılı olan : 0      jenerik : 41
```
İçlerinden biri doğrudan konumuz:
```
Erdel (Kaloşvar)   v: 1541-08-29 → 1687-08-12     146 YIL, kimliksiz
Varad (Oradea)     v: 1541-08-29 → 1660-08-27
Yanova (Ineu)      v: 1541-08-29 → 1658-08-27
```
⇒ Erdel haritada **var** — ama adı olmadan, Eflak-Boğdan-Dubrovnik ile aynı
jenerik tonda. Emre'nin *"Erdel açık kırmızı"* gözlemi **birebir bu.**

### 🔴 YENİ BULGU 4 — "üç yanlış yeşil" DOĞRU ama KUSUR ÜÇ NOKTADAN BÜYÜK
Şartnamenin üç noktası (1570 Speyer'den SONRA yeşil kalanlar) **doğrulandı**:
```
Yanıkkale (Győr)  macaristan → 1594-09-27
Eğri              macaristan → 1596-10-12
Kanije            macaristan → 1600-10-20
```
Ama desen bundan geniş: `macaristan` dönemi **~40 noktada `1281-01-01`de
başlıyor ve tam Osmanlı'nın aldığı gün bitiyor.** Yani yeşil bir siyasî
hüküm değil, şartnamenin dediği gibi *"Osmanlı henüz almadı"* varsayılanı —
ve varsayılan **bütün kutuya** yayılmış.
```
1526-1570 arası biten yeşiller (Estergon 1543 · İstolni Belgrad 1543 ·
Segedin 1543 · Şimontorna/Hatvan/Vaç 1544 · Temeşvar 1552 · Solnok 1552 ·
Zigetvar 1566 · Gyula 1566)  → MEŞRU OLABİLİR (krallık 1570'e kadar yaşıyor)
1570 SONRASI biten üçü        → MEŞRU DEĞİL (kaynak doğrulaması İŞ 1'de)
```
📌 **Ölçtüğüm ile çıkardığımı ayırıyorum (`§11`):** ölçüm, dönemlerin bitiş
günlerinin fetih günleriyle birebir örtüştüğüdür. Çıkarım, bunun bir
varsayılan olduğudur — ve çıkarımı İŞ 1'de kaynakla sınayacağım.

### 🔴 YENİ BULGU 5 — Kraliyet Macaristanı `avusturya` diye çiziliyor
```
Kassa · Eperjes · Tokaj · Sopron · Bratislava · Zagreb
    macaristan  1281-01-01 → 1526-08-29    (Mohaç günü biter)
    sonrası     avusturya
```
⇒ Veri, 1526'da Macar Krallığı'nı **Avusturya'ya çeviriyor.** Oysa Kraliyet
Macaristanı 1526-1867 arası **ayrı bir krallıktı**; Habsburg kralı taşıyordu
ama Avusturya değildi. Bu, Emre'nin *"ayrı bir Macar krallığı kalmış mıydı"*
sorusunun tam merkezi. İŞ 1'de beş kaynak ailesiyle sınanacak.

### ⚠️ KAPSAM ÇEKİNCESİ — kutu, havzadan geniş
`42-50°K / 13-27°D` kutusu **Eflak ve Boğdan'ı da içeriyor** (Bükreş,
Tırgovişte, Suçava, Hotin, Kımpulung…). Bunlar Tuna havzası işinin
konusu **değil** ama 116 sayısının içindeler. ⇒ İŞ 1'in merkez cetvelinde
onları **ayrı bir sütunda** işaretleyeceğim; ölçüm tabanını değiştirmiyorum
ki devraldığım sayılarla karşılaştırılabilir kalsın.

---

## SIRADAKİ

- **İŞ 1** merkez merkez statü cetveli (asgarî 47 merkez) — başlıyorum
- **İŞ 2** beş kaynak ailesinden çaprazlama
- **İŞ 3** dört açık soruya hüküm

## KOORDİNATÖRE SORULAN — cevap beklenirken iş durmuyor
1. Sıra: raporum RENK 3'ten **önce** mi? (M-0021 sırayı bağlayıcı ilan etti)
2. [E] üç yanlış yeşil bende mi, ayrı oturumda mı? (önerim: bende)
3. Statü merdiveni için **iki sütun** vereceğim — fiilî idarî statü + hukukî
   tasnif (*dârü'l-İslâm/ahd/harb*) — ve örtüşmediği yerleri işaretleyeceğim.
   İtiraz varsa şimdi.
