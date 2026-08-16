# -*- coding: utf-8 -*-
"""ADRESLİ DUYURU — bir mesajı BÜTÜN CANLI OTURUMLARA, ADIYLA yazar.

🔴 NİÇİN VAR — 16 Ağustos 2026 gece, Emre'nin emri:
    *"Bekçi ... sadece kendine atılan mesajları süzüp ona göre
     oturumunu ateşlemeli, öbür türlü susmalı."*

⇒ `HERKES` yayınları artık HİÇBİR oturumu uyandırmıyor. Ama bazı
duyurular gerçekten herkesi bağlar:
    üretim girdi kilidi · motor arızası · kural değişikliği
Ve biri kaçırırsa bedeli ölçülmüştür: bu gece bir koşu, kilitli bir
dosyaya yazıldığı için **83 dakika çalışıp öldü.**

📌 ÇARE: *"herkese duyurma"* ihtiyacı ortadan kalkmıyor, **ADRESLENİYOR.**
Bu betik mesajı her canlı oturuma **ayrı ayrı, adıyla** yazar.
N mesaj yazmak, N oturumu boşuna uyandırmaktan ucuzdur — ve doğru
kişiye doğru sebeple ulaşır.

⚠️ ADRESLER TAHTADAN TÜRETİLİR, elle liste tutulmaz. Bu projede elle
tutulan üç liste bayatladı (girdi dosyaları · BEKLEYENLER · ENGEL_SINIFI).
Bir oturum son N mesajda yazdıysa CANLIDIR.

KULLANIM
    py arac/duyur.py --mesaj-dosya <yol> [--cins EMIR] [--aciliyet DURDURUCU]
    py arac/duyur.py --liste            # kime gideceğini göster, YAZMA
    py arac/duyur.py --pencere 200      # canlılık penceresi (varsayılan 120)
"""
import io
import json
import os
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TAHTA = os.path.join(KOK, "oturumlar", "tahta.json")
BEN = "KOORDINATOR"


def _canli(pencere):
    """Son `pencere` mesajda yazmış oturumlar — koordinatör hariç."""
    try:
        d = json.load(io.open(TAHTA, encoding="utf-8"))
    except Exception as e:
        print("🔴 tahta okunamadı: %s" % e)
        sys.exit(1)
    adlar = []
    for m in d[-pencere:]:
        a = (m.get("kimden") or m.get("kim") or "").strip()
        if a and a != BEN and a != "?" and a not in adlar:
            adlar.append(a)
    return adlar, len(d)


def main(argv):
    def al(bayrak, vars_=None):
        return argv[argv.index(bayrak) + 1] if bayrak in argv else vars_

    pencere = int(al("--pencere", "120"))
    adlar, toplam = _canli(pencere)

    print("tahta: %d mesaj · canlılık penceresi: son %d" % (toplam, pencere))
    print("CANLI OTURUM: %d" % len(adlar))
    for a in adlar:
        print("   %s" % a)

    if "--liste" in argv:
        print()
        print("(--liste: yalnız gösterildi, mesaj YAZILMADI)")
        return 0

    dosya = al("--mesaj-dosya")
    if not dosya:
        print()
        print("🔴 --mesaj-dosya gerekli. (`§11`: metin KABUKTAN geçmez,")
        print("   `Write` ile dosyaya yazılır, buraya YOLU verilir.)")
        return 2
    if not os.path.exists(dosya):
        print("🔴 dosya yok: %s" % dosya)
        return 2

    cins = al("--cins", "EMIR")
    aciliyet = al("--aciliyet", "DURDURUCU")
    print()
    print("YAZILIYOR — %d oturuma, ADIYLA" % len(adlar))
    basarili, hatali = 0, []
    for a in adlar:
        r = subprocess.run(
            [sys.executable, os.path.join(KOK, "arac", "tahta.py"), "yaz",
             "--kim", BEN, "--kime", a, "--cins", cins,
             "--aciliyet", aciliyet, "--mesaj-dosya", dosya],
            capture_output=True, encoding="utf-8", errors="replace")
        ok = r.returncode == 0 and "yazıldı" in (r.stdout or "")
        print("   %-34s %s" % (a[:34], "✓" if ok else "🔴"))
        if ok:
            basarili += 1
        else:
            hatali.append((a, (r.stdout or r.stderr or "")[-160:]))
    print()
    print("ulaştı: %d / %d" % (basarili, len(adlar)))
    for a, c in hatali:
        print("🔴 %s\n   %s" % (a, c.strip()))
    if hatali:
        print()
        print("⚠️ HATALI OLANLARI ELLE YAZ — bir duyuru KISMEN gitmişse")
        print("   gitmemiş gibidir: kilit bir oturumu bağlamıyorsa kilit yoktur.")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
