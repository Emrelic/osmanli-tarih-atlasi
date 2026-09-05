# -*- coding: utf-8 -*-
"""`denetim/yer_yama_*.js` YAMALARINI UYGULAYICININ GÖZÜYLE SINAR.

🔴 NİÇİN (5 Eylül 2026): altı oturum gece boyunca nokta/sahiplik yaması
yazdı — hepsi `denetim/*.json` olarak. Sonra ölçüldü:
`arac/_sahiplik_uygula.py` yalnız `data/yer_yama*.js` okuyor ve
`denetim/*.json`u **HİÇ GÖRMÜYOR** ⇒ koşu bitince gecenin bütün nokta işi
sessizce atlanacaktı. Kusur işçilerde değil sevkte: *"denetim/ altına yama
yaz"* denmişti, **hangi biçimde denmemişti.**

⇒ Biçim şartnamesi verildi (tahta M-2776) ve bu betik onun SINAVIDIR:
dosya `data/`ye taşınmadan ÖNCE, uygulayıcının koyduğu şartları sorar.

NE SORAR — şartlar `_sahiplik_uygula.py` kaynağından okundu:
    ① `window.YER_YAMA_<AD>` bir DİZİ mi
    ② her kayıtta `ad:` var mı
    ③ `d·s·v·isg` DİZİ · `m·kaynak·bos·neden·not` DİZGİ mi
    ④ `ad:` atlasta BİREBİR var mı — yoksa YENİ nokta demektir ve
       uygulayıcı onu EKLEYEMEZ (elle `yerlesimler_*.js`e girer)
    ⑤ ad BELİRSİZ mi (birden çok kayıtta) — uygulayıcı böylesini ATLAR
    ⑥ `bos:` beş sözlükten biri mi (devletsiz|veri-yok|kabile|insansiz|hata)
    ⑦ uygulayıcının TAŞIMADIĞI alan var mı (lat/lon/tur/k/g gibi) —
       bunlar yeni nokta alanlarıdır, bir yamada durursa SESSİZCE DÜŞER

⚠️ "ATLASTA YOK" bir HATA DEĞİL, bir AYRIMDIR: yeni nokta ile mevcut kayda
   ek AYRI dosyalarda tutulur (`yer_yama_<ad>.js` ↔ `yer_yama_<ad>_yeni.js`).
   `1923 SINIRLARI` bunu doğru yaptı ve bu betik onu doğruladı.

KULLANIM:  py denetim/ARAC-YAMA-JS-SINA-0905-kos.py
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

t = os.path.join(tempfile.gettempdir(), "_yama_sina_dosyalar.json")
with open(t, "w", encoding="utf-8") as f:
    json.dump(rel, f)

js = os.path.join(KOK, "denetim", "ARAC-YAMA-JS-SINA-0905.js")
r = subprocess.run(["node", js, KOK, t], capture_output=True, text=True,
                   encoding="utf-8", errors="replace", timeout=900)
try:
    print(r.stdout)
except Exception:
    print(r.stdout.encode("ascii", "replace").decode("ascii"))
if r.returncode != 0:
    print("HATA:", (r.stderr or "")[:600])
sys.exit(r.returncode)
