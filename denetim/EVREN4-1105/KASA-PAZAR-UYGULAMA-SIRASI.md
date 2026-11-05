# KASA PAZAR — uygulama sırası (KASA SALI gece 4-5 Kasım 2026 çıktıları; EMRELİC gece-129)

Bütün dosyalar **origin/kasa-1104-kronoloji** dalındadır (main'de değil). Okumak için: `git show origin/kasa-1104-kronoloji:<yol>` ya da dalı çek. Künye kalemleri LAB SALI'nın **lab-1104-kunye** dalındaki HAYALET-UYGULA'dadır (94+ kalem). Her satırdaki "künye" şartı oraya bakar.

## 🔴 Genel kurallar (her dalgada)

1. **DEĞİŞMEZ 1 UYARISI** (EMRELİC gece-118/126 · LAB SALI): her kalemi uygulamadan ÖNCE ve SONRA `py arac/denetle.py` ile D1'i ölç.
   - BEKLENEN_SAHIPSIZ (311) artıyorsa o dilimde önceki sahip korunur, yeni model `ic_not`ta beyanlı kalır.
   - Bu gece tavan ARTIRILMAZ. Kabile (`bos:"kabile"`) önerileri BEKLETİLİR: Emre kararı gerekiyor (`D1-KABILE-OLCUM.md`).
   - Kasıtlı boşluk noktaları D1'e GİRER; yalnız 1c'ye (belgesiz) girmez.
2. **Değişmez 2:** her yeni `s:`/`d:`/`v:` kırılması, ±30 gün içindeki kronoloji maddesiyle AYNI commit'te girer. Maddeler:
   - `denetim/KRONOLOJI-1104/MADDE-TASLAK-KUYRUK-1105.json` (39)
   - `denetim/KRONOLOJI-1104/MADDE-TASLAK-KUYRUK2-1105.json` (7)
   - `denetim/KRONOLOJI-1104/MADDE-TASLAK-NORVEC-1814.json` (3)
   - `denetim/KRONOLOJI-1104/MADDE-TASLAK-ABD-TACNA-1105.json` (21)
   - "kırılma uygulanmazsa madde girmez" notlu maddeler yalnız kırılmalarıyla girer.
3. **Künye şartı:** künye f/t değişikliğine bağlı yerleşim dilimleri künyeyle AYNI commit'te girer; yoksa hayalet olur.
4. **Yarı açık dönem:** [f, t); ardışık dilimde t = sonraki f.
5. **Ad ile arama:** iki yazımı da tara: `ad:"X"` ve `"ad": "X"` (JSON biçimli dosyalar: halef_1946, nokta2…). dosya_satir boş kayıtlar bu yüzdendir.
6. **Osmanlı `d:` katmanı id taşımaz.** Örnek Lefkoşa (yerlesimler.js:678): `d:[{f:"1570-09-09",t:"1878-06-04",y:"kusatma"}]`.
7. Her dalgadan sonra `py arac/paketle.py yenile` + `py arac/surum_damgala.py`; push yalnız `py arac/push_kapisi.py --kim "<AD>"`.

## Uygulama sırası

Sıranın gerekçesi: önce D1'i AZALTAN ve bağımsız olanlar, sonra künyeye bağlı olanlar, en sonda bekleme şartlıları.

| # | dalga | dosya(lar) | aynı commit şartı | not |
|---|---|---|---|---|
| 1 | **UFUK-1923** (Tunus 72 satır → 1956-03-20, Mısır 56 isg → 1922-02-28, 15 yanlış 1923 geçişi) | `e4_KASA_UFUK.json`, `UFUK-1923-YERLESIM.tsv` | — | Önce **uygulandı mı ölç**. UC103'ün 36 Tunus deliği bununla kapanır. |
| 2 | **103 uç deliği** (67 satır) | `UC103-UYGULA.md`, `UC103-ONERI.json` | önceki dilim t düzeltmeleri (Herzeg-Bosna 08-31, Umman iç imamlık 1955-12-01, OAİ 09-21, Nador 04-05) + künyeler (OAİ t 09-21, Nador t 04-05, LAB) | D1'i AZALTIR, öncelikli. Togoland KAYNAKLI (BM 1044). Mükerrer 3 kayıt HALEF1946'da. |
| 3 | **ARDILSIZ zincir** (71) | `e4_KASA_ARDIL.json` | — | UC103 ile çakışanlar UC103'ten uygulanır; kalanları ölç. |
| 4 | **HALEF1946 birleştirmesi** (Bulavayo, Bangassu, Gcuva) | `HALEF1946-UYGULA.md` | birleşen 3 noktanın zinciri ana kayda | UC103'teki Bulawayo, Bangassou ve Butterworth noktaları burada silinir. |
| 5 | **Yeni Granada** (42 yerleşim + Herzeg-Bosna + Nador) | `e4_KASA_YG.json`, `YENI-GRANADA-OLCUM.tsv` | — | 1717-05-27 / 1723-11-05 / 1777-09-08, Maynas 1802-07-15. Mérida 1558–1717 `ispanyol-peru` KALIR (gece-122). 1810–21 ayrı tur. |
| 6 | **Kanada 1880 / Yukarı Burma** | `KANADA-1880-TARAMA.tsv`, `BURMA-1852-TARAMA.tsv` | — | Kanada anakara 19 → 1870-07-15; Burma 5 → isg 1885-11-28, s: 1886-01-01 (KARARLAR). |
| 7 | **Hicrî denetim** (12 uç) | `HICRI-DENETIM-1105.tsv` | — | Perşembe epoch'u; Fîgîg/Hunayfire TDV'nin kendi günü. |
| 8 | **Kafkas Jülyen** (10 uç 1801-09-12 → 09-24) + **24 şüpheli** (3 ÇEVİR) | `KAFKAS-JULYEN-TARAMA.tsv`, `KAFKAS-SUPHELI-24.tsv` | Kutaisi 1810-03-04 → `kronoloji_gurcistan.js:295` maddesi aynı commit | 336 uca "Gregoryen varsayıldı, teyit edilmedi" notu; 7 BELİRSİZ notla kalır; ±1 gün farkları `ic_not`a. |
| 9 | **Çin takvimi düzeltmeleri** | `CIN-TAKVIM-SONUC.md`, `CIN-TAKVIM-CEVIRI.tsv`, `LAB-v2/CIN-TAKVIM-IFADE-v2.tsv` | — | Iksan t 0683-10-25 (ay hassasiyeti). |
| 10 | **LAB v2 KASA dilimi** (320 dönem) | `LAB-v2/e4_KASA_lab_001…020.json` + `e4_KASA_lab_ON5.json` (15 kayıt), `KARARLAR-EMRELIC.md` gece-112…114 | Vatikan f 1929-02-11 (`italya` t ile bitişik), Udaipur `racput` t GENİŞLET (LAB) | ON5, dosya_satir'ı boş 15 kaydın DOĞRU hükmüdür. Santa Maria da Boa Vista 1672 ikinci kaynaksız UYGULANMAZ. |
| 11 | **Norveç 1814** (20 kayıt) | `NORVEC-1814-ONERI.json` + `MADDE-TASLAK-NORVEC-1814.json` | 🔴 `norvec-1814` künye f 05-17 → 02-19 (LAB) + NOR-01/02 maddeleri | `isvec` 1814-01-14 dilimi düşer. |
| 12 | **Yanlış sahip** (56: Tanganika, Güney Rodezya, Togo, Kıbrıs) | `YANLIS-SAHIP-UYGULA.md`, `YANLIS-SAHIP-ONERI.json` + `MADDE-TASLAK-KUYRUK2-1105.json` | 🔴 `alman-togo` t → 1919-06-28 · `torva` t → 1684 · `rozvi` t → 1840 · `dagbon` t → 1899-11-14 · `akrotiri-dekelya` tek id (LAB) | Kıbrıs 4 kayıtta `d:` biçimini Lefkoşa gibi yaz (id yok). Kilindoni isg 1914-11-01 KAYNAKLI. |
| 13 | **Zend + Kaçar Kafkas** (33) | `ZEND-KAFKAS-UYGULA.md`, `ZEND-KAFKAS-ONERI.json` + `MADDE-TASLAK-KUYRUK-1105.json` KAF-01…33 | 🔴 `baku-hanligi` t, `sirvan-hanligi` f/t, `derbent-hanligi` t 1759-09-01 (LAB) | Uygulamadan ÖNCE Astara, Culfa ve Kliçatak nehir yakası sınaması. Urmiye zend f 1760-08-12. **Tarki BEKLER** (`kumuk-samhalligi` t 1867 gelene kadar). |
| 14 | **F-GERİ B yapısal kalemleri** (Fiume, SHS, Malolos, Vukovar, Tuva) | `FGERI-B-DURUM.md` + `MADDE-TASLAK-KUYRUK-1105.json` EK-01/03/04 | 🔴 `shs-devleti` künye + 8 yerleşim + 1918-12-01 taraf eklemesi TEK commit · `carnaro-naiplik` f 1919-09-12, t = `fiume-serbest-devleti` f = **1920-12-31** · Malolos f 1898-06-12 · RSK t 1996-01-15 · Tuva `v: rusya` → 1917-03-15 `rusya-gecici-hukumet` | LAB HAYALET-UYGULA kalemleri; kuruluş günleri DEĞİL, yalnız yapısal düzeltmeler. |
| 15 | **ABD + Tacna maddeleri** | `denetim/KRONOLOJI-1104/MADDE-TASLAK-ABD-TACNA-UYGULA.md` | 🔴 UMIT abd_13koloni işgal dilimleri + Michilimackinac 1796 + Yeni Granada kırılmaları + 21 madde TEK commit | TAC-01/02/04'ün b'si `kronoloji_cok` ile birebir aynı. |

## UYGULANMAZ (bu gece)

- `FGERI-ONERI-A.json` ve `FGERI-ONERI-B.json`: kuruluş günleri kaynaksız (Vikipedi ya da model bilgisi); ikinci tur gerekir. Yalnız durum dosyalarındaki yapısal bulgular kullanılır (satır 14).
- Kabile (`bos:"kabile"`) önerileri (Kunashiri/Ainu, Kpelle, Acholi): Emre kararı.
- 12 "f İLERİ" kaydı (Garua … Ulundi): sabah, yalnız kaynaklılar.
- Mérida 1810–1821: ayrı rakip hükûmet turu.
- Tarki: künye bekliyor.

## Kayıt

Bütün kararların gerekçeleri `denetim/EVREN4-1105/KARARLAR-EMRELIC.md`de (gece-63 … gece-128).
