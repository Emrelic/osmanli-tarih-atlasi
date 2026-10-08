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

🔴 ÖNGÖRÜ — KİRLİ AĞAÇ KOLU (TAHTA-WEB-DENETIM-1006, 6 Ekim 2026; bu kol
   ÖLÇÜMDEN ÖNCE `denetim/TAHTA-WEB-DENETIM-1006-ONGORU-K2.md`de mühürlendi).
   Evren: her kol KENDİ geçici deposu + KENDİ portu; K1–K10'un deposuna
   dokunulmaz. Kol İKİ YÖNLÜDÜR: yamasız alette ÖTER, yamalı alette geçer.
   K11 temiz (ikisi de commitli) → kes çıkış 0, iki yol izlenmiyor
   K12 `tahta.json` yalnız ÇALIŞMA AĞACINDA kirli → ön şart: çıkış 1
   K13 `tahta.json` SAHNELENMİŞ (index == disk) → ön şart: çıkış 1
       (git'in kendi reddi burada ÇALIŞMAZ; ölçüldü: mesaj kaybı da OLMAZ —
        reddetmek TASARIM KARARI, kusur yakalama değil)
   K14 yalnız `TAHTA.md` kirli, `tahta.json` temiz → çıkış 1 (git rm ATOMİK)
   K12'–K14' DEĞİŞMEZ: YARIM HÂL (HEAD yolu kaybetmiş + index hâlâ tutuyor)
       hiçbir koşulda doğmaz — o hâli `geri --uygula` KURTARMAZ.

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


# ═══════════════════════════════════════════════════════════════════════════
# K11–K14 — KİRLİ AĞAÇ KOLU (TAHTA-WEB-DENETIM-1006, 6 Ekim 2026)
#
# NİÇİN EKLENDİ: yukarıdaki K1–K10, tahta dosyalarını DEPO kurulurken ve İLK
# COMMIT'TEN ÖNCE yazıyor ⇒ `kes --uygula` bu sınavda HER ZAMAN temiz ağaçta
# koşuyordu. Kirli ağaç kolu HİÇ KURULMAMIŞTI; ve kusur tam orada:
#   `tahta_kesme.py`de paylaşılan index'ten düşürme `git rm --cached` ile
#   yapılıyor, `-f` YOK ⇒ git "staged content different from both the file
#   and the HEAD" diye REDDEDER; `git rm` ATOMİKtir ⇒ temiz olan öteki yol da
#   düşmez; ve dönüş kodu ATILIYORDU ⇒ başarısızlık SESSİZ. Sonuç: commit
#   kurulmuş ve dal ilerletilmiş, ama index dosyayı hâlâ tutuyor — HEAD'de
#   silinmiş, index'te duran YARIM hâl. `geri --uygula` o hâli KURTARMIYOR
#   ("zaten İZLENİYOR"), kurtarma yalnız ELLE `git reset --soft`.
#   17+ oturumun aynı index'i paylaştığı bir makinede "kesme anında iki yol
#   da commitli" GARANTİ DEĞİLDİR (ölçülen vaka: `tahta.py yaz` commit 128 /
#   push 1 verip iki yolu sahnelenmiş-commitlenmemiş bıraktı).
#
# 🔴 BU KOL İKİ YÖNLÜDÜR ve ALETİN DOĞRULUĞUNU SINAR:
#   yamasız alette ÖTER (yarım hâl doğar, HEAD dosyayı kaybeder) ·
#   yamalı alette geçer (çıkış 1 ve HEAD KIPIRDAMAZ, yarım hâl DOĞMAZ).
# Doğru çare kurtarmayı güçlendirmek değil, hâli DOĞMADAN kesmektir: kirli
# yol bir ÖN ŞARTTIR, commit kurulmadan önce sorulur.
# ═══════════════════════════════════════════════════════════════════════════
print()
K_GEC = tempfile.mkdtemp(prefix="tahta_kesme_kirli_")
K_AG = os.path.join(K_GEC, "ag.json")
io.open(K_AG, "w", encoding="utf-8").write(json.dumps({"jeton": JETON}))
K_SUREC = []


def k_depo(etiket):
    """Her kol KENDİ deposunu ve KENDİ sunucusunu kurar: K1–K10'un paylaşılan
    deposuna dokunulmaz, kollar birbirinin artığını devralmaz."""
    kok = os.path.join(K_GEC, etiket)
    os.makedirs(os.path.join(kok, "oturumlar"))

    def kg(*a, kontrol=True):
        r = subprocess.run(["git", "-C", kok] + list(a), capture_output=True,
                           text=True, encoding="utf-8", errors="replace")
        if kontrol and r.returncode:
            raise RuntimeError("git %s: %s" % (a, r.stderr))
        return r.stdout.strip()

    def kyaz(yol, metin):
        io.open(os.path.join(kok, yol), "w", encoding="utf-8",
                newline="\n").write(metin)

    kg("init", "-q", "-b", "main")
    kg("config", "user.name", "sinav")
    kg("config", "user.email", "sinav@ornek")
    kg("config", "core.autocrlf", "false")
    kyaz(".gitignore", "*.pyc\n")
    kyaz("oturumlar/tahta.json", mesajlar(3))
    kyaz("oturumlar/TAHTA.md", "# TAHTA\n")
    kg("add", "-A")
    kg("commit", "-q", "-m", "ilk")
    port = bos_port()
    p = subprocess.Popen([sys.executable, os.path.join(ARAC, "tahta_sunucu.py"),
                          "--ag", K_AG, "--tahta",
                          os.path.join(kok, "oturumlar", "tahta.json"),
                          "--port", str(port), "--bag", "127.0.0.1",
                          "--gunluk", os.path.join(K_GEC, "s%d.log" % port)],
                         stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    K_SUREC.append(p)
    for _ in range(150):
        try:
            socket.create_connection(("127.0.0.1", port), timeout=0.2).close()
            break
        except OSError:
            time.sleep(0.1)
    else:
        raise RuntimeError("kirli kol: sunucu kalkmadi")
    ort = dict(os.environ, TAHTA_KESME_KOK=kok, TAHTA_AG=K_AG,
               TAHTA_SUNUCU="127.0.0.1:%d" % port, PYTHONIOENCODING="utf-8",
               TAHTA_VERI=os.path.join(kok, "istemci-yerel", "tahta.json"))
    return kok, kg, kyaz, ort


def k_kes(ort):
    r = subprocess.run([sys.executable, os.path.join(ARAC, "tahta_kesme.py"),
                        "kes", "--uygula"], capture_output=True, text=True,
                       encoding="utf-8", errors="replace", env=ort, timeout=120)
    return r.returncode, r.stdout + r.stderr


def k_kol(no, etiket, kirlet, kirli_bekleniyor):
    kok, kg, kyaz, ort = k_depo("k%s" % no)
    kirlet(kg, kyaz)
    durum_once = kg("status", "--porcelain", "--", "oturumlar/tahta.json",
                    "oturumlar/TAHTA.md")
    bas = kg("rev-parse", "HEAD")
    kod, cik = k_kes(ort)
    durum_sonra = kg("status", "--porcelain", "--", "oturumlar/tahta.json",
                     "oturumlar/TAHTA.md")
    head_tutuyor = bool(kg("ls-tree", "HEAD", "--", "oturumlar/tahta.json")) and \
        bool(kg("ls-tree", "HEAD", "--", "oturumlar/TAHTA.md"))
    izleniyor = bool(kg("ls-files", "--", "oturumlar/tahta.json"))
    if kirli_bekleniyor:
        # ① ÖN ŞART (kabul edilen tasarım, 6 Ekim): kesme yolları commitli
        #    değilse kesme YAPILMAZ. Bu bir TASARIM KARARIdır, git'in kendi
        #    reddetme şartından (içerik hem dosyadan hem HEAD'den farklı)
        #    daha geniştir: sahnelenmiş kolda git reddetmez ve ölçüldü ki
        #    MESAJ KAYBI DA OLMAZ (kesmeden sonra otorite diskteki dosyadır;
        #    disk 4 → yazım 5 → `geri` sonrası git 5). Yine de reddediyoruz,
        #    çünkü sahnelenmiş bir tahta değişikliği kesme commit'ine GİRMEZ
        #    ve o oturumun sahnesi kesmeden sonra sessizce anlamsızlaşır.
        sonuc(kod == 1, "K%s) %s -> kes cikis 1 (on sart)" % (no, etiket),
              "kod %d · durum once %r" % (kod, durum_once))
        # ② DEĞİŞMEZ — tasarımdan BAĞIMSIZ, asıl kusuru yakalayan iddia:
        #    YARIM HAL hiçbir koşulda doğmamalı. Yarım hâl = HEAD yolu
        #    KAYBETMİŞ ama paylaşılan index onu HÂLÂ TUTUYOR. O hâlde
        #    `geri --uygula` "zaten İZLENİYOR" der ve KURTARMAZ.
        #    Kesme ya tamamen olur (HEAD'den de index'ten de düşer) ya hiç
        #    olmaz (HEAD kıpırdamaz) — arası yoktur.
        yarim = (not head_tutuyor) and izleniyor
        sonuc(not yarim,
              "K%s') %s -> YARIM HAL DOGMADI" % (no, etiket),
              "HEAD tutuyor %s · index tutuyor %s · durum %r -> %r"
              % (head_tutuyor, izleniyor, durum_once, durum_sonra))
    else:
        sonuc(kod == 0, "K%s) %s -> kes cikis 0" % (no, etiket), "kod %d" % kod)
        sonuc(not izleniyor and not head_tutuyor,
              "K%s') %s -> iki yol izlenmiyor" % (no, etiket),
              "izleniyor %s" % izleniyor)


try:
    k_kol("11", "TEMIZ (ikisi de commitli)", lambda kg, kyaz: None, False)
    k_kol("12", "tahta.json CALISMA AGACINDA kirli",
          lambda kg, kyaz: kyaz("oturumlar/tahta.json", mesajlar(4)), True)

    def k13(kg, kyaz):
        kyaz("oturumlar/tahta.json", mesajlar(4))
        kg("add", "--", "oturumlar/tahta.json")      # index == calisma agaci

    k_kol("13", "tahta.json SAHNELENMIS (index==disk)", k13, True)
    k_kol("14", "yalniz TAHTA.md kirli (tahta.json temiz)",
          lambda kg, kyaz: kyaz("oturumlar/TAHTA.md", "# TAHTA\nkirli\n"), True)

    # ---- ROLLBACK YÖNÜ (UMIT-K1-ONGORU-1008 P6/P7): kirli ağaçta reddedilen kesme
    #      geride TEMİZ bir durum bırakmalı; commitlenince kes+geri döngüsü mesajı
    #      kaybetmemeli.
    def k_geri(ort):
        r = subprocess.run([sys.executable, os.path.join(ARAC, "tahta_kesme.py"),
                            "geri", "--uygula"], capture_output=True, text=True,
                           encoding="utf-8", errors="replace", env=ort, timeout=120)
        return r.returncode, r.stdout + r.stderr

    YOL2 = ("oturumlar/tahta.json", "oturumlar/TAHTA.md")
    kok, kg, kyaz, ort = k_depo("k15")
    kyaz("oturumlar/tahta.json", mesajlar(4))                       # kirli
    once = (kg("rev-parse", "HEAD"), kg("ls-files", "-s", "--", *YOL2),
            kg("status", "--porcelain", "-uno"))
    kod_k, _ = k_kes(ort)
    sonra_k = (kg("rev-parse", "HEAD"), kg("ls-files", "-s", "--", *YOL2),
               kg("status", "--porcelain", "-uno"))
    sonuc(kod_k == 1 and sonra_k == once,
          "K15) kirli agacta reddedilen kesme: HEAD + index + status AYNEN ayni (rollback gerekmez)",
          "kod %d · once %r · sonra %r" % (kod_k, once[2], sonra_k[2]))
    kod_g, cik_g = k_geri(ort)
    son_g = (kg("rev-parse", "HEAD"), kg("ls-files", "-s", "--", *YOL2),
             kg("status", "--porcelain", "-uno"))
    sonuc(kod_g == 1 and "geri alınacak kesme yok" in cik_g and son_g == once,
          "K15') reddedilen kesmeden sonra `geri --uygula` -> 1 'geri alinacak kesme yok', durum DEGISMEDI",
          "kod %d · %r" % (kod_g, cik_g[-120:].strip()))

    kok, kg, kyaz, ort = k_depo("k16")
    kyaz("oturumlar/tahta.json", mesajlar(4))
    kg("add", "--", *YOL2)
    kg("commit", "-q", "-m", "tahta commitlendi", "--", *YOL2)      # operatör çaresi
    boy16 = os.path.getsize(os.path.join(kok, "oturumlar", "tahta.json"))
    kod_k, _ = k_kes(ort)
    kod_g, cik_g = k_geri(ort)
    sonuc(kod_k == 0 and kod_g == 0,
          "K16) commitlenince: kes 0, ardindan geri 0", "kes %d · geri %d" % (kod_k, kod_g))
    sonuc(len(kg("ls-files", "--", *YOL2).split()) == 2 and not kg("status", "--porcelain", "--", *YOL2)
          and os.path.getsize(os.path.join(kok, "oturumlar", "tahta.json")) == boy16
          and "M-0004" in kg("show", "HEAD:oturumlar/tahta.json"),
          "K16') kes+geri dongusu: iki yol yeniden izleniyor, durum temiz, disk ayni boyda, M-0004 git'te",
          cik_g[-120:].strip() if kod_g else "")
finally:
    for p in K_SUREC:
        p.terminate()
        try:
            p.wait(timeout=10)
        except Exception:
            p.kill()
    shutil.rmtree(K_GEC, ignore_errors=True)

print("-" * 72)
print("SONUC: %s" % ("temiz — butun ongoruler tuttu" if HATA == 0 else "%d HATA" % HATA))
sys.exit(1 if HATA else 0)
