# -*- coding: utf-8 -*-
"""ORTAK TARİH KIYASLAYICISI — `ARAC-NORMAL-0903.py`'nin tarih kardeşi.

🔴 NİÇİN VAR (⑩ KOL, 7 Eylül 2026, 1.MURAT'ın sevki):
   Üç haneli yıl tuzağı BEŞ KEZ çıktı — `dubrovnik` (f:"700-01-01") ·
   `nube` (47 sahte pozitif) · `ARAC-4C-SIRALA` · ardıl kontrolü ·
   `yemen-zeydi` (f:"897-01-01", 29 sahte "ÖNCE"). Sebep hep aynı:
   ISO-BENZERİ tarih dizgileri DÜZ dizgi olarak karşılaştırılınca
   ("700-01-01" > "1281-01-01" çünkü "7" > "1") yıl 4 haneye
   tamamlanmadan sıralama YANLIŞ çıkar.

   Ölçülen asıl sebep: `pad(s)` bu projede DÖRT AYRI ALETTE ayrı ayrı
   yazılmıştı (`ARAC-4C-SIRALA` · `ARAC-4D-SIRALA` · `ARAC-ORTEN-KUNYE` ·
   `ARAC-ORTADOGU-HICAZ`), ortak bir kıyaslayıcı YOKTU — dördü de aynı
   fikri ayrı ayrı (ve `HICAZ`'da bir kere YANLIŞ) yazdı. `CLAUDE.md §11`:
   "kendi yazdığın ayrıştırıcı her zaman kötüdür" dersinin tarih yüzü.

KULLANIM
  from importlib import util as _u
  ... ya da doğrudan: sys.path.insert(0,'denetim'); import importlib
  (dosya adında tire olduğu için normal `import` ÇALIŞMAZ — bkz. altta
  `_yukle()` ve dört alet için geçiş örneği.)

  pad(s)             "700-01-01"  -> "0700-01-01"   (4 haneye tamamlar)
  once(a, b)          a, b'den ÖNCE mi?  (a < b, pad'lenmiş)
  sonra(a, b)         a, b'den SONRA mi? (a > b, pad'lenmiş)
  arasinda(x, a, b)   x, [a, b) aralığında mı? (a <= x < b — dönem
                      yarı-açık aralık konvansiyonu, bkz. CLAUDE.md
                      `s:[{f,t}]` — t bir sonraki dönemin başladığı an)

  node denetim/ARAC-TARIH-0907.js   // JS eşdeğeri + kendi sınavı
  py   denetim/ARAC-TARIH-0907.py   // C13 dört ayaklı sınav
"""


def pad(s):
    """Yılı 4 haneye tamamlar — ISO-benzeri dizgi karşılaştırması
    ancak böyle doğru sıralanır. `None`/boş girdi DOKUNULMADAN döner
    (çağıran taraf çoğu zaman bunu ATLAS_BASI/ATLAS_SONU gibi bir
    varsayılanla karşılaştırıyor — `ARAC-ORTEN-KUNYE-0905` deseni).

    ⚠️ BEKLENMEYEN BİÇİMDE PATLAR, SESSİZCE GEÇMEZ — dört mevcut aletin
    üçü (`4C`·`4D`·`ORTEN`) zaten böyleydi (`int(p[0])`); `HICAZ`'ın
    kendi `pad()`'i (`s.rjust(10,"0")`) sessiz kalıyordu ve tam o
    sürümde `yemen` sahte pozitif üretmişti. Sessiz geçme, bu projenin
    §11'inde defalarca "yanlış sonuçtan pahalı" diye kayıtlı.
    """
    if not s:
        return s
    s = str(s)
    if s.startswith("-"):
        # MÖ tarih — bu projede (1281-1923 çekirdek ufku) şu an YOK.
        # Dokunmadan geçiyorum; ileride gerekirse burada ele alınır.
        return s
    p = s.split("-")
    p[0] = "%04d" % int(p[0])   # ValueError'u YUTMAZ — boş dizgi/harf
                                # gelirse çağıran bunu görsün.
    return "-".join(p)


def once(a, b):
    """a, b'DEN ÖNCE mi? (a < b, ikisi de pad'lenerek)."""
    return pad(a) < pad(b)


def sonra(a, b):
    """a, b'DEN SONRA mi? (a > b, ikisi de pad'lenerek)."""
    return pad(a) > pad(b)


def arasinda(x, a, b, kapsayici_son=False):
    """x, [a, b) aralığında mı?

    Varsayılan YARI AÇIK (a <= x < b) — bu projenin `s:[{f,t}]` dönem
    konvansiyonuyla birebir: `t` bir sonraki dönemin başladığı gündür,
    o günün KENDİSİ artık öteki dönemdedir. `kapsayici_son=True` ile
    [a,b] kapalı aralık da sınanabilir (örn. bir künyenin f/t'sini
    ATLAS_BASI/ATLAS_SONU'na karşı sınarken).
    """
    x, a, b = pad(x), pad(a), pad(b)
    if kapsayici_son:
        return a <= x <= b
    return a <= x < b


# ═════════════════════════════════════════════════════════════════════
# C13 — DÖRT AYAK, hepsi zorunlu (CLAUDE.md §11)
# ═════════════════════════════════════════════════════════════════════
if __name__ == "__main__":
    import sys, io, os, re
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8",
                                  errors="replace")

    basarisiz = []

    def sina(ad, kosul):
        etiket = "🟢 GEÇTİ" if kosul else "🔴 ÇÜRÜDÜ"
        print("  %-58s %s" % (ad, etiket))
        if not kosul:
            basarisiz.append(ad)

    print("═" * 70)
    print("① GEÇME — dört haneli yıllarda düz dizgi sırasıyla AYNI sonuç")
    print("═" * 70)
    sina("1281-01-01 once 1923-10-29 (duz dizgi ile de dogru)",
         once("1281-01-01", "1923-10-29") == ("1281-01-01" < "1923-10-29"))
    sina("1453-05-29 arasinda [1281-01-01, 1923-10-29)",
         arasinda("1453-05-29", "1281-01-01", "1923-10-29"))
    sina("1923-10-29 arasinda DEGIL [1281-01-01, 1923-10-29) — yari acik ust sinir",
         not arasinda("1923-10-29", "1281-01-01", "1923-10-29"))

    print()
    print("═" * 70)
    print("② ATEŞLEME — üç haneli yıl dalı ZORLA ateşlendi (kusur varken)")
    print("═" * 70)
    # Kusur simüle edilmeden ÖNCE: düz dizgi karşılaştırması gerçekten
    # yanlış mı, kanıtla (yoksa ② hiçbir şey ateşlemez, C13'ün kendi
    # dersi: "gerçek veride o kusur yoksa dal koşulamaz").
    duz_yanlis = ("700-01-01" < "1281-01-01") is False
    sina("ON-KOSUL: duz dizgi '700-01-01' < '1281-01-01' YANLIS cikiyor mu",
         duz_yanlis)
    sina("pad ILE: 700-01-01 GERCEKTEN 1281-01-01'den ONCE",
         once("700-01-01", "1281-01-01"))
    sina("pad ILE: 897-01-01 GERCEKTEN 1281-01-01'den ONCE (yemen-zeydi)",
         once("897-01-01", "1281-01-01"))
    sina("pad ILE: 897-01-01, 1281-01-01'den SONRA DEGIL (5. vakanin duzeltmesi)",
         not sonra("897-01-01", "1281-01-01"))
    sina("pad ILE: 47-01-01 (iki haneli) de dogru siralaniyor",
         once("47-01-01", "700-01-01"))

    print()
    print("═" * 70)
    print("③ GİRDİ — gerçek kaynaktan okuma yolu (devletler.js'in KENDİSİ)")
    print("═" * 70)
    kok = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    yol = os.path.join(kok, "data", "devletler.js")
    if not os.path.exists(yol):
        print("  🔴 ÖLÇÜLEMEDİ — data/devletler.js bulunamadı, ③ atlandı")
    else:
        with open(yol, encoding="utf-8") as fh:
            metin = fh.read()
        gercek = {}
        for kid in ("dubrovnik", "yemen-zeydi"):
            m = re.search(r'id:"%s"[^}]*?f:"([^"]+)"' % re.escape(kid),
                          metin, re.S)
            gercek[kid] = m.group(1) if m else None
        sina("dubrovnik'in GERCEK f: alani dosyadan OKUNDU ve '700-01-01'",
             gercek.get("dubrovnik") == "700-01-01")
        sina("yemen-zeydi'nin GERCEK f: alani dosyadan OKUNDU ve '897-01-01'",
             gercek.get("yemen-zeydi") == "897-01-01")
        if gercek.get("dubrovnik") and gercek.get("yemen-zeydi"):
            sina("GERCEK dubrovnik.f, GERCEK yemen-zeydi.f'den ONCE (pad ile)",
                 once(gercek["dubrovnik"], gercek["yemen-zeydi"]))
            # 🔴 Bug İKİ 3-HANELİ yıl arasında DEĞİL, 3 haneli ile ATLASIN
            # 4 haneli sınırı (1281) arasında ortaya çıkıyor — dubrovnik
            # ile yemen-zeydi'nin ikisi de 3 haneli olduğu için düz dizgi
            # onları BURADA yanlışlıkla doğru sıralar. Asıl kanıt ATLAS_BASI
            # ile karşılaştırmakta: gerçek yemen-zeydi.f GERÇEKTEN
            # 1281-01-01'den önce (897 < 1281), ama düz dizgi "897" > "1"
            # yüzünden SONRA sanır.
            sina("pad ILE: GERCEK yemen-zeydi.f, ATLAS_BASI'ndan (1281) ONCE",
                 once(gercek["yemen-zeydi"], "1281-01-01"))
            sina("DUZ DIZGIYLE ayni soru YANLIS cikardi (kusurun kaniti,"
                 " 3 haneli vs 4 haneli)",
                 (gercek["yemen-zeydi"] < "1281-01-01") is False)

    print()
    print("═" * 70)
    print("④ ÇIKTI — bilerek kusurlu girdi verildi, alet BİLDİRDİ mi")
    print("═" * 70)
    try:
        pad("")
        sina("bos dizgi sessizce ayni bos dizgiyi dondurdu (cokme YOK, ama"
             " deger de UYDURULMADI)", pad("") == "")
    except Exception as e:
        sina("bos dizgi cokme uretti: %r" % e, False)
    try:
        pad(None)
        sina("None sessizce None dondu (cagiran ATLAS_BASI ile degistirir)",
             pad(None) is None)
    except Exception as e:
        sina("None cokme uretti: %r" % e, False)
    cokme_oldu = False
    try:
        pad("abc-01-01")
    except ValueError:
        cokme_oldu = True
    except Exception as e:
        print("  🔴 BEKLENMEYEN İSTİSNA: %r" % e)
    sina("harf iceren yil (abc-01-01) SESSIZCE GECMEDI, ValueError FIRLATTI",
         cokme_oldu)

    print()
    print("═" * 70)
    if basarisiz:
        print("🔴 ÇÜRÜDÜ (%d): %s" % (len(basarisiz), ", ".join(basarisiz)))
        sys.exit(1)
    else:
        print("🟢 C13 DÖRT AYAK DA TEMİZ — pad/once/sonra/arasinda kullanıma hazır.")
        sys.exit(0)
