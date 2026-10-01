# -*- coding: utf-8 -*-
"""PAKET ÇÖZÜCÜ — index.html'in GERÇEKTE yüklediği `data/*.js` kümesi.

🔴 NİÇİN VAR — ölçülmüş İKİ SESSİZ KÖRLÜK (1 Ekim 2026, KOŞU 19):

`arac/paketle.py` 29 Eylül 2026 10:54'te (`af0c78c6`) 279 betik etiketini 57'ye
indirdi: 288 kaynak dosya 30 pakete gömüldü. Orijinal dosya adları index.html'de
yalnızca **HTML YORUMLARINDA** kaldı — `<script src="…">` etiketleri artık
paketi gösteriyor.

index.html'i `src="data/<AD>.js"` diye TARAYAN her araç o andan itibaren BOŞ
KÜME okumaya başladı. Ve boş küme her öngörüyü doğrular:

    ① arac/denetle.py `_d8_d_dosyalari()`      → 0 dosya
       ⇒ Değişmez 8a: "0 birim (tavan 1611) ✓ · 0 (hat, gün) ölçüldü"
         13 `d_sinirlar*.js` dosyası paket_28/29'da. Tavan 27 Eylül'de
         249 hat / 479 (hat, gün) üzerinden ölçülmüştü. İKİ KOŞU boyunca
         (18 ve 19) bu değişmez HİÇBİR ŞEY ölçmedi ve ✓ bastı.

    ② arac/denetle_gorunur.py `_tarayici_yerlesim_dosyalari()` → 0 dosya
       ⇒ ③ yerleşim görünürlüğü denetimi BOŞ küme üzerinde gezdi.
         92 `yerlesimler*.js` dosyası paketlenmiş; biri bile görülmedi.

📌 Kusur paketlemede DEĞİL: paketleme doğru ve ölçülmüş bir iyileştirmeydi
   (ilk ziyaret ~12,5 sn kısaldı). Kusur, dosya listesini **sunum
   katmanından** okuyan araçlardaydı — ve `denetle.py`nin kendi yorumu
   *"liste burada TUTULMAZ"* diyerek bunu bir ERDEM sayıyordu. Doğruydu;
   eksik olan, o listenin artık bir DOLAYLAMA arkasında olmasıydı.

🔴 TASARIM KARARI — boş küme DÖNDÜRÜLMEZ, BAĞIRIR.
   Bu modül hiçbir koşulda sessizce boş liste vermez. Körlüğü mümkün kılan şey
   0'ın geçerli bir cevap olmasıydı. `PaketCozHatasi` fırlatmak, ✓ basmaktan
   iyidir: `D204` — `ölçülemedi ≠ yok ≠ temiz`.

📌 `D244`ün çaresi: *"bir biçim tuzağının çaresi yeni bir kural değil, o biçimi
   tanıyan TEK PAYLAŞILAN OKUYUCUDUR."* Bu modül o okuyucudur. Yeni bir araç
   index.html'den dosya listesi çıkarmak isterse BURAYI çağırır, regex yazmaz.

⚠️ MOTOR TUZUNDA DEĞİLDİR (`CLAUDE.md §9.1`): tuz `uret_petek.py` · `renkler.py`
   · `girdi.py` · `motor_onbellek.py`. Bu dosya onlardan biri değil ve onları
   import etmez ⇒ önbelleği GEÇERSİZ KILMAZ. Çözücü bilerek `girdi.py`ye
   KONULMADI; oraya bir satır eklemek 1 GB'lık önbelleği öldürürdü.

⚠️ VE BU, `girdi.GIRDI_DOSYALARI` İLE KARIŞTIRILMAZ. İkisi ayrı evrendir ve
   bilerek ayrıdır (`CLAUDE.md §6`): `girdi.py` motorun PETEK ÜRETTİĞİ dar
   listedir (93 dosya); bu modül tarayıcının YÜKLEDİĞİ geniş listedir.
   Hangisinin sorulduğu her çağrı yerinde bilinmek zorundadır.

KULLANIM
    from paket_coz import index_kaynaklari, index_esleyen
    hepsi = index_kaynaklari(KOK)             # ['data/…', …] paketler ÇÖZÜLMÜŞ
    dh    = index_esleyen(KOK, r'd_sinirlar') # yalnız eşleşenler

SINAV
    py arac/paket_coz.py            # öz sınav: iki yönde + sayılar
"""
import io
import json
import os
import re

# index.html'deki betik etiketleri (sorgu dizgisi ?v=rNN atılır)
_BETIK = re.compile(r'<script[^>]+\bsrc="(data/[^"?#]+\.js)')
# bir paket adı mı
_PAKET = re.compile(r'^data/paket_\d+\.js$')


class PaketCozHatasi(RuntimeError):
    """Çözücü boş/tutarsız sonuç üretti — SESSİZ GEÇME YASAK."""


def _oku(yol):
    return io.open(yol, encoding="utf-8").read()


def _kunye(kok):
    y = os.path.join(kok, "data", "paket_kunye.json")
    if not os.path.isfile(y):
        raise PaketCozHatasi(
            "data/paket_kunye.json YOK — paketler çözülemez. index.html paket "
            "yüklüyorsa bu dosya ŞART; `py arac/paketle.py` onu yazar.")
    k = json.loads(_oku(y))
    harita = {}
    for p in k.get("paketler") or []:
        harita[p["paket"]] = [s["yol"] for s in p.get("kaynak") or []]
    if not harita:
        raise PaketCozHatasi("paket_kunye.json BOŞ — 0 paket tanımlı.")
    return harita


def index_kaynaklari(kok, ham=False):
    """index.html'in yüklediği `data/*.js` yolları; paketler AÇILMIŞ.

    `ham=True` ise paketler açılmaz (etiketler olduğu gibi).
    🔴 Sonuç boş çıkarsa `PaketCozHatasi` fırlatır — sessizce [] DÖNMEZ.
    """
    h = _oku(os.path.join(kok, "index.html"))
    etiket = []
    for y in _BETIK.findall(h):
        if y not in etiket:
            etiket.append(y)
    if not etiket:
        raise PaketCozHatasi(
            "index.html'de hiç `<script src=\"data/….js\">` bulunamadı. "
            "Dosya taşındı, biçim değişti ya da yol yanlış — bu bir ÖLÇÜM "
            "ARIZASIDIR, 'veri yok' DEĞİL.")
    if ham:
        return etiket

    kunye = None
    cozulmus, eksik = [], []
    for y in etiket:
        if not _PAKET.match(y):
            if y not in cozulmus:
                cozulmus.append(y)
            continue
        if kunye is None:
            kunye = _kunye(kok)
        if y not in kunye:
            eksik.append(y)
            continue
        for k in kunye[y]:
            if k not in cozulmus:
                cozulmus.append(k)
    if eksik:
        raise PaketCozHatasi(
            "index.html şu paketleri yüklüyor ama künyede YOK: %s ⇒ içerikleri "
            "ölçülemez. `py arac/paketle.py yenile` künyeyi tazeler."
            % ", ".join(eksik))
    if not cozulmus:
        raise PaketCozHatasi("çözülen kaynak 0 — tutarsız künye.")
    return cozulmus


def index_esleyen(kok, desen):
    """Çözülmüş listeden `desen` (regex, yol üzerinde `search`) tutanlar.

    ⚠️ Boş sonuç BURADA meşrûdur (o sınıftan dosya gerçekten olmayabilir), ama
    çağıran yer 0'ı 'temiz' saymadan ÖNCE beklediği sayıyı bilmek zorundadır.
    """
    r = re.compile(desen)
    return [y for y in index_kaynaklari(kok) if r.search(y)]


def _sinav():
    kok = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    print("KÖK: %s" % kok)
    ham = index_kaynaklari(kok, ham=True)
    hepsi = index_kaynaklari(kok)
    paket = [y for y in ham if _PAKET.match(y)]
    print("  etiket (ham)       : %d  — bunların %d'i paket" % (len(ham), len(paket)))
    print("  çözülmüş kaynak    : %d" % len(hepsi))
    diskte_yok = [y for y in hepsi if not os.path.isfile(os.path.join(kok, *y.split("/")))]
    print("  diskte olmayan     : %d%s" % (len(diskte_yok),
                                           (" \U0001F534 " + ", ".join(diskte_yok[:5])) if diskte_yok else ""))

    print("\n  --- körlüğü ölçen iki sınıf ---")
    tamam = True
    for ad, desen, en_az in (("d_sinirlar (Değişmez 8a)", r"/d_sinirlar", 10),
                             ("yerlesimler (görünürlük ③)", r"/yerlesimler", 50)):
        n = len(index_esleyen(kok, desen))
        iyi = n >= en_az
        tamam = tamam and iyi
        print("  %-28s %4d  (en az %d bekleniyor)  %s"
              % (ad, n, en_az, "✓" if iyi else "\U0001F534"))

    print("\n  --- YÖN 1: eski (regex) yol ne buluyordu ---")
    h = _oku(os.path.join(kok, "index.html"))
    e1 = len(re.findall(r'src="(data/d_sinirlar[^"?]*\.js)', h))
    e2 = 1 if re.search(r'<script src="(data/yerlesimler\.js)', h) else 0
    print("  denetle.py eski deseni        : %d  %s"
          % (e1, "\U0001F534 KÖR" if e1 == 0 else ""))
    print("  denetle_gorunur eski deseni   : %d  %s"
          % (e2, "\U0001F534 KÖR" if e2 == 0 else ""))
    print("\n%s" % ("✓ ÇÖZÜCÜ SAĞLAM" if tamam else "\U0001F534 SINAV BAŞARISIZ"))
    return 0 if tamam else 1


if __name__ == "__main__":
    import sys
    sys.stdout.reconfigure(encoding="utf-8")
    sys.exit(_sinav())
