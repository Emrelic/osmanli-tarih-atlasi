# BULGU — SORGUSUZ ENKLAV

**OPUS HAZIR KITA 87** · 25 Ağustos 2026 · OSMANGAZİ sevkiyle
Teslim: bu rapor + `data/yer_yama_enklav.js` → `window.YER_YAMA_ENKLAV`
Veriye ve motora **yazılmadı**. `arac/denetle.py` koordinatörde — §6'daki
`Değişmez 6` **tarif edildi, yazılmadı**.

---

## 0. İKİ SATIR

> **① NE ÖLÇTÜM.** 8369 kırılma günü tarandı. Aynı sahibin yerleşimleri
> ≤150 km kenarlarla bağlanıp (flood fill) el değişen kaydın bileşeni
> ölçüldü: bileşen ≤5 ise **ada**. Üç eleme sonrası **2403 sorgusuz enklav
> adayı** kaldı; veride `enklav:` beyanı taşıyan dönem sayısı **22**,
> adaylarla kesişeni **17**.
>
> **② ONDAN NE ÇIKARDIM.** Mekanizma var, **soru sorulmuyor** — ve asıl
> bulgu sayı değil **kovaların ayrışması**: 2403'ün **1847'si** enklav
> kusuru bile değil, **nokta seyrekliği** (ada · çöl · step). Gerçek borç
> **556 kayıt**, ve bunun **39'u** hakiki denizaşırı enklav.

---

## 1. ÖLÇÜM — ve yöntemin iki kez düzeltilmesi

⚠️ **Bu bir YAKLAŞIMDIR, Voronoi değil.** Geometri koşturulmadı (talimat).

| geçiş | ölçüt | sonuç | niçin yetmedi |
|---|---|---|---|
| ① | 3 en yakın komşu başka devlette | 670 aday | **küme enklavını göremiyor** |
| ② | bağlı bileşen ≤5 (flood fill) | 2875 ada | küçük devletleri ada sanıyor |
| ③ | + ana gövde var + devlet ≥3× ada | 2467 | geçici cepheyi ayırmıyor |
| ④ | + 1 yıl sonra hâlâ kopuk | **2403** | — |

🔴 **① iki kez çürüdü ve ikisini de koordinatörün vakaları çürüttü:**

**(a) Küme enklavı.** Niş 1689'da aday çıkmadı, çünkü 58,9 km'deki
**Şehirköy (Pirot) de Avusturya'daydı** — yani üç komşudan biri aynı sahipte.
Niş yalnız değil: **Niş + Vidin + Şehirköy üç kişilik bir ada**.
⇒ *Tek nokta testi küme enklavını göremez.* Ölçüt bağlı bileşene çevrildi.

**(b) Kısa ömürlü enklav.** İlk kalıcılık testi *"1 yıl sonra hâlâ kopuk mu"*
diye sordu ve **Niş'i de Tebriz'i de eledi** — çünkü ikisinin de dönemi bir
yıldan kısa. Ama **on bir ay süren bir enklav da enklavdır**: "izolasyon
bitti" ile "kayıt bitti" aynı şey değil. Sınav günü
`min(gün+365, dönem_sonu−1)` yapıldı; ikisi de geri geldi.

### Eleme dökümü
```
küme testi adası           2875
  − devletin tamamı o ada   224   (Kandy · Loango — küçük devlet, enklav değil)
  − devlet ada'nın 3×'inden küçük 184
  − geçici cephe             64   (çevre 1 yıl içinde fethedildi)
  ────────────────────────────
  SORGUSUZ ENKLAV ADAYI    2403   · beyanlı 17 · tek nokta 1314 · küme 1089
```

---

## 2. DÖRT KOVA — dördüncüsü ölçümle doğdu

Şartname üç kova istemişti. Ölçüm **dördüncüsünü zorunlu kıldı**: sözde
"veri eksiği" kovasının **%77'sinin 150 km içinde en çok iki komşusu var** —
orada veri eksik değil, **yerleşim seyrek**.

| kova | n | beyanlı | ne demek | çare |
|---|---:|---:|---|---|
| **coğrafi tecrit** | **1847** | 0 | ada · çöl · step; Jeju · Uiju · Bikaner · Buhara | enklav kusuru **değil**, `CLAUDE.md §2` **yoğunluk** meselesi |
| **veri eksiği** | **377** | 10 | yoğun bölgede kopuk, ana gövde ≤300 km | aradaki kayıtlara **dönem yazmak** |
| **bilinmiyor** | **140** | 4 | 300-800 km, kaynak susuyor | **kaydet, uydurma** |
| **hakiki enklav** | **39** | 3 | >800 km, denizaşırı üs/sefer | **`enklav:true`** beyanı |

🔴 **Hakiki enklavların 39'unun 36'sı beyansız** — ve listesi kendi kendini
doğruluyor: **Tranquebar** (7303 km) · **Cebelitarık** · **Malaka** (Portekiz
1511, Hollanda 1641) · **Bombay** · **Madras** · **Şârika-Ras el-Hayme**.
Bunlar tartışmasız enklavdır; `enklav:` alanı tam bu iş için var ve
kullanılmamış.

⚠️ **`yil` alanı KAYDIN süresidir, enklavın süresi DEĞİL.** Amasra 1460'ta
Candar toprakları arasında ada; Candaroğulları 1461'de ilhak edilince
izolasyon biter, ama kaydın kendisi 1923'e kadar sürer. **Enklav süresini
ayrıca ölçmedim.**

---

## 3. KOORDİNATÖRÜN İKİ VAKASI — biri doğrulandı, biri ÇÜRÜDÜ

### 🔴 Semendire 1738 — ENKLAV DEĞİL, ölçümle

```
Semendire 1738-08-01 OSMANLI · en yakın altı komşusunun ALTISI da AVUSTURYA
(Belgrad 41 · Kragujevac 72 · Yagodina 81 · Çaçak 98 · Böğürdelen 98 · Varadin 106)
AMA Osmanlı bağlı bileşeni: 44 YERLEŞİM
(Alacahisar · Köstendil · Priştine · Üsküp … zinciri güneye açık)
```
⇒ Semendire bir **ada değil, ÇIKINTI**. Üç komşu testi onu enklav sanıyordu;
bileşen testi çürüttü. **Haritada yanlış görünüyorsa sebebi başka** — ince bir
koridorun Voronoi'de kopuk çizilmesi olabilir, ki o **motor** sorusudur.

### 🟢 Niş + Vidin 1689 — DOĞRULANDI, ve hatırınız da doğruydu

```
Niş · Vidin · Şehirköy (Pirot)  →  avusturya
üç yerleşimlik ADA · ana gövdeye 168 km (Semendire)
```
Kopuk bir ileri harekât olduğu **ölçümle** görünüyor.

⚠️ **VE BİR KAYNAK ÇELİŞKİSİ ÇIKTI — karar sizin (§7.1 ⑥):**
```
veri            Avusturya dönemi 1689-09-24 → 1690-09-09
TDV `nis`       "24 Eylül 1688'de Niş, Ludwig von Baden'in birlikleri
                 tarafından ele geçirildi"          ← BİR YIL ÖNCE
TDV geri alış   "üç hafta süren kuşatmadan sonra … Zilhicce 1101 / Eylül 1690"
                 ⇒ veriyle UYUŞUYOR
```
Yani başlangıç yılında **bir yıllık çelişki** var; bitiş uyuşuyor. Genel
literatürde Niş'in düşüşü 24 Eylül **1689** (Batočina-Niş muharebeleri) diye
geçer. **Veriye dokunmadım**; çelişkiyi kaydediyorum.
📌 TDV `nis` maddesi Piccolomini'nin Üsküp akınından **hiç söz etmiyor** —
yani o hatırınızı **ne doğrulayabildim ne çürütebildim**. Ölçmedim diye yazıyorum.

### Tebriz — Emre'nin şikâyetinin çekirdeği, ve veri DOĞRU çıktı
```
d: 1514-09-06 → 1514-09-15   (9 gün)     ana gövdeye 251 km
d: 1534-07-13 → 1535-06-01   (10,5 ay)   ana gövdeye 226 km
d: 1548-07-27 → 1548-08-15   (19 gün)    ana gövdeye 226 km
d: 1585-09-25 → 1603-10-21 · 1725-08-04 → 1730-08-12
```
⇒ Kayıtlar **kısa ve gerçekçi**; "Tebriz alındı ve 400 yıl orada kaldı" gibi
bir hata **yok**. Ama üçü de **ada**: aradaki Merend · Merâga · Ahar Safevî
kalıyor. Emre'nin sorusu (*"500 km aradaki topraklar alınmadan mı geçildi"*)
**meşru** ve cevabı bu üç kayıt için **"evet, öyle yazılmış"** — sefer
güzergâhındaki şehirlerin dönemleri kayıtta yok.
⇒ `veri-eksigi`/`bilinmiyor` kovasına düşüyorlar; **doğrusu araştırılmalı.**

---

## 4. Ölçmediklerim

- **Top-10'un tamamı kaynaktan araştırılmadı.** TDV'den yalnız `nis` okundu
  (ve bir çelişki çıkardı). Semendire **ölçümle** çürütüldü, kaynak gerekmedi.
  Kalan sekiz kalem **araştırılmadı** — hakiki-enklav kovasındakiler
  (Tranquebar · Cebelitarık · Malaka · Bombay · Madras) genel tarih bilgisiyle
  tartışmasız görünüyor ama **kaynak okumadım**.
- **Enklav SÜRESİ ölçülmedi** (yalnız kaydın süresi).
- **Voronoi çalıştırılmadı**; 150 km bağlantı yarıçapı **seçilmiş bir sayıdır**,
  ölçülmüş değil. Yarıçap 100 km olsa ada sayısı artar, 200 km olsa azalır —
  **duyarlılık analizi yapmadım.**
- **Deniz/kara ayrımı yok.** Bir boğazın iki yakası 150 km içindeyse "bağlı"
  sayıldı; motorun kara maskesi bunu ayırt eder, benim ölçümüm etmez.
- `coğrafi-tecrit` kovasının 1847 kaydı **tek tek okunmadı**; kova bir
  eşikle (≤2 komşu) kuruldu.

---

## 5. `Değişmez 6 — sorgusuz enklav yok` — ŞARTNAME TASLAĞI

**Yazmadım, tarif ediyorum.** `arac/denetle.py` sizde.

### Ne ölçer
Her `d:`/`v:`/`s:` **dönem başlangıcı** için: yerleşimin o günkü sahibiyle
**bağlı bileşeni** (≤`BAG_KM` kenarlar) ≤`ADA_ESIK` mi? Öyleyse **ada**.

### Muafiyetler — dördü de ZORUNLU, yoksa gürültü üretir
```
① enklav:true BEYANI VAR            → muaf (beyan zaten cevaptır)
② devletin TAMAMI o ada             → muaf (küçük devlet, enklav değil)   224
③ devlet, adanın 3 katından küçük   → muaf (aynı sınıfın devamı)          184
④ COĞRAFİ TECRİT: yerleşimin 150 km  → muaf (ada·çöl; §2 yoğunluk işi)   1847
   içinde ≤2 komşusu var
⑤ GEÇİCİ CEPHE: 1 yıl içinde (ya da  → muaf (sefer cephesi, enklav değil)  64
   dönem bitmeden) izolasyon kapanıyor
```
⚠️ **④ olmadan denetim 1847 sahte alarm üretir** ve `§11`in *"bir ekranı
bitirilecek iş sanmak"* tuzağına düşer.

### Tavan
**SIFIR KOYMAYIN.** Ölçülen borç: `veri-eksigi 377 + bilinmiyor 140 +
hakiki-enklav 39 = 556`, bunun 17'si zaten beyanlı.
```
BEKLENEN_ENKLAV = 556      ← bugünkü ölçüm, ONAY DEĞİL
```
Borç ödendikçe iner: `hakiki-enklav`ın 36'sına `enklav:true` yazılırsa
**556 → 520**; `veri-eksigi`nin her kapanan kaydı bir puan düşürür.
📌 `BEKLENEN_SAHIPSIZ` · `BEKLENEN_HAYALET` ile aynı desen.

### Çıktı biçimi — üç kova AYRI raporlanmalı
Tek sayı yanıltır: `hakiki-enklav` **ödenecek borç** (beyan yaz),
`veri-eksigi` **araştırma işi**, `bilinmiyor` **kayıt**. Aynı satırda
gösterilirse üçü de aynı çareyi görür — `§11`in *"iki ayrı kusur tek satırda
raporlanırsa aynı çare uygulanır"* dersi.

### İki yönde de sınanmalı (`§11 C13`)
```
GEÇME    beyanlı bir kayıt (Cebelitarık) TEMİZ mi
ATEŞLEME beyansız bir ada (Tranquebar) ÖTÜYOR mu
         ⇒ ikisi de bugünkü veride VAR, zorlama gerekmiyor
```

### Ve bir uyarı — bu denetim VERİ değil YÖNTEM ölçer
Bir ada, veri yanlış olduğu için de doğru olduğu için de doğar. Denetim
*"burada bir soru sorulmadı"* der, *"burası yanlış"* **demez**. Çıktı metni
bunu söylemeli; yoksa bir sonraki oturum 556 kaydı "hata" sanıp düzeltmeye
kalkar ve **hakiki enklavları siler**.
