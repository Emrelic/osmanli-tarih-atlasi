# KAPAT-KUYRUK-0930 — kuyruk partilerinin açık maddeleri, canlı veriye karşı

> 30 Eylül 2026 · yazan KAPAT-KUYRUK-0930 · makine metni [`KAPAT-KUYRUK-0930.json`](KAPAT-KUYRUK-0930.json) · **hiçbir madde uygulanmadı, kutuya/defter'e yazılmadı**

## Özet

- **Evren:** `TAM-ENVANTER-0930.json` açık 733 − başka oturumdaki 12 parti (489) = **53 parti · 244 madde** (`parti-kasa-*` açık listede 0).
- **Eski:** sirada 204 · olculecek 23 · tekrar 7 · kosu-bekliyor 6 · senin-kararin 4
- **Yeni:** **cozuldu 110** · **sirada 83** · **olculecek 38** · **bayat 5** · **once-cozuldu 3** · **senin-kararin 3** · **tekrar 2**
- Ajanların verdiği hüküm → süzgeçten sonra: 21 kapanış `olculecek`/`sirada`ya indirildi (delil eksik sayıldı).
- ⇒ **118 madde kapanabilir** (delilli) · **83 gerçekten açık** · 38 ölçülecek · 3 Emre kararı · 2 tekrar.

## Yöntem ve güven

- Beş salt-okur ajan, parti bölünmeden (grup 0-4). Her madde: metin + CEVAP notu + ekler okundu → hedef çıkarıldı → canlı `data/`·`js/`·`css/`·`index.html`de arandı (üç yazım biçimi, D240) → hüküm.
- Kapanış delilleri iki makine sınamasından geçti: ① sıkı sınama (`delil_denet.py`): dosya:satır ±3 satırda alıntı · ② gevşek sınama (`delil_genis.py`): dosya bulunur, alıntı dosyanın herhangi bir yerinde. Sonuç, **118 kapanışın 114'ünde delil dosyada doğrulandı** (biri `renkler.py:3109`, boşluk farkı yüzünden elle bakıldı). **4 kapanışın delili dosya:satır DEĞİL, koşu 18 geometri ölçümü:** 0017/H-0001 · 0025/H-0005 · 0051/H-0008 · 0080/H-0010. Ölçülen dosyalar artık diskte yok; `kodla.py coz-c` ile yeniden üretilip tekrar ölçülebilir. Sıkı sınamada takılan 26 kayıttan ~12'sine elle bakıldı, hepsi gerçekti; sebep satır kayması ve `~` işaretiydi.
- 🔴 **Süzgeç:** ajan 'orta/düşük' güven verip kendi `kalan` alanına *görsel teyit yapılmadı* yazdıysa kapanış `olculecek`e indi. Harita maddelerinin çoğu bu sınıf: veri/motor tarafı düzelmiş, tarih kesitinde ekrana bakılmamış.
- ⚠️ `js/app.js` ölçüm sırasında başka oturumca düzenleniyordu (~30 satır kayma). Delildeki işlev/id adıyla arayın.
- ⚠️ `data/donemler.js` · `devletler_harita.js` · `petek_govde.js` (gitignore'lu çözülmüş kopyalar) 18:36'dan sonra diskte yok. Yayın kodlanmış hâlleri kullanıyor, bu bir kusur değil. Ama bunları okuyan araçlar (`denetle.py` dahil) `py arac/kodla.py coz-c …` koşulmadan çalışmaz. Grup 1'in geometri ölçümleri o saatten önce yapıldı.

## 🔴 Uygulanmış sanılıp İNMEMİŞ işler — en değerli bulgu

- **Ferhad Paşa 1590 şehir matrisi** (`YAMA-FERHATPASA-SEHIR-MATRISI-0913`): 79 şehrin 76'sı canlıda. İnmeyenler: Sakkız `yerlesimler.js:1833` · Serdeşt `yerlesimler_kalite4.js:50` · Sarâb `yerlesimler.js:1828` · (grup 3/4: Merîvan). Bu yüzden açık kalanlar: 0020/H-0012 · 0020/H-0014 · 0038/H-0007 · 0021/H-0028 · 0047/H-0001.
- **G-KASRISIRIN hiç inmemiş:** `yerlesimler.js:1843` 1503→1736 kesintisiz safevi.
- **YAMA-0063-HAZAR:** Tarku ve Kuba 1725-27'de hâlâ safevi (Rus tâbisi olmalıydı). **YAMA-0059-HAZAR:** Derbend ve Ağraham inmiş, Tarki inmemiş. **YAMA-0063-IRAN:** Kotur inmemiş (9 yerin 8'i Osmanlı).
- **Tek satırlık hazır yamalar inmemiş:** `YAMA-0065-PORTRE` (`olaylar_ek7.js:121` hâlâ III. Mustafa portresi, III. Osman olmalı) · Ahıska 1578 (yerleşim 08-01, madde 08-09 `olaylar_p0049.js:41`).
- **Gürcistan bölünmesi yarım:** `kartli-kralligi` · `kaheti-kralligi` · `samtshe-atabegligi` künyeleri 30 Eylül'de `devletler.js`e girdi. Ama `renkler.py`de renkleri yok, 19 nokta (Tiflis, Zagem dahil) hâlâ `s:"gurcistan"`. Açık kalanlar: 0033/H-0017 · 0043/H-0010 · 0025/H-0001.
- **Kutsal İttifak:** `data/ittifaklar.js` var ve paketli, ama hiçbir `js/*.js` `ITTIFAKLAR`ı okumuyor. Açık kalanlar: 0023/H-0003 · 0027/H-0006.
- **Levnî albümü:** `js/album.js` hiçbir yerde yüklenmiyor; görseller satır içinde çıkıyor, 'Albüm' düğmesi yok (0059/H-0001).
- **Ufuk 7/10 gün:** koşu 18 `data/ufuk_bantlari.js`i üretti (266 MB). Ama dosya `.gitignore:199`da, seçici de `index.html:121-130`da yorumda. Yayına çıkmadı (0080/H-0002 · H-0021).
- **`hal:"planlanan"`:** kodu var, onu kullanan tek bir veri kaydı yok (0019/H-0062).
- **Almanya künyesi:** `almanya` 962→1923 tek varlık 'Kutsal Roma / Almanya' (`devletler.js:1484`, `renkler.py:617`); 0039/H-0007'nin kökü bu.
- **Çehrin 1648-1678** hâlâ `lehistan`; `kazak-hetmanligi` künyesi yok.

## 🔴 Harita — koşu 18 sonrası ölçülen kalıntılar

- **Boğaziçi:** 1361 Beşiktaş parçası yok, bu yüzden 0080/H-0009 ve H-0010 kapandı. Ama **1395-08-01→1453-05-29 arasında Avrupa yakasında 10,5 km² Osmanlı** kalıyor: Rumelihisarı 5,2 km² (29.056E/41.109N) ve Rumeli Kavağı 5,3 km² (29.088E/41.201N). Rumelihisarı noktası (`kur:1452-08-31`) 1395'ten beri Osmanlı gövdesinin içinde. 55dfa2b5 su yasağı bu küçük parçaları kaldırmadı (0031/H-0022 açık).
- **Çanakkale:** Asya kıyısında 40.40K/26.75-26.85D hâlâ Bolayır peteğinde (0016/H-0004 açık). Ölçüm zamansız taban geometride yapıldı.
- **Gövde çakışması (GOVDE-CAKISMA-0079 yaması koşu 18'de):** Harkov bindirmesi kalktı. Ama 1652-01-01'de rusya×don-kazak **6.047 km²** (39.37E/50.17N) ve lehistan×rusya **1.074 km²** bindiriyor (0051/H-0004 açık). 1566'da ayrıca avusturya×OSMANLI 556 km² bindirme var.
- **İngriya 1703-05-27:** Rusya gövdesi Petersburg çevresini ~60 km kaplıyor; Nyen · Koporye · İvangorod noktaları veride yok.
- **Istranca kıyısı:** İğneada · Ahtapolu · Rezve 1361, iç kesim 1369 → 8 yıllık kıyı eksklavı (0025/H-0009 · 0030/H-0009).
- **İşgal taraması 1919-22:** canlı (1921-06-15'te 25 Yunan `isg`). Ama Afyon'da Temmuz 1921→Ağustos 1922 eksik (`yerlesimler.js:1497`).
- **Koşu 18'in bayatlattığı şikâyetler:** Basra 1703 Safevî dili · Katar 1602/1670 Safevî · Tallinn Fin körfezi · Saroz 1354 · 1566 Macaristan şeritleri · Dulkadir 1337 üçgeni.

## Okur metninde geliştirici notu (0065/H-0005 · 0050/H-0004 açık)

- olaylar*/kronoloji*/ekokuma* okur metinlerinde 'doğrulanamadı' **70**, '⚠️' **39** isabet. `ekokuma_rivayet.js:179`da başlığın kendisi bir not: "'Şişman kadın merakı' — akademik/TDV kaynak bulunamadı". Yanova/Varad metninde hâlâ *'harita onu tâbi renkte gösteriyordu'* cümlesi var (0051/H-0006).

## Parti parti — bütün maddeler

Sütunlar: eski → YENİ hüküm · hedef · delil (kapanışta) / kalan (açıkta). `*` = süzgeç indirdi.

### parti-0002 — 3 madde · olculecek 2 · sirada 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0005 | sirada → **olculecek*** | İznik-İzmit çevresindeki 'koyu ek alan' (Bizans gövdesinin çok koyu #0f0f5d rengi gölge gibi okunuyor) | süzgeç: veri/kod delili VAR ama ajan kendi 'kalan'ında tarih kesitinde görsel/geometri teyidi yapılmadığını yazdı → delil eksik sayıldı · Görsel teyit yapılmadı; ham hex renkler.py:221'de hâlâ #0f0f5d (açma üretimde uygulanıyor). |
| H-0011 | sirada → **sirada** | Başkent yıldızı yalnız başkentken (Söğüt→Bursa→Edirne→İstanbul) + öteki devletlerin başkentlerine de | devletler.js'e pencereli başkent şeması (`baskentler:[{ad,f,t}]`) ve yabancı devletlerin zincirli başkentlerinin kaynaklı verisi; Bursa→Edirne geçişi de yaklaşık. |
| H-0014 | sirada → **olculecek*** | 1354 Gelibolu'nun alınışında Saroz körfezinin kuzeyi de Osmanlı görünüyor | süzgeç: veri/kod delili VAR ama ajan kendi 'kalan'ında tarih kesitinde görsel/geometri teyidi yapılmadığını yazdı → delil eksik sayıldı · Bolayır'ın 36 km'lik peteği Saroz'un kuzey kıyısına ~15 km taşıyor olabilir (40.65/26.70) — kabul edilebilir; görsel teyit yok. |

### parti-0003 — 2 madde · once-cozuldu 1 · olculecek 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0008 | tekrar → **once-cozuldu** | Timur'un Bağdat'ı ikinci kez alması haritada (ikiz 0002/H-0025) | data/yerlesimler.js:740 Bağdat `s:[… {f:"1401-01-01",t:"1405-01-01",d:"timurlu"} …]` (ilk alış 1393-1394 da timurlu) · madde data/kronoloji_timurlu.js:95 `t:"1401-06-01", b:"Bağdat'ın ikinci yağması"` |
| H-0022 | tekrar → **olculecek*** | Kırım'ın cetvelle bölünmüş görünümü (ikiz 0003/H-0015: 3 nokta → ~10 nokta) | süzgeç: veri/kod delili VAR ama ajan kendi 'kalan'ında tarih kesitinde görsel/geometri teyidi yapılmadığını yazdı → delil eksik sayıldı · Koşu 18 çıktısında görsel doğrulanmadı |

### parti-0004 — 1 madde · sirada 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0011 | sirada → **sirada** | Başkent yıldızı: yalnız başkent, nokta yıldıza dönsün, yabancı devletler | KALAN: çok başkentli künyeler için zaman pencereli `bk:[{f,t,ad}]` verisi (devletler.js'te 0 kayıt; 5 kayıtlık yama yüklenmiyor) — 'o tarihteki başkent' yabancılar için hâlâ çözülmüyor. |

### parti-0006 — 3 madde · once-cozuldu 2 · sirada 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | sirada → **sirada** | Katif/Basra 'iran' etiketi, Katif GB'sindeki Safevi topragi, Portekiz Umman/Hurmuz | CAPRAZ-IBERYA'nin 7 karar kalemini (1559 Bahreyn zinciri, Katif 1524-1550 Safevi dilimi dahil) karara bagla ve uygula. |
| H-0008 | tekrar → **once-cozuldu** | Yanikkale enklavi — ikizi parti-0006/H-0007 | Ikiz parti-0006/H-0007 (CEVAP: cozuldu). Canli delil: data/yerlesimler.js:1335 Yanikkale (Gyor) `neden:"p0006/H-0007+H-0008+H-0010 (uc madde, TEK kayit)...Kirilma Mohac gunune (1526-08-29) cekildi"`, s 1526-08-29→1594-09-27 avusturya · d 1594-09-27→1598-03-29… |
| H-0010 | tekrar → **once-cozuldu** | Macaristan/Habsburg iki parca (Yanikkale enklavi) — ikizi parti-0006/H-0007 | Ikiz parti-0006/H-0007 (cozuldu). data/yerlesimler.js:1335 ayni kayit 'p0006/H-0007+H-0008+H-0010 (uc madde, TEK kayit)'; enklav sehri Yanikkale (Gyor), 1526 sonrasi avusturya (TDV yanikkale). |

### parti-emrelic-0008 — 2 madde · sirada 1 · olculecek 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | olculecek → **sirada** | Germiyan iki parca / Sahibata kademeli yutma | Sahibata'nin Germiyan'a kademeli gecis tarihleri TDV sahibataogullari'ndan cikarilip yazilmali (hala arastirilmadi). |
| H-0005 | sirada → **olculecek** | Cimpe 1352: petek deniz otesine (Saros kuzeyi, Sarkoy) tasmamali | Dogrulama sinavi (1346 Rumeli bos, 1352 yalniz Cimpe) koşu 18 ciktisinda ekranda/petek ciktisinda olculmeli; motor ve veri tarafi hazir gorunuyor. |

### parti-emrelic-0012 — 2 madde · olculecek 2

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | sirada → **olculecek** | Çöl girintilerinin yumuşatılması — koordinatör onayı (a) 'enklav doldurma' | EKSİK: M-2104'teki (a)'nın bu iki mekanizmadan hangisi olduğu tahtada doğrulanmalı; ve 1396-09-25 Hafsî/Sahra kesiti koşu 18 çıktısında tarayıcıyla bakılmalı |
| H-0002 | sirada → **olculecek** | Girinti yumuşatma (b) çok yönlü takviye — (a)'nın etkisi ölçüldükten sonra | EKSİK: koşu 18 çıktısında görseldeki Hafsî/Sahra girintilerinin hâli (1396) ölçülmeli; sonra (b) tartışılır |

### parti-emrelic-0014 — 2 madde · sirada 2

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0004 | sirada → **sirada** | Ic gol (Aral, Baykal) kiyilarinin hassas cizimi — 'secici ince' karari | Gol sadelestirmesi secici incelige cevrilmeli (0016/H-0003 ile ayni motor isi; §9.1 geregi tam insa kosusuna yama olarak). |
| H-0005 | sirada → **sirada** | Polesya ucgen yapisi (nokta boslugu) + Kutsal Roma rengi denizden ayrilsin | YAPILAN: renk ayrildi, nokta 17→33. KALAN: Slonim/Novogrudok hattinin kaynakli yerlesimleri ve en buyuk boslugun (262 km) yeniden olculmesi. |

### parti-emrelic-0016 — 4 madde · sirada 2 · olculecek 1 · cozuldu 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0002 | sirada → **olculecek*** | 1335 Eretna kuruluşu — Kayseri-Elbistan arası sivri üçgen (noktasızlık) | süzgeç: veri/kod delili VAR ama ajan kendi 'kalan'ında tarih kesitinde görsel/geometri teyidi yapılmadığını yazdı → delil eksik sayıldı · Koşu 18 çıktısında o kesitin görsel doğrulaması yapılmadı |
| H-0003 | sirada → **sirada** | Tuz gölü kıyısına ince (seçici) göl çözünürlüğü | Emre'nin (c) SEÇİCİ İNCE kararı motora girmeli (Osmanlı çekirdek gölleri için küçük tolerans) — tam inşa koşusu kalemi |
| H-0004 | sirada → **sirada*** | Kilitbahir/Çanakkale — petek Çanakkale Boğazı'nı geçiyor mu | süzgeç: kalan aynı sınıf kusur (Bolayır peteği Çanakkale Boğazı'nın Asya kıyısında 40.40K/26.75-26.85D) — tam kapanmadı · Aynı sınıfta kalıntı: 40.40K/26.75-26.85D (Asya kıyısı, Çardak doğusu) hâlâ Bolayır peteğinde — Gelibolu kesiminde Boğaz geçişi sürüyor olabilir; zamansız taban geometri, tarayıcıda doğrulanmadı |
| H-0005 | sirada → **cozuldu** | Çimpe alınınca Saroz körfezinin kuzey kıyısının Osmanlı'ya geçmesi | data/yerlesimler_ek23.js:155-167 `ad:"Saroz kuzey kıyısı"` noktası (bizans →1357, d:1357-01-01), yorum: 'ÇİMPE GÖRÜNTÜSÜNDEKİ PARÇA … 1355'te −331 km² Osmanlı' · taban petek: 40.66K/26.75D ve 40.68K/26.65D → 'Saroz kuzey kıyısı', Çimpe peteği yalnız yarımadad… |

### parti-emrelic-0017 — 1 madde · bayat 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | sirada → **bayat** | Dulkadir-Kayseri sınırındaki üçgen bindirme (1337) | koşu 18, 1337-09-09, kutu 35.29-37.56E/37.78-39.23N: gövde çakışması 0 km² (eretna · ilhanli · dulkadir · memluk · kilikya-ermeni); görseldeki üçgen noktası (36.2E 38.85N) yalnız ilhanli |

### parti-emrelic-0019 — 8 madde · sirada 3 · olculecek 2 · cozuldu 2 · tekrar 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0007 | sirada → **sirada** | Gürcistan ↔ Karakoyunlu renk ayrışması | renkler.py'de iki magenta tondan biri ayrıştırılmalı (renk_olc.py 'yakın ama değmeyen' çifti kurmuyor); veri tarafı kusur değil |
| H-0018 | sirada → **olculecek*** | Anadolu Hisarı peteğinin Boğaz'ı geçip Rumeli yakasını boyaması | süzgeç: veri/kod delili VAR ama ajan kendi 'kalan'ında tarih kesitinde görsel/geometri teyidi yapılmadığını yazdı → delil eksik sayıldı · Ölçüm ZAMANSIZ taban geometride (petek_govde.js başlığı: kur/bit devirlerini taşımaz); 1395-1452 kesiti tarayıcıda görsel olarak doğrulanmadı |
| H-0019 | sirada → **olculecek*** | Rumeli yakasının Rumeli Hisarı'nın yapımında (1452) Osmanlı'ya geçmesi | süzgeç: veri/kod delili VAR ama ajan kendi 'kalan'ında tarih kesitinde görsel/geometri teyidi yapılmadığını yazdı → delil eksik sayıldı · Kademeli geçişin 1452-08-31 kesitinde ekranda görünmesi tarayıcıda sınanmadı |
| H-0045 | sirada → **cozuldu** | Halep maddesi başlığında Rakka ve Deyrizor | data/olaylar_ek5.js:157 `{ t:"1516-08-28" … b:"Halep, Rakka ve Deyrizor'un Osmanlı hâkimiyetine girişi"` |
| H-0047 | tekrar → **sirada** | Trablusşam maddesinde Hama ve Humus'un anılması | KALAN: Humus (d:1516-09-21) Trablusşam başlığına ya da ayrı maddeye eklenmeli |
| H-0050 | sirada → **cozuldu** | Nablus/Sayda/Yafa/Akka 1516-09-27, Kudüs 1516-10-01 (Y8 yaması) — yapay 'öncü koridoru' | data/yerlesimler.js:972 Nablus `d:[{f:"1516-09-27"…` · :966 Sayda · :969 Yafa · :736 Akkâ (hepsi 1516-09-27, 'gün komşudan: Şam') · :732 Kudüs `d:[{f:"1516-10-01"…kesinlik:{f:"ay"}` |
| H-0061 | sirada → **sirada** | Mohaç sonrası Macaristan'ın HİMAYE gösterimi (v:[{…himaye:true}]) | 1526-1541 Macar noktalarının hangi kısmı d:/himaye/Habsburg ölçülüp `himaye:true` yazılmalı |
| H-0062 | tekrar → **tekrar** | Planlanan seferler koyu sarı kesikli (H-0041 tasarım ayrıntısı) | İkiz 0019/H-0041 hâlâ açık sayılmalı: hiçbir sefer kaydı `hal:"planlanan"` taşımıyor; Viyana 1529 planlı kolu veride işaretlenmeli |

### parti-emrelic-0020 — 4 madde · sirada 4

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0005 | sirada → **sirada** | Malta kiyisi ile harita boyamasinin ortusmesi (kiyi sadelestirme) | Z-0015 (cekirdek pencerede SADE_TOL inceltmesi) tam insa kosusunda motora gir. |
| H-0012 | sirada → **sirada** | Ferhad Pasa antlasmasi sinirlarinin teyidi (1590) | Sakkiz (0047-C0047-1), Serdest ve Sarab yamalarini uygula. |
| H-0013 | sirada → **sirada** | 1578 Vadisseyl/Cildir: Ahiska toprak degisiminin ayri maddesi ve gunu | Ahiska d.f ve s.t'yi 1578-08-01'den 1578-08-09'a cek (YAMA-A3-0913 kalem 2). |
| H-0014 | sirada → **sirada** | Dogu seferi 1578-1590 ilerleme; Urmiye...Senendec Osmanli, Hemedan Iran, Zencan/Sultaniye, Huzistan | Sakkiz/Serdest/Sarab yamalarini uygula; Merivan ve Bane icin 1590 kaynak hukmu ver. |

### parti-emrelic-0021 — 5 madde · cozuldu 2 · sirada 2 · olculecek 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0005 | sirada → **olculecek** | 1594 Ukrayna'daki iki bosluk (Uman petegi + Bender guneyi) | Ust bosluğun mekanizmasi motorda ele alinmis gorunuyor; iki boslugun koşu 18 haritasinda kapanip kapanmadigi (1594-11-13, ~48,6K 30,0D ve ~46,7K 28,6D) ekranda/petek ciktisinda olculmeli. |
| H-0010 | sirada → **cozuldu** | 1638 Bagdat fethinde kuzeydeki Erbil, Kerkuk, Samerra, Tikrit, Sehrizor | 1638-12-25 kesiti hepsi OSMANLI: data/yerlesimler.js:1871 Erbil d 1638-12-25..1918 (s:safevi 1623-11-28..1638-12-25) · :739 Kerkük d 1625-01-01.. · :1851 Sâmerrâ ve :1852 Tikrit d 1638-12-24.. · :715 Şehrizor d 1630-03-16.. · data/kaynakli_halka_bagdat.js mev… |
| H-0027 | sirada → **cozuldu** | Tebriz Osmanli iken Van dogusu (Hoy, Merend, Culfa, Serur) safevi gorunmesi | 1590-03-22 ve 1595-01-01 kesiti: data/yerlesimler.js:1823 Hoy d 1585-09-25..1603-10-21 · :1825 Merend d 1588-09-01..1603-10-21 (Eskandar Beg) · :1826 Culfa d 1586-01-01..1603-10-21 (Iranica JULFA) · yerlesimler_kalite4.js:56 Şerur d 1586-01-01..1603-10-21 (BO… |
| H-0028 | sirada → **sirada** | Ferhat Pasa 1590: Yuksekova … Merivan listesinin Osmanli'ya gecisi | YAPILAN: 'iran' hayalet kayitlari kalkti, Tebriz kusagi ve Van-Hakkari Osmanli. KALAN: Sakkız, Serdeşt, Merîvan (0047 C0047 ortulu oneri, 'YENİDEN KAYNAKLANACAK') kaynaklanip karar verilmeli; 'Mare' adi tanimlanamadi. |
| H-0030 | sirada → **sirada** | 1595 Eflak seferi oku, uc voyvodalik isyan isaretleri, Kalugeran | YAPILAN: sefer oku, Eflak+Bogdan isyan isareti, Kalugeran isareti ve maddesi. KALAN: Erdel isyan isareti (akademik gun bulunamadi) ve uc voyvodaligin haritada ortak gosterimi (0048/H-0002 kararina bagli). |

### parti-emrelic-0022 — 1 madde · sirada 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0005 | sirada → **sirada** | 1678 bozkırlarının (Yedisan, Camboyluk, Deşt-i Kıpçak, Don, Çerkask, Kabartay, Kuban kıyısı) gün hassasiyetli… | KALAN: Deşt-i Kıpçak'ın Nogay/Kalmuk/Kırım/Rus arasında el değiştirmesi kaynaklı olarak yazılmalı (kaynak oturumu) |

### parti-emrelic-0023 — 1 madde · sirada 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0003 | sirada → **sirada** | Kutsal Ittifak rozeti + tek seferlik vurgu animasyonu | YAPILAN: uyelik verisi. KALAN: rozet/ip/animasyon kodu (app.js) yazilmali. |

### parti-emrelic-0024 — 2 madde · olculecek 1 · sirada 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0005 | sirada → **olculecek*** | 1703 Basra'yı çaprazlama geçen Safevî dili (Abadan peteğinin emilmesi) | süzgeç: alan 'Osmanlı ya da sahipsiz' — ölçüm aleti ayıramadı · Alan 'Osmanlı ya da sahipsiz' — hangisi olduğu bu aletle ayrılamadı; önerilen dolgu noktası eklenmedi. |
| H-0008 | sirada → **sirada** | 1703 St. Petersburg kuruluş günü bütün İngriya'nın Rusya'ya boyanması | YAPILAN(dolaylı): koşu 18'de batı İngriya İsveç kalıyor. KALAN: Nyen · Koporye · İvangorod · Yam(burg) noktaları — `isvec` 1617→fetih günleri, sonra `rusya` — eklenmeli. |

### parti-emrelic-0025 — 4 madde · sirada 3 · bayat 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | sirada → **sirada** | Gürcistan 1711 iki kopuk parça (etiket) | KALAN: Tiflis/Zagem s: hâlâ `gurcistan` — ikizi 0043/H-0010 (açık). |
| H-0004 | sirada → **sirada** | 1561 Vilnius — Königsberg/Memel anakronik 'almanya', Tartu | KALAN: Klaipėda (Memel) data/yerlesimler_ek7.js:153 hâlâ `almanya` 1281→1701 (prusya-dukaligi olmalı); kurlandiya künyesi yok; Tilsit/Gumbinnen/Ragnit noktaları yok. |
| H-0005 | sirada → **bayat** | 1566 açık yeşil 'Macaristan' şeritleri | koşu 18, 1566-09-07, kutu 15.85-21.2E/45.39-48.8N: gövdeler yalnız avusturya · OSMANLI · TABI — `macaristan` gövdesi YOK; Győr, Komárom, Pozsony, Kanizsa → avusturya |
| H-0009 | sirada → **sirada** | Trakya: iç kasabalar alınmadan kıyı/kuzey yerleşimleri Osmanlı | KALAN: Istranca kıyısı (İğneada/Ahtapolu/Rezve) 1361'de, iç kısım (Vize/Demirköy/Kırklareli) 1369'da ⇒ 8 yıllık kıyı eksklavı; kıyı noktalarının 1361-01-01 kaynaksız yıl kodu kaynakla düzeltilmeli. |

### parti-emrelic-0027 — 1 madde · sirada 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0006 | sirada → **sirada** | Kutsal İttifak maddesinde üye rozetleri + Osmanlı'yı dolanan ip + görsel | Rozet + Osmanlı gövdesini kesmeyen eğri ip çizimi (P14 arayüz işi, ~150 satır) ve kamu malı görsel. |

### parti-emrelic-0028 — 1 madde · olculecek 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0007 | sirada → **olculecek** | 1721 Kuzey Afrika bozuk gorunum / kirmizi bos eklenmis bolgeler (ekran goruntusu 1721-11-24) | EKSIK: 1721-11-24 · 15.86-37.39N / 2.49W-43.22E kesitinin bugunku yayinda (r10713) ekran goruntusu; 'bozuk/kirmizi bos bolge' siniflarinin tek tek olcumu (kume atamasi hic tek tek olculmemisti). |

### parti-emrelic-0029 — 1 madde · olculecek 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0007 | sirada → **olculecek** | Erken Osmanlı kıyı renklendirme örtüşmeleri (Armutlu/Yalova vb.) | EKSİK: altlık kıyı çizgisiyle motor karasının km² farkı ölçümü (6 numaralı keskinlik hedefi); MOTOR EPOK'a sevk ölü kalmıştı, yeniden sevk gerekiyor. |

### parti-emrelic-0030 — 4 madde · olculecek 3 · sirada 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0002 | olculecek → **olculecek** | Pelekanon 1329: ① Boğaz geçişi ② Karamürsel küçük hata ③ İznik koyu kırmızı üst üste binme | EKSİK: ② (40.62-40.75K/29.70-29.90D) ve ③ (İznik 40.33-40.64K/29.44-29.87D koyu çift boya) koşu 18 çıktısında 1329-06-01 kesitinde tarayıcıyla bakılmalı (donemler.js gövdeleri) |
| H-0004 | sirada → **olculecek*** | Ordu (Trabzon Rum) peteğinin sivri ucu — iç kesime nokta | süzgeç: veri/kod delili VAR ama ajan kendi 'kalan'ında tarih kesitinde görsel/geometri teyidi yapılmadığını yazdı → delil eksik sayıldı · Koşu 18 çıktısında sivri ucun kalktığı görsel olarak doğrulanmadı |
| H-0009 | sirada → **sirada** | Trakya ilçelerinin fetih sırası (1361-01-01 yığını / Pençik maddesi) | KALAN: data/yerlesimler_ek24.js:88-90 İğneada hâlâ `d:[{f:"1361-01-01"…` (kendi notu Kırklareli/Dereköy/Vize ile sözleşme diyor → 1369 olmalı) · sınıfın öteki 9 yuvarlak-gün yığını (1390 Ege, 1552 Cezayir, 1557 Kızıldeniz…) bu turda ölçülmedi |
| H-0018 | sirada → **olculecek*** | 1392 Maraş kuzeybatısında teal (Dulkadir) keskin üçgen — noktasızlık | süzgeç: veri/kod delili VAR ama ajan kendi 'kalan'ında tarih kesitinde görsel/geometri teyidi yapılmadığını yazdı → delil eksik sayıldı · Koşu 18 çıktısında görsel doğrulama yapılmadı |

### parti-emrelic-0031 — 3 madde · olculecek 2 · sirada 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0002 | olculecek → **olculecek** | 1386 Epir kıyı renk örtüşmesi | EKSİK: altlık (basemap) kıyı çizgisi ile motor_kara.geojson'un karşılaştırması (kıyı çözünürlüğü farkı km² olarak); ikizi 0029/H-0007. |
| H-0019 | sirada → **olculecek** | Germiyanoğulları 'eğri planda' görünümü | EKSİK: görselin tarihi (künye şeridi yok) — o gün ölçülmeden tam bindirme kalktı mı söylenemez. |
| H-0022 | sirada → **sirada** | Boğazkesen (Rumeli Hisarı) öncesi Osmanlı görünümü | KALAN: Anadolu Hisarı/Kavak peteklerinin Boğaz'ı aşması 1395-1452'de sürüyor (sudan geçme yaması 55dfa2b5 bu 5 km²'lik parçaları gidermemiş — 200 km² eşiği altı?); motor/petek düzeltmesi gerekiyor. |

### parti-emrelic-0032 — 5 madde · sirada 5

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0002 | sirada → **sirada** | Karakoyunlu çöküşü maddesinde Gürcistan rengi Karakoyunlu ile aynı | Renk ayrışması (0019/H-0007 ile aynı kalem) renkler.py'de yapılmalı |
| H-0003 | sirada → **sirada** | Uzun Hasan'ın Karakoyunlu'ya son vermesi maddesi — gün ve olay mahalli (YAMA-A3 kalem 1) | YAMA-A3-0913 kalem 1: madde t→1468-07-01 + 30 yerleşimin dönem ucu aynı güne (birlikte); aynı olayın üç maddesi (ek20/ek5/ek7) birleştirilmeli |
| H-0010 | sirada → **sirada** | İlk Osmanlı altını (sultanî) maddesine sikke görseli | CC0 müze koleksiyonlarında (MET/Cleveland/Yale) II. Mehmed sultanîsi aranmalı; bulunursa gorsel_madde.js'e bağlanmalı |
| H-0013 | sirada → **sirada** | Tüm maddelere Merak/Ek okuma/Sebep-sonuç/Magazin/Dış yankılar düğmeleri | KALAN: kapsama 'tüm maddeler' değil (13 Eyl ölçümü %18,9); kartsız madde kovası dalga dalga doldurulmalı — program işi |
| H-0016 | sirada → **sirada** | 1493 Bug-Dinyester arası (Yedisan) boşluğunun sebebi — noktasızlık | Bug-Dinyester arasına kaynaklı yeni nokta(lar) ya da kasıtlı boşluk beyanı gerekiyor |

### parti-emrelic-0033 — 9 madde · sirada 6 · olculecek 3

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0006 | sirada → **olculecek** | Mogulistan (Dogu Cagatay) yuvarlak petekleri — nokta yogunlugu | Nokta sayisi artmis (ortaasya3); yuvarlak gorunumun koşu 18 ciktisinda kalkip kalkmadigi haritada/petek ciktisinda gozle olculmeli (eski nokta sayisi bilinmedigi icin karsilastirma yapilamadi). |
| H-0007 | sirada → **olculecek** | Kazak Hanligi yuvarlak alanlari — nokta yogunlugu | Nokta 3→9 gorunuyor; koşu 18 sonrasi yuvarlakligin gecip gecmedigi ekranda olculmeli. |
| H-0008 | sirada → **sirada** | Sibir Hanligi — nokta yogunlugu | Gorseldeki 3 noktaya yalniz Abalak eklenmis; Sibir Hanligi'nin kaynakli yerlesimleri (Ulus/kasaba adlari) arastirilip yazilmali, kayit yoksa beyan edilmeli. |
| H-0009 | sirada → **sirada** | Nogay-Buhara arasi (Aral/Ustyurt) bos serit — siyasi yapi var mi | YAPILAN: Ustyurt kuzeyi Nogay noktasi; platonun geri kalani kasitli bosluk olarak beyanli. KALAN: beyanin kaynagi yok (cevap_not 'kasıtlı boşluk değil' diyordu — celisik); Emre'nin istedigi hanlik/emirlik/baglilik taramasi kaynakla yapilmali. |
| H-0010 | olculecek → **sirada** | Kandehar pergel gorunumu — cevrede yerlesim | Hala tek nokta; Kandehar cevresinde kaynakli yerlesimler (Emre sarti: kayit varsa) arastirilmali, bulunamazsa beyan yazilmali. |
| H-0013 | olculecek → **olculecek** | Songhay gorselinde guneybatidaki kucuk boyama | Kucuk parcanin hangi petege ait oldugu ancak petek ciktisindan (PETEKLER/donemler) okunabilir; koşu 18 ciktisinda o koordinat (~14K, 2B) sorgulanmali. |
| H-0014 | sirada → **sirada** | Kanem-Bornu kopuk bolgeler — nokta yogunlugu | YAPILAN: 2→4 nokta. KALAN: Cad Golu cevresi (Mao–Birni arasi) kaynakli yerlesimle baglanmali; iki parcanin birlesip birlesmedigi koşu 18 ekraninda olculmeli. |
| H-0017 | sirada → **sirada** | Gurcistan'i Kartli, Kaheti, Imereti, Samtshe kunyelerine bolmek (Emre karari) | YAPILAN: kunyeler. KALAN: uc kunyeye renk (renkler.py) + yerlesimlerin s: donemlerini alt kralliklara cevirme (sira: renk → veri). |
| H-0018 | sirada → **sirada** | Yavuz'un 1514 Tebriz guzergahi, kaleler, eksik Amasya maddesi | YAPILAN: guzergah, Bayburt noktasi ve fethi, Amasya maddesi. KALAN: Kigi (TDV 1514 donusunde teslim), Tercan, Ispir noktalari atlasta yok — kaynakla yazilmali. Gorsel dogrulama yapilmadi. |

### parti-emrelic-0034 — 3 madde · sirada 2 · olculecek 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0023 | olculecek → **sirada** | Tiflis ve Gence'nin Osmanlı'dan geri alınınca kime geçtiği (Gürcistan mı İran mı) | Tiflis 1606-1723 ve 1735-1801 için `gurcistan` yerine `kartli-kralligi` (+ kaynaklıysa Safevî/Afşar tâbiliği `v:`) yazılmalı; tasarım kararı (tek kimlik mi) gerekirse Emre'ye. |
| H-0028 | sirada → **olculecek** | Libya çölünde (Gat, Zella, Sebha, El-Katrun, Calu, Ecdabiye, Tobruk çevresi) gereksiz boyanma — MALİYET-MESAF… | EKSİK: görselin günü ve koşu 18 çıktısında listelenen altı yerin çevresinde Osmanlı gövdesinin çöle taşma alanı (Osmanlı gövdesi = data/donemler.js; bu doğrulamanın aleti yalnız yabancı gövdeyi okuyor). Taşma kalktıysa bayat. |
| H-0036 | sirada → **sirada** | 1637 Azak çevresi seyrekliği — Temruk · Acu · Ace Osmanlı kaleleri noktasız | Akademik kaynakla Temruk/Acu/Ace'nin Osmanlı dönem BAŞLANGICI bulunup üç nokta eklenmeli (dönemsiz nokta yazılmaz — Y13). |

### parti-emrelic-0037 — 1 madde · sirada 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0010 | tekrar → **sirada** | 1877-78'de Rusya'nın Eflak-Boğdan'dan geçişi/işgali örtü veya okla (ikiz 0037/H-0008) | KALAN: 1877-78 için hangi gösterim (isg: ya da ok) Emre kararı + kaynaklı kayıt; Romanya bağımsızlığı (1877-05) ile vassal renginin çelişkisi de bakılmalı |

### parti-emrelic-0038 — 5 madde · cozuldu 4 · sirada 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0003 | sirada → **cozuldu** | Gat enklav koprusunun ic bukey/parabolik kenari (motor) | arac/uret_petek.py:3075-3086 `0038/H-0003 — köprü kenarının İÇ BÜKEYLİĞİ ... 0,35 = ortasından %35 içeri bastırılmış parabolik bel` · `B2_KAVIS = 0.35`; _b2_enklav_birlestir :3170, :3226 'EMRE ŞEKLİ TAM TARİF ETTİ'. Harita bugun koşu 18 ile yeniden uretildi; … |
| H-0004 | sirada → **cozuldu** | dolgu/kopru renginin doldurdugu girintinin katmanini (tabi/dogrudan) almasi | arac/uret_petek.py:7363-7380 `0038/H-0004 — BU SATIR 29 AĞUSTOS'TA DEĞİŞTİ ... YENİ ÖLÇÜT: her köprü parçası, EN ÇOK HANGİ GÖVDEYE YASLANIYORSA onun katmanına yazılır`; sayaclar b2_kopru_tabi/b2_kopru_dogrudan :3094-3099, B2_TEMAS :3109. Cikti gorsel olarak a… |
| H-0005 | sirada → **cozuldu** | Ecmiyadzin ve Gumru'nun Iran savasi sirasinda Osmanli olmasi (cikarim isaretli) | data/yerlesimler_ek26.js:87 Gumru ve :91 Ecmiyadzin — d 1583-09-13→1604-06-08 ve 1724-10-03→1735-10-03 (Revan zinciri, yerlesimler.js:661 Revan d 1583-09-13); kaynak alaninda 'ankraj Revan' cikarim damgasi |
| H-0006 | sirada → **cozuldu** | 1590 Ferhad Pasa koridor/enklavlari (yer_yama_ferhatpasa: Culfa, Urmiye, Kutaisi, Sohum) asil veriye indi mi | Indi: data/yerlesimler.js:1826 Culfa d 1586-01-01→1603-10-21; :1135 Urmiye d 1585-09-25→1603-10-21; :1128 Kutaisi v 1555-05-29→1810-02-20 (tabi); Sohum 1590'da d. Sehir matrisi (YAMA-FERHATPASA-SEHIR-MATRISI-0913.json) ile canli 1590-03-21 karsilastirmasinda … |
| H-0007 | sirada → **sirada** | Kasr-i Sirin'in Iran savasi sirasinda Osmanli olmasi | G-KASRISIRIN yamasini (1623 bitis gunu kaynaklanarak) uygula. |

### parti-emrelic-0039 — 6 madde · sirada 5 · cozuldu 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0002 | sirada → **sirada** | Suriye/Irak/Ermenistan/Gurcistan/Iran sinirlari 6. kalite, sinira yerlesim cifti | Iran kolunu (Agri-Kotur takasi dahil) olcup nokta ciftleriyle 5 km altina indir; diger kollarda kalan %7-10'u tamamla. |
| H-0003 | sirada → **sirada** | Sakarya/Buyuk Taarruz: Yunan ilerleyisi ve Turk kurtarisi gun be gun | Sakarya muharebesi safhalari (Agu-Eyl 1921) maddeleri + Afyon ikinci isgal penceresi ve Sakarya hattina kadar isg: kayitlari. |
| H-0004 | sirada → **sirada** | 1918-1923 dogu/guney cephesi kronolojisi (Ermeni, Fransiz, Italyan, Ingiliz, Rus) | Ermeni cephesi (Sarikamis, Gumru 1920) ve Fransiz cephesi (Pozanti/Karbogazi 1920) maddelerini kaynakla ekle. |
| H-0005 | sirada → **sirada** | 1919-1922 isgal taramasi: Yunan/Italyan/Fransiz/Ingiliz isgalleri isg: ile, isgalci renginde | Afyon ikinci isgal penceresini ve 28 bulunamadi yerlesimi ikinci kaynak turuyla (Ozalp, Biyiklioglu, ATASE) isg:'e yaz. |
| H-0007 | sirada → **sirada** | 1923'te 'Kutsal Roma' gorunmesi — almanya kunyesinin 962-1923 tek varlik olmasi | almanya kunyesini bol: kutsal-roma 962-1806 · Ren/Alman Konfederasyonu 1806-1871 · Alman Imparatorlugu 1871-1918 · Weimar 1918-1923 (+renkler). |
| H-0008 | sirada → **cozuldu** | 1923 Cekoslovakya/Avusturya/Macaristan gorunumu (avusturya-cumhuriyet rengi ve nokta sayisi) | arac/renkler.py:3109 `"avusturya-cumhuriyet": ("Avusturya Cumhuriyeti (I. Cumhuriyet)", "#d2d224")` (on kosul indi); 1923-06-15'te avusturya-cumhuriyet noktalari 2'den en az 6'ya cikti: Viyana, Graz, Linz, Innsbruck, Klagenfurt (yerlesimler_a78_avrupa.js). No… |

### parti-emrelic-0040 — 7 madde · olculecek 5 · tekrar 1 · sirada 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | olculecek → **olculecek** | Gövdeler arası BOŞLUK (tavan) ve ÜST ÜSTE BİNME (gövde) kusuru — 9 görsel | EKSİK: 9 görselin kesit/kutu künyesi (PNG'lerden okunmalı) ve koşu 18 çıktısında o kutularda boşluk/üst-üste-binme ölçümü (donemler.js + devletler_harita.js gövde kesişimi; tavan payı). |
| H-0002 | olculecek → **olculecek*** | Tallinn peteği Fin körfezini aşıp karşı yakayı boyuyor mu | süzgeç: veri/kod delili VAR ama ajan kendi 'kalan'ında tarih kesitinde görsel/geometri teyidi yapılmadığını yazdı → delil eksik sayıldı · Görselin kendi günü bilinmiyor (PNG künyesi okunmadı); farklı bir günde kaçak kalmış olabilir. |
| H-0003 | olculecek → **tekrar** | Boşluk kalan yerlerin sebebi (H-0001 boşluk kolu) | İkizi 0040/H-0001 ile birlikte ölçülmeli. |
| H-0004 | sirada → **olculecek*** | Deniz rengi daha açık + devlet renkleri denizden ayırt edilebilir | süzgeç: veri/kod delili VAR ama ajan kendi 'kalan'ında tarih kesitinde görsel/geometri teyidi yapılmadığını yazdı → delil eksik sayıldı · İstenen 'mavileri koyulaştırma' yerine su-yakınlık eşiği ile çözülmüş; görsel teyit yapılmadı. |
| H-0005 | sirada → **olculecek*** | İlhanlı, Novgorod (ve Bosna/Sırbistan) renklerinin deniz tonuna yakınlığı | süzgeç: delil yalnız renklerin TANIMLI olduğunu gösteriyor, değiştiğini değil; görsel teyit yok · Görsel teyit yapılmadı (renkler üretim sonrası L* tabanıyla açılabiliyor). |
| H-0007 | olculecek → **olculecek** | Aral Gölü kıyısında renk örtüsünün oturmaması | EKSİK: görselin günü/kutusu ve koşu 18 çıktısında Aral kıyı şeridi ile gövde kenarı arasındaki boşluk ölçümü (goller.js poligonu yaklaşık olduğundan kıyı uyumsuzluğu poligonun kendisinden de gelebilir). |
| H-0009 | sirada → **sirada** | Çehrin'in Lehistan'a aitliği (1569-1648 ve 1699-1793 evet; 1648-1678 Hetmanlık; Osmanlı zaptı 21 Ağustos 1678) | 1648-1678 penceresini Kazak Hetmanlığı'na çevir (Emre kararı 13 Eyl: kazak-hetmanligi künyesi; YAMA-RUS-0913.json) — künye açılmamış ya da `zaporojye` kullanılacaksa o karar verilmeli. |

### parti-emrelic-0041 — 1 madde · sirada 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | sirada → **sirada** | B gorunumu: enklav birlestirme, koridor siglastirma, Dijkstra bolusturme, tavan | YAPILAN: kara-kara yuruyus (bayrakli), ufuk bantlari, B secici. KALAN: dolgu.js uretilmedi (enklav/koridor/bolusturme B gorunumu calismiyor); MOTOR_YURUYUS'un koşu 18'de acik olup olmadigi olculmedi. |

### parti-emrelic-0043 — 5 madde · cozuldu 2 · sirada 2 · olculecek 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0003 | sirada → **cozuldu** | Kırım bozkırı: gevşek himaye (karar D) + kuzey bozkır boşluğu | data/yerlesimler.js:1011 Voronej `{f:"1441-01-01",t:"1585-01-01",d:"__BOSLUK__",kaynak:"IEU …"}` (artık kirim değil) · koşu 18 donemler.js'te `"h":` himaye gövdesi 327 dönemde (#e8a2aa) · js/app.js:312 gevşek → #e8a2aa · 'Kırım Hanlığı bozkırı' etiketi arac/r… |
| H-0009 | sirada → **cozuldu** | Kırım haritası: Kefe sancağı / Anapa işgalleri | data/yerlesimler.js:595 Anapa `isg:[{f:"1791-07-26",t:"1792-01-09",d:"rusya",kaynak:"TDV anapa …"},{f:"1828-06-24",t:"1829-09-14",d:"rusya",…}]` · kronoloji data/olaylar_p0043kirim.js:44 t:"1791-07-26" · himaye gövdesi (H-0003 ile) |
| H-0010 | sirada → **sirada** | Gürcistan üçe bölündü — Kartli/Kaheti künye ve s: ataması | KALAN: Tiflis (yerlesimler.js:651) ve Zagem (:660) s: hâlâ `gurcistan` 1281→1801; kartli-kralligi/kaheti-kralligi'ye geçirilmeli ve renkler.py'ye boya verilmeli, sonra koşu. |
| H-0015 | sirada → **sirada** | Cizre 1508-1515 boşluğu — Cizre/Bohtan emirliği künyesi | Cizre (Bohtan) emirliği künyesi devletler.js'e (TDV cizre) yazılıp 1508-01-01→1515-09-19 s: dönemi verilmeli. |
| H-0017 | olculecek → **olculecek** | 1517 Mısır Batı Çölü / Berka ışınsal çıkıntılar | EKSİK: güncel yayında 1517-09-10, 24.4-31.1E/20.8-26.9N kutusunun tarayıcı görüntüsü (ışınlar hâlâ var mı) ya da SERBEST hat havuzunda o kutudaki uç sayısı ölçümü. |

### parti-emrelic-0044 — 4 madde · olculecek 2 · cozuldu 2

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0002 | olculecek → **olculecek** | Mohac sonrasi yerlesimsiz parca (Debrecen petegi) ve 1526-1529 tabilik baslangici | Erdel · Varad · Debrecen'in 1526-1529 durumu icin TDV sorgusu (KITA 19, M-3678) hala yapilmadi; sonuca gore v: baslangiclari duzeltilmeli. |
| H-0004 | sirada → **cozuldu** | Himaye gosterimi: tabi devletin sinirinda Osmanli kirmizisi serit + Budin | js/app.js:2151 harita.addLayer({ id: 'himaye-serit-dis' …}) · :2165 'himaye-serit-ic' · tasarim notu :2104 'himaye-serit-ic #d4707d' · data/yerlesimler.js:469 Budin v 1529-09-08..1541-08-29 'Zapolya vasal', d 1541-08-29.. (Budin 1541'e dek dogrudan degil) |
| H-0011 | olculecek → **olculecek** | 1546 Basra kiyisindaki isinsal bozulmalar | Koşu 18 (bogaz yasagi dahil) ciktisinda bozulmanin surup surmedigi ekranda olculmeli; suruyorsa delta dolgu noktalari yazilmali. |
| H-0012 | sirada → **cozuldu** | Van 1548 fethi: Caldiran ve Baskale 1548'de Osmanli'ya gecmeli | data/yerlesimler_ek26.js:130 Çaldıran neden:'H-0001 · 1548-1639 safevi ADACIĞI kaldırıldı', d 1548-08-24..1920-04-23 · :138 Başkale ayni · Özalp, Yüksekova, Çölemerik, Kotur, Bargiri d 1548-08-24 · Hoy 1548'de safevi (TDV'ye uygun) |

### parti-emrelic-0045 — 5 madde · sirada 4 · olculecek 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0007 | sirada → **sirada** | Tum savaslarin hikayeleri ek okuma olarak | Is acik uclu ('tüm savaşlar'): YAPILAN dalgalar indi; KALAN kapsama (325 cekirdek savas maddesinden kartsizlar) yeniden sayilmali ve siradaki dalga verilmeli. |
| H-0009 | sirada → **sirada** | Tum antlasmalarin hukum + onem + sebep-sonuc ek okumalari | Acik uclu: 153 cekirdek antlasma maddesinden kartsiz kalanlar yeniden sayilmali (onceki olcum 111 kartsiz). |
| H-0010 | sirada → **sirada** | Padisah magazin/komplo/ilginc hikaye ek okumalari | Acik uclu: I. Ahmed · III. Mustafa · II. Mahmud · II. Abdulhamid · V. Mehmed olum kartlarinin varligi tek tek sayilmali; Yildirim 'demir kafes' kaynaksiz (yazilmadi). |
| H-0011 | sirada → **sirada** | Mimari yapilarin uslup/teknik ek okumalari | Sadabad karti yazilmali; 62 cekirdek mimari maddeden kartsizlar yeniden sayilmali. |
| H-0012 | olculecek → **olculecek** | Fizan sonrasi Osmanli toprakları ortasindaki bosluk | Bosluk mekanizmasi koşu 18 ciktisinda olculmeli; dogru bosluk ise kasitli_bosluk/dolgu beyani yazilmali (komsu kum denizleri emsali). |

### parti-emrelic-0046 — 3 madde · cozuldu 3

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0007 | sirada → **cozuldu** | Revan alinirken Gumru ve Ecmiyadzin | Birlesik yama indi: data/yerlesimler.js:661 Revan d 1583-09-13→1604-06-08 (eski 1583-06-01 duzeldi); data/yerlesimler_ek26.js:87 Gumru ve :91 Ecmiyadzin ayni pencere d 1583-09-13→1604-06-08 (G-REVAN/G-ECMIYADZIN/G-GUMRU) |
| H-0010b | sirada → **cozuldu** | Nahcivan/Ordubad 1590: Serur, Maku, Caldiran, Baskale kusurlari | Serur data/yerlesimler_kalite4.js:56 d 1586-01-01→1603-10-21 (1590 tahriri); Maku data/yerlesimler.js:1830 d 1574-01-01→1639-05-17; Caldiran/Baskale yerlesimler_ek26.js:130/138 d 1548-08-24→1920-04-23; Nahcivan (:650) ve Ordubad 1590'da d. (Nahcivan 1587-88 S… |
| H-0012 | sirada → **cozuldu** | Ferhad Pasa ile Caldiran, Baskale, Gumru, Ecmiyadzin, Maku, Serur, Merend, Selmas kimde | 1590-03-21'de sekizi de Osmanli: Caldiran/Baskale ek26.js:130/138 · Gumru/Ecmiyadzin ek26.js:87/91 · Maku yerlesimler.js:1830 · Serur kalite4.js:56 · Merend yerlesimler.js:1825 d 1588-09-01→1603-10-21 · Selmas :1824 d 1585-09-25→1603-10-21 (13 Eylul kararlari) |

### parti-emrelic-0047 — 1 madde · sirada 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | sirada → **sirada** | Ferhat Paşa 1590 sonrası Kasr-ı Şirin, Zencan, Sultaniye, Bicar, Merivan, Sakız, Bane, Serdeşt, Mahabad kimde | YAMA-FERHATPASA-BIRLESIK-0913.json'un kalan kalemleri: Kasr-ı Şîrîn d (Bağdat sancağı) · Merîvan, Bane v tâbi (BOA 1582/1585) · Sakkız, Serdeşt örtülü tâbi (karar) · Sarab/Miyane köşesi. |

### parti-emrelic-0048 — 5 madde · sirada 2 · bayat 1 · olculecek 1 · cozuldu 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | sirada → **sirada** | 1590 Ustyurt-Karakum-Aşağı Yayık beyaz bölgesi (boy adları, Nogay dilimi, Harizm 1593-1598 Özbek işgali) | Beyazlığın büyük kısmı KASITLI (bos:kabile) — kalan üç öneri uygulanmamış: ① boy adları (Salur/Teke/Yomut/Esen İli) harita etiketi ② Aşağı Yayık-Emba dilimine Nogay noktası ③ Harizm 1593-1598 Buhara işgali kaydı. |
| H-0009 | sirada → **bayat** | 1602 Katar doğusunda Safevî gövdesinin tuhaf şekilli taşması (Doha peteği) | Canlı ölçüm (ölçüm aleti: scratchpad/sahip4.py — data/devletler_harita.js (koşu 18 çıktısı, C:/atlas-kosu18/data/donemler.js ile bayt-bayt aynı olduğu doğrulandı) yabancı gövdeleri; nokta-poligon; Osmanlı gövdesi bu dosyada yok ⇒ 'hiçbiri' = Osmanlı ya da sah… |
| H-0010 | sirada → **olculecek** | 1602 Katar batısında sınır hattında 0,3-257 km'lik dev doğru parçaları (üçgen görüntü) | EKSİK: koşu 18'in data/donemler.js SERBEST havuzunda 1602 Katar batısı (≈24.5-26.5K, 50-51E) hattının segment uzunluk dağılımı (>100 km segment var mı). |
| H-0011 | sirada → **cozuldu** | Doha/Katar 1602'de Safevî mi görünüyor — Osmanlı(-tâbi) olmalı | data/yerlesimler_ek_korfez.js:66-70 `{ ad:"Katar Yarımadası (iç, dolgu)" … v:[{ f:"1559-01-01", t:"1670-01-01", k:"Katar (Benî Müsellem) — Lahsâ beylerbeyiliğine bağlı", statu:"vassal"` (GIRDI_DOSYALARI'nda) + canlı ölçüm: 1602-06-01 Doha ve Katar içi → safev… |
| H-0015 | sirada → **sirada*** | Her antlaşma maddesinde (1) hükümler (2) önem/sebep-sonuç ek okuması + önce/sonra harita | süzgeç: Hünkâr İskelesi 1833 · Mondros 1918 özel kartı yok — kısmen · Özel id'li kart bulunmayanlar: Hünkâr İskelesi 1833, Mondros 1918 (metin içinde anılıyorlar); küçük antlaşmalar tam kapsanmamış olabilir. |

### parti-emrelic-0049 — 1 madde · cozuldu 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | sirada → **cozuldu** | Caldiran ve Baskale'nin hangi tarihte kimde oldugu | data/yerlesimler_ek26.js:130 Caldiran ve :138 Baskale: s safevi 1502→1548-08-24 · d 1548-08-24→1920-04-23 · s tbmm-turkiye 1920-04-23→1923-10-29 (91 yillik Safevi adaciklari kalkti; Van fethi gunu 24 Agustos 1548). Acik yan kalemler (Seyhrumi, Kotur) not dust… |

### parti-emrelic-0050 — 8 madde · cozuldu 7 · sirada 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | sirada → **cozuldu** | Rus tarih yaziminda Kirim Hanligi ek okuma dosyasi | data/ekokuma_kirimrus.js:45 `Moskova yanıyor: Kırım hanlarının kuzey seferleri` · :56 `Hediye mi, haraç mı?` · :67 esir ekonomisi · :78 `Çarlık ve Sovyet tarih yazımında Kırım` · :89 `Aynı hanlık, dört ayna`; yukleyici app.js:11117 |
| H-0002 | sirada → **cozuldu** | 1638 Bagdat fethinde Orta Irak yerlesimlerinin Bagdat'la birlikte donmesi; Sehrizor/Halepce | Yama A indi: Hille (data/yerlesimler.js:1854), Kerbela (:741), Necef, Bagdat (:740) hepsi d 1638-12-24 (12-25 ayrismasi yok); Sehrizor (:715) d 1630-03-16 (yama B); Kerkuk (:739) ve Musul (:738) Safevi dilimi 1624-1625 (yama D/E). Arastirma denetim/ARASTIRMA-… |
| H-0003 | sirada → **cozuldu** | I. Mustafa kizlaragasi ek okuma karti + basliktaki 'dogrulanamadi' ibaresinin temizlenmesi | Baslik temiz: data/olaylar_ek17.js:46 `b:"I. Mustafa on beş yıllık unutuluşun ardından öldü", ic_not_b:"eski b soneki: — kızlarağası rivayeti doğrulanamadı (H-0003)"`; metin okur diline cevrildi (:49 'Halk arasında kızlarağasının onu bir odaya kilitlediği anl… |
| H-0004 | sirada → **sirada** | PAKET-TEMIZ: okur metinlerinden gelistirici kaliplarinin ayiklanmasi | 0065/H-0005 ile tek editor turu: kalan ~110 okur-alani isabeti + ekokuma_rivayet.js:179 basligi. |
| H-0005 | sirada → **cozuldu** | Kasr-i Sirin ek okuma dosyasi | data/ekokuma_kasrisirin.js:50 `Zühâb ovasında üç gün: antlaşma nasıl imzalandı?` · :61 `Kasr-ı Şirin'in hükümleri` · :84 `Kurucu belge mi, kurucu efsane mi?`; yukleyici app.js:11115 |
| H-0006 | sirada → **cozuldu** | Kasr-i Sirin sonrasi Halepce ve Sehrizor dogru tarafta mi | Ikisi de 1639 sonrasi Osmanli (kaynakla uyumlu): Sehrizor data/yerlesimler.js:715 d 1630-03-16→1918-10-30; Halepce :1875 d 1638-12-24→1917-03-11. Madde madde karsilastirma denetim/ARASTIRMA-BAGDAT-0914.md:110-134 ('Şehrizor → Osmanlı'ya', 'Halepçe → Osmanlı'y… |
| H-0007 | sirada → **cozuldu** | magazin/kisi/nasil bilirdiniz kartlarinin akordeona cevrilmesi + icerik duzeni | js/app.js:10101-10115 `PAKET-UI4 · kutu 0050/H-0007 ... Kartvizit artık AYRI bir sekmeli bölüm DEĞİL: her bölümü ek okuma akordeonunda bir SATIR` (AKORDEON_EK_TUR: kv-kunye, kv-nasil, kv-magazin); icerik tarafi data/ekokuma_magazin.js:404 ic_not `(PAKET-EK-B … |
| H-0008 | sirada → **cozuldu** | I. Ibrahim donemi skandal/magazin ek okumalari | data/ekokuma_ibrahim.js:48-169, 12 kart (orn. :59 Cinci Hoca, :92 samur, :158 `Klis'i saklayan sadrazamın 'bin parça' sonu` = Hezarpare, :169 hal' gunu); Varvar/gidiklama/Sisman kadin/kafes anahtar kelimeleri ekokuma_ibrahim.js'de var; yukleyici app.js:11114 |

### parti-emrelic-0051 — 8 madde · sirada 4 · cozuldu 3 · bayat 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | sirada → **cozuldu** | İbrahim'in hal'i ↔ IV. Mehmed cülusu sırası | data/olaylar_ek2.js:92 artık `b:"Sultan İbrahim'in katli", gun:"18 Ağustos 1648"` (görseldeki '8-18 Ağustos … hal'i ve katli' değil) · data/olaylar_ek7.js:82 cülus 1648-08-08 — katl cülustan sonra, sıra doğru |
| H-0002 | sirada → **cozuldu** | Şüpheli ölümler / hanedan dışı katl kartları | data/ekokuma_padisah.js:85 `H-0045 (+51/H-0002) · … TEK PARAGRAFTAN 13 AYRI KARTA` · :92-165 `supheli-olum-*` 10 kart · :173 `olum-osman-ii-1622` · :189 `olum-kosem-sultan-1651` |
| H-0003 | sirada → **sirada** | Vestfalya maddesinde odak + Otuz Yıl ek okuma | KALAN: kartın bağı `olay:["1648-08-08¦IV. Mehmed"]` — cülus maddesine bağlı, Vestfalya maddesine (1648-10-24) değil; bağa 'Vestfalya' eklenmeli. |
| H-0004 | sirada → **sirada** | 1652 Sloboda gövde bindirmeleri | KALAN: aynı pencerede hâlâ rusya×don-kazak 6.047 km² (39.37E 50.17N, Ostrogojsk doğusu) ve lehistan×rusya 1.074 km² (34.2-34.9E 50.4N) çakışma. |
| H-0005 | sirada → **cozuldu** | Kâtib Çelebi ek okuma | data/ekokuma_rivayet.js:87 `id:"kimdir-katib-celebi"` · :71 `teknik-cihannuma-katib-celebi` · :79 `teknik-kesfuzzunun-katib-celebi` · js/app.js ~11160 `"ekokuma_rivayet"` |
| H-0006 | sirada → **sirada** | Yanova maddesinde 'harita onu tâbi renkte gösteriyordu' geliştirici cümlesi | İki maddenin (Yanova 1658, Varad 1660) d: metninden 'harita … gösteriyordu' meta cümlesi çıkarılıp okura dönük anlatımla değiştirilmeli. |
| H-0007 | sirada → **sirada** | Levant'ta özerk yapılar (Harfûşoğulları · Lübnan emirliği) — kaynak/tarih açıklaması | KALAN: Lübnan emirliği (Ma'noğulları/Şihâbîler, 1516-1842) için okura dönük açıklama kartı yok (yalnız 1861 bunv-lubnan kartı). |
| H-0008 | sirada → **bayat** | 1670 Lahsa/Katar bozuk desen (Safevî şeridi Katar'da) | koşu 18, 1670-01-01, kutu 47.08-53.34E/22.82-28.47N: gövde çakışması 0 km²; Doha / Katar içi (51.35E 25.3N, 51.5E 25.6N) hiçbir gövdede değil — görseldeki mor Safevî şeridi yok; Bahreyn safevi (tarihen 1602-1717 doğru) |

### parti-emrelic-0055 — 10 madde · cozuldu 9 · sirada 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | sirada → **sirada** | Antlaşma maddesinde 'Haritada gör' düğmesi + bırakılan topraklar taralı + 'X'e bırakıldı' etiketi, BÜTÜN antl… | YAPILAN: düğme + çizim mekanizması + 4 antlaşma verisi (Karlofça etiketleri Avusturya/Lehistan/Venedik'e bırakılan). KALAN: ~400 antlaşma maddesinin geri kalanı için antlasma_haritalari.js kaydı (D-GEOARAC aleti çıktısından kaynaklı eşleşmelerle). |
| H-0002 | sirada → **cozuldu** | Vasal devletlerin SINIR çizgisi açık kırmızı, iç dolgu Osmanlı kırmızısı | js/app.js:~2068 `harita.addLayer({ id: "vassal-serit-dis" ... "line-color": "#b2384a"` + hemen altında `vassal-dolgu` `"fill-color": "#8e0b22"` (H-0084 notu: dolgu Osmanlı'ya eşitlendi, ayrım dış şeritte) · js/d_katman.js:77 `var D_VASAL_RENK = "#d4707d"` (DA… |
| H-0003 | sirada → **cozuldu** | Reisülküttap Râmi Mehmed Efendi ek okuması | data/ekokuma_vezir.js:390-394 `ad:"Râmi Mehmed Paşa"` (başlık yorumu: '30 · Reisülküttab/Sadrazam Râmi Mehmed Paşa (H-0003)'); yükleyici js/app.js _EKOKUMA_DOSYA_ADLARI içinde `"ekokuma_vezir"` |
| H-0004 | sirada → **cozuldu** | Rusya'nın denize çıkışı (Petersburg/Baltık, Kuzey Buz Denizi, Kamçatka, sıcak denizler) ek okuması | data/ekokuma_dunya.js:447 `{ id:"dunya4-rusyanin-denize-cikisi-sicak-denizler", tur:"tartisma"` — kisa: 'Petersburg'un kendi limanı bile yılın birkaç ayı buzla kapanır; Kamçatka…'; yükleyici `"ekokuma_dunya"` |
| H-0005 | sirada → **cozuldu** | Karadeniz'in kuzeyinin tarihsel etnik yapısı ek okuması (Kırım Tatarları, Ukraynalılar, Kazaklar, Çerkezler, … | data/ekokuma_karadeniz.js:40 `tartisma-karadeniz-etnik-genel` · :51 kirim-tatar-nogay · :62 kazaklar · :73 cerkezler · :84 ruslar-ukraynalilar (5 kart); yükleyici js/app.js `"ekokuma_karadeniz"` (TK Kırım, 0055/5) |
| H-0006 | sirada → **cozuldu** | Edirne Vakası 1703 / Feyzullah Efendi ek okuması + siyasi/askeri darbe etiketi + genel darbeler ek okuması | data/ekokuma_padisah.js:~346 `{ id:"tartisma-edirne-vakasi-1703-feyzullah"` (metinde '[ETİKET: askeri-darbe]') + hemen altında `{ id:"tartisma-osmanli-darbeleri-tipoloji"` (dokuz vaka, siyasi/askeri darbe ayrımı); yükleyici `"ekokuma_padisah"` |
| H-0007 | sirada → **cozuldu** | Bağdat Kölemenleri ek okuması (kimdir, Mısır'dan farkı, İstanbul'un tepkisi) | data/ekokuma_vezir.js:400-407 `ad:"Kölemen Mısır'a özgü sanılır — ama Bağdat'ı 127 yıl aynı sistem yönetti"` · `olay:["1704-01-01¦Kölemen"]`; ayrıca data/ekokuma_kolemen.js (3 kart, app.js yükleyicide) |
| H-0008 | sirada → **cozuldu** | Tunus (valiler → Hüseynîler) + Kuzey/Doğu Afrika eyaletlerinin idari yapısı genel ek okuması | data/ekokuma_rivayet.js:~290 `{ id:"sebep-sonuc-tunus-huseyniler-1705"` · ~301 `{ id:"teknik-dogu-afrika-eyaletleri-idari-yapi"` (Mısır, Sudan, Habeş) · zincir: `statu-garp-ocaklari-cezayir` (data/ekokuma_statu.js, Cezayir/Tunus/Trablus) |
| H-0009 | sirada → **cozuldu** | 'Bu iki şehir' = Vahran (Oran) ve Mersalkebîr (DALGA-0055 tablosuna göre) — önem ve niçin geç alındı ek okuma… | data/ekokuma_dunya.js:~460 `{ id:"dunya4-vahran-mersalkebir-1708", tur:"tartisma"` · `olay:["1708-04-04¦Vahran"]`; ek: data/ekokuma_akdeniz.js:40 'Vehrân (Oran): iki asır boyunca alınıp verilen bir liman…' |
| H-0010 | sirada → **cozuldu** | Itrî ek okuması + ünlü eserleri | data/ekokuma_rivayet.js:~312 `{ id:"kimdir-itri"` `ad:"Buhûrîzâde Mustafa Itrî Efendi"`; metinde 'En tanınmış yapıtı SEGÂH TEKBİR'idir … Segâh Salât-ı Ümmiyye, Rast Na't' |

### parti-emrelic-0056 — 6 madde · cozuldu 6

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | sirada → **cozuldu** | Libya/Trablusgarp yönetimi ek okuma | data/ekokuma_rivayet.js:319 `DALGA-0056 madde 1 — Trablusgarp: valilerden Karamanlılara` · :320 `id:"sebep-sonuc-trablusgarp-karamanlilar-1711"` · zincir statu-garp-ocaklari-cezayir (ekokuma_statu.js:127) |
| H-0002 | sirada → **cozuldu** | Prut: Baltacı eleştirisi · Katerina rivayeti · net kazanç | data/ekokuma_vezir.js:421 `tartisma-baltaci-prut-firsat-mi-kacirdi` · :432 `tartisma-prut-net-kazanc-neden-saglanamadi` · data/ekokuma_padisah.js:372 `tartisma-katerina-baltaci-rivayeti` |
| H-0003 | sirada → **cozuldu** | Deli Petro kişi kartı | data/kisiler.js:175 `id:"petro1"` not alanı 2.268 karakter (doğum/ölüm, Büyük Elçilik, St. Petersburg, Poltava, Prut …) — komşu kayıt katerina2 1.188 |
| H-0004 | sirada → **cozuldu** | Demirbaş Şarl Bender/Kalabalık ek okuma | data/ekokuma_dunya.js:476 `id:"dunya5-demirbas-sarl-bender-kalabalik"` |
| H-0006 | sirada → **cozuldu** | Voyvodalıkların yabancı ittifakı — Osmanlı toprağı tartışması | data/ekokuma_karadeniz.js:114 `tartisma-voyvodaliklar-ittifak-osmanli-topragi` (ad: 'Yabancı devletle ittifak yapan bir voyvodalık Osmanlı toprağı sayılır mı?') · js/app.js ~11163 yükleyicide |
| H-0007 | sirada → **cozuldu** | Eflak/Boğdan/Erdel niçin ilhak edilmedi — karşılaştırma | data/ekokuma_karadeniz.js:125 `tartisma-voyvodaliklar-ilhak-karsilastirma` (ad: 'Bulgaristan, Sırbistan, Bosna ilhak edildi; Eflak, Boğdan, Erdel niçin edilmedi?') · olay bağları 8 maddeye serpiştirilmiş (Tırnova, Sırbistan, Bosna, Budin, Boğdan×3, Hotin) · a… |

### parti-emrelic-0057 — 6 madde · cozuldu 5 · sirada 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | sirada → **cozuldu** | İstendil (Tinos) 1715 — Venedik'in son Ege adası ek okuması | data/ekokuma_venedik.js:33 `{ id:"venedik-istendil-tinos-1715", tur:"sebep-sonuc"`; yükleyici js/app.js `"ekokuma_venedik"` (0057/1-2) |
| H-0002 | sirada → **cozuldu** | Venedik karada zayıf denizde güçlü, Mora'yı niçin geri verdi ek okuması | data/ekokuma_venedik.js:45 `{ id:"venedik-denizde-guclu-karada-zayif-mora-1715", tur:"tartisma"` |
| H-0003 | sirada → **cozuldu** | Prens Eugen'in Avusturya hafızasındaki yeri ek okuması | data/ekokuma_avusturya.js:32 `{ id:"avusturya-prens-eugen-hafiza", tur:"dis-yankilar"` ('Bu kart yalnız onun SONRADAN nasıl hatırlandığını anlatır'); yükleyici `"ekokuma_avusturya"` |
| H-0004 | sirada → **cozuldu** | Osmanlı'nın askeri açıdan Avusturya'dan geri kaldığı noktalar ek okuması | data/ekokuma_avusturya.js:46 `{ id:"avusturya-osmanli-askeri-geri-kalis-1683-1718", tur:"tartisma"` |
| H-0005 | sirada → **cozuldu** | Kesik çizginin anlamı (Karlofça Sava hukuki sınırı) + Bosna Brodu'nun yanlış 1699-1918 Avusturya kaydı | data/yerlesimler_ek29.js:285-288 `{ ad:"Bosna Brod'u (Bosanski Brod)"` `d:[{f:"1538-01-01",t:"1718-07-21"},{f:"1739-09-28",t:"1908-10-05", kaynak:"Karlofça metni ('Bred on the part of Bosnia … shall be drawn out') …"}]` — artık Karlofça sonrası OSMANLI; yerle… |
| H-0006 | sirada → **sirada*** | Ek okuma başlıklarının ('… kimdir' gibi) düzeltilmesi + kronoloji maddesiyle ilgililik denetimi | süzgeç: başlıksız 29 kart kalıyor (app.js ~11677 yorumu) — kısmen · app.js yorumu başlığı olmayan 29 kartın kaldığını söylüyor (~11677). |

### parti-emrelic-0058 — 3 madde · cozuldu 3

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | sirada → **cozuldu** | Lale Devri ek okumaları | data/ekokuma_lale.js:29-241 24 kart (lale-devri-onemi · -adi · -yenilikler · -onemli-insanlar · -tepkiler · -bitisi-patrona-isyani · -sebep-sonuc · merak kartları) · js/app.js ~11167 `"ekokuma_lale"` |
| H-0002 | sirada → **cozuldu** | Nevşehirli Damad İbrahim Paşa kartı genişletme | data/ekokuma_vezir.js:154 `id:"kimdir-nevsehirli-damad-ibrahim-pasa"` — metin 2.198 karakter, kaynak: 'TDV: damad-ibrahim-pasa-nevsehirli (kart genişletildi: sadrazamlık öncesi kariyeri, Yirmisekiz Çelebi … )' |
| H-0003 | sirada → **cozuldu** | Pasarofça ek okuma + harita etiketleri | data/ekokuma_antlasma4.js:47 `antlasma4-pasarofca-1718` (baslik '…sebep, görüşmeler, hükümler ve diplomatlar', diplomatlar:[…]) · data/antlasma_haritalari.js:62 `id: "pasarofca-1718"` taraf etiketleri 'Avusturya'ya bırakılan' · 'Osmanlı'da kalan' · 'Venedik't… |

### parti-emrelic-0059 — 7 madde · cozuldu 5 · sirada 2

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | sirada → **sirada** | Levnî Surnâme-i Vehbî minyatür seçkisi albüm olarak | KALAN: index.html'e `<script src="js/album.js">` (app.js'ten sonra) bağlanmalı — yoksa albüm düğmesi çıkmıyor |
| H-0002 | sirada → **cozuldu** | Tulumbacı/kâğıt/matbaa gecikme kıyası ek okuma | data/ekokuma_yenilesme.js:32 `"id": "yenilesme-uc-kurum-gecikme-kiyasi" … "baslik": "Tulumbacı Ocağı, kâğıt fabrikası, matbaa: üç kurumun gecikme kıyası"` · yükleyici js/app.js:11168 |
| H-0003 | sirada → **cozuldu** | Matbaa niçin ~300 yıl geç geldi tartışma + kıyas | data/ekokuma_yenilesme.js:33 `"id": "matbaa-300-yil-gecikme-tartismasi", "tur": "tartisma", "baslik": "Matbaa Osmanlı'ya niçin ~300 yıl geç geldi?"` + :34 1747-1826 kartı · yükleyici js/app.js:11168 |
| H-0004 | sirada → **cozuldu** | Yirmisekiz Mehmed Çelebi kişi kartı + elçilik/Paris ek okumaları | data/kisiler.js:456 `id:"yirmisekiz-celebi-mehmed-efendi"` (~1.380 karakterlik not) · data/ekokuma_lale.js:68 `kimdir-yirmisekiz-celebi-mehmed-efendi`, :79 `yirmisekiz-elciligin-onemi`, :89-139 yedi Paris/Sefâretnâme magazin kartı · yükleyici js/app.js:11167 |
| H-0005 | sirada → **cozuldu** | Elçilik/konsolosluk kurumunun tarihi ek okuma | data/ekokuma_diplomasi.js:35 `id:"diplomasi-konsoloslugun-dogusu"` · :49 `diplomasi-daimi-elciligin-dogusu` · :63 `diplomasi-osmanli-daimi-elcilik-1793` · yükleyici js/app.js:11169 |
| H-0006 | sirada → **cozuldu** | Başka milletlerde yeniliğe karşı ayaklanmalar kıyası | data/ekokuma_kiyas.js:33-35 `id:"kiyas-yenilige-tepki-ayaklanmalari", tur:"tartisma"` olay Sâdâbâd/Patrona/Kabakçı/Nikon/Hint/Satsuma/Boksör · yükleyici js/app.js:11170 |
| H-0007 | sirada → **sirada** | Rus Hazar seferi harita kontrolü (Derbend kopuk) + Rusya-İran ek okuma | KALAN: kalem 3 Tarki (Tarku) hâlâ `{f:"1501-07-01",t:"1736-03-08",d:"safevi"}` (yerlesimler.js:632) — 1722-1735 kumuk-şamhallığı/rusya dönemleri yazılmalı (künye+renk ön koşulu ya da alternatif B) |

### parti-emrelic-0060 — 2 madde · cozuldu 2

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | sirada → **cozuldu** | Osmanli ve Rusya Iran'i niye bolustu (1724) ek okumasi | data/ekokuma_rusiran.js:44 `baslik:"Osmanlı ve Rusya İran'ı Niçin Bölüştü (İstanbul Mukāsemenâmesi, 1724)"` (+ ekokuma_antlasma4.js:498); yukleyici app.js:11138 |
| H-0002 | sirada → **cozuldu** | 1723-27'de Gumru, Ecmiyadzin, Serur, Maku'nun Revan/Nahcivan ile beraber boyanmasi | Hepsi Revan'la ayni gun: Revan data/yerlesimler.js:661 d 1724-10-03→1735-10-03; Gumru ek26.js:87 ve Ecmiyadzin ek26.js:91 d 1724-10-03→1735-10-03; Serur kalite4.js:56 d 1724-10-03→1735-10-03; Maku yerlesimler.js:1830 d 1724-10-03→1735-10-03 |

### parti-emrelic-0061 — 1 madde · cozuldu 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | sirada → **cozuldu** | Osmanlı İran seferi + Rus İran ilerleyişi (1722-1735) birlikte | data/olaylar_ek7.js:208 `1722-09-03 Rus kuvvetlerinin Derbend'i alması` · data/olaylar_p0917kosu13.js:16 `1723-08-06 … Bakü'yü alması` · data/olaylar_p0060.js:20/22/26/28 (Reşt 1723 · Petersburg Antlaşması · Reşt Antlaşması 1732 · Gîlân'ın boşaltılması) · dat… |

### parti-emrelic-0062 — 1 madde · sirada 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | sirada → **sirada** | Ferhat Paşa dönemi iç koridor (Gümrü, Eçmiyadzin, Mâku, Şerur, Mahabad, Bâne, Bîcâr) Osmanlı teyidi | KALAN: data/yerlesimler_kalite4.js:43 Bâne yalnız `d:[{f:"1723-11-10",t:"1732-01-10"}]` — 1590-1603 Osmanlı dönemi teyit edilip yazılmalı |

### parti-emrelic-0063 — 11 madde · cozuldu 9 · sirada 2

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | sirada → **sirada** | 1725'te Hazar kiyisi Rus isgali (Tarku, Kuba, Lenkeran, Erdebil, Halhal) ve Osmanli'nin aldigi yerler | YAPILAN: Taliş (Lenkeran/Astara), Rest, Derbend, Baku, Salyan Rus; Erdebil/Halhal Osmanli (YAMA-0063-HAZAR T1 + YAMA-0063-IRAN). KALAN: YAMA-0063-HAZAR'in Tarku (Rus tabi, 1726 sonrasi dogrudan) ve Kuba (Rus payi, tabi) kalemleri veriye inmemis — ikisi hala s… |
| H-0002 | sirada → **cozuldu** | Ibrahim Muteferrika kisi karti detayi + matbaa ek okumalari | data/kisiler.js:428 id:'ibrahim-muteferrika' not alani 1065 karakter (eser listesi dahil) · data/ekokuma_lale.js:164 id:'kimdir-ibrahim-muteferrika' · data/ekokuma_toplum.js:112 id:'muteferrika-matbaasi-kurulusu' · data/ekokuma_yenilesme.js:3 'DALGA-0063.md m… |
| H-0003 | sirada → **cozuldu** | Kronoloji maddesi ve ek okuma satirlarinda sag tik 'basligi / maddeyi kopyala' menusu | js/app.js:7223 div.addEventListener('contextmenu' … kopyaMenusuAc) · :7320-7321 'Başlığı kopyala' / 'Maddenin tamamını kopyala' · :11693-11699 'UI-ETKILESIM (DALGA-0063 madde ③) — ek okuma satırının başlığına/gövdesine sağ tık' · :11883 ek-kart contextmenu |
| H-0004 | sirada → **cozuldu** | Haritada bos noktaya tiklayinca yer sayfasi acilmasin, yalniz sehir adina tiklaninca acilsin | js/app.js:6214-6246 'UI-ETKILESIM (DALGA-0063 madde ④) … Haritada boş bir noktaya tıklayınca yer sayfası AÇILMASIN' — _sehirAdiTiklandiMi() .s-ad kutularina elle hit-test; js/app.js:6900 yalniz portre tiklaninca album |
| H-0005 | sirada → **sirada** | 1725'te Merend, Culfa, Maku, Serur, Gumru, Ecmiyazin, Kotur, Selmas, Urmiye Osmanli mi | YAPILAN: 9 yerden 8'i 1724-1730 Osmanli. KALAN: Kotur'a 1724-1730 d: donemi yazilmali (YAMA-0063-IRAN kalem 8 — ortulu, Emre onayi bekliyordu). |
| H-0006 | sirada → **cozuldu** | Patrona Halil kimdir, derdi nedir ek okumalari | data/ekokuma_lale.js:185 'Lâle Devri nasıl bitti: Patrona Halil İsyanı' · :193 id:'kimdir-patrona-halil' · :204 'Patrona Halil'in derdi neydi: isyancıların talepleri…' · :7 'DALGA-0063 madde 6 · 9' · yukleyici js/app.js:11130 |
| H-0007 | sirada → **cozuldu** | Kronoloji maddesindeki resme tiklayinca buyusun | js/app.js:6912-6925 resimBuyut() 'UI-ETKILESIM (DALGA-0063 madde ⑦)' · :11036-11040 img click → resimBuyut · index.html:955 <div id='resim-buyut-pencere'> · css/style.css:2151 |
| H-0008 | sirada → **cozuldu** | Sag tik cetvel: etiket kapaninca silinsin + cok durak | js/app.js:3008-3018 'UI-ETKILESIM (DALGA-0063 madde ⑧) … duraklar bir DİZİ — her sağ tık ZİNCİRE yeni bir durak ekler … kapatma etiketi GERÇEKTEN SİLİYOR (.remove())' · :3083-3086 tek contextmenu isleyicisi · :3086 '✕ Ölçümü kapat' |
| H-0009 | sirada → **cozuldu** | I. Mahmud'un isyancilari derdest etmesi + isyancilarin rezaletleri ek okumasi | data/ekokuma_lale.js:212 id:'patrona-isyancilarin-yaptiklari' ('İsyancıların İstanbul'u: yağmalar, sürüklenen cesetler…') · :221 id:'mahmud-i-patrona-isyancilarini-derdest' ('I. Mahmud isyancıları nasıl ortadan kaldırdı: Sünnet Odası tuzağı') |
| H-0010 | sirada → **cozuldu** | Iran'in Ruslari kendi topraklarindan cikarmasi kronolojide | data/olaylar_p0063.js:22-35 '---- H-0010: İran'ın Rusları kendi topraklarından çıkarması' — :24 1724-09-11 Salyan'da Rus taburunun yok edilmesi … 1734-11-09 Rus çekilme buyruğu · 1735-05-01 Bakü'nün teslimi · :32 1735-05-08 'Derbend'in İran'a teslimi — on üç … |
| H-0011 | sirada → **cozuldu** | 1736-39 Rus savasinin sebebi ve Ozi'nin dusmesi kronolojide/ek okumada | data/ekokuma_avusturya.js:62-63 id:'avusturya-1736-1739-savasi-sebep-ozi' ('…niçin başladı, Özi (Özü) nasıl düştü?') · data/olaylar_p0063.js:37 1735 'Kırım kuvvetlerinin Kabartay üzerinden İran'a sevki — … savaşın bahanesi' · :39 1736-05-02 'Rusya ile savaş k… |

### parti-emrelic-0065 — 16 madde · cozuldu 10 · sirada 6

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | sirada → **sirada** | 1757-02-28 Ragip Pasa sadrazamligi maddesinin kisiler: alani (portre III. Mustafa'dan geliyor) | YAMA-0065-PORTRE.json'daki tek satiri uygula: kisiler 'III. Mustafa' -> 'III. Osman' ve d: metnini duzelt (portre otomatik osman3.jpg olur). |
| H-0002 | sirada → **cozuldu** | unlu sozler/vecize ek okumasi (ekokuma_vecize) | data/ekokuma_vecize.js:30,40,50,60 — 4 kart: Kanuni 'bir nefes sihhat', Sokullu 'sakalimizi kestiniz', Ragip Pasa 'uzaktan heybetli', III. Mustafa 'Yikiliptir bu cihan'; yukleyici js/app.js:11142 `"ekokuma_vecize"` |
| H-0003 | sirada → **cozuldu** | III. Mustafa fal/muneccim, borc senedi, savas hirsi, Cesme sonrasi Venedik notasi ek okumalari | data/ekokuma_rivayet.js:345 `Bir padişah, uğurlu saat gelmeden hiçbir iş görmezdi` · :355 `Bir padişah kendi çocuklarından borç aldı` · :366 `Savaşı sadrazam mı istedi, padişah mı?` · :375-376 id tartisma-cesme-sonrasi-venedige-nota; yukleyici app.js:11123 |
| H-0004 | sirada → **sirada** | Ragip Pasa vefat maddesi ve kimdir kartindaki gelistirici notlari | ekokuma_vezir.js:137'deki 'İDAM EDİLMEDİ —' ifadesini okur diline cevir; olaylar_ek7.js:122 d: metnini 'TDV'nin ... maddesine göre' kalibindan arindir. |
| H-0005 | sirada → **sirada** | butun kronoloji/ek okuma okur metinlerinde gelistirici notu temizligi (editor turu) | Kalan ~110 okur-alani isabetini editor turuyla ic_not'a tasi / okur diline cevir (ozellikle ekokuma_* ⚠️ bloklari ve kronoloji_iran.js:332). |
| H-0006 | sirada → **sirada** | dugme paneli: motor tani hatlari, veri siniri, koridor agi, tam ekran dugmesi, fiili/hukuki anahtari | Tam ekran dugmesini kare + metin etiketli ('⛶ Tam ekran') yap (index.html:171 + app.js:12214 metin degisimi). |
| H-0007 | sirada → **cozuldu** | otomatik odak ayari butonlar icine; cografya/motor hatlari/veri siniri/koridor agi dugmeleri ve 'motor hatlar… | index.html:150-158 `DALGA-0074/H-0001 — zaman barından BURAYA taşındı` + `<button id="btn-zoom" ...>🔍 Oto</button>` (#menu-butonlar icinde); dort dugme index.html:50-72'de silinmis; motor tani kutusu index.html:135 kaldirilmis ('kesikli' index.html'de 0 isabe… |
| H-0008 | sirada → **cozuldu** | Istanbul depremleri, yanginlari, selleri, Bogaz'in donmasi ek okumalari | data/ekokuma_dunya.js:536 `İstanbul'un büyük depremleri — dört yüzyılda dört kıyamet` · :549 `İstanbul'un büyük yangınları` · :561 `Boğaz'ın buza kestiği kış` (1909 Goksu seli de ayni kartta); yukleyici app.js:11121 |
| H-0009 | sirada → **cozuldu** | 1768-1774 Osmanli-Rus savasinin sebebi ek okumasi | data/ekokuma_antlasma4.js:1160 `baslik:"1768-1774 Osmanlı-Rus Savaşı niçin çıktı? Lehistan meselesi ve Balta olayı"`; yukleyici app.js:11127 |
| H-0010 | sirada → **cozuldu** | sefer oklari harekati yapan devletin rengiyle (kural) | js/app.js:5380-5406 `_seferRengiCoz`: 'ÜLKE BİLİNİYORSA RENK ONDAN TÜRER' (Emre kurali, SEFER-OK-0070) · data/savaslar.js:967 `rus-golitsin-hotin-1769 ... devlet:"rusya"` (1769 Dinyester/Hotin seferi) |
| H-0011 | sirada → **cozuldu** | 1769 Ruslar Hotin'e nereden geldi; Podolya/Kamanice Lehistan mi (hata mi) | Harita dogru: data/yerlesimler.js:467 Kamanice `{f:"1699-01-26",t:"1793-01-23",d:"lehistan"}`; Rus yolu artik ok olarak cizili: data/savaslar.js:967 `Golitsın'ın Hotin seferi — Podolya'dan Dinyester'e (1769)`. Arastirma: denetim/ARASTIRMA-A6B-0913.md:17 ve KA… |
| H-0012 | sirada → **cozuldu** | Cesme baskini: Rus donanma rotasi kesik cizgi + simge/etiket cakismasi | Rota: data/savaslar.js:911 `a4-rus-filosu-cesme-1770 ... tur:"deniz" ... devlet:"rusya"` (deniz = uzun kesik, app.js:5052-5058); cakisma: js/app.js:3860-3887 + :4118-4121 `H-0015/H-0012·14: yakında (3 km içinde) tam boy bir savaş işareti zaten açıksa bu küçük… |
| H-0013 | sirada → **cozuldu** | Cesme baskini savas hikayesi ek okumasi | data/ekokuma_savas.js:405-407 `"id": "savas-cesme-1770" ... "baslik": "Çeşme Baskını (6-7 Temmuz 1770)"` (oncesi/akis/sonuc/tartisma; mukerrer yazilmadi — EKO-VEZIR-0916.md §8); yukleyici app.js:11097 |
| H-0014 | sirada → **sirada** | butun haritada, butun zamanlarda etiket/simge cakismasi | Butun zaman cizgisinde (orn. yogun olay gunleri) ekran goruntusu ile etiket cakismasi olcumu yapip kalan cakisma siniflarini gider. |
| H-0015 | sirada → **cozuldu** | Kartal (Kagul) bozgunu ek okumasi | data/ekokuma_savas1770.js:18-20 `id: "savas-kartal-kagul-1770" ... baslik: "Kartal (Kagul) Bozgunu (1 Ağustos 1770)"`; yukleyici app.js:11146 |
| H-0016 | sirada → **sirada** | savas kunyeleri: taraflar, komutanlar, piyade/suvari/top/tufek/gemi sayilari, kaynaksizsa 'bilinmiyor' | Savas kunyesi semasina sayisal alanlar (piyade, suvari, top, tufek, gemi; her biri kaynak/bilinmiyor) ekle ve SAVASLAR'daki muharebelere dagit. |

### parti-emrelic-0067 — 8 madde · cozuldu 5 · bayat 1 · olculecek 1 · sirada 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | sirada → **cozuldu** | Anapa sonrasi Cerkezistan, Soci/Sase/Tuapse/Maykop egemenligi | data/yerlesimler.js:595 Anapa d:OSMANLI 1781-01-01..1829-09-14 · :612 Soçi (Sâşe), :613 Tuapse, :615 Maykop (Çerkezya) v:'Çerkez kabileleri (Osmanlı hâkimiyet iddiası)' 1783-04-19..1829-09-14 — YAMA-CERKEZISTAN-0917 'kıyı ≠ iç, tanıma ≠ doğrudan idare' hukmu … |
| H-0002 | sirada → **bayat** | Haritadaki mavi kesikli cizginin anlami | js/app.js:4810-4832 'EKLENDİ (DALGA-0067 H-0002, ISGAL-TARAMA)' tanilejantiGuncelle — 'Motor tanı hatları: nehre yaslanma (#00bcd4 kesikli) · sırta yaslanma'; index.html:162 '⑥ Motor tanı hatları KUTUSU KALDIRILDI — 29 Eylül 2026, Emre kararı (a)' (artik yaln… |
| H-0003 | sirada → **cozuldu** | Fransiz Ihtilali'nin devletlere/olaylara etkileri ek okumalari | data/ekokuma_ihtilal.js:59 id:'ihtilal-osmanli-genel-baglam' · :71 Misir · :83 Sirp/Yunan · :97 Rusya · :109 Avusturya · :121 Prusya · :133 Italya · :148 Venedik · :164 Fransa Misir'i nicin istedi — yukleyici js/app.js:11148 'ekokuma_ihtilal' |
| H-0004 | sirada → **cozuldu** | Osmanli ordusu Rusya'nin askeri/teknolojik ne kadar gerisindeydi — tartisma ek okumasi | data/ekokuma_tartisma.js:187 'EKO-TARTISMA … DALGA-0067 H-0004' · :201-202 id:'tartisma-osmanli-rus-ordusu-18yy' 'Osmanlı ordusu 18. yüzyılda Rusya'nın ne kadar gerisindeydi?' · yukleyici js/app.js:11099 |
| H-0005 | sirada → **cozuldu** | Yesil/sari noktali cemberli sehir anlami + Bihac liva miydi | Gosterim: js/app.js:2928 lejant '◎ Kuşatma (sarı, nabız gibi atar)' (1788-02-09 Bosna kuşatma isaretleri). Veri: data/yerlesimler_ek.js:371 Bihaç kd:[1592-06-19..1699-01-26 k:2, 1699-01-26..1865-01-01 k:3, 1865..1908 k:2] = YAMA-0067-BIHAC.json 'yeni' birebir… |
| H-0006 | sirada → **olculecek*** | Iki sehir etrafindaki koyu cember anlami | süzgeç: güven düşük, işaretin lejant karşılığı ekranda teyit edilmedi · Gorseldeki isaretin lejanttaki hangi satir oldugu (Buyuk merkez mi kusatma mi) ekranda teyit edilmedi. |
| H-0007 | sirada → **cozuldu** | Sebes (Karansebes) 1788 ek okumasi, iki tarafin kaynagi | data/ekokuma_karsi.js:156-157 id:'karsi-karansebes-1788' 'Karánsebes (Şebeş) 1788: kendi kendini yenen ordu hikâyesinin aslı' · yukleyici js/app.js:11145 'ekokuma_karsi' |
| H-0008 | sirada → **sirada** | Butun kisi kartlarini 1-4 paragrafa cikarmak | YAPILAN: parti 1-2 (~44 kisi) inmis gorunuyor. KALAN: ~227 kart hala 1-2 cumle (<200 karakter); YAMA-KISI-KART-2-0917 'kalan_backlog 221' ile uyumlu — sonraki partiler. |

### parti-emrelic-0069 — 1 madde · olculecek 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0002 | kosu-bekliyor → **olculecek*** | 1804 Bihac eksklav gorunumu — Novi/Dubica/Brod eski s:avusturya kaydi | süzgeç: veri/kod delili VAR ama ajan kendi 'kalan'ında tarih kesitinde görsel/geometri teyidi yapılmadığını yazdı → delil eksik sayıldı · Gorsel dogrulama (1804 ekraninda Bihac'in Bosna'ya bitisik gorunmesi) yapilmadi. |

### parti-emrelic-0070 — 10 madde · cozuldu 5 · sirada 2 · olculecek 2 · senin-kararin 1

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | sirada → **cozuldu** | Ek okuma satırında kategori SİMGESİ + üzerine gelince kategori ipucu + yanında başlık; Campo Formio kartların… | js/app.js `_ekEtiketiBol` + ~11690 `var turAdi = bol.ad + (EKOKUMA_TUR[s.tur] ? " ek okuma" : "")` (yorum 'EKOKUMA-SIMGE-0070 (0070/H-0001): satır başı = SİMGE, yanı = maddenin BAŞLIĞI') · css/style.css:1949 EKOKUMA-SIMGE-0070 · Campo Formio kartları data/eko… |
| H-0002 | olculecek → **sirada** | 1798 Napolyon Mısır işgalinin haritadaki kapsamı kaynakla doğru mu | YAPILAN: ölçüm yapıldı, 4 kayıt düzeltildi (Sina güneyi kaldırıldı). KALAN: Dimyat · Asyut · Reşîd işgal günü hâlâ kaynaksız 1798-07-01 (beyanlı borç) — akademik kaynaktan gün bulunmalı. |
| H-0003 | olculecek → **olculecek*** | Sınır boyundaki ışınsal üçgen 'diş' gösterim hatası | süzgeç: veri/kod delili VAR ama ajan kendi 'kalan'ında tarih kesitinde görsel/geometri teyidi yapılmadığını yazdı → delil eksik sayıldı · Görsel teyit (tarayıcıda Emre'nin iki kutusu) bu doğrulamada yapılmadı. |
| H-0004 | olculecek → **olculecek*** | Sınır boyunca üçgensel gösterim bozukluğu (H-0003 ile aynı kusur) | süzgeç: ikizi 0070/H-0003 görsel teyitsiz olduğu için olculecek'e indi — ikiz kapanmadan once-cozuldu olamaz · İkizi parti-emrelic-0070/H-0003 — js/app.js:244 `dpSadelestir` + :273 `serbestHat` (SINIR-DIS-0070 çare A) |
| H-0005 | sirada → **cozuldu** | Ebukır 1798-08-01 deniz muharebesi noktasına haritada deniz savaşı simgesi | data/olaylar_ebukir_0919.js:23-27 `{ t:"1798-08-01" … b:"Ebukır (Nil) deniz muharebesi…", yer_id:"Ebûkîr"` (paket_kunye.json:509'da pakete bağlı) + js/app.js ~3665 `var MUHAREBE_K = {… deniz: "deniz" …}` ve `DENIZ_KALIP = /(deniz muharebesi¦…)/i` → `SAVAS_TUR… |
| H-0006 | sirada → **sirada** | Bütün savaş/sefer/işgallerde ordu güzergâhı OK animasyonu (koyu renk, işgal bölgesine dalan, taralı yanıp sön… | YAPILAN: ok animasyonu mekanizması + güzergâhı olan seferler. KALAN: güzergâhı olmayan ~1877 harekât maddesi için kaynaklı güzergâh verisi (uydurmadan). |
| H-0007 | sirada → **cozuldu** | Olay alanı yanıp sönen emoji ile gösterilmeli | js/app.js ~13466 `function isaretYanipSon(hedef, glif)` — üstündeki yorum 'DALGA-0070 H-0007 … olayın gerçekleştiği alan YANIP SÖNEN EMOJİ ile gösterilmeli … Glif halkanın İÇİNE giriyor', glif `olayMuharebeTuru(o)`dan. js/app.js satır no'ları 30 Eyl akşamı öl… |
| H-0008 | sirada → **cozuldu** | Ele geçirme standardı: odaklanma → koyu renkte 2 kez yanıp sönme → 3.'de yeni sahibin rengi; bütün devletler | js/app.js ~10557 `var ELE_GECIRME_DILI = {` (yorum: 'hâl sırası: once → koyu → once → koyu → once → sonra') + js/anim_dili.js:1-30 ortak sıralayıcı `SIRA = ["ok", "vurus", "cozul"]` (index.html:1901'de bağlı). js/app.js satır no'ları 30 Eyl akşamı ölçümü (dos… |
| H-0009 | sirada → **cozuldu** | 13 Mayıs 1805 (Mehmed Ali'nin vali ilanı) Mısır tarih anlatısında nasıl işlenir ek okuması | data/ekokuma_misir1805.js:43 `{ id:"misir1805-tarih-anlatisi", tur:"karsi-anlati"`; yükleyici js/app.js `"ekokuma_misir1805"` ('13 Mayıs 1805'in Mısır tarih yazımındaki yeri') |
| H-0010 | senin-kararin → **senin-kararin** | İşgal/fetih/ilhak/istilâ/harekât terim ve gösterim standardı | Emre'nin A/B/C seçimi bekleniyor; öneri ölçülü ve hazır (TERIM-STANDART-0070.md §4). |

### parti-emrelic-0071 — 14 madde · cozuldu 14

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0001 | sirada → **cozuldu** | 1806 savaşının sebebi / Rusya'nın bahanesi ek okuma kartı | data/ekokuma_1806.js:82 `id:"1806-savasin-sebebi-voyvoda-azli", tur:"sebep-sonuc"` + :92 `id:"1806-rusyanin-amaci-bahane-mi"` (baslik "Rusya'nın amacı neydi? Bahane bellidir…"), olay bağı `1806-11-23¦Dinyester` (madde data/olaylar_p0056.js'te var) · js/app.js… |
| H-0002 | olculecek → **cozuldu** | Eflak-Boğdan 1806-1812 Rus işgali `isg:` kayıtları (YAMA-ISGAL-1806 önerisi) | data/yerlesimler.js:1376 Hotin `isg … {f:"1806-11-30",t:"1812-05-28",d:"rusya"}` (eski 1806-01-01 düzelmiş) · :2294 Krayova, :2291 Slatina, :2297 Turnu Severin `"f":"1806-12-25","t":"1812-05-28","d":"rusya"` · :459-461 Roman/Birlad/Kalas · :2299-2300 Soroka/O… |
| H-0003 | sirada → **cozuldu** | Duckworth 1807 deniz güzergâhı kesikli çizgi | data/seferler_p0071.js:32-33 `id:"p0071-duckworth-1807" … tur:"deniz"` (window.SEFERLER_P0071, paket_kunye.json:1313 ile paket'e giriyor); js/app.js:5392 `s.tur === "deniz"` dalı; tarayıcı sınavı denetim/SINAV-OK-0071-duckworth-1807.png |
| H-0004 | sirada → **cozuldu** | Reşid 1807 olay yerinin haritada yanıp sönmesi | data/olaylar_ek4.js:44 `yer_kon:[31.4044,30.4177]` · js/app.js:13429 `function isaretYanipSon(hedef, glif)` · css/style.css:2605 `animation: odakParla 0.55s ease-in-out 3;` · data/savaslar.js:288 Reşid (Rosetta) lat/lon |
| H-0005 | sirada → **cozuldu** | Yenileşme karşıtı ayaklanmalar toplu ek okuma (Kabakçı, Patrona, 31 Mart, Genç Osman) | data/ekokuma_1806.js:112 `id:"yenilesme-karsiti-ayaklanmalar-etiket", tur:"tartisma"` olay `["1622-05-20¦Genç Osman","1730-09-25¦Patrona","1807-05-25¦Kabakçı","1859-09-14¦Kuleli","1909-04-13¦31 Mart"]` + :102 `kabakci-isyani-niye-cikti` · js/app.js:11192-1119… |
| H-0006 | sirada → **cozuldu** | IV. Mustafa'nın şahsiyeti + tarihçilerin görüşü ek okuma | data/ekokuma_1806.js:122 `id:"kimdir-dorduncu-mustafa", tur:"kimdir"` + :130 `id:"dorduncu-mustafa-sevilen-mi", tur:"tartisma"` (baslik "IV. Mustafa: tarihçilerin ortak hükmü ve TDV'nin itirazı") · js/app.js:11192-11193 yükleyici listesinde (`ekokuma_alemdar`… |
| H-0007 | sirada → **cozuldu** | Alemdar'ın Rusçuk→İstanbul yürüyüş oku + yurt içi harekât ok standardı | data/savaslar.js:894 `id:"a4-alemdar-istanbul-1808", ad:"Alemdar Mustafa Paşa'nın Rusçuk'tan İstanbul'a yürüyüşü (1808)", tur:"sefer" … renk:"#6b2d8a"` (yol Rusçuk→Edirne→İstanbul) · standart: data/seferler_p0071.js:48 `p0071-hareket-ordusu-1909` · :56 `p0071… |
| H-0008 | sirada → **cozuldu** | 28 Temmuz 1808 kargaşası / III. Selim'in katli / II. Mahmud ek okuma | data/ekokuma_alemdar.js:48 `id:"alemdar-28-temmuz-1808-kargasa", tur:"sebep-sonuc"` olay `["1808-07-28¦III. Selim öldürüldü","1808-07-28¦II. Mahmud tahta çıktı"]` · js/app.js:11192-11193 yükleyici listesinde (`ekokuma_alemdar`, `ekokuma_1806`) |
| H-0009 | sirada → **cozuldu** | Alemdar Mustafa Paşa'nın şahsiyeti ek okuma | data/ekokuma_alemdar.js:60-63 `id:"alemdar-mustafa-pasa-sahsiyet", tur:"kimdir"` baslik "Alemdar Mustafa Paşa nasıl bir adamdı…" · js/app.js:11192-11193 yükleyici listesinde (`ekokuma_alemdar`, `ekokuma_1806`) |
| H-0010 | sirada → **cozuldu** | Âyanlar: liste, bölge, konum, atanma biçimi ek okuma | data/ekokuma_alemdar.js:69-72 `id:"ayan-hangi-aile-nereyi-tutuyordu"` ("Hangi âyan nereyi tutuyordu…") + :79-82 `id:"ayanlik-isyan-mi-ozerklik-mi", tur:"tartisma"` ("…âyanı göreve kim getiriyordu?"), olay `1808-10-07¦Sened-i İttifak` · js/app.js:11192-11193 y… |
| H-0011 | sirada → **cozuldu** | Alemdar vak'ası + II. Mahmud'un tavrı tartışma | data/ekokuma_alemdar.js:90-93 `id:"alemdar-vakasi-mahmudun-tavri", tur:"tartisma"` olay `1808-11-16¦Alemdar` (madde data/olaylar_ek2.js:90 t:"1808-11-16" mevcut) · js/app.js:11192-11193 yükleyici listesinde (`ekokuma_alemdar`, `ekokuma_1806`) |
| H-0012 | olculecek → **cozuldu** | İmereti ilhakı Soçi-Anapa kara bağlantısını kesti mi (soru) | Soru cevaplandı: denetim/ISGAL-1806-0920.md:164-176 "Hayır, İmereti'nin ilhakıyla kesilmedi" (atlasta zinciri kesen Sohum 1810-07-11; canlıda data/olaylar_ek6.js:94 t:"1810-07-11" ve data/yerlesimler.js:596 Sohum kd bitişi 1810-07-11) |
| H-0013 | olculecek → **cozuldu** | Sohum el değiştirme animasyonu (sebep: ay hassasiyetli madde günü) | data/olaylar_ek6.js:94 `{ t:"1810-07-11", k:"kayip" … b:"Sohum'un Ruslara kaybı…", gun:"11 Temmuz 1810"` — kırılma günüyle (yerlesimler.js:596 Sohum `t:"1810-07-11"`) aynı; teşhis denetim/ISGAL-1806-0920.md:183-215 |
| H-0014 | sirada → **cozuldu** | Osmanlı 1806-1812'de Ruslara niçin direnemedi tartışma | data/ekokuma_alemdar.js:101-104 `id:"ruslara-niye-direnilemedi-1806-1812", tur:"tartisma"` olay `["1810-07-11¦Sohum","1810-09-26¦Rusçuk"]` (ikisi de canlı: olaylar_ek6.js:94, olaylar_ek7.js:142) · js/app.js:11192-11193 yükleyici listesinde (`ekokuma_alemdar`,… |

### parti-emrelic-0080 — 16 madde · cozuldu 7 · sirada 5 · olculecek 2 · senin-kararin 2

| madde | eski → yeni | hedef | delil / kalan |
|---|---|---|---|
| H-0002 | kosu-bekliyor → **sirada** | data/ufuk_bantlari.js (7/10 gün bantları) + arayüz seçicisi | YAPILAN: tek koşu üç bandı (5/7/10) üretti (karar buydu: ek koşu gerekmez). KALAN: dosya .gitignore'da ve 266 MB (GitHub tek dosya sınırını aşar) → yayına nasıl ineceği (bölme/sıkıştırma) + index.html'de seçicinin geri konması. |
| H-0006 | sirada → **cozuldu** | Şehzade Halil ek okuma kartları | data/ekokuma_p77a.js:76 `id:"kimdir-sehzade-halil-orhan-oglu"` · :92 `id:"p80-sehzade-halil-sebep-etki-sonuc"` · ikisi de `olay:["1357-08-01¦Şehzade Halil"]` · yükleyici js/app.js ~11228 `"ekokuma_p77a"` |
| H-0008 | senin-kararin → **olculecek*** | Uzunköprü enklavı — kur:+devir kararı | süzgeç: veri/kod delili VAR ama ajan kendi 'kalan'ında tarih kesitinde görsel/geometri teyidi yapılmadığını yazdı → delil eksik sayıldı · Karar artık açık değil. Petek devrinin koşu 18 çıktısında gerçekten komşuya geçtiği ÖLÇÜLMEDİ (çıktı dosyaları diskten kalktı) — denetle.py docstring'i de 'muafiyet kapanış kanıtı değildir' diyor. |
| H-0009 | kosu-bekliyor → **cozuldu** | 1361 Boğaz Avrupa yakasında Osmanlı parçası (Beşiktaş/Üsküdar taşması) | koşu 18 donemler.js: 1361-05-05→ dönemde Avrupa yakası (motor_kara Avrupa bileşeni ∩ kutu 28.94-29.12E/41.0-41.25N) Osmanlı alanı 0,0 km²; Beşiktaş/Ortaköy/Kabataş noktaları Osmanlı değil. Yama: uret_petek.py sha 8b6aaea5 = çıktının URETIM_IZI motor sha'sı |
| H-0010 | kosu-bekliyor → **cozuldu** | 1453 öncesi Beşiktaş kıyısı Osmanlı (= H-0009) | koşu 18: 1361 dönemi Avrupa yakası Osmanlı 0,0 km² (ekteki kutu 41.00-41.12N 28.94-29.08E) · aynı ölçüm H-0009 |
| H-0011 | senin-kararin → **senin-kararin** | Gümülcine üç tarih seçimi · Dedeağaç · Örmen | TDV'nin 1361/1363/1371 tarihlerinden seçim hâlâ koordinatörde; Dedeağaç kaynağı ve Örmen noktası yok. |
| H-0014 | olculecek → **olculecek*** | Çirmen Savaşı ↔ Dejanoviç vasallığı sırası (1371-09-26) | süzgeç: veri/kod delili VAR ama ajan kendi 'kalan'ında tarih kesitinde görsel/geometri teyidi yapılmadığını yazdı → delil eksik sayıldı · Harita durumu ikisinde AYNI (v: 1371-09-26'da başlıyor, yerlesimler.js:314) — aynı gün ayrışmaz; bu kaynak gün vermediği için kasıtlı. Tarayıcıda görsel sınama yapılmadı. |
| H-0017 | olculecek → **cozuldu** | Timur çekilişi sefer okunun bir sonraki maddede belirmesi | js/app.js:5800-5813 `28 Eylül 2026 — ARAYUZ-0077 · paket 0080 H-0017 … Başında madde varsa kırpma gerekçesiz ⇒ ok kendi gününde belirir` + `if (olaylar[bi].gi === m.fi) { m._fiKirpik = m.fi; break; }` · veri: savaslar.js:656 f:"1403-03-15" = olaylar_ek5.js:53… |
| H-0019 | olculecek → **sirada** | Dünya çapında eksklav/enklav doğrulama taraması | Önce eksklav ölçütünü tanımlamak, sonra 725'lik kovayı kaynakla sınıflandırmak (KORIDOR-0081 ⑤/⑥/Ⓝ sınıfları). |
| H-0020 | kosu-bekliyor → **sirada** | Tiflis kuzey üçgeni — Kartli-Kaheti noktaları | Çare veri: üç nokta yazılmadı. Önce Gori/Telavi/Duşeti yerleşimlere inmeli, sonra koşu. (Koşu beklemiyor, veri bekliyor.) |
| H-0021 | kosu-bekliyor → **sirada** | 7/10 gün verisinin koşulması (= H-0002) | Koşu yapıldı; kalan yayın (266 MB, gitignore) + seçicinin geri konması. = 0080/H-0002. |
| H-0022 | sirada → **cozuldu** | Tahrir defterleri ek okuma | data/ekokuma_p80b.js:30 `id:"p80b-tahrir-defterleri-nasil-okunur"` · :51 `olay:["1431-01-01¦en eski tahrir defteri"]` (madde olaylar_p0057b.js:20) · js/app.js ~11230 `"ekokuma_p80b"` yükleyicide |
| H-0023 | sirada → **cozuldu** | Tımar sistemi ek okuma | data/ekokuma_p77c.js:171 `id:"timar-sistemi-1432-1827"` · olay:["1432-06-01¦Tımar sisteminin kurumsallaşması",…] (madde olaylar_ek14.js:109) · js/app.js ~11233 `"ekokuma_p77c"` |
| H-0024 | senin-kararin → **senin-kararin** | Şehirköy (Pirot) 1443-01-01 yıl kodu | Kasım 1443'e çekmek 'zincirleme komşu günü' yasağına takılıyor — hüküm koordinatörde. |
| H-0026 | sirada → **cozuldu** | Saray ovası ilhakı ek okuma | data/ekokuma_p77a.js:108 `id:"p80-saray-ovasi-ilhak-1448"` · `olay:["1448-01-01¦Saray ovası"]` (madde olaylar_ek10.js:444) |
| H-0027 | sirada → **sirada** | İstanbul fethi derin pencere / kitapçık | KALAN: düğmeden yayılarak büyüme animasyonu, sayfanın bir kısmını kaplayan panel (bugün inset:0 tam ekran), sur/zincir/gemi/top/hendek sembol-sahne katmanı. |

