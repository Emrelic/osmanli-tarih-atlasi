# -*- coding: utf-8 -*-
"""
KRONO-EKSIK-0921 — ROZET TARAMASI ② : "rozet var ama tarihle çelişiyor" ayağı
=============================================================================
Birinci tarama (ARAC-KRONO-EKSIK-ROZET-0921.py) rozetin HİÇ çıkmadığı kovayı
ölçtü. Bu tarama rozetin ÇIKTIĞI 41 maddeyi alır ve her (madde, ad) çifti için
sorar:

  ① Alanda yazılı ad bir yerleşim kaydıyla eşleşiyor mu?  (eşleşmezse rozet
     zaten çizilmez — birinci taramada 0 çıktı, burada tekrar sayılır)
  ② Maddenin günü, o yerleşimin sahiplik KIRILMALARINDAN birine ±30 gün
     içinde düşüyor mu? Düşmüyorsa ekranda şehrin yanında, o şehirde hiçbir şey
     olmadığı bir tarih yazıyor demektir — sevkin sorduğu ÇELİŞKİ budur.
  ③ YÖN tutuyor mu? `fethedilen:` bir KAZANÇ kırılmasına (yeni sahip dönemi
     başlıyor), `kaybedilen:` bir KAYIP kırılmasına denk gelmeli. Kırılma
     yönü, o günde biten/başlayan dönemlerden okunur.

🔴 Bu tarama ÖLÇER, DÜZELTMEZ. Toplu düzeltme 1.MURAT'ın hükmüyle girilir.

Koşum:  py denetim/ARAC-KRONO-EKSIK-ROZET2-0921.py
Çıktı:  denetim/KRONO-EKSIK-ROZET2-0921.json + ekrana özet
"""
import io
import json
import os
import sys
from datetime import date

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import denetle  # noqa: E402

ALANLAR = ["fethedilen", "kaybedilen", "statu_dogrudan", "statu_vasal"]
PENCERE = 30  # gün


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
    """Yerleşimin bütün sahiplik dönem uçları — kova kova (s/d/v/isg).

    🔴 `isg` İLK YAZIMDA UNUTULMUŞTU ve tek "çelişki"yi o üretti: Böğürdelen'in
    1788-04-24 Avusturya işgali `isg:` kovasındaydı, en yakın kırılma 6485 gün
    ötede görünüyordu. Yani ölçüm ALETİN kovasını eksik sayıyordu, verinin
    kusuru değildi (D: "denetim var ≠ o soruyu soruyor"). Dört kova da okunur.
    """
    out = []
    for kova in ("s", "d", "v", "isg"):
        for p in y.get(kova) or []:
            for uc in ("f", "t"):
                g = gno(p.get(uc))
                if g is not None:
                    out.append({"g": g, "kova": kova, "uc": uc,
                                "kimlik": p.get("d") or p.get("kid") or ""})
    return out


# 🔴 KOVA ANLAMLARI — YÖN BUNLARDAN OKUNUR (21 Eylül 2026, ikinci düzeltme).
# Atlas OSMANLI ÇERÇEVELİDİR:
#   `d`   DOĞRUDAN Osmanlı idaresi → başlaması KAZANÇ, bitmesi KAYIP
#   `s`   YABANCI devletin dönemi  → başlaması KAYIP,  bitmesi KAZANÇ
#   `isg` İŞGAL dönemi             → başlaması KAYIP,  bitmesi KAZANÇ
#   `v`   TÂBİLİK                  → statü ekseni; kazanç/kayıp ekseninde SAYILMAZ
#
# ⚠️ İLK İKİ YAZIMDA `s` YANLIŞTI ("f = kazanç"): bir YABANCI döneminin
# BAŞLAMASI kazanç değil KAYIPTIR. Bu alette kusur MASKELİYDİ, çünkü burada
# `any()` soruluyor ve tipik bir fetih gününde `s:t` ile `d:f` AYNI GÜNDE
# bulunuyor — hangi kuralla bakılırsa bakılsın pencere doluydu. Kusur ancak
# ADAY üreticisinde (tek yön seçmek gerekince) görünür oldu ve bütün Osmanlı
# fetihlerini `kaybedilen` diye öneriyordu. Kural burada da düzeltildi ki iki
# alet aynı tanımı kullansın.
KAZANC = {("d", "f"), ("s", "t"), ("isg", "t")}
KAYIP = {("d", "t"), ("s", "f"), ("isg", "f")}


def kazanc_mi(k):
    return (k["kova"], k["uc"]) in KAZANC


def kayip_mi(k):
    return (k["kova"], k["uc"]) in KAYIP


def main():
    olaylar = denetle.olaylari_yukle()
    Y = denetle.yerlesimleri_yukle()

    indeks = {}
    for y in Y:
        ad = str(y.get("ad", "")).split(" (")[0].strip()
        if ad and ad not in indeks:
            indeks[ad] = y

    ciftler = []
    for o in olaylar:
        og = gno(o.get("t"))
        for a in ALANLAR:
            for ham in (o.get(a) or []):
                ad = str(ham).split(" (")[0].strip()
                y = indeks.get(ad)
                kayit = {"t": o.get("t"), "b": o.get("b"), "alan": a, "ad": ad}
                if y is None:
                    kayit["hal"] = "OLU-AD"          # rozet hiç çizilmez
                    ciftler.append(kayit)
                    continue
                ks = kirilmalar(y)
                if og is None:
                    kayit["hal"] = "MADDE-GUNSUZ"
                    ciftler.append(kayit)
                    continue
                if not ks:
                    kayit["hal"] = "KIRILMASIZ-YERLESIM"
                    ciftler.append(kayit)
                    continue
                en = min(ks, key=lambda k: abs(k["g"] - og))
                fark = abs(en["g"] - og)
                kayit["en_yakin_kirilma_gun_farki"] = fark
                kayit["en_yakin_kirilma"] = {"kova": en["kova"], "uc": en["uc"],
                                             "kimlik": en["kimlik"]}
                if fark > PENCERE:
                    kayit["hal"] = "UZAK"            # sevkin sorduğu çelişki
                else:
                    # yön sınavı: kazanç = bir dönemin BAŞLAMASI (f),
                    #             kayıp  = bir dönemin BİTMESİ  (t)
                    pencere = [k for k in ks if abs(k["g"] - og) <= PENCERE]
                    baslayan = any(kazanc_mi(k) for k in pencere)
                    biten = any(kayip_mi(k) for k in pencere)
                    if a == "fethedilen" and not baslayan:
                        kayit["hal"] = "YON-TERS"
                    elif a == "kaybedilen" and not biten:
                        kayit["hal"] = "YON-TERS"
                    else:
                        kayit["hal"] = "TUTUYOR"
                ciftler.append(kayit)

    say = {}
    for c in ciftler:
        say[c["hal"]] = say.get(c["hal"], 0) + 1

    maddeler = len({c["t"] + "|" + str(c["b"]) for c in ciftler})
    ozet = {
        "evren_madde": len(olaylar),
        "alani_olan_madde": maddeler,
        "cift_sayisi": len(ciftler),
        "pencere_gun": PENCERE,
        "hal_dagilimi": dict(sorted(say.items(), key=lambda x: -x[1])),
        "celiskili_ciftler": [c for c in ciftler
                              if c["hal"] not in ("TUTUYOR",)],
    }

    yol = os.path.join(KOK, "denetim", "KRONO-EKSIK-ROZET2-0921.json")
    io.open(yol, "w", encoding="utf-8").write(
        json.dumps(ozet, ensure_ascii=False, indent=1))

    print("alanı olan madde: %d · (madde, ad) çifti: %d"
          % (maddeler, len(ciftler)))
    for h, n in ozet["hal_dagilimi"].items():
        print("  %-22s %d" % (h, n))
    print("yazıldı: %s" % yol)


def sina():
    """🔴 İKİ YÖNLÜ SINAV — "boş küme her öngörüyü doğrular" tuzağı.

    Gerçek veride 99/99 TUTUYOR çıktı. Temiz sonuç, ancak alet KUSURU
    GÖREBİLİYORSA bir şey söyler. Bu sınav aynı gövdeye UYDURMA kusurlar
    verir ve her birinin yakalandığını ister.
    """
    Y = denetle.yerlesimleri_yukle()
    indeks = {}
    for y in Y:
        ad = str(y.get("ad", "")).split(" (")[0].strip()
        if ad and ad not in indeks:
            indeks[ad] = y

    def hal(t, alan, ad):
        o = {"t": t, "b": "SINAV", alan: [ad]}
        y = indeks.get(ad)
        og = gno(t)
        if y is None:
            return "OLU-AD"
        ks = kirilmalar(y)
        if not ks:
            return "KIRILMASIZ-YERLESIM"
        en = min(ks, key=lambda k: abs(k["g"] - og))
        if abs(en["g"] - og) > PENCERE:
            return "UZAK"
        pencere = [k for k in ks if abs(k["g"] - og) <= PENCERE]

        # 🔴 SINAV, ÖLÇÜMÜN KURALINI KOPYALAMAZ — AYNI FONKSİYONU ÇAĞIRIR.
        # İlk yazımda kural burada ikinci kez yazılmıştı; düzeltme main()'de
        # yapılınca sınav ESKİ kuralı sınamaya devam ederdi ve "5/5 geçti"
        # diyerek düzeltilmemiş bir aleti onaylardı.
        if alan == "fethedilen" and not any(kazanc_mi(k) for k in pencere):
            return "YON-TERS"
        if alan == "kaybedilen" and not any(kayip_mi(k) for k in pencere):
            return "YON-TERS"
        return "TUTUYOR"

    sinavlar = [
        # (tarif, tarih, alan, ad, BEKLENEN)
        ("olmayan şehir adı", "1500-01-01", "fethedilen", "Zzz Yokşehir",
         "OLU-AD"),
        ("kırılmadan 40 yıl uzak gün", "1600-06-15", "fethedilen",
         "Böğürdelen", "UZAK"),
        ("işgalin BAŞLADIĞI gün 'kaybedilen' — DOĞRU", "1788-04-24",
         "kaybedilen", "Böğürdelen", "TUTUYOR"),
        ("işgalin BAŞLADIĞI gün 'fethedilen' — TERS", "1788-04-24",
         "fethedilen", "Böğürdelen", "YON-TERS"),
        ("işgalin BİTTİĞİ gün 'fethedilen' — DOĞRU", "1791-08-04",
         "fethedilen", "Böğürdelen", "TUTUYOR"),
    ]
    gecen = 0
    for tarif, t, alan, ad, bek in sinavlar:
        got = hal(t, alan, ad)
        ok = got == bek
        gecen += ok
        print("  %s  %-44s bek=%-12s ölç=%s"
              % ("✓" if ok else "🔴", tarif, bek, got))
    print("SINAV: %d/%d geçti" % (gecen, len(sinavlar)))
    return gecen == len(sinavlar)


if __name__ == "__main__":
    if "--sina" in sys.argv:
        sys.exit(0 if sina() else 1)
    main()
