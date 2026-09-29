# -*- coding: utf-8 -*-
"""kaynak_durum.py — KAYNAK DARBOĞAZI İLANI. Bekçiyi ALETTEN kapatır.

🔴 DOĞURAN ÖLÇÜM — Emre, 29 Eylül 2026:
    "İşlemci ve RAM darboğazı yaşıyoruz… işi biten işçi işlemci/RAM/disk
     ne bedeli olmuşsa bunu bize geri vermeli."
ve hemen ardından, denemenin başarısız olduğunu görünce:
    "Bekçilerini öldürdüğün hazır kıtalar neden bekçilerinin öldüğünü
     anlayamayıp yeniden kurdular; onlara mesaj atmak gerekiyor."

O gün ölçülen sayı (`Win32_OperatingSystem`, beyan değil):
    RAM 11,9 GB · BOŞ 0,69 GB · 8 çekirdek · pagefile 5.824 MB KULLANILIYOR
    claude 44 süreç / 5.689 MB — oturum başına ~285 MB

🔴 VE NİÇİN BU BETİK VAR — bir turluk ders:
Koordinatör dört boş hazır kıtanın bekçisini `Stop-Process` ile DIŞARIDAN
öldürdü. Dördü de bekçisinin düştüğünü gördü ve `HAZIR-KITA.md §2`ye uyup
**sessizce yeniden kurdu** — protokol öyle diyordu, doğru davrandılar.
⇒ *Süreci öldürmek talimatı değiştirmez.* Kapatma kararı, bekçinin KENDİ
okuduğu bir yere yazılmalı; yoksa her öldürme bir tur yakar ve hiçbir şey
kazandırmaz.

Kullanım:
    py arac/kaynak_durum.py durum
    py arac/kaynak_durum.py kapat --kod RAM-DARBOGAZI --olcum "..." --gerekce "..."
                                  [--muaf "AD1,AD2"]
    py arac/kaynak_durum.py ac    --gerekce "..."

`arac/tahta_bekci.py` açılışta bu dosyayı okur; yasak açıksa KURULMAZ,
sebebini stderr'e basar ve **çıkış 3** verir. Çıkış 3 "kurulamadı, TEKRAR
DENEME" demektir — 2 (kullanım hatası) ve 1 (arıza) ile karıştırılmaz.
"""
import io
import json
import os
import sys
import time

sys.stdout.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOSYA = os.path.join(KOK, "oturumlar", "KAYNAK-DURUM.json")

# Tanınan kodlar — yenisi eklenecekse BURAYA, tek otorite bu sözlüktür.
KODLAR = {
    "RAM-DARBOGAZI":   "Bellek tükendi, makine diske takas ediyor.",
    "ISLEMCI-DARBOGAZ": "İşlemci doygun; eşzamanlı oturum sayısı düşürülüyor.",
    "DISK-DARBOGAZ":   "Disk doldu ya da G/Ç doygun.",
    "KOSU":            "Petek koşusu sürüyor; makine koşuya ayrıldı.",
}


def oku():
    """Durumu döndürür. Dosya yoksa/bozuksa AÇIK sayılır — sessiz kilit YOK."""
    try:
        with io.open(DOSYA, encoding="utf-8") as f:
            d = json.load(f)
        if not isinstance(d, dict):
            return {}
        return d
    except Exception:
        return {}


def bekci_yasak_mi(kim):
    """(yasak_mi, aciklama) — `tahta_bekci.py` bunu çağırır.

    🔴 Kapalıya düşmez: dosya okunamıyorsa yasak YOKTUR. Bir arıza yüzünden
    bütün ekibin bekçisiz kalması, bir turluk RAM'den pahalıdır.
    """
    d = oku()
    if not d.get("bekci_yasak"):
        return False, ""
    muaf = {str(x).strip().upper() for x in d.get("muaf", [])}
    if str(kim).strip().upper() in muaf:
        return False, ""
    kod = d.get("kod", "?")
    satir = [
        "🔴 BEKÇİ KURULMADI — KAYNAK DARBOĞAZI İLANI YÜRÜRLÜKTE",
        "   KOD      : %s — %s" % (kod, KODLAR.get(kod, "(tanımsız kod)")),
        "   ilan     : %s · %s" % (d.get("ilan", "?"), d.get("ilan_eden", "?")),
        "   ölçüm    : %s" % d.get("olcum", "(yazılmamış)"),
        "   gerekçe  : %s" % d.get("gerekce", "(yazılmamış)"),
        "",
        "🔴 YENİDEN KURMAYA ÇALIŞMA. `HAZIR-KITA.md §2`nin \"bekçi çıktıysa",
        "   sessizce yeniden kur\" kuralı bu ilan boyunca ASKIDADIR.",
        "   Bekçisiz kalmak kayıp değildir: duran oturuma görev `send_message`",
        "   ile gider (`CLAUDE.md §7.2 ⚠️`), tahta mesajıyla değil.",
        "   ⇒ Arka plan süreçlerini de kapat, ekrana bir şey yazma, DUR.",
    ]
    if d.get("muaf"):
        satir.append("   muaf tutulanlar: %s" % ", ".join(d["muaf"]))
    return True, "\n".join(satir)


def _yaz(d):
    os.makedirs(os.path.dirname(DOSYA), exist_ok=True)
    with io.open(DOSYA, "w", encoding="utf-8") as f:
        json.dump(d, f, ensure_ascii=False, indent=1)
        f.write("\n")


def main(argv):
    if not argv or argv[0] not in ("durum", "kapat", "ac"):
        print(__doc__)
        return 2
    emir = argv[0]

    def al(ad, vars=None):
        return argv[argv.index(ad) + 1] if ad in argv else vars

    if emir == "durum":
        d = oku()
        if not d.get("bekci_yasak"):
            print("✅ KAYNAK DURUMU AÇIK — bekçi kurulabilir.")
            if d.get("kaldirildi"):
                print("   son kaldırma: %s · %s"
                      % (d.get("kaldirildi"), d.get("kaldirma_gerekce", "")))
            return 0
        print("🔴 BEKÇİ YASAĞI YÜRÜRLÜKTE")
        for k in ("kod", "ilan", "ilan_eden", "olcum", "gerekce", "muaf"):
            if d.get(k):
                print("   %-9s %s" % (k, d[k]))
        return 0

    if emir == "kapat":
        kod = al("--kod", "RAM-DARBOGAZI")
        if kod not in KODLAR:
            print("🔴 TANIMSIZ KOD: %s" % kod)
            print("   tanınanlar: %s" % " · ".join(KODLAR))
            return 2
        muaf = [x.strip() for x in (al("--muaf") or "").split(",") if x.strip()]
        _yaz({
            "bekci_yasak": True,
            "kod": kod,
            "ilan": time.strftime("%Y-%m-%d %H:%M"),
            "ilan_eden": al("--kim", "YILDIRIM BAYEZIT"),
            "olcum": al("--olcum", ""),
            "gerekce": al("--gerekce", KODLAR[kod]),
            "muaf": muaf,
        })
        print("🔴 BEKÇİ YASAĞI İLAN EDİLDİ · kod %s" % kod)
        print("   dosya: %s" % DOSYA)
        print("   ⚠️ İlanı TAHTAYA da yaz — yasak, ZATEN KURULMUŞ bekçiyi")
        print("      düşürmez; yalnız YENİDEN kurulmasını engeller.")
        if muaf:
            print("   muaf: %s" % ", ".join(muaf))
        return 0

    d = oku()
    d.update({"bekci_yasak": False,
              "kaldirildi": time.strftime("%Y-%m-%d %H:%M"),
              "kaldirma_gerekce": al("--gerekce", "")})
    _yaz(d)
    print("✅ BEKÇİ YASAĞI KALDIRILDI — oturumlar bekçilerini kurabilir.")
    print("   ⚠️ Kaldırmayı da TAHTAYA yaz; yoksa kimse kurmaz.")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
