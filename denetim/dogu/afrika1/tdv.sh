#!/bin/bash
# kullanim: bash tdv.sh slug1 slug2 ...  -> tdv/<slug>.txt (HTML etiketsiz)
cd "$(dirname "$0")"
mkdir -p tdv
for s in "$@"; do
  curl -sL -A "Mozilla/5.0" "https://islamansiklopedisi.org.tr/$s" -o "tdv/$s.html"
  sed -e 's/<script[^>]*>.*<\/script>//g' -e 's/<[^>]*>/ /g' "tdv/$s.html" | tr -s ' \t' ' ' | grep -v '^\s*$' > "tdv/$s.txt"
  t=$(grep -m1 -o '<title>[^<]*' "tdv/$s.html")
  echo "$s $(wc -c < tdv/$s.txt) $t"
done
