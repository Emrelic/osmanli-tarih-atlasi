# Bekci sureclerini UTF-8 DOSYAYA yazar — konsol kod sayfasi aradan CIKAR.
# 🔴 Sebep olculdu: konsoldan okununca Turkce adlar bozuluyor
#    ("VERI SAHIPLIK-2" -> "VER? SAH?PL?K-2") ve CANLI oturumlar
#    OKSUZ sanilip oldurulecekti.
$cik = @()
Get-CimInstance Win32_Process |
  Where-Object { $_.Name -like 'python*' -and $_.CommandLine -like '*tahta_bekci*' } |
  ForEach-Object {
    $pr = Get-Process -Id $_.ProcessId -ErrorAction SilentlyContinue
    $c = 0.0
    if ($pr) { $c = $pr.CPU }
    $cik += [PSCustomObject]@{
      pid   = $_.ProcessId
      cpu   = [math]::Round($c, 1)
      komut = $_.CommandLine
    }
  }
$cik | ConvertTo-Json -Depth 3 |
  Out-File -FilePath $args[0] -Encoding utf8
Write-Output ("YAZILDI: " + $cik.Count + " surec")
