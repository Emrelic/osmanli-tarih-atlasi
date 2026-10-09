# -*- coding: utf-8 -*-
"""TAHTA-CGNAT-1009 sınavı — izinli_ip Tailscale CGNAT (100.64.0.0/10) aralığını kabul ediyor mu.

İki yön: Tailscale IPv4 adresleri ve ipv4-mapped hâlleri KABUL; aralığın hemen dışı ve
genel internet RED; mevcut özel/loopback kabulü değişmedi (gerileme). Sunucu BAŞLATILMAZ.
    py denetim/ARAC-TAHTA-CGNAT-SINAV-1009.py      çıkış 0 = geçti
"""
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "arac"))
import tahta_sunucu as S  # noqa: E402

BEKLENEN = {
    # Tailscale CGNAT — yamasız araçta hepsi False'tu (ölçüldü 9 Ekim 2026)
    "100.64.0.1": True, "100.100.100.100": True, "100.127.255.254": True,
    "::ffff:100.100.1.1": True,
    # aralığın hemen dışı + genel internet
    "100.63.255.255": False, "100.128.0.0": False, "8.8.8.8": False, "1.1.1.1": False,
    "2001:4860:4860::8888": False, "bozuk": False,
    # gerileme: önceki kabul kümesi
    "192.168.1.120": True, "10.0.0.5": True, "127.0.0.1": True, "::1": True,
    "fd7a:115c:a1e0::1": True,
}

hata = [(a, S.izinli_ip(a), b) for a, b in BEKLENEN.items() if S.izinli_ip(a) != b]
for a, g, b in hata:
    print("HATA %-24s görülen=%s beklenen=%s" % (a, g, b))
print("SONUÇ: %d/%d" % (len(BEKLENEN) - len(hata), len(BEKLENEN)))
sys.exit(1 if hata else 0)
