# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ① TABAN — YETKİLİ ALETİ KOŞTURUR, TAKLİT ETMEZ.

`CLAUDE.md §11`: *"bir denetçiyi taklit etme, ONU KOŞTUR"* — ve taklit
edilirse *"eşik · kova · kural dalları da taşınmalı"*. Bu betik hiçbir
ölçütü yeniden yazmaz: `denetle.degismez3` ve `denetle.degismez3z`
doğrudan çağrılır.

AYRICA ÖLÇÜLEN — aletin KENDİ kör noktası:
  `denetle.py:1487`  m = ix.get(y["m"]);  if not m: continue
  ⇒ merkezi atlasta BULUNMAYAN kayıt sessizce atlanıyor. O kayıtlar
    "çelişki yok" değil "ÖLÇÜLMEDİ" kovasındadır ve sayısı hiç basılmıyor.
    (`§11`: *"`0`, 'yok' ile 'bakmadım' arasında ayrım yapmaz"*)

ÇIKTI: sayılar + JSON. Hüküm YOK — sınıflandırma ② numaralı alette.
"""
import io
import json
import os
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

import girdi          # noqa: E402
import denetle        # noqa: E402

print("=" * 72)
print("DEGISMEZ3-0907 ① TABAN — yetkili aletin kendi fonksiyonlarıyla")
print("=" * 72)

Y = girdi.yukle(sessiz=True)
print("\n[EVREN]")
print("  girdi dosyası          : %d" % len(girdi.GIRDI_DOSYALARI))
print("  yerleşim (nokta)       : %d" % len(Y))

# ---- alan varlığı -------------------------------------------------------
m_var = [y for y in Y if y.get("m")]
k_var = [y for y in Y if y.get("k")]
kd_var = [y for y in Y if y.get("kd")]
print("\n[ALAN VARLIĞI]")
print("  m: taşıyan             : %d  (%.1f%%)" % (len(m_var), 100.0 * len(m_var) / len(Y)))
print("  k: taşıyan (0/None değil): %d" % len(k_var))
print("  kd: taşıyan (GERÇEK)   : %d   <- borcun ÖDENEN kısmı" % len(kd_var))
print("  kd BILINEN_ALANLAR'da  : %s" % ("EVET" if "kd" in girdi.BILINEN_ALANLAR else "HAYIR"))

# ---- aletin kör noktası: merkezi atlasta olmayan kayıt -------------------
ix = {y["ad"]: y for y in Y}
m_yok = sorted(set(y["m"] for y in m_var if y["m"] not in ix))
m_yok_kayit = [y["ad"] for y in m_var if y["m"] not in ix]
print("\n[ALETİN KÖR NOKTASI — 'ölçülmedi', 'temiz' DEĞİL]")
print("  m: dolu ama merkez ATLASTA YOK : %d kayıt / %d ayrı merkez adı"
      % (len(m_yok_kayit), len(m_yok)))
print("  ⇒ degismez3 bunları `if not m: continue` ile SESSİZCE atlıyor")
if m_yok:
    print("  merkez adları (ilk 25): %s" % ", ".join(m_yok[:25]))

# ---- yetkili alet: örneklem (6 kesit) -----------------------------------
print("\n[YETKİLİ ALET — degismez3 (ZAMANSIZ, 6 kesitlik ÖRNEKLEM)]")
cel = denetle.degismez3(Y)
print("  çelişki (yerleşim-tarih çifti) : %d" % len(cel))
print("  benzersiz yerleşim              : %d" % len(set(c[1] for c in cel)))
print("  benzersiz (yerleşim, merkez)    : %d" % len(set((c[1], c[2]) for c in cel)))

print("\n[YETKİLİ ALET — degismez3z (ZAMANLI, kd_gun ile, aynı 6 kesit)]")
zam, gercek_kd = denetle.degismez3z(Y)
print("  çelişki (zamanlı)               : %d" % len(zam))
print("  gerçek kd: kayıt sayısı         : %d" % gercek_kd)
print("  ZAMANSIZ ile FARK               : %d" % (len(zam) - len(cel)))
print("  ⇒ aletin kendi beyanı: kd: yokken ikisi EŞİT olmalı;")
print("    eşit değilse ya kd: yazılmıştır ya okuyucu bozuktur.")

# ---- kesit dağılımı -----------------------------------------------------
print("\n[KESİT DAĞILIMI — zamansız]")
kesitler = {}
for g, ad, m, a, b in cel:
    kesitler[g] = kesitler.get(g, 0) + 1
for g in sorted(kesitler):
    print("  %s : %4d" % (g, kesitler[g]))

# ---- çift dağılımı ------------------------------------------------------
print("\n[EN ÇOK ÇELİŞEN MERKEZLER — zamansız]")
merkez = {}
for g, ad, m, a, b in cel:
    merkez[m] = merkez.get(m, 0) + 1
for m, n in sorted(merkez.items(), key=lambda x: -x[1])[:15]:
    print("  %-24s %4d" % (m, n))

# ---- JSON ---------------------------------------------------------------
cikti = {
    "_NOT": ("DEGISMEZ3-0907 ① TABAN. Yetkili alet (denetle.degismez3 / "
             "degismez3z) DOĞRUDAN çağrıldı, ölçüt yeniden yazılmadı. "
             "⚠️ Bu ÖRNEKLEMDİR: 6 kesit (1300/1400/1500/1600/1700/1800-06-15), "
             "yani 643 yılın 6 günü. Tam tarama ② numaralı alette."),
    "evren": {"nokta": len(Y), "girdi_dosyasi": len(girdi.GIRDI_DOSYALARI)},
    "alan": {"m": len(m_var), "k": len(k_var), "kd_gercek": len(kd_var),
             "kd_BILINEN_ALANLARda": "kd" in girdi.BILINEN_ALANLAR},
    "kor_nokta_merkez_atlasta_yok": {
        "kayit": len(m_yok_kayit), "ayri_merkez_adi": len(m_yok),
        "merkez_adlari": m_yok},
    "ornek_6kesit": {
        "zamansiz_celiski": len(cel),
        "zamanli_celiski": len(zam),
        "gercek_kd": gercek_kd,
        "benzersiz_yerlesim": len(set(c[1] for c in cel)),
        "benzersiz_cift": len(set((c[1], c[2]) for c in cel)),
        "kesit_dagilimi": kesitler},
    "celiskiler_6kesit": [
        {"gun": g, "yerlesim": ad, "merkez": m, "yerlesim_durum": a,
         "merkez_durum": b} for g, ad, m, a, b in cel],
}
yol = os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-TABAN-0907.json")
open(yol, "w", encoding="utf-8", newline="").write(
    json.dumps(cikti, ensure_ascii=False, indent=1))
print("\n[YAZILDI] %s" % yol)
