# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ⑧ — Y3: `degismez3z` de AYNI sessiz dalı taşıyor mu?

Koordinatörün dersi: *"bir bayat satır bulunca KOMŞULARINA bak."*
`denetle.py`nin 72 `continue` dalı tarandı; aynı desen (**bir kaydı arayıp
bulamayınca sessizce atlama**) iki yerde daha çıktı:

  :1831  `degismez4`  → 🟢 SESSİZ DEĞİL: `kunyesiz.append(...)` ile kovaya
                          konuyor ve raporlanıyor. ⇒ EMSAL, ve yamamın
                          bir yenilik değil bu emsale HİZALAMA olduğunu
                          gösteriyor.
  :2379  `degismez3z` → 🔴 SESSİZ. Yamam bunu KAPSAMIYORDU.

Bu betik `degismez3z`in atladığı kümeyi ölçer ve `degismez3`inkiyle
KARŞILAŞTIRIR — aynıysa tek yama iki yeri de tarif eder, farklıysa ayrı
kalem gerekir.
"""
import io
import os
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

KESITLER = ("1300-06-15", "1400-06-15", "1500-06-15",
            "1600-06-15", "1700-06-15", "1800-06-15")

Y = girdi.yukle(sessiz=True)
ix = {y["ad"]: y for y in Y}

# --- degismez3'ün atladığı (m: sabit) ------------------------------------
atl3 = {}
for y in Y:
    if not y.get("m"):
        continue
    if y["m"] not in ix:
        atl3.setdefault(y["m"], set()).add(y["ad"])

# --- degismez3z'nin atladığı (kd_gun ile, kesit kesit) -------------------
atl3z = {}
for g in KESITLER:
    for y in Y:
        _, m_ad = girdi.kd_gun(y, g)
        if not m_ad:
            continue
        if m_ad not in ix:
            atl3z.setdefault(m_ad, set()).add(y["ad"])

print("=" * 72)
print("Y3 — `degismez3z` sessiz dalı (denetle.py:2379)")
print("=" * 72)
n3 = sum(len(v) for v in atl3.values())
n3z = sum(len(v) for v in atl3z.values())
print("  degismez3  atlanan : %d kayıt / %d merkez adı  %s"
      % (n3, len(atl3), sorted(atl3)))
print("  degismez3z atlanan : %d kayıt / %d merkez adı  %s"
      % (n3z, len(atl3z), sorted(atl3z)))

ayni = (atl3 == atl3z)
print("\n  İKİ KÜME AYNI MI : %s" % ("EVET ✓" if ayni else "🔴 FARKLI"))
if ayni:
    print("  ⇒ Tek yama iki yeri de tarif eder; `degismez3z`de de AYNI")
    print("    `atlanan` sözlüğü döndürülüp BASILMALI.")
    print("  ⚠️ Ama bu bugünkü verinin sonucu: bir kayda `kd:` yazılıp içine")
    print("    ATLASTA OLMAYAN bir merkez konursa kümeler AYRIŞIR — o yüzden")
    print("    iki dal AYRI AYRI sayılmalı, tek sayı PAYLAŞILMAMALI.")
else:
    yalniz_3 = {k: sorted(v) for k, v in atl3.items() if k not in atl3z}
    yalniz_3z = {k: sorted(v) for k, v in atl3z.items() if k not in atl3}
    print("  yalnız degismez3'te  : %s" % yalniz_3)
    print("  yalnız degismez3z'te : %s" % yalniz_3z)

# --- AYRIŞMA ZORLAMASI (C13 ② — bugünkü veride koşmayan dal) ------------
print("\n[ZORLAMA — kümelerin AYRIŞABİLDİĞİ gösteriliyor]")
sahte = dict(Y[0])
sahte["ad"] = "ZZZ-KD-SINAV-QQQ"
sahte["m"] = None
sahte["kd"] = [{"f": "1281-01-01", "t": "1923-10-29",
                "m": "ZZZ-YALNIZ-KD-MERKEZI-QQQ", "k": 2}]
Y2 = Y + [sahte]
ix2 = {y["ad"]: y for y in Y2}
a3, a3z = {}, {}
for y in Y2:
    if y.get("m") and y["m"] not in ix2:
        a3.setdefault(y["m"], set()).add(y["ad"])
for g in KESITLER:
    for y in Y2:
        _, m_ad = girdi.kd_gun(y, g)
        if m_ad and m_ad not in ix2:
            a3z.setdefault(m_ad, set()).add(y["ad"])
print("  sahte kayıt: m:None + kd: içinde ATLASTA OLMAYAN merkez")
print("    degismez3  görür mü : %s" % ("EVET" if "ZZZ-YALNIZ-KD-MERKEZI-QQQ" in a3 else "HAYIR"))
print("    degismez3z görür mü : %s" % ("EVET" if "ZZZ-YALNIZ-KD-MERKEZI-QQQ" in a3z else "HAYIR"))
print("  ⇒ %s"
      % ("🔴 KÜMELER AYRIŞABİLİYOR — iki dal AYRI sayılmalı, tek sayı yetmez"
         if ("ZZZ-YALNIZ-KD-MERKEZI-QQQ" in a3z) != ("ZZZ-YALNIZ-KD-MERKEZI-QQQ" in a3)
         else "kümeler ayrışmadı"))
