# -*- coding: utf-8 -*-
"""İŞÇİ NABZI — 15 dakikada bir "kim çalışıyor, kim durdu" diye bakar.

🔴 BU BETİK `Monitor` ARACIYLA KURULUR, KABUĞUN ARKA PLANINA ATILMAZ.
   Sebebi 29 Ağustos 2026'da bir GECE'ye mal oldu: `tahta_bekci.py` bash'te
   çalıştırıldı, 47 süreç canlıydı ve HİÇBİRİ kimseyi uyandırmadı — çünkü
   Bash yalnız süreç BİTİNCE haber verir, sonsuz döngü de hiç bitmez.
   `Monitor` HER STDOUT SATIRINI ayrı bildirim yapar.

       Monitor:  py arac/_isci_nabzi.py
                 description : isci nabzi (15 dk)
                 persistent  : true

Ölçüt: son turda `denetim/` ve `data/` altına İŞÇİ ÇIKTISI yazıldı mı.
Yazılmadıysa bir satır basar ve koordinatörü UYANDIRIR — koordinatör de
oturumları `send_message` ile dürter.

⚠️ Ve sessizlik başarı değildir: bu betik "her şey yolunda" diye SUSMAZ,
her turda TEK satır basar. Susan bir nöbetçi, ölmüş bir nöbetçiden ayırt
edilemez.
"""
import io, json, os, re, sys, time, glob

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARA = int(os.environ.get("NABIZ_ARA", "900"))          # 15 dakika

DESENLER = [
    os.path.join(KOK, "denetim", "HUKUM-*.json"),
    os.path.join(KOK, "denetim", "BULGU-*.md"),
    os.path.join(KOK, "data", "yer_yama_*.js"),
    os.path.join(KOK, "data", "olaylar_ek*.js"),
]


def damgalar():
    d = {}
    for desen in DESENLER:
        for y in glob.glob(desen):
            try:
                d[y] = os.path.getmtime(y)
            except OSError:
                pass
    return d


def acik_madde():
    """Kutudaki açık madde sayısı — hüküm sözlüğünden okur, tahmin etmez."""
    kok = "C:/Users/emrem/OneDrive/Desktop/ClaudEmre/kutu/giden"
    acik = 0
    for y in glob.glob(os.path.join(kok, "*", "CEVAP.json")):
        try:
            d = json.load(io.open(y, encoding="utf-8"))
        except Exception:
            continue
        for v in (d.get("maddeler") or {}).values():
            if isinstance(v, dict) and (v.get("hukum") or "").strip() in (
                    "sirada", "olculecek"):
                acik += 1
    return acik


def yaz(s):
    try:
        sys.stdout.write(s + "\n")
    except UnicodeEncodeError:
        sys.stdout.write(s.encode("ascii", "replace").decode("ascii") + "\n")
    sys.stdout.flush()


# 🔴 KENAR TETİKLEMELİ — Emre'nin kuralı, 29 Ağustos 2026:
#   *"Token yiyen uyandırmaya karşıyım. Kendine atılan mesaja uyanma süreci
#    ASLA token yememeli ve gereksiz bağlamı yakıp oturumlara tur
#    attırmamalı."*
#
# İLK YAZIMDA HER TURDA BİR SATIR BASIYORDU ve gerekçesi şuydu: "susan bir
# nöbetçi, ölmüş bir nöbetçiden ayırt edilemez." Kural doğru ama BEDELİ
# ölçülmedi: 15 dakikada bir uyanma = günde 96 tur = ~500 bin – 1,4 M token,
# ve turların neredeyse tamamı "her şey yolunda" diyecekti.
# ⇒ Doğru çare susmak değil, KENAR'da konuşmak:
#       çalışıyordu → SUSTU        : BİR KEZ öt
#       susuyordu   → ÇALIŞMAYA BAŞLADI : BİR KEZ öt
#       aynı hâl sürüyor            : SUS
# Böylece "ölmüş nöbetçi" endişesi de karşılanıyor: hâl DEĞİŞTİĞİNDE mutlaka
# konuşur, yani sessizliği bir bilgi taşır — "değişen bir şey yok" demektir.
#
# 📌 Ve bu, bekçi mekanizmasının kendisiyle AYNI ilkedir: `tahta_bekci.py`
#   de tahtayı bedava okur ve YALNIZ yeni mesaj varsa konuşur. Nabız
#   onunla tutarlı hâle geldi.
onceki = damgalar()
onceki_acik = acik_madde()
hal = None                      # None · "calisiyor" · "sessiz"
sessiz_tur = 0

while True:
    time.sleep(ARA)
    simdi = damgalar()
    yeni = [y for y in simdi if y not in onceki]
    degisen = [y for y in simdi
               if y in onceki and simdi[y] > onceki[y] + 1.0]
    a = acik_madde()
    calisti = bool(yeni or degisen)
    yeni_hal = "calisiyor" if calisti else "sessiz"

    if calisti:
        sessiz_tur = 0
        if hal != "calisiyor":
            adlar = [os.path.basename(y) for y in (yeni + degisen)][:6]
            yaz("[NABIZ] CALISMAYA BASLADI · %d dosya (%s%s) · acik %d (%+d)"
                % (len(yeni) + len(degisen), ", ".join(adlar),
                   "..." if len(yeni) + len(degisen) > 6 else "",
                   a, a - onceki_acik))
    else:
        sessiz_tur += 1
        # Yalnız GEÇİŞTE öt. Süregelen sessizlikte SUS — ama iki saatte bir
        # (8 tur) hatirlat, cunku uzun sessizlik artik bir HABERdir.
        if hal == "calisiyor" or (hal is None and sessiz_tur == 1):
            yaz("[NABIZ] SESSIZ — isci ciktisi durdu · acik %d · "
                "ISCILERI send_message ILE DURT" % a)
        elif sessiz_tur % 8 == 0:
            yaz("[NABIZ] hala SESSIZ — %d turdur (%d dk) · acik %d"
                % (sessiz_tur, sessiz_tur * ARA // 60, a))

    hal = yeni_hal
    onceki, onceki_acik = simdi, a
