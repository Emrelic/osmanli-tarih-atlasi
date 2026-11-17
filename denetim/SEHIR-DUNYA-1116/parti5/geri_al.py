# -*- coding: utf-8 -*-
"""Parti 5 geri alma (koordinatör kararı, 16-17 Kasım): madde BAŞLIĞI şehir olan kaynakta 'şehrin…/the town…/burası' atıflı tanık KABUL;
18 'belirsiz'e inenden 14'ünde ilk.kesinlik eski değerine döner (madde başlığı bölge/hanedan/külliye/kronoloji olan 4 kayıt belirsiz KALIR: windhoek, goa, sehrisebz, turkistan-yesi).
Ecmîr: TDV'deki eski ad 'Ajayameru' adlar'a eklenir (kaynaklı, ic_not'ta)."""
import json, subprocess, os, re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", ".."))
B = "denetim/SEHIR-DUNYA-1116/"
DOSYALAR = {"hint": B + "hint/parti4_birlesik.json", "oa": B + "orta-asya-mogolistan/parti3_birlesik.json", "afrika": B + "afrika-guney-bati/parti4_birlesik.json"}
ESKI_COMMIT = "a04248c56"   # parti 5'ten ÖNCEki commit (ilk.kesinlik eski değerleri)
GERI = {"maseru-ls": "afrika", "tombouctou-ml": "afrika", "ahmedabad-in": "hint", "amritsar-in": "hint", "bahavelpur-pk": "hint", "citagong-bd-a3": "hint",
        "haydarabad-dekken-in": "hint", "kanbayet-in": "hint", "mangalor-in": "hint", "multan-pk": "hint", "mursidabad-in": "hint", "racmahal-in": "hint",
        "askabat-tm": "oa", "hokand-uz": "oa"}
def git_show(commit, yol):
    return json.loads(subprocess.check_output(["git", "-C", KOK, "show", commit + ":" + yol]).decode("utf-8"))
veri = {k: json.load(open(os.path.join(KOK, v), encoding="utf-8")) for k, v in DOSYALAR.items()}
eski = {k: {c["id"]: c for c in git_show(ESKI_COMMIT, v)} for k, v in DOSYALAR.items()}
def baslik(kay):
    m = re.search(r"«([^»]+)»", kay or "")
    if m: return m.group(1).strip()
    m = re.search(r"^([^,(;]+)", kay or ""); return (m.group(1).strip() if m else kay or "")[:60]
for cid, dk in GERI.items():
    c = [x for x in veri[dk] if x["id"] == cid][0]
    e = eski[dk].get(cid)
    if not e: print("ESKİ YOK", cid); continue
    yeni_k, eski_k = c["ilk"].get("kesinlik"), e["ilk"].get("kesinlik")
    c["ilk"]["kesinlik"] = eski_k
    c["ic_not"] = (c.get("ic_not", "") + " Parti5 geri alma (koordinatör kararı): tanık cümlesi madde konusu şehre atıflı (madde: " + baslik(c["ilk"].get("kaynak", "")) + "); ilk.kesinlik '" + str(yeni_k) + "' → '" + str(eski_k) + "' geri alındı.").strip()
    print(cid, yeni_k, "→", eski_k)
# Ecmîr: adlar'a Ajayameru
c = [x for x in veri["hint"] if x["id"] == "ecmir-in"][0]
if "Ajayameru" not in c.get("adlar", []):
    c["adlar"] = ["Ajayameru"] + c.get("adlar", [])
    c["ic_not"] = (c.get("ic_not", "") + " adlar: 'Ajayameru' (TDV «Ecmîr» md.; Sanskrit/Hindu dönemi adı; tarihli kullanım kaynakta belirtilmedi, sıra: en eski ad başta).").strip()
    print("ecmir adlar:", c["adlar"])
for k, v in DOSYALAR.items():
    json.dump(veri[k], open(os.path.join(KOK, v), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
