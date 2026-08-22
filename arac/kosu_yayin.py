# -*- coding: utf-8 -*-
"""KOŞU + YAYIN — Claude OLMADAN, baştan sona.

🔴 EMRE, 18 Ağustos 2026: *"eğer kazara limit biter ise otomatik olarak
koşsun … sadece Claude olmadan da koşu yayın yapılabiliyor olmalı."*

Bu betik bütün zinciri kendi başına yürütür ve HER KAPIDA DURUR:

    ① uret_petek.py       harita üretimi          (~2-3 saat)
    ② uret_devirler.py    devirler.js             (~2 dk)
    ③ denetle.py          ALTI DEĞİŞMEZ — ✗ ise YAYIN YOK
    ④ renk_olc.py         palet — veri değiştiyse ŞART (CLAUDE.md §9)
    ⑤ surum_damgala.py    ?v=rNN yükselt
    ⑥ denetle_yayin.py    yayın kapısı
    ⑦ git commit + push
    ⑧ 9 bip — "masaya dön"

🔴 KAPILAR TAVİZSİZ: ③ ya da ⑥ düşerse commit ATILMAZ, push YAPILMAZ.
Bozuk bir yayın, yayın yapmamaktan kötüdür — kullanıcı onu doğru sanar.
⚠️ ⑥ bugün SARI (çizilmeyen dosyalar) ve çıkış kodu 1 veriyor; o bilinen
borç `--yayin-kapisi-uyari` ile UYARI sayılır, ③ ise ASLA.

📌 Commit mesajı `Write` ile değil, bu betik tarafından DOSYAYA yazılır ve
`git commit -F` ile verilir — `§11`: kaçış içeren metin kabuktan geçmez.

    py arac/kosu_yayin.py                 # tam zincir
    py arac/kosu_yayin.py --kuru          # ne yapacağını yaz, YAPMA
    py arac/kosu_yayin.py --push-yok      # koş, denetle, commit et; PUSH ETME
"""
import argparse
import io
import os
import subprocess
import sys
import time
from datetime import datetime

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GUNLUK = os.path.join(KOK, "kosu_otomatik.log")
# Her aşamanın TAM stdout'u buraya; `kosu_otomatik.log` yalnız özet taşır.
LOG_DIZIN = os.path.join(KOK, "kosu_gunluk")


def yaz(s):
    dam = datetime.now().strftime("%H:%M:%S")
    satir = f"[{dam}] {s}"
    print(satir)
    with io.open(GUNLUK, "a", encoding="utf-8") as f:
        f.write(satir + "\n")


def kos(ad, argv, kuru, zorunlu=True, uyari_kodu=False):
    """Bir adımı koşturur. zorunlu ve kod!=0 ise zinciri DURDURUR."""
    yaz(f"▶ {ad}   ({' '.join(argv)})")
    if kuru:
        yaz(f"   (kuru koşu — çalıştırılmadı)")
        return True
    t0 = time.time()
    r = subprocess.run([sys.executable] + argv, cwd=KOK,
                       capture_output=True, text=True,
                       encoding="utf-8", errors="replace")
    sure = time.time() - t0

    # ---- TAM ÇIKTIYI DİSKE AL — 12 satır bir motoru anlatmaya yetmez -----
    # 🔴 19 Ağustos 2026'da ölçüldü: 18 Ağustos koşusunun motor aşaması
    # 180 dakika sürdü ve stdout'unun TAMAMI atıldı, yalnız son 12 satır
    # kaldı. İçinde EKLEYİCİ KAPI'nın bilançosu vardı — yani o günün en
    # büyük değişikliğinin kaç petek-gün kattığı ÖLÇÜLEMEZ oldu.
    # Ve bu, `uret_petek.py`nin kendi yorumunun ihlali: "sessiz kapı,
    # kapatılmış kapıdır." Kapı sustuğu için değil, GÜNLÜK sustuğu için.
    try:
        os.makedirs(LOG_DIZIN, exist_ok=True)
        _ad = "".join(c if (c.isalnum() or c in "-_") else "_" for c in ad)
        _yol = os.path.join(LOG_DIZIN, f"{_ad}.log")
        with io.open(_yol, "w", encoding="utf-8", newline="\n") as f:
            f.write(f"# {ad}\n# {' '.join(argv)}\n"
                    f"# çıkış {r.returncode} · {sure/60:.1f} dk\n"
                    f"# {datetime.now():%Y-%m-%d %H:%M}\n\n")
            f.write(r.stdout or "")
            if r.stderr:
                f.write("\n\n===== STDERR =====\n" + r.stderr)
    except Exception as e:                                  # noqa: BLE001
        yaz(f"   ⚠️ tam günlük yazılamadı: {e}")

    son = [l for l in (r.stdout or "").splitlines() if l.strip()][-12:]
    for l in son:
        yaz("   │ " + l)
    yaz(f"   └ çıkış {r.returncode} · {sure/60:.1f} dk")
    if r.returncode == 0:
        return True
    if uyari_kodu:
        yaz(f"   ⚠️ {ad} çıkış 1 verdi — BİLİNEN BORÇ sayıldı, zincir sürüyor")
        return True
    if zorunlu:
        yaz(f"   🔴 {ad} DÜŞTÜ — ZİNCİR DURDU. Yayın YAPILMADI.")
        if r.stderr:
            yaz("   │ " + (r.stderr or "")[:600])
        return False
    yaz(f"   ⚠️ {ad} düştü ama zorunlu değil — sürüyor")
    return True


def bip(n, ton=880, sure=250):
    try:
        subprocess.run(["powershell", "-c",
                        f"1..{n} | ForEach-Object {{ [Console]::Beep({ton},{sure});"
                        f" Start-Sleep -Milliseconds 120 }}"],
                       capture_output=True, timeout=120)
    except Exception:                                       # noqa: BLE001
        pass


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--kuru", action="store_true")
    ap.add_argument("--push-yok", action="store_true")
    a = ap.parse_args()

    yaz("=" * 64)
    yaz(f"KOŞU + YAYIN başlıyor · {datetime.now():%Y-%m-%d %H:%M}")
    yaz("=" * 64)
    t0 = time.time()

    # ① üretim — en uzun adım
    if not kos("① harita üretimi", ["arac/uret_petek.py"], a.kuru):
        bip(3, 220, 500)
        return 1
    # ② devirler
    if not kos("② devirler.js", ["arac/uret_devirler.py"], a.kuru,
               zorunlu=False):
        pass
    # ③ ALTI DEĞİŞMEZ — tavizsiz kapı
    if not kos("③ denetle (altı değişmez)", ["arac/denetle.py"], a.kuru):
        yaz("🔴 DEĞİŞMEZ DÜŞTÜ — commit ve push YAPILMADI.")
        bip(3, 220, 500)
        return 1
    # ④ palet — CLAUDE.md §9: veriye dokunan her koşudan sonra ŞART
    kos("④ renk ölçümü", ["arac/renk_olc.py"], a.kuru, zorunlu=False)
    # ⑤ sürüm damgası
    kos("⑤ sürüm damgası", ["arac/surum_damgala.py"], a.kuru, zorunlu=False)
    # ⑥ yayın kapısı — bugün SARI, uyarı sayılıyor
    kos("⑥ yayın kapısı", ["arac/denetle_yayin.py"], a.kuru,
        uyari_kodu=True)

    # ⑥b KRONOLOJİ ŞEMASI — 21 Ağustos 2026'da zincire girdi.
    # 🔴 NİÇİN: dokuz `data/kronoloji_*.js` dosyası (1093 madde) vardı ve
    # İÇLERİNE BAKAN HİÇBİR ŞEY YOKTU. Altı değişmez yerleşim verisini
    # denetler; yayın kapısı dosyanın YÜKLENİP yüklenmediğine bakar, İÇİNE
    # değil. ⇒ `CLAUDE.md §11`: "denetim var ≠ o soruyu soruyor."
    # Doğuran vaka: MEMLÜK oturumu kendi çıktısında 8 kayıtta `dunya:0`
    # buldu (şema 1-5 istiyor), kendisi düzeltti ve bildirdi. Asıl soru
    # onun bulduğu değil, "ÖTEKİ SEKİZ DOSYADA DA var mı" idi — ve onu
    # soracak bir alet yoktu.
    # ⚠️ UYARI kipinde: bir şema ihlali haritayı bozmaz, yayını durdurmak
    # orantısız olur. Ama sessiz de kalmaz — günlüğe düşer.
    kos("⑥b kronoloji şeması", ["arac/denetle_kronoloji.py"], a.kuru,
        uyari_kodu=True)

    # ⑥c ARAYÜZ — `index.html` ile `js/app.js` arasındaki sessiz kopukluklar.
    # 🔴 NİÇİN EKLENDİ (22 Ağustos 2026): o gün üç kusur da DENETİMSİZDİ ve
    # üçünü de KULLANICI buldu:
    #   ölü sürgü        `ayar-yakinlik` hiçbir kod tarafından okunmuyordu;
    #                    Emre "bu ne işe yarıyor?" diye sordu
    #   kırık yorum      bir HTML yorumu erken kapandı, açıklama metni
    #                    AYARLAR PENCERESİNE sızdı; Emre ekran görüntüsü attı
    #   mükerrer id      `ayar-kenarpay` iki sürgüde birden vardı, ikincisi
    #                    hiç okunmuyordu (index.html:383'te kayıtlı)
    # ⚠️ UYARI kipinde: arayüz kopukluğu haritayı bozmaz, yayını durdurmak
    # orantısız olur. Ama sessiz de kalmaz — günlüğe düşer.
    kos("⑥c arayüz denetimi", ["arac/denetle_arayuz.py"], a.kuru,
        uyari_kodu=True)

    # ⑦ commit + push
    if a.kuru:
        yaz("▶ ⑦ commit + push   (kuru koşu — yapılmadı)")
    else:
        msg = os.path.join(KOK, "_kosu_mesaji.txt")
        io.open(msg, "w", encoding="utf-8", newline="\n").write(
            f"OTOMATIK KOSU — {datetime.now():%Y-%m-%d %H:%M}\n"
            "\n"
            "arac/kosu_yayin.py zinciri: uretim -> devirler -> ALTI DEGISMEZ\n"
            "-> renk olcumu -> surum damgasi -> yayin kapisi -> commit.\n"
            "\n"
            "Alti degismez TEMIZ olmadan bu commit ATILMAZ; zincir orada durur\n"
            "ve yayin yapilmaz. Bozuk bir yayin, yayin yapmamaktan kotudur --\n"
            "kullanici onu dogru sanar.\n"
            "\n"
            "Gunluk: kosu_otomatik.log\n")
        ciktilar = ["data/donemler.js", "data/devletler_harita.js",
                    "data/bolgeler.js", "data/devirler.js", "data/altlik.js",
                    "data/petek_govde.js", "data/bos_alanlar.js",
                    "veri-kaynak/motor_kara.geojson", "index.html",
                    "css/style.css"]
        var = [c for c in ciktilar if os.path.exists(os.path.join(KOK, c))]
        r = subprocess.run(["git", "-C", KOK, "add", "--"] + var,
                           capture_output=True, text=True,
                           encoding="utf-8", errors="replace")
        r = subprocess.run(["git", "-C", KOK, "commit", "-F", msg, "--"] + var,
                           capture_output=True, text=True,
                           encoding="utf-8", errors="replace")
        yaz(f"▶ ⑦ commit → çıkış {r.returncode}")
        for l in (r.stdout or "").splitlines()[:4]:
            yaz("   │ " + l)
        if r.returncode == 0 and not a.push_yok:
            p = subprocess.run(["git", "-C", KOK, "push"],
                               capture_output=True, text=True,
                               encoding="utf-8", errors="replace")
            yaz(f"▶ ⑧ push → çıkış {p.returncode}")
            for l in ((p.stdout or "") + (p.stderr or "")).splitlines()[:4]:
                yaz("   │ " + l)

    yaz("=" * 64)
    yaz(f"BİTTİ · toplam {(time.time()-t0)/3600:.2f} saat")
    yaz("=" * 64)
    bip(9)                                   # CLAUDE.md §10: "masaya dön"
    return 0


if __name__ == "__main__":
    sys.exit(main())
