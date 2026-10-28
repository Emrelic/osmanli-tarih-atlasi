"""ANTİK KÜNYE EKLEME 2 (VERI-MO-ARKEO, 22 Ekim 2026) — DEVLET-LISTESI 2. tur: dogrulama=="okundu", Vikipedi DIŞI kaynaklı (akademik/birincil/ansiklopedi),
f ve t dolu, f_t_durum taslak DEĞİL kayıtlar data/devletler.js'e künye olarak eklenir. 'kismen-okundu' (Vikipedi aracılı) kayıtlar YAZILMAZ — önce akademik doğrulama (6-devlet-dogrula.json deseni).
Atlananlar: mükerrer id uyarısı (DEVLET-LISTESI: başka oturumla çakışır), nokta/yer kaydı (ceibal), kimlik zaten devletler.js'te.
İdempotent (id varsa atlanır). Girdi: C:\\atlas\\.claude\\worktrees\\cool-visvesvaraya-5a3306\\denetim\\ONCE1281-DEVLET-LISTESI.json"""
import json, os, re, sys

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
DL = r"C:\atlas\.claude\worktrees\cool-visvesvaraya-5a3306\denetim\ONCE1281-DEVLET-LISTESI.json"
HARIC = {"sonraki-yan", "bati-yan", "guney-yan", "kuzey-wei", "tuyuhun", "kidarit", "alkhon", "hun-avrupa", "veneti", "samos-polis",   # DEVLET-LISTESI mükerrer uyarısı
         "ceibal", "kartaca-ispanya"}                                                                                              # ceibal = yer (nokta olarak yazıldı); kartaca-ispanya = Barka ailesi hakimiyeti (devlet değil)


def q(s):
    return json.dumps(s, ensure_ascii=False)


def vik_disi(k):
    ks = k["kaynak"] if isinstance(k["kaynak"], list) else [k["kaynak"]]
    return [x for x in ks if not re.match(r"\s*Vikipedi", x, re.I)]


def main():
    d = json.load(open(DL, encoding="utf-8"))
    yol = os.path.join(KOK, "data", "devletler.js")
    s = open(yol, encoding="utf-8", newline="").read()
    var = set(re.findall(r'\bid:\s*"([^"]+)"', s))        # başka oturumlar `id: "x"` (boşluklu) yazar
    ek, atla = [], []
    for k in d["kayitlar"]:
        if not (k.get("devredilebilir") is True and k.get("devir_tarafi") in ("VERI-MO-ARKEO", "MO-ARKEO-A")):
            continue
        if k.get("dogrulama") != "okundu" or k["id"] in HARIC or k["id"] in var:
            continue
        if not vik_disi(k) or not k.get("f") or not k.get("t") or (k.get("f_t_durum") or "") == "taslak":
            continue
        if not re.match(r"^-?\d{4}-\d\d-\d\d$", k["f"]) or not re.match(r"^-?\d{4}-\d\d-\d\d$", k["t"]) or k["f"] >= k["t"] and not k["f"].startswith("-"):
            atla.append((k["id"], "f/t biçimi"))
            continue
        kay = " · ".join(vik_disi(k))[:900]
        ozet = ((k.get("ozet") or "") + " [DEVLET-LISTESI 2. tur, doğrulama: okundu. %s]" % (k.get("ic_not") or "")[:400]).strip()
        satir = ("{ id:%s, ad:%s, tur:%s, bolge:%s, f:%s, t:%s, baskent:%s, ozet:%s, kaynak:%s,\n  kronoloji:[\n"
                 "    { t:%s, tur:\"kurulus\", b:%s, kaynak:%s },\n    { t:%s, tur:\"son\", b:%s, kaynak:%s }\n  ] },") % (
            q(k["id"]), q(k["ad"]), q(k["tur"]), q(k["bolge"]), q(k["f"]), q(k["t"]), q(k.get("baskent") or "yok"), q(ozet), q(kay),
            q(k["f"]), q("%s: başlangıç (kaynak: %s)" % (k["ad"], kay[:160])), q(kay[:600]),
            q(k["t"]), q("%s: sona erer (kaynak: %s)" % (k["ad"], kay[:160])), q(kay[:600]))
        ek.append((k["id"], satir))
    for a in atla:
        print("ATLANDI", a)
    if not ek:
        print("eklenecek künye yok")
        return
    i = s.rstrip().rfind("];")
    assert i > 0 and s.rstrip().endswith("];"), "devletler.js sonu '];' değil"
    blok = ("\n// =========== ANTİK DEVLET KÜNYELERİ 2 (VERI-MO-ARKEO 22 Ekim 2026; denetim/arkeoloji_antik_kunye_dl_1022.py) — DEVLET-LISTESI 2. tur, kaynak okundu (Vikipedi dışı) ===========\n"
            + "\n".join(sat for _, sat in ek) + "\n")
    if "\r\n" in s:
        blok = blok.replace("\n", "\r\n")
    with open(yol, "w", encoding="utf-8", newline="") as fh:
        fh.write(s[:i] + blok + s[i:])
    print("künye eklendi:", len(ek), [i for i, _ in ek])


main()
