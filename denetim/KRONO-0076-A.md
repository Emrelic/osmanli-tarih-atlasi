# KRONO-0076-A — 28 madde · ölçüm, hüküm, dayanak

> Parti `parti-emrelic-0076` · gece vardiyası, 23 Eylül 2026 · şartname
> `oturumlar/ORTAK-0076.md` + `oturumlar/SEVK-0076.md`
>
> 🔴 **`cozuldu` bu gece ne demek:** bu vardiyada hiçbir oturum `data/`ya
> yazmaz; yamalar `denetim/` altında toplanır, koordinatör sırayla uygular.
> Burada `cozuldu` = **yama üretildi ve sınavdan geçti**, uygulama
> koordinatördedir. İnen değişiklik değil, uygulanmaya hazır değişikliktir.

## 0. Üç ölçüm aleti (hepsi tekrar koşar)

| alet | ne ölçer | sonuç |
|---|---|---|
| `denetim/KRONO-0076-A-olc.py` | 28 maddenin kronoloji karşılığı veride var mı | **28/28 VAR**, 0 bulunamadı |
| `denetim/KRONO-0076-A-kapsama.py` | maddenin olayına bağlı ek okuma kartı var mı | 63 dosya · 594 kart · **20 maddede bağlı kart YOK** |
| `denetim/KRONO-0076-A-sina.py` | üretilen yamanın şema · id · çapa · üslup sınavı | **16 kart, TEMİZ** |
| `denetim/KRONO-0076-A-yatay-olc.py` · `-isg-olc.py` | H-0036 ve H-0043'ün saha ölçümü | aşağıda §3 |
| `denetim/KRONO-0076-A-h0009-olc.py` | H-0009 açık uçlu talebin hacmi | **82 kart** |

### 0.1 Ölçüm evreni
- Kronoloji: `data/olaylar*.js` + `kronoloji*.js` = **128 dosya · 6665 kayıt**,
  1855-1884 penceresinde **455 kayıt**.
- Ek okuma: `data/ekokuma*.js` + `merak*.js` = **63 dosya · 594 kart** (yama
  sonrası karşılaştırmada 596).
- Yerleşim: `arac/girdi.yukle()` — **87 girdi dosyası · 3921 nokta**.

### 0.2 🔴 Kendi aletimde bulduğum iki kusur (ikisi de sayıyı yalan yapıyordu)
1. **Türkçe normalleştirici (D215).** İlk koşuda "4 madde bulunamadı" çıktı
   (H-0001 · H-0016 · H-0018 · H-0055). Sebep veri değil, süzgeçti: `"I".lower()`
   ve `ı`/`İ`, NFKD'den sağ çıkıp `[^a-z]` süzgecinde sessizce siliniyordu
   (`Islahat`→`slahat`, `Kıbrıs`→`k brs`). Katlama düzeltildi, sayı **4 → 0**.
   Artık süzgeç, bilinen bir pozitif vakayla (`Islâhat` · `Kıbrıs` · `Şûrâ`)
   koşu başında ateşleniyor; ateş almazsa betik durur.
2. **Elle yazılmış yerleşim ayrıştırıcısı.** 3921 nokta yerine **2731** buldu,
   kayıt duzeyindeki `d:` dizisini (Osmanlı doğrudan dönemleri) tanımayıp
   "SAHİPSİZ" saydı ve kayıt sınırını kaydırıp Yenipazar'a komşu kaydın
   devletini yapıştırdı (`yunanistan`). Atıldı; ölçüm motorun kendi
   yükleyicisiyle (`arac/girdi.yukle`) yeniden yapıldı.
3. **Sahiplik sorgusunun ilk hâli ilk eşleşeni döndürüyordu.** `d:` (Osmanlı)
   önce sorulduğu için aynı gündeki `isg:` (işgal) kaydını **gizliyordu** —
   yani "Bosna'da işgal kaydı yok" hükmü, aranmadığı için boş çıkan kümeden
   doğacaktı. Dört kova da (d · v · s · isg) birlikte dökülüyor.

---

## 1. Madde madde hüküm

### ✅ `cozuldu` — kart üretildi, sınavdan geçti (15 madde · 16 kart)
Yama: `denetim/KRONO-0076-A-YAMA-ekokuma_p76d.js` → `window.EKOKUMA_P76D`
(uygulanacak yer `data/ekokuma_p76d.js`).

| madde | kart | dayanak (TDV) |
|---|---|---|
| H-0001 | `sebep-sonuc-islahat-fermani-1856` | islahat-fermani (Ufuk Gülsoy) |
| H-0005 | `teknik-arazi-kanunnamesi-1858` | arazi-kanunnamesi (Mehmet Âkif Aydın) |
| H-0006 | `sebep-sonuc-kuleli-vakasi-1859` | kuleli-vakasi (Zekeriya Türkmen) |
| H-0010 | `teknik-darulfunun-dort-deneme` · `tartisma-universite-kurulus-yili-1453-mi-1863-mu` | darulfunun (Ekmeleddin İhsanoğlu) |
| H-0013 | `teknik-eyaletten-vilayete-1864` | eyalet (Halil İnalcık) — `vilayet` gövdesizdir |
| H-0016 | `kimdir-yeni-osmanlilar-cemiyeti` | yeni-osmanlilar-cemiyeti |
| H-0018 | `teknik-sura-yi-devlet-1868-idari-yargi` | sura-yi-devlet (Ali Akyıldız) |
| H-0019 | `teknik-galatasaray-mekteb-i-sultanisi-1868` | galatasaray-mekteb-i-sultanisi (Adnan Şişman) |
| H-0021 | `teknik-bulgar-eksarhligi-1870-kilise-ve-kimlik` | bulgaristan (Nazif Kuyucuklu) |
| H-0030 | `teknik-kanun-i-esasi-1876-sistem` | kanun-i-esasi |
| H-0039 | `kimdir-ali-suavi-ve-ciragan-baskini` | ali-suavi (Abdullah Uçman) |
| H-0055 | `tartisma-kibris-1878-beklenen-ingiliz-destegi` | kibris (Halil Fikret Alasya) · lozan-antlasmasi |
| H-0056 | `antlasma-ayastefanos-berlin-farki-1878` | berlin-antlasmasi (Ali İhsan Gencer) |
| H-0061 | `sebep-sonuc-iskenderiye-1882-ingiliz-cikarmasi` | urabi-pasa (Hilal Görgün) · lozan-antlasmasi |
| H-0062 | `tartisma-ingiltere-dost-mu-dusman-mi-1856-1882` | urabi-pasa · kibris · islahat-fermani |

**Kart sınavı:** JS ayrıştırma temiz (`node --check`) · 7 alanın 7'si her kartta ·
596 mevcut kart id'siyle çarpışma **0** · 16 `olay:` bağının 16'sı gerçek bir
kronoloji kaydıyla eşleşiyor, çapasız bağ **0** · geliştirici sesi ihlali **0**
(süzgeç bilerek kirletilmiş dizgide önce ateşlendi: 5 vuruş).

**TDV'de aranıp bulunamayanlar** (kartlarda `bulunamadı` diye yazıldı, "yok"
denmedi): `yedi-sekiz-hasan-pasa` müstakil madde yok · `divan-i-muhasebat`
müstakil madde açılamadı · 1453 üniversite iddiasının gerekçesi · 1872 Bulgar
aforozu · Yenipazar sancağının Berlin'deki düzenlemesi · Kıbrıs antlaşmasının
Osmanlı'ya beklenen desteği sağlayıp sağlamadığına dair değerlendirme.

**TDV kendi içinde çelişen yer** (taraf seçilmedi, ikisi de kartta):
Bulgar Eksarhlığı — `bulgaristan` **11 Mart 1870**, `makedonya` **28 Şubat 1870**.
Fark 11 gün; Rûmî/Milâdî farkıyla uyumlu ama maddeler bunu söylemediği için
**birleştirilmedi**.

### 🔴 `senin-kararin` — açık uçlu kapsam talebi (1 madde)
| madde | ölçüm | gerekçe |
|---|---|---|
| H-0009 | `padisahlar.js` **41 kayıt** · `vefat_id` taşıyan **27** kimlik · başlığında vefat/ölüm geçen hükümdar maddesi 66 | Talep "tüm padişahların ölüm maddesine övgü + yergi kartı" = **82 kart**, her biri için ayrı bir hükümdar maddesi okunması gerekir. Kapsamı yalnız Emre açar; üretilmedi. |

### ▶ `sirada` — ölçümü yapıldı, hükmü başka oturumda (2 madde)
| madde | ölçüm | kime |
|---|---|---|
| H-0036 | §3.1 | `HARITA-0076` |
| H-0043 | §3.2 | `SINIR-BERLIN-0076` |

### ▶ `sirada` — kart üretilmedi (10 madde)
Gerekçe tek: bütçe. Koordinatörün hükmü (M-5025) "bitirmeye çalışıp kalite
düşürme" olduğu için, kaynağı tek koşuda kesinleşmeyen maddeler bırakıldı.
Her birinin bir sonraki oturumda nereden başlayacağı yazılıdır:

| madde | konu | başlanacak kaynak |
|---|---|---|
| H-0003 | Avrupa devletler sistemi nedir | `paris-antlasmasi`; sistem tanımı TDV dışı akademik kaynak ister |
| H-0007 | Suriye/Lübnan'ın halkları (Dürzî · Mârûnî · Süryânî · Keldânî · Yezîdî) | `durzilik` · `maruniler` · `suryaniler` — **çok maddeli**, tek kart yetmez |
| H-0012 | Çerkes sürgününün dünyadaki yankısı | mevcut iki kart (`ekokuma_karadeniz.js`) sürgünü anlatıyor, **yankıyı anlatmıyor** |
| H-0014 | Girit ve Kıbrıs'ın Helenliği iddiası | `girit` · `kibris` — çekilen özet gövdeyi doğrudan aktarmadı, ikinci çekim şart |
| H-0017 | İmtiyazlar bağladı mı kopardı mı · Osmanlıcılık niçin tutmadı | `girit` + `osmanlicilik` |
| H-0024 | Vatan yahut Silistre · Nâmık Kemal kişi kartı | `namik-kemal` · `vatan-yahut-silistre` |
| H-0025 | Balkan isyanlarının başat sebebi (dört ihtimal tartışılacak) | `hersek` · `bosna-hersek` · `sark-meselesi` |
| H-0026 | Abdülaziz'in hal'i · intihar mı cinayet mi | `abdulaziz` — **tartışmalı**, iki görüş de kaynağıyla verilmeli |
| H-0029 | V. Murad'ın şahsiyeti ve akıl sağlığı | `murad-v`; mevcut `tartisma-deli-padisahlar-karsilastirma` kartıyla mükerrerlik ÖNCE ölçülmeli |
| H-0035 | 93 Harbi'nin sebebi, Rusya neyi bahane etti | `doksanuc-harbi` |

📌 H-0056'nın **harita** tarafı (Ayastefanos ↔ Berlin karşılaştırma görseli)
üretilmedi: `gorsel:` yalnız kamu malı/CC0 olabilir ve uygun görsel
ölçülmedi. Kartın metin tarafı indi.

---

## 2. İkiz sınavı
`H-0061` ve `H-0062` **aynı başlığı** taşır (11-12 Temmuz 1882 · İskenderiye).
Mükerrer **değildir**: gövdeler ayrı sorular sorar — biri işgalin gerekçesini ve
hukukî sonucunu, öteki İngiltere'nin dostluk/düşmanlık tartışmasını ister. Bu
yüzden iki ayrı kart kuruldu, ikisi de aynı çapaya bağlandı.

---

## 3. Yatay ölçümler — hüküm bende DEĞİL

### 3.1 H-0036 · Kars (hüküm `HARITA-0076`'da)
Ölçüm kutusu: lat 39,5-41,8 · lon 41,0-45,0 → **34 yerleşim**.

| gün | ölçülen |
|---|---|
| 1877-11-17 → 1877-11-19 | sahibi değişen: **1 / 34** — yalnız **Kars** (OSMANLI → rusya) |
| 1877-04-24 → 1878-03-03 | sahibi değişen: **17 / 34** |

⇒ Kars 1877-11-18'de Rusya'ya geçiyor, **çevresindeki Osmanlı noktaları ise
1878-03-03'e (Ayastefanos) kadar Osmanlı kalıyor**: Arpaçay · Digor ·
Küçükperveli · Sarıkamış · Hanak · Posof · Şavşat · Artvin · Iğdır · Borçka ·
Hopa · Sarp · Hulo · Saylıca · Makhalak'auri (Ardahan 1877-05-17'de zaten
Rusya). Yani **105 gün boyunca** Kars, Osmanlı noktalarının ortasında tek başına
Rusya renkli bir nokta olarak duruyor; petek motoru bu noktayı kendi sahibiyle
boyadığı için harita bir **Rus eksklavı** gösteriyor.

🔴 Bu bir sınır hatası değil, **tarih asimetrisi**: kalenin düşüş günü kaynaktan
(TDV `doksanuc-harbi`, 18 Kasım) alınmış, çevresindeki toprağın el değiştirmesi
ise antlaşma gününe (3 Mart 1878) bağlanmış. Emre'nin ikinci cümlesi de aynı
şeyi söylüyor: *"Kars'ın arkasında kalan toprakların Kars'tan önce ele
geçirilmiş olması doğal olandır."* Ölçüm bunu doğruluyor.
⚠️ Çare seçilirken **iki uç da ölçülmeli** (D206): çevre noktaları 1877'ye
çekmek, bu defa Ayastefanos'a kadar Osmanlı kalan yerleri erken kaybettirir.
Sefer oku talebi ayrı bir kalemdir ve `SEFER-OK` ailesinin işidir.

### 3.2 H-0043 · Bosna-Hersek ve Yenipazar (hüküm `SINIR-BERLIN-0076`'da)
Ölçüm kutusu: lat 42,0-45,5 · lon 15,0-21,0 → **57 yerleşim**;
1878-07-28'de **Osmanlı doğrudan** olan: **23**.

| bulgu | sayı | yerler |
|---|---|---|
| 1878-07-29'da `isg: avusturya` başlıyor | **14** | Saraybosna · Mostar · Banaluka · Travnik · Tuzla · Foça · Livno · Yayça · Visoko · Vişegrad · Srebrenik · Zvornik · Trebinye · Konjic |
| işgal 1878-**09-18**'de başlıyor | **2** | Bihaç · Ostrovica |
| yalnız **1788** işgali var, 1878 kaydı **YOK** | **2** | Bosanska Dubica · Bosanski Novi |
| 1878 işgal kaydı hiç **YOK** | **3** | Bosanski Brod · Bosanska Krupa · **Yenipazar (Novi Pazar)** |

(Kutuya düşen Prizren ve İşkodra Bosna değildir; işgal kaydı olmaması doğrudur.)

⇒ **Emre haklı ve şikâyeti ölçülenden dar.** Yenipazar gerçekten Osmanlı rengi
duruyor — ama yanında **dört Bosna yerleşimi daha** (Brod · Krupa · Dubica ·
Novi) 1878 işgal kaydı taşımıyor; bunlar Bosna'nın **kuzeybatı şeridi**, yani
tam da haritada metinle uyuşmayan yer.
📌 Sınıflandırma notu: TDV `berlin-antlasmasi` **işgal** der, ilhak demez
(*"Bosna ve Hersek Avusturya tarafından işgal edilecekti"*), yani mevcut
14 kaydın `isg:` kovasında olması **doğrudur** — eksik olan, aynı kovanın
eksik kalmış olmasıdır. Yenipazar sancağı için Berlin'de kararlaştırılan
düzenlemeye dair cümle taranan maddede **bulunamadı**; sancağın hangi kovaya
(`isg:` mi, düz Osmanlı mı) gireceği bu yüzden **kaynak kararı bekler** —
ölçüm verildi, hüküm `SINIR-BERLIN-0076`nındır.

---

## 4. Değişen dosyalar
```
denetim/KRONO-0076-A.md                      (bu rapor)
denetim/KRONO-0076-A-YAMA-ekokuma_p76d.js    16 kart · window.EKOKUMA_P76D
denetim/KRONO-0076-A-olc.py                  kronoloji karşılığı ölçümü
denetim/KRONO-0076-A-OLCUM.md                  ↳ çıktısı
denetim/KRONO-0076-A-kapsama.py              mevcut kart kapsaması
denetim/KRONO-0076-A-KAPSAMA.md                ↳ çıktısı
denetim/KRONO-0076-A-sina.py                 yama sınavı (5 ölçüt + 2 pozitif vaka)
denetim/KRONO-0076-A-yatay-olc.py            H-0036 · H-0043 saha ölçümü
denetim/KRONO-0076-A-isg-olc.py              H-0043 işgal günü ince ölçümü
denetim/KRONO-0076-A-h0009-olc.py            H-0009 hacim ölçümü
denetim/KRONO-0076-A-ileti-1.txt             ilk aksaklık iletisi
```
`data/` · `arac/` · `js/` · `index.html` · `css/` — **dokunulmadı.**
