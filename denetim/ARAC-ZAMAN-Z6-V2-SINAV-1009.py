# -*- coding: utf-8 -*-
"""ARAC-ZAMAN-Z6-V2-SINAV-1009 — Z6 yamasının 1281+ dilimi TABANLA birebir mi?

Soru: `data/yer_yama_once1281_z6.js` (Z6) her kaydın `s:` dizisinin TAMAMINI taşır. Z6'nın
amacı yalnız 1281-01-01 ÖNCESİDİR; 1281-01-01 ve sonrası dilim tabanın bugünkü hâli olmalı.
Yama eski bir tabandan üretildiyse, tabanda sonradan yapılmış düzeltmeleri GERİ YAZAR (bayat).

Kullanım:
    py denetim/ARAC-ZAMAN-Z6-V2-SINAV-1009.py <taban-rev> <yama.diff>
      <taban-rev>  : karşılaştırılacak commit (ör. origin/main ya da SHA)
      <yama.diff>  : `data/yer_yama_once1281_z6.js`i YENİ DOSYA olarak taşıyan diff
                     (tek başına Z6 diff'i ya da onu içeren paket diff'i)
Yöntem:
  ① taban rev geçici bir worktree'ye açılır, `girdi.yukle()` koşar (yama UYGULANMADAN —
    tabanın kendi verisi; yama dosyası girdi listesinde değildir, okunmaz).
  ② diff'ten yama dosyasının içeriği çıkarılır, node ile okunur.
  ③ her yama kaydı için iki dilim karşılaştırılır:
     A (RESMÎ) 1281-01-01 … 1923-10-29 penceresine kırpılmış dönemler, bütün alanlarıyla
     B (EK)    1281-01-01 ve sonrası bütün dönemler (1923 sonrası da)
     Normalleştirme (yalnız yamanın BEYANLI dokunuşu): 1281 öncesine geri çekilen ilk dönemin
     `f`si kırpılır ve `kaynak`ının başındaki "f 1281-01-01'den geri çekildi — … ‖ önceki: "
     öneki sökülür. Başka hiçbir alan normalleştirilmez.
Çıkış: 0 iki dilimde de fark yok · 1 fark var (ADIYLA basılır) · 2 ölçülemedi.
"""
import sys, io, os, re, json, copy, shutil, subprocess, tempfile

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YAMA_YOL = "data/yer_yama_once1281_z6.js"
EPOK = "1281-01-01"
UST = "1923-10-29"
ONEK = "f 1281-01-01'den geri çekildi — "
AYRAC = " ‖ önceki: "


def pad(g):
    m = re.match(r'^(-?)(\d+)(.*)$', str(g))
    return f"{m.group(1)}{int(m.group(2)):05d}{m.group(3)}" if m else str(g)


def diffden_dosya(diff_yol, yol):
    """Diff'ten YENİ DOSYA içeriğini çıkarır (yalnız `new file` + tek @@ -0,0 hunk'ı)."""
    satirlar = io.open(diff_yol, encoding="utf-8", newline="").read().split("\n")
    i, n = 0, len(satirlar)
    while i < n and satirlar[i] != f"diff --git a/{yol} b/{yol}":
        i += 1
    if i == n:
        return None
    i += 1
    while i < n and not satirlar[i].startswith("@@"):
        i += 1
    m = re.match(r"^@@ -0,0 \+1(?:,(\d+))? @@", satirlar[i])
    if not m:
        raise SystemExit(f"ÖLÇÜLEMEDİ: {yol} yeni dosya hunk'ı değil: {satirlar[i]!r}")
    adet = int(m.group(1) or 1)
    govde = []
    for s in satirlar[i + 1:i + 1 + adet]:
        if not s.startswith("+"):
            raise SystemExit(f"ÖLÇÜLEMEDİ: beklenmeyen satır {s[:60]!r}")
        govde.append(s[1:])
    return "\n".join(govde) + "\n"


def yama_oku(metin):
    kod = ("global.window={};eval(require('fs').readFileSync(0,'utf8'));"
           "const k=Object.keys(window).filter(a=>Array.isArray(window[a]));"
           "process.stdout.write(JSON.stringify({ad:k,v:window[k[0]]}))")
    o = subprocess.run(["node", "-e", kod], input=metin, capture_output=True, text=True, encoding="utf-8")
    if o.returncode:
        raise SystemExit("ÖLÇÜLEMEDİ: node yama okuyamadı: " + o.stderr[:300])
    j = json.loads(o.stdout)
    return j["ad"], j["v"]


def taban_s(rev, adlar):
    tmp = tempfile.mkdtemp(prefix="z6sinav_")
    agac = os.path.join(tmp, "w")
    subprocess.run(["git", "-C", KOK, "worktree", "add", "--detach", agac, rev],
                   check=True, capture_output=True)
    try:
        sha = subprocess.run(["git", "-C", agac, "rev-parse", "HEAD"], capture_output=True,
                             text=True).stdout.strip()
        kod = ("import sys,json,io;sys.path.insert(0,'arac');import girdi;"
               "Y={y['ad']:y.get('s') for y in girdi.yukle(sessiz=True)};"
               "A=json.loads(sys.stdin.read());"
               "sys.stdout.buffer.write(json.dumps({a:Y.get(a,'__YOK__') for a in A},ensure_ascii=False).encode('utf-8'))")
        o = subprocess.run(["py", "-c", kod], cwd=agac, input=json.dumps(adlar).encode("utf-8"),
                           capture_output=True, env=dict(os.environ, PYTHONHASHSEED="0"))
        if o.returncode:
            raise SystemExit("ÖLÇÜLEMEDİ: girdi.yukle: " + o.stderr.decode("utf-8", "replace")[-500:])
        return sha, json.loads(o.stdout.decode("utf-8"))
    finally:
        subprocess.run(["git", "-C", KOK, "worktree", "remove", "--force", agac], capture_output=True)
        shutil.rmtree(tmp, ignore_errors=True)


def normal(p):
    """Yamanın beyanlı dokunuşunu söker (yalnız f<EPOK olan, EPOK'u aşan dönem)."""
    q = copy.deepcopy(p)
    if pad(q["f"]) < pad(EPOK):
        q["f"] = EPOK
        k = q.get("kaynak")
        if isinstance(k, str) and k.startswith(ONEK):
            if AYRAC in k:
                q["kaynak"] = k.split(AYRAC, 1)[1]
            else:
                del q["kaynak"]
    return q


def dilim(s, ust=None):
    out = []
    for p in s or []:
        t = p.get("t")
        if t is not None and pad(t) <= pad(EPOK):
            continue                       # tamamen 1281 öncesi
        if ust and pad(p["f"]) >= pad(ust):
            continue                       # tamamen pencere sonrası
        q = normal(p)
        if ust and (t is None or pad(t) > pad(ust)):
            q["t"] = ust                   # pencereye kırp
        out.append(q)
    return out


def fark_bas(a, b):
    """a=yama, b=taban dönem listeleri — dönem dönem fark satırları."""
    satir = []
    for i in range(max(len(a), len(b))):
        x = a[i] if i < len(a) else None
        y = b[i] if i < len(b) else None
        if x == y:
            continue
        if x is None or y is None:
            satir.append(f"    [{i}] yama={_kisa(x)} · taban={_kisa(y)}")
            continue
        alan = sorted(k for k in set(x) | set(y) if x.get(k) != y.get(k))
        satir.append(f"    [{i}] yama {_kisa(x)} · taban {_kisa(y)} · farklı alan: {','.join(alan)}")
    return satir


def _kisa(p):
    if p is None:
        return "—"
    return f"{p.get('f')}→{p.get('t', '…')} {p.get('d') or ''}{(' v:' + p['v']) if p.get('v') else ''}"


def main():
    if len(sys.argv) != 3:
        print(__doc__)
        return 2
    rev, diff = sys.argv[1], sys.argv[2]
    metin = diffden_dosya(diff, YAMA_YOL)
    if metin is None:
        print(f"ÖLÇÜLEMEDİ: {diff} içinde {YAMA_YOL} yok")
        return 2
    degisken, kayitlar = yama_oku(metin)
    adlar = [k["ad"] for k in kayitlar]
    sha, T = taban_s(rev, adlar)
    print(f"taban {rev} = {sha} · yama {os.path.basename(diff)} · değişken {degisken} · kayıt {len(kayitlar)}")
    yok, farkA, farkB = [], [], []
    for k in kayitlar:
        ts = T.get(k["ad"])
        if ts == "__YOK__" or ts is None:
            yok.append(k["ad"]); continue
        a1, b1 = dilim(k["s"], UST), dilim(ts, UST)
        a2, b2 = dilim(k["s"]), dilim(ts)
        if a1 != b1:
            farkA.append((k["ad"], fark_bas(a1, b1)))
        if a2 != b2:
            farkB.append((k["ad"], fark_bas(a2, b2)))
    print(f"\nA (RESMÎ) {EPOK} … {UST} dilimi farklı kayıt: {len(farkA)}")
    for ad, sat in farkA:
        print(f"  ✗ {ad}")
        for s in sat:
            print(s)
    yalnizB = [x for x in farkB if x[0] not in {a for a, _ in farkA}]
    print(f"\nB (EK) {EPOK}+ bütün dilim farklı kayıt: {len(farkB)} (A'da olmayan: {len(yalnizB)})")
    for ad, sat in yalnizB:
        print(f"  ✗ {ad}")
        for s in sat:
            print(s)
    if yok:
        print(f"\nÖLÇÜLEMEDİ — tabanda adı bulunmayan kayıt {len(yok)}: {', '.join(yok)}")
    print(f"\nHÜKÜM: A {len(farkA)} · B {len(farkB)} · ölçülemedi {len(yok)}")
    if farkA or farkB:
        return 1
    return 2 if yok else 0


if __name__ == "__main__":
    sys.exit(main())
