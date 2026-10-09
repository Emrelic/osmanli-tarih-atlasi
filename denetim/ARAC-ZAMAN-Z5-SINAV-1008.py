# -*- coding: utf-8 -*-
"""ZAMAN-Z5 yamasının BELLEKTE sınavı — veriye yazmaz.
    py denetim/ARAC-ZAMAN-Z5-SINAV-1008.py
① DÖNEM BÖLMESİ: 1923-10-29 öncesi hiçbir dönem değişmedi (yalnız t'si 1923-10-29 olanın t'si
   ve 1923-10-29 sonrası yeni dönemler) — s/isg/v üçünde.
② künye penceresi: yeni/uzayan her dönem [f,t] künyenin [f,t]'sinin İÇİNDE (4c/4d'nin sorusu).
③ sıfır uzunluk / ters dönem / s: içinde zaman çakışması YOK.
④ boya: yazılan her d: BOYALAR'da (id ya da künyenin harita:'sı) — yoksa HARİTA DELİĞİ listesi.
⑤ kaynaksızlık (denetle.kaynaksizlik_olc'nin kopyası): taban → yamalı.
Çıkış 0 temiz · 1 ihlal (①/③) · ②/④ RAPOR (ön şartlar beyanlı).
"""
import collections, json, os, subprocess, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.join(os.getcwd(), "arac"))
import girdi, renkler

UC = "1923-10-29"
YAMA = sys.argv[1] if len(sys.argv) > 1 else "denetim/ZAMAN-Z5-1008-yer_yama_1923_1945.js"
ya = json.loads(subprocess.run(["node", "-e",
    f"global.window={{}};eval(require('fs').readFileSync('{YAMA}','utf8'));"
    "process.stdout.write(JSON.stringify(window.YER_YAMA_1923_1945))"],
    capture_output=True, text=True, encoding="utf-8", check=True).stdout)
Y = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
KU = girdi.oku_devletler()
K = {d["id"]: d for d in KU if d.get("id")}
B = renkler.BOYALAR


def pad(t):
    y, _, r = t.partition("-")
    return y.zfill(5) + "-" + r


ihlal, rapor = collections.Counter(), collections.defaultdict(list)
for x in ya:
    y = Y.get(x["ad"])
    if not y:
        ihlal["veride_yok"] += 1; rapor["veride_yok"].append(x["ad"]); continue
    for alan in ("s", "isg", "v"):
        if alan not in x:
            continue
        eski, yeni = y.get(alan) or [], x[alan]
        # ① eski dönemler: t==UC olan hariç BİREBİR, t==UC olanın yalnız t'si değişebilir
        ei = [p for p in eski]
        eslesen = 0
        for p in ei:
            aday = [q for q in yeni if q.get("f") == p.get("f") and q.get("d") == p.get("d")
                    and (q.get("kid") == p.get("kid"))]
            if not aday:
                ihlal["eski_donem_kayip"] += 1; rapor["eski_donem_kayip"].append((x["ad"], alan, p)); continue
            q = aday[0]
            if p.get("t") == UC:
                if pad(q["t"]) <= pad(UC) and q["t"] != UC:
                    ihlal["uc_donem_kisaldi_1923_once"] += 1; rapor["uc_donem_kisaldi_1923_once"].append((x["ad"], alan, q))
                fark = {k for k in set(p) | set(q) if p.get(k) != q.get(k)} - {"t"}
            else:
                fark = {k for k in set(p) | set(q) if p.get(k) != q.get(k)}
            if fark:
                ihlal["eski_donem_degisti"] += 1; rapor["eski_donem_degisti"].append((x["ad"], alan, sorted(fark)))
            eslesen += 1
        for q in yeni[len(ei):] if False else []:
            pass
        yeniler = [q for q in yeni if not any(q.get("f") == p.get("f") and q.get("d") == p.get("d")
                                             and q.get("kid") == p.get("kid") for p in ei)]
        for q in yeniler:
            if pad(q["f"]) < pad(UC):
                ihlal["yeni_donem_1923_once"] += 1; rapor["yeni_donem_1923_once"].append((x["ad"], alan, q))
        # ③ sıfır/ters
        for q in yeni:
            if q.get("f") and q.get("t") and pad(q["t"]) <= pad(q["f"]):
                ihlal["sifir_ya_da_ters"] += 1; rapor["sifir_ya_da_ters"].append((x["ad"], alan, q))
        if alan == "s":
            ss = sorted((q for q in yeni if q.get("f") and q.get("t")), key=lambda q: pad(q["f"]))
            for a, b in zip(ss, ss[1:]):
                if pad(b["f"]) < pad(a["t"]):
                    ihlal["s_cakisma"] += 1; rapor["s_cakisma"].append((x["ad"], a, b))
        # ② künye penceresi + ④ boya — yalnız 1923 sonrasına dokunan dönemler
        for q in yeni:
            if not q.get("t") or pad(q["t"]) <= pad(UC):
                continue
            kid = q.get("kid") if alan == "v" else q.get("d")
            if not kid or kid == "__BOSLUK__":
                continue
            k = K.get(kid) or next((d for d in KU if d.get("harita") == kid), None)
            if not k:
                rapor["kunyesiz_d"].append((x["ad"], alan, kid)); continue
            if pad(q["t"]) > pad(k.get("t") or "9999"):
                rapor["4c_kunye_olumunu_asiyor"].append((x["ad"], alan, kid, q["t"], k.get("t")))
            if pad(max(q["f"], UC)) < pad(k.get("f") or "0000"):
                rapor["4d_kunye_dogumundan_once"].append((x["ad"], alan, kid, q["f"], k.get("f")))
            if alan != "v" and kid not in B and (k.get("harita") or "") not in B:
                rapor["boyasiz_d"].append((x["ad"], kid))


def dolu(v):
    return bool(v.strip()) if isinstance(v, str) else bool(v)


def hicbiri(YY):
    return sum(1 for y in YY if y.get("s") and not dolu(y.get("kaynak"))
               and not any(isinstance(p, dict) and dolu(p.get("kaynak")) for p in y["s"]))


taban = hicbiri(Y.values())
Y2 = {a: dict(y) for a, y in Y.items()}
for x in ya:
    if x["ad"] in Y2:
        for alan in ("s", "isg", "v"):
            if alan in x:
                Y2[x["ad"]][alan] = x[alan]
print(f"yama kaydı {len(ya)}")
print("① ③ İHLAL:", dict(ihlal) or "YOK")
for k in ("eski_donem_kayip", "eski_donem_degisti", "uc_donem_kisaldi_1923_once", "yeni_donem_1923_once",
          "sifir_ya_da_ters", "s_cakisma", "veride_yok"):
    if rapor[k]:
        print(f"  {k}: {rapor[k][:5]}")
c4 = collections.Counter(r[2] for r in rapor["4c_kunye_olumunu_asiyor"])
d4 = collections.Counter(r[2] for r in rapor["4d_kunye_dogumundan_once"])
bo = collections.Counter(r[1] for r in rapor["boyasiz_d"])
print("② 4c künye ölümünü aşan (kimlik:dönem):", dict(c4))
print("② 4d künye doğumundan önce:", dict(d4))
print("② künyesiz d:", collections.Counter(r[2] for r in rapor["kunyesiz_d"]))
print("④ BOYASIZ d (kimlik:kayıt):", dict(bo), "· toplam kayıt", len({r[0] for r in rapor["boyasiz_d"]}))
print(f"⑤ kaynaksız s: (hiçbiri) taban {taban} → yamalı {hicbiri(Y2.values())}")
json.dump({k: v for k, v in rapor.items()}, open("denetim/ZAMAN-Z5-1008-SINAV.json", "w", encoding="utf-8"),
          ensure_ascii=False, indent=1, default=str)
sys.exit(1 if ihlal else 0)
