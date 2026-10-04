# -*- coding: utf-8 -*-
"""TAHTA SUNUCUSU — tahtanın TEK YAZICISI (TAHTA-WEB-1004, 4 Ekim 2026).

NİÇİN: tahta git'te bir MESAJ KUYRUĞUYDU. Ölçüldü: son 200 commit'in 78'i
(%39) tahta mesajı; `TAHTA.md` 78 + `tahta.json` 74 değişimle en çok çatışan
iki dosya (üçüncünün 8 katı). 3 Ekim'de UMIT'in deposu bu dosyadan rebase
ortasında kilitlendi. Kilidin KÖKÜ: numara `len(kayit)+1` ile YEREL, bayat
dosyadan üretiliyordu ⇒ iki makine AYNI numarayı aynı satıra yazıyordu.
⇒ Git bir sürüm denetimi aracıdır, mesaj yolu değil. Numarayı artık BU
  SÜREÇ verir; tek yazıcı ⇒ tek el ⇒ çakışma imkânsız.

DESEN `acici.py`den BİREBİR:
    sabit eylem listesi (istekten gelen hiçbir metin kabuğa/dosya yoluna geçmez)
    jeton `hmac.compare_digest` ile · YALNIZ özel ağ/loopback · her istek loglu

UÇLAR:
    POST /tahta/yaz        kim · kime · mesaj [· dayanak · aciliyet · ...]
                           → {"no": "M-xxxx"}  (numarayı SUNUCU verir)
    GET  /tahta/oku        [kim · son_no · hepsi · limit]  → mesajlar (JSON)
    POST /tahta/isaretle   kim · nolar          → "okundu" damgası
    POST /tahta/islem      eylem(teyit|tamam|kapat) · no · kim [· soz · kimlik]
    GET  /tahta            [son]                → OKUNUR HTML görüntü
Jeton: `X-Atlas-Jeton` başlığı ya da `?jeton=` (tarayıcı için).

AYAR: `oturumlar/ag.json` (gitignore) — `jeton` (acici ile ORTAK) ve
`"tahta_sunucu": "<IP>:<port>"`. Port yoksa 8788 (acici 8787'de).
🔴 Makine adı KODA GÖMÜLMEZ: sunucu hangi makinede koşarsa orada koşar.

ÇALIŞTIRMA:  py arac/tahta_sunucu.py            (sessiz: pythonw)
SINAV:       py denetim/ARAC-TAHTA-SUNUCU-SINAV-1004.py
"""
import contextlib
import gzip
import hmac
import html
import io
import ipaddress
import json
import os
import socket
import sys
import threading
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse, parse_qs

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import tahta as T          # noqa: E402 — iş mantığı TEK YERDE: tahta.py

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AYAR_YOLU = os.path.join(KOK, "oturumlar", "ag.json")
GUNLUK = os.path.join(KOK, "oturumlar", "tahta_sunucu.log")
PORT_VARSAYILAN = 8788
GOVDE_TAVAN = 1024 * 1024          # 1 MB — tek mesaj bundan büyük olamaz

# 🔴 TEK KİLİT: bütün oku-değiştir-yaz bu kilit altında. Numara burada doğar.
# Dosya kilidi (`T._Kilit`) AYRICA alınır: sunucu makinesinde düşüşe geçmiş
# (yerel yazan) bir istemci aynı dosyaya dokunabilir — ikisi birbirini bekler.
KILIT = threading.Lock()
_ONBELLEK = {"mtime": None, "boy": None, "kayit": None}


def gunluk(satir):
    """Kendi günlüğümüz. 🔴 `sys.__stdout__`a basar, `sys.stdout`a DEĞİL:
    `redirect_stdout` ile yakalanan iş çıktısına log satırı KARIŞMASIN."""
    damga = time.strftime("%Y-%m-%d %H:%M:%S")
    try:
        with io.open(GUNLUK, "a", encoding="utf-8") as f:
            f.write("%s  %s\n" % (damga, satir))
    except OSError:
        pass
    try:
        print("%s  %s" % (damga, satir), file=sys.__stdout__, flush=True)
    except Exception:
        pass


def ayar_oku(yol=None):
    yol = yol or AYAR_YOLU
    if not os.path.exists(yol):
        print("AYAR YOK: %s" % yol)
        sys.exit(2)
    with io.open(yol, encoding="utf-8") as f:
        a = json.load(f)
    if not a.get("jeton") or len(a["jeton"]) < 16:
        print("AYAR KUSURLU: `jeton` yok ya da 16 karakterden kisa.")
        sys.exit(2)
    return a


def port_coz(a):
    adres = str(a.get("tahta_sunucu") or "")
    if ":" in adres:
        try:
            return int(adres.rsplit(":", 1)[1])
        except ValueError:
            pass
    return PORT_VARSAYILAN


def izinli_ip(ip_metni):
    """Yalnız yerel ağ/loopback. İnternete açılan bir kapı OLMAYACAK."""
    try:
        ip = ipaddress.ip_address(ip_metni)
    except ValueError:
        return False
    if getattr(ip, "ipv4_mapped", None):
        ip = ip.ipv4_mapped
    return ip.is_private or ip.is_loopback


# ------------------------------------------------------------ kayıt
def _kayit():
    """Bellekteki tahta — dosya dışarıdan değiştiyse (düşüşteki yerel yazan)
    YENİDEN okunur. KILIT altında çağrılır."""
    try:
        st = os.stat(T.VERI)
        im = (st.st_mtime_ns, st.st_size)
    except OSError:
        im = (None, None)
    if _ONBELLEK["kayit"] is None or (_ONBELLEK["mtime"], _ONBELLEK["boy"]) != im:
        _ONBELLEK["kayit"] = T._yukle()
        _ONBELLEK["mtime"], _ONBELLEK["boy"] = im
    return _ONBELLEK["kayit"]


def _kaydet(kayit):
    try:
        T._kaydet(kayit)                  # atomik takas + TAHTA.md
    except BaseException:
        # Bellekteki kayıt değişti ama dosyaya inmedi ⇒ önbelleği AT; bir
        # sonraki istek dosyadan (gerçekten yazılmış olandan) okur.
        _ONBELLEK["kayit"] = None
        raise
    try:
        st = os.stat(T.VERI)
        _ONBELLEK["mtime"], _ONBELLEK["boy"] = st.st_mtime_ns, st.st_size
    except OSError:
        _ONBELLEK["mtime"] = None
    _ONBELLEK["kayit"] = kayit


@contextlib.contextmanager
def _yakala():
    """tahta.py'nin iş işlevleri ekrana basar; sunucuda o satırlar İSTEMCİYE
    gider. KILIT altında kullanılır (redirect_stdout süreç geneli)."""
    buf = io.StringIO()
    with contextlib.redirect_stdout(buf):
        yield buf


def _satirlar(buf):
    return [s for s in buf.getvalue().splitlines()]


# ------------------------------------------------------------ eylemler
def ey_yaz(g):
    for alan in ("kim", "kime", "mesaj"):
        if not str(g.get(alan) or "").strip():
            return 400, {"tamam": False, "kod": 2, "sebep": "%s ZORUNLU" % alan}
    with KILIT, T._Kilit(T.VERI):
        kayit = _kayit()
        # Kuyruktan gelen (düşüşte yerel yazılmış) mesaj ZATEN indiyse
        # ikinci kez yazılmaz — mükerrer, kayıptan ucuz değildir.
        yk = str(g.get("yerel_kimlik") or "")
        if yk:
            eski = next((x for x in kayit if x.get("yerel_kimlik") == yk), None)
            if eski is not None:
                return 200, {"tamam": True, "no": eski["no"], "mukerrer": True,
                             "cikti": []}
        with _yakala() as buf:
            m, kod = T._yaz_hazirla(g, kayit)
            if kod == 0:
                if yk:
                    m["yerel_kimlik"] = yk
                kod = T._yaz_ekle(kayit, m)
        cikti = _satirlar(buf)
        if kod != 0:
            # `_yaz_ekle` başarısızsa kayda dokunmamıştır (önce sınar).
            return 400, {"tamam": False, "kod": kod, "cikti": cikti}
        _kaydet(kayit)
    return 200, {"tamam": True, "no": m["no"], "kime": m["kime"],
                 "kimden": m["kimden"], "cevap": m["cevap"],
                 "vade": m["vade"], "cikti": cikti}


def _no_sayi(no):
    try:
        return int(str(no or "M-0").split("-")[-1])
    except ValueError:
        return 0


def ey_oku(g):
    with KILIT:
        kayit = _kayit()
        son = max([_no_sayi(m.get("no")) for m in kayit] or [0])
        toplam = len(kayit)
        kim = str(g.get("kim") or "").strip()
        adlar = []
        if kim and not g.get("hepsi"):
            ad_k = T._takma_adlar(kayit, kim, g.get("kimlik") or None)
            adlar = sorted(ad_k)
            secili = [m for m in kayit
                      if T._sade_ad(m["kime"]) in ad_k or m["kime"] == "HERKES"]
        else:
            secili = kayit
        try:
            son_no = int(g.get("son_no") or 0)
        except ValueError:
            son_no = 0
        if son_no:
            secili = [m for m in secili if _no_sayi(m.get("no")) > son_no]
        limit = g.get("limit")
        if limit not in (None, ""):
            try:
                secili = secili[-int(limit):] if int(limit) > 0 else []
            except ValueError:
                pass
        # kopya: kilit bırakıldıktan sonra serileştirilirken değişmesin
        secili = json.loads(json.dumps(secili, ensure_ascii=False))
    return 200, {"tamam": True, "mesajlar": secili, "toplam": toplam,
                 "son_no": son, "adlar": adlar}


def ey_isaretle(g):
    kim = str(g.get("kim") or "").strip()
    nolar = set(g.get("nolar") or [])
    if not kim:
        return 400, {"tamam": False, "sebep": "kim ZORUNLU"}
    with KILIT, T._Kilit(T.VERI):
        kayit = _kayit()
        yeni = 0
        zaman = T._simdi()
        for m in kayit:
            if m.get("no") in nolar and kim not in (m.get("okuyan") or {}):
                m.setdefault("okuyan", {})[kim] = zaman
                yeni += 1
        if yeni:
            _kaydet(kayit)
    return 200, {"tamam": True, "yeni": yeni}


def ey_islem(g):
    eylem = str(g.get("eylem") or "")
    islev = {"teyit": T._teyit_uygula, "tamam": T._tamam_uygula,
             "kapat": T._kapat_uygula}.get(eylem)
    if islev is None:
        return 400, {"tamam": False, "sebep": "tanimsiz islem",
                     "gecerli": ["kapat", "tamam", "teyit"]}
    with KILIT, T._Kilit(T.VERI):
        kayit = _kayit()
        with _yakala() as buf:
            kod = islev(kayit, g)
        cikti = _satirlar(buf)
        if kod == 0:
            _kaydet(kayit)
    return (200 if kod == 0 else 400), {"tamam": kod == 0, "kod": kod,
                                        "cikti": cikti}


def ey_html(g):
    try:
        n = max(1, min(int(g.get("son") or 200), 2000))
    except ValueError:
        n = 200
    with KILIT:
        kayit = _kayit()
        dilim = list(kayit[-n:])
        toplam = len(kayit)
    e = html.escape
    sat = []
    for m in reversed(dilim):
        acil = m.get("aciliyet") or "NORMAL"
        sat.append(
            "<tr class='%s'><td>%s</td><td>%s</td><td>%s</td><td>%s</td>"
            "<td>%s</td><td>%s</td><td class='m'>%s</td></tr>" % (
                "acil" if acil in ("ACIL", "DURDURUCU") else "",
                e(m.get("no", "")), e(m.get("zaman", "")), e(m.get("kimden", "")),
                e(m.get("kime", "")), e(m.get("cins") or "BILGI"),
                e(m.get("hal", "")), e(m.get("mesaj", ""))))
    govde = """<!doctype html><html lang="tr"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Atlas Tahtası</title><style>
:root{--zemin:#fff;--yazi:#1d1d1f;--cizgi:#ddd;--acil:#fde8e8}
@media (prefers-color-scheme:dark){:root{--zemin:#16171a;--yazi:#e6e6e6;--cizgi:#333;--acil:#4a1f1f}}
body{background:var(--zemin);color:var(--yazi);font:14px/1.4 system-ui,sans-serif;margin:16px}
table{border-collapse:collapse;width:100%%}td,th{border-bottom:1px solid var(--cizgi);padding:4px 6px;vertical-align:top;text-align:left}
td.m{white-space:pre-wrap;word-break:break-word}tr.acil{background:var(--acil)}
</style></head><body><h1>Atlas Tahtası</h1>
<p>Son %d mesaj (toplam %d) · yeniden eskiye · sunucu %s · %s</p>
<table><tr><th>No</th><th>Zaman</th><th>Kimden</th><th>Kime</th><th>Cins</th><th>Hal</th><th>Mesaj</th></tr>
%s</table></body></html>""" % (len(dilim), toplam, e(socket.gethostname()),
                                e(time.strftime("%Y-%m-%d %H:%M:%S")), "\n".join(sat))
    return 200, govde


# (yöntem, yol) → (işlev, gövde JSON mu)
EYLEMLER = {
    ("POST", "/tahta/yaz"): ey_yaz,
    ("GET", "/tahta/oku"): ey_oku,
    ("POST", "/tahta/isaretle"): ey_isaretle,
    ("POST", "/tahta/islem"): ey_islem,
    ("GET", "/tahta"): ey_html,
}


# ------------------------------------------------------------ sunucu
class Kapi(BaseHTTPRequestHandler):
    server_version = "AtlasTahta/1.0"
    protocol_version = "HTTP/1.0"
    jeton = ""

    def log_message(self, bicim, *arg):      # kendi günlüğümüz var
        pass

    def kaynak_ip(self):
        """Ayrı yöntem — SINAV ağ dışı kaynağı bu dikişten taklit eder."""
        return self.client_address[0]

    def _gonder(self, kod, govde):
        if isinstance(govde, str):
            ham, tur = govde.encode("utf-8"), "text/html; charset=utf-8"
        else:
            ham = json.dumps(govde, ensure_ascii=False).encode("utf-8")
            tur = "application/json; charset=utf-8"
        sik = "gzip" in (self.headers.get("Accept-Encoding") or "") and len(ham) > 2048
        if sik:
            ham = gzip.compress(ham, 5)
        self.send_response(kod)
        self.send_header("Content-Type", tur)
        if sik:
            self.send_header("Content-Encoding", "gzip")
        self.send_header("Content-Length", str(len(ham)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(ham)

    def _isle(self, yontem):
        kaynak = self.kaynak_ip()
        yol = urlparse(self.path)
        sorgu = {k: v[0] for k, v in parse_qs(yol.query).items()}
        iz = "%s %s" % (yontem, yol.path)

        if not izinli_ip(kaynak):
            gunluk("RED (ag disi) %s -> %s" % (kaynak, iz))
            return self._gonder(403, {"tamam": False, "sebep": "yerel ag disi"})

        verilen = self.headers.get("X-Atlas-Jeton", "") or sorgu.pop("jeton", "")
        sorgu.pop("jeton", None)
        # hmac.compare_digest: jetonu karakter karakter sızdırmayan karşılaştırma
        if not hmac.compare_digest(verilen.encode("utf-8"), self.jeton.encode("utf-8")):
            gunluk("RED (jeton) %s -> %s" % (kaynak, iz))
            return self._gonder(401, {"tamam": False, "sebep": "jeton yanlis"})

        islev = EYLEMLER.get((yontem, yol.path.rstrip("/") or "/"))
        if islev is None:
            gunluk("RED (eylem yok) %s -> %r" % (kaynak, iz))
            return self._gonder(404, {"tamam": False, "sebep": "tanimsiz uc",
                                      "gecerli": sorted("%s %s" % k for k in EYLEMLER)})
        g = dict(sorgu)
        if yontem == "POST":
            try:
                boy = int(self.headers.get("Content-Length") or 0)
            except ValueError:
                boy = -1
            if boy < 0 or boy > GOVDE_TAVAN:
                return self._gonder(413, {"tamam": False, "sebep": "govde boyu"})
            try:
                govde = json.loads(self.rfile.read(boy).decode("utf-8") or "{}")
                if not isinstance(govde, dict):
                    raise ValueError("nesne degil")
            except Exception as e:
                return self._gonder(400, {"tamam": False, "sebep": "JSON: %s" % e})
            g.update(govde)
        try:
            kod, sonuc = islev(g)
        except BaseException as e:            # _kaydet sys.exit(3) atabilir
            _ONBELLEK["kayit"] = None         # yarım değişmiş bellek ATILIR
            gunluk("ARIZA %s: %s: %s" % (iz, type(e).__name__, e))
            return self._gonder(503, {"tamam": False, "sebep": "%s: %s"
                                      % (type(e).__name__, e)})
        ek = (" %s" % sonuc.get("no")) if isinstance(sonuc, dict) and sonuc.get("no") else ""
        gunluk("KABUL %s -> %s%s · kim=%s" % (kaynak, iz, ek, g.get("kim", "")))
        self._gonder(kod, sonuc)

    def do_GET(self):
        self._isle("GET")

    def do_POST(self):
        self._isle("POST")


def kur(jeton, port, bag="0.0.0.0", kapi=Kapi):
    """Sunucuyu kurar ama KOŞTURMAZ (sınav kendi ipliğinde koşturur)."""
    kapi.jeton = jeton
    s = ThreadingHTTPServer((bag, port), kapi)
    s.daemon_threads = True
    return s


def main(argv):
    def al(ad):
        return argv[argv.index(ad) + 1] if ad in argv and argv.index(ad) + 1 < len(argv) else None
    global GUNLUK
    a = ayar_oku(al("--ag"))
    if al("--gunluk"):                        # sınav gerçek günlüğü kirletmesin
        GUNLUK = os.path.abspath(al("--gunluk"))
    if al("--tahta"):
        T.VERI = os.path.abspath(al("--tahta"))
        T.GORUNUM = os.path.join(os.path.dirname(T.VERI), "TAHTA.md")
    port = int(al("--port") or port_coz(a))
    bag = al("--bag") or "0.0.0.0"
    s = kur(a["jeton"], port, bag)
    gunluk("TAHTA SUNUCUSU ayakta · makine=%s · %s:%d · tahta=%s · pid=%d"
           % (socket.gethostname(), bag, port, T.VERI, os.getpid()))
    try:
        s.serve_forever()
    except KeyboardInterrupt:
        gunluk("TAHTA SUNUCUSU durduruldu (elle)")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
