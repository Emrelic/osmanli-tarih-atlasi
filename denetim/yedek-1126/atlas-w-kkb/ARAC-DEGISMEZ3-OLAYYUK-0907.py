# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ⑮ — `:924` SINAVI: sessizce yüklenmeyen `olaylar*.js` var mı?

🔴 KUSUR SINIFI — *"bugün 0 olan bir dal, tam o yüzden görünmez"*:
   `denetle.py:924`  m = re.search(r"window\\.(OLAYLAR\\w*)\\s*=", js)
                     if not m: continue        ← DOSYA sessizce atlanır
   Bir `data/olaylar*.js` yanlış değişken adıyla yazılırsa (ör.
   `window.KRONOLOJI_X`) **hiç yüklenmez**, `Değişmez 2` o maddeleri
   görmez, ve sonuç bir hata değil **SAHTE «AÇIK kırılma»** olur —
   yani denetim *daha kötü* bir cevap verir, sessizce.

SINAV: `data/olaylar*.js` DOSYA SAYISI == `window.OLAYLAR*` TAŞIYAN SAYISI

⚠️ KAPSAM — `kronoloji*.js` BU SINAVIN KONUSU DEĞİL:
   `olaylari_yukle()` yalnız `olaylar*.js` glob'unu okur (`CLAUDE.md §5`:
   kronoloji KUYRUĞU kasten ayrı kova). Ölçüldü: 42 `kronoloji*.js`in
   **42'si de** `OLAYLAR` değişkeni taşımıyor ⇒ sınav onları görmemeli,
   yoksa 42 sahte kusur üretir. Bu yan teyit sınavın İÇİNDE, kontrol
   olarak koşuyor.

KULLANIM:  py ARAC-DEGISMEZ3-OLAYYUK-0907.py [dizin]
           dizin verilmezse `data/`. Ateşleme için ayrı dizin verilir —
           `data/` koşu 8'de DONUK, oraya sahte dosya YAZILMAZ.
"""
import io
import json
import os
import re
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RX = re.compile(r"window\.(OLAYLAR\w*)\s*=")


def olc(dizin):
    """(dosya, tasiyan, tasimayan, adlar) — denetle.py:924'ün ölçütüyle."""
    import glob
    dosyalar = sorted(glob.glob(os.path.join(dizin, "olaylar*.js")))
    tasimayan, adlar = [], {}
    for yol in dosyalar:
        js = open(yol, encoding="utf-8").read()
        m = RX.search(js)
        if not m:
            tasimayan.append(os.path.basename(yol))
        else:
            adlar.setdefault(m.group(1), []).append(os.path.basename(yol))
    return dosyalar, tasimayan, adlar


def kontrol_kronoloji(dizin):
    """`kronoloji*.js` bu sınavın konusu DEĞİL — kanıtı burada."""
    import glob
    k = sorted(glob.glob(os.path.join(dizin, "kronoloji*.js")))
    tasiyan = [os.path.basename(y) for y in k
               if RX.search(open(y, encoding="utf-8").read())]
    return len(k), tasiyan


def rapor(dizin, baslik):
    dosyalar, tasimayan, adlar = olc(dizin)
    n_k, k_tasiyan = kontrol_kronoloji(dizin)
    print("\n[%s]  %s" % (baslik, dizin))
    print("  olaylar*.js dosya        : %d" % len(dosyalar))
    print("  `window.OLAYLAR*` taşıyan: %d" % (len(dosyalar) - len(tasimayan)))
    if tasimayan:
        print("  🔴 SESSİZCE YÜKLENMEYEN  : %d" % len(tasimayan))
        for f in tasimayan:
            print("       %s" % f)
        print("     ⇒ bu dosyaların maddeleri `Değişmez 2`ye HİÇ girmiyor;")
        print("       sonuç bir hata değil SAHTE «AÇIK kırılma».")
    else:
        print("  ✓ 0 — hiçbir dosya sessizce elenmiyor")
    # ad çakışması — §7 ad alanı dersi
    cakisan = {a: f for a, f in adlar.items() if len(f) > 1}
    print("  benzersiz değişken adı   : %d" % len(adlar))
    if cakisan:
        print("  ⚠️ AYNI ADI KULLANAN DOSYALAR: %s" % cakisan)
        print("     (`olaylari_yukle` her dosyayı AYRI okuduğu için bugün")
        print("      zararsız — ama `§7` ad alanı dersi burada da geçerli)")
    print("  — kapsam kontrolü —")
    print("  kronoloji*.js            : %d · `OLAYLAR` taşıyan: %d %s"
          % (n_k, len(k_tasiyan), k_tasiyan[:3]))
    if n_k and not k_tasiyan:
        print("  ✓ KAPSAM DOĞRU: kronoloji kuyruğu bu sınavın konusu DEĞİL")
    return len(dosyalar), tasimayan, adlar, n_k, k_tasiyan


if len(sys.argv) > 1:                       # tek dizin modu (ateşleme)
    n, tsz, _, _, _ = rapor(sys.argv[1], "ÖLÇÜM")
    sys.exit(1 if tsz else 0)

# ═══════════════════ C13 — DÖRT AYAK ═══════════════════
print("=" * 74)
print("`:924` SINAVI — C13 dört ayak")
print("=" * 74)
hata = 0

# ③ GİRDİ — gerçek `data/` dizininden, enjekte DEĞİL
DATA = os.path.join(KOK, "data")
print("\n③ GİRDİ AYAĞI — gerçek dizin okunuyor")
n, tsz, adlar, n_k, k_tas = rapor(DATA, "① GEÇME AYAĞI · gerçek veri")
if tsz:
    print("   🔴 gerçek veride kusur VAR — geçme ayağı ölçülemez")
    hata += 1
else:
    print("   ✓ GEÇME: temiz veride sınav SESSİZ değil, `0` BASIYOR")
if n_k and k_tas:
    print("   🔴 KAPSAM BOZUK: kronoloji dosyası `OLAYLAR` taşıyor")
    hata += 1

# ② ATEŞLEME — sahte dosya, AYRI dizinde (`data/` DONUK)
TEST = os.path.join(os.environ.get("TEMP", "/tmp"), "_olayyuk_0907")
os.makedirs(TEST, exist_ok=True)
with open(os.path.join(TEST, "olaylar_dogru.js"), "w", encoding="utf-8") as f:
    f.write('window.OLAYLAR_DOGRU = [{t:"1453-05-29", b:"x"}];\n')
with open(os.path.join(TEST, "olaylar_yanlis_ad.js"), "w", encoding="utf-8") as f:
    f.write('window.KRONOLOJI_YANLIS = [{t:"1453-05-29", b:"y"}];\n')
with open(os.path.join(TEST, "kronoloji_kuyruk.js"), "w", encoding="utf-8") as f:
    f.write('window.KRONOLOJI_KUYRUK = [{t:"1500-01-01", b:"z"}];\n')
print("\n② ATEŞLEME AYAĞI — sahte dosyalar GERÇEK diske yazıldı")
n2, tsz2, _, n_k2, k_tas2 = rapor(TEST, "ATEŞLEME")
if "olaylar_yanlis_ad.js" in tsz2:
    print("   ✓ ATEŞLEDİ: yanlış değişken adlı dosya YAKALANDI")
else:
    print("   🔴 ATEŞLEMEDİ — sınav çalışmıyor")
    hata += 1
if "kronoloji_kuyruk.js" in tsz2:
    print("   🔴 kronoloji dosyasını KUSUR saydı — kapsam bozuk")
    hata += 1
else:
    print("   ✓ kronoloji dosyası kusur SAYILMADI (kapsam doğru)")

# ④ ÇIKTI — dönüş DÖKÜLEREK okundu
print("\n④ ÇIKTI AYAĞI — dönüş dökülüyor, varsayılmıyor")
d, t, a, nk, kt = olc(TEST)[0], olc(TEST)[1], olc(TEST)[2], *kontrol_kronoloji(TEST)
print("   tip: (%s, %s, %s) · uzunluk: %d, %d, %d"
      % (type(d).__name__, type(t).__name__, type(a).__name__, len(d), len(t), len(a)))
print("   taşımayan listesi: %s" % t)
print("   ad→dosya sözlüğü : %s" % a)
if len(t) != 1:
    print("   🔴 beklenen 1 taşımayan, ölçülen %d" % len(t))
    hata += 1
else:
    print("   ✓ bağımsız sayımla eşleşti (1)")

print("\n" + "=" * 74)
print("SONUÇ: %s" % ("✓ dört ayak da geçti" if not hata else "🔴 %d ayak DÜŞTÜ" % hata))
print("=" * 74)
json.dump({
    "_NOT": ("`:924` sınavı — dosya sayısı == `window.OLAYLAR*` taşıyan sayısı. "
             "Kapsam: yalnız `olaylar*.js`; `kronoloji*.js` KASTEN dışarıda "
             "(CLAUDE.md §5 iki kova). Ateşleme `data/` DIŞINDA yapıldı — "
             "koşu 8'de `data/` donuk."),
    "gercek_veri": {"dosya": n, "sessizce_elenen": tsz,
                    "benzersiz_degisken": len(adlar),
                    "kronoloji_dosyasi": n_k, "kronolojide_OLAYLAR": k_tas},
    "c13": {"gecme": not tsz, "atesleme": "olaylar_yanlis_ad.js" in tsz2,
            "kapsam": "kronoloji_kuyruk.js" not in tsz2, "hata": hata},
}, open(os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-OLAYYUK-0907.json"),
        "w", encoding="utf-8", newline=""), ensure_ascii=False, indent=1)
print("[YAZILDI] denetim/OLCUM-DEGISMEZ3-OLAYYUK-0907.json")
sys.exit(1 if hata else 0)
