# SINIR-ARAP-0907 — Arap Doğu · kademe C (hukukî sınır)

> Kol: `SINIR-HUKUKI-ORTAK-0907.md`nin altı kolundan biri.
> Oturum: OPUS HAZIR KITA 134 → **SINIR-ARAP-0907** (1.MURAT'ın verdiği ad)
> `session_id` `local_38674fb4-71bc-49f6-af51-2b7c933f440b` · Opus 5
> Bölge: Suriye · Lübnan · Filistin · Ürdün · Irak · Hicaz/Necid · Yemen · Körfez

## DOSYALARIM (§7)
```
denetim/SINIR-HUKUKI-ARAP-0907.json        ← ÇIKTI (120,4 KB · 26 kayıt)
denetim/ARAC-SINIR-ARAP-KENAR-0907.py      kenar kümesi (payda)
denetim/ARAC-SINIR-ARAP-TUR-0907.py        NE TYPE/SOVEREIGNT dökümü
denetim/ARAC-SINIR-ARAP-NAMETR-0907.js     NAME_TR eşleme ölçümü
denetim/ARAC-SINIR-ARAP-TDV-0907.py        TDV gövde çekici (§5 tuzaklarına karşı)
denetim/ARAC-SINIR-ARAP-URET-0907.py       ⭐ ÇIKTIYI ÜRETEN — json ELLE YAZILMAZ
denetim/ARAC-SINIR-ARAP-SINAV-0907.js      çıktının kendi sınavı (10/10)
denetim/_tdv_onbellek/*.txt                çekilen TDV gövdeleri (14 madde)
oturumlar/SINIR-ARAP-0907.md               bu dosya
```
`data/` · `arac/` · `js/` · `index.html` · başka kolun dosyası: **DOKUNULMADI.**
Koşu 8 sürüyor; donuk dosyaların hiçbirine yazılmadı.

## TUR 1 — ÖLÇÜLEN

### PAYDA — 🟢 ÖLÇTÜM
```
bölge İÇİ (iki ucu da Arap Doğu)   19
bölge DIŞI (Türkiye · İran)         3
ÖLÇÜLEN TOPLAM                     22
Mısır'a bağlı, ölçülemedi           4      ⇒ GERÇEK PAYDA 26
```
Yöntem: NE poligon `boundary` kesişimi, yalnız `LineString` parçalar,
`linemerge`. **Tolerans yok, eşik yok** — ortak şartnamenin "mekanik" hükmü
bölgemde 22/22 tuttu. Bahreyn ada olduğu için **0 kenar** (kusur değil).

### KOVALAR
```
hal=hukuki       4   Iraq|Turkey · Israel|Syria · Saudi Arabia|Yemen · Syria|Turkey
  f <= 1923-10-29 (🟢 C'ye girer)   0
hal=olculemedi  22
hal=bulunamadi   0   ← BİLEREK: TDV dışı akademik kaynak bu turda OKUNMADI
kaynağı ADIYLA yazılı kenar        12 / 26
```

### KAYNAKLI DÖRT HÜKÜM (hepsi TDV, gövdeler okundu)
| kenar | tarih | dayanak |
|---|---|---|
| Iraq \| Turkey | **1926-06-05** | Ankara Antlaşması. 1923-10-29'da sınır **hukuken yoktu** — Lozan md. 3 çözümü erteledi |
| Israel \| Syria | **1974-05-31** | Kuvvet ayrışma antlaşması; 1967-06-05 Golan |
| Syria \| Turkey | **1939** (yıl) | Hatay. 1923'ün dayanağı **20 Ekim 1921 Ankara Antlaşması** — TDV adıyla veriyor |
| Saudi \| Yemen | **1934** (yıl) | Tâif Antlaşması — Necran + Cîzân |

### İKİ KAYNAK ÇELİŞKİSİ — TARAF SEÇİLMEDİ (§4⑥)
```
TDV irak--ulke  aynı gövdede "5 Haziran 1926" (iki kez) VE "Temmuz 1926"
TDV lubnan      "Fransa Eylül 1921'de Büyük Lübnan Devleti'nin kurulduğunu ilân etti"
                — yaygın tarih 1 Eylül 1920
```

### 🔴 KOVA ÖNERİSİ — `1923-KENAR-YOK` (karar 1.MURAT'ın)
1923-10-29'da kenarın **iki ucu da aynı kimliğin içindeydi** ⇒ o gün
uluslararası bir sınır **değildi**. Adaylar (paydanın %15'i):
`Israel|Palestine` · `Israel|Jordan` · `Jordan|Palestine` · `Lebanon|Syria`.
Dayanağı TDV gövdelerinde alıntılı. Üç kovaya sıkıştırılırsa bir sonraki
oturum bunu *"arandı, yok"* diye okur.

### YAN BULGU — NE'de `NAME_TR` var, 258/258 dolu
Eşleme tablosunun kolu `KADEME-MODEL-0907`e tahtadan bildirildi (M-3178):
tam eşleşme **6 → 52** (%2,3 → %20,2). `NAME_EN` üzerinden ölçünce onun
tabanı **birebir 6** çıktı. Dil eksenini çözer, **tarihsellik eksenini
çözmez** (bölgemde 16 ucun 10'u modern/tarihî ayrımı yüzünden tutmuyor).

## ÖLÇÜM SINIRLARIM (⚪)
- Mısır'ın NE geometrisi geçersiz ⇒ 4 kenar hiç ölçülemedi.
- TDV dışı akademik kaynak **hiç okunmadı** ⇒ `bulunamadi` damgası **hiç
  kullanılmadı**; yanlış damga hatayı kalıcılaştırır (§9).
- `Israel|Lebanon` — bölgemin çıpaya en yakın adayı olabilir; TDV üç gövdede
  de **anmıyor**. Sıradaki turun ilk kalemi.
- `kimlik_1923` bölgenin çoğunda ⚪ — mekanik doldurulmadı (§7).

## 🔴 KENDİ ARACIMDA BULDUĞUM KUSUR — kaydı duruyor
`ARAC-SINIR-ARAP-SINAV-0907.js`in "3 ondalık" dalı ilk yazımda
`Math.round(x*1000) !== x*1000` idi ve **145 ihlal** bastı. Dosyada 4+
ondalıklı **tek bir sayı dizgisi yok** (ham metin regex'i: 0). Kusur veride
değil **sınavda**: `34.567*1000 = 34566.999999999996`. Ölçüt kayan noktadan
**ham metne** taşındı. §11 *"aletin gösterdiği ≠ dosyada yazan"* — kayan
nokta yüzü. Düzeltmeden sonra **10/10**.

---

# TUR 2 — ÇIPA TUZAĞI ve `kimlik_1923`

## ÇIPA TUZAĞI BENİ ISIRMADI — ölçüldü, varsayılmadı
1.MURAT acil uyardı (M-3191): dönemler yarı açık (`f <= g < t`), `UFUK[1]`
`1923-10-29` ⇒ o gün sorulunca canlı kimlik **109 → 1**, sahipsiz **168 → 3804**.
Kendi aletlerimi taradım: dördü de yalnız `ne_10m_admin_0_countries.geojson`
ve `data/devletler.js` okuyor; `yerlesimler` · `girdi.yukle` · `UFUK` ·
dönem filtresi **hiçbirinde yok**. `1923` dizgisi yalnız yorum/metinde.
🔴 **Ama tuzak tam sıradaki adımda bekliyordu** — TUR 2'nin işi `kimlik_1923`,
ve o iş atlasa gün sorar. Uyarı bir tur erken geldi.
```
ÇIPA        1923-10-29   kayda YAZILAN
SORGU GÜNÜ  1923-10-28   atlasa SORULAN
```

## `kimlik_1923` — 16/16 ÖLÇÜLDÜ (proza değil SLUG)
`ARAC-SINIR-ARAP-YAN-0907.py` · katman sırası `d > v > s`, `isg:` sayılmadı.
```
Syria/Lebanon    suriye-lubnan-mandasi (11 / 3)
Israel/Palestine filistin-mandasi (3 / 3)
Jordan           urdun-emirligi(2) + hicaz(1)      ← MAAN 1923'te HİCAZ
Iraq             irak-kralligi(31) + ingiltere(4)
Saudi Arabia     suud-ucuncu(15) + hicaz(12)       ← TEK Suudi Arabistan YOKTU
Yemen            yemen(8)+ingiltere(3)+kuayti-sultanligi(1)+umman(1)
Oman umman(18) · Qatar katar(1) · Kuwait kuveyt(1)
UAE ingiltere(3) · Bahrain ingiltere(1)            ← KENDİ kimlikleri YOK
Turkey           tbmm-turkiye(236)+OSMANLI-dogrudan(4)+suriye-lubnan-mandasi(3)
```

### bbox yöntemi DENENDİ ve ÇÜRÜTÜLDÜ
Sömürge imparatorluklarının bbox'ı kıtalar aşıyor ⇒ `portekiz` · `abd` ·
`ingiltere` bölgemdeki **her** ülkeyi "kapsıyor"; Katar ve Bahreyn'e `kacar`
önerdi; Filistin'e hiçbir dar kimlik veremedi. **bbox bir ipucudur (§11)**;
gerçek noktayla ölçünce 16/16 temiz çıktı.

## 🔴 KENDİ KOVA ÖNERİMİ KENDİM ÇÜRÜTTÜM — 4 → 2
```
🟢 DOĞRULANDI  Israel|Palestine  iki uç da filistin-mandasi
🟢 DOĞRULANDI  Lebanon|Syria     iki uç da suriye-lubnan-mandasi
🔴 ÇÜRÜDÜ      Israel|Jordan     filistin-mandasi ≠ urdun-emirligi+hicaz
🔴 ÇÜRÜDÜ      Jordan|Palestine  aynı sebep
```
Atlas Şarkü'l-Ürdün'ü ayrı modelliyor (`urdun-emirligi`, `1921-02-01`den).
⚠️ Çürüyen şey hukukî okuma değil — **ölçülebilir olanı hukukî olanın yerine
koymamdı.** İkisi ayrı sorudur.
🟢 Ve öneri artık **bedava**: `kimlik_1923` saf slug olduğu için kova var olan
bir alanın eşitlik testi — `k.kimlik_1923[0] === k.kimlik_1923[1]` → 2.

## 🔴 YENİ BULGU — bir ucun `kimlik_1923`i TEK DEĞER OLMAYABİLİR
16 ucun **7**'sinde birden çok kimlik, ve bazıları gürültü değil tarih:
Maan 1923'te Hicaz'dı ⇒ `Jordan|Saudi` kenarının iki ayrı kimliğe bakan
iki parçası var. Kayıt modeli her uç için tek kimlik varsayıyor.

## YAN BULGU — hüküm vermedim
1923-10-28'de Türkiye içinde 236 nokta `tbmm-turkiye`, **4 nokta hâlâ `d:`**
(Çaldıran · Başkale · Mersin · Şırnak), oran 59:1. Mersin'in `d:`si
`1921-10-20`de — Ankara İtilâfnâmesi gününde — başlıyor: kayıt o günü
**biliyor** ama kimliği TBMM'ye çevirmemiş. `data/` donuk, dokunmadım.

## ⑥ 36 `kid:`siz `v:` dönemi — bölgemde SIFIR
Öncül çürüdü: bölgemin 16 ucunda `v:` katmanından gelen tek bir kimlik yok.
Manda toprakları atlasta `v:` değil **`s:`** ile modellenmiş.

## SIRADAKİ
① `Israel|Lebanon` — akademik kaynak (TDV susuyor)
② `Iran|Iraq` · `Iraq|Syria` · `Jordan|Syria` · `Iraq|Kuwait` — hiç açılmadı
③ Körfez (Oman|UAE · Saudi|UAE · Oman|Saudi · Oman|Yemen · Qatar|Saudi)
   — TDV `umman` gövdesi **2738 karakter = BOİLERPLATE** (§5④), `olculemedi`
④ Mısır dörtlüsü — `KADEME-MODEL-0907`in ölçümü gelince
