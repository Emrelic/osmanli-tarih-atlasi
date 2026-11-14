# KASA — Sabah raporu, 14 Kasım 2026 (07:40)

Emre'nin "sabaha kadar çalış, koordine et, eksikleri tespit et, benim yerime karar ver" talimatı üzerine gece boyunca yürütülen iş. Her satır ölçüme dayanır; ölçülmeyen "ölçülmedi" yazılır.

## 1. Ölçülen durum
- `origin/main` = `0e889da30` (14 Kasım 07:33). Gece boyunca **13 birleşim partisi** (H→R) kapıdan geçip `main`'e girdi; her biri `coz-c` + `denetle.py` 0 + `denetle_yayin.py` 0 ile.
- Koşu 38 tabanı `092b3b669`'dan beri `main`'de **440 commit** var; koşu 38 bunların hiçbirini görmez (koşu 39'a kalır).
- Koşu 38 (HAVVA): 02:33'te gövde 1190/2246, iki süreç çalışıyor, RAM tavanda (işçi artırılamaz). Güncel durum HAVVA'dan istendi (ölçülmedi).
- Değişmezler (son tam `denetle`): D1 sahipsiz 306 (tavan 306) · D1b 0 · D2 760 kırılma 0 açık · D2i 349/0 · D4c 0 · D4d 0 (26'dan) · D5 0 · D8a 270 (tavan 270). D2s yabancı senkron açığı: 251 → 181 (tur 1-5).
- Antlaşma oynatıcısı: 54 kayıt, ihlal 0 (Lozan, Sevr, Karlofça + 1500-1922 arası ~50 antlaşma; ayrıntı `data/antlasma_madde_*.js`).

## 2. Karar verdiklerim (Emre yerine) — itiraz edersen geri alınır
1. **Koşu 38'e dokunma, bitince in, hemen koşu 39 başlat** (taze `main`'den). Paralel iki koşu RAM'e sığmaz.
2. **`data/yerlesimler.js`'e koşu inişine kadar commit yok** (yayın bayatlık duvarı: Emre 5 Ekim kuralı, yerlesimler.js commit − donemler_on.js commit > 2 gün ⇒ kapı reddeder). Düzeltmeler `denetim/YERLESIMLER-JS-KUYRUK-1114*.md` dosyalarında hazır bekliyor.
3. **Tavan açılımları** (1 Kasım kuralı, sonradan rapor): çeviri eksik/bayat (şu an eksik olay en/ar/es/de 387, pt 1500, ru 3592, fr 4492; bayat 113/92/63/26; arayüz 66 — kaynağı kesin ölçülemedi, her partide +1), antlaşma doğrulanmadı 21, odaksız 465. Sıkılaştırılanlar: sahipsiz 306, belgesiz 2, aşan 0, önce 0, D8a 270; D2sk/yıl-temsilî tavanları bugünkü ölçüme çekildi.
4. **Ölçüt oyunu yasağı**: kaynağın anmadığı yer adını maddeye ekleyerek 2s sayacını kapatmak GERİ ALINDI (14 madde); Beykoz 1395, Yenbu 1200, Sais, Malta 1283, Muş 1405 dahil. Rijeka 1466 ikinci kaynaksız olduğu için geri alındı.
5. **2t ölçütü genişletildi** (yalnız 2t havuzu: kuyruk dosyaları dahil; 218→170): ölçüt gevşetme değil genişletme, tam `denetle` önce/sonra 22/23 satır birebir aynı.
6. **Takvim**: 1582 sonrası Jülyen günü atlas günü olarak kalmış 48 kayıttan 33'ü Gregoryen'e taşındı (Aynalıkavak 03-21, Yedi Ada 04-02, Stolbovo, 9 Rus kaydı…); çeviri anahtarları yeniden adlandırıldı. 15 belirsiz kayıt bırakıldı.
7. **prlib.ru** (Devlet Başkanlığı Kütüphanesi) hakemsiz portal sayılmadı; ic_not'ta beyanlı.
8. **Yedi Ada 1800-04-02** hakemli (TDV Korfu 3 Nisan = aynı hicrî günün sivil tablo çevirisi).
9. **Koşu 39 hazırlığı**: `KOSU39-BORC.md` tuz borçları (Sih, Sadozay/Bârekzây, diadokh-asya, antigonos, Pisa, Valais, P8+P9 palet) EMRELİC'te `emrelic-1113-tuz39` dalında hazırlanıyor; koşu 38 inince koşu 39'dan ÖNCE `main`'e alınacak.

## 3. Emre'ye soru / karar bekleyenler
- **Yunan 1821 başlangıç günü** (19 yerleşim bağlı): 25 Mart (gelenek, Jülyen; Gregoryen 6 Nisan) mı, 6 Mart Gregoryen (Prut geçişi, Beaton) mı, 17-21 Mart mı? `EMRE-SORULARI-1114.md`.
- **Erdel 1699 mı 1711 mi** (Alba Iulia/Braşov): kayıt "Emre onayı 12 Kasım" diyor; HE+TDV 1699 veriyor.
- **MÖ vasal politikası** (Mardonios/Makedonya): `EMRE-SORULARI-1114-EK-EMRELIC.md` E1.
- **1469-01-01 Karakoyunlu→Akkoyunlu kümesi** (95 yerleşim): TDV yalnız "Nisan 1469" diyor; ay hassasiyetiyle 1469-04-01 aday ama yerleşim başına tarih coğrafî tahmin olur — dokunulmadı.
- **Shaw OHAE 2000 (Chronology, hanedan tabloları) + Kitchen TIPE PDF'leri**: Mısır MÖ zinciri bunlar olmadan yazılamıyor (Kova A pilotu 0 halka).
- **Evren dışı 10 satır** (`D2S-EVREN-DISI-1114.md`): kronoloji_<devlet>.js'te madde var ama Değişmez 2 evreni dışında; evreni genişletmedim.
- **Post-it #188** (`js/app.js`, toprak-değişimi satırı düğmeleri gizleme): Emre'nin cevabı yok, `main`'e alınmadı.
- **Koşu 38 ↔ 39 sırası**: onayladığım plan yukarıda; bitiş tahmini HAVVA'dan.
- Eski konular: LAB'ta Chrome'u kapatma + görünür tarayıcı paneli (oynatıcı animasyonu ölçülemedi), 273 eski uzak dal silme, ~21 hayalet "starting" oturumu arşivleme, post-it dağıtıcı (alt ajan) kararı.

## 4. Sahada kalan işler (yerlesimler.js KUYRUĞU — koşu inişi sonrası tek commit)
Lugos, Yanova, Modon 1686-07-10, Erciş/Eski Van, Hürmüz/Kişm, Esterâbâd, Buraydâ/Uneyze, Peşte 1684, Yenbu 1811-09, Beyrut, Belgrad 1355 (Macar 1319-1402 çelişkisi, hakem bekliyor), Vis 1811, Dubrovnik 1806-08, Atina 1833 kırılma ucu, Yedi Ada 12 satır + septinsular künyesi, Bozcaada/İmroz 1913, Novgorod, Muş 1405-07, Zaria/Kano.

## 5. Gecenin hata ve dersleri
- `denetle_yayin` kapıyı 4 kez düşürdü: (a) yiltem `yerlesimler.js` commit'i bayatlık eşiğini 2,01 güne taşıdı; (b) `odak_yer` kamera havuzunda olmayan "Yediçkul"; (c) Šibenik `yer_id` "Š" yerine atlas adı "Ş". İkisini artık `py arac/odak_olc.py` ön kontrolü yakalıyor; kapı log'u ihlali göstermiyor, yerelde `denetle_yayin` koşturmak gerekiyor.
- Toplu birleştirmede iki sessiz hata (bellek notu `birlesme-sonrasi-atalik-ve-script-satiri`): kirli ağaçta merge reddi, `index.html --ours` ile script satırı düşmesi; her birleşimden sonra `merge-base --is-ancestor` + eklenen dosyaların `index.html` kontrolü.
- `--kaynak-tavan-indir` `KAYNAK-TAVAN.json`'u anlamı doğrulanamayan biçimde değiştirdi; geri alındı, kaynak tavanları elle kaldı.
