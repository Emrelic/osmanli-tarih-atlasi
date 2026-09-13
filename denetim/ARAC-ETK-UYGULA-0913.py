# -*- coding: utf-8 -*-
"""PAKET-ETIKET-UYGULA — data/etiket_yama.js 'konu26' + 'afet' önerilerini VERİYE uygular.

py denetim/ARAC-ETK-UYGULA-0913.py MADDELER.json            → KURU koşu: ölç, farkları bas
py denetim/ARAC-ETK-UYGULA-0913.py MADDELER.json --uygula   → data/olaylar*.js + kronoloji*.js
                                                               etiket dizilerine ekle
MADDELER.json = node denetim/ARAC-A3-MADDE-TOPLA-0913.js çıktısı (eval edilmiş GERÇEK değerler).

KURAL KAYNAĞI: data/etiket_yama.js (konu26.tablo · afet.*) — sınıflandırıcı kodu KOPYALANMADI,
   desenler ve değer kümeleri öneri dosyasından OKUNUR. ARAC-A5-ETIKET-0913.py'nin ölçtüğü
   sayılarla (konu26.tablo[].madde · afet.olcum) birebir karşılaştırılır; fark varsa basar.
YAZILAN ETİKETLER (yalnız EKLEME; t/b/d/k/tur DOKUNULMAZ; var olan etiket tekrar yazılmaz):
   konu-<başlık id>   25 başlık (Emre'nin listesi, 0035/H-0066)
   afet               26. başlık "Doğal afetler ve hastalıklar" = üst etiket
   afet-deprem · afet-yangin · afet-sel · afet-salgin · afet-kitlik · afet-volkan-firtina
YAZIM: dosya METİN olarak düzenlenir (yeniden biçimlenmez). Küçük bir JS sözcük çözücüsü
   (dizgi · yorum · şablon farkında) her `etiket:[...]` dizisini sahibi olan nesneye bağlar;
   nesne (dosya, t, b, k, tur, vefat_id, etiket) anahtarıyla eval edilmiş maddeye eşlenir.
   Eşleşmeyen madde varsa YAZMAZ (çıkış 1).
"""
import io, json, re, sys, os, glob, collections

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
DATA = os.path.join(KOK, "data")
UYGULA = "--uygula" in sys.argv

# ── 1. öneri dosyası ────────────────────────────────────────────────
ham = io.open(os.path.join(DATA, "etiket_yama.js"), encoding="utf-8").read()
i = ham.index("window.ETIKET_YAMA =")
YAMA = json.loads(ham[ham.index("{", i): ham.rindex("}") + 1])
K26 = YAMA["konu26"]["tablo"]
AF = YAMA["afet"]
AFET_ALT = [(k, re.compile(v, re.I)) for k, v in AF["alt_etiketler"].items()]
AFET_DEGER = AF["deger_eslemesi"]
AFET_HARIC = AF["haric_okunarak"]
AFET_GOVDE = AF["govde_dahil_okunarak"]
BASLIK = []
for h in K26:
    if h["id"] == "afet":
        BASLIK.append((h["id"], None, None))
        continue
    BASLIK.append((h["id"], set(h["deger_kumesi"]),
                   re.compile(h["baslik_deseni"], re.I) if h["baslik_deseni"] else None))
NORM = YAMA["normalizasyon"]
YENI_ONEK = ("konu-", "afet-")


def ozgun_etiket(o):
    """Sınıflandırıcı girdisi: bu aletin EKLEYECEĞİ etiketler hariç (tekrar koşuda aynı sonuç)."""
    # "afet" üst etiketi dışarıda bırakılmaz: öneride deger_eslemesi afet→null ve hiçbir başlık
    # kümesinde yok, yani sınıflandırmayı etkilemez (ölçüldü: veride önceden 1 madde taşıyor).
    return [e for e in o["etiket"] if not str(e).startswith(YENI_ONEK)]


def afet_etiketleri(o, et):
    out = set()
    tb = o["t"] + "|" + o["b"]
    if not any(tb.startswith(x) for x in AFET_HARIC):
        for ad, rx in AFET_ALT:
            if rx.search(o["b"]):
                out.add(ad)
    for v in [o["k"], o["tur"]] + et:
        if v in AFET_DEGER and AFET_DEGER[v]:
            out.add(AFET_DEGER[v])
    for on, ek in AFET_GOVDE.items():
        if tb.startswith(on):
            out.update(ek)
    return out


def siniflandir(o):
    et = ozgun_etiket(o)
    degerler = set([o["k"], o["tur"]] + et) - {None}
    basliklar = []
    af = afet_etiketleri(o, et)
    for kid, deg, rx in BASLIK:
        if kid == "afet":
            if af:
                basliklar.append(kid)
            continue
        if degerler & deg or (rx and rx.search(o["b"])):
            basliklar.append(kid)
    if o.get("vefat_id") and "kisiler" not in basliklar:
        basliklar.append("kisiler")
    return basliklar, af


def eklenecek(o):
    basliklar, af = siniflandir(o)
    istek = ["konu-" + b for b in basliklar if b != "afet"]
    if af:
        istek += ["afet"] + sorted(af)
    return [e for e in istek if e not in o["etiket"]], basliklar, af


# ── 2. JS sözcük çözücüsü ───────────────────────────────────────────
KACIS = {"n": "\n", "t": "\t", "r": "\r", "b": "\b", "f": "\f", "v": "\v", "0": "\0"}


def js_dizgi(s):
    out, i = [], 0
    while i < len(s):
        c = s[i]
        if c != "\\":
            out.append(c); i += 1; continue
        n = s[i + 1]
        if n in KACIS: out.append(KACIS[n]); i += 2
        elif n == "u" and s[i + 2] == "{":
            j = s.index("}", i); out.append(chr(int(s[i + 3:j], 16))); i = j + 1
        elif n == "u": out.append(chr(int(s[i + 2:i + 6], 16))); i += 6
        elif n == "x": out.append(chr(int(s[i + 2:i + 4], 16))); i += 4
        elif n == "\n": i += 2
        elif n == "\r": i += 3 if s[i + 2:i + 3] == "\n" else 2
        else: out.append(n); i += 2
    return "".join(out)


ALANLAR = ("t", "b", "k", "tur", "vefat_id")


def coz(metin):
    """Döner: nesne listesi {bas, son, alan:{}, et:{bas,son,ogeler:[(bas,son,deger)]}}"""
    L = len(metin); i = 0
    yigin = []           # {tip, bas, alan, et}
    nesneler = []
    son_anahtar = None    # (deger) son dizgi/tanımlayıcı
    bekleyen = None       # ':' sonrası anahtar
    while i < L:
        c = metin[i]
        if c in " \t\r\n":
            i += 1; continue
        if c == "/" and metin.startswith("//", i):
            j = metin.find("\n", i); i = L if j < 0 else j; continue
        if c == "/" and metin.startswith("/*", i):
            i = metin.index("*/", i) + 2; continue
        if c in "\"'`":
            j = i + 1
            while metin[j] != c:
                j += 2 if metin[j] == "\\" else 1
            deger = metin[i + 1:j]
            if c == "`" and "${" in deger:
                deger = None
            else:
                deger = js_dizgi(deger)
            ust = yigin[-1] if yigin else None
            if bekleyen and ust and ust["tip"] == "{" and bekleyen in ALANLAR and deger is not None:
                ust["alan"][bekleyen] = deger
            if ust and ust["tip"] == "[" and ust.get("etiket_dizisi"):
                ust["ogeler"].append((i, j + 1, deger))
            bekleyen = None
            son_anahtar = deger
            i = j + 1; continue
        if c.isalpha() or c in "_$":
            j = i
            while j < L and (metin[j].isalnum() or metin[j] in "_$"):
                j += 1
            son_anahtar = metin[i:j]
            bekleyen = None
            i = j; continue
        if c == ":":
            bekleyen = son_anahtar; son_anahtar = None; i += 1; continue
        if c == "{":
            yigin.append({"tip": "{", "bas": i, "alan": {}, "et": None}); bekleyen = None; i += 1; continue
        if c == "[":
            ust = yigin[-1] if yigin else None
            ed = bool(bekleyen == "etiket" and ust and ust["tip"] == "{")
            yigin.append({"tip": "[", "bas": i, "etiket_dizisi": ed, "ogeler": [], "sahip": ust})
            bekleyen = None; i += 1; continue
        if c == "}":
            fr = yigin.pop(); assert fr["tip"] == "{", ("dengesiz } @", i)
            if isinstance(fr["alan"].get("t"), str) and isinstance(fr["alan"].get("b"), str):
                nesneler.append({"bas": fr["bas"], "son": i + 1, "alan": fr["alan"], "et": fr["et"]})
            bekleyen = None; i += 1; continue
        if c == "]":
            fr = yigin.pop(); assert fr["tip"] == "[", ("dengesiz ] @", i)
            if fr["etiket_dizisi"]:
                fr["sahip"]["et"] = {"bas": fr["bas"], "son": i + 1, "ogeler": fr["ogeler"]}
            bekleyen = None; i += 1; continue
        bekleyen = None if c not in ":" else bekleyen
        son_anahtar = None
        i += 1
    assert not yigin, "dengesiz yığın sonu"
    return nesneler


def ekleme_metni(metin, et, yeni):
    parca = ['"' + e + '"' for e in yeni]
    og = et["ogeler"]
    if not og:
        return et["bas"] + 1, ",".join(parca)
    if len(og) >= 2:
        ara = metin[og[0][1]:og[1][0]]
        ayrac = ara[ara.index(",") + 1:]
    else:
        bosluk = metin[et["bas"] + 1:og[0][0]]
        ayrac = bosluk if "\n" in bosluk else ""
    return og[-1][1], "".join("," + ayrac + p for p in parca)


# ── 3. eşleme + ölçüm ───────────────────────────────────────────────
O = json.load(open(sys.argv[1], encoding="utf-8"))
dosyalar = sorted({o["dosya"] for o in O})
anahtar = lambda d, a, et: (d, a.get("t"), a.get("b"), a.get("k"), a.get("tur"), a.get("vefat_id"), tuple(et))
havuz = collections.defaultdict(list)
metinler, cozum = {}, {}
fazla_nesne = 0
for f in dosyalar:
    yol = os.path.join(DATA, f)
    bayt = open(yol, "rb").read()
    bom = bayt.startswith(b"\xef\xbb\xbf")
    metin = bayt.decode("utf-8-sig")
    metinler[f] = (metin, bom)
    for n in coz(metin):
        et = [x[2] for x in n["et"]["ogeler"]] if n["et"] else []
        havuz[anahtar(f, n["alan"], et)].append(n)
eslesmeyen, etiketsiz = [], []
plan = collections.defaultdict(list)   # dosya → [(pos, metin)]
say_once = collections.Counter(); say_sonra = collections.Counter()
baslik_say = collections.Counter(); afetli = []; bos = []
YENI = ["konu-" + h["id"] for h in K26 if h["id"] != "afet"] + ["afet"] + [k for k, _ in AFET_ALT]
for o in O:
    for e in o["etiket"]:
        if e in YENI: say_once[e] += 1
    o["_afet_ozgun"] = "afet" in o["etiket"]
    liste = havuz.get(anahtar(o["dosya"], {"t": o["t"], "b": o["b"], "k": o["k"], "tur": o["tur"],
                                            "vefat_id": o["vefat_id"]}, o["etiket"]))
    if not liste:
        eslesmeyen.append(o); continue
    n = liste.pop(0)
    yeni, basliklar, af = eklenecek(o)
    for b in basliklar: baslik_say[b] += 1
    if not basliklar: bos.append(o)
    if af: afetli.append((o, sorted(af)))
    for e in set(o["etiket"]) | set(yeni):
        if e in YENI: say_sonra[e] += 1
    if not yeni:
        continue
    if not n["et"]:
        # etiket ALANI yok (ölçüldü: 3 madde, olaylar_ek15.js) → alan nesnenin sonuna eklenir.
        metin = metinler[o["dosya"]][0]
        kapanis = n["son"] - 1                      # '}' konumu
        j = kapanis - 1
        while metin[j] in " \t\r\n": j -= 1
        tirnakli = re.match(r'\{\s*"', metin[n["bas"]:n["bas"] + 20]) is not None
        alan = ('"etiket": ' if tirnakli else "etiket:") + "[" + ",".join('"' + e + '"' for e in yeni) + "]"
        etiketsiz.append((o, yeni))
        plan[o["dosya"]].append((j + 1, ("" if metin[j] == "," else ", ") + alan))
        continue
    plan[o["dosya"]].append(ekleme_metni(metinler[o["dosya"]][0], n["et"], yeni))
fazla_nesne = sum(len(v) for v in havuz.values())

print(f"evren: {len(dosyalar)} dosya · {len(O)} madde · çözücü fazlası (eval'de madde sayılmayan t+b nesnesi) {fazla_nesne}")
print(f"eşleşmeyen madde {len(eslesmeyen)} · etiket dizisi OLMAYAN ve etiket alacak madde {len(etiketsiz)}")
for o in eslesmeyen[:10]: print("   EŞLEŞMEDİ", o["dosya"], o["t"], o["b"][:60])
for o, y in etiketsiz[:10]: print("   ETİKETSİZ", o["dosya"], o["t"], o["b"][:60], y)

print(f"\nKONU26 — en az bir başlık {len(O)-len(bos)} / {len(O)} (öneri: {YAMA['konu26']['olcum']['en_az_bir_baslik']})")
fark = 0
for h in K26:
    ol = baslik_say[h["id"]]
    isaret = "" if ol == h["madde"] else f"   ⚠️ öneri {h['madde']}"
    fark += ol != h["madde"]
    print(f"  {h['ad']:40} {ol:5}{isaret}")
aa = collections.Counter(e for _, es in afetli for e in es)
print(f"\nAFET madde {len(afetli)} (öneri {AF['olcum']['madde']}) · alt {dict(aa)}")
print(f"  öneri alt  {AF['olcum']['alt']}")
fark += len(afetli) != AF["olcum"]["madde"] or dict(aa) != AF["olcum"]["alt"]
# öneri listesi ile madde madde karşılaştırma
oneri = {(m["dosya"], m["t"], m["b"]): sorted(m["etiket_oneri"]) for m in AF["maddeler"]}
bizim = {(o["dosya"], o["t"], o["b"]): e for o, e in afetli}
for k in sorted(set(oneri) | set(bizim)):
    if oneri.get(k) != bizim.get(k):
        fark += 1; print("  AFET FARKI", k, "öneri", oneri.get(k), "bugün", bizim.get(k))

print("\nETİKET SAYIMI (veride)  önce → sonra")
for e in YENI:
    print(f"  {e:24} {say_once[e]:5} → {say_sonra[e]:5}")
print("  toplam eklenecek etiket", sum(len(p[1].split('"')) // 2 for v in plan.values() for p in v),
      "·", sum(len(v) for v in plan.values()), "madde ·", len(plan), "dosya")

# normalizasyon çakışması: yeni etiket, sözlükte BAŞKA bir değere eşleniyor mu / anahtar mı?
cak = [e for e in YENI if e in NORM or e in NORM.values()]
print("normalizasyon çakışması (yeni etiket sözlükte anahtar/değer):", cak or "YOK")

# tuzak sınavı
print("\nTUZAK SINAVI")
sel = [(o["t"], o["b"]) for o, e in afetli if "afet-sel" in e]
selim = [(o["t"], o["b"][:60]) for o in O if re.search(r"Selim", o["b"]) and any(
    x[0] is o for x in afetli if "afet-sel" in x[1])]
print("  afet-sel alanlar:", sel)
print("  'Selim' başlıklı ve afet-sel alan:", len(selim))
cek = [(o["t"], o["b"][:70], e) for o in O for e in [siniflandir(o)[1]] if re.search("[Çç]ekirge", o["b"])]
print("  başlığında 'Çekirge' geçen maddeler ve afet etiketi:", cek)
kus = [(o["t"], o["b"][:70], e) for o, e in afetli if re.search("kuşat|muhasara", o["b"], re.I)]
print("  afet alıp başlığında kuşatma geçen:", kus)
har = [(o["t"], o["b"][:50]) for o in O if any((o["t"] + "|" + o["b"]).startswith(x) for x in AFET_HARIC)]
print("  hariç listesindekiler (afet ALMAMALI):", [(t, b, siniflandir(o)[1]) for o in O for (t, b) in [(o["t"], o["b"][:50])] if (t, b) in har])

with io.open(os.path.join(os.path.dirname(sys.argv[1]), "etk_afet_liste.txt"), "w", encoding="utf-8") as w:
    for o, e in afetli:
        w.write(f"{o['t']}\t{o['kova'][:3]}\t{','.join(e)}\t{o['b']}\n")

if eslesmeyen:
    print("\n✗ eşleşmeyen madde var — YAZILMADI"); sys.exit(1)
if not UYGULA:
    print(f"\nKURU KOŞU — yazılmadı. farklı kalem: {fark}"); sys.exit(0)

for f, ops in plan.items():
    metin, bom = metinler[f]
    for pos, ek in sorted(ops, key=lambda p: -p[0]):
        metin = metin[:pos] + ek + metin[pos:]
    with open(os.path.join(DATA, f), "wb") as w:
        w.write((b"\xef\xbb\xbf" if bom else b"") + metin.encode("utf-8"))
print(f"\nYAZILDI: {len(plan)} dosya · farklı kalem: {fark}")
