# -*- coding: utf-8 -*-
"""ARAC-PUSH-KAPI-SINAV-1013 — push_kapisi.py + kilit.py (KAPI-2) iki yönlü sınav.

GERÇEK main'e / GERÇEK kilit dosyasına DOKUNMAZ: her senaryo geçici bir BARE origin + iki klon
kurar; klonlara GERÇEK arac/push_kapisi.py, kilit.py, surum_damgala.py kopyalanır; ağır ölçüm
betikleri (paketle · kodla · denetle · denetle_yayin) küçük taslaklarla değişir (denetle taslağı
`data/IHLAL` dosyası varsa 1 verir). Kapı bir ALT SÜREÇ olarak, gerçek komut satırıyla koşar.

    py denetim/ARAC-PUSH-KAPI-SINAV-1013.py          # çıkış 0 = hepsi geçti
"""
import json, os, shutil, stat, subprocess, sys, tempfile, threading, time

sys.stdout.reconfigure(encoding="utf-8")
PY = sys.executable
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GERCEK = {a: os.path.join(KOK, "arac", a) for a in ("push_kapisi.py", "kilit.py", "surum_damgala.py")}

PAKETLE = '''import sys, os, json, hashlib
kok = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src = open(os.path.join(kok, "data", "src.txt"), encoding="utf-8").read()
open(os.path.join(kok, "data", "paket_01.js"), "w", encoding="utf-8", newline="\\n").write("// paket\\n" + src)
json.dump({"sha": hashlib.sha256(src.encode()).hexdigest()},
          open(os.path.join(kok, "data", "paket_kunye.json"), "w"), indent=1)
'''
DENETLE = '''import os, sys
kok = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.exit(1 if os.path.exists(os.path.join(kok, "data", "IHLAL")) else 0)
'''
SIFIR = "import sys\nsys.exit(0)\n"
INDEX = ('<html><head><script>window.SURUM="r1"</script></head><body>\n'
         '<script src="data/paket_01.js?v=r1"></script>\n'
         '<script src="js/app.js?v=r1"></script>\n</body></html>\n')

SONUC = []


def ok(ad, kosul, ayrinti=""):
    SONUC.append((ad, bool(kosul)))
    print("  %s %s%s" % ("OK  " if kosul else "FAIL", ad, ("  -- " + ayrinti) if (ayrinti and not kosul) else ""))


def c(*a, cwd=None, **kw):
    return subprocess.run(a, cwd=cwd, capture_output=True, text=True, encoding="utf-8", errors="replace", **kw)


def g(repo, *a):
    r = c("git", *a, cwd=repo)
    if r.returncode != 0:
        raise RuntimeError("git %s: %s" % (" ".join(a), r.stderr))
    return r.stdout.strip()


def yaz(repo, yol, metin):
    p = os.path.join(repo, yol)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, "w", encoding="utf-8", newline="\n") as f:
        f.write(metin)


def oku(repo, yol):
    with open(os.path.join(repo, yol), encoding="utf-8", newline="") as f:
        return f.read()


def temizle(yol):
    def oz(fn, p, _):
        os.chmod(p, stat.S_IWRITE)
        fn(p)
    shutil.rmtree(yol, onerror=oz)


def uret(repo):
    """Veri yazan oturumun yaptığı iş: paketle yenile + sürüm damgası."""
    c(PY, "arac/paketle.py", "yenile", cwd=repo)
    c(PY, "arac/surum_damgala.py", cwd=repo)


def commit(repo, mesaj, *dosyalar):
    g(repo, "add", "--", *dosyalar)
    g(repo, "commit", "-q", "-m", mesaj)


def kur():
    """→ (taban_dizin, origin, dev1, dev2). Tohum commit'inde araçlar + taslaklar."""
    t = tempfile.mkdtemp(prefix="atlas-kapisinav-")
    origin = os.path.join(t, "origin.git")
    g(t, "init", "-q", "--bare", "-b", "main", origin)
    tohum = os.path.join(t, "tohum")
    g(t, "clone", "-q", "-c", "core.autocrlf=false", origin, tohum)
    for k, v in (("user.name", "sinav"), ("user.email", "s@s"), ("core.autocrlf", "false")):
        g(tohum, "config", k, v)
    for ad, yol in GERCEK.items():
        os.makedirs(os.path.join(tohum, "arac"), exist_ok=True)
        shutil.copy(yol, os.path.join(tohum, "arac", ad))
    yaz(tohum, "arac/paketle.py", PAKETLE)
    yaz(tohum, "arac/denetle.py", DENETLE)
    yaz(tohum, "arac/denetle_yayin.py", SIFIR)
    yaz(tohum, "arac/kodla.py", SIFIR)
    yaz(tohum, ".gitignore", "oturumlar/\n")
    yaz(tohum, "index.html", INDEX)
    yaz(tohum, "js/app.js", "// app\n")
    yaz(tohum, "data/yerlesimler_x.js", "A1\nA2\nA3\nA4\nA5\nA6\nA7\nA8\n")
    yaz(tohum, "data/src.txt", "s1\ns2\ns3\ns4\ns5\ns6\ns7\ns8\n")
    uret(tohum)
    g(tohum, "add", "-A")
    g(tohum, "commit", "-q", "-m", "tohum")
    g(tohum, "push", "-q", "origin", "HEAD:main")
    dev = []
    for ad in ("dev1", "dev2"):
        d = os.path.join(t, ad)
        g(t, "clone", "-q", "-c", "core.autocrlf=false", origin, d)
        for k, v in (("user.name", ad), ("user.email", ad + "@s"), ("core.autocrlf", "false")):
            g(d, "config", k, v)
        dev.append(d)
    return t, origin, dev[0], dev[1]


def kapi(repo, *ek, kim="SINAV-1", zaman=240):
    return c(PY, "arac/push_kapisi.py", "--kim", kim, "--bekle-aralik", "1", *ek, cwd=repo, timeout=zaman)


def kilit_durum(repo, kim="X"):
    return c(PY, "arac/kilit.py", "kimde", "__MAIN_PUSH__", cwd=repo)


def origin_head(origin):
    return g(origin, "rev-parse", "main")


# --------------------------------------------------------------------------
def s_temiz():
    print("S1 temiz değişiklik → geçer (kuru + gerçek itme)")
    t, origin, d1, d2 = kur()
    try:
        yaz(d1, "data/yerlesimler_x.js", "A1\nB2\nA3\nA4\nA5\nA6\nA7\nA8\n")
        commit(d1, "temiz", "data/yerlesimler_x.js")
        eski = origin_head(origin)
        r = kapi(d1, "--kuru")
        ok("kuru: çıkış 0", r.returncode == 0, r.stdout[-400:])
        ok("kuru: origin değişmedi", origin_head(origin) == eski)
        ok("kuru: kilit bırakıldı", kilit_durum(d1).returncode == 0, kilit_durum(d1).stdout)
        r = kapi(d1)
        ok("gerçek: çıkış 0", r.returncode == 0, r.stdout[-400:])
        ok("gerçek: origin/main == HEAD", origin_head(origin) == g(d1, "rev-parse", "HEAD"))
    finally:
        temizle(t)


def s_uretilen_catisma():
    print("S2 üretilmiş dosya çatışması → kapı kendisi çözer, yeniden üretir")
    t, origin, d1, d2 = kur()
    try:
        # dev2 önce itti: src.txt'nin 8. satırı + yeniden üretim
        yaz(d2, "data/src.txt", "s1\ns2\ns3\ns4\ns5\ns6\ns7\nD2\n")
        uret(d2)
        commit(d2, "dev2 veri", "data/src.txt", "data/paket_01.js", "data/paket_kunye.json", "index.html")
        g(d2, "push", "-q", "origin", "HEAD:main")
        d2_damga = oku(d2, "index.html")
        # dev1: src.txt'nin 1. satırı + yerlesim + yeniden üretim (aynı üretilmiş dosyalar çatışacak)
        yaz(d1, "data/src.txt", "D1\ns2\ns3\ns4\ns5\ns6\ns7\ns8\n")
        yaz(d1, "data/yerlesimler_x.js", "A1\nA2\nA3\nB4\nA5\nA6\nA7\nA8\n")
        uret(d1)
        commit(d1, "dev1 veri", "data/src.txt", "data/yerlesimler_x.js", "data/paket_01.js",
               "data/paket_kunye.json", "index.html")
        # öncül: düz rebase gerçekten çatışıyor mu (sınavın anlamlı olduğunu kanıtla)
        g(d1, "fetch", "-q", "origin")
        deneme = c("git", "rebase", "origin/main", cwd=d1)
        ok("ön koşul: düz rebase çatışır", deneme.returncode != 0)
        c("git", "rebase", "--abort", cwd=d1)
        r = kapi(d1)
        ok("çıkış 0", r.returncode == 0, r.stdout[-600:])
        ok("kapı çatışmayı çözdüğünü bildirdi", "kapıca çözüldü" in r.stdout, r.stdout[-400:])
        ok("origin/main == HEAD", origin_head(origin) == g(d1, "rev-parse", "HEAD"))
        # içerik: iki tarafın değişikliği de var, paket yeniden üretilmiş
        src = oku(d1, "data/src.txt")
        ok("src.txt iki değişikliği de taşıyor", src.startswith("D1\n") and "D2" in src, src)
        ok("paket_01.js yeniden üretildi (iki satır da)", "D1" in oku(d1, "data/paket_01.js")
           and "D2" in oku(d1, "data/paket_01.js"))
        ok("kunye yeni src'nin sha'sı", json.loads(oku(d1, "data/paket_kunye.json"))["sha"]
           == __import__("hashlib").sha256(src.encode()).hexdigest())
        idx = oku(d1, "index.html")
        ok("index.html'de çatışma işareti yok", "<<<<<<<" not in idx and ">>>>>>>" not in idx)
        import re, hashlib
        yeni = int(re.search(r'window\.SURUM="r(\d+)"', idx).group(1))
        eski = int(re.search(r'window\.SURUM="r(\d+)"', d2_damga).group(1))
        ok("genel sürüm damgası origin'inkinden büyük (%d > %d)" % (yeni, eski), yeni > eski)
        pkt = open(os.path.join(d1, "data", "paket_01.js"), "rb").read().replace(b"\r\n", b"\n")
        ok("paket damgası içerikten (dosya-başı)", "paket_01.js?v=r%d\"" % int(
            hashlib.sha1(pkt).hexdigest()[:7], 16) in idx, idx)
        ok("çalışma ağacı temiz", g(d1, "status", "--porcelain", "--untracked-files=no") == "")
    finally:
        temizle(t)


def s_gercek_catisma():
    print("S3 gerçek veri çatışması → durur, kilit bırakılır, çıkış 4")
    t, origin, d1, d2 = kur()
    try:
        yaz(d2, "data/yerlesimler_x.js", "A1\nA2\nA3\nX4\nA5\nA6\nA7\nA8\n")
        commit(d2, "dev2", "data/yerlesimler_x.js")
        g(d2, "push", "-q", "origin", "HEAD:main")
        yaz(d1, "data/yerlesimler_x.js", "A1\nA2\nA3\nY4\nA5\nA6\nA7\nA8\n")
        commit(d1, "dev1", "data/yerlesimler_x.js")
        kafa = g(d1, "rev-parse", "HEAD")
        eski = origin_head(origin)
        r = kapi(d1)
        ok("çıkış 4", r.returncode == 4, "%d %s" % (r.returncode, r.stdout[-400:]))
        ok("mesaj açık (ÇATIŞMA + dosya adı)", "ÇATIŞMA" in r.stdout and "yerlesimler_x.js" in r.stdout)
        ok("origin değişmedi", origin_head(origin) == eski)
        ok("rebase geri alındı, HEAD aynı", g(d1, "rev-parse", "HEAD") == kafa
           and not os.path.isdir(os.path.join(d1, ".git", "rebase-merge")))
        k = kilit_durum(d1)
        ok("kilit tutulmuyor", k.returncode == 0, k.stdout)
    finally:
        temizle(t)


def _kilit_yaz(repo, veri):
    p = os.path.join(repo, "oturumlar", "kilit.json")
    os.makedirs(os.path.dirname(p), exist_ok=True)
    veri.setdefault("surum", 1)
    with open(p, "w", encoding="utf-8") as f:
        json.dump(veri, f)


def _kilit_oku(repo):
    with open(os.path.join(repo, "oturumlar", "kilit.json"), encoding="utf-8") as f:
        return json.load(f)


def _simdi():
    return time.strftime("%Y-%m-%dT%H:%M:%S")


def _olu_pid():
    p = subprocess.Popen([PY, "-c", "pass"])
    p.wait()
    return p.pid


def s_olu_kuyruk():
    print("S4 ölü kuyruk/sahip kaydı → temizlenir; canlı ve pid'siz kayıtlara dokunulmaz")
    t, origin, d1, d2 = kur()
    canli = subprocess.Popen([PY, "-c", "import time; time.sleep(120)"])
    try:
        yaz(d1, "data/yerlesimler_x.js", "A1\nB2\nA3\nA4\nA5\nA6\nA7\nA8\n")
        commit(d1, "temiz", "data/yerlesimler_x.js")
        ts = _simdi()
        # (a) sahibi ölü
        _kilit_yaz(d1, {"kilitler": {"__main_push__": {"sahip": "OLU-SAHIP", "pid": _olu_pid(),
                                                      "alindi": ts, "son_yazma": ts, "sira": []}}})
        r = kapi(d1, "--kuru", "--bekle-dk", "1")
        ok("(a) ölü sahip: kapı kilidi alıp geçti (0)", r.returncode == 0, r.stdout[-400:])
        ok("(a) ölü sahip geçmişe yazıldı", any(x["kim"] == "OLU-SAHIP" for x in _kilit_oku(d1).get("olu_temizlenen", [])))
        # (b) sahibi CANLI + sırada ölü ve pid'siz kayıt → zaman aşımı, ölü silinir, ötekiler kalır
        _kilit_yaz(d1, {"kilitler": {"__main_push__": {"sahip": "CANLI-SAHIP", "pid": canli.pid,
                        "alindi": ts, "son_yazma": ts,
                        "sira": [{"kim": "OLU-SIRA", "girdi": ts, "pid": _olu_pid()},
                                 {"kim": "PIDSIZ", "girdi": ts}]}}})
        r = kapi(d1, "--kuru", "--bekle-dk", "0.05")
        ok("(b) canlı sahip: zaman aşımı çıkış 1", r.returncode == 1, "%d %s" % (r.returncode, r.stdout[-300:]))
        k = _kilit_oku(d1)["kilitler"]["__main_push__"]
        kimler = [s["kim"] for s in k["sira"]]
        ok("(b) ölü sıra kaydı silindi", "OLU-SIRA" not in kimler, str(kimler))
        ok("(b) pid'siz kayıt yerinde", "PIDSIZ" in kimler, str(kimler))
        ok("(b) canlı sahibe dokunulmadı", k["sahip"] == "CANLI-SAHIP")
        ok("(b) kendi kaydımız sıradan çıktı", "SINAV-1" not in kimler, str(kimler))
        # (c) canlı sahip bırakınca kapı sıradan alır ve geçer
        _kilit_yaz(d1, {"kilitler": {"__main_push__": {"sahip": "CANLI-SAHIP", "pid": canli.pid,
                                                      "alindi": ts, "son_yazma": ts, "sira": []}}})
        sonuc = {}

        def kos_kapi():
            sonuc["r"] = kapi(d1, "--kuru", "--bekle-dk", "2")
        th = threading.Thread(target=kos_kapi)
        th.start()
        time.sleep(4)
        c(PY, "arac/kilit.py", "birak", "__MAIN_PUSH__", "--kim", "CANLI-SAHIP", cwd=d1)
        th.join(200)
        r = sonuc["r"]
        ok("(c) beklemiş, sıra gelince geçti (0)", r.returncode == 0 and "sıradayım" not in r.stdout
           and "sırada bekliyorum" in r.stdout, "%d %s" % (r.returncode, r.stdout[-400:]))
    finally:
        canli.kill()
        temizle(t)


def s_ihlal():
    print("S5 ihlalli değişiklik → reddedilir; S6 üretilen çıktı onaysız → reddedilir")
    t, origin, d1, d2 = kur()
    try:
        eski = origin_head(origin)
        yaz(d1, "data/IHLAL", "x\n")
        commit(d1, "ihlalli", "data/IHLAL")
        r = kapi(d1)
        ok("denetle 1 → çıkış 1", r.returncode == 1 and "İHLAL" in r.stdout, "%d %s" % (r.returncode, r.stdout[-300:]))
        ok("origin değişmedi", origin_head(origin) == eski)
        ok("kilit bırakıldı", kilit_durum(d1).returncode == 0)
        # --olculemedi-kabul ihlali GEÇİRMEZ
        r = kapi(d1, "--olculemedi-kabul", "deneme")
        ok("--olculemedi-kabul ihlali geçirmez", r.returncode == 1 and origin_head(origin) == eski)
        g(d1, "reset", "-q", "--hard", "origin/main")
        yaz(d1, "data/x_parca1.js", "// motor\n")
        commit(d1, "uretilen", "data/x_parca1.js")
        r = kapi(d1, "--kuru")
        ok("üretilen çıktı onaysız → 1", r.returncode == 1 and "ÜRETİLEN" in r.stdout, "%d %s" % (r.returncode, r.stdout[-200:]))
        r = kapi(d1, "--kuru", "--uretilen-onay", "sinav")
        ok("--uretilen-onay ile geçer (0)", r.returncode == 0, r.stdout[-300:])
    finally:
        temizle(t)


# --------------------------------------------------------------------------
# 🚆 TREN sınavları (17 Ekim 2026): üç oturum = aynı klonun üç WORKTREE'si (gerçek düzen);
# kilidi canlı bir TUTUCU tutar, üç kapı sıraya girer, TUTUCU bırakınca ilk kapı lider olur.
# "Tek push" origin'in reflog'undan sayılır.
# --------------------------------------------------------------------------
def kur_tren(n=3):
    t, origin, d1, d2 = kur()
    g(origin, "config", "core.logAllRefUpdates", "true")
    g(origin, "update-ref", "-m", "sayac", "refs/heads/main", g(origin, "rev-parse", "main"))
    wt = []
    for i in range(1, n + 1):
        w = os.path.join(t, "w%d" % i)
        g(d1, "worktree", "add", "-q", "-b", "dal%d" % i, w, "origin/main")
        wt.append(w)
    return t, origin, d1, d2, wt


def push_sayisi(origin):
    return len(g(origin, "reflog", "show", "--format=%H", "main").splitlines())


def _bekle(kosul, sn=60):
    bitis = time.time() + sn
    while time.time() < bitis:
        if kosul():
            return True
        time.sleep(0.3)
    return False


def _sira(ana):
    try:
        k = _kilit_oku(ana)["kilitler"].get("__main_push__") or {}
    except (OSError, ValueError):
        return []
    return [s.get("kim") for s in k.get("sira") or []]


def tren_kos(ana, wt, kimler):
    """TUTUCU kilidi tutarken kapıları sırayla başlatır, hepsi sıraya girince bırakır.
    → {kim: CompletedProcess benzeri (returncode, stdout)}"""
    tutucu = subprocess.Popen([PY, "-c", "import time; time.sleep(600)"])
    ts = _simdi()
    _kilit_yaz(ana, {"kilitler": {"__main_push__": {"sahip": "TUTUCU", "pid": tutucu.pid,
                                                   "alindi": ts, "son_yazma": ts, "sira": []}}})
    sure = {}
    try:
        for w, kim in zip(wt, kimler):
            sure[kim] = subprocess.Popen([PY, "arac/push_kapisi.py", "--kim", kim, "--bekle-aralik", "1"],
                                         cwd=w, stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
                                         text=True, encoding="utf-8", errors="replace")
            if not _bekle(lambda: kim in _sira(ana)):
                raise RuntimeError("%s sıraya girmedi" % kim)
        c(PY, "arac/kilit.py", "birak", "__MAIN_PUSH__", "--kim", "TUTUCU", cwd=ana)
        sonuc = {}
        for kim, p in sure.items():
            out, _ = p.communicate(timeout=300)
            sonuc[kim] = subprocess.CompletedProcess(p.args, p.returncode, out, "")
        return sonuc
    finally:
        for p in sure.values():
            if p.poll() is None:
                p.kill()
        tutucu.kill()


def _origin_dosya(origin, yol):
    r = c("git", "show", "main:" + yol, cwd=origin)
    return r.stdout if r.returncode == 0 else None


def _tren_artigi(ana):
    d = os.path.join(ana, "oturumlar", "tren")
    return [f for f in os.listdir(d)] if os.path.isdir(d) else []


def s_tren_temiz():
    print("T1 tren: 3 temiz commit → tek ölçüm, TEK push; üretilmiş çatışma trende bir kez çözülür")
    t, origin, d1, d2, (w1, w2, w3) = kur_tren()
    try:
        yaz(w1, "data/yerlesimler_x.js", "A1\nB2\nA3\nA4\nA5\nA6\nA7\nA8\n")
        commit(w1, "w1", "data/yerlesimler_x.js")
        yaz(w2, "data/src.txt", "W2\ns2\ns3\ns4\ns5\ns6\ns7\ns8\n")
        uret(w2)
        commit(w2, "w2", "data/src.txt", "data/paket_01.js", "data/paket_kunye.json", "index.html")
        yaz(w3, "data/src.txt", "s1\ns2\ns3\ns4\ns5\ns6\ns7\nW3\n")
        uret(w3)
        commit(w3, "w3", "data/src.txt", "data/paket_01.js", "data/paket_kunye.json", "index.html")
        once = push_sayisi(origin)
        r = tren_kos(d1, (w1, w2, w3), ("T-W1", "T-W2", "T-W3"))
        for kim in r:
            ok("%s çıkış 0" % kim, r[kim].returncode == 0, "%d %s" % (r[kim].returncode, r[kim].stdout[-700:]))
        ok("lider 3 vagonlu tren kaldırdı", "TREN: 3 vagon" in r["T-W1"].stdout, r["T-W1"].stdout[-500:])
        ok("vagonlar trenle taşındı", all("trenle taşındı" in r[k].stdout for k in ("T-W2", "T-W3")))
        ok("TEK push (reflog +1)", push_sayisi(origin) == once + 1, "%d → %d" % (once, push_sayisi(origin)))
        ok("ölçüm bir kez", r["T-W1"].stdout.count("denetle.py → çıkış") == 1, r["T-W1"].stdout[-600:])
        ok("üretilmiş dosyalar bir kez yenilendi", r["T-W1"].stdout.count("trende BİR kez") == 1)
        src = _origin_dosya(origin, "data/src.txt") or ""
        ok("üç değişiklik de origin'de", "B2" in (_origin_dosya(origin, "data/yerlesimler_x.js") or "")
           and src.startswith("W2\n") and "W3" in src, src)
        pkt = _origin_dosya(origin, "data/paket_01.js") or ""
        ok("paket yeniden üretildi (iki satır da)", "W2" in pkt and "W3" in pkt, pkt)
        ok("index.html'de çatışma işareti yok", "<<<<<<<" not in (_origin_dosya(origin, "index.html") or "<<<<<<<"))
        bas = origin_head(origin)
        ok("üç ağaç da origin/main'e getirildi", all(g(w, "rev-parse", "HEAD") == bas for w in (w1, w2, w3)))
        ok("tren dizininde artık yok", _tren_artigi(d1) == [], str(_tren_artigi(d1)))
        ok("kilit bırakıldı", kilit_durum(d1).returncode == 0, kilit_durum(d1).stdout)
    finally:
        temizle(t)


def s_tren_catisma():
    print("T2 tren: 1 çatışan + 2 temiz → çatışan 4 ile iner, ikisi tek push ile geçer")
    t, origin, d1, d2, (w1, w2, w3) = kur_tren()
    try:
        yaz(d2, "data/yerlesimler_x.js", "A1\nA2\nA3\nX4\nA5\nA6\nA7\nA8\n")
        commit(d2, "d2", "data/yerlesimler_x.js")
        g(d2, "push", "-q", "origin", "HEAD:main")
        yaz(w1, "data/yerlesimler_x.js", "A1\nB2\nA3\nA4\nA5\nA6\nA7\nA8\n")
        commit(w1, "w1", "data/yerlesimler_x.js")
        yaz(w2, "data/yerlesimler_x.js", "A1\nA2\nA3\nY4\nA5\nA6\nA7\nA8\n")
        commit(w2, "w2 çatışır", "data/yerlesimler_x.js")
        w2_bas = g(w2, "rev-parse", "HEAD")
        yaz(w3, "js/app.js", "// app\n// w3\n")
        commit(w3, "w3", "js/app.js")
        once = push_sayisi(origin)
        r = tren_kos(d1, (w1, w2, w3), ("T-W1", "T-W2", "T-W3"))
        ok("w1 çıkış 0", r["T-W1"].returncode == 0, "%d %s" % (r["T-W1"].returncode, r["T-W1"].stdout[-700:]))
        ok("w2 çıkış 4 (ÇATIŞMA)", r["T-W2"].returncode == 4 and "ÇATIŞMA" in r["T-W2"].stdout,
           "%d %s" % (r["T-W2"].returncode, r["T-W2"].stdout[-500:]))
        ok("w3 çıkış 0", r["T-W3"].returncode == 0, "%d %s" % (r["T-W3"].returncode, r["T-W3"].stdout[-500:]))
        ok("TEK push", push_sayisi(origin) == once + 1, "%d → %d" % (once, push_sayisi(origin)))
        y = _origin_dosya(origin, "data/yerlesimler_x.js") or ""
        ok("origin: w1 + d2 var, w2 yok", "B2" in y and "X4" in y and "Y4" not in y, y)
        ok("origin: w3 var", "// w3" in (_origin_dosya(origin, "js/app.js") or ""))
        ok("w2 ağacı DEĞİŞMEDİ", g(w2, "rev-parse", "HEAD") == w2_bas)
        ok("tren dizininde artık yok", _tren_artigi(d1) == [], str(_tren_artigi(d1)))
    finally:
        temizle(t)


def s_tren_ihlal():
    print("T3 tren: 1 ihlalli + 2 temiz → ihlalli ikiye bölerek bulunur, 1 ile iner; ikisi geçer")
    t, origin, d1, d2, (w1, w2, w3) = kur_tren()
    try:
        yaz(w1, "data/yerlesimler_x.js", "A1\nB2\nA3\nA4\nA5\nA6\nA7\nA8\n")
        commit(w1, "w1", "data/yerlesimler_x.js")
        yaz(w2, "data/IHLAL", "x\n")
        commit(w2, "w2 ihlalli", "data/IHLAL")
        w2_bas = g(w2, "rev-parse", "HEAD")
        yaz(w3, "js/app.js", "// app\n// w3\n")
        commit(w3, "w3", "js/app.js")
        once = push_sayisi(origin)
        r = tren_kos(d1, (w1, w2, w3), ("T-W1", "T-W2", "T-W3"))
        ok("w1 çıkış 0", r["T-W1"].returncode == 0, "%d %s" % (r["T-W1"].returncode, r["T-W1"].stdout[-900:]))
        ok("w2 çıkış 1 (İHLAL)", r["T-W2"].returncode == 1 and "İHLAL" in r["T-W2"].stdout,
           "%d %s" % (r["T-W2"].returncode, r["T-W2"].stdout[-500:]))
        ok("w3 çıkış 0", r["T-W3"].returncode == 0, "%d %s" % (r["T-W3"].returncode, r["T-W3"].stdout[-500:]))
        ok("TEK push", push_sayisi(origin) == once + 1, "%d → %d" % (once, push_sayisi(origin)))
        ok("origin'de IHLAL yok", _origin_dosya(origin, "data/IHLAL") is None)
        ok("origin: w1 + w3 var", "B2" in (_origin_dosya(origin, "data/yerlesimler_x.js") or "")
           and "// w3" in (_origin_dosya(origin, "js/app.js") or ""))
        ok("w2 ağacı DEĞİŞMEDİ", g(w2, "rev-parse", "HEAD") == w2_bas)
        ok("ölçüm sayısı ≤ 4 (tam + ikiye bölme)", r["T-W1"].stdout.count("denetle.py → çıkış") <= 4,
           str(r["T-W1"].stdout.count("denetle.py → çıkış")))
    finally:
        temizle(t)


def s_tren_olu():
    print("T4 tren: ölü kuyruk kaydı → silinir, taşınmaz; canlı kapı tek başına geçer")
    t, origin, d1, d2, (w1, w2) = kur_tren(2)
    try:
        yaz(w1, "data/yerlesimler_x.js", "A1\nB2\nA3\nA4\nA5\nA6\nA7\nA8\n")
        commit(w1, "w1", "data/yerlesimler_x.js")
        yaz(w2, "js/app.js", "// app\n// olu\n")
        commit(w2, "ölü oturumun commit'i", "js/app.js")
        olu_commit = g(w2, "rev-parse", "HEAD")
        d = os.path.join(d1, "oturumlar", "tren")
        os.makedirs(d, exist_ok=True)
        for ad, ek in (("OLU-1.json", {}), ("OLU-2.binildi.json", {"lider": "OLU-L", "lider_pid": _olu_pid()})):
            with open(os.path.join(d, ad), "w", encoding="utf-8") as f:
                json.dump(dict({"kim": ad.split(".")[0], "pid": _olu_pid(), "repo": w2, "commit": olu_commit,
                                "an": time.time() - 100}, **ek), f)
        once = push_sayisi(origin)
        r = kapi(w1, kim="T-W1")
        ok("çıkış 0", r.returncode == 0, "%d %s" % (r.returncode, r.stdout[-600:]))
        ok("ölü kayıtlar bildirildi", r.stdout.count("ölü tren kaydı") == 2, r.stdout[-600:])
        ok("tren kalkmadı (tek başına)", "TREN:" not in r.stdout)
        ok("ölü kayıtlar silindi", _tren_artigi(d1) == [], str(_tren_artigi(d1)))
        ok("tek push", push_sayisi(origin) == once + 1)
        ok("ölü oturumun commit'i itilmedi", "// olu" not in (_origin_dosya(origin, "js/app.js") or ""))
        ok("w1 origin'de", "B2" in (_origin_dosya(origin, "data/yerlesimler_x.js") or ""))
    finally:
        temizle(t)


def main():
    for f in (s_temiz, s_uretilen_catisma, s_gercek_catisma, s_olu_kuyruk, s_ihlal,
              s_tren_temiz, s_tren_catisma, s_tren_ihlal, s_tren_olu):
        try:
            f()
        except Exception as e:
            import traceback
            traceback.print_exc()
            ok(f.__name__ + " İSTİSNA", False, str(e))
    gecen = sum(1 for _, b in SONUC if b)
    print("\nSONUÇ: %d/%d geçti" % (gecen, len(SONUC)))
    return 0 if gecen == len(SONUC) else 1


if __name__ == "__main__":
    sys.exit(main())
