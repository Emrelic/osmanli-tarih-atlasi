# -*- coding: utf-8 -*-
"""📅 TARİH SINAVI — belgeli bir tarihte harita doğru mu?

🔴 NİÇİN VAR (Emre, 11 Ağustos 2026):
    "Bu siteye bakan hiçbir Türk, Alman, Fransız, İngiliz, İtalyan, Rus
     haritaya bakınca KABAK GİBİ SIRITAN hataları görmemeli. … Ortaçağdan
     bu yana çizip durduğumuz haritayı EN SONDAN BAŞLAYARAK, 1923'ten
     itibaren dünya haritaları verilerini kontrol ederek BİREBİR çizmelisin
     ve eski tarihe doğru ADIM ADIM gelmelisin."

Teşhisi `KALITE-ZAMANA-GORE.md`de: gereken hassasiyet TARİHİN FONKSİYONUDUR.
Petek sistemi sınır BELİRSİZKEN makul bir tahmindir, BELGELİYKEN gereksiz.

📌 Bu araç DÜZELTMEZ, ÖLÇER. Sebebi: ölçülmemiş bir kusur düzeltilemez, ve
   düzeltme yönü (melez motor / üst çizim / kalite etiketi) henüz Emre'nin
   kararında. Ölçüm o karardan BAĞIMSIZ olarak bugün yapılabilir.

⚠️ EVRENİ AÇIKÇA: bu araç YERLEŞİM VERİSİNİ okur (`girdi.py`), yayındaki
   ÇİZİLMİŞ GEOMETRİYİ değil. Yani "o noktanın sahibi doğru mu" der,
   "o noktanın çevresindeki toprak doğru boyanmış mı" DEMEZ. İkincisi ayrı
   bir ölçümdür ve bu araç onu YAPMAZ — `arac/olc_enklav/` ailesinin işi.
   ("kendi ara ürünüm mü, yayındaki çıktı mı" — 11 Ağustos dersi.)

Kullanım:
    py arac/sinav_tarih/sinav.py                     tüm sınavlar
    py arac/sinav_tarih/sinav.py 1923-lozan          tek sınav
    py arac/sinav_tarih/sinav.py --ayrinti           geçenleri de bas
"""
import glob
import io
import json
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.join(KOK, "arac"))


def yerlesimleri_oku():
    import girdi
    Y = []
    for f in girdi.GIRDI_DOSYALARI:
        Y.extend(girdi.oku_dosya(f))
    return Y


def sahip(y, g):
    """VERI-YAPISI.md sırası: v → d → s. Bulunamazsa None."""
    for p in (y.get("v") or []):
        if p["f"] <= g < p["t"]:
            return "tabi"
    for p in (y.get("d") or []):
        if p["f"] <= g < p["t"]:
            return "OSMANLI"
    for p in (y.get("s") or []):
        if p["f"] <= g < p["t"]:
            return p.get("d")
    return None


def nokta_bul(Y, ad):
    """Tam ad, sonra 'ad (…)' biçimi, sonra parça. Belirsizlik BİLDİRİLİR."""
    a = ad.lower()
    tam = [y for y in Y if y["ad"].lower() == a]
    if tam:
        return tam[0], "tam"
    onek = [y for y in Y if y["ad"].lower().startswith(a + " (")]
    if len(onek) == 1:
        return onek[0], "önek"
    parca = [y for y in Y if a in y["ad"].lower()]
    if len(parca) == 1:
        return parca[0], "parça"
    if len(parca) > 1:
        return None, "BELİRSİZ:%d" % len(parca)
    return None, "YOK"


def sinav_kos(yol, Y, ayrinti=False):
    with io.open(yol, encoding="utf-8") as f:
        s = json.load(f)
    gun = s["_gun"]
    print("=" * 74)
    print("📅 %s   ·   gün: %s   ·   kalem: %d"
          % (s["_ad"], gun, len(s["kalemler"])))
    print("=" * 74)

    gecti, kaldi, yok, belirsiz = [], [], [], []
    for k in s["kalemler"]:
        y, nasil = nokta_bul(Y, k["yer"])
        if y is None:
            (belirsiz if nasil.startswith("BELİRSİZ") else yok).append(
                (k, nasil))
            continue
        d = sahip(y, gun)
        bek = k["beklenen"]
        if d is not None and d in bek:
            gecti.append((k, y, d))
        else:
            kaldi.append((k, y, d))

    if kaldi:
        print("\n🔴 TUTMAYAN — %d" % len(kaldi))
        for k, y, d in kaldi:
            print("   %-14s veri: %-22s beklenen: %s"
                  % (k["yer"], str(d), " | ".join(k["beklenen"])))
            print("      ↳ %s" % k["niçin"])
    if yok:
        print("\n⚪ NOKTASI YOK — %d  (yanlış DEĞİL, İFADE EDİLEMİYOR)" % len(yok))
        for k, _ in yok:
            print("   %-14s %s" % (k["yer"], k["niçin"]))
    if belirsiz:
        print("\n🟡 ADI BELİRSİZ — %d  (ölçülemedi ≠ temiz)" % len(belirsiz))
        for k, n in belirsiz:
            print("   %-14s %s" % (k["yer"], n))
    if ayrinti and gecti:
        print("\n🟢 TUTAN — %d" % len(gecti))
        for k, y, d in gecti:
            print("   %-14s %s" % (k["yer"], d))

    n = len(s["kalemler"])
    print("\n" + "-" * 74)
    print("  🟢 tutan %d/%d (%%%.0f)  ·  🔴 tutmayan %d  ·  ⚪ noktasız %d"
          "  ·  🟡 belirsiz %d"
          % (len(gecti), n, 100.0 * len(gecti) / max(1, n),
             len(kaldi), len(yok), len(belirsiz)))
    # ⚠️ "noktasız" ve "belirsiz" TEMİZ SAYILMAZ — ölçülemedi demektir.
    print("  ⚠️  ölçülemeyen %d kalem TEMİZ SAYILMAZ" % (len(yok) + len(belirsiz)))
    return len(kaldi), len(yok) + len(belirsiz)


def main(argv):
    ayrinti = "--ayrinti" in argv
    hedef = [a for a in argv[1:] if not a.startswith("--")]
    dizin = os.path.dirname(os.path.abspath(__file__))
    dosyalar = sorted(glob.glob(os.path.join(dizin, "*.json")))
    if hedef:
        dosyalar = [d for d in dosyalar
                    if any(h in os.path.basename(d) for h in hedef)]
    if not dosyalar:
        print("!! sınav dosyası bulunamadı")
        return 1
    Y = yerlesimleri_oku()
    print("evren: %d yerleşim (girdi.py)" % len(Y))
    top_k, top_o = 0, 0
    for d in dosyalar:
        k, o = sinav_kos(d, Y, ayrinti)
        top_k += k
        top_o += o
    print("\n" + "=" * 74)
    print("TOPLAM: 🔴 %d tutmayan · ⚠️ %d ölçülemeyen" % (top_k, top_o))
    return 1 if top_k else 0


if __name__ == "__main__":
    if getattr(sys, "stdout", None) is not None and hasattr(sys.stdout, "buffer"):
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8",
                                      errors="replace")
    sys.exit(main(sys.argv))
