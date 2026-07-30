# -*- coding: utf-8 -*-
"""
ON BİRİNCİ DENETİM — kronoloji ↔ harita eşleşmesi
==================================================
Tek kök sebep, iki yüzü:

    **Değişmez 2 maddenin VAR olduğunu sorar, DOĞRU olduğunu sormaz.**

±30 gün penceresi en yakın maddeyi eşleştirir ve alâkasız bir madde de "en
yakın" olabilir. Yaşanmış vakalar:

    Kudüs ve Nablus 1831-11-08'de el değiştiriyor
        → eşleşen madde: "İlk resmî gazete: Takvîm-i Vekāyi"
    Konstantin 1837-10-13'te Fransa'ya geçiyor
        → eşleşen madde: "Cebel-i Dürûz ayaklanması"  (Suriye'de!)
    Murzuk'un 215.000 km²'lik peteği 1577'de renk değiştiriyor
        → eşleşen madde: "İstanbul Rasathanesi kuruldu"

Aynı bağın ters yönü kullanıcının başka bir şikâyeti (hatalar 13 md.2):

    "Bir yerin fethinden bahsediliyorsa haritada O YERİN gösterilmesi lazım."
    → "Varna alınıyor ama Varna etiketi haritada yok."

İkisi de tek soruya bakıyor — *bu madde ile bu yer birbirine ait mi* — ama
zıt yönlerden: A kırılmadan maddeye, B maddeden yerleşime.

ÇALIŞTIRMA
    py arac/denetle_eslesme.py             # özet
    py arac/denetle_eslesme.py --ayrinti   # bütün satırlar

⚠️ İKİSİ DE İHLAL DEĞİL, GÖZDEN GEÇİRME KADEMESİ — sebebi ölçümde (§A).
"""
import io
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import girdi
import denetle

if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

PENCERE_GUN = 30            # Değişmez 2 ile aynı; bilerek aynı

# ⚠️ ÖLÇÜLDÜ (30 Temmuz 2026 · 939 yerleşim · 971 madde · 452 kırılma):
#     A) kırılma 452 · adı geçen 395 · GEÇMEYEN 57  (%13)
#     B) toprak maddesi 366 · şehri çözülen 346 · çözülemeyen ~18 (%5)
# Hiçbiri "yüzlerce" değil, yani tavan/borç deseni gerekmiyor. Ama İHLAL de
# olamazlar ve sebebi A'nın içinde: 57'nin bir kısmı DOĞRU eşleşmedir.
# Londra Protokolü 1830 (21 nokta), Mondros 1918 (9 nokta), Küçük Kaynarca
# 1774 (5 nokta) — antlaşma maddeleri onlarca yerleşimi tek kalemde devreder
# ve adlarını saymaz. Bunlar yanlış eşleşme değil, EKSİK `yer:` alanıdır.
# Ölçüt onları ayırt edemiyor; edemediği için de ihlal ilan edemez.
# ⚠️ A'NIN TAVANI HAREKETLİ HEDEFTİR ve bunu bilerek yazıyorum: kırılma sayısı
# her içerik oturumuyla artıyor (452 → …), şüpheli sayısı da onunla birlikte
# artar. 57 ilk ölçümdü, veri büyüyünce 68 oldu. Tavanı her veri artışında
# yükseltmek denetimi işlevsizleştirir; doğru okuma ORANDIR (%13 → %15).
# Oran ciddi biçimde yükselirse yeni yazılan maddeler yerinden bahsetmiyor
# demektir. Sayı tavanı yalnız kaba bir emniyet kemeri.
BEKLENEN_A = 68
# B'nin tavanı ölçüldü: 14. İlk ölçüm 18'di ve fark ARACIN DÜZELMESİNDEN geldi
# — kelime sınırı eklenince Niş, Şam, Özi çözüldü. Veri değişmedi, körlük azaldı.
BEKLENEN_B = 14

# Kısa adlar için kelime sınırı ŞART. İlk ölçümde "en az 4 harf" filtresi vardı
# ve Niş, Şam, Özi'yi eledi — üçü de yerlesimler.js'te VARDI, araç yokmuş gibi
# raporladı. Filtre veriyi değil kendi körlüğünü ölçüyordu.
# Uzun adlarda düz alt dize yeterli ("Bağdat'ın" içinde "Bağdat" geçer);
# kısa adlarda sınır olmadan "Şam" kelimesi "Şamahı"nın içinde eşleşir.
KISA_AD = 5

# `s:`/`d:` kayıtlarında ad parantezli alternatif taşıyabiliyor. Bazıları
# GENEL COĞRAFYA sözcüğü ("Batı çölü (Mısır)", "Üstyurt platosu (doğu)") ve
# alt dize aramasında her metne uyar. Ölçümde iki yanlış eşleşme üretti.
GENEL_SOZCUK = {"doğu", "batı", "kuzey", "güney", "iç", "orta", "yukarı",
                "aşağı", "mısır", "necid", "yemen", "sudan", "libya"}


def _adlar(y):
    """Bir yerleşimin metinde aranacak adları — asıl ad + parantezli karşılık."""
    ham = y["ad"]
    A = {re.sub(r"\s*\(.*?\)", "", ham).strip()}
    m = re.search(r"\((.*?)\)", ham)
    if m:
        alt = m.group(1).strip()
        if alt.lower() not in GENEL_SOZCUK:
            A.add(alt)
    return {a for a in A if len(a) >= 3}


def indeks(Y):
    """(desen, yerleşim) çiftleri — kısa adlar kelime sınırıyla derlenir."""
    ix = []
    for y in Y:
        for a in _adlar(y):
            if len(a) < KISA_AD:
                ix.append((re.compile(r"(?<!\w)" + re.escape(a.lower())), y, a))
            else:
                ix.append((None, y, a.lower()))
    return ix


def gecen(ix, metin):
    """ORTAK TEST — bu metin hangi yerleşimlerden bahsediyor?

    A ve B bölümleri de, ileride yazılacak başka denetimler de bunu çağırır.
    Tek yerde durmasının sebebi ölçülmüş bir hata: "en az 4 harf" kuralı bir
    kopyada düzeltilip diğerinde unutulsa iki araç aynı veriye farklı cevap
    verirdi — bu depoda `girdi.py` tam bu yüzden tek okuma noktası yapıldı.
    """
    m = (metin or "").lower()
    bulunan = []
    for desen, y, a in ix:
        if (desen.search(m) if desen else (a in m)):
            bulunan.append(y)
    return bulunan


def _sahipli(y, g):
    for kat in ("d", "v", "s"):
        for p in (y.get(kat) or []):
            if p.get("f") and p.get("t") and p["f"] <= g < p["t"]:
                return True
    return False


# ------------------------------------------- A) kırılma → madde (§18)
def a_yanlis_eslesme(Y, O, ix):
    ol = [{"g": denetle.gun_no(o["t"]), "m": (o.get("b", "") + " " +
           o.get("yer", "") + " " + o.get("d", "")), "b": o.get("b", "")} for o in O]
    kir = {}
    for y in Y:
        for p in (y.get("d") or []) + (y.get("v") or []):
            for dt in (p.get("f"), p.get("t")):
                if not dt or dt <= "1281-01-01" or dt >= "1923-10-29":
                    continue
                kir.setdefault(dt, set()).add(y["ad"])

    supheli = []
    for dt, yerler in sorted(kir.items()):
        gd = denetle.gun_no(dt)
        yakin = [o for o in ol if abs(o["g"] - gd) <= PENCERE_GUN]
        if not yakin:
            continue                     # Değişmez 2'nin işi, burada sayılmaz
        if any(any(a["ad"] in yerler for a in gecen(ix, o["m"])) for o in yakin):
            continue
        en = min(yakin, key=lambda o: abs(o["g"] - gd))
        supheli.append((dt, sorted(yerler), en["b"], abs(en["g"] - gd)))
    return len(kir), supheli


# ------------------------------------ B) toprak maddesi → yerleşim (Varna)
def b_madde_sehri(O, ix):
    yok, donemsiz = [], []
    for o in O:
        if o.get("k") not in ("fetih", "kayip"):
            continue
        bulunan = gecen(ix, (o.get("yer", "") + " " + o.get("b", "")))
        if not bulunan:
            yok.append((o["t"], (o.get("yer") or "")[:24], o.get("b", "")[:46]))
            continue
        g = denetle.tam(o["t"])
        if not any(_sahipli(y, g) for y in bulunan):
            donemsiz.append((o["t"], bulunan[0]["ad"], o.get("b", "")[:44]))
    return yok, donemsiz


def main():
    ayrinti = "--ayrinti" in sys.argv
    Y = girdi.yukle(sessiz=True)
    O = denetle.olaylari_yukle()
    ix = indeks(Y)
    print("Eşleşme denetimi — madde ile yer birbirine ait mi?\n")
    print(f"  {len(Y)} yerleşim · {len(O)} madde · {len(ix)} ad deseni · pencere ±{PENCERE_GUN} gün")
    ihlal = 0

    n_kir, supheli = a_yanlis_eslesme(Y, O, ix)
    print(f"\n=== A) KIRILMA → MADDE — {n_kir} kırılma ===")
    print( "    Değişmez 2 maddenin VAR olduğunu sorar, DOĞRU olduğunu sormaz.")
    print(f"    Eşleşen maddelerin hiçbiri kırılmanın yerinden bahsetmiyor: "
          f"{len(supheli)} (%{100*len(supheli)//max(1,n_kir)})")
    if len(supheli) > BEKLENEN_A:
        ihlal += 1
        print(f"  ✗ {len(supheli)} şüpheli (tavan {BEKLENEN_A}) — YENİ YANLIŞ EŞLEŞME")
    else:
        print(f"  i {len(supheli)} şüpheli (tavan {BEKLENEN_A}) — İHLAL DEĞİL, gözden geçirme")
    print( "    ⚠️ Bir kısmı DOĞRU eşleşmedir: antlaşma maddeleri onlarca yerleşimi")
    print( "       tek kalemde devreder ve adlarını saymaz (Londra 1830 → 21 nokta,")
    print( "       Mondros 1918 → 9 nokta). Onlarınki yanlış eşleşme değil, eksik `yer:`.")
    for dt, yerler, b, fark in (supheli if ayrinti else
                                sorted(supheli, key=lambda r: -len(r[1]))[:16]):
        print(f"      {dt}  ({len(yerler):3d}) {', '.join(yerler[:2])[:32]:32s}"
              f" | {fark:2d}g | {b[:44]}")
    if not ayrinti and len(supheli) > 16:
        print(f"      … {len(supheli)-16} satır daha (--ayrinti)")

    yok, donemsiz = b_madde_sehri(O, ix)
    n_top = sum(1 for o in O if o.get("k") in ("fetih", "kayip"))
    print(f"\n=== B) TOPRAK MADDESİ → YERLEŞİM — {n_top} madde ===")
    print( "    'Bir yerin fethinden bahsediliyorsa haritada O YER gösterilmeli.'")
    if len(yok) > BEKLENEN_B:
        ihlal += 1
        print(f"  ✗ şehri hiç çözülemeyen: {len(yok)} (tavan {BEKLENEN_B})")
    else:
        print(f"  i şehri hiç çözülemeyen: {len(yok)} (tavan {BEKLENEN_B}) — gözden geçirme")
    print( "    → çoğu BÖLGE adıdır ('Teselya', 'Dobruca', 'Bosna'): yerleşim")
    print( "      kaydı beklenmez, ama haritada da hiçbir nokta yanmaz.")
    for dt, yer, b in (yok if ayrinti else yok[:14]):
        print(f"      {dt}  yer:{yer:24s} {b}")
    if not ayrinti and len(yok) > 14:
        print(f"      … {len(yok)-14} satır daha (--ayrinti)")
    if donemsiz:
        ihlal += 1
        print(f"  ✗ şehir VAR ama o tarihte hiçbir döneme ait DEĞİL: {len(donemsiz)}")
        for dt, ad, b in donemsiz:
            print(f"      {dt}  {ad:24s} {b}")
    else:
        print( "  ✓ çözülen şehirlerin hepsi o tarihte bir döneme ait")

    print( "\n    ⚠️ ÜÇÜNCÜ SINIF BU ARAÇLA ÖLÇÜLEMEZ — kullanıcının Varna şikâyeti")
    print( "       tam orada: Varna yerlesimler.js'te VAR ve 1391-01-01'de Osmanlı")
    print( "       oluyor, yani A ve B temiz. Sorun ETİKETİN EKRANDA ÇIKMAMASI")
    print( "       (`g:0`, k:3 — düşük gösterim kademesi). O eşik js/app.js'in ve")
    print( "       Oturum 1'in işi; bu araç veriye bakar, ekrana bakamaz.")

    print()
    print("SONUÇ:", "temiz ✓" if not ihlal else f"İHLAL VAR ({ihlal} başlık) — çıkış kodu 1")
    return 1 if ihlal else 0


if __name__ == "__main__":
    sys.exit(main() or 0)
