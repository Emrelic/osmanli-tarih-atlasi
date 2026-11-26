# -*- coding: utf-8 -*-
"""IZ-YOK DENETIM A — YAMA TRIYAJI, DOSYA BASINA KOVA (SALT OKUR).

Dort kova (sevkin tanimi):
   📦 ARSIV      icerigi canli veriye ZATEN inmis
   ⏳ BEKLEYEN   kasten bekletiliyor ve DOSYANIN KENDISI bunu soyluyor
   🔴 UNUTULMUS  inmemis, VE bekletildigi yazili DEGIL (ya da yazili olan
                 gerekce ARTIK GECERSIZ)
   ⚪ OLCULEMEDI

🔴 UCUNCU KOVANIN INCE AYRIMI — bu is sirasinda olculdu:
   Bir dosya "`data/` DONUK (kosu 5b/7b), bu dosya `denetim/` altinda
   BEKLIYOR" diyor AMA DOSYA ARTIK `data/` ALTINDA. Yani tasinmis, ve
   tasindiktan sonra uygulanmamis. Beyan GECERSIZ: bekleme sebebi
   "kosu suruyor"du, kosu bitti (bugun kosu 9).
   ⇒ Bu dosyalar ⏳ DEGIL 🔴'dir. Beyanin VARLIGI degil, GECERLILIGI
     sorulur — yoksa bir kere yazilan "bekliyorum" sonsuza kadar korur.
"""
import json, os, re, sys, io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

# --- ust yazi imzalari ---------------------------------------------------
YENI_NOKTA = re.compile(
    r"YENİ NOKTA|YENI NOKTA|YENİ KAYIT|YENI KAYIT|mevcut kayıt YOK|"
    r"mevcut kayit YOK|ELLE .{0,30}ekle|merge'in ELLE", re.I)
SIRA_BAGLI = re.compile(r"SIRA BAĞLAYICI|SIRA BAGLAYICI|BAGIMLILIK ZINCIRI|"
                        r"BAĞIMLILIK ZİNCİRİ|TEK BAŞINA UYGULANMAZ|"
                        r"TEK BASINA INMEZ|TEK BAŞINA İNMEZ", re.I)
GLOB_DISI = re.compile(r"GLOB DIŞI|GLOB DISI", re.I)
KOSU_DONUK = re.compile(r"koşu \d|kosu \d", re.I)


def kova(dosya, sayac, b, ustyazi, a_arsiv):
    y = ustyazi or ""
    inmeyen = b["INMEDI"] + b["KISMEN"] + b["AD-YOK"]

    if sayac["B"] == 0 and sayac["A"] > 0:
        return ("📦 ARSIV" if a_arsiv else "⚪ OLCULEMEDI",
                "A ailesi · uygulayici: arac/yama_uygula.js")
    if sayac["B"] == 0 and sayac["A"] == 0:
        return "⚪ OLCULEMEDI", "C ailesi — bu aletin olcutu yok, elle bakilacak"
    if inmeyen == 0:
        return "📦 ARSIV", "B ailesi %d kaydin %d'i INDI" % (sayac["B"], b["INDI"])

    # inmeyen VAR — beyan gecerli mi?
    if GLOB_DISI.search(y):
        return "⏳ BEKLEYEN", "dosya KASTEN glob disi ad tasidigini yaziyor"
    if b["AD-YOK"] and YENI_NOKTA.search(y):
        if b["INMEDI"] or b["KISMEN"]:
            return ("🔴 UNUTULMUS",
                    "YENI NOKTA beyani AD-YOK'u aciklar ama %d INMEDI/%d KISMEN"
                    " ACIKTA" % (b["INMEDI"], b["KISMEN"]))
        return "⏳ BEKLEYEN", "YENI NOKTA — elle merge bekliyor (AD-YOK BEKLENEN)"
    if SIRA_BAGLI.search(y):
        return "⏳ BEKLEYEN", "dosya SIRA/BAGIMLILIK beyan ediyor"
    if KOSU_DONUK.search(y):
        return ("🔴 UNUTULMUS",
                "beyan GECERSIZ: 'kosu suruyor, denetim/ altinda' diyor ama "
                "dosya ZATEN data/ altinda ve %d kayit inmemis" % inmeyen)
    return "🔴 UNUTULMUS", "%d kayit inmemis, bekleme beyani YOK" % inmeyen


def main():
    triyaj = json.load(open(sys.argv[1], encoding="utf-8"))
    ham = json.load(open(sys.argv[2], encoding="utf-8"))
    a_arsiv = True   # yama_uygula.js kuru kosusu: zaten vardi 1554 · yazilacak 1

    kovalar = {}
    for dosya, d in sorted(triyaj.items()):
        k, gerekce = kova(dosya, d["sayac"], d["b"],
                          (ham.get(dosya) or {}).get("ustyazi", ""), a_arsiv)
        kovalar.setdefault(k, []).append((dosya, d, gerekce))

    toplam = 0
    for k in ("📦 ARSIV", "⏳ BEKLEYEN", "🔴 UNUTULMUS", "⚪ OLCULEMEDI"):
        v = kovalar.get(k, [])
        toplam += len(v)
        print("=" * 78)
        print("%s : %d dosya" % (k, len(v)))
        for dosya, d, g in v:
            s, b = d["sayac"], d["b"]
            print("  %-38s A=%-4d B=%-4d C=%-3d | %s"
                  % (dosya, s["A"], s["B"], s["C"], g))
    print("=" * 78)
    print("TOPLAM DOSYA:", toplam)


main()
