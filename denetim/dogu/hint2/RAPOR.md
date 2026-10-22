# RAPOR — DOĞU 500-1281 / HINT-2

Ölçüm yeri: `C:\atlas\.claude\worktrees\dogu` (worktree-dogu, git'e dokunulmadı). `node denetim/dogu/dogrula.js hint2` → çıkış 0
(`{"kunye":5,"kron":107,"yer":7,"s":15,"bosluk":0,"toprak":30,"kuyruk_gerekli":7,"yama":6,"yama_dilim":12,"devir_eslesen":14,"devir_eslesmeyen":0,"ihlal":0}`).
`hint1 hint2` birlikte koşunca 9 ihlal çıkar; hepsi hint1'in yeni zincir kuyruğu kuralından önce yazılmış 9 yeni yerleşimidir (Valabhi, Banavasi, Anuradhapura, Aror, Chamba, Kalinganagara, Denduluru, Karnasuvarna, Kaveripattinam); hint2 kaynaklı ihlal 0.
Ana kaynak: R. C. Majumdar (ed.), *HCIP* IV (Age of Imperial Kanauj), V (Struggle for Empire), VI (Delhi Sultanate) — archive.org tam metin; **her alıntı normalleştirilmiş metinde birebir sınandı** (üretici betik alıntı bulunamazsa durur). TDV *Sind*, *Mültan* (22.10.2026'da okundu). Vikipedi dayanak yapılmadı.

## ① Ölçülenler
- Girdi 19 polity: **19 işlendi** (5 KUNYE_YOK + 14 KUNYE_MS1_DALINDA); pencere dışı: **0**. `kalacuri-ratnapura` t=null; 1114-1281 yazıldı.
- **Künye: 5** (`nepal-thakuri, lohara, polonnaruwa, kalyani-kalacuri, gazneli-lahor`), her birinde kuruluş + son iskeleti. MS1 dalındaki 14 polity için künye yazılmadı.
- **Kronoloji: 107 madde** = 88 anlatı (`kronoloji_cok`) + 19 sınır (`kronoloji_sinir`, Değişmez 2 evreni). Polity başına (anlatı+sınır, `taraflar`'da geçme): lohara 9+2, saindhava 7+0, nepal-thakuri 5+2, polonnaruwa 5+2, kalyani-kalacuri 5+2, multan-emirligi 5+1, kalacuri-ratnapura 5+0, tomara 4+1, chapa-vardhamana 4+1, kachchhapaghata-gwalior 4+1, somavamsi 4+0, kadamba-goa 4+0, sumra 4+0, gazneli-lahor 4+0, habbari 3+2, silahara 3+1, katyuri 3+0, karnata-mithila 3+0, bhauma-kara 1+0. (Bir madde birden çok tarafta sayılır.) Hedef 6-8 yalnız lohara ve saindhava'da tutturuldu; geri kalanlar 1-5 (kaynak yetersizliği/ömür kısalığı, ②).
- **Yeni yerleşim: 7** (Polonnaruwa, Kalyani (Basavakalyan), Thane, Baijnath (Kartikeyapura), Simraungarh (Simraon), Wadhwan (Vardhamana), Mansura (Sind)); **15 `s:` dilimi**; `kuyruk_gerekli`: 7 (hepsi). `__BOSLUK__` dilimi yeni yerleşimde 0; **yamada 1** (Katmandu 0750→0879-10-20).
- **Yama: 6 mevcut yerleşim, 12 dilim** (Delhi 2, Katmandu 3, Multan 1, Srinagar (Keşmir) 2, Gvalyar (Gwalior) 3, Ratanpur 1); hepsinde `once_gerekli` var, Gvalyar'da ayrıca `devam_gerekli` (1210→1281).
- Koordinat: 7 yeni yerleşimin hepsi ≥2 bağımsız tanıklı, ≤2 km: Polonnaruwa (GeoNames 1229901 + Wikidata Q394443 + OSM), Kalyani (GeoNames 1276783 + Wikidata Q712521 + OSM), Thane (GeoNames 1254661 + Wikidata Q207749 + OSM), Baijnath (Wikidata Q2565071 + OSM node 245769059; 0,3 km), Simraungarh (Wikidata Q21013701 + OSM; 1,4 km), Wadhwan (Wikidata Q1023682 + OSM; 1,2 km), Mansura (Wikidata Q6751906 + OSM relation 12193183; 0,3 km). Mükerrer taraması (yer_ara.py ad + 8 km yakın): 0 çakışma.
- Sınır maddesi sınaması: yeni+yama zincirlerinde dilim kırılması 14 (yeni 9 + yama 5 devir günü) + 5 başlangıç/ikinci kırılma; 19 sınır maddesi, `devir_eslesmeyen` 0 (dogrula).
- Takvim: hicrî tarihler hicrî∩milâdî kesişimin ilk gününe çevrildi, `ic_not_takvim` yazıldı (aritmetik sivil takvim, Jülyen, ±2 gün, hint1 ile aynı yöntem): 142/759 → 0759-05-04, 247/861 → 0861-03-17, 313/925 → 0925-03-29, 375/985 → 0985-05-24, 396/1006 → 1006-01-01, 485/1092 → 1092-02-12.

## ② Bulunamayan / doğrulanamayan
- **Yerleşim yazılmayan merkezler (neden):** Bhutambilika/Ghumli (Saindhava; yalnız Wikidata Q2733034 21.885,69.763, ikinci bağımsız tanık bulunamadı → tek tanık), Guhadeva-pataka (Bhauma-Kara; konumu Majumdar'da ve Wikidata'da yok), Suvarnapura/Yayatinagara (Somavamsi; Sonpur/Binka konumu iki tanıkla kurulamadı), Gopadri→Gvalyar yama olarak yazıldı, Lahor/Goa/Thatta aşağıda.
- **Goa yaması YAZILMADI:** mevcut Goa zinciri `yadava 1281-1318` iken Majumdar V Goa Kadambalarını Yadava VASALI olarak (Singhana 1200-47, Krishna 1247-61: Kadamba Sivachitta Shashthadeva II) anar; vasal/suzeren çelişkisi atlas politikası kararıdır, 1281'de sınır maddesi olmayan geçiş oluşturmamak için yama yazılmadı. Kadamba-Goa için yalnız 4 anlatı maddesi yazıldı (1071, 1098, 1125/1147, 1198). Künye f=0960/t=1310 kaynakta YOK (Majumdar en erken Shashthadeva ≈ 1015-43 Jayasimha II dönemi).
- **Lahor yaması YAZILMADI:** Lahor atlas zinciri 1013-1186 `gazneli`; Lahor'un 1013 öncesi (Shahi/Anandapala) sahibi ve Mahmud'un Pencap'ı ilhak yılı Majumdar V'de yıl yıl verilmez (Nandana/Trilochanapala 1013-14, "western and central portions annexed"); `gazneli-lahor` (1157-1186) yeni kimlik yazıldı ama yerleşim zincirinde kullanılacak yer yok (mevcut dilim `gazneli`). Öneri: Lahor `gazneli` dilimini 1157'de ikiye bölüp `gazneli-lahor`a çevirmek.
- **Thatta/Sumra:** Majumdar VI Sumra başkentini adlandırmaz; Thatta'nın Sumra döneminde var olduğu kaynaklanamadı (girdi başkenti "Thatta") → yerleşim/yama yazılmadı. Sumra için 4 anlatı maddesi.
- **Kuruluş/bitiş yılı kaynakta olmayan künyeler (MS1 dalı, düzeltme önerisi):** `kadamba-goa` f=0960, t=1310; `silahara` f=0765 (Majumdar: Kuzey/Güney Konkan kolları "9. yy ortası", Güney Maratha kolu 10. yy), t=1265 (Mahadeva 1261-c.1271, fetih yılı yok); `katyuri` t=1200 (Majumdar IV: Nimbara soyu 10. yy'da Salonaditya hanedanınca devrildi); `bhauma-kara` f=0750, t=0950 (Majumdar: tüm soy ≈ 2 yüzyıl, ilk üçü 8. yy, 795 Çin kaydı; yıl verilmez); `somavamsi` t=1110 (okunmadı); `chapa-vardhamana` f=0801 (9. yy ilk çeyreği), t=0942 (941-42 geleneksel, Anahilapataka kolu için yazıt destekli); `saindhava` f=0726 (Pushyadeva 8. yy 2. çeyrek; 739 öncesi) t=0915 (son bilinen tarih).
- **Okunmayan kaynaklar:** İSAM, TTK/Belleten, DergiPark, YÖK taranmadı (zaman). TDV «Nepal» (Azmi Özcan) Tarih bölümü çekilen sayfada yalnız ilk cümleyle göründü (içerik çekilemedi ≠ yok); TDV'de Silahara/Tomara/Lohara/Kalyani/Polonnaruwa maddesi yok (TDV yer-kişi ansiklopedisi; arama yapılmadı = "yok" denmiyor). Pleiades Mansura kayıtları "unlocated".
- **Gazneli Mahmud'un Multan 1006/1010 çelişkisi:** TDV 396/1006 ilk zapt, 398/1008 ve 400/1010 yeniden zapt; Majumdar VI 1010 (TDV esas, zincir 1006-01-01'de kırıldı). Mansura: TDV 1010; Majumdar V 1025-26'da Mansûre hükümdarı Khafif'i (mürted Müslüman) Mahmud yendi (TDV esas, ic_not'ta beyan).
- **Majumdar IV/V çelişkisi:** Tomara'yı devirenin Vigraharaja III (IV) mü IV mü; Delhi'nin düşüş yılı yok (hükümdar 1153-1163, s: kırılması 1153-01-01 alt sınır, `onyil`).
- **Sürekliliği kaynaksız bırakılan dilimler (BEYANLI SÜREKLİLİK):** Ratanpur 1218→1281, Simraungarh 1097→1281 (1324'e dek karnata), Kalyani yadava 1189→1281, Wadhwan caulukya 0942→1281, Polonnaruwa 1235→1281 (genel `seylan-sinhala`), Srinagar kesmir 1172→1281.

## ③ Kararlar / öneriler
### Künye düzeltme önerileri (KUNYE_MS1_DALINDA — dosyaya yazılmadı)
`kadamba-goa` f/t kaynaksız; `silahara` f=0850 (yüzyıl), t=1271 üst sınır; `katyuri` t=1000 (10. yy, Katyuri adı sonrası Salonaditya); `chapa-vardhamana` t=0942 doğru; `tomara` t=1153 (Vigraharaja IV 1153-1163); `habbari` t=1010 (TDV) ama Majumdar V 1026; `multan-emirligi` t=1006 (TDV Multan ilk zapt; 1010 son yeniden zapt); `kachchhapaghata-gwalior` t=1196 doğru (Majumdar V), f=0977 "in or before"; `kalacuri-ratnapura` f=1114 doğru, t=null (1218'den sonra ardıl bilinmiyor); `somavamsi` f=0950 (Majumdar V Bhimaratha c.1000-15'ten geriye anlatım, f okunmadı); `karnata-mithila` f=1097, t=1324 doğru; `caulukya` f=1000 yerine 0942 (Mularaja, Majumdar IV Chapas bölümü); `silahara`/`yadava` 1265/1271.
### YAMA GEREKLİ listesi (`yama_hint2.js`)
| yerleşim | eklenecek önek | once_gerekli / devam_gerekli |
|---|---|---|
| Delhi | tomara 0736→1153 (gelenek), cahamana 1153→1192 | önce: 0500→0736 (kaynak yok) |
| Katmandu | __BOSLUK__ 0750→0879-10-20, nepal-thakuri →1201, nepal →1281 | hint1'in licchavi 0500→0750 yamasından devam |
| Multan | multan-emirligi 0903→1006 | önce: 0500→0903 (712 Arap fethi, Saffârî 872-903) |
| Srinagar (Keşmir) | lohara 1003→1172, kesmir 1172→1281 | önce: 0500→1003 |
| Gvalyar (Gwalior) | kachchhapaghata-gwalior 0977→1196, gurlu 1196→1206, delhi-sultanligi 1206→1210 | önce 0500→0977; devam 1210→1281 (Pratihara/Parihar Vigraha, Iltutmish, Naravarman, Balban 1258) |
| Ratanpur | kalacuri-ratnapura 1114→1281 | önce 0500→1114 |
### Boya ihtiyacı (`arac/renkler.py` BOYALAR'da YOK — grep ile doğrulandı)
19 kimlik: `lohara, nepal-thakuri, multan-emirligi, tomara, kachchhapaghata-gwalior, kalacuri-ratnapura, polonnaruwa, kalyani-kalacuri, silahara, katyuri, karnata-mithila, chapa-vardhamana, habbari, gazneli-lahor, saindhava, bhauma-kara, somavamsi, kadamba-goa, sumra`. Zincirlerde kullanılıp boyası gerekenler: lohara, nepal-thakuri, multan-emirligi, tomara, kachchhapaghata-gwalior, kalacuri-ratnapura, polonnaruwa, kalyani-kalacuri, silahara, katyuri, karnata-mithila, chapa-vardhamana, habbari. Yerleşimsiz/zincirsiz (boya şart değil): gazneli-lahor, saindhava, bhauma-kara, somavamsi, kadamba-goa, sumra. BOYALAR'da VAR: kesmir, nepal, cahamana, bati-calukya, yadava, caulukya, abbasi, gazneli, cola, gurlu, delhi-sultanligi, seylan-sinhala, gurjara-pratihara, candela, kalacuri-tripuri.
### Yeni tür/bölge
Yeni `bolge`/`tur` yok (hepsi `guney-asya`; `sultanlik`/`krallik`/`hanedanlik`). Kronoloji `tur`: `siyaset`, `isgal`, `bolunme`, `isyan` kullanıldı (sözlükte var). Takvim: hicrî çeviri `ic_not_takvim`.
### Atlas mevcut zincir uyarıları (düzeltme önerisi)
- Goa: `yadava 1281-1318` ↔ Kadamba vasal sürekliliği (Majumdar V).
- Lahor: 1157-1186 `gazneli` → `gazneli-lahor` (isteğe bağlı).
- Multan: Majumdar VI 1010, TDV 1006 → atlas 1006 TDV ile uyumlu.
- Delhi: 1192-01-01 Gurlu geçişi (Tarain 1192), fiilî fetih 1193 (Majumdar V, ±30 gün dışında olabilir → yıl hassasiyeti).
