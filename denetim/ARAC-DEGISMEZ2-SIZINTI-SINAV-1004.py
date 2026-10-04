# -*- coding: utf-8 -*-
"""DEĞİŞMEZ 2 SIZINTI ARACI — SINAV (iki yönde, küçültülmüş ağaçta TAM sayılarla).

🔴 BİR DENETİM İKİ YÖNDE SINANMADAN ÇALIŞIYOR SAYILMAZ (CLAUDE.md §11). `ast.parse` temiz ≠
   çalışıyor — tek kanıt bu sınav.

Sınanan: denetim/ARAC-DEGISMEZ2-SIZINTI-1004.py (denetle.py'nin `degismez2()`sini iki kez koşturur).
Yöntem: gerçek veriden BAĞIMSIZ, KÜÇÜLTÜLMÜŞ ağaç — 93 yerleşim girdisi boş dizi, yalnız `yerlesimler.js`
ZZ kayıtlarını, `olaylar_zz.js` ZZ maddelerini taşır. Sayılar tam bilinir; gerçek veriye YAZILMAZ.

  1  YAKALAMALI   kırılma YALNIZ liste maddesiyle kapalı ........ ① madde çıkarılınca +1 açılır (2 d,v), çıkış 1,
                  kırılma günü ADIYLA yazılı, ÖZ sınıfında (liste maddesinin kendi yeri)
  2  YAKALAMAMALI aynı kırılma ayrıca GERÇEK bir maddeyle de kapalı .. ① fark 0, ② fark 0, çıkış 0
  3  ② YALNIZ LİSTE METNİ (2s): maddenin başlığı başka yerde, listede ad geçiyor → metin silinince 2s'de +1;
                  d/v/isg'de ② = 0 (yapısal: d metnini okumazlar)
  4  İKİ ÖLÇÜT AYRI SAYILIR: yalnız-kalıp 1 · yalnız-iz 1 · ikisi 1 → a=2 · b=2 · ikisi=1 · birleşim=3 (TAM)
  5  LİSTE MADDESİ YOK → çıkış 2 (kalıp çürümüş olabilir; 'sızıntı yok' DEĞİL)
  6  ÖLÇÜLEMEDİ: yerleşim girdisi eksik / sözdizimi bozuk / devletler.js yok → çıkış 2
     (6c bu aracın GERÇEK kusurunu yakaladı: denetle SystemExit atınca çıkış 1 = "sızıntı var" sanılıyordu)
  7  GERÇEK AĞAÇ: araç çalışır (0 ya da 1; sayı iddia edilmez — ölçüm hükmü yönlendirmez)

KULLANIM:  py denetim/ARAC-DEGISMEZ2-SIZINTI-SINAV-1004.py     (çıkış: 0 hepsi geçti · 1 kusur)
"""
import io, os, re, shutil, subprocess, sys, tempfile

DENETIM = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.dirname(DENETIM)
ARAC = os.path.join(DENETIM, "ARAC-DEGISMEZ2-SIZINTI-1004.py")
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

HATA = 0


def sonuc(ok, baslik, detay=""):
    global HATA
    print(("  OK   " if ok else "  HATA ") + baslik + ((" | " + detay) if detay else ""))
    if not ok:
        HATA += 1


def calistir(kok):
    env = dict(os.environ, PYTHONIOENCODING="utf-8")
    p = subprocess.run([sys.executable, ARAC, "--kok", kok], capture_output=True, env=env, timeout=900)
    return p.returncode, p.stdout.decode("utf-8", "replace") + p.stderr.decode("utf-8", "replace")


def sayilar(o):
    """→ dict: ust (a,b,ab,birlesim), once[kapı]=(fark,oz,diger), metin[kapı]=fark"""
    r = {}
    m = re.search(r"\(a\) kalıp (\d+) · \(b\) iz (\d+) · ikisi birden (\d+) · yalnız \(a\) (\d+) · yalnız \(b\) (\d+) · birleşim (\d+)", o)
    r["ust"] = tuple(int(x) for x in m.groups()) if m else None
    r["once"], r["metin"] = {}, {}
    for m in re.finditer(r"--- (2 \(d,v\)|2s \(s\)|2i \(isg\)): ① madde çıkarılınca AÇILAN (\d+) kırılma \(ÖZ (\d+) · DİĞER (\d+)", o):
        r["once"][m.group(1)] = (int(m.group(2)), int(m.group(3)), int(m.group(4)))
    for m in re.finditer(r"--- (2 \(d,v\)|2s \(s\)|2i \(isg\)): ② liste METNİ silinince AÇILAN (\d+) kırılma", o):
        r["metin"][m.group(1)] = int(m.group(2))
    return r


def kok_kur(tmp, ad, kayitlar, maddeler, eksik=None, devletler=True):
    """küçültülmüş ağaç: girdiler boş, yalnız ZZ kayıtları/maddeleri."""
    d = os.path.join(tmp, ad, "data")
    os.makedirs(d)
    for i, f in enumerate(girdi.GIRDI_DOSYALARI):
        if f == eksik:
            continue
        govde = "\n".join(kayitlar) if f == "yerlesimler.js" else ""
        degisken = "YERLESIMLER" if f == "yerlesimler.js" else "YERLESIMLER_BOS%d" % i
        io.open(os.path.join(d, f), "w", encoding="utf-8").write("window.%s = [\n%s\n];\n" % (degisken, govde))
    if devletler:                                   # 2s yolu künyeleri okur (denetle._2s_taraf_adaylari)
        shutil.copy(os.path.join(KOK, "data", "devletler.js"), d)
    io.open(os.path.join(d, "olaylar_zz.js"), "w", encoding="utf-8").write(
        "window.OLAYLAR_ZZ = [\n%s\n];\n" % "\n".join(maddeler))
    return os.path.join(tmp, ad), d


def kayit(ad, s="", d="", isg=""):
    return ('{ ad:"%s", tur:"kale", lat:40.0, lon:30.0, g:0, k:3, m:null, s:[%s], d:[%s], v:[], isg:[%s] },' % (ad, s, d, isg))


def madde(t, b, yer, d="sinav", ic=""):
    """denetle.oku_pencere çift tırnaklı (JSON) dize ister: tek tırnaklı repr ÇALIŞMAZ."""
    import json
    j = lambda x: json.dumps(x, ensure_ascii=False)
    ic_alan = (", ic_not_d:%s" % j(ic)) if ic else ""
    return ("{ t:%s, b:%s, tur:\"savas\", k:\"fetih\", yer_id:%s, etiket:[\"toprak-kazanc\"], d:%s%s, kaynak:\"sinav\" }," %
            (j(t), j(b), j(yer), j(d), ic_alan))


ESKI = "eski ifade: Aynı tarihte haritaya katılan diğer yerleşimler:"
LISTE_D = "ZZ olayı. Aynı tarihte haritaya katılan diğer yerleşimler: ZZ Sizinti Kalesi, ZZ Komsu Kalesi, ZZ Uzak Kalesi."
ZZ_KAYIT = kayit("ZZ Sizinti Kalesi", d='{f:"1500-01-01",t:"1700-01-01"}')
R1 = madde("1700-01-03", "ZZ Sizinti Kalesi'nin kaybı", "ZZ Sizinti Kalesi")                     # gerçek madde: 1700'ü kapatır
L1 = madde("1500-01-05", "ZZ Sizinti Kalesi'nin fethi", "ZZ Sizinti Kalesi", d=LISTE_D, ic=ESKI)  # LİSTE maddesi: 1500'ü kapatır
R2 = madde("1500-01-08", "ZZ Sizinti Kalesi'nin gerçek fethi", "ZZ Sizinti Kalesi")                # gerçek madde: 1500'ü de kapatır

print("=" * 72)
print("DEĞİŞMEZ 2 SIZINTI SINAVI — iki yönde")
print("=" * 72)
tmp = tempfile.mkdtemp(prefix="siz-sinav-")
try:
    # 1) YAKALAMALI
    kok, _ = kok_kur(tmp, "s1", [ZZ_KAYIT], [R1, L1])
    k, o = calistir(kok)
    r = sayilar(o)
    sonuc(k == 1 and r["once"].get("2 (d,v)") == (1, 1, 0) and "1500-01-01" in o and r["metin"].get("2 (d,v)") == 0,
          "1) kırılma YALNIZ liste maddesiyle kapalı → ① 2(d,v) +1 (ÖZ 1) ve adıyla (1500-01-01) yazılı, çıkış 1",
          "çıkış %d · ① %s · ② %s" % (k, r["once"].get("2 (d,v)"), r["metin"].get("2 (d,v)")))
    if k not in (0, 1):
        print(o[-600:])

    # 2) YAKALAMAMALI
    kok, _ = kok_kur(tmp, "s2", [ZZ_KAYIT], [R1, L1, R2])
    k, o = calistir(kok)
    r = sayilar(o)
    sonuc(k == 0 and all(v[0] == 0 for v in r["once"].values()) and all(v == 0 for v in r["metin"].values()) and len(r["once"]) == 3,
          "2) aynı kırılma ayrıca GERÇEK maddeyle de kapalı → ① 0 · ② 0 · çıkış 0", "çıkış %d · ① %s" % (k, r["once"]))

    # 3) ② yalnız liste METNİ — 2s
    kok, _ = kok_kur(
        tmp, "s3",
        [kayit("ZZ Liste Yerlesimi", s='{f:"1500-01-01",t:"1600-01-01",d:"bizans"}'), kayit("ZZ Baska Yer")],
        [madde("1500-01-03", "ZZ Baska Yer'in fethi", "ZZ Baska Yer",
               d="Olay. Aynı tarihte haritaya katılan diğer yerleşimler: ZZ Liste Yerlesimi, ZZ Baska Yer.", ic=ESKI),
         madde("1600-01-02", "ZZ Liste Yerlesimi'nin kaybı", "ZZ Liste Yerlesimi")])
    k, o = calistir(kok)
    r = sayilar(o)
    sonuc(k == 1 and r["metin"].get("2s (s)") == 1 and r["metin"].get("2 (d,v)") == 0 and r["metin"].get("2i (isg)") == 0,
          "3) başlık başka yerde, listede ad geçiyor → liste METNİ silinince 2s'de +1; d/v ve isg'de 0 (yapısal), çıkış 1",
          "çıkış %d · ② %s" % (k, r["metin"]))
    if r["metin"].get("2s (s)") != 1:
        print(o[-1500:])

    # 4) iki ölçüt ayrı sayılır
    La = madde("1500-01-05", "ZZ A", "ZZ Sizinti Kalesi", d="Olay. Aynı tarihte katılan diğer yerleşimler: ZZ X, ZZ Y.")           # yalnız kalıp
    Lb = madde("1500-01-06", "ZZ B", "ZZ Sizinti Kalesi", d="Olay, liste yok.", ic=ESKI)                                         # yalnız iz
    Lab = madde("1500-01-07", "ZZ AB", "ZZ Sizinti Kalesi", d="Olay. Aynı gün haritaya katılan yerler: ZZ X, ZZ Y.", ic=ESKI)   # ikisi
    kok, _ = kok_kur(tmp, "s4", [ZZ_KAYIT], [R1, La, Lb, Lab])
    k, o = calistir(kok)
    r = sayilar(o)
    sonuc(r["ust"] == (2, 2, 1, 1, 1, 3),
          "4) yalnız-kalıp 1 · yalnız-iz 1 · ikisi birden 1 → a=2 · b=2 · ikisi=1 · yalnız a=1 · yalnız b=1 · birleşim=3",
          "okunan %s" % (r["ust"],))

    # 5) liste maddesi yok → 2
    kok, _ = kok_kur(tmp, "s5", [ZZ_KAYIT], [R1, R2])
    k, o = calistir(kok)
    sonuc(k == 2 and "liste maddesi" in o, "5) hiç liste maddesi yok → çıkış 2 ('sızıntı yok' DEĞİL, ölçülemedi)", "çıkış %d" % k)

    # 6) ölçülemedi
    kok, _ = kok_kur(tmp, "s6a", [ZZ_KAYIT], [R1, L1], eksik=girdi.GIRDI_DOSYALARI[1])
    k, o = calistir(kok)
    sonuc(k == 2, "6a) yerleşim girdisi eksik → çıkış 2 (sessiz atlama yok)", "çıkış %d" % k)
    kok, d = kok_kur(tmp, "s6b", [ZZ_KAYIT], [R1, L1])
    with io.open(os.path.join(d, "yerlesimler.js"), "a", encoding="utf-8") as f:
        f.write("\n;;; ]]] {{{ bozuk\n")
    k, o = calistir(kok)
    sonuc(k == 2, "6b) yerleşim girdisi sözdizimi bozuk → çıkış 2", "çıkış %d" % k)

    # 6c) devletler.js yok → denetle SystemExit atar; çıkış 1 ("sızıntı var") DEĞİL 2 olmalı
    kok, _ = kok_kur(
        tmp, "s6c",
        [kayit("ZZ Liste Yerlesimi", s='{f:"1500-01-01",t:"1600-01-01",d:"bizans"}'), kayit("ZZ Baska Yer")],
        [madde("1500-01-03", "ZZ Baska Yer'in fethi", "ZZ Baska Yer",
               d="Olay. Aynı tarihte haritaya katılan diğer yerleşimler: ZZ Liste Yerlesimi, ZZ Baska Yer.", ic=ESKI)],
        devletler=False)               # 2s kırılması VAR ⇒ denetle künyeleri okumaya çalışır
    k, o = calistir(kok)
    sonuc(k == 2 and "devletler.js" in o, "6c) devletler.js yok (denetle SystemExit atar) → çıkış 2, 1 DEĞİL (yanlış 'sızıntı' alarmı yok)",
          "çıkış %d" % k)

    # 7) gerçek ağaç
    k, o = calistir(KOK)
    sonuc(k in (0, 1) and sayilar(o)["ust"] is not None, "7) gerçek ağaçta araç çalışır (0 ya da 1)", "çıkış %d · liste maddesi %s" % (k, sayilar(o)["ust"]))
finally:
    shutil.rmtree(tmp, ignore_errors=True)

print("=" * 72)
print("SONUÇ: %s" % ("TÜM SINAVLAR GEÇTİ — araç iki yönde çalışıyor" if HATA == 0 else "%d HATA — araç ÇALIŞIYOR SAYILMAZ" % HATA))
sys.exit(0 if HATA == 0 else 1)
