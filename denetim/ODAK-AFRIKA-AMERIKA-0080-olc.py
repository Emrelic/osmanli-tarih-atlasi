# -*- coding: utf-8 -*-
"""ODAK-AFRIKA-AMERIKA-0080 — odak önerisi ÖLÇÜM yardımcısı (yalnız okur).

app.js `maddeOdakKutusu` + js/suzgec.js `sahipAnahtari`/`sahipKimlikte`
mantığının Python karşılığı. Uygulayıcı betik (`-uygula.py`) bu modülü
çağırıp her öneriyi app'in GERÇEKTEN çözebileceğine karşı sınar:

  · yer_id / odak_yer  → `sehirler` evreninde BİREBİR ad ya da " (" öncesi
  · odak_kimlik        → madde GÜNÜNDE sahibi bu kimliklerden biri olan
                          yerleşim sayısı ≥ 2 (app.js:11751)
  · kimlik gerçekten `data/devletler.js`te `id:` mi (D215)

Evren: `girdi.yukle()` (odak_olc.py ile AYNI — CLAUDE.md §5).
Tek başına koşunca: py denetim/ODAK-AFRIKA-AMERIKA-0080-olc.py <kimlik> <YYYY-MM-DD>
"""
import os
import re
import sys
import json
import subprocess
import unicodedata

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

_Y = None
_K = None


def yerlesimler():
    global _Y
    if _Y is None:
        import girdi
        _Y = [y for y in girdi.yukle(sessiz=True)
              if (y.get("d") or y.get("v") or y.get("s"))]   # ISARET_KAYNAK süzgeci
    return _Y


def kunyeler():
    """data/devletler.js → {id: kayıt}; node ile (odak_olc._oku kalıbı)."""
    global _K
    if _K is None:
        betik = ("global.window={};eval(require('fs').readFileSync(process.argv[1],'utf8'));"
                 "process.stdout.write(JSON.stringify((window.DEVLETLER||[]).map(function(d){"
                 "return {id:d.id,ad:d.ad,harita:d.harita,f:d.f,t:d.t}})));")
        r = subprocess.run(["node", "-e", betik, os.path.join(KOK, "data", "devletler.js")],
                           capture_output=True, text=True, encoding="utf-8")
        if r.returncode != 0:
            raise SystemExit("devletler.js okunamadı: " + r.stderr[:300])
        _K = {d["id"]: d for d in json.loads(r.stdout) if d.get("id")}
    return _K


def havuz():
    h = set()
    for y in yerlesimler():
        ad = y.get("ad")
        if ad:
            h.add(ad)
            h.add(ad.split(" (")[0])
    return h


def konum(ad):
    for y in yerlesimler():
        a = y.get("ad") or ""
        if a == ad or a.split(" (")[0] == ad:
            return (y.get("lat"), y.get("lon"), a)
    return None


# ---- suzgec.js birebir -------------------------------------------------------
def sg_norm(s):
    s = "" if s is None else str(s)
    for a, b in (("İ", "i"), ("I", "i"), ("ı", "i"), ("Ş", "s"), ("ş", "s"), ("Ğ", "g"),
                 ("ğ", "g"), ("Ü", "u"), ("ü", "u"), ("Ö", "o"), ("ö", "o"), ("Ç", "c"),
                 ("ç", "c"), ("Â", "a"), ("â", "a"), ("Î", "i"), ("î", "i"), ("Û", "u"), ("û", "u")):
        s = s.replace(a, b)
    s = unicodedata.normalize("NFD", s)
    s = re.sub("[̀-ͯ]", "", s)
    s = s.lower()
    s = re.sub("['‘’`ʼ]", "", s)
    return re.sub(r"\s+", " ", s).strip()


_SG_GENEL = re.compile(r"(^| )(buyuk dukaligi|kralligi|krallik|imparatorlugu|hanligi|hanedani|"
                       r"hanedanligi|cumhuriyeti|prensligi|dukaligi|beyligi|sultanligi|devleti|"
                       r"voyvodaligi|emirligi|carligi|kontlugu|despotlugu|seyhligi|konfederasyonu|"
                       r"monarsisi|serifligi|sehir devleti)(?= |$)")


def kunye_cekirdek(ad):
    s = sg_norm(str(ad or "").split(" (")[0])
    s = _SG_GENEL.sub(" ", s)
    return re.sub(r"\s+", " ", s).strip()


def sahip_anahtari(y, gs):
    for p in y.get("d") or []:
        if p["f"] <= gs < p["t"]:
            return "osmanli"
    for p in y.get("v") or []:
        if p["f"] <= gs < p["t"]:
            return "tabi:" + (p.get("kid") or "")
    for p in y.get("s") or []:
        if p["f"] <= gs < p["t"]:
            return "s:" + p["d"]
    return ""


def aktif_v_adi(y, gs):
    for p in y.get("v") or []:
        if p["f"] <= gs < p["t"]:
            return p.get("k") or ""
    return ""


def sahip_kimlikte(key, vk, ids, kix):
    if not key:
        return False
    for i in ids:
        kn = kix.get(i)
        h = kn and kn.get("harita")
        if i == "osmanli" and (key == "osmanli" or key.startswith("tabi:")):
            return True
        if key in ("tabi:" + i, "s:" + i) or (h and key in ("s:" + h, "tabi:" + h)):
            return True
        if key == "tabi:" and vk and kn:
            c = kunye_cekirdek(kn.get("ad"))
            if c and sg_norm(vk).startswith(c):
                return True
    return False


def kimlik_yerlesim(ids, gs):
    """(n, [adlar]) — app.js:11744 döngüsü."""
    kix = kunyeler()
    adlar = []
    for y in yerlesimler():
        if not isinstance(y.get("lat"), (int, float)) or not isinstance(y.get("lon"), (int, float)):
            continue
        if sahip_kimlikte(sahip_anahtari(y, gs), aktif_v_adi(y, gs), ids, kix):
            adlar.append(y["ad"])
    return len(adlar), adlar


if __name__ == "__main__":
    ids = sys.argv[1].split(",")
    gs = sys.argv[2]
    k = kunyeler()
    for i in ids:
        print(i, "KÜNYE VAR" if i in k else "🔴 KÜNYE YOK", k.get(i))
    n, a = kimlik_yerlesim(ids, gs)
    print(gs, n, a[:15])
