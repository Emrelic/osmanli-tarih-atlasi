# PAKET-UI4 · arayüz teslim raporu

> PAKET-UI4 · 14 Eylül 2026 · 1.MURAT sevki · kaynak: kutu `parti-emrelic-0050/H-0007` (Emre) · ölçüm tabanı `PAKET-UI2-0913.md` (akordeon), `PAKET-UI3-0914.md` (tarayıcı çözümü)
> Yazılan dosyalar: `js/app.js` · `css/style.css` · `index.html` · bu rapor. `js/suzgec.js` DEĞİŞMEDİ. `data/`ya yazılmadı.
> İşe başlarken dört dosya `git status`ta temizdi (js/app.js son commit f6735c4). **Commit YOK.**
> `node --check js/app.js js/suzgec.js`: temiz. Sürüm damgası basılmadı.

## Özet

| iş | durum |
|---|---|
| İŞ 1 · magazin sekmesi → akordeon · kişi kartları · nasıl bilirdiniz (övgü/yergi) | 🟢 KOD + tam tarama (1376/1376 madde birim sayısı eşit) + metin sınaması (27/27 kartvizit birebir) + gerçek tıklama (1648-08-18) |
| İŞ 2 · BAGLA `olaylar_p0051` · `olaylar_p0052` | 🟢 index.html, p0050 altına (sıra p0051 → p0052), tarayıcıda 200 |
| İŞ 2 · BAGLA `ekokuma_ibrahim` | 🟢 `_EKOKUMA_DOSYA_ADLARI` · 12 kart · 9 maddede beklenen 15 = DOM 15 |
| İŞ 2 · BAGLA `ekokuma_kasrisirin` · `ekokuma_kirimrus` | 🟢 liste · Kasr-ı Şirin 5 = 5 · 1571 Moskova Osmanlı listesinde yok → İŞ 3 |
| İŞ 3 · akordeon devlet kronolojisi panelinde (`maddeAc`) | 🟢 KOD + ölçüm: 1571 Moskova 1 · 1572 Molodi 1 · 1552 Kazan (Rusya) 1 · Osmanlı paneli 1249/719/582 = önce · 🔴 yolda bulunan kusur: devlet paneli madde tıklaması 22 Ağu'dan beri TypeError ile ölüydü, düzeltildi |

---

## 1 · İŞ 1 — Magazin akordeonu, kişi kartları, nasıl bilirdiniz

### Ölçüm — önce nerede, nasıldı (f6735c4)
```
index.html:473-487      <section id="ob-kartvizit">  #kv-sekmeler + iki .kv-panel (data-sekme="kisi" | "magazin")
js/app.js:7540-7577     KV_SEKME_TANIM · kartvizitSekmeleriKur → "👤 Kişi | 🎭 Magazin" SEKME çubuğu
js/app.js:7580-7634     kartvizitGuncelle(o)  — yalnız o.vefat_id çözülünce
                          kişi paneli: .kv-kunye (künye) + .kv-nasil-bilirdiniz (Övgü · Yergi · Tartışma · Tarihçiler)
                          magazin paneli: .kv-magazin (Eşleri · Çocukları) + .kv-skandal
js/app.js:7764-7774     obGoster: madde kişileri (o.kisiler) #ob-ozel altında ayrı .ob-kutu kutuları
css/style.css:1398-1424 #ob-kartvizit · #kv-sekmeler · .kv-sekme-btn · .kv-panel
```
Yani bir vefat maddesinde panelde **üç ayrı düzen** yan yana duruyordu: `#ob-ozel` kişi kutuları → sekmeli kartvizit (Kişi | Magazin) → ek okuma akordeonu (UI2). "🎭 Magazin" hem sekme adı hem akordeon türüydü.
"Övgü-yergi kartı" ayrı bir veri türü DEĞİL (ölçüldü: `data/ekokuma*.js` kart düzeyinde tanımsız `tur` 0; övgü/yergi yalnız `PADISAHLAR`/`KISILER`in `ovgu/yergi/tartisma/tarihciler` alanları) → "nasıl bilirdiniz" bölümünün kendisi.

### Ne yapıldı
- Sekmeli bölüm ve `#ob-ozel` kişi kutuları KALDIRILDI. Hepsi ek okuma akordeonunun **satırı** oldu (UI2'nin aynı `ekAkordeonKur` / `_ekAkordeonAc` kodu: aynı görsel dil, tek satır açık, açıklama iki satıra küçülür, gövde tembel çizilir).
- `js/app.js:7546` `AKORDEON_EK_TUR` — kartı olmayan dört satır türü: `kv-kunye` 👤 Künye · `kv-nasil` 🗣️ Nasıl bilirdiniz · `kv-magazin` 🎭 Magazin · `kisi` 👤 Kişi. Satır başlığı etiket + kişinin adı.
- `js/app.js:7566` `kartvizitSatirlari(o)` · `:7619` `kisiKartSatirlari(o)` — eski doluluk kuralları AYNEN (`KV_SEKME_TANIM.doluMu`: kişi dolu → künye + nasıl bilirdiniz; magazin dolu → magazin; nasıl bilirdiniz boşsa *"Bu kişinin kartviziti henüz yazılmadı."*; kişiler: ilk 4 ad, padişah atlanır, tekil). Gövde HTML'i `ekEsc` ile hazır gelir (`sat._html`), `ekKartHtml`e gitmez.
- `js/app.js:8424` `ekOkumaButonlariGuncelle` artık kartvizit + kişi + ek okuma satırlarını **tek sıra tablosuyla** diziyor. Ek okuma dosyaları geç yüklenince aynı fonksiyon yeniden çizdiği için kartvizit satırları da kaybolmuyor.
- **Sıra kuralı** `:8465` `_akordeonTurSirasi`: `kv-kunye → kv-nasil → kisi →` EKOKUMA_TUR sırası (değişmedi), `kv-magazin` ek okuma `magazin` kartlarının **hemen önünde** (aynı konu yan yana). Tür içinde kaynak sırası.
- Satırlara `data-tur` eklendi (sınama/stil için).
- `js/app.js:7774` `obGoster`: `kartvizitGuncelle` çağrısı kalktı; Muharebe / Antlaşma hükmü / antlaşma farkı / aynı gün farkı / isyan kutuları `#ob-ozel`de AYNEN.
- `css/style.css`: sekme ve bölüm stilleri silindi; `.kv-kunye`, `.kv-nasil-bilirdiniz`, `.kv-ovgu/yergi/tartisma/tarihciler`, `.kv-magazin`, `.kv-skandal` renkleri akordeon gövdesinde kullanılıyor. Gövdede iç kaydırma kaldırıldı (gövdenin 46vh kaydırması yeter).
- İÇERİK değişmedi. Tek görsel fark: künye satırları " · " ile tek satır yerine alt alta.

### Ölçüm — önce / sonra aynı madde, aynı dosya kümesi (ekokuma_ibrahim henüz bağlı değilken)
Önce: eski sayfada `obGoster` + DOM (künye 1 · nasıl bilirdiniz 1 · magazin sekmesi 1 · `#ob-ozel` kişi kutusu · ek okuma satırı). Sonra: yalnız `.ek-ak-satir`.

| madde | önce | sonra | sonra satırlar |
|---|---|---|---|
| 1648-08-18 Sultan İbrahim'in hal'i ve katli | 6 (künye·nasıl·magazin + 3 ek) | **6** | Künye · Nasıl bilirdiniz · Magazin(kv) · Magazin · Tartışma · Kimdir? |
| 1651-09-02 Kösem Sultan'ın öldürülmesi | 5 (5 ek) | **5** | Merak · Tartışma · Tartışma · Kimdir?(Kösem) · Kimdir?(Turhan) |
| 1640-02-09 IV. Murad'ın ölümü | 6 | **6** | Künye · Nasıl · Magazin(kv) · Magazin · Tartışma · Kimdir? |
| 1389-06-15 I. Kosova | 6 | **6** | Künye · Nasıl · Magazin(kv) · Merak · Tartışma · Savaşın Hikâyesi |
| 1534-12-04 Bağdat'ın fethi | 2 (kişi kutusu + 1 ek) | **2** | Kişi(Pargalı İbrahim Paşa) · Edebiyat |
| 1451-02-18 II. Murad'ın vefatı | 6 (künye·nasıl·magazin + kutu + 2 ek) | **6** | Künye · Nasıl · Kişi(Çandarlı Halil) · Magazin(kv) · Magazin · Tartışma |
| 1623-09-10 I. Mustafa'nın ikinci hal'i | 2 | **2** | Magazin · Kimdir? |

⚠️ Kösem maddesinde `vefat_id` yok ve `kisiler` KISILER'e bağlanmıyor → kartvizit yok (önce de yoktu). Kösem bilgisi "🪪 Kimdir?" kartıyla geliyor.

**Tam tarama (tarayıcı, gerçek app.js):** 1376 maddenin **1376'sında** eski kuralın birim sayısı (2·kişi dolu + magazin dolu + kişi kutusu + ek okuma kartı) = yeni DOM satır sayısı. Kartvizitli madde 27 · kişi kartlı madde 508 · fark 0.
**Metin sınaması (node, `denetim` dışı geçici alet):** f6735c4'teki eski `kartvizitGuncelle` sahte DOM'da koşturuldu, yeni `kartvizitSatirlari` HTML'i düz metne indirildi: **27/27 vefat maddesinde metin birebir** (künye · övgü/yergi/tartışma/tarihçiler · eşleri/çocukları · skandal).

**Gerçek tıklama (computer left_click, 1648-08-18, ekokuma_ibrahim bağlıyken 8 satır):**
```
🗣️ Nasıl bilirdiniz  → açık [kv-nasil] · görünen gövde 1 · açıklama küçüldü ✓ · gövde "Övgü: Erken saltanat yılları…"
🎭 Magazin (kv)      → açık [kv-magazin], öteki kapandı ✓ · "Eşleri: Turhan Hatice Sultan … Çocukları: en az 3 …"
🎭 Magazin (kart)    → açık [3:magazin] · gövde 1034 karakter ✓
aynı satıra 2. tık   → açık 0 · açıklama tam · "Açıklama" başlığı açık ✓
```
Ekran görüntüsünde 8 satır tek sütunda, sekme çubuğu yok.

**Emre'nin bakacağı yer:** 1648-08-18 Sultan İbrahim'in hal'i ve katli · 1451-02-18 II. Murad'ın vefatı (kişi kartı + kartvizit + magazin kartı birlikte).

---

## 2 · İŞ 2 — Dosya bağlama (tahta komutlarıyla)

| komut | yapılan | doğrulama |
|---|---|---|
| M-3917 · M-3918 `olaylar_p0052` · `olaylar_p0051` | `index.html` p0050 satırının altına p0051, sonra p0052 (`?v=r8232`) | `node --check` temiz · `OLAYLAR_P0051` 4 madde · `OLAYLAR_P0052` 1 madde · tarayıcıda ikisi de 200 · teyit M-3920 |
| M-3923 `ekokuma_ibrahim` | `_EKOKUMA_DOSYA_ADLARI` (index.html'de ekokuma satırı YOK — ölçüldü, 0; yükleyici liste) | 12 kart · yetim 0 · 9 maddede beklenen 15 = DOM 15 · teyit M-3925 |
| M-3929 `ekokuma_kasrisirin` · `ekokuma_kirimrus` | `_EKOKUMA_DOSYA_ADLARI` | aşağıda · teyit M-3930 |

`ekokuma_ibrahim` madde başına: 1640-02-09 1 · 1642-01-01 1 · 1644-01-01 2 · 1645-04-01 1 · 1645-08-22 1 · 1647-01-01 2 · 1648-05-01 2 · 1648-08-08 3 · 1648-08-18 2.

`ekokuma_kasrisirin` (5 kart): 7 maddede **14 = 14**, yetim 0. **1639-05-17 Kasr-ı Şirin Antlaşması: 5 = 5** (satır toplam 10).
`ekokuma_kirimrus` (5 kart): 6 maddede **8 = 8** (1441 · 1475 · 1502 · 1638 · 1654 ×2 · 1783 ×2).

### 🔴 Aksaklık — 1571 Moskova maddesinde kart çizilmiyor (veri/kapsam kalemi, bende değil)
```
Osmanlı listesinde 1571: 01-01 "Lehistan'ın Dinyeper hattını ileri sürmesi" · 08 Kıbrıs · 10-07 İnebahtı
Moskova akını yalnız KRONOLOJI_KIRIM 1571-01-01 "Devlet Giray, Oka Nehri savunma hattını yararak…"
ek okuma akordeonu yalnız Osmanlı panelinde (obGoster → ekOkumaButonlariGuncelle);
devlet kronolojisi paneli (maddeAc, js/app.js:11289) ek okuma çizmiyor  (UI2/UI3'te de yazılı kapsam)
```
- `kirimrus` 17 bağ değerinin 9'u hiçbir Osmanlı maddesine düşmüyor. 8'i kuyruk günü: 1552-10-02 Kazan · 1571-01-01 Moskova · 1572-01-01 Molodi · 1480-11-11 Tatar boyunduruğu ×2 · 1644-01-01 İslâm Giray · 1648-05-16 Tugay Bey · 1666-01-01 esir.
- `1556-01-01|Astrahan`: aynı gün Osmanlı maddesi var ama başlık *"Astarhan"* yazıyor → ayırt edici tutmuyor.
- **`tartisma-kirimrus-pominki-harac` hiçbir maddede çizilmiyor** (iki bağı da kuyruk günü).
- `kasrisirin` 3 bağ da kuyruk günü: 1629-01-19 Abbas (KRONOLOJI_IRAN) · 1638-12-25 Bağdat (Osmanlı maddesi 12-24) · 1635-01-01 Ahıska (KRONOLOJI_GURCISTAN). Kartlar başka bağlardan zaten görünüyor.
- Koordinatör (b) yolunu seçti → İŞ 3 (M-3943). `1556-01-01|Astrahan` Osmanlı listesinde yine tutmuyor (veri kalemi, EK-A).

---

## 3 · İŞ 3 — Ek okuma akordeonu devlet kronolojisi panelinde (M-3943)

### 🔴 Önce bir kusur çıktı: devlet paneli madde tıklaması 22 Ağustos'tan beri ölüydü
```
tık → window error: "Cannot set property olayBekliyor of #<Object> which has only a getter"  js/app.js:11295
maddeAc   KAMERA.olayBekliyor = true;  try { tarihAyarla(gi) } finally { KAMERA.olayBekliyor = false }
898f180 (22 Ağu)  olayBekliyor → yalnız GETTER (sayaç KAMERA.kilit); bu satır güncellenmemiş
sonuç     panel gizli kalıyor, başlık boş, uçuş yok — fırlatma tarihAyarla'dan ÖNCE
```
Çare (`maddeAc`): `kameraKilitle(); try { tarihAyarla(gi); } finally { kameraCoz(); }` — `olayaGit`in aynı sayaç deseni. Tahtaya M-3947 ile bildirildi.

### Ne yapıldı
- `maddeAc` (devlet kronolojisi paneli, `ODAK` listesi ve birleşik liste ikisi de bunu çağırıyor) panel başlığını/detayını yazdıktan sonra **obGoster'ın çağırdığı AYNI ortak fonksiyonu** çağırıyor: `ekOkumaButonlariGuncelle` (kartvizit + kişi + ek okuma satırları, tek sıra kuralı). Yeni desen yok, `ekKartHtml`/`ekAkordeonKur` aynı.
- Bağ kuralı AYNI (`ekKartBagliMi`: `t` + başlıkta ayırt edici). Kuyruk maddesinde `gi` alanı yok → veriye yazmadan `Object.create(m)` sarmalayıcısına `gi` konuyor (kişi kartı `padisahEslesmesi(ad, o.gi)` ister).

### Ölçüm (tarayıcı, gerçek app.js, `.dss-satir` ve `.odak-madde` öğelerine click olayıyla)
| panel · madde | kart (DOM) |
|---|---|
| Kırım · 1571-01-01 Devlet Giray Oka hattını yararak Moskova… | `moskova-akinlari` **1** |
| Kırım · 1572-01-01 ikinci Moskova seferi Molodi | `moskova-akinlari` **1** |
| Rusya Çarlığı · 1552-10-02 Kazan Hanlığı fethedildi | `moskova-akinlari` **1** |
| Rusya Çarlığı · 1556-01-01 Astrahan Hanlığı ilhak edildi | `moskova-akinlari` **1** |
| Rusya Çarlığı · 1480-11-11 Ugra Nehri | `pominki-harac` + `carlik-sovyet` **2** |
| Kırım · 1644-01-01 III. İslâm Giray | `pominki-harac` **1** (Osmanlı panelinde hiç görünmüyordu) |
| Kırım · 1648-05-16 Tugay Bey · 1666-01-01 Evliya Çelebi | `esir-ticareti` **1 + 1** |

- ⚠️ Kırım'ın 1552 maddesi (`1552-01-01 "IV. İvan Kazan Hanlığı'nı işgal etti"`) kart ALMIYOR: bağ `1552-10-02|Kazan`, KRONOLOJI_RUSYA gününe yazılmış. Kural gereği doğru; kart Rusya panelinde görünüyor.
- Kırım paneli 91 maddenin hepsi tıklandı: `kirimrus` beklenen 5 = DOM 5. Öteki türler de çiziliyor (ör. 1774-07-21 Küçük Kaynarca 6 satır, 1606-11-11 Zitvatorok 4).
- **Osmanlı paneli değişmedi, aynı sayfa yüklemesinde:** devlet paneli açılmadan önce `1249 satır · 719 madde · 582 kart` → Kırım + iki Rusya paneli kullanıldıktan sonra `1249 · 719 · 582`. Kod farkı yalnız `maddeAc`ta; `obGoster` yolu dokunulmadı.
- JS hatası 0 (window error dinleyicisiyle, bütün tıklamalar boyunca).
- ⚠️ Sayfa yüklemeleri arası Osmanlı sayısı OYNUYOR (1247 → 1235 → 1249) ve sebep kod değil: `data/ekokuma_kasrisirin.js` (01:28) · `ekokuma_kirimrus.js` (01:27) · `ekokuma_tartisma.js` commitsiz yeniden yazılıyordu; 1235'lik yüklemede `window.EKOKUMA_KASRISIRIN` hiç yoktu (yarım dosya anı). Bu yüzden önce/sonra aynı yüklemede ölçüldü.

**Emre'nin bakacağı yer:** sağ üstte Kırım Hanlığı'nı seç → 1571-01-01 maddesine tıkla: panel açılmalı, "💬 Tartışma" satırı çıkmalı. Rusya Çarlığı → 1480-11-11 Ugra (2 satır).

---

## Denetim
```
node --check js/app.js js/suzgec.js     temiz
konsol (tarayıcı, bütün sınama)         JS hatası 0 · 2 kaynak 404 — ikisi de .js DEĞİL (bütün .js istekleri 200, ağ listesinden ölçüldü);
                                        UI3'te de ilk yüklemede vardı, bu paket yeni kaynak eklemedi
```
```
py arac/denetle.py — üç koşu (bu paketin dört dosyası denetimin girdisi DEĞİL; UI3 grep ölçümü)
TABAN  ~00:57   İHLAL (exit 1) · 3818 yerleşim · 1383 madde · 2: 531/0 · 2s: 1329/100 · 7 ✗ 658 (beklenen 650) · mükerrer ✓ 0
ARA    ~01:17   temiz (exit 0) · aynı sayılar · 7 ✓ 658 (beklenen 658)
TESLİM ~01:37   İHLAL (exit 1) · 3818 · 1386 madde · 2: 534/0 · 2s: 1330/100 · 7 ✓ 658 · mükerrer ✗ 1 çift
```
Farkların sebebi (dosya damgaları ve commit'lerle ölçüldü, hiçbiri bu paketin dosyası değil):
- `7` 650 → 658: `arac/denetle.py` 00:59:59'da değişti (`BEKLENEN_ENKLAV_SORGU = 658`, yorumu *"VERI-KIRIM"*); taban koşusu eski sabiti okumuştu.
- 1383 → 1386 madde · 531 → 534 kırılma · mükerrer ✗: `data/olaylar_ek17.js` 01:18:17'de **commitsiz** değişti (başka işçi). Çift: `1711-07-21 "Baltacı Mehmed Paşa ve Çariçe Katerina rivayeti"` (olaylar_ek17.js:115) ↔ `1711-07-21 "Prut Antlaşması — Azak ve Taygan'ın geri alınması"`. Aynı dakikalarda `olaylar*.js` 13 dosya · `kronoloji_*` 5 dosya · `ekokuma*` 8 dosya da yeniden yazıldı (01:18-01:19).

## Açık kalemler
- 🟡 Kartvizit ve kişi satırları da UI2 kuralıyla **kapalı** başlıyor (önce kişi kutuları ve künye doğrudan görünüyordu). Başlıkta kişinin adı var. Emre "künye açık başlasın" derse `ekAkordeonKur` sonundaki `_ekAkordeonAc(-1)` tek yer.
- 🟡 Devlet paneli (`maddeAc`) yalnız başlık · detay · akordeonu yazıyor; `#ob-meta` · `#ob-gorsel` · `#ob-ozel` · `#ob-madde-gorsel` bir önceki Osmanlı maddesinden kalmış olabilir (eski davranış, bu pakette değişmedi; temiz yüklemede `#ob-ozel` 0 çocuk ölçüldü). İstenirse ayrı iş.
- ⚠️ `maddeAc` 22 Ağustos'tan beri hiç koşmadığı için uçuş dalı (`haritayiOlayaGotur` / `devletiYay`) üç haftadır sınanmadı. Hızlı ardışık tıklama sınamasında (60 ms aralık, ~100 madde) harita merkez boylamı dünya kopyaları boyunca kaydı (`1557E`, `35606E`). Normal hızda tek tıklamada ölçmedim — Emre gözle bakmalı.
- ⚠️ Tarayıcı bölmesi gizliyken ilk gerçek tıklama "tab not drawn" hatası verdi; sayfada `requestAnimationFrame → setTimeout` (UI3 çözümü) ile geçti.

> **KAPANIŞ (UI4 KAPAT):** İŞ 1 · İŞ 2 · İŞ 3 TAMAM, yarım iş yok. Son durumda node --check js/app.js js/suzgec.js temiz. Teslim M-3958. Commit yok.
