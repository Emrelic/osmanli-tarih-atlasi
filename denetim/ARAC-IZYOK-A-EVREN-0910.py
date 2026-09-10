# -*- coding: utf-8 -*-
"""IZ-YOK DENETIM A — TRIYAJIN EVRENINI OLCER (SALT OKUR).

🔴 NICIN: sevkin verdigi "81 dosya" bir ADAY LISTESIDIR ve
`denetim/ARAC-BAGLANMAMIS-YAMA-0910.py` onu UC suzgecten geciriyor:

    ① f not in girdi.GIRDI_DOSYALARI          (kasitli — evrenin tanimi)
    ② ad DESEN ile baslasin
       ^(yerlesimler|yer_yama|yama|donem_yama|kademe_yama)
    ③ dosyada `\\bad\\s*:\\s*"` GECSIN — yoksa SESSIZCE atlanir

③ ucuncusu bir KOR NOKTA: JSON bicimli anahtar (`"ad": "..."`) bu kalibi
TUTTURMAZ, cunku `ad`dan sonra `"` gelir, `:` degil. Yani ayni veriyi
tasiyan iki dosyadan biri sayiliyor, oteki sayilmiyor — ve elenen taraf
GORUNMUYOR (D149: suzgec gorunur eler, IZDUSUM SESSIZ KIRPAR · D125:
bir regex'in gormedigi yazim bicimi).

Bu alet ucunu de AYRI AYRI sayar ve hangi dosyanin hangi suzgecte
dustugunu ADIYLA basar.
"""
import io, os, re, sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

BAGLI = set(girdi.GIRDI_DOSYALARI)
VERI = os.path.join(KOK, "data")

DESEN = re.compile(r"^(yerlesimler|yer_yama|yama|donem_yama|kademe_yama)", re.I)
AD_DUZ = re.compile(r'\bad\s*:\s*"')        # ad:"..."      (aletin kalibi)
AD_JSON = re.compile(r'"ad"\s*:\s*"')       # "ad": "..."   (aletin GORMEDIGI)
AD_TEK = re.compile(r"\bad\s*:\s*'")        # ad:'...'      (tek tirnak)

kovalar = {"bagli": [], "desen-disi": [], "SAYILAN": [],
           "🔴 JSON-BICIMLI (aletin kor noktasi)": [],
           "🔴 TEK-TIRNAKLI (aletin kor noktasi)": [],
           "ad tasimayan (dogru elenme)": []}

for f in sorted(os.listdir(VERI)):
    if not f.endswith(".js"):
        continue
    if f in BAGLI:
        if DESEN.match(f):
            kovalar["bagli"].append(f)
        continue
    if not DESEN.match(f):
        if "yama" in f.lower():
            kovalar["desen-disi"].append(f)
        continue
    s = io.open(os.path.join(VERI, f), encoding="utf-8", errors="replace").read()
    if AD_DUZ.search(s):
        kovalar["SAYILAN"].append(f)
    elif AD_JSON.search(s):
        kovalar["🔴 JSON-BICIMLI (aletin kor noktasi)"].append(
            "%s  (%d kayit)" % (f, len(AD_JSON.findall(s))))
    elif AD_TEK.search(s):
        kovalar["🔴 TEK-TIRNAKLI (aletin kor noktasi)"].append(
            "%s  (%d kayit)" % (f, len(AD_TEK.findall(s))))
    else:
        kovalar["ad tasimayan (dogru elenme)"].append(f)

for k, v in kovalar.items():
    print("=" * 72)
    print("%s : %d" % (k, len(v)))
    for x in v:
        print("   ", x)
