# -*- coding: utf-8 -*-
"""DONANIM KÜNYESİ — çok bilgisayarlı iş bölümü için ölçüm aleti.

Emre'nin isteği (28 Eylül 2026): *"eczanede 4 bilgisayarım var … bir
bilgisayar koşu yapsın, bir bilgisayar proje dosyalarını geliştirsin, bir
bilgisayardan browser açıp siteye bakılsın … tüm bilgisayarların
özelliklerini öğrenip planlama yapmak istiyorum."*

🔴 NİÇİN BÖYLE BİR ALET GEREKTİ — ölçüldü, 28 Eylül 2026:
    `ListAgents` bu makinede 6 oturum gösteriyor, HEPSİ bu makinenin.
    Başka bilgisayarın Claude oturumu BURADAN GÖRÜNMÜYOR ⇒ "öteki
    bilgisayara sorup öğrenmek" diye bir yol YOK. Ama GEREK DE YOK:
    depo ikisinde de var ve `tahta.py` her mesajda `git pull --rebase` +
    `git push` yapıyor (`arac/tahta.py:379`). ⇒ KANAL GIT'TİR.
    Bu alet o kanalı kullanır: her makine kendi künyesini YAZAR ve
    PUSH'lar; planlama yapan makine PULL'lar ve TABLOYU okur.

KULLANIM — her bilgisayarda bir kez:
    py arac/donanim.py topla          künyeyi ölç ve dosyaya yaz
    py arac/donanim.py topla --gonder ölç · yaz · commit · push
Planlama yapan bilgisayarda:
    py arac/donanim.py tablo          bütün künyeleri karşılaştır

⚠️ KİŞİSEL VERİ YAZILMAZ: kullanıcı adı, seri numarası, MAC adresi, lisans
anahtarı ve dosya yolları TOPLANMAZ. Toplanan her alan, "hangi iş hangi
makinede koşsun" sorusuna cevap veren bir KAPASİTE ölçüsüdür. Tek kimlik
alanı makine adıdır ve onu Emre kendisi veriyor.
"""
import json
import os
import platform
import shutil
import socket
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZIN = os.path.join(KOK, "oturumlar", "donanim")

# ── PowerShell köprüsü ────────────────────────────────────────────────────
# 🔴 `wmic` KULLANILMIYOR: Windows 11'de kaldırıldı ve "komut yok" hatası
# bir ÖLÇÜM SIFIRI gibi görünür — yani yanlış temiz üretir.
_ON = "[Console]::OutputEncoding=[Text.Encoding]::UTF8; "


def _ps(komut):
    """PowerShell'i çağır, JSON çöz. Başarısızsa None — 0 DEĞİL."""
    try:
        r = subprocess.run(
            ["powershell", "-NoProfile", "-NonInteractive", "-Command",
             _ON + komut],
            capture_output=True, text=True, encoding="utf-8",
            errors="replace", timeout=60)
    except Exception:
        return None
    ham = (r.stdout or "").strip()
    if not ham:
        return None
    try:
        return json.loads(ham)
    except Exception:
        return None


def _liste(x):
    """PowerShell tek nesneyi JSON dizisi yapmaz — normalleştir."""
    if x is None:
        return []
    return x if isinstance(x, list) else [x]


def _komut_surumu(ad, arg="--version"):
    """Alet var mı ve hangi sürüm. Yoksa None (yani 'ölçüldü: yok')."""
    if not shutil.which(ad):
        return None
    try:
        r = subprocess.run([ad, arg], capture_output=True, text=True,
                           encoding="utf-8", errors="replace", timeout=25)
    except Exception:
        return "?"
    return ((r.stdout or r.stderr or "").strip().split("\n") or ["?"])[0][:80]


# ── ÖLÇÜM ────────────────────────────────────────────────────────────────
def olc():
    k = {"surum": "donanim-1"}

    k["makine"] = socket.gethostname()
    k["olcum_zamani"] = __import__("datetime").datetime.now().isoformat(
        timespec="seconds")

    # ① İŞLETİM SİSTEMİ
    isl = _ps("Get-CimInstance Win32_OperatingSystem | "
              "Select-Object Caption,Version,BuildNumber,"
              "TotalVisibleMemorySize,FreePhysicalMemory,LastBootUpTime | "
              "ConvertTo-Json -Compress")
    if isl:
        k["os"] = {
            "ad": isl.get("Caption"),
            "surum": isl.get("Version"),
            "yapi": isl.get("BuildNumber"),
        }
        # 🔴 KB CINSINDEN gelir — GB'ye çevirmeden yazmak üç kez yanlış
        # tablo üretti (11,88 GB'lik makine "12.464.000" göründü).
        tv = isl.get("TotalVisibleMemorySize")
        fp = isl.get("FreePhysicalMemory")
        k["ram_gb"] = round(tv / 1048576, 2) if tv else None
        k["ram_bos_gb"] = round(fp / 1048576, 2) if fp else None
    else:
        k["os"] = {"ad": platform.platform()}
        k["ram_gb"] = None
        k["ram_bos_gb"] = None

    # ② İŞLEMCİ — koşu için EN BELİRLEYİCİ alan
    cpu = _liste(_ps(
        "Get-CimInstance Win32_Processor | Select-Object Name,"
        "NumberOfCores,NumberOfLogicalProcessors,MaxClockSpeed | "
        "ConvertTo-Json -Compress"))
    k["cpu"] = [{
        "ad": (c.get("Name") or "").strip(),
        "cekirdek": c.get("NumberOfCores"),
        "is_parcacigi": c.get("NumberOfLogicalProcessors"),
        "mhz": c.get("MaxClockSpeed"),
    } for c in cpu]
    k["cekirdek_toplam"] = sum((c.get("cekirdek") or 0) for c in k["cpu"])
    k["is_parcacigi_toplam"] = sum(
        (c.get("is_parcacigi") or 0) for c in k["cpu"])

    # ③ TAKAS DOSYASI — koşu 17 segfault'unda tam bu alan sorulmuştu
    tk = _ps("Get-CimInstance Win32_PageFileUsage | "
             "Select-Object AllocatedBaseSize,PeakUsage | "
             "ConvertTo-Json -Compress")
    tk = _liste(tk)
    k["takas_mb"] = sum((t.get("AllocatedBaseSize") or 0) for t in tk) or None

    # ④ DİSK — koşu önbelleği 509 MB, çıktı 1,9 GB, .git 4,9 GB
    dsk = _liste(_ps(
        "Get-CimInstance Win32_LogicalDisk -Filter 'DriveType=3' | "
        "Select-Object DeviceID,Size,FreeSpace | ConvertTo-Json -Compress"))
    k["disk"] = [{
        "surucu": d.get("DeviceID"),
        "toplam_gb": round((d.get("Size") or 0) / 1073741824, 1),
        "bos_gb": round((d.get("FreeSpace") or 0) / 1073741824, 1),
    } for d in dsk]

    # ⑤ EKRAN KARTI — tarayıcı/harita işi için
    gpu = _liste(_ps(
        "Get-CimInstance Win32_VideoController | "
        "Select-Object Name,AdapterRAM | ConvertTo-Json -Compress"))
    k["gpu"] = [{
        "ad": (g.get("Name") or "").strip(),
        "vram_mb": round((g.get("AdapterRAM") or 0) / 1048576)
                   if g.get("AdapterRAM") else None,
    } for g in gpu]

    # ⑥ ALETLER — "bu makine koşu yapabilir mi" sorusunun cevabı
    k["araclar"] = {
        "python": sys.version.split()[0],
        "py": _komut_surumu("py", "-V"),
        "git": _komut_surumu("git"),
        "node": _komut_surumu("node"),
        "npm": _komut_surumu("npm"),
    }
    # Motorun ZORUNLU kütüphaneleri — biri yoksa o makine koşu YAPAMAZ.
    # 🔴 LİSTE TAHMİNLE YAZILMAZ, MOTORUN KENDİ import'LARINDAN OKUNUR.
    # İlk sürümde `pyproj` yazmıştım — motorda YOK; ve `contourpy` yoktu —
    # motorda VAR ve ufuk bantlarının kontur hesabı tam onu kullanıyor.
    # Ölçüm (28 Eylül 2026):
    #   grep -hoE "^\s*(import|from) \S+" arac/{uret_petek,girdi,
    #              motor_onbellek,renkler}.py | cut -d. -f1 | sort -u
    # ⇒ yanlış "EKSİK" uyarısı, eksik uyarıdan kötüdür: sayı verir ve
    #   planı yanlış makineye yönlendirir.
    kut = {}
    for ad in ("shapely", "numpy", "rasterio", "scipy", "contourpy"):
        try:
            m = __import__(ad)
            kut[ad] = getattr(m, "__version__", "?")
        except Exception:
            kut[ad] = None
        except BaseException:
            kut[ad] = None
    k["kutuphaneler"] = kut

    # ⑦ DEPO DURUMU — hangi makine hangi commit'te
    k["depo"] = {"yol": KOK}
    for ad, arg in (("dal", ["rev-parse", "--abbrev-ref", "HEAD"]),
                    ("commit", ["rev-parse", "--short", "HEAD"])):
        try:
            r = subprocess.run(["git", "-C", KOK] + arg, capture_output=True,
                               text=True, encoding="utf-8", errors="replace",
                               timeout=30)
            k["depo"][ad] = (r.stdout or "").strip() or None
        except Exception:
            k["depo"][ad] = None
    try:
        r = subprocess.run(["git", "-C", KOK, "status", "--porcelain"],
                           capture_output=True, text=True, encoding="utf-8",
                           errors="replace", timeout=90)
        k["depo"]["kirli_dosya"] = len(
            [s for s in (r.stdout or "").splitlines() if s.strip()])
    except Exception:
        k["depo"]["kirli_dosya"] = None

    # ⑧ ClaudEmre makine adı — parti adlarına giren alan
    k["claudemre_makine"] = None
    for yol in (r"C:\claudemre\bilgisayar.txt",
                os.path.expanduser(r"~\ClaudEmre\bilgisayar.txt")):
        if os.path.isfile(yol):
            try:
                with open(yol, encoding="utf-8", errors="replace") as f:
                    k["claudemre_makine"] = f.read().strip()
            except Exception:
                pass
            break

    # ⑨ YEREL AĞ — aynı ağda mı (yalnız özel adres aralıkları)
    ip = []
    try:
        for a in socket.getaddrinfo(socket.gethostname(), None,
                                    socket.AF_INET):
            adr = a[4][0]
            if adr.startswith(("10.", "192.168.", "172.")) and adr not in ip:
                ip.append(adr)
    except Exception:
        pass
    k["yerel_ip"] = ip

    return k


# ── YAZIM ────────────────────────────────────────────────────────────────
def yaz(k):
    os.makedirs(DIZIN, exist_ok=True)
    ad = "".join(c if (c.isalnum() or c in "-_") else "-"
                 for c in (k.get("makine") or "bilinmeyen")).lower()
    yol = os.path.join(DIZIN, "donanim-%s.json" % ad)
    with open(yol, "w", encoding="utf-8") as f:
        json.dump(k, f, ensure_ascii=False, indent=2, sort_keys=True)
        f.write("\n")
    return yol


def ozet(k):
    c = (k.get("cpu") or [{}])[0]
    print("╔═ %s" % k.get("makine"))
    print("║ %s (yapı %s)" % ((k.get("os") or {}).get("ad"),
                              (k.get("os") or {}).get("yapi")))
    print("║ CPU  %s" % c.get("ad"))
    print("║      %s çekirdek · %s iş parçacığı · %s MHz"
          % (k.get("cekirdek_toplam"), k.get("is_parcacigi_toplam"),
             c.get("mhz")))
    print("║ RAM  %s GB (boş %s) · takas %s MB"
          % (k.get("ram_gb"), k.get("ram_bos_gb"), k.get("takas_mb")))
    for d in k.get("disk") or []:
        print("║ DISK %s  %s GB boş / %s GB"
              % (d.get("surucu"), d.get("bos_gb"), d.get("toplam_gb")))
    for g in k.get("gpu") or []:
        print("║ GPU  %s" % g.get("ad"))
    eks = [a for a, v in (k.get("kutuphaneler") or {}).items() if not v]
    print("║ MOTOR KÜTÜPHANELERİ: %s"
          % ("tamam" if not eks else "🔴 EKSİK → " + ", ".join(eks)))
    print("║ depo %s @ %s · kirli %s"
          % ((k.get("depo") or {}).get("dal"),
             (k.get("depo") or {}).get("commit"),
             (k.get("depo") or {}).get("kirli_dosya")))
    print("╚═ ClaudEmre makine adı: %s · yerel IP: %s"
          % (k.get("claudemre_makine"), ", ".join(k.get("yerel_ip") or []) or "-"))


def tablo():
    if not os.path.isdir(DIZIN):
        print("🔴 %s YOK — hiçbir makine künyesini yazmamış." % DIZIN)
        print("   Her bilgisayarda: py arac/donanim.py topla --gonder")
        return 1
    dosyalar = sorted(f for f in os.listdir(DIZIN)
                      if f.startswith("donanim-") and f.endswith(".json"))
    if not dosyalar:
        print("🔴 %s BOŞ — künye yok." % DIZIN)
        return 1
    kunye = []
    for f in dosyalar:
        try:
            with open(os.path.join(DIZIN, f), encoding="utf-8") as fh:
                kunye.append(json.load(fh))
        except Exception as e:
            print("⚠️ %s okunamadı: %s" % (f, e))
    print("═══ %d MAKİNE ═══\n" % len(kunye))
    bas = ("makine", "çekirdek", "iş.p", "RAM GB", "boş GB", "C: boş",
           "motor", "ölçüm")
    print("%-16s %8s %5s %7s %7s %8s %6s  %s" % bas)
    print("-" * 82)
    for k in sorted(kunye, key=lambda x: -(x.get("cekirdek_toplam") or 0)):
        c_bos = next((d.get("bos_gb") for d in (k.get("disk") or [])
                      if (d.get("surucu") or "").upper().startswith("C")), None)
        eks = [a for a, v in (k.get("kutuphaneler") or {}).items() if not v]
        print("%-16s %8s %5s %7s %7s %8s %6s  %s"
              % ((k.get("makine") or "?")[:16], k.get("cekirdek_toplam"),
                 k.get("is_parcacigi_toplam"), k.get("ram_gb"),
                 k.get("ram_bos_gb"), c_bos,
                 "tamam" if not eks else "EKSİK",
                 (k.get("olcum_zamani") or "")[:16]))
    print("\n═══ ROL ÖNERİSİ — ölçüme dayalı, karar Emre'nin ═══")
    sirali = sorted(kunye, key=lambda x: -((x.get("ram_gb") or 0) * 10
                                           + (x.get("cekirdek_toplam") or 0)))
    roller = [
        ("KOŞU", "en çok RAM + çekirdek · önbellek 509 MB burada KALIR, "
                 "taşınmaz ⇒ bu makine SABİT olmalı"),
        ("GELİŞTİRME", "paket maddeleri · kod · denetim — RAM orta yeter"),
        ("GÖZLEM", "tarayıcıdan siteye bakmak · kutuya hata yazmak — "
                   "en hafif makine yeter"),
    ]
    for i, (rol, niye) in enumerate(roller):
        if i < len(sirali):
            m = sirali[i]
            eks = [a for a, v in (m.get("kutuphaneler") or {}).items() if not v]
            uyari = ""
            if rol == "KOŞU" and eks:
                uyari = "  🔴 AMA MOTOR KÜTÜPHANELERİ EKSİK: " + ", ".join(eks)
            print("  %-12s %-16s %s GB RAM · %s çekirdek%s"
                  % (rol, m.get("makine"), m.get("ram_gb"),
                     m.get("cekirdek_toplam"), uyari))
            print("  %-12s %s" % ("", niye))
        else:
            print("  %-12s (künye yok — o makinede `topla` koşturulmadı)" % rol)
    return 0


def gonder(yol):
    """Künyeyi commit'le ve push'la. Pathspec ZORUNLU (§7 · D223)."""
    bagil = os.path.relpath(yol, KOK).replace("\\", "/")
    mes = os.path.join(KOK, ".donanim-commit-mesaji.txt")
    with open(mes, "w", encoding="utf-8") as f:
        f.write("donanim kunyesi: %s\n" % os.path.basename(yol))
    try:
        for c in (["add", "--", bagil],
                  ["commit", "-F", mes, "--", bagil],
                  ["pull", "--rebase"],
                  ["push"]):
            r = subprocess.run(["git", "-C", KOK] + c, capture_output=True,
                               text=True, encoding="utf-8", errors="replace",
                               timeout=300)
            print("  git %-10s çıkış %s  %s"
                  % (c[0], r.returncode,
                     ((r.stdout or r.stderr or "").strip().split("\n")
                      or [""])[-1][:70]))
            if r.returncode != 0 and c[0] == "commit":
                print("  ⚠️ commit boş olabilir (künye değişmedi) — devam")
    finally:
        if os.path.isfile(mes):
            os.remove(mes)


if __name__ == "__main__":
    emir = sys.argv[1] if len(sys.argv) > 1 else "topla"
    if emir == "tablo":
        sys.exit(tablo())
    if emir != "topla":
        print(__doc__)
        sys.exit(2)
    kunye = olc()
    ozet(kunye)
    yol = yaz(kunye)
    print("\n✓ yazıldı: %s" % os.path.relpath(yol, KOK))
    if "--gonder" in sys.argv:
        print("→ depoya gönderiliyor")
        gonder(yol)
    else:
        print("→ göndermek için: py arac/donanim.py topla --gonder")
