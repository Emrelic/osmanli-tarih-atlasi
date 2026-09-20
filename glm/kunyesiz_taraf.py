# -*- coding: utf-8 -*-
# glm/kunyesiz_taraf.py — GLM-5 · KUNYESIZ-TARAF (M-4663).
# Koşum: py -X utf8 glm/kunyesiz_taraf.py   (depo kökünden)
# Çıktı : glm/KUNYESIZ-TARAF.json + glm/KUNYESIZ-TARAF.md
#
# SORU: D katmanında (d_sinirlar*.js) taraf GEÇİP data/devletler.js'te künyesi
# OLMAYAN 13 taraf id var (GLM-1 ölçümü). Her biri için künye ADAYI ara:
# ad/harita:/bolge: alanlarında. Aday bulunursa id + neden (ad eşleşmesi,
# pencere 1923-10-29'u kapsıyor mu); bulunamazsa "bulunamadı".
# 🔴 YENİ KÜNYE UYDURULMAZ — yalnız ölçüm.
# Ayrıca: abd × ingiliz-kuzey-amerika / kanada üçlüsü aynı tabloda.

import glob
import importlib.util
import json
import os
import re
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GLM = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(KOK, "arac"))

import girdi  # noqa: E402

_spec = importlib.util.spec_from_file_location(
    "arac_normal", os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py"))
_arac_normal = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_arac_normal)
norm = _arac_normal.norm

G = "1923-10-29"
KUNYELER = girdi.oku_devletler()

# GLM-1 ölçümündeki 13 id (glm/D1923-OLCUM.json kapsam bölümü)
D1923 = json.load(open(os.path.join(GLM, "D1923-OLCUM.json"), encoding="utf-8"))
TARAFLAR = D1923["kapsam"]["d_kaydinda_gecip_kunyesi_olmayan_taraf_idleri"]

# D katmanında kullanım sayısı (d_sinirlar*.js metninde '"<id>"' geçişi)
D_METIN = {}
for yol in sorted(glob.glob(os.path.join(KOK, "data", "d_sinirlar*.js"))):
    ad = os.path.basename(yol)
    D_METIN[ad] = open(yol, encoding="utf-8").read()

def d_kullanim(tid):
    """(toplam, {dosya: sayı}) — taraf id'nin D katmanındaki geçişleri."""
    top, per = 0, {}
    for ad, metin in D_METIN.items():
        n = metin.count('"%s"' % tid)
        if n:
            per[ad] = n
            top += n
    return top, per

def pencere_kapsiyor(k):
    f, t = k.get("f"), k.get("t")
    return bool(f) and f <= G and (not t or t >= G)

GENEL_KELIME = {"cumhuriyeti", "cumhuriyet", "sultanligi", "imparatorlugu",
                "kralligi", "krallik", "hanedani", "eyaleti", "dominyonu",
                "mandasi", "birligi", "birlik", "devleti"}

def adaylar(tid):
    """aday: harita birebir > ad tam ifade > ad TÜM anlamlı kelimeyi içeriyor.
    kismi_bag: id'nin ilk kelimesi künye adının ilk kelimesine eşit (ANA DEVLET
    adayı — koloni/kendisi DEĞİL). Tek genel kelime ('ingiliz', 'cumhuriyeti')
    aday SAYILMAZ: birinci koşumda ölçüldü, gürültü üretiyor."""
    fraz = norm(tid.replace("-", " "))
    kelimeler = [w for w in fraz.split() if len(w) >= 4]
    anlamli = [w for w in kelimeler if w not in GENEL_KELIME] or kelimeler
    ilk = fraz.split()[0] if fraz.split() else ""
    out, kismi = {}, {}
    for k in KUNYELER:
        nedenler = []
        if (k.get("harita") or "") == tid:
            nedenler.append("harita: birebir")
        kad = norm(k.get("ad") or "")
        if fraz and fraz in kad:
            nedenler.append("ad tam ifade içeriyor")
        elif anlamli and all(w in kad for w in anlamli):
            nedenler.append("ad tüm anlamlı kelimeleri içeriyor (%s)" % " ".join(anlamli))
        if nedenler:
            out[k["id"]] = {
                "ad": k.get("ad"), "neden": " + ".join(nedenler),
                "f": k.get("f"), "t": k.get("t"),
                "pencere_1923_kapsiyor": pencere_kapsiyor(k),
                "harita": k.get("harita"), "bolge": k.get("bolge"),
            }
        elif len(ilk) >= 5 and kad.split() and kad.split()[0] == ilk:
            kismi[k["id"]] = {
                "ad": k.get("ad"), "neden": "ilk kelime eşit — ana devlet ya da kardeş koloni (aday DEĞİL)",
                "f": k.get("f"), "t": k.get("t"),
                "pencere_1923_kapsiyor": pencere_kapsiyor(k),
            }
    return out, dict(list(kismi.items())[:6])

RAPOR = {"gorev": "GLM-5 · KUNYESIZ-TARAF", "betik": "glm/kunyesiz_taraf.py",
         "kaynak_liste": "glm/D1923-OLCUM.json kapsam.d_kaydinda_gecip_kunyesi_olmayan_taraf_idleri",
         "kunya_evreni": len(KUNYELER), "gun": G,
         "tanimlar": {
             "aday": "harita: birebir > ad tam ifade > ad tüm anlamlı kelime (≥4 harf) > tek anahtar kelime (≥5 harf); norm düzleminde (ARAC-NORMAL-0903)",
             "pencere_1923": "f <= 1923-10-29 <= t (pencere ucu GÜNÜ DAHİL — M-4656)",
             "uydurma": "YOK — yalnız mevcut künyeler arasında aday; künye yazılmaz",
         },
         "taraf_iktibas": "D katmanı kullanım sayısı d_sinirlar*.js metninde \"<id>\" geçişidir (taraflar dizisi + olası not geçişleri)",
         "tarflar": {}}

for tid in TARAFLAR:
    top, per = d_kullanim(tid)
    ad, kismi = adaylar(tid)
    RAPOR["tarflar"][tid] = {
        "d_kullanim": top, "d_dosyalar": per,
        "adaylar": ad, "kismi_bag": kismi,
        "sonuc": ("aday: " + ", ".join(sorted(ad))) if ad else "bulunamadı",
    }

# abd × ingiliz-kuzey-amerika / kanada üçlüsü (M-4663)
uc = {}
for tid in ["abd", "ingiliz-kuzey-amerika", "kanada"]:
    k = [x for x in KUNYELER if x["id"] == tid]
    top, per = d_kullanim(tid)
    uc[tid] = {
        "kunya_var": bool(k),
        "ad": k[0].get("ad") if k else None,
        "f": k[0].get("f") if k else None, "t": k[0].get("t") if k else None,
        "pencere_1923_kapsiyor": pencere_kapsiyor(k[0]) if k else None,
        "d_kullanim": top, "d_dosyalar": per,
    }
RAPOR["abd_ikut_amerika_kanada"] = uc
RAPOR["not_ikili"] = ("M-4665(önceki GLM-1 ek): abd×ingiliz-kuzey-amerika sınırının D kaydı taraf adı "
                      "'kanada'dır — künye penceresi farkı çifti kayıtsız gösterebilir; hüküm koordinatörün")

with open(os.path.join(GLM, "KUNYESIZ-TARAF.json"), "w", encoding="utf-8") as f:
    json.dump(RAPOR, f, ensure_ascii=False, indent=1)

# ── md ──────────────────────────────────────────────────────────────────────
L = []
L.append("# GLM-5 · KUNYESIZ-TARAF — D katmanında künyesiz 13 taraf id")
L.append("")
L.append("- Betik: `glm/kunyesiz_taraf.py` · JSON: `glm/KUNYESIZ-TARAF.json`")
L.append("- Künye evreni: `girdi.oku_devletler()` = %d künye · pencere testi `f <= 1923-10-29 <= t`" % len(KUNYELER))
L.append("- 🔴 Yeni künye UYDURULMAZ — yalnız mevcut künyeler arasında aday aranır.")
L.append("")
L.append("| taraf id | D kullanım | aday id | aday ad | neden | pencere | 1923 |")
L.append("|---|---|---|---|---|---|---|")
for tid in TARAFLAR:
    r = RAPOR["tarflar"][tid]
    if r["adaylar"]:
        for x, a in sorted(r["adaylar"].items()):
            L.append("| `%s` | %d | `%s` | %s | %s | %s → %s | %s |" % (
                tid, r["d_kullanim"], x, a["ad"], a["neden"], a["f"], a["t"],
                "✓" if a["pencere_1923_kapsiyor"] else "✗"))
    else:
        L.append("| `%s` | %d | — | **bulunamadı** | — | — | — |" % (tid, r["d_kullanim"]))
    for x, a in sorted(r.get("kismi_bag", {}).items()):
        L.append("| `%s` | %d | `%s` | %s | %s | %s → %s | %s |" % (
            tid, r["d_kullanim"], x, a["ad"], "(kısmi bağ) " + a["neden"],
            a["f"], a["t"], "✓" if a["pencere_1923_kapsiyor"] else "✗"))
L.append("")
L.append("## abd × ingiliz-kuzey-amerika / kanada üçlüsü")
L.append("")
L.append("| id | künye | ad | pencere | 1923 kapsar | D kullanım |")
L.append("|---|---|---|---|---|---|")
for tid, u in uc.items():
    L.append("| `%s` | %s | %s | %s → %s | %s | %d |" % (
        tid, "var" if u["kunya_var"] else "YOK", u["ad"] or "—",
        u["f"] or "?", u["t"] or "?",
        ("✓" if u["pencere_1923_kapsiyor"] else "✗") if u["kunya_var"] else "—",
        u["d_kullanim"]))
L.append("")
L.append("- " + RAPOR["not_ikili"] + ".")
with open(os.path.join(GLM, "KUNYESIZ-TARAF.md"), "w", encoding="utf-8") as f:
    f.write("\n".join(L) + "\n")

print("taraf:", len(TARAFLAR), "| kunye evreni:", len(KUNYELER))
for tid in TARAFLAR:
    r = RAPOR["tarflar"][tid]
    print("%-28s D:%3d -> %s" % (tid, r["d_kullanim"], r["sonuc"][:100]))
print("uc:", {t: (u["kunya_var"], u["pencere_1923_kapsiyor"], u["d_kullanim"]) for t, u in uc.items()})
print("yazildi: glm/KUNYESIZ-TARAF.json · glm/KUNYESIZ-TARAF.md")
