# KRONO-KUZEY-0929 — DÜZELTME kaydı (Rusya · Lehistan · İsveç)

29 Eylül 2026. Dosyalar: `data/kronoloji_rusya.js` · `_lehistan.js` · `_isvec.js`
(düzeltme bende, KRONO-BAGLAMA M-5427 "düzeltmelerini kendin uygula") ve yeni
`data/kronoloji_cok_rusya.js` · `_cok_lehistan.js` · `_cok_isvec.js`.
Alet: `denetim/ARAC-KRONO-KUZEY-0929-YAZ.py` (üretici) · `-YENI.py` (yeni madde tablosu) ·
`-SINA.js` (sınav: sayı korunumu, zorunlu alan, künye varlığı, pencere, t+b mükerrer).

## A. UYGULANAN (dosya bende; her biri kaynaklı ya da yalnız bağlama değişikliği)

| # | Ne | Sayı | Gerekçe |
|---|---|---|---|
| A1 | Künye penceresi dışındaki maddeler COK dosyalarına **TAŞINDI** (metin değişmedi; `devlet`/`devletler` + `tasindi` eklendi) | rusya 15 · lehistan 62 · isvec 6 = **83** | M-5416 (1)(2). Bağlı dosyada `devlet:` işe yaramaz (M-5427) |
| A2 | `kronoloji_isvec.js`: `yer_id` alanı HİÇ olmayan maddelere `yer_id:""` | **62** | zorunlu on alan (ORTAK §2). Stockholm noktası yok |
| A3 | rusya 1795-10-24 başlık: "…— Polonya devleti ortadan kalktı" → "…— Litvanya, Kurlandiya ve Batı Volinya Rusya'ya geçti" | 1 | haritadaki `lehistan→rusya` devrini başlıkta adlandırır (Riasanovsky; mevcut kaynak) |
| A4 | rusya 1878-03-03 başlık: "Ayastefanos (San Stefano) Antlaşması" → "…— Kars, Ardahan, Batum ve Doğubayazıt Rusya'ya bırakıldı" | 1 | TDV `ayastefanos-antlasmasi` gövdesi: "Kars, Ardahan, Batum ve Doğubayazıt'ı Rusya'ya bırakacaktı" |
| A5 | 1917-11-07 Ekim Devrimi başlık → "…Bolşevikler Rusya Geçici Hükûmeti'ni devirdi"; `sovyet-rusya`+`rusya-gecici-hukumet`e taşındı | 1 | `rusya` künyesi 1917-03-15'te biter |
| A6 | lehistan 1699-01-26 Karlofça başlık "…Podolya, Kamaniçe ve Sağ Yaka Ukrayna geri alındı" + gövdeye "Braslav, Vinnitsa ve Uman'ın bulunduğu Sağ Yaka Ukrayna" | 1 | TDV `karlofca` (A. Özcan): "Ukrayna'da kurduğu Kazak Hatmanlığı'nı lağvediyor" |
| A7 | rusya.js başlık yorumu: "t: alanları GREGORYEN" cümlesinin TUTMADIĞI yazıldı | yorum | aşağı B1 |
| A8 | Yeni madde | **80** (rusya 77 · lehistan 3) | senkron defteri; ayrıntı `KRONO-KUZEY-0929.md` |

⚠️ **A1'in yan etkisi — `data/yer_yama.js` (koordinatörün dosyası, dokunmadım):**
kronoloji_rusya/lehistan için 34 yama kaydının `dosya+t+b` anahtarı artık eski dosyayı
gösteriyor (33 taşıma + Karlofça başlığı). **Gerileme YOK**: yamalar zaten uygulanmış
(`yer_id`/`yer_kon` maddenin içinde, blokla birlikte taşındı). Yama YENİDEN uygulanırsa
bu 34 kayıt "bulunamadı" verir. Liste: `node` ile `YER_YAMA` × üç dosya kesişimi (yöntem
bu belgenin sonunda).

## B. ÖNERİLEN — UYGULANMADI (kaynak sayfası ya da hüküm gerekiyor)

### B1. rusya.js takvim karışıklığı (VERI-YAPISI §59: ÇEVRİLMEZ; ama dosya başı "Gregoryen" diyordu)
Rus eski üslubuyla (Jülyen) yazılmış görünen maddeler — ölçüt: olayın bilinen iki günü,
dosyadaki gün Jülyen olanla eşit. **Çevirmeyi önermiyorum**, `gun:` alanı ile beyan öneriyorum:
1703-01-02 Vedomosti · 1721-10-22 İmparatorluk ilanı (Greg. 2 Kasım) · 1722-01-24 Rütbeler
Cetveli · 1724-01-28 Bilimler Akademisi · 1725-01-28 I. Petro'nun ölümü (Greg. 8 Şubat) ·
1730-02-25 · 1757-11-06 · 1762-02-18 · 1785-04-21 · 1797-04-05 · 1825-12-14 Dekabrist (Greg.
26 Aralık) · 1837-10-30 · 1855-02-18 (Greg. 2 Mart) · 1861-02-19 serflik (Greg. 3 Mart) ·
1864-11-20 · 1869-03-06 · 1876-02-19 Hokand ilhakı (künye `hokand` t: de aynı gün!) ·
1891-05-19 · 1905-01-09 Kanlı Pazar (Greg. 22 Ocak) · 1905-10-17 (Greg. 30 Ekim) ·
1906-04-27 · 1906-11-09 · 1913-02-21.
⚠️ Bu liste bilinen tarih ikililerinden çıkarıldı; madde madde kaynak sayfasıyla sınanmadı.

### B2. rusya.js — olgu/gün kusuru şüphesi (düzeltmeden önce kaynak açılmalı)
| t | madde | şüphe |
|---|---|---|
| 1762-01-05 | "III. Petro, Prusya ile ayrı barış yaptı" | 5 Ocak 1762 (Greg.) Elizaveta'nın ölüm günüdür; St. Petersburg barışı 5 Mayıs 1762 |
| 1881-05-15 | "Yahudi karşıtı Mayıs Kanunları" | Mayıs Kanunları **1882** (3/15 Mayıs) — yıl hatalı |
| 1741-11-04 | "Bering'in Alaska keşfi" | Alaska kıyısı Temmuz 1741'de görüldü (TDV `rusya`: "1741'de Çirikov ve Steller Alaska'ya ayak bastı"); 4 Kasım Bering adasına varış |
| 1755-01-25 | Moskova Üniversitesi | ferman 12 (23) Ocak 1755; 25 Ocak = XX. yy farkı (+13) uygulanmış görünüyor |
| 1756-08-29 | "Yedi Yıl Savaşları'na girdi" | 29 Ağustos 1756 Prusya'nın Saksonya'ya girişi; Rusya 1757'de girdi |
| 1773-06-28 | "Moskova Maden Okulu kuruldu" (yer St. Petersburg) | kurum St. Petersburg Maden Okulu'dur — ad hatalı |
| 1877-02-27 | Kuğu Gölü ilk gösterimi | 20 Şubat (4 Mart) 1877 bilinen gündür |
| 1654-01-19 | "Polonya ile savaş başladı" | Pereyaslav'ın ertesi günü; savaş kararı Ekim 1653, harekât 1654 baharı — gün uydurma şüphesi |
| 1283-01-01 | "Moskova Knezliği'nin kuruluşu — I. Daniil" | künye `moskova` f: ile aynı; Daniil Moskova'yı 1260-1270'lerde almış olmalı — sahte kesinlik şüphesi |
| 1462-01-01 | III. İvan tahta çıktı | gün biliniyor (II. Vasili'nin ölümü, 27 Mart 1462) — gün eklenebilir |

### B3. Aynı olay, iki takvimde iki gün (ORTAK §5 "üç ayrı gün" tuzağının bu coğrafyadaki hâli)
| olay | dosyalar | not |
|---|---|---|
| Poltava | rusya.js **1709-06-27** (Jülyen) · isvec.js + lehistan.js **1709-07-08** (Greg.) | İsveç 1700-1712 kendi takvimindeydi (28 Haziran). İkisi de "doğru", ama haritada 11 gün ayrık iki madde |
| Andrusovo | rusya.js + lehistan.js **1667-01-30** (Jülyen) · çekirdek `olaylar` **1667-02-09** (Greg.) | Lehistan Gregoryen ülkesiydi; lehistan.js'teki gün Rus üslubuyla |
| 3. Taksim | atlas 1795-10-24 · TDV `polonya`: "3 Mart 1795" | TDV gövdesi kendi içinde varyant (Ocak 1795 Rus-Avusturya antlaşması / 24 Ekim sınır sözleşmesi) — `§4 ⑥` kaynak kendiyle çelişebilir |
| Kulca işgali | `kronoloji_orta_asya.js` **1871-06-01** · yeni cok_rusya **1871-07-04** | Noda (chikyu.ac.jp): 22 Haziran Jülyen = 4 Temmuz Greg. — orta_asya'nın 06-01'i ay-başı kodlaması (D213) |

### B4. lehistan.js
- 1484-07-14 Kili ve 1484-08-03 Akkirman (artık cok_lehistan'da, `polonya-erken`): `tur:"toprak-kayip"` yanlış — iki kale Boğdan'ındı, Lehistan'ın toprağı değildi. Öneri `tur:"kriz"` ya da `"diplomasi"`.
- 1797-01-09 Dąbrowski Lejyonları: künyesi yok (devletsiz dönem; lejyonlar Fransız/Cisalpin himayesinde). `lehistan.js`te BIRAKILDI — tek pencere-dışı madde, beyanlı. Hüküm koordinatörde (kalsın / kaldırılsın / `italya-napolyon`a bağlansın).
- 1807-07-07 "Varşova Düklüğü kuruldu (Tilsit)": künye `varsova-dukaligi` f=1807-07-22 → madde 15 gün önce (KUNYE-DUNYA şüpheli ömür listesinde de var). `-KUNYE.md`.

### B5. isvec.js
- 62 madde `yer_id:""` (Stockholm yerleşim noktası yok — dosyanın kendi notu). Stockholm eklenirse (Oturum 0) tek geçişte doldurulabilir.
- 1709-07-08 Poltava: bkz. B3.

### B6. Başkasının dosyası — yalnız bildirim
- `kronoloji_orta_asya.js` 1871-06-01 "Ruslar Kulca'yı işgal etti" → 1871-07-04 (B3).
- `devletler.js#don-kazak` 1721-01-01 "I. Petro ordayı Askerî Kollegium'a bağladı": başlıkta taraf adı yok → 1721 `don-kazak→rusya` kırılmasını kapatmıyor. Başlığa "Don Kazak" / "Rusya" eklenmesi önerilir.

### B7. Çekirdek (`olaylar*.js`) — 2s AÇIK kapanışları (Oturum 0'a öneri)
Benim COK dosyalarım **Değişmez 2s evreninde DEĞİL** (evren yalnız `olaylar*.js` + `kronoloji_sinir*`).
Bu yüzden aşağıdakiler 2s AÇIK sayısını ancak çekirdek başlığıyla düşürür:
| gün | kırılma | çekirdekte bugün | öneri |
|---|---|---|---|
| 1795-10-24 | lehistan→rusya 7 yer | "Polonya'nın Üçüncü Paylaşımı — devletin tamamen ortadan kalkması" (taraf adı yok) | başlığa "Rusya" |
| 1878-03-03 | OSMANLI→rusya 15 yer | "Ayastefanos Antlaşması: Büyük Bulgaristan tasarısı" (doğu toprağı yok) | gövdeye Kars/Ardahan/Batum cümlesi (TDV) |
| 1917-11-07 | rusya-gecici→sovyet 377 yer | çekirdekte Ekim Devrimi maddesi YOK | Kafkas cephesine etkisiyle bir madde |
| 1699-01-26 | Osmanlı→lehistan Uman · Braslav · Vinnitsa | ölçülmedi | Karlofça çekirdek maddesine "Sağ Yaka Ukrayna" |

## Yöntem notu — kopan yer_yama anahtarları
```
node -e "… YER_YAMA.filter(y => dosya ∈ {rusya,lehistan,isvec}.js && !(t|b ∈ dosyanın bugünkü maddeleri))"
```
34 kayıt: lehistan 31 (1295…1568 + Orşa + Karlofça) · rusya 3 (1380 Kulikovo · 1480 Ugra · 1497 Sudebnik).
