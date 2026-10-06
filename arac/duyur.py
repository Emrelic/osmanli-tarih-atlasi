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
    # 🔴 ÜÇ KOVA, İKİ DEĞİL (W50c, 6 Ekim 2026). `tahta.py yaz` artık çıkış
    # koduyla TESLİMİ söyler (0 ulaştı · 1 ulaşmadı · 2 yazılmadı/ölçülemedi),
    # "yazıldı" satırı ise mesajın YEREL tahta.json'a girdiğini. Eskiden kod
    # hep 0'dı; bu döngü "0 değilse ELLE YAZ" diyebiliyordu çünkü o yol hiç
    # açılmıyordu. Kod 1/2 + "yazıldı" ile o öğüt MÜKERRER üretir: mesaj
    # tahtada ZATEN var, yalnız gitmedi (M-0242 = M-0243 sınıfı).
    # ⇒ "yazıldı" var + kod≠0 ⇒ YAZILDI-GİTMEDİ: yeniden YAZILMAZ, push edilir.
    #   "yazıldı" yok ⇒ YAZILAMADI: eski 🔴, elle yazılır.
    ulasti, gitmedi, hatali = [], [], []
    for a in adlar:
        r = subprocess.run(
            [sys.executable, os.path.join(KOK, "arac", "tahta.py"), "yaz",
             "--kim", BEN, "--kime", a, "--cins", cins,
             "--aciliyet", aciliyet, "--mesaj-dosya", dosya],
            capture_output=True, encoding="utf-8", errors="replace")
        yazildi = "yazıldı" in (r.stdout or "")
        kuyruk = (r.stdout or r.stderr or "")[-160:]
        if r.returncode == 0 and yazildi:
            ulasti.append(a)
            isaret = "✓"
        elif yazildi:
            gitmedi.append((a, r.returncode, kuyruk))
            isaret = "🟡 yazıldı, GİTMEDİ (kod %d)" % r.returncode
        else:
            hatali.append((a, kuyruk))
            isaret = "🔴"
        print("   %-34s %s" % (a[:34], isaret))
    print()
    print("ulaştı: %d · yazıldı-gitmedi: %d · yazılamadı: %d  (toplam %d)"
          % (len(ulasti), len(gitmedi), len(hatali), len(adlar)))
    for a, kod, c in gitmedi:
        print("🟡 %s (kod %d)\n   %s" % (a, kod, c.strip()))
    if gitmedi:
        print()
        print("⚠️ YAZILDI, GİTMEDİ — bunları YENİDEN YAZMA (mükerrer olur): mesaj")
        print("   tahta.json'da VAR. `git status` + `git push`; kod 2 (ölçülemedi)")
        print("   ise önce `git log @{u}..` ile bak — gitmiş olabilir.")
    for a, c in hatali:
        print("🔴 %s\n   %s" % (a, c.strip()))
    if hatali:
        print()
        print("⚠️ YAZILAMAYANLARI ELLE YAZ — bir duyuru KISMEN gitmişse")
        print("   gitmemiş gibidir: kilit bir oturumu bağlamıyorsa kilit yoktur.")
    return 1 if (gitmedi or hatali) else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
