# ÖNGÖRÜ — K2 devam görevi (sınava kirli-ağaç kolu)

🔴 **ÖLÇÜMDEN ÖNCE yazıldı ve commitlendi.** Yeni kol henüz YAZILMADI, hiç koşturulmadı.
Elimde K1 ölçümlerinden bildiklerim var (dört kol: temiz=0 · `tahta.json` kirli=1 ·
sahnelenmiş=1 · `TAHTA.md` kirli=1) — **ama o dört kol `tahta.py yaz` ile kirletilmişti,
yani her seferinde `TAHTA.md` DE kirliydi.** Yeni sınavda her dosyayı tek tek
kirleteceğim; bu, daha önce ÖLÇMEDİĞİM bir ayrımdır.

## SINAV ANI ve EVREN
- **An:** 2026-10-06, `C:/atlas-tahtaweb` (detached `20c5cea7`).
- **Evren:** `denetim/ARAC-TAHTA-KESME-SINAV-1004.py`ye eklenecek bağımsız bölüm; her kol
  KENDİ geçici deposunu ve KENDİ portunu kurar (mevcut K1–K10'un paylaşılan deposuna
  dokunmaz). Alet `arac/tahta_kesme.py` — ① yamasız (dalın hâli) ② `TAHTA-WEB-DENETIM-1006-kesme-kirli-yol.diff` yamalı.
- **Ölçüt:** sınavın çıkış kodu + yeni kolun kaç iddiası HATA veriyor.

## ÖNGÖRÜLER

| # | Öngörü |
|---|---|
| P1 | Yeni kol **8–12 iddia** taşır (4 kol × çıkış kodu + HEAD/durum bütünlüğü) |
| P2 | **Yamasız** alette sınav ÖTER: çıkış **1** |
| P3 | Yamasız alette HATA veren iddia sayısı **3–5** |
| P4 | Yamasız alette `tahta.json` yalnız ÇALIŞMA AĞACINDA kirliyken kes **1** verir ve **yarım hâl doğar** (HEAD dosyayı kaybeder) |
| P5 | Yamasız alette `TAHTA.md` kirli + `tahta.json` temiz kolunda da **yarım hâl doğar** (atomik iptal) |
| P6 | 🔴 **Yamasız alette SAHNELENMİŞ kol (index==çalışma ağacı) çıkış 0 VERİR** — yani git `rm --cached`i REDDETMEZ, çünkü sahnelenen içerik DOSYAYLA aynıdır; reddetme şartı "hem dosyadan hem HEAD'den farklı"dır. Bu, K1'de ÖLÇMEDİĞİM ayrım: orada E kolu `TAHTA.md` yüzünden düşmüştü. Tutarsa, sahnelenmiş tahta değişikliği kesmede **SESSİZCE KAYBOLUR** (commit HEAD ağacından kurulur) ⇒ ayrı bir kusur olur |
| P7 | **Yamalı** alette dört kolun dördü de geçer: temiz → 0 · üç kirli kol → 1 ve HEAD kıpırdamaz; sınav çıkış **0** |
| P8 | Mevcut K1–K10'un 21 iddiası iki koşuda da bozulmaz (yeni bölüm onların deposuna dokunmaz) |

## YANLIŞLANMA ÖLÇÜTÜ
- P2 yanlıştır ⇔ yamasız alette sınav 0 verirse (o zaman kol yarım hâli YAKALAMIYOR demektir, kolu düzeltmem gerekir).
- P6 yanlıştır ⇔ sahnelenmiş kolda yamasız alet 1 verirse (o zaman sessiz kayıp riski YOK).
- P7 yanlıştır ⇔ yamalı alette tek bir iddia bile HATA verirse.
- P8 yanlıştır ⇔ eski 21 iddiadan biri bozulursa.

— TAHTA-WEB-DENETIM-1006
