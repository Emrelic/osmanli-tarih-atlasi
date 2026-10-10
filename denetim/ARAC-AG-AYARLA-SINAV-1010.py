# -*- coding: utf-8 -*-
"""--uret kolunun IKI YONLU sinavi. Gercek ag.json'a DOKUNMAZ."""
import io
import json
import os
import shutil
import subprocess
import sys
import tempfile

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
ALET = r"C:\atlas\arac\ag_ayarla.py"
S = os.path.join(tempfile.gettempdir(), "ag_uret_sinav")
shutil.rmtree(S, ignore_errors=True)
os.makedirs(os.path.join(S, "oturumlar"))
T = os.path.join(S, "oturumlar", "ag.json")


def kos(*ek):
    p = subprocess.run([sys.executable, ALET, "--yol", T] + list(ek),
                       capture_output=True, text=True, encoding="utf-8")
    return p.returncode, (p.stdout or "") + (p.stderr or "")


def jeton():
    with io.open(T, encoding="utf-8") as f:
        return json.load(f)["jeton"]


gecti = kirik = 0


def sina(ad, kosul, ek=""):
    global gecti, kirik
    if kosul:
        gecti += 1
        print("  ✓ %s %s" % (ad, ek))
    else:
        kirik += 1
        print("  🔴 %s %s" % (ad, ek))


print("① --uret yazar ve cikis 0 verir")
kod, c1 = kos("--uret")
sina("cikis 0", kod == 0, "(kod=%d)" % kod)
sina("dosya olustu", os.path.exists(T))
j1 = jeton()
sina("jeton 43 karakter", len(j1) == 43, "(%d)" % len(j1))
sina("sunucu adresi yazildi", "100.108.173.121" in open(T, encoding="utf-8").read())

print("② 🔴 EN ONEMLI: TAM JETON EKRANA BASILMAZ")
sina("tam jeton ciktida 0 kez", c1.count(j1) == 0, "(%d kez)" % c1.count(j1))
sina("son 4 hane maskede VAR", j1[-4:] in c1)
sina("uyari yazili", "SOHBETE YAPISTIRMA" in c1)

print("③ iki uretim AYRI jeton verir (secrets, random degil)")
kos("--uret")
j2 = jeton()
sina("j1 != j2", j1 != j2)

print("④ eski kipler bozulmadi")
kod, c = kos("--goster")
sina("--goster cikis 0", kod == 0, "(kod=%d)" % kod)
sina("--goster de maskeli", c.count(j2) == 0)
kod, _ = kos("--jeton", "kisa")
sina("kisa jeton RED (cikis 2)", kod == 2, "(kod=%d)" % kod)
kod, _ = kos("--jeton", "A" * 20)
sina("gecerli jeton YAZILIR (cikis 0)", kod == 0, "(kod=%d)" % kod)
sina("elle yazilan jeton tuttu", jeton() == "A" * 20)

print("⑤ TERS YON: --uret, mevcut `makineler` alanini EZMEZ")
d = json.load(io.open(T, encoding="utf-8"))
d["makineler"] = {"lab": "100.108.173.121", "havva": "100.76.50.111"}
json.dump(d, io.open(T, "w", encoding="utf-8"), ensure_ascii=False)
kos("--uret")
d2 = json.load(io.open(T, encoding="utf-8"))
sina("makineler korundu", len(d2.get("makineler") or {}) == 2,
     "(%d)" % len(d2.get("makineler") or {}))
sina("jeton yenilendi", d2["jeton"] != "A" * 20)

shutil.rmtree(S, ignore_errors=True)
print()
print("GECTI %d · KIRIK %d" % (gecti, kirik))
sys.exit(1 if kirik else 0)
