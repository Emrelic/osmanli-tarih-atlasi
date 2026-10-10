# -*- coding: utf-8 -*-
"""TAHTA AĞ AYARI — `oturumlar/ag.json`a jetonu ve sunucu adresini yazar.

🔴 NİÇİN VAR (10 Ekim 2026, Emre: "jeton nedir nereye koyacam bilmiyorum"):
Tahta sunucusu LAB'da ayakta ama DÖRT makinenin hiçbiri ona ulaşamıyor —
çünkü her makinenin kendi `oturumlar/ag.json`u yok. O dosya gitignore'da
(olmalı: jeton bir sırdır, depoya girmez) ⇒ git ile dağıtılamaz ⇒ ELLE
kurulur. Elle JSON yazdırmak Emre'den beklenecek iş değil: bir virgül
hatası "AYAR KUSURLU" verir ve sebebi görünmez. Bu alet o adımı TEK KOMUTA
indirir ve kendi sonucunu ÖLÇER.

📌 Koordinatör jetonu GÖRMEZ ve TAŞIMAZ (10 Ekim kuralı): jeton yalnız
Emre'nin elinden bu aletin argümanına girer. Alet de onu EKRANA BASMAZ —
yalnız uzunluğunu ve son 4 hanesini basar ki "doğru olanı mı yazdım"
sorusu cevaplanabilsin, ama ekran görüntüsü sırrı sızdırmasın.

KULLANIM  (🔴 jetonu TIRNAK içine al; köşeli parantez KULLANMA —
           PowerShell'de `<` ayrılmış operatördür, komut kırılır)
  py arac/ag_ayarla.py --uret                     YENİ jeton üret (ekrana BASMAZ)
  py arac/ag_ayarla.py --jeton "ABC…"             yaz (sunucu varsayılan LAB)
  py arac/ag_ayarla.py --jeton <JETON> --sina     yaz + SUNUCUYA BAĞLANMAYI ÖLÇ
  py arac/ag_ayarla.py --sina                     yalnız ölç (yazmaz)
  py arac/ag_ayarla.py --goster                   ne yazılı (jeton MASKELİ)

ÇIKIŞ KODLARI
  0  tamam              2  argüman/ayar kusurlu
  3  yazıldı ama SUNUCUYA ULAŞILAMADI (ağ · güvenlik duvarı · sunucu kapalı)
  4  sunucu CEVAP VERDİ ama JETON YANLIŞ (401)
⚠️ 3 ile 4 ayrı tutulur: ikisi de "çalışmıyor" der ama ÇARELERİ TERS —
3'ün çaresi güvenlik duvarı/ağ, 4'ün çaresi jetonun kendisi. Tek kovaya
atmak Emre'yi yanlış tarafı tamir etmeye gönderir.
"""
import io
import json
import os
import secrets
import sys

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AYAR_YOLU = os.path.join(KOK, "oturumlar", "ag.json")

# LAB'ın Tailscale adresi (10 Ekim 2026 ölçümü, `tailscale status`).
# Tailscale adresi makineye SABİT atanır; ev/eczane ağı değişse de değişmez —
# bu yüzden burada yazılı olması bir varsayım değil bir ölçümdür.
SUNUCU_VARSAYILAN = "100.108.173.121:8788"


def maskele(j):
    """Jetonu ekrana basılabilir hâle getirir: uzunluk + son 4 hane."""
    if not j:
        return "YOK"
    return "%d karakter · …%s" % (len(j), j[-4:])


def ayar_yukle(yol):
    if not os.path.exists(yol):
        return {}
    try:
        with io.open(yol, encoding="utf-8") as f:
            return json.load(f)
    except (ValueError, OSError) as e:
        print("🔴 MEVCUT ag.json OKUNAMADI (%s) — üstüne yazmıyorum." % e)
        print("   Dosyayı taşı ya da sil, sonra yeniden koştur: %s" % yol)
        sys.exit(2)


def sina(ayar):
    """Sunucuya GERÇEKTEN bağlanmayı ölçer. Beyan değil ÖLÇÜM."""
    import urllib.error
    import urllib.request

    adres = ayar.get("tahta_sunucu")
    jeton = ayar.get("jeton")
    if not adres or not jeton:
        print("🔴 SINANAMADI: ag.json'da sunucu adresi ya da jeton yok.")
        return 2
    url = "http://%s/tahta/oku?son=1" % adres
    istek = urllib.request.Request(url, headers={"X-Tahta-Jeton": jeton})
    try:
        with urllib.request.urlopen(istek, timeout=8) as c:
            kod = c.status
            boy = len(c.read())
        print("🟢 SUNUCU CEVAPLADI: HTTP %d · %d bayt" % (kod, boy))
        print("   ⇒ bu makine tahtayı SUNUCUDAN okuyabiliyor.")
        return 0
    except urllib.error.HTTPError as e:
        if e.code == 401:
            print("🔴 JETON YANLIŞ (HTTP 401) — sunucuya ULAŞILDI, kimlik reddedildi.")
            print("   ⇒ ağ ve güvenlik duvarı TAMAM; sorun yalnız jetonda.")
            return 4
        print("🔴 SUNUCU HATA DÖNDÜ: HTTP %d" % e.code)
        return 3
    except Exception as e:
        print("🔴 SUNUCUYA ULAŞILAMADI: %s" % type(e).__name__)
        print("   Sırayla bak: ① LAB açık mı ② sunucu koşuyor mu")
        print("                ③ LAB'ın güvenlik duvarı 8788'e izin veriyor mu")
        print("                ④ `tailscale status` bu makinede ne diyor")
        return 3


def main():
    a = sys.argv[1:]

    def al(ad, varsayilan=None):
        if ad in a:
            i = a.index(ad)
            if i + 1 < len(a):
                return a[i + 1]
        return varsayilan

    yol = al("--yol", AYAR_YOLU)
    ayar = ayar_yukle(yol)

    if "--goster" in a:
        print("ag.json  :", yol, "(VAR)" if os.path.exists(yol) else "(YOK)")
        print("sunucu   :", ayar.get("tahta_sunucu") or "YOK")
        print("jeton    :", maskele(ayar.get("jeton")))
        print("makineler:", len(ayar.get("makineler") or {}))
        return 0 if ayar.get("jeton") else 2

    # --uret: jetonu BURADA uret, dosyaya yaz, EKRANA BASMA.
    # 🔴 10 Ekim 2026 vakasi: jeton elle tasinirken sohbete dustu. Sebep
    # arayuzdu — "--jeton <JETON>" kalibi ① PowerShell'de `<` ayrilmis
    # operator oldugu icin KIRILIYOR ② "buraya yapistir" yerine "bunu
    # aynen gonder" diye okunuyor. Caresi uyari degil, ADIMI KALDIRMAK:
    # ureten makine jetonu hic gostermezse o adimda sizacak bir sey olmaz.
    # `secrets` kullanilir, `random` DEGIL: random tahmin edilebilir.
    if "--uret" in a:
        jeton = secrets.token_urlsafe(32)        # 43 karakter, URL-guvenli
        ayar["jeton"] = jeton
        ayar.setdefault("tahta_sunucu", al("--sunucu", SUNUCU_VARSAYILAN))
        os.makedirs(os.path.dirname(yol), exist_ok=True)
        with io.open(yol, "w", encoding="utf-8") as f:
            json.dump(ayar, f, ensure_ascii=False, indent=1)
        teyit = ayar_yukle(yol)
        if teyit.get("jeton") != jeton:
            print("🔴 URETILDI AMA GERI OKUNAMADI — dosya izni?")
            return 2
        print("🟢 YENI JETON URETILDI VE YAZILDI")
        print("   dosya :", yol)
        print("   jeton :", maskele(jeton), " (tam hali EKRANA BASILMADI)")
        print()
        print("SIRADAKI UC ADIM:")
        print("  ① Tahta sunucusunu YENIDEN BASLAT (eski jetonla kosuyor).")
        print("  ② Jetonu dagitmak icin dosyayi notepad ile ac, tirnak")
        print("     icindeki dizgiyi kopyala. SOHBETE YAPISTIRMA.")
        print("  ③ Her makinede: py arac/ag_ayarla.py --jeton \"...\" --sina")
        return 0

    jeton = al("--jeton")
    if jeton:
        if len(jeton) < 16:
            print("🔴 JETON KISA: %d karakter, en az 16 olmalı." % len(jeton))
            print("   (Sunucunun kendi `ayar_oku`su da 16'nın altını reddeder.)")
            return 2
        # MERGE, overwrite DEĞİL: `makineler` gibi mevcut alanlar korunur.
        ayar["jeton"] = jeton
        ayar.setdefault("tahta_sunucu", al("--sunucu", SUNUCU_VARSAYILAN))
        if al("--sunucu"):
            ayar["tahta_sunucu"] = al("--sunucu")
        os.makedirs(os.path.dirname(yol), exist_ok=True)
        with io.open(yol, "w", encoding="utf-8") as f:
            json.dump(ayar, f, ensure_ascii=False, indent=1)
        # GERİ OKU — "yazdım" kanıt değildir (§7.1 ⑤b'nin dosya yüzü).
        teyit = ayar_yukle(yol)
        if teyit.get("jeton") != jeton:
            print("🔴 YAZILDI AMA GERİ OKUNAMADI — dosya izni?")
            return 2
        print("🟢 YAZILDI :", yol)
        print("   sunucu  :", teyit.get("tahta_sunucu"))
        print("   jeton   :", maskele(teyit.get("jeton")))
    elif "--sina" not in a:
        print(__doc__)
        return 2

    if "--sina" in a:
        print()
        return sina(ayar_yukle(yol))
    return 0


if __name__ == "__main__":
    sys.exit(main())
