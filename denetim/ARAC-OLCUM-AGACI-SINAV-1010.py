# -*- coding: utf-8 -*-
"""SINAV — arac/olcum_agaci.py (OLCUM-AGACI-1010). İKİ YÖNDE, biri GERÇEK koşulda.

    py denetim/ARAC-OLCUM-AGACI-SINAV-1010.py [--tam]

Soruların her biri "ötmesi gerekirken öter mi" VE "susması gerekirken susar mı"
ikilisinin bir yüzüdür. GERÇEK koşul: gerçek fetch, gerçek worktree, gerçek
`kodla.py coz-c`, gerçek `denetle.py` D8 kapısı (`_d8_govde_kimlik`).
--tam: ek olarak iki ağaçta TAM `denetle.py` koşar (≈2-4 dk/ağaç) ve D8
satırını ADIYLA basar.

Sınav kendi kurduğu ağaçları kendisi kaldırır; başarısızlıkta da (finally).
"""
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile

BURA = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.dirname(BURA)
ARAC = os.path.join(KOK, "arac", "olcum_agaci.py")
PY = sys.executable
TAM = "--tam" in sys.argv
KAP = tempfile.mkdtemp(prefix="olcum_agaci_sinav_")
SONUC = []


def kos(*a, cwd=KOK):
    r = subprocess.run([PY, ARAC] + list(a), cwd=cwd, capture_output=True,
                       text=True, encoding="utf-8", errors="replace")
    return r.returncode, r.stdout + r.stderr


def git(*a, cwd=KOK):
    return subprocess.run(["git"] + list(a), cwd=cwd, capture_output=True,
                          text=True, encoding="utf-8", errors="replace")


def soru(no, ad, kosul, ayrinti=""):
    SONUC.append(bool(kosul))
    print("  %s S%-2d %s%s" % ("✓" if kosul else "✗", no, ad,
                               ("  — " + ayrinti) if ayrinti else ""))


def wt_listede(yol):
    return os.path.normcase(yol).replace("\\", "/") in \
        os.path.normcase(git("worktree", "list", "--porcelain").stdout).replace("\\", "/")


def d8_kapi(agac):
    """denetle.py'nin GERÇEK D8 gövde kapısı. 0 = geçti · 1 = raise (mesaj döner)."""
    kod = ("import sys;sys.path.insert(0,'arac');import denetle\n"
           "try:\n denetle._d8_govde_kimlik();print('GECTI')\n"
           "except Exception as e:\n print('RAISE',type(e).__name__,str(e)[:140])")
    r = subprocess.run([PY, "-c", kod], cwd=agac, capture_output=True, text=True,
                       encoding="utf-8", errors="replace")
    return r.stdout.strip().split("\n")[-1] if r.stdout.strip() else "ÇIKTI YOK " + r.stderr[-200:]


def tam_denetle(agac):
    r = subprocess.run([PY, "arac/denetle.py"], cwd=agac, capture_output=True,
                       text=True, encoding="utf-8", errors="replace")
    d8 = [s for s in r.stdout.split("\n") if s.startswith("Değişmez 8")]
    return r.returncode, d8


def main():
    print("SINAV olcum_agaci · araç %s" % ARAC)
    A = os.path.join(KAP, "hazir")
    C = os.path.join(KAP, "ciplak")
    Y = os.path.join(KAP, "yok-fetch")
    try:
        # ── kullanım (2) ────────────────────────────────────────────────
        k, _ = kos()
        soru(1, "argümansız → 2", k == 2, "çıkış %d" % k)
        k, _ = kos("hazirla", "--hedef", "devlet,uydurma", "--yol", Y)
        soru(2, "bilinmeyen hedef → 2, ağaç KURULMAZ", k == 2 and not os.path.exists(Y), "çıkış %d" % k)
        k, o = kos("kaldir", KOK)
        soru(3, "araç-yapımı olmayan ağacı kaldır → 2, ağaç YERİNDE",
             k == 2 and os.path.isdir(os.path.join(KOK, "arac")), "çıkış %d" % k)
        os.makedirs(os.path.join(KAP, "dolu"))
        k, _ = kos("hazirla", "--yol", os.path.join(KAP, "dolu"))
        soru(4, "yol zaten var → 2", k == 2, "çıkış %d" % k)

        # ── fetch başarısızlığı (3) ─────────────────────────────────────
        k, o = kos("hazirla", "--yol", Y, "--uzak", "olcum-agaci-yok-uzak")
        soru(5, "fetch başarısız → 3, ağaç KURULMAZ, listede YOK",
             k == 3 and not os.path.exists(Y) and not wt_listede(Y),
             "çıkış %d · %s" % (k, o.strip().split("\n")[-1][:90]))

        # ── GERÇEK: hazırla (0) ─────────────────────────────────────────
        # --json VERİLMEZ: varsayılan yol da sınanır (ilk sürüm onu ağacın
        # yanına yazıyordu; `C:/x` için `C:/` kökü → PermissionError, ölçüldü).
        J = os.path.join(tempfile.gettempdir(), "olcum_agaci", "hazir.olcum.json")
        if os.path.isfile(J):
            os.remove(J)
        k, o = kos("hazirla", "--yol", A)
        soru(6, "GERÇEK hazirla → 0 · varsayılan JSON <tmp>/olcum_agaci/ altında",
             k == 0 and os.path.isfile(J), "çıkış %d" % k)
        R = json.load(open(J, encoding="utf-8")) if os.path.isfile(J) else {}
        om = git("rev-parse", "origin/main").stdout.strip()
        soru(7, "taban = origin/main · HEAD..origin/main = 0",
             R.get("taban_sha") == om and R.get("geride") == 0,
             "%s · geride %s" % (str(R.get("taban_sha"))[:8], R.get("geride")))
        cz = R.get("cozulen") or []
        ok = len(cz) == 2 and all(
            c["damga_esit"] and os.path.getsize(os.path.join(A, c["dosya"])) == c["bayt"]
            for c in cz)
        soru(8, "iki gövde çözüldü · boyut diskte birebir · sha256 = damga", ok,
             " · ".join("%s %.1f MB %s… %.0fs" % (c["dosya"], c["bayt"] / 1048576,
                                                    c["sha256"][:12], c["cozme_sn"]) for c in cz))
        soru(9, "çıktı YEREL ÇÖZÜM uyarısını basıyor · kaynak siteye yüklenmiyor",
             "YEREL bir ÇÖZÜM" in o and cz and not any(c["index"]["kaynak_yukleniyor_mu"] for c in cz)
             and all(c["index"]["ust_yukleyen"] and c["index"]["parca_yukleyen"] for c in cz))

        # ── D8 kapısı İKİ YÖNDE (GERÇEK denetle.py işlevi) ──────────────
        r = git("worktree", "add", C, "origin/main", "--detach")
        d_ciplak = d8_kapi(C) if r.returncode == 0 else "kurulamadı"
        d_hazir = d8_kapi(A)
        soru(10, "çıplak ağaçta D8 kapısı RAISE (ölçülemez)", d_ciplak.startswith("RAISE"), d_ciplak[:110])
        soru(11, "hazır ağaçta D8 kapısı GEÇİYOR", d_hazir == "GECTI", d_hazir[:110])

        # ── çözme başarısızlığı (3): damgayı boz, coz ötmeli ───────────
        p = os.path.join(A, "data", "donem_parcalar.js")
        metin = open(p, encoding="utf-8", newline="").read()
        bozuk = re.sub(r'(window\.__PR_SHA=")[0-9a-f]{64}', r"\g<1>" + "0" * 64, metin, count=1)
        with open(p, "w", encoding="utf-8", newline="") as f:
            f.write(bozuk)
        k, o = kos("coz", A, "--hedef", "donem", "--json", os.path.join(KAP, "bozuk.json"))
        soru(12, "damga tutmuyor → coz 3", k == 3 and "TUTMUYOR" in o, "çıkış %d" % k)
        git("checkout", "--", "data/donem_parcalar.js", cwd=A)
        k, o = kos("coz", A, "--hedef", "donem", "--json", os.path.join(KAP, "onarik.json"))
        # ⚠️ Ölçüldü (ilk koşu, 10 Ekim): sınav 10 dk sürdü, origin/main o arada
        #    İLERLEDİ ve `coz` doğru olarak 3 verdi ("gerisinde"). Bu bir kusur
        #    değil kapının kendisi — ama S13'ün sorusu ÇÖZME'dir. İkisi ayrı basılır.
        geride = "gerisinde" in o
        soru(13, "onarılınca çözüm = damga (ters yön)",
             "= damga" in o and "TUTMUYOR" not in o and (k == 0 or (k == 3 and geride)),
             "çıkış %d%s" % (k, " · origin/main sınav sırasında İLERLEDİ ⇒ 3 DOĞRU" if geride else ""))

        if TAM:
            kc, d8c = tam_denetle(C)
            kh, d8h = tam_denetle(A)
            soru(14, "TAM denetle çıplak: çıkış 2 + D8 ÖLÇÜLEMEDİ",
                 kc == 2 and any("ÖLÇÜLEMEDİ" in s for s in d8c), "çıkış %d · %s" % (kc, (d8c or ["-"])[0][:100]))
            soru(15, "TAM denetle hazır: D8 ÖLÇÜLDÜ (ÖLÇÜLEMEDİ yok)",
                 d8h and not any("ÖLÇÜLEMEDİ" in s for s in d8h), "çıkış %d · %s" % (kh, " | ".join(d8h)[:160]))

        # ── kaldır (0) ve tekrar (2) ───────────────────────────────────
        k, _ = kos("kaldir", A)
        soru(16, "kaldir → 0, dizin YOK, listede YOK",
             k == 0 and not os.path.exists(A) and not wt_listede(A), "çıkış %d" % k)
        k, _ = kos("kaldir", A)
        soru(17, "aynı ağacı ikinci kez kaldır → 2", k == 2, "çıkış %d" % k)
    finally:
        for y in (A, C, Y):
            if os.path.exists(y) or wt_listede(y):
                git("worktree", "remove", "--force", y)
        git("worktree", "prune")
        shutil.rmtree(KAP, ignore_errors=True)
        try:
            os.remove(os.path.join(tempfile.gettempdir(), "olcum_agaci", "hazir.olcum.json"))
        except OSError:
            pass
    n, g = len(SONUC), sum(SONUC)
    print("SONUÇ %d/%d %s" % (g, n, "GEÇTİ" if g == n else "KALDI"))
    return 0 if g == n else 1


if __name__ == "__main__":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass
    sys.exit(main())
