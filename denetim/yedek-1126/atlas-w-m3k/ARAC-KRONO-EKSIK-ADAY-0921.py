# -*- coding: utf-8 -*-
"""
KRONO-EKSIK-0921 — ADAY AD LİSTESİ ÜRETİCİSİ (1.MURAT hükmü M-4911(b))
=======================================================================
Hüküm: 579'a toplu alan doldurma YOK. 198'lik "başlığında da el-değiştirme
fiili geçen" kovasından makine YALNIZ ADAY ÜRETİR, seçimi insan yapar.
Bu koşumda kovanın İLK 20 MADDESİ işlenir.

🔴 MAKİNE YAZMAZ, ADAY GÖSTERİR. Çıktı doğrudan `fethedilen:` alanına
dökülecek bir liste DEĞİLDİR; her satır 1.MURAT'ın evet/hayır demesi için
vardır. Sebebi `js/app.js:3343`te ölçülü: metinden türetme 1.360 çiftte
554 tekrar + 739 alâkasız üretmişti.

ADAY NASIL BULUNUR (üç süzgeç, üçü de AYRI raporlanır):
  ① ZAMAN — yerleşimin sahiplik kırılması maddenin gününe ±30 gün içinde
     (Değişmez 2'nin penceresi). `s`/`d`/`v`/`isg` kovalarının hepsi okunur.
  ② YÖN   — kırılma KAZANÇ mı KAYIP mı? (`isg`de yön terstir: işgalin
     başlaması kayıp, bitmesi kazançtır.)
  ③ METİN — yerleşimin adı maddenin `b`/`d`/`yer` metninde geçiyor mu?
     Geçiyorsa aday GÜÇLÜ, geçmiyorsa ZAYIF diye işaretlenir. Metin TEK
     BAŞINA yeterli sayılmaz — ①'i geçmeyen ad listeye hiç girmez.

Sıra: maddeler `t`ye göre ARTAN sıralanır (dosya sırası değil — dosya sırası
tekrarlanabilir değil ve anlatı sırası taşımaz).

Koşum:  py denetim/ARAC-KRONO-EKSIK-ADAY-0921.py [--adet 20]
Çıktı:  denetim/KRONO-EKSIK-ADAY-0921.json + denetim/KRONO-EKSIK-ADAY-0921.md
"""
import io
import json
import os
import re
import sys
from datetime import date

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import denetle  # noqa: E402

ALANLAR = ["fethedilen", "kaybedilen", "statu_dogrudan", "statu_vasal"]
PENCERE = 30

FIIL = re.compile(
    r"(fetih|fethed|fethi|fethin|fetheden|fethetti"
    r"|zapted|zaptet|zaptı|zabted"
    r"|ele geçir|eline geçir"
    r"|teslim ol|teslim al|teslim edil"
    r"|İşgal ed|işgal ed"
    r"|ilhak ed|ilhakı"
    r"|alındı|alınması|ele geçti|geçirildi)",
    re.IGNORECASE,
)


def gno(s):
    s = str(s)
    if len(s) == 7:
        s += "-01"
    if len(s) < 10:
        return None
    try:
        return date(int(s[0:4]), int(s[5:7]), int(s[8:10])).toordinal()
    except ValueError:
        return None


def kirilmalar(y):
    out = []
    for kova in ("s", "d", "v", "isg"):
        for p in y.get(kova) or []:
            for uc in ("f", "t"):
                g = gno(p.get(uc))
                if g is not None:
                    out.append({"g": g, "kova": kova, "uc": uc,
                                "kimlik": p.get("d") or p.get("kid") or ""})
    return out


# 🔴 KOVA ANLAMLARI — YÖN BUNLARDAN OKUNUR, "f = kazanç" DİYE OKUNMAZ.
# Atlas OSMANLI ÇERÇEVELİDİR; kovalar da öyle:
#   `d`   = DOĞRUDAN Osmanlı idaresi   → başlaması KAZANÇ, bitmesi KAYIP
#   `s`   = YABANCI devletin dönemi    → başlaması KAYIP,  bitmesi KAZANÇ
#   `isg` = İŞGAL dönemi               → başlaması KAYIP,  bitmesi KAZANÇ
#   `v`   = TÂBİLİK dönemi             → başlaması STATÜ değişimi (vasal)
#
# ⚠️ İLK YAZIMDA `s` YANLIŞTI: "f = kazanç" düz kuralı bütün Osmanlı
# fetihlerini `kaybedilen` diye öneriyordu — çünkü 1288 Karacahisar'da
# BİZANS dönemi (`s`) biterken Osmanlı dönemi (`d`) başlar ve ikisi AYNI
# GÜNDEDİR; en yakını seçerken liste sırası `s`yi öne alıyordu. Kusur
# veride değil kuraldaydı. (ROZET2 aletinde bu maskeliydi: orada `any()`
# soruluyordu, aynı gün her iki yönde de kırılma bulunduğu için geçiyordu.)
KAZANC = {("d", "f"), ("s", "t"), ("isg", "t")}
KAYIP = {("d", "t"), ("s", "f"), ("isg", "f")}


def kazanc_mi(k):
    return (k["kova"], k["uc"]) in KAZANC


def onerilen_alan(yakin):
    """Penceredeki BÜTÜN kırılmalara bakarak tek alan önerir.

    Öncelik Osmanlı çerçeveli kovalarda (`d`/`v`): aynı günde hem `s` sonu
    hem `d` başı varsa ikisi AYNI OLAYIN iki yüzüdür, `d` söyler.
    """
    çift = {(k["kova"], k["uc"]) for k in yakin}
    if ("d", "f") in çift:
        return "fethedilen"
    if ("v", "f") in çift:
        return "statu_vasal"
    if ("s", "t") in çift or ("isg", "t") in çift:
        return "fethedilen"
    if ("d", "t") in çift:
        return "kaybedilen"
    if ("s", "f") in çift or ("isg", "f") in çift:
        return "kaybedilen"
    return "belirsiz"


def main():
    adet = 20
    if "--adet" in sys.argv:
        adet = int(sys.argv[sys.argv.index("--adet") + 1])

    olaylar = denetle.olaylari_yukle()
    Y = denetle.yerlesimleri_yukle()

    # Kova: alanı OLMAYAN + BAŞLIĞINDA el-değiştirme fiili geçen maddeler.
    kova = [o for o in olaylar
            if not any(o.get(a) for a in ALANLAR)
            and FIIL.search(str(o.get("b", "")))]
    kova.sort(key=lambda o: (str(o.get("t", "")), str(o.get("b", ""))))
    secilen = kova[:adet]

    # Yerleşim indeksi + kırılma önbelleği (3885 ad × 20 madde).
    kayitlar = []
    for y in Y:
        ad = str(y.get("ad", "")).split(" (")[0].strip()
        if not ad:
            continue
        kayitlar.append({"ad": ad, "tam_ad": y.get("ad"), "k": kirilmalar(y)})

    cikti = []
    for o in secilen:
        og = gno(o.get("t"))
        govde = " ".join(str(o.get(k, "")) for k in ("b", "d", "yer"))
        adaylar = []
        if og is not None:
            for r in kayitlar:
                yakin = [k for k in r["k"] if abs(k["g"] - og) <= PENCERE]
                if not yakin:
                    continue
                en = min(yakin, key=lambda k: abs(k["g"] - og))
                adaylar.append({
                    "ad": r["ad"],
                    "onerilen_alan": onerilen_alan(yakin),
                    "gun_farki": en["g"] - og,
                    # İnsanın kararını verebilmesi için penceredeki BÜTÜN
                    # kırılmalar gösterilir — tek "en yakın" yanıltır.
                    "kirilmalar": sorted(
                        {"%s:%s%s%s" % (k["kova"], k["uc"],
                                        "→" + k["kimlik"] if k["kimlik"] else "",
                                        " %+d" % (k["g"] - og))
                         for k in yakin}),
                    "metinde_geciyor": r["ad"] in govde,
                    "guc": "GÜÇLÜ" if r["ad"] in govde else "zayıf",
                })
        adaylar.sort(key=lambda a: (not a["metinde_geciyor"],
                                    abs(a["gun_farki"]), a["ad"]))
        cikti.append({
            "t": o.get("t"), "k": o.get("k"), "b": o.get("b"),
            "yer": o.get("yer", ""),
            "aday_sayisi": len(adaylar),
            "guclu_aday": sum(1 for a in adaylar if a["metinde_geciyor"]),
            "adaylar": adaylar,
        })

    ozet = {
        "evren_madde": len(olaylar),
        "kova_198_gercek_boyut": len(kova),
        "islenen": len(secilen),
        "pencere_gun": PENCERE,
        "sira": "t artan, eşitse b",
        "toplam_aday": sum(c["aday_sayisi"] for c in cikti),
        "toplam_guclu_aday": sum(c["guclu_aday"] for c in cikti),
        "adaysiz_madde": sum(1 for c in cikti if c["aday_sayisi"] == 0),
        "maddeler": cikti,
    }

    jyol = os.path.join(KOK, "denetim", "KRONO-EKSIK-ADAY-0921.json")
    io.open(jyol, "w", encoding="utf-8").write(
        json.dumps(ozet, ensure_ascii=False, indent=1))

    # İnsan okuyacak tablo — 1.MURAT bunun üstünde evet/hayır diyecek.
    sat = ["# KRONO-EKSIK-0921 — ADAY AD LİSTESİ (ilk %d madde)" % len(secilen),
           "",
           "1.MURAT hükmü M-4911(b). **Makine YAZMADI, ADAY GÖSTERDİ.**",
           "Kova: dört rozet alanının hiçbirini taşımayan + BAŞLIĞINDA "
           "el-değiştirme fiili geçen maddeler — gerçek boyut **%d**."
           % len(kova),
           "Sıra: `t` artan. Pencere ±%d gün. Evren %d madde, %d yerleşim."
           % (PENCERE, len(olaylar), len(kayitlar)),
           "",
           "**GÜÇLÜ** = yerleşimin adı maddenin metninde de geçiyor. "
           "**zayıf** = yalnız tarih tuttu, metinde adı yok "
           "(çoğu zaman alâkasız — asıl eleme burada).",
           "",
           "`önerilen alan` kırılmanın YÖNÜNDEN türedi "
           "(`isg` kovasında yön terstir: işgalin başlaması KAYIP).",
           ""]
    for i, c in enumerate(cikti, 1):
        sat.append("## %d. `%s` — %s" % (i, c["t"], c["b"]))
        sat.append("")
        sat.append("`k:%s` · yer: %s · aday %d (GÜÇLÜ %d)"
                   % (c["k"], c["yer"] or "—", c["aday_sayisi"],
                      c["guclu_aday"]))
        sat.append("")
        if not c["adaylar"]:
            sat.append("**ADAY YOK** — bu maddenin gününe ±%d gün içinde hiçbir "
                       "yerleşimin sahiplik kırılması düşmüyor. Metinde fiil "
                       "geçiyor ama haritada o gün bir şey olmuyor: ya madde "
                       "bir SÜREÇTEN söz ediyor, ya da yerleşim verisi eksik. "
                       "Alan yazılmamalı — önce hangisi olduğu söylenmeli."
                       % PENCERE)
            sat.append("")
            continue
        sat.append("| güç | ad | önerilen alan | gün farkı | penceredeki "
                   "kırılmalar |")
        sat.append("|---|---|---|---|---|")
        for a in c["adaylar"][:12]:
            sat.append("| %s | %s | `%s` | %+d | %s |"
                       % (a["guc"], a["ad"], a["onerilen_alan"],
                          a["gun_farki"], " · ".join(a["kirilmalar"])))
        if len(c["adaylar"]) > 12:
            sat.append("")
            sat.append("… %d aday daha (tamamı JSON'da)."
                       % (len(c["adaylar"]) - 12))
        sat.append("")

    myol = os.path.join(KOK, "denetim", "KRONO-EKSIK-ADAY-0921.md")
    io.open(myol, "w", encoding="utf-8").write("\n".join(sat) + "\n")

    print("kova gerçek boyutu: %d · işlenen: %d" % (len(kova), len(secilen)))
    print("toplam aday: %d · GÜÇLÜ aday: %d · adaysız madde: %d"
          % (ozet["toplam_aday"], ozet["toplam_guclu_aday"],
             ozet["adaysiz_madde"]))
    print("yazıldı: %s" % myol)
    print("yazıldı: %s" % jyol)


if __name__ == "__main__":
    main()
