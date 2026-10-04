# -*- coding: utf-8 -*-
"""KÜNYE × KRONOLOJİ KAPSAM ÖLÇÜSÜ (1004) — "bu künyeye değen kronoloji maddesi var mı?"

Evren: `girdi.oku_devletler()` (künyelerin TAMAMI) × `data/olaylar*.js` + `data/kronoloji*.js`.
Bağlama kuralı `denetim/krono_ortak_1004.py`nin başlığında (app.js:14196-14290'ı izler).

ÜÇ KOVA — biri ötekini GİZLEMEZ:
  A  harici kronolojide anılan
  B  yalnız KÜNYE İÇİ kronolojisi var (künyenin kendi `kronoloji:` dizisi; app.js:14163
     DEVLET ODAĞI bunu gösteriyor) ⇒ KUSUR DEĞİL, ayrı kova
  C  ikisi de yok = GERÇEK BOŞLUK

ÇIKIŞ KODU
  0  C boş YA DA C'nin her üyesi üyelik defterinde (tavan)
  1  C'ye defterde OLMAYAN bir künye girdi
  2  ÖLÇÜLEMEDİ (node yok · dosya yüklenmedi · defter yok · 0 künye/madde ...)

🔴 TAVAN SAYI DEĞİL ÜYELİKTİR: C'den biri çıkıp yerine başkası girerse sayı aynı kalır ve
   sayı tavanı sessiz kalırdı (D259). Defter `denetim/ARAC-KUNYE-KRONO-KAPSAM-1004.defter.txt`,
   satır = `dosya¦id` (dosya = künyenin yaşadığı dosya).
   Defterde olup C'de artık olmayan satır HATA DEĞİL: "tavan düştü, defteri daralt" notudur.

KULLANIM
  py denetim/ARAC-KUNYE-KRONO-KAPSAM-1004.py                 ölç, kapıyı uygula
  py denetim/ARAC-KUNYE-KRONO-KAPSAM-1004.py --ayrinti       kovaların üyelerini de yaz
  py denetim/ARAC-KUNYE-KRONO-KAPSAM-1004.py --defter-yaz    defteri BUGÜNKÜ C'ye ayarla (elle onay işi!)
  --kok DİZİN     başka bir ağaç (sınav için bozulmuş kopya)   --defter YOL
"""
import io, os, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import krono_ortak_1004 as ko

DEFTER = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                      "ARAC-KUNYE-KRONO-KAPSAM-1004.defter.txt")
KUNYE_DOSYASI = "devletler.js"


def olc(kok):
    """→ (A, B, C, ozet) — kümeler künye id'leri."""
    y = ko.yukle(kok)
    D = y["kunyeler"]
    anilan = set()
    for m in y["maddeler"]:
        anilan |= m["anilan"]
    A = {d["id"] for d in D if d["id"] in anilan}
    B = {d["id"] for d in D if d["id"] not in A and d.get("kronoloji")}
    C = {d["id"] for d in D if d["id"] not in A and not d.get("kronoloji")}
    assert A | B | C == {d["id"] for d in D} and not (A & B or A & C or B & C)
    return A, B, C, y


def uyelik(i):
    return "%s¦%s" % (KUNYE_DOSYASI, i)


def main(argv):
    try:
        kok = ko.kok_al(argv)
        defter_yolu = argv[argv.index("--defter") + 1] if "--defter" in argv else DEFTER
        A, B, C, y = olc(kok)
        print("KÜNYE × KRONOLOJİ KAPSAM — %d künye · %d madde · %d dosya" %
              (len(y["kunyeler"]), len(y["maddeler"]), y["dosya_sayisi"]))
        print("  A harici kronolojide anılan ........ %4d" % len(A))
        print("  B yalnız künye-içi kronoloji ........ %4d   (kusur DEĞİL — ayrı kova)" % len(B))
        print("  C ikisi de yok = GERÇEK BOŞLUK ...... %4d" % len(C))
        if y["eslenmeyen_dosya"]:
            print("  ⚠ künyeye eşlenmeyen KRONOLOJI_<ID> dosyası (bilgi; maddeleri ancak taraflar ile sayılır):")
            for d, v, n in y["eslenmeyen_dosya"]:
                print("      %s  %s  (%d madde)" % (d, v, n))
        if "--ayrinti" in argv:
            for ad, k in (("B", B), ("C", C)):
                print("  %s üyeleri:" % ad)
                for i in sorted(k):
                    print("      " + i)
        if "--defter-yaz" in argv:
            ko.defter_yaz(defter_yolu, {uyelik(i) for i in C},
                          "KÜNYE×KRONOLOJİ — C KOVASI ÜYELİK DEFTERİ (tavan = üyelik, sayı değil)\n"
                          "Satır: dosya¦id. Bu dosyayı ELLE ONAYLAMADAN yazma: C'ye giren her\n"
                          "künye ya kronolojisini alır ya da buraya gerekçesiyle girer.")
            print("  defter yazıldı: %s (%d üye)" % (defter_yolu, len(C)))
            return 0
        tavan = ko.defter_oku(defter_yolu)
        bugun = {uyelik(i) for i in C}
        yeni = sorted(bugun - tavan)
        dusen = sorted(tavan - bugun)
        if dusen:
            print("  i defterde olup C'den çıkan %d üye (iyi haber — defteri daralt): %s" %
                  (len(dusen), ", ".join(dusen)))
        if yeni:
            print("🔴 C BÜYÜDÜ — defterde olmayan %d künye:" % len(yeni))
            for u in yeni:
                print("     " + u)
            print("SONUÇ: C büyüdü, çıkış kodu 1")
            return 1
        print("SONUÇ: temiz — C %d üye, hepsi defterde. Çıkış kodu 0" % len(C))
        return 0
    except ko.Olculemedi as e:
        print("🔴 ÖLÇÜLEMEDİ — %s" % e)
        print("   'ölçülemedi' ≠ 'yok' ≠ 'temiz' (CLAUDE.md §11). Çıkış kodu 2")
        return 2


if __name__ == "__main__":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:                                   # noqa
        pass
    sys.exit(ko.ortam_sar(main, sys.argv[1:]))
