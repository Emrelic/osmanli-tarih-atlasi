# KAMP-ORTACAG — K7 (MS 476 – 1281) · BİRİNCİ TUR

**Oturum:** KAMP-ORTACAG (EMRELIC, Opus) · **Taban:** `origin/main` `d147f8a5` (worktree `C:\atlas-kamport`, dal `kamp-ortacag-1010`)
**Şartname:** `oturumlar/KAMPANYA-DUNYA-1010.md` §2 K7 · §3 şema · §4 altı kural · §5 birinci tur.
🔴 **Hiçbir `data/*.js` dosyasına dokunulmadı.** Atlas yalnız SALT OKUNDU (künye taraması + şehir yakınlık ölçümü).
**Dosyalar:** `denetim/KAMP-ORTACAG-POLITY.csv` · `-KRONOLOJI.csv` · `-SEHIR.csv` · bu belge.

---

## SONUÇ (sayıyla)
| | Sayı | Not |
|---|---|---|
| Evrende ZATEN VAR olan künye | **278** | `f` < 1281 ve `t` > 476. Ölçüldü, bu turda yeniden YAZILMADI |
| **YENİ polity** (dizinde karşılığı yok) | **39** | f yazılı 23 · t yazılı 25 · ikisi yazılı 19 |
| └ f ve t'si kaynaklı olup iki ucu da bir maddeye oturan | **19 / 19** | 6 uç ortak maddeyle (Verdun 843 · 582 bölünmesi · 751) |
| └ yalnız `bulunamadı` / yüzyıl olarak kalan | **10** | adlarıyla §4'te |
| **Kronoloji maddesi** | **46** | `harita_degisimi` EVET 42 · HAYIR 4 (hanedan değişimi/unvan) |
| **Şehir** (ilk kayıt tarihiyle) | **25** | hepsi atlasta VAR, hiçbirinde `kur:` YOK ⇒ §3 |
| Şehir — `bulunamadı` | **9** | adlarıyla §4'te |

## 1. Kaynak seti ve kronoloji sistemi
- **İslâm dünyası, Arabistan, bozkır: TDV İslâm Ansiklopedisi birincil** (§4 kural 2). 31 madde çekildi.
  Slug'lar **sitenin kendi öneri uç noktasıyla** bulundu: `/ajax_search_auto.php?sp=aa` başlık, `sp=t` tam metin; sayfa JS'inden okundu. Her aday `GET` ile doğrulandı (`D211⑨`).
- **Avrupa: Treccani** (Istituto dell'Enciclopedia Italiana — akademik ansiklopedi, kırmızı listede değil). 43 madde denendi.
  **Britannica `403`** verdi, kullanılamadı. Treccani'de 9 slug ana sayfaya yönlendi; bunlar "yok" sayıldı ve dosyaları silindi.
- **Koordinat:**
  - İslâm şehirleri: al-Ṯurayyā (`places.geojson`).
  - Avrupa ve Kuzey Afrika: GeoNames (`HUKUM §6`: modern yerleşim için yeter). Ad eşleşmesiyle seçildi; ilk denemede 6 yanlış seçim çıktı ve düzeltildi.
  - Getty TGN denendi, sonuçları gürültülüydü, kullanılmadı.
- **Takvim:** 1582 öncesi bütün tarihler **Jülyen** (kaynakların verdiği biçim). Mezopotamya tipi yüksek/orta/düşük kronoloji sorunu bu dilimde YOK.
- **Hicrî kural** (`CLAUDE.md §4`): hicrî yıl ∩ kaynağın mîlâdî yılı ∩ (varsa) ay ⇒ **kesişimin ilk günü**. Hesap tablo usulü ±1-2 gün.
  **Tablo bir TDV günüyle sınandı ve tuttu:** 1 Şevval 308 = 921-02-13 ⇒ 8 Şevval = 921-02-20; TDV mehdiye: «8 Şevval 308 (20 Şubat 921)» ✓.
  Dokuz şehir ve bir polity ucu bu kuralla yazıldı.
- **Kesinlik değerleri:** `gun` · `ay` · `yil` · `yil-hicri` · `yaklasik` (kaynak "ca./intorno") · `gelenek` (kaynak "secondo la tradizione") · `alt-sinir` · `yuzyil` · `belirsiz` · `evren-oncesi`.

## 2. Bulgular — atlası ilgilendirenler (hüküm DEĞİL, ölçüm)
1. 🔴 **25 şehrin 25'i atlasta nokta olarak VAR ama hiçbirinde `kur:` YOK.**
   - İlk dönemleri çoğunlukla 1281-01-01'de başlıyor (Kahire 1252, Bağdat 1258, Merakeş 1147, Rabat 1150 istisna).
   - Motor `kur:` yoksa noktayı **1000-01-01'den itibaren** sahnede tutuyor (LAB-KUR-SAYIM `§0`).
   - ⇒ Bu dosyanın `ILK_KAYIT_TARIHI` sütunu, 1000 sonrası kurulan Kal'a (1007), Merakeş (1062), Bicâye (1065), Rabat (1150), Münih, Lübeck, Berlin, Dresden, Tallinn için **`kur:` ADAYIDIR**.
   - 1000 öncesi kurulanlar (Basra … Kahire) için `kur:` ufuktan önce kalıyor; etkisi yok.
2. 🟡 **Basra koordinatı:** al-Ṯurayyā'nın ortaçağ Basra'sı atlastaki Basra noktasına **13,4 km**. LAB eşiğine göre (Ṯ tek tanıkken ≥10 km) bu **SİNYAL**. Ortaçağ Basra'sı bugünkü şehrin güneybatısında olabilir; ikinci tanık gerekir. Ölçüm, hüküm değil.
3. 🟡 **Kal'atü Benî Hammâd atlasta YOK** (en yakın nokta Mesîle, 25,9 km). Hammâdî başşehri 1007-1090.
4. 🟡 **Tâhert:** TDV iki şehir anlatıyor (Tâhertülkadîme = Roma Tingartia, Tâhertülhadîse 10 km batıda, 761 sonrası). Atlastaki `Tâhert (Tiaret)` Ṯ noktasına 3,9 km — **hangisi olduğu ölçülemedi.**
5. 🟡 **Bagratlı Ermeni:** Treccani «nell'863 riconobbe come principe vassallo Ashot» diyor, mevcut `ani-bagratli-kralligi` künyesi f **884**. Prenslik (863) ↔ krallık (884) ayrımı olabilir; **ayrıştırılmadı**, mevcut künyeye dokunulmadı.
6. Mevcut künyelerle **ardıl/öncül dikişleri tutuyor:**
   - `bati-frank` t 987 = `fransa` f 987 · `dogu-frank` t 962 = `almanya` f 962 · `asturya` t 910 = `leon-kralligi` f 910 · `ikinci-gokturk` t 745 = `uygur-kaganligi` f 745.
   - Hepsi kaynaklı uç; künye günü kaynak alınmadı, yalnız karşılaştırıldı.

## 3. Kaynak çelişkileri ve şüpheli değerler — BEYAN (taraf seçilmedi ya da gerekçeyle seçildi)
| Kalem | Ne | Yapılan |
|---|---|---|
| Ostrogot f | Treccani «Teodorico scese in Italia (498)», aynı cümle Odoakr'ın yenilgisini anlatıyor | 498 yazıldı, ⚠️ ikinci kaynakla ölçülmedi |
| Merovenj f | TDV Chlodvig «481-511» ↔ Treccani Childerich «m. 482 circa» | TDV esas (§4) |
| Karoling f | Treccani `merovingi` «deposto nel 751» ↔ `carolingi` «(752-987)» — aynı ansiklopedi, 1 yıl | 751 alındı (tahttan indirme olayı) |
| Sırp f | Treccani «Stefano di Nemanja (1151-95)» | 1151 yazıldı, ⚠️ teyitsiz |
| Mercia t | Treccani «si concluse nel 957» | 957 yazıldı, ⚠️ teyitsiz |
| Trondheim | Treccani «fondata nel 996» | 996, ⚠️ teyitsiz |
| Burgond f | «Le prime attestazioni archeologiche … 443, quando furono insediati in Sapaudia» | `D211⑧`: cümle YERLEŞİMİ tarihliyor ⇒ tarihî olay olarak alındı |
| Gassânî t | TDV yıkılışı yazmıyor; son hükümdar Yermük'te | t = Yermük günü (TDV gün), TANIK olarak işaretli |
| Basra · Vâsıt · Merakeş | TDV'de 2-3 rivayet | en erken rivayet alındı, ötekiler `not`ta |
| Zencan (önceki iş) | TDV «Tekiş 614’te» — 614'te hükümdar Alâeddin Muhammed | bu dilimde yeniden kullanılmadı |

## 4. `bulunamadı` — ADIYLA
**Polity (10):**
- Süev (f/t; ilhak yalnız 567-586 aralığıyla) · İtalya Krallığı 888-962 (Treccani slug yönlendi; yalnız 924 tanığı)
- Wessex (yalnız «6° sec.») · Northumbria (kuruluş cümlesi yılsız) · Oğuz Yabguluğu (yılsız)
- **Aksum** (TDV `habesistan` gövdesi ÇEKİLEMEDİ — yalnız sayfa iskeleti, `D211④`: çekilemedi ≠ yok · Treccani `aksum` yılsız)
- Abhazya Krallığı (TDV 302, Treccani yönlendi) · Vaspurakan (TDV başlık araması 0) · Alan Krallığı · Eftalit (yalnız «IV-VI. yüzyıl»)

**Polity ucu (f ya da t'si eksik, öteki yazılı):** Amalfi f · Mercia f · Batı Göktürk t · Türgiş f · Karluk t · Kinde t · Lahmî/Gassânî/Himyerî f (evren öncesi).

**Şehir (9):**
- Moskova · Stockholm · Novgorod · Krakov (Treccani gövdesinde yıl yok)
- Riga · Amsterdam · Prag (yalnız yüzyıl)
- Fes (TDV `fes` = başlık maddesi, şehir değil — `D211②`)
- Cezayir (ilk kayıt antik Icosium ⇒ evren DIŞI)

## 5. YARIM BIRAKILAN YERLER — sınırın adı
1. **Doğu ve Güney Asya** (Tang · Song · Goryeo · Heian · Hint krallıkları): bu turda HİÇ BAKILMADI. Tang 618-907 K6 ile örtüşüyor; `song`, `goryeo` ve `liao-hanedani` künyeleri dizinde VAR.
2. **Sahra altı Afrika** (Gana, Kanem ve Mali dizinde var; Aksum ölçülemedi) · **Amerika** · **Okyanusya** — bakılmadı.
3. **Mevcut 278 künyenin f/t'si yeniden ölçülmedi.** Bu tur yalnız EKSİK olanları kurdu. Hiç anılmayan 228 künye K0'ın evreni.
4. Kafkasya'nın küçük birimleri (Tao-Klarceti, Kaheti-Hereti, Şirvan öncesi), Anglo-Sakson'un öteki krallıkları (Kent, Essex, Sussex, East Anglia), Lombard'ın öteki dukalıkları (Spoleto, Friuli), göç dönemi Rugi ve Heruli birimleri — bakılmadı.

## 6. Hijyen
Çekilen ham metinler `scratchpad/KAMP-ORTACAG/{tdv,trec}/` altında. TDV ve Treccani istekleri sıralı ve yavaş (1,3–1,5 sn). 429/503 alınmadı.
Yeniden üretim: `scratchpad/KAMP-ORTACAG/uret.py <çıktı> <worktree>`. Tek bir betik, bütün satırlar içinde ve okunabilir.


---

## 7. İKİNCİ TUR (11 Ekim 2026) — düzeltmeler · dikiş · ÇİFT OTURUM
**Güncel sayılar:** POLITY **45** (f yazılı 26 · t yazılı 29) · KRONOLOJİ **52** (EVET 48) · ŞEHİR **27** satır, ilk kaydı K7 evreninde olan **25**.

### 7.1 🔴 DÜZELTME — iki şehirde ilk kaydı yanlış yazmıştım
| Şehir | İlk teslim | Doğrusu | Kaynak |
|---|---|---|---|
| Bağdat | 762 | **evren ÖNCESİ** (yıl yok, Hammurabi saltanatı MÖ 1792-1750) | TDV `bagdat`: «Hammurabi (m.ö. 1792-1750) kanunlarında Bagdadu şehrinden bahsedilir» |
| Sâmerrâ | 836 | **evren ÖNCESİ** (Asur «Sur-Marrati», Grek «Souma»; yıl bu maddede yok) | TDV `samerra` |

762 ve 836 KURULUŞ yılları (Abbâsî şehirleri), Emre'nin kuralındaki «ilk tarihî kayıt» DEĞİL. İkisi K1'e devir. Hata, kuruluş cümlesini ilk kayıt sanmamdan doğdu.
Yerlerine: **Hille** 1101-10-26 (TDV `kufe`: «495 (1101-1102) yılında Hille’nin yeni bir merkez olarak kurulmasıyla») · **Gdańsk** 997 (Treccani: «Ricordata la prima volta nel 997»).
🟡 **Basra — SINIR VAKASI:** TDV Basra'yı Keldânî Teredon / Sâsânî Vehiştâbâd Erdeşîr'in «harabeleri üzerinde» kurulmuş yazıyor. Aynı yerin antik kaydı «ilk kayıt» sayılırsa evren dışı, yeni şehir sayılırsa 635. **Hüküm koordinatörün.**
🟡 **Avar:** TDV `avarlar` DAĞISTAN Avarlarının maddesi. 558-805 yalnız parantez içinde Hakanlığı tarihliyor; rakam Hakanlığı tarihliyor (`D211⑧` ✓), ama madde Hakanlık maddesi değil. Not olarak eklendi.

### 7.2 DİKİŞ — «komşularla arasında kalan ne var?» (koordinatörün sorusu) — ÖLÇÜLDÜ
**K4 / K7 (476):** Odoakr Krallığı (476-493) · Soissons bölgesi (Syagrius, 464-486) — ikisi de dizinde YOKTU ⇒ eklendi (Treccani). Batı Roma'nın kendisi de YOK; o K4'ün kalemi.
⚠️ Dikiş bir tutarsızlık gösterdi: Odoakr t **493** ↔ ardıl Ostrogot f **498** (Treccani). Aynı ansiklopedinin iki maddesi arasında **5 yıllık BOŞLUK** ⇒ Ostrogot 498 şüphesi güçlendi (ikinci kaynak hâlâ yok).
**K5 / K7 (651, Sâsânî ardılları):** Dâbûyîler (son 144/761) · Türkşâhîler · Hindûşâhîler (~850-1026) · Zunbil — dördü de YOKTU ⇒ eklendi (TDV). Zunbil ve Türkşâhî'nin f/t'si bulunamadı. Karinvand, Mesmugân ve Soğd prenslikleri ARANMADI (ikinci kaynak turu).
**1281 / ÇEKİRDEK:** künye `f` = `1281-01-01` (PENCERE UCU, kökeni ölçülmemiş) olan **121 künye** var; yalnız **4**'ü bunu `ic_not_f` ile beyan ediyor (`*`). Bunlar «1281'de sahnede duran ama nereden geldiği yazılmamış» devletler:
- **kuzey-amerika** (47): abenaki · aleut · alutiiq · apaci-ovalar · beothuk · cherokee · choctaw · cikasav · dene · etowah · hayda · hidatsa · kalusa · karga · klamath · kri · lakota · maliseet · mandan · meskalero-apaci · miami · mikmak · mohave · moundville · natchez · navaho · nez-perce · nuu-cah-nulth · nuxalk · occaneechi · ojibwe · pavni · payut · ponka · sahaptin · sauk · savni · secwepemc · sosoni · spiro · tlingit · ute · vendat · wicita · yavapai · yupik · zuni
- **bati-afrika** (15): adar · birom-plato · borgu · dan-guro · eve-notse · gambiya-mandinka · gurma · jukun-kvararafa · kru-grebo · mossi-vagadugu · nijer-deltasi · tiv · tuareg-adag · tuareg-ivellemmedan · zerma
- **guneydogu-asya** (11): arakan · banda-adalari · gova-makassar · malay-sultanliklari · pagaruyung · palembang-sultanligi · samudra-pasai · san-devletleri · ternate-sultanligi* · tidore-sultanligi · timor-beylikleri
- **dogu-afrika** (10): antandroy · betsileo · fipa-nyakyusa · kamba · kaonde-ila · kenya-kuzey-halklari · makdisu-sultanligi · nyamvezi · sidamo-kralliklari · vollayta-kralligi
- **guney-amerika** (9): arua · charrua · chimu-krallik · colla-krallik · diaguita-calchaqui-konfederasyonu · lupaqa-krallik · mapuche-araukanya · muisca-konfederasyonu · ranquel
- **guney-asya** (7): ahom · kalikut · ladak · manipur · sind · travankur · yafna
- **orta-afrika** (5): banda-gbaya · kanem-tubu · matamba · tio · tubu-tibesti
- **guney-afrika** (4): herero · manica · nama-orlam · xhosa
- **orta-amerika-karayip** (3): nahua-sehir-devletleri · tututepec-krallik · zapotek-krallik
- **kafkasya** (2): cerkez · kabartay
- **kuzey-afrika** (2): tuareg-accer · tuareg-ahaggar
- **orta-avrupa** (2): baden* · saksonya*
- **anadolu** (1): cemisgezek-beyligi
- **arabistan** (1): nebhani
- **dogu-avrupa** (1): teuton-sovalyeleri*
- **iran** (1): hurmuz-sultanligi

⇒ **K7'nin sorumluluğuna düşen 12 künye** (Avrupa · İslâm · Kafkasya): cerkez · kabartay · tuareg-accer · tuareg-ahaggar · baden* · saksonya* · cemisgezek-beyligi · nebhani · teuton-sovalyeleri* · hurmuz-sultanligi · sind · makdisu-sultanligi. Bunların 1281 öncesi kökeni ÜÇÜNCÜ TUR kalemi.
Geri kalan 109 künye başka dilimlerin ya da K9'un: Amerika 47 · Sahra altı 34 · GD Asya 11 · Güney Amerika 9 · öteki.

### 7.3 🔴 ÇİFT OTURUM — aynı dilim, aynı ad, aynı dosya adları
Tahtada İKİ «KAMP-ORTACAG» teslimi var:
- **M-5925** (10 Ekim 18:15) BENİM: dal `kamp-ortacag-1010`, PUSH'lu.
- **M-5927** (18:31) BAŞKA bir oturum: 41 polity · 94 madde · 29 şehir, commit `f513d2a6` YEREL, push yok.

Dosya adları BİREBİR AYNI (`denetim/KAMP-ORTACAG-*.csv`) ⇒ birleştirmede biri ötekini EZER.
- **Ortak payımız:** Merovenj · Karoling · Batı/Doğu/Orta Frank · Lombard · Vizigot · Ostrogot · Vandal · Süev · Gepid · Avar · Asturya · B.Moravya · Benevento · Amalfi.
- **Onda olup bende olmayanlar:** Samo · Karantanya · Salerno · Napoli · Macar prensliği · Girit/Bari emirlikleri · Dülefî · Me'mûnî · Ya'furî.
- **Bende olup onda olmayanlar:** Göktürk ailesi · Türgiş · Lahmî · Gassânî · Himyerî · Kinde · Hasanveyhî · ve 2. tur dikişleri (Odoakr · Soissons · Dâbûyî · Hindûşâhî · Türkşâhî · Zunbil).

⚠️ **İki teslim bir noktada ÇELİŞİYOR:** o, `dogu-frank` t'sini **911** yazıp almanya f 962'ye **51 yıllık boşluk** raporluyor. Ben t'yi **962** yazdım: Treccani `sacro-romano-impero` «A partire da Ottone I di Sassonia (962)»; 911 Karoling HANEDANININ sonu, polity'nin değil. Bu bir hüküm sorusu: **künye polity mi anlatır, hanedan mı?**

**Birleştirme kararı koordinatörün.** Önerim yok (öncelik/sıra hükmü bende değil); yalnız ölçümü veriyorum.
