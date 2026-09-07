# -*- coding: utf-8 -*-
"""
ARAC-SINIR-ANADOLU-HAYALET2-0907 — SINIR-ANADOLU-0907 · 7 Eylul 2026

Bes hayalet noktanin (`rusya` → 1923-10-29) ARDIL KIMLIGINI olcer.
§3.5.1: "bir sinir kaymasi onerildiginde IKI UC DA olculur" — bir hayaleti
kapatmak, ardil kimligin PENCERESI tutmuyorsa bir DELIK acar (§3.5.0 ARDIL).

UC SORU:
  ① ardil kimlik VAR MI ve penceresi bosluğu KAPATIYOR MU?
  ② EMSAL var mi — ayni gecisi DOGRU yapan komsu kayit?
  ③ hayalet SINIFI hangisi (BATNOZ / ZEND / ARDIL)?
"""
import sys, io, os, json

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
CIKTI = os.path.join(KOK, "denetim", "OLCUM-HAYALET2-ANADOLU-0907.json")

import girdi  # noqa: E402
import subprocess

HAYALET = ["Sohum", "Soçi (Sâşe)", "Tuapse", "Maykop (Çerkezya)", "Derbend"]
EMSAL_ADAY = ["Kuban (Yekaterinodar)", "Anapa", "Kuba", "Tarki (Tarku)", "Batum",
              "Kutaisi", "Şâbüran", "Kabala", "Şeki (Nuha)", "Kuban Nogay bozkırı"]


def kunyeler():
    js = ("const fs=require('fs');global.window={};"
          "eval(fs.readFileSync(process.argv[2],'utf8'));"
          "console.log(JSON.stringify((window.DEVLETLER||[]).map(d=>"
          "({id:d.id,ad:d.ad,f:d.f,t:d.t}))));")
    yol = os.path.join(KOK, "denetim", "_kunye_oku_hayalet.js")
    open(yol, "w", encoding="utf-8").write(js)
    p = subprocess.run(["node", yol, os.path.join(KOK, "data", "devletler.js")],
                       capture_output=True, text=True, encoding="utf-8")
    return {d["id"]: d for d in json.loads(p.stdout)}


def zincir(y):
    return ["%s→%s %s" % (q.get("f"), q.get("t"), q.get("d")) for q in (y.get("s") or [])]


def main():
    Y = girdi.yukle()
    K = kunyeler()
    ix = {}
    for y in Y:
        ix.setdefault(y.get("ad"), y)

    print("── ① ARDIL KIMLIKLERIN PENCERESI ──")
    for kid in ("rusya", "rusya-gecici-hukumet", "sovyet-rusya"):
        d = K.get(kid)
        print("   %-24s %s → %s   %s" % (kid, d["f"], d["t"], d["ad"][:40]) if d
              else "   %-24s 🔴 KUNYE YOK" % kid)
    bosluk = ("1917-03-15", "1923-10-29")
    kapali = (K["rusya-gecici-hukumet"]["f"] <= bosluk[0]
              and K["sovyet-rusya"]["t"] >= bosluk[1])
    print("   ⇒ 1917-03-15 → 1923-10-29 boslugunu ardillar KAPATIYOR MU:",
          "🟢 EVET" if kapali else "🔴 HAYIR")

    print("\n── ② EMSAL: ayni gecisi DOGRU yapan komsu var mi? ──")
    emsal = []
    for ad in EMSAL_ADAY:
        y = ix.get(ad)
        if not y:
            continue
        z = zincir(y)
        gecis = [s for s in z if "rusya" in s or "sovyet" in s]
        if gecis:
            emsal.append({"ad": ad, "gecis": gecis})
            print("   %-24s %s" % (ad, " | ".join(gecis)))
    tam = [e for e in emsal if any("rusya-gecici-hukumet" in g for g in e["gecis"])]
    print("   ⇒ UC ASAMALI (rusya → gecici → sovyet) emsal:", len(tam),
          [e["ad"] for e in tam] or "YOK")

    print("\n── ③ HAYALETLERIN ZINCIRI ve SINIFI ──")
    kayit = []
    for ad in HAYALET:
        y = ix.get(ad)
        if not y:
            print("   🔴 BULUNAMADI:", ad); continue
        z = zincir(y)
        son = [q for q in (y.get("s") or []) if q.get("d") == "rusya"]
        s = son[-1] if son else {}
        fazla_gun = 0
        if s.get("t") and K["rusya"]["t"]:
            from datetime import date
            a = date(*map(int, K["rusya"]["t"].split("-")))
            b = date(*map(int, s["t"].split("-")))
            fazla_gun = (b - a).days
        kayit.append({"ad": ad, "lat": y.get("lat"), "lon": y.get("lon"),
                      "zincir": z, "rusya_donemi": s,
                      "kunye_asimi_gun": fazla_gun,
                      "kunye_asimi_yil": round(fazla_gun / 365.25, 2)})
        print("   %-22s rusya %s→%s   KUNYE ASIMI %s gun (%.2f yil)"
              % (ad, s.get("f"), s.get("t"), fazla_gun, fazla_gun / 365.25))

    sinif = ("① BATNOZ — devlet OLDU, yerine BASKASI gecti, veri OLUYU boyuyor. "
             "CARE: donemi KISALT + ardil kimlikleri YAZ." if kapali else
             "③ ARDIL — ardil kimlik penceresi TUTMUYOR; kisaltmak DELIK acar.")
    print("\n   SINIF:", sinif)

    json.dump({
        "_NOT": "§3.5 hayalet olcumu, IKINCI UC dahil. OLCUM — duzeltme UYGULANMADI; "
                "yerlesim dosyalari §7'ye gore benim degil.",
        "bosluk": bosluk, "ardil_kapatiyor_mu": kapali, "sinif": sinif,
        "ardil_kunyeler": {k: K.get(k) for k in
                           ("rusya", "rusya-gecici-hukumet", "sovyet-rusya")},
        "hayaletler": kayit, "emsaller": emsal,
        "uc_asamali_emsal": [e["ad"] for e in tam],
    }, open(CIKTI, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("\nyazildi:", CIKTI)


if __name__ == "__main__":
    main()
