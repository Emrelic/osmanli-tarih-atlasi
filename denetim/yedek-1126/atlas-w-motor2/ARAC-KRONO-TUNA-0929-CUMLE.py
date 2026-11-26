# KRONO-TUNA-0929 — önbellekteki TDV maddelerinden TARİH TAŞIYAN cümleleri çıkarır.
# Kullanım: py denetim/ARAC-KRONO-TUNA-0929-CUMLE.py <slug> [<slug> ...] [--ara kelime]
# Gövde "Kopyalama metni" ile "BİBLİYOGRAFYA" arasıdır; başlık/altlık boilerplate atılır.
# Amaç okumayı kısaltmak — hüküm vermez. Rakamı taşıyan cümle neyi tarihliyor,
# o cümle OKUNARAK karar verilir (CLAUDE.md §4 TDV tuzağı ⑧).
import sys, re, os
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "KRONO-TUNA-0929-tdv-onbellek")
arg = sys.argv[1:]
ara = None
tam = "--tam" in arg          # bütün gövdeyi cümle cümle bas
if tam: arg.remove("--tam")
if "--ara" in arg:
    i = arg.index("--ara"); ara = arg[i + 1].lower(); del arg[i:i + 2]
for slug in arg:
    t = open(os.path.join(KOK, slug + ".txt"), encoding="utf-8").read()
    # Çok bölümlü maddelerde (ör. romanya: coğrafya + tarih) her bölüm kendi
    # "Kopyalama metni … BİBLİYOGRAFYA" aralığındadır — hepsi alınır.
    parcalar = re.findall(r"Kopyalama metni(.*?)(?:BİBLİYOGRAFYA|$)", t, flags=re.S)
    gov = "\n".join(parcalar) if parcalar else t
    cumleler = re.split(r"(?<=[.!?])\s+(?=[A-ZÇĞİÖŞÜÂÎ“(])", gov)
    print(f"##### {slug} · gövde {len(gov)} kr")
    for c in cumleler:
        c = " ".join(c.split())
        if tam:
            print("  -", c)
        elif ara:
            if ara in c.lower(): print("  -", c)
        elif re.search(r"\b1[2-9]\d\d\b", c):
            print("  -", c)
