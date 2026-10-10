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
    ⑦a yayın listesi      `arac/yayin_listesi.py` — index.html <script src> +
                          js yükleyicileri ∩ üreteçlerin AST'den ölçülen
                          çıktıları (+ kodla/paketle türevleri). Satır satır
                          basılır. gitignore'lu · diskte olmayan · BAYAT
                          TÜREV dosya ya da ölçülemeyen türetme ⇒ DUR.
    ⑦ git commit + push   YALNIZ ⑦a'nın listesi (pathspec)
    ⑧ 9 bip — "masaya dön"

⚠️ (KOSU-YAYIN-LISTE-1010) Bu zincir `kodla.py yay` ve `paketle.py yenile`
KOŞTURMAZ. Motor donemler/devletler_harita/petek_govde/devirler'i yeniden
ürettiğinde yayın türevleri bayatlar ve ⑦a BAYAT TÜREV ile DURUR — bu doğru
davranıştır: eski harita + yeni bölgeler yayınlanmaz.

🔴 KAPILAR TAVİZSİZ — üç çıkış kodu (`CLAUDE.md §3`: 0 temiz · 1 İHLAL ·
2 ÖLÇÜLEMEDİ) her kapıda AYRI okunur:

    ③ denetle.py      0 → geçer · 1 → DUR · 2 → DUR + ölçülemeyen sorular
                      ADIYLA basılır · başka her kod → DUR.  BAYRAKLA BİLE
                      GEVŞEMEZ — `--yayin-kapisi-uyari` ③'e DOKUNMAZ.
    ⑥ denetle_yayin   VARSAYILAN TAVİZSİZ: 0 dışı her kod → DUR.
                      `--yayin-kapisi-uyari` verilirse YALNIZ çıkış 1 uyarıya
                      iner (günlüğe "BAYRAĞIYLA UYARIYA İNDİ" düşer); 2
                      (ölçülemedi) ve öteki kodlar bayrakla da DURDURUR.

DUR = commit ATILMAZ, push YAPILMAZ, betik 1 ile çıkar. Bozuk bir yayın,
yayın yapmamaktan kötüdür — kullanıcı onu doğru sanar.
⚠️ 10 Ekim 2026'ya kadar bu paragraf `--yayin-kapisi-uyari` bayrağını
anıyordu ama bayrak YOKTU ve ⑥ HER sıfır-dışı kodu "bilinen borç" sayıp
zinciri sürdürüyordu (KOSU-YAYIN-KAPI-1010). Belge kod değildir; bayrak
artık gerçekten var ve VARSAYILAN kapalıdır.
⑥b (kronoloji şeması) ve ⑥c (arayüz) bilerek UYARI kipindedir (haritayı
bozmazlar); gerçek çıkış kodları günlüğe yazılır.
Commit ya da push düşerse betik 1 ile çıkar (eskiden 0 + 9 bip veriyordu).

📌 Commit mesajı `Write` ile değil, bu betik tarafından DOSYAYA yazılır ve
`git commit -F` ile verilir — `§11`: kaçış içeren metin kabuktan geçmez.

    py arac/kosu_yayin.py                 # tam zincir
    py arac/kosu_yayin.py --kuru          # ne yapacağını yaz, YAPMA
    py arac/kosu_yayin.py --push-yok      # koş, denetle, commit et; PUSH ETME
    py arac/kosu_yayin.py --yayin-kapisi-uyari   # ⑥ çıkış 1 → UYARI (yalnız 1)

Çıkış: 0 yayınlandı (ya da kuru koşu) · 1 bir kapı/adım düştü, YAYIN YOK.
"""
import argparse
import io
import os
import subprocess
import sys
import time
from datetime import datetime

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import yayin_listesi                                        # noqa: E402

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


def _calistir(ad, argv, kuru):
    """Adımı koşturur ve sonucu döndürür; KARAR VERMEZ. Kuru koşuda None."""
    yaz(f"▶ {ad}   ({' '.join(argv)})")
    if kuru:
        yaz(f"   (kuru koşu — çalıştırılmadı)")
        return None
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
    return r


def kos(ad, argv, kuru, zorunlu=True, uyari_kodu=False):
    """KAPI OLMAYAN adım. zorunlu ve kod!=0 ise zinciri DURDURUR.

    uyari_kodu=True yalnız BİLEREK uyarı kipinde olan adımlar içindir
    (⑥b, ⑥c). ③ ve ⑥ buradan GEÇMEZ — onlar `kapi()`dan geçer.
    """
    r = _calistir(ad, argv, kuru)
    if r is None or r.returncode == 0:
        return True
    if uyari_kodu:
        yaz(f"   ⚠️ {ad} çıkış {r.returncode} verdi — UYARI kipinde, zincir sürüyor")
        return True
    if zorunlu:
        yaz(f"   🔴 {ad} DÜŞTÜ — ZİNCİR DURDU. Yayın YAPILMADI.")
        if r.stderr:
            yaz("   │ " + (r.stderr or "")[:600])
        return False
    yaz(f"   ⚠️ {ad} düştü ama zorunlu değil — sürüyor")
    return True


def _olculemedi_satirlari(metin):
    """denetle.py'nin ÖLÇÜLEMEYEN SORU bloğunu çıktıdan ADIYLA söker."""
    satirlar, icinde = [], False
    for l in (metin or "").splitlines():
        if "ÖLÇÜLEMEYEN SORU" in l:
            icinde = True
        elif icinde and l.strip().startswith("SONUÇ"):
            break
        if icinde:
            satirlar.append(l)
    return satirlar


def kapi(ad, argv, kuru, bir_uyari=False):
    """KAPI adımı (③, ⑥). True yalnız GEÇERSE; False ⇒ commit/push YOK.

    0 → geçer.  1 → İHLAL: durur — YALNIZ bir_uyari=True ise uyarıya iner.
    2 → ÖLÇÜLEMEDİ: HER ZAMAN durur (bayrak 2'yi affetmez), ölçülemeyen
        sorular ADIYLA basılır.  Başka her kod (çökme, öldürülme) → durur.
    """
    r = _calistir(ad, argv, kuru)
    if r is None:
        return True
    kod = r.returncode
    if kod == 0:
        return True
    if kod == 1 and bir_uyari:
        yaz(f"   ⚠️ {ad} çıkış 1 (İHLAL) — `--yayin-kapisi-uyari` BAYRAĞIYLA "
            "UYARIYA İNDİ, zincir sürüyor")
        return True
    if kod == 1:
        yaz(f"   🔴 {ad} çıkış 1 — İHLAL VAR. ZİNCİR DURDU, commit ve push YOK.")
    elif kod == 2:
        yaz(f"   🔴 {ad} çıkış 2 — ÖLÇÜLEMEDİ (temiz DEĞİL). ZİNCİR DURDU, "
            "commit ve push YOK.")
        kova = _olculemedi_satirlari(r.stdout)
        if kova:
            for l in kova:
                yaz("   │ " + l)
        else:
            yaz("   │ (ölçülemeyen soru listesi çıktıda BULUNAMADI — tam "
                f"günlük: {LOG_DIZIN})")
    else:
        yaz(f"   🔴 {ad} çıkış {kod} — tanınmayan kod (çökme?). ZİNCİR DURDU, "
            "commit ve push YOK.")
    if r.stderr:
        yaz("   │ " + r.stderr[:600])
    return False


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
    ap.add_argument("--yayin-kapisi-uyari", action="store_true",
                    help="⑥ yayın kapısının YALNIZ çıkış 1'ini uyarıya indirir; "
                         "2 ve ③ etkilenmez")
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
    if not kapi("③ denetle (altı değişmez)", ["arac/denetle.py"], a.kuru):
        yaz("🔴 DEĞİŞMEZ DÜŞTÜ — commit ve push YAPILMADI.")
        bip(3, 220, 500)
        return 1
    # ④ palet — CLAUDE.md §9: veriye dokunan her koşudan sonra ŞART
    kos("④ renk ölçümü", ["arac/renk_olc.py"], a.kuru, zorunlu=False)
    # ⑤ sürüm damgası
    kos("⑤ sürüm damgası", ["arac/surum_damgala.py"], a.kuru, zorunlu=False)
    # ⑥ yayın kapısı — VARSAYILAN TAVİZSİZ; yalnız bayrakla 1 → uyarı
    if not kapi("⑥ yayın kapısı", ["arac/denetle_yayin.py"], a.kuru,
                bir_uyari=a.yayin_kapisi_uyari):
        yaz("🔴 YAYIN KAPISI DÜŞTÜ — commit ve push YAPILMADI.")
        bip(3, 220, 500)
        return 1

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

    # ⑦a YAYIN LİSTESİ — elle yazılmaz, ÖLÇÜLEREK TÜRETİLİR ve BASILIR
    #    (KOSU-YAYIN-LISTE-1010; kural ve gerekçe `arac/yayin_listesi.py`).
    #    Eski elle liste gitignore'lu dosyalar taşıyordu ve yayındaki gerçek
    #    haritayı (data/devlet_harita_ust.js) hiç anmıyordu.
    yaz("▶ ⑦a yayın listesi (arac/yayin_listesi.py)")
    L = yayin_listesi.turet(KOK)
    for s in L["satirlar"]:
        yaz("   " + s)
    if L["dur"] or L["olculemedi"]:
        if a.kuru:
            yaz("   (kuru koşu — gerçek koşu burada DURURDU)")
        else:
            yaz("🔴 YAYIN LİSTESİ %s — commit ve push YAPILMADI."
                % ("DURDURUCU VERDİ" if L["dur"] else "ÖLÇÜLEMEDİ"))
            bip(3, 220, 500)
            return 1

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
            + ("Yayin kapisi: --yayin-kapisi-uyari ILE (cikis 1 uyariya indiyse\n"
               "gunlukte yazili).\n" if a.yayin_kapisi_uyari else
               "Yayin kapisi: TAVIZSIZ (bayraksiz).\n")
            + "\n"
            "Gunluk: kosu_otomatik.log\n")
        var = L["liste"]              # ⑦a'da ölçüldü; diskte yoksa orada DURDU
        r = subprocess.run(["git", "-C", KOK, "add", "--"] + var,
                           capture_output=True, text=True,
                           encoding="utf-8", errors="replace")
        r = subprocess.run(["git", "-C", KOK, "commit", "-F", msg, "--"] + var,
                           capture_output=True, text=True,
                           encoding="utf-8", errors="replace")
        yaz(f"▶ ⑦ commit → çıkış {r.returncode}")
        for l in ((r.stdout or "") + (r.stderr or "")).splitlines()[:4]:
            yaz("   │ " + l)
        if r.returncode != 0:
            yaz("🔴 COMMIT DÜŞTÜ — push YAPILMADI, yayın YOK.")
            bip(3, 220, 500)
            return 1
        if not a.push_yok:
            p = subprocess.run(["git", "-C", KOK, "push"],
                               capture_output=True, text=True,
                               encoding="utf-8", errors="replace")
            yaz(f"▶ ⑧ push → çıkış {p.returncode}")
            for l in ((p.stdout or "") + (p.stderr or "")).splitlines()[:4]:
                yaz("   │ " + l)
            if p.returncode != 0:
                yaz("🔴 PUSH DÜŞTÜ — commit YEREL kaldı, yayın YOK.")
                bip(3, 220, 500)
                return 1

    yaz("=" * 64)
    yaz(f"BİTTİ · toplam {(time.time()-t0)/3600:.2f} saat")
    yaz("=" * 64)
    bip(9)                                   # CLAUDE.md §10: "masaya dön"
    return 0


if __name__ == "__main__":
    sys.exit(main())
