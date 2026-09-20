# -*- coding: utf-8 -*-
"""D1923-CIZGI-0920 · 2. tur — E7 (48) kaydını KAYNAK TÜRÜNE göre ayır.

Soru (1.MURAT, M-4760 §3): E7'de vekil kullanılamıyor, hat dönem belgesinden
gelmeli. Kümeyi kaynak türüne göre ayır ve her biri için kaç oturumluk iş
olduğunu yaz.

Sınıflar — hangi BELGE TÜRÜ 1923 hattını verebilir:
  T1 astronomik/cetvel : metin hattı geometrik ilkelle tanımlıyor (meridyen,
                         paralel, iki nokta arası düz hat, yay) ⇒ HESAPLANIR
  T2 antlaşma tarifli  : metin hattı ADLA tarif ediyor (nehir, su bölümü, köy)
                         ⇒ yer adı sözlüğü + arazi verisi ile georeferans
  T3 komisyon protokolü: tahdit komisyonu protokolü/haritası var ⇒ arşiv+georeferans
  T4 hakem kararı      : RIAA/mahkeme kararı hattı tarif ediyor
  T5 belge YOK         : elde hat tarif eden hiçbir belge künyesi yok

Koşum: py denetim/ARAC-D1923-E7-KAYNAKTUR-0920.py
Çıktı: denetim/D1923-E7-KAYNAKTUR-0920.json
"""
import importlib.util
import json
import math
import os
import re
import sys
from collections import Counter, defaultdict

sys.stdout.reconfigure(encoding="utf-8")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
spec = importlib.util.spec_from_file_location(
    "m", os.path.join(KOK, "denetim", "ARAC-D1923-CIZGI-0920.py"))
m = importlib.util.module_from_spec(spec)
spec.loader.exec_module(m)

ham = {}
for a in m.DOSYALAR:
    for k in m.oku(a):
        ham[k.get("id")] = dict(k, _dosya=a)

olcum = json.load(open(os.path.join(KOK, "denetim", "D1923-CIZGI-0920.json"),
                       encoding="utf-8"))
e7 = [r for r in olcum["liste"] if r["engel_sinifi"].startswith("E7")]

T1 = [r"meridyen", r"paralel", r"\d+°[BDKG]", r"cetvel", r"düz hat", r"yay",
      r"astronomik", r"hat boyunca düz"]
T2 = [r"antlaşma", r"antlasma", r"sözleşme", r"Antlaşması", r"md\.", r"madde",
      r"konvansiyon", r"Sözleşme"]
T3 = [r"protokol", r"Protokol", r"komisyon", r"Komisyon", r"tahdit",
      r"delimitation", r"Büyükelçiler", r"Konferans"]
T4 = [r"hakem", r"Hakem", r"yargı", r"yargi", r"RIAA", r"mahkeme", r"karar"]


def var(desenler, s):
    return any(re.search(d, s) for d in desenler)


def kosegen_km(kutu):
    if not kutu:
        return None
    x0, y0, x1, y1 = kutu
    ymid = math.radians((y0 + y1) / 2)
    return math.hypot((x1 - x0) * 111.32 * math.cos(ymid),
                      (y1 - y0) * 110.57)


def kaynak_turu(k):
    """(tür, gerekçe) — dayanak TÜRLERİ ve metin damgalarından."""
    dy = k.get("dayanak") or []
    turler = " ".join((d.get("tur") or "") + " " + (d.get("ad") or "")
                      + " " + (d.get("madde") or "") for d in dy)
    metin = (k.get("not") or "") + " " + (k.get("kesinlik_not") or "") + " " \
        + ((k.get("degisti") or {}).get("not") or "")
    hepsi = turler + " " + metin

    if not dy or all(not (d.get("ad") or "") for d in dy):
        return "T5 · hat tarif eden belge künyesi YOK", "dayanak boş"
    if var(T1, hepsi):
        return "T1 · astronomik/cetvel — HESAPLANIR", "geometrik ilkel damgası"
    if var(T4, turler):
        return "T4 · hakem kararı", "dayanak türü hakem/yargı"
    if var(T3, hepsi):
        return "T3 · komisyon protokolü/haritası", "protokol/komisyon damgası"
    if var(T2, turler):
        return "T2 · antlaşma metni ADLA tarif", "dayanak türü antlaşma/sözleşme"
    return "T5 · hat tarif eden belge künyesi YOK", "damga yok"


sayim = Counter()
kume = defaultdict(list)
liste = []
for r in e7:
    k = ham[r["id"]]
    t, gerekce = kaynak_turu(k)
    kk = kosegen_km(k.get("kutu"))
    sayim[t] += 1
    kume[t].append((r["id"], round(kk, 1) if kk else None,
                    r["cografi_kume"].split(" · ")[0]))
    liste.append({
        "id": r["id"],
        "kaynak_turu": t,
        "gerekce": gerekce,
        "cografi_kume": r["cografi_kume"],
        "kutu_kosegen_km": round(kk, 1) if kk else None,
        "yerel_mi": (kk is not None and kk <= 60),
        "dayanak_adlari": r["dayanak_adlari"],
        "dayanak_ibs": r["dayanak_ibs"],
    })

print(f"E7 kaydı: {len(e7)}\n")
print("== kaynak türüne göre ==")
for t, n in sayim.most_common():
    print(f"  {n:>3}  {t}")
print("\n== küme küme ==")
for t, _ in sayim.most_common():
    print(f"\n--- {t} ({len(kume[t])}) ---")
    for i, km, cg in sorted(kume[t], key=lambda x: (x[2], x[0])):
        print(f"   {cg:>4} {str(km):>7} km  {i}")

hedef = os.path.join(KOK, "denetim", "D1923-E7-KAYNAKTUR-0920.json")
with open(hedef, "w", encoding="utf-8") as f:
    json.dump({"gorev": "D1923-CIZGI-0920 · E7 kaynak türü",
               "e7_adet": len(e7),
               "kaynak_turune_gore": dict(sayim.most_common()),
               "liste": sorted(liste, key=lambda r: (r["kaynak_turu"], r["id"]))},
              f, ensure_ascii=False, indent=1)
print(f"\nyazıldı: {hedef}")
