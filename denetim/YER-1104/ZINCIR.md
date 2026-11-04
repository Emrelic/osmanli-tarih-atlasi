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
