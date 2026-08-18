@echo off
REM ═══════════════════════════════════════════════════════════════════
REM  KOŞU + YAYIN — ELLE BAŞLATMA DÜĞMESİ
REM  Emre, 18 Ağustos 2026: "daha önce de koşabilme butonu olacak,
REM  eğer istersem daha öncede koşturabilmeliyim."
REM
REM  ÇİFT TIKLA — hepsi bu. Claude gerekmez.
REM  Zincir: üretim → devirler → ALTI DEĞİŞMEZ → renk → damga →
REM          yayın kapısı → commit → push → 9 bip
REM  Değişmezler düşerse commit ATILMAZ, push YAPILMAZ.
REM
REM  Günlük: kosu_otomatik.log
REM  Aynı iş 24:00'te kendiliğinden de koşar (zamanlanmış görev
REM  "AtlasKosu"). Bu düğmeyle erken koşarsan, gece koşusu aynı işi
REM  ikinci kez yapar — istemiyorsan görevi devre dışı bırak:
REM      schtasks /Change /TN AtlasKosu /DISABLE
REM ═══════════════════════════════════════════════════════════════════
cd /d "%~dp0"
echo.
echo   ATLAS KOSU + YAYIN
echo   Bu islem ~3 saat surer. Pencereyi KAPATMA.
echo   Bitince 9 kere bip calacak.
echo.
py arac\kosu_yayin.py
echo.
echo   Bitti. Cikis kodu: %ERRORLEVEL%
echo   Gunluk: kosu_otomatik.log
pause
