# -*- coding: utf-8 -*-
"""ODAK-AVRUPA-BATI-0080 — Batı/Orta Avrupa kronoloji maddelerinin HARİTA ODAĞI.

Şartname: oturumlar/ODAK-AVRUPA-BATI-0080.md · öneriler: denetim/ODAK-AVRUPA-BATI-0080-oneri.json
(203 madde: 93 ODAKSIZ + 110 BEYANLI; sınıf A/B/C, D ve E YOK — gerekçe raporda).

KULLANIM
    py denetim/ODAK-AVRUPA-BATI-0080-uygula.py                 KURU KOŞU (hiçbir şey yazmaz)
    py denetim/ODAK-AVRUPA-BATI-0080-uygula.py --uygula        data/ dosyalarına yazar
       --grup A,B,C      yalnız bu sınıflar
       --dikkatsiz       'dikkat' işaretli önerileri (yeri METİN söylemiyor) ATLA
       --sessiz          öneri satırlarını basma, yalnız sayaçlar

NE YAPAR — her öneri için:
  ① maddeyi (dosya, t, b) ile node ayrıştırmasında BULUR; yoksa/çoksa sayar, dokunmaz
  ② ESKİ değeri doğrular: yer_kon/odak_* YOK · yer_id boş · kapsam_genis beklenen
     (BEYANLI → true, ODAKSIZ → yok). Tutmuyorsa DOKUNMAZ, basar
  ③ ŞART: yer_id/odak_yer adı `girdi.yukle()` havuzunda BİREBİR (app.js kuralı: tam ad ya da
     " (" öncesi) · odak_kimlik devletler.js'te VAR ve madde gününde ≥2 yerleşim
     (js/suzgec.js'in KENDİ işleviyle sayılır). Sağlamıyorsa DOKUNMAZ
  ④ metni cerrahi düzenler: yeni alanlar nesnenin sonuna eklenir; A/B/C'de
     `kapsam_genis:true` SİLİNİR (şartname: D değilse beyan yalandır); yer_id:"" yerinde kalır
     ya da A'da doldurulur
  ⑤ yazmadan önce dosyanın TAMAMINI yeniden ayrıştırır: hedef kayıtlar beklenen sözlüğe,
     öteki bütün kayıtlar ESKİSİNE birebir eşit değilse o dosyayı YAZMAZ
Tarih/başlık/kaynak alanlarına DOKUNMAZ.
"""
import io
import json
import os
import re
import subprocess
import sys
import tempfile

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

UYGULA = "--uygula" in sys.argv
DIKKATSIZ = "--dikkatsiz" in sys.argv
SESSIZ = "--sessiz" in sys.argv
GRUP = None
if "--grup" in sys.argv:
    GRUP = set(sys.argv[sys.argv.index("--grup") + 1].upper().split(","))

ONERI = json.load(io.open(os.path.join(KOK, "denetim", "ODAK-AVRUPA-BATI-0080-oneri.json"),
                          encoding="utf-8"))
SINA = os.path.join(KOK, "denetim", "ODAK-AVRUPA-BATI-0080-sina.js")
import odak_olc                                   # noqa: E402 — sınıflayıcı BİREBİR onunki
# W32b (6 Ekim 2026): T4 — sinifla 26741c10 (27 Eyl) ile odak_olc'tan KALDIRILDI;
# betik AttributeError ile çöküp ÇIKIŞ 1 ("ihlal") veriyordu. Artık açılışta ÇIKIŞ 2,
# veriye HİÇBİR ŞEY yazılmadan. Taşıma: arac/odak_cozum.js (W36: ODAK-ASYA-0080-uygula).
import olcu_kapisi_1006 as _w32_ok
_w32_ok.api(odak_olc, ['sinifla'], "odak_olc")
ONGORU = {"ODAKSIZ": [0, 0], "BEYANLI": [0, 0]}
YENI_ALANLAR = ("yer_id", "yer_kon", "odak_yer", "odak_kimlik")


def node_oku(yol):
    betik = ("global.window={};eval(require('fs').readFileSync(process.argv[1],'utf8'));"
             "const k=Object.keys(global.window)[0];"
             "process.stdout.write(JSON.stringify(global.window[k]||[]));")
    r = subprocess.run(["node", "-e", betik, yol], capture_output=True, text=True, encoding="utf-8")
    if r.returncode != 0:
        raise RuntimeError("ayrıştırılamadı %s: %s" % (yol, r.stderr[:200]))
    return json.loads(r.stdout)


def havuz_kur():
    import girdi
    Y, adlar = [], set()
    for y in girdi.yukle(sessiz=True):
        if not y.get("ad"):
            continue
        adlar.add(y["ad"])
        adlar.add(y["ad"].split(" (")[0])
        Y.append({k: y.get(k) for k in ("ad", "lat", "lon", "d", "v", "s") if y.get(k) is not None})
    return Y, adlar


def kimlik_say(Y, liste):
    """[(t, [id,…]), …] → [n, …] — js/suzgec.js ile, madde gününde."""
    if not liste:
        return []
    fd, hy = tempfile.mkstemp(suffix=".json")
    os.close(fd)
    fd2, gy = tempfile.mkstemp(suffix=".json")
    os.close(fd2)
    try:
        io.open(hy, "w", encoding="utf-8").write(json.dumps(Y, ensure_ascii=False))
        io.open(gy, "w", encoding="utf-8").write(json.dumps(
            [{"dosya": "x", "t": t, "b": "x", "sinif": "C", "yeni": {"odak_kimlik": ids}}
             for t, ids in liste], ensure_ascii=False))
        r = subprocess.run(["node", SINA, hy, "dosya", gy], capture_output=True, text=True,
                           encoding="utf-8")
        if r.returncode != 0:
            raise RuntimeError("kimlik sayımı koşmadı: " + r.stderr[:200])
        out = json.loads(r.stdout)
        return [(int(o["odak_kimlik"].split()[0]), o.get("kunye_yok")) for o in out]
    finally:
        os.remove(hy)
        os.remove(gy)


def js(v):
    return json.dumps(v, ensure_ascii=False)


def nesne_bul(metin, t, b):
    """'{ … t:"<t>" … b:"<b>" … }' nesnesinin [bas, son) aralığı; tek değilse None."""
    bl = 'b:' + js(b)
    adaylar = [m.start() for m in re.finditer(re.escape(bl), metin)]
    sonuc = []
    for i in adaylar:
        bas = metin.rfind("{", 0, i)
        while bas >= 0 and not re.match(r"\{\s*t\s*:", metin[bas:bas + 12]):
            bas = metin.rfind("{", 0, bas)
        if bas < 0:
            continue
        # dizgi farkında parantez eşleme
        d, j, dz = 0, bas, None
        while j < len(metin):
            c = metin[j]
            if dz:
                if c == "\\":
                    j += 2
                    continue
                if c == dz:
                    dz = None
            elif c in "\"'`":
                dz = c
            elif c in "{[":
                d += 1
            elif c in "}]":
                d -= 1
                if d == 0:
                    break
            j += 1
        seg = metin[bas:j + 1]
        if ('t:' + js(t)) in seg and bl in seg:
            sonuc.append((bas, j + 1))
    return sonuc[0] if len(sonuc) == 1 else None


def nesne_duzenle(seg, o):
    y = o["yeni"]
    if o["kaldir_kg"]:
        seg2 = re.sub(r",\s*kapsam_genis\s*:\s*true\b", "", seg, count=1)
        if seg2 == seg:
            seg2 = re.sub(r"\bkapsam_genis\s*:\s*true\s*,\s*", "", seg, count=1)
        if seg2 == seg:
            raise ValueError("kapsam_genis:true metinde bulunamadı")
        seg = seg2
    ekle = []
    if "yer_id" in y:
        if re.search(r'\byer_id\s*:\s*""', seg):
            seg = re.sub(r'\byer_id\s*:\s*""', "yer_id:" + js(y["yer_id"]), seg, count=1)
        else:
            ekle.append("yer_id:" + js(y["yer_id"]))
    for k in ("yer_kon", "odak_yer", "odak_kimlik"):
        if k in y:
            ekle.append(k + ":" + js(y[k]).replace(", ", ","))
    if ekle:
        k = len(seg) - 1                      # son '}'
        m = k - 1
        while m >= 0 and seg[m] in " \t\r\n":
            m -= 1
        ara = " " if seg[m] == "," else ", "
        seg = seg[:m + 1] + ara + ", ".join(ekle) + seg[m + 1:]
    return seg


def beklenen(eski, o):
    yeni = dict(eski)
    if o["kaldir_kg"]:
        yeni.pop("kapsam_genis", None)
    yeni.update(o["yeni"])
    return yeni


def main():
    Y, adlar = havuz_kur()
    S = {"değişen": 0, "zaten böyle": 0, "kayıt yok": 0, "eski tutmuyor": 0,
         "şartı sağlamadı": 0, "süzgeç dışı": 0, "metin bulunamadı": 0}
    sinif_say = {}
    secili = []
    for o in ONERI:
        if (GRUP and o["sinif"] not in GRUP) or (DIKKATSIZ and o["dikkat"]):
            S["süzgeç dışı"] += 1
            continue
        secili.append(o)
    # odak_kimlik şartı — toplu, suzgec.js ile
    kl = [(o["t"], o["yeni"]["odak_kimlik"]) for o in secili if "odak_kimlik" in o["yeni"]]
    ks = iter(kimlik_say(Y, kl))
    for o in secili:
        o["_kimlik"] = next(ks) if "odak_kimlik" in o["yeni"] else None

    dosyalar = sorted(set(o["dosya"] for o in secili))
    for f in dosyalar:
        yol = os.path.join(KOK, "data", f)
        metin = io.open(yol, encoding="utf-8").read()
        kayit = node_oku(yol)
        hedef = {}                            # kayıt indeksi → beklenen sözlük
        yeni_metin = metin
        duzen = []                            # (bas, son, yeni_seg)
        for o in [x for x in secili if x["dosya"] == f]:
            ix = [i for i, r in enumerate(kayit) if r.get("t") == o["t"] and r.get("b") == o["b"]]
            satir = "%s %s %s | %s" % (o["sinif"], f, o["t"], o["b"][:60])
            if len(ix) != 1:
                S["kayıt yok"] += 1
                print("  ✗ KAYIT %s (%d eşleşme): %s" % ("YOK" if not ix else "ÇOK", len(ix), satir))
                continue
            r = kayit[ix[0]]
            y = o["yeni"]
            if all(r.get(k) == v for k, v in y.items()) and (not o["kaldir_kg"] or "kapsam_genis" not in r):
                S["zaten böyle"] += 1
                continue
            eski_ok = (not any(r.get(k) for k in ("yer_kon", "odak_yer", "odak_kimlik", "odak_kutu_kaynak"))
                       and r.get("yer_id") in (None, "")
                       and (r.get("kapsam_genis") is True) == (o["eski"] == "BEYANLI"))
            if not eski_ok:
                S["eski tutmuyor"] += 1
                print("  ✗ ESKİ TUTMUYOR: %s  (yer_id=%r kapsam_genis=%r)" % (satir, r.get("yer_id"), r.get("kapsam_genis")))
                continue
            sart = []
            for a in ([y["yer_id"]] if "yer_id" in y else []) + y.get("odak_yer", []):
                if a not in adlar:
                    sart.append("havuzda yok: " + a)
            if "yer_kon" in y:
                la, lo = y["yer_kon"]
                if not (-90 <= la <= 90 and -180 <= lo <= 180):
                    sart.append("yer_kon aralık dışı")
            if o["_kimlik"] is not None:
                n, ky = o["_kimlik"]
                if ky:
                    sart.append("künye yok: " + ",".join(ky))
                if n < 2:
                    sart.append("odak_kimlik %d yerleşim (<2)" % n)
            if sart:
                S["şartı sağlamadı"] += 1
                print("  ✗ ŞART: %s — %s" % (satir, "; ".join(sart)))
                continue
            aralik = nesne_bul(metin, o["t"], o["b"])
            if not aralik:
                S["metin bulunamadı"] += 1
                print("  ✗ METİNDE NESNE TEK DEĞİL: " + satir)
                continue
            try:
                seg = nesne_duzenle(metin[aralik[0]:aralik[1]], o)
            except ValueError as e:
                S["metin bulunamadı"] += 1
                print("  ✗ DÜZENLENEMEDİ: %s — %s" % (satir, e))
                continue
            duzen.append((aralik[0], aralik[1], seg))
            hedef[ix[0]] = beklenen(r, o)
            sinif_say[o["sinif"]] = sinif_say.get(o["sinif"], 0) + 1
            if not SESSIZ:
                print("  %s%s  %s  ← %s  [%s]" % ("⚠" if o["dikkat"] else "·", satir,
                      " ".join("%s=%s" % (k, js(v)) for k, v in y.items()),
                      o["gerekce"], o["kaynak"]))
        if not duzen:
            continue
        for bas, son, seg in sorted(duzen, reverse=True):
            yeni_metin = yeni_metin[:bas] + seg + yeni_metin[son:]
        # ⑤ tam dosya sınavı
        fd, gecici = tempfile.mkstemp(suffix=".js")
        os.close(fd)
        try:
            io.open(gecici, "w", encoding="utf-8", newline="").write(yeni_metin)
            sonra = node_oku(gecici)
        finally:
            os.remove(gecici)
        hata = len(sonra) != len(kayit)
        if not hata:
            for i, (a, b) in enumerate(zip(kayit, sonra)):
                if b != hedef.get(i, a):
                    hata = True
                    print("  🔴 %s kayıt %d beklenenden farklı — DOSYA YAZILMADI" % (f, i))
                    break
        if hata:
            S["metin bulunamadı"] += len(duzen)
            continue
        S["değişen"] += len(duzen)
        # öngörü — arac/odak_olc.py'nin KENDİ sınıflayıcısıyla, dosyanın yeni hâli
        once = [odak_olc.sinifla(r, adlar)[0] for r in kayit]
        son_ = [odak_olc.sinifla(r, adlar)[0] for r in sonra]
        for sn in ("ODAKSIZ", "BEYANLI"):
            ONGORU[sn][0] += once.count(sn)
            ONGORU[sn][1] += son_.count(sn)
        print("  öngörü %-34s ODAKSIZ %d→%d · BEYANLI %d→%d" % (
            f, once.count("ODAKSIZ"), son_.count("ODAKSIZ"),
            once.count("BEYANLI"), son_.count("BEYANLI")))
        if UYGULA:
            io.open(yol, "w", encoding="utf-8", newline="").write(yeni_metin)
            print("  ✓ yazıldı: data/%s (%d madde)" % (f, len(duzen)))
        else:
            print("  ○ kuru koşu: data/%s (%d madde değişecekti)" % (f, len(duzen)))
    print()
    print("SAYAÇ:", " · ".join("%s %d" % kv for kv in S.items()))
    print("SINIF:", " · ".join("%s %d" % kv for kv in sorted(sinif_say.items())))
    print("ÖNGÖRÜ (değişen dosyalar, odak_olc.sinifla): ODAKSIZ %d→%d · BEYANLI %d→%d" % (
        ONGORU["ODAKSIZ"][0], ONGORU["ODAKSIZ"][1], ONGORU["BEYANLI"][0], ONGORU["BEYANLI"][1]))
    print("KİP  :", "UYGULANDI" if UYGULA else "KURU KOŞU (yazmak için --uygula)")
    return 1 if (S["eski tutmuyor"] or S["şartı sağlamadı"] or S["metin bulunamadı"] or S["kayıt yok"]) else 0


if __name__ == "__main__":
    raise SystemExit(main())
