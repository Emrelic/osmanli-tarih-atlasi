#!/bin/sh
# Tüm bölge dosyalarını araştırma JSON'larından yeniden üretir (VERI-MO-ARKEO, 20 Ekim 2026). Çıkış: bölge başına özet satırı.
cd "$(dirname "$0")/.." || exit 2
export PYTHONIOENCODING=utf8
U=denetim/arkeoloji_uret_1020.py
py $U denetim/arastirma/levant-anadolu.json levant-anadolu
py $U denetim/arastirma/avrupa.json avrupa --haric pylos-nestor-sarayi
py $U denetim/arastirma/cin.json cin
py $U denetim/arastirma/hint.json hint --haric mohenjo-daro,maurya-magadha
py $U denetim/arastirma/amerika.json amerika
py $U denetim/arastirma/afrika-okyanusya-iran.json afrika-iran --haric dhar-tichitt,urartu-tushpa
[ -f denetim/arastirma/mezopotamya.json ] && py $U denetim/arastirma/mezopotamya.json mezopotamya $MEZO_ARGS
[ -f denetim/arastirma/misir-nil-sahra.json ] && py $U denetim/arastirma/misir-nil-sahra.json misir-nil-sahra --haric merimde-beni-salama,nabta-playa
exit 0
