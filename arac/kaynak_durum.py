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

🔴 `--kod KOSU` İLANI KAPIDAN GEÇER (UMIT-W10-LEGO-1006e, koordinatör hükmü):
    `kapat --kod KOSU` önce `denetim/ARAC-MOTOR-ENV-KAPI-1006.py`yi koşturur —
    motorun okuduğu her `MOTOR_*` değişkeni sınıflı mı (SONUÇ ∪ İŞLETİM ∪
    ÖNBELLEK-DIŞI). Sınıfsız bir ad tuzdan SESSİZCE düşer ve bayat önbellek
    doğru sanılır; zarar YAYIN anında değil KOŞU anında doğar, bu yüzden kapı
    koşunun zorunlu ilk adımına bağlıdır. Burası tuzda DEĞİL: kapı, koruduğu
    tuzu değiştirmeden çalışır. Kapı STATİKTİR (AST) — bayrakların o an
    ortamda set edilmemiş olması sorun değil.
    Öteki kodlar (RAM-DARBOGAZI …) kapıya BAKMAZ: darboğaz ilanı acildir.
        py arac/kaynak_durum.py kapat --kod KOSU [--kapi-kok C:\\atlas-kosu]
                                      [--kapi-atla "<gerekçe>"]
    `--kapi-kok`: kapının ölçeceği ağaç (koşu AYRI worktree'de koşar — §7);
                  verilmezse bu betiğin ağacı.
    Çıkış: 4 = kapı ÖTTÜ (ilan YAZILMADI) · 5 = kapı KOŞAMADI (betik yok,
           zaman aşımı, ayrıştırma hatası — ilan YAZILMADI).
    `--kapi-atla "<gerekçe>"`: kapı KOŞAMIYORSA (çıkış 5) koşuyu kilitlememek
           için tek kapı. Gerekçe boşsa reddedilir; atlama ilanın İÇİNE yazılır
           (`kapi.durum = "ATLANDI"`). Kapı ÖTTÜYSE (4) atlama İŞLEMEZ — bilinen
           bir kusur ile bilinmeyen bir arıza aynı muameleyi görmez.
"""
import io
import json
import os
import subprocess
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

# Koşu ilanının kapısı — yalnız `KOSU` kodu için (bkz. modül notu).
KAPI_KODLARI = {"KOSU"}
KAPI_BETIK = os.path.join(KOK, "denetim", "ARAC-MOTOR-ENV-KAPI-1006.py")
KAPI_SURE_SN = 300


def kosu_kapisi(kok):
    """(sonuç, çıktı) — sonuç: "GECTI" · "OTTU" · "KOSAMADI".

    Kapı ayrı süreçte koşar (`sys.executable`): bu betiğin içine ithal
    edilmez, böylece kapının bir arızası ilan aracını düşürmez.
    """
    if not os.path.exists(KAPI_BETIK):
        return "KOSAMADI", "kapı betiği YOK: %s" % KAPI_BETIK
    try:
        r = subprocess.run([sys.executable, KAPI_BETIK, "--kok", kok],
                           capture_output=True, encoding="utf-8", errors="replace",
                           timeout=KAPI_SURE_SN)
    except subprocess.TimeoutExpired:
        return "KOSAMADI", "kapı %d sn'de bitmedi" % KAPI_SURE_SN
    except OSError as e:
        return "KOSAMADI", "kapı başlatılamadı: %s" % e
    cikti = (r.stdout or "") + (r.stderr or "")
    if r.returncode == 0:
        return "GECTI", cikti
    if r.returncode == 1:
        return "OTTU", cikti
    return "KOSAMADI", "kapı çıkış %d verdi (1 değil ⇒ hüküm yok)\n%s" % (r.returncode, cikti)


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
        for k in ("kod", "ilan", "ilan_eden", "olcum", "gerekce", "muaf", "kapi"):
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
        kayit = {
            "bekci_yasak": True,
            "kod": kod,
            "ilan": time.strftime("%Y-%m-%d %H:%M"),
            "ilan_eden": al("--kim", "YILDIRIM BAYEZIT"),
            "olcum": al("--olcum", ""),
            "gerekce": al("--gerekce", KODLAR[kod]),
            "muaf": muaf,
        }
        if kod in KAPI_KODLARI:
            kapi_kok = al("--kapi-kok", KOK)
            atla = "--kapi-atla" in argv
            _i = argv.index("--kapi-atla") + 1 if atla else len(argv)
            atla_gerekce = (argv[_i] if _i < len(argv) else "").strip()   # al() son argümanda düşer
            if atla and (not atla_gerekce or atla_gerekce.startswith("--")):
                print("🔴 --kapi-atla GEREKÇESİZ — reddedildi. Ne arızalandı, kim bakacak?")
                return 2
            sonuc, cikti = kosu_kapisi(kapi_kok)
            if sonuc == "OTTU":
                print("🔴 KOŞU İLANI REDDEDİLDİ — MOTOR ORTAM KAPISI ÖTTÜ (%s)" % kapi_kok)
                print("   Sınıfsız bir MOTOR_* tuzdan SESSİZCE düşer ⇒ bayat önbellek doğru sanılır.")
                print("   Çare: adı `uret_petek.py`deki _ONB_SONUC / _ONB_ISLETIM / _ONB_CIKTI_DISI")
                print("   kümelerinden BİRİNE yaz (motor tuzu ⇒ koşudan ÖNCE). `--kapi-atla` burada İŞLEMEZ.")
                print("   KAYNAK-DURUM.json YAZILMADI.\n")
                print(cikti.rstrip())
                return 4
            if sonuc == "KOSAMADI" and not atla:
                print("🔴 KOŞU İLANI REDDEDİLDİ — MOTOR ORTAM KAPISI KOŞAMADI (%s)" % kapi_kok)
                print("   " + cikti.rstrip().replace("\n", "\n   "))
                print("   Kapı ölçemediyse hüküm YOK; 'ölçülemedi' temiz sayılmaz.")
                print("   Koşu bekleyemiyorsa: --kapi-atla \"<gerekçe>\" (ilana yazılır).")
                print("   KAYNAK-DURUM.json YAZILMADI.")
                return 5
            kayit["kapi"] = {"durum": "GECTI" if sonuc == "GECTI" else "ATLANDI",
                             "kok": kapi_kok,
                             "ozet": [s for s in cikti.splitlines()
                                      if s.startswith(("MOD:", "✓", "🔴", "kapı"))][:3]}
            if sonuc != "GECTI":
                kayit["kapi"]["atlama_gerekce"] = atla_gerekce
                print("⚠️ KAPI KOŞAMADI ve ATLANDI — gerekçe ilana yazıldı: %s" % atla_gerekce)
            else:
                print("✓ MOTOR ORTAM KAPISI GEÇTİ (%s)" % kapi_kok)
        _yaz(kayit)
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
