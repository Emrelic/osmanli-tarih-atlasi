"""İki yönlü sınav: arac/arkeoloji_denetle.py — iyi örnek TEMİZ, her bozuk örnek TAM beklenen ihlali verir.
Koşu: py denetim/ARAC-ARKEOLOJI-DENETLE-SINAV-1018.py   (çıkış 0 = hepsi tuttu)"""
import copy, os, sys
sys.stdout.reconfigure(encoding="utf-8")

KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
sys.path.insert(0, os.path.join(KOK, "arac"))
import arkeoloji_denetle as A

IYI = {"t": "-3749-01-01", "k": "kurulus", "etiket": ["arkeoloji"], "b": "Deneme", "gun": "MÖ 4000–3500 arası (orta nokta MÖ 3750)",
       "kaynak": "X vd. 2020", "kaynak_turu": "arkeoloji", "kesinlik": "yuzyil",
       "aralik": {"bas": "-3999-01-01", "son": "-3499-01-01", "guven": "95.4", "tur": "kalibre-14C"},
       "ic_not_d": "ARALIK→ORTA NOKTA: MÖ 4000–3500 → MÖ 3750."}


def m(**d):
    o = copy.deepcopy(IYI)
    for k, v in d.items():
        if v is None:
            o.pop(k, None)
        else:
            o[k] = v
    return o


SURE = m(t="-3999-01-01", gun="MÖ 4000 (alt sınır)", aralik={"bas": "-3999-01-01", "son": "-3499-01-01", "guven": "toplam", "tur": "donem-toplami"},
         ic_not_d="dönem toplamı: orta nokta alınmadı")
TEK = m(aralik=None, ic_not_d="TEK DEĞER: kaynak aralık vermiyor", t="-3749-01-01")
YARIM = m(t="-4376-01-01", gun="MÖ 4489–4266 arası (orta nokta MÖ 4377)",
          aralik={"bas": "-4488-01-01", "son": "-4265-01-01", "guven": "95", "tur": "kalibre-14C"})
# (ad, madde, beklenen çıktı: ("ok",) | ("ihlal", alt-metin) | ("olc",))
VAKA = [
    ("iyi", IYI, ("ok",)), ("dönem-toplamı t=bas", SURE, ("ok",)), ("tek değer beyanlı", TEK, ("ok",)),
    ("yarım yıl→geç yıl", YARIM, ("ok",)),
    ("orta nokta yanlış (bas alınmış)", m(t="-3999-01-01", gun="MÖ 4000"), ("ihlal", "orta nokta yanlış")),
    ("dönem-toplamında orta nokta alınmış", m(aralik={"bas": "-3999-01-01", "son": "-3499-01-01", "guven": "toplam", "tur": "donem-toplami"}),
     ("ihlal", "orta nokta ALINMAZ")),
    ("kesinlik kaynaktan ince", m(kesinlik="onyil"), ("ihlal", "kaynaktan ince")),
    ("tek değer beyansız", m(aralik=None, ic_not_d="…"), ("ihlal", "TEK DEĞER")),
    ("gun metni çelişir", m(gun="MÖ 3000"), ("ihlal", "çelişiyor")),
    ("etiket yok", m(etiket=[]), ("ihlal", "etiket")),
    ("uçlar ters", m(aralik={"bas": "-3499-01-01", "son": "-3999-01-01", "guven": "95.4", "tur": "kalibre-14C"}), ("ihlal", "ters")),
    ("ORTA NOKTA beyanı yok", m(ic_not_d="aralık var"), ("ihlal", "beyanı yok")),
    ("ham 14C", m(aralik={"bas": "-3999-01-01", "son": "-3499-01-01", "guven": "belirsiz", "tur": "ham-14C"}), ("olc",)),
    ("MS tarih", m(t="1453-01-01"), ("ihlal", "MS tarihli")),
    ("kaynak_turu yazili → atlanır", m(kaynak_turu="yazili", etiket=[]), ("ok",)),
]
hata = 0
for ad, o, bek in VAKA:
    ih, ol = A.madde_denetle(o, ad)
    if bek[0] == "ok":
        tut = not ih and not ol
    elif bek[0] == "ihlal":
        tut = any(bek[1] in x for x in ih)
    else:
        tut = bool(ol) and not ih
    print(("TUTTU " if tut else "TUTMADI"), ad, "" if tut else (ih, ol))
    hata += 0 if tut else 1
print("SONUÇ:", "hepsi tuttu" if not hata else f"{hata} vaka tutmadı")
sys.exit(1 if hata else 0)
