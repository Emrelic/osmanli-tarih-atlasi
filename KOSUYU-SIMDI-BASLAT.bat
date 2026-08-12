@echo off
chcp 65001 >nul
title ATLAS — KOSU VE YAYIN ZINCIRI
cd /d "%~dp0"

echo ==============================================================
echo   ATLAS  ·  KOSU VE YAYIN ZINCIRI  ·  SIMDI BASLAT
echo ==============================================================
echo.
echo   uretim (~75 dk) -^> devirler -^> renk -^> ALTI DEGISMEZ
echo   -^> YAYIN KAPISI -^> surum damgasi -^> commit -^> PUSH -^> 9 bip
echo.
echo   TOKEN HARCAMAZ. Claude'a ihtiyac duymaz.
echo   Kapi kapaliysa (denetim ya da yayin kapisi ihlal verirse)
echo   zincir DURUR ve YAYINLAMAZ.
echo.
echo   Bu pencereyi KAPATMAYIN — zincir burada kosuyor.
echo   Bitince 9 kere bip calacak.
echo ==============================================================
echo.

set /p onay="Baslatayim mi? (E/H): "
if /i not "%onay%"=="E" (
  echo Iptal edildi.
  timeout /t 3 >nul
  exit /b 0
)

echo.
echo Basladi: %date% %time%
echo.
py arac\kos_ve_yayinla.py
set KOD=%errorlevel%

echo.
echo ==============================================================
if "%KOD%"=="0" (
  echo   TAMAM — yayinlandi. GitHub Pages ~40-60 sn sonra sunar.
) else if "%KOD%"=="2" (
  echo   BASLATILMADI — zaten bir zincir kosuyor.
  echo   Ayni anda iki uretim data/ dosyalarini bozar.
) else (
  echo   DURDU — kod %KOD%. YAYIN YAPILMADI.
  echo   Sebebi: kosu_zincir.log
  echo   Bu bir kusur degil bir KAPI: yanlis yayin,
  echo   yayinlanmamis duzeltmeden kat kat pahalidir.
)
echo ==============================================================
echo.
echo Log:  kosu_zincir.log
pause
