# -*- coding: utf-8 -*-
"""YAYIN LİSTESİ — `kosu_yayin.py`nin commit listesi ÖLÇÜLEREK TÜRETİLİR.

🔴 NİÇİN (KOSU-YAYIN-LISTE-1010): `kosu_yayin.py` elle yazılmış bir liste
commitliyordu ve liste BAYATTI:
    data/devletler_harita.js · data/petek_govde.js   .gitignore'da (:28, :56)
        ⇒ diskte varsalar `git add`/`git commit -- <liste>` düşer, HİÇBİR şey
          commitlenmez
    data/devlet_harita_ust.js (yayındaki GERÇEK harita)   listede YOKTU
`CLAUDE.md §5`: *"çıktı tarafında canlı olan, diskteki en büyük dosya değil
index.html'in <script src=> satırıdır."* ⇒ liste artık oradan türer.

TÜRETME — üç küme, her eleman KAYNAK SATIRIYLA basılır:
  Y  YAYIN       index.html `<script src="data/…">` (HTML yorumları hariç)
                 ∪ js/*.js içindeki tırnaklı "data/….js" sabitleri (dinamik
                 yükleyiciler: geo_coz.js devlet_parcalar · app.js ufuk/petek
                 kuyrukları). Adı çalışma anında kurulan yükleyiciler
                 ("data/" + ad) ÇÖZÜLEMEZ; sayısı ve yeri basılır.
  Ü  ÜRETİM      zincirin koşturduğu üreteçlerin data/ altına YAZDIĞI dosyalar
                 — `uret_petek.py` ve `uret_devirler.py` AST ile okunur, İTHAL
                 EDİLMEZ (uret_petek modül düzeyinde koşar, önbellek sqlite'a
                 yazar). Bir ".js" sabiti, `open/io.open(..., "w"|"a")`ya
                 doğrudan ya da bir değişken üstünden ulaşıyorsa YAZILIR.
                 + `kodla.py` türevleri: `HEDEFLER[k]` kaynağı Ü'deyse onun
                 parca/ust/on dosyaları, ve `on_dilim()`in yazdığı dosya
                 (devlet hedefi) — kodla.py da AST ile okunur.
                 + `paketle.py` türevleri: `data/paket_kunye.json`da kaynağı
                 Ü'de olan paket (ör. devirler.js → paket_05.js).
  LİSTE = {index.html} ∪ (Y ∩ Ü) ∪ (Ü'nün GİT'TE İZLENEN elemanları)
          ∪ {data/paket_kunye.json — listede bir paket varsa}
  İzlenen üretim (ör. data/devirler.js, yayına paket_05 içinde gider) de
  commitlenir: commitlenmezse depodaki kopya pakete/künyeye göre bayat
  kalır ve taze klonda yayın kapısının paket tazelik sınavı düşer.
  Elle yazılan kaynaklar (yerlesimler*.js, kronoloji*.js …) Ü'ye giremez:
  üreteçler onları YAZMAZ, yalnız okur.

DURDURUCU (commit ATILMAZ), hepsi ADIYLA:
  ① listedeki dosya `.gitignore`da  — site o dosyayı yükler ama git onu
     taşımaz ⇒ yayında 404; ayrıca pathspec commit bütünüyle düşer. "Sessizce
     listeden çıkar" yolu SEÇİLMEDİ: o, yeni bir sessiz liste doğurur ve
     index.html'in yüklediği dosyanın yayına gitmediği gizlenir.
  ② listedeki dosya diskte YOK — izliyse pathspec commit onu SİLER, değilse
     commit düşer; ikisi de bozuk yayın.
  ③ BAYAT TÜREV — kodla türevinin `window.__XX_SHA` damgası (ya da paket
     künyesindeki kısa sha) diskteki kaynağın sha256'sıyla tutmuyor ⇒ commit yeni bolgeler/devirler ile ESKİ haritayı
     yayınlardı. Yayın kapısının kodlama kapısı türevi KENDİ damgasıyla
     kıyaslar, taze motor çıktısıyla DEĞİL ⇒ bu sınıfı bugün başka hiçbir
     kapı görmez.
ÖLÇÜLEMEDİ (yine DURDURUR, ayrı kova): index.html/AST okunamadı · Y ∩ Ü boş ·
  türevin kaynağı diskte yok (damga kıyaslanamadı) · git check-ignore koşmadı.
BİLGİ (durdurmaz): Ü − Y (üretilir, yayında değil) · Y − Ü (yayında, bu zincir
  üretmiyor — commitlenmez, başkasının yarım işi zincirle yayına SIZMAZ).

    py arac/yayin_listesi.py [--kok <ağaç>] [--eski]
    --eski: kosu_yayin'in 10 Ekim 2026 öncesi elle listesiyle farkı ADIYLA bas
Çıkış: 0 liste temiz · 1 DURDURUCU var · 2 ÖLÇÜLEMEDİ (durdurucu yoksa).
"""
import ast
import glob
import hashlib
import io
import os
import re
import subprocess
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
URETECLER = ("arac/uret_petek.py", "arac/uret_devirler.py")
ESKI_LISTE = ["data/donemler.js", "data/devletler_harita.js",
              "data/bolgeler.js", "data/devirler.js", "data/altlik.js",
              "data/petek_govde.js", "data/bos_alanlar.js",
              "veri-kaynak/motor_kara.geojson", "index.html", "css/style.css"]
_SRC = re.compile(r'<script\b[^>]*\bsrc\s*=\s*"(data/[^"?#]+)')
_JS_SABIT = re.compile(r'["\'](data/[\w.\-]+\.js)["\']')
_JS_KURULAN = re.compile(r'["\']data/["\']\s*\+')
_SHA = re.compile(r'(window\.__[A-Z]+_SHA)\s*=\s*"([0-9a-f]{64})"')


class Olculemedi(Exception):
    pass


def _oku(yol):
    with io.open(yol, encoding="utf-8") as f:
        return f.read()


def _yorumsuz_html(metin):
    """HTML yorumlarını SATIR SAYISINI koruyarak boşalt."""
    return re.sub(r"<!--.*?-->", lambda m: "\n" * m.group(0).count("\n"),
                  metin, flags=re.S)


def yayin_kumesi(kok):
    """Y: {göreli yol: [kaynak satır, ...]} ve çözülemeyen yükleyici yerleri."""
    y, cozulemeyen = {}, []
    ix = os.path.join(kok, "index.html")
    if not os.path.exists(ix):
        raise Olculemedi("index.html yok")
    for no, satir in enumerate(_yorumsuz_html(_oku(ix)).splitlines(), 1):
        for m in _SRC.finditer(satir):
            y.setdefault(m.group(1), []).append("index.html:%d" % no)
    for js in sorted(glob.glob(os.path.join(kok, "js", "*.js"))):
        ad = "js/" + os.path.basename(js)
        for no, satir in enumerate(_oku(js).splitlines(), 1):
            if satir.lstrip().startswith("//"):
                continue
            for m in _JS_SABIT.finditer(satir):
                y.setdefault(m.group(1), []).append("%s:%d (dinamik)" % (ad, no))
            if _JS_KURULAN.search(satir):
                cozulemeyen.append("%s:%d" % (ad, no))
    return y, cozulemeyen


def _js_sabitleri(dugum):
    return [n.value for n in ast.walk(dugum)
            if isinstance(n, ast.Constant) and isinstance(n.value, str)
            and re.fullmatch(r"(data/)?[\w.\-]+\.js", n.value)]


def _yazma_cagrisi(c):
    """open/io.open(..., 'w'|'a') çağrısı mı? → ilk argüman düğümü ya da None."""
    if not isinstance(c, ast.Call) or not c.args:
        return None
    f = c.func
    ad = f.id if isinstance(f, ast.Name) else (f.attr if isinstance(f, ast.Attribute) else "")
    if ad != "open":
        return None
    kip = None
    if len(c.args) >= 2 and isinstance(c.args[1], ast.Constant):
        kip = c.args[1].value
    for k in c.keywords:
        if k.arg == "mode" and isinstance(k.value, ast.Constant):
            kip = k.value.value
    if isinstance(kip, str) and ("w" in kip or "a" in kip):
        return c.args[0]
    return None


def uretecin_yazdiklari(yol):
    """AST: üretecin data/ altına YAZDIĞI .js adları → {ad: [satır, ...]}."""
    try:
        agac = ast.parse(_oku(yol))
    except Exception as e:                                   # noqa: BLE001
        raise Olculemedi("%s AST okunamadı: %s" % (yol, e))
    atama = {}                       # değişken → [(ad, satır)]
    for n in ast.walk(agac):
        if isinstance(n, ast.Assign):
            for s in _js_sabitleri(n.value):
                for h in n.targets:
                    if isinstance(h, ast.Name):
                        atama.setdefault(h.id, []).append((s, n.lineno))
    yazilan = {}
    for n in ast.walk(agac):
        hedef = _yazma_cagrisi(n)
        if hedef is None:
            continue
        if isinstance(hedef, ast.Name):
            for s, no in atama.get(hedef.id, []):
                yazilan.setdefault(os.path.basename(s), []).append(
                    "%s:%d→:%d" % (os.path.basename(yol), no, n.lineno))
        for s in _js_sabitleri(hedef):
            yazilan.setdefault(os.path.basename(s), []).append(
                "%s:%d" % (os.path.basename(yol), n.lineno))
    return yazilan


def kodla_turevleri(kok):
    """kodla.py AST: {kaynak ad: (sha değişkeni, [türev adları])}."""
    yol = os.path.join(kok, "arac", "kodla.py")
    try:
        agac = ast.parse(_oku(yol))
    except Exception as e:                                   # noqa: BLE001
        raise Olculemedi("kodla.py AST okunamadı: %s" % e)
    hedefler, on_dilim = None, []
    for n in agac.body:
        if (isinstance(n, ast.Assign) and any(isinstance(t, ast.Name) and t.id == "HEDEFLER"
                                               for t in n.targets)):
            hedefler = ast.literal_eval(n.value)
        if isinstance(n, ast.FunctionDef) and n.name == "on_dilim":
            for m in ast.walk(n):
                if (isinstance(m, ast.Assign) and isinstance(m.value, ast.Constant)
                        and isinstance(m.value.value, str)
                        and m.value.value.endswith(".js")):
                    on_dilim.append(m.value.value)
    if not hedefler:
        raise Olculemedi("kodla.py'de HEDEFLER bulunamadı")
    sonuc = {}
    for ad, h in hedefler.items():
        tur = [h["parca"], h["ust"], h["on"]] + (on_dilim if ad == "devlet" else [])
        sonuc[h["kaynak"]] = (h["sha"], h["parca"], tur)
    return sonuc


def _paket_duzle(b):
    """paketle.py `_duzle` ile aynı: satır sonu düzlenir (CRLF/LF anlamsız)."""
    return b.replace(b"\r\n", b"\n").replace(b"\r", b"\n")


def paket_turevleri(kok):
    """data/paket_kunye.json → {kaynak yol: [(paket yol, kısa sha)]}. Yoksa {}."""
    import json
    yol = os.path.join(kok, "data", "paket_kunye.json")
    if not os.path.exists(yol):
        return {}
    try:
        k = json.loads(_oku(yol))
        sonuc = {}
        for p in k["paketler"]:
            for x in p["kaynak"]:
                sonuc.setdefault(x["yol"], []).append((p["paket"], x["sha"]))
        return sonuc
    except Exception as e:                                   # noqa: BLE001
        raise Olculemedi("paket_kunye.json okunamadı: %s" % e)


def _izlenen(kok, yollar):
    if not yollar:
        return set()
    r = subprocess.run(["git", "-C", kok, "ls-files", "--"] + list(yollar),
                       capture_output=True, text=True, encoding="utf-8", errors="replace")
    if r.returncode != 0:
        raise Olculemedi("git ls-files çıkış %d: %s" % (r.returncode, (r.stderr or "")[:120]))
    return {l.strip() for l in (r.stdout or "").splitlines() if l.strip()}


def _gitignore_da(kok, yollar):
    if not yollar:
        return set()
    r = subprocess.run(["git", "-C", kok, "check-ignore", "--no-index", "--"] + list(yollar),
                       capture_output=True, text=True, encoding="utf-8", errors="replace")
    if r.returncode not in (0, 1):
        raise Olculemedi("git check-ignore çıkış %d: %s" % (r.returncode, (r.stderr or "")[:120]))
    return {l.strip() for l in (r.stdout or "").splitlines() if l.strip()}


def turet(kok=KOK):
    """→ dict: liste, satirlar (basılacak rapor), dur [(ad, sebep)], olculemedi [..]."""
    R = {"liste": [], "satirlar": [], "dur": [], "olculemedi": []}
    yaz = R["satirlar"].append
    try:
        Y, cozulemeyen = yayin_kumesi(kok)
        U = {}
        for u in URETECLER:
            for ad, yer in uretecin_yazdiklari(os.path.join(kok, u)).items():
                U.setdefault("data/" + ad, []).extend(yer)
        turev = kodla_turevleri(kok)
        paket = paket_turevleri(kok)
    except Olculemedi as e:
        R["olculemedi"].append(("türetme", str(e)))
        yaz("🔴 YAYIN LİSTESİ ÖLÇÜLEMEDİ — %s" % e)
        return R
    for kaynak, (_sha, _p, tur) in turev.items():
        if "data/" + kaynak in U:
            for t in tur:
                U.setdefault("data/" + t, []).append("kodla.py türevi ← %s" % kaynak)
    for kaynak in sorted(k for k in paket if k in U):
        for pk, _sh in paket[kaynak]:
            U.setdefault(pk, []).append("paketle.py türevi ← %s" % os.path.basename(kaynak))
    kesisim = sorted(set(Y) & set(U))
    try:
        izli = sorted(_izlenen(kok, sorted(set(U) - set(Y))))
    except Olculemedi as e:
        R["olculemedi"].append(("izlenen", str(e)))
        izli = []
    kunye = (["data/paket_kunye.json"]
             if any(os.path.basename(d).startswith("paket_") for d in kesisim) else [])
    R["liste"] = ["index.html"] + kesisim + izli + kunye
    yaz("YAYIN LİSTESİ — türetildi (Y: index.html + js yükleyicileri · Ü: üreteç AST + kodla türevi)")
    yaz("  Y %d dosya · Ü %d dosya · LİSTE = index.html + Y∩Ü %d" % (len(Y), len(U), len(kesisim)))
    for d in kesisim:
        yaz("   + %-30s ← %s  |  üretim: %s" % (d, ", ".join(Y[d]), "; ".join(U[d])))
    if not kesisim:
        R["olculemedi"].append(("Y∩Ü", "kesişim BOŞ — türetme bir şey bulamadı"))
    for d in izli:
        yaz("   + %-30s ← izlenen üretim (yayına türeviyle gider)  |  üretim: %s"
            % (d, "; ".join(U[d])))
    for d in kunye:
        yaz("   + %-30s ← listede paket var (paketle.py künyesi)" % d)
    for d in sorted(set(U) - set(Y) - set(izli)):
        yaz("   · üretilir, YAYINDA DEĞİL ve izlenmiyor (commitlenmez): %s" % d)
    disari = sorted(set(Y) - set(U))
    yaz("   · yayında ama bu zincir ÜRETMİYOR (commitlenmez): %d — %s"
        % (len(disari), " ".join(os.path.basename(x) for x in disari)))
    if cozulemeyen:
        yaz("   · adı çalışma anında kurulan yükleyici (çözülemez, Y'ye girmedi): %s"
            % " ".join(cozulemeyen))
    # ① gitignore
    try:
        ign = _gitignore_da(kok, R["liste"])
    except Olculemedi as e:
        R["olculemedi"].append(("gitignore", str(e)))
        ign = set()
    for d in sorted(ign):
        R["dur"].append((d, ".gitignore'da — site yükler, git taşımaz (yayında 404)"))
    # ② diskte yok
    for d in R["liste"]:
        if not os.path.exists(os.path.join(kok, d)):
            R["dur"].append((d, "diskte YOK — pathspec commit onu siler ya da düşer"))
    # ③ bayat türev
    for kaynak, (sha_ad, parca, _tur) in sorted(turev.items()):
        if "data/" + kaynak not in U or "data/" + parca not in R["liste"]:
            continue
        ky, py_ = os.path.join(kok, "data", kaynak), os.path.join(kok, "data", parca)
        if not os.path.exists(ky):
            R["olculemedi"].append(("data/" + parca, "kaynak data/%s diskte yok — damga "
                                    "kıyaslanamadı" % kaynak))
            continue
        if not os.path.exists(py_):
            continue                                     # ② zaten yakaladı
        with io.open(py_, encoding="utf-8", errors="replace") as f:
            bas = f.read(1 << 16)
        m = [x for x in _SHA.finditer(bas) if x.group(1) == sha_ad]
        if not m:
            R["olculemedi"].append(("data/" + parca, "%s damgası bulunamadı" % sha_ad))
            continue
        gercek = hashlib.sha256(_oku(ky).encode("utf-8")).hexdigest()
        if gercek != m[0].group(2):
            R["dur"].append(("data/" + parca, "BAYAT TÜREV — %s %s… ≠ data/%s %s… "
                             "(kodla yay koşmadı)" % (sha_ad, m[0].group(2)[:12], kaynak, gercek[:12])))
        else:
            yaz("   ✓ türev taze: data/%s damgası = data/%s sha256 %s…" % (parca, kaynak, gercek[:12]))
    for kaynak in sorted(k for k in paket if k in U):
        ky = os.path.join(kok, kaynak)
        for pk, kisa in paket[kaynak]:
            if pk not in R["liste"]:
                continue
            if not os.path.exists(ky):
                R["olculemedi"].append((pk, "kaynak %s diskte yok — künye kıyaslanamadı" % kaynak))
                continue
            with io.open(ky, "rb") as f:
                gercek = hashlib.sha256(_paket_duzle(f.read())).hexdigest()[:16]
            if gercek != kisa:
                R["dur"].append((pk, "BAYAT TÜREV — künye %s ≠ %s %s (paketle.py yenile "
                                 "koşmadı)" % (kisa, kaynak, gercek)))
            else:
                yaz("   ✓ paket taze: %s künyesi = %s %s" % (pk, kaynak, gercek))
    for d, s in R["dur"]:
        yaz("   🔴 DURDURUCU %-28s %s" % (d, s))
    for d, s in R["olculemedi"]:
        yaz("   🔴 ÖLÇÜLEMEDİ %-28s %s" % (d, s))
    return R


def main(argv):
    kok = argv[argv.index("--kok") + 1] if "--kok" in argv else KOK
    R = turet(kok)
    for s in R["satirlar"]:
        print(s)
    if "--eski" in argv:
        eski, yeni = set(ESKI_LISTE), set(R["liste"])
        print("FARK (eski elle liste → türetilen):")
        for d in sorted(eski - yeni):
            print("   − %s" % d)
        for d in sorted(yeni - eski):
            print("   + %s" % d)
        print("   = %s" % " ".join(sorted(eski & yeni)))
    if R["dur"]:
        print("SONUÇ: DURDURUCU %d — commit ATILMAZ" % len(R["dur"]))
        return 1
    if R["olculemedi"]:
        print("SONUÇ: ÖLÇÜLEMEDİ %d — commit ATILMAZ" % len(R["olculemedi"]))
        return 2
    print("SONUÇ: liste temiz (%d dosya)" % len(R["liste"]))
    return 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main(sys.argv[1:]))
