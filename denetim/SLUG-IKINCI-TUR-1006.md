# SLUG-IKINCI-TUR-1006 — W30'un ÖLÇÜLEMEDİ alıntılarına ikinci tur (UMIT-W49)

Durum: **BİTTİ** (6 Ekim 2026). YALNIZ ÖLÇÜM: `data/`, `arac/`, `js/`e dokunulmadı, düzeltme yazılmadı.
Satır satır döküm: `denetim/SLUG-IKINCI-TUR-1006.tsv` (1.177 satır; her W30 ÖLÇÜLEMEDİ cümle satırı bir satır).

**Temel commit:** `ce885ec2` (origin/main; ayrık worktree `C:\atlas-w49`). W30 `a59e4b7b` üzerinde ölçmüştü. İkisi arasında
`git diff --stat a59e4b7b ce885ec2 -- data` **boş**, yani satır numaraları birebir aynı. Devir: `denetim/ALINTI-TARAMA-1006.{md,tsv}` (W30, cb26fc5a).

---

## 0. ÖNGÖRÜ — eşleştirmeden ÖNCE mühürlendi (09:22:13 +0300)

Evren sayımından **sonra**, hiçbir aday aranmadan, çekilmeden ve eşleştirilmeden **önce** yazıldı.

| | öngörü | ölçüm (satır) |
|---|---|---|
| ÇÖZÜLDÜ | ~%45 | **%48,8** (574) |
| ÇÖZÜLDÜ-YOK | ~%20 | **%4,8** (56) |
| ÖLÇÜLEMEDİ | ~%35 | **%46,5** (547) |
| 14 gerçek ölü slug'ın canlı karşılığı | ≥10 | **6 doğrudan + 1 kapsayıcı** (§3) — **öngörü TUTMADI** |

ÇÖZÜLDÜ öngörüye yakın çıktı. ÇÖZÜLDÜ-YOK ve ÖLÇÜLEMEDİ ise öngörüden ayrıldı, çünkü kovanın yapısını yanlış kurmuşum.
ÇÖZÜLDÜ-YOK için "hangi maddeye atfedildiği" bağlamdan okunabilmeli. Oysa 699 tekil alıntının yalnız 122'sinde bağlamda
(süzülmüş) slug ya da başlık ipucu var. Geri kalanların slug'ı ancak alıntı bir maddede birebir geçerse bulunuyor (ÇÖZÜLDÜ).
Geçmezse ÖLÇÜLEMEDİ'ye düşüyor. Ara kova pratikte yalnız ipuçlu alıntılardan doluyor.

## 1. EVREN

W30 TSV'sinde `kisa=0` (≥4 kelime) ve `kova=OLCULEMEDI` olan satırlar:

| W30 alt kova | satır | tekil alıntı | dosya |
|---|---|---|---|
| SLUG ÇÖZÜLEMEDİ | 1.130 | 670 | 159 |
| ÖLÜ SLUG (302) | 47 | 30 | 27 |
| **toplam** | **1.177** | **699** (tekilleştirilmiş) | |

Kısa parçalar (<4 kelime) W30'da da ayrı tutulmuştu. Burada da kapsam dışı.

## 2. SONUÇ — kovalar

| kova | satır | tekil alıntı | satır payı | öngörü |
|---|---|---|---|---|
| **COZULDU** | 574 | 398 | %48,8 | ~%45 |
| **COZULDU-YOK** | 56 | 37 | %4,8 | ~%20 |
| **OLCULEMEDI** | 547 | 264 | %46,5 | ~%35 |
| toplam | 1177 | 699 | | |

| kova · alt kova | satır | tekil |
|---|---|---|
| COZULDU · TAM-METIN | 454 | 323 |
| COZULDU · IPUCU-TUTTU | 100 | 61 |
| COZULDU · IPUCU-KAYDI | 13 | 8 |
| COZULDU · TAM-METIN-COK | 7 | 6 |
| COZULDU-YOK · YOK | 33 | 21 |
| COZULDU-YOK · YAKIN | 23 | 16 |
| OLCULEMEDI · ADAYLAR-TUKENDI | 340 | 137 |
| OLCULEMEDI · ARAMA-SONUCSUZ | 87 | 54 |
| OLCULEMEDI · ADAYLAR-KESIK | 55 | 37 |
| OLCULEMEDI · TDV-DISI-ATIF-ISARETLI | 32 | 18 |
| OLCULEMEDI · IPUCU-OLU | 25 | 13 |
| OLCULEMEDI · ANAHTAR-KELIME-YOK | 6 | 4 |
| OLCULEMEDI · BELIRSIZ-21-MADDEDE | 2 | 1 |

W30 alt kovasına göre (satır):

| W30 alt kova | satır | ÇÖZÜLDÜ | ÇÖZÜLDÜ-YOK | ÖLÇÜLEMEDİ |
|---|---|---|---|---|
| OLCULEMEDI-SLUG-COZULEMEDI | 1130 | 565 | 40 | 525 |
| OLCULEMEDI-OLU-302 | 47 | 9 | 16 | 22 |

**Alt kovaların anlamı:**
- **ÇÖZÜLDÜ · TAM-METİN**: bağlamda ipucu yok. Alıntı bir TDV maddesinin TAM gövdesinde birebir geçiyor ve slug böyle bulundu (W30 normalleştirmesi aynen kullanıldı).
- **ÇÖZÜLDÜ · İPUCU-TUTTU**: bağlamdaki slug ya da başlık (`gazan-han (TDV:`, «Arnavutluk» maddesi, `TDV OSMAN I maddesi`) çözüldü ve alıntı o maddede birebir geçiyor.
- **ÇÖZÜLDÜ · İPUCU-KAYDI**: bağlamdaki madde başka, alıntı başka bir maddede birebir geçiyor. Bu W30'un "slug kayması" sınıfı (§4).
- **ÇÖZÜLDÜ · TAM-METİN-ÇOK**: alıntı 2-4 maddede birebir geçiyor. TSV'de hepsi `birebir_maddeler` sütununda.
- **ÇÖZÜLDÜ-YOK**: madde bağlamdan kesin belli, gövdesi TAM, ama alıntı gövdede yok. **YAKIN** ≥0,85, **YOK** <0,85 (W30 eşiği).
- **ÖLÇÜLEMEDİ**: slug bulunamadı. Alt sebepler §5'te.

ÖLÇÜLEMEDİ satırlarının en yoğun dosyaları: `devletler.js` 58 · `paket_05.js` 58 · `paket_13.js` 58 · `yer_yama_misir_himaye.js` 55 · `yerlesimler_afrika.js` 44 · `kademe_4ff22b.js` 19 · `ekokuma_padisah.js` 16 · `yerlesimler.js` 13 · `gecitler.js` 12 · `ekokuma_dunya.js` 9 · `paket_12.js` 8 · `ekokuma_antlasma4.js` 7

ÇÖZÜLDÜ satırlarının en yoğun dosyaları: `devletler.js` 66 · `paket_05.js` 66 · `kademe_4ff22b.js` 40 · `gecitler.js` 28 · `ekokuma_alemdar.js` 18 · `ekokuma_p76i.js` 16 · `ekokuma_yeniceri.js` 15 · `paket_12.js` 14 · `paket_02.js` 12 · `paket_11.js` 11 · `ekokuma_padisah.js` 10 · `olaylar_ek13.js` 10

ÇÖZÜLDÜ satırlarına bağlanan tekil madde: **245** · en sık: `altin-orda-hanligi` 17 · `gurcistan` 16 · `bahreyn` 15 · `erdel` 12 · `alemdar-mustafa-pasa` 10 · `karahanlilar` 7 · `horasan` 7 · `misir` 6 · `prusya` 6 · `amerika` 6 · `ziriler` 6 · `vaka-i-hayriyye` 6 · `ayan` 5 · `kavalali-mehmed-ali-pasa` 5 · `prut-antlasmasi` 5

## 3. 14 GERÇEK ÖLÜ SLUG — başlık aramasıyla canlı karşılık

Başlık araması (`arama/?q=…&p=m`) bulanıktır: içerik eşleşmelerini de "Madde Başlıkları" altında döndürüyor
(`palu` → `el-ahrufus-seba`). Bu yüzden karşılık yalnız başlık **eşitliğiyle** kabul edildi. Her karşılığın gövdesi bugün canlı çekildi.

| ölü slug | canlı karşılık | nasıl | bu evrendeki satır | alıntı karşılıkta birebir mi |
|---|---|---|---|---|
| `inebahti-savasi` | **`inebahti-deniz-savasi`** (İNEBAHTI DENİZ SAVAŞI) | başlık eşit | 2 | hayır (`inebahti` de hayır) → ÇÖZÜLDÜ-YOK |
| `sur` | **`sur--lubnan`** (SÛR, Lübnan). Eş adlılar `sur--kale` · `sur--kiyamet` · `sur-i-humayun` | başlık + bağlam (1516 Mercidâbık) | 2 | **evet** |
| `kavalali` | **`kavalali-mehmed-ali-pasa`** · ayrıca `mehmed-ali-pasa-kavalali` · `ibrahim-pasa-kavalali` | başlık | 1 | **evet** |
| `tiphane-i-amire` | **`tibhane-i-amire`** (TIBHÂNE-i ÂMİRE; yazım b ile) | başlık | 0 (yalnız kısa satırda) | — |
| `tdv-malatya` | **`malatya`** (önek artığı) | başlık | 1 | hayır → ÇÖZÜLDÜ-YOK |
| `sih-imparatorlugu` | **`sih-dini`** (kapsayıcı; imparatorluk başlığı YOK) | başlık | 2 | hayır. Alıntılar `amritsar`a bağlandı, orada da yok (YAKIN 0,852 / YOK 0,807) |
| `aynalikavak-tenkihnamesi` | başlık **YOK** (`aynalikavak-sarayi` var, alıntı orada yok) | tam metin | 1 | **evet, `abdulhamid-i`de** |
| `palu` | başlık **YOK** (`palu` canlıda da 302; arama sonuçları içerik eşleşmesi) | — | 4 | ÖLÇÜLEMEDİ. Bağlamın kendisi M. A. Ünal'a gidiyor |
| `agadez-sultanligi` | başlık **YOK** (`agadez` de 302). Kapsayıcı aday `nijer` | — | 3 | `nijer`de yok → ÖLÇÜLEMEDİ |
| `kuayti-sultanligi` | başlık **YOK** (`kuaytiler` 302). Kapsayıcı `hadramut` | — | 3 | `hadramut`ta yok → ÇÖZÜLDÜ-YOK (0,556) |
| `yogyakarta` | başlık **YOK**. Kapsayıcı `cava` · `endonezya` | — | 1 | alıntı İngilizce kitap adı (Carey) → ÖLÇÜLEMEDİ |
| `kamba` | başlık **YOK** (`kanbay`/`kamba` aramaları eşleşmesiz) | — | 0 (yalnız kısa satırda) | — |
| `kale-cifti` | başlık **YOK** (terim, madde değil) | — | 1 | ÖLÇÜLEMEDİ |
| `feribot` | başlık **YOK** (terim, madde değil) | — | 1 | `isakca` ipucuyla ÇÖZÜLDÜ-YOK (alıntı soru cümlesi: "bu bir geçit mi liman mı") |

⇒ **14 ölü slug'ın 6'sının doğrudan canlı karşılığı var** (`inebahti-deniz-savasi`, `sur--lubnan`, `kavalali-mehmed-ali-pasa`,
`tibhane-i-amire`, `malatya`, kapsayıcı `sih-dini`). **1'inin alıntısı başka maddede bulundu** (`abdulhamid-i`).
**7'sinin TDV'de başlığı yok:** palu, agadez, kuayti, yogyakarta, kamba, kale-cifti, feribot. `bulunamadı`.
W30'un "ayrıştırma artığı" saydığı ölü slug'lardan bazılarının da karşılığı var ve karara ipucu olarak girdi:
`zistovi`→`zistovi-antlasmasi`, `iv-mehmed`→`mehmed-iv`, `ibrahim-`→`ibrahim--padisah`, `hezarpare`→`hezarpare-ahmed-pasa`,
`moltke`→`moltke-helmuth-von`, `mahmud-i`→`mahmud-i--osmanli`.
Ayrıca `cildir-savasi` slug'ı canlıda 302. Bir bağlam ipucunda geçiyordu.

## 4. İPUCU-KAYDI — bağlamın gösterdiği madde ile alıntının bulunduğu madde farklı

| W30 ipucusu (bağlamdaki slug/başlık) | alıntının birebir geçtiği madde | alıntı |
|---|---|---|
| `mustencid-billah` | `mezyediler` | Selçuklu ve Abbâsî hâkimiyeti altında (devletler.js:9751 · paket_05.js:9770) |
| `endulus` | `abdurrahman-iii` | 929 yılında ... ilk defa “halife” ve “emîrü’l-mü’minîn” unvanını almıştır (devletler.js:10071 · paket_05.js:10090) |
| `endulus` | `abdurrahman-i` | bu zafer ona Kurtuba’nın kapılarını açtı. Böylece Endülüs Emevî Devleti’nin temelleri atılmış oldu (devletler.js:10071 · paket_05.js:10090) |
| `sekban-i-cedid` | `alemdar-mustafa-pasa` | Elinde âsilere karşı kullanılabilecek yeterli kuvveti bulunmayan saray, şaşkınlık ve tereddütlerin kaybolmasın (ekokuma_alemdar.js:95) |
| `fransa` | `selim-iii` | Osmanlı Devleti'ni Rusya'nın da içinde bulunduğu bir ittifaka dahil olarak Fransa ile karşı karşıya getirdi (ekokuma_deniz.js:56) |
| `hotin` | `bogdan` | hür bir ülke olduğunu, kılıçla değil kendi rızası ile Osmanlı Devleti'ne tâbi olduğunu (ekokuma_karadeniz.js:117) |
| `lubnan` | `durzilik` | 1860 yılına kadar kendilerini müslüman göstermiş (ekokuma_p76i.js:50 · ekokuma_p76i.js:53) |
| `tiflis` | `gurcistan` | 1632'de Tiflis vilâyeti olarak tekrar Osmanlı idaresiyle birleştirilmiş ve ihtida etmiş olan Rostom buraya val (kronoloji_gurcistan.js:199 · paket_12.js:5807) |

Bunlar sahte alıntı değil, yanlış madde adı. Düzeltme `kaynak:` metnindeki madde adını değiştirmektir. Karar koordinatörde.

## 5. ÇÖZÜLDÜ-YOK — adıyla (tekil alıntı, benzerliğe göre)

| konum(lar) | madde | alt | benzerlik | alıntı | en yakın gövde parçası |
|---|---|---|---|---|---|
| ekokuma_ibrahim.js:86 | `ibrahim--padisah` | YAKIN | 0.99 | daha kuvvetli olduğu tahmin edilen bir diğer rivayet | daha kuvvetli oldugu tahmin edilen bir diger rivayete |
| kronoloji_orta_asya.js:121 · paket_12.js:10939 | `kazan-hanligi` | YAKIN | 0.984 | Kazan kuvvetleriyle Moskova ordusu arasında Suzdal şehri civarında vuku bulan meydan savaşı | kazan kuvvetleriyle moskova ordusu arasinda suzdal sehri civarinda vuku bulan meydan savasinda |
| merak.js:281 | `ankara-savasi` | YAKIN | 0.984 | bütün Anadolu Timur'a mensub emîrler tarafından istilâ edildi | butun anadolu timur a mensup emirler tarafindan istila edildi |
| ekokuma_padisah.js:79 | `culus` | YAKIN | 0.983 | Allah'ın yardımıyla ve kabiliyeti sayesinde sultan olduğu | allah in yardimiyla ve kabiliyeti sayesinde sultan oldugunu |
| paket_14.js:6678 · yerlesimler_ek29.js:655 | `zistovi-antlasmasi` | YAKIN | 0.974 | Bosna'nın Unna suyu arkasında yer alan Hırvatlık arazisi | bosna nin unna suyu arkasinda yer alan hirvatlik arazisinin |
| ekokuma_karadeniz.js:128 | `bogdan` | YAKIN | 0.971 | Bulgaristan ve Macaristan gibi bir Osmanlı paşası tarafından idare edilen bir eyalet haline getirmedi. | bulgaristan ve macaristan gibi bir osmanli pasasi tarafindan idare edilen bir eyalet haline getirmemistir |
| devletler.js:6876 · paket_05.js:6895 | `borneo` | YAKIN | 0.967 | 1772'de Şerif Abdurrahman adındaki Hadramutlu bir Arap seyyah Pontianak Sultanlığı'nı kurdu. | de de serif abdurrahman adindaki hadramutlu bir arap seyyah pontianak sultanligi ni kurdu |
| ekokuma_p76i.js:86 | `bosna-hersek` | YAKIN | 0.949 | siyasî bir özellik de kazandı | siyasi bir ozellik de kazanmis |
| ekokuma_bolge0073.js:112 | `yeniceri` | YAKIN | 0.944 | yeniçeri ordusunun askerî bir değeri kalmadığını gözler önüne serdiğini | yeniceri ordusunun askeri bir degeri kalmadigini gozler onune sermistir |
| olaylar_ek7.js:105 · paket_01.js:3132 | `damad-ibrahim-pasa-nevsehirli` | YAKIN | 0.94 | içtimaî ve mali meselelerle uğraşmak istiyor, uzun yıllardır yenilgiyle biten savaşları unutturacak bir barış dönemini ö | daha cok ictimai ve mali meselelerle ugrasmak istiyor uzun yillardan beri yenilgiyle biten savaslari unutturac |
| paket_13.js:1386 · yerlesimler.js:1381 | `hotin` | YAKIN | 0.94 | son olarak 1806'da Rusların işgaline uğradı | olarak 1806 da ruslar in isgaline ugradi |
| ekokuma_p77c.js:67 | `tehcir` | YAKIN | 0.936 | tek taraflı mâsumiyet iddiaları ve sayıların abartısı | tek tarafli masumiyet iddialari ve sayisalligin abartisi |
| kronoloji_gurcistan.js:157 · paket_12.js:5765 | `ahiska` | YAKIN | 0.931 | Ahıska atabegleri, Lala Mustafa Paşa'nın Çıldır Savaşı sonunda Osmanlı idaresine girdiler | atabegleri lala mustafa pasa nin cildir savasi 1578 sonunda osmanli idaresine girdiler |
| yer_yama_1923_bosluk_0906.js:15 | `tinbuktu` | YAKIN | 0.93 | 1860'li yillarda ucuncu Tekrur Devleti'nin kurucusu el-Hac Omer'in oglu Ahmed el-Kebir el-Medeni'nin egemenligine gecti | 1860 li yillarda ucuncu tekrur devleti nin kurucusu el hac omer in oglu ahmed el kebir el medeni nin ahmed tal |
| devletler.js:660 · paket_05.js:679 | `marasiler` | YAKIN | 0.927 | Şah I. Abbas zamanında (1587-1629) çeşitli yerlere dağıtıldılar | sah i abbas zamaninda 1587 1629 cesitli yerlere dagitilmasindan |
| kademe_f5c9a5.js:270 | `amritsar` | YAKIN | 0.852 | başşehri [X]; Amritsar dahil | bassehri amritsar dahil butun |
| olaylar_ek5.js:31 · paket_01.js:2239 | `osman-i` | YOK | 0.821 | Leblebüci Hisarı'na geldiğinde tekfur itaat etti... Lefke'ye vardı... Mekece'ye ulaştı... Geyve'ye gidip boş bulduğu his | bey leblebuci hisari na kabakluca koubouklia geldiginde tekfur itaat etti … lefke ye kestirme … ye kabakia gid |
| kronoloji_gurcistan.js:205 · paket_12.js:5813 | `ahiska` | YOK | 0.82 | 1635'te Osmanlılar tarafından Safevîlerden geri alındı | 1635 te osmanlilar tarafindan geri alindi 1828 |
| kademe_f5c9a5.js:270 | `amritsar` | YOK | 0.807 | başşehri olan Amritsar dahil | bassehri amritsar dahil butun |
| ekokuma_p77c.js:176 | `cebelu` | YOK | 0.78 | zırhlı, tam teçhizatlı asker | zirhli techizatli asker demektir |
| devletler.js:7799 · paket_05.js:7818 | `harfus` | YOK | 0.765 | Canbirdi'nin isyanı esnasında Ba'lebek'e yerleştiler | canbirdi nin isyani esnasinda harfusogullari ba lebek bolgesine |
| kronoloji_misir.js:229 · paket_11.js:1808 | `pamuk` | YOK | 0.744 | Osmanlı pamuk piyasasını canlandırdığını | osmanli pamuklu pazarinin canlanmasina |
| kronoloji_gurcistan.js:229 · paket_12.js:5837 | `tiflis` | YOK | 0.723 | Osmanlılar 23-24 Haziran 1723'te şehre girdi | 23 24 haziran 1723 te tiflis e girdiler |
| olaylar_ek7.js:114 · paket_01.js:3141 | `mahmud-i--osmanli` | YOK | 0.667 | devlet işlerini kendi eline al, kimseye güvenme | devlet idaresini bizzat eline almasi ve kimseye |
| kaynakli_halka_kronoloji.js:56 | `malatya` | YOK | 0.603 | Malatya'nın Memlükler tarafından fethi | malatya nin merkezinde yenicami nin |
| paket_13.js:1242 · yer_yama_1923_bosluk_0906.js:17 · yerlesimler.js:1237 | `hadramut` | YOK | 0.556 | Kuayti Sultanligi (Sihr-Mukella, Hadramut kiyisi) | 1881 sonunda sihr ve mukella dahil butun hadramut sahilini ele |
| paket_26.js:1871 · seferler_sefer_ok_0075.js:55 | `ibrahim-pasa-kavalali` | YOK | 0.527 | İbrâhim Paşa'nın ordusu Sînâ üzerinden Mısır'a döndü | ibrahim pasa nin bolgeyi misir a baglayacak buyuk planlari |
| kronoloji_ispanya.js:346 · paket_09.js:2946 | `inebahti-deniz-savasi` | YOK | 0.514 | 1571 yılının 7 Ekim günü İnebahtı körfezinde... Osmanlı donanması ile müttefik Hıristiyan filoları arasında gerçekleşen  | ekim 1571 inebahti korfezinde karsi … savasi xv yuzyildan beri hiristiyan avrupa da var |
| ekokuma_p75b.js:66 | `moltke-helmuth-von` | YOK | 0.49 | ayrı yürü, birleşip vur | birlesip dusmani vurmasi ve |
| gecitler.js:214 | `isakca` | YOK | 0.456 | bu bir geçit mi liman mı | bir gecit noktasi olarak onemini korudu bulgarlar in ix |
| ekokuma_ekonomi.js:119 | `duyun-i-umumiyye` | YOK | 0.449 | borçların devletler arası değil, şahıslardan alınan borçlar | borclar balkan harbi nden sonra |
| kronoloji_gurcistan.js:223 · paket_12.js:5831 | `tiflis` | YOK | 0.431 | ihtida etmiş olan Rostom... 1711 yılına kadar | 35 000 ogrencisi olan bir universite teknik … abbas in istilasina kadar 60 000 |
| ekokuma_dunya.js:546 | `zelzele` | YOK | 0.396 | rakam gövdede geçiyor ≠ doğru olaya ait | bulunur depremin yerini dogru belirlemek icin en az uc |
| ekokuma_bolge0073.js:87 | `sudan` | YOK | 0.37 | asker mi, altın mı, ticaret yolu mu? | mehmed ali pasa altin ve zumrut yataklarina sahip olmak nil |
| ekokuma_rivayet.js:113 | `safeviler` | YOK | 0.352 | kalıcı tasarruf'un aynı şey olmadığını gösteren en çarpıcı örneklerden biridir (bkz. 'atlas seferi değil tasarrufu boyar | mimari eserlerin en goze carpici yerlerinde binalarin ihtisam ve tesirini arttirici elemanlar olarak sik sik k |
| ekokuma_ibrahim.js:174 | `ibrahim--padisah` | YOK | 0.333 | kafese konup kafeste katledilmesi | hayir eseri meydana getirmemistir |
| kronoloji_memluk.js:56 · paket_07.js:61 | `hisbe` | YOK | 0.323 | Legal Diversity in the Age of Taqlid: the Four Chief Qadis Under the Mamluks | halife kaim biemrillah in murabitlar dan yusuf b tasfin in magrib ve endulus hukumdarligini tasdik icin yazdig |

⚠️ **ÇÖZÜLDÜ-YOK ≠ sahte alıntı.** Bu kovadaki tırnakların bir kısmı TDV'ye atfedilmiş cümle değil. Bağlamda TDV maddesi
anılıyor, ama tırnaktaki ifade bizim kendi sorumuz ya da terimimiz ("asker mi, altın mı, ticaret yolu mu?", "bu bir geçit mi liman mı",
"rakam gövdede geçiyor ≠ doğru olaya ait"). YAKIN satırları (16 tekil) gerçek TDV cümlesinin ekini ya da kelimesini değiştirerek
aktarılmış hâlidir (`yenilgiyle biten savaşları` · `sayısallığın → sayıların`). W30'un YAKIN sınıfıyla aynı tip.

## 6. ÖLÇÜLEMEDİ — sebepler ve sınırları

| alt sebep | satır | tekil | anlamı |
|---|---|---|---|
| ADAYLAR-TÜKENDİ | 340 | 137 | anahtar kelimelerle yapılan VE-sorgusunun **bütün** sonuçları (≤30, tüm sayfalar) çekildi, hiçbirinde alıntı birebir yok |
| ARAMA-SONUÇSUZ | 87 | 54 | 5/4/3/2 anahtar kelimeyle tam metin araması 0 sonuç verdi |
| ADAYLAR-KESİK | 55 | 37 | sonuç >30. Yalnız alfabetik ilk sayfalar görüldü, hüküm yok |
| TDV-DIŞI-ATIF-İŞARETLİ | 32 | 18 | bağlam başka kaynağı adıyla anıyor (Iranica, Nationaal Archief, Cambridge, "TDV'den DEĞİL" …) |
| İPUCU-ÖLÜ | 25 | 13 | bağlamdaki tek ipucu ölü slug ya da ayrıştırma artığı (`yaklasik-1166`, `okununca`, `orduda-bulunan-froissart` …) ve tam metin de bulmadı |
| ANAHTAR-KELİME-YOK | 6 | 4 | aranabilir kelime yok (sayı/kısa kelime) |
| BELİRSİZ-21-MADDEDE | 2 | 1 | "XVIII. yüzyılın ilk yarısında": 21 maddede birebir, atıf belirlenemez |

🔴 **TÜKENDİ yokluğun kanıtı DEĞİLDİR. Kaçırma oranı ölçüldü.** Pozitif kontrol: ÇÖZÜLDÜ · TAM-METİN birimlerinden rastgele 60'ı
(tohum 49) aynı aramadan geçirildi. Tam sonuç kümesi alınabilen 50'nin **42'sinde** doğru madde kümedeydi, **8'inde yoktu**.
TDV tam metin araması, alıntıyı birebir taşıyan maddeyi **~%16** oranında döndürmüyor.
⇒ TÜKENDİ = "TDV arama motoru bulamadı". Bu birimlerin ~%84'ü için alıntının TDV'de birebir bulunmadığı **muhtemel**,
ama tek tek **kanıtlanmış değil**. Bu yüzden ÇÖZÜLDÜ-YOK'a değil ÖLÇÜLEMEDİ'ye konuldu: slug'ı bilinmeyen alıntıya "yok" denmez.

**TDV aramasının bugünkü davranışı (30 Eylül değişikliği; ölçüldü, Eylül notlarına dayanılmadı):**
- `p=t` = **Madde İçerikleri** (tam metin). `p=m` başlık, `p=y` müellif, `p=b` kısaltma.
- Kelimeler **VE** ile bağlanıyor. Tırnaklı ifade araması **çalışmıyor** (`"Bamako'nun işgali önlenemedi"` → 0; `Bamako işgali` → 6, `samori-ture` içinde).
- **Sayfa başı 10 sonuç, ALFABETİK sıra** (alaka sırası yok), sayfalama `&page=N`. İlk turdaki "ilk 6 aday" bu yüzden kör örneklemdi.
  2. ve 3. geçişte düzeltildi: daralt, ≤30 ise bütün sayfaları al.
- Şapka ve Türkçe harf duyarsız (`Misir istiklal Ingiltere` = `Mısır istiklâl İngiltere`, ikisi de 83 sonuç).
  Ama **büyük harfli ASCII** (`IDARESINI`) ve **tireyle yapıştırılmış** (`EflakBoğdan`) kelime eşleşmiyor.
  İlk seçicimin kusuruydu. Pozitif kontrolün ilk hâlinde 53'te 13 kaçırma buradan geldi. 4. geçişte düzeltildi (`anahtar2`).

## 7. YÖNTEM

1. **İpucu**: her satırın kaynak satırı `C:\atlas-w49\data\<dosya>:<satir>`dan okundu. Tırnaktan önceki son 400 karakterde
   slug kalıpları (`x (TDV`, `` `x` `` + TDV), başlık kalıpları (`«X» maddesi`, `TDV'nin X maddesi`, `TDV X:`) ve dış kaynak işaretleri arandı.
   Başlık ipucu `p=m` aramasında **normalleştirilmiş başlık eşitliğiyle** kabul edildi. Genel kelimeler dışlandı:
   "TDV aynı maddede" ilk koşuda `ayni-bedreddin`e bağlanmıştı, düzeltildi. Çıplak kelime ipucu canlı madde değilse ipucu sayılmadı.
2. **Çevrimdışı**: her alıntı W30'un bugün (01:xx) aynı çıkarıcıyla çektiği 860 TAM gövdede ve bu turun 612 yeni TAM gövdesinde
   birebir arandı. Birebir = W30 `esle.py` ile aynı ölçüt (`ARAC-NORMAL-0903.norm`, harf-rakam dışı → boşluk, `…`/` · ` parça sınırı).
3. **Ağ**: ipucu maddeleri ve tam metin adayları `ARAC-TDV-CIKARICI-1006.tam` ile **bugün canlı** çekildi, W30 sınıflamasıyla
   (302 · arama sayfası · boş · kesik · gönderme → hedef · TAM). Dört geçiş yapıldı: 3/2 kelime ilk 6 aday → 5/4 kelime ≤10 →
   8/7/6 kelime ≤30 tüm sayfalar → düzeltilmiş seçiciyle 5/4/3 kelime ≤30 tüm sayfalar.
   **İstekler arası 1,5 sn beklendi. Her yol bir kez çekildi** (md5 önbellek, `scratchpad/w49/ham`). Yaklaşık 1.800 istek atıldı.
   **W30'un önbelleğine (`…/w30/tdv-ham`, 6 yönlendirmeli birincil kayıt dahil) YAZILMADI**, yalnız `govdeler.json` okundu.
4. **Karar**: birebir varsa ÇÖZÜLDÜ. İpucu maddesi birebir tutuyorsa o seçildi, 5+ maddede birebir ise BELİRSİZ.
   Birebir yok ama ipucu maddesi TAM ise ÇÖZÜLDÜ-YOK (W30 benzerlik algoritması). Kalanı ÖLÇÜLEMEDİ.

**Yaptığım ve düzelttiğim hatalar (kayıt için):** ① ilk turda tam metin sonuçlarının alfabetik olduğunu bilmeden "ilk 6"yı alaka
sırası sandım ② başlık ipucunda içerme kabul ettim ("iki" → `on-iki-imam`, "OSMAN I" → `osman-ii`) ③ anahtar seçici tireli ve
büyük harfli ASCII kelimeyi bozdu. Üçü de pozitif kontrol ya da örneklem okumasıyla yakalandı ve son sayılar düzeltilmiş hâldedir.

## 8. ÖNERİ (karar koordinatörde)

- **ÇÖZÜLDÜ satırlarında** (574) `kaynak:` metnine slug eklenebilir. Bu, W30'un 1.130'luk SLUG ÇÖZÜLEMEDİ kovasının yarısını
  ölçülebilir kılar. TSV'nin `slug` sütunu hazır öneri listesidir. `TAM-METİN-ÇOK` satırlarında seçim elle yapılmalı.
- **İPUCU-KAYDI** (8 tekil) ve **ÖLÜ→KARŞILIK** (§3) doğrudan düzeltme adayıdır.
- **ÇÖZÜLDÜ-YOK · YAKIN** (16 tekil): tırnak içinde değiştirilmiş TDV cümlesi. Ya birebire çevrilmeli ya tırnak kaldırılmalı.
- **ADAYLAR-TÜKENDİ** (137 tekil): ~%84 olasılıkla TDV'de birebir yok. Kanıtlamak için tek tek okuma gerekir. Toplu hüküm VERİLMEMELİ.
- `tahta`/bekçi kullanılmadı (görev gereği). Commit yapılmadı. Dosyalar `C:\atlas-umit\denetim\` altında, izlenmeyen.
