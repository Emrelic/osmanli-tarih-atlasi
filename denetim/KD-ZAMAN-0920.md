# KD-ZAMAN-0920 — Değişmez 3'ün zaman ayağı: ölçüm, sınıflandırma, `kd:` partisi

Oturum: KD-ZAMAN-0920 (Opus) · 20 Eylül 2026 · sevk M-4752 (1.MURAT)
Dosya yetkisi: `data/yerlesimler*.js` **yalnız `kd:` alanı** + bu dosya.

---

## 1. TABAN ÖLÇÜM (kendi ölçtüğüm, `denetle.py`nin kendi kolu)

`denetle.degismez3` ve `denetle.degismez3z` doğrudan çağrıldı (3921 kayıt, 6 kesit:
1300/1400/1500/1600/1700/1800-06-15).

| Ölçü | Değer |
|---|---|
| ZAMANSIZ çelişki (`m:` ile) | **489** |
| ZAMANLI çelişki (`kd_gun` ile) | **483** |
| `kd:` taşıyan kayıt | 192 (`VERI-YAPISI.md`: 175'i tek dönemlik = türetilmişin aynısı) |
| `m:` taşıyan kayıt (çelişki evreni) | **827** |
| çelişki üreten ayrı yerleşim | **262** |
| kesit dağılımı | 1300:150 · 1400:158 · 1500:79 · 1600:30 · 1700:31 · 1800:35 |

489 sayısı sevkte yazılan değerle **birebir tuttu** (M-ALANI-0920 sonrası taban).
Fark 489−483 = 6, elle yazılmış çok dönemli `kd:`lerin kazancı — doğru yönde.

---

## 2. SINIFLANDIRMA — ve ölçütün SINIRI

Çelişki üçlüsü (kesit, yerleşim, merkez) için çiftin 6 kesitteki uyum profili çıkarıldı
(`UYAR` / `UYMAZ` / `TANIMSIZ`).

| Sınıf | Tanım | Çelişki | Çift |
|---|---|---|---|
| **A** | bağ ufkun HİÇBİR kesitinde geçerli değil (`UYAR`=0) | **34** | 9 |
| **B** | bağ bazı kesitlerde geçerli, bazılarında değil | **449** | 253 |

🔴 **Üçüncü sayı — "gerçek eksen kusuru" — BU ÖLÇÜTLE AYRIŞMIYOR, ölçülemedi.**
Gerekçe ölçülebilir: `degismez3z`in çelişki saydığı her üçlüde `y` ile `m` **tanım gereği**
farklı devlettedir (aynı olsa çelişki değil). Yani "merkez o tarihte başkaydı" (zaman
penceresi) ile "sahiplik tarihi yanlış" (eksen kusuru) **aynı imzayı üretir**. Ayırt etmek
kaynak işidir, ölçüm işi değil.

⚠️ İlk denediğim vekil ölçüt ("yakın çift + bağ baskın geçerli ⇒ eksen kusuru adayı")
113 üçlü verdi ve **YANLIŞTI**: listenin başında Söğüt→Bursa (1300, OSMANLI/bizans),
Bilecik→Bursa, İnegöl→Bursa var — bunlar verinin DOĞRU olduğu, yalnız `m:`in sonraki
devrin bağı olduğu klasik zaman penceresi vakaları. Vekil ölçüt rapora hüküm olarak
**girmedi**; burada yalnız "denendi, çürüdü" diye duruyor (`CLAUDE.md §11`: ölçüm doğru,
çıkarım yanlış).

⇒ Bu turda eksen kusuru oranı, kaynağa bakılan 15 kayıtlık örnek küme üzerinden
raporlanır (§4), bütün evrene genellenmez.

---

## 3. ÖNGÖRÜ — ölçümden ÖNCE yazıldı

**Sınav anı:** parti 1'in `kd:` kayıtları yazıldıktan sonra `denetle.degismez3z(girdi.yukle())`
yeniden koşturulur. **Evren:** aynı 6 kesit, aynı 3921 kayıt.

**Parti 1 kümesi (15 kayıt, bugün 77 çelişki taşıyor):**
Yedi Ada + Epir + Otranto (9): Otranto 6 · Korfu 6 · Zaklise 6 · Paksos 6 · Kefalonya 5 ·
İthaki 5 · Ayamavra 4 · Butrint 4 · Parga 4 — hepsinin `m:`i `Yanya`
Körfez (4): Lahsa 5 · Katîf 5 · Ukayr 5 · Cübeyl 5 — hepsinin `m:`i `Basra`
Kızıldeniz (1): Kerene 6 — `m:`i `Sevâkin`
Ege (1): Çuha Adası (Kythira) 5 — `m:`i `Mora (Tripoliçe)`

**ÖNGÖRÜ: 483 → 406 (−77).** Yani bu 15 kaydın çelişkilerinin TAMAMININ kalkmasını
bekliyorum; çünkü hiçbiri çelişkili kesitlerde ilgili merkeze idarî olarak bağlı değildi
(bağlı olduğu dönemler dar ve o kesitlere düşmüyor).

**Tutmazsa ne demek:** −77'den AZ düşerse ya bir kaydın Osmanlı penceresi kesite denk
geliyordur (o zaman `m:` o pencerede GEÇERLİ ve çelişki eksen kusurudur), ya `kd:`
penceresi yanlış yazılmıştır. Her iki hâl de bildirilir.
**ZAMANSIZ sayı (489) DEĞİŞMEMELİ** — `m:` alanına dokunulmuyor; değişirse yetki dışına
çıkılmış demektir.

---

## 3b. ÖNGÖRÜNÜN DÜZELTİLMESİ — kaynak taramasından SONRA, ölçümden ÖNCE

Kaynak taraması 15 kaydın **3'ünde `bulunamadı` ile bitti** (§4c). Sevk "kaynağı olmayan
yerleşimi BOŞ bırak" dediği için bu üçüne `kd:` YAZILMADI.

**Düzeltilmiş öngörü: 483 → 422 (−61).** (İlk öngörü −77 idi; fark = yazılmayan 3 kaydın
çelişkisi: Kerene 6 + Ukayr 5 + Cübeyl 5 = 16.) Düzeltme ÖLÇÜMDEN ÖNCE yazıldı ve
gerekçesi ölçüm değil, kaynak yokluğudur.

---

## 4. KAYNAK TARAMASI VE YAZILAN `kd:` KAYITLARI (PARTİ 1)

Hepsi TDV İslâm Ansiklopedisi (`CLAUDE.md §4`). Gövde, `denetim/ARAC-KITA13-TDVPASAJ-0913.py`
ile okundu (küçük model kullanılmadı, cümle bağlamıyla okundu).

### 4a. Yedi Ada + Epir + Otranto — `m:"Yanya"` idi, dokuzunda da YANLIŞ

| Kayıt | Kaynak cümlesi (TDV) | Yazılan `kd:` |
|---|---|---|
| **Korfu** | `korfu`: "Korfu tarih boyunca Yunan, Roma, Bizans ve **Venedik (1386-1797)** hâkimiyetinde kaldı"; 1537 kuşatması sonuçsuz | tek pencere `1281→1923 k:0 m:null` |
| **Paksos** | `yedi-ada-cumhuriyeti`: "**Korfu ve Pakso 1386'da kesin biçimde** Venedikliler'in idaresine girdi" | tek pencere `k:0 m:null` |
| **Zaklise** | `yedi-ada-cumhuriyeti`: Gedik Ahmed Paşa "Ayamavra, Kefalonya ve **Zanta**'yı fethetti (884/1479)" | 1479 öncesi + 1482 sonrası `k:0 m:null`; fetih penceresi BOŞ |
| **Kefalonya** | aynı cümle | 1479 öncesi + 1500-12-24 sonrası `k:0 m:null` |
| **İthaki** | — (TDV 1479 listesinde adı GEÇMİYOR; Kefalonya ile aynı pencereyi taşıyor) | Kefalonya ile aynı kalıp |
| **Ayamavra** | `ayamavra`: "Osmanlı hâkimiyeti döneminde (1479-1684) **Karlı-ili sancağının bir kazası**"; "1718'de Pasarofça ile ada Venedik'e terkedildi, 1797'ye kadar onların elinde kaldı" | 1479-1684 `k:3 m:null`, dışı `k:0 m:null`; 1715-1718 ikinci Osmanlı dönemi BOŞ |
| **Çuha Adası** | `yedi-ada-cumhuriyeti`: Çuka Yedi Ada'nın biri, "eski **Venedik** adaları" | 1715 öncesi + 1718 sonrası `k:0 m:null` |
| **Otranto** | `otranto-seferi`: "Otranto, Osmanlı birliklerinin burayı boşaltması üzerine elden çıktı (**10 Eylül 1481**)"; "Otranto'daki Osmanlı hâkimiyeti sadece on üç ay sürdü" | 1480-08-11 öncesi + 1481-09-10 sonrası `k:0 m:null` |
| **Butrint** | `tepedelenli-ali-pasa`: "(1799) … **Ali Paşa, Butrinto'yu zaptetti**"; `yanya`: Tanzimat sonrası "bütün Epir'i … içine alan **Yanya vilâyeti**" | 1798-10-23→1912-11-28 `k:4 m:"Yanya"` — **`m:"Yanya"` burada DOĞRU**; dışı `k:0 m:null` |
| **Parga** | `tepedelenli-ali-pasa`: "**Parga** İngilizler'e teslim oldu ve **Ali Paşa'nın idaresine ancak 1819'da** terkedildi" | 1819-05-10→1913-11-14 `k:4 m:"Yanya"`; dışı `k:0 m:null` |

🔴 **Ayamavra'nın merkezi atlasta YOK:** kaynak "Karlı-ili sancağı" diyor, o sancağın merkezi
(`Angelokastron` / Karlıeli) `data/yerlesimler*.js`te kayıtlı değil. `m:` bir yerleşim adına
BİREBİR eşleşmek zorunda olduğu için **`m:null` yazıldı, uydurma ad YAZILMADI.** Nokta
açılınca bağlanmalı — açık borç.

### 4b. Körfez — `m:"Basra"` idi, penceresi var

| Kayıt | Kaynak cümlesi (TDV) | Yazılan `kd:` |
|---|---|---|
| **Lahsa** | `lahsa`: "Osmanlı Devleti tarafından hâkimiyet altına alınarak **Basra beylerbeyiliğine bağlandı (1547)**" · "**Muhtemelen 1553'ten sonra beylerbeyiliğe yükseltilen** Lahsâ" · "Midhat Paşa bölgeyi **Necid sancağı adı altında Basra'ya bağladı** … (1871)" | 1550→1553 `k:2 m:"Basra"` · 1553→1670 **`k:1 m:null`** (kendi beylerbeyiliği) · 1871→1913 `k:2 m:"Basra"` |
| **Katîf** | `katif`: "Katîf **1555'te yeni kurulan Lahsâ (Ahsâ) eyaletine bağlandı**" · "Önceleri **Basra'ya bağlanan** Katîf **1875'te kaza** merkezi haline getirildi ve **Necid sancağına** bağlandı" · `necid`: "**merkezi Ahsâ olmak üzere** Necid mutasarrıflığı teşkil edildi" | 1555→1670 `k:2 m:"Lahsa"` · 1871→1875 `k:2 m:"Basra"` · 1875→1913 `k:3 m:"Lahsa"` |

📌 **Pencere UÇLARI kaydın kendi `d:`/`s:` ucundan devralındı, gün KAYNAK DEĞİLDİR**
(`D210`/`D213`). TDV'nin verdiği bilgi **merkez ve kademedir**; uç günü atlasın ekseninden
alınmıştır ve bu satırla bildirilmiştir. Kaynakla eksen arasındaki gün farkları §4d'de.

### 4c. KAYNAK BULUNAMADI — `kd:` YAZILMADI (3 kayıt, 16 çelişki duruyor)

- **Kerene** (Eritre, `m:"Sevâkin"`): TDV aramasında **0 madde başlığı, 0 içerik eşleşmesi**
  ("Kerene" ve "Keren"). Kapsayıcı `habes-eyaleti` maddesi eyaletin "bugünkü **Eritre**"yi
  kapsadığını söylüyor, ama **kasabanın adını anmıyor** — bölgeden şehre hüküm taşımak yasak
  (`CLAUDE.md §4`). `bulunamadı`.
- **Ukayr (Uceyr)** (`m:"Basra"`): TDV'de madde yok; `lahsa` ve `pazar` maddelerinde **yalnız
  ad olarak** geçiyor ("Katîf ve Ukayr sahillerine asker…"), idarî bağlılık cümlesi yok.
- **Cübeyl** (Körfez, `m:"Basra"`): 🔴 **TUZAK ②** — `islamansiklopedisi.org.tr/cubeyl` CANLI
  ama o madde **Lübnan'daki Byblos**tur, bu kayıt (lat 27.0 civarı, Körfez) **Cubeyl/Jubail**.
  Yanlış maddeyi kaynak göstermemek için `bulunamadı`.

### 4d. EKSEN BULGULARI — benim kalemim DEĞİL, sevk edilmeli

Bunlar `kd:`nin çözemeyeceği, `d:`/`s:` ekseninde duran sorulardır (`CLAUDE.md §3`'ün
"~%1 eksen kusuru" sınıfı). **Hiçbirine dokunulmadı.**

1. 🔴 **Yedi Ada 1800 — 7 kaydı birden ilgilendirir.** TDV `yedi-ada-cumhuriyeti`:
   "**Osmanlı ve Rusya himayesinde 1800 yılında kurulan** Yedi Ada Cumhuriyeti … Korfu,
   Kefalonya, Zanta, Ayamavra, Çuka, İtaki ve Pakso adalarından oluşmaktaydı"; Osmanlı adı
   **Cezâyir-i Seb'a-i Müctemia Cumhuru**. Atlasta bu yedi kaydın hepsi 1797-10-17 → 1815-11-05
   arasında **`fransa-cumhuriyet`**. 1800-1807 aralığı kaynağa göre Fransız değil,
   Osmanlı-Rus himayesinde özerk bir cumhuriyettir. Devlet künyesi de gerekebilir.
2. **1479 fethinin bitişi:** TDV `yedi-ada-cumhuriyeti` "Fâtih'in ölümü üzerine bu hâkimiyet
   son buldu" (1481) diyor; atlas Zaklise'de 1482-01-01, Kefalonya ve İthaki'de **1500-12-24**
   yazıyor. 19 yıllık fark ölçülmedi, kaynak karşılaştırması gerekir.
3. **Lahsâ/Katîf'in Osmanlı'ya bağlanışı:** TDV `lahsa` **1547**, `katif` "1534'te bağlanmış
   oldu; ancak Osmanlılar burayla **1550'den itibaren** ilgilenmeye başladılar" diyor; atlas
   `d:` **1550-01-01**. Atlasın günü kaynağa DEĞİL, yuvarlağa dayanıyor görünüyor.
4. **Kerene ↔ Habeş eyaleti:** TDV `habes-eyaleti` Özdemir Paşa'nın "bugünkü Eritre ile
   Etiyopya'nın kuzeybatı bölgesini ele geçirdi"ğini yazıyor; atlasta Kerene 1281-1872
   kesintisiz `habesistan`. Kasaba taneciğinde kaynak yok, ama **soru açık**.

### 4e. ŞEMA BORCU — `kd:` "bilmiyorum" diyemiyor

`girdi.kd_gun` bir pencere BOŞLUĞUNDA da, `k:0 m:null` yazılmış bir pencerede de **aynı
(0, None)** döndürüyor. Yani *"bu tarihte Osmanlı idarî kademesinde değildi"* (ölçüm) ile
*"bu tarihteki kademesini bilmiyorum"* (bilgi yokluğu) **ayırt edilemiyor**. Bu turda
bilinçli olarak: **bilinen dışarıdalık → açık `k:0 m:null` pencere**, **bilinmeyen Osmanlı
dönemi → BOŞLUK** olarak yazıldı; ama ayrım veride değil, yalnız bu raporda duruyor.
`VERI-YAPISI.md`teki "elle yazılan `kd:` damgalanmalı" borcuyla aynı aileden.

---

## 5. SONUÇ ÖLÇÜMÜ — sınav

| Ölçü | Önce | Sonra | Öngörü |
|---|---|---|---|
| ZAMANLI çelişki (`kd_gun`) | 483 | **422** | 422 ✓ **TUTTU** |
| ZAMANSIZ çelişki (`m:`) | 489 | **489** | değişmemeli ✓ |
| `kd:` taşıyan kayıt | 192 | **204** | +12 ✓ |
| çelişki üreten ayrı yerleşim | 262 | **250** | −12 ✓ |

`py arac/denetle.py` tam koşu: **SONUÇ: temiz**; ilgili satır
`Değişmez 3z · zamansız (m:) 489 | zamanlı (kd:) 422 | gerçek kd: yazılı kayıt: 204`.
Dönem sağlığı 0 sıfır-uzunluk / 0 ters / 0 çakışma, konum denetimi 0 — yeni kusur açılmadı.

**Değişen dosyalar (yalnız `kd:` alanı eklendi, başka hiçbir alana dokunulmadı):**
`data/yerlesimler.js` (10 kayıt) · `data/yerlesimler_epir.js` (1) · `data/yerlesimler_ek_adalar.js` (1).

**Sıradaki parti için hazır liste** (bugün en çok çelişki üretenler, `kd:` yazılmamış):
Kerene 6 · İstendil (Tinos) 5 · Ukayr 5 · Cübeyl 5 · Uyvar 4 · Malatya 3 · Modon 3 ·
Anabolu 3 · Eğriboz 3 · Sakız 3 · Nakşa 3 · Andros 3 · Karpatos 3 · Anapa 3 · Sohum 3.
