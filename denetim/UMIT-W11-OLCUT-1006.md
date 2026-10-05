# UMIT-W11-OLCUT-1006 — mükerrer ölçütü: başlık-kişi kusuru · ölü istisnalar

Oturum: UMIT-W11-EDIGU-MUKERRER-1006 · 5 Ekim 2026 · **YALNIZ ÖLÇÜM**, `denetle.py`ye yazılmadı.
Ağaç: `C:\atlas-w11` detached `origin/main` = `ae2e6bbd`. Yöntem: `denetle.main()` koşturuldu,
`mukerrer_maddeler`in aldığı evren (**2187 madde**) yakalandı. Varyantlar aynı işlevi bellekte
değiştirilmiş `_kisiler_kumesi` / `BILINEN_AYRI` ile yeniden çağırarak ölçüldü (dosya değişmedi).
Betikler scratchpad'de (`olcut.py`, `olcut_c.py`), ham çıktı `olcut.json` / `olcut_c.json`.

Taban: kesin kademe **112** (başlık 44 + kişi! 68) · zayıf (kişi:) 109 · toplam 221.

## ③ ÖLÜ İSTİSNA: 60 `BILINEN_AYRI` girdisinin 7'si ölü (ÜYELİKLE ölçüldü)
Her girdi tek tek çıkarıldı; çıkınca kesin ya da zayıf kademede YENİ çift doğuyor mu?
```
60 girdi · 53 KESİN çift bastırıyor (her biri tam 1) · 0 yalnız zayıf bastırıyor · 7 ÖLÜ
```
Önceki beyanım "60 − 53 = 7" bir çıkarımdı; ölçüm aynı sayıyı verdi, şimdi **adlarıyla**:

| `denetle.py` | girdi (kısaltılmış) | başlıklar evrende | neden ölü |
|---|---|---|---|
| `:3695` | "Şûrâ-yı Devlet kuruldu" ↔ "Şûrâ-yı Devlet'in açılışı…" | 1 / 1 | ikisi de var ama artık eşleşmiyor (ölçüt/gün değişti) |
| `:3696` | "Halep'in Osmanlı hâkimiyetine girişi" ↔ "Şam'ın (Dımaşk) …girişi" | **0** / 1 | A başlığı evrende yok (bugün `kronoloji_memluk.js:348` "Halep'in Osmanlı'ya teslimi") |
| `:3698` | "Erzurum Kongresi'nin toplanması" ↔ "Sivas Kongresi'nin toplanması" | **0 / 0** | iki başlık da yok |
| `:3703` | "Şah Abbas'ın karşı taarruzu — Tebriz'in kaybı" ↔ "Revan'ın Şah Abbas'a kaybı" | 1 / 1 | ikisi var, eşleşmiyor |
| `:3706` | "Tomanbay'ın Kahire'de Memlük sultanı ilân edilmesi" ↔ "…Terrûce'de yakalanması" | 1 / 1 | ikisi var, eşleşmiyor |
| `:3710` | "Barbaros'un Kuzey Ege seferi…" ↔ "Barbaros'un Ege seferi…" | 1 / 1 | ikisi var, eşleşmiyor |
| `:3712` | "Kadızadeliler hareketinin … bastırılması" ↔ "Köprülü … sadrazamlığa atanması" | 1 / 1 | ikisi var, eşleşmiyor |

**Tehlike (somut):** 2 girdinin başlığı evrende yok. Biri o başlıkla yeniden yazılırsa
(ör. Halep maddesi eski adına döner) gerçek bir yakınlık **sessizce** susturulur. 5 girdi bugün
bir şey bastırmıyor ama iki başlık da canlı: ölçüt ya da gün değişince yeniden "tutup" ilk
gerçek kayma ihlalini yutar.
**Öneri (yazılmadı):** 7'si silinsin. Kalıcı çare: `denetle.py`ye **ölü istisna sayacı**,
yani her girdinin bastırdığı çift sayısı ölçülsün; 0 bastıran girdi UYARI versin (tavan 0).
Kapı, sınav için iki yönde koşturulmalı: ölü girdi ekle → ötmeli; canlı girdi → ötmemeli.

## ① Başlık kelimesini "kişi" sayma: ölçüm, ADIYLA
`_kisiler_kumesi` (`denetle.py:3860`) `kisiler` alanını **ve başlığı** birleştirip 4+ harfli
her kelimeyi 6 harfe kırpar. Durum (`kisiler` alanı yokken yalnız başlık kalır):
- `kisiler` alanı BOŞ madde: **702 / 2187**.
- Kişi ölçütüyle yakalanan 177 çiftin **125'inde** ortak "kişi" `kisiler` alanından değil
  **yalnız başlıktan** geliyor. Kesin kademede (kişi!) bu sayı **68 / 68**: kesin kişi kademesinin TAMAMI başlık kelimesine dayanıyor.
- Başlıktan "kişi" sayılan kelimeler (çift sayısıyla, 177 kişi çiftinin başlık kaynaklı 125'inde; 108 ayrı kelime):
  `antlas` 23 · `kralli` 16 · `siniri` 11 · `kurtul` 10 · `devlet` 5 · `edildi` 5 · `bagims` 5 ·
  `bukres` 5 · `versay` 5 · `sultan` 4 · `etti` 4 · `fransi` 4 · `bulgar` 4 · `ilan` 4 · `italya` 4 ·
  `merkez` 3 · `kurdu` 3 · `terk` 3 · `portek` 3 · `yunani` 3 · `serbes` 3 · `londra` 3 · `habsbu` 3 ·
  `triano` 3 · `kuruld` 2 · `ankara` 2 · `oldu` 2 · `osmanl` 2 · `kahire` 2 · `mehmed` 2 · `mutare` 2 ·
  `istanb` 2 · `protok` 2 · `geri` 2 · `cumhur` 2 · `isgali` 2 · `cemiye` 2 · `millet` 2 · `misir` 2 ·
  `lozan` 2 + 68 tekil (`toren`, `donust`, `ordusu`, `idares`, `gecti`, `kielce`, `askeri`, `sivil` …;
  tam liste `olcut.json` → `baslik_tokenlari`).
  ⚠️ Not: `sultan`, `kral` muafiyet kümesinde var ama `sultan` 4 kez geçiyor: "Sultanlığı"[:6] =
  `sultan` muafiyeti atlatıyor (muafiyet kırpmadan ÖNCE sınanıyor).
  ⚠️ Kesme işareti yalnız uçtan sıyrılıyor: `pamir'`, `rusya'`, `gine'n`, `misir'` ayrı token
  (D215 ailesi). Aynı ad iki ayrı "kişi" oluyor.
- `birlik` bugün listede **yok**: Polonya Zamość↔Radom çifti `BILINEN_AYRI`da (`:3466`)
  olduğu için hiç kıyaslanmıyor. Kusur listeyle SAKLANMIŞ, kapanmamış.

## ② Varyantlar: 112 → ? (üyelikle, giren/çıkan)
| varyant | kesin | çıkan | giren | hüküm |
|---|---|---|---|---|
| taban | 112 | — | — | — |
| A · `kisiler` boşsa başlıktan kişi türetme | **45** | 67 | 0 | ❌ **körleştirir** |
| B · yalnız `kisiler` alanı | **44** | 68 | 0 | ❌ **körleştirir** |
| C · başlık tokenlarından GENEL kelimeler elenir (52 kelime: `kralli kurdu kuruld merkez edildi terk donust sultan etti ilan oldu siniri devlet gecti birlik toren antlas protok …`, tam liste `olcut_c.json`) | **95** | 17 | 0 | ✅ önerilen yön |

**A/B neden yanlış:** çıkan 67-68 çiftin büyük kısmı **SAHİCİ mükerrer** ve onları yalnız bu
"kusur" yakalıyor: aynı gün, aynı antlaşma iki dosyada (1923-07-24 Lozan ×2 · 1913-08-10
Bükreş ×5 · 1920-01-10 Versay ×5 · 1921-07-26 Trianon ×3 · 1878 Berlin · 1921 Kars · 1921
Ankara · 1912 Uşi · 1913 Londra ×3 · 1913 İstanbul Protokolü ×2 · 1723 Petersburg · 1816
Sugauli · 1846 Krakov · 1503 Moskova · 1522 Bagirmi · 1922 Mısır Krallığı ×2 …). Başlıktan
kişi türetmek kaba ama **özel adlar** (`lozan`, `versay`, `bukres`) üzerinden asıl işi o yapıyor.
Kapatmak sayacı 112'den 45'e indirir ve **borcu gizler** (CLAUDE.md §11: denetim var ≠ soruyu soruyor).

**C'nin çıkardığı 17 çift, 17'si de YANLIŞ POZİTİF** (ölçüldü, liste):
16'sı yıl damgalı (`YYYY-01-01`) farklı coğrafya "krallık kuruldu / terk edildi" kalıbı:
1438 Sukhothai↔Cusco · 1450 Moundville↔Zimbabve↔Eystribygð↔Karagve↔Torva↔Pachacuti↔Sulu↔Nkore↔tören
merkezi (10 çift) · 1500 Antemoro↔Ndongo · 1550 Jakpa↔Loango · 1600 Lozi/Ngonde/Ovambo/Turinsk↔Menabe (4).
1'i 1895-03-11 Pamir "Vahan ucu Çin sınırına dayandı" ↔ "Rus–Çin sınırı antlaşmasız kaldı"
(ortak yalnız `siniri`; aynı notalar ailesinin öteki 2 çifti C'de KALIYOR, `pamir` özel adıyla).
Sahici mükerrerlerin **hiçbiri** çıkmadı; giren 0.
⚠️ C uygulanırsa `BILINEN_AYRI`daki bazı girdiler (ör. Zamość↔Radom `:3466`, ortak yalnız
`birlik`) ÖLÜ olur: C'den sonra ③ sınavı yeniden koşulmalı.

## Öneriler (hepsi ÖNERİ, `denetle.py` W9'da kilitli, sonra koordinatörde)
1. **7 ölü istisnayı sil** (`:3695 :3696 :3698 :3703 :3706 :3710 :3712`) + ölü istisna sayacı (tavan 0).
2. **Ölçüt: C yönü**, `_kisiler_kumesi`nden başlık kaynaklı GENEL kelime kümesi elenir.
   A/B **yapılmasın**. Muafiyet sınaması kırpmadan SONRA (`sultan`), kesme işareti içten sıyrılsın
   (`pamir'` → `pamir`). İki yönde sınav: 17 yanlış pozitif düşmeli · Lozan/Bükreş/Versay kalmalı.
3. **Tavan:** C inerse 112 → 95. Ama C + ölü silme + yeniden ③ birlikte koşulup tek sayı yazılmalı.
4. Asıl borç: C sonrası kalan 95'in çoğu **sahici mükerrer** (antlaşmalar `olaylar*` ↔
   `kronoloji_sinir*`). Ölçüt değil veri işi, ayrı kalem.

## Bulunamadı / ölçülmedi
- C'nin 52 kelimelik kümesi elle seçildi, korpus frekansından türetilmedi. Daha dar/geniş küme ölçülmedi.
- 95'in sahici/yanlış ayrımı tek tek yapılmadı (yalnız çıkan 17 sınıflandı).
