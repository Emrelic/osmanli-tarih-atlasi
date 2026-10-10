# BUDAMA-1010 — CLAUDE.md budaması (hiçbir kural silinmeden)

Sevk: YILDIRIM BAYEZIT, 10 Ekim 2026 (Emre'nin token kararı) · oturum `CLAUDE-BUDAMA-1010`
· ölçüm ağacı `C:\atlas-nokta-sumer` = `origin/main` `197455c8` (ana checkout `HEAD..origin/main` = 0)
· çıktı: `denetim/BUDAMA-1010.diff` — `CLAUDE.md` koordinatörün dosyası, UYGULAMA ONUN.

## §0 TABAN ve ÖNGÖRÜ — kesmeden ÖNCE yazıldı, sonradan DOKUNULMAZ

**Taban (`197455c8:CLAUDE.md`):** 1347 satır · **96.053 bayt** · ~27.444 token (bayt/3,5).
(Sevk mesajındaki ~25.119 token 09:00 ölçümüydü; dosya o saatten beri +8.136 bayt büyüdü.)

**Eski sınav tabanı** (`py denetim/ARAC-PROTOKOL-BUDAMA-0917.py --sina`): eski satır 2126 ·
**eksik 14** (hepsi `§1.5` tablosunun 17 Eylül hâli — tablo `durum_tablosu --yaz` ile her gün
yeniden yazılıyor, BEKLENEN) · kırık bağlantı 0 · boyut ✗ (96.053 > 25.000) · çıkış 2.
⚠️ O sınavın evreni `d2228e6` (17 Eylül ÖNCESİ) satırlarıdır ⇒ bu gecenin eklemelerini
GÖRMEZ. Bu iş için ikinci bir sınav yazılacak (`denetim/BUDAMA-1010-SINAV.py`): taban
`197455c8`in BOŞ OLMAYAN HER SATIRI `yeni CLAUDE.md ∪ dersler/*.md` içinde birebir bulunmalı.

**Yöntem:** sıkıştırılan her bölümün ÖZGÜN METNİ birebir yeni bir `dersler/D2xx-*.md`'ye
taşınır (17 Eylül emsali); CLAUDE.md'de kural/slogan kısa satır + `[Dxxx]` atfı kalır.
Dokunulmayacak çapalar: `## 1.5` başlığı + hemen altındaki tablo (`durum_tablosu.py --yaz`
regex'i) · `§9.1` "**TUZU** … Biri değişirse" cümlesi (`ARAC-TUZ-DORT-DOSYA-SINAV-1010` okur).

| bölüm | taban B | öngörü B |
|---|---|---|
| başlık + Belge seti | 2.916 | 2.000 |
| §1 · §1.5 · §1.6 · §2 | 4.732 | 4.732 (dokunulmaz) |
| §3 | 6.750 | 2.800 |
| §3.4 | 5.372 | 2.300 |
| §3.5 | 3.614 | 2.000 |
| §4 | 12.076 | 4.500 |
| §5 | 6.714 | 1.900 |
| §6 · §8 · §10 | 1.752 | 1.752 (dokunulmaz) |
| §7 | 7.124 | 3.000 |
| §7.1 | 7.155 | 2.800 |
| §7.3 | 5.326 | 2.000 |
| §7.2 | 9.417 | 3.800 |
| §9 | 9.753 | 3.200 |
| §9.1 | 3.700 | 1.700 |
| §11 | 9.573 | 2.700 |
| **TOPLAM** | **96.053** | **~41.200 B ≈ 11.800 token** |

Öngörü: yeni `dersler/` dosyası **13 ± 2** · eski sınav **eksik 14 → 14** (değişmez; evreni
bu gecenin satırlarını içermiyor) · yeni sınav **eksik 0** · kırık bağlantı 0.

## §1 SONUÇ — ölçüldü (öngörü §0 sabit kaldı)

```
                     taban                 yeni                  öngörü
CLAUDE.md            96.053 B · 1347 satır 42.669 B · 521 satır  ~41.200 B
~token (bayt/3,5)    27.444                12.191                ~11.800     ⇒ −15.253 token / oturum
yeni dersler dosyası —                     13 (D273–D285)        13 ± 2      TUTTU
yeni sınav eksik     —                     0                     0           TUTTU
eski sınav eksik     14                    14                    14 → 14     TUTTU (aynı 14 §1.5 satırı)
kırık bağlantı       0                     0                     0           TUTTU
```
Bölüm bölüm (taban → yeni, bayt): başlık+Belge seti 2.916 → 2.360 · §3 6.750 → 2.731 ·
§3.4 5.372 → 1.342 · §3.5 3.614 → 1.588 · §4 12.076 → 5.064 · §5 6.714 → 2.455 · §7 7.124 → 3.543
· §7.1 7.155 → 2.705 · §7.3 5.326 → 1.722 · §7.2 9.417 → 4.759 · §9 9.753 → 3.857 ·
§9.1 3.700 → 1.515 · §11 9.573 → 2.523 · dokunulmayanlar (§1 · §1.5 · §1.6 · §2 · §6 · §8 · §10)
aynen. ⚠️ Öngörünün en büyük ıskası §4 (4.500 öngörü, 5.064) ve §7.2 (3.800 → 4.759): ikisi
de kural yoğun; kısaltılabilecek vaka değil madde sayısı fazlaydı. İlk taslak 52.711 B'de
kaldı — öngörüye ancak ikinci geçişte inildi.

## §2 SINAMA

**Yeni sınav** `denetim/BUDAMA-1010-SINAV.py` (diff'in içinde) — beş soru: ① tabanın boş
olmayan 1284 satırının HER BİRİ `yeni CLAUDE.md ∪ dersler/*.md`de birebir ② kırık `dersler/`
bağlantısı ③ `## 1.5` çapası: `durum_tablosu.py --yaz` regex'i eşleşiyor ve tablo AYNI
④ `§9.1` TUZU kümesi (`ARAC-TUZ-DORT-DOSYA-SINAV-1010` ⑤'in okuduğu) AYNI ⑤ boyut.
**İki yönde sınandı** (beşi de beklenen kodla):
```
A taban CLAUDE.md'nin kendisi           çıkış 0 ✓
B §1.5 tablosundan bir satır bozulmuş   çıkış 2 ✓
C TUZU cümlesinden bir dosya düşmüş     çıkış 2 ✓
D D277 ders dosyası yok                 çıkış 2 ✓  (eksik satır + kırık bağlantı)
E yeni CLAUDE.md                        çıkış 0 ✓
```
**Eski sınav** (`ARAC-PROTOKOL-BUDAMA-0917.py --sina`): ÖNCE eksik 14 · kırık 0 · SONRA eksik
14 · kırık 0 — **sonuç DEĞİŞMEDİ.** (Boyut satırı iki hâlde de ✗: 17 Eylül'ün 25.000 B
hedefi bugünkü dosya için yazılmamıştı; o sınavın evreni `d2228e6` satırlarıdır.)
⚠️ **Sınavın sınırı, beyan:** ① soru "hiçbir satır KAYBOLMADI" der — bir kuralın CLAUDE.md'de
KISA hâliyle de kaldığını söylemez; o bir okuma hükmüdür ve benimdir. Kural-kural kontrol
edildi: sloganı CLAUDE.md'de olmayan kural bırakılmadı; iki küçük kural ilk taslakta düşmüştü
(`coz_c` damgayı doğrulamaz · statik tarama çaresi · bilgi amaçlı HERKES stderr'e düşer) ve
geri yazıldı.

**Diff:** `git apply --check` TEMİZ (taban `197455c8` = `origin/main`, 17 dosya, +1767 −1103);
uygulanmış hâli diskteki taslakla satır satır AYNI (CRLF farkı hariç); uygulanmış hâlde yeni
sınav GEÇER.

## §3 TAŞINAN VAKALAR (birebir, taban `197455c8`)
| ders | CLAUDE.md'deki yeri | taban satırları |
|---|---|---|
| D273 | giriş · Belge seti (AĞACIN GERİDEYSE DUR) | 1–44 |
| D274 | §3 (çıkış kodu · kapının yeri · tek otorite) | 108–199 |
| D275 | §3.4 tavan disiplini ⓪–⑦ | 200–264 |
| D276 | §3.5 (beyanlı boşluk = delik) | 265–311 |
| D277 | §4 (TDV olgu/tarih · hicrî sözleşme · tuzaklar) | 314–463 |
| D278 | §5 (çıktı yüzü · ölçüm ağacı · log yüzü) | 466–570 |
| D279 | §7 (makine rolleri · süreç öldürme · dizinler) | 577–665 |
| D280 | §7.1 (koordinatör ölçtürür · iki yanlılık) | 668–768 |
| D281 | §7.3 atama ①–⑧ | 769–855 |
| D282 | §7.2 (bekçi tavanı · nabız · darboğaz) | 856–972 |
| D283 | §9 (koşu bayrakları · zincir · kabul ölçütü) | 991–1137 |
| D284 | §9.1 (dondurma kapsamı) | 1138–1192 |
| D285 | §11 (kapının beş üyesi · öneri sayısı · desen) | 1207–1347 |
Taşıyıcı alet `denetim/BUDAMA-1010-TASI.py` (diff'in içinde; `--uygula` tekrarlanabilir,
DIZIN'e ikinci kez eklemez). DIZIN'e 13 satır + başlık eklendi, mevcut satırına dokunulmadı.

## §4 İSTİYORUM
- Diff'i uygula. Uygulamadan önce `CLAUDE.md`ye **yeni satır girdiyse** diff çakışır — o
  zaman yeni satırlar taşınmadan budama inmez; bana yaz, tabanı yenileyip yeniden üretirim
  (araçlar taban sabitine bağlı: `TABAN = "197455c8"`).
- `§11` kuralının yeniden ihlalini önlemek için öneri (karar senin): `BUDAMA-1010-SINAV.py`nin
  ⑤ boyut satırını bir TAVANA çevirmek (ör. 45.000 B) ve `denetle_yayin.py`ye bağlamak —
  bugün boyut yalnız basılıyor, kimse okumuyor (`§11` "çağıranı olmayan kapı").
