"""KOSU10-KALAN yama sınavı — `eski` metinleri dosyada BİREBİR duruyor mu?

Kullanım: py denetim/ARAC-KOSU10-KALAN-SINA-0917.py <yama.json> [<yama.json> ...]
Her kalemin `eski` alanı ile `degisiklikler[]` / `degisiklikler_A[]` altındaki
her `eski` için: `dosya` "data/x.js:N" (ya da "data/x.js:N,M") biçimindeyse
dosyada kaç kez geçtiği ve N. satırda geçip geçmediği basılır.
  ✓  satırda var, dosyada tek
  🟡 satırda var ama dosyada BİRDEN ÇOK (uygulayıcı satırla sınırlamalı)
  ✗  satırda YOK (bayat satır no ya da metin değişmiş)
  ⚪ dosya/satır biçimi makine-okunur değil (elle uygulanacak kalem)
Çıkış kodu: ✗ varsa 1. Veriye YAZMAZ.
"""
import io, json, os, re, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
ON = {}


def dosya_oku(yol):
    if yol not in ON:
        try:
            ON[yol] = io.open(yol, encoding="utf-8").read().split("\n")
        except OSError:
            ON[yol] = None
    return ON[yol]


def sina(kod, dosya, eski):
    m = re.match(r"^(data/[\w.\-]+\.js):([\d,]+)\s*(.*)$", dosya or "", re.S)
    # ⚪ ELLE: dosya alanı birden çok dosya/satır sayıyorsa (· / ve …) ya da eski
    #    metin "dosya:satır →" önekleri taşıyorsa makine çapası DEĞİLDİR — uygulayıcı
    #    kalemin kendi metnine göre uygular. (İlk sürüm bunları ✗ basıyordu: 11 sahte hata.)
    if (not m or not eski or re.search(r"[·/]|\bve\b", m.group(3) if m else "")
            or re.match(r"^\s*(\(satır|[\w_]+\.js:\d+)", eski) or " / " in eski):
        print("  ⚪ %-26s %s" % (kod, (dosya or "")[:70]))
        return 0
    yol, satirlar = m.group(1), [int(x) for x in m.group(2).split(",")]
    S = dosya_oku(yol)
    if S is None:
        print("  ✗ %-26s %s DOSYA YOK" % (kod, yol))
        return 1
    if "\n" in eski:
        # çok satırlı çapa: bütün metinde ara, başladığı satırı karşılaştır
        tam = "\n".join(S)
        toplam = tam.count(eski)
        i = tam.find(eski)
        bas = tam.count("\n", 0, i) + 1 if i >= 0 else 0
        kotu = 0
        for n in satirlar:
            ok = i >= 0 and bas <= n <= bas + eski.count("\n")
            isaret = "✓" if ok and toplam == 1 else ("🟡" if ok else "✗")
            kotu |= isaret == "✗"
            print("  %s %-26s %s:%d  çok satırlı · dosyada %d kez · başladığı satır %d" % (isaret, kod, yol, n, toplam, bas))
        return kotu
    toplam = sum(l.count(eski) for l in S)
    kotu = 0
    for n in satirlar:
        var = n <= len(S) and eski in S[n - 1]
        if not var:
            isaret, kotu = "✗", 1
        elif toplam > 1:
            isaret = "🟡"
        else:
            isaret = "✓"
        print("  %s %-26s %s:%d  dosyada %d kez" % (isaret, kod, yol, n, toplam))
    return kotu


def kayit_adi(yol, n):
    """yol'un n. satırını içeren yerleşim kaydının adı (geriye doğru ilk ad:)."""
    S = dosya_oku(yol) or []
    for i in range(min(n, len(S)) - 1, max(-1, n - 40), -1):
        m = re.search(r'\bad\s*:\s*"([^"]+)"', S[i])
        if m:
            return m.group(1)
    return None


def kopya_tarama(K):
    """--kopya: UYGULA yerleşim kalemlerinin kayıt adlarını data/*.js içinde
    (boşluklu ve tırnaklı anahtar dahil) arar; kalemin metninde ANILMAYAN
    dosyaları basar. Ölçüm aletinin ilk sürümü 'ad: "X"' biçimini kaçırıyordu."""
    import glob as _g
    # tek geçiş dizini: ad → {dosya}. İlk sürüm her ad için her satırda regex koşup
    # 280 sn'de zaman aşımına düştü; üretilmiş dev dosyalar ad kaydı taşımaz, atlanır.
    ATLA = {"sehirler.js", "bolgeler.js", "savaslar.js", "donemler.js", "devletler_harita.js", "petek_govde.js"}
    rx_ad = re.compile(r'["\']?\bad["\']?\s*:\s*["\']([^"\']+)["\']')
    DIZIN = {}
    for f in sorted(_g.glob("data/*.js")):
        b = os.path.basename(f)
        if b in ATLA or os.path.getsize(f) > 8_000_000:
            continue
        for l in dosya_oku(f.replace("\\", "/")) or []:
            for m in rx_ad.finditer(l):
                DIZIN.setdefault(m.group(1), set()).add(b)
    for k in K:
        if str(k.get("kova", "")).upper() != "UYGULA":
            continue
        yerler = set()
        for d in [{"dosya": k.get("dosya")}] + (k.get("degisiklikler") or []):
            for m in re.finditer(r"(data/yerlesimler[\w.\-]*\.js):(\d+)", str(d.get("dosya") or "")):
                ad = kayit_adi(m.group(1), int(m.group(2)))
                if ad:
                    yerler.add((ad, m.group(1)))
        metin = json.dumps(k, ensure_ascii=False)
        for ad, ana in sorted(yerler):
            eksik = sorted(b for b in DIZIN.get(ad, ()) if b != os.path.basename(ana) and b not in metin)
            if eksik:
                print("  🟠 %-26s %-28s kalemde ANILMAYAN kopya: %s" % (k.get("kod"), ad, ", ".join(eksik)))


def main():
    hata = 0
    if sys.argv[1] == "--kopya":
        for f in sys.argv[2:]:
            Y = json.load(io.open(f, encoding="utf-8"))
            K = Y["kalemler"]
            if isinstance(K, dict):
                K = [k for v in K.values() for k in v]
            kopya_tarama(K)
        return
    for f in sys.argv[1:]:
        Y = json.load(io.open(f, encoding="utf-8"))
        K = Y["kalemler"]
        if isinstance(K, dict):
            K = [k for v in K.values() for k in v]
        print("══", f, len(K), "kalem")
        for k in K:
            kod = k.get("kod", "?")
            if k.get("eski") and k.get("dosya"):
                hata |= sina(kod, k["dosya"], k["eski"])
            for alan in ("degisiklikler", "degisiklikler_A"):
                for d in k.get(alan) or []:
                    hata |= sina(kod, d.get("dosya"), d.get("eski"))
    sys.exit(hata)


main()
