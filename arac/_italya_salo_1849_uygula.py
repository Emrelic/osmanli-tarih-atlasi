# -*- coding: utf-8 -*-
# ITALYA-1028d: Salo Cumhuriyeti (1943-09-23 / 1945-04-28) kuzey sehirleri, Roma Cumhuriyeti 1849, San Marco Cumhuriyeti 1848. Tek seferlik.
import glob, re, sys
sys.stdout.reconfigure(encoding="utf-8")

def blok(ad):
    """(dosya, satirlar, bas, son) — '{ ad:"X"' ile baslayan kayit blogu (sonraki '{ ad:' / '{"ad":' satirina dek)."""
    bul = []
    for fn in sorted(glob.glob("data/yerlesimler*.js")):
        L = open(fn, encoding="utf-8", newline="").read().split("\n")
        for i, l in enumerate(L):
            if l.startswith('{ ad:"%s"' % ad):
                bul.append((fn, L, i))
    assert len(bul) == 1, (ad, len(bul))
    fn, L, i = bul[0]
    j = i + 1
    while j < len(L) and not (L[j].startswith("{ ad:") or L[j].startswith('{"ad"') or L[j].strip() == "" or L[j].startswith("//")):
        j += 1
    return fn, L, i, j

def uygula(ad, fonk):
    fn, L, i, j = blok(ad)
    metin = "\n".join(L[i:j])
    yeni = fonk(metin)
    assert yeni != metin, ad
    L[i:j] = yeni.split("\n")
    open(fn, "w", encoding="utf-8", newline="").write("\n".join(L))

SALO = ("Salò Cumhuriyeti (İtalyan Sosyal Cumhuriyeti): künye salo-cumhuriyeti f 1943-09-23, t 1945-04-28 (NS-Dokumentationszentrum München RSI sözlüğü; Britannica 'Italian Social Republic'). "
        "BEYANLI YAKLAŞIKLIK: şehir fiilî olarak Alman askerî denetimindeydi, RSI idaresi nominaldi; şehre göre fiilî kurtuluş günleri (Bologna 21 Nisan, Milano ve Torino 25 Nisan 1945 vb.) "
        "tek künye bitiş gününe (28 Nisan) çekildi. İtalya yarımadasının güneyinde RSI kapsamı dışında kalan Roma/Floransa/Ancona yazılmadı. ikinci kaynak aranıyor. · ITALYA-1028d")
sehirler = ["Milano", "Torino", "Cenova", "Venedik", "Verona", "Padova", "Brescia", "Bergamo", "Mantova", "Bolonya", "Modena",
            "Parma", "Piacenza", "Ferrara", "Sondrio", "Chiavenna", "Bormio"]
for ad in sehirler:
    def f(m):
        rx = re.compile(r'\{f:"(\d{4}-\d\d-\d\d)",t:"1946-06-18",d:"italya"')
        assert len(rx.findall(m)) == 1, ad
        return rx.sub(lambda g: '{f:"%s",t:"1943-09-23",d:"italya"},{f:"1943-09-23",t:"1945-04-28",d:"salo-cumhuriyeti",kaynak:"%s"},'
                      '{f:"1945-04-28",t:"1946-06-18",d:"italya"' % (g.group(1), SALO.replace('"', "'")), m)
    uygula(ad, f)

R49 = ("Roma Cumhuriyeti (Mazzini): künye roma-cumhuriyeti-1849 f 1849-02-09, t 1849-07-03 (Museo della Repubblica Romana; Wikipedia 'Roman Republic (1849-1850)', ikincil; "
       "Vikipedi 2 Temmuz der). Papa Pius IX Gaeta'ya kaçmıştı; Fransız müdahalesiyle (Oudinot) düştü. Papalık yönetimi geri geldi (Papa 12 Nisan 1850'de döndü, gösterilmedi). "
       "ikinci kaynak aranıyor. · ITALYA-1028d")
def roma(m):
    seg = '{f:"1814-05-24",t:"1870-09-20",d:"papalik"'
    assert m.count(seg) == 1
    return m.replace(seg, '{f:"1814-05-24",t:"1849-02-09",d:"papalik"},{f:"1849-02-09",t:"1849-07-03",d:"roma-cumhuriyeti-1849",kaynak:"%s"},'
                     '{f:"1849-07-03",t:"1870-09-20",d:"papalik"' % R49.replace('"', "'"))
uygula("Roma", roma)

V48 = ("San Marco Cumhuriyeti: künye venedik-1848 f 1848-03-22 (Manin Arsenal'i aldı), t 1849-08-22 (teslim; bilgi kutusu 27 Ağustos der) — Wikipedia 'Republic of San Marco', "
       "Chastain 'Encyclopedia of 1848 Revolutions' (people.ohio.edu/chastain/rz/venice.htm). BEYAN: 7 Ağustos 1848'de Manin yetkiyi Piyemonte komiserlerine devretti "
       "(Kuzey İtalya Krallığı ile birleşme); sonra 13 Ağustos'ta geri aldı, ayrıca gösterilmedi. ikinci kaynak aranıyor. · ITALYA-1028d")
def ven(m):
    seg = '{f:"1814-04-16",t:"1866-10-03",d:"avusturya"'
    assert m.count(seg) == 1
    return m.replace(seg, '{f:"1814-04-16",t:"1848-03-22",d:"avusturya"},{f:"1848-03-22",t:"1849-08-22",d:"venedik-1848",kaynak:"%s"},'
                     '{f:"1849-08-22",t:"1866-10-03",d:"avusturya"' % V48.replace('"', "'"))
uygula("Venedik", ven)
print("tamam")
