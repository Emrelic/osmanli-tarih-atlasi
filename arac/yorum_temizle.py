# -*- coding: utf-8 -*-
"""SATIR SONU YORUMU temizleyici + NÖBETÇİ — `data/*.js` için.

🔴 NİÇİN VAR (13 Ağustos 2026, İKİ KEZ ısırdı):
`arac/girdi.py:_cevir` yalnız satır **BAŞINDAKİ** `//`yi siler. Satır
**SONUNDA** yorum olan bir kayıt (`},   // ÖNERİLEN KİMLİK`) ayrıştırıcıyı
`JSONDecodeError` ile düşürür — ve o an **bütün denetim durur**, motor hiç
koşmaz, hiçbir şey yayınlanamaz. Yani tek bir yorum, bütün hattı kilitler.

⚠️ AYRIŞTIRICIYI DÜZELTMEK TEHLİKELİ: `kaynak:"https://..."` içinde de
`//` var. Naif bir "trailing // sil" o kaynakları **yok eder.**
⇒ Çare: veriyi temizlemek, ve temizlerken **TIRNAK DURUMUNU İZLEMEK.**

📌 SÖZLEŞME (13 Ağustos'ta yazıldı, daha önce hiçbir yerde yazılı DEĞİLDİ):
   ***`data/*.js` içinde yorum YALNIZ KENDİ SATIRINDA olur.***
   Bu bir üslup tercihi değil, ayrıştırıcının sınırıdır.

Kullanım:
    py arac/yorum_temizle.py            DENETLE — bulursa çıkış kodu 1
    py arac/yorum_temizle.py --temizle  TEMİZLE ve yaz
"""
import glob
import io
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def satir_sonu_yorumu(sat):
    """Satır sonu yorumunun başladığı indeks, yoksa -1.

    Tırnak durumunu izler: dize İÇİNDEKİ `//` yorum DEĞİLDİR.
    """
    if sat.strip().startswith("//"):
        return -1                      # tam satır yorumu — bu SERBEST
    ic = False
    kacis = False
    for i, ch in enumerate(sat):
        if kacis:
            kacis = False
            continue
        if ch == "\\":
            kacis = True
            continue
        if ch == '"':
            ic = not ic
            continue
        if not ic and ch == "/" and i + 1 < len(sat) and sat[i + 1] == "/":
            return i
    return -1


def tara(temizle=False):
    toplam, dosya_sayisi = 0, 0
    for yol in sorted(glob.glob(os.path.join(KOK, "data", "*.js"))):
        s = io.open(yol, encoding="utf-8").read()
        satirlar = s.split("\n")
        yeni, n = [], 0
        for sat in satirlar:
            k = satir_sonu_yorumu(sat)
            if k < 0:
                yeni.append(sat)
                continue
            n += 1
            if temizle:
                kirp = sat[:k].rstrip()
                if kirp.strip():
                    yeni.append(kirp)
            else:
                yeni.append(sat)
        if not n:
            continue
        dosya_sayisi += 1
        toplam += n
        print("  %-36s %4d satır" % (os.path.basename(yol), n))
        if temizle:
            io.open(yol, "w", encoding="utf-8").write("\n".join(yeni))
            # GERİ OKU ve DOĞRULA
            k2 = io.open(yol, encoding="utf-8").read()
            kalan = sum(1 for x in k2.split("\n")
                        if satir_sonu_yorumu(x) >= 0)
            assert kalan == 0, "%s: %d satır KALDI" % (yol, kalan)
    return toplam, dosya_sayisi


def main(argv):
    temizle = "--temizle" in argv
    print("SATIR SONU YORUMU TARAMASI  (%s)"
          % ("TEMİZLE" if temizle else "yalnız denetle"))
    toplam, dosya = tara(temizle)
    print("-" * 56)
    if not toplam:
        print("✓ TEMİZ — data/*.js içinde satır sonu yorumu yok")
        return 0
    print("%s %d satır · %d dosya"
          % ("temizlendi:" if temizle else "🔴 BULUNDU:", toplam, dosya))
    if temizle:
        # SON SÖZ — motorun KENDİ ayrıştırıcısı
        sys.path.insert(0, os.path.join(KOK, "arac"))
        import girdi
        Y = girdi.yukle()
        print("✓ motor ayrıştırdı: %d nokta" % len(Y))
        return 0
    print("   ⚠️ Bu, `girdi.py:_cevir`i JSONDecodeError ile düşürür ve")
    print("      BÜTÜN denetim/üretim hattını kilitler.")
    print("   çare: py arac/yorum_temizle.py --temizle")
    return 1


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
