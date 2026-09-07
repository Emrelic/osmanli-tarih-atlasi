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

## SIRADAKİ
① `Israel|Lebanon` — akademik kaynak (TDV susuyor)
② `Iran|Iraq` · `Iraq|Syria` · `Jordan|Syria` · `Iraq|Kuwait` — hiç açılmadı
③ Körfez (Oman|UAE · Saudi|UAE · Oman|Saudi · Oman|Yemen · Qatar|Saudi)
   — TDV `umman` gövdesi **2738 karakter = BOİLERPLATE** (§5④), `olculemedi`
④ Mısır dörtlüsü — `KADEME-MODEL-0907`in ölçümü gelince
