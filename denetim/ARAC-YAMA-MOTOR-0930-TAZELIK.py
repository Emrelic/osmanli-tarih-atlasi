# YAMA-MOTOR-0930 — bekleyen denetim/*.diff yamalarinin tazeligi.
# Her yamanin "+" satirlarini (bos/yorum-disi) bugunku dosyada arar;
# kac eklenen satirin ZATEN dosyada oldugunu ve "-" satirlarinin kacinin
# hala durdugunu sayar. git apply --check sonucundan bagimsiz ikinci olcum.
import re, sys, pathlib, subprocess

KOK = pathlib.Path(__file__).resolve().parent.parent
yamalar = sorted((KOK / "denetim").glob("*.diff"))

def parcala(metin):
    dosyalar = {}
    hedef = None
    for s in metin.splitlines():
        s = s.rstrip("\r")
        m = re.match(r'^\+\+\+ "?b/(.+?)"?$', s)
        if m:
            hedef = m.group(1)
            dosyalar.setdefault(hedef, {"arti": [], "eksi": []})
            continue
        if hedef is None or s.startswith("---"):
            continue
        if s.startswith("+") and s[1:].strip():
            dosyalar[hedef]["arti"].append(s[1:].strip())
        elif s.startswith("-") and s[1:].strip():
            dosyalar[hedef]["eksi"].append(s[1:].strip())
    return dosyalar

for y in yamalar:
    metin = y.read_bytes().decode("utf-8-sig", "replace")
    print("===", y.name)
    for hedef, d in parcala(metin).items():
        yol = KOK / hedef
        if not yol.exists():
            print("  ", hedef, "DOSYA YOK")
            continue
        govde = set(l.strip() for l in yol.read_text(encoding="utf-8", errors="replace").splitlines())
        a_var = sum(1 for l in d["arti"] if l in govde)
        # eksi satiri govdede yoksa kaldirilmis demektir; ama arti'da da
        # geciyorsa (tasinmis) ayirt edilemez -> ayri say
        e_duruyor = sum(1 for l in d["eksi"] if l in govde and l not in d["arti"])
        e_saf = sum(1 for l in d["eksi"] if l not in d["arti"])
        print("   %-28s +%d/%d dosyada   -%d/%d hala duruyor" % (
            hedef, a_var, len(d["arti"]), e_duruyor, e_saf))
