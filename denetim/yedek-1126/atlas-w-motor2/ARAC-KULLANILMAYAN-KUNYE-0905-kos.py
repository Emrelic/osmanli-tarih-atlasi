# -*- coding: utf-8 -*-
"""`ARAC-KULLANILMAYAN-KUNYE-0905.js`i GERÇEK girdi dosyalarıyla koşturur.

Dosya listesi ELLE YAZILMAZ — `girdi.GIRDI_DOSYALARI` çağrılır (`§5`).
⚠️ Liste ÇIPLAK dosya adı taşır (`yerlesimler.js`), yol değil; önek burada
eklenir ve JS tarafı bulamadığı her dosyayı ADIYLA bildirir — bir tarama
sessizce eksik koşarsa "0" çıkar ve *0, "yok" ile "bakmadım"ı ayırmaz.*
"""
import json, os, subprocess, sys, tempfile

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

rel = []
for f in girdi.GIRDI_DOSYALARI:
    f = str(f).replace("\\", "/")
    if f.startswith(KOK.replace("\\", "/")):
        f = f[len(KOK) + 1:]
    if "/" not in f:
        f = "data/" + f
    rel.append(f)
print("girdi.GIRDI_DOSYALARI: %d dosya" % len(rel))

t = os.path.join(tempfile.gettempdir(), "_kullanilmayan_dosyalar.json")
with open(t, "w", encoding="utf-8") as f:
    json.dump(rel, f)

js = os.path.join(KOK, "denetim", "ARAC-KULLANILMAYAN-KUNYE-0905.js")
r = subprocess.run(["node", js, KOK, t], capture_output=True, text=True,
                   encoding="utf-8", errors="replace", timeout=900)
try:
    print(r.stdout)
except Exception:
    print(r.stdout.encode("ascii", "replace").decode("ascii"))
if r.returncode != 0:
    print("HATA:", (r.stderr or "")[:600])
sys.exit(r.returncode)
