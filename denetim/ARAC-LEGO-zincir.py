# -*- coding: utf-8 -*-
"""MOTOR-LEGO-0925 — geometri önbelleğinin (`govde` · `osm` · `sb`) hesap zinciri
`renkler.py`den ya da `girdi.py`den bir şey OKUYOR mu? (`uret_petek.py:592-606`
GEO tuzunun dayanağı: o iki dosya bu tuza GİRMEZ. Bu betik o hükmün sınavıdır.)

① Güncel dosyada GEO köklerinden başlayarak AST ile çağrılan modül düzeyi işlevlerin
   geçişli kapanışı + okunan modül düzeyi adlar.
     kökler: `_yabanci_govde_hesap` · `_osm_govde_hesap` · `_onb_parca_anahtar`
             (govde/osm anahtarı) · `bos_bolge` · `_onb_ozet` (sb anahtarı)
② YASAK AD: `renkler` / `girdi` modülünden İTHAL edilen her ad (`from renkler import
   BOYALAR`), modülün kendi adı (`import girdi` → `girdi.X`) ve elle eklenen
   `_HARITA_ALT` (girdi'nin okuduğu `devletler.js`ten modül düzeyinde kurulur).
   Zincir bunlardan birini okursa betik ÖTER (çıkış 1).
③ Dinamik erişim (`globals` · `vars` · `eval` · `exec` · `getattr`/`__import__`
   ile ad dizgisi) zincirde varsa ADIYLA basılır. Statik tarama onları göremez.
④ (`--gecmis`) Her commit'te değişen modül düzeyi deyimler ∩ zincir: o commit gövde
   katmanını gerçekten etkileyebilir mi.

🔴 1006 DÜZELTMESİ (UMIT-W10-LEGO-1006b): eski sürüm modül adlarını yalnız
   `def`/atama/Store'dan topluyordu. `import`/`from … import` adları evrende YOKTU
   ⇒ `BOYALAR` ve `girdi` hiçbir koşulda "okunan" çıkamazdı. 25 Eylül'ün "BOYALAR
   okuyan yok" hükmü, yapısı gereği başka sonuç veremeyen bir sınavdı. sb kökleri de
   taranmıyordu ve KOK sabit `C:\\atlas` idi (başka ağaçta koşturan, farkında olmadan
   C:\\atlas'ı ölçerdi). İki yönlü sınav: `denetim/ARAC-LEGO-ZINCIR-SINAV-1006.py`.
⚠️ Hâlâ kaba: modül düzeyi ad çözümlemesi; nesne ÖZNİTELİĞİ yoluyla taşınan veri
   (ör. YERLER kayıtlarının içine yazılmış bir renk) görülmez. Veri yolu anahtar
   içeriğinden geçer, tuzun konusu değildir.

Kullanım:  py denetim/ARAC-LEGO-zincir.py [--kok C:\\atlas] [--dosya arac/uret_petek.py] [--gecmis]
Çıkış: 0 temiz · 1 YASAK AD zincirde (ötme) · 2 kullanım/ayrıştırma hatası
"""
import argparse, ast, re, subprocess, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ap = argparse.ArgumentParser()
ap.add_argument("--kok", default=r"C:\atlas", help="depo kökü (varsayılan C:\\atlas)")
ap.add_argument("--dosya", default="arac/uret_petek.py", help="KOK'a göreli motor dosyası")
ap.add_argument("--gecmis", action="store_true", help="④ commit geçmişi taraması")
ap.add_argument("--since", default="2026-09-18")
arg = ap.parse_args()
KOK, YOL, since = arg.kok, arg.dosya, arg.since

KOKLER = ["_yabanci_govde_hesap", "_osm_govde_hesap", "_onb_parca_anahtar",
          "bos_bolge", "_onb_ozet"]
YASAK_MODUL = {"renkler", "girdi"}
YASAK_EK = {"_HARITA_ALT"}
DINAMIK = {"globals", "vars", "eval", "exec", "getattr", "__import__", "locals"}


def git(*a):
    return subprocess.run(["git", *a], capture_output=True, cwd=KOK).stdout.decode("utf-8", "replace")


def ust_duzey(src):
    """[(bas, son, {adlar})] modül düzeyi deyimler. İthal adlar DA ad sayılır."""
    t = ast.parse(src)
    out = []
    for n in t.body:
        ad = set()
        if isinstance(n, (ast.FunctionDef, ast.AsyncFunctionDef, ast.ClassDef)):
            ad.add(n.name)
        elif isinstance(n, (ast.Assign, ast.AugAssign, ast.AnnAssign)):
            hedef = n.targets if isinstance(n, ast.Assign) else [n.target]
            for h in hedef:
                for x in ast.walk(h):
                    if isinstance(x, ast.Name):
                        ad.add(x.id)
        else:
            for x in ast.walk(n):
                if isinstance(x, (ast.FunctionDef, ast.AsyncFunctionDef)):
                    ad.add(x.name)
                elif isinstance(x, ast.Name) and isinstance(x.ctx, ast.Store):
                    ad.add(x.id)
            ad.add(f"<{type(n).__name__}@{n.lineno}>")
        # 🔴 1006: import adları (modül düzeyinde ya da if/try içinde)
        for x in ast.walk(n):
            if isinstance(x, (ast.Import, ast.ImportFrom)):
                for a in x.names:
                    ad.add((a.asname or a.name).split(".")[0])
        out.append((n.lineno, n.end_lineno, ad))
    return t, out


def yasak_adlar(t):
    """{ad: (satır, kaynak modül)} — renkler/girdi'den gelen her ad + modül adları."""
    y = {}
    for x in ast.walk(t):
        if isinstance(x, ast.ImportFrom) and (x.module or "").split(".")[0] in YASAK_MODUL:
            for a in x.names:
                y[a.asname or a.name] = (x.lineno, x.module)
        elif isinstance(x, ast.Import):
            for a in x.names:
                if a.name.split(".")[0] in YASAK_MODUL:
                    y[(a.asname or a.name).split(".")[0]] = (x.lineno, a.name)
    for e in YASAK_EK:
        y.setdefault(e, (None, "elle (devletler.js `harita:`)"))
    return y


try:
    src = open(f"{KOK}/{YOL}", encoding="utf-8").read()
    agac, dz = ust_duzey(src)
except (OSError, SyntaxError) as e:
    print(f"ÖLÇÜLEMEDİ: {KOK}/{YOL} okunamadı/ayrıştırılamadı: {e}")
    sys.exit(2)
fonk = {n.name: n for n in agac.body if isinstance(n, (ast.FunctionDef, ast.AsyncFunctionDef))}
modul_adlari = set().union(*(a for _, _, a in dz))
YASAK = yasak_adlar(agac)
eksik_kok = [k for k in KOKLER if k not in fonk]
kapanis, okunan, nerede = set(), set(), {}
yigin = [k for k in KOKLER if k in fonk]
while yigin:
    f = yigin.pop()
    if f in kapanis or f not in fonk:
        continue
    kapanis.add(f)
    # yerel adlar (parametre + işlev içinde atanan, `global` bildirilmemiş) modül adını gölgeler
    _gl = {g for x in ast.walk(fonk[f]) if isinstance(x, ast.Global) for g in x.names}
    _yerel = {x.id for x in ast.walk(fonk[f]) if isinstance(x, ast.Name) and isinstance(x.ctx, ast.Store)}
    _yerel |= {a.arg for x in ast.walk(fonk[f]) if isinstance(x, (ast.FunctionDef, ast.Lambda))
               for a in x.args.args + x.args.kwonlyargs + x.args.posonlyargs}
    _yerel -= _gl
    for x in ast.walk(fonk[f]):
        if isinstance(x, ast.Name) and isinstance(x.ctx, ast.Load) and x.id in modul_adlari \
                and x.id not in _yerel:
            okunan.add(x.id)
            nerede.setdefault(x.id, (f, x.lineno))
            if x.id in fonk:
                yigin.append(x.id)
dinamik = sorted((f, x.lineno, x.func.id) for f in kapanis for x in ast.walk(fonk[f])
                 if isinstance(x, ast.Call) and isinstance(x.func, ast.Name) and x.func.id in DINAMIK)
ihlal = sorted(okunan & set(YASAK))

print(f"KÖK {KOK} · dosya {YOL}")
print(f"① geo zinciri: {len(kapanis)} işlev · okunan modül düzeyi ad {len(okunan)} "
      f"· kökler {len(KOKLER) - len(eksik_kok)}/{len(KOKLER)}"
      + (f" · ⚠️ BULUNAMAYAN KÖK: {', '.join(eksik_kok)}" if eksik_kok else ""))
print("   okunan adlar:", ", ".join(sorted(okunan)))
print("   işlevler:", ", ".join(sorted(kapanis)))
print(f"② yasak ad evreni ({len(YASAK)}): "
      + ", ".join(f"{k}{'@' + str(v[0]) if v[0] else ''}" for k, v in sorted(YASAK.items())))
print("③ dinamik erişim:", ", ".join(f"{f}:{ln} {c}()" for f, ln, c in dinamik) or "yok",
      "(statik taramanın göremediği yer — elle bakılır)")
if ihlal:
    for k in ihlal:
        f, ln = nerede[k]
        print(f"🔴 YASAK AD GEO ZİNCİRİNDE: `{k}` ({YASAK[k][1]}) — {f}:{ln} okuyor "
              f"⇒ GEO tuzundan renkler.py/girdi.py çıkarılması YANLIŞ olur")
else:
    print("✓ TEMİZ: geo zinciri renkler/girdi'den ithal hiçbir adı ve _HARITA_ALT'ı okumuyor")
if eksik_kok:
    print("🔴 KÖK EKSİK — zincir eksik tarandı, hüküm GEÇERSİZ")

if arg.gecmis:
    commitler = git("log", "--reverse", f"--since={since}", "--format=%H %ad",
                    "--date=format:%m-%d %H:%M", "--", YOL).splitlines()
    for c in commitler:
        h, tarih = c.split(" ", 1)
        try:
            _, dz_eski = ust_duzey(git("show", f"{h}^:{YOL}"))
            _, dz_yeni = ust_duzey(git("show", f"{h}:{YOL}"))
        except SyntaxError as e:
            print(f"{h[:8]} ÖLÇÜLEMEDİ (ayrıştırılamadı: {e})"); continue
        fark = git("diff", "-U0", f"{h}^", h, "--", YOL)
        degisen = set()
        for m in re.finditer(r"^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@", fark, re.M):
            for bas, n, dzl in ((int(m.group(1)), int(m.group(2) or 1), dz_eski),
                                (int(m.group(3)), int(m.group(4) or 1), dz_yeni)):
                for ln in range(bas, bas + max(n, 1)):
                    for b, s, ad in dzl:
                        if b <= ln <= s:
                            degisen |= ad
        kes = sorted(degisen & (kapanis | okunan))
        print(f"④ {h[:8]} {tarih} değişen ü.d. ad {len(degisen):3d} · GEO ZİNCİRİNE DEĞEN {len(kes)}: "
              f"{', '.join(kes[:12])}{' …' if len(kes) > 12 else ''}")

sys.exit(2 if eksik_kok else (1 if ihlal else 0))
