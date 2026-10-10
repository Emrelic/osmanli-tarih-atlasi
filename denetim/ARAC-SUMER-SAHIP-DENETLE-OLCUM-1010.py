# YALNIZ ÖLÇÜM: denetle.gun_no'yu bellekte arac/gun.py ile değiştirip main()'i koşturur.
# Ağaçtaki hiçbir dosya değişmez. Amaç: çökme noktasının ÖTESİNDEKİ değişmezleri görmek.
import sys, os
KOK = os.getcwd(); sys.path.insert(0, os.path.join(KOK, "arac"))
import gun as G
import denetle as D
_E = G.gun("0001-01-01") - 1
def gun_no(s):
    s = D.tam(D.pad(s)) if s[:1] != "-" else s
    if len(s) == 7 or (len(s) == 8 and s[0] == "-"): s = s + "-01"
    return G.gun(s) - _E
assert gun_no("1453-05-29") == __import__("datetime").date(1453, 5, 29).toordinal()
D.gun_no = gun_no
sys.argv = ["denetle.py"]
D.main()
