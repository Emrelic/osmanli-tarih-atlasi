# -*- coding: utf-8 -*-
"""KADEME YAMASI UYGULAYICI — data/yer_yama_kademe*.js -> asil veriye `k:`

  py arac/_kademe_uygula.py           KURU KOSU (hicbir sey yazmaz)
  py arac/_kademe_uygula.py --yaz     gercekten yaz

🔴 NICIN REGEX DEGIL DE CIPA: bir satirda `k:` BIRDEN COK gecebiliyor —
   Hoy kaydinda `g:0, k:3,kd:[{...,k:3,m:null}]` var. Ust duzey `k:` icin
   tek guvenilir cipa `g:N,`nin HEMEN ardi. Olculdu (arac/_kademe_olc.py):
   2621 kaydin 2621'inde cipa tutuyor, yani %100.

🔴 NICIN ADLA ESLESME: yama `yerlesim:` adi tasiyor. Ad BIRDEN COK dosyada
   geciyorsa UYGULANMAZ — hangi kaydin kastedildigi belirsizdir ve yanlis
   kaydi degistirmek sessiz veri bozulmasidir. (Olculdu: 1 tane var.)

🔴 NICIN MEVCUT DEGER SINANIYOR: yama "mevcut k" diyor. Veri onu
   dogrulamiyorsa ARADA BIR SEY DEGISMIS demektir; o kayit ATLANIR ve
   raporlanir. `CLAUDE.md`: "devraldigin rakami dogrulamadan aktarma."
"""
import os, re, io, sys, json, subprocess, collections

KOK = os.getcwd()
VERI = os.path.join(KOK, "data")
YAZ = "--yaz" in sys.argv

JS = r"""
global.window={};
const fs=require('fs');
for (const f of ['data/yer_yama_kademe.js','data/yer_yama_kademe2.js'])
  eval(fs.readFileSync(f,'utf8'));
const A=(window.YER_YAMA_KADEME||[]).concat(window.YER_YAMA_KADEME2||[]);
process.stdout.write(JSON.stringify(A.map(r=>({
  ad: r.yerlesim, eski: (r.mevcut||{}).k, yeni: (r.oneri||{}).k, olcut: r.olcut
}))));
"""
p = subprocess.run(["node", "-e", JS], cwd=KOK, capture_output=True)
if p.returncode != 0:
    sys.stdout.write("NODE HATASI:\n" + p.stderr.decode("utf-8", "replace")[:800])
    raise SystemExit(1)
yama = json.loads(p.stdout.decode("utf-8"))

sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
DOSYALAR = list(girdi.GIRDI_DOSYALARI)

AD_RX = re.compile(r'\bad:\s*"((?:[^"\\]|\\.)*)"')
GK_RX = re.compile(r'(\bg:\s*-?\d+\s*,\s*k:\s*)(\d+)')

# ---- ad -> (dosya, satir_index) ; birden cok ise isaretle
konum = collections.defaultdict(list)
icerik = {}
for dosya in DOSYALAR:
    yol = os.path.join(VERI, dosya)
    if not os.path.exists(yol):
        continue
    satirlar = io.open(yol, encoding="utf-8", newline="").read().split("\n")
    icerik[dosya] = satirlar
    for i, satir in enumerate(satirlar):
        m = AD_RX.search(satir)
        if m:
            konum[m.group(1)].append((dosya, i))

istatistik = collections.Counter()
atlanan = []
degisiklik = collections.defaultdict(int)

for r in yama:
    yerler = konum.get(r["ad"], [])
    if not yerler:
        istatistik["eslesmedi"] += 1
        atlanan.append((r["ad"], "veride YOK")); continue
    if len(yerler) > 1:
        istatistik["belirsiz"] += 1
        atlanan.append((r["ad"], "%d dosyada birden" % len(yerler))); continue
    dosya, i = yerler[0]
    satir = icerik[dosya][i]
    m = GK_RX.search(satir)
    if not m:
        istatistik["cipa-yok"] += 1
        atlanan.append((r["ad"], "g:N, k: cipasi yok")); continue
    simdiki = int(m.group(2))
    if simdiki != r["eski"]:
        istatistik["mevcut-uyusmadi"] += 1
        atlanan.append((r["ad"], "veride k%d, yama k%d diyor" % (simdiki, r["eski"])))
        continue
    if simdiki == r["yeni"]:
        istatistik["zaten-boyle"] += 1; continue
    icerik[dosya][i] = satir[:m.start()] + m.group(1) + str(r["yeni"]) + satir[m.end():]
    istatistik["uygulandi"] += 1
    degisiklik[dosya] += 1

print("=== KADEME YAMASI %s ===" % ("YAZILDI" if YAZ else "KURU KOSU"))
print("yama kaydi: %d" % len(yama))
for k in ("uygulandi", "zaten-boyle", "mevcut-uyusmadi", "belirsiz",
          "eslesmedi", "cipa-yok"):
    if istatistik[k]:
        print("  %-18s %5d" % (k, istatistik[k]))

print("\ndosya dosya degisiklik (%d dosya):" % len(degisiklik))
for d, n in sorted(degisiklik.items(), key=lambda x: -x[1]):
    print("  %-38s %4d" % (d, n))

if atlanan:
    print("\n[!] ATLANANLAR (%d) - sebebiyle:" % len(atlanan))
    for ad, sebep in atlanan[:30]:
        print("  %-30s %s" % (ad.encode("ascii", "replace").decode("ascii"), sebep))

if YAZ:
    for dosya, n in degisiklik.items():
        yol = os.path.join(VERI, dosya)
        io.open(yol, "w", encoding="utf-8", newline="").write("\n".join(icerik[dosya]))
    print("\n%d dosya yazildi." % len(degisiklik))
else:
    print("\n(kuru kosu — hicbir dosya yazilmadi; --yaz ile calistir)")
