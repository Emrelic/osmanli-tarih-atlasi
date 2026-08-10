# -*- coding: utf-8 -*-
"""
DOCX gorselleri <-> Emre'nin maddeleri. IKI AYAK, AYRI TUTULUR.

  KESIN       gorsel <-> paragraf sirasi + ONCEKI METIN     XML'den, %100
  TURETILMIS  gorsel <-> madde numarasi                     yalniz metin "N)" ile
                                                            BASLIYORSA; yoksa "?"

v1 dersi: gevsek bir "madde basi" kalibi sayaci KACIRIYOR (hatalar 1 -> "14..14",
hatalar 10 -> 17 eslesmeyen). Kalip siki tutuldu: numara paragrafin BASINDA ve
ardindan ")" / "." geliyorsa, VEYA paragraf yalnizca numaradan ibaretse.
Sayac sadece +1..+3 ilerleyebilir; sicrama KABUL EDILMEZ (metin ici sayilar).

Kullanim:
  py gorsel_esle2.py <kok>                     tabloyu bas
  py gorsel_esle2.py <kok> --md <cikti.md>     esleme belgesini yaz
  py gorsel_esle2.py <kok> --cikar <docx> <p>  tek gorseli scratchpad'e cikar
"""
import sys, io, os, re, zipfile, glob

# Paragraf yalniz numara:  "14)"  "15"  "3."
YALNIZ_NO = re.compile(r"^\s*(\d{1,2})\s*[\)\.\-]?\s*$")
# Numara + metin:  "14) sunu sunu"   ("2013 yilinda" gibi 4 haneliler ELENIR)
NO_METIN = re.compile(r"^\s*(\d{1,2})\s*[\)\.]\s*(\S.*)$", re.S)


def slug(ad):
    s = os.path.splitext(os.path.basename(ad))[0]
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def coz(yol):
    z = zipfile.ZipFile(yol)
    xml = z.read("word/document.xml").decode("utf-8", "replace")
    rels = z.read("word/_rels/document.xml.rels").decode("utf-8", "replace")
    harita = {}
    for m in re.finditer(r'Id="([^"]+)"[^>]*Target="([^"]+)"', rels):
        if "media/" in m.group(2):
            harita[m.group(1)] = "word/" + m.group(2).replace("../", "")

    # 🔴 madde numarasi ancak YAKINSA gosterilir. Uzaktan tasinan numara
    #    "makul ama yanlis" bir sutun uretiyordu (hatalar 3: dokuz satir boyunca
    #    "2"). Makul-ama-yanlis, BOS'tan kotudur — okuyan onu olculmus sanir.
    YAKINLIK = 3          # numarali satirdan en fazla bu kadar paragraf sonra
    kayitlar, madde, madde_p, pno, son_metin = [], None, -99, 0, ""
    for p in re.findall(r"<w:p[ >].*?</w:p>", xml, re.S):
        pno += 1
        metin = "".join(re.findall(r"<w:t[^>]*>(.*?)</w:t>", p, re.S))
        for a, b in (("&amp;", "&"), ("&lt;", "<"), ("&gt;", ">"), ("&quot;", '"'), ("&apos;", "'")):
            metin = metin.replace(a, b)
        metin = " ".join(metin.split())
        gorseller = []
        for r in re.findall(r'r:embed="([^"]+)"', p):
            if r in harita and harita[r] not in gorseller:
                gorseller.append(harita[r])

        if metin:
            m = YALNIZ_NO.match(metin) or NO_METIN.match(metin)
            if m:
                yeni = int(m.group(1))
                if madde is None or 0 < yeni - madde <= 3 or yeni == 1:
                    madde, madde_p = yeni, pno
            son_metin = metin
        for g in gorseller:
            yakin = madde if (madde is not None and pno - madde_p <= YAKINLIK) else None
            kayitlar.append({"p": pno, "madde": yakin, "baglam": son_metin[:150], "medya": g})
    return z, kayitlar


def main():
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
    kok = sys.argv[1]
    dosyalar = sorted(glob.glob(os.path.join(kok, "hatalar*.docx")),
                      key=lambda p: int(re.search(r"(\d+)", os.path.basename(p)).group(1)))

    if "--cikar" in sys.argv:
        i = sys.argv.index("--cikar")
        hedef_docx, hedef_p = sys.argv[i + 1], int(sys.argv[i + 2])
        for yol in dosyalar:
            if hedef_docx not in os.path.basename(yol):
                continue
            z, kayitlar = coz(yol)
            for k in kayitlar:
                if k["p"] == hedef_p:
                    ad = "%s-p%03d%s" % (slug(yol), k["p"], os.path.splitext(k["medya"])[1])
                    cik = os.path.join(os.path.dirname(os.path.abspath(__file__)), ad)
                    open(cik, "wb").write(z.read(k["medya"]))
                    print("CIKARILDI:", cik)
                    return
            print("bulunamadi")
            return

    tum, ozet = [], []
    for yol in dosyalar:
        z, kayitlar = coz(yol)
        boyut = sum(z.getinfo(k["medya"]).file_size for k in kayitlar)
        tum.append((yol, kayitlar))
        eks = sum(1 for k in kayitlar if k["madde"] is None)
        ozet.append((os.path.basename(yol), len(kayitlar), boyut, eks))
        z.close()

    print("=" * 76)
    print("DOSYA".ljust(22), "GORSEL".rjust(7), "BOYUT".rjust(10), "madde-yok".rjust(11))
    print("=" * 76)
    tg = tb = te = 0
    for ad, n, b, e in ozet:
        print(ad.ljust(22), str(n).rjust(7), ("%.1f MB" % (b / 1048576.0)).rjust(10), str(e).rjust(11))
        tg += n; tb += b; te += e
    print("-" * 76)
    print("TOPLAM gorsel:", tg, "| %.1f MB" % (tb / 1048576.0),
          "| madde numarasi turetilemeyen:", te, "(%.0f%%)" % (100.0 * te / max(tg, 1)))

    if "--md" in sys.argv:
        cikti = sys.argv[sys.argv.index("--md") + 1]
        with open(cikti, "w", encoding="utf-8") as f:
            f.write("# DOCX GÖRSEL EŞLEMESİ — 18 dosya · %d görsel başvurusu\n\n" % tg)
            f.write("> Üreten: İÇERİK oturumu, 10 Ağustos 2026 — betik `arac/` DIŞINDA "
                    "(üretim koşarken `arac/*.py` kilitliydi).\n")
            f.write("> **%d başvuru · 202 BENZERSİZ medya dosyası** — fark, aynı görselin "
                    "birden çok paragrafta anılmasından gelir.\n" % tg)
            f.write("> 🔴 **Görseller depoya ÇIKARILMADI: 149,6 MB.** Depoya 150 MB ikizlemek "
                    "geri alınması pahalı bir karardır ve benim kararım değil.\n")
            f.write("> Tek bir görseli açmak için:\n>\n")
            f.write("> ```\n> py gorsel_esle2.py . --cikar \"hatalar 11\" 54\n> ```\n\n")
            f.write("**İki sütun ayrı tutulur.** `paragraf` XML'den gelir ve **kesindir**; "
                    "`madde` yalnız numaralı satır görselden en çok **3 paragraf önce** ise "
                    "türetilir, yoksa `?` yazılır — **uydurulmaz.**\n\n")
            f.write("⚠️ **Bu belge iki kez üretildi ve ikincisi DAHA ÇOK `?` içeriyor.** "
                    "İlk sürümde numara uzaktan taşınıyordu ve `hatalar 3`te dokuz satır "
                    "boyunca \"2\" yazıyordu — **makul ama yanlış.** Yakınlık şartı konunca "
                    "`?` oranı %26'dan %55'e çıktı. ⇒ *Bilinmeyeni bilinmez göstermek, "
                    "yanlışı bilinir göstermekten iyidir.*\n\n")
            f.write("📌 Görselin asıl anahtarı `madde` değil **`görselden önceki metin`** "
                    "sütunudur: Emre'nin şikâyeti görselin hemen üstünde duruyor, "
                    "yani satır `?` olsa bile hangi maddeye ait olduğu **okunarak** bulunur.\n\n")
            for yol, kayitlar in tum:
                f.write("\n## %s — %d görsel\n\n" % (os.path.basename(yol), len(kayitlar)))
                f.write("| paragraf | madde | görselden önceki metin | medya |\n")
                f.write("|---|---|---|---|\n")
                for k in kayitlar:
                    bg = k["baglam"].replace("|", "/")
                    if len(bg) > 110:
                        bg = bg[:110] + "…"
                    f.write("| %d | %s | %s | `%s` |\n" % (
                        k["p"], k["madde"] if k["madde"] is not None else "?",
                        bg or "—", os.path.basename(k["medya"])))
        print("YAZILDI:", cikti)


if __name__ == "__main__":
    main()
