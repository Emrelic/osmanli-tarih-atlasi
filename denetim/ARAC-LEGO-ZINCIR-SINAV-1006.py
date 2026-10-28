# -*- coding: utf-8 -*-
"""ARAC-LEGO-zincir.py'nin İKİ YÖNLÜ sınavı (UMIT-W10-LEGO-1006c).

ÖTMELİ (yapay modüller, geçici dizinde):
  K1  govde zinciri `from renkler import BOYALAR` adını bir yardımcı üzerinden okuyor
  K2  YALNIZ sb kökü (`bos_bolge`) `import girdi` → `girdi.X` okuyor
  K3  zincir `_HARITA_ALT` okuyor
  ⇒ yeni betik çıkış 1 + "YASAK AD" satırı. ESKİ betik (8717fe3a) K1-K2'de KÖR
    (ithal ad okunan adlarda hiç görünmez): kör noktanın kanıtı. K3'te ESKİ betik
    adı GÖRÜR (`_HARITA_ALT` atamadır, evrendeydi) ama yasak kavramı olmadığı için
    ÖTMEZ, yalnız listeler. Bu bir ölçüm sonucudur (ilk öngörü "K3'te de kör" idi, YANLIŞ çıktı).
SUSMALI:
  T1  aynı yapay modül, yasak ad okunmuyor (yalnız ithal ediliyor) → çıkış 0
  T2  bugünkü motor (`--kok`/arac/uret_petek.py) → çıkış 0
KORUMA:
  E1  bir kök eksik → çıkış 2 (eksik tarama "temiz" sayılmaz)

Kullanım: py denetim/ARAC-LEGO-ZINCIR-SINAV-1006.py [--kok C:\\atlas]
Çıkış: 0 bütün beklentiler tuttu · 1 en az biri tutmadı
"""
import argparse, os, re, subprocess, sys, tempfile, textwrap
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
ap = argparse.ArgumentParser()
ap.add_argument("--kok", default=r"C:\atlas")
KOK = ap.parse_args().kok
BETIK = os.path.join(KOK, "denetim", "ARAC-LEGO-zincir.py")
ESKI_REV = "8717fe3a"          # betiğin 25 Eylül sürümü (1006 öncesi)

GOVDE = """
def _yabanci_govde_hesap(did):
    return _yardim(did)
def _osm_govde_hesap(a):
    return KARA
def _onb_parca_anahtar(k):
    return k
def bos_bolge(g, pe):
    return {bos}
def _onb_ozet(g):
    return g
def _yardim(did):
    return {yardim}
"""
BAS = "import math\nfrom renkler import BOYALAR\nimport girdi\nKARA = 1\n_HARITA_ALT = {}\n"
VAKALAR = {
    # ad: (kaynak, yeni beklenen çıkış, beklenen yasak ad ya da None, ESKİ betik adı görür mü)
    "K1": (BAS + GOVDE.format(bos="g", yardim="BOYALAR.get(did)"), 1, "BOYALAR", False),
    "K2": (BAS + GOVDE.format(bos="girdi.DATA", yardim="did"), 1, "girdi", False),
    "K3": (BAS + GOVDE.format(bos="g", yardim="_HARITA_ALT.get(did)"), 1, "_HARITA_ALT", True),
    "T1": (BAS + GOVDE.format(bos="g", yardim="math.floor(did)"), 0, None, None),
    "E1": (BAS + GOVDE.format(bos="g", yardim="did").replace("def _onb_ozet", "def _baska"), 2, None, None),
}


def kos(betik, kok, dosya="arac/uret_petek.py"):
    r = subprocess.run([sys.executable, betik, "--kok", kok, "--dosya", dosya],
                       capture_output=True, encoding="utf-8", errors="replace")
    return r.returncode, r.stdout + r.stderr


def eski_betik(gecici):
    """8717fe3a sürümü, KOK satırı geçici dizine çevrilmiş (argüman almıyordu)."""
    src = subprocess.run(["git", "show", f"{ESKI_REV}:denetim/ARAC-LEGO-zincir.py"],
                         capture_output=True, cwd=KOK).stdout.decode("utf-8")
    src, n = re.subn(r'^KOK = r".*"$', lambda m: f'KOK = r"{gecici}"', src, count=1, flags=re.M)
    assert n == 1, "eski betikte KOK satırı bulunamadı"
    yol = os.path.join(gecici, "eski_zincir.py")
    open(yol, "w", encoding="utf-8").write(src)
    return yol


basarisiz = 0
with tempfile.TemporaryDirectory(prefix="lego_sinav_") as td:
    os.makedirs(os.path.join(td, "arac"))
    eski = eski_betik(td)
    for ad, (kaynak, bek, yasak, eski_bek) in VAKALAR.items():
        open(os.path.join(td, "arac", "uret_petek.py"), "w", encoding="utf-8").write(kaynak)
        rc, cikti = kos(BETIK, td)
        tuttu = rc == bek and (yasak is None or f"`{yasak}`" in cikti)
        satir = f"{ad}: yeni çıkış {rc} (beklenen {bek})"
        if yasak:
            satir += f" · YASAK `{yasak}` basıldı: {'evet' if f'`{yasak}`' in cikti else 'HAYIR'}"
            r = subprocess.run([sys.executable, eski], capture_output=True, encoding="utf-8",
                               errors="replace", cwd=td)
            okunan = re.search(r"okunan adlar:(.*)", r.stdout)
            eski_gordu = bool(okunan and re.search(rf"\b{re.escape(yasak)}\b", okunan.group(1)))
            satir += (f" · ESKİ betik gördü mü: {'EVET (listeler, ötmez)' if eski_gordu else 'hayır (kör)'}"
                      f" (beklenen {'EVET' if eski_bek else 'hayır'})")
            tuttu = tuttu and eski_gordu == eski_bek
        print(("✓ " if tuttu else "✗ ") + satir)
        basarisiz += not tuttu

rc, cikti = kos(BETIK, KOK)
tuttu = rc == 0 and "✓ TEMİZ" in cikti
print(("✓ " if tuttu else "✗ ") + f"T2: bugünkü motor ({KOK}) çıkış {rc} (beklenen 0)")
basarisiz += not tuttu
print(f"\n{'✓ SINAV GEÇTİ' if not basarisiz else f'✗ SINAV DÜŞTÜ ({basarisiz})'} — "
      f"{len(VAKALAR) + 1} vaka")
sys.exit(1 if basarisiz else 0)
