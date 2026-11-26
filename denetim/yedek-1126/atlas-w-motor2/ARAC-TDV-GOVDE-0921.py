# ARAC-TDV-GOVDE-0921 — TDV maddesinin GÖVDESİNİ çeker ve ölü slug'ı AYIRT EDER.
# Niçin: D211 ① "ölü slug (302)" ile ③ "boş gövde" tarayıcıda aynı görünür;
# `curl -L` ikisini de 200 gösterir çünkü 302 arama sayfasına gider.
# Bu alet SON URL'ye bakar: /arama ile bitiyorsa ya da /arama/ içeriyorsa ÖLÜ der.
#
# Kullanım:
#   py denetim/ARAC-TDV-GOVDE-0921.py <slug>                 → gövdenin ilk 6000 karakteri
#   py denetim/ARAC-TDV-GOVDE-0921.py <slug> <kelime> [...]  → o kelimelerin geçtiği CÜMLELER
#
# 🔴 D211 ⑧: rakamın gövdede geçmesi o değeri desteklediği anlamına GELMEZ —
#    bu alet cümleyi getirir, hükmü SEN verirsin. "aynı yıl" gibi geri gönderen
#    ifadelerde bir ÖNCEKİ cümleyi de okumak şarttır.
# 🔴 Windows'ta çıktı bozuk görünüyorsa: export PYTHONIOENCODING=utf-8
import sys, re, urllib.request


def cek(slug):
    url = "https://islamansiklopedisi.org.tr/" + slug
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urllib.request.urlopen(req, timeout=40) as r:
            return r.geturl(), r.read().decode("utf-8", "replace")
    except Exception as e:
        return None, "HATA " + str(e)


def govde(ham):
    m = re.search(r'<div[^>]*class="[^"]*(?:text-justify|madde-content|icerik)[^"]*"[^>]*>(.*?)</div>\s*</div>', ham, re.S)
    g = m.group(1) if m else ham
    g = re.sub(r"<script.*?</script>", " ", g, flags=re.S)
    g = re.sub(r"<style.*?</style>", " ", g, flags=re.S)
    g = re.sub(r"<[^>]+>", " ", g)
    g = g.replace("&nbsp;", " ").replace("&amp;", "&").replace("&quot;", '"').replace("&#39;", "'")
    return re.sub(r"\s+", " ", g).strip()


def main():
    if len(sys.argv) < 2:
        print(__doc__ or "kullanım: py denetim/ARAC-TDV-GOVDE-0921.py <slug> [kelime ...]")
        return 2
    slug, kelimeler = sys.argv[1], sys.argv[2:]
    son, ham = cek(slug)
    if son is None:
        print(ham)
        return 1
    olu = "/arama" in son
    print("SLUG:", slug, "| son URL:", son, "|", "ÖLÜ (302 → arama)" if olu else "CANLI")
    g = govde(ham)
    print("gövde uzunluk:", len(g))
    if olu:
        print("🔴 Bu slug bir maddeye GİTMİYOR — gövde arama sayfasınındır, okuma.")
        return 1
    if len(g) < 3000:
        print("⚠️ Gövde kısa (<3000) — yönlendirme maddesi ya da eksik çekim olabilir (D211 ③/⑦).")
    if not kelimeler:
        print(g[:6000])
        return 0
    cumleler = re.split(r"(?<=[.!?])\s+", g)
    for k in kelimeler:
        print("\n--- '" + k + "' geçen cümleler ---")
        bulundu = 0
        for i, c in enumerate(cumleler):
            if k.lower() in c.lower():
                if re.search(r"aynı yıl|aynı tarihte|bu tarihte|o yıl", c, re.I) and i > 0:
                    print("  ↖ (önceki cümle)", cumleler[i - 1].strip()[:400])
                print("  •", c.strip()[:900])
                bulundu += 1
                if bulundu >= 12:
                    break
        if not bulundu:
            print("  (yok) — 'TDV'de yok' DEMEDEN ÖNCE: arama sayfasını dene")
            print("         https://islamansiklopedisi.org.tr/arama/?q=" + k)
    return 0


if __name__ == "__main__":
    sys.exit(main())
