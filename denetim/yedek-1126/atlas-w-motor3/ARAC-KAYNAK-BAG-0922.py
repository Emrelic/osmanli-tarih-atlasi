# -*- coding: utf-8 -*-
"""`kaynak:` alanı TDV adresine OLDUĞU GİBİ ekleniyor — kaçı slug değil?

BULGU (EKOKUMA-TOPLUM-0075 ihbar etti, koordinatör doğruladı): `js/app.js`
İKİ yerde aynı şeyi yapıyor —

    kaynakEl.href = "https://islamansiklopedisi.org.tr/" + o.kaynak;   (:7128)
    a.href        = "https://islamansiklopedisi.org.tr/" + o.kaynak;   (:9378)

ve ikisi de bağlantının metnini **"📖 TDV İslâm Ansiklopedisi"** yazıyor.

🔴 KUSUR KIRIK BAĞLANTIDAN AĞIR: `kaynak:` alanında TDV slug'ı DEĞİL de
   akademik bir künye varsa (ör. "Gencer 2016, Uluslararası Sosyal
   Araştırmalar 9/42") ekran o kaynağı **TDV'ye atfediyor**. Yani okur,
   TDV'nin söylemediği bir şeyi TDV söylemiş sanıyor. Projenin kaynak
   kuralı bunun tam tersini söyler: TDV kapsamadığı yerde akademik kaynak
   MEŞRUDUR ve `kaynak:` alanına AÇIKÇA yazılır (CLAUDE.md §4). Yani veri
   doğru davranmış, EKRAN yanlış etiketlemiş.

ÖLÇÜT — TDV slug'ı neye benzer: küçük harf, rakam, tire; boşluk YOK.
`ordu--sehir` gibi çift tire meşru. Bunun dışındaki her şey (boşluk,
büyük harf, virgül, nokta, eğik çizgi, parantez, "bulunamad") slug
DEĞİLDİR ve o bağlantı yanlış yere gider.

⚠️ NE ÖLÇMEZ: slug biçimine uyan bir değerin TDV'de GERÇEKTEN var olup
   olmadığını sormaz (ölü slug 302 verir — D211 ①). Bu ölçüm bir ALT
   SINIRDIR: gerçek kırık bağlantı sayısı buradan büyük olabilir.

Koşu:  py denetim/ARAC-KAYNAK-BAG-0922.py
"""
import os
import re
import sys
from collections import Counter

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

SLUG = re.compile(r"^[a-z0-9-]+$")


def sinifla(k):
    if not k:
        return None
    k = str(k).strip()
    if not k:
        return "bos"
    if "bulunamad" in k.lower():
        return "bulunamadi yazili"
    if SLUG.match(k):
        return "slug (biçim uygun)"
    if " " in k:
        return "boşluk içeriyor — künye/serbest metin"
    return "başka (büyük harf · noktalama)"


def main():
    try:
        O = girdi.oku_olaylar() if hasattr(girdi, "oku_olaylar") else None
    except Exception:
        O = None
    if O is None:
        # `girdi.py` olay okuyucusu yoksa `denetle.py`nin kendi yükleyicisi.
        sys.path.insert(0, os.path.join(KOK, "arac"))
        import denetle  # noqa: E402
        O = denetle.olaylari_yukle()
    print(f"okunan madde: {len(O):,}")

    sayac = Counter()
    ornek = {}
    for o in O:
        s = sinifla(o.get("kaynak"))
        if s is None:
            sayac["kaynak alanı YOK"] += 1
            continue
        sayac[s] += 1
        ornek.setdefault(s, []).append((o.get("b", "?")[:40], str(o.get("kaynak"))[:70]))

    print()
    for s, n in sayac.most_common():
        print(f"  {n:6}  {s}")
    kirik = sum(n for s, n in sayac.items()
                if s not in ("slug (biçim uygun)", "kaynak alanı YOK"))
    basan = sum(n for s, n in sayac.items() if s != "kaynak alanı YOK")
    print(f"\n🔴 TDV BAĞLANTISI BASILAN madde: {basan:,}")
    print(f"🔴 bunların SLUG OLMAYANI: {kirik:,} "
          f"(%{100.0 * kirik / basan:.1f} — bağlantı yanlış yere gider "
          f"ve kaynak TDV'ye atfedilir)")
    for s in sayac:
        if s in ("slug (biçim uygun)", "kaynak alanı YOK"):
            continue
        print(f"\n── {s} — ilk 8 örnek")
        for b, k in ornek[s][:8]:
            print(f"   {b:<42} kaynak={k!r}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
