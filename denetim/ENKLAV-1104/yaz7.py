# -*- coding: utf-8 -*-
"""ENKLAV-1104: KARA-EKSKLAV'ın yedinci 100'ü (K601-K700). aday7.json + hukumler7.json → ADAYLAR7.md.
Seçim (secim7.py): yaz2.py ile aynı evren, alan büyükten küçüğe 601.-700. Deniz aşırı sömürge gövdesi (sömürgeci
aile + koridor > 500 km + koridorda deniz ya da > 2000 km; Rusya ailesi dışarıda) ayrı bölümde."""
import json, os, collections

BURA = os.path.dirname(os.path.abspath(__file__))
A = json.load(open(os.path.join(BURA, "aday7.json"), encoding="utf-8"))
H = {k: v for k, v in json.load(open(os.path.join(BURA, "hukumler7.json"), encoding="utf-8")).items() if not k.startswith("_")}


def yer(L, n=8):
    if not L:
        return "—"
    s = "; ".join("%s (%s)" % (y["ad"], y["sahip"] or "sahipsiz") for y in L[:n])
    return s + (" … +%d" % (len(L) - n) if len(L) > n else "")


def kor(a):
    k = a.get("koridor") or {}
    return ("%s km · " % a.get("koridor_km", "?")) + ", ".join("%s %d/9" % (s, v) for s, v in sorted(k.items(), key=lambda x: -x[1]))


L = ["# ENKLAV-1104 — KARA-EKSKLAV yedinci 100 (K601-K700, koşu 32)\n",
     "Ölçen: LAB SALI · 4 Kasım 2026 · ölçüm ENKLAV-1103 ile aynı (koşu 32, `olc_enklav_1103.py`); seçim `secim7.py`; "
     "yerleşim dönemleri `origin/main` 09c1aa176 üzerinde okundu (koşudan sonraki veri düzeltmeleri hükümde not edilir).\n",
     "Evren ve sınıflama: `denetim/ENKLAV-1103/ADAYLAR.md` § Evren. Kova ve güven sözlüğü aynı "
     "(GERCEK · BIRLESMELI · YAPAY-a/b/c/d/k/m · KAYNAKLI/OLCUM/KAYNAK-GEREK).\n"]
say = collections.Counter((H[a["no"]]["kova"] if a["no"] in H else "—") for a in A)
guv = collections.Counter((H[a["no"]]["guven"] if a["no"] in H else "—") for a in A)
L.append("## Hüküm özeti\n")
L.append("Hükümlü: %d / %d. Kova: %s. Güven: %s.\n" % (
    sum(1 for a in A if a["no"] in H), len(A),
    ", ".join("%s %d" % kv for kv in sorted(say.items())), ", ".join("%s %d" % kv for kv in sorted(guv.items()))))
for baslik, kosul in (("Kara eksklavları", lambda a: not a["somurge"]), ("Deniz aşırı sömürge gövdeleri (ayrı)", lambda a: a["somurge"])):
    L.append("## %s\n" % baslik)
    for a in [a for a in A if kosul(a)]:
        h = H.get(a["no"])
        L.append("### %s · %s · %s → %s · %s km²\n" % (a["no"], a["devlet"], a["f"][:10], a["t"][:10],
                                                     "{:,}".format(int(a["alan_max"])).replace(",", ".")))
        L.append("- En büyük kesit: %s · komşu: %s" % (a.get("buyuk_gun"), ", ".join(
            "%s %d%%" % (k, round(v * 100)) for k, v in sorted(a["komsular"].items(), key=lambda x: -x[1])[:3]) or "—"))
        L.append("- Koridor: %s" % kor(a))
        L.append("- İçindeki yerleşimler: %s" % yer(a["yerlesimler"]))
        if h:
            L.append("- **Hüküm: %s** (%s · güven %s)" % (h["hukum"], h["kova"], h["guven"]))
            L.append("  - Gerekçe: %s" % h["gerekce"])
            L.append("  - Düzeltme önerisi: %s" % h["duzeltme"])
            L.append("  - Kaynak: %s" % h["kaynak"])
        else:
            L.append("- Hüküm: — (sırada)")
        L.append("")
open(os.path.join(BURA, "ADAYLAR7.md"), "w", encoding="utf-8", newline="\n").write("\n".join(L))
print(dict(say), dict(guv))
