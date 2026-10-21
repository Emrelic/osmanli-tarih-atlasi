"""ANTİK KÜNYE EKLEME (VERI-MO-ARKEO, 22 Ekim 2026) — DEVLET-LISTESI'nin devrettiği 78 adaydan, f VE t ucu akademik kaynakla
doğrulanmış (f_onay & t_onay ∈ {dogrulandi, duzeltildi}) olanlar data/devletler.js'e künye olarak eklenir.
Girdi : denetim/arastirma/6-devlet-dogrula.json (doğrulama) + DEVLET-LISTESI kaydı (ad/tur/bolge/baskent/ozet)
Kural : çelişkili / bulunamadı uç → künye YAZILMAZ (ortalama yok; çelişki araştırma JSON'unda); aynı polity iki kayıt ise biri (tenuh/tanuhiler → tenuh).
İdempotent: id zaten devletler.js'te ise atlanır."""
import json, os, re, sys

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
DL = r"C:\atlas\.claude\worktrees\cool-visvesvaraya-5a3306\denetim\ONCE1281-DEVLET-LISTESI.json"
BIRLESTIR = {"tanuhiler": "tenuh"}          # aynı Tanûh konfederasyonu (doğrulama ajanı: TDV 'Tanûh' III-VII. yy) — tek künye
OK = ("dogrulandi", "duzeltildi")


def q(s):
    return json.dumps(s, ensure_ascii=False)


def main():
    d6 = json.load(open(os.path.join(KOK, "denetim", "arastirma", "6-devlet-dogrula.json"), encoding="utf-8"))["sonuclar"]
    dl = {k["id"]: k for k in json.load(open(DL, encoding="utf-8"))["kayitlar"]}
    yol = os.path.join(KOK, "data", "devletler.js")
    s = open(yol, encoding="utf-8", newline="").read()
    var = set(re.findall(r'\bid:"([^"]+)"', s))
    ek = []
    for x in d6:
        if x["id"] in BIRLESTIR or x.get("f_onay") not in OK or x.get("t_onay") not in OK:
            continue
        if x["id"] in var:
            print("zaten var:", x["id"])
            continue
        r = dl.get(x["id"])
        f, t = x.get("f_iso"), x.get("t_iso")
        if not r or not f or not t or not re.match(r"^-?\d{4}-\d\d-\d\d$", f) or not re.match(r"^-?\d{4}-\d\d-\d\d$", t):
            print("ATLANDI (iso/kayıt eksik):", x["id"], f, t)
            continue
        kay = " · ".join(x["kaynak"]) if isinstance(x["kaynak"], list) else x["kaynak"]
        ozet = (r.get("ozet") or "") + " [Künye ucu doğrulaması: %s]" % (x.get("ic_not") or "")[:500]
        kes = x.get("kesinlik")
        satir = ("{ id:%s, ad:%s, tur:%s, bolge:%s, f:%s, t:%s, baskent:%s, ozet:%s, kaynak:%s,\n  kronoloji:[\n"
                 "    { t:%s, tur:\"kurulus\", b:%s, kaynak:%s },\n    { t:%s, tur:\"son\", b:%s, kaynak:%s }\n  ] },") % (
            q(x["id"]), q(r["ad"]), q(r["tur"]), q(r["bolge"]), q(f), q(t), q(r.get("baskent") or "yok"), q(ozet), q(kay[:900]),
            q(f), q("%s: başlangıç (%s)" % (r["ad"], x.get("alinti") or "kaynak notu ic_not'ta")[:400]), q(kay[:600]),
            q(t), q("%s: sona erer (%s)" % (r["ad"], x.get("alinti_2") or x.get("alinti") or "kaynak notu ic_not'ta")[:400]), q(kay[:600]))
        if kes:
            satir = satir.replace(" baskent:", " kesinlik:%s, baskent:" % json.dumps(kes, ensure_ascii=False).replace('"f"', "f").replace('"t"', "t"), 1) if isinstance(kes, dict) else satir
        ek.append((x["id"], satir))
    if not ek:
        print("eklenecek künye yok")
        return
    i = s.rstrip().rfind("];")
    assert i > 0 and s.rstrip().endswith("];"), "devletler.js sonu '];' değil"
    blok = ("\n// =========== ANTİK DEVLET KÜNYELERİ (VERI-MO-ARKEO 22 Ekim 2026; denetim/arkeoloji_antik_kunye_1022.py) — f ve t akademik kaynakla doğrulanmış ===========\n"
            + "\n".join(sat for _, sat in ek) + "\n")
    if "\r\n" in s:
        blok = blok.replace("\n", "\r\n")
    with open(yol, "w", encoding="utf-8", newline="") as fh:
        fh.write(s[:i] + blok + s[i:])
    print("künye eklendi:", len(ek), [i for i, _ in ek])


main()
