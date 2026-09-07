# -*- coding: utf-8 -*-
"""BUDAMA-0907 · Ⓓ MÜKERRERLİK  +  Ⓒ'nin YÖN DÜZELTMESİ

═══════════════════════════════════════════════════════════════════
① Ⓒ'NİN KÖR NOKTASI — ve niçin ayrıca ölçülmesi gerekti
═══════════════════════════════════════════════════════════════════
`ARAC-BUDAMA-ATIF-0907.py` bir dersin metninin korpusta geçtiğini
ölçüyor. Ama örtüşme İKİ YÖNDEN de doğabilir:

    KAYNAK   ders ZATEN o BULGU dosyasından TÜRETİLDİ
             ⇒ örtüşme dersin DOĞUŞUdur, kullanımı değil
    KULLANIM ders yazıldıktan SONRA başka bir oturum ona atıf yaptı
             ⇒ ancak BU «kullanılıyor» demektir

`§11`: *"iki ayrı sorunun aynı cevabı vermesi, aynı soru olduğu
anlamına gelmez."* Bu alet ikisini TARİHLE ayırır: dersin kendi
metnindeki tarih (*"(5 Eylül 2026 · …)"*) ile eşleşen dosyanın
tarihi (`-0907` soneki ya da git son commit tarihi).

⚠️ SINIRI: tarihi okunamayan ders ya da dosya `⚪ ÖLÇÜLEMEDİ`
kovasına girer — «kullanılmıyor» diye DEĞİL.

═══════════════════════════════════════════════════════════════════
② Ⓓ MÜKERRERLİK — elle liste YOK, kalıplar VERİDEN çıkarılır
═══════════════════════════════════════════════════════════════════
Elle bir "ders ailesi" listesi yazmak, aradığımı bulmak olurdu
(`§11`: eşleşme bulmak ≠ doğru şeyi bulmak). Onun yerine:
BİRDEN ÇOK ders bloğunda tekrar eden normalleştirilmiş n-gram'lar
taranır; en çok bloğa yayılanlar «tekrar eden formül»dür.
"""
import os
import re
import sys
import json
import subprocess
from collections import defaultdict, Counter

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from importlib import import_module
_atif = import_module("ARAC-BUDAMA-ATIF-0907".replace("-", "_")) \
    if False else None  # tire yuzunden import edilemez; normal() kopyalanir

import unicodedata
CEV = str.maketrans({
    "İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g", "ğ": "g",
    "Ü": "u", "ü": "u", "Ö": "o", "ö": "o", "Ç": "c", "ç": "c",
    "Â": "a", "â": "a", "Î": "i", "î": "i", "Û": "u", "û": "u",
    "’": "'", "‘": "'",
})


def normal(s):
    s = s.translate(CEV)
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    s = re.sub(r"[^a-z0-9]+", " ", s.lower())
    return s.split()


KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AYLAR = {"ocak": 1, "subat": 2, "mart": 3, "nisan": 4, "mayis": 5,
         "haziran": 6, "temmuz": 7, "agustos": 8, "eylul": 9, "ekim": 10,
         "kasim": 11, "aralik": 12}


def ders_tarihi(metin):
    """Ders blogunun ILK 'GG Ay 2026' tarihi -> (ay, gun) ya da None."""
    d = normal(metin)
    for i in range(len(d) - 1):
        if d[i].isdigit() and d[i + 1] in AYLAR:
            g = int(d[i])
            if 1 <= g <= 31:
                return (AYLAR[d[i + 1]], g)
    return None


def dosya_tarihi(ad, onbellek):
    """Once dosya adindaki -MMGG / -YYYY-AA-GG soneki, sonra git tarihi."""
    m = re.search(r"-(\d{4})-(\d{2})-(\d{2})", ad)
    if m:
        return (int(m.group(2)), int(m.group(3)))
    m = re.search(r"[-_](0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])(?:\D|$)", ad)
    if m:
        return (int(m.group(1)), int(m.group(2)))
    if ad in onbellek:
        return onbellek[ad]
    try:
        r = subprocess.run(["git", "log", "-1", "--format=%ad",
                            "--date=format:%m-%d", "--", ad],
                           cwd=KOK, capture_output=True, text=True, timeout=25)
        s = r.stdout.strip()
        if re.match(r"^\d{2}-\d{2}$", s):
            onbellek[ad] = (int(s[:2]), int(s[3:]))
            return onbellek[ad]
    except Exception:
        pass
    onbellek[ad] = None
    return None


def main():
    bol = json.load(open(os.path.join(KOK, "denetim", "_budama_bolum.json"),
                         encoding="utf-8"))
    atif = json.load(open(os.path.join(KOK, "denetim", "_budama_atif.json"),
                          encoding="utf-8"))
    dersler = bol["dersler"]
    atif_ix = {a["bas"]: a for a in atif["dersler"]}

    # ============ Ⓒ YÖN DÜZELTMESİ ============
    print("Ⓒ YÖN DÜZELTMESİ — örtüşme DOĞUŞ mu KULLANIM mı?")
    onbellek = {}
    sonra = ayni = once = olculemedi = 0
    tarihsiz_ders = 0
    ornek = []
    for d in dersler:
        a = atif_ix.get(d["bas"], {})
        dt = ders_tarihi(d["metin"])
        if dt is None:
            tarihsiz_ders += 1
            continue
        kaynaklar = a.get("kaynak", [])
        if not kaynaklar:
            continue
        yonler = []
        for k in kaynaklar:
            ad = k.split(":", 1)[-1]
            ft = dosya_tarihi(ad, onbellek)
            if ft is None:
                yonler.append("?")
            elif ft > dt:
                yonler.append("sonra")
            elif ft == dt:
                yonler.append("ayni")
            else:
                yonler.append("once")
        if "sonra" in yonler:
            sonra += 1
            if len(ornek) < 6:
                ornek.append((d["bas"], d["etiket"][:52], yonler))
        elif "ayni" in yonler:
            ayni += 1
        elif "once" in yonler:
            once += 1
        else:
            olculemedi += 1
    print("  (örneklenen kaynak: ders başına en çok 5 dosya)")
    print("  ders tarihi OKUNAMADI            : %3d" % tarihsiz_ders)
    print("  en az bir kaynak dersten SONRA   : %3d  ⇒ 🟢 KULLANIM izi" % sonra)
    print("  yalnız AYNI günden kaynak        : %3d  ⇒ 🟡 doğuş olabilir" % ayni)
    print("  yalnız dersten ÖNCEKİ kaynak     : %3d  ⇒ 🔴 muhtemelen DOĞUŞ" % once)
    print("  kaynak tarihi okunamadı          : %3d  ⇒ ⚪ ÖLÇÜLEMEDİ" % olculemedi)
    for b, e, y in ornek:
        print("    örnek s%-5d %-52s %s" % (b, e, ",".join(y)))

    # ============ Ⓓ MÜKERRERLİK ============
    print()
    print("Ⓓ MÜKERRERLİK — kaç ayrı ders bloğunda tekrar eden formüller (n=5)")
    N = 5
    yayilim = defaultdict(set)
    for i, d in enumerate(dersler):
        k = normal(d["metin"])
        for j in range(len(k) - N + 1):
            yayilim[" ".join(k[j:j + N])].add(i)
    tekrar = {p: s for p, s in yayilim.items() if len(s) >= 3}
    print("  §11 penceresi (n=5)          : %d benzersiz" % len(yayilim))
    print("  3+ ayrı derste geçen pencere : %d" % len(tekrar))
    print()
    print("  EN YAYGIN 25 FORMÜL")
    for p, s in sorted(tekrar.items(), key=lambda x: -len(x[1]))[:25]:
        print("   %3d ders  «%s»" % (len(s), p))

    # aile buyuklugu: bir dersin baska derslerle paylastigi pencere sayisi
    print()
    print("  DERS BAŞINA PAYLAŞIM — kaç dersin metni başka bir derste de geçiyor?")
    paylasan = Counter()
    for p, s in tekrar.items():
        for i in s:
            paylasan[i] += 1
    hic = [i for i in range(len(dersler)) if paylasan[i] == 0]
    print("   hiç tekrar formülü taşımayan ders : %d" % len(hic))
    print("   ortanca tekrar formülü / ders     : %d" % sorted(
        paylasan[i] for i in range(len(dersler)))[len(dersler) // 2])
    print()
    print("  EN ÇOK TEKRAR TAŞIYAN 10 DERS")
    for i, c in paylasan.most_common(10):
        print("   %4d formül  %5d tok  s%-5d %s" % (
            c, dersler[i]["token"], dersler[i]["bas"],
            dersler[i]["etiket"][:58]))

    # ---- acik aile isaretleri (kendini beyan eden) ----
    print()
    print("  KENDİNİ BEYAN EDEN AİLE İŞARETLERİ (ders metninde)")
    isaret = {
        "ailesinin": r"ailesinin",
        "…nin YÜZÜ": r"yuzu\b",
        "kardeşi": r"kardesi",
        "aynası/tersi": r"(aynasi|ters yuzu|tersidir)",
        "vakası (N.)": r"(ikinci|ucuncu|dorduncu|besinci|altinci|yedinci) vaka",
        "§ atfı": r"\bs\s?(3 5|4|7|11)\b",
    }
    for ad, dsn in isaret.items():
        n = sum(1 for d in dersler if re.search(dsn, " ".join(normal(d["metin"]))))
        print("   %-16s %3d ders (%%%.0f)" % (ad, n, 100.0 * n / len(dersler)))

    with open(os.path.join(KOK, "denetim", "_budama_mukerrer.json"), "w",
              encoding="utf-8") as f:
        json.dump({"tekrar_formul": len(tekrar),
                   "en_yaygin": [[p, len(s)] for p, s in
                                 sorted(tekrar.items(), key=lambda x: -len(x[1]))[:60]],
                   "yon": {"sonra": sonra, "ayni": ayni, "once": once,
                           "olculemedi": olculemedi,
                           "tarihsiz_ders": tarihsiz_ders}},
                  f, ensure_ascii=False, indent=1)
    print()
    print("yazıldı: denetim/_budama_mukerrer.json")
    return 0


if __name__ == "__main__":
    sys.exit(main())
