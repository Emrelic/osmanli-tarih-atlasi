# -*- coding: utf-8 -*-
u"""SESSIZ-SIFIR-TARA-1006 — "girdi yokken sayı basmak" sınıfının TARAMASI (UMIT-W32).

KAPIYA BAĞLI DEĞİL. Elle ya da gece koşturulur, listesi OKUNUR (koordinatör kararı,
6 Ekim 2026). Kök: bu dosyanın iki üstü (koşturulduğu worktree).

    py denetim/SESSIZ-SIFIR-TARA-1006.py --cikti <dizin> --atilabilir-agac [-P 4] [--sure 150]
    py denetim/SESSIZ-SIFIR-TARA-1006.py --kapi [--atilabilir-agac]   yalnız kapıyı ölç
    py denetim/SESSIZ-SIFIR-TARA-1006.py --karsilastir <eski.tsv> <yeni.tsv>

🔴 SERT KAPI (koordinatör şartı, 6 Ekim 2026 — UMIT-W32b). Kuru koşu betiklerin bir
kısmı İZLENEN dosyalara yazar (ölçüldü: YUKLEME-0072-SINAV-A.json −3804 satır; boş
ağaçta 7, dolu ağaçta 20 dosya). Bu yüzden tarama, açılışta kökü ÖLÇER ve şu üçünden
BİRİ doğruysa HİÇBİR ŞEY YAZMADAN ÇIKIŞ 2 verir:
  ① kök ANA DEPO      (`git worktree list` İLK satırı = bu kök)
  ② ağaç TEMİZ DEĞİL  (`git status --porcelain` boş değil — yazılanı ayırt edemezsin)
  ③ `--atilabilir-agac` bayrağı YOK (koşturan, ağacın atılabilir olduğunu BEYAN eder)
git okunamazsa da 2 (ölçülemeyen kapı açık sayılmaz). Kök gömülü değil, __file__'dan.
Doğru kullanım: `git worktree add --detach <geçici> <commit>` → orada koştur → kaldır.
Sınav: `py denetim/SESSIZ-SIFIR-TARA-KAPI-SINAV-1006.py` (gerçek git durumlarıyla).

NE YAPAR
  ① EVREN: denetim/ + arac/ altında üretilmiş çıktıya (donemler.js · devletler_harita.js ·
     petek_govde.js · PETEKLER · PETEK_GOVDE · DEVLET_HARITA · DONEMLER) atıf yapan ya da
     `odak_olc`u içe aktaran betikler.
  ② AYIRIR (koşturmaz, yalnız listeler): mutlak yol taşıyan · yan etkili/ağır
     (uret_petek · git yazımı · kodla · paketle · tahta · kaynak_durum · renk_olc).
  ③ KURU KOŞU: kalanlar stdin boş, süre tavanlı, -P paralel. Çıktılar <dizin>/out/.
  ④ KOVA (çıkış kodu + çıktı):
       2           OLCULEMEDI       doğru davranış
       0 + "ölçülemedi/yüklenemedi"   T5     yasak (ölçülemedi deyip 0)
       0 + NaN/undefined              T3?    aday — elle bakılır
       0 + "<üretilmiş> 0 / YOK"       T1?    aday — elle bakılır
       1 + FileNotFound/ENOENT         T1-COKUS  1 = "ihlal" demek, olmalı 2
       1 + AttributeError/not a function  T4-COKUS
       1 + IndexError/argv/usage       ARGUMAN  bu sınıf değil
       124                             SURE
       0 (öteki)                       TEMIZ?   üretilmiş veriye dayanmıyor olabilir
  ⑤ KARŞILAŞTIRMA: iki tarama TSV'si → çıkış kodu DEĞİŞEN her betik adıyla (YAN ETKİ).

⚠️ "?" taşıyan kovalar ADAYDIR, hüküm değil. Ölçülen vaka (W32b, 6 Ekim): OK-RENK
`DEVLET_HARITA || []` deseni ve "devlet: 3" çıktısıyla T1 sayıldı; değer GERÇEKTİ
(DEVLET_HARITA kodlanmış devlet_harita_ust.js'ten tam geliyor). Desen ≠ sıfır.
"""
import io
import os
import re
import subprocess
import sys
import time
from concurrent.futures import ThreadPoolExecutor

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ATIF = re.compile(r"donemler\.js|devletler_harita\.js|petek_govde\.js|PETEKLER|PETEK_GOVDE|"
                  r"DEVLET_HARITA|window\.DONEMLER|\bDONEMLER\b|import odak_olc")
MUTLAK = re.compile(r"[Cc]:[\\/]{1,2}(atlas|Users)")
AGIR = re.compile(r"uret_petek|\"git\", *\"(commit|add|checkout|reset|push|stash)\"|"
                  r"git (commit|add|checkout|reset|push)|kodla\.py|paketle\.py|surum_damgala|"
                  r"tahta\.py|kaynak_durum|renk_olc\.py")
KENDI = {"SESSIZ-SIFIR-TARA-1006.py", "olcu_kapisi_1006.py", "OLCU-KAPISI-1006.js"}


def evren():
    tum, kos, ayri = [], [], []
    for d in ("denetim", "arac"):
        for ad in sorted(os.listdir(os.path.join(KOK, d))):
            if not ad.endswith((".py", ".js")) or ad in KENDI:
                continue
            yol = d + "/" + ad
            try:
                s = io.open(os.path.join(KOK, yol), encoding="utf-8", errors="replace").read()
            except OSError:
                continue
            if not ATIF.search(s):
                continue
            tum.append(yol)
            neden = [n for n, rx in (("mutlak", MUTLAK), ("agir", AGIR)) if rx.search(s)]
            (ayri if neden else kos).append((yol, " ".join(neden)))
    return tum, kos, ayri


def kova(kod, cikti):
    c = cikti
    if kod == 124:
        return "SURE"
    if kod == 2:
        return "OLCULEMEDI"
    if kod == 1:
        if re.search(r"IndexError|argv|usage|kullanım:", c) and not re.search(r"FileNotFound|ENOENT", c):
            return "ARGUMAN"
        if re.search(r"FileNotFound|ENOENT|hedef yok|\bYOK\b", c):
            return "T1-COKUS"
        if re.search(r"AttributeError|is not a function|has no attribute", c):
            return "T4-COKUS"
        return "COKUS-OTEKI"
    if kod == 0:
        if re.search(r"ölçülemedi|olculemedi|yüklenemedi|yuklenemedi", c, re.I):
            return "T5"
        if re.search(r"\bNaN\b|\bundefined\b", c):
            return "T3?"
        if re.search(r"(PETEKLER|PETEK_GOVDE|DONEMLER|petek|dönem|gövde)[^\n0-9]{0,12}\b0\b(?!\.)", c):
            return "T1?"
        return "TEMIZ?"
    return "KOD-%d" % kod


def kos1(yol, dizin, sure):
    komut = ["py", yol] if yol.endswith(".py") else ["node", yol]
    t0 = time.time()
    try:
        p = subprocess.run(komut, cwd=KOK, stdin=subprocess.DEVNULL, capture_output=True,
                           timeout=sure, env=dict(os.environ, PYTHONIOENCODING="utf-8"))
        kod, cikti = p.returncode, (p.stdout + p.stderr).decode("utf-8", "replace")
    except subprocess.TimeoutExpired as h:
        kod, cikti = 124, ((h.stdout or b"") + (h.stderr or b"")).decode("utf-8", "replace")
    io.open(os.path.join(dizin, "out", yol.replace("/", "__") + ".out"), "w",
            encoding="utf-8").write(cikti)
    son = [l for l in cikti.splitlines() if l.strip()][-1:] or [""]
    return yol, kod, round(time.time() - t0, 1), kova(kod, cikti), son[0][:160]


def tara(dizin, P, sure):
    os.makedirs(os.path.join(dizin, "out"), exist_ok=True)
    tum, kos, ayri = evren()
    print("EVREN %d · koşulacak %d · ayrı tutulan %d (yalnız listelenir)" % (len(tum), len(kos), len(ayri)))
    with io.open(os.path.join(dizin, "ayri.tsv"), "w", encoding="utf-8") as f:
        for y, n in ayri:
            f.write("%s\t%s\n" % (y, n))
    with ThreadPoolExecutor(P) as ex:
        sonuc = sorted(ex.map(lambda y: kos1(y[0], dizin, sure), kos))
    with io.open(os.path.join(dizin, "tarama.tsv"), "w", encoding="utf-8") as f:
        f.write("betik\tkod\tsn\tkova\tson_satir\n")
        for r in sonuc:
            f.write("%s\t%d\t%s\t%s\t%s\n" % r)
    say = {}
    for r in sonuc:
        say[r[3]] = say.get(r[3], 0) + 1
    print("KOVALAR: " + " · ".join("%s %d" % kv for kv in sorted(say.items())))
    for k in ("T5", "T3?", "T1?", "T1-COKUS", "T4-COKUS"):
        ad = [r[0].split("/")[-1] for r in sonuc if r[3] == k]
        if ad:
            print("  %-9s %s" % (k, " · ".join(ad)))
    print("TSV: " + os.path.join(dizin, "tarama.tsv"))


def oku(tsv):
    d = {}
    for i, l in enumerate(io.open(tsv, encoding="utf-8")):
        if i == 0:
            continue
        p = l.rstrip("\n").split("\t")
        d[p[0]] = (int(p[1]), p[3])
    return d


def karsilastir(eski, yeni):
    a, b = oku(eski), oku(yeni)
    degisen = [(k, a[k], b[k]) for k in sorted(set(a) & set(b)) if a[k][0] != b[k][0]]
    print("ORTAK %d · çıkış kodu DEĞİŞEN %d · yalnız eskide %d · yalnız yenide %d"
          % (len(set(a) & set(b)), len(degisen), len(set(a) - set(b)), len(set(b) - set(a))))
    for k, x, y in degisen:
        print("  %-52s %d %-11s → %d %s" % (k.split("/")[-1], x[0], x[1], y[0], y[1]))


def _git(kok, *arg):
    p = subprocess.run(["git", "-C", kok] + list(arg), capture_output=True)
    if p.returncode != 0:
        raise RuntimeError((p.stderr or b"").decode("utf-8", "replace").strip()[:160])
    return p.stdout.decode("utf-8", "replace")


def _ayni(a, b):
    return os.path.normcase(os.path.realpath(a)) == os.path.normcase(os.path.realpath(b))


def kapi(kok, atilabilir):
    u"""Sert kapı — engel nedenlerinin LİSTESİ (boş = geçer). Yazmaz, yalnız okur."""
    neden = []
    try:
        ilk = next((l[len("worktree "):] for l in _git(kok, "worktree", "list", "--porcelain").splitlines()
                    if l.startswith("worktree ")), None)
        if ilk is None:
            neden.append("ölçülemedi: `git worktree list` boş")
        elif _ayni(ilk, kok):
            neden.append("① kök ANA DEPO (%s) — atılabilir worktree'de koştur" % ilk)
        kirli = [l for l in _git(kok, "status", "--porcelain").splitlines() if l.strip()]
        if kirli:
            neden.append("② ağaç TEMİZ DEĞİL (%d satır, ilk: %s)" % (len(kirli), kirli[0].strip()))
    except (RuntimeError, OSError) as h:
        neden.append("ölçülemedi: git okunamadı (%s)" % h)
    if not atilabilir:
        neden.append("③ `--atilabilir-agac` bayrağı YOK")
    return neden


def kapi_uygula(atilabilir):
    neden = kapi(KOK, atilabilir)
    if neden:
        print("⚫ SERT KAPI — tarama KOŞMADI, hiçbir şey yazılmadı (çıkış 2):")
        for n in neden:
            print("   " + n)
        sys.exit(2)
    print("✓ SERT KAPI geçti — kök %s (atılabilir worktree, temiz, beyanlı)" % KOK)


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    a = sys.argv[1:]
    if a[:1] == ["--karsilastir"] and len(a) == 3:
        karsilastir(a[1], a[2])
    elif "--kapi" in a:
        kapi_uygula("--atilabilir-agac" in a)
    elif "--cikti" in a:
        kapi_uygula("--atilabilir-agac" in a)        # HİÇBİR yazımdan ÖNCE
        P = int(a[a.index("-P") + 1]) if "-P" in a else 4
        sure = int(a[a.index("--sure") + 1]) if "--sure" in a else 150
        tara(a[a.index("--cikti") + 1], P, sure)
    else:
        print(__doc__)
        sys.exit(2)
