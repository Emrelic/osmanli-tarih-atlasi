# -*- coding: utf-8 -*-
"""
ARAC-SINIR-ANADOLU-CIPA-0907 — SINIR-ANADOLU-0907 · 7 Eylul 2026

1.MURAT M-3191 ACIL: "cipa gunu atlasa sorulamaz, donemler YARI ACIK
(f <= g < t), 1923-10-29'da canli kimlik 1 · sahipsiz 3804. Yanlis gunle
olctuysen sonucun SESSIZCE bos cikmistir — TEKRARLA."

🔴 DEVRALMIYORUM, OLCUYORUM (ortak sartname §⑧: "bir sevk kendi olcumunle
   celisiyorsa UYGULAMA — olc, yaz, bildir; ama uymamak SESSIZ OLAMAZ").

SORU: tuzak BENIM aletime ateşliyor mu?
  Benim aletim `girdi.yukle()` DEGIL `devletler.js` KUNYE tablosunu okuyor,
  ve karsilastirma KAPALI aralik:  f <= CIPA <= t
  ⇒ hipotez: tuzak bana ateşlemez, iki gun AYNI sonucu verir.
Hipotez SINANIR: ayni tarama iki gunle kosulur, fark basilir.
"""
import json, io, sys, os, subprocess, unicodedata

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ADIM1 = os.path.join(KOK, "denetim", "KIMLIK-1923-0907-ADIM1.json")
CIKTI = os.path.join(KOK, "denetim", "OLCUM-CIPA-ANADOLU-0907.json")

CEVIRI = {ord("İ"): "i", ord("I"): "i", ord("ı"): "i", ord("Ş"): "s", ord("ş"): "s",
          ord("Ğ"): "g", ord("ğ"): "g", ord("Ü"): "u", ord("ü"): "u", ord("Ö"): "o",
          ord("ö"): "o", ord("Ç"): "c", ord("ç"): "c", ord("Â"): "a", ord("â"): "a"}


def norm(s):
    s = (s or "").translate(CEVIRI)
    s = unicodedata.normalize("NFKD", s)
    return "".join(c for c in s if not unicodedata.combining(c)).lower()


ARAMA = {
    "Turkey": ["turkiye", "tbmm"], "Iran": ["iran", "kacar", "pehlevi"],
    "Iraq": ["irak"], "Syria": ["suriye"], "Georgia": ["gurcistan", "gurcu"],
    "Armenia": ["ermenistan", "ermeni"], "Azerbaijan": ["azerbaycan"],
    "Russia": ["rusya", "sovyet", "sscb"], "Bulgaria": ["bulgaristan", "bulgar"],
    "Greece": ["yunanistan", "yunan"],
    "Turkmenistan": ["turkmenistan", "turkmen", "hive", "buhara", "harezm"],
    "Afghanistan": ["afganistan", "afgan"], "Pakistan": ["pakistan", "hindistan"],
}


def devletleri_oku():
    js = ("const fs=require('fs');global.window={};"
          "eval(fs.readFileSync(process.argv[2],'utf8'));"
          "console.log(JSON.stringify((window.DEVLETLER||[]).map(d=>"
          "({id:d.id,ad:d.ad,f:d.f,t:d.t}))));")
    yol = os.path.join(KOK, "denetim", "_kunye_oku_cipa.js")
    open(yol, "w", encoding="utf-8").write(js)
    p = subprocess.run(["node", yol, os.path.join(KOK, "data", "devletler.js")],
                       capture_output=True, text=True, encoding="utf-8")
    if p.returncode != 0:
        print("🔴 node:", p.stderr[:300]); sys.exit(1)
    return json.loads(p.stdout)


def tara(D, gun, kapali=True):
    out = {}
    for ne, anah in ARAMA.items():
        c = []
        for d in D:
            n = norm(d["ad"]) + " " + norm(d["id"])
            if not any(a in n for a in anah):
                continue
            f = d.get("f") or ""
            t = d.get("t") or "9999"
            canli = (f <= gun <= t) if kapali else (f <= gun < t)
            if canli:
                c.append(d["id"])
        out[ne] = sorted(c)
    return out


def main():
    D = devletleri_oku()
    A = tara(D, "1923-10-29", True)      # benim aletimin yaptigi
    B = tara(D, "1923-10-28", True)      # koordinatorun onerdigi gun
    C = tara(D, "1923-10-29", False)     # tuzagin kendisi: YARI ACIK

    print("=== ① TUZAK BENIM ALETIME ATEŞLIYOR MU? ===")
    fark_ab = {k: (A[k], B[k]) for k in A if A[k] != B[k]}
    print("  kapali aralik · 10-29  ↔  10-28   FARK:", fark_ab or "YOK (0 ekseninde)")
    fark_ac = {k: (A[k], C[k]) for k in A if A[k] != C[k]}
    print("  kapali ↔ YARI ACIK (ayni gun)     FARK:", len(fark_ac), "eksende")
    for k, (a, c) in sorted(fark_ac.items()):
        print("     %-14s kapali %-38s yari-acik %s" % (k, a, c or "[]"))

    # ── ② VERIDEN BAGIMSIZ TEYIT: ADIM1'in 1923-10-28 kimlik sayimi
    d1 = json.load(open(ADIM1, encoding="utf-8"))
    K = d1["gunler"]["1923-10-28"]["kimlikler"]
    print("\n=== ② ADIM1 (girdi.yukle, 1923-10-28) — bolgemin uclari ===")
    benim = {"tbmm-turkiye": "Turkey", "kacar": "Iran", "irak-kralligi": "Iraq",
             "suriye-lubnan-mandasi": "Syria", "sovyet-rusya": "Georgia/Armenia/Azerbaijan/Russia/Turkmenistan",
             "bulgaristan-kralligi": "Bulgaria", "yunanistan": "Greece",
             "afganistan": "Afghanistan", "ingiliz-hindistani": "Pakistan"}
    for kid, ne in benim.items():
        print("   %-24s nokta %-5s ← %s" % (kid, K.get(kid, "YOK"), ne))
    kafkas = [k for k in K if any(x in k for x in ("ermeni", "gurc", "azerb", "transkaf"))]
    print("   AYRI Kafkas kimligi (ermeni/gurc/azerb/transkaf):", kafkas or "YOK")
    print("   `rusya` (Carlik, 1917'de bitmis) nokta:", K.get("rusya", 0), " ← veri borcu, BENIM KALEMIM DEGIL")

    json.dump({
        "_NOT": "1.MURAT M-3191 (cipa tuzagi) uyarisinin BENIM aletime ateşleyip "
                "ateşlemedigini olcer. Hipotez: kunye tablosu + KAPALI aralik ⇒ ateşlemez.",
        "kapali_10_29": A, "kapali_10_28": B, "yari_acik_10_29": C,
        "fark_gun_ekseni": fark_ab,
        "fark_aralik_ekseni": {k: {"kapali": v[0], "yari_acik": v[1]} for k, v in fark_ac.items()},
        "adim1_teyit": {k: K.get(k) for k in benim},
        "adim1_ayri_kafkas_kimligi": kafkas,
    }, open(CIKTI, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("\nyazildi:", CIKTI)


if __name__ == "__main__":
    main()
