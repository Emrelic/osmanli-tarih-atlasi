# -*- coding: utf-8 -*-
r"""HARIC tutulan 6 rusya maddesine `ic_not_t` BEYANI yazar — gun DEGISMEZ.

🔴 NICIN: bu alti maddenin gunu kaynakta DOGRULANAMADI (BRE/mil.ru 403), ama
   gun DUSURULMEDI cunku atlasin kendi yerlesim kaydi AYNI gunu tasiyor
   (`denetim/RUSYA-GUN-DUSUR-OLCUM-1001.md`):
       #31 Tambov    1636-04-17 ↔ yerlesim 1636-04-17   fark 0 GUN
       #80 Turkistan 1864-06-12 ↔ yerlesim 1864-06-12   fark 0 GUN
       #81 Cimkent   1864-09-22 ↔ yerlesim 1864-09-22   fark 0 GUN
       #16 bryansk 18 gun · #41 nijneudinsk 13 · #65 celyabinsk 11
   Gun dusurmek `CLAUDE.md §1`in cekirdek amacini bozardi: madde
   1636-01-01 der, harita 1636-04-17'de degisir ⇒ ikisi birbirini DOGRULAMAZ.

🔴 AMA GUNU OLDUGU GIBI BIRAKMAK DA EKSIK: `§4` sahte kesinligi yasaklar ve
   "kaynak gizlenmez" der. Gun duruyor ama DAYANAGI duruyormus gibi gorunuyor.
   ⇒ Care ucuncu yol: gun KORUNUR, DAYANAKSIZLIGI BEYAN EDILIR.
     Boylece `§4`un yasagi ile `§1`in senkron sarti BEYAN EDEREK uzlasir —
     gun uydurarak ya da dogru bir gunu atarak degil.

⚠️ BU ARAC GUNU DEGISTIRMEZ. Yalnizca `ic_not_t` alani ekler/gunceller.
   Sinav: calistiktan sonra alti `t:` degeri AYNEN durmalidir.

KULLANIM:  py denetim/ARAC-RUSYA-BEYAN-1001.py [--yaz]
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
YOL = "data/kronoloji_cok_rusya.js"

# madde no -> (atlastaki kirilma, fark gun)
HARIC = {
    31: ("Tambov", "1636-04-17", 0),
    80: ("Türkistan", "1864-06-12", 0),
    81: ("Çimkent", "1864-09-22", 0),
    16: ("Bryansk", "1500-08-01", 18),
    41: ("Nijneudinsk", "1648-10-01", 13),
    65: ("Çelyabinsk", "1736-09-02", 11),
}

BEYAN = ("gün kaynakta DOĞRULANAMADI (BRE/mil.ru 401-403; arama özetinden "
         "okunmuştu). GÜN YİNE DE KORUNUYOR: atlasın kendi yerleşim kaydı "
         "'%s' %s tarihinde kırılıyor (fark %d gün) — gün düşürmek kronoloji "
         "ile haritayı çelişkiye düşürürdü (CLAUDE.md §1). Ölçüm: "
         "denetim/RUSYA-GUN-DUSUR-OLCUM-1001.md · 1 Ekim 2026. "
         "🔴 YENİDEN KAYNAKLANMALI — bu gün bir ATLAS kaydına yaslanıyor, "
         "atlas ise referans DEĞİLDİR (§4).")


def alan_deseni(ad):
    return re.compile(r'("?%s"?\s*:\s*)"((?:[^"\\]|\\.)*)"' % re.escape(ad))


def kayit_sonu(s, bas):
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


R = json.loads(io.open("denetim/YZ-KIRLENME-1001-RUSYA-ONERI.json",
                       encoding="utf-8").read())
G = {x["madde"]: x for x in R["kalemler"] if x.get("islem") == "gun-dusur"}

s = io.open(YOL, encoding="utf-8", newline="").read()
once = {md: len(re.findall(r'"?t"?\s*:\s*"%s"' % re.escape(G[md]["ESKI"]["t"]), s))
        for md in HARIC}

print("### KURU KOŞU ###" if KURU else "### YAZIYOR ###")
n = 0
for md in sorted(HARIC):
    x = G[md]
    t = x["ESKI"]["t"]
    ad, kir, fark = HARIC[md]
    T = re.compile(r'"?t"?\s*:\s*"%s"' % re.escape(t))
    B = alan_deseni("b")
    hedef = []
    for mt in T.finditer(s):
        mb = B.search(s, mt.end(), mt.end() + 3000)
        if mb and mb.group(2).startswith(x["b"][:28]):
            hedef.append((mt, mb))
    if len(hedef) != 1:
        print("  🔴 #%-4s %d kayıt eşleşti (1 bekleniyordu), ATLANDI" % (md, len(hedef)))
        continue
    mt, mb = hedef[0]
    son = kayit_sonu(s, mb.end())
    govde = s[mt.start():son]
    metin = BEYAN % (ad, kir, fark)
    mi = alan_deseni("ic_not_t").search(govde)
    if mi:
        yeni = govde[:mi.start()] + mi.group(1) + json.dumps(metin, ensure_ascii=False) + govde[mi.end():]
    else:
        mg = alan_deseni("gun").search(govde) or mb
        k = mg.end() if mg is not mb else mb.end()
        yeni = govde[:k] + ", ic_not_t:" + json.dumps(metin, ensure_ascii=False) + govde[k:]
    s = s[:mt.start()] + yeni + s[son:]
    n += 1
    print("  #%-4s %s  %-44s ⮡ beyan yazıldı (%s %s, fark %d gün)"
          % (md, t, x["b"][:44], ad, kir, fark))

# 🔴 SINAV: gun DEGISMEMIS olmali
print("\n  --- SINAV: `t` değerleri AYNEN duruyor mu ---")
tamam = True
for md in sorted(HARIC):
    t = G[md]["ESKI"]["t"]
    simdi = len(re.findall(r'"?t"?\s*:\s*"%s"' % re.escape(t), s))
    ok = simdi == once[md] and simdi > 0
    tamam = tamam and ok
    print("     #%-4s %s  önce %d → sonra %d  %s" % (md, t, once[md], simdi,
                                                     "✓" if ok else "🔴 DEĞİŞMİŞ"))
if not tamam:
    print("\n🔴 SINAV BAŞARISIZ — YAZILMADI")
    sys.exit(1)

print("\n  beyan yazılan: %d" % n)
if KURU:
    print("\n=> uygulamak için --yaz")
    sys.exit(0)
io.open(YOL, "w", encoding="utf-8", newline="").write(s)
r = subprocess.run(["node", "--check", YOL], capture_output=True, text=True)
if r.returncode != 0:
    print("🔴 node --check BAŞARISIZ"); print(r.stderr[:400]); sys.exit(1)
print("✓ YAZILDI · node --check temiz")
