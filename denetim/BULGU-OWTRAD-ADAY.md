<!-- DURUM: BITTI | 2026-08-25 | OPUS HAZIR KITA 82 | OWTRAD adaylari: suzme + TDV dogrulamasi -->
# OWTRAD ADAYLARI — SÜZME ve TDV DOĞRULAMASI

**Oturum:** OPUS HAZIR KITA 82 · **Tarih:** 25 Ağustos 2026
**Çıktı:** `data/yer_yama_owtrad.js` → `window.YER_YAMA_OWTRAD`
🔴 **Yama `girdi.py`ye BAĞLANMADI** (ölçüldü: `False`) — motor okumuyor.
Her kayıt bir **toprak iddiasıdır**; `yerlesimler*.js`e ancak onaydan sonra girer.

---

## ÖZET — sayıyla

```
154 dugum
 -47  sentetik ara-nokta                            → yerlesim DEGIL
 107 gercek adli
 -41  koridor agimizda zaten var
  65  "yeni aday"
 -53  🔴 YERLESIM HAVUZUNDA (2606 nokta) ZATEN VAR  → 32 adla · 21 uc km
  12  ARASTIRILAN
  -3  ayni yer cikti          Ozu · Skopje · Kanizsa
  -1  kaynak bulunamadi       Oltenita
   8  ONERI   →  5 HAZIR  ·  3 EKSIK DAYANAK
```

**Boşluk kalmadı: 12/12 kalemde hüküm var.**

---

## ① SÜZME — koordinatörün üç süzgeci SIFIR eledi, dördüncüsü 53 eledi

Şartname üç süzgeç verdi. Üçü de meşru, ve **üçü de sıfır eledi**:
```
① harita penceresi disinda   0
② adli olup sentetik gorunen  0
③ Via Militaris onceligi      (siralama, eleme degil)
```

🔴 **Sebep: üç süzgecin de sorduğu soru benim ilk hatamı taşıyordu.**
*"Yeni aday"* hükmünü **koridor ağına** (101 düğüm) bakarak vermiştim. Oysa
istenen şey bir **yerleşim** kaydı — ve o havuz `girdi.py`ye göre **55 dosya /
2606 nokta**. Bir yer koridor düğümü olmayabilir ama **yerleşim olarak çoktan
kayıtlı** olabilir.

```
"yeni aday" listemde olup yerlesimler*.js'te ZATEN VAR olanlar:
Ankara · Bursa · Bagdat · Izmir · Kayseri · Trabzon · Antalya · Amasya ·
Kastamonu · Kutahya · Manisa · Balikesir · Sinop · Isparta · Karaman ...
                                                             ⇒ 53 kayit
```
⇒ **Doğru soru** *"koridor ağımızda yok"* değil, ***"yerleşim havuzunda yok"***.

📌 Ve süzgeçlerin sıfır elemesi **kendisi bir sonuçtur**: evrenin yanlış
olduğunu gösterdi. 53 gereksiz TDV sorgusunu, koordinatörün *"körlemesine
sorgu atma"* talimatının **zorladığı ölçüm** önledi.

---

## ② 🔴 ÜÇÜNCÜ KEZ KENDİ HÜKMÜMÜ ÇÜRÜTTÜM — Tatar-Pazarcık

```
Tatar-Pazarjik  ->  Tatarpazarcigi   0,89 km   YERLESIM HAVUZUNDA VAR
```
`BULGU-OWTRAD-GOC.md`de iki kez hüküm vermiştim ve **ikisi de yanlıştı**:
*"bizde HİÇ YOK (en yakın Filibe 35 km)"* ve *"hiç yazılmadı, çare
ARAŞTIRMA"*. Yerleşim **var**; olmayan şey **koridor düğümü**.

**Doğru sınıflandırma üç sınıflı:**
```
18 menzil kasabasi   yerlesim YAZILDI ama dosya BAGLANMADI   → care: bir SATIR
Tatar-Pazarcik       yerlesim VAR, koridor dugumu YOK        → care: koridor kaydi
gercek yeni 8        yerlesim YOK                            → care: ARASTIRMA
```
📌 **Üç hükmümün üçü de aynı kökten yanlıştı:** her seferinde koridor ağına
bakıp yerleşim havuzu hakkında hüküm verdim. Ve **her seferinde düzelten şey
başka bir ÖLÇÜM oldu, akıl yürütme değil.**

---

## ③ TDV DOĞRULAMASI — 12 kalem

### 🟢 HAZIR (5) — TDV dayanağı tam, komşu tutarlılığı sağlandı

| # | ad | TDV dayanağı | Osmanlı dönemi |
|---|---|---|---|
| A-1 | **Birecik** | `birecik` — İdris Bostan, VI:187-189 | 1516-08-24 → 1923-10-29 |
| A-2 | **Prizren** | `prizren` — Machiel Kiel, XXXIV:349-351 | **1455-06-20** → 1912-10-22 |
| A-3 | **Debre** | `debre` — Machiel Kiel, EK-1:311-313 | 1395-01-01 → 1912-11-29 |
| A-4 | **Sibin (Sibiu)** | `erdel` — Kemal Karpat, XI:280-283 | tâbi 1526-09-01 → 1687-08-12 |
| A-5 | **Foça** | `ceneviz` — Aldo Gallotta, VII:363-365 | 1455-01-01 → 1919-05-15 |

### 🔴 EKSİK DAYANAK (3) — kayıt YAZILMADI

| # | ad | elde olan | eksik olan |
|---|---|---|---|
| B-1 | **Aydos (Aytos)** | fetih 770/**1369**, I. Murad, çatışmasız (`karinabad`) | 🔴 **bitiş tarihi yok ve komşu da yok** |
| B-2 | **Korint** | Mora fethi 1460 (`mora`) | 🔴 Korint'in **kendi fetih günü yok** |
| B-3 | **Argos** | 1397 Haziran ve 1479, iki fetih (`mora`) | 🔴 aradaki **82 yıl ölçülmedi** |

⇒ **Üçünde de öneri yazmadım.** Yarım bir kayıt ya `Değişmez 1`de sahipsizlik
açar ya da uydurma bir dönem doğurur. *"Bulamadım"* yazmak, yanlış bir tarih
yazmaktan kat kat ucuzdur.

### ⚪ ELENDİ (3) — aday değil, zaten var
```
Ozu     → Özi      80,8 km   TDV `ozu` (Temel Öztürk, XXXIV:133-134) AYNI KALE
Skopje  → Üsküp     3,2 km   3 km esigini kil payi asti
Kanizsa → Kanije    6,8 km   TDV `kanije` (Géza Dávid, XXIV:307-308) AYNI SEHIR
```

### 🔴 BULUNAMADI (1)
**Oltenița** — `oltenita` slug'ı 302; TDV `eflak` gövdesi okundu:
*"Oltenia"* (Küçük Eflak, **bölge**) diyor, *"Oltenița"* (**kasaba**) demiyor.
**Ad benzerliği yanıltıcı.** Ve maddenin saydığı Tuna iskeleleri
*"Brǎila (İbrâil) ve Giurgiu (Yergöğü)"* — **ikisi de verimizde zaten var.**

---

## ④ 🔴 SLUG TUZAKLARI — bu turda ÜÇÜ birden çıktı

### ② canlı slug, YANLIŞ MADDE — `foca`
```
foca   HTTP 200 · baslik "FOÇA" · iki test de TEMIZ
       ama madde BOSNA-HERSEK'teki Foča  (Nenad Moačanin, XIII:166-167)
       "Bosna-Hersek'te Ceotina nehrinin Drina'ya kavustugu yerde"
```
İzmir'deki Foça'nın müstakil maddesi arandı: `foca--izmir` · `foca--sehir` ·
`eski-foca` · `yeni-foca` — **dördü de 302.**
🟢 **Ve `§4`ün 'dar slug tutmazsa KAPSAYICI maddeyi dene' kuralı KAZANDIRDI:**
`ceneviz` maddesi Foça'yı Ceneviz kolonileri arasında sayıyor ve
*"Eski ve Yeni Foça 1455'te"* diyor. **Kural olmasaydı `bulunamadı` yazılacaktı
ve YANLIŞ olacaktı.**

### ① ölü slug — ve doğrusu bir harf ötede
```
🔴 302   ozi · aydos · aytos · korint · gordes · sibin · sibiu · nagyszeben ·
         argos · oltenita · foca--izmir · eski-foca · yeni-foca
🟢 200   ozu ← BIZIM VERI "Özi" YAZIYOR, TDV "Özü"
```
⚠️ **`ozi` ölü, `ozu` canlı.** Bir harf. Ve bu, `§4`ün *"kendi
transliterasyonunu değil gerçek kimliği kullan"* dersinin yer-adı tarafı.

### 🔴 VE İKİ SÜZGECİ BİRDEN GEÇEN BİR VAKA: `Ozu`
```
ad sadelestirici   "ozu" ≠ "ozi"  ⇒ KACIRDI
mesafe suzgeci     80,8 km        ⇒ TUTMADI (esik 3 km · supheli 15 km)
yakalayan          GOZLE BAKMAK
```
📌 80 km'lik sapma **1:8M taslak haritanın beklenen hatası** — yani
`BULGU-OWTRAD-GOC.md`de koyduğumuz çözünürlük damgasının **ilk pratik
sonucu.** Damga soyut bir uyarı değilmiş: bir düğümü *"yeni yer"* gibi
gösterdi.

---

## ⑤ TARİH SEÇİMİ — uydurulmadı, iki kaynaktan gelindi

```
① TDV govdesi GUN veriyorsa       → O kullanildi   (Prizren, 4 Receb 859)
② TDV yalniz YIL veriyorsa        → AYNI KIRILMAYI tasiyan EN YAKIN KOMSUNUN
                                     gunu kullanildi
```
**Niçin komşu:** komşunun günü zaten `Değişmez 2` gereği bir kronoloji
maddesiyle eşleşmiş durumda. **Yeni bir gün uydurmak, maddesiz bir kırılma
yaratırdı.**

Ölçülen komşu tarihleri:
```
Birecik ← Cerablus (23,5 km) ve Antep: memluk→d  1516-08-24
          (Halep ve Rakka 1516-08-28 kullaniyor — 4 gun fark, YAKIN komsu secildi)
Debre   ← Ohri (50,6 km): cikis 1912-11-29
Prizren ← Pristine: cikis 1912-10-22   (giris TDV'nin kendi gunu)
Foça    ← Izmir (42,8 km): 1919-05-15 · 1922-09-09
Sibiu   ← Erdel Belgradi ve Brassó: s:/v: dizileri KARAKTER KARAKTER AYNI
```

🟢 **A-4 (Sibiu) listenin en güçlü önerisi** ve sebebi tam da bu: hiç yeni
tarih üretmiyor, **iki komşusunun birebir aynı desenini** kopyalıyor ⇒
`Değişmez 2` hiç etkilenmiyor.

### 🔴 A-2 (Prizren) YENİ BİR KIRILMA GÜNÜ DOĞURUYOR
```
Prizren  1455-06-20   (TDV'nin kendi gunu)
Pristine 1455-06-01   (veride mevcut)
                       19 gun fark
```
⇒ `Değişmez 2` için ±30 gün penceresine giriyor **olabilir** — **ama bunu
ÖLÇMEDİM.** Uygulanmadan önce ölçülmeli.

---

## ⑥ YERLEŞİM Mİ, KONAK/GEÇİT Mİ — 8/8 cevaplandı

Koridor kaynağı ikisini **ayırmıyor**; bizim havuzumuz ayırıyor. Ve bir konağı
yerleşim diye yazmak `§2` gereği **etrafına petek açar** — haritada olmayan bir
sahiplik üretir. ⇒ *"TDV'de maddesi var"* yetmez; **madde onu ne olarak
anlatıyor**, o sorulmalı.

```
A-1 Birecik   🟢 YERLESIM   "bir SANCAK statusu kazanan Birecik 1526'da Arap
                             eyaletine bagliydi" · 19. yy Urfa'ya bagli KAZA
A-2 Prizren   🟢 YERLESIM   1455-1912 SANCAK MERKEZI · gec donemde VILAYET
A-3 Debre     🟢 YERLESIM   16. yy'dan BIRKAC KAZALI SANCAK MERKEZI
A-4 Sibiu     🟢 YERLESIM   Erdel'in "baslica SEHIRLERI" listesinde ADIYLA
A-5 Foca      🟢 YERLESIM   Ceneviz KOLONISI · "ESKI ve YENI Foca" = iki yerlesim
B-2 Korint    🟢 YERLESIM   Mora'nin baslica antik sehirleri arasinda
B-3 Argos     🟢 YERLESIM   1729-30 "Morali Besir Aga" camii ve KULLIYESI
B-1 Aydos     🔴 BELIRSIZ   TDV yalniz KALE diyor
```

🟢 **Ve dayanak benim çıkarımım değil, TDV'nin KENDİ İDARÎ TERİMLERİ.** Beş
hazır önerinin beşi de **sancak · kaza · vilâyet · "başlıca şehirleri"**
gibi bir idarî sıfat taşıyor. Bir menzil konağı sancak olmaz, bir konakta
külliye kurulmaz. ⇒ Hiçbiri *"yol üstünde bir durak"* değil.

🔴 **Tek belirsiz: Aydos** — ve bu, o kaydın **ikinci** eksiği. TDV `karinabad`
Aydos'u yalnız **kale** olarak anıyor; *"mahallî aristokratlar bölgenin
kapılarını Osmanlılar'a açmıştır"* cümlesi bir yerleşimi **ima eder ama açıkça
söylemez.** Bugünkü Aytos bir kasabadır — **ama bu bugünkü durumdur, 1369'unki
değil.**

⚠️ **Bir tercihimi de işaretliyorum:** A-5 Foça'ya `tur:"liman"` yazdım,
`"sehir"` değil — Ceneviz dönemindeki işlevi limandı. **TDV bu ayrımı
yapmıyor**, seçim benim.

---

## ⑦ `k:` ve `m:` ALANLARI YAZILMADI — bilerek

`VERI-YAPISI.md`: *"Bilinmiyorsa alanı hiç yazma. Eksik alan yanlış alandan
iyidir."* İdarî kademe, `Değişmez 3`ün çözülmemiş `kd:` tasarımına bağlı;
tahminle doldurmak o borcu **büyütür**.

---

## ⑦ ÖLÇMEDİKLERİM — açıkça

```
· A-1 Birecik: TDV'nin andigi AKKOYUNLU ara donemi OLCULMEDI. Urfa 1465-1507
  akkoyunlu tasiyor; Birecik tasimali mi bilinmiyor. Oneri Cerablus deseniyle
  (kesintisiz memluk) yazildi — bu bir TERCIH, olcum degil.
· A-3 Debre: FETRET alt-donemleri YAZILMADI. Komsulari Ohri ve Uskup 1402-1413
  icin suleyman/musa/mehmed-celebi tasiyor. Debre de tasimali MI, olcmedim.
  ⇒ Bu haliyle uygulanirsa komsulariyla TUTARSIZ olur.
· A-2 Prizren: 1455-06-20'nin ±30 gun penceresinde bir kronoloji maddesi olup
  olmadigini OLCMEDIM.
· 5 onerinin HICBIRI icin `Degismez 1` (sahipsizlik) ve `Degismez 2` (sessiz
  degisim) KOSTURULMADI — yama bagli olmadigi icin kosturulamaz da.
· B-1 Aydos: Bulgaristan kuzeydogusunda yerlesim havuzu SEYREK (Karinabad ·
  Prevadi · Aytos · Burgaz DORDU DE YOK). Bu bolgenin kendisi ayri bir borc
  olabilir — OLCMEDIM, gozle gordum.
· 53 "yerlesim havuzunda var" kaydinin TARIH DOGRULUGUNU kontrol ETMEDIM;
  yalniz VARLIKLARINI olctum.
```

---

## Aletler (scratchpad, depoya girmedi)
```
aday_suz.py       65 adayin dort suzgecten gecirilmesi (pencere · sentetik ·
                  yerlesim havuzu adla · yerlesim havuzu 3 km)
aday_kenar.py     her adayin kac kenara bagli oldugu, ana/tali ayrimi
komsu_tarih.py    onerilerin komsu kayitlarindan tarih hizalamasi
```

## Kaynaklar
- Bostan, İdris, "Birecik", **TDV İslâm Ansiklopedisi** VI (1992), 187-189
- Kiel, Machiel, "Prizren", **TDV İA** XXXIV (2007), 349-351
- Kiel, Machiel, "Debre", **TDV İA** EK-1 (2020), 311-313
- Kiel, Machiel, "Karinabad", **TDV İA** XXIV (2001), 490-492
- Kiel, Machiel & Alexander, John, "Mora", **TDV İA** XXX (2020), 278-283
- Karpat, Kemal, "Erdel", **TDV İA** XI (1995), 280-283
- Karpat, Kemal, "Eflak", **TDV İA** X (1994), 466-469
- Gallotta, Aldo, "Ceneviz", **TDV İA** VII (1993), 363-365
- Dávid, Géza, "Kanije", **TDV İA** XXIV (2001), 307-308
- Öztürk, Temel, "Özü", **TDV İA** XXXIV (2007), 133-134
- Moačanin, Nenad, "Foça" *(Bosna)*, **TDV İA** XIII (1996), 166-167 — *bu madde
  ARANAN yer DEĞİLDİR, tuzağın kaydı için listede*
