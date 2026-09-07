# -*- coding: utf-8 -*-
u"""MÜKERRER ANAHTAR TARAMASI — bir nesnede aynı alan İKİ KEZ.

    SINAV-KOSU8-0907 · sevk: 1.MURAT · 7-8 Eylül 2026 · 🔴 SALT OKUR

`Mersin` kaydında (`yerlesimler_ek27.js`) aynı nesnede **iki `s:` ve iki
`d:`** anahtarı bulundu. JS'te ve JSON'da **sonuncusu kazanır** ⇒ yazılan
düzeltme motora hiç girmiyor, ve **hiçbir denetim ötmüyor.**

## NİÇİN HİÇBİR ALET GÖRMÜYOR
```
eval / JSON.parse / json.loads   → çifti SESSİZCE çöker, son değeri tutar
denetle.py                       → çökmüş sonucu denetler, kaydı değil
girdi.yukle()                    → aynısı
⇒ kusur AYRIŞTIRICININ İÇİNDE kayboluyor
```
📌 Bu, bugün üç alette ölçülen dersin **veri** yüzü: *bir yapıyı dolaşan
her kısayol, o yapının bir boyutunu düşürür.* Burada boyutu düşüren şey
bir kısayol değil, **nesne semantiğinin kendisi.**

## YÖNTEM — KENDİ AYRIŞTIRICIMI YAZMIYORUM
Bu proje *"veri zaten bir dilde yazılıysa, o dilin yorumlayıcısını
çağır"* dersini **sekiz kez** öğrendi. O yüzden:
```
· `girdi.oku_dosya()` AYNEN kullanılıyor — dosya bulma, değişken adı
  çıkarma, JS→JSON dönüşümü hepsi projenin kendi kodu
· YALNIZ son adım (`json.loads`) geçici olarak sarmalanıyor:
      json.loads(j, object_pairs_hook=<çift yakalayıcı>)
  `object_pairs_hook` çiftleri ÇÖKMEDEN ÖNCE görür — mükerrer anahtarı
  yakalamanın tek dürüst yolu bu.
· Sarmalama YALNIZ bu sürecin belleğinde; hiçbir dosya değişmiyor.
```
⚠️ Ve `object_pairs_hook` **her** nesne için çağrılır (iç içe olanlar
dâhil) ⇒ kaydın kimliği (`ad`) aynı çift listesinden okunuyor; yoksa
`(iç nesne)` diye damgalanıyor.

    py denetim/SINAV-KOSU8-MUKERRERANAHTAR-0907.py
    py denetim/SINAV-KOSU8-MUKERRERANAHTAR-0907.py --atesle
Bu alet hiçbir dosyaya yazmaz.
"""
from __future__ import unicode_literals

import io
import json
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)

BULGU = []          # (dosya, ad, anahtar, kaç_kez, düşen_değer, kalan_değer)
_SU_ANKI_DOSYA = [None]


def _cift_yakala(ciftler):
    u"""`object_pairs_hook` — çiftler ÇÖKMEDEN önce görülür."""
    gorulen = {}
    for k, v in ciftler:
        gorulen.setdefault(k, []).append(v)
    for k, degerler in gorulen.items():
        if len(degerler) > 1:
            ad = None
            for kk, vv in ciftler:
                if kk == "ad" and isinstance(vv, str):
                    ad = vv
                    break
            BULGU.append({
                "dosya": _SU_ANKI_DOSYA[0],
                "ad": ad or "(iç nesne)",
                "anahtar": k,
                "kez": len(degerler),
                "dusen": degerler[:-1],
                "kalan": degerler[-1],
            })
    return dict(ciftler)          # normal davranış: sonuncusu kazanır


def tara():
    import girdi
    _orij = json.loads

    def _sarmal(s, **kw):
        kw.pop("object_pairs_hook", None)
        return _orij(s, object_pairs_hook=_cift_yakala, **kw)

    girdi.json.loads = _sarmal
    try:
        for dosya in girdi.GIRDI_DOSYALARI:
            _SU_ANKI_DOSYA[0] = dosya
            try:
                girdi.oku_dosya(dosya)
            except Exception as e:                # noqa: BLE001
                print("   ⚫ %s OKUNAMADI: %s" % (dosya, str(e)[:80]))
    finally:
        girdi.json.loads = _orij
    return len(girdi.GIRDI_DOSYALARI)


def main():
    if "--atesle" in sys.argv:
        return atesle()

    print("═" * 78)
    print("MÜKERRER ANAHTAR TARAMASI — bir nesnede aynı alan İKİ KEZ")
    print("═" * 78)
    n = tara()
    print("taranan dosya: %d" % n)
    print("mükerrer anahtar taşıyan nesne: %d" % len(BULGU))
    print("")

    if not BULGU:
        print("🟢 Hiçbir kayıtta mükerrer anahtar YOK.")
        print("⚠️ Ama bu «hiç yok» DEĞİL: tarama `girdi.GIRDI_DOSYALARI`nın")
        print("   okuduğu dosyalarla sınırlı. `denetim/` altındaki bekleyen")
        print("   yamalar bu evrende DEĞİL.")
        return 0

    # ── kayıt bazında grupla
    kayitlar = {}
    for b in BULGU:
        anahtar = (b["dosya"], b["ad"])
        kayitlar.setdefault(anahtar, []).append(b)

    print("🔴 ETKİLENEN KAYIT: %d" % len(kayitlar))
    print("")
    for (dosya, ad), liste in sorted(kayitlar.items()):
        print("─" * 78)
        print("🔴 %s   ← %s" % (ad, dosya))
        for b in liste:
            print("   `%s` %d KEZ" % (b["anahtar"], b["kez"]))
            for d in b["dusen"]:
                print("      🔴 DÜŞEN : %s" % _ozet(d))
            print("      🟢 KALAN : %s" % _ozet(b["kalan"]))
    print("")
    print("─" * 78)
    say = {}
    for b in BULGU:
        say[b["anahtar"]] = say.get(b["anahtar"], 0) + 1
    print("ANAHTAR DAĞILIMI: %s"
          % " · ".join("%s %d" % (k, v)
                       for k, v in sorted(say.items(), key=lambda x: -x[1])))
    print("")
    print("⚠️ «DÜŞEN» satırları MOTORA HİÇ GİRMEYEN veridir. Yazılmış,")
    print("   commit'lenmiş, ve sessizce yok sayılmış.")
    print("🔴 Bu bir ÖNERİ DEĞİL: düzeltme `data/` işidir ve `1.MURAT`ın")
    print("   kalemi (`§7`). Koşu 8 sürerken `data/` DONUK.")
    return 1


def _ozet(v):
    try:
        s = json.dumps(v, ensure_ascii=False)
    except Exception:                              # noqa: BLE001
        s = repr(v)
    return s if len(s) <= 150 else s[:147] + "…"


def atesle():
    u"""C13 ② — çift yakalayıcı gerçekten ötüyor mu?"""
    print("C13 ② ATEŞLEME — `object_pairs_hook` çift yakalıyor mu")
    d = []
    del BULGU[:]
    _SU_ANKI_DOSYA[0] = "(fikstür)"
    # ⓐ mükerrer anahtar TAŞIYAN metin
    json.loads('{"ad":"X","s":[1],"d":2,"s":[9]}',
               object_pairs_hook=_cift_yakala)
    d.append(("mükerrer `s:` YAKALANDI", len(BULGU) == 1, True,
              BULGU[0]["anahtar"] if BULGU else ""))
    d.append(("düşen değer DOĞRU", bool(BULGU) and BULGU[0]["dusen"] == [[1]],
              True, str(BULGU[0]["dusen"]) if BULGU else ""))
    d.append(("kalan değer DOĞRU", bool(BULGU) and BULGU[0]["kalan"] == [9],
              True, str(BULGU[0]["kalan"]) if BULGU else ""))
    d.append(("kayıt adı okundu", bool(BULGU) and BULGU[0]["ad"] == "X",
              True, BULGU[0]["ad"] if BULGU else ""))
    # ⓑ TEMİZ metin — yanlış pozitif üretmemeli (GEÇME yolu)
    del BULGU[:]
    json.loads('{"ad":"Y","s":[1],"d":2}', object_pairs_hook=_cift_yakala)
    d.append(("temiz nesnede SUSUYOR", len(BULGU) == 0, True, ""))
    # ⓒ İÇ İÇE nesnede mükerrer
    del BULGU[:]
    json.loads('{"ad":"Z","x":{"q":1,"q":2}}', object_pairs_hook=_cift_yakala)
    d.append(("İÇ nesnedeki mükerrer de yakalanıyor", len(BULGU) == 1,
              True, BULGU[0]["ad"] if BULGU else ""))
    # ⓓ üç kez tekrar
    del BULGU[:]
    json.loads('{"ad":"W","s":1,"s":2,"s":3}', object_pairs_hook=_cift_yakala)
    d.append(("üç tekrar: kez=3", bool(BULGU) and BULGU[0]["kez"] == 3,
              True, str(BULGU[0]["kez"]) if BULGU else ""))
    del BULGU[:]

    kotu = 0
    for ad, ger, bek, bilgi in d:
        ok = bool(ger) == bek
        kotu += (not ok)
        print("  %s %-40s %s" % ("🟢" if ok else "🔴", ad, bilgi))
    print("")
    print("%d/%d dal ateşledi" % (len(d) - kotu, len(d)))
    return 1 if kotu else 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())
