# -*- coding: utf-8 -*-
"""TDV gövde çekici — EKOKUMA-SIMGE-0070 (20 Eylül 2026).

NİÇİN: WebFetch özeti bir MODELİN okuması; "geçmiyor" dediğinde bu, belge hakkında değil
ÇIKARICI hakkında bir cümledir (CLAUDE.md §4, D211 ⑦). Bu alet gövdeyi HAM çeker ve
aranan kelimenin geçtiği cümleleri OLDUĞU GİBİ basar — hüküm okuyana kalır.

KULLANIM:
  py denetim/ARAC-TDV-GOVDE-0920.py <slug> [kelime1 kelime2 ...]
  py denetim/ARAC-TDV-GOVDE-0920.py bucak 1812 1856 Bolgrad Kahul
Kelime verilmezse gövdenin ilk 3000 karakteri basılır.
"""
import sys, re, html, urllib.request

sys.stdout.reconfigure(encoding="utf-8")


def govde(slug):
    url = "https://islamansiklopedisi.org.tr/" + slug
    istek = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    ham = urllib.request.urlopen(istek, timeout=60).read().decode("utf-8", "replace")
    m = re.search(r"Kopyalama metni(.*?)(?:BİBLİYOGRAFYA|Müellif:|</body>)", ham, re.S)
    g = m.group(1) if m else ham
    g = re.sub(r"<script.*?</script>", " ", g, flags=re.S)
    g = re.sub(r"<style.*?</style>", " ", g, flags=re.S)
    g = html.unescape(re.sub(r"<[^>]+>", " ", g))
    return re.sub(r"\s+", " ", g).strip()


def main():
    if len(sys.argv) < 2:
        print(__doc__); return
    slug, kelimeler = sys.argv[1], sys.argv[2:]
    g = govde(slug)
    print("slug: %s · gövde uzunluğu: %d karakter" % (slug, len(g)))
    if len(g) < 400:
        print("⚠️ GÖVDE KISA/BOŞ — ölü slug ya da boilerplate olabilir (D211 ①③④)")
    if not kelimeler:
        print(g[:3000]); return
    for k in kelimeler:
        bulundu = 0
        for m in re.finditer(re.escape(k), g, re.I):
            bulundu += 1
            bas = max(0, m.start() - 320); son = min(len(g), m.end() + 320)
            print("\n=== %s (%d) ===\n… %s …" % (k, bulundu, g[bas:son]))
            if bulundu >= 3:
                break
        if not bulundu:
            print("\n=== %s: GÖVDEDE GEÇMİYOR ===" % k)


if __name__ == "__main__":
    main()
