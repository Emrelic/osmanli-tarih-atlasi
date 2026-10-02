# -*- coding: utf-8 -*-
"""AÇICI KURUCU — ayar dosyasını üretir ve dinleyiciyi açılışa kaydeder.

    py arac/acici_kur.py --ornek     ayar dosyasını YARAT (ilk makinede, bir kez)
    py arac/acici_kur.py --kur       bu makinede açılışta çalışsın
    py arac/acici_kur.py --kaldir    açılış kaydını sil
    py arac/acici_kur.py --durum     kurulu mu, koşuyor mu — ölç

🔴 JETON TEK VE ORTAKTIR: `--ornek` yalnız BİR makinede koşturulur; üretilen
`oturumlar/ag.json` ötekilere ELLE kopyalanır (USB/paylaşım). Her makinede
ayrı jeton üretirsen hiçbiri ötekini tanımaz.

🔴 BU DOSYA DEPOYA GİRMEZ. İçinde jeton ve eczanenin iç ağ adresleri var;
`osmanli-tarih-atlasi` HERKESE AÇIK bir depo. `.gitignore`a eklendi.
"""
import io
import json
import os
import secrets
import socket
import subprocess
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AYAR_YOLU = os.path.join(KOK, "oturumlar", "ag.json")
ACICI = os.path.join(KOK, "arac", "acici.py")
BASLANGIC = os.path.join(os.environ.get("APPDATA", ""),
                         r"Microsoft\Windows\Start Menu\Programs\Startup")
CMD_ADI = "atlas-acici.cmd"
CMD_YOLU = os.path.join(BASLANGIC, CMD_ADI)

ORNEK = {
    "port": 8787,
    "jeton": None,                      # --ornek dolduruyor
    "makineler": {
        "UMIT":  "192.168.1.120",
        "HAVVA": "192.168.1.171",
        "LAB":   "192.168.1.147",
        "KASA":  "192.168.1.OLCULMEDI"  # 2 Ekim 2026: KASA'nin IP'si henuz olculmedi
    }
}


def ornek_yaz():
    if os.path.exists(AYAR_YOLU):
        print("ZATEN VAR: %s" % AYAR_YOLU)
        print("Uzerine yazmiyorum — jetonu degistirmek butun makineleri koparir.")
        print("Gercekten yenilemek istiyorsan once dosyayi elle sil.")
        return 1
    os.makedirs(os.path.dirname(AYAR_YOLU), exist_ok=True)
    a = dict(ORNEK)
    a["jeton"] = secrets.token_urlsafe(32)
    with io.open(AYAR_YOLU, "w", encoding="utf-8") as f:
        json.dump(a, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print("YAZILDI: %s" % AYAR_YOLU)
    print()
    print("SIMDI UC IS:")
    print("  1) `makineler` bolumundeki IP'leri DOGRULA (KASA olculmedi)")
    print("  2) BU DOSYAYI oteki uc makineye ayni yere KOPYALA")
    print("  3) her makinede:  py arac/acici_kur.py --kur")
    return 0


def kur():
    if not os.path.isdir(BASLANGIC):
        print("BASLANGIC KLASORU YOK: %s" % BASLANGIC)
        return 1
    if not os.path.exists(AYAR_YOLU):
        print("ONCE AYAR: oturumlar/ag.json yok. Baska makinede uretip buraya kopyala.")
        return 1

    pythonw = os.path.join(os.path.dirname(sys.executable), "pythonw.exe")
    if not os.path.exists(pythonw):
        print("pythonw.exe bulunamadi (%s) — python.exe kullanilacak, "
              "konsol penceresi acik kalir." % pythonw)
        pythonw = sys.executable

    satirlar = [
        "@echo off",
        "rem Atlas ACICI — agdan 'Claude'u ac' emrini karsilar.",
        "rem Uretildi: arac/acici_kur.py --kur   ·   Kaldirmak: --kaldir",
        'start "" "%s" "%s"' % (pythonw, ACICI),
        "",
    ]
    with io.open(CMD_YOLU, "w", encoding="utf-8", newline="\r\n") as f:
        f.write("\n".join(satirlar))
    print("YAZILDI: %s" % CMD_YOLU)
    print()
    print("GUVENLIK DUVARI — ilk calistirmada Windows izin soracak:")
    print("  'Ozel aglar' (Private) KUTUSUNU ISARETLE, 'Genel' kutusunu BIRAKMA.")
    print("Elle acmak istersen (YONETICI PowerShell):")
    print('  New-NetFirewallRule -DisplayName "Atlas Acici" -Direction Inbound `')
    print("      -Protocol TCP -LocalPort 8787 -Action Allow -Profile Private")
    print()
    print("Simdi test:  py arac/acici.py     (Ctrl+C ile durdur)")
    print("Sonra oteki makineden:  py arac/ac.py --durum")
    return 0


def kaldir():
    if os.path.exists(CMD_YOLU):
        os.remove(CMD_YOLU)
        print("SILINDI: %s" % CMD_YOLU)
    else:
        print("ZATEN YOK: %s" % CMD_YOLU)
    print("NOT: koşmakta olan acici bu komutla OLMEZ — yeniden acilmasini engeller.")
    print("     Oldurmek icin: Get-Process pythonw | Stop-Process")
    return 0


def durum():
    print("makine        :", socket.gethostname())
    print("ayar dosyasi  :", AYAR_YOLU,
          "VAR" if os.path.exists(AYAR_YOLU) else "YOK")
    if os.path.exists(AYAR_YOLU):
        with io.open(AYAR_YOLU, encoding="utf-8") as f:
            a = json.load(f)
        print("  port        :", a.get("port"))
        print("  jeton       :", "VAR (%d karakter)" % len(a.get("jeton") or "")
              if a.get("jeton") else "YOK")
        print("  makineler   :", ", ".join(sorted(a.get("makineler", {}))))
    print("acilis kaydi  :", CMD_YOLU,
          "VAR" if os.path.exists(CMD_YOLU) else "YOK")
    # Kosuyor mu — KAYIT degil OLCUM
    try:
        c = subprocess.run(
            ["powershell", "-NoProfile", "-NonInteractive", "-Command",
             "Get-CimInstance Win32_Process -Filter \"Name='pythonw.exe' or "
             "Name='python.exe'\" | Where-Object { $_.CommandLine -like '*acici.py*' } "
             "| Select-Object -ExpandProperty ProcessId"],
            capture_output=True, text=True, timeout=30)
        pidler = [x for x in (c.stdout or "").split() if x.strip()]
    except Exception as e:
        pidler = None
        print("kosuyor mu    : OLCULEMEDI (%s)" % type(e).__name__)
    if pidler is not None:
        print("kosuyor mu    :", ("EVET · pid " + ", ".join(pidler)) if pidler
              else "HAYIR")
    return 0


KOMUTLAR = {"--ornek": ornek_yaz, "--kur": kur, "--kaldir": kaldir,
            "--durum": durum}

if __name__ == "__main__":
    k = sys.argv[1] if len(sys.argv) > 1 else "--durum"
    if k not in KOMUTLAR:
        print(__doc__)
        sys.exit(2)
    sys.exit(KOMUTLAR[k]())
