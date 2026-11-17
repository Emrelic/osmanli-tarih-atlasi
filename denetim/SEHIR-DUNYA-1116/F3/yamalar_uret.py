# -*- coding: utf-8 -*-
"""yamalar.json üretici (LAB, 17 Kasım 2026): COZUM-osm2.tsv, COZUM-k12k3.tsv ve UYGULAMA-LISTESI (osm 0-24 + LAB) çözümlerinden yama kayıtları üretir.
Girdi: F3/dump_osm_25_62.txt, dump_k12.txt, dump_k3.txt (aday blokları: kron dosya/t/b, şehir t/b), COZUM-*.tsv (karar, yeni_t, yeni_gun, kesinlik_yeni), statik osm 0-24 listesi.
Çıktı: F3/yamalar.json (uygula_yamalar.py girdisi). Salt okur: data dosyalarına yazmaz; yalnız şehir kimliğini hangi şehir dosyasında olduğunu bulmak için data/sehir_tarihce_*.js'i okur."""
import csv, glob, io, json, os, re, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
D = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.abspath(os.path.join(D, "..", "..", ".."))
Y = []
GOR = set()
def ekle(y):
    anahtar = (y["tur"], y["dosya"], json.dumps(y["anahtar"], ensure_ascii=False, sort_keys=True))
    if anahtar in GOR: return
    GOR.add(anahtar); Y.append(y)
def b_oneki(b):
    b = b.strip()
    s = b[:48]
    if len(b) > 48 and " " in s: s = s[:s.rfind(" ")]
    return s
# --- şehir id → dosya
SEHIR_DOSYA = {}
for f in glob.glob(os.path.join(KOK, "data", "sehir_tarihce_*.js")):
    t = open(f, encoding="utf-8").read()
    for m in re.finditer(r'"id":\s*"([^"]+)"', t):
        SEHIR_DOSYA.setdefault(m.group(1), "data/" + os.path.basename(f))
# --- dump ayrıştırma
def dump_oku(yol, onek):
    bl = {}
    cur = None
    for s in open(yol, encoding="utf-8").read().split("\n"):
        m = re.match(r"#(\d+) (\S+) \| fark (-?\d+) gün", s)
        if m:
            cur = int(m.group(1)); bl[cur] = {"id": m.group(2)}; continue
        if cur is None: continue
        m = re.match(r"\s+ŞEHİR\s+t=(\S+) gun=(.*?) kes=(.*?) b=(.*)$", s)
        if m: bl[cur]["s_t"], bl[cur]["s_gun"], bl[cur]["s_kes"], bl[cur]["s_b"] = m.group(1), m.group(2), m.group(3), m.group(4)
        m = re.match(r"\s+KRON\s+t=(\S+) gun=(.*?) kes=(.*?) dosya=(\S+) b=(.*)$", s)
        if m: bl[cur]["k_t"], bl[cur]["k_gun"], bl[cur]["k_kes"], bl[cur]["k_dosya"], bl[cur]["k_b"] = m.group(1), m.group(2), m.group(3), m.group(4), m.group(5)
    return bl
DUMP = {"osm": dump_oku(os.path.join(D, "dump_osm_25_62.txt"), "osm"), "k12": dump_oku(os.path.join(D, "dump_k12.txt"), "k12"), "k3": dump_oku(os.path.join(D, "dump_k3.txt"), "k3")}
def kron_yama(blok, yeni_t, kaynak, gerekce, kimlik, kes_yeni=""):
    if "k_t" not in blok: return
    ch = []
    if yeni_t and yeni_t != blok["k_t"]: ch.append({"alan": "t", "eski": blok["k_t"], "yeni": yeni_t})
    kes = blok["k_kes"].strip().strip('"')
    if kes_yeni and kes and kes != kes_yeni and not ch:
        ch.append({"alan": "kesinlik", "eski": kes, "yeni": kes_yeni})
    if not ch: return
    ekle({"id": kimlik, "tur": "kronoloji", "dosya": "data/" + blok["k_dosya"], "anahtar": {"b_oneki": b_oneki(blok["k_b"]), "t_eski": blok["k_t"]}, "degisiklik": ch, "kaynak": kaynak, "tanik": "", "gerekce": gerekce})
def sehir_yama(blok, cid, yeni_t, yeni_gun, kes_yeni, kaynak, gerekce, kimlik):
    if cid not in SEHIR_DOSYA or "s_t" not in blok: return
    ch = []
    if yeni_t and yeni_t != blok["s_t"]: ch.append({"alan": "t", "eski": blok["s_t"], "yeni": yeni_t})
    g = yeni_gun
    mh = re.match(r"^(\d+)\s*H\s*∩", g or "")
    if mh:
        my0 = re.match(r"^-?(\d+)-", yeni_t or "")
        ch.append({"alan": "gun", "eski": None, "yeni": "%s H (%s)" % (mh.group(1), str(int(my0.group(1))) if my0 else "")})
    elif g and not re.search(r"ilk gün|∩|gün Katv|^\d+$", g):
        g2 = re.sub(r"\s*\([^)]*\)\s*$", "", g).strip()
        my = re.match(r"^-?(\d+)-", yeni_t or "")
        yil = str(int(my.group(1))) if my else "0"
        if re.search(r"\d{1,2}\s+\S+\s+\d{3,4}$", g2) or re.search(r"/\s*\d{1,2}\s+\S+\s+\d{3,4}$", g2):
            g = g2
        elif re.match(r"^\d{1,2}\s+[^\d\s]+$", g2):
            g = g2 + " " + yil
        else:
            g = yil + " (" + g2 + ")"
        ch.append({"alan": "gun", "eski": None, "yeni": g})
    if kes_yeni and yeni_t and yeni_t != blok["s_t"]: ch.append({"alan": "kesinlik", "eski": None, "yeni": kes_yeni})
    if not ch: return
    ekle({"id": kimlik, "tur": "sehir_olay", "dosya": SEHIR_DOSYA[cid], "anahtar": {"sehir_id": cid, "olay_t": blok["s_t"], "b_oneki": b_oneki(blok["s_b"])}, "degisiklik": ch, "kaynak": kaynak, "tanik": "", "gerekce": gerekce})
def tsv_isle(fn, tur_k, k12k3):
    for x in csv.DictReader(open(os.path.join(D, fn), encoding="utf-8"), delimiter="\t"):
        if x["karar"] not in ("kronoloji_duzelt", "sehir_olayi_duzelt") or not x["yeni_t"]: continue
        for tk in [s.strip() for s in x["aday_no"].split(",")]:
            sehir_kismi = tk.endswith("-sehir")
            tk2 = tk.replace("-sehir", "")
            m = re.match(r"(?:(k12|k3)-)?#?(\d+)$", tk2)
            if not m: continue
            kayn = m.group(1) or "osm"; no = int(m.group(2))
            blok = DUMP[kayn].get(no)
            if not blok: continue
            kimlik = "%s-%s#%d" % (fn.split(".")[0].replace("COZUM-", ""), kayn, no)
            if x["karar"] == "kronoloji_duzelt":
                kron_yama(blok, x["yeni_t"], x["kaynak"][:300], x["gerekce"][:300], kimlik, x["kesinlik_yeni"] if x["yeni_t"] == blok.get("k_t") else "")
            else:
                sehir_yama(blok, blok["id"], x["yeni_t"], x["yeni_gun"], x["kesinlik_yeni"], x["kaynak"][:300], x["gerekce"][:300], kimlik)
# --- osm 0-24 + LAB statik listesi (UYGULAMA-LISTESI ile aynı)
STAT_SEHIR = [
 ("acre-akko", "1191-01-01", "III. Haçlı Seferi kuşatması sonunda müdafiler teslim oldu", "1191-07-11", "11 Temmuz 1191", "TDV Haçlılar md. «…11 Temmuz 1191’de … şehri Haçlılar’a teslime mecbur kaldı»"),
 ("aleppo", "1146-06-13", "Zengî'nin ölümü; Halep oğlu Nûreddin Mahmud'a", "1146-09-14", "5 Rebîülâhir 541 / 14 Eylül 1146", "TDV Nûreddin Zengî, Mahmud md. «(5 Rebîülâhir 541 / 14 Eylül 1146)»"),
 ("asyut", "0868-01-01", "Ahmed b. Tolun Mısır'a vali vekili olarak girdi", "0868-09-15", "15 Eylül 868", "TDV Ahmed b. Tolun md. «15 Eylül 868’de Mısır’a gitti» (fiil farkı notlu)"),
 ("banha", "0868-01-01", "Ahmed b. Tolun Mısır'a vali vekili olarak girdi", "0868-09-15", "15 Eylül 868", "aynı"),
 ("damanhur", "0868-01-01", "Ahmed b. Tolun Mısır'a geldi", "0868-09-15", "15 Eylül 868", "aynı"),
 ("baghdad", "1055-12-01", "Tuğrul Bey Bağdat'a girdi", "1055-12-18", "25 Ramazan 447 / 18 Aralık 1055", "TDV Kāim-Biemrillâh md. «Tuğrul Bey 25 Ramazan 447’de (18 Aralık 1055) Bağdat’a girdi»"),
 ("damanhur", "0905-01-01", "Abbâsî ordusu Fustat'a girdi", "0905-01-11", "1 Rebîülevvel 292 / 11 Ocak 905", "TDV Muktefî-Billâh md. «(1 Rebîülevvel 292 / 11 Ocak 905)»"),
 ("damanhur", "1171-09-04", "Selâhaddîn-i Eyyûbî Fâtımî Devleti'ni kaldırdı", "1171-09-13", "10 Muharrem 567 / 13 Eylül 1171", "TDV Eyyûbîler md. «(10 Muharrem 567 / 13 Eylül 1171)»"),
]
for cid, ot, b, yt, yg, kay in STAT_SEHIR:
    if cid in SEHIR_DOSYA:
        ekle({"id": "osm0-24-" + cid + "-" + ot, "tur": "sehir_olay", "dosya": SEHIR_DOSYA[cid], "anahtar": {"sehir_id": cid, "olay_t": ot, "b_oneki": b}, "degisiklik": [{"alan": "t", "eski": ot, "yeni": yt}, {"alan": "gun", "eski": None, "yeni": yg}], "kaynak": kay, "tanik": "", "gerekce": "F3 çözüm: yıl/ay → gün (TDV tam gövde)"})
STAT_KRON = [
 ("kronoloji_cok_once1281_ortadogu.js", "1110-01-01", "Aden Zürey", "1110-07-20", "TDV Zürey‘îler md. «504 (1110)»; 504 H = 1110-07-20…"),
 ("olaylar_ortacag_ortadogu.js", "1146-01-01", "İmâdüddin Zengî Ca", "1146-09-14", "TDV Nûreddin Zengî md. «(5 Rebîülâhir 541 / 14 Eylül 1146)»"),
 ("olaylar_ortacag_ortadogu.js", "1186-01-01", "el-Melikü", "1186-03-24", "TDV Halep md. 582; 582 H = 1186-03-24…"),
 ("kronoloji_cok_once1281_afrika.js", "1184-01-01", "Benî Gāniye Mağrib", "1184-04-14", "TDV Muvahhidler md. «(580/1184)»; 580 H = 1184-04-14…"),
 ("olaylar_t5_1000a.js", "1152-01-01", "Sultan Mesud öldü", "1152-04-08", "TDV Muktefî-Liemrillâh md. «(547/1152)»; 547 H = 1152-04-08…"),
 ("kronoloji_cok_once1281_afrika.js", "1230-01-01", "Ebû Zekeriyyâ Kosantîne", "1230-11-09", "TDV Hafsîler md. «(628/1230-31)»; 628 H = 1230-11-09…"),
 ("kronoloji_sinir_once1281_yerlesim_asya_iran.js", "1175-01-01", "Gurlu Muizzüddin Muhammed Mültan", "1175-07-22", "TDV Mültan md. «571’de (1175-76)»; 571 H = 1175-07-22…"),
 ("kronoloji_cok_once1281_hint_amerika.js", "1228-01-01", "İltutmış Mültan", "1228-11-30", "TDV Mültan md. «626 (1228)»; 626 H = 1228-11-30…"),
 ("kronoloji_sinir_once1281_yerlesim_asya_iran.js", "1228-01-01", "İltutmış Mültan", "1228-11-30", "TDV Mültan md. «626 (1228)»"),
 ("kronoloji_sinir_once1281_yerlesim_asya_iran.js", "1207-01-01", "Buhara Karahıtaylardan", "1207-07-28", "TDV Buhara md. «604 (1207)»; 604 H = 1207-07-28…"),
 ("kronoloji_sinir_dogu_500_1281.js", "0711-01-01", "Kuteybe b. Müslim Semerkant", "0711-10-19", "TDV Semerkant md. «(93/711)»; 93 H = 0711-10-19…"),
 ("kronoloji_cok_once1281_hint_amerika.js", "1018-01-01", "Gazneli Mahmud son önemli", "1018-12-20", "TDV Mahmûd-ı Gaznevî md. «8 Şâban 409’da (20 Aralık 1018)»"),
 ("kronoloji_cok_ms1_1000_ortadogu.js", "0992-01-01", "Karahanlı Hârun Buğra Han Buhara'yı ele geçirdi", "0992-05-07", "TDV Sâmânîler md. «(Rebîülevvel 382 / Mayıs 992)»"),
]
for f, te, b, ty, kay in STAT_KRON:
    ekle({"id": "osm0-24-kron-" + te + "-" + b[:12], "tur": "kronoloji", "dosya": "data/" + f, "anahtar": {"b_oneki": b, "t_eski": te}, "degisiklik": [{"alan": "t", "eski": te, "yeni": ty}], "kaynak": kay, "tanik": "", "gerekce": "F3 çözüm: hicrî yıl kuralı / gün ekleme (CLAUDE.md hicrî kuralı: hicrî yıl ∩ milâdî yıl kesişiminin ilk günü)"})
tsv_isle("COZUM-osm2.tsv", None, False)
tsv_isle("COZUM-k12k3.tsv", None, True)
json.dump(Y, open(os.path.join(D, "yamalar.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
import collections
print(len(Y), "yama:", dict(collections.Counter(y["tur"] for y in Y)))
