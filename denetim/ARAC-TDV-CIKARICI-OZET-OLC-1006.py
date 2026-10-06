# ARAC-TDV-CIKARICI-OZET-OLC-1006 — ALINTI-TARAMA-1006'yı (W30) madde ÖZETİ eklenmiş çıkarıcıyla YENİDEN ÖLÇER.
# SALT OKUR: W30'un sonuç/gövde dosyalarını ve ham HTML önbelleğini okur, ağa ÇIKMAZ (önbellekte olmayan = ÖLÇÜLEMEDİ).
#
# Yöntem: W30'un esle.py + rapor.py mantığı birebir (aynı normalleştirici, aynı parça bölme, aynı benzerlik, aynı
# alt kova sırası). Tek fark: her parça `govde`de YA DA `ozet`te aranır (ARAC-TDV-CIKARICI-1006.alinti_metinleri).
# KONTROL: aynı kod `ozet` boşken koşturulur ve W30'un kovasını BİREBİR yeniden üretmelidir (fark 0) — yoksa
# görülen değişim özetten değil, yeniden uygulamanın kusurundan gelir ve ölçüm GEÇERSİZDİR.
#
# Kullanım: py ARAC-TDV-CIKARICI-OZET-OLC-1006.py --w30 <sonuc3.json+govdeler*.json dizini> --onbellek <tdv-ham>
#           --cikti <önek>      (→ <önek>.tsv + <önek>.json)
import sys, os, re, json, csv, difflib, importlib.util, collections
sys.stdout.reconfigure(encoding="utf-8")
BURA = os.path.dirname(os.path.abspath(__file__))


def yukle(ad, yol):
    sp = importlib.util.spec_from_file_location(ad, yol)
    m = importlib.util.module_from_spec(sp); sp.loader.exec_module(m); return m


cik = yukle("cik", os.path.join(BURA, "ARAC-TDV-CIKARICI-1006.py"))
nrm = yukle("nrm", os.path.join(BURA, "ARAC-NORMAL-0903.py"))


# ---- W30 esle.py'den birebir
def N(s):
    s = nrm.norm(s)
    s = re.sub(r"[^a-z0-9]+", " ", s)
    return " " + re.sub(r"\s+", " ", s).strip() + " "


BOSLUK = re.compile(r" · |\.\.\.|…|\[\s*\.\.\.\s*\]|\[…\]")


def parcalar(q):
    p = [N(x) for x in BOSLUK.split(q)]
    p = [x for x in p if len(x.split()) >= 1]
    return p or [N(q)]


def en_iyi(parca, gov_tok):
    q = parca.split(); n = len(q)
    if n == 0 or not gov_tok: return 0.0, ""
    qs = set(q); ind = [1 if t in qs else 0 for t in gov_tok]
    s = sum(ind[:n]); en = [(s, 0)]
    for i in range(1, len(gov_tok) - n + 1):
        s += ind[i + n - 1] - ind[i - 1]; en.append((s, i))
    en.sort(reverse=True)
    best, bw, qstr = 0.0, "", " ".join(q)
    secilen = []
    for s, i in en:
        if any(abs(i - j) < n for j in secilen): continue
        secilen.append(i)
        for a, b in ((0, 0), (-2, 2), (0, 3), (-3, 0), (1, -1)):
            w = " ".join(gov_tok[max(0, i + a):i + n + b])
            r = difflib.SequenceMatcher(None, qstr, w, autojunk=False).ratio()
            if r > best: best, bw = r, w
        if len(secilen) >= 4: break
    return best, bw


def alt_kova(r, kova, baska):
    """W30 rapor.py sırası: kayma > beyanlı özet > güçlü > zayıf."""
    if kova != "YOK": return kova
    if baska: return "YOK-SLUG-KAYMASI"
    if r.get("ozet_isareti"): return "YOK-BEYANLI-OZET"
    return "YOK-GUCLU-ATIF" if r.get("atif") == "GUCLU" else "YOK-ZAYIF-ATIF"


def main():
    a = sys.argv[1:]
    w30, onb, cikti = (a[a.index(k) + 1] for k in ("--w30", "--onbellek", "--cikti"))
    cik.ONBELLEK = os.path.abspath(onb)
    S = json.load(open(os.path.join(w30, "sonuc3.json"), encoding="utf-8"))
    G = json.load(open(os.path.join(w30, "govdeler.json"), encoding="utf-8"))
    # esle.py koşarken var olan gövde kümesi (slug kayması bu kümede arandı); ortak.py sonradan 225 slug ekledi
    G0 = json.load(open(os.path.join(w30, "govdeler_once_ortak.json"), encoding="utf-8"))
    import hashlib

    def onbellekte(s):
        return os.path.exists(os.path.join(cik.ONBELLEK, hashlib.md5(s.encode()).hexdigest()) + ".kod")

    # ---- özetler (önbellekten), gövde özdeşlik kontrolü
    OZ, olculemedi, govde_fark = {}, [], []
    for s, v in G.items():
        if v["sinif"] != "TAM": continue
        if not onbellekte(s): olculemedi.append(s); continue
        m = cik.tam(cik.getir(s)[1])
        oz = [m["ozet"]] if m["ozet"] else []
        if v.get("gonderme"):
            for h in v["gonderme"]:
                if onbellekte(h):
                    mh = cik.tam(cik.getir(h)[1])
                    if mh["bolumler"] and mh["ozet"]: oz.append(mh["ozet"])
                else: olculemedi.append(s + "→" + h)
        elif m["govde"] != v["govde"]:
            govde_fark.append(s)
        OZ[s] = " ⟂ ".join(oz)      # ayrı cümleler; N() ⟂'yi boşluk yapar, ama parça aramasında ayrı tutulur ↓
    print(f"özet: TAM {sum(1 for v in G.values() if v['sinif'] == 'TAM')} · çıkarılan {len(OZ)} · boş"
          f" {sum(1 for x in OZ.values() if not x)} · önbellekte yok {len(olculemedi)} · gövde W30'dan farklı {len(govde_fark)}")
    NOZ = {s: [N(x) for x in o.split(" ⟂ ")] if o else [] for s, o in OZ.items()}
    NG = {s: N(v["govde"]) for s, v in G.items() if v["sinif"] == "TAM"}
    TOK = {}

    def olc(r, ozetli):
        sl = r["slug"]; gv = NG[sl]; oz = NOZ.get(sl, []) if ozetli else []
        pp = parcalar(r["alinti"])
        yer = []
        for p in pp:
            if p in gv: yer.append("GOVDE")
            elif any(p in o for o in oz): yer.append("OZET")
            else: yer.append(None)
        if all(yer):
            return dict(kova="BIREBIR", benzerlik=1.0, yer="GOVDE" if all(y == "GOVDE" for y in yer) else "OZET")
        if sl not in TOK: TOK[sl] = gv.split()
        tops = topl = 0.0
        for p, y in zip(pp, yer):
            if y: sc = 1.0
            else:
                sc, _ = en_iyi(p, TOK[sl])
                for o in oz: sc = max(sc, en_iyi(p, o.split())[0])
            L = len(p); tops += sc * L; topl += L
        sc = tops / topl if topl else 0.0
        if sc >= 0.85: return dict(kova="YAKIN", benzerlik=round(sc, 3), yer="")
        return dict(kova="YOK", benzerlik=round(sc, 3), yer="")

    def baska_ozetle(r):
        """YALNIZ özet sayesinde doğan yeni kayma adayları: bütün parçalar o maddede (gövde ∪ özet) VE en az bir
        parça yalnız özette. (W30 `baska_maddede`yi ilk 5 adayla kesmişti; gövde-içi adayları yeniden saymak o
        kesimi 'değişim' gibi gösterirdi — bu yüzden yalnız özet kaynaklı aday eklenir.)"""
        pp = parcalar(r["alinti"]); out = []
        for s in G0:
            if s == r["slug"] or s not in NG: continue
            oz = NOZ.get(s, [])
            if not oz: continue
            ic = [p in NG[s] for p in pp]
            if all(ic): continue
            if all(g or any(p in o for o in oz) for p, g in zip(pp, ic)): out.append(s)
        return out

    hedef = [r for r in S if r["kova"] in ("BIREBIR", "YAKIN", "YOK")]
    kontrol_fark, degisen = [], []
    for i, r in enumerate(hedef):
        e = olc(r, False)
        if e["kova"] != r["kova"]:
            kontrol_fark.append((r["dosya"], r["satir"], r["slug"], r["kova"], e["kova"])); continue
        y = olc(r, True)
        # kayma: W30'un kendi değeri (gövdede) korunur; özet yalnız YENİ aday ekleyebilir
        eski_b = [x for x in (r.get("baska_maddede") or "").split(",") if x]
        yeni_b = eski_b + [x for x in baska_ozetle(r) if x not in eski_b] if y["kova"] == "YOK" else eski_b
        yk = alt_kova(r, y["kova"], yeni_b if y["kova"] == "YOK" else [])
        if yk != r["alt_kova"] or (y["kova"] == "YOK" and set(yeni_b) != set(eski_b)):
            degisen.append(dict(dosya=r["dosya"], kayit_satir=r.get("kayit_satir"), satir=r["satir"], slug=r["slug"],
                                kisa=r["kisa"], atif=r.get("atif"), eski=r["alt_kova"], yeni=yk, yer=y.get("yer", ""),
                                eski_benzerlik=r.get("benzerlik"), yeni_benzerlik=y["benzerlik"],
                                eski_baska=",".join(eski_b), yeni_baska=",".join(yeni_b) if y["kova"] == "YOK" else "",
                                ozet=OZ.get(r["slug"], ""), alinti=r["alinti"]))
        if i % 1000 == 0: print(" ", i, "/", len(hedef), flush=True)
    print(f"KONTROL (özetsiz yeniden üretim): {len(hedef)} satır · W30'dan farklı {len(kontrol_fark)}")
    for k in kontrol_fark[:15]: print("   ✗", k)
    json.dump(dict(degisen=degisen, kontrol_fark=kontrol_fark, olculemedi=olculemedi, govde_fark=govde_fark),
              open(cikti + ".json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    KOL = ["eski", "yeni", "yer", "dosya", "kayit_satir", "satir", "slug", "kisa", "atif", "eski_benzerlik",
           "yeni_benzerlik", "eski_baska", "yeni_baska", "alinti", "ozet"]
    with open(cikti + ".tsv", "w", encoding="utf-8", newline="") as f:
        f.write("\t".join(KOL) + "\n")
        for d in sorted(degisen, key=lambda d: (d["eski"], d["yeni"], d["dosya"], d["satir"])):
            f.write("\t".join(re.sub(r"[\t\r\n]+", " ", str(d.get(k, ""))) for k in KOL) + "\n")
    # ---- özet sayılar
    for ad, f_ in (("CÜMLE", lambda d: not d["kisa"]), ("KISA", lambda d: d["kisa"])):
        c = collections.Counter((d["eski"], d["yeni"]) for d in degisen if f_(d))
        print(ad, "değişen:", sum(c.values()), dict(c))
    C = [r for r in S if not r["kisa"] and r["kova"] in ("BIREBIR", "YAKIN", "YOK") and r.get("atif") == "GUCLU"]
    dg = {(d["dosya"], d["satir"], d["alinti"]): d for d in degisen}
    once = collections.Counter(r["alt_kova"] for r in C)
    sonra = collections.Counter(dg.get((r["dosya"], r["satir"], r["alinti"]), {}).get("yeni", r["alt_kova"]) for r in C)
    print("GÜÇLÜ ATIFLI ölçülebilen cümle", len(C), "\n  önce", dict(once), "\n  sonra", dict(sonra))
    print(f"  YOK-GUCLU oranı: {once['YOK-GUCLU-ATIF']}/{len(C)} = {once['YOK-GUCLU-ATIF'] / len(C) * 100:.2f}% → "
          f"{sonra['YOK-GUCLU-ATIF']}/{len(C)} = {sonra['YOK-GUCLU-ATIF'] / len(C) * 100:.2f}%")
    return 2 if (kontrol_fark or govde_fark) else 0


if __name__ == "__main__":
    sys.exit(main())
