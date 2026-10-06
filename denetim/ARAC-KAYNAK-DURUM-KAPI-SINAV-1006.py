# -*- coding: utf-8 -*-
"""`kaynak_durum.py kapat --kod KOSU` ortam kapısının İKİ YÖNLÜ sınavı (UMIT-W10-LEGO-1006e/f).

🔴 GERÇEK `oturumlar/KAYNAK-DURUM.json` YAZILMAZ — o dosya bütün bekçileri durdurur.
   Gerçek `KOSU-KAPI.json` ve `KOSU-KAPI-DEFTERI.jsonl` de YAZILMAZ. Modül ayrı ad
   altında ithal edilir, üç yol geçici dizine çevrilir, her vakada assert edilir,
   sonda üç gerçek dosyanın baytları (ya da yokluğu) sınav öncesiyle karşılaştırılır.

Vakalar:
  RED   S1 yapay motor: sınıfsız MOTOR_YENI → çıkış 4, ilan YAZILMADI, iz YOK
        S2 aynı + --kapi-atla "…" → yine 4 (öten kapı atlanamaz)
        S6 kapı betiği YOK → çıkış 5
        S8 --kapi-atla gerekçesiz → çıkış 2
        S9 kapı ayrıştıramıyor (sözdizimi hatası, kapı çıkış 2) → çıkış 5
        D3 koşu damgası YAZILAMIYOR (kapi-kok/oturumlar bir DOSYA) → çıkış 6, ilan YAZILMADI
  GEÇER S3 yapay motor: her ad sınıflı → 0, kapi.durum GECTI, damga + defter +1
        S4 GERÇEK motor (--kok) — bugün KAPSAYICI mod → 0, GECTI, defter +1
        S7 kapı YOK + --kapi-atla "<gerekçe>" → 0, ATLANDI + gerekçe, defter +1
        D1 S3'ün koşu damgası: kapi GECTI · motor izi = yapay uret_petek.py'nin sha256'sı
        D2 S7'nin koşu damgası: kapi ATLANDI · atlama_gerekce ⇒ "hangi koşu atladı" ölçülebilir
  KAPSAM S5 RAM-DARBOGAZI: kapı yerine İZ BIRAKAN sahte betik → betik HİÇ koşmadı,
        `kapi` alanı yok, koşu damgası/defter YOK
Kullanım: py denetim/ARAC-KAYNAK-DURUM-KAPI-SINAV-1006.py [--kok C:\\atlas]
"""
import argparse, contextlib, hashlib, importlib.util, io, json, os, shutil, sys, tempfile
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
ap = argparse.ArgumentParser()
ap.add_argument("--kok", default=r"C:\atlas")
KOK = ap.parse_args().kok

spec = importlib.util.spec_from_file_location("kaynak_durum_sinav", os.path.join(KOK, "arac", "kaynak_durum.py"))
kd = importlib.util.module_from_spec(spec)
spec.loader.exec_module(kd)
GERCEK_DOSYA = kd.DOSYA
GERCEK_KAPI = kd.KAPI_BETIK
GERCEK_DEFTER = kd.DEFTER
GERCEK_DAMGA = kd.kosu_damga_yolu(KOK)
gercek_damga_yolu = kd.kosu_damga_yolu


def parmak(yol):
    return hashlib.sha256(open(yol, "rb").read()).hexdigest() if os.path.exists(yol) else "YOK"


ONCE = {y: parmak(y) for y in (GERCEK_DOSYA, GERCEK_DEFTER, GERCEK_DAMGA)}
KUMELER = '_ONB_SONUC = {"MOTOR_A"}\n_ONB_ISLETIM = {"MOTOR_B"}\n_ONB_CIKTI_DISI = set()\n'
TEMIZ = 'import os\n' + KUMELER + 'A = os.environ.get("MOTOR_A")\nB = os.environ.get("MOTOR_B")\n'
KIRLI = TEMIZ + 'Y = os.getenv("MOTOR_YENI")\n'
BOZUK = TEMIZ + 'def (:\n'

dusen = 0


def kontrol(ad, kosul, ayrinti):
    global dusen
    print(("✓ " if kosul else "✗ ") + f"{ad}: {ayrinti}")
    dusen += not kosul


def defter_satir(td):
    y = os.path.join(td, "DEFTER.jsonl")
    return sum(1 for _ in open(y, encoding="utf-8")) if os.path.exists(y) else 0


def vaka(ad, td, argv, bek_rc, yazilmali, kapi_betik=GERCEK_KAPI, motor=None, ek=None,
         defter=0, kok_ad="motor"):
    global dusen
    sahte = os.path.join(td, "KAYNAK-DURUM.json")
    if os.path.exists(sahte):
        os.remove(sahte)
    kok = os.path.join(td, kok_ad)
    if motor is not None:
        os.makedirs(os.path.join(kok, "arac"), exist_ok=True)
        open(os.path.join(kok, "arac", "uret_petek.py"), "w", encoding="utf-8").write(motor)
        argv = argv + ["--kapi-kok", kok]
    kd.DOSYA, kd.KAPI_BETIK = sahte, kapi_betik
    kd.DEFTER = os.path.join(td, "DEFTER.jsonl")
    # gerçek ağacın koşu damgası geçici yola; yapay ağaçlarınki kendi yerinde (zaten geçici)
    kd.kosu_damga_yolu = lambda k: (os.path.join(td, "GERCEK-KOK-KOSU-KAPI.json")
                                    if os.path.abspath(k) == os.path.abspath(KOK) else gercek_damga_yolu(k))
    assert os.path.abspath(kd.DOSYA) != os.path.abspath(GERCEK_DOSYA), "GERÇEK DOSYAYA YAZACAKTI"
    assert os.path.abspath(kd.DEFTER) != os.path.abspath(GERCEK_DEFTER), "GERÇEK DEFTERE YAZACAKTI"
    assert os.path.abspath(kd.kosu_damga_yolu(KOK)) != os.path.abspath(GERCEK_DAMGA)
    once_defter = defter_satir(td)
    tampon = io.StringIO()
    with contextlib.redirect_stdout(tampon):
        rc = kd.main(argv)
    out = tampon.getvalue()
    yazildi = os.path.exists(sahte)
    d = json.load(open(sahte, encoding="utf-8")) if yazildi else {}
    artis = defter_satir(td) - once_defter
    tuttu = rc == bek_rc and yazildi == yazilmali and artis == defter and (ek is None or ek(d, out))
    print(("✓ " if tuttu else "✗ ") + f"{ad}: çıkış {rc} (beklenen {bek_rc}) · ilan "
          f"{'YAZILDI' if yazildi else 'yazılmadı'} (beklenen {'yazılır' if yazilmali else 'yazılmaz'})"
          f" · defter +{artis} (beklenen +{defter})"
          + (f" · kapi={d.get('kapi', {}).get('durum', '—')}" if yazildi else ""))
    if not tuttu:
        print("      | " + out.rstrip().replace("\n", "\n      | "))
    dusen += not tuttu
    return kok


with tempfile.TemporaryDirectory(prefix="kd_kapi_sinav_") as td:
    K = ["kapat", "--kod", "KOSU", "--kim", "SINAV"]
    vaka("S1", td, K, 4, False, motor=KIRLI, ek=lambda d, o: "MOTOR_YENI" in o)
    vaka("S2", td, K + ["--kapi-atla", "deneme"], 4, False, motor=KIRLI)
    k3 = vaka("S3", td, K, 0, True, motor=TEMIZ, defter=1,
              ek=lambda d, o: d.get("kapi", {}).get("durum") == "GECTI"
              and d.get("kod") == "KOSU" and d.get("bekci_yasak") is True)
    dm = json.load(open(gercek_damga_yolu(k3), encoding="utf-8"))
    sha = hashlib.sha256(open(os.path.join(k3, "arac", "uret_petek.py"), "rb").read()).hexdigest()
    kontrol("D1", dm["kapi"] == "GECTI" and dm["motor"]["uret_petek.py"] == sha
            and dm["motor"]["renkler.py"] == "YOK" and dm["kapi_kok"] == k3,
            f"koşu damgası kapi={dm['kapi']} · motor izi uret_petek {dm['motor']['uret_petek.py'][:12]} "
            f"(beklenen {sha[:12]})")
    vaka("S4", td, K + ["--kapi-kok", KOK], 0, True, defter=1,
         ek=lambda d, o: d.get("kapi", {}).get("durum") == "GECTI"
         and os.path.exists(os.path.join(td, "GERCEK-KOK-KOSU-KAPI.json")))
    iz = os.path.join(td, "IZ")
    sahte_kapi = os.path.join(td, "sahte_kapi.py")
    open(sahte_kapi, "w", encoding="utf-8").write(f"open({iz!r}, 'w').write('kostum')\n")
    vaka("S5", td, ["kapat", "--kod", "RAM-DARBOGAZI", "--kim", "SINAV"], 0, True, kapi_betik=sahte_kapi,
         ek=lambda d, o: not os.path.exists(iz) and "kapi" not in d)
    yok = os.path.join(td, "YOK-KAPI.py")
    vaka("S6", td, K, 5, False, kapi_betik=yok, motor=TEMIZ, ek=lambda d, o: "YOK" in o)
    gerekce = "kapı betiği silinmiş, LAB bakacak"
    k7 = vaka("S7", td, K + ["--kapi-atla", gerekce], 0, True, kapi_betik=yok, motor=TEMIZ, defter=1,
              kok_ad="motor7", ek=lambda d, o: d["kapi"]["durum"] == "ATLANDI"
              and d["kapi"]["atlama_gerekce"] == gerekce)
    dm7 = json.load(open(gercek_damga_yolu(k7), encoding="utf-8"))
    son = json.loads(open(os.path.join(td, "DEFTER.jsonl"), encoding="utf-8").read().splitlines()[-1])
    kontrol("D2", dm7["kapi"] == "ATLANDI" and dm7["atlama_gerekce"] == gerekce and son == dm7,
            f"koşu damgası kapi={dm7['kapi']} · gerekçe '{dm7['atlama_gerekce']}' · defterin son satırı = damga")
    vaka("S8", td, K + ["--kapi-atla"], 2, False, kapi_betik=yok, motor=TEMIZ)
    vaka("S9", td, K, 5, False, motor=BOZUK, ek=lambda d, o: "çıkış 2" in o)
    k_d3 = os.path.join(td, "motor_d3")
    os.makedirs(os.path.join(k_d3, "arac"))
    open(os.path.join(k_d3, "oturumlar"), "w").write("dizin değil, dosya")
    vaka("D3", td, K, 6, False, motor=TEMIZ, kok_ad="motor_d3", ek=lambda d, o: "YAZILAMADI" in o)

kd.DOSYA, kd.KAPI_BETIK, kd.DEFTER, kd.kosu_damga_yolu = GERCEK_DOSYA, GERCEK_KAPI, GERCEK_DEFTER, gercek_damga_yolu
for y, once in ONCE.items():
    sonra = parmak(y)
    kontrol("GERÇEK", once == sonra, f"{y} dokunulmadı: önce {once[:12]} · sonra {sonra[:12]}")
print(f"\n{'✓ SINAV GEÇTİ' if not dusen else f'✗ SINAV DÜŞTÜ ({dusen})'}")
sys.exit(1 if dusen else 0)
