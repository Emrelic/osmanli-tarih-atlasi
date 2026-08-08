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
import io, os, re, sys, math, collections, itertools

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
# 🔴 KUTU ELLE YAZILMAZ — BOLGE'den PAY ile türetilir (İş N bulgu N1).
# Eski hâli `KUTU = box(-25, -5, 75, 72)` elle kopyaydı: Asya partisi
# girince lon>75 noktaların Voronoi hücreleri intersection(KUTU) ile
# SESSİZCE boşalacaktı — komşuluk eksik, 135 Asya rengi yanlış komşulukla
# önerilir, denetle() çakışma çiftlerini hiç göremezdi. denetle.py:962'nin
# (İş B) birebir kardeşi.
# Paylar, eski elle kutunun o günkü BOLGE(-12, 1.5, 62, 62)'ye göre ölçülen
# payları — bugünkü davranışa BİREBİR sadık, kutu büyüyünce otomatik izler:
#   batı/doğu 13° · güney 6,5° · kuzey 10°
# Zarf yalnız Voronoi kırpma sınırı: BOLGE'yi her yönden aşması yeterli,
# değeri hassas değil — hassas olan ELLE KOPYA OLMAMASI.
# Bulunamazsa SystemExit — sessizce eski değere düşme YOK (ölçemeyen
# denetim temiz denetim değildir).
#
# 🔴 VE AYRIŞTIRICI BİR KEZ KIRILDI — 6 Ağustos 2026, RENK 2'nin ilk bulgusu.
#   Desen `^BOLGE\s*=\s*box\(` idi, yani YALNIZ düz dikdörtgeni tanıyordu.
#   4 Ağustos'ta batı kenarı İzlanda için açılınca BOLGE L şekline döndü:
#     BOLGE = unary_union([box(-12, -11, 146, 82), box(-25, 60, -12, 82)])
#   Desen tutmadı ⇒ SystemExit ⇒ `renk_olc.py` VE onu içe aktaran
#   `renk_cikti.py` **ikisi de import anında ölüyordu.** Yani atlasın renk
#   ekseninde iki nöbetçi vardı ve İKİSİ DE İKİ GÜNDÜR KOŞMUYORDU.
#   📌 Ders: "elle kopya olmasın" doğru karardı, ama okuyucu kaynağın TEK
#      biçimine bağlandı. Kaynak biçim değiştirince koruma korumayı bıraktı.
#      Sessiz kalmadı — SystemExit attı, ki doğrusu buydu (§"ölçemeyen
#      denetim temiz denetim değildir") — ama kimse koşturmadığı için iki gün
#      duyulmadı. **Gürültülü ölüm bile, dinleyen yoksa sessizdir.**
#   ⇒ Yeni okuyucu BİÇİMDEN BAĞIMSIZ: BOLGE atamasındaki BÜTÜN box(...)
#     çağrılarını toplar ve zarfını (min/maks) alır. box · unary_union ·
#     MultiPolygon — üçü de aynı sonucu verir. Zaten KUTU'nun tek işi
#     Voronoi kırpma sınırıdır; BOLGE'yi her yönden aşması yeterli, şeklini
#     TAŞIMASI gerekmiyor (L'nin çentiği açık okyanusta, orada nokta yok).
_UP = os.path.join(os.path.dirname(os.path.abspath(__file__)), "uret_petek.py")
_m = re.search(r"^BOLGE\s*=\s*(.+?)(?:\n(?=\S)|\Z)",
               io.open(_UP, encoding="utf-8").read(), re.M | re.S)
_kutular = re.findall(r"box\(\s*([-0-9.eE,\s]+?)\s*\)",
                      _m.group(1)) if _m else []
if not _kutular:
    raise SystemExit("!! BOLGE uret_petek.py'den okunamadı (box(...) "
                     "bulunamadı) — KUTU türetilemez, komşuluk ölçülemez")
_b = [[float(x) for x in k.split(",")] for k in _kutular]
if any(len(k) != 4 for k in _b):
    raise SystemExit("!! BOLGE'deki box(...) 4 sayı taşımıyor — KUTU "
                     "türetilemez, komşuluk ölçülemez")
KUTU = box(min(k[0] for k in _b) - 13.0, min(k[1] for k in _b) - 6.5,
           max(k[2] for k in _b) + 13.0, max(k[3] for k in _b) + 10.0)


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


# ═══════════════ AYNI ANAHTAR — ΔE taramasının KÖR NOKTASI ═══════════════
def ayni_anahtar():
    """Aynı `harita:` anahtarını paylaşan devlet kayıtları tarihleri
    ÖRTÜŞÜRSE haritada aynı renge boyanır — ΔE 0, mümkün olan en kötü hâl.
    Aşağıdaki ΔE taraması bunu GÖREMEZ: ölçüm anahtar↔anahtar kuruludur,
    aynı anahtarın iki kullanıcısı arasında ortada çift yoktur (vaka:
    afsar↔kacar 1789-1796, ikisi de "iran" — VERİ KİMLİK 2'nin bulgusu).
    ⚠️ ARDIŞIK paylaşım (halef aynı anahtarı alır) YERLEŞİK desendir —
    örtüşme yoksa SUSULUR, yoksa 12 yanlış alarm üretirdi."""
    # Okuma girdi.oku_devletler() ile — TEK ortak okuyucu. Bu araçta önce
    # hedefli bir yerel ayrıştırıcı vardı; aynı gün üç oturum üç ayrı geçici
    # çözüm yazıp yarısı yanlış cevap alınca okuyucu girdi.py'de
    # ortaklaştırıldı (gerekçesi orada). İki ayrıştırıcı = iki otorite.
    D = girdi.oku_devletler()
    grup = collections.defaultdict(list)
    for d in D:
        if d.get("harita") and d.get("f") and d.get("t"):
            grup[d["harita"]].append(d)
    ortusen, sessiz = [], 0
    for anahtar, kayitlar in sorted(grup.items()):
        if len(kayitlar) < 2:
            continue
        vurdu = False
        for a, b in itertools.combinations(
                sorted(kayitlar, key=lambda x: x["f"]), 2):
            if a["f"] < b["t"] and b["f"] < a["t"]:
                ortusen.append((anahtar, a, b))
                vurdu = True
        if not vurdu:
            sessiz += 1
    paylasan = sum(1 for k in grup.values() if len(k) > 1)
    return ortusen, sessiz, paylasan, len(D)


# ═══════════════ AYNI HEX — ayni_anahtar()'ın AYNADAKİ YÖNÜ ═══════════════
# ayni_anahtar() "aynı anahtar + eşzamanlılık"ı yakalar; bu ise FARKLI
# anahtarların AYNI HEX'i paylaşmasını. İkisi de ΔE 0 üretir ve ΔE taraması
# ikisini de göremez (çift kurulmaz ya da fark sıfırdır). Vaka (2 Ağustos,
# koordinatör ölçümü, bu araçla yeniden doğrulandı): trabzon-rum ↔ dulkadir
# ikisi de #00838f, 1337-1350 arası eşzamanlı, en yakın noktaları ~312 km.
#
# ⚠️ EŞİK 600 km — türetimi (bir yerde, adıyla):
#   ateşlemesi gereken çift 312 km'de, susması gereken en yakın meşru çift
#   1.232 km'de (bosna↔ahiler). Geometrik orta √(312×1232) ≈ 620 → 600.
#   Ve bağımsız dayanak: İş K ölçümünde peteğin soğurma erişimi P90 497 km —
#   iki gövde arasında 600 km varsa arada başka devletin şeridi vardır,
#   aynı ekranda bitişik görünmezler. Eşiğin altı + eşzamanlı = karışır.
AYNI_HEX_ESIK_KM = 600.0


def ayni_hex():
    """(cakisan, olculemedi) — aynı hex'i paylaşan FARKLI anahtar çiftleri:
    eşzamanlı VE 600 km'den yakınsa çakışma; nokta yoksa ÖLÇÜLEMEDİ (sessiz
    geçilmez — 'ölçülemedi' ile 'temiz' aynı şey değildir).

    ⚠️ ÖRTÜŞME PENCERESİ KİMLİK ZARFIDIR, dönem bazlı değil: kimliğin bütün
    canlı s:/v: dönemlerinin min-maks aralığı alınır. Bu yüzden rapordaki
    pencere dönem-bazlı elle ölçümden GENİŞ çıkabilir (vaka: dulkadir↔
    trabzon-rum — zarf 1337→1461 der, dönem bazlı 1350'de biter; ATEŞLEME
    KARARI İKİSİNDE DE AYNI). Zarf kasıtlı: soru "bu iki devlet aynı
    haritada hiç buluşur mu"dur, kaç yıl buluştukları değil."""
    gruplar = collections.defaultdict(list)
    for a, (_, hx) in BOYALAR.items():
        gruplar[hx.lower()].append(a)
    Y = girdi.yukle(sessiz=True)
    nokta = collections.defaultdict(list)
    aralik = {}
    for y in Y:
        donemler = [(p.get("d"), p.get("f"), p.get("t"))
                    for p in (y.get("s") or [])]
        donemler += [(p.get("d"), p.get("f"), p.get("t"))
                     for p in (y.get("v") or []) if p.get("d")]
        for d, f, t in donemler:
            if not (d and f and t):
                continue
            nokta[d].append((y["lat"], y["lon"]))
            eski = aralik.get(d)
            aralik[d] = (min(eski[0], f), max(eski[1], t)) if eski else (f, t)
    cakisan, olculemedi = [], []
    for hx, anahtarlar in sorted(gruplar.items()):
        for a, b in itertools.combinations(sorted(anahtarlar), 2):
            eksik = [k for k in (a, b) if k not in aralik]
            if eksik:
                olculemedi.append((hx, a, b, ", ".join(eksik)))
                continue
            fa, ta = aralik[a]
            fb, tb = aralik[b]
            if not (fa < tb and fb < ta):
                continue                    # eşzamanlı değil: meşru, sus
            d = min(girdi.km(p[0], p[1], q[0], q[1])
                    for p in nokta[a] for q in nokta[b])
            if d < AYNI_HEX_ESIK_KM:
                cakisan.append((d, hx, a, b, max(fa, fb), min(ta, tb)))
            # uzak + eşzamanlı: meşru paylaşım, sus
    return cakisan, olculemedi


DE_SINIRDA = 15.0     # ihlal değil EKRAN — çıkış kodunu ETKİLEMEZ

# ⚠️ 8 Ağustos 2026 · 2253 nokta · 33 girdi dosyası · BOYALAR 314
# 🔴 BU SAYI VERİNİN FONKSİYONUDUR. Nokta partisi indikçe hücreler küçülür,
#   yeni komşuluk doğar ve sayı KENDİLİĞİNDEN büyür — bu KUSUR DEĞİLDİR.
#   Ölçüldü, aynı gün iki saat içinde: 2133 → 2253 nokta, ve `komsuluk()`
#   çakışması 0 → 1 → 5 → 3 → 0 diye salındı (her seferinde kapatıldı).
#   ⇒ Her nokta partisinden sonra GEREKÇESİYLE yeniden tabanlanır,
#     SESSİZCE DEĞİL. (`BEKLENEN_SAHIPSIZ` kalıbı: 114 → 170 → 172.)
#
# 🔴 VE ÇIKIŞ KODU BU SAYIYA BAĞLI DEĞİLDİR — kasten.
#   Bağlansaydı `renk_olc` bugünden itibaren HER KOŞUDA kırmızı olurdu ve
#   bir daha yeşile dönmezdi. Kalıcı kırmızı bir denetim denetim değildir;
#   susturulur. (`§11`in kuyruk/pencere dersi: 72 bir EKRAN'dır.)
#   Gerçek kusur `renk_fark.py`de ayrılıyor:
#     YENİ DOĞAN ihlal, yeni komşuluktan   → veri büyümesi, kusur DEĞİL
#     VAR OLAN çift eşiğin ALTINA DÜŞTÜ    → 🔴 RENK REGRESYONU, çıkış 1
#   Yani "kaç ihlal var" sorusu bir sayaç, "hangisi YENİ doğdu" sorusu bir
#   denetimdir — ve ikincisi taban karşılaştırmasıyla cevaplanır.
KADEMELI_IHLAL_TAVANI = 72


def yakin_renk(k=None, kunye=False):
    """İKİNCİ ÇİFT KURUCU — Voronoi komşuluğunun GÖREMEDİĞİ çiftler.

    🔴 NİÇİN VAR — üç coğrafyada ölçüldü, hiçbir denetim görmedi:
        kaffa ↔ sidamo     ΔE 2,8   1390-1897 boyunca ikisi de sahnede
        fransa ↔ portekiz  ΔE 9,6   Çandernagor ↔ Hûglî, 5,2 km
        ava ↔ ayutthaya    ΔE 9,63  407 km, 1351-1555 arası 204 YIL
      Üçünde de sebep aynı: `komsuluk()` yalnız HÜCRELERİ DEĞEN çifti kurar.
      Ama **iki gövde değmeden de aynı ekranda yan yana durur** — ve seyrek
      noktalı bölgelerde (GD Asya 4,2 nokta/mn km²) hücreler öyle büyür ki
      gerçek komşular Voronoi komşusu OLMAZ.
      ⇒ Ölçüt "hücreler değiyor mu" değil, **"aynı ekran köşesine düşer
        mi"** olmalı. O da mesafedir.

    ⚠️ EŞİK NİÇİN YİNE 600 km — tesadüf DEĞİL, AYNI SORU:
      `ayni_hex()` bu fonksiyonun **ΔE = 0 dilimidir.** O da "eşzamanlı mı +
      600 km'den yakın mı" diye sorar; tek farkı renk farkını 0 ile
      sınırlaması. Burada eşik DE_KOMSU'ya açılıyor, geometri aynı kalıyor.
      Türetimi yukarıda `AYNI_HEX_ESIK_KM` başlığında yazılı (312 ↔ 1232 km
      geometrik ortası ≈ 620 → 600; peteğin soğurma erişimi P90 497 km).
      ⇒ Aynı sayı, çünkü **aynı geometrik soru.**

    İKİ PENCERE — ve ikisi AYNI DEĞİL (8 Ağustos ölçümü):
      kunye=False   VERİ zarfı   → bugün ne çiziliyor  → BUGÜNKÜ ihlal
      kunye=True    KÜNYE penceresi → yarın ne çizilecek → YARINKİ ihlal
      Vaka: `ace-sultanligi ↔ malaka-sultanligi` AYNI HEX, 855 km, künyeler
      1496-1511 örtüşüyor — ama veride henüz eşzamanlı dönemleri YOK.
      Veri zarfıyla GÖRÜNMEZ, künye penceresiyle GÖRÜNÜR. Nokta partisi
      inince gerçek olacak. **Kusuru doğmadan yakalamanın tek yolu bu.**

    k verilirse Voronoi komşusu olan çiftler AYIKLANIR — onları `denetle()`
    zaten basıyor, iki kere basmak gürültüdür.

    Dönüş: (ihlal, sinirda, olculemedi, n_cift)
      ihlal   ΔE < DE_KOMSU   → çıkış kodunu ETKİLER
      sinirda DE_KOMSU ≤ ΔE < DE_SINIRDA → ETKİLEMEZ (bkz. aşağıdaki not)

    ⚠️ İHLAL/SINIRDA AYRIMI ZORUNLU (`CLAUDE.md §11` kuyruk/pencere dersi):
      bu kurucu bugün 179 çift kuruyor ve 23'ü sınırda. Sınırda her koşuda
      basılacaksa o bir EKRAN'dır, bitirilecek bir iş değil. Eşik gibi
      davranırsa denetim sürekli kırmızı kalır ve kimse bakmaz."""
    import collections as _c, itertools as _it
    Y = girdi.yukle(sessiz=True)
    nokta, zarf = _c.defaultdict(list), {}
    for y in Y:
        for kat in ("s", "v"):
            for pr in (y.get(kat) or []):
                d, f, t = pr.get("d"), pr.get("f"), pr.get("t")
                if not (d and f and t):
                    continue
                nokta[d].append((y["lat"], y["lon"], f, t))
                e = zarf.get(d)
                zarf[d] = (min(e[0], f), max(e[1], t)) if e else (f, t)

    pencere = dict(zarf)
    if kunye:
        for dv in girdi.oku_devletler():
            an = dv.get("harita") or dv.get("id")
            if not an or not dv.get("f") or not dv.get("t"):
                continue
            e = pencere.get(an)
            pencere[an] = ((min(dv["f"], e[0]), max(dv["t"], e[1]))
                           if e else (dv["f"], dv["t"]))

    ihlal, sinirda, olculemedi, n = [], [], [], 0
    for a, b in _it.combinations(sorted(BOYALAR), 2):
        d_e = dE(gorunen(a), gorunen(b))
        if d_e >= DE_SINIRDA:
            continue
        if k is not None and (b in k.get(a, ()) or a in k.get(b, ())):
            continue                      # Voronoi komşusu: denetle() basıyor
        eksik = [x for x in (a, b) if x not in pencere]
        if eksik:
            olculemedi.append((a, b, ", ".join(eksik)))
            continue
        fa, ta = pencere[a]
        fb, tb = pencere[b]
        if not (fa < tb and fb < ta):
            continue                      # eşzamanlı değil: meşru, sus
        F, T = max(fa, fb), min(ta, tb)
        en = min((girdi.km(pa[0], pa[1], pb[0], pb[1])
                  for pa in nokta.get(a, ()) if pa[2] < T and F < pa[3]
                  for pb in nokta.get(b, ()) if pb[2] < T and F < pb[3]),
                 default=None)
        if en is None:
            olculemedi.append((a, b, "örtüşme penceresinde eşzamanlı nokta yok"))
            continue
        if en >= AYNI_HEX_ESIK_KM:
            continue                      # uzak: meşru paylaşım (başlık kuralı)
        n += 1
        (ihlal if d_e < DE_KOMSU else sinirda).append((d_e, en, a, b, F, T))
    return ihlal, sinirda, olculemedi, n


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

    ortusen, sessiz, paylasan, n_dev = ayni_anahtar()
    print("\n" + "=" * 72)
    print(f"AYNI ANAHTARI PAYLAŞIP TARİHİ ÖRTÜŞEN — {len(ortusen)} çift (ΔE 0!)")
    print(f"  (devletler.js {n_dev} kayıt · {paylasan} anahtar paylaşımlı · "
          f"{sessiz} anahtar ardışık/örtüşmesiz: susuldu)")
    print("=" * 72)
    for anahtar, a, b in ortusen:
        bas, son = max(a["f"], b["f"]), min(a["t"], b["t"])
        print(f"  {anahtar:<14} {a['id']} ({a['f']}→{a['t']}) ↔ "
              f"{b['id']} ({b['f']}→{b['t']})")
        print(f"  {'':<14} örtüşme {bas} → {son} — bu pencerede AYIRT EDİLEMEZLER")
    if not ortusen:
        print("  yok")

    hex_cak, hex_olc = ayni_hex()
    print("\n" + "=" * 72)
    print(f"AYNI HEX'İ PAYLAŞIP EŞZAMANLI VE {AYNI_HEX_ESIK_KM:.0f} KM'DEN "
          f"YAKIN — {len(hex_cak)} çift (ΔE 0!)")
    print("=" * 72)
    for d, hx, a, b, f, t in sorted(hex_cak):
        print(f"  {d:>6.0f} km  {a:<18} ↔ {b:<18} {hx}  "
              f"örtüşme {f} → {t}")
    if not hex_cak:
        print("  yok")
    # ⚠️ ÖZET + --ayrinti (RENK'in önerisi, 2 Ağustos): 37 Asya kimliği 110
    # ÖLÇÜLEMEDİ satırı üretti, 135'te ~600 olurdu ve gerçek bulguları
    # boğardı. Disiplin bozulmaz: SAYI her zaman basılır ('ölçülemedi' ≠
    # 'temiz'), yalnız DÖKÜM --ayrinti'ye alınır.
    if hex_olc:
        print(f"  i {len(hex_olc)} çift ÖLÇÜLEMEDİ — canlı veride dönemi "
              f"olmayan kimlikler ('ölçülemedi' ≠ 'temiz')"
              + ("" if "--ayrinti" in sys.argv else " — dökümü: --ayrinti"))
        if "--ayrinti" in sys.argv:
            for hx, a, b, kimde in hex_olc:
                print(f"      {a} ↔ {b} ({hx}) — dönemi yok: {kimde}")

    yak_i, yak_s, yak_o, yak_n = yakin_renk(k)
    kun_i, kun_s, _, kun_n = yakin_renk(k, kunye=True)
    yeni_i = [x for x in kun_i if (x[2], x[3]) not in {(y[2], y[3]) for y in yak_i}]
    print("\n" + "=" * 72)
    print(f"YAKIN AMA DEĞMEYEN — {len(yak_i)} İHLAL "
          f"(ΔE < {DE_KOMSU:.0f} · eşzamanlı · {AYNI_HEX_ESIK_KM:.0f} km'den yakın)")
    print(f"  (Voronoi komşusu olmayan {yak_n} çift kuruldu; komşu olanları "
          f"yukarıdaki bölüm basıyor)")
    print("=" * 72)
    for d, km_, a, b, f, t in sorted(yak_i):
        print(f"  {d:>6.2f}  {km_:>5.0f} km  {a:<20} ↔ {b:<20} {f[:4]}-{t[:4]}")
    if not yak_i:
        print("  yok")
    if yeni_i:
        print(f"\n  🟠 KÜNYE PENCERESİYLE {len(yeni_i)} ÇİFT DAHA — veride henüz "
              f"eşzamanlı değiller ama künyeleri örtüşüyor.")
        print("     (BORÇ, ihlal değil: nokta partisi inince gerçek olacaklar)")
        for d, km_, a, b, f, t in sorted(yeni_i):
            print(f"     {d:>6.2f}  {km_:>5.0f} km  {a:<20} ↔ {b:<20} {f[:4]}-{t[:4]}")
    if yak_s:
        print(f"\n  i {len(yak_s)} çift SINIRDA ({DE_KOMSU:.0f} ≤ ΔE < "
              f"{DE_SINIRDA:.0f}) — EKRAN, çıkış kodunu etkilemez"
              + ("" if "--ayrinti" in sys.argv else " — dökümü: --ayrinti"))
        if "--ayrinti" in sys.argv:
            for d, km_, a, b, f, t in sorted(yak_s):
                print(f"      {d:>6.2f}  {km_:>5.0f} km  {a:<20} ↔ {b}")
    if len(yak_i) > KADEMELI_IHLAL_TAVANI:
        print(f"\n  ⚠️ TAVAN AŞILDI: {len(yak_i)} > {KADEMELI_IHLAL_TAVANI} — "
              f"yeni körlük doğmuş OLABİLİR. Çıkış kodu ETKİLENMEZ (bu bir "
              f"sayaç); gerçek kusur için: py arac/renk_fark.py")
    if yak_o:
        print(f"  i {len(yak_o)} çift ÖLÇÜLEMEDİ ('ölçülemedi' ≠ 'temiz')"
              + ("" if "--ayrinti" in sys.argv else " — dökümü: --ayrinti"))
        if "--ayrinti" in sys.argv:
            for a, b, kimde in yak_o:
                print(f"      {a} ↔ {b} — {kimde}")

    print("\n" + "=" * 72)
    print("  " + ("✓ TEMİZ" if not gorunmez and not cakisan and not ortusen
                  and not hex_cak and not yak_i
                  else f"🔴 {len(gorunmez)} görünmez · {len(cakisan)} çakışma"
                       f" · {len(ortusen)} aynı-anahtar örtüşmesi"
                       f" · {len(hex_cak)} aynı-hex çakışması"
                       f" · {len(yak_i)} yakın-ama-değmeyen"))
    return gorunmez, cakisan, ortusen, hex_cak, yak_i



B_KADEME_KM = 1500.0   # "aynı ekran" — 600 km "aynı ekran KÖŞESİ"nden geniş


def engel_kumesi(kim, esik=B_KADEME_KM, k=None):
    """kim'in ENGELLERİ: Voronoi komşuları ∪ `esik` içindeki EŞZAMANLI
    palet kimlikleri. Künye penceresi kullanılır (veri zarfı değil) —
    kimliğin veride hiç dönemi olmasa bile ölçülebilsin diye.

    🔴 NİÇİN AYRI BİR FONKSİYON: 8 Ağustos 2026'da bir renk seçimi kendi
      hedefini ıskaladı. `san-devletleri` 600 km engel kümesiyle çözüldü,
      sonuç `le-hanedani` 11,89 — HÂLÂ EŞİĞİN ALTINDA. Sebep: kapatılacak
      çiftler 647-1170 km aralığındaydı, yani 600 km süzgecinin DIŞINDA ⇒
      engel kümesine hiç girmediler.
      ⇒ **ENGEL KÜMESİ, KAPATILMAK İSTENEN ÇİFTİ İÇERMİYORSA ÇÖZÜM O ÇİFTİ
        ÇÖZMEZ — ve çözücü bunu söylemez, "çözdüm" der.**
      Çözücü kusursuz çalışmıştı; KISIT eksik verilmişti. Bu fonksiyon o
      kısıtı tek yerde tutuyor ki her çözücü aynı evreni görsün."""
    import collections as _c
    if k is None:
        k, _ = komsuluk()
    Y = girdi.yukle(sessiz=True)
    nokta, zarf = _c.defaultdict(list), {}
    for y in Y:
        for kat in ("s", "v"):
            for pr in (y.get(kat) or []):
                d, f, t = pr.get("d"), pr.get("f"), pr.get("t")
                if not (d and f and t):
                    continue
                nokta[d].append((y["lat"], y["lon"]))
                e = zarf.get(d)
                zarf[d] = (min(e[0], f), max(e[1], t)) if e else (f, t)
    pen = dict(zarf)
    for dv in girdi.oku_devletler():
        an = dv.get("harita") or dv.get("id")
        if not an or not dv.get("f") or not dv.get("t"):
            continue
        e = pen.get(an)
        pen[an] = ((min(dv["f"], e[0]), max(dv["t"], e[1])) if e
                   else (dv["f"], dv["t"]))
    out = {x for x in k.get(kim, ()) if x in BOYALAR}
    f, t = pen.get(kim, ("1281-01-01", "1923-10-29"))
    for b in BOYALAR:
        if b == kim or b in out or b not in nokta:
            continue
        fb, tb = pen.get(b, (None, None))
        if fb and not (fb < t and f < tb):
            continue
        if kim in nokta:
            en = min(girdi.km(pa[0], pa[1], pb[0], pb[1])
                     for pa in nokta[kim] for pb in nokta[b])
        else:
            continue                    # kim'in noktası yok: çözücü kendi ölçer
        if en < esik:
            out.add(b)
    return out

# ═══════════════ AKTARIM DENETİMİ — öneri ↔ dosya ═══════════════
def dogrula(yol):
    """Öneri listesindeki (kimlik → hex) her rengi renkler.py'deki GERÇEK
    değerle karşılaştırır. RENK oturumunun scratchpad denetiminin araca
    gömülmüş hâli (İş R, 2 Ağustos): öneri `piza #2ac9a8` iken dosyada bir
    önceki turun `#305d84`'ü bulundu — kendi yazdığını ölçüme karşı
    denetlemeyen adım bunu SESSİZCE geçirirdi. Scratchpad bir kişiyi korur,
    araç herkesi (YASALAR C1).

    🔴 TASARIM (RENK'in devri, 2 Ağustos): karşılaştırma, öneriyi üreten
    KOŞUNUN DİSKE YAZDIĞI ARTEFAKTA karşı yapılır — öneri doğrulama anında
    yeniden üretilirse denetim anlamsızdır (ikinci koşu değişmiş BOYALAR'ı
    okur, farklı öneri üretir ve 'sapma yok' der; piza vakası tam buydu).
    `--oner` artefaktı denetim/oneri-<damga>.txt'ye kendisi yazar.

    Satır biçimi: `kimlik #hex` — # ÖNEKİ ZORUNLU (öneksiz 636f03 'kimlik'
    sanılmasın); kimlik ilk sözcük ve slug'a tam uymalı (BÜYÜK harf ayrı
    anahtar demektir, sessizce eşitlenmez); boş ve `//` satırları atlanır;
    BAŞKA hiçbir satır sessiz atlanmaz → SystemExit. Aynı kimlik iki kez →
    SystemExit (çelişkili öneri). Kimlik dosyada var BOYALAR'da yok → HATA
    (yazmayı-unuttum vakası). BOYALAR'da olup dosyada olmayan → hata DEĞİL
    (öneri, paletin alt kümesidir). Aynı hex iki kimliğe → hata DEĞİL
    (paylaşım kural; komşuluk hatasını denetle() ölçer).
    🔴 SESSİZ SIFIR YASAK: dosya yok/boş → SystemExit — '0 fark' ile 'hiç
    karşılaştırmadım' ekranda aynı görünemez. Çıkış: fark varsa 1."""
    if not os.path.exists(yol):
        raise SystemExit(f"!! öneri dosyası yok: {yol} — karşılaştırma "
                         f"YAPILMADI ('0 fark' değil)")
    oneriler = {}
    # utf-8-sig: Windows araçları (PowerShell dahil) BOM yazar; BOM'lu ilk
    # satır meşru öneriyken 'ayrıştırılamadı' diye reddediliyordu (ölçüldü).
    for satir in io.open(yol, encoding="utf-8-sig").read().splitlines():
        s = satir.strip()
        if not s or s.startswith("//"):
            continue
        parcalar = s.split()
        mh = re.search(r'#[0-9a-fA-F]{6}\b', s)
        if not parcalar or not re.fullmatch(r'[a-z0-9][a-z0-9-]*',
                                            parcalar[0]) or not mh:
            raise SystemExit(f"!! öneri satırı ayrıştırılamadı (biçim: "
                             f"`kimlik #hex`, # zorunlu): {satir!r}")
        kimlik = parcalar[0]
        if kimlik in oneriler and oneriler[kimlik] != mh.group(0).lower():
            raise SystemExit(f"!! öneri listesi çelişkili: '{kimlik}' iki "
                             f"farklı hexle geçiyor — hangisi doğru?")
        oneriler[kimlik] = mh.group(0).lower()
    if not oneriler:
        raise SystemExit(f"!! öneri dosyası ayrıştırılamadı/boş: {yol} — "
                         f"karşılaştırma YAPILMADI ('0 fark' değil)")
    farklar, yoklar = [], []
    for kimlik, hx in sorted(oneriler.items()):
        if kimlik not in BOYALAR:
            yoklar.append(kimlik)
            continue
        gercek = BOYALAR[kimlik][1].lower()
        if gercek != hx:
            farklar.append((kimlik, hx, gercek))
    print(f"aktarım denetimi: {len(oneriler)} öneri karşılaştırıldı "
          f"(renkler.py {len(BOYALAR)} kimlik)")
    # RENK'in bonus notu: aktarım doğru olsa da ÖNERİ hatalı olabilir
    # (babur vakası: altlıktan tam 15,0). Ucuz olan altlık görünürlüğü
    # burada BİLGİ olarak sınanır; komşu ekseni denetle()'nin işi.
    for kimlik, hx in sorted(oneriler.items()):
        d_alt = dE(lab(bind(h2r(hx))), ALT)
        if d_alt < DE_ALTLIK:
            print(f"  ⚠ GÖRÜNÜRLÜK  {kimlik:<20} {hx} altlıktan ΔE "
                  f"{d_alt:.1f} < {DE_ALTLIK:.0f} — aktarım sorunu değil, "
                  f"ÖNERİ sorunu (denetle() ile teyit et)")
    # 🔴 SON DOĞRULAMA — "aktarım doğru" ≠ "renk İŞİNİ GÖRÜYOR".
    # Koordinatör isteği (8 Ağustos 2026), sebebi `engel_kumesi()`de yazılı:
    # bir çözüm kendi hedefini ıskalayabilir ve çözücü "çözdüm" der.
    # ⚠️ ÇIKIŞ KODUNU ETKİLEMEZ ve etkilememeli: paletin bilinen bir borcu
    #   var (`KADEMELI_IHLAL_TAVANI`) ve o borçtaki çiftler burada da
    #   görünür. Bu bölüm bir KAPI değil AYNA — yazan, hedefinin gerçekten
    #   kapandığını GÖRSÜN diye.
    # 🔴 VE AYNANIN EŞİĞİ KAPININKİNDEN GENİŞ — KASITLI:
    #     yakin_renk() (KAPI)   600 km  = "aynı ekran KÖŞESİ"
    #     bu bölüm     (AYNA)  1500 km  = "aynı ekran"
    #   Ayna daha çok gösterir, çünkü işi karar vermek değil UYARMAK.
    #   İlk koşusunda hemen işe yaradı: `san-devletleri ↔ kakatiya` ΔE 7,4 ·
    #   1442 km · eşzamanlı 1281-1323 — 600 km'lik kapının GÖRMEDİĞİ, ama
    #   bir sonraki nokta partisinde kapıya dayanacak bir çift.
    #   ⚠️ Bu yüzden aynanın çıktısı "denetim kırmızı" DEĞİLDİR. İkisini
    #     aynı sayı sanmak, aynayı kapı zannetmek olur.
    if "--hizli" not in sys.argv:
        _k, _ = komsuluk()
        print(f"\n  SON DOĞRULAMA — önerilen rengin eşik altı komşuları "
              f"(ΔE < {DE_KOMSU:.0f} · Voronoi ∪ {B_KADEME_KM:.0f} km eşzamanlı)")
        _hic = True
        for kimlik, hx in sorted(oneriler.items()):
            if kimlik not in BOYALAR:
                continue
            _L = lab(bind(h2r(hx)))
            _alt = sorted((dE(_L, gorunen(b)), b)
                          for b in engel_kumesi(kimlik, k=_k) if b in BOYALAR)
            _alt = [x for x in _alt if x[0] < DE_KOMSU]
            if _alt:
                _hic = False
                print(f"    🟠 {kimlik:<22} {len(_alt)} çift: "
                      + " · ".join(f"{b} {d:.1f}" for d, b in _alt[:4]))
        if _hic:
            print("    ✓ önerilen renklerin hiçbirinin eşik altı komşusu yok")

    for kimlik, hx, gercek in farklar:
        print(f"  🔴 FARK  {kimlik:<22} öneri {hx} ≠ dosyada {gercek}")
    for kimlik in yoklar:
        print(f"  🔴 PALETTE YOK  {kimlik} — öneri var, renkler.py'de kimlik yok")
    if farklar or yoklar:
        print(f"  ⇒ {len(farklar)} fark · {len(yoklar)} eksik kimlik — "
              f"AKTARIM BOZUK, yazılan ≠ önerilen")
        return 1
    print("  ✓ 0 fark — yazılan, önerilenle birebir aynı")
    return 0


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

    # 🔴 ARTEFAKT (RENK'in devri): öneri DİSKE yazılır ki --dogrula, öneriyi
    # üreten koşunun çıktısına karşı koşulabilsin. Doğrulama anında yeniden
    # üretmek anlamsızdır: BOYALAR bu arada değişmişse ikinci koşu farklı
    # öneri üretir ve "sapma yok" der (piza #2ac9a8/#305d84 vakası).
    if secim:
        import time
        ddir = os.path.join(os.path.dirname(os.path.dirname(
            os.path.abspath(__file__))), "denetim")
        os.makedirs(ddir, exist_ok=True)
        ayol = os.path.join(ddir, "oneri-%s.txt"
                            % time.strftime("%Y%m%d-%H%M%S"))
        with io.open(ayol, "w", encoding="utf-8") as f:
            f.write("// renk_olc.py --oner çıktısı — aktarımdan SONRA:\n"
                    "//   py arac/renk_olc.py --dogrula %s\n"
                    % os.path.basename(ayol))
            for a in yeni:
                if a in secim:
                    f.write("%s %s\n" % (a, secim[a][0].lower()))
        print(f"  artefakt: {ayol}")
        print(f"  aktarımdan sonra: py arac/renk_olc.py --dogrula "
              f"denetim/{os.path.basename(ayol)}")


if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "--oner":
        if len(sys.argv) < 3:
            raise SystemExit("kullanim: --oner kimlik1,kimlik2,...")
        oner([x.strip() for x in sys.argv[2].split(",") if x.strip()])
    elif len(sys.argv) > 1 and sys.argv[1] == "--dogrula":
        if len(sys.argv) < 3:
            raise SystemExit("kullanim: --dogrula oneri_listesi.txt "
                             "(satir bicimi: kimlik #hex)")
        sys.exit(dogrula(sys.argv[2]))
    else:
        denetle()
