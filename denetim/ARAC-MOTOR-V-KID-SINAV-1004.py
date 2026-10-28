# -*- coding: utf-8 -*-
"""MOTOR-V-KID-1004.diff — YAMA SINAVI (yama UYGULANMAZ; sınav yaması GEÇİCİ kopyada uygular).

🔴 Motor (`uret_petek.py`) CLAUDE.md §9.1 gereği DONUK: yama `denetim/*.diff` olarak bekler, tam inşa koşusunda
   girer. Tam koşu ~83 dk sürer ve burada KOŞULMAZ: sınav yamanın YAPABİLECEĞİNİ iki yönde ölçer, tam koşuda
   ne çıkacağını İDDİA ETMEZ. Bunu hükümde de yaz: "uçtan uca koşulmadı".

BÖLÜM A — YAMA MEKANİĞİ
  A1  gerçek depoda `git apply --cached --check` → 0 (uygulanabilir) · `-R --check` → 1 (henüz uygulanmamış)
  A2  MOTOR-BILINEN-ALAN-1004.diff İLE BİRLİKTE `--cached --check` → 0 (tuz BİR kez değişecek)
  A3  geçici kopyada uygulanır → `py_compile` TEMİZ · ters uygulanınca bayt bayt ÖZGÜN
  A4  arac/uret_petek.py ve arac/girdi.py çalışma ağacı DEĞİŞMEMİŞ (git status boş) — 9.1 tuzuna dokunulmadı
BÖLÜM B — YAMANIN YENİ İŞLEVLERİ (yamalı dosyadan ÇIKARILIP çalıştırılır; gerçek shapely geometrisi)
  B1  v_parcalar, mp_koord ile AYNI süzgeci uygular: `len(v_parcalar(g)) == len(mp_koord(g))` — küçük kırıntı,
      Polygon/MultiPolygon, delikli çokgen dahil (`vk` uzunluk ihlali koşuyu DURDURUR, bu yüzden hizalama şart)
  B2  v_kid_ata: parçaya EN ÇOK alan kesen kimlik · iki ayrı parça iki ayrı kimlik
  B3  kimlikli petekle kesişmeyen parça "" alır — komşunun kimliğini ALMAZ (sessiz yanlış kimlik YOK)
  B4  boş tabi_kid → hepsi "" · eşit alanda alfabetik (belirlenimli)
  B5  bir parça iki kimlikle kesişiyorsa alanı fazla olan kazanır (parça başına TEK kimlik)

KULLANIM:  py denetim/ARAC-MOTOR-V-KID-SINAV-1004.py     (çıkış: 0 hepsi geçti · 1 kusur)
"""
import ast, os, py_compile, shutil, subprocess, sys, tempfile

DENETIM = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.dirname(DENETIM)
YAMA = os.path.join(DENETIM, "MOTOR-V-KID-1004.diff")
YAMA_ALAN = os.path.join(DENETIM, "MOTOR-BILINEN-ALAN-1004.diff")
HATA = 0


def sonuc(ok, baslik, detay=""):
    global HATA
    print(("  OK   " if ok else "  HATA ") + baslik + ((" | " + detay) if detay else ""))
    if not ok:
        HATA += 1


def git(*a, cwd=KOK, girdi=None):
    return subprocess.run(["git"] + list(a), cwd=cwd, capture_output=True, input=girdi)


print("=" * 72)
print("MOTOR V-KID YAMA SINAVI")
print("=" * 72)
print("A) yama mekaniği")
r = git("apply", "--cached", "--check", YAMA)
sonuc(r.returncode == 0, "A1a) `git apply --cached --check` → 0 (uygulanabilir)", "kod %d %s" % (r.returncode, r.stderr.decode("utf-8", "replace")[:80]))
r = git("apply", "--cached", "--check", "-R", YAMA)
sonuc(r.returncode != 0, "A1b) `-R --check` → ≠0 (henüz uygulanmamış; uygulanmışsa geri alınabilirdi)", "kod %d" % r.returncode)
iki = open(YAMA_ALAN, "rb").read() + open(YAMA, "rb").read()
r = git("apply", "--cached", "--check", "-", girdi=iki)
sonuc(r.returncode == 0, "A2) MOTOR-BILINEN-ALAN + MOTOR-V-KID BİRLİKTE `--cached --check` → 0 (çakışma yok, tuz bir kez)",
      "kod %d %s" % (r.returncode, r.stderr.decode("utf-8", "replace")[:80]))

tmp = tempfile.mkdtemp(prefix="vkid-sinav-")
try:
    ozgun = git("show", ":arac/uret_petek.py").stdout
    d = os.path.join(tmp, "k")
    os.makedirs(os.path.join(d, "arac"))
    open(os.path.join(d, "arac", "uret_petek.py"), "wb").write(ozgun)
    git("init", "-q", ".", cwd=d)
    git("config", "core.autocrlf", "false", cwd=d)      # makine ayarı (UMIT/EMRELIC'te true) satır sonunu çevirir: sınav BAYT eşitliği ister
    r = git("apply", YAMA, cwd=d)
    sonuc(r.returncode == 0, "A3a) yama geçici kopyada UYGULANIR", r.stderr.decode("utf-8", "replace")[:100])
    yamali_yol = os.path.join(d, "arac", "uret_petek.py")
    try:
        py_compile.compile(yamali_yol, cfile=os.path.join(tmp, "x.pyc"), doraise=True)
        sonuc(True, "A3b) yamalı dosya `py_compile` TEMİZ")
    except py_compile.PyCompileError as e:
        sonuc(False, "A3b) yamalı dosya derlenmiyor", str(e)[:120])
    r = git("apply", "-R", YAMA, cwd=d)
    sonuc(r.returncode == 0 and open(yamali_yol, "rb").read() == ozgun, "A3c) ters uygulanınca bayt bayt ÖZGÜN")
    git("apply", YAMA, cwd=d)
    r = git("status", "--short", "arac/uret_petek.py", "arac/girdi.py")
    sonuc(r.stdout.decode().strip() == "", "A4) gerçek depoda arac/uret_petek.py ve arac/girdi.py DEĞİŞMEMİŞ", r.stdout.decode()[:80])

    print("B) yamanın yeni işlevleri (yamalı dosyadan çıkarıldı, çalıştırıldı)")
    kaynak = open(yamali_yol, encoding="utf-8").read()
    agac = ast.parse(kaynak)
    istenen = {"mp_koord", "v_parcalar", "v_kid_ata"}
    parcalar = [ast.get_source_segment(kaynak, n) for n in agac.body if isinstance(n, ast.FunctionDef) and n.name in istenen]
    sonuc(len(parcalar) == 3, "B0) yamalı dosyada üç işlev de VAR (mp_koord, v_parcalar, v_kid_ata)", "%d" % len(parcalar))
    from shapely.geometry import Polygon, MultiPolygon, box
    ns = {"Polygon": Polygon, "MultiPolygon": MultiPolygon}
    exec("\n\n".join(parcalar), ns)
    mp_koord, v_parcalar, v_kid_ata = ns["mp_koord"], ns["v_parcalar"], ns["v_kid_ata"]

    buyuk1, buyuk2 = box(0, 0, 1, 1), box(2, 0, 3, 1)
    kirinti = box(5, 5, 5.005, 5.005)                       # alan 0.000025 < 0.0002
    delikli = Polygon([(10, 0), (13, 0), (13, 3), (10, 3)], [[(11, 1), (12, 1), (12, 2), (11, 2)]])
    for ad, g in (("Polygon", buyuk1), ("MultiPolygon", MultiPolygon([buyuk1, buyuk2, kirinti])),
                  ("delikli", delikli), ("boş", MultiPolygon())):
        sonuc(len(v_parcalar(g)) == len(mp_koord(g)), "B1) v_parcalar ↔ mp_koord uzunluk: %s" % ad,
              "%d = %d" % (len(v_parcalar(g)), len(mp_koord(g))))
    g3 = MultiPolygon([buyuk1, buyuk2, kirinti])
    sonuc(len(v_parcalar(g3)) == 2, "B1b) küçük kırıntı (<0.0002) iki yanda da ATILIR → 2 parça", "%d" % len(v_parcalar(g3)))

    parc = v_parcalar(MultiPolygon([buyuk1, buyuk2]))
    pa, pb = box(-0.1, -0.1, 0.9, 0.9), box(1.9, 0.1, 3.1, 0.9)
    sonuc(v_kid_ata(parc, [("a", pa), ("b", pb)]) == ["a", "b"], "B2) iki ayrı parça iki ayrı kimlik", str(v_kid_ata(parc, [("a", pa), ("b", pb)])))
    uzak = box(50, 50, 51, 51)
    ata = v_kid_ata(v_parcalar(MultiPolygon([buyuk1, buyuk2])), [("a", pa), ("z", uzak)])
    sonuc(ata == ["a", ""], "B3) kimlikli petekle kesişmeyen parça '' (komşunun kimliğini ALMAZ)", str(ata))
    sonuc(v_kid_ata(parc, []) == ["", ""], "B4a) boş tabi_kid → hepsi ''")
    esit = v_kid_ata([buyuk1], [("zz", box(0, 0, 0.5, 1)), ("aa", box(0.5, 0, 1, 1))])
    sonuc(esit == ["aa"], "B4b) eşit alan → alfabetik (belirlenimli)", str(esit))
    kars = v_kid_ata([buyuk1], [("kucuk", box(0, 0, 0.2, 1)), ("buyuk", box(0.2, 0, 1, 1))])
    sonuc(kars == ["buyuk"], "B5) parça iki kimlikle kesişiyor → alanı fazla olan kazanır, TEK kimlik", str(kars))

    # B6 — KİMLİK SÖZDİZİMİ KISITI [a-z0-9-]: okuyucu sınavının (ARAC-DONEMLER-OKUYUCU-SINAV-1004) düşman-girdi bulgusu
    def reddediyor(kid):
        try:
            v_kid_ata([buyuk1], [(kid, pa)])
            return False
        except RuntimeError:
            return True
    kotu = ["x, y: z", "a,b", "a:b", "Büyük", "a b", "", "a_b", "İstanbul"]
    sonuc(all(reddediyor(k) for k in kotu), "B6a) [a-z0-9-] dışı kimlikler RuntimeError (koşu DURUR, dosyaya İNMEZ)",
          str([k for k in kotu if not reddediyor(k)]) or "hepsi reddedildi")
    iyi = ["lubnan-emirligi", "a1", "kirim-hanligi", "cebel-i-lubnan-mutasarrifligi"]
    sonuc(not any(reddediyor(k) for k in iyi), "B6b) geçerli kimlikler KABUL (yanlış alarm yok)", str([k for k in iyi if reddediyor(k)]))
    import contextlib, io as _io
    sys.path.insert(0, os.path.join(KOK, "arac"))
    import girdi as _girdi
    with contextlib.redirect_stdout(_io.StringIO()):
        _Y = _girdi.yukle(sessiz=True)
    gercek = sorted({p["kid"] for y in _Y for p in (y.get("v") or []) if p.get("kid")})
    kirik = [k for k in gercek if reddediyor(k)]
    sonuc(len(gercek) > 0 and not kirik, "B6c) GERÇEK `v:` kimliklerinin TAMAMI kısıttan geçer (bugün tetiklenmez)",
          "%d kimlik, reddedilen %s" % (len(gercek), kirik))
finally:
    shutil.rmtree(tmp, ignore_errors=True)

print("=" * 72)
print("SONUÇ: %s" % ("TÜM SINAVLAR GEÇTİ — yama mekanik ve işlevsel olarak sağlam (UÇTAN UCA KOŞULMADI: ~83 dk tam inşa)"
                     if HATA == 0 else "%d HATA — yama HAZIR SAYILMAZ" % HATA))
sys.exit(0 if HATA == 0 else 1)
