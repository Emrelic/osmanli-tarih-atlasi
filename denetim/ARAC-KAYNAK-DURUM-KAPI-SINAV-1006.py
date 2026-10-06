# -*- coding: utf-8 -*-
"""`kaynak_durum.py kapat --kod KOSU` ortam kapısının İKİ YÖNLÜ sınavı (UMIT-W10-LEGO-1006e).

🔴 GERÇEK `oturumlar/KAYNAK-DURUM.json` YAZILMAZ — o dosya bütün bekçileri durdurur.
   Modül ayrı ad altında ithal edilir, `DOSYA` geçici bir yola çevrilir ve her
   vakadan önce bunun gerçekten geçici yol olduğu assert edilir. Sınavın sonunda
   gerçek dosyanın baytları (ya da yokluğu) sınav öncesiyle karşılaştırılır.

Vakalar:
  RED   S1 yapay motor: sınıfsız MOTOR_YENI → çıkış 4, ilan YAZILMADI
        S2 aynı + --kapi-atla "…" → yine 4 (öten kapı atlanamaz)
        S6 kapı betiği YOK → çıkış 5, ilan YAZILMADI
        S8 --kapi-atla gerekçesiz → çıkış 2, ilan YAZILMADI
        S9 kapı ayrıştıramıyor (sözdizimi hatası, kapı çıkış 2) → çıkış 5
  GEÇER S3 yapay motor: her ad sınıflı → çıkış 0, ilan yazıldı, kapi.durum GECTI
        S4 GERÇEK motor (--kok) — bugün KAPSAYICI mod → çıkış 0, GECTI
        S7 kapı YOK + --kapi-atla "<gerekçe>" → çıkış 0, kapi.durum ATLANDI + gerekçe
  KAPSAM S5 RAM-DARBOGAZI: kapı yerine İZ BIRAKAN sahte betik konur → betik
        HİÇ koşmadı (iz yok), ilan yazıldı, `kapi` alanı yok
Kullanım: py denetim/ARAC-KAYNAK-DURUM-KAPI-SINAV-1006.py [--kok C:\\atlas]
"""
import argparse, contextlib, hashlib, importlib.util, io, json, os, sys, tempfile
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
ap = argparse.ArgumentParser()
ap.add_argument("--kok", default=r"C:\atlas")
KOK = ap.parse_args().kok

spec = importlib.util.spec_from_file_location("kaynak_durum_sinav", os.path.join(KOK, "arac", "kaynak_durum.py"))
kd = importlib.util.module_from_spec(spec)
spec.loader.exec_module(kd)
GERCEK_DOSYA = kd.DOSYA
GERCEK_KAPI = kd.KAPI_BETIK


def parmak(yol):
    return hashlib.sha256(open(yol, "rb").read()).hexdigest() if os.path.exists(yol) else "YOK"


ONCE = parmak(GERCEK_DOSYA)
KUMELER = '_ONB_SONUC = {"MOTOR_A"}\n_ONB_ISLETIM = {"MOTOR_B"}\n_ONB_CIKTI_DISI = set()\n'
TEMIZ = 'import os\n' + KUMELER + 'A = os.environ.get("MOTOR_A")\nB = os.environ.get("MOTOR_B")\n'
KIRLI = TEMIZ + 'Y = os.getenv("MOTOR_YENI")\n'
BOZUK = TEMIZ + 'def (:\n'

dusen = 0


def vaka(ad, td, argv, bek_rc, yazilmali, kapi_betik=GERCEK_KAPI, motor=None, ek=None):
    global dusen
    sahte = os.path.join(td, "KAYNAK-DURUM.json")
    if os.path.exists(sahte):
        os.remove(sahte)
    kok = os.path.join(td, "motor")
    if motor is not None:
        os.makedirs(os.path.join(kok, "arac"), exist_ok=True)
        open(os.path.join(kok, "arac", "uret_petek.py"), "w", encoding="utf-8").write(motor)
        argv = argv + ["--kapi-kok", kok]
    kd.DOSYA, kd.KAPI_BETIK = sahte, kapi_betik
    assert os.path.abspath(kd.DOSYA) != os.path.abspath(GERCEK_DOSYA), "GERÇEK DOSYAYA YAZACAKTI"
    tampon = io.StringIO()
    with contextlib.redirect_stdout(tampon):
        rc = kd.main(argv)
    out = tampon.getvalue()
    yazildi = os.path.exists(sahte)
    d = json.load(open(sahte, encoding="utf-8")) if yazildi else {}
    tuttu = rc == bek_rc and yazildi == yazilmali and (ek is None or ek(d, out))
    print(("✓ " if tuttu else "✗ ") + f"{ad}: çıkış {rc} (beklenen {bek_rc}) · ilan "
          f"{'YAZILDI' if yazildi else 'yazılmadı'} (beklenen {'yazılır' if yazilmali else 'yazılmaz'})"
          + (f" · kapi={d.get('kapi', {}).get('durum', '—')}" if yazildi else ""))
    if not tuttu:
        print("      | " + out.rstrip().replace("\n", "\n      | "))
    dusen += not tuttu


with tempfile.TemporaryDirectory(prefix="kd_kapi_sinav_") as td:
    K = ["kapat", "--kod", "KOSU", "--kim", "SINAV"]
    vaka("S1", td, K, 4, False, motor=KIRLI, ek=lambda d, o: "MOTOR_YENI" in o)
    vaka("S2", td, K + ["--kapi-atla", "deneme"], 4, False, motor=KIRLI)
    vaka("S3", td, K, 0, True, motor=TEMIZ, ek=lambda d, o: d.get("kapi", {}).get("durum") == "GECTI"
         and d.get("kod") == "KOSU" and d.get("bekci_yasak") is True)
    vaka("S4", td, K + ["--kapi-kok", KOK], 0, True,
         ek=lambda d, o: d.get("kapi", {}).get("durum") == "GECTI")
    iz = os.path.join(td, "IZ")
    sahte_kapi = os.path.join(td, "sahte_kapi.py")
    open(sahte_kapi, "w", encoding="utf-8").write(f"open({iz!r}, 'w').write('kostum')\n")
    vaka("S5", td, ["kapat", "--kod", "RAM-DARBOGAZI", "--kim", "SINAV"], 0, True, kapi_betik=sahte_kapi,
         ek=lambda d, o: not os.path.exists(iz) and "kapi" not in d)
    yok = os.path.join(td, "YOK-KAPI.py")
    vaka("S6", td, K, 5, False, kapi_betik=yok, motor=TEMIZ, ek=lambda d, o: "YOK" in o)
    vaka("S7", td, K + ["--kapi-atla", "kapı betiği silinmiş, LAB bakacak"], 0, True, kapi_betik=yok,
         motor=TEMIZ, ek=lambda d, o: d["kapi"]["durum"] == "ATLANDI"
         and d["kapi"]["atlama_gerekce"] == "kapı betiği silinmiş, LAB bakacak")
    vaka("S8", td, K + ["--kapi-atla"], 2, False, kapi_betik=yok, motor=TEMIZ)
    vaka("S9", td, K, 5, False, motor=BOZUK, ek=lambda d, o: "çıkış 2" in o)

kd.DOSYA, kd.KAPI_BETIK = GERCEK_DOSYA, GERCEK_KAPI
SONRA = parmak(GERCEK_DOSYA)
tuttu = ONCE == SONRA
print(("✓ " if tuttu else "✗ ") + f"GERÇEK {GERCEK_DOSYA} DOKUNULMADI: önce {ONCE[:12]} · sonra {SONRA[:12]}")
dusen += not tuttu
print(f"\n{'✓ SINAV GEÇTİ' if not dusen else f'✗ SINAV DÜŞTÜ ({dusen})'} — 10 vaka")
sys.exit(1 if dusen else 0)
