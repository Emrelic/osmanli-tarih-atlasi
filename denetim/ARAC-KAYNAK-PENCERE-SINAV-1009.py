# -*- coding: utf-8 -*-
"""ARAC-KAYNAK-PENCERE-SINAV-1009 — kaynaksızlık ölçümünün PENCERE ŞARTI sınavı.

KAYNAK-PENCERE-1009 · 9 Ekim 2026 · UMIT (koordinatör YILDIRIM BAYEZIT'in sevki).
Kullanım:  py denetim/ARAC-KAYNAK-PENCERE-SINAV-1009.py          (GERÇEK koşular dahil, ~4 dk)
           py denetim/ARAC-KAYNAK-PENCERE-SINAV-1009.py --hizli  (GERÇEK koşular atlanır)
Çıkış: 0 hepsi geçti · 1 en az biri düştü.

NİÇİN (vaka KAYNAK-TAVAN-YALANCI-IYILESME-1009, kural denetle.py KAYNAK_TAVAN_YOL
üstündeki "PENCERE ŞARTI" bloğu): ZAMAN-Z5/Z6 ufuk DIŞI dönemlere `kaynak:` yazar;
eski ölçüt "herhangi bir dönemde kaynak var" dediği için kaydı hiçbiri'nden
dönem-içi'ne taşıyordu — 1281-1923 borcu kapanmadan. Şart: kaynaklı dönem
`girdi.VERI_UFKU` (yoksa `girdi.UFUK`) ile kesişmeli. Dönem ve pencere `[f, t)`.

İKİ YÖN + negatif kontrol:
  P  sözleşme (bellekte, yapay kayıt): Yön B (pencere içi kaynak → dönem-içi) ·
     ufuk dışı kaynak → hiçbiri · uçlar · açık uç · kayıt düzeyi değişmedi ·
     NEGATİF KONTROL (penceresiz kural P3/P4'ü GEÇEMEZ — sınavın dişi).
  R  gerçek veri: kayıt-kaynaksız evreni aynı, pencere yalnız dönem-içi→hiçbiri
     yönünde taşır, taşınanlar ADIYLA basılır (Yön A: Z5+Z6 inmiş ağaçta bu
     liste yalancı iyileşmenin kendisidir; bugünkü main'de BOŞ — boş küme
     sınamaz, P sınar).
  G  GERÇEK koşu (denetle.py baştan sona, `girdi.yukle` sarmalanır):
     G0 bugünkü veri satır ✓ · G1 Yön B (gerçek bir hiçbiri kaydının pencere
     içi dönemine kaynak) hiçbiri −1 ve kapı SUSAR · G2 aynı kayda YALNIZ 1923
     sonrası kaynaklı dönem eklenir → hiçbiri DEĞİŞMEZ, kapı susar.
Sınav hiçbir dosyaya yazmaz (S-iz).
"""
import io
import json
import os
import subprocess
import sys
import tempfile

KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
AR = os.path.join(KOK, "arac")
sys.path.insert(0, AR)
HIZLI = "--hizli" in sys.argv
GENIS = ("0000-01-01", "9999-12-31")   # penceresiz (eski) kural = sonsuz pencere

sonuc = []


def soru(no, ad, kosul, ayrinti=""):
    sonuc.append((no, ad, bool(kosul), ayrinti))
    print("%s  %-4s %s%s" % ("✓" if kosul else "✗", no, ad,
                             ("  — " + ayrinti) if ayrinti else ""))


def git_durum():
    return subprocess.run(["git", "status", "--porcelain", "--", "arac", "data",
                           "denetim/KAYNAK-TAVAN.json"], cwd=KOK, capture_output=True,
                          text=True, encoding="utf-8").stdout


import girdi  # noqa: E402
import denetle  # noqa: E402

iz_once = git_durum()
P0, P1 = getattr(girdi, "VERI_UFKU", None) or girdi.UFUK
print("pencere [%s, %s)  (girdi.%s) · girdi.UFUK %s\n"
      % (P0, P1, "VERI_UFKU" if getattr(girdi, "VERI_UFKU", None) else "UFUK", girdi.UFUK))


def kayit(ad, donemler, kayit_kaynak=False):
    y = {"ad": ad, "lat": 39.0, "lon": 35.0, "_kaynak": "yerlesimler_sinav.js",
         "s": [dict(p, d=p.get("d", "osmanli")) for p in donemler]}
    if kayit_kaynak:
        y["kaynak"] = "sınav — kayıt düzeyi"
    return y


def kova(y, ufuk=None):
    K = denetle.kaynaksizlik_olc([y], ufuk=ufuk) if ufuk else denetle.kaynaksizlik_olc([y])
    for k in ("donem_ici", "hicbiri"):
        if K[k]:
            return k
    return "kayit_kaynakli" if K["s_tasiyan"] else "s_yok"


KY = "sınav — dönem kaynağı"

# ── P: sözleşme ─────────────────────────────────────────────────────────
# P1 VERI_UFKU genişlerse BİLEREK düşer: genişleme ölçüm evrenini değiştirir ve o
# commit düşüşü adıyla beyan etmelidir (denetle.py PENCERE ŞARTI bloğu).
soru("P1", "pencere girdi.py'den okunuyor (VERI_UFKU, yoksa UFUK) ve 1281-1923",
     (P0, P1) == ("1281-01-01", "1923-10-29"), "[%s, %s)" % (P0, P1))
soru("P2", "Yön B — 1500-1600 dönemine kaynak → dönem-içi",
     kova(kayit("b", [{"f": "1500-01-01", "t": "1600-01-01", "kaynak": KY}])) == "donem_ici")
soru("P3", "YALNIZ 1923 sonrası (Z5 biçimi [P1, 1945-09-02)) kaynak → hiçbiri",
     kova(kayit("z5", [{"f": "1800-01-01", "t": P1},
                       {"f": P1, "t": "1945-09-02", "kaynak": KY}])) == "hicbiri")
soru("P4", "YALNIZ 1281 öncesi (Z6 biçimi [1200, P0)) kaynak → hiçbiri",
     kova(kayit("z6", [{"f": "1200-01-01", "t": P0, "kaynak": KY},
                       {"f": P0, "t": "1400-01-01"}])) == "hicbiri")
soru("P5", "uçlar: [P1−1 gün, …) ve [… , P0+1 gün) pencereye DEĞER → dönem-içi",
     kova(kayit("u1", [{"f": "1923-10-28", "t": "1945-09-02", "kaynak": KY}])) == "donem_ici"
     and kova(kayit("u2", [{"f": "1200-01-01", "t": "1281-01-02", "kaynak": KY}])) == "donem_ici")
soru("P6", "açık uç (kd_gun gibi): f yok/t 1300 → içi · f 1950/t yok → hiçbiri · f 1200/t yok → içi",
     kova(kayit("a1", [{"t": "1300-01-01", "kaynak": KY}])) == "donem_ici"
     and kova(kayit("a2", [{"f": "1950-01-01", "kaynak": KY}])) == "hicbiri"
     and kova(kayit("a3", [{"f": "1200-01-01", "kaynak": KY}])) == "donem_ici")
_k = [{"f": P0, "t": "1500-01-01"}, {"f": P1, "t": "1945-09-02", "kaynak": KY}]
_k2 = [dict(_k[0], kaynak=KY), _k[1]]
soru("P7", "karma: dış kaynak + iç kaynaksız → hiçbiri; içe kaynak yazılınca → dönem-içi (iyileşme görünür)",
     kova(kayit("k", _k)) == "hicbiri" and kova(kayit("k", _k2)) == "donem_ici")
soru("P8", "KAYIT düzeyi DEĞİŞMEDİ: kayıt kaynağı + yalnız ufuk dışı dönem → kayıt-kaynaklı",
     kova(kayit("r", [{"f": P1, "t": "1945-09-02"}], kayit_kaynak=True)) == "kayit_kaynakli")
soru("P9", "NEGATİF KONTROL: penceresiz (eski) kural P3 ve P4'ü GEÇEMİYOR (sınavın dişi var)",
     kova(kayit("z5", [{"f": P1, "t": "1945-09-02", "kaynak": KY}]), ufuk=GENIS) == "donem_ici"
     and kova(kayit("z6", [{"f": "1200-01-01", "t": P0, "kaynak": KY}]), ufuk=GENIS) == "donem_ici")
_ufuk = tuple(girdi.UFUK)
if _ufuk != (P0, P1):
    soru("P10", "UFUK ≠ VERI_UFKU ağacında: UFUK penceresiyle sorulsa P3 DÜŞERDİ (yanlış sabit tuzağı)",
         kova(kayit("z5", [{"f": P1, "t": "1945-09-02", "kaynak": KY}]), ufuk=_ufuk) == "donem_ici",
         "UFUK %s" % (_ufuk,))
else:
    print("—   P10 UFUK == VERI_UFKU (ZAMAN-Z1 öncesi ağaç) — yanlış sabit tuzağı bu ağaçta sorulamaz")

# ── R: gerçek veri ──────────────────────────────────────────────────────
Y = girdi.yukle(sessiz=True)
K = denetle.kaynaksizlik_olc(Y)
Ke = denetle.kaynaksizlik_olc(Y, ufuk=GENIS)
n = {k: len(v) for k, v in K.items()}
ne = {k: len(v) for k, v in Ke.items()}
tasinan = sorted(set(K["hicbiri"]) - set(Ke["hicbiri"]))
print("\nölçüm pencereli %s\n       penceresiz %s" % (n, ne))
soru("R1", "kayıt-kaynaksız ve `s:` evreni AYNI (pencere kayıt düzeyine dokunmuyor)",
     K["kayit_kaynaksiz"] == Ke["kayit_kaynaksiz"] and K["s_tasiyan"] == Ke["s_tasiyan"])
soru("R2", "pencere YALNIZ dönem-içi→hiçbiri yönünde taşır (hiçbiri ⊇ penceresiz hiçbiri)",
     set(Ke["hicbiri"]) <= set(K["hicbiri"]) and set(K["donem_ici"]) <= set(Ke["donem_ici"]),
     "taşınan %d" % len(tasinan))
_idx = {"%s|%s" % (y.get("_kaynak"), y.get("ad")): y for y in Y}
_yanlis = []
for a in tasinan:
    for p in _idx[a]["s"]:
        if isinstance(p, dict) and denetle._kaynak_dolu(p.get("kaynak")) \
                and denetle._donem_pencerede(p, (P0, P1)):
            _yanlis.append(a)
soru("R3", "taşınan HER kaydın kaynaklı dönemlerinin HİÇBİRİ pencereye değmiyor (ADIYLA doğrulandı)",
     not _yanlis, "yanlış taşınan %d" % len(_yanlis))
for a in tasinan[:40]:
    print("    TAŞINDI (yalancı iyileşme yakalandı)  %s  %s" % (a, [
        (p.get("f"), p.get("t"), p.get("d")) for p in _idx[a]["s"]
        if isinstance(p, dict) and denetle._kaynak_dolu(p.get("kaynak"))]))
if len(tasinan) > 40:
    print("    … +%d kayıt daha" % (len(tasinan) - 40))
if not tasinan:
    print("    i taşınan kayıt YOK — bu ağaçta ufuk dışı dönem kaynağı yok; R2/R3 boş kümede "
          "sınanır (D: boş küme her öngörüyü doğrular), sözleşmeyi P sınıyor")

# ── G: GERÇEK koşu ─────────────────────────────────────────────────────
h0 = next((a for a in K["hicbiri"]
           if any(isinstance(p, dict) and denetle._donem_pencerede(p, (P0, P1))
                  for p in _idx[a]["s"])), None)
YAMA = {
    "yon_b": ("    for y in Y:\n"
              "        if '%%s|%%s' %% (y['_kaynak'], y['ad']) == %r:\n"
              "            y['s'] = [dict(p) for p in y['s']]\n"
              "            for p in y['s']:\n"
              "                if (p.get('f') or '') < %r and (p.get('t') or '9999') > %r:\n"
              "                    p['kaynak'] = 'sınav — pencere içi'\n"
              "                    break\n" % (h0, P1, P0)),
    # Z5 biçimi: kaydın SONUNA pencere dışı, kaynaklı bir dönem. Değişmez 1/2 gibi
    # öteki kapılar bu yapay dönemi görebilir — G2 yalnız KAYNAK satırını sınar.
    "z5_taklit": ("    for y in Y:\n"
                  "        if '%%s|%%s' %% (y['_kaynak'], y['ad']) == %r:\n"
                  "            y['s'] = [dict(p) for p in y['s']] + [{'f': %r, 't': '1945-09-02',\n"
                  "                      'd': y['s'][-1].get('d'), 'kaynak': 'sınav — 1923 sonrası'}]\n"
                  % (h0, P1)),
}


def gercek(kip):
    sarmal = None
    if kip:
        fd, sarmal = tempfile.mkstemp(prefix="kaynak-pencere-sarmal-", suffix=".py")
        os.write(fd, ("import sys, runpy\nsys.path.insert(0, %r)\nimport girdi\n"
                      "_y = girdi.yukle\n"
                      "def yukle(*a, **k):\n"
                      "    Y = _y(*a, **k)\n" % AR
                      + YAMA[kip]
                      + "    return Y\n"
                      "girdi.yukle = yukle\n"
                      "sys.argv = [%r]\n"
                      "runpy.run_path(%r, run_name='__main__')\n"
                      % (os.path.join(AR, "denetle.py"), os.path.join(AR, "denetle.py"))
                      ).encode("utf-8"))
        os.close(fd)
        komut = [sys.executable, sarmal]
    else:
        komut = [sys.executable, os.path.join(AR, "denetle.py")]
    try:
        p = subprocess.run(komut, cwd=KOK, capture_output=True, text=True, encoding="utf-8",
                           errors="replace",
                           env=dict(os.environ, PYTHONIOENCODING="utf-8", PYTHONHASHSEED="0"))
        kod, cikti = p.returncode, p.stdout + p.stderr
    finally:
        if sarmal and os.path.exists(sarmal):
            os.remove(sarmal)
    satir = next((s for s in cikti.splitlines() if "kaynaksız `s:` kaydı" in s), "")
    yeni = [s for s in cikti.splitlines() if "KAYNAKSIZ YENİ" in s or "DÖNEM-YALNIZ YENİ" in s]
    return kod, satir, yeni


def hicbiri_say(satir):
    try:
        return int(satir.split("kaynaksız `s:` kaydı:")[1].split("(")[0].strip())
    except Exception:
        return None


if HIZLI:
    print("\n—   G0/G1/G2 GERÇEK koşu ATLANDI (--hizli) — sınav TAM DEĞİL")
elif h0 is None:
    soru("G", "pencere içi dönemi olan hiçbiri kaydı bulunamadı — GERÇEK koşu KURULAMADI", False)
else:
    print("\nGERÇEK koşu hedefi: %s" % h0)
    kod0, s0, y0 = gercek(None)
    # Çıkış kodu burada ÖLÇÜT DEĞİL, bilgi: öteki kapılar (ör. Z5/Z6 inmiş ağaçta
    # Değişmez 2s/2i) kendi sebepleriyle 1 verebilir — G0 yalnız KAYNAK satırını sorar.
    # Bugünkü main'de çıkış 2 (D8 ölçülemedi) ölçüldü; değişiklik onu değiştirmedi.
    soru("G0", "GERÇEK koşu, bugünkü veri: kaynak satırı ✓ ve sayı bellek ölçümüyle aynı, YENİ satırı yok",
         "✓" in s0 and not y0 and hicbiri_say(s0) == n["hicbiri"],
         "çıkış %s (bilgi) · %s" % (kod0, s0.strip()[:90]))
    kod, s1, y1 = gercek("yon_b")
    soru("G1", "GERÇEK Yön B: pencere içi döneme kaynak → hiçbiri −1, satır ✓, YENİ yok",
         hicbiri_say(s1) == n["hicbiri"] - 1 and "✓" in s1 and not y1,
         "çıkış %s · %s" % (kod, s1.strip()[:90]))
    kod, s2, y2 = gercek("z5_taklit")
    soru("G2", "GERÇEK yalancı iyileşme: YALNIZ 1923 sonrası kaynak → hiçbiri DEĞİŞMEZ, satır ✓",
         hicbiri_say(s2) == n["hicbiri"] and "✓" in s2 and not y2,
         "çıkış %s (öteki kapılar yapay dönemi görebilir) · %s" % (kod, s2.strip()[:80]))

# ── B: BEYANLI SINIR (§ v2) — `KAYNAK-TAVAN.json` `_BEYANLI_SINIR` ─────────
# Pencerenin göremediği alt sınıf: kayıt kaynaksız, pencereyle kesişen kaynaklı
# dönemlerinin HEPSİ VERI_UFKU[0]'dan önce başlıyor (Z6 "f geri çekildi"). Alan
# kapıya KATILMAZ, yalnız basılır. B4 indirme işlevini GEÇİCİ KOPYADA çağırır
# (1004 S9 emsali) — gerçek defter yazılmaz, `--kaynak-tavan-indir` koşmaz.
import contextlib  # noqa: E402
import shutil  # noqa: E402

TAVAN = denetle.KAYNAK_TAVAN_YOL
sinif = sorted(a for a in K["donem_ici"]
               if (lambda ic: ic and all((p.get("f") or "") < P0 for p in ic))(
                   [p for p in _idx[a]["s"] if isinstance(p, dict)
                    and denetle._kaynak_dolu(p.get("kaynak")) and denetle._donem_pencerede(p, (P0, P1))]))
try:
    T = denetle._kaynak_tavan_oku(TAVAN)
    BS = T.get("_BEYANLI_SINIR")
except Exception as e:  # noqa: BLE001
    T, BS = None, None
    print("    tavan okunamadı: %s" % e)
soru("B1", "tavan dosyası okuyucudan GEÇİYOR ve `_BEYANLI_SINIR.kayitlar` bir LİSTE",
     T is not None and isinstance(BS, dict) and isinstance(BS.get("kayitlar"), list),
     "%s kayıt" % (len(BS["kayitlar"]) if isinstance(BS, dict) and isinstance(BS.get("kayitlar"), list) else "—"))
_bl = set(BS["kayitlar"]) if isinstance(BS, dict) and isinstance(BS.get("kayitlar"), list) else set()
soru("B2", "beyan listesi = ÖLÇÜLEN sınıf, İKİ YÖNDE (listede olup sınıfta olmayan 0 · tersi 0)",
     _bl == set(sinif), "ölçülen %d · liste %d · yalnız listede %s · yalnız ölçümde %s"
     % (len(sinif), len(_bl), sorted(_bl - set(sinif))[:5], sorted(set(sinif) - _bl)[:5]))


def _rapor(yol):
    t = io.StringIO()
    with contextlib.redirect_stdout(t):
        r = denetle.kaynak_tavan_rapor(Y, yol=yol)
    return r, t.getvalue().splitlines()


_gd = tempfile.mkdtemp(prefix="kaynak-pencere-beyan-")
try:
    _alansiz = os.path.join(_gd, "alansiz.json")
    _T0 = json.load(open(TAVAN, encoding="utf-8"))
    _T0.pop("_BEYANLI_SINIR", None)
    open(_alansiz, "w", encoding="utf-8").write(json.dumps(_T0, ensure_ascii=False, indent=1))
    r1, c1 = _rapor(TAVAN)
    r0, c0 = _rapor(_alansiz)
    _ek = [x for x in c1 if x not in c0]
    soru("B3", "alan YALNIZ BASILIR: hüküm aynı, çıktı farkı TEK satır ('BEYANLI SINIR'), başka satır değişmedi",
         r1 == r0 and len(c1) == len(c0) + 1 and len(_ek) == 1 and "BEYANLI SINIR" in _ek[0]
         and [x for x in c1 if x != _ek[0]] == c0, "hüküm %s/%s · ek: %s" % (r0, r1, _ek[:1]))
    _bozuk = os.path.join(_gd, "bozuk.json")
    _Tb = json.load(open(TAVAN, encoding="utf-8"))
    _Tb["_BEYANLI_SINIR"] = {"kayitlar": "liste değil"}
    open(_bozuk, "w", encoding="utf-8").write(json.dumps(_Tb, ensure_ascii=False, indent=1))
    rb, cb = _rapor(_bozuk)
    soru("B4", "NEGATİF: bozuk alan kapıyı DÜŞÜRMEZ ve basılmaz (hüküm ve çıktı alansızla aynı)",
         rb == r0 and cb == c0)
    _kopya = os.path.join(_gd, "KAYNAK-TAVAN.json")
    shutil.copyfile(TAVAN, _kopya)
    _h = K["hicbiri"][0]
    _Yi = [dict(y, kaynak="sınav — iyileşme") if "%s|%s" % (y.get("_kaynak"), y.get("ad")) == _h
           else y for y in Y]
    with contextlib.redirect_stdout(io.StringIO()):
        _yz = denetle.kaynak_tavan_indir(_Yi, yol=_kopya)
    _Tk = json.load(open(_kopya, encoding="utf-8"))
    soru("B5", "indirme işlevi (GEÇİCİ KOPYADA) alanı OLDUĞU GİBİ KORUYOR",
         _yz is True and _Tk.get("_BEYANLI_SINIR") == json.load(open(TAVAN, encoding="utf-8")).get("_BEYANLI_SINIR"),
         "indir döndü %s · hedef %s" % (_yz, _h))
finally:
    shutil.rmtree(_gd, ignore_errors=True)

soru("S-iz", "sınav iz bırakmadı (arac · data · KAYNAK-TAVAN.json)", git_durum() == iz_once)

dusen = [s for s in sonuc if not s[2]]
print("\n%d/%d geçti%s" % (len(sonuc) - len(dusen), len(sonuc),
                          "" if not dusen else " — DÜŞEN: " + ", ".join(s[0] for s in dusen)))
sys.exit(1 if dusen else 0)
