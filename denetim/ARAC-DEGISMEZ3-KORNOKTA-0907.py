# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ①b — KÖR NOKTA ve kd: DAĞILIMI.

İki soru:
  ① `m:` dolu ama merkez atlasta YOK olan 4 kayıt — hangileri, ve merkez
     adı bir YAZIM VARYANTI mı? (`CLAUDE.md §4` Türkçe yazım ekseni:
     `usku` != `Üsküp`; ve `ARAC-NORMAL-0903.py` normalleştiricisi)
  ② gerçek `kd:` taşıyan 192 kayıt — hangi dosyalarda, ve DÖNEMLERİ
     gerçekten çok mu (zaman derinliği VAR mı), yoksa tek dönemlik mi?
     🔴 Tek dönemlikse `kd:` yazılmış ama BİLGİ getirmemiştir —
        `girdi.kd_oku` docstring'i tam bunu uyarıyor (`turetildi`).
"""
import io
import json
import os
import sys
import unicodedata

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

Y = girdi.yukle(sessiz=True)
ix = {y["ad"]: y for y in Y}

# --- ortak normalleştirici (ARAC-NORMAL-0903.py deseni) ------------------
_TR = {ord("İ"): "i", ord("I"): "i", ord("ı"): "i", ord("Ş"): "s", ord("ş"): "s",
       ord("Ğ"): "g", ord("ğ"): "g", ord("Ü"): "u", ord("ü"): "u",
       ord("Ö"): "o", ord("ö"): "o", ord("Ç"): "c", ord("ç"): "c",
       ord("Â"): "a", ord("â"): "a", ord("Î"): "i", ord("î"): "i",
       ord("Û"): "u", ord("û"): "u", ord("’"): "'", ord("‘"): "'"}


def norm(s):
    s = (s or "").translate(_TR)
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    return s.lower().strip()


nix = {}
for y in Y:
    nix.setdefault(norm(y["ad"]), []).append(y["ad"])

print("=" * 72)
print("① KÖR NOKTA — m: dolu, merkez atlasta YOK")
print("=" * 72)
kor = [y for y in Y if y.get("m") and y["m"] not in ix]
rapor_kor = []
for y in sorted(kor, key=lambda z: z["ad"]):
    m = y["m"]
    aday = nix.get(norm(m), [])
    tani = "VARYANT -> %s" % ", ".join(aday) if aday else "GERÇEKTEN YOK"
    print("  %-28s m:%-14s  %s" % (y["ad"], m, tani))
    rapor_kor.append({"yerlesim": y["ad"], "m": m, "normal_aday": aday,
                      "tani": "yazim_varyanti" if aday else "atlasta_yok"})

print("\n  ⇒ VARYANT olanlar: degismez3 onları ÖLÇMÜYOR — 'çelişki yok'")
print("    değil, 'BAKILMADI'. Ad düzeltilirse ölçüme GİRERLER.")

print("\n" + "=" * 72)
print("② GERÇEK kd: — 192 kayıt, ZAMAN DERİNLİĞİ VAR MI?")
print("=" * 72)
kd_var = [y for y in Y if y.get("kd")]
donem_dagilim, dosya_dagilim = {}, {}
cok_donemli = []
for y in kd_var:
    n = len(y["kd"])
    donem_dagilim[n] = donem_dagilim.get(n, 0) + 1
    dosya_dagilim[y.get("_kaynak", "?")] = dosya_dagilim.get(y.get("_kaynak", "?"), 0) + 1
    if n > 1:
        cok_donemli.append(y)
print("  kd: taşıyan            : %d" % len(kd_var))
print("  DÖNEM SAYISI DAĞILIMI  :")
for n in sorted(donem_dagilim):
    etiket = "  <- TEK dönem: zaman derinliği YOK" if n == 1 else ""
    print("    %d dönem : %4d kayıt%s" % (n, donem_dagilim[n], etiket))
print("  ÇOK dönemli (gerçek zaman derinliği) : %d" % len(cok_donemli))
print("\n  DOSYA DAĞILIMI:")
for f, n in sorted(dosya_dagilim.items(), key=lambda x: -x[1]):
    print("    %-38s %4d" % (f, n))

# kd: içinde m: değişiyor mu — asıl soru bu
m_degisen = [y for y in cok_donemli
             if len(set(p.get("m") for p in y["kd"])) > 1]
k_degisen = [y for y in cok_donemli
             if len(set(p.get("k") for p in y["kd"])) > 1]
print("\n  çok dönemlilerin içinde m: DEĞİŞEN : %d" % len(m_degisen))
print("  çok dönemlilerin içinde k: DEĞİŞEN : %d" % len(k_degisen))
print("  ⇒ `Değişmez 3`ü çözen şey m:'nin zamanla değişmesidir;")
print("    yalnız k: değişiyorsa borç ÖDENMEMİŞTİR.")
for y in m_degisen[:10]:
    print("    %-24s %s" % (y["ad"], " | ".join(
        "%s..%s m:%s" % (p.get("f", "?")[:4], p.get("t", "?")[:4], p.get("m"))
        for p in y["kd"])))

yol = os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-KORNOKTA-0907.json")
open(yol, "w", encoding="utf-8", newline="").write(json.dumps({
    "_NOT": "DEGISMEZ3-0907 ①b — kör nokta ve kd: derinliği.",
    "kor_nokta": rapor_kor,
    "kd": {"toplam": len(kd_var), "donem_dagilimi": donem_dagilim,
           "cok_donemli": len(cok_donemli), "m_degisen": len(m_degisen),
           "k_degisen": len(k_degisen), "dosya": dosya_dagilim,
           "m_degisen_adlar": [y["ad"] for y in m_degisen]},
}, ensure_ascii=False, indent=1))
print("\n[YAZILDI] %s" % yol)
