# -*- coding: utf-8 -*-
"""C1 ikinci yarisi: gun.py `negatif_yil_kapisi` KAPISINI denetle.py main()'e baglar
(cagirani olmayan kapi sorunu: gun.py'yi import eden yoktu, kapi hic calismiyordu).
Kullanim: py denetim/ARAC-C1-KAPI-BAGLA-1018.py  (ARAC-C1-DENETLE-UYGULA'dan SONRA)."""
import sys
YOL = "arac/denetle.py"
raw = open(YOL, "rb").read()
bom = raw[:3] == b"\xef\xbb\xbf"
s = raw.decode("utf-8-sig")


def degistir(eski, yeni):
    global s
    if s.count(eski) != 1:
        sys.exit("ESLESME %d: %r" % (s.count(eski), eski[:80]))
    s = s.replace(eski, yeni)


degistir('''def main():
    ap = argparse.ArgumentParser(description="Üç değişmezi tek komutta denetler.")''',
         '''def negatif_yil_kapisi_calistir(Y, O):
    """GUN-SAYACI C1: veride yil <= 0 (MO) var + motor sayacsiz (uret_petek.py `GUN_SAYACI = True`
    yok) => harita OLCULEMEZ (motor dizgi kiyaslar: ters sirali MO donemi SESSIZ sahipsizlik uretir).
    Okunamayan tarih de olculemedi'dir. Hukum: OLCULEMEDI_KOVA => cikis 2 (temiz degildir)."""
    tarihler = []
    for y in Y:
        for kat in ("s", "d", "v"):
            for p in y.get(kat) or []:
                for a in ("f", "t"):
                    if p.get(a):
                        tarihler.append(("%s.%s.%s" % (y["ad"], kat, a), p[a]))
        for a in ("kur", "bit"):
            if y.get(a):
                tarihler.append(("%s.%s" % (y["ad"], a), y[a]))
    for o in O:
        if o.get("t"):
            tarihler.append(("olay %s" % str(o.get("b", ""))[:40], o["t"]))
    try:
        sayacli = _gun.motor_sayacli_mi(os.path.join(KOK, "arac", "uret_petek.py"))
    except OSError as e:
        olculemedi("negatif yıl kapısı", "uret_petek.py okunamadı: %s" % e)
        return
    durum, satir = _gun.negatif_yil_kapisi(tarihler, sayacli)
    print("Negatif yıl kapısı  %s  %d tarih, motor %s"
          % ("✓" if durum == "TAMAM" else "!", len(tarihler), "SAYAÇLI" if sayacli else "sayaçsız"))
    if durum != "TAMAM":
        olculemedi("negatif yıl kapısı", "%d kalem: %s" % (len(satir), " | ".join(satir[:3])))


def main():
    ap = argparse.ArgumentParser(description="Üç değişmezi tek komutta denetler.")''')
degistir('''    print(f"  {len(Y)} yerleşim, {len(O)} kronoloji maddesi\\n")

    ihlal = False
''', '''    print(f"  {len(Y)} yerleşim, {len(O)} kronoloji maddesi\\n")
    negatif_yil_kapisi_calistir(Y, O)

    ihlal = False
''')
open(YOL, "wb").write((b"\xef\xbb\xbf" if bom else b"") + s.encode("utf-8"))
print("tamam")
