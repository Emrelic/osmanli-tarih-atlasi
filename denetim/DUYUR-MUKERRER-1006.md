# DUYUR-MUKERRER-1006 — `duyur.py` "yazıldı ama gitmedi"yi ELLE YAZ'a atmasın (UMIT-W50c)

W50b bulgusunun doğrudan devamı. **Temel: `origin/main` `0f08fcae`** (YARIM+ULASTI indi)
+ `TAHTA-YAZ-CIKIS-1006.diff`. Zincir: ① `TAHTA-YAZ-CIKIS-1006.diff` ② **bu diff** —
**BİRLİKTE inecek.** UYGULANMADI.

## 0. Öngörü (koşmadan önce)
Eski `duyur.py` kod≠0 olan her alıcıyı 🔴 sayar ⇒ K1 (1+yazıldı) ve K2 (2+yazıldı)
"ELLE YAZ" listesine düşer (= mükerrer yolu); özet tek sayı ("ulaştı: 1 / 4").
Yeni: ELLE YAZ yalnız KY; özet `1 · 2 · 1`.

## 1. Ölçüm — öngörü tuttu
Sınav `denetim/ARAC-DUYUR-MUKERRER-SINAV-1006.py` (diff'in içinde): geçici dizinde
sınanan `duyur.py` + SAHTE `tahta.py` (`--kime`ye göre dört çıkış) + dört canlı alıcılı
`tahta.json`. `duyur.py` gerçek alt süreçte koşar.

| denetim | ESKİ | YENİ |
|---|---|---|
| K1 1+yazıldı ELLE YAZ'a düşmüyor | ✗ düşüyor | ✓ |
| K2 2+yazıldı ELLE YAZ'a düşmüyor | ✗ düşüyor | ✓ |
| KY yazılmadı ELLE YAZ'da kalıyor | ✓ | ✓ |
| K0 ulaştı listede yok | ✓ | ✓ |
| özet üç kova (1·2·1) | ✗ yok | ✓ |
| "YENİDEN YAZMA" öğüdü | ✗ yok | ✓ |
| çıkış 1 | ✓ | ✓ |

ESKİ çıkış 1 (4 hata) · YENİ çıkış 0. Zincir `0f08fcae` üstünde `--check` + uygulandı;
DUYUR, TAHTA-ULASTI (10/10) ve TAHTA-GIT-YARIM sınavları temiz.

## 2. Değişiklik (`arac/duyur.py`, döngü + özet)
- Üç kova: `0 + yazıldı` ⇒ ✓ ulaştı · `≠0 + yazıldı` ⇒ 🟡 yazıldı-GİTMEDİ (kod basılır)
  · `yazıldı` yok ⇒ 🔴 yazılamadı (eski davranış, ELLE YAZ öğüdü yalnız bunlara).
- Özet: `ulaştı: N · yazıldı-gitmedi: N · yazılamadı: N  (toplam N)`.
- 🟡 kovasına öğüt: YENİDEN YAZMA · `git status` + `git push` · kod 2 ise önce
  `git log @{u}..` (ölçülemedi ≠ gitmedi; gitmiş olabilir).
- Çıkış: herhangi bir 🟡 ya da 🔴 varsa 1 (eskisi gibi; kısmi duyuru gitmemiş sayılır).

## 3. Bulunamadı / sınırlar
- Sınav "hepsi ulaştı ⇒ çıkış 0" yönünü ayrıca kurmadı (değişmeyen dal).
- Çağıranlar: `duyur.py`nin kendisini çıkış koduyla okuyan betik aranmadı (W50b
  taraması `tahta.py` çağıranlarıydı).
