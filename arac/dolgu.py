# -*- coding: utf-8 -*-
"""B GÖRÜNÜMÜ — A + DOLGU katmanı (B-GORUNUM-0072, 20 Eylül 2026).

Emre'nin tanımı (`oturumlar/GORUNUM-ABCD-0916.md` ## B):
    A = sürtünmeli yürüyüş haritası — DOKUNULMAMIŞ yazılır
    B = A + DOLGU: boşluk · koridor · enklav bağı · sahipsiz toprağın paylaşımı
    Arayüz anahtarı: dolgu A'nın ÜSTÜNE o devletin rengiyle çizilir; kapalıysa
    çizilmez. Geçiş anlık — YENİ KOŞU GEREKMEZ.

🔴 A'YA HİÇ DOKUNULMAZ — ve bu bir niyet değil, YAPISAL bir garanti:
   bu modül A boru hattının hiçbir satırını çağırmaz, hiçbir A değişkenini
   değiştirmez. Girdisi "bir kesitteki BÜTÜN A gövdeleri" sözlüğüdür; çıktısı
   AYRI bir dosyadır. `uret_petek.py` bunu A yazıldıktan SONRA çağırır
   (aynı koşuda — Emre'nin "TEK KOŞU" şartı), ya da bu dosya tek başına
   `py arac/dolgu.py` ile koşturulup yazılmış `data/*.js`ten okur (dar dilim
   sınavı; B-4 maliyet ölçümü bu yolla yapıldı).

🔴 ENKLAV KURALI (Emre'nin 16 Eylül düzeltmesi) YAPISAL OLARAK SAĞLANIR:
   her devletin talebinden BÜTÜN devletlerin A toprağı çıkarılır. İki parçanın
   arasında başka devletin toprağı varsa köprü o toprağa ÇARPAR ve durur —
   birleşme kendiliğinden olmaz. O vaka `rapor["engellendi"]`e yazılır
   ("incelenecek"), örtülmez.

YÖNTEM — niçin "kapanış" (closing), niçin bileşen analizi DEĞİL:
   İlk tasarım "KARA − bütün A gövdeleri → boş toprağın bağlı bileşenleri"
   idi. ÇÜRÜDÜ: Avrasya+Afrika'nın boş toprağı TEK bağlı bileşendir —
   Osmanlı'nın iki parçası arasındaki 80 km'lik boşluk, Sibirya ve Sahra ile
   aynı bileşenin içindedir. O bileşene "sahip" atanamaz.
   ⇒ Ölçüt YERELLEŞTİRİLDİ: her gövdenin kendi morfolojik kapanışı
     (`buffer(+r).buffer(-r)`) alınır. Kapanış TANIM GEREĞİ yalnız 2r'den dar
     boşluk/koridor/girintiyi doldurur ve sınırlıdır; dünyanın geri kalanı
     hiç aday olmaz. `r` tek ayar düğmesidir ve anlamı tek cümledir:
     "2r'den dar boşluklar kapanır".
"""

import hashlib as _hlo
import io
import json
import math
import os
import sys
import time

import shapely
from shapely.geometry import (MultiPoint, MultiPolygon, Polygon, mapping,
                              shape)
from shapely.ops import unary_union, voronoi_diagram

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import motor_onbellek as _mob        # noqa: E402

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASEMAPS = os.path.join(KOK, "veri-kaynak")

# ═══════════════════════════════════════════════════════════════════════════
# AYARLAR — hepsi ortam değişkeniyle çevrilebilir (koşu ortasında kod
# düzenlemeden kapatabilmek için; `B23_ACIK`ın gerekçesinin aynısı).
# ═══════════════════════════════════════════════════════════════════════════
# Kapanış yarıçapı. 🔴 SEÇİMİN GEREKÇESİ ÖLÇÜLMÜŞ BİR SAYIYA BAĞLI:
# motorun B2'si (`uret_petek.py` B2_ENKLAV_KM) 250 km'ye kadar enklav
# köprüler ve o tavanın gerekçesi "ölçülen en uzak karasal enklav 223 km"dir.
# Kapanış 2r'lik boşluğu kapattığı için r = 125 km, B2'nin menziliyle BİREBİR
# aynı kapıyı açar. Varsayılanı 120 km'de tutuyorum — B2'nin ZATEN çözdüğü
# vakaları yeniden denemesin, ondan ARTAKALANI doldursun diye.
YARICAP_KM = float(os.environ.get("MOTOR_DOLGU_YARICAP_KM", "120"))
# Bundan küçük parça yazılmaz — ekranda görünmez, dosyayı şişirir.
ESIK_KM2 = float(os.environ.get("MOTOR_DOLGU_ESIK_KM2", "200"))
# Kapanış hesabı ÖNCESİ gövdeyi kabalaştırma toleransı (derece). ~0,05° ≈ 5 km:
# 120 km ölçekli bir kapanış için 5 km'lik kıyı ayrıntısı gürültüdür.
# 0 yazılırsa kabalaştırma kapanır (ham gövdeyle tamponlanır — ÇOK YAVAŞ,
# bkz. `_talep` içindeki ölçüm notu).
KABA_TOL = float(os.environ.get("MOTOR_DOLGU_KABA", "0.05"))
# Sadeleştirme toleransı (derece). A'nın örtü sadeleştirmesiyle aynı mertebe.
SADE_TOL = float(os.environ.get("MOTOR_DOLGU_SADE", "0.01"))
# "Çekişmeli" alanı paylaştırırken kaç km'de bir sınır noktası örneklenir.
PAYLASIM_ADIM_KM = float(os.environ.get("MOTOR_DOLGU_PAYLASIM_ADIM_KM", "25"))
# Bir çekişmeli bileşen için en çok kaç örnek nokta (maliyet tavanı).
PAYLASIM_NOKTA_TAVAN = int(os.environ.get("MOTOR_DOLGU_NOKTA_TAVAN", "400"))
# Temas ölçümü toleransı (derece) — ~2 km. `uret_petek.py` B2_TEMAS ile aynı
# gerekçe: `difference` ile üretilen parça gövdeye DEĞMEZ, tampon şart.
TEMAS = 0.02

CINSLER = ("bosluk", "koridor", "enklav-bag", "paylasim")

# ═══════════════════════════════════════════════════════════════════════════
# KAPANIŞ ÖNBELLEĞİ — ölçümle bulunan TEK BÜYÜK kazanç
# ═══════════════════════════════════════════════════════════════════════════
# 🔴 B-4'ÜN İLK ÖLÇÜMÜ: kesit başına 586 sn · kesit başına 234 gövde ·
#    1883 kesit ⇒ tam koşu ≈ 307 SAAT (12,8 gün). Yani "pahalı" değil,
#    İMKÂNSIZ. Ve sayı, kusurun nerede olduğunu da söylüyordu: sürenin
#    neredeyse tamamı `_talep` (kapanış tamponu) idi.
# 🟢 ÇARE ÖLÇÜMDEN ÇIKTI: kapanış YALNIZ GÖVDENİN FONKSİYONUDUR, tarihin
#    değil. Bir devletin gövdesi kendi DÖNEMİ boyunca birebir aynıdır —
#    A çıktısının şeması zaten böyle (her kayıt bir f–t aralığı).
#    Evren: 4.453 aralık, ama 1883 kesit × 234 gövde = 440.000 gövde-gün.
#    ⇒ Aynı kapanış ortalama 99 KEZ yeniden hesaplanıyordu.
#    Önbellek anahtarı ARALIK İNDEKSİdir (tarih değil) — bu yüzden "aynı
#    sonuç" bir iddia değil, tanım.
# ⚠️ BELLEK TAVANI VAR ve bilerek: bu makinede 20 Eylül'de boş RAM 0,7 GB'a
#    düştü ve `denetle.py` DAHİL birkaç iş `bad allocation` ile düştü
#    (1.MURAT'ın M-4789 ölçümü). Sınırsız önbellek o kuyruğa katılırdı.
_TALEP_ONB = {}
_TALEP_SIRA = []
_TALEP_TAVAN = int(os.environ.get("MOTOR_DOLGU_ONBELLEK", "1200"))
_TALEP_SAYAC = {"istek": 0, "isabet": 0}
# Çözülmüş gövde geometrisi de aynı anahtarla önbelleğe alınır — `_coz`
# (halka havuzundan poligon kurma) da kesit başına 234 kez koşuyordu.
_GEO_ONB = {}
_GEO_SIRA = []
# Yalnız SINAV için: bu kimliğe sahip devletin gövdesi 100 m oynatılır
# (bkz. `_ana` içindeki gerekçe). Üretimde boş.
_SINA_KAYDIR = os.environ.get("MOTOR_DOLGU_SINA_KAYDIR", "")

# ═══════════════════════════════════════════════════════════════════════════
# KOŞULAR ARASI ÖNBELLEK — Emre'nin "lego" ilkesi (1.MURAT, 20 Eylül 2026)
# ═══════════════════════════════════════════════════════════════════════════
# Emre: *"B 1281'den itibaren bir kez hesaplanmalı; sonra yalnız değişen bölge
# ve yalnız değişen dilim için A, ona bağlı olarak da yalnız o bölgenin B
# dolgusu yeniden hesaplanmalı."*
#
# 🔴 İÇERİK ADRESLİ — "bu değişiklik şunu etkiler mi" diye KARAR VERİLMEZ.
#    `motor_onbellek.py`nin ilkesi aynen geçerli: anahtar, hesabın OKUDUĞU
#    girdinin sha256'sıdır. Girdi değişirse anahtar değişir, eski kayıt HİÇ
#    BULUNMAZ. Bayat sonuç okumak yapısal olarak imkânsızdır — ANAHTAR EKSİK
#    GİRDİ TAŞIMADIĞI SÜRECE. Bu yüzden iki katmanın kapsamı burada AÇIKÇA
#    yazılıyor:
#
#   ① "dolgu2_talep" — BİR GÖVDENİN kapanış talebi.
#      Okuduğu girdi: o gövdenin geometrisi · kara/göl maskesi · kural sürümü.
#      Komşuları OKUMAZ (kapanış komşuya bakmaz), bu yüzden anahtarında da
#      yoktur. Süre bu katmandadır (B-4: kesit süresinin ~%99'u).
#      ⇒ Bir devletin gövdesi değişirse YALNIZ onun kapanışı ıskalar.
#
#   ② "dolgu2_kesit" — BİR KESİTİN bütün dolgu parçaları.
#      Okuduğu girdi: o kesitteki BÜTÜN gövdelerin özetleri (sıralı) · kara ·
#      kural sürümü. Paylaşım ve engelleme kararları komşulara baktığı için
#      anahtar da KOMŞULARIN HEPSİNİ taşır — 1.MURAT'ın ②. şartı budur.
#      Dar kapsamlı bir anahtar (yalnız kendi gövdesi) sessizce bayat
#      paylaşım üretirdi.
#
# 🔴 KANONİK SIRA (gövde katmanının dersi, burada da geçerli): `kesit_dolgu`
#    gövdeleri `kim`e göre SIRALAR. Girdi sırası kayarsa (bir yerleşim
#    eklenince indeksler kayar) `difference` zincirinin kayan nokta sonucu
#    değişebilirdi ⇒ önbellekten okunan ile yeniden hesaplanan AYRIŞIRDI.
#    Sıralama bunu yapısal olarak kapatıyor.
KURAL_SURUM = "dolgu-kural-1"
_ONB_TUZ = json.dumps({
    "surum": KURAL_SURUM,
    "modul": _hlo.sha256(io.open(os.path.abspath(__file__), "rb").read()).hexdigest(),
    "kural": {"yaricap_km": YARICAP_KM, "esik_km2": ESIK_KM2,
              "kaba_tol": KABA_TOL, "sade_tol": SADE_TOL, "temas": TEMAS,
              "paylasim_adim_km": PAYLASIM_ADIM_KM,
              "paylasim_nokta_tavan": PAYLASIM_NOKTA_TAVAN},
}, sort_keys=True, ensure_ascii=False)
_ONB = _mob.Onbellek(
    os.path.join(os.environ.get("MOTOR_ONBELLEK_DIZIN")
                 or os.path.join(KOK, "_motor_onbellek"),
                 "motor_onbellek.sqlite"),
    _ONB_TUZ, acik=os.environ.get("MOTOR_ONBELLEK_KAPALI") != "1")

_OZ_ONB = {}


def _oz(g):
    """Geometrinin içerik özeti (WKB sha256) — `uret_petek._onb_oz` ile aynı
    desen: nesne sözlükte CANLI tutulur ki `id()` yeniden kullanılıp YANLIŞ
    özet dönmesin."""
    k = id(g)
    v = _OZ_ONB.get(k)
    if v is None or v[0] is not g:
        ham = (b"BOS" if g is None or g.is_empty
               else shapely.to_wkb(g, output_dimension=2))
        v = (g, _hlo.sha256(ham).hexdigest())
        _OZ_ONB[k] = v
    return v[1]


def _km_derece(lat):
    """Bir boylam derecesinin o enlemdeki km karşılığı."""
    return 111.32 * max(0.15, math.cos(math.radians(lat)))


def _derece(km, lat):
    return km / _km_derece(lat)


def _km2(g):
    """Kaba alan (km²) — enlem düzeltmeli. Tam eşalan izdüşümü DEĞİL;
    yalnız eşik karşılaştırması için, ve eşik de kaba."""
    if g.is_empty:
        return 0.0
    lat = g.centroid.y
    return abs(g.area) * 111.32 * _km_derece(lat)


def _parcalar(g):
    if g.is_empty:
        return []
    if isinstance(g, Polygon):
        return [g]
    return [p for p in getattr(g, "geoms", []) if isinstance(p, Polygon)
            and not p.is_empty]


def _temiz(g):
    """Geçersiz geometriyi sessizce değil, GÖRÜNÜR biçimde onarır."""
    if g is None or g.is_empty:
        return Polygon()
    if not g.is_valid:
        g = g.buffer(0)
    return g


# ═══════════════════════════════════════════════════════════════════════════
# ① TALEP — her devletin kapanışından kendi dolgu isteği
# ═══════════════════════════════════════════════════════════════════════════
class KaraIndeks(object):
    """Kara maskesini PARÇA PARÇA indeksler ve yalnız gerekeni keser.

    🔴 BU SINIF BİR ÖLÇÜMDEN DOĞDU, tasarımdan değil. İlk hâl dolgu talebini
       doğrudan bütün dünya karasıyla kesiyordu (`t.intersection(KARA)`).
       Sınav: 3 kesitlik dar dilim **6,5 dakikada tek satır bile basamadı**;
       süreç %60 CPU yakıyor, bellek 100 MB'de duruyordu — yani JSON'da
       değil GEOMETRİDE takılmıştı. Kara maskesi dünyanın bütün kıyısıdır
       (~6 MB); her gövde için bir kez, her kesitte ~40 gövde ⇒ kesit başına
       40 dünya çapında kesişim.
    ⇒ Çare indeks: kara bir kez parçalarına ayrılır, STRtree'ye konur, ve
      bir talep yalnız KENDİ KUTUSUNA düşen parçalarla kesilir. Aynı sonuç,
      ölçülebilir biçimde ucuz.
    ⚠️ "Aynı sonuç" bir iddia değil YAPISAL: kutusuna değmeyen bir parça
       kesişime hiçbir şey katamaz.
    """

    def __init__(self, kara):
        from shapely import STRtree
        self.parcalar = _parcalar(kara) or [kara]
        self.agac = STRtree(self.parcalar)
        # Koşular arası önbelleğin anahtarına giren KARA/GÖL sürümü.
        # Maske değişirse (yeni göl, yeni kıyı) bütün dolgu anahtarları
        # değişir ⇒ tam yeniden hesap, kendiliğinden.
        self.oz = _oz(kara)

    def kes(self, g):
        if g.is_empty:
            return g
        try:
            ix = self.agac.query(g)
        except Exception:
            return g
        if len(ix) == 0:
            return Polygon()
        try:
            yerel = unary_union([self.parcalar[int(q)] for q in ix])
            return _temiz(g.intersection(yerel))
        except Exception:
            return Polygon()


def _talep(g, kara_hazir, kara, r_km):
    """Bir gövdenin morfolojik kapanışından A'nın kendisi çıkarılmış hâli.

    Kara maskesi BURADA uygulanır: kapanış bir körfezi ya da boğazı
    kapatabilir, ve denizi boyamak boşluğu doldurmaktan daha kötü bir
    kusurdur (Emre'nin "iki gösterim birbirine girmeyecek" kuralı).
    """
    if g.is_empty:
        return Polygon()
    r = _derece(r_km, g.centroid.y)
    # 🔴 KABA HÂLİ ÜZERİNDE TAMPONLA — ve bu bir hız hilesi DEĞİL, ölçülmüş
    #    bir zorunluluk. Sınav (3 kesitlik dar dilim, 20 Eylül): ham gövdeler
    #    üzerinde tamponlama İLK KESİTİ BİLE bitiremedi (4 dakikada tek satır
    #    yok). Sebep basit: kapanış 120 km ölçeğinde bir işlemdir, gövdeler
    #    ise kıyıyı metre metre izleyen on binlerce köşe taşır — tampon o
    #    köşelerin HER BİRİ için yay üretir.
    # ⚠️ NİÇİN SONUCU BOZMAZ, yapısal olarak: kaba hat yalnız TAMPONU
    #    besliyor. Çıkarma (`difference(g)` ve aşağıda `difference(a_hep)`)
    #    HAM gövdelerle yapılıyor ⇒ sadeleştirmenin dışa taştığı hiçbir
    #    yer A'nın üstünde kalamaz. Eksik kalabilir (içe kaçmışsa), fazla
    #    OLAMAZ — ve dolgunun A'yı örtmemesi bu işin kırmızı çizgisiydi.
    kaba = g
    if KABA_TOL > 0:
        try:
            kaba = _temiz(g.simplify(KABA_TOL, preserve_topology=True))
            if kaba.is_empty:
                kaba = g
        except Exception:
            kaba = g
    try:
        kap = kaba.buffer(r, quad_segs=2, join_style=1).buffer(
            -r, quad_segs=2, join_style=1)
    except Exception:
        return Polygon()
    kap = _temiz(kap)
    if kap.is_empty:
        return Polygon()
    t = _temiz(kap.difference(g))
    if t.is_empty:
        return Polygon()
    if kara_hazir is not None:
        # `kara_hazir` = KaraIndeks. Dünya çapında kesişim YOK — yalnız
        # talebin kutusuna düşen kara parçaları (bkz. KaraIndeks gerekçesi).
        t = kara_hazir.kes(t)
    elif kara is not None:
        t = _temiz(t.intersection(kara))
    return t


# ═══════════════════════════════════════════════════════════════════════════
# ② PAYLAŞIM — birden çok devletin istediği alan
# ═══════════════════════════════════════════════════════════════════════════
def _paylas(alan, adaylar):
    """`alan`ı, `adaylar` = [(kim, govde), ...] arasında EN YAKIN GÖVDE
    ölçütüyle böler.

    🔴 NİÇİN VORONOI, NİÇİN "merkeze en yakın" DEĞİL: çekişmeli bir şerit
    iki devletin arasında uzanır; merkezine bakıp tümünü birine vermek,
    şeridin öbür ucunu yanlış devlete yazar. Ölçüt her NOKTA için ayrı
    sorulmalı — sınır noktalarının Voronoi'si bunu ucuza verir ve motorun
    kendi petek mantığıyla da aynı cümledir ("en yakın sahibe düşer").

    Döner: [(kim, parça)] — boş liste, bölünemediyse.
    """
    if len(adaylar) == 1:
        return [(adaylar[0][0], alan)]
    lat = alan.centroid.y
    adim = _derece(PAYLASIM_ADIM_KM, lat)
    cevre = alan.buffer(_derece(YARICAP_KM, lat))
    pts, sahip = [], []
    for kim, g in adaylar:
        try:
            hat = g.boundary.intersection(cevre)
        except Exception:
            continue
        if hat.is_empty:
            continue
        hatlar = list(getattr(hat, "geoms", [hat]))
        for h in hatlar:
            uz = getattr(h, "length", 0.0)
            if uz <= 0:
                continue
            n = max(1, min(PAYLASIM_NOKTA_TAVAN, int(uz / adim) + 1))
            for i in range(n + 1):
                p = h.interpolate(i / float(n), normalized=True)
                pts.append(p)
                sahip.append(kim)
    if len(set(sahip)) < 2:
        # Ölçemedik ⇒ EN YAKIN GÖVDEYE ver (tek cümlelik, belirlenimli geri düşüş).
        en = min(adaylar, key=lambda kg: kg[1].distance(alan))
        return [(en[0], alan)]
    try:
        # `uret_petek.py` ile AYNI çağrı biçimi (:1909) — bu depoda sınanmış
        # olan budur; `shapely.voronoi_polygons` üst düzey işlevi DEĞİL.
        hucreler = [h for h in voronoi_diagram(
            MultiPoint(pts), envelope=alan.envelope).geoms
            if isinstance(h, Polygon)]
    except Exception:
        en = min(adaylar, key=lambda kg: kg[1].distance(alan))
        return [(en[0], alan)]
    kova = {}
    for h in hucreler:
        # Hücre sırası girdiyle AYNI DEĞİLDİR (shapely sözleşmesi) — hücrenin
        # hangi noktayı içerdiği AYRICA sorulur. Sessiz eşleştirme yapılmaz.
        sahibi = None
        for p, kim in zip(pts, sahip):
            if h.covers(p):
                sahibi = kim
                break
        if sahibi is None:
            continue
        kova.setdefault(sahibi, []).append(h)
    if not kova:
        en = min(adaylar, key=lambda kg: kg[1].distance(alan))
        return [(en[0], alan)]
    out = []
    for kim, hs in kova.items():
        try:
            par = _temiz(unary_union(hs).intersection(alan))
        except Exception:
            continue
        if not par.is_empty:
            out.append((kim, par))
    return out or [(min(adaylar, key=lambda kg: kg[1].distance(alan))[0], alan)]


# ═══════════════════════════════════════════════════════════════════════════
# ③ CİNS — B-2: her parça ne tür bir dolgu?
# ═══════════════════════════════════════════════════════════════════════════
def _cins(parca, govde, a_tampon):
    """`bosluk` · `koridor` · `enklav-bag`. (`paylasim` çağıran tarafta.)

    AĞIZ = parçanın sınırının, hiçbir A toprağına DEĞMEYEN bölümü; yani
    parçanın "açık denize / boş dünyaya bakan" yüzü.
      ağız yok   → parça kapalı bir cep. İki ayrı gövde parçasını
                   birleştiriyorsa `enklav-bag`, değilse `bosluk`.
      ağız var   → girinti. Emre'nin ölçütü: *"koridorun DERİNLİĞİ
                   GENİŞLİĞİNİ GEÇMEYECEK"* ⇒ derinlik > ağız genişliği
                   olan girinti KORİDOR'dur.
    """
    try:
        agiz = parca.boundary.difference(a_tampon)
    except Exception:
        agiz = None
    agiz_uz = getattr(agiz, "length", 0.0) if agiz is not None else 0.0
    lat = parca.centroid.y
    if agiz_uz * _km_derece(lat) < 1.0:        # 1 km'den kısa ağız = yok sayılır
        try:
            once = len(_parcalar(govde))
            sonra = len(_parcalar(_temiz(unary_union([govde, parca]))))
        except Exception:
            once = sonra = 0
        if once and sonra < once:
            return "enklav-bag"
        return "bosluk"
    # Derinlik: parçanın ağızdan en uzak noktası.
    try:
        derin = max(agiz.distance(Polygon(parca.exterior).representative_point()),
                    max((agiz.distance(parca.exterior.interpolate(
                        i / 24.0, normalized=True)) for i in range(25)),
                        default=0.0))
    except Exception:
        derin = 0.0
    if derin > agiz_uz:
        return "koridor"
    return "bosluk"


# ═══════════════════════════════════════════════════════════════════════════
# ④ KESİT — B-1'in çekirdeği
# ═══════════════════════════════════════════════════════════════════════════
def kesit_dolgu(govdeler, kara=None, kara_hazir=None, r_km=None):
    """Bir kesitteki (tek tarih) bütün A gövdelerinden dolgu parçaları üretir.

    govdeler : [(kim, shapely geometrisi)] — kim = devlet kimliği (boya anahtarı)
    Döner    : (parcalar, rapor)
        parcalar = [{"kim":…, "cins":…, "g": geometri}]
        rapor    = {"engellendi": [(kim, km2)], "talep_km2": …, "yazilan_km2": …}
    """
    r_km = YARICAP_KM if r_km is None else r_km
    # Girdi ikili (kim, g) ya da üçlü (kim, g, önbellek_anahtarı) olabilir.
    _gir = [(x[0], _temiz(x[1]), (x[2] if len(x) > 2 else None))
            for x in govdeler]
    _gir = [x for x in _gir if not x[1].is_empty]
    # 🔴 KANONİK SIRA — önbellekten okunan ile yeniden hesaplananın BİT BİT
    #    aynı olması bu satıra bağlı (bkz. KURAL_SURUM başlığı).
    _gir.sort(key=lambda x: (x[0], _oz(x[1])))
    govdeler = [(k, g) for k, g, _a in _gir]
    anahtarlar = [a for _k, _g, a in _gir]
    # 🔴 SÜRE ÜÇ KOVAYA AYRI AYRI YAZILIR. Sebebi bir hata: "sürenin %99'u
    #    kapanıştır" diye yazmıştım, ölçüm çürüttü (gerçek ~%10). Toplam
    #    süre hangi adımın pahalı olduğunu SÖYLEMİYOR; ayrı ayrı ölçülmeyen
    #    bir maliyet, yanlış yere yapılan bir iyileştirme demektir.
    rapor = {"engellendi": [], "talep_km2": 0.0, "yazilan_km2": 0.0,
             "cekismeli_km2": 0.0,
             "sn_kapanis": 0.0, "sn_cekisme": 0.0, "sn_cins": 0.0}
    if not govdeler:
        return [], rapor

    # ── KOŞULAR ARASI ÖNBELLEK ②: bütün kesit ──────────────────────────
    # Anahtar KESİTTEKİ HER GÖVDEYİ taşır (kim + içerik özeti, sıralı) —
    # paylaşım ve engelleme komşulara baktığı için kapsam bu olmak zorunda.
    _kara_oz = getattr(kara_hazir, "oz", "kara-yok")
    _kesit_an = _ONB.anahtar(
        "dolgu2_kesit", _kara_oz, "%.4f" % r_km,
        "|".join("%s=%s" % (k, _oz(g)) for k, g in govdeler))
    _var, _deger = _ONB.oku("dolgu2_kesit", _kesit_an)
    if _var:
        _p, _r = _deger
        return _p, _r

    # 🔴 `a_hep` (bütün dünyanın o günkü sahipli toprağı) ARTIK TEK PARÇA
    #    OLARAK KULLANILMIYOR — ve sebebi ölçüldü, tahmin edilmedi:
    #    `a_hep.difference(g)` her gövde için bir kez koşuyordu ve shapely
    #    **`GEOSException: bad allocation`** ile düştü (20 Eylül, 3 kesitlik
    #    dar dilim, kesit 1'de 40+ gövde). Yani kusur yavaşlık değil, ÇÖKME.
    # ⇒ Aynı sorunun aynı çaresi: İNDEKS. Gövdeler bir STRtree'ye konur;
    #   bir talep yalnız KENDİ KUTUSUNA değen gövdelerle karşılaştırılır.
    #   Sonuç birebir aynıdır — kutusuna değmeyen gövde ne engelleyebilir
    #   ne de çıkarılacak bir şey katabilir.
    from shapely import STRtree
    _g_liste = [g for _, g in govdeler]
    _g_agac = STRtree(_g_liste)

    # 🔴 KOMŞU BİRLEŞİMİ EZBERLENİR. Ölçüldü (20 Eylül, adım adım karne):
    #    `cins` adımı kesit başına ~200 sn yiyordu ve içinde 635 parça için
    #    635 ayrı `unary_union` vardı. Oysa yan yana duran parçaların KOMŞU
    #    KÜMESİ çoğu zaman AYNIDIR — birleşim de aynı. Anahtar komşu indeks
    #    demeti; aynı demet ikinci kez birleştirilmez.
    _yakin_onb = {}

    def _yakin(alan, haric_ix=None):
        """`alan`ın kutusuna değen gövdelerin birleşimi (kendisi hariç)."""
        try:
            ix = [int(q) for q in _g_agac.query(alan)]
        except Exception:
            ix = list(range(len(_g_liste)))
        ix = tuple(sorted(q for q in ix if q != haric_ix))
        if not ix:
            return Polygon()
        v = _yakin_onb.get(ix)
        if v is None:
            try:
                v = _temiz(unary_union([_g_liste[q] for q in ix]))
            except Exception:
                v = Polygon()
            _yakin_onb[ix] = v
        return v

    talepler = []
    for _ix, (kim, g) in enumerate(govdeler):
        # 🔴 YAVAŞ GÖVDE SESSİZ KALMAZ. Bu işin ilk sınavı "hangi adımda
        #    takıldığı" bilinmediği için iki kez boşa koştu; artık eşiği aşan
        #    her gövde ADIYLA basılıyor. Ölçülemeyen yavaşlık, düzeltilemez.
        _an = anahtarlar[_ix]
        _TALEP_SAYAC["istek"] += 1
        t = _TALEP_ONB.get(_an) if _an is not None else None
        if t is not None:
            _TALEP_SAYAC["isabet"] += 1          # süreç içi (aynı koşu)
        else:
            # ── KOŞULAR ARASI ÖNBELLEK ①: tek gövdenin kapanışı ────────
            # Kapanış komşuya BAKMAZ ⇒ anahtarında komşu YOK. Bir devletin
            # gövdesi değişirse yalnız onun kapanışı ıskalar; ötekiler
            # bütün koşular boyunca isabet eder. Emre'nin lego ilkesinin
            # süreyi taşıyan yarısı budur.
            _tan = _ONB.anahtar("dolgu2_talep", _kara_oz, "%.4f" % r_km, _oz(g))
            _v, _t = _ONB.oku("dolgu2_talep", _tan)
            if _v:
                t = _t
            else:
                _tb = time.time()
                t = _talep(g, kara_hazir, kara, r_km)
                _gec = time.time() - _tb
                rapor["sn_kapanis"] += _gec
                if _gec > 4.0:
                    print("      [yavas] %-28s %.1f sn (kapanis)" % (kim, _gec),
                          flush=True)
                _ONB.yaz("dolgu2_talep", _tan, t)
            if _an is not None:
                _TALEP_ONB[_an] = t
                _TALEP_SIRA.append(_an)
                while len(_TALEP_SIRA) > _TALEP_TAVAN:
                    _TALEP_ONB.pop(_TALEP_SIRA.pop(0), None)
        if t.is_empty:
            continue
        # 🔴 ENKLAV KURALI: BÜTÜN devletlerin A toprağı çıkarılır. Kapanışın
        #    başka devletin toprağına denk gelen bölümü DOLGU OLMAZ; orada
        #    köprü kurulmadığı için parça gerçek enklav olarak raporlanır.
        _oteki = _yakin(t, _ix)
        if not _oteki.is_empty:
            engel = _temiz(t.intersection(_oteki))
            if not engel.is_empty:
                km2 = _km2(engel)
                if km2 >= ESIK_KM2:
                    rapor["engellendi"].append((kim, round(km2, 1)))
            t = _temiz(t.difference(_oteki))
        if t.is_empty:
            continue
        rapor["talep_km2"] += _km2(t)
        talepler.append((kim, g, t))

    if not talepler:
        return [], rapor

    # ── ÇEKİŞME: aynı alanı birden çok devlet istiyor mu? ───────────────
    # 🔴 BU DÖNGÜ O(n²) İDİ ve ÖLÇÜM onu kusurun ASIL yeri olarak gösterdi.
    #    Koşu C (20 Eylül): kapanışların %97,7'si önbellekten geldiği hâlde
    #    kesit HÂLÂ 257 sn sürdü. Yani daha önce yazdığım "sürenin %99'u
    #    kapanıştır" hükmü ÇÜRÜDÜ — kapanış kesitin ancak ~%10'uymuş.
    #    Kalanı buydu: 234 talep × 234 talep = 54.756 çift, her biri için
    #    `envelope.intersects` ve çoğu için gerçek `intersection`.
    # ⇒ Aynı ailenin aynı çaresi (KaraIndeks · gövde ağacı): İNDEKS.
    #   Bir talep yalnız KENDİ KUTUSUNA değen taleplerle karşılaştırılır.
    #   Sonuç birebir aynı — kutusu değmeyen talep zaten kesişemezdi, eski
    #   döngü de onu `envelope.intersects` ile eliyordu.
    _t_liste = [t for _k, _g, t in talepler]
    _t_agac = STRtree(_t_liste)
    _sn_c = time.time()
    atamalar = []       # (kim, geometri, cins_zorla)
    for i, (kim, g, t) in enumerate(talepler):
        ozel = t
        cekisme = []
        try:
            _komsu = [int(q) for q in _t_agac.query(t) if int(q) != i]
        except Exception:
            _komsu = [j for j in range(len(talepler)) if j != i]
        _cik = []
        for j in _komsu:
            kim2, g2, t2 = talepler[j]
            ort = _temiz(t.intersection(t2))
            if ort.is_empty or _km2(ort) < ESIK_KM2:
                continue
            cekisme.append((kim2, g2, ort))
            _cik.append(t2)
        # 🔴 TEK ÇIKARMA, k tane değil. Eskiden her çekişen komşu için ayrı
        #    `ozel = ozel.difference(t2)` koşuyordu; her adım yeni bir
        #    geometri kuruyor ve bir sonrakine girdi oluyordu. Birleşimi bir
        #    kez alıp BİR KEZ çıkarmak aynı sonucu verir (küme cebiri:
        #    A−B−C = A−(B∪C)) ve ara geometrileri hiç kurmaz.
        if _cik:
            try:
                ozel = _temiz(ozel.difference(unary_union(_cik)))
            except Exception:
                for _x in _cik:
                    ozel = _temiz(ozel.difference(_x))
        if not ozel.is_empty:
            atamalar.append((kim, g, ozel, None))
        for kim2, g2, ort in cekisme:
            if kim2 < kim:
                continue            # her çift BİR KEZ işlensin (belirlenim)
            rapor["cekismeli_km2"] += _km2(ort)
            for k3, par in _paylas(ort, [(kim, g), (kim2, g2)]):
                if not par.is_empty:
                    g3 = g if k3 == kim else g2
                    atamalar.append((k3, g3, par, "paylasim"))

    rapor["sn_cekisme"] = time.time() - _sn_c
    _sn_k = time.time()
    parcalar = []
    for kim, g, alan, zorla in atamalar:
        for p in _parcalar(alan):
            if _km2(p) < ESIK_KM2:
                continue
            p2 = _temiz(p.simplify(SADE_TOL, preserve_topology=True))
            if p2.is_empty:
                continue
            # `_cins` AĞIZ ölçüyor: parçanın hiçbir A toprağına değmeyen yüzü.
            # Tampon PARÇA ÖLÇEĞİNDE kurulur (dünya ölçeğinde değil) — aynı
            # cevap, `bad allocation` riski yok.
            c = zorla or _cins(p, g, _temiz(_yakin(p).union(g).buffer(TEMAS)))
            rapor["yazilan_km2"] += _km2(p2)
            parcalar.append({"kim": kim, "cins": c, "g": p2})
    rapor["sn_cins"] = time.time() - _sn_k
    # Kesit sonucu koşular arası önbelleğe. Değer pickle'dır ⇒ shapely
    # geometrisi WKB olarak birebir geri döner (`motor_onbellek` sözleşmesi:
    # "okunan sonuç hesaplananla BİT BİT aynı").
    _ONB.yaz("dolgu2_kesit", _kesit_an, (parcalar, rapor))
    return parcalar, rapor


# ═══════════════════════════════════════════════════════════════════════════
# ⑤ HAVUZLAMA — A ile BİREBİR AYNI iki kademeli şema (js/app.js parcaCoz)
# ═══════════════════════════════════════════════════════════════════════════
def _halka_koord(p, ondalik=5):
    def h(cs):
        out, son = [], None
        for x, y in cs:
            k = [round(x, ondalik), round(y, ondalik)]
            if k != son:
                out.append(k)
            son = k
        return out
    return [h(p.exterior.coords)] + [h(i.coords) for i in p.interiors]


class Havuz(object):
    """`uret_petek.py` `havuza()` ile aynı sözleşme: halka havuzu + parça
    havuzu. `js/app.js` `parcaCoz` bu ikisini bekler — "ya tam ya hiç"."""

    def __init__(self):
        self.halka, self.halka_ix = [], {}
        self.parca, self.parca_ix = [], {}

    def ekle(self, p):
        ks = []
        for halka in _halka_koord(p):
            k = json.dumps(halka, separators=(",", ":"))
            j = self.halka_ix.get(k)
            if j is None:
                j = len(self.halka)
                self.halka.append(halka)
                self.halka_ix[k] = j
            ks.append(j)
        pk = json.dumps(ks, separators=(",", ":"))
        j = self.parca_ix.get(pk)
        if j is None:
            j = len(self.parca)
            self.parca.append(ks)
            self.parca_ix[pk] = j
        return j


def js_yaz(yol, kayitlar, havuz, izi=None, ek_yorum=""):
    """data/dolgu.js — ad alanı `window.DOLGU_*` (D225: dosya verilirken
    değişken adı da verilir)."""
    s = ("// Otomatik üretildi — elle düzenlemeyin. Betik: arac/dolgu.py\n"
         "// B GÖRÜNÜMÜ dolgu katmanı: A'nın ÜSTÜNE çizilen boşluk/koridor/\n"
         "// enklav bağı/paylaşım parçaları. A'ya HİÇ DOKUNULMAZ.\n"
         "// DOLGU[].p, DOLGU_PARCA_HALKA havuzuna indekstir; o da\n"
         "// DOLGU_PARCALAR (halka havuzu) indeksleri taşır — donemler.js ile\n"
         "// AYNI şema, js/app.js parcaCoz birebir çözer.\n"
         "// cins: bosluk · koridor · enklav-bag · paylasim\n")
    if ek_yorum:
        s += ek_yorum
    s += ("window.DOLGU_PARCALAR = "
          + json.dumps(havuz.halka, separators=(",", ":")) + ";\n")
    s += ("window.DOLGU_PARCA_HALKA = "
          + json.dumps(havuz.parca, separators=(",", ":")) + ";\n")
    s += ("window.DOLGU = "
          + json.dumps(kayitlar, ensure_ascii=False,
                       separators=(",", ":")) + ";\n")
    if izi is not None:
        s += ("window.DOLGU_IZI = "
              + json.dumps(izi, separators=(",", ":"), sort_keys=True) + ";\n")
    io.open(yol, "w", encoding="utf-8").write(s)
    return os.path.getsize(yol)


# ═══════════════════════════════════════════════════════════════════════════
# ⑥ KOŞU İÇİNDEN ÇAĞRI — Emre'nin "TEK KOŞU" şartı
# ═══════════════════════════════════════════════════════════════════════════
def kosudan(araliklar, kara, cikti, ilerleme=None, kesit_sinir=0):
    """`uret_petek.py` A çıktısını yazdıktan SONRA bunu çağırır.

    araliklar : [(f, t, kim, geometri)] — A'nın BELLEKTEKİ gövdeleri.
                Dosyadan okumaz: aynı koşudur, geometri zaten elde.
    🔴 A'YA HİÇ DOKUNMAZ: girdi salt okunur, çıktı AYRI dosyadır. Bu işlev
       patlasa bile A yazılmıştır (çağıran tarafta try/except — `gosterim_
       duzelt`in "süs patlarsa koşuyu öldürmesin" deseninin aynısı).
    Döner: (kayit_sayisi, dosya_boyutu, cins_sayac, sure)
    """
    t0 = time.time()
    kara_hazir = KaraIndeks(kara) if kara is not None else None
    tarihler = sorted({a[0] for a in araliklar})
    if kesit_sinir:
        tarihler = tarihler[:kesit_sinir]
    havuz, kayitlar = Havuz(), []
    cins_sayac = {c: 0 for c in CINSLER}
    onceki_imza, onceki_ilk = None, 0
    for n, a in enumerate(tarihler, 1):
        # Önbellek anahtarı = aralık indeksi (bkz. `_TALEP_ONB` başlığı).
        govdeler = [(kim, g, _ai) for _ai, (f, t, kim, g)
                    in enumerate(araliklar) if f <= a < t]
        parcalar, _rapor = kesit_dolgu(govdeler, kara, kara_hazir)
        bitis = tarihler[n] if n < len(tarihler) else "9999-12-31"
        yeni = [{"f": a, "t": bitis, "k": pc["kim"], "c": pc["cins"],
                 "p": [havuz.ekle(x) for x in _parcalar(pc["g"])]}
                for pc in parcalar]
        imza = tuple(sorted((r["k"], r["c"], tuple(r["p"])) for r in yeni))
        if imza and imza == onceki_imza:
            for r in kayitlar[onceki_ilk:]:
                r["t"] = bitis
        else:
            onceki_imza, onceki_ilk = imza, len(kayitlar)
            kayitlar.extend(yeni)
            for pc in parcalar:
                cins_sayac[pc["cins"]] = cins_sayac.get(pc["cins"], 0) + 1
        if ilerleme is not None:
            ilerleme(n, len(tarihler), a, len(parcalar))
    boy = js_yaz(cikti, kayitlar, havuz,
                 izi={"yaricap_km": YARICAP_KM, "esik_km2": ESIK_KM2,
                      "kesit": len(tarihler)})
    return len(kayitlar), boy, cins_sayac, time.time() - t0


# ═══════════════════════════════════════════════════════════════════════════
# ⑦ TEK BAŞINA KOŞU — dar dilim sınavı (B-4). A'YA HİÇ DOKUNMAZ.
# ═══════════════════════════════════════════════════════════════════════════
def _js_oku(yol, adlar):
    """`window.AD = <json>;` satırlarını okur. Dosyalar 60–75 MB; satır satır
    okunur ki bütün dosya iki kez bellekte durmasın."""
    bulunan = {}
    with io.open(yol, "r", encoding="utf-8") as f:
        for satir in f:
            for ad in adlar:
                onek = "window." + ad + " = "
                if satir.startswith(onek):
                    bulunan[ad] = json.loads(satir[len(onek):].rstrip()[:-1])
    eksik = [a for a in adlar if a not in bulunan]
    if eksik:
        raise SystemExit("EKSİK: %s → %s" % (", ".join(eksik), yol))
    return bulunan


def _coz(idx_dizi, halka, parca_halka):
    """`parcaCoz`un Python karşılığı -> shapely geometri."""
    ps = []
    for p in idx_dizi or []:
        if not isinstance(p, int):
            continue
        ph = parca_halka[p]
        dis = halka[ph[0]]
        icler = [halka[h] for h in ph[1:]]
        try:
            poly = Polygon(dis, icler)
        except Exception:
            continue
        if not poly.is_valid:
            poly = poly.buffer(0)
        if not poly.is_empty:
            ps.append(poly)
    if not ps:
        return Polygon()
    return _temiz(unary_union(ps))


def _kara_yukle():
    """Kara maskesi — `uret_petek.py` ile AYNI kaynak ve AYNI iki adım
    (ne_10m_land − ne_10m_lakes). Önbelleğe alınır: dar dilim sınavı
    tekrar tekrar koşacak."""
    import pickle
    onb_dizin = (os.environ.get("MOTOR_ONBELLEK_DIZIN")
                 or os.path.join(KOK, ".onbellek"))
    try:
        os.makedirs(onb_dizin, exist_ok=True)
    except Exception:
        pass
    onb = os.path.join(onb_dizin, "dolgu_kara.pkl")
    if os.path.exists(onb):
        try:
            with open(onb, "rb") as f:
                return pickle.load(f)
        except Exception:
            pass
    from shapely.geometry import box
    bolge = box(-180, -60, 180, 85)
    with io.open(os.path.join(BASEMAPS, "ne_10m_land.geojson"),
                 "r", encoding="utf-8") as f:
        gj = json.load(f)
    kara = unary_union([shape(x["geometry"]).buffer(0).intersection(bolge)
                        for x in gj["features"]])
    kara = kara.buffer(0).simplify(0.002, preserve_topology=True).buffer(0)
    try:
        with io.open(os.path.join(BASEMAPS, "ne_10m_lakes.geojson"),
                     "r", encoding="utf-8") as f:
            gl = json.load(f)
        goller = unary_union([shape(x["geometry"]).buffer(0)
                              for x in gl["features"]])
        goller = goller.buffer(0).simplify(0.01, preserve_topology=True).buffer(0)
        kara = _temiz(kara.difference(goller))
    except Exception as e:
        print("  UYARI göller çıkarılamadı:", e)
    try:
        with open(onb, "wb") as f:
            pickle.dump(kara, f, protocol=4)
    except Exception:
        pass
    return kara


def _kesitler():
    """Yazılmış A çıktısından kesit listesi: her tarihte hangi devletin
    hangi gövdesi canlı. A DOSYALARI YALNIZ OKUNUR."""
    d = _js_oku(os.path.join(KOK, "data", "donemler.js"),
                ["DONEMLER", "PARCALAR", "PARCA_HALKA"])
    y = _js_oku(os.path.join(KOK, "data", "devletler_harita.js"),
                ["DEVLET_HARITA", "DEVLET_PARCALAR", "DEVLET_PARCA_HALKA"])
    # (tarih) → [(kim, kaynak, idx_dizi)]
    araliklar = []
    for r in d["DONEMLER"]:
        idx = (r.get("o") or []) + (r.get("v") or [])
        if idx:
            araliklar.append((r["f"], r["t"], "OSMANLI", "o", idx))
    for dev in y["DEVLET_HARITA"]:
        for p in dev.get("dnm", []):
            if p.get("g"):
                araliklar.append((p["f"], p["t"], dev["id"], "y", p["g"]))
    tarihler = sorted({a[0] for a in araliklar})
    return araliklar, tarihler, d, y


def _ana():
    t0 = time.time()
    sinir = int(os.environ.get("MOTOR_DOLGU_KESIT", "0") or "0")
    cikti = os.environ.get("MOTOR_DOLGU_CIKTI") or os.path.join(
        KOK, "data", "dolgu.js")
    print("B GÖRÜNÜMÜ dolgu — yarıçap %.0f km · eşik %.0f km² · kesit sınırı %s"
          % (YARICAP_KM, ESIK_KM2, sinir or "yok"))

    print("  kara maskesi yükleniyor…", flush=True)
    kara = _kara_yukle()
    kara_hazir = KaraIndeks(kara)
    print("    kara + STRtree indeksi hazır: %d parça (%.1f sn)"
          % (len(kara_hazir.parcalar), time.time() - t0), flush=True)

    print("  A çıktısı okunuyor (donemler.js + devletler_harita.js)…", flush=True)
    t1 = time.time()
    araliklar, tarihler, d, y = _kesitler()
    print("    %d aralık · %d kesit tarihi (%.1f sn)"
          % (len(araliklar), len(tarihler), time.time() - t1), flush=True)

    if sinir:
        tarihler = tarihler[:sinir]

    havuz = Havuz()
    kayitlar = []
    cins_sayac = {c: 0 for c in CINSLER}
    engel_top, sure_top, olcum = 0, 0.0, []
    engelli = []          # (tarih, kim, km2) — "gerçek enklav, incelenecek"
    # Dönem birleştirme: ardışık kesitte dolgu BİREBİR aynıysa yeni kayıt
    # açılmaz, öncekinin `t`si uzatılır — `donemler.js`in kendi deseni.
    onceki_imza, onceki_ilk = None, 0
    for n, a in enumerate(tarihler, 1):
        t2 = time.time()
        # 🔴 ÖNBELLEK ANAHTARI = ARALIK İNDEKSİ. Aynı devletin aynı dönemi
        #    ortalama 99 kesitte canlıdır; geometrisi de kapanışı da o 99
        #    kesitte BİREBİR aynıdır (bkz. _TALEP_ONB başlığındaki ölçüm).
        canli = {}
        for _ai, (f, t, kim, kaynak, idx) in enumerate(araliklar):
            if f <= a < t:
                canli.setdefault((kim, kaynak), [[], []])
                canli[(kim, kaynak)][0].extend(idx)
                canli[(kim, kaynak)][1].append(_ai)
        govdeler = []
        for (kim, kaynak), (idx, ailer) in canli.items():
            _an = (kim, tuple(ailer))
            g = _GEO_ONB.get(_an)
            if g is None:
                if kaynak == "o":
                    g = _coz(idx, d["PARCALAR"], d["PARCA_HALKA"])
                else:
                    g = _coz(idx, y["DEVLET_PARCALAR"], y["DEVLET_PARCA_HALKA"])
                _GEO_ONB[_an] = g
                _GEO_SIRA.append(_an)
                while len(_GEO_SIRA) > _TALEP_TAVAN:
                    _GEO_ONB.pop(_GEO_SIRA.pop(0), None)
            if not g.is_empty:
                govdeler.append((kim, g, _an))
        # 🔴 SINAV DÜĞMESİ — "bir yerleşimin sahipliği değişti"nin vekili.
        #    Motoru koşturmadan geçersizleşmeyi ölçmenin tek yolu: bir
        #    devletin gövdesini KASTEN oynatmak. ~0,001° ≈ 100 m — haritada
        #    görünmez, ama WKB'si (yani önbellek anahtarı) DEĞİŞİR.
        #    Ölçülen soru: bu tek değişiklik kaç kesiti ve kaç gövdeyi
        #    yeniden hesaplatıyor? Üretimde KULLANILMAZ.
        if _SINA_KAYDIR:
            govdeler = [((k, _temiz(g.buffer(0.001)), an) if k == _SINA_KAYDIR
                         else (k, g, an)) for k, g, an in govdeler]
        parcalar, rapor = kesit_dolgu(govdeler, kara, kara_hazir)
        sure = time.time() - t2
        sure_top += sure
        engel_top += len(rapor["engellendi"])
        for kim, km2 in rapor["engellendi"]:
            engelli.append((a, kim, km2))
        olcum.append((a, len(govdeler), len(parcalar), round(sure, 2)))
        bitis = tarihler[n] if n < len(tarihler) else "9999-12-31"
        yeni = []
        for pc in parcalar:
            yeni.append({"f": a, "t": bitis, "k": pc["kim"], "c": pc["cins"],
                         "p": [havuz.ekle(x) for x in _parcalar(pc["g"])]})
        imza = tuple(sorted((r["k"], r["c"], tuple(r["p"])) for r in yeni))
        if imza and imza == onceki_imza:
            for r in kayitlar[onceki_ilk:]:
                r["t"] = bitis                      # dönemi uzat, kayıt açma
        else:
            onceki_imza, onceki_ilk = imza, len(kayitlar)
            kayitlar.extend(yeni)
            for pc in parcalar:
                cins_sayac[pc["cins"]] = cins_sayac.get(pc["cins"], 0) + 1
        print("    %3d/%d  %s  gövde %3d -> dolgu %3d parça · engellenen %d "
              "· %.1f sn (kapanış %.0f · çekişme %.0f · cins %.0f)"
              % (n, len(tarihler), a, len(govdeler), len(parcalar),
                 len(rapor["engellendi"]), sure, rapor.get("sn_kapanis", 0),
                 rapor.get("sn_cekisme", 0), rapor.get("sn_cins", 0)),
              flush=True)

    boy = js_yaz(cikti, kayitlar, havuz,
                 izi={"yaricap_km": YARICAP_KM, "esik_km2": ESIK_KM2,
                      "kesit": len(tarihler)})
    print("\n--- B-4 MALİYET ÖLÇÜMÜ ---")
    print("  1) kesit başına ek süre : %.2f sn (toplam %.1f sn / %d kesit)"
          % (sure_top / max(1, len(tarihler)), sure_top, len(tarihler)))
    _is = _TALEP_SAYAC["isabet"]
    _st = max(1, _TALEP_SAYAC["istek"])
    print("     süreç içi kapanış önbelleği: %d/%d isabet (%%%.0f) — tavan %d"
          % (_is, _st, 100.0 * _is / _st, _TALEP_TAVAN))
    # 🔴 KOŞULAR ARASI ÖNBELLEK KARNESİ — "ölçülemedi ≠ temiz". Katman
    #    satırları basılmazsa önbelleğin HİÇ çalışmadığı ile HİÇ gerekmediği
    #    hâl ayırt edilemez; boş kova da BASILIR.
    print("     koşular arası önbellek: %s"
          % (_ONB.yol if _ONB.acik else "KAPALI (MOTOR_ONBELLEK_KAPALI=1)"))
    _oz_satir = _ONB.ozet() if _ONB.acik else []
    if _oz_satir:
        for _s in _oz_satir:
            print("       " + _s)
    else:
        print("       (katman satırı yok — hiç okuma/yazma olmadı)")
    print("       depo %.1f MB" % _ONB.boyut_mb())
    print("  2) çıktı boyutu         : %.1f KB (%d kayıt, %d halka, %d parça)"
          % (boy / 1024.0, len(kayitlar), len(havuz.halka), len(havuz.parca)))
    print("  3) A çıktısı            : OKUNDU, YAZILMADI — bu betik data/"
          "donemler.js ve data/devletler_harita.js dosyalarına HİÇ yazmaz")
    print("  cins dağılımı          : "
          + " · ".join("%s %d" % (c, cins_sayac.get(c, 0)) for c in CINSLER))
    print("  engellenen (gerçek enklav adayı, incelenecek): %d" % engel_top)
    # 🔴 "İNCELENECEK" LİSTESİ DOSYAYA YAZILIR — ekrana basılıp kaybolmaz.
    #    Emre'nin kuralı: gerçek enklav ÖRTÜLMEZ, RAPORLANIR.
    if engelli:
        ryol = os.path.join(KOK, "denetim", "B-GORUNUM-0072-ENGELLENEN.json")
        try:
            io.open(ryol, "w", encoding="utf-8").write(json.dumps(
                [{"gun": g, "kim": k, "km2": m} for g, k, m in engelli],
                ensure_ascii=False, indent=1))
            print("     -> " + os.path.relpath(ryol, KOK))
        except Exception as e:
            print("     UYARI rapor yazılamadı:", e)
    print("  toplam %.1f sn" % (time.time() - t0))
    return olcum


if __name__ == "__main__":
    _ana()
