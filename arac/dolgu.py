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
from shapely import STRtree

# UFUK-BANT-1117 (madde 3): bu modülün `except Exception` kollarının SESSİZ yutması
# sayılır ve koşu sonunda raporlanır (`uret_petek.py` basar). Anahtar = yutma yeri.
YUTMA = {}


def _yut(yer):
    YUTMA[yer] = YUTMA.get(yer, 0) + 1
from shapely.geometry import (MultiPoint, MultiPolygon, Polygon, box, mapping,
                              shape)
from shapely.ops import unary_union, voronoi_diagram

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import motor_onbellek as _mob        # noqa: E402
import gun as _gun                       # noqa: E402 — TEK tarih otoritesi (dizge karşılaştırması YASAK)
from functools import lru_cache as _lru       # noqa: E402
_gk = _lru(maxsize=None)(_gun.gun)            # tarih dizgisi → gün sayısı (önbellekli)

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASEMAPS = os.path.join(KOK, "veri-kaynak")

# ═══════════════════════════════════════════════════════════════════════════
# AYARLAR — hepsi ortam değişkeniyle çevrilebilir (koşu ortasında kod
# düzenlemeden kapatabilmek için; `B23_ACIK`ın gerekçesinin aynısı).
# ═══════════════════════════════════════════════════════════════════════════
# UFUK = Emre'nin 5/7/10 günlük yürüyüş ayarı (18 Ekim 2026 kararı §1 b/d/e:
# "en çok 400 km ya da ayardaki 5/7/10 günlük yürüyüşün karşılığı").
# 🔴 KARŞILIK ÖLÇÜLÜ, uydurma değil: motorun yürüyüş hızı 5,04 km/sa x 8 sa =
#    40,32 km/gün (`B-GORUNUM-0072-UFUK.md` §1: 80 sa = 403,2 km, 56 sa =
#    282,2 km, 40 sa = 201,6 km). 10 gün => 403 km ~ Emre'nin "400 km".
#    VARSAYILAN 10 = üst sınır; 5 ve 7 aynı kurallarla daha dar dolgu verir.
UFUK_GUN = float(os.environ.get("MOTOR_DOLGU_UFUK_GUN", "10"))
KM_GUN = 40.32
UFUK_KM = UFUK_GUN * KM_GUN
# Kapanış yarıçapı. Kapanış 2r'den dar boşluğu kapattığı için r = UFUK_KM/2:
# "ayardaki günün yürüyüşünden dar boşluk kapanır, ondan geniş (401 km)
# kapanmaz" (Emre b/d/e). Açık yazılırsa (MOTOR_DOLGU_YARICAP_KM) ayarı ezer —
# eski 120 km davranışına dönmek için.
YARICAP_KM = (float(os.environ.get("MOTOR_DOLGU_YARICAP_KM", "0") or "0")
              or UFUK_KM / 2.0)
# Deniz kuralı (e): yalnız BÜYÜK su kütleleri "deniz" sayılır; kara maskesi
# küçük gölleri de delik olarak taşır ve onlar sayılsaydı Afrika'nın ortasındaki
# bir göl yüzünden 400 km kara devlete yazılırdı.
DENIZ_ESIK_KM2 = float(os.environ.get("MOTOR_DOLGU_DENIZ_ESIK_KM2", "100000"))
# Deniz kuralını kapatma düğmesi (A/B hesabı için); varsayılan AÇIK.
DENIZ_KURALI = os.environ.get("MOTOR_DOLGU_DENIZ", "1") != "0"
# Koridor kuralı (c): derinlik <= ağız genişliği; varsayılan AÇIK.
KORIDOR_KURALI = os.environ.get("MOTOR_DOLGU_KORIDOR", "1") != "0"
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

# ═══════════════════════════════════════════════════════════════════════════
# MOTOR-YAMA-5GUN-B-1118 (Emre 18 Kasım 2026) — üç yeni girdi, hepsi çağıran
# tarafın `kosudan(...)` ile verdiği KESİT BAĞLAMIDIR (modül sabiti değil):
#   izgara : sürtünmeli paylaşım — `_YR_SAHIP` ızgarası + o günün yerleşim→devlet haritası
#   duvar  : {kim: geometri} — C/D/E/F antlaşma hattının KARŞI yakası; o devletin dolgusu oraya geçmez
#   engel  : MultiPoint — sahnede kabile/devletsiz yerleşimler; içlerinde olan devlet-içi delik DOLDURULMAZ
# Üçü de None ise davranış YAMADAN ÖNCEKİ ile aynıdır (Voronoi paylaşım · duvarsız · yalnız kapanış).
# Bağlam `kesit_dolgu` girişinde yazılır (tek iş parçacıklı); önbellek anahtarına GİRER.
# ═══════════════════════════════════════════════════════════════════════════
SURTUNME = os.environ.get("MOTOR_DOLGU_SURTUNME", "1") != "0"
DELIK_KURALI = os.environ.get("MOTOR_DOLGU_DELIK", "1") != "0"
_CTX = {"izgara": None, "duvar": None, "engel": None, "kara_hazir": None, "kara": None}
# Koşu sonunda uret_petek.py basar. `duvar_gecen_*` = duvar uygulandıktan sonra HÂLÂ duvarın içinde
# kalan dolgu (kabul ölçütü: 0). `surtunme`/`voronoi` = paylaşımın hangi yoldan çıktığı.
SAYAC = {"duvar_kesilen_km2": 0.0, "duvar_gecen_n": 0, "duvar_gecen_km2": 0.0,
         "delik_km2": 0.0, "delik_n": 0, "delik_engelli_n": 0, "surtunme": 0, "voronoi": 0}

CINSLER =("bosluk", "koridor", "enklav-bag", "paylasim")
# Hesap yolu: "devlet" (birim = tek devlet + 1 sıçrama, ÖNBELLEKLİ) ·
# "butun" (eski tek parça hesap). İkincisi üretim için DEĞİL, bit bit
# aynılık sınavının karşı tarafı içindir (M-4848 ②. şart).
# ⚠️ AD `MOTOR_BDOLGU_YOL` — `MOTOR_DOLGU_YOL` ZATEN ALINMIŞ:
#    `uret_petek.py:5630` onu kendi petek düzeyindeki dolgusu için
#    ("satir"/"matris"/"sina") okuyor. Aynı adı kullansaydım bu modülü
#    "butun"a almak motorun BAŞKA bir hesabını sessizce bozardı.
YOL = os.environ.get("MOTOR_BDOLGU_YOL", "devlet")

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
KURAL_SURUM = "dolgu-kural-4"      # 1118: sürtünmeli paylaşım · hat duvarı · devlet-içi delik
#                                    1127 (DOLGU-YEREL): komşuluk kutuyla değil gerçek yakınlıkla;
#                                    engel anahtarda yerel; devlet parçaları kanonik sırada. KURAL
#                                    değişmedi (aynı dolgu), anahtarın KAPSAMI ve parça SIRASI değişti.
_KURAL = {"yaricap_km": YARICAP_KM, "esik_km2": ESIK_KM2,
          "ufuk_gun": UFUK_GUN, "deniz": DENIZ_KURALI,
          "deniz_esik_km2": DENIZ_ESIK_KM2, "koridor": KORIDOR_KURALI,
          "kaba_tol": KABA_TOL, "sade_tol": SADE_TOL, "temas": TEMAS,
          "paylasim_adim_km": PAYLASIM_ADIM_KM,
          "paylasim_nokta_tavan": PAYLASIM_NOKTA_TAVAN,
          "surtunme": SURTUNME, "delik": DELIK_KURALI}
_ONB_TUZ = json.dumps({
    "surum": KURAL_SURUM,
    "modul": _hlo.sha256(io.open(os.path.abspath(__file__), "rb").read()).hexdigest(),
    "kural": _KURAL,
}, sort_keys=True, ensure_ascii=False)
_ONB_YOL = os.path.join(os.environ.get("MOTOR_ONBELLEK_DIZIN")
                        or os.path.join(KOK, "_motor_onbellek"),
                        "motor_onbellek.sqlite")
_ONB_ACIK = os.environ.get("MOTOR_ONBELLEK_KAPALI") != "1"
_ONB = _mob.Onbellek(_ONB_YOL, _ONB_TUZ, acik=_ONB_ACIK)
# `_ONB_TALEP` (kapanış katmanının KENDİ tuzu) ve `_ONB_MIRAS` aşağıda, `_talep`ten sonra kurulur.

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
            _yut("kes:sorgu (g aynen döndü)")
            return g
        if len(ix) == 0:
            return Polygon()
        try:
            yerel = unary_union([self.parcalar[int(q)] for q in ix])
            return _temiz(g.intersection(yerel))
        except Exception:
            _yut("kes:kesişim (boş döndü)")
            return Polygon()


def _deniz_kapanisi(g, kaba, kara_hazir, r):
    """(e) Gövdenin büyük su kütleleriyle arasındaki <=2r'lik kara şeridi.

    Kapanış (gövde ∪ deniz) üzerinde alınır; denizin kendisi ve gövde çıkarılır,
    geriye yalnız aradaki şerit kalır. `r` DERECE. Yerel deniz = kutu - yerel
    kara; kutu 2,05r pay taşır ki kutu kenarı kapanışı etkilemesin."""
    kutu = kaba.envelope.buffer(2.05 * r)
    try:
        ix = kara_hazir.agac.query(kutu)
    except Exception:
        _yut("deniz_kapanisi:sorgu (boş döndü)")
        return Polygon()
    yerel = (unary_union([kara_hazir.parcalar[int(q)] for q in ix])
             if len(ix) else Polygon())
    deniz = _temiz(kutu.difference(yerel))
    buyuk = [p for p in _parcalar(deniz) if _km2(p) >= DENIZ_ESIK_KM2]
    if not buyuk:
        return Polygon()
    deniz = unary_union(buyuk)
    if KABA_TOL > 0:
        deniz = _temiz(deniz.simplify(KABA_TOL, preserve_topology=True))
    birlesik = _temiz(unary_union([kaba, deniz]))
    kap = _temiz(birlesik.buffer(r, quad_segs=2, join_style=1).buffer(
        -r, quad_segs=2, join_style=1))
    serit = _temiz(kap.difference(birlesik))
    # Kapanış deniz-deniz boğazlarını da (yarımada, Apenin…) doldurur; bunlar
    # gövdeyle ilgisiz. Yalnız GÖVDEYE DEĞEN bileşenler ve gövdeden en çok 2r
    # uzaktaki kesim kalır (ölçüldü: bu süzgeç olmadan 1000-01-01'de deniz
    # kuralı 4,0 milyon km2 yazdı, gövde alanı 0,57 milyon km2 idi).
    degen = g.buffer(TEMAS)
    tut = [c for c in _parcalar(serit) if c.intersects(degen)]
    if not tut:
        return Polygon()
    return _temiz(unary_union(tut).intersection(g.buffer(2.0 * r)))


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
            _yut("kapanis:sadelestirme (sadeleştirmesiz devam)")
            kaba = g
    try:
        kap = kaba.buffer(r, quad_segs=2, join_style=1).buffer(
            -r, quad_segs=2, join_style=1)
    except Exception:
        _yut("kapanis:buffer (boş döndü)")
        return Polygon()
    kap = _temiz(kap)
    if kap.is_empty:
        kap = Polygon()
    if DENIZ_KURALI and kara_hazir is not None:
        # (e) gövde ile DENİZ arasındaki boşluk da kapanış sayılır: kapanış
        # (gövde ∪ yakın deniz) üzerinde alınır (bkz. _deniz_kapanisi).
        try:
            kap = _temiz(unary_union([kap, _deniz_kapanisi(
                g, kaba, kara_hazir, r)]))
        except Exception:
            _yut("kapanis:deniz_kapanisi (eklenmedi)")
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
# DOLGU-YEREL-1127 — KAPANIŞ KATMANININ KENDİ TUZU ("tuzun kapsamı, işin okuduğu kadar")
# ═══════════════════════════════════════════════════════════════════════════
# Kapanış (`dolgu2_talep`) koşunun en pahalı YENİDEN KULLANILABİLİR ürünüdür (Koşu 40: 6.659 kapanış,
# yalnız 4 sn'yi aşanları 3,9 saat). Eskiden tuzu BÜTÜN DOSYANIN özetiydi: dosyaya tek yorum satırı
# eklemek bütün kapanışları çöpe atıyordu. Kapanışın okuduğu kod yalnız aşağıdaki işlevlerdir; tuzu da
# yalnız onların KAYNAK METNİ ve okuduğu dört sabittir. Paylaşım/cins/anahtar kodundaki bir değişiklik
# artık kapanışlara dokunmaz. (Kaynak metni dosyadan `ast` ile, evrensel satır sonuyla alınır ⇒ satır
# sonu biçiminden ve modülün nasıl yüklendiğinden bağımsız.)
_TALEP_ADLAR = ("_km_derece", "_derece", "_km2", "_parcalar", "_temiz", "KaraIndeks",
                "_deniz_kapanisi", "_talep")


def _kaynak_ozeti(yol, adlar):
    """`yol`daki Python dosyasının üst düzey `adlar` tanımlarının kaynak metni özeti (sha256)."""
    import ast as _ast
    with io.open(yol, "r", encoding="utf-8", newline=None) as f:
        src = f.read()
    parca = {}
    for dugum in _ast.parse(src).body:
        ad = getattr(dugum, "name", None)
        if ad in adlar:
            parca[ad] = _ast.get_source_segment(src, dugum)
    eksik = [a for a in adlar if a not in parca]
    if eksik:
        raise RuntimeError("kaynak özeti: tanım bulunamadı: %r" % eksik)
    return _hlo.sha256("\n".join(parca[a] for a in adlar).encode("utf-8")).hexdigest()


_TALEP_KAYNAK = _kaynak_ozeti(os.path.abspath(__file__), _TALEP_ADLAR)
_TALEP_TUZ = json.dumps({
    "surum": "talep-1", "kaynak": _TALEP_KAYNAK,
    "kural": {"deniz": DENIZ_KURALI, "deniz_esik_km2": DENIZ_ESIK_KM2,
              "kaba_tol": KABA_TOL, "temas": TEMAS},
}, sort_keys=True, ensure_ascii=False)
_ONB_TALEP = _mob.Onbellek(_ONB_YOL, _TALEP_TUZ, acik=_ONB_ACIK)
# MİRAS: eski tuzla (bütün dosyanın özeti) yazılmış kapanışlar, kapanış kodu AYNI kaldıysa geçerlidir.
# İki ayar birlikte verilirse eski kayıtlar da aranır (bulunan, yeni tuzla yeniden yazılır):
#   DOLGU_MIRAS_MODUL        = o kayıtları yazan `dolgu.py` dosyasının sha256'sı (eski tuzun "modul"ü)
#   DOLGU_MIRAS_TALEP_KAYNAK = o dosyanın kapanış işlevlerinin `_TALEP_KAYNAK` özeti
# İkincisi bugünkü `_TALEP_KAYNAK` ile AYNI değilse miras KAPALI kalır ve söylenir — kapanış kodu
# değişmişse eski kapanış bayattır.
_ONB_MIRAS = None
_mm, _mk = os.environ.get("DOLGU_MIRAS_MODUL", ""), os.environ.get("DOLGU_MIRAS_TALEP_KAYNAK", "")
if _mm and _ONB_ACIK:
    if _mk == _TALEP_KAYNAK:
        _ONB_MIRAS = _mob.Onbellek(_ONB_YOL, json.dumps({
            "surum": os.environ.get("DOLGU_MIRAS_SURUM", "dolgu-kural-3"), "modul": _mm, "kural": _KURAL,
        }, sort_keys=True, ensure_ascii=False), acik=True)
        print("  Ⓑ dolgu: kapanış MİRASI açık (eski modül %s…)" % _mm[:12], flush=True)
    else:
        print("  ⚠️ Ⓑ dolgu: kapanış mirası KAPALI — kapanış kodu değişmiş (%s… ≠ %s…)" % (
            _mk[:12], _TALEP_KAYNAK[:12]), flush=True)


# ═══════════════════════════════════════════════════════════════════════════
# ② PAYLAŞIM — birden çok devletin istediği alan
# ═══════════════════════════════════════════════════════════════════════════
def _paylas_surtunme(alan, adaylar, izg):
    """SÜRTÜNMELİ paylaşım (MOTOR-YAMA-5GUN-B-1118). `izg` = {"sahip": ny×nx int32 (satır 0 GÜNEY;
    Dijkstra sahibi yerleşim indeksi, −1 karar yok), "x0","y0","adim", "kim": {yerleşim: devlet}}.

    Her ızgara hücresi, sürtünmeli en yakın yerleşiminin DEVLETİ iki adaydan biriyse o adaya gider.
    Sahibi üçüncü devlet / sahipsiz olan hücre, en yakın ETİKETLİ hücrenin (iki aday arasından)
    etiketini alır — "aday yalnız temas eden iki devlet". Bölme tek ızgaradan türediği için iki
    taraf (i ve j) aynı çizgiyi üretir; parçalar ortak kenarı bit bit paylaşır (boşluk/bindirme yok).
    Döner: [(kim, parça)] ya da None (hiç etiketli hücre yoksa → çağıran Voronoi'ye düşer)."""
    import numpy as np
    import rasterio.features as rfe
    from rasterio.transform import Affine
    from scipy import ndimage as ndi
    sahip = izg["sahip"]
    x0, y0, ad, kimj = izg["x0"], izg["y0"], izg["adim"], izg["kim"]
    ny, nx = sahip.shape
    bx0, by0, bx1, by1 = alan.bounds
    i0 = max(0, int(math.floor((bx0 - x0) / ad)) - 1)
    i1 = min(nx, int(math.ceil((bx1 - x0) / ad)) + 1)
    b0 = max(0, int(math.floor((by0 - y0) / ad)) - 1)
    b1 = min(ny, int(math.ceil((by1 - y0) / ad)) + 1)
    if i1 <= i0 or b1 <= b0:
        return None
    win = np.flipud(sahip[b0:b1, i0:i1])           # rasterio: satır 0 KUZEY
    k1, k2 = adaylar[0][0], adaylar[1][0]
    u = np.unique(win)
    lut = np.array([(1 if kimj.get(int(j)) == k1 else 2 if kimj.get(int(j)) == k2 else 0)
                    if j >= 0 else 0 for j in u], dtype=np.uint8)
    lab = lut[np.searchsorted(u, win)]
    bilinen = lab > 0
    if not bilinen.any():
        return None
    if not bilinen.all():
        idx = ndi.distance_transform_edt(~bilinen, return_distances=False, return_indices=True)
        lab = lab[idx[0], idx[1]]
    tr = Affine(ad, 0.0, x0 + i0 * ad, 0.0, -ad, y0 + b1 * ad)
    kova = {1: [], 2: []}
    for _gj, v in rfe.shapes(lab, transform=tr, connectivity=4):
        kova[int(v)].append(shape(_gj))
    out = []
    for v, kim in ((1, k1), (2, k2)):
        if not kova[v]:
            continue
        par = _temiz(unary_union(kova[v]).intersection(alan))
        if not par.is_empty:
            out.append((kim, par))
    return out or None


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
    # MOTOR-YAMA-5GUN-B-1118 (karar 8): iki devlet arası sahipsiz toprak SÜRTÜNMELİ bölüşülür —
    # her hücre `_YR_SAHIP` ızgarasındaki (sürtünmeli en yakın yerleşim) sahibine gider; aday
    # YALNIZ temas eden iki devlettir. Izgara yoksa / etiket bulunamazsa eski kuşuçuşu Voronoi.
    _izg = _CTX.get("izgara")
    if SURTUNME and _izg is not None and len(adaylar) == 2:
        try:
            _r = _paylas_surtunme(alan, adaylar, _izg)
        except Exception:
            _yut("paylas:surtunme (Voronoi'ye düştü)")
            _r = None
        if _r:
            SAYAC["surtunme"] += 1
            return _r
        SAYAC["voronoi"] += 1
    lat = alan.centroid.y
    adim = _derece(PAYLASIM_ADIM_KM, lat)
    # 🔴 BELLEK: `alan` ham kıyı ayrıntısıyla (on binlerce köşe) 200 km tamponlanınca
    #    shapely tek çağrıda >8 GB yedi (21 Ekim, 1281 kesiti, yığın izi `_paylas`
    #    → buffer). `cevre` yalnız "gövde sınırının hangi kesimi alana yakın"
    #    süzgecidir; kaba hat + az segmentle SÜPERSET kalır, sonucu bozmaz.
    #    İkinci ölçüm: kaba hat + quad_segs=2 ile bile `buffer` 6 GB'ı aştı
    #    (çekişmeli alan kıtalar boyu uzanabiliyor). Tampon HİÇ alınmaz:
    #    süzgeç = alanın sınır kutusu + r. Kutu tampondan GENİŞTİR (süperset),
    #    örnek nokta sayısı zaten PAYLASIM_NOKTA_TAVAN ile sınırlı.
    _x0, _y0, _x1, _y1 = alan.bounds
    _rx = _derece(YARICAP_KM, lat) * 1.05
    _ry = YARICAP_KM / 111.32 * 1.05
    cevre = box(_x0 - _rx, _y0 - _ry, _x1 + _rx, _y1 + _ry)
    pts, sahip = [], []
    for kim, g in adaylar:
        try:
            hat = g.boundary.intersection(cevre)
        except Exception:
            _yut("kopru:sinir_kesisimi (aday atlandı)")
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
def _koridor_kirp(parca, a_tampon):
    """(c) Koridorun ağıza yakın `ağız uzunluğu` kadar kesimi boş bırakılır.

    Ağız = parça sınırının hiçbir A toprağına değmeyen kısmı (`_cins`teki ile
    aynı tanım). Ağızdan <= ağız uzunluğu uzaktaki kesim çıkarılır; derin kesim
    kalır. Ağız ölçülemezse parça AYNEN döner (kırpma uydurulmaz).
    ⚠️ Yalnız kapanışın zaten ürettiği (ağzı < 2r) girintilere uygulanır;
    ağzı 2r'den geniş derin girintiler bu kodda HENÜZ YOK (rapora yazıldı)."""
    try:
        agiz = parca.boundary.difference(a_tampon)
        w = getattr(agiz, "length", 0.0)
        if w <= 0:
            return parca
        return _temiz(parca.difference(agiz.buffer(w)))
    except Exception:
        return parca


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
# ═══════════════════════════════════════════════════════════════════════════
# BÖLGE BİRİMİ — "tek devlet + 1 sıçrama" (M-4848, 1.MURAT'ın ①. şartı)
# ═══════════════════════════════════════════════════════════════════════════
# Şart: *"Bölge biriminin TANIMINI ölçüyle seç, coğrafî sezgiyle değil…
# bir boşluk bileşeni İKİ bölgeye birden değiyorsa anahtarı hangi bölgeye
# ait?"*
#
# 🔴 ÜÇ ADAY ÖLÇÜLDÜ (`denetim/ARAC-B-GORUNUM-BOLGE-0072.py`, 12 kesit,
#    kesit başına 238,2 gövde). Öngörü ölçümden önce yazıldı
#    (`denetim/B-GORUNUM-0072-BOLGE-ONGORU.md`):
#      A) bağlı bileşen (transitif) : birim %90,8 · tek devlet değişince %90,8
#      B) 1 sıçrama                 : birim  %3,8 · tek devlet değişince %14,9
#      C) 2 sıçrama                 : birim %14,9 · tek devlet değişince %31,7
#    ⇒ A ÇÜRÜDÜ ve öngörüm bunu ÖNCEDEN yazmıştı: 13 bileşen var ama en
#      büyüğü gövdelerin %91'ini yutuyor (Avrasya+Afrika kesintisiz kara).
#      Bileşen bölge birimi OLAMAZ — bugünkü kesit anahtarının neredeyse
#      aynısıdır.
#
# 🔴 "İKİ BÖLGEYE BİRDEN DEĞEN PARÇA" SORUSU BURADA SORULMUYOR, çünkü
#    birim coğrafî bir KUTU değil, bir DEVLETTİR. Her dolgu parçasının
#    tek bir sahibi vardır (`kim`) ve o parçayı yalnız sahibinin birimi
#    üretir. Paylaşım parçaları bile öyle: çekişmeli alan iki tarafta da
#    AYNI kanonik sırayla bölünür (`_paylas` çifti `kim`e göre sıralı
#    alır) ve her taraf YALNIZ KENDİ payını yazar. ⇒ ne boşluk ne mükerrer.
#
# 🔴 NİÇİN 1 SIÇRAMA YETİYOR — ve bu sezgi değil CEBİR:
#    ham_i = kapanış(i) − gövde_i (komşuya bakmaz) · B_i = ham_i'nin
#    kutusuna değen gövdelerin birleşimi · t_i = ham_i − B_i.
#      ① t_i ∩ t_j = (ham_i ∩ ham_j) − B_i
#         çünkü ham_i∩ham_j'ye değen HER gövde ham_i'ye de değer ⇒ B_i'de.
#      ② t_i − t_j = t_i − ham_j
#         çünkü t_i ∩ B_j = ∅ (t_i'ye değen gövdeler zaten B_i'de çıkarıldı).
#    ⇒ İkisi de yalnız ham_j'yi (yani gövde_j'yi) okuyor, B_j'yi DEĞİL.
#      2. sıçrama gereksiz; ölçülen %31,7 yerine %14,9.
#    ⚠️ Bu denklikler yazılı duruyor ki biri kodu değiştirince neyin
#      bozulduğunu bilsin: ①/② kırılırsa anahtar EKSİK girdi taşır ve
#      önbellek SESSİZCE bayat sonuç verir.
def _delikler(g):
    """`g`nin iç halkaları poligon olarak (`_delik_talebi` ile AYNI kuruluş: `_temiz(Polygon(r))`)."""
    out = []
    for p in _parcalar(g):
        for r in p.interiors:
            try:
                h = _temiz(Polygon(r))
            except Exception:
                continue
            if not h.is_empty:
                out.append(h)
    return out


def _engel_yerel_oz(g):
    """DOLGU-YEREL-1127: delik engelinin YALNIZ bu gövdeyi ilgilendiren payının özeti.

    🔴 ÖLÇÜLEN KUSUR (Koşu 40, `denetim/KOSU-SORUSTURMA-1127.md` §2.4-N2): engel (o gün sahnedeki
       BÜTÜN dünyanın kabile/devletsiz noktaları) her devletin anahtarına BÜTÜN OLARAK giriyordu;
       dünyanın herhangi bir yerinde tek nokta değişince bütün devletler ıskalıyordu.
    ⇒ Engeli okuyan TEK yer `_delik_talebi`dir ve yalnız `h.intersects(engel)` sorar (h = g'nin
       deliği). Sonuç, deliklere DÜŞEN noktaların kümesiyle belirlenir — anahtar da yalnız onu taşır.
       Deliği olmayan gövde engeli hiç okumaz ("-")."""
    en = _CTX.get("engel")
    if en is None or en.is_empty:
        return "-"
    try:
        import numpy as _np
        oz_g = _oz(g)
        du = _DELIK_ONB.get(oz_g, 0)
        if du == 0:                     # gövdenin delik birleşimi BİR KEZ kurulur ve hazırlanır
            dl = _delikler(g)
            du = unary_union(dl) if dl else None
            if du is not None:
                shapely.prepare(du)
            if len(_DELIK_ONB) > 20000:
                _DELIK_ONB.clear()
            _DELIK_ONB[oz_g] = du
        if du is None:
            return "-"
        if _ENGEL_NOKTA[0] is not en:   # kesitin engel noktaları BİR KEZ diziye açılır
            _ENGEL_NOKTA[0] = en
            _ENGEL_NOKTA[1] = shapely.get_parts(en)
            _ENGEL_NOKTA[2] = shapely.get_coordinates(en)
        m = shapely.intersects(du, _ENGEL_NOKTA[1])
        if not m.any():
            return "bos"
        xy = _ENGEL_NOKTA[2][m]
        xy = xy[_np.lexsort((xy[:, 1], xy[:, 0]))]
        return _hlo.sha256(_np.ascontiguousarray(xy).tobytes()).hexdigest()
    except Exception:
        _yut("engel_yerel:kesisim (küresel özete düştü)")
        return _oz(en)                  # ölçemedik ⇒ ESKİ (küresel) özet: güvenli taraf


def _ctx_oz(kim, adlar, g=None):
    """MOTOR-YAMA-5GUN-B-1118: devlet düzeyi önbellek anahtarının KESİT-BAĞLAMI payı. Sonuç; ızgara
    (paylaşımın sahipleri: bu devlet + 1 sıçrama komşunun o günkü yerleşim kümesi), kendi hat
    duvarı ve delik engelleri (sahnedeki kabile/devletsiz noktalar) ile değişir — üçü de anahtarda.
    `g` verilirse (devlet anahtarı) engel YEREL özetle girer (`_engel_yerel_oz`); verilmezse (kesit
    anahtarı) küresel özetle — kesit bütün dünyayı kapsar."""
    izg, dv, en = _CTX.get("izgara"), _CTX.get("duvar"), _CTX.get("engel")
    iz = ""
    if izg is not None:
        d_oz = izg.get("devlet_oz") or {}
        iz = izg.get("grid_oz", "") + ":" + ",".join(
            "%s=%s" % (d, d_oz.get(d, "-")) for d in sorted(set(adlar) | {kim}))
    du = _oz(dv.get(kim)) if dv and dv.get(kim) is not None else "-"
    if g is not None:
        eo = _engel_yerel_oz(g)
    else:
        eo = _oz(en) if en is not None else "-"
    return "ctx|%s|%s|%s" % (iz, du, eo)


# ═══════════════════════════════════════════════════════════════════════════
# DOLGU-YEREL-1127 — süreç içi devlet ezberi (LRU)
# ═══════════════════════════════════════════════════════════════════════════
# Devlet sonucu isabet etse bile her kesitte SQLite'tan okunup `pickle.loads` ediliyordu
# (kesit başına ~350 okuma). Anahtar içerik adresli olduğu için aynı anahtarın sonucu aynıdır;
# bellekte tutulan son `_DEVLET_TAVAN` sonuç diske hiç gitmeden döner. Yalnız hız; sonucu etkilemez.
from collections import OrderedDict as _OD      # noqa: E402
_DEVLET_ONB = _OD()
# ⚠️ Ayar adları BİLEREK `MOTOR_` ile başlamıyor: `uret_petek.py` işletim listesinde olmayan her
#    `MOTOR_*` değişkenini önbellek tuzuna katar (:655) ⇒ bu düğmelerden biri verilseydi A'nın
#    bütün önbelleği ıskalardı. Bunlar yalnız hız/görünürlük düğmesidir, sonucu etkilemez.
_DEVLET_TAVAN = int(os.environ.get("DOLGU_DEVLET_ONB", "6000"))
ILERLEME = {"devlet_hesap": 0, "devlet_bellek": 0, "devlet_disk": 0,
            "kapanis_hesap": 0, "kapanis_miras": 0, "kapanis_disk": 0}
# Gövde başına bir kez kurulan yardımcılar ve ÇİFT bazlı komşuluk ezberi (içerik özetiyle anahtarlı):
# bir gövdenin ham talebi yalnız o gövdenin fonksiyonudur ⇒ (gövde_i, gövde_j) çiftinin yakınlık ve
# kesişim cevabı ikisi de değişmedikçe aynıdır. Kesitten kesite çiftlerin çoğu değişmez; gerçek
# geometri sorgusu yalnız YENİ çift için yapılır.
_DELIK_ONB = {}                 # gövde özeti → deliklerin (hazırlanmış) birleşimi | None
_ENGEL_NOKTA = [None, None, None]
_BOLGE_ONB = _OD()              # gövde özeti → bölge (ham ∪ delikler), hazırlanmış
_BOLGE_TAVAN = 3000
_CIFT_G = {}                    # (özet_i, özet_j) → gövde_j bölge_i'ye TEMAS içinde mi
_CIFT_T = {}                    # (özet_a, özet_b) sıralı → ham_a ∩ ham_b ≠ ∅ mi
_CIFT_TAVAN = 3000000


def _yol_devlet(govdeler, ham, rapor, kara_oz, r_km, g_agac, g_liste):
    """Her devletin dolgu parçalarını AYRI AYRI ve önbellekli üretir."""
    n = len(govdeler)
    ham_var = [i for i in range(n) if not ham[i].is_empty]
    if not ham_var:
        return []
    h_liste = [ham[i] for i in ham_var]
    h_agac = STRtree(h_liste)

    # 🔴 DOLGU-YEREL-1127 — KOMŞULUK SINIR KUTUSUYLA DEĞİL, GERÇEK YAKINLIKLA.
    #    ÖLÇÜLEN KUSUR (Koşu 40, `denetim/KOSU-SORUSTURMA-1127.md` §2.4-N1): yüklemsiz
    #    `STRtree.query` kutu kesişimi verir; dünyaya yayılmış gövdelerin (1760: ispanya 234°×88°,
    #    ingiltere 206°×77°) kutusuna dünyanın çoğu girer. Sonuç: kesit başına ortalama 2,7 gövde
    #    değişirken 50,7 devlet yeniden hesaplandı; tek hesabı ingiltere 458 sn, fransa 347 sn.
    #    Ⓑ 183 saatte yarıya gelebildi.
    # ⇒ B_i = bölge_i'ye `TEMAS` kadar yakın gövdeler; bölge_i = ham_i ∪ g_i'nin delikleri.
    #    NİÇİN YETER — `_devlet_hesap`ın gövde okuyan DÖRT yeri de bu kümenin içinde kalır:
    #      ① engel = t ∩ B · t − B       → yalnız ham_i'ye DEĞEN gövde bir şey katar (t ⊆ ham_i)
    #      ② `_delik_talebi(g, B)`        → yalnız g_i'nin bir deliğine değen gövde (delik ⊆ bölge_i)
    #      ③ `yakin(p)` → `_cins` ağzı    → p ⊆ bölge_i; ağız = p.sınırı − tampon(TEMAS) ⇒ p'ye TEMAS'tan
    #      ④ `_koridor_kirp(p2, yakin)`     uzak gövdenin tamponu p'nin sınırına HİÇ değmez
    #    Kutuya değip bölgeye TEMAS'tan uzak kalan gövde bu dördünün hiçbirine bir şey katamaz.
    #    Talep komşuluğu da aynı: `_devlet_hesap` yalnız t_i ∩ ham_j ≠ ∅ olanı kullanır (t_i ⊆ ham_i).
    # ⚠️ Sorgu düşerse ESKİ davranışa (kutu) dönülür ve sayılır — eksik komşu sessizce yanlış
    #    dolgu üretir, fazla komşu yalnız yavaşlatır.
    ozl = [_oz(g) for _k, g in govdeler]

    def _bolge(i):
        z = _BOLGE_ONB.get(ozl[i])
        if z is not None:
            _BOLGE_ONB.move_to_end(ozl[i])
            return z
        dl = _delikler(govdeler[i][1])
        z = ham[i] if not dl else _temiz(unary_union([ham[i]] + dl))
        shapely.prepare(z)
        _BOLGE_ONB[ozl[i]] = z
        while len(_BOLGE_ONB) > _BOLGE_TAVAN:
            _BOLGE_ONB.popitem(last=False)
        return z

    def komsu_govde(i):
        """bölge_i'ye `TEMAS` kadar yakın gövdeler (kendisi hariç) — B_i'nin indeksleri.
        Aday = kutusu (TEMAS payıyla) değenler; gerçek yakınlık çift ezberinden ya da bir kez ölçülerek."""
        try:
            z = _bolge(i)
            x0, y0, x1, y1 = z.bounds
            out = []
            for q in g_agac.query(box(x0 - TEMAS, y0 - TEMAS, x1 + TEMAS, y1 + TEMAS)):
                q = int(q)
                if q == i:
                    continue
                ck = (ozl[i], ozl[q])
                v = _CIFT_G.get(ck)
                if v is None:
                    v = bool(shapely.dwithin(z, g_liste[q], TEMAS))
                    if len(_CIFT_G) > _CIFT_TAVAN:
                        _CIFT_G.clear()
                    _CIFT_G[ck] = v
                if v:
                    out.append(q)
            return sorted(out)
        except Exception:
            _yut("yerel:govde_sorgu (kutu komşuluğuna düştü)")
            try:
                ix = [int(q) for q in g_agac.query(ham[i])]
            except Exception:
                ix = list(range(n))
            return sorted(q for q in ix if q != i)

    def komsu_talep(i):
        """`ham_i` ile GERÇEKTEN kesişen öteki ham talepler (çift ezberli)."""
        try:
            out = []
            for q in h_agac.query(ham[i]):
                j = ham_var[int(q)]
                if j == i:
                    continue
                ck = (ozl[i], ozl[j]) if ozl[i] <= ozl[j] else (ozl[j], ozl[i])
                v = _CIFT_T.get(ck)
                if v is None:
                    v = bool(shapely.intersects(ham[i], ham[j]))
                    if len(_CIFT_T) > _CIFT_TAVAN:
                        _CIFT_T.clear()
                    _CIFT_T[ck] = v
                if v:
                    out.append(j)
            return sorted(out)
        except Exception:
            _yut("yerel:talep_sorgu (kutu komşuluğuna düştü)")
            try:
                ix = [int(q) for q in h_agac.query(ham[i])]
            except Exception:
                ix = list(range(len(ham_var)))
            return sorted(ham_var[int(q)] for q in ix if ham_var[int(q)] != i)

    parcalar = []
    for i in ham_var:
        kim, g = govdeler[i]
        kb = komsu_govde(i)
        kt = komsu_talep(i)
        # ── ANAHTAR: kendisi + 1 SIÇRAMA komşuluğu (gövde ∪ talep) ──────
        # Kapsam TAM: yukarıdaki ①/② cebirine göre hesaba giren her gövde
        # bu iki kümededir. Dar tutulursa sessizce bayat sonuç doğar.
        _cevre = sorted(set(kb) | set(kt))
        an = _ONB.anahtar(
            "dolgu2_devlet", kara_oz, "%.4f" % r_km,
            "%s=%s" % (kim, _oz(g)),
            "|".join("%s=%s" % (govdeler[j][0], _oz(govdeler[j][1]))
                     for j in _cevre),
            _ctx_oz(kim, [govdeler[j][0] for j in _cevre], g))
        deger = _DEVLET_ONB.get(an)
        if deger is not None:
            _DEVLET_ONB.move_to_end(an)
            ILERLEME["devlet_bellek"] += 1
            var = True
        else:
            var, deger = _ONB.oku("dolgu2_devlet", an)
            if var:
                ILERLEME["devlet_disk"] += 1
        if var:
            _DEVLET_ONB[an] = deger
            while len(_DEVLET_ONB) > _DEVLET_TAVAN:
                _DEVLET_ONB.popitem(last=False)
            ps, eng, km2t, kes = deger
            parcalar.extend(ps)
            rapor["engellendi"].extend(eng)
            rapor["talep_km2"] += km2t
            SAYAC["duvar_kesilen_km2"] += kes
            continue

        _t0 = time.time()
        ILERLEME["devlet_hesap"] += 1
        ps, eng, km2t, kes = _devlet_hesap(i, kim, g, ham, govdeler, kb, kt,
                                           g_liste, rapor)
        # KANONİK SIRA: çıkarılan komşu kümesi daraldığı için GEOS'un parça sırası değişebilir;
        # çıktı sırası (dolayısıyla havuz indeksleri) komşu kümesine değil İÇERİĞE bağlı olsun.
        ps.sort(key=lambda d: (d["cins"], d["g"].bounds, shapely.to_wkb(d["g"], output_dimension=2)))
        _DEVLET_ONB[an] = (ps, eng, km2t, kes)
        while len(_DEVLET_ONB) > _DEVLET_TAVAN:
            _DEVLET_ONB.popitem(last=False)
        SAYAC["duvar_kesilen_km2"] += kes
        if os.environ.get("MOTOR_DOLGU_IZ") == "1":
            import psutil
            print("      [devlet] %-30s %6.1f sn · komşu gövde %3d talep %3d · "
                  "RSS %.1f GB" % (kim, time.time() - _t0, len(kb), len(kt),
                                   psutil.Process().memory_info().rss / 2**30),
                  flush=True)
        _ONB.yaz("dolgu2_devlet", an, (ps, eng, km2t, kes))
        parcalar.extend(ps)
        rapor["engellendi"].extend(eng)
        rapor["talep_km2"] += km2t
    return parcalar


def _devlet_hesap(i, kim, g, ham, govdeler, kb, kt, g_liste, rapor):
    """TEK devletin parçaları. YALNIZ `kb`/`kt` içindeki gövdeleri okur."""
    t = ham[i]
    eng_liste = []
    # B_i — ham talebin kutusuna değen gövdelerin birleşimi.
    B = Polygon()
    if kb:
        try:
            B = _temiz(unary_union([g_liste[j] for j in kb]))
        except Exception:
            B = Polygon()
    if not B.is_empty:
        # 🔴 ENKLAV KURALI: başka devletin A toprağına denk gelen kısım
        #    DOLGU OLMAZ; köprü kurulmaz, "incelenecek" diye raporlanır.
        engel = _temiz(t.intersection(B))
        if not engel.is_empty and _km2(engel) >= ESIK_KM2:
            eng_liste.append((kim, round(_km2(engel), 1)))
        t = _temiz(t.difference(B))
    # MOTOR-YAMA-5GUN-B-1118 (karar 8): devlet içi delik BOYUTTAN BAĞIMSIZ kapanır. Kapanış (`_talep`)
    # yalnız ≤2r (≈403 km) boşluğu kapatır; gövdenin kendi iç halkası (delik) ondan büyükse açık
    # kalırdı. Şart: delikte başka devlet gövdesi (B) ve sahnede kabile/devletsiz yerleşim YOK.
    if DELIK_KURALI:
        _dl = _delik_talebi(g, B)
        if not _dl.is_empty:
            t = _temiz(unary_union([t, _dl])) if not t.is_empty else _dl
    if t.is_empty:
        return [], eng_liste, 0.0, 0.0
    km2t = _km2(t)

    # ── ÇEKİŞME — ①/② denklikleriyle, yalnız ham_j okunarak ────────────
    _sn = time.time()
    cekisme, cik = [], []
    for j in kt:
        hj = ham[j]
        if hj.is_empty:
            continue
        try:
            ort = _temiz(t.intersection(hj))        # = t_i ∩ t_j  (①)
        except Exception:
            continue
        if ort.is_empty or _km2(ort) < ESIK_KM2:
            continue
        cekisme.append((j, ort))
        cik.append(hj)                              # t_i − t_j = t_i − ham_j (②)
    ozel = t
    if cik:
        try:
            ozel = _temiz(ozel.difference(unary_union(cik)))
        except Exception:
            for x in cik:
                ozel = _temiz(ozel.difference(x))
    rapor["sn_cekisme"] += time.time() - _sn

    atamalar = []
    if not ozel.is_empty:
        atamalar.append((ozel, None))
    for j, ort in cekisme:
        kim2, g2 = govdeler[j]
        # 🔴 KANONİK ÇİFT SIRASI — iki taraf da AYNI bölmeyi üretsin diye.
        #    `_paylas` adayların sırasına duyarlıdır (örnek noktaların
        #    sırası Voronoi'ye girer); sıralamazsak i ile j farklı böler,
        #    ortada ya boşluk ya mükerrer kalır ve kimse fark etmez.
        cift = sorted([(kim, g), (kim2, g2)], key=lambda kg: kg[0])
        for k3, par in _paylas(ort, cift):
            if k3 == kim and not par.is_empty:
                atamalar.append((par, "paylasim"))

    # ── CİNS ──────────────────────────────────────────────────────────
    _sn = time.time()
    yerel = [g_liste[j] for j in kb]
    yerel_agac = STRtree(yerel) if yerel else None
    yakin_onb = {}

    def yakin(p):
        """`p`nin kutusuna değen komşu gövdeler + kendi gövdesi, tamponlu.
        `_yakin`ın küresel ağaçla verdiği cevabın AYNISI: `p ⊆ ham_i`
        olduğu için o cevabın her öğesi zaten `kb`dedir."""
        ix = ()
        if yerel_agac is not None:
            try:
                ix = tuple(sorted(int(q) for q in yerel_agac.query(p)))
            except Exception:
                ix = tuple(range(len(yerel)))
        v = yakin_onb.get(ix)
        if v is None:
            try:
                v = _temiz(unary_union([yerel[q] for q in ix] + [g]).buffer(TEMAS))
            except Exception:
                v = _temiz(g.buffer(TEMAS))
            yakin_onb[ix] = v
        return v

    ps = []
    # MOTOR-YAMA-5GUN-B-1118 (karar 7): antlaşma hattı (C/D/E/F) DUVARDIR — bu devletin dolgusu hattın
    # KARŞI yakasına geçmez. Duvar yalnız kendi alanından çıkarılır; karşı taraf kendi hesabında
    # o toprağı (hattın kendi yakası) alabilir.
    _dv = (_CTX.get("duvar") or {}).get(kim)
    _kesilen = 0.0
    if _dv is not None and not _dv.is_empty:
        _yeni = []
        for alan, zorla in atamalar:
            try:
                if alan.intersects(_dv):
                    _a2 = _temiz(alan.difference(_dv))
                    _kesilen += max(0.0, _km2(alan) - _km2(_a2))
                    alan = _a2
            except Exception:
                _yut("duvar:fark (duvarsız devam)")
            if not alan.is_empty:
                _yeni.append((alan, zorla))
        atamalar = _yeni
    for alan, zorla in atamalar:
        for p in _parcalar(alan):
            if _km2(p) < ESIK_KM2:
                continue
            # DOLGU-YEREL-1127: sadeleştirme halkanın BAŞLANGIÇ KÖŞESİNE duyarlıdır (Douglas-Peucker
            # oradan demirler) ve o köşe, çıkarılan komşu kümesinin bileşimine göre değişir — aynı
            # geometri, farklı köşe sırası, ~1 km'lik farklı kırıntı (ölçüldü: 0800 kesiti, silla).
            # Önce KANONİK biçime getirilir ki sonuç yalnız geometriye bağlı olsun.
            p2 = _temiz(shapely.normalize(p).simplify(SADE_TOL, preserve_topology=True))
            if p2.is_empty:
                continue
            c = zorla or _cins(p, g, yakin(p))
            if c == "koridor" and KORIDOR_KURALI:
                # (c) girinti en çok ağız genişliği kadar derin KALABİLİR:
                # ağıza o kadar yakın kesim boş bırakılır, derindeki doldurulur.
                p2 = _koridor_kirp(p2, yakin(p))
                if p2.is_empty or _km2(p2) < ESIK_KM2:
                    continue
            rapor["yazilan_km2"] += _km2(p2)
            ps.append({"kim": kim, "cins": c, "g": p2})
    rapor["sn_cins"] += time.time() - _sn
    return ps, eng_liste, km2t, _kesilen


def _delik_talebi(g, B):
    """`g`nin iç halkaları (delikleri) — boyutu SORULMAZ. Atlanan delik: içinde başka devlet gövdesi
    (`B`, alanı ≥ ESIK_KM2) ya da sahnede kabile/devletsiz yerleşim (`_CTX["engel"]`) olan. Kara
    maskesi uygulanır (göl/deniz deliği dolmaz); `g`nin kendisi çıkarılır."""
    adaylar = []
    engel = _CTX.get("engel")
    for p in _parcalar(g):
        for r in p.interiors:
            try:
                h = _temiz(Polygon(r))
            except Exception:
                _yut("delik:halka (atlandı)")
                continue
            if h.is_empty:
                continue
            if not B.is_empty:
                try:
                    if h.intersects(B) and _km2(_temiz(h.intersection(B))) >= ESIK_KM2:
                        SAYAC["delik_engelli_n"] += 1
                        continue
                except Exception:
                    _yut("delik:B_kesisim (delik atlandı)")
                    continue
            if engel is not None and not engel.is_empty and h.intersects(engel):
                SAYAC["delik_engelli_n"] += 1
                continue
            adaylar.append(h)
    if not adaylar:
        return Polygon()
    try:
        d = _temiz(unary_union(adaylar))
        d = _temiz(d.difference(g))
        if d.is_empty:
            return Polygon()
        kh, kr = _CTX.get("kara_hazir"), _CTX.get("kara")
        if kh is not None:
            d = kh.kes(d)
        elif kr is not None:
            d = _temiz(d.intersection(kr))
    except Exception:
        _yut("delik:birlesim (delikler atlandı)")
        return Polygon()
    if d.is_empty:
        return Polygon()
    SAYAC["delik_n"] += 1
    SAYAC["delik_km2"] += _km2(d)
    return d


def kesit_dolgu(govdeler, kara=None, kara_hazir=None, r_km=None, izgara=None, duvar=None, engel=None):
    """Bir kesitteki (tek tarih) bütün A gövdelerinden dolgu parçaları üretir.

    govdeler : [(kim, shapely geometrisi)] — kim = devlet kimliği (boya anahtarı)
    Döner    : (parcalar, rapor)
        parcalar = [{"kim":…, "cins":…, "g": geometri}]
        rapor    = {"engellendi": [(kim, km2)], "talep_km2": …, "yazilan_km2": …}
    """
    r_km = YARICAP_KM if r_km is None else r_km
    # MOTOR-YAMA-5GUN-B-1118: kesit bağlamı (bkz. modül başındaki blok). `izgara` yoksa Voronoi,
    # `duvar` yoksa duvarsız, `engel` yoksa her delik adaydır.
    _CTX["izgara"], _CTX["duvar"], _CTX["engel"] = izgara, duvar, engel
    _CTX["kara_hazir"], _CTX["kara"] = kara_hazir, kara
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
    # 🔴 YOL ANAHTARA GİRER. İki yol AYNI sonucu vermeli — ama bunu SINAV
    #    ispatlar, anahtar VARSAYMAZ. Yol anahtarda olmasaydı "butun"un
    #    yazdığı kesidi "devlet" okur ve aynılık sınavı kendi kendini
    #    doğrulardı (boş küme her öngörüyü doğrular ailesinin yeni üyesi).
    _kesit_an = _ONB.anahtar(
        "dolgu2_kesit", YOL, _kara_oz, "%.4f" % r_km,
        "|".join("%s=%s" % (k, _oz(g)) for k, g in govdeler),
        _ctx_oz("", sorted({k for k, _g in govdeler})),
        "|".join("%s=%s" % (k, _oz(v)) for k, v in sorted((duvar or {}).items())))
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

    # ── ① HAM TALEPLER — komşuya BAKMAYAN kapanışlar ───────────────────
    # Bu adım her iki yolun da ortağıdır ve tamamen YERELDİR: bir gövdenin
    # ham talebi yalnız o gövdeye, karaya ve kural sürümüne bağlıdır.
    ham = []
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
            _tan = _ONB_TALEP.anahtar("dolgu2_talep", _kara_oz, "%.4f" % r_km, _oz(g))
            _v, _t = _ONB_TALEP.oku("dolgu2_talep", _tan)
            if _v:
                t = _t
                ILERLEME["kapanis_disk"] += 1
            else:
                _mv = False
                if _ONB_MIRAS is not None:
                    _mv, _mt = _ONB_MIRAS.oku("dolgu2_talep", _ONB_MIRAS.anahtar(
                        "dolgu2_talep", _kara_oz, "%.4f" % r_km, _oz(g)))
                if _mv:
                    t = _mt
                    ILERLEME["kapanis_miras"] += 1
                else:
                    _tb = time.time()
                    t = _talep(g, kara_hazir, kara, r_km)
                    _gec = time.time() - _tb
                    rapor["sn_kapanis"] += _gec
                    ILERLEME["kapanis_hesap"] += 1
                    if _gec > 4.0:
                        print("      [yavas] %-28s %.1f sn (kapanis)" % (kim, _gec),
                              flush=True)
                _ONB_TALEP.yaz("dolgu2_talep", _tan, t)
            if _an is not None:
                _TALEP_ONB[_an] = t
                _TALEP_SIRA.append(_an)
                while len(_TALEP_SIRA) > _TALEP_TAVAN:
                    _TALEP_ONB.pop(_TALEP_SIRA.pop(0), None)
        ham.append(t)

    # ── YOL AYRIMI ─────────────────────────────────────────────────────
    # "devlet" (varsayılan): birim TEK DEVLET + 1 SIÇRAMA komşuluğu.
    # "butun": eski tek parça hesap — BİT BİT AYNILIK SINAVININ karşı tarafı.
    if YOL == "devlet":
        parcalar = _yol_devlet(govdeler, ham, rapor, _kara_oz, r_km,
                               _g_agac, _g_liste)
        # MOTOR-YAMA-5GUN-B-1118 KABUL SAYACI: duvar uygulandıktan sonra hâlâ duvarın içinde kalan
        # dolgu. Sıfır olmalı; sıfır değilse parça ADIYLA basılır (sessiz geçmez). Bu sayaç `rapor`da
        # taşınır ⇒ önbellekten gelen kesitte de sayılır.
        rapor["duvar_gecen_n"], rapor["duvar_gecen_km2"] = 0, 0.0
        if duvar:
            for pc in parcalar:
                dv = duvar.get(pc["kim"])
                if dv is None or dv.is_empty:
                    continue
                try:
                    ic = _km2(_temiz(pc["g"].intersection(dv))) if pc["g"].intersects(dv) else 0.0
                except Exception:
                    _yut("duvar:sayac (sayılamadı)")
                    continue
                if ic >= 1.0:
                    rapor["duvar_gecen_n"] += 1
                    rapor["duvar_gecen_km2"] += ic
                    print("      [DUVAR AŞILDI] %s %s %.1f km²" % (pc["kim"], pc["cins"], ic),
                          flush=True)
        _ONB.yaz("dolgu2_kesit", _kesit_an, (parcalar, rapor))
        return parcalar, rapor

    for _ix, (kim, g) in enumerate(govdeler):
        t = ham[_ix]
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


def _birlestir(kayitlar, acik, yeni, a, bitis, cins_sayac):
    """KAYIT BAZLI dönem birleştirme. Anahtar = (devlet, cins, halka dizisi).

    🔴 Eski hâl "kesidin TÜM imzası aynıysa uzat, değilse BÜTÜN kesidi yeniden
       yaz"dı: dünyanın herhangi bir yerinde bir gövde değişince o kesidin 880
       kaydı topluca tekrarlanıyordu (3.007 kesit × ~880 ≈ yüzlerce MB, 100 MiB
       eşiğinin çok üstü). Şimdi yalnız DEĞİŞEN parçanın kaydı açılır; aynı
       parça önceki kesitten (`t == a`) sürüyorsa kaydın `t`si uzatılır."""
    for r in yeni:
        key = (r["k"], r["c"], tuple(r["p"]))
        onc = acik.get(key)
        if onc is not None and onc["t"] == a:
            onc["t"] = bitis
        else:
            kayitlar.append(r)
            acik[key] = r
            cins_sayac[r["c"]] = cins_sayac.get(r["c"], 0) + 1


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
def kosudan(araliklar, kara, cikti, ilerleme=None, kesit_sinir=0, ufuk_gun=None,
            izgara_fn=None, duvar_fn=None, engel_fn=None):
    """`uret_petek.py` A çıktısını yazdıktan SONRA bunu çağırır.

    ufuk_gun (UFUK-BANT-1117, Emre kararı: dolgu bantla değişir): verilirse kapanış yarıçapı
    `r = ufuk_gun × 40,32 / 2` km olur (5 → 100,8 · 7 → 141,1 · 10 → 201,6). Önbellek anahtarına
    `r_km` girdiği için üç yarıçap birbirini bozmaz. None ⇒ modül varsayılanı (UFUK_GUN).

    izgara_fn / duvar_fn / engel_fn (MOTOR-YAMA-5GUN-B-1118): kesit günü `a` verilince sırasıyla
      sürtünmeli paylaşım ızgarası · {kim: hat duvarı} · delik engeli (MultiPoint) döndüren işlevler
      (`uret_petek.py` verir). None ⇒ o kural kapalı (yamadan önceki davranış).
    araliklar : [(f, t, kim, geometri)] — A'nın BELLEKTEKİ gövdeleri.
                Dosyadan okumaz: aynı koşudur, geometri zaten elde.
    🔴 A'YA HİÇ DOKUNMAZ: girdi salt okunur, çıktı AYRI dosyadır. Bu işlev
       patlasa bile A yazılmıştır (çağıran tarafta try/except — `gosterim_
       duzelt`in "süs patlarsa koşuyu öldürmesin" deseninin aynısı).
    Döner: (kayit_sayisi, dosya_boyutu, cins_sayac, sure)
    """
    t0 = time.time()
    _ug = UFUK_GUN if ufuk_gun is None else float(ufuk_gun)
    _r_km = (YARICAP_KM if ufuk_gun is None else _ug * KM_GUN / 2.0)
    kara_hazir = KaraIndeks(kara) if kara is not None else None
    tarihler = sorted({a[0] for a in araliklar}, key=_gk)
    if kesit_sinir:
        tarihler = tarihler[:kesit_sinir]
    havuz, kayitlar = Havuz(), []
    cins_sayac = {c: 0 for c in CINSLER}
    acik = {}
    # DOLGU-YEREL-1127 — SAYAÇSIZ AŞAMA OLMAZ. Koşu 40'ta Ⓑ 183 saat koştu ve kaçıncı kesitte olduğu,
    # ne kadar kaldığı HİÇBİR YERDE yazmıyordu; "takıldı mı, yavaş mı" 6 gün ölçülemedi. Artık en geç
    # `MOTOR_DOLGU_ILERLEME_SN` (300) saniyede bir satır basılır: kesit n/N, tarih, geçen süre, son
    # dilimin hızıyla tahminî kalan ve devlet hesabının nereden geldiği (hesap / bellek / disk).
    _il_sn = float(os.environ.get("DOLGU_ILERLEME_SN", "300") or "300")
    _il_son, _il_n, _il_h = time.time(), 0, 0
    print("  Ⓑ dolgu: %d kesit (%s … %s) · yarıçap %.1f km" % (
        len(tarihler), tarihler[0] if tarihler else "-", tarihler[-1] if tarihler else "-", _r_km),
        flush=True)
    for n, a in enumerate(tarihler, 1):
        if time.time() - _il_son >= _il_sn:
            _simdi = time.time()
            _hiz = (_simdi - _il_son) / max(1, n - 1 - _il_n)          # sn/kesit, son dilim
            print("    Ⓑ kesit %d/%d (%s) · geçen %.1f sa · son dilim %.1f sn/kesit · tahminî kalan "
                  "%.1f sa · devlet: hesap %d (son dilimde %d) / bellekten %d / diskten %d · "
                  "kapanış: hesap %d / miras %d / diskten %d" % (
                      n - 1, len(tarihler), a, (_simdi - t0) / 3600.0, _hiz,
                      _hiz * (len(tarihler) - n + 1) / 3600.0, ILERLEME["devlet_hesap"],
                      ILERLEME["devlet_hesap"] - _il_h, ILERLEME["devlet_bellek"],
                      ILERLEME["devlet_disk"], ILERLEME["kapanis_hesap"],
                      ILERLEME["kapanis_miras"], ILERLEME["kapanis_disk"]), flush=True)
            _il_son, _il_n, _il_h = _simdi, n - 1, ILERLEME["devlet_hesap"]
        # Önbellek anahtarı = aralık indeksi (bkz. `_TALEP_ONB` başlığı).
        govdeler = [(kim, g, _ai) for _ai, (f, t, kim, g)
                    in enumerate(araliklar) if _gk(f) <= _gk(a) < _gk(t)]
        parcalar, _rapor = kesit_dolgu(
            govdeler, kara, kara_hazir, r_km=_r_km,
            izgara=izgara_fn(a) if izgara_fn else None,
            duvar=duvar_fn(a) if duvar_fn else None,
            engel=engel_fn(a) if engel_fn else None)
        SAYAC["duvar_gecen_n"] += _rapor.get("duvar_gecen_n", 0)
        SAYAC["duvar_gecen_km2"] += _rapor.get("duvar_gecen_km2", 0.0)
        bitis = tarihler[n] if n < len(tarihler) else "9999-12-31"
        yeni = [{"f": a, "t": bitis, "k": pc["kim"], "c": pc["cins"],
                 "p": [havuz.ekle(x) for x in _parcalar(pc["g"])]}
                for pc in parcalar]
        _birlestir(kayitlar, acik, yeni, a, bitis, cins_sayac)
        if ilerleme is not None:
            ilerleme(n, len(tarihler), a, len(parcalar))
    boy = js_yaz(cikti, kayitlar, havuz,
                 izi={"ufuk_gun": _ug, "yaricap_km": _r_km,
                      "esik_km2": ESIK_KM2,
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
    # A dosyalarının dizini: varsayılan bu ağacın data/'sı; başka bir koşunun
    # çıktısı (örn. C:\atlas-kosu29\data) MOTOR_DOLGU_VERI_DIZIN ile okunur.
    # YALNIZ OKUNUR — bu dizine hiçbir şey yazılmaz.
    vd = os.environ.get("MOTOR_DOLGU_VERI_DIZIN") or os.path.join(KOK, "data")
    d = _js_oku(os.path.join(vd, "donemler.js"),
                ["DONEMLER", "PARCALAR", "PARCA_HALKA"])
    y = _js_oku(os.path.join(vd, "devletler_harita.js"),
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
    tarihler = sorted({a[0] for a in araliklar}, key=_gk)
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

    # Tek kesit / dar dilim üretimi (tam koşu DEĞİL): MOTOR_DOLGU_TARIH_BAS=<gün>
    # o günden başlayan kesitleri alır, MOTOR_DOLGU_KESIT=<n> n tanesiyle keser.
    _bas = os.environ.get("MOTOR_DOLGU_TARIH_BAS", "")
    if _bas:
        tarihler = [t for t in tarihler if _gk(t) >= _gk(_bas)]
    # MOTOR_DOLGU_TARIH_SON=<gün>: bu günden ÖNCEKİ kesitler (dışlayıcı) — 1281 öncesi
    # ayrı dosya üretimi için (`MOTOR_DOLGU_TARIH_SON=1281-01-01`). Son kayıt `t`si
    # bu günle kapanır (sonraki kesit ayrı koşuda üretilir).
    _son = os.environ.get("MOTOR_DOLGU_TARIH_SON", "")
    _bitis_son = _son or "9999-12-31"
    if _son:
        tarihler = [t for t in tarihler if _gk(t) < _gk(_son)]
    if sinir:
        tarihler = tarihler[:sinir]

    havuz = Havuz()
    kayitlar = []
    cins_sayac = {c: 0 for c in CINSLER}
    engel_top, sure_top, olcum = 0, 0.0, []
    engelli = []          # (tarih, kim, km2) — "gerçek enklav, incelenecek"
    # Dönem birleştirme: ardışık kesitte dolgu BİREBİR aynıysa yeni kayıt
    # açılmaz, öncekinin `t`si uzatılır — `donemler.js`in kendi deseni.
    acik = {}
    for n, a in enumerate(tarihler, 1):
        t2 = time.time()
        # 🔴 ÖNBELLEK ANAHTARI = ARALIK İNDEKSİ. Aynı devletin aynı dönemi
        #    ortalama 99 kesitte canlıdır; geometrisi de kapanışı da o 99
        #    kesitte BİREBİR aynıdır (bkz. _TALEP_ONB başlığındaki ölçüm).
        canli = {}
        for _ai, (f, t, kim, kaynak, idx) in enumerate(araliklar):
            if _gk(f) <= _gk(a) < _gk(t):
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
        bitis = tarihler[n] if n < len(tarihler) else _bitis_son
        yeni = []
        for pc in parcalar:
            yeni.append({"f": a, "t": bitis, "k": pc["kim"], "c": pc["cins"],
                         "p": [havuz.ekle(x) for x in _parcalar(pc["g"])]})
        _birlestir(kayitlar, acik, yeni, a, bitis, cins_sayac)
        print("    %3d/%d  %s  gövde %3d -> dolgu %3d parça · engellenen %d "
              "· %.1f sn (kapanış %.0f · çekişme %.0f · cins %.0f)"
              % (n, len(tarihler), a, len(govdeler), len(parcalar),
                 len(rapor["engellendi"]), sure, rapor.get("sn_kapanis", 0),
                 rapor.get("sn_cekisme", 0), rapor.get("sn_cins", 0)),
              flush=True)

    boy = js_yaz(cikti, kayitlar, havuz,
                 izi={"ufuk_gun": UFUK_GUN, "yaricap_km": YARICAP_KM,
                      "esik_km2": ESIK_KM2,
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
