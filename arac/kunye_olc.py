# -*- coding: utf-8 -*-
"""KÜNYE ÖLÇÜM — `data/devletler.js` künyelerinin İÇERİK sağlığı.

⚠️ ADI KAPSAMINI SÖYLER: bu alet **içerik** ölçer. Renk ölçmez, veri ölçmez,
   geometri ölçmez. Bunlar ayrı eksenler ve ayrı aletleri var:
     arac/renk_olc.py    palet (komşuluk + ΔE)
     arac/renk_cikti.py  çizili gövdeler
     arac/renk_fark.py   koşu öncesi/sonrası + künye↔renk↔veri zinciri
     arac/denetle.py     değişmezler

🔴 NİÇİN AYRI ALET (7 Ağustos 2026, RENK 2):
   Koordinatör bu sayacı `renk_fark.py`ye eklemeyi önerdi; REDDEDİLDİ ve
   gerekçesi o günün üç vakasından çıktı:
     renk_cikti ②   çizim biçimini VARSAYDI          → hiç ölçmedi (0 vs 653)
     renk_olc       komşuluğu "değme" diye TANIMLADI → 5 yakın çifti kurmadı
     --dogrula      yazılanı öneriyle KARŞILAŞTIRDI  → künyeyi hiç sormadı
   Üçü de KAPSAM kusuru. Alâkasız bir kontrolü bir araca eklemek dördüncü
   ve daha sinsi hâli olurdu: orada araç kendi kapsamını yanlış tanımlıyordu,
   burada **ADI** yanlış tanımlayacaktı. "Renk denetimi temiz" diyen biri
   içinde bir içerik borcu sayacı gizlendiğini bilmezdi; ya da borç 46'dan
   60'a çıkar, renk oturumu onu kendi işi sanmaz, kimse bakmazdı.

🔴 EŞİĞİ KURAL DEĞİL DAĞILIM VERİR (`YASALAR B15`nin aynı mantığı):
   Koordinatörün gözlemi "120 karakterden kısa 46 künye" idi. 120 KEYFÎ bir
   sayı; ölçüldü:
     min 28 · p10 108 · p25 162 · MEDYAN 199 · p75 254 · p90 349 · maks 873
   ⇒ Eşik **medyanın yarısı** (bugün 100): "tipik künyenin yarısından kısa"
     dağılımdan türer, elle yazılmaz, ve külliyat büyüyünce KENDİLİĞİNDEN
     kayar. Bugün 29 künye altında.
   📌 120 ile 100 arasındaki fark 46 ile 29 arasındaki fark demek — sayının
     nereden geldiği, sayının kendisi kadar önemli.

⚠️ BORÇ ile İHLAL AYRIDIR (aynı günün öteki dersi):
     BOŞ özet            → İHLAL, çıkış kodu 1. Künye var ama anlatmıyor.
     KISA özet           → BORÇ. Ekranda durur, büyümesi izlenir, çıkış
                           kodunu ETKİLEMEZ — yoksa alet her koşuda kırmızı
                           yanar ve gerçek kusuru boğar.

KOMUT
   py arac/kunye_olc.py            ölç ve bas
   py arac/kunye_olc.py --taban    bugünkü sayıları taban olarak kaydet
"""
import io
import json
import os
import statistics
import sys
import collections

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import girdi                       # noqa: E402

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8",
                              errors="replace")

TABAN = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                     "denetim", "kunye-taban.json")

# Eşik ORANI — mutlak sayı değil. Bkz. dosya başlığı.
KISA_ORAN = 0.50


def olc(D=None):
    """(dağılım, boş, kısa, küme) — hepsi ölçülür, hiçbiri varsayılmaz."""
    D = D if D is not None else girdi.oku_devletler()
    if not D:
        raise SystemExit("!! devletler.js 0 kayıt döndü — ölçüm YAPILMADI "
                         "('0 kusur' değil)")
    uz = sorted(len(d.get("ozet") or "") for d in D)
    n = len(uz)
    dag = {"n": n, "min": uz[0], "p10": uz[int(n * .10)],
           "p25": uz[int(n * .25)], "medyan": uz[n // 2],
           "p75": uz[int(n * .75)], "p90": uz[int(n * .90)], "maks": uz[-1],
           "ortalama": round(statistics.mean(uz))}
    esik = dag["medyan"] * KISA_ORAN
    bos = sorted(d.get("id") or "?" for d in D if not (d.get("ozet") or "").strip())
    kisa = sorted(((len(d.get("ozet") or ""), d.get("id") or "?",
                    d.get("bolge") or "?", d.get("tur") or "?")
                   for d in D
                   if 0 < len(d.get("ozet") or "") < esik))
    kume = collections.Counter((b, t) for _, _, b, t in kisa)
    return dag, esik, bos, kisa, kume


def bas(taban=None):
    dag, esik, bos, kisa, kume = olc()
    print("künye %d · özet uzunluğu dağılımı" % dag["n"])
    print("  min %d · p10 %d · p25 %d · MEDYAN %d · p75 %d · p90 %d · maks %d"
          % (dag["min"], dag["p10"], dag["p25"], dag["medyan"],
             dag["p75"], dag["p90"], dag["maks"]))
    print("  eşik = medyan × %.2f = %.0f karakter   (dağılımdan türedi, "
          "elle yazılmadı)" % (KISA_ORAN, esik))

    def delta(ad, simdi):
        if taban and ad in taban:
            f = simdi - taban[ad]
            return "   (%+d)" % f if f else ""
        return ""

    print("\n" + "=" * 72)
    print("① BOŞ ÖZET — künye var ama anlatmıyor")
    print("=" * 72)
    print("  %d%s" % (len(bos), delta("bos", len(bos))))
    for a in bos[:20]:
        print("    🔴 %s" % a)
    if not bos:
        print("    yok ✓")

    print("\n" + "=" * 72)
    print("② KISA ÖZET — eşiğin altında (BORÇ, ihlal değil)")
    print("=" * 72)
    print("  %d künye%s" % (len(kisa), delta("kisa", len(kisa))))
    for L, i, b, t in kisa[:15]:
        print("    %4d  %-24s %-14s %s" % (L, i, b, t))
    if len(kisa) > 15:
        print("    … +%d" % (len(kisa) - 15))

    # 🔴 KÜMELENME — asıl bulgu burada. Borç dağılmışsa "yavaş büyüyen
    #   külliyat"tır; bir kümede toplanmışsa BİR PARTİ EKSİK yazılmış demektir.
    print("\n" + "=" * 72)
    print("③ KISALIK NEREDE TOPLANIYOR")
    print("=" * 72)
    for (b, t), k in kume.most_common(8):
        pay = 100.0 * k / max(1, len(kisa))
        print("    %-16s %-14s %3d   %%%.0f" % (b, t, k, pay))
    if kume:
        (b, t), k = kume.most_common(1)[0]
        if k >= max(3, len(kisa) * 0.20):
            print("\n  📌 %s/%s tek başına borcun %%%.0f'ini taşıyor — bu bir"
                  % (b, t, 100.0 * k / len(kisa)))
            print("     DAĞINIK borç değil, EKSİK YAZILMIŞ BİR PARTİ işareti.")

    print("\n" + "=" * 72)
    print("  " + ("✓ boş özet yok — kısa olanlar BORÇ, çıkış kodunu etkilemez"
                  if not bos else "🔴 %d künyenin özeti BOŞ" % len(bos)))
    return dag, esik, bos, kisa


def yaz():
    dag, esik, bos, kisa = bas()
    d = {"n": dag["n"], "medyan": dag["medyan"], "esik": esik,
         "bos": len(bos), "kisa": len(kisa)}
    os.makedirs(os.path.dirname(TABAN), exist_ok=True)
    # önce .tmp, sonra atomik taşı (kesip-yazan tek adım veri kaybıdır)
    io.open(TABAN + ".tmp", "w", encoding="utf-8").write(
        json.dumps(d, ensure_ascii=False))
    os.replace(TABAN + ".tmp", TABAN)
    print("\ntaban yazıldı: %s" % TABAN)


if __name__ == "__main__":
    if "--taban" in sys.argv:
        yaz()
        sys.exit(0)
    _t = None
    if os.path.exists(TABAN):
        _t = json.loads(io.open(TABAN, encoding="utf-8").read())
    _dag, _esik, _bos, _kisa = bas(_t)
    sys.exit(1 if _bos else 0)
