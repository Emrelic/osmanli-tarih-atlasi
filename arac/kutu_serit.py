# -*- coding: utf-8 -*-
"""KÜNYE ŞERİDİ — hata görsellerinin alt şeridini tek görsele dizer.

Emre'nin ekran görüntülerinin altında şu şerit var:
    1577-01-01 · 26.59–31.73N · 43.13–49.34E · z5.1 · Osmanlı Tarih Atlası
    Madde: Azapkapı (Sokullu Mehmed Paşa) Camii'nin yaptırılması

Yani TARİH ve KOORDİNAT KUTUSU görselin içinde yazılı. Ama tam görseli
açmak pahalı — `PARTI.md`nin kendi uyarısı: bir görsel metnine göre ~30
kat. Oysa gereken bilgi alt ~40 pikselde.

Bu betik her görselin alt şeridini kesip ALT ALTA tek bir görselde
birleştirir: 30 görsel yerine 1 görsel, ve içinde 30 künye.

    py arac/kutu_serit.py parti-emrelic-0021
    py arac/kutu_serit.py parti-emrelic-0021 --yukseklik 46 --bolum 12
"""
import argparse
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KUTU = r"C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden"
CIKTI = os.path.join(os.environ.get("TEMP", "."), "kutu_serit")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("paket")
    ap.add_argument("--yukseklik", type=int, default=42,
                    help="alttan kesilecek piksel")
    ap.add_argument("--bolum", type=int, default=10,
                    help="tek çıktıya kaç şerit")
    a = ap.parse_args()

    try:
        from PIL import Image
    except ImportError:
        sys.exit("!! Pillow yok — `py -m pip install pillow`")

    kok = os.path.join(KUTU, a.paket)
    if not os.path.isdir(kok):
        sys.exit(f"!! paket yok: {kok}")
    gorseller = sorted(f for f in os.listdir(kok) if f.lower().endswith(".png"))
    if not gorseller:
        sys.exit("!! görsel yok")
    os.makedirs(CIKTI, exist_ok=True)

    print(f"{a.paket}: {len(gorseller)} görsel · alttan {a.yukseklik}px "
          f"· {a.bolum}'lu bölümler")

    seritler = []
    for ad in gorseller:
        im = Image.open(os.path.join(kok, ad)).convert("RGB")
        g, y = im.size
        s = im.crop((0, max(0, y - a.yukseklik), g, y))
        seritler.append((ad, s))

    yazilan = []
    for b0 in range(0, len(seritler), a.bolum):
        kume = seritler[b0:b0 + a.bolum]
        en = max(s.size[0] for _, s in kume)
        # ad etiketi için sol boşluk bırakmıyoruz; dosya adı sırayla yazılır
        toplam_y = sum(s.size[1] for _, s in kume) + 2 * len(kume)
        tuval = Image.new("RGB", (en, toplam_y), (255, 255, 255))
        y = 0
        for ad, s in kume:
            tuval.paste(s, (0, y))
            y += s.size[1] + 2
        yol = os.path.join(CIKTI, f"{a.paket}-serit-{b0 // a.bolum + 1}.png")
        tuval.save(yol)
        kb = os.path.getsize(yol) / 1024
        yazilan.append(yol)
        print(f"  {yol}   {kb:7.1f} KB   sıra: "
              + ", ".join(ad.replace('.png', '') for ad, _ in kume))
    print("\nşerit sayısı:", len(yazilan))


if __name__ == "__main__":
    main()
