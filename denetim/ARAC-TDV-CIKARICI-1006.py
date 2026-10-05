# ARAC-TDV-CIKARICI-1006 — TDV İslâm Ansiklopedisi maddesinin TEK DOĞRU metin kaynağı (UMIT-W22).
#
# Neden: 5 Ekim kişi-kaynak kampanyasında bir çıkarıcı çok bölümlü maddeyi İLK kaynakça başlığında
# kesiyordu (`hindistan` 8 bölüm / ~268 bin karakter → yalnız 1. bölüm ~23 bin). Kesik metin "kişi geçmiyor"
# (③) ya da "yalnız kapsayıcıda" (②) gibi YANLIŞ-NEGATİF üretir.
#
# Doğru yapı (HTML'den ölçüldü): div.article-parts > div.article-part (id "_1", "_2-…") > div.m-content.
# Her m-content = o bölümün gövdesi + kendi BİBLİYOGRAFYA'sı. Gövde ile kaynakça AYRI döndürülür:
# kaynakçadaki rakam/ad destek değildir (§4 ⑧ — kenesari-han vakası).
#
# Kullanım (YALNIZ OKUR, ağa çıkar; önbellek --onbellek <dizin>, yoksa önbelleksiz):
#   py ARAC-TDV-CIKARICI-1006.py --sina                      iki yönlü sınav (hindistan kesik/tam + tek bölümlü denetim)
#   py ARAC-TDV-CIKARICI-1006.py olc <slug>...               bölüm sayısı, yeni KB, eski aletlerin KB'si ve kapsaması
#   py ARAC-TDV-CIKARICI-1006.py ara <slug> <regex>          regex'i TAM gövdede arar, bölüm adıyla basar
#   py ARAC-TDV-CIKARICI-1006.py baslik <kelime>             TDV başlık araması (&p=m)
import sys, re, os, html, json, hashlib, subprocess, urllib.parse
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding="utf-8")
KOK = "https://islamansiklopedisi.org.tr/"
ONBELLEK = None


def getir(yol):
    """(http_kodu, html). Yönlendirme İZLENMEZ: 302 = ölü slug (§4 tuzak ①)."""
    if ONBELLEK:
        f = os.path.join(ONBELLEK, hashlib.md5(yol.encode()).hexdigest())
        if os.path.exists(f + ".kod"):
            return open(f + ".kod").read(), open(f + ".html", encoding="utf-8").read()
    r = subprocess.run(["curl", "-s", "-A", "Mozilla/5.0", "-w", "\n__KOD__%{http_code}", KOK + yol],
                       capture_output=True)
    govde, kod = r.stdout.decode("utf-8", "replace").rsplit("\n__KOD__", 1)
    if ONBELLEK and kod in ("200", "302"):
        open(f + ".kod", "w").write(kod)
        open(f + ".html", "w", encoding="utf-8").write(govde)
    return kod, govde


def _duz(s):
    return re.sub(r"\s+", " ", s).strip()


def tam(h):
    """Maddeyi bölümlerine ayırır. dönüş: {baslik, bolumler:[{id, govde, kaynakca}], govde, kaynakca}."""
    s = BeautifulSoup(h, "html.parser")
    b = s.select_one(".article_title")
    bolumler = []
    for p in s.select(".article-parts > .article-part"):
        mc = p.select_one(".m-content")
        if mc is None:
            continue
        t = _duz(mc.get_text(" "))
        i = t.find("BİBLİYOGRAFYA")
        bolumler.append(dict(id=p.get("id"), govde=t if i < 0 else t[:i], kaynakca="" if i < 0 else t[i:]))
    # `bk.` gönderme sayfası: gövdesi YOKTUR, .madde_sayfa_atif içindeki bağlantı(lar) hedeftir (§4: kendi
    # maddesi SAYILMAZ, hedefe gidilir). Gönderme sayfasında bölüm 0 bir KUSUR değil, sayfanın kendisidir.
    at = s.select_one(".madde_sayfa_atif")
    gonderme = [a["href"].strip("/") for a in at.select("a[href]")] if (at and not bolumler) else []
    return dict(baslik=_duz(b.get_text(" ")) if b else "",
                bolumler=bolumler, gonderme=gonderme,
                govde=" ".join(x["govde"] for x in bolumler),
                kaynakca=" ".join(x["kaynakca"] for x in bolumler))


# ---- 5 Ekim tablolarının ESKİ çıkarıcıları (scratchpad'lerden birebir aktarıldı; yalnız ölçüm için) ----
def _ham_metin(h):
    h = re.sub(r"(?is)<(script|style)[^>]*>.*?</\1>", " ", h)
    return _duz(html.unescape(re.sub(r"<[^>]+>", " ", h)))


def eski_w16(h):        # TABLO-01 · 54307855…/m.py — bütün sayfa
    return _ham_metin(h)


def eski_w19_varsayilan(h):   # TABLO-02 · d3c01881…/tdv.py, -g YOKKEN: Müellif-3000 … ilk BİBLİYOGRAFYA
    h2 = re.sub(r"(?s)<(script|style)[^>]*>.*?</\1>", " ", h)
    h2 = re.sub(r"<br\s*/?>|</p>", "\n", h2)
    t = html.unescape(re.sub(r"<[^>]+>", " ", h2))
    i, j = t.find("Müellif"), t.find("BİBLİYOGRAFYA")
    return _duz(t[max(0, i - 3000) if i > 0 else 0: j if j > 0 else None])


def eski_w19_g(h):      # TABLO-02 · aynı alet, -g kipi: bütün sayfa
    return _ham_metin(h)


def eski_w20(h):        # TABLO-03 · 5c405971…/tdv.py — .m-body
    s = BeautifulSoup(h, "html.parser")
    return _duz(" ".join(b.get_text(" ", strip=True) for b in s.select(".m-body")))


def eski_w21(h):        # TABLO-04 · 835e6f21…/tdv.py — id=bodyMainContent, yoksa <article, yoksa bütün sayfa
    m = re.search(r'<div[^>]*id="bodyMainContent".*', h, re.S) or re.search(r"<article.*", h, re.S)
    return _ham_metin(h if not m else m.group(0))


def eski_w22(h):        # TABLO-05 · 3fb763a7…/tdv.py İLK SÜRÜMÜ — body_pad_article … ilk BİBLİYOGRAFYA
    h2 = re.sub(r"(?is)<(script|style)[^>]*>.*?</\1>", " ", h)
    m = re.search(r'(?is)<div[^>]*class="[^"]*body_pad_article[^"]*"[^>]*>(.*)', h2)
    if m:
        h2 = m.group(1)
    h2 = re.split(r'(?i)class="related-subjects"|BİBLİYOGRAFYA|Bibliyografya', h2)[0]
    return _duz(html.unescape(re.sub(r"<[^>]+>", " ", h2)))


def eski_w23(h):        # TABLO-06 · 4ca9d42d…/tdv.py — ilk "Kopyalama metni" … "Her hakkı mahfuzdur"
    t = re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ",
               re.sub(r"<script.*?</script>|<style.*?</style>", " ", h, flags=re.S))))
    b = t.find("Kopyalama metni"); b = b if b > 0 else 0
    e = t.find("Her hakkı mahfuzdur", b); e = e if e > 0 else len(t)
    return t[b:e]


ESKI = {"T01-W16": eski_w16, "T02-W19-varsayilan": eski_w19_varsayilan, "T02-W19-g": eski_w19_g,
        "T03-W20": eski_w20, "T04-W21": eski_w21, "T05-W22eski": eski_w22, "T06-W23": eski_w23}
# T07 (W24): alet hiçbir scratchpad'de bulunamadı → ölçülemedi.


def _yokla(govde):
    """Bölüm gövdesinden iki yoklama parçası: ortası ve sonu (60 karakter)."""
    g = govde.strip()
    if len(g) < 200:
        return [g[:60]] if g else []
    o = len(g) // 2
    return [g[o:o + 60], g[-90:-30]]


def kapsama(eski_metin, m):
    """Eski metnin kapsadığı bölüm sayısı (bir bölüm, iki yoklaması da eski metinde geçiyorsa kapsanmış)."""
    e = _duz(eski_metin)
    return sum(1 for b in m["bolumler"] if all(p and p in e for p in _yokla(b["govde"])))


def olc(slug):
    kod, h = getir(slug)
    if kod != "200":
        return dict(slug=slug, kod=kod)
    m = tam(h)
    d = dict(slug=slug, kod=kod, baslik=m["baslik"], bolum=len(m["bolumler"]), gonderme=m["gonderme"],
             yeni_kar=len(m["govde"]), yeni_kaynakca_kar=len(m["kaynakca"]))
    for ad, f in ESKI.items():
        e = f(h)
        d[ad] = dict(kar=len(e), kapsanan=kapsama(e, m))
    return d


def sina():
    """İki yönlü: hindistan'da eski W22 KESMELİ (1/8), yeni TAM olmalı (8/8); tek bölümlü ilbars-han'da ikisi de tam."""
    hata = 0
    d = olc("hindistan")
    print("hindistan:", d["bolum"], "bölüm · yeni", d["yeni_kar"], "kr · eski-W22",
          d["T05-W22eski"]["kar"], "kr, kapsanan", d["T05-W22eski"]["kapsanan"])
    if not (d["bolum"] == 8 and d["yeni_kar"] > 200000):
        print("  ✗ YENİ çıkarıcı tam değil"); hata += 1
    if d["T05-W22eski"]["kapsanan"] != 1:
        print("  ✗ ESKİ hata yeniden üretilemedi (sınav kör)"); hata += 1
    if d["T02-W19-varsayilan"]["kapsanan"] != 1:
        print("  ✗ W19 varsayılan kipi beklenen kesiği vermedi"); hata += 1
    m = tam(getir("hindistan")[1])
    if kapsama(m["govde"], m) != 8:
        print("  ✗ yeni metin kendi bölümlerini kapsamıyor"); hata += 1
    d2 = olc("ilbars-han")
    print("ilbars-han:", d2["bolum"], "bölüm · yeni", d2["yeni_kar"], "kr · eski-W22 kapsanan", d2["T05-W22eski"]["kapsanan"])
    if not (d2["bolum"] == 1 and d2["T05-W22eski"]["kapsanan"] == 1):
        print("  ✗ tek bölümlü denetim maddesi beklenmedik"); hata += 1
    g = tam(getir("patrona")[1])
    print("patrona (gönderme):", len(g["bolumler"]), "bölüm · hedef", g["gonderme"])
    if g["bolumler"] or g["gonderme"] != ["bahriye", "riyale"]:
        print("  ✗ gönderme sayfası tanınmadı"); hata += 1
    if "BİBLİYOGRAFYA" in m["govde"]:
        print("  ✗ kaynakça gövdeye karıştı"); hata += 1
    print("SINAV:", "GEÇTİ" if hata == 0 else f"{hata} HATA")
    return hata


if __name__ == "__main__":
    a = sys.argv[1:]
    if a[:1] == ["--onbellek"]:
        ONBELLEK = a[1]; os.makedirs(ONBELLEK, exist_ok=True); a = a[2:]
    if a[:1] == ["--sina"]:
        sys.exit(1 if sina() else 0)
    elif a[:1] == ["olc"]:
        for s in a[1:]:
            print(json.dumps(olc(s), ensure_ascii=False))
    elif a[:1] == ["ara"]:
        kod, h = getir(a[1]); m = tam(h)
        print("HTTP", kod, "|", m["baslik"], "|", len(m["bolumler"]), "bölüm")
        for b in m["bolumler"]:
            for x in re.finditer(a[2], b["govde"]):
                print(f"  [{b['id']}] …{b['govde'][max(0, x.start() - 250):x.end() + 350]}…")
    elif a[:1] == ["baslik"]:
        kod, h = getir("arama/?q=" + urllib.parse.quote(" ".join(a[1:])) + "&p=m")
        for blok in h.split('class="madde_liste_satir"')[1:]:
            mm = re.search(r"<a href=/?([^ >]+)>(.*?)</a>", blok, re.S)
            d = re.search(r'class="desc">(.*?)</span>', blok, re.S)
            if mm:
                print(" ", mm.group(1), "|", _duz(html.unescape(re.sub("<[^>]+>", "", mm.group(2)))), "|",
                      _duz(html.unescape(re.sub("<[^>]+>", "", d.group(1)))) if d else "")
    else:
        print(__doc__ or "kullanım: dosya başındaki yoruma bakın")
