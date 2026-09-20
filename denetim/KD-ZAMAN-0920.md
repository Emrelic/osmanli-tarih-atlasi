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

---

# PARTİ 2 — Ege/Mora adaları + Doğu serhaddi (12 kayıt, 39 çelişki)

## 6. ÖNGÖRÜ (parti 2) — ölçümden ÖNCE yazıldı

**Küme:** İstendil (Tinos) 5 · Uyvar 4 · Nakşa 3 · Eğriboz 3 · Modon 3 · Anabolu 3 ·
Malatya 3 · Rakka 3 · Batum 3 · Ahıska 3 · Sohum 3 · Sakız 3 = **39 çelişki**.
Hepsinin TDV'de DOĞRUDAN maddesi var (`istendil`, `sakiz`, `andros`, `karpatos` slugları
ÖLÜ — 302; İstendil ve Sakız kapsayıcı `cezayir-i-bahr-i-sefid` maddesinden karşılandı).

**Sınav anı:** `denetle.degismez3z` yeniden koşturulur, aynı evren.
**ÖNGÖRÜ: 422 → 383 (−39).** Yazılan `kd:` pencerelerinin hiçbiri kesitlerde YENİ çelişki
üretmemeli (yazılan her merkez, o kesitte kayıtla AYNI devlettedir — tek tek kontrol edildi):
Nakşa/Eğriboz/Sakız→Gelibolu · Modon/Anabolu→Mora · Sohum→Batum · Malatya→Maraş,
Rakka→Diyarbakır pencereleri 1600/1700/1800'de iki tarafı da OSMANLI bırakır.

## 7. PARTİ 2 KAYNAKLARI VE YAZILAN `kd:`

| Kayıt | TDV kaynağı (cümle) | Yazılan `kd:` özeti |
|---|---|---|
| **İstendil (Tinos)** | `cezayir-i-bahr-i-sefid`: "**Yalnız Tine adası 1715 yılına kadar alınamadı**" | 1715 öncesi + 1830 sonrası `k:0 m:null`; Osmanlı dönemi BOŞ (bağlılık cümlesi yok) |
| **Nakşa** | `naksa`: "Nakşa ve civar adaları bir **sancak** haline getirilip Süleyman Bey ilk sancak beyi tayin edildi" · "(1617) yine **doğrudan Kaptanpaşa'ya bağlandı**"; `cezayir-i-bahr-i-sefid`: "Sakız, **Nakşa** ve Mehdiye … sâlyâneli" · "**Eyaletin merkezi Gelibolu'ydu**" | 1281→1537 `k:0 m:null` · 1566→1830 `k:2 m:"Gelibolu"`; 1537-1566 dukalık dönemi BOŞ |
| **Eğriboz** | `egriboz`: "Venedikliler … **1470'e kadar**" · "Fetihten az sonra … **Eğriboz sancağı** kurulmuştu"; eyalet maddesi Eğriboz'u sancakları arasında sayar | 1470 öncesi `k:0 m:null` · 1470→1533 `k:2 m:null` · 1533→1829 `k:2 m:"Gelibolu"` · sonrası `k:0 m:null` |
| **Modon** | `modon`: "(**10 Ağustos 1500**) … Osmanlı ordusu … Modon'u ele geçirdi" · "**Mora sancak beyi** Hadım (Atik) Ali Paşa, bir okul ve … iki hamam yaptırdı" | 1500 öncesi + Venedik arası (1686-1715) `k:0 m:null` · Osmanlı dönemleri `k:3 m:"Mora (Tripoliçe)"` |
| **Anabolu** | `anabolu`: "**1389'da Venedikliler'in idaresi altına girdi**" · "**3 Ekim 1540** Osmanlı-Venedik antlaşması sonucu Osmanlılar'a bırakıldı. Ancak **Mora sancak beyi** Güzelce Kasım Paşa … teslim alabildi" | aynı kalıp |
| **Uyvar** | `uyvar`: "Uyvar Osmanlı idaresine girince **aynı adlı eyaletin merkezi** haline getirildi" | 1663 öncesi + 1685 sonrası `k:0 m:null` · 1663→1685 **`k:1 m:null`** (eyalet merkezi) |
| **Malatya** | `malatya`: "1517 tarihli … sancak listesinde … **Arap vilâyeti** içinde bir sancak" · "**1522'den itibaren Rûm-ı Hâdis** eyaletine" · "**1568**'den itibaren yeniden **Dulkadır**'a" · "bu tarihlerden XIX. yüzyıla kadar … **Maraş eyaleti** dahilinde" · "**1839-1845** arasında **Diyarbekir** eyaletine bağlı kazalar arasında" | 1281→1399 ve 1402→1516 `k:0 m:null` · 1588→1839 `k:2 m:"Maraş"` · 1839→1845 `k:3 m:"Diyarbakır"`; 1399-1402 (ilk Osmanlı dönemi) ve 1516-1588 (vilâyeti sık değişiyor) BOŞ |
| **Rakka** | `rakka`: "Rakka **923'te (1517)** Osmanlı topraklarına katılarak **Diyarbekir eyaletine bağlı bir sancak merkezi** haline getirildi" · "**994'te (1586) eyalet merkezine dönüştürülen** şehir" | 1516 öncesi `k:0 m:null` · 1516→1586 `k:2 m:"Diyarbakır"` · 1586→1839 **`k:1 m:null`** |
| **Batum** | `batum`: "Kanûnî … **ilk yılında Trabzon eyaletine bağlı bir sancak** olarak teşkilâtlandırıldı" · "**1568-1574** … **Erzurum**'un bir sancağı" · "**asrın sonlarında müstakil bir eyalet**" | YALNIZ 1281→1578 `k:0 m:null`; Osmanlı dönemi BOŞ — kaynak eksenle ÇELİŞİYOR (§7b-1) ve "asrın sonları" gün vermiyor |
| **Ahıska** | `ahiska`: "Bu tarihten sonra Ahıska yeni kurulan **Çıldır eyaletinin merkezi** haline getirildi. Ancak Çıldır'ın savaşlarda harap olması üzerine **Ahıska eyalet oldu**" | 1578 öncesi `k:0 m:null` · 1578→1829 **`k:1 m:null`** |
| **Sohum** | `sohum`: "**1578'de … Sohum eyaleti oluşturuldu**" · "**1580** … mülkî idaresi … kaldırılarak **Batum eyaletine bağlandı**" | 1578 öncesi `k:0 m:null` · 1578→1580 `k:1 m:null` · 1580→1810 `k:2 m:"Batum"` |
| **Sakız** | `cezayir-i-bahr-i-sefid`: "**Sakız adası da 1566 yılında** Cenova Cumhuriyeti'ne bağlı idarenin elinden alınarak **eyalete bağlanmıştı**" · "Eyalet, **1876'da Sakız ve Rodos en önemli merkez** olmak üzere…" | 1566 öncesi `k:0 m:null` · 1566→1694 ve 1695→1876 `k:2 m:"Gelibolu"` · 1876→1923 `k:1 m:null`; 1694-1695 Venedik arası BOŞ |

### 7b. PARTİ 2'NİN EKSEN BULGULARI — dokunulmadı

1. 🔴 **Batum 1520 ↔ 1578:** TDV `batum` "Kanûnî Sultan Süleyman'ın padişahlığının **ilk
   yılında** Trabzon eyaletine bağlı bir **sancak** olarak teşkilâtlandırıldı" (yani 1520) ve
   "XV. yüzyılın sonlarında Osmanlılar tarafından alınan Batum" diyor; atlasta Batum
   **1578-08-09**'a kadar `gurcistan`. **58 yıllık fark.** Bu yüzden Batum'un Osmanlı
   dönemine `kd:` YAZMADIM — eksen kararı verilmeden kademe yazmak kusuru katlar.
2. **Modon'un günü 1 gün kayık:** TDV "14 Muharrem 906'da (**10 Ağustos 1500**)"; atlas
   `d:` **1500-08-09**. Ölçüme etkisi yok, ama `d:` ucu kaynaktan bir gün geride.
3. **Nakşa Girit savaşında (1645-1669) Venedik kontrolüne girmiş** (TDV `naksa`); atlasta
   `d:` 1566→1830 kesintisiz. Pencere bölünmesi gerekebilir.
4. **Sakız'ın 1566 günü:** TDV yıl veriyor, atlas `d:` **1566-04-14** (gün). Gün kaynaksız.

---

# PARTİ 3 — Kiklad adaları (12 kayıt, 36 çelişki)

## 8. ÖNGÖRÜ (parti 3) — ölçümden ÖNCE

**Küme (hepsi 3'er çelişki):** Paros · Değirmenlik (Milos) · Kimolos · Murted (Kea) ·
Termiye (Kythnos) · Koçbaba (Serifos) · Sifnos · Sire (Syros) · Mikonos · Nio (İos) ·
Andros · Karpatos = **36 çelişki**. On birinin `m:`i `Rodos`, Andros'unki `İzmir`.
Hepsinin çelişkisi 1300/1400/1500 kesitlerinde, yani **Osmanlı öncesinde** (`d:` 1566-04-15'te,
Karpatos'ta 1537-10-01'de başlıyor).

**ÖNGÖRÜ: 383 → 347 (−36).**

## 9. PARTİ 3 KAYNAKLARI

🟢 **Asıl bulgu — `derya-beyi` maddesi iki adayı SANCAK olarak adlandırıyor:**
"Yönettikleri sancaklar ise Kıbrıs, Rodos, Sakız, Mora, **Andre**, Sığla, Midilli, İnebahtı,
Dimyat, Reşîd, İskenderiye, **Değirmenlik**, Mezistre, Karlı-ili, Eğriboz, Baf ve Nakşa idi."
(ayrıca: "Sâlyâneli sancaklardan olan Sakız, Nakşa ve Mehdiye'ye ise Girne, Baf, Magosa,
**Değirmenlik**, Ayamavra, Selânik, Dimyat, İskenderiye ve Limni sancakları dahil edilerek…")
⇒ **Değirmenlik (Milos)** ve **Andros (Andre)** Rodos'a/İzmir'e bağlı birer kaza değil,
**kendileri sancaktır** → `k:2, m:null`.

**Öteki on ada için Osmanlı dönemi BOŞ bırakıldı.** `naksa` maddesi "**Nakşa ve civar adaları**
bir sancak haline getirilip…" diyor; bu bir GRUP hükmüdür, adayı adıyla anmaz. Gruptan adaya
hüküm taşımak `CLAUDE.md §4`'ün yasakladığı desendir — `m:"Nakşa"` YAZILMADI, öneri olarak
burada duruyor.
📌 `para` slugu **TUZAK ②**: canlı ama madde **"para" (akçe)**; Paros'un maddesi orada DEĞİL.
`mikonos` aramasında 0 sonuç.

**Yazılan kalıp:** her kayıtta `{1281-01-01 → d: başlangıcı, k:0, m:null}` +
`{Osmanlı sonu → 1923-10-29, k:0, m:null}`; Değirmenlik ve Andros'ta ayrıca
`{1566-04-15 → 1830-02-03, k:2, m:null}`.

## 10. PARTİ 3 SONUCU

| Ölçü | Önce | Sonra | Öngörü |
|---|---|---|---|
| ZAMANLI çelişki | 383 | **347** | 347 ✓ **TUTTU** |
| ZAMANSIZ çelişki | 489 | **489** | değişmemeli ✓ |
| `kd:` taşıyan kayıt | 216 | **228** | +12 ✓ |
| çelişki üreten ayrı yerleşim | 238 | **226** | −12 ✓ |

`py arac/denetle.py`: **SONUÇ temiz**.

### ÜÇ PARTİNİN TOPLAMI
**483 → 347 · −136 çelişki (%28,2)** · 36 kayda `kd:` yazıldı (192 → 228) ·
çelişen ayrı yerleşim 262 → 226 · ZAMANSIZ sayı 489'da sabit (m:'ye hiç dokunulmadı).
Üç partinin üçünde de öngörü ölçümden önce yazıldı ve **üçü de birebir tuttu**.

---

# PARTİ 4 — dağınık küme (8 kayıt, 24 çelişki)

## 11. ÖNGÖRÜ (parti 4) — ölçümden ÖNCE

**Küme:** Zeyla · Koron · Şavşat · Posof · Anapa · Çehrin (Çigirin) · Egina (Aegina) ·
Kaşot (Kasos) = **24 çelişki**. **ÖNGÖRÜ: 347 → 323 (−24).**

Parti 4 **8 kayıtla kapandı, 10-15 bandının altında** — çünkü bandı doldurmak için
kaynaksız kayıt yazmak gerekiyordu. Sıradaki adaylar (Hanak, Hacıbey/Odessa, Tarki,
Derbend, Kuba, Yamurgi, İstanbulya, Fornoz, İpsara, Karistos, Sokna) **kaynak
bulunamadığı için dışarıda bırakıldı**, §12b'de tek tek sebebiyle.

## 12. PARTİ 4 KAYNAKLARI

| Kayıt | TDV kaynağı | Yazılan |
|---|---|---|
| **Zeyla** | `zeyla`: "iskelesini **966'da (1559)** Osmanlı Devleti'ne bağlandı ve … **Habeş beylerbeyiliğinin bir sancak merkezi** haline getirildi" | 1559 öncesi + 1884 sonrası `k:0 m:null` |
| **Koron** | `koron`: "Bayezid kumandasındaki Osmanlı ordusu … Modon Kalesi'ni fethedip … **Koron ve Navarin'i de teslim aldı**" (1500) | 1500 öncesi · 1685-1715 Venedik arası · 1828 sonrası `k:0 m:null` |
| **Şavşat** · **Posof** | `cildir-eyaleti`: "**1551**'de … Erzurum Beylerbeyi İskender Paşa … Böylece Atabeglik toprakları Çıldır bölgesine kadar **Osmanlı hâkimiyetine girmiş oldu**" · "**9 Ağustos 1578** … Çıldır Savaşı'nın hemen ardından … fethi tamamlanmış oldu"; madde başlığı Çıldır eyaletini "bugünkü Çıldır, Ardanuç, **Şavşat**, Oltu yöresiyle … Ahıska ve civarı" diye tanımlıyor, 1574 cümlesi **Posof**'u anıyor | 1551 öncesi + 1878 sonrası `k:0 m:null` |
| **Anapa** | `anapa`: Ceneviz iskelesi → "Kırım Hanlığı'nın Osmanlı himayesi altına girmesinin ardından … **Kırım hanlarının nüfuz alanı**" → XVIII. yy son çeyreğinde Osmanlı istihkâmı | 1781 öncesi + 1829 sonrası `k:0 m:null` |
| **Çehrin** | `cehrin-seferi`: "Beyliğin **merkezi Çehrin'di**" · 1672 Kamaniçe sonrası Doroşenko'ya geçti · 1678 seferi | 1678 öncesi + 1699 sonrası `k:0 m:null` |
| **Egina** · **Kaşot** | `barbaros-hayreddin-pasa`: "1538 baharında … **Paros, Antiparos, Skyros, Egina (Ekin), Naksos (Nakşa), Andros, Scarpanthos (Kerpe) ve Kasos (Kaşot)** adaları ile … yirmi sekiz ada ve iki kaleyi Osmanlı idaresine kattı" | fetih öncesi + Osmanlı sonrası `k:0 m:null` |

🟢 **Bu maddede adalar TEK TEK anılıyor** — grup hükmü değil. Parti 3'te `m:"Nakşa"`
yazmama gerekçem (grup hükmü) burada geçerli değil, ama **hangi sancağa bağlandıkları**
yine söylenmiyor; bu yüzden Osmanlı pencereleri yine BOŞ.

### 12b. Kaynak bulunamayanlar (kd: yazılmadı)
- **Hacıbey (Odessa)**: TDV aramasında "Hacıbey" yalnız besteci **Üzeyir Hacıbeyli**
  maddesine götürüyor — şehir maddesi YOK.
- **Tarki (Tarku)**: kaydın kendi `kaynak:` alanı zaten "`tarki` slugu ÖLÜ; TDV `dagistan`
  maddesinde Tarki adı ARANDI, GEÇMİYOR" diyor.
- **Derbend** ve **Kuba**: TDV'de maddeleri VAR (Derbend 3 madde başlığı, Kuba 10) ama
  **sluglar ayrıştırılamadı** — `derbend`, `derbend--sehir`, `derbent`, `kuba`,
  `kuba--sehir` hepsi 302; arama sayfasının bağlantıları JS ile geliyor, çıkarıcı
  okuyamıyor. **Ölçülemedi ≠ yok** — sıradaki oturuma açık kalem.
- **Hanak** (Çıldır bölgesi), **Yamurgi (Amorgos)**, **İstanbulya (Astipalya)**,
  **Fornoz (Fourni)**, **İpsara (Psara)**, **Karistos**, **Sokna**: hiçbir TDV maddesi
  adlarını anmıyor (Barbaros maddesinin ada listesinde de yoklar).

## 13. PARTİ 4 SONUCU

| Ölçü | Önce | Sonra | Öngörü |
|---|---|---|---|
| ZAMANLI çelişki | 347 | **323** | 323 ✓ **TUTTU** |
| ZAMANSIZ çelişki | 489 | **489** | değişmemeli ✓ |
| `kd:` taşıyan kayıt | 228 | **236** | +8 ✓ |
| çelişki üreten ayrı yerleşim | 226 | **218** | −8 ✓ |

`py arac/denetle.py`: **SONUÇ temiz**.

## 14. DÖRT PARTİNİN TOPLAMI

| | taban | bugün |
|---|---|---|
| ZAMANLI çelişki (`kd_gun`) | 483 | **323** — **−160 (%33,1)** |
| ZAMANSIZ çelişki (`m:`) | 489 | 489 (değişmedi, `m:`ye dokunulmadı) |
| `kd:` taşıyan kayıt | 192 | **236** (+44 kayıt) |
| çelişki üreten ayrı yerleşim | 262 | **218** |

**Dört partinin dördünde de öngörü ölçümden önce yazıldı ve dördü de birebir tuttu**
(−61 · −39 · −36 · −24). Dördünde de `denetle.py` tam koşusu temiz.

**Değişen veri dosyaları:** `data/yerlesimler.js` (41 kayıt) · `data/yerlesimler_ek26.js` (2) ·
`data/yerlesimler_epir.js` (1) · `data/yerlesimler_ek_adalar.js` (1) — **hepsinde yalnız
`kd:` alanı eklendi**, `data/` commit EDİLMEDİ (Oturum 0'ın).

### Kalan borcun şekli
Kalan 323 çelişkinin üreticileri artık **uzun kuyruk**: en büyüğü Kerene 6, sonra Ukayr 5
ve Cübeyl 5 — üçü de kaynak bulunamadığı için boş; gerisi 3'er ve 2'şer. Yani kolay
kümeler bitti; bundan sonrası **kayıt başına ayrı kaynak araması** demektir. Verimli
devam yolu, parti 3-4'te işe yarayan **kapsayıcı madde** tekniğidir: tek bir eyalet/kurum
maddesi (`cezayir-i-bahr-i-sefid`, `derya-beyi`, `cildir-eyaleti`,
`barbaros-hayreddin-pasa`) bir düzine kaydı birden karşılıyor.

---

---

# PARTİ 5 — Kafkas/Çoruh + Çukurova (11 kayıt, 33 çelişki)

## 15. ÖNCE: ALET KUSURU DÜZELTİLDİ — "slug ayrıştırılamadı" YANLIŞTI

Parti 4'te Derbend ve Kuba'yı "TDV'de maddesi var ama slugu ayrıştıramadım" diye
`ölçülemedi` kovasına koymuştum. **Sebep TDV değil, benim çıkarıcımdı:** TDV arama
sonuçlarının bağlantıları **TIRNAKSIZ** yazılıyor — `<a href=/artvin>` — ve regex'im
yalnız `href="/..."` arıyordu. Düzeltilince slug anında çıktı:
`/derbend--dagistan` · `/kuba--azerbaycan` · `/artvin`.

Alet kalıcı: **`denetim/ARAC-KD-ZAMAN-SLUG-0920.py`** — arama kelimesinden madde
başlığı/içerik sayısını ve bütün madde sluglarını basar; eşadlı maddelerin `--` ekini
(TDV tuzağı ②) görünür kılar.
📌 Ders ailesi: *"ölçülemedi ≠ yok"* — ve bu kez ölçülemezliğin sebebi aletti.
Parti 4'ün §12b'sindeki Derbend/Kuba satırı bu partide **kapandı**.

Aynı aletle kapanmayanlar da netleşti: **Tarki** (madde başlığı 0) · **Kerene**
(0 başlık / 0 içerik) · **Karistos, Sokna, Amorgos, Psara** (0/0) — bunlar gerçekten
TDV'de yok. **Hacıbey (Odessa)**: "Odesa" aramasının tek maddesi `/akkirman`, onun
gövdesinde de "Hacıbey" GEÇMİYOR ⇒ `bulunamadı` kalıyor.

## 16. ÖNGÖRÜ (parti 5) — ölçümden ÖNCE

**Küme:** Derbend · Kuba · Artvin · Hopa · Sarp · Borçka · Hulo (Acara) · Hanak ·
Dörtyol · Erzin · Yumurtalık = **33 çelişki** (hepsi 1300/1400/1500 kesitlerinde,
yani Osmanlı öncesinde). **ÖNGÖRÜ: 323 → 290 (−33).**

## 17. PARTİ 5 KAYNAKLARI

| Kayıt | TDV kaynağı | Yazılan `kd:` |
|---|---|---|
| **Derbend** | `derbend--dagistan`: "**1538**'de Şirvan doğrudan Safevî hâkimiyetine girince Müskür ile birlikte **Derbend Şirvan'a bağlı bir idarî bölge** haline getirildi" · "**5 Ekim 1578**'de … bağlılık arzettiler" | 1538 öncesi `k:0 m:null` · 1538→1578 `k:3 m:"Şamahı"` (Şirvan merkezi) · 1578→1607 **`k:1 m:null`** (Derbend eyaleti) · sonrası `k:0 m:null` |
| **Kuba** | `kuba--azerbaycan`: "Osmanlı belgelerinden Kuba'nın **XVI. yüzyılda Derbend eyaletine bağlı sancaklardan biri** olduğu anlaşılmaktadır" | 1578 öncesi `k:0 m:null` · 1578→1607 `k:2 m:"Derbend"` — **`m:` DOĞRUYMUŞ, yalnız penceresi yoktu** · sonrası `k:0 m:null` |
| **Artvin** | `artvin`: "1536-1537 harekâtı sırasında … **Livâne sancağı kurularak Erzurum beylerbeyiliğine bağlandı**" · "**1579**'da Çıldır eyaletinin teşkilinden sonra da Artvin, bu eyalete bağlanan **Livâne sancağının merkezi** oldu" · "Edirne Muahedesi ile Ahıska Ruslar'a terkedilince … Artvin, **Trabzon eyaletinin Batum sancağına bağlı** bir kazanın (Livâne kazası) merkezi oldu" | 1551 öncesi `k:0 m:null` · 1551→1579 `k:2 m:"Erzurum"` · 1579→1829-09-14 `k:2 m:"Ahıska"` · 1829→1878 `k:3 m:"Batum"` · sonrası `k:0 m:null` — **dört pencereli, `kd:`nin tasarlandığı vaka** |
| **Hopa · Sarp · Borçka · Hanak · Hulo** | `cildir-eyaleti` + `artvin`: bölgenin fethi 1536-37 / 1549-1551 / 1578 | yalnız Osmanlı öncesi + 1878 sonrası `k:0 m:null`; Osmanlı penceresi BOŞ (TDV bu kasabaları adıyla anmıyor) |
| **Dörtyol · Erzin · Yumurtalık** | `cebelibereket`: "daha **1568 yılından itibaren Halep eyaletine bağlı, merkezi Payas olan Üzeyr sancağı** bulunuyordu" · "**1890 yılında Adana vilâyetine bağlanan** ve Cebelibereket adı verilen sancak…" | 1516 öncesi + 1920 sonrası `k:0 m:null`; Osmanlı penceresi BOŞ |

🔴 **Çukurova bulgusu (eksen değil, KADEME):** üçünün de `m:`i **`Adana`**; oysa kaynak
bu yöreyi 1568'den 1890'a kadar **Üzeyr/Cebelibereket sancağında (merkez Payas, Halep
eyaleti)** gösteriyor. Yani `m:"Adana"` ancak **1890 sonrası** için doğru olabilir.
`m:"Payas"` yazamadım: atlasta **Payas kaydı yok** (`m:` bir yerleşim adına birebir
eşleşmek zorunda). Nokta açılırsa üç kayıt birden bağlanmalı — açık borç.

## 18. PARTİ 5 SONUCU

| Ölçü | Önce | Sonra | Öngörü |
|---|---|---|---|
| ZAMANLI çelişki | 323 | **290** | 290 ✓ **TUTTU** |
| ZAMANSIZ çelişki | 489 | **489** | değişmemeli ✓ |
| `kd:` taşıyan kayıt | 236 | **247** | +11 ✓ |
| çelişki üreten ayrı yerleşim | 218 | **207** | −11 ✓ |

`py arac/denetle.py`: **SONUÇ temiz**.

### BEŞ PARTİNİN TOPLAMI
**483 → 290 · −193 çelişki (%40,0)** · 55 kayda `kd:` yazıldı (192 → 247) ·
çelişen ayrı yerleşim 262 → 207 · ZAMANSIZ 489'da sabit.
**Beş partinin beşinde de öngörü ölçümden önce yazıldı ve beşi de birebir tuttu**
(−61 · −39 · −36 · −24 · −33).

## 19. MODON'UN GÜNÜ — verilen dar yetkiyle düzeltildi

1.MURAT M-4780 ile şu sınıfta veri yetkisi verdi: *"kaynak GÜN veriyorsa veriye YAZ ve
bildir"*. TDV `modon`: "II. Bayezid'in bizzat kumanda ettiği Osmanlı ordusu, 14 Muharrem
906'da (**10 Ağustos 1500**) … Modon'u ele geçirdi." Atlas **1500-08-09** yazıyordu.
⇒ `data/yerlesimler.js` Modon kaydında **dört yerde** (`s:` ucu, `d:` başı, `kd:` iki uç)
`1500-08-09` → `1500-08-10`. `denetle.py` sonrası: Değişmez 2 **590 kırılma, 0 açık**;
SONUÇ temiz.
📌 **Dokunmadıklarım (bildiriyorum):** ① `data/olaylar_ek.js`teki "Modon ve Koron'un
fethi" maddesi hâlâ `t:"1500-08-09"` — o dosya benim kalemim değil (senkron ±30 gün
kuralını bozmuyor). ② **Koron'un günü de 1500-08-09** duruyor; TDV `koron` Koron'un
Modon'dan **SONRA** alındığını söylüyor ama **gün vermiyor** — dar yetki gün verilen
sınıfa mahsus olduğu için dokunmadım. Bugünkü hâliyle Koron, Modon'dan bir gün ÖNCE
alınmış görünüyor.

---

---

# PARTİ 6 — kuyruk (6 kayıt, 16 çelişki)

## 20. ÖNGÖRÜ (parti 6) — ölçümden ÖNCE

**Küme:** Mâku 3 · Ahılkelek 3 · Babadağı 3 · Luristan 3 · Bergama 2 · Denizli 2 =
**16 çelişki**. **ÖNGÖRÜ: 290 → 274 (−16).**

Parti 6 **6 kayıt** — kuyruk gerçekten inceldi ve 1.MURAT'ın "bulunamadı kovası
büyürse dur" ölçütü işliyor: bu tur elenenler **Sokna, Vaddân, Zilla** (TDV'de
"Sokna" ve "Vaddân" kelimeleri **hiçbir maddenin gövdesinde bile** geçmiyor — 0/0),
**Selmâs** (0 madde başlığı), **Anamur** (tek sonucu `/alakopru`, bir köprü maddesi).

## 21. PARTİ 6 KAYNAKLARI

| Kayıt | TDV kaynağı | Yazılan `kd:` |
|---|---|---|
| **Mâku** | `maku`: "**1574** yılında Osmanlı Devleti, Mahmûdî Kürt kabilesi reisi İvaz Bey'i Mâkû'yu İranlılar'dan alıp burada bir kale yapmakla görevlendirdi" · "İvaz Bey'in **ocaklığına** verilen Mâkû'ya **1605**'te Safevî Şahı…" | Osmanlı dışı üç pencere `k:0 m:null`; Osmanlı pencereleri BOŞ (`m:"Van"` kaynakta YOK) |
| **Ahılkelek** | `cildir-eyaleti`: "1551'de … İskender Paşa … **Ahılkelek** ve Ahıska civarına kadar ilerledi"; `ahiska`: "**Ahıska ve Ahılkelek sancakları**" | 1551 öncesi + 1829 sonrası `k:0 m:null` |
| **Babadağı** | `babadagi`: "Babadağı ve çevresi … **Osmanlı hâkimiyetine girdi (819/1416)**" · "**Özü eyaletinde paşa hassı bir voyvodalık** olan şehir" | 1393 öncesi `k:0 m:null` · **1593→1788-12-17 `k:3 m:"Özi"`** — `m:` DOĞRU ama penceresi yoktu; 1788'de Özi Rusya'ya geçtiği hâlde Babadağı 1878'e kadar Osmanlı kalıyordu, çelişki oradan doğuyordu |
| **Luristan** | `luristan`: "**998'de (1590)** İstanbul'da yapılan antlaşmaya göre **Osmanlı idaresine bağlanan** Luristan'ı Şah I. Abbas Safevîler'e tam olarak bağladı (**1603**)" | 1589 öncesi + 1603 sonrası `k:0 m:null`; 1589-1603 tâbilik penceresi BOŞ (`m:"Hemedan"` kaynakta YOK) |
| **Bergama** | `bergama`: "Osmanlılar döneminde **Hudâvendigâr sancağına bağlı bir kaza**" · "**1864**'te **Balıkesir**'e bağlandı" · "1868'de teşkil edilen Aydın eyaletine bağlı **Saruhan sancağının** bir kazası haline geldi (**1873**)" · "Cumhuriyet döneminde **İzmir**'e bağlı bir kazanın merkezi oldu (**1924**)" | 1345 öncesi `k:0 m:null` · 1345→1864 `k:3 m:"Bursa"` · 1864→1873 `k:3 m:"Balıkesir"` · 1873→1920 `k:3 m:"Manisa"` · sonrası `k:0 m:null` |
| **Denizli** | `denizli`: "Işıklı, Homa, Çal, Baklan, **Denizli**, Honaz, Sarayköy ve Buldan **Kütahya sancağına** … bağlanmıştı" | 1390 öncesi `k:0 m:null` · 1429→1920 `k:3 m:"Kütahya"` · sonrası `k:0 m:null`; 1390-1429 arası BOŞ |

🔴 **BERGAMA — `m:"İzmir"` ATLASTA 1281-1923 BOYUNCA YANLIŞ.** Kaynak, İzmir'e
bağlanışı **1924**'e, yani atlasın ufkunun DIŞINA koyuyor. Aynı sınıftan: **Denizli**
de İzmir'e değil Kütahya sancağına bağlıydı. Bu ikisi `kd:`nin yalnız "pencere ekleme"
değil, **yanlış merkezi düzeltme** işini de yaptığı vakalar.

📌 **Sancak adı → merkez adı eşlemesi:** kaynak "Hudâvendigâr sancağı" ve "Saruhan
sancağı" diyor; `m:` bir YERLEŞİM adı istediği için sancak merkezlerinin adları
(**Bursa**, **Manisa**) yazıldı. Eşleme standarttır ama TDV'nin o cümlesinde AÇIKÇA
yazmaz — bildiriyorum.
📌 **Babadağı'nın 1593'ü** Özi eyaletinin kuruluş tarihidir ve atlasın kendi `Özi`
kaydının `kd:`inden devralınmıştır — **kaynak günü değildir** (`D210`/`D213`).

## 22. PARTİ 6 SONUCU

| Ölçü | Önce | Sonra | Öngörü |
|---|---|---|---|
| ZAMANLI çelişki | 290 | **274** | 274 ✓ **TUTTU** |
| ZAMANSIZ çelişki | 489 | **489** | değişmemeli ✓ |
| `kd:` taşıyan kayıt | 247 | **253** | +6 ✓ |
| çelişki üreten ayrı yerleşim | 207 | **201** | −6 ✓ |

`py arac/denetle.py` (20 Eylül, parti 6 sonrası koşu): **SONUÇ temiz** — M-4789'daki
bellek çöküşü bu koşuda görülmedi.

## 23. ALTI PARTİNİN TOPLAMI — işin bugünkü hâli

| | taban | bugün |
|---|---|---|
| ZAMANLI çelişki (`kd_gun`) | 483 | **274** — **−209 (%43,3)** |
| ZAMANSIZ çelişki (`m:`) | 489 | 489 (hiç dokunulmadı) |
| `kd:` taşıyan kayıt | 192 | **253** (+61 kayıt) |
| çelişki üreten ayrı yerleşim | 262 | **201** |

**Altı partinin altısında da öngörü ölçümden önce yazıldı ve altısı da birebir tuttu:**
−61 · −39 · −36 · −24 · −33 · −16. Altısında da `denetle.py` temiz.

### NEREDE DURDUM VE NİÇİN
`m:`i olan 827 kaydın çelişki üreten kısmı artık **uzun kuyruk**: kalan 274 çelişkinin
en büyük üreticisi 6, sonra 5-5, gerisi 3 ve 2'şer. Altı partide kapanan kümelerin
hepsinde ortak bir şey vardı: **tek bir kapsayıcı TDV maddesi bir düzine kaydı birden
karşılıyordu** (`cezayir-i-bahr-i-sefid`, `derya-beyi`, `cildir-eyaleti`,
`barbaros-hayreddin-pasa`, `lahsa`, `artvin`). Bu damar **bu turda tükendi**: parti
6'da elenenlerin çoğu TDV'de adı HİÇ GEÇMEYEN kasabalar (Sokna, Vaddân, Zilla,
Karistos, Amorgos, Psara, Tarki, Kerene). 1.MURAT'ın ölçütü ("bulunamadı kovası
büyürse dur") burada devreye girdi.

**Sıradaki turun verimli olabileceği yerler** (ölçülmedi, öneri):
① `m:` yanlış sınıfı — Bergama/Denizli vakası gösterdi ki `m:` bazı kayıtlarda
CUMHURİYET dönemi idaresini taşıyor; aynı hatayı taşıyan başka kayıtlar için
`m:"İzmir"`, `m:"Adana"`, `m:"Balıkesir"` gibi modern il merkezlerine bakılabilir.
② Atlasta KAYDI OLMAYAN sancak merkezleri (Payas, Karlı-ili) — nokta açılırsa
birkaç kayıt birden bağlanır.
③ Eksen kuyruğuna sevk edilen 8 kalem çözülürse bir kısmı çelişkiden kendiliğinden
düşer.

---

# 24. CETİNJE — ENKLAV-0072'nin kalemi (M-4807) ve ÖNGÖRÜSÜNÜN KOŞUSUZ ÇÜRÜMESİ

ENKLAV-0072 ölçtü: 1814-01-28'de Osmanlı gövdesi ile Karadağ gövdesi **~1005 km²**
çakışıyor; Cetinje kaydında `m:"İşkodra"` VAR, `kd:` YOK. Hipotezleri: *"Cetinje'ye
`kd:` yazılıp koşu yapılırsa OSM-doğrudan + karadag çakışması 1106 noktadan DÜŞMELİ."*

## 24a. `kd:` yazıldı (veri doğru olduğu için, hipotezden bağımsız)

TDV `karadag`: "Burası **İşkodra sancağının bir parçası** haline getirildi, **1514**'te
Crnojevići'nin soyundan gelen … İskender Bey'in idaresinde … Karadağ kesimi **ayrı bir
sancak** şeklinde teşkil edildi." · "**Cetinje** Ortodoks piskoposu (Çetine vladikası)
tedrîcen **en yüksek otorite** haline geldi ve ailesi de hâkim hânedan oldu."

`kd:[{1499-01-01→1514-01-01, k:4, m:"İşkodra"}, {1697-01-01→1923-10-29, k:0, m:null}]`
(1514-1697 BOŞ: ayrı sancağın ne zamana kadar sürdüğü kaynakta yok.)
**Ölçüm: 274 → 272** (Cetinje'nin 1700 ve 1800 çelişkileri kalktı) · `denetle.py` temiz.

## 24b. 🔴 HİPOTEZ KOŞUYA GEREK KALMADAN ÇÜRÜDÜ — motor `kd:`yi HİÇ OKUMUYOR

Koşu istemeden önce motoru ölçtüm:

| Ölçü | Sonuç |
|---|---|
| `arac/uret_petek.py` içinde `kd` / `kd_oku` / `kd_gun` geçen satır | **0** |
| `uret_petek.py` içinde `y["m"]` kullanımı | **2 yer**: `k12_merkez` (satır 1063) ve **BÖLGELER** katmanı (satır 5069) — bir de uyarı metni (1075) |
| `kd_oku`/`kd_gun` çağıran dosyalar | yalnız `arac/denetle.py` (ve tanımı `girdi.py`) |

`m:`in motordaki TEK işlevi `data/bolgeler.js` (k1/k2 merkezlerinin toplu bölge
sınırı) üretmektir; motorun kendi yorumu da bunu söylüyor: *"Kademe uyarısının bedeli
**kozmetik** (bölge sınırı çizilmiyor, **toprak boyaması etkilenmiyor**)"*
(`uret_petek.py:1051`). ENKLAV'ın ölçtüğü çakışma ise `donemler.js` +
`devletler_harita.js` gövdeleri üzerindedir — **`kd:` bu boruya hiç girmiyor.**

⇒ **`kd:` yazmak o 1106 noktayı DÜŞÜREMEZ; ~40 dakikalık koşu bu soruyu cevaplamaz.**
Teşhis ENKLAV'ın kendi ikinci dalına gidiyor: gövde üretimindeki
`delikleri_doldur` / `_b2_enklav_birlestir` / `gosterim_duzelt` zinciri.
📌 Bu, `CLAUDE.md §3`teki *"kusurun %93'ü `m:`in zaman penceresi eksikliği, `kd:`
çözer"* cümlesinin **Değişmez 3 ölçümü için** doğru, **gövde çakışması için**
geçersiz olduğu anlamına gelir: iki ayrı kusur sınıfı, tek cümleyle anılmamalı.

---

# 25. KALAN 272'NİN ANATOMİSİ — ve KOORDİNATÖRE BİR YÖNTEM SORUSU

## 25a. Merkeze göre dağılım (sıradaki kapsayıcı kaynağı seçmek için)

Kalan 272 çelişki **49 ayrı merkeze** dağılıyor; ilk onu:

| merkez | çelişki | kayıt | merkez | çelişki | kayıt |
|---|---|---|---|---|---|
| İzmir | 21 | 13 | Yanya | 10 | 7 |
| Ankara | 18 | 16 | Silistre | 9 | 4 |
| Bursa | 17 | 17 | Trablus | 9 | 3 |
| Selanik | 14 | 9 | İstanbul | 9 | 9 |
| Mora (Tripoliçe) | 13 | 9 | Kütahya | 8 | 8 |
| Diyarbakır | 12 | 10 | Konya | 8 | 7 |
| Basra | 11 | 3 | İşkodra | 8 | 5 |

## 25b. 🔴 İKİ SINIF — biri kaynak İSTEMİYOR, öteki İSTİYOR

Ölçtüm (`_mekanik_olc`): çelişkinin kesiti, yerleşimin **ilk Osmanlı dönemi
başlangıcından önce** mi?

| sınıf | çelişki | kayıt | ne gerekir |
|---|---|---|---|
| **A** — kesit ilk Osmanlı döneminden ÖNCE | **201** | **143** | tek `{1281-01-01 → ilk `d:`/`v:` başlangıcı, k:0, m:null}` penceresi |
| **B** — kaydın hiç Osmanlı dönemi yok | 0 | 0 | — |
| **C** — kesitte yerleşim ZATEN Osmanlı, merkezi değil | **71** | **64** | merkezin penceresi = gerçek tarihî olgu, KAYNAK ister |

**A sınıfı yeni bir tarihî iddia taşımaz:** kaydın kendi `s:`i o tarihte zaten yabancı
bir devlet gösteriyor; *"yabancı devletteyken Osmanlı kademesinde değildi"* bir iç
tutarlılık ifadesidir, atlastan devşirilmiş yeni bir TARİH değildir (`D207`in
yasakladığı şey atlastan tarih/koordinat devşirmektir).

**C sınıfı mekanikleştirilemez** — ve sebebi tek bir örnekte görünüyor: Söğüt 1299'da
Osmanlı, Bursa 1326'da fethediliyor. Mekanik kural Söğüt'ü 1300'de Bursa'ya bağlı
sayar ve **çelişki sürer**; doğru `kd:` "1326'ya kadar merkez Bursa DEĞİLDİ" demek
zorundadır ve bu bir kaynak sorusudur. C'nin tipik kümeleri: Bursa'ya bağlı 12 erken
Osmanlı kasabası (1300 kesiti), İstanbul'a bağlı 9 kayıt (1400 kesiti, fetihten önce),
İzmir'e bağlı Aydın/Birgi/Ayasuluk (1400 kesiti, şövalyeler).

## 25c. SORU (1.MURAT'a) — A sınıfı mekanik kapatılsın mı?

**Lehine:** 201 çelişki (%74) tek partide kapanır; hiçbir yeni iddia yazılmaz.
**Aleyhine — ve bence tartılması gereken asıl şey:** Değişmez 3 bugün kaba bir
**eksen kusuru dedektörü** olarak da çalışıyor. Bir kaydın `d:` başlangıcı YANLIŞSA
mekanik `kd:` o yanlışı devralır **ve çelişki sinyalini susturur**. Yani 201'i
mekanik kapatmak, ölçüyü iyileştirirken bir uyarı ışığını söndürebilir.
**Ara yol (önerim):** A sınıfı yazılırken her kayıt için `d:` başlangıcının kaynağı
olup olmadığına bakılır; kaynaksızsa `kd:` YAZILIR ama kayıt "eksen doğrulaması
bekliyor" listesine alınır — sinyal kaybolmaz, ölçü düzelir.

---

# PARTİ 7 — A SINIFI (143 kayıt, 201 çelişki) · 21 Eylül 2026

## 26. HÜKÜM VE ÖNGÖRÜ

1.MURAT M-4889: *"A sınıfı MEKANİK KAPATILSIN — ama SENİN önerdiğin ara yolla,
onsuz değil."* C sınıfı bekleyecek (Bursa kümesinden başlayacak).

**Kuru koşu ölçümü** (`py denetim/ARAC-KD-ZAMAN-A-SINIFI-0921.py`, yazmadan):
- A sınıfı **143 kayıt / 201 çelişki** · C sınıfı 64 kayıt / 71 çelişki · A ∩ C = **0**
- 143'ün **hiçbirinde `kd:` YOK** ⇒ hepsi düz EKLEME, birleştirme gerekmiyor
- ilk Osmanlı dönemi **kaynaklı 59** · **KAYNAKSIZ 84** ⇒ ara yol listesine 84 kayıt
- çapası bulunamayan: 0 (`Birecik` boşluklu `{ad:"…"` yazımıyla yazılmış; araç iki
  yazımı da tanıyor)

**Sınav anı:** yazımdan sonra `denetle.degismez3z` aynı evrende (3921 kayıt, 6 kesit).
**ÖNGÖRÜ: 272 → 71 (−201)** · `kd:` taşıyan kayıt **254 → 397** · çelişki üreten ayrı
yerleşim **207 → 64** · ZAMANSIZ (`m:`) **489'da sabit**.
Yeni çelişki DOĞAMAZ: yazılan pencerelerin hepsi `m:null` (kd_gun `None` döndürür,
denetim o kaydı atlar) ve pencereler C çelişkilerinin kesitlerini kapsamıyor
(tanım gereği `g ≥ ilk Osmanlı başlangıcı`).

## 27. 🔴 ÖNGÖRÜ TUTMADI — ve sebebi yamanın KENDİSİNDE çıktı

**Ölçüm: 272 → 61.** Öngörü 71 demişti; **10 çelişki FAZLADAN** kalktı.
"İyi haber" sayıp geçmedim, çünkü bu yamanın hükmün ŞARTINI çiğnediği anlamına
geliyordu. Sebebi yamayı bellekte geri alıp yeniden ölçerek buldum:

**Tek pencere yetmiyor.** `{1281-01-01 → ilk Osmanlı}` yazınca, ilk Osmanlı
başlangıcından SONRAKİ her gün `kd:` **boşluğuna** düşüyor; `kd_gun` orada
`(0, None)` döndürüyor ve denetim o kaydı **atlıyor**. Yani kaydın **C sınıfı**
çelişkileri de sustu. Susanlar (10 çelişki / 7 kayıt — A ile C'de BİRDEN bulunan
kayıtlar): Cübeyl 2 · Ukayr 2 · Selmâs (Dilman) 2 · Hacıbey (Odessa) 1 ·
Karistos 1 · Çamlıca (Hidra) 1 · İzdin (Lamia) 1.

📌 **Çıkarım yanlışı neredeydi:** "A ∩ C = 0" diye yazmıştım. Ölçmemiştim —
143 + 64 = 207 toplamını, BAŞKA BİR KOŞUDAN (parti 6 sonrası, Cetinje'den önce)
kalma "207 ayrı yerleşim" sayısıyla karşılaştırmıştım. Gerçek kesişim **7 kayıt**.
İki ayrı koşunun sayısını yan yana koymak (`CLAUDE.md §11`: bayat sayı) bir
kesişim ölçümünün yerini tutmuyor.

## 28. ONARIM — ikinci pencere

Her A kaydına ikinci pencere eklendi:
`{ilk Osmanlı başlangıcı → 1923-10-29, k:<kaydın k:si>, m:<kaydın m:si>}`.
Bu pencere **yeni bilgi taşımaz** — bugünkü `k:`/`m:` değerlerinin aynısıdır,
yalnız zaman sınırı kazanmıştır. Böylece yama **SADECE fetih öncesi** çelişkiyi
kaldırır; fetih sonrası sinyal **yerinde durur**.

| Ölçü | taban | tek pencere (hatalı) | iki pencere (onarılmış) | öngörü |
|---|---|---|---|---|
| ZAMANLI çelişki | 272 | 61 ❌ | **71** | 71 ✓ |
| çelişki üreten ayrı yerleşim | 206 | 57 | **64** | 64 ✓ |
| `kd:` taşıyan kayıt | 254 | 397 | **397** | 397 ✓ |
| ZAMANSIZ (`m:`) | 489 | 489 | **489** | sabit ✓ |

`py arac/denetle.py` (21 Eylül, onarımdan sonra): **SONUÇ temiz** —
Değişmez 1 ✓ 299 sahipsiz · Değişmez 2 ✓ 590 kırılma 0 açık.

Araç (`denetim/ARAC-KD-ZAMAN-A-SINIFI-0921.py`) iki pencereli hâle getirildi ve
niçin öyle olduğu kodun içine yazıldı — aynı tuzağa ikinci kez düşülmesin.

## 29. ARA YOLUN ÇIKTISI — ve aletin kendi tuzağı

`denetim/KD-ZAMAN-EKSEN-BEKLIYOR-0921.md`: ilk Osmanlı döneminin `kaynak:` alanı
**olmayan 84 kayıt** (kaynaklı olan 59 kayıt da bilgi olarak listenin altında).
Bu liste, mekanik `kd:` yüzünden susan "bu kaydın `d:` başlangıcı doğru mu?"
sorusunun **yeni taşıyıcısıdır**.

---

# PARTİ 8 — C SINIFI / BURSA KÜMESİ (12 kayıt, 12 çelişki) · 21 Eylül 2026

## 30. ÖNGÖRÜ (parti 8) — ölçümden ÖNCE

**Küme = 1300 kesitinde kalan bütün çelişkiler (12):** Bilecik · Bozüyük · Domaniç ·
Ermeni Derbendi · Kulacahisar · Köprühisar (Yenişehir) · Pazaryeri · Söğüt · Yarhisar ·
İnegöl (`m:"Bursa"`) + Eskişehir · Karacahisar (`m:"Kütahya"`).
Hepsi 1300'de **OSMANLI**, merkezleri ise **bizans/germiyan** — yani kusur kaydın
sahipliğinde değil, **merkez bağının zamansızlığında**.

**ÖNGÖRÜ: 71 → 59 (−12).** Yeni çelişki doğmamalı: yazılan `m:` pencereleri 1400 ve
sonrasında iki tarafı da Osmanlı bırakıyor (Bursa 1326-1402 ve 1413+, Kütahya
1381-1402 ve 1429+ — kesitlerde uyuşuyor).

## 31. KAYNAKLAR — iki cümle bütün kümeyi çözüyor

| Kaynak | Cümle | Ne veriyor |
|---|---|---|
| TDV `bursa` | "…bu abluka yüzünden şehir Osmanlılar'a teslim edildi (**6 Nisan 1326**)" · "**Bursa Orhan Gazi tarafından Osmanlı Beyliği'nin merkezi yapıldı.**" | `m:"Bursa"` penceresinin BAŞLANGICI — gün hassasiyetinde |
| TDV `kutahya` | "Süleyman Şah'ın kızının düğünü dolayısıyla **Kütahya**, Simav, Eğrigöz ve Tavşanlı **çeyiz olarak Osmanlılar'a verildi**. **783 (1381)** yılında yapılan düğünden sonra Şehzade Bayezid Kütahya'ya idareci olarak gönderildi." | `m:"Kütahya"` penceresinin başlangıcı — **yıl** hassasiyetinde ⇒ `1381-01-01` |

**Yazılan kalıp:** `{1281-01-01 → kaydın kendi Osmanlı başlangıcı, k:0, m:null}`
(A kalıbı, yalnız başlangıcı 1281'den sonra olanlarda) → **BOŞLUK** → `{1326-04-06`
(Kütahya kümesinde `1381-01-01`) `→ 1923-10-29, k:<kaydın k:si>, m:<kaydın m:si>}`.

🔴 **Ortadaki BOŞLUK bir beyandır:** *"bu kasaba Osmanlıydı ama merkezinin ne olduğunu
kaynaktan okuyamadım."* Aradım: `sogut` maddesi Söğüt'ü "Osmanlı Devleti'nin ilk
kurulduğu yer" diye tanımlıyor ve Ertuğrul'un kışlağı olduğunu söylüyor, ama
**"şu kasabaların idarî merkezi Söğüt'tü" diyen bir cümle YOK**. `/yenisehir` slugu
**TUZAK ②**: canlı ama madde **Teselya'daki Larissa**, Bursa'nın Yenişehir'i değil.
⇒ 1281/1299 → 1326 arası merkez: **`bulunamadı`**.

📌 **`kaynak:` alanına DOKUNMADIM.** Sevkin "hangi kaynağın hangi cümlesine dayandığını
kayda yaz" maddesini bu raporun §31 tablosuyla karşıladım; veri kaydına ikinci bir
`kaynak:` anahtarı eklemek TARIH-SUPHE-0920'nin bulduğu sınıfa girer (aynı alan iki kez
yazılırsa ikincisi birincisini SESSİZCE yutar, `denetle.py` ötmez). Veri tarafında bir
alan isteniyorsa `kd_kaynak:` açılmalı ve `girdi.py BILINEN_ALANLAR`a girmeli — ikisi de
benim kalemim değil.

## 32. PARTİ 8 SONUCU

| Ölçü | Önce | Sonra | Öngörü |
|---|---|---|---|
| ZAMANLI çelişki | 71 | **59** | 59 ✓ **TUTTU** |
| ZAMANSIZ çelişki | 489 | **489** | sabit ✓ |
| `kd:` taşıyan kayıt | 397 | **409** | +12 ✓ |
| çelişki üreten ayrı yerleşim | 64 | **52** | −12 ✓ |
| **1300 kesitinde kalan çelişki** | 12 | **0** | — |

`py arac/denetle.py` (21 Eylül, parti 8'den sonra; koşmadan önce tahtaya M-4912 ile
"denetle koşturuyorum" yazıldı): **SONUÇ temiz** — Değişmez 1 ✓ 299 sahipsiz ·
Değişmez 2 ✓ 590 kırılma 0 açık.

### Yazılan kayıtlar
| kayıt | kendi Osmanlı başlangıcı | `m:` penceresi başlangıcı | k / m |
|---|---|---|---|
| Bilecik · Yarhisar · İnegöl | 1299-01-01 | 1326-04-06 | 4 / Bursa |
| Kulacahisar | 1285-01-01 | 1326-04-06 | 4 / Bursa |
| Köprühisar (Yenişehir) | 1300-01-01 | 1326-04-06 | 4 / Bursa |
| Bozüyük · Domaniç · Ermeni Derbendi · Pazaryeri | 1281-01-01 (ufkun başı) | 1326-04-06 | 4 / Bursa |
| Söğüt | 1281-01-01 | 1326-04-06 | **1** / Bursa |
| Eskişehir | 1288-01-01 | 1381-01-01 | 3 / Kütahya |
| Karacahisar | 1288-01-01 | 1381-01-01 | 4 / Kütahya |

---

# PARTİ 9 — C SINIFI / İSTANBUL KÜMESİ (9 kayıt, 9 çelişki) · 21 Eylül 2026

## 33. ÖNCE SINIFLANDIRMA (sevkin şartı), SONRA YAZIM

1.MURAT M-4916: *"Bu kümede tuzak var: 1400'de İstanbul OSMANLI DEĞİL… Önce hangisi
olduğunu ayır: (i) bağ doğru ama zamansız mı, (ii) bağ o tarihte yanlış mı. Sayıyla
ayır, sonra yaz."*

**Küme:** Akyazı · Anadolu Hisarı · Beykoz · Gebze · Hereke · Kandıra ·
Pelekanon (Eskihisar) · Samandıra · İzmit — dokuzunun da `m:`i **İstanbul**,
dokuzunun da çelişkisi **1400 kesitinde**, hepsi `OSMANLI / bizans`.

### 33a. Dokuzunun ORTAK ve KESİN olanı
TDV `istanbul`: "Mehmed **29 Mayıs 1453**'te İstanbul'u fethederek Bizans hâkimiyetine
son verdi." ⇒ `m:"İstanbul"` penceresi **1453-05-29'dan önce BAŞLAYAMAZ**. Dokuz
çelişkinin dokuzu da bu tek olgudan doğuyor.

### 33b. Sınıflandırma — sayıyla
| sınıf | kayıt | dayanak |
|---|---|---|
| (i) bağ 1453 SONRASI doğru, yalnız penceresi yok | **0 kesin** | hiçbir TDV maddesi bu kasabaların 1453 sonrası merkezini ADIYLA vermiyor |
| (ii) bağ muhtemelen YANLIŞ (senin hükmünü ister) | **1** | **İzmit** — TDV `kocaeli`: "**Merkezi İzmit olan** ve adını bölgeyi…"; TDV `izmit`: "Çelebi Mehmed … **Bayezid Paşa'yı sancak beyi tayin ederek**…" ⇒ İzmit bir **sancak MERKEZİ**dir; bir sancak merkezinin `m:`inin İstanbul olması Eskişehir vakasının aynısı |
| (iii) ÖLÇÜLEMEDİ | **8** | Akyazı, Anadolu Hisarı, Beykoz, Gebze, Hereke, Kandıra, Pelekanon, Samandıra — `/kocaeli` sancağın merkezini veriyor ama **bu kasabaları kazası olarak ANMIYOR**; `/gebze` aramasında şehir maddesi yok (yalnız üç yapı maddesi), `/beykoz` maddesi 2,6 KB'lık bir taslak |

📌 **Ölçülemedi ≠ yanlış.** Sekizi için "Kocaeli sancağındaydılar" demek coğrafî
olarak makul ama **bölgeden kasabaya taşınan hüküm** olur (`CLAUDE.md §4`), yazmadım.

### 33c. Ne yazdım
Dokuzuna da **A kalıbının aynısı**: `{1281-01-01 → kaydın kendi Osmanlı başlangıcı,
k:0, m:null}` · **BOŞLUK** (kendi fethi → 1453-05-29 arası: merkez bulunamadı) ·
`{1453-05-29 → 1923-10-29, k:<kaydın k:si>, m:"İstanbul"}`.
İkinci pencere **bugünkü `m:`i AYNEN taşır**, yalnız zaman sınırı kazandırır — yani
`m:` DEĞİŞTİRMİYORUM, (ii) hükmünü ÖN ALMIYORUM. İzmit'in penceresini de yazdım:
yazmasaydım kaydın Osmanlı dönemi boşlukta kalır ve **sonraki bütün denetim soruları
da susardı** (parti 7'de ölçülen tuzak).

**ÖNGÖRÜ: 59 → 50 (−9).**

## 34. PARTİ 9 SONUCU

| Ölçü | Önce | Sonra | Öngörü |
|---|---|---|---|
| ZAMANLI çelişki | 59 | **50** | 50 ✓ **TUTTU** |
| ZAMANSIZ çelişki | 489 | **489** | sabit ✓ |
| `kd:` taşıyan kayıt | 409 | **418** | +9 ✓ |
| çelişki üreten ayrı yerleşim | 52 | **43** | −9 ✓ |
| **1400 kesitinde `m:İstanbul` çelişkisi** | 9 | **0** | — |

`py arac/denetle.py` (21 Eylül, parti 9'dan sonra; tahtaya önce haber verildi):
**SONUÇ temiz** · Değişmez 1 ✓ 299 sahipsiz · Değişmez 2 ✓ 590 kırılma 0 açık ·
konum ✓ 0.

### Dokuz partinin toplamı
**483 → 50 · −433 çelişki (%89,6)** · `kd:` taşıyan kayıt 192 → **418** ·
çelişki üreten ayrı yerleşim 262 → **43** · ZAMANSIZ (`m:`) 489'da hiç değişmedi.
Dokuz partinin **sekizinde** öngörü ölçümden önce yazıldı ve tuttu; **birinde
(parti 7) tutmadı** ve tutmaması yamanın kendi kusurunu ortaya çıkardı (§27-28).

---

---

# PARTİ 10 — İZMİR KÜMESİ: **YAZILMADI**, ölçüldü · 21 Eylül 2026

1.MURAT M-4925: *"Bu kümede de tuzak var… (ii) sınıfı parti 9'dakinden BÜYÜK çıkabilir
— çıkarsa YAZMA, sayıyla getir."* **Çıktı. Yazmadım.**

## 35. ÖLÇÜM — `m:"İzmir"` bağı 1841'den önce HİÇBİR kayıt için doğru olamaz

**Kümenin kendisi:** Ayasuluk (Selçuk) · Aydın · Birgi · Manisa · Söke · Tire —
altısı da 1400 kesitinde `OSMANLI / sovalye` (kendileri 1390'da Osmanlı, İzmir ise
1344-1402 arası **şövalyelerde**).

### 35a. Belirleyici cümle
TDV `izmir`: "**İzmir, Osmanlılar'ın idaresine geçtikten sonra Aydın sancağına bağlı
bir KAZANIN MERKEZİ haline geldi.**" · "Başlangıçta Aydın sancağına bağlı olan İzmir,
yaklaşık **1573**'te … **Sığla sancağına** katıldı." · "**XIX. yüzyılda** Aydın
eyaletine bağlandı ve **1841**'den itibaren zaman zaman eyaletin merkezi oldu."

⇒ İzmir, atlasın ufkunun neredeyse tamamında **üst merkez DEĞİL, kendisi bağlı bir
kaza**dır. Yani `m:"İzmir"` yalnız 1400'de zamansız değil; **1841 öncesinin tamamında
yanlış yönde bir bağdır.** Bu, Bergama vakasının (parti 6) aynısı — `m:` modern il
merkezini geriye taşıyor.

### 35b. İki kayıt AYRICA sancak MERKEZİ
- TDV `tire`: "Murad burada yeniden hâkimiyet kurdu ve kasaba **Anadolu
  beylerbeyiliğine bağlı AYDIN SANCAĞININ MERKEZİ** oldu." ⇒ **Tire**, İzmir'e bağlı
  değil; İzmir'in bağlı olduğu sancağın merkezidir. **Bağ TERS YÖNDE.**
- TDV `manisa`: "**Saruhanoğulları'nın merkezi** olarak gelişme gösteren Manisa ilk
  defa … (1389-1390) kışındaki askerî harekâtı sırasında Osmanlı idaresi altına
  alındı." (Saruhan **sancağı** merkezi; `derya-beyi` maddesi de Saruhan'ı sancaklar
  arasında sayıyor.) ⇒ Söğüt · Eskişehir · İzmit ile aynı şema sınıfı.

### 35c. Sınıflandırma — sayıyla
| sınıf | kayıt | not |
|---|---|---|
| (i) bağ doğru, yalnız penceresi yok | **0** | — |
| (ii) bağ YANLIŞ (hüküm ister) | **6 / 6** | altısının da `m:`i 1841 öncesinde yanlış yönde; ikisi (Tire, Manisa) ayrıca sancak MERKEZİ |
| (iii) ölçülemedi | **0** kümenin kendisi için; **4 kayıt için "doğru merkez ne" ölçülemedi** | Aydın · Birgi · Ayasuluk · Söke'nin Aydın sancağının kazası olduğunu ADIYLA söyleyen cümle bulamadım |

### 35d. Kapsam ölçümü — sorun 6 kayıttan büyük
| ölçü | değer |
|---|---|
| `m:`i **İzmir** olan kayıt | **18** |
| bunlardan `kd:` penceresinde de İzmir taşıyan | **7** (Fornoz · Kuşadası · Midilli · Molova · Nikarya · Sisam · İpsara) |
| hâlâ çelişki üreten | 6 |

🔴 **Şunu açıkça yazıyorum:** o 7 kayda `kd:`yi BEN yazdım (A sınıfı ve önceki
partiler) ve yamanın kuralı gereği **bugünkü `m:`i AYNEN taşıdım — doğrulamadım.**
Yama hiçbir zaman "bu bağ doğru mu" diye sormadı, yalnız "ne zaman geçerli" diye
sordu. İzmir vakası bu ikisinin **ayrı sorular** olduğunu gösteriyor: A sınıfı
listesi (`KD-ZAMAN-EKSEN-BEKLIYOR-0921.md`) `d:` başlangıcının kaynaksızlığını
taşıyor, ama **`m:`in kendisinin yanlış olabileceğini taşımıyor.**

### 35e. Ne yapılabilir (hüküm senin)
1. **En dar seçenek:** altısına `{1841-01-01 → 1923-10-29, …, m:"İzmir"}` yazmak —
   çelişki kalkar ama Tire ve Manisa için 1841 sonrası bile şüpheli (sancak merkezi).
2. **Doğru seçenek, kaynak işi:** Aydın sancağı (merkez **Tire**, sonra Güzelhisar)
   ve Saruhan sancağı (merkez **Manisa**) kurulup `m:` yeniden bağlanmalı; bu **`m:`
   düzeltmesidir, senin hükmün.**
3. **Kapsamı genişleten seçenek:** 18 kaydın tamamı için aynı soru bir kerede
   sorulmalı; ada kayıtları (Midilli, Sisam, Nikarya, İpsara, Fornoz) zaten
   Cezâyir-i Bahr-i Sefîd eyaletine aitti (parti 2-3'te ölçüldü), yani onların
   `m:"İzmir"`i de büyük ihtimalle yanlış yönde.

**VERİYE DOKUNULMADI** — ölçüm 50'de duruyor, `denetle.py` koşturulmadı (veri
değişmedi; son temiz koşu parti 9 sonrasıdır).

---

### Parti 8'in yol boyunca çıkan iki sorusu (benim kalemim değil, bildiriyorum)
1. **Söğüt'ün `k:`si 1** — yani "eyalet merkezi" kademesi — ama `m:"Bursa"`.
   `kd:`ye kaydın kendi değerini taşıdım (uydurmamak için), ama k:1 bir yerleşimin
   başka bir merkeze bağlı olması şemanın mantığıyla oturmuyor (`k12_merkez`
   zinciri k:1/k:2'de DURUR). Ölçmedim, sormuyorum: bildiriyorum.
2. **Eskişehir aslında bir sancak MERKEZİ.** TDV `eskisehir`: "Eskişehir, adı daha
   önceki dönemlerde ortaya çıkmış olan **Sultanönü sancağının merkez kazası**
   durumundaydı. **Anadolu beylerbeyiliğine bağlı** olan sancak…" ve "Osman Bey'in
   sağlığında oğlu Orhan'ın **Karacahisar (Sultanönü) sancak beyi**… olduğu belirtilir."
   ⇒ `m:"Kütahya"` bağı, Anadolu beylerbeyiliğinin merkezi Kütahya olduğu için
   HİYERARŞİK olarak savunulabilir, ama Eskişehir'in kendi kademesi (`k:3`) sancak
   merkezi olmasıyla uyuşmuyor; Karacahisar da erken dönemde sancak adının kendisi.
   Anadolu beylerbeyiliğinin kuruluş yılını bu maddede bulamadım, o yüzden pencereyi
   Kütahya'nın Osmanlı'ya geçtiği yıldan (1381) başlattım.

---

🔴 **Aletin kendi tuzağı — yaşandı ve düzeltildi:** araç A sınıfını ÇELİŞKİLERDEN
türetiyor; yama uygulandıktan sonra o çelişkiler yok, dolayısıyla araç ikinci kez
koşturulunca **84 satırlık listeyi BOŞ olarak üzerine yazdı.** Artık liste
`denetim/KD-ZAMAN-A-SINIFI-0921.json` **kütüğünden** render ediliyor; ölçüm boş
çıkarsa kütük korunuyor. *(Ders ailesi: "boş küme her öngörüyü doğrular" —
burada boş küme bir BELGEYİ SİLDİ.)*

---

🔴 **ÇALIŞMA AĞACI UYARISI:** `data/yerlesimler.js` bu oturum sürerken en az iki başka
oturum tarafından da yazıldı (EKO-1806'nın `isg:` satırları, TARIH-SUPHE-0920'nin `not:`
satırları çalışma ağacında duruyor). Yama betiği dosyayı TOPTAN okuyup TOPTAN yazıyor;
her partiden sonra 36 kaydın `kd:`si geri okundu ve hepsi yerinde. Ama dosyayı bellekte
tutan bir oturum sonradan yazarsa bu `kd:`ler sessizce silinir — koordinatöre bildirildi
(M-4768).
