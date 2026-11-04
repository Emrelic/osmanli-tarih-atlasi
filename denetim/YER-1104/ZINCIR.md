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
