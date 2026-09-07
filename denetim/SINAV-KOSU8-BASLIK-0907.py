# -*- coding: utf-8 -*-
u"""BAYAT KOŞU BAŞLIĞI TARAMASI  ·  SINAV-KOSU8-0907  ·  7 Eylül 2026

SORU (1.MURAT'ın sevki): *"koşu 8 sonrası koşulacak ölçütlerden hangileri
BAYAT BİR KOŞU BAŞLIĞININ ALTINDA duruyor?"*

🔴 ÖNCE AYRIM — ve bu ayrım olmadan tarama YANLIŞ ALARM ÜRETİR:
   Bir belgenin *"koşu 7b CANLI"* demesi çoğu zaman **BAYATLIK DEĞİL,
   PROVENANSTIR**: ölçümün hangi koşullarda alındığını kaydeder ve o
   kayıt zamanla YANLIŞ OLMAZ — bir damgadır. (Bu betiğin kendi
   oturumu da `SINAV-KOSU8-R1TABAN-0907.txt`e *"koşu 8 CANLI"* yazdı ve
   yarın o satır bayat OLMAYACAK; ölçümün anını anlatıyor.)
   Bayat olan, koşu adının bir **BAŞLIKTA** ya da **YÜRÜRLÜKTEKİ BİR
   KISITTA** geçmesidir: *"KOŞU 7b BİTİNCE yapılacaklar"* gibi.

⇒ ÜÇ KOVA:
   🔴 BAŞLIK/KISIT  ilk satırlarda ya da gelecek kipli bir talimatta
   🟢 PROVENANS     ölçüm anının damgası (CANLI · sürüyor · o sırada)
   🟡 AYIRT EDİLEMEDİ  ikisi de değil ⇒ ELLE OKUNACAK, "temiz" DEĞİL

🔴 VE BU BİR SINIFLANDIRICI, BİR HÜKÜM DEĞİL. `§11`: *"eşleşme bulmak,
   doğru şeyi bulmak değildir"* — 🔴 kovaya düşen her dosya ELLE
   doğrulanır. Betiğin işi 46 dosyayı 3'e indirmek, karar vermek değil.

KOŞULUŞ:  py denetim/SINAV-KOSU8-BASLIK-0907.py
          py denetim/SINAV-KOSU8-BASLIK-0907.py --atesle
"""
from __future__ import unicode_literals

import io
import os
import re
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KOSU_RX = re.compile(r"ko(?:ş|s)u\s*7b|PID\s*3880", re.I)

# gelecek kipli / yürürlükteki kisit isaretleri
KISIT_RX = re.compile(
    r"bitince|koşulacak|kosulacak|yapılacak|yapilacak|bekliyor|BLOKE|"
    r"sıra|sira|adım|adim|önce koş|sonra koş|hedef|kabul ölçüt", re.I)
# ölçüm anının damgası
DAMGA_RX = re.compile(
    r"CANLI|sürüyor|suruyor|donuk|DONUK|o sırada|o sirada|iken|"
    r"ölçüldü|olculdu|koşarken|kosarken|sırasında|sirasinda", re.I)

BASLIK_SATIR = 8          # ilk kaç satır "başlık" sayılır

# ── ELLE OKUNMUŞ HÜKÜMLER — 7 Eylül 2026, SINAV-KOSU8-0907 ───────────────
# 🔴 Sınıflandırıcı bir HÜKÜM VERMEZ; 🔴/🟡 kovaya düşeni ELLE okurum.
#   Okuduğumu buraya yazıyorum, yoksa bir sonraki oturum aynı sekiz satırı
#   yeniden okur ve **ödenmiş bir işi yeni iş sanır** (`§11`, beş vaka).
#   Regex'i bu satırları yutacak kadar genişletmedim: gevşetmek, GERÇEK
#   bir bayat başlığı da yutardı — ve o, sekiz satır okumaktan pahalı.
ELLE_HUKUM = {
    ("denetim/HUKUM-NOT-ALANI-VE-1917-0906.md", 3):
        ("PROVENANS", "künye satırı: «VERİ VE ARAÇ YAZILMADI (koşu 7b)» — "
                      "ölçüm anının damgası, yürürlükte bir kısıt değil"),
    ("denetim/OLCUM-GLOB-TARIH-CIVISI-0907.md", 6):
        ("PROVENANS", "«ANLIK GÖRÜNTÜ: koşu 7b sürerken» — damga"),
    ("denetim/OLCUM-OYNATMA-TAKILMA-0907.md", 4):
        ("PROVENANS", "«Koşu 7b bitti (r6711), ölçüm koşuldu» — ölçümün anı"),
    ("denetim/OLCUM-OYNATMA-TAKILMA-0907.md", 5):
        ("PROVENANS", "«Ölçülen yayın: koşu 7b sonrası» — ölçümün konusu"),
    ("denetim/OLCUM-YANLIS-BULUNAMADI-0907.md", 5):
        ("PROVENANS", "«ANLIK GÖRÜNTÜ ... koşu 7b sürerken» — damga"),
    ("oturumlar/TESPIH.md", 6):
        ("ANLATI", "bayat brifing VAKASININ kaydı — dersin kendisi; "
                   "silinirse ders de silinir (`§3.5.1` emsali)"),
    ("oturumlar/KOSU-BITINCE-SIRA.md", 1):
        ("BAYAT", "🔴 GERÇEK: belgenin BAŞLIĞI «KOŞU 7b BİTİNCE» ve belge "
                  "koşu 8 sonrası ölçütleri taşıyor"),
    ("oturumlar/KOSU-BITINCE-SIRA.md", 4):
        ("BAYAT", "🔴 GERÇEK: «PID 3880 · koşu bittiği an yürütülecek» — "
                  "yürürlükteki bir kısıt, ve PID koşu 8'de 10780"),
}


def sinifla(satir, satir_no):
    u"""Tek satırı kovaya koyar.

    🔴 SIRA ÖNEMLİ VE İLK YAZIMDA YANLIŞTI: konum kuralı (`satir_no <=
      BASLIK_SATIR`) önce sorulunca, 3. satırdaki *"(koşu 7b sürüyor)"*
      gibi APAÇIK bir provenans damgası «BAŞLIK» diye sınıflanıyordu —
      ve ilk koşuda 28 dosya sahte olarak 🔴 kovaya düştü.
      Bir belgenin künyesi ZATEN ilk satırlardadır; provenans damgasının
      doğal yeri orasıdır. ⇒ DAMGA her zaman konumdan ÖNCE sorulur.
    📌 Ve bu dalı benim ateşlemem KAÇIRMIŞTI: damga ile KISIT arasındaki
      önceliği sınamıştım, damga ile BAŞLIK arasındakini sınamamıştım.
      `§11`: *"C13 iki yönü sına der ama HANGİ ÖZELLİĞİN sınanacağını
      söylemez."* Eksik dal şimdi eklendi.
    """
    if DAMGA_RX.search(satir):
        return "PROVENANS"
    if satir_no <= BASLIK_SATIR:
        return "BASLIK"
    if KISIT_RX.search(satir):
        return "KISIT"
    return "AYIRT-EDILEMEDI"


def tara():
    bulgu = []
    for kok, dizinler, dosyalar in os.walk(KOK):
        dizinler[:] = [d for d in dizinler
                       if d not in (".git", "node_modules", "__pycache__",
                                    "veri-kaynak", "assets", "arsiv")]
        for ad in dosyalar:
            if not ad.endswith(".md"):
                continue
            yol = os.path.join(kok, ad)
            try:
                with io.open(yol, encoding="utf-8", errors="replace") as f:
                    satirlar = f.read().splitlines()
            except Exception:                       # noqa: BLE001
                continue
            for i, s in enumerate(satirlar):
                if not KOSU_RX.search(s):
                    continue
                kova = sinifla(s, i + 1)
                bulgu.append((os.path.relpath(yol, KOK).replace("\\", "/"),
                              i + 1, kova, s.strip()[:96]))
    return bulgu


def atesleme():
    u"""C13② — sınıflandırıcının HER dalı, sahte satırla."""
    t = []

    def de(ad, bekle, olc):
        t.append((ad, bekle, olc, bekle == olc))

    de("BAŞLIK · ilk satırda geçen", "BASLIK",
       sinifla("# KOŞU 7b BİTİNCE — YÜRÜTÜLECEK SIRA", 1))
    de("PROVENANS · «koşu 7b CANLI»", "PROVENANS",
       sinifla("> Koşu 7b CANLI · data/*.js DONUK", 40))
    de("PROVENANS · damga KISIT'tan ÖNCE gelir", "PROVENANS",
       sinifla("koşu 7b sürüyor, bu yüzden ölçüm bitince yapılacak", 40))
    # 🔴 İLK ATEŞLEMEDE EKSİK OLAN DAL — ve gerçek koşuda 28 sahte 🔴 üretti
    de("PROVENANS · damga BAŞLIK KONUMUNDAN da ÖNCE gelir", "PROVENANS",
       sinifla("> 1.MURAT · 6 Eylül · VERİ YAZILMADI (koşu 7b sürüyor).", 3))
    de("BAŞLIK · damgasız bir künye satırı BAŞLIK kalır", "BASLIK",
       sinifla("# KOŞU 7b SONRASI PLAN", 2))
    de("KISIT · gelecek kipli talimat", "KISIT",
       sinifla("koşu 7b bitince şu sınav koşulacak", 40))
    de("AYIRT EDİLEMEDİ · ikisi de değil", "AYIRT-EDILEMEDI",
       sinifla("koşu 7b sayıları burada", 40))
    de("eşleşmeyen satır hiç sınıflanmaz", None,
       "BASLIK" if KOSU_RX.search("koşu 9 hakkında") else None)
    de("PID 3880 de yakalanır", True, bool(KOSU_RX.search("PID 3880 canlı")))
    de("«koşu 7» (b'siz) YAKALANMAZ", False, bool(KOSU_RX.search("koşu 7 bitti")))
    return t


def main():
    if "--atesle" in sys.argv:
        print("C13 ② ATEŞLEME — sahte satırlarla zorlanan dallar\n")
        kotu = 0
        for ad, b, o, ok in atesleme():
            print(("  🟢 " if ok else "  🔴 ") + ad.ljust(46) +
                  "beklenen %r · ölçülen %r" % (b, o))
            kotu += (not ok)
        print("\n%d/%d dal ateşledi" % (len(atesleme()) - kotu, len(atesleme())))
        return 1 if kotu else 0

    bulgu = tara()
    if len(bulgu) < 5:
        print("⚫ ÖLÇÜLEMEDİ — eşleşme şüpheli az (%d); desen bozuk olabilir"
              % len(bulgu))
        return 2
    dosyalar = sorted({b[0] for b in bulgu})
    print("═" * 78)
    print("BAYAT KOŞU BAŞLIĞI TARAMASI — «koşu 7b» / «PID 3880»")
    print("═" * 78)
    print("dosya %d · eşleşen satır %d" % (len(dosyalar), len(bulgu)))
    print("")
    for kova, isaret in (("BASLIK", "🔴"), ("KISIT", "🔴"),
                         ("AYIRT-EDILEMEDI", "🟡"), ("PROVENANS", "🟢")):
        k = [b for b in bulgu if b[2] == kova]
        print("%s %-18s %3d satır · %d dosya"
              % (isaret, kova, len(k), len({x[0] for x in k})))
        if kova != "PROVENANS":
            for yol, no, _, s in k:
                h = ELLE_HUKUM.get((yol, no))
                damga = ("  ✔ ELLE: %s — %s" % h) if h else "  ⬜ ELLE OKUNMADI"
                print("      %s:%d%s" % (yol, no, damga))
                print("        %s" % s)
        print("")
    # ── elle hükmün özeti: asıl cevap bu ────────────────────────────────
    okunan = [b for b in bulgu if (b[0], b[1]) in ELLE_HUKUM]
    gercek = [b for b in okunan if ELLE_HUKUM[(b[0], b[1])][0] == "BAYAT"]
    print("─" * 78)
    print("ELLE OKUNAN: %d satır · GERÇEKTEN BAYAT: %d satır · %d DOSYA"
          % (len(okunan), len(gercek), len({b[0] for b in gercek})))
    for yol, no, _, _s in gercek:
        print("   🔴 %s:%d — %s" % (yol, no, ELLE_HUKUM[(yol, no)][1]))
    print("")
    print("🔴 BU BİR SINIFLANDIRICI, HÜKÜM DEĞİL — 🔴 ve 🟡 kovalar ELLE okunur.")
    print("🟢 PROVENANS kovası BAYAT DEĞİLDİR: ölçümün anını kaydeder ve")
    print("   o kayıt zamanla yanlış olmaz. Bunları «bayat» saymak, 46")
    print("   dosyalık bir sahte borç listesi üretirdi.")
    return 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())
