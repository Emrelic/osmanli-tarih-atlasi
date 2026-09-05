# -*- coding: utf-8 -*-
"""SINAV — renk partisinin öngörü kalemlerini ölçer.

🔴🔴 ADI BAYAT: dosya adı «98» diyor, EVREN ARTIK **143**.
   Yeniden ADLANDIRILMADI çünkü koordinatörün akışlarında bu ada
   referans var. Ölçüt de değişti (2026-09-03 22:20):
       eski  «künyesi var, rengi yok»          → 175 kimlik
       yeni  «VERİDE KULLANILIYOR, rengi yok»  → 143 kimlik
   143, 175'in TAM ALT KÜMESİ (ölçüldü; yalnız 175'te olan 32 künye
   veride hiç kullanılmıyor ⇒ renksizlikleri harita deliği DEĞİL).
   ⚠️ Öngörü dosyası da değişti: artık `ONGORU-RENK-143-0903.json`.
      `ONGORU-RENK-98-0903.json` DURUYOR; ① ve ②'si «ÖLÇÜLEMEDİ»
      damgalı — evren değiştiği için aynı soru artık sorulamıyor.
   📌 Bayat bir ad, KAYDI OLMAYINCA yarın birini yanıltır (M-2644).

🔴 KOŞU BİTİP 98 KÜNYE `devletler.js`e İNDİKTEN SONRA koşulur.
   Öncesinde çalıştırılırsa "0 yeni künye" der ve DURUR — sessizce
   boş sonuç ÜRETMEZ (§11: sessiz atlama, yanlış sonuçtan pahalıdır).

YETKİ: `renk_olc.py --oner` renkleri YAZMAZ, `denetim/oneri-<damga>.txt`
artefaktı üretir (renk_olc.py:948). Yani bu betik `renkler.py`ye
DOKUNMAZ — motor parmak izi güvende.

AKIŞ (koordinatörle sözleşme, M-2504):
   ① koşu biter → künyeler iner (KOORDİNATÖR)
   ② çözücü BİRİNCİ geçiş        (BU BETİK)
   ③ birinci geçişin renkleri `renkler.py`ye yazılır (KOORDİNATÖR)
   ④ çözücü İKİNCİ geçiş + ölçüm (BU BETİK, --ikinci ile)

kullanım:
   py denetim/SINAV-RENK-98-0903.py 98            # birinci geçiş + ①②④⑤
   py denetim/SINAV-RENK-98-0903.py 98 --ikinci   # ③ (koordinatör yazdıktan sonra)

🔴 BEKLENEN SAYI ZORUNLU ARGÜMAN — ve niçin (ölçülmüş, 2026-09-03 15:16):
   İlk sürümü "renksiz künye varsa parti inmiştir" varsayıyordu.
   Koşturunca **26 renksiz künye** çıktı — 98'lik parti DEĞİL, mevcut
   renk borcu. Betik onları parti sanıp çözücüyü koşturdu ve istenmeyen
   bir artefakt üretti (`denetim/oneri-20260903-151614.txt`).
   ⇒ §11: "toplu bir işlemde BEKLENEN SAYI önceden yazılır ve sonunda
     DOĞRULANIR." Artık uyuşmazsa DURUYOR.
"""
import io, os, re, sys, itertools, subprocess, collections
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.join(os.getcwd(), "arac"))

IKINCI = "--ikinci" in sys.argv
_say = [a for a in sys.argv[1:] if a.isdigit()]
if not _say:
    raise SystemExit("kullanım: py denetim/SINAV-RENK-98-0903.py <beklenen_sayı> "
                     "[--ikinci]\n🔴 Beklenen sayı ZORUNLU — bkz. dosya başlığı.")
BEKLENEN = int(_say[0])

import girdi                                              # noqa
import renk_olc as R                                      # noqa
from renkler import BOYALAR                                # noqa

# ---------------------------------------------------------------- taban
D = girdi.oku_devletler()

# 🔴 ÖLÇÜT DÜZELTİLDİ — 2026-09-03 22:20, koordinatör sordu, ÖLÇTÜM.
#   İlk hâli «künyesi var, rengi yok» diyordu ⇒ 175 kimlik.
#   Koordinatörün partisi «VERİDE KULLANILIYOR, rengi yok» ⇒ 143.
#   Ölçüldü: 143, 175'in TAM ALT KÜMESİ (yalnız onda olan: 0).
#   Farkı oluşturan 32 künye VERİDE HİÇ KULLANILMIYOR — onlar
#   «sessiz borç», renksizlikleri HARİTA DELİĞİ DEĞİL.
#   ⇒ Doğru ölçüt koordinatörünki. `__BOSLUK__` de çıkarılır:
#     o bir BEYAN (§1.5), renk alırsa kasten boş bırakılan dilim BOYANIR.
#   📌 §11: «bir aletin evreni değişince alet değişmeden SESSİZCE yanılır.»
#     Burada sessizce yanılmadı — DURDU, ama sınav da koşmazdı.
_kul = set()
for _y in girdi.yukle(sessiz=True):
    for _kat in ("s", "d", "v", "isg"):
        for _p in (_y.get(_kat) or []):
            if _p.get("d"):
                _kul.add(_p["d"])
_ha = {k["id"]: (k.get("harita") or k["id"]) for k in D if k.get("id")}
yeni = sorted(a for a in _kul
              if a not in BOYALAR and _ha.get(a, a) not in BOYALAR
              and a != "__BOSLUK__")
print("künye: %d · BOYALAR: %d · veride KULLANILAN: %d · RENKSİZ (delik): %d"
      % (len(D), len(BOYALAR), len(_kul), len(yeni)))

# 🔴 ARTEFAKT MODU ÖNCE OKUNUR — 2026-09-03 22:22.
#   Eski sıra: kendi kümemi hesapla → BEKLENEN'e karşı sına → sonra
#   artefaktı oku. Sonuç: artefakt BAŞKA bir kümeyi taşıyorsa betik
#   KENDİ kümesine göre durur ve KOORDİNATÖRÜN ÇIKTISI HİÇ ÖLÇÜLMEZ.
#   ⇒ Artefakt verilmişse EVREN ODUR; benim ölçütüm devreye girmez.
#     §11: «doğru aleti yanlış evrenle koşturmak» — burada evreni
#     dayatmak yerine ARTEFAKTTAN devralıyorum.
ART = None
for _i, _a in enumerate(sys.argv):
    if _a == "--artefakt" and _i + 1 < len(sys.argv):
        ART = sys.argv[_i + 1]

cozulen = {}
if ART:
    if not os.path.exists(ART):
        print("🔴 artefakt YOK:", ART)
        raise SystemExit(2)
    for ln in io.open(ART, encoding="utf-8"):
        ln = ln.strip()
        if not ln or ln.startswith("//"):
            continue
        p = ln.split()
        if len(p) >= 2 and p[1].startswith("#"):
            cozulen[p[0]] = p[1].lower()
    if not cozulen:
        print("🔴 artefakttan HİÇBİR kimlik okunamadı:", ART)
        raise SystemExit(2)
    _kendi = set(yeni)
    yeni = sorted(cozulen)                     # EVREN = artefakt
    print("KURU MOD · artefakt: %s · kimlik: %d" % (ART, len(yeni)))
    _fark = _kendi ^ set(yeni)
    if _fark:
        print("  ⚠️ artefakt kümesi benim ölçütümden AYRI (%d fark) — "
              "artefakt kazanır." % len(_fark))
        print("     yalnız bende: %d · yalnız artefaktta: %d"
              % (len(_kendi - set(yeni)), len(set(yeni) - _kendi)))

if len(yeni) != BEKLENEN:
    print()
    print("🔴 BEKLENEN %d · BULUNAN %d — SINAV KOŞULMADI." % (BEKLENEN, len(yeni)))
    print("   Sebebi şunlardan biri olabilir ve betik AYIRT EDEMEZ:")
    print("     ① parti henüz inmedi")
    print("     ② bulunanlar BAŞKA bir kümenin borcu (2026-09-03'te 26 böyleydi)")
    print("     ③ ölçüt ayrışması (2026-09-03: benim 175 · koordinatör 143)")
    print("   Bulunanlar:", ", ".join(yeni[:30]))
    print("   ⇒ Çözücü KOŞTURULMADI (yanlış kümeye artefakt üretmemek için).")
    raise SystemExit(2)

bolge = {k["id"]: (k.get("bolge") or "—") for k in D if k.get("id")}
pen = {k["id"]: (k.get("f"), k.get("t")) for k in D if k.get("id")}
print("bölge dağılımı:", dict(collections.Counter(bolge.get(a) for a in yeni)))
print()

# ---------------------------------------------------------------- ⑤ TABAN
print("=" * 74)
print("⑤ TABAN — dört kimliğin ΔE'si DÜŞMEMELİ (CIE76, gorunen() zinciri)")
print("=" * 74)
TABAN = {
    ("sokoto", "kanem-bornu"): 68.96,
    ("asanti", "dahomey"):     71.94,
    ("sokoto", "asanti"):      60.19,
    ("kanem-bornu", "dahomey"): 70.53,
    ("sokoto", "dahomey"):     39.73,
}


def gor(k):
    return R.gorunen(k) if hasattr(R, "gorunen") else R.lab(R.bind(R.h2r(BOYALAR[k][1])))


bes_ok = True
for (a, b), t in TABAN.items():
    if a not in BOYALAR or b not in BOYALAR:
        print("  %-14s ↔ %-14s 🔴 BOYA EKSİK" % (a, b)); bes_ok = False; continue
    d = R.dE(gor(a), gor(b))
    fark = d - t
    im = ("🟢" if d >= 25 else "🔴 25 ALTINA DÜŞTÜ")
    if d < 25:
        bes_ok = False
    print("  %-14s ↔ %-14s  taban %6.2f → şimdi %6.2f  (%+.2f)  %s"
          % (a, b, t, d, fark, im))
print("  ⇒ KALEM ⑤:", "🟢 TUTTU" if bes_ok else "🔴 ÇÜRÜDÜ")

# ---------------------------------------------------------------- çözücü
print()
print("=" * 74)
print("%s GEÇİŞ — `renk_olc.py --oner` (renk YAZMAZ, artefakt üretir)"
      % ("İKİNCİ" if IKINCI else "BİRİNCİ"))
print("=" * 74)
# ⚠️ ARTEFAKT MODU YUKARIDA (satır ~78) okundu — evren oradan devralınıyor.
#   Burada İKİNCİ KEZ okunuyordu ve `cozulen`i SIFIRLIYORDU; kaldırıldı.
#   (Aynı kusur bu betikte bugün İKİNCİ kez çıktı — ilki 2026-09-03 15:2x.)
if ART:
    print("(kuru mod — çözücü koşturulmuyor, artefakt yukarıda okundu)")
else:
    onceki = set(os.listdir("denetim"))
    r = subprocess.run(["py", "arac/renk_olc.py", "--oner", ",".join(yeni)],
                       capture_output=True, text=True, encoding="utf-8",
                       errors="replace")
    print("çıkış kodu:", r.returncode)
    cik = r.stdout or ""
    io.open("_sinav_oner_%s.txt" % ("2" if IKINCI else "1"), "w",
            encoding="utf-8").write(cik + "\n--- STDERR ---\n" + (r.stderr or ""))
    yeni_dosya = sorted(set(os.listdir("denetim")) - onceki)
    print("artefakt:", yeni_dosya or "🔴 ÜRETİLMEDİ")
    for ln in cik.splitlines():
        m = re.match(r"\s*([a-z0-9\-]+)\s+(#[0-9a-f]{6})", ln)
        if m:
            cozulen[m.group(1)] = m.group(2)

# ---------------------------------------------------------------- ①② ölçüm
print()
print("=" * 74)
print("① EŞİK ALTI ÇİFT SAYISI  ②  BÖLGE DAĞILIMI")
print("=" * 74)
# ⚠️ `cozulen` YUKARIDA dolduruldu (kuru mod ya da çözücü koşusu).
#   Burada İKİNCİ KEZ ayrıştırma vardı ve kuru modun sonucunu SIFIRLIYORDU
#   — kaldırıldı (2026-09-03, düzenleme sırasında yakalandı).
cozulemeyen = [a for a in yeni if a not in cozulen]
print("  istenen: %d · çözülen: %d · ÇÖZÜLEMEYEN: %d"
      % (len(yeni), len(cozulen), len(cozulemeyen)))

# 🔴 KÖR NOKTA KAPATILDI (2026-09-03 15:20, kendi koşumda bulundu):
#   "çözüldü" ≠ "AYRIŞIYOR". 26 künyelik denemede çözücü 26/26 çözdü
#   (çıkış 0, artefakt üretti) ama ürettiği renklerin 129 çifti ΔE<12'ydi
#   (en yakınlar 1,86 — pratikte aynı renk). Sebep: veride noktası olmayan
#   künyenin Voronoi komşusu YOK ⇒ birbirlerinin engeli olmuyor
#   (renk_olc.py:909-912). Kalem ① ÇİFT sayar, kimlik DEĞİL.
esik_alti, sinirda = [], []
for a, b in itertools.combinations(sorted(cozulen), 2):
    d = R.dE(R.lab(R.bind(R.h2r(cozulen[a]))), R.lab(R.bind(R.h2r(cozulen[b]))))
    fa, ta = pen.get(a, (None, None))
    fb, tb = pen.get(b, (None, None))
    ort = bool(fa and ta and fb and tb and fa < tb and fb < ta)
    if d < 12:
        esik_alti.append((d, a, b, ort))
    elif d < 25:
        sinirda.append((d, a, b, ort))
esik_alti.sort()
ort_alti = [x for x in esik_alti if x[3]]
print()
print("  🔴 ÖNERİLENLERİN KENDİ ARASINDA:")
print("     toplam çift %d · ΔE<12: %d · 12-25: %d"
      % (len(cozulen) * (len(cozulen) - 1) // 2, len(esik_alti), len(sinirda)))
print("     eşik altı VE künye pencereleri örtüşen: %d  ← gerçek ihlal adayı"
      % len(ort_alti))
if esik_alti:
    print("     en yakın 5:")
    for d, a, b, o in esik_alti[:5]:
        print("       %-24s ↔ %-24s %6.2f  %s"
              % (a, b, d, "🔴 örtüşüyor" if o else "örtüşmüyor"))

print()
print("  ⇒ KALEM ① (ΔE<12 ÇİFT sayısı, bant 5-20): %d" % len(esik_alti),
      "🟢 TUTTU" if 5 <= len(esik_alti) <= 20 else "🔴 ÇÜRÜDÜ — bant dışı")
if cozulemeyen:
    print("     (ayrıca %d kimlik hiç çözülemedi)" % len(cozulemeyen))

# ② KALEM: "çözülemeyenlerin ÇOĞUNLUĞU bati-afrika'da" — evren, ①'in
#   saydığı ÇİFTLERdir (eşik altı) ARTI hiç çözülemeyen kimlikler.
#   Bir çift iki bölgeye ait olabilir; ikisi de sayılır ve bu YAZILIR.
kusurlu = collections.Counter()
for _d, a, b, _o in esik_alti:
    kusurlu[bolge.get(a, "—")] += 1
    if bolge.get(b) != bolge.get(a):
        kusurlu[bolge.get(b, "—")] += 1
for a in cozulemeyen:
    kusurlu[bolge.get(a, "—")] += 1

if kusurlu:
    print("  kusurlu çiftlerin/kimliklerin bölgesi:", dict(kusurlu.most_common()))
    print("  ⚠️ bir çift İKİ bölgeye aitse İKİSİ de sayıldı ⇒ toplam,")
    print("     çift sayısından BÜYÜK olabilir (sütunlar toplanamaz).")
    en = kusurlu.most_common(1)[0]
    top = sum(kusurlu.values())
    print("  ⇒ KALEM ② (çoğunluk bati-afrika):",
          "🟢 TUTTU" if en[0] == "bati-afrika" and en[1] > top / 2
          else "🔴 ÇÜRÜDÜ — en çok %s (%d/%d)" % (en[0], en[1], top))
else:
    print("  ⇒ KALEM ②: ÖLÇÜLEMEDİ — kusurlu çift YOK, gruplanacak şey yok")
    print("     (⚠️ 'ölçülemedi', 'çürüdü' DEĞİL — §11 üç damga)")

# ---------------------------------------------------------------- ④ nöbetçi
print()
print("=" * 74)
print("④ MEVCUT ÇİFT BOZULDU MU — `arac/renk_fark.py`")
print("=" * 74)
# 🔴 KÖR NOKTA 3 (2026-09-03 15:30, kendi koşumda bulundu):
#   Kalem ④ "beklenen 0" diyor. Ama TABAN ZATEN KİRLİ — ben hiç renk
#   yazmadan `renk_fark.py` çıkış 1 veriyor:
#       2 yakın-çift regresyonu (bizans↔karaman 13,6→11,0 ·
#                                inancogullari↔sovalye 12,7→11,8)
#       2 doğan kusur · 20 zincir kusuru
#   ⇒ Mutlak sayıyla ölçen bir sınav OTOMATİK ÇÜRÜR ve partiyi haksız
#     yere suçlar. Ölçü FARK olmalı. (§11 · NOKTA EKLEME'nin dersi:
#     "zemin zaten kırmızıysa 'temiz' bu partinin kabul ölçütü OLAMAZ".)
TABAN_YOL = "denetim/TABAN-RENKFARK-0903-PRUSYA.txt"


def _rakamlar(metin):
    m = re.search(r"(\d+) doğan kusur · (\d+) düşen çift · "
                  r"(\d+) zincir kusuru · (\d+) yakın-çift regresyonu", metin)
    return tuple(int(x) for x in m.groups()) if m else None


if os.path.exists("arac/renk_fark.py"):
    rf = subprocess.run(["py", "arac/renk_fark.py"], capture_output=True,
                        text=True, encoding="utf-8", errors="replace")
    simdi = _rakamlar(rf.stdout or "")
    taban = _rakamlar(io.open(TABAN_YOL, encoding="utf-8").read()) \
        if os.path.exists(TABAN_YOL) else None
    ad = ("doğan kusur", "düşen çift", "zincir kusuru", "yakın-çift regr.")
    if simdi is None:
        print("  🔴 renk_fark.py çıktısı AYRIŞTIRILAMADI → KALEM ④ ÖLÇÜLEMEDİ")
        print("     (biçim değişmiş olabilir — 'çürüdü' DEĞİL)")
    elif taban is None:
        print("  🔴 TABAN DOSYASI YOK (%s) → KALEM ④ ÖLÇÜLEMEDİ" % TABAN_YOL)
        print("     şimdiki:", dict(zip(ad, simdi)))
    else:
        print("  %-18s %8s %8s %8s" % ("", "TABAN", "ŞİMDİ", "FARK"))
        kotu = False
        for i, a in enumerate(ad):
            f = simdi[i] - taban[i]
            if f > 0:
                kotu = True
            print("  %-18s %8d %8d %+8d %s"
                  % (a, taban[i], simdi[i], f, "🔴" if f > 0 else "🟢"))
        print("  ⇒ KALEM ④ (parti HİÇBİR SAYIYI ARTIRMAMALI):",
              "🔴 ÇÜRÜDÜ" if kotu else "🟢 TUTTU")
        print("     ⚠️ Ölçü FARK'tır, mutlak sayı değil — taban 2026-09-03")
        print("        15:30'da alındı ve zaten kirliydi (çıkış 1).")
else:
    print("  🔴 arac/renk_fark.py YOK → KALEM ④ ÖLÇÜLEMEDİ")

print()
print("=" * 74)
print("🔴 KALEM ③ (ikinci geçiş) — bu betiğin TEK BAŞINA ölçemeyeceği kalem")
print("=" * 74)
print("""  İkinci geçiş ancak BİRİNCİ geçişin renkleri `renkler.py`ye
  YAZILDIKTAN sonra anlamlıdır (`renkler.py` koordinatörün dosyası ve
  motor parmak izinde). Yazılmazsa kalem ③ `ÖLÇÜLEMEDİ` damgasıyla
  kapanır — `çürüdü` DEĞİL. Sözleşme: M-2504.
  Yazıldıktan sonra:  py denetim/SINAV-RENK-98-0903.py --ikinci""")
