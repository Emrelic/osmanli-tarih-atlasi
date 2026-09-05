# MOTOR — ÜÇ KALEM · tavan · enklav/koridor · çöl eşiği

```
AD        MOTOR ÜÇ KALEM
MODEL     Opus
DİZİN     C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
ŞARTNAME  bu dosya
ClaudEmre koordinatör ORHANGAZİ · tahta: py arac/tahta.py
```

## 0. 🔴 ÜÇÜ DE `arac/uret_petek.py`E YAZILIR — ve TEK KOŞUYA GİRER

Emre'nin kararı: *"Üçünü tek şartnamede yaz, koşu bitince uygula."*
Ayrı ayrı koşmak **3 × 4 saat** eder ve hiçbir şey kazandırmaz — üçü de
aynı dosyada, aynı boyama kapısında.

⚠️ **Koşu 17:25'te bitti, `arac/*.py` ŞU AN SERBEST.** Ama yazım bitince
koşuyu **koordinatör** başlatır; sen başlatma.

---

## 1. ① TAVAN_KM — mesafe tavanları düşürülür

**Bugün** (`uret_petek.py:763`):
```python
TAVAN_KM = {1: 700, 2: 420, 3: 280, 4: 140, 0: 280}
```
**Emre'nin kararı:**
```python
TAVAN_KM = {1: 400, 2: 400, 3: 200, 4: 100, 0: 280}
```

**Gerekçe — Emre'nin cümlesi:** *"İstanbul Moskova Kahire Paris Budin
Tebriz Cezayir gibi merkezlere 700 km vermek çok değil mi… bu iki gruba
da 400 km mi vermek lazım."* Ve k1/k2 ayrımının pratik faydası yok:
Cezayir · Budin · Kahire Osmanlı'da **eyalet merkezi**, öncesinde
**başkent** — `k:` zamansız olduğu için ayrım zaten temsil edilemiyor.

**🟢 ETKİSİ ÖLÇÜLDÜ — sarsıntı YOK:**
```
kademe  nokta  medyan komşu  bugün → yeni   TAVANA ÇARPAN
k1        200      98 km     700 → 400            3  (1,5%)
k2        203      68 km     420 → 400            1  (0,5%)
k3        327      42 km     280 → 200            4  (1,2%)
k4        513      37 km     140 → 100           ~0
                                              ─────
                                               ~8 nokta / 1243
```
📌 Sebebi yapısal: komşular ortalama 40-100 km ötede ve **Voronoi sınırı
zaten ortadan geçiyor** — tavan devreye girmeden iş bitiyor. Tavan yalnız
**komşusu uzak** yerde çalışıyor, yani tam Sahra/Arabistan/Sibirya'da.

**⚠️ `k0` = 280'de KALIR — geçici, ve sebebi var:**
k0'ın 1363 kaydı arasında **Viyana · Venedik · Kiev** var. Onlara 200 km
vermek, İnegöl'e verdiğimizle aynı hakkı tanımak olur.
🔵 `KADEME K0` oturumu k0'ları dolduruyor; bittiğinde bu satır **kendiliğinden
gereksizleşir** ve kaldırılır.

---

## 2. ② ENKLAV BİRLEŞTİRME + KORİDOR KIRPMA — Emre'nin B1/B2/B3'ü

Emre'nin cümlesi:
> *"Benekli görünmesin. Enklavların ana toprak kitlesi ile arasındaki
> koridor kapanacak şekilde. Ve derin koridorlar: sadece koridorun BAŞI
> girinti yapacak, koridorun DERİNLİĞİ GENİŞLİĞİNİ GEÇMEYECEK şekilde
> koridorların DİP bölümlerini AĞIZA DOĞRU kapatarak."*

🟢 **ÜÇÜ DE ÖLÇÜLDÜ VE EMRE ONAYLADI** — `denetim/GOSTERIM-200KM/`:
```
bölge       B0(200km) → B3(hepsi)     artış    iç adacık  enklav  koridor
SAHRA       5.433.903 → 6.287.352   +853.448      24        3      22
ARABİSTAN   2.831.186 → 2.998.534   +167.348      25        6      22
ORTA ASYA   3.379.201 → 4.479.285 +1.100.084      13        9      60
SİBİRYA     1.276.898 → 2.011.454   +734.556      19        5       3
```

### B1 · İÇ ADACIK (delik)
```
🟢 KAPAT    boyalı gövdenin İÇİNDE, dışarıyla bağlantısı yok, içinde HİÇ yerleşim yok
🔴 KAPATMA  içinde BAŞKA DEVLETİN yerleşimi var
🔴 KAPATMA  içinde `kasitli_bosluk` / `bos:` taşıyan nokta var
```
⚠️ Sonuncusu şart: o noktalar *"burası bilerek boş"* demek için konmuş
(`devletsiz · kabile · insansiz · veri-yok · hata`). Kapatmak Çukotka'yı,
Rub'ul Hâlî'yi, Yakut ülkesini geri boyar.

### B2 · ENKLAV BİRLEŞTİRME
```
🟢 BİRLEŞTİR  ana kütleye ≤800 km · ARADA KARA VAR · aradaki toprak BOŞ
🔴 BİRLEŞTİRME  DENİZ AŞIRI — Emre açıkça "sadece karasal" dedi
🔴 BİRLEŞTİRME  arada BAŞKA DEVLETİN yerleşimi var
```

### B3 · KORİDOR KIRPMA
```
her boyasız hücre için:
   d = DIŞ boyasız alana geodezik uzaklık   (ağızdan içeri kaç km)
   w = o noktadaki koridor GENİŞLİĞİ        (en yakın boyalı hücreye ×2)
   d > w  ⇒  DOLDUR
```
⇒ Dipten başlar, ağıza doğru kapatır, **ağızda girinti bırakır.** B1'in
üç yasağı burada da geçerli.

🔴 **KAPATILMAYANI DA SAY VE BAS.** *"12 koridor kapatıldı"* yetmez;
*"5'i kapatılmadı çünkü içinde yerleşim vardı"* cümlesi kuralın doğru
çalıştığının kanıtıdır. Sessizce her şeyi kapatan kural, çalışıyor mu
bilinmez.

---

## 3. ③ PUAN_ESIK — çölde 4 → 8

**🔴 ÖNCE BİR OLGU: ÇÖL TAVANI İŞLEVSİZ, ve bunu motorun kendi yorumu yazıyor.**
```
uret_petek.py:2143   COL_TAVAN_KM = 300.0
uret_petek.py:789    "ÇÖL TAVANI BUNU YAPMIYOR, YAPAMAZ: COL_TAVAN_KM = 300
                      iken k0=280 · k3=280 · k4=140 hepsi ALTINDA ⇒ o
                      kademelerde A1 zaten daha içeride, çöl tavanı YAPISAL
                      OLARAK hiçbir şey kesemez (2283/2356 nokta)."
```
⇒ Adı var, işlevi yok. **Sahra çemberlerini çizen A1.**
⚠️ Ve ① uygulanınca (k3 → 200, k4 → 100) bu **daha da kötüleşir** —
tavanlar düşünce 300'lük çöl tavanı büsbütün devre dışı kalır.

**ÇARE — `ÇÖL BOYAMA`nın (b) şıkkı, ölçülmüş:**
```
Desert poligonu İÇİNDE  →  PUAN_ESIK  4 → 8
```
Sahipli çöl şehirlerinin (Gât · Murzuk · Câlû) **kendi peteğine dokunmaz**;
yalnız BOŞ peteğin doldurulmasını zorlaştırır. Emre'nin cümlesiyle birebir:
*"boyanmasını engelleyecek bir yapı."*
🔴 (a) `COL_TAVAN_KM`yi düşürmek RİSKLİ — sahipli çöl şehirleri kendi
toprağını kaybeder. (c) çölde dolguyu kapatmak 20 Ağustos talimatını çiğner.

---

## 4. 🔴 ÖNGÖRÜ — KOŞUDAN ÖNCE YAZILACAK, mazeretli/mazeretsiz AYRI

Yazmadan koşu başlatma. Bu projede ölçüldü: **sonradan yazılan beklenti
hiçbir zaman yanlış çıkmaz, yani hiçbir şey öğretmez.**
```
① TAVAN_KM        kaç nokta tavana çarpar · hangi kesitte kaç km² değişir
② B1/B2/B3        kaç adacık · kaç enklav · kaç koridor · KAPATILMAYAN kaç
③ PUAN_ESIK       çölde kaç dolgu peteği düşer · Sahra/Libya kaç km²
🔴 TOPLAM          Osmanlı doğrudan + tâbi TOPLAMI ne olur
```
⚠️ ④ en önemlisi: 27 Ağustos'ta `TABI` kademesi tam bu sınavla geçti —
`1800-06-15`te doğrudan −475.231, tâbi +492.583, **toplam +17.352 (%0,38)**.
Alan kaybolmadı, yer değiştirdi. Aynı sınavı bu üç kalem de vermeli.

## 5. DOSYA SAHİPLİĞİ
```
🟢 SENİN   arac/uret_petek.py · denetim/BULGU-MOTOR-UC-KALEM.md
🔴 DEĞİL   data/*.js · js/* · arac/renkler.py · arac/girdi.py · kök *.md
```
⚠️ `renkler.py` ve `girdi.py`ye dokunma — ikisi de motorun parmak izlediği
üçlüde ve koşu sırasında değişirlerse koşuyu öldürürler.

## 6. HABERLEŞME
```bash
py arac/tahta_bekci.py --kim "MOTOR ÜÇ KALEM" --ara 60
py arac/tahta.py yaz --kim "MOTOR ÜÇ KALEM" --kime "KOORDINATOR" --mesaj-dosya <yol>
```
🔴 **KOŞUYU SEN BAŞLATMA.** Yazımı bitir, öngörüyü yaz, tahtaya "hazır" de.
Koşuyu koordinatör başlatır — girdi kilidi ilanı ve bekçi onun işi.

📌 Ve bugünkü bir kusur tekrarlanmasın: bir dosyayı *"yeni"* diye tarif
etmek bir **iddiadır**. Yazmadan önce dosyanın var olup olmadığını ÖLÇ;
varsa **EKLE, yeniden yazma.** (Bugün `olaylar_ek8.js` böyle 8 madde
kaybetti ve `Değişmez 2` kırıldı.)
