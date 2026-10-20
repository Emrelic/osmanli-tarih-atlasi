#!/bin/sh
# kullanım: sh denetim/arkeoloji_commit_bolge_1020.sh <bolge-kisaltma> "<açıklama>"
cd "$(dirname "$0")/.." || exit 2
B="$1"; A="$2"
py denetim/arkeoloji_baglama_1020.py "$B" || exit 2
git add -- "data/olaylar_arkeoloji_$B.js" "data/sehir_tarihce_arkeoloji_$B.js" index.html
git commit -m "ARKEOLOJI MO katmani: $B - $A" -m "Kaynaklar denetim/arastirma/ icindeki JSON'da (alinti + url + koordinat tanıkları). Ureten: denetim/arkeoloji_uret_1020.py. Varsayilanlar: denetim/ARKEOLOJI-KARAR-VARSAYILAN-1020.md." -m "Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>" -- "data/olaylar_arkeoloji_$B.js" "data/sehir_tarihce_arkeoloji_$B.js" index.html
