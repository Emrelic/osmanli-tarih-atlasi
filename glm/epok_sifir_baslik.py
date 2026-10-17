# -*- coding: utf-8 -*-
"""(a) sifir-cumleli 200'ler (araç-③ aday) baslik/yer durumu;
(b) butun 200'larda baslik_farkli dagilimi — yanlis-madde tuzağı ölçümü."""
import io, json, os, sys
from collections import Counter
if __name__ == "__main__":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AS1 = ("Anadolu", "Kırım-Karadeniz", "Balkan", "Ortadoğu", "İran-Kafkas",
       "Kuzey Afrika", "Arabistan-Hint")
yeni = {e["ad"]: e for e in json.load(io.open(os.path.join(KOK, "glm", "epok_evren.json"), encoding="utf-8"))}
tarama = {}
for l in io.open(os.path.join(KOK, "glm", "epok_asama1.jsonl"), encoding="utf-8"):
    r = json.loads(l)
    tarama[r["ad"]] = r          # son kayit kazanir (flip eklemeleri icin)
karar = {json.loads(l)["ad"] for l in io.open(os.path.join(KOK, "glm", "epok_karar.jsonl"), encoding="utf-8") if l.strip()}

a1 = [ad for ad, e in yeni.items() if e["bolge"] in AS1]
inc = [ad for ad in a1 if ad in tarama and tarama[ad].get("http") == "200"
       and (tarama[ad].get("govde_uzunluk") or 0) > 0]
bf = Counter(bool(tarama[ad].get("baslik_farkli")) for ad in inc)
print(f"200 & govde>0: {len(inc)} · baslik_farkli: {dict(bf)}")
sifir = [ad for ad in inc if not (tarama[ad].get("c_yil") or tarama[ad].get("c_ek"))]
print(f"\n== sifir-cumleli ({len(sifir)}) ==")
for ad in sorted(sifir):
    r = tarama[ad]
    print(f"  {ad} · slug={r.get('slug')} · baslik='{(r.get('baslik') or '')[:40]}' "
          f"farkli={r.get('baslik_farkli')} yer={int(bool(r.get('yer_ipucu')))} "
          f"govde={r.get('govde_uzunluk')} karar={'VAR' if ad in karar else '-'}")
print("\n== baslik_farkli=True olanlar (ilk 60) ==")
n = 0
for ad in sorted(inc):
    r = tarama[ad]
    if r.get("baslik_farkli"):
        n += 1
        if n <= 60:
            print(f"  {ad} · slug={r.get('slug')} · baslik='{(r.get('baslik') or '')[:44]}' karar={'VAR' if ad in karar else '-'}")
print("toplam baslik_farkli:", n)
