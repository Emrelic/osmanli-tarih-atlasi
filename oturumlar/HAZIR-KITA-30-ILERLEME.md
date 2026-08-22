<!-- DURUM: IS-ISTIYORUM | 2026-08-22 13:15 | dizin duzeltildi · M-1003 ile KOORDINATOR'den is istedim · is SECMEDIM -->

# OPUS HAZIR KITA 30 — ilerleme defteri

## Kimlik
- **Ad (tahtada):** `OPUS HAZIR KITA 30`
- **Dinlenen adlar (bekçi):** `OPUS HAZIR KITA 30` · `HAZIR KITA 30` · `KITA 30`
- **Model:** Opus 5
- ⚠️ **Çalışma dizini `C:\Users\emrem\OneDrive\Desktop\ClaudEmre`** — atlas dizini
  DEĞİL. Atlas dosyalarına her komutta mutlak yolla + `cd` ile erişiyorum;
  ölçüldü ve çalışıyor (`isal.py --liste`, `tahta.py oku`, `tahta.py yaz`).
  Risk: göreli yol varsayan alet / yanlış depoya `git`. Teslimde
  `git rev-parse --show-toplevel` çıktısı yapıştırılacak.

## 2026-08-20 00:2x — açılış
1. `py arac/isal.py --liste` → **15 görevin 15'i ALINMIŞ**, boş görev yok.
   İş ALMADIM (yalnız `--liste`, sahiplik ilanı yazılmadı).
2. Nöbetçi kuruldu — Monitor aracıyla, kabuk arka planına değil:
   `py arac/tahta_bekci.py --kim "OPUS HAZIR KITA 30,HAZIR KITA 30,KITA 30" --ara 45`
   İlk satır: *"nöbette · 4 ad dinleniyor · 813 mesaj görüldü"*.
3. **M-0814** yazıldı: `OPUS HAZIR KITA 30 → KOORDINATOR`, cins RAPOR,
   cevap bekleniyor, vade 2026-08-20 02:00.
   ⚠️ `push` başarısız (kod 128, `Could not resolve host: github.com` — internet yok);
   **commit ATILDI**, mesaj tahtada duruyor. Aynı makinedeki koordinatör görür.
4. `py arac/tahta.py oku --kim "OPUS HAZIR KITA 30"` koşuldu — bana adresli
   mesaj YOK; 170 HERKES mesajı okundu işaretlendi.

## 2026-08-22 13:15 — DİZİN DÜZELTİLDİ + BİR ÖLÇÜM KUSURUM

**① Dizin.** Oturum `ClaudEmre` dizininde açılmıştı; Emre bugün
`change_directory` ile `TARİH COĞRAFYA SİTESİ`ne çevirdi. Ölçümlerimi
mutlak yolla yapmıştım, rakamlar geçerli — ama `git status`/göreli yol
öteki projeyi gösteriyordu.

**② 🔴 M-0828 geri çekildi — BAYAT KOPYA ÜSTÜNDE ÖLÇTÜM.**
20 Ağu 02:21'de HERKES'e *"masada koordinatör yok"* yazdım.
Ölçtüğüm `tahta.json` **824 mesaptı; gerçek tahta 1002.** 178 mesaj eksik
bir kopyadan konuştum. İddia o pencere için (19 Ağu → 20 Ağu 02:21)
doğruydu ama koordinatör **20 Ağu 10:44'te (M-0847) döndü** ve o günden
beri 17 mesaj yazdı. Yani yanlış değil, **bayattı** — üstelik tam da
başkalarını bayat liste diye uyardığım mesajda.
⇒ **DERS: ölçümden önce `pull`. Çekmeden yapılan ölçüm ölçüm değil, hatıradır.**
(Aynı hastalığın öteki yüzü `CLAUDE.md §1.5`.)

**③ Adres.** M-1002'yi `OSMANGAZI`ye yazdım; tahtadaki imza `KOORDINATOR`.
`tahta.py` tam eşitlik arar ⇒ M-1002 muhtemelen ulaşmadı.
Yerine **M-1003 → KOORDINATOR** yazıldı (push ✓).

## Durum
**BOŞTAYIM — kendi işimi SEÇMİYORUM** (M-0020: *"Boştaysan kendi iş seçme"*).
Koordinatörün adımla vereceği şartnameyi bekliyorum. Şartname gelince:
baştan sona okunacak, içindeki her sayı bağımsız doğrulanacak, teslim
"bitirdim" ile değil **kabul kapısının çıktısıyla** yapılacak.
