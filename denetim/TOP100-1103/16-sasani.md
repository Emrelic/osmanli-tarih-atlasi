# 16 · Sâsânî İmparatorluğu — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-03 (ölçer top100_olc.py + elle grep)

## Özet
- Künye 3 (sasani, kusan-sasani, abna-yemen). Açık kırılma: sasani 3/5, kusan-sasani 0/0 (hiç yerleşim yok), abna-yemen 2/2. Toplam AÇIK 5.
- Eksik kronoloji maddesi: kuruluş (224), Medâin'in başkent oluşu, 614 Kudüs, 619 Mısır, 627-628 Herakleios/II. Hüsrev, 636 Kādisiye, 637 Medâin'in düşüşü, 642 Nihâvend, 651 Yezdicerd — hiçbiri Değişmez 2 evreninde değil (yalnız `devletler.js` künye kronolojisinde). En az 9 madde önerildi.
- En ağır 3 bulgu:
  1. **Sasani haritada neredeyse yok:** en geniş an 619, yalnız 6 yerleşim (Nîşâbur, Serahs, Merv, Belh, İskenderiye + bir `__BOSLUK__` Hemedan). Başkent Medâin/Ktesiphon'un s: dizisi 0224-04-28'de Part ile bitiyor, sonrası boş; Rey ve Istahr `s:[]` (veri-yok); Susa −0330'da kesik. 224-500 arası hiç yerleşim yok (batch "DOGU-500-1281" 500'de başlıyor — künye f ile uyumsuz).
  2. **abna-yemen kırılmaları "AÇIK" ama madde var:** 628-01-01 maddesi (`kronoloji_sinir_amerika_afrika3_1024.js:35`) `devlet:"aksum"`, `taraflar:["aksum"]` ile yazılmış; abna-yemen/sasani taraf listesinde yok ⇒ ölçer eşleştirmiyor. 575 başlangıcı için hiç madde yok.
  3. **Künye `ic_not_f` yanlış:** "f yıl düzeyinde" diyor, oysa TDV 'Erdeşîr' maddesi 28 Nisan 224 günü veriyor; f=0224-04-28 gün-kök TDV'de VAR.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| sasani | Sâsânî İmparatorluğu | 0224-04-28 | 0651-01-01 | VAR; harita ömrü 500 → 651; 6 yerleşim |
| kusan-sasani | Kuşano-Sasani Krallığı (Kuşanşahlar) | 0230-01-01 | 0360-01-01 | VAR; **0 yerleşim — haritada görünmüyor** |
| abna-yemen | Ebnâ (Sasani Yemen Valiliği) | 0575-01-01 | 0628-01-01 | VAR; 1 yerleşim (San'a) |
| hira / lahmi | Lahmîler (Hîre) | — | — | komşu, ayrı künye (bu denetim dışı); Hîre 580'de lahmi — Sasani vasalı olarak anılmalı |
EKSİK parçalar: (i) Sasani'nin Roma karşısındaki orta evreleri (Nisibis 363 sonrası, Dicle ötesi 5 bölge), (ii) Sasani Ermenistan'ı/Kafkasya (Albania, İberya, Lazika vasal), (iii) Eftalit haracı dönemi (484-~557), (iv) Sasani Mısır'ı (619-629) ayrı künye değil, İskenderiye'de tek satır, (v) Sasani Doğu Arabistan (Bahreyn/Umman). Evre künyesi eksik değil ama yerleşim eksik.

## b) f/t ve evreler
| Uç | Atlas | Kaynak 1 | Kaynak 2 | Hüküm | Önerilen |
|---|---|---|---|---|---|
| sasani f | 0224-04-28 | TDV 'Erdeşîr' (islamansiklopedisi.org.tr/erdesir, okundu): «Erdeşîr, 28 Nisan 224’te Medler ülkesinde (Medya) Hürmüzcân’da yapılan savaşı kazanır ve aynı yıl hükümdarlığını ilân eder.» · «bazı kaynaklarda onun resmen 226 yılında Medâin’de tahta çıktığı kabul edilmektedir (EIr., II, 372)» | Treccani 'Sasanidi' (okundu): «dalla caduta del regno partico degli Arsacidi (224 d.C.)»; TDV 'Sâsânîler' (okundu): «224'te Hürmüzdegân'da … Erdeşîr … 226 yılında … taç giydi» | Yıl 224 iki bağımsız kaynakla teyitli; GÜN (28 Nisan) yalnız TDV 'Erdeşîr'de; TDV 'Sâsânîler' başlığı 226 diyor (taç) — TDV içi 224/226 farkı beyanlı. | f değişmez. `ic_not_f` düzelt: "gün TDV Erdeşîr maddesinde okundu (28 Nisan 224, savaş günü); TDV Sâsânîler başlığı 226 (taç giyme)". Gün 2. kaynak: Iranica 'Ardašīr I' (erişilemedi). Gregoryen/Jülyen beyanı yok, TDV Gregoryen karşılığı verir. |
| sasani t | 0651-01-01 | TDV 'Sâsânîler' (okundu): «651 yılında düşmanları tarafından Merv’de öldürülen Yezdicerd»; TDV 'Bâvendîler' alıntısı (arama sayfasında): «30/651» | Treccani 'Sasanidi' (okundu): «nel 651, fuggendo dinanzi agli Arabi invasori, fu assassinato nel Khorāsān» | İki bağımsız kaynakla yıl 651; gün yok (Hicrî 30 = Eylül 650 → Ağustos/Eylül 651; 651 ile kesişim 0651-01-01 ilk gün). | Değişme; `ic_not_t`'e hicrî kesişim beyanı eklenebilir. Not: t "hanedanın sonu" = Yezdicerd'in ölümü; Medâin 637'de, Nihâvend 642'de düştü — harita t'yi 651 tutuyor; gerçek hâkimiyet çok daha önce daraldı (aşağıda d). |
| sasani evre: Medâin başkent | — | TDV 'Sâsânîler' (okundu): «Daha sonra taç giydiği Partlar'ın başşehri Medâin'e (Ktesiphon) yerleşti.» | — | Başkent künyede doğru; yerleşim s: bunu yansıtmıyor (d). | — |
| kusan-sasani f | 0230-01-01 | UNESCO Silk Road Vol III (künye kaynağı, okunmadı) | iranologie.com (künye) — akademik değil, YASAK sınıf (CLAUDE.md: popüler/özel site) | İki bağımsız akademik kaynak YOK. TDV'de ilgili madde bulunamadı (okunmadı). | Künye kaynağı yeniden yazılmalı: Iranica 'Kushano-Sasanians' (erişilemedi) + Cambridge History of Iran 3(1) ch. (erişilemedi). |
| kusan-sasani t | 0360-01-01 | aynı | aynı | Künye ozet'i "Şapur II ~325'te güneyi doğrudan aldı; idare 360'a dek" — tarih "~". Yıl uydurma riski. | `kesinlik:"onyil"` + beyan. |
| abna-yemen f | 0575-01-01 | TDV 'Ebnâ' (okundu): «Vehriz … 4000 askerle … 575 [?]» — soru işaretli yıl | UNESCO HGA III (kronoloji_sinir_amerika_afrika3_1024.js:35): «Güney Arabistan'ı 570'ten itibaren…» | İki kaynak çelişiyor: TDV ~575(?), UNESCO 570. İkisi de ~. | f `0575-01-01` + `ic_not`: "TDV 575(?) / UNESCO 570; yıl+yaklaşık; [yalnız yıl teyitli]". |
| abna-yemen t | 0628-01-01 | TDV 'Ebnâ' (okundu): «müslüman oldular (628-630)» ; «Bâzân Sâsânîler'in son, İslâm devletinin ilk San'a valisidir» | UNESCO HGA III: «628'de İslam'a geçti» | Yıl aralığı 628-630 (TDV) — künye aralığın başını alıyor (kural: hicrî değil mîlâdî aralıkta "kesişimin ilk günü" → 0628-01-01 uyumlu). | Değişme; `ic_not`'a "TDV 628-630 aralığı, başı alındı". |

## c) Kronoloji
Var olanlar (Değişmez 2 evreninde): olaylar_antik_yakin_dogu.js:147 (231 Ardeşir Mezopotamya), :148 (240 Hatra), :149 (244 Gordianus), :150 (256 Antiokheia), :151 (256 Dura-Europos), :152 (260 Edessa/Valerianus), :153 (298 Nisibis antlaşması), :154 (309 II. Şapur), :155 (359 Amida), :156 (363 Jovianus), :157 (363-06-26 Iulianus), :158 (387 Ermenistan paylaşımı), :159 (451 Avarayr), :160 (484 Peroz), :161 (496 Kavad). Ayrıca olaylar_antik_akdeniz.js:177 (198 Severus/Ktesifon); olaylar_ortacag_bizans_balkan.js:16 (Herakleios 610). kronoloji_sinir_dogu_500_1281.js:5386/5482 (557 Gazne; 651-01-01 Belh "tek devlete bağlanamadı").
Evren DIŞI (devletler.js:14128-14152 künye kronolojisi, TDV 'sasaniler' kaynaklı): 226 kuruluş, 240-04-12 Şâpûr ortak yönetim, 272 Şâpûr ölümü, 283 Medâin Romalılar, 309, 469 Fîrûz esir, 531 Hüsrev I, 590 IV. Hürmüz, 614 Kudüs, 619 Mısır, 627 Ninevâ, 628 II. Hüsrev, 636 Kādisiye, 642 Nihâvend, 651 Yezdicerd. BU MADDELERİN HİÇBİRİ evrende yok: 224 kuruluş, 226 taç, 614, 619, 627-628, 636, 637, 642, 651.
Bulunamayan (grep: Kādisiye, Nihâvend, Yezdicerd, Medâin, II. Hüsrev, Heraklios seferi): olaylar* ve kronoloji_sinir* içinde YOK.

Önerilen maddeler (devlet:"sasani", `taraflar` her iki tarafı yazmalı — abna-yemen örneği için kritik):
```
{ t:"0224-04-28", kesinlik:"gun", devlet:"sasani", taraflar:["sasani","part"], b:"Erdeşîr Hürmüzdegân (Hürmüzcân) savaşını kazandı; Part hâkimiyeti sona erdi, Sâsânî hânedanı başladı", tur:"kurulus", yer_id:"Ktesiphon", kaynak:"TDV Erdeşîr (islamansiklopedisi.org.tr/erdesir): «28 Nisan 224’te … savaşı kazanır ve aynı yıl hükümdarlığını ilân eder» · Treccani 'Sasanidi': «caduta del regno partico degli Arsacidi (224 d.C.)»" },
{ t:"0226-01-01", kesinlik:"yil", devlet:"sasani", b:"Erdeşîr Medâin'de şâhânşâh olarak taç giydi (bazı kaynaklara göre resmî tahta çıkış)", tur:"hukumdar", yer_id:"Ktesiphon", kaynak:"TDV Sâsânîler: «226 yılında İran'ın mutlak hükümdarı olarak taç giydi» · TDV Erdeşîr: «resmen 226 yılında Medâin’de tahta çıktığı…»" },
{ t:"0614-01-01", kesinlik:"yil", devlet:"sasani", taraflar:["sasani","bizans"], b:"Sâsânîler Kudüs'ü aldı, Kutsal Haç Medâin'e götürüldü", tur:"toprak-kazanc", yer_id:"Kudüs", kaynak:"TDV Sâsânîler (künye ve ilgili cümle): «Sâsânîler Kudüs'ü alıp kutsal haçı Medâin'e götürdü» — gün yok; ikinci kaynak: Treccani/CAH (erişilemedi)" },
{ t:"0619-01-01", kesinlik:"yil", devlet:"sasani", taraflar:["sasani","bizans"], b:"Sâsânîler Mısır'ı (İskenderiye) işgal etti", tur:"toprak-kazanc", yer_id:"İskenderiye", kaynak:"TDV Sâsânîler (künye alıntısı): «Mısır'ı işgal etti» · 2. kaynak gerekli" },
{ t:"0627-12-12", ... }  // Ninevâ savaşı (künyede 627, TDV): gün Jülyen 12 Aralık 627 yaygın ama bu turda doğrulanmadı; yıl düzeyinde 0627-01-01
{ t:"0629-01-01", kesinlik:"yil", devlet:"sasani", taraflar:["sasani","bizans"], b:"Mısır ve Suriye Sâsânîlerden geri alındı / Herakleios'un barışı (628-629)", tur:"toprak-kayip", yer_id:"İskenderiye", kaynak:"TDV Sâsânîler (kısmen) — künyede yok, okunmadı" },
{ t:"0636-01-01", kesinlik:"yil", devlet:"sasani", taraflar:["sasani","hulefa-yi-rasidin"], b:"Kādisiye: Sâsânî ordusu Müslümanlara yenildi", tur:"savas", yer_id:"Hîre", kaynak:"TDV Sâsânîler: «Kādisiye Savaşı (15 H.)» — Hicrî 15 = Şubat 636 → Ocak 637 ∩ 636; gün yok" },
{ t:"0637-01-01", kesinlik:"yil", devlet:"sasani", taraflar:["sasani","hulefa-yi-rasidin"], b:"Medâin (Ktesiphon) Müslümanlarca alındı", tur:"toprak-kayip", yer_id:"Ktesiphon", kaynak:"TDV 'Medâin' maddesi — BU TURDA OKUNMADI; 16/637 yaygın bilgi, kaynakla doğrulanmalı" },
{ t:"0642-01-01", kesinlik:"yil", devlet:"sasani", taraflar:["sasani","hulefa-yi-rasidin"], b:"Nihâvend: Sâsânîler yeniden yenildi, İran platosu açıldı", tur:"savas", yer_id:"Nihâvend", kaynak:"TDV Sâsânîler: «Nihâvend Savaşı (21 H.)»" },
{ t:"0651-01-01", kesinlik:"yil", devlet:"sasani", taraflar:["sasani","hulefa-yi-rasidin"], b:"III. Yezdicerd Merv yakınında öldürüldü; Sâsânî imparatorluğu sona erdi", tur:"son", yer_id:"Merv (Mari)", kaynak:"TDV Sâsânîler: «651 yılında düşmanları tarafından Merv'de öldürülen Yezdicerd» · TDV Merv: «yakındaki bir köyde öldürüldüğü bilinmektedir» · Treccani: «nel 651 … assassinato nel Khorāsān»" },
{ t:"0575-01-01", kesinlik:"yil", devlet:"abna-yemen", taraflar:["abna-yemen","aksum","sasani"], b:"Vehriz'in sefer ordusuyla Yemen'den Habeşlerin sürülmesi; Sâsânî Yemen valiliği (Ebnâ) kuruldu", tur:"kurulus", yer_id:"Sana", kaynak:"TDV 'Ebnâ' (okundu): «4000 askerle … 575 [?]» · UNESCO HGA III: 570 — yıl TEYİTSİZ (iki kaynak ~570/575)" }
```
Düzeltme (yeni madde değil): `kronoloji_sinir_amerika_afrika3_1024.js:35` — `devlet:"abna-yemen"` ve `taraflar:["abna-yemen","aksum","sasani"]` yap (yer_id boş → "Sana"), açık kırılma 628-01-01 kapanır.

## d) Harita uyumu
Açık kırılma: sasani 3 (0500-01-01 üç yerleşim kazanç; 0619-01-01 İskenderiye kazanç; 0629-01-01 İskenderiye kayıp), abna-yemen 2 (0575-01-01, 0628-01-01), kusan 0 = toplam 5.
| gün | yerleşim | öneri |
|---|---|---|
| 0500-01-01 kazanç | Merv, Nîşâbur, Serahs | Ufuk sınırı işareti ("f=0500 UFUK SINIR İŞARETİDİR" — yerleşim kaynağı notu). Kırılma değil, görüntüleme penceresinin başı; ölçer sayıyor. Öneri: `ufuk`/`yer_baslangici` etiketi ile muaf say (Emre kararı) ya da 224-04-28 başlangıçlı s: yaz. |
| 0619-01-01 kazanç | İskenderiye | madde (c) 0619-01-01 |
| 0629-01-01 kayıp | İskenderiye | madde (c) 0629-01-01 |
| 0575-01-01 kazanç | San'a | madde yukarıda (abna-yemen 575) |
| 0628-01-01 kayıp | San'a | taraflar düzeltmesi |
En geniş an 619 (6 yerleşim). Karşılaştırma bilinen sınırla: Sasani en geniş hâlinde (~620) Mısır, Suriye, Filistin, Anadolu'nun doğusu, Mezopotamya, İran platosu, Horasan, Kuşan bölgeleri (TDV: 614 Kudüs, 619 Mısır). Atlasta bu yerlerin hiçbiri s: ile Sasani'ye verilmemiş (Kudüs, Şam: hangi d:? Ölçer örneği sadece 6 kayıt). Ayrıca Hemedan `__BOSLUK__` (580) — Sasani'nin Medya merkezi olduğu için "bölge sahibi + beyan" kuralına göre Sasani olmalı. Hîre 580'de `lahmi` (Sasani vasalı); Belh 557'den `sasani` (TDV Belh: «Sâsânîler döneminde (226-651) burada Horasan merzübânlarından biri kalırdı»), ama 484-557 Eftalit haracı dönemi ayrı.
Önerilen s: eklenecek yerleşimler (tarih kaynakla belirlenmeli, bu turda yalnız aday listesi):
- Ktesiphon/Medâin: `{f:"0224-04-28",t:"0637-01-01",d:"sasani"}` (TDV Sâsânîler: Medâin başkent; Medâin'in düşüşü yılı TDV 'Medâin'den teyit — okunmadı).
- Istahr (Fars, hânedanın ata yurdu), Rey, Hemedan (`__BOSLUK__` → sasani), Susa, Şîraz/Bişapur (Şapur I 266'dan önce), Gundişapur, Nusaybin (363'e dek Roma, sonra Sasani), Edessa/Urfa (260-?), Antakya (256 geçici), Kudüs (614-629), Şam (613-628), Dımaşk, Memfis/İskenderiye (619-629), Merv/Herat/Belh (Kuşano-Sasani 230-360).
- Kuşano-Sasani: Belh (Balh, künyede başkent) 0230 → 0360: s: dizisi Belh'te `kusan-sasani` olmalı; şu an Belh `eftalit → sasani 557-651` (başlangıç 500).
- Yemen: San'a'ya ek Aden? (kaynak yok) — abna-yemen yalnız San'a.

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js:14128` sasani: `ic_not_f` — "TDV başlığı … YIL" ifadesini kaldır; "TDV 'Erdeşîr': 28 Nisan 224 (savaş günü); TDV Sâsânîler başlığı 226 (taç)" yaz. `kaynak:"TDV: sasaniler"` → `"TDV: sasaniler · TDV: erdesir · Treccani: Sasanidi (okundu)"`.
2. `data/kronoloji_sinir_amerika_afrika3_1024.js:35`: `devlet`→"abna-yemen", `taraflar`→["abna-yemen","aksum","sasani"] (ölçer kapanır).
3. Yeni dosya `data/kronoloji_sinir_sasani_1103.js` + `index.html` script satırı: yukarıdaki (c) maddeleri (ikinci kaynaklı olmayanlar yıl hassasiyetiyle).
4. `data/yerlesimler_mo_zincir.js:9` Ktesiphon: `s:` dizisine `{f:"0224-04-28",t:"0637-01-01",d:"sasani",kesinlik:"yil",kaynak:"…"}` ve ardıl (hulefa-yi-rasidin) ekle.
5. `data/yerlesimler_once1281_yt_ortadogu.js:9,62` Rey, Istahr: `s:[]` → `sasani` dönemleri; Hemedan `__BOSLUK__` → `sasani` (bölge sahibi + beyan).
6. kusan-sasani künyesi: `iranologie.com` kaynağını çıkar (CLAUDE.md yasak sınıf); ikinci akademik kaynak bulunana dek künye `kesinlik:"onyil"`; Belh'e s: ekle.
7. abna-yemen `ic_not`: "TDV 575(?) / UNESCO 570; TDV bitiş 628-630 aralığı, başı alındı".

## Erişilemeyen kaynaklar
- Encyclopaedia Iranica «Ardašīr I» — https://iranicaonline.org/articles/ardasir-i — 403. Soru: Hürmüzdegân savaşı hangi gün (28 Nisan 224?) ve taç giyme yılı 224 mü 226 mı?
- Encyclopaedia Iranica «Sasanian dynasty» / «Kushano-Sasanians» / «Yazdegerd III» — 403. Sorular: Kuşano-Sasani kuruluş yılı (230?) ve bitiş (360?); Yezdicerd III'ün ölüm yılı 651 mi 652 mi?
- Cambridge History of Iran vol.3(1) (Yarshater 1983) — Sasani evreleri; Roma-Sasani sınır değişimleri.
- TDV 'Medâin' maddesi — bu turda okunmadı. Soru: Medâin'in fethi hangi yıl/gün (637?).
- TDV 'Hüsrev II / Perviz' ve 'Herakleios' — 627-628 olayları ve Mısır'ın 629'da geri alınışı için gün.

## Iranica / Oxford Reference teyidi (EMRELİC 1 KASIM, tarayıcıdan, 4 Kasım 2026 gecesi; aktarım)
- Iranica «Ardašīr I» (i. History, J. Wiesehöfer, EIr II/4 s. 371-376), «Overthrow of the Parthian empire
  (224)»: «fought in the plain of Hormazǰān in Media on 28 April 224» (Nöldeke s. 411'e dayanarak).
  **Hüküm:** TDV «Erdeşîr» + Iranica ⇒ **28 Nisan 224 çift teyit** (`ic_not_f`a "çift teyit" yazılsın;
  "gün yok, yıl" ifadesi silinsin). `part` t ve `sasani` f 0224-04-28 aynı gün kalır.
- «Yazdegerd III»: Iranica'da okunamadı (madde bulunamadı). t=651 TDV + Treccani ile kalır.
