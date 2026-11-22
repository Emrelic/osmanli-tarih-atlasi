# -*- coding: utf-8 -*-
"""ceviri_yenile.py — Türkçe kronoloji/devlet/arayüz metni değişince TÜM dillerde çevirileri yenileme düzeni.

Neden: çeviri kaydı Türkçe metnin FNV-1a özetini taşır (arac/ceviri.py). Türkçe değişince kayıt BAYAT olur,
site o maddede Türkçe gösterir ve yayın kapısı çeviri tavanı (BEKLENEN 0) durdurur. Bu araç, bayatı
dil × tür × parça kuyruğuna böler (alt ajan başına makul boy), ajan çıktılarını toplar ve tavanı doğrular.
Çeviri işini yapan LLM bu betikte DEĞİL: oturum, parça başına bir Sonnet alt ajan çalıştırır
(talimat: denetim/CEVIRI-1103/CEVIRMEN.md). Ayrıntı: .claude/skills/ceviri-yenile/SKILL.md.

  py arac/ceviri_yenile.py hazirla [--klasor K] [--parca 120] [--dil en ...]   # kuyruğu parçalara böler + MANIFEST.json
  py arac/ceviri_yenile.py topla   [--klasor K]                                # <parca>.cevap*.json dosyalarını uygular
  py arac/ceviri_yenile.py durum                                               # ceviri.py denetim özeti (tavan)

Çıkış: 0 tamam · 1 hata/yarım (uygulanamayan parça) · 2 ölçülemedi.
⚠️ `ceviri.py yaz` KOŞTURULMAZ (dosya satır sonlarını bozar); aktif olmayan dile (ör. ko) uygula YAPILMAZ —
   `uygula` yeni dil dosyası açıp o dili "aktif" yapar ve tavanı aşar (22 Kasım 2026 vakası).
"""
import argparse
import glob
import json
import os
import subprocess
import sys
import tempfile

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CEVIRI = os.path.join(KOK, "arac", "ceviri.py")
sys.stdout.reconfigure(encoding="utf-8", errors="replace")


def calistir(*a):
    r = subprocess.run([sys.executable, CEVIRI] + list(a), capture_output=True, cwd=KOK)
    return r.returncode, r.stdout.decode("utf-8", "replace") + r.stderr.decode("utf-8", "replace")


def aktif_diller():
    kod, cikti = calistir("durum")
    diller = []
    for satir in cikti.splitlines():
        if satir.startswith("[") and "]" in satir:
            diller.append(satir[1:satir.index("]")])
    return diller


def hazirla(a):
    klasor = a.klasor or os.path.join(tempfile.gettempdir(), "atlas_ceviri_yenile")
    ham = os.path.join(klasor, "ham")
    os.makedirs(ham, exist_ok=True)
    for eski in glob.glob(os.path.join(klasor, "*.json")) + glob.glob(os.path.join(ham, "*.json")):
        os.remove(eski)
    args = ["kuyruk", "--cikti", ham]
    if a.dil:
        args += ["--dil", a.dil[0]] if len(a.dil) == 1 else []
    kod, cikti = calistir(*args)
    if kod != 0:
        print(cikti); return 2
    manifest = []
    for yol in sorted(glob.glob(os.path.join(ham, "*.json"))):
        ad = os.path.basename(yol)[:-5]
        dil, tur = ad.split("_", 1)
        if a.dil and dil not in a.dil:
            continue
        with open(yol, encoding="utf-8") as f:
            j = json.load(f)
        ids = list(j["kaynak"].keys())
        for n in range(0, len(ids), a.parca):
            dilim = ids[n:n + a.parca]
            pj = {"dil": dil, "tur": tur, "kaynak": {i: j["kaynak"][i] for i in dilim}}
            pad = "%s_%s_%02d.json" % (dil, tur, n // a.parca + 1)
            with open(os.path.join(klasor, pad), "w", encoding="utf-8") as f:
                json.dump(pj, f, ensure_ascii=False, indent=1)
            manifest.append({"parca": pad, "dil": dil, "tur": tur, "madde": len(dilim)})
    with open(os.path.join(klasor, "MANIFEST.json"), "w", encoding="utf-8") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=1)
    toplam = sum(m["madde"] for m in manifest)
    print("parça: %d · madde: %d · klasör: %s" % (len(manifest), toplam, klasor))
    print("her parça için bir Sonnet alt ajan: girdi <klasor>\\<parca>.json → çıktı <parca>.cevap.json "
          "(talimat denetim/CEVIRI-1103/CEVIRMEN.md). Bitince: py arac/ceviri_yenile.py topla --klasor %s" % klasor)
    return 0


def topla(a):
    klasor = a.klasor or os.path.join(tempfile.gettempdir(), "atlas_ceviri_yenile")
    mp = os.path.join(klasor, "MANIFEST.json")
    if not os.path.exists(mp):
        print("MANIFEST yok — önce hazirla"); return 2
    with open(mp, encoding="utf-8") as f:
        manifest = json.load(f)
    aktif = set(aktif_diller())
    sorun = 0
    for m in manifest:
        if m["dil"] not in aktif:
            print("ATLANDI (dil aktif değil): %s" % m["parca"]); sorun += 1; continue
        taban = os.path.join(klasor, m["parca"][:-5])
        cevaplar = sorted(glob.glob(taban + ".cevap.json") + glob.glob(taban + ".cevap.*.json"))
        if not cevaplar:
            print("EKSİK cevap: %s" % m["parca"]); sorun += 1; continue
        for c in cevaplar:
            kod, cikti = calistir("uygula", "--dil", m["dil"], "--is", os.path.join(klasor, m["parca"]), "--girdi", c)
            print("%s ← %s : %s" % (m["parca"], os.path.basename(c), cikti.strip().splitlines()[-1] if cikti.strip() else kod))
            if kod != 0:
                sorun += 1
    kod, cikti = calistir("denetim")
    print(cikti.strip().splitlines()[-1] if cikti.strip() else "")
    return 1 if (sorun or kod != 0) else 0


def durum(a):
    kod, cikti = calistir("denetim")
    print(cikti)
    return kod


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("komut", choices=["hazirla", "topla", "durum"])
    ap.add_argument("--klasor")
    ap.add_argument("--parca", type=int, default=120)
    ap.add_argument("--dil", nargs="*")
    a = ap.parse_args()
    return {"hazirla": hazirla, "topla": topla, "durum": durum}[a.komut](a)


if __name__ == "__main__":
    sys.exit(main())
