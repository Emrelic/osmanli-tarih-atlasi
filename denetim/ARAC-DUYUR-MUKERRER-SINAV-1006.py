# -*- coding: utf-8 -*-
"""DUYUR MUKERRER SINAVI — `duyur.py` "yazildi ama gitmedi"yi ELLE YAZ'a atiyor mu? (W50c)

Kusur: `tahta.py yaz` (TAHTA-YAZ-CIKIS-1006) artik 0 ulasti · 1 ulasmadi · 2
yazilmadi/olculemedi doner. Eski `duyur.py` kod≠0 olan HER aliciyi 🔴 sayip
"HATALI OLANLARI ELLE YAZ" diyordu ⇒ kod 1 + "yazıldı" = mesaj tahtada ZATEN var,
elle yeniden yazmak MUKERRER uretir.

FIKSTUR: gecici dizinde `arac/duyur.py` (sinanan) + SAHTE `arac/tahta.py` +
`oturumlar/tahta.json` (dort canli alici). Sahte tahta.py, `--kime`ye gore
dort cikisi uretir — gercek git gerekmez, sinanan sey duyur.py'nin KOVALAMASI:
  K0  0 + "yazıldı"   → ulasti
  K1  1 + "yazıldı"   → yazildi-gitmedi   (ELLE YAZ listesine DUSMEMELI)
  K2  2 + "yazıldı"   → yazildi-gitmedi   (olculemedi; ELLE YAZ'a DUSMEMELI)
  KY  2, "yazıldı" YOK → yazilamadi       (ELLE YAZ listesinde KALMALI)
Ve ozet satiri uc kovayi ayri sayar; cikis kodu 1 (hepsi ulasmadi).

KULLANIM:
    py denetim/ARAC-DUYUR-MUKERRER-SINAV-1006.py [--duyur <duyur.py>]
  BOZUK YON: eski duyur.py verilince sinav OTMELI (K1 · K2 ELLE YAZ'a duser).
CIKIS: 0 temiz · 1 kusur · 2 olculemedi
"""
import io
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _arg(ad):
    if ad in sys.argv:
        i = sys.argv.index(ad)
        if i + 1 < len(sys.argv):
            return sys.argv[i + 1]
    return None


DUYUR = _arg("--duyur") or os.path.join(KOK, "arac", "duyur.py")

SAHTE_TAHTA = r'''# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
a = sys.argv
kime = a[a.index("--kime") + 1]
plan = {"K0": (0, True), "K1": (1, True), "K2": (2, True), "KY": (2, False)}
kod, yazildi = plan[kime]
if yazildi:
    print("M-0999 yazıldı  KOORDINATOR → %s" % kime)
    print("push  : sahte kod=%d" % kod)
else:
    print("🔴 YAZILMADI — sahte sebep")
sys.exit(kod)
'''

HATA = 0


def sonuc(ok, baslik, detay=""):
    global HATA
    if not ok:
        HATA += 1
    print(("  OK   " if ok else "  HATA ") + baslik + ((" | " + detay) if detay else ""))


def elle_yaz_bolumu(cikti):
    """ELLE YAZ ogudunun KAPSADIGI alicilar: 🔴 ile baslayan alici satirlari."""
    return set(re.findall(r"^🔴 (K\w)\b", cikti, re.M))


def main():
    print("DUYUR MUKERRER SINAVI — sinanan: %s" % DUYUR)
    kok = tempfile.mkdtemp(prefix="duyur_mukerrer_")
    try:
        os.makedirs(os.path.join(kok, "arac"))
        os.makedirs(os.path.join(kok, "oturumlar"))
        shutil.copy(DUYUR, os.path.join(kok, "arac", "duyur.py"))
        io.open(os.path.join(kok, "arac", "tahta.py"), "w", encoding="utf-8").write(SAHTE_TAHTA)
        json.dump([{"no": "M-%04d" % i, "kimden": k} for i, k in
                   enumerate(("K0", "K1", "K2", "KY"), 1)],
                  io.open(os.path.join(kok, "oturumlar", "tahta.json"), "w", encoding="utf-8"))
        msj = os.path.join(kok, "mesaj.txt")
        io.open(msj, "w", encoding="utf-8").write("sinav duyurusu\n")
        r = subprocess.run([sys.executable, os.path.join(kok, "arac", "duyur.py"),
                            "--mesaj-dosya", msj], capture_output=True, text=True,
                           encoding="utf-8", errors="replace")
        c = r.stdout or ""
        if "CANLI OTURUM: 4" not in c:
            print("  OLCULEMEDI fikstur: duyur 4 aliciyi gormedi\n" + c[-400:])
            return 2
        elle = elle_yaz_bolumu(c)
        sonuc("K1" not in elle, "K1 (1+yazıldı) ELLE YAZ'a DUSMUYOR", "ELLE YAZ: %s" % sorted(elle))
        sonuc("K2" not in elle, "K2 (2+yazıldı) ELLE YAZ'a DUSMUYOR")
        sonuc("KY" in elle, "KY (yazılmadı) ELLE YAZ'da KALIYOR")
        sonuc("K0" not in elle, "K0 (ulasti) ELLE YAZ'a DUSMUYOR")
        m = re.search(r"ulaştı: (\d+) · yazıldı-gitmedi: (\d+) · yazılamadı: (\d+)", c)
        sonuc(bool(m) and m.groups() == ("1", "2", "1"), "ozet uc kovayi ayri sayiyor (1·2·1)",
              m.group(0) if m else "ozet satiri YOK")
        sonuc("YENIDEN YAZMA" in c or "YENİDEN YAZMA" in c, "yazıldı-gitmedi icin 'YENIDEN YAZMA' ogudu var")
        sonuc(r.returncode == 1, "cikis kodu 1 (hepsi ulasmadi)", "kod=%d" % r.returncode)
        if HATA:
            print("  --- duyur ciktisi (son satirlar) ---")
            for s in c.strip().splitlines()[-14:]:
                print("         > " + s)
    finally:
        shutil.rmtree(kok, ignore_errors=True)
    print("SONUC: %s · hata %d" % ("temiz" if not HATA else "KUSUR", HATA))
    return 1 if HATA else 0


if __name__ == "__main__":
    sys.exit(main())
