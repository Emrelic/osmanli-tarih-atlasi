# -*- coding: utf-8 -*-
"""AÇICI — her makinede çalışan küçük dinleyici.

NE YAPAR: ağdan gelen tek bir emri ("Claude'u aç") karşılar ve uygular.
NE YAPMAZ: keyfî komut çalıştırmaz. Çalıştırabileceği şeyler aşağıdaki
`EYLEMLER` sözlüğüdür ve o liste KODDA sabittir — istekten gelen hiçbir
metin kabuğa geçmez.

NİÇİN HTTP ve SSH DEĞİL: Claude Desktop bir ARAYÜZ uygulaması. SSH'tan
başlatılan süreç kullanıcının masaüstü oturumunda değil, ayrı bir oturumda
doğar ve pencere HİÇ GÖRÜNMEZ (Windows oturum yalıtımı). Bu dinleyici
kullanıcının KENDİ oturumunda çalıştığı için başlattığı pencere görünür.
Bedeli: makine açık ve kullanıcı oturumu açılmış olmalı.

ÇALIŞTIRMA (elle):   py arac/acici.py
ÇALIŞTIRMA (sessiz): pythonw arac/acici.py
KURULUM:             py arac/acici_kur.py        (açılışta kendiliğinden)

AYAR DOSYASI: oturumlar/ag.json  — depoya GİRMEZ (.gitignore).
"""
import hmac
import io
import json
import os
import re
import socket
import subprocess
import sys
import time
import ipaddress
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse, parse_qs

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AYAR_YOLU = os.path.join(KOK, "oturumlar", "ag.json")
GUNLUK = os.path.join(KOK, "oturumlar", "acici.log")

# Claude Desktop bir Microsoft Store (MSIX) paketi: exe yolu DOĞRUDAN çağrılmaz,
# AppUserModelID ile çağrılır.  EMRELIC'te ölçülen değer varsayılan; makine
# başka bir sürüm taşıyorsa `_aumid_olc()` gerçeğini bulur.
AUMID_VARSAYILAN = r"Claude_pzs8sxrjxfjjc!Claude"
_AUMID = None


def gunluk(satir):
    damga = time.strftime("%Y-%m-%d %H:%M:%S")
    try:
        with io.open(GUNLUK, "a", encoding="utf-8") as f:
            f.write("%s  %s\n" % (damga, satir))
    except OSError:
        pass
    print("%s  %s" % (damga, satir), flush=True)


def ayar_oku():
    if not os.path.exists(AYAR_YOLU):
        print("AYAR YOK: %s" % AYAR_YOLU)
        print("Once sunu kostur:  py arac/acici_kur.py --ornek")
        sys.exit(2)
    with io.open(AYAR_YOLU, encoding="utf-8") as f:
        a = json.load(f)
    if not a.get("jeton") or len(a["jeton"]) < 16:
        print("AYAR KUSURLU: `jeton` yok ya da 16 karakterden kisa.")
        sys.exit(2)
    return a


# ---------------------------------------------------------------- eylemler
def _aumid_olc():
    """Claude Desktop'in bu makinedeki gercek AppUserModelID'si."""
    global _AUMID
    if _AUMID:
        return _AUMID
    try:
        c = subprocess.run(
            ["powershell", "-NoProfile", "-NonInteractive", "-Command",
             "(Get-StartApps | Where-Object { $_.Name -like '*laude*' } "
             "| Select-Object -First 1).AppID"],
            capture_output=True, text=True, timeout=25)
        ad = (c.stdout or "").strip()
        if re.fullmatch(r"[A-Za-z0-9_.\-]+![A-Za-z0-9_.\-]+", ad):
            _AUMID = ad
            gunluk("AUMID olculdu: %s" % ad)
            return _AUMID
    except Exception as e:
        gunluk("AUMID olculemedi (%s) — varsayilana dusuluyor" % type(e).__name__)
    _AUMID = AUMID_VARSAYILAN
    return _AUMID


def ey_claude_ac():
    """Claude Desktop'i ac (zaten aciksa yeni pencere acar / one getirir)."""
    once = _claude_sayisi()
    aumid = _aumid_olc()
    subprocess.Popen(["explorer.exe", "shell:AppsFolder\\" + aumid],
                     close_fds=True)
    time.sleep(4)
    sonra = _claude_sayisi()
    return {"tamam": True, "aumid": aumid,
            "surec_once": once, "surec_sonra": sonra,
            "yorum": "surec sayisi artmadi — pencere ONE GELMIS olabilir"
                     if sonra <= once else "yeni surec dogdu"}


def _claude_sayisi():
    try:
        c = subprocess.run(
            ["powershell", "-NoProfile", "-NonInteractive", "-Command",
             "(Get-Process claude -ErrorAction SilentlyContinue).Count"],
            capture_output=True, text=True, timeout=20)
        return int((c.stdout or "0").strip() or 0)
    except Exception:
        return -1


def ey_durum():
    """Olcum — hukum degil: makine kim, Claude ayakta mi."""
    return {"tamam": True,
            "makine": socket.gethostname(),
            "kullanici": os.environ.get("USERNAME", "?"),
            "claude_surec": _claude_sayisi(),
            "acici_pid": os.getpid(),
            "saat": time.strftime("%Y-%m-%d %H:%M:%S")}


EYLEMLER = {
    "claude-ac": ey_claude_ac,
    "durum": ey_durum,
}


# ---------------------------------------------------------------- sunucu
class Kapi(BaseHTTPRequestHandler):
    server_version = "AtlasAcici/1.0"
    jeton = ""

    def log_message(self, bicim, *arg):      # kendi gunlugumuz var
        pass

    def _cevap(self, kod, govde):
        ham = json.dumps(govde, ensure_ascii=False).encode("utf-8")
        self.send_response(kod)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(ham)))
        self.end_headers()
        self.wfile.write(ham)

    def _ozel_ag_mi(self):
        """Yalniz yerel agdan kabul.  Internete acilan bir kapi OLMAYACAK."""
        try:
            ip = ipaddress.ip_address(self.client_address[0])
        except ValueError:
            return False
        return ip.is_private or ip.is_loopback

    def do_GET(self):
        kaynak = self.client_address[0]
        yol = urlparse(self.path)
        sorgu = parse_qs(yol.query)
        eylem = (sorgu.get("eylem") or [""])[0]
        verilen = (sorgu.get("jeton") or [""])[0] or \
                  self.headers.get("X-Atlas-Jeton", "")

        if not self._ozel_ag_mi():
            gunluk("RED (ag disi) %s -> %s" % (kaynak, eylem))
            return self._cevap(403, {"tamam": False, "sebep": "yerel ag disi"})

        # hmac.compare_digest: jetonu karakter karakter sizdirmayan karsilastirma
        if not hmac.compare_digest(verilen, self.jeton):
            gunluk("RED (jeton) %s -> %s" % (kaynak, eylem))
            return self._cevap(401, {"tamam": False, "sebep": "jeton yanlis"})

        if eylem not in EYLEMLER:
            gunluk("RED (eylem yok) %s -> %r" % (kaynak, eylem))
            return self._cevap(400, {"tamam": False, "sebep": "tanimsiz eylem",
                                     "gecerli": sorted(EYLEMLER)})

        gunluk("KABUL %s -> %s" % (kaynak, eylem))
        try:
            sonuc = EYLEMLER[eylem]()
        except Exception as e:
            gunluk("ARIZA %s: %s: %s" % (eylem, type(e).__name__, e))
            return self._cevap(500, {"tamam": False, "sebep": "%s: %s"
                                     % (type(e).__name__, e)})
        sonuc.setdefault("makine", socket.gethostname())
        self._cevap(200, sonuc)


def main():
    a = ayar_oku()
    Kapi.jeton = a["jeton"]
    port = int(a.get("port", 8787))
    sunucu = ThreadingHTTPServer(("0.0.0.0", port), Kapi)
    gunluk("ACICI ayakta · makine=%s · port=%d · eylemler=%s"
           % (socket.gethostname(), port, ", ".join(sorted(EYLEMLER))))
    try:
        sunucu.serve_forever()
    except KeyboardInterrupt:
        gunluk("ACICI durduruldu (elle)")


if __name__ == "__main__":
    main()
