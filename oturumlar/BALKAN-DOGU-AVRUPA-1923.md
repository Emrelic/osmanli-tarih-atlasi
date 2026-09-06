# BALKAN-DOĞU AVRUPA — 1923 SINIR DENETİMİ

```
AD        BALKAN-DOĞU AVRUPA
MODEL     Opus
DİZİN     C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
ŞARTNAME  bu dosya
ClaudEmre HAYIR — İŞÇİ oturumsun, koordinatör 1.MURAT HÜDAVENDİGAR
```

> Açılış sıran: **① `CLAUDE.md` baştan sona · ②
> `oturumlar/YONTEM-1923-SINIR.md` baştan sona · ③ bu dosya.**

---

## ① İŞ
`1923-10-28` kesitinde **Balkanlar (389) + Doğu Avrupa (206) = 595
yerleşimin** sahiplik kimliklerini kaynağa karşı denetle; kusurları
`denetim/` altına **yama taslağı** yaz. **Veri YAZMA** (koşu sürüyor).

## ② SENİN DOSYALARIN (`§7`)
```
🟢 denetim/yer_yama_balkan_1923.js · denetim/BALKAN-*.md
   denetim/KRONOLOJI-BALKAN-*.json · oturumlar/BALKAN-DOGU-AVRUPA-1923.md
🔴 data/* · arac/* · js/* · kök *.md · başka oturumun dosyaları
```

## ③ NİÇİN BU BÖLGE ZOR — ve niçin ikinci sırada
1918-1923 arası Avrupa'nın **en çok sınır değişen** bölgesi: Habsburg ve
Rus imparatorlukları dağıldı, on yeni devlet doğdu, Osmanlı Rumeli'den
çekildi. Bölgede **26 kimlik** var ve künye pencerelerinin çoğu 1918'de
başlıyor — yani `4d` (dönem künyeden önce başlıyor) riski yüksek.

## ④ ÖLÇÜLMÜŞ AÇIK KALEMLER — sıralı
```
① HAYALET · rusya      6 nokta · künye t:1917-03-15 · 6,6 yıl FAZLA
   ⇒ 1917'den sonra `rusya` kimliği kullanılamaz. Ardıl:
     `sovyet-rusya` (1917-11-07→) VAR ve kullanılıyor (399 nokta).
     ⚠️ ARADAKİ SEKİZ AY: 1917-03-15 → 11-07 kimin? `rusya-gecici-hukumet`
        künyesi VAR MI — ÖLÇ (tahmin etme, `devletler.js` TARA).
② HAYALET · romanya    2 nokta · künye t:1881-03-26 · 42,6 yıl FAZLA
   ⇒ ardıl `romanya-kralligi` (1881→1923) VAR, veride 28 dönem.
     Muhtemelen basit EŞLEME.
③ HAYALET · karadag    2 nokta · künye t:1918-11-26 · 4,9 yıl FAZLA
   ⇒ Karadağ 1918-11-26'da Sırbistan'a katıldı; ardıl `yugoslavya`
     (1918-12-01→) VAR. ARADAKİ BEŞ GÜN ölçülecek.
④ ATIL KÜNYE · oniki-ada-italyan  (1912-05-04→1923) künye VAR, RENGİ YOK
   🔴 DÜZELTİLDİ: "17 nokta" koordinatörün FAZLA SAYAN kaba kutusuydu.
      BALKAN ölçtü — aday küme `italya`nın **13**'ü, `tbmm-turkiye` DEĞİL.
      Kimlik veride SIFIR dönem: âtıl künyenin tanımı.
⑤ 🔴 ÜÇÜNCÜ HAYALET · `habsburg` — çerçeve DÜZELTİLDİ (BALKAN haklıydı)
   Bu bir "âtıl künye" kalemi DEĞİL: `Viyana` ve `Graz` `s:"avusturya"`
   taşıyor, `avusturya` bir künye `id`si değil **`habsburg`un `harita:`
   ANAHTARI**, ve `habsburg` **1918-11-11'de bitiyor** ⇒ **4,96 yıl
   HAYALET.** Âtıl künye (`avusturya-cumhuriyet`, 1918-11-12→1923, id
   sonunda `i` YOK) kusurun kendisi değil ÇARESİDİR.
   ⇒ Gerçek küme **2** (Viyana · Graz) — ölçüldü. Kaba kutunun saydığı
     Münih·Regensburg·Augsburg·Ulm ALMANYA, Bratislava ÇEKOSLOVAKYA.
   🔴 Rengi YOK ⇒ yazılırsa gövde ÇİZİLMEZ. Renk Oturum 0'da.
   📌 Alet: `py denetim/ARAC-KIMLIK-BOYA-0906.py` — `harita:`
      dolaylamasını çözer. Koordinatör bu kör noktaya AYNI GÜN İKİ KEZ
      düştü; alet tam onun için yazıldı.
⑥ SILISTRE — BİTTİ, devral: `denetim/yer_yama_silistre_0906.js`
   (Güney Dobruca 1913'te Romanya'ya geçti; veri 1923'e kadar Bulgar
    diyordu. Gün `1913-05-30`, TDV `balkan-savasi`.)
   🟡 AÇIK: 1916-1918 Bulgar geri alışı YAZILMADI — TDV `dobruca` susuyor.
      Akademik kaynak MEŞRU (§4). Bulunursa `isg:`, `s:` DEĞİL.
⑦ EKSİK NOKTA · `Burgaz (Burgas)` ve `Dobriç` atlasta HİÇ YOK
   ⇒ Burgaz körfezi noktasız; Dobriç Romanya sınırını ÇİVİLERDİ.
⑧ GERİ KALAN ~585 noktanın bölge bölge kaynak denetimi
```

## ⑤ BÖLGE-ARASI SINIR — üçü senin, protokol `§3.5.1`
```
macaristan-naiplik ↔ avusturya     60 km   (BALKAN | BATI-ORTA AVRUPA)
romanya-kralligi   ↔ cekoslovakya  73 km   (BALKAN | DOĞU AVRUPA)
romanya            ↔ polonya      256 km
```
AVRUPA oturumu açılırsa tahtadan haberdar et (yatay mesaj SERBEST, şartı
TAHTADAN geçmesi).

## ⑥ TABAN — ÖLÇÜT YAZILI (6 Eylül'de düzeltildi)
İlk yazımda bu sayılar **ölçütsüz** duruyordu ve BALKAN haklı olarak
ayrıştığını bildirdi — üstelik `ARAC-1923-TRIYAJ`ın kutularının
**örtüştüğünü** (lat 44-48 / lon 20-30 · 43 nokta ORTAK) ölçerek. Artık:
```
const {bolge, SAHIP} = require('./denetim/ARAC-BOLGE-KUTU-0906.js')
BALKANLAR 389 + DOGU-AVRUPA 206 = 595 · 26 kimlik
```
🟢 **Cascade** ⇒ örtüşme YOK, boşluk YOK (toplam 3630 = sahipli 3630).
⚠️ Batı Anadolu BALKANLAR'a düşer — kutudaki 88 `tbmm-turkiye` bunun
sonucudur, **kusur değil SEÇİM**: 1923'te Trakya-Ege sınırı Balkan
meselesidir.

🔴 **KİMLİK KALEMLERİ CASCADE'E GÖRE BÖLÜNMEZ.** Cascade *survey*'i
yönetir. Bir kimliğin bütün noktaları, onu İLK ölçen oturumda kalır —
yoksa aynı zincir iki oturumda iki farklı günle yazılır.
⇒ `rusya`nın altı noktası (Kafkas beşlisi dâhil) **BALKAN'da.**

⚠️ Sayılar 6 Eylül ölçümü. **İlk işin kendin ölçmek** (`B10`).

## ⑦ HABERLEŞME · DAMGALAR · COMMIT
→ `oturumlar/YONTEM-1923-SINIR.md` §④ ⑥ ⑦. **Cevabını kendi pencerene
yazmak = hiç cevap vermemek.**

---

## İLERLEME NOTU

### 6 Eylül 2026 — birinci parti

**TABAN DOĞRULANDI** (`ARAC-BOLGE-KUTU-0906.js` otoritesiyle):
`BALKANLAR 389 + DOGU-AVRUPA 206 = 595 · 18 benzersiz kimlik`.
⚠️ Şartnamenin *"26 kimlik"*i şişikti (koordinatör düzeltti). Ve ilk
ölçümüm 578 vermişti — `ARAC-1923-TRIYAJ`ın **bağımsız** kutularıyla;
o kutular örtüşüyor ve boşluk bırakıyor, cascade bırakmıyor.

**KUSUR TABLOSU** (bütün küme tarandı, elle verilen liste değil):
```
4c HAYALET 8 nokta-dönem / 4 kimlik · 4d 0 · KÜNYESİZ 0 · RENKSİZ 0
```
📌 Şartnamenin beş kaleminin dışında **altıncı bir 4c/4d kusuru çıkmadı** —
bu bir kapsam kanıtıdır. Ama 4c/4d kusurun tamamı değil: aşağıdaki iki
sınıf hiçbir künyeyi aşmıyor ve hiçbir denetime görünmüyor.

**ŞARTNAMEDE OLMAYAN ÜÇ BULGU:**
1. **Besarabya 7 nokta** — 6'sı `sovyet-rusya` ile künye içinde kalıyor,
   TDV üç gövdede 1918'den itibaren Romanya diyor. Görünen 1, görünmeyen 6.
2. **`OSMANLI` ↔ `tbmm-turkiye` çatışması** — 12 nokta hâlâ `d:` OSMANLI;
   dördü (Antep·Kilis·Mersin·Payas) `1921-10-20`'yi `d:`de taşırken sekiz
   komşusu aynı günü `s: tbmm-turkiye`de taşıyor. Payas ile Dörtyol **9 km**.
3. **1917 Rus ihtilâlleri çekirdekte YOK** — 446+896 dönem sınırı, olayı
   anlatılmadan kapanıyor.

**REDDEDİLEN KALEM:** `oniki-ada-italyan` — atlas vakayı `isg:` ile zaten
doğru çözmüş (13/13 ada, gün gün, kronolojisiyle). Renk kalemi kapandı.

**DÜZELTİLEN ŞARTNAME MADDELERİ:** ④ (17 → aday küme `italya`nın 13'ü,
sonra tamamen reddedildi) · ⑤ (`avusturya` bir künye id'si değil,
`habsburg`un `harita:` anahtarı ⇒ âtıl künye değil ÜÇÜNCÜ HAYALET).

**TESLİM:** `denetim/BALKAN-BULGU-0906.md` · `yer_yama_balkan_1923.js` (11)
· `yer_yama_kafkas_rusya.js` (4) · `yer_yama_balkan_avusturya_BEKLIYOR.js`
(1, renk bekliyor) · `KRONOLOJI-BALKAN-0906.json` (4 madde, iki kovada) ·
dört ölçüm aleti.

**AÇIK:** Sohum (komşu kanıtı bölünüyor) · 1917 maddelerinin kaynağı
(okumadım) · ~337 noktanın nokta nokta kaynak denetimi (şartname ⑧).
