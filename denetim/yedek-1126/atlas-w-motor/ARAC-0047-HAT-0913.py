# -*- coding: utf-8 -*-
"""0047 — KOMŞU ZİNCİRLERİ + "ÖRTÜLÜ" HAT TARAFI (SALT OKUR)

1) Dokuz yerin kaynaklı komşularının 1500-1750 d/v/s zinciri (D084: komşunun
   günü) ve 1590-03-21 · 1603-10-21 sahipleri.
2) Emre'nin kuralı (koordinatör iletisi): "bir yerleşimden bahsedilmiyorsa ama
   Osmanlı'da kalan toprak hattının batısında kalmış ise enklav olamayacağından
   ... örtülü Osmanlı". Hat = KAYNAKLI Osmanlı noktalarından geçen doğu kenarı.
   İki varyant ölçülür:
     A  Tebriz → Hemedan → Nihâvend           (üçü de TDV ile kaynaklı)
     B  Tebriz → Miyâne → Hemedan → Nihâvend  (Miyâne atlasta Osmanlı, KAYNAĞI
                                              BU RAPORDA OKUNMADI)
   Her yer için: hattın aynı enlemdeki boylamı, fark (km, + = BATI = Osmanlı
   tarafı) basılır. ⚠️ Bu bir GEOMETRİ ÖLÇÜSÜDÜR, sınır çizgisi değildir.

Kullanım:  py denetim/ARAC-0047-HAT-0913.py
"""
import os, sys, io, math

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

Y = girdi.yukle(sessiz=True)
IX = {y["ad"]: y for y in Y}

DOKUZ = ["Kasr-ı Şîrîn", "Zencan", "Sultâniye", "Bîcâr", "Merîvan", "Sakkız", "Bâne",
         "Serdeşt (Sardasht)", "Mahabad (Sâvücbulak)"]
KOMSU = ["Hânekîn", "Şehrizor", "Halepçe", "Kirmanşah", "Hemedan", "Nihâvend", "Burûcird",
         "Mîyandoab", "Merâga", "Miyâne", "Urmiye", "Senendec (Sine)", "Rewândiz", "Tebriz",
         "Kifri", "Zalm", "Gülanber", "Kızılca", "Hasanabad", "Palangan", "Zühab", "Derteng",
         "Derne", "Kazvin", "Halhâl", "Dinever", "Sungur"]


def sahip(y, g):
    if y.get("kur") and y["kur"] > g:
        return "HENÜZ-YOK"
    for p in (y.get("d") or []):
        if p.get("f") <= g < p.get("t"):
            return "OSMANLI"
    for p in (y.get("v") or []):
        if p.get("f") <= g < p.get("t"):
            return "tâbi:" + str(p.get("d") or p.get("k"))
    for p in (y.get("s") or []):
        if p.get("f") <= g < p.get("t"):
            return str(p.get("d"))
    return "SAHİPSİZ"


print("# taban %d nokta" % len(Y))
print("=" * 96)
print("1 · KOMŞU ZİNCİRLERİ (IX'te tam adla bulunamayanlar ayrıca basılır)")
yok = []
for ad in KOMSU:
    y = IX.get(ad)
    if not y:
        yok.append(ad)
        continue
    print("\n■ %s (%.4f, %.4f) dosya=%s kaynak=%s" % (ad, y["lat"], y["lon"], y.get("_kaynak"),
                                                    str(y.get("kaynak"))[:80]))
    for alan in ("d", "v", "s"):
        for p in (y.get(alan) or []):
            if p.get("t", "9999") < "1500-01-01" or p.get("f", "0") > "1750-12-31":
                continue
            ek = {k: v for k, v in p.items() if k not in ("f", "t")}
            print("    %-2s %s → %s %s" % (alan, p.get("f"), p.get("t"), ek or ""))
    print("    1590-03-21=%s · 1603-10-21=%s" % (sahip(y, "1590-03-21"), sahip(y, "1603-10-21")))
print("\nIX'te TAM ADLA YOK: %s" % yok)

# Tüm atlasta tâbi (v:) kullanım biçimi — bir örnek kümesi (biçim sözleşmesi için)
vs = [(y["ad"], p) for y in Y for p in (y.get("v") or []) if p.get("f", "") <= "1590-03-21" < p.get("t", "")]
print("\n1590-03-21'de v: (tâbi) taşıyan nokta sayısı: %d · ilk 8 örnek:" % len(vs))
for ad, p in vs[:8]:
    print("    %s %s" % (ad, p))


def km(la1, lo1, la2, lo2):
    return girdi.km(la1, lo1, la2, lo2)


def hat_boylam(hat, lat):
    for (a, b) in zip(hat, hat[1:]):
        la1, lo1 = a
        la2, lo2 = b
        lo_min, lo_max = min(la1, la2), max(la1, la2)
        if lo_min <= lat <= lo_max:
            if la1 == la2:
                return lo1
            return lo1 + (lat - la1) / (la2 - la1) * (lo2 - lo1)
    return None


def nokta(ad):
    y = IX[ad]
    return (y["lat"], y["lon"])


print()
print("=" * 96)
print("2 · ÖRTÜLÜ HAT TARAFI (+km = hattın BATISI = Osmanlı tarafı)")
HATLAR = {
    "A Tebriz-Hemedan-Nihâvend": [nokta("Tebriz"), nokta("Hemedan"), nokta("Nihâvend")],
    "B Tebriz-Miyâne-Hemedan-Nihâvend": [nokta("Tebriz"), nokta("Miyâne"), nokta("Hemedan"), nokta("Nihâvend")],
    # C: Hemedan ÇIKARILDI — Eskandar Beg (Savory tr.) barış yıllarında Hemedan'a SAFEVÎ vali atıyor,
    #    Osmanlı yalnız Nihâvend kalesini tutuyor. Doğu kenarı KAYNAKLI noktalar: Tebriz · Merâga (TDV)
    #    · Mîyandoab (TDV tebriz 1593 taksimi) · Nihâvend (TDV + Iranica + Eskandar Beg)
    "C Tebriz-Merâga-Mîyandoab-Nihâvend": [nokta("Tebriz"), nokta("Merâga"), nokta("Mîyandoab"), nokta("Nihâvend")],
    # D: C + Miyâne (atlasta Osmanlı; bu raporda KAYNAĞI okunmadı)
    "D Tebriz-Miyâne-Mîyandoab-Nihâvend": [nokta("Tebriz"), nokta("Miyâne"), nokta("Mîyandoab"), nokta("Nihâvend")],
}
for ad in DOKUZ:
    y = IX[ad]
    satir = "  %-22s (%.4f, %.4f)" % (ad[:22], y["lat"], y["lon"])
    for hn, hat in HATLAR.items():
        hb = hat_boylam(hat, y["lat"])
        if hb is None:
            satir += " | %s: ENLEM HAT DIŞI" % hn[0]
        else:
            fark = km(y["lat"], y["lon"], y["lat"], hb) * (1 if y["lon"] < hb else -1)
            satir += " | %s: hat %.3f°D · %+.0f km %s" % (hn[0], hb, fark, "BATI" if fark > 0 else "DOĞU")
    print(satir)
