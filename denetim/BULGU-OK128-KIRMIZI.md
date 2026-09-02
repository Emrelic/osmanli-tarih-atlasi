# BULGU — OPUS HAZIR KITA 128 · kırmızı satırların kökeni

> Sevk: `1.MURAT` · M-2201 · `oturumlar/DAGITIM-0902-AKSAM.md` bölüm ①
> Kapsam sevkte **daraltıldı**: `4` çözüldü (aşağıda), `2i` OK122'de,
> `4c` OK127'de. Bana kalan: **`1b`** ve **§1.5 tablo farkı**.
> Oturum cinsi: ÖLÇÜM — rapor yazar, **düzeltmez**. Hiçbir veri dosyasına
> yazılmadı; `arac/*.py` yalnız **okundu** (koşu PID 27596 canlı).

---

## ⓪ TABANIM — devralmadım, kendim koşturdum

`py arac/denetle.py` · çıkış kodu **1**
Taban: `girdi.GIRDI_DOSYALARI` **69 dosya / 2663 nokta** (kendim ölçtüm).

```
🟢 1  ✓ 2663 yerleşim, 219 sahipsiz     🟢 2   ✓ 534 kırılma, 0 açık
🟢 1c ✓ belgesiz 7 (tavan 7)            🟢 2s  ✓ 994 · 75 açık (tavan 121)
🟢 2t ✓ kırılmasız madde 18 (tavan 42)  🟢 konum ✓ 0
🔴 1b   BEYANSIZ boşluk 1 (beklenen 0)  ← BENDE
🔴 2i   26 kırılma / 4 açık (tavan 3)   ← OK122'de
🔴 4    12 hayalet (beklenen 8)         ← ÇÖZÜLDÜ (§②)
🔴 4c   286 (beklenen 280)              ← OK127'de
🔴 Ek   mükerrer madde: 2 şüpheli çift  ← sevkte YOK, ben ekledim
```

**PAKET-0035-0902'nin M-2162 ölçümünü bağımsız olarak DOĞRULADIM** —
sekiz sayının sekizi birebir aynı. İki ayrı oturum, iki ayrı koşu, aynı sonuç.
Ve sayılar 15:21'den beri oynamadı ⇒ arada o sayaçlara dokunan bir şey inmemiş.

---

## ① `1b` — BEYANSIZ pencere arası boşluk 1 · **NE · KİM · CİNS**

### NE — ölçüm

```
Timbuktu   1430-01-01 → 1468-01-01   13.879 gün sahipsiz
dosya      data/yerlesimler.js       (16,775 / -3,009 · k:1 · tur:sehir)
kayıt      s: mali-imparatorlugu 1281-01-01 → 1430-01-01
              songhay-imparatorlugu 1468-01-01 → 1591-04-13
              fas                   1591-04-13 → 1700-01-01
           kaynak:"tinbuktu"  ·  d:[]  ·  bos: YOK  ·  neden: YOK
```

🔴 **SEVKİN BİR ÖNCÜLÜ ÇÜRÜDÜ.** Şartname *"`denetle.py` beyanlı 3'ü
basıyor ama BEYANSIZ 1'i basmıyor, ONU BUL"* diyordu.
**`denetle.py` onu ADIYLA basıyor** — beyanlı üçü 🟢 ile işaretliyor,
dördüncüyü işaretsiz bırakıyor. `--ayrinti` gerekmedi.
⇒ Kalem "bulunamadı" değil, **zaten basılıydı**.

### KİM — ölçüm

Boşluk **kaza değil**; ölçülmüş, kaynaklandırılmış ve **bilerek** bırakılmış.
Kaydı `data/yer_yama_ok107.js` içinde, **H-0013** damgalı, sahibi
**OPUS HAZIR KITA 107**. Emre'nin *"haritanın güneybatısındaki küçük
boyamanın sebebi nedir"* sorusundan doğmuş (görsel 1513-09-01).

O kaydın kaynağı TDV `tinbuktu` maddesi, gövdesi okunmuş, alıntısı yazılı:

> "Tinbüktü 1430'da Tevârikler'in eline geçti ve 1468 yılına kadar
> onlarda kaldı."

⇒ Boşluk **tam olarak Tevârik (Tuareg) dönemidir** ve iki ucu da komşularıyla
hizalı (Valata `mali → 1430` · Gao `songhay → 1591-04-13 → fas`).

🔴 **VE ASIL BULGU — YAMANIN YARISI İNDİ, YARISI DÜŞTÜ.**
Yama kaydı **altı alan** taşıyor; `yerlesimler.js`teki canlı kayıtla
karşılaştırdım:

```
s:       ✓ İNDİ   üç dönem birebir aynı
kaynak:  ✓ İNDİ   "tinbuktu"
bos:     ✗ DÜŞTÜ  "veri-yok"
neden:   ✗ DÜŞTÜ  "kunye-yok — IKI ARALIK bilerek bos … Tuareg icin
                   devletler.js'te kunye YOK …"
not:     ✗ DÜŞTÜ  "H-0013 · …"
```

**Mekanizmayı koda bakarak ölçtüm** (`arac/_sahiplik_uygula.py`, salt okuma):

```
satır 318  ALAN_RX        = d · s · v · isg          ← dizi alanları
satır 342  SKALER_ALANLAR = m · kaynak               ← skaler alanlar
satır 347  assert CATISABILIR == {d,s,v,isg} | SKALER_ALANLAR
```

`bos:` ve `neden:` **hiçbir kümede yok** ⇒ uygulayıcı onları **yazamaz**.
Beyan yazıldı, kaynaklandırıldı, ve **araç tarafından sessizce düşürüldü**.

🟢 **VE OK107 BUNU ÖNCEDEN YAZMIŞ — öngörü TUTTU:**

> "🔴 UYARI: `_sahiplik_uygula.py` yalnız d·s·v·isg·m·kaynak yazıyor;
> aşağıdaki `bos:`/`neden:` alanları **İNMEZ**. Onları dosya sahibinin elle
> koyması gerekiyor — **yoksa Timbuktu yine "beyansız delik" sayılır**."

Bugün `denetle.py` aynen bunu diyor. Uyarı yazıldı, okunmadı, ve öngördüğü
kusur gerçekleşti.

### CİNS — **BİLİNEN BORÇ**, ihlal değil

```
ihlal DEĞİL     veri yanlış değil; iki uç doğru, kaynak okunmuş, gün hizalı
beyan DEĞİL     çünkü beyan VERİYE İNEMEDİ — makine ona soru soramıyor
BİLİNEN BORÇ    beyan yazılı ama YANLIŞ DOSYADA (yamada, veride değil)
```

**Bağımsız doğrulama** (devralmadım): `devletler.js` **438 künye**, Tuareg /
Tevârik / Berber / Sanhâca / Masûfa / Iwellemmedan için **0 eşleşme**.
⇒ OK107'nin *"künye yok"* beyanı **TUTTU**.

📌 Bu, `CLAUDE.md §11`in *"bir ders veriye SERBEST METİN olarak inerse inmiş
sayılmaz"* dersinin **bir kademe ötesi**: burada ders serbest metin değil,
**yapılandırılmış bir alana doğru biçimde yazılmıştı** — ve onu düşüren şey
kaydın kendisi değil **aracın alan kümesi** oldu. `grep` beyanı bulur
(yamada duruyor), `denetle.py` bulamaz (veride yok). *Sessiz atlama, yanlış
sonuçtan pahalıdır.*

---

## ② `4` — 12 hayalet dönem · ÇÖZÜLDÜ (M-2197)

Sevk *"Varşova adayım var ama DOĞRULANMADI, 8+4=12 aritmetik tesadüf
olabilir"* diyordu. **Ölçtüm: tesadüf değil, DOĞRULANDI.**

```
8 hayalet   iran      1281-1510 arası · künye 1925-12-12'de KURULUYOR
                      → bilinen sınıf (§3.5), beklenen 8 BUNLAR
4 hayalet   lehistan  künye 1795-10-24'te BİTİYOR → YENİ dördü
     data/yerlesimler.js        Varşova              1806-11-28 → 1815-06-09
     data/yerlesimler_p0037.js  Lublin               1809-10-14 → 1815-06-09
     data/yerlesimler_p0037.js  Chełm (Kholm)        1809-10-14 → 1815-06-09
     data/yerlesimler_p0037.js  Zamość               1809-10-14 → 1815-06-09
```

Künye tarafı: `lehistan` (1569→**1795-10-24**) ile `polonya` (**1918**→1923)
arasında **123 yıllık dizin deliği**; `varsova-dukaligi` künyesi **YOK**.

**Ölçtüğüm:** dönemlerin veride ne dediği, künye sınırları, dosya konumları.
**Çıkardığım (ölçüm değil):** kırılma günleri doğru seçilmiş görünüyor
(1806-11-28 · 1809-10-14 Schönbrunn · 1815-06-09 Viyana), yanlış olan
**kimlik**.
⚠️ Bu üç tarihi TDV/akademik kaynağa **sormadım**. `ÖLÇÜLEMEDİ`.

📌 `§3.5.1` birebir: *hayalet yok olmadı, TARAF DEĞİŞTİRDİ.* Kanıt
`denetle.py`nin kendi `1b` uyarı metninde: *"Varşova (Varşova Dükalığı
1806-1815 hiç yazılmamış)"* — boşluk biliniyordu, kapatıldı, hayalet doğdu.

---

## ③ SINIF MI, TEK KAYIT MI — **kendi hipotezimi ölçtüm ve ÇÜRÜTTÜM**

M-2219'da koordinatöre şunu yazdım: *"bu bir TEK KAYIT sorunu olmayabilir;
157 harcanmış yama kaydının kaçında `bos:`/`neden:` vardı ve sessizce düştü —
ben ölçmedim."* **Ölçtüm. Hipotezim çürüdü** — ve çürüten şey alan ayrımıydı.

Yöntem: 58 yama dosyası + 69 bağlı dosya, **regex yok** — her dosyayı
node'un kendi ayrıştırıcısı okudu (`§11`: *veri zaten bir dilde yazılıysa
o dilin yorumlayıcısını çağır*). Bağlı evren 2663 kayıt / 2663 benzersiz
ad · **okunamayan 0**.

### Ham sayı — korkutucu görünüyor

```
bos/neden/not TAŞIYAN yama kaydı : 134
  ├─ bağlı veride alanı VAR       :   3
  └─ bağlı veride alanı YOK       : 131   (%97,8)
```

### Alan alan ayırınca — **sayı dağılıyor**

```
`bos:`    yamada    1  ·  veride VAR   0  ·  DÜŞEN    1   ← Timbuktu (ok107)
`neden:`  yamada  128  ·  veride VAR   4  ·  DÜŞEN  124
`not:`    yamada   10  ·  veride VAR   0  ·  DÜŞEN   10
```

**ÖLÇTÜĞÜM:** `bos:` alanını taşıyan yama kaydı **tam olarak bir tanedir**
ve o da Timbuktu'dur.
**ÇIKARDIĞIM (ölçüm değil):** yamalardaki `neden:`/`not:` alanlarının
büyük çoğunluğu bir **veri alanı değil, yama yazarının gerekçesi** —
yani commit mesajı cinsinden. Destekleyen ölçüm: bağlı evrende **229 kayıt
zaten `bos:` taşıyor** ve `denetle.py` *"Boşluğun cinsi ✓ cinsi yazılmamış:
0"* diyor ⇒ beyan mekanizması **çalışıyor**; Timbuktu, beyanı **taşıyamayan
bir yamadan** geldiği için tek başına kaldı.

⚠️ **ÖLÇMEDİM:** 124 `neden:` kaydının her birinin veriye inmesi *amaçlanmış
mıydı*. 124 kaydı tek tek OKUMADIM. O yüzden *"124'ü de zararsız"* DEMİYORUM
— *"ölçmedim"* diyorum.

⇒ **`1b` için hüküm: SINIF DEĞİL, TEK KAYIT.** Timbuktu'ya `bos:`/`neden:`
elle konursa satır kapanır ve arkasından ikinci bir kayıt gelmez.

---

## ④ §1.5 TABLOSU — fark satır satır (ÇIKARILDI, YAZILMADI)

`py arac/durum_tablosu.py` (⚠️ `--yaz` **kullanılmadı**; kök `*.md`
koordinatörün dosyası).

| satır | `CLAUDE.md §1.5` | ÜRETİLEN (bugün) | fark |
|---|---|---|---|
| Yerleşim | 2624 nokta · 63 dosya | **2663 · 69** | +39 nokta · +6 dosya |
| Kronoloji | 1279 · 1227 · 1182 · 28 | **1289 · 1237 · 1194 · 28** | +10 · +10 · +12 · 0 |
| Değişmez 1 | ✓ 2624 · 219 sahipsiz | ✓ **2663** · 219 | taban +39, **sahipsiz AYNI** |
| Değişmez 1b | ✓ 0 (beklenen 0) | ✗ **1** | 🔴 **YEŞİL → KIRMIZI** |
| Değişmez 2 | ✓ 528 · 0 açık | ✓ **534** · 0 | +6 kırılma |
| Değişmez 2s | ✓ 977 · 70 açık · 176 kapsam dışı | ✓ **994 · 75 · 173** | +17 · +5 · −3 |
| Değişmez 2i | ✓ 24 · 3 açık (tavan 3) | ✗ **26 · 4** (tavan 3) | 🔴 **YEŞİL → KIRMIZI**, tavan aşıldı |
| Değişmez 2t | ✓ 19 (tavan 42) | ✓ **18** | −1 (**iyileşme**) |
| Konum | 0 | 0 | aynı |
| Devletler dizini | 436 künye · 401 renk | **438 · 403** | +2 · +2 |
| Dizinsiz harita kimliği | ✓ 0/0 · kapsam 63 dosya | ✓ 0/0 · kapsam **69** | sayı aynı, **kapsam +6** |
| Kasıtlı boşluk kimliği | 🟡 1 kimlik / 1 pencere | 🟡 1 / **2** | +1 pencere |
| Renkli-künyesiz kimlik | ✓ 0 | ✓ 0 | aynı |
| Padişah · kartvizit | 41 · 36 · 41 | 41 · 36 · 41 | aynı |
| Harita penceresi | `box(-180,-60,180,85)` | aynı | aynı |
| Yayın | r4391 · `eee4ad1` | **r4776 · `c42034f`** | +385 sürüm |

**16 satırın 11'i değişmiş, 5'i aynı. İkisi yeşilden kırmızıya döndü.**

### 🔴 VE TABLONUN ASIL KUSURU BAYATLIK DEĞİL — **EKSİKLİK**

`CLAUDE.md §1.5` kendi hakkında şunu iddia ediyor:

> *"Değişmez satırlarını uydurmaz, **`denetle.py`ye sorar.** Yani tablo ile
> denetim **asla ayrışamaz**."*

**Bu iddia yarım doğrudur ve yarısı tehlikelidir.** Tablonun **gösterdiği**
satırlar gerçekten ayrışamaz. Ama tabloda **satırı olmayan** denetimler var
ve `denetle.py` bugün onların ikisinde **kırmızı** veriyor:

```
denetle.py bugün KIRMIZI     §1.5'te satırı VAR MI?
  1b  beyansız boşluk 1        ✓ var  → görünür
  2i  26/4 (tavan 3)           ✓ var  → görünür
  4   12 hayalet (bekl. 8)     ✗ YOK  → GÖRÜNMEZ
  4c  286 (bekl. 280)          ✗ YOK  → GÖRÜNMEZ
  Ek  mükerrer madde 2 çift    ✗ YOK  → GÖRÜNMEZ
```

Satırı hiç olmayanlar: `3` · `3z` · `4` · `4c` · `4d` · `4s` · `5` · `5b` ·
`5c` · `7` · dönem sağlığı · mükerrer madde · savaş senkronu.

⇒ **§1.5'ten başlayan bir oturum zemini "2 kırmızı" sanır; gerçek 5.**
Ve bu **koşturmakla düzelmez** — satır yok. Tablonun kendi uyarısı
(*"bir oturum tabloya güvenmeden önce bu komutu koştursun"*) bu kusuru
**kapatmıyor**: koşu da aynı eksik satır kümesini basıyor.
📌 Sessizlik bir ayrışma değildir — ama **aynı zararı üretir.**

### Ek gözlem — tablo koşusunun bastığı üç şema uyarısı

```
`baskent`     1 kayıt · yerlesimler_amerika2.js (Comanchería)
              🔴 M-2097'de koordinatör bunu REDDETMİŞTİ ("değeri bir
                 sözlük değil bir cümle") — kayıt HÂLÂ düzeltilmemiş
`ikiz`        4 kayıt · yerlesimler.js (Budin · Peşte · Anadolu Hisarı…)
              yeni alan; `e9ba26c IKIZ BEYANI` commit'inden — BILINEN_ALANLAR'a
              kaydı henüz yapılmamış (arac/*.py, koşu bitmeden olmaz)
`s.kesinlik`  2 kayıt · yerlesimler.js:Vidin · ok106:Kızıkermen
```
⚠️ Bunların hiçbiri benim kalemim değil; **bilgi olarak** yazıyorum.

---

## ⑤ ÖLÇEMEDİKLERİM — ayrı kova, "temiz" DEĞİL

```
ÖLÇÜLEMEDİ  Varşova üç tarihinin kaynak doğrulaması (TDV/akademik)
ÖLÇÜLEMEDİ  4c'nin 280 → 286 artışındaki altı kayıt        → OK127'de
ÖLÇÜLEMEDİ  2i'nin dört açığının kökeni                     → OK122'de
ÖLÇÜLEMEDİ  Timbuktu'nun 1700 sonrası ikinci boşluğu (arma/Tevârik);
            OK107 onu da "künye yok" diye bırakmış, ben SINAMADIM
ÖLÇÜLEMEDİ  iki mükerrer maddenin gerçekten ayrı olay olup olmadığı
ÖLÇMEDİM    `1b` boşluğunun git kökeni: `git log -S` 12 MB'lık
            yerlesimler.js üzerinde 2 dakikada bitmedi (zaman aşımı).
            Kökeni git yerine YAMA KAYDINDAN buldum — daha kesin çıktı.
```

---

## ⑥ SİSTEM BULGUSU — bekçinin adres-tuzağı uyarısı YANLIŞ POZİTİF verdi

`arac/tahta_bekci.py` M-2209 için bana `[ADRES-TUZAGI] KIME='OPUS HAZIR
KITA 12' — benim tam anahtarım 'OPUS HAZIR KITA 128'. Mesaj bana ULAŞMADI`
diye bağırdı. **Ölçtüm: mesaj yerine ULAŞTI** — `OPUS HAZIR KITA 12` gerçek
ve canlı bir oturum (`list_sessions`), sevki `DAGITIM-0902-AKSAM.md` bölüm ⑧.

⇒ Uyarı, kendi adı başka bir oturumun adının **öneki** olan her oturumda
öter. Zararı teorik değil: bir işçi o uyarıya güvenip **başkasının
şartnamesini** üstlenebilir.
**Önerim (uygulamıyorum — `arac/` benim dosyam değil ve koşu canlı):**
uyarı basılmadan önce `KIME` değerinin tahtada **kendi başına geçerli bir ad
olup olmadığına** bakılsın; geçerliyse `[ADRES-TUZAGI]` değil `[KOMŞU AD]`
diye bassın.

---

## ⑦ EK TUR — OK109'un devrettiği kalem (M-2231) · **iki öncülü tuttu, biri
çürüdü, ve kendi hipotezim de çürüdü**

OK109 Varşova kaleminde reçeteyi yazdı ve bana üç öncül devretti.
**Üçünü de kendim ölçtüm** (`§7.1 ⑤`: devraldığın sayıyı doğrulamadan
aktarma). Yöntem: 69 bağlı dosya, node'un kendi ayrıştırıcısı.

```
① "lehistan veride 50 DÖNEMDE geçiyor, yalnız 4'ü hayalet"
   ÖLÇÜM: 50 dönem · künye sonrası başlayan 4          ✓ TUTTU
② "PRUSYA kimliği HİÇ YOK"
   ÖLÇÜM: veride 400 benzersiz kimlik · prus/brandenburg 0  ✓ TUTTU
③ "1815-06-09 → 1918-11-11, 103 yıl 5 ay ASIL DELİK, senin kaleminde"
   ÖLÇÜM: 🔴 KISMEN ÇÜRÜDÜ — bu bir KÜNYE deliği, VERİ deliği DEĞİL
```

### ③'ün ölçümü — kutuda hiç sahipsiz yok

Kutu `49-55K / 16,5-24,5D` · **14 nokta**:

```
1790-06-15   lehistan 12 · avusturya 1 · almanya 1
1810-06-15   rusya 5 · lehistan 4 · almanya 3 · avusturya 2
1830-06-15   rusya 9 · almanya 3 · avusturya 2
1870-06-15   rusya 9 · almanya 3 · avusturya 2
1900-06-15   rusya 9 · almanya 3 · avusturya 2
```

**Hiçbir kesitte SAHİPSİZ yok.** Varşova · Lublin · Chełm · Zamość ·
Białystok · Brest-Litovsk · Grodno · Kaunas · Volodymyr `rusya`;
Gdansk · Poznan · Königsberg `almanya`; Krakov · Lvov `avusturya`.

⇒ 1815-1918 aralığında **harita deliği yoktur**. Açık olan soru bir eksiklik
değil bir **adlandırma** sorusu: Kongre Polonyası çarla kişisel birlikteydi,
yani `rusya` yanlış değil — ayrı bir künye **ifade gücü** kazandırır,
**delik kapatmaz**.
📌 `§3.5.1`in iki-uç kuralı: Varşova Dükalığı künyesi **gerçek bir hayaleti**
kapatıyor (4 kayıt, `denetle.py` ötüyor); Kongre Polonyası künyesi
**ötmeyen** bir şeyi güzelleştiriyor. İkisi aynı aciliyette değil.

### 🔴 VE KENDİ HİPOTEZİM ÇÜRÜDÜ — aletim yanlış sayı verdi, yakaladım

Prusya'nın yokluğundan şunu çıkarmıştım: *"Poznan/Gdansk 1830'da `almanya`
boyanıyor, Alman İmparatorluğu 1871'de kuruldu ⇒ anakronik hayalet."*
Ölçmek için yazdığım alet **95 kayıt** dedi. **Sayı yanlıştı:**

```
ISO tarih DİZGİ karşılaştırması 3 HANELİ YILDA ÇÖKER
   "1281-01-01" < "962-02-02"   →  True     (doğru cevap: False)
```

`almanya` künyesi **`962-02-02`** ile başlıyor; aletim dizgi karşılaştırması
yaptığı için **95 meşru dönemi "künyeden önce" saydı.** Gerçek cevap **0**.

Ve düzeltilmiş ölçüm hipotezimi çürüttü: `almanya` künyesinin adı
**"Kutsal Roma / Almanya"**, aralığı **962-02-02 → 1923-10-29** — yani
kasıtlı bir **şemsiye kimlik**. 1830'da Poznan'ın `almanya` olması anakronizm
değil, **modelleme kararı**; `denetle.py` de onu hayalet saymıyor.

**Bu tuzak veride 18 künyeyi ilgilendiriyor** (3 haneli yıl):
`bizans · venedik · papalik · fransa · sirvansah · yemen-zeydi · almanya ·
dubrovnik · nube · song · goryeo · poni · kanem-bornu · iskocya · bretanya ·
navarra · pagan · sunda-pajajaran`.

### 🟢 `denetle.py` BU TUZAĞA DÜŞMÜYOR — ölçtüm, VARSAYMADIM

Yanlış alarm vermemek için kodu okudum (salt okuma):

```
denetle.py:1563  _gun_farki()  →  datetime.date ile GERÇEK tarih aritmetiği
                                  ⇒ 4 · 4c · 4d sayıları DOĞRU
```

⚠️ **Ama iki KAPIDA dizgi karşılaştırması var** (`:1765` `kt < ATLAS_SONU`,
`:1776` `kf > ATLAS_BASI`). İkisini de ölçtüm — **bugün zararsızlar**:

```
kf > ATLAS_BASI   18 künye için YANLIŞ True veriyor (kapı açık kalıyor),
                  ama asıl testi `_gun_farki` yapıyor ve g4 negatif çıkıyor
                  ⇒ hiçbiri listeye eklenmiyor. Kapı gereksiz, ZARARSIZ.
kt < ATLAS_SONU   bugün hiçbir künyenin `t`si 3 haneli DEĞİL (18'inin de
                  bitişi 4 haneli) ⇒ ZARARSIZ.
```

🔴 **GİZLİ TUZAK — bugün değil, yarın:** 3 haneli **bitiş** yılı olan bir
künye eklenirse `"962-01-01" < "1923-10-29"` **False** döner ⇒ o künye için
`4c` kontrolü **sessizce ATLANIR**. Kusur değil, **kayıt**.
⚠️ Yalnız `4` ailesinin bloğunu okudum; `denetle.py`nin geri kalanında
benzer dizgi karşılaştırması **var mı ölçmedim**.

📌 Ve bu turun asıl dersi bende: *aletim doğru soruyu sordu, yanlış cevap
verdi, ve yanlışlığı ancak **sonucu tuhaf bulup koda bakınca** çıktı.* Sayıyı
raporlasaydım OK127'ye `4` ailesinde **olmayan bir kusur** ihbar edecektim.
