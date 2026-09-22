# -*- coding: utf-8 -*-
"""Koşu gövdeleri sessizce eksiltti mi? — `devletler_harita.js` kıyası.

NİÇİN VAR: 22 Eylül koşusunda shapely `buffer`dan 166+ uyarı çıktı
(`divide by zero` · `invalid value`); son TAM koşu (yürüyüş kapalı) 0
vermişti. Motorun kapanış doğrulaması *"tüm yerleşimlerin peteği geçerli"*
diyor — **petekleri** sınıyor, yabancı devlet **gövdelerini** DEĞİL. Bir
gövde boşalsa kapanış satırı yine temiz çıkar; sınanmayan soruda temiz
rapor temiz değildir.

🔴 İLK SÜRÜM SIFIR KİMLİK BULUP "TEMİZ" DEDİ — ve o, bu projenin kendi
   dersiydi: *boş küme her öngörüyü doğrular.* Sebep: dosyanın gerçek
   biçimi okunmadan ayrıştırıcı yazılmıştı. Gerçek biçim şu —
       window.DEVLET_PARCALAR   = [[[lon,lat],…],…]      (koordinat havuzu)
       window.DEVLET_PARCA_HALKA= […]
       window.DEVLET_HARITA     = [{"id":…,"dnm":[{"f":…,"t":…,"g":[…]}]}]
       window.URETIM_IZI        = {…}
   Kimlik ve dönemler YALNIZ `DEVLET_HARITA` satırındadır (HEAD'de 1,8 MB),
   koordinatlar ayrı havuzda. ⇒ Ölçüm o satırdan yapılır; 75 MB'lık dosyanın
   tamamı belleğe ALINMAZ (makinede boş bellek ~1 GB).

🔴 TABAN NEREDEN: `git show HEAD:data/devletler_harita.js`. Diskteki dosya
   koşu SÜRERKEN üzerine yazılıyor (ölçüldü: koşu ortasında 112 KB, HEAD
   75,8 MB) ⇒ taban diskten okunamaz, depodan okunur. Bu yüzden bu betik
   ancak KOŞU BİTTİKTEN SONRA anlamlıdır; yarım dosyayla koşarsa
   kendisi uyarır.

ÖLÇÜLENLER, kimlik başına: ① dönem sayısı ② toplam parça atfı (`g`
indeksleri) — parça atfı alanın vekilidir; bir kimliğin SIFIRLANMASI kesin
kayıptır, düşmesi sadeleşme de olabilir, o yüzden ayrı ayrı basılır.

Koşu:  py denetim/ARAC-GOVDE-KIYAS-0922.py
"""
import io
import os
import re
import subprocess
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HED = os.path.join(KOK, "data", "devletler_harita.js")
ONEK = "window.DEVLET_HARITA = "


def satir_diskten(yol):
    """DEVLET_HARITA satırını dosyadan TEK BAŞINA oku — dosyayı yükleme."""
    with io.open(yol, encoding="utf-8", errors="replace") as f:
        for s in f:
            if s.startswith(ONEK):
                return s
    return ""


def satir_headten():
    p = subprocess.Popen(["git", "-C", KOK, "show",
                          "HEAD:data/devletler_harita.js"],
                         stdout=subprocess.PIPE)
    try:
        for ham in p.stdout:
            s = ham.decode("utf-8", "replace")
            if s.startswith(ONEK):
                return s
    finally:
        p.stdout.close()
        p.terminate()
    return ""


G_KALIP = re.compile(r'"g"\s*:\s*\[([^\]]*)\]')


def olc(satir):
    """id → (dönem sayısı, parça atfı sayısı). Ayrıştırma `{"id":"` ile
    bölerek yapılır: JSON'un tamamını çözmek 1,8 MB'ı ağaca çevirir ve
    bellek şu an dar."""
    out = {}
    if not satir:
        return out
    parcalar = satir.split('{"id":"')[1:]
    for p in parcalar:
        ad = p[:p.find('"')]
        donem = p.count('"f":')
        atif = sum(len([x for x in m.group(1).split(",") if x.strip()])
                   for m in G_KALIP.finditer(p))
        out[ad] = (donem, atif)
    return out


def main():
    if not os.path.exists(HED):
        raise SystemExit(f"🔴 {HED} YOK")
    boy = os.path.getsize(HED)
    # 🔴 TAMLIK KAPISI — ve bu kapı BİR KEZ EKSİK KALDI: ilk denemede betik
    #    koşu SÜRERKEN koştu, diskte yalnız 20 kimlik yazılmıştı ve alet
    #    "561 kimlik kayboldu" dedi. Yarım dosya, kayıplı dosyadan ayırt
    #    edilemezse bu aletin verdiği her hüküm çöptür. Dosyanın SON
    #    değişkeni `window.URETIM_IZI`; o yoksa yazma bitmemiştir.
    tam = False
    with io.open(HED, encoding="utf-8", errors="replace") as f:
        for s in f:
            if s.startswith("window.URETIM_IZI"):
                tam = True
                break
    if not tam:
        raise SystemExit(
            f"🔴 DOSYA YARIM: `window.URETIM_IZI` satırı yok ({boy:,} bayt). "
            f"Koşu HÂLÂ YAZIYOR. Kıyas yapılmadı — ÖLÇÜLEMEDİ ≠ TEMİZ, ve "
            f"yarım dosyayla yapılan kıyas 'kimlik kayboldu' diye YANLIŞ "
            f"alarm verir (bir kez verdi).")
    # 🔴 TAZELİK KAPISI — ve bu da ölçümle doğdu: tamlık kapısı ateşlemedi
    #    ama dosya YİNE yanlıştı. Diskteki kopya 21 Eylül 03:22 damgalı,
    #    112 KB, 20 kimlik — yani KUTU SINAVININ artığı; motor 15:59'da
    #    başlamış ve çıktısını henüz yazmamış. Tam bir dosya, taze
    #    olmayabilir; "dört değişken de var" tazelik kanıtı DEĞİLDİR.
    #    ⚠️ Bu artığın orada durması ayrıca bir RİSK: 561 kimlikli gerçek
    #    haritanın yerinde 20 kimlikli sınav çıktısı duruyor. Koşu
    #    tamamlanmadan yayın yapılırsa harita 561 kimlik kaybeder.
    ref = os.environ.get("GOVDE_KIYAS_REF_PID", "")
    if ref:
        try:
            import datetime
            import subprocess as _sp
            _b = _sp.run(["powershell", "-NoProfile", "-c",
                          f"(Get-Process -Id {ref}).StartTime.Ticks"],
                         capture_output=True).stdout.decode().strip()
            bas = datetime.datetime(1, 1, 1) + datetime.timedelta(
                microseconds=int(_b) / 10)
            dosya = datetime.datetime.fromtimestamp(os.path.getmtime(HED))
            if dosya < bas:
                raise SystemExit(
                    f"🔴 DOSYA BAYAT: damgası {dosya:%Y-%m-%d %H:%M}, motor "
                    f"{bas:%Y-%m-%d %H:%M}'da başladı ({boy:,} bayt). Bu "
                    f"kopya koşunun çıktısı DEĞİL, eski bir sınavın artığı. "
                    f"Kıyas yapılmadı — ÖLÇÜLEMEDİ ≠ TEMİZ.")
        except SystemExit:
            raise
        except Exception as e:
            print(f"  ⚠️ tazelik kapısı ölçemedi ({e}) — kıyas yine yapılıyor "
                  f"ama sonucu 'ölçüldü' saymayın")
    yeni_satir = satir_diskten(HED)
    if not yeni_satir:
        raise SystemExit(
            f"🔴 diskteki dosyada `{ONEK.strip()}` satırı YOK "
            f"({boy:,} bayt) ama URETIM_IZI var — biçim DEĞİŞMİŞ. "
            f"ÖLÇÜLEMEDİ ≠ TEMİZ.")
    t = olc(satir_headten())
    y = olc(yeni_satir)
    if not t or not y:
        raise SystemExit(f"🔴 ayrıştırma boş döndü (taban {len(t)} · yeni "
                         f"{len(y)}) — biçim değişmiş olabilir. ÖLÇÜLEMEDİ.")
    print(f"TABAN (HEAD): {len(t)} kimlik · YENİ (disk): {len(y)} kimlik")

    kaybolan = sorted(set(t) - set(y))
    yeni_k = sorted(set(y) - set(t))
    if kaybolan:
        print(f"\n🔴 TABANDA VAR YENİDE YOK — {len(kaybolan)}: "
              f"{', '.join(kaybolan[:25])}")
    if yeni_k:
        print(f"\n🟢 yalnız yenide — {len(yeni_k)}: {', '.join(yeni_k[:25])}")

    sifir, yarim, donem_kaybi = [], [], []
    for ad in sorted(set(t) & set(y)):
        (td, ta), (yd, ya) = t[ad], y[ad]
        if ta > 0 and ya == 0:
            sifir.append((ad, ta, ya))
        elif ta and ya < ta * 0.5:
            yarim.append((ad, ta, ya))
        if yd < td:
            donem_kaybi.append((ad, td, yd))
    if sifir:
        print(f"\n🔴 PARÇASI SIFIRLANAN — {len(sifir)} kimlik (KESİN KAYIP)")
        for ad, a, b in sifir[:25]:
            print(f"   {ad:<30} parça atfı {a:>7,} → {b}")
    if yarim:
        print(f"\n🟡 parçası yarıdan fazla düşen — {len(yarim)} kimlik "
              f"(sadeleşme de olabilir, tek tek bakılır)")
        for ad, a, b in yarim[:25]:
            print(f"   {ad:<30} {a:>7,} → {b:>7,}")
    if donem_kaybi:
        print(f"\n🔴 DÖNEMİ EKSİLEN — {len(donem_kaybi)} kimlik")
        for ad, a, b in donem_kaybi[:25]:
            print(f"   {ad:<30} dönem {a} → {b}")

    ta = sum(v[1] for v in t.values())
    ya = sum(v[1] for v in y.values())
    print(f"\nTOPLAM parça atfı: {ta:,} → {ya:,} "
          f"(%{100.0 * (ya - ta) / ta:+.1f})")
    temiz = not (kaybolan or sifir or donem_kaybi)
    print("\nSONUÇ:", "TEMİZ — kimlik/dönem/parça kaybı YOK" if temiz
          else "🔴 İHLAL — yayın DURMALI, önce sebep bulunmalı")
    return 0 if temiz else 1


if __name__ == "__main__":
    sys.exit(main())
