# NOKTA-ORTADOGU-0077 — Mısır · Sudan · Körfez · Irak (+ dışarıdan gelen 3 madde) · rapor

27 Eylül 2026 · şartname `oturumlar/NOKTA-ORTADOGU-0077.md` · 13 madde · Opus 5.5
Dosyalarım: `denetim/NOKTA-ORTADOGU-0077*` (rapor · 10 ölçüm aracı · YAMA.json).
**`data/yerlesimler_p77_ortadogu.js` YAZILMADI** — sebebi §3'te (kaynaklı yerleşim yok, uydurma yok).
`arac/girdi_listesi.py`ye de dokunulmadı (eklenecek dosya yok).

## 0. Nasıl ölçüldü — iki alet ailesi, iki gövde

| alet | ne sorar | evren |
|---|---|---|
| `-olc.py` · `-kayit.py` · `-yakin.py` | "o pencerede o gün hangi nokta kimin?" (HARITA-0076 `sahip()` şeması, Kudüs sınavından geçmiş) | `girdi.yukle()` = GIRDI_DOSYALARI |
| `-misir.py` · `-sudan.py` · `-irak.py` · `-tavan.py` | sınıf taraması (standart dışı kayıt · toptan gün · mesafe) | aynı |
| canlı motor (`py arac/sunucu.py` + tarayıcı) | ızgara hücresinde HANGİ GÖVDE boyuyor (`osmanli`/`vassal`/`devlet`/`isgal` kaynakları, nokta-poligon) | çizilen gövde |

🔴 **Gövde iki kez ölçüldü.** İlk tur 22 Eylül gövdesine (koşu 6) karşıydı; M-5222 üzerine
**koşu 15 gövdesine (9ce6c942) karşı TEKRARLANDI.** Aşağıdaki "gövde" sayıları koşu 15'indir;
ikisi ayrıştığında ikisi de yazıldı. ⚠️ Tuzak kayda geçiyor: gizli tarayıcı bölmesinde
`tarihAyarla()` `osmanli` kaynağını eşzamanlı günceller ama `devlet`/`isgal` kaynaklarını
GÜNCELLEMEZ — ilk tekrar turunda 1922'yi "misir-sultanligi" okudum. `devletGuncelle(suanki)` +
`isgalGuncelle(suanki)` elle çağrılınca doğru çıktı (1922 → `misir-kralligi`). Çağrı olmadan alınan
tarayıcı ölçümü tarih değiştirmemiş olabilir.

## 1. Hükümler

| madde | hüküm | tek cümle |
|---|---|---|
| H-0001 | **cozuldu** | Silezya boşluğu koşu 15 ile kapandı: 1883-11-05 pencerede 128 boş hücre → **0** |
| H-0004 | **sirada** | kırmızı şerit koşu 15 ile gitti (38 → 0 Osmanlı hücresi); ama Kürne·Ammâre·Nâsıriye·Semâve·Fâv Basra'nın gününe TOPTAN yazılmış |
| H-0005 | **sirada** | yeşil lekeler = işgal taraması tavanı (§2-M1); Sina/Kızıldeniz kıyısı = 5 standart dışı kayıt (YAMA A) |
| H-0006 | **sirada** | turkuaz = `ingiliz-sudani` (36 nokta) · mor = aynı kondominyum `ingiltere` yazılmış (47 nokta) → YAMA B; çizgi 22. paralel hattı, doğru |
| H-0007 | **sirada** | aynı kök sebep (H-0006); "İngiliz Sudanı" etiketi parçalı `ingiliz-sudani` gövdesinin etiketi |
| H-0017 | **sirada** | üç görünümün üç sebebi var: taralı = standart · Britanya = 5 kayıt (YAMA A) · yeşil = tavan (M1) |
| H-0029 | **sirada** | Katar iç dolgusu 1916'da SAHİPSİZ; batı yarısı Ukayr'ın (Suud), kuzey ucu Manama'nın peteği → YAMA C + kuzeye nokta |
| H-0031 | **sirada** | kırmızı dar bölgeler koşu 15 ile gitti; kalan: toptan 1917-03-11 (Halepçe · Hânekîn · Kifri · Tuz) + E hattının sabit Osmanlı yarı rengi |
| H-0033 | **sirada** | Erbil 1917-03-11'de İngiliz = TOPTAN; TDV `erbil`: "Dünya Savaşı'ndan SONRA" · sıra ve toptan liste §2 |
| H-0046 | **sirada** | koridor = Ceylanpınar'ın 4,3 km yanındaki `Qaţţīnah` 1918-10-26'dan (Halep'in günü) Fransız → YAMA D |
| H-0050 | **cozuldu** | Alp boşluğu koşu 15 ile kapandı: 1918-11-11 Tirol 274 boş hücre → **3**; 1900'de de 276 → 2 |
| H-0074 | **kapsam-disi** | gerekçe: Kafkasya — `NOKTA-KAFKAS-0077`nin kapsamı. Ölçümü aşağıda, oraya devredilmeli |
| H-0087 | **senin-kararin** | gerekçe: yeşil şerit tavan kusuru; kaynaklı yerleşim YOK ⇒ çare motor kodunda (M1), o da koordinatörün |

`cozuldu` diyen üç madde: kusur ölçümle kalktı, ben bir şey uygulamadım — koşu 15 kaldırdı.
Yayında olup olmadığı koordinatörde (koşu main'e indi, push'u ben görmedim).

## 2. Maddeler — ölçüm

### H-0005 · H-0017 · H-0087 — Mısır: üç görünümün üç sebebi

**① "Britanya" görünen kıyı — 5 standart dışı kayıt** (`-misir.py`, kutu 24–37D 21,5–32K, 70 nokta):
52'si Kahire kalıbında (`misir-sultanligi`/`misir-kralligi` + `isg:ingiltere`). Uymayanlardan
Mısır'a ait olanlar:

| kayıt | dosya | 1914-12-18'de |
|---|---|---|
| Süveyş | yerlesimler.js | `s: ingiltere` |
| Sina güneyi | yerlesimler.js | `s: ingiltere` |
| Tûr (Sînâ) · Sefâce · Kusayr | yerlesimler_afrika.js | `s: ingiltere` |

Beşinin de `v:` kaydı serbest metin (`"Kavalalı hanedanı"`), `kid` yok — HARITA-0076'nın bulduğu
şema borcu hâlâ açık. Dayanak: TDV `misir` Sînâ'yı Mısır'ın dört bölgesinden biri sayıyor ve
"18 Aralık 1914'te ... Mısır'ı himayesine aldı" diyor; TDV `suveys`: "Mısır'ın diğer yerleri gibi
kanal bölgesi de". ⇒ **YAMA A** (15 öneri: s · isg · v kid).
`Halâib` (1885'ten `ingiltere`) AYRI tutuldu: 22. paralelin kuzeyinde, idaresi tartışmalı; kaynak
aramadım, önerim yok.

**② Yeşil lekeler — işgal taraması mesafe tavanı (M1).** Canlı motorda Mısır gövdesi olan ama
`isgal` taraması olmayan hücreler (0,1°): **163** (koşu 15, 1914-12-18 ve 1922-03-15 aynı).
Büyük kümeler (koşu 6'da ölçüldü, koşu 15'te sayı büyüdü):

| küme | kutu | en yakın nokta |
|---|---|---|
| a — Kattâra (H-0087'nin şeridi) | 27,3–28,6D · 29,4–30,1K | 120–192 km (Bahriye · Mersâ Matruh · Sîva) |
| b — Ferâfire batısı | 26,2–26,4D · 27,4–27,7K | 160–185 km |
| c — Doğu çölü kıyısı | 34,7–35,0D · 24,3–24,5K | 143–177 km (Ebû Ramâd) |

Sebep kodda okundu: `arac/uret_devirler.py` `isgalleri_uret()` taramayı **yalnız `isg:` taşıyan
noktaların `PETEK_GOVDE`sinin birleşiminden** kuruyor; oysa `devlet` gövdesi petek-dışı dolguyu
da içeriyor. Nokta ~150 km'den uzaksa petek bitiyor, gövde bitmiyor → tarama delinir, altındaki
Mısır yeşili (#4ed224) görünür. **Kayıt kusuru DEĞİL:** 52 noktanın 52'sinde de `isg` var.

**③ Taralı alan** = standart, doğru.

### H-0006 · H-0007 — Sudan: aynı kondominyum iki kimlikle

`-sudan.py` (1914-12-18, kutu 21,8–38,7D 3,4–22K): `ingiltere` **47** · `ingiliz-sudani` **36**.
`ingiltere` yazanların **38'i** tam `f:1899-01-19` — künye `ingiliz-sudani`nin açılış günü.
Canlı gövde (koşu 15, 0,25°): `ingiltere` 1234 hücre · `ingiliz-sudani` 612 hücre.
TDV `sudan`: *"19 Ocak 1899'da 'condominium' ... adı verilen yeni bir idare başlattı."*
⇒ **YAMA B**: B1 **39** kayıt (1899-01-19 ve 1909 Bûr Sûdân → `ingiliz-sudani`) · B2 **8** kıyı
kaydı (Sevâkin 1884 · 6 kayıt 1885 · Tokar 1891: 1899'a kadar `ingiltere`, sonra `ingiliz-sudani`).
⚠️ B2: Sevâkin'in kondominyuma katıldığı ayrı gün TDV'de **bulunamadı** — genel 19 Ocak kullanıldı.
**Çizgiler:** kesik hat `d1914-sudan-misir-sultanligi` (C, 22. paralel) ve `d1923-sudan-libya`
(C) — `d-sinir-hat` kaynağında okundu. Doğrular; Emre'nin sorduğu "anlamı" budur.

### H-0029 — Katar: yarımada neden yarım

1916-09-17, pencerede **4 nokta**: `Doha` katar · `Katar Yarımadası (iç, dolgu)` **SAHİPSİZ**
(`yerlesimler_ek_korfez.js`: tek dönemi 1559–1670) · `Ukayr` suud-ucuncu · `Manama` ingiltere.
En yakın nokta sınaması: batı kıyısı (50,78D) → iç dolgu 17 km; **kuzey ucu (51,22D 26,15K) ve
Zübâre (51,03D 25,98K) → Manama 52–64 km.** Yani iç dolgu düzeltilse bile kuzey Bahreyn boyanır.
TDV `katar`: 1871 sonbaharı Osmanlı kontrolü · 29 Temmuz 1913 Osmanlı yarımadadan feragat ·
3 Kasım 1916 himaye. ⇒ **YAMA C** (iç dolguya Doha zinciri; 1871 GÜNÜ komşudan: Doha, TDV yalnız
mevsim veriyor). Kuzey için aday: **Zübâre** — TDV `katar` onu Katar'a tâbi nahiye olarak anıyor
(1895). YAZMADIM: 1871 öncesi zinciri (1776 Âl-i Halîfe, Bahreyn nüfuzu, Suud) TDV'de dönem dönem
kurulamıyor; `bos:` ile yazmak kuzey Katar'a 600 yıllık yeni delik açar. Karar koordinatörün.

### H-0004 · H-0031 · H-0033 — Irak: kırmızı şerit gitti, toptan günler kaldı

**Kırmızı şerit (Kürne doğusu · Kasr-ı Şirin):** koşu 6 gövdesinde 47,5–48,0D 30,6–31,8K'de 38 hücre
Osmanlı boyalıydı (dönem 549 = 1914-11-22→12-18 ve 564 = 1917-03-11→11-07; 548 ve 552'de yok) ve
orada hiçbir Osmanlı noktası yoktu. **Koşu 15: 0 hücre** (Kürne 1914 ve 1917 · Kasr-ı Şirin 1917).

**Toptan günler** (`-irak.py`, 38,5–48,7D 29–37,5K, `s:ingiltere` başlangıç günleri):
```
1914-11-22   6  Basra · Semâve · Nâsıriye · Ammâre · Kürne · Fâv
1915-09-26   1  Kût el-Amâre
1917-03-11  19  Bağdat · Kerbelâ · Sâmerrâ · Tikrit · Hille · Necef · Kûfe · Vâsıt · Kût el-Amâre ·
                Erbil · Kifri · Hânekîn · Tuz Hurmatu · Halepçe · Âne · Hît · Fellûce · Ramâdi · Dîvâniye
1918-10-30   4  Şehrizor · Kerkük · Silopi · Cumai
1918-11-08  10  Musul · Rewândiz · Akra · Duhok · Zaho · Telafer · Sincar · Gōrabī · Tirwānīsh · İmâdiye
```
Emre'nin sorusuna cevap: **sıra Basra (1914-11-22) → Bağdat (1917-03-11) → Kerkük (1918-10-30) →
Musul (1918-11-08) doğru; ama Bağdat'ın etrafı "hep birden" düşmedi, veri öyle yazıyor.**
TDV'nin verdiği ayrı günler (bulduklarım):

| yer | TDV | veride | fark |
|---|---|---|---|
| Basra | `basra`: 22 Kasım 1914 | 1914-11-22 | ✓ |
| Ammâre | `amare`: 1915'ten itibaren İngiliz | 1914-11-22 | ✗ (yıl) |
| Necef | `necef`: **7 Mart 1917** | 1917-03-11 | ✗ (4 gün) |
| Tuz Hurmatu | `kerkuk`: 1918 Nisanı bozgunu | 1917-03-11 | ✗ (~13 ay) |
| Tikrit | `tikrit`: "Dünya Savaşı'nda" (yılsız) | 1917-03-11 | ölçülemedi |
| Erbil | `erbil`: "Dünya Savaşı'ndan **sonra**" | 1917-03-11 | ✗ — H-0033'ün enklavı bu |
| Kerkük | `kerkuk`: 28 Ekim 1918 hücumu → boşaltma | 1918-10-30 | ✓ (gün yakın) |

**bulunamadı:** Kürne · Nâsıriye · Semâve · Hânekîn · Halepçe · Kifri · Ramâdi · Hît · Âne ·
Fellûce · Kerbelâ · Vâsıt — slugları ya boilerplate döndü (~30 KB, "Kopyalama metni" yok:
tuzak ④) ya 1914-19 cümlesi yok. Yama YAZMADIM: tarih uydurulmaz; bu bir kaynak kalemidir.
**H-0031'in kırmızı çizgisi:** `d-sinir-hat` `g1-osm-ir` (E sınıfı Osmanlı–İran hattı),
`renk_sol:#6b081a` sabit — toprak İngiliz'e geçince de sol yarı Osmanlı kırmızısı kalıyor.
"İngiltere İran toprağını mı işgal etti" sorusunun cevabı: hayır, o çizgi antlaşma hattıdır;
yarı rengi sahibi izlemiyor (arayüz/d_sinir sahibinin kalemi).

### H-0046 — Ceylanpınar koridoru

Pencerede 6 nokta; `Qaţţīnah` (`yerlesimler_sinir_guney.js`, `sinir:true`, Ceylanpınar'a
**4,3 km**) `s: fransa-cumhuriyet` **1918-10-26**'dan. O gün Halep'in işgal günüdür; Ras'ülayn
için Fransız egemenliği kaynağı yok. Kaydın KENDİ kaynağı sınırı Ankara İtilafnamesi'ne
(20.10.1921) bağlıyor. Canlı gövde (koşu 15, 1918-10-27): koridor kutusunda `fransa-cumhuriyet`
**337** hücre, Osmanlı 398. ⇒ **YAMA D**: 1920-04-23'e kadar Osmanlı, sonra tbmm, 1921-10-20'den
sonra `suriye-lubnan-mandasi`; `isg` Ceylanpınar'dan. ⚠️ Ceylanpınar'ın `isg` kaynağı kendisi
"bulunamadı" ⇒ devralma zincirleme devralma sınırında; onay koordinatörün.
"Ceylanpınar'ı sınır şehri mi saymış" — hayır: sınırı çizen Qaţţīnah, Ceylanpınar değil.

### H-0074 — Kafkasya (kapsam-disi, ölçüm devredilmeli)

1920-07-28, Kars penceresinde 11 noktanın **9'u `sovyet-rusya`** (Gümrü · Iğdır · Şerur ·
Eçmiyadzin …) — `s:` zinciri 1917-11-07'den (Ekim Devrimi) itibaren; 1918-05-28 → 1920-12-02
Ermenistan Cumhuriyeti dönemi yalnız **Revan**'da var. Emre'nin "ayrı görünen toprak" dediği
**Revan'ın peteği** (tek Ermeni noktası). Dağıstan penceresi: `Derbend` `s: rusya` 1813 → **1923**;
künye `rusya` 1917-03-15'te bitiyor ⇒ künye aşımı (§3.5 sınıflandırması yapılmadı).
Gerekçe: bu kolun kapsamı Mısır-Sudan-Körfez-Irak; `NOKTA-KAFKAS-0077` bu dosyalarla çalışıyor.

### H-0001 · H-0050 — Orta Avrupa (cozuldu)

Veride kusur yoktu (Glatz almanya · Jeseník/Broumov avusturya; Tirol avusturya). Koşu 6 gövdesi
dağlık alanı boş bırakıyordu (Südetler 128, Tirol 274 hücre; 1900'de de 276 — tarihe bağlı değil).
Koşu 15: **0** ve **3**. Emre'nin "A/B yüzünden mi" sorusu: A/B değil, gövde üretimi.
Yan not: `Innsbruck`/`Landeck` `avusturya` dönemi 1918-11-**12**'de bitiyor, künye 11'inde —
bir günlük künye aşımı (`yerlesimler_a78_avrupa.js`), benim kapsamımda değil.

## 3. Niçin nokta yazılmadı

Mısır boşluklarına aday GeoNames kayıtları bulundu — Kattâra Çukuru (30,231K 27,766D, depresyon) ·
‘Ayn Dāllah (27,322K 27,340D, pınar) · Wādī al-Jimāl (24,664K 35,089D, vadi). **Üçü de yerleşim
değil**; 1914'te var olduğu kaynaklı yerleşim (Mersâ Alam, Berenis) **bulunamadı**. Emre'nin ilkesi
(p0019/H-0056, `yerlesimler_p0043libya.js` başlığı): *"yerleşim var ise nokta konur; yok ise
uyduracak hâlimiz yok."* Ayrıca kusur nokta eksikliği değil, tarama tavanı: çare
`uret_devirler.py` `isgalleri_uret()`te (taramayı sahip devlet gövdesiyle birleştirmek), ve bu
dosya motor tuzunda **değil** (tuz: uret_petek · renkler · girdi · motor_onbellek). Nokta
yolu seçilirse koordinatlar yukarıda hazır.

## 4. Öneriler — seçenekli

1. **YAMA A + B + C** (`denetim/NOKTA-ORTADOGU-0077-YAMA.json`, 68 öneri, UYGULANMADI) —
   dosya sahipleri: `yerlesimler.js` (Oturum 0) · `yerlesimler_afrika.js` · `yerlesimler_h2_afrika.js`
   · `yerlesimler_ek_korfez.js`. Önerim: A ve B1 hemen (kaynak TDV, gün künyeyle birebir); B2 ve C
   koordinatör onayıyla (gün kaynağı eksik / komşudan).
2. **YAMA D** — `yerlesimler_sinir_guney.js` sahibi; onay şartlı (§2 H-0046).
3. **M1 (isg tavanı)** — `uret_devirler.py`de düzeltme; koşu istemez, `uret_devirler` yeniden koşar.
   Önerim bu; noktalı çözüm ancak kaynaklı yerleşim bulunursa.
4. **Irak toptan günleri** — ayrı kaynak kalemi (19+5 nokta). TDV'den bulunan 5 fark yukarıda;
   kalan 12 yer için akademik kaynak aranmalı. Kronoloji maddesi (H-0033'ün isteği) kronoloji
   dosyası sahibinin.
5. **H-0074** → `NOKTA-KAFKAS-0077`e devir.
