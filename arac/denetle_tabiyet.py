# -*- coding: utf-8 -*-
"""
TÂBİYET BOŞLUĞU — bir varlık tâbi olduğunda BÜTÜN yerleşimleri tâbi mi?
========================================================================
Kural (KOORDİNATÖR): bir kimlik X tâbi olduğunda X'in bütün yerleşimleri tâbi
olmalı. Doğuran dört vaka (Kili · Akkirman · İsmail · İbrail) kapatıldı.

═══ 🔴 BU ARAÇ İKİ KEZ YANLIŞ KURULDU; İKİSİ DE KAYDA GEÇSİN ═══

**1. YANLIŞ EKSEN.** İlk ölçümümde tâbi varlığı `s:` kimliğinden okudum ve
`ingiltere` "tâbi" çıktı — geride 159/160. **İngiltere Osmanlı tâbii değildir.**
Hata: bir yerleşimin `v:` kaydını, o yerleşimin bir zamanlar sahibi olan HER
`s:` kimliğine bağlamıştım. Tâbi olan varlık `v.k` alanında adlandırılır.
Yakalandı çünkü listede **olamayacak bir üye** vardı.

**2. ORAN BİR VEKİL, SINIFI AYIRT ETMİYOR.** Doğru eksende ölçünce iki vaka
çıktı ve ben onları *"veri boşluğu"* diye sınıfladım — **ikisi de değilmiş.**
KOORDİNATÖR TDV/tarih turuyla ölçtü:

    Eflak %25   Krayova · Tırgu Jiu · Rimnik · Turnu Severin
                = OLTENYA. Avusturya Pasarofça 1718'de aldı, Belgrad 1739'da
                  iade etti. 1739'da voyvodalığa dönmeleri DOĞRU.
    Tunus  %4   Tabarka = Cenevizli Lomellini ailesinin adası; Tunus beyi
                  1741'de aldı. 1705'te Tunus'a ait DEĞİLDİ.

Yani *"düşük oran = veri boşluğu"* hükmüm yanlıştı: **Tunus %4 de aşamalı
genişleme.** Oran, sebebi söylemiyor.

═══ 🟢 AYIRT EDİCİ VERİDE ZATEN VAR ═══
Dört vakanın hepsinde araya **başka bir sahip** girmiş (`avusturya`, `ceneviz`):

    gerçek veri boşluğu   → aralıkta yerleşimin BAŞKA SAHİBİ YOK (unutulmuş)
    aşamalı genişleme     → aralıkta BAŞKA BİR SAHİP var, sonra katılmış
    geri kazanım          → aralıkta başka sahip var AMA öncesinde de aynı
                            varlığa tâbiydi (Oltenya: 1718 öncesi Eflak)

Ayrım **sahiplik zincirinden** okunur, orandan değil. Oran vekil, zincir olgu.

⚠️ Bu ayrım OLMADAN koşulsaydı ilk turda iki yanlış pozitif verecekti ve
düzeltme oturumuna iki yanlış iş gidecekti — denetim daha doğmadan güven
kaybederdi.

ÇALIŞTIRMA
    py arac/denetle_tabiyet.py
    py arac/denetle_tabiyet.py --defter-yaz
"""
import io
import json
import os
import sys

if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import girdi

KOK = girdi.KOK
DEFTER = os.path.join(KOK, "denetim", "TABIYET-DEFTERI.json")

# Ölçüldü: ≥3 filtresini geçen varlıkların oranları %4 · %25 · %57 · %60 · %72
# — 25 ile 57 arası BOŞ. %40 o boş bandın ortasında. Eşik tahminle konmuştu,
# ölçüm onu doğruladı; ama ölçüt artık oranla HÜKÜM VERMİYOR, yalnız aday
# daraltıyor. Hüküm sahiplik zincirinden geliyor.
ASGARI_AYNI_GUN = 3
AZAMI_GERIDE_ORAN = 40


def _sahip_araliklari(y):
    """Yerleşimin bütün sahiplik pencereleri: (f, t, kim)."""
    out = []
    for p in (y.get("s") or []):
        if p.get("f") and p.get("t"):
            out.append((p["f"], p["t"], p.get("d") or "?"))
    for p in (y.get("d") or []):
        if p.get("f") and p.get("t"):
            out.append((p["f"], p["t"], "OSMANLI-dogrudan"))
    return sorted(out)


def _arada_sahip(y, bas, son):
    """[bas, son) aralığında yerleşimin BAŞKA bir sahibi var mı? → kim, ya da None."""
    for f, t, kim in _sahip_araliklari(y):
        if f < son and t > bas:
            return kim
    return None


def _once_ayni_varliga_mi(y, kurum, katilim):
    """Bu yerleşim AYNI varlığa DAHA ÖNCE de tâbi miydi? → geri kazanım.

    ⚠️ İLK YAZIMDA YANLIŞ TARİHLE KIYASLIYORDU: varlığın ANA GÜNÜNDEN (`ilk`)
    önce bitmiş bir `v:` arıyordu. Oltenya'nınki 1462'de başlayıp 1718'de
    bitiyor; ana gün de 1462, yani `t <= bas` hiç tutmuyordu ve geri kazanım
    "aşamalı genişleme" görünüyordu. Doğru soru: **bu KATILIMDAN önce aynı
    varlığa ait bir dönem var mı?**
    """
    for p in (y.get("v") or []):
        if p.get("k") == kurum and p.get("f") and p["f"] < katilim:
            return True
    return False


def olc(Y):
    kurum = {}
    for y in Y:
        for p in (y.get("v") or []):
            if p.get("k") and p.get("f"):
                kurum.setdefault(p["k"], []).append((y, p))

    bulgu = []
    for ad, lst in kurum.items():
        ilk = min(p["f"] for _, p in lst)
        ayni = sum(1 for _, p in lst if p["f"] == ilk)
        geride = [(y, p) for y, p in lst if p["f"] > ilk]
        if not geride:
            continue
        oran = 100.0 * len(geride) / len(lst)
        if ayni < ASGARI_AYNI_GUN or oran > AZAMI_GERIDE_ORAN:
            continue
        for y, p in geride:
            arada = _arada_sahip(y, ilk, p["f"])
            if arada and _once_ayni_varliga_mi(y, ad, p["f"]):
                sinif, kanit = "geri kazanım", arada
            elif arada:
                sinif, kanit = "aşamalı genişleme", arada
            else:
                sinif, kanit = "VERİ BOŞLUĞU", "aralıkta sahip YOK"
            bulgu.append((ad, y["ad"], ilk, p["f"], sinif, kanit))
    return kurum, bulgu


def main():
    Y = girdi.yukle(sessiz=True)
    kurum, bulgu = olc(Y)
    print("Tâbiyet boşluğu — varlık tâbi olduğunda bütün yerleşimleri tâbi mi?\n")
    print("  %d yerleşim · %d adlandırılmış tâbi varlık (`v.k`)" % (len(Y), len(kurum)))
    print("  ölçüt: aynı gün ≥%d VE geride ≤%%%d → sonra SAHİPLİK ZİNCİRİ"
          % (ASGARI_AYNI_GUN, AZAMI_GERIDE_ORAN))
    print()
    if not bulgu:
        print("  ✓ eşiği geçen vaka yok")
        return 0

    say = {}
    for b in bulgu:
        say[b[4]] = say.get(b[4], 0) + 1
    print("  sınıf dağılımı: " + ", ".join("%s×%d" % (a, b)
                                           for a, b in sorted(say.items())))
    print()
    print("  %-30s %-24s %-11s %-11s %-18s %s"
          % ("tâbi varlık", "yerleşim", "ana gün", "katılım", "sınıf", "kanıt"))
    for ad, yer, ilk, gun, sinif, kanit in sorted(bulgu):
        print("  %-30s %-24s %-11s %-11s %-18s %s"
              % (ad[:30], yer[:24], ilk, gun, sinif, kanit))

    ihlal = [b for b in bulgu if b[4] == "VERİ BOŞLUĞU"]
    print()
    print("  🔴 GERÇEK VERİ BOŞLUĞU: %d" % len(ihlal))
    print("     (öteki sınıflar tarihî olgudur, kusur DEĞİL — bu ayrım olmadan")
    print("      denetim ilk koşuda iki yanlış pozitif verecekti)")

    if "--defter-yaz" in sys.argv:
        json.dump({"%s|%s" % (b[0], b[1]): {"ana": b[2], "katilim": b[3],
                                            "sinif": b[4], "kanit": b[5]}
                   for b in bulgu},
                  io.open(DEFTER, "w", encoding="utf-8", newline=""),
                  ensure_ascii=False, indent=1, sort_keys=True)
        print("\n  defter yazıldı: %s" % DEFTER)
    return 1 if ihlal else 0


if __name__ == "__main__":
    sys.exit(main() or 0)
