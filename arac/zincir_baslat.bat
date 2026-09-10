@echo off
REM ============================================================
REM  ATLAS ZINCIRI - AYRIK BASLATICI
REM  Niçin var: Bash aracinin run_in_background'i sureci OTURUMUN
REM  COCUGU yapar. Oturum kapanirsa/yeniden baslarsa surec OLUR.
REM  13 Agustos 2026'da bu olculdu: kosu 17:48'de basladi, 51 dakika
REM  sonra python sureci YOKTU, log 9 satirda kalmisti, kilit duruyordu.
REM  Task Scheduler ile calistirildiginda surec Scheduler'a aittir;
REM  Claude oturumu kapansa da SURER.
REM  Kullanim:  schtasks /run /tn "ATLAS-ZINCIR"
REM
REM  !! ONCE BUNU KOSTUR — 10 Eylul 2026'da olculdu:
REM        py denetim\ARAC-ZINCIR-GOREV-DENETIM-0910.py
REM  Gorev "State: Ready" diyordu ve KOSMUYORDU. Bosluklu yol
REM  tirnaklanmadan kaydedilmis, Windows onu ilk boslukta bolmustu:
REM        Execute    ...\Desktop\TARIH            <- YOL KESILMIS
REM        Arguments  COGRAFYA SITESI\arac\...     <- gerisi ARGUMAN
REM        LastTaskResult 0x80070002 "dosya bulunamadi"
REM  13 Agustos'tan beri boyleydi ve kimse bakmadi. `schtasks /run`
REM  0 doner (gorev BASLATILDI demek, CALISTI demek DEGIL) — yani
REM  koordinator "kosu basladi" diye rapor eder, sabah ne log olur
REM  ne cikti. Denetim betigi `--onar` ile duzeltir.
REM ============================================================
cd /d "C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
py -u arac\kos_ve_yayinla.py > kosu_ayrik.log 2>&1
exit /b %ERRORLEVEL%
