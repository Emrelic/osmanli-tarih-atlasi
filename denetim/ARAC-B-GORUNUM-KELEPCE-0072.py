# -*- coding: utf-8 -*-
"""COL KELEPCESI SINAVI — B-GORUNUM-0072, 1.MURAT'in M-4892 sarti.

*"VARSAYILAN BUGUNKU DAVRANIS OLSUN — yani parametre verilmediginde tek
kuresel sayi, cikti BIREBIR degismesin; bunu sinavla goster."*

IKI YON — biri olmadan oteki bir sey ispatlamaz:
  YON 1 (AYNILIK)   : MOTOR_COL_UFUK_SAAT verilmeden kosulan cikti,
                      kelepce kodundan ONCEKI ciktiyla BIREBIR ayni mi?
                      Karsilastirma tabani: `--taban` ile verilen dokum
                      (kelepce kodundan once alinmis PETEK_D).
  YON 2 (DUYARLILIK): kelepce ACIKKEN cikti DEGISIYOR mu? Degismiyorsa
                      sinav bir sey olcmuyor demektir — "kelepce calisiyor"
                      hukmu ancak farki GORUNCE verilebilir.
                      (Bu depoda ogrenilmis ders: bos kume her ongoruyu
                      dogrular.)

Kosus:
  py denetim/ARAC-B-GORUNUM-KELEPCE-0072.py --kutu=10,14,36,34 --saat 80 --col 40
Dokumler `ARAC-B-GORUNUM-UFUK-0072.py --dokum` ile alinir; bu betik onu
cagirir ve WKB karsilastirir.
"""
import argparse
import hashlib
import os
import pickle
import subprocess
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOKUMCU = os.path.join(KOK, "denetim", "ARAC-B-GORUNUM-UFUK-0072.py")


def dokum_al(yol, kutu, saat, col_saat=None, dizin=None):
    if os.path.exists(yol):
        print("  dokum var, atlandi: %s" % os.path.basename(yol), flush=True)
    else:
        env = dict(os.environ)
        if col_saat:
            env["MOTOR_COL_UFUK_SAAT"] = str(col_saat)
        else:
            env.pop("MOTOR_COL_UFUK_SAAT", None)
        r = subprocess.run([sys.executable, "-u", DOKUMCU, "--dokum", yol,
                            "--kutu", kutu, "--saat", str(saat), "--ad", "k"],
                           cwd=KOK, env=env, capture_output=True, timeout=3600)
        if not os.path.exists(yol):
            sys.stdout.write(r.stdout[-3000:].decode("utf-8", "replace"))
            sys.stdout.write(r.stderr[-3000:].decode("utf-8", "replace"))
            raise SystemExit("dokum alinamadi: %s" % yol)
    with open(yol, "rb") as f:
        return pickle.load(f)


def imza(paket):
    """PETEK_D'nin sirali WKB imzasi + petek basina ayri hash (fark icin)."""
    h = hashlib.sha256()
    tek = []
    for w in paket["pd"]:
        h.update(len(w).to_bytes(8, "little"))
        h.update(w)
        tek.append(hashlib.sha1(w).hexdigest()[:12] if w else "")
    return h.hexdigest(), tek


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--kutu", default="10,14,36,34")
    p.add_argument("--saat", type=float, default=80.0)
    p.add_argument("--col", type=float, default=40.0)
    p.add_argument("--dizin", default=os.environ.get("BGOR_DOKUM_DIZIN")
                   or os.path.join(KOK, "_bgor_dokum"))
    p.add_argument("--taban", help="kelepce kodundan ONCE alinmis dokum yolu")
    a = p.parse_args()
    os.makedirs(a.dizin, exist_ok=True)
    kad = a.kutu.replace(",", "_")

    print("KELEPCE SINAVI - kutu %s - genel ufuk %g sa - col ufku %g sa"
          % (a.kutu, a.saat, a.col), flush=True)

    kapali = dokum_al(os.path.join(a.dizin, "kel-kapali-%s-%g.pkl" % (kad, a.saat)),
                      a.kutu, a.saat, None)
    acik = dokum_al(os.path.join(a.dizin, "kel-acik-%s-%g-%g.pkl"
                                 % (kad, a.saat, a.col)), a.kutu, a.saat, a.col)
    h_kapali, t_kapali = imza(kapali)
    h_acik, t_acik = imza(acik)

    # --- YON 1: kelepce KAPALI cikti, tabanla ayni mi ---
    if a.taban and os.path.exists(a.taban):
        with open(a.taban, "rb") as f:
            taban = pickle.load(f)
        h_taban, t_taban = imza(taban)
        ayni = (h_taban == h_kapali)
        fark = sum(1 for x, y in zip(t_taban, t_kapali) if x != y)
        print("  YON 1 (aynilik): taban %s ... kelepce-kapali %s -> %s"
              % (h_taban[:16], h_kapali[:16], "AYNI" if ayni else "FARKLI"))
        if not ayni:
            print("     farkli petek: %d / %d" % (fark, len(t_taban)))
    else:
        ayni = None
        print("  YON 1 (aynilik): TABAN DOKUMU YOK -> OLCULEMEDI")
        print("     (kelepce kodundan ONCEKI surumle bir dokum alip --taban ver)")

    # --- YON 2: kelepce ACIK cikti degisiyor mu ---
    degisti = (h_kapali != h_acik)
    fark2 = sum(1 for x, y in zip(t_kapali, t_acik) if x != y)
    print("  YON 2 (duyarlilik): kapali %s ... acik %s -> %s"
          % (h_kapali[:16], h_acik[:16], "DEGISTI" if degisti else "AYNI"))
    print("     etkilenen petek: %d / %d" % (fark2, len(t_kapali)))

    print()
    if ayni is False or not degisti:
        print("  HUKUM: KALDI")
        return 1
    if ayni is None:
        print("  HUKUM: YON 2 GECTI, YON 1 OLCULEMEDI")
        return 0
    print("  HUKUM: GECTI - varsayilan birebir ayni, kelepce acikken fark var.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
