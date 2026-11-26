# -*- coding: utf-8 -*-
"""GOSTERIM-0075 / H-0017-H-0022 sınıfı: AYNI polity hem `v:` (tâbi, Osmanlı kırmızısı) hem `s:` (yabancı, kendi rengi)
olarak yazılmış mı? Bir polity o gün başka noktalarda `v:<kid>` iken bir noktasında `s:<kid>` ise o nokta
harita üzerinde AYRI, soluk bir yabancı adası çizer (İbrail · Yergöğü = Eflak, 1829-09-14 → 1859-01-24).

Ölçüt: nokta P, pencere [f,t) ile `s:{d:K}` taşıyor VE aynı günlerin en az bir kısmında BAŞKA bir nokta `v:{kid:K}` taşıyor.
SALT OKUR — arac/girdi.py'nin okuduğu 87 dosya. Çıktı: denetim/GOSTERIM-0075-CIFTTEMSIL.json
  py denetim/ARAC-GOSTERIM-0075-CIFTTEMSIL.py
"""
import io, os, sys, json, datetime
from collections import defaultdict
BURASI = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BURASI, "arac"))
import girdi
Y = girdi.yukle(sessiz=True)

def o(s): y, m, d = (int(x) for x in s.split("-")); return datetime.date(y, m, d).toordinal()

V = defaultdict(list)       # kid -> [(f,t,nokta)]
for y in Y:
    for x in y["v"]:
        if x.get("kid"): V[x["kid"]].append((o(x["f"]), o(x["t"]), y["ad"]))

satir = []
for y in Y:
    for x in y["s"]:
        k = x["d"]
        if k not in V: continue
        f, t = o(x["f"]), o(x["t"])
        # bu s: penceresinin, BAŞKA noktaların v:k pencereleriyle örtüşen günleri
        orts = []
        for (vf, vt, ad) in V[k]:
            if ad == y["ad"]: continue
            a, b = max(f, vf), min(t, vt)
            if b > a: orts.append((a, b))
        if not orts: continue
        orts.sort(); top = 0; son = None
        for a, b in orts:
            if son is None or a > son: top += b - a; son = b
            elif b > son: top += b - son; son = b
        satir.append({"nokta": y["ad"], "lat": y["lat"], "lon": y["lon"], "kimlik": k, "s_f": x["f"], "s_t": x["t"],
                      "v_ile_orten_gun": top, "yil": round(top / 365.25, 1),
                      "bu_noktanin_kendi_v_kaydi_var": any(ad == y["ad"] for (_, _, ad) in V[k])})
satir.sort(key=lambda r: -r["v_ile_orten_gun"])
per = defaultdict(lambda: [0, 0])
for r in satir: per[r["kimlik"]][0] += 1; per[r["kimlik"]][1] += r["v_ile_orten_gun"]
ozet = {"cift_temsil_nokta_pencere": len(satir), "farkli_nokta": len({r["nokta"] for r in satir}),
        "farkli_kimlik": len(per),
        "kimlik_bazinda": {k: {"nokta_pencere": v[0], "toplam_gun": v[1]} for k, v in sorted(per.items(), key=lambda kv: -kv[1][1])}}
io.open(os.path.join(BURASI, "denetim", "GOSTERIM-0075-CIFTTEMSIL.json"), "w", encoding="utf-8").write(
    json.dumps({"ozet": ozet, "ilk_80": satir[:80], "hepsi": satir}, ensure_ascii=False, indent=1))
print(json.dumps(ozet, ensure_ascii=False, indent=1)[:3000])
for r in satir[:30]:
    print("%-28s %-22s s:%s..%s  örtüşen %6d gün (%.1f yıl)" % (r["nokta"][:28], r["kimlik"][:22], r["s_f"], r["s_t"], r["v_ile_orten_gun"], r["yil"]))
