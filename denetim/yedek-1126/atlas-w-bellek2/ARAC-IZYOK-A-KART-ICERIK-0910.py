# -*- coding: utf-8 -*-
"""IZ-YOK DENETIM A — kart ICERIK sinavi (SALT OKUR).

D021 uyarisi geregi: parti-0006'nin 16 maddesinin 15'i "kart MEVCUT" diye
temiz cikti. `id:` VARLIGI fazla kolay bir olcut — MERAK.md'nin kendi
sarti "her kartta EN AZ IKI GORUS olmak zorunda" diyor.

Bu alet o sarti sorar: kart bos bir iskelet mi, dolu mu, iki gorus tasiyor mu?
(D103: sinanabilir oge SAYMAK yetmez, ogenin YENI BILGI tasiyip tasimadigi
sorulur.)
"""
import os, sys, io, re, json

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

ISTENEN = {
    "data/merak.js": ["karaman-nicin-zor", "kapitulasyon-zaaf-mi-arac-mi",
                      "gurcistan-nicin-alinmadi", "i-murad-sehadeti",
                      "kardes-katli-karsilastirmali", "siyasi-evlilikler",
                      "kadinlar-saltanati"],
    "data/ekokuma.js": ["ahi-birlikleri-ankara", "yeniceri-ocagi-kurulusu",
                        "tabi-devlet-vassallik"],
}


def kart_dilimi(s, kid):
    """id:"<kid>" iceren en dis {...} blogunu dondurur."""
    i = s.find('id:"%s"' % kid)
    if i < 0:
        return None
    bas = s.rfind("{", 0, i)
    # en dis bloga cik
    while True:
        onceki = s.rfind("{", 0, bas)
        if onceki < 0:
            break
        ara = s[onceki:bas]
        if ara.count("}") > ara.count("{"):
            break
        # onceki gercekten kapsiyor mu: kaba sinama
        derin = 0
        kapsiyor = False
        for k in range(onceki, len(s)):
            if s[k] == "{":
                derin += 1
            elif s[k] == "}":
                derin -= 1
                if derin == 0:
                    kapsiyor = k > i
                    break
        if not kapsiyor:
            break
        bas = onceki
    derin = 0
    for k in range(bas, len(s)):
        if s[k] == "{":
            derin += 1
        elif s[k] == "}":
            derin -= 1
            if derin == 0:
                return s[bas:k + 1]
    return None


for dosya, idler in ISTENEN.items():
    s = open(os.path.join(KOK, dosya), encoding="utf-8").read()
    print("=" * 74)
    print("## %s" % dosya)
    for kid in idler:
        d = kart_dilimi(s, kid)
        if d is None:
            print("  %-32s ARANDI, YOK" % kid)
            continue
        # "gorus" sayimi: MERAK karti gorusleri `gorus`/`g:`/(a)(b)(c) ile tasir
        gorus = len(re.findall(r"gorus|görüş|goruş", d, re.I))
        sik = len(re.findall(r'"(?:\(a\)|\(b\)|\(c\))', d))
        harf = len(re.sub(r"\s+", " ", d))
        print("  %-32s karakter %5d | 'görüş' gecisi %2d | kaynak %d"
              % (kid, harf, gorus, len(re.findall(r"kaynak", d, re.I))))
