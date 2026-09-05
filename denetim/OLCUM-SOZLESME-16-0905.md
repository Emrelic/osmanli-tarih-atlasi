# ÖLÇÜM — sözleşme boşluğunun 16'sı: **liste · parti sorusu · öneri metni**

> **Oturum:** KÜRE GÖRÜNÜM · **Sevk:** `M-2865` · **Tarih:** 5 Eylül 2026
> **Cins:** ÖLÇÜM + ÖNERİ — *veri yazılmadı. `data/devletler.js` koşu
> sonrası ve TEK ELDEN inecek; aşağıdaki metinler **öneridir**, hüküm değil.*

---

## 0. ÖNCE: KENDİ SÜZGECİMİ İKİNCİ KEZ DENETLEDİM

Dün gece kalıbı varsaydığım için 46 künye kaçırmıştım (34 → 80). Bu
turda **kalıbın ters yönünü** de denetledim: *yanlış pozitif üretiyor mu?*

```
🔴 BULDUM  `aştı|astı` belirteci KELİME İÇİNDE eşleşiyor:
           "bastırıldı" → b-ASTI-rıldı
           (uruguay'ın bir `kronoloji` kaydında yakalandı)
🟢 AMA     o eşleşme `ozet`/`kaynak`ta DEĞİL, `kronoloji`deydi — yani
           98'lik sayımı KİRLETMEDİ.
🟢 SINANDI belirteç tamamen atılıp yeniden sayıldı: BEYANLI **80/98**,
           DEĞİŞMEDİ.
```
**Ve her eşleşmenin hangi belirteçle tuttuğu tek tek basıldı:**
```
sonrasında 61 · ötesine 11 · atlas 10 · varlığını sürdür 4 · ötesinde 2
sonra da 2 · geçtiler 2 · hâlâ 1 · devam ed 1 · bugün 1 · taşıdı 1 · ufuk 1
```
Tek bir belirtece dayanan 43 künyenin **43'ü gözle sınandı**, hepsi
gerçek beyan. ⇒ **80 sayısı ayakta.**
📌 `§11`: *"yeni bir denetim iki yönde de sınanmadan çalışıyor sayılmaz."*
Dün geçme yolunu (kusuru kaçırma) düzeltmiştim; bugün **ateşleme yolunu**
(sahte kusur üretme) sınadım.

---

## 1. ① LİSTE — 16 künye

`t:1923-10-29` taşıyan 98 künyenin sözleşme beyanı olmayan 18'inden,
haklı olan 2 çıkarıldı (`tbmm-turkiye` gerçekten bitti · `liberya` beyanı
`son` kronoloji kaydında).

| # | künye | f | bölge | boya |
|---:|---|---|---|---|
| 1 | `almanya` | 962-02-02 | orta-avrupa | `almanya` |
| 2 | `yemen-zeydi` | 897-01-01 | arabistan | `yemen` |
| 3 | `afganistan` | 1823-01-01 | orta-asya | `afganistan` |
| 4 | `mogolistan` | 1911-12-29 | dogu-asya | `mogolistan` |
| 5 | `somali` | 1500-01-01 | dogu-afrika | `somali` |
| 6 | `bolivya-cumhuriyeti` | 1825-08-06 | guney-amerika | — |
| 7 | `brezilya-cumhuriyeti` | 1889-11-15 | guney-amerika | — |
| 8 | `dominik-cumhuriyeti` | 1844-02-27 | orta-amerika-karayip | — |
| 9 | `ekvador-cumhuriyeti` | 1830-05-13 | guney-amerika | — |
| 10 | `guatemala` | 1821-09-15 | orta-amerika-karayip | — |
| 11 | `kuba-cumhuriyeti` | 1902-05-20 | orta-amerika-karayip | — |
| 12 | `paraguay-cumhuriyeti` | 1811-05-14 | guney-amerika | — |
| 13 | `peru-cumhuriyeti` | 1824-12-09 | guney-amerika | — |
| 14 | `sili-cumhuriyeti` | 1818-02-12 | guney-amerika | — |
| 15 | `uruguay-cumhuriyeti` | 1828-08-27 | guney-amerika | — |
| 16 | `venezuela-cumhuriyeti` | 1830-01-13 | guney-amerika | — |

**Üçüncü biçim ayrıca arandı** (beyan `kronoloji` kaydında olabilir —
`liberya` emsali): **16'nın hiçbirinde yok.**

---

## 2. ② `git log` — parti hipotezi **DOĞRULANDI ve DARALDI**

Her künyenin `id:"…"` dizgisini `data/devletler.js`e sokan commit
arandı (`git log -S`).

```
c366736  2026-08-16  "DEVLETLER: 32 Amerika kunyesi islendi — 392 -> 424"  11 künye
2217e29  2026-08-06  "DORT KUNYE + ek16 BAGLANDI (1768 nokta)"              2   (afganistan · mogolistan)
72feb1a  2026-07-28  "Cok devletli harita: 43 komsu devlet…"                1   (almanya)
45ae881  2026-07-29  "Devam eden oturumlarin ara durumu"                    1   (somali)
BULUNAMADI                                                                  1   (yemen-zeydi)
```
⚠️ `BULUNAMADI` = dosyanın **ilk yaratılışına** ait (`--diff-filter=M`
onu görmez). Kusur değil, aramanın sınırı.

### 🔴 AMA BASİT "PARTİ BİLMİYORDU" AÇIKLAMASI ÇÜRÜDÜ — kontrol grubu

Hipotezi sınamak için **beyanı OLAN** künyelerin de commit'ini aldım.
İkisi **aynı partiden** çıktı: `arjantin-cumhuriyeti` ve
`kolombiya-cumhuriyeti` — ve **beyanları var.** Yani parti sözleşmeyi
bilmiyor değildi.

Her commit'in **kendi ıskalama oranı** ölçüldü:

| commit | eklediği künyenin pencere ucunda olanı | beyansız | oran |
|---|---:|---:|---:|
| `c366736` | 13 | **11** | **%85** |
| `2217e29` | 3 | 2 | %67 |
| `72feb1a` | 8 | 1 | %13 |
| `45ae881` | 10 | 1 | %10 |

⇒ **`c366736` gerçekten bir parti kusuru** (%85), ama *"hiç bilmiyordu"*
değil — **iki kez uyguladı, on bir kez atladı.**
📌 Ve uyguladığı ikisi **standart parantezi kullanmadı**, `atlas`
kelimesiyle yazdı (*"atlas boyunca Kolombiya kimliği bu künyeden…"* ·
*"Künyenin bitişi atlasın ufkudur, devletin sonu DEĞİL"*).
⇒ Parti sözleşmeyi **biliyordu ama kalıbı yoktu**; her kayıtta yeniden
icat etti ve çoğunda hiç yazmadı.

### ⇒ İKİ AYRI ÇARE, ve sevkin sorduğu ayrım tam burada

```
11 künye  TEK PARTİ · aynı bölge · aynı biçim · aynı cümle işe yarar
          ⇒ TOPLU ve UCUZ
 5 künye  DAĞINIK TEKİL (4 ayrı commit, düşük ıskalama oranı)
          ⇒ TEK TEK, ve ikisi ayrıca TARİH ister (aşağıda)
```

---

## 3. ③ HER BİRİ 1923'TEN SONRA SÜRDÜ MÜ?

**Sonuç: 16'nın 16'sı sürdü — `tbmm-turkiye` gibi HAKLI olan başka
YOK. Sayı 16'da kalıyor.**

Ama üç kayıt **açık uçlu değil, TARİHLİ** beyanı hak ediyor — sözleşmenin
zaten var olan ikinci biçimi (`(1923 sonrasında da sürdü, 1945'e dek)`):

```
🟡 mogolistan   künye adı "Bogd Hanlık" ve künye O YAPIYI tarif ediyor.
                Bogd Han'ın ölümü ve halk cumhuriyeti 1924'tedir ⇒ yapı
                pencereden yalnız ~13 AY sonra bitiyor.
                🔴 GÜNÜ DOĞRULAMADIM — kaynağa sorulmalı.
🟡 somali       künyenin KENDİ ozet'i "20. yüzyıl başında İtalyan
                sömürgeciliğiyle SONA ERDİ" diyor — yani bir son İDDİA
                EDİYOR ama tarihi yok, ve `t:` 1923'te.
                🔴 Sultanlıkların ilgası 1920'lerin ortasıdır; GÜNÜ
                   DOĞRULAMADIM. Künye ayrıca kendi kaynağı için
                   "kesinlik düşük" diyor.
🟡 afganistan   künye adı "Bârekzâyî EMİRLİĞİ"; emirlik 1926'da KRALLIĞA
                dönüşür. Hânedan sürer, UNVAN değişir ⇒ "sürdü" doğru,
                ama künye adı pencere sonrası için yanıltıcı olabilir.
                🔵 Bu bir beyan değil KAPSAM sorusu; ayrı kalem.
```

Kalan 13 için durum tartışmasız: `almanya` (Weimar → bugün) ·
`yemen-zeydi` (Mütevekkilî Krallığı, 1962'ye dek) · ve **11 Latin
Amerika cumhuriyetinin 11'i bugün de var.**

---

## 4. ④ ÖNERİ METNİ — *hüküm değil, öneri*

Sözleşmenin fiilî yazımı ölçüldü ve **standart**: 46 künye birebir aynı
cümleyi kullanıyor. Öneri o kalıbı korumaktır — yeni bir biçim icat
etmemek.

### (A) ONBİR LATİN AMERİKA KÜNYESİ — toplu, tek cümle
`ozet`in **sonuna**, mevcut cümleyi bozmadan:
```
 (1923 sonrasında da sürdü).
```
Uygulanacaklar: `bolivya-cumhuriyeti` · `brezilya-cumhuriyeti` ·
`dominik-cumhuriyeti` · `ekvador-cumhuriyeti` · `guatemala` ·
`kuba-cumhuriyeti` · `paraguay-cumhuriyeti` · `peru-cumhuriyeti` ·
`sili-cumhuriyeti` · `uruguay-cumhuriyeti` · `venezuela-cumhuriyeti`

### (B) İKİ TEKİL — aynı kalıp, açık uçlu
```
almanya      … müttefiki (1923 sonrasında da sürdü).
yemen-zeydi  … fiilen bağımsız imamlık (1923 sonrasında da sürdü).
```
⚠️ `almanya` için ek bir not önerilebilir ama **önermiyorum**: künyenin
`son` kaydı (`1918-11-11 · "İmparatorluk yıkıldı"`) ile `t:1923-10-29`
arasındaki gerilim ayrı bir kalem (`OLCUM-IC-CELISKI-KUNYE-0905.md §3`)
ve **beyan eklemek onu çözmez, örter.** İki kalem ayrı kalsın.

### (C) ÜÇ KAYIT — ÖNCE KAYNAK, sonra beyan
```
mogolistan   ÖNERİ:  (1923 sonrasında da sürdü, <YIL>'e dek)
             🔴 <YIL> KAYNAĞA SORULMADAN yazılmaz. Ben doğrulamadım.
somali       ÖNERİ:  (1923 sonrasında da sürdü, <YIL>'e dek)
             🔴 aynı şart. Ve künyenin "20. yüzyıl başında sona erdi"
                cümlesi ile `t:1923-10-29` BİRBİRİYLE ÇELİŞİYOR —
                beyan eklemeden önce o çelişki çözülmeli.
afganistan   ÖNERİ:  (1923 sonrasında da sürdü).
             🔵 "emirlik → krallık 1926" notu AYRI bir kapsam kalemi;
                beyana karıştırılmasın.
```
📌 `§4`: künyenin `f:`/`t:` günü bir kaynak değildir. Bu üçünde de
**tarihi ben üretmiyorum** — yerini boş bırakıyorum.

---

## 5. DAMGALAR

```
🟢 ÖLÇTÜM      16 künye listelendi · üçüncü biçim arandı, hiçbirinde YOK
🟢 ÖLÇTÜM      git log: 11/16 tek partiden (c366736, 16 Ağu 2026)
🟢 ÖLÇTÜM      kontrol grubu: aynı partiden 2 künyenin beyanı VAR
               ⇒ commit başına ıskalama oranı 85% / 67% / 13% / 10%
🟢 SINADIM     kendi süzgecimin YANLIŞ POZİTİF yolunu — `astı` kelime
               içinde eşleşiyor ama 98'lik sayımı kirletmemiş; belirteç
               atılıp yeniden sayıldı, 80/98 DEĞİŞMEDİ
🟢 ÖLÇTÜM      16'nın 16'sı 1923'ten sonra sürdü — sayı düşmüyor
🔴 ÖNERİ ONLY  hiçbir `ozet` metni yazılmadı; kalıp önerildi
⚪ DOĞRULAMADIM mogolistan ve somali'nin GERÇEK bitiş yılını — kaynağa
               sorulmalı, ben yazmadım
⚪ ÖLÇMEDİM    somali künyesinin kendi iç çelişkisini ("20. yy başında
               sona erdi" ↔ t:1923-10-29) — gördüm, ÇÖZMEDİM
⚪ ÖLÇMEDİM    c366736'nın pencere ucunda OLMAYAN 19 künyesinde başka bir
               sistematik eksik var mı
🔵 OKUMADIM    hiçbir dış kaynak — bu tur tamamen külliyat içi ölçümdür;
               "sürdü mü" hükmü künyelerin KENDİ metnine ve genel
               tarih bilgisine dayanıyor, kaynak sorgusuna DEĞİL
```

---

## 6. TESLİM — sayıyla

```
① LİSTE     16 künye · üçüncü biçim: 0
② PARTİ     11/16 TEK COMMIT (c366736 · 16 Ağu) · ıskalama oranı %85
            5/16 dağınık tekil, 4 ayrı commit (%67 · %13 · %10 · —)
            🔴 "parti bilmiyordu" ÇÜRÜDÜ: aynı parti 2 kez UYGULADI,
               ama standart kalıbı kullanmadan ⇒ biliyordu, KALIBI YOKTU
③ SÜRDÜ MÜ  16/16 EVET — tbmm-turkiye gibi haklı olan başka YOK
            3'ü TARİHLİ beyan istiyor (mogolistan · somali · afganistan)
            ve ikisinin yılı KAYNAĞA SORULMADAN yazılamaz
④ ÖNERİ     (A) 11 künyeye tek cümle, toplu ve ucuz
            (B) 2 künyeye aynı cümle, tekil
            (C) 3 künye ÖNCE kaynak — yer BOŞ bırakıldı
```
