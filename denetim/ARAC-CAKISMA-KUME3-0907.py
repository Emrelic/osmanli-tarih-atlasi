# -*- coding: utf-8 -*-
"""KÜME 3 — Çaldıran · Başkale. HÜKÜM: `p0035` KAZANIR.

🔴 VE BU BİR ANLAŞMAZLIK DEĞİLDİ: `ok110` 1639-05-17'yi İDDİA ETMİYOR,
   TAŞIYOR — kendi `neden`i söylüyor ("Osmanlı 1639-05-17'de başlamaya
   DEVAM ediyor", yani dokunmadı; düzelttiği şey akkoyunlu bloğuydu).
   `p0035` ise onu ADIYLA hedef alıyor ve kaynak gösteriyor.

Üç dayanak:
  ① TDV `hakkari` (73.761 kar.) — «Osmanlılar'ın Van'ı fethetmesi
     üzerine kurulan Van eyaletine bağlandı … ocaklık»
  ② KOMŞU ÖLÇÜMÜ — 200 km'de safevî bitişi: 1548-08-25 → 9 nokta
     (Van'ın KENDİSİ · Bargiri 21 km · Erciş · Özalp · Hoşap · Kotur),
     1639-05-17 → yalnız 3 (ikisi bu kayıtlar)
  ③ KAYDIN KENDİ İÇ ÇELİŞKİSİ — `ok110`un `kaynak:`ı "ankraj Van —
     külliyattaki zincir" diyor ama Van'ın gününü TAŞIMIYOR.

🔴 VERİ YAZMAZ.
"""
import copy
import io
import json
import os
import subprocess
import sys
import tempfile

KOK = r"C:\atlas"
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

HEDEF = ["Çaldıran", "Başkale"]
SON = "1923-10-29"
KAY = ("TDV `hakkari` (73.761 kar., kesilmedi) — «XVI. yüzyılın "
       "başlarında Osmanlı idaresine giren yöre bir ara Safevîler'e tâbi "
       "oldu. Bu yüzyılın ORTALARINDA Osmanlılar'ın VAN'I FETHETMESİ "
       "ÜZERİNE kurulan VAN EYALETİNE BAĞLANDI ve … ocaklık … biri "
       "haline getirildi.» 🟡 GÜNÜN dayanağı ayrı: TDV «yüzyılın "
       "ortalarında» diyor, GÜN vermiyor. `1548-08-25` VAN'ın fetih "
       "günüdür ve KOMŞU ANKRAJIDIR (`YONTEM ③`: komşusunun kullandığı "
       "gün, kendi seçtiğinden dayanaklıdır) — 200 km'de 9 nokta onu "
       "taşıyor, Van'ın KENDİSİ dâhil. ⇒ OLAYIN dayanağı TDV, GÜNÜN "
       "dayanağı komşu ankrajı; ikisi AYRI ve ikisi de yazılı.")


def oku(yol):
    JS = ("const fs=require('fs'),vm=require('vm');const c={window:{}};"
          "vm.createContext(c);vm.runInContext(fs.readFileSync("
          "process.argv[2],'utf8'),c);"
          "const k=Object.keys(c.window).find(x=>Array.isArray(c.window[x]));"
          "process.stdout.write(JSON.stringify(c.window[k]));")
    fd, p = tempfile.mkstemp(suffix=".js")
    os.write(fd, JS.encode("utf-8"))
    os.close(fd)
    r = subprocess.run(["node", p, yol], capture_output=True)
    os.unlink(p)
    assert r.returncode == 0, r.stderr.decode("utf-8", "replace")[:300]
    return {k["ad"]: k for k in json.loads(r.stdout.decode("utf-8"))}


P35 = oku("data/yer_yama_p0035.js")
TBM = oku("data/yer_yama_tbmm_1920_0905.js")

yama, atlanan = [], []
for ad in HEDEF:
    p = P35.get(ad)
    t = TBM.get(ad)
    if p is None:
        atlanan.append((ad, "🔴 p0035'te YOK"))
        continue
    kayit = {"ad": ad}
    for alan in ("d", "s", "v", "isg"):
        if alan in p:
            kayit[alan] = copy.deepcopy(p[alan])
    # safevî bitişine kaynağı YAZ
    for q in kayit.get("s", []):
        if q.get("d") == "safevi" and q.get("t") == "1548-08-25":
            q["kaynak"] = KAY
    # TBMM kuyruğunu KORU (benim FAZ 1 yamam) — p0035 onu bilmiyor
    if t:
        tb = [q for q in (t.get("s") or [])
              if q.get("d") == "tbmm-turkiye"]
        if tb:
            var = any(q.get("d") == "tbmm-turkiye"
                      for q in kayit.get("s", []))
            if not var:
                kayit.setdefault("s", []).extend(copy.deepcopy(tb))
                # Osmanlı `d:` ucunu TBMM gününe çek
                for q in kayit.get("d", []):
                    if q.get("t") == SON:
                        q["t"] = tb[0]["f"]
    kayit.setdefault("s", []).sort(key=lambda x: x["f"])
    # SINAV: ters/sıfır + süreklilik
    ters = [q for a in ("d", "s", "v", "isg") for q in kayit.get(a, [])
            if q.get("f") and q.get("t") and q["f"] >= q["t"]]
    if ters:
        atlanan.append((ad, "🔴 TERS/SIFIR: %s" % ters[:2]))
        continue
    dil = sorted([(q["f"], q["t"]) for a in ("d", "s", "v")
                  for q in kayit.get(a, [])], key=lambda x: x[0])
    im, bos = dil[0][0], []
    for f, tt in dil:
        if tt <= im:
            continue
        if f > im:
            bos.append("%s→%s" % (im, f))
        im = max(im, tt)
    if im < SON:
        bos.append("%s→%s" % (im, SON))
    if bos:
        atlanan.append((ad, "🔴 BOŞLUK: %s" % " ".join(bos)))
        continue
    yama.append(kayit)
    print("── %-10s %s" % (ad, " | ".join(
        "%s→%s:%s" % (q["f"], q["t"], q.get("d") or "OSM")
        for q in kayit.get("s", []) if q["f"] >= "1500")))
    print("   %-10s d: %s" % ("", " | ".join(
        "%s→%s" % (q["f"], q["t"]) for q in kayit.get("d", []))))

print("\n🟢 birleşen: %d · 🔴 atlanan: %d %s" % (len(yama), len(atlanan),
                                                atlanan))
yol = os.path.join(KOK, "denetim", "yer_yama_kume3_0907.js")
with open(yol, "w", encoding="utf-8") as f:
    f.write("// denetim/yer_yama_kume3_0907.js — CAKISMA-0907\n")
    f.write("// Çaldıran · Başkale · TASLAK · koşu 8 sürüyor\n")
    f.write("// Gerekçe: denetim/HUKUM-CAKISMA-KUME3-0907.md\n")
    f.write("window.YER_YAMA_KUME3_0907 = ")
    json.dump(yama, f, ensure_ascii=False, indent=1)
    f.write(";\n")
print("⇒ %s" % yol)
