# -*- coding: utf-8 -*-
"""ONERILEN KUNYE JSON'unu `data/devletler.js`e METIN OLARAK ekler.

🔴 VARSAYILAN KURU KOSU — `--yaz` verilmedikce HICBIR DOSYAYA DOKUNMAZ.
   Sebep: kosu canliyken `data/` DONUK (§7). Kuru kosu her zaman guvenli.

🔴 NICIN METIN, NICIN node ROUND-TRIP DEGIL:
   `devletler.js` YORUM TASIYOR ve bu projede yorumlar YUK TASIYOR
   (olculmus vakalar, curutulmus oncüller, kaynak damgalari). node'a
   okutup yeniden yazmak onlarin HEPSINI siler. Bu yuzden yeni kayitlar
   bir CAPAdan sonra METIN olarak eklenir; var olan tek satir bile
   yeniden yazilmaz.

Kullanim:
  py kunye_uygula.py <json> --capa "<capa-id>"          # kuru kosu
  py kunye_uygula.py <json> --capa "<capa-id>" --yaz    # gercekten yaz
"""
import sys, os, io, json, re, subprocess

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.getcwd()
DV = os.path.join(KOK, "data", "devletler.js")

ALAN_SIRA = ["id", "ad", "tur", "bolge", "f", "t", "baskent", "harita"]


def q(s):
    """JS cift tirnakli dizgi — ters bolu ve tirnak kacisi."""
    return '"' + str(s).replace("\\", "\\\\").replace('"', '\\"') + '"'


def kayit_metni(k):
    """Bir kunyeyi devletler.js bicimine cevirir (kongre-polonyasi emsali)."""
    bas = []
    for a in ALAN_SIRA[:4]:
        if k.get(a):
            bas.append("%s:%s" % (a, q(k[a])))
    sat = ["{ " + ", ".join(bas) + ","]
    ort = []
    for a in ("f", "t", "baskent", "harita"):
        if k.get(a):
            ort.append("%s:%s" % (a, q(k[a])))
    sat.append("  " + ", ".join(ort) + ",")
    if k.get("ozet"):
        sat.append("  ozet:%s," % q(k["ozet"]))
    # 🔴 `kaynak:` BIRLESTIRILIR. Isci oturumun JSON'u bilgiyi UC alana
    #    boluyor (kaynak=slug · dayanak=nasil okundu · not=alinti);
    #    devletler.js emsali (kongre-polonyasi) TEK CUMLE istiyor:
    #      "polonya — TDV; kurulus gunu TDV'nin kendi verdigi «…»"
    #    §4: kaynagin NE OLDUGU degil, NEYI SOYLEDIGI de yazilir.
    kay = (k.get("kaynak") or "").strip()
    ek = [p.strip().rstrip(".") for p in (k.get("dayanak"), k.get("not")) if p]
    if ek:
        kay = (kay + " — " if kay else "") + ". ".join(ek) + "."
    if kay:
        sat.append("  kaynak:%s," % q(kay))
    # 🔴 3 Eylul: ilk surum `if kr:` diyordu ve BOS kronolojiyi HIC
    #    yazmiyordu. Ama `kronoloji:[]` 591 kunyenin 587'sinde VAR —
    #    BOS DIZI ile ALANIN OLMAMASI ayni sey DEGIL: birincisi
    #    "olay yok" der, ikincisi ALANI YOK EDER. Dort kunye alansiz
    #    indi ve DUNYA-AFRIKA-0903'un zorunlu alan sinavi yakaladi.
    #    📌 §11 "sessiz atlama": alet hata vermedi, alan sessizce yok oldu.
    kr = k.get("kronoloji")
    if kr is None:
        kr = []
    if kr:
        sat.append("  kronoloji:[")
        for i, e in enumerate(kr):
            par = []
            for a in ("t", "tur", "b"):
                if e.get(a):
                    par.append("%s:%s" % (a, q(e[a])))
            sat.append("    { " + ", ".join(par) + " }" +
                       ("," if i < len(kr) - 1 else ""))
        sat.append("  ]")
    else:
        sat.append("  kronoloji:[]")      # BOS DIZI YAZILIR, alan SILINMEZ
    sat.append("},")
    return "\n".join(sat)


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        return 2
    yol = sys.argv[1]
    yaz = "--yaz" in sys.argv
    capa = None
    if "--capa" in sys.argv:
        capa = sys.argv[sys.argv.index("--capa") + 1]

    kunyeler = []

    def topla(o):
        if isinstance(o, dict):
            if "id" in o and ("f" in o or "t" in o):
                kunyeler.append(o)
            else:
                for v in o.values():
                    topla(v)
        elif isinstance(o, list):
            for e in o:
                topla(e)

    topla(json.load(io.open(yol, encoding="utf-8")))
    print("önerilen künye : %d" % len(kunyeler))

    ham = io.open(DV, encoding="utf-8").read()

    # --- ① ÇAKIŞMA SINAVI, yazmadan ONCE ------------------------------
    mevcut = set(re.findall(r'\bid:"([^"]+)"', ham))
    cak = [k["id"] for k in kunyeler if k.get("id") in mevcut]
    if cak:
        print("🔴 ÇAKIŞMA — devletler.js'te ZATEN VAR: %s" % ", ".join(cak))
        print("🔴 DURDU, hiçbir şey yazılmadı.")
        return 1
    print("① çakışma : 0")

    # --- ② KOŞU CANLI MI ---------------------------------------------
    canli = subprocess.run(
        ["powershell", "-NoProfile", "-Command",
         "if (Get-Process -Id 1268 -ErrorAction SilentlyContinue) {'CANLI'} else {'YOK'}"],
        capture_output=True, text=True).stdout.strip()
    print("② koşu PID 1268 : %s" % canli)
    if yaz and canli == "CANLI":
        print("🔴 KOŞU CANLI — `data/` DONUK (§7). Yazmak koşuyu öldürmez")
        print("   ama ÇIKTIYI YAYINLANAMAZ hâle getirir. DURDU.")
        return 1

    # --- ③ ÇAPA ------------------------------------------------------
    if not capa:
        print("🔴 --capa verilmedi. Yeni kayıtlar HANGİ künyeden sonra?")
        return 1
    m = re.search(r'\n\{ id:"%s"' % re.escape(capa), ham)
    if not m:
        print("🔴 çapa BULUNAMADI: id:%s" % q(capa))
        return 1
    # capa kaydinin sonu: bir sonraki satir basi '{ id:' ya da dosya sonu
    son = ham.find('\n{ id:"', m.start() + 1)
    if son < 0:
        print("🔴 çapa kaydının sonu bulunamadı")
        return 1
    print("③ çapa : %s  (ekleme noktası: %d. bayt)" % (capa, son))

    blok = "\n" + "\n".join(kayit_metni(k) for k in kunyeler)
    yeni = ham[:son] + blok + ham[son:]

    print()
    print("--- İLK KAYDIN ÜRETİLEN METNİ ---")
    print(kayit_metni(kunyeler[0]))
    print("--- ... %d kayıt ... ---" % len(kunyeler))
    print()
    # 🔴 BIRIM: `len(str)` KARAKTER sayar, BAYT DEGIL. devletler.js'te
    #    Turkce ve Arapca harfler cok baytli ⇒ 480.766 karakter =
    #    511.224 BAYT. Ilk surumum "bayt" diye BASIYORDU ve
    #    DUNYA-AFRIKA-0903 diskteki boyutla kiyaslayip "TABAN BAYAT"
    #    alarmi verdi. Sayi dogruydu, ETIKET yanlisti.
    #    📌 §11'in "puanlama kapisi km²·donem" vakasinin UCUNCU tekrari
    #    (o gun: km²·donem · CIE76/CIEDE2000 · ve bu).
    eb = len(ham.encode("utf-8"))
    yb = len(yeni.encode("utf-8"))
    print("eski %d karakter (%d bayt) → yeni %d karakter (%d bayt)  (+%d bayt)"
          % (len(ham), eb, len(yeni), yb, yb - eb))

    if not yaz:
        print()
        print("🟡 KURU KOŞU — hiçbir şey yazılmadı. Yazmak için --yaz")
        return 0

    io.open(DV, "w", encoding="utf-8", newline="").write(yeni)
    print("🟢 YAZILDI: %s" % DV)
    print("🔴 ŞİMDİ: py arac/denetle.py  ve  py arac/renk_olc.py")
    return 0


if __name__ == "__main__":
    sys.exit(main())
