# KOSU 30 baslatici - HAVVA. SAF ASCII. (KOSU-29-BASLAT.ps1 uzerine: wt=C:\atlas-kosu30, DEM kosu29'dan)
# Kullanim:  powershell -NoProfile -File denetim\KOSU-30-BASLAT.ps1 -Taban <hash> [-Kuru]
#   -Kuru : worktree kurmaz, yalniz on kontrolleri yapar (taban, DEM, kosu var mi, disk, RAM).
# [!] KOSU EMRINI EMRE VERIR. Bu betik Emre'nin "basla" demesinden ONCE calistirilmaz (yalniz -Kuru).
param([Parameter(Mandatory=$true)][string]$Taban, [switch]$Kuru)
$ErrorActionPreference = 'Stop'
$ana = 'C:\atlas'
$wt  = 'C:\atlas-kosu30'
$dem = 'C:\atlas-kosu29\veri-kaynak\yukseklik'

git -C $ana fetch -q origin
# taban yerel dal ya da commit olabilir: origin/main'in torunu olmali
$tam = (git -C $ana rev-parse --verify ($Taban + '^{commit}')).Trim()
$om  = (git -C $ana rev-parse origin/main).Trim()
git -C $ana merge-base --is-ancestor $om $tam
if ($LASTEXITCODE -ne 0) { Write-Output "[X] taban origin/main'in USTUNDE degil: $tam (origin/main $om)"; exit 1 }
Write-Output ("taban " + $tam + " - origin/main " + $om)

# ---- baska uretim kosuyor mu? (HAVVA'da kosu varken tuz dosyasina dokunulmaz, ikinci kosu baslatilmaz)
$var = Get-CimInstance Win32_Process | Where-Object { $_.CommandLine -match 'uret_petek\.py|_sinav_kesit' -and $_.CommandLine -notmatch 'KOSU-30-BASLAT' }
if ($var) { Write-Output '[X] bu makinede uretim/kutu kosusu SURUYOR:'; $var | ForEach-Object { Write-Output ("    PID " + $_.ProcessId) }; exit 1 }
foreach ($f in 'etopo2022_30s_atlas.tif','etopo2022_30s_dunya.tif') {
  if (-not (Test-Path (Join-Path $dem $f))) { Write-Output "[X] DEM yok: $dem\$f"; exit 1 } }
$d = Get-PSDrive C
$bosGB = [math]::Round($d.Free / 1GB, 0)
$ram = [math]::Round((Get-CimInstance Win32_OperatingSystem).FreePhysicalMemory / 1MB, 1)
Write-Output ("disk bos " + $bosGB + " GB (>= 60 sart) - RAM bos " + $ram + " GB (>= 12 onerilir)")
if ($bosGB -lt 60) { Write-Output '[X] disk yetersiz'; exit 1 }
if (Test-Path $wt) { Write-Output "[X] $wt zaten var - elle bak"; exit 1 }
if ($Kuru) { Write-Output 'KURU: worktree kurulmadi - on kontroller TAMAM'; exit 0 }

git -C $ana worktree add $wt $tam --detach
if ($LASTEXITCODE -ne 0) { exit 1 }
New-Item -ItemType Directory -Force (Join-Path $wt 'veri-kaynak\yukseklik') | Out-Null
Copy-Item (Join-Path $dem 'etopo2022_30s_atlas.tif'), (Join-Path $dem 'etopo2022_30s_dunya.tif') (Join-Path $wt 'veri-kaynak\yukseklik\')

# KOSU 29 ile AYNI bayraklar. MO katmani bayragi GEREKTIRMEZ (varsayilanlar: MO_YURUYUS_GUN=10, MO_SINIR=1281-01-01,
# TARIH_BASI_MERKEZ=mo, MERKEZ_K0=1, MO_PUAN_KAPISI=0). MOTOR_B_DOLGU TANIMLANMAZ (B dolgusu bu kosuya DAHIL DEGIL).
$env:MOTOR_SUREC_ISCI = '2'
$env:MOTOR_ONBELLEK_DIZIN = 'C:\atlas-onbellek'
$env:MOTOR_YURUYUS = '1'
$env:MOTOR_YURUYUS_SAAT = '40'
$env:MOTOR_DEVAM = '1'
$env:MOTOR_COL_UFUK_SAAT = '0'
$env:MOTOR_UFUK_BANT = '40,56,80'
$env:MOTOR_SINIR_KISIT = '1'
$env:MOTOR_COL_GIRINTI_KAPALI = '1'
$env:MOTOR_KOMSU_KUR_BOL = '1'
$env:MOTOR_YAKA_KILIDI = '1'
$env:MOTOR_KISTAK_KOPRU = '1'
Remove-Item Env:MOTOR_B_DOLGU -ErrorAction SilentlyContinue
$env:PYTHONIOENCODING = 'utf-8'

$damga = Get-Date -Format 'yyyyMMdd-HHmmss'
$log = Join-Path $wt ("kosu30-" + $damga + ".log")
$err = $log -replace '\.log$', '.err'
$p = Start-Process -FilePath 'py' -ArgumentList @('arac/uret_petek.py') -WorkingDirectory $wt -WindowStyle Hidden -PassThru -RedirectStandardOutput $log -RedirectStandardError $err
Push-Location $wt
$b = Start-Process powershell -ArgumentList '-NoProfile','-File','arac/kosu_bekci_ayrik.ps1','-UretimPid',$p.Id -WorkingDirectory $wt -WindowStyle Hidden -PassThru
Pop-Location
$bay = @("KOSU 30 - taban " + $tam.Substring(0,8) + " - " + (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'),
 "MOTOR_SUREC_ISCI=2","MOTOR_ONBELLEK_DIZIN=C:\atlas-onbellek","MOTOR_YURUYUS=1","MOTOR_YURUYUS_SAAT=40","MOTOR_DEVAM=1",
 "MOTOR_COL_UFUK_SAAT=0","MOTOR_UFUK_BANT=40,56,80","MOTOR_SINIR_KISIT=1","MOTOR_COL_GIRINTI_KAPALI=1","MOTOR_KOMSU_KUR_BOL=1",
 "MOTOR_YAKA_KILIDI=1","MOTOR_KISTAK_KOPRU=1",("py PID=" + $p.Id + " bekci PID=" + $b.Id))
Set-Content -Path ($log -replace '\.log$', '-bayraklar.log') -Value $bay -Encoding UTF8
$bay | ForEach-Object { Write-Output $_ }
Write-Output ("log: " + $log)
