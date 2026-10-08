# ZAMAN-Z3-1008 — devlet dizininin GERİ UCU (1000–1281) · ARA TESLİM

Oturum: ZAMAN-Z3-KUNYE-ONCE1281-1008 · 8 Ekim 2026 · makine UMIT · temel `origin/makine/umit` `e28edfdc`
Şartname: `ZAMAN-GENIS-ORTAK.md` + `GOREV-ORTAK.md` + UMIT İRTİBAT görev mesajı.
**`data/devletler.js`e YAZILMADI.** Bütün değişiklikler `ZAMAN-Z3-1008-KUNYE.json` içinde ÖNERİDİR.
Betikler scratchpad'de (`z3_olc.py` · `z3_buyuk.py` · `z3_yaz.py`). Künyeler `girdi.oku_devletler()`,
boyalar `renkler.BOYALAR` ile okundu (regex yok). Üç haneli yıllar `pad()` ile karşılaştırıldı.

## §0 Önceki ölçümler bu kalem için ne diyordu
- **30 Eylül kampanyası** (`ONCE1281-<7 bölge>-KUNYE.json`): 280 künye önerisi (148 yeni · 30 genişlet ·
  100 dokunmadım · 1 iptal-mükerrer + 1 kayıt). `devletler.js` o gün **704** künyeydi (`93caae65`).
- **KAPSAM-1945-OLC-0930 §4**: `f:"1281-01-01"`e kesilmiş **142** künye var. Bunlar pencere kesiği,
  her birinin gerçek başlangıcı araştırılacak. 1281 öncesi başlayan 94 künye vardı (pad'siz sayım 76 diyordu).
- **BOYA-GEREKLI-1001**: önerilerdeki 197 `boya_gerekli` beyanı birleştirmede düşmüştü; geri kazanıldı.
- **ONCE1281-ANADOLU-BIZANS** tahtaya iki kez (M-5601/M-5624) yazdı: `vaspurakan-kralligi` ve
  `antakya-prinkepsligi` inmedi.
- **BULGU-CEMISGEZEK-BEYLIGI-0905**: Çemişgezek'in 1281 tarihi bir pencere işareti. Beylik bu tarihten önce de vardı, ama kaynakta yıl yok.
- `ONCE1281-KUNYE-GUNU-1004` ve `HAYALET-103` yerleşim uçlarını ölçüyor, künye kuruluşunu değil. Bu kalemle örtüşmüyor.

## ① Öngörü — ÖLÇÜMDEN ÖNCE yazıldı (scratchpad `ongoru.md`)
1. 280 önerinin ~200'ü inmiş, ~60'ı inmemiş, ~20'si çelişiyor olur. Çelişkiler çoğunlukla genişletmelerde çıkar.
2. Kesik künye sayısı 142'den ~60'a düşer.
3. 1000–1281 arasının sekiz büyük devletinden ~7'si mevcuttur.
4. Yeni künyelerin ~%60'ında boya karşılığı eksiktir.

## ② Ne ölçtüm
### 2.1 7 JSON × bugünkü `devletler.js` (896 künye)
| kova | sayı | ayrıntı |
|---|---|---|
| **indi** | **278** | yeni 148 · genişlet 30 (öneri `f`'si GÜNÜ GÜNÜNE tutuyor) · dokunmadım 100 |
| **inmedi** | **2** | `vaspurakan-kralligi` (yeni, **GERÇEK EKSİK**) · `antakya-prinkepsligi` (zaten `iptal-mukerrer`; `antakya-prinkipsligi` mevcut ⇒ borç değil) |
| **çelişiyor** | **0** | ilk koşu 16 dedi: **ölçüm hatasıydı.** Genişletme önerileri `t` taşımıyor, `None≠t` farkı sayılmıştı. Düzeltip yeniden koştum. |

Aynı kimliği 7 kimlik iki ayrı bölge önermiş (`sirvansah`, `urfa-kontlugu`, `idil-bulgar`, `mogol-imparatorlugu`,
`suriye-selcuklu`, `buveyhi`, `eyyubi-hisnikeyfa`). Hepsi `devletler.js`e **bir kez** inmiş, mükerrer künye yok.
**Öngörü yanlıştı:** indi oranını ~%70 tahmin etmiştim, gerçekte %99. Çelişki ~20 dedim, gerçekte 0.

### 2.2 Kesik künye (`f == "1281-01-01"`): 142 → **129**
`93caae65` (30 Eylül, 704 künye) ile bugün kimlik kimlik karşılaştırdım:
- **16 künye kesikten çıkmış** (genişletme inmiş): isvec, danimarka, norvec, usfuri, mekke-serifligi, inuit,
  racput, orissa, kesmir, nepal, angkor-kmer, campa, filipin-racaliklari, seylan-sinhala, zimbabve, norse-gronland.
- **3 yeni kesik eklenmiş** (1 Ekim, `52222fa3`): `saksonya` · `baden` · `teuton-sovalyeleri`.
  Üçünün `ic_not_f`i "PENCERE İŞARETİ, ölçüm DEĞİL" diyor, yani beyanlılar.
- ⚠️ **Yeni bir kesik sınıfı doğdu: `f == "1000-01-01"` olan 27 künye var.** Genişletmelerin çoğu
  (racput, orissa, nepal, kesmir, campa, inuit, maya…) kuşağın alt sınırına yazılmış. Bu ölçüm değil, **kuşak işareti**;
  sorun 1281'den 1000'e taşınmış oldu. Bunlar §4'teki pencere-uçları kuralına girer. Bir sonraki kuşak açıldığında
  aynı araştırma bu 27 künye için de gerekecek.
**Öngörü yanlıştı:** ~60 demiştim, 129 çıktı. Kampanya kesiklerin yalnız %11'ine dokunmuş. Yeni künye açmak, kesik künyeleri geriye çekmekten çok daha fazla yapılmış.

**129'un bölge dağılımı:** kuzey-amerika 49 · bati-afrika 16 · guneydogu-asya 13 · dogu-afrika 12 ·
guney-amerika 9 · guney-asya 8 · orta-afrika 5 · guney-afrika 4 · orta-amerika-karayip 3 · kafkasya 2 ·
kuzey-afrika 2 · orta-avrupa 2 · arabistan 1 · iran 1 · anadolu 1 · dogu-avrupa 1.
**Osmanlı çekirdeği ve komşuları yalnız 10 künye.** Kalan 119 künyenin çoğu Amerika ve Afrika'daki halk/kabile kimlikleri.

### 2.3 Öncelikli dilim — 10 künye, kaynakla (JSON `kayitlar`)
| künye | sonuç | dayanak |
|---|---|---|
| `saksonya` | **genişlet → 1089** (yıl) | NDB 'Heinrich I. von Eilenburg': *"1089 … erhielt er auch die Lehen über die Mark Meißen"* |
| `baden` | **genişlet → 1112** (yıl, unvanın İLK geçişi) | BLB Karlsruhe dijital (Bader): *"in den Jahren 1112 und 1130 urkundlich „Marchio Herimannus de Badin“"* |
| `teuton-sovalyeleri` | **genişlet → 1230 + MÜKERRER** | `teuton-devleti` (1230→1525-04-08) ile **aynı devlet, `t`'leri aynı gün**. İkisi de 1 Ekim'de aynı commit'le girdi. VLE kaynağı `teuton-devleti`nden alındı. |
| `cemisgezek-beyligi` | dokunmadım | kaynaklar yüzyıl veriyor ("1200'lü yılların başı"), yıl yok. Karabulut'ta 1281 bağımsız idarenin çapası. |
| `makdisu-sultanligi` | dokunmadım | TDV: "VII. (XIII.) yüzyılda … sultanlık kurmayı başardı", yıl yok |
| `hurmuz-sultanligi` | dokunmadım | TDV yıl vermiyor. Iranica'da HORMUZ sayfası 404 ⇒ **bulunamadı** |
| `nebhani` | dokunmadım, **ÇELİŞKİ BİLDİRİMİ** | TDV `uman`, Nebhânî hâkimiyetini XI. yy öncesine, 1230–1507'yi Salgurlu'ya veriyor. Atlas 1281–1515 diyor. 10 Ağustos'taki "tarihe dokunma" kararı geçerli. |
| `sind` | dokunmadım, 🔴 **TERS YÖN** | TDV: Aybeg'den sonra Delhi Sultanlığı, ardından **"Hindu Semmâ … zaptedildi (1351)"**. Sûmra adı TDV'de geçmiyor. ⇒ Künye geriye çekilmemeli, 1281–1351 aralığı kısaltma adayı (sınıf ①). |
| `cerkez` · `kabartay` | dokunmadım | Halk/kabile birlikleri. TDV kuruluş tarihi vermiyor. `kabartaylar` curl 000 döndü (taşıma arızası; ölü sayılmaz) |

### 2.4 1000–1281 arasındaki büyük devletler: mevcut mu?
~80 adayı `id`+`ad` (normalize edilmiş) ile taradım, ömrün kuşakla örtüşüp örtüşmediğine baktım. Elle de kontrol ettim.
**Hepsi MEVCUT:** Büyük Selçuklu (`buyuk-selcuklu` 1040), Fâtımî, Eyyûbî (+4 kol), Gazneli, **Hârizmşah (`harizmsah`)**,
Karahanlı (3), Gurlu, Karahıtay, Abbâsî, Bizans, Latin, İznik, Trabzon, Epir, Danişmend, Artuklu, Zengî (2),
Haçlı devletlerinin dördü de (Kudüs, Antakya, Urfa, Trablus), Kilikya, Gürcistan, Moğol, Altın Orda, İlhanlı, Çağatay,
Memlük, Murâbıt, Muvahhid, Hafsî, Merînî, **Zeyyânî (`zeyyani`)**, Endülüs Emevî, Delhi, Çola, **Song**, Liao, Jin,
Batı Xia, Goryeo, Heian/Kamakura, Trần, Pagan, Srivijaya, **Kiev Rus**, Novgorod, İdil Bulgar, Kıpçak, Kutsal Roma
(`almanya` 962), Fransa, İngiltere, Kastilya, Aragon, Portekiz, Navarra, Macaristan, Polonya, Bohemya,
**Sırbistan (`sirbistan-nemanjic`)**, II. Bulgar, Venedik, **Cenova**, Papalık, Sicilya, Litvanya, İskoçya, İskandinavya,
Mali, Gana, Kânem, Zagve, Nûbe, **Kilve (Kilwa, `svahili-sehirleri` kapsıyor)**, Toltek, Chimú (kesik), Hoysala, Yadava,
Koço Uygur, Şirvanşah, Ahlatşah, Salgurlu.
**EKSİK — 1:** **Peçenekler** (künye yok; Hazar 965'te bitiyor, Kıpçak 1054'te başlıyor; arada Karadeniz bozkırı boş).
Hüküm: bu bir halk/konfederasyon. Künye mi, `isg:`/boşluk mu, kararı koordinatöre bırakıyorum. Bu turda kaynakla açmadım.
**Öngörü:** 8'in 7'si demiştim, gerçekte 8/8 (Peçenek listemde yoktu).

### 2.5 Boya
Kuşakta yaşayan **264** künye var. **69**'unun `BOYALAR`da karşılığı yok. Bunların **65**'i `boya_gerekli:true` ile beyanlı;
borç tam inşa koşusunu bekliyor, sessiz değil. **Beyansız boyasız 4 künye:** `mogol-imparatorlugu` · `mekke-serifligi`
(bugün yalnız `kid:` ile 13 tâbi nokta; 969–1517 arasındaki bağımsız dönemi ufuk açılınca boya ister) · `arborea` · `pfalz`.
Öneri: dördüne `boya_gerekli:true` eklenmesi (JSON `boya_onerisi`). Boyasız 69 künyenin 51'i 1281'den önce bitiyor,
yani bugünkü haritada hiç çizilmiyor. Bu bir delik değil, ufuk açılınca delik olacak.
**Öngörü:** ~%60 boyasız demiştim. Gerçekte %26, üstelik neredeyse hepsi beyanlı.

## ③ Ne bulamadım
- **Kalan 119 kesik künyeye bu turda kaynakla girmedim.** Model bilgisine dayanan ön sınıf aşağıda. Kaynak DEĞİLDİR, doğrulanması ayrı bir kalem:
  - **H — halk/kabile (~75):** Kuzey Amerika'nın hemen hepsi (abenaki…zuni), Tuareg konfederasyonları, Tiv, Zerma, Kru-Grebo,
    Herero, Nama-Orlam, Banda-Gbaya, Tubu, Kamba, Fipa… Bunlarda "kuruluş tarihi" kavramı yok; çoğunun kaynağı zaten
    `bulunamadı — Handbook…` yazıyor. Öneri: 1281 beyanlı pencere işareti olarak kalsın. 1000'e çekmek kaynaksız
    UZATMA olur; ancak BEYANLI ayrı bir kovaya alınabilir (`ZAMAN-GENIS-ORTAK §2`).
  - **K — 1281'den SONRA kurulmuş olabilir; KISALTMA adayı, D203 hayalet sınıfı (~15):** lan-xang (1353?), pagaruyung,
    magindanao, palembang, gova-makassar, arakan (Mrauk U), gond, bunyoro, merina-oncesi, matamba, mossi, dagbon, powhatan,
    creek, choctaw. Ufuk açıldığında bu künyeler, kurulmadıkları yıllarda harita boyar. **Riski en yüksek grup bu.**
  - **G — 1281'den önce var olmuş olabilir; GENİŞLETME adayı (~25):** ahom (1228?), ladak, manipur, kalikut, travankur, yafna,
    ternate, samudra-pasai, san-devletleri, tidore, chimu, colla, lupaqa, muisca, zapotek, tututepec, nahua, jukun, vollayta,
    sidamo, makdisu (yüzyıl biliniyor, yıl yok), etowah/moundville/spiro…
- Saksonya'da Wettinler'in Meissen'i 1123–1125 arasında kısa süre kaybetmesi kaynakla ölçülmedi.
- Baden için LEO-BW (403) ve ZWLG (PDF yerine HTML döndü) açılamadı.
- Peçenek künyesinin kaynağı aranmadı.

## ④ Ne istiyorum
1. **Bu turda indirilecekler:** `vaspurakan-kralligi` (30 Eylül'den beri bekliyor) · `saksonya`→1089 · `baden`→1112 ·
   `teuton-sovalyeleri`→1230 ile `teuton-devleti` iptal. 🔴 Bu ikisi **aynı commit'te** inmeli: `kronoloji_cok_once1281_avrupa.js` `taraflar[]`
   kimliği çevrilmezse kırık atıf doğar (Z7'ye bildiriyorum). Bunlara ek olarak 4 `boya_gerekli` beyanı.
2. **Karar:** `sind` (TDV ters yön: genişletilmez, 1281–1351 kısaltma mı?) · `nebhani` (TDV çelişkisi) · Peçenekler (künye mi?) ·
   `f=1000-01-01` olan 27 künye (kuşak işareti olarak beyanlansın mı?).
3. **Devamı (önerim):** önce K grubu (~15). Bunlar ufuk açılınca aktif yanlış boya üretir; G'den önce gelmeli.
   H grubu için toplu bir beyan yeterli.

## Dosyalar
- `denetim/ZAMAN-Z3-1008.md` (bu dosya)
- `denetim/ZAMAN-Z3-1008-KUNYE.json`: 12 kayıt (1 yeni · 3 genişlet · 1 iptal-mükerrer · 7 dokunmadım) + `boya_onerisi` 4 +
  7 JSON ölçümünün tam listesi (`olcum_7_json`) + 129 kesik künyenin listesi (`kesik_1281`)
