# -*- coding: utf-8 -*-
"""BİRLEŞTİRME SINAVI — sekiz oturumun ek okuma yamaları YAN YANA KOYULABİLİR Mİ?

🔴 NİÇİN GEREKTİ: her oturum KENDİ dosyasını ve kendi kimliklerini
tek başına sınadı ("596 mevcut id ile çarpışma 0"). Ama hiçbiri
ÖTEKİ YEDİSİNİ görmedi. Yedi ayrı "temiz" raporu, yan yana konunca
temiz olmak zorunda DEĞİLDİR.

📌 `YASALAR C16`: denetimin evrenindeki bütün kovalar sayılır; görmediği
kovası olan denetim, o kova için HİÇ YOKTUR. Burada kova = öteki oturumlar.

Üç soru sorar:
  ① Yama dosyaları AYRIŞTIRILABİLİR mi (node --check)?
  ② Değişken adları çarpışıyor mu (window.EKOKUMA_P76x)?
  ③ Kart kimlikleri çarpışıyor mu — yamalar ARASINDA ve CANLI veriyle?

Çıkış 0 = birleştirilebilir · 1 = çarpışma var · 2 = ölçülemedi.

⚠️ Bu betik ölçer, DÜZELTMEZ. Hiçbir dosyaya yazmaz.
"""
import io
import json
import os
import re
import subprocess
import sys

# 🔴 Windows konsolu cp1254'tür ve ✓ · 🔴 · ⏳ gibi imler UnicodeEncodeError
# atar. Bu projede tam bu hata bir NÖBETÇİYİ öldürdü ve 43 dakika fark
# edilmedi (7 Eylül, TESPIH.md). Ölçüm aletinin çökmesi, ölçümün "temiz"
# görünmesinden beterdir: çıkış kodu 1 olur ve "çakışma var" diye okunur.
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")
except Exception:                                            # noqa: BLE001
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DENETIM = os.path.join(KOK, "denetim")
DATA = os.path.join(KOK, "data")

# Sekiz oturumun sonek tahsisi (M-5024). Dosya YOKSA "henüz teslim etmedi"
# demektir — eksiklik değil, o yüzden ölçüm 'beklemede' der, hata vermez.
TAHSIS = [
    ("HARITA-0076",       "p76a"),
    ("EKOKUMA-0076-A",    "p76b"),
    ("EKOKUMA-0076-B",    "p76c"),
    ("KRONO-0076-A",      "p76d"),
    ("KRONO-0076-B",      "p76e"),
    ("KRONO-0076-C",      "p76f"),
    ("SINIR-BERLIN-0076", "p76g"),
    ("SINIR-CIZGI-0076",  "p76h"),
]

ID_DESENI = re.compile(r'(?:^|[{,\s])id\s*:\s*["\']([^"\']+)["\']')
DEGISKEN_DESENI = re.compile(r'window\.([A-Z0-9_]+)\s*=')


def _oku(yol):
    return io.open(yol, encoding="utf-8").read()


def _node_check(yol):
    """node --check — yoksa 'ölçülemedi' döner, 'temiz' DEĞİL (B9)."""
    try:
        s = subprocess.run(["node", "--check", yol],
                           capture_output=True, text=True, timeout=60)
        return (s.returncode == 0), (s.stderr or "").strip()[:200]
    except FileNotFoundError:
        return None, "node bulunamadı"
    except Exception as e:                                   # noqa: BLE001
        return None, str(e)[:200]


def main():
    print("BİRLEŞTİRME SINAVI · parti-emrelic-0076")
    print("=" * 72)

    yamalar = []          # (oturum, sonek, yol)
    beklenen = []
    for oturum, sonek in TAHSIS:
        yol = os.path.join(DENETIM, "%s-YAMA-ekokuma_%s.js" % (oturum, sonek))
        (yamalar if os.path.exists(yol) else beklenen).append((oturum, sonek, yol))

    print("teslim edilmiş yama : %d" % len(yamalar))
    for o, s, _ in yamalar:
        print("    ✓ %-20s %s" % (o, s))
    if beklenen:
        print("beklemede           : %d  (henüz teslim edilmedi — EKSİKLİK DEĞİL)" % len(beklenen))
        for o, s, _ in beklenen:
            print("    ⏳ %-20s %s" % (o, s))
    if not yamalar:
        print("\n⚠️ Ölçülecek yama YOK — sonuç 'temiz' değil ÖLÇÜLEMEDİ.")
        return 2

    # ① SÖZDİZİMİ
    print("\n① SÖZDİZİMİ (node --check)")
    kirik, olculemedi = [], []
    for o, s, yol in yamalar:
        ok, hata = _node_check(yol)
        if ok is None:
            olculemedi.append(o)
            print("    ⚪ %-20s ÖLÇÜLEMEDİ — %s" % (o, hata))
        elif ok:
            print("    ✓ %-20s temiz" % o)
        else:
            kirik.append(o)
            print("    🔴 %-20s KIRIK — %s" % (o, hata))

    # ② DEĞİŞKEN ADI
    print("\n② DEĞİŞKEN ADI (window.EKOKUMA_*)")
    degisken = {}
    for o, s, yol in yamalar:
        adlar = DEGISKEN_DESENI.findall(_oku(yol))
        for a in adlar:
            degisken.setdefault(a, []).append(o)
        print("    %-20s %s" % (o, ", ".join(adlar) or "🔴 window.* YOK"))
    degisken_cakisma = {a: v for a, v in degisken.items() if len(v) > 1}
    if degisken_cakisma:
        for a, v in degisken_cakisma.items():
            print("    🔴 ÇAKIŞMA %s → %s" % (a, " · ".join(v)))
    else:
        print("    ✓ çakışma 0")

    # ③ KART KİMLİĞİ — yamalar arasında VE canlı veriyle
    print("\n③ KART KİMLİĞİ")
    yama_id = {}
    for o, s, yol in yamalar:
        idler = ID_DESENI.findall(_oku(yol))
        print("    %-20s %d kart kimliği" % (o, len(idler)))
        for i in idler:
            yama_id.setdefault(i, []).append(o)

    ic_cakisma = {i: v for i, v in yama_id.items() if len(v) > 1}
    print("    yamalar ARASINDA çakışma: %d" % len(ic_cakisma))
    for i, v in list(ic_cakisma.items())[:20]:
        print("        🔴 %s → %s" % (i, " · ".join(v)))

    # Canlı ekokuma dosyaları — evreni index.html DEĞİL, app.js'in listesi
    # belirler (ekokuma ana yüke katılmaz, tembel yüklenir).
    canli_id = set()
    canli_dosya = 0
    for ad in sorted(os.listdir(DATA)):
        if ad.startswith("ekokuma") and ad.endswith(".js"):
            canli_dosya += 1
            canli_id.update(ID_DESENI.findall(_oku(os.path.join(DATA, ad))))
    print("    canlı: %d dosya · %d kimlik" % (canli_dosya, len(canli_id)))
    dis_cakisma = sorted(set(yama_id) & canli_id)
    print("    CANLI veriyle çakışma: %d" % len(dis_cakisma))
    for i in dis_cakisma[:20]:
        print("        🔴 %s → %s" % (i, " · ".join(yama_id[i])))

    # 🔴 B9 — ARAMANIN ÇALIŞTIĞI KANITLANIR. Sıfır çakışma raporlamadan önce
    # desenin GERÇEKTEN kimlik yakaladığını gösteriyoruz: hiç kimlik
    # bulunamadıysa "çakışma 0" bir YALANDIR, ölçüm hiç ateşlenmemiştir.
    print("\n🔬 SINAV (B9) — ölçüm gerçekten ateşlendi mi?")
    if not yama_id:
        print("    🔴 yamalarda HİÇ kimlik bulunamadı — desen KIRIK, 'çakışma 0' YALAN")
        return 2
    if not canli_id:
        print("    🔴 canlı veride HİÇ kimlik bulunamadı — desen KIRIK, dış çakışma ölçülemedi")
        return 2
    _ornek = next(iter(yama_id))
    print("    ✓ yama kimliği örneği : %s" % _ornek)
    print("    ✓ desen pozitif vakada ateşliyor (yama %d · canlı %d kimlik)"
          % (len(yama_id), len(canli_id)))

    print("\n" + "=" * 72)
    sorun = bool(kirik or degisken_cakisma or ic_cakisma or dis_cakisma)
    if olculemedi:
        print("⚪ ÖLÇÜLEMEDİ: %s — sonuç 'temiz' DEĞİL" % ", ".join(olculemedi))
    if sorun:
        print("🔴 BİRLEŞTİRİLEMEZ — yukarıdaki çakışmalar çözülmeden data/'ya inmez")
        return 1
    print("✓ BİRLEŞTİRİLEBİLİR — %d yama yan yana konabilir (%d kart)"
          % (len(yamalar), len(yama_id)))
    if beklenen:
        print("⏳ ama %d oturum daha teslim etmedi; sınav onlar gelince TEKRAR koşar."
              % len(beklenen))
    return 0


if __name__ == "__main__":
    sys.exit(main())
