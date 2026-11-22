"""Tek seferlik: kronoloji maddelerinin d: alanındaki İKİNCİ SINIF makine yazısını okunur cümleye çevirir.
Kurallar (anlam ve kaynaklı gerçek değişmez; kaynak: alanına dokunulmaz):
  a) "<Yer> yerleşiminin s: zincirinde sahip <A> iken <tarih> itibarıyla <B> oldu (<etiket>)."
       -> "<Yer> yerleşiminin sahibi <A> iken <B> oldu."   (tarih madde tarihine eşit olmalı)
  a2) "<Yer> (atlas yerleşimi «X») <tarih> gününde <id> egemenliğine geçti:" -> "<Yer> <Ad> egemenliğine geçti:"
  a3) "(<Yer> sahibi <id> → <id>)" -> ham kimlikler künye adıyla
  b) "Gün/yıl hassasiyeti: gun|yil|onyil|yuzyil." -> gun: silinir; öteki: "Tarih ... hassasiyetindedir."
  c) "... ilgili yerleşimin s: kaynak alanındadır." -> "... aşağıdadır."
  d) " (atlas yerleşimi «X»)" parantezi silinir
  e) "(yama diliminin kaynağından türetildi; atlasta ...)" ve " (BOŞLUK dilimi)" etiketleri
Bilinmeyen değer / çözülemeyen kimlik: dokunulmaz, rapora yazılır.
Kullanım: py arac/sizinti_duzelt2.py [--yaz] [--goster]   (varsayılan kuru koşu)
"""
import glob, io, os, re, sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
from metin_bozuk import IDLER, A2  # noqa: E402

D_RE = re.compile(r'(?<![A-Za-z0-9_])(["\']?)d\1(\s*:\s*)"((?:[^"\\]|\\.)*)"')
T_RE = re.compile(r'(?<![A-Za-z0-9_])["\']?t["\']?\s*:\s*"(\d{4}-\d\d-\d\d)"')
HAM = re.compile(r"[a-z0-9]+(?:-[a-z0-9]+)*")
TAR = r"\d{4}-\d\d-\d\d"
BASLA = r"(?:(?<=‖ )|^)"
HASSAS = {"gun": "", "yil": "Tarih yıl hassasiyetindedir.", "onyil": "Tarih on yıl hassasiyetindedir.",
          "yuzyil": "Tarih yüzyıl hassasiyetindedir."}

A_RE = re.compile(BASLA + r"(?P<yer>[^‖]+?) yerleşiminin s: zincirinde sahip (?P<a>.+?) iken (?P<tar>" + TAR +
                  r") itibarıyla (?P<b>.+?) oldu \(kuyruk[^)]*\)\.")
DEVIR_RE = re.compile(BASLA + r"(?P<yer>[^‖.]+?)(?: \(atlas yerleşimi «[^»]*»\))? (?P<tar>" + TAR +
                      r") gününde (?P<id>[a-z0-9-]+) egemenliğin(?P<ek>e geçti|den çıktı)")
OK_RE = re.compile(r"\((?P<yer>[^()]+?) sahibi (?P<a>[a-z0-9-]+) → (?P<b>[a-z0-9-]+)\)")
HAS_RE = re.compile(r" ?Gün/yıl hassasiyeti: (?P<v>[A-Za-z]+)\.")
C_RE = re.compile(r"ilgili yerleşimin s: kaynak alanındadır\.")
PAREN_RE = re.compile(r" \(atlas yerleşimi «[^»]*»\)")
YAMA_RE = re.compile(r"\(yama diliminin kaynağından türetildi; atlasta bu günden önce sahiplik kaydı yoktur\)\.")
BOSDIL_RE = re.compile(r" \(BOŞLUK dilimi\)")


class Atla(Exception):
    pass


def ad_of(x):
    """Ham kimlikse künye adı; değilse olduğu gibi. Çözülemeyen ham kimlik: Atla."""
    if x == "sahipsiz":
        return x
    if HAM.fullmatch(x):
        if x in IDLER:
            return IDLER[x]
        raise Atla("kimlik devletler.js'te yok: " + x)
    return x


def donustur(d, t, log):
    """d metnini kurallarla yeniden yazar; (yeni, uyari listesi)."""
    def tarih_denetle(tar):
        if t and tar != t:
            raise Atla("tarih madde tarihine eşit değil: %s != %s" % (tar, t))

    def f_a(m):
        try:
            tarih_denetle(m.group("tar"))
            a, b = ad_of(m.group("a")), m.group("b")
            if "__BOSLUK__" in b:
                son = "sahibi kaynaklarda bilinmeyen duruma geçti"
            else:
                son = ad_of(b) + " oldu"
            on = "sahibi yokken" if a == "sahipsiz" else "sahibi %s iken" % a
            return "%s yerleşiminin %s %s." % (m.group("yer"), on, son)
        except Atla as e:
            log.append(str(e))
            return m.group(0)

    def f_devir(m):
        try:
            tarih_denetle(m.group("tar"))
            return "%s %s egemenliğin%s" % (m.group("yer"), ad_of(m.group("id")), m.group("ek"))
        except Atla as e:
            log.append(str(e))
            return m.group(0)

    def f_ok(m):
        try:
            return "(%s sahibi %s → %s)" % (m.group("yer"), ad_of(m.group("a")), ad_of(m.group("b")))
        except Atla as e:
            log.append(str(e))
            return m.group(0)

    def f_has(m):
        v = m.group("v")
        if v not in HASSAS:
            log.append("bilinmeyen hassasiyet değeri: " + v)
            return m.group(0)
        return (" " + HASSAS[v]) if HASSAS[v] else ""

    y = A_RE.sub(f_a, d)
    y = DEVIR_RE.sub(f_devir, y)
    y = OK_RE.sub(f_ok, y)
    y = HAS_RE.sub(f_has, y)
    y = C_RE.sub("aşağıdadır.", y)
    y = YAMA_RE.sub("budur; bu günden önce için kayıt yoktur.", y)
    y = y.replace("Yerleşimin kaynaklı sahiplik zincirinin başlangıç günü budur;",
                  "Yerleşimin kaynaklı sahiplik zincirinin başlangıç günü budur;")
    y = BOSDIL_RE.sub("", y)
    y = PAREN_RE.sub("", y)
    return y


def main():
    yaz = "--yaz" in sys.argv
    goster = "--goster" in sys.argv
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
    dosyalar = sorted(set(glob.glob(os.path.join(KOK, "data", "olaylar*.js")) +
                          glob.glob(os.path.join(KOK, "data", "kronoloji*.js"))))
    toplam, uyar, kalan = {}, [], []
    for yol in dosyalar:
        ad = os.path.basename(yol)
        if ad.startswith(("ceviri_", "paket_")):
            continue
        with open(yol, encoding="utf-8", newline="") as fh:
            ham = fh.read()
        ts = [(m.start(), m.group(1)) for m in T_RE.finditer(ham)]
        parcalar, son, say = [], 0, 0
        for m in D_RE.finditer(ham):
            d = m.group(3)
            if not (A2.search(d) or OK_RE.search(d)):
                continue
            t = None
            for p, v in ts:
                if p < m.start():
                    t = v
                else:
                    break
            log = []
            y = donustur(d, t, log)
            for l in log:
                uyar.append((ad, t, l))
            if y == d:
                continue
            assert y.count('"') == d.count('"') and y.count("\\") == d.count("\\"), y
            if A2.search(y):
                kalan.append((ad, t, y[:220]))
            if goster:
                print("T:", t, ad)
                print("  ESKİ:", d[:260])
                print("  YENİ:", y[:260])
            parcalar.append(ham[son:m.start(3)])
            parcalar.append(y)
            son = m.end(3)
            say += 1
        if say:
            toplam[ad] = say
            if yaz:
                parcalar.append(ham[son:])
                with open(yol, "w", encoding="utf-8", newline="") as fh:
                    fh.write("".join(parcalar))
    print("DEĞİŞEN (dosya bazında):", toplam, "toplam", sum(toplam.values()))
    print("UYARI (dokunulmadı): %d" % len(uyar))
    for u in uyar:
        print("  ", u)
    print("KALAN A2 (kısmen dönüştü): %d" % len(kalan))
    for k in kalan:
        print("  ", k)


main()
