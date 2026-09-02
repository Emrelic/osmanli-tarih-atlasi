# -*- coding: utf-8 -*-
"""`bk:` NÖBETÇİSİ — zamanlı başkent adları yerleşimle eşleşiyor mu?

Oturum: OPUS HAZIR KITA 106 · 2 Eylül 2026 · koordinatör 1.MURAT (M-2100 ②)

═══ NİÇİN VAR ═══
`bk:[{f,t,ad}]` bir yerleşimi ADIYLA gösteriyor. Ad tutmazsa **yıldız hiç
çizilmez ve HATA DA VERMEZ** — `§8`in *"BOYALAR'da yoksa boyanmaz"* kuralının
ad ekseni. `VERI-YAPISI.md` bunu borç olarak yazmıştı; koordinatör kararı onu
**`bk:` yazımının ÖN ŞARTI** yaptı: önce nöbetçi, sonra veri.

📌 Ve kararın gerekçesi kaydedilsin: *"sessizlik zararlı değildir, KAYITSIZ
sessizlik zararlıdır."* Eşleşmeyen ad yazılacak — ama nöbetçi onu **adıyla
basacağı** için artık sessiz değil, **kayıtlı borç.**

═══ OKUDUĞU EVREN ═══
    data/devletler.js            künyelerin kendi `bk:` alanı
    data/devletler_bk_*.js       yama dosyaları — `window.DEVLETLER_BK_*`
                                 biçim: [{id:"safevi", bk:[{f,t,ad}, …]}, …]
🔴 Yama dosyalarını AD KALIBIYLA değil, `window` üzerindeki DEĞİŞKEN adıyla
   topluyor (`§7`: ayrı dosya ≠ ayrı ad alanı) — ve tanımadığı şekli
   SESSİZCE ELEMİYOR, `tanimsiz` kovasına yazıyor.

    py arac/_bk_nobetci.py            denetim  (çıkış 0 temiz · 1 eksik var)
    py arac/_bk_nobetci.py --sinav    C13: geçme YOLU ve ateşleme YOLU
"""
import io
import json
import os
import re
import sys
import unicodedata

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import girdi  # noqa: E402

DATA = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "data")


def sadelestir(s):
    """Yalnız KARŞILAŞTIRMA için — veriye yazılmaz."""
    s = s.lower().replace("ı", "i")
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    return re.sub(r"[^a-z0-9]", "", s)


def yerlesim_adlari():
    """Yerleşim adları + parantezli ikinci adları. Ör. `Girne (Kyrenia)`."""
    tam, sade = set(), {}
    for y in girdi.yukle(sessiz=True):
        parca = [y["ad"]]
        m = re.match(r"^([^(]+?)\s*\(([^)]+)\)\s*$", y["ad"])
        if m:
            parca += [m.group(1).strip(), m.group(2).strip()]
        for p in parca:
            tam.add(p)
            sade.setdefault(sadelestir(p), y["ad"])
    return tam, sade


def bk_topla(ek=None):
    """Bütün `bk:` kayıtlarını topla → [(künye_id, ad, kaynak_dosya)].

    `ek` — sınav için enjekte edilen sahte kayıtlar (dosyaya yazılmaz).
    """
    cik, tanimsiz = [], []
    # ① künyelerin kendi alanı
    for d in girdi.oku_devletler():
        for b in (d.get("bk") or []):
            if isinstance(b, dict) and b.get("ad"):
                cik.append((d.get("id"), b["ad"], "devletler.js"))
    # ② yama dosyaları
    # 🔴🔴 BURADA BİR KEZ REGEX YAZDIM VE SESSİZCE 0 KAYIT OKUDU.
    #   Kalıbım `id:"…"(.*?)(?=\n\s*\{)` idi; `bk:[` dizisinin İLK ÖĞESİ de
    #   `\n      {` ile başladığı için gövde BOŞ yakalandı ve hiçbir `ad:`
    #   görülmedi. Nöbetçi "TEMİZ · 0 kayıt" dedi — yani **var olmak için
    #   yazıldığı kusuru kendi üzerinde üretti.**
    #   ⇒ Çare regex'i düzeltmek DEĞİL, REGEX'İ BIRAKMAK: `CLAUDE.md §11`,
    #     *"veri zaten bir dilde yazılıysa, o dilin yorumlayıcısını çağır."*
    #     (girdi.py tek tırnak · bagla.py CRLF · renkler.py ayrıştırma —
    #      proje bunu ÜÇ KEZ öğrendi, bu dördüncüsü.)
    #   Artık `girdi._cevir` kullanılıyor: motorun KENDİ JS okuyucusu.
    for ad in sorted(os.listdir(DATA)):
        if not re.match(r"^devletler_bk_.*\.js$", ad):
            continue
        metin = io.open(os.path.join(DATA, ad), encoding="utf-8", errors="replace").read()
        for m in re.finditer(r"window\.(DEVLETLER_BK_\w+)\s*=", metin):
            degisken = m.group(1)
            try:
                veri = girdi._cevir(metin, degisken)
            except Exception as e:
                tanimsiz.append("%s :: %s (ÇEVRİLEMEDİ: %s)" % (ad, degisken, e))
                continue
            if not isinstance(veri, list):
                tanimsiz.append("%s :: %s (DİZİ DEĞİL: %s)" % (ad, degisken, type(veri).__name__))
                continue
            bulundu = False
            for kayit in veri:
                if not isinstance(kayit, dict) or not isinstance(kayit.get("bk"), list):
                    tanimsiz.append("%s :: %s içinde `bk` dizisi olmayan kayıt" % (ad, degisken))
                    continue
                for b in kayit["bk"]:
                    if isinstance(b, dict) and b.get("ad"):
                        cik.append((kayit.get("id"), b["ad"], ad))
                        bulundu = True
            if not bulundu:
                tanimsiz.append("%s :: %s (hiç `bk[].ad` çıkmadı)" % (ad, degisken))
    if ek:
        cik.extend(ek)
    return cik, tanimsiz


def denetle(ek=None, sessiz=False):
    tam, sade = yerlesim_adlari()
    kayitlar, tanimsiz = bk_topla(ek)
    es, yakin, yok = [], [], []
    for kid, ad, dosya in kayitlar:
        if ad in tam:
            es.append((kid, ad, dosya))
        elif sadelestir(ad) in sade:
            yakin.append((kid, ad, sade[sadelestir(ad)], dosya))
        else:
            yok.append((kid, ad, dosya))
    if not sessiz:
        print("`bk:` kaydı: %d  (künye alanı + yama dosyaları)" % len(kayitlar))
        print("  🟢 yerleşimle BİREBİR eşleşen : %d" % len(es))
        print("  🟡 YAZIM farkı (sadeleşince tutuyor) : %d" % len(yakin))
        print("  🔴 EŞLEŞMEYEN — yıldız ÇİZİLMEYECEK  : %d" % len(yok))
        for kid, ad, karsilik, dosya in sorted(yakin):
            print("     🟡 %-24s %-24s → veride: %s   [%s]" % (kid, ad, karsilik, dosya))
        for kid, ad, dosya in sorted(yok):
            print("     🔴 %-24s %-24s   [%s]" % (kid, ad, dosya))
        for t in tanimsiz:
            print("     ⚠️ TANINMAYAN ŞEKİL: %s" % t)
    # 🟡 yazım farkı da KUSURDUR: motor birebir ada bakar, sadeleşmişe değil.
    return len(yok) + len(yakin) + len(tanimsiz), len(es)


def sinav():
    """🔴 C13 — İKİ YOL DA SINANIR, ve ateşleme ZORLANIR.

    Bugün veride hiç `bk:` yok; o yüzden geçme yolu da ateşleme yolu da
    **enjekte edilmiş** kayıtlarla sınanır. Sınanamayan dal, denetimsiz daldır.
    """
    tam, _ = yerlesim_adlari()
    gercek = sorted(tam)[len(tam) // 2]           # veride KESİN var olan bir ad
    print("── ① GEÇME YOLU — var olan bir yerleşim adıyla (%s) ──" % gercek)
    kotu, iyi = denetle(ek=[("SINAV", gercek, "(enjekte)")])
    if kotu != 0:
        print("🔴 GEÇME YOLU BAŞARISIZ — temiz kayıt kusurlu sayıldı.")
        return 1
    print("🟢 geçme yolu: kusur 0, eşleşen %d\n" % iyi)

    print("── ② ATEŞLEME YOLU — veride OLMAYAN bir ad ZORLA sokuluyor ──")
    sahte = "ZZZ-YOK-OLAN-BASKENT-QQQ"
    kotu2, _ = denetle(ek=[("SINAV", sahte, "(enjekte)")])
    if kotu2 < 1:
        print("🔴 ATEŞLEME BAŞARISIZ — sahte ad kusur sayılmadı. "
              "Bu dal SINANMAMIŞ sayılır (§11 C13).")
        return 1
    print("\n🟢 İKİ YOL DA SINANDI: geçme yolu temiz, ateşleme yolu ÖTTÜ.")
    return 0


def main(argv):
    if "--sinav" in argv:
        return sinav()
    kotu, iyi = denetle()
    if kotu:
        print("\n🔴 %d ad eşleşmiyor — bu künyelerde başkent yıldızı ÇİZİLMEZ." % kotu)
        print("   Bu bir KAYITLI BORÇTUR: nokta yazan oturum bu listeyi "
              "doğrudan iş sırası olarak okuyabilir.")
        return 1
    print("\n🟢 TEMİZ — bütün `bk:` adları yerleşimle eşleşiyor (%d kayıt)." % iyi)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
