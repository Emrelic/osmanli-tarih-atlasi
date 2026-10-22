#!/bin/bash
# kullanim: bash govde.sh slug ...  -> tdv/<slug>.govde (madde gövdesi, cümle başına satır)
cd "$(dirname "$0")/tdv"
for s in "$@"; do
  awk '/Kopyalama metni/{f=1;next} /Bu madde TDV/{f=0} f' "$s.txt" | sed 's/\. /.\n/g' > "$s.govde"
  echo "$s $(wc -l < $s.govde)"
done
