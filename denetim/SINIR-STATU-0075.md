# SINIR-STATU-0075 — H-0003 · H-0004 · H-0005 · H-0018 · H-0048
21 Eylül 2026 · oturum SINIR-STATU-0075 · **KOD/VERİ YAZILMADI** (`data/` `arac/` kilitli; yalnız `denetim/` altına araç + bu rapor)
Ölçüm araçları (hepsi `denetim/ARAC-SINIR-STATU-0075-*`): `SAPMA.py` (renk↔hat) · `KAPSAMA.py` (çevrenin hatla kapsanan payı) · `NOKTA.py` (nokta→boya sahibi) · `SIRP.py` · `YERLESIM.py` (kutudaki nokta+durum) · `KAYIT.js` (hat kaydı, koordinatsız) · `TDV.py` (ham HTML'den cümle ayıkla) · `PDF.py`. Girdi hatları/gövdeleri `ARAC-D-RENK-0073-DOK.js`/`GOVDEGUN.js` ile döküldü.

🔴 **Ölçüm tabanı:** diskteki `data/devletler_harita.js` şu an 112 KB (koşu yazıyor; HEAD'de 75,8 MB). Gövdeler **HEAD sürümünden** (`git show HEAD:…`) döküldü = Emre'nin ekran görüntülerini üreten yayınla aynı. Koşu bitince sayılar değişebilir; komutlar aşağıda.

---
## 0. "D kalite" bu projede ne demek (tanımdan, adından değil)
Kaynak: `oturumlar/GORUNUM-ABCD-0916.md` (A–F altı kademe, BAĞLAYICI) + `js/d_katman.js` başlığı.
- **D = FİİLÎ** kesin sınır: koordinatı belli ama hukuken geçersiz (işgal/ateşkes hattı). **E = HUKUKÎ kesin sınır** (barış antlaşması/protokol). **ESKİ "D" = bugünkü E.**
- `sinif` alanı her hat kaydında; hukukî görünüm `F>E>C`, fiilî görünüm `D>F>E>C`.
- H-0003/H-0004'te görünen koyu mavi kesikli çizgi = `D_HAT_RENK #0a2f5c` (`js/d_katman.js`) → **E/C sınıfı hukukî hatlar**. 1830'da bu iki ülke için fiilî **D** kaydı yok (kutuda D = 0).
- 🟡 **Kalitenin gerçek anlamı:** E hatlarının geometrisi `Natural Earth 10m admin-0 (bugünkü sınır)`; `kesinlik_km` 1,5–2 ve "ÖLÇÜLMEDİ", geçerliliği "değişmedi" beyanına bağlı. Yani "milimetrik" = **bugünkü sınırın 1830'a taşınmış hâli, ~1–2 km ölçek hatasıyla**; 1830 tarihli antlaşma metninden koordinat okunmuş DEĞİL (kayıtların `dayanak:` alanı antlaşmayı, IBS çalışmasını gösteriyor).

## 1. H-0003 İsviçre — 1830-02-03 · kutu 4,83–11,44E · 45,38–48,05N
**Soru: sınırlar D(E) kalite belli mi, renk ona göre mi?** → **Yarı yarıya belli; renk hatta OTURMUYOR.**

**Belli olan (batı + güney, 8 hat kaydı, 974 km):**
| hat | sınıf | uzunluk | tarafları |
|---|---|---|---|
| d1923-fr-ch-1 | E | 39 km | Fransa/İsviçre |
| d1923-fr-ch-2 | E | 171 km | Fransa/İsviçre |
| dg4-fr-ch-alsas | E | 58 km | Fransa/İsviçre (Alsas) |
| dg4-sa-ch-cenevre | E | 44 km | Sardinya/İsviçre |
| dg4-sa-ch-valais | E | 57 km | Sardinya/İsviçre |
| dg4-sa-ch-leman | **C** | 55 km | Leman gölü |
| dg4-sa-ch-piyemonte | E | 218 km | Sardinya/İsviçre |
| dg4-hab-ch-lombardiya | E | 332 km | Habsburg/İsviçre |

**Belli OLMAYAN (kuzey + doğu):** `dg3-ch-de-1879-oncesi` (Baden/Württemberg — Ren/Untersee, kutu 7,56–9,58E · 47,51–47,83N) ve `dg3-hab-ch-1893-oncesi` (Vorarlberg/Tirol/Vinschgau, kutu 9,49–10,50E · 46,51–47,57N) → ikisi de `sinif:YOK`, `hat:` yok, kayıtların kendi notu: *"1923 hattının koordinatı ELDE YOK ⇒ bu kutuda E/D ÇİZİLMEZ, A/B (ya da C) geçerli"*. Hukukî sınıfları E (1854/1878/1879 ve 1892 antlaşmaları dayanak) ama koordinat yok.

**Kapsama (`KAPSAMA.py`, gövde çevresi ~1020 km, hatta ≤12 km):** E %30 (306 km) · C %10 (106 km) · **hatsız kara komşu %59 (597 km)** · kıyı/dış %1.

**Renk hattan sapıyor (`SAPMA.py`, hat üstünde ~5 km'de bir nokta, ±5 km yan):**
| hat | nokta | iki yan DOĞRU | ne oluyor |
|---|---|---|---|
| fr-ch-1 | 7 | 0 | İsviçre rengi iki yanı da boyuyor (Fransa'ya medyan 8 km, en çok 14 km taşıyor) |
| fr-ch-2 | 34 | 9 (%26) | 16 nokta iki yan Fransa, 9 nokta iki yan İsviçre |
| alsas | 11 | 1 | 10 nokta iki yan İsviçre (medyan 8/en çok 9 km) |
| cenevre | 8 | 0 | 7 iki yan İsviçre (5/10 km) |
| valais | 11 | 0 | 11/11 iki yan İsviçre — **medyan 20, en çok 27 km** |
| piyemonte | 43 | 9 (%21) | 25 iki yan İsviçre (medyan 18, en çok 29 km) · 3 nokta ÜÇÜNCÜ devlet (Avusturya) |
| lombardiya | 66 | 0 | **64/66 iki yan AVUSTURYA — Avusturya rengi hattı medyan 18, en çok 29 km İsviçre'ye doğru aşıyor** |
| **toplam (E/C, İsviçre)** | **190** | **19 (%10)** | |

Yorum: 1830'da hat *var* (batı/güney), renk onu ~20–30 km (bir petek) yanlış tarafa taşıyor. Ekran görüntüsündeki Cenevre–Lyon–Chambéry bölgesi tam bu.

## 2. H-0004 Hollanda — 1830-02-03 · kutu 1,59–8,96E · 48,91–53,82N
**Belli mi?** → **Kısmen: iki kara kenarı E, üçüncüsü YOK; renk kayık.**
- Renk: gövde "hollanda" **Belçika'yı da içeriyor** (görselde Brüksel/Anvers/Liège kahverengi) — 1830-02-03'te doğru (Birleşik Hollanda Krallığı, Belçika 4 Ekim 1830'da ayrıldı; hat kaydı `dg4-nl-fr-kortrijk` penceresi `1820-03-28 → 1830-10-04` aynı şeyi söylüyor). Lüksemburg'un gövdede ayrı mı içeride mi olduğu ÖLÇÜLMEDİ. Yani sorun kapsam değil hat kayması.
- Hatlar: `dg4-nl-fr-kortrijk` (Kortrijk 1820, E, 462,7 km, kesinlik 1,5 km) · `d1923-nl-de` (Aachen 1816/Meppen 1824, E, 476,1 km, kesinlik 2 km; IBS No.31'e dayalı, 1949–1963 devirleri kaynakta sayılı).
- **Eksik kenar:** Belçika(Birl. Hollanda)–Prusya, Aachen–Liège güneyi: `dg4-nl-de-belcika-dogu` (1816-06-26 → 1839-04-19) `sinif:YOK`, kutu 5,95–6,45E · 50,12–50,80N, "koordinat ELDE YOK".
- **Kapsama:** gövde çevresi ~3642 km, %59'u kıyı (hat gerekmez). Kalan kara ~1500 km'nin **yalnız 286 km'si (%19) hattın ≤12 km'sinde**.
- **Sapma:** `d1923-nl-de` 95 nokta: iki yan doğru %13 (12) · 53 nokta iki yan HOLLANDA (medyan 11, en çok 40 km) · 29 iki yan ALMANYA (10/24 km). `kortrijk` 92 nokta: iki yan doğru %17 (16) · 74 nokta iki yan HOLLANDA (**medyan 17, en çok 36 km Fransa içine taşıyor**).
- **Toplam iki hat:** 187 nokta, 28 iki yan doğru (%15).

**Ortak hüküm (H-0003 + H-0004):** "Renkleri D(E) sınıra göre ayarlayalım" işi **`denetim/D-RENK-0073-OLCUM-0920.md` §5 (c) "hat varsa hat bıçaktır, yoksa petek"** işinin tam konusu; iki görsel onun kanıtı (bkz. §6-A). Bu iki bölgede fiilî D yok; E ile C var.

## 3. H-0005 Sırbistan — 1830-11-08 · kutu 16,85–22,92E · 42,22–46,02N
**Soru: Belgrad özerk bölgenin içinde mi? Sınır ne olmalı?**

### 3.1 Kaynaklar (kırmızı çizgi uyumlu)
- **TDV `sirbistan` (HTTP 200, 45.333 karakter, ham HTML'den okundu):** [160] *"17 Ekim 1830'da verilen bir imtiyaz fermanıyla Sırplar muhtar bir idare elde etti"*; [161] *"kale muhafızları dışında Sırp topraklarında hiçbir Türk'ün oturmayacağı"*; *"1867'de … Osmanlı askerî idaresinde bulunan Belgrad, Fethülislâm (Kladovo), Semendire ve Böğürdelen (Šabac) kalelerindeki garnizonların geri çekilmesi"*; [219] *"1830 yılında özerklik hakları elde eden **Belgrad paşalığında** … 1834'te bütün Sırbistan'da yaklaşık 15.000 Türk … 6000'i Belgrad, 4000'i Öziçe'deydi"*.
- **TDV `belgrad` (HTTP 200, 12.184 karakter):** [43] *"Belgrad Sırbistan'ın idarî ve siyasî merkezi oldu (1839)"*; [44] *"Türk halkının 1862'de, son Osmanlı garnizonunun da 1867'de ayrılmasıyla şehir tamamen Sırplar'ın eline geçti"*.
- **Ilić, Ž. D., "Quarantine Stations and Sastanci on the Borders in Serbia (1829–1839)", *Istraživanja* 35 (2024), 144–164** (hakemli; `istrazivanja.ff.uns.ac.rs/…/2237`): özerk bölge sınırı = *"the border of the Pashalik of Belgrade"* (1830); *"nahiyas of Kruševac, Paraćin and Ražanj were annexed … late 1832 and May 1833, along with a part of the Vidin Sanjak"*; üçüncü hatt-ı şerif (1833) tartışmalı toprakları Sırbistan'a verdi, sınır **1833 sonu–1834 başında** Sırp–Türk komisyonunca çizildi ("Aleksinac güneyi, Supovac ve Timok"); 1831 kolerası bağlamında Belgrad, Semendire ve Şabac'taki vakalar "doğuya, Prenslik sınırlarının dışına" geçişi önlemek için anılıyor ve Belgrad'da Sava'nın *Sırp yakasında* depolar kurulduğu yazılıyor → **dolaylı** ifade, üçü sınırın içinde sayılıyor (açık bir "Belgrad dahildir" cümlesi yok).
- Tek dayanak olamayan (yalnız işaret): 1814'teki on iki nahiye = Ćuprija, Užice, Rudnik, Valjevo, Jagodina, Kragujevac, Belgrad, Šabac, Sokol, Požarevac, Požega/Çaçak, Smederevo; 1833'te eklenen altı nahiye = Krajina, Crna Reka, Paraćin, Kruševac, Stari Vlah, Jadar–Rađevina. **Bu iki liste web aramasının özetinden (Vikipedi kökenli) geldi — TDV'de yok, hakemli bir kaynakla adları teyit EDİLEMEDİ → `bulunamadı` (yalnız Ilić'in üç adı — Kruševac, Paraćin, Ražanj — teyitli; Ražanj/Stari Vlah farkı çelişki).**

### 3.2 Hüküm
1. **Belgrad ŞEHRİ özerk Sırbistan'ın İÇİNDEDİR; yalnız KALE Osmanlı askerî idaresindedir** (TDV [161]+[219]+belgrad[44]). Yani atlasın "Belgrad özerk bölgenin dışında" görüntüsü **kısmen niyetli (kale garnizonu), ama kapsamı yanlış**: garnizon bir *kale*dir, kalenin bütün petek/nahiyesi değil.
2. **1830-11-08'de atlasın özerk Sırbistan gövdesi** (`osmanli-tabi` ∩ kutu, Eflak dışarıda) **13.522 km²**, sınır kutusu 19,70–22,40E · 43,40–44,50N; **kuzey kenarı 44,498N** — Belgrad'ın (44,818N) **37 km güneyi**. Belgrad 37 km · Semendire 26 km · Şabac 31 km · **Požarevac 15 km DIŞARIDA**; yalnız Kragujevac içeride.
3. **Kök neden = noktasızlık (CLAUDE §2 ilk soru):** Sırp çekirdek kutusunda (19,0–22,9E · 43,3–45,1N) `yerlesimler`de **yalnız 13 nokta** var, durumları 1830-11-08'de: Belgrad · Şabac · Semendire · İzvornik · Vişegrad · Alacahisar(Kruševac) · Niş · Vidin → **d:doğrudan** (8); Kragujevac · Çaçak → `v:sirbistan-prensligi`; Jagodina → `v` (kid'siz); Turnu Severin → `v:eflak`; Orsova → `s:avusturya`. **Požarevac, Valjevo, Užice, Ćuprija, Paraćin, Rudnik, Sokol, Loznica, Negotin, Zaječar, Aleksinac, Ražanj için nokta YOK.** Özerk bölgenin kuzey kısmı (Belgrad–Semendire–Şabac–Požarevac) doğrudan-Osmanlı noktalarının peteğine emiliyor; Paraćin `osmanli-tabi` içinde ÇIKIYOR (ölçüldü) — oysa Ilić'e göre 1832 sonu–1833'te eklendi; noktası yok, en yakın nokta Jagodina (v) → **çıkarım: Jagodina peteğine emiliyor** (motor logu bakılmadı). Kladovo da tabi içinde — 5 km karşısındaki Turnu Severin (`v:eflak`) peteğine emilmiş görünüyor (yine çıkarım).
4. **Tarih çelişkisi (üç gün):** TDV ferman = **17 Ekim 1830**; atlas maddesi `t:"1830-11-08"` (`gun:"1830"` — gün kaynaksız, `data/olaylar_ek.js:73`); künye kronolojisi `1830-08-30`; `d_sinirlar_avrupa_orta` `d1830-hm-sr-tuna-sp` `1830-10-17` ve kendi notu "ÇELİŞKİ, HARİTA-VERİ'ye". 8 Kasım için dayanak `bulunamadı`.

### 3.3 Özerk Sırbistan'ın 1830 sınırı ne OLMALI (öneri, veri yazma kilit sonrası)
- **Kapsam:** on iki nahiyeli Belgrad Paşalığı; **Belgrad, Semendire, Şabac şehir/nahiyeleri DAHİL**. 1833 ekleri (Kruševac, Paraćin, Ražanj + Vidin sancağı parçası; ötekiler teyitsiz) **1832 sonu–Mayıs 1833'ten** itibaren; sınır 1833 sonu–1834 başında çizildi (o güne kadar Paraćin/Kruševac/Ražanj/Kladovo **doğrudan Osmanlı**).
- **Kale garnizonları (TDV):** Belgrad, Semendire, Şabac (1830'dan), Fethülislâm/Kladovo (1833'ten sonra Sırp topraklarında) → **kale noktası d:doğrudan, 1867-04-18'e kadar**; çevresi özerk.
- Uygulama biçimi Oturum 0'ın: (a) Belgrad/Semendire/Şabac şehir noktalarına `v:…kid:sirbistan-prensligi 1830-10-17→1867-04-18`, kale için ayrı yakın nokta `d:`; (b) eksik 12 nahiye merkezi noktası (Požarevac, Valjevo, Užice, Ćuprija, Rudnik, Sokol, Paraćin…), 1833'ten önce/sonra ayrı pencerelerle; (c) `v:` başlangıcı 1830-10-17 (`kronoloji` + `kd:` + `v:` birlikte, Değişmez 2 ±30 gün). **Önce nokta yoğunluğu, sonra pencere (§6).**
- Bu "kilit sonrası kimin işi": yeni yerleşim = 1.MURAT/HARITA-VERI; `olaylar_ek.js` = kronoloji sahibi.

## 4. H-0018 Lübnan Emirliği — 1834-05-19 · kutu 34,88–35,90E · 32,82–33,64N · madde "Filistin–Nablus isyanı Mısır idaresine karşı"
**Soru: bu tarihte hâlâ özerk/vasal mıydı, merkezî idareye bağlı değil miydi?**

**Hüküm: "merkezî idareye bağlı DEĞİLDİ" doğru; "hâlâ Osmanlı vasalı" yarı doğru — 1832–1840'ta üst otorite Kavalalı Mısır'dı.**
- **TDV `lubnan` (HTTP 200, 81.869 karakter):** [403] Beşîr II emirliği (1788–1840); [421] *"1832-1840 yılları arasında Mısır idaresinde kalan Lübnan"*; [422] *"Emîr Beşîr, Kavalalı İbrâhim Paşa'nın isteklerini yerine getirmekten öte bir fonksiyon icra edemedi"*; [425] Haziran 1840 isyanı; [426] Beşîr Ekim 1840'ta Malta'ya sürgün, İbrâhim Paşa Lübnan'ı boşalttı; künyedeki f/t: emirlik 1516 → **Ocak 1842** (TDV: "Şihâbî yönetimi sona erdi", bölge doğrudan Osmanlı yönetimine döndü).
- 1834-05-19: Osmanlı **merkezî** idaresi Suriye'de yok; Emîr Beşîr İbrâhim Paşa'ya bağlı, Mısır idaresine karşı Nablus isyanı (madde konusu) sürüyor → **ikili zincir: Osmanlı → Kavalalı Mısır → Lübnan Emirliği**.
- **Atlasın 1834-05-19 gösterimi (`NOKTA.py`, HEAD gövdeleri):** Sayda · Akka · Beyrut · Deyrülkamer · Şam · Trablusşam · Nablus · Kudüs → hepsi **`osmanli-tabi`** (tek birleşik tâbi katmanı — Mısır idaresiyle AYNI ton, H-0029'un açık kırmızısı); yalnız Sûr `osmanli` (doğrudan). Yani harita Lübnan'ı "Osmanlı'ya tâbi, Mısır tonunda" gösteriyor — **TDV ile çelişmiyor, ama Lübnan'ın kendi kimliğini (`kid:lubnan-emirligi`) ve Mısır-üst-devlet zincirini ayırt ETMİYOR.**
- **Künye:** `lubnan-emirligi` `tabi:[{f:"1516-10-01", t:"1842-01-01", ust:"osmanli"}]` **tek pencere**; 1832–1840 Mısır dönemini `ust:"osmanli"` gösteriyor → fiilî üstü (`misir-kavalali`) yazmıyor.
- **Öneri:** `tabi` penceresini böl — 1516→1832 `ust:osmanli` · 1832→1840 `ust:misir-kavalali` · 1840→1842 `ust:osmanli`. 🟡 Gün: TDV yalnız yıl ("1832-1840", "Ekim 1840") → `1832-01-01`/`1840-10-01` ve hassasiyet beyanı; Kavalalı künyesi 1805–1914 tek pencere (bkz. o künyenin özet notu). `ust:` alanının `misir-kavalali` gibi bir kimliği kabul edip etmediği Oturum 0'da/`VERI-YAPISI.md`'de doğrulanmalı (bugün 14 kayıtta `osmanli`/`rusya`/`fransa-cumhuriyet` var).
- **Ek okuma (hikâye)** → EKOKUMA-TOPLUM-0075; ben yalnız statüyü ölçtüm.

## 5. H-0048 Sisam — 1855-09-14 · kutu 26,50–27,15E · 37,59–37,89N · madde "Telgraf hattı İstanbul'da"
**Soru: nasıl bir yönetim vardı, özerk/vasal renk doğru mu?** → **Yönetim: Osmanlı'ya vergi veren, Ortodoks bir prens/bey (vali) tarafından yönetilen VASAL PRENSLİK. Renk (tâbi) DOĞRU.**
- **TDV `sisam` (HTTP 200, 12.387 karakter):** [50] *"10 Aralık 1832 tarihinde … Sisam adasının özerkliğini kabul etti ve burası **vasal bir prenslik** haline getirildi"*; [54] *"1834'ten 1913 yılına kadar ada … Ortodoks bir vali tarafından yönetildi"*; [55] *"dış işlerde Osmanlılar'a bağlılığı sürüyordu, ancak kendi bayrağı ve koruyucu güçlerin himayesinde iç işlerinde tamamen bağımsız"*; [56–57] bey/prens listesi — **1854–1858 Ionnis Gikas** (1855-09-14'te görevde); [51,53] 1832 fermanındaki "asker bulundurmama" şartı 1850'lerde kaldırıldı, **120 yerli jandarmaya karşılık ~150 Osmanlı muhafız** yerleşti (yıl TDV'de yok → `bulunamadı`).
- **Atlas:** `yerlesimler.js` Sisam `v:[{f:"1832-12-10", t:"1912-03-13", statu:"vassal"}]`, `d:` 1479-01-25→1832-12-10. **Başlangıç günü TDV ile birebir (10 Aralık 1832).** Gövde (`NOKTA.py`): Sisam `osmanli-tabi`; Nikarya/Patmos/Leros/Kuşadası/Söke `osmanli` (doğrudan) — doğru ayrım.
- 🟡 Eksikler: (i) `v:` kaydında **`kid:` YOK** ve `devletler.js`te Sisam künyesi YOK (`id:"sisam…"` taraması boş) → renk genel tâbi; Lübnan/Sırbistan gibi kendi kimliği yok. **Öneri: `sisam-prensligi` künyesi + `v:kid`** (kaynak TDV `sisam`); (ii) **bitiş günü çelişkisi:** atlas `1912-03-13` (`olaylar_ek6.js:127`, `gun:"1912"` — gün kaynaksız, `kaynak:"yunanistan"`) ↔ **TDV `sisam`: "Balkan savaşları sonunda Yunanistan ile birleşti (11 Kasım 1912)"** → 13 Mart dayanağı `bulunamadı`, ayrı iş.
- **İkinci görsel (gösterim bozukluğu):** benim işim DEĞİL → **GOSTERIM-0075'e tahtadan bildirildi** (Söke–Milas hattında düz çapraz çizgi + koyu üçgen; görsel `H-0048-2.png`).

---
## 6. Öneriler / sıra
**A. D-RENK-0073'e bağla** (H-0003 + H-0004): iki görsel §5 (c) seçeneğinin kanıtı; **yeni karar gerekmiyor**, mevcut açık sorular geçerli: (1) hangi seçenek (c önerilmişti) (2) hat bittiği yerde görsel dil (3) `sol_taraf` borcu (4) koşu sırası. İki bölge için ek bulgu: **eksik kenarlar** (İsviçre kuzey+doğu, Belçika–Prusya) önce **hat verisi** ister; oradaki "E çizilmez, A/B geçerli" beyanı kayıtta zaten yazılı.
**B. H-0005 (Sırbistan)** — kilit kalkınca sırayla: ① nokta ekleme (12 nahiye merkezi + Belgrad/Semendire/Şabac kale ayrımı) ② `v:` pencereleri 1830-10-17 (TDV) ③ 1833 ekleri kendi tarihleriyle (yalnız Kruševac/Paraćin/Ražanj teyitli) ④ kronoloji günü (`olaylar_ek.js:73`) 1830-10-17 ⑤ **koşu** (petek). Petek ölçümü: kuzey kenar 44,498N, hedef Belgrad 44,82N dahil.
**C. H-0018:** künye `tabi` bölme (4. bölüm) — koşu gerektirmez (`tabi` künye alanı); hangi gövdeyi etkilediği ölçülmedi.
**D. H-0048:** `sisam-prensligi` künyesi + `v:kid`; 1912 bitiş günü kaynak bulunana kadar `kesinlik` beyanı.

## 7. Bulamadıklarım (`bulunamadı`)
- On iki nahiyenin ve 1833 altı nahiyenin adlarının **TDV'de veya bir hakemli makalede** doğrulanmış tam listesi (Ilić yalnız Kruševac/Paraćin/Ražanj veriyor; Academia'daki Ilić "Razgraničenje…1830–1834" makalesi 403 verdi, okunamadı).
- 8 Kasım 1830'un (atlas gün) hiçbir kaynakta karşılığı; 13 Mart 1912'nin (Sisam) dayanağı.
- İsviçre Untersee/Ren (1854/1878/1879, 1892) ve Belçika–Prusya (1816) hatlarının **koordinatları** — kayıtlar da "ELDE YOK" diyor.
- Sisam'a 1850'lerde asker konulan fermanın yılı (TDV cümlede yıl vermiyor).
- Sırbistan'ın 1830'daki alanının kaynaklı sayısı (13.522 km² yalnız atlasın kendi gövdesidir; referans DEĞİL).

## 8. Yeniden üretme
```
py denetim/ARAC-SINIR-STATU-0075-SAPMA.py      # SP = kendi scratchpad'in; hatlar.json + govde_<gun>.geojson gerekir
py denetim/ARAC-SINIR-STATU-0075-KAPSAMA.py
py denetim/ARAC-SINIR-STATU-0075-NOKTA.py
py denetim/ARAC-SINIR-STATU-0075-SIRP.py
py denetim/ARAC-SINIR-STATU-0075-YERLESIM.py 1830-11-08 19.0 43.3 22.9 45.1
node denetim/ARAC-SINIR-STATU-0075-KAYIT.js dg4-nl-fr-kortrijk d1923-nl-de
```
Hatlar/gövdeler: `node denetim/ARAC-D-RENK-0073-DOK.js . <çıktı>.json` · `cd <HEAD-ağacı> && node <kök>/denetim/ARAC-D-RENK-0073-GOVDEGUN.js <gün> <çıktı>.geojson` (HEAD ağacı = `git show HEAD:data/{devletler,devletler_harita,donemler}.js`).
