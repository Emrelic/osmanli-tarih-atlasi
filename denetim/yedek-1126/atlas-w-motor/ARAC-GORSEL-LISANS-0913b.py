# -*- coding: utf-8 -*-
"""GÖRSEL LİSANS SINAVI — 0913b (GORSEL-DALGA2 kopyası, ASIL ALETE DOKUNULMADI)

    py denetim/ARAC-GORSEL-LISANS-0913b.py <url1> <url2> ...
    py denetim/ARAC-GORSEL-LISANS-0913b.py --dosya <url-listesi.txt>

Asıl alet: denetim/ARAC-GORSEL-LISANS-0913.py (KITA 24). Bu kopya, KITA 22'nin
ölçüp bildirdiği ÜÇ YANLIŞ NEGATİFİ düzeltir (denetim/BULGU-KITA22-PADISAH-0913.md §5):

 ① ÖNEK KURALI "PD"de işlemiyordu — `PD-Abdul_Hamid` · `PD-Bain` · `PD-Detroit` ·
    `PD_Old` · `PD_US` · `PD_Tr` · `PD-1996` Commons'ın GERÇEK kamu malı lisans
    kategorileri, ama asıl aletin kapalı önek listesinde yoklar ⇒ RED.
    ÇARE: `PD-` ya da `PD_` ile başlayan her kategori KABUL adayı. Asıl aletin
    kaygısı ("PD_Old gibi bakımsız kategoriler") burada kasıtlı olarak KABUL
    ediliyor: `PD_Old` bir KAMU MALI kategorisidir, bakımsız olması lisansı
    değiştirmez. Bare "PD" TAM eşitlikle kalır (üç harflik önek tuzağı yok,
    çünkü ayraç `-`/`_` ŞART).
 ② CC0'ı göremiyordu — Commons kategori adı `CC-Zero`, aletin jetonu `CC0`.
    ÇARE: `CC-Zero` TAM eşitlikle KABUL kümesine eklendi.
 ③ ASCII dışı URL'de çöküyordu (`'ascii' codec … '\\xfc'`).
    ÇARE: URL `urllib.parse.quote` ile yüzde-kodlanır (zaten kodluysa bozulmaz).

🔴 BİLEREK KABUL EDİLMEYEN: `CC-PD-Mark` (Public Domain Mark) TEK BAŞINA —
   bir etiket, bir lisans şablonu değil; yanında bir `PD-*` kategorisi yoksa
   sayfa RED kalır (ör. "Abdullah frères - Sultan Ahmet camii, Istanbul.jpg":
   yalnız CC-PD-Mark, yazar/tarih boş). RED listesi ve "RED her şeyi ezer"
   kuralı asıl aletle AYNI.
"""
import io
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KABUL_TAM = ("PD", "CC0", "CC-Zero")
KABUL_ONEK_AYRACLI = ("PD-", "PD_")
RET_TAM = ("FAL", "OTRS", "GFDL")
RET_ONEKLI = ("CC-BY-SA", "CC-BY", "Copyrighted free use",
              "Attribution", "Non-free")
KATEGORI_RX = re.compile(r'Category:([A-Za-z0-9][\w().+-]*)')


def _kodla(url):
    return urllib.parse.quote(url, safe=":/%()',_-.~!*;=&?+@#")


def _getir(url, deneme=3):
    son_hata = None
    for i in range(deneme):
        try:
            req = urllib.request.Request(
                _kodla(url), headers={"User-Agent": "osmanli-tarih-atlasi-lisans-sinavi/1.0b"})
            with urllib.request.urlopen(req, timeout=25) as r:
                return r.read().decode("utf-8", "replace")
        except urllib.error.HTTPError as e:
            son_hata = e
            if e.code in (404, 410):
                break
            time.sleep(1.5)
        except Exception as e:  # noqa: BLE001
            son_hata = e
            time.sleep(1.5)
    print("  [AĞ HATASI] %s — %s" % (url, son_hata))
    return None


def sina(url):
    html = _getir(url)
    if html is None:
        return None, None, "ÖLÇÜLEMEDİ", "sayfa getirilemedi (ağ/zaman aşımı)"
    kategoriler = set(KATEGORI_RX.findall(html))
    kabul_bulunan = sorted(c for c in kategoriler
                           if c in KABUL_TAM or c.startswith(KABUL_ONEK_AYRACLI))
    red_bulunan = sorted(c for c in kategoriler
                         if c.upper() in RET_TAM or
                         any(c.upper().startswith(b.upper()) for b in RET_ONEKLI))
    if red_bulunan:
        return kabul_bulunan, red_bulunan, "RED", (
            "yasak kategori(ler) de bağlı: %s" % ", ".join(red_bulunan))
    if kabul_bulunan:
        return kabul_bulunan, red_bulunan, "KABUL", "kategori: %s" % ", ".join(kabul_bulunan)
    return [], [], "RED", "kabul edilen lisans kategorisi bulunamadı"


def main(argv):
    if "--dosya" in argv:
        yol = argv[argv.index("--dosya") + 1]
        urller = [s.strip() for s in io.open(yol, encoding="utf-8")
                  if s.strip() and not s.strip().startswith("#")]
    else:
        urller = [a for a in argv if a.startswith("http")]
    if not urller:
        print("kullanım: py denetim/ARAC-GORSEL-LISANS-0913b.py <url...> | --dosya <liste.txt>")
        return 2
    sayim = {"KABUL": 0, "RED": 0, "ÖLÇÜLEMEDİ": 0}
    for u in urller:
        kabul, red, hukum, sebep = sina(u)
        sayim[hukum] += 1
        im = {"KABUL": "🟢", "RED": "🔴", "ÖLÇÜLEMEDİ": "⚪"}[hukum]
        print("%s %-8s %-70s %s" % (im, hukum, urllib.parse.unquote(u)[:70], sebep))
    print()
    print("=== SONUÇ — %d URL ===" % len(urller))
    for k in ("KABUL", "RED", "ÖLÇÜLEMEDİ"):
        print("  %-12s %d" % (k, sayim[k]))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
