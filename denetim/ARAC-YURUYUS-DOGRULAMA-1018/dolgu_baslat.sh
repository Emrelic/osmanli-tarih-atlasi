#!/bin/bash
# B dolgu üretimini kesit aralıklarına bölüp ARALIKLI başlatır (yükleme tepesi ~3 GB; aynı anda biner mi diye
# boş bellek bakılır). Kullanım: SP=<ara dizin> bash dolgu_baslat.sh   (repo kökünden)
SP="${SP:?SP gerekli}"
E=(0 170 500 900 1300 1700 2200 2841)
for i in 0 1 2 3 4 5 6; do
  b=${E[$i]}; s=${E[$((i+1))]}
  # boş bellek 5 GB üstü olana kadar bekle (en çok 20 dk)
  n=0
  while [ $n -lt 120 ]; do
    f=$(powershell -c "[int]((Get-CimInstance Win32_OperatingSystem).FreePhysicalMemory/1MB)")
    [ "$f" -ge 5 ] && break
    sleep 10; n=$((n+1))
  done
  MOTOR_DOLGU_BAS=$b MOTOR_DOLGU_SON=$s MOTOR_DOLGU_CIKTI="$SP/dolgu_p$i.js" \
    MOTOR_ONBELLEK_DIZIN="$SP/onb_dolgu_p$i" PYTHONIOENCODING=utf-8 \
    py -X utf8 -u arac/dolgu.py > "$SP/dolgu_p$i.log" 2>&1 &
  echo "p$i [$b,$s) başladı $(date +%H:%M) boş=${f}GB" >> "$SP/baslat.log"
  sleep 200
done
