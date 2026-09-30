# -*- coding: utf-8 -*-
"""KUNYE-1945-0930 — ONCE1281 künye önerilerini data/devletler.js'e birleştirir.

Kullanım:  py denetim/ARAC-KUNYE-1945-0930-BIRLESTIR.py denetim/ONCE1281-<BÖLGE>-KUNYE.json [--kuru]
Kapılar (koordinatör M-DEVAM): ① şema ② çakışma ③ pencere ④ ardıl ⑤ boya ⑥ node --check.
Reddedilen kayıt YAZILMAZ; sebebi basılır ve kayıt dosyasına düşer
(denetim/KUNYE-1945-0930-BIRLESTIR-<BÖLGE>.json) — oturuma geri yazılacak liste odur.
Koordinatör hükümleri (M-5577/5579): ternate f 1281 KALIR · zimbabve ic_not_f
"aralık UCU" beyanı ZORUNLU · srivijaya ic_not_t "eşik" beyanı ZORUNLU.
"""
import io, os, re, sys, json, subprocess

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "data", "devletler.js")
NL = "\r\n"
ZORUNLU = ("id", "ad", "f", "t", "harita", "bolge", "kaynak", "islem")
TARIH = re.compile(r"^-?\d{3,4}-\d{2}-\d{2}$")


def js(v):
    return '"' + str(v).replace("\\", "\\\\").replace('"', '\\"').replace("\r", " ").replace("\n", " ") + '"'


def dizgi_atla(m, j):
    j += 1
    while m[j] != '"':
        j += 2 if m[j] == "\\" else 1
    return j


def esle(m, i, ac, kapa):
    d, j = 0, i
    while True:
        c = m[j]
        if c == '"':
            j = dizgi_atla(m, j)
        elif c == ac:
            d += 1
        elif c == kapa:
            d -= 1
            if d == 0:
                return j
        j += 1


def blok(m, kid):
    b = [x.start() for x in re.finditer(r'\{\s*id:"%s"' % re.escape(kid), m)]
    if len(b) != 1:
        raise SystemExit("blok %s: %d eşleşme" % (kid, len(b)))
    return b[0], esle(m, b[0], "{", "}")


def pad(t):
    """Üç haneli yılı dört haneye (D205: dizgi karşılaştırmasında pad şart)."""
    return t if t[:1] == "-" or len(t.split("-")[0]) >= 4 else "0" + t


def kron_sat(x):
    anah = ["t", "tur", "b"] + [k for k in x if k not in ("t", "tur", "b")]
    return "    { " + ", ".join("%s:%s" % (k, js(x[k])) for k in anah if k in x) + " }"


def ust_alan_yaz(B, anahtar, deger):
    """Künye BAŞINDAKİ (kronoloji öncesi) alanı değiştir ya da f/t'nin ardına ekle."""
    kr = B.find("kronoloji:")
    ust = B if kr < 0 else B[:kr]
    m = re.search(r'\b%s:"' % re.escape(anahtar), ust)
    if m:
        s = dizgi_atla(B, m.end() - 1)
        return B[:m.end() - 1] + js(deger) + B[s + 1:]
    t = re.search(r'\bt:"[^"]*"', ust)
    return B[:t.end()] + ", %s:%s" % (anahtar, js(deger)) + B[t.end():]


def kron_ekle(B, kalemler):
    if not kalemler:
        return B
    k = B.find("kronoloji:[")
    if k < 0:
        son = B.rstrip().rfind("}")
        ic = B[:son].rstrip()
        ayr = "" if ic.endswith(",") else ","
        return ic + ayr + NL + "  kronoloji:[" + NL + ("," + NL).join(map(kron_sat, kalemler)) + NL + "  ]" + NL + B[son:]
    ka = esle(B, k + len("kronoloji:"), "[", "]")
    ic = B[k + len("kronoloji:["):ka].rstrip()
    ayr = "," if ic.strip() and not ic.endswith(",") else ""
    return B[:k + len("kronoloji:[")] + ic + ayr + NL + ("," + NL).join(map(kron_sat, kalemler)) + NL + "  " + B[ka:]


def yeni_blok(r):
    s = "{ id:%s, ad:%s" % (js(r["id"]), js(r["ad"]))
    if r.get("tur"):
        s += ", tur:%s" % js(r["tur"])
    s += ", bolge:%s," % js(r["bolge"]) + NL
    s += "  f:%s, t:%s" % (js(r["f"]), js(r["t"]))
    if r.get("baskent"):
        s += ", baskent:%s" % js(r["baskent"])
    if r.get("harita"):
        s += ", harita:%s" % js(r["harita"])
    s += "," + NL
    for k, v in r.items():
        if (k.startswith("ic_not") or k.startswith("alinti_")) and v and isinstance(v, str):
            s += "  %s:%s," % (k, js(v)) + NL
    if r.get("kollar"):
        # şema dışı dizi (IRAN bavendi) — kaybolmasın diye editör notuna dizgi olarak
        s += "  ic_not_kollar:%s," % js(" · ".join(
            "%s %s→%s%s" % (x.get("kol", "?"), x.get("f", "?"), x.get("t", "?"),
                            (" (" + x["not"] + ")") if x.get("not") else "") for x in r["kollar"])) + NL
    if r.get("ozet"):
        s += "  ozet:%s," % js(r["ozet"]) + NL
    s += "  kaynak:%s" % js(r["kaynak"])
    kr = r.get("kronoloji") or []
    if kr:
        s += "," + NL + "  kronoloji:[" + NL + ("," + NL).join(map(kron_sat, kr)) + NL + "  ]"
    return s + NL + "}"


def devletler(m):
    j = "global.window={};eval(require('fs').readFileSync(0,'utf8'));console.log(JSON.stringify(window.DEVLETLER))"
    r = subprocess.run(["node", "-e", j], input=m, capture_output=True, text=True, encoding="utf-8")
    if r.returncode:
        raise SystemExit("devletler.js yüklenemedi: " + r.stderr[:400])
    return {d["id"]: d for d in json.loads(r.stdout)}


def boyalar():
    r = io.open(os.path.join(KOK, "arac", "renkler.py"), encoding="utf-8").read()
    return set(re.findall(r'^\s*"([^"]+)"\s*:', r, re.M))


BOLGE_SOZLUK = set("""anadolu balkanlar orta-avrupa bati-avrupa kuzey-avrupa dogu-avrupa italya iberya
kafkasya iran mezopotamya suriye-filistin arabistan kuzey-afrika misir-sudan dogu-afrika bati-afrika
orta-afrika guney-afrika orta-asya guney-asya dogu-asya guneydogu-asya sibirya-bozkir kuzey-amerika
orta-amerika guney-amerika okyanusya""".split())


def main():
    kaynak = sys.argv[1]
    kuru = "--kuru" in sys.argv
    J = json.load(io.open(kaynak, encoding="utf-8"))
    kay = J.get("kayitlar") or J.get("kunyeler") or []
    _b = re.search(r"ONCE1281-(.+)-KUNYE", kaynak) or re.search(r"([^\\/]+?)(?:-KUNYE)?\.json$", kaynak)
    bolge_adi = _b.group(1)
    m = io.open(YOL, encoding="utf-8", newline="").read()
    E = devletler(m)
    BOYA = boyalar()
    BOLGE = BOLGE_SOZLUK | {d.get("bolge") for d in E.values() if d.get("bolge")}
    kabul, red, boya, uyari, dokunmadim = [], [], [], [], []
    yeniler = []

    for r in kay:
        kid, isl = r.get("id"), r.get("islem")
        def reddet(sebep):
            red.append({"id": kid, "islem": isl, "sebep": sebep})
        if isl == "dokunmadim":
            dokunmadim.append(kid)
            # Koordinatör hükmü M-5577 (b): ternate'nin geleneği ic_not_f'a YAZILIR, f DEĞİŞMEZ.
            # Öteki 'dokunmadim' notları doğrulama notudur — veriye taşınmaz, rapora düşer.
            if kid == "ternate-sultanligi" and r.get("ic_not_f") and kid in E:
                a, b = blok(m, kid)
                B = m[a:b + 1]
                kr = B.find("kronoloji:")
                if re.search(r'\bic_not_f:"', B if kr < 0 else B[:kr]):
                    uyari.append("ternate: ic_not_f zaten var — üzerine YAZILMADI")
                else:
                    m = m[:a] + ust_alan_yaz(B, "ic_not_f", r["ic_not_f"]) + m[b + 1:]
                    kabul.append({"id": kid, "islem": "dokunmadim+ic_not_f", "f": E[kid]["f"], "t": E[kid]["t"]})
            elif any(k.startswith("ic_not") and r.get(k) for k in r):
                uyari.append("%s (dokunmadim) notu veriye taşınmadı: %s" % (kid, str(r.get("ic_not") or r.get("ic_not_f") or r.get("ic_not_t"))[:160]))
            if r.get("boya_gerekli"):
                if kid not in E:
                    reddet("dokunmadim ama künye YOK")
                elif (E[kid].get("harita") or kid) in BOYA:
                    uyari.append("%s: boya_gerekli dendi ama BOYALAR'da anahtarı VAR" % kid)
                else:
                    boya.append({"id": kid, "neden": "var olan künye, 1281 öncesi boyasız", "not": r.get("not", "")})
            continue
        if kid == "ternate-sultanligi" and isl != "dokunmadim":
            reddet("KOORDİNATÖR REDDİ: ternate f 1281 KALIR ('gelenek' akademik kaynak değil)")
            continue
        if isl == "yeni":
            eksik = [k for k in ZORUNLU if k not in r]
            if eksik:
                reddet("① şema eksik: " + ",".join(eksik)); continue
            if kid in E or any(y["id"] == kid for y in yeniler):
                reddet("② id ZATEN VAR — 'yeni' olamaz"); continue
            if not (isinstance(r["f"], str) and isinstance(r["t"], str) and TARIH.match(r["f"]) and TARIH.match(r["t"])):
                reddet("③ tarih biçimi: f=%s t=%s" % (r["f"], r["t"])); continue
            if pad(r["f"]) >= pad(r["t"]):
                reddet("③ pencere f>=t (sıfır/ters): %s → %s" % (r["f"], r["t"])); continue
            if r["bolge"] not in BOLGE:
                reddet("① bolge sözlük dışı: %r" % r["bolge"]); continue
            if kid == "srivijaya" and not re.search(r"(?i)eşik|esik", r.get("ic_not_t", "")):
                reddet("KOORDİNATÖR ŞARTI: srivijaya ic_not_t 'eşik; kesin yıkılış yılı kaynakta YOK' beyanı yok"); continue
            h = r.get("harita")
            if h and h not in BOYA:
                uyari.append("%s: harita:%s BOYALAR'da YOK → harita yazılmadı, boya listesine" % (kid, h))
                r = dict(r, harita=None)
                h = None
            if not h:
                boya.append({"id": kid, "neden": "yeni künye", "not": ""})
            # ④ aynı boya anahtarını paylaşan künyeyle zaman örtüşmesi
            if h:
                for d in E.values():
                    if d.get("harita") == h and d.get("f") and d.get("t") and pad(d["f"]) < pad(r["t"]) and pad(r["f"]) < pad(d["t"]):
                        uyari.append("④ %s harita:%s, %s (%s→%s) ile örtüşüyor" % (kid, h, d["id"], d["f"], d["t"]))
            yeniler.append(r)
            kabul.append({"id": kid, "islem": "yeni", "f": r["f"], "t": r["t"]})
            continue
        if isl == "genislet":
            if kid not in E:
                reddet("② genislet ama künye YOK"); continue
            e = E[kid]
            yf, yt = r.get("f"), r.get("t")
            # mevcut değerin AYNEN yeniden gönderilmesi değişiklik değildir (AVRUPA t'yi tekrarlıyor)
            if yf == e.get("f"):
                yf = None
            if yt == e.get("t"):
                yt = None
            if not yf and not yt:
                reddet("① genislet: ne f ne t verilmiş"); continue
            if yf and not (isinstance(yf, str) and TARIH.match(yf)) or yt and not (isinstance(yt, str) and TARIH.match(yt)):
                reddet("③ tarih biçimi"); continue
            if yf and pad(yf) >= pad(e["f"]):
                reddet("④ genislet f GERİ çekmiyor: %s ≥ mevcut %s (kısaltma bu yoldan yapılmaz)" % (yf, e["f"])); continue
            if yt and pad(yt) <= pad(e["t"]):
                reddet("④ genislet t İLERİ gitmiyor: %s ≤ mevcut %s" % (yt, e["t"])); continue
            if r.get("f_eski") and r["f_eski"] != e["f"]:
                reddet("② f_eski %s ≠ devletler.js %s (öneri bayat)" % (r["f_eski"], e["f"])); continue
            if yf and not r.get("ic_not_f"):
                reddet("① genislet f: ic_not_f (gerekçe) yok"); continue
            if kid == "zimbabve-kralligi" and not re.search(r"(?i)aral[ıi]k\s+uc", r.get("ic_not_f", "")):
                reddet("KOORDİNATÖR ŞARTI: zimbabve ic_not_f 'aralık UCU, kuruluş ölçümü DEĞİL' beyanı yok"); continue
            yf2, yt2 = yf or e["f"], yt or e["t"]
            # ④ ardıl/öncül: aynı boya anahtarlı ya da aynı adlı başka künye yeni kuşakla örtüşüyor mu
            h = e.get("harita") or kid
            for d in E.values():
                if d["id"] == kid or not (d.get("f") and d.get("t")):
                    continue
                if (d.get("harita") or d["id"]) == h and pad(d["f"]) < pad(yt2) and pad(yf2) < pad(d["t"]):
                    uyari.append("④ %s genişleyince aynı boya anahtarlı %s (%s→%s) ile örtüşüyor" % (kid, d["id"], d["f"], d["t"]))
            if (e.get("harita") or kid) not in BOYA:
                boya.append({"id": kid, "neden": "genişletilen künye boyasız", "not": ""})
            a, b = blok(m, kid)
            B = m[a:b + 1]
            if yf:
                B = re.sub(r'(\{\s*id:"%s"[^{}]*?\bf:)"[^"]*"' % re.escape(kid), lambda x: x.group(1) + js(yf), B, count=1)
            if yt:
                kr = B.find("kronoloji:")
                ust, alt = (B, "") if kr < 0 else (B[:kr], B[kr:])
                ust = re.sub(r'\bt:"[^"]*"', "t:" + js(yt), ust, count=1)
                B = ust + alt
            for k, v in r.items():
                if k.startswith("ic_not") and v:
                    B = ust_alan_yaz(B, k, v)
            B = kron_ekle(B, r.get("kronoloji") or [])
            m = m[:a] + B + m[b + 1:]
            kabul.append({"id": kid, "islem": "genislet", "f": e["f"] + "→" + yf2, "t": e["t"] + "→" + yt2})
            continue
        reddet("① islem tanınmıyor: %r" % isl)

    if yeniler:
        son = m.rstrip().rfind("];")
        onu = m[:son].rstrip()
        if not onu.endswith(","):
            onu += ","
        m = (onu + NL + "// ── ONCE1281-%s (birleştiren KUNYE-1945-0930, 30 Eylül 2026) ──" % bolge_adi + NL
             + ("," + NL).join(yeni_blok(r) for r in yeniler) + NL + m[son:])

    rapor = {"kaynak": kaynak, "okunan": len(kay), "kabul": kabul, "red": red,
             "dokunmadim": dokunmadim, "boya_gerekli": boya, "uyari": uyari}
    print("%s · okunan %d · kabul %d (yeni %d · genislet %d) · red %d · dokunmadim %d · boya %d · uyarı %d" % (
        bolge_adi, len(kay), len(kabul), len(yeniler), len(kabul) - len(yeniler), len(red), len(dokunmadim), len(boya), len(uyari)))
    for x in red:
        print("  RED", x["id"], "—", x["sebep"])
    for u in uyari:
        print("  UYARI", u)
    if kuru:
        print("KURU — yazılmadı")
        return
    gecici = YOL + ".birlestir.tmp.js"
    io.open(gecici, "w", encoding="utf-8", newline="").write(m)
    c = subprocess.run(["node", "--check", gecici], capture_output=True, text=True)
    if c.returncode:
        os.remove(gecici)
        raise SystemExit("⑥ node --check KIRIK — devletler.js'e YAZILMADI:\n" + c.stderr[:800])
    E2 = devletler(m)
    os.replace(gecici, YOL)
    print("⑥ node --check: TEMİZ (yazmadan ÖNCE sınandı)")
    print("künye", len(E), "->", len(E2))
    rapor["kunye"] = [len(E), len(E2)]
    io.open(os.path.join(KOK, "denetim", "KUNYE-1945-0930-BIRLESTIR-%s.json" % bolge_adi), "w",
            encoding="utf-8").write(json.dumps(rapor, ensure_ascii=False, indent=1))


if __name__ == "__main__":
    main()
