# ZINCIR — YER-1104 eklenecek noktaların tam sahiplik zinciri

Hazırlayan: UMIT SALI · 4 Kasım 2026 · dal `umit-1104-yerzincir` (`origin/lab-1104-enklav7` c9656c768'den).
Girdi: `KASA-YER.md` ② "Eklenecek noktalar" (100 satır). Veri: `zincir.json`. Denetim: `zincir_dogrula.py`.
Salt denetim teslimi; yerleşim dosyalarına yazılmadı. Uygulama KASA'nındır.

## Evren
| ② satırı | sayı | bu işte |
|---|---|---|
| KAYNAKLI | 78 | zincir kuruluyor |
| BEYANLI YAKLAŞIKLIK (abi merkez) | 8 | zincir kuruluyor (beyanlı) |
| KAYNAKLI, KÜNYE YOK | 11 | dışarıda — künye açılmadan zincir yazılamaz |
| KAYNAK-GEREK | 3 | dışarıda (Thânesâr, Nazilli, Gediz) |

Sıra: önce 60 Orta Çağ/modern nokta (Osmanlı ve Balkan önce), sonra 25 antik nokta. Arad elle kuruldu; öteki noktalar 20'lik partilerle.

## Biçim (yerleşim dosyalarının alanları)
- `alan:"s"` → `s:[{d:"<künye id>", f, t, kaynak}]` (yabancı sahip)
- `alan:"d"` → `d:[{f, t, kaynak}]` (doğrudan Osmanlı)
- `alan:"v"` → `v:[{k:"<tâbi adı>", f, t, kaynak}]` (tâbi / dolaylı)
- `kur` yalnız kaynaklı kuruluşta yazılır; ilk anılış `kur` değildir.
- `bit`: terk ya da yıkım günü.
- Ufuk `2000-12-31`. Kur yoksa zincir `1281-01-01`'den başlar; nokta 1281'den önce kaynakla varsa daha erken başlar.

## Denetim (`py denetim/YER-1104/zincir_dogrula.py` · çıkış 0 temiz, 1 ihlal)
1. Her dönemde kaynak var.
2. `f < t`; sıfır uzunlukta dönem yok.
3. Dönemler boşluksuz ve çakışmasız.
4. `s:` künyesi `devletler.js`te var ve dönem künyenin f/t'si içinde.
5. Zincir kur'dan (ya da başlangıçtan) bit'e (ya da ufka) kadar sürüyor; kur öncesinde dönem yok.

Doğrulayıcı iki yönde sınandı: Arad temiz geçti (çıkış 0). Bozulmuş kopyasında yedi ihlalin yedisi de yakalandı (çıkış 1): boşluk, çakışma, kaynaksız dönem, olmayan künye, künye öncesi dönem, eksik uç.

## Noktalar

### Arad (46.18333, 21.31667)
| alan | sahip | f | t | dayanak |
|---|---|---|---|---|
| s | macaristan | 1281-01-01 | 1526-11-10 | MKL «Arad» (1177 vár, ispanlık merkezi) · ABİ MERKEZ Lippa/Temeşvar kırılması |
| v | Zapolya vasal krallığı | 1526-11-10 | 1541-08-29 | ABİ MERKEZ: Lippa (TDV timisvar) — BEYANLI |
| v | Erdel Prensliği | 1541-08-29 | 1551-07-01 | ABİ MERKEZ: Lippa/Temeşvar — BEYANLI |
| s | macaristan-habsburg | 1551-07-01 | 1551-10-01 | Bánlaky 0013/988, 0013/992 (Maros palankaları Eylül–Ekim 1551) — AY, BEYANLI |
| d | OSMANLI | 1551-10-01 | 1688-06-22 | MKL: '1551-1688 a törökök kezén' · TDV timisvar: Arad sancağı · t: gün komşudan Lippa (TDV lipova) |
| s | macaristan-habsburg | 1688-06-22 | 1918-11-16 | MKL; 1849 honvéd dönemi künyesiz — BEYAN |
| s | macaristan-naiplik | 1918-11-16 | 1920-06-04 | F8 / Trianon |
| s | romanya-kralligi | 1920-06-04 | 1947-12-30 | Trianon |
| s | romanya-halk | 1947-12-30 | 1989-12-22 | LoC |
| s | romanya-cumhuriyeti | 1989-12-22 | 2000-12-31 | LoC |

Açık borç:
- **Fetih günü:** 1551 Osmanlı fethinin günü okunmadı; Bánlaky Arad'ı adıyla anmıyor.
- **1688 günü:** Lippa'dan alındı.
- **Künye eksiği:** 1849 honvéd kuşatması ve Macar ihtilâl hükûmeti dönemi için künye yok.

### Parti 1 — 20 nokta (UMIT alt ajanı, Sonnet; denetim: 19 ✅ / 1 ❌ beyanlı)

| nokta | dönem | isg | OSMANLI dönemleri | özet |
|---|---|---|---|---|
| Karlofça | 7 | 0 | 1521-08-29 → 1687-09-06 | TDV «Karlofça»: fetih Ağustos 1521 (AY), 1687 Avusturya (YIL) |
| Nukuʻalofa | 2 | 0 | — | kuruluş tarihi bulunamadı; zincir Tongatapu egemenliği (Treccani «Tonga») |
| Otrar | 11 | 0 | — | 1218 Hârizmşah → Moğol (TDV); 1328-1370 ve 1500 sonrası Türkistan kaydından ABİ MERKEZ (komşunun kaynağı boş — beyanlı) |
| Çayeli | 8 | 0 | 1461-08-15 → 1916-03-08 · 1918-03-02 → 1920-04-23 | ABİ MERKEZ Rize; Rus dönemi Rize'deki gibi `s:` (komşu `isg` değil) |
| Bucaş | 11 | 0 | — | 1672 sahiplik değiştirmedi (TDV); zincir Haliç/Yazlofça'dan |
| Küçük Kaynarca | 11 | 2 | 1393 → 1402 · 1419 → 1878-07-13 | ABİ MERKEZ Silistre; Rus işgalleri 1810-11 ve 1829-36 `isg` |
| Sevr | 4 | 0 | — | Paris/Senlis zinciri; 1940-44 işgali yazılmadı |
| Tepedelen | 11 | 0 | 1417-01-01 → 1912-11-28 | ❌ KÜNYE ARALIĞI (aşağıda) |
| Karánşebeş | 14 | 0 | 1552-08-06 → 1556 · 1658-08-30 → 1688 · 1695 → 1716-10-13 | TDV timisvar, Bánlaky 0016/1302; gün Lugoş'tan |
| Szászsebes | 10 | 0 | — | Gyulafehérvár zinciri (MKL açılmadı) |
| Babaeski | 7 | 2 | 1360 → 1402 · 1413-07-05 → 1920-04-23 | Bulgar 1913 ve Yunan 1920-22 `isg` |
| Dömeke | 9 | 0 | 1394 → 1402 · 1413 → 1881-07-02 | 1897 Osmanlı işgali YAZILMADI (bitiş günü bulunamadı) — KASA `isg` olarak açmalı |
| Bileća | 9 | 0 | 1465 → 1878-07-29 | 1941-44 NDH dönemi yazılmadı |
| Kumanova | 10 | 1 | 1395 → 1402 · 1413 → 1912-10-24 | TDV «Kumanova»; Bulgar 1915-18 `isg`; Sırp devir günü yaklaşık (24 Ekim) |
| Osnabrück | 6 | 0 | — | 1866'ya dek Hannover (Treccani); künye yok → `almanya` içinde, beyanlı |
| Salankamen | 7 | 0 | 1521-08-29 → 1691-08-19 | Hrvatska enciklopedija + TDV |
| Zenta | 10 | 1 | 1541 → 1686-10-23 · 1697-09-08 → 1697-09-11 | TDV «Zenta»; Macar 1941-44 `isg` |
| Missolonghi | 9 | 0 | 1499 → 1687 · 1700 → 1821-03-25 · 1826-04-22 → 1829-04-01 | 1826 TDV; 1821/1829 komşudan |
| Nizip | 4 | 0 | 1516-08-24 → 1920-04-23 | 1832-40 Mısır (misir-suriye-idaresi) dönemi KAYNAK-GEREK, yazılmadı |
| Yanbolu | 10 | 0 | 1373 → 1402 · 1413 → 1878-07-13 | TDV fetih 1373 (atlas kronolojisi 1369 — çelişki) |

**KASA'ya bulgular (parti 1):**
- **Künye aralığı (Tepedelen ❌):**
  - `arnavutluk-bagimsiz` 1939-04-07'de bitiyor, `arnavutluk-italyan-koruma` 1939-04-12'de başlıyor: arada 5 gün.
  - İtalyan koruması 1943-09-08'de bitiyor, `arnavutluk-alman-himayesi` 1943-09-14'te başlıyor: arada 6 gün.
  - Komşular (Ergiri, Hımara, Delvine) 04-07 ve 09-08 günlerini yazıyor. Tepedelen tutarlılık için komşu günüyle yazıldı.
  - Çözüm: künye uçları hizalanmalı.
- **Fetret künyesi:** `fetret-musa` 1411-02-17'de başlıyor. Oysa Musa Çelebi'nin Rumeli hâkimiyeti 1410-02-13'teki Yanbolu zaferiyle başladı (TDV «Yanbolu»). Künyenin `f` ucu gözden geçirilmeli.
- **Olmayan künye kimlikleri:**
  - Trebinye kaydındaki `s:avusturya` ile `bosna`: `devletler.js`te böyle id'ler yok.
  - Künyesi hiç olmayan devletler: Cuci Ulusu / Gök Orda, Velbužd Prensliği, Hannover Krallığı.
- **Çelişkiler:**
  - Karlofça'nın fethi TDV'ye göre 1521; komşu Varadin 1526 diyor.
  - Yanbolu'nun fethi TDV'ye göre 1373; atlas kronolojisi 1369 diyor.
  - Lüleburgaz'ın 1912 Bulgar işgali TDV'de var ama atlas kaydında yok.
  - Münster'in 1815'te Prusya'ya geçişi Osnabrück için geçerli değil; Osnabrück 1866'ya kadar Hannover'deydi.
- **Kaynağı boş komşu kayıtları** (ABİ MERKEZ olarak kullanıldı, beyanlı): Türkistan 1281-1370, Lapaha, Silistre 1281-1390.

### Parti 2 — 20 nokta (denetim: 16 ✅ · 2 ❌ künye aralığı · 2 ⏸ KURULAMADI)

| nokta | dönem | isg | OSMANLI dönemleri | özet |
|---|---|---|---|---|
| Drivasto | 10 | 0 | 1478 → 1913-04-23 | TDV «Arnavutluk» 1478 (YIL); ❌ Arnavutluk künye aralığı (Tepedelen gibi) |
| Sen Gotar | 5 | 0 | — | MKL «Szentgotthárd»: Osmanlı eline hiç geçmedi |
| Vasvár | 5 | 0 | — | MKL «Vasvár» + TDV Vasvar Antlaşması |
| Versec | 10 | 2 | 1552-08-01 → 1716-11-16 | Bánlaky 0013/1005 (Ağustos başı 1552, AY); Sırp `isg` Temeşvar emsali |
| Facset | 10 | 1 | 1552-08-01 → 1716-10-13 | Bánlaky; Lugos emsali (beyanlı) |
| Mehádia | 10 | 0 | 1552-08-01 → 1717-08-27 | Bánlaky 0013/1005, 0019/1715 |
| Csákóvár | 10 | 3 | 1552-08-01 → 1716-10-13 | Bánlaky; Temeşvar emsali |
| Hisarcık (Grocka) | 17 | 1 | 1439 → 1444 · 1459 → 1688 · 1690 → 1717 · 1739 → 1830 | TDV; Semendire/Belgrad emsali |
| Kozluca | 9 | 0 | 1388 → 1402 · 1413 → 1878-07-13 | TDV; Provadia emsali |
| Fethülislâm | — | — | — | ⏸ KURULAMADI: 1524 kuruluşu, 1281-1524 ve 1717-39 kaynaksız (yalnız 1689 ve 1867 bulundu) |
| Ayastefanos | 7 | 0 | 1453-05-29 → 1920-04-23 | ABİ MERKEZ İstanbul; 1878 Rus karargâhı günü yok, `isg` yazılmadı |
| Novigrad | 9 | 0 | 1544 → 1594 · 1663 → 1685 | MKL «Nógrád»: 1594-1663 Habsburg — komşu Vaç'ın kesintisiz Osmanlı'sıyla ÇELİŞKİ |
| Kailua-Kona | — | — | — | ⏸ KURULAMADI: komşu zinciri boş, akademik kaynak açılmadı (iskelet `not`ta, kaynaksız) |
| Tellülkebîr | 8 | 2 | 1517-05-19 → 1805-07-03 | ❌ `memluk` künye t 1517-04-13 < komşu Fâkûs/Bilbîs 1517-05-19 (Kahire 1517-01-24) — komşular kendi aralarında tutarsız |
| Îmbâbe | 8 | 3 | 1517-01-24 → 1805-07-03 | Kahire emsali |
| Fontainebleau · Saint-Germain-en-Laye · Versailles · Neuilly-sur-Seine | 4'er | 0 | — | Paris emsali (Melun kaydının zinciri boş); 1420-36 İngiliz dönemi doğrulanmadı |
| Barcs | 7 | 2 | 1566-09-07 → 1689-02-03 | Zigetvar emsali; 1921 devri Ernyes 2021 |

**KASA'ya (parti 2):**
- **Künye eksiği:** `sirbistan` id'si yok; Semendire kaydı bu id'yi kullanıyor.
- **Mısır 1517:** Kahire'de Osmanlı 1517-01-24'te başlıyor, Fâkûs ve Bilbîs'te 1517-05-19'da. `memluk` künyesi ise 1517-04-13'te bitiyor. Mısır'ın 1517 geçişi atlas içinde tek güne çekilmeli.
- **Romanya geçişi:** Orsova Romanya'yı 1918-01-01'de (YIL) başlatıyor. Mehádia'da Trianon günü (1920-06-04) kullanıldı. Banat'ın Romanya'ya geçiş günü kayıtlar arasında tutarsız.
- **Novigrad / Vaç:** MKL'ye göre Nógrád 1594-1663 arasında Habsburg'daydı. Vaç'ın 1544-1684 kesintisiz Osmanlı zinciri gözden geçirilmeli.
- **Doğrulayıcı:** Boş zincirli noktalar artık ⏸ KURULAMADI olarak sayılıyor ve çıkış kodu 2 dönüyor. Daha önce bunlar ✅ görünüyordu.

### Parti 3 — 20 nokta (denetim: 14 ✅ · 4 ❌ künye aralığı · 2 ⏸)

| nokta | durum | özet |
|---|---|---|
| Selâ | ✅ | TDV Muvahhidler/Merînîler: Merînî 1248-04-26 (646). Fransız 1911-07-19 `isg` |
| Cezîretülhadrâ (Algeciras) | ❌ künye | Hammûdî düşüşü TDV'de 450/1058, `malaga-hammudiler` künyesi ise 1057-03-10'da bitiyor. Murâbıt geçişi 479/1086 (YIL) |
| Somnât | ❌ künye | Gazneli fethi 8 Ocak 1026 (TDV). Çaulukya sahipliği KAYNAK-GEREK. 1026-1748 Diu/Cûnâgadh emsali. `gucerat-sultanligi` t'si 1573-01-01, komşu 02-26 diyor |
| Misilmeri | ❌ künye | Zincirin tamamı Palermo'dan (ABİ MERKEZ). `sicilya-aragon` 1282-08-30'da başlıyor, komşu 03-30 diyor (Sicilya Komünü künyesiz). `italya` 1861-03-17'de başlıyor, komşu 02-13 diyor |
| Rânye | ⏸ | Komşusu yok, TDV'de geçmiyor |
| Menfûha | ✅ | Riyad'dan; zincir 1744'te başlıyor, kur yok (beyanlı) |
| Oskol | ✅ | Zincir 1593'te başlıyor. 1593 kuruluşu yalnız ru.wikipedia aktarımında var, bu yüzden `kur` yazılmadı. **KASA:** kaynaklı bir kuruluş okunmadan 1593 başlangıcı yayına alınmamalı |
| Altınköprü | ✅ | TDV Kerkük/Musul: 1625'te geri alındı, Mondros'a dek Osmanlı |
| Kırkağaç | ✅ | Yunan işgali 1920-06-24'ten itibaren `isg` (TÜBA). Listedeki 06-22 Akhisar'ın günüydü |
| Oltu | ⏸ (UMIT) | Taslak zincir 1878-1918'i Osmanlı bırakıyordu. Komşular Sarıkamış ve Artvin 1878'de Rus oluyor, Oltu da Kars oblastı okruguydu. Bu yüzden taslak `taslak_zincir` alanına alındı ve KASA'ya verilmiyor |
| Adakale | ✅ | TDV: Ağustos 1738 (AY), Osmanlı Lozan'a dek; `bit` 1972 baraj (YIL) |
| Mozdok | ✅ | TDV Çerkezler: kale 1763'te yaptırıldı, `kur` 1763-01-01 (YIL) |
| Fokşani, Maçin, Pazar, Kızılrubat, Gerger, Rumkale, Kadirli, Blagay | ✅ | Hepsi ABİ MERKEZ ile beyanlı (Bârlad, İshakçı, Rize, Bağdat, Dulkadıroğulları, Sis, Koniçe/Mostar). Kızılrubat'ın 1917 günü Bağdat'ın 03-11'i, olaydan 9 ay önce olabilir |

**KASA'ya (parti 3):**
- **Künyesiz:** Sicilya Komünü (1282) · Hammûdîlerin Cezîretülhadrâ kolu · Ebûrakrâk (Rabat-Selâ) cumhuriyeti · Fetret şehzade künyeleri (`isa-celebi`, `mehmed-celebi`, `suleyman-celebi`). Soma kaydı bu şehzadeleri `s:` olarak yazıyor, ama devletler.js'te bu id'ler yok.
- **Rabat kaydı:**
  - Fransız himayesi orada 1923-10-29'da başlıyor; künye ve TDV 1912-03-30 diyor.
  - Merînî geçişi 1251 olarak yazılı. TDV Rabat da 649/1251 der, ama TDV Muvahhidler ve Selâ 646/1248 der.
- **Oltu kaydı:** 1534'teki fetih TDV Kars'ta var. TDV Çıldır Eyaleti ise 1536 diyor.
- **Mekke ve Necid:** Rânye için kaynak bulunamadı.

## origin/main'e karşı yeniden ölçüm (EMRELİC, 4 Kasım 2026)
Parti 1-3'teki komşu ve künye ölçümleri `lab-1104-enklav7` (c9656c768) ağacında yapılmıştı. Dal `origin/main` **2fdc19540** ile birleştirildi (dal 7 commit gerideydi; birleşme temiz, HEAD 93d33898a). `kunye.json` ve komşu listesi bu ağaçtan yeniden üretildi, bildirilen tutarsızlıklar bir kez daha ölçüldü.

| bildirim | main'de | sonuç |
|---|---|---|
| Rabat Fransız himayesi 1923 | `fas-fransiz-himayesi` 1912-03-30 → 1956-03-02 | **GERİ ALINDI** — main'de düzeltilmiş (KASA af2cc76e); bulgu eski ağaçtandı |
| Rabat Merînî 1251 / Selâ 1248 | Rabat hâlâ `merini` 1251-01-01 | duruyor (TDV Muvahhidler ve Selâ 646/1248'i verir) |
| Arnavutluk künye aralığı | bagimsiz t 1939-04-07 · italyan f 1939-04-12 · italyan t 1943-09-08 · alman f 1943-09-14 · Ergiri 04-07 / 09-08 | duruyor |
| memluk t 1517-04-13 / Kahire 01-24 / Fâkûs-Bilbîs 05-19 | aynı | duruyor |
| `fetret-musa` f 1411-02-17 | aynı | duruyor |
| `sirbistan`, `avusturya`, `bosna`, `isa-/mehmed-/suleyman-celebi`, `hannover-kralligi` | YOK; bunları Semendire, Trebinye ve Soma kayıtları kullanıyor | duruyor |
| Vaç 1544-1684 kesintisiz Osmanlı (MKL Nógrád 1594-1663 Habsburg) | aynı | duruyor |
| Orsova Romanya 1918-01-01 (öteki kayıtlar Trianon) | aynı | duruyor |
| Varadin 1526 / Karlofça 1521 (TDV) | aynı | duruyor |
| Lüleburgaz 1912 Bulgar işgali | kayıtta yok | duruyor |
| Münster 1815 Prusya / Osnabrück 1866 | aynı | duruyor |
| Palermo 1282 | main'de 1282-03-30 → 08-30 `s:__BOSLUK__` (Komün) | **Misilmeri düzeltildi**: aynı beyanlı boşluk yazıldı. Doğrulayıcı `__BOSLUK__` dönemini kabul ediyor, beyan zorunlu. `italya` 1861-02-13 Palermo'nun kendisinde de künye öncesi (künye 1861-03-17) |

Bundan sonra parti ölçümleri birleşmiş ağaçta yapılıyor ve raporlarda ağacın hash'i yazılıyor.

### Parti 4 — 20 antik nokta (birleşmiş ağaç a9e4c61dd üzerinde: 7 ✅ · 13 ⏸)

**Tam zincir (7):** Kalhu (Nimrud), Akhetaton, Sikyon, Argos, Eleusis, Pharsalus, Nola.

Sınırlar (KASA bilsin):
- **Okunmamış kaynaklar:** Antik yazar atıfları (Strabon, Plutarkhos, Herodotos, Polybios, Appianos, Thukydides, Priskos, Dio) KASA-YER satırından ve komşu kayıtlardan aktarıldı. Bu oturumda tek tek okunmadı; her `kaynak` alanında "bu oturumda okunmadı" diye beyanlı.
- **Erişilemeyen kaynaklar:** Perseus robots.txt ile kapalı, Britannica 403 veriyor, Oxford kilitli.
- **Antik sonrası dönemler:** ABİ MERKEZ ile beyanlı. Komşular: Sikyon için Gördüs/Korint, Argos için Anabolu (TDV anabolu 1389), Eleusis için Kulluk/Atina, Pharsalus için Larissa, Nola için Napoli.
- **Ara BOŞLUK dönemleri** (beyanlı):
  - Argos: 1204-1389
  - Eleusis: -0337 → -0085
  - Nola: 553-1137
  - Pharsalus: 1204-1281 ve 1311-1390
- **MÖ yılı yazımı:** MÖ N → `-(N-1)`; örnek: MÖ 612 → `-0611`.

**Kısmi zincir, KASA'ya verilmedi (12):** Bu noktaların zinciri `taslak_zincir` alanında; doğrulayıcı onları ⏸ sayıyor.
- **Antik çağdan sonra süreklilik gösterilemedi:** Nikopolis, Philae, Thapsus, Utica, Naukratis, Mareia. Hepsinin zinciri 0395-01-17'de bitiyor.
- **Künye aralığı ya da bitiş yılı tahmini:** Kimiata (-0062), Semne (-1649), Tiryns (-1099), Pselkis (0298).
- **İkisi birden:** Beth-Shean (-1068) ve Viminacium (0455).

**Kurulamadı (1):** Lakiş. MÖ 701'den sonraki sahibi okunamadı: Yeni Asur, Yahuda ya da Filist olabilir.

**Komşu kayıtlarda bulunan sorunlar:**
- Anabolu 1281'den beri `venedik` yazıyor; TDV anabolu 1389 diyor.
- Larissa, devletler.js'te olmayan `suleyman-celebi` ve `musa-celebi` id'lerini kullanıyor.
- Atina'da -0026 → 1000 BOŞLUK satırı roma-cumhuriyeti satırıyla çakışıyor. Atina'nın kullandığı `atinadukaligi` id'si künye listesinde `atina-dukaligi` olarak geçiyor.
- Napoli, `napoli` künyesini 1281-01-01'den başlatıyor; künye 1282-03-30'da başlıyor.

## Durum (birleşmiş ağaç a9e4c61dd; origin/main 2fdc19540 içerir)

| | nokta |
|---|---|
| `zincir.json`deki toplam | 81 (Arad + parti 1-4) |
| KASA'ya hazır tam zincir | **58** temiz + 6 künye aralığı (beyanlı ❌) = **64** |
| ⏸ kurulamadı / taslak | 17 (Fethülislâm, Kailua-Kona, Rânye, Oltu, Lakiş + 12 kısmi antik) |
| henüz işlenmedi | parti 5: Momemphis, İpsos, Opis, Musasir, Kirrha (antik) — EMRELİC kararı (4 Kasım): bırakıldı, kısmi 12 ile birlikte taslakta kalır |

## KASA teslimi: `zincir_hazir.json` (64 nokta; ağaç d24c9cabb, origin/main 2fdc19540 içerir)

- **İçerik:** Yalnız zinciri dolu noktalar var; taslak ve kurulamadı noktalar dışarıda. Dosyayı `zincir_hazir_yaz.py` üretir.
- **Denetim:** `py denetim/YER-1104/zincir_dogrula.py denetim/YER-1104/zincir_hazir.json` → 58 ✅ · 6 ❌ · 0 ⏸.
- **6 ❌ künye aralığıdır, beyanlıdır.** Bu noktalar: Tepedelen, Drivasto, Tellülkebîr, Algeciras, Somnât, Misilmeri.
  - Komşu kayıtlar aynı günleri kullanıyor; nokta, komşusuyla tutarlı olsun diye o günlerle yazıldı.
  - KASA künye uçlarını hizalarsa ❌ kendiliğinden kalkar.
  - Hizalamadan yazarsa, nokta bugünkü komşularıyla aynı sınır aşımını taşır.
- **Yazım:**
  - `alan` değerleri yerleşim dosyalarındaki `s:`, `d:`, `v:` ve `isg:` dizilerine karşılık gelir.
  - `kur` ve `bit` doluysa kayda aynen yazılır.
  - `not`, KASA'nın okuyacağı beyandır; veriye girmez.
- **Önce düzeltilecek künye ve komşu kayıtları:**
  - `fetret-musa` f
  - Arnavutluk 1939/1943 künye uçları
  - Mısır 1517 geçişi
  - Vaç 1594-1663
  - Orsova 1918
  - eksik id'ler: `sirbistan`, `avusturya`, `bosna`, fetret şehzadeleri, `hannover-kralligi`
