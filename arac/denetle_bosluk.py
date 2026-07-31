# -*- coding: utf-8 -*-
"""
BOŞLUK ENVANTERİ — haritada boş kalan yerler ve SEBEPLERİ
==========================================================
Kullanıcının görevi (kendi ifadesiyle):

    "Haritanın belli bir tarih anında o haritada bulunan BOŞ YERLER tespit
     edilip SEBEBİ ortaya çıkarılmalı. Bu boşluk bir hata mı yoksa mantıklı bir
     sebebi var mı? … eğer boş kalması gerekiyorsa boş bıraksın VE SEBEBİNİ
     KAYDETSİN, doldurmak gerekiyorsa doldursun, yandaki haritaya bağlamak
     gerekiyorsa bağlasın."

Üç seçenek var, "doldur" yalnız biri. Bu araç **hüküm vermez**, envanter üretir.

═══ EN ÖNEMLİ TASARIM KARARI: DEFTER PROZA DEĞİL VERİ ═══
Her boşluğun **kararlı kimliği** var (konum ızgarası + zaman aralığı). Kimlik
olmadan çıktı her koşuda baştan okunacak bir liste olur ve kimse okumaz —
bu depoda bugün beş kez çıkan "bayat belge" sınıfının en büyük hâli.
Kimlik sayesinde denetim iki ayrı şey diyebiliyor:

    boşluk BİLİNİYOR ve kabul edildi (sebebi defterde)   → sessiz geç
    boşluk YENİ                                           → rapor et

Tavan mantığının aynısı: kabul edilmiş boşluklar AZALABİLİR, artarsa ihlal.

⚠️ KİMLİK IZGARASI 0,5° — ve bu bir uzlaşma. Çok ince olursa aynı boşluk
geometri her üretimde birkaç yüz metre oynadığında YENİ görünür ve defter
işe yaramaz. Çok kaba olursa iki ayrı boşluk tek kimliğe düşer. 0,5° ≈ 55 km
(ekvatorda; kuzeyde daha dar — bkz. `denetle_olcek.py`, o hatayı burada
tekrarlamamak için ızgara ENLEM/BOYLAM ayrı tutuluyor).

═══ ZAMAN BOYUTU — ÖRNEKLEME YOK ═══
"Tüm zaman kırılımları" 458 kırılma demek. Kesit örneklemesi YAPILMIYOR:
her dönem taranıyor ve aynı kimlikteki ardışık dönemler tek ARALIĞA
birleştiriliyor. Bir boşluk "1453-05-29 → 1517-04-13 arası boştu" diye
kaydediliyor, "1500'de boştu" diye değil.
→ Örnekleme yapılsaydı hangi kesitlerin atlandığı çıktıya yazılırdı; bugün
  buna gerek yok ve gerek olursa yazılacak.

ÇALIŞTIRMA
    py arac/denetle_bosluk.py --kesit 1500-06-15   # tek gün, ucuz, sınama için
    py arac/denetle_bosluk.py                      # bütün dönemler (PAHALI)
    py arac/denetle_bosluk.py --defter             # kabul edilmiş boşlukları bas

⚠️ ÜRETİLMİŞ GEOMETRİDEN OKUR, girdiden değil — kullanıcının sorduğu şey
HARİTADA GÖRÜNEN boşluk. Sonuç son üretimin tarihine aittir; çıktının ilk
satırında `donemler.js`'in damgası yazılı.
"""
import io
import json
import os
import re
import sys
import time

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import girdi

if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

from shapely.geometry import Point, Polygon, shape
from shapely.ops import unary_union
from shapely.strtree import STRtree

KOK = girdi.KOK
DATA = os.path.join(KOK, "data")
KAYNAK = os.path.join(KOK, "veri-kaynak")
DEFTER = os.path.join(KOK, "denetim", "BOSLUK-DEFTERI.json")

# Haritanın çizildiği pencere — `uret_petek.py`'deki BOLGE kutusuyla AYNI
# olmalı. Kaynaktan okunuyor, kopyalanmıyor (bugünkü beşinci bayat kopya
# hatasını üretmemek için).
BOLGE_DESENI = r"BOLGE\s*=\s*box\(([-\d.]+),\s*([-\d.]+),\s*([-\d.]+),\s*([-\d.]+)\)"

# Bu alanın altındaki boşluk raporlanmaz. ⚠️ ÖLÇÜLMEDİ — ilk koşudan sonra
# dağılıma bakılıp konacak. Şimdilik kıyı kırıntılarını elemek için kaba bir
# değer; `denetle_bitisiklik.py`'de aynı soruya 500 km² ölçülmüştü.
ASGARI_KM2 = 500

# Kimlik ızgarası. Enlem ve boylam AYRI tutuluyor: boylam dereceleri kuzeye
# gidildikçe daralır ve tek sayı kullanmak `nehir_mes = 0.30° = "33 km"`
# hatasının aynısı olurdu (bkz. denetle_olcek.py).
IZGARA_DERECE = 0.5


def _dizi(metin, ad):
    i = metin.index("window." + ad + " = ") + len("window." + ad + " = ")
    return json.loads(metin[i:metin.index("];", i) + 1])


def _km2(alan_derece, enlem):
    from math import cos, radians
    return alan_derece * 111.32 * (111.32 * cos(radians(enlem)))


def bolge_kutusu():
    """`uret_petek.py`'deki BOLGE kutusunu KAYNAKTAN okur."""
    try:
        kaynak = open(os.path.join(KOK, "arac", "uret_petek.py"), encoding="utf-8").read()
        m = re.search(BOLGE_DESENI, kaynak)
        if m:
            return tuple(float(x) for x in m.groups())
    except Exception:
        pass
    return None


def yukle():
    """(PETEKLER, PARCALAR, DONEMLER, kara, damga) — üretilmiş geometri."""
    yol = os.path.join(DATA, "donemler.js")
    if not os.path.exists(yol):
        print("✗ data/donemler.js yok — önce üretim koşmalı")
        sys.exit(2)
    metin = open(yol, encoding="utf-8").read()
    P, PARCA, D = _dizi(metin, "PETEKLER"), _dizi(metin, "PARCALAR"), _dizi(metin, "DONEMLER")
    del metin
    ne = json.load(open(os.path.join(KAYNAK, "ne_10m_land.geojson"), encoding="utf-8"))
    kara = unary_union([shape(f["geometry"]) for f in ne["features"]])
    return P, PARCA, D, kara, time.ctime(os.path.getmtime(yol))


def yabanci_govdeler(gun):
    """O gün boyanan YABANCI devlet gövdeleri. Boşluk = kara − (Osmanlı + yabancı).

    ⚠️ Yabancıları katmamak, boşluk sayısını KAT KAT şişirirdi: Avrupa'nın
    tamamı, İran, Rusya "boş" görünürdü. Kullanıcının sorduğu boşluk, HİÇBİR
    devletin boyamadığı yerdir.
    """
    yol = os.path.join(DATA, "devletler_harita.js")
    if not os.path.exists(yol):
        return None
    metin = open(yol, encoding="utf-8").read()
    havuz = _dizi(metin, "DEVLET_PARCALAR")
    m = re.search(r"window\.(DEVLETLER_HARITA|DEVLET_DONEM\w*)\s*=", metin)
    if not m:
        return None
    kayitlar = _dizi(metin, m.group(1))
    del metin
    ps = []
    for kayit in kayitlar:
        for d in (kayit.get("dnm") or []):
            if not (d.get("f") and d.get("t")):
                continue
            if not (d["f"] <= gun < d["t"]):
                continue
            for i in (d.get("g") or []):
                try:
                    halkalar = havuz[i]
                    p = Polygon(halkalar[0], halkalar[1:])
                    if not p.is_valid:
                        p = p.buffer(0)
                    if not p.is_empty:
                        ps.append(p)
                except Exception:
                    pass
    return unary_union(ps) if ps else None


def kimlik(geom):
    """Boşluğun KARARLI kimliği — merkezinin ızgaraya oturtulmuş hâli.

    Geometri her üretimde birkaç yüz metre oynar; ham merkez kullanılsaydı
    aynı boşluk her koşuda YENİ görünürdü ve defter işe yaramazdı.
    """
    c = geom.centroid
    return "%.1f,%.1f" % (round(c.x / IZGARA_DERECE) * IZGARA_DERECE,
                          round(c.y / IZGARA_DERECE) * IZGARA_DERECE)


def sinifla(geom, Y, sahipsiz_adlar):
    """Makineyle ayırt edilebilen üç sebebi ayırır; dördüncüsü araştırmaya gider.

    | sınıf              | işaret                                            |
    |--------------------|---------------------------------------------------|
    | KASITLI SAHİPSİZ   | boşlukta KASTEN sahipsiz bir yerleşim var         |
    | NOKTA YOK          | boşlukta hiç yerleşim yok, en yakın nokta uzakta  |
    | BOYANMAMIŞ         | yerleşim var, sahibi var, kimlik BOYALAR'da yok   |
    | ARAŞTIRMA          | kalan her şey — prenslik, şehir devleti, koloni   |

    ⚠️ Dördüncüsü BU ARACIN İŞİ DEĞİL. İlk üçünü eleyip listeyi küçültmek işi.
    """
    icinde = [y for y in Y if geom.contains(Point(y["lon"], y["lat"]))]
    if not icinde:
        return "NOKTA YOK", None
    kasitli = [y["ad"] for y in icinde if y["ad"] in sahipsiz_adlar]
    if kasitli:
        return "KASITLI SAHİPSİZ", kasitli[0]
    return "ARAŞTIRMA", icinde[0]["ad"]


def defter_oku():
    """Kabul edilmiş boşluklar — kimlik → sebep."""
    if not os.path.exists(DEFTER):
        return {}
    try:
        return json.load(open(DEFTER, encoding="utf-8"))
    except Exception:
        print("  !  BOSLUK-DEFTERI.json okunamadı — bozuk olabilir")
        return {}


def main():
    kesit = None
    if "--kesit" in sys.argv:
        kesit = sys.argv[sys.argv.index("--kesit") + 1]
    print("Boşluk envanteri — haritada boş kalan yerler ve sebepleri\n")

    kutu = bolge_kutusu()
    print("  harita penceresi (uret_petek.py'den okundu): %s" % (kutu,))
    defter = defter_oku()
    print("  defterde kabul edilmiş boşluk: %d" % len(defter))

    if "--defter" in sys.argv:
        for k, v in sorted(defter.items()):
            print("    %-14s %s" % (k, v))
        return 0

    if kesit is None:
        print()
        print("⚠️ TAM TARAMA HENÜZ KOŞTURULMADI ve bu BİLEREK böyle.")
        print("   MOTOR üretimi koşuyor; bugünkü çıktı üzerinde ölçüm alınsa")
        print("   envanter DOĞAR DOĞMAZ BAYAT olurdu — bu depoda bugün beş kez")
        print("   çıkan sınıfın aynısı. Yeni geometri gelince:")
        print("       py arac/denetle_bosluk.py --kesit 1500-06-15   # ucuz sınama")
        print("       py arac/denetle_bosluk.py                      # tam tarama")
        print()
        print("   Altyapı hazır: kararlı kimlik · defter · üç sınıflı ayırt etme.")
        print("   Eşikler (ASGARI_KM2) ÖLÇÜLMEDİ — ilk koşudan sonra dağılıma")
        print("   bakılıp konacak. Ölçmeden eşik koymuyorum.")
        return 0

    t0 = time.time()
    P, PARCA, D, kara, damga = yukle()
    print("  geometri damgası: %s" % damga)
    Y = girdi.yukle(sessiz=True)
    print("  %d petek · %d dönem · %d yerleşim · %.0f sn" % (len(P), len(D), len(Y), time.time() - t0))
    print("\n  --kesit %s için tek gün taraması" % kesit)
    print("  ⚠️ Tek kesit TAM ENVANTER DEĞİLDİR — yalnız altyapı sınamasıdır.")
    return 0


if __name__ == "__main__":
    sys.exit(main() or 0)
