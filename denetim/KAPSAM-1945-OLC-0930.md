1945'e uzatmak **~100 künye işi (90 mevcut künyenin kararı + 10 kesin yeni) + 1 tam koşu + ~2.000 noktanın savaş yılları araştırması**; 1281 öncesine gitmek **2.526 noktanın gerçek başlangıç tarihi + 142 künyenin başlangıcı + sayısı bilinmeyen yeni künye + 1 tam koşu**; daha ucuz olan **1945** — çünkü 22 yıllık, iyi belgelenmiş bir dönem ve noktaların yaklaşık yarısında sahip hiç değişmiyor (tek iş bitiş tarihini ileri almak), geriye gitmekse HER noktada yeni araştırma demek ve nerede duracağı belli değil.

# KAPSAM-1945-OLC-0930 — 1945'e mi, 1281 öncesine mi? Maliyet ölçümü

Tarih 30 Eylül 2026 · yalnız okuma (veriye, `arac/`a, git'e dokunulmadı) · makine sayıları
`denetim/KAPSAM-1945-OLC-0930.json`da.

## Özet tablo — iki şık yan yana

| | **1945'e uzatmak** | **1281 öncesine gitmek** |
|---|---|---|
| Motor kodu | 4 yerde 7 satır (`"1923-11-01"`) + `girdi.py` `UFUK` + `app.js` `BITIS` | 1 satır `EPOK` + `girdi.py` `UFUK` + `app.js` başlangıç |
| Tam koşu | **1** (motor tuzu değişir, ~4 sa 10 dk+, uzayacağı kesin, ne kadar — ölçülemedi) | **1** (aynı sebep) |
| Mevcut künye | 90 künye 1923'e **kesilmiş**: 70 uzatılır · 11 arada bitti (gün araştırılır) · 2 ardıl ister · 7 ölçülemedi | 142 künye `f:"1281-01-01"`e **kesilmiş** — her birinin gerçek başlangıcı araştırılır |
| Yeni künye | **10 kesin** + 18 belirsiz | **ölçülemedi** (hedef ucu belli değil: 1071? MÖ 12000?) |
| Yerleşim | 4.127 noktanın son dönemi 1923'te bitiyor; **~2.100'ünde sahip değişmiyor → mekanik uzatma**; **1.968 nokta savaş cephesi künyelerinde → savaş dönemi araştırması** | **2.526 nokta** 1281-01-01 ile başlıyor → **her biri** araştırma |
| Sınır hattı (D katmanı) | 753 hat 1923'te bitiyor | geriye sarılmış (1923'ten), 1281 öncesi hat yok |
| Kronoloji | 1924-1945 arası bugün **1 madde** — her yeni sınır kırılması için madde gerekir (Değişmez 2) | 1281 öncesi her kırılma için madde |
| Kaynak | Avrupa/Asya 1923-45: akademik kaynak bol, gün hassasiyeti çoğunlukla var | Ortaçağ: gün hassasiyeti nadir, TDV dışı coğrafyada kaynak seyrek |

## ① Motor sınırı nerede

`arac/uret_petek.py` — **motor tuzunda** (`CLAUDE.md §9.1`). Dört yerde, yedi satırda sabit yazılı:

```
4498  tarihler = sorted(t for t in tarihler if EPOK <= t <= "1923-11-01")
4500  if tarihler[-1] != "1923-11-01": tarihler.append("1923-11-01")
6517      _wts = sorted(t for t in _wts if EPOK <= t <= "1923-11-01")
6765      ts = sorted(t for t in ts if EPOK <= t <= "1923-11-01")
6768      if ts[-1] != "1923-11-01": ts.append("1923-11-01")
7033          ts = sorted(t for t in ts if EPOK <= t <= "1923-11-01")
7036          if ts[-1] != "1923-11-01": ts.append("1923-11-01")
2878  EPOK = "1281-01-01"              ← geriye gitmenin tek satırı
```
- Motor tuzundaki ikinci dosya da aynı ufku taşıyor: `arac/girdi.py:705` `UFUK = ("1281-01-01", "1923-10-29")`.
- Motor dışı: `js/app.js:90` `var BITIS = gunIdx("1923-10-29");` · zaman çubuğu etiketi `app.js:9092` · `app.js`'te "1923" geçen 16 satır, `denetle.py`'de 27 geçiş, `arac/` altında 32 dosya. Bunların hangisinin TAVAN olduğu tek tek **ölçülmedi**.
- ⇒ İki şık da **aynı bedeli** öder: motor tuzu değişir, önbellek sıfırlanır, **bir tam koşu** (bugün koşu 18: 4 sa 10 dk). 1945'te 22 yıllık yeni kırılma eklenince koşu uzar — ne kadar: **ölçülemedi**. Koşu maliyeti iki şıkkı AYIRMAZ.

## ② 90 künyenin gerçeği (`t:"1923-10-29"`)

⚠️ Gerekçeler **model bilgisidir, kaynak değildir** — hiçbir tarih veriye yazılmak üzere önerilmiyor; kesin hüküm araştırma kalemidir (`§4`, `D210`).

| Kova | Sayı | Anlamı |
|---|---|---|
| Gerçekten 1923'te bitti | **2** | `tbmm-turkiye` (29 Ekim 1923 → ardıl: Türkiye Cumhuriyeti) · `oniki-ada-italyan` (Lozan'la işgal statüsü bitti, toprak İtalya'da kaldı → ardıl/devir) |
| 1923-1945 arasında bitti | **11** | hicaz · çekoslovakya · polonya · letonya · litvanya · estonya · avusturya · arnavutluk · tannu-tuva · cimma · yugoslavya — **her birinin bitiş günü bir araştırma kalemi** |
| 1945'e kadar yaşadı | **70** | uzatılır; bunların **17'si** savaş işgali (`isg:`) ister (fransa, hollanda, belçika, norveç, danimarka, yunanistan, çin, habeşistan…) |
| Ölçülemedi | **7** | `almanya` (962'den tek künye — Weimar/Nazi için genişlet mi ardıl mı?) · `somali` · `senusi` · `umman-zengibar` · `ingiliz-kuzey-amerika` (kendi notu t:'nin 1867'ye çekilmesini istiyor — 1923 sorunu değil) · `suriye-lubnan-mandasi` · `agadez-sultanligi` |

Tam liste (id · gerekçe · 1923'teki nokta sayısı): JSON `2_kunye_1923_10_29.liste`.

Ek: 1923'ten sonra biten **59** künye zaten var (49'u 1946 sonrası — İngiliz Hindistanı, Irak, Mısır, Afrika sömürgeleri; 9'u 1924-44; 1'i 1945). Bunlar hazır.

## ③ 1923-1945 için kaç yeni künye

`devletler.js` 704 künyenin ad+id alanında anahtar kelimeyle tarandı (türkiye, nazi, vichy, mançu, hırvat, slovak, hatay, suud, moğol…). Aşağıdakilerin **hiçbiri yok**.

**Kesin gerekli — 10:** Türkiye Cumhuriyeti · Suudi Arabistan Krallığı (`suud-ucuncu` 1932'de bitiyor) · Moğolistan Halk Cumhuriyeti (`mogolistan` 1924'te bitiyor) · Mançukuo · Vichy Fransası · İtalyan Doğu Afrikası · Bağımsız Hırvatistan · Slovakya · Bohemya-Moravya Protektorası · Hatay Devleti.

**Belirsiz — 18:** Nazi/Weimar Almanyası (ayrı künye mi, `almanya` genişletilir mi) · Polonya Genel Valiliği · Wang Jingwei Nanjing hükûmeti · Mengjiang · Burma Devleti 1943 · Filipin Commonwealth / II. Filipin Cumhuriyeti · Çin Sovyet Cumhuriyeti · Doğu Türkistan (1933, 1944) · Tanca · İspanyol Fas · Vatikan · Nedić Sırbistanı / İtalyan Karadağı · Helen Devleti 1941-44 · Karpat Ukraynası · Lübnan/Suriye cumhuriyetleri · Azad Hind · Hicaz-Necid · İtalyan Libyası. Bunların çoğu "künye mi, `isg:` işgal kaydı mı" kararıdır.

Pakistan (1947) ve 1945 sonrası devletler bu hesabın DIŞINDA.

## ③b 1945'in asıl yükü: yerleşim ve kronoloji

- Yerleşim dönemlerinin **4.223'ü** (s 4.091 · isg 96 · v 36) `1923-10-29`'da bitiyor → **4.127 nokta**. Hepsi 1945'e taşınmalı.
- 1923'te sahipli 4.092 noktanın **1.968'i** savaşta işgal edilen ya da sınırı değişen ülkelerde (SSCB 428 · Fransa 269 · Türkiye 263 · İtalya 130 · Çin 120 · Yunanistan 101 · Yugoslavya 79 · Hollanda Doğu Hint 76 …). Bu noktalar gerçek araştırma ister. Geri kalan ~2.100 nokta (İngiltere, ABD, Kanada, Brezilya, Avustralya…) **mekanik uzatmadır** — ama 1945 ufkunda sömürge sınırı değişmeyenler de "değişmedi" diye TEYİT edilmeli.
- Sınır D katmanı: 28 dosyada **753** hat 1923'te bitiyor.
- Kronoloji: 165 dosyada 1900-1923 arası **917** madde var; 1924-1945 arası yalnızca **1** madde. Her yeni sınır kırılması ±30 gün içinde bir madde ister (Değişmez 2) — yüzlerce yeni madde gerekir; sayısı kırılma sayısına bağlı, **ölçülemedi**.

## ④ 1281 öncesi şıkkı

- Künye: `f` alanı 1281 öncesi olan **94** (üç haneli yıllar `pad()` ile — düz dizgi karşılaştırması **76** der, D205 tuzağı) · `f` alanı **tam 1281-01-01** olan **142** (pencere kesiği; 90'ın aynası).
- Yerleşim: ham metinde `f:"1281-01-01"` **2.807** kez geçiyor. Ayrıştırınca: s 2.519 · **kd 277** · d 5 · yorum satırı 2. `kd:` bir sahiplik değil, idarî kademe penceresi. ⇒ Gerçek sahiplik dönemi **2.526** (s 2.521 + d 5), **2.526 nokta**; bunların **2.329**'unda `kur:` alanı da yok.
- 🔴 **Alıntı bulunamadı.** Şartnamede "`uret_petek.py` ~4650 `kur:`/`bit:` bölümünde 1281-01-01 ile başlayan dönem 'araştırılmamış' işaretidir" diye yazıyor. O bölüm (4645-4670) böyle bir cümle içermiyor; `kur:` alanının motorda nasıl okunduğunu anlatıyor. `EPOK`un dosyadaki tek açıklaması 2875-2878. satırlar: atlasın başlangıç tarihi olarak Ertuğrul Gazi'nin 1281-82'deki vefatı seçilmiş ("epok 1299 değil 1281"). "Pencere ucu ölçüm değil sınır işaretidir" hükmü `CLAUDE.md §4` / `D210`'da var ama orada verilen örnek `1923-10-29`. **Anlam aynı**: 1281-01-01 ile başlayan dönem, o sahipliğin gerçekte ne zaman başladığını söylemez, sadece atlasın kapısını gösterir. Geriye gitmek, 2.526 dönemin gerçek başlangıcını araştırmak demek.
- Yeni künye: 1281 öncesi dünyada kaç devlet gerektiği, hedefin ne kadar geri olduğuna bağlı (§1: nihai hedef MÖ 12000) — **ölçülemedi**.

## Hüküm

- **Koşu:** iki şık da **1 tam koşu** istiyor. Maliyeti ayıran koşu değil.
- **1945'in ucuz olma sebebi:** Uzatılan süre 22 yıl ve kapalı bir aralık. 90 künyenin 70'i sadece ileri uzatılacak. Yeni künye sayısı belli (10 kesin + 18 belirsiz). Yerleşimlerin yaklaşık yarısı mekanik iş. Dönem iyi belgelenmiş ve çoğunlukla gün hassasiyetiyle biliniyor.
- **1945'in pahalı yanı:** II. Dünya Savaşı. 1.968 noktanın işgal dönemleri, yüzlerce yeni kronoloji maddesi (bugün 1 tane var) ve 753 sınır hattı işi var. Ayrıca bu işin ağırlığı Osmanlı'ya en uzak coğrafyaya düşüyor; oralarda TDV kapsamı zayıf.
- **1281 öncesinin pahalı olma sebebi:** Her noktanın başlangıcı yeniden araştırılmalı (2.526). Ortaçağ kaynakları gün hassasiyetini nadiren veriyor. Nerede durulacağı belli olmadığı için iş sonsuz bir borç gibi açık kalıyor.
