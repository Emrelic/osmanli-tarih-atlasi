# TEYIT-DALGA-1014 — teyit kampanyası birinci + ikinci dalga uygulaması

Emre kuralı (14 Ekim 2026): güvensiz kaynaklı kronoloji maddesi güvenilir kaynakla teyit edilir,
o kaynağın damgasıyla damgalanır; teyit edilemezse sitede gösterilmez.

## Girdi
16 dilim (D1-01…08, D2-01…08), her biri bir alt ajanın hüküm tablosu (GOREV.md, depoya yazmadan).
Hüküm toplamı: teyit 626 · teyit-yil 288 · tarih-celiski 124 · teyit-edilemedi 176 (+3 HARİÇ).

## Uygulanan (laptop Emrelic, worktree agent-a789…, taban 832bae77)
İlk deneme (taban b092ded1) push kapısında `olaylar_p0056/p0065` çatışmasına düştü (KUTU-K1-1014);
origin tarafı alındı, uygulama yeni tabanda baştan koşturuldu.
- `teyit` (gün düzeyi) 624 satır → `py arac/teyit_uygula.py gun.tsv` → 612 işlendi
  (280 güvenli · 332 ikincil), 12 eşlenemedi (11'i künye kaydı — uygulayıcı yalnız kronoloji
  maddesini kapsar; 1'i KRONOLOJI_ISPANYA[119]). Ayrıntı: `gun/uygulama.tsv`.
- `teyit-yil` 287 satır → `--yil-karari` (Emre kararı ①) → 121 YYYY-01-01'e indi · 21 sınıra
  bağlı, tarih kaldı + "[yalnız yıl teyitli; gün teyitsiz]" · 133 zaten yıl düzeyinde ·
  12 eşlenemedi (10 künye kaydı + OLAYLAR_P0065[0]/[2]: KARARLAR-1014 m.28 Jülyen kararıyla
  tarihi 1770-08-01 / 1771-06-18 oldu — o karar esas, dokunulmadı). Tarihi inen maddeye t+b
  ile bağlı 21 kayıt (yer_yama_*, etiket_yama) birlikte güncellendi. Ayrıntı: `yil/uygulama.tsv`.
- **HARİÇ (uygulanmadı, teyit-edilemedi sayılır):** D1-08 Kaheti 1492 ve Lenkoran 1813
  (EB1911 Wikisource'tan okunup basılı künyeyle yazılmış — Wikisource-EB1911 = C), D2-02
  yufiri#4 0915 (Bosworth erenow kopyasından okunmuş — erenow = C).
- `tarih-celiski` ve `teyit-edilemedi` satırlarına dokunulmadı → `denetim/TEYIT-KAMPANYA-DEVIR-1014/`.
- `data/kaynak_guven.js`: 13 yeni kaynak — A: BNF-ARCHIVES, HLB, ZAKONY, ORBILU ·
  B: ACADEMIE-SCIENCES, ACADEMIE-FRANCAISE, OBSPM, RJB-CSIC, GEDANOPEDIA, ETHW, ESBE, RISIERA,
  HH-GESCH. (BAZHUM zaten HAKEMLI-DERGI'de, hdg.de zaten MUZE'de.)

## Ölçüm (aynı worktree, taban 832bae77)
- Güvensiz (sitede gizli) madde: 2.445 → **1.559**.
- Damga (Python): güvenli 11.639 · ikincil 5.515 · tanınmayan 2.859 · güvensiz 1.559 ·
  bulunamadı 1.187 · boş 1.981. Python↔JS eşitlik sınavı FARK 0.
- `denetle.py` çıkış 0 · `odak_olc.py` çıkış 0 · paketle 30 paket · sürüm r12366.

## Bulamadığım
- Künye kayıtlarının (`devletler.js` künye `kaynak`ı) teyidi uygulayıcıda yok — 21 satır bekliyor.
