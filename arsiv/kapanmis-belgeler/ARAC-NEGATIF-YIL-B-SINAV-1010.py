# -*- coding: utf-8 -*-
"""ARAC-NEGATIF-YIL-B-SINAV-1010 — negatif yıl: AYRIŞTIRMA (③) + SIRALAMA (④), Python/motor kolu.

Her soru İKİ YÖNDE: (a) doğru ayrıştırıyor/sıralıyor mu · (b) yanlışı YAKALIYOR mu
(bozuk tarih fırlatır, sessiz yanlış değil). Eski davranışın kusuru da GERÇEKTEN
koşturulur (öter yönü): `date.fromisoformat` negatifte ValueError, dizgi sırası ters.

Astronomik yıl: MÖ 3000 = -2999 · MÖ 1 = 0 · MS 1 = 1 (YIL 0 VARDIR).

Motor (`uret_petek.py`) KOŞTURULMAZ ve İÇE AKTARILMAZ (modül düzeyi saatlerce koşar):
kodu `ast` ile okunur, sınanan satır/işlev KAYNAKTAN çıkarılıp yalıtık ad alanında
çalıştırılır — sınanan, dosyadaki GERÇEK metindir.

Kullanım: py denetim/ARAC-NEGATIF-YIL-B-SINAV-1010.py [KÖK]      Çıkış: 0 geçti · 1 kaldı
          py denetim/ARAC-NEGATIF-YIL-B-SINAV-1010.py --envanter KÖK
              yalnız Ⓔ kapısı başka bir ağaçta — YAMASIZ ağaçta ÖTMELİ (çıkış 1), iki yön
"""
import ast, io, os, random, sys
from datetime import date

IZINLI = {   # (dosya, işlev) → gerekçe: veri tarihini NEGATİFTE okumayan YEDEK yol
    ("arac/denetle.py", "_gun_farki"): "eski yol YEDEK (gün sayacı önce dener; gevşek biçim '1453-5' için)",
    ("arac/denetle.py", "artir"): "eski yol YALNIZ pozitif yılda (negatif → gün sayacı)",
}
ENVANTER_DOSYALARI = ("arac/uret_petek.py", "arac/girdi.py", "arac/denetle.py", "arac/motor_esitlik.py",
                      "arac/motor_onbellek.py", "arac/renkler.py")


def envanter(kok):
    """Tarihi datetime ile AYRIŞTIRAN çağrılar: fromisoformat · strptime · toordinal · date(...)
    (takma adıyla: `from datetime import date as _d`). → (kalan, kullanılan_izin)."""
    kalan, kullanilan = [], set()
    for dosya in ENVANTER_DOSYALARI:
        kod = io.open(os.path.join(kok, dosya), encoding="utf-8").read()
        a = ast.parse(kod)
        tarih_ad = {"date"}
        for n in ast.walk(a):
            if isinstance(n, ast.ImportFrom) and n.module == "datetime":
                tarih_ad.update(x.asname or x.name for x in n.names if x.name == "date")
        ust = {}
        for n in ast.walk(a):
            for c in ast.iter_child_nodes(n):
                ust[c] = n
        for n in ast.walk(a):
            if not isinstance(n, ast.Call):
                continue
            f = n.func
            if isinstance(f, ast.Attribute):
                hit = f.attr in ("fromisoformat", "strptime", "toordinal") or (f.attr == "date" and bool(n.args))
            else:
                hit = isinstance(f, ast.Name) and f.id in tarih_ad and bool(n.args)
            if not hit:
                continue
            zincir, p = [], n               # iç içe işlevler: en içten dışa
            while p in ust:
                p = ust[p]
                if isinstance(p, ast.FunctionDef):
                    zincir.append(p.name)
            izin = [x for x in zincir if (dosya, x) in IZINLI]
            if izin:
                kullanilan.add((dosya, izin[0]))
                continue
            satir = "%s:%d [%s]" % (dosya, n.lineno, ".".join(reversed(zincir)) or "<modul>")
            if not any(k.startswith(satir) for k in kalan):     # `date(..).toordinal()` tek site
                kalan.append("%s %s" % (satir, " ".join(ast.get_source_segment(kod, n).split())[:70]))
    return kalan, kullanilan


if "--envanter" in sys.argv:
    _k, _ = envanter(os.path.abspath(sys.argv[sys.argv.index("--envanter") + 1]))
    for _x in _k:
        print("  ✗ " + _x)
    print("ENVANTER: izinsiz ayrıştırma sitesi %d" % len(_k))
    sys.exit(1 if _k else 0)

KOK = os.path.abspath(sys.argv[1]) if len(sys.argv) > 1 else \
    os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
sys.path.insert(0, os.path.join(KOK, "arac"))
import gun                                  # noqa: E402
from gun import Tarih                       # noqa: E402

SONUC = []


def sor(ad, kosul, ayrinti=""):
    SONUC.append((ad, bool(kosul)))
    print(("  ✓ " if kosul else "  ✗ ") + ad + (("  — " + ayrinti) if ayrinti else ""))


def firlatir(f, *a):
    try:
        f(*a)
    except (TypeError, ValueError):
        return True
    return False


def kaynak(dosya):
    return io.open(os.path.join(KOK, dosya), encoding="utf-8").read()


# MÖ 3000, MÖ 1, 0 (= MÖ 1, astronomik), MS 1, 1000, 1281, 1923, 1945
VEKTOR = ["-2999-01-01", "-1199-06-15", "-0499-03-01", "-0001-12-31", "0000-01-01",
          "0001-01-01", "1000-01-01", "1281-01-01", "1923-10-29", "1945-09-02"]
DOGRU_SIRA = sorted(VEKTOR, key=gun.gun)
BOZUK = ["", "1453/05/29", "1923-13-01", "1281-02-30", "-2999-02-30", "1453-5-1", "abc",
         "-3000-1-1", "1453-05-29T00:00"]

print("\n③ AYRIŞTIRMA — eski yol (öter) · yeni yol (doğru) · bozuk (yakalar)")
sor("ESKİ: date.fromisoformat('-2999-01-01') ValueError (kusur gerçek)",
    firlatir(date.fromisoformat, "-2999-01-01"))
sor("ESKİ: date.fromisoformat('0000-01-01') ValueError (YIL 0 yok)",
    firlatir(date.fromisoformat, "0000-01-01"))
sor("ESKİ: date(int('-2999'[0:4])...) yılı -299 okur (sessiz yanlış)",
    int("-2999-01-01"[0:4]) == -299)
for s in VEKTOR:
    t = Tarih(s)
    sor("Tarih(%r) okunur, yıl %d (%s)" % (s, gun.yil(t.n), gun.yil_yazi(gun.yil(t.n))),
        t == s and t.n == gun.gun(s) and gun.dizgi(t.n) == s)
sor("MÖ 3000 ↔ -2999 · MÖ 1 ↔ 0 · MS 1 ↔ 1",
    gun.yil_yazi(-2999) == "MÖ 3000" and gun.yil_yazi(0) == "MÖ 1" and gun.yil_yazi(1) == "1")
for s in BOZUK:
    sor("bozuk %r FIRLATIR (sessiz yanlış yok)" % s, firlatir(Tarih, s))
sor("None / int FIRLATIR", firlatir(Tarih, None) and firlatir(Tarih, 1453))
sor("tarihle(): bozuk alan ADIYLA fırlatır",
    firlatir(gun.tarihle, {"f": "1281-01-01", "t": "1923-13-01"}, ("f", "t")))

print("\n④ SIRALAMA — eski dizgi sırası (öter) · Tarih (doğru)")
sor("ESKİ: '-2999' < '-0001' → False (TERS)", not ("-2999-01-01" < "-0001-01-01"))
sor("ESKİ: sorted(dizgi) yanlış", sorted(VEKTOR) != DOGRU_SIRA, " < ".join(sorted(VEKTOR)))
T = [Tarih(s) for s in VEKTOR]
random.seed(1010)
for _ in range(5):
    random.shuffle(T)
    if sorted(T) != DOGRU_SIRA:
        break
sor("sorted(Tarih) = gün sırası (5 karışım)", sorted(T) == DOGRU_SIRA, " < ".join(sorted(T)))
sor("min/max(Tarih)", min(T) == "-2999-01-01" and max(T) == "1945-09-02")
sor("Tarih ↔ düz dizgi İKİ YÖNDE sayıyla ('-0001' > Tarih('-2999') · Tarih('-2999') < '-0001')",
    "-0001-01-01" > Tarih("-2999-01-01") and Tarih("-2999-01-01") < "-0001-01-01"
    and "1281-01-01" <= Tarih("1281-01-01") and not ("1281-01-02" <= Tarih("1281-01-01")))
hata = 0
for a in VEKTOR:
    for b in VEKTOR:
        ta, tb = Tarih(a), Tarih(b)
        g = (gun.gun(a), a) < (gun.gun(b), b)
        hata += (ta < tb) != g or (ta < b) != g or (a < tb) != g or (ta >= tb) == g
sor("tam çift tablosu (%d çift × 4 işleç) gün sırasıyla" % (len(VEKTOR) ** 2), hata == 0, "%d hata" % hata)
sor("aynı gün, farklı hassasiyet: sözlük kırılımı korunur ('1526-08' < '1526-08-01')",
    Tarih("1526-08") < "1526-08-01" and not (Tarih("1526-08-01") < "1526-08"))
sor("tarih olmayan sınır bekçisi ('' · '~') sözlük kıyasına düşer (bugünkü davranış)",
    "" <= Tarih("-2999-01-01") and Tarih("1945-09-02") < "~")
sor("'9999' üst bekçisi sayıyla da en büyük", Tarih("1945-09-02") < "9999" and Tarih("-2999-01-01") < "9999")
sor("==/hash dizgiyle AYNI (sözlük anahtarı, küme, JSON değişmez)",
    Tarih("1281-01-01") == "1281-01-01" and hash(Tarih("1281-01-01")) == hash("1281-01-01")
    and {Tarih("1281-01-01")} == {"1281-01-01"})
import json, pickle                          # noqa: E402
sor("JSON + pickle gidiş-dönüş (önbellek/süreç)", json.dumps([Tarih("-2999-01-01")]) == '["-2999-01-01"]'
    and type(pickle.loads(pickle.dumps(Tarih("-2999-01-01")))) is Tarih
    and pickle.loads(pickle.dumps(Tarih("-2999-01-01"))) < "-0001-01-01")

print("\n⓪ GERİYE UYUMLULUK — bugünkü verinin BÜTÜN tarihleri: Tarih sırası == sözlük sırası")
import girdi                                 # noqa: E402
Y = girdi.yukle(sessiz=True)
D = girdi.oku_devletler()
tumu = set()
for y in Y:
    for k in ("kur", "bit", "go"):
        if y.get(k):
            tumu.add(y[k])
    for kat in ("s", "d", "v", "isg", "kd"):
        for p in y.get(kat) or []:
            tumu.update(x for x in (p.get("f"), p.get("t")) if x)
for d in D:
    tumu.update(x for x in (d.get("f"), d.get("t")) if x)
    tumu.update(k.get("t") for k in d.get("kronoloji") or [] if k.get("t"))
sarili = sum(isinstance(x, Tarih) for x in tumu)
sor("yükleyici bütün tarihleri SARDI", sarili == len(tumu), "%d/%d" % (sarili, len(tumu)))
duz = sorted(str(x) for x in tumu)
sor("sorted(Tarih) == sorted(düz dizgi) — %d ayrık tarih" % len(tumu),
    [str(x) for x in sorted(tumu)] == duz)
L = sorted(tumu, key=str)
random.seed(42)
fark = sum((a < b) != (str(a) < str(b)) or (a <= b) != (str(a) <= str(b))
           for a, b in ((random.choice(L), random.choice(L)) for _ in range(200000)))
sor("200.000 rastgele çift: Tarih kıyası == sözlük kıyası (bugünkü veri)", fark == 0, "%d fark" % fark)
sor("UFUK/VERI_UFKU Tarih, değeri AYNI", isinstance(girdi.UFUK[0], Tarih)
    and tuple(girdi.UFUK) == ("1000-01-01", "1945-09-02") and tuple(girdi.VERI_UFKU) == ("1281-01-01", "1923-10-29"))

print("\nⓂ MOTOR — kaynaktan çıkarılan GERÇEK satırlar (motor koşturulmaz)")
UP = kaynak("arac/uret_petek.py")
agac = ast.parse(UP)
ks = [n for n in agac.body if isinstance(n, ast.Assign)
      and any(isinstance(h, ast.Name) and h.id == "KESIT_SON" for h in n.targets)]
sor("uret_petek.py: KESIT_SON ataması TEK", len(ks) == 1)
ks_kod = ast.get_source_segment(UP, ks[0])
sor("KESIT_SON fromisoformat KULLANMIYOR", "fromisoformat" not in ks_kod, ks_kod.strip().splitlines()[-1])


class _G:                                    # sahte girdi: yalnız UFUK
    def __init__(self, u):
        self.UFUK = tuple(Tarih(x) for x in u)


for u, bek in ((("1000-01-01", "1945-09-02"), "1945-09-05"),
               (("-2999-01-01", "-2999-12-30"), "-2998-01-02"),
               (("-2999-01-01", "-0001-12-30"), "0000-01-02")):
    ns = {"girdi": _G(u), "_gun": gun}
    try:
        exec(compile(ks_kod, "uret_petek.py:KESIT_SON", "exec"), ns)
        v = ns["KESIT_SON"]
    except Exception as e:                   # noqa: BLE001
        v = "HATA %s" % e
    sor("KESIT_SON(UFUK sonu %s) = %s" % (u[1], bek), v == bek and isinstance(v, Tarih), str(v))
sor("ESKİ KESIT_SON ifadesi MÖ ufkunda ValueError (kusur gerçek)",
    firlatir(lambda: (date.fromisoformat("-2999-12-30"))))


def islev(kod, ad):
    for n in ast.walk(ast.parse(kod)):
        if isinstance(n, ast.FunctionDef) and n.name == ad:
            return ast.get_source_segment(kod, n)
    raise SystemExit("işlev yok: " + ad)


# kırılma tarihleri bloğu — `tarihler = sorted(t for t in tarihler if EPOK <= t <= KESIT_SON)`
blok = [ast.get_source_segment(UP, n) for n in agac.body if isinstance(n, (ast.Assign, ast.If))
        and "tarihler" in (ast.get_source_segment(UP, n) or "")[:40]
        and ("EPOK" in ast.get_source_segment(UP, n) or "KESIT_SON" in ast.get_source_segment(UP, n))]
sor("motor kırılma bloğu bulundu (sorted + iki uç)", len(blok) >= 3, "%d deyim" % len(blok))
for etiket, sar in (("ESKİ (düz dizgi) — öter", str), ("YENİ (Tarih) — doğru", Tarih)):
    ns = {"EPOK": sar("-2999-01-01"), "KESIT_SON": sar("0000-01-04"),
          "tarihler": {sar(x) for x in ("-0499-03-01", "-1199-06-15", "-0001-12-31", "-2999-01-01", "1281-01-01")}}
    for b in blok[:3]:
        exec(compile(b, "uret_petek.py:tarihler", "exec"), ns)
    dogru = ["-2999-01-01", "-1199-06-15", "-0499-03-01", "-0001-12-31", "0000-01-04"]
    if sar is str:
        sor("motor kırılma sırası " + etiket, ns["tarihler"] != dogru, " < ".join(ns["tarihler"]))
    else:
        sor("motor kırılma sırası " + etiket, ns["tarihler"] == dogru, " < ".join(ns["tarihler"]))

alan = islev(UP, "_alan_g")
for etiket, sar in (("ESKİ düz dizgi — öter", str), ("YENİ Tarih — doğru", Tarih)):
    ns = {}
    exec(compile(alan, "uret_petek.py:_alan_g", "exec"), ns)
    dnm = [{"f": sar("-2999-01-01"), "t": sar("-1199-01-01"), "ao": 1, "av": 0},
           {"f": sar("-1199-01-01"), "t": sar("-0499-01-01"), "ao": 2, "av": 0}]
    r = ns["_alan_g"](dnm, sar("-2000-06-15"))
    sor("_alan_g(MÖ 2001) dönem 1 " + etiket, (r == (1, 0)) == (sar is Tarih), repr(r))

print("\nⒼ girdi.py — gerçek işlevler")
y = {"kd": [{"f": Tarih("-2999-01-01"), "t": Tarih("-1199-01-01"), "k": 2, "m": "Ur"}]}
sor("kd_gun(MÖ 2001) → (2, 'Ur')", girdi.kd_gun(y, Tarih("-2000-06-15")) == (2, "Ur"))
sor("kd_gun(MÖ 1000) → (0, None)", girdi.kd_gun(y, Tarih("-0999-06-15")) == (0, None))
y2 = {"kd": [{"f": "-2999-01-01", "t": "-1199-01-01", "k": 2, "m": "Ur"}]}
sor("ESKİ (sarılmamış): kd_gun(MÖ 2001) dönemi BULAMAZ — öter", girdi.kd_gun(y2, "-2000-06-15") == (0, None))
sor("yukle() bozuk tarihli kaydı REDDEDER (tarihle → ValueError)",
    firlatir(gun.tarihle, {"kur": "1453-5-29"}, ("kur",)))

print("\nⒹ denetle.py — ayrıştırıcılar negatifte")
import denetle                               # noqa: E402
sor("gun_no('-2999-01-01') = gun + 719163", denetle.gun_no("-2999-01-01") == gun.gun("-2999-01-01") + 719163)
sor("gun_no bugünkü biçimde AYNI ('1453-05-29' · '1453-05' · '330-05-11')",
    denetle.gun_no("1453-05-29") == date(1453, 5, 29).toordinal()
    and denetle.gun_no("1453-05") == date(1453, 5, 1).toordinal()
    and denetle.gun_no("330-05-11") == date(330, 5, 11).toordinal())
sor("gun_no bozukta FIRLATIR", firlatir(denetle.gun_no, "1453/05/29"))
sor("_gun_farki('-2999-01-01','1281-01-01') = -1.563.239 (None DEĞİL)",
    denetle._gun_farki("-2999-01-01", "1281-01-01") == -1563239)
sor("_gun_farki bugünkü gevşek biçim AYNEN ('1453-5' → eski yol)",
    denetle._gun_farki("1453-5", "1453-01-01") == (date(1453, 5, 1) - date(1453, 1, 1)).days)
sor("_gun_no('-0499') = gun('-0499-01-01') + 719163", denetle._gun_no("-0499") == gun.gun("-0499-01-01") + 719163)
sor("_d8_gun_once('-2999-01-01') = '-3000-12-31'", denetle._d8_gun_once("-2999-01-01") == "-3000-12-31")
sor("_d8_gun_once('0001-01-01') = '0000-12-31' (YIL 0)", denetle._d8_gun_once("0001-01-01") == "0000-12-31")
sor("_d8_gun_once bozukta None", denetle._d8_gun_once("1453/05/29") is None)
sor("olay yükleyici madde `t`yi sardı · okunamayan 0",
    all(isinstance(o.get("t"), Tarih) for o in denetle.olaylari_yukle() if o.get("t"))
    and denetle.OKUNAMAYAN_MADDE_T == [])

print("\nⒺ ENVANTER KAPISI — veri okuyan fromisoformat/date()/strptime KALMADI (AST)")
kalan, kullanilan = envanter(KOK)
for k in kalan:
    print("      " + k)
sor("izinsiz ayrıştırma sitesi 0", not kalan, "%d" % len(kalan))
sor("İZİN listesi CANLI (ölü istisna yok, CLAUDE.md §3.4-5)", kullanilan == set(IZINLI),
    "ölü: %s" % sorted(set(IZINLI) - kullanilan))

gec = sum(1 for _, k in SONUC if k)
print("\nSONUÇ: %d/%d" % (gec, len(SONUC)))
sys.exit(0 if gec == len(SONUC) else 1)
