# ---------------------------------------------------------------------
# KOSUYU AYRIK BASLAT - Claude oturumunun COCUGU OLMADAN.
#
# NICIN VAR (6 Eylul 2026, olculmus vaka):
#   Kosu 6 saat 00:04:25'te basladi, 11 SAAT 40 DAKIKA yasadi (~%60-70)
#   ve 11:44:00'te MAKINE YENIDEN BASLATILINCA oldu (Windows olay 1074).
#   Ayrik yapi REBOOT'u kurtarmaz - ama oteki UC olum sebebini kapatir:
#     Claude kapanirsa / Claude guncellenirse / oturum cokerse
#   Olculdu: ayrik baslatilan bir surec, onu baslatan PowerShell OLDUKTEN
#   SONRA yasamaya ve yazmaya devam etti; git ls-remote de calisti
#   (kimlik bilgileri devraliniyor).
#
# AYRIK YAPI VERIYI DONDURMAYI KALDIRMAZ:
#   Kosu surerken arac/uret_petek.py, renkler.py, girdi.py ve data/*.js
#   YINE DONUKTUR. Ayrik olan surec, veri degil.
#
# KULLANIM (proje kokunden):
#   powershell -NoProfile -File arac/kosu_ayrik_baslat.ps1
#
# 🔴 BU DOSYA SAF ASCII OLMALI. PowerShell 5.1 BOM'suz .ps1'i ANSI sanar;
#    Turkce harf, uzun tire ve orta nokta AYRISTIRICIYI COKERTIYOR
#    (ilk surumde olctum: 10 sozdizimi hatasi). Turkce yol da bu yuzden
#    gomulmez - cagiranin dizini kullanilir.
# ---------------------------------------------------------------------
$kok = (Get-Location).Path
$kilit = Join-Path $kok '.petek.kilit'

if (Test-Path $kilit) {
    $k = Get-Content $kilit -Raw
    if ($k -match 'pid=(\d+)') {
        $pid_eski = $matches[1]
        $eski = Get-Process -Id $pid_eski -ErrorAction SilentlyContinue
        if ($eski) {
            Write-Output ("  [X] KOSU ZATEN CALISIYOR - PID " + $pid_eski + ". BASLATILMADI.")
            exit 1
        }
        Write-Output ("  [!] bayat kilit (PID " + $pid_eski + " olu) - siliniyor")
        Remove-Item $kilit -Force
    }
}

$damga = Get-Date -Format 'yyyyMMdd-HHmmss'
$log = Join-Path $kok ("kosu7-" + $damga + ".log")
$err = $log -replace '\.log$', '.err'

$p = Start-Process -FilePath 'py' -ArgumentList @('arac/kos_ve_yayinla.py') -WorkingDirectory $kok -WindowStyle Hidden -PassThru -RedirectStandardOutput $log -RedirectStandardError $err

Write-Output "  KOSU AYRIK BASLADI"
Write-Output ("  firlatici PID : " + $p.Id + "   (Claude'dan BAGIMSIZ)")
Write-Output ("  log           : " + (Split-Path $log -Leaf))
Write-Output ("  baslangic     : " + (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'))
Write-Output ""
Write-Output "  IZLEME (kilit dosyasi OLCUM DEGILDIR - surece sor):"
Write-Output "    Get-Process -Id PID / CPU deltasi / bellek"
Write-Output "    data/donemler.js damgasi - motor onu EN SONDA yazar"
