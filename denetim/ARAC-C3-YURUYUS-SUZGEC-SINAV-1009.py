# -*- coding: utf-8 -*-
"""ARAC-C3-YURUYUS-SUZGEC-SINAV-1009 — C3 diş süzgecinin İZOLE birim sınavı.

MOTOR KOŞTURULMAZ. İşlev `arac/uret_petek.py`den AST ile ÇEKİLİR (ayrı kopya yazılmaz;
`ARAC-MOTOR-NEHIR-0916.py` deseni):
  YAMASIZ kol : `origin/main:arac/uret_petek.py` — süzgeç YOK ⇒ `_YR_SAHIP` olduğu gibi
                poligonlaşır (özdeşlik). Sınav bunu varsaymaz, kaynakta ARAR.
  YAMALI kol  : aynı dosya + `denetim/C3-YURUYUS-SUZGEC-1009.diff` (geçici dizinde
                `git apply`) ⇒ `_yr_dis_suzgec` + sabitleri çekilir.

Üç yön:  A) DİŞ SİLİNİYOR MU  ·  B) KIYI/MASKE BOZULUYOR MU  ·  C) GERÇEK KORİDOR KALIYOR MU
+ üç sahipli kurgu, bağlantılılık, tohum, ölü uç tavanı.

Kullanım:  py denetim/ARAC-C3-YURUYUS-SUZGEC-SINAV-1009.py [--hiz]
Çıkış: 0 hepsi geçti · 1 en az bir sınav düştü · 2 kurulum hatası.
"""
import ast, os, subprocess, sys, tempfile, time

import numpy as np
from scipy import ndimage as ndi

if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
    sys.stdout.reconfigure(encoding="utf-8")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIFF = os.path.join(KOK, "denetim", "C3-YURUYUS-SUZGEC-1009.diff")
TABAN = os.environ.get("C3_TABAN", "origin/main")


def kur():
    ham = subprocess.run(["git", "-C", KOK, "show", f"{TABAN}:arac/uret_petek.py"],
                         capture_output=True)
    if ham.returncode:
        sys.exit(f"KURULUM: {TABAN}:arac/uret_petek.py okunamadı (2)") or 2
    yamasiz = ham.stdout.decode("utf-8").replace("\r\n", "\n")
    with tempfile.TemporaryDirectory() as td:
        os.makedirs(os.path.join(td, "arac"))
        with open(os.path.join(td, "arac", "uret_petek.py"), "w", encoding="utf-8",
                  newline="\n") as f:
            f.write(yamasiz)
        r = subprocess.run(["git", "apply", DIFF], cwd=td, capture_output=True, text=True)
        if r.returncode:
            print("KURULUM: diff uygulanamadı:", r.stderr)
            sys.exit(2)
        yamali = open(os.path.join(td, "arac", "uret_petek.py"), encoding="utf-8").read()
    return yamasiz, yamali


def cek(kaynak):
    """Süzgeç işlevini + sabitlerini AST ile çek. Yoksa None (yamasız kol)."""
    agac = ast.parse(kaynak)
    gerekli = {"_YR_DIS_HALKA", "YURUYUS_DIS_TUR", "YURUYUS_DIS_ESIK", "YURUYUS_DIS_SUZGECI"}
    dugum = []
    for n in agac.body:
        if isinstance(n, ast.FunctionDef) and n.name == "_yr_dis_suzgec":
            dugum.append(n)
        elif isinstance(n, ast.Assign) and any(
                isinstance(t, ast.Name) and t.id in gerekli for t in n.targets):
            dugum.append(n)
    if not any(isinstance(n, ast.FunctionDef) for n in dugum):
        return None
    NS = {}
    exec(compile(ast.Module(body=dugum, type_ignores=[]), "uret_petek.py[C3]", "exec"), NS)
    return NS


SONUC = []


def sina(ad, kosul, ayrinti=""):
    SONUC.append((ad, bool(kosul)))
    print(f"  {'✓' if kosul else '✗ DÜŞTÜ'}  {ad}" + (f"  — {ayrinti}" if ayrinti else ""))


def bilesen(S, lab):
    return ndi.label(S == lab, structure=np.ones((3, 3), dtype=bool))[1]


def ortak_sinav(ad, S0, S1, T):
    """Her kurgu için iki kolda da geçmesi gereken değişmezler."""
    deniz0 = S0 < 0
    sina(f"{ad}: deniz/maske dışı hücre değişmedi", np.array_equal(S1[deniz0], S0[deniz0])
         and not (S1[~deniz0] < 0).any())
    sina(f"{ad}: tohum hücresi değişmedi", np.array_equal(S1[T], S0[T]))
    artan = [int(l) for l in np.unique(S0[S0 >= 0]) if bilesen(S1, l) > bilesen(S0, l)]
    sina(f"{ad}: hiçbir sahibin bileşen sayısı ARTMADI", not artan, f"artan {artan}" if artan else "")


# ---------------------------------------------------------------- kurgular
def alan(ny=40, nx=40, deger=1):
    return np.full((ny, nx), deger, dtype=np.int32)


def tohumla(S, *yer):
    T = np.zeros(S.shape, dtype=bool)
    for j, i in yer:
        T[j, i] = True
    return T


def iki_yari():
    S = alan(); S[:20, :] = 0          # a (0) güneyde, b (1) kuzeyde
    return S, tohumla(S, (5, 20), (35, 20))


def kosu(f, ad, S, T, yasak=None, tur=None):
    if f is None:
        return S.copy(), []             # YAMASIZ: süzgeç yok ⇒ özdeşlik
    return f["_yr_dis_suzgec"](S, T, yasak, f["YURUYUS_DIS_TUR"] if tur is None else tur,
                               f["YURUYUS_DIS_ESIK"])


def kurgular():
    K = []
    # ---- A) DİŞ ----
    for w in (1, 2):
        for L in (4, 6, 10):
            S, T = iki_yari(); S[20:20 + L, 15:15 + w] = 0
            K.append(("A", f"dis {w}x{L}", S, T, None, "dis"))
    S, T = iki_yari()
    for k in range(6):
        S[20 + k, 10 + k] = 0           # çapraz (8-bağlı merdiven) diş
    K.append(("A", "capraz dis 1x6", S, T, None, "dis"))
    S, T = iki_yari()
    for k in range(6):                  # 4-bağlı zikzak diş
        S[20 + k, 10 + k // 2] = 0
    K.append(("A", "zikzak dis 1x6", S, T, None, "dis"))
    S, T = iki_yari(); S[20:26, 15:18] = 0
    K.append(("A", "3 enli cikinti 3x6 (GERCEK)", S, T, None, "sabit"))
    S, T = iki_yari()
    K.append(("A", "duz sinir", S, T, None, "sabit"))
    S = alan(); jj, ii = np.mgrid[0:40, 0:40]; S[jj < ii] = 0
    K.append(("A", "45 derece sinir", S, tohumla(S, (2, 30), (30, 2)), None, "sabit"))
    S = alan(); S[:20, :20] = 0
    K.append(("A", "90 derece dis kose", S, tohumla(S, (5, 5), (35, 35)), None, "sabit"))
    # ---- B) KIYI / MASKE ----
    S = alan(); S[:, :20] = 0; S[30:, :] = -1
    K.append(("B", "kiyiya dayanan iki sahip siniri", S, tohumla(S, (5, 5), (5, 35)), None, "sabit"))
    S = alan(); S[:, :20] = 0; S[30:, :] = -1; S[29, 20:26] = 0
    K.append(("B", "kiyi boyunca 1 enli serit (b kiyisinda)", S, tohumla(S, (5, 5), (5, 35)), None, "sabit"))
    S = alan(); S[:, :20] = 0; S[30:, :] = -1; S[26:30, 25] = 0; S[29, 20:26] = 0
    # ⚠️ İLK YAZIMDA "sabit" beklenmişti (öngörü 6) — kurgu YANLIŞ kurulmuştu: sütun 25'teki
    #    26-28. satırlar kıyı şeridinden İÇ KARAYA uzanan bir DİŞtir. Doğru beklenti:
    #    kıyı şeridi (satır 29) AYNEN, iç karaya uzanan 3 hücre silinir.
    m = np.zeros(S.shape, dtype=bool); m[29, 20:26] = True
    K.append(("B", "kiyi seridi + seritten ic karaya 3 hucrelik dis", S, tohumla(S, (5, 5), (5, 35)),
              None, ("koridor", m, 3)))
    S = alan(deger=-1); S[:, :15] = 0; S[20, 15:30] = 0; S[:, 35:] = 1
    K.append(("B", "1 enli yarimada (denize)", S, tohumla(S, (5, 5), (5, 37)), None, "sabit"))
    S = alan(deger=-1); S[:, :15] = 0; S[20, 16] = 1; S[:, 35:] = 1
    K.append(("B", "kiyiya 1 hucre uzak b adasi", S, tohumla(S, (5, 5), (5, 37)), None, "sabit"))
    S = alan(deger=-1); S[:, :15] = 0; S[20, 20:22] = 0; S[:, 35:] = 1
    K.append(("B", "a'nin 2 hucrelik adasi", S, tohumla(S, (5, 5), (5, 37), (20, 20)), None, "sabit"))
    S = alan(); S[:20, :] = 0; S[20:, 0] = 0      # ızgara (maske) kenarı boyunca 1 enli şerit
    K.append(("B", "maske/izgara kenari boyunca 1 enli serit", S, tohumla(S, (5, 20), (35, 20)), None, "sabit"))
    # ---- C) GERÇEK KORİDOR ----
    S = alan(deger=-1); S[:12, :] = 0; S[28:, :] = 0; S[12:28, 20] = 0; S[:, 39] = 1
    m = np.zeros(S.shape, dtype=bool); m[12:28, 20] = True
    K.append(("C", "Perekop: 1 enli ayni-sahip kistagi (iki yan deniz)", S,
              tohumla(S, (5, 5), (35, 5), (20, 39)), None, ("koridor", m, 0)))
    S = alan(deger=-1); S[:12, :] = 1; S[28:, :] = 0; S[12:20, 20] = 1; S[20:28, 20] = 0
    m = np.zeros(S.shape, dtype=bool); m[12:28, 20] = True
    K.append(("C", "iki sahip arasi 1 enli kistak", S, tohumla(S, (5, 5), (35, 5)), None, ("koridor", m, 0)))
    S = alan(); S[:, :10] = 0; S[:, 30:] = 0; S[20, 10:30] = 0
    m = S == 0
    K.append(("C", "b icinden gecen 1 enli boyun (iki a govdesi)", S,
              tohumla(S, (20, 2), (20, 37), (5, 20)), None, ("koridor", m, 0)))
    S = alan(); S[:, :10] = 0; S[:, 30:] = 0
    for k in range(20):
        S[10 + k // 2, 10 + k] = 0                  # 4-bağlı eğik boyun
    m = S == 0
    # ⚠️ İLK YAZIMDA "değişen 0" beklenmişti; ölçüm 2 hücre gösterdi: ikisi de b→a, boynun
    #    iki ucundaki 1 hücrelik b ÇENTİĞİNİN dolması (b'nin kendi ince hücresi, ≥5 a komşu).
    #    Koridor sorusu "a'nın hiçbir boyun hücresi kaybolmadı mı + iki gövde bağlı mı"dır.
    K.append(("C", "b icinden gecen egik boyun", S, tohumla(S, (20, 2), (20, 37), (35, 20)), None,
              ("koridor", m, None)))
    # Boğaz: a'nın 1 enli karşı kıyı şeridi; batısı boğazın öbür yakası (b, adım YASAK),
    # doğusu b iç karası. Yasak verilince oy vermez ⇒ şerit kalır.
    S = alan(); S[:5, :] = 0; S[5:25, 20] = 0
    m_bz = np.zeros(S.shape, dtype=bool); m_bz[5:25, 20] = True
    T = tohumla(S, (2, 20), (30, 5), (30, 35))
    yasak = []
    HALKA = ((0, 1), (1, 1), (1, 0), (1, -1), (0, -1), (-1, -1), (-1, 0), (-1, 1))
    for j in range(40):
        for i in (19, 20):
            for k, (di, dj) in enumerate(HALKA):
                a, b = i + di, j + dj
                if 0 <= a < 40 and 0 <= b < 40 and {i, a} == {19, 20} and j >= 5 and b >= 5:
                    yasak.append((j * 40 + i) * 8 + k)
    K.append(("C", "bogaz kiyisi 1 enli serit (yasak kenarli)", S, T,
              np.array(sorted(yasak), dtype=np.int64), ("koridor", m_bz, 0)))
    K.append(("C", "AYNI serit YASAKSIZ (teshis: yasak ne kadar is goruyor)", S, T, None, "bilgi"))
    # ---- ÜÇ SAHİPLİ ----
    S = alan(); S[20:, 21:] = 2; S[:20, :] = 0; S[20:28, 20] = 0
    K.append(("U", "uclu kavsakta diş (b|c arasinda)", S, tohumla(S, (5, 20), (35, 5), (35, 35)), None, "bilgi"))
    S = alan(); S[:20, :] = 0; S[30:, 30:] = 2; S[20:26, 10] = 0
    K.append(("U", "ucuncu sahip uzakta, dis b icinde", S, tohumla(S, (5, 20), (25, 25), (35, 35)), None, "dis"))
    # ---- ÖLÜ UÇ TAVANI ----
    S = alan(ny=60); S[:10, :] = 0; S[10:40, 20] = 0
    K.append(("T", "olu uclu 1 enli dil, boy 30 (tavan olcumu)", S, tohumla(S, (2, 20), (55, 20)), None, "bilgi"))
    S = alan(ny=60); S[:10, :] = 0; S[10:40, 20:22] = 0
    K.append(("T", "olu uclu 2 enli dil, boy 30 (tavan olcumu)", S, tohumla(S, (2, 20), (55, 20)), None, "bilgi"))
    return K


def hiz(f):
    """Gerçek boyutlu (7200×2900) Voronoi-benzeri ızgarada süre — motor bütçesi için."""
    rng = np.random.default_rng(1009)
    ny, nx, n = 2900, 7200, 4300
    py_, px_ = rng.integers(0, ny, n), rng.integers(0, nx, n)
    T = np.zeros((ny, nx), dtype=bool); T[py_, px_] = True
    lab = np.zeros((ny, nx), dtype=np.int32); lab[py_, px_] = np.arange(n) + 1
    _, (ij, ii) = ndi.distance_transform_edt(lab == 0, return_indices=True)
    S = lab[ij, ii] - 1
    S[(np.add.outer(np.arange(ny), np.arange(nx)) % 97) < 30] = -1   # şeritli "deniz"
    # EN KÖTÜ HÂL için gürültü: kara hücrelerinin %3'ü 2 hücre doğudaki komşunun sahibini
    # alır ⇒ bütün sınırlar boyunca 1-2 hücrelik çıkıntı/çentik (aday kümesi şişer).
    g = (rng.random((ny, nx)) < 0.03) & (S >= 0)
    g[:, -2:] = False
    jj, ii = np.nonzero(g)
    v = S[jj, ii + 2]
    k = v >= 0
    S[jj[k], ii[k]] = v[k]
    S[T] = (lab[T] - 1)
    t = time.time()
    S1, say = f["_yr_dis_suzgec"](S, T, None, f["YURUYUS_DIS_TUR"], f["YURUYUS_DIS_ESIK"])
    print(f"  HIZ: {ny}×{nx} · {n} tohum · değişen {int((S1 != S).sum()):,} · tur {say} · "
          f"{time.time() - t:.1f} sn")


def main():
    yamasiz, yamali = kur()
    F0, F1 = cek(yamasiz), cek(yamali)
    print("KURULUM")
    sina("yamasız kolda süzgeç YOK (özdeşlik)", F0 is None and "YURUYUS_DIS" not in yamasiz)
    sina("yamalı kolda süzgeç VAR", F1 is not None)
    if F1 is None:
        return 1
    sina("yamalı kolda sabit açık (YURUYUS_DIS_SUZGECI=True)", F1["YURUYUS_DIS_SUZGECI"] is True)
    ag = ast.parse(yamali)
    sina("yamalı dosya derleniyor", compile(ag, "uret_petek.py", "exec") is not None)
    i_sahip = yamali.index("    _YR_SAHIP = _np.fromiter(_kvsahip")
    i_cagri = yamali.index("_YR_SAHIP, _dis_sayim = _yr_dis_suzgec(")
    i_R = yamali.index("    _yr_R = _yr_kara & (_YR_SAHIP >= 0)")
    sina("çağrı `_YR_SAHIP` kurulumundan SONRA, `_yr_R`den ÖNCE", i_sahip < i_cagri < i_R)
    sina("`_kvsahip` (liste) yamada yeniden atanmıyor",
         "_kvsahip =" not in yamali[i_sahip:i_R] and "_kvsahip[" not in yamali[i_sahip:i_R])
    print(f"  sabitler: TUR={F1['YURUYUS_DIS_TUR']} · ESIK={F1['YURUYUS_DIS_ESIK']}")

    satirlar = []
    for yon, ad, S, T, yasak, bek in kurgular():
        print(f"\n[{yon}] {ad}")
        S0, _ = kosu(F0, ad, S, T, yasak)
        S1, say = kosu(F1, ad, S, T, yasak)
        d0, d1 = int((S0 != S).sum()), int((S1 != S).sum())
        a_kuzey0 = int(((S0 == 0) & (np.arange(S.shape[0])[:, None] >= 20)).sum())
        a_kuzey1 = int(((S1 == 0) & (np.arange(S.shape[0])[:, None] >= 20)).sum())
        print(f"     yamasız değişen {d0} · yamalı değişen {d1} · tur {say}")
        sina(f"{ad}: yamasız kol özdeş", d0 == 0)
        ortak_sinav(ad, S, S1, T)
        if bek == "dis":
            disli = int(((S == 0) & (np.arange(S.shape[0])[:, None] >= 20)).sum())
            sina(f"{ad}: YAMASIZ kolda diş KALIYOR ({a_kuzey0}/{disli} hücre)", a_kuzey0 == disli > 0)
            # ÖNGÖRÜ 1-2 "kalan 0" idi. Ölçüm: 2 enli ve zikzak dişte TABAN SATIRINDA (satır 20)
            # ≤ 2 hücrelik, 1 satır yüksek bir basamak kalıyor (taban hücresinde a=4/b=4 berabere,
            # ESIK 5 tutmuyor). Kıstas: satır ≥ 21'de a kalmaz + taban basamağı ≤ 2 hücre.
            ust = int(((S1 == 0) & (np.arange(S.shape[0])[:, None] >= 21)).sum())
            taban = int((S1[20] == 0).sum())
            sina(f"{ad}: YAMALI kolda diş SİLİNDİ (satır≥21 kalan {ust} · taban basamağı {taban})",
                 ust == 0 and taban <= 2)
            if a_kuzey1:
                print(f"     ÖNGÖRÜDEN SAPMA: kalan {a_kuzey1} hücre (taban basamağı, 1 satır)")
            govde = S[:20] == 0
            sina(f"{ad}: a gövdesi (güney yarı) dokunulmadı", np.array_equal(S1[:20][govde], S[:20][govde]))
        elif isinstance(bek, tuple):
            _, m, beklenen = bek
            sina(f"{ad}: koridor/şerit hücreleri AYNEN ({int(m.sum())} hücre)",
                 np.array_equal(S1[m], S[m]))
            tek = True                  # koridordaki HER sahip payı kendi içinde tek bileşen
            for lab in np.unique(S[m]):
                L1 = ndi.label(S1 == lab, structure=np.ones((3, 3), dtype=bool))[0]
                tek &= len(np.unique(L1[m & (S == lab)])) == 1
            sina(f"{ad}: koridor her sahip payında tek bileşen (bağlantı korunuyor)", tek)
            if beklenen is not None:
                sina(f"{ad}: değişen hücre {d1} = beklenen {beklenen}", d1 == beklenen)
        elif bek == "sabit":
            sina(f"{ad}: iki kolda da AYNI (yamalı değişen 0)", d1 == 0, f"değişen {d1}" if d1 else "")
        satirlar.append((yon, ad, d0, d1, say))
        if bek == "bilgi":
            ys, xs = np.nonzero(S1 != S)
            print(f"     BİLGİ: değişen hücre {d1}"
                  + (f" · satır {ys.min()}-{ys.max()}, sütun {xs.min()}-{xs.max()}" if d1 else ""))
    if "--hiz" in sys.argv:
        print()
        hiz(F1)
    dus = [a for a, k in SONUC if not k]
    print(f"\nSONUÇ: {len(SONUC) - len(dus)}/{len(SONUC)} geçti" + (f" · DÜŞEN: {dus}" if dus else ""))
    print("\nÖZET (yön · kurgu · yamasız değişen · yamalı değişen · tur):")
    for s in satirlar:
        print("  ", " · ".join(str(x) for x in s))
    return 1 if dus else 0


if __name__ == "__main__":
    sys.exit(main())
