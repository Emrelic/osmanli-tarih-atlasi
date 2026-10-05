# LAB-D8-UYE-1005 — Değişmez 8a'ya 4 Ekim koşusunda GİREN 20 üyenin sınıfı

> Görev: YILDIRIM BAYEZIT (M-5786). Denetleyici: LAB. **Yalnız ölçüm** — `data/`, `arac/`,
> `denetle.py`ye yazılmadı. Ağaç: `origin/main 707b4b12` worktree'si (`lab-d8-uye-1005`).

## 0. Üyeler — defterden, ölçümden önce
`git show 595e9947:` (27 Eyl, 1611) ↔ `git show dc8c4f6e:` (4 Eki koşusu, 1582):
ORTAK 1562 · ÇIKAN 49 · GİREN 20 (beyanla aynı). 20'nin 20'si bugünkü defterde (1584) de var.
⚠️ Beyandaki "Münih ×6" **yanlış sayılmış: Münih 7 üye** (`d1816-alm-ah-4` ×2 · `d1844-alm-ah` ×2 ·
`d1878-de-ah` ×2 · `d1923-de-at|1918-11-12`). Tam liste: Münih 7 · Třeboň 2 · České Budějovice 2 ·
Norapat 1 · Gadsden 6 (Santa Rita del Cobre 2 · Tubac 2 · Yuma geçidi 2) · Kaliforniya/Yuma geçidi 2.
Bütün günler hattın `f` günü ya da `t−1` günü (8a yalnız bu ikisini ölçer) ⇒ "sınır günü" etiketi
günün TÜRÜNÜ söyler, sınıfı söylemez.

## 1. ÖNGÖRÜ — ölçümden ÖNCE yazıldı ve commitlendi
**Sayı:** 🟢 17 · 🔴 0 · ⚪ 3.
**Mekanizma (sayıdan ayrı sınanır):**
- M1 — Her üyenin `yer` noktası KENDİ yakasındadır (karşı yakaya geçmiş nokta yok); taşma,
  hattın karşı yakasında karşı tarafa ait nokta bulunmayan boşluğun petek emilimidir (§2).
- M2 — Üyelerin girişini GÖVDE açıklar: aynı veri + koşu 19 gövdesi (E1) ile üye YOKTUR.
- M3 — Üyenin kendi verisi (nokta koordinatı, o günkü sahiplik, hat kaydı) 27 Eyl ↔ 4 Eki
  arasında aynıdır — Gadsden hariç (önceki raporda Gadsden üçlüsü VERİ değişimiyle çıkmıştı).
- ⚪ 3 = Gadsden `1854-06-30` üçlüsü: hat yürürlük günüyle sahiplik devri aynı günse ayrım
  kurulamayabilir.
**Yanlışlama:** bir `yer` noktası `yan` yakasında ≥ 5 km içerideyse o üye 🔴'dir ve M1 çürür.
