# -*- coding: utf-8 -*-
"""AÇ — buradan ağa emir gönderen istemci.

    py arac/ac.py --hepsi              hepsinde Claude'u aç
    py arac/ac.py UMIT HAVVA           yalnız bu ikisinde
    py arac/ac.py --durum              kim ayakta, Claude açık mı (hiçbir şey açmaz)
    py arac/ac.py --durum UMIT         tek makinenin durumu

ÖNCE DURUM, SONRA AÇ: `--durum` hiçbir şeyi değiştirmez; ulaşamadığın
makineye emir göndermek, ulaşamadığını ÖLÇMEDEN hüküm vermektir.

Ayar: oturumlar/ag.json (depoya girmez).  Yoksa: py arac/acici_kur.py --ornek
"""
import io
import json
import os
import sys
import time
import concurrent.futures as cf
from urllib.request import urlopen, Request
from urllib.error import HTTPError, URLError

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AYAR_YOLU = os.path.join(KOK, "oturumlar", "ag.json")
ZAMAN_ASIMI = 25          # claude-ac icinde 4 sn bekleme + powershell var


def ayar_oku():
    if not os.path.exists(AYAR_YOLU):
        print("AYAR YOK: %s" % AYAR_YOLU)
        print("Once sunu kostur:  py arac/acici_kur.py --ornek")
        sys.exit(2)
    with io.open(AYAR_YOLU, encoding="utf-8") as f:
        return json.load(f)


def sor(ad, ip, port, jeton, eylem):
    url = "http://%s:%d/?eylem=%s" % (ip, port, eylem)
    istek = Request(url, headers={"X-Atlas-Jeton": jeton})
    t0 = time.time()
    try:
        with urlopen(istek, timeout=ZAMAN_ASIMI) as c:
            veri = json.loads(c.read().decode("utf-8"))
        veri["_sure"] = time.time() - t0
        return ad, veri
    except HTTPError as e:
        try:
            govde = json.loads(e.read().decode("utf-8"))
        except Exception:
            govde = {}
        return ad, {"tamam": False,
                    "sebep": govde.get("sebep", "HTTP %d" % e.code),
                    "_sure": time.time() - t0}
    except URLError as e:
        # EN SIK iki sebep: acici kosmuyor · guvenlik duvari kapali tutuyor
        return ad, {"tamam": False,
                    "sebep": "ulasilamadi (%s)" % getattr(e, "reason", e),
                    "_sure": time.time() - t0}
    except Exception as e:
        return ad, {"tamam": False, "sebep": "%s: %s" % (type(e).__name__, e),
                    "_sure": time.time() - t0}


def main():
    arg = sys.argv[1:]
    durum_mu = "--durum" in arg
    hepsi = "--hepsi" in arg
    adlar = [a for a in arg if not a.startswith("--")]

    a = ayar_oku()
    port = int(a.get("port", 8787))
    jeton = a["jeton"]
    makineler = a.get("makineler", {})
    if not makineler:
        print("AYARDA MAKINE YOK — oturumlar/ag.json icindeki `makineler`i doldur.")
        sys.exit(2)

    if hepsi or not adlar:
        hedef = dict(makineler)
    else:
        hedef = {}
        for ad in adlar:
            anahtar = next((k for k in makineler if k.lower() == ad.lower()), None)
            if anahtar is None:
                print("TANIMSIZ MAKINE: %s   (tanimlilar: %s)"
                      % (ad, ", ".join(sorted(makineler))))
                sys.exit(2)
            hedef[anahtar] = makineler[anahtar]

    eylem = "durum" if durum_mu else "claude-ac"
    print("=" * 72)
    print("%s  ->  %d makine: %s" % (eylem.upper(), len(hedef),
                                     ", ".join(sorted(hedef))))
    print("=" * 72)

    with cf.ThreadPoolExecutor(max_workers=8) as havuz:
        isler = [havuz.submit(sor, ad, ip, port, jeton, eylem)
                 for ad, ip in sorted(hedef.items())]
        sonuclar = [i.result() for i in isler]

    ulasan = 0
    for ad, s in sorted(sonuclar):
        if not s.get("tamam"):
            print("  [X] %-7s %s   (%.1f sn)" % (ad, s.get("sebep", "?"), s["_sure"]))
            continue
        ulasan += 1
        if eylem == "durum":
            print("  [OK] %-7s makine=%s kullanici=%s claude_surec=%s  (%.1f sn)"
                  % (ad, s.get("makine", "?"), s.get("kullanici", "?"),
                     s.get("claude_surec", "?"), s["_sure"]))
        else:
            print("  [OK] %-7s surec %s -> %s · %s  (%.1f sn)"
                  % (ad, s.get("surec_once", "?"), s.get("surec_sonra", "?"),
                     s.get("yorum", ""), s["_sure"]))

    print("-" * 72)
    print("ULASILAN: %d/%d" % (ulasan, len(hedef)))
    if eylem == "claude-ac":
        print()
        print("DIKKAT: uygulamanin ACILMASI, oturumun UZAKTAN KUMANDAYA")
        print("        baglanmasi demek DEGILDIR.  Remote Control anahtari")
        print("        OTURUM BASINA ayridir ve arayuzden acilir.")
    sys.exit(0 if ulasan == len(hedef) else 1)


if __name__ == "__main__":
    main()
