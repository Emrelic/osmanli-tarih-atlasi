# HAVVA-KOSU20-D7-UYELIK — Değişmez 7 sorgusuz enklav, d1b25b21 ↔ fc380975

**Yöntem:** iki geçici worktree, her birinde kendi kodlanmış gövdesi `coz-c` ile çözüldü,
`py arac/denetle.py --ayrinti` (ikisi de çıkış 2, sebep 8k körlüğü), D7 bölümündeki
tarihli enklav satırlarının TAMAMI kıyaslandı. KOŞU 20 gövdesi bu ölçüme GİRMEDİ.

| taban | D7 | tam liste |
|---|---|---|
| `d1b25b21` | 730 | 730 satır |
| `fc380975` | 734 | 734 satır (KOŞU 20 sonrası da 734) |

⇒ +4 (tavan 731'e göre +3) **koşudan DEĞİL**, `d1b25b21..fc380975` arasındaki VERİDEN.

## YENİ — 4 enklav, 2 ada
| gün | yerleşim | sahip | ana gövdeye | sınıf | ada |
|---|---|---|---|---|---|
| 1918-11-11 | Ljubljana | yugoslavya | 183 km | A-koridor | Ljubljana+Maribor (Marburg) |
| 1918-11-11 | Maribor (Marburg) | yugoslavya | 177 km | A-koridor | Ljubljana+Maribor (Marburg) |
| 1919-09-10 | Lvov | itilaf-emaneti | 876 km | C-hakiki | Lvov+Yazlofça (Yazlovets) |
| 1919-09-10 | Yazlofça (Yazlovets) | itilaf-emaneti | 892 km | C-hakiki | Lvov+Yazlofça (Yazlovets) |

## KALKAN — 0

Notlar (ölçülen):
- `itilaf-emaneti` kimliği `4f390691` ("CİSLEİTHANİA İNDİ") ile geldi (`git log -S`).
  `renkler.py`'de rengi YOK: KOŞU 20'de "bilinmeyen devlet kimliği" uyarısı 16 satır.
- `git log -G 'Ljubljana|Maribor|Lvov|Yazlof' d1b25b21..fc380975 -- data/` BOŞ:
  bu dört yerleşimin satırı değişmedi. Enklavlar komşu kayıtların değişiminin yan etkisi.
  Ljubljana/Maribor'u doğuran commit BELİRLENMEDİ.
