# -*- coding: utf-8 -*-
"""TR-1923-SINIR — seçim JSON'unu (ARAC-TR1923-SINIR-0914.py --yaz) YERLEŞİM KAYDINA çevirir.

Dönem zinciri: aynı yakada, 1923-10-28 sahibi AYNI olan EN YAKIN mevcut kayıttan
BİREBİR alınır (s:/d:/v:). `isg:` KOPYALANMAZ (motor okumaz; işgal örtüsü yere
özgüdür, komşudan taşınmaz). `kur:`/`bit:` KOPYALANMAZ.
⚠️ §4 ŞARTLI KOMŞU GÜNÜ: zincirin günleri komşu kaydın KENDİ dönemleridir; hangi
komşudan alındığı `kaynak:` alanına ADIYLA yazılır. Köyün 1281-1923 arası kendi
tarihi ARAŞTIRILMADI — bu kayıtlar SINIR GEOMETRİSİ içindir.

Kullanım: py denetim/ARAC-TR1923-YAZ-0914.py <secim.json>
   → data/yerlesimler_sinir_guney.js (SYR · IRQ)  +  data/yerlesimler_sinir_kuzey.js (GRC · BGR · GEO · ARM · AZE)
"""
import sys, io, os, json, math, contextlib, copy
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, "arac")
import girdi

GUN = "1923-10-28"
KOMSU = {"GRC": "yunanistan", "BGR": "bulgaristan-kralligi", "GEO": "sovyet-rusya",
         "ARM": "sovyet-rusya", "AZE": "sovyet-rusya", "IRQ": "irak-kralligi",
         "SYR": "suriye-lubnan-mandasi"}
HAT_KAYNAK = {
    "GRC": "Lozan md. 2/2 (TTK tam metin): Meriç mecrası · Arda mecrası · Bosna Köy'ü Türkiye'de bırakan düz hat; TDV `lozan-antlasmasi`: 'Karaağaç Türkiye'de kalmak üzere Meriç ırmağının talvegi'",
    "BGR": "Lozan md. 2/1 (TTK tam metin): 'Bulgaristan'ın elyevm tahdit edilmiş olduğu şekilde cenup hududu'",
    "GEO": "Moskova 16.3.1921 + Kars 13.10.1921 — TDV `agri`: 'BUGÜNKÜ Türk-Sovyet sınırı tesbit edilmiştir'",
    "ARM": "Moskova 16.3.1921 + Kars 13.10.1921 — TDV `agri`: 'BUGÜNKÜ Türk-Sovyet sınırı tesbit edilmiştir'",
    "AZE": "Moskova 16.3.1921 + Kars 13.10.1921 — TDV `agri`: 'BUGÜNKÜ Türk-Sovyet sınırı tesbit edilmiştir'",
    "IRQ": "FİİLÎ STATÜKO (Emre kararı 14.9.2026; Lozan md. 3/2 sınırı ERTELEDİ): IBS No.27 Iraq-Turkey Boundary (ABD Dışişleri, 1964) s.4 statüko = Musul vilayetinin kuzey sınırı; Brüksel hattı (29.10.1924) 'almost exactly' o sınır; s.5-7 1926 Ankara çizgisi = Brüksel hattı + Aluman/Aşuta güneyinde küçük düzeltme",
    "SYR": "Ankara İtilafnamesi md. 8 (20.10.1921) — M. Budak, 'Ankara İtilafnâmesi Sürecinde Suriye Sınırı Üzerindeki Tartışmalar', Atatürk Araştırma Merkezi Dergisi XIII/38 (1997) s.405-406: Payas'ın hemen güneyinden yaklaşık Meydan-ı Ekbez'e, Marsuva Suriye'de · Karnaba ve Kilis Türkiye'de, Çobanbey'den Nusaybin'e demiryolu (platform Türkiye'de), Nusaybin-Cizre eski yolu; Lozan md. 3/1 teyit. HATAY 1923'te Suriye'de (TDV `iskenderun` · `suriye`: 1939)",
}
# TARİHÎ AD — GeoNames `alternatenames` alanından, proje deyimiyle "Tarihî (Modern)".
# ⚠️ Hangi alternatif adın 1923'te KULLANILDIĞI ayrıca DOĞRULANMADI; seçim ölçütü:
# 1934 Bulgar ve 1950-60 Türk köy adı değişikliklerinden önceki biçim.
AD_TARIHI = {
    "752611": "Uluköy (Akçadam)", "751390": "Küfkaynapınarı (Azatlı)",
    "743954": "Karpuzlu (Yenikarpuzlu)", "436246": "Mercihamis (Yurtbağı)",
    "392050": "Cumai (Birlikköy)", "313796": "Cibri (Güçlü)",
    "729716": "Malak Dervent (Lalkovo)", "731608": "Umur Fakih (Fakia)",
    "616192": "Kliçatak (Suser)",
}
DOSYA = {"guney": ("data/yerlesimler_sinir_guney.js", "YERLESIMLER_SINIR_GUNEY", ("SYR", "IRQ")),
         "kuzey": ("data/yerlesimler_sinir_kuzey.js", "YERLESIMLER_SINIR_KUZEY", ("GRC", "BGR", "GEO", "ARM", "AZE"))}


def km(a, b, c, d):
    r = math.pi / 180
    return 6371 * math.hypot((d - b) * r * math.cos((a + c) / 2 * r), (c - a) * r)


def sahip(y, g):
    for k in ("d", "v"):
        for p in y.get(k) or []:
            if p["f"] <= g < p["t"]:
                return "OSMANLI" if k == "d" else "tabi"
    for p in y.get("s") or []:
        if p["f"] <= g < p["t"]:
            return p.get("d")
    return None


PENCERE_BAS, PENCERE_SON = "1281-01-01", "1923-10-29"


def _sahip_tur(y, g):
    """(tür, kimlik) — tür d/v/s; yoksa None."""
    for k in ("d", "v"):
        for p in y.get(k) or []:
            if p["f"] <= g < p["t"]:
                return (k, None)
    for p in y.get("s") or []:
        if p["f"] <= g < p["t"]:
            return ("s", p.get("d"))
    return None


def _norm(st):
    if st is None:
        return None
    return "OSMANLI" if st[0] in ("d", "v") else st[1]


def zincir_birlestir(A, B):
    """🔴 ZİNCİR BİRLEŞTİRME (ZINCIR-SINAV-0914 bulgusu üzerine).
    A = en yakın mevcut kayıt (yakası ne olursa olsun) — TARİHSEL KOMŞULUK
    B = aynı yakada, 1923 sahibi aynı en yakın kayıt  — 1923 SAHİPLİĞİ
    T = A ile B'nin SON ayrışmasının başladığı gün. T'den önce A (A o gün
    sahipsizse B), T'den sonra B. Bütün sınır günleri A ya da B'nin KENDİ
    günleridir — yeni gün ÜRETİLMEZ. Döner: (s, d, v, T)."""
    if A is B:
        return A.get("s") or [], A.get("d") or [], A.get("v") or [], None
    sinir = {PENCERE_BAS, PENCERE_SON}
    for Z in (A, B):
        for alan in ("s", "d", "v"):
            for p in Z.get(alan) or []:
                for u in (p["f"], p["t"]):
                    if PENCERE_BAS <= u <= PENCERE_SON:
                        sinir.add(u)
    sinir = sorted(sinir)
    ara = list(zip(sinir[:-1], sinir[1:]))
    esit = [_norm(_sahip_tur(A, f)) == _norm(_sahip_tur(B, f)) for f, _ in ara]
    i = len(ara)
    while i > 0 and not esit[i - 1]:
        i -= 1
    T = ara[i][0] if i < len(ara) else PENCERE_SON
    parca = []
    for f, t in ara:
        st = None
        if f < T:
            st = _sahip_tur(A, f) or _sahip_tur(B, f)
        else:
            st = _sahip_tur(B, f)
        if st is None:
            continue
        if parca and parca[-1][2] == st and parca[-1][1] == f:
            parca[-1][1] = t
        else:
            parca.append([f, t, st])
    s = [{"f": f, "t": t, "d": st[1]} for f, t, st in parca if st[0] == "s"]
    d = [{"f": f, "t": t} for f, t, st in parca if st[0] == "d"]
    v = [{"f": f, "t": t} for f, t, st in parca if st[0] == "v"]
    return s, d, v, T


def js(v):
    return json.dumps(v, ensure_ascii=False, separators=(",", ":"))


def main():
    sec = json.load(open(sys.argv[1], encoding="utf-8"))
    with contextlib.redirect_stdout(io.StringIO()), contextlib.redirect_stderr(io.StringIO()):
        Y = girdi.yukle(sessiz=True)
    # bu aletin ÖNCEKİ turda yazdığı kayıtlar komşu SAYILMAZ (zincirleme devralma yasak, §4)
    Y = [y for y in Y if not str(y.get("neden", "")).startswith("TR-1923-SINIR")]
    adlar = {y["ad"] for y in Y}
    cikti = {"guney": [], "kuzey": []}
    for grup, (_, _, anahtarlar) in DOSYA.items():
        for k in anahtarlar:
            for c in sec["secim"].get(k, {}).get("secilen", []):
                hedef = "tbmm-turkiye" if c["yaka"] == "TR" else KOMSU[k]
                aday = [(km(c["lat"], c["lon"], y["lat"], y["lon"]), y) for y in Y
                        if sahip(y, GUN) == hedef and y.get("tur") != "bolge"]
                d0, kom = min(aday, key=lambda t: t[0])
                dA, komA = min(((km(c["lat"], c["lon"], y["lat"], y["lon"]), y) for y in Y
                                if y.get("tur") != "bolge" and sahip(y, GUN) is not None), key=lambda t: t[0])
                # 🔴 BİRLEŞTİRME YALNIZ AYNI YAKADAKİ KAYIT GERÇEKTEN UZAKSA (>40 km VE en
                # yakın kaydın 2 katından fazla). Sebep ölçüldü: Arpaçay çiftinde
                # (Kliçatak ↔ Küçükperveli) tarihî Osmanlı-Safevî sınırı 1923 sınırıyla
                # ÖRTÜŞÜYOR; 1878-1918'de iki yaka da Rus olduğu için "son ayrışma" 1921
                # çıkıyor ve birleştirme 1535-1878'i karşı yakadan alıp TERSİNE çeviriyordu.
                if not (d0 > 40.0 and d0 > 2.0 * dA):
                    dA, komA = d0, kom
                zs, zd, zv, T = zincir_birlestir(komA, kom)
                ad = AD_TARIHI.get(c["id"], c["ad"])
                if ad in adlar:
                    ad = f"{ad} ({c['ulke']})"
                if ad in adlar:
                    ad = f"{ad} {c['id']}"
                adlar.add(ad)
                alt = [x for x in c["alt"].split(",") if x and not x.startswith("http")][:8]
                kayit = {"ad": ad, "tur": "kasaba" if c["kod"].startswith("PPLA") else "koy",
                         "lat": round(c["lat"], 5), "lon": round(c["lon"], 5), "g": 0, "k": 0, "m": None,
                         "sinir": True}
                for alan, dizi in (("s", zs), ("d", zd), ("v", zv)):
                    if dizi:
                        kayit[alan] = dizi
                if T is None:
                    zmetin = (f"dönemler en yakın kayıt «{kom['ad']}» ({d0:.1f} km; aynı yakada, 1923 sahibi aynı) "
                              f"kaydından BİREBİR")
                else:
                    zmetin = (f"{T} ÖNCESİ en yakın kayıt «{komA['ad']}» ({dA:.1f} km) · {T} SONRASI aynı yakada "
                              f"1923 sahibi aynı en yakın kayıt «{kom['ad']}» ({d0:.1f} km); {T} iki kaydın SON "
                              f"ayrışma günü, yeni gün üretilmedi")
                kayit["kaynak"] = (f"KONUM: GeoNames (CC BY 4.0) allCountries 14.9.2026, id {c['id']} · {c['ad']} · "
                                   f"{c['kod']} · {c['ulke']} · {c['lat']}/{c['lon']}" +
                                   (f" · alternatenames: {', '.join(alt)}" if alt else "") +
                                   f". SINIR ÇİZGİSİ: {HAT_KAYNAK[k]}. ZİNCİR: §4 şartlı komşu günü — "
                                   f"{zmetin}; köyün kendi 1281-1923 tarihi ARAŞTIRILMADI, 1923'te var olduğu AYRICA BELGELENEMEDİ.")
                kayit["neden"] = (f"TR-1923-SINIR sınır çifti ({k}, {'Türkiye' if c['yaka']=='TR' else hedef} yakası): "
                                  f"hatta {c['hat_km']} km; açgözlü seçimde sapma toplamını {c['kazanc_km']} km düşürdü "
                                  f"(denetim/ARAC-TR1923-SINIR-0914.py).")
                cikti[grup].append((k, kayit))
    for grup, (yol, deg, _) in DOSYA.items():
        satir = [
            "// -*- coding: utf-8 -*-",
            f"// {deg} — TR-1923-SINIR (14 Eylül 2026, Emre'nin doğrudan isteği)",
            "// 29 Ekim 1923 Türkiye kara sınırının iki yakasına GERÇEK yerleşimler (GeoNames)",
            "// konarak Voronoi bisektörü sınıra oturtuluyor. Üretici: denetim/ARAC-TR1923-YAZ-0914.py",
            "// Seçici + ölçüm: denetim/ARAC-TR1923-SINIR-0914.py · rapor: denetim/TR1923-SINIR-0914.md",
            "// 🔴 ELLE DÜZENLEME — yeniden üret.",
            "",
            f"window.{deg} = [",
        ]
        son = None
        for k, kay in cikti[grup]:
            if k != son:
                satir.append(f"\n// ══ {k} — {KOMSU[k]} ══")
                son = k
            satir.append(js(kay) + ",")
        satir.append("];\n")
        open(yol, "w", encoding="utf-8").write("\n".join(satir))
        print(f"{yol}: {len(cikti[grup])} kayıt")


if __name__ == "__main__":
    main()
