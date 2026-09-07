# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ⑥ AÇIK KALEM + ÇARE MALİYETİ.

① AÇIK KALEM (bir önceki turda "ÖLÇMEDİM" diye bildirilmişti):
   175 tek dönemli `kd:` kaydının penceresi UFUK ile aynı mı? Aynıysa
   `kd_oku`nun ZATEN türeteceği hâldir ve hiçbir bilgi taşımaz — ama
   `turetildi:True` damgası TAŞIMADIĞI için türetilmişten AYIRT EDİLEMEZ.

② ÇARE MALİYETİ: `kd:` ile çözmek kaç kayıt ve kaç DÖNEM yazmayı gerektirir?
   `CLAUDE.md §11`: *"bir çarenin maliyeti beklenen eksende olmayabilir"* —
   pahalı olan `kd:` alanı DEĞİL, her dönem için gereken TARİH ARAŞTIRMASI.
"""
import io
import json
import os
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

UFUK = ("1281-01-01", "1923-10-29")
Y = girdi.yukle(sessiz=True)

print("=" * 72)
print("① AÇIK KALEM — 175 tek dönemli kd: penceresi UFUK mu?")
print("=" * 72)
tek = [y for y in Y if y.get("kd") and len(y["kd"]) == 1]
ufuk_ayni, farkli, damga = 0, [], 0
for y in tek:
    p = y["kd"][0]
    if p.get("turetildi"):
        damga += 1
    if p.get("f") == UFUK[0] and p.get("t") == UFUK[1]:
        ufuk_ayni += 1
    else:
        farkli.append((y["ad"], p.get("f"), p.get("t"), p.get("m")))
print("  tek dönemli kd: kayıt          : %d" % len(tek))
print("  penceresi UFUK ile BİREBİR AYNI: %d   <- kd_oku'nun türeteceğinin AYNISI"
      % ufuk_ayni)
print("  penceresi FARKLI               : %d   <- bilgi TAŞIYOR" % len(farkli))
print("  `turetildi:True` damgası taşıyan: %d" % damga)
print("\n  🔴 Elle yazılmış tek dönemli kd:, türetilenden AYIRT EDİLEMİYOR:")
print("     kd_oku() türettiğine `turetildi:True` basıyor; veriye elle")
print("     yazılana kimse basmıyor. ⇒ 'bu kayıt araştırıldı mı' sorusu")
print("     veriden CEVAPLANAMIYOR. (`§11`: bilmediğini bilgi diye yazmak)")
for r in farkli[:12]:
    print("     %-24s %s..%s m:%s" % (r[0][:24], (r[1] or "?")[:10],
                                      (r[2] or "?")[:10], r[3]))

print("\n" + "=" * 72)
print("② ÇARE MALİYETİ — kd: ile çözmek ne kadar iş?")
print("=" * 72)
ham = json.load(open(os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-TAM-0907.json"),
                     encoding="utf-8"))["celiskiler"]
care = json.load(open(os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-CARE-0907.json"),
                      encoding="utf-8"))["kovalar"]

yer_aralik = {}
for r in ham:
    yer_aralik.setdefault(r["yerlesim"], []).append(r)
print("  düzeltilecek YERLEŞİM            : %d" % len(yer_aralik))
print("  yazılacak kd: DÖNEMİ (alt sınır) : %d" % (len(yer_aralik) + len(ham)))
print("    (her yerleşim için en az 1 taban dönem + her çelişki aralığı için 1)")
print("  ortalama aralık / yerleşim       : %.1f" % (len(ham) / len(yer_aralik)))

sik = sorted(yer_aralik.items(), key=lambda x: -len(x[1]))[:10]
print("\n  EN ÇOK BÖLÜNECEK 10 KAYIT:")
for ad, rs in sik:
    print("    %-26s %2d aralık  m:%s" % (ad[:26], len(rs), rs[0]["merkez"]))

print("\n  KOVA BAŞINA MALİYET:")
for ad, d in care.items():
    print("    %-52s %4d çift" % (ad, d["cift"]))
print("\n  🔴 PAHALI OLAN ALAN DEĞİL, ARAŞTIRMA: her kd: dönemi *o yerleşimin")
print("     o tarihte hangi idarî merkeze bağlı olduğu* iddiasıdır ve `§4`e")
print("     göre kaynak ister. 690 kayıt × ort. %.1f dönem = ~%d kaynaklı iddia."
      % (len(ham) / len(yer_aralik), len(yer_aralik) + len(ham)))

yol = os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-MALIYET-0907.json")
open(yol, "w", encoding="utf-8", newline="").write(json.dumps({
    "_NOT": "DEGISMEZ3-0907 ⑥ açık kalem + çare maliyeti.",
    "tek_donemli_kd": {"toplam": len(tek), "ufuk_ile_ayni": ufuk_ayni,
                       "farkli": len(farkli), "turetildi_damgali": damga,
                       "farkli_liste": [{"ad": r[0], "f": r[1], "t": r[2],
                                         "m": r[3]} for r in farkli]},
    "maliyet": {"yerlesim": len(yer_aralik),
                "kd_donemi_alt_sinir": len(yer_aralik) + len(ham),
                "ortalama_aralik": round(len(ham) / len(yer_aralik), 2)},
}, ensure_ascii=False, indent=1))
print("\n[YAZILDI] %s" % yol)
