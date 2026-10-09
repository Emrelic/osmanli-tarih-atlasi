# -*- coding: utf-8 -*-
"""ARAC-MOTOR-TARIH-TARAMA-1008 — motor tuzu dosyalarında tarih karşılaştırması taraması.

YALNIZ OKUR. Dört dosya (uret_petek.py · girdi.py · motor_onbellek.py · renkler.py)
`ast.parse` ile okunur — İÇE AKTARILMAZ (uret_petek.py modül düzeyinde 4 saat koşar).

Yöntem
  1. TAINT (AST, regex değil): tarih taşıyan ifadeler tohumlardan yayılır —
     tohum: tarih biçimli dizgi sabiti · `X["f"]`/`X["t"]`/`.get("f"|"t")` ·
     EPOK/KESIT_SON/UFUK/VERI_UFKU · `girdi.UFUK`. Yayılma kapsam-duyarlı
     (işlev başına), sabit noktaya kadar: atama · for/comprehension hedefi ·
     `S.add(x)`/`L.append(x)` · `sorted/min/max(...)` · tamsayı indisli abone ·
     işlev dönüşü · çağrı argümanı → parametre (aynı dosyadaki işlevler).
  2. ENVANTER: kirlenmiş Compare (<,>,<=,>=,==,!=,in) · sorted/min/max/.sort/bisect ·
     dilim `s[a:b]` · `.split("-")` · fromisoformat/strptime · `int(dilim)`.
  3. DAVRANIŞ: her site İZOLE edilip aynı tiplerle (str) DEĞERLENDİRİLİR —
     sıralama işlemi için kirli işlenenlere test vektörü atanır, Python'un
     gerçek `<`/`sorted`/`min`/`max`/`fromisoformat`/`int` davranışı ölçülür ve
     4 haneye doldurulmuş (pad) karşılığın sonucuyla kıyaslanır.
     Kova: ÇÖKÜYOR · SESSİZCE YANLIŞ · DOĞRU.
     Ayrıca girdi.py'nin iki gerçek işlevi (kd_gun · oku_goller) GERÇEKTEN çağrılır.
  4. GİRDİ EVRENİ: girdi.yukle() + oku_devletler() + oku_goller() — üç haneli yıl sayımı.

Kullanım:  py denetim/ARAC-MOTOR-TARIH-TARAMA-1008.py [KÖK]     (KÖK varsayılan: betiğin üst dizini)
           --json YOL  envanteri JSON'a yazar
Çıkış: 0 ölçüldü · 2 ölçülemedi (dosya yok / ayrıştırılamadı)
"""
import ast, itertools, json, os, re, sys, io, contextlib

KOK = os.path.abspath(sys.argv[1]) if len(sys.argv) > 1 and not sys.argv[1].startswith("--") \
    else os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
JSON_YOL = None
if "--json" in sys.argv:
    JSON_YOL = sys.argv[sys.argv.index("--json") + 1]
DOSYALAR = ["arac/uret_petek.py", "arac/girdi.py", "arac/motor_onbellek.py", "arac/renkler.py"]
if "--ek" in sys.argv:          # motor dışı: KARŞILAŞTIRMA envanteri denetle + renk_olc üstünde
    DOSYALAR = ["arac/denetle.py", "arac/renk_olc.py"]

TARIH_RE = re.compile(r"^-?\d{1,4}(-\d{2}){1,2}$|^\d{4}$")
TARIH_ANAHTAR = {"f", "t", "kur", "bit", "go", "devir_beyani"}   # girdi.BILINEN_ALANLAR/BILINEN_DONEM_ALANLARI tarih alanlari
TOHUM_AD = {"EPOK", "KESIT_SON", "UFUK", "VERI_UFKU"}
SIRA_OP = (ast.Lt, ast.Gt, ast.LtE, ast.GtE)
ESIT_OP = (ast.Eq, ast.NotEq, ast.In, ast.NotIn, ast.Is, ast.IsNot)


def pad(s):
    """KIYAS İÇİN doğru cevap: yılı 4 haneye doldur (yalnız ölçüm aleti, çare değil)."""
    if not isinstance(s, str):
        return s
    m = re.match(r"^(\d{1,3})(-.*)?$", s)
    if m:
        return m.group(1).zfill(4) + (m.group(2) or "")
    return s


VEKTOR = ["900-01-01", "999-12-31", "1000-01-01", "1281-01-01", "1923-10-29", "0900-01-01",
          "100-01-01", "184-06-15", "130-01-01"]
# tek yuvali kiyas icin: 1..999 butun yillar (dolgusuz) + 4 haneli sinirlar
VEKTOR_TEK = [f"{y}-06-15" for y in range(1, 1000)] + ["0900-06-15", "1000-01-01", "1281-01-01",
                                                       "1923-10-29", "1945-09-02"]
SABIT = {}   # dosya basina: modul duzeyi ad -> gercek dizgi degeri (EPOK, KESIT_SON, UFUK)


# ─────────────────────────── 1. TAINT ───────────────────────────
# AKIŞA DUYARLI (yaklaşık): bir ad kullanımı, AYNI KAPSAMDA kendisinden ÖNCEKİ en
# yakın tanımın kirliliğini alır (modül düzeyi düz kod için doğru yaklaşım;
# uret_petek.py'nin çoğu modül düzeyidir ve `i`/`g`/`a` adları yüzlerce kez
# yeniden kullanılır — akışa duyarsız taint bunları topluca kirletiyordu, ölçüldü:
# ilk sürüm 220 site verdi, 117'si `g is None` türü yanlış pozitifti).
# Comprehension hedefleri ataya bakılarak, işlev parametreleri çağrı yerlerinden çözülür.
KOMP = (ast.ListComp, ast.SetComp, ast.GeneratorExp, ast.DictComp)


class Taint:
    def __init__(self, agac):
        self.agac = agac
        self.ust = {}
        for n in ast.walk(agac):
            for c in ast.iter_child_nodes(n):
                self.ust[c] = n
        self.islevler = {n.name: n for n in ast.walk(agac)
                         if isinstance(n, (ast.FunctionDef, ast.AsyncFunctionDef))}
        self.cagrilar = {}
        self.tanim = {}
        self._memo, self._yolda = {}, set()
        for n in ast.walk(agac):
            if isinstance(n, ast.Call) and isinstance(n.func, ast.Name) and n.func.id in self.islevler:
                self.cagrilar.setdefault(n.func.id, []).append(n)
            if isinstance(n, (ast.Assign, ast.AnnAssign, ast.AugAssign, ast.NamedExpr)):
                if n.value is None:
                    continue
                hedefler = n.targets if isinstance(n, ast.Assign) else [n.target]
                tur = "aug" if isinstance(n, ast.AugAssign) else "ata"
                for h in hedefler:
                    for x in ast.walk(h):
                        if isinstance(x, ast.Name) and isinstance(x.ctx, ast.Store):
                            self._ekle(x, (n.end_lineno, n.end_col_offset), tur, n.value)
            elif isinstance(n, (ast.For, ast.AsyncFor)):
                for x in ast.walk(n.target):
                    if isinstance(x, ast.Name):
                        self._ekle(x, (n.iter.end_lineno, n.iter.end_col_offset), "for", n.iter)
            elif isinstance(n, ast.Call) and isinstance(n.func, ast.Attribute) and \
                    n.func.attr in ("add", "append", "extend", "insert", "update"):
                # kök ad: `kose.setdefault(q, []).append(x)` → kose · `L[i].append(x)` → L
                b = n.func.value
                while not isinstance(b, ast.Name):
                    if isinstance(b, ast.Call) and isinstance(b.func, ast.Attribute):
                        b = b.func.value
                    elif isinstance(b, (ast.Subscript, ast.Attribute)):
                        b = b.value
                    else:
                        b = None; break
                if b is not None:
                    self._ekle(b, (n.end_lineno, n.end_col_offset), "add", n)

    def _ekle(self, adn, pos, tur, yuk):
        kap = self.kapsam_of(adn)
        self.tanim.setdefault((kap, adn.id), []).append((pos, tur, yuk))

    def kapsam_of(self, n):
        while n in self.ust:
            n = self.ust[n]
            if isinstance(n, (ast.FunctionDef, ast.AsyncFunctionDef)):
                return n.name
        return "<modul>"

    def _tanim_kirli(self, kap, ad, liste, idx):
        pos, tur, yuk = liste[idx]
        anahtar = (kap, ad, idx)
        if anahtar in self._memo:
            return self._memo[anahtar]
        if anahtar in self._yolda:
            return False
        self._yolda.add(anahtar)
        if tur == "add":
            r = any(self.k(a) for a in yuk.args)
        else:
            r = self.k(yuk)
        if not r and tur in ("add", "aug") and idx > 0:
            r = self._tanim_kirli(kap, ad, liste, idx - 1)
        self._yolda.discard(anahtar)
        self._memo[anahtar] = r
        return r

    def _ad(self, e):
        ad = e.id
        if ad in TOHUM_AD:
            return True
        n = e
        while n in self.ust:
            p = self.ust[n]
            if isinstance(p, KOMP):
                for g in p.generators:
                    if any(isinstance(x, ast.Name) and x.id == ad for x in ast.walk(g.target)):
                        return self.k(g.iter)
            if isinstance(p, ast.Lambda):
                if ad in {a.arg for a in p.args.args}:
                    c = self.ust.get(p)
                    if isinstance(c, ast.keyword) and c.arg == "key":
                        cagri = self.ust.get(c)
                        if isinstance(cagri, ast.Call):
                            hedef = cagri.args[0] if cagri.args else (
                                cagri.func.value if isinstance(cagri.func, ast.Attribute) else None)
                            return self.k(hedef)
                    return False
            if isinstance(p, (ast.FunctionDef, ast.AsyncFunctionDef)):
                break
            n = p
        kap = self.kapsam_of(e)
        if kap != "<modul>":
            fn = self.islevler.get(kap)
            if fn is not None and ad in [a.arg for a in fn.args.args + fn.args.kwonlyargs] and \
                    (kap, ad) not in self.tanim:
                return self._param(kap, ad)
            if fn is not None and fn.args.vararg is not None and ad == fn.args.vararg.arg:
                return self._param(kap, "*" + ad)
        liste = self.tanim.get((kap, ad))
        if not liste:
            if kap != "<modul>":
                ml = self.tanim.get(("<modul>", ad)) or []
                return any(self._tanim_kirli("<modul>", ad, ml, i) for i in range(len(ml)))
            return False
        upos = (e.lineno, e.col_offset)
        once = [i for i, (pos, _, _) in enumerate(liste) if pos <= upos]
        if once:
            i = max(once, key=lambda i: liste[i][0])
            return self._tanim_kirli(kap, ad, liste, i)
        return any(self._tanim_kirli(kap, ad, liste, i) for i in range(len(liste)))

    def _param(self, fn, ad):
        anahtar = ("param", fn, ad)
        if anahtar in self._memo:
            return self._memo[anahtar]
        if anahtar in self._yolda:
            return False
        self._yolda.add(anahtar)
        f = self.islevler[fn]
        pa = [a.arg for a in f.args.args]
        r = False
        if ad.startswith("*"):     # *args: herhangi bir fazla konumsal argüman kirliyse
            for c in self.cagrilar.get(fn, []):
                if any(self.k(a) for a in c.args[len(pa):]):
                    r = True; break
            self._yolda.discard(anahtar); self._memo[anahtar] = r
            return r
        for c in self.cagrilar.get(fn, []):
            if ad in pa:
                i = pa.index(ad)
                if i < len(c.args) and self.k(c.args[i]):
                    r = True
            for kw in c.keywords:
                if kw.arg == ad and self.k(kw.value):
                    r = True
            if r:
                break
        self._yolda.discard(anahtar)
        self._memo[anahtar] = r
        return r

    def _donus(self, fn):
        anahtar = ("donus", fn)
        if anahtar in self._memo:
            return self._memo[anahtar]
        if anahtar in self._yolda:
            return False
        self._yolda.add(anahtar)
        r = any(isinstance(n, ast.Return) and self.kapsam_of(n) == fn and self.k(n.value)
                for n in ast.walk(self.islevler[fn]))
        self._yolda.discard(anahtar)
        self._memo[anahtar] = r
        return r

    def k(self, e, kap=None):
        """ifade tarih (ya da tarih kabı) taşıyor mu."""
        if e is None:
            return False
        if isinstance(e, ast.Constant):
            return isinstance(e.value, str) and bool(TARIH_RE.match(e.value))
        if isinstance(e, ast.Name):
            return self._ad(e)
        if isinstance(e, ast.Attribute):
            return e.attr in TOHUM_AD
        if isinstance(e, ast.Subscript):
            sl = e.slice
            if isinstance(sl, ast.Constant) and isinstance(sl.value, str):
                return sl.value in TARIH_ANAHTAR
            return self.k(e.value)
        if isinstance(e, ast.Call):
            f = e.func
            if isinstance(f, ast.Attribute) and f.attr == "get" and e.args and \
                    isinstance(e.args[0], ast.Constant) and e.args[0].value in TARIH_ANAHTAR:
                return True
            if isinstance(f, ast.Attribute) and f.attr == "isoformat":
                return True
            if isinstance(f, ast.Name) and f.id in ("sorted", "min", "max", "list", "set",
                                                     "tuple", "reversed", "next", "iter", "dict"):
                return any(self.k(a) for a in e.args)
            if isinstance(f, ast.Name) and f.id in self.islevler:
                return self._donus(f.id)
            if isinstance(f, ast.Attribute) and f.attr in ("pop", "copy", "values", "keys", "items", "split"):
                return self.k(f.value)
            return False
        if isinstance(e, (ast.Tuple, ast.List, ast.Set)):
            return any(self.k(x) for x in e.elts)
        if isinstance(e, ast.Dict):
            return any(self.k(x) for x in e.values if x is not None)
        if isinstance(e, (ast.GeneratorExp, ast.ListComp, ast.SetComp)):
            return self.k(e.elt)
        if isinstance(e, ast.DictComp):
            return self.k(e.key) or self.k(e.value)
        if isinstance(e, ast.IfExp):
            return self.k(e.body) or self.k(e.orelse)
        if isinstance(e, ast.BoolOp):
            return any(self.k(x) for x in e.values)
        if isinstance(e, ast.Starred):
            return self.k(e.value)
        if isinstance(e, ast.BinOp) and isinstance(e.op, (ast.BitOr, ast.Add, ast.BitAnd, ast.Sub)):
            return self.k(e.left) or self.k(e.right)
        return False

    def coz(self):
        return self


# ─────────────────────────── 2. ENVANTER ───────────────────────────
def metin(src, n):
    s = ast.get_source_segment(src, n) or ""
    return " ".join(s.split())[:200]


def envanter(yol_rel, src, agac):
    T = Taint(agac).coz()
    satirlar = []

    def ekle(n, tur, alt, kirli_isl):
        satirlar.append({"dosya": yol_rel, "satir": n.lineno, "islev": T.kapsam_of(n),
                         "tur": tur, "alt": alt, "metin": metin(src, n), "_n": n,
                         "_kirli": kirli_isl})

    for n in ast.walk(agac):
        kap = T.kapsam_of(n)
        if isinstance(n, ast.Compare):
            isl = [n.left] + list(n.comparators)
            kir = [T.k(x, kap) for x in isl]
            if not any(kir):
                continue
            ops = n.ops
            if any(isinstance(o, SIRA_OP) for o in ops):
                ekle(n, "KARSILASTIRMA", "sira", kir)
            else:
                ekle(n, "KARSILASTIRMA", "esitlik", kir)
        elif isinstance(n, ast.Call):
            f = n.func
            ad = f.id if isinstance(f, ast.Name) else (f.attr if isinstance(f, ast.Attribute) else "")
            tam = metin(src, f)
            if ad in ("sorted", "min", "max") or (isinstance(f, ast.Attribute) and ad == "sort"):
                hedef = n.args[0] if n.args else None
                if isinstance(f, ast.Attribute) and ad == "sort":
                    hedef = f.value
                anahtar = next((kw.value for kw in n.keywords if kw.arg == "key"), None)
                kir_arg = (hedef is not None and T.k(hedef, kap)) or \
                    (ad in ("min", "max") and len(n.args) > 1 and any(T.k(a, kap) for a in n.args))
                kir_key = False
                if isinstance(anahtar, ast.Lambda):
                    kir_key = T.k(anahtar.body, kap) or _lambda_kirli(T, anahtar, kap)
                if kir_arg or kir_key:
                    ekle(n, "SIRALAMA", ad + ("[key]" if anahtar is not None else ""),
                         {"arg": kir_arg, "key": kir_key, "key_var": anahtar is not None})
            elif tam.startswith("bisect") or ad in ("bisect", "bisect_left", "bisect_right", "insort"):
                ekle(n, "SIRALAMA", "bisect", {})
            elif ad in ("fromisoformat", "strptime"):
                ekle(n, "AYRISTIRMA", ad, {"arg": any(T.k(a, kap) for a in n.args)})
            elif ad == "split" and isinstance(f, ast.Attribute) and T.k(f.value, kap) and \
                    n.args and isinstance(n.args[0], ast.Constant) and n.args[0].value == "-":
                ekle(n, "AYRISTIRMA", "split('-')", {})
            elif ad == "int" and n.args and isinstance(n.args[0], ast.Subscript) and \
                    isinstance(n.args[0].slice, ast.Slice) and T.k(n.args[0].value, kap):
                ekle(n, "DILIM", "int(dilim)", {})
        elif isinstance(n, ast.Subscript) and isinstance(n.slice, ast.Slice) and T.k(n.value, kap):
            ust = T.ust.get(n)
            if isinstance(ust, ast.Call) and isinstance(ust.func, ast.Name) and ust.func.id == "int":
                continue   # int(dilim) olarak ayrıca sayıldı
            # dilimlenen şey bir LİSTE mi (ts[:-1]) yoksa DİZGİ mi (s[:4]) — sabit sınırla ayır
            ekle(n, "DILIM", "dilim", {})
    return satirlar, T


def _lambda_kirli(T, lam, kap):
    # lambda p: p["f"]  ya da  lambda x: x[0] (x kirli bir kabın elemanıysa)
    b = lam.body
    if isinstance(b, ast.Subscript) and isinstance(b.slice, ast.Constant) and \
            isinstance(b.slice.value, str) and b.slice.value in TARIH_ANAHTAR:
        return True
    if isinstance(b, ast.Tuple):
        return any(isinstance(x, ast.Subscript) and isinstance(x.slice, ast.Constant)
                   and x.slice.value in TARIH_ANAHTAR for x in b.elts)
    return False


# ─────────────────────────── 3. DAVRANIŞ ───────────────────────────
OPF = {ast.Lt: lambda a, b: a < b, ast.Gt: lambda a, b: a > b, ast.LtE: lambda a, b: a <= b,
       ast.GtE: lambda a, b: a >= b, ast.Eq: lambda a, b: a == b, ast.NotEq: lambda a, b: a != b}


def zincir(ops, degerler, donus=lambda x: x):
    for i, o in enumerate(ops):
        if not OPF[type(o)](donus(degerler[i]), donus(degerler[i + 1])):
            return False
    return True


# ELLE OKUNDU — taint'in kaba demet açılımından gelen yanlış pozitifler (dosya, satır, metin önü).
# Her biri kod okunarak doğrulandı; gerekçe yanında. Liste değil sayı tutulsaydı bayatlardı.
ELLE_TARIH_DEGIL = {
    ("arac/uret_petek.py", 5551, "sorted({a for _, a in _kus_kayit})"):
        "_kus_kayit = (gün, YER ADI) — `a` yerleşim ADI, tarih değil",
    ("arac/uret_petek.py", 5555, "a == _ad"): "yerleşim adı eşitliği",
    ("arac/uret_petek.py", 5559, "_ad in _KUS_BEKLENEN"): "yerleşim adı üyeliği",
    ("arac/uret_petek.py", 5735, "sk != si"): "sahip KİMLİĞİ eşitliği (rs = (sahip, f, t))",
    ("arac/uret_petek.py", 5738, "q in out"): "köşe koordinatı üyeliği",
}
DOLGULU = ["0900-01-01", "0908-01-01", "0969-01-01", "0999-12-31", "1000-01-01", "1281-01-01",
           "1923-10-29"]


def dolgulu_hukum(s):
    """Koordinatör sorusu (8 Eki): YALNIZ dolgulu (0xxx) girdide site doğru mu?"""
    n = s["_n"]
    tur, alt = s["tur"], s["alt"]
    if tur == "KARSILASTIRMA" and alt == "sira":
        isl = [n.left] + list(n.comparators)
        yuv, sab = [], {}
        for i, x in enumerate(isl):
            if isinstance(x, ast.Constant): sab[i] = x.value
            elif isinstance(x, ast.Name) and x.id in SABIT: sab[i] = SABIT[x.id]
            elif isinstance(x, ast.Subscript) and isinstance(x.value, ast.Name) and \
                    x.value.id in SABIT and isinstance(x.slice, ast.Constant):
                sab[i] = SABIT[x.value.id][x.slice.value]
            else: yuv.append(i)
        y = 0
        for kombi in itertools.product(DOLGULU, repeat=len(yuv)):
            d = [None] * len(isl)
            for i, v in sab.items(): d[i] = v
            for i, v in zip(yuv, kombi): d[i] = v
            if zincir(n.ops, d) != zincir(n.ops, d, pad): y += 1
        return "dolgulu: DOĞRU" if y == 0 else f"dolgulu: YANLIŞ ({y})"
    if tur == "KARSILASTIRMA" and alt == "esitlik":
        return ("dolgulu: DOĞRU · KARIŞIK yazımda YANLIŞ ('0908-01-01' == '908-01-01' → "
                f"{'0908-01-01' == '908-01-01'})")
    if tur == "SIRALAMA":
        L = ["1281-01-01", "0908-01-01", "1000-01-01", "0999-12-31"]
        return "dolgulu: DOĞRU" if sorted(L) == sorted(L, key=pad) else "dolgulu: YANLIŞ"
    if tur == "DILIM":
        o = "0900-06-15 (yabancı)"
        return f"dolgulu: {o!r}[:10] → {o[:10]!r} DOĞRU"
    return ""


def davranis(s):
    n = s["_n"]
    tur, alt = s["tur"], s["alt"]
    for (d_, l_, m_), neden in ELLE_TARIH_DEGIL.items():
        if s["dosya"] == d_ and abs(s["satir"] - l_) <= 20 and s["metin"].startswith(m_):  # ±20: Z1 yamasi satirlari kaydirir
            return "TARIH_DEGIL", "ELLE: " + neden, "kod okundu"
    if tur == "KARSILASTIRMA":
        isl = [n.left] + list(n.comparators)
        if alt == "esitlik":
            if any(isinstance(o, (ast.Is, ast.IsNot)) for o in n.ops):
                return "TARIH_DEGIL", "`is None` — tarih kıyası değil (taint yanlış pozitifi)", "izole"
            if isinstance(n.left, ast.Constant) and isinstance(n.left.value, str) and \
                    not TARIH_RE.match(n.left.value):
                return "TARIH_DEGIL", "tarih olmayan dizgi sabitinin üyeliği", "izole"
            if any(isinstance(o, (ast.In, ast.NotIn)) for o in n.ops):
                return "DOGRU", "üyelik (sözlük/küme anahtarı) — sıra kullanmaz", "izole"
            # eşitlik: yazım birliği şartıyla doğru; '900' vs '0900' ayrı yazımı ölçülür
            ayri = ("900-01-01" == "0900-01-01")
            return "DOGRU", f"eşitlik — sıra kullanmaz (koşul: tek yazım; '900-01-01'=='0900-01-01' → {ayri})", "izole"
        # sıra: kirli işlenen yuvalarına vektör ata, sabitleri koru
        yuvalar, sabit = [], {}
        for i, x in enumerate(isl):
            if isinstance(x, ast.Constant):
                sabit[i] = x.value
            elif isinstance(x, ast.Name) and x.id in SABIT:
                sabit[i] = SABIT[x.id]          # EPOK vb. GERCEK degeriyle
            elif isinstance(x, ast.Subscript) and isinstance(x.value, ast.Name) and \
                    x.value.id in SABIT and isinstance(x.slice, ast.Constant):
                sabit[i] = SABIT[x.value.id][x.slice.value]
            else:
                yuvalar.append(i)
        if any(not isinstance(v, str) for v in sabit.values()):
            return "TARIH_DEGIL", "sayısal sabitle kıyas — tarih dizgisi değil (taint yanlış pozitifi)", "izole"
        if not yuvalar:
            return "DOGRU", "iki taraf da sabit", "izole"
        yanlis, cokme, ornek = 0, 0, None
        toplam = 0
        for kombi in itertools.product(VEKTOR_TEK if len(yuvalar) == 1 else VEKTOR,
                                       repeat=len(yuvalar)):
            deg = [None] * len(isl)
            for i, v in sabit.items():
                deg[i] = v
            for i, v in zip(yuvalar, kombi):
                deg[i] = v
            toplam += 1
            try:
                gercek = zincir(n.ops, deg)
            except Exception as e:
                cokme += 1; ornek = ornek or f"{deg} → {type(e).__name__}"
                continue
            dogru = zincir(n.ops, deg, pad)
            if gercek != dogru:
                yanlis += 1
                if ornek is None:
                    ornek = f"{deg} → {gercek} (doğrusu {dogru})"
        if cokme:
            return "COKUYOR", ornek, "izole"
        if yanlis:
            return "SESSIZCE_YANLIS", f"{yanlis}/{toplam} vektörde yanlış · ör. {ornek}", "izole"
        return "DOGRU", f"{toplam} vektörde doğru", "izole"
    if tur == "SIRALAMA":
        liste = ["1281-01-01", "900-01-01", "1000-01-01", "999-12-31"]
        bilgi = s["_kirli"]
        if alt.startswith("bisect"):
            return "SESSIZCE_YANLIS", "bisect dizgi sırasına dayanır", "izole"
        if bilgi.get("key_var") and not bilgi.get("key"):
            # anahtar tarih DEĞİLSE (ör. key=len, key=gun) sıralama tarih sırasına dayanmaz
            return "TARIH_DEGIL", "key= tarih dizgisi döndürmüyor — dizgi sırası kullanılmıyor", "izole"
        ad = alt.split("[")[0]
        fn = {"sorted": sorted, "sort": sorted, "min": min, "max": max}[ad]
        g, d = fn(liste), fn(liste, key=pad)
        if g != d:
            return "SESSIZCE_YANLIS", f"{ad}({liste}) → {g} (doğrusu {d})", "izole"
        return "DOGRU", f"{ad} → {g}", "izole"
    if tur == "AYRISTIRMA":
        if alt == "split('-')":
            y, a, g = "900-01-01".split("-")
            return "DOGRU", f"'900-01-01'.split('-') → yıl {int(y)} (sayıya çevrilir, sıra doğru)", "izole"
        import datetime as _dt
        try:
            if alt == "fromisoformat":
                _dt.date.fromisoformat("900-01-01")
            else:
                _dt.datetime.strptime("900-01-01", "%Y-%m-%d")
            return "DOGRU", "üç haneli yılı kabul etti", "izole"
        except Exception as e:
            return "COKUYOR", f"'900-01-01' → {type(e).__name__}: {e}", "izole"
    if tur == "DILIM":
        if alt == "int(dilim)":
            try:
                int("900-01-01"[0:4]); return "DOGRU", "", "izole"
            except Exception as e:
                return "COKUYOR", f"int('900-01-01'[0:4]) → {type(e).__name__}", "izole"
        sl = n.slice
        ust = sl.upper.value if isinstance(sl.upper, ast.Constant) else None
        alt_ = sl.lower.value if isinstance(sl.lower, ast.Constant) else (0 if sl.lower is None else None)
        if alt_ == 0 and ust in (4, 7, 10):
            ornek = "900-06-15 (yabancı)"
            g = ornek[:ust]
            return "SESSIZCE_YANLIS", (f"dizgi tarih dilimi [:{ust}] sabit genişlik varsayar: "
                                       f"{ornek!r}[:{ust}] → {g!r} (doğrusu {ornek.split(' ')[0][:ust - 1]!r}…)"), "izole"
        return "TARIH_DEGIL", "liste dilimi (tarih dizgisi değil)", "izole"
    return "INCELE", "", ""


# ─────────────────────────── gerçek çağrı: girdi.py ───────────────────────────
def gercek_girdi(kok):
    sys.path.insert(0, os.path.join(kok, "arac"))
    for m in list(sys.modules):
        if m == "girdi":
            del sys.modules[m]
    import girdi
    out = {}
    U = girdi.UFUK
    # kd_gun: türetilmiş dönem (f=UFUK[0], t=UFUK[1]); kd: yok
    y = {"k": 2, "m": None}
    for gun in ["900-01-01", "0900-01-01", "999-12-31", "1000-01-01", "1281-01-01", "1923-10-28",
                "1945-09-01"]:
        out[f"kd_gun(türetilmiş, {gun})"] = girdi.kd_gun(y, gun)
    # açık uçlu dönem (t yok → "9999") ve üç haneli f
    y2 = {"kd": [{"f": "900-01-01", "k": 3, "m": None}]}
    for gun in ["950-01-01", "1281-01-01", "1500-01-01"]:
        out[f"kd_gun(kd f=900-01-01 t=yok, {gun})"] = girdi.kd_gun(y2, gun)
    # oku_goller: gecerli kısıtı — gecerli f üç haneli bir göl simülasyonu (dosya okunmaz,
    # karşılaştırma ifadesi BİREBİR gerçek işlevin satırından alınır → izole; aşağıda)
    out["UFUK"] = U
    out["VERI_UFKU"] = getattr(girdi, "VERI_UFKU", None)
    return out, girdi


def girdi_evreni(girdi):
    sayac = {}
    ornek = {}
    uc = re.compile(r"^\d{1,3}-")
    def say(alan, deger, kim):
        if not isinstance(deger, str):
            return
        sayac.setdefault(alan, [0, 0, 0])
        sayac[alan][0] += 1
        if uc.match(deger) or deger.startswith("-"):
            sayac[alan][1] += 1
            ornek.setdefault(alan, []).append(f"{kim}={deger}")
        elif re.match(r"^0\d{3}-", deger):
            sayac[alan][2] += 1
            ornek.setdefault(alan + "#dolgulu", []).append(f"{kim}={deger}")
    with contextlib.redirect_stdout(io.StringIO()):
        Y = girdi.yukle(sessiz=True)
    for y in Y:
        for kat in ("s", "d", "v", "isg", "kd"):
            for p in y.get(kat) or []:
                for a in ("f", "t"):
                    say(f"yerlesim.{kat}.{a}", p.get(a), y["ad"])
        for a in ("kur", "bit", "go", "devir_beyani"):
            if a in y:
                say(f"yerlesim.{a}", y.get(a), y["ad"])
    K = girdi.oku_devletler()
    for k in K:
        for a in ("f", "t"):
            say(f"devletler.{a}", k.get(a), k.get("id"))
        for i, kr in enumerate(k.get("kronoloji") or []):
            say("devletler.kronoloji.t", kr.get("t"), k.get("id"))
    with contextlib.redirect_stdout(io.StringIO()):
        G = girdi.oku_goller(sessiz=True)
    for g in G:
        gec = g.get("gecerli") or {}
        for a in ("f", "t"):
            say(f"goller.gecerli.{a}", gec.get(a), g.get("ad"))
    return len(Y), len(K), len(G), sayac, ornek


# ─────────────────────────── 5. GÖSTERİM / DİLİM (Python) ───────────────────────────
# Koordinatör kapsam genişletmesi (8-9 Eki): tarih dizgisinin BASILDIĞI / DİLİMLENDİĞİ /
# AYRIŞTIRILDIĞI yerler. Asıl soru: veri "0330-05-11" (dolgulu) olursa "0330" rapora sızar mı;
# "330-05-11" (dolgusuz) olursa ne bozulur. Her site İZOLE edilir: kirli alt ifade (en büyük)
# sabit girdiyle DEĞİŞTİRİLİR ve gerçek Python ifadesi `eval` edilir.
DOSYALAR_G = DOSYALAR + ["arac/denetle.py", "arac/renk_olc.py"]
GIRDI_G = {"dolgusuz": "330-05-11", "dolgulu": "0330-05-11"}
GIRDI_G_YIL = {"dolgusuz": "330-01-01", "dolgulu": "0330-01-01"}


def _izole(T, dugum, deger):
    """Özgün düğümü kopyalamadan, kirli alt düğümleri sabitle değiştirerek eval eder."""
    # deepcopy taint eşlemesini (düğüm kimliği) kırar → elle özyineleme; KÖK değiştirilmez
    def kur(n, kok=False):
        kaynak = isinstance(n, (ast.Name, ast.Attribute)) or \
            (isinstance(n, ast.Subscript) and not isinstance(n.slice, ast.Slice)) or \
            (isinstance(n, ast.Call) and isinstance(n.func, ast.Attribute) and n.func.attr == "get")
        if not kok and kaynak and T.k(n):
            return ast.Constant(deger)
        alanlar = {}
        for ad, v in ast.iter_fields(n):
            if isinstance(v, ast.AST):
                alanlar[ad] = kur(v)
            elif isinstance(v, list):
                alanlar[ad] = [kur(x) if isinstance(x, ast.AST) else x for x in v]
            else:
                alanlar[ad] = v
        return type(n)(**alanlar)
    ifade = ast.Expression(kur(dugum, kok=True))
    ast.fix_missing_locations(ifade)
    import datetime as _dt
    ortam = {"date": _dt.date, "datetime": _dt.datetime, "_dt": _dt, "int": int, "str": str,
             "timedelta": _dt.timedelta, "_d": _dt.date}
    try:
        return repr(eval(compile(ifade, "<izole>", "eval"), ortam))
    except NameError as e:
        return f"ÇÖZÜLEMEDİ ({e})"
    except Exception as e:
        return f"ÇÖKER {type(e).__name__}"


def gosterim_envanter(rel, src, agac):
    T = Taint(agac).coz()
    out = []

    def ekle(n, tur):
        r = {"dosya": rel, "satir": n.lineno, "islev": T.kapsam_of(n), "tur": tur,
             "metin": metin(src, n)}
        for et, g in GIRDI_G.items():
            r[et] = _izole(T, n, g)
        for et, g in GIRDI_G_YIL.items():
            r[et + "_yil"] = _izole(T, n, g)
        out.append(r)

    for n in ast.walk(agac):
        if isinstance(n, ast.Subscript) and isinstance(n.slice, ast.Slice) and T.k(n.value):
            ust = T.ust.get(n)
            if isinstance(ust, ast.Call) and isinstance(ust.func, ast.Name) and ust.func.id == "int":
                ekle(ust, "DILIM→int")
            else:
                sl = n.slice
                if not (isinstance(sl.upper, ast.Constant) and sl.upper.value in (4, 7, 10)):
                    continue      # liste dilimi ([:3], [-3:]) — tarih dizgisi değil
                if sl.upper.value == 10 and isinstance(n.value, (ast.Name, ast.Call)) and not (
                        isinstance(n.value, ast.Call) and isinstance(n.value.func, ast.Attribute)
                        and n.value.func.attr == "get"):
                    continue      # `suphe[:10]`, `sorted(...)[:10]` — LİSTE dilimi (ilk 10 kayıt)
                ekle(n, "DILIM")
        elif isinstance(n, ast.Call) and isinstance(n.func, ast.Attribute) and \
                n.func.attr in ("fromisoformat", "strptime") and any(T.k(a) for a in n.args):
            ekle(n, "AYRISTIRMA")
        elif isinstance(n, ast.Call) and isinstance(n.func, ast.Attribute) and \
                n.func.attr == "split" and T.k(n.func.value) and n.args and \
                isinstance(n.args[0], ast.Constant) and n.args[0].value == "-":
            ekle(n, "SPLIT")
        elif isinstance(n, ast.Call) and isinstance(n.func, ast.Attribute) and n.func.attr == "isoformat" \
                and any(isinstance(x, (ast.Name, ast.Subscript)) and T.k(x) for x in ast.walk(n.func.value)):
            r = {"dosya": rel, "satir": n.lineno, "islev": T.kapsam_of(n), "tur": "ISOFORMAT-URETIM",
                 "metin": metin(src, n)}
            import datetime as _dt
            r["dolgusuz"] = r["dolgulu"] = repr(_dt.date(330, 5, 11).isoformat()) + " (HER ZAMAN dolgulu üretir)"
            r["dolgusuz_yil"] = r["dolgulu_yil"] = ""
            out.append(r)
    # ham ISO basımı: f-string içinde kirli değer
    basim = []
    for n in ast.walk(agac):
        if isinstance(n, ast.FormattedValue) and T.k(n.value) and \
                not (isinstance(n.value, ast.Subscript) and isinstance(n.value.slice, ast.Slice)):
            basim.append({"dosya": rel, "satir": n.lineno, "islev": T.kapsam_of(n),
                          "metin": metin(src, n.value)})
    return out, basim


def sabitleri_coz(kok):
    """EPOK / KESIT_SON / UFUK / VERI_UFKU'nun GERCEK degerleri — kaynak AST'den okunur."""
    import datetime as _dt
    g = ast.parse(io.open(os.path.join(kok, "arac/girdi.py"), encoding="utf-8").read())
    for n in g.body:
        if isinstance(n, ast.Assign) and len(n.targets) == 1 and isinstance(n.targets[0], ast.Name)                 and n.targets[0].id in ("UFUK", "VERI_UFKU"):
            SABIT[n.targets[0].id] = ast.literal_eval(n.value)
    u = ast.parse(io.open(os.path.join(kok, "arac/uret_petek.py"), encoding="utf-8").read())
    for n in u.body:
        if isinstance(n, ast.Assign) and len(n.targets) == 1 and isinstance(n.targets[0], ast.Name)                 and n.targets[0].id in ("EPOK", "KESIT_SON"):
            ad = n.targets[0].id
            try:
                SABIT[ad] = ast.literal_eval(n.value)
            except ValueError:
                metin_ = ast.unparse(n.value)
                if metin_ == "girdi.UFUK[0]":
                    SABIT[ad] = SABIT["UFUK"][0]
                elif "girdi.UFUK[1]" in metin_ and "timedelta(days=3)" in metin_:
                    SABIT[ad] = (_dt.date.fromisoformat(SABIT["UFUK"][1]) + _dt.timedelta(days=3)).isoformat()
                else:
                    raise SystemExit(f"ÖLÇÜLEMEDİ: {ad} = {metin_} çözülemedi")
    return dict(SABIT)


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    sonuc = []
    print("SABİTLER (gerçek değer):", sabitleri_coz(KOK))
    for rel in DOSYALAR:
        yol = os.path.join(KOK, rel)
        if not os.path.exists(yol):
            print(f"ÖLÇÜLEMEDİ: {yol} yok"); return 2
        src = io.open(yol, encoding="utf-8").read()
        agac = ast.parse(src)
        sat, T = envanter(rel, src, agac)
        for s in sat:
            s["kova"], s["kanit"], s["yontem"] = davranis(s)
            s["dolgulu"] = dolgulu_hukum(s) if s["kova"] != "TARIH_DEGIL" else ""
        sonuc.extend(sat)
    sonuc.sort(key=lambda s: (s["dosya"], s["satir"]))
    from collections import Counter
    print(f"KÖK: {KOK}")
    print(f"toplam site: {len(sonuc)}")
    print("dosya × tür:", dict(Counter((s['dosya'].split('/')[-1], s['tur'] + '/' + s['alt']) for s in sonuc)))
    print("kova:", dict(Counter(s['kova'] for s in sonuc)))
    for kova in ("SESSIZCE_YANLIS", "COKUYOR", "INCELE", "DOGRU", "TARIH_DEGIL"):
        L = [s for s in sonuc if s["kova"] == kova]
        print(f"\n=== {kova} ({len(L)}) ===")
        for s in L:
            print(f"  {s['dosya'].split('/')[-1]}:{s['satir']} [{s['islev']}] {s['tur']}/{s['alt']} :: "
                  f"{s['metin']}\n      → {s['kanit']}" + (f"\n      ⓓ {s['dolgulu']}" if s.get("dolgulu") else ""))
    print("\n=== GERÇEK ÇAĞRI: girdi.py ===")
    with contextlib.redirect_stdout(io.StringIO()):
        g_out, girdi = gercek_girdi(KOK)
    for k, v in g_out.items():
        print(f"  {k} → {v}")
    print("\n=== GİRDİ EVRENİ ===")
    ny, nk, ng, sayac, ornek = girdi_evreni(girdi)
    print(f"  yerleşim {ny} · künye {nk} · göl {ng}")
    for alan in sorted(sayac):
        t, u, dl = sayac[alan]
        print(f"  {alan:32s} {t:6d} tarih · dolgusuz üç haneli/MÖ {u} · dolgulu 0xxx {dl}" +
              (f"  ör. {ornek[alan][:3]}" if u else "") +
              (f"  dolgulu: {ornek[alan + '#dolgulu']}" if dl else ""))
    if "--gosterim" in sys.argv:
        print("\n=== GÖSTERİM / DİLİM — Python (girdi: dolgusuz 330-05-11 · dolgulu 0330-05-11 · yıl: 330-01-01 / 0330-01-01) ===")
        tum_b = []
        for rel in DOSYALAR_G:
            src = io.open(os.path.join(KOK, rel), encoding="utf-8").read()
            sat, basim = gosterim_envanter(rel, src, ast.parse(src))
            tum_b.extend(basim)
            for r in sorted(sat, key=lambda r: r["satir"]):
                print(f"  {rel.split('/')[-1]}:{r['satir']} [{r['islev']}] {r['tur']} :: {r['metin'][:110]}\n"
                      f"      dolgusuz → {r['dolgusuz']} | dolgulu → {r['dolgulu']}"
                      + (f" || yıl: {r['dolgusuz_yil']} | {r['dolgulu_yil']}" if r['dolgusuz_yil'] else ""))
        from collections import Counter as _C
        print(f"\n  HAM ISO BASIMI (f-string içinde kirli tarih, dilimsiz): {len(tum_b)} site · "
              + str(dict(_C(b['dosya'].split('/')[-1] for b in tum_b))))
        print("    → dolgusuz: '330-05-11' aynen · dolgulu: '0330-05-11' aynen (rapora ISO olarak SIZAR)")
        if JSON_YOL:
            with io.open(JSON_YOL.replace(".json", "-basim.json"), "w", encoding="utf-8") as f:
                json.dump(tum_b, f, ensure_ascii=False, indent=1)
    if JSON_YOL:
        with io.open(JSON_YOL, "w", encoding="utf-8") as f:
            json.dump([{k: v for k, v in s.items() if not k.startswith("_")} for s in sonuc],
                      f, ensure_ascii=False, indent=1)
    return 0


if __name__ == "__main__":
    sys.exit(main())
