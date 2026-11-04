"""uygula.py SONUC.json [SONUC2.json ...] — kaynak teyitlerini hukumler.json'a işler.
tam/kismen/celiski -> guven KAYNAKLI; bulunamadi/giris_gerek -> KAYNAK-GEREK kalır, arama notu eklenir.
HARIC: zayıf kaynaklı girdiler işlenmez. DEGISIM: hüküm/kova değişiklikleri (LAB SALI kararı)."""
import json, sys, os

H_YOL = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "hukumler.json")
HARIC = {"K005": "South African History Online akademik başvuru eseri değil"}
DEGISIM = {
    "E061": ("GERCEK", "GERCEK", "Yok — 1526-1527 Hafsî arası TDV Kostantîne'de var; silinmesin."),
    "E103": ("GERCEK", "GERCEK", "Harmankaya bizans t → 1313-04-28 (713 ∩ 1313, TDV Mihaloğulları); ic_not: rivayet tartışmalı (Imber)."),
    "K044": ("YAPAY", "YAPAY-c", "Denizli, Söke, Burdur, Isparta vb. 1402-08 sonrası ilgili beylik (Germiyan/Menteşe/Aydın/Hamîd/Karaman) d: + timurlu v: — beylik iade günleri kaynakla; timurlu bitişi Temmuz 1404 (Muharrem 807, TDV Timur)."),
    "E013": ("YAPAY", "YAPAY-c", "Ecmîr babur t → 1721-01-01 (TDV Ecmîr: 1721'de Racpût hâkimiyeti); 1721 → Maratha yılı arası racput."),
    "E015": ("GERCEK", "GERCEK", "Ecmîr maratha f 1756 → 1770 sınansın (1911 EB 'Ajmere': Bâbürlüler 1770'te Marathalara bıraktı; Racput-Maratha çekişmesi 1818'e dek); E013 bâbür t ucu aynı."),
    "K087": ("YAPAY", "YAPAY-c", "Quivira/Kansas wicita noktası 1719 sonrası dönemi kaldırılsın ya da kaynakla yeniden kurulsun (Handbook of Texas: 1719'a dek grup Oklahoma'ya indi)."),
}
H = json.load(open(H_YOL, encoding="utf-8"))
say = {"KAYNAKLI": 0, "kalan": 0, "haric": 0, "degisim": 0}
HEPSI = "--hepsi" in sys.argv
for yol in [a for a in sys.argv[1:] if a != "--hepsi"]:
    for no, s in json.load(open(yol, encoding="utf-8")).items():
        if no.startswith("_"):
            continue
        h = H[no]
        if h["guven"] != "KAYNAK-GEREK":
            print("ATLANDI (zaten", h["guven"], ")", no)
            continue
        if no in HARIC:
            h["gerekce"] += " [KAYNAK-1104: aday kaynak reddedildi — %s]" % HARIC[no]
            say["haric"] += 1
            continue
        t = s["teyit"]
        if t in ("tam", "kismen", "celiski"):
            h["guven"] = "KAYNAKLI"
            h["kaynak"] = s["kaynak"] + (" · önceki: " + h["kaynak"] if h.get("kaynak") and h["kaynak"] != "bulunamadı" else "")
            ek = " [KAYNAK-1104 (%s): %s" % (t, s["teyit_edilen"])
            if s.get("alinti"):
                ek += " — \"%s\"" % s["alinti"]
            if s.get("not"):
                ek += " · %s" % s["not"]
            h["gerekce"] += ek + "]"
            if no in DEGISIM:
                eski = "%s/%s" % (h["hukum"], h["kova"])
                h["hukum"], h["kova"], h["duzeltme"] = DEGISIM[no]
                h["gerekce"] += " [hüküm %s → %s/%s, kaynak üzerine]" % (eski, h["hukum"], h["kova"])
                say["degisim"] += 1
            say["KAYNAKLI"] += 1
        elif HEPSI:
            h["gerekce"] += " [KAYNAK-1104: %s — %s]" % (t, s.get("not") or s.get("kaynak") or "")
            say["kalan"] += 1
json.dump(H, open(H_YOL, "w", encoding="utf-8"), ensure_ascii=False, indent=0)
print(say)
from collections import Counter
print(Counter(v["guven"] for k, v in H.items() if not k.startswith("_")))
