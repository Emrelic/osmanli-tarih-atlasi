# -*- coding: utf-8 -*-
"""
GİRDİ — yerleşim verisinin TEK okuma noktası
=============================================
`arac/uret_petek.py` ve `arac/denetle.py` yerleşim verisini buradan okur.

## Neden ayrı bir modül

Bu depoda iki araç aynı veriyi FARKLI katılıkta okuduğu için bir kez üretim
çöktü: `denetle.py` JS dizisinin sonundaki fazladan virgüle toleranslıydı,
motor değildi — denetim "temiz" derken üretim düşüyordu (bkz. uret_petek.py
içindeki uyarı). Aynı hatanın çok dosyalı girdide tekrar etmemesi için okuma
mantığı ve DOSYA LİSTESİ tek yerde duruyor. Bir parti canlıya alınacaksa
değişecek tek şey aşağıdaki `GIRDI_DOSYALARI` listesidir.

## Neden glob değil, izin listesi

`data/yerlesimler_*.js` desenini çıplak okumak cazip ama TEHLİKELİ: depoda
merge'e hazır OLMAYAN partiler duruyor ve desen onları sessizce içeri alır.

  data/yerlesimler_asya.js    344 nokta — 98 devlet kimliği renkler.py'de YOK,
                              tamamı 62°D'nin doğusunda, harita penceresi dışı
  data/yerlesimler_avrupa.js  228 nokta — 15 kimlik renkler.py'de YOK, DSATUR
                              renk dağıtımı gerekiyor

Kimliği tanımsız nokta üretimde uyarı verir ve bölgesi BOYANMAZ; yani glob
kullanmak "bir dosya ekledim" ile "haritada renksiz delik açtım"ı aynı işleme
indirger. İzin listesiyle bir partiyi canlıya almak tek satırlık, gözden
geçirilmiş bir karar oluyor.

## Bir parti nasıl canlıya alınır

1. Partinin bütün devlet kimlikleri `arac/renkler.py`'deki BOYALAR'da olsun
2. `py arac/denetle.py` — altı denetim de temiz olsun (ad çakışması, 3 km
   yakınlık ve maske kontrolü bu modül üzerinden çalışır)
3. Dosya adını aşağıdaki listeye ekle
4. `py arac/uret_petek.py` — üretim koşarken hiçbir girdi dosyasına YAZILMAZ
"""
import io
import json
import math
import os
import re

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KOK, "data")

# ⚠️ SIRA ÖNEMLİ: aynı ad iki dosyada varsa hangisinin kazandığı değil, HATA
# verilmesi gerekir (aşağıda kontrol ediliyor). Sıra yalnız okunabilirlik için.
GIRDI_DOSYALARI = [
    "yerlesimler.js",           # çekirdek — Osmanlı ve komşuları
    # "yerlesimler_afrika.js",  # 153 nokta (Oturum 14) — merge provası temiz,
    #                           # r71 yayınlandıktan sonra açılacak
]

YAKINLIK_ESIK_KM = 3.0          # CLAUDE.md §11: 3 km içinde ikinci nokta açma


def _cevir(js, degisken):
    """`window.<degisken> = [ ... ];` gövdesini JSON'a çevirir."""
    js = "\n".join(l for l in js.split("\n") if not l.strip().startswith("//"))
    anahtar = f"window.{degisken} = "
    govde = js[js.index(anahtar) + len(anahtar):]
    govde = govde[:govde.rindex("]") + 1]
    j = re.sub(r'([{,]\s*)([A-Za-zçğıöşüÇĞİÖŞÜ_]\w*)\s*:', r'\1"\2":', govde)
    # JS'te dizi/nesne sonundaki fazladan virgül geçerli, JSON'da değil.
    j = re.sub(r',(\s*[\]}])', r'\1', j)
    return json.loads(j)


def oku_dosya(ad):
    """Tek dosyayı okur; `window.YERLESIMLER*` değişkenini kendisi bulur."""
    yol = os.path.join(DATA, ad)
    js = io.open(yol, encoding="utf-8").read()
    m = re.search(r"window\.(YERLESIMLER\w*)\s*=", js)
    if not m:
        raise ValueError(f"{ad}: window.YERLESIMLER* bulunamadı")
    return _cevir(js, m.group(1))


def km(a_lat, a_lon, b_lat, b_lon):
    orta = math.radians((a_lat + b_lat) / 2)
    return 111.32 * math.hypot(a_lat - b_lat, (a_lon - b_lon) * math.cos(orta))


def yukle(sessiz=False):
    """Bütün girdi dosyalarını birleştirip döker. Ad çakışmasında ValueError."""
    hepsi, nereden = [], {}
    for ad in GIRDI_DOSYALARI:
        kayitlar = oku_dosya(ad)
        for y in kayitlar:
            if y["ad"] in nereden:
                raise ValueError(
                    f"AD ÇAKIŞMASI: '{y['ad']}' hem {nereden[y['ad']]} hem {ad} "
                    f"içinde. Yerleşim adı benzersiz olmalı (VERI-YAPISI.md)."
                )
            nereden[y["ad"]] = ad
        hepsi.extend(kayitlar)
        if not sessiz:
            print(f"  {ad}: {len(kayitlar)} nokta")
    if not sessiz and len(GIRDI_DOSYALARI) > 1:
        print(f"  toplam: {len(hepsi)} nokta")
    return hepsi


def yakin_ciftler(Y, esik=YAKINLIK_ESIK_KM):
    """Eşikten yakın nokta çiftleri — mükerrer/çelişen kayıt avı."""
    ciftler = []
    for i in range(len(Y)):
        for j in range(i + 1, len(Y)):
            d = km(Y[i]["lat"], Y[i]["lon"], Y[j]["lat"], Y[j]["lon"])
            if d < esik:
                ciftler.append((d, Y[i]["ad"], Y[j]["ad"]))
    ciftler.sort()
    return ciftler
