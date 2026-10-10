# KAMP-MEZOPOTAMYA → YAZIMA HAZIR ÇIKTI + ÖN DENETİM (5 soru)
# Girdi: denetim/KAMP-MEZOPOTAMYA-*.csv · Çıktı: denetim/KAMP-MEZOPOTAMYA-YAZIM-*.json
# data/*.js'e YAZMAZ. Mevcut veriyi girdi.yukle() / girdi.oku_devletler() ile OKUR.
import csv, io, json, os, re, sys, unicodedata, collections
sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
D = os.path.join(KOK, "denetim", "KAMP-MEZOPOTAMYA")
oku = lambda s: list(csv.DictReader(open(D + s, encoding="utf-8")))
AYLAR = ["", "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]

# ── MÖ TARİH: tarihî "-2334-01-01" (MÖ 2334) → astronomik "-2333-01-01" (VERI-YAPISI §MÖ) ──
TARIH = re.compile(r"^-(\d{1,4})-(\d{2})-(\d{2})$")
def astro(s):
    m = TARIH.match(s or "")
    if not m: return None
    n, ay, gun = int(m.group(1)), m.group(2), m.group(3)
    return "-%04d-%s-%s" % (n - 1, ay, gun), n, int(ay), int(gun)
def gun_metni(s, kes):
    a = astro(s)
    if not a: return None
    _, n, ay, gun = a
    if kes in ("gun",) and not (ay == 1 and gun == 1): return f"{gun} {AYLAR[ay]} MÖ {n}"
    if kes in ("onyil", "on_yil", "yuzyil", "belirsiz"): return f"~MÖ {n}"
    return f"MÖ {n}"
def kes_norm(k):
    k = (k or "").strip()
    return {"on_yil": "onyil", "onyil": "onyil", "yuzyil": "yuzyil", "yil": "yil", "gun": "gun", "ay": "ay"}.get(k)
# kesinlik "gun (f) / yil (t)" gibi karma → nesne
def kes_kunye(k):
    m = re.match(r"(\w+) \(f\) / (\w+) \(t\)", k or "")
    if m:
        f, t = kes_norm(m.group(1)), kes_norm(m.group(2))
        return {"f": f, "t": t} if f and t and f != t else (f or t)
    return kes_norm(k)

POL = oku("-POLITY.csv"); KRO = oku("-KRONOLOJI.csv"); SEH = oku("-SEHIR.csv"); SUZ = oku("-SUZEREN.csv")
YAZILIR_TUR = {"OLAY", "SALTANAT"}
TUR = {"krallik": "krallik", "krallık": "krallik", "hanedan": "hanedanlik", "sehir-devleti": "devlet",
       "imparatorluk": "imparatorluk", "Kabile Konfederasyonu": "devlet"}
BOLGE = lambda k: "iran" if k.startswith("elam") else "mezopotamya"

# ── KÜNYE ──
kunye, kunye_disi = [], []
for p in POL:
    k = p["kimlik_onerisi"]
    if p["f"] == "—":
        kunye_disi.append((k, "polity DEĞİL / listeye alınmadı (" + p["ad"][:60] + ")")); continue
    tf, tt = p["tarih_turu_f"], p["tarih_turu_t"]
    if tf not in YAZILIR_TUR or tt not in YAZILIR_TUR or not astro(p["f"]) or not astro(p["t"]):
        kunye_disi.append((k, f"uç YAZILAMAZ: f={p['f'][:14]} ({tf}) · t={p['t'][:14]} ({tt}) — üç saat kuralı: ③/YOK/TARTIŞMALI tarih de sınır da değildir")); continue
    kes = kes_kunye(p["kesinlik"])
    r = {"id": k, "ad": p["ad"] + (" Kabile Konfederasyonu" if p["tur"] == "Kabile Konfederasyonu" and "Konfederasyon" not in p["ad"] else ""),
         "tur": TUR.get(p["tur"], "devlet"), "bolge": BOLGE(k),
         "f": astro(p["f"])[0], "t": astro(p["t"])[0], "kesinlik": kes,
         "baskent": p["merkez"], "kaynak": p["kaynak"],
         "ic_not": ("f: " + tf + " · t: " + tt + " · " + p["not"])[:4000]}
    if p.get("suzeren", "").startswith("YOK") is False and p.get("suzeren"):
        r["_suzeren_ozet"] = p["suzeren"]
    kunye.append(r)
KID = {r["id"] for r in kunye}

# ── v: DİLİMLERİ (künyeye; ÇÜRÜTÜLDÜ olanlar YAZILMAZ ama listelenir) ──
vdil, v_yazilmaz = collections.defaultdict(list), []
def yil_astro(x):
    m = re.match(r"^-(\d{1,4})$", (x or "").strip())
    return "-%04d-01-01" % (int(m.group(1)) - 1) if m else None
for z in SUZ:
    if z["v_tipi"] == "ÇÜRÜTÜLDÜ": v_yazilmaz.append((z["kimlik_onerisi"], "ÇÜRÜTÜLDÜ — yazılmaz, kayıt CSV'de kalır")); continue
    f, t = yil_astro(z["suzeren_f"]), yil_astro(z["suzeren_t"])
    if not f or not t:
        v_yazilmaz.append((z["kimlik_onerisi"], f"uç sayısal değil (f={z['suzeren_f'][:30]} · t={z['suzeren_t'][:30]}) — ②/③ sınır, dilim YAZILMAZ")); continue
    if f == t:  # sıfır uzunluk YASAK (Tebriz) ⇒ 1 YIL
        n = int(t[1:5]); t = "-%04d-01-01" % (n - 1)
    vdil[z["kimlik_onerisi"]].append({"f": f, "t": t, "d": z["suzeren"], "k": z["v_tipi"], "kaynak": z["kaynak"][:300], "ic_not": z["not"][:600]})

# ── YERLEŞİM ──
yer = []
def merkez_esle(ad, merkez):
    # TAM SÖZCÜK eşleşmesi — ilk sürüm alt-dizgi arıyordu ve "Ur"u "Uruk/Asur/Ninurta" içinde buldu
    # (ön denetim ⓒ 4 sahte çakışma üretti; kusur aracın kendisindeydi).
    a = re.split(r"[ (]", ad)[0].lower()
    return bool(a) and a in re.findall(r"[\wçğıöşüâîûḫšṣṭ'ʿ-]+", merkez.lower())
for c in SEH:
    kes = kes_norm(c["kesinlik"]) or "belirsiz"
    r = {"ad": c["ad"], "tur": "sehir", "lat": round(float(c["enlem"]), 4), "lon": round(float(c["boylam"]), 4),
         "g": 1, "k": 0, "kaynak": c["kaynak"], "not": c["not"]}
    ilk = astro(c["ILK_KAYIT_TARIHI"])
    r["_ilk_kayit"] = {"tarih": ilk[0] if ilk else c["ILK_KAYIT_TARIHI"], "gun": gun_metni(c["ILK_KAYIT_TARIHI"], kes), "kesinlik": kes,
                       "arkeolojik_katman": c.get("arkeolojik_katman", ""), "tanik_sayisi": c.get("tanik_sayisi", "")}
    s = []
    for p in kunye:
        if merkez_esle(c["ad"], p["baskent"]):
            s.append({"f": p["f"], "t": p["t"], "d": p["id"], "kaynak": "başkent ilişkisi: KAMP-MEZOPOTAMYA-POLITY.csv merkez=" + p["baskent"][:60]})
    s.sort(key=lambda d: d["f"])
    if s: r["s"] = s
    else: r["bos"] = "veri-yok"
    yer.append(r)

# ── KRONOLOJİ ──
def k_sec(r):
    b, h = r["baslik"], r["harita_degisimi"]
    if b.endswith("— doğuş"): return "kurulus", []
    if "yıkılış" in b: return "siyaset", ["toprak-kayip"]
    if h.startswith("AKIN"): return "sefer", ["savas"]
    if h.startswith("HARAÇ"): return "vassal", ["diplomasi"]
    if "HARAÇ ≠ DEVİR: HARAC-b" in r["metin"]: return "vassal", ["toprak-kazanc"]
    if re.search(r"ayaklan|isyan", b, re.I): return "isyan", ["ayaklanma"]
    if re.search(r"tahta|tahtı|kral oldu|atandı", b): return "taht", ["siyaset"]
    if h == "EVET": return "fetih", ["toprak-kazanc"]
    return "diger", []
olay, olay_disi = [], []
for r in KRO:
    a = astro(r["tarih"])
    if not a: olay_disi.append((r["polity"], r["baslik"][:60], r["tarih"][:20])); continue
    k, et = k_sec(r)
    kes = kes_norm(r["kesinlik"]) or "yil"
    g = gun_metni(r["tarih"], kes)
    if r["harita_degisimi"].startswith("SINIR"): g += " (sınır — olay günü DEĞİL)"
    o = {"t": a[0], "k": k, "etiket": et, "b": r["baslik"], "gun": g, "yer": r["yer"], "d": r["metin"][:1200],
         "kaynak": r["kaynak"][:600], "ic_not_d": f"K1 KAMP-MEZOPOTAMYA · polity={r['polity']} · harita_degisimi={r['harita_degisimi'][:120]} · tarih_turu={r['tarih_turu']} · sahip_dilim={r.get('sahip_dilim','')} · atif_dilim={r.get('atif_dilim','')}"}
    if r.get("kapsam_disi") == "EVET": o["ic_not_d"] += " · KAPSAM DIŞI: öteki dilim ATIF yapar, yeniden yazmaz"
    olay.append(o)
gs = collections.Counter()
for o in sorted(olay, key=lambda o: o["t"]):
    gs[o["t"]] += 1
    if gs[o["t"]] > 1 or sum(1 for x in olay if x["t"] == o["t"]) > 1: o["gs"] = gs[o["t"]] * 10

# ═══ ÖN DENETİM ═══
rapor = collections.OrderedDict()
# ⓐ kaynaksız yerleşim
ka = [r["ad"] for r in yer if not r.get("kaynak") or r["kaynak"].strip() in ("", "—")]
rapor["a_kaynaksiz_yerlesim"] = ka
# ⓑ yakın mükerrer: normalleştirilmiş ad + 3 km (mevcut veriye ve kendi içine karşı)
def norm(s):
    s = unicodedata.normalize("NFKD", s.lower()); s = "".join(ch for ch in s if not unicodedata.combining(ch))
    s = s.replace("ı", "i")
    return [re.sub(r"[^a-z]", "", x) for x in re.split(r"[()/;,]", s) if re.sub(r"[^a-z]", "", x)]
Y = girdi.yukle(sessiz=True)
yak, adesit = [], []
ADLAR = {}
for y in Y:
    for n in norm(y["ad"]): ADLAR.setdefault(n, []).append(y)
for r in yer:
    for y in Y:
        d = girdi.km(r["lat"], r["lon"], y["lat"], y["lon"])
        if d < girdi.YAKINLIK_ESIK_KM: yak.append((r["ad"], y["ad"], round(d, 2), y["_kaynak"]))
    for n in norm(r["ad"]):
        if len(n) >= 4 and n in ADLAR:
            for y in ADLAR[n]: adesit.append((r["ad"], y["ad"], round(girdi.km(r["lat"], r["lon"], y["lat"], y["lon"]), 1), y["_kaynak"]))
ic = [(yer[i]["ad"], yer[j]["ad"], round(girdi.km(yer[i]["lat"], yer[i]["lon"], yer[j]["lat"], yer[j]["lon"]), 2))
      for i in range(len(yer)) for j in range(i + 1, len(yer)) if girdi.km(yer[i]["lat"], yer[i]["lon"], yer[j]["lat"], yer[j]["lon"]) < girdi.YAKINLIK_ESIK_KM]
rapor["b_3km_mevcut"] = yak; rapor["b_ad_esit_mevcut"] = adesit; rapor["b_3km_kendi_ici"] = ic
# ⓒ dönem çakışma / ters / sıfır (kategori içi)
def donem_kontrol(L, ad):
    out = []
    for p in L:
        if p["f"] >= p["t"] if not p["f"].startswith("-") else (int(p["f"][1:5]) <= int(p["t"][1:5])):
            out.append((ad, "TERS ya da SIFIR", p["f"], p["t"], p.get("d")))
    S = sorted(L, key=lambda p: -int(p["f"][1:5]))
    for a, b in zip(S, S[1:]):
        if -int(b["f"][1:5]) < -int(a["t"][1:5]): out.append((ad, "ÇAKIŞMA", a.get("d"), a["f"], a["t"], b.get("d"), b["f"], b["t"]))
    return out
cz = []
for r in yer:
    if r.get("s"): cz += donem_kontrol(r["s"], "yer:" + r["ad"])
for k, L in vdil.items(): cz += donem_kontrol(L, "v:" + k)
for p in kunye: cz += donem_kontrol([{"f": p["f"], "t": p["t"], "d": p["id"]}], "kunye:" + p["id"])
rapor["c_donem"] = cz
# ⓓ Değişmez 2: her kırılmanın ±30 gün içinde bir kronoloji maddesi (yıl hassasiyetinde: AYNI astronomik gün)
from datetime import date
def gun_no(s):
    y = int(s[:5]) if s.startswith("-") else int(s[:4]); m, d = int(s[-5:-3]), int(s[-2:])
    return y * 372 + (m - 1) * 31 + d  # ±30 gün yaklaşık sınama için yeterli monoton sayaç
OT = [gun_no(o["t"]) for o in olay]
def var_mi(t): g = gun_no(t); return any(abs(g - x) <= 30 for x in OT)
kir = []
for p in kunye:
    for u in ("f", "t"): kir.append(("kunye", p["id"], u, p[u]))
# v: — HARİTA kırılması yalnız SUZEREN DEĞİŞTİĞİNDE olur: aynı suzerenin bitişik dilimleri
# (ör. Tiglat-pileser III + Šalmaneser V, ikisi de yeni-asur) haritada TEK renk ⇒ aradaki sınır kırılma değil.
for k, L in vdil.items():
    S = sorted(L, key=lambda p: -int(p["f"][1:5]))
    for i, p in enumerate(S):
        onceki = S[i - 1] if i else None; sonraki = S[i + 1] if i + 1 < len(S) else None
        if not (onceki and onceki["d"] == p["d"] and onceki["t"] == p["f"]): kir.append(("v", k, "f", p["f"]))
        if not (sonraki and sonraki["d"] == p["d"] and sonraki["f"] == p["t"]): kir.append(("v", k, "t", p["t"]))
for r in yer:
    for p in r.get("s", []): kir.append(("yer.s", r["ad"] + "/" + p["d"], "f", p["f"])); kir.append(("yer.s", r["ad"] + "/" + p["d"], "t", p["t"]))
eks = [x for x in kir if not var_mi(x[3])]
rapor["d_kirilma_toplam"] = len(kir); rapor["d_kronolojisiz"] = eks
# ⓔ hayalet kimlik
DV = {d["id"] for d in girdi.oku_devletler()}
kullanilan = set()
for r in yer:
    for p in r.get("s", []): kullanilan.add(p["d"])
for k, L in vdil.items():
    kullanilan.add(k)
    for p in L: kullanilan.add(p["d"])
hay = sorted(x for x in kullanilan if x not in DV and x not in KID)
rapor["e_hayalet"] = hay
rapor["e_devletler_js_de_olan"] = sorted(x for x in kullanilan if x in DV)

# ⓑ sonucu UYGULANIR: 3 km içinde mevcut nokta = AYNI YER ⇒ yeni nokta AÇILMAZ, mevcut noktaya eklenir
YAKIN_AYNI = {}
for a, b, d, dos in yak:
    if d < 1.0: YAKIN_AYNI[a] = (b, d, dos)       # <1 km: aynı höyük/şehir (Arbela=Erbil, Halab=Halep …)
for r in yer:
    if r["ad"] in YAKIN_AYNI:
        b, d, dos = YAKIN_AYNI[r["ad"]]
        r["_yazim"] = f"YENİ NOKTA AÇMA — mevcut '{b}' ({dos}, {d} km) noktasına MÖ alanları EKLENİR (VERI-YAPISI: 3 km içinde ikinci nokta açma)"
    elif any(a == r["ad"] for a, *_ in yak):
        r["_yazim"] = "⚠️ 1–3 km arası mevcut nokta var (" + "; ".join(f"{b} {d} km" for a, b, d, _ in yak if a == r["ad"]) + ") — antik höyük ≠ modern kasaba olabilir; YAZICI/KOORDİNATÖR KARARI"
    else:
        r["_yazim"] = "YENİ NOKTA"
rapor["b_uygulama"] = {r["ad"]: r["_yazim"] for r in yer if r["_yazim"] != "YENİ NOKTA"}

OUT = os.path.join(KOK, "denetim", "KAMP-MEZOPOTAMYA-YAZIM-")
for ad, veri in (("kunye", {"kunye": kunye, "v_dilimleri": vdil, "kunye_disi": kunye_disi, "v_yazilmaz": v_yazilmaz}),
                 ("yerlesim", yer), ("olay", {"olay": olay, "olay_disi": olay_disi}), ("ondenetim", rapor)):
    json.dump(veri, open(OUT + ad + ".json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("KÜNYE yazılabilir", len(kunye), "· yazılamaz", len(kunye_disi), "· v: dilimi", sum(len(v) for v in vdil.values()), "/ yazılmaz", len(v_yazilmaz))
print("YERLEŞİM", len(yer), "· s: taşıyan", sum(1 for r in yer if r.get("s")), "· bos:veri-yok", sum(1 for r in yer if r.get("bos")))
print("OLAY", len(olay), "· yazılamaz", len(olay_disi), "· k:", dict(collections.Counter(o["k"] for o in olay)))
print("ⓐ kaynaksız", len(ka)); print("ⓑ 3km mevcut", len(yak), "· ad eşit mevcut", len(adesit), "· 3km kendi içi", len(ic))
print("ⓒ dönem kusuru", len(cz)); print("ⓓ kırılma", len(kir), "· kronolojisiz", len(eks)); print("ⓔ hayalet", len(hay), hay)
