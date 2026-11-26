# -*- coding: utf-8 -*-
"""KITA 29 — EVREN: bölgedeki noktaların YALNIZ adı + koordinatı (SALT OKUR)

🔴 Niçin ayrı alet: `grep -i` Git Bash'te Türkçe baytları köşeli ayraçta
   eşleştiremiyor — Çaldıran · Başkale · Mâku'yu "yok" gösterdi, oysa KITA 13
   dün üçünü de ölçtü (§4 yazım ekseni · D054 · D064). Adlar YORUMLAYICIYLA
   aranır: girdi.yukle() + ARAC-NORMAL-0903.norm().

🔴 Niçin DÖNEM BASMIYOR: D022 — öngörü ölçümden ÖNCE yazılır. Bu alet
   yalnız "kim var, nerede" sorusunu cevaplar; "kimin elinde" sorusu
   ARAC-KITA29-KESIT-0913.py'nin işidir ve öngörüden SONRA koşar.

Kullanım:  py denetim/ARAC-KITA29-EVREN-0913.py
"""
import os, sys, io, importlib.util

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

_spec = importlib.util.spec_from_file_location(
    "n", os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py"))
_m = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_m)
norm = _m.norm

import girdi

Y = girdi.yukle(sessiz=True)
print("# taban: %d nokta · kayıt alanları örneği: %s" % (len(Y), sorted(Y[0].keys())))

# Emre'nin 11 adı + H-0011 için antlaşma kuşağının merkezleri.
# Her ad birden çok yazımla aranır (Türkçe · yerel · Rus/Sovyet dönemi).
ARANAN = [
    ("Revan",       ["revan", "erivan", "yerevan", "irevan"]),
    ("Gümrü",       ["gumru", "gyumri", "kumayri", "aleksandropol", "leninakan"]),
    ("Eçmiyadzin",  ["ecmiyadzin", "ucmiyadzin", "uckilise", "vagarsapat", "vagharshapat", "etchmiadzin"]),
    ("Nahçıvan",    ["nahcivan", "nakhchivan"]),
    ("Ordubad",     ["ordubad"]),
    ("Çaldıran",    ["caldiran"]),
    ("Başkale",     ["baskale"]),
    ("Şerur",       ["serur", "sharur", "serurdereyiz"]),
    ("Mâku",        ["maku"]),
    ("Hoy",         ["hoy", "khoy"]),
    ("Merend",      ["merend", "marand"]),
    ("Selmas",      ["selmas", "salmas", "dilman", "sahpur"]),
    # kuşağın öteki düğümleri (H-0011)
    ("Tebriz",      ["tebriz", "tabriz"]),
    ("Urmiye",      ["urmiye", "urmia"]),
    ("Culfa",       ["culfa", "julfa", "cugha"]),
    ("Gence",       ["gence", "ganja", "gandzak"]),
    ("Berdaa",      ["berdaa", "berda", "barda"]),
    ("Şamahı",      ["samahi", "shamakhi"]),
    ("Bakü",        ["baku", "bakuye"]),
    ("Derbend",     ["derbend"]),
    ("Şeki",        ["seki", "nuha"]),
    ("Tiflis",      ["tiflis", "tbilisi"]),
    ("Lori",        ["lori"]),
    ("Kars",        ["kars"]),
    ("Kağızman",    ["kagizman"]),
    ("Magazberd",   ["magazberd", "magazberd"]),
    ("Doğubayazıt", ["dogubayazit", "dogubeyazit", "bayezid"]),
    ("Erdebil",     ["erdebil", "ardabil"]),
    ("Karabağ",     ["karabag", "susa", "shusha"]),
    ("Luristan",    ["luristan", "hurremabad", "khorramabad"]),
    ("Nihavend",    ["nihavend", "nahavand"]),
    ("Hemedan",     ["hemedan", "hamadan"]),
    ("Şehrizor",    ["sehrizor", "kerkuk"]),
]


def ara(anahtarlar):
    tam, parca = [], []
    for y in Y:
        n = norm(y.get("ad", ""))
        # ad içindeki parantezli ek adları da kelime olarak böl
        kelimeler = set(n.replace("(", " ").replace(")", " ").replace("-", " ")
                         .replace(",", " ").replace("/", " ").split())
        for a in anahtarlar:
            if n == a or a in kelimeler:
                tam.append(y); break
            if len(a) >= 5 and a in n:
                parca.append(y); break
    return tam, parca


print()
print("=== ① ADLAR — tam kelime eşleşmesi / parça eşleşmesi (5+ harf) ===")
for etiket, anahtarlar in ARANAN:
    tam, parca = ara(anahtarlar)
    if not tam and not parca:
        print("  %-12s ⚪ ad araması boş — 3 km taraması ②'de" % etiket)
        continue
    for y in tam:
        print("  %-12s 🟢 %-34s %8.4f %8.4f" % (etiket, y.get("ad"), y["lat"], y["lon"]))
    for y in parca:
        print("  %-12s 🟡 %-34s %8.4f %8.4f  (parça)" % (etiket, y.get("ad"), y["lat"], y["lon"]))

# ② Kutudaki bütün noktalar — ad aramasının GÖRMEDİĞİ yazımları yakalamak için.
# Kutu: Kafkasya güneyi + Azerbaycan + Van havzası + Zagros kuzeyi.
LA0, LA1, LO0, LO1 = 35.5, 42.6, 41.5, 50.5
print()
print("=== ② KUTU %.1f-%.1f°K · %.1f-%.1f°D — bütün noktalar (enlem sırasıyla) ===" % (LA0, LA1, LO0, LO1))
kutu = [y for y in Y if y.get("lat") is not None and LA0 <= y["lat"] <= LA1 and LO0 <= y["lon"] <= LO1]
kutu.sort(key=lambda y: (-y["lat"], y["lon"]))
for y in kutu:
    print("  %8.4f %8.4f  %s" % (y["lat"], y["lon"], y.get("ad")))
print("  ⇒ kutuda %d nokta" % len(kutu))
