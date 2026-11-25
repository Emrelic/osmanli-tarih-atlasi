# Mekanik denetim (cevirenden ayri) + ceviri.py bicimine toplama; dil dalina denetim/CEVIRI-YENI-1126/<kod>/ altina commit+push.
# data/ ve arac/ degismez (altyapi LAB dalinda). Kullanim: py yeni_topla.py [--kuru] sq bs ...
import sys, os, json, re, glob, subprocess, collections
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = r"C:\atlas\.claude\worktrees\umit21-osm5"
S = os.path.dirname(os.path.abspath(__file__)); D = os.path.join(S, "yeni")
kuru = "--kuru" in sys.argv; diller = [a for a in sys.argv[1:] if a != "--kuru"]
def git(*a, kontrol=True):
    r = subprocess.run(["git", *a], cwd=KOK, capture_output=True, text=True, encoding="utf-8", errors="replace")
    if r.returncode and kontrol: print("HATA", a, r.stderr); sys.exit(1)
    return r.stdout.strip()
AR = json.load(open(os.path.join(D, "arayuz_kaynak.json"), encoding="utf-8"))
DV = json.load(open(os.path.join(D, "devlet_kaynak.json"), encoding="utf-8"))
OL = json.load(open(os.path.join(D, "olay_kaynak.json"), encoding="utf-8"))
YER = re.compile(r"\{[^{}]*\}|<[^<>]+>|#|%[sd]")
def c(s): return collections.Counter(YER.findall(s))
RAKAM = {}
def yil(s): return set(re.findall(r"(?<!\d)(1\d{3}|20\d{2})(?!\d)", s))
YAZI = {"hy": re.compile(r"[\u0531-\u058F]"), "ka": re.compile(r"[\u10A0-\u10FF\u1C90-\u1CBF]")}
TRH = re.compile(r"[ğıİ]")
for dil in diller:
    d = os.path.join(D, dil); sorun = []; cikti = {}
    for tur, desen in (("arayuz", "c_arayuz_*.jsonl"), ("devlet", "c_devlet_*.jsonl"), ("olay", "c_olay_*.jsonl")):
        kayit = {}; kaynak = {}
        for y in sorted(glob.glob(os.path.join(d, desen))):
            # PAKET SINAMASI: n yalniz kendi kaynak paketinden olabilir. Butunuyle paket-ici sira (1..L) yazilmis dosya eslenir.
            pm = re.match(r"^c_((?:arayuz|devlet|olay)_\d+)", os.path.basename(y))
            kp = os.path.join(D, (pm.group(1) if pm else "?") + ".txt")
            if not pm or not os.path.exists(kp):
                sorun.append("%s ALINMADI (paket eslesmedi)" % os.path.basename(y)); continue
            izin = [int(x.split("\t", 1)[0]) for x in open(kp, encoding="utf-8") if "\t" in x]
            satirlar = open(y, encoding="utf-8-sig", errors="replace").read().split("\n")
            ns = []
            for l in satirlar:
                g = re.match(r'\s*\{\s*"n"\s*:\s*"?(\d+)', l)
                if g: ns.append(int(g.group(1)))
            yerel = bool(ns) and not any(n in set(izin) for n in ns) and all(1 <= n <= len(izin) for n in ns) and ns == sorted(set(ns))
            adaylar = []
            for no, l in enumerate(satirlar, 1):
                if not l.strip(): continue
                try:
                    r = json.loads(l); n = int(r["n"])
                    if yerel: n = izin[n - 1]; r["n"] = n
                    if n not in set(izin): sorun.append("%s:%d %s ALINMADI (n paket disi) n=%d" % (os.path.basename(y), no, tur, n)); continue
                    adaylar.append((no, r))
                except Exception as e:
                    sorun.append("%s:%d okunamadi: %r" % (os.path.basename(y), no, str(e)[:80]))
            # ICERIK SINAMASI (olay): yil tasiyan kayitlarin yillari ceviride gorunmeli; paketin %25'inden fazlasi tutmuyorsa paket reddedilir
            if tur == "olay":
                bak = tut = 0
                for no, r in adaylar:
                    s = " ".join(OL["kaynak"][OL["idler"][int(r["n"]) - 1]].values()); v = "%s %s" % (r.get("b", ""), r.get("d", ""))
                    ys = yil(s)
                    if ys:
                        bak += 1; tut += len(ys & yil(v)) >= max(1, len(ys) // 2)
                if bak >= 5 and tut < 0.75 * bak:
                    sorun.append("%s olay ALINMADI TUM PAKET (yil uyumu %d/%d%s)" % (os.path.basename(y), tut, bak, ", yerel sira" if yerel else "")); continue
                if yerel: sorun.append("%s uyari: paket-ici sira eslendi, yil uyumu %d/%d" % (os.path.basename(y), tut, bak))
            for no, r in adaylar:
                yer = "%s:%d" % (os.path.basename(y), no)
                try:
                    n = int(r["n"])
                    if tur == "arayuz": i = AR["dizgeler"][n - 1]; tr = {"m": i}; cv = {"m": r["m"]}
                    elif tur == "devlet": i = DV["idler"][n - 1]; tr = {"m": DV["kaynak"][i]}; cv = {"m": r["m"]}
                    else: i = OL["idler"][n - 1]; tr = OL["kaynak"][i]; cv = {a: r[a] for a in tr}
                    if n < 1: raise ValueError("n")
                except Exception as e:
                    sorun.append("%s okunamadi: %r" % (yer, str(e)[:80])); continue
                kotu = None
                for a, s in tr.items():
                    v = cv[a]
                    if not isinstance(v, str) or not v.strip(): kotu = "bos"
                    elif c(v) != c(s): kotu = "yer tutucu farkli"
                    elif len(s) > 120 and len(v) < 0.5 * len(s): kotu = "cok kisa"
                if kotu: sorun.append("%s %s ALINMADI (%s) n=%d" % (yer, tur, kotu, n)); continue
                for a, s in tr.items():
                    v = cv[a]
                    ey = yil(s) - yil(v)
                    if ey: sorun.append("%s %s uyari: yil gorunmuyor %s n=%d" % (yer, tur, ",".join(sorted(ey)), n))
                    if dil in YAZI and len(s) > 20 and not YAZI[dil].search(v): sorun.append("%s %s uyari: hedef yazi yok n=%d" % (yer, tur, n))
                    if len(s) > 60 and v.strip() == s.strip(): sorun.append("%s %s uyari: cevrilmemis n=%d" % (yer, tur, n))
                if tur == "olay": kayit[i] = cv; kaynak[i] = tr
                else: kayit[i] = cv["m"]; kaynak[i] = tr["m"]
        cikti[tur] = (kayit, kaynak)
    say = {t: len(v[0]) for t, v in cikti.items()}
    tam = {"arayuz": len(AR["dizgeler"]), "devlet": len(DV["idler"]), "olay": len(OL["idler"])}
    uyari = sum(1 for s in sorun if "uyari" in s)
    print(dil, " ".join("%s %d/%d" % (t, say[t], tam[t]) for t in tam), "| alinmayan/okunmayan", len(sorun) - uyari, "uyari", uyari)
    if kuru or not any(say.values()): continue
    if git("status", "--porcelain", "--untracked-files=no"): print("agac kirli, durdum"); sys.exit(1)
    dal = "ceviri-%s-1126" % dil
    if git("branch", "--list", dal): git("switch", "--quiet", dal)
    else: git("switch", "--quiet", "--no-track", "-c", dal, "origin/yeni-diller-altyapi-1126")
    hedef = os.path.join(KOK, "denetim", "CEVIRI-YENI-1126", dil); os.makedirs(hedef, exist_ok=True)
    def yaz(ad, metin):
        open(os.path.join(hedef, ad), "w", encoding="utf-8", newline="\n").write(metin)
    for tur, (kayit, kaynak) in cikti.items():
        if not kayit: continue
        yaz(tur + "-is.json", json.dumps({"dil": dil, "tur": tur, "kaynak": kaynak}, ensure_ascii=False, indent=0) + "\n")
        yaz(tur + "-cevap.json", json.dumps({"tur": tur, "dil": dil, "kayit": kayit}, ensure_ascii=False, indent=0) + "\n")
    yaz("sozluk.md", "\n".join("== %s\n%s" % (os.path.basename(p), open(p, encoding="utf-8-sig", errors="replace").read()) for p in sorted(glob.glob(os.path.join(d, "sozluk*.md")))) + "\n")
    yaz("mekanik-denetim.txt", "taban origin/main %s\n" % AR["taban"] + "\n".join("%s %d/%d" % (t, say[t], tam[t]) for t in tam) + "\n\n" + "\n".join(sorun) + "\n")
    yol = "denetim/CEVIRI-YENI-1126/" + dil
    # TEMIZ YENIDEN URETIM: onceki (hatali eslesmis olabilecek) kayitlar kalmasin diye dilin data dosyalari silinip bastan uygulanir
    for eski in glob.glob(os.path.join(KOK, "data", "ceviri_%s_*.js" % dil)):
        for k in range(40):
            try: os.remove(eski); break
            except PermissionError:
                import time; time.sleep(0.5)
    # LAB altyapisi: standart arac ile data/ceviri_<dil>_* dosyalarina uygula (kaynak ozeti is.json'daki Turkceden)
    for tur, (kayit, kaynak) in cikti.items():
        if not kayit: continue
        for k in range(20):
            r = subprocess.run([sys.executable, "arac/ceviri.py", "uygula", "--dil", dil, "--is", os.path.join(hedef, tur + "-is.json"), "--girdi", os.path.join(hedef, tur + "-cevap.json")], cwd=KOK, capture_output=True, text=True, encoding="utf-8", errors="replace")
            if r.returncode == 0 or "PermissionError" not in r.stderr: break
            import time; time.sleep(3)
        print("  uygula", tur, r.returncode, (r.stdout.strip().splitlines() or [r.stderr[-300:]])[-1])
        if r.returncode: sys.exit(1)
    degisen = [l.split()[-1] for l in git("status", "--porcelain", "--untracked-files=all", "--", "data").splitlines()]
    yabanci = [x for x in degisen if not (x.startswith("data/ceviri_%s_" % dil) or x == "data/ceviri_dizin.js")]
    if yabanci: print("beklenmeyen dosya:", yabanci); sys.exit(1)
    r = subprocess.run([sys.executable, "arac/ceviri.py", "denetim", "--dil", dil], cwd=KOK, capture_output=True, text=True, encoding="utf-8", errors="replace")
    yaz("ceviri-denetim.txt", r.stdout)
    git("add", "--", yol, *degisen)
    if not git("status", "--porcelain", "--untracked-files=no"): print(dil, "degisiklik yok"); continue
    msj = os.path.join(S, "msj_yeni.txt")
    open(msj, "w", encoding="utf-8").write("CEVIRI-YENI-1126 %s: arayuz %d devlet %d olay %d (LAB yeni-diller altyapisi tabaninda ceviri.py uygula ile islendi)\n\nCo-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>\n" % (dil, say["arayuz"], say["devlet"], say["olay"]))
    git("commit", "--quiet", "-F", msj, "--", yol, *degisen)
    p = subprocess.run(["git", "push", "origin", dal], cwd=KOK, capture_output=True, text=True)
    print("  push", dil, p.returncode, git("log", "-1", "--format=%h"))
