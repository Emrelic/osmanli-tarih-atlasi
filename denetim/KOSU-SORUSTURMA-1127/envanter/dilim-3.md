# Envanter S3 — uret_petek.py satir 5327–8222 (tam okundu, atlama yok)

Kisaltma: CANLI = Kosu 40 bayrak kumesinde calisir · OLU = hic calismaz · HER ZAMAN = bayraksiz.
ONEMLI on bulgu (dilimin ana anahtari): `MOTOR_MO_SINIR=9999-12-31` oldugu icin `_mo_gunu(g)` (satir 5682, `gn(g) < _MO_SINIR_N`) HER GUN icin DOGRU. Yani "MO" dali (MO sahnesi, MO tavanli devir, "MO izgara disi: SAHIPSIZ", puan kapisi atlama) Kosu 40'ta butun tarihlerde (1281-1923 dahil) aktif. (`_MO_SINIR_N` tanimi satir 3299; `MERKEZ_KURALI` satir 1276, `MO_PUAN` 1278, `EZBER_TAVAN` 3369 — dilim disi, Grep ile bakildi.)

---

## 1. Kosu ici durum ezberleri + PETEK_D muhru (5327–5379)
- **Ad:** `_VARLIK_ONBELLEK/_VARLIK_DEVIR/_VARLIK_PAY`, `_KUS_IX/_KUS_AGAC`, `_K1_KIYI/_KIYI_TAMPON`, `_ONB_KUS_TUZ`, `_KUS_KARAR`, `_petek_muhru`, `_muhru_dogrula`, `_sahipli` · 5327–5379
- **AMAC:** petek_epok sonuclari ve kusatma kararlari icin ezber; `_IC_ONBELLEK` varsayimi ("PETEK_D bundan sonra degismez") OLCULEREK korunsun: "garanti EDILDIGINI VARSAYMAK yerine olculur" (yorum).
- **YONTEM:** `_KUS_AGAC` = bos olmayan PETEK_D uzerinde STRtree. `_KIYI_TAMPON = KARA.boundary.buffer(0.01)` koşular arasi onbellekten (`_ONB.oku("k1", ...)`) alinir, yoksa hesaplanip yazilir; ozeti `_ONB_KUS_TUZ` olur. `_petek_muhru()` = (len, toplam koordinat sayisi, toplam alan); `_muhru_dogrula(nerede)` farkli ise `SystemExit` (koşu OLDURULUR). `_sahipli(y,g)`: y'nin d/v/s doneminden biri g'yi kapsiyor mu.
- **AYAR:** HER ZAMAN (muhur dogrulamasi bolgeler.js yazilmadan once cagriliyor, satir 7127). Onbellek `_ONB.acik` ise.
- **BAG:** `_sahipli` kusatma, devir_kumesi, bos_bolge, dolgu tarafindan okunur.
- **SUPHE:** muhur yalniz "adet/koordinat/alan" ozeti (alan 9 hane yuvarlama); ayni alan+koordinat sayisini koruyan bir degisikligi yakalamaz (anlasilmadi, ihtimal dusuk). `_sahipli` her cagrida 3 liste tariyor, gn() onbellekli ama ezbersiz (dilim disi `_SAHIPLI_EZBER` ayri yerde, satir 3426) — iki ayri "sahipli" mekanizmasi var.

## 2. KUSATILMISLIK — `_kusatilmis`, `_ic_kara`, `_cep`, `KUSATMA_ESIK` (5382–5575)
- **Ad:** "KUSATILMISLIK" / M-4537 / MOTOR 3 (3 Agustos 2026) · `KUSATMA_ESIK=0.90`, `_KUS_ONBELLEK`, `_IC_ONBELLEK/_CEP_ONBELLEK`
- **AMAC:** sahibi yazilmamis ama var oldugu tarihte "kasitli bos" olmayan petegin (Rumeli Hisari 1452, Anadolu Hisari) delik kalmamasi: kara komsuluğunun >=%90'i sahipli ise petek devredilir. Yorum: "Kasitli boslugu ayiran sey 'kac sahip' degil 'HIC sahip var mi'" (olcumle: %66–%90 arasi hicbir vaka yok, esik onemsiz; Kuveyt %45, Doha %49 devredilmez). "Yanlis renk bosluktan KOTUDUR".
- **YONTEM:** her gun g icin YERLER taranir: `kasitli_bosluk:` olanlar atlanir; kur>g veya bit<=g olup `_sahipli` olmayanlar aday. Adayin kiyi-disi siniri (`_ic_kara(i)`, tarihten bagimsiz ezber) ile o gunku CANLI+SAHIPLI komsu petek birlesiminin (`buffer(0.002)`) kesisim orani >= %90 ise kume'ye girer. `_ONB.acik` ise karar (kendi WKB'si + sahipli komsu WKB'leri + kiyi tamponu tuzu) ile koşular arasi onbellege yazilir, yoksa ayni mantik acik kodla tekrarlanir. Sonuc frozenset gun basina ezber.
- **AYAR:** HER ZAMAN. Onbellek yolu `_ONB.acik`'e bagli.
- **BAG:** `devir_kumesi` (b-kolu) okur; `KUSATMA_BILESEN` ile genisler; `petek_epok` hedefi "en yakin komsu" kuralini DEGISTIRMEZ (yalniz "devredilsin mi").
- **SUPHE:** (a) AYNI karar mantigi iki kez yazilmis (onbellek kolu ve onbelleksiz kol, 5510–5548 / 5549–5570) — sapma riski; Kosu 40'ta hangisi calisti `_ONB.acik`'e bagli, bilinmiyor. (b) `_KUS_BEKLENEN` (5523) 159+ adlik elle yazilmis "fotograf" liste (bkz. madde 8). (c) yorumda "Yeni Urgenc BILEREK DISARIDA — ARASTIRMA DOGU cevabi bekleniyor": kod bunu uygulamiyor (`kasitli_bosluk` veri alani ile cozuluyor olabilir), acik soru, anlasilmadi. (d) `sayac()` zamanlayici da burada. (e) "kuyruk" ayri dosyada kalan `_ic_kara` onbellegi PETEK_D degismez varsayimina dayali (bkz. madde 1 muhur).

## 3. KUSATMA BILESENI (MOTOR_KUSATMA_BILESEN) (5578–5660)
- **Ad:** "KUSATMA BILESENI — post-it #127 (Tiraspol 1676), 27 Ekim 2026, Emre 'b'" · `_kusatma_bilesen`, `KUSATMA_BILESEN`, `_KUS_BIL_KARAR`, `_KUS_BIL_SAYAC`
- **AMAC:** bitisik iki kusatma adayi birbirini KILITLIYOR (komsu aday sahnede degil ve sahipsiz, ortak kenar paydada ama paya girmiyor) ⇒ hicbiri %90'i tutturamiyor, delik kaliyor (Tiraspol+Slobozia+Dubasari; Uman-Yelisavetgrad). Cozum: bitisik adaylar BIRLIKTE sinanir.
- **YONTEM:** o gunku aday kumesi (kasitli_bosluk degil, kur>g/bit<=g, sahipsiz, bos olmayan petek) icin `_cep` ile komsuluk grafi, DFS ile bilesenler; >=2 uyeli ve hepsi `tek` icinde olmayan bilesenin birlesiminin kiyi-disi dis siniri >=%90 canli-sahipli komsulara degiyorsa tum uyeler `ek`'e girer. Karar `_KUS_BIL_KARAR` ((uyeler, sahipli komsular)→bool) kosu ici ezber; kosular arasi onbellegi YOK.
- **AYAR:** `MOTOR_KUSATMA_BILESEN=1` ⇒ CANLI (varsayilan kapali).
- **BAG:** `_kusatilmis` sonunda `out |= _kusatma_bilesen(g, out)`; esik ve `kasitli_bosluk` istisnasi aynen.
- **SUPHE:** "yama ustune yama": tek-aday kusatmasinin kilitlenme kusuru icin ayri ikinci kusatma. Kusatma tek-tek kolu icin kosular arasi onbellek var (M-4537) ama bilesen kolu icin yok — tutarsiz. Bilesende `U.boundary.difference(_KIYI_TAMPON)` onbellekli degil (her yeni anahtarda yeniden). `KUSATMA_BILESEN` tanimi, kullanildigi `_kusatilmis`'tan (5571) SONRA (5593) geliyor — islev cagrildiginda tanimli olsa da okunusu zor.

## 4. `_DEVIR_EZBER`, `devir_kumesi` + yardimcilar (5663–5769)
- **Ad:** `devir_kumesi(g)` (M-4537 profili 19 Eylul 2026), `_ortuk_kur`, `_mo_gunu`, `_mo_puan_atla`, `_mo_tavanli`, `_mo_sahne_disi`, `_merkez_disi`, `MOTOR_KUR_DEVIR` (post-it #51 Ibrail ekslavi)
- **AMAC:** g gununde SAHNEDE OLMAYAN ve petegi devredilecek yerlesimler kumesi (petek_epok, dolgu, serbest bolge, kapatma vb. hepsinin girdisi). Ibrail ekslavi: `kur:` ilk yazili tanik olan, 1445 oncesi sahipsiz Kalas peteği sahipsiz canli kalip Ibrail'e giden toprağı tutuyordu.
- **YONTEM:** yazili = (kur>g ve KUR_DEVIR) VEYA ((kur>g veya bit<=g) ve `_sahipli`); `v = yazili | _kusatilmis(g)`; `_mo_gunu` ise `| _mo_sahne_disi(g)` (bit<=g; kur>g; kur yok → ortuk kur: en erken sahiplik kaydi f; kayit yoksa ve bit yoksa SAHNE DISI; bit tasiyan kur/sahipliksiz nokta ufuk basindan bit'e kadar sahnede); `| _merkez_disi(g)` (k>=4; MERKEZ_K0 kapaliysa k:0 de). Gun basina `_DEVIR_EZBER` (`_tavanli`, EZBER_TAVAN default 128).
- **AYAR:** `MOTOR_KUR_DEVIR=1` CANLI. `_mo_gunu` TUM gunlerde dogru (MO_SINIR=9999) ⇒ `_mo_sahne_disi` HER GUN CANLI. `MOTOR_TARIH_BASI_MERKEZ=1` ⇒ `_merkez_disi` HER GUN CANLI (`MERKEZ_KURALI='1'`); `MERKEZ_K0` varsayilan "1" ⇒ k:0 noktalar merkez-disi SAYILMAZ, yalniz k>=4.
- **BAG:** `_kusatilmis`, `_sahipli`; sonucu `petek_epok`, `bos_bolge`, `_dolgu_kumesi`, KKB, serbest kenar okur. `_mo_puan_atla` MO gunlerinde yogunluk kapisini atlar (MO_PUAN=0 varsayilan ⇒ CANLI ama zaten `MOTOR_PUAN_KAPALI=1`).
- **SUPHE:** (a) **Isim yaniltici ama davranis genel**: "MO" kurallari Kosu 40'ta CE tarihlerini de kapsiyor (MO_SINIR=9999-12-31); yorumlar "CE gunlerinde ikisi de bos kume" diyor — bu bayrak kumesinde DOGRU DEGIL (bir de `_merkez_disi` k>=4 petegi her gun devrettiriyor). Yorum ile fiili ayarlar celisiyor. (b) `_mo_sahne_disi`: kur'u olmayan, sahiplik kaydi olmayan ve bit'i de olmayan her nokta HER GUN sahne disi — bu CE'de de tum "sahipliksiz kalici" noktalari (dolgu/bolge noktalari, cöller) devir eder; ayri ayri tur:'a bakilmiyor. (c) `_ortuk_kur`: "yeni tarih uydurmaz" diyor ama kur olmayan nokta icin en erken sahiplik f'yi kuruluş olarak yorumlayarak ondan once SAHNE DISI sayiyor (cıkarim). (d) `_mo_sahne_disi` her cagrida YERLER'i tamamen tarar (ezber `devir_kumesi` ust katmaninda). (e) `_ORTUK_KUR` ezberi sinirsiz ama YERLER sayisiyla sinirli (~4000).

## 5. SERBEST KENAR (5772–5924)
- **Ad:** "SERBEST KENAR — sahipli <-> SAHIPSIZ siniri" (hatalar 15 md.17) · `SERBEST_TOL=0.02`, `SERBEST_SADE_TOL=0.02`, `serbest_sadelestir`, `bos_bolge`, `serbest_kenar`, `hat_belirsizlik`, `hat_havuza`, `hat_koord`, `_SERBEST_ONBELLEK`; "P13B 0048-Y7" sadelestirme
- **AMAC:** cölde "cetvelle cizilmis" sinir: kenarlarin besi `(bos)|OSMANLI`, yani devlet ile SAHIPSIZ cöl arasinda; orta dikme "hicbir seyin iddiasi degil". Cozum "yaslama hedefi yapmak DEGIL" (sahte cizgiyi guvenilir yapmaz): kenar ayri havuza ("sb") yazilir, js/app.js line-blur ile sondurur; belirsizlik km olarak hesaplanir. Y7: parcali/disli hatlar linemerge+simplify (segment min 0,31 km).
- **YONTEM:** `bos_bolge(g,pe)` = g'de sahibi yazili olmayan peteklerin birlesimi `buffer(SERBEST_TOL)`; anahtar (sahipsiz kume, devir kumesi) ikilisi. `serbest_kenar` = govde siniri ∩ bos bolge → `serbest_sadelestir`. `hat_belirsizlik`: hat orta noktalarinda en yakin 2 tohum arasi mesafe/2, MEDYAN. `hat_havuza` hatlari tekilleştirip `SRB_HAVUZ/SRB_U/SRB_IX`'e yazar.
- **AYAR:** HER ZAMAN (kaydi `sb` alani; tüketimi dilim disinda).
- **BAG:** `devir_kumesi`, `_sahipli`; tuketiciler dilim disi (govde uretimi). `SRB_*`, `_SEED_AGACI`, `noktalar` dilim disi tanimli.
- **SUPHE:** `bos_bolge` her cagrida 4000 yerlesimi `_sahipli` ile tarar (anahtar kurmak icin). "Sahipsiz" tanimi burada `not _sahipli` (yazili sahip yok); `devir_kumesi` kusatilmis/KUR_DEVIR/MO sahne disi/merkez disi petekleri ayri tutuyor ⇒ iki tanim farkli (aksiyon: anahtarda devir da var). Sinirsiz `_SERBEST_ONBELLEK`.

## 6. Varlik epoku paylastirmasi: `_canli_komsular`, `_olu_bilesenler`, `_EPOK_PAY_TOL` (5927–5999)
- **Ad:** "② VARLIK EPOKU PAYLASTIRMASI" — Emre 16 Agustos 2026: "sonradan dogan yerlesim kendi bolgesini kapmali." (M-0221)
- **AMAC:** dogmamis/olmus noktanin petegi TEK komsuya degil, hayatta komsular arasinda paylasilmali (sinir olu noktadayken komsularin ARASINDAN gecerdi). Tam Voronoi pahali (35 sn x 250 = +2,4 saat) ⇒ yalniz OLEN PETEGE clip'li mini-Voronoi.
- **YONTEM:** `_canli_komsular(alan, sahne_kume)` = DONMUS `PETEK_D` uzerinden alan+0,02° ile degen hayatta olanlar; `_olu_bilesenler(olu,hucre)` bitisik olu hucreleri BILESEN halinde gruplar (islem sirasi etkisi yok). Alan korunumu varsayilmaz, artik OLCULUR.
- **AYAR:** HER ZAMAN.
- **BAG:** `petek_epok` icinde kullanilir; `devir_kumesi` girdi.
- **SUPHE:** `_olu_bilesenler` bitisiklik 0,02° tamponla "degme" sayar (köse temasi bile) — `_enklav_kirp._deger` daha siki (>= ~1 km ortak kenar) — iki ayri "komsu" tanimi.

## 7. ENKLAV KIRPMA — MOTOR-ENKLAV-KIRP-1104 (6002–6161)
- **Ad:** `ENKLAV_KIRP_KM`, `enklav_gunu`, `_enklav_disk`, `_enklav_kirp`, `_ENKLAV_GUN_EZBER` · Emre 4 Kasim 2026
- **AMAC:** `enklav:true` kaleler (Oran 1.430 km², Badis 174 km²) karada noktasiz "enklav parcasi" olusturuyordu; kaynak (LAB olcumu koşu 32): bu islevin varlik devri — komsunun olu petegi paylastirilirken presidio da ALICI oluyordu. Kural: o gun enklav doneminde SAHNEDEKI nokta devirden pay ALMAZ, taban hucresinin yalniz kaleden <= ENKLAV_KIRP_KM km'lik kismini tutar; artik enklav-OLMAYAN sahnedeki komsulara yerel Voronoi ile bolunur. "GUNE BAGLI, ZAMANSIZ DEGIL" (Kefe 1475-1774, Oran 1708-1732/1792-1831 Osmanli donemlerinde kirpilmaz).
- **YONTEM:** `enklav_gunu(g)`: `_ENKLAV` icinden g'yi kapsayan, `enklav:true` ve `d != __BOSLUK__` donemi olanlar. `_enklav_kirp(hucre, taban, enk, sahne_kume, r_km)`: her hedef icin `taban ∩ disk ∩ hucre`'nin tek bileseni (noktaya en yakin) kalede kalir; artik bilesen bilesen alicilara (ortak kenar>=~1 km) yerel Voronoi (`voronoi_diagram`), kopuk pay icin tur tur komsu zincirleme, hicbiri degmiyorsa kaleye/Voronoi sahibine. Islemsel: kopya `_hk` uzerinde, patlarsa o gun kirpmasiz + adiyla yazdir.
- **AYAR:** `MOTOR_ENKLAV_KIRP_KM=10` ⇒ CANLI (varsayilan 0 ⇒ islev hic cagrilmaz). Anahtar degiskeni onbellek tuzuna girer.
- **BAG:** `petek_epok` sonunda (devirden sonra); `_varlik_anahtar`'a ("ENKLAV", set) eklenir. Yetim yuz kurali `_ENKLAV` (dilim disi) zamansiz kalir ve ayri.
- **SUPHE:** (a) iki ayri enklav mekanizmasi: zamansiz "yetim yuz" kurali (`_ENKLAV`, dilim disi) + bu gune bagli kirpma — yorum "Yetim yuz kurali zamansiz kaldi; ona dokunulmadi" diyor. (b) yorum "Melile'nin Uc Catal burnu" gibi vaka-ozel dallar var (komsu yoksa kaleye). (c) hata yutuculugu: `except Exception` ile o gun kirpmasiz devam (log basar ama kosu surer; 7-16 saatlik kosu koruma amacli). (d) `_deger` icinde `except -> a.intersects(b)` sessiz geri dusme. (e) `_km_derece`, `_scale`, `poligonal`, `_ham_km2` dilim disi tanimli. (f) uzun, kirilgan dallar (tur tur `bek` dongusu).

## 8. `_varlik_anahtar`, `_bant_taban_liste`, `petek_epok` (6164–6429)
- **Ad:** `petek_epok(g, bant=None)` (UFUK-BANT-1117; MO-MOTOR-1020; ② PAYLASTIRMA) · `_VARLIK_ONBELLEK`, `_BANT_TABAN_ONB`
- **AMAC:** g tarihinde gecerli petek listesi: kurulmamis/yok olmus noktanin payi sahnedeki komsulara paylastirilmis. `bant` ⇒ 7/10 gunluk bant govdesi tabandan "ayni hatta" gecer (devir → kapat → B1/B2/B3 → kiyi → puan kapisi).
- **YONTEM:** `devir=devir_kumesi(g)`; `_mo_t` ise taban MO bandi (MO_SAAT 40 = YURUYUS_SAAT 40 ⇒ ayni, `_taban=PETEK_D`, `_butce=None`) — fakat `MO_SAAT` ayri ise `_BANT_HAM[MO_SAAT]` yoksa SystemExit ("sessizce zayif tavanla kosulmaz"). Anahtar: devir / ("MO",devir) / ("BANT", bant, …) / + ("ENKLAV", enk). Devir bos ve MO degil ve enklav yok ⇒ PETEK_D aynen. Sonra: (i) YURUYUS aciksa `_yr_epok_onar` ile izgara onarim, olu gruplari izgara etiketleriyle (±3 kutu, 3 suzgec turu `maximum_filter`) alicilara; butce disi `butce_disi_km2` SAHIPSIZ (sayilir); (ii) MO ise izgara disi olu gruplar SAHIPSIZ ("MO izgara disi: SAHIPSIZ"), pencere disi olu petekler (`_pen` = sahne noktalarinin erisim kutulari birlesimi) hic hesaba katilmadan SAHIPSIZ; (iii) CE/eski yol: canli komsu yok ⇒ KURESEL en yakin ("komsusuz"), 1 komsu ⇒ butun ona ("tek komsu"), >=2 ⇒ yerel Voronoi clip'li (artik olculur, en yakin canliya), Voronoi kurulamazsa eski yol. Sonra enklav kirpma. Sonuc `_VARLIK_ONBELLEK[_anah]`, kayit `_VARLIK_DEVIR`, sayac `_VARLIK_PAY`.
- **AYAR:** `MOTOR_YURUYUS=1` CANLI; `MOTOR_YURUYUS_SAAT=40`; `MOTOR_MO_YURUYUS_GUN=5` (MO_SAAT=40); `MOTOR_MO_SINIR=9999-12-31` ⇒ `_mo_tavanli(g)` HER GUN dogru (izgara varsa) ⇒ **CE/MO ayrimi yok, tum gunler "MO yolu"**: eski-yol (komsusuz/tek komsu/PAYLASTIRILDI) dallari yalnız izgarasi olmayan durumda (MOTOR_YURUYUS=0) calisir; Kosu 40'ta ilk iki bolum (YURUYUS ya da "MO izgara disi: SAHIPSIZ") ele geciriyor. `MOTOR_UFUK_BANT=40` ⇒ bant = taban ile ayni (`bant=None` sayilir).
- **BAG:** `devir_kumesi`, `_yr_epok_onar`, `_yr_etiket_poligon` (dilim disi), `_enklav_kirp`. Tum yabanci govde/Osmanli govde kurucu dilim sonrasi okur.
- **SUPHE:** (a) **Bayrak kumesinde `PAYLASTIRILDI/tek komsu/komsusuz` (Emre'nin 16 Agustos hükmünün asil kodu, ~100 satir) pratikte OLU** — MO izgarasi varken `continue` ile atlanir (`if _mo_t: ... continue`); log satirlari ("② PAYLASTIRMA (…)") ve KABUL OLCUTU sayaclari bos kalir. Bu, yorumdaki "52'nin kaci PAYLASTIRILDI" kabul olcutunun Kosu 40'ta anlamsiz oldugu anlamina gelir (anlasilmadi: `_yr_epok_onar` izgara kapsami disindaki tum noktalar mi?). (b) Ayni isi yapan UC mekanizma: Dijkstra izgara payi (YURUYUS), mini-Voronoi payi (eski yol), `MO izgara disi: SAHIPSIZ`. (c) `bant` kolu `abs(bant - ...) < 1e-9` ile taban sayiliyor: bant yorumlari ("7/10 gunluk") MOTOR_UFUK_BANT=40 ile "tek bant". (d) `try/except Exception: pass` — `butce_disi_km2` sayaci sessiz. (e) `time.time()` ile `sayac()` olcumu dilim 2 ile ayni.

## 9. "Varlik epoklari" baslangic ozeti + kabul olcutu logu (6432–6475)
- **Ad:** `asama("Varlik epoklari — kusatilmislik on gecisi")`, `_epok_gun`, `_pe_ozet` yazdirmasi
- **AMAC:** gunlük ozet, ② PAYLASTIRMA kabul olcutu (koordinator M-0221: "52'nin kaci PAYLASTIRILDI … ve NICIN kaldi" — uc kova: PAYLASTIRILDI/tek komsu/komsusuz; son ikisi "BASARISIZLIK DEGILDIR").
- **YONTEM:** kur/bit gunlerini `gsirala` ile siralar; 4 ornek tarihte devir kumesi boyutu/km² yazdirir; `petek_epok(EPOK)` cagrilarak `_VARLIK_PAY` ozeti yazdirilir; enklav bayrak durumu loga.
- **AYAR:** HER ZAMAN (log); enklav satiri CANLI (ENKLAV_KIRP_KM=10).
- **BAG:** `petek_epok(EPOK)` burada TETIKLENIR (EPOK icin onbellek isitir).
- **SUPHE:** yalniz olcum/log (dogrulama degil); `petek_epok(EPOK) and _VARLIK_PAY.get(...)` — EPOK icin devir kumesi bos degilse sayac dolar; MO yolunda sayaclar farkli (`yuruyus`, `mo_pencere_disi`); log metinleri eski yola gore ("PAYLASTIRILDI") MO yolunda anlamsiz kalir. 

## 10. KUSATILMISLIK DEVIRLERI LOGU + `_KUS_BEKLENEN` (6477–6584)
- **Ad:** `_KUS_BEKLENEN` (159 ad), `_kus_kayit` logu — "FOTOGRAF YENIDEN CEKILDI — 4 Eylul 2026, 8 ad → 159 ad"
- **AMAC:** kusatma ile devredilen her yerlesim adiyla ve epokuyla yazdirilir; "beklenmedik ad" isaretlenir ("YENI BIR DEVIR SESSIZ GELMEZ"). 154 satir bagiran bir nobetci okunmaz, o yuzden beyaz liste 159'a cekilmis.
- **YONTEM:** `[EPOK] + _epok_gun` icin TUM gunler `_kusatilmis` calistirilir (bu `_KUS_ONBELLEK`'i doldurur); gruplanip basilir.
- **AYAR:** HER ZAMAN (log + onbellek isitma). Bilesen kolu da bu gunlerde CANLI.
- **BAG:** `_kusatilmis`.
- **SUPHE:** (a) **sinirsiz buyuyen ezber sozlugu (set)**: `_KUS_BEKLENEN` elle yazilmis ~159 ad, her yeni kıta/yerlesimde "BEKLENMEDIK" alarmi cikar ve elle genisletilir (yorumun kendisi: "Sabit bir HEDEF degil bir FOTOGRAF"). (b) yalniz uyari; hata/duran kosul yok. (c) yorum "Port of Spain'in nicin dustugu OLCULMEDI — acik kalem" (TODO benzeri). (d) yan etki: kosu basinda tum `_epok_gun` icin kusatma hesaplanir (~1200 gun, yorumda ilk cagri 24 sn, sonrakiler ~0,2–1,2 sn).

## 11. KOMSU-KUR-BOL — MOTOR-KOMSU-KUR-BOL-1016 (6587–6793)
- **Ad:** `_kkb_bilesenler`, `_kkb_en_yakin`, `KKB_ESIT_TAVAN`, `_kkb_hucre_ayni`, `_kkb_erisim`, `_KKB_NOKTA_GUN`, `MOTOR_KOMSU_KUR_BOL(_KIP)` (Emre #14 Hamid x Inanc 942 km², #17 Germiyan/Saruhan x Karesi 398+119 km²)
- **AMAC:** yabanci govdenin kirilma gunleri yalniz KENDI noktalarindan geliyordu: Burdur (kur 1299-09-28) sahneye girince Denizli'nin petegi kuculur ama Inanogullari tek donemi (1281→1368) 1281 govdesiyle 87 yil surer ⇒ Burdur payi iki govdede. Cozum: her varlik kirilma gunu icin `petek_epok`un peteği DEGISTIREBILECEGI noktalar (ERISIM) hesaplanir ve o noktalarin devletinin de kirilma gunu sayilir.
- **YONTEM:** geometri hesabi ISTEMEZ (petek_epok cagri basi ~15 sn). Kip "zarf" (VARSAYILAN, `_kkb_zarf` petek zarflari numpy ile): ölü grup (`_kkb_bilesenler`), alici adayi (grup zarfi + pay ∩ canli zarf), canli aday yoksa uyelerin en yakin canli noktasi (iki devir durumunda); kip "geo": PETEK_D'ye `pay` derece icinde deger graf. Pay = 0,02 + (0,30 yuruyus aciksa). Her `_epok_gun` icin `devir_kumesi(onceki)` XOR `devir_kumesi(simdi)` ⇒ `_KKB_NOKTA_GUN[nokta] = [gun…]`. Gun eklenip govde degismezse donem BOLUNMEZ (mp esitligi, FAZ 1 dilim disi `_kkb_hucre_ayni` ile esit tavan 1e-7 derece²).
- **AYAR:** `MOTOR_KOMSU_KUR_BOL=1` ⇒ CANLI; kip varsayilan "zarf" (`MOTOR_KOMSU_KUR_BOL_KIP` verilmemis). Yuruyus acik ⇒ pay 0,32°.
- **BAG:** `devir_kumesi` ⇒ `_epok_gun`; `_KKB_NOKTA_GUN` dilim disi (govde donem kirilmasi) okur; `_kkb_hucre_ayni` dilim disi cagrilir.
- **SUPHE:** (a) iki kip ("geo", "zarf") ayni isi — "geo" Kosu 40'ta OLU. (b) zarf kipi KABA ("kita olceginde olu grup … zarf 15.316 · geo 44.754 cift"); asiri gun ⇒ FAZ 1'de gereksiz govde hesabi (yorum "yalniz hesap maliyeti"). (c) pay 0,32° YURUYUS icin ampirik "6×0,05°". (d) yorumda "Motorun hucresi saf Voronoi degildir … sapma pay ile karsilanir" — kesin kanit degil, "ust kume" iddiasi sinanmis mi anlasilmadi. (e) KKB, `petek_epok` kuralini (alici = komsu) TEKRARLAYAN ikinci ("ust kume") yaklaşim: petek_epok kurali degisirse KKB sessizce eskir. (f) `_kkb_bil_ez` kucuk ezber (>2 ise temizlenir). (g) `_EPOK_N`, `_KESIT_SON_N` dilim disi.

## 12. SEYRELT / UZAK COGRAFYA SEYRELTME (6801–6939)
- **Ad:** `seyrelt(halka_hav, parca_hav, kayitlar, don_kose, tol, sayac)` — "B · UZAK COGRAFYA SEYRELTME", P13B 0048-Y6 (14 Eylul 2026), UFUK-BANT-1117 seyrelt kok neden
- **AMAC:** cikti boyutu (27 MB) kucultme: halka halka Douglas-Peucker, `don_kose` (ayni anda iki farkli sahibin siniri) kumesi SABIT ⇒ komsu iki devlet arasi bosluk yapisal olarak dogmaz. Olculer: yabanci govde koselerinin %86,7 KIYIDA (coverage_simplify elendi); duz DP 0,02 tol 83.646 km² bosluk, hibrit 0,03 tol bosluk SIFIR. Geçerlilik korumasi: 48.302 parcanin 3.334'u gecersiz → 3 kademe (eski yol/topology/asli) + cok halkali parça kontrolu (4 tur).
- **YONTEM:** `_halka_sade` donmus koselerle bolunen kosulari simplify eder (UFUK-BANT-1117: son koşu kosesi eskiden `[:-1]` ile sessizce atiliyordu; Zeyyani 1281'de −20.135 km²); gecersizse `preserve_topology=True`, o da olmazsa aslina don; cok halkali parcada delik/dis halka kesismesi; sonuc halka havuzu indeksleri yeniden eslenir; `sayac` dort sayiyi doldurur.
- **AYAR:** HER ZAMAN (cikti asamasi; tol cagri yerinde).
- **BAG:** `don_kose_kur` (madde 13) ile ayni kuanta; girdi/cikti `halka_hav` (yabanci/Osmanli govde).
- **SUPHE:** (a) yama ustune yama: eskiden duz DP, sonra topolojik kontrol, sonra `[:-1]` hatasi, sonra gecerlilik koruma — 4 ayri duzeltme tabakasi. (b) "yorum: boslugu odemeye hic gerek yokmus" sonucu olcum odaklı; tol=0,03 sabit degil cagiranda. (c) `except Exception -> False/gecersiz` sessiz.

## 13. `don_kose_kur` (6942–6977)
- **Ad:** `don_kose_kur(*kaynaklar)` — R1 ORTAK IZGARA (4 Eylul 2026)
- **AMAC:** ayni anda iki farkli sahibin siniri olan kose kumesi (donacak koseler). Eski hal tam float esitligi idi: iki govde ayni siniri paylassa da koseler bit duzeyinde ayni degilse hicbiri donmuyordu — 1281 Avrupa'da 96 parca / 9.046 km² dikis boslugu (Riga, Bohemya).
- **YONTEM:** kose `(round(x,6), round(y,6))` kuantasi; kose basina `(sahip, f, t)` listesi; zaman ortusmesi VE farkli sahip varsa donmus.
- **AYAR:** HER ZAMAN. "TUKETICI DE AYNI KUANTAYI UYGULAR (seyrelt)": yalniz birini degistirmek kumeyi SESSIZCE bosaltir.
- **BAG:** `seyrelt` aynı kuantayi uygular (madde 12).
- **SUPHE:** iki ayri yerde ayni kuanta sabitinin (6 hane) elle senkron tutulmasi gerekiyor — sessiz bozulma riski (yorum bunu kendisi uyariyor). O(n^2) ic dongu degil ama `rs.sort`+ç ift dongu kose basina.

## 14. `havuza`, `mp_koord`, `v_parcalar`, `v_kid_ata` (6980–7087)
- **Ad:** IKI KADEMELI HAVUZ (YUK-SARTNAME.md · C/D) · `havuza`, `mp_koord`, `v_parcalar`, `v_kid_ata` (`vk` yamasi)
- **AMAC:** cikti boyutu: aynı halka farklı parcalarda tekrar yazilmasin (donemler.js 5.391 halkanin 2.717'si birebir tekrar; devletler_harita.js 22.042'nin 6.112'si); ardisik ayni nokta eleme (145.000 nokta, ~1,9 MB). `mp_koord` esigi `area<0.0002` (~2 km²): eski 0.008 (~79 km²) GERCEK ADALARI atiyordu (Patmos 34 km² vb.). `v_kid_ata`: tabi govdenin her parcasina kimlik (en cok alan kesen; esitlikte alfabetik; hic kesismeyen "" alir) — kimlik soz dizimi `[a-z0-9-]` zorunlu, yoksa `RuntimeError` (LAB/UMIT okuyucu sinavi 4 Ekim 2026: `uret_devirler.oku_pencere` dize ici virgulu anahtar sanar).
- **YONTEM:** halkalar JSON dizgisiyle tekillestirilip `halka_hav` indeksleri; parcalar `parca_hav`; sozlesme "ya tam ya hic" (window.PARCALAR + PARCA_HALKA ve DEVLET_PARCALAR + DEVLET_PARCA_HALKA).
- **AYAR:** HER ZAMAN.
- **BAG:** tuketiciler dilim disi; `v_parcalar` esigi `mp_koord`'u aynalar (ayni 0.0002).
- **SUPHE:** (a) JSON-dizgi ile tekillestirme belleği (sinirsiz `halka_ix`/`parca_ix`) — koşu boyunca buyur, tavan yok. (b) `v_kid_ata` kısıtı "okuyucu hata ayiklamak yerine uretecte kisit" (okuyucuya bagimli sozdizimi kisitı). (c) `mp_koord` esik sabiti iki yerde elle esitlenmis.

## 15. BOLGE (2. kademe merkez) toplu sinirlari — `bolgeler.js` (7090–7131)
- **Ad:** `asama("Bolge sinirlari (k1/k2 merkezleri)")`, `BOLGELER`, `_uyeler`, `k12_merkez`
- **AMAC:** Kural 6: her k3/k4 yerlesim en yakin k1/k2 merkeze bagli; merkez, uyelerinin peteklerini toplayan daha buyuk bolge siniri tasir. `k12_merkez` gecisli cozum (eski hali TEK HOP: k:3 adina bolge kaydi uretiyordu).
- **YONTEM:** `d/v` sahibi olan ve `k`'li her yerlesim icin zincir k:2'ye kadar; merkez basina `unary_union(PETEK_D[uyeler])`, `delikleri_doldur(kapat())∩KARA`, `mp_koord`. f/t merkezin Osmanli araligi. Çikti `data/bolgeler.js` (isci no varsa `_SUREC_DIZIN/bolgeler_<no>.js`) + URETIM_IZI.
- **AYAR:** HER ZAMAN. `MOTOR_SUREC_ISCI=2` ⇒ isci dosyasi yolu CANLI (`_ISCI_NO` dilim disi).
- **BAG:** `PETEK_D` DONMUS taban petekleri (`petek_epok` degil) — varlik epoku DEVRI bu katmana yansimaz; `_muhru_dogrula` + `girdi.izi_dogrula`.
- **SUPHE:** bolge siniri PETEK_D tabanindan, yani `kur:/bit:`/devir kurallarini YOKSAYAR (devri olan peteklerin zamansiz taban hali) — tek katman zamansiz. Yalniz Osmanli (d/v) merkezlerine bakar. Hata ayiklama izi yok.

## 16. Yabanci devlet govdeleri on hazirligi: `OLCU_KESIT`, `_eski_yabanci_taban` (7133–7224)
- **Ad:** `OLCU_KESIT` (9 kesit), `_eski_yabanci_taban()`, `_ESKI_YABANCI` — "CIKTI KIYASININ IKINCI EKSENI"
- **AMAC:** `URETIM_OLCU` ilk yazildiginda yalniz Osmanli `ao/av` olculuyordu; Kosu 5'te kor nokta kanitlandi (yetim emilim 78.368 km² + iran uceye bolunmesi 123 kayit; degisikliklerin ~%98'i yabanci govdelerde). Koordinator 3 Agustos: "bir denetim olctugu eksenin disinda hicbir sey soylemez." Eski cikti `devletler_harita.js` UZERINE YAZILMADAN ONCE okunur (yoksa kendi kendini karsilastirir).
- **YONTEM:** donemler.js'deki `URETIM_OLCU.yabanci` varsa hic acilmaz; yoksa eski `devletler_harita.js` (40 MB) okunup 9 kesit icin alan toplamini turetir (alan_km2 ile ayni yuvarlama).
- **AYAR:** HER ZAMAN (dosya varsa).
- **BAG:** `_ESKI_YABANCI` kıyas asamasinin tabani (dilim disi).
- **SUPHE:** yalniz olcum/karsilastirma icin koşan is; 40 MB dosyayi her koşuda (kuyruğa bagli) okur. `except Exception: pass` sessiz.

## 17. PUANLAMA KAPISI — `_puan_bolgesi` (7226–7380)
- **Ad:** "PUANLAMA KAPISI — 'BURASI KIMSENIN MI?' · 16 Agustos 2026" (BES-ALTYAPI ④), M-0706/M-0738/M-0740/M-0744, MOTOR-LEGO-0925 (25 Eylul 2026) · `PUAN_TAVAN_KM`, `PUAN_ESIK`, `PUAN_HALKA`, `PUAN_KAPALI`, `ORTME_DILIM_SAYISI=12`, `_PUAN_ONBELLEK`, `_puan_bolgesi`
- **AMAC:** Emre'nin beyani: bir yerlesimin bos cografyadaki etki alani sinirsiz olmamali, tavan 200 km; "0-200 km=4p, 200-300=2p, 300-400=1p, toplam >=4 BOYANIR". Puanlar AYNI devletin merkezlerinden toplanir (olculerek: A aynı devlet 45,20 M km² vs B herhangi 57,13 M km² — B "hangi devlete" sorusunu cevaplayamaz). Arazi olcutu yok (Anadolu 914.367 km², dokundugu 0 km²: kendi kendini sinirlar). Izgara basamagi 0,05° kabul edilmis odun. ORTME (occlusion, Emre 20-21 Agustos): 12 dilimde yalniz EN YAKIN sahip nokta puan verir.
- **YONTEM:** `_puan_bolgesi(did, aktif, gun)` devletin penceresini izgaraya (KV_ADIM) alir, her nokta yalniz kendi alt penceresine yazar (AYIKLAMA, LEGO-0925: kesinligin uc sarti, bit bit ayni), 200/300/400 km halkalariyla puan, >=4 ⇒ maske, kutu birlesimi poligon. Ortme burada UYGULANMIYOR (yalniz `_dolgu_kumesi`'nde); `_PUAN_ONBELLEK` (devlet, aktif kume)→poligon, `_tavanli(EZBER_TAVAN_PUAN)` varsayilan 0 (= sinirsiz).
- **AYAR:** `MOTOR_PUAN_KAPALI=1` ⇒ `PUAN_KAPALI=True` ⇒ bu kapi **OLU** (kesici kapi Kosu 40'ta calismaz; `_sk_pay` icinde de `not PUAN_KAPALI` sartiyla atlanir). `MOTOR_MO_PUAN_KAPISI=0` zaten MO gunlerinde kapıyı atlatir (ama MO_SINIR 9999 ile hepsi MO).
- **BAG:** `_sk_pay` (madde 25) okur; `_puan_bolgesi` govde asamasinda (dilim disi) ana kullanici.
- **SUPHE:** (a) **bu kapi Kosu 40'ta tamamen ÖLÜ ama kod, olculer ve bellek maliyeti hâlâ dosyada**; AYAR olu halde `_PUAN_ONBELLEK` bos kalir. (b) "yoğunluk kapisi" (puan) ile "yürüyüş" (MOTOR_YURUYUS; 40 saat ≈ 200 km) iki ayri mesafe olcusu (km vs saat) AYNI karari veriyor — YURUYUS_PUAN_HALKA ayri tanimli (madde 21). (c) Yorum kendi kendini cürüten bolgeler: "ARAZI OLCUTU YOK … kendi kendini sinirlar". (d) `_puan_bolgesi`: ortme anlatılmış ama uygulamasi sadece dolgu tarafinda (puan kesici kapi ortme UYGULAMIYOR) — iki puan mantigi (kesici vs ekleyici) farkli. (e) "yorumda 'koşu 5'te ONBELLEKSIZ olmasi istendi (M-0744)'": onbellek bugun eklenmis ama kosu 5'in gerekcesi hâlâ yorumda. (f) `:3568` gibi satir referansları BAYAT (yorum 7390 `_puan_bolgesi, :3568` ve 7588 `:3934-3937`).

## 18. EKLEYICI KAPI — `DOLGU_ACIK`, `DOLDURULABILIR_BOS`, `_DOLGU_ONBELLEK/_DOLGU_SAYAC` (7383–7441)
- **Ad:** "EKLEYICI KAPI — 'bos kalan yer, cevresi tek devletse ONUN'" — Emre 18 Agustos 2026 (iki hüküm: "puanlama kapisi ekleyici olsun" + "enklav ya da koridor bos alan ise etrafindaki bolgeye katilmali … tarihi gerceklik ise enklavlar YERINDE KALMALI … o bolgede baska bolgenin ya da yerlesimin KABILENIN etkisi yok ise katilabilir")
- **AMAC:** kesici kapidan farki: kesici kapi KESISIMDI (yalniz boyamayi kisitliyordu); bu kapi SAHIPLIK ATAR, PETEK DUZEYINDE çalışır (sahipsiz peteği kazanan devletin `aktif` kumesine ekler). Olculdu (`arac/olc_ekleyici.py`): bos duran 1,67 M km² (%11 A1, %70 dolgu noktasi peteği, %19 kayitsiz). Şart `bos:` alaninda: yalniz `hata` doldurulabilir; `devletsiz` 20 Agustos 2026'da CIKARILDI (Vâv el-Kebîr 'Osmanli idaresinin ULASAMADIGI alan', Tâzirbû 'FIILEN DEVLET DENETIMI DISINDAYDI'; "kapi arastirilmisi boyuyor, arastirilmamisi koruyordu — tam tersi olmali"); `kabile/veri-yok/insansiz` KATILMAZ.
- **YONTEM:** `DOLGU_ACIK = MOTOR_DOLGU_KAPALI != "1"`; `DOLDURULABILIR_BOS={"hata"}`; sayac sozlugu.
- **AYAR:** `MOTOR_DOLGU_KAPALI=1` ⇒ `DOLGU_ACIK=False` ⇒ ekleyici kapi **OLU** Kosu 40'ta (govde asamalarinda `if DOLGU_ACIK` dallari atlanir).
- **BAG:** `_dolgu_kumesi` (madde 20), govde asamalari (dilim disi: satir 8424, 8697, 9006, 9480); "Ⓑ dolgu" (`MOTOR_B_DOLGU=1`, satir ~10312) ayri mekanizma.
- **SUPHE:** (a) **Ekleyici kapi + "Ⓑ dolgu" (MOTOR_B_DOLGU=1, ayri blok) + `__BOSLUK__`/`bos_bolge` + A1 + kapama** — benzer "bos yeri doldur" isi icin 3+ mekanizma; Kosu 40'ta eski ekleyici kapi kapali, yerine B dolgu acik (dilim disi, DOGRULANMADI). (b) yorumda GERILIM acikca yazili: "Emre daha ONCE 'col bomboş duruyor' diye şikayet etmişti … bu düzeltme oraları yeniden boşaltıyor". (c) Yorum içi satir numaralari bayat (`:3568`, `:3934-3937`).

## 19. ÇÖLDE ESIK 4 → 8 — `COL_PUAN_ESIK`, `_col_icinde` (7443–7481)
- **Ad:** "COLDE ESIK 4 → 8 (MOTOR UC KALEM, 27 Agustos 2026)" · `COL_PUAN_ESIK=8`, `_COL_NOKTA_ONBELLEK`, `_col_icinde`
- **AMAC:** Emre `0034/H-0028`: "bu sahrada anlamsiz gereksiz fazladan boyanan yerlerin boyanmasini ENGELLEYECEK BIR YAPI kurmaliyiz." `COL_TAVAN_KM=300` iken k0=280/k3=280/k4=140 hepsi ALTINDA ⇒ col tavani 2356 noktanin 2283'unde YAPISAL OLARAK hicbir sey kesemiyordu ("ADI VARDI, ISLEVI YOKTU"); TAVAN_KM dusurulunce (k3→200, k4→100) 300'luk col tavani butunuyle devre disi kaldi. Cozum KAPIDA: col poligonu ICINDEKI bos peteği doldurmak icin 8 puan; sahipli col sehrinin (Gat, Murzuk, Calu) kendi petegine dokunmaz (1821-08-19 olcum: 15 dolgu noktasi, 7 duser, 8 surer).
- **YONTEM:** `COL.contains(noktalar[j])` bir kez olculup onbelleklenir.
- **AYAR:** `COL_PUAN_ESIK` sabit 8 (bayraksiz); kullanildigi `_dolgu_kumesi` ekleyici kapida ⇒ `MOTOR_DOLGU_KAPALI=1` ile **OLU**.
- **BAG:** `_dolgu_kumesi`; `COL` dilim disi.
- **SUPHE:** "col tavani" (COL_TAVAN_KM), "TAVAN_KM (k3/k4)", "col girinti" (`MOTOR_COL_GIRINTI_KAPALI=1`, dilim disi), "col ufuk" (`MOTOR_COL_UFUK_SAAT=0`) ve "COL_PUAN_ESIK" — çöl icin ardisik 4+ ayri mekanizma; biri digerinin açığını kapatmak icin eklenmis. Esik 8 "ELLE ayar" (olcum 1821-08-19 tek tarihten). Bu esik dolgu kapisi kapaliyken anlamsiz.

## 20. `_dolgu_satir_puan` + `_dolgu_kumesi` (7484–7791)
- **Ad:** `_dolgu_satir_puan` (SATIR YOLU, M-4537 19 Eylul 2026), `_dolgu_kumesi(a)`, `_DOLGU_SINA`, `MOTOR_DOLGU_YOL` (`satir|tam|sina`), koşular arasi onbellek `_ONB "dolgu"`
- **AMAC:** a gunu sahipsiz peteklerden hangisi hangi devlete katilir: Emre'nin 0-200/200-300/300-400 km = 4/2/1 puan, esik 4, puan AYNI devletin merkezlerinden; ÇEKISME = KATILMAMA (iki devlet de esigi gecip BERABERSE petek bos kalir). Sahip kimligi KADEMELI (27 Agustos 2026): "OSMANLI" tek kova iken Trablusgarp Karamanli ocakligi (tabi, 1711-1835) doneminde puan `v:` noktalardan, kazanan "dogrudan" yaziliyordu — 1600'de 791.491 km² koyu kirmizi (Libya dogrudan nokta sayisiyla ters orantili: 47→0 · 1→388.206 · 0→791.491). Simdi `OSMANLI`/`TABI` ayri. Emre 20 Agustos 2026: "Eger BOS COL ise, orada siyasi yapi/asiret yapisi yok ise, o zaman benim puanlamam boyasin" — `bos:"devletsiz"` ham halde geri alinsa 92 yerlesim (Riyad, Haril, Manama, Doha, Abu Dabi, Vladivostok, Matsumae, Taos Pueblo) boyanirdi: ayirt edici `tur:` alani (`bolge` 37 / yerlesim 92). DORDUNCU SINIF (KAPI KARNESI 1ff92b5, BULGULAR-DORDUNCU.md, commit 3240fb8): `_sahipli=YANLIS` olup `kur:/bit:` yuzunden sahnede olmayan noktalar hem devredilmiyor hem doldurulmuyor, PETEK DELIK (Nasiriye kur:1869; Emre'nin Basra-Bagdat sikayeti): 205.387 vs 69.198 petek-gun.
- **YONTEM:** `devir_kumesi(a)` disindaki noktalar `sahip_ix/sahip_kim` (osm_aktif ise TABI/OSMANLI, degilse s: d) veya `bos_ix` (bos=hata VEYA tur=bolge&bos in (None,"","devletsiz") VEYA dorduncu sinif). Her bos satir icin km halkalari (ya da YURUYUS saat halkalari `_YR_PUAN_SAAT`), 12 dilimde en yakin (ORTME), devlet bazli toplam; esik col icinde 8 degilse 4; tek kazanan ⇒ `out[did]`. Satir yolu yalniz puan verebilecek sutunlari hesaplar (KESIN AYNI iddiasi 3 madde), "tam" tam matris (bos x sahip ≈1400x2000), "sina" ikisini hesaplayip farki sayar. Koşular arasi onbellek `_ONB.anahtar("dolgu", _ONB_COL_TUZ, sahip, bos+yuruyus)`; deger satir KONUMUYLA saklanir.
- **AYAR:** `MOTOR_DOLGU_KAPALI=1` ⇒ cagrilmaz ⇒ **OLU**. `MOTOR_DOLGU_YOL` verilmemis (satir varsayilani). Not: `MOTOR_DOLGU_UFUK_GUN=10` bu islevde okunmuyor (anlasilmadi, dilim disi bir B dolgu parametresi olabilir).
- **BAG:** `_osm_aktif` (satir 8223, dilim disi tanim, sonradan), `devir_kumesi`, `_col_icinde`, `_YR_PUAN_SAAT`, `ORTME_DILIM_SAYISI`, `PUAN_HALKA`.
- **SUPHE:** (a) KOSU 40'TA OLU (DOLGU_KAPALI=1) ama ~340 satir kod, onbellek ve 3 yol. (b) `_dolgu_satir_puan` ile tam matris AYNI hesabi iki kez yazmis ("sina" yolu ikisini karsilastirmak icin; ölçüm/sınama amaçlı `_DOLGU_SINA`). (c) ÇEKISME = KATILMAMA vs "KESIN AYNI" iddiasi AVX2 makineye bagli ("Yeni makinede `MOTOR_DOLGU_YOL=sina` ile yeniden sinanir"). (d) ayni dosyada "C sinifi" ve "dorduncu sinif" gibi yorum-etiketli siniflar (C/dorduncu/enklav) kodda dayanak degil, kafa karistirici. (e) yorumda "§DOLGU_ACIK ustundeki C sinifi ~3 kat" — referans bayat. (f) `_osm_aktif` tanimi 8223'te (dilim sonrasi) — cagri sirasi calismada sorun yok ama okuma zor. (g) `bos:` degerleri ('hata','kabile','veri-yok','insansiz','devletsiz') veri sozlugu burada ve veri tarafinda ayri tutuluyor.

## 21. YURUYUS saat matrisi — ekleyici kapi `YURUYUS_PUAN_HALKA`, `_YR_PUAN_SAAT` (7794–7832)
- **Ad:** "EKLEYICI KAPI YURUYUS SAATINE — MOTOR_YURUYUS (KOSU13-OTOBUS)" · `YURUYUS_PUAN_HALKA=((40,4),(60,2),(80,1))`, `_YR_PUAN_SAAT`
- **AMAC:** duz km yerine YURUYUS SAATI: 0-40 s=4p, 40-60 s=2p, 60-80 s=1p ("MENZIL ② cevirimi"). Yorum: "60 ve 80 saat BIR KARAR SAYISIDIR; Emre'ye sorulu (taslak §6 soru 1)"; ortmede "yakin"=saat (taslak §6 soru 2 oneri). Sahipsiz aday noktadan 80 saatte duran yerel Dijkstra (`_yr_yerel_dijkstra` dilim disi) matrisi TARIHTEN BAGIMSIZ bir kez kurulur.
- **YONTEM:** aday = bos∈DOLDURULABILIR_BOS VEYA (tur=bolge&bos∈(None,"","devletsiz")) VEYA kur/bit olan her nokta; `_kvtohum` (izgara hucresi→tohumlar); her aday icin Dijkstra tavan `80*NEHIR_KM_SAAT`; `_YR_PUAN_SAAT[j] = {sahip ix: saat}`.
- **AYAR:** `MOTOR_YURUYUS=1` ⇒ CANLI (matris KURULUR). Ancak tek tuketicisi `_dolgu_kumesi` ve onbellek anahtari (satir 8813–8814): DOLGU_KAPALI=1 ile islevsel tuketim yok ama anahtar hash'ine giriyor.
- **BAG:** `_dolgu_kumesi`, `_dolgu_satir_puan`, onbellek anahtari (8814). `_yr_aday` DOLGU_ACIK'a BAKMAZ.
- **SUPHE:** (a) **Kosu 40'ta (DOLGU_KAPALI=1) matris yine de hesaplaniyor** (yorum asamasi "YURUYUS: ekleyici kapi saat matrisi", `nabiz` ilerleme) ve `repr(sorted(_YR_PUAN_SAAT.items()))` ile onbellek anahtarina giriyor (satir 8814) — bos hesap + gereksiz anahtar sismesi, dolgu kapali iken bile. (b) `60 ve 80 saat BIR KARAR SAYISIDIR … Emre'ye sorulu` — cevap bu dilimde yok (acik soru). (c) iki ayri puan halka tablosu (km ve saat) elle senkron.

## 22. MOTOR-SINIR-KISIT-1015 — hat hazirligi (7834–7990)
- **Ad:** "MOTOR-SINIR-KISIT-1015 — hatlarin hazirlanmasi" · `_SK_HATLAR`, `_SK_TARAF`, `_SK_SAYAC`, `_SK_CELISKI`, `_SK_SAHIP_EZBER`, `SINIR_KISIT`, `SINIR_KISIT_KM=80`, `SINIR_KISIT_SINIF=("C","D","E","F")`, `_sk_bk`
- **AMAC:** (hat sınıfi D/E/F'li) iki devlet arasindaki gercek sinir hattinin iki yaninda KISIT koridoru: hatla celisen petek payi hatta gore duzeltilir. Cok olcekli yaka (2/5/10/25/50/80 km) cunku tek olcek (80 km) Cenevre/Basel gibi siki kivrimlarda hattin kendisini de ortak sayiyordu (Alp kutusu ikinci surum, kalan 6 birimin 4'u). Kuyruk zarfi (SINIR_KISIT_KUYRUK_KM), "TERS YAKA SIGORTASI" (sol_taraf ters yazilmis olabilir), tek yanli tampon gecersiz ⇒ `temiz`, yine dusse HAT ATLANIR "7-8 saatlik kosu bir hat yuzunden olmez", sinir sayilir/yazdirilir.
- **YONTEM:** `_SK_HAM` hatlari; sinif/taraf/boya/zaman penceresi/geometri filtreleri (`_sk_atla` sayaci); denetle.py `_d8_izdusum` ile AYNI yerel eşit uzaklık projeksiyonu ve SOL/SAG kuralı; hat kayitina yaka, ortak, kuyruk, degme, aday hucreler (statik PETEK_D koridora degen), kirilma gunleri (`gunler`: hat f/t + aday hucrelerin s/d/v f/t, kur/bit); komsu hatlar (genis kutular kesisen).
- **AYAR:** `MOTOR_SINIR_KISIT=1` ⇒ CANLI.
- **BAG:** `_sk_*` islevleri ve `_sinir_kisit_uygula` (madde 23–25); govde asamasi (dilim disi). Osmanli tarafı v1 kapsam disi.
- **SUPHE:** (a) tam bir "ikinci sinir mekanizmasi": petek/Voronoi sinirini, hat verisi ile sonradan DUZELTIYOR (yama kategorisi). (b) denetle.py ile AYNI projeksiyon/yon kurali iki dosyada elle senkron ("AYNI"). (c) Osmanli taraflari kapsam disi: Osmanli sinirlari hatlara gore duzeltilmiyor (v1). (d) Ters yaka sigortasi esiği 3 (sg>ss ve sg>=3) ampirik. (e) `_sk_pad` ve `_SK_HAM`, `_SK_TABI`, `_HARITA_ALT`, `_TUM_AGAC` dilim disi. (f) `_SK_CELISKI`: koridorda sahipli (aktif) noktasi KARSI yakada kalan hatlarin sozlugu — olcum amacli.

## 23. Sinir kisit yardimcilari (7993–8059)
- **Ad:** `_sk_tabi_mi`, `_sk_aktif_hatlar`, `_sk_karsi`, `_sk_sahipler`, `_sk_gecerli_komsu`, `_sk_imza`, `_sk_parcalar`, `_sk_km2`, `_sk_degiyor`, `_sk_tohumlu`
- **AMAC:** o gun gecerli ve iki tarafi da TABI OLMAYAN hatlari bulmak; donem birlestirme imzasi (`_sk_imza`: hat kumesi + komsu hat kumesi + karsi tarafin koridordaki hucreleri) — bayrak kapaliyken hic cagrilmaz; "parca hatta >= ~2 km boyunca degiyor mu (nokta teması ve eksklav SAYILMAZ)".
- **AYAR:** `SINIR_KISIT=1` CANLI.
- **BAG:** `_gun_sahipleri` (dilim disi); `_SK_TABI` ($tabi donemler).
- **SUPHE:** `_sk_gecerli_komsu` "tabi suzgeci UYGULANMAZ" (bolge paylasimi yalniz geometri/tarih) ama aktif hatlar tabi suzer — iki farkli kume kurali kasitli. `_SK_SAHIP_EZBER` tavanli (EZBER_TAVAN).

## 24. `_sk_bolge`, `_sk_kis` — hatlar arasi paylasim (8059–8097)
- **Ad:** `_sk_bolge(L, a)`, `_SK_BOLGE_EZBER`, `_SK_EZBER_KILIT`
- **AMAC:** "küçük ve cok hatli ulkelerde (Isvicre) koridorlar ust uste biner, 'cakisan yeri at' kurali orada kisiti IPTAL ediyordu (Alp kutusu ilk surum)": her yer o gun gecerli komsu hatlardan EN YAKININA aittir (cizgi Voronoi'si, L'nin km izdusumunde, 5 km segmentize noktalarindan `shapely.voronoi_polygons`); anahtar geometri+gecerli komsu kumesi ⇒ hattin IKI tarafi AYNI bolgeyi gorur (simetri sarti).
- **AYAR:** `SINIR_KISIT=1` CANLI.
- **BAG:** `_sk_pay` okur.
- **SUPHE:** `_SK_BOLGE_EZBER` ve `_SK_EZBER_KILIT` (threading.Lock) var ⇒ coklu is parcacigi/surec ortami; sinirsiz ezber (tavan yok) — hat x komsu kumesi sayisiyla sinirli.

## 25. `_sk_pay`, `_sinir_kisit_uygula`, `_sk_ic` (8100–8219)
- **Ad:** `_sk_pay(L,X,Y,a,kim,pe)`, `_sinir_kisit_uygula(did, aktif, a, g)`, `_sk_ic` — MOTOR-SINIR-KISIT-1015
- **AMAC:** govdeyi o gun gecerli D/E/F hatlarina gore duzeltmek. ① KES: did'in hattin KARSI yakasindaki koridora (L bolgesinde) dusen ve hatta >=2 km degen parcalari + K'nin ekleyecegi payi cikar, kesimden sonra koridor otesinde kopuk kalan didi-nokta-taşımayan kuyruk da. ② EKLE: K'nin peteklerinden did yakasina dusen pay (K'nin PUAN bolgesiyle). Simetri: HEM X (keser) HEM Y (ekler) `_sk_pay`'i ayni girdilerle cagirir ⇒ kesilen = eklenen, binme yok. MUAFIYET: hatta degmeyen parca (eksklav/deniz asiri), aynı hattin iki koridorunun cakistigi yer (menderes), tabi taraf, o gun sahnede olmayan karsi taraf. Hata ⇒ gövde DEGISMEDEN doner, sayilir ("7-8 saatlik kosu dusmesin").
- **YONTEM:** `_sk_pay`: T = Y yakasi ∩ L bolgesi; X'in 400 km icindeki peteklerinden T'ye degenlerin birlesimi U; `not PUAN_KAPALI and not _mo_puan_atla(a)` ise `U ∩ _puan_bolgesi(X, js, a)`; U∩T parcalarindan hatta >=2 km degenler + kuyruktaki tohumsuz bitişik "yetim" parcalar (`_SK_SAYAC["yetim_ekle"]`). `_sk_ic`: `petek_epok(a)` ile gunun petekleri; hat listesi filtre (`karsi_yok`); kesme/ekle `_SK_SAYAC` (`kesilen_km2`, `eklenen_km2`, `yetim_kes`, `hata`).
- **AYAR:** `MOTOR_SINIR_KISIT=1` ⇒ CANLI; `PUAN_KAPALI=1` ⇒ `_sk_pay` icinde puan kolu **OLU** (kesme/ekleme puan-maskesiz yapilir).
- **BAG:** `petek_epok(a)` (guncel petekler), `_gun_sahipleri`, `_puan_bolgesi` (olu), govdenin `aktif` kumesi (`aks`), `_SK_CELISKI`.
- **SUPHE:** (a) `_sinir_kisit_uygula` her govde-dönem icin `_gun_sahipleri(a)` ve `petek_epok(a)` yeniden cagirir (onbellekli ama hata yutan `except Exception: return g`). (b) `_SK_SAYAC["hata"]` sayilir, ornek 5 adet; kosu gecer — sessiz-ama-sayilan hata. (c) kesilen km² `_sk_km2(hl[0], ...)` yalniz ILK hattin projeksiyonunda olculur (yaklasik; olcum/log amacli). (d) `_sk_pay` kuyruk "yetim_ekle" ile `_sinir_kisit_uygula` ① "yetim_kes" birbirini dengeleme amacli simetrik ikinci mekanizma — yama ustune yama izlenimi (tohum tasimayan kuyruk parcasi sorunu). (e) "yorumda MUAFIYET" listesi uzun; "karsi taraf sahnede degil" ⇒ hat uygulanmaz (`karsi_yok`).

## 26. Dilim sonu: `asama("Yabanci devlet govdeleri")`, `_osm_aktif` (8222–8225)
- Yalniz asama basligi ve `_osm_aktif(y, a)` tanimi (d veya v donemi o gun aktif mi). `_dolgu_kumesi` bunu kullanir (sonradan tanimli). Dilim sınırı 8222.
- **SUPHE:** `_osm_aktif` dilimin bitis satirinda; daha onceki `_dolgu_kumesi`'nin (7575) dogru calismasi modul yuklemesi sirasi ile (tanimdan sonra cagrilir) garanti.

---

## Liste (1): Bu dilimde tanimlanan surec ici ezberler ve kosular arasi onbellek

Surec ici (kosu ici) ezberler:
| Ad | Anahtar → deger | Tavan |
|---|---|---|
| `_VARLIK_ONBELLEK` | devir-anahtari (frozenset / ("MO",devir) / ("BANT",bant,…) / +("ENKLAV",enk)) → hucre listesi | YOK (sinirsiz; ~40 binden fazla hucre listesi, buyuk geometri; en agir) |
| `_VARLIK_DEVIR`, `_VARLIK_PAY` | ayni anahtar → kayit/sayac | YOK |
| `_BANT_TABAN_ONB` | bant → hucre listesi | YOK (bant sayisiyla sinirli) |
| `_KUS_ONBELLEK` | gun → frozenset | YOK (~1200+ gun) |
| `_KUS_KARAR` | onbellek anahtari (WKB ozetleri) → bool | YOK |
| `_KUS_BIL_KARAR` | (bilesen, sahipli komsu) → bool | YOK |
| `_IC_ONBELLEK`, `_CEP_ONBELLEK` | petek indeksi → geometri | YOK (petek sayisiyla sinirli) |
| `_DEVIR_EZBER` | gun → frozenset | `_tavanli(EZBER_TAVAN)` — EZBER_TAVAN varsayilan 128 (Kosu 40'ta `MOTOR_EZBER_TAVAN` verilmemis ⇒ 128); satir 5663 |
| `_ORTUK_KUR` | indeks → gun/None | YOK (YERLER ile sinirli) |
| `_ENKLAV_GUN_EZBER` | gun → frozenset | YOK |
| `_SERBEST_ONBELLEK` | (sahipsiz kume, devir) → geometri | YOK |
| `_PUAN_ONBELLEK` | (devlet, aktif kume) → poligon | `_tavanli(EZBER_TAVAN_PUAN)` — varsayilan 0 (= sinirsiz?) (OLU kapi, Kosu 40'ta bos) |
| `_DOLGU_ONBELLEK` | gun → {devlet: frozenset} | YOK (OLU: dolgu kapali) |
| `_COL_NOKTA_ONBELLEK` | indeks → bool | YOK |
| `_SK_SAHIP_EZBER` | gun → frozenset | `_tavanli(EZBER_TAVAN)` |
| `_SK_BOLGE_EZBER` | (hat, komsu kumesi) → geometri | YOK (kilitli) |
| `_KKB_NOKTA_GUN`, `_kkb_bil_ez` | nokta→gunler; devir→bilesenler | `_kkb_bil_ez` 3'ten buyukse temizlenir; digeri YOK |
| `halka_ix`/`parca_ix`/`SRB_IX`/`SRB_HAVUZ`/`SRB_U` | JSON dizgi → indeks | YOK (cikti boyuyla sinirli) |
| `_ESKI_YABANCI` | tek kez | – |

Koşular arasi (disk) onbellek katmani (`_ONB`):
- `_ONB.oku/yaz("k1", _K1_KIYI)` — `KARA.boundary.buffer(0.01)` tamponu (anahtar KARA ozeti).
- `_ONB.oku/yaz("kusat", anahtar)` — kusatma karari (anahtar: `_ONB_KUS_TUZ` + petek WKB + sahipli komsu WKB'leri).
- `_ONB.oku/yaz("dolgu", anahtar)` — dolgu gun sonucu (OLU: dolgu kapali).
- Tuz dosyasi: `_ONB_KUS_TUZ` (kiyi tamponu ozeti); `_ONB_COL_TUZ` (col + su tamponu, dilim disi satir 4934).
- `MOTOR_*` ortam degiskenleri onbellek tuzuna giriyor ("Env degiskeni onbellek tuzuna girer" notlari).

## Liste (2): Girdi dosyalari ve cikti dosyalari (bu dilimde)

Girdi (disaridan okunan, dilim icinde acik):
- `data/donemler.js` (yalniz `window.URETIM_OLCU` kunyesi, `_eski_yabanci_taban`), `data/devletler_harita.js` (40 MB; eski `DEVLET_PARCALAR`/`DEVLET_HARITA`)
- Hat verisi `_SK_HAM` (yukleyen dilim disi; "geometri_kaynagi", "sinif", "taraflar", "sol_taraf", "hat", "f", "t") 
- `_BANT_HAM`, `_YR_SAHIP`, `_kvtohum`, `_YR_BUTCE`, `KV_ADIM`, `_kvx0` vb. dilim disi izgara; `YERLER`, `PETEK_D`, `noktalar`, `KARA`, `COL`, `_SU_TAMPON`, `_ENKLAV` dilim disi
- Onbellek dizini `_ONB` (disk)

Cikti:
- `data/bolgeler.js` (isci ise `_SUREC_DIZIN/bolgeler_<no>.js`; `MOTOR_SUREC_ISCI=2` ⇒ isci yolu CANLI) — `window.BOLGELER` + `window.URETIM_IZI`
- `window.SERBEST`/"sb" hat havuzu (`SRB_HAVUZ/SRB_U`) — dilim disinda yazilir; bu dilim yalniz hazirlar
- Cikti sozlesmesi `PARCALAR/PARCA_HALKA`, `DEVLET_PARCALAR/DEVLET_PARCA_HALKA`: dilim yalniz `havuza`/`mp_koord`/`seyrelt` yardimcilarini tanimliyor
- Konsol: kusatilmislik devir listesi, KKB ozeti, 'varlik epoklari' ozeti, saat matrisi ozeti, `SINIR-KISIT` ozeti

---

## En onemli supheler (ozet)
1. `MOTOR_MO_SINIR=9999-12-31` yuzunden "MO" kurallari (MO sahnesi, MO izgara disi SAHIPSIZ, puan atlama) Kosu 40'ta butun CE tarihlerinde aktif; yorumlar "CE'de ikisi de bos" diyor — CE'de petek_epok'un Emre hukmu olan PAYLASTIRILDI dali pratikte ölü.
2. `MOTOR_DOLGU_KAPALI=1` ile ekleyici kapi + `COL_PUAN_ESIK=8` + `_dolgu_*` OLU, yine de `MOTOR_YURUYUS` bayragi 80 saatlik saat matrisini (yerel Dijkstra, tum aday noktalar) kuruyor ve onbellek anahtarina sokuyor (bos hesap).
3. `MOTOR_PUAN_KAPALI=1` ile puan kapisi (`_puan_bolgesi`) OLU ama sinir kisitinda hala cagriliyor gibi gorunuyor (yalniz `not PUAN_KAPALI` korumasi) — "kesici kapi", "ekleyici kapi", "col esigi", "yuruyus saati" ve "Ⓑ dolgu" boş-yer-doldurma icin 4–5 ayri mekanizma.
4. Kusatma icin tek-aday + bilesen + `kasitli_bosluk` + `_KUS_BEKLENEN` elle yazilmis 159 adlik beyaz liste (sinirsiz buyuyen) ve ayni karar mantiginin onbellekli/onbelleksiz iki kopyasi; ayrica 4 ayri "komsu/degme" tanimi (0,02° buffer, ≥~1 km ortak kenar, 0,002° pay, ±3 izgara kutusu).
5. `MOTOR-SINIR-KISIT` ve `KOMSU-KUR-BOL` "ust kume" mantigi ile `petek_epok` kuralini kopyaliyor (alici = komsu, zarf +0,02/0,32°); petek_epok kurali veya hat verisi degisirse sessiz sapma; hata yutan `except Exception: return g` (sayilir ama kosu gecer).
