"""ARAC-GUNNO-PAD-SINAV-1008 — `denetle.pad()` sınavı, İKİ YÖNDE.

Soru: `gun_no` ve künye dizgi karşılaştırmaları ÜÇ HANELİ yılda (ör.
"900-01-01", "330-05-11") doğru mu? (`CLAUDE.md §4` · `D205` · GUNNO-PAD-1008)

İki kol:
  YAMASIZ  `git show <taban>:arac/denetle.py` geçici dosyaya yazılır ve ondan
           yüklenir. Bu kol ÇÖKMELİ / YANLIŞ SIRALAMALI — çökmüyorsa sınav
           soruyu sormuyor demektir (sınav o zaman KIRMIZI verir).
  YAMALI   çalışma ağacındaki `arac/denetle.py`. Aynı gerçek kayıtlar geçmeli,
           dört haneli yıllarda çıktı YAMASIZ ile BİREBİR aynı olmalı.

Kayıtlar regex tahmini değil: `devletler.js` `denetle._devletler_yukle()`
(node eval) ile, yerleşimler `yerlesimleri_yukle()`, olaylar `olaylari_yukle()`
ile okunur.

Kullanım:  py denetim/ARAC-GUNNO-PAD-SINAV-1008.py [--taban origin/makine/umit]
Çıkış: 0 bütün sorular geçti · 1 en az bir soru kaldı.
"""
import argparse
import contextlib
import importlib.util
import io
import os
import subprocess
import sys
from datetime import date

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARAC = os.path.join(KOK, "arac")
sys.path.insert(0, ARAC)


def yukle(ad, yol):
    spec = importlib.util.spec_from_file_location(ad, yol)
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return m


def oracle(s):
    """Bağımsız gün numarası — dizgi kesmez, `-` ile böler."""
    p = s.split("-")
    return date(int(p[0]), int(p[1]) if len(p) > 1 else 1,
                int(p[2]) if len(p) > 2 else 1).toordinal()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--taban", default="origin/makine/umit")
    a = ap.parse_args()

    ham = subprocess.run(["git", "-C", KOK, "show", a.taban + ":arac/denetle.py"],
                         capture_output=True)
    if ham.returncode != 0:
        print("ÖLÇÜLEMEDİ — taban okunamadı:", ham.stderr.decode("utf-8", "replace"))
        return 2
    # ⚠️ Geçici dosya `arac/` İÇİNE yazılır: denetle.py yolları kendi
    #   konumundan çözer (`../data`, `uret_petek.py` maske sabitleri) — %TEMP%
    #   altından yüklenince modül açılışta çıkıyordu (ölçüldü). Yüklenir
    #   yüklenmez SİLİNİR; ağaçta iz kalmaz.
    gecici = os.path.join(ARAC, "_gunno_yamasiz_%d.py" % os.getpid())
    with open(gecici, "wb") as f:
        f.write(ham.stdout)
    try:
        YAMALI = yukle("denetle_yamali", os.path.join(ARAC, "denetle.py"))
        YAMASIZ = yukle("denetle_yamasiz", gecici)
    finally:
        os.remove(gecici)
    if hasattr(YAMASIZ, "pad"):
        print("⚠️ taban zaten pad() içeriyor — yamasız kol yamasız DEĞİL")

    sonuc = []

    def soru(no, yon, metin, gecti, ayrinti=""):
        sonuc.append(gecti)
        print(f"{'✓' if gecti else '✗'} S{no:<2} [{yon}] {metin}"
              + (f"\n        {ayrinti}" if ayrinti else ""))

    # ── gerçek kayıtlar ───────────────────────────────────────────────
    K = YAMALI._devletler_yukle()
    if K is None:
        print("ÖLÇÜLEMEDİ — node yok ya da devletler.js ayrıştırılamadı")
        return 2
    HAM = YAMALI._DEVLETLER_HAM
    uc = []          # (id, alan, değer)
    dort = []        # dört haneli künye/kronoloji tarihleri
    for d in HAM:
        for alan in ("f", "t"):
            v = d.get(alan)
            if isinstance(v, str) and v:
                (uc if len(v.split("-")[0]) < 4 else dort).append((d["id"], alan, v))
        for i, k in enumerate(d.get("kronoloji") or []):
            v = k.get("t")
            if isinstance(v, str) and v:
                (uc if len(v.split("-")[0]) < 4 else dort).append(
                    (d["id"], f"kronoloji[{i}].t", v))
    n_f = sum(1 for _, al, _ in uc if al == "f")
    n_k = sum(1 for _, al, _ in uc if al.startswith("kronoloji"))
    n_neg = sum(1 for _, _, v in uc if v.startswith("-"))
    soru(1, "evren", f"üç haneli yıllı kayıt = 111 (f {n_f} + kronoloji.t {n_k} "
         f"+ t {len(uc) - n_f - n_k}; negatif {n_neg})",
         len(uc) == 111 and n_f == 64 and n_k == 47 and n_neg == 0)

    # ── YAMASIZ kol — ÇÖKMELİ ────────────────────────────────────────
    cokme = 0
    for _, _, v in uc:
        try:
            YAMASIZ.gun_no(v)
        except ValueError:
            cokme += 1
    soru(2, "YAMASIZ", f"gun_no 111 gerçek kaydın {cokme}'inde ValueError ile ÇÖKÜYOR "
         f"(ör. mapungubwe f 900-01-01, bizans f 330-05-11)", cokme == len(uc) and cokme > 0)

    yanlis = [v for _, _, v in uc if (v > YAMASIZ.ATLAS_BASI) != (oracle(v) > oracle("1281-01-01"))]
    soru(3, "YAMASIZ", f"dizgi `kf > ATLAS_BASI` {len(yanlis)}/111 kayıtta YANLIŞ True "
         f"(\"900-01-01\" > \"1281-01-01\")", len(yanlis) == len(uc))

    karisik = [v for _, _, v in uc] + ["1281-01-01", "1453-05-29", "1923-10-29"]
    dogru = sorted(karisik, key=oracle)
    soru(4, "YAMASIZ", "düz `sorted()` kronolojik sırayı BOZUYOR", sorted(karisik) != dogru)

    # ── YAMALI kol — GEÇMELİ ─────────────────────────────────────────
    hata = []
    for kid, al, v in uc:
        try:
            if YAMALI.gun_no(v) != oracle(v):
                hata.append((kid, al, v, "yanlış gün"))
        except Exception as e:  # noqa: BLE001
            hata.append((kid, al, v, repr(e)))
    soru(5, "YAMALI", f"gun_no 111 gerçek kaydın {len(uc) - len(hata)}'inde DOĞRU gün "
         f"(bağımsız split-oracle ile)", not hata, "; ".join(map(str, hata[:5])))

    yanlis2 = [v for _, _, v in uc
               if (YAMALI.pad(v) > YAMALI.ATLAS_BASI) != (oracle(v) > oracle("1281-01-01"))]
    soru(6, "YAMALI", f"`pad(kf) > ATLAS_BASI` yanlış: {len(yanlis2)}", not yanlis2)
    soru(7, "YAMALI", "`sorted(key=pad)` kronolojik sırayı veriyor",
         sorted(karisik, key=YAMALI.pad) == dogru)

    # ── GERİLEME — dört haneli yıllarda BİREBİR aynı ─────────────────
    with contextlib.redirect_stdout(io.StringIO()):
        Y = YAMALI.yerlesimleri_yukle()
        O = YAMALI.olaylari_yukle()
    elle = ["1281-01-01", "1923-10-29", "1453-05-29", "1526-08", "1514-09-06",
            "2026-10-08", "1000-01-01", "0999-12-31"]
    havuz = set(elle) | {v for _, _, v in dort} | {o["t"] for o in O if o.get("t")}
    for y in Y:
        for kat in ("d", "v", "s", "isg"):
            for p in (y.get(kat) or []):
                for al in ("f", "t"):
                    if isinstance(p.get(al), str) and p.get(al):
                        havuz.add(p[al])
    fark, ikisi_cokuyor = [], 0
    for v in sorted(havuz):
        try:
            a_ = YAMASIZ.gun_no(v)
        except Exception as e:  # noqa: BLE001
            a_ = ("HATA", type(e).__name__)
        try:
            b_ = YAMALI.gun_no(v)
        except Exception as e:  # noqa: BLE001
            b_ = ("HATA", type(e).__name__)
        if a_ != b_:
            fark.append((v, a_, b_))
        elif isinstance(a_, tuple):
            ikisi_cokuyor += 1
    soru(8, "GERİLEME", f"{len(havuz)} dört haneli tarih (künye f/t + kronoloji + olay + "
         f"yerleşim d/v/s/isg + elle) yamasız == yamalı BİREBİR; fark {len(fark)}",
         not fark, "; ".join(map(str, fark[:5])))
    soru(9, "GERİLEME", "pad() dört haneli yılda dizgiyi DEĞİŞTİRMİYOR",
         all(YAMALI.pad(v) == v for v in havuz))
    print(f"        (iki kolda da aynı biçimde çöken tarih: {ikisi_cokuyor} — gerileme değil)")

    # ── NEGATİF (MÖ) — sessiz pad YOK, ÇÖKMELİ ──────────────────────
    try:
        YAMALI.gun_no("-500-01-01")
        neg_cok = False
    except ValueError:
        neg_cok = True
    soru(10, "YAMALI", "MÖ yıl: pad dokunmuyor ve gun_no ÇÖKÜYOR (sessiz yanlış yok)",
         YAMALI.pad("-500-01-01") == "-500-01-01" and neg_cok)

    # ── GERÇEK KOŞUL — degismez4 iki kolda ──────────────────────────
    with contextlib.redirect_stdout(io.StringIO()):
        r_eski = YAMASIZ.degismez4(Y)
        r_yeni = YAMALI.degismez4(Y)
    adlar = ("ihlal", "kunyesiz", "olculdu", "asan", "once", "cok_harita")
    say = ", ".join(f"{n} {len(x) if isinstance(x, list) else x}" for n, x in zip(adlar, r_yeni))
    soru(11, "GERÇEK", f"degismez4 yamasız == yamalı BİREBİR ({say})", r_eski == r_yeni)
    # yamasız kodun `kf > ATLAS_BASI` dalı üç haneli künyede YANLIŞ girilir ama
    # arkasındaki `_gun_farki(kf, p.f) > tolerans` korumasında düşer: ölç.
    kullanilan = {p.get("d") for y in Y for kat in ("s", "isg") for p in (y.get(kat) or [])}
    uc_kullanilan = sorted({kid for kid, al, _ in uc if al == "f" and kid in kullanilan})
    soru(12, "GERÇEK", f"üç haneli f'li künyenin {len(uc_kullanilan)}'i yerleşimde kullanılıyor "
         f"⇒ yamasız dal GERÇEKTEN yanlış giriliyor ama sayı oynamıyor",
         len(uc_kullanilan) > 0 and r_eski == r_yeni, ", ".join(uc_kullanilan[:12]))

    gec = sum(sonuc)
    print(f"\nSONUÇ: {gec}/{len(sonuc)} soru geçti")
    return 0 if gec == len(sonuc) else 1


if __name__ == "__main__":
    sys.exit(main())
