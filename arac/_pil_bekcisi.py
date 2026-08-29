# -*- coding: utf-8 -*-
"""PİL BEKÇİSİ — makine sönmeden ÖNCE işi kurtarır.

🔴 NİÇİN VAR — ölçülmüş bir kısıt:
    Tam kapasite   14.780 mWh = 14,8 Wh
    Tasarım        ~30 Wh  ⇒ pil sağlığı ≈ %49
    Kapak kapalı, hafif yük (~9-11 W)  →  ~1 saat 20 dk – 1 saat 50 dk
    Petek koşusu çalışırken (25-35 W)  →  ~25-35 DAKİKA

⚠️ Ve motor `donemler.js`'i koşunun EN SONUNDA yazar. Yani yarıda kesilen
   bir koşu SIFIR üretir — 5 saatlik iş hiç doğmadan ölür. Bu yüzden
   bataryadayken koşu BAŞLATILMAZ; bu betik onun yerine geçer.

Ne yapar: pili yoklar, eşikleri GEÇERKEN (kenar tetiklemeli) tek satır
basar. Monitor altında koşarsa o satır koordinatör oturumunu UYANDIRIR.
Sessizken sıfır çıktı ⇒ sıfır token.

    py arac/_pil_bekcisi.py            # 60 sn'de bir yoklar
    py arac/_pil_bekcisi.py --sn 30

Eşikler ve niçin onlar:
    %40  UYARI     — büyük iş başlatma, süren işi toparlamaya başla
    %25  TOPARLA   — her oturum kendi dosyasını COMMIT etsin
    %15  SON ÇAĞRI — koordinatör HER ŞEYİ commit+push etsin
    %10  KAPANIŞ   — bundan sonrası kurtarılamaz
"""
import argparse
import subprocess
import sys
import time

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

# (eşik, etiket, ne yapılacak) — YÜKSEKTEN ALÇAĞA sıralı
ESIKLER = [
    (40, "UYARI",     "yeni BÜYÜK iş baslatma; suren isi toparlamaya basla"),
    (25, "TOPARLA",   "HER oturum kendi dosyasini COMMIT etsin (pathspec'li)"),
    (15, "SON CAGRI", "koordinator HER SEYI commit+push etsin — son sans"),
    (10, "KAPANIS",   "bundan sonrasi KURTARILAMAZ; yazma islemi yapma"),
]

PS = (
    "$b = Get-CimInstance Win32_Battery | Select-Object -First 1; "
    "if ($null -eq $b) { 'YOK' } else { "
    "  \"$($b.EstimatedChargeRemaining)|$($b.BatteryStatus)\" }"
)


def olc():
    """(yuzde, fiste_mi) döndürür; ölçemezse (None, None).

    BatteryStatus: 1 = deşarj (bataryada) · 2 = AC bağlı.
    ⚠️ Öteki kodlar (3-11) şarj/bakım hâlleridir; hepsini "fişte" sayıyoruz
      çünkü 1 DIŞINDAKİ her hâlde harici güç vardır.
    """
    try:
        ham = subprocess.run(
            ["powershell", "-NoProfile", "-Command", PS],
            capture_output=True, text=True, timeout=25,
        ).stdout.strip()
    except Exception:
        return None, None
    if not ham or ham == "YOK" or "|" not in ham:
        return None, None
    a, b = ham.split("|", 1)
    try:
        return int(a.strip()), (int(b.strip()) != 1)
    except ValueError:
        return None, None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--sn", type=int, default=60, help="yoklama araligi (sn)")
    a = ap.parse_args()

    # 🔴 KENAR TETİKLEME — aynı hâli iki kez BASMAZ. Emre'nin kuralı:
    #    "token yiyen uyandırmaya karşıyım." Sessizlik = sıfır token.
    son_esik = None
    son_fis = None
    ilk = True

    while True:
        yuzde, fiste = olc()
        if yuzde is None:
            time.sleep(a.sn)
            continue

        # ① Güç kaynağı DEĞİŞTİ mi — fişe takıldı/çekildi
        if son_fis is not None and fiste != son_fis:
            if fiste:
                print(f"[PIL] FISE TAKILDI · %{yuzde} — kosu artik GUVENLI",
                      flush=True)
                son_esik = None          # eşik geçmişi sıfırlanır
            else:
                print(f"[PIL] FISTEN CEKILDI · %{yuzde} — BUYUK IS BASLATMA "
                      f"(bu pille kosu ~25-35 dk sonra oLUR)", flush=True)
        son_fis = fiste

        if fiste:
            if ilk:
                print(f"[PIL] baslangic: %{yuzde} · FISTE — nobet basladi",
                      flush=True)
                ilk = False
            time.sleep(a.sn)
            continue

        # ② Bataryadayız — hangi eşiğin ALTINDAYIZ?
        simdiki = None
        for esik, etiket, ne in ESIKLER:
            if yuzde <= esik:
                simdiki = (esik, etiket, ne)
        if ilk:
            print(f"[PIL] baslangic: %{yuzde} · BATARYADA — nobet basladi",
                  flush=True)
            ilk = False
        # Yalnız DAHA ALT bir eşiğe geçince öter; geri yukarı çıkarsa da öter.
        if simdiki != son_esik and simdiki is not None:
            esik, etiket, ne = simdiki
            print(f"[PIL] {etiket} · %{yuzde} (esik %{esik}) → {ne}",
                  flush=True)
            son_esik = simdiki
        elif simdiki is None and son_esik is not None:
            print(f"[PIL] TOPARLANDI · %{yuzde} — esiklerin ustune cikti",
                  flush=True)
            son_esik = None

        time.sleep(a.sn)


if __name__ == "__main__":
    main()
