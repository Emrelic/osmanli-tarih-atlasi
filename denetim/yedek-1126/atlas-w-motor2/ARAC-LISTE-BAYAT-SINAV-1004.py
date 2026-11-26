# -*- coding: utf-8 -*-
"""LİSTE BAYAT ARACI — SINAV (iki yönde, küçültülmüş ağaçta TAM sayılarla).

🔴 BİR DENETİM İKİ YÖNDE SINANMADAN ÇALIŞIYOR SAYILMAZ (CLAUDE.md §11). `ast.parse` temiz ≠
   çalışıyor — tek kanıt bu sınav.

Sınanan: denetim/ARAC-LISTE-BAYAT-1004.py. Yöntem: 93 yerleşim girdisi BOŞ, yalnız `yerlesimler.js` ZZ
kayıtlarını, `olaylar_zz.js` ZZ maddelerini taşır; gerçek `devletler.js` ve gerçek `ad_esanlam` sözlüğü kalır.
ZZ KAYITLARI:  ZZ Bir (1500-01-01) · ZZ Iki (1500-01-05) · ZZ İznik (1500-01-01) · ZZ Ay (1500-03-15) ·
               ZZ Paren (M. Kemal) (1500-01-01)

  1  KARIŞIK LİSTE (t=1500-01-01: Bir, Iki, Olmayan, İznik) ... UYUYOR 2 · YALANLIYOR 1 (Iki, en yakın
     1500-01-05 = 4 gün) · EŞLEŞMEDİ 1 (Olmayan = `yok`) → çıkış 1, 🔴 satırı madde+ad ile
  2  ⚪ ≠ 🔴: havuzda olmayan ad 🔴 kümesine / defter anahtarına GİRMEZ
  3  TEMİZ LİSTE (yalnız uyuyanlar) → çıkış 0, 🔴 0
  4  `İ` varyantı: listede "ZZ Iznik", kayıtta "ZZ İznik" → ad_esanlam çözer, UYUYOR (naif eşleşme ⚪'a atardı)
  5  AY HASSASİYETİ: t=1500-03 (ZZ Ay'ın kırılması ay içinde) → UYUYOR · t=1500-03-14 (1 gün kayık) → YALANLIYOR
  6  KALIP DAR: "Aynı gün iki ayrı ferman yayımladı: …" LİSTE DEĞİL → liste maddesi sayısı artmaz
  7  PARANTEZLİ AD İÇİNDE NOKTA: "ZZ Paren (M. Kemal)" cümleyi bölmez → UYUYOR (ilk sürüm adı "(M" diye kesti)
  8  ÜYELİK ≠ SAYI: defter doğru → 0 · defterde 1 üye takas (SAYI AYNI) → 1
  9  ÖLÇÜLEMEDİ: hiç liste maddesi yok · girdi eksik · sözdizimi bozuk · defter yok → 2
 10  GERÇEK AĞAÇ: UYUYOR+YALANLIYOR+EŞLEŞMEDİ = ad sayısı, defter taze → 0

KULLANIM:  py denetim/ARAC-LISTE-BAYAT-SINAV-1004.py     (çıkış: 0 hepsi geçti · 1 kusur)
"""
import io, json, os, re, shutil, subprocess, sys, tempfile

DENETIM = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.dirname(DENETIM)
ARAC = os.path.join(DENETIM, "ARAC-LISTE-BAYAT-1004.py")
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

HATA = 0


def sonuc(ok, baslik, detay=""):
    global HATA
    print(("  OK   " if ok else "  HATA ") + baslik + ((" | " + detay) if detay else ""))
    if not ok:
        HATA += 1


def calistir(kok, *ek):
    env = dict(os.environ, PYTHONIOENCODING="utf-8")
    p = subprocess.run([sys.executable, ARAC, "--kok", kok] + list(ek), capture_output=True, env=env, timeout=900)
    return p.returncode, p.stdout.decode("utf-8", "replace") + p.stderr.decode("utf-8", "replace")


def sayilar(o):
    m = re.search(r"(\d+) liste maddesi · (\d+) ad\s+.*?UYUYOR[^\d]*(\d+)\s+[\d.]+%.*?YALANLIYOR[^\d]*(\d+)\s+[\d.]+%.*?EŞLEŞMEDİ[^\d]*(\d+)\s+[\d.]+%.*?\(yok (\d+) · belirsiz (\d+)\)",
                  o, re.S)
    return tuple(int(x) for x in m.groups()) if m else None   # (madde, ad, uyuyor, yalanliyor, eslesmedi, yok, belirsiz)


def kok_kur(tmp, ad, kayitlar, maddeler, eksik=None):
    d = os.path.join(tmp, ad, "data")
    os.makedirs(d)
    shutil.copy(os.path.join(KOK, "data", "devletler.js"), d)
    for i, f in enumerate(girdi.GIRDI_DOSYALARI):
        if f == eksik:
            continue
        govde = "\n".join(kayitlar) if f == "yerlesimler.js" else ""
        degisken = "YERLESIMLER" if f == "yerlesimler.js" else "YERLESIMLER_BOS%d" % i
        io.open(os.path.join(d, f), "w", encoding="utf-8").write("window.%s = [\n%s\n];\n" % (degisken, govde))
    io.open(os.path.join(d, "olaylar_zz.js"), "w", encoding="utf-8").write(
        "window.OLAYLAR_ZZ = [\n%s\n];\n" % "\n".join(maddeler))
    return os.path.join(tmp, ad), d


J = lambda x: json.dumps(x, ensure_ascii=False)


def kayit(ad, f):
    return ('{ ad:%s, tur:"kale", lat:40.0, lon:30.0, g:0, k:3, m:null, s:[], d:[{f:"%s",t:"1700-01-01"}], v:[], isg:[] },' % (J(ad), f))


KAYITLAR = [kayit("ZZ Bir", "1500-01-01"), kayit("ZZ Iki", "1500-01-05"), kayit("ZZ İznik", "1500-01-01"),
            kayit("ZZ Ay", "1500-03-15"), kayit("ZZ Paren (M. Kemal)", "1500-01-01")]


def liste(t, baslik, adlar, onek="Aynı tarihte katılan öteki yerler"):
    return ("{ t:%s, b:%s, tur:\"savas\", k:\"fetih\", etiket:[\"toprak-kazanc\"], d:%s, kaynak:\"sinav\" }," %
            (J(t), J(baslik), J("ZZ olayı. %s: %s." % (onek, ", ".join(adlar)))))


print("=" * 72)
print("LİSTE BAYAT SINAVI — iki yönde")
print("=" * 72)
tmp = tempfile.mkdtemp(prefix="bayat-sinav-")
try:
    # 1) KARIŞIK
    kok, _ = kok_kur(tmp, "s1", KAYITLAR, [liste("1500-01-01", "ZZ Karışık", ["ZZ Bir", "ZZ Iki", "ZZ Olmayan", "ZZ İznik"])])
    k, o = calistir(kok, "--liste", "hepsi")
    s = sayilar(o)
    sonuc(k == 1 and s == (1, 4, 2, 1, 1, 1, 0) and "ZZ Iki" in o and "en yakın 1500-01-05 (4g)" in o and "ZZ Karışık" in o,
          "1) karışık liste → UYUYOR 2 · 🔴 1 (Iki, en yakın 1500-01-05 = 4g) · ⚪ 1 (yok), çıkış 1, madde+ad adıyla", "çıkış %d · %s" % (k, s))
    if s is None:
        print(o[-700:])

    # 2) ⚪ ≠ 🔴 — defter anahtarına girmez
    d_yaz = os.path.join(tmp, "d1.txt")
    kd, _ = calistir(kok, "--defter", d_yaz, "--defter-yaz")
    satirlar = [l.strip() for l in io.open(d_yaz, encoding="utf-8") if l.strip() and not l.startswith("#")]
    sonuc(kd == 0 and len(satirlar) == 1 and satirlar[0].endswith("¦ZZ Iki") and not any("Olmayan" in x for x in satirlar),
          "2) defter YALNIZ 🔴'yi tutar (ZZ Iki); ⚪ 'ZZ Olmayan' anahtara girmez", "%s" % satirlar)

    # 3) TEMİZ
    kok, _ = kok_kur(tmp, "s3", KAYITLAR, [liste("1500-01-01", "ZZ Temiz", ["ZZ Bir", "ZZ İznik"])])
    k, o = calistir(kok)
    s = sayilar(o)
    sonuc(k == 0 and s and s[3] == 0 and s[2] == 2, "3) yalnız uyuyanlar → 🔴 0, çıkış 0", "çıkış %d · %s" % (k, s))

    # 4) İ varyantı
    kok, _ = kok_kur(tmp, "s4", KAYITLAR, [liste("1500-01-01", "ZZ Varyant", ["ZZ Iznik"])])
    k, o = calistir(kok)
    s = sayilar(o)
    sonuc(k == 0 and s and (s[2], s[4]) == (1, 0),
          "4) listede 'ZZ Iznik', kayıtta 'ZZ İznik' → eşleşir ve UYUYOR (⚪ 0)", "çıkış %d · %s" % (k, s))

    # 5) ay hassasiyeti
    kok, _ = kok_kur(tmp, "s5a", KAYITLAR, [liste("1500-03", "ZZ Ay hassas", ["ZZ Ay"])])
    k, o = calistir(kok)
    s = sayilar(o)
    sonuc(k == 0 and s and (s[2], s[3]) == (1, 0), "5a) t=1500-03 (ay hassasiyeti, kırılma 03-15) → UYUYOR", "çıkış %d · %s" % (k, s))
    kok, _ = kok_kur(tmp, "s5b", KAYITLAR, [liste("1500-03-14", "ZZ Gün kayık", ["ZZ Ay"])])
    k, o = calistir(kok, "--liste", "Y")
    s = sayilar(o)
    sonuc(k == 1 and s and (s[2], s[3]) == (0, 1) and "(1g)" in o,
          "5b) t=1500-03-14 (tam gün, kırılma 03-15, 1 gün kayık) → YALANLIYOR (1g), çıkış 1", "çıkış %d · %s" % (k, s))

    # 6) kalıp dar
    ferman = ("{ t:\"1500-01-01\", b:\"ZZ Ferman\", tur:\"savas\", k:\"fetih\", etiket:[\"toprak-kazanc\"], "
              "d:%s, kaynak:\"sinav\" }," % J("Aynı gün iki ayrı ferman yayımladı: ZZ Bir, ZZ Iki."))
    kok, _ = kok_kur(tmp, "s6", KAYITLAR, [liste("1500-01-01", "ZZ Temiz", ["ZZ Bir"]), ferman])
    k, o = calistir(kok)
    s = sayilar(o)
    sonuc(s and s[0] == 1 and s[1] == 1, "6) 'Aynı gün iki ayrı ferman yayımladı: …' LİSTE DEĞİL → liste maddesi 1, ad 1", "%s" % (s,))

    # 7) parantezli ad içinde nokta
    kok, _ = kok_kur(tmp, "s7", KAYITLAR, [liste("1500-01-01", "ZZ Paren", ["ZZ Paren (M. Kemal)", "ZZ Bir"])])
    k, o = calistir(kok)
    s = sayilar(o)
    sonuc(k == 0 and s and (s[1], s[2], s[4]) == (2, 2, 0),
          "7) 'ZZ Paren (M. Kemal)' cümleyi bölmez: 2 ad, UYUYOR 2, ⚪ 0", "çıkış %d · %s" % (k, s))

    # 8) üyelik ≠ sayı
    kok, _ = kok_kur(tmp, "s8", KAYITLAR, [liste("1500-01-01", "ZZ Karışık", ["ZZ Bir", "ZZ Iki"])])
    d_ok = os.path.join(tmp, "d8.txt")
    kd, _ = calistir(kok, "--defter", d_ok, "--defter-yaz")
    k_ok, _ = calistir(kok, "--defter", d_ok)
    d_bozuk = os.path.join(tmp, "d8-takas.txt")
    io.open(d_bozuk, "w", encoding="utf-8").write("olaylar_zz.js¦1500-01-01¦deadbeef¦ZZ Baska Ad\n")
    k_b, o_b = calistir(kok, "--defter", d_bozuk)
    sonuc(kd == 0 and k_ok == 0, "8a) defter doğru → çıkış 0", "yazım %d · kontrol %d" % (kd, k_ok))
    sonuc(k_b == 1 and "ZZ Iki" in o_b, "8b) defterde 1 üye takas (SAYI AYNI 1=1) → çıkış 1, gerçek ad ile", "çıkış %d" % k_b)

    # 9) ölçülemedi
    sade = ("{ t:\"1500-01-01\", b:\"ZZ Sade madde\", tur:\"savas\", k:\"fetih\", etiket:[\"toprak-kazanc\"], "
            "d:\"liste yok\", kaynak:\"sinav\" },")
    kok, _ = kok_kur(tmp, "s9a", KAYITLAR, [sade])
    k, o = calistir(kok)
    sonuc(k == 2 and "liste maddesi" in o, "9a) hiç liste maddesi yok → çıkış 2 ('bayat yok' DEĞİL)", "çıkış %d" % k)
    kok, _ = kok_kur(tmp, "s9b", KAYITLAR, [liste("1500-01-01", "ZZ", ["ZZ Bir"])], eksik=girdi.GIRDI_DOSYALARI[1])
    k, o = calistir(kok)
    sonuc(k == 2, "9b) yerleşim girdisi eksik → çıkış 2", "çıkış %d" % k)
    kok, d = kok_kur(tmp, "s9c", KAYITLAR, [liste("1500-01-01", "ZZ", ["ZZ Bir"])])
    io.open(os.path.join(d, "kronoloji_zzbozuk.js"), "w", encoding="utf-8").write("window.KRONOLOJI_ZZBOZUK = [ { t:'1500-01-01', ;\n")
    k, o = calistir(kok)
    sonuc(k == 2 and "zzbozuk" in o, "9c) kronoloji dosyası sözdizimi bozuk → çıkış 2, dosya adı yazılı", "çıkış %d" % k)
    k, o = calistir(kok, "--defter", os.path.join(tmp, "yok-defter.txt"))
    sonuc(k == 2, "9d) üyelik defteri yok → çıkış 2", "çıkış %d" % k)

    # 10) gerçek ağaç
    k, o = calistir(KOK)
    s = sayilar(o)
    sonuc(k == 0 and s and s[2] + s[3] + s[4] == s[1] and s[5] + s[6] == s[4],
          "10) gerçek ağaç: UYUYOR+🔴+⚪ = ad sayısı, ⚪ = yok+belirsiz, defter taze → çıkış 0", "çıkış %d · %s" % (k, s))
finally:
    shutil.rmtree(tmp, ignore_errors=True)

print("=" * 72)
print("SONUÇ: %s" % ("TÜM SINAVLAR GEÇTİ — araç iki yönde çalışıyor" if HATA == 0 else "%d HATA — araç ÇALIŞIYOR SAYILMAZ" % HATA))
sys.exit(0 if HATA == 0 else 1)
