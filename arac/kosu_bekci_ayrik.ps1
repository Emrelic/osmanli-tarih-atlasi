# ---------------------------------------------------------------------
# AYRIK KOSU BEKCISI - bitisi GERCEKLESMIS BIR OLAYA baglar.
#
# NICIN VAR: ayrik baslatilan kosu, sistemin "arka plan isi bitti"
# bildirimini URETMEZ. Bu bekci o tek kaybi kapatir.
#
# CLAUDE.md paragraf 10: "Bekci HER ZAMAN GERCEKLESMIS bir olaya
# baglanir - gecen sureye, tahmine ya da bir oturumun 'bitiyorum'
# demesine DEGIL." Tetik: data/donemler.js damgasi. Motor onu koseunun
# EN SONUNDA yazar.
#
# VE paragraf 7: "bir bekci DUZENLI olarak 'hala nobetteyim' demelidir."
# 3 Eylul'de bir bekci koseuyla birlikte oldu ve SESSIZLIGI "iyi gidiyor"
# diye okundu - fark edilmesi SEKIZ SAAT surdu. Bu bekci 60 dakikada bir
# canlilik satiri yazar.
#
# KULLANIM (proje kokunden, AYRIK baslatilir):
#   Start-Process powershell -ArgumentList '-NoProfile','-File',
#      'arac/kosu_bekci_ayrik.ps1','-Pid','<uretim pid>' -WindowStyle Hidden
#
# BU DOSYA SAF ASCII OLMALI (PowerShell 5.1 BOM'suz .ps1'i ANSI sanar).
# ---------------------------------------------------------------------
param([int]$UretimPid = 0)

$kok = (Get-Location).Path
$hedef = Join-Path $kok 'data\donemler.js'
$log = Join-Path $kok 'denetim\BEKCI-KOSU7.log'

function Yaz($m) {
    $s = ((Get-Date -Format 'HH:mm:ss') + '  ' + $m)
    Write-Output $s
    Add-Content -Path $log -Value $s -Encoding UTF8
}

$basDamga = (Get-Item $hedef -ErrorAction SilentlyContinue).LastWriteTime
Yaz ("BEKCI BASLADI - hedef donemler.js damgasi: " + $basDamga)
if ($UretimPid) { Yaz ("izlenen uretim PID: " + $UretimPid) }

$sonRapor = Get-Date
$tavan = (Get-Date).AddHours(26)     # zaman asimi

while ((Get-Date) -lt $tavan) {
    Start-Sleep -Seconds 60

    $simdi = (Get-Item $hedef -ErrorAction SilentlyContinue).LastWriteTime
    if ($simdi -ne $basDamga) {
        Yaz "KOSU BITTI - donemler.js YENIDEN YAZILDI."
        for ($i = 0; $i -lt 9; $i++) { [Console]::Beep(880, 250); Start-Sleep -Milliseconds 120 }
        exit 0
    }

    # uretim surecı oldu mu?
    if ($UretimPid) {
        $p = Get-Process -Id $UretimPid -ErrorAction SilentlyContinue
        if (-not $p) {
            Yaz "[X] URETIM SURECI OLDU - donemler.js YAZILMADAN. KOSU BASARISIZ."
            for ($i = 0; $i -lt 3; $i++) { [Console]::Beep(300, 700); Start-Sleep -Milliseconds 200 }
            exit 1
        }
    }

    # 60 dakikada bir canlilik - SESSIZLIK BIR OLCUM DEGILDIR
    if (((Get-Date) - $sonRapor).TotalMinutes -ge 60) {
        $cpu = ''
        if ($UretimPid) {
            $p = Get-Process -Id $UretimPid -ErrorAction SilentlyContinue
            if ($p) { $cpu = (" - CPU {0:N0} sn, bellek {1:N0} MB" -f $p.CPU, ($p.WorkingSet64/1MB)) }
        }
        Yaz ("kosu SURUYOR" + $cpu)
        $sonRapor = Get-Date
    }
}
Yaz "[X] ZAMAN ASIMI (26 saat) - kosu bitmedi. TAKILMIS OLABILIR."
for ($i = 0; $i -lt 3; $i++) { [Console]::Beep(300, 700); Start-Sleep -Milliseconds 200 }
exit 2
