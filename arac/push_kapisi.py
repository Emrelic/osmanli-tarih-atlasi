# -*- coding: utf-8 -*-
"""PUSH KAPISI — `main`e giden TEK yol (Emre, 12 Ekim 2026; KAPI-2 yenilemesi 13 Ekim).

    py arac/push_kapisi.py --kim "<AD>" [--kuru] [--autostash] [--bekle-dk N]
                           [--tuz-onay "<gerekçe>"] [--uretilen-onay "<gerekçe>"]
                           [--olculemedi-kabul "<gerekçe>"]

Koordinatör düzeni bırakıldı ⇒ "`main`in tek yazıcısı koordinatör" kuralının
YERİNE bu kapı geçer: kişi değil, KAPI. Sıra:

  ① `kilit.py al __MAIN_PUSH__` — aynı makinede iki push aynı anda koşmaz.
     Kilit başkasındaysa kapı SIRADA BEKLER (her 20 sn yoklar; `--bekle-dk`, varsayılan
     120, 0 = beklemeden çık) — "yeniden koştur" döngüsüne gerek yok. Kayıt `--pid` ile
     yazılır: süreci ÖLMÜŞ sıra/sahip kaydı güvenle temizlenir (`kilit.py olu-temizle`;
     pid'siz ya da canlı kayda dokunulmaz). Kapı koşarken kilidin son-yazma saati
     5 dakikada bir tazelenir (60 dk düşme kuralı ölçümün ortasında işlemesin).
  ② fetch · gerideysen rebase. ÜRETİLMİŞ dosyalar (`data/paket_*.js`, `data/paket_kunye.json`,
     `index.html`) çatışırsa KAPI ÇÖZER: paket dosyalarında origin tarafı alınır,
     index.html'de `?v=` damgaları yok sayılarak üç yönlü birleştirilir; sonra
     `paketle.py yenile` + `surum_damgala.py` yeniden koşar ve sonuç son commit'e AMEND edilir
     (rebase sonrası damga her zaman yeniden artırılır). GERÇEK veri çatışması
     (yerlesimler*.js vb.) ⇒ rebase geri alınır, kilit bırakılır, ÇIKIŞ 4 (ÇATIŞMA).
  ③ itilecek dosya listesi:
       · TUZ dosyası (uret_petek · renkler · girdi · motor_onbellek) ⇒ `--tuz-onay`
         şart: koşu HAVVA'da sürüyor olabilir ve BU MAKİNE onu GÖREMEZ (§9.1 ④)
       · ÜRETİLEN çıktı (`data/*parca*.js`, `*_ust.js`, …) ⇒ `--uretilen-onay`
         şart: üretilen dosyayı yalnız koşucu (HAVVA) iter
       · tek dosya > 95 MiB ⇒ RED (GitHub 100 MiB sert sınırı)
       · çözülmemiş git çatışma işareti (satır başı 7×'<' ya da 7×'>') ⇒ RED
         (arsiv/ denetim/ dersler/ hariç; 13 Ekim'de index.html'i bozan hata)
  ④ ÖLÇÜM AYRI WORKTREE'DE, İTİLECEK COMMIT'TEN (KİLİDİN İÇİNDE): ana checkout ölçüm
     zemini DEĞİLDİR (başka oturumların yazmadığı değişiklikleri + bayat yerel
     `devletler_harita.js` — 12 Ekim'de ana checkout'ta denetle 2 verdi).
     coz-c (İKİ dosya) → `denetle.py` çıkış 0 ŞART. Site dosyası (index.html ·
     js/ · css/ · data/ · assets/) değiştiyse ayrıca `denetle_yayin.py` 0 ŞART.
     Çıkış 2 (ölçülemedi) yalnız `--olculemedi-kabul "<gerekçe>"` ile geçer ve
     gerekçe basılır; çıkış 1 (İHLAL) HİÇBİR bayrakla geçmez.
  ⑤ `git push origin HEAD:main` — reddedilirse (başka makine itti) ②'den
     yeniden, en çok 3 tur. Git makineler arası kilidin kendisidir.
  ⑥ origin/main == HEAD geri okunur; kilit HER yolda bırakılır.

ÇIKIŞ: 0 itildi / itilecek yok · 1 REDDEDİLDİ (kural) ya da kilit sırası zaman aşımı ·
       2 ÖLÇÜLEMEDİ / arıza · 3 yanlış kullanım · 4 ÇATIŞMA (gerçek veri çatışması;
       kilit bırakıldı, rebase geri alındı — çöz, yeniden koştur). 2 TEMİZ DEĞİLDİR (CLAUDE.md §3).
"""
import glob, os, re, shutil, subprocess, sys, tempfile, threading, time

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PY = sys.executable
KILIT_AD = "__MAIN_PUSH__"
TUZ = {"arac/uret_petek.py", "arac/renkler.py", "arac/girdi.py", "arac/motor_onbellek.py"}
# MOTOR çıktısı (uret_petek → kodla) — yalnız koşucu iter. Ham .js'ler gitignore'da,
# burada TAKİPLİ türevler sayılır. `paket_*.js` BURADA DEĞİL: `paketle.py yenile`
# kaynak veriden türer ve veri yazan oturum onu kendisi tazeler (yoksa site eski veriyi okur).
URETILEN_DESEN = ("data/*parca*.js", "data/*_ust.js", "data/bolgeler.js",
                  "data/devirler.js")
# Rebase çatışmasında KAPININ çözdüğü üretilmiş dosyalar (paketle.py + surum_damgala.py çıktısı).
PAKET_DESEN = ("data/paket_*.js", "data/paket_kunye.json")
INDEX = "index.html"
SITE_ONEK = ("index.html", "js/", "css/", "data/", "assets/")
CAKISMA_DESEN = re.compile(rb"^(?:<{7}|>{7})(?: |\r?$)", re.M)
CAKISMA_ATLA = ("arsiv/", "denetim/", "dersler/")
DAMGA_DESEN = re.compile(rb"\?v=[^\"'\s>]*")
# window.SURUM (genel damga, yalniz kapi yazar) da rebase birlestirmesinde damga sayilir;
# silinmez, sabit yer tutucuya cevrilir ki satir korunsun (damga_yaz yeniden yazar).
SURUM_DESEN = re.compile(rb'window\.SURUM="r\d+"')
SINIR_RED = 95 * 1024 * 1024
SINIR_UYARI = 90 * 1024 * 1024
BEKLE_DK_VARSAYILAN = 120.0
BEKLE_ARALIK = 20.0       # sn — kuyruk yoklama aralığı
NABIZ_ARALIK = 300.0      # sn — kilit son-yazma tazeleme


class Red(Exception):
    pass


class Olculemedi(Exception):
    pass


class Catisma(Exception):
    pass


def git(*a, cwd=None, kontrol=True):
    r = subprocess.run(["git", *a], cwd=cwd or KOK, capture_output=True, text=True,
                       encoding="utf-8", errors="replace")
    if kontrol and r.returncode != 0:
        raise Olculemedi("git %s → %d: %s" % (" ".join(a), r.returncode, r.stderr.strip()[:300]))
    return r


def kos(adim, komut, cwd):
    """Komutu koşturur, çıkış kodunu DÖNDÜRÜR ve basar — zincirlemez (CLAUDE.md §9)."""
    t = time.time()
    r = subprocess.run(komut, cwd=cwd, capture_output=True, text=True,
                       encoding="utf-8", errors="replace")
    print("   %s → çıkış %d (%ds)" % (adim, r.returncode, time.time() - t))
    if r.returncode != 0:
        kuyruk = (r.stdout or "").strip().splitlines()[-12:]
        for s in kuyruk:
            print("      | " + s)
    return r.returncode


def uretilen_mi(yol):
    import fnmatch
    return any(fnmatch.fnmatch(yol, d) for d in URETILEN_DESEN)


def paket_mi(yol):
    import fnmatch
    return any(fnmatch.fnmatch(yol, d) for d in PAKET_DESEN)


def cakisma_isareti_tara(dosyalar, rev="HEAD", cwd=None):
    """İtilecek commit'teki dosyalarda çözülmemiş git çatışma işareti var mı?

    13 Ekim 2026: index.html'e 300 işaret satırı commit edildi (rebase'te `?v=` damga satırları
    çatıştı), yayında kronolojinin altında düz yazı olarak göründü; denetle ve denetle_yayin
    ikisi de 0 verdi. Yalnız `<<<<<<< ` ve `>>>>>>> ` satır başları aranır: tek başına
    `=======` Markdown/RST'de meşrudur. Belgelerin alıntı yaptığı dizinler hariç.
    `arac/git-kancalar/pre_push.py` aynı fonksiyonu `git push`un kendisinde de çağırır."""
    cwd = cwd or KOK
    bulunan = []
    for f in dosyalar:
        if f.startswith(CAKISMA_ATLA):
            continue
        r = subprocess.run(["git", "show", rev + ":" + f], cwd=cwd, capture_output=True)
        if r.returncode != 0 or b"\0" in r.stdout[:8192]:
            continue  # silinen ya da ikili dosya
        n = len(CAKISMA_DESEN.findall(r.stdout))
        if n:
            ilk = next(i for i, s in enumerate(r.stdout.split(b"\n"), 1) if CAKISMA_DESEN.match(s))
            bulunan.append("%s (%d işaret satırı, ilki satır %d)" % (f, n, ilk))
    if bulunan:
        raise Red("ÇÖZÜLMEMİŞ ÇATIŞMA İŞARETİ itiliyor — yayında düz yazı olarak görünür:\n      "
                  + "\n      ".join(bulunan))


def dosya_denetimi(dosyalar, ar):
    cakisma_isareti_tara(dosyalar)
    tuz = sorted(set(dosyalar) & TUZ)
    if tuz and not ar["--tuz-onay"]:
        raise Red("TUZ dosyası itiliyor: %s — koşu HAVVA'da sürüyor olabilir ve bu makine "
                  "GÖREMEZ. HAVVA'da koşu yoksa: --tuz-onay \"<nasıl doğruladın>\"" % ", ".join(tuz))
    ur = [f for f in dosyalar if uretilen_mi(f)]
    if ur and not ar["--uretilen-onay"]:
        raise Red("ÜRETİLEN çıktı itiliyor (%d): %s … — yalnız koşucu iter. Koşu yayınıysa: "
                  "--uretilen-onay \"<koşu adı>\"" % (len(ur), ", ".join(ur[:4])))
    for f in dosyalar:
        r = git("cat-file", "-s", "HEAD:" + f, kontrol=False)
        if r.returncode != 0:
            continue  # silinen dosya
        b = int(r.stdout.strip())
        if b > SINIR_RED:
            raise Red("%s %.1f MiB — GitHub 100 MiB sert sınırı (pay < %%5)" % (f, b / 2**20))
        if b > SINIR_UYARI:
            print("   ⚠️  %s %.1f MiB — 100 MiB'a pay %%%.1f" % (f, b / 2**20, 100 - b / 2**20))


def olc(dosyalar, kabul=None):
    """İtilecek commit'in ayrı worktree'sinde coz-c + denetle (+ denetle_yayin)."""
    yer = tempfile.mkdtemp(prefix="atlas-push-")
    os.rmdir(yer)
    print("④ ölçüm worktree'si: %s (taban %s)" % (yer, git("rev-parse", "--short", "HEAD").stdout.strip()))
    git("worktree", "add", "--detach", yer, "HEAD")
    try:
        for hedef, ek in (("data/devletler_harita.js", []), ("data/donemler.js", ["donem"])):
            k = kos("coz-c " + hedef, [PY, "arac/kodla.py", "coz-c", "data", hedef, *ek], yer)
            if k != 0:
                raise Olculemedi("coz-c %s çıkış %d — D8 ölçülemez" % (hedef, k))
        for ad, komut, sart in (("denetle.py", [PY, "arac/denetle.py"], True),
                                ("denetle_yayin.py (site dosyası değişti)", [PY, "arac/denetle_yayin.py"],
                                 any(f.startswith(SITE_ONEK) for f in dosyalar))):
            if not sart:
                continue
            k = kos(ad, komut, yer)
            if k == 1:
                raise Red("%s İHLAL (1)" % ad)
            if k == 2 and kabul:
                # 12 Ekim 2026: main'in KENDİSİ ayrı worktree'de 2 veriyordu (D8 körlüğü,
                # 18 hat) ⇒ bayraksız kapı hiçbir push'a izin vermezdi. 1 ASLA geçmez.
                print("   ⚠️  %s ÖLÇÜLEMEDİ (2) — GEREKÇEYLE GEÇİLDİ: %s" % (ad, kabul))
            elif k != 0:
                raise Olculemedi("%s çıkış %d (bilerek: --olculemedi-kabul \"<gerekçe>\")" % (ad, k))
        if not any(f.startswith(SITE_ONEK) for f in dosyalar):
            print("   denetle_yayin.py atlandı — site dosyası değişmedi")
    finally:
        git("worktree", "remove", "--force", yer, kontrol=False)
        git("worktree", "prune", kontrol=False)
        shutil.rmtree(yer, ignore_errors=True)


# --------------------------------------------------------------------------
# ② rebase + üretilmiş dosya çatışmasını kapının kendisi çözer
# --------------------------------------------------------------------------
def _cozulmemis():
    return [f for f in git("diff", "--name-only", "--diff-filter=U", kontrol=False).stdout.splitlines() if f]


def _asama(n, yol):
    r = subprocess.run(["git", "show", ":%d:%s" % (n, yol)], cwd=KOK, capture_output=True)
    return r.stdout if r.returncode == 0 else None


def _index_birlestir():
    """index.html: `?v=` damgaları yok sayılarak üç yönlü birleştir. Temizse yazar, değilse False.
    Damga satırları her commit'te değiştiği için çatışmanın tek kaynağı genelde odur; gerçek
    düzenleme (ör. yeni <script> satırı) damgasız karşılaştırmada yine de birleşir ya da çatışır."""
    yer = tempfile.mkdtemp(prefix="atlas-idx-")
    try:
        yollar = {}
        for ad, n in (("taban", 1), ("bizim", 2), ("onlarin", 3)):
            b = _asama(n, INDEX)
            if b is None:
                b = b""
            yollar[ad] = os.path.join(yer, ad)
            with open(yollar[ad], "wb") as f:
                f.write(SURUM_DESEN.sub(b'window.SURUM="r0"', DAMGA_DESEN.sub(b"", b)))
        r = subprocess.run(["git", "merge-file", "-p", yollar["bizim"], yollar["taban"], yollar["onlarin"]],
                           cwd=KOK, capture_output=True)
        if r.returncode != 0:
            return False
        with open(os.path.join(KOK, INDEX), "wb") as f:
            f.write(r.stdout)
        return True
    finally:
        shutil.rmtree(yer, ignore_errors=True)


def _origin_tarafi_al(yol):
    """Rebase sırasında `--ours` = üstüne bindirilen taraf (origin). Orada silinmişse sil."""
    r = git("checkout", "--ours", "--", yol, kontrol=False)
    if r.returncode == 0:
        git("add", "--", yol)
    else:
        git("rm", "-f", "--quiet", "--", yol, kontrol=False)


def _rebase_suruyor():
    for ad in ("rebase-merge", "rebase-apply"):
        if os.path.isdir(os.path.join(KOK, git("rev-parse", "--git-path", ad).stdout.strip())):
            return True
    return False


def rebase_cozumlu(hedef="origin/main", autostash=False):
    """Rebase eder; üretilmiş dosya çatışmasını çözer. → çözülen dosya listesi.
    Gerçek veri çatışmasında rebase'i geri alır ve `Catisma` fırlatır."""
    r = git("rebase", *(["--autostash"] if autostash else []), hedef, kontrol=False)
    cozulen = []
    for _ in range(500):
        if r.returncode == 0:
            return cozulen
        u = _cozulmemis()
        if not u:
            # çatışma yok ama rebase durdu: boşalmış commit ya da başka sebep
            if _rebase_suruyor():
                if subprocess.run(["git", "diff", "--cached", "--quiet"], cwd=KOK).returncode == 0:
                    r = git("rebase", "--skip", kontrol=False)
                else:
                    r = subprocess.run(["git", "-c", "core.editor=true", "rebase", "--continue"], cwd=KOK,
                                       capture_output=True, text=True, encoding="utf-8", errors="replace")
                continue
            raise Olculemedi("rebase durdu ama çözülmemiş dosya yok:\n" + (r.stdout + r.stderr)[-400:])
        gercek = [f for f in u if not (paket_mi(f) or f == INDEX)]
        if gercek:
            git("rebase", "--abort", kontrol=False)
            raise Catisma("GERÇEK VERİ ÇATIŞMASI (rebase geri alındı): " + ", ".join(gercek[:8])
                          + (" …" if len(gercek) > 8 else ""))
        if INDEX in u:
            if not _index_birlestir():
                git("rebase", "--abort", kontrol=False)
                raise Catisma("index.html'de damga DIŞI gerçek çatışma (rebase geri alındı)")
            git("add", "--", INDEX)
            cozulen.append(INDEX)
        for f in u:
            if f != INDEX:
                _origin_tarafi_al(f)
                cozulen.append(f)
        if subprocess.run(["git", "diff", "--cached", "--quiet"], cwd=KOK).returncode == 0:
            r = git("rebase", "--skip", kontrol=False)
        else:
            r = subprocess.run(["git", "-c", "core.editor=true", "rebase", "--continue"], cwd=KOK,
                               capture_output=True, text=True, encoding="utf-8", errors="replace")
    git("rebase", "--abort", kontrol=False)
    raise Olculemedi("rebase 500 adımda bitmedi — geri alındı")


def uretilmisleri_yenile():
    """`paketle.py yenile` + `surum_damgala.py`; değişen ÜRETİLMİŞ dosyaları (yalnız onları)
    son commit'e amend eder. → amend edilen dosya sayısı."""
    for ad, komut in (("paketle.py yenile", [PY, "arac/paketle.py", "yenile"]),
                      ("surum_damgala.py", [PY, "arac/surum_damgala.py"])):
        k = kos(ad, komut, KOK)
        if k != 0:
            raise Olculemedi("%s çıkış %d — üretilmiş dosyalar yenilenemedi" % (ad, k))
    degisen = []
    for s in git("status", "--porcelain", "--untracked-files=no").stdout.splitlines():
        yol = s[3:].strip().strip('"')
        if not (paket_mi(yol) or yol == INDEX):
            continue
        sayi = git("diff", "--numstat", "--", yol).stdout.split("\t")
        if len(sayi) >= 2 and sayi[0] == "0" and sayi[1] == "0":
            git("checkout", "--", yol)          # satır sonu gürültüsü
            continue
        degisen.append(yol)
    if degisen:
        git("add", "--", *degisen)
        git("commit", "--amend", "--no-edit", "--quiet", "--", *degisen)
        print("   üretilmiş dosyalar yenilendi ve amend edildi: %d dosya" % len(degisen))
    return len(degisen)


def damga_yaz():
    """GENEL sürüm damgasını (window.SURUM) kapıda, rebase'ten SONRA yazar ve commit eder.

    Oturumlar yalnız dosya-başı damgayı (içerikten türeyen, çatışmasız) koşar; her yayında
    değişen tek satırı yalnız bu kapı yazar — kapı kilitle sıralı olduğundan iki yazıcı olmaz.
    True = damga commit'i eklendi."""
    if git("diff", "--quiet", "--", "index.html", kontrol=False).returncode != 0 or \
       git("diff", "--cached", "--quiet", "--", "index.html", kontrol=False).returncode != 0:
        raise Red("index.html'de yazılmamış değişiklik var — kapı damgayı üstüne yazamaz; "
                  "önce commit et ya da geri al")
    r = subprocess.run([PY, "arac/surum_damgala.py", "--yayin"], cwd=KOK, capture_output=True,
                       text=True, encoding="utf-8", errors="replace")
    print("   damga: " + (r.stdout.strip().splitlines() or ["(çıktı yok)"])[-1])
    if r.returncode != 0:
        raise Olculemedi("surum_damgala.py --yayin çıkış %d: %s" % (r.returncode, r.stdout.strip()[-300:]))
    if git("diff", "--quiet", "--", "index.html", kontrol=False).returncode == 0:
        return False
    from surum_damgala import DAMGA_KONU
    onceki = git("log", "-1", "--format=%s").stdout.startswith(DAMGA_KONU)
    git("add", "--", "index.html")
    if onceki:      # kapı daha önce koştu (ölçüm düştü, yeniden deneniyor) ⇒ commit çoğalmasın
        git("commit", "-q", "--amend", "--no-edit", "--", "index.html")
    else:
        git("commit", "-q", "-m", DAMGA_KONU + " + genel sürüm damgası (push kapısı)", "--", "index.html")
    return True


def tur(ar):
    print("② fetch")
    git("fetch", "origin", "--quiet")
    geri = int(git("rev-list", "--count", "HEAD..origin/main").stdout)
    cozulen = []
    if geri:
        kirli = git("status", "--porcelain", "--untracked-files=no").stdout.strip()
        if kirli and not ar["--autostash"]:
            raise Red("ağaç %d commit geride ve takipli dosyalarda yazılmamış değişiklik var — "
                      "rebase edemem:\n%s\n   (bilerek: --autostash)" % (geri, kirli[:600]))
        print("   %d commit geride → rebase" % geri)
        cozulen = rebase_cozumlu("origin/main", ar["--autostash"])
        if cozulen:
            print("   üretilmiş dosya çatışması kapıca çözüldü: %s" % ", ".join(sorted(set(cozulen))[:6]))
    ileri = git("rev-list", "--count", "origin/main..HEAD").stdout.strip()
    if ileri == "0":
        print("itilecek commit yok.")
        return True
    dosyalar = [f for f in git("diff", "--name-only", "origin/main", "HEAD").stdout.splitlines() if f]
    if geri and (cozulen or any(f == INDEX or paket_mi(f) or f.startswith(("data/", "js/", "css/"))
                                for f in dosyalar)):
        # damga commit sayısına bağlı: rebase sonrası yeniden artırılır; paketler yeni tabandan türer
        print("   rebase sonrası üretilmiş dosyalar yenileniyor (paketle + sürüm damgası)")
        if uretilmisleri_yenile():
            dosyalar = [f for f in git("diff", "--name-only", "origin/main", "HEAD").stdout.splitlines() if f]
    if any(f.startswith(SITE_ONEK) for f in dosyalar):
        if damga_yaz():
            dosyalar = [f for f in git("diff", "--name-only", "origin/main", "HEAD").stdout.splitlines() if f]
    print("③ %s commit · %d dosya" % (ileri, len(dosyalar)))
    for f in dosyalar[:20]:
        print("      " + f)
    if len(dosyalar) > 20:
        print("      … +%d" % (len(dosyalar) - 20))
    dosya_denetimi(dosyalar, ar)
    olc(dosyalar, ar["--olculemedi-kabul"])
    if ar["--kuru"]:
        print("⑤ --kuru: push YAPILMADI — kapı geçti.")
        return True
    print("⑤ push")
    r = git("push", "origin", "HEAD:main", kontrol=False)
    if r.returncode != 0:
        if "rejected" in r.stderr or "fetch first" in r.stderr or "non-fast-forward" in r.stderr:
            print("   reddedildi — başka biri itti; baştan.")
            return False
        raise Olculemedi("push → %d: %s" % (r.returncode, r.stderr.strip()[:300]))
    git("fetch", "origin", "--quiet")
    h, o = git("rev-parse", "HEAD").stdout.strip(), git("rev-parse", "origin/main").stdout.strip()
    if h != o:
        raise Olculemedi("push sonrası origin/main %s ≠ HEAD %s" % (o[:8], h[:8]))
    print("⑥ origin/main = %s ✓" % h[:8])
    return True


# --------------------------------------------------------------------------
# ① kilit: sıra bekle · ölü kayıt temizle · nabız
# --------------------------------------------------------------------------
def _kilit(*a):
    return subprocess.run([PY, os.path.join(KOK, "arac", "kilit.py"), *a], cwd=KOK,
                          capture_output=True, text=True, encoding="utf-8", errors="replace")


def kilit_bekle(kim, bekle_dk, aralik=None):
    """→ 0 kilit sende · 1 zaman aşımı (sıradan çıkıldı) · 2 ölçülemedi."""
    aralik = BEKLE_ARALIK if aralik is None else aralik
    pid = str(os.getpid())
    bitis = time.time() + bekle_dk * 60.0
    ilk, son_yazi = True, 0.0
    while True:
        _kilit("olu-temizle", KILIT_AD, "--kim", kim, "--sessiz")
        r = _kilit("al", KILIT_AD, "--kim", kim, "--pid", pid, "--sessiz")
        if r.returncode == 0:
            if not ilk:
                print("   sıra geldi — kilit sende.")
            return 0
        if r.returncode != 1:
            print((r.stdout + r.stderr).strip()[-400:])
            return 2
        if ilk or time.time() - son_yazi > 300:
            print("🟡 başka bir push sürüyor — sırada bekliyorum (en çok %.0f dk)\n%s"
                  % (bekle_dk, "\n".join("   " + s for s in r.stdout.strip().splitlines()[-5:])))
            son_yazi = time.time()
        ilk = False
        if time.time() >= bitis:
            _kilit("birak", KILIT_AD, "--kim", kim, "--sessiz")   # yalnız sıradan çıkar
            return 1
        time.sleep(min(aralik, max(0.0, bitis - time.time())))


class Nabiz(threading.Thread):
    """Kapı koşarken kilidin son-yazma saatini tazeler (60 dk düşme kuralı ölçümde işlemesin)."""

    def __init__(self, kim, aralik=None):
        super().__init__(daemon=True)
        self.kim, self.dur, self.aralik = kim, threading.Event(), aralik or NABIZ_ARALIK

    def run(self):
        while not self.dur.wait(self.aralik):
            _kilit("al", KILIT_AD, "--kim", self.kim, "--pid", str(os.getpid()), "--sessiz")


def arguman(argv):
    ar = {"--kim": None, "--tuz-onay": None, "--uretilen-onay": None, "--olculemedi-kabul": None,
          "--bekle-dk": None, "--bekle-aralik": None, "--kuru": False, "--autostash": False}
    i = 0
    while i < len(argv):
        a = argv[i]
        if a in ("--kuru", "--autostash"):
            ar[a] = True
        elif a in ar and i + 1 < len(argv):
            ar[a] = argv[i + 1]
            i += 1
        else:
            return None
        i += 1
    for a in ("--bekle-dk", "--bekle-aralik"):
        if ar[a] is not None:
            try:
                ar[a] = float(ar[a])
            except ValueError:
                return None
    return ar if ar["--kim"] else None


def main(argv):
    ar = arguman(argv)
    if ar is None:
        print(__doc__)
        return 3
    bekle = BEKLE_DK_VARSAYILAN if ar["--bekle-dk"] is None else ar["--bekle-dk"]
    print("① kilit " + KILIT_AD)
    k = kilit_bekle(ar["--kim"], bekle, ar["--bekle-aralik"])
    if k == 1:
        print("🟡 %.0f dk içinde sıra gelmedi — sıradan çıkıldı, push yok. Yeniden koştur." % bekle)
        return 1
    if k != 0:
        print("⚪ kilit ÖLÇÜLEMEDİ — push yok.")
        return 2
    nabiz = Nabiz(ar["--kim"])
    nabiz.start()
    try:
        for n in range(3):
            if tur(ar):
                print("🟢 PUSH KAPISI: tamam")
                return 0
        print("🔴 3 turda da reddedildi — push yok.")
        return 2
    except Catisma as e:
        print("🟠 ÇATIŞMA: %s\n   kilit bırakıldı; çatışmayı çöz (origin tarafını al, değişikliğini "
              "yeniden uygula) ve kapıyı yeniden koştur." % e)
        return 4
    except Red as e:
        print("🔴 REDDEDİLDİ: %s" % e)
        return 1
    except Olculemedi as e:
        print("⚪ ÖLÇÜLEMEDİ: %s" % e)
        return 2
    finally:
        nabiz.dur.set()
        _kilit("birak", KILIT_AD, "--kim", ar["--kim"], "--sessiz")


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
