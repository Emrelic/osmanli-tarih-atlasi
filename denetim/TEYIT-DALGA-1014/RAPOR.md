# TEYIT-DALGA-1014 — teyit kampanyası birinci + ikinci dalga uygulaması

Emre kuralı (14 Ekim 2026): güvensiz kaynaklı kronoloji maddesi güvenilir kaynakla teyit edilir,
o kaynağın damgasıyla damgalanır; teyit edilemezse sitede gösterilmez.

## Girdi
16 dilim (D1-01…08, D2-01…08), her biri bir alt ajanın hüküm tablosu (GOREV.md, depoya yazmadan).
Hüküm toplamı: teyit 626 · teyit-yil 288 · tarih-celiski 135 · teyit-edilemedi 197.

## Uygulanan (laptop Emrelic, worktree agent-a789…, taban b092ded1)
- `teyit` (gün düzeyi) 624 satır → `py arac/teyit_uygula.py gun.tsv` → 612 işlendi
  (280 güvenli · 332 ikincil), 12 eşlenemedi (11'i künye kaydı — uygulayıcı yalnız kronoloji
  maddesini kapsar; 1'i KRONOLOJI_ISPANYA[119]). Ayrıntı: `gun/uygulama.tsv`.
- `teyit-yil` 287 satır → `--yil-karari` (Emre kararı ①) → 121 YYYY-01-01'e indi · 23 sınıra
  bağlı, tarih kaldı + "[yalnız yıl teyitli; gün teyitsiz]" · 133 zaten yıl düzeyinde ·
  10 eşlenemedi (hepsi künye kaydı). Tarihi inen maddeye t+b ile bağlı 21 kayıt (yer_yama_*,
  etiket_yama) birlikte güncellendi. Ayrıntı: `yil/uygulama.tsv`.
- **HARİÇ (uygulanmadı, teyit-edilemedi sayılır):** D1-08 Kaheti 1492 ve Lenkoran 1813
  (EB1911 Wikisource'tan okunup basılı künyeyle yazılmış — Wikisource-EB1911 = C), D2-02
  yufiri#4 0915 (Bosworth erenow kopyasından okunmuş — erenow = C).
- `tarih-celiski` ve `teyit-edilemedi` satırlarına dokunulmadı → UMIT devri.
- `data/kaynak_guven.js`: 13 yeni kaynak — A: BNF-ARCHIVES, HLB, ZAKONY, ORBILU ·
  B: ACADEMIE-SCIENCES, ACADEMIE-FRANCAISE, OBSPM, RJB-CSIC, GEDANOPEDIA, ETHW, ESBE, RISIERA,
  HH-GESCH. (BAZHUM zaten HAKEMLI-DERGI'de, hdg.de zaten MUZE'de.)

## Ölçüm (aynı worktree)
- Güvensiz (sitede gizli) madde: 2.445 → **1.557**.
- Damga (Python): güvenli 11.615 · ikincil 5.503 · tanınmayan 2.854 · güvensiz 1.557 ·
  bulunamadı 1.186 · boş 1.981 (evren 24.696). Python↔JS eşitlik sınavı FARK 0.
- `denetle.py` çıkış 0 · `odak_olc.py` çıkış 0 · paketle 30 paket · sürüm r12344.

## Bulamadığım
- Künye kayıtlarının (`devletler.js` künye `kaynak`ı) teyidi uygulayıcıda yok — 21 satır bekliyor.
