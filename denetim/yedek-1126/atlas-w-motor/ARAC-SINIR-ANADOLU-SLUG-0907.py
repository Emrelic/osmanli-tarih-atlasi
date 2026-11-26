# -*- coding: utf-8 -*-
"""
ARAC-SINIR-ANADOLU-SLUG-0907 — SINIR-ANADOLU-0907 · 7 Eylul 2026

TDV slug taramasi. CLAUDE.md §4:
   302 = OLU (arama sayfasina yonleniyor)
   200 = madde VAR  —  ama "DOGRU madde" DEMEK DEGILDIR (`ordu` askeri ordudur)
   ⇒ ikinci kova ASLA "temiz" diye raporlanmaz: `CANLI ama DOGRULANMADI`
   ⇒ 000 bir HTTP kodu DEGILDIR, tasima arizasidir — "olu" diye damgalanmaz,
     YENIDEN olculur (§4⑤)
"""
import sys, io, json, os, urllib.request, urllib.error, ssl
from concurrent.futures import ThreadPoolExecutor

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CIKTI = os.path.join(KOK, "denetim", "OLCUM-SLUG-ANADOLU-0907.json")

SLUGLAR = [
    # antlasmalar
    "lozan-antlasmasi", "lozan", "kars-antlasmasi", "kars", "moskova-antlasmasi",
    "ankara-itilafnamesi", "ankara-antlasmasi", "mudanya-mutarekesi", "sevr-antlasmasi",
    "misak-i-milli", "erzurum-antlasmasi", "kasr-i-sirin-antlasmasi", "zuhab-antlasmasi",
    "cezayir-antlasmasi", "berlin-antlasmasi", "istanbul-antlasmasi",
    # yer / bolge
    "hatay", "iskenderun", "musul", "kerkuk", "agri", "nahcivan", "karabag",
    "zengezur", "batum", "artvin", "kars--sehir", "ardahan", "sattularap",
    "meric", "edirne", "karaagac", "bozcaada", "imroz",
    # ulke
    "turkiye", "iran", "irak", "suriye", "gurcistan", "ermenistan", "azerbaycan",
    "bulgaristan", "yunanistan", "turkmenistan", "afganistan", "pakistan", "rusya",
]

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE


def olc(slug):
    url = "https://islamansiklopedisi.org.tr/" + slug
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}, method="GET")
    try:
        class NoRedir(urllib.request.HTTPRedirectHandler):
            def redirect_request(self, *a, **k):
                return None
        op = urllib.request.build_opener(NoRedir, urllib.request.HTTPSHandler(context=ctx))
        try:
            r = op.open(req, timeout=25)
            return slug, r.status, len(r.read())
        except urllib.error.HTTPError as e:
            return slug, e.code, 0
    except Exception as ex:
        return slug, 0, str(ex)[:60]   # 000 = TASIMA ARIZASI, "olu" DEGIL


def main():
    with ThreadPoolExecutor(max_workers=8) as ex:
        sonuc = list(ex.map(olc, SLUGLAR))
    # 000 alanlari BIR KEZ daha olc (§4⑤)
    tekrar = [s for s, k, _ in sonuc if k == 0]
    if tekrar:
        print("000 alan", len(tekrar), "slug yeniden olculuyor:", tekrar)
        with ThreadPoolExecutor(max_workers=4) as ex:
            yeni = {s: (k, b) for s, k, b in ex.map(olc, tekrar)}
        sonuc = [(s, yeni[s][0], yeni[s][1]) if s in yeni else (s, k, b) for s, k, b in sonuc]

    canli = [(s, b) for s, k, b in sonuc if k == 200]
    olu = [s for s, k, _ in sonuc if k in (301, 302, 303, 307, 308)]
    hata = [(s, k, b) for s, k, b in sonuc if k not in (200, 301, 302, 303, 307, 308)]

    print("\n🟢 CANLI ama DOGRULANMADI (%d):" % len(canli))
    for s, b in sorted(canli):
        bay = b if isinstance(b, int) else 0
        dmg = "  ⚠️ BOILERPLATE SUPHESI (<2000)" if bay < 2000 else ""
        print("   %-28s %8d bayt%s" % (s, bay, dmg))
    print("\n🔴 OLU (%d): %s" % (len(olu), ", ".join(sorted(olu))))
    if hata:
        print("\n⚪ OLCULEMEDI (%d): %s" % (len(hata), hata))

    json.dump({
        "_NOT": "TDV slug taramasi. 200 = 'madde var', 'DOGRU madde' DEGIL (CLAUDE.md §4②).",
        "canli_ama_dogrulanmadi": {s: b for s, b in canli},
        "olu_302": sorted(olu),
        "olculemedi": hata,
    }, open(CIKTI, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("\nyazildi:", CIKTI)


if __name__ == "__main__":
    main()
