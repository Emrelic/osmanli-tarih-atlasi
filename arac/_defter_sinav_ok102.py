# -*- coding: utf-8 -*-
"""
DEFTER ANAHTARLARININ C13 SINAVI — §A · §B · §C
================================================
2 Eylül 2026'da üç değişiklik yapıldı:
    §A  `_a_kimlik`  "tarih|kırılan ilk yer" → "tarih"      (KUSUR DÜZELTİLDİ)
    §B  `_b_kimlik`  "tarih|yer:"            → "YIL|yer:"   (KUSUR DÜZELTİLDİ)
    §C  `_c_kimlik`  YENİ: "tarih|yer_id"                   (DEFTER AÇILDI)

🔴 `CLAUDE.md §11` (`C13`): *"yeni yazılan denetim, İKİ YÖNDE DE sınanmadan
   'çalışıyor' sayılmaz… gerçek veride o kusur yoksa dal ZORLA ateşlenir."*
Bugün gerçek veride iki defter de YENİ 0 / KAPANAN 0 — yani ateşleme yolu
kendiliğinden koşulamaz. Zorlanıyor: defter ile karşılaştırılan küme
hafızada bozularak nöbetçinin ötmesi bekleniyor.

🔴 VE ÜÇÜNCÜ BİR DAL VAR, asıl olan bu: **KARARLILIK.**
§A'nın kusuru "çakışma" değildi — anahtarın BULGU DEĞİŞMEDEN değişmesiydi.
O yüzden yalnız "yeni/kapanan sayıyor mu" diye sormak yetmez;
*"aynı bulgu, değişmiş yan bilgiyle, AYNI anahtarı veriyor mu"* diye de
sorulur. §A'da 18 sahte YENİ tam bu soruyu kimse sormadığı için doğdu.

⚠️ Hiçbir dal `data/` dosyalarına DOKUNMAZ; bozma yalnız hafızadadır.

ÇALIŞTIRMA
    py arac/_defter_sinav_ok102.py      # çıkış kodu 0 = dokuz dal da geçti
"""
import copy
import io
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import girdi
import denetle
import denetle_eslesme as esl

if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")


def main():
    kod = 0
    Y = girdi.yukle(sessiz=True)
    O = denetle.olaylari_yukle()
    ix = esl.indeks(Y)
    _, supheli = esl.a_yanlis_eslesme(Y, O, ix)
    _, eksik = esl.c_coklu_yer(Y, O, ix)

    print("=" * 74)
    print("DEFTER SINAVI — §A anahtarı (düzeltildi) · §C defteri (yeni)")
    print("=" * 74)
    print("  §A şüpheli %d · §C eksik %d" % (len(supheli), len(eksik)))

    # ── ① GEÇME — gerçek veride iki defter de sessiz olmalı ─────────────
    ya, ka, ba = esl.a_defteri(supheli, yaz=False)
    yc, kc, bc = esl.c_defteri(eksik, O, yaz=False)
    if not ya and not ka and ba:
        print("  🟢 GEÇME §A ✓ defter %d kayıt · YENİ 0 · KAPANAN 0" % ba)
    else:
        print("  🔴 GEÇME §A ✗ YENİ %d · KAPANAN %d (defter %d)" % (len(ya), len(ka), ba))
        kod = 1
    if not yc and not kc and bc:
        print("  🟢 GEÇME §C ✓ defter %d kayıt · YENİ 0 · KAPANAN 0" % bc)
    else:
        print("  🔴 GEÇME §C ✗ YENİ %d · KAPANAN %d (defter %d)" % (len(yc), len(kc), bc))
        kod = 1

    # ── ② ATEŞLEME — bir satır SİLİNİR, KAPANAN görünmeli ───────────────
    ya2, ka2, _ = esl.a_defteri(supheli[1:], yaz=False)
    if len(ka2) == 1 and not ya2:
        print("  🟢 ATEŞLEME §A ✓ bir şüpheli silindi → KAPANAN 1, YENİ 0 (%s)" % ka2[0])
    else:
        print("  🔴 ATEŞLEME §A ✗ YENİ %d · KAPANAN %d" % (len(ya2), len(ka2)))
        kod = 1
    yc2, kc2, _ = esl.c_defteri(eksik[1:], O, yaz=False)
    if len(kc2) == 1 and not yc2:
        print("  🟢 ATEŞLEME §C ✓ bir satır silindi → KAPANAN 1, YENİ 0 (%s)" % kc2[0])
    else:
        print("  🔴 ATEŞLEME §C ✗ YENİ %d · KAPANAN %d" % (len(yc2), len(kc2)))
        kod = 1

    # ── ③ KARARLILIK §A — ASIL DAL. "İlk yer" değişince anahtar DEĞİŞMEMELİ
    # §A'nın 2 Eylül'de düzeltilen kusuru buydu: o güne yeni bir yerleşim
    # eklenince alfabetik ilk sıra kayıyor, bulgu değişmediği hâlde anahtar
    # değişiyor ve 1 KAPANAN + 1 YENİ doğuyordu (ölçüldü: 18 vaka).
    bozuk = copy.deepcopy(supheli)
    for i, k in enumerate(bozuk):
        if k[1]:
            yeni_yerler = ["AAA-SAHTE-YERLESIM"] + list(k[1])
            bozuk[i] = (k[0], yeni_yerler) + tuple(k[2:])
            break
    ya3, ka3, _ = esl.a_defteri(bozuk, yaz=False)
    if not ya3 and not ka3:
        print("  🟢 KARARLILIK §A ✓ 'ilk yer' değişti, anahtar DEĞİŞMEDİ "
              "(eski kusur GERİ GELMEZ)")
    else:
        print("  🔴 KARARLILIK §A ✗ ilk yer değişince YENİ %d · KAPANAN %d — "
              "ESKİ KUSUR GERİ GELDİ" % (len(ya3), len(ka3)))
        kod = 1

    # ── ③b §B — geçme · ateşleme · ve KUSUR TESTİ (tarih hassasiyeti) ────
    # §B'nin anahtarı 2 Eylül'de `tarih|yer:` → `YIL|yer:` oldu; sebebi
    # ölçülmüş bir vaka (1783-04 → 1783-04-19 aynı satırı iki kez saydırdı).
    # Bu dal onun GERİ GELMEDİĞİNİ sınar.
    yok_b, _ = esl.b_madde_sehri(O, ix)
    yb, kb, bb = esl.b_defteri(yok_b, yaz=False)
    if not yb and not kb and bb:
        print("  🟢 GEÇME §B ✓ defter %d kayıt · YENİ 0 · KAPANAN 0" % bb)
    else:
        print("  🔴 GEÇME §B ✗ YENİ %d · KAPANAN %d (defter %d)" % (len(yb), len(kb), bb))
        kod = 1
    yb2, kb2, _ = esl.b_defteri(yok_b[1:], yaz=False)
    if len(kb2) == 1 and not yb2:
        print("  🟢 ATEŞLEME §B ✓ bir satır silindi → KAPANAN 1, YENİ 0 (%s)" % kb2[0])
    else:
        print("  🔴 ATEŞLEME §B ✗ YENİ %d · KAPANAN %d" % (len(yb2), len(kb2)))
        kod = 1
    # KUSUR TESTİ: bir satırın tarihi GÜNDEN AYA döndürülür (1783-04-19 →
    # 1783-04). Eski anahtarda bu 1 KAPANAN + 1 YENİ üretiyordu.
    bozuk_b = [(r[0][:7], r[1], r[2]) if r[0] == "1783-04-19" else r for r in yok_b]
    yb3, kb3, _ = esl.b_defteri(bozuk_b, yaz=False)
    if not yb3 and not kb3:
        print("  🟢 KUSUR TESTİ §B ✓ tarih güne→aya döndü, anahtar DEĞİŞMEDİ "
              "(1783-04-19|Kırım vakası GERİ GELMEZ)")
    else:
        print("  🔴 KUSUR TESTİ §B ✗ YENİ %d · KAPANAN %d — ESKİ KUSUR GERİ GELDİ"
              % (len(yb3), len(kb3)))
        kod = 1

    # ── ④ KARARLILIK §C — "ilk eksik yer" değişince anahtar DEĞİŞMEMELİ ──
    bozuk_c = copy.deepcopy(eksik)
    for i, r in enumerate(bozuk_c):
        if r[5]:
            bozuk_c[i] = tuple(r[:5]) + (["AAA-SAHTE-YERLESIM"] + list(r[5]),)
            break
    yc3, kc3, _ = esl.c_defteri(bozuk_c, O, yaz=False)
    if not yc3 and not kc3:
        print("  🟢 KARARLILIK §C ✓ 'ilk eksik yer' değişti, anahtar DEĞİŞMEDİ "
              "(§A'nın kusuru §C'ye TAŞINMADI)")
    else:
        print("  🔴 KARARLILIK §C ✗ YENİ %d · KAPANAN %d — kusur taşınmış"
              % (len(yc3), len(kc3)))
        kod = 1

    print()
    print("SONUÇ:", "dokuz dal da geçti ✓" if not kod else "🔴 SINAV BAŞARISIZ")
    return kod


if __name__ == "__main__":
    sys.exit(main())
