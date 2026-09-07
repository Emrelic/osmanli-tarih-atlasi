# -*- coding: utf-8 -*-
"""
SINIR-BALKAN-0907 · KABUL SINAVI
Sartnamenin kendi olcutu: "bunu bir `if` ile sorabiliyor muyum?"
C13: GECME (kusursuz kayitta susuyor mu) + ATESLEME (bozuk kayitta otuyor mu)
     + GIRDI (dosyadan okuma yolu kosuldu mu) + CIKTI (cevabi dogru yerden mi okudum)
"""
import json, os, io, sys, copy
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "denetim", "SINIR-HUKUKI-BALKAN-0907.json")

ZORUNLU = ["a", "b", "hal", "degisim_sinifi", "ne_degisti", "dayanak", "dayanak_t",
           "kaynak", "oncul_damgasi", "gc", "t_cinsi", "kimlik_1923_a", "kimlik_1923_b"]
GECERLI_HAL = {"hukuki", "bulunamadi", "olculemedi"}


def denetle(kenarlar):
    """Kusur listesi dondurur. BOS liste = TEMIZ."""
    kusur = []
    for i, e in enumerate(kenarlar):
        ad = "%s|%s" % (e.get("a"), e.get("b"))
        for alan in ZORUNLU:
            if alan not in e:
                kusur.append("ALAN YOK: %s -> %s" % (ad, alan))
        if e.get("hal") not in GECERLI_HAL:
            kusur.append("HAL GECERSIZ: %s -> %r" % (ad, e.get("hal")))
        if e.get("a") and e.get("b") and e["a"] > e["b"]:
            kusur.append("ANAHTAR ALFABETIK DEGIL: %s" % ad)
        # hal <-> sinif tutarliligi
        s, h = e.get("degisim_sinifi"), e.get("hal")
        if s == "degismedi" and h != "hukuki":
            kusur.append("TUTARSIZ: %s degismedi ama hal=%s" % (ad, h))
        if s == "olculemedi" and h != "olculemedi":
            kusur.append("TUTARSIZ: %s olculemedi ama hal=%s" % (ad, h))
        if s == "degismedi" and e.get("ne_degisti") is not False:
            kusur.append("TUTARSIZ: %s degismedi ama ne_degisti=%r" % (ad, e.get("ne_degisti")))
        # hukuki bir kayit KAYNAKSIZ olamaz
        if h == "hukuki" and (not e.get("kaynak") or e["kaynak"] == "bulunamadi"):
            kusur.append("KAYNAKSIZ HUKUKI: %s" % ad)
        # geometri
        gc = e.get("gc") or []
        if not gc or any(len(p) < 2 for p in gc):
            kusur.append("GEOMETRI BOZUK: %s" % ad)
        for p in gc:
            for c in p:
                if len(c) != 2 or not (-180 <= c[0] <= 180) or not (-90 <= c[1] <= 90):
                    kusur.append("KOORDINAT DISI: %s" % ad); break
    return kusur


if __name__ == "__main__":
    # ③ GIRDI — gercek kaynaktan (dosyadan) okuma yolu KOSULUYOR
    with open(YOL, encoding="utf-8") as f:
        d = json.load(f)
    K = d["kenarlar"]
    print("GIRDI  : dosyadan %d kenar okundu (%d bayt)" % (len(K), os.path.getsize(YOL)))

    # ① GECME
    kusur = denetle(K)
    print("GECME  : %s" % ("TEMIZ ✓" if not kusur else "🔴 %d kusur" % len(kusur)))
    for x in kusur[:20]:
        print("    ", x)

    # ② ATESLEME — HER dal icin AYRI AYRI zorlanir
    print("ATESLEME:")
    daller = [
        ("alan yok", lambda e: e.pop("kaynak", None)),
        ("hal gecersiz", lambda e: e.update(hal="temiz")),
        ("anahtar ters", lambda e: e.update(a="Zzz", b="Aaa")),
        ("hal<->sinif tutarsiz", lambda e: e.update(degisim_sinifi="degismedi", hal="bulunamadi")),
        ("ne_degisti tutarsiz", lambda e: e.update(degisim_sinifi="degismedi", hal="hukuki", ne_degisti=True)),
        # 🔴 BU DAL ILK SURUMDE YANLIS SEBEPLE OTTU: kayit `olculemedi` sinifindaydi,
        #    ve once TUTARSIZ kurali otuyordu -> "kaynaksiz hukuki" dali HIC kosulmadi
        #    ama "OTTU" gorundu. §11: bir dalin otmesi, O DALIN otmesi demek degil.
        #    Duzeltme: sinifi de uyumlu hale getir, boylece TEK kalan kusur bu olsun.
        ("kaynaksiz hukuki", lambda e: e.update(degisim_sinifi="degismedi", hal="hukuki",
                                                ne_degisti=False, kaynak="bulunamadi")),
        ("geometri bos", lambda e: e.update(gc=[])),
        ("koordinat disi", lambda e: e.update(gc=[[[999.0, 0.0], [1.0, 1.0]]])),
    ]
    hepsi_otti = True
    for ad, boz in daller:
        sahte = copy.deepcopy(K[:1])
        boz(sahte[0])
        r = denetle(sahte)
        ok = len(r) > 0
        hepsi_otti = hepsi_otti and ok
        print("    %-24s %s" % (ad, ("OTTU ✓  " + r[0][:60]) if ok else "🔴 SESSIZ"))

    # ④ CIKTI — sartnamenin kendi `if` sinavi
    print("CIKTI  : sartnamenin `if` sinavi")
    for h in ["hukuki", "bulunamadi", "olculemedi"]:
        print("    hal == %-12s -> %d" % (h, len([e for e in K if e["hal"] == h])))
    print("    ic_sinir_1923 == True  -> %d" %
          len([e for e in K if e.get("ic_sinir_1923")]))
    print("    ne_degisti is None     -> %d  (olculemedi)" %
          len([e for e in K if e.get("ne_degisti") is None]))
    print("    oncul_damgasi == 'D'   -> %d  (devraldim, DOGRULANMADI)" %
          len([e for e in K if e.get("oncul_damgasi") == "D"]))
    print("    bolge_disi_uc == True  -> %d" %
          len([e for e in K if e.get("bolge_disi_uc")]))

    cikis = 0 if (not kusur and hepsi_otti) else 1
    print()
    print("SONUC  :", "GECTI" if cikis == 0 else "KALDI")
    sys.exit(cikis)
