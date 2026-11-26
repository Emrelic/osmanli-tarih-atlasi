# REN-SOL-YAKA-1006 — KOORD diff üreticisi. SALT OKUR: veri dosyasına yazmaz,
# HEAD'deki (LF) içerikten öneri satırlarını kurar ve yalnız .diff dosyası yazar.
import difflib, os, subprocess, sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CIKTI = os.path.join(KOK, "denetim", "REN-SOL-YAKA-1006-KOORD.diff")

LUNEVILLE = ("Lunéville Antlaşması md. VI (Digithèque MJP, Univ. Perpignan, traites/1801luneville): "
             "'S. M. l'Empereur et Roi, tant en son nom qu'en celui de l'Empire germanique, consent à ce que "
             "la République française possède désormais, en toute souveraineté et propriété, les pays et "
             "domaines situés à la rive gauche du Rhin' · 'Fait et signé à Lunéville, le 20 pluviôse An IX "
             "de la République française (9 Février 1801)'")
PARIS = ("I. Paris Antlaşması md. 2 (Digithèque MJP, traites/1814paris): 'Le Royaume de France conserve "
         "l'intégrité de ses limites telles qu'elles existaient à l'époque du 1er janvier 1792.' · "
         "'Fait à Paris le 30 mai de l'an de grâce 1814.'")

def s_zinciri():
    return ('s:[{f:"1281-01-01",t:"1801-02-09",d:"almanya"},'
            '{f:"1801-02-09",t:"1814-05-30",d:"fransa-cumhuriyet",kaynak:"' + LUNEVILLE + '"},'
            '{f:"1814-05-30",t:"1923-10-29",d:"almanya",kaynak:"' + PARIS + '"}]')

ESKI_S = 's:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}]'

ISG = {
    "Köln": ('isg:[{f:"1794-10-06",t:"1801-02-09",d:"fransa-cumhuriyet",kaynak:"Kölnisches Stadtmuseum, '
             'Wegmarken der Stadtgeschichte «Köln wird französisch»: \'Am 6. Oktober 1794 ergab sich die Stadt '
             'Köln kampflos den französischen Revolutionstruppen.\' · bitiş = Lunéville (s: dönemi başlar)"}], '),
    "Aachen": ('isg:[{f:"1794-01-01",t:"1801-02-09",d:"fransa-cumhuriyet",kaynak:"Museumsdienst Aachen, Route des '
               'Erinnerns «Aachen in der Franzosenzeit»: \'1794 besetzten die französischen Armeen der Revolution '
               'die Stadt Aachen.\' · GÜN bulunamadı (kurumsal kaynakta yalnız yıl) → YYYY-01-01 · bitiş = Lunéville"}], '),
    "Trier": ('isg:[{f:"1794-01-01",t:"1801-02-09",d:"fransa-cumhuriyet",kaynak:"Institut für Geschichtliche '
              'Landeskunde Rheinland-Pfalz, regionalgeschichte.net «Trier»: \'Im Jahr 1794 wurde die Stadt von '
              'französischen Truppen besetzt.\' · GÜN bulunamadı (kurumsal kaynakta yalnız yıl) → YYYY-01-01 · '
              'bitiş = Lunéville"},'
              '{f:"1814-01-06",t:"1814-05-30",d:"prusya",kaynak:"aynı kaynak: \'Seit dem 6. Januar 1814 war Trier '
              'preußisch besetzt.\' · bitiş = I. Paris Antlaşması (s: almanya döner)"}], '),
}

DOSYA = {"Köln": "data/yerlesimler.js", "Aachen": "data/yerlesimler_avrupa.js", "Trier": "data/yerlesimler_avrupa.js"}

def head(yol):
    return subprocess.run(["git", "-C", KOK, "show", "HEAD:" + yol], capture_output=True,
                          check=True).stdout.decode("utf-8")

parcalar = []
for yol in sorted(set(DOSYA.values())):
    eski = head(yol)
    yeni_satirlar = eski.split("\n")
    for ad, d in DOSYA.items():
        if d != yol:
            continue
        on = '{ ad:"%s", ' % ad
        idx = [i for i, s in enumerate(yeni_satirlar) if s.startswith(on)]
        if len(idx) != 1:
            sys.exit("HATA: %s için %d satır (1 beklenir)" % (ad, len(idx)))
        s = yeni_satirlar[idx[0]]
        if s.count(ESKI_S) != 1:
            sys.exit("HATA: %s zinciri beklenen tek-dönem değil — öneri bayat" % ad)
        s = s.replace(ESKI_S, s_zinciri())
        s = s.replace(on, on + ISG[ad])
        yeni_satirlar[idx[0]] = s
    yeni = "\n".join(yeni_satirlar)
    parcalar.extend(difflib.unified_diff(eski.splitlines(True), yeni.splitlines(True),
                                         "a/" + yol, "b/" + yol, n=1))

with open(CIKTI, "w", encoding="utf-8", newline="\n") as f:
    f.writelines(p if p.endswith("\n") else p + "\n" for p in parcalar)
print("yazıldı:", CIKTI)
