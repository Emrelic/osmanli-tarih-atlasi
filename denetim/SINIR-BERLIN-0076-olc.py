# -*- coding: utf-8 -*-
"""SINIR-BERLIN-0076 ölçüm aleti — SALT OKUR, hiçbir şeye yazmaz.

🔴 Sahiplik sırası VERI-YAPISI.md §576'nın emrettiği gibi v: -> d: -> s:
   (ters sıra makul bir sayı üretir ve SESSİZCE yanlıştır — Girit vakası).
🔴 isg: DE FACTO örtüdür, taban rengi DEĞİLDİR (girdi.py:851) — ayrı kovada.

Kullanım:
  py denetim/SINIR-BERLIN-0076-olc.py ad <parça> [...]
  py denetim/SINIR-BERLIN-0076-olc.py gun  <YYYY-MM-DD> <latmin> <latmax> <lonmin> <lonmax>
  py denetim/SINIR-BERLIN-0076-olc.py dok  <YYYY-MM-DD> <latmin> <latmax> <lonmin> <lonmax>
  py denetim/SINIR-BERLIN-0076-olc.py pencere <baslangic> <bitis> <latmin> <latmax> <lonmin> <lonmax>
  py denetim/SINIR-BERLIN-0076-olc.py kunye <parça>
  py denetim/SINIR-BERLIN-0076-olc.py devlet <kimlik> <YYYY-MM-DD>
"""
import sys
import io
import os

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "arac"))
sys.path.insert(0, os.path.dirname(__file__))
import girdi  # noqa: E402

# 🔴 D215 / M-5024: kendi .lower()'ımla arama YAPMAM — "I".lower() ve ı/İ
# NFKD'den sağ çıkıp süzgeçte SESSİZCE silinir, "0 bulundu" YALAN olur.
# TEK normalleştirici denetim/ARAC-NORMAL-0903.py'nin norm()'udur.
import importlib.util as _iu  # noqa: E402
_sp = _iu.spec_from_file_location(
    "arac_normal", os.path.join(os.path.dirname(__file__), "ARAC-NORMAL-0903.py"))
_m = _iu.module_from_spec(_sp)
_sp.loader.exec_module(_m)
norm = _m.norm

TAVAN = "9999-12-31"


def pad(g):
    if not g:
        return None
    p = str(g).split("-")
    p += ["01"] * (3 - len(p))
    return "%04d-%02d-%02d" % (int(p[0]), int(p[1]), int(p[2]))


def aktif(donemler, gun):
    out = []
    for p in donemler or []:
        f = pad(p.get("f")) or "0001-01-01"
        t = pad(p.get("t")) or TAVAN
        if f <= gun <= t:
            out.append(p)
    return out


def sahip(y, gun):
    """v: -> d: -> s: sırası. (taban renk sahibi) + isg: ayrı döner."""
    isg = aktif(y.get("isg"), gun)
    isgal = isg[0].get("d") if isg else None
    v = aktif(y.get("v"), gun)
    if v:
        kid = v[0].get("kid") or v[0].get("d") or v[0].get("k") or "?"
        return "TABI:" + str(kid), isgal
    if aktif(y.get("d"), gun):
        return "OSMANLI", isgal
    s = aktif(y.get("s"), gun)
    if s:
        return str(s[0].get("d") or "?"), isgal
    return "<SAHIPSIZ>", isgal


def yazdir_donem(kat, p):
    d = p.get("d") or p.get("kid") or p.get("k") or ""
    return "%s[%s %s..%s]" % (kat, d or "-", p.get("f") or "-", p.get("t") or "-")


def donem_ozet(y):
    parca = []
    for kat in ("s", "d", "v", "isg"):
        for p in y.get(kat) or []:
            parca.append(yazdir_donem(kat, p))
    return " ".join(parca) if parca else "<DONEM YOK>"


def bbox_sec(Y, a):
    latmin, latmax, lonmin, lonmax = [float(x) for x in a]
    out = []
    for y in Y:
        la, lo = y.get("lat"), y.get("lon")
        if la is None or lo is None:
            continue
        if latmin <= la <= latmax and lonmin <= lo <= lonmax:
            out.append(y)
    return out


def main():
    Y = girdi.yukle(sessiz=True)
    mod = sys.argv[1]

    if mod == "ad":
        # 🔴 ATEŞLEME SINAVI (YASALAR B9) — "0 bulundu" demeden önce aramanın
        # çalıştığı KANITLANIR. Bilinen pozitif vaka: ı · İ · ş · ğ içeren ad.
        sinav = [("iskodra", "İşkodra"), ("kostendil", "Köstendil"),
                 ("nis", "Niş"), ("igumenitsa", "İgumenitsa (Gomenice)"),
                 ("bogurdelen", "Böğürdelen (Šabac)")]
        kirik = [h for h, a in sinav if norm(h) not in norm(a)]
        if kirik:
            print("🔴 SÜZGEÇ KIRIK — şu pozitif vakalar tutmadı: %s" % kirik)
            return
        print("✓ süzgeç ateşleme sınavı: %d/%d pozitif vaka tuttu" % (
            len(sinav), len(sinav)))
        aranan = [norm(a) for a in sys.argv[2:]]
        bulunan = {a: 0 for a in aranan}
        for y in Y:
            n = norm(y["ad"])
            hit = [a for a in aranan if a in n]
            if hit:
                for a in hit:
                    bulunan[a] += 1
                print("%-30s %8.3f %8.3f  [%s]" % (
                    y["ad"], y.get("lat", 0), y.get("lon", 0), y.get("_kaynak", "?")))
                print("    " + donem_ozet(y))
        bos = [a for a, n in bulunan.items() if n == 0]
        if bos:
            print("--- BULUNAMADI (süzgeç sınavı GEÇTİ, yani bu bir SONUÇ): %s"
                  % ", ".join(bos))

    elif mod in ("gun", "dok"):
        gun = pad(sys.argv[2])
        sec = bbox_sec(Y, sys.argv[3:7])
        sayac, satir = {}, []
        for y in sec:
            s, isgal = sahip(y, gun)
            k = s + ("  +isg:" + isgal if isgal else "")
            sayac[k] = sayac.get(k, 0) + 1
            satir.append((k, y["ad"], y.get("lat"), y.get("lon")))
        print("=== %s · %d nokta" % (gun, len(sec)))
        for k, n in sorted(sayac.items(), key=lambda kv: -kv[1]):
            print("  %5d  %s" % (n, k))
        if mod == "dok":
            print("--- nokta nokta")
            for a, ad, la, lo in sorted(satir):
                print("  %-36s %-28s %7.3f %8.3f" % (a, ad, la, lo))

    elif mod == "pencere":
        """Pencere İÇİNDE başlayan s:/v:/isg: dönemlerini döker — de jure mi
        de facto mı kodlanmış sorusunun ölçümü."""
        bas, bit = pad(sys.argv[2]), pad(sys.argv[3])
        sec = bbox_sec(Y, sys.argv[4:8])
        sayac = {"s": 0, "v": 0, "isg": 0}
        for y in sec:
            for kat in ("s", "v", "isg"):
                for p in y.get(kat) or []:
                    f = pad(p.get("f"))
                    if f and bas <= f <= bit:
                        sayac[kat] += 1
                        print("  %-4s %-28s %-26s f=%-12s t=%-12s" % (
                            kat, y["ad"],
                            p.get("d") or p.get("kid") or p.get("k") or "-",
                            p.get("f"), p.get("t") or "-"))
        print("=== %s..%s · %d nokta tarandı" % (bas, bit, len(sec)))
        print("    s: %d  ·  v: %d  ·  isg: %d" % (
            sayac["s"], sayac["v"], sayac["isg"]))

    elif mod == "devlet":
        kim, gun = sys.argv[2], pad(sys.argv[3])
        n = 0
        for y in Y:
            s, isgal = sahip(y, gun)
            if s == kim or s == "TABI:" + kim or isgal == kim:
                n += 1
                print("  %-28s %7.3f %8.3f  %s%s" % (
                    y["ad"], y.get("lat", 0), y.get("lon", 0), s,
                    "  +isg:" + isgal if isgal else ""))
        print("=== %s · %s · %d nokta" % (kim, gun, n))

    elif mod == "kunye":
        D = girdi.oku_devletler()
        ara = sys.argv[2].lower()
        it = D.items() if isinstance(D, dict) else ((d.get("id"), d) for d in D)
        for kid, d in it:
            metin = (str(kid) + " " + str(d.get("ad", "")) + " " +
                     str(d.get("bolge", ""))).lower()
            if ara in metin:
                print("%-32s %-36s f=%-12s t=%-12s harita=%s" % (
                    kid, d.get("ad", ""), d.get("f", "-"), d.get("t", "-"),
                    d.get("harita", "")))

    else:
        print(__doc__)


if __name__ == "__main__":
    main()
