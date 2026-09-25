# -*- coding: utf-8 -*-
"""MOTOR-LEGO-0925 — B9: önbellek ALETİ `govde` yazıp okuyabiliyor mu? (geçici dosyada)
+ yamanın `tuz_karsilastir`ı iki yönde (aynı tuz → [], farklı → adlar, ilk → None).
Kullanım: py denetim/ARAC-LEGO-alet-sinav.py <motor_onbellek.py dizini>"""
import importlib.util, os, pickle, sys, tempfile
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
dz = sys.argv[1]
sp = importlib.util.spec_from_file_location("mob", os.path.join(dz, "motor_onbellek.py"))
mob = importlib.util.module_from_spec(sp); sp.loader.exec_module(mob)
tmp = tempfile.mkdtemp(prefix="lego_sinav_")
yol = os.path.join(tmp, "o.sqlite")
hata = 0
def bak(ad, kosul):
    global hata
    print(("  ✓ " if kosul else "  ✗ ") + ad); hata += 0 if kosul else 1

o = mob.Onbellek(yol, "tuz-A")
k = o.anahtar("govde", b"GOVDE_TUZ", b"cevre", b"#GRUP#", b"1.0,2.0;xyz")
v = ([[[[1.0, 2.0], [3.0, 4.0], [1.0, 2.0]]]], [1.5, 2.5], 12.25, 0)
bak("yazmadan önce ıska", o.oku("govde", k) == (False, None))
o.yaz("govde", k, v)
var, g = o.oku("govde", k)
bak("yazdıktan sonra isabet", var)
bak("değer BİT BİT aynı (pickle)", pickle.dumps(g, protocol=4) == pickle.dumps(v, protocol=4))
# ikinci bağlantı (başka süreç gibi) görüyor mu — commit edildi mi
o2 = mob.Onbellek(yol, "tuz-A")
bak("yeni bağlantı aynı kaydı görüyor (commit)", o2.oku("govde", k)[0])
o3 = mob.Onbellek(yol, "tuz-B")
bak("farklı tuz ⇒ farklı anahtar", o3.anahtar("govde", b"GOVDE_TUZ", b"cevre", b"#GRUP#", b"1.0,2.0;xyz") != k)
kapali = mob.Onbellek(yol, "tuz-A", acik=False)
bak("KAPALI önbellek okumaz (negatif çapa)", kapali.oku("govde", k) == (False, None))
bak("ozet govde satırı basar", any(s.startswith("govde:") for s in o.ozet()))
if hasattr(mob.Onbellek, "tuz_karsilastir"):
    p1 = {"motor:uret_petek.py": "aa", "ortam": "[]"}
    bak("tuz_karsilastir ilk koşu → None", o.tuz_karsilastir("geo", p1) is None)
    bak("tuz_karsilastir aynı → []", o.tuz_karsilastir("geo", p1) == [])
    p2 = dict(p1, **{"motor:uret_petek.py": "bb"})
    bak("tuz_karsilastir farklı → değişen adı", o.tuz_karsilastir("geo", p2) == ["motor:uret_petek.py"])
    bak("etiketler ayrı tutulur", o.tuz_karsilastir("genel", p1) is None)
    bak("KAPALI önbellekte tuz_karsilastir → None", kapali.tuz_karsilastir("geo", p1) is None)
else:
    print("  (tuz_karsilastir yok — HEAD sürümü)")
print(f"SONUÇ: {'GEÇTİ' if not hata else f'{hata} KUSUR'} · {tmp}")
sys.exit(1 if hata else 0)
