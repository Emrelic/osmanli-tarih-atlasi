# -*- coding: utf-8 -*-
"""kosu_girdi_bagla.py — koşu worktree'sine İZLENMEYEN girdileri SERT BAĞLA.

🔴 DOĞURAN VAKA (`dersler/D235`, 25 Eylül 2026):
Koşu 15 sekiz saniyede "EGIM DEM YOK ya da YARIM" diyerek öldü. Sebep:
`git worktree` İZLENEN dosyaları taşır, `.gitignore`dakileri TAŞIMAZ.
`veri-kaynak/yukseklik/*.tif` (780 MB) worktree'de YOKTU — dizin vardı,
içi boştu. Motor "dosya yok" demedi, "DEM yarım" dedi; teşhis 20 dakika aldı.

NİÇİN SERT BAĞ, KOPYA DEĞİL: 854 MB'lık kopya her koşuda diski ve zamanı
yer; sert bağ aynı veri bloklarını gösterir, anında kurulur, yer kaplamaz.
⚠️ Sert bağ AYNI BİRİM üzerinde olmalı (ikisi de C:). Değilse betik söyler.
⚠️ Sert bağ AYNI DOSYADIR: worktree'de değiştirirsen ana depo da değişir.
Bunlar salt-okunur girdi olduğu için sorun değil — ama bir çıktı dosyasını
ASLA bu betikle bağlama.

KULLANIM
    py arac/kosu_girdi_bagla.py <worktree-yolu>            # kuru koşu
    py arac/kosu_girdi_bagla.py <worktree-yolu> --uygula   # bağları kurar

Ne bağlanacağı ELLE YAZILMAZ, git'e SORULUR:
    git ls-files --others --ignored --exclude-standard -- veri-kaynak
⇒ Yeni bir izlenmeyen girdi eklendiğinde bu betiği güncellemek GEREKMEZ.
   (Elle liste tutmak bu projede üç kez bayatladı — `CLAUDE.md §5`.)
"""
import os
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ANA = r"C:\atlas"
ESIK = 1024 * 1024          # 1 MB altı dosyalar bağlanmaz (belge/örnek)
KAPSAM = ["veri-kaynak"]    # git'e sorulacak dizinler


def izlenmeyen_girdiler():
    """git'in bildiği izlenmeyen-ama-gerekli girdiler (yol, bayt)."""
    r = subprocess.run(
        ["git", "ls-files", "--others", "--ignored", "--exclude-standard", "--"] + KAPSAM,
        cwd=ANA, capture_output=True, text=True, encoding="utf-8", errors="replace")
    if r.returncode != 0:
        print("🔴 git ls-files başarısız:", (r.stderr or "")[:200])
        raise SystemExit(2)
    out = []
    for satir in (r.stdout or "").splitlines():
        satir = satir.strip()
        if not satir:
            continue
        tam = os.path.join(ANA, satir.replace("/", os.sep))
        if not os.path.isfile(tam):
            continue
        n = os.path.getsize(tam)
        if n >= ESIK:
            out.append((satir, n))
    return sorted(out)


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        return 2
    hedef = os.path.abspath(sys.argv[1])
    uygula = "--uygula" in sys.argv

    if not os.path.isdir(hedef):
        print("🔴 worktree yok:", hedef)
        return 2
    if os.path.splitdrive(hedef)[0].upper() != os.path.splitdrive(ANA)[0].upper():
        print("🔴 SERT BAĞ AYNI BİRİMDE OLMALI — ana %s, hedef %s"
              % (os.path.splitdrive(ANA)[0], os.path.splitdrive(hedef)[0]))
        return 2

    girdiler = izlenmeyen_girdiler()
    if not girdiler:
        print("🔴 git hiçbir izlenmeyen girdi bulmadı — KAPSAM yanlış olabilir:", KAPSAM)
        return 2

    kuruldu = atlandi = hata = 0
    toplam = 0
    for yol, n in girdiler:
        kaynak = os.path.join(ANA, yol.replace("/", os.sep))
        varis = os.path.join(hedef, yol.replace("/", os.sep))
        etiket = "%-58s %6.0f MB" % (yol, n / 1e6)
        if os.path.exists(varis):
            if os.path.getsize(varis) == n:
                print("  = %s · zaten var, boyut aynı — ATLANDI" % etiket)
                atlandi += 1
            else:
                print("  🔴 %s · VAR ama BOYUT FARKLI (%d ≠ %d) — DOKUNULMADI"
                      % (etiket, os.path.getsize(varis), n))
                hata += 1
            continue
        if not uygula:
            print("  + %s · bağlanacak" % etiket)
            kuruldu += 1
            toplam += n
            continue
        os.makedirs(os.path.dirname(varis), exist_ok=True)
        try:
            os.link(kaynak, varis)
        except OSError as e:
            print("  🔴 %s · BAĞLANAMADI: %s" % (etiket, e))
            hata += 1
            continue
        if os.path.getsize(varis) != n:
            print("  🔴 %s · bağ kuruldu ama BOYUT TUTMUYOR" % etiket)
            hata += 1
            continue
        print("  ✓ %s · bağlandı" % etiket)
        kuruldu += 1
        toplam += n

    print()
    print("%s · kurulan %d · atlanan %d · HATA %d · %.0f MB"
          % ("UYGULANDI" if uygula else "KURU KOŞU", kuruldu, atlandi, hata, toplam / 1e6))
    if hata:
        print("🔴 HATA VAR — koşuyu BAŞLATMA. Boyut tutmayan bir girdi, olmayan "
              "girdiden tehlikelidir: motor 'yarım' der, 'yok' demez (D235).")
        return 1
    if not uygula:
        print("⚠️ Bu bir KURU KOŞUYDU. Bağları kurmak için: --uygula")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
