"""ARAC-DURUM-TABLOSU-YUTMA-SINAV-1009 — `olc()`nin katman evreni redirect_stdout altında yutulmasın.

Kusur (DURUM-TABLOSU-SESSIZ-YUTMA-1009): `paketle.py` modül düzeyinde
`sys.stdout.reconfigure(...)` çağırıyordu. Çağıran stdout'u `io.StringIO`ya
yönlendirdiyse `reconfigure` yok ⇒ içe aktarım AttributeError ⇒
`_bagli_mi.index_dosyalari()` `except: pass` ile yutuyor ⇒ paketler açılmıyor ⇒
`durum_tablosu.katman_evreni()` 13/184/2/1 yerine 0/22/0/0, sessiz borç 11 → 51.

Her soru TAZE bir alt süreçte koşar: hata yalnız `paketle` İLK KEZ redirect
altında içe aktarılınca doğar — aynı süreçte önceden düz içe aktarılmışsa
modül önbellekte olduğu için kusur GİZLENİR (sınav yanlış temiz verirdi).

İki kol:
  YAMALI   --kok altındaki ağaç (yama uygulanmış olmalı)
  YAMASIZ  `git show origin/main:arac/{paketle,_bagli_mi}.py` geçici dizine;
           `durum_tablosu.py` ve veri yine --kok'tan (yama onlara dokunmuyor)

KULLANIM
    py denetim/ARAC-DURUM-TABLOSU-YUTMA-SINAV-1009.py [--kok C:\\atlas]
Çıkış: 0 bütün sorular geçti · 1 en az biri kaldı · 2 ölçülemedi
"""
import argparse
import json
import os
import shutil
import subprocess
import sys
import tempfile

COCUK = r'''
import contextlib, io, json, sys, types
arac, yamasiz, kip, enjekte, sonuc = sys.argv[1:6]
yonlendir = kip == "redirect"
r = {}
# Vakadaki çağıranın düzeni: `durum_tablosu` DÜZ içe aktarılır (modül düzeyinde
# stdout.buffer'ı sarar — redirect altında içe aktarılamaz, bu YÜKSEK SESLİ bir
# hatadır, yutulmaz), yalnız ÖLÇÜM redirect altında çağrılır. `paketle` o ana
# kadar hiç içe aktarılmamıştır — kusur tam burada doğar.
if yamasiz != "-":
    sys.path.insert(0, yamasiz)
    import _bagli_mi                        # yamasız modül önbelleğe girer
sys.path.insert(0, arac)
import durum_tablosu
assert "paketle" not in sys.modules
def kos():
    if enjekte != "-":
        sahte = types.ModuleType("paketle")
        if enjekte == "hata":
            def kaynaklar():
                raise OSError("ENJEKTE: paket_kunye.json okunamadi")
        else:                               # "bos"
            def kaynaklar():
                return []
        sahte.kaynaklar = kaynaklar
        sys.modules["paketle"] = sahte
    _, dosya = durum_tablosu.katman_evreni()
    return dosya
try:
    if yonlendir:
        with contextlib.redirect_stdout(io.StringIO()):
            r["dosya"] = kos()
    else:
        r["dosya"] = kos()
except Exception as e:
    r["hata"] = "%s: %s" % (type(e).__name__, e)
json.dump(r, open(sonuc, "w", encoding="utf-8"), ensure_ascii=False)
'''


def cocuk(arac, yamasiz, kip, enjekte, gecici):
    sonuc = os.path.join(gecici, "sonuc.json")
    if os.path.exists(sonuc):
        os.remove(sonuc)
    ortam = dict(os.environ, PYTHONIOENCODING="utf-8")
    subprocess.run([sys.executable, "-c", COCUK, arac, yamasiz, kip, enjekte, sonuc],
                   capture_output=True, timeout=600, env=ortam)
    if not os.path.exists(sonuc):
        return {"hata": "ÇOCUK SONUÇ YAZMADI"}
    return json.load(open(sonuc, encoding="utf-8"))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--kok", default=r"C:\atlas")
    a = ap.parse_args()
    kok = os.path.abspath(a.kok)
    arac = os.path.join(kok, "arac")
    gecici = tempfile.mkdtemp(prefix="yutma-sinav-")
    try:
        # YAMASIZ kol: origin/main'deki iki modül + paket künyesi (KUNYE yolu
        # paketle.py'nin kendi konumuna göre çözülür)
        ya = os.path.join(gecici, "arac")
        os.makedirs(ya)
        os.makedirs(os.path.join(gecici, "data"))
        for ad in ("paketle.py", "_bagli_mi.py"):
            g = subprocess.run(["git", "-C", kok, "show", "origin/main:arac/" + ad],
                               capture_output=True)
            if g.returncode:
                print("ÖLÇÜLEMEDİ: git show origin/main:arac/%s" % ad)
                return 2
            open(os.path.join(ya, ad), "wb").write(g.stdout)
        shutil.copy(os.path.join(kok, "data", "paket_kunye.json"),
                    os.path.join(gecici, "data", "paket_kunye.json"))

        def k(yamasiz, kip, enj="-"):
            return cocuk(arac, ya if yamasiz else "-", kip, enj, gecici)

        sonuc = []

        def soru(no, ad, gecti, ayrinti):
            sonuc.append(gecti)
            print("  %s %-3s %s\n        %s" % ("✓" if gecti else "✗", no, ad, ayrinti))

        yd, yr = k(False, "duz"), k(False, "redirect")
        sd, sr = k(True, "duz"), k(True, "redirect")
        print("YAMALI  düz %s · redirect %s" % (yd, yr))
        print("YAMASIZ düz %s · redirect %s" % (sd, sr))
        print()
        dolu = "dosya" in yd and all(yd["dosya"].get(x, 0) > 0
                                       for x in ("sinir", "kronoloji", "savas", "kisi"))
        soru("S1", "YAMALI düz: dört katman da dolu (0 değil)", dolu, yd)
        soru("S2", "YAMALI: komut satırı ≡ redirect_stdout (aynı sayılar)",
             "dosya" in yd and yd == yr, "%s ≡ %s" % (yd, yr))
        soru("S3", "YAMASIZ düz = YAMALI düz (yama doğru yolu değiştirmedi)",
             "dosya" in sd and sd == yd, "%s ≡ %s" % (sd, yd))
        soru("S4", "YAMASIZ redirect ≠ düz — KUSURUN KANITI (sınav ısırıyor)",
             "dosya" in sr and sr != sd, "%s ≠ %s" % (sr, sd))

        eh, ehs = k(False, "duz", "hata"), k(True, "duz", "hata")
        soru("S5", "YAMALI + enjekte hata: olc evreni 0 SAYMAZ, hata yukarı çıkar",
             "hata" in eh and "ENJEKTE" in eh["hata"], eh)
        soru("S6", "YAMASIZ + enjekte hata: YUTULUYOR (S5'in karşı yönü)",
             "dosya" in ehs, ehs)
        eb = k(False, "duz", "bos")
        soru("S7", "YAMALI + kaynaklar() boş ama index paket yüklüyor: ÖLÇÜLEMEDİ",
             "hata" in eb and "ÖLÇÜLEMEDİ" in eb["hata"], eb)
        ebr = k(False, "redirect", "hata")
        soru("S8", "YAMALI + redirect + enjekte hata: yine yukarı çıkar",
             "hata" in ebr and "ENJEKTE" in ebr["hata"], ebr)

        print("\nSONUÇ: %d/%d geçti" % (sum(sonuc), len(sonuc)))
        return 0 if all(sonuc) else 1
    finally:
        shutil.rmtree(gecici, ignore_errors=True)


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())
