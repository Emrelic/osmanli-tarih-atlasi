# -*- coding: utf-8 -*-
"""EKLEYİCİ KAPI ÖNGÖRÜSÜ — koşudan ÖNCE, damgalı.

`CLAUDE.md §11`: *"öngörü ölçümden önce yazılır — sonra yazılan beklenti
ayarlanabilir, önce yazılan ÇÜRÜTÜLEBİLİR."* Ve ikinci ayağı: *"hangi
öngörünün MAZERETİ olabileceğini de yaz."*

Bu betik motorun `_dolgu_kumesi()` kuralını BAĞIMSIZ olarak yeniden kurar
(motoru import etmez — o 40 dakikalık koşuyu başlatır) ve koşunun basacağı
sayıları önden hesaplar. Koşu bittiğinde `🚪 EKLEYİCİ KAPI:` satırı bunlarla
karşılaştırılır.

    py denetim/ongoru_ekleyici.py
"""
import io
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

import numpy as np                                          # noqa: E402
import girdi                                                # noqa: E402

PUAN_HALKA = ((200.0, 4), (300.0, 2), (400.0, 1))
PUAN_ESIK = 4
DOLDURULABILIR_BOS = {"devletsiz", "hata"}

KESIT = ["1300-06-15", "1400-06-15", "1500-06-15", "1577-01-01",
         "1600-06-15", "1650-06-15", "1700-06-15", "1800-06-15",
         "1900-06-15"]


def sahibi(y, g):
    for p in y.get("d") or []:
        if p["f"] <= g < p["t"]:
            return "OSMANLI"
    for p in y.get("v") or []:
        if p["f"] <= g < p["t"]:
            return "OSMANLI"
    for p in y.get("s") or []:
        if p["f"] <= g < p["t"]:
            return p.get("d")
    return None


def gun_olc(Y, g):
    sah_i, sah_k, bos_i, red = [], [], [], {}
    for j, y in enumerate(Y):
        k = sahibi(y, g)
        if k:
            sah_i.append(j)
            sah_k.append(k)
            continue
        b = y.get("bos")
        if b in DOLDURULABILIR_BOS or (y.get("tur") == "bolge" and not b):
            bos_i.append(j)
        else:
            red[b or "(bos yok, gerçek yerleşim)"] = \
                red.get(b or "(bos yok, gerçek yerleşim)", 0) + 1
    if not bos_i or not sah_i:
        return 0, 0, len(bos_i), red
    bla = np.array([Y[j]["lat"] for j in bos_i])
    blo = np.array([Y[j]["lon"] for j in bos_i])
    sla = np.array([Y[j]["lat"] for j in sah_i])
    slo = np.array([Y[j]["lon"] for j in sah_i])
    co = np.cos(np.radians((bla[:, None] + sla[None, :]) / 2))
    m = np.sqrt(((bla[:, None] - sla[None, :]) * 110.574) ** 2
                + ((blo[:, None] - slo[None, :]) * 111.320 * co) ** 2)
    k = np.zeros(m.shape, dtype="int16")
    once = 0.0
    for e, pu in PUAN_HALKA:
        k[(m >= once) & (m < e)] = pu
        once = e
    dev = sorted(set(sah_k))
    ix = {d: [i for i, kk in enumerate(sah_k) if kk == d] for d in dev}
    P = np.zeros((len(bos_i), len(dev)), dtype="int32")
    for di, d in enumerate(dev):
        P[:, di] = k[:, ix[d]].sum(axis=1)
    en = P.max(axis=1)
    katilan = cekisme = 0
    for bi in range(len(bos_i)):
        if en[bi] < PUAN_ESIK:
            continue
        if int((P[bi] == en[bi]).sum()) != 1:
            cekisme += 1
        else:
            katilan += 1
    return katilan, cekisme, len(bos_i), red


def main():
    Y = girdi.yukle(sessiz=True)
    print(f"evren {len(Y)} nokta\n")
    print(f"{'kesit':13s} {'aday':>6s} {'KATILAN':>8s} {'çekişmeli':>10s}")
    print("-" * 42)
    tk = tc = 0
    for g in KESIT:
        kat, cek, aday, red = gun_olc(Y, g)
        tk += kat
        tc += cek
        print(f"{g:13s} {aday:6d} {kat:8d} {cek:10d}")
    print("-" * 42)
    print(f"{'TOPLAM (9 kesit)':13s} {'':6s} {tk:8d} {tc:10d}")

    _, _, _, red = gun_olc(Y, "1600-06-15")
    print("\nREDDEDİLEN sahipsiz kayıtlar (1600 kesiti) — Emre'nin şartı:")
    for k, v in sorted(red.items(), key=lambda t: -t[1]):
        print(f"   {str(k):34s} {v:4d}")

    # 🔴 ŞEMA DENETİMİ — bu satır bir ÇÖKÜŞTEN doğdu: `bos:` alanı bir
    # kayıtta metin değil `true` geliyordu ve biçimlendirme patladı.
    # Çöküş bir kusur değil, ÖLÇÜM aletiydi: sessizce geçseydi o kayıt
    # "bilinmeyen cins" diye reddedilir ve kimse sebebini sormazdı.
    BOZUK = [y for y in Y if y.get("bos") is not None
             and not isinstance(y.get("bos"), str)]
    print(f"\n🔴 `bos:` alanı METİN OLMAYAN kayıt: {len(BOZUK)}")
    for y in BOZUK:
        print(f"   {y['ad']:30s} bos={y['bos']!r}  "
              f"kasitli_bosluk={y.get('kasitli_bosluk')!r}")

    print("""
════════ ÖNGÖRÜ — koşudan ÖNCE yazıldı ════════
① `🚪 EKLEYİCİ KAPI:` satırı BASILACAK           mazeret YOK
② katılan petek-gün > 0                          mazeret YOK
③ çekişmeli > 0 (iki devlet berabere)            mazeret VAR — veriye bağlı
④ `kabile` kayıtlarının HİÇBİRİ katılmayacak     mazeret YOK — Emre'nin şartı
⑤ Osmanlı gövdesi 9/9 kesitte BÜYÜYECEK          mazeret YOK — kapının amacı
⑥ hiçbir gövde KÜÇÜLMEYECEK (kapı yalnız ekler)  mazeret YOK

⚠️ ⑤ ve ⑥ tutmazsa harita değil KAPI düzeltilir. Bir ekleyici kapının
   gövde küçültmesi, `§11`in "bir düzeltme doğru çalışabilir ve sonraki
   aşama onu geri alabilir" dersinin tekrarı olurdu.
📌 Bu betiğin sayıları motorun `_dolgu_kumesi`iyle AYNI kuralı BAĞIMSIZ
   kurar; ayrışırlarsa ikisinden biri yanlıştır ve bunu koşu söyleyecek.
""")


if __name__ == "__main__":
    main()
