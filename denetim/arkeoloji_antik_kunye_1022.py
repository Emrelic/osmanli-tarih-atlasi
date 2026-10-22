"""ANTİK KÜNYE EKLEME (VERI-MO-ARKEO, 22 Ekim 2026) — DEVLET-LISTESI'nin devrettiği 78 adaydan, f VE t ucu akademik kaynakla
doğrulanmış (f_onay & t_onay ∈ {dogrulandi, duzeltildi}) olanlar data/devletler.js'e künye olarak eklenir.
Girdi : denetim/arastirma/6-devlet-dogrula.json (doğrulama) + DEVLET-LISTESI kaydı (ad/tur/bolge/baskent/ozet)
Kural : çelişkili / bulunamadı uç → künye YAZILMAZ (ortalama yok; çelişki araştırma JSON'unda); aynı polity iki kayıt ise biri (tenuh/tanuhiler → tenuh).
İdempotent: id zaten devletler.js'te ise atlanır."""
import json, os, re, sys

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
DL = r"C:\atlas\.claude\worktrees\cool-visvesvaraya-5a3306\denetim\ONCE1281-DEVLET-LISTESI.json"
DL2 = r"C:\atlas\.claude\worktrees\cool-visvesvaraya-5a3306\denetim\once1281\devir\MO-ARKEO_MO12000-MS499.json"
BIRLESTIR = {"tanuhiler": "tenuh", "bati-qin": "bati-qin-qifu"}          # aynı Tanûh konfederasyonu (doğrulama ajanı: TDV 'Tanûh' III-VII. yy) — tek künye
OK = ("dogrulandi", "duzeltildi")


def q(s):
    return json.dumps(s, ensure_ascii=False)


def main():
    import glob
    d6 = []
    for yol_ in sorted(glob.glob(os.path.join(KOK, "denetim", "arastirma", "6-*.json")) + glob.glob(os.path.join(KOK, "denetim", "arastirma", "8-*.json"))):
        d6 += json.load(open(yol_, encoding="utf-8"))["sonuclar"]
    dl = {k["id"]: k for k in json.load(open(DL, encoding="utf-8"))["kayitlar"]}
    dl.update({k["id"]: k for k in json.load(open(DL2, encoding="utf-8"))["kayit"]})
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
        if isinstance(x.get("kesinlik"), str) and x["kesinlik"] in ("yil", "onyil", "yuzyil", "belirsiz"):
            f, t = re.sub(r"-\d\d-\d\d$", "-01-01", f), re.sub(r"-\d\d-\d\d$", "-01-01", t)        # gün hassasiyeti yok: ay/gün ADAYLARI (ganzhi aritmetiği vb.) künyeye girmez
        def _gn(z):
            m = re.match(r"^(-?)(\d{4})-(\d\d)-(\d\d)$", z)
            return (-1 if m.group(1) else 1) * (int(m.group(2)) * 400 + int(m.group(3)) * 31 + int(m.group(4)))
        if _gn(f) >= _gn(t):
            print("ATLANDI (f>=t, sıfır uzunluk riski):", x["id"], f, t)
            continue
        kay = " · ".join(x["kaynak"]) if isinstance(x["kaynak"], list) else x["kaynak"]
        ozet =(r.get("ozet") or "") + " [Künye ucu doğrulaması: %s]" % (x.get("ic_not") or "")[:500]
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
    by = os.path.join(KOK, "denetim", "ARKEOLOJI-BOYA-ISTENEN-1023.txt")      # boya_gerekli:true — boyayı MO-MOTOR yazar (bu betik yazmaz)
    eski = open(by, encoding="utf-8").read() if os.path.exists(by) else "ANTİK KÜNYELER — boya_gerekli:true (BOYALAR'a MO-MOTOR ekler; VERI-MO-ARKEO yazmaz). id · bölge · f → t\n"
    with open(by, "w", encoding="utf-8", newline="\n") as fh:
        fh.write(eski)
        for i_, _ in ek:
            if i_ + " " not in eski:
                r_ = dl[i_]
                fh.write("%s · %s\n" % (i_, r_.get("bolge")))


main()
