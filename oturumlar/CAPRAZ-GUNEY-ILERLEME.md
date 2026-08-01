# ÇAPRAZ GÜNEY — ilerleme ve ölçüm kayıtları

> Bulgular `CAPRAZ-GUNEY.md`'de. Burada **nasıl ölçüldüğü** var — `ORGANIZASYON
> §14` ve `CAPRAZ-GOREV §4 ②`: *"'Bulamadım' bir ölçüm değildir, hangi araçla
> arandığı yazılmadıkça."*

---

## §1 · KAPSAM — açılış ve düzeltilen çelişki

**Oturum 1 Ağustos ~16:15'te açıldı.** Görev tanımı `oturumlar/` altında
**yoktu**; koordinasyon oturumunun kaydından okundu (10:25, kullanıcının
*"ÇAPRAZ GÜNEY açmak mantıklı olabilir mi"* sorusuna verilen cevap).

🔴 **Ve `CAPRAZ-GOREV §1` ile çelişiyordu.** Bildirildi, koordinatör kabul etti:

```
10:25  beş oturumluk plan onaylandı — GÜNEY = Kuzey Afrika + Fransa (1798-1923)
15:56  §1 plan A → plan B çevrildi; tablo "ŞU AN kim çalışıyor" diye dolduruldu
       ⇒ henüz açılmamış GÜNEY sessizce DÜŞTÜ, kapsamı iki oturuma dağıtıldı
16:15  GÜNEY açıldı, belgede kendini bulamadı, çelişkiyi bildirdi
```
> Koordinatörün cevabı: *"Belgeyi düzeltirken yeni bir bayatlık ürettim. `§1`'in
> kendi uyarısının altıncı vakası ve **bu sefer yazan bendim.**"*

### Karara bağlanan sınırlar
```
ÇAPRAZ GÜNEY  = KUZEY AFRİKA, coğrafî kesit, BÜTÜN kimlikleriyle
                Mağrib'den Trablusgarp'a
DIŞARIDA      Mısır · Sudan · Kızıldeniz · Hicaz   → ARAŞTIRMA ARAP AFRİKA
              Suriye · Lübnan (A-4)                → ÇAPRAZ AKDENİZ
              Dubrovnik                            → ÇAPRAZ BATI
              Malta                                → ölçülmedi; istenirse alınır
              `fransa` DEVLET kaydının kendisi     → ÇAPRAZ DOĞU
DEVRALINAN    B-4 Fizan (ÇAPRAZ AKDENİZ'den)
```
📌 **Ve "Fransa 1798-1923"ü almayı ben reddettim, koordinatör kabul etti.**
Gerekçe ölçümdü: `f: ≥ 1798` kesitinde Şam · Halep · Beyrut · Dubrovnik · Malta
var. ⇒ Yeni kural: **bir devlet TARİHLE değil COĞRAFYAYLA bölünür.**

---

## §2 · ÖLÇÜM TABANI VE ARAÇ — `ORGANIZASYON §14`

```
ölçüm commit'i     63ff8b9        (1 Ağustos ~16:15)
girdi              arac/girdi.py yukle()   → 976 nokta
                     data/yerlesimler.js         792
                     data/yerlesimler_afrika.js  184
dizin              data/devletler.js       → 242 kayıt (node ile JSON'a döküldü)
kesit kutusu       lon −18…26 · lat 18…38  → 151 nokta
```
🟢 **Ölçümden sonra HEAD ilerledi** (`cb8f5a0`, 16:32) — **ama `data/` altında
tek satır değişmedi** (`git diff --stat 63ff8b9 cb8f5a0 -- data/` boş).
⇒ Rakamlar bugünkü ağaç için de geçerli. *(`OGRENILENLER §79`: iddia hangi ağaca
aitse orada sınanır — burada iki ağaç aynı.)*

### Tarih kıyaslaması — AKDENİZ'in v1 hatasına düşmemek için
AKDENİZ bugün kendi aracında buldu: `"1281-01-01" < "697-01-01"` → `True`
(`'1' < '6'`), yani **1000'den önce kurulan her devlet "erken" görünüyordu.**
Bu tarama **baştan `datetime.date` kullanıyor**; yıl 4 haneye tamamlanıyor, ay/gün
eksikse 1'e tamamlanıyor. Kontrol: `fransa` dizin `f="987-01-01"` kaydı ERKEN
sınıfında **çıkmadı** — string kıyaslasaydı 64 noktada birden çıkardı.

### 🔴 Tarama İKİ YÖNLÜ kuruldu — ve bu yarısını kurtardı
`CAPRAZ-GOREV §4 ⑥` gereği hem *"kimliğin ölümünden sonra sürüyor mu"* hem
*"doğumundan önce başlıyor mu"* soruldu. Sonuç:
```
GEÇ    sınıfı  →  fransa · hafsi · venedik · memluk
ERKEN  sınıfı  →  fas · ispanya · napoli · italya
kesişim: YOK
```
⇒ **Tek yönlü bir tarama kesitimdeki kimliklerin yarısını hiç görmezdi.** Ve
`OGRENILENLER §80.1`'in tek sorgusu tam olarak o tek yöndür (yalnız `t:` ucu) —
ayrıntı `CAPRAZ-GUNEY.md G-2`.

### Kimlik eşlemesi — `harita:` alanı esas, `id:` değil
AKDENİZ'in A-3 dersi (*"bir pencere fazlalığı ölçülürken o kimliğin KENDİ
penceresinin `t`'si alınır"*) uygulandı: `s.d` değeri önce `devletler.js`'in
`harita:` alanıyla, o yoksa `id:` ile eşleştirildi.
🟢 Kontrol: kesitteki **hiçbir** `s:` kimliği eşleşmesiz kalmadı (0 yetim).

---

## §3 · SAYILAR — koordinatörün tablosu ölçümle değişti

| | koordinatör (aktarma) | ÇAPRAZ GÜNEY (ölçüm) |
|---|---|---|
| Kuzey Afrika | 292 nokta | **151 nokta** |
| `ingiltere` | 78 | **5 / 5** |
| `fransa` | 67 | **64 / 64** |
| `italya` | 42 | **28 / 28** |
| `ispanya` | 19 | **7 / 6** |
| `hafsi` | 53 | **53 / 53** ✓ |
| `zeyyani` | 34 | **34 / 34** ✓ |
| `abdulkadir` | 10 | **10 / 10** ✓ |

📌 **Mağrib hanedanları üçünde de tutuyor, sömürge katmanının dördünde de
tutmuyor.** Koordinatörün hükmü: *"Seninki ölçüm, benimki aktarma… sayılar
merge edilmemiş dosyaları sayan bir taramadan geliyor."*
⚠️ **Farkın sebebini ben KAYNAKLAMADIM.** Kutum Mısır'ı dışarıda bırakıyor;
`ingiltere 78`'in büyük kısmı Mısır'da olabilir. **"292 yanlış" demiyorum;
"benim kesitimde 151" diyorum.** İkisi aynı cümle değil.

---

## §4 · KAYNAK TURU — sınanan slug'lar

`CLAUDE.md §4` ölü slug tuzağı: her slug `<title>` ile sınandı.
```
cezayir     CANLI   "CEZAYİR - TDV İslâm Ansiklopedisi"       → G-3
meriniler   CANLI   "MERÎNÎLER - TDV İslâm Ansiklopedisi"     → G-2
```
⚠️ **Sınanmayanlar** (bu turda kullanılmadı, sonraki tura): `fas` · `sadiler` ·
`tunus` · `trablusgarp` · `abdulkadir-el-cezairi` · `fizan` (`§4`'te CANLI
kayıtlı, ben ayrıca sınamadım).

📌 `meriniler` maddesinin anlatısı **1471-72'de bitiyor** — Sa'dî geçişini
vermiyor. Dizindeki `1549-01-01` bu maddeden **doğrulanamadı**; `CAPRAZ-GOREV §8`
gereği *"doğrulanamadı"* tam bir hüküm olarak yazıldı, tahmin yazılmadı.

---

## §5 · TESLİM 1 — bulgu özeti

| | konu | büyüklük | hüküm |
|---|---|---|---|
| **G-1** | `fransa` torbası, Kuzey Afrika ucu | **8.051,2 yıl-nokta / 64 nokta** | ÇELİŞİYOR (tanım) |
| **G-2** | Fas 642 yıllık tek pencere, `merini` kullanılmıyor | **1.340,0 yıl-nokta / 5 nokta** | ÇELİŞİYOR |
| **G-3** | Cezayir 1830-1832 Osmanlı tâbi boyası | **23,8 yıl-nokta / 10 nokta** | ÇELİŞİYOR (`§74`) |
| **G-4** | Ahmed Bey beyliği iki farklı `k:` dizgesiyle | 14 nokta | ÇELİŞİYOR (iç tutarlılık) |
| **G-5** | Fizan / `hafsi` — AKDENİZ B-4 devralındı | **13,8 yıl-nokta / 6 nokta** | ÇELİŞİYOR (doğrulandı) |
| **G-6①** | Sevilla / `kastilya` — kesit dışı, AKDENİZ B-3'e | 198,0 yıl-nokta / 1 nokta | kaydedildi |
| **G-6②** | Napoli ufuk kenarı 1281↔1282 | 4,0 yıl-nokta | **ÇELİŞKİ SAYILMADI** |

**Toplam ölçülen:** 8051,2 + 1340,0 + 23,8 + 13,8 + 198,0 = **9.626,8 yıl-nokta**
(G-6② dâhil değil — kusur saymadım). Ama ⚠️ **%84'ü G-1'dir ve G-1 tek bir
dizin kaydının tanımına asılıdır.** Rakamı "dokuz bin yıllık hata" diye okumak
yanlış olur: **bir karar, 64 pencere.**

---

## §6 · KOORDİNATÖRE GİDEN — karar bekleyenler

1. 🔴 **G-3 şema kararı** — Cezayir 1830-1847 hangi eksende? (de facto / de jure /
   `d:`+`isg:` ikilisi). ⚠️ `isg:` şu an **yazılıyor ama çizilmiyor**; C okuması
   seçilirse MOTOR'un düzeltmesi **önce** gelmeli.
2. 🟢 **G-2 kimlik isteği — küçük ve hazır:** `merini` kaydına `harita:"merini"` +
   `renkler.py`'de bir renk. **Yeni kayıt gerekmiyor**, 5 noktada tek kırılma.
   ⚠️ Kırılma günü (`1549-01-01`) kaynaklanmadı — `§76`, önce kaynak turu.
3. 🟢 **G-6① AKDENİZ'e düzeltme:** B-3 *"dizinde Aragon kaydı yok"* diyor —
   **var** (`aragon` 1164→1479, `kastilya` 1230→1479), ikisinin de `harita:`ı boş.
   Yani **kimlik isteği değil, `harita:` + renk isteği.**
4. 🟡 **G-4** — iki `k:` dizgesinden hangisi kalacak? Seçim, kaynak sorusu değil.
5. 📌 **Ders önerisi:** dördüncü değişmez `§80.1`'in tek sorgusunu **iki uçlu**
   kursun; bugünkü hâli `f:` ucundaki 1.538 yıl-noktayı (G-2+G-6①) görmüyor.

---

## §7 · SIRADAKİ

1. Cezayir batı kesimi gün gün — TDV `cezayir`'in 1839-1847 tarihleri
2. Tunus 1705 · Trablusgarp 1711/1835 ocaklık pencerelerinin kaynaklanması
3. Fizan'ın kendi hanedanı (Evlâd-ı Muhammed) — G-5'in ikinci katmanı
4. Trablusgarp 1911-10-05 ↔ Murzuk `italya` 1912-10-18 — **379 gün**, `§74` adayı
