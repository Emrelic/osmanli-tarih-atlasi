# -*- coding: utf-8 -*-
"""SINAV — `_sahiplik_uygula.py --dosya-dokumu` (SAHIPLIK-DOSYA-DOKUMU-1009), İKİ YÖNDE.

    py denetim/ARAC-SAHIPLIK-DOSYA-DOKUMU-SINAV-1009.py [--eski <blob|rev:yol>] [--tut]

Gerçek veriye DOKUNMAZ: HEAD'den GEÇİCİ bir worktree açar (`%TEMP%`), içine bu depodaki
(yamalı) `arac/_sahiplik_uygula.py`yi kopyalar; uydurma yama dosyaları YALNIZ o worktree'ye
yazılır, iş bitince worktree silinir (`--tut` ile kalır). `--yaz` HİÇ koşulmaz.

  (a) GERÇEK KORPUS: döküm ad-kovaları = aynı tabanda BAYRAKSIZ kuru koşunun özet sayaçları
      (birebir) · dosya×kayıt toplamı = "YAMA KAYDI" · her dosyanın kovaları kayıt sayısına
      eşit · ARŞİVLENEBİLİR dosyada zaten-boyle/(veride-yok ad-değişmiş içerik-inmiş) dışında
      kova yok · koordinatörün sayıları (210/726/20/2/18/60) ile fark kova kova basılır.
  (c) uydurma, glob'a giren `data/yer_yama_zz_sinav_1009.js` — bütün kayıtları veridekinin
      AYNISI (`m:`) ⇒ ARŞİVLENEBİLİR görünmeli.
  (b) aynı dosyaya bir `uygulandi` kaydı (`m:` farklı) eklenince — VARSAYILAN glob, bütün
      korpusla — ARŞİVLENEBİLİR işaretini KAYBETMELİ ("ARŞİVLENEMEZ: uygulandi 1").
  (d) gerileme: bayraksız koşu, eski araçla (blob `7b1118c0`, SAHIPLIK-UYGULA-KUSUR-1008 sürümü)
      ÇIKTI ve ÇIKIŞ KODU birebir.
"""
import io
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
from concurrent.futures import ThreadPoolExecutor

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YAMALI_ARAC = os.path.join(KOK, "arac", "_sahiplik_uygula.py")
ESKI = "7b1118c0659869850bd9b5e7457b70e69c3d8f96"        # 1008 sürümünün blob'u
if "--eski" in sys.argv:
    ESKI = sys.argv[sys.argv.index("--eski") + 1]
TUT = "--tut" in sys.argv
KOORDINATOR = {"uygulandi": 210, "zaten-boyle": 726, "cakisma": 20, "kendi-kilidi": 2,
               "gun-maddesiz": 18, "veride-yok": 60}
SAHTE = "yer_yama_zz_sinav_1009.js"

sonuc = []


def soru(ad, gecti, ayrinti=""):
    sonuc.append((ad, bool(gecti)))
    print("  [%s] %s%s" % ("GEÇTİ" if gecti else "KALDI", ad, ("  — " + ayrinti) if ayrinti else ""))


def git(*a, cwd=KOK, kontrol=True):
    p = subprocess.run(["git"] + list(a), cwd=cwd, capture_output=True)
    if kontrol and p.returncode != 0:
        raise SystemExit("git %s → %s" % (" ".join(a), p.stderr.decode("utf-8", "replace")[:300]))
    return p.stdout


def kos(W, arac_adi, ek=()):
    env = dict(os.environ, PYTHONIOENCODING="utf-8")
    p = subprocess.run([sys.executable, "arac/" + arac_adi] + list(ek), cwd=W,
                       capture_output=True, env=env)
    return p.returncode, p.stdout.decode("utf-8", "replace") + p.stderr.decode("utf-8", "replace")


def ozet(cikti):
    """Bayraksız özetin `  <kova>  <n>` satırları (=== SAHİPLİK YAMASI başlığından sonra)."""
    out, ic = {}, False
    for ln in cikti.splitlines():
        if ln.startswith("=== SAHİPLİK YAMASI"):
            ic = True
            continue
        if ic:
            m = re.match(r"^  (\S+)\s+(\d+)$", ln)
            if m:
                out[m.group(1)] = int(m.group(2))
            elif ln.startswith("benzersiz ad"):
                continue
            elif ln.strip() == "" and out:
                break
    return out


def dokum_json(cikti):
    for ln in cikti.splitlines():
        if ln.startswith("DOKUM_JSON "):
            return json.loads(ln[len("DOKUM_JSON "):])
    return None


SEC = r"""
import sys, json, io, os, re
sys.path.insert(0, 'arac'); import girdi
yama_metin = "".join(io.open(os.path.join('data', f), encoding='utf-8', errors='replace').read()
                     for f in os.listdir('data') if re.match(r'^yer_yama.*\.js$', f))
say = {}
kay = []
for f in girdi.GIRDI_DOSYALARI:
    b = os.path.basename(f)
    metin = io.open(os.path.join('data', b), encoding='utf-8').read()
    for y in girdi.oku_dosya(b):
        say[y['ad']] = say.get(y['ad'], 0) + 1
        m = y.get('m')
        if (isinstance(m, str) and m and '"' not in m and '\\' not in m
                and ('m:"%s"' % m) in metin and ('ad:"%s"' % y['ad']) in metin
                and ('"%s"' % y['ad']) not in yama_metin):
            kay.append((y['ad'], m))
sec = [k for k in kay if say[k[0]] == 1][:5]
sys.stdout.buffer.write(json.dumps(sec, ensure_ascii=False).encode('utf-8'))
"""


def sahte_yaz(W, kayitlar):
    io.open(os.path.join(W, "data", SAHTE), "w", encoding="utf-8", newline="").write(
        "// SINAV 1009 — uydurma yama, atılabilir worktree\nwindow.YER_YAMA_ZZ_SINAV_1009 = "
        + json.dumps(kayitlar, ensure_ascii=False) + ";\n")


def satir(dj, dosya):
    for s in (dj or {}).get("dosyalar", []):
        if s["dosya"] == dosya:
            return s
    return None


def main():
    W = os.path.join(tempfile.gettempdir(), "sahiplik-dokum-sinav-%d" % os.getpid())
    print("geçici worktree: %s (HEAD)" % W)
    git("worktree", "add", "--detach", W, "HEAD")
    try:
        shutil.copyfile(YAMALI_ARAC, os.path.join(W, "arac", "_sahiplik_uygula.py"))
        eski = git("cat-file", "-p", ESKI) if ":" not in ESKI else git("show", ESKI)
        io.open(os.path.join(W, "arac", "_sahiplik_eski_1009.py"), "wb").write(eski)

        # ── faz 1: temiz korpus, üç koşu paralel (salt okunur, aynı ağaç)
        print("faz 1: eski bayraksız · yeni bayraksız · yeni --dosya-dokumu --json - (paralel)…")
        with ThreadPoolExecutor(3) as ex:
            f_eski = ex.submit(kos, W, "_sahiplik_eski_1009.py")
            f_yeni = ex.submit(kos, W, "_sahiplik_uygula.py")
            f_dok = ex.submit(kos, W, "_sahiplik_uygula.py", ("--dosya-dokumu", "--json", "-"))
            (k_eski, c_eski), (k_yeni, c_yeni), (k_dok, c_dok) = (
                f_eski.result(), f_yeni.result(), f_dok.result())

        print("\n(d) GERİLEME — bayraksız çıktı eskisiyle birebir")
        soru("D1 çıkış kodu aynı", k_eski == k_yeni, "eski %d · yeni %d" % (k_eski, k_yeni))
        soru("D2 çıktı bayt bayt aynı", c_eski == c_yeni,
             "eski %d · yeni %d karakter" % (len(c_eski), len(c_yeni)))
        if c_eski != c_yeni:
            a, b = c_eski.splitlines(), c_yeni.splitlines()
            for i, (x, y) in enumerate(zip(a, b)):
                if x != y:
                    print("     ilk fark satır %d:\n       eski: %s\n       yeni: %s" % (i + 1, x, y))
                    break
        soru("D3 bayraklı koşu aynı çıkış kodunu verir", k_dok == k_yeni,
             "bayraklı %d · bayraksız %d" % (k_dok, k_yeni))
        # döküm bloğu: [boş satır, ═, "DOSYA DÖKÜMÜ —…", ═, …, ═ (son)] — satır tabanlı çıkarılır
        _sat = c_dok.splitlines()
        _bas = next((i for i, l in enumerate(_sat) if l.startswith("DOSYA DÖKÜMÜ —")), None)
        if _bas is not None:
            _cizgi = [i for i, l in enumerate(_sat) if l and set(l) == {"═"}]
            _son = max(_cizgi)
            _sat = _sat[:_bas - 2] + _sat[_son + 1:]
        soru("D4 bayraklı çıktıdan döküm bloğu çıkarılınca bayraksız çıktının AYNISI",
             _bas is not None and "\n".join(_sat) == "\n".join(c_yeni.splitlines()),
             "döküm %d satır" % (len(c_dok.splitlines()) - len(_sat)))

        print("\n(a) GERÇEK KORPUS — döküm toplamları kuru koşuyla birebir")
        oz = ozet(c_yeni)
        dj = dokum_json(c_dok)
        soru("A0 makine okunur döküm (--json -) okundu", dj is not None)
        if dj is None:
            print(c_dok[-3000:])
            return
        ana = {k: v for k, v in oz.items() if k in dj["ad_kova"] or k in KOORDINATOR
               or k in ("kapsam-daraldi", "belirsiz", "cipa-yok", "mukerrer-anahtar",
                        "satir-paylasimli", "taninmadi")}
        soru("A1 ad-kovaları = bayraksız özet sayaçları (birebir)", dj["ad_kova"] == ana,
             " · ".join("%s %d" % kv for kv in sorted(dj["ad_kova"].items())))
        yama_kaydi = int(re.search(r"YAMA KAYDI: (\d+)", c_yeni).group(1))
        kayit_top = sum(s["kayit"] for s in dj["dosyalar"])
        soru("A2 dosya×kayıt toplamı = YAMA KAYDI", kayit_top == yama_kaydi,
             "%d / %d" % (kayit_top, yama_kaydi))
        soru("A3 ad toplamı = benzersiz ad", sum(dj["ad_kova"].values()) == dj["taban"]["benzersiz_ad"],
             "%d" % dj["taban"]["benzersiz_ad"])
        soru("A4 her dosyanın kovaları kayıt sayısına eşit",
             all(sum(s["kova"].values()) == s["kayit"] for s in dj["dosyalar"]))
        yanlis = [s["dosya"] for s in dj["dosyalar"] if s["hukum_sinif"] == "ARSIVLENEBILIR" and (
            set(s["kova"]) - {"zaten-boyle", "veride-yok"}
            or set(s["veride_yok_alt"]) - {"ad-degismis/icerik-inmis"})]
        soru("A5 ARŞİVLENEBİLİR dosyada engel kova YOK", not yanlis, ", ".join(yanlis))
        glob_say = len([f for f in os.listdir(os.path.join(W, "data"))
                        if re.match(r"^yer_yama.*\.js$", f)])
        soru("A6 glob'daki HER dosya dökümde (sessiz eleme yok)", len(dj["dosyalar"]) == glob_say,
             "%d / %d" % (len(dj["dosyalar"]), glob_say))
        print("     koordinatörün sayılarıyla fark (bilgi, sınav değil):")
        for k, v in KOORDINATOR.items():
            print("       %-14s koordinatör %4d · bugün %4d · fark %+d" % (
                k, v, dj["ad_kova"].get(k, 0), dj["ad_kova"].get(k, 0) - v))
        for k, v in sorted(dj["ad_kova"].items()):
            if k not in KOORDINATOR:
                print("       %-14s koordinatörde YOK · bugün %4d" % (k, v))
        print("     hüküm: " + " · ".join("%s %d" % kv for kv in sorted(dj["hukum_sayisi"].items())))

        # ── faz 2: uydurma dosya
        p = subprocess.run([sys.executable, "-c", SEC], cwd=W, capture_output=True)
        sec = json.loads(p.stdout.decode("utf-8")) if p.returncode == 0 else []
        if len(sec) < 4:
            soru("S0 uydurma kayıt için 4 aday bulundu", False, p.stderr.decode("utf-8", "replace")[:300])
            return
        z = [{"ad": a, "m": m} for a, m in sec[:3]]
        u = {"ad": sec[3][0], "m": sec[3][1] + " SINAV-1009"}
        print("\nuydurma kayıtlar: zaten-böyle %s · uygulandi %s (m: %r → %r)"
              % ([x["ad"] for x in z], u["ad"], sec[3][1], u["m"]))

        print("\n(c) hepsi zaten-böyle olan uydurma dosya ⇒ ARŞİVLENEBİLİR")
        sahte_yaz(W, z)
        k_c, c_c = kos(W, "_sahiplik_uygula.py", ("--dosya-dokumu", "--json", "-",
                                                   "--yama-glob", r"^yer_yama_zz_sinav_1009\.js$"))
        s_c = satir(dokum_json(c_c), SAHTE)
        soru("C1 dosya dökümde, 3 kayıt, 3'ü zaten-boyle",
             s_c is not None and s_c["kayit"] == 3 and s_c["kova"] == {"zaten-boyle": 3},
             json.dumps(s_c and s_c["kova"], ensure_ascii=False))
        soru("C2 hüküm ARŞİVLENEBİLİR", s_c is not None and s_c["hukum_sinif"] == "ARSIVLENEBILIR",
             s_c and s_c["hukum"])
        soru("C3 çıkış 0 (değişim yok, kapı temiz)", k_c == 0, "çıkış %d" % k_c)

        print("\n(b) aynı dosyaya bir `uygulandi` kaydı ⇒ ARŞİVLENEBİLİR işareti KAYBOLMALI"
              " (varsayılan glob, bütün korpus)")
        sahte_yaz(W, z + [u])
        k_b, c_b = kos(W, "_sahiplik_uygula.py", ("--dosya-dokumu", "--json", "-"))
        djb = dokum_json(c_b)
        s_b = satir(djb, SAHTE)
        soru("B1 dosya varsayılan glob'a girdi (dökümde)", s_b is not None)
        soru("B2 kovalar: zaten-boyle 3 · uygulandi 1",
             s_b is not None and s_b["kova"] == {"zaten-boyle": 3, "uygulandi": 1},
             json.dumps(s_b and s_b["kova"], ensure_ascii=False))
        soru("B3 ARŞİVLENEBİLİR DEĞİL — 'ARŞİVLENEMEZ: uygulandi 1'",
             s_b is not None and s_b["hukum_sinif"] == "ARSIVLENEMEZ"
             and s_b["hukum"].startswith("ARŞİVLENEMEZ: uygulandi 1"), s_b and s_b["hukum"])
        soru("B4 korpusun uygulandi sayısı tam 1 arttı",
             djb is not None and djb["ad_kova"].get("uygulandi", 0) == dj["ad_kova"].get("uygulandi", 0) + 1,
             "%s → %s" % (dj["ad_kova"].get("uygulandi"), djb and djb["ad_kova"].get("uygulandi")))
        soru("B5 öteki dosyaların hükmü DEĞİŞMEDİ", djb is not None and all(
            satir(djb, s["dosya"]) is not None and satir(djb, s["dosya"])["hukum"] == s["hukum"]
            for s in dj["dosyalar"]))
        soru("B6 kapı uydurma değişimi BAYAT saymadı (m: kapının alanı değil)",
             s_b is not None and s_b["kapi"].startswith("0/1"), s_b and s_b["kapi"])
        soru("B7 hiçbir veri dosyası değişmedi (git status data/ yalnız uydurma dosya)",
             git("status", "--porcelain", "--", "data/", cwd=W).decode().strip()
             == "?? data/" + SAHTE)
    finally:
        if TUT:
            print("worktree TUTULDU: %s" % W)
        else:
            git("worktree", "remove", "--force", W, kontrol=False)
            shutil.rmtree(W, ignore_errors=True)

    print()
    gec = sum(1 for _, g in sonuc if g)
    print("SONUÇ: %d/%d GEÇTİ" % (gec, len(sonuc)))
    raise SystemExit(0 if gec == len(sonuc) else 1)


if __name__ == "__main__":
    main()
