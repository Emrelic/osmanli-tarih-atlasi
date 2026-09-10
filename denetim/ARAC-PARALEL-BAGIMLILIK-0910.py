# -*- coding: utf-8 -*-
"""ARAC-PARALEL-BAGIMLILIK-0910 — "Yabancı devlet gövdeleri" döngüsünün
BAĞIMLILIK HARİTASI. Salt okur; arac/uret_petek.py'ye TEK KARAKTER yazmaz.

SORDUĞU SORU (şartname ADIM 1):
    Bir devletin işlenmesi, ÖNCEKİ bir devletin bıraktığı hiçbir duruma
    bağlı mı — havuza() DIŞINDA?

YÖNTEM — gözle değil AST ile. 5305 satırlık bir dosyada göz
_DOLGU_ONBELLEK gibi bir adı kaçırır; kaçırdığını da bilmez.
    (1) hedef döngü bulunur (module düzeyinde, iter'i BOYALAR.items())
    (2) döngü gövdesindeki her ad toplanır: OKUMA / YAZMA / MUTASYON
    (3) çağrılan HER modül-içi fonksiyona TRANSİTİF inilir (kapanış)
    (4) her ad sınıflandırılır: SALT-OKUNUR / BIRIKTIRICI / GERI-OKUNAN

SINIRI, PEŞİNEN: bu bir STATİK çözümlemedir.
    - eval/exec/globals() ile dolaylı erişimi GÖREMEZ
      (aranır ve sayısı raporlanır — sıfır değilse hüküm ZAYIFTIR)
    - C tarafındaki (Shapely/GEOS) gizli durumu GÖREMEZ
    - bu yüzden ADIM 3 (bit denkliği) bu aletin YERİNE GEÇMEZ, onu SINAR
"""
import ast, io, json, sys, os, collections

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(KOK, "arac", "uret_petek.py")
KAYNAK = io.open(SRC, encoding="utf-8").read()
AGAC = ast.parse(KAYNAK)

MUTATOR = {"append", "extend", "add", "update", "setdefault", "pop",
           "insert", "clear", "remove", "discard", "sort", "popitem"}
OKUYUCU_METOT = {"get", "keys", "values", "items", "index", "count",
                 "copy", "setdefault", "pop", "popitem"}


def hedef_dongu(agac):
    for d in agac.body:
        if isinstance(d, ast.For):
            kod = ast.dump(d.iter)
            if "BOYALAR" in kod and "items" in kod and "enumerate" in kod:
                return d
    return None


DONGU = hedef_dongu(AGAC)
if DONGU is None:
    sys.exit("HEDEF DONGU BULUNAMADI — alet cokuyor (yanlis cevap vermekten iyidir)")

FONKS = {}
MODUL_ADLARI = set()
ILK_ATAMA = {}


def _hedef_adlar(hedef):
    return [n.id for n in ast.walk(hedef) if isinstance(n, ast.Name)]


def modul_tara(govde):
    """Modül düzeyindeki (fonksiyon gövdesi DIŞINDAKİ) atamaları toplar.
    Bu dosya bir SCRIPT: if/for/try içindeki atamalar da GLOBAL'dir."""
    for d in govde:
        if isinstance(d, (ast.FunctionDef, ast.AsyncFunctionDef)):
            FONKS[d.name] = d
            MODUL_ADLARI.add(d.name); ILK_ATAMA.setdefault(d.name, d.lineno)
            continue
        if isinstance(d, ast.ClassDef):
            MODUL_ADLARI.add(d.name); ILK_ATAMA.setdefault(d.name, d.lineno)
            continue
        if isinstance(d, (ast.Assign, ast.AnnAssign, ast.AugAssign)):
            hedefler = d.targets if isinstance(d, ast.Assign) else [d.target]
            for h in hedefler:
                for a in _hedef_adlar(h):
                    MODUL_ADLARI.add(a); ILK_ATAMA.setdefault(a, d.lineno)
        if isinstance(d, (ast.Import, ast.ImportFrom)):
            for al in d.names:
                ad = (al.asname or al.name).split(".")[0]
                MODUL_ADLARI.add(ad); ILK_ATAMA.setdefault(ad, d.lineno)
        if isinstance(d, (ast.For, ast.AsyncFor)):
            for a in _hedef_adlar(d.target):
                MODUL_ADLARI.add(a); ILK_ATAMA.setdefault(a, d.lineno)
        if isinstance(d, (ast.With, ast.AsyncWith)):
            for it in d.items:
                if it.optional_vars is not None:
                    for a in _hedef_adlar(it.optional_vars):
                        MODUL_ADLARI.add(a); ILK_ATAMA.setdefault(a, d.lineno)
        if isinstance(d, (ast.FunctionDef, ast.AsyncFunctionDef, ast.ClassDef)):
            continue
        for alan in ("body", "orelse", "finalbody"):
            ic = getattr(d, alan, None)
            if ic:
                modul_tara(ic)
        if isinstance(d, ast.Try):
            for h in d.handlers:
                modul_tara(h.body)


modul_tara(AGAC.body)


def yerel_adlar(fn):
    yerel, kuresel = set(), set()
    for a in (fn.args.args + fn.args.kwonlyargs +
              list(getattr(fn.args, "posonlyargs", []))):
        yerel.add(a.arg)
    if fn.args.vararg:
        yerel.add(fn.args.vararg.arg)
    if fn.args.kwarg:
        yerel.add(fn.args.kwarg.arg)
    for n in ast.walk(fn):
        if isinstance(n, ast.Global):
            kuresel.update(n.names)
        elif isinstance(n, (ast.FunctionDef, ast.AsyncFunctionDef)) and n is not fn:
            yerel.add(n.name)
        elif isinstance(n, ast.Name) and isinstance(n.ctx, (ast.Store, ast.Del)):
            yerel.add(n.id)
        elif isinstance(n, ast.comprehension):
            for a in _hedef_adlar(n.target):
                yerel.add(a)
        elif isinstance(n, (ast.Import, ast.ImportFrom)):
            for al in n.names:
                yerel.add((al.asname or al.name).split(".")[0])
    yerel -= kuresel
    return yerel, kuresel


KAYIT = collections.defaultdict(
    lambda: {"oku": [], "yaz": [], "mut": [], "kaynak": set()})
CAGRILAN = {}
GORULEN_FN = set()
DOLAYLI = []

# ---------------------------------------------------------------------------
# PARAMETRE TAKMA-ADI (aliasing) — aletin ILK surumu bunu GORMUYORDU ve
# bilinen-pozitifi (DEV_HALKA_IX) kacirdi: havuza() onu PARAMETRE olarak alip
# mutasyona ugratiyor, cagri yerinde ad yalnizca OKUNMUS gibi gorunuyor.
#   havuza(..., DEV_HALKA, DEV_HALKA_IX, ...) -> icerde hav.append / ix[k]=j
# D010: "yeni yazilan denetim, IKI YONDE DE sinanmadan calisiyor sayilmaz."
# Bilinen-pozitif: DEV_HALKA_IX GERI-OKUNAN cikmali. Cikmazsa alet bozuktur.
# ---------------------------------------------------------------------------
def parametre_etkisi(fn):
    """fn'in HANGI parametresini mutasyona ugrattigini / okudugunu dondurur."""
    par = [a.arg for a in (fn.args.args + fn.args.kwonlyargs +
                           list(getattr(fn.args, "posonlyargs", [])))]
    pset = set(par)
    mut, oku = set(), set()
    for n in ast.walk(fn):
        if isinstance(n, ast.Call) and isinstance(n.func, ast.Attribute) \
           and isinstance(n.func.value, ast.Name) and n.func.value.id in pset:
            if n.func.attr in MUTATOR:
                mut.add(n.func.value.id)
                if n.func.attr in ("setdefault", "pop", "popitem"):
                    oku.add(n.func.value.id)
            elif n.func.attr in OKUYUCU_METOT:
                oku.add(n.func.value.id)
        if isinstance(n, (ast.Assign, ast.AugAssign, ast.AnnAssign)):
            hed = n.targets if isinstance(n, ast.Assign) else [n.target]
            for h in hed:
                t, alt = h, False
                while isinstance(t, (ast.Subscript, ast.Attribute)):
                    alt = True
                    t = t.value
                if isinstance(t, ast.Name) and t.id in pset and alt:
                    mut.add(t.id)
                    if isinstance(n, ast.AugAssign):
                        oku.add(t.id)
        if isinstance(n, ast.Subscript) and isinstance(n.value, ast.Name) \
           and n.value.id in pset and isinstance(n.ctx, ast.Load):
            oku.add(n.value.id)
    return par, mut, oku


PAR_ETKI = {}


def par_etki(fad):
    if fad not in PAR_ETKI:
        PAR_ETKI[fad] = parametre_etkisi(FONKS[fad])
    return PAR_ETKI[fad]


def kaydet(ad, tur, satir, nerede):
    if ad not in MODUL_ADLARI:
        return
    KAYIT[ad][tur].append(satir)
    KAYIT[ad]["kaynak"].add(nerede)


def blok_gez(dugumler, nerede, haric=frozenset()):
    for kok in dugumler:
        for n in ast.walk(kok):
            if isinstance(n, ast.Call) and isinstance(n.func, ast.Name) and \
               n.func.id in ("eval", "exec", "globals", "locals", "vars",
                             "setattr", "getattr"):
                DOLAYLI.append((n.func.id, n.lineno, nerede))
            if isinstance(n, ast.Call) and isinstance(n.func, ast.Attribute) \
               and isinstance(n.func.value, ast.Name):
                ad = n.func.value.id
                if ad in haric:
                    pass
                elif n.func.attr in MUTATOR:
                    kaydet(ad, "mut", n.lineno, nerede)
                    if n.func.attr in ("setdefault", "pop", "popitem"):
                        kaydet(ad, "oku", n.lineno, nerede)
                elif n.func.attr in OKUYUCU_METOT:
                    kaydet(ad, "oku", n.lineno, nerede)
            if isinstance(n, (ast.Assign, ast.AugAssign, ast.AnnAssign)):
                hedefler = n.targets if isinstance(n, ast.Assign) else [n.target]
                for h in hedefler:
                    t = h
                    altindis = False
                    while isinstance(t, (ast.Subscript, ast.Attribute)):
                        altindis = True
                        t = t.value
                    if isinstance(t, ast.Name) and t.id not in haric:
                        if altindis:
                            kaydet(t.id, "mut", n.lineno, nerede)
                            if isinstance(n, ast.AugAssign):
                                kaydet(t.id, "oku", n.lineno, nerede)
                        else:
                            kaydet(t.id, "yaz", n.lineno, nerede)
                            if isinstance(n, ast.AugAssign):
                                kaydet(t.id, "oku", n.lineno, nerede)
            if isinstance(n, ast.Name) and isinstance(n.ctx, ast.Load) \
               and n.id not in haric:
                kaydet(n.id, "oku", n.lineno, nerede)
            if isinstance(n, ast.Call) and isinstance(n.func, ast.Name):
                fad = n.func.id
                if fad in FONKS:
                    CAGRILAN.setdefault(fad, n.lineno)
                    # --- PARAMETRE TAKMA-ADI: cagri yerindeki ARGUMANA yaz ---
                    par, pmut, poku = par_etki(fad)
                    for i, arg in enumerate(n.args):
                        if not isinstance(arg, ast.Name) or arg.id in haric:
                            continue
                        pad = par[i] if i < len(par) else None
                        if pad is None:
                            continue
                        if pad in pmut:
                            kaydet(arg.id, "mut", n.lineno, nerede + "->" + fad)
                        if pad in poku:
                            kaydet(arg.id, "oku", n.lineno, nerede + "->" + fad)
                    for kw in n.keywords:
                        if kw.arg is None or not isinstance(kw.value, ast.Name):
                            continue
                        if kw.value.id in haric:
                            continue
                        if kw.arg in pmut:
                            kaydet(kw.value.id, "mut", n.lineno, nerede + "->" + fad)
                        if kw.arg in poku:
                            kaydet(kw.value.id, "oku", n.lineno, nerede + "->" + fad)
                    if fad not in GORULEN_FN:
                        GORULEN_FN.add(fad)
                        fn = FONKS[fad]
                        yer, kur = yerel_adlar(fn)
                        blok_gez(fn.body, "fn:" + fad, frozenset(yer))


blok_gez(DONGU.body, "DONGU")

DONGU_BAS = DONGU.lineno
DONGU_SON = max(getattr(n, "lineno", DONGU.lineno) for n in ast.walk(DONGU))


def dongu_ici_dogan(ad):
    s = ILK_ATAMA.get(ad)
    return s is not None and DONGU_BAS <= s <= DONGU_SON


def dongu_ici_kalan(k):
    """Adin BUTUN okuma/yazmalari dongu gövdesinde mi, ve YAZMA OKUMADAN
    once mi geliyor? Oyleyse ad yinelemeler arasi tasinmiyor demektir —
    dosyanin baska bir yerinde ayni ad kullanilmis olsa bile.
    (g / _dv / _pb bu yuzden ilk turda YANLIS yere dusmustu: adlari
     dosyada daha once de geciyor, ama BU dongude yaz->oku sirasindalar.)"""
    hepsi = k["oku"] + k["yaz"] + k["mut"]
    if not hepsi:
        return False
    if not all(DONGU_BAS <= l <= DONGU_SON for l in hepsi):
        return False
    # 🔴 YALNIZ YENIDEN BAGLAMA (yaz) gelen degeri OLDURUR; MUTASYON (mut)
    #    onu KORUR. Ilk surum ikisini bir saydi ve DEV_PARCA'yi
    #    "dongu-yerel" ilan etti — oysa o, havuzun ta kendisi.
    #    g / _dv / _pb yeniden BAGLANIYOR; DEV_PARCA yalnizca .append ediliyor.
    yaz = k["yaz"] or []
    return bool(yaz) and bool(k["oku"]) and min(yaz) < min(k["oku"])


SINIF = {}
for ad, k in KAYIT.items():
    yazildi = bool(k["yaz"]) or bool(k["mut"])
    okundu = bool(k["oku"])
    if ad in FONKS:
        SINIF[ad] = "SALT-OKUNUR"
    elif not yazildi:
        SINIF[ad] = "SALT-OKUNUR"
    elif dongu_ici_dogan(ad) or dongu_ici_kalan(k):
        SINIF[ad] = "DONGU-YEREL"
    elif okundu:
        SINIF[ad] = "GERI-OKUNAN"
    else:
        SINIF[ad] = "BIRIKTIRICI"

SADECE_TOPLAM = set()
for ad, k in KAYIT.items():
    if SINIF.get(ad) != "GERI-OKUNAN":
        continue
    oku_satir = set(k["oku"])
    yaz_satir = set(k["yaz"]) | set(k["mut"])
    if oku_satir and oku_satir <= yaz_satir:
        SADECE_TOPLAM.add(ad)

cikti = {
    "kaynak_dosya": "arac/uret_petek.py",
    "dongu_satir": [DONGU_BAS, DONGU_SON],
    "modul_adi_sayisi": len(MODUL_ADLARI),
    "kapanisa_giren_fonksiyon": sorted(GORULEN_FN),
    "dolayli_erisim": DOLAYLI,
    "adlar": {},
}
for ad in sorted(KAYIT):
    k = KAYIT[ad]
    cikti["adlar"][ad] = {
        "sinif": SINIF[ad],
        "sadece_toplam": ad in SADECE_TOPLAM,
        "oku": sorted(set(k["oku"]))[:8],
        "yaz": sorted(set(k["yaz"]))[:8],
        "mut": sorted(set(k["mut"]))[:8],
        "nerede": sorted(k["kaynak"])[:6],
        "ilk_atama": ILK_ATAMA.get(ad),
    }

say = collections.Counter(SINIF.values())
cikti["ozet"] = dict(say)
cikti["toplam"] = sum(say.values())

hedef = os.path.join(KOK, "denetim", "PARALEL-BAGIMLILIK-0910.json")
io.open(hedef, "w", encoding="utf-8").write(
    json.dumps(cikti, ensure_ascii=False, indent=1))

print("dongu satir      :", DONGU_BAS, "->", DONGU_SON)
print("kapanis fonksiyon:", len(GORULEN_FN))
print("dolayli erisim   :", len(DOLAYLI), "(0 degilse HUKUM ZAYIF)")
print("ad TOPLAM        :", cikti["toplam"])
for s, n in say.most_common():
    print("   %-14s %d" % (s, n))
print("SADECE-TOPLAM (kendi toplamini okuyan):", sorted(SADECE_TOPLAM))
print("")
print("--- GERI-OKUNAN (tasarimi baglayanlar) ---")
for ad in sorted(KAYIT):
    if SINIF[ad] == "GERI-OKUNAN":
        k = cikti["adlar"][ad]
        print("  %-22s oku%s yaz%s mut%s %s %s" % (
            ad, k["oku"][:3], k["yaz"][:3], k["mut"][:3],
            "[yalniz toplam]" if ad in SADECE_TOPLAM else "", k["nerede"][:3]))
print("")
print("--- BIRIKTIRICI ---")
for ad in sorted(KAYIT):
    if SINIF[ad] == "BIRIKTIRICI":
        k = cikti["adlar"][ad]
        print("  %-22s yaz%s mut%s %s" % (ad, k["yaz"][:3], k["mut"][:3],
                                          k["nerede"][:3]))
print("")
print("--- DONGU-YEREL ---")
print("  ", ", ".join(a for a in sorted(KAYIT) if SINIF[a] == "DONGU-YEREL"))
print("")
print("yazildi:", hedef)

# ---------------------------------------------------------------------------
# D010 — ALETIN IKI YONDE SINAVI. Cikti dogru gorunuyorsa alet dogru
# calisiyor DEMEK DEGILDIR; bilinen bir dogruyu bulmasi ve bilinen bir
# yanlisi bulMAMASI ayri ayri sinanir.
# ---------------------------------------------------------------------------
HATA = []
# (+) BILINEN POZITIF: sartnamenin adiyla saydigi bagimlilik.
for ad in ("DEV_HALKA_IX", "DEV_HALKA", "DEV_PARCA", "DEV_PARCA_IX"):
    if SINIF.get(ad) != "GERI-OKUNAN":
        HATA.append("POZITIF KACTI: %s -> %s (GERI-OKUNAN bekleniyordu)"
                    % (ad, SINIF.get(ad)))
# (-) BILINEN NEGATIF: gercek sabitler biriktirici/geri-okunan CIKMAMALI.
for ad in ("YERLER", "BOYALAR", "KARA", "EPOK"):
    if ad in SINIF and SINIF[ad] != "SALT-OKUNUR":
        HATA.append("NEGATIF OTTU: %s -> %s (SALT-OKUNUR bekleniyordu)"
                    % (ad, SINIF[ad]))
print("")
if HATA:
    print("ALET SINAVI: BASARISIZ")
    for h in HATA:
        print("   ", h)
    sys.exit(1)
print("ALET SINAVI: gecti (4 pozitif + 4 negatif)")
