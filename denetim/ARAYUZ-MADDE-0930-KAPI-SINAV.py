# ARAYUZ-MADDE-0930 — önerilen `dom_sozlesmesi` kapısının İKİ YÖNLÜ sınavı
# Kullanım: py denetim/ARAYUZ-MADDE-0930-KAPI-SINAV.py <yamalı denetle_yayin.py yolu>
# Öngörü (ölçümden ÖNCE yazıldı): kırık 2ddede3d · 9a956026 → uyumsuz ≥ 1 (#ufuk-sec)
#                                  sağlam 17cd2f98 · 7f790990 · HEAD → uyumsuz 0
import importlib.util, sys, os
yol = sys.argv[1]
spec = importlib.util.spec_from_file_location("dy", yol)
dy = importlib.util.module_from_spec(spec)
spec.loader.exec_module(dy)
dy.KOK = os.getcwd()
BEKLENEN = {"2ddede3d": True, "9a956026": True, "17cd2f98": False, "7f790990": False, "HEAD": False}
hata = 0
for rev, kirik in BEKLENEN.items():
    nj, nb, uy, ok = dy.dom_sozlesmesi(rev)
    otu = bool(uy or ok or not nb)
    dogru = otu == kirik
    hata += not dogru
    print("%-9s %s  js %d · beklenti %d · uyumsuz %d %s %s" % (
        rev, "✓" if dogru else "✗ YANLIŞ", nj, nb, len(uy), uy, ok))
nj, nb, uy, ok = dy.dom_sozlesmesi(None)
print("WT        (bilgi) js %d · beklenti %d · uyumsuz %d %s" % (nj, nb, len(uy), uy))
print("SINAV:", "GEÇTİ" if not hata else "KALDI (%d)" % hata)
sys.exit(1 if hata else 0)
