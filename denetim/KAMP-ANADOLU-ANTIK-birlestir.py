# K3 KAMP-ANADOLU-ANTIK — dört okuyucu raporunu TEK biçime indirger (POLITY · KRONOLOJI · TABI).
# Okuyucuların serbest metinli tip alanları (① ② ③, "≤-859", "ÖLÇÜLEMEDİ (ÜST ≤ -717)") ölçülebilir kolonlara
# ayrıştırılır; ÖZGÜN METİN SİLİNMEZ, `tip_gerekce_*` kolonunda kalır.
# Kullanım: py denetim/KAMP-ANADOLU-ANTIK-birlestir.py <scratchpad>
import csv, io, os, re, sys, collections
sys.stdout.reconfigure(encoding="utf-8")
SP = sys.argv[1]
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(KOK, "denetim", "KAMP-ANADOLU-ANTIK-")
OKUYUCU = {"k3_neohitit": "A-neohitit", "k3_urartu": "B-urartu", "k3_hitit": "C-hitit", "k3_bati": "D-bati"}

def bloklar(f):
    t = open(os.path.join(SP, f + ".md"), encoding="utf-8").read()
    out = {}
    for b in re.findall(r"```(?:csv)?\n(.*?)```", t, re.S):
        R = list(csv.DictReader(io.StringIO(b)))
        if not R: continue
        k = "pol" if "kimlik_onerisi" in R[0] else "kro" if "harita_degisimi" in R[0] else "tabi" if "vasal" in R[0] else None
        if k: out[k] = R
    return out

TARIH = re.compile(r"(-\d{3,4}-\d{2}-\d{2})")
def tip(deger, gerekce, ekmetin=""):
    """(tarih|None, tur, yon) — tur ∈ OLAY|SALTANAT|DONEM|YOK; yon ∈ ÜST|ALT|''."""
    d, g = (deger or "").strip(), (gerekce or "").strip()
    m = TARIH.search(d)
    tarih = m.group(1) if m else None
    # YÖN: o YILIN hemen önündeki işaret (≤ ÜST · ≥ ALT), metnin herhangi bir yerindeki işaret DEĞİL.
    # (İlk sürüm metinde "≤" görünce ÜST diyordu; urartu t "≥-646 … ≤-486" ÜST okundu — aralığın yanlış ucu.)
    yon = ""
    if tarih:
        yil = tarih[1:].split("-")[0].lstrip("0")
        for metin in (d, g, ekmetin):
            s = re.search(r"([≤≥])\s*-?0*" + yil + r"\b", metin)
            if s: yon = "ÜST" if s.group(1) == "≤" else "ALT"; break
        if not yon:
            s = re.findall(r"\b(ÜST|ALT)\b", g)
            if s: yon = s[-1]
    bas = g[:3]
    if g in ("OLAY", "SALTANAT", "DONEM", "YOK"): tur = g
    elif "①" in bas or g.startswith("OLAY"): tur = "OLAY"
    elif "②" in bas or g.startswith("SALTANAT") or g.startswith("ALT ①"): tur = "SALTANAT"
    elif "③" in bas or g.startswith("DONEM"): tur = "DONEM"
    elif tarih and yon: tur = "SALTANAT"
    else: tur = "YOK"
    if tur == "OLAY" and yon: tur = "SALTANAT"         # ① olay ama SINIR olarak kullanılmış ⇒ ② (yön beyanlı)
    if not tarih and tur in ("OLAY", "SALTANAT"): tur = "YOK"
    if tur in ("DONEM", "YOK"): tarih = None
    return tarih, tur, yon

HD = lambda h: ("EVET" if re.match(r"(?i)(evet|devi̇r|devir)", h) else
                "EVET (v: kanıtı)" if h.startswith("v:") else
                "AKIN" if h.upper().startswith("AKIN") else
                "HARAÇ-ÖLÇÜLEMEDİ" if h.startswith("HARAÇ") else
                "SINIR" if h.upper().startswith("SINIR") else
                "ÖLÇÜLEMEDİ" if re.match(r"(?i)(belirsiz|ölçülemedi|ÖLÇÜLEMEDİ|muṣaṣir)", h) else
                "HAYIR")
def kro_tur(t, tarih):
    if not TARIH.match(tarih or ""): return "YOK"
    if t in ("OLAY", "SALTANAT", "DONEM"): return t
    return "OLAY" if "①" in t[:3] or t.startswith("OLAY") else "SALTANAT" if "②" in t[:3] or t.startswith("SALTANAT") else "DONEM" if "③" in t[:3] else "SALTANAT"

POL, KRO, TABI = [], [], []
sayac = collections.Counter()
for f, ok in OKUYUCU.items():
    B = bloklar(f)
    for p in B["pol"]:
        tf, turf, yf = tip(p["f"], p["tarih_turu_f"], p["not"]); tt, turt, yt = tip(p["t"], p["tarih_turu_t"], p["not"])
        # Kural 2+7: "ilk anılış" f'si yön yazılmamışsa ÜST'tür (en geç o zaman vardı) — okuyucu A yön yazmamıştı
        if turf == "SALTANAT" and not yf and re.search(r"(?i)(ilk anılış|first attest|first mention|ilk tanık)", p["tarih_turu_f"] + p["not"]): yf = "ÜST"
        POL.append({"kimlik_onerisi": p["kimlik_onerisi"], "ad": p["ad"], "tur": p["tur"],
                    "f": tf or ("ÖLÇÜLEMEDİ" if turf != "YOK" or "ÖLÇÜLEMEDİ" in p["f"] else "bulunamadı"),
                    "t": tt or ("ÖLÇÜLEMEDİ" if turt != "YOK" or "ÖLÇÜLEMEDİ" in p["t"] else "bulunamadı"),
                    "tarih_turu_f": turf, "tarih_turu_t": turt, "sinir_yonu_f": yf if turf == "SALTANAT" else "", "sinir_yonu_t": yt if turt == "SALTANAT" else "",
                    "merkez": p["merkez"], "oncul": p["oncul"], "ardil": p["ardil"], "kaynak": p["kaynak"], "kesinlik": p["kesinlik"],
                    "not": p["not"], "tip_gerekce_f": p["f"] + " || " + p["tarih_turu_f"], "tip_gerekce_t": p["t"] + " || " + p["tarih_turu_t"],
                    "okuyucu": ok})
        sayac[f"uc:{turf}"] += 1; sayac[f"uc:{turt}"] += 1
    for k in B["kro"]:
        h = HD(k["harita_degisimi"])
        KRO.append({"tarih": TARIH.search(k["tarih"]).group(1) if TARIH.search(k["tarih"]) else k["tarih"], "kesinlik": k["kesinlik"], "polity": k["polity"],
                    "baslik": k["baslik"], "metin": k["metin"], "yer": k["yer"], "kaynak": k["kaynak"], "harita_degisimi": h,
                    "harita_degisimi_ozgun": k["harita_degisimi"], "tarih_turu": kro_tur(k["tarih_turu"], TARIH.search(k["tarih"]).group(1) if TARIH.search(k["tarih"]) else ""),
                    "tarih_turu_ozgun": k["tarih_turu"], "tarih_ozgun": k["tarih"], "okuyucu": ok})
        sayac[f"kro:{h}"] += 1
    for v in B.get("tabi", []):
        TABI.append(dict(v, okuyucu=ok))

# ── her polity için EN AZ doğuş + yıkılış maddesi (§5 ②) — yoksa POLITY'den türetilir, TÜRETİLDİĞİ yazılır
var = collections.defaultdict(set)
for k in KRO:
    b = k["baslik"].lower()
    if "doğuş" in b or "kuruluş" in b or "ilk anılış" in b: var[k["polity"]].add("f")
    if "yıkılış" in b or "son" in b.split() or "ilhak" in b or "eyalet" in b: var[k["polity"]].add("t")
tur_ = 0
for p in POL:
    for u, ad in (("f", "doğuş"), ("t", "yıkılış / son")):
        if u in var[p["kimlik_onerisi"]]: continue
        tar = p[u]; tt = p["tarih_turu_" + u]
        KRO.append({"tarih": tar, "kesinlik": p["kesinlik"], "polity": p["kimlik_onerisi"], "baslik": f"{p['ad']} — {ad}",
                    "metin": f"POLITY {u} ucundan TÜRETİLDİ (birleştirici): {p['tip_gerekce_' + u][:400]}",
                    "yer": p["merkez"], "kaynak": p["kaynak"][:600],
                    "harita_degisimi": "EVET" if tt == "OLAY" else ("SINIR (kırılma günü değil)" if tt == "SALTANAT" else "HAYIR (tarih ÖLÇÜLEMEDİ)"),
                    "harita_degisimi_ozgun": "", "tarih_turu": tt, "tarih_turu_ozgun": "", "tarih_ozgun": "", "okuyucu": "birlestirici"})
        tur_ += 1

def yaz(ad, R):
    cols = list(R[0].keys())
    with open(OUT + ad + ".csv", "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=cols); w.writeheader(); [w.writerow(r) for r in R]
yaz("POLITY", POL); yaz("KRONOLOJI", KRO); yaz("TABI", TABI)
# mükerrer kimlik
c = collections.Counter(p["kimlik_onerisi"] for p in POL)
print("POLITY", len(POL), "· mükerrer kimlik", [k for k, v in c.items() if v > 1])
print("uç tipleri", {k: v for k, v in sayac.items() if k.startswith("uc:")})
print("KRONOLOJİ", len(KRO), "(türetilen doğuş/yıkılış", tur_, ")", dict(collections.Counter(k["harita_degisimi"].split(" (")[0] for k in KRO)),
      dict(collections.Counter(k["tarih_turu"] for k in KRO)))
print("TABİ", len(TABI))
# yazılabilirlik ön bakışı: iki uç da tarihli VE f < t
ters = [(p["kimlik_onerisi"], p["f"], p["t"]) for p in POL if TARIH.match(p["f"]) and TARIH.match(p["t"]) and int(p["f"][1:].split("-")[0]) <= int(p["t"][1:].split("-")[0])]
print("f ≥ t (ters ya da sıfır) künye:", ters)
