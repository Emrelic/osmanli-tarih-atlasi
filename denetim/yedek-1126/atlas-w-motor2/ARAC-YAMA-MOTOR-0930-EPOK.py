# YAMA-MOTOR-0930 — uret_petek.py:4659 varlik-epogu yorumunun bugunku sayilari.
# girdi.yukle() evreni (motorun okudugu). Epok = kur:/bit: gunlerinin farkli
# degerleri (yorumun "en cok ~N ayri epok" tanimi: her kur/bit gunu bir sinir).
import sys, pathlib
sys.stdout.reconfigure(encoding="utf-8")
KOK = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(KOK / "arac"))
import girdi
Y = girdi.yukle(sessiz=True)
kur = [y.get("kur") for y in Y if y.get("kur")]
bit = [y.get("bit") for y in Y if y.get("bit")]
print("nokta", len(Y))
print("kur: tasiyan", len(kur), "farkli gun", len(set(kur)))
print("bit: tasiyan", len(bit), "farkli gun", len(set(bit)))
print("yorumun tanimiyla en cok epok (kur+bit adedi)", len(kur) + len(bit))
print("farkli sinir gunu (kur U bit)", len(set(kur) | set(bit)))
