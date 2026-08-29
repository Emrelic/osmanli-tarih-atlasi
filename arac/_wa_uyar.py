# -*- coding: utf-8 -*-
"""WHATSAPP UYARI KANALI — kurulu, sınanmış, ve VARSAYILAN OLARAK UYKUDA.

🔴 EMRE'NİN EMRİ (29 Ağustos 2026):
    *"Bu sistemi kur ama çalıştırma şimdilik, çünkü WhatsApp bot
     kullanımına kızabiliyor bizi banlamasın. Bir sefer bas, teknoloji
     hazır dursun."*
⇒ Bu betik ÖLÇÜLDÜ ve ÇALIŞIYOR, ama `--gonder` verilmeden HİÇBİR ŞEY
  yapmaz. Kuru çalışma varsayılandır; kanal açılmaz, mesaj yazılmaz.

═══ NASIL ÇALIŞIYOR — ve nesi otomatik DEĞİL ═══
    whatsapp://send?phone=<numara>&text=<metin>
Bu, WhatsApp'ın KENDİ belgelenmiş "click-to-chat" adresidir — her sitedeki
"WhatsApp'tan yaz" düğmesinin kullandığı şey. Doğru sohbeti açar ve metni
yazı kutusuna KOYAR. **GÖNDERMEZ.**

⚠️ GÖNDERME ADIMI OTOMATİK DEĞİL, ve bu bir kusur değil TASARIM:
    ① WhatsApp penceresi ekran görüntüsünde SİYAH çıkıyor (içerik
      yakalanmıyor) ⇒ ölçülemez
    ② UI Automation'a 8 öge açıyor: başlık çubuğu + üç düğme. Yazı
      kutusu YOK ⇒ ölçülemez
    ③ SetForegroundWindow arka plandan REDDEDİLİYOR (Windows foreground
      kilidi) ⇒ tuş gönderilemiyor
📌 Üçü de ölçüldü, üçü de kapalı. ⇒ Son tuşa İNSAN basar.
   Ve bu, ban riskine karşı en iyi savunma: bu kanal tanım gereği
   toplu mesaj atamaz.

═══ KULLANIM ═══
    py arac/_wa_uyar.py "metin"                 # KURU — ne yapacağını yazar
    py arac/_wa_uyar.py "metin" --gonder        # sohbeti açar + metni koyar
    py arac/_wa_uyar.py "metin" --gonder --numara 9053...

⚠️ `--gonder` bile GÖNDERMEZ; yalnız hazırlar. Ad kasten böyle: "gönder"
   dediğin an bile bir insan onayı kalıyor.

═══ NE ZAMAN ÇAĞRILIR ═══
Emre uzaktayken ve GERÇEKTEN müdahalesi gerektiğinde:
    · pil eşiği kritik, iş kaybolmak üzere      (`_pil_bekcisi.py`)
    · koşu öldü / motor izi bozuldu
    · bir karar olmadan bütün kol duruyor
🔴 "İş bitti" haberi için ÇAĞRILMAZ. Bu kanal ALARM içindir; rutin
   rapor tahtaya yazılır. Alarmı ucuzlatan, onu alarm olmaktan çıkarır.
"""
import argparse
import subprocess
import sys
import urllib.parse

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

# Emre'nin kendi numarası — kendi kendine mesaj atar, başka kimseye DEĞİL.
NUMARA = "905079477423"
TAVAN = 900          # WhatsApp adres satırı çok uzun metni kesiyor


def hazirla(metin, numara=NUMARA):
    """Adresi kurar; hiçbir yan etkisi yoktur."""
    if len(metin) > TAVAN:
        metin = metin[: TAVAN - 3] + "..."
    return "whatsapp://send?phone={}&text={}".format(
        numara, urllib.parse.quote(metin, safe="")
    )


def gonder(adres):
    """Sohbeti açar ve metni yazı kutusuna KOYAR. Göndermez."""
    r = subprocess.run(
        ["powershell", "-NoProfile", "-Command",
         "Start-Process '{}'".format(adres.replace("'", "''"))],
        capture_output=True, text=True, timeout=30,
    )
    return r.returncode == 0, (r.stderr or "").strip()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("metin")
    ap.add_argument("--numara", default=NUMARA)
    ap.add_argument("--gonder", action="store_true",
                    help="sohbeti AC ve metni koy (yine de GONDERMEZ)")
    a = ap.parse_args()

    adres = hazirla(a.metin, a.numara)

    if not a.gonder:
        print("KURU CALISMA — hicbir sey yapilmadi.")
        print("  numara :", a.numara)
        print("  metin  :", a.metin[:120] + ("..." if len(a.metin) > 120 else ""))
        print("  adres  :", adres[:110] + "...")
        print()
        print("Gercekten acmak icin --gonder ekle. Acilsa bile SON TUSA")
        print("INSAN basar — otomatik gonderim YOK (tasarim, kusur degil).")
        return 0

    ok, hata = gonder(adres)
    if ok:
        print("SOHBET ACILDI ve metin yazi kutusuna KONDU.")
        print("🔴 GONDERILMEDI — Emre'nin Enter'a basmasi gerekiyor.")
        return 0
    print("ACILAMADI:", hata or "sebep bilinmiyor")
    return 1


if __name__ == "__main__":
    sys.exit(main())
