# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ㉕ — MÜKERRER MADDE: 3 şüpheli çift (denetle.py çıkış kodu 1).

╔═ ÖNGÖRÜ — ÇİFTLERİ GÖRMEDEN, ölçümden ÖNCE ═════════════════════════╗
  Bugün ekip çok yama indirdi ve bu denetim **tam onun için** var.
  Ve `BILINEN_AYRI` muafiyet listesi yanlış pozitifleri zaten eliyor
  (kürk karakolu vakası oraya yazılmıştı) ⇒ eşiği GEÇEN bir çiftin
  gerçek olma ihtimali yüksek.
  ⇒ ÖNGÖRÜ: **3'ün en az 2'si GERÇEK MÜKERRER.**
  MAZERET: aynı yıl + aynı tür olaylar (iki ayrı kuşatma, iki ayrı
  antlaşma) ölçütü tetikleyebilir — `SEFERLER`de bugün ölçtüğüm
  *"ölçüt uymuyor"* sınıfının kronoloji karşılığı. O çıkarsa mazeret
  GEÇERLİ; ama **3'ün 3'ü de ölçüt uyumsuzluğu çıkarsa MAZERET YOK**,
  çünkü `BILINEN_AYRI` tam bunun için var ve boş kalmış demektir.
  ÖLÇÜM: `denetle.mukerrer_maddeler` DOĞRUDAN çağrılıyor (taklit YOK).
╚═════════════════════════════════════════════════════════════════════╝

⚠️ 51 «ZAYIF ölçüt» çiftiyle KARIŞTIRILMIYOR — alet onları ayrı basıyor
   ve İHLAL DEĞİL. Bu betik yalnız İHLAL kovasını açar.
🔒 `data/` DONUK — hüküm verilir, yama `denetim/` altına hazırlanır,
   UYGULANMAZ.
"""
import io
import json
import os
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import denetle  # noqa: E402

O = denetle.olaylari_yukle()
print("=" * 78)
print("MÜKERRER MADDE DENETİMİ — ihlal kovası")
print("=" * 78)
print("kronoloji maddesi (çekirdek): %d" % len(O))

bulunan = denetle.mukerrer_maddeler(O)
print("\n[DÖNÜŞ DÖKÜLÜYOR — varsayılmıyor]")
print("  tip: %s · uzunluk: %d" % (type(bulunan).__name__, len(bulunan)))
if bulunan:
    print("  ilk öğe tipi: %s · uzunluk %d"
          % (type(bulunan[0]).__name__, len(bulunan[0])))

# 🔴 KOVA AYRIMI `denetle.py:3726`DAN BİREBİR ALINDI — ve ilk hâlim YANLIŞTI:
#     mk    = [r for r in tum if r[4] == "başlık" or r[4].startswith("kişi!")]
#     zayif = [r for r in tum if r[4].startswith("kişi:")]
# İlk yazımda yalnız `"!" in olcut` aradım ⇒ **`başlık` ölçütlü çiftleri
# KAÇIRDIM** ve "KESİN 0" bastım; koordinatör 3 ihlal görmüştü.
# 📌 Ve bu, `denetle.py:3732`nin anlattığı hatanın AYNASI: orada zayıf liste
#    ihlal sanılmıştı (iki kez), burada ihlal listesi HİÇ GÖRÜLMEDİ.
#    `§11` *"aletin cevabını DOĞRU YERDEN oku"* — kova ayrımı taklit
#    edilmez, KAYNAĞINDAN kopyalanır.
kesin = [b for b in bulunan
         if b[4] == "başlık" or str(b[4]).startswith("kişi!")]
zayif = [b for b in bulunan if str(b[4]).startswith("kişi:")]
print("\n[KOVA AYRIMI — aletin kendi ölçütü]")
print("  toplam şüpheli çift : %d" % len(bulunan))
print("  KESİN (ihlal)       : %d" % len(kesin))
print("  ZAYIF (bilgi)       : %d" % len(zayif))

hedef = kesin if kesin else bulunan[:3]
print("\n" + "=" * 78)
print("ÇİFTLER — HER BİRİ TAM METNİYLE")
print("=" * 78)
detay = []
for i, b in enumerate(hedef, 1):
    yil, oran, a, c, olcut = b[0], b[1], b[2], b[3], b[4]
    print("\n[%d]  yıl %s · Jaccard %.2f · ölçüt: %s" % (i, yil, oran, olcut))
    for etiket, m in (("A", a), ("B", c)):
        print("  %s  t:%-12s tur:%-10s kaynak:%s"
              % (etiket, m.get("t"), m.get("tur", "—"),
                 str(m.get("kaynak", "—"))[:34]))
        print("     b: %s" % str(m.get("b", ""))[:150])
        if m.get("d"):
            print("     d: %s" % str(m["d"])[:150])
        print("     _kaynak dosya: %s" % m.get("_kaynak", "—"))
    detay.append({"yil": yil, "oran": round(oran, 3), "olcut": str(olcut),
                  "A": {k: str(v)[:200] for k, v in a.items()
                        if k in ("t", "b", "d", "tur", "kaynak", "_kaynak")},
                  "B": {k: str(v)[:200] for k, v in c.items()
                        if k in ("t", "b", "d", "tur", "kaynak", "_kaynak")}})

json.dump({"_NOT": ("Mükerrer madde ihlal kovası — 3 şüpheli çift. "
                    "`denetle.mukerrer_maddeler` DOĞRUDAN çağrıldı. "
                    "Öngörü ölçümden ÖNCE docstring'e yazıldı."),
           "toplam": len(bulunan), "kesin": len(kesin), "zayif": len(zayif),
           "detay": detay},
          open(os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-MUKERRER-0907.json"),
               "w", encoding="utf-8", newline=""), ensure_ascii=False, indent=1)
print("\n[YAZILDI] denetim/OLCUM-DEGISMEZ3-MUKERRER-0907.json")
