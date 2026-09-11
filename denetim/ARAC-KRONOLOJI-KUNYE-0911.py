# -*- coding: utf-8 -*-
"""
ARAC-KRONOLOJI-KUNYE-0911.py — KRONOLOJİ KÜNYE oturumu, 11 Eylül 2026

NE YAPAR: `oturumlar/KRONOLOJI-KUNYE-0911.md` görevinin iki ailesini (566 +
1518 madde) ölçer. YALNIZ OKUR — `data/*.js` ve `arac/*.py`ye YAZMAZ (Koşu 9
canlıyken donuk kural).

YÖNTEM (D022 notu — öngörü ölçümden ÖNCE yazılmadı, BULGU dosyasında itiraf
edildi):
  ① Her aile-dosyasının (kronoloji_cin.js vb.) `data/devletler.js`teki
     ADAY künyelerinin f/t ömrünü çıkar.
  ② Dosyanın HER maddesinin `t:` tarihini o ömürlerle karşılaştır:
       kova "0"  = hiçbir aday o tarihi kapsamıyor  → GERÇEK BOŞLUK
       kova "1"  = tam bir aday kapsıyor             → 🟠 gerçek belirsizlik
                                                        (mekanik çözülebilir)
       kova "2+" = birden çok aday aynı anda kapsıyor → içerik okunmadan
                                                        🟢/🟠/⚪ ayrılamaz
  ③ "2+" kovasının TAMAMI (örneklem değil, tam sayım) elle b: metni
     okunarak sınıflandırıldı — bkz. BULGU-KRONOLOJI-KUNYE-0911.md §2.

Bu dosya tek başına ÇALIŞTIRILABİLİR ve `kova` sayılarını üretir; "2+"
kovasının 🟢/🟠/⚪ alt-sınıflaması BULGU dosyasında elle işlendiği için
kodda YOKTUR (D107: "okumadım" ile "ölçemedim" karıştırılmasın — alt
sınıflama bir OKUMA işidir, bu betiğin regex'i o okumayı YAPMAZ).
"""
import re
import json

ROOT = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"


def devlet_araligi(ids):
    txt = open(ROOT + r"\data\devletler.js", encoding="utf-8").read()
    out = {}
    for i in ids:
        m = re.search(r'id:"' + re.escape(i) + r'"(.*?)f:"([\d-]+)"(.*?)t:"([\d-]+)"',
                       txt, re.S)
        out[i] = (m.group(2), m.group(4)) if m else None
    return out


# AİLE ② — "ÇOK KÜNYEYE DAĞILIYOR" (566 madde, TESPIH satır 581-590)
AILE2 = {
    "cin":       ["song", "jin-hanedani", "yuan-hanedani", "ming-hanedani",
                  "guney-ming", "dashun", "qing-hanedani", "taiping", "cin-cumhuriyeti"],
    "hindistan": ["delhi-sultanligi", "babur-imparatorlugu", "sur-hanedani", "ingiliz-hindistani"],
    "misir":     ["memluk", "misir-kavalali"],
    "ozbek":     ["buhara", "hive", "hokand"],
    "japonya":   ["kamakura", "kenmu", "muromachi", "azuchi-momoyama", "edo-bakufu", "meiji-japonya"],
    "sirbistan": ["sirbistan-nemanjic", "sirp-despotlugu", "sirbistan-prensligi", "sirbistan-kralligi"],
}

# AİLE ③ örnek doğrulaması — "BÖLGE DERLEMESİ" (1518 madde ailesinden İLK dosya,
# TAM SAYIM için; öteki 8 dosya yalnız BAŞLIKLARINDAN okundu, bkz. BULGU §3)
AILE3_ORNEK = {
    "anadolu": ["karaman", "selcuklu", "artuklu", "dulkadir", "aydin", "kilikya-ermeni"],
}


def gun_no(s):
    y, a, g = s.split("-")
    return int(y) * 372 + int(a) * 31 + int(g)  # kaba sıra sayısı, sıralamaya yeter


def madde_tarihleri(dosya):
    txt = open(ROOT + r"\data\kronoloji_%s.js" % dosya, encoding="utf-8").read()
    return re.findall(r'\{\s*t:"(\d{4}-\d{2}-\d{2})"', txt)


def olc(aileler):
    sonuc = {}
    for aile, idler in aileler.items():
        araliklar = devlet_araligi(idler)
        eksik = [i for i, v in araliklar.items() if v is None]
        if eksik:
            print("UYARI %s: devletler.js'te bulunamayan id -> %s" % (aile, eksik))
        tarihler = madde_tarihleri(aile)
        kova = {"0": 0, "1": 0, "2+": 0}
        for t in tarihler:
            gt = gun_no(t)
            eslesen = [i for i, v in araliklar.items()
                       if v and gun_no(v[0]) <= gt < gun_no(v[1])]
            n = len(eslesen)
            kova["0" if n == 0 else ("1" if n == 1 else "2+")] += 1
        sonuc[aile] = {"toplam": len(tarihler), "kova": kova}
    return sonuc


if __name__ == "__main__":
    print("=== AİLE ② (566 madde, 6 dosya) — TAM SAYIM ===")
    r2 = olc(AILE2)
    print(json.dumps(r2, ensure_ascii=False, indent=2))
    toplam = {"0": 0, "1": 0, "2+": 0, "n": 0}
    for v in r2.values():
        toplam["n"] += v["toplam"]
        for k in ("0", "1", "2+"):
            toplam[k] += v["kova"][k]
    print("TOPLAM:", toplam)

    print()
    print("=== AİLE ③ örnek doğrulama (anadolu, 281 madde) — TAM SAYIM ===")
    r3 = olc(AILE3_ORNEK)
    print(json.dumps(r3, ensure_ascii=False, indent=2))
