# UMIT-W1-APPJS-1006 — js/app.js üç kalem (E1 · P2 · O4)

Görevi veren: UMIT İRTİBAT · 5 Ekim 2026 · temel `origin/main` = `85c7e2dd00d486a89d4674bbdd36c2484dae5efd`
Çalışma yeri: `C:\atlas-w1` (detached worktree). Düzenlemeler geri alındı, `git status` boş.
Hiçbir yama UYGULANMADI, commit YOK.

## 0 · Öngörü (ölçümden önce mühürlendi, scratchpad `ongoru.txt`, 20:54)
- P2: mükerrer padişah id'si 3 (murad2 · mehmed2 · mustafa1) · bunlara düşen vefat_id **3**.
- E1: 🔴 **mühürlenemedi.** Eski diff'in `--check`ini koşarken ölçüm kendiliğinden geldi
  (öngörü yazılmadan önce). Dürüst kayıt: bu kalemde öngörü YOK.

## 1 · E1 — `ARAYUZ-BANT-TAM-1006.diff`

### Ölçüm: eski diff NEDEN reddediliyordu — sebep app.js değil, SATIR SONU
| | indeks (`--cached`) fwd · rev | worktree fwd · rev |
|---|---|---|
| `ARAYUZ-BANT-TAM-1005.diff` (depodaki, **156 CR**) | **1 · 1** | 0 · 1 |
| aynı diff, CR silinmiş | **0 · 1** | — |

- `1005.diff` depoya **CRLF** olarak girmiş (blob'da 156 CR). `*.diff -text` (6d9a20ea,
  1 Ekim) yamayı ÇEVİRMEZ, baytı olduğu gibi saklar — bu yüzden c52bb5ec (5 Ekim)
  worktree'den CRLF yazılmış yamayı CRLF olarak depoladı. `-text` CR'nin checkout'ta
  EKLENMESİNİ önler, YAZARKEN girmesini değil. İndeks app.js LF ⇒ indekse karşı
  `--check` 1 verir. Tasnifin "ileri 1 · geri 1" ölçümü DOĞRU; çıkarımı ("app.js
  değişti, bağlam kaydı") **yanlış** (tuzak ①: ölçüm doğru, atıf yanlış).
- Bağlam: **5 hunk'ın 5'inde bağlam DEĞİŞMEMİŞ.** Hunk 4-5 yalnız **+38 satır kayıyor** —
  sebebi c52bb5ec'nin `maddeAc` D dalı (aynı commit, diff ondan önce üretilmiş).
  Koşu damgası (b76ef8b3) bant bölgesine dokunmuyor.

### Her hunk bugünkü kodda okundu
1. `UFUK_TABAN_KATMANLAR` + `ufukTabanDegistir` (ufukGuncelle önü) — 11 katman adının
   11'i `addLayer`da birer kez var. Bu katmanlara görünürlük yazan başka yer: yalnız
   `katmanSeciciKur.uygula` (kova döngüsü) ⇒ hunk 5 o yüzden gerekli, kapsıyor.
   `devlet-odak-vurgu` listede yok — işaret katmanı, bilinçli dışarıda (değiştirmedim).
2. `b.gun !== ufukGun` — `ufukGuncelle` gövdesi 1005'tekiyle birebir.
3. Ⓑ addLayer yorumu — `beforeId: "devlet-dolgu"` çıpası yerinde.
4. `SIYASI_KIP` — yapı aynı; `siyasiKipUygula` sözlüğü gezerek `setPaintProperty` yapıyor,
   ifade değeri geçer.
5. `katmanSeciciKur` sonu — `siniflanmamis` uyarısından sonra; `ufukAcik`/`ufukGun`
   üst kapsamda.

### Tek içerik değişikliği (1005'e göre)
Hunk 4 yorumu "MapLibre 4.7" diyordu; `index.html` **maplibre-gl@5.24.0** yüklüyor ⇒
yorum düzeltildi. Kod satırı değişmedi. Diff 159 satır · 5 hunk · 0 CR.

## 2 · P2 — `vefatKisiBul`

| ölçüm | sayı |
|---|---|
| PADISAHLAR kayıt | 41 |
| mükerrer id | **3** (murad2×2 · mehmed2×2 · mustafa1×2) |
| KISILER mükerrer id · PADISAHLAR∩KISILER | 0 · 0 |
| vefat_id taşıyan madde (index.html'in 70 data betiği, vm) | **27** |
| mükerrer padişah id'sine düşen vefat_id | **2** (öngörü 3 — mustafa1'e vefat_id yok) |

| madde | yamasız | yamalı |
|---|---|---|
| OLAYLAR 1481-05 `mehmed2` | II. Mehmed (1. saltanatı) 1444-08..1446-09 | **II. Mehmed (Fatih)** 1451-02..1481-05 |
| OLAYLAR_EK5 1451-02-18 `murad2` | II. Murad 1421-06..1444-08 | **II. Murad (2. saltanatı)** 1446-09..1451-02 |

Yama ile seçimi değişen: **2 / 27** (öteki 25 değişmedi).
Kural: aynı id'nin kayıtlarından **son saltanat** (`gunIdx(from)` en büyük). "Ölüm gününü
kapsayan" seçilmedi: `to` ay hassasiyetli ("1481-05" = 1 Mayıs < ölüm 3 Mayıs) ve
I. Mustafa tahttan indirilip öldü (hiçbir saltanat ölümü kapsamaz) — son saltanat iki
durumda da tek ve doğru cevap. id'ler yeniden adlandırılmadı. Portre `id` ile okunduğu
için (`assets/portreler/<id>.jpg`) portre değişmez; değişen künye satırları
(ad · tahta · saltanat_yil · övgü/yergi metni) — iki kaydın alanları ayrı.
⚠️ CLAUDE.md §1.5 "28 vefat_id" diyor, ölçüm 27: `acilis_siluet.js` vm'de `document`
istediği için koşmadı (vefat_id taşımıyor); farkın kaynağı **bulunamadı**.

## 3 · O4 — `maddeAc`
`maddeOdakKutusu(m)` → `maddeOdakKutusu(kopyaMaddesi(d, m))`, tek satır + yorum.
`maddeOdakKutusu` okuduğu alanlar: `odak_kutu_kaynak · odak_yer · odak_kimlik · t · gi` —
`_devletMaddesi`i okumuyor ⇒ davranış farkı yalnız `gi`. Değişen dal yalnız A
(`kapsam_genis`); C dalı (kıpırdamaz) açılmadı. Osmanlı `d` için `kopyaMaddesi` `m`'yi
aynen döndürür.
129 gizli vakanın yeniden sayımı: **ölçülmedi** (bağlama IIFE'si gerekir; ham
`DEVLETLER[].kronoloji`de odak_kimlik 0 görünür — sayı ODAK-OLC-KOR-NOKTA-1005 §2'den).

## 4 · Sınav
| # | sınav | sonuç |
|---|---|---|
| 1 | ARAYUZ-1006 tek: `--cached --check` fwd · rev | 0 · 1 (worktree da 0 · 1) |
| 1 | APP-VEFAT-ODAK tek | 0 · 1 (worktree da 0 · 1) |
| 2 | önce APP-VEFAT-ODAK uygulandı → ARAYUZ `--check` | 0 (indeks + worktree) |
| 2 | önce ARAYUZ uygulandı → APP-VEFAT-ODAK `--check` | 0 (indeks + worktree) |
| 2 | iki sıranın son app.js'i | **birebir aynı** (cmp) |
| 3 | MOTOR-BANT-TAM-1005 tek | 0 · 1 |
| 3 | ARAYUZ sonra MOTOR · MOTOR sonra ARAYUZ | 0 · 0 |
| 4 | `node --check` (her diff tek + birleşik iki sıra) | OK |
| 5 | P2 ölçüm | yukarıda |
| 6 | tarayıcıda gözlem (launch.json "atlas") | **yapılmadı** |

## 5 · Öneri / istek
1. `denetim/ARAYUZ-BANT-TAM-1005.diff` depoda CRLF duruyor — 1006 onun yerine geçer;
   1005 silinsin ya da LF'e çevrilsin. `-text` CRLF yazılmış yamayı yakalamaz: yama
   üretenler worktree'den değil indeksten üretmeli (6d9a20ea'nın dersi) ya da kapıya
   "`.diff`te CR = 0" sınavı eklenmeli. Öteki `.diff`ler taranmadı.
2. Tasnifin E1 satırındaki gerekçe ("bağlam kaydı") düzeltilmeli: sebep CRLF.
3. P2/O4'ün görünür etkisi tarayıcıda gözlenmedi — koordinatör isterse ayrı kalem.
