# KELIME-CAKISMA-YER-1006b — koordinatör onaylı yama, üç şartla (YENİ TABAN'da yeniden ölçüldü)

Taban: `origin/makine/umit` @ **07cb6062** (main e634fdad tekleştirmesi + Kili e234a37d sonrası).
Ağaç: `C:\atlas-p84-kelimeb` (detached, kaldırıldı). Ana rapor: `KELIME-CAKISMA-YER-1006.md`
(taban 62e270eb ölçümü — burada tekrarlanmadı). **UYGULANMADI**; uygulayan UMIT İRTİBAT.

## Diff — `denetim/KELIME-CAKISMA-YER-1006b.diff` (TEK parça, 270 satır, LF, CR 0)
1. `arac/denetle.py` — 1006 eşleştiricisi (`_2s_kor` · büyük harf şartı `_2s_ozel_ad_gecer` ·
   `_2S_ES_AD = {buna, cotegipe, ordu}`) **+ şart ③** EŞ-AD kovası (`ES_AD_MUAF_2S`,
   `_2s_es_ad_gecer`, `_2s_es_ad_rapor`) **+ tavan** `BEKLENEN_2S_YALNIZ_TARAF` 2247 → **2250**.
2. `denetim/ARAC-2SK-TOPLU-SINIF-1006.py` — 4 satır (`kor` + `nrm_yer`).
3. `denetim/ARAC-KELIME-CAKISMA-SINAV-1006.py` — EŞ-AD kovasının 5 sorusu (dosya 28081c35'te
   izlenir hâle gelmişti; aynı commit'e girsin diye diff'te).
Veri dosyası YOK (şart ①). `git apply --check` ✓ · uygulanmış hâlde `py_compile` (3 dosya) ✓ ·
uygulanmış `denetle.py` diff'ten üretilen ile BİREBİR (`cmp`).

## Şart ③ — eş-ad muafiyeti sessiz olmaz
`_2S_ES_AD` kökü maddede özel ad olarak geçip YER kolu muafiyet yüzünden kapanmadıysa birim
ADIYLA `ES_AD_MUAF_2S`e düşer, 2sk satırının altında basılır:
- **TARAF-KAPATTI** — TARAF kolu kapatıyor; sayılır, hüküm değişmez.
- **OLCULEMEDI** — başka kol kapatmıyor ⇒ birim `eksik`e GİRMEZ (2s AÇIK olmaz), kola SAYILMAZ
  (kapalı olmaz), `olculemedi("Değişmez 2sk eş-ad", …)` ⇒ **denetle.py çıkış 2**. Kırılmanın
  bütün birimleri böyleyse kırılma AÇIK'a yazılmaz (`elif not secim_havuz`).
Bugünkü basım (yamalı, 07cb6062):
```
EŞ-AD  YER kolundan MUAF (`_2S_ES_AD`): 3 birim · TARAF-KAPATTI 3 · ÖLÇÜLEMEDİ 0
  TARAF-KAPATTI 1889-11-15  Cotegipe (Campo Largo)  ← Brezilya'da cumhuriyet ilan edildi …
  TARAF-KAPATTI 1897-01-01  Buna (Bouna)  ← Bagirmi Sultanlığı Fransız himayesine girdi
  TARAF-KAPATTI 1920-04-23  Ordu (Bayramlı)  ← Kızıl Ordu Azerbaycan'ı işgal etti …
```

## Ölçüm — 07cb6062, yamasız ↔ yamalı (`denetle.py` tam koşu + korpus aracı)
| ölçü | yamasız | yamalı (tavan 2250) |
|---|---|---|
| 2sk kapalı | 4174 = 2070 YER + 2104 TARAF | **4174** = 2067 YER + 2107 TARAF |
| GÜN YER·TARAF / OCAK-1 / maskeli | 1379·1615 / 691·489 / 578·142 | 1377·1617 / 690·490 / 577·143 |
| **2sk yalnız-taraf görünür+maskeli** | **2246** (tavan 2247) | **2250 (tavan 2250)** — uyarı yok |
| öteki bütün satırlar (D1 · D2 · 2s AÇIK · 2i · 2t · 4 …) | — | **değişmedi** (`diff` yalnız 2sk bloğu) |
| çıkış kodu | 2 | 2 — ikisinde de YALNIZ D8 ölçülemedi (taze ağaç, `devletler_harita.js` yok) |
| korpus: YER birimi | 2648 | 2644 — DÜŞEN tam **4**, GİREN 0 |
| `ARAC-2SK-TOPLU-SINIF` çapraz | ✓ | ✓ (2250) |

**SAHTE bu tabanda 4 (1006'da 5):** Karşi (Nahşeb) 1920-09-02 · Buna (Bouna) 1897-01-01 · Ordu
(Bayramlı) 1920-04-23 · Cotegipe 1889-11-15. **Beri 1406-10-21 artık YER birimi değil** —
yamasız korpus ölçümünde de yok (koordinatörün Tebriz-40 tekleştirmesi o kırılmayı/kapanışı
değiştirdi; sebebi ayrıca ölçülmedi). Tavan yorumu: "+4 = 4 SAHTE YER kapanışının kalkması
(KELİME-ÇAKIŞMASI 1006). Borç artışı DEĞİL, görünürlük kazancı." + taban tavanı 2247/ölçüm 2246
⇒ **2247 → 2250 = +4 −1** (1 birim önceden iyileşmişti).

## Sınav — iki yönde
- Yamalı: **22/22** (17 eşleştirici + 5 EŞ-AD kovası: OLCULEMEDI'ye düşüş · 1427-06-01
  kırılmasında AÇIK'a yazılmama · TARAF-KAPATTI · kovanın BASILMASI · OLCULEMEDI_KOVA'ya girişi).
- Yamasız (tabandaki 17 soruluk sınav): **10/17** — 7 SAHTE sorunun 7'si ÖTÜYOR.
- Kova soruları sentetik iki kayıtla `degismez2` → `_2s_es_ad_rapor` UÇTAN UCA koşar.
