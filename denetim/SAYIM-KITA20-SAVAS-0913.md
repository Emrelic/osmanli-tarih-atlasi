# SAYIM — savaş maddeleri · Osmanlı-taraf çekirdek · TDV adres durumu

KITA 20 · 13 Eylül 2026 · paket 0045 H-0007 · şartname madde ③
Aletler: `_sayim2.js` (scratchpad, 666 sn) · pilot doğrulayıcı `denetim/ARAC-KITA20-SAVAS-0913.js`

---

## ① EVREN ve TANIM — koordinatörün sayısı yeniden ÜRETİLEMEDİ

```
evren     data/olaylar*.js (çekirdek, /^OLAYLAR(_...)?$/ anahtarları — app.js'in kendi süzgeci)
          data/kronoloji*.js (kuyruk)          glob ile, elle liste YOK
tanım     etiket içinde "savas"  VEYA  tur === "savas"  VEYA  k === "savas"
```
| | koordinatör (ORTAK-0045 §①) | bu ölçüm |
|---|---|---|
| savaş maddesi | 1288 | **1239** |
| çekirdek | 370 | **369** |

⚠️ Tanım farkı nereden geliyor, **ölçülemedi**: koordinatörün tanımı yazılı değil. Bu belgedeki bütün sayılar yukarıdaki tanıma aittir.

---

## ② 🔴 BİRİM DÜZELTMESİ — KAYIT ≠ SAVAŞ (D156)

Aynı savaş çekirdekte bir, devlet kronolojilerinde birkaç kez geçer (İnebahtı: çekirdek 1 + kuyruk 4). Toplu üretim **kart başına bir savaş** yazacağı için doğru birim **benzersiz savaş olayıdır**.

```
ÇEKİRDEK savaş kaydı                         369
   benzersiz gün                             367   (aynı güne 2 kayıt: 2 gün)
   Osmanlı-taraf                             tanım gereği (Osmanlı kronolojisi) — VARSAYIM
KUYRUK savaş kaydı                           870
   Osmanlı geçen (SINIFLANDIRICI)            239   etiket "osmanli" | b/d'de "osmanl"
      çekirdekle AYNI GÜN                     90   ⇒ aynı savaşın tekrarı
      çekirdeğin AY-kodlu maddesiyle aynı ay  17   ⇒ büyük olasılıkla tekrar
      çekirdekte karşılığı YOK               132   → 122 benzersiz gün
⇒ TAHMİNİ BENZERSİZ OSMANLI-TARAF SAVAŞ OLAYI   ≈ 489   (üst sınır, TARİH anahtarlı)
```
⚠️ **Sınırları, iki yönde:** aynı savaş farklı dosyalarda farklı günle yazılmışsa **fazla** sayar. Aynı gün iki ayrı savaş varsa **eksik** sayar. Kuyruk sınıflandırıcısı **iki yönde sınanmadı** (D010): 239 bir **tahmin**dir.

---

## ③ TDV ADRES DURUMU — kayıtların kendi `kaynak:` alanından

**Aletin kendisi önce çöktü, ve bu kayda değer:**
```
v1  5 eşzamanlı istek   237 slug → 503: 152 · 429: 11 · CANLI 69 · ÖLÜ 5   ⇒ GEÇERSİZ
v2  tek tek, 1,5 sn ara, 503/429'da üstel geri çekilme (6 deneme)
                        236 slug → CANLI 215 · ÖLÜ 20 · ÖLÇÜLEMEDİ 1
```
📌 503/429, `000` gibi bir **taşıma/yük cevabıdır**, madde durumu değildir (`§4⑤` ailesi). v1 sayısı raporlansaydı TDV'nin **üçte ikisi** "ölçülemedi" görünecekti.

| kova | çekirdek (369) | kuyruk Osmanlı (239) |
|---|---|---|
| adres CANLI | **351** (%95,1) | 158 |
| adres ÖLÜ | 9 | 27 |
| ölçülemedi | 4 | 9 |
| `kaynak:`tan slug çıkmadı | 5 | 45 |

### Adresin CİNSİ — `§4`'ün "OLAY slugu ölür, anlatı YER/KİŞİ'de" dersi yeniden ölçüldü
```
benzersiz slug   OLAY-adlı (savas|muharebe|kusatma|sefer|zafer|fethi|antlasma…)   25 canlı / 15 ölü   ⇒ %38 ölü
                 YER · KİŞİ · KAVRAM                                               190 canlı /  5 ölü   ⇒ %2,6 ölü
çekirdek CANLI 351 =  OLAY-adlı 44  +  YER/KİŞİ/KAVRAM 307
```
🟢 `CLAUDE.md §4` (2 Eylül): olay %48 · yer/kişi %2. Bu evrende **%38 · %2,6**. Aynı desen, bağımsız evren.

🔴 **CANLI ≠ ANLATI VAR.** 307 yer/kişi maddesinin gövdesi **okunmadı**. `ordu` / `saray` tuzağı (`§4②`) bu kovada ölçülmedi.

### Çekirdekte ölü adres (9) — D063 "doğru bilgi, ölü adres"
```
1444-11-10 olaylar.js      varna-savasi              → canlısı varna-muharebesi         (BULUNDU)
1538-09    olaylar.js      preveze-deniz-savasi      → canlısı preveze-deniz-muharebesi (BULUNDU)
1912-10    olaylar.js      balkan                     ARANMADI
1921-09-13 olaylar.js      sakarya-meydan-muharebesi  ARANMADI
1453-04-06 olaylar_ek.js   istanbulun-fethi           ARANMADI
1583-05-09 olaylar_ek2.js  hacova-meydan-muharebesi   ARANMADI
1403-09-01 olaylar_ek3.js  ulubat--bursa              ARANMADI
1413-07-05 olaylar_ek3.js  camurlu-savasi             ARANMADI
1697-09-11 olaylar_ek3.js  zenta-savasi               ARANMADI
```
Ölçülemedi 4'ün dördü de `yemen` (tek slug, 6 denemede de cevap yok). Slugsuz 5 kayıt `olaylar_ek16/17/3/8`de.

---

## ④ ÖNGÖRÜLER — `denetim/ONGORU-KITA20-SAVAS-0913.md` (`4486cfe`)

| | Öngörü | Sonuç |
|---|---|---|
| Ö1 | mevcut 11 tür uymaz → yeni tür | 🟢 TUTTU (TUR §②) |
| Ö2 | 11/11 savaşın kronolojide maddesi var | 🟢 TUTTU (çekirdekte 11/11) |
| Ö3 | ≥2 savaşta birden çok aday: Kosova · Ankara | 🟡 KISMEN. Kosova TUTTU (1389 · 1448, iki ayrı savaş → iki kart). Ankara'daki 191 aday **benim geniş arama anahtarımdan** (`timur`, `cubuk`) doğdu; gerçek savaş maddesi 1 |
| Ö4 | ≥1 savaşta madde günü ≠ TDV günü (Kosova 1389, Niğbolu) | 🔴 ÇÜRÜDÜ. 11 savaşın **hiçbirinde** çekirdek gün TDV'den ayrışmıyor. Kosova'nın 15/28 Haziran farkı bir **takvim notu**, TDV'nin kendisi yazıyor |
| Ö5 | 11 savaşın 4-7'sinde savaş slugu ölü | 🔴 ÇÜRÜDÜ. **1/11** (Cerbe). İlk ölçümüm "6" demişti, evren dardı (M-3666 düzeltmesi) |
| Ö6 | ölü slugluların hepsine yer/kişi maddesinden kaynak bulunur | 🟢 TUTTU. 12/12 kart kaynaklı, Cerbe `cerbe` + `piyale-pasa` |
| Ö7 | Osmanlı-taraf çekirdek 1288'in %35-55'i (450-700) | 🟡 TUTTU, ama mazeretiyle. Kayıt bazında 608/1239 = %49. Benzersiz olay ≈489, bandın içinde. Kuyruk payı sınıflandırıcıya dayanıyor ve sınanmadı |
| Ö8 | çekirdeğin %60-80'inde TDV anlatısı bulunur | ⚪ **ÖLÇÜLEMEDİ.** Üst sınır adres canlılığı %95,1. Pilotta 12/12 anlatı var, **ama örneklem rastgele değil** (en ünlü savaşlar, D153). Anlatı oranını ancak 307 yer/kişi gövdesinden örneklem okuyarak ölçmek mümkün |

---

## ⑤ TOPLU ÜRETİM PLANI — öneri

```
KADEME A  çekirdekte OLAY-adlı CANLI slug     44 kayıt   TDV'nin kendi savaş maddesi büyük olasılıkla var
          + pilotun 12'si (bitti)                        → en ucuz, en güvenli
KADEME B  çekirdek YER/KİŞİ canlı slug       307 kayıt   önce 20'lik RASTGELE örneklem: gövdede savaş anlatısı
                                                         var mı? Oran bu kademenin planını belirler (Ö8'in borcu)
KADEME C  çekirdek ölü / slugsuz / ölçülemedi 18 kayıt   önce adres onarımı (D063), sonra A ya da B
KADEME D  kuyrukta çekirdeksiz savaş         ≈122 olay   önce sınıflandırıcı sınanır (iki yön), sonra
                                                         taraf listesi TDV'den teyit
```
**Her kademe aynı şemayla ve aynı doğrulayıcıyla** (`ARAC-KITA20-SAVAS-0913.js`: şema · çekirdek bağ · uzunluk · telif · ateşleme). Doğrulayıcı kart dosyasını parametre alıyor, yeniden yazılmadan kullanılabilir.

⚠️ **Oturum başına 12-15 kart** öneriyorum. Ölçüm değil, pilotun gösterdiği iş biçimi: her kart bir TDV gövdesinin **baştan sona** okunmasını istiyor (10.000-24.000 karakter) ve kaynaklar arası ayrışmalar (`tartisma:`) ancak tam okumayla yakalanıyor.
