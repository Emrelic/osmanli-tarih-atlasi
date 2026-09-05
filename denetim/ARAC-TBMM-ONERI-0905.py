# -*- coding: utf-8 -*-
"""M-3068 ⑤ — öneri üreteci + (c)'nin EKSİK AYAĞI.

🔴 `ARAC-TBMM-CAKISMA-0905b.py`nin (c) sınavı TBMM'yi ötekilerle
   karşılaştırıyordu; ÖTEKİLERİ BİRBİRİYLE karşılaştırmıyordu.
   Başkale/Çaldıran üç taraflı ve gerçek anlaşmazlık `ok110 ↔ p0035`
   arasında — TBMM taraf bile değil. Bu sürüm onu da ölçer.

Çıktı: denetim/ONERI-TBMM-CAKISMA-0905.json   🔴 VERİ YAZMAZ.
"""
import io
import json
import os
import re
import subprocess
import sys
import tempfile

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
os.chdir(KOK)
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

DIZIN = os.path.join(KOK, "data")
DOSYALAR = sorted(f for f in os.listdir(DIZIN)
                  if re.match(r"^yer_yama.*\.js$", f))
CATISABILIR = ("d", "s", "v", "isg", "m", "kaynak", "bos", "neden", "not",
               "kur")
VERI_ALANI = ("d", "s", "v", "isg", "m")
SKALER = ("kaynak", "not", "bos", "neden", "kur", "m")

JS = """
const fs=require('fs'),vm=require('vm'),out={};
for (const f of process.argv.slice(2)) {
  const ctx={window:{}}; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(f,'utf8'), ctx);
  let kayit=[];
  for (const k of Object.keys(ctx.window)) {
    const v=ctx.window[k];
    if (Array.isArray(v)) kayit=kayit.concat(v);
  }
  out[f.split(/[\\\\/]/).pop()]=kayit;
}
process.stdout.write(JSON.stringify(out));
"""
fd, yol = tempfile.mkstemp(suffix=".js")
os.write(fd, JS.encode("utf-8"))
os.close(fd)
ham = subprocess.run(["node", yol] + [os.path.join(DIZIN, f)
                                      for f in DOSYALAR],
                     capture_output=True)
os.unlink(yol)
assert ham.returncode == 0, ham.stderr.decode("utf-8", "replace")[:400]
YAMA = json.loads(ham.stdout.decode("utf-8"))

ix = {}
for dosya, kayitlar in YAMA.items():
    for k in kayitlar:
        ad = k.get("ad") or k.get("yerlesim")
        if ad:
            ix.setdefault(ad, {})[dosya] = k

TBMM = re.compile(r"tbmm")


def catisan(d):
    out = []
    for alan in CATISABILIR:
        yaz = [f for f in d if alan in d[f]]
        if len(yaz) < 2:
            continue
        if len({json.dumps(d[f][alan], sort_keys=True, ensure_ascii=False)
                for f in yaz}) > 1:
            out.append(alan)
    return out


def don(k, kat):
    return [(p.get("f"), p.get("t"), p.get("d")) for p in (k.get(kat) or [])]


oneri, ucgen = [], []
for ad, d in sorted(ix.items()):
    if len(d) < 2:
        continue
    ca = catisan(d)
    if not (ca and any(a in VERI_ALANI for a in ca)):
        continue
    if not any(TBMM.search(f) for f in d):
        continue
    tf = [f for f in d if TBMM.search(f)][0]
    of = [f for f in d if not TBMM.search(f)]

    # (c) EKSİK AYAK — ötekiler BİRBİRİYLE çelişiyor mu?
    ic = []
    for i in range(len(of)):
        for j in range(i + 1, len(of)):
            for alan in VERI_ALANI:
                a, b = don(d[of[i]], alan), don(d[of[j]], alan)
                if a and b and a != b:
                    ic.append({"alan": alan, "dosya_a": of[i], "dosya_b": of[j],
                               "a": ["%s→%s:%s" % p for p in a],
                               "b": ["%s→%s:%s" % p for p in b]})
    if ic:
        ucgen.append({"ad": ad, "taraflar": of + [tf], "ic_celiski": ic})
        continue

    # üst küme mi
    eksik = []
    for f in of:
        for alan in ca:
            if alan not in VERI_ALANI:
                continue
            for p in don(d[f], alan):
                if p not in don(d[tf], alan):
                    eksik.append("%s.%s %s→%s:%s" % (f, alan, p[0], p[1], p[2]))
    # bloke yüzünden inmeyen skalerler
    tasi = {}
    for f in of:
        for a in SKALER:
            if d[f].get(a) and not d[tf].get(a):
                tasi.setdefault(a, {"deger": d[f][a], "kaynak_dosya": f})
    oneri.append({
        "ad": ad, "kazanan": tf, "dusurulecek": of,
        "ust_kume": not eksik,
        "tbmm_disi_eksik": eksik,
        "tasinacak_skaler": tasi,
    })

cikti = {
    "_NOT": ("M-3068 ⑤ · NEHİR SÜRTÜNME · 5 Eylül 2026. ÖNERİDİR, HÜKÜM "
             "DEĞİL. Ölçüt `_sahiplik_uygula.py:267-273`ün KENDİ kuralı: "
             "çakışma = aynı alanı ≥2 dosya FARKLI değerle yazıyor. Bloke "
             "kayıtta HİÇBİR alan inmez (:531 continue) ⇒ `kaynak`/`neden` "
             "de kaybolur; onun için `tasinacak_skaler` var."),
    "_UYGULAMA": ("Kazanan kayda `tasinacak_skaler` EKLENİR, sonra "
                  "`dusurulecek` dosyalardan O AD düşürülür. İki iş de "
                  "`data/` yazımıdır ⇒ Oturum 0."),
    "temiz": oneri,
    "ucgen_KARAR_GEREK": ucgen,
}
yol = os.path.join(KOK, "denetim", "ONERI-TBMM-CAKISMA-0905.json")
with open(yol, "w", encoding="utf-8") as f:
    json.dump(cikti, f, ensure_ascii=False, indent=1)

print("🟢 TEMİZ (TBMM üst küme, öneri hazır) : %d" % len(oneri))
print("   üst küme DEĞİL ama üçgen de değil : %d"
      % sum(1 for o in oneri if not o["ust_kume"]))
for o in oneri:
    if not o["ust_kume"]:
        print("      🔴 %-22s %s" % (o["ad"], "; ".join(o["tbmm_disi_eksik"])))
print("   taşınacak skaler alan toplamı     : %d"
      % sum(len(o["tasinacak_skaler"]) for o in oneri))
print("\n🔴 ÜÇGEN — ötekiler BİRBİRİYLE çelişiyor, TBMM taraf DEĞİL: %d"
      % len(ucgen))
for u in ucgen:
    print("   ── %s" % u["ad"])
    for c in u["ic_celiski"]:
        print("      %s.%s" % (c["dosya_a"], c["alan"]))
        print("         A: %s" % " ".join(c["a"]))
        print("         B: %s" % " ".join(c["b"]))
print("\n⇒ %s" % yol)
