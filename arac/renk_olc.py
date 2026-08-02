# -*- coding: utf-8 -*-
"""
RENK ÖLÇÜM ARACI — "koştur ve doğrula", elle taşınmış sayı değil.

⚠️ NEDEN VAR (1 Ağustos 2026):
   `renkler.py`de ΔE hesaplayan **hiçbir fonksiyon yoktu** (ölçüldü: 0).
   Dosyadaki ΔE sayıları Oturum 16'nın tek seferlik bir koşusundan ELLE
   taşınmıştı ve üstelik **%30 opaklıkla** ölçülmüştü — gerçek değer 0,44.
   Sonuç: yeni bir renk önerilince doğrulanamıyordu, çünkü ölçecek araç
   yoktu. 149 yeni kimlik beklerken kuyruğun darboğazı buydu; oturum
   yavaşlığı değil.
   📌 Ve bayat blok bir sonraki ölçeni yanıltıyordu: sayılar orada durduğu
      için "ölçülmüş" görünüyordu.

   🔴 TEŞHİS VERİ KİMLİK'İNDİ, ölçüm VERİ KİMLİK 2'nin.
      VERİ KİMLİK aynı gün koordinatöre şunu yazmıştı: *"(c) hacim değil,
      gizli bir dördüncü şey — renk seçimi hızlı, asıl sürtünme her kalemde
      `renkler.py`'ye kendim yazamayıp uygulamayı bekleyen bir round-trip;
      ikinci bir kimlik oturumu bunu çözmez."* **Haklıydı ve dinlenmedi:**
      ikinci oturum açıldı ve tam aynı duvara çarptı. VERİ KİMLİK 2'nin
      yaptığı, o teşhisi sayıya dökmekti (`ΔE fonksiyonu: 0`).
      📌 Ders: darboğazı yaşayan oturum onu genellikle DOĞRU adlandırır;
         eksik olan tarif değil, ÖLÇÜ olur. Tarifi olan yerde ikinci bir
         işçi değil, bir alet gerekir.

KOMUTLAR
   py arac/renk_olc.py                    bütün kimlikleri DENETLE
   py arac/renk_olc.py --oner a,b,c       N yeni kimliğe renk öner

🔴 `--oner` N kimliği BİRLİKTE çözer, tek tek değil.
   Sebebi ölçüldü: `aragon` ve `kastilya` ayrı ayrı bakıldığında ikisi de
   temiz görünüyor ama **249 yıl yan yana yaşıyorlar.** Kalem başına
   uygulanan ölçüt, kuyruğun tamamına uygulanan ölçütün yerine geçmez.

ÖLÇÜNÜN DAYANDIĞI ÜÇ GERÇEK — üçü de ölçülerek bulundu, varsayılmadı:
   1. Altlık `#e8dfc8`, opaklık `yabanci` 0,44 (app.js'ten doğrulanıyor;
      `renkler.py` başlığı bir dönem "%30" diyordu ve YANLIŞTI).
   2. Komşuluk gerçek Voronoi bitişikliği + GÜN düzeyinde dönem örtüşmesi.
      "Aynı haritada görünüyorlar" yetmez; aynı ANDA komşu olmaları gerek.
   3. Osmanlı ikilisi ayrı opaklıkta: doğrudan 0,68 · tâbi 0,60.
"""
import io, os, sys, math, collections, itertools

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import girdi
from renkler import BOYALAR, ALTLIK, OPAKLIK
from shapely.geometry import MultiPoint, Point, box
from shapely.ops import voronoi_diagram
from shapely.strtree import STRtree

# ---- eşikler: bir yerde, adıyla
DE_KOMSU   = 12.0     # komşu devletten ayrışma
DE_ALTLIK  = 15.0     # altlıktan ayrışma (görünürlük)
TON_MERKEZ = 30.0     # kırmızı ailesinin merkezi (Osmanlı ailesi için)
KUTU = box(-25, -5, 75, 72)


def h2r(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def bind(rgb, a=None):
    """rengi altlığa bindirir — ekranda GÖRÜNEN renk budur"""
    a = OPAKLIK["yabanci"] if a is None else a
    return tuple(a * c + (1 - a) * b for c, b in zip(rgb, ALTLIK))


def _f(t):
    return t ** (1 / 3) if t > 0.008856 else 7.787 * t + 16 / 116


def lab(r):
    r, g, b = [c / 255 for c in r]
    r, g, b = [((c + 0.055) / 1.055) ** 2.4 if c > 0.04045 else c / 12.92
               for c in (r, g, b)]
    x = (0.4124 * r + 0.3576 * g + 0.1805 * b) / 0.95047
    y = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 1.0
    z = (0.0193 * r + 0.1192 * g + 0.9505 * b) / 1.08883
    fx, fy, fz = _f(x), _f(y), _f(z)
    return (116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz))


def dE(a, b):
    """CIE76 — Lab uzayında öklit"""
    return sum((x - y) ** 2 for x, y in zip(a, b)) ** 0.5


def ton(L):
    return math.degrees(math.atan2(L[2], L[1])) % 360


def gorunen(kimlik):
    """kimliğin ekranda görünen Lab'ı"""
    return lab(bind(h2r(BOYALAR[kimlik][1])))


OSM = {"OSMANLI doğrudan": lab(bind(h2r("#8e0b22"), OPAKLIK["dogrudan"])),
       "OSMANLI tâbi":     lab(bind(h2r("#b2384a"), OPAKLIK["tabi"]))}
ALT = lab(ALTLIK)

# ---- paletin "hissi": mevcut hexlerin parlaklık/doygunluk ortancası.
# Yetinmeci seçim buna yakınlığa göre tercih yapar (bkz. oner()).
import colorsys as _cs
_hls = [_cs.rgb_to_hls(*[c / 255 for c in h2r(v[1])]) for v in BOYALAR.values()]
L_ORT = sorted(x[1] for x in _hls)[len(_hls) // 2]
S_ORT = sorted(x[2] for x in _hls)[len(_hls) // 2]


def uyum(rgb):
    """palete benzerlik — KÜÇÜK İYİ. Ölçüt değil TERCİH; eşiği geçen
    adaylar arasında ayrım yapar, eşiği değiştirmez."""
    _, l, s = _cs.rgb_to_hls(*[c / 255 for c in rgb])
    return math.hypot(l - L_ORT, s - S_ORT)


# ═══════════════ komşuluk — gerçek, gün düzeyinde ═══════════════
def komsuluk(sessiz=True):
    """kimlik → aynı ANDA sınırdaş olduğu kimlikler"""
    Y = girdi.yukle(sessiz=sessiz)
    pts = [Point(y["lon"], y["lat"]) for y in Y]
    vd = voronoi_diagram(MultiPoint(pts), envelope=KUTU)
    huc = [None] * len(Y)
    ag = STRtree(pts)
    for g in vd.geoms:
        for i in ag.query(g):
            if g.contains(pts[int(i)]):
                huc[int(i)] = g.intersection(KUTU)
    hag = STRtree([h if h is not None else Point(0, 0) for h in huc])

    def don(y):
        for p in (y.get("s") or []):
            if p.get("d"):
                yield p["d"], p["f"], p["t"]
        for p in (y.get("d") or []):
            yield "OSMANLI", p["f"], p["t"]
        for p in (y.get("v") or []):
            yield (p.get("d") or "OSMANLI"), p["f"], p["t"]

    k = collections.defaultdict(set)
    for i, h in enumerate(huc):
        if h is None:
            continue
        for jj in hag.query(h):
            j = int(jj)
            if j <= i or huc[j] is None:
                continue
            if not (h.touches(huc[j]) or h.intersection(huc[j]).length > 1e-9):
                continue
            for a, fa, ta in don(Y[i]):
                for b, fb, tb in don(Y[j]):
                    # ⚠️ GÜN düzeyinde örtüşme — "aynı haritada var" YETMEZ
                    if a != b and fa < tb and fb < ta:
                        k[a].add(b)
                        k[b].add(a)
    return k, len(Y)


# ═══════════════ DENETİM ═══════════════
def denetle():
    k, n = komsuluk()
    print(f"canlı veri {n} nokta · {len(BOYALAR)} kimlik · "
          f"altlık #{''.join('%02x' % c for c in ALTLIK)} · "
          f"opaklık {OPAKLIK['yabanci']}")
    print(f"eşikler: komşudan ΔE ≥ {DE_KOMSU:.0f} · altlıktan ≥ {DE_ALTLIK:.0f}")

    gorunmez, cakisan = [], []
    for a in sorted(BOYALAR):
        La = gorunen(a)
        d_alt = dE(La, ALT)
        if d_alt < DE_ALTLIK:
            gorunmez.append((d_alt, a))
        for b in sorted(k.get(a, ())):
            if b <= a or b not in BOYALAR:
                continue
            d = dE(La, gorunen(b))
            if d < DE_KOMSU:
                cakisan.append((d, a, b))
        for ad, o in OSM.items():
            d = dE(La, o)
            if d < DE_KOMSU and (a in k.get("OSMANLI", ()) or "OSMANLI" in k.get(a, ())):
                cakisan.append((d, a, ad))

    print("\n" + "=" * 72)
    print(f"ALTLIKTAN AYRIŞMAYAN — {len(gorunmez)} kimlik (ΔE < {DE_ALTLIK:.0f})")
    print("=" * 72)
    for d, a in sorted(gorunmez):
        print(f"  {d:>6.1f}  {a:<24} {BOYALAR[a][1]}  {BOYALAR[a][0]}")
    if not gorunmez:
        print("  yok")

    print("\n" + "=" * 72)
    print(f"KOMŞUSUYLA ÇAKIŞAN — {len(cakisan)} çift (ΔE < {DE_KOMSU:.0f})")
    print("=" * 72)
    for d, a, b in sorted(cakisan):
        print(f"  {d:>6.1f}  {a:<22} ↔ {b}")
    if not cakisan:
        print("  yok")

    print("\n" + "=" * 72)
    print("  " + ("✓ TEMİZ" if not gorunmez and not cakisan
                  else f"🔴 {len(gorunmez)} görünmez · {len(cakisan)} çakışma"))
    return gorunmez, cakisan


# ═══════════════ ÖNERİ — N kimliği BİRLİKTE ═══════════════
def oner(yeni):
    k, n = komsuluk()
    print(f"canlı veri {n} nokta · istenen {len(yeni)} yeni kimlik")

    # ⚠️ MEVCUT KİMLİK DE İSTENEBİLİR — asıl kullanım bu.
    #   İlk yazımda "zaten tanımlı" diye reddediyordum; oysa aracın en sık
    #   işi 73 çakışmayı DÜZELTMEK, yani var olan bir rengi değiştirmek.
    #   Kendi rengi engel kümesinden düşer (kendinden kaçmasın).
    var = [a for a in yeni if a in BOYALAR]
    if var:
        print("  değiştirilecek (zaten tanımlı): " + ", ".join(var))

    # ⚠️ KOMŞUSUZ KİMLİK UYARISI — sessiz geçilirse yanıltır.
    #   `girdi.py`nin okumadığı bir dosyada geçen kimlik (ör. Avrupa
    #   partisindeki `aragon`) burada SIFIR komşu gösterir; araç onu
    #   "kısıtsız" sanıp en ayrık rengi verir ve öneri DAYANAKSIZ olur.
    kimsesiz = [a for a in yeni if not k.get(a)]
    if kimsesiz:
        print("  🔴 komşusu ölçülemeyen kimlik: " + ", ".join(kimsesiz))
        print("     (verisi girdi.py'nin okuduğu dosyalarda DEĞİL —")
        print("      öneri yalnız altlık ve Osmanlı ikilisine dayanır)")

    engel = {}
    for a in yeni:
        e = [gorunen(b) for b in k.get(a, ()) if b in BOYALAR and b != a]
        e += list(OSM.values())
        engel[a] = e
        print(f"  {a:<24} {len(k.get(a, ())):>3} komşu, {len(e):>3} renkli engel")

    # 🔴 YENİLER BİRBİRİNİN DE ENGELİ — hangi ikisi komşu?
    ikili = [(a, b) for a, b in itertools.combinations(yeni, 2)
             if b in k.get(a, ())]
    print(f"\n  yeniler arası komşuluk: {len(ikili)} çift"
          + ("  ← bunlar birbirinden de ayrışmalı" if ikili else ""))
    for a, b in ikili:
        print(f"    {a} ↔ {b}")

    # degistirilen kimligin KENDI hexi aday havuzunda kalsin ki
    # "degismesi gerekmiyor" sonucu da cikabilsin
    KULLANILAN = {v[1].lower() for a, v in BOYALAR.items()
                  if a not in yeni}
    aday = []
    for r in range(0, 256, 6):
        for g in range(0, 256, 6):
            for b in range(0, 256, 6):
                hx = "#%02x%02x%02x" % (r, g, b)
                if hx in KULLANILAN:
                    continue
                L = lab(bind((r, g, b)))
                if dE(L, ALT) < DE_ALTLIK:
                    continue
                aday.append((hx, L))
    print(f"  altlıktan ayrışan aday: {len(aday)}")

    secim = {}
    for a in yeni:
        e = list(engel[a])
        # daha önce seçilmiş YENİ komşular da engel
        for b, (_, Lb) in secim.items():
            if b in k.get(a, ()):
                e.append(Lb)
        uygun = [(min(dE(L, x) for x in e), hx, L) for hx, L in aday
                 if hx not in {v[0] for v in secim.values()}]
        uygun = [u for u in uygun if u[0] >= DE_KOMSU]
        if not uygun:
            print(f"  🔴 {a}: ΔE ≥ {DE_KOMSU:.0f} sağlayan aday YOK")
            continue
        # 🔴 EN AYRIK DEĞİL, YETİNMECİ — 1 Ağustos'ta ölçülerek bulundu.
        #   "En ayrık"ı seçmek uçlara kaçıyor: ilk deneme #00f000 · #fc0000 ·
        #   leylak verdi, bugün de #00fc00 (saf yeşil) ve #fc00fc (macenta).
        #   Eşiği GEÇEN adaylar arasından PALETE EN UYGUN olan seçilir;
        #   böylece renk hem ayırır hem atlasa ait görünür.
        #   📌 Ölçüt gevşemiyor: eşik aynı, yalnız eşiği geçenler arasında
        #      tercih değişiyor.
        uygun.sort(key=lambda u: uyum(h2r(u[1])))
        m, hx, L = uygun[0][0], uygun[0][1], uygun[0][2]
        secim[a] = (hx, L)

    print("\n" + "=" * 72)
    print("ÖNERİ")
    print("=" * 72)
    for a in yeni:
        if a not in secim:
            print(f"  {a:<24} —  ÇÖZÜLEMEDİ")
            continue
        hx, L = secim[a]
        e = list(engel[a]) + [Lb for b, (_, Lb) in secim.items()
                              if b != a and b in k.get(a, ())]
        print(f"  {a:<24} {hx}  L*{L[0]:5.1f} ton {ton(L):5.1f}°  "
              f"en yakın engel ΔE {min(dE(L, x) for x in e):.1f}")
    print("\n  📌 Bu liste ONAY İSTER. Araç 'meşru' der, 'güzel' demez.")


if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "--oner":
        if len(sys.argv) < 3:
            raise SystemExit("kullanim: --oner kimlik1,kimlik2,...")
        oner([x.strip() for x in sys.argv[2].split(",") if x.strip()])
    else:
        denetle()
