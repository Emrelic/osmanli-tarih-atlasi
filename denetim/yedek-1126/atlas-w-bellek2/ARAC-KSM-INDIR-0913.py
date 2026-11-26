# -*- coding: utf-8 -*-
"""FERHATPASA-KOSE — kaynak metinlerini indirir, scratchpad'e önbellekler (SALT OKUR, veri yazmaz).

Kullanım:  py denetim/ARAC-KSM-INDIR-0913.py <hedef_dizin> <ad>=<url> [<ad>=<url> ...]
Her url için HTTP kodu, son url (yönlendirme) ve bayt sayısı basılır.
"""
import sys, io, os, urllib.request, urllib.error

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"
hedef = sys.argv[1]
os.makedirs(hedef, exist_ok=True)


class NoRedir(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k):
        return None


for arg in sys.argv[2:]:
    ad, url = arg.split("=", 1)
    # önce yönlendirmesiz kod (TDV 302 = ölü slug)
    kod = None
    try:
        op = urllib.request.build_opener(NoRedir)
        r = op.open(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=60)
        kod = r.status
    except urllib.error.HTTPError as e:
        kod = e.code
    except Exception as e:
        kod = "ERR:" + type(e).__name__
    try:
        r = urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=300)
        b = r.read()
        yol = os.path.join(hedef, ad)
        open(yol, "wb").write(b)
        print(ad, "kod(ilk)=", kod, "son=", r.geturl(), "bayt=", len(b))
    except urllib.error.HTTPError as e:
        print(ad, "kod(ilk)=", kod, "HATA", e.code)
    except Exception as e:
        print(ad, "kod(ilk)=", kod, "HATA", type(e).__name__, e)
