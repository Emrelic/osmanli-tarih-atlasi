# 57 · Hazar Kağanlığı (c. 630/650 – 965/969) — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 4 Kasım 2026 (ölçer iki kez; son koşu "otomatik dönem ucu" satırlı)

## Özet
- Künye 2 (`hazar-kaganligi` f=0630, `hazar` f=0650) — **kopya künye; harita yalnız `hazar-kaganligi` kullanıyor, `hazar` yetim (0 yerleşim, ölçer: "haritada görünmüyor").**
- Ölçer: `hazar-kaganligi` kırılma 2 (732, 965), açık 0, otomatik-maddeyle-kapanan 0 — ama kapanışların ikisi de yerleşim kaydından türemiş notlardır (aşağıda). Eksik madde önerisi 5.
- En ağır 3 bulgu: ① kağanlık haritada **tek hücre** (Astrahan 732-965); 630-732 arası ve Kuzey Kafkasya/Dağıstan/Kırım/Don hiç yok; ② f: iki künyede 630 ↔ 650, TDV 630 «bağımsızlıklarını ilân ettiler (630)» ama aynı madde «VII. yüzyılın ortalarına kadar…» ile 650'ye de yer bırakıyor; ③ t=965: TDV 965 (hakanın Hârizm'e sığınması), Britannica-1911 Svyatoslav'ın Sarkel/İtil/Semender'i 965-969'da aldığını yazıyor → İdil ağzındaki Astrahan için 965 erken olabilir (968/969 kaynak okunamadı).

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| hazar-kaganligi | Hazar Kağanlığı | 0630-01-01 | 0965-01-01 | devletler.js:14360-14376; renkler.py:993 (#08cdff); Astrahan s: 0732-0965 (yerlesimler.js:1182). Haritada kullanılan. |
| hazar | Hazar Kağanlığı | 0650-01-01 | 0965-01-01 | devletler.js:26886-26917; renkler.py:239; hiçbir s:'te yok; kronoloji_sinir_dogu_500_1281.js:5648/8017 taraf. **Kopya.** |
| (eksik) | Hazar yerel parçalar (Küçük Hazarya/Kırım, Semender/Belencer Dağıstan'ı, Sarkel) | — | — | künye gerekmez; **yerleşim s:'leri** eksik (d) |
Öneri: tek künye (`hazar-kaganligi`), `hazar`ı kaldır; f kararı b)'de. İki künyenin farklı `bolge` ve `tur` değeri var (`sibirya-bozkir/hanlik` ↔ `dogu-avrupa/kaganlik`): kalan künyede `dogu-avrupa` doğru (TDV: «Karadeniz ile Kafkas dağlarının kuzeyinde ve İdil nehri dolaylarında»).

## b) f/t ve evreler
| Uç | Atlas | Kaynak 1 | Kaynak 2 | Hüküm |
|---|---|---|---|---|
| f | 630 (`hazar-kaganligi`) / 650 (`hazar`) | TDV «Hazarlar» (Ahmet Taşağıl, c. 17, 1998, s. 116-120; https://islamansiklopedisi.org.tr/hazarlar, 3.11.2026'da okundu): «Hazarlar bağımsızlıklarını ilân ettiler (630)»; ayrıca «Hazarlar VII. yüzyılın ortalarına kadar Batı Göktürkleri’ne bağlı kalmışlardır» (atlas notundan; aynı md.) | Britannica 11. bs. «Khazars» (en.wikisource.org/wiki/1911_Encyclopædia_Britannica/Khazars, okundu): Bizans kayıtlarına ilk girişi **625**, Herakleios'a 40.000 asker; "Crimea annexed by late 7th c."; Hrvatska enciklopedija «Hazari»: «izdvojio se Hazarski Kaganat u VII. st.» (yıl yok) | **TDV esas: 0630-01-01 (yıl)**; 650 yalnız Belencer önündeki 652-53 Arap saldırısına dayanıyor ve bağımsızlık tarihi değil. İkinci akademik kaynak 625-630 aralığında etkinlik doğruluyor ama «bağımsızlık günü» vermiyor → "çift teyit YOK; tek kaynak (TDV) + dolaylı". Golden (Cambridge History of Early Inner Asia 1990) ve Iranica «Khazars» erişilemedi — onların c. 650 dediği biliniyor (belge okunmadı). Öneri: künye 630 (TDV), ic_not'a «TDV iç gerilimi + bilimsel literatürde c. 650 yaygın (Golden: okunmadı)» yaz. |
| t | 965 (ikisinde) | TDV: «965’te hakanın Hârizmliler’e sığınması» | Hrvatska enciklopedija «Hazari»: «u 965. kijevski knez Svjatoslav… porazio»; Britannica 1911: «Sarkel, Itil ve Semender 965-969'da teslim» | **965 doğru ama "sona erme" değil "çöküşün ölçülebilir anı"**; İtil'in yıkımı Svyatoslav'ın 968-969 seferi (Iranica/Ibn Havkal — okunamadı). Künye t=965 TDV'ye göre kalabilir; Astrahan s: bitişi 965 → BOŞLUK beyanı ic_not'ta "965-969 belirsiz" bulunmalı (mevcut BOŞLUK beyanı 965-1054 tek TDV cümlesine dayanıyor). |
| başkent | Belencer → İtil | TDV: «VII. yüzyılın sonuna kadar başşehir olan Dağıstan'daki Belencer»; İdil'e taşınma «İslâm ordularının baskısıyla» | Britannica 1911: Itil Semender'in yerine geçti («since the raids of the Mahommedans») — Belencer→Semender→İtil sırası var | Başkent zinciri eksik: Belencer→**Semender**→İtil. Künye `baskent` alanına Semender eklenebilir (tarih yok). |
| Tarihsel bağlantı | 732 | TDV: «732'de Azerbaycan-İrmîniye valiliğine getirilen Mervân b. Muhammed…» | Iranica 737 verir (künye kroniğinde, okunmadı) | 732 TDV; Astrahan s: f=0732 bu sefer sırasında "yeni Hazar başşehri İdil" anılmasından türetilmiş — **fiilî Hazar hâkimiyeti 732'den önce de olmuş olabilir**; 732 "ilk tanıklık" tarihidir, "hâkimiyet başlangıcı" değil. |
| Yahudiliği kabul | — | TDV: 740 (Yehuda Halevi'ye dayanır) | Mes'ûdî: Hârûnürreşîd devri 786-809 (TDV'nin aktardığı); Britannica 1911 c. 740; HE «potkraj VIII. st.» | Tarih çelişkili; haritaya girmez; yazılırsa YIL değil "VIII. yy" kesinlik. |

## c) Kronoloji
Değişmez 2 evreninde var olanlar:
- olaylar_ortacag_bekleyen_acik.js:5 — 0629-01-01 Hazarlar Tiflis'i zaptetti (BU "629" künye f=630 ile "Batı Göktürk'e bağlı iken" notuyla çelişmez; TDV'de bu yıl okunmadı); :10 — 0714-01-01 Mesleme Derbend'i aldı (TDV ✓ 714); :17 — 0764-01-01 Hazar ordusu Tiflis'i aldı (TDV ✓ 764).
- olaylar_ortacag_bozkir.js:11 — 0965-01-01 İdil Bulgarları bağımsız oldu (gerçek olay).
- olaylar_ortacag_italya_dogu_avrupa.js:30 — 0972 Svyatoslav'ın ölümü (Peçenek).
- kronoloji_sinir_asya_zincir_1024.js:86 (0732 İdil anıldı, `hazar-kaganligi`) ve :99 (0965 hakan Hârizm'e sığındı); kronoloji_sinir_dogu_500_1281.js:5648 (0732, taraf `hazar`) ve :8017 (0965 "Astrahan sahipsiz kaldı") — **bunlar yerleşim zincirinden türemiş kapanış kayıtlarıdır** (metinleri "Astrahan yöresi … çıktı", "kuyruk2a birleşik önek dilimi"); gerçek tarihî olay maddesi değiller. Ölçer 0 otomatik diyor; ben bunların 732 ve 965'in tek karşılığı olmasını zayıf sayıyorum.
- Evren dışı (var): künye kroniği (devletler.js:14360-14376: 630 kuruluş, 705, 714, 717, 730, 732, 764, 833 Sarkel, 965) ve :26886 `hazar` kroniği; kronoloji_sinir_once1281_geriye.js yok.
Tarih doğruluğu: künye kroniğinde 0705 "Iustinianos" TDV md. okunmuş ✓ (TDV 705 sayfa satırı doğrulanmadı: bu denetimde madde alıntısı yok → kontrol); 0833 Sarkel TDV «833 yılında Hazar hakanının yardım istemesi üzerine» (inşa yılı değil, istek yılı) — Britannica 1911 834; kronik 833 "inşa eder" der → "istek 833; inşa 833-834" olarak düzelt.
Eksik / önerilen (Değişmez 2 evrenine, kaynaklar okundu):
```
{ t:"0630-01-01", tur:"kurulus", onem:4, dunya:2, kapsam:"dis", kesinlik:"yil", b:"Batı Göktürk Devleti'nin yıkılışıyla Hazarlar bağımsızlıklarını ilân etti", yer_id:"Astrahan", odak_yer:["Astrahan"], kaynak:"TDV «Hazarlar» (Taşağıl, c.17, 1998): «bağımsızlıklarını ilân ettiler (630)»; çelişki: aynı md. «VII. yüzyılın ortalarına kadar»; Britannica 1911 625'te Herakleios müttefiki" }
{ t:"0732-01-01", tur:"savas", onem:3, dunya:2, kapsam:"dis", kesinlik:"yil", b:"Mervân b. Muhammed Derbend'i aşıp Belencer'e girdi, İdil'e ilerledi; Hazar hakanıyla barış (TDV 732; Iranica 737 — okunmadı)", yer_id:"Derbend", odak_yer:["Derbend"], kaynak:"TDV «Hazarlar»: «732'de Azerbaycan-İrmîniye valiliğine getirilen Mervân b. Muhammed»" }  (künye kroniğinde var; evren dışı)
{ t:"0833-01-01", tur:"siyaset", onem:2, dunya:2, kapsam:"dis", kesinlik:"yil", b:"Hazar hakanı Bizans'tan yardım istedi; Don kıyısında Sarkel Kalesi (Beyaz Kale) yapıldı (Britannica 1911: 834)", yer_id:"Sarkel", kaynak:"TDV «Hazarlar»: «833 yılında Hazar hakanının yardım istemesi üzerine»; Britannica 1911 «Khazars»: 834, Theophilus" }  (yalnız Sarkel yerleşimi eklenirse)
{ t:"0965-01-01", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis", kesinlik:"yil", b:"Kiev Knezi Svyatoslav Hazarları yendi; hakan Hârizm'e sığındı (İtil'in yıkımı 968-969 olabilir)", yer_id:"Astrahan", kaynak:"TDV «Hazarlar»: «965’te hakanın Hârizmliler’e sığınması»; Hrvatska enciklopedija «Hazari»: 965 Svjatoslav; Britannica 1911: Sarkel, Itil, Semender «965-969»" }
{ t:"0968-01-01", tur:"savas", ... İtil'in Rus yıkımı — YAZILMASIN: yalnız ikincil bilgi; Iranica/Ibn Havkal (358 H=968/969) okunmadan eklenmesin }
```

## d) Harita uyumu
Ölçer: `hazar-kaganligi` kırılma 2 (0732-01-01 Astrahan boşluk→hazar; 0965-01-01 Astrahan hazar→boşluk), açık 0, "yalnız otomatik" 0. `hazar`: yerleşim 0, kırılma yok → haritada görünmüyor.
| gün | yerleşim | durum |
|---|---|---|
| 0732-01-01 | Astrahan | kapatan madde: asya_zincir:86 / dogu_500:5648 — türetilmiş ("İdil anıldı"). Gerçek karşılık eksik: yukarıdaki 0732 Mervân maddesi. |
| 0965-01-01 | Astrahan | asya_zincir:99 + dogu_500:8017 türetilmiş; gerçek karşılık olaylar_ortacag_bozkir.js:11 (Bulgarlar) dolaylı; Svyatoslav/hakan maddesi eksik (yukarıda). |
Sahiplik kapsamı: **Kağanlığın bilinen toprağı** (TDV: Karadeniz-Kafkas kuzeyi-İdil; «en geniş zamanında Yayık ve Cim nehirlerinden Dinyeper'e»; Kırım: «576 Kerç Göktürkler'in eline»; Britannica 1911: Kırım, Don, Bolgar'a kadar) için atlas bugün:
- Astrahan 500-732 `__BOSLUK__` (beyanlı, TDV: merkez Belencer'dir) — 650'den (veya 630'dan) 732'ye Hazar sahipliği için abi merkez Belencer ve Semender gerekir; **Belencer atlas'ta yerleşim olarak yok**, Semender (yerlesimler_once1281_yt_iran_orta_asya.js:53, kasaba, s:[] bos veri-yok) var ama koordinat "yaklaşık".
- Derbend (yerlesimler.js:817) s: yalnız 1239'dan başlıyor; 714'te Arap hâkimiyeti, 732 sonrası Hazar/Arap sınır bölgesi; öncesi boş/yok (Hazar 'kapısı' Derbend'in kuzeyi).
- Kefe (yerlesimler.js:719) 1000-1242 `__BOSLUK__`, 1000 öncesi yok; Kerç/Taman 1281+; Kırım noktası s:[] "veri-yok"; Sudak yok. Hazar Kırım'ı (Küçük Hazarya) hiç boyanmıyor.
- Kiev 882'de başlıyor (kiev-rusu); öncesi (Polyane'nin Hazar haracı — kaynak okunmadı) boş.
- Sarkel yok.
Harita 732-965'te yalnız İdil ağzındaki bir petek (+5 emilmiş hücre: g=[4119..4124]) — üretilmiş devlet_harita_ust.js'te Hazar boyası bu 6 hücre. TDV'nin "en geniş zaman" tarifi haritaya yansımıyor. **Beyansız yaklaşıklık değil, beyanlı yetersizlik** (Astrahan 500-732 BOŞLUK beyanı var). Öneri: kaynak taranınca (Taşağıl'ın bibliyografyası: Dunlop, Golden, Artamonov, Kurat) şu yerlerin Hazar s: dönemleri sorgulansın: Semender (Dağıstan), Derbend 732+, Kerç/Taman (Hazar Bosporos'u 8-9. yy), Kırım Dağları (Kherson), Sarkel, İtil (Astrahan harabesi), Bolgar (Hazar'dan 965 tam bağımsız → 965 öncesi vasal; atlas'ta vasal modeli `v:` ile).

## Önerilen düzeltmeler (KASA için)
1. data/devletler.js:26886-26917 `hazar` künyesini sil (yetim) veya `hazar-kaganligi`yi sil ve `hazar`ı tut — ikisinden biri; renkler.py BOYALAR tuz dosyası (Emre onayı).
2. data/devletler.js:14360 künye: `ic_not_f`a "TDV 630; c. 650 literatürde (Golden, okunmadı)" ve `ic_not_t`a "965 = hakan sığınması; İtil'in yıkımı 968-969 olabilir; Sarkel/Itil/Semender 965-969 (Britannica 1911)" ekle; baskent "Belencer → Semender → İtil".
3. Yeni Değişmez 2 maddeleri (c) 0630, 0732 (Mervân), 0965 (Svyatoslav) → data/olaylar_ortacag_bozkir.js.
4. Künye kroniği :14360+ 0833 Sarkel satırı: "istek 833; Britannica 834".
5. Yerleşim: Semender 0650(!)→0965 Hazar sahipliği için kaynak ara (TDV Hazarlar "Belencer/Semender"), kaynaklıysa s: ekle; Belencer yerleşimi yok → Dağıstan tanımını Semender/Derbend petekleriyle yaklaşıkla beyanlı.

## Erişilemeyen kaynaklar
- P. B. Golden, «The peoples of the south Russian steppes», Cambridge History of Early Inner Asia (1990), s. 256-284 — Soru: Hazar bağımsızlığı c. 650 mi 630 mu, kağanlığın kuruluş olayı hangisi?
- Encyclopaedia Iranica «Khazars» (iranicaonline.org/articles/khazars) — Soru: 737 Mervân seferi; Ibn Havkal 358 H (968-69) İtil'in yıkımı; Yahudileşme tarihi.
- D. M. Dunlop, The History of the Jewish Khazars (1954) — Soru: İtil'in yıkımı 965 mi 968-969 mu, Semender'in başkentliği hangi tarihte?
- Treccani «Cazari» (sayfa içeriği boş döndü, "çekilemedi") — Soru: 965/969, Semender→İtil.
- T. Noonan, «Byzantium and the Khazars» ya da Oxford Dictionary of Byzantium «Khazars» — Soru: Sarkel inşa yılı 833 mü 834 mü.
