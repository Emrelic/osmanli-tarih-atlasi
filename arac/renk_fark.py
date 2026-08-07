# -*- coding: utf-8 -*-
"""RENK FARK — bir koşudan ÖNCE ve SONRA renk denetimini karşılaştırır.

⚠️ NEDEN VAR (7 Ağustos 2026, RENK 2):
   `renk_olc.py` "0 çakışma" der ve bu **yetmez**. Aynı gün üç kez şu oldu:
   denetim temizken veri değişti ve yeni bir çift eşiğin altına düştü —
   hiçbir hex'e dokunulmadan (`cungar↔buhara` · `norvec↔portekiz` ·
   `cohor↔kamboc`). Sayı sabit kalıp İÇERİK değişebilir: iki çift kapanıp
   iki yeni çift açılırsa toplam yine "0 çakışma" görünür.

   ⇒ Bu araç SAYIYA değil KÜMEYE bakar: hangi komşuluk çifti DOĞDU, hangisi
     ÖLDÜ, hangi ΔE eşiği geçti/geçemedi.

   📌 Ve iki nöbetçi FARKLI şeyi ölçer — karıştırılırsa yanlış yerde aranır:
     renk_olc    komşuluğu NOKTALARDAN kurar (Voronoi + gün düzeyinde
                 örtüşme). Nehir/dağ/engel poligonu bunu ETKİLEMEZ.
                 Kusur burada çıkarsa sebep NOKTA ya da DÖNEM değişimidir.
     renk_cikti  ÇİZİLİ gövdelerin değmesine bakar. Nehir ve engeller gövde
                 şeklini değiştirir ⇒ GEOMETRİ değişince kusur BURADA çıkar.

KOMUT
   py arac/renk_fark.py --taban        koşudan ÖNCE: durumu kaydet
   py arac/renk_fark.py                koşudan SONRA: farkı bas
"""
import io
import json
import os
import sys

# ⚠️ stdout SARILMAZ — `renk_olc` import anında kendisi sarıyor. Burada da
#   sarılırsa iki TextIOWrapper aynı `sys.stdout.buffer`ı devralır, ilki
#   çöp toplamada kapanır ve ilk `print` "I/O operation on closed file"
#   ile patlar. (Bu tuzağa bugün üç kez düşüldü: iki scratchpad betiği ve
#   bu aletin ilk hâli. Sarmalama İTHAL EDİLEN modülün işi.)
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import renk_olc as R          # noqa: E402  — stdout'u bu import sarıyor

TABAN = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                     "denetim", "renk-taban.json")


def durum():
    """(komşu çiftleri, eşikaltı çiftler, kimlik→hex) — hepsi ölçülür."""
    k, n = R.komsuluk()
    cift, cak = {}, {}
    for a in sorted(R.BOYALAR):
        La = R.gorunen(a)
        for b in sorted(k.get(a, ())):
            if b <= a or b not in R.BOYALAR:
                continue
            d = R.dE(La, R.gorunen(b))
            cift["%s|%s" % (a, b)] = round(d, 1)
            if d < R.DE_KOMSU:
                cak["%s|%s" % (a, b)] = round(d, 1)
    return {"nokta": n, "kimlik": len(R.BOYALAR), "cift": cift, "cakisma": cak,
            "hex": {a: v[1].lower() for a, v in R.BOYALAR.items()}}


def yaz():
    d = durum()
    os.makedirs(os.path.dirname(TABAN), exist_ok=True)
    # 🔴 ÖNCE .tmp, SONRA atomik taşı. Kesip-yazan tek adım yarıda kalırsa
    #   veri kaybıdır; bu proje o hatayı bir kez yaşadı (6 Ağustos, ilerleme
    #   dosyası bir commit boyunca boşaldı).
    io.open(TABAN + ".tmp", "w", encoding="utf-8").write(
        json.dumps(d, ensure_ascii=False))
    os.replace(TABAN + ".tmp", TABAN)
    print("taban yazıldı: %s" % TABAN)
    print("  %d nokta · %d kimlik · %d komşu çifti · %d çakışma"
          % (d["nokta"], d["kimlik"], len(d["cift"]), len(d["cakisma"])))


def fark():
    if not os.path.exists(TABAN):
        raise SystemExit("!! taban yok: %s — önce --taban ile kaydet "
                         "('fark yok' ile 'karşılaştırmadım' aynı görünemez)"
                         % TABAN)
    eski = json.loads(io.open(TABAN, encoding="utf-8").read())
    yeni = durum()

    print("=" * 72)
    print("%-22s %10s → %-10s" % ("", "TABAN", "ŞİMDİ"))
    for ad, an in (("nokta", "nokta"), ("kimlik", "kimlik")):
        print("%-22s %10s → %-10s%s"
              % (ad, eski[an], yeni[an],
                 "" if eski[an] == yeni[an] else "   ← DEĞİŞTİ"))
    print("%-22s %10d → %-10d" % ("komşu çifti", len(eski["cift"]),
                                  len(yeni["cift"])))
    print("%-22s %10d → %-10d" % ("çakışma", len(eski["cakisma"]),
                                  len(yeni["cakisma"])))

    ec, yc = set(eski["cift"]), set(yeni["cift"])
    dogan, olen = sorted(yc - ec), sorted(ec - yc)
    print("\n" + "=" * 72)
    print("KOMŞULUK ÇİFTİ — doğan %d · ölen %d" % (len(dogan), len(olen)))
    print("=" * 72)
    # ⚠️ Doğan çiftlerin YALNIZ eşiği geçemeyenleri kusurdur; ötekiler bilgi.
    kotu = [c for c in dogan if yeni["cift"][c] < R.DE_KOMSU]
    print("  doğan ve ΔE < %.0f  →  %d" % (R.DE_KOMSU, len(kotu)))
    for c in kotu:
        print("    🔴 %-46s ΔE %5.1f" % (c.replace("|", "  ↔  "),
                                         yeni["cift"][c]))
    if dogan and not kotu:
        print("    (doğan çiftlerin hepsi eşiğin üstünde)")

    # renk değişmeden eşiğin altına düşenler — asıl aranan sınıf
    dusen = [c for c in (ec & yc)
             if eski["cift"][c] >= R.DE_KOMSU > yeni["cift"][c]]
    print("\n  VAR OLAN çiftten eşiğin ALTINA düşen → %d" % len(dusen))
    for c in dusen:
        print("    🔴 %-40s %5.1f → %5.1f"
              % (c.replace("|", "  ↔  "), eski["cift"][c], yeni["cift"][c]))

    deg = [a for a in yeni["hex"]
           if a in eski["hex"] and eski["hex"][a] != yeni["hex"][a]]
    print("\n  hex'i değişen kimlik: %d%s"
          % (len(deg), ("  — " + ", ".join(deg)) if deg else ""))
    yeni_k = sorted(set(yeni["hex"]) - set(eski["hex"]))
    print("  yeni kimlik: %d%s"
          % (len(yeni_k), ("  — " + ", ".join(yeni_k[:8])
                           + ("…" if len(yeni_k) > 8 else "")) if yeni_k else ""))

    print("\n" + "=" * 72)
    print("  " + ("✓ TEMİZ — eşiğin altına düşen ya da doğan kusur yok"
                  if not kotu and not dusen
                  else "🔴 %d doğan kusur · %d düşen çift" % (len(kotu), len(dusen))))
    return 1 if (kotu or dusen) else 0


if __name__ == "__main__":
    if "--taban" in sys.argv:
        yaz()
    else:
        sys.exit(fark())
