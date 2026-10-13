# -*- coding: utf-8 -*-
"""PUSH KAPISI — `main`e giden TEK yol (Emre, 12 Ekim 2026).

    py arac/push_kapisi.py --kim "<AD>" [--kuru] [--autostash]
                           [--tuz-onay "<gerekçe>"] [--uretilen-onay "<gerekçe>"]
                           [--olculemedi-kabul "<gerekçe>"]

Koordinatör düzeni bırakıldı ⇒ "`main`in tek yazıcısı koordinatör" kuralının
YERİNE bu kapı geçer: kişi değil, KAPI. Sıra:

  ① `kilit.py al __MAIN_PUSH__` — aynı makinede iki push aynı anda koşmaz
  ② fetch · gerideysen rebase (çatışma ⇒ abort + DUR; çözmeye kalkmaz)
  ③ itilecek dosya listesi:
       · TUZ dosyası (uret_petek · renkler · girdi · motor_onbellek) ⇒ `--tuz-onay`
         şart: koşu HAVVA'da sürüyor olabilir ve BU MAKİNE onu GÖREMEZ (§9.1 ④)
       · ÜRETİLEN çıktı (`data/*parca*.js`, `*_ust.js`, …) ⇒ `--uretilen-onay`
         şart: üretilen dosyayı yalnız koşucu (HAVVA) iter
       · tek dosya > 95 MiB ⇒ RED (GitHub 100 MiB sert sınırı)
       · çözülmemiş git çatışma işareti (satır başı 7×'<' ya da 7×'>') ⇒ RED
         (arsiv/ denetim/ dersler/ hariç; 13 Ekim'de index.html'i bozan hata)
  ④ ÖLÇÜM AYRI WORKTREE'DE, İTİLECEK COMMIT'TEN: ana checkout ölçüm zemini
     DEĞİLDİR (başka oturumların yazmadığı değişiklikleri + bayat yerel
     `devletler_harita.js` — 12 Ekim'de ana checkout'ta denetle 2 verdi).
     coz-c (İKİ dosya) → `denetle.py` çıkış 0 ŞART. Site dosyası (index.html ·
     js/ · css/ · data/ · assets/) değiştiyse ayrıca `denetle_yayin.py` 0 ŞART.
     Çıkış 2 (ölçülemedi) yalnız `--olculemedi-kabul "<gerekçe>"` ile geçer ve
     gerekçe basılır; çıkış 1 (İHLAL) HİÇBİR bayrakla geçmez.
  ⑤ `git push origin HEAD:main` — reddedilirse (başka makine itti) ②'den
     yeniden, en çok 3 tur. Git makineler arası kilidin kendisidir.
  ⑥ origin/main == HEAD geri okunur; kilit HER yolda bırakılır.

ÇIKIŞ: 0 itildi / itilecek yok · 1 REDDEDİLDİ (kural) · 2 ÖLÇÜLEMEDİ / arıza ·
       3 yanlış kullanım. 2 TEMİZ DEĞİLDİR (CLAUDE.md §3).
"""
import glob, os, re, shutil, subprocess, sys, tempfile, time

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
SITE_ONEK = ("index.html", "js/", "css/", "data/", "assets/")
CAKISMA_DESEN = re.compile(rb"^(?:<{7}|>{7})(?: |\r?$)", re.M)
CAKISMA_ATLA = ("arsiv/", "denetim/", "dersler/")
SINIR_RED = 95 * 1024 * 1024
SINIR_UYARI = 90 * 1024 * 1024


class Red(Exception):
    pass


class Olculemedi(Exception):
    pass


def git(*a, cwd=KOK, kontrol=True):
    r = subprocess.run(["git", *a], cwd=cwd, capture_output=True, text=True,
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


def cakisma_isareti_tara(dosyalar, rev="HEAD", cwd=KOK):
    """İtilecek commit'teki dosyalarda çözülmemiş git çatışma işareti var mı?

    13 Ekim 2026: index.html'e 300 işaret satırı commit edildi (rebase'te `?v=` damga satırları
    çatıştı), yayında kronolojinin altında düz yazı olarak göründü; denetle ve denetle_yayin
    ikisi de 0 verdi. Yalnız `<<<<<<< ` ve `>>>>>>> ` satır başları aranır: tek başına
    `=======` Markdown/RST'de meşrudur. Belgelerin alıntı yaptığı dizinler hariç.
    `arac/git-kancalar/pre_push.py` aynı fonksiyonu `git push`un kendisinde de çağırır."""
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


def tur(ar):
    print("② fetch")
    git("fetch", "origin", "--quiet")
    geri = int(git("rev-list", "--count", "HEAD..origin/main").stdout)
    if geri:
        kirli = git("status", "--porcelain", "--untracked-files=no").stdout.strip()
        if kirli and not ar["--autostash"]:
            raise Red("ağaç %d commit geride ve takipli dosyalarda yazılmamış değişiklik var — "
                      "rebase edemem:\n%s\n   (bilerek: --autostash)" % (geri, kirli[:600]))
        print("   %d commit geride → rebase" % geri)
        r = git("rebase", *(["--autostash"] if ar["--autostash"] else []), "origin/main", kontrol=False)
        if r.returncode != 0:
            git("rebase", "--abort", kontrol=False)
            raise Red("rebase ÇATIŞTI — geri alındı, elle çöz. Üretilen data/*.js çatışması "
                      "birleştirilmez, YENİDEN ÜRETİLİR.\n" + r.stdout[-600:])
    ileri = git("rev-list", "--count", "origin/main..HEAD").stdout.strip()
    if ileri == "0":
        print("itilecek commit yok.")
        return True
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


def arguman(argv):
    ar = {"--kim": None, "--tuz-onay": None, "--uretilen-onay": None, "--olculemedi-kabul": None,
          "--kuru": False, "--autostash": False}
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
    return ar if ar["--kim"] else None


def main(argv):
    ar = arguman(argv)
    if ar is None:
        print(__doc__)
        return 3
    print("① kilit " + KILIT_AD)
    k = subprocess.run([PY, os.path.join(KOK, "arac", "kilit.py"), "al", KILIT_AD, "--kim", ar["--kim"]],
                       cwd=KOK).returncode
    if k == 1:
        print("🟡 başka bir push sürüyor — sıradasın; kilit devredilince yeniden koştur.")
        return 1
    if k != 0:
        print("⚪ kilit ÖLÇÜLEMEDİ (%d) — push yok." % k)
        return 2
    try:
        for n in range(3):
            if tur(ar):
                print("🟢 PUSH KAPISI: tamam")
                return 0
        print("🔴 3 turda da reddedildi — push yok.")
        return 2
    except Red as e:
        print("🔴 REDDEDİLDİ: %s" % e)
        return 1
    except Olculemedi as e:
        print("⚪ ÖLÇÜLEMEDİ: %s" % e)
        return 2
    finally:
        subprocess.run([PY, os.path.join(KOK, "arac", "kilit.py"), "birak", KILIT_AD,
                        "--kim", ar["--kim"], "--sessiz"], cwd=KOK)


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
