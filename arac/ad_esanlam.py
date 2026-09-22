# -*- coding: utf-8 -*-
"""ORTAK AD NORMALLESTIRICI VE ESANLAM COZUCUSU        OPUS HAZIR KITA 106

🔴 BU DOSYA TEK OTORITEDIR. Kendi `sadelestir`ini yazan her arac, kendi kor
   noktasini da yazar — uc ayri normallestirici uc ayri kor nokta demektir.
   Kaynaktan gelen bir adi atlasin adina cevirmek isteyen HER arac buradan
   `coz()` cagirir:

       import ad_esanlam
       s = ad_esanlam.coz("Buda", atlas_adlari)
       s["durum"]   -> "birebir" | "esanlam" | "belirsiz" | "yok"
       s["ad"]      -> atlasin adi (durum birebir/esanlam ise), yoksa None

🔴 `belirsiz` SESSIZCE COZULMEZ. Kudus/Kudus (9065 km) ve Sire/Sire (2912 km)
   normallestirici CARPISMALARIDIR: ayni katlama (u->u, s->s) `Egridir ->
   Egirdir`i dogru cozerken bu ikisini yanlis birlestiriyor. Katlamayi
   zayiflatmak birincisini bozar. ⇒ Cozum degil KAYIT: carpisan ad "karar
   veremiyorum" der. `§11`: olculemedi ASLA temiz diye raporlanmaz.

SINAV — C13'un UC AYAGI (`py arac/ad_esanlam.py --sinav`)
   ① GECME     kusursuz girdide sessiz mi
   ② ATESLEME  her kusur dali AYRI AYRI otuyor mu (zorlanarak)
   ③ GIRDI     sozluk GERCEK DOSYADAN mi okundu (enjekte kayitla degil)
   Ucuncu ayak bu projede bir nobetcinin 0 kayit okuyup "TEMIZ" demesiyle
   ogrenildi; sinav iki ayagi da gecmisti cunku ikisi de enjekte kayit
   kullaniyordu.
"""
import json
import os
import re
import sys
import unicodedata

_BURASI = os.path.dirname(os.path.abspath(__file__))
SOZLUK_YOLU = os.path.join(_BURASI, "..", "data", "ad_esanlam.js")

_ONEK = "window.AD_ESANLAM"


# ── ① NORMALLESTIRICI — tek nokta ────────────────────────────────────────
def sadelestir(ad):
    """Turkce farkindalikli katlama. `Uskup` -> `uskup`, `Egridir` -> `egirdir`
    DEGIL ama `Egridir` -> `egridir` ve `Egirdir` -> `egirdir` (harf sirasi
    korunur; esanlamligi katlama degil SOZLUK cozer).

    ⚠️ Bu katlama BILEREK kayipli: `Kudus` ile `Kudus` ayni dizeye duser.
    Kayip kapatilmaz, `belirsiz` kovasinda KAYDEDILIR."""
    if ad is None:
        return ""
    s = ad.replace("İ", "i").replace("I", "ı").lower().replace("ı", "i")
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    return re.sub(r"[^a-z0-9]", "", s)


def cekirdek(ad):
    """Parantezli aciklayiciyi atar: `Haydarabad (Sind)` -> `haydarabad`.
    Belirsizlik olcumu bunun uzerinden yapilir."""
    return sadelestir(re.sub(r"\s*\(.*?\)\s*", " ", ad or ""))


# ── ② SOZLUK — gercek dosyadan ───────────────────────────────────────────
_onbellek = None


def _yorumsuz(s):
    """`//` yorumlarini atar ama DIZE ICINDEKILERI ATMAZ. Naif bir regex
    (`//.*$`) bir dizenin icindeki `//`yi de keserdi; bu proje regex'in
    sessizce yanlis kestigi uc vaka gordu (`girdi.py` tek tirnak · `bagla.py`
    CRLF · `renkler.py` virgul). Dize durumu izlenerek gecilir."""
    out = []
    i, n = 0, len(s)
    dize = False
    kacis = False
    while i < n:
        c = s[i]
        if dize:
            out.append(c)
            if kacis:
                kacis = False
            elif c == "\\":
                kacis = True
            elif c == '"':
                dize = False
            i += 1
            continue
        if c == '"':
            dize = True
            out.append(c)
            i += 1
            continue
        if c == "/" and i + 1 < n and s[i + 1] == "/":
            while i < n and s[i] != "\n":
                i += 1
            continue
        out.append(c)
        i += 1
    return "".join(out)


def yukle(yol=None, zorla=False):
    """`data/ad_esanlam.js` dosyasini okur. Govde JSON'dur; regex ile
    ayristirilmaz — `§11`: veri zaten bir dilde yazilmissa o dilin
    ayristiricisi cagirilir."""
    global _onbellek
    if _onbellek is not None and not zorla and yol is None:
        return _onbellek
    y = yol or SOZLUK_YOLU
    with open(y, encoding="utf-8") as f:
        ham = f.read()
    i = ham.find(_ONEK)
    if i < 0:
        raise ValueError("%s icinde `%s` bulunamadi" % (y, _ONEK))
    i = ham.index("{", i)
    j = ham.rindex("}")
    sozluk = json.loads(_yorumsuz(ham[i:j + 1]))
    for alan in ("esanlam", "belirsiz"):
        if alan not in sozluk:
            raise ValueError("sozlukte `%s` alani yok" % alan)
    if yol is None:
        _onbellek = sozluk
    return sozluk


def ters_dizin(sozluk=None):
    """esanlam -> atlas adi. ELLE YAZILMAZ, uretilir.
    Ayni esanlam iki atlas adina bakiyorsa CAKISMA hatasi verir — sozluk
    kendi icinde tutarsizsa sessizce bir tarafi secmek yerine durur."""
    s = sozluk or yukle()
    ters = {}
    for atlas, esler in s["esanlam"].items():
        for e in [atlas] + list(esler):
            a = sadelestir(e)
            if a in ters and ters[a] != atlas:
                raise ValueError(
                    "SOZLUK CAKISMASI: `%s` hem `%s` hem `%s` icin yazilmis"
                    % (e, ters[a], atlas))
            ters[a] = atlas
    return ters


def belirsiz_dizin(sozluk=None):
    s = sozluk or yukle()
    return {sadelestir(k): v for k, v in s["belirsiz"].items()}


# ── ③ COZUCU ─────────────────────────────────────────────────────────────
def coz(ad, atlas_adlari, sozluk=None):
    """Kaynaktan gelen `ad`i atlasin adina cevirir.

    atlas_adlari : atlasta gecen adlarin kumesi/listesi (girdi.yukle()'den)
    donen        : {"durum", "ad", "gerekce"}
       birebir  atlas bu adi zaten tasiyor
       esanlam  sozluk cevirdi
       belirsiz cikplak ad birden cok yere dusuyor — COZULMEDI
       yok      hicbir yol tutmadi
    """
    s = sozluk or yukle()
    kume = atlas_adlari if isinstance(atlas_adlari, (set, frozenset)) \
        else set(atlas_adlari)

    if ad in kume:
        return {"durum": "birebir", "ad": ad, "gerekce": "atlas adi"}

    sade = {sadelestir(a): a for a in kume}
    a = sadelestir(ad)

    bel = belirsiz_dizin(s)
    if cekirdek(ad) in {cekirdek(k) for k in s["belirsiz"]} and a not in sade:
        for k, v in s["belirsiz"].items():
            if cekirdek(k) == cekirdek(ad):
                return {"durum": "belirsiz", "ad": None,
                        "gerekce": "cikplak ad %d adaya dusuyor (en uzak %s km): %s"
                                   % (len(v["adaylar"]), v.get("en_uzak_km", "?"),
                                      " · ".join(v["adaylar"]))}
    if a in bel:
        v = bel[a]
        return {"durum": "belirsiz", "ad": None,
                "gerekce": "carpisan ad: %s" % (" · ".join(v["adaylar"]))}

    if a in sade:
        return {"durum": "birebir", "ad": sade[a],
                "gerekce": "yazim farki (normallestirme)"}

    ters = ters_dizin(s)
    if a in ters:
        hedef = ters[a]
        if hedef in kume:
            return {"durum": "esanlam", "ad": hedef, "gerekce": "sozluk"}
        return {"durum": "yok", "ad": None,
                "gerekce": "sozluk `%s` diyor ama atlasta O DA yok" % hedef}

    return {"durum": "yok", "ad": None, "gerekce": "hicbir yol tutmadi"}


# ── SINAV — C13'un uc ayagi ──────────────────────────────────────────────
def _sinav():
    cikis = 0
    print("=== C13 ① GECME YOLU — kusursuz girdi sessiz mi ===")
    s = yukle()
    atlas = {"Budin", "Eğirdir", "Üsküp", "Haydarâbâd (Sind)",
             "Haydarâbâd (Dekken)", "Kudüs", "Kudus"}
    bekle = [("Budin", "birebir"), ("Buda", "esanlam"),
             ("Eğridir", "esanlam"), ("Skopje", "esanlam"),
             ("Üsküp", "birebir")]
    for ad, d in bekle:
        r = coz(ad, atlas, s)
        im = "🟢" if r["durum"] == d else "🔴"
        if r["durum"] != d:
            cikis = 1
        print("   %s %-12s -> %-9s (beklenen %s) %s"
              % (im, ad, r["durum"], d, r["ad"] or ""))

    print()
    print("=== C13 ② ATESLEME — her kusur dali AYRI AYRI zorlanir ===")

    print("   dal A: BELIRSIZ ad cozulmemeli")
    r = coz("Haydarâbâd", atlas, s)
    im = "🟢" if r["durum"] == "belirsiz" else "🔴 DAL OTMEDI"
    if r["durum"] != "belirsiz":
        cikis = 1
    print("      %s Haydarâbâd -> %s · %s" % (im, r["durum"], r["gerekce"]))

    print("   dal B: NORMALLESTIRICI CARPISMASI kaydedilmis mi")
    for x in ("Kudüs", "Kudus"):
        print("      sadelestir(%-6s) = %s" % (x, sadelestir(x)))
    if sadelestir("Kudüs") != sadelestir("Kudus"):
        print("      🔴 carpisma YOK — `belirsiz` kaydi gerekcesiz kalmis")
        cikis = 1
    else:
        print("      🟢 carpisma gercek; sozlukte KAYITLI")

    print("   dal C: sozluk kendi icinde cakisirsa DURMALI (zorlanmis girdi)")
    sahte = {"esanlam": {"Budin": ["Buda"], "Peşte": ["Buda"]}, "belirsiz": {}}
    try:
        ters_dizin(sahte)
        print("      🔴 DAL OTMEDI — cakisma sessizce gecti")
        cikis = 1
    except ValueError as e:
        print("      🟢 durdu: %s" % e)

    print("   dal D: sozluk `X` diyor ama atlasta X de yoksa `yok` demeli")
    r = coz("Buda", {"Peşte"}, s)
    im = "🟢" if r["durum"] == "yok" else "🔴 DAL OTMEDI"
    if r["durum"] != "yok":
        cikis = 1
    print("      %s -> %s · %s" % (im, r["durum"], r["gerekce"]))

    print("   dal E: bilinmeyen ad `yok` demeli, uydurmamali")
    r = coz("Zzzyx", atlas, s)
    im = "🟢" if r["durum"] == "yok" else "🔴 DAL OTMEDI"
    if r["durum"] != "yok":
        cikis = 1
    print("      %s Zzzyx -> %s" % (im, r["durum"]))

    print()
    print("=== C13 ③ GIRDI YOLU — sozluk GERCEK DOSYADAN mi okundu ===")
    print("   yol      : %s" % os.path.normpath(SOZLUK_YOLU))
    print("   var mi   : %s" % os.path.exists(SOZLUK_YOLU))
    g = yukle(zorla=True)
    n_es = len(g["esanlam"])
    n_deger = sum(len(v) for v in g["esanlam"].values())
    n_bel = len(g["belirsiz"])
    print("   okunan   : %d atlas adi · %d esanlam · %d belirsiz"
          % (n_es, n_deger, n_bel))
    if n_es == 0 or n_deger == 0 or n_bel == 0:
        print("   🔴 SIFIR KAYIT — nobetcinin kendi kusuru (0 okuyup TEMIZ demek)")
        cikis = 1
    else:
        print("   🟢 gercek dosyadan okundu, kayit sayisi sifir degil")

    print()
    print("SINAV %s" % ("🟢 GECTI" if cikis == 0 else "🔴 KALDI"))
    return cikis


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    if "--sinav" in sys.argv:
        sys.exit(_sinav())
    print(json.dumps(yukle(), ensure_ascii=False, indent=2))
