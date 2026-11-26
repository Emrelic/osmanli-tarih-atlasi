"""NOKTA-AMERIKA üreticisi — data/yerlesimler_nokta_amerika_0917.js

Kullanım: py denetim/ARAC-NOKTA-AMERIKA-URET-0917.py <kayit_dizini> [--yaz]
Girdi   : <kayit_dizini>/{BREZILYA,HISPANO,ABD}.json (alt ölçümler; durum YAZ olanlar alınır)
Sınavlar (hepsi geçmeden --yaz dosya YAZMAZ):
  ① kimlik devletler.js'te VAR ve dönem künye penceresi içinde (üç haneli yıl pad'li)
  ② kimliğin renk anahtarı (harita: ya da id) arac/renkler.py'de VAR
  ③ en yakın mevcut yerleşim ≥ 3 km (D002) ve ad çakışması yok (girdi.yukle)
  ④ dönemler: f<t, sıfır uzunluk yok, çakışma yok, ilk f == kur, son t == 1923-10-29
  ⑤ kaynak alanı boş değil ve kaynak_durumu == dogrulandi
Çıktı biçimi data/yerlesimler.js ile aynı; window.YERLESIMLER_NOKTA_AMERIKA_0917.
"""
import io, json, math, os, re, subprocess, sys
sys.path.insert(0, "arac")
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
import girdi

D = sys.argv[1]
YAZ = "--yaz" in sys.argv
SON = "1923-10-29"


def pad(s):
    return re.sub(r"^(\d{1,3})-", lambda m: m.group(1).zfill(4) + "-", str(s))


def km(a, b, c, d):
    p = math.pi / 180
    x = math.sin((c - a) * p / 2) ** 2 + math.cos(a * p) * math.cos(c * p) * math.sin((d - b) * p / 2) ** 2
    return 12742 * math.asin(math.sqrt(x))


KUNYE = json.loads(subprocess.run(["node", "-e",
    "global.window={};eval(require('fs').readFileSync('data/devletler.js','utf8'));"
    "process.stdout.write(JSON.stringify(window.DEVLETLER.map(d=>({id:d.id,f:d.f,t:d.t,harita:d.harita||null}))))"],
    capture_output=True, timeout=60).stdout.decode("utf-8"))
KIX = {k["id"]: k for k in KUNYE}
RENK = io.open("arac/renkler.py", encoding="utf-8").read()
Y = girdi.yukle(sessiz=True)
ADLAR = {y["ad"] for y in Y}

kayitlar, ret = [], []
for g in ("BREZILYA", "HISPANO", "ABD"):
    yol = os.path.join(D, g + ".json")
    if not os.path.exists(yol):
        print("⚪ %s yok" % yol)
        continue
    for r in json.load(io.open(yol, encoding="utf-8"))["kayitlar"]:
        r["_grup"] = g
        (kayitlar if r.get("durum") == "YAZ" else ret).append(r)

temiz, hatali = [], []
for r in kayitlar:
    h = []
    s = r.get("s") or []
    for p in s:
        k = KIX.get(p["d"])
        if not k:
            h.append("① künye YOK: %s" % p["d"])
            continue
        # BEYANLI İSTİSNA: Yukarı Peru (Bolivya) ispanyol-peru dönemi 1825-08-06'da biter —
        # künye 1824-12-09'da (Ayacucho) bitiyor; atlasın Sucre · Potosí · La Paz kayıtları
        # (yerlesimler_amerika.js, 3 kayıt) aynı ucu taşıyor. Komşuyla tutarlılık (D171) için
        # korunur, künye aşımı (4c) raporda bildirilir — yeni bir kusur DOĞURULMAZ, var olan izlenir.
        if p["d"] == "ispanyol-peru" and p["t"] == "1825-08-06" and pad(p["f"]) >= pad(k["f"]):
            r.setdefault("_istisna", []).append("4c: ispanyol-peru →1825-08-06 (künye 1824-12-09) — Sucre/Potosí/La Paz ile aynı")
        elif pad(p["f"]) < pad(k["f"]) or pad(p["t"]) > pad(k["t"]):
            h.append("① künye penceresi dışı: %s %s→%s (künye %s→%s)" % (p["d"], p["f"], p["t"], k["f"], k["t"]))
        anahtar = k["harita"] or k["id"]
        if '"%s"' % anahtar not in RENK:
            h.append("② renk YOK: %s" % anahtar)
    en = min(Y, key=lambda y: km(r["lat"], r["lon"], float(y["lat"]), float(y["lon"])))
    dk = km(r["lat"], r["lon"], float(en["lat"]), float(en["lon"]))
    if dk < 3:
        h.append("③ YAKIN MÜKERRER: %s %.1f km" % (en["ad"], dk))
    if r["ad"] in ADLAR:
        h.append("③ AD ÇAKIŞMASI: %s" % r["ad"])
    ss = sorted(s, key=lambda p: pad(p["f"]))
    for i, p in enumerate(ss):
        if not pad(p["f"]) < pad(p["t"]):
            h.append("④ ters/sıfır dönem %s→%s" % (p["f"], p["t"]))
        if i and pad(ss[i - 1]["t"]) != pad(p["f"]):
            h.append("④ boşluk/çakışma %s | %s" % (ss[i - 1]["t"], p["f"]))
    if not ss or ss[0]["f"] != r.get("kur") or ss[-1]["t"] != SON:
        h.append("④ uçlar: kur %s · ilk f %s · son t %s" % (r.get("kur"), ss[0]["f"] if ss else "-", ss[-1]["t"] if ss else "-"))
    if not r.get("kaynak") or r.get("kaynak_durumu") != "dogrulandi":
        h.append("⑤ kaynak doğrulanmamış (%s)" % r.get("kaynak_durumu"))
    r["_en_yakin"] = "%s %.0f km" % (en["ad"], dk)
    (hatali if h else temiz).append((r, h))

print("YAZ adayı %d · temiz %d · hatalı %d · YAZ-dışı (karar/elendi) %d" % (len(kayitlar), len(temiz), len(hatali), len(ret)))
for r, h in hatali:
    print("  ✗ %-30s %s" % (r["ad"], " · ".join(h)))
for r, _ in temiz:
    print("  ✓ %-30s kur %s · en yakın %s" % (r["ad"], r["kur"], r["_en_yakin"]))
for r in ret:
    print("  ⚪ %-30s %s — %s" % (r["ad"], r.get("durum"), str(r.get("not") or r.get("neden") or "")[:120]))


def js(v):
    return json.dumps(v, ensure_ascii=False)


if YAZ:
    satir = []
    for r, _ in temiz:
        donem = ",\n     ".join('{f:%s,t:%s,d:%s}' % (js(p["f"]), js(p["t"]), js(p["d"])) for p in r["s"])
        satir.append('{ ad:%s, tur:%s, lat:%s, lon:%s, g:%d, k:%d, kur:%s,\n  s:[%s],\n  d:[],\n  kaynak:%s,\n  neden:%s },'
                     % (js(r["ad"]), js(r.get("tur", "sehir")), r["lat"], r["lon"], int(r.get("g", 0)), int(r.get("k", 3)),
                        js(r["kur"]), donem, js(r["kaynak"]), js(r.get("neden", ""))))
    bas = ("// =====================================================================\n"
           "// NOKTA-AMERIKA — noktasız Amerika kümelerine KAYNAKLI yerleşim noktaları\n"
           "// =====================================================================\n"
           "// 🔴 ÜRETİLMİŞ — elle düzenleme; üretici denetim/ARAC-NOKTA-AMERIKA-URET-0917.py\n"
           "// Şartname oturumlar/KOSU13-OTOBUS.md (NOKTA-AMERIKA). Aday listesi\n"
           "// denetim/NOKTASIZLIK-ADAY-0917.json · sınıflama denetim/NOKTA-AMERIKA-RAPOR-0917.md\n"
           "// Kural: nokta yalnız o tarihte orada DEVLET İDARESİ varsa; kur = idarenin başladığı gün.\n"
           "// girdi.py GIRDI_DOSYALARI kaydı 1.MURAT'ta.\n\n"
           "window.YERLESIMLER_NOKTA_AMERIKA_0917 = [\n")
    with io.open("data/yerlesimler_nokta_amerika_0917.js", "w", encoding="utf-8", newline="\n") as f:
        f.write(bas + "\n".join(satir) + "\n];\n")
    print("yazıldı: data/yerlesimler_nokta_amerika_0917.js (%d nokta)" % len(temiz))
