# -*- coding: utf-8 -*-
"""KUZEY-AMERIKA-DEVIR-0907 ②③ — devir dönemlerini YAZ.

🔴 ELLE YAZILMADI — CANLI VERİDEN ÜRETİLDİ. (`§11`: kendi yazdığın
   ayrıştırıcı her zaman kötüdür; zincirler `girdi.yukle()`den okunur ve
   yeni `s:` dizisi eskisinden TÜRETİLİR.)

🔴 İKİ UÇ DA ÖLÇÜLÜR (`§3.5.1`) — ve burada ÜÇ ayrı sınavla:
   ① KAPSAMA  yeni zincirin ilk `f`si ve son `t`si ESKİSİYLE AYNI olmalı,
              ve iç boşluk doğmamalı ⇒ `Değişmez 1` ihlal edilemez.
              *"`meksika` dönemini kesmek `abd` dönemi açmıyorsa
              SAHİPSİZLİK doğar"* — bu sınav tam onu yakalar.
   ② KÜNYE    her yeni dönem, kimliğinin künye penceresinin İÇİNDE olmalı
              (`§3.5.0`: ardıl künyenin VAR olması yazılabilir olduğu
              anlamına gelmez — PENCERESİ de tutmalı).
   ③ BİÇİM    ters dönem yok, çakışma yok, sıfır uzunluk yok (`§8`).

🔴 TARİH KONVANSİYONU — atlasın KENDİ davranışından okundu, seçilmedi:
   `ingiliz-kuzey-amerika f:1763-02-10` = Paris Antlaşması'nın İMZA günü
   `abd`nin veride kullanılan devir günü `1783-09-03` = Paris 1783 İMZASI
   ⇒ Atlas antlaşmalarda İMZA gününü kullanıyor. Bu yama ona uyar.
   ⚠️ TEK İSTİSNA ve gerekçesi yazılı: imza ile yürürlük arası BİR YILDAN
      uzunsa imza günü tasarrufu YANLIŞ tarihler. Adams-Onís 1819-02-22'de
      imzalandı ama İspanya Florida'yı 1821'e kadar bırakmadı ⇒ o kalemde
      TASDİK günü (1821-02-22) kullanıldı. `§11`: atlas TASARRUFU boyar.

KAYNAKLAR — hepsi Avalon Project (Yale Law School), birincil metin neşri:
   Guadalupe Hidalgo  imza 1848-02-02 · tasdik teatisi 1848-05-30
   Oregon             imza 1846-06-15 · 49. paralel, Pasifik'e kadar
   Gadsden            imza 1853-12-30 · tasdik 1854-06-30 · Gila'nın GÜNEYİ
   Adams-Onís         imza 1819-02-22 · TASDİK 1821-02-22 · Florida + Sabine
"""
import io
import json
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "arac"))
import girdi  # noqa: E402

KOK = os.path.join(os.path.dirname(__file__), "..")
UFUK_SON = "1923-10-29"
AD_ALANI = "YER_YAMA_KAMERIKA_DEVIR_0907"
DOSYA = "yer_yama_kamerika_devir_0907.js"

GH = "1848-02-02"     # Guadalupe Hidalgo — imza
OR = "1846-06-15"     # Oregon — imza
GD = "1853-12-30"     # Gadsden — imza
AO = "1821-02-22"     # Adams-Onís — TASDİK (imza 1819-02-22, +2 yıl)
TX_C = "1836-03-02"   # Teksas Cumhuriyeti — künye `f`
TX_A = "1845-12-29"   # Teksas'ın ABD'ye katılımı — künye `teksas` `t`
KN = "1867-07-01"     # Kanada Dominyonu — künye `f`

K_GH = ("Guadalupe Hidalgo Antlasmasi, imza 2 Subat 1848 (Avalon Project, "
        "Yale Law School: 'concluded at Guadalupe Hidalgo, February 2, "
        "1848'; tasdik teatisi Queretaro 30 Mayis 1848). Meksika'nin "
        "kuzey topraklarini ABD'ye devri.")
K_OR = ("Oregon Antlasmasi, imza 15 Haziran 1846 (Avalon Project, Yale: "
        "'Done at Washington, the fifteenth day of June ... 1846'). Sinir "
        "'the forty-ninth parallel of north latitude' boyunca Pasifik'e "
        "kadar; bu nokta 49. paralelin GUNEYINDE kaliyor.")
K_GD = ("Gadsden Antlasmasi, imza 30 Aralik 1853, ilan 30 Haziran 1854 "
        "(Avalon Project, Yale). Devredilen toprak Gila nehrinin "
        "GUNEYINDE; bu nokta orada.")
K_AO = ("Adams-Onis Antlasmasi, imza 22 Subat 1819, TASDIK VE ILAN 22 "
        "Subat 1821 (Avalon Project, Yale). Ispanya 'East and West "
        "Florida'yi devreder, bati sinirini Sabine nehrine ceker. TASDIK "
        "gunu kullanildi: imza ile yururluk arasi IKI YIL ve Ispanya o "
        "sure boyunca tasarrufu birakmadi.")
K_TX = ("Teksas: Meksika'dan ayrilma 2 Mart 1836, ABD'ye katilim 29 Aralik "
        "1845. Tarihler atlasin KENDI kunyesinden alindi "
        "(devletler.js `teksas-cumhuriyeti` f:1836-03-02 t:1845-12-29) — "
        "yeni bir hassasiyet URETILMEDI.")
K_BNA = ("Bu nokta modern Kanada icinde ve 1783'te ABD'ye GECMEDI. Atlasin "
         "kendi kunye gunleri kullanildi: `ingiliz-kuzey-amerika` "
         "(f:1763-02-10) ve `kanada` (f:1867-07-01, Konfederasyon).")
K_NFL = ("Newfoundland 1783'te ABD'ye GECMEDI; atlas ufku boyunca Ingiliz "
         "kaldi. Mevcut `ingiltere` donemi 1923-10-29'a uzatildi — yeni "
         "bir kimlik ya da yeni bir tarih URETILMEDI.")
K_TEH = ("Tehuantepec (Oaxaca) 1783'te ABD'ye GECMEDI. Yeni Ispanya -> "
         "Meksika zinciri atlasin KENDI kunye gunuyle kuruldu "
         "(`meksika` f:1821-09-27). ⚠️ Bu kaydin 1523-1783 arasi hala "
         "`ingiltere` yaziyor ve o AYRI bir kusurdur — bu yama ona "
         "DOKUNMUYOR (kaynak aranmadi).")

# ── YAMA TARİFİ ────────────────────────────────────────────────────────
# (islem, gun, kaynak)  —  islem:
#   "kes_ac"   : `eski` kimlikli SON dönemi `gun`de kes, `abd` aç
#   "kes_at"   : `eski`yi `gun`de kes, ARADAKİ kimliği AT, `abd` aç
#   ...tarifler asagida acik yazildi, jenerik bir motor KASTEN yok:
#   her kalem GORULEBILIR olsun diye.
TARIF = {}


def _ekle(adlar, islem, **kw):
    for a in adlar:
        TARIF[a] = dict(islem=islem, **kw)


_ekle(["Albuquerque", "Las Vegas (Yeni Meksika)", "Los Ángeles (El Pueblo)",
       "Monterey (Alta California)", "San José de Guadalupe",
       "Santa Bárbara", "Santa Rita del Cobre",
       "Fort Robidoux (Uinta Havzası)", "Laredo",
       "La Junta de los Ríos (Presidio)"],
      "kes_ac", eski="meksika", gun=GH, yeni="abd", kaynak=K_GH)

_ekle(["Tucson (San Agustín del Tucsón)", "Tubac"],
      "kes_ac", eski="meksika", gun=GD, yeni="abd", kaynak=K_GD)

_ekle(["Boise (Fort Boise)", "Fort Astoria", "Fort Colvile", "Fort Hall",
       "Fort Nez Percés (Walla Walla)", "Fort Vancouver", "Spokane House"],
      "kes_at_ac", eski="ingiliz-kuzey-amerika", at="kanada", gun=OR,
      yeni="abd", kaynak=K_OR)

_ekle(["Mission San Luis (Apalaçi)", "Los Adaes"],
      "kes_at_ac", eski="yeni-ispanya", at="meksika", gun=AO, yeni="abd",
      kaynak=K_AO)

_ekle(["Nacogdoches"], "teksas", eski="meksika", kaynak=K_TX)

_ekle(["Kahnawake", "Ossossané", "Sainte-Marie-au-pays-des-Hurons"],
      "abd_yerine_kanada", kaynak=K_BNA)

_ekle(["St. John's (Newfoundland)"], "abd_yerine_ingiltere", kaynak=K_NFL)

_ekle(["Tehuantepec"], "abd_yerine_meksika", kaynak=K_TEH)


def yeni_zincir(eski_s, t):
    """Eski `s:` dizisinden yeni diziyi TÜRET. Girdi bozulmaz."""
    s = [dict(p) for p in eski_s]
    islem = t["islem"]
    if islem == "kes_ac":
        for p in s:
            if p["d"] == t["eski"] and p["t"] == UFUK_SON:
                p["t"] = t["gun"]
        s.append({"f": t["gun"], "t": UFUK_SON, "d": t["yeni"]})
    elif islem == "kes_at_ac":
        s = [p for p in s if p["d"] != t["at"]]
        for p in s:
            if p["d"] == t["eski"]:
                p["t"] = t["gun"]
        s.append({"f": t["gun"], "t": UFUK_SON, "d": t["yeni"]})
    elif islem == "teksas":
        for p in s:
            if p["d"] == t["eski"] and p["t"] == UFUK_SON:
                p["t"] = TX_C
        s.append({"f": TX_C, "t": TX_A, "d": "teksas-cumhuriyeti"})
        s.append({"f": TX_A, "t": UFUK_SON, "d": "abd"})
    elif islem == "abd_yerine_kanada":
        for p in s:
            if p["d"] == "abd":
                p["d"] = "ingiliz-kuzey-amerika"
                bit = p["t"]
                p["t"] = KN
                s.append({"f": KN, "t": bit, "d": "kanada"})
                break
    elif islem == "abd_yerine_ingiltere":
        yeni = [p for p in s if p["d"] != "abd"]
        for p in yeni:
            if p["d"] == "ingiltere":
                p["t"] = UFUK_SON
        s = yeni
    elif islem == "abd_yerine_meksika":
        for p in s:
            if p["d"] == "abd":
                bas, bit = p["f"], p["t"]
                p["d"] = "yeni-ispanya"
                p["t"] = "1821-09-27"
                s.append({"f": "1821-09-27", "t": bit, "d": "meksika"})
                del bas
                break
    else:
        raise ValueError("bilinmeyen islem: %s" % islem)
    s.sort(key=lambda p: p["f"])
    return s


def main():
    Y = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
    D = {x["id"]: x for x in girdi.oku_devletler()}
    kayitlar, hata, rapor = [], [], []

    for ad, t in sorted(TARIF.items()):
        y = Y.get(ad)
        if y is None:
            hata.append("%s: VERIDE YOK" % ad)
            continue
        for kat in ("d", "v", "isg"):
            if y.get(kat):
                hata.append("%s: `%s:` dolu — bu yama yalniz `s:` "
                            "bekliyordu, DUR." % (ad, kat))
        eski = y.get("s") or []
        yeni = yeni_zincir(eski, t)

        # ── SINAV ① KAPSAMA — Değişmez 1 ihlal edilemez ──────────────
        if eski[0]["f"] != yeni[0]["f"] or eski[-1]["t"] != yeni[-1]["t"]:
            hata.append("%s: KAPSAMA degisti %s..%s -> %s..%s"
                        % (ad, eski[0]["f"], eski[-1]["t"],
                           yeni[0]["f"], yeni[-1]["t"]))
        for a, b in zip(yeni, yeni[1:]):
            if a["t"] != b["f"]:
                hata.append("%s: BOSLUK/CAKISMA %s..%s | %s.."
                            % (ad, a["f"], a["t"], b["f"]))
        # ── SINAV ③ BİÇİM ────────────────────────────────────────────
        for p in yeni:
            if p["f"] >= p["t"]:
                hata.append("%s: TERS/SIFIR donem %s..%s"
                            % (ad, p["f"], p["t"]))
        # ── SINAV ② KÜNYE PENCERESİ ──────────────────────────────────
        for p in yeni:
            k = D.get(p["d"])
            if k is None:
                hata.append("%s: KUNYE YOK -> %s" % (ad, p["d"]))
                continue
            if p["f"] < k["f"] or p["t"] > k["t"]:
                hata.append("%s: KUNYE PENCERESI ASILDI %s [%s..%s] "
                            "donem %s..%s"
                            % (ad, p["d"], k["f"], k["t"], p["f"], p["t"]))

        kayitlar.append({"ad": ad, "s": yeni, "kaynak": t["kaynak"]})
        rapor.append({"ad": ad, "islem": t["islem"],
                      "eski_1923": eski[-1]["d"],
                      "yeni_1923": yeni[-1]["d"],
                      "eski_zincir": ["%s..%s %s" % (p["f"], p["t"], p["d"])
                                      for p in eski],
                      "yeni_zincir": ["%s..%s %s" % (p["f"], p["t"], p["d"])
                                      for p in yeni]})

    print("kayit: %d · SINAV HATASI: %d" % (len(kayitlar), len(hata)))
    for h in hata:
        print("  🔴 %s" % h)
    if hata:
        print("\n🔴 YAMA YAZILMADI — once hatalar cozulecek.")
        return 1

    govde = json.dumps(kayitlar, ensure_ascii=False, indent=1)
    basl = io.open(os.path.join(os.path.dirname(__file__),
                                "_kamerika_baslik.txt"), encoding="utf-8"
                   ).read()
    yol = os.path.join(KOK, "denetim", DOSYA)
    with io.open(yol, "w", encoding="utf-8") as f:
        f.write(basl)
        f.write("window.%s = %s;\n" % (AD_ALANI, govde))
    print("\nyazildi: %s  (%d kayit)" % (yol, len(kayitlar)))

    ryol = os.path.join(KOK, "denetim", "KUZEY-AMERIKA-DEVIR-0907.json")
    with io.open(ryol, "w", encoding="utf-8") as f:
        json.dump({"_NOT": "Yamanin kalem kalem gerekcesi. Uc sinav da "
                           "gecti: kapsama (Degismez 1) · kunye penceresi "
                           "(§3.5.0) · bicim (§8).",
                   "yazilan": len(kayitlar), "kalemler": rapor},
                  f, ensure_ascii=False, indent=1)
    print("yazildi: %s" % ryol)
    return 0


if __name__ == "__main__":
    sys.exit(main())
