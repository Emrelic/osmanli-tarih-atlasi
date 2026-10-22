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
[ -f denetim/arastirma/mezopotamya.json ] && py $U denetim/arastirma/mezopotamya.json mezopotamya --haric eridu,babil-fethi-539
[ -f denetim/arastirma/misir-nil-sahra.json ] && py $U denetim/arastirma/misir-nil-sahra.json misir-nil-sahra --haric merimde-beni-salama,nabta-playa
# ── 2. dalga (çok dilli; kürasyon: denetim/arkeoloji_dalga2_kur_1020.py → d2-*.json) ──
py denetim/arkeoloji_dalga2_kur_1020.py
for b in anadolu-ege italya-avrupa hint-guneydogu cin-dogu-asya afrika-amerika iran-orta-asya; do
  py $U denetim/arastirma/d2-$b.json d2-$b
done
# ── 3. dalga (kürasyon: denetim/arkeoloji_dalga3_kur_1020.py → d3-*.json) ──
py denetim/arkeoloji_dalga3_kur_1020.py
for b in anadolu-ege italya-avrupa misir-afrika hint-cin amerika-pasifik; do
  py $U denetim/arastirma/d3-$b.json d3-$b
done
# ── sıra: kunye → yerleşim (sehir_tarihce'den) → devlet-şehir zinciri (3-mezopotamya-iran sehir_kontrol) ──
py denetim/arkeoloji_kunye_1020.py
py denetim/arkeoloji_yerlesim_1020.py
py denetim/arkeoloji_devlet_zincir_1020.py
py denetim/arkeoloji_yerlesim_1020.py
py denetim/arkeoloji_mukerrer_ayikla_1022.py
exit 0
