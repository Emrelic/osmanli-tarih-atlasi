# -*- coding: utf-8 -*-
"""ARAC-MOTOR-ENV-KAPI-1006.py'nin İKİ YÖNLÜ sınavı (UMIT-W10-LEGO-1006d).

Yapay ağaçlar geçici dizinde kurulur (depoya yazılmaz):
  ÖTMELİ  Y1 ithal yardımcı modül (fonksiyon içi import) os.getenv ile sınıfsız ad okur
          Y2 `from os import environ` + environ["X"] ve `"Z" in os.environ` desenleri, sınıfsız
          Y3 BAYAT — kümede var, hiç okunmuyor
          Y4 ÇAKIŞMA — ad iki kümede
          Y5 DİNAMİK — os.environ.get(degisken)
  SUSMALI Y0 her okunan ad sınıflı
          Y6 yalnız YAZMA (os.environ["X"]="1", dict(os.environ, X=…)) + environ taraması → okuma sayılmaz
  HATA    Y7 küme sabit değil → çıkış 2
  GERÇEK  M1 bugünkü motor → KAPSAYICI mod, çıkış 0
          M2 bugünkü motor + 1006c önerisi (--kumeler) → TEMİZ, çıkış 0
Kullanım: py denetim/ARAC-MOTOR-ENV-KAPI-SINAV-1006.py [--kok C:\\atlas]
"""
import argparse, json, os, subprocess, sys, tempfile, textwrap
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
ap = argparse.ArgumentParser()
ap.add_argument("--kok", default=r"C:\atlas")
KOK = ap.parse_args().kok
KAPI = os.path.join(KOK, "denetim", "ARAC-MOTOR-ENV-KAPI-1006.py")

KUMELER = ('_ONB_SONUC = {"MOTOR_A"}\n_ONB_ISLETIM = {"MOTOR_B"}\n_ONB_CIKTI_DISI = {"MOTOR_C"}\n')
TABAN = ('import os\n' + KUMELER +
         'A = os.environ.get("MOTOR_A")\nB = os.environ.get("MOTOR_B", "1")\n'
         'def f():\n    import yardim\n    return yardim.C\n')
YARDIM = 'import os\nC = os.environ.get("MOTOR_C")\n'
VAKALAR = {   # ad: (uret_petek.py, yardim.py, beklenen çıkış, çıktıda aranacak metin)
    "Y0": (TABAN, YARDIM, 0, "✓ TEMİZ"),
    "Y1": (TABAN, YARDIM + 'Y = os.getenv("MOTOR_YENI")\n', 1, "SINIFSIZ (okunuyor, hiçbir kümede yok — tuzdan SESSİZCE düşer): MOTOR_YENI"),
    "Y2": (TABAN.replace("import os\n", "import os\nfrom os import environ\n", 1)
           + 'X = environ["MOTOR_X"]\nZ = "MOTOR_Z" in os.environ\n', YARDIM, 1, "SINIFSIZ (okunuyor, hiçbir kümede yok — tuzdan SESSİZCE düşer): MOTOR_X, MOTOR_Z"),
    "Y3": (TABAN.replace('{"MOTOR_A"}', '{"MOTOR_A", "MOTOR_ESKI"}'), YARDIM, 1, "BAYAT"),
    "Y4": (TABAN.replace('{"MOTOR_B"}', '{"MOTOR_B", "MOTOR_A"}'), YARDIM, 1, "ÇAKIŞMA"),
    "Y5": (TABAN + 'ad = "MOTOR_" + "Q"\nQ = os.environ.get(ad)\n', YARDIM, 1, "DİNAMİK"),
    "Y6": (TABAN + 'os.environ["MOTOR_W"] = "1"\ne = dict(os.environ, MOTOR_V="1")\n'
           'T = sorted(k for k in os.environ if k.startswith("MOTOR_"))\n', YARDIM, 0, "✓ TEMİZ"),
    "Y7": (TABAN.replace('_ONB_SONUC = {"MOTOR_A"}', '_ONB_SONUC = set(["MOTOR_A"]) | set()'),
           YARDIM, 2, "ÖLÇÜLEMEDİ"),
}
ONERI_1006C = {
    "_ONB_SONUC": ["MOTOR_YURUYUS", "MOTOR_YURUYUS_SAAT", "MOTOR_YURUYUS_16", "MOTOR_COL_UFUK_SAAT",
                   "MOTOR_EGIMSIZ", "MOTOR_EGIM_AB_KAPALI", "MOTOR_NEHIR_OZNE", "MOTOR_NEHIR_KAPALI",
                   "MOTOR_NEHIR_AB_KAPALI", "MOTOR_BOGAZ_KAPALI", "MOTOR_BOS_TOPRAK",
                   "MOTOR_BOS_TOPRAK_COL", "MOTOR_B23_KAPALI", "MOTOR_PUAN_KAPALI",
                   "MOTOR_DOLGU_KAPALI", "MOTOR_DOLGU_YOL"],
    "_ONB_CIKTI_DISI": ["MOTOR_UFUK_BANT", "MOTOR_B_DOLGU", "MOTOR_DOLGU_KESIT", "MOTOR_KILIT_KAPALI",
                        "MOTOR_DOLGU_YARICAP_KM", "MOTOR_DOLGU_ESIK_KM2", "MOTOR_DOLGU_KABA",
                        "MOTOR_DOLGU_SADE", "MOTOR_DOLGU_PAYLASIM_ADIM_KM", "MOTOR_DOLGU_NOKTA_TAVAN",
                        "MOTOR_BDOLGU_YOL", "MOTOR_DOLGU_ONBELLEK", "MOTOR_DOLGU_SINA_KAYDIR",
                        "MOTOR_DOLGU_CIKTI"],
}


def kos(kok, *ek):
    r = subprocess.run([sys.executable, KAPI, "--kok", kok, *ek], capture_output=True,
                       encoding="utf-8", errors="replace")
    return r.returncode, r.stdout + r.stderr


dusen = 0
with tempfile.TemporaryDirectory(prefix="env_kapi_sinav_") as td:
    os.makedirs(os.path.join(td, "arac"))
    for ad, (ana, yardim, bek, ara) in VAKALAR.items():
        open(os.path.join(td, "arac", "uret_petek.py"), "w", encoding="utf-8").write(ana)
        open(os.path.join(td, "arac", "yardim.py"), "w", encoding="utf-8").write(yardim)
        rc, out = kos(td)
        tuttu = rc == bek and ara in out
        print(("✓ " if tuttu else "✗ ") + f"{ad}: çıkış {rc} (beklenen {bek}) · '{ara}' "
              f"{'bulundu' if ara in out else 'BULUNAMADI'}")
        if not tuttu:
            print(textwrap.indent(out, "      | "))
        dusen += not tuttu
    oneri = os.path.join(td, "oneri.json")
    json.dump(ONERI_1006C, open(oneri, "w", encoding="utf-8"))
    for ad, ek, ara in (("M1", (), "MOD: KAPSAYICI"), ("M2", ("--kumeler", oneri), "✓ TEMİZ")):
        rc, out = kos(KOK, *ek)
        tuttu = rc == 0 and ara in out
        print(("✓ " if tuttu else "✗ ") + f"{ad}: bugünkü motor{' + 1006c önerisi' if ek else ''} "
              f"çıkış {rc} · '{ara}' {'bulundu' if ara in out else 'BULUNAMADI'}")
        if not tuttu:
            print(textwrap.indent(out, "      | "))
        dusen += not tuttu
print(f"\n{'✓ SINAV GEÇTİ' if not dusen else f'✗ SINAV DÜŞTÜ ({dusen})'} — {len(VAKALAR) + 2} vaka")
sys.exit(1 if dusen else 0)
