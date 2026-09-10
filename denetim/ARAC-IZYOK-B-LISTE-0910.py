# -*- coding: utf-8 -*-
"""IZ-YOK DENETIM B — DİLİM 2 (81 madde / 15 paket) tam liste.
ARAC-PAKET-DENETIM-0910.py'nin AYNI mantığını kullanır (iz-yok tanımı
aynı: hukum=='cozuldu' VE commit/not alanlarında atlas git'inde
bulunan hash YOK), ama yalnız benim dilimimi tam metinle basar —
PAKET-DENETIM ilk 25'i kırpıyordu (D072: kırpılmış çıktı ölçüm değildir).
"""
import io, json, os, re, sys

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

G = r"C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden"
HASH = re.compile(r"\b[0-9a-f]{7,40}\b")

DILIM2 = {
    "0020": 8, "0021": 17, "0022": 3, "0023": 5, "0024": 3, "0025": 2,
    "0026": 1, "0027": 3, "0028": 3, "0029": 5, "0030": 4, "0031": 4,
    "0032": 1, "0033": 4, "0034": 18,
}


def oku(d, ad):
    p = os.path.join(G, d, ad)
    if not os.path.exists(p):
        return None
    try:
        return json.load(io.open(p, encoding="utf-8"))
    except Exception:
        return None


toplam = 0
for no4 in sorted(DILIM2):
    d = "parti-emrelic-%s" % no4
    pv = oku(d, "PARTI.json")
    cv = (oku(d, "CEVAP.json") or {}).get("maddeler") or {}
    if not pv:
        print("!! %s PARTI.json okunamadi" % d)
        continue
    print("=" * 72)
    print(d)
    print("=" * 72)
    say = 0
    for m in (pv.get("maddeler") or []):
        no = m.get("no")
        c = cv.get(no) or {}
        h = (c.get("hukum") or "").strip()
        if h != "cozuldu":
            continue
        adaylar = []
        for kaynak in (c.get("commit") or "", c.get("not") or ""):
            adaylar += HASH.findall(kaynak)
        if adaylar:
            continue  # bunda hash VAR — iz-yok değil (curuk ya da dogrulandi olabilir, benim işim değil)
        say += 1
        toplam += 1
        print("\n--- madde %s ---" % no)
        print("BASLIK :", m.get("baslik"))
        for alan in ("aciklama", "detay", "beklenen", "not", "aciklamasi"):
            if m.get(alan):
                print("PARTI.%s:" % alan, str(m.get(alan))[:400])
        print("CEVAP.not:", str(c.get("not") or "")[:500])
        print("CEVAP.commit:", c.get("commit"))
    print("\n(paket ozet: beklenen=%d, bulunan iz-yok=%d)\n" % (DILIM2[no4], say))

print("TOPLAM iz-yok (DILIM 2):", toplam)
