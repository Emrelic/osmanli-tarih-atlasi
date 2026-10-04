# LAB-NOKTA-DOSYASI-1003: atlasta olmayan 8 yerleşim için veri hazırlığı

- Tarih: 2026-10-01 · Makine: EMRE (LAB) · Dal: `lab-odak-1003`
- Amaç: Emre "nokta açılsın" derse verinin hazır olması. **Bu bir öneri dosyasıdır; `data/`'ya hiçbir şey yazılmadı.**
- Kurallar:
  - Koordinat uydurulmadı. Atlasın kendi koordinatı dayanak sayılmadı (`D207`).
  - Kimlikler (`d:`) `data/devletler.js` node ile yüklenerek **tarandı** (`D205`); tahmin edilen id yazılmadı.
  - Bir zincir halkasının kaynağı yoksa "ölçülemedi" yazıldı.
- Koordinat kaynakları:
  - **Pleiades** (pleiades.stoa.org, akademik antik yer adları sözlüğü; `reprPoint` = [boylam, enlem]).
  - **UNESCO Dünya Mirası** sayfaları.
  - Ergani, Şemkûr ve Beylekān için akademik bir sözlükte kayıt bulamadım → **koordinat ölçülemedi**.

## Özet: getiri (④) önce

| Ad | Koordinat (enlem, boylam) | Kaynak | Ömür (atlas penceresinde) | **Getiri** |
|---|---|---|---|---|
| **Ani** | 40,5000 · 43,5667 (yay dakikası) | UNESCO WHS 1518 | 962 başkent → 1319 sonrası çöküş, bugün harabe | **3** (ANADOLU-1003 #33, #39; ANADOLU2 #41) |
| **Dvin** | 40,0119 · 44,5808 | Pleiades 863780 "Doubios" | 951'de Şeddâdî merkezi → terk tarihi ölçülemedi, bugün harabe | **3** (#3, #27; ANADOLU2 #57) |
| **Meyyâfârikîn (Silvan)** | 38,1428 · 41,0033 ⚠️ | Pleiades 874573 "Martyropolis" | Antik → bugün Silvan (kesintisiz) | **2** (ANADOLU #23, ORTADOĞU-1002 #58) |
| **Harran** | 36,8636 · 39,0307 | Pleiades 658427 "Harran/Carrhae" | Antik → bugün Harran (köy/ilçe) | **2** (ANADOLU #21 = ORTADOĞU #20; mükerrer birleşince **1**) |
| **Şemkûr (Şemkir)** | ölçülemedi | — | ölçülemedi | **1** (#4) |
| **Ahlat** | 38,75 · 42,50 (yay dakikası) | UNESCO Geçici Liste 1401 | Antik (Urartu) → bugün ilçe | **0** (bu partilerde olay yeri değil) |
| **Ergani** | ölçülemedi | — | Bugün ilçe | **0** (#37 yersiz) |
| **Beylekān** | ölçülemedi | — | 1221'de Moğol yağması, sonrası ölçülemedi | **0** (#5 bölünürse +1) |

**Toplam getiri: 11 kalem (mükerrer Harran birleşince 10).** Kalan 31 kalemle güncellendi (LAB-ODAK-ANADOLU2-1003). Emek açısından en verimli noktalar: **Ani (3), Dvin (3)**, ardından Meyyâfârikîn ve Harran (2'şer).
📌 Dvin'in ömrü için ek ölçüm: TDV GÜRCİSTAN «Celâleddin Hârizmşah … 622'de (1225) Duvîn'i zaptetti» ⇒ şehir 1225'te hâlâ var.
📌 Karşılaştırma: Bu 8 adın dışında ORTADOĞU-1002'de **Şeyzer** 2 olayın yeri (#24, #32) ve 1 olayın konusu (#29). Taberiye çevresinde 3 olay var (Taberiye, Sınnebra, Hittîn). Bunlar bu dosyanın kapsamında değil, ama aynı getiri sınıfındalar.

## ① Koordinat ayrıntısı
- **Ani:** UNESCO WHS 1518 (https://whc.unesco.org/en/list/1518/) sayfasında «N40 30 0 E43 34 0». Hassasiyet yay dakikası (~1-2 km); harabe alanının merkezini gösteriyor.
- **Dvin:** Pleiades 863780 «Doubios», reprPoint [44,58079045, 40,01185995]. Konum kayıtları "DARMC location 22153" ve "OSM location of Dvin", doğruluk 10-20 m. ⚠️ Pleiades'in tarih aralığı yalnızca −330 → 640 (antik çağ); ortaçağ ömrünü vermiyor.
- **Meyyâfârikîn:** Pleiades 874573 «Maipa/Martyropolis/Ioustinianopolis», reprPoint [41,003257, 38,1427855]. ⚠️ İki konum kaydının doğruluğu çok farklı: **10.000 m** ve 10 m. reprPoint bu ikisinin birleşimi; kullanmadan önce 10 m'lik kaydın tek başına alınması önerilir. Bunu ayrıca okumadım: ölçülemedi.
- **Harran:** Pleiades 658427, reprPoint [39,03074965, 36,86359431]. Konum kayıtları "DARE Location" ve "OSM location of Harran Höyüğü". TDV HARRAN ile uyumlu: «Şanlıurfa'nın 45 km. kadar güneydoğusunda bulunmaktadır.»
- **Ahlat:** UNESCO Geçici Liste 1401 (https://whc.unesco.org/en/tentativelists/1401/): «38° 45'N-42° 30'E». ⚠️ Bu koordinat mezar taşları alanının (Selçuklu mezarlığı) kaba yeri. TDV: «Van gölünün kuzeybatı kıyısında…».
- **Ergani, Şemkûr, Beylekān:** Pleiades'te kayıt yok, TDV koordinat vermiyor. Ortaçağ Şemkûr ve Beylekān harabeleri bugünkü aynı adlı kasabalarla **aynı yerde değil**. Modern şehir koordinatını kullanmak hata olur. **Ölçülemedi.**

## ② Ömür
- **Ani:** TDV KARS: «Bagratlılar soyundan III. Aşot, 962'de beyliğinin merkezini Ani'ye taşıdıktan sonra…». UNESCO: «The Mongol invasion and a devastating earthquake in 1319 marked the beginning of the city's decline.» Kesin terk tarihi **ölçülemedi**. Atlas penceresi (1000-1300) içinde şehir var; `Değişmez 1` açısından en azından 1300'e kadar sahip aranmalı.
- **Dvin:** TDV ŞEDDÂDÎLER: «Muhammed b. Şeddâd … Dvin'i ele geçirdi ve Şeddâdîler hânedanını kurdu (951).» **Terk ölçüldü (KUNYE-DVIN-1003 ②):** Iranica DVIN «…the Mongol conquerors again destroyed the city, between 1233 and 1236, thus bringing about its definitive decline.» ⇒ pencere 1236'da kapanır. Ömrün sonu bilinmeden `Değişmez 1` için doğru pencere verilemez. ⚠️ Nokta açılmadan önce çözülmesi gereken tek kritik eksik bu.
- **Harran:** Antik çağdan beri var (TDV: çivi yazılı kaynaklarda geçiyor). 1300'e kadar sahipleri izleniyor (aşağıda). Sonrası bu dosyanın kapsamı dışında.
- **Meyyâfârikîn:** Antik çağdan bugüne kesintisiz (Silvan).
- **Ahlat:** Kesintisiz, ama TDV 1230 Hârizmşah kuşatmasında nüfusun büyük kısmının «şehri terk ederek sağa sola dağıldı[ğını]» yazıyor. Yerleşim bitmiyor.
- **Beylekān:** TDV ARRÂN: «Moğollar 1221'de Beylekān'ı yağmaladılar. Bu tarihten itibaren Gence önem kazanmaya başladı…». Terk tarihi **ölçülemedi**.

## ③ Sahiplik zinciri (1000-1300), gerçek `devletler.js` kimlikleriyle
Her halkada dayanak cümlesi var. Boşluklar açıkça "ölçülemedi" yazıldı.

### Ani
| Aralık | `d:` | Dayanak |
|---|---|---|
| …-1045 | `ani-bagratli-kralligi` (884→1045) | TDV KARS (962 merkez) · devletler.js aralığı |
| 1045-1064 | `bizans` | TDV BİZANS: «1045 yılında bu bölgenin de Bizans'a ilhakı…» |
| 1064-1123 | `seddadiler-ani` (1064→1175), metbû `buyuk-selcuklu` | TDV ŞEDDÂDÎLER: «456'da (1064) Ani'yi fetheden Sultan Alparslan şehrin idaresini … Menûçihr'e verdi.» |
| 1123-1126 | `gurcistan` | TDV SALTUKLULAR: «…şehri ona teslim etti. … (517/1123).» |
| 1126-1161 | `seddadiler-ani` | TDV ŞEDDÂDÎLER: «…Ermeni ileri gelenleri şehri Fazl'a teslim etmeye mecbur oldular.» (yıl: Iranica 1126) |
| 1161-1163 | `gurcistan` | TDV AHLATŞAHLAR: «…1161 yılında da Ani şehrini eline geçirmişti.» |
| 1163-1175 | `seddadiler-ani`, metbû `ildenizli` | TDV ŞEDDÂDÎLER: «…558 (1163) … Giorgi Ani'yi iade etmeye mecbur kaldı. … Atabeg İldeniz buraya … Şehinşah'ı … vali tayin etti.» |
| 1175-? | `gurcistan` | TDV ŞEDDÂDÎLER: «Gürcü Kralı Giorgi 1175'te Ani'yi üçüncü defa zaptedip…» |
| ?-1300 | **ölçülemedi** | Moğol dönemine ait kaynak okunmadı |

⚠️ `seddadiler-ani`'nin devletler.js aralığı (1064→1175) 1123-1126 ve 1161-1163'teki Gürcü aralıklarını içeriyor. Nokta düzeyinde `d:` aralığı bu boşlukları ayrıca vermeli.

### Dvin
| Aralık | `d:` | Dayanak |
|---|---|---|
| 951-? | `seddadiler-gence` (951→1075) | TDV (951 kuruluş) |
| ?-1022 | **ölçülemedi** ("Ermeniler'den aldığı"; hangi Ermeni devleti olduğu yazılmıyor) | TDV: «413'te (1022) Ermeniler'den aldığı Dvin'in idaresini…» |
| 1022-1075 | `seddadiler-gence` | Iranica: «Dvin was under the control of his uncle Abu'l-Aswār … who had ruled the city since 1022» |
| 1075-1105 | `seddadiler-ani` (KUNYE-DVIN-1003 ③ ile düzeltildi) | TDV: «Ani ve bu sırada Şeddâdîler'e bağlı olduğu anlaşılan Dvin … Ancak Şeddâdîler 1105 yılına kadar şehri ellerinde tuttular.» |
| 1118-? | `dilmacogullari` (1085→1394) | TDV: «Togan Arslan 512'de (1118) tekrar Dvin'e saldırdı ve … şehri topraklarına kattı.» |
| 1105-1118 | **ölçülemedi** | |
| ~1126-1130 | `seddadiler-ani` | TDV: «Ardından Gence ve Dvin'i topraklarına katmayı başardı.» |
| 1130- | **ölçülemedi** (Erzen Emîri Kurti; devletler.js'de karşılığı yok) | TDV: «…Kurti'nin Dvin'i geri almak için giriştiği savaşta öldü (524/1130).» |

🔴 **Çelişki:** `seddadiler-gence` devletler.js'de 1075'te bitiyor, ama TDV Şeddâdîlerin Dvin'i 1105'e kadar tuttuğunu söylüyor. 1075-1105 arası hangi id ile verilecek? **Karar koordinatörün** (`seddadiler-gence`'nin bitişi mi uzatılmalı, yoksa Dvin kolu için ayrı bir id mi gerekiyor?).

### Harran
| Aralık | `d:` | Dayanak (TDV HARRAN) |
|---|---|---|
| …-~1081 | `numeyri` (991→1083) | devletler.js aralığı; TDV Şerefüddevle'nin şehri teslim alışı |
| ~1081-1086 | `ukayli` | «Şerefüddevle bunu duyunca hemen Harran üzerine yürüdü. Şehri teslim alıp…» |
| 1086-1092 | `buyuk-selcuklu` | «1086 … Melikşah … Harran'a uğradı. … Harran Melikşah'ın nâibleri tarafından idare edildi.» |
| 1094-1096 | `suriye-selcuklu` | «…Tutuş … Harran'a memlükü Karaca'yı nâib tayin etti.» |
| 1096-1105 | **ölçülemedi** (Kürboğa'nın Musul emirliği; devletler.js karşılığı aranmadı) | «Kürboğa 1096 yılında Harran'ı aldı.» |
| 1105-1107 | `selcuklu` | «1105'te Anadolu Selçuklu Sultanı I. Kılıcarslan … şehri ona teslim ettiler.» |
| 1107-1127 | **ölçülemedi** | |
| ~1127-1146 | `zengi-musul` | «Zengî … Harran'ı üs edinerek 1144 yılında Urfa'yı … geri aldı.» |
| 1146-1149 | `zengi-musul` | «1146'da İmâdüddin Zengî şehid edilince Harran, oğlu Musul sahibi I. Seyfeddin Gazi'nin…» |
| 1149-1170 | `zengi-halep` | «…1149 yılında ise Nûreddin Mahmud Zengî'nin idaresine geçti.» |
| 1170-1182 | **ölçülemedi** («1170'ten itibaren sık sık el değiştiren…») | |
| 1182-1235 | `eyyubi` ⚠️ (hangi kol olduğu ölçülemedi) | «…Harran 1182 yılında Eyyûbîler'in hâkimiyetine girdi.» |
| 1235-1236 | `selcuklu` | «Anadolu Selçukluları'nın 1235'te hâkim oldukları şehir bir yıl sonra tekrar Eyyûbîler'in eline geçti.» |
| 1236-1260 | `eyyubi`? ⚠️ (`eyyubi` 1250'de bitiyor; 1250-1260 için kol ölçülemedi) | |
| 1260-1300 | `ilhanli` | «1260 yılında Hülâgû Harran'ı kuşattı ve … teslim aldı.» |

### Meyyâfârikîn (Silvan)
| Aralık | `d:` | Dayanak |
|---|---|---|
| …-1085 | `mervani` (983→1085-08-30) | TDV MERVÂNÎLER: «…(30 Ağustos 1085) Meyyâfârikīn ele geçirildi.» |
| 1085-1093 | `buyuk-selcuklu` | (aynı cümle; Selçuklu fethi) |
| 1093-1109 | `suriye-selcuklu` → sonrası ölçülemedi | TDV MEYYÂFÂRİKĪN: «Tutuş 12 Rebîülevvel 486'da (12 Nisan 1093) şehri zaptetti.» |
| 1109-1115 | `ahlatsahlar` | «Meyyâfârikīn, Şevval 502'de (Mayıs 1109) … Sökmen el-Kutbî tarafından ele geçirildi.» |
| 1115-1121 | `buyuk-selcuklu` (Karaca es-Sâkī'ye iktâ) | «…508 (1115) yılında … kendi memlüklerinden Karaca es-Sâkī'ye iktâ etti.» |
| 1121-? | `artuklu` | «515'te (1121) Irak Selçuklu Sultanı Mahmûd … [İlgazi'ye]…» / TDV ARTUKLULAR iktâ cümlesi |
| ?-1260 | `eyyubi` kolu ⚠️ (el-Cezîre Eyyûbî kolu için devletler.js'de ayrı id **yok**) | ORTADOĞU-1002 #58 (TDV): «Son Eyyûbî hükümdarı el-Melikü'l-Kâmil Nâsırüddin şehri … savunduysa da…» |
| 1260-1300 | `ilhanli` | aynı olay (Hülâgû) |

### Ahlat
| Aralık | `d:` | Dayanak (TDV AHLAT) |
|---|---|---|
| ~990-? | `mervani` | «…Ebû Ali Hasan b. Mervân, adı geçen şehirleri de içine alan bölgede Mervânî Devleti'ni kurdu.» |
| ?-1100 | **ölçülemedi** | |
| 1100-1207 | `ahlatsahlar` (1100→1208) | devletler.js aralığı; TDV: «…şehir Eyyûbîler'den el-Melikü'l-Evhad b. Âdil'in eline geçti (604/1207-1208) ve Ahlatşahlar hânedanı sona erdi.» |
| 1207-1230 | `eyyubi` ⚠️ (kol ölçülemedi) | aynı cümle |
| 1230 | `harizmsah` (kısa süreli) | «Nisan 1230'da Ahlat zaptedildi…» (Celâleddin Hârizmşah) |
| 1232/33-1243 | **ölçülemedi** (Karaarslan'ı gönderen hükümdar cümlede yok) | «…Karaarslan'ı göndererek (630/1232-33) Ahlat'ta iskân ve imar faaliyetini başlattı…» |
| 1243-1256 | `mogol-imparatorlugu` (vali: Tamtam) | «Moğollar Kösedağ Savaşı'ndan sonra Ahlat'ı istilâ edip … Tamtam'a verdiler (1243).» |
| 1256-1300 | `ilhanli` | devletler.js aralığı (1256→). TDV İlhanlı dönemi cümlesi: Ebû Said devrinde «mâmur ve müreffeh» (aralığa ait doğrudan cümle ölçülemedi) |

### Şemkûr, Ergani, Beylekān
Koordinatları ölçülemediği için zincir çıkarılmadı. Bilinen tek tek halkalar:
- **Şemkûr:** 978 öncesi `seddadiler-gence` (TDV: «…Ali el-Leşkerî topraklarını kuzeybatıda Şemkûr'dan doğuda Berdea'ya kadar genişletti.»), 1026'da hâlâ Şeddâdî (Giorgi kuşatması püskürtüldü).
- **Ergani:** «Zengî de Ergani, Hâlâr, Tulhum, Çermük gibi kale ve kasabaları ele geçirdi (538/1144); onun ölümünden (541/1146) sonra da bu kale ve kasabalar Hasankeyf Artuklu Emîri Fahreddin Karaarslan tarafından işga[l edildi]» → 1144 `zengi-musul`, 1146 sonrası `artuklu`.
- **Beylekān:** 985'te Şeddâdî (TDV: «…ardından Berdea ve Beylekān'ı geri aldı.»), 1221 Moğol yağması.

## Açık kararlar (koordinatör / Emre)
1. **Dvin 1075-1105:** `seddadiler-gence` 1075'te bitiyor, TDV 1105 diyor. Hangi id kullanılacak?
2. **Eyyûbî kolları:** Harran, Meyyâfârikîn ve Ahlat için el-Cezîre/Meyyâfârikîn kolu devletler.js'de yok. `eyyubi` 1250'de bitiyor. 1250-1260 arası hangi id ile verilecek?
3. **Dvin'in terk tarihi:** `Değişmez 1` penceresi için gerekli; ölçülemedi.
4. **Koordinatı olmayan üç yer** (Şemkûr, Ergani, Beylekān): Akademik bir sözlükte kayıt bulunana kadar nokta açılmamalı. Getirileri zaten düşük (1, 0, 0).

## Bulamadıklarım
- Ergani, Şemkûr ve Beylekān'ın koordinatı.
- Dvin ve Beylekān'ın terk tarihi.
- Zincirlerdeki "ölçülemedi" halkaları (yukarıda tek tek işaretli).
