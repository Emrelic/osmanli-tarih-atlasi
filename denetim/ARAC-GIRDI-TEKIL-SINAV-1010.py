# -*- coding: utf-8 -*-
"""GIRDI-TEKIL-1010 — yerleşim ADI TEKİLLİĞİ kapısının sınavı (iki yönde).

Kapı: `arac/girdi.py` `yukle()` → `raise ValueError("AD ÇAKIŞMASI: …")`.
Bu kapı 30 Temmuz 2026'dan beri VAR (35436fe9/93dc970b). D5-GUN-1010 onu
"HATA" diye grep edip bulamadı ve "kontrol yok" dedi. Bu sınav kapının
ötüp ötmediğini sınar. Sınavı kapı da sınar: Y kolunda kapı sökülünce
sınav aynı girdiye "sessiz" demek zorunda.

Sorular:
  S1  iki dosyada aynı ad                ⇒ ValueError, mesajda iki dosya adı
  S2  aynı dosyada aynı ad iki kez        ⇒ ValueError
  S3  aynı ad, farklı harf büyüklüğü/aksan ⇒ hata YOK (Kudüs/Kudus · Roma/roma)
  S4  aynı ad + parantezli ek             ⇒ hata YOK (Roma / Roma (Queensland))
  S5  GERÇEK veri (GIRDI_DOSYALARI)       ⇒ temiz, kayıt sayısı basılır
  Y1  KAPI SÖKÜLMÜŞ (raise yerine pass), S1 girdisi ⇒ SESSİZ, 2 kayıt döner
      ve {ad: kayıt} sözlüğü birini YUTAR (bugünkü korumanın neyi önlediği)
  Y2  KAPI SÖKÜLMÜŞ, S2 girdisi           ⇒ SESSİZ

Kullanım:  py denetim/ARAC-GIRDI-TEKIL-SINAV-1010.py [--kok <depo kökü>]
Çıkış: 0 hepsi geçti · 1 bir soru düştü · 2 ölçülemedi (kapı metni bulunamadı)
"""
import io, os, re, sys, shutil, tempfile, types, argparse

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
ap = argparse.ArgumentParser()
ap.add_argument("--kok", default=os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
KOK = os.path.abspath(ap.parse_args().kok)
ARAC = os.path.join(KOK, "arac")
sys.path.insert(0, ARAC)
import girdi  # noqa: E402

print(f"kök: {KOK}")
SONUC = []


def soru(ad, gecti, ayrinti=""):
    SONUC.append(gecti)
    print(f"  {'✓' if gecti else '✗'} {ad}" + (f" — {ayrinti}" if ayrinti else ""))


def kayit(ad, lat, lon):
    return (f'{{ ad:"{ad}", tur:"sehir", lat:{lat}, lon:{lon}, g:0, k:0, '
            f'd:[], s:[{{d:"__BOSLUK__", f:"1300-01-01", t:"1400-01-01"}}] }},')


def dosya(kok, ad, degisken, kayitlar):
    with io.open(os.path.join(kok, ad), "w", encoding="utf-8") as f:
        f.write(f"// sentetik\nwindow.{degisken} = [\n" + "\n".join(kayitlar) + "\n];\n")


def kos(modul, dosyalar):
    """`modul.yukle()`yi sentetik dosya kümesiyle koşturur; (kayıtlar|None, hata|None)."""
    tmp = tempfile.mkdtemp(prefix="tekil_sinav_")
    eski = (modul.DATA, modul.GIRDI_DOSYALARI)
    try:
        for ad, (degisken, kk) in dosyalar.items():
            dosya(tmp, ad, degisken, kk)
        modul.DATA, modul.GIRDI_DOSYALARI = tmp, tuple(dosyalar)
        try:
            return modul.yukle(sessiz=True), None
        except ValueError as e:
            return None, str(e)
    finally:
        modul.DATA, modul.GIRDI_DOSYALARI = eski
        shutil.rmtree(tmp, ignore_errors=True)


IKI_DOSYA = {"a.js": ("YERLESIMLER_A", [kayit("Tekilköy", 40.0, 30.0)]),
             "b.js": ("YERLESIMLER_B", [kayit("Tekilköy", 41.0, 31.0)])}
AYNI_DOSYA = {"a.js": ("YERLESIMLER_A", [kayit("Tekilköy", 40.0, 30.0),
                                          kayit("Tekilköy", 41.0, 31.0)])}

print("\nYAMALI/BUGÜNKÜ kapı (girdi.py olduğu gibi)")
Y, h = kos(girdi, IKI_DOSYA)
soru("S1 iki dosyada aynı ad ⇒ HATA", h is not None and "AD ÇAKIŞMASI" in h
     and "a.js" in h and "b.js" in h, h or f"SESSİZ, {len(Y)} kayıt")
Y, h = kos(girdi, AYNI_DOSYA)
soru("S2 aynı dosyada aynı ad ⇒ HATA", h is not None and "AD ÇAKIŞMASI" in h,
     h or f"SESSİZ, {len(Y)} kayıt")
Y, h = kos(girdi, {"a.js": ("YERLESIMLER_A", [kayit("Kudüs", 31.7, 35.2), kayit("Roma", 41.9, 12.5)]),
                   "b.js": ("YERLESIMLER_B", [kayit("Kudus", -6.8, 110.8), kayit("roma", 42.0, 12.6),
                                              kayit("KUDÜS", 31.8, 35.3)])})
soru("S3 harf/aksan farkı ⇒ hata YOK", h is None and len(Y) == 5, h or f"{len(Y)} kayıt")
Y, h = kos(girdi, {"a.js": ("YERLESIMLER_A", [kayit("Roma", 41.9, 12.5)]),
                   "b.js": ("YERLESIMLER_B", [kayit("Roma (Queensland)", -26.6, 148.8)])})
soru("S4 parantezli ek ⇒ hata YOK", h is None and len(Y) == 2, h or f"{len(Y)} kayıt")
try:
    Y = girdi.yukle(sessiz=True)
    adlar = [y["ad"] for y in Y]
    soru("S5 gerçek veri ⇒ temiz", len(adlar) == len(set(adlar)),
         f"{len(girdi.GIRDI_DOSYALARI)} dosya · {len(Y)} kayıt · birebir mükerrer "
         f"{len(adlar) - len(set(adlar))}")
except ValueError as e:
    soru("S5 gerçek veri ⇒ temiz", False, str(e))

# --- Y kolu: kapı sökülmüş kopya. Sınav kendini sınar. -----------------------
print("\nKAPI SÖKÜLMÜŞ kopya (raise → pass) — sınav kendini sınıyor")
kaynak = io.open(os.path.join(ARAC, "girdi.py"), encoding="utf-8").read()
desen = re.compile(r'(\n(\s*)if y\["ad"\] in nereden:\n)(?:\2    .*\n|\s*\n)+?(\2    \)\n)')
m = desen.search(kaynak)
if not m:
    print("  ⚠️ ÖLÇÜLEMEDİ — kapı bloğu girdi.py'de bulunamadı (metin değişmiş?)")
    sys.exit(2)
sokuk = kaynak[:m.start()] + f"\n{m.group(2)}if y[\"ad\"] in nereden:\n{m.group(2)}    pass\n" + kaynak[m.end():]
yamasiz = types.ModuleType("girdi_kapisiz")
yamasiz.__file__ = os.path.join(ARAC, "girdi.py")
exec(compile(sokuk, "girdi_kapisiz", "exec"), yamasiz.__dict__)
Y, h = kos(yamasiz, IKI_DOSYA)
yutulan = (len(Y) - len({y["ad"]: y for y in Y})) if Y else None
soru("Y1 kapısız, iki dosya ⇒ SESSİZ (sınav ayırt ediyor)", h is None and len(Y) == 2,
     h or f"{len(Y)} kayıt döndü, {{ad: kayıt}} sözlüğü {yutulan} kaydı yuttu")
Y, h = kos(yamasiz, AYNI_DOSYA)
soru("Y2 kapısız, aynı dosya ⇒ SESSİZ", h is None and len(Y) == 2, h or f"{len(Y)} kayıt")

g = sum(SONUC)
print(f"\nSONUÇ: {g}/{len(SONUC)} geçti")
sys.exit(0 if g == len(SONUC) else 1)
