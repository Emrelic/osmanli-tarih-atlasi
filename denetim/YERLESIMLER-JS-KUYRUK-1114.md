# YERLESIMLER-JS-KUYRUK-1114

Bu dosya data/yerlesimler.js icin bekleyen duzeltmeleri toplar (yerlesimler.js "yayin bayat" duvari yuzunden bu dalda yazilmaz). Asagida TAKVIM bolumu umit-1113-takvim2 dalindan eklenmistir; baska bolum eklenmisse dokunulmaz.

## TAKVIM (TAKVIM-PARTISI-1114, Julyen -> Gregoryen)

Kural: CLAUDE.md "Julyen/Gregoryen siniri". Ana kronoloji maddeleri bu dalda tasindi (11-13 gun < +-30 gun, Degismez 2 bozulmaz); asagidaki yerlesim kirilmalari kaynagi ayni Julyen gun oldugundan AYNI gune tasinmalidir. Bicim: yerlesim | mevcut gun | yeni gun | madde | kaynak.

Not: devletler.js septinsular kunyesi (f:"1800-03-21" ve ic olay t:"1800-03-21") ayni gun tasinmali; yerlesimler.js ile BIRLIKTE uygulanmali, yoksa yerlesimin septinsular donemi kunye f'sinden once baslar (kunye asimi).

| yerlesim | mevcut gun | yeni gun | madde | kaynak |
|---|---|---|---|---|
| Çuha Adası (Kythira) s/kd: fransa-cumhuriyet t | 1800-03-21 | 1800-04-02 | Yedi Ada Cumhuriyeti kuruldu (olaylar_ek17) | Noradounghian II n.11 "21 mars 1800 (8 Zilkade 1214)" Julyen; hakemli karar: olaylar_ek17 ic_not_gun |
| Çuha Adası (Kythira) s: septinsular f | 1800-03-21 | 1800-04-02 | aynı | aynı |
| Korfu s: fransa-cumhuriyet t | 1800-03-21 | 1800-04-02 | aynı | aynı |
| Korfu s: septinsular f | 1800-03-21 | 1800-04-02 | aynı | aynı |
| Ayamavra (Lefkada) s: fransa-cumhuriyet t | 1800-03-21 | 1800-04-02 | aynı | aynı |
| Ayamavra (Lefkada) s: septinsular f | 1800-03-21 | 1800-04-02 | aynı | aynı |
| Kefalonya s: fransa-cumhuriyet t | 1800-03-21 | 1800-04-02 | aynı | aynı |
| Kefalonya s: septinsular f | 1800-03-21 | 1800-04-02 | aynı | aynı |
| İthaki s: fransa-cumhuriyet t | 1800-03-21 | 1800-04-02 | aynı | aynı |
| İthaki s: septinsular f | 1800-03-21 | 1800-04-02 | aynı | aynı |
| Zaklise (Zakynthos) s: fransa-cumhuriyet t | 1800-03-21 | 1800-04-02 | aynı | aynı |
| Zaklise (Zakynthos) s: septinsular f | 1800-03-21 | 1800-04-02 | aynı | aynı |
| (devletler.js septinsular künye) f | 1800-03-21 | 1800-04-02 | aynı | aynı (yerlesimler.js ile birlikte) |
| (devletler.js septinsular iç olay) t | 1800-03-21 | 1800-04-02 | aynı | aynı (yerlesimler.js ile birlikte) |

Paksos kaydi (yerlesimler_ek_adalar.js) bu dalda tasindi.

| yerlesim | mevcut gun | yeni gun | madde | kaynak |
|---|---|---|---|---|
| Novgorod (yerlesimler.js satir 1289) s: rusya f ({f:"1617-02-27",t:"1917-03-15",d:"rusya"}; onceki isvec parcasinin t'si de ayni gun) | 1617-02-27 | 1617-03-09 | Stolbova/Stolbovo Antlasmasi (olaylar_ek16 x2, kronoloji_isvec) | prlib.ru/history/619081 "27 февраля (9 марта) 1617 г." (Julyen 27 Subat = 9 Mart G); Yam, Koporye (yerlesimler_ek29.js) ve Oresek (yerlesimler_h2_rusya.js) bu dalda tasindi |

Not: yer_yama_1923_1945.js (KARANTINA, aktive edilmiyor) icindeki Oresek 1617-02-27 kirilmasina dokunulmadi.

### TAKVIM parti 3: YUN-153B Bozcaada/Imroz 1913-11-01 (HAZIRLIK, UYGULANMADI)

Durum: UYGULAMA YOK. Liste uygulama oturumu icindir; yerlesimler.js satirlari "yayin bayat" duvari yuzunden bu dalda yazilmaz.

**Kaynak (okundu):** FRUS 1913 (Papers Relating to the Foreign Relations of the United States, 1913), Turkey, chapter 109 "Treaty of peace between Turkey and Greece, Athens, November 14, 1913", belge 1658 (File 767.70/430), Athens maslahatguzari De Billier -> Dışişleri Bakani, 14 Kasim 1913: "Turkish-Greek treaty signed today." (https://history.state.gov/historicaldocuments/frus1913/d1658; sayfa numarasi web surumunde yok). Belge Gregoryen gunu verir; antlasmanin cift tarihi 1/14 Kasim 1913 (J/G) arama sonucunda Lozan metni atfiyla goruldu (ikincil, okunmadi). TDV balkan-savasi da Atina'yi 14 Kasim 1913 verir (atlasin ekokuma_antlasma4 kaynak alanindan).

**ONEMLI RESERV (uygulama oturumu karar vermeli):** FRUS belgesi Atina ANTLASMASININ imza gununu (14 Kasim 1913 G) dogrular; Bozcaada/Imroz'un fiilen Osmanli'ya donusunu dogrulamaz. Atlasin kendi data/ekokuma_antlasma4.js:996 ic_not'u TDV balkan-savasi'nin adalari 16 Aralik 1913 buyuk devletler kararina bagladigini, TDV imroz'un "Londra Konferansi" dedigini yazar (celiski beyanli). Ana maddenin gun alani "Kasim 1913" (ay hassasiyeti): t:"1913-11-01" Julyen 1 Kasim degil, ayin 1'ine genisletilmis ay olabilir; 1 Kasim J = 14 Kasim G tesadufu mumkun. Yani kokte Julyen/Gregoryen degil, olaya Atina gununun mu yoksa 16 Aralik 1913 kararinin mi dayanak olacagi sorusu var. yer_yama_egeadalari.js:175-185 de "TDV Bozcaada 20 Eylul 1923'te kurtarildi" celiskisini acik birakmis.

**Mevcut atlas gunu:** 1913-11-01. **Yeni gun (yalniz Atina imza gunu esas alinirsa):** 1913-11-14 (G). 16 Aralik karari esas alinirsa 1913-12-16 (hakemli ucuncu kaynak okunmadi).

**Bagimlilik listesi (dosya:satir; bu dal tabaninda sayildi, uygulamada yeniden say):**
- data/olaylar_ek5.js:590 ana madde (t, gun "Kasim 1913", ic_not_gun eklenecek)
- data/yerlesimler.js:690 Bozcaada: s yunanistan t "1913-11-01" (f 1912-10-07) + d:[{f:"1913-11-01",t:"1920-04-23"}] = 2 uc
- data/yerlesimler.js:691 Imroz: s yunanistan t "1913-11-01" (f 1912-11-01) + d:[{f:"1913-11-01",t:"1920-04-23"}] = 2 uc
- data/yer_yama.js:94 (yer_id Bozcaada, t "1913-11-01")
- data/yer_yama_tbmm_1920_0905.js:3445, 3462 (Bozcaada f/t) ve 3480, 3492 (Imroz f/t): 4 uc
- data/yer_yama_1923_1945.js:6821 (Bozcaada), 6823 (Imroz): KARANTINA dosyasi, aktif degil, dokunulmaz
- data/yer_yama_egeadalari.js:175-185 ve data/yer_yama_yunananakara.js:319-325: yalniz yorum satirlari
- data/ekokuma_antlasma4.js:994 olay:["1913-11-14|Atina","1913-11-01|Bozcaada"] (+ ic_not 996 metni); data/ekokuma_p76c.js:164 olay:["1913-11-01|Bozcaada"]
- data/bolge_pencere.js:4 (ham "1913-11-01" gecisi): URETILMIS, elle dokunma, kosudan sonra yenilenir
- URETILMIS, elle dokunma: data/donemler_ust.js ([1913-09-29,1913-11-01,183],[1913-11-01,1915-09-06,184]), data/devlet_harita_ust.js, data/ufuk_bantlari_ust.js, paket_*.js
- Ceviri anahtari "OLAYLAR_EK5:1913-11-01:0" (6 dosya): ceviri_ar_olay_04.js:293, ceviri_de_olay_03.js:641, ceviri_en_olay_03.js:523, ceviri_es_olay_03.js:633, ceviri_pt_olay_03.js:114, ceviri_ru_olay_03.js:144. Yeni anahtar "OLAYLAR_EK5:1913-11-14:1": ayni dizide t 1913-11-14 olan Atina Antlasmasi (olaylar_ek5.js:456) zaten :0 tasiyor (orn. ceviri_en_olay_03.js:524). idx dizi sirasina baglidir.
- olay_taraf.js: "1913-11-01|..." anahtari YOK (0).
- Kronoloji tarafi: kronoloji_balkan.js:1008 Atina Antlasmasi t "1913-11-14" ZATEN var.

**yerlesimler.js kirilma gunu 11-14 mi 11-01 mi (yalniz okundu):** Bozcaada ve Imroz kirilmalari bugun 1913-11-01 (yerlesimler.js 4 uc + yamalar). 11-14'e tasinirsa 13 gun uzar. Degismez 2 acisindan 11-01 de kronoloji_balkan 11-14 maddesinin +-30 gunundedir (ihlal yok, hicbir yonde). Tavsiye: yerlesimler.js kirilmasi 11-14'e ancak "adalarin donusu Atina Antlasmasiyla oldu" iddiasi kaynakla dogrulanirsa tasinir; TDV 16 Aralik 1913 kararini esas aliyorsa dogru uc 11-14 degil 12-16'dir ve ana madde de oraya gider. Bu parti karar vermez, hakemli karar gerekir.

### TAKVIM parti 3: Atina 1833-03-31 -> 1833-04-12 (YUN-161B, ana madde bu dalda tasindi)

| yerlesim | mevcut gun | yeni gun | madde | kaynak |
|---|---|---|---|---|
| Atina (yerlesimler.js satir 495) d: {f:"1827-06-05",t:"1833-03-31",y:"kusatma"} t ucu | 1833-03-31 | 1833-04-12 | Atina'nin yeni Yunan devletine birakilmasi (olaylar_ek6.js:114) | W. St Clair, Who Saved the Parthenon? (OBP 2022) bol. 13: "12 April ... Bavarian troops took possession of the Acropolis" (Finlay, Journals and Letters I s.67, olayin tanigi); Yunan 31 Mart Julyen = 12 Nisan G (+12). Hakemli ikinci kaynak yok; ic_not_gun beyanli |

Tek uc (satirda "1833-03-31" 1 kez). Bu dalda tasinanlar: olaylar_ek6 t/gun/ic_not_gun, yer_yama.js:106, ekokuma_antlasma4.js:780, 6 dil ceviri anahtari (OLAYLAR_EK6:1833-04-12:0). Uretilmis dosyalara (bolgeler.js, donemler_ust vb.) dokunulmadi.
