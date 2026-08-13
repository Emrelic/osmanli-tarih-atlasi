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
REM ============================================================
cd /d "C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
py -u arac\kos_ve_yayinla.py > kosu_ayrik.log 2>&1
exit /b %ERRORLEVEL%
