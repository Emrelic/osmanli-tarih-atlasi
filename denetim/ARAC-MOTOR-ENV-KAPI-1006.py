# -*- coding: utf-8 -*-
"""MOTOR ORTAM KAPISI — motorun okuduğu her `MOTOR_*` değişkeni sınıflandırılmış mı?
(UMIT-W10-LEGO-1006d · `UMIT-W10-LEGO-1006c.md` §4'teki ③3 tuz yamasının ön şartı)

SORU: koşu sürecinde OKUNAN `MOTOR_*` adları kümesi
        ==  SONUÇ (`_ONB_SONUC`) ∪ İŞLETİM (`_ONB_ISLETIM`) ∪ ÖNBELLEK-DIŞI (`_ONB_CIKTI_DISI`)
mi? Kümeler `uret_petek.py`nin modül düzeyindeki küme sabitlerinden AST ile okunur.

NİÇİN: ③3 inince tuz yalnız `_ONB_SONUC`u alır. Motora yeni bir sonuç değişkeni
eklenip kümeye yazılmazsa, değişken tuzdan SESSİZCE düşer ve bayat önbellek doğru
sanılır. Bugünkü kural (her MOTOR_* tuzda) yalnız fazla geçersizleştirir. ③3 olmadan
kapı anlamsızdır, ③3 kapısız TEHLİKELİDİR.

EVREN — "koşu sürecinde okunan":
  `--dosya` (vars. arac/uret_petek.py) + onun İTHAL ettiği yerel modüllerin
  (aynı dizinde `<ad>.py` olan) GEÇİŞLİ kapanışı. Fonksiyon içindeki importlar da
  sayılır (`import dolgu as _bdolgu` Ⓑ bloğunda, `import yukseklik` vb.).
DESENLER (yalnız `MOTOR_` önekli DİZGİ SABİTİ):
  os.environ.get("X")  ·  environ.get("X") (`from os import environ`)  ·  os.getenv("X")
  os.environ["X"] (okuma)  ·  "X" in os.environ  ·  os.environ.pop/setdefault("X")
  Anahtarı SABİT OLMAYAN okuma (os.environ.get(ad)) → DİNAMİK: statik olarak
  doğrulanamaz ⇒ kapı ÖTER (ölçülemedi ≠ temiz).
  `os.environ.items()` / `for k in os.environ` taraması (tuz satırının kendisi)
  okuma SAYILMAZ, ayrıca listelenir.
  `dict(os.environ, X=…)` / `os.environ["X"] = …` YAZMADIR, okuma sayılmaz.

HÜKÜM:
  ① SINIFSIZ  : okunan ama hiçbir kümede olmayan ad           → ÖTER
  ② ÇAKIŞMA   : iki kümede birden olan ad                       → ÖTER
  ③ BAYAT     : kümede olup evrende hiç okunmayan ad (yazım hatası?) → ÖTER
  ④ DİNAMİK   : anahtarı sabit olmayan environ okuması            → ÖTER
  `_ONB_SONUC` YOKSA (③3 inmemiş): MOD = KAPSAYICI. Bugünkü tuz İŞLETİM dışındaki
  her MOTOR_*'ı alır ⇒ sınıfsız ad tuzda demektir, kapı ÖTMEZ ama listeyi basar
  (hangi adların ③3'te sınıflanması gerektiğini görmek için).

Kullanım: py denetim/ARAC-MOTOR-ENV-KAPI-1006.py [--kok C:\\atlas] [--dosya arac/uret_petek.py]
                                                 [--kumeler oneri.json]
  --kumeler: {"_ONB_SONUC": [...], "_ONB_ISLETIM": [...], "_ONB_CIKTI_DISI": [...]}
             verilen kümeler dosyadakilerin YERİNE geçer (yama inmeden öneriyi sınamak için).
Çıkış: 0 temiz (ya da KAPSAYICI mod) · 1 öttü · 2 kullanım/ayrıştırma hatası
"""
import argparse, ast, json, os, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ap = argparse.ArgumentParser()
ap.add_argument("--kok", default=r"C:\atlas")
ap.add_argument("--dosya", default="arac/uret_petek.py")
ap.add_argument("--kumeler", default=None)
arg = ap.parse_args()
KUME_ADLARI = ("_ONB_SONUC", "_ONB_ISLETIM", "_ONB_CIKTI_DISI")
ONEK = "MOTOR_"


def ayristir(yol):
    try:
        return ast.parse(open(yol, encoding="utf-8").read())
    except (OSError, SyntaxError) as e:
        print(f"ÖLÇÜLEMEDİ: {yol}: {e}")
        sys.exit(2)


def _environ_mu(n, os_ad, env_ad):
    """`os.environ` ya da `from os import environ` ile gelen ad mı?"""
    if isinstance(n, ast.Attribute) and n.attr == "environ" and isinstance(n.value, ast.Name) \
            and n.value.id in os_ad:
        return True
    return isinstance(n, ast.Name) and n.id in env_ad


def tara(agac):
    """→ (okumalar [(ad, satır)], dinamik [satır], tarama [satır], ithal_modüller {ad})"""
    os_ad, env_ad, getenv_ad, ithal = {"os"}, set(), set(), set()
    for x in ast.walk(agac):
        if isinstance(x, ast.Import):
            for a in x.names:
                ithal.add(a.name.split(".")[0])
                if a.name == "os" and a.asname:
                    os_ad.add(a.asname)
        elif isinstance(x, ast.ImportFrom) and x.module:
            ithal.add(x.module.split(".")[0])
            if x.module == "os":
                for a in x.names:
                    if a.name == "environ":
                        env_ad.add(a.asname or a.name)
                    if a.name == "getenv":
                        getenv_ad.add(a.asname or a.name)
    oku, dinamik, tarama = [], [], []

    def anahtar(dugum, ln):
        if isinstance(dugum, ast.Constant) and isinstance(dugum.value, str):
            if dugum.value.startswith(ONEK):
                oku.append((dugum.value, ln))
        else:
            dinamik.append(ln)

    for x in ast.walk(agac):
        if isinstance(x, ast.Call) and x.args:
            f = x.func
            if isinstance(f, ast.Attribute) and f.attr in ("get", "pop", "setdefault") \
                    and _environ_mu(f.value, os_ad, env_ad):
                anahtar(x.args[0], x.lineno)
            elif (isinstance(f, ast.Attribute) and f.attr == "getenv" and isinstance(f.value, ast.Name)
                  and f.value.id in os_ad) or (isinstance(f, ast.Name) and f.id in getenv_ad):
                anahtar(x.args[0], x.lineno)
        elif isinstance(x, ast.Subscript) and isinstance(x.ctx, ast.Load) \
                and _environ_mu(x.value, os_ad, env_ad):
            anahtar(x.slice, x.lineno)
        elif isinstance(x, ast.Compare) and len(x.ops) == 1 and isinstance(x.ops[0], (ast.In, ast.NotIn)) \
                and _environ_mu(x.comparators[0], os_ad, env_ad):
            anahtar(x.left, x.lineno)
        # tarama: os.environ.items()/keys() ya da `for k in os.environ`
        if isinstance(x, ast.Call) and isinstance(x.func, ast.Attribute) \
                and x.func.attr in ("items", "keys", "values") and _environ_mu(x.func.value, os_ad, env_ad):
            tarama.append(x.lineno)
        elif isinstance(x, (ast.For, ast.comprehension)) and _environ_mu(x.iter, os_ad, env_ad):
            tarama.append(getattr(x, "lineno", None) or getattr(x.iter, "lineno", 0))
    return oku, dinamik, tarama, ithal


def kumeler_oku(agac):
    """Modül düzeyi `AD = {"…", …}` küme sabitleri. Sabit değilse ÖLÇÜLEMEDİ."""
    k = {}
    for n in agac.body:
        if isinstance(n, ast.Assign) and len(n.targets) == 1 and isinstance(n.targets[0], ast.Name) \
                and n.targets[0].id in KUME_ADLARI:
            try:
                deger = ast.literal_eval(n.value)
            except ValueError:
                print(f"ÖLÇÜLEMEDİ: {n.targets[0].id} (:{n.lineno}) sabit küme değil")
                sys.exit(2)
            k[n.targets[0].id] = (set(deger), n.lineno)
    return k


ana = os.path.join(arg.kok, arg.dosya)
dizin = os.path.dirname(ana)
ziyaret, sira = {}, [os.path.splitext(os.path.basename(ana))[0]]
while sira:
    m = sira.pop()
    if m in ziyaret:
        continue
    yol = os.path.join(dizin, m + ".py")
    if not os.path.exists(yol):
        continue
    ziyaret[m] = (yol, ayristir(yol))
    sira.extend(tara(ziyaret[m][1])[3])

okunan, dinamik, tarama = {}, [], []
for m, (yol, agac) in sorted(ziyaret.items()):
    o, d, t, _ = tara(agac)
    for ad, ln in o:
        okunan.setdefault(ad, []).append(f"{m}.py:{ln}")
    dinamik += [f"{m}.py:{ln}" for ln in d]
    tarama += [f"{m}.py:{ln}" for ln in t]

kume = {k: v for k, (v, _) in kumeler_oku(ziyaret[os.path.splitext(os.path.basename(ana))[0]][1]).items()}
if arg.kumeler:
    try:
        kume.update({k: set(v) for k, v in json.load(open(arg.kumeler, encoding="utf-8")).items()
                     if k in KUME_ADLARI})
    except (OSError, ValueError) as e:
        print(f"ÖLÇÜLEMEDİ: --kumeler {arg.kumeler}: {e}"); sys.exit(2)

print(f"KÖK {arg.kok} · evren {len(ziyaret)} modül: {', '.join(sorted(ziyaret))}")
print(f"okunan MOTOR_* ad: {len(okunan)}")
for ad in sorted(okunan):
    sinif = [k for k in KUME_ADLARI if ad in kume.get(k, set())]
    print(f"   {ad:32s} {'/'.join(sinif) or '—':18s} {', '.join(okunan[ad])}")
print("environ TARAMASI (okuma sayılmadı):", ", ".join(tarama) or "yok")
print("kümeler:", " · ".join(f"{k} {len(kume[k]) if k in kume else 'YOK'}" for k in KUME_ADLARI))

if "_ONB_SONUC" not in kume:
    bos = sorted(set(okunan) - kume.get("_ONB_ISLETIM", set()))
    print(f"MOD: KAPSAYICI — `_ONB_SONUC` yok (③3 inmemiş). Bugünkü tuz İŞLETİM dışı her MOTOR_*'ı "
          f"alır ⇒ {len(bos)} ad tuzda. Kapı ÖTMEZ.")
    if dinamik:
        print("   (bilgi) dinamik environ okuması:", ", ".join(dinamik))
    sys.exit(0)

birlesim = set().union(*(kume.get(k, set()) for k in KUME_ADLARI))
sinifsiz = sorted(set(okunan) - birlesim)
cakisma = sorted(a for a in birlesim if sum(a in kume.get(k, set()) for k in KUME_ADLARI) > 1)
bayat = sorted(birlesim - set(okunan))
ihlal = 0
for baslik, liste in (("SINIFSIZ (okunuyor, hiçbir kümede yok — tuzdan SESSİZCE düşer)", sinifsiz),
                      ("ÇAKIŞMA (iki kümede)", cakisma),
                      ("BAYAT (kümede, hiç okunmuyor — yazım hatası?)", bayat),
                      ("DİNAMİK (anahtar sabit değil — doğrulanamaz)", dinamik)):
    if liste:
        ihlal += 1
        print(f"🔴 {baslik}: {', '.join(liste)}")
if not ihlal:
    print(f"✓ TEMİZ: {len(okunan)} okunan ad == SONUÇ ∪ İŞLETİM ∪ ÖNBELLEK-DIŞI")
sys.exit(1 if ihlal else 0)
