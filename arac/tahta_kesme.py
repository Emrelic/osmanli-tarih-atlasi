# -*- coding: utf-8 -*-
"""TAHTA KESMESİ — tahtayı git'ten ÇIKARAN ve GERİ ALAN tek betik (TAHTA-WEB-1004).

    py arac/tahta_kesme.py kes                         # KURU KOŞU: denetler, planı basar
    py arac/tahta_kesme.py kes --uygula [--birlestir makine/tahta-web]
    py arac/tahta_kesme.py geri                        # KURU KOŞU
    py arac/tahta_kesme.py geri --uygula               # tahtayı git'e GERİ al

Betik PUSH ETMEZ — commit'i yerelde kurar, doğrular, sonraki komutu basar.

═══════════════════════════════════════════════════════════════════════════
🔴 ÜÇ TUZAK, ÜÇÜ DE BURADA KAPALI
═══════════════════════════════════════════════════════════════════════════
① `git rm --cached` + pathspec'li commit SESSİZCE ÇALIŞMAZ (koordinatör,
  4 Ekim gecesi ölçtü): pathspec'li commit index'i değil ÇALIŞMA AĞACINI
  okur; dosya diskte durduğu için silme kaydedilmez ve commit yine
  "1 file changed" der. Başarılı GÖRÜNÜR, işi YAPMAZ.
② Düz `git rm` ise dosyayı DİSKTEN SİLER — ve EMRELIC'te o dosya tahta
  sunucusunun OTORİTE kaydıdır. Sunucu bir sonraki istekte dosyayı yok
  bulur, BOŞ tahta okur ve numarayı M-0001'den yeniden verir.
  Kaçtığımız kilitten beter bir kayıp.
③ Paylaşılan index (`paylasilan-index-sahneleme`): 17+ oturum aynı index'i
  kullanır; pathspec'siz `git commit` başkasının sahnelediğini de götürür.
  Ve `main` koşu ortasında başka bir commit'le ilerleyebilir; eski HEAD'in
  ağacıyla commit atmak o commit'i SESSİZCE GERİ ALIR.

⇒ YOL: commit ÖZEL bir index'te (GIT_INDEX_FILE) kurulur: `read-tree` →
  silme + .gitignore → `write-tree` → `commit-tree`. Dal `update-ref
  <dal> <yeni> <eski>` ile KARŞILAŞTIR-DEĞİŞTİR yapılır: arada biri commit
  attıysa güncelleme REDDEDİLİR ve baştan kurulur (5 deneme). Dosya diskten
  hiç silinmez, paylaşılan index'te yalnız bu üç yolun girdisi düzeltilir.
⇒ Ve SONUÇ DOĞRULANIR, beyana güvenilmez: `git show --name-status`ta iki
  dosya `D` görünmeli, `ls-files` boş dönmeli, `check-ignore` tutmalı,
  diskteki dosya aynı boyda durmalı. Biri tutmazsa çıkış 1.

ÖN ŞARTLAR (kes): dosya hâlâ izleniyor · yarım git işlemi yok · tahta
sunucusu ULAŞILABİLİR ve en büyük numarası yereldekinden geri DEĞİL
(sunucuya ulaşılamadan kesmek, her makineyi kendi yerel tahtasına hapseder).

ÇIKIŞ: 0 tamam/kuru koşu temiz · 1 doğrulama ya da ön şart tutmadı · 2 kullanım
SINAV: py denetim/ARAC-TAHTA-KESME-SINAV-1004.py (geçici depoda, iki yönde)
"""
import io
import json
import os
import subprocess
import sys
import tempfile

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
ARAC = os.path.dirname(os.path.abspath(__file__))
KOK = os.environ.get("TAHTA_KESME_KOK") or os.path.dirname(ARAC)

YOLLAR = ["oturumlar/tahta.json", "oturumlar/TAHTA.md"]
BAS_IM = "# >>> TAHTA-WEB-1004 kesmesi — tahta git'te DEĞİL, otorite arac/tahta_sunucu.py"
SON_IM = "# <<< TAHTA-WEB-1004 kesmesi (geri almak: py arac/tahta_kesme.py geri --uygula)"
BLOK = [BAS_IM,
        "/oturumlar/tahta.json",
        "/oturumlar/TAHTA.md",
        "/oturumlar/tahta_kuyruk.json",
        "/oturumlar/tahta_sunucu.log",
        "/oturumlar/tahta_sunucu_son.json",
        "/oturumlar/tahta.json.sunucu",
        "/oturumlar/tahta.json.makineler.json",
        "/oturumlar/*.kilit",
        SON_IM]


def g(*argv, env=None, girdi=None):
    """🔴 İKİLİ kip: metin kipinde Windows stdin'e `\\n`→`\\r\\n` çevirir ve
    .gitignore blob'u ile commit mesajı CRLF'e bulanırdı. Girdi utf-8 bayt."""
    e = dict(os.environ)
    if env:
        e.update(env)
    r = subprocess.run(["git", "-C", KOK] + list(argv), capture_output=True,
                       input=girdi.encode("utf-8") if isinstance(girdi, str) else girdi,
                       env=e)
    r.stdout = r.stdout.decode("utf-8", "replace")
    r.stderr = r.stderr.decode("utf-8", "replace")
    return r


def tamam(*argv, **kw):
    r = g(*argv, **kw)
    if r.returncode != 0:
        raise RuntimeError("git %s → %d: %s" % (" ".join(argv), r.returncode,
                                                 (r.stderr or r.stdout or "").strip()[:300]))
    return r.stdout.strip()


def izleniyor(yol):
    return bool(g("ls-files", "--", yol).stdout.strip())


def yarim_islem():
    for ad in ("MERGE_HEAD", "CHERRY_PICK_HEAD", "rebase-apply"):
        if os.path.exists(os.path.join(KOK, g("rev-parse", "--git-path", ad).stdout.strip())):
            return ad
    rm = os.path.join(KOK, g("rev-parse", "--git-path", "rebase-merge").stdout.strip())
    if os.path.isdir(rm) and any(os.path.exists(os.path.join(rm, x))
                                 for x in ("head-name", "onto")):
        return "rebase-merge"
    return None


def gitignore_icerik(agac_ya_da_commit):
    r = g("show", "%s:.gitignore" % agac_ya_da_commit)
    return r.stdout if r.returncode == 0 else ""


def blok_ekle(metin):
    if BAS_IM in metin:
        return metin
    if metin and not metin.endswith("\n"):
        metin += "\n"
    return metin + "\n" + "\n".join(BLOK) + "\n"


def blok_cikar(metin):
    if BAS_IM not in metin:
        return metin
    bas = metin.index(BAS_IM)
    son = metin.index(SON_IM, bas) + len(SON_IM)
    once = metin[:bas].rstrip("\n")
    sonra = metin[son:].lstrip("\n")
    return (once + "\n" + sonra) if sonra else (once + "\n")


def blob(metin):
    return tamam("hash-object", "-w", "--no-filters", "--stdin",
                 girdi=metin.replace("\r\n", "\n"))


def yerel_en_buyuk():
    try:
        d = json.load(io.open(os.path.join(KOK, YOLLAR[0]), encoding="utf-8"))
        return max([int(str(m.get("no", "M-0")).split("-")[-1]) for m in d] or [0])
    except Exception:
        return None


def sunucu_olc():
    """(ok, açıklama). Ölçülemiyorsa ok=False — ulaşılamayan sunucuya kesilmez."""
    sys.path.insert(0, ARAC)
    try:
        import tahta as T
        r, sebep = T._istek("GET", "/tahta/oku", sorgu={"hepsi": 1, "limit": "0"})
        adres = T._sunucu_adres()[0]
    except Exception as e:
        return False, "istemci yüklenemedi: %s" % e
    if r is None or not r.get("tamam"):
        return False, "sunucuya ULAŞILAMADI (%s)" % (sebep or (r or {}).get("sebep"))
    son = int(r.get("son_no") or 0)
    yerel = yerel_en_buyuk()
    if yerel is not None and son < yerel:
        return False, ("sunucu %s en büyük M-%04d, YEREL dosya M-%04d — sunucu GERİDE; "
                       "kesilirse %d mesaj yalnız bu makinede kalır" % (adres, son, yerel, yerel - son))
    return True, "sunucu %s ulaşılabilir · en büyük M-%04d · yerel M-%s" % (
        adres, son, ("%04d" % yerel) if yerel is not None else "—")


def _commit_kur(degistir, mesaj, ikinci_ebeveyn=None, deneme=5):
    """Özel index'te commit kurar, dalı karşılaştır-değiştir ile ilerletir.
    `degistir(env, temel)` özel index'i düzenler. Dönüş (eski, yeni)."""
    ref = tamam("symbolic-ref", "-q", "HEAD")
    for i in range(deneme):
        eski = tamam("rev-parse", "HEAD")
        if ikinci_ebeveyn:
            r = g("merge-tree", "--write-tree", eski, ikinci_ebeveyn)
            if r.returncode != 0:
                raise RuntimeError("BİRLEŞTİRME ÇATIŞTI — kesme YAPILMADI:\n%s" % r.stdout[:800])
            temel = r.stdout.split("\n", 1)[0].strip()
        else:
            temel = tamam("rev-parse", "%s^{tree}" % eski)
        fd, idx = tempfile.mkstemp(prefix="kesme_index_")
        os.close(fd)
        os.remove(idx)
        env = {"GIT_INDEX_FILE": idx}
        try:
            tamam("read-tree", temel, env=env)
            degistir(env, temel)
            agac = tamam("write-tree", env=env)
        finally:
            if os.path.exists(idx):
                os.remove(idx)
        ebeveyn = ["-p", eski] + (["-p", ikinci_ebeveyn] if ikinci_ebeveyn else [])
        yeni = tamam("commit-tree", agac, *ebeveyn, girdi=mesaj)
        r = g("update-ref", "-m", "tahta_kesme", ref, yeni, eski)
        if r.returncode == 0:
            return eski, yeni
        print("⚠️ %s bu arada ilerledi (deneme %d) — commit YENİ HEAD üstüne yeniden kuruluyor."
              % (ref, i + 1))
    raise RuntimeError("dal %d denemede de ilerledi; kesme YAPILMADI" % deneme)


def _calisma_agacini_esitle(eski, yeni, atla):
    """Birleştirmeyle değişen dosyaları diske indir — ama YALNIZ yerelde
    değiştirilmemişse. Paylaşılan index'te yalnız bu yolların girdisi döner."""
    satir = tamam("diff-tree", "-r", "--name-status", "--no-renames", eski, yeni).splitlines()
    for s in satir:
        hal, yol = s.split("\t", 1)
        if yol in atla:
            continue
        if g("diff", "--quiet", eski, "--", yol).returncode != 0:
            print("   ⚠️ %s YERELDE değiştirilmiş — diske dokunulmadı (elle bak)" % yol)
            g("reset", "-q", yeni, "--", yol)
            continue
        if hal == "D":
            g("rm", "-q", "--", yol)            # yalnız birleştirmenin sildiği yol
        else:
            tamam("checkout", yeni, "--", yol)
        print("   ↳ diske indi: %s %s" % (hal, yol))


def _gitignore_diske(yeni_metin, eski_head_metin):
    yol = os.path.join(KOK, ".gitignore")
    try:
        disk = io.open(yol, encoding="utf-8", newline="").read()
    except OSError:
        disk = ""
    if disk.replace("\r\n", "\n") == eski_head_metin.replace("\r\n", "\n"):
        hedef = yeni_metin
    else:                                       # yerelde oynanmış — yalnız bloğu uygula
        hedef = blok_ekle(disk) if BAS_IM in yeni_metin else blok_cikar(disk)
        print("   ⚠️ .gitignore yerelde değiştirilmişti — yalnız kesme bloğu uygulandı")
    io.open(yol, "w", encoding="utf-8", newline="\n").write(hedef)


def dogrula_kes(eski, yeni, boylar):
    hatalar = []
    ns = tamam("show", "--name-status", "--format=", "--first-parent", "-m", yeni)
    satirlar = {tuple(s.split("\t", 1)) for s in ns.splitlines() if "\t" in s}
    for y in YOLLAR:
        if ("D", y) not in satirlar:
            hatalar.append("commit'te `D %s` YOK (tuzak ①: silme kaydedilmemiş)" % y)
        if izleniyor(y):
            hatalar.append("%s hâlâ İZLENİYOR (ls-files)" % y)
        if g("check-ignore", "-q", "--no-index", y).returncode != 0:
            hatalar.append("%s .gitignore'a TAKILMIYOR" % y)
        tam = os.path.join(KOK, y)
        if boylar.get(y) is not None and (not os.path.exists(tam) or os.path.getsize(tam) != boylar[y]):
            hatalar.append("%s DİSKTE değişti/silindi (tuzak ②: sunucunun kaydı!)" % y)
    if ("M", ".gitignore") not in satirlar and ("A", ".gitignore") not in satirlar:
        hatalar.append("commit'te .gitignore değişikliği YOK")
    kirli = g("status", "--porcelain", "--", ".gitignore", *YOLLAR).stdout.strip()
    if kirli:
        hatalar.append("kesme yolları git status'ta kirli: %r" % kirli)
    return ns, hatalar


def kes(uygula, dal=None, sunucu=True):
    print("=" * 72)
    print("TAHTA KESMESİ — %s · depo %s" % ("UYGULA" if uygula else "KURU KOŞU", KOK))
    print("=" * 72)
    engel = []
    for y in YOLLAR:
        if not izleniyor(y):
            engel.append("%s zaten İZLENMİYOR — kesme yapılmış olabilir" % y)
    y_i = yarim_islem()
    if y_i:
        engel.append("depoda yarım git işlemi var: %s" % y_i)
    dal_sha = None
    if dal:
        r = g("rev-parse", "--verify", "%s^{commit}" % dal)
        if r.returncode != 0:
            engel.append("dal bulunamadı: %s" % dal)
        else:
            dal_sha = r.stdout.strip()
    if sunucu:
        ok, aciklama = sunucu_olc()
        print(("✓ " if ok else "🔴 ") + aciklama)
        if not ok:
            engel.append("ön şart: " + aciklama)
    else:
        print("⚠️ sunucu ölçümü ATLANDI (--sinav-sunucusuz) — yalnız SINAV için")
    print("PLAN: tek commit · %s · silinecek (diskte KALIR): %s · .gitignore'a %d satır"
          % ("birleştir " + dal if dal else "birleştirme yok", ", ".join(YOLLAR), len(BLOK) - 2))
    if engel:
        for e in engel:
            print("🔴 " + e)
        print("⇒ KESME YAPILMADI.")
        return 1
    if not uygula:
        print("⇒ KURU KOŞU temiz. Uygulamak için: py arac/tahta_kesme.py kes --uygula%s"
              % (" --birlestir " + dal if dal else ""))
        return 0
    boylar = {y: (os.path.getsize(os.path.join(KOK, y))
                  if os.path.exists(os.path.join(KOK, y)) else None) for y in YOLLAR}
    eski_gi = {}

    def degistir(env, temel):
        tamam("rm", "--cached", "-q", "--ignore-unmatch", "--", *YOLLAR, env=env)
        eski_gi["metin"] = gitignore_icerik(temel)
        eski_gi["yeni"] = blok_ekle(eski_gi["metin"])
        tamam("update-index", "--add", "--cacheinfo",
              "100644,%s,.gitignore" % blob(eski_gi["yeni"]), env=env)

    mesaj = ("TAHTA-WEB-1004 KESME — tahta git'ten cikti%s\n\n"
             "oturumlar/tahta.json + TAHTA.md izlenmekten cikti (diskte duruyor,\n"
             "otorite arac/tahta_sunucu.py). Kuran: arac/tahta_kesme.py (ozel index,\n"
             "karsilastir-degistir). Geri almak: py arac/tahta_kesme.py geri --uygula\n"
             % (" + %s birlestirildi" % dal if dal else ""))
    eski, yeni = _commit_kur(degistir, mesaj, dal_sha)
    print("✓ commit kuruldu: %s → %s" % (eski[:8], yeni[:8]))
    # paylaşılan index: yalnız bu yolların girdisi HEAD'e eşitlenir
    g("rm", "--cached", "-q", "--ignore-unmatch", "--", *YOLLAR)
    _gitignore_diske(eski_gi["yeni"], gitignore_icerik(eski))
    g("reset", "-q", yeni, "--", ".gitignore")
    if dal_sha:
        _calisma_agacini_esitle(eski, yeni, set(YOLLAR) | {".gitignore"})
    ns, hatalar = dogrula_kes(eski, yeni, boylar)
    print("git show --name-status %s:" % yeni[:8])
    for s in ns.splitlines():
        print("   " + s)
    if hatalar:
        for h in hatalar:
            print("🔴 DOĞRULANAMADI: " + h)
        print("⇒ Commit KURULDU ama doğrulama TUTMADI. Geri almak: git reset --soft %s" % eski[:8])
        return 1
    print("✓ DOĞRULANDI: iki dosya `D`, izlenmiyor, .gitignore'a takılıyor, diskte aynı boyda.")
    print("⇒ SONRAKİ: git push origin %s   (betik push ETMEZ)"
          % tamam("rev-parse", "--abbrev-ref", "HEAD"))
    print("⇒ ÇALIŞAN BEKÇİLER eski kodu bellekte taşır: sunucu makinesi DIŞINDAKİLER artık")
    print("  güncellenmeyen yerel dosyayı okur ⇒ SAĞIRDIR. Pull'dan sonra hepsi yeniden kurulmalı.")
    print("⇒ GERİ ALMAK: py arac/tahta_kesme.py geri --uygula")
    return 0


def geri(uygula):
    print("=" * 72)
    print("TAHTA KESMESİNİ GERİ AL — %s · depo %s" % ("UYGULA" if uygula else "KURU KOŞU", KOK))
    print("=" * 72)
    engel = []
    for y in YOLLAR:
        if izleniyor(y):
            engel.append("%s zaten İZLENİYOR — geri alınacak kesme yok" % y)
    if not os.path.exists(os.path.join(KOK, YOLLAR[0])):
        engel.append("%s DİSKTE YOK — geri alınacak kayıt yok (sunucu makinesinde koştur)" % YOLLAR[0])
    y_i = yarim_islem()
    if y_i:
        engel.append("depoda yarım git işlemi var: %s" % y_i)
    print("PLAN: tek commit · diskteki GÜNCEL %s yeniden izlenir · .gitignore bloğu çıkar"
          % " + ".join(YOLLAR))
    if engel:
        for e in engel:
            print("🔴 " + e)
        print("⇒ GERİ ALMA YAPILMADI.")
        return 1
    if not uygula:
        print("⇒ KURU KOŞU temiz. Uygulamak için: py arac/tahta_kesme.py geri --uygula")
        return 0
    eski_gi = {}

    def degistir(env, temel):
        for y in YOLLAR:
            tam = os.path.join(KOK, y)
            if os.path.exists(tam):
                b = tamam("hash-object", "-w", "--", y)
                tamam("update-index", "--add", "--cacheinfo", "100644,%s,%s" % (b, y), env=env)
        eski_gi["metin"] = gitignore_icerik(temel)
        eski_gi["yeni"] = blok_cikar(eski_gi["metin"])
        tamam("update-index", "--add", "--cacheinfo",
              "100644,%s,.gitignore" % blob(eski_gi["yeni"]), env=env)

    mesaj = ("TAHTA-WEB-1004 GERI ALMA — tahta yeniden git'te\n\n"
             "oturumlar/tahta.json + TAHTA.md diskteki guncel haliyle yeniden izleniyor;\n"
             "istemciler sunucuya ulasamazsa eski git yoluna (beyanli) duser.\n")
    eski, yeni = _commit_kur(degistir, mesaj)
    print("✓ commit kuruldu: %s → %s" % (eski[:8], yeni[:8]))
    _gitignore_diske(eski_gi["yeni"], gitignore_icerik(eski))
    g("reset", "-q", yeni, "--", ".gitignore", *YOLLAR)
    hatalar = []
    ns = tamam("show", "--name-status", "--format=", yeni)
    satirlar = {tuple(s.split("\t", 1)) for s in ns.splitlines() if "\t" in s}
    for y in YOLLAR:
        if os.path.exists(os.path.join(KOK, y)) and ("A", y) not in satirlar:
            hatalar.append("commit'te `A %s` YOK" % y)
        if os.path.exists(os.path.join(KOK, y)) and not izleniyor(y):
            hatalar.append("%s İZLENMİYOR" % y)
    kirli = g("status", "--porcelain", "--", ".gitignore", *YOLLAR).stdout.strip()
    if kirli:
        hatalar.append("yollar git status'ta kirli: %r" % kirli)
    print("git show --name-status %s:" % yeni[:8])
    for s in ns.splitlines():
        print("   " + s)
    if hatalar:
        for h in hatalar:
            print("🔴 DOĞRULANAMADI: " + h)
        return 1
    print("✓ DOĞRULANDI: tahta yeniden izleniyor, diskteki son hâliyle.")
    print("⇒ SONRAKİ: git push origin %s" % tamam("rev-parse", "--abbrev-ref", "HEAD"))
    print("⇒ ÖTEKİ MAKİNELER: pull'dan ÖNCE kendi yerel oturumlar/tahta.json'larını kenara")
    print("  alsınlar (izlenmeyen dosya pull'u 'would be overwritten' ile durdurur). Düşüşte")
    print("  yazılmış mesajlar tahta_kuyruk.json'da durur, kaybolmaz.")
    print("⇒ Sunucu kalıcı olarak kapalıysa her makinede ag.json'a \"tahta_sunucu\": \"yerel\"")
    print("  yaz — istemci 8 sn'lik bağlantı denemesini bırakır, doğrudan git yoluna gider.")
    return 0


def main(argv):
    if not argv or argv[0] not in ("kes", "geri"):
        print(__doc__)
        return 2
    uygula = "--uygula" in argv
    if argv[0] == "geri":
        return geri(uygula)
    dal = argv[argv.index("--birlestir") + 1] if "--birlestir" in argv and \
        argv.index("--birlestir") + 1 < len(argv) else None
    return kes(uygula, dal, sunucu="--sinav-sunucusuz" not in argv)


if __name__ == "__main__":
    try:
        sys.exit(main(sys.argv[1:]))
    except RuntimeError as e:
        print("🔴 %s" % e)
        sys.exit(1)
