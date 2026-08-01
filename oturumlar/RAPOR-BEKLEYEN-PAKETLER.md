# BEKLEYEN PAKETLER — YAMACI'nın uygulama kuyruğu

> 🟢 **GÜNCELLEME 31 Tem ~21:20 (T doğruladı, grep'le):** 0-7 numaralı
> paketlerin TAMAMI + blokeli #40 Böğürdelen + İyon/Podgorica paketleri
> **uygulanmış** (Varna g:2 ✓ · 1484-07-15 ✓ · Kragujevac ✓ · Şarkî Rumeli ✓ ·
> Bulgaristan Prensliği ✓ · Krayova/Soroka ✓ · ek5 mükerreri silindi ✓ ·
> 1798-07-01 ×7 ✓ · Böğürdelen ✓ · Podgorica ✓). **Kuyruk boş.**
> Kalan tek kalem: #19/#20 `macaristan-habsburg/naiplik` — hâlâ renk bekliyor
> (renkler.py grep 0). U1 kalemlerinden Daân maddesi hâlâ yok (grep 0).

**Ölçen:** TAKİPÇİ · **An:** 2026-07-31 15:21 · **Sıra:** en eskisi önce
(K kararı), tek istisna: Kili/Akkirman İLK (K kararı — canlı risk).
Her satır grep'le doğrulandı; "uygulanmadı" = ilgili değer `yerlesimler.js`'te 0.

⚠️ Girdi şu an DONUK olabilir (üretim/`donemler.js` bekleniyor) — YAMACI
başlamadan önce `git status` ile üç üretim damgasına bakmalı (KOORDINASYON §1).

## 🔴 0. İLK SIRA — Kili · Akkirman · İnebahtı tarihleri (YARIM UYGULANMIŞ)

| | |
|---|---|
| Kaynak | OTURUM-11-BALKAN §4 **#13 · #14 · #16** |
| Teslim | `997c462` 31 Tem **02:51** (≥12,5 sa) |
| Durum | 🔴 **madde tarafı `olaylar_ek10.js`'te CANLI, yerleşim tarafı işlenmedi** — harita 1484-08-03 diyor, kronoloji 07-15/08-04 diyor; Değişmez 2 bunu YAKALAMAZ (1 gün fark ±30'dan geçer) |
| İş | Kili `1484-08-03`→`1484-07-15` · Akkirman →`1484-08-04` · İnebahtı `1499-08-28`→`1499-08-26` + `g:2` · Kili/Akkirman `m:"Yaş"`→`m:"Silistre"` (#15) |
| ⚠️ | her tarih kayıtta **İKİ KEZ** geçer (`s:` bitişi + `d:` başı) — `replace(…,1)` tuzağı, CLAUDE §11; sonra Değişmez 1 koşulmalı |
| Engel | yok |

## 1. Varna `g:0` → `g:2` — kuyruğun EN ESKİSİ

Kaynak: OTURUM-11-BALKAN §1 (#3) · Teslim: 30 Tem gece (**≥16 sa**; ilk commit
saatini ölçmedim) · İş: tek satır · Grep: Varna hâlâ `g:0` · Engel: yok.
⚠️ #7 (zoom muafiyeti) AYRI ve "önce ölç" şartlı — Varna satırıyla karıştırılmasın.

## 2. Şumadya — Kragujevac + Çaçak (yeni) & Belgrad + Semendire `v:` (#31+#32)

Teslim: `997c462` 02:51 (≥12,5 sa) · Kayıt metinleri **hazır ve yapıştırılabilir**:
OTURUM-11-BALKAN **§19.1** (v:'li son hâl; §17.1'deki eski hâli DEĞİL).
Değişmez 2: üç kırılmanın üçü de maddeli (1830-11-08 · 1867-04-18 · 1878-07-13) —
yeni madde gerekmiyor. Grep: `Kragujevac` 0, `Sırbistan Prensliği` 0. Engel: yok
(`sirbistan` kimliği tanımlı; `v:` `k:` etiketi serbest metin, renk istemez).

## 3. Şarkî Rumeli — 4 kayıt (#33)

Teslim: 02:51 (≥12,5 sa) · Filibe/Eski Zağra/Tatarpazarcığı `d:`→1878-07-13 +
`v:"Şarkî Rumeli vilâyeti"` 1878-1885 + `s:"bulgaristan"`; İhtiman Sofya zinciri.
Maddeler mevcut (1878 Berlin, 1885 katılma). Grep: `Şarkî Rumeli` 0. Engel: yok.

## 4. Bulgaristan tâbi katmanı — 7 kayıt (#34) + Sofya tarihi (#35)

Teslim: 02:51 (≥12,5 sa) · `s:"bulgaristan"` → `v:"Bulgaristan Prensliği"`
1878-07-13→1908-10-05; Sofya `1877-12-10` Plevne'den kopyalanmış — Ruslar
4 Ocak 1878'de girdi. Grep: `Bulgaristan Prensliği` 0. Engel: yok.

## 5. Eflak kümesi — 10 kayıt (§15) + Soroka·Orhei (§16) + Rimnik (#24)

Teslim: `3bd7b12` 10:16 (**≥5 sa**) · §15 ölçülmüş/kaynaklı 10 kayıt (Fokşani
bilerek yok); §16 nehir-yaslama noktaları; #24 Rimnik'in 1687-1923 Habsburg
hatası (Avusturya yalnız 1718-1739). Grep: `Krayova` 0, `Soroka` 0. Engel: yok.
⚠️ #23 GEÇERSİZ (yerine §15) — eski satırdan uygulama yapılmasın.

## 6. `ek5` 1501-01-01 Akkoyunlu mükerrerinin emekliye ayrılması

Teslim: `d2aeddc` 02:56 (≥12,5 sa) · `olaylar_ek5.js` ~satır 98; `ek7:207`
(1501-07-01) kalıyor — kullanıcının tıkladığı madde 189 günlük ölü bölgede.
Grep: madde hâlâ duruyor. Engel: yok. (Veri değil kronoloji dosyası — U1/K tercihi.)

## 7. Napolyon `isg:` örtüsü — 7 kayıt (16-06)

Teslim: `c7ce502` 09:56 "kesinleşti" (≥5,5 sa) · `isg:[{f:"1798-07-01",
t:"1801-10-09", d:"fransa", kaynak:"kahire"}]` — Kahire·İskenderiye·Dimyat·
Reşîd·Süveyş·Asyut·Sina güneyi; **Asvan ve İbrim HARİÇ** (O14 §16c/§18).
Ayrıca mevcut `1798-07` maddesi `1798-07-01` yapılmalı. Grep: `1798-07-01`
yerleşimlerde 0. Engel: yok (`isg:` şeması canlı — bugün 55 örtü var).

---

## 🚧 BLOKELİ — YAMACI'ya VERİLMEZ

**#19/#20 — 18+13 kayıt `macaristan` → `macaristan-habsburg` / `macaristan-naiplik`.**
Kimlikler `devletler.js`'te VAR ama **`renkler.py`'de YOK** (grep 0) — önce renk
(MOTOR/O16), yoksa 31 kayıt boyasız kalır. Kanije 74,1 yıl taşmaya devam ediyor.

**#40 — Böğürdelen kaydı.** 🔴 SIRALAMA KISITI: E-1…E-4 maddeleriyle **AYNI
ADIMDA** girmeli (metinler YALNIZ §19.5'te — git geçmişinde yok); ayrı girerse
Değişmez 2 ya da 2t kırılır. Fethülislâm **eklenmeyecek** (#47 önerisi).
Šabac ayrı kayıt olarak AÇILMAYACAK (#43 — aynı şehir).

## 📋 U1'e (veri değil, kronoloji)

Daân Antlaşması maddesi (1911-10-09, teslim 14:51) · 16-08 hutbe metni (§F.5) ·
Campo Formio/Preveze maddesi (10-19) · "Aynı tarihte…" mükerrer cümleleri (9 vaka).

## ❔ Doğrulamadıklarım (YAMACI kontrol etsin)

Zebîd 1516 iki-dönem çözümü (2-05) ve Girit beş kaydının `v:` bölmesi bugünkü
uygulama dalgasına girdi mi — grep'ini ben koşmadım, "uygulandı" listesine
almadım; başlamadan `1516-06-20` ve `1830-11-01` yerleşim grep'i yeterli.
