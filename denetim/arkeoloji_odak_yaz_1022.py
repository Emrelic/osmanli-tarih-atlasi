"""MÖ olay dosyalarına KAMERA ODAĞI (odak_yer) yazar (VERI-MO-ARKEO, 24 Ekim 2026).
denetle_yayin 'ODAKSIZ GERİLEDİ': yeni maddelerin `yer_kon` / `yer_id` / `odak_*` alanı yok → kamera nereye bakacağını bilmiyor.
Kural (odak_olc.py): `odak_yer` YALNIZ "kamera buraya baksın"dır (olayın BURADA olduğu iddiası değil, yer_id gibi KARTA yazılmaz); ≥1 ad atlas yerleşimiyle tutmalı.
Bu betik maddenin `yer` alanındaki adlardan ATLASTA YERLEŞİM OLARAK VAR OLANLARI `odak_yer` yapar; hiçbiri tutmuyorsa madde olduğu gibi kalır (uydurma ad yazılmaz).
Odağı zaten olan madde (yer_kon, yer_id, odak_yer, odak_kimlik, odak_kutu_kaynak, kapsam_genis) DEĞİŞMEZ. İdempotent; sıra: hepsini_uret'in SON adımı."""
import glob, json, os, re, sys

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
ODAK_ALANLARI = ("yer_kon", "yer_id", "odak_yer", "odak_kimlik", "odak_kutu_kaynak", "kapsam_genis")


def sade(x):
    return re.sub(r"\s*\(.*?\)", "", x).strip().lower()


def parcala(yer):
    """' / ' ile böler AMA parantez içindekini bölmez ('Kerma (Kerma / Doukki Gel)' tek addır)."""
    out, d, cur, i = [], 0, "", 0
    while i < len(yer):
        c = yer[i]
        if c == "(":
            d += 1
        elif c == ")":
            d = max(0, d - 1)
        if d == 0 and yer[i:i + 3] == " / ":
            out.append(cur.strip())
            cur, i = "", i + 3
            continue
        cur += c
        i += 1
    out.append(cur.strip())
    return [x for x in out if x]


def main():
    adlar, sade_ad = set(), {}
    for f in glob.glob(os.path.join(KOK, "data", "yerlesimler*.js")):
        for m in re.finditer(r'\{ ad:"((?:[^"\\]|\\.)*)"', open(f, encoding="utf-8", errors="replace").read()):
            a = m.group(1)
            adlar.add(a)
            sade_ad.setdefault(sade(a), a)
    yazilan = tutmayan = 0
    for yol in sorted(glob.glob(os.path.join(KOK, "data", "olaylar_arkeoloji*.js"))):
        s = open(yol, encoding="utf-8").read()
        m = re.match(r"^(.*?window\.\w+\s*=\s*)(\[.*\])(\s*;?\s*)$", s, re.S)
        if not m:
            continue
        L = json.loads(m.group(2))
        degisti = False
        for o in L:
            if any(o.get(a) for a in ODAK_ALANLARI):
                continue
            bulunan = []
            for x in parcala(o.get("yer") or ""):
                a = x if x in adlar else sade_ad.get(sade(x))
                if a and a not in bulunan:
                    bulunan.append(a)
            if bulunan:
                o["odak_yer"] = bulunan
                yazilan += 1
                degisti = True
            else:
                tutmayan += 1
        if degisti:
            with open(yol, "w", encoding="utf-8", newline="\n") as fh:
                fh.write(m.group(1))
                json.dump(L, fh, ensure_ascii=False, indent=1)
                fh.write(";\n")
    print("odak_yer yazılan madde:", yazilan, "· atlas yerleşimiyle eşleşmeyen (olduğu gibi kaldı):", tutmayan)


main()
