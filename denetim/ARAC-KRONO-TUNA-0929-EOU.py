# KRONO-TUNA-0929 — Encyclopedia of Ukraine (Canadian Institute of Ukrainian Studies,
# University of Alberta · encyclopediaofukraine.com) sayfalarını çekip düz metne çevirir.
# Akademik kurumsal kaynak (CLAUDE.md §4: TDV'nin kapsamadığı tanecikte meşru, AÇIKÇA yazılır).
# Kullanım: py denetim/ARAC-KRONO-TUNA-0929-EOU.py P/E/PereiaslavTreatyof1654 [...]
# Yazar: denetim/KRONO-TUNA-0929-eou-onbellek/<Ad>.txt · HTTP kodu ve gövde uzunluğu basılır.
import sys, re, os, html, urllib.request, urllib.parse
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "KRONO-TUNA-0929-eou-onbellek")
os.makedirs(KOK, exist_ok=True)

def duz(h):
    t = re.sub(r"<script.*?</script>", " ", h, flags=re.S | re.I)
    t = re.sub(r"<style.*?</style>", " ", t, flags=re.S | re.I)
    t = re.sub(r"<(br|/p|/div|/h\d|/li|/tr)[^>]*>", "\n", t, flags=re.I)
    t = re.sub(r"<[^>]+>", " ", t)
    t = html.unescape(t)
    t = re.sub(r"[ \t\r\f\v]+", " ", t)
    return re.sub(r"\n\s*\n+", "\n", t).strip()

for yol in sys.argv[1:]:
    ad = yol.split("/")[-1]
    lp = "pages\\" + yol.replace("/", "\\") + ".htm"
    url = "https://www.encyclopediaofukraine.com/display.asp?linkpath=" + urllib.parse.quote(lp)
    try:
        r = urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=40)
        kod, h = r.status, r.read().decode("utf-8", "replace")
    except Exception as e:
        kod, h = str(e)[:60], ""
    t = duz(h)
    # Sitenin çerçevesi gövdeyi "Encyclopedia of Ukraine" başlığından sonra verir;
    # bulunamayan sayfa kısa bir "not found" gövdesi döndürür — uzunluk ölçülür.
    open(os.path.join(KOK, ad + ".txt"), "w", encoding="utf-8").write(t)
    print(f"{ad}: {kod} · {len(t)} kr")
