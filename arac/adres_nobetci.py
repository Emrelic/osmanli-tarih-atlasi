# -*- coding: utf-8 -*-
"""ADRES NÖBETÇİSİ — şartnamelere OTURUM KİMLİĞİ yazılmasını MEKANİK olarak engeller.

🔴 NİÇİN VAR — beş kez tekrarlanan bir hata, ve beşinde de "bir daha yapmam"
denmişti. Kullanıcının sözü (13 Ağustos 2026):
    "Eşek bile düştüğü çamurdan bir sefer gider."

Kusur her seferinde AYNI: koordinatör bir `session_id` yazar, adres BAYAT ya da
BAŞKASININDIR, işçilerin raporu hiçbir yere ulaşmaz. Ölçülmüş bedeli:
    12 Ağu   dört oturum "ölü" ilan edilmek üzereydi — dördü de çalışıyordu
    13 Ağu   yedi şartnamede ölü adres · dört sevk hedefine ulaşmadı
    13 Ağu   HAZIR KITA 3 kanıtladı: mesajlar KAYBOLMUYOR, YANLIŞ OTURUMA iniyor
             ve dört ÇALIŞAN oturum ilgisiz bir mesaj okuyup turundan oldu

🔴 VE SEBEBİ YAPISAL, DİKKATSİZLİK DEĞİL:
    `list_sessions` MEVCUT OTURUMU HARİÇ TUTAR.
    ⇒ Koordinatör KENDİ KİMLİĞİNİ HİÇBİR ZAMAN GÖREMEZ.
    ⇒ Yazdığı her adres bir TAHMİNDİR. Tahmin bazen tutar; tutmadığında
      sessizce tutmaz — araç yine "sent" der.

📌 Bu projenin kendi dersi (`CLAUDE.md §11`, altı ihlalden sonra yazılmıştı):
    "Kural yetmiyor, ALIŞKANLIK gerekiyor... yeter olan tek şey ARACI
     DEĞİŞTİRMEK."
   Bu dosya o cümlenin uygulamasıdır: kural yazmayı bırakıp KAPI koyuyoruz.

## ÇARE — ADRES DEĞİL YOL
Şartnameye kimlik YAZILMAZ. Yerine şu yazılır:
    "Sana bu görevi gönderen mesajı YANITLA. Doğru adres ODUR."
Sebebi mekanik: `send_message` teslim ederken gönderenin kimliğini ve geri
dönüş bağlantısını mesajın kendisine iliştirir. Yani DOĞRU ADRES, MESAJIN
KENDİSİYLE BİRLİKTE DOĞAR — saklanmasına, hatırlanmasına, tahmin edilmesine
gerek yoktur. Saklanan her adres bayatlar; doğan adres bayatlamaz.

Kullanım:
    py arac/adres_nobetci.py              # DENETLE — kirli varsa çıkış kodu 1
    py arac/adres_nobetci.py --temizle    # kimlikleri YOL metniyle değiştir
"""
import io
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TARANAN = ["oturumlar", "denetim"]

# `local_` ile başlayan UUID biçimi — send_message'ın kullandığı kimlik.
# ⚠️ Ham UUID (local_ öneksiz) KASTEN aranmıyor: commit hash'leri ve
# başka kimlikler yanlış alarm üretirdi. Dar tutup SESSİZ KALMAK yerine
# dar tutup GÜRÜLTÜSÜZ çalışmak seçildi; kapsam genişletmek gerekirse
# ölçülerek genişletilir (`§11`: bir denetimin KAPSAMI, doğruluğundan
# ayrı ölçülür).
KALIP = re.compile(r"local_[0-9a-fA-F]{8}-[0-9a-fA-F-]{20,}")

YOL = (
    "🔴 ADRES YERİNE YOL — sana bu görevi gönderen mesajı YANITLA.\n"
    "       Doğru adres ODUR; saklanan adres bayatlar, doğan adres bayatlamaz.\n"
    "       Ulaşamazsan: `oturumlar/<ADIN>-ILERLEME.md` dosyana yaz VE\n"
    "       KULLANICIYA söyle — arıza ÜÇ YERE bildirilir."
)


# 🔴 KAPSAM — ve bu satır nöbetçinin HAYATTA KALMASININ şartı.
# İlk yazımda BÜTÜN `.md` taranıyordu ve 15 bulgu verdi; ölçünce 7'sinin
# MEŞRU olduğu görüldü:
#   ŞARTNAME (`VERI-FETRET.md`)          koordinatör BAŞKASININ adresini yazar
#                                        ⇒ YASAK, hatanın kendisi budur
#   İLERLEME (`HAZIR-KITA-2-ILERLEME.md`) oturum KENDİ kimliğini kaydeder
#                                        ⇒ MEŞRU, hatta faydalı: arızayı
#                                          kanıtlayan ölçüm tam buydu
# 📌 `CLAUDE.md §11`: "bir denetimin KAPSAMI, doğruluğundan AYRI ölçülür —
#    'hangi çiftleri KURUYOR' sorusu 'kurduğunu doğru ölçüyor mu'dan önce
#    gelir." Ve gürültülü bir nöbetçi susturulur; susturulan nöbetçi yoktur.
def _sartname_mi(ad):
    u = ad.upper()
    # 🔴 TAHTA.MD DE HARİÇ — 14 Ağustos 2026, nöbetçinin İKİNCİ kapsam
    # daraltması ve sebebi ilkiyle AYNI:
    #   TAHTA.md, oturumların BİRBİRİNE bildirdiği kimlikleri taşır ve o
    #   kimlikler tam olarak bu nöbetçinin ÖNERDİĞİ çözümdür — "adres
    #   koordinatörün TAHMİNİ değil, sahibinin BEYANI olsun."
    #   Yani nöbetçi, kendi reçetesini ihlal diye sayıyordu: 7 bulgu 67'ye
    #   çıktı ve 60'ı MEŞRUYDU.
    # ⚠️ Ve gürültülü nöbetçi susturulur; susturulan nöbetçi YOKTUR —
    #   bu dosyanın kendi yorumunda yazılı olan uyarı, ikinci kez ısırdı.
    # 📌 Ayrım aynı: KOORDİNATÖRÜN YAZDIĞI şartname (yasak) ile
    #   SAHİBİNİN BEYAN ETTİĞİ kayıt (meşru).
    return not (u.endswith("-ILERLEME.MD") or u.endswith("-TASLAK.MD")
                or u == "TAHTA.MD")


def dosyalar():
    for d in TARANAN:
        yol = os.path.join(KOK, d)
        if not os.path.isdir(yol):
            continue
        for ad in sorted(os.listdir(yol)):
            if ad.endswith(".md") and _sartname_mi(ad):
                yield os.path.join(yol, ad)


def tara():
    bulgu = []
    for y in dosyalar():
        try:
            metin = io.open(y, encoding="utf-8").read()
        except Exception as e:                      # okunamayan dosya SESSİZ GEÇİLMEZ
            bulgu.append((y, 0, "OKUNAMADI: %s" % e))
            continue
        for i, sat in enumerate(metin.split("\n"), 1):
            for m in KALIP.finditer(sat):
                bulgu.append((y, i, m.group(0)))
    return bulgu


def temizle(bulgu):
    hedef = sorted({y for y, _, _ in bulgu})
    n = 0
    for y in hedef:
        metin = io.open(y, encoding="utf-8").read()
        yeni = KALIP.sub("<ADRES YAZILMAZ>", metin)
        if yeni != metin:
            io.open(y, "w", encoding="utf-8", newline="\n").write(yeni)
            n += 1
    return n


def main(argv):
    temiz_iste = "--temizle" in argv
    bulgu = tara()

    if not bulgu:
        print("✓ adres nöbetçisi: temiz — hiçbir şartnamede oturum kimliği yok")
        return 0

    print("🔴 ŞARTNAMEDE OTURUM KİMLİĞİ VAR — %d yerde:" % len(bulgu))
    for y, i, m in bulgu:
        print("   %s:%d  %s" % (os.path.relpath(y, KOK).replace("\\", "/"), i, m))
    print()
    print("   Sebep YAPISAL: list_sessions MEVCUT OTURUMU hariç tutar ⇒")
    print("   koordinatör kendi kimliğini GÖREMEZ ⇒ yazdığı her adres TAHMİNDİR.")
    print("   Ve tahmin tutmadığında araç yine 'sent' der — SESSİZ kaybeder.")
    print()
    print("   Yerine yazılacak metin:")
    print("   " + YOL.replace("\n", "\n   "))

    if temiz_iste:
        n = temizle(bulgu)
        print()
        print("→ %d dosyada kimlikler <ADRES YAZILMAZ> ile değiştirildi." % n)
        print("  ⚠️ Yerine YOL metnini elle yaz — nöbetçi metni YAZMAZ, çünkü")
        print("     her şartnamenin bağlamı farklı ve körü körüne ekleme")
        print("     'düzeltildi' görüntüsü verip anlamı bozabilir.")
        kalan = tara()
        print("→ yeniden tarama: %d bulgu" % len(kalan))
        return 1 if kalan else 0

    print()
    print("   Düzeltmek için: py arac/adres_nobetci.py --temizle")
    return 1


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
