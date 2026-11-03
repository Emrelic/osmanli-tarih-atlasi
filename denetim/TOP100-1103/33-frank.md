# 33 · Frank Krallığı / Karolenj İmparatorluğu — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 3 Kasım 2026 (ölçer: `frank karolenj-italya dogu-francia`)

## Özet
- Eşleşen künye: `frank` (481→843, 12 kırılma / **10 AÇIK**, 24 yerleşim), `karolenj-italya` (774→962, 4 kırılma / 2 açık, 14 yerleşim), Verdun sonrası üçlü: `bati-francia` (843→987), `dogu-francia` (843→962), `orta-francia` (843→855-09-29) + `orta-francia-lotharingia` (855→925); alt krallıklar `neustria`, `austrasia` (511→751, `frank` ile çakışan).
- En ağır bulgular: (1) **Verdun günü uyumsuz:** `frank.t` ve üç ardıl künyenin f'si 0843-01-01, oysa antlaşma 10 Ağustos 843 (atlasın kendi maddesi 0843-08-10); 7 aylık yanlış sınır, 4 künyede. (2) **Frank çekirdeği haritada yok:** Paris, Tours, Orléans, Poitiers, Metz, Strazburg'ın s: dilimleri 1000'den başlıyor, yani 481-1000 arası Frank kalbi sahipsiz/emilmiş; Bordeaux ve Barcelona kaydı YOK. (3) **Aachen ve Köln 843-01-01 → 855-09-29 `__BOSLUK__`:** oysa Aachen başkentli `orta-francia` künyesi 843-855 var — künye var, yerleşim bağlı değil.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| frank | Frank Krallığı/İmparatorluğu (Merovenj-Karolenj) | 0481-01-01 | 0843-01-01 | tek künye iki hanedan (Merovenj 481-751, Karolenj 751-843); t Verdun'dan 7 ay önce |
| neustria / austrasia | Merovenj alt krallıkları | 0511-01-01 | 0751-01-01 | frank ile çakışan alt künye (Soissons 511-751 neustria) — frank 24 yerleşimde ne zaman sahip, neustria nerede: tutarlılık denetlenmeli |
| karolenj-italya | İtalya Krallığı | 0774-01-01 | 0962-02-02 | f yanlış gün (aşağıda) |
| orta-francia | Francia Media (Lothar I) | 0843-01-01 | 0855-09-29 | Aachen/Köln bu künyeye bağlanmamış |
| bati-francia | Batı Francia | 0843-01-01 | 0987-07-03 | |
| dogu-francia | Doğu Francia | 0843-01-01 | 0962-02-02 | (dosya 32) |
Verdun sonrası Orta/Batı/Doğu künyeleri VAR; eksik: Aquitania (Pippin II), Provence/Burgonya Kralığı (879), İtalya'nın Lothar payı (karolenj-italya kısmen). Merovenj-Karolenj ayrı künye olarak bölünebilir (751-01-01 Pippin tahta çıkışı, madde frank kronolojisinde mevcut) ama zorunlu değil; evre kırılması 751'de sahiplik değişimi içermiyor.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm |
|---|---|---|---|---|
| frank.f | 0481-01-01 | Enc. Ital. 'Franchi' (okundu): «nella tomba di re Childerico (morto nel 482)» | GEC 'Khilderic I' (künye kaynağı): Tournai 481 | 481/482 çelişkisi künye ic_not'unda beyanlı (KASA, 2 Kasım). Treccani Dizionario di Storia 'Franchi' sayfası Clovis tarihini vermiyor (bende okunmadı). Hüküm: 481-01-01 BEYANLI KORUNABİLİR; ama 481-01-01 Clovis'in tahta çıkışı DEĞİL "Childeric'in ölümü yılı 481/482"; asıl krallık-birliği için GEC 'Clodoveu I' ~509-511. |
| frank.t | 0843-01-01 | Enc. Ital. 'Verdun': «agosto 843» (künyede alıntılı) | atlas kronolojisi 0843-08-10 (kaynak Britannica, dayanak olamaz) | **Öneri t=0843-08-10** (ay Treccani ile teyitli, gün tek kaynaklı → ic_not; ikinci akademik gün kaynağı ARANACAK. Gün teyit edilemezse kuralın ruhu: yıl-01-01 kalır ama o zaman Reims'in 0843-08-10 kırılması ile çelişir: tutarlılık için bütün Verdun künyeleri aynı güne çekilmeli.) |
| orta-francia.f / bati-francia.f / dogu-francia.f | 0843-01-01 | aynı | aynı | aynı öneri: 0843-08-10. Bitişiklik korunur (frank.t = üçünün f'si). |
| karolenj-italya.f | 0774-01-01 | Pavia s: dilimi atlasın kendisinde 0774-06-01'de (yerlesimler_once1281_yt_avrupa.js; ama atlas referans değildir) | Britannica 'Lombard people' (künye kaynağı: Charlemagne Pavia'yı alıp Lombard kralı oldu) | **Çelişki:** künye 774-01-01 ama Pavia'nın teslimi Haziran 774; `langobard.t` de 0774-01-01. Milano gibi şehirler 774-01-01'de geçiyor, Pavia 774-06-01'de: kendi içinde 5 aylık tutarsızlık. Öneri: `langobard.t` ve `karolenj-italya.f` = 0774-06-01 (ay: Annales regni Francorum; Treccani/Britannica gün vermez) ya da yerleşimleri 774-01-01'e hizala. İki bağımsız akademik kaynak ARANACAK (Wickham/Christie, Cambridge Medieval History II). |
| karolenj-italya.t | 0962-02-02 | NDB 'Otto I.' (okundu, 2.2.962) | Treccani G. Giovanni XII (künye) | TEYİTLİ. |
Takvim: 843-08-10 ve 774 Jülyen dönemidir; kaynaktaki gün korunur (koordinatör kararı).

## c) Kronoloji (evren: olaylar*.js, kronoloji_sinir*.js)
Var olanlar (hepsi bu dosyalarda ve doğru görünüyor): 0756 Papalık Devleti olaylar_ortacag_bati_avrupa.js:17 · 0774 Pavia/Langobard sonu olaylar_ortacag_bekleyen_acik.js:18 · 0800-12-25 Charlemagne imparator bati_avrupa:18 (+ bizans_balkan:24) · 0814-01-28 ölüm :19 · 0842-02-14 Strazburg Andları :20 · 0843-08-10 Verdun :21 (+ kronoloji_sinir_benelux.js:14) · 0875-12-25 Kel Charles :22 · 0893 / 0911 / 0923 :23-25 · 0955 Lechfeld :26.
EVREN DIŞI (yalnız devletler.js künye kronolojisi): 481 Clovis, 511 Clovis ölümü, 751 Pippin, 768, 840, 841-06-25 Fontenoy, 842 — devletler.js:19941-19949; yani Merovenj çağının tamamı evren dışıdır.
Eksik madde önerileri (kaynak ARANACAK; hiçbiri okunmadı):
```
{ t:"0507-01-01", kesinlik:"yil", b:"Vouillé Savaşı: Clovis Vizigot kralı II. Alaric'i yendi; Aquitaine'in büyük kısmı Franklara geçti", yer_id:"Poitiers", kaynak:"Gregory of Tours, Historiae II.37 (birincil neşir) + Cambridge Medieval History I" }
{ t:"0531-01-01", kesinlik:"yil", b:"Frankların Thüringen'i alması (Thuringi krallığının sonu)", yer_id:"Erfurt", kaynak:"ARANACAK" }
{ t:"0534-01-01", kesinlik:"yil", b:"Burgonya Krallığı Franklara geçti (Godomar yenildi)", yer_id:"Lyon", kaynak:"ARANACAK; Treccani 'Burgundi' künyede" }
{ t:"0788-01-01", kesinlik:"yil", b:"Ingelheim'da Bavyera Dükü III. Tassilo azledildi: Bavyera Franklara katıldı", yer_id:"Regensburg", kaynak:"ARANACAK (Annales regni Francorum 788 birincil)" }
{ t:"0804-01-01", kesinlik:"yil", b:"Sakson Savaşları sona erdi: Saksonya Frank egemenliğine girdi (772-804)", yer_id:"Bremen", kaynak:"ARANACAK" }
{ t:"0794-01-01", kesinlik:"yil", b:"Frankfurt Konsili / sarayı: Frankfurt ilk anışı", yer_id:"Frankfurt", kaynak:"ARANACAK" }
```
Ayrıca: 843-855 Orta Francia'nın kendi başkenti Aachen'in sahibinin değişmesi için madde gerekmez (künye var) ama yerleşime bağlanmalı.

## d) Harita uyumu
`frank`: 12 kırılma, 10 AÇIK; en geniş an 805 (24 yerleşim: Aachen, Augsburg, Bremen, Cenevre, Erfurt, Frankfurt, Hamburg, Koblenz, Konstanz, Köln, Lyon, Maastricht, Magdeburg, Mainz, Münster, Nijmegen, Regensburg, Reims, Tongeren, Toulouse, Tournai, Trier, Utrecht, Würzburg).
| gün | yerleşimler | öneri |
|---|---|---|
| 0508-01-01 | Toulouse | madde yok (en yakın 365 g): Vouillé (507) sonrası Toulouse'un alınışı; yukarıdaki Vouillé maddesi 507, t 508'e uymuyor: Toulouse'u Frank'a bağlamak Vouillé (507) + Toulouse'un düşüşü (507/508 kışı; Gregory: Alaric'ten sonra Clovis Toulouse'a gitti) — yıl tutarsızlığını kaynakla çöz |
| 0531-01-01 | Erfurt, Würzburg | yukarıdaki Thüringen maddesi |
| 0534-01-01 | Cenevre, Lyon | Burgonya maddesi; ayrıca Lyon s: 0461-0534 burgund, 0534 ✓ tutarlı |
| 0536-01-01 | Augsburg, Konstanz | Ostrogot Alamannia/Raetia devri (Prokopios, ~536-537): madde ARANACAK |
| 0788-01-01 | Regensburg | Tassilo maddesi |
| 0794-01-01 | Frankfurt | ilk anılış yılı; madde zayıf (gerçek sahiplik değişimi değil: Frankfurt Frank toprağında kuruluşu, ilk-anılış kuralı). Bu tür "ilk anılış kazancı" kronoloji maddesi istemez; ölçer evren kuralı gereği ister: madde "Frankfurt Konsili" ile karşılanabilir |
| 0804-01-01 | Bremen, Hamburg, Münster | Saksonya maddesi |
| 0805-01-01 | Magdeburg | Magdeburg ilk anılışı (805 Diedenhofen Kapitülerisi); madde ARANACAK |
| 0843-01-01 | Aachen, Augsburg, Bremen, Cenevre … | Verdun'a hizala (t=0843-08-10 ve 'madde var') |
| 0843-08-10 | Reims | Reims'in Batı Francia'ya geçişi: Verdun maddesi yer_id:"Verdun", Reims'i kapsamıyor → `odak_yer:["Verdun","Reims"]` |
Sahiplik tutarsızlıkları:
- **Aachen ve Köln: 0843-01-01 → 0855-09-29 `__BOSLUK__`** (yerlesimler_avrupa.js / yerlesimler.js), oysa `orta-francia` (Aachen başkentli) 843-855 var. Düzeltme: o dilimleri `orta-francia` yap (kaynak: Treccani 'Lorena' «Francia Media»). Aynı şekilde Koblenz/Trier/Maastricht/Tongeren (kontrol edilmedi).
- **Paris, Tours, Orléans, Poitiers, Metz, Strazburg:** s: dilimi 1000-01-01'den başlıyor; 481-1000 yok. Merovenj kronolojisi (devletler.js frank) `odak_yer:["Paris"]` diyor ama Paris yerleşiminin Frank sahipliği yok → 481-1000 Paris petek komşuya emiliyor. Öneri: Paris frank 0481→0843, bati-francia 0843→0987 (zincir `__BOSLUK__` merdiveni ④/⑤: yerleşim o devirde var mıydı: Lutetia/Paris, evet, Frank başkenti). Bordeaux, Barcelona (Frank Marka Hispanica 801) yerleşim kaydı YOK.
- Pavia: karolenj-italya 0774-06-01 (kendi künye f'si 0774-01-01 ile 5 ay çelişir).
- `karolenj-italya` AÇIK: 0774-01-01 kazanç (Bergamo, Brescia, Cenova, Floransa — madde var: olaylar_ortacag_bekleyen_acik.js:18, yer_id Pavia olduğu için sayılmıyor → odak_yer ekle); **0812-01-01 kayıp (Floransa, Pisa): madde yok ve bu iki şehrin 812'de nereye geçtiği bilinmiyor** — Aachen Antlaşması 812 Bizans-Frank (Dalmaçya/Venedik) Floransa/Pisa'yı ilgilendirmez; atlas s: dilimi kaynağı okunmalı, kaynaksızsa kaldırılmalı.
- `neustria`/`austrasia` (511-751) ile `frank` çakışması: Soissons 511-751 neustria; frank 24 yerleşimde aynı dönemde sahip. Üst-alt künye aynı yerleşimde ikisi birden yazılmamış (dilimler çakışmıyor, iyi); ama Paris bu nedenle boş.

## Önerilen düzeltmeler (KASA için)
1. devletler.js: `frank.t`, `orta-francia.f`, `bati-francia.f`, `dogu-francia.f` = "0843-08-10" + ic_not beyanı (Treccani ay; gün tek kaynak). Yerleşim s: 0843-01-01 sınırlarını (Aachen, Köln, Mainz, Frankfurt, Hamburg, Magdeburg…) aynı güne çek.
2. Aachen, Köln (yerlesimler_avrupa.js, yerlesimler.js): `0843-01-01→0855-09-29 __BOSLUK__` yerine `orta-francia` (+ Koblenz/Trier/Maastricht/Tongeren kontrol).
3. Paris, Tours, Orléans, Poitiers, Metz, Strazburg ve Bordeaux için 481-1000 sahipliği (Frank/Batı Francia/Doğu Francia/Lotharingia) — kaynaklı s: dilimleri.
4. `langobard.t` + `karolenj-italya.f` 0774 gününü Pavia'nın teslimiyle hizala (0774-06-01).
5. `olaylar_ortacag_bati_avrupa.js:21` `odak_yer:["Verdun","Reims"]`; Merovenj kronolojisi (481-842) evren dışı: Vouillé/Thüringen/Burgonya/Bavyera/Saksonya maddelerini evrene al.
6. Floransa/Pisa 812 kırılması kaynak sorgula.

## Erişilemeyen kaynaklar
- Treccani 'Verdun' (Enc. Ital.) tam metni — künyede alıntılı, bende slug çekilemedi; soru: antlaşmanın tam günü verilmiş mi?
- Janet Nelson, *Charles the Bald* (Longman 1992) · Cambridge Medieval History vol. 3: Verdun 10 Ağustos 843 günü.
- Gregory of Tours, *Historiae* II.27-43 (Clovis 481/486, Vouillé 507) ve Treccani 'Clodoveo' (çekilen sayfa içerik vermedi).
- Treccani 'Carlo Magno' (Dizionario di Storia) sayfası içerik vermedi: 774/800/814 teyidi.
