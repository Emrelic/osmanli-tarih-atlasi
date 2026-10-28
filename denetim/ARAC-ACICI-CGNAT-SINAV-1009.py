# -*- coding: utf-8 -*-
"""ACICI-CGNAT-1009 sınavı — kutu açıcı (arac/acici.py) Tailscale CGNAT (100.64.0.0/10)
istemcisini kabul ediyor mu.

İki yön, sunucu BAŞLATILMAZ: Kapi._ozel_ag_mi sahte bir istemci adresiyle çağrılır.
  · YAMASIZ kol: HEAD~ (ya da --eski <rev>) sürümündeki acici.py geçici dosyadan yüklenir;
    Tailscale adreslerini REDDETMELİ (bu, kusurun gerçek olduğunun kanıtı — UMIT'ten
    emrelic:8787 403 "yerel ag disi" aldı, 9 Ekim 2026).
  · YAMALI kol: çalışma ağacındaki acici.py; Tailscale KABUL, aralığın hemen dışı ve genel
    internet RED, önceki özel/loopback kabulü DEĞİŞMEDİ.
    py denetim/ARAC-ACICI-CGNAT-SINAV-1009.py [--eski <rev>]      çıkış 0 = geçti
"""
import importlib.util
import os
import subprocess
import sys
import tempfile

KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
ARAC = os.path.join(KOK, "arac")
sys.path.insert(0, ARAC)

TAILSCALE = ["100.64.0.1", "100.100.100.100", "100.127.255.254", "::ffff:100.100.1.1"]
DISARI = ["100.63.255.255", "100.128.0.0", "8.8.8.8", "1.1.1.1", "2001:4860:4860::8888", "bozuk"]
OZEL = ["192.168.1.164", "10.0.0.5", "172.16.0.1", "127.0.0.1", "::1", "fd7a:115c:a1e0::1"]


def yukle(yol, ad):
    spec = importlib.util.spec_from_file_location(ad, yol)
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return m


def ozel_mi(modul, ip):
    class Sahte:
        client_address = (ip, 0)
    return modul.Kapi._ozel_ag_mi(Sahte())


def main(argv):
    eski_rev = argv[argv.index("--eski") + 1] if "--eski" in argv else "HEAD"
    hata = 0
    # ---- yamasız kol
    eski = subprocess.run(["git", "-C", KOK, "show", "%s:arac/acici.py" % eski_rev],
                          capture_output=True).stdout
    with tempfile.NamedTemporaryFile("wb", suffix="_acici_eski.py", dir=ARAC, delete=False) as f:
        f.write(eski)
        eski_yol = f.name
    try:
        E = yukle(eski_yol, "acici_eski")
        red = [ip for ip in TAILSCALE if not ozel_mi(E, ip)]
        ok = len(red) == len(TAILSCALE)
        print("%s A yamasız (%s): Tailscale RED %d/%d" % ("✓" if ok else "✗", eski_rev, len(red), len(TAILSCALE)))
        hata += 0 if ok else 1
    finally:
        os.remove(eski_yol)
    # ---- yamalı kol
    Y = yukle(os.path.join(ARAC, "acici.py"), "acici_yeni")
    for grup, liste, bek in (("B Tailscale KABUL", TAILSCALE, True),
                             ("C dışarı RED", DISARI, False),
                             ("D özel/loopback KABUL (gerileme)", OZEL, True)):
        yanlis = [ip for ip in liste if ozel_mi(Y, ip) != bek]
        print("%s %s: %d/%d%s" % ("✓" if not yanlis else "✗", grup, len(liste) - len(yanlis),
                                  len(liste), ("  yanlış: %s" % yanlis) if yanlis else ""))
        hata += len(yanlis)
    print("SONUÇ: %s" % ("geçti" if not hata else "%d hata" % hata))
    return 1 if hata else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
