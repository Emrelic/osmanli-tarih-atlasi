# -*- coding: utf-8 -*-
"""TAHTA KAPISI SINAVI — iki yonde.

Yeni iki kapi (3 Ekim 2026, UMIT vakasi):
  ① `_git_yarim()`  depo yarim bir git isleminin ortasindaysa `yaz` REDDEDER
  ② `_tazele()`     numara verilmeden ONCE `pull --rebase` kosar

🔴 BIR KAPI IKI YONDE SINANMADAN CALISIYOR SAYILMAZ:
   yalniz "temizde susuyor" demek yeterli degil — "kirlide OTUYOR" da olculur.
   (Bos kume her ongoruyu dogrular.)

KULLANIM:  py denetim/ARAC-TAHTA-KAPI-SINAV-1003.py
"""
import io, os, shutil, subprocess, sys, tempfile

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import tahta

HATA = 0
def sonuc(ok, baslik, detay=""):
    global HATA
    print(("  OK   " if ok else "  HATA ") + baslik + ((" | " + detay) if detay else ""))
    if not ok:
        HATA += 1

print("=" * 72)
print("TAHTA KAPISI SINAVI — iki yonde")
print("=" * 72)

# W36 (6 Ekim 2026): `.git` bir worktree'de DIZIN DEGIL, DOSYADIR (`gitdir: ...`).
#   Eski satir `os.path.join(KOK, ".git")` worktree'de makedirs ile COKUYORDU.
#   Gercek git dizini git'e SORULUR. Bu, kapinin kendisini de dogru yerde sinar:
#   kapi `KOK/.git`e bakip worktree'de KORSE, 2) artik bunu HATA olarak gosterir.
def _git_dizini():
    r = subprocess.run(["git", "-C", KOK, "rev-parse", "--absolute-git-dir"],
                       capture_output=True, text=True)
    if r.returncode != 0 or not r.stdout.strip():
        print("OLCULEMEDI — git dizini bulunamadi: %s" % (r.stderr or "").strip()[:200])
        sys.exit(2)
    return os.path.normpath(r.stdout.strip())
G = _git_dizini()
print("git dizini: %s%s" % (G, "  (WORKTREE)" if os.path.isfile(os.path.join(KOK, ".git")) else ""))

# ---------------------------------------------------------------- 1) TEMIZ YON
# Depo su an temiz olmali (yarim islem yok) -> kapi SUSMALI
once = tahta._git_yarim()
sonuc(once is None, "1) TEMIZ depoda kapi SUSUYOR",
      "donen: %r" % once)

# ---------------------------------------------------------------- 2) KIRLI YON
# GERCEK bir yarim islem taklit edilir -> kapi OTMELI.
# 🔴 rebase dizinleri icin IMZA DOSYASI sart: ilk surumum yalniz DIZINE bakiyordu
#    ve EMRELIC'teki 24 Eylul'den kalma BAYAT `.git/rebase-merge` (icinde yalniz
#    `autostash`) yuzunden 9 gundur her yazimi reddedecekti.
for ad, imza, anahtar in (("rebase-merge", "head-name", "rebase"),
                          ("rebase-apply", "next", "rebase")):
    yol = os.path.join(G, ad)
    vardi = os.path.isdir(yol)
    imza_yolu = os.path.join(yol, imza)
    if os.path.exists(imza_yolu):
        sonuc(False, "2) %s TAKLIT EDILEMEDI" % ad, "imza zaten var — atlandi")
        continue
    try:
        if not vardi:
            os.makedirs(yol)
        io.open(imza_yolu, "w", encoding="utf-8").write("sinav\n")
        d = tahta._git_yarim()
        sonuc(d is not None and anahtar in d,
              "2) `%s/%s` varken kapi OTUYOR" % (ad, imza), "donen: %r" % d)
    finally:
        if os.path.exists(imza_yolu):
            os.remove(imza_yolu)
        if not vardi:
            shutil.rmtree(yol, ignore_errors=True)

for ad, anahtar in (("MERGE_HEAD", "merge"), ("CHERRY_PICK_HEAD", "cherry-pick")):
    yol = os.path.join(G, ad)
    if os.path.exists(yol):
        sonuc(False, "2) %s TAKLIT EDILEMEDI" % ad, "zaten var — atlandi")
        continue
    try:
        io.open(yol, "w", encoding="utf-8").write("sinav\n")
        d = tahta._git_yarim()
        sonuc(d is not None and anahtar in d,
              "2) `%s` varken kapi OTUYOR" % ad, "donen: %r" % d)
    finally:
        if os.path.exists(yol):
            os.remove(yol)

# ---------------------------------------------------------------- 2b) BAYAT KALINTI
# 🔴 GERILEME SINAVI — bulunan kusurun ta kendisi.
# Icinde yalniz `autostash` olan bir `rebase-merge` GERCEK rebase DEGILDIR.
yol = os.path.join(G, "rebase-merge")
vardi = os.path.isdir(yol)
imzalar = [i for i in ("head-name", "onto", "orig-head", "next")
           if os.path.exists(os.path.join(yol, i))] if vardi else []
if imzalar:
    sonuc(False, "2b) BAYAT KALINTI sinavi KOSMADI",
          "gercek rebase surüyor olabilir: %s" % ", ".join(imzalar))
else:
    try:
        if not vardi:
            os.makedirs(yol)
        io.open(os.path.join(yol, "autostash"), "a", encoding="utf-8").close()
        d = tahta._git_yarim()
        sonuc(d is None, "2b) BAYAT kalinti (yalniz autostash) kapiyi OTURMUYOR",
              "donen: %r" % d)
    finally:
        if not vardi:
            shutil.rmtree(yol, ignore_errors=True)

# ---------------------------------------------------------------- 3) TEMIZLIK
# Taklitlerden sonra depo yine TEMIZ gorunmeli (sinav iz birakmadi)
sonra = tahta._git_yarim()
sonuc(sonra is None, "3) sinav iz BIRAKMADI", "donen: %r" % sonra)

# ---------------------------------------------------------------- 4) SIRA
# `yaz` icinde kapi, numara verilmeden ONCE mi?
kaynak = io.open(os.path.join(KOK, "arac", "tahta.py"), encoding="utf-8").read()
bas = kaynak.index("def yaz(a):")
govde = kaynak[bas:bas + 2000]
i_kapi = govde.find("_git_yarim()")
i_taze = govde.find("_tazele()")
i_no = govde.find('no = "M-%04d"')
sonuc(-1 < i_kapi < i_taze < i_no,
      "4) SIRA dogru: kapi -> tazele -> numara",
      "kapi=%d tazele=%d numara=%d" % (i_kapi, i_taze, i_no))

# ---------------------------------------------------------------- 5) RET KODU
sonuc("return 2" in govde[i_kapi:i_kapi + 700] if i_kapi > -1 else False,
      "5) kapi otunce `return 2` (yazmiyor)")

print("-" * 72)
print("SONUC: " + ("temiz" if HATA == 0 else "%d KUSUR" % HATA))
sys.exit(1 if HATA else 0)
