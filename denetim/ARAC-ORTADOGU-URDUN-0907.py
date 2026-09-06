# -*- coding: utf-8 -*-
"""① ÜRDÜN — yama ÜRETECİ + SINAVI (yöntem ⑥⑦).

🔴 ELLE YAZILMIYOR: kayıtların `s:` dizisi CANLI VERİDEN okunup gün
   üzerinden BÖLÜNÜYOR. (Silistre vakası: elle yazılan yama 6 dönemin
   5'ini siliyordu.)
🔴 SINAV: `d:`+`v:`+`s:` BİRLİKTE sürekli mi · ters/sıfır dönem ·
   künye penceresi tutuyor mu · C13 ateşleme.
🔴 VERİ YAZMAZ — çıktı `denetim/` altına.
"""
import copy
import io
import json
import os
import subprocess
import sys
import tempfile

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
import girdi  # noqa: E402

GUN = "1921-02-01"
SON = "1923-10-29"
HEDEF = ["Amman", "Kerak"]
KIMLIK = "urdun-emirligi"

JS = ("const fs=require('fs'),vm=require('vm');const c={window:{}};"
      "vm.createContext(c);vm.runInContext("
      "fs.readFileSync('data/devletler.js','utf8'),c);"
      "const k=Object.keys(c.window).find(x=>Array.isArray(c.window[x]));"
      "process.stdout.write(JSON.stringify(c.window[k]));")
fd, p = tempfile.mkstemp(suffix=".js")
os.write(fd, JS.encode("utf-8"))
os.close(fd)
r = subprocess.run(["node", p], capture_output=True)
os.unlink(p)
K = {k["id"]: k for k in json.loads(r.stdout.decode("utf-8"))}
ku = K[KIMLIK]
print("═══ ④ ÖN KOŞUL")
print("   künye %s : %s → %s · harita:%s"
      % (KIMLIK, ku.get("f"), ku.get("t"), ku.get("harita", "—")))
assert ku["f"] <= GUN < ku["t"], "🔴 künye penceresi GÜNÜ TUTMUYOR"
print("   🟢 pencere günü tutuyor")

Y = girdi.yukle(sessiz=True)
ix = {z["ad"]: z for z in Y}


def surekli(d, s, v, bas):
    dilim = sorted([(q["f"], q["t"]) for q in d + s + v],
                   key=lambda x: x[0])
    im, bos = bas, []
    for f, t in dilim:
        if t <= im:
            continue
        if f > im:
            bos.append("%s→%s" % (im, f))
        im = max(im, t)
    if im < SON:
        bos.append("%s→%s" % (im, SON))
    return bos


yama, atlanan = [], []
for ad in HEDEF:
    z = ix.get(ad)
    if z is None:
        atlanan.append((ad, "ATLASTA YOK"))
        continue
    s = [dict(q) for q in (z.get("s") or [])]
    d = [dict(q) for q in (z.get("d") or [])]
    v = [dict(q) for q in (z.get("v") or [])]
    bol = [q for q in s
           if q.get("f", "") <= GUN < q.get("t", "")]
    if len(bol) != 1:
        atlanan.append((ad, "🔴 GÜNÜ KAPSAYAN `s:` dönemi %d" % len(bol)))
        continue
    q = bol[0]
    eski_t = q["t"]
    yeni = []
    for x in s:
        if x is q:
            a = dict(x)
            a["t"] = GUN
            yeni.append(a)
            b = {"f": GUN, "t": eski_t, "d": KIMLIK,
                 "kaynak": ("TDV `urdun` — «kardeşi Abdullah Ürdün'e "
                            "gelerek Şubat 1921'de kendini Şarkī Ürdün "
                            "emîri ilân etti». 🟡 OLAYIN dayanağı KESİN, "
                            "GÜNÜN dayanağı YOK: kaynak AY veriyor. "
                            "Gün künyeden DEVRALINDI (`urdun-emirligi` "
                            "f:1921-02-01) — §4'ün kaba tarih kuralı "
                            "burada uygulanamadı, çünkü `1921-01-01` "
                            "maddeyi künye penceresinin DIŞINA "
                            "düşürürdü (`4d`).")}
            yeni.append(b)
        else:
            yeni.append(dict(x))
    yeni.sort(key=lambda x: x["f"])
    bas = min([x["f"] for x in d + yeni + v] or [GUN])
    bos = surekli(d, yeni, v, bas)
    if bos:
        atlanan.append((ad, "🔴 KATMAN BOŞLUKLU: %s" % " ".join(bos)))
        continue
    yama.append({"ad": ad, "s": yeni})

print("\n═══ ⑥ YAMA")
for k in yama:
    print("   %-10s %s" % (k["ad"],
                           " | ".join("%s→%s:%s" % (q["f"], q["t"],
                                                    q.get("d") or "OSM")
                                      for q in k["s"])))
print("   atlanan: %d %s" % (len(atlanan), atlanan))

# ── C13 ATEŞLEME: boşluk dalı ZORLA koşulur
if yama:
    bz = copy.deepcopy(yama[0])
    for q in bz["s"]:
        if q.get("d") == KIMLIK:
            q["f"] = "1921-06-01"          # 4 aylık SAHTE boşluk
    z = ix[bz["ad"]]
    bos = surekli([dict(x) for x in (z.get("d") or [])], bz["s"],
                  [dict(x) for x in (z.get("v") or [])],
                  min(x["f"] for x in bz["s"]))
    print("\n═══ ⑦ C13 ATEŞLEME (dal ZORLANIYOR)")
    print("   bozulmuş kayıt : %s" % (bos or "🔴 DAL ATEŞLEMEDİ"))
    assert bos, "🔴 C13 İHLALİ — boşluk dalı zorlanamadı"
    print("   ⇒ 🟢 dal ateşledi")

cikti = {
    "_NOT": ("① ÜRDÜN · ORTADOĞU · 7 Eylül 2026 · TASLAK, veri yazılmadı. "
             "Model: MANDA → KENDİ KİMLİĞİ (`YONTEM §②a`). Yama CANLI "
             "VERİDEN üretildi, elle yazılmadı."),
    "_MAAN": ("KASTEN DIŞARIDA — bugün `s:hicaz`, 1925'e kadar ihtilâflı "
              "(koordinatör notu). ÖLÇÜLDÜ: Maan `s:hicaz 1918-09-27→"
              "1923-10-29` taşıyor. Kaynağa SORMADIM."),
    "_FILISTIN": ("Kudüs · Akkâ · Nablus · Yafa · Gazze · Han Yûnus "
                  "`yer_yama_manda_0906.js`te ZATEN VAR (`filistin-mandasi`, "
                  "6 kayıt) — dokunulmadı."),
    "_2S": ("🔴 1921-02-01'in çekirdekteki en yakın maddesi 22 gün "
            "uzaklıkta ve KONUSU ALAKASIZ (Birinci İnönü Muharebesi). "
            "Eşiği geçiyor ama yöntemin ⑤. adımı gereği YETMEZ ⇒ "
            "çekirdek maddesi YAZILDI: KRONOLOJI-ORTADOGU-URDUN-0907.json"),
    "kayit": yama,
}
yol = os.path.join(KOK, "denetim", "yer_yama_ortadogu_1923.js")
with open(yol, "w", encoding="utf-8") as f:
    f.write("// denetim/yer_yama_ortadogu_1923.js — ORTADOĞU · 7 Eylül 2026\n")
    f.write("// TASLAK · veri yazılmadı · koşu 7b sürüyor\n")
    f.write("window.YER_YAMA_ORTADOGU_1923 = ")
    json.dump(yama, f, ensure_ascii=False, indent=1)
    f.write(";\n")
with open(os.path.join(KOK, "denetim", "ORTADOGU-YAMA-URDUN-0907.json"),
          "w", encoding="utf-8") as f:
    json.dump(cikti, f, ensure_ascii=False, indent=1)
print("\n⇒ %s" % yol)
