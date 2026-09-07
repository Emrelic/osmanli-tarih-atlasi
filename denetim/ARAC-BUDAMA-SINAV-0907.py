# -*- coding: utf-8 -*-
"""BUDAMA-0907 · SINAV — «hiçbir şey kaybolmadı» değişmezi

DEĞİŞMEZ
    Eski `§11`in HER ANLAMLI SATIRI, ya budanmış `§11`de ya bir
    `dersler/*.md` içinde bulunur.  KAYIP: 0.
    Ve eski `§11`in HER MANŞETİ budanmış `§11`de durur. KAYIP MANŞET: 0.

`§11 C13` — DÖRT AYAK, dördü de bu alette:
    ① GEÇME     kusur yokken TEMİZ diyor mu          → varsayılan koşu
    ② ATEŞLEME  her kusur dalı için AYRI AYRI ötüyor → `--atesle`
    ③ GİRDİ     dosyayı GERÇEK kaynağından okuma yolu koşuluyor mu
                → evet: `CLAUDE.md` ve paket dosyaları DİSKTEN okunur,
                  hiçbir şey enjekte edilmez
    ④ ÇIKTI     bilerek kusurlu girdi verilince BİLDİRİYOR mu → `--atesle`

🔴 VE BEŞİNCİ BİR KOVA: TABAN KAYMASI.
   `CLAUDE.md` paket üretildikten sonra BÜYÜDÜYSE, yeni derslerin satırları
   pakette olmaz. Bu bir KAYIP DEĞİL, bir GECİKMEDİR — ayrı kovada
   raporlanır, yoksa sınav yanlış alarm verir.
   (Ölçüldü: 7 Eylül 14:5x-16:0x arası CLAUDE.md +288 satır büyüdü.)
"""
import os
import re
import sys
import json
import glob
import random

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PLAN = os.path.join(KOK, "denetim", "BUDAMA-PLAN-0907")


def s11_bloklar():
    ham = open(os.path.join(KOK, "CLAUDE.md"), "rb").read().decode("utf-8")
    sat = ham.split("\n")
    bas = next(i for i, s in enumerate(sat) if s.startswith("## 11."))
    onsoz, bloklar, su = [], [], None
    for s in sat[bas:]:
        if re.match(r"^- \S", s):
            if su:
                bloklar.append(su)
            su = [s]
        elif su is not None:
            su.append(s)
        else:
            onsoz.append(s)
    if su:
        bloklar.append(su)
    return onsoz, bloklar


def paketi_oku(atesle=None):
    """atesle: None | 'ders-satiri' | 'manset' | 'ders-dosyasi'"""
    yeni = open(os.path.join(PLAN, "YENI-CLAUDE-11.md"), "rb") \
        .read().decode("utf-8").split("\n")
    ders = {}
    for p in sorted(glob.glob(os.path.join(PLAN, "dersler", "*.md"))):
        ders[os.path.basename(p)[:-3]] = open(p, "rb").read() \
            .decode("utf-8").split("\n")
    rnd = random.Random(20260907)
    if atesle == "ders-satiri":
        # 🔴 SEÇİM ÖNEMLİ: budanmış §11'de DE duran bir satır (hüküm/damga)
        # düşürülürse sınav ötmez — ve ötmemesi DOĞRUDUR, çünkü satır hâlâ
        # havuzda. Dal ancak YALNIZ vaka dosyasında duran bir satırla sınanır.
        # (İlk sürüm rastgele seçiyordu ve dal 3/3'ten 2/3'e düştü; dalın
        # kendisi değil SEÇİMİ bozuktu — ateşlemeyen dal, denetimsiz daldır.)
        s11 = {l.strip() for l in yeni}
        aday = [(k, i) for k in sorted(ders)
                for i, l in enumerate(ders[k])
                if len(l.strip()) > 40 and l.strip() not in s11]
        k, i = rnd.choice(aday)
        print("   💥 ATEŞLEME: `%s` dosyasından bir satır DÜŞÜRÜLDÜ" % k)
        ders[k] = ders[k][:i] + ders[k][i + 1:]
    elif atesle == "manset":
        i = next(i for i, l in enumerate(yeni) if re.match(r"^- \S", l))
        print("   💥 ATEŞLEME: budanmış §11'den bir MANŞET düşürüldü")
        yeni = yeni[:i] + yeni[i + 1:]
    elif atesle == "ders-dosyasi":
        k = rnd.choice(sorted(ders))
        print("   💥 ATEŞLEME: `%s` vaka dosyası tümüyle SİLİNDİ" % k)
        del ders[k]
    return yeni, ders


def kos(atesle=None):
    esleme = json.load(open(os.path.join(PLAN, "ESLEME-0907.json"),
                            encoding="utf-8"))
    # vakası TAŞINAN dersler + eşiğin altında kaldığı için YERİNDE bırakılanlar.
    # İkincisi de bilinen bir derstir; sayılmazsa sınav onu «taban kayması»
    # diye raporlar ve YANLIŞ ALARM üretir (bir kez üretti, düzeltildi).
    bilinen = {e["etiket"] for e in esleme["esleme"]}
    bilinen |= {y["etiket"] for y in esleme.get("yerinde", [])}
    onsoz, bloklar = s11_bloklar()
    yeni, ders = paketi_oku(atesle)

    havuz = set()
    for l in yeni:
        havuz.add(l.strip())
    for k, sat in ders.items():
        for l in sat:
            havuz.add(l.strip())
    yeni_havuz = {l.strip() for l in yeni}

    kayip, taban_kaymasi, kayip_manset, yeni_ders = [], [], [], 0
    for b in bloklar:
        etiket = re.sub(r"\s+", " ", re.sub(r"[*`]", "", b[0][2:])).strip()
        tanidik = any(etiket[:60] == e[:60] for e in bilinen)
        if not tanidik:
            yeni_ders += 1
            taban_kaymasi.extend(l for l in b if l.strip())
            continue
        if b[0].strip() not in yeni_havuz:
            kayip_manset.append(etiket[:70])
        for l in b:
            if l.strip() and l.strip() not in havuz:
                kayip.append(l.strip()[:90])

    n_anlamli = sum(1 for b in bloklar for l in b if l.strip())
    print("   eski §11 anlamlı satır      : %d  (%d blok)" % (n_anlamli, len(bloklar)))
    print("   paketteki ders dosyası      : %d" % len(ders))
    print("   🔴 KAYIP SATIR              : %d" % len(kayip))
    print("   🔴 KAYIP MANŞET             : %d" % len(kayip_manset))
    print("   🟡 TABAN KAYMASI (yeni ders): %d ders · %d satır" % (
        yeni_ders, len(taban_kaymasi)))
    for x in kayip[:4]:
        print("        kayıp: %s" % x)
    for x in kayip_manset[:4]:
        print("        kayıp manşet: %s" % x)
    return len(kayip) + len(kayip_manset)


def main():
    if "--atesle" in sys.argv:
        print("C13 ② ATEŞLEME — üç kusur dalı, ÜÇÜ DE AYRI AYRI")
        tam = 0
        for dal in ("ders-satiri", "manset", "ders-dosyasi"):
            print()
            print("  DAL: %s" % dal)
            n = kos(dal)
            print("   ⇒ %s" % ("🟢 ÖTTÜ (%d bulgu)" % n if n else
                               "🔴 ÖTMEDİ — DAL SAĞLAM DEĞİL"))
            tam += 1 if n else 0
        print()
        print("  ateşleyen dal: %d / 3" % tam)
        return 0 if tam == 3 else 1

    print("C13 ① GEÇME — kusur yokken temiz mi?")
    n = kos(None)
    print()
    if n == 0:
        print("🟢 GEÇTİ — hiçbir satır ve hiçbir manşet kaybolmadı.")
        return 0
    print("🔴 KALDI — %d bulgu. Paket UYGULANAMAZ." % n)
    return 1


if __name__ == "__main__":
    sys.exit(main())
