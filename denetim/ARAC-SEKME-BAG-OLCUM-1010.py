# -*- coding: utf-8 -*-
"""ARAC-SEKME-BAG-OLCUM-1010.py — SEKME-BAG-OLCUM-1010 (UMIT, yalnız ÖLÇÜM).

Kullanım:
    py ARAC-SEKME-BAG-OLCUM-1010.py --kok <origin/main worktree> --ara <ara dizin>
                                    [--md <yol> --json <yol>]

① `odak_olc.etiket_kaynak()` + `girdi.ufuk_devirleri()` ile odak_olc.olc()'un
   AYNI girdisini kurar (odak_olc'un kendi işlevleri çağrılır).
② `ARAC-SEKME-BAG-OLCUM-1010.js` → `arac/odak_cozum.js`in GERÇEK işlevleri
   (sekmeDali/veriDisi/devletiYaySessiz) ile madde madde döküm.
③ Pencere ölçümü `arac/gun.py` `gun()` ile (MÖ ve 3 haneli yıl güvenli);
   app.js `kronoGun` ile ÇAPRAZ sınanır — uyuşmazlık basılır.
Hiçbir proje dosyasına YAZMAZ. Hüküm VERMEZ.
"""
import io
import json
import os
import re
import subprocess
import sys
from collections import Counter, defaultdict

BURA = os.path.dirname(os.path.abspath(__file__))


def arg(ad, vars_=None):
    if ad in sys.argv:
        return sys.argv[sys.argv.index(ad) + 1]
    return vars_


KOK = os.path.abspath(arg("--kok"))
ARA = os.path.abspath(arg("--ara"))
MD = arg("--md", os.path.join(BURA, "SEKME-BAG-OLCUM-1010.md"))
JS_OUT = arg("--json", os.path.join(BURA, "SEKME-BAG-OLCUM-1010.json"))
os.makedirs(ARA, exist_ok=True)
sys.path.insert(0, os.path.join(KOK, "arac"))
import odak_olc  # noqa: E402  (girdi + paket_coz'u da ithal eder; uret_petek DEĞİL)
import girdi  # noqa: E402
import gun as GUN  # noqa: E402

assert "uret_petek" not in sys.modules, "uret_petek ithal edildi — YASAK"

# ---- ① girdi ---------------------------------------------------------------
G = {"kok": KOK.replace("\\", "/"), "etiket_kaynak": odak_olc.etiket_kaynak(),
     "disk": odak_olc.disk_dosyalari(), "yay_dogrula": False,
     "devirler": [list(x) for x in girdi.ufuk_devirleri()],
     "cikti": os.path.join(ARA, "dokum.json").replace("\\", "/")}
gyol = os.path.join(ARA, "girdi.json")
io.open(gyol, "w", encoding="utf-8").write(json.dumps(G, ensure_ascii=False))
r = subprocess.run(["node", os.path.join(BURA, "ARAC-SEKME-BAG-OLCUM-1010.js"), gyol],
                   capture_output=True, text=True, encoding="utf-8", errors="replace")
if r.returncode != 0:
    print("ÖLÇÜLEMEDİ: node çıkış", r.returncode, r.stdout[:300], r.stderr[:300])
    sys.exit(2)
D = json.load(io.open(G["cikti"], encoding="utf-8"))


def gn(s):
    try:
        return GUN.gun(str(s))
    except Exception:  # noqa: BLE001
        m = re.match(r"^(-?\d+)(?:-(\d\d))?(?:-(\d\d))?", str(s or ""))
        if not m:
            return None
        try:
            return GUN.gun("%s-%s-%s" % (m.group(1), m.group(2) or "01", m.group(3) or "01"))
        except Exception:  # noqa: BLE001
            return None


KUN = D["kunyeler"]
# künye penceresi gun.py ile
KG = {}
for kid, k in KUN.items():
    KG[kid] = (gn(k["f"]), gn(k["t"]))

TAV = json.load(io.open(os.path.join(KOK, "denetim", "ODAK-TAVAN.json"), encoding="utf-8"))
TAVAN_SS = {(x["k"], x["kunye"]) for x in TAV.get("sekme_sessiz_kimlik") or []}
D["baslangic_s"] = "%04d-%02d-%02d" % (D["baslangic_t"]["y"], D["baslangic_t"]["a"], D["baslangic_t"]["g"])
D["bitis_s"] = "%04d-%02d-%02d" % (D["bitis_t"]["y"], D["bitis_t"]["a"], D["bitis_t"]["g"])


def tasidigi(m):
    t = []
    if m["yer_id"]:
        t.append("yer_id" + ("" if m["yer_id_cozulur"] else "(ÇÖZÜLMÜYOR)"))
    if m["yer_kon"]:
        t.append("yer_kon")
    for a in ("odak_yer", "odak_kimlik", "odak_kutu_kaynak"):
        if m[a]:
            t.append(a)
    if m["kapsam_genis"] is False:
        t.append("kapsam_genis:false")
    elif m["kapsam_genis"] is None:
        t.append("kapsam_genis:YOK")
    return t


capraz = []        # gun.py ↔ kronoGun uyuşmazlığı (pencere hükmünde)
KURTARAN = ("SEKME_NOKTA", "SEKME_KIPIRDAMAZ", "SEKME_KUTU")


def kurtarici_adi(m, s):
    dal = s["dal"]
    kg = "kapsam_genis:false" if m["kapsam_genis"] is False else "kapsam_genis:YOK"
    if dal == "SEKME_NOKTA":
        return "hedefYer(yer_id%s)" % ("+yer_kon" if m["yer_kon"] else "")
    if dal == "SEKME_KIPIRDAMAZ":
        return kg
    if dal == "SEKME_OKUNMAYAN" and s.get("alt", "").startswith("kipirdamaz"):
        return kg + " [okunmayan " + s["alt"].split("_", 1)[1] + "]"
    if dal == "SEKME_KUTU":
        al = [a for a in ("odak_yer", "odak_kimlik", "odak_kutu_kaynak") if m[a]]
        return "maddeOdakKutusu(%s)" % ("+".join(al) or "?")
    return None


def kova(m, s):
    """Pencere dışı bir (madde, künye) çiftinin bugünkü sonucu."""
    dal = s["dal"]
    if dal in KURTARAN:
        return "KURTULUYOR"
    if dal == "SEKME_SESSIZ" or (dal == "SEKME_OKUNMAYAN" and s.get("govde") == "SEKME_SESSIZ"):
        return "SESSIZ"
    if dal == "SEKME_VERI_DISI":
        return "VERI_DISI"
    if dal == "SEKME_OKUNMAYAN" and s.get("alt", "").startswith("kipirdamaz"):
        return "KURTULUYOR"           # kapsam_genis:false — okunmayan odak var, kamera yine kıpırdamaz
    if dal in ("SEKME_GOVDE", "SEKME_TABI_KUTU") or (
            dal == "SEKME_OKUNMAYAN" and s.get("govde") in ("SEKME_GOVDE", "SEKME_TABI_KUTU")):
        return "YARININ_KUSURU"
    return "BASKA:" + dal


# ---- ② dosya dosya ---------------------------------------------------------
yuklu = [os.path.basename(k) for k in D["yuklenen_kronoloji"]]
dosyaM = defaultdict(list)
for m in D["maddeler"]:
    dosyaM[m["dosya"]].append(m)


def baslik(dosya):
    yol = os.path.join(KOK, "data", dosya)
    if not os.path.isfile(yol):
        return None, []
    sat = io.open(yol, encoding="utf-8", errors="replace").read().splitlines()[:60]
    ilk = next((s.strip() for s in sat if s.strip().startswith("//") and "coding" not in s
                and re.search(r"[A-Za-zÇĞİÖŞÜçğıöşü]{3}", s)), "")
    beyan = []
    for no, s in enumerate(sat, 1):
        if not s.strip().startswith("//"):
            continue
        if re.search(r"B[İI]RLE[ŞS][İI]K|birle[şs]ik|B[ÖO]LGE|[Bb][öo]lge(?:sel)? kronoloji|"
                     r"b[öo]lgenin|b[öo]lge\b", s):
            beyan.append("%d: %s" % (no, s.strip()[:170]))
    return ilk[:170], beyan[:4]


tablo = []
kalemler = []           # pencere dışı her (madde, künye) çifti
for dosya in yuklu:
    ms = dosyaM.get(dosya, [])
    keys = sorted({k for m in ms for k in m["anahtarlar"]})
    bag = []
    for k in keys:
        a = D["anahtar"].get(k, {})
        bag.append({"anahtar": k, "yol": a.get("yol"), "kunye": a.get("kunye"),
                    "adaylar": a.get("adaylar"), "uyelik_dogru": a.get("uyelik_dogru")})
    gunler = [g for g in (gn(m["t"]) for m in ms) if g is not None]
    tarihler = sorted((gn(m["t"]), m["t"]) for m in ms if gn(m["t"]) is not None)
    aralik = (tarihler[0][1], tarihler[-1][1]) if tarihler else (None, None)
    ilk, beyan = baslik(dosya)
    yol_turu = ",".join(sorted({b["yol"] or "?" for b in bag})) or "?"
    satir = {"dosya": dosya, "anahtar": bag, "yol": yol_turu, "madde": len(ms),
             "aralik": aralik, "gunsuz": len(ms) - len(gunler),
             "baslik": ilk, "beyan": beyan, "kunye": None, "pencere": None,
             "disi": 0, "kurtulan": 0, "sessiz": 0, "veri_disi": 0, "yarin": 0, "baska": 0,
             "kurtarici": Counter(), "cift_disi_inmedi": 0, "cift_toplam": 0,
             "kunye_kumesi": Counter(), "sekmede_yok": 0, "olaylar": 0}
    adkun = [b["kunye"] for b in bag if b["yol"] == "AD_SOZLESMESI"]
    if adkun:
        kid = adkun[0]
        satir["kunye"] = kid
        satir["pencere"] = (KUN.get(kid) or {}).get("f"), (KUN.get(kid) or {}).get("t")
        if kid not in KUN:   # hiçbir madde künyeye inmemişse kunyeOz yok
            satir["pencere"] = None
    for m in ms:
        if m["yol"] == "OLAYLAR":
            satir["olaylar"] += 1
        if not m["kunyeler"]:
            satir["sekmede_yok"] += 1
        for e in m["kunyeler"]:
            satir["kunye_kumesi"][e["id"]] += 1
        # Ad sözleşmesi yolu: maddenin AD-künyesindeki penceresi
        if satir["kunye"]:
            e = next((x for x in m["kunyeler"] if x["id"] == satir["kunye"]), None)
            if e is None:
                continue
            ef, et = KG[satir["kunye"]]
            g = gn(m["t"])
            disi_py = g is not None and ef is not None and (g < ef or g > et)
            disi_js = m["kg"] is not None and (m["kg"] < e["kfg"] or m["kg"] > e["ktg"])
            if g is not None and m["kg"] is not None and disi_py != disi_js:
                capraz.append([dosya, m["t"], satir["kunye"], disi_py, disi_js])
            if not disi_py:
                continue
            satir["disi"] += 1
            kv = kova(m, e["sekme"])
            ad = kurtarici_adi(m, e["sekme"])
            if kv == "KURTULUYOR":
                satir["kurtulan"] += 1
                satir["kurtarici"][ad or "?"] += 1
            elif kv == "SESSIZ":
                satir["sessiz"] += 1
            elif kv == "VERI_DISI":
                satir["veri_disi"] += 1
            elif kv == "YARININ_KUSURU":
                satir["yarin"] += 1
            else:
                satir["baska"] += 1
            # harita: alanı etkisi
            s = e["sekme"]
            kalemler.append({
                "dosya": dosya, "kunye": satir["kunye"], "t": m["t"], "b": m["b"],
                "yon": "once" if g < ef else "sonra", "kova": kv, "kurtarici": ad,
                "dal": s["dal"], "alt": s.get("alt"), "govde": s.get("govde"),
                "neden": s.get("neden"), "devir": s.get("devir"),
                "yay_id": s.get("yay_id"), "yay_harita": s.get("yay_harita"),
                "kapsam_genis": m["kapsam_genis"], "yer_id": m["yer_id"],
                "yer_id_cozulur": m["yer_id_cozulur"], "yer_kon": m["yer_kon"],
                "odak_yer": m["odak_yer"], "odak_kimlik": m["odak_kimlik"],
                "odak_kutu_kaynak": m["odak_kutu_kaynak"],
                "k": m["k"], "ilk_kunye": m["ilk_kunye"], "tasidigi": tasidigi(m),
                "tavanda": (m["k"], m["ilk_kunye"]) in TAVAN_SS,
                "kirpik": ("<BASLANGIC" if g < GUN.gun(D["baslangic_s"]) else
                           ">BITIS" if g > GUN.gun(D["bitis_s"]) else None)})
        else:
            # çok taraflı / bağsız-çok-yolu: taraf penceresi app.js'te zaten sınanır
            for tid in (m["taraflar"] or []):
                satir["cift_toplam"] += 1
                if not any(x["id"] == tid for x in m["kunyeler"]):
                    satir["cift_disi_inmedi"] += 1
    tablo.append(satir)

# kalemlere "pencere dışı ama künye gövdesi o gün VAR" sebebini ekle: BASLANGIC kıstırması
B, BT = D["baslangic"], D["bitis"]
for k in kalemler:
    pass

tablo.sort(key=lambda s: (-(s["yarin"] + s["sessiz"]), -s["disi"], s["dosya"]))

# ---- ③ harita: etkisi -------------------------------------------------------
harita_kurtaran = Counter()
harita_bozan = Counter()
for m in D["maddeler"]:
    for e in m["kunyeler"]:
        s = e["sekme"]
        kd = KUN.get(e["id"]) or {}
        if not kd.get("harita") or kd["harita"] == kd["id"]:
            continue
        govdeye = s["dal"] in ("SEKME_GOVDE", "SEKME_TABI_KUTU", "SEKME_SESSIZ") or (
            s["dal"] == "SEKME_OKUNMAYAN" and s.get("govde"))
        if not govdeye:
            continue
        if s.get("yay_harita") is None and s.get("yay_id") is not None:
            harita_kurtaran[(m["dosya"], e["id"], kd["harita"])] += 1
        if s.get("yay_harita") is not None and s.get("yay_id") is None:
            harita_bozan[(m["dosya"], e["id"], kd["harita"])] += 1

# ---- iran ayrıntı ------------------------------------------------------------
iran = [k for k in kalemler if k["dosya"] == "kronoloji_iran.js"]
iran_madde = len(dosyaM.get("kronoloji_iran.js", []))

# ---- yapısal yollar (yalnız SAYI) ------------------------------------------
ad_dosya = [s for s in tablo if s["kunye"]]
disi_dosya = [s for s in ad_dosya if s["disi"]]
beyanli_dosya = [s for s in tablo if s["beyan"]]
beyanli_disi = [s for s in disi_dosya if s["beyan"]]
bagsiz = [s for s in tablo if "BAGSIZ" in s["yol"]]

OUT = {
    "gorev": "SEKME-BAG-OLCUM-1010", "kok": KOK,
    "baslangic": D["baslangic_t"], "bitis": D["bitis_t"], "devirler": D["devirler"],
    "dh_var": D["dh_var"], "yuklenen_kronoloji_dosya": len(yuklu),
    "app_sonrasi": D["app_sonrasi"], "yuk_uyari": D["yuk_uyari"],
    "disk_yuklenmeyen": sorted(set(D["disk"]) - set(yuklu)),
    "gun_py_kronoGun_capraz_uyusmazlik": capraz,
    "tablo": [dict(s, kurtarici=dict(s["kurtarici"]), kunye_kumesi=len(s["kunye_kumesi"]))
              for s in tablo],
    "kalemler": kalemler,
    "harita_alanli_kunye": D["harita_alanli"],
    "harita_kurtaran": [list(k) + [v] for k, v in sorted(harita_kurtaran.items())],
    "harita_bozan": [list(k) + [v] for k, v in sorted(harita_bozan.items())],
    "id_ozel": D["id_ozel"], "cok_yolu": D["cok_yolu"],
    "bagla_log": D["bagla_log"],
    "yapisal": {"ad_sozlesmeli_dosya": len(ad_dosya),
                "pencere_disi_maddeli_dosya": len(disi_dosya),
                "pencere_disi_madde": sum(s["disi"] for s in disi_dosya),
                "baslikta_bolge_birlesik_beyanli": len(beyanli_dosya),
                "beyanli_ve_pencere_disi": len(beyanli_disi),
                "bagsiz_dosya": len(bagsiz)},
}
io.open(JS_OUT, "w", encoding="utf-8").write(json.dumps(OUT, ensure_ascii=False, indent=1))
print(json.dumps(OUT["yapisal"], ensure_ascii=False))
print("capraz", len(capraz), "kalem", len(kalemler), "iran_kalem", len(iran), "iran_madde", iran_madde)
print("kova", Counter(k["kova"] for k in kalemler))

# ---- yarının kusuru: gövdeyi KİM sağlıyor (paylaşılan harita anahtarı) -------
PAY = D.get("harita_paylasim") or {}
for k in kalemler:
    if k["kova"] != "YARININ_KUSURU":
        continue
    kd = KUN.get(k["kunye"]) or {}
    key = kd.get("harita") or kd.get("id")
    g = gn(k["t"])
    sag = []
    for x in (PAY.get(key) or {}).get("kunyeler", []):
        if x["id"] == k["kunye"]:
            continue
        xf, xt = gn(x["f"]), gn(x["t"])
        if xf is not None and xt is not None and xf <= g <= xt:
            sag.append(x["id"])
    k["govde_anahtari"] = key
    k["govdeyi_saglayan_kunye"] = sag
OUT["harita_paylasim"] = PAY
io.open(JS_OUT, "w", encoding="utf-8").write(json.dumps(OUT, ensure_ascii=False, indent=1))


# ---- MD -----------------------------------------------------------------------
def kz(c):
    return " · ".join("%s %d" % (a, n) for a, n in sorted(c.items(), key=lambda x: -x[1])) or "—"


def hc(x, n=70):
    return str(x or "")[:n].replace("|", "/")


L = []
w = L.append
sha = subprocess.run(["git", "-C", KOK, "rev-parse", "HEAD"], capture_output=True, text=True).stdout.strip()
w("# SEKME-BAG-OLCUM-1010 — kronoloji dosyası ↔ künye AD SÖZLEŞMESİ bağının ölçümü")
w("")
w("UMIT · yalnız ÖLÇÜM ve LİSTE · düzeltme/diff YOK · **hüküm YOK**.")
w("")
w("- Taban: `%s` (origin/main, ayrı worktree `--detach`)" % sha)
w("- Araç: `denetim/ARAC-SEKME-BAG-OLCUM-1010.py` → `ARAC-SEKME-BAG-OLCUM-1010.js` → "
  "`arac/odak_cozum.js`in KENDİSİ (son satırı ek blokla değiştirilip aynı kapsamda koşar; "
  "`sekmeDali` · `veriDisi` · `devletiYaySessiz` · `olayKonumu` · `maddeOdakKutusu` · "
  "app.js `kronoGun` GERÇEK işlevler). Girdi `odak_olc.etiket_kaynak()` + `girdi.ufuk_devirleri()` "
  "(odak_olc.olc() ile aynı).")
w("- Pencere: `arac/gun.py gun()` (MÖ/3 haneli güvenli) · app.js `kronoGun` ile çapraz: "
  "**%d uyuşmazlık**." % len(capraz))
w("- Atlas penceresi (kesilen `BASLANGIC/BITIS`): %s → %s · devirler %s · DEVLET_HARITA evrende: %s"
  % (D["baslangic_s"], D["bitis_s"], D["devirler"], D["dh_var"]))
w("- index.html'in app.js'ten önce yüklediği kronoloji/olay kaynak dosyası: **%d** "
  "(diskte olup yüklenmeyen: %d) · app.js sonrası kronoloji: %d · yük uyarısı: %s"
  % (len(yuklu), len(OUT["disk_yuklenmeyen"]),
     len([x for x in D["app_sonrasi"] if "kronoloji_" in x or "olaylar" in x]), D["yuk_uyari"]))
w("")
w("Kova tanımı (pencere DIŞI her madde × ad-künyesi çifti, bugünkü `sekmeDali` sonucu):")
w("- **KURTULUYOR** = SEKME_NOKTA (hedefYer: `yer_id` AD_KONUM'da çözülüyor; `yer_kon` YALNIZ yer_id varsa "
  "okunur) · SEKME_KUTU (`maddeOdakKutusu` HAM madde ile) · SEKME_KIPIRDAMAZ (`!m.kapsam_genis` — alan YOK ya "
  "da false; odak/yer_kon yazılı ama okunmayan alt dal dâhil, adıyla ayrılır)")
w("- **SESSİZ** = SEKME_SESSIZ (ya da OKUNMAYAN alt dalının gövde sonucu SESSIZ)")
w("- **YARININ KUSURU** = hiçbir kurtarıcı ETKİLİ değil (`kapsam_genis:true`, nokta/kutu yok) ama "
  "`devletiYay(d.harita||d.id)` o gün bir gövde BULUYOR (SEKME_GOVDE / TABI_KUTU) — künye penceresi dışında")
w("")

# ① iran
ki = KUN["iran"]
w("## ① `kronoloji_iran.js` — künye `iran` [%s, %s]" % (ki["f"], ki["t"]))
ik = [k for k in kalemler if k["dosya"] == "kronoloji_iran.js"]
it = [s for s in tablo if s["dosya"] == "kronoloji_iran.js"][0]
w("")
w("- Dosyadaki madde: **%d** (aralık %s → %s) · künye penceresi dışında: **%d** (yön: %s)"
  % (iran_madde, it["aralik"][0], it["aralik"][1], len(ik), kz(Counter(k["yon"] for k in ik))))
w("- DEVLET_HARITA'da `iran` kaydı: **%s** · künyede `harita:` alanı: %s · `iran` anahtarını paylaşan başka "
  "künye: %s" % (ki["dh_kaydi"], ki["harita"], "yok" if "iran" not in PAY else PAY["iran"]))
c = Counter(k["kova"] for k in ik)
w("- KURTULUYOR **%d** · SESSİZ **%d** · YARININ KUSURU **%d**"
  % (c["KURTULUYOR"], c["SESSIZ"], c["YARININ_KUSURU"]))
w("- Kurtaran dal: %s" % kz(Counter(k["kurtarici"] for k in ik if k["kova"] == "KURTULUYOR")))
w("")
w("SESSİZ kalemler (neden = `devletiYaySessiz`; `tavanda` = `ODAK-TAVAN.json` `sekme_sessiz_kimlik`te "
  "(kimlik, ilk künye) çifti var mı):")
w("")
w("| t | b | neden | taşıdığı | tavanda |")
w("|---|---|---|---|---|")
for k in sorted([k for k in ik if k["kova"] == "SESSIZ"], key=lambda x: x["t"]):
    w("| %s | %s | %s | %s | %s |" % (k["t"], hc(k["b"]), k["neden"],
                                       ", ".join(k["tasidigi"]) or "—", "evet" if k["tavanda"] else "**HAYIR**"))
w("")
w("KURTULAN kalemler (adıyla, dal):")
w("")
w("| t | b | kurtarıcı | taşıdığı |")
w("|---|---|---|---|")
for k in sorted([k for k in ik if k["kova"] == "KURTULUYOR"], key=lambda x: x["t"]):
    w("| %s | %s | %s | %s |" % (k["t"], hc(k["b"]), k["kurtarici"], ", ".join(k["tasidigi"]) or "—"))
w("")
w("YARININ KUSURU (iran): **%d** — `iran` için DEVLET_HARITA kaydı olmadığından gövde dalı her gün "
  "`harita_kaydi_yok` verir; kurtarıcısız her `kapsam_genis:true` madde BUGÜN SESSİZ'dir." % c["YARININ_KUSURU"])
w("")

# ② genel tablo
w("## ② Genel tarama — index.html'in yüklediği BÜTÜN kronoloji_*/olaylar* dosyaları (%d)" % len(yuklu))
w("")
w("Bağ yolu sayımı: %s" % kz(Counter(s["yol"] for s in tablo)))
w("")
w("### ②a AD SÖZLEŞMESİYLE bağlanan dosyalar (`KRONOLOJI_X` ⇒ künye `x`; pencere SINAVI YOK)")
w("")
w("Sıra: (sessiz + yarının kusuru) ↓, pencere dışı ↓.")
w("")
w("| dosya | künye | künye penceresi | madde | madde aralığı | pencere dışı | kurtarıcı (dal) | SESSİZ | "
  "yarının kusuru | başlık |")
w("|---|---|---|---|---|---|---|---|---|---|")
for s in [s for s in tablo if s["yol"] == "AD_SOZLESMESI"]:
    p = s["pencere"] or ("?", "?")
    w("| %s | %s | %s → %s | %d | %s → %s | **%d** | %d (%s) | %d | %d | %s |" % (
        s["dosya"], s["kunye"], p[0], p[1], s["madde"], s["aralik"][0], s["aralik"][1], s["disi"],
        s["kurtulan"], kz(s["kurtarici"]), s["sessiz"], s["yarin"], hc(s["baslik"], 110)))
w("")
w("Toplam: %d dosya · pencere dışı madde %d · KURTULUYOR %d · SESSİZ %d · YARININ KUSURU %d · VERİ-DIŞI %d"
  % (len(ad_dosya), sum(s["disi"] for s in ad_dosya), sum(s["kurtulan"] for s in ad_dosya),
     sum(s["sessiz"] for s in ad_dosya), sum(s["yarin"] for s in ad_dosya),
     sum(s["veri_disi"] for s in ad_dosya)))
w("")
w("SESSİZ kalemlerin TAMAMI (ad-sözleşmeli dosyalar):")
w("")
w("| dosya | t | b | neden | tavanda |")
w("|---|---|---|---|---|")
for k in sorted([k for k in kalemler if k["kova"] == "SESSIZ"], key=lambda x: (x["dosya"], x["t"])):
    w("| %s | %s | %s | %s | %s |" % (k["dosya"], k["t"], hc(k["b"], 60), k["neden"],
                                       "evet" if k["tavanda"] else "**HAYIR**"))
w("")
w("YARININ KUSURU kalemlerinin TAMAMI:")
w("")
w("| dosya | t | b | dal | taşıdığı | gövde anahtarı | o gün o anahtarı taşıyan öteki künye | "
  "sessiz tavanında |")
w("|---|---|---|---|---|---|---|---|")
for k in sorted([k for k in kalemler if k["kova"] == "YARININ_KUSURU"], key=lambda x: (x["dosya"], x["t"])):
    w("| %s | %s | %s | %s%s | %s | %s | %s | %s |" % (
        k["dosya"], k["t"], hc(k["b"], 55), k["dal"], ("/" + k["alt"]) if k.get("alt") else "",
        ", ".join(k["tasidigi"]) or "—", k.get("govde_anahtari"),
        ", ".join(k.get("govdeyi_saglayan_kunye") or []) or "—",
        "evet (tavanda SESSİZ, bugün GÖVDE)" if k["tavanda"] else "hayır"))
w("")
w("### ②b BAĞSIZ dosyalar — ad sözleşmesi künye BULAMADI ⇒ çok taraflı yola (taraf penceresi SINANIR)")
w("")
w("| dosya | aday id | madde | madde aralığı | taraf çifti | inmeyen çift (pencere dışı + künyesiz taraf) | "
  "hiçbir künyeye inmeyen madde | başlık |")
w("|---|---|---|---|---|---|---|---|")
for s in sorted([s for s in tablo if "BAGSIZ" in s["yol"]], key=lambda s: -s["cift_disi_inmedi"]):
    ad = "/".join(s["anahtar"][0]["adaylar"] or []) if s["anahtar"] else "?"
    w("| %s | %s | %d | %s → %s | %d | %d | %d | %s |" % (
        s["dosya"], ad, s["madde"], s["aralik"][0], s["aralik"][1], s["cift_toplam"], s["cift_disi_inmedi"],
        s["sekmede_yok"], hc(s["baslik"], 110)))
w("")
w("### ②c `KRONOLOJI_SINIR_*` / `KRONOLOJI_COK_*` (önekle çok taraflı; künye bağı ad ile DEĞİL `taraflar[]` ile)")
w("")
ck = [s for s in tablo if s["yol"] == "COK_TARAFLI_onek"]
w("%d dosya · %d madde · taraf çifti %d · inmeyen çift %d · hiçbir künyeye inmeyen madde %d. "
  "Yalnız inmeyen çifti ya da inmeyen maddesi olanlar:" % (
      len(ck), sum(s["madde"] for s in ck), sum(s["cift_toplam"] for s in ck),
      sum(s["cift_disi_inmedi"] for s in ck), sum(s["sekmede_yok"] for s in ck)))
w("")
w("| dosya | madde | madde aralığı | taraf çifti | inmeyen çift | hiç inmeyen madde |")
w("|---|---|---|---|---|---|")
for s in sorted(ck, key=lambda s: (-s["cift_disi_inmedi"], -s["sekmede_yok"])):
    if s["cift_disi_inmedi"] or s["sekmede_yok"]:
        w("| %s | %d | %s → %s | %d | %d | %d |" % (s["dosya"], s["madde"], s["aralik"][0], s["aralik"][1],
                                                    s["cift_toplam"], s["cift_disi_inmedi"], s["sekmede_yok"]))
w("")
w("📌 Bu kovada pencere dışı çift **SESSİZ değildir, İNMEZ** (app.js `cokTarafliKronolojiEkle` pencere "
  "sınavı) — o künyenin sekmesinde hiç görünmez. Ad sözleşmesi yolunda (②a) böyle bir sınav YOK.")
w("")
ol = [s for s in tablo if s["yol"].startswith("OLAYLAR") or s["yol"] == "?"]
w("### ②d `olaylar*` (%d dosya, %d madde) — Osmanlı olay listesi yolu, künye sekmesi DEĞİL; ad bağı yok"
  % (len(ol), sum(s["madde"] for s in ol)))
w("")
w("Yüklenen ama KRONOLOJI_/OLAYLAR dizisine madde koymayan dosya: %s"
  % (", ".join(s["dosya"] for s in ol if s["madde"] == 0) or "—"))
w("")

# ③
w("## ③ Ad sözleşmesinin kodu ve `harita:` yönlendirmesi")
w("")
w("- Bağ: `js/app.js` `KRONOLOJI_ID_OZEL` (15314) · `derinKronolojiBindir` (15345-15414): aday = "
  "`KRONOLOJI_ID_OZEL[anahtar] || anahtar.slice(10).toLowerCase()` (15361), `_` varsa ikinci aday `-`li "
  "(15362); `KRONOLOJI_(SINIR|COK)_` öneki atlanır (15350); bulunamazsa `KRONOLOJI_COK_YOLU`na (15399). "
  "Künye bulunursa `D[i].kronoloji = derin (+ temsil edilmeyen künye maddeleri)` — **tarih penceresi "
  "sorulmaz**.")
w("- `cokTarafliKronolojiEkle` (15429-15482): taraf künyesinin [f,t] dışı çift İNMEZ (pencere sınavı "
  "yalnız burada).")
w("- `arac/denetle_kronoloji.py:147`: `beklenen = \"KRONOLOJI_\" + f[10:-3].upper()` — dosya adı ⇒ "
  "değişken adı zorunlu (ad değişirse künye bağı da değişir).")
w("- `KRONOLOJI_ID_OZEL` bugün: `%s` (boş ⇒ istisna eşlemesi hiç kullanılmıyor; ezme yolu VAR ama boş)."
  % json.dumps(D["id_ozel"]))
w("- Sekme kamerası (`odak_cozum.js` `govdeSonucu`, app.js `maddeAc`): gövde dalında "
  "`devletiYay(d.harita || d.id)` — künyede `harita:` varsa gövde ONUNLA aranır ve künyenin KENDİ [f,t]'si "
  "değil, o anahtarın DEVLET_HARITA dönemleri sorulur.")
w("- `harita:` alanı id'den FARKLI künye: **%d**. Aynı DEVLET_HARITA anahtarını (harita‖id) paylaşan künye "
  "grubu: **%d**." % (len(D["harita_alanli"]), len(PAY)))
w("")
w("Bugün `harita:` ile KURTULAN (madde × künye) — gövde dalına inen çiftte `d.id` ile gövde YOK, "
  "`d.harita` ile VAR:")
w("")
w("| dosya | künye | harita | çift |")
w("|---|---|---|---|")
for a in OUT["harita_kurtaran"]:
    w("| %s | %s | %s | %d |" % tuple(a))
w("")
w("Toplam %d çift, %d dosya." % (sum(a[3] for a in OUT["harita_kurtaran"]),
                                 len({a[0] for a in OUT["harita_kurtaran"]})))
w("")
w("Ters yön — `harita:` ile gövde BULUNAMAYAN ama `d.id` ile bulunacak (gövde dalına inen) çift:")
w("")
w("| dosya | künye | harita | çift |")
w("|---|---|---|---|")
for a in OUT["harita_bozan"]:
    w("| %s | %s | %s | %d |" % tuple(a))
w("")
w("Ad-sözleşmeli dosyaların künyelerinden PAYLAŞILAN anahtarlı olanlar (başka künyenin gövdesi bu sekmeye "
  "düşebilir):")
w("")
for s in ad_dosya:
    kd = KUN.get(s["kunye"]) or {}
    key = kd.get("harita") or kd.get("id")
    if key in PAY:
        w("- `%s` → künye `%s` → anahtar `%s` (DH kaydı %s) · paylaşan: %s" % (
            s["dosya"], s["kunye"], key, PAY[key]["dh"],
            ", ".join("%s[%s→%s]" % (x["id"], x["f"], x["t"]) for x in PAY[key]["kunyeler"])))
w("")

# yapısal
w("## Üç yapısal yol — YALNIZ etkilenen dosya sayısı (seçim YOK)")
w("")
Y = OUT["yapisal"]
bir = [s for s in ad_dosya if re.search(r"BİRLEŞİK|ülke ölçekli", s["baslik"] or "")]
w("| yol | etkilenen | ölçüt |")
w("|---|---|---|")
w("| ① `sekme:` alanını tanımla (VERI-YAPISI.md'de bugün YOK) | %d dosya · %d madde | ad-sözleşmeli ve künye "
  "penceresi dışında maddesi olan |" % (Y["pencere_disi_maddeli_dosya"], Y["pencere_disi_madde"]))
w("| ② bölge kronolojisine ayrı `bolge:` bağı | %d ad-sözleşmeli dosya (başlığı BİRLEŞİK / ülke ölçekli: %s) "
  "· ayrıca %d bağsız dosya bugün çok taraflı yolda | başlık satırı, adıyla aşağıda |"
  % (len(bir), ", ".join(s["dosya"] for s in bir) or "—", len(bagsiz)))
w("| ③ yeniden adlandır | %d dosya (maddelerinin TAMAMI pencere dışı) · %d dosya (yarıdan fazlası) · %d (en "
  "az biri) | ad-künye penceresi |" % (
      len([s for s in ad_dosya if s["madde"] and s["disi"] == s["madde"]]),
      len([s for s in ad_dosya if s["madde"] and s["disi"] * 2 > s["madde"]]), len(disi_dosya)))
w("")
w("Başlık satırları (ad-sözleşmeli + bağsız; ilk anlamlı yorum satırı):")
w("")
for s in tablo:
    if s["yol"] in ("AD_SOZLESMESI", "BAGSIZ_COK_YOLUNA"):
        w("- `%s` (%s): %s" % (s["dosya"], s["yol"], hc(s["baslik"], 170) or "—"))
w("")
io.open(MD, "w", encoding="utf-8").write("\n".join(L) + "\n")
print("MD", MD)
