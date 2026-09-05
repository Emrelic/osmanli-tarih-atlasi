# -*- coding: utf-8 -*-
"""ORTEN KUNYE TARAMASI — "kunye var, veri BASKA kimlik boyuyor" vakalari.

Sevk: 1.MURAT M-2785 ⑦. Oturum NEHIR SURTUNME, 5 Eylul 2026.
SALT OKUMA — hicbir dosyaya yazmaz.

🔴 KABA KUTU KULLANILIYOR VE BU DAMGALANIYOR.
   Kunyelerde koordinat YOK, yalniz `bolge` var (27 kaba bolge).
   Bir kunyenin cografyasini olcmek icin ELLE yazilmis dikdortgen
   kutular kullaniliyor. Kutular:
     · kabaca dogru, sinirlarda TASAR ya da EKSIK KALIR
     · tarihsel sinirlari DEGIL bugunku cografi adlari izler
   ⇒ Bu aracin ciktisi bir HUKUM DEGIL, bir ADAY LISTESIDIR.
     Her 🔴 kaydin ayrica kaynakla dogrulanmasi gerekir.

SORU (sevkten birebir): "bu kunyenin cografyasinda ve penceresinde,
veri BASKA bir kimlik mi kullaniyor?"
   🔴 ORTUYOR   baska kimlik kullaniliyor  → DOGRULUGU AYRICA SINANMALI
   ⚪ BOS       o kutuda hic nokta yok     → ileri donuk kunye (§6 mesru)
"""
import io
import os
import sys
from collections import Counter

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, os.path.join(KOK, "arac"))

# ── KABA KUTULAR: id -> (lat_min, lat_max, lon_min, lon_max)
#    ELLE yazildi, kaynakla dogrulanmadi. Bkz. yukaridaki damga.
KUTU = {
    "kutlughanli":       (27.0, 32.0, 54.0, 60.0),   # Kirman
    "erdel":             (45.5, 47.8, 22.0, 26.5),   # Transilvanya
    "mora-despotlugu":   (36.4, 38.4, 21.0, 23.5),   # Mora
    "naksa-dukaligi":    (36.5, 37.8, 24.5, 26.0),   # Kiklad
    "dubrovnik":         (42.3, 43.0, 17.3, 18.6),
    "hersek":            (42.6, 43.6, 17.5, 19.0),
    "zeta":              (41.8, 42.9, 18.4, 20.0),
    "bohemya":           (48.5, 51.0, 12.0, 16.8),
    "floransa":          (42.8, 44.3, 10.2, 12.0),   # Toskana
    "kasim":             (54.5, 55.5, 40.5, 42.5),   # Kasimov
    "makdisu-sultanligi": (-2.0, 6.0, 42.0, 48.0),   # Benadir
    "cezayir-ocagi":     (32.0, 37.2, -2.5, 9.0),
    "tunus-ocagi":       (30.0, 37.5, 7.5, 11.6),
    "trablusgarp-ocagi": (24.0, 33.0, 9.0, 25.0),
    "misir-kavalali":    (22.0, 31.7, 25.0, 35.0),
    "sarki-rumeli":      (41.5, 42.6, 24.0, 27.5),
    "polonya-erken":     (49.0, 54.5, 15.0, 24.0),
    "evfat":             (8.5, 11.5, 39.0, 42.5),    # Ifat
    "bosna-isgal":       (42.5, 45.3, 15.7, 19.6),
    "girit-devleti":     (34.8, 35.7, 23.4, 26.4),
    "kibris-ingiliz":    (34.5, 35.7, 32.2, 34.6),
    "oniki-ada-italyan": (35.8, 37.7, 26.0, 28.3),
}

ATLAS_BASI, ATLAS_SONU = "1281-01-01", "1923-10-29"


def pad(s):
    """🔴 UC HANELI YIL TUZAGI: ISO dizgi karsilastirmasinda
       "700-01-01" > "1281-01-01" cikar ("7" > "1"). devletler.js'te
       uc haneli yil tasiyan kunyeler VAR (dubrovnik f:700-01-01).
       Karsilastirmadan ONCE yil DORT HANEYE tamamlanir.
       ⚠️ Bu tuzak bu aracin ILK surumunde GERCEKLESTI: `dubrovnik`
       "pencere atlas disinda" diye SESSIZCE elendi."""
    if not s:
        return s
    p = str(s).split("-")
    return "-".join(["%04d" % int(p[0])] + p[1:])


def kesitler(f, t):
    """UC kesit gunu: pencerenin BASI · ORTASI · SONU.

    🔴 IKINCI OKUMA (M-2794 ⑤): ilk surum TEK GUN ornekliyordu ve bunu
       kendi sinirim olarak yazmistim ("cezayir-ocagi 314 yil suruyor,
       ben 1673-06-15'i olctum"). Pencere icinde kimlik degisiyorsa tek
       gun onu goremez. Artik uc gun.
    """
    a = max(pad(f) or ATLAS_BASI, ATLAS_BASI)
    b = min(pad(t) or ATLAS_SONU, ATLAS_SONU)
    if a >= b:
        return []
    ya, yb = int(a[:4]), int(b[:4])
    if yb - ya < 2:
        return ["%04d-06-15" % ya]
    return ["%04d-06-15" % y
            for y in (ya + 1, (ya + yb) // 2, yb - 1)]


def sahip(y, g):
    """O gun noktayi kim tutuyor?

    🔴 BU FONKSIYONUN ILK SURUMU `isg:` ALANINI HIC OKUMUYORDU ve ILK
       ELDEN YANLIS BIR BULGU URETTI: Bosna noktalarini "OSMANLI" diye
       raporladi, oysa 15'i ZATEN `d:OSMANLI + isg:avusturya` tasiyordu
       — yani aranan duzeltme COKTAN YAPILMISTI. Alet hata VERMEDI,
       yalnizca ustteki eslesmeyi dondurup GERI KALANI YUTTU.
    ⇒ Artik BILESIK durum donuyor: butun eslesen alanlar `+` ile.
    """
    r = []
    for p in (y.get("d") or []):
        if (p.get("f") or "") <= g < (p.get("t") or ""):
            r.append("OSMANLI")
    for p in (y.get("v") or []):
        if (p.get("f") or "") <= g < (p.get("t") or ""):
            r.append("tabi(v:)")
    for p in (y.get("s") or []):
        if (p.get("f") or "") <= g < (p.get("t") or ""):
            r.append(p.get("d") or "—")
    for p in (y.get("isg") or []):
        if (p.get("f") or "") <= g < (p.get("t") or ""):
            r.append("isg:" + str(p.get("d")))
    return "+".join(r) if r else "SAHIPSIZ"


def main():
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
    os.chdir(KOK)
    import girdi

    Y = girdi.yukle(sessiz=True)
    D = girdi.oku_devletler()
    ix = {d["id"]: d for d in D if d.get("id")}

    # veride HIC kullanilmayan kimlikler
    kullanilan = set()
    for y in Y:
        for alan in ("s", "v", "isg"):
            for p in (y.get(alan) or []):
                if p.get("d"):
                    kullanilan.add(p["d"])

    print("🔴 KABA KUTU — bu ciktinin her satiri bir ADAY, bir HUKUM DEGIL.")
    print("   Kutular elle yazildi ve kaynakla dogrulanmadi.\n")
    print("taranan kunye: %d · atlas noktasi: %d\n" % (len(KUTU), len(Y)))

    ortuyor, bos, atlanan = [], [], []
    for kid, (la, lb, oa, ob) in sorted(KUTU.items()):
        k = ix.get(kid)
        if not k:
            atlanan.append((kid, "kunye YOK"))
            continue
        if kid in kullanilan:
            atlanan.append((kid, "veride KULLANILIYOR"))
            continue
        gunler = kesitler(k.get("f"), k.get("t"))
        if not gunler:
            atlanan.append((kid, "pencere atlas disinda"))
            continue
        icinde = [y for y in Y
                  if isinstance(y.get("lat"), (int, float))
                  and la <= y["lat"] <= lb and oa <= y["lon"] <= ob]
        if not icinde:
            bos.append((kid, k.get("ad"), gunler))
            continue
        tablo = [(g, Counter(sahip(y, g) for y in icinde)) for g in gunler]
        ortuyor.append((kid, k.get("ad"), k.get("f"), k.get("t"),
                        len(icinde), tablo))

    print("═══ 🔴 ORTUYOR — kutuda nokta VAR, kunye kullanilmiyor (%d)"
          % len(ortuyor))
    for kid, ad, f, t, n, tablo in ortuyor:
        print("\n  %-20s %s → %s   [kutuda %d nokta]" % (kid, f, t, n))
        print("     %s" % ad)
        for g, c in tablo:
            ilk = " · ".join("%s %d" % (k2, v2) for k2, v2 in c.most_common(4))
            print("       %s   %s" % (g, ilk))
        # kesitler arasi FARK var mi?
        kumeler = [frozenset(c) for _, c in tablo]
        if len(set(kumeler)) > 1:
            print("       🔴 KESITLER ARASI FARK VAR — tek gun ornekleme"
                  " bunu KACIRIRDI")

    print("\n═══ ⚪ BOS — kutuda hic nokta yok, ileri donuk (%d)" % len(bos))
    for kid, ad, gunler in bos:
        print("  %-20s %s" % (kid, ad))

    print("\n═══ ATLANAN (%d)" % len(atlanan))
    for kid, sebep in atlanan:
        print("  %-20s %s" % (kid, sebep))

    # ── BILESIK DURUM SAYIMI (M-2794 ⑤ ikinci sart)
    print("\n═══ BILESIK DURUM SAYIMI — `isg:` NEREDE BINIYOR")
    print("   (butun atlas · her `isg:` doneminin ORTA gunu ornekleniyor)")
    bil = Counter()
    isg_don = 0
    for y in Y:
        for p in (y.get("isg") or []):
            isg_don += 1
            a, b = pad(p.get("f")), pad(p.get("t"))
            if not a or not b or a >= b:
                bil["olculemedi (pencere bozuk)"] += 1
                continue
            g = "%04d-06-15" % ((int(a[:4]) + int(b[:4])) // 2)
            d = sahip(y, g)
            taban = "+".join(x for x in d.split("+")
                             if not x.startswith("isg:")) or "SAHIPSIZ"
            bil[taban + " + isg:"] += 1
    print("   toplam `isg:` donemi: %d" % isg_don)
    for k2, v2 in bil.most_common():
        print("     %-34s %d" % (k2, v2))


if __name__ == "__main__":
    main()
