"""PAKETLE-BAYT-LF sinavi: ayni icerik LF ve CRLF iki kopyada ayni kunye bayt'ini vermeli.
Iki yon: YENI paketle.py (w56 calisma kopyasi) -> esit · ESKI (cac68699, yama oncesi — sabit, HEAD degil: yama inince HEAD yeni olur) -> farkli (sinav otebiliyor)."""
# Kullanim: py denetim/ARAC-PAKETLE-BAYT-SINAV-1006.py   (yama UYGULANMIS agacta)
import importlib.util, os, subprocess, sys, tempfile
sys.stdout.reconfigure(encoding="utf-8")
W = r"C:\atlas-w56"
ICERIK = 'window.X = [\n  {a:1},\n  {b:"İstanbul"}\n];\n' * 50


def yukle(kaynak_metin, ad):
    td = tempfile.mkdtemp(prefix="pk_mod_")
    yol = os.path.join(td, ad + ".py")
    open(yol, "w", encoding="utf-8", newline="").write(kaynak_metin)
    spec = importlib.util.spec_from_file_location(ad, yol)
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return m


def olc(mod, satir_sonu):
    kok = tempfile.mkdtemp(prefix="pk_kok_")
    os.makedirs(os.path.join(kok, "data"))
    open(os.path.join(kok, "data", "x.js"), "wb").write(ICERIK.replace("\n", satir_sonu).encode("utf-8"))
    mod.KOK = kok
    r = mod._paket_yaz(1, ["data/x.js"])
    return r["kaynak"][0]["bayt"], r["kaynak"][0]["sha"], r["bayt"]


yeni = yukle(open(os.path.join(W, "arac", "paketle.py"), encoding="utf-8").read(), "pk_yeni")
eski = yukle(subprocess.run(["git", "-C", W, "show", "cac68699:arac/paketle.py"], capture_output=True,
                            encoding="utf-8").stdout, "pk_eski")
dusen = 0
for ad, mod, esit_bek in (("YENİ", yeni, True), ("ESKİ", eski, False)):
    lf, crlf = olc(mod, "\n"), olc(mod, "\r\n")
    esit = lf == crlf
    tuttu = esit == esit_bek
    dusen += not tuttu
    print(f"{'✓' if tuttu else '✗'} {ad}: LF (kaynak bayt, sha, paket bayt)={lf} · CRLF={crlf} · "
          f"{'EŞİT' if esit else 'FARKLI'} (beklenen {'EŞİT' if esit_bek else 'FARKLI'})")
print("✓ SINAV GEÇTİ" if not dusen else f"✗ SINAV DÜŞTÜ ({dusen})")
sys.exit(1 if dusen else 0)
