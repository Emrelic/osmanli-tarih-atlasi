# DEVİR BELGESİ — 25 Ağustos 2026, OSMAN GAZİ (koordinatör)

> 🔴 **BU DOSYA BAĞLAM DOLMADAN ÖNCE YAZILDI.** Emre: *"bağlam dolup
> otomatik compact gelmeden bir an önce yapman gerekenleri de bir yerlere
> yaz, kaybetmeyelim hiçbir şeyi."*
> Sıkıştırma sohbeti kısaltır; **bu dosya kalır.** Yeni koordinatör
> `CLAUDE.md`den sonra BUNU okur.

---

## 0.00 ✅ KOŞU BİTTİ VE YAYINLANDI — ama bir GERİLEME ile

```
02:47 → 06:21  ·  3,5 saat  ·  donemler.js 24,5 MB  ·  521 dönem
uret_devirler.py ✓  ·  altı değişmez ✓  ·  commit 8100787 YAYINDA
```

🟢 **A' değişikliği iş gördü:** *"boya anahtarı `harita:`ya düşen dönem:
**131**"* — bu 131 dönem önceden "bilinmeyen devlet kimliği" uyarısı
verip **hiç çizilmiyordu.**

### 🔴 YENİ KOORDİNATÖRÜN **BİRİNCİ** İŞİ — dört renk çakışması

Koşudan **sonra** `renk_olc.py` dört çakışma bildiriyor (koşudan önce 0):
```
ΔE  0,5   litvanya-buyuk-dukalik ↔ moskova      🔴 CİDDİ — komşular, neredeyse aynı renk
ΔE  3,8   gilan-kiya             ↔ muzafferi
ΔE  8,6   irlanda-serbest-devlet ↔ ispanya
ΔE 10,3   lur-i-kucek            ↔ timurlu
```

📌 Sebep `§9`da yazılı: **"palet verinin fonksiyonudur — renk değişmese
bile denetim değişir."** Komşuluk **veriden** gelir; hayalet dönem yaması
gövdeleri uzattı ve daha önce **değmeyen** çiftler değdi.
`git diff arac/renkler.py` bu dördü için **boş** — hiçbir renge
dokunulmadı.

⚠️ **Yayınlandı ve bu bir TERCİHTİ:**
```
ESKİ harita  129 hayalet dönem · Aydınoğulları 139 gün kaymış ·
             Tebriz kamerası 700 km yanlış · 23 menzil kasabası YOK
             · 0 renk çakışması
YENİ harita  8 hayalet dönem · hepsi düzeltilmiş · 4 renk çakışması
```
Bir görsel kusura karşı onlarca düzeltme. **Ama Emre'nin onaylamadığı
bir tercih** — o yüzden saklanmadı, ilk iş olarak önüne kondu.

🔴 **Ve düzeltmek YENİ BİR KOŞU gerektiriyor:** renkler
`data/devletler_harita.js`e **gömülü** (ölçüldü). `renkler.py`de rengi
değiştirmek tek başına yayını değiştirmez.

---

## 0.0 🔴 BEKÇİ — bu tur çalıştı, bir sonrakinde yeniden kurulmalı

**Koşu 25 Ağustos 02:47'de başladı ve `nohup` ile AYRIK çalışıyor —
devirden etkilenmez.** Ama **9 beep bekçisi** önceki oturumun arka plan
göreviydi; o oturum kapanınca **ölmüş olabilir.**

⇒ Koşu sürüyor ama **bitişini haber verecek kimse kalmayabilir.**

```
TETİK      data/donemler.js'in DEĞİŞME DAMGASI  (motor onu SONDA yazar)
BİTİNCE    9 beep · 880 Hz · 250 ms · 120 ms ara
TIKANIRSA  6 saat sonra ÜÇ KALIN ALÇAK beep (220 Hz)
```

⚠️ **Tahmine, geçen süreye ya da bir oturumun "bitiyorum" demesine
BAĞLAMA.** `CLAUDE.md §10`: *"bitti sanıp erken haber vermek, hiç haber
vermemekten kötüdür."*
📌 Dosya yazılıyor olabilir — iki tur üst üste aynı boyutu görene kadar
bekle, yoksa yarım yazılmış bir dosyaya "bitti" denir.

**Bekçi betiği hazır:** önceki oturumun scratchpad'inde `bekci.py` vardı;
mantığı yukarıdaki üç satır. Yeniden yazmak beş dakika.

---

## 0. HEMEN YAPILACAK — sıra bağlayıcı

```
① enklav BEYANLARI uygulanır        36 kayıt · `enklav:true` · SINIR OYNATMAZ
② hayalet dönem yaması uygulanır    129 + 118 kayıt
③ denetle.py + renk_olc.py koşar    ikisi de TEMİZ olmalı
④ surum_damgala.py                  yayın damgası
⑤ py arac/uret_petek.py             ~4,5 SAAT · girdi dosyaları KİLİTLİ
⑥ py arac/uret_devirler.py          koşudan SONRA
⑦ denetle_yayin.py + push           yayın kapısı
⑧ 9 beep                            Emre'yi çağır
```

⚠️ **④'ten ⑥'ya kadar hiçbir oturum `data/` ve `arac/` altına YAZMAZ.**
Motor girdiyi en başta okur; koşunun 8. dakikasındaki bir düzenleme
çıktıya HİÇ girmez ama denetim temiz görünür. Bu beş kez yaşandı.
⇒ Koşuyu başlatan oturum tahtaya **"girdi kilitli"** yazar, bitince
**"dosya senin"** der.

---

## 1. BU GECE İNENLER (hepsi commit'li, yayında)

| iş | commit | not |
|---|---|---|
| Aydınoğulları kırılması hizalandı | 9983823 | 16 uç · 1421-08-15 → 1422-01-01 |
| Dubrovnik 1458 → 1459-03-07 | 8404688 | üç uç birden; denetim aradaki adımda öttü |
| İki antlaşma tarihi (Vasvár · Yaş) | 1fb5012 | TDV gövdesi okunarak |
| Tebriz `yer_kon` kaldırıldı | be8ba85 | kamera 700 km batıya gidiyordu |
| Dördüncü sessiz dal (zaman akışı) | be8ba85 | `olayaGit` hiç çağrılmıyordu |
| Merak butonu `soru` basıyor | 0775e1f | `kisa` cevabı ele veriyordu |
| Antlaşma hükümleri butonu | e2c4de5 | 39/41 · SIFIR yeni veri |
| `ekKartHtml` son çare dalı | e2c4de5 | bilinmeyen tür artık görünmez olamaz |
| Sunucu çok iplikli | f80a182 | 1 script → 133 script |
| Su rengi + su nöbetçisi | 785e84e | `#a8c8dc` → `#bcd6e6` · ΔE 18 eşik |
| Sağ tık → kopyala | 9d34a00 | kronoloji + panel |
| Konu etiketleri (3 tur) | d718403 · 85bf2ad · 11a2f34 | Sınıflandırılmamış 4890 → 20 |
| OWTRAD koridor ağı | 4c20fc3 · ff56463 | 154 düğüm · 174 kenar |
| **23 menzil kasabası** | ff56463 | **dokuz gün görünmezdi** |
| Dört renk + `renk_olc` onarımı | 30c9f95 | BOYALAR 392 → 396 |

---

## 2. YARIM KALANLAR — sahibi BEN (koordinatör)

### 🔴 ① ENKLAV BEYANLARI — koşudan ÖNCE
`data/yer_yama_enklav.js` → `window.YER_YAMA_ENKLAV`
- **36 kayıt** `enklav:true` beyanı — **sınır oynatmaz**, sadece
  "bu bilerek ada" der. Koşuya girebilir.
- ⚠️ **377 dönem önerisi bu koşuya SOKULMAYACAK** — onlar sınır
  oynatır ve tek tek kaynak ister.

### 🔴 ② HAYALET DÖNEM YAMASI — koşudan ÖNCE
`data/yer_yama_hayalet.js` (129) · `yer_yama_hayalet2.js` (118)
- Ön şartı **tamamlandı**: dört renk indi (30c9f95).
- ⚠️ Uygulanmadan önce `denetle.py` `Değişmez 4` tavanı kontrol edilmeli.

### 🟡 ③ ÜÇ PAKETİN `CEVAP.json`u — YAZILMADI
`parti-emrelic-0032` (16) · `0033` (21) · `0034` (45) = **82 madde**
Kutuda cevabı yok. Bu benim borcum ve bu gece ikinci kez eksik kaldı.

### 🟡 ④ `mimari` → `imar` göçü — 207 kayıt
Gerekçe ölçülü (212 kaydın 207'si ESER, 5'i ÜSLUP — etiketin **adı
içeriğine yanlış**). Küme artık temiz. Ayrı karar.

### 🟡 ⑤ `js/suzgec.js` ekseni + AÇILIŞ PENCERESİ
Emre'nin asıl isteği. Bugün yalnız **veri** indi; süzgeç hâlâ `k:`
ekseninde (BÖLER), `etiket:` eksenine (KESİŞİR) taşınmalı.
Pencere HİÇ yazılmadı. Şemsiye tablosu `data/etiket_yama.js`te hazır.

### 🟡 ⑥ `kriz` dağıtımı — biçim uygun değil
67 kayıt okundu, altı şemsiyeye dağıtıldı, ama yamada `t:` yok
(kova → başlık listesi). Doğru biçim istendi, gelmedi.

---

## 3. İŞÇİ OTURUMLARDA — teslim bekleyen

| oturum | iş | durum |
|---|---|---|
| KITA 82 | OWTRAD 12 aday (9 yeni + 3 şüpheli) | iş üstünde |
| KITA 87 | boşta | son teslimi bitti |
| KITA 84 | antlaşma kartları A kovası 12 | iş üstünde |
| KITA 86 | himaye + Szapolyai | iş üstünde |
| KITA 85 | `kaynak:` tarihi destekliyor mu | belirsiz |
| KITA 80 | doğu geometrisi | belirsiz |
| MOTOR | Ordu/Mardin sivrilik | teslim etti |
| MOTOR EPOK | su/maske · Çimpe · Tuna | belirsiz |

---

## 3.5 🔴 YENİ BULGU — `Değişmez 2`nin bir AÇIĞI var

**Gecenin son teslimi bunu buldu ve hüküm vermeden bıraktı.**

Prizren'in kırılması (1455-06-20) ±30 gün penceresinde **iki madde**
buluyor:
```
−19 gün   "Kosova'nın fethi: Priştine ve Yenipazar'ın alınması"   ← AYNI SEFER
−29 gün   "Birinci St Albans Savaşı — Güller Savaşları başladı"   ← İNGİLTERE
```
Ölçüt **sağlanıyor**. Ama *"±30 içinde 2 madde"* cümlesi, **konusu doğru
olanla alâkasız olanı aynı sayıyor.**

⇒ Yalnız St Albans sayesinde sağlansaydı **kabul edilemezdi** — ve bu,
`§3`ün *"değişim, o güne rastgele denk gelen ALÂKASIZ bir maddenin
altında belirir"* tuzağının ta kendisi. Yani denetim tuzağı **ölçüyor
ama görmüyor.**

**Yeni koordinatöre somut iş:** `arac/denetle.py`de `Değişmez 2`ye
*"eşleşen maddenin KONUSU ilgili mi"* ayağı eklenmeli.

⚠️ **Tavanı sıfır OLMAYACAK.** Konu eşleşmesi bulanık bir ölçüt ve meşru
istisnalar var (aynı gün iki ayrı cephe, bölgesel teslim gecikmesi).
Meşru olanı ihlal sayan bir denetim gürültü üretir ve kimse bakmaz —
`§11`in "eşik ile ekran ayrımı".

---

## 4. EMRE'Yİ BEKLEYEN KARARLAR

1. **Sahra karşılaştırması** — (b) çok yönlü takviye için iki bölgeden
   çizim üreteyim mi? *(a) zaten uygulanmış: 6209 gövde, sıfır delik.*
2. **Niş 1688 mi 1689 mu** — TDV `niş` "24 Eylül 1688" diyor, veri 1689.
   Gün ve ay aynı, yıl bir farklı.
3. **`mimari` → `imar` göçü** (207 kayıt) yapılsın mı?
4. **Bayrak teslimi** — yeni koordinatöre devir. Emre sordu, ben
   "koşu koşarken yapalım" dedim.

---

## 5. KAYITLI BORÇLAR — kusur DEĞİL, gecikme

- **OWTRAD lisansı CC BY-NC**: atlas ticarî hâle gelirse (bağış, reklam,
  kurumsal) bu veri **çıkarılmalı**. Sebep: CC okumasındaki NC şartı.
  ⚠️ İki lisans çelişiyor; **seçim yapılmadı**, dar olana uyuldu.
- **`novgorod` rengi** ΔE 16,6 — su eşiğinin (18) altında. Nöbetçi
  işaretliyor; değiştirmek ΔE makinesi gerektiriyor.
- **`imar` yanlış-negatif ~%12** — sekiz geçişten sonra bilerek durulду.
- **8 yakın-ama-değmeyen renk çifti** — eskiden beri.
- **774 renk çifti "ölçülemedi"** — *"ölçülemedi ≠ temiz"*.
- **179 nokta pencere dışında** — ihlal değil, pencere açılınca canlanır.

---

## 6. BU GECE ÖĞRENİLENLER — `OGRENILENLER.md`ye işlenecek

1. **"Bir tarama, zaten bilinenleri kapsamıyorsa üst sınır değildir."**
   (KITA 87) — bir tarama 19 etiketli kaydın 11'ini kaçırıyordu.
2. **"Bir eleme kovası kendi içinde yeniden taranmalı"** — "darbe değil"
   demek "hiçbir şey değil" demek değil. Üç turda 12+5+2 gerçek kayıt.
3. **"Bir kırılmaya madde YAZMAK, onu o maddeye BAĞLAMAZ — bağlayan
   TARİHTİR."** (KITA 81) — madde 139 gün öteye yazılmış, `Değişmez 2`
   susmuş, ekran değişmemiş.
4. **"Bir dosyayı bağlamak, okunacağını garanti etmez."** — 23 menzil
   kasabasında görünmezliğin İKİ katmanı vardı.
5. **"Bir tekrarı kaldırmak, onu koruyan denetimi de kaldırmak
   değildir."** — `SU_RENGI` sabiti `renk_olc`un çapraz denetimini
   anlamsızlaştırdı; denetim kaldırılmadı, **yeni yapıya çevrildi**.
6. **"Yazdığın yorum da bir iddiadır ve ölçülmeden yazılmaz."** —
   koordinatör az kalsın "artık görünüyor" diye yanlış iddia yazıyordu.
7. **Denetimin hiçbir şey bulmaması "temiz" demek değildir** — yanlış
   evrende koşuyor olabilir. Üç süzgecim sıfır eledi çünkü üçü de
   yanlış havuza soruyordu.
8. **Hata sahipliği**: bir hatayı üstlenmek, onu **doğru yere koymaktan**
   kolaydır — fazla cömert bir üstlenme zinciri kaybettirir.

---

## 7. KOORDİNATÖRÜN KENDİ HATA DESENİ — devir gerekçesi

```
satır bazlı ayrıştırıcı yazmak        3 kez  (aynı tuzak, kendi dersini unutarak)
dar evrende ölçüp "temiz" demek       3 kez  (ANA küme ↔ bütün külliyat)
teslim edilen raporu gözden kaçırmak  2 kez  (Emre sorunca görüldü)
yarım kalan işe dönmeyi unutmak       2 kez  (Emre iki kez hatırlattı)
işçi oturumların çürüttüğü sayı/hüküm 8+ kez
```

📌 Hiçbiri bilgi eksikliği değil — **hepsi bu oturumda zaten öğrenilmiş
şeylerdi.** Bu, taşınan bağlamın seyreldiğinin en dürüst göstergesi.
