# -*- coding: utf-8 -*-
"""ARAC-SAHIPLIK-UYGULA-SINAV-1008 — `_sahiplik_uygula.py` K1 · K2 · K3 + geri okuma, İKİ YÖNDE.

    py denetim/ARAC-SAHIPLIK-UYGULA-SINAV-1008.py [--eski-ref 88cc2f3c]

Gerçek veriye DOKUNMAZ: HEAD'den GEÇİCİ bir worktree açar, içinde bütün `data/yer_yama*.js`
glob dışına alınır (inmiş yamalar 174 kaydı geri alır — aracın dosya başı) ve yalnız Z5 yaması
(`denetim/ZAMAN-Z5-1008-yer_yama_1923_1945.js`) konur. Sonra:

  KOL A  YAMASIZ araç (`--eski-ref`teki sürüm) `--yaz` ile GERÇEKTEN koşulur; veri motorun
         okuyucusuyla (`girdi.oku_dosya`) geri okunur ⇒ inmeyen `s:` ADIYLA sayılır ve aracın
         bunlar için ne dediği (İNEN listesi = "uygulandı" / "veride-yok") basılır.
  KOL B  YAMALI araç aynı koşulda `--yaz` ⇒ bütün `s:` iner, `not:` eklenir, geri okuma ✓, çıkış 0.
  GERİLEME  A'da doğru inen ve `not:`u/33'ü ilgilendirmeyen HER kayıt B'de BİREBİR aynı
         (alan sırası dahil); hiçbir hedef kaydı taşımayan dosyalar bayt bayt aynı.
  KOL C  (ikinci yön) yamalı araca sınav kancasıyla yapay MÜKERRER anahtar verilir ⇒ geri okuma
         YAKALAMALI: çıkış 4, kayıt adıyla "DOĞRULANAMADI", hiçbir dosya yazılmamış.
Çıkış: 0 bütün sorular geçti · 1 en az biri kaldı · 2 sınav koşulamadı.
"""
import io
import json
import os
import shutil
import subprocess
import sys
import tempfile

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YAMA = os.path.join(KOK, "denetim", "ZAMAN-Z5-1008-yer_yama_1923_1945.js")
YAMALI_ARAC = os.path.join(KOK, "arac", "_sahiplik_uygula.py")
ESKI_REF = "88cc2f3c"
if "--eski-ref" in sys.argv:
    ESKI_REF = sys.argv[sys.argv.index("--eski-ref") + 1]
SINIR_JSON = ("yerlesimler_sinir_guney.js", "yerlesimler_sinir_kuzey.js")

sonuc = []


def soru(ad, gecti, ayrinti=""):
    sonuc.append((ad, bool(gecti)))
    print("  [%s] %s%s" % ("GEÇTİ" if gecti else "KALDI", ad, ("  — " + ayrinti) if ayrinti else ""))


def git(*a, cwd=KOK, kontrol=True):
    p = subprocess.run(["git"] + list(a), cwd=cwd, capture_output=True)
    if kontrol and p.returncode != 0:
        raise SystemExit("git %s → %s" % (" ".join(a), p.stderr.decode("utf-8", "replace")[:300]))
    return p.stdout.decode("utf-8", "replace")


def yamalari_hazirla(W, yama):
    git("checkout", "--", "data/", cwd=W)
    for f in os.listdir(os.path.join(W, "data")):
        if f.startswith("yer_yama") and f.endswith(".js"):
            os.remove(os.path.join(W, "data", f))
    io.open(os.path.join(W, "data", "yer_yama_1923_1945.js"), "w", encoding="utf-8",
            newline="").write("window.YER_YAMA_1923_1945 = " + json.dumps(
                yama, ensure_ascii=False, indent=0) + ";\n")


def kos(W, arac_kaynak, ek=(), env_ek=None):
    shutil.copyfile(arac_kaynak, os.path.join(W, "arac", "_sahiplik_uygula.py"))
    env = dict(os.environ, PYTHONIOENCODING="utf-8")
    env.update(env_ek or {})
    p = subprocess.run([sys.executable, "arac/_sahiplik_uygula.py"] + list(ek), cwd=W,
                       capture_output=True, env=env)
    return p.returncode, p.stdout.decode("utf-8", "replace") + p.stderr.decode("utf-8", "replace")


OKU = r"""
import sys, json, io, os
sys.path.insert(0, 'arac'); import girdi
out = {}
for f in girdi.GIRDI_DOSYALARI:
    for y in girdi.oku_dosya(os.path.basename(f)):
        out[y['ad']] = [os.path.basename(f), list(y.items())]
sys.stdout.buffer.write(json.dumps(out, ensure_ascii=False).encode('utf-8'))
"""


def veri_oku(W):
    p = subprocess.run([sys.executable, "-c", OKU], cwd=W, capture_output=True)
    if p.returncode != 0:
        raise SystemExit("veri okunamadı: " + p.stderr.decode("utf-8", "replace")[:400])
    return json.loads(p.stdout.decode("utf-8"))


def dosya_metinleri(W):
    d = os.path.join(W, "data")
    return {f: io.open(os.path.join(d, f), encoding="utf-8", newline="").read()
            for f in os.listdir(d) if f.startswith("yerlesimler") and f.endswith(".js")}


def yama_oku():
    js = ("global.window={};eval(require('fs').readFileSync(process.argv[1],'utf8'));"
          "process.stdout.write(JSON.stringify(window.YER_YAMA_1923_1945))")
    p = subprocess.run(["node", "-e", js, YAMA], capture_output=True)
    return json.loads(p.stdout.decode("utf-8"))


def inen_adlar(cikti):
    """Aracın 'İNEN (n):' bölümündeki adlar (ilk 28 karakter)."""
    adlar, ic = set(), False
    for ln in cikti.splitlines():
        if ln.startswith("İNEN ("):
            ic = True
            continue
        if ic:
            if not ln.startswith("  "):
                break
            adlar.add(ln[2:30].rstrip())
    return adlar


def olc(veri, yama):
    s_inmeyen, not_inmeyen = [], []
    for y in yama:
        k = veri.get(y["ad"])
        if k is None:
            s_inmeyen.append((y["ad"], "?", "veride yok"))
            continue
        rec = dict(k[1])
        if rec.get("s") != y["s"]:
            s_inmeyen.append((y["ad"], k[0], "K1" if k[0] in SINIR_JSON else "K2"))
        if y.get("not") and y["not"] not in (rec.get("not") or ""):
            not_inmeyen.append(y["ad"])
    return s_inmeyen, not_inmeyen


def main():
    for yol in (YAMA, YAMALI_ARAC):
        if not os.path.exists(yol):
            print("SINAV KOŞULAMADI: %s yok" % yol)
            return 2
    yama = yama_oku()
    # 🔴 Z5 yaması `not:`u dolu 707 kayda beyanı HİÇ KOYMADI (üretici, uygulayıcı ezmez diye
    #   bilerek düşürdü — `ZAMAN-Z5-1008.json` `A_not_dolu_beyan_inmez`). K3'ü sınamak için
    #   sınav yaması o 707 kayda AYNI A beyanını ekler: "yama beyanı taşısaydı iner miydi".
    js = json.load(io.open(YAMA.replace("-yer_yama_1923_1945.js", ".json"), encoding="utf-8"))
    dolu = set(js["A_not_dolu_beyan_inmez"])
    beyan = next(y["not"] for y in yama if y.get("not", "").startswith("Z5-1008 A:"))
    k3_eklenen = 0
    for y in yama:
        if y["ad"] in dolu and "not" not in y:
            y["not"] = beyan
            k3_eklenen += 1
    print("K3 sınav yaması: A_not_dolu_beyan_inmez %d · beyan eklenen %d" % (len(dolu), k3_eklenen))
    print("Z5 yaması: %d kayıt · eski ref %s · temel HEAD %s"
          % (len(yama), ESKI_REF, git("rev-parse", "--short", "HEAD").strip()))
    tmp = tempfile.mkdtemp(prefix="sahip-sinav-")
    W = os.path.join(tmp, "w")
    eski_arac = os.path.join(tmp, "_sahiplik_uygula_ESKI.py")
    io.open(eski_arac, "w", encoding="utf-8", newline="").write(
        git("show", "%s:arac/_sahiplik_uygula.py" % ESKI_REF))
    git("worktree", "add", "--detach", W, "HEAD")
    try:
        # ───────────────────────────── KOL A — YAMASIZ
        print("\n=== KOL A — YAMASIZ araç (%s), --yaz ===" % ESKI_REF)
        yamalari_hazirla(W, yama)
        rcA, cA = kos(W, eski_arac, ["--yaz"])
        vA, mA = veri_oku(W), dosya_metinleri(W)
        sA, nA = olc(vA, yama)
        inenA = inen_adlar(cA)
        print("  çıkış %d · araç özeti: %s" % (rcA, " · ".join(
            ln.strip() for ln in cA.splitlines()
            if ln.startswith("  ") and ln.strip().split(" ")[0] in (
                "uygulandi", "veride-yok", "mukerrer-anahtar", "zaten-boyle")) or "-"))
        print("  geri okumada `s:`i İNMEYEN: %d" % len(sA))
        for ad, dos, sinif in sorted(sA, key=lambda x: (x[2], x[1], x[0])):
            dedi = "araç 'UYGULANDI' dedi" if ad[:28].rstrip() in inenA else "araç: atlandı/veride-yok"
            print("     %-3s %-30s %-28s %s" % (sinif, dos, ad, dedi))
        mukA = [x[0] for x in sA if not _mukerrer_yok(mA, x[0])]
        print("  yamasız koşudan sonra kaydında İKİ `s` anahtarı olan: %d — %s"
              % (len(mukA), ", ".join(mukA)))
        k1 = [x for x in sA if x[2] == "K1"]
        k2 = [x for x in sA if x[2] == "K2"]
        k2_yalan = [x for x in k2 if x[0][:28].rstrip() in inenA]
        soru("A1 yamasız araç 33 kaydı DÜŞÜRDÜ (28 K1 + 5 K2)",
             len(sA) == 33 and len(k1) == 28 and len(k2) == 5,
             "ölçülen %d (K1 %d · K2 %d)" % (len(sA), len(k1), len(k2)))
        soru("A2 yamasız araç düşürdüğü K2 kayıtlarına 'uygulandı' DEDİ, çıkış 0",
             rcA == 0 and len(k2_yalan) >= 1,
             "çıkış %d · 'uygulandı' denip inmeyen %d: %s" % (
                 rcA, len(k2_yalan), ", ".join(x[0] for x in k2_yalan)))
        _ezilmez = sorted(set(nA) & dolu)
        _ezilmez_ver = sum(1 for l in cA.splitlines() if "not: ZATEN DOLU" in l)
        soru("A3 yamasız araç dolu `not:`lu kayıtlara beyanı İNDİRMEDİ (K3)",
             len(_ezilmez) == len(dolu) and _ezilmez_ver > 0,
             "inmeyen dolu %d/%d · aracın 'not: ZATEN DOLU' satırı %d" % (
                 len(_ezilmez), len(dolu), _ezilmez_ver))
        print("  K3 — `not:` inmeyen: %d · bunlardan s'si inen: %d"
              % (len(nA), len(set(nA) - {x[0] for x in sA})))

        # ───────────────────────────── KOL B — YAMALI
        print("\n=== KOL B — YAMALI araç, --yaz ===")
        yamalari_hazirla(W, yama)
        rcB, cB = kos(W, YAMALI_ARAC, ["--yaz"])
        try:
            vB = veri_oku(W)
        except SystemExit as e:
            soru("B0 yamalı koşudan sonra veri motorun okuyucusuyla AYRIŞIYOR", False, str(e)[-300:])
            print("  araç çıktısının sonu:")
            for _ln in cB.splitlines()[-12:]:
                print("  | " + _ln)
            raise
        mB = dosya_metinleri(W)
        sB, nB = olc(vB, yama)
        for ln in cB.splitlines():
            if any(t in ln for t in ("GERİ OKUMA", "tanıma", "TEKİLLENDİ", "TANINMAYAN",
                                     "DOĞRULANAMADI", "uygulandi ", "not-eklendi", "KAPI")):
                print("  | " + ln.strip())
        soru("B1 yamalı araç çıkış 0", rcB == 0, "çıkış %d" % rcB)
        soru("B2 33 kaydın HEPSİ indi (geri okumada `s:` = yama)",
             not sB and all(dict(vB[a][1]).get("s") == next(y["s"] for y in yama if y["ad"] == a)
                            for a, _, _ in sA),
             "inmeyen %d%s" % (len(sB), (": " + ", ".join(x[0] for x in sB[:8])) if sB else ""))
        soru("B3 `not:` beyanı her kayda indi (K3 — EKLENDİ, ezilmedi)", not nB,
             "inmeyen %d" % len(nB))
        ezilen = [a for a in nA if a in vA and dict(vA[a][1]).get("not")
                  and not (dict(vB[a][1]).get("not") or "").startswith(dict(vA[a][1])["not"])]
        soru("B4 dolu `not:` EZİLMEDİ (eski metin aynen başta)", not ezilen,
             "ezilen %d%s" % (len(ezilen), (": " + ", ".join(ezilen[:5])) if ezilen else ""))
        soru("B5 aracın kendi geri okuması diskten doğruladı",
             "DİSKTEN GERİ OKUMA:" in cB and "UYGULANDI" in cB, "")
        muk_kalan = [a for a, _, _ in sA if a in vB]
        soru("B6 hedef kayıtlarda mükerrer anahtar KALMADI (metin taraması)",
             all(_mukerrer_yok(mB, a) for a in muk_kalan), "")

        # ───────────────────────────── GERİLEME
        print("\n=== GERİLEME — A'da düzgün inen kayıtlar B'de birebir aynı mı ===")
        hedef = {x[0] for x in sA} | set(nA)
        fark = [a for a in vA if a not in hedef and vA[a] != vB.get(a)]
        ayni_sayi = sum(1 for a in vA if a not in hedef)
        soru("G1 33 ∪ K3 dışındaki kayıtlar (alan sırası dahil) birebir aynı", not fark,
             "%d kayıt karşılaştırıldı · fark %d%s" % (ayni_sayi, len(fark),
                                                       (": " + ", ".join(fark[:5])) if fark else ""))
        dos_hedef = {vA[a][0] for a in hedef if a in vA}
        bayt = [f for f in mA if f not in dos_hedef and mA[f] != mB.get(f)]
        soru("G2 hedef kayıt taşımayan dosyalar bayt bayt aynı", not bayt,
             "%d dosya · fark %d %s" % (len([f for f in mA if f not in dos_hedef]), len(bayt),
                                        ", ".join(bayt[:5])))
        print("  (K3 kayıtlarının `not:` dışındaki alanları: ", end="")
        k3fark = [a for a in nA if a in vA and a not in {x[0] for x in sA}
                  and [kv for kv in vA[a][1] if kv[0] != "not"] != [kv for kv in vB[a][1] if kv[0] != "not"]]
        print("fark %d)" % len(k3fark))
        soru("G3 K3 kayıtlarında `not:` dışında hiçbir alan değişmedi", not k3fark,
             ", ".join(k3fark[:5]))

        # ───────────────────────────── KOL C — İKİNCİ YÖN
        print("\n=== KOL C — sınav kancası: yapay mükerrer `s` (Sincan) ⇒ geri okuma yakalamalı ===")
        yamalari_hazirla(W, yama)
        rcC, cC = kos(W, YAMALI_ARAC, [], {"SAHIPLIK_SINAV_BOZ": "Sincan"})
        kirli = git("status", "--porcelain", "--", "data/", cwd=W)
        kirli = [l for l in kirli.splitlines() if "yer_yama" not in l]
        _bolum = cC.split("DOĞRULANAMADI", 1)[1] if "DOĞRULANAMADI" in cC else ""
        yakaladi = any(ln.startswith("  Sincan ") for ln in _bolum.splitlines())
        soru("C1 bozuk yazım YAKALANDI: çıkış 4, Sincan adıyla, 'UYGULANDI' denmedi",
             rcC == 4 and yakaladi and "DİSKTEN GERİ OKUMA:" not in cC,
             "çıkış %d" % rcC)
        soru("C2 hiçbir veri dosyası yazılmadı", not kirli, "; ".join(kirli[:3]))
    finally:
        git("worktree", "remove", "--force", W, kontrol=False)
        shutil.rmtree(tmp, ignore_errors=True)

    gecen = sum(1 for _, g in sonuc if g)
    print("\nSONUÇ: %d/%d soru geçti" % (gecen, len(sonuc)))
    return 0 if gecen == len(sonuc) else 1


def _mukerrer_yok(metinler, ad):
    """Kaydın ÜST SEVİYESİNDE `s` anahtarı en çok BİR kez mi — aracın kodundan BAĞIMSIZ tarayıcı.

    Kayıt `ad` anahtarıyla (tırnaklı/tırnaksız) bulunur; dizge ve yorum atlanarak `{`…`}`
    eşlenir; derinlik 1'deki `s`/`"s"` anahtarları sayılır."""
    import re
    rx = re.compile(r'(?:(?<![\w"])ad|"ad")\s*:\s*' + re.escape(json.dumps(ad, ensure_ascii=False)))
    for t in metinler.values():
        for m in rx.finditer(t):
            # m'den geriye: kaydın açılış `{`ı (dizge/yorum farkı burada kaba — ad satırı
            # ile `{` arasında yalnız boşluk/yorum olur)
            bas = t.rfind("{", 0, m.start())
            if bas < 0:
                continue
            say, der, i, n = 0, 0, bas, len(t)
            while i < n:
                c = t[i]
                if c in "\"'":
                    q = c
                    i += 1
                    while i < n and t[i] != q:
                        i += 2 if t[i] == "\\" else 1
                    if der == 1:
                        j = i + 1
                        while j < n and t[j] in " \t":
                            j += 1
                        if t[i - 1:i] == "s" and t[i - 2:i - 1] == '"' and j < n and t[j] == ":":
                            say += 1
                    i += 1
                    continue
                if t.startswith("//", i):
                    i = t.find("\n", i)
                    i = n if i < 0 else i
                    continue
                if c in "{[":
                    der += 1
                elif c in "}]":
                    der -= 1
                    if der == 0:
                        break
                elif der == 1 and c == "s" and (i == 0 or not (t[i - 1].isalnum() or t[i - 1] in "_$")):
                    j = i + 1
                    while j < n and t[j] in " \t":
                        j += 1
                    if j < n and t[j] == ":":
                        say += 1
                i += 1
            if say > 1:
                return False
    return True


if __name__ == "__main__":
    sys.exit(main())
