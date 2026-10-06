# -*- coding: utf-8 -*-
"""KAPANIS_2S çağrı başına SIFIRLANIYOR mu? (6 Ekim 2026, W41b bulgusu)

`degismez2(..., yer_sarti=True)` iki kez çağrılınca sayaçlar BİRİKMEMELİ:
tek çağrı = resmî sayı · iki çağrı = AYNI sayı. Düzeltmeden önce "acik_kovada"
sıfırlanmıyordu (1654 → 3270).
Kullanım:  py denetim/ARAC-KAPANIS-2S-SIFIR-SINAV-1006.py      (çıkış 0 temiz · 1 kusur)
"""
import io, os, sys
KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
os.chdir(KOK)
sys.path.insert(0, os.path.join(KOK, "arac"))
_so = sys.stdout
import denetle as D          # denetle stdout kodlamasını import anında sınar
sys.stdout = _so
sys.stdout = io.StringIO()   # ölçüm gürültüsü yutulur
Y = D.yerlesimleri_yukle()
O = D.olaylari_yukle()
Yc = [y for y in Y if y.get("_kaynak") not in D.KUYRUK_DOSYALARI]
D.degismez2(Yc, O, ("s",), yer_sarti=True)
bir = dict(D.KAPANIS_2S)
D.degismez2(Yc, O, ("s",), yer_sarti=True)
iki = dict(D.KAPANIS_2S)
sys.stdout = _so
print("tek çağrı:", bir)
print("iki çağrı:", iki)
kusur = [k for k in bir if bir[k] != iki[k]]
tutarli = bir["acik_kovada"] == bir["maskeli_yer"] + bir["maskeli_yalniz_taraf"]
print("maske = maskeli_yer + maskeli_taraf:", tutarli)
if kusur or not tutarli:
    print("✗ BİRİKİYOR:", kusur)
    sys.exit(1)
print("✓ sayaçlar çağrı başına sıfırlanıyor")
