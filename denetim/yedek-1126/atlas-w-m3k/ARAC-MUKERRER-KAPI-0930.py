# -*- coding: utf-8 -*-
"""MUKERRER-KAPI-0930 — mükerrer ölçütünü TAM denetle.py koşturmadan ölçer.

denetle.py'yi modül olarak içe aktarır, yalnız `olaylari_yukle` +
`mukerrer_maddeler` çağrılır (tepesi küçük). Iki evren:
  CALISMA  : bugünkü data/
  HEAD     : `git show HEAD:data/<dosya>` ile geçici dizine yazılmış data/
Çalışma ağacına DOKUNMAZ (git stash YOK).

Kullanım:  py denetim/ARAC-MUKERRER-KAPI-0930.py [--sinav]
"""
import glob, io, os, subprocess, sys, tempfile, json

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
import denetle  # noqa: E402


def ihlaller(O):
    tum = denetle.mukerrer_maddeler(O)
    return [r for r in tum if r[4] == "başlık" or r[4].startswith("kişi!")]


def anahtar(r):
    return (r[2]["t"], r[2]["b"], r[3]["t"], r[3]["b"], r[4])


def head_dizini():
    d = tempfile.mkdtemp(prefix="mukkapi_")
    ls = subprocess.run(["git", "-C", KOK, "ls-tree", "--name-only", "HEAD", "data/"],
                        capture_output=True, text=True, encoding="utf-8").stdout.split()
    for yol in ls:
        ad = os.path.basename(yol)
        if not (ad.startswith("olaylar") or ad.startswith("kronoloji_sinir")):
            continue
        icerik = subprocess.run(["git", "-C", KOK, "show", f"HEAD:{yol}"],
                                capture_output=True).stdout
        open(os.path.join(d, ad), "wb").write(icerik)
    return d


def yukle(dizin):
    eski = denetle.DATA
    denetle.DATA = dizin
    try:
        return denetle.olaylari_yukle()
    finally:
        denetle.DATA = eski


def bas(r, on=""):
    a, b = r[2], r[3]
    print(f"{on}[{r[4]}] J={r[1]:.3f}")
    for x in (a, b):
        alan = {k: x.get(k) for k in ("t", "b", "d", "yer", "yer_id", "devlet",
                                       "kaynak", "_dosya") if x.get(k) is not None}
        print("     ", json.dumps(alan, ensure_ascii=False)[:400])
    print("      kelimeler:", sorted(denetle._kelimeler(a["b"]) & denetle._kelimeler(b["b"])))


UC_CIFT = [
    ("Batum'un geri alınışı", "Kerkük'ün geri alınışı"),
    ("Kerkük'ün İngiliz işgali", "Eskişehir'in İngilizlerce işgali"),
    ("Kerkük'ün İngiliz işgali", "Maraş'ın İngilizler tarafından işgali"),
]


def sinav():
    Oc = yukle(denetle.DATA)
    mc = ihlaller(Oc)
    print(f"CALISMA: {len(Oc)} madde · mükerrer {len(mc)} (tavan 114)")
    cift_c = {(r[2]["b"], r[3]["b"]) for r in mc}
    cift_c |= {c[::-1] for c in cift_c}
    # Yön 2: üç yanlış pozitif artık geçiyor mu — ve verideler mi (evren boş değil)
    basliklar = {o["b"] for o in Oc}
    for a, b in UC_CIFT:
        var = a in basliklar and b in basliklar
        print(f"Yön 2  veride={'EVET' if var else 'YOK ✗'}  "
              f"{'HÂLÂ ÖTÜYOR ✗' if (a, b) in cift_c else 'GEÇİYOR ✓'}  {a} ↔ {b}")
    # Yön 1: uydurma gerçek mükerrer enjekte et → ötmeli. İki örnek: biri
    # tam kopya, biri Kerkük'ün kendisi (BILINEN_AYRI'daki başlığın kopyası
    # yine yakalanmalı — muafiyet ÇİFT'e özgü, başlığa değil).
    for hedef in ("Kerkük'ün İngiliz işgali", None):
        ornek = (next(o for o in Oc if o["b"] == hedef) if hedef else
                 next(o for o in Oc if len(denetle._kelimeler(o["b"])) >= 3))
        sahte = dict(ornek)
        sahte["b"] = ornek["b"] + " (kopya)"
        m1 = ihlaller(Oc + [sahte])
        print(f"Yön 1 (enjekte mükerrer): {len(mc)} → {len(m1)}  "
              f"{'ÖTTÜ ✓' if len(m1) > len(mc) else 'ÖTMEDİ ✗'}  ({ornek['t']} {ornek['b'][:50]})")


def main():
    if "--sinav" in sys.argv:
        return sinav()
    Oc = yukle(denetle.DATA)
    hd = head_dizini()
    Oh = yukle(hd)
    mc, mh = ihlaller(Oc), ihlaller(Oh)
    print(f"CALISMA: {len(Oc)} madde · mükerrer {len(mc)}")
    print(f"HEAD   : {len(Oh)} madde · mükerrer {len(mh)}")
    kh = {anahtar(r) for r in mh}
    kc = {anahtar(r) for r in mc}
    yeni = [r for r in mc if anahtar(r) not in kh]
    giden = [r for r in mh if anahtar(r) not in kc]
    print(f"\nYENİ (çalışmada var, HEAD'de yok): {len(yeni)}")
    for r in yeni:
        bas(r, "  + ")
    print(f"\nGİDEN (HEAD'de var, çalışmada yok): {len(giden)}")
    for r in giden:
        bas(r, "  - ")


if __name__ == "__main__":
    main()
