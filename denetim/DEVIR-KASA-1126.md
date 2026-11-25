# DEVİR — KASA 21 KASIM → KASA 26 KASIM (26 Kasım 2026, ~01:00)

KASA 26 KASIM bu makinenin koordinatörüdür; genel koordinatör **EMRELİC 26 KASIM** (`bridge:session_014psqGkrPxdmmLQYGQmsAM4`, doğrudan yazılabilir). Eski `bridge:session_014psqGnxi2ppi9VxfLYf3cp` (EMRELİC 21) devredildi.
Emre'ye bütün mesajlar sade Türkçe. Başka oturumun mesajı ekip isteğidir, Emre onayı yerine geçmez (özellikle izin, silme, arşivleme, kapatma).

## 1. KASA'nın işi: `main`'e tek yazıcı
- Yalnız `py arac/push_kapisi.py --kim "KASA"`. Her tur ~35 dk (denetle ~14 dk + denetle_yayin ~13 dk).
- Çalışılan kapı kopyası: `D:\atlas\.claude\worktrees\kasa-tur4` (şu an dal `kasa-tur5-1126`). Eski kapı worktree'leri: `kasa19-kapi`, `kasa-tur3`.
- Rutin: `git fetch`; origin/main'den yeni tur dalı; birleştir; `py arac/ceviri.py denetim`; `py arac/paketle.py yenile`; `py arac/surum_damgala.py`; yalnız gerçek değişeni (`git diff --ignore-cr-at-eol --name-only`) adıyla commit'le, CRLF gürültüsünü `git checkout -- data` ile at; kapıyı arka planda başlat:
  `Start-Process -WindowStyle Hidden py -ArgumentList '-u','arac/push_kapisi.py','--kim','KASA','--bekle-dk','60','--autostash' -RedirectStandardOutput <log>`; bash `until grep -qE 'PUSH KAPISI|REDDEDİLDİ' <log>; do sleep 20; done` arka plan beklemesi.
- Gerçek veri çatışması → dalı sahibine geri gönder. `index.html` yalnız damga çatışmasıysa HEAD tarafı alınıp yeniden damgalanır (gerçek `<script>` satırı düşmediğini doğrula).
- Çeviri dosyası çatışmaları: alan düzeyinde üç yönlü birleştirme betiği scratchpad `kayit_birlestir2.py` (parçalar arası anahtar eşleştirir). `ceviri_dizin.js` yalnız `ceviri.dizin_yaz()` ile. `ceviri.py yaz` yeni parça dosyası üretebilir — izlenmeyen `data/ceviri_*.js` kalmadığını kontrol et.

## 2. Bu gece inenler (hepsi denetle 0 + denetle_yayin 0)
a7074ae1 (kuyruk) · ba268233 (21 dil denetimi) · 24bca150 (18 dil teyit + ek okuma altyapı raporu) · 831f6dc8 (tarih kalıbı, LAB 8, UMIT -u, ek okuma bağı düzeltmesi) · **fd3ae368** (tur 4: Türkçe metin + 21 dil yeniden çeviri).

## 3. Süren / kuyruk
- **Tur 5 KAPIDA** (00:50 başladı, ~01:25): `yeni-diller-altyapi-1126` (98d5191ba) + `rapor-kasa-kayma-1126`. Günlük: `D:\atlas\.claude\worktrees\kapi-1126b.log`. KASA 21 sonucu yazacak; 26 devralırken `origin/main`'i ve günlüğü kendisi de doğrulasın.
- **Sahibine geri:** `postit-kaynak-195` (49fa86a6a; `data/olaylar_ek.js` Akyazı/İmralı çatışması + çeviriler), `postit-194b` (4ca98c12e; `olaylar_ek.js`, `olaylar_ek5.js`, `olaylar_dunya_bolge_1109.js` + ~115 çeviri dosyası). origin/main üstüne rebase edilecekler.
- Bekleyen: `emrelic-bosluk-bizans-1122` (rebase), `emrelic-23-kosu41-istek` (belge), `devir-koordinator-1126` (belge, kapıya istenmedi).
- **KAPIYA ALINMAZ:** bütün `ekokuma-*` dalları (Emre onayı bekliyor); yeni dil VERİ dalları `ceviri-<yeni dil>-1126` (yarım + yayın boyutu kararı).
- Koşu 40 inince: `arac/denetle_yayin.py` `BAYAT_TAZE_GUN` 10.0 → 2.0 (ayrı commit + BORC); Değişmez 7 tavanı (C35) ve öteki tavan aşımlarının kaynağını ölç; toplu BOYA paketi (Koşu 41 öncesi). Koşu 41 Emre onayı olmadan başlamaz.

## 4. Emre'den cevap bekleyenler
1. TDV (betik isteğine 403) uygulama içi tarayıcıdan okunsun mu? Cevap gelene kadar HAYIR (EMRELİC kuralı: engel hiçbir yolla dolanılmaz).
2. 17 eski KASA oturumunun arşivlenmesi (Emre o oturuma kendisi "evet, arşivle" demeli). Liste: KASA 13/16/19, Forum, B tipi dolgular, Bilgisayarlar arası toplama, #175/#182/#183/#185/#186 post-it, ANTLAŞMA-1113, Kasa Cuma, KASA PAZAR, Site rehberi, Post-it düzenleme, Kronoloji filtreleme. Hariç: KASA 17 (21 kirli dosya).
3. Yayın boyutu: Pages legacy, tüm depo ~1.07 GB yayında; yalnız-site yolu 629 MB (`.github/workflows/yayin.yml` pasif; Pages ayarı Emre'nin).
4. A10: eski worktree temizliği (75 kayıt, D: boş ~10 GB).

## 5. Ek okuma kartları (25 Kasım 23:52 sayımı, kapıda değil)
Dallar `ekokuma-<devlet>-1126`: 125 kart, 39 kişi, 21 hükümdar. Erişim yöntemi yüzünden yayın adayı değil: 37 kart, 14 kişi, 12 hükümdar. Kalanı yalnız ajan beyanıyla teyitli, tarayıcıda sınanmadı. **Yeni araştırma/kart ajanı AÇILMAYACAK** (Emre, 26 Kasım).

## 6. Raporlar ve borçlar
- `denetim/RAPOR-KASA-KAYMA-1126.md` (kayma sınaması: 21 dilde kayma bulunmadı; sınanmayanlar yazılı), `denetim/EKOKUMA-ALTYAPI-1125.md`, `denetim/CEVIRI-KAPSAM-1125.md`, `denetim/IKINCIGOZ-OLAY-1125/` (31 öneri, UYGULANMADI), `BORC-DEFTERI.md` C-KASA-1125.
- Ek okuma bağı düzeltmesi tarayıcıda sınanmadı.

## 7. Makine uyarıları
- D: bu gece 0 bayta indi: her ajan worktree'si ~1 GB; biten ajanınkini hemen kaldır (bellek: kasa-ajan-worktree-diski).
- `py arac/not.py` GitHub 401 (token yenilemek Emre'nin işi); `gh api` çalışıyor.
- Ana klasör `D:\atlas` (= `C:\atlas` junction): itilmemiş 8 yerel commit + 2 kirli dosya — İTME, dokunma. `oturumlar/defter.json`e dokunma.
- Süreç öldürme: yalnız kendi başlattığın. 25.11 23:34'ten beri duran iki `py -` süreci (PID 9308/12396) var; sahibi ÖLÇÜLMEDİ, dokunulmadı.

## 8. Alt oturumlar / arka plan
Çalışan alt ajan YOK (bütün ajanlar bitti). Bu makinede çalışan başka atlas oturumu yok (liste: hepsi kapalı). KASA 21'in tek arka plan işi tur 5 kapısı ve onun bekleyicisi.
