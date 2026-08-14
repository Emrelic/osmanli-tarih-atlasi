# -*- coding: utf-8 -*-
"""kademe.py — `ALTYAPI ②`nin ÖLÇÜM ALETİ. Elle yazılan sayı bayatlar.

🔴 NİÇİN ÜRETEÇ: `ALTYAPI-DORT-MADDE.md` *"kademe %31,6"* diyordu. Bugün
ölçüldü: **%36,6.** Belge 11 Ağustos'ta yazılmış, veri o gün 2325'ti,
bugün 2503. `CLAUDE.md §1.5`in dersi — *"bir kez bayatlayan belge tekrar
bayatlar; çare satırı ELLE YAZILMAKTAN ÇIKARMAKTIR."*

    py arac/kademe.py                 tabloyu bas
    py arac/kademe.py --yaz           ALTYAPI-DORT-MADDE.md §② satırını güncelle

────────────────────────────────────────────────────────────────────────
🔴 BU ALETİN EN ÖNEMLİ BULGUSU BİR NEGATİF SONUÇTUR

`m:` zinciri bir kademe kaynağı olabilirdi: *"başkalarının merkezi olan
bir nokta, en azından o kadar önemlidir."* Ölçüldü:

    merkez olarak gösterilen ayrı ad : 66
    bunlardan KENDİ kademesi olmayan : 0

⇒ **Türetme kuyusu KURU.** Merkez olan her nokta zaten kademeli. Yani
kalan 1588 nokta işlem işi değil **ARAŞTIRMA** işidir; bir gecede,
kaynak açmadan kapatılamaz.

📌 Ve bu, uydurmayı önleyen bir bulgudur: veri sussuz kalınca *"şehirdir,
herhâlde 3. kademedir"* demek kolaydır — ve o cümle bir ÖLÇÜM gibi
kaydolur. Kuyunun kuru olduğunu YAZMAK, onu doldurmaya çalışmaktan
değerlidir.

────────────────────────────────────────────────────────────────────────
🟢 AMA VERİDEN AYIRT EDİLEBİLEN İKİ ALT SINIF VAR — ve bunlar TARİHÎ
   İDDİA DEĞİL, VERİ OLGUSUDUR

    tur:"bolge"          118   bir yerleşim DEĞİL, alan temsilcisi
    kasitli_bosluk       178   kasten boş bırakılmış (çöl dolgusu vb.)
    ikisi birden          72
    ─────────────────────────
    İKİSİ DE DEĞİL      1364   ← ARAŞTIRMA kuyruğu, gerçek borç

⚠️ Bunlara kademe VERİLMEZ — kademe idarî-askerî ağırlıktır ve bir çöl
dolgu noktasının böyle bir ağırlığı yoktur. Ama **ağırlıkları da 1,0
OLMAMALIDIR**: `AGIRLIK` sözlüğü bugün `k:0 → 1,0` diyor, yani bir çöl
dolgusu Konya'nın dörtte biri kadar çekim uyguluyor.
🔴 Ve `ALTYAPI §1.1b` bunun tersini de yasaklıyor: ağırlık **sıfırlanmaz,
KÜÇÜLTÜLÜR** — sıfır verilseydi 473 petek bir gecede silinirdi ve çoğu
DOĞRUYDU (İnegöl 1300'de kasabadır ama 40 km'de başka nokta yoktur).
⇒ Öneri `maliyet.py`de duruyor ve **ölçülerek** ayarlanacak, burada
uydurulmayacak.
"""
import collections
import io
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BELGE = os.path.join(KOK, "ALTYAPI-DORT-MADDE.md")


def olc():
    import girdi
    Y = girdi.yukle(sessiz=True)
    k = collections.Counter(y.get("k") or 0 for y in Y)
    dolu = sum(n for kk, n in k.items() if kk)
    ks = [y for y in Y if not y.get("k")]
    bagli = collections.Counter(y.get("m") for y in Y if y.get("m"))
    adlar = {y["ad"]: y for y in Y}
    aday = [a for a in bagli if a in adlar and not adlar[a].get("k")]
    return {
        "toplam": len(Y), "dolu": dolu, "kademesiz": len(ks),
        "yuzde": 100.0 * dolu / len(Y) if Y else 0,
        "dagilim": dict(sorted(k.items())),
        "merkez_ad": len([a for a in bagli if a in adlar]),
        "turetilebilir": len(aday),
        "bolge": len([y for y in ks if y.get("tur") == "bolge"]),
        "kasitli": len([y for y in ks if y.get("kasitli_bosluk")]),
        "gercek_borc": len([y for y in ks if y.get("tur") != "bolge"
                            and not y.get("kasitli_bosluk")]),
    }


def bas(o):
    print("=" * 68)
    print("KADEME — ALTYAPI ② · %d nokta" % o["toplam"])
    print("=" * 68)
    for kk, n in o["dagilim"].items():
        print("   k=%-3s %5d  (%%%.1f)" % (kk, n, 100.0 * n / o["toplam"]))
    print("   ⇒ KADEMESİ YAZILI: %d  (%%%.1f)" % (o["dolu"], o["yuzde"]))
    print()
    print("🔴 TÜRETME KUYUSU: %d merkez adı, kademesi olmayan %d"
          % (o["merkez_ad"], o["turetilebilir"]))
    if not o["turetilebilir"]:
        print("   ⇒ KURU. Kalan kademe İŞLEM değil ARAŞTIRMA işidir.")
    print()
    print("kademesiz %d — verinin ayırdığı iki alt sınıf:" % o["kademesiz"])
    print("   tur:'bolge'        %5d  (yerleşim DEĞİL, alan temsilcisi)" % o["bolge"])
    print("   kasitli_bosluk     %5d  (kasten boş)" % o["kasitli"])
    print("   ─────────────────────────")
    print("   GERÇEK BORÇ        %5d  ← araştırma kuyruğu" % o["gercek_borc"])
    return 0


def yaz(o):
    """Belgedeki ② satırını YERİNDE güncelle. Elle yazılan tablo bayatlar."""
    if not os.path.exists(BELGE):
        print("🔴 belge yok: %s" % BELGE)
        return 2
    m = io.open(BELGE, encoding="utf-8").read()
    yeni = ("| ② | 1281 yerleşimleri | kademe **%%%.1f** (%d nokta kademesiz; "
            "bunun %d'si `tur:bolge`/`kasitli_bosluk`, **gerçek borç %d**) "
            "· türetme kuyusu **KURU** (`py arac/kademe.py`) | ① |"
            % (o["yuzde"], o["kademesiz"], o["kademesiz"] - o["gercek_borc"],
               o["gercek_borc"]))
    y2, n = re.subn(r"\| ② \| 1281 yerleşimleri \|[^\n]*\|", yeni, m)
    if not n:
        print("🔴 ② satırı bulunamadı — belge biçimi değişmiş. ELLE bakılmalı.")
        return 1
    io.open(BELGE, "w", encoding="utf-8", newline="\n").write(y2)
    print("✓ ALTYAPI-DORT-MADDE.md ② satırı güncellendi (%d eşleşme)" % n)
    return 0


if __name__ == "__main__":
    o = olc()
    bas(o)
    sys.exit(yaz(o) if "--yaz" in sys.argv[1:] else 0)
