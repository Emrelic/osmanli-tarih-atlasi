# -*- coding: utf-8 -*-
"""EKOKUMA-0076-B — kronoloji ÇAPA tarayıcısı.

Kart `olay:` alanına yazılacak gün+başlık çiftleri UYDURULMAZ; canlı
kronolojiden okunur. Bu alet `data/olaylar*.js` ve `data/kronoloji*.js`
içindeki `t:"..."` / `b:"..."` çiftlerini tarayıp verilen tarih aralığına
düşenleri basar.

Kullanım:
  py denetim/EKOKUMA-0076-B-capa.py 1896 1915            # aralıktaki her madde
  py denetim/EKOKUMA-0076-B-capa.py 1896 1915 Selanik    # başlıkta süzgeç

🔴 SÜZGEÇ SINAVI (tahta M-5024 · D215): normalleştirici Türkçe harfleri
SESSİZCE silerse "bulunamadı" YALAN olur. `--sina` bilinen POZİTİF bir
vakayla önce aleti ateşler; tutmazsa alet kırıktır, sayıya güvenilmez.
"""
import glob
import io
import os
import re
import sys

KOK = r"C:\atlas\data"


def norm(s):
    """Türkçe duyarlı normalleştirici — `lower()`tan ÖNCE eşleme yapar."""
    s = str(s or "")
    for a, b in (("İ", "i"), ("I", "i"), ("ı", "i"), ("Ş", "s"), ("ş", "s"),
                 ("Ğ", "g"), ("ğ", "g"), ("Ü", "u"), ("ü", "u"), ("Ö", "o"),
                 ("ö", "o"), ("Ç", "c"), ("ç", "c"), ("Â", "a"), ("â", "a"),
                 ("Î", "i"), ("î", "i"), ("Û", "u"), ("û", "u")):
        s = s.replace(a, b)
    s = s.lower()
    for k in "'\u2018\u2019`\u02bc":
        s = s.replace(k, "")
    return re.sub(r"\s+", " ", s).strip()


def maddeler():
    """(dosya, gun, baslik) üçlüleri — tek geçişte, sırayla.

    🔴 `b:` alanı `t:`nin HEMEN ardından gelmez (araya `k:`, `etiket:`
    girer). Bitişiklik arayan bir regex `olaylar.js`in TAMAMINI sessizce
    atlar — ilk sürümde tam bu oldu ve sınav yine 'geçti' dedi, çünkü
    `kronoloji_*.js` bitişik yazıyor. Bu yüzden `t:`den sonraki İLK `b:`
    aynı kayıt içinde aranır ve sınav DOSYA BAŞINA sayar.
    """
    out = []
    for yol in sorted(glob.glob(os.path.join(KOK, "olaylar*.js"))
                      + glob.glob(os.path.join(KOK, "kronoloji*.js"))):
        t = io.open(yol, encoding="utf-8").read()
        for m in re.finditer(r't:"(\d{4}(?:-\d{2}){0,2})"', t):
            b = re.search(r'\bb:"((?:[^"\\]|\\.)*)"', t[m.end():m.end() + 1200])
            if b:
                out.append((os.path.basename(yol), m.group(1), b.group(1)))
    return out


def sina():
    """Aramanın ÇALIŞTIĞI kanıtlanmadan 'bulunamadı' yazılmaz (YASALAR B9)."""
    hepsi = maddeler()
    print("TARANAN MADDE:", len(hepsi))
    sinavlar = [("İ/ı", "istanbul"), ("ş", "selanik"), ("ğ", "bagdat"),
                ("ç", "canakkale"), ("çekirdek", "mesrutiyet")]
    kirik = 0
    for etiket, kelime in sinavlar:
        n = sum(1 for _, _, b in hepsi if kelime in norm(b))
        print("  sınav %-8s '%s' → %d madde %s"
              % (etiket, kelime, n, "✓" if n else "🔴 SÜZGEÇ KIRIK"))
        if not n:
            kirik += 1
    # Dosya kapsaması: `olaylar.js` HİÇ madde vermiyorsa ayrıştırıcı
    # değil EVREN kırıktır (ilk sürümün sessiz kusuru buydu).
    dosyalar = set(d for d, _, _ in hepsi)
    for zorunlu in ("olaylar.js",):
        var = zorunlu in dosyalar
        print("  evren    '%s' → %s" % (zorunlu, "✓" if var else "🔴 HİÇ MADDE YOK"))
        if not var:
            kirik += 1
    print("EVREN: %d dosya" % len(dosyalar))
    print("SINAV:", "GEÇTİ" if not kirik else "🔴 KALDI (%d)" % kirik)
    return kirik == 0


def main():
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    a = sys.argv[1:]
    if not a or a[0] == "--sina":
        sina()
        return
    bas, son = int(a[0]), int(a[1])
    suz = norm(" ".join(a[2:])) if len(a) > 2 else ""
    if not sina():
        print("🔴 süzgeç sınavı kaldı — sayı YAYIMLANMAZ")
        return
    print("-" * 70)
    n = 0
    for dosya, gun, b in maddeler():
        if not (bas <= int(gun[:4]) <= son):
            continue
        if suz and suz not in norm(b):
            continue
        n += 1
        print("%-11s %-26s %s" % (gun, dosya[:26], b[:110]))
    print("-" * 70)
    print("EŞLEŞEN:", n)


if __name__ == "__main__":
    main()
