# -*- coding: utf-8 -*-
r"""Iki onayli teslimi uygular: 9 RUSYA gun-dusurme + 13 ATIF duzeltmesi.

Emre onayi, 1 Ekim 2026. Her ikisi de YAZICI-KASA'nin olcumu, ve ikisi de
UYGULANMADAN once ayrica olculdu:
  · 9 gun-dusurme  → `denetim/RUSYA-GUN-DUSUR-OLCUM-1001.md`
    15 kalemin 6'si DISARIDA BIRAKILDI: maddenin kendi yerlesimi o tarihte
    kiriliyor (Tambov · Turkistan · Cimkent'te fark SIFIR GUN), gun dusurmek
    `CLAUDE.md §1`in cekirdek amacini bozar (madde 1636-01-01 der, harita
    1636-04-17'de degisir). Onlara gun KORUNUR + `ic_not_t` beyani yazilir;
    o ayri bir kalem.
  · 13 atif      → KASA gerekceyi ve "nerede birebir var"i her kalemde yazdi;
    ESKI_parca kaynakta, YENI metin TDV'de assert ile sinandi (onun tarafinda).

🔴 UYGULAMA BICIMI — `ARAC-ODAK-UYGULA-1001.py`nin ogrendigi ders burada da
   gecerli (`D240`): proje UC AYRI kayit bicimi tasiyor
       `{ t:"…", b:"…" }`   tek satir
       `{ t:"…",` / `b:"…"` cok satir
       `{"t":"…","b":"…"}`  JSON tirnakli
   ⇒ alan arama deseni `"?<ad>"?\s*:\s*` olmali, ve kayit SATIR degil BLOK
     olarak bulunmali. Satir varsayimi 33 kalemin 27'sini SESSIZCE atlamisti.

KULLANIM:  py denetim/ARAC-RUSYA-ATIF-UYGULA-1001.py [--yaz]
"""
import io
import json
import os
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8")
os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
KURU = "--yaz" not in sys.argv

# 🔴 Gun dusurulmeyecekler — `RUSYA-GUN-DUSUR-OLCUM-1001.md` olcumu
HARIC = {31: "tambov 1636-04-17 kirilmasi — fark 0 GUN",
         80: "turkistan 1864-06-12 kirilmasi — fark 0 GUN",
         81: "cimkent 1864-09-22 kirilmasi — fark 0 GUN",
         16: "bryansk 1500-08-01 kirilmasi — fark 18 gun",
         41: "nijneudinsk 1648-10-01 kirilmasi — fark 13 gun",
         65: "celyabinsk 1736-09-02 kirilmasi — fark 11 gun"}


def alan_deseni(ad):
    return re.compile(r'("?%s"?\s*:\s*)"((?:[^"\\]|\\.)*)"' % re.escape(ad))


def kayit_bul(s, t, bp):
    """(b eslesmesi, kayit bitisi) — t degeri VE b onekiyle TEK kayit."""
    T = re.compile(r'"?t"?\s*:\s*"%s"' % re.escape(t))
    B = alan_deseni("b")
    hedef = []
    for mt in T.finditer(s):
        mb = B.search(s, mt.end(), mt.end() + 3000)
        if mb and mb.group(2).startswith(bp):
            hedef.append((mt, mb))
    return hedef


def kayit_sonu(s, bas):
    """Kaydin kapanis `}`si — tirnak icindeki `}` SAYILMAZ."""
    i, tirnak, kacis = bas, False, False
    while i < len(s):
        c = s[i]
        if kacis:
            kacis = False
        elif c == "\\":
            kacis = True
        elif c == '"':
            tirnak = not tirnak
        elif c == "}" and not tirnak:
            return i
        i += 1
    return len(s)


print("### KURU KOŞU ###" if KURU else "### YAZIYOR ###")
degisen = {}

# ─── ① RUSYA 9 GÜN-DÜŞÜRME ──────────────────────────────────────────────────
R = json.loads(io.open("denetim/YZ-KIRLENME-1001-RUSYA-ONERI.json",
                       encoding="utf-8").read())
G = [x for x in R["kalemler"] if x.get("islem") == "gun-dusur"]
uygula = [x for x in G if x["madde"] not in HARIC]
print("\n① RUSYA GÜN-DÜŞÜRME — %d kalemin %d'i uygulanacak, %d HARİÇ"
      % (len(G), len(uygula), len(HARIC)))

yol = "data/kronoloji_cok_rusya.js"
s = io.open(yol, encoding="utf-8", newline="").read()
n1 = 0
for x in uygula:
    e, y = x["ESKI"], x["YENI"]
    h = kayit_bul(s, e["t"], x["b"][:28])
    if len(h) != 1:
        print("  🔴 #%s — %d kayıt eşleşti (1 bekleniyordu), ATLANDI" % (x["madde"], len(h)))
        continue
    mt, mb = h[0]
    son = kayit_sonu(s, mb.end())
    govde = s[mt.start():son]
    yeni = govde
    # t ve gun alanlarini DEGISTIR
    for ad, deg in (("t", y["t"]), ("gun", y["gun"])):
        d = alan_deseni(ad)
        m = d.search(yeni)
        if not m:
            print("  🔴 #%s — `%s` alanı bulunamadı, ATLANDI" % (x["madde"], ad))
            yeni = None
            break
        yeni = yeni[:m.start()] + m.group(1) + json.dumps(deg, ensure_ascii=False) + yeni[m.end():]
    if yeni is None:
        continue
    # ic_not_t EKLE (yoksa) — gun alanindan hemen sonra
    if not re.search(r'"?ic_not_t"?\s*:', yeni):
        m = alan_deseni("gun").search(yeni)
        yeni = (yeni[:m.end()] + ', ic_not_t:' + json.dumps(y["ic_not_t"], ensure_ascii=False)
                + yeni[m.end():])
    s = s[:mt.start()] + yeni + s[son:]
    n1 += 1
print("  uygulanan: %d" % n1)
print("  HARİÇ TUTULANLAR (gün KORUNUYOR, ayrı kalem olarak beyan yazılacak):")
for md, niye in sorted(HARIC.items()):
    print("     #%-4s %s" % (md, niye))
if n1:
    degisen[yol] = s

# ─── ② 13 ATIF DÜZELTMESİ ───────────────────────────────────────────────────
A = json.loads(io.open("denetim/YZ-KIRLENME-1001-ATIF-DUZELTME.json",
                       encoding="utf-8").read())["kalemler"]
print("\n② ATIF DÜZELTMESİ — %d kalem" % len(A))
n2, atlanan = 0, []
for x in A:
    yol2 = x["dosya"].replace("data/", "")
    tam = os.path.join("data", yol2)
    cur = degisen.get("data/" + yol2) or io.open(tam, encoding="utf-8", newline="").read()
    # 🔴 IKI ALAN BICIMI (D240, bu dosyanin KENDI icinde):
    #   10 kalem  `ESKI_parca`/`YENI_parca` — alanin bir PARCASI
    #    3 kalem  `ESKI`/`YENI`             — alanin TAMAMI
    #   Son uc kalem (#53 · #120 · #139) KASA'nin devir yazarken bulduklaridir
    #   ve oteki bicimle yazilmis. `_parca` varsayimi onlari KeyError ile
    #   dusurdu — iyi; sessizce atlasaydi 3 gercek kusur yasardi.
    eski = x.get("ESKI_parca", x.get("ESKI"))
    yeni_p = x.get("YENI_parca", x.get("YENI"))
    if not isinstance(eski, str) or not isinstance(yeni_p, str):
        atlanan.append((x["madde"], yol2, "ESKI/YENI dizgi DEĞİL"))
        continue
    # 🔴 JS kaynagindaki metin KACISLI olabilir (\" ve \\); ham ve JSON-kacisli
    #    iki bicimi de dene — biri tutmazsa oteki tutar.
    adaylar = [eski, json.dumps(eski, ensure_ascii=False)[1:-1]]
    tuttu = None
    for a in adaylar:
        if cur.count(a) == 1:
            tuttu = a
            break
    if tuttu is None:
        say = [cur.count(a) for a in adaylar]
        atlanan.append((x["madde"], yol2, str(say)))
        continue
    i = adaylar.index(tuttu)
    yerine = [yeni_p, json.dumps(yeni_p, ensure_ascii=False)[1:-1]][i]
    degisen["data/" + yol2] = cur.replace(tuttu, yerine, 1)
    n2 += 1
print("  uygulanan: %d" % n2)
for md, f, say in atlanan:
    print("  🔴 #%-4s %-40s eşleşme %s (1 bekleniyordu) — ATLANDI" % (md, f, say))

# ─── YAZ + node --check ─────────────────────────────────────────────────────
print("\nDEĞİŞEN DOSYA: %d" % len(degisen))
if KURU:
    for f in sorted(degisen):
        print("   %s" % f)
    print("\n=> uygulamak için --yaz")
    sys.exit(0)

for f, metin in sorted(degisen.items()):
    io.open(f, "w", encoding="utf-8", newline="").write(metin)
    r = subprocess.run(["node", "--check", f], capture_output=True, text=True)
    if r.returncode != 0:
        print("  🔴 node --check BAŞARISIZ: %s" % f)
        print(r.stderr[:500])
        sys.exit(1)
    print("   ✓ %s  (node --check temiz)" % f)
print("\n✓ YAZILDI — rusya %d · atıf %d" % (n1, n2))
