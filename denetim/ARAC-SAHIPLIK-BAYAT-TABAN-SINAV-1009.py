# -*- coding: utf-8 -*-
"""ARAC-SAHIPLIK-BAYAT-TABAN-SINAV-1009 — `_sahiplik_uygula.py` TABAN KAPISI, İKİ YÖNDE.

    py denetim/ARAC-SAHIPLIK-BAYAT-TABAN-SINAV-1009.py [--gercek-yok]

Gerçek ağaçta HİÇBİR ŞEY yazmaz. İki bölüm:

SENTETİK (geçici `git init` deposu, araç kopyalanır, `--yaz` YALNIZ orada):
  T1  taze taban beyanı (taban = bugün)          → çıkış 0 · kayıt YAZILDI
  T2  bayat taban beyanı (taban ≠ bugün)         → çıkış 2 · ADIYLA · dosya BAYT BAYT aynı (kuru + --yaz)
  T3  taban beyansız                             → çıkış 3 (ÖLÇÜLEMEDİ) · ADIYLA · dosya aynı
  T4  beyansız + `--taban <c1>` (eski taban)     → çıkış 2 · ADIYLA   ← Z5'in sınıfı, sentetik
      aynı yama `--taban HEAD` (taban = bugün)   → çıkış 0
      aynı yama ESKİ araçla (origin/main sürümü) → çıkış 0  ← kusurun kendisi (kapı GÖRMÜYORDU)
  T5  hedef = bugün (yazım yok), beyansız        → çıkış 0 (soru doğmaz)
  T6  bayat + beyansız birlikte                  → çıkış 2, İKİ liste de basılı (biri ötekini gizlemez)
  T7  `--taban` çözülemeyen rev                  → çıkış 3
  T8  aynı ada iki yama FARKLI taban beyanı      → çıkış 3 (hangisi doğru belirsiz)

GERÇEK (HEAD'den geçici worktree, yalnız KURU koşu, glob = Z5 gövdesi `yer_yama_1923_1945.js`):
  R1  `--taban 67e9ec9d` (Z5'in tabanı, gövdenin başlığından) → çıkış 2 · Budin ADIYLA
  R2  bayat küme = BAĞIMSIZ kâhin (node ile rev ve bugün okunur; araçtan bağımsız) − aracın ATLANAN'ı
  R3  `--taban` yok (beyansız)                                  → çıkış 3, "temiz" DEĞİL
  R4  ESKİ araç (origin/main) aynı koşulda                      → çıkış 0 (kusurun ölçümü)
  R5  kapı BAYAT ∪ aracın ATLANAN'ı = DİLİM KÂHİNİ, fark 0 — ikisi AYNI ANDA, AYNI ağaçta hesaplanır.
      Kâhin araçtan bağımsızdır: node yamayı ve bugünkü veriyi okur, kayıt kayıt 1281-1923
      DİLİMİNİ (f < 1923-10-29 dönemler, t'si 1923-10-29'a kırpılmış) karşılaştırır.
      🔴 SABİT SAYI ÖLÇÜT DEĞİLDİR (eski "83" her inişte bayatlıyordu); yalnız BİLGİ basılır.
      R5b  kâhinden bir ad çıkarılınca (gerçek kümelerde) R5 KALIR ve adı basar
      R5c  sayan = basan: her liste tek kaynaktan, basılan satır sayısı = sayı (kendi içinde ASSERT)
ÖZ (hızlı kolda da koşar, gerçek veri istemez):
  Ö1-Ö3  r5_karsilastir iki yönde (eşit → geçer · kâhinden eksik / kapıda fazla → kalır, ADIYLA)
  Ö4-Ö6  bas_liste ASSERT'i iki yönde (normal → geçer · NFC/NFD ikiz ad · satır sonlu ad → öter)
SON  C:\\atlas ve C:\\atlas-umit `git status --short` sınavdan önce ve sonra AYNI.

Çıkış: 0 hepsi geçti · 1 en az biri kaldı · 2 sınav koşulamadı.
"""
import hashlib
import io
import json
import os
import shutil
import subprocess
import sys
import tempfile
import unicodedata

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARAC = ["_sahiplik_uygula.py", "_bayat_yama_kapi.py", "girdi.py", "girdi_listesi.py"]
ESKI_REF = "origin/main"          # kapısız (TABAN KAPISI'ndan önceki) araç
Z5_TABAN = "67e9ec9d"             # data/yer_yama_1923_1945.js başlığı: "temel 67e9ec9d"
Z5_GLOB = r"^yer_yama_1923_1945\.js$"
IZLENEN = [r"C:\atlas", r"C:\atlas-umit"]
GERCEK = "--gercek-yok" not in sys.argv
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi_listesi  # noqa: E402

HEDEF = os.path.basename(girdi_listesi.GIRDI_DOSYALARI[0])

# R5 — BİLGİ, ÖLÇÜT DEĞİL. Eski R5 bu kümeyi sabit "83" listesiyle karşılaştırıyordu; 9 Ekim gecesinin
#   12 inişi 15 kaydı daha bayatlattı ve sınav DOĞRU kapıyı reddetti (sabit bayatlığı, §3.4-⓪).
#   Artık ölçüt, aynı anda aynı ağaçta hesaplanan dilim kâhinidir; bu satır yalnız "son bilinen" diye basılır.
#   Kanıt: 3429ead9 → b3fd8874 arası 21 commit sayıyı 98'den 170'e taşıdı; sabit sınav düşerdi, bu R5 iki uçta da fark 0.
R5_SON_OLCUM = ("kapı 100 + atlanan 70 = kâhin 170 · 10 Ekim 2026 · origin/main b3fd8874 "
                "(önce: 91 + 7 = 98 · 3429ead9 · 76 + 7 = 83 · 36186769) — denetim/SAHIPLIK-BAYAT-TABAN-R5-1009.md")
UC = "1923-10-29"
DILIM_ALAN = ("s", "isg", "v")    # Z5 yamasının yazdığı dönemli alanlar


def pad(t):
    y, _, r = (t or "").partition("-")
    return y.zfill(5) + "-" + r


def dilim(donemler):
    """1281-1923 dilimi: f < UC olan dönemler, t'si UC'ye kırpılmış; sıra bağımsız (küme)."""
    out = set()
    for p in donemler or []:
        if not isinstance(p, dict) or pad(p.get("f")) >= pad(UC):
            continue
        q = dict(p)
        if q.get("t") and pad(q["t"]) > pad(UC):
            q["t"] = UC
        out.add(kanon(q))
    return out


def dilim_kahini(j):
    """j = KAHIN_JS çıktısı. Yamanın 1281-1923 dilimi bugünkü veriden FARKLI olan kayıtlar.
    Araçtan bağımsız: tabanı hiç okumaz, aracın mekanizmasını (taban ≠ bugün) taklit etmez."""
    farkli, belirsiz = set(), set()
    for x in j["yama"]:
        bu = j["bugun"].get(x["ad"], [])
        if len(bu) != 1:
            belirsiz.add(x["ad"])
            continue
        if any(alan in x and dilim(x[alan]) != dilim(bu[0].get(alan)) for alan in DILIM_ALAN):
            farkli.add(x["ad"])
    return farkli, belirsiz


class SayimBasimAyristi(Exception):
    """D225 sınıfı: SAYAN ile BASAN ayrıştı."""


def bas_liste(baslik, adlar, yaz=print):
    """Sayan ve basan AYNI listeden: sayı = len(adlar), her ad TEK satır. Basılan satır sayısı ve
    görünür (NFC) tekillik sayıya eşit değilse SayimBasimAyristi atar — ', '.join kırpılınca ya da iki
    ad ekranda aynı görününce sayının basılandan sessizce ayrışması (eski R5'in "15 dedi, 14 bastı") burada öter."""
    adlar = sorted(adlar)
    govde = "\n".join("      " + a for a in adlar)
    yaz("    %s (%d):" % (baslik, len(adlar)))
    if govde:
        yaz(govde)
    basilan = govde.split("\n") if govde else []
    gorunen = {unicodedata.normalize("NFC", s.strip()) for s in basilan}
    if len(basilan) != len(adlar) or len(gorunen) != len(adlar) or "" in gorunen:
        raise SayimBasimAyristi("%s: sayı %d · basılan satır %d · görünür tekil %d"
                                % (baslik, len(adlar), len(basilan), len(gorunen)))
    return len(basilan)


def r5_karsilastir(kapi, atlanan, kahin, belirsiz=(), yaz=print):
    """kapı ∪ atlanan (belirsiz hariç) = kâhin. Fark ADIYLA basılır. Döner: (geçti, yalnız_kapı, yalnız_kâhin)."""
    birlesim = (set(kapi) | set(atlanan)) - set(belirsiz)
    yk, yh = birlesim - set(kahin), set(kahin) - birlesim
    yaz("    kapı %d · atlanan %d · ortak %d · birleşim %d · kâhin %d · fark %d/%d"
        % (len(kapi), len(atlanan), len(set(kapi) & set(atlanan)), len(birlesim), len(kahin), len(yk), len(yh)))
    if yk:
        bas_liste("FARK — kapıda/atlananda var, kâhinde YOK", yk, yaz)
    if yh:
        bas_liste("FARK — kâhinde var, kapıda/atlananda YOK", yh, yaz)
    return not yk and not yh, yk, yh

# ─────────────────────────────────────────────────────────────── yardımcılar
sonuc = []


def sina(ad, kosul, ayrinti=""):
    sonuc.append((ad, bool(kosul)))
    print("  [%s] %s%s" % ("GEÇTİ" if kosul else "KALDI", ad, ("  — " + ayrinti) if ayrinti else ""))


def git(d, *a, kontrol=False):
    p = subprocess.run(["git", "-c", "user.name=sinav", "-c", "user.email=s@s", "-c", "core.autocrlf=false"]
                       + list(a), cwd=d, capture_output=True)
    if kontrol and p.returncode != 0:
        raise SystemExit("git %s → %s" % (" ".join(a), p.stderr.decode("utf-8", "replace")[:300]))
    return p.stdout.decode("utf-8", "replace")


def durum():
    return {d: git(d, "status", "--short") for d in IZLENEN if os.path.isdir(d)}


def yaz(d, yol, metin):
    io.open(os.path.join(d, yol), "w", encoding="utf-8", newline="\n").write(metin)


def veri(*kayit):
    return "window.YERLESIMLER = [\n" + "\n".join(kayit) + "\n];\n"


def ozet(d):
    return hashlib.sha256(open(os.path.join(d, "data", HEDEF), "rb").read()).hexdigest()


def kos(d, *arg, arac=None):
    if arac:
        shutil.copyfile(arac, os.path.join(d, "arac", "_sahiplik_uygula.py"))
    p = subprocess.run([sys.executable, "arac/_sahiplik_uygula.py"] + list(arg), cwd=d, capture_output=True,
                       env=dict(os.environ, PYTHONIOENCODING="utf-8"))
    return p.returncode, p.stdout.decode("utf-8", "replace") + p.stderr.decode("utf-8", "replace")


def satirlar(cikti, onek):
    """`  TABAN-BAYAT  <ad>  [...]` satırlarındaki adlar."""
    out = set()
    for ln in cikti.splitlines():
        if ln.startswith("  %s  " % onek):
            out.add(ln[len(onek) + 4:].split("  [", 1)[0])
    return out


# Sentetik veri: c1 = taban (yamanın üretildiği an), c2 = sonraki kaynaklı düzeltme (bugün).
ESKI_A = '{ ad:"Sinavkent", tur:"sehir", lat:40.0, lon:30.0, s:[{f:"1281-01-01",t:"1500-01-01",d:"eski-devlet"}] },'
DUZ_A = ('{ ad:"Sinavkent", tur:"sehir", lat:40.0, lon:30.0, s:[{f:"1281-01-01",t:"1450-01-01",d:"eski-devlet"},'
         '{f:"1450-01-01",t:"1500-01-01",d:"duzeltme-devlet",kaynak:"sonraki kaynakli duzeltme"}] },')
B = '{ ad:"Tazekoy", tur:"koy", lat:41.0, lon:31.0, s:[{f:"1281-01-01",t:"1600-01-01",d:"b-devlet"}] },'
C = '{ ad:"Ayniyer", tur:"koy", lat:42.0, lon:32.0, s:[{f:"1281-01-01",t:"1700-01-01",d:"c-devlet"}] },'

S_A_TABAN = '[{f:"1281-01-01",t:"1500-01-01",d:"eski-devlet"}]'
S_A_BUGUN = ('[{f:"1281-01-01",t:"1450-01-01",d:"eski-devlet"},'
             '{f:"1450-01-01",t:"1500-01-01",d:"duzeltme-devlet",kaynak:"sonraki kaynakli duzeltme"}]')
# Z5'in birebir sınıfı: ESKİ tabandan üretilmiş, ucu UZATILMIŞ dizi (geçmişte hiç olmadı ⇒ geri alma kapısı geçer).
Y_A_UZAT = '{ad:"Sinavkent", s:[{f:"1281-01-01",t:"1600-01-01",d:"eski-devlet"}]%s}'
Y_A_TAZE = ('{ad:"Sinavkent", s:[{f:"1281-01-01",t:"1450-01-01",d:"eski-devlet"},'
            '{f:"1450-01-01",t:"1600-01-01",d:"duzeltme-devlet",kaynak:"sonraki kaynakli duzeltme"}]%s}')
Y_B = '{ad:"Tazekoy", s:[{f:"1281-01-01",t:"1550-01-01",d:"b-devlet"},{f:"1550-01-01",t:"1600-01-01",d:"yeni-devlet"}]%s}'
S_B = '[{f:"1281-01-01",t:"1600-01-01",d:"b-devlet"}]'
Y_C_AYNI = '{ad:"Ayniyer", s:[{f:"1281-01-01",t:"1700-01-01",d:"c-devlet"}]}'


def kur():
    d = tempfile.mkdtemp(prefix="taban_sinav_")
    os.makedirs(os.path.join(d, "arac"))
    os.makedirs(os.path.join(d, "data"))
    for f in ARAC:
        shutil.copy(os.path.join(KOK, "arac", f), os.path.join(d, "arac", f))
    yaz(d, "data/" + HEDEF, veri(ESKI_A, B, C))
    git(d, "init", "-q")
    git(d, "add", "-A")
    git(d, "commit", "-q", "-m", "c1: taban")
    c1 = git(d, "rev-parse", "HEAD").strip()
    yaz(d, "data/" + HEDEF, veri(DUZ_A, B, C))
    git(d, "commit", "-q", "-am", "c2: kaynakli duzeltme")
    return d, c1


def yama(d, *kayit):
    yaz(d, "data/yer_yama_sinav.js", "window.YER_YAMA_SINAV = [\n" + ",\n".join(kayit) + "\n];\n")
    git(d, "add", "data/yer_yama_sinav.js")
    git(d, "commit", "-q", "-m", "yama")


def tb(**alan):
    return ", taban:{%s}" % ",".join("%s:%s" % kv for kv in alan.items())


def sentetik(eski_arac):
    dizin = []
    try:
        print("\n=== SENTETİK ===")
        # T1 taze taban
        d, _ = kur(); dizin.append(d)
        yama(d, Y_A_TAZE % tb(s=S_A_BUGUN), Y_B % tb(s=S_B))
        kod, out = kos(d)
        sina("T1a taze taban, kuru → çıkış 0", kod == 0, "çıkış %d" % kod)
        once = ozet(d)
        kod, out = kos(d, "--yaz")
        yeni = io.open(os.path.join(d, "data", HEDEF), encoding="utf-8").read()
        sina("T1b taze taban, --yaz → çıkış 0 ve YAZILDI",
             kod == 0 and ozet(d) != once and 'd:"yeni-devlet"' in yeni and 't:"1600-01-01",d:"duzeltme-devlet"' in yeni,
             "çıkış %d" % kod)

        # T2 bayat taban beyanı
        d, _ = kur(); dizin.append(d)
        yama(d, Y_A_UZAT % tb(s=S_A_TABAN), Y_B % tb(s=S_B))
        once = ozet(d)
        kod, out = kos(d)
        sina("T2a bayat taban, kuru → çıkış 2", kod == 2, "çıkış %d" % kod)
        sina("T2b Sinavkent ADIYLA, Tazekoy listede DEĞİL",
             satirlar(out, "TABAN-BAYAT") == {"Sinavkent"}, str(satirlar(out, "TABAN-BAYAT")))
        sina("T2c ayrıntı düzeltmeyi gösteriyor (duzeltme-devlet bugün var/tabanda yok)",
             any("TABAN-BAYAT  Sinavkent" in ln and "duzeltme-devlet" in ln for ln in out.splitlines()))
        kod, out = kos(d, "--yaz")
        sina("T2d bayat taban, --yaz → çıkış 2 · dosya BAYT BAYT aynı", kod == 2 and ozet(d) == once,
             "çıkış %d" % kod)

        # T3 beyansız
        d, _ = kur(); dizin.append(d)
        yama(d, Y_B % "")
        once = ozet(d)
        kod, out = kos(d, "--yaz")
        sina("T3a beyansız --yaz → çıkış 3 (ÖLÇÜLEMEDİ, temiz değil)", kod == 3, "çıkış %d" % kod)
        sina("T3b Tazekoy ADIYLA ölçülemedi · dosya aynı",
             satirlar(out, "TABAN-OLCULEMEDI") == {"Tazekoy"} and ozet(d) == once)
        sina("T3c 'TAZE'/'temiz' DENMEDİ", "TAZE." not in out.split("TABAN KAPISI", 1)[1].split("GERİ ALMA")[0])

        # T4 --taban rev (Z5'in sınıfı)
        d, c1 = kur(); dizin.append(d)
        yama(d, Y_A_UZAT % "")
        once = ozet(d)
        kod, out = kos(d, "--taban", c1[:8])
        sina("T4a beyansız + --taban <c1> (eski taban) → çıkış 2, Sinavkent ADIYLA",
             kod == 2 and satirlar(out, "TABAN-BAYAT") == {"Sinavkent"}, "çıkış %d" % kod)
        kod, out = kos(d, "--taban", c1[:8], "--yaz")
        sina("T4b aynı, --yaz → çıkış 2 · dosya aynı", kod == 2 and ozet(d) == once, "çıkış %d" % kod)
        kod, out = kos(d, "--taban", "HEAD")
        sina("T4c aynı yama --taban HEAD (taban = bugün) → çıkış 0", kod == 0, "çıkış %d" % kod)
        if eski_arac:
            kod, out = kos(d, arac=eski_arac)
            sina("T4d ESKİ araç aynı bayat yamaya → çıkış 0 (kusur: kapı GÖRMÜYORDU)", kod == 0,
                 "çıkış %d" % kod)
            shutil.copy(os.path.join(KOK, "arac", "_sahiplik_uygula.py"), os.path.join(d, "arac"))

        # T5 hedef = bugün
        d, _ = kur(); dizin.append(d)
        yama(d, Y_C_AYNI)
        kod, out = kos(d)
        sina("T5 hedef = bugün (yazım yok), beyansız → çıkış 0", kod == 0, "çıkış %d" % kod)

        # T6 bayat + beyansız birlikte
        d, _ = kur(); dizin.append(d)
        yama(d, Y_A_UZAT % tb(s=S_A_TABAN), Y_B % "")
        kod, out = kos(d)
        sina("T6 bayat + beyansız → çıkış 2, iki liste de ADIYLA",
             kod == 2 and satirlar(out, "TABAN-BAYAT") == {"Sinavkent"}
             and satirlar(out, "TABAN-OLCULEMEDI") == {"Tazekoy"}, "çıkış %d" % kod)

        # T7 çözülemeyen rev
        d, _ = kur(); dizin.append(d)
        yama(d, Y_B % "")
        kod, out = kos(d, "--taban", "deadbeefdeadbeef")
        sina("T7 --taban çözülemeyen rev → çıkış 3", kod == 3 and "çözülemedi" in out, "çıkış %d" % kod)

        # T8 iki yama, farklı taban beyanı (iki dosya, aynı hedef)
        d, _ = kur(); dizin.append(d)
        yama(d, Y_B % tb(s=S_B))
        yaz(d, "data/yer_yama_sinav2.js", "window.YER_YAMA_SINAV2 = [\n" + (Y_B % tb(s='[]')) + "\n];\n")
        git(d, "add", "-A"); git(d, "commit", "-q", "-m", "yama2")
        kod, out = kos(d)
        sina("T8 aynı ada FARKLI iki taban beyanı → çıkış 3 (belirsiz)",
             kod == 3 and "FARKLI taban" in out, "çıkış %d" % kod)
    finally:
        for d in dizin:
            shutil.rmtree(d, ignore_errors=True)


# ──────────────────────────────────────────────────────── GERÇEK — Z5 gövdesi
KAHIN_JS = r"""
const fs = require('fs'), path = require('path');
const kok = process.argv[1], hedef = process.argv[2];
const oku = (dizin) => {
  const m = {};
  for (const f of fs.readdirSync(dizin).filter(x => /^yerlesimler.*\.js$/.test(x))) {
    global.window = {};
    try { eval(fs.readFileSync(path.join(dizin, f), 'utf8')); } catch (e) { continue; }
    for (const k of Object.keys(global.window)) {
      const v = global.window[k];
      if (!Array.isArray(v)) continue;
      for (const r of v) if (r && r.ad !== undefined) (m[r.ad] = m[r.ad] || []).push(r);
    }
  }
  return m;
};
global.window = {};
eval(fs.readFileSync(hedef, 'utf8'));
const yama = Object.values(global.window).find(Array.isArray);
process.stdout.write(JSON.stringify({bugun: oku(path.join(kok, 'bugun')), taban: oku(path.join(kok, 'taban')), yama}));
"""


def kanon(v):
    return json.dumps(v, sort_keys=True, ensure_ascii=False, separators=(",", ":"))


def kahin(W, tmp, girdi_dosyalari):
    """Araçtan BAĞIMSIZ: node ile (JS'in kendi okuyuşu) bugünkü ve taban veriyi okur."""
    kd = os.path.join(tmp, "kahin")
    for alt in ("bugun", "taban"):
        os.makedirs(os.path.join(kd, alt))
    for f in girdi_dosyalari:
        shutil.copy(os.path.join(W, "data", f), os.path.join(kd, "bugun", f))
        p = subprocess.run(["git", "show", "%s:data/%s" % (Z5_TABAN, f)], cwd=W, capture_output=True)
        if p.returncode == 0:
            open(os.path.join(kd, "taban", f), "wb").write(p.stdout)
    p = subprocess.run(["node", "-e", KAHIN_JS, kd, os.path.join(W, "data", "yer_yama_1923_1945.js")],
                       capture_output=True)
    if p.returncode != 0:
        raise SystemExit("kâhin koşmadı: " + p.stderr.decode("utf-8", "replace")[:300])
    j = json.loads(p.stdout.decode("utf-8"))
    bayat, belirsiz = set(), set()
    for x in j["yama"]:
        bu, ta = j["bugun"].get(x["ad"], []), j["taban"].get(x["ad"], [])
        if len(bu) != 1 or len(ta) != 1:
            belirsiz.add(x["ad"])
            continue
        for alan in ("d", "s", "v", "isg", "m"):
            if alan in x and kanon(x[alan]) != kanon(bu[0].get(alan)) \
                    and kanon(ta[0].get(alan)) != kanon(bu[0].get(alan)):
                bayat.add(x["ad"])
    return bayat, belirsiz, len(j["yama"]), j


def gercek(eski_arac):
    print("\n=== GERÇEK — Z5 gövdesi (data/yer_yama_1923_1945.js), taban %s, yalnız KURU ===" % Z5_TABAN)
    if not os.path.exists(os.path.join(KOK, "data", "yer_yama_1923_1945.js")):
        sina("R0 Z5 gövdesi var", False, "data/yer_yama_1923_1945.js yok")
        return
    tmp = tempfile.mkdtemp(prefix="taban_gercek_")
    W = os.path.join(tmp, "w")
    git(KOK, "worktree", "add", "--detach", W, "HEAD", kontrol=True)
    try:
        for f in ARAC:      # sınanan (çalışma ağacındaki) araç
            shutil.copy(os.path.join(KOK, "arac", f), os.path.join(W, "arac", f))
        once = git(W, "status", "--porcelain", "--", "data/")
        rapor = os.path.join(tmp, "rapor.json")
        kod, out = kos(W, "--yama-glob", Z5_GLOB, "--taban", Z5_TABAN, "--taban-rapor", rapor)
        r = json.load(io.open(rapor, encoding="utf-8")) if os.path.exists(rapor) else {}
        bay = {x["ad"] for x in r.get("bayat", [])}
        olc = {x["ad"] for x in r.get("olculemedi", [])}
        atl = {x["ad"] for x in r.get("atlanan", [])}
        print("  araç: değişim %s · BAYAT TABAN %d kayıt (%d alan) · ölçülemedi %d · atlanan %d · rev okunamadı %s"
              % (r.get("degisim"), len(bay), len(r.get("bayat", [])), len(olc), len(atl), r.get("rev_okunamadi")))
        sina("R1a --taban %s → çıkış 2" % Z5_TABAN, kod == 2, "çıkış %d" % kod)
        sina("R1b Budin ADIYLA BAYAT TABAN listesinde", "Budin" in bay)
        sina("R1c Ankara · Harput ADIYLA (koordinatörün örnekleri)",
             all(any(a == n or a.startswith(n + " (") for a in bay) for n in ("Ankara", "Harput")))
        budin = [x for x in r.get("bayat", []) if x["ad"] == "Budin"]
        sina("R1d Budin ayrıntısı macaristan-habsburg'u gösteriyor",
             any("macaristan-habsburg" in x["ayrinti"] for x in budin), budin[0]["ayrinti"][:160] if budin else "")
        sina("R1e Z5 kayıtlarının hiçbiri tabanda ÖLÇÜLEMEDİ değil (rev okundu)", not olc,
             ", ".join(sorted(olc)[:8]))

        gfiles = [os.path.basename(f) for f in girdi_listesi.GIRDI_DOSYALARI]
        k_bayat, k_belirsiz, n, kj = kahin(W, tmp, gfiles)
        beklenen = k_bayat - atl
        print("  kâhin (node, araçtan bağımsız): %d yama kaydı · bayat %d · belirsiz %d · bayat∩atlanan %d"
              % (n, len(k_bayat), len(k_belirsiz), len(k_bayat & atl)))
        sina("R2 araç kümesi = kâhin bayat − aracın ATLANAN'ı", bay == beklenen,
             "yalnız araç: %s · yalnız kâhin: %s" % (sorted(bay - beklenen)[:6], sorted(beklenen - bay)[:6]))

        kod3, out3 = kos(W, "--yama-glob", Z5_GLOB)
        sina("R3 beyansız (--taban yok) → çıkış 3, 'temiz' değil", kod3 == 3, "çıkış %d" % kod3)
        if eski_arac:
            kod4, out4 = kos(W, "--yama-glob", Z5_GLOB, arac=eski_arac)
            sina("R4 ESKİ araç aynı Z5 kuru koşusu → çıkış 0 (kusurun ölçümü: GÖRMÜYORDU)", kod4 == 0,
                 "çıkış %d" % kod4)
            shutil.copy(os.path.join(KOK, "arac", "_sahiplik_uygula.py"), os.path.join(W, "arac"))
        sina("R6 geçici worktree'de data/ yazılmadı", git(W, "status", "--porcelain", "--", "data/") == once)

        # R5 — kapı ∪ atlanan = DİLİM KÂHİNİ (aynı anda, aynı ağaç W). Sabit sayı yalnız BİLGİ.
        #   Kâhin aracın HİÇBİR kodunu paylaşmaz: veriyi node okur (KAHIN_JS · girdi.py değil), tabanı
        #   okumaz, karşılaştırma alan eşitliği değil 1281-1923 DİLİMİ (dilim()). Aynı hatayı iki yerde
        #   yapan çift "fark 0" diye yanlış temiz raporlardı.
        print("\n  R5 — kapı BAYAT ∪ aracın ATLANAN'ı = dilim kâhini (aynı an, aynı ağaç):")
        print("    (BİLGİ, ölçüt değil) son bilinen ölçüm: %s" % R5_SON_OLCUM)
        k_dilim, k_dbel = dilim_kahini(kj)
        satir = []          # konsola basılanın UTF-8 dosya kopyası (kod sayfası sınaması için)

        def yaz(t):
            print(t)
            satir.append(t)
        try:
            gec, yk, yh = r5_karsilastir(bay, atl, k_dilim, k_dbel, yaz)
            sina("R5 kapı BAYAT ∪ ATLANAN = dilim kâhini, fark 0 (ADIYLA)", gec,
                 "yalnız kapı %s · yalnız kâhin %s" % (sorted(yk), sorted(yh)))
            if k_dbel:
                bas_liste("kâhin BELİRSİZ (veride 0 ya da >1 kayıt — karşılaştırma dışı)", k_dbel, yaz)
            n1 = bas_liste("KAPI BAYAT TABAN", bay, yaz)
            n2 = bas_liste("ATLANAN (KAPSAM DARALDI vb.)", atl, yaz)
            n3 = bas_liste("DİLİM KÂHİNİ", k_dilim, yaz)
            sina("R5c sayan = basan (her liste tek kaynaktan; satır = sayı)",
                 (n1, n2, n3) == (len(bay), len(atl), len(k_dilim)), "%d/%d/%d" % (n1, n2, n3))
        except SayimBasimAyristi as e:
            sina("R5c sayan = basan (her liste tek kaynaktan; satır = sayı)", False, str(e))
        # Kod sayfası: liste nesnesindeki assert YAZDIRICIDAN düşen adı göremez ⇒ basılan metin UTF-8
        #   dosyaya da yazılır, dosyadan geri okunur, satır sayısı ve adlar listeyle karşılaştırılır.
        dosya = os.environ.get("R5_LISTE_DOSYA") or os.path.join(tmp, "r5_liste.txt")
        io.open(dosya, "w", encoding="utf-8", newline="\n").write("\n".join(satir) + "\n")
        geri = io.open(dosya, encoding="utf-8").read().split("\n")[:-1]
        govde = [ln.strip() for ln in geri if ln.startswith("      ")]
        bek = len(bay) + len(atl) + len(k_dilim) + len(k_dbel)
        sina("R5d UTF-8 dosyadan geri okunan liste satırı = sayı ve adlar BİREBİR",
             len(govde) == bek and set(govde) >= (bay | atl | k_dilim | k_dbel),
             "dosya %d satır · beklenen %d · %s" % (len(govde), bek, dosya))
        # R5b — gerçek kümelerde yapay fark: kâhinden bir ad çıkar ⇒ R5 KALMALI ve adı basmalı.
        if k_dilim:
            kurban = sorted(k_dilim)[0]
            tampon = []
            gec_b, yk_b, _ = r5_karsilastir(bay, atl, k_dilim - {kurban}, k_dbel, tampon.append)
            sina("R5b kâhinden '%s' çıkarılınca R5 KALIR ve adı ADIYLA basar" % kurban,
                 not gec_b and yk_b == {kurban} and any(ln.strip() == kurban for t in tampon for ln in t.split("\n")))
        else:
            sina("R5b yapay fark sınaması (kâhin boş — koşulamadı)", False)
    finally:
        git(KOK, "worktree", "remove", "--force", W)
        shutil.rmtree(tmp, ignore_errors=True)


def oz():
    """R5'in kendi parçaları, İKİ YÖNDE, gerçek veri istemeden (hızlı kolda da koşar)."""
    print("\n=== ÖZ — R5 karşılaştırıcısı ve sayan=basan ASSERT'i ===")
    kapi, atl = {"Aden", "Budin", "Zebîd"}, {"Kars"}
    t = []
    gec, yk, yh = r5_karsilastir(kapi, atl, {"Aden", "Budin", "Zebîd", "Kars"}, (), t.append)
    sina("Ö1 kapı ∪ atlanan = kâhin → geçer", gec and not yk and not yh)
    t = []
    gec, yk, yh = r5_karsilastir(kapi, atl, {"Aden", "Budin", "Kars"}, (), t.append)
    sina("Ö2 kâhinden 'Zebîd' çıkarılınca → KALIR, 'Zebîd' ADIYLA basılır",
         not gec and yk == {"Zebîd"} and any(ln.strip() == "Zebîd" for x in t for ln in x.split("\n")))
    t = []
    gec, yk, yh = r5_karsilastir(kapi, atl, {"Aden", "Budin", "Zebîd", "Kars", "Sayda"}, (), t.append)
    sina("Ö3 kâhinde fazla 'Sayda' (kapı görmedi) → KALIR, ADIYLA",
         not gec and yh == {"Sayda"} and any(ln.strip() == "Sayda" for x in t for ln in x.split("\n")))
    adlar = ["Ad%02d" % i for i in range(15)]
    try:
        n = bas_liste("normal", adlar, [].append)
        sina("Ö4 bas_liste 15 ad → 15 satır, ASSERT sessiz", n == 15)
    except SayimBasimAyristi as e:
        sina("Ö4 bas_liste 15 ad → 15 satır, ASSERT sessiz", False, str(e))
    for ad, kotu in (("Ö5 NFC/NFD ikiz ad (küme 15, ekranda 14 görünür)", ["Zeb\u00eed", "Zebi\u0302d"]),
                     ("Ö6 satır sonlu ad (15 ad, 16 satır)", ["Kars\nKuba"])):
        try:
            bas_liste("sabotaj", adlar[:15 - len(kotu)] + kotu, [].append)
            sina(ad + " → ASSERT ÖTER", False, "ötmedi")
        except SayimBasimAyristi as e:
            sina(ad + " → ASSERT ÖTER", True, str(e))


def main():
    bas = durum()
    tmp = tempfile.mkdtemp(prefix="taban_eski_")
    eski = os.path.join(tmp, "_sahiplik_uygula_ESKI.py")
    p = subprocess.run(["git", "show", "%s:arac/_sahiplik_uygula.py" % ESKI_REF], cwd=KOK, capture_output=True)
    if p.returncode != 0:
        print("  (eski araç okunamadı: %s — T4d/R4 atlanıyor)" % ESKI_REF)
        eski = None
    else:
        open(eski, "wb").write(p.stdout)
        if b"TABAN KAPISI" in p.stdout:
            print("  (%s zaten TABAN KAPISI'nı taşıyor — T4d/R4 'eski araç' sorusu anlamsız, atlanıyor)" % ESKI_REF)
            eski = None
    try:
        oz()
        sentetik(eski)
        if GERCEK:
            gercek(eski)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)
    son = durum()
    for d in IZLENEN:
        sina("SON %s git status --short DEĞİŞMEDİ" % d, bas.get(d) == son.get(d),
             "önce %r · sonra %r" % (bas.get(d, "")[:80], son.get(d, "")[:80]))
    gecen = sum(1 for _, g in sonuc if g)
    print("\nSONUÇ: %d/%d soru geçti" % (gecen, len(sonuc)))
    return 0 if gecen == len(sonuc) else 1


if __name__ == "__main__":
    sys.exit(main())
