# -*- coding: utf-8 -*-
"""KONTROL.md kanıt alanı doğrulayıcısı — TAKİPÇİ'nin aracı (sahibi: T).

KONTROL.md satırlarındaki `[kanıt: <dosya> · <desen> · <beklenen>]` alanlarını
okur ve her birini sınar. SERBEST METNİ HİÇ AYRIŞTIRMAZ — yalnız köşeli
parantezin içine bakar (K kararı, 31 Tem).

Kanıt = SATIRI AÇIK TUTAN koşul:
  ✓ hâlâ geçerli   kanıt tuttu → satır açık kalmalı
  🔴 KAPANMIŞ      kanıt artık tutmuyor → iş bitmiş görünüyor, satır güncellenmeli
  ⚠️ kanıt bozuk   dosya yok / desen boş / beklenen tanınmadı → alan hatalı

beklenen: var · yok · =N · >=N · <=N
Desen DÜZ METİNDİR (grep -F mantığı) — regex değil.

⚠️ K'nın sirt.js uyarısı: =0 beklentisi "doğrulandı" değil "henüz yapılmadı"
demek olabilir — bu araçta =0 yazmak yerine `yok` kullanılmalı ve `yok`un
anlamı her zaman "açık kalma kanıtı" olarak kurulmalı.

Kullanım:  py arac/kontrol_dogrula.py        (özet + yalnız 🔴/⚠️ satırları)
           py arac/kontrol_dogrula.py -a     (bütün kanıtların dökümü)
Çıkış kodu: 🔴 ya da ⚠️ varsa 1, yoksa 0.
"""
import io, os, re, glob, sys

if sys.stdout.encoding and sys.stdout.encoding.lower() not in ("utf-8", "utf8"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KONTROL = os.path.join(KOK, "KONTROL.md")
DESEN = re.compile(r"\[kanıt:\s*([^·\]]+?)\s*·\s*(.+?)\s*·\s*([^·\]]+?)\s*\]")


def say(dosya_kalibi, desen):
    """Kalıba uyan dosyalarda düz-metin desenin toplam geçiş sayısı.
    Dosya hiç yoksa None (kanıt bozuk)."""
    yollar = glob.glob(os.path.join(KOK, dosya_kalibi))
    if not yollar:
        return None
    toplam = 0
    for y in yollar:
        toplam += io.open(y, encoding="utf-8").read().count(desen)
    return toplam


def sina(beklenen, n):
    b = beklenen.strip()
    if b == "var":
        return n > 0
    if b == "yok":
        return n == 0
    for on_ek, kiyas in (( ">=", lambda a, b: a >= b), ("<=", lambda a, b: a <= b),
                         ("=", lambda a, b: a == b)):
        if b.startswith(on_ek):
            try:
                return kiyas(n, int(b[len(on_ek):]))
            except ValueError:
                return None
    return None  # tanınmayan beklenen → bozuk


def main():
    ayrinti = "-a" in sys.argv[1:]
    gecerli, kapanmis, bozuk = [], [], []
    for satir in io.open(KONTROL, encoding="utf-8").read().splitlines():
        e = DESEN.search(satir)
        if not e:
            continue
        hucreler = satir.split("|")
        durum = hucreler[-2].strip() if len(hucreler) >= 3 else ""
        if durum.startswith("✅") or durum.startswith("❌"):
            continue  # kapalı satırın kanıtı tarihçedir, yeniden sınanmaz
        no = hucreler[1].strip() if satir.startswith("|") else "?"
        dosya, desen, beklenen = e.group(1), e.group(2), e.group(3)
        n = say(dosya, desen)
        if n is None:
            bozuk.append((no, dosya, desen, beklenen, "dosya bulunamadı"))
            continue
        hukum = sina(beklenen, n)
        if hukum is None:
            bozuk.append((no, dosya, desen, beklenen, "beklenen tanınmadı"))
        elif hukum:
            gecerli.append((no, dosya, desen, beklenen, n))
        else:
            kapanmis.append((no, dosya, desen, beklenen, n))

    print("kanıt alanı: %d  |  ✓ geçerli: %d  ·  🔴 kapanmış: %d  ·  ⚠️ bozuk: %d"
          % (len(gecerli) + len(kapanmis) + len(bozuk),
             len(gecerli), len(kapanmis), len(bozuk)))
    for no, dosya, desen, beklenen, n in kapanmis:
        print("  🔴 %-6s %s · %r · %s  (ölçülen: %d)" % (no, dosya, desen, beklenen, n))
    for no, dosya, desen, beklenen, sebep in bozuk:
        print("  ⚠️ %-6s %s · %r · %s  (%s)" % (no, dosya, desen, beklenen, sebep))
    if ayrinti:
        for no, dosya, desen, beklenen, n in gecerli:
            print("  ✓ %-6s %s · %r · %s  (ölçülen: %d)" % (no, dosya, desen, beklenen, n))
    sys.exit(1 if (kapanmis or bozuk) else 0)


if __name__ == "__main__":
    main()
