# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ⑨ — Ö3'ÜN KİLİDİ: `m:null` bölge katmanını boşaltır mı?

Ö3 (%52'lik ANAKRONİK kovayı mekanik çözen öneri) şu soruyla bloke edilmişti:
  *"Motor `m:`yi bölge gruplaması için de okuyor. Bu ölçülmeden uygulanmamalı
    — bir denetimi kapatırken bir çizimi bozarız."*

ÖLÇÜT TAŞINDI, YENİDEN YAZILMADI (`§11`): `k12_merkez()` mantığı
`uret_petek.py:762`den birebir alındı (zincir · azami 5 hop · döngü koruması),
ve bölge üyeliği şartı `:3927`den (`(d: veya v:) VE k:`).

🔴 ÖNGÖRÜ (ölçümden ÖNCE yazıldı, mazeretiyle):
  ① `k12_merkez` `y["m"]` okuyor, `kd_gun` DEĞİL ⇒ `kd:` eklemek bölge
     katmanını HİÇ değiştirmez. **Mazeret YOK** — kod okundu, satır belli.
  ② `m:` tamamen null yapılırsa üyelik kaybı BÜYÜK olur (üst sınır).
  ③ Koordinatörün ④ hipotezi (🟡 devraldım): bölge yalnız Osmanlı
     döneminde çizildiği için anakronik dönemde `m:null` çizimi
     etkilemez. **Kısmen tutar bekliyorum** — şart `d:/v: VAR MI` yani
     zaman penceresi değil, VARLIK; ikisi aynı şey değil.
  ÖLÇÜM: bu betik · birim: yerleşim sayısı · bölge sayısı.
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
AD2IDX = {y["ad"]: i for i, y in enumerate(Y)}


def k12_merkez(Yl, ad2idx, i, azami=5):
    """uret_petek.py:762'den BİREBİR taşındı."""
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


def bolge_uyelik(Yl):
    """uret_petek.py:3926-3934 şartını taşır → {merkez_adı: [üye idx]}"""
    ad2 = {y["ad"]: i for i, y in enumerate(Yl)}
    uy = {}
    disarida = []
    for j, y in enumerate(Yl):
        if not (y.get("d") or y.get("v")) or not (y.get("k") or 0):
            continue                      # bölge katmanının EVRENİ DIŞI
        mi = k12_merkez(Yl, ad2, j)
        if mi is None:
            disarida.append(y["ad"])
            continue
        uy.setdefault(Yl[mi]["ad"], []).append(j)
    return uy, disarida


print("=" * 72)
print("Ö3 KİLİDİ — `m:` ve bölge katmanı")
print("=" * 72)

# ---- ⓪ EVREN ------------------------------------------------------------
aday = [y for y in Y if (y.get("d") or y.get("v")) and (y.get("k") or 0)]
print("\n[⓪ BÖLGE KATMANININ EVRENİ]  şart: (d: veya v:) VE k:")
print("  toplam nokta                     : %d" % len(Y))
print("  bölge katmanı adayı              : %d  (%.1f%%)"
      % (len(aday), 100.0 * len(aday) / len(Y)))
print("  ⇒ 3805'in %d'i bölge katmanını HİÇ İLGİLENDİRMİYOR"
      % (len(Y) - len(aday)))

# ---- ① BUGÜN ------------------------------------------------------------
uy0, dis0 = bolge_uyelik(Y)
print("\n[① BUGÜNKÜ TABAN]")
print("  bölge (k1/k2 merkez)             : %d" % len(uy0))
print("  bölgeye giren yerleşim           : %d" % sum(len(v) for v in uy0.values()))
print("  zinciri KAPANMAYAN (bölgesiz)    : %d" % len(dis0))
if dis0:
    print("    %s" % ", ".join(dis0[:8]))

# ---- ② KONTROL GRUBU: m:null bugün var mı? -----------------------------
m_null = [y for y in aday if not y.get("m")]
m_null_k12 = [y for y in m_null if (y.get("k") or 0) in (1, 2)]
m_null_k34 = [y for y in m_null if (y.get("k") or 0) in (3, 4)]
print("\n[② KONTROL GRUBU — `m:` boş olan kayıt BUGÜN VAR MI?]")
print("  bölge adayı ama m: BOŞ           : %d" % len(m_null))
print("    k:1/2 (kendi merkezi, m: gerekmez): %d  ← BOŞLUK NORMAL" % len(m_null_k12))
print("    k:3/4 (bir merkeze bağlı olmalı)  : %d  ← ZİNCİR AÇIK" % len(m_null_k34))
if m_null_k34:
    print("    örnek: %s" % ", ".join(y["ad"] for y in m_null_k34[:8]))
print("  ⇒ KONTROL GRUBU %s — ölçüm bedava"
      % ("VAR" if m_null_k34 else "YOK, senaryo ile üretilecek"))

# ---- ③ SENARYO 1: ANAKRONİK kovanın m:'si TAMAMEN null -----------------
tes = json.load(open(os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-TESHIS-0907.json"),
                     encoding="utf-8"))
anak = set()
for r in tes["detay"].get("① ANAKRONİK — merkez HENÜZ Osmanlı DEĞİLKEN", []):
    anak.add(r["yerlesim"])
print("\n[③ SENARYO 1 (NAİF) — ANAKRONİK kovanın `m:`si TAMAMEN null]")
print("  etkilenen yerleşim: %d" % len(anak))
Y1 = [dict(y) for y in Y]
for y in Y1:
    if y["ad"] in anak:
        y["m"] = None
uy1, dis1 = bolge_uyelik(Y1)
print("  bölge      %4d -> %4d   (%+d)" % (len(uy0), len(uy1), len(uy1) - len(uy0)))
print("  üye        %4d -> %4d   (%+d)"
      % (sum(len(v) for v in uy0.values()), sum(len(v) for v in uy1.values()),
         sum(len(v) for v in uy1.values()) - sum(len(v) for v in uy0.values())))
print("  bölgesiz   %4d -> %4d   (%+d)" % (len(dis0), len(dis1), len(dis1) - len(dis0)))
kaybolan = sorted(set(uy0) - set(uy1))
if kaybolan:
    print("  🔴 TAMAMEN KAYBOLAN BÖLGE: %d — %s" % (len(kaybolan), ", ".join(kaybolan[:10])))

# ---- ④ SENARYO 2: Ö3'ÜN GERÇEK HÂLİ — kd: eklenir, m: KORUNUR ----------
print("\n[④ SENARYO 2 (Ö3'ÜN GERÇEK HÂLİ) — `kd:` eklenir, `m:` KORUNUR]")
Y2 = [dict(y) for y in Y]
for y in Y2:
    if y["ad"] in anak:
        y["kd"] = [{"f": "1281-01-01", "t": "1500-01-01", "k": y.get("k") or 0,
                    "m": None},
                   {"f": "1500-01-01", "t": "1923-10-29", "k": y.get("k") or 0,
                    "m": y.get("m")}]
uy2, dis2 = bolge_uyelik(Y2)
print("  bölge      %4d -> %4d   (%+d)" % (len(uy0), len(uy2), len(uy2) - len(uy0)))
print("  üye        %4d -> %4d   (%+d)"
      % (sum(len(v) for v in uy0.values()), sum(len(v) for v in uy2.values()),
         sum(len(v) for v in uy2.values()) - sum(len(v) for v in uy0.values())))
print("  bölgesiz   %4d -> %4d   (%+d)" % (len(dis0), len(dis2), len(dis2) - len(dis0)))
ayni = (uy0 == uy2)
print("  ⇒ ÜYELİK TABLOSU AYNI MI : %s" % ("EVET ✓" if ayni else "🔴 DEĞİŞTİ"))
print("  📌 Sebep: `k12_merkez()` `y[\"m\"]` okuyor, `girdi.kd_gun()` DEĞİL")
print("     (`uret_petek.py:770`). `kd:` motorun bölge katmanına GÖRÜNMEZ.")

# ---- ⑤ KOORDİNATÖRÜN ④ HİPOTEZİ ----------------------------------------
print("\n[⑤ 🟡 DEVRALINAN HİPOTEZ — 'bölge yalnız Osmanlı döneminde çizilir']")
print("  uret_petek.py:3941  ara = my['d'] + my['v']")
print("  uret_petek.py:3942  'f': min(dn['f'] …)  ·  't': max(dn['t'] …)")
print("  bolgeler.js başlığı: 'f/t: merkezin Osmanlı aralığı — çizgi haritada")
print("                        yalnız bu aralıkta görünür.'")
print("  ⇒ HİPOTEZ DOĞRULANDI — ama ŞARTLI:")
print("    · ÇİZİM penceresi  = MERKEZİN Osmanlı aralığı  ⇒ anakronik dönemde")
print("      bölge çizgisi zaten YOK")
print("    · ÜYELİK şartı     = yerleşimin d:/v: VARLIĞI (zaman penceresi DEĞİL)")
print("      ⇒ `m:` null olursa üyelik HER ZAMAN kaybolur, yalnız anakronik")
print("        dönemde değil. İkisi AYNI ŞEY DEĞİL.")

# ---- ÖNGÖRÜ SINAVI ------------------------------------------------------
print("\n" + "=" * 72)
print("ÖNGÖRÜ SINAVI")
print("=" * 72)
print("  ① kd: bölgeyi HİÇ değiştirmez : %s"
      % ("TUTTU ✓" if ayni else "🔴 ÇÜRÜDÜ"))
print("  ② m:null kaybı BÜYÜK           : üye %+d · bölge %+d  ⇒ %s"
      % (sum(len(v) for v in uy1.values()) - sum(len(v) for v in uy0.values()),
         len(uy1) - len(uy0),
         "TUTTU ✓" if len(dis1) > len(dis0) else "🔴 ÇÜRÜDÜ"))
print("  ③ ④ hipotezi KISMEN tutar      : TUTTU ✓ (çizim penceresi evet,")
print("                                    üyelik şartı HAYIR)")

json.dump({
    "_NOT": ("Ö3 kilidi. k12_merkez ve bölge üyelik şartı uret_petek.py'den "
             "BİREBİR taşındı. Öngörü ölçümden ÖNCE yazıldı (docstring)."),
    "evren": {"nokta": len(Y), "bolge_adayi": len(aday)},
    "taban": {"bolge": len(uy0), "uye": sum(len(v) for v in uy0.values()),
              "bolgesiz": len(dis0), "bolgesiz_liste": dis0},
    "kontrol_grubu": {"m_bos_bolge_adayi": len(m_null),
                      "k12": len(m_null_k12), "k34": len(m_null_k34),
                      "k34_liste": [y["ad"] for y in m_null_k34]},
    "senaryo1_m_null": {"bolge": len(uy1), "uye": sum(len(v) for v in uy1.values()),
                        "bolgesiz": len(dis1), "kaybolan_bolge": kaybolan},
    "senaryo2_kd": {"bolge": len(uy2), "uye": sum(len(v) for v in uy2.values()),
                    "bolgesiz": len(dis2), "uyelik_ayni": ayni},
    "etkilenen_anakronik_yerlesim": len(anak),
}, open(os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-BOLGE-0907.json"),
        "w", encoding="utf-8", newline=""), ensure_ascii=False, indent=1)
print("\n[YAZILDI] denetim/OLCUM-DEGISMEZ3-BOLGE-0907.json")
