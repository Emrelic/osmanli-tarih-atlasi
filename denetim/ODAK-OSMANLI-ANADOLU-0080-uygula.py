"""ODAK-OSMANLI-ANADOLU-0080 — kronoloji maddelerine HARİTA ODAĞI uygulayıcısı.

    py denetim/ODAK-OSMANLI-ANADOLU-0080-uygula.py                 KURU KOŞU (yazmaz)
    py denetim/ODAK-OSMANLI-ANADOLU-0080-uygula.py --uygula        data/ dosyalarına yazar
         --grup A,B,C      yalnız bu sınıflar (E'de yazılacak alan yok)
         --goster          her değişen nesnenin yeni metninin sonunu basar (gözden geçirme)
         --kg-kaldir       A/B/C'ye çevrilen BEYANLI maddelerde kapsam_genis:true'yu da SİLER
                           🔴 VARSAYILAN KAPALI — gerekçe: kronoloji_*.js maddeleri app.js'te
                           yalnız `maddeAc` yolundan açılır (app.js:13866-13867) ve orada
                           kapsam_genis:true = devletiYay(o devletin gövdesi) (app.js:14092-14125);
                           odak_yer/odak_kimlik o yolda OKUNMAZ. Silmek bugün devlet sekmesinde
                           kamerayı DURDURUR. Koordinatör kararıyla açılır (tahta M-5297).

Karar tablosu: denetim/ODAK-OSMANLI-ANADOLU-0080-oneri.json (üreten: -karar.py).
Yalnız ODAK alanları yazılır: yer_id · yer_kon · odak_yer · odak_kimlik (+ isteğe bağlı
kapsam_genis silme). t/b/d/kaynak'a DOKUNULMAZ — betik sonuçta bunu node ile SINAR.

Her madde (dosya, t, b) ile bulunur. Süzgeç sessiz atlamaz, sayar:
    değişen · zaten böyle · kayıt yok · eski tutmuyor · şartı sağlamadı · E (yazılacak yok)
Şartlar: yer_id / odak_yer adları havuzda BİREBİR (app.js `sehirler` evreni =
odak_olc.yer_havuzu) · odak_kimlik künyede var VE madde gününde ≥2 yerleşim
(app.js maddeOdakKutusu ile aynı yol: -kimlik.js) · yer_kon [lat, lon] aralıkta.
"""
import io
import json
import os
import re
import subprocess
import sys
import tempfile

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import odak_olc  # noqa: E402

UYGULA = "--uygula" in sys.argv
KG_KALDIR = "--kg-kaldir" in sys.argv
GRUP = None
if "--grup" in sys.argv:
    GRUP = set(sys.argv[sys.argv.index("--grup") + 1].upper().split(","))
ODAK_ALAN = ("yer_id", "yer_kon", "odak_yer", "odak_kimlik", "odak_kutu_kaynak")

oneri = json.load(open(os.path.join(KOK, "denetim", "ODAK-OSMANLI-ANADOLU-0080-oneri.json"), encoding="utf-8"))
havuz = odak_olc.yer_havuzu()


# ── şart sınavı ───────────────────────────────────────────────────────────
def kimlik_olc(ciftler):
    """[(gün, [id…])] → {(gün, "id,id"): (n, künyede_yok)} — app.js yolunun birebiri."""
    if not ciftler:
        return {}
    arg = []
    for g, ids in ciftler:
        arg += [g, ",".join(ids)]
    r = subprocess.run(["node", os.path.join(KOK, "denetim", "ODAK-OSMANLI-ANADOLU-0080-kimlik.js")] + arg,
                       capture_output=True, text=True, encoding="utf-8")
    out = {}
    for s in r.stdout.splitlines():
        m = re.match(r"(\S+) (\S+) → n=(\d+)", s)
        if m:
            out[(m.group(1), m.group(2))] = (int(m.group(3)), "künyede YOK" in s)
    return out


kim = kimlik_olc([(o["t"], o["alan"]["odak_kimlik"]) for o in oneri if "odak_kimlik" in o["alan"]])


def sart(o):
    """Boş liste = şart sağlandı; yoksa sebepler."""
    a, hata = o["alan"], []
    if "yer_id" in a and a["yer_id"] not in havuz:
        hata.append("yer_id havuzda yok: " + a["yer_id"])
    for ad in a.get("odak_yer", []):
        if ad not in havuz:
            hata.append("odak_yer havuzda yok: " + ad)
    if "odak_kimlik" in a:
        n, yok = kim.get((o["t"], ",".join(a["odak_kimlik"])), (0, True))
        if yok:
            hata.append("odak_kimlik künyede yok")
        if n < 2:
            hata.append("odak_kimlik %s günü %d yerleşim (<2, app.js kutu KURAMAZ)" % (o["t"], n))
    if "yer_kon" in a:
        la, lo = a["yer_kon"]
        if not (-90 <= la <= 90 and -180 <= lo <= 180):
            hata.append("yer_kon aralık dışı")
    return hata


# ── JS metninde nesne aralıkları (dize/yorum farkında) ────────────────────
def nesne_araliklari(metin):
    i = metin.index("[", metin.index("window."))
    derin, bas, out, n = 0, None, [], len(metin)
    while i < n:
        c = metin[i]
        if c in "\"'`":
            q = c
            i += 1
            while metin[i] != q:
                i += 2 if metin[i] == "\\" else 1
        elif c == "/" and metin[i + 1] == "/":
            i = metin.index("\n", i)
        elif c == "/" and metin[i + 1] == "*":
            i = metin.index("*/", i) + 1
        elif c in "[{":
            derin += 1
            if c == "{" and derin == 2:
                bas = i
        elif c in "]}":
            if c == "}" and derin == 2:
                out.append((bas, i + 1))
            derin -= 1
            if derin == 0:
                break
        i += 1
    return out


def js(v):
    return json.dumps(v, ensure_ascii=False)


def nesne_duzelt(s, alan, kg_sil):
    """s = '{ … }' metni. alan: yazılacak odak alanları. Dönen yeni metin."""
    for k, v in alan.items():
        if k == "yer_id" and re.search(r'\byer_id\s*:\s*""', s):
            s = re.sub(r'\byer_id\s*:\s*""', "yer_id:" + js(v), s, count=1)
            continue
        j = len(s) - 1                      # kapanan '}'
        k2 = j - 1
        while s[k2].isspace():
            k2 -= 1
        ek = ("%s:%s" % (k, js(v)))
        if s[k2] == ",":
            s = s[:k2 + 1] + " " + ek + "," + s[k2 + 1:]
        else:
            s = s[:k2 + 1] + ", " + ek + s[k2 + 1:]
    if kg_sil:
        m = re.search(r"\bkapsam_genis\s*:\s*true", s)
        if m:
            a, b = m.start(), m.end()
            sonra = re.match(r"\s*,[ \t]*", s[b:])
            if sonra:
                b += sonra.end()
            else:
                once = re.search(r",\s*$", s[:a])
                if once:
                    a = once.start()
            s = s[:a] + s[b:]
    return s


def js_oku_metin(metin):
    with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8") as f:
        f.write(metin)
        yol = f.name
    try:
        return odak_olc._oku(yol)
    finally:
        os.unlink(yol)


# ── ana döngü ─────────────────────────────────────────────────────────────
SAY = {"değişen": 0, "zaten böyle": 0, "kayıt yok": 0, "eski tutmuyor": 0,
       "şartı sağlamadı": 0, "E (yazılacak yok)": 0, "Ø ölçer yanlış pozitifi": 0, "grup dışı": 0}
ongoru = {}                     # dosya → {"once": {sinif:n}, "sonra": {...}, "sonra_app": {...}}
dosyalar = []
for o in oneri:
    if o["dosya"] not in dosyalar:
        dosyalar.append(o["dosya"])

for f in dosyalar:
    yol = os.path.join(KOK, "data", f)
    ham = io.open(yol, encoding="utf-8", newline="").read()
    d, hata = odak_olc._oku(yol)
    if hata:
        print("🔴 %s AYRIŞTIRILAMADI — dosyaya dokunulmadı: %s" % (f, hata))
        continue
    kayit = d["kayit"]
    araliklar = nesne_araliklari(ham)
    if len(araliklar) != len(kayit):
        print("🔴 %s nesne sayısı tutmuyor (metin %d · node %d) — DOKUNULMADI" % (f, len(araliklar), len(kayit)))
        continue
    print("\n#### %s  (window.%s · %d kayıt)" % (f, d["ad"], len(kayit)))
    duzelt = {}                                  # kayıt indeksi → (alan, kg_sil)
    beklenen = {}                                # kayıt indeksi → beklenen yeni nesne
    for o in [x for x in oneri if x["dosya"] == f]:
        etiket = "%3d %s %s | %s" % (o["n"], o["sinif"], o["t"], o["b"][:60])
        ix = [i for i, r in enumerate(kayit) if r.get("t") == o["t"] and r.get("b") == o["b"]]
        if len(ix) != 1:
            SAY["kayıt yok"] += 1
            print("  ❌ KAYIT YOK (%d eşleşme) %s" % (len(ix), etiket))
            continue
        i = ix[0]
        r = kayit[i]
        if o["sinif"] in ("E", "Ø"):
            SAY["E (yazılacak yok)" if o["sinif"] == "E" else "Ø ölçer yanlış pozitifi"] += 1
            print("  ⚪ %s  %s\n       gerekçe: %s\n       kaynak : %s" % (o["sinif"], etiket, o["gerekce"], o["kaynak"]))
            continue
        if GRUP and o["sinif"] not in GRUP:
            SAY["grup dışı"] += 1
            continue
        # zaten böyle mi?
        if all(r.get(k) == v for k, v in o["alan"].items()) and not (KG_KALDIR and r.get("kapsam_genis") is True):
            SAY["zaten böyle"] += 1
            print("  ＝ ZATEN BÖYLE %s" % etiket)
            continue
        # eski değer doğrulaması — odak alanları ölçüldüğü gibi BOŞ olmalı
        eski_ok = (r.get("yer_id") in ("", None) and not r.get("yer_kon") and not r.get("odak_yer")
                   and not r.get("odak_kimlik") and not r.get("odak_kutu_kaynak")
                   and (r.get("kapsam_genis") is True) == (o["olc"] == "BEYANLI"))
        if not eski_ok:
            SAY["eski tutmuyor"] += 1
            print("  ⛔ ESKİ TUTMUYOR (dokunulmadı) %s\n       şimdiki: %s" % (
                etiket, {k: r.get(k) for k in ODAK_ALAN + ("kapsam_genis",) if r.get(k) not in (None, "")}))
            continue
        h = sart(o)
        if h:
            SAY["şartı sağlamadı"] += 1
            print("  ⛔ ŞARTI SAĞLAMADI %s\n       %s" % (etiket, " · ".join(h)))
            continue
        kg_sil = KG_KALDIR and r.get("kapsam_genis") is True
        duzelt[i] = (o["alan"], kg_sil)
        yeni = dict(r)
        yeni.update(o["alan"])
        if kg_sil:
            yeni.pop("kapsam_genis")
        beklenen[i] = yeni
        print("  ✏️  %s\n       yaz    : %s%s\n       gerekçe: %s\n       kaynak : %s" % (
            etiket, js(o["alan"]), "  + kapsam_genis SİL" if kg_sil else "", o["gerekce"], o["kaynak"]))

    # öngörü (odak_olc sınıflaması + app.js gerçeği)
    def app_sinif(rr):
        s, _ = odak_olc.sinifla(rr, havuz)
        ok = rr.get("odak_kimlik")
        if s in ("BEYANLI", "ODAKSIZ") and isinstance(ok, list) and len(ok) == 1:
            n, _y = kim.get((rr.get("t"), ok[0]), (0, True))
            if n >= 2:
                return "KUTULU"             # app.js tek kimliği kabul eder, şart yerleşim sayısı
        return s
    once = [odak_olc.sinifla(r, havuz)[0] for r in kayit]
    sonra_k = [beklenen.get(i, r) for i, r in enumerate(kayit)]
    ongoru[f] = {"once": once, "sonra": [odak_olc.sinifla(r, havuz)[0] for r in sonra_k],
                 "sonra_app": [app_sinif(r) for r in sonra_k]}

    if not duzelt:
        continue
    # metni sondan başa düzelt (aralıklar kaymasın)
    yeni_ham = ham
    for i in sorted(duzelt, reverse=True):
        a, b = araliklar[i]
        alan, kg = duzelt[i]
        yeni_nesne = nesne_duzelt(yeni_ham[a:b], alan, kg)
        if "--goster" in sys.argv:
            print("  ── #%d yeni metin (son 160 karakter):\n     …%s" % (i, yeni_nesne[-160:].replace("\n", "\n     ")))
        yeni_ham = yeni_ham[:a] + yeni_nesne + yeni_ham[b:]
    # SINAV: yeni metin node ile ayrışmalı ve YALNIZ beklenen alanlar değişmiş olmalı
    d2, h2 = js_oku_metin(yeni_ham)
    if h2 or len(d2["kayit"]) != len(kayit):
        print("  🔴 SINAV: yeni metin ayrışmadı / sayı değişti — %s DOSYAYA YAZILMADI: %s" % (f, h2))
        continue
    bozuk = [i for i, r2 in enumerate(d2["kayit"]) if r2 != beklenen.get(i, kayit[i])]
    if bozuk:
        print("  🔴 SINAV: %d kayıt beklenenden farklı (ilk: #%d) — %s DOSYAYA YAZILMADI" % (len(bozuk), bozuk[0], f))
        continue
    SAY["değişen"] += len(duzelt)
    print("  ✅ SINAV: %d kayıt değişti, öteki %d kayıt birebir aynı (node ile karşılaştırıldı)"
          % (len(duzelt), len(kayit) - len(duzelt)))
    if UYGULA:
        io.open(yol, "w", encoding="utf-8", newline="").write(yeni_ham)
        print("  💾 YAZILDI: data/%s" % f)

print("\n" + "=" * 90)
print("SAYAÇ  " + " · ".join("%s %d" % kv for kv in SAY.items()))
print("KİP    " + ("UYGULA" if UYGULA else "KURU KOŞU (yazılmadı)") + (" · grup " + ",".join(sorted(GRUP)) if GRUP else "")
      + (" · kapsam_genis SİLİNİR" if KG_KALDIR else " · kapsam_genis KORUNUR"))
print("\nÖNGÖRÜ — odak_olc.py sınıfları (önce → sonra) · [app.js gerçeği: tek kimlik ≥2 yerleşimse KUTULU]")
for f, g in ongoru.items():
    def say(L):
        return {k: L.count(k) for k in ("KONUMLU", "KUTULU", "BEYANLI", "ODAKSIZ")}
    print("  %-26s önce %s\n  %-26s sonra(odak_olc) %s\n  %-26s sonra(app.js)   %s" % (
        f, say(g["once"]), "", say(g["sonra"]), "", say(g["sonra_app"])))
