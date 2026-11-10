# KUNYE-NIHAI-1108 — KALAN (FAZ 2 uygulanmadı)

8 Kasım 2026. FAZ 1 (KARAR.md) tamam. FAZ 2'de `data/devletler.js`e hiçbir künye EKLENMEDİ: kaynak turu (1 Sonnet alt ajan, 10 öncelik-1 aday) günü yalnız Timor-Leste için verdi; ayrıca EMRELİC CUMA ek kuralı (her AÇ künye için ≥3 günlü kaynaklı kronoloji maddesi, `data/kronoloji_<kisaltma>.js`, `onem`/`dunya`/`tur`/`etiket`/odak) künye başına ayrı bir kaynak turu ister; bu oturumun bağlam/limit bütçesine sığmadı.

## Kaynak turu sonucu (öncelik-1 aday, 8 Kas, tek alt ajan; HLS 403 verdi, çoğu sonuç Vikipedi aynası = dayanak sayılmadı)
| aday | f | t | düzey | sonraki adım |
|---|---|---|---|---|
| timor-leste | 2002-05-20 | süren | gün var (hükûmet metni + ikincil); akademik değil | AÇ'a hazır: künye + 3 madde (kuruluş 2002-05-20, 1999-08-30 referandum/UNTAET, 2006 kriz ya da AB/ASEAN) ; boya anahtarı seçilecek (renk_bekleyen) |
| kubadogullari | bulunamadı (TDV SAMSUN yıl vermiyor; ~1398 = Bayezid'in ilk alışı, kuruluş değil) | 1420 (TDV: fetih; Cüneyd'in ölümü 1417-19) | tek kaynak, yalnız yıl | f için İSAM/DergiPark Samsun beylikleri; f yoksa yıl yazma |
| teselya-sirp-yunan | 1359 (aday, TDV'de doğrulanmadı) | ~1393-94 (TDV TIRHALA) | tek kaynak, yalnız yıl | TIB Thessalien; Simeon Uroš 1359 kaynakla |
| sadgeldi-amasya | bulunamadı | bulunamadı | zayıf | TDV AMASYA, DergiPark Eretnaoğulları/Kadı Burhâneddin; **KARAR=ERTELE** |
| hakkari-beyligi | bulunamadı (TDV HAKKÂRİ şehir maddesi) | bulunamadı | yok | Şerefhan Şerefnâme, TDV "Bedirhan", Bruinessen; **KARAR=ERTELE** |
| arnavutluk-anjou-kralligi | 1272-02-21 (yalnız Vikipedi) | 1368 / 1367 / 1376 / 1383 çelişkili | zayıf | Ducellier, Fine, Cambridge Medieval History |
| jumbe-sultanligi | ~1840 (TDV MALAVİ) | 1894 / 1895 çelişkili | f tek kaynak | Kalinga, Hist. Dict. of Malawi |
| gwiriko | ~1714 (1740?) | 1897 (Britannica yıl; 1897-09-25 Vikipedi) | yalnız yıl | Wilks, Person, TDV BURKİNA FASO |
| valais-cumhuriyeti | 1475 / 1529 / 1613 çelişkili | 1798 | HLS özeti | HLS ham metin (Wallis 007396, Zenden 009820) |
| chen-han | 1360 (gün yok) | 1364-03-04 (ay teyitli; gün Ming Shi'den teyitsiz) | ikincil | Ming Shi 123, Ming Taizu Shilu; ay-güneş çevirisi |

## Uygulanmayan AÇ listesi (KARAR.md öncelik sırasıyla)
- Öncelik 1: timor-leste · kubadogullari · teselya-sirp-yunan · arnavutluk-anjou-kralligi · jumbe-sultanligi · gwiriko · valais-cumhuriyeti · chen-han (sadgeldi-amasya ve hakkari-beyligi KARAR=ERTELE'ye çevrildi, yukarıda)
- Öncelik 2: sih-misller · kizil-finlandiya · pajang · pate-sultanligi · persis-fratarakalar · asur-sehir-ara · dunbuli · takali · angoche · soyo · rodanik-cumhuriyet · karenni · lagos-kralligi · sayen-arapaho · blois-kontlugu · + bekleyen: atina-arkaik, pylos-miken, argos, thebai-boiotia, tartessos, gadir, latin-birligi, illyria-kabileleri
- Öncelik 3-4: KARAR.md'ye bak.
- BAĞLA kararlarının `s:` taşımaları (11 adet: Nauru, Yeni Gine, Endonezya BD, Küba ABD…) yapılmadı: her biri Değişmez 2 maddesi ister.
- ERTELE (renk): hollanda-yeni-gine, becuanaland-kraliyet-kolonisi, alman-yeni-gine, britanya-kolumbiyasi-kolonisi.

## Uygulama kuralları (yeni oturum için)
Yeni künye: `data/devletler.js` sonuna (`];` öncesi) eklenir; `harita:` yalnız `arac/renkler.py BOYALAR`da olan bir anahtar (renkler.py'ye DOKUNMA; yeni renk → `denetim/DUNYA-1102/renk_bekleyen.md`); gün yoksa `YYYY-01-01` + `ic_not` "yalnız yıl teyitli"; en az 3 günlü kaynaklı kronoloji maddesi `data/kronoloji_<kisaltma>.js` (yeni dosya → index.html script satırı); sonra `py arac/denetle.py`, `paketle.py yenile`, `surum_damgala.py`, push kapısı.

## FAZ 2 durumu (10 Kasım 2026, KUNYE-NIHAI)
- **UYGULANDI:** timor-leste (f 2002-05-20) — künye + 3 günlü madde (`data/kronoloji_timor_leste.js`), main'de (push kapısı, origin/main 9fa72fb5). 2002-04-14 seçim günü bellekten, bağımsız teyitsiz → akademik teyit gerek. Boya: `harita:"untaet"` (kendi rengi `denetim/DUNYA-1102/renk_bekleyen.md`).
- **Çeviri tavanı açıldı:** `arac/ceviri.py` BEKLENEN_CEVIRI_EKSIK devlet 0 → 1 (7 dil); aşan kayıt timor-leste; çeviri gelince indirilir.
- **KAYNAK GEREK (açılmadı):** kubadogullari (f yok) · teselya-sirp-yunan (TDV'de doğrulanmadı) · arnavutluk-anjou-kralligi (t çelişkili) · jumbe-sultanligi (t çelişkili) · gwiriko (yalnız yıl, tek kaynak) · valais-cumhuriyeti (f çelişkili) · chen-han (gün teyitsiz). Sonraki kaynak yukarıdaki tabloda; öncelik 2-4 adaylarına kaynak turu yapılmadı.
- BAĞLA `s:` taşımaları (11) yapılmadı.

## Kaynak turu 2 (10 Kasım 2026, öncelik-2, 23 aday, 2 Sonnet ajan) — SONUÇ: HİÇBİRİ AÇILMADI
Ham bulgular: `KAYNAK-TURU-P2-A.md` ve `KAYNAK-TURU-P2-B.md`. **Engel (araç):** WebFetch Britannica, Iranica, HLS, TDV'ye 403 veriyor; ajanlar yalnız WebSearch özetlerini (çoğu Vikipedi yansısı) okuyabildi, antik birincil kaynak yer numaraları bellekten ([BİRİNCİL-AT]). "Vikipedi tek dayanak olamaz" ve "tarih uydurma" gereği hiçbir künye açılmadı.
- Kaynak yok / doğrulanamadı: pajang · pate-sultanligi · persis-fratarakalar · asur-sehir-ara · dunbuli · takali · angoche · soyo · lagos-kralligi (f) · argos · tartessos
- Aday günler var ama hakemli kaynakla DOĞRULANMADI (tarayıcıyla/yerinde okuma gerek): sih-misller (t 1799-07-07 ya da 1801-04-12) · kizil-finlandiya (f 1918-01-28; t 1918-05 gün çelişkili) · rodanik-cumhuriyet (f 08-28/30/31; t 1810-11-12 — HLS) · karenni (f 1875-06-21; t 1892-01-23) · sayen-arapaho (f 1851-09-17; t 1861-02-18) · blois-kontlugu · atina-arkaik (-0508) · pylos-miken · thebai-boiotia · gadir · latin-birligi (-0493/-0338) · illyria-kabileleri
- Sonraki adım: HLS/Iranica/TDV/Perseus sayfalarını tarayıcı panelinden (WebFetch değil) okuyarak teyit; sonra künye + 3 madde.
