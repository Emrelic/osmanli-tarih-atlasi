"""Arkeoloji katmanı bölge üreticisi (VERI-MO-ARKEO, 20 Ekim 2026).

Girdi : araştırma JSON'u (ARASTIRMA-BRIFI.md şeması; yerleşim başına kaynak + alıntı + koordinat tanıkları).
Çıktı : data/olaylar_arkeoloji_<bolge>.js            (window.OLAYLAR_ARKEOLOJI_<BOLGE>)  — kronoloji maddeleri
        data/sehir_tarihce_arkeoloji_<bolge>.js      (window.SEHIR_TARIHCE_ARKEOLOJI_<BOLGE>) — motor/site OKUMAZ

    py denetim/arkeoloji_uret_1020.py <arastirma.json> <bolge-kisaltma> [--pencere-son-mo 3000]

Kurallar: şartname §3 (orta nokta yalnız oluş zamanı belirsizliğine; süre aralığında alt sınır; tek değer beyanı),
koordinat ≥2 tanık (>3 km ayrışırsa `konum_not` zorunlu), alıntısız kayıt yazılmaz (reddedilenler stderr'e).
Hiçbir tarih burada UYDURULMAZ: her sayı girdi JSON'undan gelir.
"""
import json, math, os, re, sys

KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
SIRA = ["yil", "onyil", "yuzyil", "binyil", "belirsiz"]
SURE = {"donem-toplami", "yerlesim-suresi", "tabaka-donem"}
UFUK_MO = 12000


def iso(mo):                       # MÖ N -> astronomik -(N-1)
    return "0000-01-01" if mo == 1 else "-%04d-01-01" % (mo - 1)


def gereken(a, b):
    h = abs(a - b) / 2
    return "yil" if h <= 5 else "onyil" if h <= 50 else "yuzyil" if h <= 500 else "binyil"


def km(a, b):
    p = math.pi / 180
    x = (b[1] - a[1]) * p * math.cos((a[0] + b[0]) / 2 * p)
    y = (b[0] - a[0]) * p
    return 6371 * math.hypot(x, y)


def uc(blk, tur_yazili):
    """kur/bit bloğu -> (mo_t, kesinlik, aralik|None, gun, ic_not_parca, kaynak_turu_gerekir)"""
    A, B, tur = blk["bas_mo"], blk.get("son_mo"), blk["aralik_turu"]
    if tur == "yazili":
        kes = blk.get("kesinlik") or "yil"
        return A, kes, None, "MÖ %d" % A, "YAZILI KAYIT (kronoloji okulu/kaynak bkz. kaynak alanı); kaynak tek yıl verir.", "yazili"
    if tur == "tek-deger" or B is None:
        return A, "yuzyil", None, "MÖ %d civarı" % A, "TEK DEĞER MÖ %d (kaynak aralık vermiyor) → orta nokta uygulanmaz." % A, "arkeoloji"
    guven = str(blk.get("guven") or "belirsiz")
    if tur in SURE:
        t = "donem-toplami" if tur == "tabaka-donem" else tur
        ar = {"bas": iso(A), "son": iso(B), "guven": guven, "tur": t}
        return A, "yuzyil", ar, "MÖ %d (ALT SINIR; %s MÖ %d–%d)" % (A, t, A, B), \
            "%s aralığı (MÖ %d–%d) sürenin kendisini gösterir, oluş-zamanı belirsizliği DEĞİL → orta nokta ALINMADI; en eski uç (ALT SINIR) yazıldı." % (t, A, B), "arkeoloji"
    m = (A + B) // 2
    kes = gereken(A, B)
    if kes == "binyil":
        kes = "belirsiz"          # K5 (kesinlik:"binyil") arayüzde yok → en kaba geçerli değer; gun metni aralığı söyler
    ar ={"bas": iso(A), "son": iso(B), "guven": guven, "tur": tur}
    return m, kes, ar, "MÖ %d–%d arası (orta nokta MÖ %d)" % (A, B, m), \
        "ARALIK→ORTA NOKTA: MÖ %d–%d (kaynağın verdiği uçlar); orta nokta MÖ %d = astronomik %s. Harita bu tek günü gösterir, aralık kullanıcıya «~» ile açılır. Güven düzeyi: %s." % (A, B, m, iso(m)[:5], guven), "arkeoloji"


def dogrula(r):
    es = []
    koordsuz = r.get("lat") is None            # yalnız olay üretilir, yerleşim girdisi üretilmez
    for a in ("id", "ad", "d") + (() if koordsuz else ("lat", "lon")):
        if r.get(a) in (None, ""):
            es.append("alan eksik: " + a)
    if not r.get("kur") and not r.get("bit"):
        es.append("kur/bit ikisi de yok")
    for ad in ("kur", "bit"):
        b = r.get(ad)
        if not b:
            continue
        for a in ("bas_mo", "aralik_turu", "kaynak"):
            if b.get(a) in (None, ""):
                es.append("%s.%s eksik" % (ad, a))
        if b.get("aralik_turu") != "yazili" and not (b.get("alinti") or "").strip():
            es.append("%s alıntısız (kaynakta okunduğu kanıtlanmamış)" % ad)
        if b.get("son_mo") is not None and b.get("bas_mo") is not None and b["bas_mo"] < b["son_mo"]:
            es.append("%s uçları ters" % ad)
        if b.get("aralik_turu") == "ham-14C":
            es.append("%s ham-14C (yazılmaz)" % ad)
    tn = r.get("konum_tanik") or []
    if koordsuz:
        return es
    if len(tn) < 2:
        es.append("koordinat için <2 tanık")
    else:
        mx = max(km((x["lat"], x["lon"]), (y["lat"], y["lon"])) for x in tn for y in tn)
        if mx > 3 and not (r.get("konum_not") or "").strip():
            es.append("tanıklar %.1f km ayrışıyor, konum_not yok" % mx)
    return es


def olay_uret(r, b, ad, bolge):
    t_mo, kes, ar, gun, ic, kt = uc(b, None)
    k = r.get("k") if ad == "kur" else "kayip"
    if ad == "kur" and k in (None, "", "kayip"):
        k = "kurulus"
    baslik = r["ad"] + (": " if ad == "kur" else ": ") + (r.get("kur_baslik") if ad == "kur" and r.get("kur_baslik") else
                                                       ("ilk tarihli kanıt / başlangıç" if ad == "kur" else "son / terk"))
    if ad == "bit":
        baslik = r["ad"] + ": " + (r.get("bit_baslik") or "sona erer / son tarihli kanıt")
    o = {"t": iso(t_mo), "k": k, "b": baslik, "gun": gun, "yer": r.get("ad_yerel") or r["ad"],
         "d": r["d"] if ad == "kur" else (r.get("bit_d") or r["d"]), "kaynak": b["kaynak"] + (" · " + b["url"] if b.get("url") else ""),
         "kesinlik": kes}
    if kt == "arkeoloji":
        o["etiket"] = ["arkeoloji"]
        o["kaynak_turu"] = "arkeoloji"
    else:
        o["kaynak_turu"] = "yazili"
    if ar:
        o["aralik"] = ar
    extra = []
    if t_mo > UFUK_MO:
        extra.append("UFUK DIŞI: MÖ %d, ufuk MÖ %d'den %d yıl önce; tarih aynen tutuldu (harita f'i ufka kenetlenir, varsayılan — Emre değiştirebilir)." % (t_mo, UFUK_MO, t_mo - UFUK_MO))
    if b.get("kaynak_sinifi") and b["kaynak_sinifi"] in ("veri-tabani", "ansiklopedi", "akademik-ikincil"):
        extra.append("Kaynak sınıfı: %s (birincil kazı yayını okunmadı)." % b["kaynak_sinifi"])
    if b.get("alinti"):
        extra.append("Kaynaktan okunan: «%s»." % b["alinti"].replace('"', "'"))
    if r.get("ic_not"):
        extra.append(r["ic_not"])
    o["ic_not_d"] = ic + " " + " ".join(extra)
    return o


def yer_uret(r, bolge, pencere_son_mo):
    kur, bit = r.get("kur"), r.get("bit")
    if not kur:
        return None
    t_mo, kes, ar, gun, ic, kt = uc(kur, None)
    ilk_t = iso(t_mo)
    bit_t = None
    if bit:
        bt_mo = uc(bit, None)[0]
        bit_t = iso(bt_mo)
    son = bit_t or iso(pencere_son_mo)
    kult = r.get("sahip_kultur")
    sahip_not = ("Devlet öncesi/kültür dönemi: siyasî sahip kavramı YOK → __BOSLUK__ = «sahip kavramı henüz yok», «kültürsüz» DEĞİL. bos:\"veri-yok\" "
                 "(veri yok ≠ kimse yok; MÖ katmanı beyanı).") + (" Kaynaktaki kültür/dönem adı: %s." % kult if kult else " Kaynakta kültür adı verilmedi (uydurulmadı).")
    ts = [{"f": ilk_t, "t": son, "d": "__BOSLUK__", "kesinlik": kes, "kaynak": kur["kaynak"], "ic_not": sahip_not}]
    if son < "1900-01-01" and not son.startswith("19") :
        ts.append({"f": son, "t": "1900-01-01", "d": "__BILINMIYOR__", "kesinlik": "belirsiz", "kaynak": "bulunamadı",
                   "ic_not": "Bu bölge oturumunun penceresi dışı: yerin sonraki durumu ARAŞTIRILMADI — uydurma süreklilik/kesinti yazılmaz."})
    tn = r["konum_tanik"]
    ktxt = ("KOORDİNAT TEYİTLİ 20 Ekim 2026: " + " ↔ ".join("%s (%.4f,%.4f)" % (x["kaynak"], x["lat"], x["lon"]) for x in tn)
            + (" · " + r["konum_not"] if r.get("konum_not") else ""))
    y = {"id": r["id"], "ad": r["ad"], "atlas_ad": None, "lat": r["lat"], "lon": r["lon"], "kat1900": 3, "adlar": [r["ad"]] + ([r["ad_yerel"]] if r.get("ad_yerel") and r["ad_yerel"] != r["ad"] else []),
         "konum_teyit": ktxt,
         "ilk": {"t": ilk_t, "gun": gun, "nicelik": "arkeolojik" if kt == "arkeoloji" else "ilk_anilis", "kesinlik": kes,
                 "kaynak": kur["kaynak"], "kaynak_turu": kt},
         "kur": None,
         "ark": {"t": ilk_t, "gun": gun, "kesinlik": kes, "kaynak": kur["kaynak"]},
         "bit": ({"t": bit_t, "gun": uc(bit, None)[3], "kesinlik": uc(bit, None)[1], "kaynak": bit["kaynak"]} if bit else None),
         "sahip": ts, "olay": [], "ic_not": ic}
    return y


def main(argv):
    sys.stdout.reconfigure(encoding="utf-8")
    if len(argv) < 2:
        print(__doc__)
        return 2
    kayit = json.load(open(argv[0], encoding="utf-8"))
    ks = argv[1]
    pson = 1
    if "--pencere-son-mo" in argv:
        pson = int(argv[argv.index("--pencere-son-mo") + 1])
    olaylar, yerler, red = [], [], []
    haric = set(argv[argv.index("--haric") + 1].split(",")) if "--haric" in argv else set()
    for r in kayit["kayitlar"]:
        if r.get("tur") in ("kultur", "bolge") and len(r.get("konum_tanik") or []) < 2:
            r["lat"] = r["lon"] = None            # koordinat tek tanıklı: konum YAZILMAZ, olay kalır
        if r.get("id") in haric:
            red.append((r.get("id"), ["elle hariç tutuldu (kaynak yetersiz/dolaylı)"]))
            continue
        es = dogrula(r)
        if es:
            red.append((r.get("id"), es))
            continue
        for ad in ("kur", "bit"):
            if r.get(ad):
                olaylar.append(olay_uret(r, r[ad], ad, ks))
        if r.get("lat") is not None and r.get("tur") != "bolge":
            y = yer_uret(r, ks, pson)
            if y:
                yerler.append(y)
    olaylar.sort(key=lambda o: o["t"])
    ad_up = ks.upper().replace("-", "_")
    ho = os.path.join(KOK, "data", "olaylar_arkeoloji_%s.js" % ks)
    hy = os.path.join(KOK, "data", "sehir_tarihce_arkeoloji_%s.js" % ks)
    with open(ho, "w", encoding="utf-8", newline="\n") as f:
        f.write("// ARKEOLOJİ KATMANI — %s (%s) · ARKEOLOJI-KATMANI-SARTNAME-1018 · üretici denetim/arkeoloji_uret_1020.py · 20 Ekim 2026\n" % (kayit.get("bolge"), ks))
        f.write("// Girdi: denetim/arastirma/%s.json. Her tarih kaynaktan; orta nokta/alt sınır/tek değer beyanı ic_not_d'de. Üretilmiştir: elle düzenleme, JSON'u düzelt.\n" % ks)
        f.write("window.OLAYLAR_ARKEOLOJI_%s = " % ad_up)
        json.dump(olaylar, f, ensure_ascii=False, indent=1)
        f.write(";\n")
    with open(hy, "w", encoding="utf-8", newline="\n") as f:
        f.write("// ŞEHİR TARİHÇESİ — ARKEOLOJİ %s · üretici denetim/arkeoloji_uret_1020.py · motor/denetle/site OKUMAZ\n" % ks)
        f.write("window.SEHIR_TARIHCE_ARKEOLOJI_%s = " % ad_up)
        json.dump(yerler, f, ensure_ascii=False, indent=1)
        f.write(";\n")
    for i, es in red:
        print("REDDEDİLDİ", i, "; ".join(es), file=sys.stderr)
    print("%d olay · %d yerleşim · %d reddedilen" % (len(olaylar), len(yerler), len(red)))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
