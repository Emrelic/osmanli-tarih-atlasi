# -*- coding: utf-8 -*-
"""RENK-1103 (a,b,d): renk onerisi uretici + dogrulayici. SALT-OKUNUR: renkler.py / data / motor
dosyalarina yazmaz; yalniz bu dizine yazar. renk_olc.py ve renkler.py ithal edilir (degismez).

Calistir:  py denetim/RENK-1103/renk_oneri.py
Cikti:     renk_oneri.json  renk_oneri_ham.json  (ayni dizin)
Olcut:     renk_olc.py ile AYNI: gorunen renk = %44 opaklikla altliga bindirilmis; dE = CIE76
           (Lab oklit); esik DE_KOMSU=12 (komsu), DE_ALTLIK=15; deniz DE_DENIZ=18 / DAL2;
           renkler.py: ACIKLIK_TABANI_L=59 (bindirilmis L*), SU_ESIK_DE=18 (ham hex<->SU_RENGI).
           Ek bilgi olarak CIEDE2000 de hesaplanir (karar CIE76 uzerinden - araclarin esigi o).
"""
import io, os, re, sys, json, math, copy, itertools, collections
import numpy as np

BOLUM = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.dirname(os.path.dirname(BOLUM))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
import renkler
from renkler import BOYALAR, ALTLIK, OPAKLIK, PAYLASIM
import renk_olc as R

A = OPAKLIK["yabanci"]
ALT_RGB = np.array(ALTLIK, float)
KOMSU = R.DE_KOMSU            # 12
HEDEF = 15.0                  # tercih edilen en kucuk komsu farki (esik+3 guvenlik payi)
PAY_ALT = (R.DE_ALTLIK, 1.0)  # 15 +1
ENGEL_KM = R.B_KADEME_KM      # 1500 km (renk_olc aynasi)

# ---------------------------------------------------------------- Lab (renk_olc.lab ile ayni)
def _f(t):
    return np.where(t > 0.008856, np.cbrt(t), 7.787 * t + 16 / 116)


def lab_v(rgb):
    rgb = np.asarray(rgb, float) / 255
    rgb = np.where(rgb > 0.04045, ((rgb + 0.055) / 1.055) ** 2.4, rgb / 12.92)
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    x = (0.4124 * r + 0.3576 * g + 0.1805 * b) / 0.95047
    y = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 1.0
    z = (0.0193 * r + 0.1192 * g + 0.9505 * b) / 1.08883
    fx, fy, fz = _f(x), _f(y), _f(z)
    return np.stack([116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)], -1)


def vis_lab_hex(hx):
    return np.array(R.lab(R.bind(R.h2r(hx))))


def hab(l):
    return math.degrees(math.atan2(l[2], l[1])) % 360


def hue_fark(h1, h2):
    d = abs(h1 - h2) % 360
    return min(d, 360 - d)


def de2000(l1, l2):
    """CIEDE2000 (Sharma 2005) - yalniz bilgi icin."""
    L1, a1, b1 = l1; L2, a2, b2 = l2
    C1, C2 = math.hypot(a1, b1), math.hypot(a2, b2)
    Cb = (C1 + C2) / 2
    G = 0.5 * (1 - math.sqrt(Cb ** 7 / (Cb ** 7 + 25 ** 7)))
    a1p, a2p = (1 + G) * a1, (1 + G) * a2
    C1p, C2p = math.hypot(a1p, b1), math.hypot(a2p, b2)
    h1p = math.degrees(math.atan2(b1, a1p)) % 360
    h2p = math.degrees(math.atan2(b2, a2p)) % 360
    dLp, dCp = L2 - L1, C2p - C1p
    if C1p * C2p == 0:
        dhp = 0
    else:
        dhp = h2p - h1p
        dhp = dhp - 360 if dhp > 180 else dhp + 360 if dhp < -180 else dhp
    dHp = 2 * math.sqrt(C1p * C2p) * math.sin(math.radians(dhp / 2))
    Lbp, Cbp = (L1 + L2) / 2, (C1p + C2p) / 2
    if C1p * C2p == 0:
        hbp = h1p + h2p
    elif abs(h1p - h2p) <= 180:
        hbp = (h1p + h2p) / 2
    else:
        hbp = (h1p + h2p + 360) / 2 if h1p + h2p < 360 else (h1p + h2p - 360) / 2
    T = (1 - 0.17 * math.cos(math.radians(hbp - 30)) + 0.24 * math.cos(math.radians(2 * hbp))
         + 0.32 * math.cos(math.radians(3 * hbp + 6)) - 0.20 * math.cos(math.radians(4 * hbp - 63)))
    dth = 30 * math.exp(-(((hbp - 275) / 25) ** 2))
    Rc = 2 * math.sqrt(Cbp ** 7 / (Cbp ** 7 + 25 ** 7))
    Sl = 1 + 0.015 * (Lbp - 50) ** 2 / math.sqrt(20 + (Lbp - 50) ** 2)
    Sc, Sh = 1 + 0.045 * Cbp, 1 + 0.015 * Cbp * T
    Rt = -math.sin(math.radians(2 * dth)) * Rc
    return math.sqrt((dLp / Sl) ** 2 + (dCp / Sc) ** 2 + (dHp / Sh) ** 2 + Rt * (dCp / Sc) * (dHp / Sh))


# ---------------------------------------------------------------- tarih
_RX = re.compile(r"^(-?)(\d+)-(\d\d)-(\d\d)")


def num(s):
    """ISO gun -> sayi; MO (negatif) yillari dogru siralar (dize kiyasi negatiflerde TERS)."""
    m = _RX.match(s)
    y = int(m.group(2)) * (-1 if m.group(1) else 1)
    return y * 372 + (int(m.group(3)) - 1) * 31 + int(m.group(4)) - 1


# ---------------------------------------------------------------- veri
D = girdi.oku_devletler()
M = {d["id"]: d for d in D}
RAW = girdi.yukle(sessiz=True)
_ORIG_YUKLE = girdi.yukle


def motor_anahtar(kimlik, boy):
    if kimlik in boy:
        return kimlik
    h = (M.get(kimlik) or {}).get("harita")
    if h and h in boy:
        return h
    return None


def yonlendirilmis_yukle_kur(boy):
    """girdi.yukle'yi, motorun A' kuralini (s.d -> harita) uygulayan surumle degistirir."""
    def yukle(sessiz=False):
        out = []
        for y in RAW:
            y2 = dict(y)
            for kat in ("s", "v"):
                if y.get(kat):
                    L = []
                    for p in y[kat]:
                        p2 = dict(p)
                        d = p2.get("d")
                        if d and d not in boy:
                            a = motor_anahtar(d, boy)
                            if a:
                                p2["d"] = a
                        L.append(p2)
                    y2[kat] = L
            out.append(y2)
        return out
    girdi.yukle = yukle


# ================================================================ A. TABAN (renk_olc aynen)
def olc_evren(k, boy):
    """(voronoi_cakisan, yak_i, yeni_i): renk_olc.denetle ile ayni tanim."""
    cak = []
    for a in sorted(boy):
        La = R.gorunen(a)
        for b in sorted(k.get(a, ())):
            if b <= a or b not in boy:
                continue
            d = R.dE(La, R.gorunen(b))
            if d < KOMSU:
                cak.append((d, a, b))
        for ad, o in R.OSM.items():
            d = R.dE(La, o)
            if d < KOMSU and (a in k.get("OSMANLI", ()) or "OSMANLI" in k.get(a, ())):
                cak.append((d, a, ad))
    yak_i, yak_s, _, _ = R.yakin_renk(k)
    kun_i, _, _, _ = R.yakin_renk(k, kunye=True)
    yeni = [x for x in kun_i if (x[2], x[3]) not in {(y[2], y[3]) for y in yak_i}]
    return cak, yak_i, yeni


print("== A. taban (renk_olc ham, yonlendirmesiz) ==")
k0, n0 = R.komsuluk()
cak0, yak0, yeni0 = olc_evren(k0, BOYALAR)
print(f"  Voronoi cakisan {len(cak0)} | yakin-ama-degmeyen {len(yak0)} | kunye-penceresi ek {len(yeni0)}")
ort0, _, _, _ = R.ayni_anahtar()
hexc0, _ = R.ayni_hex()
print(f"  ayni-anahtar ortusen {len(ort0)} | ayni-hex {len(hexc0)}")
SU0 = sorted(((renkler._su_farki(v[1]), kid, v[1]) for kid, v in BOYALAR.items()
              if renkler._su_farki(v[1]) < renkler.SU_ESIK_DE))
print(f"  su yakin (renkler.py) {len(SU0)}")
TABAN = {"voronoi_cakisan": len(cak0), "yakin_ama_degmeyen": len(yak0), "kunye_penceresi_ek": len(yeni0),
         "ayni_anahtar_ortusen": len(ort0), "ayni_hex": len(hexc0), "su_yakin": len(SU0)}

# ================================================================ B. YONLENDIRILMIS (gercek cizim) EVRENI
BOY0 = {k: tuple(v) for k, v in BOYALAR.items()}          # calisma-zamani (acikma sonrasi) kopya
yonlendirilmis_yukle_kur(BOYALAR)
k1, n1 = R.komsuluk()
cak1, yak1, yeni1 = olc_evren(k1, BOYALAR)
print("== B. yonlendirilmis evren (motorun A' kurali: s.d -> harita) ==")
print(f"  Voronoi cakisan {len(cak1)} | yakin-ama-degmeyen {len(yak1)} | kunye-penceresi ek {len(yeni1)}")
TABAN_YONL = {"voronoi_cakisan": len(cak1), "yakin_ama_degmeyen": len(yak1), "kunye_penceresi_ek": len(yeni1)}

# ---- literal (dosyadaki) hex'ler
LIT = {}
_met = io.open(os.path.join(KOK, "arac", "renkler.py"), encoding="utf-8").read()
for m in re.finditer(r'^\s*"([a-z0-9][a-z0-9-]*)":\s*\("(?:[^"\\]|\\.)*",\s*"(#[0-9a-fA-F]{6})"', _met, re.M):
    LIT[m.group(1)] = m.group(2).lower()

# ---- noktalar (yonlendirilmemis ham) -> numpy
PT = []   # lat, lon, f, t, rawd
for y in RAW:
    for kat in ("s", "v"):
        for p in (y.get(kat) or []):
            d = p.get("d")
            if d and p.get("f") and p.get("t"):
                PT.append((y["lat"], y["lon"], num(p["f"]), num(p["t"]), d))
LAT = np.radians(np.array([p[0] for p in PT])); LON = np.radians(np.array([p[1] for p in PT]))
TF = np.array([p[2] for p in PT]); TT = np.array([p[3] for p in PT])
RAWD = [p[4] for p in PT]


def anahtar_dizisi(boy):
    return np.array([motor_anahtar(d, boy) or "" for d in RAWD], dtype=object)


# ---- kunye pencereleri / bolge (anahtar bazinda)
def pencere_ve_bolge(boy):
    pen, bol = {}, {}
    for d in D:
        a = motor_anahtar(d["id"], boy) or d["id"]
        if d.get("f") and d.get("t"):
            f, t = num(d["f"]), num(d["t"])
        elif d.get("f"):
            f, t = num(d["f"]), num("2000-12-31")
        else:
            continue
        e = pen.get(a)
        pen[a] = (min(f, e[0]), max(t, e[1])) if e else (f, t)
        bol.setdefault(a, d.get("bolge") or "")
    return pen, bol


def km_matris(i_idx, lat, lon):
    dl = LAT - lat[:, None]
    dn = LON - lon[:, None]
    a = np.sin(dl / 2) ** 2 + np.cos(lat)[:, None] * np.cos(LAT) * np.sin(dn / 2) ** 2
    return 6371.0 * 2 * np.arcsin(np.sqrt(a))


_KI_ONBELLEK = {}


def _keyidx(key_arr):
    kimlik = id(key_arr)
    if kimlik not in _KI_ONBELLEK:
        d = collections.defaultdict(list)
        for j, z in enumerate(key_arr):
            if z:
                d[z].append(j)
        _KI_ONBELLEK[kimlik] = {z: np.array(v) for z, v in d.items()}
    return _KI_ONBELLEK[kimlik]


GATE = {}     # X -> renk_olc kapisi kumesi (Voronoi U <600 km esz.); ENGEL ise 1500 km aynasi


def engel(X, boy, key_arr, pen, bol, kvor, kapsam=None):
    """X icin engel anahtarlari: 1500 km icinde eszamanli + Voronoi komsulari + (verisi olmayan,
    ayni bolge ve kunye penceresi ortusen). `kapsam`: X'in ayak izi icin ham kimlik kumesi."""
    ayak = np.array([(rd in kapsam) or (key_arr[i] == X) for i, rd in enumerate(RAWD)]) if kapsam \
        else (key_arr == X)
    out = set()
    GATE.pop(X, None)
    gate = set()
    idx = np.where(ayak)[0]
    if len(idx):
        # renk_olc.yakin_renk ile AYNI olcut: pencere = iki kimligin zarfinin (veri; kunye icin kunye penceresi)
        # ortusmesi; her iki taraftan da pencerede AKTIF noktalar arasi en kisa mesafe.
        KI = _keyidx(key_arr)
        km = km_matris(idx, LAT[idx], LON[idx])            # m x N
        ex = (TF[idx].min(), TT[idx].max())
        pos = {int(j): r for r, j in enumerate(idx)}
        fxk = pen.get(X)
        for z, zi in KI.items():
            if z == X:
                continue
            wins = []
            ez = (TF[zi].min(), TT[zi].max())
            F, T = max(ex[0], ez[0]), min(ex[1], ez[1])
            if F < T:
                wins.append((F, T))
            pz = pen.get(z)
            if fxk and pz:
                F2, T2 = max(fxk[0], pz[0]), min(fxk[1], pz[1])
                if F2 < T2:
                    wins.append((F2, T2))
            en = 1e9
            for F, T in wins:
                ra = np.where((TF[idx] < T) & (F < TT[idx]))[0]
                ca = zi[(TF[zi] < T) & (F < TT[zi])]
                if len(ra) and len(ca):
                    en = min(en, float(km[np.ix_(ra, ca)].min()))
            if en < ENGEL_KM:
                out.add(z)
            if en < R.AYNI_HEX_ESIK_KM:
                gate.add(z)
    vor = {z for z in kvor.get(X, ()) if z in boy and z != X}
    out |= vor
    gate |= vor
    # verisi olmayan komsu adaylari: ayni bolge + pencere ortusmesi
    fx = pen.get(X)
    have = set(k for k in key_arr if k)
    for z in boy:
        if z == X or z in out or z in have:
            continue
        fz = pen.get(z)
        if not fz or not fx:
            continue
        if fz[0] < fx[1] and fx[0] < fz[1] and bol.get(z) and bol.get(z) == bol.get(X):
            out.add(z); gate.add(z)     # ölçülemeyen komşu: en kötü hâl = kapı kümesinde
    if not len(idx):   # X'in verisi yok: ayni bolge + ortusme olan, verisi OLAN anahtarlar da engel (en kotu hal)
        for z in have:
            if z == X or z in out:
                continue
            fz = pen.get(z)
            if fz and fx and fz[0] < fx[1] and fx[0] < fz[1] and bol.get(z) and bol.get(z) == bol.get(X):
                out.add(z); gate.add(z)
    GATE[X] = gate
    return out


# ================================================================ C. ADAY ARALIGI
def aday_agi(adim=6):
    v = np.arange(0, 256, adim)
    rr, gg, bb = np.meshgrid(v, v, v, indexing="ij")
    raw = np.stack([rr.ravel(), gg.ravel(), bb.ravel()], -1).astype(float)
    vis = A * raw + (1 - A) * ALT_RGB
    L = lab_v(vis)
    alt = lab_v(ALT_RGB)
    d_alt = np.linalg.norm(L - alt, axis=1)
    ok = d_alt >= R.DE_ALTLIK + 1.0
    ok &= L[:, 0] >= renkler.ACIKLIK_TABANI_L + 0.5
    # su (renkler.py): ham hex <-> SU_RENGI
    su = lab_v(R.h2r(renkler.SU_RENGI))
    d_su = np.linalg.norm(lab_v(raw) - su, axis=1)
    ok &= d_su >= renkler.SU_ESIK_DE + 1.5
    # deniz (renk_olc): dal1 + dal2
    d_dn = np.linalg.norm(L - R.DENIZ_LAB, axis=1)
    ok &= d_dn >= R.DE_DENIZ + 1.0
    ok &= ~((np.abs(L[:, 0] - R.DENIZ_LAB[0]) < R.DL_DENIZ + 0.5) & (d_dn < R.DE_DENIZ_GENIS + 1.0))
    # kabartma (iki ton)
    for ad, z in R.KABARTMA_TON.items():
        zz = np.array(z, float)
        lv = lab_v(A * raw + (1 - A) * zz)
        ok &= np.linalg.norm(lv - lab_v(zz), axis=1) >= R.DE_ALTLIK + 0.5
    hexs = np.array(["#%02x%02x%02x" % tuple(int(x) for x in r) for r in raw])
    return hexs, L, ok


HEXS, LV, OKM = aday_agi()
print(f"aday agi: {len(HEXS)} ham | sabit kisitlari gecen {int(OKM.sum())}")
HABV = np.degrees(np.arctan2(LV[:, 2], LV[:, 1])) % 360
OSM_L = [np.array(v) for v in R.OSM.values()]

# ================================================================ D. HEDEF KUMESI
# ---- D1. boyasiz kunyeler (BOYALAR'da id/harita anahtari yok)
kunye_boyasiz = [d["id"] for d in D if motor_anahtar(d["id"], BOYALAR) is None]
# ---- D2. ayni-anahtar gercek ortusme -> bolunecek kayitlar
ort_gercek = []
for anahtar, a, b in ort0:
    ka, kb = motor_anahtar(a["id"], BOYALAR), motor_anahtar(b["id"], BOYALAR)
    if ka is not None and ka == kb:
        ort_gercek.append((anahtar, a["id"], b["id"]))
print(f"ayni-anahtar: renk_olc {len(ort0)} cift | motorun gercekte ayni kimlige dusurdugu {len(ort_gercek)}")
yanlis_alarm = [(an, a["id"], b["id"], motor_anahtar(a["id"], BOYALAR), motor_anahtar(b["id"], BOYALAR))
                for an, a, b in ort0 if (an, a["id"], b["id"]) not in set(ort_gercek)]

grp = collections.defaultdict(list)
for an, a, b in ort_gercek:
    grp[motor_anahtar(a, BOYALAR)].append((a, b))
bolunecek = {}   # id -> anahtar
for an, kenar in grp.items():
    dugum = collections.Counter()
    for a, b in kenar:
        dugum[a] += 1; dugum[b] += 1
    kalan = list(kenar)
    while kalan:
        # sahip (id==anahtar ya da BOYALAR'da kendi rengi olan) en son bolunur
        def puan(i):
            return (-(i == an), -dugum[i])
        say = collections.Counter()
        for a, b in kalan:
            say[a] += 1; say[b] += 1
        sec = sorted(say, key=lambda i: (i == an, -say[i], i))[0]
        bolunecek[sec] = an
        kalan = [(a, b) for a, b in kalan if sec not in (a, b)]
print(f"  bolunecek kayit: {len(bolunecek)} ({len(set(bolunecek.values()))} anahtardan)")

# ---- D3. cakisma cift grafigi (yonlendirilmis evren)
kenar = {}   # frozenset -> (d, tur)
for d, a, b in cak1:
    kenar[frozenset((a, b))] = (d, "voronoi")
for d, km_, a, b, F, T in yak1:
    kenar.setdefault(frozenset((a, b)), (d, f"yakin:{km_:.0f}km"))
for d, km_, a, b, F, T in yeni1:
    kenar.setdefault(frozenset((a, b)), (d, f"kunye-penceresi:{km_:.0f}km"))
SABIT = set(R.OSM)   # Osmanlı ikilisi: degismez
npt = collections.Counter(p[4] for p in PT)
npt_anahtar = collections.Counter(motor_anahtar(r, BOYALAR) for r in RAWD)
paylasim_uye = {u for hx, (ger, uye) in PAYLASIM.items() for u in uye}


def maliyet(i):
    return 1.0 + 0.02 * npt_anahtar.get(i, 0) + (40.0 if i in paylasim_uye else 0.0)


bagli = collections.defaultdict(set)
for fs in kenar:
    a, b = tuple(fs)
    bagli[a].add(b); bagli[b].add(a)
kapsa = set()
kalan_kenar = {fs for fs in kenar}
# once Osmanlı kenarları: karsi taraf zorunlu
for fs in list(kalan_kenar):
    a, b = tuple(fs)
    if a in SABIT or b in SABIT:
        kapsa.add(b if a in SABIT else a)
        kalan_kenar.discard(fs)
kalan_kenar = {fs for fs in kalan_kenar if not (set(fs) & kapsa)}
while kalan_kenar:
    der = collections.Counter()
    for fs in kalan_kenar:
        for i in fs:
            der[i] += 1
    sec = sorted(der, key=lambda i: (-der[i] / maliyet(i), i))[0]
    kapsa.add(sec)
    kalan_kenar = {fs for fs in kalan_kenar if sec not in fs}
print(f"cakisma grafigi: {len(kenar)} kenar -> {len(kapsa)} kimlik yeniden boyanacak (acgozlu en kucuk kapsama)")

# ---- D4. su yakin
su_hedef = {kid for _, kid, _ in SU0}
# ---- toplama
HEDEF_SEBEP = collections.defaultdict(list)
for i in kunye_boyasiz:
    HEDEF_SEBEP[i].append("boyasiz-kunye")
for i, an in bolunecek.items():
    HEDEF_SEBEP[i].append(f"ayni-anahtar-bolunme:{an}")
for i in kapsa:
    HEDEF_SEBEP[i].append("komsu-cakisma")
for i in su_hedef:
    HEDEF_SEBEP[i].append("su-yakin")

# ---- akraba (ardil/oncul) kaniti: YAPISAL = ortak `harita:` anahtari; METINSEL = ozet/ic_not'ta adla gecen
AKRABA_METIN = {
    # id: (akraba, kanit alani/alinti)
    "sam-devleti": ("suriye-lubnan-mandasi", "ozet: 'Fransiz mandasi alt devleti ... Suriye Devleti'ni olusturdu'; ad: 'Fransiz mandasi alt devleti'"),
    "halep-devleti": ("suriye-lubnan-mandasi", "ad: 'Fransiz mandasi alt devleti'; ozet: 1925'te Sam Devleti ile birlesti"),
    "alevi-devleti-lazkiye": ("suriye-lubnan-mandasi", "ad: 'Fransiz mandasi'; ozet: 1936'da Suriye'ye katildi"),
    "cebel-durzi-devleti": ("suriye-lubnan-mandasi", "ad: 'Fransiz mandasi'; ozet: Suriye'ye katildi"),
    "iskenderun-sancagi-ozel-idare": ("hatay-devleti", "ozet: 'Eylul 1938'de Hatay Devleti oldu' (ardil)"),
    "oeta-bati-fransiz": ("suriye-lubnan-mandasi", "ozet: 'Buyuk Lubnan Devleti ve Alevi yonetiminin kurulmasiyla son buldu'; ic_not: suriye-lubnan-mandasi"),
    "oeta-guney": ("filistin-mandasi", "ozet: 'Temmuz 1920'de sivil manda yonetimine devredildi' (ardil: filistin-mandasi)"),
    "ingiliz-mezopotamya-idaresi": ("irak-kralligi", "ozet: 'Irak Krallığı'na devredildi' (ardil)"),
    "misir-gazze-idaresi": ("filistin-mandasi", "ozet: 1948/1949 Filistin; metinde filistin-mandasi gecer"),
    "trinh-lordlari": ("le-hanedani", "ozet: 'Le hanedani (le-hanedani kunyesi) ... harita bu yuzden kuzeyi le-ha(nedani)...'"),
    "gojoseon": ("wiman-joseon", "ozet: 'Wi Man ... Wiman Joseon'a donustu' (ardil)"),
    "polonya-naiplik-kralligi": ("kongre-polonyasi", "ozet: 'Kongre Polonyasi topraklarinda ilan' (ayni toprak, ardil: polonya)"),
    "kaheti-hereti-kralligi": ("kaheti-kralligi", "ad ailesi: Kaheti (kaheti-kralligi 1492-1762, ayni toprak)"),
    "ispanyol-oran-1": ("ispanya", "ozet: 'Ispanya Oran'i ... aldi'"),
    "ispanyol-oran-2": ("ispanya", "ozet: 'Ispanya 1732'de Oran'i yeniden aldi'"),
    "ispanyol-halkulvad": ("ispanya", "ozet: 'V. Karl ... Ispanyol elinde'"),
    "ingiliz-tanca": ("ingiltere", "ozet: 'Portekiz'in Tanca'yi Ingiltere'ye devri'"),
    "cizre-emirligi": ("bohtan-emirligi", "ozet: Cizre merkezli ardil (bohtan-emirligi 1821-1847, Cizre merkezli)"),
    "bohtan-emirligi": ("cizre-emirligi", "ozet: 'Cizre merkezli Bohtan emirligi'"),
    "xi-liang-li-gao": ("hou-liang-lu-guang", "ozet: ikisi de 'Hexi devleti' (Liangzhou/Dunhuang), Liang adi ailesi"),
    "hou-liang-lu-guang": ("xi-liang-li-gao", "ozet: 'Hexi devleti' (Liang ailesi)"),
}


def akraba_anahtar(i):
    """(akraba_anahtar, kanit). Once YAPISAL (paylasilan harita anahtari), sonra METINSEL."""
    if i in bolunecek:
        return bolunecek[i], f"yapisal: devletler.js `harita:\"{bolunecek[i]}\"` ortak anahtar"
    a = AKRABA_METIN.get(i)
    if a and a[0] in BOYALAR:
        return a[0], "metinsel: " + a[1]
    return None, None


# ================================================================ E. COZUCU
SEC = {}        # id -> hex (yeni)
ATANDI_HEX = {v[1].lower() for v in BOYALAR.values()}


def renk_haritasi_yap():
    cur = {k: v[1] for k, v in BOYALAR.items()}
    cur.update(SEC)
    return cur


def hedef_sirasi(h):
    return sorted(h, key=lambda i: (-(len(h[i])), i))


key_arr0 = anahtar_dizisi(BOYALAR)
pen0, bol0 = pencere_ve_bolge(BOYALAR)
ENGEL = {}
HEDEF_KUME = hedef_sirasi(HEDEF_SEBEP)
print(f"hedef kimlik: {len(HEDEF_KUME)}  (boyasiz {len(kunye_boyasiz)} | bolunme {len(bolunecek)} | "
      f"cakisma-kapsam {len(kapsa)} | su {len(su_hedef)})")
for i in HEDEF_KUME:
    kap = {i} if i in bolunecek else None
    ENGEL[i] = engel(i, BOYALAR, key_arr0, pen0, bol0, k1, kapsam=kap)


def lab_of(hx):
    return vis_lab_hex(hx)


def sec_renk(i):
    """i icin aday sec. Kisit merdiveni (ilk saglayan alinir):
       (tum 1500 km engel >= 15  VE kapi kumesi >= 13) -> (tum >= 13.5 ve kapi >= 13) -> (kapi >= 13)
       -> (kapi >= 12.3) -> kapi icin en iyi. Kapi = renk_olc kapisi (Voronoi U <600 km esz. U olculemeyen)."""
    eski_hx = (BOYALAR.get(i) or (None, None))[1]
    cur = renk_haritasi_yap()
    el, gt = [], []
    for z in ENGEL[i]:
        if z in SEC_BEKLEYEN and z not in SEC:
            continue            # henuz atanmamis: eski rengi gidecek
        hx = cur.get(z)
        if hx:
            el.append(lab_of(hx)); gt.append(z in GATE.get(i, ()))
    for o in OSM_L:
        el.append(o); gt.append(True)
    ak, ak_kanit = akraba_anahtar(i)
    if i in bolunecek and ak in cur:       # ayni anahtarin sahibi mesafe/zaman ne olursa olsun ayri olmali
        el.append(lab_of(cur[ak])); gt.append(True)
    for j, an in bolunecek.items():        # ayni bolunme grubunun daha once secilen kardesleri
        if an == bolunecek.get(i) and j != i and j in SEC:
            el.append(lab_of(SEC[j])); gt.append(True)
    for j, an in bolunecek.items():        # i bir anahtarin SAHIBIYSE: bolunen cocuklarindan da ayri kalmali
        if an == i and j in SEC:
            el.append(lab_of(SEC[j])); gt.append(True)
    EL = np.array(el); GT = np.array(gt)
    used = ATANDI_HEX | set(SEC.values())
    if eski_hx:
        used = used - {eski_hx.lower()}
    cand = np.where(OKM)[0]
    cand = cand[[HEXS[c] not in used for c in cand]]
    DM = np.linalg.norm(LV[cand][:, None, :] - EL[None, :, :], axis=2)
    d_all = DM.min(1)
    d_gate = DM[:, GT].min(1) if GT.any() else np.full(len(cand), 99.0)
    if eski_hx:
        l_old = lab_of(eski_hx)
        d_old = np.linalg.norm(LV[cand] - l_old, axis=1)
    ak_lab = lab_of(cur[ak]) if ak and ak in cur else None
    merdiven = [(HEDEF, 13.0), (13.5, 13.0), (12.0, 13.0), (10.0, 13.0), (8.0, 13.0), (6.0, 13.0),
                (4.0, 13.0), (2.0, 13.0), (0.0, 13.0), (0.0, 12.3)]
    ok, esik = None, None
    for ta, tg in merdiven:
        m = (d_all >= ta) & (d_gate >= tg)
        if m.any():
            ok, esik = m, "all>=%s/kapi>=%s" % (ta, tg)
            break
    if ok is None:
        ok = d_gate >= d_gate.max() - 1e-9
        esik = "kapi-en-iyi %.2f" % d_gate.max()
    ci = cand[ok]; dm = d_all[ok]; dg = d_gate[ok]
    if ak_lab is not None:
        hk = hab(ak_lab)
        skor = np.array([hue_fark(HABV[c], hk) for c in ci]) + 0.02 * np.abs(LV[ci][:, 0] - ak_lab[0])
        if eski_hx:
            skor = skor + 0.05 * d_old[ok]
    elif eski_hx:
        skor = d_old[ok]                  # en kucuk degisiklik
    else:
        skor = np.array([R.uyum(R.h2r(HEXS[c])) for c in ci]) * 100 - np.minimum(dm, 25)
    j = int(np.argmin(skor))
    return HEXS[ci[j]], float(dm[j]), esik, ak, ak_kanit


SEC_BEKLEYEN = set(HEDEF_KUME)
sonuc_bilgi = {}
for i in HEDEF_KUME:
    hx, dm, esik, ak, kn = sec_renk(i)
    SEC[i] = hx
    sonuc_bilgi[i] = (dm, esik, ak, kn)
print(f"secildi: {len(SEC)}")

# ================================================================ F. ONARIM + DOGRULAMA
oncekiler = {k: v[1] for k, v in BOY0.items()}          # ONCE = calisma-zamani baslangic renkleri


def final_harita():
    f = {k: v[1] for k, v in BOY0.items()}
    f.update(SEC)
    return f


def min_de(i, cmap, kapi=False):
    l = vis_lab_hex(cmap[i]) if i in cmap else None
    best, bz = 1e9, None
    for z in ENGEL[i]:
        if kapi and z not in GATE.get(i, ()):
            continue
        if z in cmap and z != i:
            d = float(np.linalg.norm(l - vis_lab_hex(cmap[z])))
            if d < best:
                best, bz = d, z
    for ad, o in R.OSM.items():
        d = float(np.linalg.norm(l - np.array(o)))
        if d < best:
            best, bz = d, ad
    return best, bz


def sahip_cocuk_kisiti_icin(i):
    pass


# ---- (1) ENGEL-tabanli onarim: kapi kumesinde < 12.9 kalan hedefleri yeniden sec
SEC_BEKLEYEN.clear()
for tur_ in range(6):
    fh = final_harita()
    bad = [i for i in SEC if min_de(i, fh, True)[0] < 12.9]
    if not bad:
        break
    print(f"  onarim turu {tur_}: {len(bad)} hedef kapida <12.9 -> yeniden seciliyor")
    for i in bad:
        SEC.pop(i, None)
        hx, dm, esik, ak, kn = sec_renk(i)
        SEC[i] = hx
        sonuc_bilgi[i] = (dm, esik, ak, kn)


def dogrula_tum():
    for i, hx in SEC.items():
        ad = (BOY0.get(i) or [M.get(i, {}).get("ad", i)])[0]
        BOYALAR[i] = (ad, hx)
    yonlendirilmis_yukle_kur(BOYALAR)
    k2, _ = R.komsuluk()
    cak2, yak2, yeni2 = olc_evren(k2, BOYALAR)
    hex2, _ = R.ayni_hex()
    return k2, cak2, yak2, yeni2, hex2


# ---- (2) R-tabanli dogrulama + artik cift onarimi (en fazla 4 tur)
ZORLU = set()
for rnd in range(4):
    k2, cak2, yak2, yeni2, hex2 = dogrula_tum()
    artik = [(d, a, b, "voronoi") for d, a, b in cak2] + [(d, a, b, "yakin") for d, km, a, b, f, t in yak2] \
        + [(d, a, b, "kunye-penceresi") for d, km, a, b, f, t in yeni2] + [(0.0, a, b, "ayni-hex") for d, hx, a, b, f, t in hex2]
    print(f"== dogrulama turu {rnd}: artik cift {len(artik)} (voronoi {len(cak2)}, yakin {len(yak2)}, kunye-pencere {len(yeni2)}, hex {len(hex2)})")
    if not artik:
        break
    if rnd == 3:
        break
    for d, a, b, tur_ in artik:
        sec_ = [x for x in (a, b) if x not in R.OSM]
        if not sec_:
            continue
        # tercih: zaten hedef olan; sonra daha az noktali
        # tercih: zaten hedef olan degil, kapida zorlanmis (tekrar tekrar ayni kalmis) olmayan; sonra az noktali
        sec_.sort(key=lambda i: (i in ZORLU, i not in SEC, npt_anahtar.get(i, 0), i))
        x = sec_[0]
        if x not in HEDEF_SEBEP:
            HEDEF_SEBEP[x].append("artik-cakisma-2.tur")
        elif "artik-cakisma-2.tur" not in HEDEF_SEBEP[x] and x not in SEC:
            HEDEF_SEBEP[x].append("artik-cakisma-2.tur")
        if x not in ENGEL:
            kap = {x} if x in bolunecek else None
            ENGEL[x] = engel(x, BOYALAR, key_arr0, pen0, bol0, k1, kapsam=kap)
        eski_sec = SEC.pop(x, None)
        BOYALAR[x] = BOY0.get(x, BOYALAR.get(x))
        if x not in BOY0:
            BOYALAR.pop(x, None)
        hx, dm, esik, ak, kn = sec_renk(x)
        SEC[x] = hx
        sonuc_bilgi[x] = (dm, esik, ak, kn)
        if eski_sec is not None and hx == eski_sec:
            ZORLU.add(x)            # bu kimlik icin cozum yok: bir sonraki turda karsi taraf hedeflenir
        if x not in HEDEF_KUME:
            HEDEF_KUME.append(x)
        print(f"    artik {a} <-> {b} ({d:.2f}, {tur_}) -> {x}: {eski_sec} -> {hx}")

# ---- (3) son tum-olcum (BOYALAR bellekte guncel)
ort2, _, _, _ = R.ayni_anahtar()
ort2_gercek = [(an, a["id"], b["id"]) for an, a, b in ort2
               if motor_anahtar(a["id"], BOYALAR) is not None
               and motor_anahtar(a["id"], BOYALAR) == motor_anahtar(b["id"], BOYALAR)]
dal1, dal2, dbir = R.deniz_ihlal()
kab = R.kabartma_ihlal()
gorunmez = [a for a in BOYALAR if R.dE(R.gorunen(a), R.ALT) < R.DE_ALTLIK]
su2 = [(renkler._su_farki(v[1]), kid) for kid, v in BOYALAR.items() if renkler._su_farki(v[1]) < renkler.SU_ESIK_DE]
aciklik_ihlal = [kid for kid, v in BOYALAR.items() if renkler._bindirilmis_L(v[1], OPAKLIK["yabanci"]) < renkler.ACIKLIK_TABANI_L - 1e-9]
hex_say = collections.Counter(v[1].lower() for v in BOYALAR.values())
yeni_cakisan_hex = [(i, SEC[i]) for i in SEC if hex_say[SEC[i].lower()] > 1]

SONRA = {"voronoi_cakisan": len(cak2), "yakin_ama_degmeyen": len(yak2), "kunye_penceresi_ek": len(yeni2),
         "ayni_anahtar_ortusen_renk_olc": len(ort2), "ayni_anahtar_ortusen_motor_gercek": len(ort2_gercek),
         "ayni_hex": len(hex2), "su_yakin": len(su2), "altliktan_ayrismayan": len(gorunmez),
         "deniz_dal1": len(dal1), "deniz_birlesim": len(dbir),
         "kabartma_ihlal": {t: len(v) for t, v in kab.items()},
         "aciklik_tabani_ihlal": len(aciklik_ihlal), "yeni_rengin_hex_cakismasi": len(yeni_cakisan_hex)}
SONRA_AYRINTI = {"cak": [(round(d, 2), a, b) for d, a, b in cak2],
                 "yak": [(round(d, 2), round(km), a, b) for d, km, a, b, f, t in yak2],
                 "yeni": [(round(d, 2), round(km), a, b) for d, km, a, b, f, t in yeni2],
                 "hex": [(a, b, hx) for d, hx, a, b, f, t in hex2],
                 "ort_gercek": ort2_gercek, "su": [(round(d, 2), k) for d, k in su2]}
kb_yeni = {t: [x for x in v if x[1] in SEC] for t, v in kab.items()}
dn_yeni = [a for a in dbir if a in SEC]
print("== G. dogrulama (oneriler bellekte uygulanmis, yonlendirme yeniden kuruldu) ==")
print(json.dumps(SONRA, ensure_ascii=False))
print("  yeni renklerden denize karisan:", len(dn_yeni), "| kabartma ihlali olan yeni:",
      {t: len(v) for t, v in kb_yeni.items()})

# ---- (4) cikti
final = final_harita()
cikti = collections.OrderedDict()
for i in HEDEF_KUME:
    ad = (BOY0.get(i) or [M.get(i, {}).get("ad", i)])[0]
    eski = LIT.get(i) if i in BOY0 else None
    yeni_hx = SEC[i]
    onc, onz = (min_de(i, oncekiler)[0], min_de(i, oncekiler)[1]) if i in BOY0 else (None, None)
    son, sonz = min_de(i, final)
    de00 = None
    if sonz and sonz in final:
        de00 = round(de2000(vis_lab_hex(yeni_hx), vis_lab_hex(final[sonz])), 1)
    ak, kn = sonuc_bilgi[i][2], sonuc_bilgi[i][3]
    komsu_eski = sorted(
        ((float(np.linalg.norm(vis_lab_hex(oncekiler[i]) - vis_lab_hex(oncekiler[z]))), z)
         for z in ENGEL[i] if i in oncekiler and z in oncekiler))[:4] if i in oncekiler else []
    cikti[i] = {
        "ad": ad,
        "tur": ("YENI-ANAHTAR (kunye boyasiz)" if "boyasiz-kunye" in HEDEF_SEBEP[i]
                else "YENI-ANAHTAR (ayni-anahtar bolunmesi)" if i in bolunecek
                else "DEGISIM"),
        "eski": eski,
        "eski_calisma_zamani": oncekiler.get(i) if i in oncekiler and oncekiler[i].lower() != (eski or "").lower() else None,
        "yeni": yeni_hx,
        "sebep": HEDEF_SEBEP[i],
        "gerekce": "; ".join(HEDEF_SEBEP[i]) + (f" | akraba: {ak} ({kn})" if ak else ""),
        "dE_min_once": None if onc is None else round(onc, 2),
        "dE_min_sonra": round(son, 2),
        "dE_min_once_kapi": (round(min_de(i, oncekiler, True)[0], 2) if i in BOY0 else None),
        "dE_min_sonra_kapi": round(min_de(i, final, True)[0], 2),
        "dE_min_aciklama": "once/sonra: Osmanli ikilisi + 1500 km esz. + Voronoi + olculemeyen-bolge engel evreni; "
                           "ONCE'de tum kimlikler eski, SONRA'da onerilen renkte. *_kapi: yalniz renk_olc kapisi evreni (Voronoi U <600 km esz.)",
        "komsu": (f"{sonz} (sonra) | " + ", ".join(f"{z} {d:.1f}" for d, z in komsu_eski) + " (once)") if komsu_eski
                 else f"{sonz} (sonra)",
        "dE2000_en_yakin_sonra": de00,
        "engel_sayisi": len(ENGEL[i]) + 2,
        "akraba": ak,
        "akraba_kanit": kn,
        "secim_merdiveni": sonuc_bilgi[i][1],
    }

json.dump({"taban_ham": TABAN, "taban_yonlendirilmis": TABAN_YONL, "sonra": SONRA, "sonra_ayrinti": SONRA_AYRINTI,
           "yanlis_alarm_ayni_anahtar": yanlis_alarm, "bolunecek": bolunecek,
           "kabartma_yeni_ihlal": {t: [(round(d, 1), a) for d, a in v] for t, v in kb_yeni.items()},
           "deniz_yeni": dn_yeni, "su_taban": [(round(d, 2), k, h) for d, k, h in SU0],
           "kapsa": sorted(kapsa), "cakisma_kenar_sayisi": len(kenar),
           "esik_kullanilan": {i: sonuc_bilgi[i][1] for i in SEC}},
          io.open(os.path.join(BOLUM, "renk_oneri_ham.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
json.dump(cikti, io.open(os.path.join(BOLUM, "renk_oneri.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("yazildi: renk_oneri.json", len(cikti), "kayit")
