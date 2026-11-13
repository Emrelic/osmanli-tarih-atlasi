# PARTİ 4 sonuç (13 Kasım 2026) — 50 yerleşim, 106 dönem kaynaklandı (106 listeli, 0 atlandı)

Ön tarama (`p4_tara.py`): 106/106 dönem hâlâ kaynaksız ve f/t eşleşir; dokunulmayan 0. `uygula_parti4.py` 106/106 nesneye `kaynak:` ekledi (beklenen 106, ESİT). Tek dosya `data/yerlesimler_avrupa.js` (`git diff --stat`: 50 ekleme/50 silme = dokunulan yerleşim satırı). `node --check` temiz. `dogrula_parti4.py`: kaynaklar geri alınınca dosya HEAD ile özdeş (yalnız ekleme). Her alıntı `_ham/` metninde boşluk-normalleştirilmiş birebir arandı, sıfır sorun, ≤25 kelime. Betikler: `p4_veri.py` (alıntılar) → `kaynaklar-parti4.json` → `p4_tara.py` → `uygula_parti4.py` → `dogrula_parti4.py`.

## ① Basamak sayıları (106 dönem)
- TDV: 0 (bu partide Osmanlı/İslâm bağı yok).
- Ulusal akademik ansiklopedi (Treccani Enciclopedia on line / Enciclopedia Italiana, Dizionario di storia): 105 dönemde (HLS/NDB/Biographie Nationale'e gidilmedi; İsviçre şehirleri de Treccani'den).
- Britannica 1911 içeren: 9 dönem; bunların yalnız ÖNEKLİ `[KISMİ DESTEK — Britannica 1911 (bir asır eski)]` olanı 3 (Maastricht 1632-1673, Stralsund 1281-1648 ve 1648-1815; Stralsund'da Treccani yalnız Pomeranya bölge düzeyi). Öteki 6'sında (Arnhem 2, Maastricht 1281-1516, Gent 1384-1482, Dinant 1795, Lozan 1281-1536) Treccani ile birlikte, satır içi etiketli.
- Ortak ülke notu, `[ÜLKE GENELİ: şehre özgü teyit yok]` önekli (şehir cümlesi yok): 17 dönem (Brugge/Gent 1795 ve 1830, Anvers 1830, Namur/Tournai/Hasselt/Sint-Truiden/Huy 1795 ve 1830, Liège 1830, Dinant 1830). Ülke-geneli kaynak parçası içeren toplam: 79 dönem (Belçika 1384/1477/1794/1814/1830, Almanya 1871/1945, Hollanda 1581/1795/1813, geç antik İtalya 476/493/552/569/774, Milano 1395, İtalya 1860/1861, Magenta 1859, Avusturya).
- bulunamadı: 0. Dokunulmayan: 0.

## ② ÇELİŞKİ (1 dönem; dönem dokunulmadı, çözülmedi)
- **Trieste 1281-01-01→1382-09-30 (almanya):** Treccani «T. si alleò al patriarca d'Aquileia nelle guerre contro Venezia dal 1275 al 1291, ma fu conquistata dai Veneziani» ve «passò sotto il dominio della prima (1369), poi del secondo (1379), e nel 1382 degli Asburgo». Atlas tüm dönemi `almanya` yazıyor. Karar sizde (dönemi böl: Venedik/Aquileia patrikliği/Habsburg).

## ③ NOT/BEYAN (80 dönem; başlıcaları, düzeltme yok)
- **Yıl farkı:** Brescia Venedik 1428 (atlas f=1426); Bergamo 1427 (atlas f=1428); Mantova 1707 (atlas t=1708); Piacenza Langobard 570'ten (atlas 568); Langobard girişi 569 (atlas 568, 7 şehir); Ostrogot sonu Ekim 552/son kale 555 (atlas 553); Bologna 1859 (atlas f=1860-03-18).
- **Gün kaynakta yok (yıl düzeyinde):** Odoakar 476 ve Teodorik 493 (7 şehir); Verona/Venedik 1405 (kaynak son olarak 1796 Fransız gelişi, Campoformio'yu 1798 yazar; atlas t=1797-05-12); Burgonya 1384 (günsüz) ve 1477 (kaynak Cesur Karl'ın ölümünü 1477 verir; atlas t=1482-03-27, Gent için EB1911 «treaty of Arras (1482)»); Belçika 1794 Fleurus (atlas f=1795-10-01), 1814; Almanya 1945 (kaynak 8 Mayıs teslim, atlas t=1945-06-05); Hollanda 1581/1795/1813; Parma/Modena/Ferrara 1860; İsviçre: Luzern 1332, Zürih 1351, Bern 1353, Basel 1501, Lozan 1536 (Vaud bölge düzeyi), Konstanz 1548, Freiburg 1368; Udine 1420/1797; Namur 1421; Tournai 1521; Villach 1760/1918/1945.
- **Gün tutan:** Belçika bağımsızlık 4 Ekim 1830 (atlas f aynı); Almanya İmparatorluk 18 Ocak 1871 (aynı); Magenta 4 Haziran 1859 (atlas f aynı); İtalya Krallığı 17 Mart 1861 (atlas t aynı); Milano Dükalığı 11 Mayıs 1395 (aynı); Cenevre 21 Mayıs 1536 (aynı gün, Reform kilisesi).
- **Devlet etiketi kaynakta geçmez (BEYAN, ÇELİŞKİ sayılmadı):** 'almanya' etiketli Maastricht (Brabant dükleri + Liège prens-piskoposu ortak), Namur (Namur Kontluğu), Stettin/Stralsund (Pomeranya Dükalığı), Udine (Aquileia Patrikliği), Luzern/Zürih/Bern/Basel (Habsburg/ittifaklar), Freiburg (Habsburg 1368), Cenevre (prens-piskoposluk + Savoya, 1533 sonu); Modena 'ferrara' (Este); Parma 'milano-dukaligi' (Sforza/Fransız).
- Hannover: Treccani 17 Haziran 1866 Prusya işgali; atlas f=1871-01-18 (İmparatorluk ilanı). Münster yalnız «Almanya'da şehir» düzeyinde (KISMİ DESTEK).

## ④ KISMİ DESTEK ve ÜLKE GENELİ
- KISMİ DESTEK — Britannica 1911 (bir asır eski) önekli: Maastricht 1632-1673, Stralsund 1281-1648, Stralsund 1648-1815. Maastricht 1632-08-22 başlangıcı hiçbir kaynakta yok (yalnız «taken by the French in 1673»).
- ÜLKE GENELİ önekli: 17 dönem (yukarıda). Şehir cümlesi yalnız «şehir o ülkede» düzeyinde olanlar: Münster; Anvers (şehir sayfası bağımsızlıkla ilgili tarih vermez).

## ⑤ Çekilemeyenler / uygun madde yok
- Treccani'de madde bulunamadı (ana sayfa döndü): Arnhem, Gand/Gent, Hasselt, Sint-Truiden, Huy, Dinant, Stralsund, Villaco (yalnız `villach` slug'ı çalıştı; İtalyanca Treccani Villach bağımsız madde), `seconda-guerra-d-indipendenza`, `regno-d-italia`, `plebisciti`, `unita-d-italia`. Çözüm: Arnhem/Stralsund/Dinant/Maastricht 1632 için EB1911 (etiketli); Gent EB1911 ve ülke notu; Hasselt/Sint-Truiden/Huy yalnız ülke notu (Liège ülkesi dahil «Paese di Liegi» cümlesi).
- Britannica 1911 404: Saint-Trond (Sint-Truiden). HLS (hls-dhs-dss.ch), NDB, Biographie Nationale, Nationaal Archief'e gidilmedi (süre/RAM); İsviçre şehirleri için daha sağlam HLS teyidi önerilir.
- Treccani Hasselt/Huy/Dinant şehir maddesi yok: bu şehirlerde 1795 dönemi Liège ilhakı üzerinden ülke-bölge notudur.
- Bormio/Chiavenna Treccani maddeleri bölge-şehir düzeyindedir; Milano Dükalığı (1395) önekli ülke notu, şehir değil.
