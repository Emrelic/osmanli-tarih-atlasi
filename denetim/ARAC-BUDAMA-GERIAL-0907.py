# -*- coding: utf-8 -*-
"""BUDAMA-0907 · GERİ ALMA — bir ders yanlış budandıysa TEK KOMUTLA geri gelir

    py denetim/ARAC-BUDAMA-GERIAL-0907.py <slug>                 # KURU KOŞU
    py denetim/ARAC-BUDAMA-GERIAL-0907.py <slug> --yaz <dosya>   # uygular
    py denetim/ARAC-BUDAMA-GERIAL-0907.py --liste                # slug listesi

NE YAPAR: hedef dosyada o dersin BUDANMIŞ girdisini (manşet + hüküm +
künye satırı) bulur ve yerine `dersler/<slug>.md` içindeki ORİJİNAL
bloğu koyar. Vaka dosyası SİLİNMEZ — geri alma tersine çevrilebilir kalır.

🔴 `--yaz` VERİLMEDEN HİÇBİR DOSYAYA DOKUNMAZ. Varsayılan kuru koşudur.
🔴 Hedef dosyayı ÇAĞIRAN söyler; bu alet kendiliğinden `CLAUDE.md` seçmez.
   (`§7`: kök `*.md` Oturum 0'ın; bu alet bir işçinin elinde de koşabilir.)

GERİ ALMANIN ÖTEKİ İKİ YOLU — bu alet onların yerine geçmez:
    git revert <kademe-commit>      bir kademenin tamamı
    git show <sha>:CLAUDE.md        belgenin o günkü TAM hâli
"""
import os
import re
import sys
import json
import glob

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PLAN = os.path.join(KOK, "denetim", "BUDAMA-PLAN-0907")


def orijinal(slug):
    yol = os.path.join(PLAN, "dersler", slug + ".md")
    if not os.path.exists(yol):
        raise SystemExit("🔴 vaka dosyası yok: %s" % yol)
    sat = open(yol, "rb").read().decode("utf-8").split("\n")
    i = next(i for i, l in enumerate(sat) if re.match(r"^- \S", l))
    blok = sat[i:]
    while blok and not blok[-1].strip():
        blok.pop()
    return blok


def main():
    if "--liste" in sys.argv:
        e = json.load(open(os.path.join(PLAN, "ESLEME-0907.json"),
                           encoding="utf-8"))
        for x in e["esleme"]:
            print("  %-58s %5d→%4d tok  %s" % (
                x["slug"], x["eski_token"], x["kalan_token"], x["etiket"][:44]))
        print("\n  toplam %d ders" % len(e["esleme"]))
        return 0

    if len(sys.argv) < 2 or sys.argv[1].startswith("--"):
        print(__doc__)
        return 2
    slug = sys.argv[1]
    blok = orijinal(slug)
    manset = blok[0]

    print("GERİ ALINACAK DERS")
    print("  slug   : %s" % slug)
    print("  manşet : %s" % manset[:96])
    print("  blok   : %d satır" % len(blok))

    if "--yaz" not in sys.argv:
        print()
        print("KURU KOŞU — hiçbir dosyaya dokunulmadı.")
        print("Uygulamak için:  --yaz <hedef-dosya>")
        print()
        print("--- geri konacak blok ---")
        print("\n".join(blok[:8]))
        print("  … (%d satır daha)" % max(0, len(blok) - 8))
        return 0

    hedef = sys.argv[sys.argv.index("--yaz") + 1]
    ham = open(hedef, "rb").read().decode("utf-8")
    sat = ham.split("\n")
    try:
        i = next(i for i, l in enumerate(sat) if l.strip() == manset.strip())
    except StopIteration:
        raise SystemExit("🔴 hedefte manşet bulunamadı — dosya doğru mu?")
    j = i + 1
    while j < len(sat) and not re.match(r"^- \S", sat[j]) \
            and not sat[j].startswith("## "):
        j += 1
    eski_n = j - i
    yeni = sat[:i] + blok + [""] + sat[j:]
    open(hedef, "w", encoding="utf-8", newline="\n").write("\n".join(yeni))
    print()
    print("🟢 UYGULANDI — %s" % hedef)
    print("   %d satırlık budanmış girdi → %d satırlık orijinal blok" % (
        eski_n, len(blok)))
    print("   vaka dosyası SİLİNMEDİ: dersler/%s.md" % slug)
    return 0


if __name__ == "__main__":
    sys.exit(main())
