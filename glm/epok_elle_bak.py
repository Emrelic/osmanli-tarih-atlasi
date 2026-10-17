# -*- coding: utf-8 -*-
"""elle bakis: verilen slug'larin ONBELLEK govdesinden 1200-1310 yil
tasiyan veya devlet sozcugu gecen cumleleri basar (cikaricinin kagidi asmak
icin — bos blok / kesik cumle vakalarinda)."""
import io, os, re, sys
if __name__ == "__main__":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZINLER = [
    os.path.join(KOK, "denetim", "GLM1-EPOK-SAHIP-1009-tdv-onbellek"),
    os.path.join(KOK, "denetim", "ONCE1281-YERLESIM-tdv-onbellek"),
    os.path.join(KOK, "denetim", "GLM1-TDV-ONBELLEK"),
]
DEVLET = re.compile(r"(Selçuklu|Moğol|İlhan|Memlûk|Memlük|Eyyûb|Hârizm|Hülâgü|Hafsî|Merînî|Muvahhid|Zeyyân|Abdülvâd|Eşref|Sâhib|Ceneviz|Venedik|Bizans|Haçlı|Frank|Lusignan|Anjou|Aragon|Kastilya|Nasr|Gırnata|Kutluğ|Karakoyun|Akkoyun|Çağatay|Altın Orda|Gürcü|Ermeni|Bizans|Aram|Şirvanşah|Evfât|Adal|Zeydî|Resûl|Tâhir|Nebhân|Ya'rub|Kutluş)", re.I)
YIL = re.compile(r"\b(12[0-9]{2}|13[0-9]{2})\b|\(\s*(6[0-9]{2}|7[0-9]{2})\s*/")

sluglar = sys.argv[1:] or ["yafa", "bicaye", "meshed", "kum", "beysehir", "afyon"]
for sl in sluglar:
    yol = None
    for d in DIZINLER:
        aday = os.path.join(d, sl + ".txt")
        if os.path.exists(aday):
            yol = aday
            break
    print("=" * 20, sl, "=" * 20)
    if not yol:
        print("  ÖNBELLEKTE YOK")
        continue
    t = io.open(yol, encoding="utf-8").read()
    kod, _, govde = t.partition("\n")
    print("  kod:", kod.strip(), "· uzunluk:", len(govde))
    bulundu = 0
    for cum in re.split(r"(?<=[.!?])\s+", govde):
        cum = cum.strip()
        if len(cum) < 30 or len(cum) > 700:
            continue
        if DEVLET.search(cum) and YIL.search(cum):
            print("   *", cum[:330])
            bulundu += 1
            if bulundu >= 8:
                break
    if not bulundu:
        print("   (eşleşen cümle yok — ilk 3 satır:)")
        for s in govde.split("\n")[:3]:
            if s.strip():
                print("   -", s.strip()[:200])
