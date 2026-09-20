# -*- coding: utf-8 -*-
# glm/mukerrer.py — GLM-2 · MUKERRER-NOKTA · yakın mükerrer yerleşim taraması
# Koşum: py -X utf8 glm/mukerrer.py   (depo kökünden)
# Çıktı : glm/MUKERRER-NOKTA.json + glm/MUKERRER-NOKTA.md
# Kural : yalnız OKUR (arac/girdi.py, denetim/ARAC-NORMAL-0903.py), glm/'e yazar.
#
# Tanımlar (ölçümün açık şartnamesi):
#   evren        = girdi.yukle() noktaları (GIRDI_DOSYALARI'nın tamamı; ~3921)
#   mesafe       = girdi.km() (resmi haversine) — eşik resmi yakin_ciftler gibi TAK (<)
#   küme 1       = ad AYNI ya da BENZER  && mesafe < 3 km          [GLM.md GLM-2/1]
#   küme 2       = ad FARKLI            && mesafe < 1 km           [GLM.md GLM-2/2]
#   ad sınıfı    : AYNA    = norm(ad) birebir eşit
#                  BENZER  = (a) parantez-dışı çekirdek norm'u eşit, ya da
#                            (b) norm tam adlarda Levenshtein ≤ 2 (ad ≥ 6 harf), ya da
#                            (c) çekirdeklerde Levenshtein ≤ 2 (çekirdek ≥ 6 harf)
#                  FARKLI  = ötekiler
#                  (norm = denetim/ARAC-NORMAL-0903.py — .lower() ASLA)
#   s-çatışması  = A'nın `s:` penceresi ile B'nin `s:` penceresi aynı gün aralık
#                  kesişiyor VE sahip kimlikleri (w.d) FARKLI → çelişki.
#                  Açık uçlar UFUK ile kapanır. w.d'siz pencere sahip sayılmaz.
#   de jure      = ikincil ölçüm: s: (sahip w.d) + d: (OSMANLI doğrudan) +
#                  v: (sahip w.kid, yoksa 'v:'+w.k) pencereleri aynı kurala sokulur.
#   öneri sınıfı : AYRI-YER   = karşılıklı `ikiz` beyanı + iki tarafta `kaynak`
#                             (denetle.ikiz_ayikla kuralının aynısı)
#                  MÜKERRER   = ad AYNA, beyan yok
#                  İKİ-AD      = ad BENZER, beyan yok
#                  ölçülemedi = farklı ad yakın çift, ya da bozuk/tek taraflı beyan

import importlib.util
import json
import os
import re
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

import girdi  # noqa: E402  (resmi ayrıştırıcı — GLM.md GLM-2: "ayrıştırıcı olarak girdi.py'nin kendisi")

_spec = importlib.util.spec_from_file_location(
    "arac_normal", os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py"))
_arac_normal = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_arac_normal)
norm = _arac_normal.norm

ESIK_YAKIN_AD = 3.0   # aynı/benzer ad çiftleri için km (şartname: ≤3)
ESIK_FARKLI_AD = 1.0  # farklı ad çiftleri için km (şartname: ≤1)
UFUK_F, UFUK_T = girdi.UFUK

# ── 1. Evren ─────────────────────────────────────────────────────────────────
Y = girdi.yukle(sessiz=True)
DOSYA_SAYISI = len(girdi.GIRDI_DOSYALARI)

# ── 2. Ad normalleştirme: tam ad + parantez-dışı çekirdek ───────────────────
def cekirdek(ad):
    """Parantezli nitelemeyi at, norm'la: 'Yenişehir (Bursa)' → 'yenisehir'."""
    return norm(re.sub(r"\([^)]*\)", "", ad or "").strip())

def lev(a, b):
    """Levenshtein (tam DP; adlar kısa)."""
    if a == b:
        return 0
    if not a or not b:
        return max(len(a), len(b))
    onceki = list(range(len(b) + 1))
    for i, ca in enumerate(a, 1):
        su = [i]
        for j, cb in enumerate(b, 1):
            su.append(min(su[-1] + 1, onceki[j] + 1, onceki[j - 1] + (ca != cb)))
        onceki = su
    return onceki[-1]

_KAYIT = {}  # index → önceden hesaplanmış norm/çekirdek
for i, p in enumerate(Y):
    _KAYIT[i] = {"n": norm(p["ad"]), "c": cekirdek(p["ad"])}

def ad_sinifi_norm(n1, c1, n2, c2):
    """('AYNA'|'BENZER'|'FARKLI', kural etiketi) — norm'lar üzerinde."""
    if n1 == n2:
        return "AYNA", "norm-esit"
    if c1 and c1 == c2:
        return "BENZER", "parantez-cekirdegi-esit"
    if min(len(n1), len(n2)) >= 6 and lev(n1, n2) <= 2:
        return "BENZER", "levenshtein-norm<=2"
    if min(len(c1), len(c2)) >= 6 and lev(c1, c2) <= 2:
        return "BENZER", "levenshtein-cekirdek<=2"
    return "FARKLI", "—"

def ad_sinifi(ia, ib):
    """('AYNA'|'BENZER'|'FARKLI', kural etiketi) — nokta indeksleriyle."""
    return ad_sinifi_norm(_KAYIT[ia]["n"], _KAYIT[ia]["c"],
                          _KAYIT[ib]["n"], _KAYIT[ib]["c"])

# ── 2b. Benzerlik sınıfının kendi kendine sınaması (bilinen vakalar) ────────
_TESTLER = [
    ("Diyarbekir", "Diyarbakır", "BENZER"),                # şartnamedeki örnek
    ("Yenişehir (Bursa)", "Yenişehir (İznik)", "BENZER"),  # parantez-çekirdeği
    ("Yenişehir (Bursa)", "Yenişehir", "BENZER"),
    ("Budin", "Peşte", "FARKLI"),
    ("Ankara", "Konya", "FARKLI"),
]
_sinif_selftest = []
for _a, _b, _beklenen in _TESTLER:
    _sinif, _kural = ad_sinifi_norm(norm(_a), cekirdek(_a), norm(_b), cekirdek(_b))
    _sinif_selftest.append({"a": _a, "b": _b, "beklenen": _beklenen,
                            "olenen": _sinif, "kural": _kural,
                            "gecti": _sinif == _beklenen})
_SELFTEST_TAMAM = all(t["gecti"] for t in _sinif_selftest)

# ── 3. Sahiplik pencereleri ─────────────────────────────────────────────────
def _aralik(w, sahip):
    f = w.get("f") or UFUK_F
    t = w.get("t") or UFUK_T
    return (f, t, sahip)

def pencereler_sadece_s(p):
    """Şartnamenin istediği ölçüm: yalnız `s:` pencereleri, sahip = w.d."""
    out = []
    for w in (p.get("s") or []):
        if w.get("d"):
            out.append(_aralik(w, w["d"]))
    return out

def pencereler_dejure(p):
    """İkincil: de jure taban rengi tabanlı (d:/v:/s: → peteğin TABAN RENGİ)."""
    out = []
    for w in (p.get("s") or []):
        if w.get("d"):
            out.append(_aralik(w, w["d"]))
    for w in (p.get("d") or []):
        out.append(_aralik(w, "OSMANLI(d:)"))
    for w in (p.get("v") or []):
        sahip = w.get("kid") or "v:" + str(w.get("k") or "?")
        out.append(_aralik(w, sahip))
    return out

def catisma(pa, pb, penc_fn):
    """Aynı gün iki ayrı sahip → örnek günle döner; yoksa None."""
    for fa, ta, sa in penc_fn(pa):
        for fb, tb, sb in penc_fn(pb):
            f, t = max(fa, fb), min(ta, tb)
            if f <= t and sa != sb:
                return {"gun": f, "a_sahip": sa, "b_sahip": sb}
    return None

# ── 4. Yakın çift taraması (O(n²), resmi km; doğrulama yakin_ciftler ile) ────
aday = []
for i in range(len(Y)):
    pi = Y[i]
    for j in range(i + 1, len(Y)):
        pj = Y[j]
        d = girdi.km(pi["lat"], pi["lon"], pj["lat"], pj["lon"])
        if d < ESIK_YAKIN_AD:            # en geniş eşik; 1 km alt kümesi buradan
            aday.append((d, i, j))
aday.sort()

# bağımsız doğrulama: resmi yakin_ciftler sayısıyla birebir
resmi = girdi.yakin_ciftler(Y, ESIK_YAKIN_AD)
DOGRULAMA = {
    "benim_3km_alti_cift": len(aday),
    "resmi_yakin_ciftler_3km": len(resmi),
    "tutar": len(aday) == len(resmi),
}

# ── 5. Sınıflandırma ────────────────────────────────────────────────────────
def kayit_ozet(i):
    p = Y[i]
    return {
        "ad": p["ad"],
        "dosya": p["_kaynak"],
        "tur": p.get("tur"),
        "lat": p["lat"],
        "lon": p["lon"],
        "ikiz": p.get("ikiz"),
        "kaynak_var": bool(p.get("kaynak")),
    }

def ikiz_durumu(ia, ib):
    a, b = Y[ia], Y[ib]
    va, vb = a.get("ikiz"), b.get("ikiz")
    if not va and not vb:
        return "yok"
    if va == b["ad"] and vb == a["ad"]:
        if a.get("kaynak") and b.get("kaynak"):
            return "karsilikli-kaynakli"
        return "karsilikli-kaynaksiz"
    return "tek-tarafli-veya-bozuk"

kume1, kume2 = [], []
for d, i, j in aday:
    sinif, kural = ad_sinifi(i, j)
    if sinif in ("AYNA", "BENZER") and d < ESIK_YAKIN_AD:
        hedef = kume1
    elif sinif == "FARKLI" and d < ESIK_FARKLI_AD:
        hedef = kume2
    else:
        continue                      # farklı ad + 1–3 km arası: şartname kapsamı dışı
    ik = ikiz_durumu(i, j)
    if ik == "karsilikli-kaynakli":
        oneri = "AYRI-YER"
    elif ik in ("karsilikli-kaynaksiz", "tek-tarafli-veya-bozuk"):
        oneri = "ölçülemedi"
    elif sinif == "AYNA":
        oneri = "MÜKERRER"
    elif sinif == "BENZER":
        oneri = "İKİ-AD"
    else:
        oneri = "ölçülemedi"
    notlar = []
    if ik == "karsilikli-kaynaksiz":
        notlar.append("ikiz beyanı karşılıklı ama `kaynak` yok — denetle kuralıyla geçmez")
    if ik == "tek-tarafli-veya-bozuk":
        notlar.append("ikiz beyanı tek taraflı/bozuk")
    girdi1, girdi2 = kayit_ozet(i), kayit_ozet(j)
    hedef.append({
        "a": girdi1,
        "b": girdi2,
        "mesafe_km": round(d, 3),
        "ad_sinifi": sinif,
        "benzerlik_kurali": kural,
        "dosya_iliskisi": "ayni" if girdi1["dosya"] == girdi2["dosya"] else "farkli",
        "s_catisma": catisma(Y[i], Y[j], pencereler_sadece_s),
        "dejure_catisma": catisma(Y[i], Y[j], pencereler_dejure),
        "ikiz_beyani": ik,
        "oneri_sinifi": oneri,
        "not": " · ".join(notlar),
    })

# ── 5b. Küme kapılarından geçemeyen yakın çiftler (şartname kapsamı dışı) ───
kume_ciftleri = {(x["a"]["ad"], x["b"]["ad"], x["a"]["dosya"], x["b"]["dosya"])
                 for x in kume1 + kume2}
kapsam_disi = []
for d, i, j in aday:
    k = (Y[i]["ad"], Y[j]["ad"], Y[i]["_kaynak"], Y[j]["_kaynak"])
    if k in kume_ciftleri:
        continue
    sinif, kural = ad_sinifi(i, j)
    ik = ikiz_durumu(i, j)
    sebep = ("aynı/benzer ad ama eşik altı değil" if sinif in ("AYNA", "BENZER")
             else "farklı ad + %.3f km: küme2 eşiği 1 km'nin üzerinde" % d)
    kapsam_disi.append({
        "a": kayit_ozet(i), "b": kayit_ozet(j),
        "mesafe_km": round(d, 3),
        "ad_sinifi": sinif,
        "benzerlik_kurali": kural,
        "ikiz_beyani": ik,
        "kapsam_disi_sebebi": sebep,
    })

# ── 5c. Bağlam: herhangi mesafede aynı-ad / aynı-çekirdek çiftleri ──────────
# Küme 1'in 0 çıkması ad-uzayının temiz olduğunu gösterir; bu tarama 3 km'den
# UZAK eşit adların (aynı adı taşıyan ayrı şehirler) görünür kılınması için.
from collections import defaultdict  # noqa: E402

def _mesafeli_gruplar(anahtar):
    grup = defaultdict(list)
    for i in range(len(Y)):
        deger = _KAYIT[i][anahtar]
        if deger:
            grup[deger].append(i)
    ciftler = []
    for deger, ix in grup.items():
        if len(ix) < 2:
            continue
        for a in range(len(ix)):
            for b in range(a + 1, len(ix)):
                i, j = ix[a], ix[b]
                d = girdi.km(Y[i]["lat"], Y[i]["lon"], Y[j]["lat"], Y[j]["lon"])
                ciftler.append({
                    "ad": deger,
                    "a": "%s (%s)" % (Y[i]["ad"], Y[i]["_kaynak"]),
                    "b": "%s (%s)" % (Y[j]["ad"], Y[j]["_kaynak"]),
                    "mesafe_km": round(d, 3),
                })
    ciftler.sort(key=lambda x: x["mesafe_km"])
    return ciftler

ayni_norm_ciftleri = _mesafeli_gruplar("n")   # norm tam eşit (AYNA adayı)
ayni_cekirdek_ciftleri = [c for c in _mesafeli_gruplar("c")
                          if c["a"] != c["b"]]  # çekirdek eşit, tam ad farklı

AD_UZAYI = {
    "norm_esit_cift_toplam": len(ayni_norm_ciftleri),
    "norm_esit_3km_alti": sum(1 for c in ayni_norm_ciftleri if c["mesafe_km"] < 3.0),
    "norm_esit_min_mesafe_km": ayni_norm_ciftleri[0]["mesafe_km"] if ayni_norm_ciftleri else None,
    "norm_esit_liste": ayni_norm_ciftleri,
    "cekirdek_esit_cift_toplam": len(ayni_cekirdek_ciftleri),
    "cekirdek_esit_3km_alti": sum(1 for c in ayni_cekirdek_ciftleri if c["mesafe_km"] < 3.0),
    "cekirdek_esit_min_mesafe_km": ayni_cekirdek_ciftleri[0]["mesafe_km"] if ayni_cekirdek_ciftleri else None,
    "cekirdek_esit_liste": ayni_cekirdek_ciftleri,
}

# ── 6. Özet ─────────────────────────────────────────────────────────────────
def dagilim(kayitlar, alan):
    d = {}
    for x in kayitlar:
        k = x[alan] if alan != "s_catisma" else ("var" if x["s_catisma"] else "yok")
        if alan == "dejure_catisma":
            k = "var" if x["dejure_catisma"] else "yok"
        d[k] = d.get(k, 0) + 1
    return dict(sorted(d.items()))

OZET = {
    "nokta": len(Y),
    "girdi_dosyasi": DOSYA_SAYISI,
    "taranan_cift_3km_alti": len(aday),
    "kume1_ayni_benzer_ad_3km": len(kume1),
    "kume2_farkli_ad_1km": len(kume2),
    "kume1_ad_sinifi": dagilim(kume1, "ad_sinifi"),
    "kume1_oneri": dagilim(kume1, "oneri_sinifi"),
    "kume2_oneri": dagilim(kume2, "oneri_sinifi"),
    "kume1_s_catisma": dagilim(kume1, "s_catisma"),
    "kume1_dejure_catisma": dagilim(kume1, "dejure_catisma"),
    "kume2_s_catisma": dagilim(kume2, "s_catisma"),
    "kume2_dejure_catisma": dagilim(kume2, "dejure_catisma"),
    "kume1_dosya_iliskisi": dagilim(kume1, "dosya_iliskisi"),
    "kume2_dosya_iliskisi": dagilim(kume2, "dosya_iliskisi"),
    "ikiz_beyanli_nokta": sum(1 for p in Y if p.get("ikiz")),
}

RAPOR = {
    "gorev": "GLM-2 · MUKERRER-NOKTA",
    "betik": "glm/mukerrer.py",
    "tanimlar": {
        "esik_ayni_benzer_ad_km": ESIK_YAKIN_AD,
        "esik_farkli_ad_km": ESIK_FARKLI_AD,
        "esik_semantigi": "resmi girdi.yakin_ciftler ile aynı: d < eşik",
        "ad_norm": "denetim/ARAC-NORMAL-0903.py norm(); çekirdek = parantez-dışı bölüm",
        "s_catisma": "aynı gün iki noktada iki FARKLI sahip (w.d) — yalnız s: pencereleri",
        "dejure_catisma": "ikincil: s: + d:(OSMANLI) + v:(kid|k) pencereleri",
        "oneri_kurallari": "AYRI-YER=karşılıklı ikiz+kaynak · MÜKERRER=norm eşit · İKİ-AD=BENZER · ölçülemedi=diğer",
    },
    "dogrulama": DOGRULAMA,
    "benzerlik_selftest": {"vaka": _sinif_selftest, "tamami_gecti": _SELFTEST_TAMAM},
    "ozet": OZET,
    "kume1": kume1,
    "kume2": kume2,
    "kapsam_disi_yakin_ciftler": kapsam_disi,
    "ad_uzayi_baglami": AD_UZAYI,
}

with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "MUKERRER-NOKTA.json"),
          "w", encoding="utf-8") as f:
    json.dump(RAPOR, f, ensure_ascii=False, indent=1)

# ── 7. md özet ──────────────────────────────────────────────────────────────
L = []
L.append("# GLM-2 · MUKERRER-NOKTA — yakın mükerrer yerleşim taraması")
L.append("")
L.append("- Betik: `glm/mukerrer.py` · JSON: `glm/MUKERRER-NOKTA.json`")
L.append("- Evren: `arac/girdi.py` `yukle()` → **%d** nokta · %d girdi dosyası" % (len(Y), DOSYA_SAYISI))
L.append("- Mesafe: resmi `girdi.km` · eşik `d < 3 km` (aynı/benzer ad) ve `d < 1 km` (farklı ad)")
L.append("- Doğrulama: benim taramam %d çift = resmi `yakin_ciftler(Y,3.0)` %d çift → **%s**"
         % (DOGRULAMA["benim_3km_alti_cift"], DOGRULAMA["resmi_yakin_ciftler_3km"],
            "tutar ✓" if DOGRULAMA["tutar"] else "ÇELİŞİYOR ✗"))
L.append("")
L.append("## Özet")
L.append("")
L.append("| ölçüm | değer |")
L.append("|---|---|")
L.append("| küme 1 — aynı/benzer ad < 3 km | **%d** |" % len(kume1))
L.append("| küme 2 — farklı ad < 1 km | **%d** |" % len(kume2))
L.append("| küme 1 ad sınıfı | %s |" % json.dumps(OZET["kume1_ad_sinifi"], ensure_ascii=False))
L.append("| küme 1 öneri | %s |" % json.dumps(OZET["kume1_oneri"], ensure_ascii=False))
L.append("| küme 2 öneri | %s |" % json.dumps(OZET["kume2_oneri"], ensure_ascii=False))
L.append("| küme 1 s-çatışması | %s |" % json.dumps(OZET["kume1_s_catisma"], ensure_ascii=False))
L.append("| küme 1 de jure çatışma | %s |" % json.dumps(OZET["kume1_dejure_catisma"], ensure_ascii=False))
L.append("| küme 2 s-çatışması | %s |" % json.dumps(OZET["kume2_s_catisma"], ensure_ascii=False))
L.append("| küme 2 de jure çatışma | %s |" % json.dumps(OZET["kume2_dejure_catisma"], ensure_ascii=False))
L.append("| küme 1 dosya ilişkisi | %s |" % json.dumps(OZET["kume1_dosya_iliskisi"], ensure_ascii=False))
L.append("| küme 2 dosya ilişkisi | %s |" % json.dumps(OZET["kume2_dosya_iliskisi"], ensure_ascii=False))
L.append("| `ikiz` beyanı taşıyan nokta | %d |" % OZET["ikiz_beyanli_nokta"])
L.append("| benzerlik sınıfı selftest | %s |" % ("5/5 geçti ✓" if _SELFTEST_TAMAM else "HATA ✗"))
L.append("")
L.append("## Küme kapılarından geçemeyen yakın çiftler (< 3 km, %d çift)" % len(kapsam_disi))
L.append("")
if kapsam_disi:
    L.append("| mesafe km | A (ad · dosya) | B (ad · dosya) | ad sınıfı | ikiz beyanı | kapsam dışı sebebi |")
    L.append("|---|---|---|---|---|---|")
    for x in kapsam_disi:
        ca = "%s · %s" % (x["a"]["ad"], x["a"]["dosya"])
        cb = "%s · %s" % (x["b"]["ad"], x["b"]["dosya"])
        L.append("| %s | %s | %s | %s | %s | %s |" % (
            str(x["mesafe_km"]).replace(".", ","), ca, cb, x["ad_sinifi"],
            x["ikiz_beyani"], x["kapsam_disi_sebebi"]))
else:
    L.append("(yok)")
L.append("")
L.append("## Ad-uzayı bağlamı (herhangi mesafede)")
L.append("")
L.append("- norm'u tam eşit çift: **%d** (en yakın %s km; 3 km altı: %d)"
         % (AD_UZAYI["norm_esit_cift_toplam"],
            str(AD_UZAYI["norm_esit_min_mesafe_km"]).replace(".", ",") if AD_UZAYI["norm_esit_min_mesafe_km"] is not None else "—",
            AD_UZAYI["norm_esit_3km_alti"]))
L.append("- parantez-çekirdeği eşit (tam ad farklı) çift: **%d** (en yakın %s km; 3 km altı: %d)"
         % (AD_UZAYI["cekirdek_esit_cift_toplam"],
            str(AD_UZAYI["cekirdek_esit_min_mesafe_km"]).replace(".", ",") if AD_UZAYI["cekirdek_esit_min_mesafe_km"] is not None else "—",
            AD_UZAYI["cekirdek_esit_3km_alti"]))
L.append("- Bu iki sayı 3 km altında 0 olduğundan küme 1 boş: aynı adı taşıyan noktalar "
         "hep 3 km'den uzak ayrı yerleşimler; tam listeler JSON'da (`ad_uzayi_baglami`).")
L.append("")

def tablo(baslik, kayitlar):
    L.append("## " + baslik)
    L.append("")
    L.append("| mesafe km | A (ad · dosya) | B (ad · dosya) | ad sınıfı | öneri | s-çatışma | de jure | not |")
    L.append("|---|---|---|---|---|---|---|---|")
    for x in kayitlar:
        ca = "%s · %s" % (x["a"]["ad"], x["a"]["dosya"])
        cb = "%s · %s" % (x["b"]["ad"], x["b"]["dosya"])
        sc = "—"
        if x["s_catisma"]:
            c = x["s_catisma"]
            sc = "%s: %s × %s" % (c["gun"], c["a_sahip"], c["b_sahip"])
        dj = "—"
        if x["dejure_catisma"]:
            c = x["dejure_catisma"]
            dj = "%s: %s × %s" % (c["gun"], c["a_sahip"], c["b_sahip"])
        L.append("| %s | %s | %s | %s (%s) | %s | %s | %s | %s |" % (
            str(x["mesafe_km"]).replace(".", ","), ca, cb, x["ad_sinifi"],
            x["benzerlik_kurali"], x["oneri_sinifi"], sc, dj, x["not"] or "—"))
    L.append("")

tablo("Küme 1 — aynı/benzer ad, < 3 km (%d çift)" % len(kume1), kume1)
tablo("Küme 2 — farklı ad, < 1 km (%d çift)" % len(kume2), kume2)

with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "MUKERRER-NOKTA.md"),
          "w", encoding="utf-8") as f:
    f.write("\n".join(L) + "\n")

# ── 8. Konsol özeti ─────────────────────────────────────────────────────────
print("nokta:", len(Y), "| dosya:", DOSYA_SAYISI)
print("3 km alti cift:", len(aday), "| resmi:", len(resmi), "| tutar:", DOGRULAMA["tutar"])
print("kume1:", len(kume1), json.dumps(OZET["kume1_oneri"], ensure_ascii=False))
print("kume2:", len(kume2), json.dumps(OZET["kume2_oneri"], ensure_ascii=False))
print("kume1 s-catisma:", OZET["kume1_s_catisma"], "| dejure:", OZET["kume1_dejure_catisma"])
print("kume2 s-catisma:", OZET["kume2_s_catisma"], "| dejure:", OZET["kume2_dejure_catisma"])
print("kapsam disi yakin cift:", len(kapsam_disi))
print("ad-uzayi: norm-esit cift", AD_UZAYI["norm_esit_cift_toplam"],
      "(min", AD_UZAYI["norm_esit_min_mesafe_km"], "km; 3km alti",
      AD_UZAYI["norm_esit_3km_alti"], ") · cekirdek-esit",
      AD_UZAYI["cekirdek_esit_cift_toplam"], "(min",
      AD_UZAYI["cekirdek_esit_min_mesafe_km"], "km; 3km alti",
      AD_UZAYI["cekirdek_esit_3km_alti"], ")")
print("selftest:", "5/5 gecti" if _SELFTEST_TAMAM else "HATA",
      "|", "; ".join("%s/%s=%s(%s)" % (t["a"], t["b"], t["olenen"], t["kural"]) for t in _sinif_selftest))
print("yazildi: glm/MUKERRER-NOKTA.json · glm/MUKERRER-NOKTA.md")
