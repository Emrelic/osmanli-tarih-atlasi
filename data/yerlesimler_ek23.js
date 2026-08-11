// =====================================================================
// ÇANAKKALE — MARMARA — BOĞAZİÇİ KIYI ŞERİDİ  ·  4 nokta
// NOKTA HALKA-1 oturumu · 11 Ağustos 2026
// =====================================================================
// Emre'nin 14 şikâyetinden beşi bu kıyıda açıktı ve hiçbirinin sebebi motor
// kusuru değildi: `CLAUDE.md §2` — *"noktası olmayan bölge en yakın peteğe
// emilir ve O PETEĞİN SAHİBİYLE boyanır."*
//
// ── ÖLÇÜLDÜ: dört yerin dördü de gerçekten emiliyordu ────────────────
// ```
//   Behramkale  ← Molova (Molyvos), LESBOS ADASI   19,3 km   `ceneviz` 1281-1462
//   Beykoz      ← Boğaziçi (Rumeli yakası), AVRUPA  4,4 km   `bizans`  1281-1453
//   Şarköy      ← Karabiga, MARMARA'NIN KARŞI KIYISI 27,3 km OSMANLI   1345'ten
//   Saroz kuzeyi← Çimpe 10,8 km · Bolayır 14,8 km            OSMANLI   1352/54'ten
// ```
// 🔴 VE YÖN TEK DEĞİL. Şartname işi *"olmaması gereken Osmanlı toprak
//    parçaları"* diye çerçevelemişti; ölçüm ikiye ayırdı:
//      ③ ④  Osmanlı FAZLA görünüyor  → Emre'nin şikâyeti, birebir doğrulandı
//      ① ②  Osmanlı EKSİK görünüyor  → yerine Ceneviz ve Bizans boyanıyor
//    `CLAUDE.md §3.5.1`: *noktasızlık İKİ YÖNE de hata üretir ve hangi yöne
//    ürettiği KOMŞUNUN KİMLİĞİNE bağlıdır.* Burada komşular bir ada ve karşı
//    yakadaki bir dolgu noktası.
//
// ── 🔴 ALTI ÖNGÖRÜ, ÖLÇÜMDEN ÖNCE YAZILDI — BEŞİ ÇÜRÜDÜ ──────────────
// (tamamı `oturumlar/NOKTA-HALKA-1-ILERLEME.md §③`te damgalı)
// ```
//   ① Behramkale  ceneviz→X  1400   öngörü 2.000-3.500   ölçüm   489   🔴
//   ② Beykoz      bizans→OSM 1400   öngörü   300-  600   ölçüm   216   🔴
//   ③ Şarköy      OSM→bizans 1350   öngörü   600-1.200   ölçüm    68   🔴
//   ④ Saroz       OSM→bizans 1355   öngörü   400-  900   ölçüm   331   🔴
//   ⑤ ③+④        toplam     1355   öngörü 1.000-2.000   ölçüm   606   🔴
//   ⑥ 1700'de değişen alan          öngörü         0     ölçüm     0   🟢
// ```
// 📌 Beşi de AYNI YÖNDE yanlıştı: hepsini 2-18 kat BÜYÜK tahmin ettim.
//    Sebep ölçüldü — bir noktanın geri kazandığı alan, "yanlış boyanan kıyı
//    ne kadar uzun" ile değil **orta dikmenin ne kadar kaydığıyla** sınırlı,
//    ve kıyıda o çokgenin yarısı DENİZ. Bölgenin ızgarasında 4.066 hücrenin
//    yalnız **2.473'ü kara**.
//    ⇒ Sonraki NOKTA oturumları için taşınabilir sayı: **tek bir kıyı noktası
//      100-500 km² mertebesinde geri kazanır, binlerce değil.**
// 🟢 Ve mazereti önceden "YOK" diye yazdığım tek kalem ⑥ idi — o tuttu:
//    1500 ve 1700 kesitlerinde değişen alan **tam sıfır**.
//
// ── BAĞLANMAK İÇİN NE BEKLİYOR ──────────────────────────────────────
// 🟢 YENİ RENK 0 · YENİ KÜNYE 0 — kullanılan altı kimliğin (bizans · karesi ·
//    isa-celebi · mehmed-celebi · suleyman-celebi · musa-celebi) hepsi hem
//    `renkler.py` BOYALAR'da hem `devletler.js`te tanımlı (ölçüldü).
// 🟢 DEĞİŞMEZ 2 / 2s BORCU **YAPISAL SIFIR**: hiçbir tarih icat edilmedi.
//    Bütün `f:`/`t:` değerleri `yerlesimler.js` **çekirdeğinde** zaten var
//    olan kırılma günleridir (Edremit · Çanakkale · Karabiga · Çimpe ·
//    Bolayır · Keşan · Malkara · Tekirdağ · Anadolu Hisarı).
//    📌 `§11`: *"bu gün zaten var" yetmiyor — hangi KOVADA olduğu da
//    sorulmalı.* Kuyruk dosyalarından gün alınmadı.
// ⚠️ `arac/girdi.py`ye BU OTURUM BAĞLAMADI — koordinatörün kararı.
//
// ── 🔴 BU DOSYANIN KAPATAMADIĞI ŞİKÂYET: Emre'nin BİRİNCİSİ ──────────
// *"ÇANAKKALENİN KARŞI KIYISI KARESİ İLHAKI İLE ALINMIŞ GİBİ UFAK BİR
//  TOPRAK PARÇASI GÖRÜNÜYOR"* — orası Kilitbahir tarafı, yani AVRUPA yakası.
// Sebebi ölçüldü ve **veri eksikliği değil, kaydın kendi içindeki çelişki**:
// ```
//   Kilitbahir  kur:"1452-01-01"      ama zaman çizgisi 1281'den DOLU
//   girdi.py:  "kur: motor bu tarihten ÖNCE peteği komşuya DEVREDER"
//   1452 öncesi peteği alan:  Çanakkale 4,183 km (1345'ten OSMANLI)
//                             Maydos    4,347 km (bizans)      fark 0,164 km
// ```
// 🔴 YENİ NOKTA BUNU ÇÖZEMEZ: Maydos ile Kilitbahir **4,35 km** arayda,
//    aralarına konacak her nokta 3 km kuralını çiğner. Ölçtüm, çıkış yok.
//    ⇒ Çare tek alan — `yerlesimler.js`teki `kur:`. O dosya bu oturumun
//      değil; koordinatöre bildirildi.
//
// ── ⚠️ İKİ KABUL EDİLMİŞ BORÇ (kayıtsız kalırsa yarın kusur diye bulunur) ──
// 1) ŞARKÖY'ÜN 1912-13 BULGAR İŞGALİ YAZILMADI. Şarköy Birinci Balkan
//    Harbi'nde Bulgar hattının gerisindeydi (8 Şubat 1913 Şarköy çıkarması
//    tam bu sebeple yapıldı). Ama komşuları **Keşan ve Malkara'da o dönem
//    YOK** — yalnız Tekirdağ'da var. Tek noktaya yazmak, Osmanlı kalan
//    Keşan-Malkara'nın ortasında **Bulgar adacığı** üretirdi.
//    📌 `§3.5.1`: *bir sınır kayması önerildiğinde İKİ UÇ DA ölçülür.*
//    ⇒ Bu bölgesel bir borç; küme hâlinde düzeltilmeli, nokta nokta değil.
// 2) ① BEHRAMKALE'DE TDV İLE BİR GERİLİM VAR ve saklanmıyor:
//    `hudavendigar-camii--behramkale` *"bölgede kesin Osmanlı hâkimiyeti
//    I. Murad döneminde kuruldu"* diyor (1362-1389). Ben `1345-01-01`
//    yazdım — sebebi TDV değil, **komşu tutarlılığı**: Edremit ve Çanakkale
//    veride 1345'ten Osmanlı, daha geç bir tarih Behramkale'yi 1345-1365
//    arası **Osmanlı toprağı ortasında Ceneviz/Bizans adacığı** yapardı.
//    İkisi çelişmiyor (*"kesin hâkimiyet"* pekişmeyi anlatır, ilhakı değil)
//    ama seçim bir TERCİHTİR ve burada yazılıdır.
//
// ── KAYNAKLAR (hepsi `§4` yöntemiyle sınandı: HTTP kodu + GÖVDE okundu) ──
//   karesiogullari  "Karesi Beyliği Osmanlı topraklarına katıldı
//                    (746/1345 veya hemen sonrası)"
//   gelibolu        "Çimbi Hisarı üs olarak verildi" (1352) · "2 Mart 1354'te
//                    meydana gelen şiddetli zelzele … Osmanlılar savunmasız ve
//                    boş şehri kolayca elde ettiler" · "13 Ağustos 1366'da
//                    Savoy Dükü Amedeo … 1376'daki bu ikinci fetihle"
//   tekirdag        "bölgenin fethinin 1357-1358 yıllarında gerçekleştiği
//                    söylenebilir" (Şehzade Murad, Gelibolu'dan)
//   bogazici        "Yıldırım Bayezid Anadolukavağı'ndaki Yoros Kalesi'ni de
//                    almış" · Anadoluhisarı "1395 yılında Güzelcehisar'ın
//                    inşasından…" · Beykoz maddesi: "Kocaeli fâtihinin burada
//                    oturduğu rivayeti"
//   hudavendigar-camii--behramkale   Behramkale = "Edremit körfezinde antik bir
//                    liman şehri olan Assos'un kalıntıları üzerinde"
// 🔴 ÖLÜ SLUG (302 — denendi, YOK): assos · behramkale · ayvacik · edremit ·
//    sarkoy · kesan · enez · ipsala · saros · bolayir · cimpe · malkara ·
//    yoros · anadolu-kavagi · ganos · peristasis · karesi · biga · rodosto
// ⚠️ VE `beykoz` `§4②`NİN YENİ BİR ALT-SINIFI ÇIKTI: HTTP **200**, başlık
//    **"BEYKOZ"**, iki test de temiz — ama gövde bir **çapraz gönderme
//    kütüğü**: *"bk. BOĞAZİÇİ"*, *"bk. İSTANBUL"*. Düz metni 2.628 karakter
//    ve tamamı arayüz. Madde ÖLÜ değil, **BOŞ da değil** — başka maddeye
//    yönlendiriyor. `§4`ün *"dar slug tutmazsa KAPSAYICI maddeyi dene"*
//    kuralı uygulandı: `bogazici` (70.716 karakter) aranan her şeyi verdi.
//
// ⚠️ Saroz kuzey kıyısı `tur:"bolge"` (dolgu) — o kıyı şeridinde TDV'nin
//    müstakil madde taşıdığı bir yerleşim YOK (arandı: `kesan` · `enez` ·
//    `saros` · `ipsala` ölü; TDV aramasında yalnız cami/türbe maddeleri
//    çıktı). `Boğaziçi (Rumeli yakası)` kaydının aynı konvansiyonu.
//    Zaman çizgisi 18,2 km kuzeydeki **Keşan**'ın birebir aynısıdır.
// =====================================================================
window.YERLESIMLER_EK23 = [

// ① TROAS — Edremit körfezi kuzey kıyısı
// Emilen: Molova (Molyvos), 19,3 km, LESBOS ADASI, `ceneviz` 1281-1462.
// Anakara Assos yarımadası 181 yıl boyunca Ceneviz boyanıyordu; Karesi
// ilhakında (1345) Edremit ve Çanakkale Osmanlı olurken arada kalıyordu.
// Tek başına ölçüldü: 1350-1440 arası **851 km²** (ceneviz→OSM 489 · bizans→OSM 362).
{ ad:"Behramkale (Assos)", tur:"kale", lat:39.4897, lon:26.3376, g:0, k:4, m:"Bursa",
  s:[{f:"1281-01-01",t:"1297-01-01",d:"bizans"},
     {f:"1297-01-01",t:"1345-01-01",d:"karesi"},
     {f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},
     {f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},
     {f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}],
  d:[{f:"1345-01-01",t:"1402-07-28",y:"ilhak"},
     {f:"1413-07-05",t:"1923-10-29"}],
  v:[] },

// ② BOĞAZİÇİ'NİN ANADOLU YAKASI
// Emilen: `Boğaziçi (Rumeli yakası)`, 4,4 km — AVRUPA yakasındaki bir dolgu
// noktası. Anadolu yakası 1453'e kadar Bizans boyanıyordu, oysa Anadolu Hisarı
// 5,6 km ötede 1395'ten Osmanlı. Kırılma günü ondan alındı (`1395-08-01`).
// Tek başına ölçüldü: 1400-1440 **+216 km²** Osmanlı · 1350-1355 **−97 km²**
// (iki yönlü — Aydos/Samandıra'nın kuzeye taşan payı geri alınıyor).
{ ad:"Beykoz", tur:"sehir", lat:41.1275, lon:29.0925, g:0, k:4, m:"İstanbul",
  s:[{f:"1281-01-01",t:"1395-08-01",d:"bizans"},
     {f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},
     {f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},
     {f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}],
  d:[{f:"1395-08-01",t:"1402-07-28"},
     {f:"1413-07-05",t:"1923-10-29"}],
  v:[] },

// ③ MARMARA'NIN RUMELİ YAKASI — EMRE'NİN ŞİKÂYETİNİN TAM YERİ
// Emilen: Karabiga, 27,3 km, MARMARA'NIN KARŞI KIYISI, `d:1345-01-01`.
// Yani Şarköy ve Mürefte **Karesi ilhakıyla** Osmanlı boyanıyordu — Emre'nin
// *"ŞARKÖY TARAFI … KARESİ İLHAKI İLE ALINMIŞ GİBİ"* cümlesi ölçümle birebir
// örtüştü. Trakya'nın fethi ise 1357 (TDV `tekirdag`).
// Tek başına ölçüldü: 1355'te **−275 km²** Osmanlı · 1350'de −68 · 1400'de +34
// (Marmara Adası Bizans kalırken anakara Osmanlı — doğru ayrım).
// ⚠️ Koordinat 0,38 km denizdeydi; `denetle.konum_denetimi`in SINANMIŞ önerisi
//    uygulandı (40.6103,27.1147 → 40.6142,27.1146).
{ ad:"Şarköy", tur:"liman", lat:40.6142, lon:27.1146, g:0, k:4, m:"Edirne",
  s:[{f:"1281-01-01",t:"1357-01-01",d:"bizans"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}],
  d:[{f:"1357-01-01",t:"1402-07-28",y:"kusatma"},
     {f:"1413-07-05",t:"1923-10-29"}],
  v:[] },

// ④ SAROZ KÖRFEZİ KUZEY KIYISI — ÇİMPE GÖRÜNTÜSÜNDEKİ PARÇA
// Emilen: Çimpe 10,8 km (`d:1352-03-01`) ve Bolayır 14,8 km (`d:1354-03-02`) —
// ikisi de körfezin GÜNEY yakasında, Gelibolu yarımadasında. Emre:
// *"ÇİMPE KALESİ ELE GEÇTİĞİNDE … SAROZUN KUZEYİNE … ŞÜPHELİ OSMANLI TOPRAK
// PARÇASI"*. Ölçüm doğruladı: kuzey kıyı 1352'de Osmanlı oluyordu.
// Tek başına ölçüldü: 1355'te **−331 km²** Osmanlı; 1400 ve sonrası 0
// (Keşan 1357'de Osmanlı olduğu için fark kapanıyor — beklenen).
// ⚠️ Koordinat 1,77 km denizdeydi; SINANMIŞ öneri uygulandı
//    (40.63,26.70 → 40.6456,26.6950).
{ ad:"Saroz kuzey kıyısı", tur:"bolge", lat:40.6456, lon:26.6950, g:0, k:0,
  s:[{f:"1281-01-01",t:"1357-01-01",d:"bizans"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}],
  d:[{f:"1357-01-01",t:"1402-07-28"},
     {f:"1413-07-05",t:"1923-10-29"}],
  v:[] },

];
