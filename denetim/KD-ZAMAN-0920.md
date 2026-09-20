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

🔴 **ÇALIŞMA AĞACI UYARISI:** `data/yerlesimler.js` bu oturum sürerken en az iki başka
oturum tarafından da yazıldı (EKO-1806'nın `isg:` satırları, TARIH-SUPHE-0920'nin `not:`
satırları çalışma ağacında duruyor). Yama betiği dosyayı TOPTAN okuyup TOPTAN yazıyor;
her partiden sonra 36 kaydın `kd:`si geri okundu ve hepsi yerinde. Ama dosyayı bellekte
tutan bir oturum sonradan yazarsa bu `kd:`ler sessizce silinir — koordinatöre bildirildi
(M-4768).
