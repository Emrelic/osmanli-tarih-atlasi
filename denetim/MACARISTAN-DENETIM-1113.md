# MACARİSTAN DENETİMİ — 13 Kasım 2026 (UMIT oturumu)

Biçim: PAPALIK-DENETIM-1111. Ağaç: `origin/main`, dal `umit-1113-celiski2`. `py arac/denetle.py` **koşturulmadı → ölçülmedi.**
Kapsam: `macaristan` (1000-1527), `macaristan-habsburg` (1526-1918), `orta-macar-kralligi` (1682-1688), `dogu-macar-kralligi` (bkz. Zapolya işi); Erdel ve Macaristan'ın 1918 sonrası künyeleri OKUNMADI.

## 1. Envanter (ölçüldü)
- Yerleşim dilimi: **327** (`macaristan`, `macaristan-habsburg`, `orta-macar-kralligi` sahipli, `yerlesimler*.js`); 1281-1920 arası **220** (gün × sahip × geçiş) kırılma grubu.
- Kaba eşleme (±30 gün içinde Macar/Buda/Mohaç… anahtarlı kronoloji maddesi): 99 grup eşleşti, **121 grupta madde bulunamadı**. Bu sayı KABA: anahtar kelime süzgeci `-` (sahipsiz) geçişleri ve yer adı taşıyan maddeleri kaçırıyor; Değişmez 2'nin resmî sonucu değil, `denetle.py` koşmadı. Büyük bölümü 1551-52 (Temeşvar-Varad kuşatma yılları), 1685-88 (Kutsal İttifak) ve 1-Ocak yıl-yer tutucularıdır.
- Künye: `macaristan` t `1527-01-01` (yıl, TDV `suleyman-i`/`budin`; gün yok) ve `macaristan-habsburg` f `1526-12-17`, t `1918-11-16`.

## 2. Olay günleri × TDV (24 olay, TDV madde metni okundu — alt ajan WebFetch özeti, ana alıntılar TDV'den)
| Olay | Atlas | TDV | Durum |
|---|---|---|---|
| Belgrad fethi | 1521-08-29 | `suleyman-i`: ertesi gün sultan girdi (30 Ağustos) | EŞLEŞİR (dolaylı) |
| Mohaç | 1526-08-29 | `suleyman-i`, `mohac-muharebesi` (28 Ağustos Çarşamba ⇒ 29) | EŞLEŞİR |
| Budin'e giriş | t 1526-09-01 (gun metni 11 Eylül) | `budin`, `suleyman-i`: 11 Eylül 1526 | EŞLEŞİR; `t` yer tutucu, ~30 yerleşim dilimine bağlı — taşınmadı |
| Budin 1529 | madde t 1529-09-14, dilim 09-08 | `suleyman-i`: garnizon 8 Eylül, taç 14 Eylül | EŞLEŞİR (madde metni düzeltildi) |
| Budin 1541 | 1541-08-29 | `suleyman-i`: «2 Eylül'de padişah Budin'e girdi» | ÇELİŞKİ (ele geçiriş ↔ giriş; ikinci kaynak yok → beyan) |
| Estergon fethi | 1543-08-10 | `estergon`, `suleyman-i` | EŞLEŞİR (çift TDV) |
| Temeşvar | 1552-07-27 | `timisvar`: 4 Şaban 959 = 26 Temmuz; `kara-ahmed-pasa`: 26/27 | ÇELİŞKİ (TDV içi; Macar kaynak 27 Temmuz Losonczy çıkışı) → 27 korundu, beyan |
| Zigetvar | 1566-09-07 | `suleyman-i`: 6-7 Eylül gecesi vefat | EŞLEŞİR |
| Yanıkkale | 1594-09-27 | `yanikkale`: 12 Muharrem 1003 / 27 Eylül | EŞLEŞİR |
| Estergon kaybı | 1595-09-02 | `estergon`: yalnız Eylül 1595 | AY-ONLY → «yalnız ay teyitli» beyan |
| Eğri fethi | 1596-10-12 | `egri` | EŞLEŞİR |
| Kanije | 1600-10-20 | `kanije` | EŞLEŞİR |
| Estergon geri alış | 1605-10-03 | `estergon` | EŞLEŞİR |
| Uyvar | 1663-09-24 | `uyvar`: çarpışmalar 26 Eylül'e kadar, teslim günü yok | ÇELİŞKİ/GÜN YOK → «gün teyitsiz» beyan |
| Tököli | 1682-09-16 | `toekoeli-imre` (16 Eylül) | EŞLEŞİR (unvan farkı: TDV «hâkim») |
| Budin geri alış | 1686-09-02 | `budin` | EŞLEŞİR |
| Karlofça | 1699-01-26 | `amcazade-huseyin-pasa` | EŞLEŞİR (Karlofça maddesi okunmadı) |
Bulunamadı/okunmadı: Szapolyai seçimi (10 Kasım) ve Ferdinand (17 Aralık) TDV'de ayrı gün olarak bulunamadı (`zapolya` maddesi yok); İkinci Mohaç (1687-08-12), 1544 Vaç/Hatvan/Şimontorna, Belgrad 1688-09-06 (TDV yalnız yıl), Eğri 1552 (gün yok).

## 3. Çelişkiler ve karar (ÇELİŞKİ-1113 kuralı)
- **Temeşvar 27↔26 Temmuz:** TDV'nin iki maddesi ikisini de verir; ≥2 bağımsız akademik kaynak TDV'ye karşı aynı günü vermedi (Káldy-Nagy, Fodor OKUNMADI) ⇒ 27 korundu, olaylar_ek `gun` alanında beyan.
- **Budin 1541 29 Ağustos↔2 Eylül:** giriş/ele geçiriş ayrı olay olabilir; ikinci kaynak okunmadı ⇒ gün korundu, devletler.js maddesinde beyan (bkz. Zapolya işi: aynı belirsizlik künye t için de geçerli).
- **Uyvar:** TDV gün vermez; üç kaynak üç gün (24/26 Eylül TDV, 13 Eylül Vikipedi) ⇒ «gün teyitsiz» beyanı.
- **Estergon 1595:** TDV yalnız ay ⇒ «yalnız ay teyitli».
Hiçbir tarih taşınmadı; beş madde beyanlandı, bir madde metni (Budin 1529) düzeltildi.

## 4. Ölçülmedi
- Değişmez 2 / 3 / 8 sonuçları (`denetle.py` koşmadı); 121 «madde yok» grubunun tek tek incelenmesi.
- Hakemli ikinci kaynak (Káldy-Nagy, Fodor, Pálffy, Ágoston, Setton) hiçbir satırda okunmadı.
- `macaristan-naiplik`/Trianon, 1848, Ausgleich, Erdel künyeleri bu rapor kapsamında DEĞİL.
