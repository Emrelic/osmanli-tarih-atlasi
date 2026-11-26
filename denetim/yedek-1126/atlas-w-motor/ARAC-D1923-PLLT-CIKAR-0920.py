# -*- coding: utf-8 -*-
"""D1923-CIZGI-0920 · ADIM 2 hazırlığı — `d1923-pl-lt` hattının BİRİNCİL METİNDEN
yapısal çıkarımı.

Kaynak: "Decision taken by the Conference of Ambassadors regarding the Eastern
Frontiers of Poland, Paris, March 15, 1923" · League of Nations Treaty Series
c. 15 (1923) s. 261–265 · forost.ungarisches-institut.de/pdf/19230315-1.pdf
(🔴 HTTPS'te TLS hatası verir; http + curl ile indirilir.)

🔴 YENİDEN KULLANILABİLİRLİK (1.MURAT şartı): bu betik metne özel DEĞİLDİR.
`--metin <yol>` ile herhangi bir antlaşma hat tarifini aynı şemaya çevirir.
Çıkardığı şema K6'nın kalan kayıtlarına aynen uygulanır:

  {"sira": n,
   "tur": "idari_sinir" | "nehir" | "gol" | "nokta" | "sahada_tespit" | "yol",
   "yon": "yukari"|"asagi"|None,          (nehirde akış yönü)
   "capa": [ ... ]                        (adı geçen yer adları, sırayla)
   "sol_yaka": [ ... ] "sag_yaka": [ ... ](hangi köy hangi tarafta kalıyor)
   "ham": "<cümlenin kendisi>"}

Çıkarımın ÖLÇTÜĞÜ şey: hattın kaç ayağı var, kaçı HESAPLANABİLİR (nehir/göl/
idarî sınır — geometri elde varsa), kaçı "sahada tespit edilecek" (= hesaplanamaz,
ara noktalarla yaklaşılır). Bu oran, kaydın maliyetidir.

Koşum: py denetim/ARAC-D1923-PLLT-CIKAR-0920.py --metin <txt|pdf>
Çıktı: denetim/D1923-PLLT-CAPALAR-0920.json
"""
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def metin_al(yol):
    if yol.lower().endswith(".pdf"):
        try:
            from pypdf import PdfReader
        except ImportError:
            raise SystemExit("pypdf yok ⇒ metin ÇIKARILAMADI (uydurma yok)")
        t = "\n".join((s.extract_text() or "") for s in PdfReader(yol).pages)
    else:
        t = open(yol, encoding="utf-8").read()
    if len(t.strip()) < 300:
        raise SystemExit("🔴 GÖVDE BOŞ — taranmış görüntü olabilir ⇒ ölçülemedi")
    return t


# --- ayak türü damgaları (İngilizce antlaşma dili) ---------------------------
TUR = [
    ("sahada_tespit", [r"a line to be fixed on the ground",
                       r"to be fixed on the ground", r"line to be fixed"]),
    ("nehir", [r"the course of the ", r"\bdown ?stream\b", r"\bup ?stream\b",
               r"\bconfluence\b", r"\bthe river\b", r"\bon the ([A-Z]\w+)\b"]),
    ("gol", [r"\blake\b", r"\bLake\b", r"crossing the lake", r"shore"]),
    ("idari_sinir", [r"administrative boundary", r"administrative frontier"]),
    ("yol", [r"\broad\b", r"\brailway\b", r"crossing of the roads"]),
    ("nokta", [r"\bpoint\b", r"\bHill \d+", r"intersection"]),
]

YAKA = re.compile(
    r"leaving\s+(?:in\s+)?(.*?)\s+in\s+(Lithuanian?|Polish|Lithuania|Poland)"
    r"(?:\s+territory)?", re.I)
YAKA2 = re.compile(
    r"leaving\s+(.*?),?\s+in\s+(Lithuania|Poland)\b", re.I)

# özel ad adayı: büyük harfle başlayan, tire/kesme taşıyabilen sözcük öbeği
OZEL = re.compile(r"\b([A-Z][A-Za-zÀ-ÿ]+(?:[- ][A-Z][A-Za-zÀ-ÿ]+)*)\b")
ELE = {"The", "This", "From", "Thence", "Then", "Whereas", "Decides", "Done",
       "Paris", "Poland", "Russia", "Lithuania", "Polish", "Lithuanian",
       "Conference", "Ambassadors", "Article", "Treaty", "Peace", "States",
       "Government", "Council", "League", "Nations", "Powers", "Allied",
       "Associated", "Versailles", "Germain", "Laye", "Eastern", "Western",
       "Hill", "Lake", "Governments", "Note", "Resolution", "November",
       "February", "March", "June", "January", "Galicia", "Prussia"}


def tur_bul(c):
    for ad, desenler in TUR:
        if any(re.search(d, c) for d in desenler):
            return ad
    return "belirsiz"


def yon_bul(c):
    if re.search(r"down ?stream", c, re.I):
        return "asagi"
    if re.search(r"up ?stream", c, re.I):
        return "yukari"
    return None


def capalar(c):
    ad = [m.group(1) for m in OZEL.finditer(c)]
    return [a for a in ad if a not in ELE and len(a) > 2]


def main():
    if "--metin" not in sys.argv:
        raise SystemExit(__doc__)
    yol = sys.argv[sys.argv.index("--metin") + 1]
    t = metin_al(yol)
    t = re.sub(r"-\n", "", t)
    t = re.sub(r"\s+", " ", t)

    # hat tarifi: "(2) With Lithuania:" ile "The demarcation of this line" arası
    bas = re.search(r"\(2\)\s*With Lithuania", t)
    son = re.search(r"The demarcation of this line", t)
    if not (bas and son):
        raise SystemExit("🔴 hat tarifi bölümü BULUNAMADI — metin beklenenden farklı")
    govde = t[bas.end():son.start()]

    ayaklar = [p.strip(" ;,") for p in re.split(r";\s*", govde) if p.strip(" ;,")]
    cikti = []
    for n, c in enumerate(ayaklar, 1):
        sol, sag = [], []
        for m in list(YAKA.finditer(c)) + list(YAKA2.finditer(c)):
            adlar = [a.strip(" .") for a in re.split(r",| and ", m.group(1))
                     if a.strip(" .")]
            if m.group(2).lower().startswith("lith"):
                sol += adlar
            else:
                sag += adlar
        cikti.append({
            "sira": n,
            "tur": tur_bul(c),
            "yon": yon_bul(c),
            "capa": capalar(c)[:12],
            "litvanya_yakasi": sol[:40],
            "polonya_yakasi": sag[:40],
            "ham": c[:600],
        })

    from collections import Counter
    sayim = Counter(a["tur"] for a in cikti)
    hesaplanabilir = sum(n for t2, n in sayim.items()
                         if t2 in ("nehir", "gol", "idari_sinir"))
    koy = sum(len(a["litvanya_yakasi"]) + len(a["polonya_yakasi"]) for a in cikti)

    print(f"ayak sayısı            : {len(cikti)}")
    print("ayak türü              :")
    for a, n in sayim.most_common():
        print(f"   {n:>3}  {a}")
    print(f"HESAPLANABİLİR ayak    : {hesaplanabilir} "
          f"(nehir/göl/idarî sınır — geometri elde varsa doğrudan)")
    print(f"'sahada tespit' ayak   : {sayim.get('sahada_tespit', 0)} "
          f"(hesaplanamaz — yaka köyleriyle yaklaşılır)")
    print(f"yakası yazılı köy adedi: {koy}  "
          f"(georeferans yükü — her biri bir yer adı sorgusu)")

    hedef = os.path.join(KOK, "denetim", "D1923-PLLT-CAPALAR-0920.json")
    with open(hedef, "w", encoding="utf-8") as f:
        json.dump({
            "gorev": "D1923-CIZGI-0920 · d1923-pl-lt çıpa çıkarımı",
            "kaynak": ("Conference of Ambassadors, Eastern Frontiers of Poland, "
                       "Paris 15 Mart 1923 · LNTS c.15 (1923) s.261–265"),
            "kaynak_url": ("http://www.forost.ungarisches-institut.de/pdf/"
                           "19230315-1.pdf"),
            "harita_olcegi": "Alman 1/100.000 (metnin kendi beyanı)",
            "ayak_sayisi": len(cikti),
            "tur_sayimi": dict(sayim.most_common()),
            "hesaplanabilir_ayak": hesaplanabilir,
            "yaka_koy_adedi": koy,
            "ayaklar": cikti,
        }, f, ensure_ascii=False, indent=1)
    print(f"\nyazıldı: {hedef}")


if __name__ == "__main__":
    main()
