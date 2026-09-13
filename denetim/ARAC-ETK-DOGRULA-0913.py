# -*- coding: utf-8 -*-
"""PAKET-ETIKET-UYGULA — uygulama SONRASI sınav.

py denetim/ARAC-ETK-DOGRULA-0913.py ONCE.json SONRA.json
(ikisi de node denetim/ARAC-A3-MADDE-TOPLA-0913.js çıktısı; önce = uygulamadan hemen önce)

Sorar:
 ① madde sayısı ve sırası aynı mı (t · b · k · tur · d · kisiler · vefat_id · dosya BİREBİR)
 ② her maddede eski etiket dizisi yeni dizinin ÖNEKİ mi (hiçbir etiket silinmedi/yer değiştirmedi)
 ③ eklenen her etiket izinli kümede mi (konu-* · afet · afet-*)
 ④ hiçbir dizide aynı etiket iki kez yok mu (yeni tekrar doğmadı)
 ⑤ etiket başına önce → sonra sayısı
Herhangi bir ihlalde çıkış 1.
"""
import io, json, sys, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
A = json.load(open(sys.argv[1], encoding="utf-8"))
B = json.load(open(sys.argv[2], encoding="utf-8"))
izinli = lambda e: e.startswith("konu-") or e == "afet" or e.startswith("afet-")
hata = []
if len(A) != len(B):
    hata.append(f"madde sayısı {len(A)} → {len(B)}")
tekrar_once = tekrar_sonra = 0
sayA, sayB = collections.Counter(), collections.Counter()
eklenen = 0
for a, b in zip(A, B):
    for alan in ("dosya", "kova", "t", "b", "k", "tur", "d", "kisiler", "vefat_id"):
        if a[alan] != b[alan]:
            hata.append(f"① {a['dosya']} {a['t']} alan '{alan}' değişti"); break
    ea, eb = a["etiket"], b["etiket"]
    if eb[:len(ea)] != ea:
        hata.append(f"② {a['dosya']} {a['t']} {a['b'][:40]} eski etiket öneki bozuldu: {ea} → {eb}")
    for e in eb[len(ea):]:
        eklenen += 1
        if not izinli(e):
            hata.append(f"③ {a['dosya']} {a['t']} izinsiz etiket {e}")
    tekrar_once += len(ea) != len(set(ea))
    if len(eb) - len(set(eb)) > len(ea) - len(set(ea)):
        hata.append(f"④ {a['dosya']} {a['t']} {a['b'][:40]} yeni tekrar: {eb}")
    tekrar_sonra += len(eb) != len(set(eb))
    for e in set(ea):
        if izinli(e): sayA[e] += 1
    for e in set(eb):
        if izinli(e): sayB[e] += 1
print(f"madde {len(A)} → {len(B)} · eklenen etiket {eklenen}")
print(f"içinde tekrar olan dizi: önce {tekrar_once} · sonra {tekrar_sonra} (yeni tekrar doğmamalı)")
for e in sorted(set(sayA) | set(sayB), key=lambda x: (not x.startswith("konu-"), x)):
    print(f"  {e:24} {sayA[e]:5} → {sayB[e]:5}")
kapsam = sum(1 for b in B if any(e.startswith("konu-") or e == "afet" for e in b["etiket"]))
print(f"en az bir başlık etiketi taşıyan madde: {kapsam} / {len(B)}")
for h in hata[:30]:
    print("  ✗", h)
print("SONUÇ:", "TEMİZ" if not hata else f"{len(hata)} İHLAL")
sys.exit(1 if hata else 0)
