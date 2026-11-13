# İSVEÇ DENETİMİ — 13 Kasım 2026 (UMIT oturumu)

Biçim: PAPALIK-DENETIM-1111. Ağaç: `origin/main`, dal `umit-1113-celiski2`. `py arac/denetle.py` **koşturulmadı → ölçülmedi.**
Kapsam (4 künye): isvec-birlik-oncesi, isvec, norvec-isvec-birligi, yeni-isvec (+ Danimarka/Norveç/Finlandiya künyelerinin İsveç'le ilgili maddeleri).

## 1. Envanter (ölçüldü)
- Yerleşim dilimi: **128**; 1281-1920 arası **26** kırılma grubu; kaba eşleme 15 eşleşti, **11 grupta bulunamadı** (1611-07-16, 1617-02-27 Stolbovo, 1702-10-22, 1703-05-12/14/25 Büyük Kuzey Savaşı, 1720-02-01, 1815-06-09 …). Süzgeç kaba; Değişmez 2'nin resmî sonucu değildir. Büyük gruplar: 1523-06-06 (~42 birlik-öncesi ucu + ~44 isvec açılışı), 1645-08-23, 1648-10-24, 1658-03-08/12-08, 1721-09-10, 1743-08-07→18, 1809-09-17, 1814-11-04, 1905-06-07.
- Künye eksikleri: isvec künyesinde `t` yok (pencere ucu, beyanlı); kronolojisi 1709-1714 ve 1946+ maddelerinden ibaret (Gustav Vasa, Westfalya, Nystad, Fredrikshamn, Kiel `kronoloji_isvec.js`/`kronoloji_sinir_*`/olaylar_*'ta); isvec-birlik-oncesi f 1000-01-01 pencere ucu (beyanlı).

## 2. Olay günleri × TDV/SNL (41 satır; TDV `isvec`, `prut-antlasmasi`, `prut-seferi`, `finlandiya`, `danimarka` + SNL; Wikipedia yalnız aday)
**EŞLEŞİR (gün, ~28):** Westfalya 1648-10-24 · Brömsebro 1645-08-23 (Jülyen 13 çevrilmiş) · Roskilde 1658-03-08 · Narva 1700-11-30 · Poltava 1709-07-08 (TDV `isvec`) · Bender'de Yûsuf Paşa 1709-08-08 · Nystad 1721-09-10 · Osmanlı-İsveç antlaşmaları 1737-01-10, 1740-01-04, 1789-07-11, 1805-10-04, 1840-01-31, 1862-03-05 · Kalabalık Vakası 1713-02-12 · Kral'ın mektubu 1714-07-12 · Dimetoka'dan yola çıkış 1714-09-19 · Finlandiya bağımsızlığı 1917-12-06 · Kiel 1814-01-14 · Storting 1814-11-04 · 1905 dört günü (06-07, 08-13, 09-23, 10-26).
**YIL-ONLY/TDV'DE YOK:** Kalmar 1397, Gustav Vasa 1523 (TDV yıl), Fredrikshamn gün (TDV Tilsit der), Karl Johan 1810/1818, Yeni İsveç (künye beyanlı).

## 3. Çelişkiler ve karar (ÇELİŞKİ-1113; esas bulgu **takvim**: İsveç 1753'te, Rusya 1918'de Gregoryen'e geçti — atlas kuralı: 1582 sonrası gün Gregoryen, geç geçen yerlerin kaynak günü çevrilir)
| Konu | Atlas | Kaynak | Karar |
|---|---|---|---|
| **XII. Karl'ın ölümü** (Fredriksten) | 1718-11-30 (Jülyen) | SNL «Karl 12.»: **11 Aralık 1718** (30 Kasım Jülyen); TDV yalnız 1718 | **1718-12-11'e çevrildi** (kronoloji_isvec + yer_yama), `ic_not_takvim` |
| **Åbo Antlaşması** | 1743-08-07 (Jülyen) | Wikipedia 18 Ağustos 1743 N.S. (7 Ağustos O.S.) | **1743-08-18'e çevrildi** (kronoloji_isvec, kronoloji_sinir_iskandinavya, yerlesimler_ek7 isvec→rusya dilimi, yer_yama_isvec); çeviri aritmetiktir (+11 gün; atlasın Nystad'ı zaten Gregoryen), tek kaynak okundu, `ic_not_takvim` |
| **Poltava** | kronoloji_rusya 1709-06-27 (Jülyen) ↔ İsveç 1709-07-08 | TDV `isvec` 8 Temmuz 1709 | **kronoloji_rusya 1709-07-08'e çevrildi** (aynı olay iki günle duruyordu) |
| **Bender'de kalış** | künye maddesi 1709-08-01 | TDV `isvec` «Yûsuf Paşa ile buluştu (8 Ağustos 1709)»; kronoloji_isvec zaten 08-08 | **devletler.js 1709-08-08'e çekildi** (TDV günü; atlas günü kaynaksızdı) |
| **Prut Antlaşması** | 1711-07-21 | TDV `prut-antlasmasi` 21 Temmuz; TDV `prut-seferi` 23 Temmuz | TDV içi çelişki, atlas 21 korundu, ic_not'ta iki TDV maddesi beyanlı |
| **Värälä** | 1790-08-14 | TDV `isvec` 15 Ağustos | 1 gün; takvim belirsiz, OKUNMADI → beyan (raporda AÇIK) |
Hâlâ AÇIK/okunmadı: Travendal 1700-08-18, Altranstädt 1706-09-24, Moss 1814-08-14, Karl Johan 1818-02-05, Yeni İsveç günleri (künye beyanlı); Stralsund varışı 1714-10-11 (EB1911 11 Kasım); Karl X Gustav 1656-57 mektupları atlasta YOK.

## 4. Ölçülmedi
- `denetle.py`; 11 «madde yok» grubu tek tek (Büyük Kuzey Savaşı 1702-1703 yerleşim günleri, 1720-02-01 Stockholm).
- Frost, Roberts, Lindqvist, Findlay, Oakley, Svensk historisk tidskrift, DergiPark/Belleten okunmadı; Åbo ve Fredriksten için ikinci bağımsız akademik kaynak yok (Wikipedia yalnız aday). TDV `bender`, `poltava`, `norvec`, `kuzey-savasi`, XII. Karl maddeleri okunmadı/yanlış slug.
