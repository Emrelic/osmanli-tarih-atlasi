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
