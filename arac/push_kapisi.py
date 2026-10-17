# -*- coding: utf-8 -*-
"""PUSH KAPISI — `main`e giden TEK yol (Emre, 12 Ekim 2026; KAPI-2 yenilemesi 13 Ekim).

    py arac/push_kapisi.py --kim "<AD>" [--kuru] [--autostash] [--bekle-dk N] [--tek]
                           [--tuz-onay "<gerekçe>"] [--uretilen-onay "<gerekçe>"]
                           [--olculemedi-kabul "<gerekçe>"]

🚆 TREN (17 Ekim 2026): sırada bekleyen her kapı `oturumlar/tren/<kim>.json` biletine dal +
   commit yazar. Kilidi alan kapı (LİDER) canlı biletleri de trene alır: hepsini ayrı bir
   worktree'de origin/main'e sırayla rebase eder, üretilmiş dosyaları BİR kez yeniler, BİR
   `denetle` (gerekirse BİR `denetle_yayin`) koşar, BİR push ile iter. Çatışan vagon 4, ihlalli
   vagon (ikiye bölerek bulunur) 1 ile iner; kalanlar geçer. Her vagonun bekleyen kapısı
   `<kim>.sonuc.json`u okur, aynı kodla çıkar, ağacını itilen commit'e getirir. TUZ/ÜRETİLEN
   dosyalı commit, --kuru ve --tek trene binmez (tek başına geçer). Ölü sürecin bileti silinir.

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
import glob, json, os, re, shutil, subprocess, sys, tempfile, threading, time

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PY = sys.executable
KILIT_AD = "__MAIN_PUSH__"
TUZ = {"arac/uret_petek.py", "arac/renkler.py", "arac/girdi.py", "arac/motor_onbellek.py"}
# MOTOR çıktısı (uret_petek → kodla) — yalnız koşucu iter. Ham .js'ler gitignore'da,
# burada TAKİPLİ türevler sayılır. `paket_*.js` BURADA DEĞİL: `paketle.py yenile`
# kaynak veriden türer ve veri yazan oturum onu kendisi tazeler (yoksa site eski veriyi okur).
URETILEN_DESEN = ("data/*parca*.js", "data/*_ust.js", "data/bolgeler.js",
                  "data/bolge_pencere.js", "data/devirler.js")
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


IS = {"yer": KOK}   # git/rebase/üretim adımlarının koştuğu ağaç — tren kendi worktree'sini koyar


def _y():
    return IS["yer"]


def git(*a, cwd=None, kontrol=True):
    r = subprocess.run(["git", *a], cwd=cwd or _y(), capture_output=True, text=True,
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
    cwd = cwd or _y()
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
    r = subprocess.run(["git", "show", ":%d:%s" % (n, yol)], cwd=_y(), capture_output=True)
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
                           cwd=_y(), capture_output=True)
        if r.returncode != 0:
            return False
        with open(os.path.join(_y(), INDEX), "wb") as f:
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
        if os.path.isdir(os.path.join(_y(), git("rev-parse", "--git-path", ad).stdout.strip())):
            return True
    return False


def rebase_cozumlu(hedef="origin/main", autostash=False, onto=None):
    """Rebase eder; üretilmiş dosya çatışmasını çözer. → çözülen dosya listesi.
    Gerçek veri çatışmasında rebase'i geri alır ve `Catisma` fırlatır.
    `onto=(uc, taban, commit)` ⇒ `git rebase --onto uc taban commit` (tren vagonu)."""
    arg = ["--onto", *onto] if onto else [*(["--autostash"] if autostash else []), hedef]
    r = git("rebase", *arg, kontrol=False)
    cozulen = []
    for _ in range(500):
        if r.returncode == 0:
            return cozulen
        u = _cozulmemis()
        if not u:
            # çatışma yok ama rebase durdu: boşalmış commit ya da başka sebep
            if _rebase_suruyor():
                if subprocess.run(["git", "diff", "--cached", "--quiet"], cwd=_y()).returncode == 0:
                    r = git("rebase", "--skip", kontrol=False)
                else:
                    r = subprocess.run(["git", "-c", "core.editor=true", "rebase", "--continue"], cwd=_y(),
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
        if subprocess.run(["git", "diff", "--cached", "--quiet"], cwd=_y()).returncode == 0:
            r = git("rebase", "--skip", kontrol=False)
        else:
            r = subprocess.run(["git", "-c", "core.editor=true", "rebase", "--continue"], cwd=_y(),
                               capture_output=True, text=True, encoding="utf-8", errors="replace")
    git("rebase", "--abort", kontrol=False)
    raise Olculemedi("rebase 500 adımda bitmedi — geri alındı")


def uretilmisleri_yenile():
    """`paketle.py yenile` + `surum_damgala.py`; değişen ÜRETİLMİŞ dosyaları (yalnız onları)
    son commit'e amend eder. → amend edilen dosya sayısı."""
    for ad, komut in (("paketle.py yenile", [PY, "arac/paketle.py", "yenile"]),
                      ("surum_damgala.py", [PY, "arac/surum_damgala.py"])):
        k = kos(ad, komut, _y())
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
    r = subprocess.run([PY, "arac/surum_damgala.py", "--yayin"], cwd=_y(), capture_output=True,
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


def kilit_bekle(kim, bekle_dk, aralik=None, bilet=None):
    """→ 0 kilit sende · 1 zaman aşımı (sıradan çıkıldı) · 2 ölçülemedi ·
    5 TRENLE TAŞINDI (sonuç `TASINAN["sonuc"]`ta; kilit/sıra bırakıldı)."""
    aralik = BEKLE_ARALIK if aralik is None else aralik
    pid = str(os.getpid())
    bitis = time.time() + bekle_dk * 60.0
    ilk, son_yazi, bindi = True, 0.0, False

    def tasindi_mi():
        s = bilet_sonuc(bilet) if bilet else None
        if s:
            _kilit("birak", KILIT_AD, "--kim", kim, "--sessiz")   # sıradaysak çık, sahipsek devret
            TASINAN["sonuc"] = s
        return bool(s)

    while True:
        if tasindi_mi():
            return 5
        _kilit("olu-temizle", KILIT_AD, "--kim", kim, "--sessiz")
        r = _kilit("al", KILIT_AD, "--kim", kim, "--pid", pid, "--sessiz")
        if r.returncode == 0:
            if tasindi_mi():   # lider sonucu yazıp kilidi bize devretmiş olabilir
                return 5
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
        b = bilet_binildi(bilet) if bilet else None
        if b and not bindi:
            print("🚆 trene bindim — lider %s commit'imi de götürüyor; sonucu bekliyorum." % b.get("lider"))
        bindi = bool(b)
        if time.time() >= bitis and not bindi:
            if bilet and not bilet_geri_al(bilet):
                continue        # tam o anda trene bindik — zaman aşımı yok, sonuç beklenir
            _kilit("birak", KILIT_AD, "--kim", kim, "--sessiz")   # yalnız sıradan çıkar
            return 1
        uyku = aralik if bindi else min(aralik, max(0.0, bitis - time.time()))
        son = time.time() + uyku
        while time.time() < son:     # sonuç dosyası gelince hemen uyan
            if bilet and os.path.exists(bilet + ".sonuc.json"):
                break
            time.sleep(min(1.0, max(0.0, son - time.time())))


class Nabiz(threading.Thread):
    """Kapı koşarken kilidin son-yazma saatini tazeler (60 dk düşme kuralı ölçümde işlemesin)."""

    def __init__(self, kim, aralik=None):
        super().__init__(daemon=True)
        self.kim, self.dur, self.aralik = kim, threading.Event(), aralik or NABIZ_ARALIK

    def run(self):
        while not self.dur.wait(self.aralik):
            _kilit("al", KILIT_AD, "--kim", self.kim, "--pid", str(os.getpid()), "--sessiz")


# --------------------------------------------------------------------------
# 🚆 TREN — toplu geçiş (17 Ekim 2026: 11 post-it oturumu kapıda 20 dk – 1,5 sa sıra bekledi)
# --------------------------------------------------------------------------
# Kapıya giren her oturum BİLET yazar: `oturumlar/tren/<kim>.json` {kim, pid, repo, dal, commit,
# kabul}. Kilidi alan LİDER, canlı biletleri `<kim>.binildi.json`a çevirerek (atomik ad değişimi)
# trene alır; hepsini ayrı bir worktree'de origin/main'e sırayla rebase eder, üretilmiş dosyaları
# BİR kez yeniler, BİR ölçüm koşar ve BİR push ile iter. İhlal çıkarsa suçlu vagon ikiye bölerek
# bulunur ve trenden iner; çatışan vagon rebase'te iner. HER vagona `<kim>.sonuc.json` yazılır
# (kod 0/1/2/4 + itilen sha) — bekleyen kapı süreci onu okuyup aynı kodla çıkar. Hiçbir commit
# sessizce düşmez: lider çökerse bilet ölü-lider sayılır, vagon kilidi alınca kendisi lider olur.
TASINAN = {}


def tren_dizini():
    import kilit                       # kilit.DURUM ana deponun oturumlar/'ını gösterir (worktree'de de)
    return os.path.join(os.path.dirname(kilit.DURUM), "tren")


def _canli(pid):
    import kilit
    return kilit.surec_canli_mi(pid)


def _anahtar(kim):
    return re.sub(r"[^A-Za-z0-9_.-]", "_", kim)[:80] or "_"


def _json_oku(yol):
    try:
        with open(yol, encoding="utf-8") as f:
            return json.load(f)
    except (OSError, ValueError):
        return None


def _json_yaz(yol, veri):
    gecici = yol + ".tmp%d" % os.getpid()
    with open(gecici, "w", encoding="utf-8") as f:
        json.dump(veri, f, ensure_ascii=False, indent=1)
    for n in range(20):                # Windows: okuyan süreç dosyayı açık tutuyorsa kısa bekle
        try:
            os.replace(gecici, yol)
            return
        except PermissionError:
            time.sleep(0.1)
    os.replace(gecici, yol)


def _sil(yol):
    try:
        os.remove(yol)
    except FileNotFoundError:
        pass


def bilet_yaz(ar):
    """→ bilet kök yolu (uzantısız). Önceki koşudan kalan sonuç/binildi kaydı silinir."""
    d = tren_dizini()
    os.makedirs(d, exist_ok=True)
    a = os.path.join(d, _anahtar(ar["--kim"]))
    for ek in (".sonuc.json", ".binildi.json"):
        _sil(a + ek)
    _json_yaz(a + ".json", {
        "kim": ar["--kim"], "pid": os.getpid(), "repo": KOK,
        "dal": git("rev-parse", "--abbrev-ref", "HEAD", cwd=KOK).stdout.strip(),
        "commit": git("rev-parse", "HEAD", cwd=KOK).stdout.strip(),
        "kabul": ar["--olculemedi-kabul"], "girdi": time.strftime("%Y-%m-%dT%H:%M:%S"),
        "an": time.time()})
    return a


def bilet_sonuc(a):
    s = _json_oku(a + ".sonuc.json")
    return s if s and s.get("pid") == os.getpid() else None


def bilet_binildi(a):
    """Bilet CANLI bir liderin treninde mi → binildi kaydı ya da None."""
    b = _json_oku(a + ".binildi.json")
    if b and b.get("pid") == os.getpid() and b.get("lider_pid") and _canli(b["lider_pid"]):
        return b
    return None


def bilet_geri_al(a):
    """Bileti iptal eder. → True iptal edildi · False trene binmiş (lider canlı; sonuç beklenmeli)."""
    try:
        os.remove(a + ".json")
        return True
    except FileNotFoundError:
        pass
    if bilet_binildi(a):
        return False
    b = _json_oku(a + ".binildi.json")
    if b and b.get("pid") == os.getpid():
        _sil(a + ".binildi.json")      # lideri ölmüş tren — bilet bizim, iptal
    return True


def bilet_sil(a):
    if a:
        for ek in (".json", ".binildi.json", ".sonuc.json"):
            b = _json_oku(a + ek)
            if b is None or b.get("pid") == os.getpid():
                _sil(a + ek)


def _ileri(commit):
    return int(git("rev-list", "--count", "origin/main.." + commit).stdout.strip())


def _vagon_dosyalari(commit):
    taban = git("merge-base", "origin/main", commit).stdout.strip()
    return [f for f in git("diff", "--name-only", taban, commit).stdout.splitlines() if f]


def _trene_uygun(commit):
    """TUZ ya da ÜRETİLEN dosyası olan commit trene binmez (onay ister, tek başına geçer)."""
    try:
        dos = _vagon_dosyalari(commit)
    except Olculemedi:
        return False
    return not (set(dos) & TUZ) and not any(uretilen_mi(f) for f in dos)


def tren_topla(kim):
    """Kilit sende iken: kuyruktaki canlı biletleri trene alır. → vagon listesi (lider HARİÇ)."""
    d = tren_dizini()
    if not os.path.isdir(d):
        return []
    benim = os.getpid()
    adaylar = []
    for yol in glob.glob(os.path.join(d, "*.json")):
        if yol.endswith(".sonuc.json"):
            s = _json_oku(yol)
            if s and not _canli(s.get("pid")):
                _sil(yol)              # sahibi ölmüş, okunmamış sonuç
            continue
        v = _json_oku(yol)
        if not v or v.get("pid") == benim:
            continue
        if not _canli(v.get("pid")):
            print("   🧹 ölü tren kaydı silindi: %s (pid %s, commit %s)"
                  % (v.get("kim"), v.get("pid"), str(v.get("commit"))[:9]))
            _sil(yol)
            continue
        if yol.endswith(".binildi.json") and v.get("lider_pid") not in (None, benim) \
                and _canli(v["lider_pid"]):
            continue                   # (olmamalı: kilit tek) canlı başka liderin vagonu
        adaylar.append((v.get("an") or 0, yol, v))
    vagonlar = []
    for _, yol, v in sorted(adaylar, key=lambda x: x[0]):
        c = v.get("commit") or ""
        if git("cat-file", "-e", c + "^{commit}", kontrol=False).returncode != 0 and v.get("repo"):
            git("fetch", "--quiet", v["repo"], c, kontrol=False)    # ayrı klon: nesneyi getir
        if git("cat-file", "-e", c + "^{commit}", kontrol=False).returncode != 0:
            print("   ⚠️  %s: commit %s okunamadı — trene alınmadı, kendi sırasında geçer" % (v["kim"], c[:9]))
            continue
        if not _trene_uygun(c):
            print("   %s: TUZ/ÜRETİLEN dosyası var — trene binmez, kendi sırasında tek başına geçer" % v["kim"])
            continue
        hedef = os.path.join(d, _anahtar(v["kim"])) + ".binildi.json"
        if not yol.endswith(".binildi.json"):
            try:
                os.replace(yol, hedef)  # atomik: vagon zaman aşımında bileti silemez artık
            except FileNotFoundError:
                continue                # tam o anda geri aldı
        v.update(lider=kim, lider_pid=benim)
        _json_yaz(hedef, v)
        vagonlar.append(v)
    return vagonlar


def _tren_kur(vagonlar, sonuclar):
    """Tren worktree'sinde origin/main'den başlayıp vagonları sırayla bindirir.
    Çatışan vagon `sonuclar`a 4 ile düşer. → (dahil, değişen dosyalar)."""
    git("checkout", "-q", "-f", "--detach", "origin/main")
    git("clean", "-fdq", kontrol=False)
    dahil, cozulen = [], []
    for v in vagonlar:
        if v["pid"] in sonuclar:
            continue
        uc = git("rev-parse", "HEAD").stdout.strip()
        taban = git("merge-base", "origin/main", v["commit"]).stdout.strip()
        try:
            cozulen += rebase_cozumlu(onto=(uc, taban, v["commit"]))
            dahil.append(v)
        except Catisma as e:
            git("checkout", "-q", "-f", "--detach", uc)
            sonuclar[v["pid"]] = (4, str(e))
            print("   🟠 %s trenden indi — %s" % (v["kim"], e))
    dosyalar = [f for f in git("diff", "--name-only", "origin/main", "HEAD").stdout.splitlines() if f]
    if dahil and (cozulen or any(f == INDEX or paket_mi(f) or f.startswith(("data/", "js/", "css/"))
                                 for f in dosyalar)):
        print("   üretilmiş dosyalar trende BİR kez yenileniyor (paketle + sürüm damgası)")
        uretilmisleri_yenile()
    if dahil and any(f.startswith(SITE_ONEK) for f in dosyalar):
        damga_yaz()
    return dahil, [f for f in git("diff", "--name-only", "origin/main", "HEAD").stdout.splitlines() if f]


def _tren_dene(vagonlar, sonuclar, olculen):
    """Vagonları kurar ve ölçer. → (kod, mesaj, dahil) — kod 0 geçti · 1 red · 2 ölçülemedi.
    Aynı ağaç (tree sha) bir kez ölçülür."""
    dahil, dosyalar = _tren_kur(vagonlar, sonuclar)
    if not dahil:
        return 0, "", []
    agac = git("rev-parse", "HEAD^{tree}").stdout.strip()
    if agac in olculen:
        return olculen[agac] + (dahil,)
    print("   🚆 ölçülüyor: %s" % ", ".join(v["kim"] for v in dahil))
    kabuller = [v.get("kabul") for v in dahil]
    kabul = "; ".join(sorted(set(kabuller))) if all(kabuller) else None
    try:
        dosya_denetimi(dosyalar, {"--tuz-onay": None, "--uretilen-onay": None})
        olc(dosyalar, kabul)
        olculen[agac] = (0, "")
    except Red as e:
        olculen[agac] = (1, str(e))
    except Olculemedi as e:
        olculen[agac] = (2, str(e))
    return olculen[agac] + (dahil,)


def _suclu_bul(iyi, aday, hata, sonuclar, olculen):
    """`iyi`nin üstünde `aday` düşüyor (hata=(kod, mesaj)). İkiye bölerek suçluyu indirir.
    → geçen vagon kümesi."""
    aday = [v for v in aday if v["pid"] not in sonuclar]
    if not aday:
        return iyi
    if len(aday) == 1:
        sonuclar[aday[0]["pid"]] = hata
        print("   🔴 %s trenden indi — %s" % (aday[0]["kim"], hata[1].splitlines()[0][:200]))
        return iyi
    sol, sag = aday[:len(aday) // 2], aday[len(aday) // 2:]
    k, m, dahil = _tren_dene(iyi + sol, sonuclar, olculen)
    if k == 0:
        return _suclu_bul(dahil, sag, hata, sonuclar, olculen)
    iyi = _suclu_bul(iyi, sol, (k, m), sonuclar, olculen)
    sag = [v for v in sag if v["pid"] not in sonuclar]
    if not sag:
        return iyi
    k, m, dahil = _tren_dene(iyi + sag, sonuclar, olculen)
    if k == 0:
        return dahil
    return _suclu_bul(iyi, sag, (k, m), sonuclar, olculen)


def _tren_ayikla(vagonlar, sonuclar, olculen):
    """→ geçen vagonlar; tren worktree'sinin HEAD'i onların ÖLÇÜLMÜŞ ağacıdır."""
    for _ in range(len(vagonlar) + 2):
        k, m, dahil = _tren_dene(vagonlar, sonuclar, olculen)
        if k == 0:
            return dahil
        if k == 2:
            # ölçülemedi bir vagona yüklenemez: kabulü olmayanlar 2 ile iner, kabullüler yeniden ölçülür
            kabulsuz = [v for v in dahil if not v.get("kabul")]
            for v in (kabulsuz or dahil):
                sonuclar[v["pid"]] = (2, m)
            if not kabulsuz:
                return []
            vagonlar = [v for v in dahil if v.get("kabul")]
            continue
        vagonlar = _suclu_bul([], dahil, (k, m), sonuclar, olculen)
    raise Olculemedi("tren ayıklaması yakınsamadı")


def tren_kos(ar, lider_vagon, vagonlar):
    """Lider: trendeki bütün vagonları geçirir, her vagona sonuç yazar. → liderin kendi çıkış kodu."""
    hepsi = [lider_vagon] + vagonlar
    print("🚆 TREN: %d vagon — %s" % (len(hepsi), ", ".join(v["kim"] for v in hepsi)))
    sonuclar, itilen = {}, None
    yer = tempfile.mkdtemp(prefix="atlas-tren-")
    os.rmdir(yer)
    try:
        git("fetch", "origin", "--quiet", cwd=KOK)
        git("worktree", "add", "--detach", yer, "origin/main", cwd=KOK)
        IS["yer"] = yer
        for _ in range(3):
            git("fetch", "origin", "--quiet")
            for v in hepsi:
                if v["pid"] not in sonuclar and _ileri(v["commit"]) == 0:
                    sonuclar[v["pid"]] = (0, "itilecek commit yok (zaten origin/main'de)")
            kalan = [v for v in hepsi if v["pid"] not in sonuclar]
            if not kalan:
                break
            gecen = _tren_ayikla(kalan, sonuclar, {})
            if not gecen:
                break
            print("⑤ push — tren: %s" % ", ".join(v["kim"] for v in gecen))
            r = git("push", "origin", "HEAD:main", kontrol=False)
            if r.returncode != 0:
                if "rejected" in r.stderr or "fetch first" in r.stderr or "non-fast-forward" in r.stderr:
                    print("   reddedildi — başka biri itti; tren baştan kurulur.")
                    continue
                raise Olculemedi("push → %d: %s" % (r.returncode, r.stderr.strip()[:300]))
            git("fetch", "origin", "--quiet")
            h, o = git("rev-parse", "HEAD").stdout.strip(), git("rev-parse", "origin/main").stdout.strip()
            if h != o:
                raise Olculemedi("push sonrası origin/main %s ≠ HEAD %s" % (o[:8], h[:8]))
            print("⑥ origin/main = %s ✓ (tek push, %d vagon)" % (h[:8], len(gecen)))
            itilen = h
            for v in gecen:
                sonuclar[v["pid"]] = (0, "trenle itildi (lider %s)" % ar["--kim"])
            break
        for v in hepsi:
            sonuclar.setdefault(v["pid"], (2, "3 turda da push reddedildi"))
    except Exception as e:
        ad = "%s: %s" % (type(e).__name__, e)
        print("⚪ TREN ARIZASI: " + ad)
        for v in hepsi:
            sonuclar.setdefault(v["pid"], (2, "tren arızası — " + ad))
    finally:
        IS["yer"] = KOK
        git("worktree", "remove", "--force", yer, kontrol=False, cwd=KOK)
        git("worktree", "prune", kontrol=False, cwd=KOK)
        shutil.rmtree(yer, ignore_errors=True)
        d = tren_dizini()
        for v in vagonlar:             # ÖNCE sonuç, SONRA sıradan çıkar: vagon hiç sonuçsuz kalmaz
            kod, mesaj = sonuclar.get(v["pid"], (2, "sonuç yazılamadı"))
            _json_yaz(os.path.join(d, _anahtar(v["kim"])) + ".sonuc.json",
                      {"kim": v["kim"], "pid": v["pid"], "commit": v["commit"], "kod": kod,
                       "mesaj": mesaj, "itilen": itilen if kod == 0 else None,
                       "lider": ar["--kim"], "ne_zaman": time.strftime("%Y-%m-%dT%H:%M:%S")})
            if v["kim"] != ar["--kim"]:
                _kilit("birak", KILIT_AD, "--kim", v["kim"], "--sessiz")
    print("🚆 TREN SONUCU:")
    for v in hepsi:
        kod, mesaj = sonuclar[v["pid"]]
        print("   %s %-24s %s · %s" % ({0: "🟢", 1: "🔴", 4: "🟠"}.get(kod, "⚪"), v["kim"],
                                     v["commit"][:9], mesaj.splitlines()[0][:160]))
    kod, mesaj = sonuclar[lider_vagon["pid"]]
    return vagon_bitir(kod, mesaj, lider_vagon["commit"], itilen if kod == 0 else None)


def vagon_bitir(kod, mesaj, commit, itilen):
    """Vagonun (lider ya da taşınan) kendi ağacında sonucu uygular ve basar. → çıkış kodu."""
    if kod == 0:
        if itilen:
            git("fetch", "origin", "--quiet", cwd=KOK, kontrol=False)
            if git("rev-parse", "HEAD", cwd=KOK).stdout.strip() == commit:
                r = git("reset", "--keep", itilen, cwd=KOK, kontrol=False)
                if r.returncode == 0:
                    print("   ağaç origin/main'e (%s) getirildi." % itilen[:9])
                else:
                    print("   ⚠️  push TAMAM ama ağaç origin/main'e getirilemedi (yerel değişiklik çakışıyor):"
                          " git reset --keep %s" % itilen)
            else:
                print("   ⚠️  HEAD kapıya girdiğinden beri değişti — yeni commit'ler İTİLMEDİ; kapıyı yeniden koştur.")
        print("🟢 PUSH KAPISI: tamam — %s" % mesaj)
    elif kod == 4:
        print("🟠 ÇATIŞMA: %s\n   kilit bırakıldı; çatışmayı çöz (origin tarafını al, değişikliğini "
              "yeniden uygula) ve kapıyı yeniden koştur." % mesaj)
    elif kod == 1:
        print("🔴 REDDEDİLDİ: %s" % mesaj)
    else:
        print("⚪ ÖLÇÜLEMEDİ: %s" % mesaj)
    return kod


def arguman(argv):
    ar = {"--kim": None, "--tuz-onay": None, "--uretilen-onay": None, "--olculemedi-kabul": None,
          "--bekle-dk": None, "--bekle-aralik": None, "--kuru": False, "--autostash": False,
          "--tek": False}
    i = 0
    while i < len(argv):
        a = argv[i]
        if a in ("--kuru", "--autostash", "--tek"):
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
    # 🚆 tren bileti: --kuru ve --tek bilet yazmaz (kuru kimseyi taşımaz, kimseye binmez)
    bilet = None
    if not (ar["--kuru"] or ar["--tek"]):
        try:
            bilet = bilet_yaz(ar)
        except (OSError, Olculemedi) as e:
            print("   ⚠️  tren bileti yazılamadı (%s) — tek başına geçilecek" % e)
    try:
        return _kapi(ar, bekle, bilet)
    finally:
        bilet_sil(bilet)


def _kapi(ar, bekle, bilet):
    print("① kilit " + KILIT_AD)
    k = kilit_bekle(ar["--kim"], bekle, ar["--bekle-aralik"], bilet)
    if k == 5:
        s = TASINAN["sonuc"]
        print("🚆 trenle taşındı — lider %s" % s.get("lider"))
        return vagon_bitir(s["kod"], s.get("mesaj") or "", s.get("commit"), s.get("itilen"))
    if k == 1:
        print("🟡 %.0f dk içinde sıra gelmedi — sıradan çıkıldı, push yok. Yeniden koştur." % bekle)
        return 1
    if k != 0:
        print("⚪ kilit ÖLÇÜLEMEDİ — push yok.")
        return 2
    nabiz = Nabiz(ar["--kim"])
    nabiz.start()
    # 🔴 --kuru AĞACI DEĞİŞTİRMEZ (15 Ekim 2026, KOŞU 25). Ölçüm itilecek commit'ten yapıldığı için
    #    kuru da rebase eder; eskiden rebase + amend KALICI kalıyordu ve C:\atlas-kosu25'in HEAD'i
    #    59bc89d71 → 43d2d5b3e sessizce değişti. Artık HEAD her yolda (geçti/red/çatışma) geri alınır.
    kuru_bas = git("rev-parse", "HEAD").stdout.strip() if ar["--kuru"] else None
    try:
        if bilet:
            # lider olduk: kendi biletimizi kimse taşımasın; kuyrukta bilet varsa TREN kalkar
            for ek in (".json", ".binildi.json"):
                _sil(bilet + ek)
            git("fetch", "origin", "--quiet")
            bas = git("rev-parse", "HEAD").stdout.strip()
            vagonlar = tren_topla(ar["--kim"]) if _trene_uygun(bas) else []
            if vagonlar:
                return tren_kos(ar, {"kim": ar["--kim"], "pid": os.getpid(), "repo": KOK,
                                     "commit": bas, "kabul": ar["--olculemedi-kabul"]}, vagonlar)
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
        if kuru_bas:
            kuru_geri_al(kuru_bas)
        nabiz.dur.set()
        _kilit("birak", KILIT_AD, "--kim", ar["--kim"], "--sessiz")


def kuru_geri_al(bas):
    """--kuru sonunda HEAD'i kurudan önceki commit'e döndürür (yerel değişiklikler korunur)."""
    if _rebase_suruyor():
        git("rebase", "--abort", kontrol=False)
    simdi = git("rev-parse", "HEAD").stdout.strip()
    if simdi == bas:
        print("   --kuru: ağaç DEĞİŞMEDİ (HEAD %s)." % bas[:9])
        return
    r = git("reset", "--keep", bas, kontrol=False)
    if r.returncode == 0 and git("rev-parse", "HEAD").stdout.strip() == bas:
        print("   --kuru: rebase GERİ ALINDI — HEAD %s → %s (kurudan önceki hâl)." % (simdi[:9], bas[:9]))
    else:
        print("🟠 --kuru: HEAD GERİ ALINAMADI — ağaç rebase'li kaldı (HEAD %s, kurudan önce %s).\n"
              "   Yerel değişiklik çakışıyor olabilir. Elle: git reset --keep %s\n   %s"
              % (simdi[:9], bas[:9], bas, (r.stdout + r.stderr).strip()[-300:]))


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
