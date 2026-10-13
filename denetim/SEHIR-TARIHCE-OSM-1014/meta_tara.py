import json, re, sys, glob, os
sys.stdout.reconfigure(encoding="utf-8")
DESEN = re.compile(r"atlas|dikiş|dikis|meta|künye geçişi", re.I)
for yol in sorted(glob.glob(os.path.join(sys.argv[1], "sonuc_*.json"))):
    for k in json.load(open(yol, encoding="utf-8")):
        for o in k.get("olay") or []:
            metin = " ".join(str(o.get(a) or "") for a in ("b", "k", "ic_not", "kaynak"))
            if DESEN.search(metin):
                tur = "KUNYE-GECISI" if re.search(r"künye geçişi", metin, re.I) else "SUPHELI"
                print(f"{os.path.basename(yol)} {k['id']} {o.get('t')} [{tur}] b={o.get('b')!r} kaynak={str(o.get('kaynak'))[:70]!r}")
