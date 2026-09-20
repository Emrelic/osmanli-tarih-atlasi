# TERIM-STANDART-0070 — işgal · fetih · ilhak · istilâ · harekât (H-0010)

**Oturum:** SINIR-DIS-0070 (Opus) · **tarih:** 20 Eylül 2026 · **sevk:** 1.MURAT M-4726
(şartname `oturumlar/DALGA-0070.md` §6) · **alet:** `denetim/ARAC-TERIM-STANDART-0070.py`
**ham ölçüm:** `denetim/OLCUM-TERIM-0070.json`
🔴 **Veri ve kod DEĞİŞTİRİLMEDİ** — bu belge ölçüm + öneridir, kararı Emre verir.

Emre (H-0010): *"işgal nedir, fetih nedir, ilhak nedir, harekât/istilâ nedir — bir kısmı
birbirinin aynısı; geçici ele geçirmeye işgal, kalıcıya fetih desek ve haritada ayrı
gösterşek; süre ölçütü de olmalı."*

```bash
py denetim/ARAC-TERIM-STANDART-0070.py --json denetim/OLCUM-TERIM-0070.json
```

---

## 0. İKİ CÜMLEDE HÜKÜM

> **① Karmaşa gerçek ve ölçüldü: atlasta bu terimler için ÜÇ AYRI SÖZLÜK var
> (`k:` liste rengi · `tur:` veri alanı · başlık metni) ve üçü birbirini tutmuyor —
> "ilhak" başlıklı 34 madde listede *fetih* yeşiliyle, "işgal" başlıklı 50 madde
> *kayıp* grisiyle çiziliyor; `k:"isgal"`in CSS'te karşılığı bile YOK (3 kayıt sessizce
> varsayılana düşüyor).**
>
> **② Ama Emre'nin önerdiği ayraç (geçici=işgal · kalıcı=fetih) KAYNAKLA ÇELİŞİYOR ve
> veriyle de çelişiyor: işgal hukuken SÜREYLE değil FİİLÎ OTORİTEYLE tanımlanır
> (Lahey 1907 md. 42) ve atlasın kendi `isg:` pencerelerinin medyanı 3 237 gün
> (8,9 yıl), 139'u on yıldan uzun. Süre eşiği konsaydı 5 yılda 214/314 işgal
> "kalıcı" sayılacaktı — Mısır'ın 1882-1914 İngiliz işgali dâhil.** Doğru ayraç
> süre değil **egemenliğin devredilip devredilmediğidir**; süre bunun sonucudur.

---

## 1. ÖLÇÜM — bugünkü kullanım (124 kronoloji dosyası · 7 146 madde)

### 1.1 Üç ayrı sözlük, üç ayrı eksen
| eksen | nerede | kaç maddede | ne yapıyor |
|---|---|---|---|
| `k:` | kronoloji kaydı | **1 530** (7 146'nın %21,4'ü) | **TEK GÖRSEL EKSEN** — listede `.olay.k-<k>` rengi/şeridi |
| `tur:` | kronoloji kaydı | 5 599 (1 547'sinde YOK) | **çizimde HİÇ kullanılmıyor** (app.js'te olay çizimi yalnız `o.k` okur) |
| başlık metni | `b:` | 7 146 | okunan asıl terim; hiçbir gösterime bağlı değil |

`k:` 32 ayrı değer taşıyor, CSS'te 24 sınıf var: **115 madde karşılıksız** —
rengi sessizce varsayılana düşüyor (`diger` 48 · `mimari` 27 · `kazanc` 16 ·
`isgal` 3 …). Yani **`k:"isgal"` yazılmış ama İŞGAL RENGİ YOK.**

### 1.2 Başlıktaki terim × listedeki renk (çelişkinin kendisi)
```
başlık kalıbı   kaç madde   listede aldığı k: (en çok)
fetih              194      fetih 92 · kurulus 2 · savas 2 · siyaset 1
ilhak              115      fetih 34 · kayip 5 · siyaset 2 · antlasma 1
işgal              176      kayip 50 · savas 11 · siyaset 4 · isgal 2 · fetih 2
zapt / ele geçir   134      fetih 9 · kayip 8 · savas 1
alınması/kurtarıl  198      fetih 50 · savas 9 · antlasma 4 · kazanc 3
harekât / seferi   205      fetih 22 · savas 19 · sefer 7 · siyaset 4 · kayip 3
istilâ              23      siyaset 1 · fetih 1  (kalanında `k:` yok)
```
📌 Aynı olay tipi dört ayrı renge düşüyor; **"ilhak" ile "fetih" listede AYNI**
(ikisi de yeşil `k-fetih`), **"işgal" ile "toprak kaybı" da AYNI** (ikisi de gri
`k-kayip`). Emre'nin *"bir kısmı birbirinin aynısı"* sözünün sayısal karşılığı budur.

`tur:` ekseninde ise **`ilhak`, `istila`, `harekat` diye bir değer HİÇ YOK**
(`isgal` 103 · `fetih` 53 · `toprak-kazanc` 311 · `toprak-kayip` 222).

### 1.3 Haritadaki karşılık
| gösterim | veriden | ölçü |
|---|---|---|
| **tarama** (`isgal-dolgu`, opaklık 0,85) | `isg:` penceresi | **231 yerleşim · 316 pencere · 8 işgalci devlet** |
| **düz renk değişimi** | `s:` dönemi | 13 159 dönem |
| **ok** | `data/seferler*.js` | SEFER-OK-0070'in işi |
| **künye türü** | `devletler.js` `tur:` | `gecici-isgal` **17** · `gecici-hukumet` 1 (677 künyede) |

**Terim ↔ gösterim kopukluğu (kaba, yıl düzeyinde):** "işgal" kelimeli 176 maddenin
**122'sinde** o yıl haritada bir `isg:` penceresi var, **54'ünde YOK**. Yani metin
işgal diyor, harita işgal göstermiyor.

### 1.4 İşgal süreleri — "geçici" varsayımının sınavı
```
isg: penceresi   316 (314 kapalı · 2 açık) · kaynaklı 217/316
süre (gün)       min 6 · Q1 1 116 · MEDYAN 3 237 (8,9 yıl) · Q3 11 783 (32 yıl) · max 15 509 (42 yıl)
kova             <1 yıl 24 · 1-3 yıl 47 · 3-5 yıl 29 · 5-10 yıl 75 · ≥10 yıl 139
en çok işgalci   ingiltere 116 · fransa-cumhuriyet 58 · rusya 56 · yunanistan 40 · avusturya 26 · italya 18
```
`s:` (sahiplik) dönemlerinde ise medyan 20 573 gün (56 yıl) ama **868 dönem 1 yıldan
kısa** — yani "kalıcı" sanılan eksende de kısa kayıtlar var. **Süre iki sınıfı
AYIRMIYOR: dağılımlar iç içe geçiyor.**

---

## 2. KAYNAK — terimlerin ölçülebilir ayracı nerede?

| terim | kaynak | ayracın kendisi |
|---|---|---|
| **işgal** | **Lahey 1907, Kara Savaşı Nizamnamesi md. 42** (ICRC IHL veritabanı, resmî metin): *"Territory is considered occupied when it is actually placed under the authority of the hostile army. The occupation extends only to the territory where such authority has been established and can be exercised."* | **FİİLÎ OTORİTE** — süre değil. Otoritenin kurulduğu ve kullanılabildiği yer kadar. Egemenlik devredilmez. |
| **fetih** | **TDV, FETİH** (Mustafa Fayda): *"Müslümanların ülke veya şehirleri i'lâ-yi kelimetullah amacıyla İslâmiyet'e açmaları, İslâm devleti idaresine almaları"*; madde, terimin *"diğer istilâ ve sömürü savaşlarından ayırmak amacıyla"* kullanıldığını açıkça söylüyor | **NORMATİF/DİNÎ** eksen (kim, hangi amaçla) — süre veya hukukî devir DEĞİL. Hudeybiye örneğinde savaşsız antlaşma bile "feth-i mübîn" sayılıyor. |
| **istilâ** | aynı TDV maddesi, karşıt terim olarak | **NORMATİF, olumsuz** — fetihle aynı olayın karşı taraftan adlandırılması. |
| **ilhak** | TDV'de **madde YOK** (arama: yalnız KUVÂ-yi MİLLİYE içinde geçiyor); hukukî karşılığı antlaşma/resmî ilanla **egemenlik devri** | **HUKUKÎ DEVİR** — belgeyle (antlaşma, ferman, ilan) ölçülür. |
| **sulh/antlaşma** | **TDV, SULH**: *"Barış esasına dayalı uluslararası ilişkileri ve bu amaçla yapılan antlaşmaları ifade eden bir terim"*; **HÜDNE**: *"gayri müslim devletlerle yapılan **süreli** sulh antlaşması"* | Devrin **BELGESİ**; hüdne, kaynakta sürenin geçtiği tek yer — ve orada süre **antlaşmanın** niteliği, toprağın değil. |
| **harekât/sefer** | — | **STATÜ DEĞİL, HAREKET**: ordunun yürüyüşü. Toprak sınıfı üretmez (atlasta zaten ok ile çiziliyor). |

📌 **İki sonucu açıkça yazıyorum, çünkü Emre'nin cümlesiyle çelişiyorlar:**
1. **"Kalıcı ele geçirmeye fetih"** demek kaynakla çelişir: fetih TDV'de *kalıcılık*
   değil *kimin, hangi amaçla* sorusunun cevabıdır. Aynı toprak için Osmanlı kaynağı
   "fetih", karşı taraf "istilâ" der; ikisi de aynı fiilî durumu anlatır. Bir atlasın
   **sınıf adı** olarak kullanılırsa harita taraf tutmuş olur.
2. **Süre ölçütü tek başına ayırmaz**: ölçüldü, işgal pencerelerinin medyanı 8,9 yıl.
   Süre bir SONUÇ; ayraç, **egemenliğin devredilip devredilmediğidir**.

---

## 3. ÖNERİLEN STANDART — üç sınıf, tek soru

**Tek soru:** *o tarihte toprağın EGEMENİ değişti mi, yoksa yalnız DENETLEYENİ mi?*

| sınıf | tanım (ölçülebilir) | veri alanı (bugün var) | gösterim |
|---|---|---|---|
| **① KATILIM** (fetih · ilhak · zapt · geri alınma) | Egemenlik devredildi: yeni sahip kendi idaresini kurdu ve **bir belge/ilan var** (antlaşma, ferman, resmî ilan) ya da kaynak yeni sahibi doğrudan sahip sayıyor | `s:` döneminin `d:` değişimi | **düz renk** — yeni sahibin rengi |
| **② İŞGAL** | **Fiilî otorite** işgalcide (Lahey md. 42), **egemenlik devri YOK**: nominal sahip kaynakta hâlâ eski devlet | `isg:` penceresi | **tarama** (altta soluk) + nominal sahibin şeridi |
| **③ HAREKÂT** (sefer · istilâ hareketi) | Toprak statüsü DEĞİL, ordunun hareketi | `data/seferler*.js` | **ok** (SEFER-OK-0070 dili) |

**Terimler kaybolmuyor, YERİ değişiyor:** "fetih", "istilâ", "zapt" kelimeleri
**madde METNİNDE ve başlıkta** kalır (kaynağın dili odur); **sınıf adı** olarak
yalnız yukarıdaki üçü kullanılır. Böylece harita taraf tutmaz, metin tarihî dili korur.

**Süre nereye gider:** ayraç değil, **etiket**. Kapanmış her `isg:` penceresinin süresi
zaten veride var; kartta "3 yıl 2 ay süren işgal" diye YAZIYLA gösterilebilir. Ölçüt
yapılmaz — çünkü 42 yıllık işgal de (ölçüldü: max 15 509 gün) işgaldir.

### 3.1 Animasyon diliyle eşleşme (ELE-GECIRME-ANIM-0070 · SEFER-OK-0070)
1.MURAT'ın M-4714 kuralına (ok üstte dolu · tarama altta soluk · fazlar sırayla)
eklenen tek ayrım: **bitiş dokusu.**
```
KATILIM  → iki kez yanıp sön, ÜÇÜNCÜDE DÜZ RENKTE kapan (sahip değişti)
İŞGAL    → iki kez yanıp sön, ÜÇÜNCÜDE TARAMAYA kapan  (denetim değişti, sahip değişmedi)
HAREKÂT  → ok ilerler, varışta ne renk ne tarama bırakır (statü üretmez)
```
Aynı zamanlama, farklı bitiş — yeni bir animasyon dili açılmıyor.
⚠️ Bu ayrım ELE-GECIRME-ANIM-0070'e M-4728 ile soruldu; **bu belge yazıldığında
cevap gelmemişti** (teslimde durum bildirilecek).

---

## 4. SEÇENEKLER — karar Emre'nin, maliyetler ÖLÇÜLDÜ

### A — SINIF ADLARINI DÜZELT, VERİ ŞEMASINA DOKUNMA *(önerilen)*
Harita tarafı zaten doğru ayrımı yapıyor (`s:` ↔ `isg:`); bozuk olan **kronoloji
sözlüğü**. Yapılacak: `k:` ekseni üç sınıfa oturtulur, eksik CSS sınıfı açılır.
```
kayıt maliyeti (ölçüldü)   zaten doğru        194 madde (dokunulmaz)
                           DEĞİŞECEK           10 madde (harekât 8 · işgal 2)
                           k: SESSİZ, eklenecek 141 madde
                                                (işgal 64 · harekât 32 · alınma 17 ·
                                                 zapt 10 · ilhak 8 · fetih 8 · istilâ 1 · teslim 1)
kod maliyeti               css/style.css: `.olay.k-isgal` (+ istenirse `.k-harekat`)
                           — bugün `k:"isgal"` yazılı 3 kayıt RENKSİZ
veri şeması                DEĞİŞMEZ · motor koşusu GEREKMEZ
```
**Toplam ~151 kronoloji kaydı** (7 146'nın %2,1'i) + 1-2 CSS sınıfı.

### B — A + `tur:` ALANINI KAPAT ya da DOLDUR
Ölçüldü: `tur:` çizimde **hiç kullanılmıyor**, 1 547 maddede zaten yok, ve terim
ailesinde (`ilhak`/`istila`/`harekat`) hiç değeri yok. İki yol:
```
B1 `tur:`i resmen DENETİM ALANI ilan et (VERI-YAPISI.md'ye tek satır) — 0 kayıt dokunulur
B2 `tur:`i üç sınıfa göre DOLDUR — 5 599 kayıt gözden geçirilir (PAHALI, görsel kazanç YOK)
```
**Öneri: B1.** B2'nin ölçülmüş bir faydası yok.

### C — SÜRE EŞİĞİ (Emre'nin sorduğu biçim) *(önerilmez — ama ölçüldü)*
"X yıldan kısa = işgal, uzun = fetih/kalıcı" kuralı bugünkü kayıtları şöyle böler:
```
eşik     işgal penceresi KISA (geçici kalır)  UZUN (kalıcıya döner)  s: dönemi eşikten kısa
1 yıl                 24                           290                       868
2 yıl                 51                           263                     1 090
3 yıl                 71                           243                     1 380
5 yıl                100                           214                     1 975
10 yıl               175                           139                     3 011
```
Yani 5 yıllık eşikte **314 işgal penceresinin 214'ü "kalıcı" ilan edilir** —
**atlasın kendi verisinden iki örnek** (`isg:` pencereleri, veride birebir okundu):
Mısır `{f:"1882-09-13", t:"1914-12-18", d:"ingiltere"}` = 32 yıl · Bosna
`{f:"1878-07-29", t:"1908-10-05", d:"avusturya", kaynak:"berlin-antlasmasi"}` = 30 yıl.
İkisi de kaynakta **işgal**tir (Bosna'da egemenlik 1908'e kadar Osmanlı'dadır; ilhak
o gün olmuştur) ve süre eşiği ikisini de "kalıcı/fetih" kovasına atardı. Ayrıca aynı eşik
sahiplik tarafında 1 975 dönemi "işgal"e çevirir. **Veri maliyeti en yüksek, kaynak
uyumu en düşük seçenek.**
📌 C'nin savunulabilir tek biçimi: eşik **sınıf** değil **ETİKET** üretsin — "kısa
süreli işgal (<1 yıl)" 24 pencere, "uzun süreli işgal (≥10 yıl)" 139 pencere gibi.
Bu, A'nın üstüne bedelsiz eklenebilir (0 kayıt dokunulur, süre zaten veride).

---

## 5. ÖLÇMEDİKLERİM (açıkça)
```
· "işgal kelimeli madde ↔ isg: penceresi" kesişimi YIL düzeyinde ölçüldü, GÜN
  düzeyinde değil: 54 "karşılıksız" maddenin kaçı gerçek boşluk, kaçı yıl kaymasi
  ÖLÇÜLMEDİ.
· Kronoloji kayıtları düzenli ifadeyle sayıldı (dosyalar elle yazılıyor); sayılar
  ALAN sayımıdır. `b:` alanı olan blok = madde sayıldı (7 146).
· `s:` dönem süreleri ham sayımdır; aynı yerin ardışık dönemleri birleştirilmedi.
· Hangi maddenin hangi sınıfa gireceği BAŞLIK KALIBINDAN türetildi (ilk eşleşen
  terim). Tek tek okunmadı — A uygulanırsa 151 kaydın gözden geçirilmesi gerekir.
· TDV'de "ilhak" maddesi YOK (arama yapıldı, sonuç: 1 çapraz gönderme). İlhakın
  hukukî tanımı için TDV DIŞI kaynak gerekti; Lahey 1907 md. 42 metni ICRC'nin
  resmî veritabanından okundu. Türk hukuk doktrininden ayrıca kaynak TARANMADI.
· "gecici-isgal" künye türündeki 17 kayıt tek tek okunmadı (bu türün A ile ilişkisi
  ayrı bir iş).
```

## 6. Dosyalar
```
denetim/ARAC-TERIM-STANDART-0070.py   YENİ — ölçüm aleti (yalnız okur)
denetim/OLCUM-TERIM-0070.json         YENİ — ham ölçüm
denetim/TERIM-STANDART-0070.md        YENİ — bu belge
```
`data/`, `js/`, `css/`, `arac/`, `index.html` **DEĞİŞTİRİLMEDİ**.
