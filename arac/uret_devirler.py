# -*- coding: utf-8 -*-
"""
URET_DEVIRLER — antlaşmalarda hangi toprağı kim aldı, taralı gösterim için
=========================================================================

hatalar 8.docx madde 1, kullanıcının GENEL KURAL isteği:

  "karlofça antlaşması ile her ülkeye verilen toprakları kırmızı ve diğer
   ülkenin renginde olacak şekilde Avusturya Lehistan rusya ve venediğin ayrı
   ayrı renklerine göre taralı bir şekilde kırmızı/sarı kırmızı/yeşil
   kırmızı/turuncu kırmızı/mavi gibi farklı ülkelerin farklı nereleri aldığını
   toplam kaybı gösterecek şekilde taralı alan uygulaması yap ve antlaşmalarda
   bu yöntemi uygulayalım bunu da genel kural yapalım."

NEDEN AYRI BİR BETİK: `uret_petek.py` başka oturumun dosyası ve bu iş onun
girdisine hiç dokunmuyor — üretilmiş çıktıyı (donemler.js, devletler_harita.js)
okuyup yeni bir çıktı yazıyor. Böylece motorun kilidini beklemeye gerek kalmıyor.
Üretim sırası: uret_petek.py → BU BETİK → surum_damgala.py

YÖNTEM. Bir antlaşmanın "toplam kaybı", tek bir günün farkı değildir; savaşın
başındaki Osmanlı gövdesi ile antlaşma sonrası alıcının gövdesinin KESİŞİMİdir.
Karlofça bunun tam örneği: Budin 1686'da, Eğri 1687'de, Varad 1692'de düştü —
veri her kaybı kendi fetih tarihine yazıyor (ki doğrusu bu), dolayısıyla
1699-01-26'da yalnız Podolya'nın Lehistan'a devri görünüyor. Kullanıcının
istediği "toplam kayıp" ancak savaş penceresiyle çıkar:

    devir[alıcı] = (Osmanlı gövdesi @ savaş başı) ∩ (alıcının gövdesi @ antlaşma sonrası)

Çıktı `data/devirler.js` → `window.DEVIRLER`. Her kayıt:
    { ad, t, savas_basi, alicilar: [ { id, ad, renk, parca: [...] } ] }
`js/app.js` bu parçaları kırmızı + alıcının rengiyle çapraz taralı çiziyor.
"""
import hashlib
import io
import json
import os
import re
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

from shapely.geometry import shape, MultiPolygon, Polygon
from shapely.ops import unary_union

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KOK, "data")

# ---------------------------------------------------------------------------
# ANTLAŞMA KATALOĞU — genel kural burada büyür
# ---------------------------------------------------------------------------
# `savas_basi`: kaybın başladığı an. Antlaşmanın kendisi değil, o antlaşmayı
# doğuran savaşın başı — çünkü toprak antlaşma günü değil savaş boyunca gitti.
# `alicilar`: hangi devlet kimlikleri toprak aldı. Sıra önemsiz.
ANTLASMALAR = [
    {"ad": "Karlofça Antlaşması", "t": "1699-01-26", "savas_basi": "1683-07-14",
     "alicilar": ["avusturya", "lehistan", "venedik", "rusya"]},
    {"ad": "Pasarofça Antlaşması", "t": "1718-07-21", "savas_basi": "1714-12-08",
     "alicilar": ["avusturya", "venedik"]},
    # hatalar 9.docx madde 2-3. İkisi de KENDİ GÜNÜNDE hiçbir yerleşim
    # değiştirmiyor; kayıplar daha önceki askerî tarihlere yazılı (1730-08-12
    # Nâdir'in taarruzu, 1735-06-19 Baghavard bozgunu). Karlofça ile aynı
    # örüntü — taralı devir gösteriminin tam konusu.
    {"ad": "Ahmed Paşa Antlaşması", "t": "1732-01-10", "savas_basi": "1730-08-01",
     "alicilar": ["safevi"]},
    {"ad": "İstanbul Antlaşması (1736)", "t": "1736-09-01", "savas_basi": "1735-06-01",
     "alicilar": ["iran"]},
    {"ad": "Küçük Kaynarca Antlaşması", "t": "1774-07-21", "savas_basi": "1768-10-08",
     "alicilar": ["rusya"]},
    {"ad": "Yaş Antlaşması", "t": "1792-01-09", "savas_basi": "1787-08-17",
     "alicilar": ["rusya", "avusturya"]},
    {"ad": "Bükreş Antlaşması", "t": "1812-05-28", "savas_basi": "1806-12-22",
     "alicilar": ["rusya"]},
    {"ad": "Edirne Antlaşması", "t": "1829-09-14", "savas_basi": "1828-04-26",
     "alicilar": ["rusya", "yunanistan"]},
    {"ad": "Berlin Antlaşması", "t": "1878-07-13", "savas_basi": "1877-04-24",
     "alicilar": ["rusya", "avusturya", "sirbistan", "romanya", "bulgaristan"]},
    # Libya, Balkan Harbi antlaşmalarında değil UŞİ'de gitti — ayrı savaş, ayrı
    # pencere. Aynı listeye konunca 593 bin km² Balkan kaybı gibi görünüyordu.
    {"ad": "Uşi (Ouchy) Antlaşması", "t": "1912-10-18", "savas_basi": "1911-09-29",
     "alicilar": ["italya"]},
    {"ad": "Londra ve Bükreş antlaşmaları", "t": "1913-08-10", "savas_basi": "1912-10-08",
     "alicilar": ["yunanistan", "sirbistan", "bulgaristan", "karadag"]},
]

# yaklaşıklık toleransı (derece). Taralı gövde ince ayrıntı taşımak zorunda
# değil; dosya boyutu daha önemli.
TOL = 0.02
BASAMAK = 3

# ---------------------------------------------------------------------------
# İŞGAL ÖRTÜSÜ — `window.ISGALLER`
# ---------------------------------------------------------------------------
# `js/app.js` bu diziyi 31 Temmuz'dan beri OKUYOR ama ÜRETİCİSİ HİÇ YAZILMAMIŞTI.
# `girdi.py:121` "üretici arac/uret_devirler.py" diyordu, `denetle_statu.py:598`
# "üretici henüz yok, katman BOŞ diziyle çalışıyor" diyordu — ve `app.js`teki
# `|| []` koruması yüzünden hata vermiyordu, sadece görünmüyordu.
# ARAYÜZ oturumu canlı sayfada ölçtü: `ISGALLER.length === 0`.
# 📌 `data/olaylar_ek8.js`in 4 commitlik 404'ünün aynı sınıfı: yazılmış görünen,
# çalışmayan iş. O gün korumayı eklemiştik, bugün korumanın neyi sakladığını gördük.
#
# ═══ `app.js` SÖZLEŞMESİ (isgalDesenleriKur + isgalGuncelle) ═══
#   { id, ad, renk, sahipRenk, f, t, parca: <MultiPolygon koordinatları> }
#   `renk`      → işgalcinin rengi (tarama şeridi)
#   `sahipRenk` → ALTTAKİ de jure sahibin rengi (taban şeridi)
#
# 🔴 `sahipRenk` NEDEN ŞART: `app.js:1118` varsayılanı
# `OSMANLI_KIRMIZI` (#8e0b22 = DOĞRUDAN idare). Doldurulmazsa Mısır 1882-1914
# arası "doğrudan Osmanlı toprağı, İngiltere işgalinde" görünür ve **Kavalalı
# vassallığı 32 yıl boyunca haritadan silinir.** Ölçüldü (ARAYÜZ):
#   ingiltere 1882-09-14→1914-12-18   55 kayıt   tabanı TAMAMI `v:` (tâbi)
#   avusturya 1878-07-29→1908-10-05    3 kayıt   tabanı TAMAMI `d:` (doğrudan)
# İki bölüm de kendi içinde türdeş — bölme gerekmiyor.
TABI_TON = "#b2384a"        # v: dolgusunun tonu (app.js vassal-dolgu ile aynı)
DOGRUDAN_TON = "#8e0b22"    # d: dolgusu — app.js'in varsayılanıyla aynı

# İşgalci kimliğin adı ve rengi. `renkler.py`den okunur, KOPYALANMAZ.
ISGALCI_AD = {"ingiltere": "İngiltere", "avusturya": "Avusturya-Macaristan"}


def oku_pencere(yol, degisken):
    """`window.<degisken> = [ ... ];` bloğunu okur.

    ⚠️ denetle.py'nin okuyucusu buraya OLDUĞU GİBİ kopyalanamaz: o, anahtardan
    dosyanın SON `]` karakterine kadar alıyor. donemler.js içinde üç ayrı
    atama var (PARCALAR, PETEKLER, DONEMLER) ve o yöntem PARCALAR'ı okurken
    sonraki atamalara taşıyor — "Extra data: char 25768185" hatası buydu.
    Burada köşeli parantez dengesi sayılıyor.
    """
    js = io.open(yol, encoding="utf-8").read()
    js = "\n".join(l for l in js.split("\n") if not l.strip().startswith("//"))
    anahtar = "window.%s = " % degisken
    i = js.index(anahtar) + len(anahtar)
    while js[i] not in "[{":
        i += 1
    derinlik, j, metin = 0, i, False
    while j < len(js):
        c = js[j]
        if metin:
            if c == "\\":
                j += 2
                continue
            if c == '"':
                metin = False
        elif c == '"':
            metin = True
        elif c in "[{":
            derinlik += 1
        elif c in "]}":
            derinlik -= 1
            if derinlik == 0:
                j += 1
                break
        j += 1
    govde = js[i:j]
    k = re.sub(r'([{,]\s*)([A-Za-zçğıöşüÇĞİÖŞÜ_]\w*)\s*:', r'\1"\2":', govde)
    k = re.sub(r',(\s*[\]}])', r'\1', k)
    return json.loads(k)


def coz(dizi, havuz):
    """Parça havuzu indekslerini koordinat dizisine çevirir."""
    if not dizi:
        return []
    return [havuz[x] if isinstance(x, int) else x for x in dizi]


def govde(parcalar):
    """Koordinat dizilerinden tek bir geçerli geometri kurar."""
    pl = []
    for p in parcalar:
        try:
            if p and isinstance(p[0][0], (list, tuple)):
                g = Polygon(p[0], p[1:]) if len(p) > 1 else Polygon(p[0])
            else:
                g = Polygon(p)
            g = g.buffer(0)
            if not g.is_empty:
                pl.append(g)
        except Exception:
            continue
    return unary_union(pl) if pl else None


def yuvarla(g):
    """Geometriyi sadeleştirip koordinatları kısaltır."""
    g = g.simplify(TOL, preserve_topology=True)
    parca = []
    # ⚠️ Kesişim GeometryCollection dönebilir: iki gövde bir kenar boyunca
    # değiyorsa sonuçta poligonun yanında LineString ve Point de çıkar.
    # Yalnız poligonlar alınır; ötekiler sıfır alanlı, taramada işi yok.
    if g.geom_type in ("GeometryCollection", "MultiPolygon"):
        gl = list(g.geoms)
    else:
        gl = [g]
    for p in gl:
        if p.geom_type == "MultiPolygon":
            gl.extend(p.geoms)
            continue
        if p.geom_type != "Polygon" or p.is_empty or p.area < 0.002:  # ~25 km² altı
            continue
        halkalar = [[[round(x, BASAMAK), round(y, BASAMAK)] for x, y in p.exterior.coords]]
        for ic in p.interiors:
            if Polygon(ic).area > 0.002:
                halkalar.append([[round(x, BASAMAK), round(y, BASAMAK)] for x, y in ic.coords])
        parca.append(halkalar)
    return parca


def isgalleri_uret(PETEK_GOVDE, PAR):
    """`isg:` dönemlerinden `window.ISGALLER` kayıtlarını kurar.

    PETEK_GOVDE: petek indeksi → PARCALAR indeks listesi. Motorun çıktısında
    bu eşleme YOKSA fonksiyon **None döndürür ve sebebini basar** — sessizce
    boş dizi ÜRETMEZ. Sessiz boşluk, düzeltmeye çalıştığımız hatanın kendisi.
    """
    import collections
    sys.path.insert(0, os.path.join(KOK, "arac"))
    import girdi
    from renkler import BOYALAR

    Y = girdi.yukle(sessiz=True)
    ad_ix = {p["a"]: i for i, p in enumerate(PETEKLER_ADLARI)}

    # (işgalci, f, t) → yerleşim adları
    bolum = collections.defaultdict(list)
    for y in Y:
        for p in y.get("isg") or []:
            bolum[(p.get("d"), p["f"], p["t"])].append(y["ad"])

    cikti = []
    for (isgalci, f, t), adlar in sorted(bolum.items(), key=lambda x: x[0][1]):
        # de jure taban: bu bölümün yerleşimleri o gün `v:` mi `d:` mi
        taban = collections.Counter()
        for ad in adlar:
            y = next((x for x in Y if x["ad"] == ad), None)
            if not y:
                continue
            for kat in ("d", "v"):
                if any(q["f"] <= f < q["t"] for q in (y.get(kat) or [])):
                    taban[kat] += 1
                    break
        if len(taban) > 1:
            # Türdeş olmayan bölüm: aynı örtü altında hem doğrudan hem tâbi
            # toprak var. Tek `sahipRenk` ikisini birden anlatamaz.
            print("  ⚠️ %s %s: taban KARIŞIK %r — tek sahipRenk yanlış olur, "
                  "bölüm ikiye ayrılmalı" % (isgalci, f, dict(taban)))
        sahip = TABI_TON if taban.get("v", 0) >= taban.get("d", 0) else DOGRUDAN_TON

        pl = []
        eksik = []
        for ad in adlar:
            i = ad_ix.get(ad)
            if i is None or i >= len(PETEK_GOVDE):
                eksik.append(ad)
                continue
            pl += coz(PETEK_GOVDE[i], PAR)
        if eksik:
            print("  ⚠️ %d yerleşimin peteği bulunamadı: %s"
                  % (len(eksik), ", ".join(eksik[:5])))
        g = govde(pl)
        if g is None or g.is_empty:
            print("  ✗ %-12s %s → %s : gövde kurulamadı" % (isgalci, f, t))
            continue

        renk = (BOYALAR.get(isgalci) or ("?", "#888888"))[1]
        cikti.append({
            "id": isgalci, "ad": ISGALCI_AD.get(isgalci, isgalci),
            "renk": renk, "sahipRenk": sahip,
            "f": f, "t": t, "parca": yuvarla(g),
        })
        print("  ✓ %-12s %s → %s   %3d yerleşim   taban %s"
              % (isgalci, f, t, len(adlar),
                 "tâbi" if sahip == TABI_TON else "doğrudan"))
    return cikti


PETEKLER_ADLARI = []


def main():
    print("Üretilmiş harita okunuyor...")
    D = oku_pencere(os.path.join(DATA, "donemler.js"), "DONEMLER")
    PAR = oku_pencere(os.path.join(DATA, "donemler.js"), "PARCALAR")
    global PETEKLER_ADLARI
    PETEKLER_ADLARI = oku_pencere(os.path.join(DATA, "donemler.js"), "PETEKLER")
    # ⚠️ AYRI DOSYA, `donemler.js` DEĞİL — ve sebebi ölçülmüş: per-petek gövde
    # 1,1 MB ve `donemler.js`i `index.html` YÜKLÜYOR. İçine konsaydı bu veri
    # **her ziyaretçiye** inecekti, oysa yalnız bu betik okuyor.
    # Kural (COĞRAFYA §8.0): üretim ara çıktısı `index.html`'e girmez.
    # ⚠️ ZAMANSIZ: taban geometri, `kur:`/`bit:` devirlerini taşımaz. Bizim iki
    # örtümüz için doğru (en geç `kur:` 1869, `isg:` 1878'den başlıyor) ama bu
    # TESADÜF — 1869 öncesine uzanan bir örtü sorulursa sessizce yanlış olur.
    try:
        GOVDE_YOL = os.path.join(DATA, "petek_govde.js")
        PETEK_GOVDE = oku_pencere(GOVDE_YOL, "PETEK_GOVDE")
        GOVDE_PARCA = oku_pencere(GOVDE_YOL, "PETEK_GOVDE_PARCA")
    except (ValueError, IOError, OSError):
        PETEK_GOVDE = GOVDE_PARCA = None
    DH = oku_pencere(os.path.join(DATA, "devletler_harita.js"), "DEVLET_HARITA")
    DP = oku_pencere(os.path.join(DATA, "devletler_harita.js"), "DEVLET_PARCALAR")
    print("  %d dönem, %d devlet" % (len(D), len(DH)))

    def osmanli_govdesi(g):
        d = [x for x in D if x["f"] <= g < x["t"]]
        if not d:
            d = [x for x in D if x["f"] <= g]
        if not d:
            return None
        son = d[-1]
        pl = coz(son.get("o"), PAR) + coz(son.get("v"), PAR)
        return govde(pl)

    def devlet_govdesi(devlet_id, g):
        dv = next((x for x in DH if x.get("id") == devlet_id), None)
        if not dv:
            return None, None
        pl = []
        for p in (dv.get("dnm") or []):
            if p["f"] <= g < p["t"]:
                pl += coz(p.get("g"), DP)
        return (govde(pl) if pl else None), dv

    cikti = []
    for a in ANTLASMALAR:
        onceki = osmanli_govdesi(a["savas_basi"])
        if onceki is None:
            print("  ✗ %-34s savaş başı gövdesi yok" % a["ad"])
            continue
        alicilar = []
        for aid in a["alicilar"]:
            sonra, dv = devlet_govdesi(aid, a["t"])
            if sonra is None:
                print("     · %-24s %s: gövde yok, atlandı" % (a["ad"][:22], aid))
                continue
            kesisim = onceki.intersection(sonra)
            if kesisim.is_empty:
                continue
            parca = yuvarla(kesisim)
            if not parca:
                continue
            km2 = kesisim.area * 111 * 111 * 0.75
            if km2 < 2000:
                # Antlaşmada toprak almamış tarafı listelemek yanıltıcı: Venedik
                # Pasarofça'da Mora'yı KAYBETTİ, Avusturya Yaş'ta hiçbir şey almadı.
                print("     · %-22s %-22s atlandı (%.0f km², eşik 2000)" % (a["ad"][:20], dv.get("ad", aid)[:20], km2))
                continue
            alicilar.append({"id": aid, "ad": dv.get("ad", aid),
                             "renk": dv.get("renk", "#888"), "parca": parca})
            print("     · %-22s %-22s %6.0f bin km²  %d parça"
                  % (a["ad"][:20], dv.get("ad", aid)[:20], km2 / 1000, len(parca)))
        if alicilar:
            cikti.append({"ad": a["ad"], "t": a["t"], "savas_basi": a["savas_basi"],
                          "alicilar": alicilar})
            print("  ✓ %-34s %d alıcı" % (a["ad"], len(alicilar)))

    # ⚠️ TÜRETİLDİĞİ GEOMETRİNİN PARMAK İZİ (Oturum 16'nın önerisi).
    # devirler.js donemler.js'ten TÜRER. Motor donemler.js'i yeniden ürettiğinde bu
    # dosya sessizce bayatlar: eski geometriye dayanır, kimse fark etmez, denetim
    # temiz görünür. Bugün bu iki kez elle yakalandı — üçüncüsünde kimse bakmayabilir.
    # Girdi tarafında `uret_petek.py`'nin parmak-izi bekçisi var; bu onun ÇIKTI
    # tarafındaki aynası. Özeti buraya yazıyoruz, `denetle_yayin.py` diskteki
    # donemler.js'in güncel özetiyle karşılaştıracak (Oturum 2'nin işi).
    kaynak = os.path.join(DATA, "donemler.js")
    ozet = hashlib.sha256(io.open(kaynak, "rb").read()).hexdigest()

    print("\nİşgal örtüsü...")
    if PETEK_GOVDE is None:
        isgaller = None
        print("  ✗ `window.PETEK_GOVDE` YOK — işgal örtüsü ÜRETİLEMEDİ.")
        print("     Sebep: donemler.js petek başına geometri taşımıyor.")
        print("       PETEKLER  → yalnız {\"a\": ad}")
        print("       DONEMLER  → e/c petek indeksi ama DELTA (giren/çıkan)")
        print("       DONEMLER  → o/v PARCALAR indeksi ama BİRLEŞTİRİLMİŞ gövde")
        print("     Yani 'şu 55 yerleşimin hücrelerinin birleşimi' çıkarılamaz.")
        print("     ⇒ MOTOR `uret_petek.py`ye tek satır eklemeli:")
        print("       window.PETEK_GOVDE = [[<PARCALAR indeksleri>], ...]")
        print("       (petek sırası `PETEKLER` ile aynı; PETEK_TAM zaten elinde)")
        print("     ⚠️ Yaklaşık bir gövde ÜRETİLMEDİ — yanlış yerde taralı alan,")
        print("        hiç taralı alan olmamasından kötüdür.")
    else:
        # 🔴 `GOVDE_PARCA` — `PAR` DEĞİL. İlk denememde `PAR` (donemler.js'in
        # PARCALAR havuzu) geçirdim ve betik HATA VERMEDİ: `PETEK_GOVDE`
        # indeksleri (en büyük 1762) `PARCALAR`ın 2445 elemanına da düşüyor,
        # yani her indeks "geçerli" bir poligon buluyor — **bambaşka bir
        # poligon.** Çıktı üç işgal bölümünü de ✓ ile bastı, gövdeler
        # kuruldu, hiçbir şey patlamadı. Yalnız taralı alanlar **yanlış
        # yerlerde** olacaktı.
        # ⇒ İki havuzun aynı indeks uzayını paylaşmaması tesadüf; paylaşsaydı
        # bu hata hiç yakalanmazdı. Yakalanmasının tek sebebi, çıktıya
        # güvenmeyip indeks aralığını ÖLÇMEM oldu.
        isgaller = isgalleri_uret(PETEK_GOVDE, GOVDE_PARCA)

    yol = os.path.join(DATA, "devirler.js")
    with io.open(yol, "w", encoding="utf-8") as f:
        f.write("// Otomatik üretildi — elle düzenlemeyin. Betik: arac/uret_devirler.py\n")
        f.write("// Antlaşmalarda hangi toprağı kim aldı; js/app.js taralı çiziyor.\n")
        f.write("// Ölçüt: (Osmanlı gövdesi @ savaş başı) ∩ (alıcının gövdesi @ antlaşma).\n")
        f.write("// KAYNAK GEOMETRİ: data/donemler.js sha256 = %s\n" % ozet)
        f.write("// Bu özet diskteki donemler.js ile tutmuyorsa devirler.js BAYATTIR\n")
        f.write("// ve yeniden üretilmelidir — eski geometriye dayanan taralı alanlar\n")
        f.write("// yanlış yere düşer ama hata vermez.\n")
        f.write("window.DEVIRLER_KAYNAK_OZET = \"%s\";\n" % ozet)
        f.write("window.DEVIRLER = " + json.dumps(cikti, ensure_ascii=False,
                                                  separators=(",", ":")) + ";\n")
        if isgaller is None:
            # 🔴 SESSİZ BOŞ DİZİ YAZMIYORUZ. `app.js`teki `|| []` koruması
            # zaten devrede; buraya boş dizi yazmak "üretildi ama boş" ile
            # "hiç üretilmedi"yi ayırt edilemez kılar — tam da bu hatayı
            # bulmamızı 4 ay geciktiren şey buydu.
            f.write("// ⚠️ window.ISGALLER YAZILMADI — donemler.js "
                    "PETEK_GOVDE eşlemesi taşımıyor. Motor onu yazana kadar "
                    "işgal örtüsü görünmez. Ayrıntı: uret_devirler.py\n")
        else:
            f.write("window.ISGALLER = " + json.dumps(isgaller, ensure_ascii=False,
                                                      separators=(",", ":")) + ";\n")
        # Üretim izi (İş G) — DEVIRLER_KAYNAK_OZET'in genel hâli: o yalnız
        # donemler.js'i damgalıyordu, oysa bu çıktı petek_govde +
        # devletler_harita + isg: taşıyan yerleşim dosyalarından da türüyor.
        import girdi
        _iz_girdi = ["data/donemler.js", "data/devletler_harita.js"]
        if os.path.exists(os.path.join(DATA, "petek_govde.js")):
            _iz_girdi.append("data/petek_govde.js")
        _iz_girdi += sorted("data/" + a for a in girdi.parmak_izi())
        f.write(girdi.uretim_izi_js(_iz_girdi,
                                    ["uret_devirler.py", "renkler.py"]))
    print("\ndata/devirler.js yazıldı — %d antlaşma, %.1f KB"
          % (len(cikti), os.path.getsize(yol) / 1024))
    print("   kaynak geometri özeti: %s…" % ozet[:16])


if __name__ == "__main__":
    main()
