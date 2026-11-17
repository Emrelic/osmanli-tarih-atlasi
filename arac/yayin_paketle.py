"""YAYIN PAKETİ — GitHub Pages'e giden dosyalar (P2, 16 Kasım 2026).

NEDEN: Pages "branch" kipinde TÜM depoyu yayınlar (916 MB, sınır 1 GB, %91). Sitenin
çalışma zamanında okumadığı klasörler (denetim, oturumlar, veri-kaynak, glm, gemini,
arac, arsiv, dersler) yayına girmesin diye bu betik YALNIZ site dosyalarını bir hedef
klasöre kopyalar; GitHub Actions (`.github/workflows/yayin.yml`) o klasörü yayınlar.

KULLANIM:  py arac/yayin_paketle.py <hedef-klasör>
  Hedef boşaltılır, dosyalar kopyalanır, boyut basılır. Çıkış 0 temiz · 1 sınır aşıldı ·
  2 beklenen dosya yok.

SİTE KÜMESİ (allowlist — çalışma zamanı yalnız bunları okur; js/*.js'teki
`denetim/…` `oturumlar/…` anmaları YORUMDUR, ölçüldü 16 Kasım):
  kök: index.html · sw.js · manifest.webmanifest · (varsa) CNAME · .nojekyll
  klasör: css/ js/ data/ assets/
📌 P1 ② (16 Kasım 2026): `data/parca_manifest.js` varken site tam havuzları
  (`data/devlet_parcalar.js` 76 MB, `data/donem_parcalar.js` 15 MB) İSTEMEZ — yalnız
  `?parca=0` ve manifestsiz eski düzen ister. Sonraki fazda bu ikisi (ve katman 1
  dosyaları değil!) yayın paketinden DIŞLANABİLİR (~91 MB); bu fazda bilerek dokunulmadı
  (geri dönüş yolu ve araç girdisi olarak duruyorlar).
YENİ KLASÖR gerekirse (ör. yeni bir `fonts/`) BURAYA eklenmeli; yoksa canlıda 404.
"""
import os, shutil, sys

KOK_DOSYALAR = ["index.html", "sw.js", "manifest.webmanifest", "CNAME", "404.html"]
KLASORLER = ["css", "js", "data", "assets", "forum"]   # forum/: Kahvehane F1 (17 Kasım 2026)
ZORUNLU = ["index.html", "sw.js", "manifest.webmanifest", "css/style.css", "js/app.js", "assets/ikon.svg"]
SINIR_MB = 900          # Pages sınırı 1 GB; 100 MB'lık pay
TEK_DOSYA_MB = 95       # GitHub 100 MiB sert sınırı


def main(hedef):
    depo = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    if os.path.exists(hedef):
        shutil.rmtree(hedef)
    os.makedirs(hedef)
    toplam = 0
    sayi = 0
    buyuk = []
    for d in KOK_DOSYALAR:
        s = os.path.join(depo, d)
        if os.path.isfile(s):
            shutil.copy2(s, os.path.join(hedef, d))
            toplam += os.path.getsize(s); sayi += 1
    # YALNIZ git'in İZLEDİĞİ dosyalar: worktree'de `coz-c` ile çözülmüş 400 MB'lık ham
    # dosyalar (devletler_harita.js, donemler.js) izlenmez ve yayına GİRMEMELİ.
    import subprocess
    ls = subprocess.run(["git", "ls-files", "-z", "--"] + KLASORLER, cwd=depo,
                        capture_output=True).stdout.decode("utf-8").split("\0")
    for r in [x for x in ls if x]:
        s = os.path.join(depo, r)
        if not os.path.isfile(s):
            continue
        t = os.path.join(hedef, r)
        os.makedirs(os.path.dirname(t), exist_ok=True)
        shutil.copy2(s, t)
        b = os.path.getsize(s)
        toplam += b; sayi += 1
        if b > TEK_DOSYA_MB * 1048576:
            buyuk.append((r, b))
    open(os.path.join(hedef, ".nojekyll"), "w").close()
    eksik = [z for z in ZORUNLU if not os.path.exists(os.path.join(hedef, z))]
    mb = toplam / 1048576
    print("yayın paketi: %d dosya · %.1f MB (sınır %d MB)" % (sayi, mb, SINIR_MB))
    if eksik:
        print("EKSİK ZORUNLU DOSYA:", eksik)
        return 2
    if buyuk:
        for r, b in buyuk:
            print("TEK DOSYA > %d MB: %s (%.1f MB)" % (TEK_DOSYA_MB, r, b / 1048576))
        return 1
    if mb > SINIR_MB:
        print("YAYIN BOYUTU SINIRI AŞILDI")
        return 1
    return 0


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print(__doc__)
        sys.exit(3)
    sys.exit(main(sys.argv[1]))
