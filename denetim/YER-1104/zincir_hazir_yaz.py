"""zincir_hazir_yaz.py — zincir.json'dan KASA'ya hazır noktaları (zinciri dolu) zincir_hazir.json'a yazar.
Taslak/kurulamadı noktalar (zincir boş) dışarıda kalır. KASA-YER.md ② satırının koordinat dayanağı da eklenir."""
import json, os, sys, subprocess
sys.stdout.reconfigure(encoding="utf-8")
BURA = os.path.dirname(os.path.abspath(__file__))
Z = json.load(open(os.path.join(BURA, "zincir.json"), encoding="utf-8"))
agac = subprocess.run(["git", "rev-parse", "--short", "HEAD"], capture_output=True, encoding="utf-8", cwd=BURA).stdout.strip()
hazir = {"_aciklama": ("YER-1104: KASA'ya hazır sahiplik zincirleri (UMIT SALI, 4 Kasım 2026). Kaynak: zincir.json "
                       "(taslak ve kurulamadı noktalar hariç). Ölçüm ağacı: %s (origin/main 2fdc19540 içerir). "
                       "alan s → s:[{d,f,t,kaynak}] · d → d:[{f,t,kaynak}] (Osmanlı) · v → v:[{k,f,t,kaynak}] · "
                       "isg → isg:[{d,f,t,kaynak}] (işgal, sahiplik değişmez). 'KÜNYE ARALIĞI' beyanlı dönemler "
                       "künye uçları hizalanınca düzelir (ZINCIR.md)." % agac)}
for ad, k in Z.items():
    if ad.startswith("_") or not k.get("zincir"):
        continue
    hazir[ad] = {a: k[a] for a in ("lat", "lon", "kur", "bit", "not", "zincir") if a in k}
json.dump(hazir, open(os.path.join(BURA, "zincir_hazir.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("hazır", len(hazir) - 1, "ağaç", agac)
