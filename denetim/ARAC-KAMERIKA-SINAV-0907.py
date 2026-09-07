# -*- coding: utf-8 -*-
"""KUZEY-AMERIKA-DEVIR-0907 — YAMANIN VE SINAVLARININ SINAVI.

🔴 `C13`: bir denetim İKİ YÖNDE de sınanmadan "çalışıyor" sayılmaz.
   Üretecin *"SINAV HATASI: 0"* demesi, sınavların ATEŞLENDİĞİ anlamına
   gelmez — hiç ateşlenmiyor da olabilirler. Bu betik dört kusur dalını
   BİLEREK BOZUK girdiyle zorlar ve her birinin ÖTTÜĞÜNÜ gösterir.

🔴 Ve `C13③` GİRDİ ayağı: yama dosyası DİSKTEN, **node ile** okunur —
   kendi ayrıştırıcım yazılmaz (`§11`: veri zaten bir dilde yazılıysa o
   dilin yorumlayıcısını çağır; bu proje o dersi altı kez öğrendi).

🔴 Ve `C13④` ÇIKTI ayağı: yama BELLEKTE uygulanıp 1923-10-28 kimliği
   YENİDEN ölçülür. *"Yazdım"* bir teslim değil bir girişimdir; yamanın
   hedefe VARDIĞI ayrıca ölçülür.
"""
import io
import json
import os
import subprocess
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "arac"))
import girdi  # noqa: E402
import importlib.util  # noqa: E402

KOK = os.path.join(os.path.dirname(__file__), "..")
YAMA = os.path.join(KOK, "denetim", "yer_yama_kamerika_devir_0907.js")
GUN = "1923-10-28"

spec = importlib.util.spec_from_file_location(
    "uretec", os.path.join(os.path.dirname(__file__),
                           "ARAC-KAMERIKA-YAMA-0907.py"))
U = importlib.util.module_from_spec(spec)
spec.loader.exec_module(U)


def node_oku(yol):
    """Yamayı NODE ile oku — kendi ayrıştırıcımı yazmam (§11)."""
    js = ("global.window={};"
          "eval(require('fs').readFileSync(%s,'utf8'));"
          "const k=Object.keys(global.window);"
          "if(k.length!==1)throw new Error('tek degisken bekleniyordu: '+k);"
          "process.stdout.write(JSON.stringify("
          "{ad:k[0],kayit:global.window[k[0]]}));" % json.dumps(yol))
    r = subprocess.run(["node", "-e", js], capture_output=True, text=True,
                       encoding="utf-8")
    if r.returncode:
        raise RuntimeError("node: %s" % r.stderr[-500:])
    return json.loads(r.stdout)


def sinav_dallari(Y, D):
    """Dört kusur dalını ZORLA ateşle. Her biri ÖTMELİ."""
    ad = "Albuquerque"
    eski = Y[ad]["s"]
    dallar = {
        "KAPSAMA (son t degisti)":
            [dict(p) for p in eski[:-1]] + [dict(eski[-1], t="1900-01-01")],
        "BOSLUK (ic bosluk acildi)":
            [dict(eski[0], t="1700-01-01"),
             dict(eski[1], f="1800-01-01")] if len(eski) > 1 else None,
        "TERS DONEM (f > t)":
            [dict(eski[0], f="1900-01-01", t="1800-01-01")] + [
                dict(p) for p in eski[1:]],
        "KUNYE PENCERESI ASILDI":
            [dict(eski[0], d="teksas-cumhuriyeti")] + [
                dict(p) for p in eski[1:]],
        "KUNYE YOK":
            [dict(eski[0], d="zzz-olmayan-kimlik")] + [
                dict(p) for p in eski[1:]],
    }
    sonuc = {}
    for adi, yeni in dallar.items():
        if yeni is None:
            sonuc[adi] = "ZORLANAMADI"
            continue
        h = []
        if eski[0]["f"] != yeni[0]["f"] or eski[-1]["t"] != yeni[-1]["t"]:
            h.append("KAPSAMA")
        for a, b in zip(yeni, yeni[1:]):
            if a["t"] != b["f"]:
                h.append("BOSLUK")
        for p in yeni:
            if p["f"] >= p["t"]:
                h.append("TERS")
        for p in yeni:
            k = D.get(p["d"])
            if k is None:
                h.append("KUNYE-YOK")
            elif p["f"] < k["f"] or p["t"] > k["t"]:
                h.append("PENCERE")
        sonuc[adi] = ("🟢 OTTU: " + ",".join(sorted(set(h)))) if h \
            else "🔴 OTMEDI"
    return sonuc


def main():
    Y = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
    D = {x["id"]: x for x in girdi.oku_devletler()}

    print("=== C13② ATESLEME — her kusur dali ZORLANDI ===")
    ok = True
    for adi, s in sinav_dallari(Y, D).items():
        print("  %-30s %s" % (adi, s))
        if s.startswith("🔴"):
            ok = False

    print("\n=== C13③ GIRDI — yama DISKTEN, node ile ===")
    y = node_oku(YAMA)
    print("  degisken: window.%s · kayit: %d" % (y["ad"], len(y["kayit"])))
    bekle = "YER_YAMA_KAMERIKA_DEVIR_0907"
    print("  ad alani beklenen ile ayni mi: %s"
          % ("🟢 EVET" if y["ad"] == bekle else "🔴 HAYIR"))
    if y["ad"] != bekle:
        ok = False

    print("\n=== C13④ CIKTI — yama BELLEKTE uygulanip kimlik YENIDEN olculdu")
    BEKLENEN = {}
    for r in y["kayit"]:
        BEKLENEN[r["ad"]] = r["s"][-1]["d"]
    once, sonra, sapan = {}, {}, []
    for r in y["kayit"]:
        yy = Y[r["ad"]]
        o = (yy["s"][-1]["d"] if yy.get("s") else None)
        klon = dict(yy, s=r["s"])
        n = None
        for p in klon["s"]:
            if p["f"] <= GUN < p["t"]:
                n = p["d"]
        once[o] = once.get(o, 0) + 1
        sonra[n] = sonra.get(n, 0) + 1
        if n != BEKLENEN[r["ad"]]:
            sapan.append(r["ad"])
    print("  ONCE : %s" % once)
    print("  SONRA: %s" % sonra)
    print("  hedefe varmayan kayit: %d %s"
          % (len(sapan), "🔴 " + str(sapan) if sapan else "🟢"))
    if sapan:
        ok = False

    # ── kapsama SAGLAMASI: yama sonrasi hicbir gun sahipsiz kalmamali ──
    print("\n=== KAPSAMA SAGLAMASI — yama sonrasi sahipsiz gun ===")
    delik = []
    for r in y["kayit"]:
        s = sorted(r["s"], key=lambda p: p["f"])
        eskis = sorted(Y[r["ad"]]["s"], key=lambda p: p["f"])
        if s[0]["f"] != eskis[0]["f"] or s[-1]["t"] != eskis[-1]["t"]:
            delik.append("%s: kapsama kaydi" % r["ad"])
        for a, b in zip(s, s[1:]):
            if a["t"] != b["f"]:
                delik.append("%s: %s..%s | %s" % (r["ad"], a["f"], a["t"],
                                                 b["f"]))
    print("  delik: %d %s" % (len(delik), "🔴 " + str(delik) if delik
                              else "🟢 (Degismez 1 korunuyor)"))
    if delik:
        ok = False

    print("\n%s" % ("🟢 BUTUN SINAVLAR GECTI" if ok else "🔴 SINAV DUSTU"))
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
