# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ⑩ — Ö3 kilidinin ÜÇÜNCÜ BİRİMİ + log doğrulaması.

Koordinatörün ③ maddesi üç birim istiyordu:
    bölge sayısı · bölgesiz nokta · **en büyük bölgenin nokta sayısı**
İlk ikisi `ARAC-DEGISMEZ3-BOLGE-0907.py`de ölçüldü; ÜÇÜNCÜSÜ ölçülmemişti.
Bu betik onu kapatır — ve niçin gerektiğini de gösterir: bölge SAYISI
S1'de hiç değişmiyordu (77 → 77), yani o birim tek başına **kaybı
görünmez kılıyordu.**

🟢 LOG DOĞRULAMASI (ayrı kalem, aynı turda):
   `kosu_zincir.log` ALTI koşu içeriyor ve özet satırı 4 · 8 · 46 · 68 diye
   değişiyor. Sıralı okundu (`grep -n`, girdi büyüklüğüyle birlikte):
       :4282   4 yerleşim  ← girdi 2503 nokta (ESKİ TABAN)
       :6404  68 yerleşim  ← girdi 3805, 02:40
       :10957 46 yerleşim  ← girdi 3805, 13:41
       :12775 46 yerleşim  ← girdi 3805, 14:23  ← EN SON
   ⇒ EN SON koşu 46 · benim canlı ölçümüm 46 · BİREBİR.
   ⇒ Ve 68 → 46 bir GERİLEME DEĞİL, DÜZELME.
   📌 `tail -1` tesadüfen doğruyu vermişti; sıralı okumasaydım 68'i ya da
      4'ü taban sanabilirdim. (`§11` *"log da bir çıktıdır ve bayatlar"*)
"""
import io
import json
import os
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

Y = girdi.yukle(sessiz=True)


def k12_merkez(Yl, ad2idx, i, azami=5):
    gorulen, j = set(), i
    for _ in range(azami):
        y = Yl[j]
        if (y.get("k") or 0) in (1, 2):
            return j
        ad = y.get("m")
        if not ad or ad not in ad2idx or j in gorulen:
            return None
        gorulen.add(j)
        j = ad2idx[ad]
    return None


def uyelik(Yl):
    ad2 = {y["ad"]: i for i, y in enumerate(Yl)}
    uy = {}
    for j, y in enumerate(Yl):
        if not (y.get("d") or y.get("v")) or not (y.get("k") or 0):
            continue
        mi = k12_merkez(Yl, ad2, j)
        if mi is not None:
            uy.setdefault(Yl[mi]["ad"], []).append(y["ad"])
    return uy


tes = json.load(open(os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-TESHIS-0907.json"),
                     encoding="utf-8"))
anak = set(r["yerlesim"] for r in
           tes["detay"].get("① ANAKRONİK — merkez HENÜZ Osmanlı DEĞİLKEN", []))

uy0 = uyelik(Y)
Y1 = [dict(y) for y in Y]
for y in Y1:
    if y["ad"] in anak:
        y["m"] = None
uy1 = uyelik(Y1)

print("=" * 72)
print("ÜÇÜNCÜ BİRİM — en büyük bölgenin nokta sayısı")
print("=" * 72)


def ozet(uy, ad):
    b = sorted(((len(v), k) for k, v in uy.items()), reverse=True)
    top = sum(n for n, _ in b)
    print("\n[%s]" % ad)
    print("  bölge %d · üye %d" % (len(b), top))
    print("  EN BÜYÜK 8:")
    for n, k in b[:8]:
        print("    %-24s %3d nokta" % (k, n))
    print("  medyan bölge boyu : %d" % (b[len(b) // 2][0] if b else 0))
    print("  tek üyeli bölge   : %d" % sum(1 for n, _ in b if n == 1))
    return dict((k, len(v)) for k, v in uy.items())


d0 = ozet(uy0, "TABAN")
d1 = ozet(uy1, "S1 — ANAKRONİK kovanın m:'si TAMAMEN null")

print("\n" + "=" * 72)
print("EN ÇOK KÜÇÜLEN BÖLGELER (S1)")
print("=" * 72)
fark = sorted(((d1.get(k, 0) - v, k, v, d1.get(k, 0)) for k, v in d0.items()))
for df, k, a, b in fark[:15]:
    if df == 0:
        break
    print("  %-24s %3d -> %3d   (%+d)  %s"
          % (k, a, b, df, "🔴 BOŞALDI" if b == 0 else ""))

bosalan = [k for k, v in d0.items() if d1.get(k, 0) == 0]
kucul = [k for k, v in d0.items() if 0 < d1.get(k, 0) < v]
print("\n[ÖZET]")
print("  bölge sayısı        %d -> %d   (%+d)  ← BU BİRİM KAYBI GÖRÜNMEZ KILIYOR"
      % (len(d0), len(d1), len(d1) - len(d0)))
print("  ÜYESİ SIFIRLANAN    %d bölge" % len(bosalan))
print("  küçülen             %d bölge" % len(kucul))
print("  en büyük bölge      %d -> %d nokta"
      % (max(d0.values()), max(d1.values()) if d1 else 0))
print("\n  📌 Bölge SAYISI 77'de sabit kalıyor çünkü bir merkez KENDİ üyesidir")
print("     (k1/k2 kendi kendine kapanır) ⇒ hiçbir bölge listeden DÜŞMEZ,")
print("     yalnız GÖVDESİ küçülür. Tek başına 'bölge sayısı' birimi bu")
print("     kaybı SIFIR gösterirdi — üçüncü birim tam bu yüzden gerekliydi.")

json.dump({
    "_NOT": ("Ö3 kilidi ÜÇÜNCÜ BİRİM. Bölge sayısı S1'de değişmiyor (77→77) "
             "çünkü merkez kendi üyesidir; kayıp yalnız GÖVDE boyutunda "
             "görünür. Log doğrulaması: en son koşu 46, canlı ölçüm 46."),
    "taban": d0, "s1_m_null": d1,
    "bosalan_bolge": bosalan, "kuculen_bolge": len(kucul),
    "en_buyuk": {"taban": max(d0.values()), "s1": max(d1.values()) if d1 else 0},
    "log_dogrulama": {"en_son_kosu": 46, "canli_olcum": 46, "birebir": True,
                      "onceki_kosu": 68, "yon": "DUZELME"},
}, open(os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-BOLGE2-0907.json"),
        "w", encoding="utf-8", newline=""), ensure_ascii=False, indent=1)
print("\n[YAZILDI] denetim/OLCUM-DEGISMEZ3-BOLGE2-0907.json")
