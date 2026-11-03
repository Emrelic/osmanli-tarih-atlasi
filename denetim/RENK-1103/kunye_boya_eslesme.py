# -*- coding: utf-8 -*-
"""RENK-1103 (c): kunye <-> BOYALAR eslemesi. Salt-okunur olcum; veri yazmaz.

Motorun boya anahtari kurali (uret_petek.py ~1111-1148, "YOL A'"):
    anahtar = s.d ; BOYALAR'da yoksa kunyenin `harita:` alani ; o da BOYALAR'da
    yoksa gövde BOYANMAZ ("UYARI boya: bilinmeyen devlet kimligi").
renk_olc.py kunye penceresinde ise anahtar = `harita or id`.
Cikti: kunye_boya_eslesme.md + kunye_boya_eslesme.json (ayni dizin).
"""
import io, os, sys, json, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
from renkler import BOYALAR

D = girdi.oku_devletler()
Y = girdi.yukle(sessiz=True)
BOLUM = os.path.dirname(os.path.abspath(__file__))

M = {d["id"]: d for d in D}
ids = set(M)


def motor_anahtar(kimlik):
    """uret_petek A' kurali; None = boyanmaz."""
    if kimlik in BOYALAR:
        return kimlik
    h = (M.get(kimlik) or {}).get("harita")
    if h and h in BOYALAR:
        return h
    return None


harita_yok = [d["id"] for d in D if not d.get("harita")]
harita_var = [d for d in D if d.get("harita")]
harita_var_boyada_yok = [(d["id"], d["harita"]) for d in harita_var if d["harita"] not in BOYALAR]
yok_ama_id_boyada = [i for i in harita_yok if i in BOYALAR]
yok_ve_boyasiz = [i for i in harita_yok if i not in BOYALAR]
boya_gerekli = [d["id"] for d in D if d.get("boya_gerekli")]
bgset = set(boya_gerekli)
# kunye bazinda motor anahtari
kunye_boyasiz = [d["id"] for d in D if motor_anahtar(d["id"]) is None]
kunye_boyasiz_bg = [i for i in kunye_boyasiz if i in bgset]
bg_boyali = [i for i in boya_gerekli if motor_anahtar(i) is not None]
kullanilan = set()
for d in D:
    kullanilan.add(d["id"])
    if d.get("harita"):
        kullanilan.add(d["harita"])
yetim_boya = sorted(k for k in BOYALAR if k not in kullanilan)

sd = collections.Counter()
sd_zarf = {}
for y in Y:
    for kat in ("s", "v"):
        for p in (y.get(kat) or []):
            d = p.get("d")
            if d:
                sd[d] += 1
                a = sd_zarf.get(d, [p["f"], p["t"]])
                sd_zarf[d] = [min(a[0], p["f"]), max(a[1], p["t"])]
sd_boyada_yok = {k: v for k, v in sd.items() if k not in BOYALAR}
sd_yonlenen = {k: motor_anahtar(k) for k in sd_boyada_yok if motor_anahtar(k)}
sd_gercek_boyasiz = {k: v for k, v in sd_boyada_yok.items()
                     if motor_anahtar(k) is None and k != "__BOSLUK__"}
sd_kunyede_yok = {k: v for k, v in sd.items() if k not in ids and k not in BOYALAR}

ozet = {
    "devletler_js_kayit": len(D),
    "BOYALAR_kimlik": len(BOYALAR),
    "kunye_harita_alani_yok": len(harita_yok),
    "kunye_harita_yok_ama_id_BOYALARda": len(yok_ama_id_boyada),
    "kunye_harita_yok_ve_id_BOYALARda_yok": len(yok_ve_boyasiz),
    "kunye_harita_var": len(harita_var),
    "kunye_harita_var_ama_anahtar_BOYALARda_yok": len(harita_var_boyada_yok),
    "kunye_motor_anahtari_yok_BOYASIZ": len(kunye_boyasiz),
    "boya_gerekli_isaretli": len(boya_gerekli),
    "boya_gerekli_ve_BOYASIZ": len(kunye_boyasiz_bg),
    "boya_gerekli_ama_artik_boyali_isaret_bayat": len(bg_boyali),
    "BOYALAR_yetim_kunyesiz": len(yetim_boya),
    "yerlesim_s_d_ayri_kimlik": len(sd),
    "s_d_BOYALARda_yok": len(sd_boyada_yok),
    "s_d_BOYALARda_yok_ama_harita_ile_yonlenen": len(sd_yonlenen),
    "s_d_GERCEKTEN_boyasiz_(__BOSLUK__ haric)": len(sd_gercek_boyasiz),
    "s_d_BOSLUK_donem": sd.get("__BOSLUK__", 0),
    "s_d_kunyede_yok_ve_BOYALARda_yok": len(sd_kunyede_yok),
}
json.dump({"ozet": ozet,
           "kunye_boyasiz": kunye_boyasiz,
           "kunye_boyasiz_boya_gerekli": kunye_boyasiz_bg,
           "s_d_gercek_boyasiz": sd_gercek_boyasiz,
           "s_d_yonlenen": sd_yonlenen,
           "s_d_kunyede_yok": sd_kunyede_yok,
           "harita_var_boyada_yok": harita_var_boyada_yok,
           "yetim_boya": yetim_boya},
          io.open(os.path.join(BOLUM, "kunye_boya_eslesme.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)


def tablo(satirlar, baslik):
    o = ["| " + " | ".join(baslik) + " |", "|" + "---|" * len(baslik)]
    for s in satirlar:
        o.append("| " + " | ".join(str(x) for x in s) + " |")
    return o


o = []
o.append("# Kunye - boya eslemesi (RENK-1103 c)\n")
o.append("Olcum: salt-okunur, `denetim/RENK-1103/kunye_boya_eslesme.py`. Ham: `kunye_boya_eslesme.json`.\n")
o.append("Motor kurali (uret_petek.py ~1111-1148): boya anahtari = `s.d`; BOYALAR'da yoksa kunyenin "
         "`harita:` alani; o da BOYALAR'da yoksa gövde BOYANMAZ. renk_olc.py'nin kunye penceresi ise "
         "`harita or id` kullanir. Bu rapor ikisini ayri sayar.\n")
o.append("## Sayilar\n")
for k, v in ozet.items():
    o.append(f"- {k}: **{v}**")
o.append("")
o.append(f"## 1. `harita:` alani OLMAYAN kunyeler ({len(harita_yok)})\n")
o.append(f"- id'si BOYALAR'da olan (sorun yok): {len(yok_ama_id_boyada)}")
o.append(f"- id'si BOYALAR'da olmayan: **{len(yok_ve_boyasiz)}** (hepsi boyasiz; asagida)\n")
o.append(f"### 1a. Boyasiz kunyeler (motor anahtari yok) - toplam {len(kunye_boyasiz)}\n")
o += tablo([(i, "evet" if i in bgset else "hayir", (M[i].get("f") or "") + " → " + (M[i].get("t") or ""),
             M[i].get("bolge"), M[i].get("harita") or "-") for i in sorted(kunye_boyasiz)],
           ["id", "boya_gerekli", "f → t", "bolge", "harita"])
o.append("")
o.append(f"## 2. `harita:` anahtari BOYALAR'da OLMAYAN kunyeler ({len(harita_var_boyada_yok)})\n")
o += tablo(sorted(harita_var_boyada_yok), ["kunye id", "harita anahtari"]) if harita_var_boyada_yok else ["yok"]
o.append("")
o.append(f"## 3. `boya_gerekli:true` ({len(boya_gerekli)} kunye)\n")
o.append(f"- hala boyasiz: **{len(kunye_boyasiz_bg)}**")
o.append(f"- artik motor anahtari olan (isaret bayat): {len(bg_boyali)}\n")
o.append(f"## 4. Yerlesim `s:[{{d}}]` / `v:[{{d}}]` kimlikleri ({len(sd)} ayri kimlik)\n")
o.append(f"- BOYALAR'da olmayan: **{len(sd_boyada_yok)}** kimlik "
         f"({sum(sd_boyada_yok.values())} donem; `__BOSLUK__` {sd.get('__BOSLUK__', 0)} donem dahil, o delik)")
o.append(f"- bunlardan `harita:` ile BOYALAR'a yonlenen (boyali): **{len(sd_yonlenen)}**")
o.append(f"- GERCEKTEN boyasiz (`__BOSLUK__` haric): **{len(sd_gercek_boyasiz)}** "
         f"({sum(sd_gercek_boyasiz.values())} donem)")
o.append(f"- devletler.js'te de BOYALAR'da da olmayan (`__BOSLUK__` dahil): {len(sd_kunyede_yok)}\n")
if sd_gercek_boyasiz:
    o += tablo([(k, v, sd_zarf[k][0] + " → " + sd_zarf[k][1], "var" if k in ids else "YOK")
                for k, v in sorted(sd_gercek_boyasiz.items(), key=lambda x: -x[1])],
               ["s.d kimligi", "donem", "veri zarfi", "devletler.js"])
o.append("")
o.append(f"## 5. Yetim boya (BOYALAR'da olup hic bir kunyenin id/harita'si olmayan): {len(yetim_boya)}\n")
o.append(", ".join(yetim_boya))
o.append("")
io.open(os.path.join(BOLUM, "kunye_boya_eslesme.md"), "w", encoding="utf-8").write("\n".join(o))
print(json.dumps(ozet, ensure_ascii=False, indent=1))
