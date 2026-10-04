# -*- coding: utf-8 -*-
"""TAHTA KESMESİ SINAVI — `arac/tahta_kesme.py` · iki yönde · GEÇİCİ depoda.

🔴 ÖNGÖRÜ — SINAV KOŞMADAN ÖNCE YAZILDI (4 Ekim 2026, CLAUDE.md §11).
   Evren: geçici git deposu (main + makine/tahta-web dalı, main bir commit
   önde) · başka bir oturumun SAHNELEDİĞİ ilgisiz bir değişiklik index'te ·
   127.0.0.1'de GERÇEK `tahta_sunucu.py` depodaki tahta.json'u yönetiyor.
   K1  sunucu KAPALI → kes çıkış 1, "KESME YAPILMADI", HEAD kıpırdamaz
   K2  sunucu GERİDE (yereldekinden küçük numara) → çıkış 1, HEAD kıpırdamaz
   K3  kuru koşu (sunucu açık) → çıkış 0, HEAD kıpırdamaz
   K4  TUZAK ① TERS YÖN: `git rm --cached` + pathspec'li commit → commit'te
       `D` YOK (koordinatörün ölçtüğü sessiz başarısızlık burada da doğar)
   K5  kes --uygula --birlestir → çıkış 0 · tek commit, İKİ ebeveyn ·
       name-status'ta `D oturumlar/tahta.json` + `D oturumlar/TAHTA.md` +
       `M .gitignore` + dalın değişiklikleri · iki dosya izlenmiyor ve
       .gitignore'a takılıyor · DİSKTE aynı boyda · başkasının sahnelediği
       değişiklik commit'e GİRMEDİ ve hâlâ sahnede · dal dosyaları diske indi
   K6  kesmeden sonra sunucu aynı kaydı sunuyor (3 mesaj) ve yeni yazım M-0004
   K7  ikinci kes → çıkış 1 ("zaten İZLENMİYOR")
   K8  KARŞILAŞTIR-DEĞİŞTİR: kurulum sırasında dal ilerlerse commit YENİ
       HEAD üstüne yeniden kurulur; aradaki commit KAYBOLMAZ
   K9  geri --uygula → çıkış 0 · `A` iki dosya · yeniden izleniyor · git'teki
       tahta.json sunucunun yazdığı M-0004'ü İÇERİYOR · .gitignore bloğu yok
   K10 ikinci geri → çıkış 1

KULLANIM:  py denetim/ARAC-TAHTA-KESME-SINAV-1004.py
"""
import io
import json
import os
import shutil
import socket
import subprocess
import sys
import tempfile
import time

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARAC = os.path.join(KOK, "arac")
HATA = 0


def sonuc(ok, baslik, detay=""):
    global HATA
    print(("  OK   " if ok else "  HATA ") + baslik + ((" | " + detay) if detay else ""))
    if not ok:
        HATA += 1


def bos_port():
    s = socket.socket()
    s.bind(("127.0.0.1", 0))
    p = s.getsockname()[1]
    s.close()
    return p


GEC = tempfile.mkdtemp(prefix="tahta_kesme_sinav_")
DEPO = os.path.join(GEC, "depo")
os.makedirs(os.path.join(DEPO, "oturumlar"))
os.makedirs(os.path.join(DEPO, "arac"))
JETON = "kesme-sinav-jetonu-0123456789"
AG = os.path.join(GEC, "ag.json")
io.open(AG, "w", encoding="utf-8").write(json.dumps({"jeton": JETON}))


def git(*a, kontrol=True):
    r = subprocess.run(["git", "-C", DEPO] + list(a), capture_output=True,
                       text=True, encoding="utf-8", errors="replace")
    if kontrol and r.returncode:
        raise RuntimeError("git %s: %s" % (a, r.stderr))
    return r.stdout.strip()


def yaz(yol, metin):
    io.open(os.path.join(DEPO, yol), "w", encoding="utf-8", newline="\n").write(metin)


def mesajlar(n):
    return json.dumps([{"no": "M-%04d" % i, "zaman": "2026-10-04 01:0%d" % i,
                        "kimden": "ZZ-A", "kime": "ZZ-B", "kimden_kimlik": "",
                        "mesaj": "m%d" % i, "hal": "ACIK", "cevap": "GEREKMEZ",
                        "vade": "", "okuyan": {}, "yanit_no": "", "cins": "BILGI",
                        "teyit": {}, "kapanis": "", "dayanak": "", "aciliyet": "NORMAL"}
                       for i in range(1, n + 1)], ensure_ascii=False, indent=1)


# ---- depo kurulumu
git("init", "-q", "-b", "main")
git("config", "user.name", "sinav")
git("config", "user.email", "sinav@ornek")
git("config", "core.autocrlf", "false")
yaz(".gitignore", "*.pyc\n")
yaz("oturumlar/tahta.json", mesajlar(3))
yaz("oturumlar/TAHTA.md", "# TAHTA\n")
yaz("oturumlar/baska.md", "bir\n")
yaz("arac/x.py", "X = 1\n")
git("add", "-A")
git("commit", "-q", "-m", "ilk")
git("checkout", "-q", "-b", "makine/tahta-web")
yaz("arac/x.py", "X = 2  # dal\n")
yaz("arac/yeni.py", "Y = 1\n")
git("add", "-A")
git("commit", "-q", "-m", "dal")
git("checkout", "-q", "main")
yaz("oturumlar/baska.md", "bir\niki\n")
git("commit", "-q", "-am", "main ilerledi")
# başka bir oturumun sahnelediği ilgisiz değişiklik
yaz("oturumlar/baska.md", "bir\niki\nSAHNEDE\n")
git("add", "--", "oturumlar/baska.md")

TAHTA = os.path.join(DEPO, "oturumlar", "tahta.json")
PORT, OLU, GERI_PORT = bos_port(), bos_port(), bos_port()
GERIDE = os.path.join(GEC, "geride", "tahta.json")
os.makedirs(os.path.dirname(GERIDE))
io.open(GERIDE, "w", encoding="utf-8").write(mesajlar(1))
SUREC = []


def sunucu(port, dosya):
    p = subprocess.Popen([sys.executable, os.path.join(ARAC, "tahta_sunucu.py"),
                          "--ag", AG, "--tahta", dosya, "--port", str(port),
                          "--bag", "127.0.0.1", "--gunluk", os.path.join(GEC, "s%d.log" % port)],
                         stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    SUREC.append(p)
    for _ in range(100):
        try:
            socket.create_connection(("127.0.0.1", port), timeout=0.2).close()
            return p
        except OSError:
            time.sleep(0.1)
    raise RuntimeError("sunucu kalkmadi")


def ortam(port):
    return dict(os.environ, TAHTA_KESME_KOK=DEPO, TAHTA_AG=AG,
                TAHTA_SUNUCU="127.0.0.1:%d" % port, PYTHONIOENCODING="utf-8",
                TAHTA_VERI=os.path.join(GEC, "istemci-yerel", "tahta.json"))


def kesme(argv, port):
    r = subprocess.run([sys.executable, os.path.join(ARAC, "tahta_kesme.py")] + argv,
                       capture_output=True, text=True, encoding="utf-8",
                       errors="replace", env=ortam(port), timeout=120)
    return r.returncode, r.stdout + r.stderr


print("=" * 72)
print("TAHTA KESMESI SINAVI — gecici depo %s" % DEPO)
print("=" * 72)
try:
    sunucu(PORT, TAHTA)
    sunucu(GERI_PORT, GERIDE)
    bas = git("rev-parse", "HEAD")

    kod, cik = kesme(["kes", "--uygula", "--birlestir", "makine/tahta-web"], OLU)
    sonuc(kod == 1 and "KESME YAPILMADI" in cik and git("rev-parse", "HEAD") == bas,
          "K1) sunucu KAPALI -> cikis 1, HEAD kipirdamadi", "kod %d" % kod)

    kod, cik = kesme(["kes", "--uygula"], GERI_PORT)
    sonuc(kod == 1 and "GERİDE" in cik and git("rev-parse", "HEAD") == bas,
          "K2) sunucu GERIDE -> cikis 1, HEAD kipirdamadi", "kod %d" % kod)

    kod, cik = kesme(["kes", "--birlestir", "makine/tahta-web"], PORT)
    sonuc(kod == 0 and "KURU KOŞU temiz" in cik and git("rev-parse", "HEAD") == bas,
          "K3) kuru kosu -> cikis 0, HEAD kipirdamadi", "kod %d %s" % (kod, cik[-200:] if kod else ""))

    # K4 — tuzak ①'in kendisi, ayrı bir kopyada
    kopya = os.path.join(GEC, "kopya")
    subprocess.run(["git", "clone", "-q", DEPO, kopya], check=True)
    def gk(*a):
        return subprocess.run(["git", "-C", kopya] + list(a), capture_output=True,
                              text=True, encoding="utf-8").stdout.strip()
    gk("config", "user.name", "s")
    gk("config", "user.email", "s@o")
    gk("rm", "--cached", "-q", "oturumlar/tahta.json")
    gk("commit", "-q", "-m", "tuzak", "--", "oturumlar/tahta.json")
    ns = gk("show", "--name-status", "--format=", "HEAD")
    sonuc("D\toturumlar/tahta.json" not in ns,
          "K4) TERS YON: rm --cached + pathspec commit silmeyi KAYDETMEDI (tuzak gercek)",
          "name-status: %r" % ns)

    boy = {y: os.path.getsize(os.path.join(DEPO, y)) for y in ("oturumlar/tahta.json", "oturumlar/TAHTA.md")}
    kod, cik = kesme(["kes", "--uygula", "--birlestir", "makine/tahta-web"], PORT)
    yeni = git("rev-parse", "HEAD")
    ebeveyn = git("rev-list", "--parents", "-n", "1", "HEAD").split()[1:]
    ns = git("show", "--name-status", "--format=", "--first-parent", "-m", "HEAD")
    nsk = set(ns.splitlines())
    sonuc(kod == 0 and "DOĞRULANDI" in cik, "K5) kes --uygula --birlestir -> cikis 0, DOGRULANDI",
          "kod %d %s" % (kod, cik[-400:] if kod else ""))
    sonuc(len(ebeveyn) == 2 and ebeveyn[0] == bas,
          "K5a) tek commit, IKI ebeveyn (main + dal)", str([e[:8] for e in ebeveyn]))
    sonuc({"D\toturumlar/tahta.json", "D\toturumlar/TAHTA.md", "M\t.gitignore",
           "M\tarac/x.py", "A\tarac/yeni.py"} <= nsk and "M\toturumlar/baska.md" not in nsk,
          "K5b) name-status: iki D + M .gitignore + dal degisiklikleri; sahnedeki baska.md YOK",
          ns.replace("\n", " · "))
    sonuc(not git("ls-files", "oturumlar/tahta.json", "oturumlar/TAHTA.md")
          and subprocess.run(["git", "-C", DEPO, "check-ignore", "-q", "oturumlar/tahta.json"]).returncode == 0,
          "K5c) iki dosya izlenmiyor ve .gitignore'a takiliyor")
    sonuc(all(os.path.getsize(os.path.join(DEPO, y)) == b for y, b in boy.items()),
          "K5d) dosyalar DISKTE ayni boyda (sunucunun kaydi silinmedi)")
    sonuc(git("diff", "--cached", "--name-only") == "oturumlar/baska.md"
          and "SAHNEDE" in git("show", ":oturumlar/baska.md"),
          "K5e) baskasinin sahneledigi degisiklik HALA sahnede, baska bir sey sahnede degil",
          repr(git("diff", "--cached", "--name-only")))
    sonuc(io.open(os.path.join(DEPO, "arac", "x.py"), encoding="utf-8").read() == "X = 2  # dal\n"
          and os.path.exists(os.path.join(DEPO, "arac", "yeni.py")),
          "K5f) dal dosyalari diske indi")
    durum = git("status", "--porcelain")
    sonuc(durum == "M  oturumlar/baska.md",
          "K5g) git status: yalniz sahnedeki baska.md", repr(durum))

    # K6 — sunucu kesmeden etkilenmedi
    sys.path.insert(0, ARAC)
    os.environ.update(TAHTA_AG=AG, TAHTA_SUNUCU="127.0.0.1:%d" % PORT,
                      TAHTA_VERI=os.path.join(GEC, "istemci-yerel", "tahta.json"))
    import tahta as T
    r, _ = T._istek("GET", "/tahta/oku", sorgu={"hepsi": 1})
    r2, _ = T._istek("POST", "/tahta/yaz", {"kim": "ZZ-A", "kime": "ZZ-B", "mesaj": "kesmeden sonra"})
    sonuc(r and len(r["mesajlar"]) == 3 and r2 and r2.get("no") == "M-0004",
          "K6) kesmeden sonra sunucu 3 mesaji sunuyor, yeni yazim M-0004",
          "%s / %s" % (len((r or {}).get("mesajlar", [])), (r2 or {}).get("no")))

    kod, cik = kesme(["kes", "--uygula"], PORT)
    sonuc(kod == 1 and "zaten İZLENMİYOR" in cik, "K7) ikinci kes -> cikis 1", "kod %d" % kod)

    # K8 — karşılaştır-değiştir (iç süreç)
    os.environ["TAHTA_KESME_KOK"] = DEPO
    import tahta_kesme as TK
    TK.KOK = DEPO
    sayac = {"n": 0, "araya": None}

    def degistir(env, temel):
        sayac["n"] += 1
        if sayac["n"] == 1:                     # kurulum SIRASINDA başkası commit atıyor
            yaz("oturumlar/araya.md", "araya giren commit\n")
            b = git("hash-object", "-w", "oturumlar/araya.md")
            idx = os.path.join(GEC, "araya.idx")
            e2 = dict(os.environ, GIT_INDEX_FILE=idx)
            subprocess.run(["git", "-C", DEPO, "read-tree", "HEAD"], env=e2, check=True)
            subprocess.run(["git", "-C", DEPO, "update-index", "--add", "--cacheinfo",
                            "100644,%s,oturumlar/araya.md" % b], env=e2, check=True)
            agac = subprocess.run(["git", "-C", DEPO, "write-tree"], env=e2, capture_output=True,
                                  text=True).stdout.strip()
            c = subprocess.run(["git", "-C", DEPO, "commit-tree", agac, "-p", "HEAD", "-m", "araya"],
                               capture_output=True, text=True).stdout.strip()
            git("update-ref", "refs/heads/main", c)
            sayac["araya"] = c
        TK.tamam("update-index", "--add", "--cacheinfo",
                 "100644,%s,oturumlar/k8.md" % TK.blob("k8\n"), env=env)

    eski, yeni8 = TK._commit_kur(degistir, "k8 sinavi\n")
    agacta = git("ls-tree", "-r", "--name-only", yeni8).splitlines()
    sonuc(sayac["n"] == 2 and eski == sayac["araya"] and "oturumlar/araya.md" in agacta
          and "oturumlar/k8.md" in agacta,
          "K8) dal arada ilerledi -> yeniden kuruldu, araya giren commit KAYBOLMADI",
          "deneme %d · ebeveyn==araya %s" % (sayac["n"], eski == sayac["araya"]))
    git("reset", "-q", "--", "oturumlar/araya.md", "oturumlar/k8.md")
    yaz("oturumlar/k8.md", "k8\n")

    kod, cik = kesme(["geri", "--uygula"], PORT)
    ns = git("show", "--name-status", "--format=", "HEAD")
    gi = io.open(os.path.join(DEPO, ".gitignore"), encoding="utf-8").read()
    sonuc(kod == 0 and "DOĞRULANDI" in cik, "K9) geri --uygula -> cikis 0", "kod %d %s" % (kod, cik[-300:] if kod else ""))
    sonuc({"A\toturumlar/tahta.json", "A\toturumlar/TAHTA.md"} <= set(ns.splitlines())
          and git("ls-files", "oturumlar/tahta.json") == "oturumlar/tahta.json",
          "K9a) iki dosya `A` ve yeniden izleniyor", ns.replace("\n", " · "))
    sonuc('"M-0004"' in git("show", "HEAD:oturumlar/tahta.json"),
          "K9b) git'teki tahta, sunucunun kesmeden SONRA yazdigi M-0004'u iceriyor")
    sonuc(TK.BAS_IM not in gi and gi.startswith("*.pyc"),
          "K9c) .gitignore blogu cikti, eski satirlar duruyor")
    sonuc(git("status", "--porcelain", "--", ".gitignore", "oturumlar/tahta.json", "oturumlar/TAHTA.md") == "",
          "K9d) uc yol git status'ta temiz")

    kod, cik = kesme(["geri", "--uygula"], PORT)
    sonuc(kod == 1 and "zaten İZLENİYOR" in cik, "K10) ikinci geri -> cikis 1", "kod %d" % kod)
finally:
    for p in SUREC:
        p.terminate()
        try:
            p.wait(timeout=10)
        except Exception:
            p.kill()
    shutil.rmtree(GEC, ignore_errors=True)

print("-" * 72)
print("SONUC: %s" % ("temiz — butun ongoruler tuttu" if HATA == 0 else "%d HATA" % HATA))
sys.exit(1 if HATA else 0)
