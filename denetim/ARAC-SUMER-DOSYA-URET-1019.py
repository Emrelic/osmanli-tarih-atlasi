# -*- coding: utf-8 -*-
"""NOKTA-SUMER-1010 ve -B10 diff'lerinin EKLENEN nokta bloklarini (21 nokta) yeni
data/yerlesimler_mo_sumer.js dosyasina cikarir. Diff'ler eski bir tabana yazilmisti ve main'e
UYGULANMIYOR; ayrica ilk diff Hadramut `kaynak:` satirini degistiriyordu — o satir ALINMAZ
(yalniz Sumer bloklari). Nokta metinleri BIREBIR kopyalanir (kaynak/neden alanlari dahil)."""
import re, sys

BAS = "// ── Sümer kutusu"


def blok(yol):
    satir = open(yol, encoding="utf-8").read().split("\n")
    out, ic = [], False
    for s in satir:
        if s.startswith("+++") or s.startswith("---"):
            continue
        if s.startswith("+") and s[1:].startswith(BAS):
            ic = True
        if ic:
            if s.startswith("+"):
                out.append(s[1:])
            elif s.startswith(" ") and out and not re.match(r"^\s*//", s[1:]):
                break
            elif s.startswith("-"):
                continue
    while out and not out[-1].strip():
        out.pop()
    if out and out[-1].rstrip().endswith("}"):       # diff'te son nokta virgülsüzdü (ardından `];` geliyordu)
        out[-1] = out[-1].rstrip() + ","
    return out


a = blok("denetim/NOKTA-SUMER-1010.diff")
b = blok("denetim/NOKTA-SUMER-1010-B10.diff")
n_a = sum(1 for x in a if x.startswith("{ ad:"))
n_b = sum(1 for x in b if x.startswith("{ ad:"))
print("blok A %d nokta, blok B10 %d nokta" % (n_a, n_b))
if (n_a, n_b) != (12, 9):
    sys.exit("beklenen 12+9 nokta degil")

baslik = '''// ============================================================================
// yerlesimler_mo_sumer.js — Sümer kutusu (29,5-33,5°K · 44-48,5°D), 21 nokta
// Kaynak: NOKTA-SUMER-1010 (12 nokta) + NOKTA-SUMER-1010-B10 (9 mevcut aday) — 10 Ekim 2026,
// denetim/NOKTA-SUMER-1010.md · girdi denetim/KASA-SUMER-NOKTA-1010.md, KASA-SUMER-KUR-1010.md.
// 19 Ekim 2026: diff'ler eski tabana yazılıydı (uygulanmıyordu); nokta blokları bu AYRI dosyaya
// birebir taşındı (denetim/ARAC-SUMER-DOSYA-URET-1019.py). Hiçbirinde s:/d: YOK — sahiplik yazılmadı,
// yalnız varlık uçları (kur:/bit:, NEGATİF astronomik yıl: MÖ 3000 = -2999). Pleiades + TGN tanıklı.
// ============================================================================
window.YERLESIMLER_MO_SUMER = [

'''
govde = "\n".join(a) + "\n\n" + "\n".join(b).replace(BAS, "// ── Sümer kutusu", 1)
open("data/yerlesimler_mo_sumer.js", "w", encoding="utf-8", newline="\n").write(baslik + govde + "\n\n];\n")
print("yazildi")
