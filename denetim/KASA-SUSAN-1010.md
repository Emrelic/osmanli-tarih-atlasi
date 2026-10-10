# KASA-SUSAN-1010 — ⓐ kovası (Mljet sınıfı): ilanın SUSTUĞU dilimlerde hata oranı — örneklem + doğrulama

Görev: YILDIRIM BAYEZIT (hüküm ④: "ⓐ'yı ilan taramasıyla bulamazsın … evren ilanın KAPSAMADIĞI aralıklar … tohumu ve tabaka
tanımını ölçümden ÖNCE dondur (D271)") · KASA · salt okuma.

## Evren (ölçüldü — `girdi`, @ 6294a232; birim DİLİM)
- **İlan deseni:** araştırılmadı · bulunamadı/bulunamadi · doğrulanamadı · kaynağı yok · komşu emsal. Kayıt `neden/not/kaynak`
  + dilim `kaynak` cümlelerinde aranır.
- **"Kapsanan" tanımı:** ilan cümlelerinde geçen bir 4 haneli yıl, dilimin [f, t] yılları içinde.
- Dilim: `s/d/v`; `isg` ve `__BOSLUK__` hariç; f < 1281 hariç.
- **S1 (ⓐ evreni):** ilanlı kayıtlarda, ilanın HİÇBİR yılının düşmediği dilimler ⇒ **2919 DİLİM / 988 KAYIT**.
- **S2 (kontrol):** HİÇ ilanı olmayan kayıtların dilimleri ⇒ **13.104 DİLİM / 3147 KAYIT**.
- Not: ilanlı kayıt sayısı 988 > ZAYIF42/BAYAT'taki 857. Bu tanım dilim `kaynak:` ilanlarını da sayıyor (orada yalnız
  kayıt düzeyi).

## Örneklem (DONDURULDU — tohum `random.Random(1010)`, karıştır, kayıt başına EN ÇOK 1 dilim, her tabakadan 15)
| # | kayıt | dosya | dilim | aralık | sahip |
|---|---|---|---|---|---|
| S1-01 | Solnok (Szolnok) | yerlesimler.js | s[2] | 1918-11-11 → 1923-10-29 | macaristan-naiplik |
| S1-02 | Mavinga | yerlesimler_afrika2.js | s[1] | 1902-01-01 → 1923-10-29 | portekiz |
| S1-03 | Kopal (Kapal) | yerlesimler_ortaasya3.js | s[4] | 1847-01-01 → 1917-03-15 | rusya |
| S1-04 | Sarâb | yerlesimler.js | s[3] | 1408-04-13 → 1468-04-01 | karakoyunlu |
| S1-05 | Kita | yerlesimler_afrika2.js | s[0] | 1881-01-01 → 1923-10-29 | fransa-cumhuriyet |
| S1-06 | Gbarnga | yerlesimler_afrika2.js | s[0] | 1822-04-25 → 1923-10-29 | liberya |
| S1-07 | Mattagami House | yerlesimler_kamerika.js | s[0] | 1794-01-01 → 1867-07-01 | ingiliz-kuzey-amerika |
| S1-08 | Meşkinşehr (Hiyav) | yerlesimler_kalite4.js | s[7] | 1747-06-20 → 1794-01-01 | zend |
| S1-09 | Makhalak’auri | yerlesimler_sinir_kuzey.js | d[0] | 1578-08-09 → 1878-03-03 | OSMANLI-d |
| S1-10 | Parras | yerlesimler_kamerika.js | s[0] | 1598-01-01 → 1821-09-27 | yeni-ispanya |
| S1-11 | Elmina (São Jorge da Mina) | yerlesimler_e9353f.js | s[1] | 1637-01-01 → 1872-01-01 | hollanda |
| S1-12 | Fort Confidence (Büyük Ayı Gölü) | yerlesimler_kamerika.js | s[0] | 1837-01-01 → 1867-07-01 | ingiliz-kuzey-amerika |
| S1-13 | Tengyue (Tengchong) | yerlesimler_a78_asya.js | s[9] | 1873-08-02 → 1912-02-12 | qing-hanedani |
| S1-14 | Karpuzlu (Yenikarpuzlu) | yerlesimler_sinir_kuzey.js | s[1] | 1402-07-28 → 1410-02-13 | suleyman-celebi |
| S1-15 | Huambo (Wambu) | yerlesimler_afrika2.js | s[0] | 1700-01-01 → 1902-01-01 | ovimbundu |
| S2-01 | Aral kuzeyi | yerlesimler_ortaasya2.js | s[4] | 1917-11-07 → 1923-10-29 | sovyet-rusya |
| S2-02 | Kerak | yerlesimler.js | d[0] | 1517-01-01 → 1918-01-01 | OSMANLI-d |
| S2-03 | Yüksekova (Gever) | yerlesimler_ek26.js | s[4] | 1920-04-23 → 1923-10-29 | tbmm-turkiye |
| S2-04 | Mitla | yerlesimler_amerika.js | s[2] | 1535-04-17 → 1821-09-27 | yeni-ispanya |
| S2-05 | Bodø | yerlesimler_ek8.js | s[1] | 1537-01-01 → 1814-01-14 | danimarka |
| S2-06 | Setúbal | yerlesimler_avrupa.js | s[1] | 1581-04-16 → 1640-12-01 | ispanya |
| S2-07 | Uçturfan (Uç Turfan) | yerlesimler_ortaasya3.js | s[1] | 1347-01-01 → 1514-01-01 | mogulistan |
| S2-08 | Maraş | yerlesimler.js | v[1] | 1832-07-29 → 1841-02-25 | misir-kavalali |
| S2-09 | Tralee | yerlesimler_avrupa.js | s[1] | 1603-03-30 → 1922-12-06 | ingiltere |
| S2-10 | Ûicu (Uiju) | yerlesimler_asya.js | s[0] | 1281-01-01 → 1392-07-17 | goryeo |
| S2-11 | Cerciş (Zarzis) | yerlesimler_afrika.js | v[1] | 1881-05-12 → 1923-10-29 | tunus-beyligi-fransiz |
| S2-12 | Forte Príncipe da Beira | yerlesimler_amerika3.js | s[1] | 1822-09-07 → 1889-11-15 | brezilya-imparatorlugu |
| S2-13 | Dir'iye (Necid) | yerlesimler.js | s[1] | 1824-06-01 → 1891-01-01 | suud-ikinci |
| S2-14 | Attock | yerlesimler_asya.js | s[3] | 1813-07-13 → 1849-03-29 | sih-imparatorlugu |
| S2-15 | Holmogorı | yerlesimler_h2_rusya.js | s[2] | 1547-01-16 → 1917-03-15 | rusya |

## Hata ölçütü (DONDURULDU)
- **DOĞRU:** kabul edilir, şehir (ya da bölge, beyanlı) adlı kaynak, sahibi dilim boyunca destekliyor. Uçlar hassasiyet
  payı içinde: `-01-01` uç = YIL payı; gün yazılmış uç = ±30 gün; `kesinlik` alanı varsa onun payı.
- **YANLIŞ-SAHİP:** kaynak dilimin ≥ 1 yılında başka sahip ya da statü gösteriyor (doğrudan↔tâbi dahil).
- **YANLIŞ-UÇ:** bir uç kaynağa göre payından fazla kayık (yıl uçta ≥ 1 yıl; gün uçta > 30 gün).
- **ÖLÇÜLEMEDİ:** kabul edilir tanık bulunamadı. Vikipedi yalnız ipucu.
- Kaynak öncelik: İslâm dünyası TDV; başka yerde akademik/resmî ansiklopedi (HE, HLS, Britannica imzalı, Iranica, LZMK,
  resmî kurum). Tanık birebir alıntı + URL.

## 0. ÖNGÖRÜ (doğrulamadan ÖNCE — ayrı commit)
- **S1 YANLIŞ (sahip + uç): 4 ± 3 / 15.** S2 YANLIŞ: **3 ± 2 / 15**.
- ÖLÇÜLEMEDİ her tabakada **3 ± 2** (Afrika / Kuzey Amerika iç noktaları ağır).
- **S1 − S2 ≥ 2** (ilanın sustuğu yer kontrolden belirgin riskli): **%35**. n = 15 iki tabakayı ayırt etmeye
  yetmeyebilir ⇒ "ayırt edilemedi" **%60**.
- YANLIŞ'ların çoğu UÇ (sahip değil): **%65**.
