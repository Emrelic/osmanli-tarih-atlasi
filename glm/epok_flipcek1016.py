# -*- coding: utf-8 -*-
"""GLM-I EPOK-SAHI P 1016 — 18 gerçek flip maddesini çeker, pencere cümlelerini çıkarır.
Gövde önbelleğe: denetim/GLM1-EPOK-SAHIP-1009-tdv-onbellek/<slug>.txt
Cümle çıkarımı asama1 ile aynı kurallarla (1200-1310 yıllı cümleler + 'yüzyıl' ekleri)."""
import io, json, os, re, sys, time, urllib.request
if __name__ == "__main__":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ONB = os.path.join(KOK, "denetim", "GLM1-EPOK-SAHIP-1009-tdv-onbellek")
FLIP = {
    "Bari": "bari--italya",
    "Berat": "berat--arnavutluk",
    "Biga": "biga--canakkale",
    "Bâce (Béja)": "bace--tunus",
    "Humus": "humus--suriye",
    "Kuba": "kuba--azerbaycan",
    "Mamûra (Mehdiye)": "mehdiye--fas",
    "Mansûre": "mansure--misir",
    "Mehdiye": "mehdiye--tunus",
    "Musul": "musul--irak",
    "Nihâvend": "nihavend--iran",
    "Nîşâbur": "nisabur--iran",
    "Yaş": "yas--romanya",
    "Yenipazar (Novi Pazar)": "yenipazar--sirbistan",
    "Ziştovi (Svishtov)": "zistova",
    "Âmül": "amul--iran",
    "İsmail": "ismail--ukrayna",
    "Şam": "sam--suriye",
}
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.38"
YIL = re.compile(r"\b(1[0-3]\d\d)\b")
EK = re.compile(r"(XIII|13)\.?\s*(yüzyıl|yy)")


def temizle(html):
    g = re.sub(r"<script[\s\S]*?</script>|<style[\s\S]*?</style>", " ", html)
    g = re.sub(r"<[^>]+>", " ", g)
    return re.sub(r"\s+", " ", g)


def govde_bul(html):
    m = re.search(r"article_title([\s\S]*)footer-content", html)
    g = temizle(m.group(1)) if m else ""
    if len(g) > 300:
        return g
    return temizle(html)


def cümleler(g):
    out = []
    for c in re.split(r"(?<=[.!?])\s+", g):
        y = YIL.search(c)
        if y and 1200 <= int(y.group(1)) <= 1310:
            out.append(("Y", y.group(1), c.strip()))
            continue
        if EK.search(c):
            out.append(("E", None, c.strip()))
    return out


for i, (ad, slug) in enumerate(FLIP.items()):
    dosya = os.path.join(ONB, slug + ".txt")
    if os.path.exists(dosya) and os.path.getsize(dosya) > 500:
        g = io.open(dosya, encoding="utf-8").read()
        print(f"[{i+1}/18] {ad} · önbellek")
    else:
        u = "https://islamansiklopedisi.org.tr/" + slug + "/"
        h = {"User-Agent": UA, "Accept-Language": "tr-TR,tr;q=0.9"}
        kod, html = None, ""
        for n in range(3):
            try:
                with urllib.request.urlopen(urllib.request.Request(u, headers=h), timeout=30) as c:
                    kod, html = c.status, c.read().decode("utf-8", "replace")
                break
            except Exception as ex:
                kod, html = getattr(ex, "code", None), ""
                time.sleep(3 + 2 * n)
        g = govde_bul(html) if kod == 200 else ""
        io.open(dosya, "w", encoding="utf-8").write(g)
        print(f"[{i+1}/18] {ad} · http={kod} govde={len(g)}")
        time.sleep(1.05)
    print(f"## {ad} [{slug}]")
    for tip, yil, c in cümleler(g)[:8]:
        et = f"{tip}[{yil}]" if yil else f"{tip}[--]"
        print(f"  {et} {c[:260]}")
    if not cümleler(g):
        print("  (pencere cümlesi yok)")
    print()
