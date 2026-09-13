# -*- coding: utf-8 -*-
"""GÖRSEL LİSANS SINAVI — Wikimedia Commons dosya sayfası lisansını okur.

    py denetim/ARAC-GORSEL-LISANS-0913.py <url1> <url2> ...
    py denetim/ARAC-GORSEL-LISANS-0913.py --dosya <url-listesi.txt>

Çıktı: her URL için KABUL/RED (sebebiyle) + toplam sayım. Hiçbir URL
SESSİZCE atlanmaz — ağ hatası da "ÖLÇÜLEMEDİ" diye SAYILIR (D107: üç ayrı
damga — bulunamadı · ölçülemedi · okumadım — birbirinin yerine geçmez).

═══ NİÇİN VAR — KITA-24-GORSEL-HATTI-0045.md §② ═══
`CLAUDE.md §1.6` kırmızı çizgisi: YALNIZ kamu malı / CC0, CC-BY-SA DEĞİL.
Bir kırmızı çizgi ancak MAKİNE SORABİLİYORSA yaşar (`denetim/ONERI-GORSEL-
0907.md §④`, `§11`: "bir `if` ile sorulamıyorsa kayıt vardır, VERİ yoktur").
Bu betik o `if`in kendisi — göz kararıyla "kamu malı görünüyor" denmesin.

═══ YÖNTEM — ÖLÇÜLEREK BULUNDU, İLK VARSAYIM ÇÜRÜDÜ ═══
İlk sürüm `Template:<jeton>` bağlantısını arıyordu ("Commons dosya sayfası
lisans şablonunu adıyla bağlar" varsayımıyla) — ve Mona Lisa sayfasında
SINANINCA ÇÜRÜDÜ: lisans şablonu TRANSKLÜDE ediliyor (içeriği gömülü),
sayfada literal `Template:PD-old-100` bağlantısı YOK. Doğru ve GÜVENİLİR
işaret **kategori bağlantıları**: her lisanslı dosya kendi lisans
kategorisine düşer —
    <a href="/wiki/Category:PD-old-100-expired">
— ve bu, sayfa diline (TR/EN/…) BAĞIMSIZ çalışır; metin eşleşmesi (ör.
"public domain") dilden dile değişir, kategori ADI değişmez.
Doğrulandı: Mona Lisa → `Category:PD-Art_(PD-old-100-expired)` (KABUL),
Wikimedia sunucu fotoğrafı → `Category:CC-BY-SA-3.0` (RED) — ikisi de
gerçek Commons sayfalarına karşı SINANDI, uydurulmadı (D010).
⚠️ Kategori adı bir jetonun ÖNEKİYLE başlayabilir (`PD-old-100-expired`
`PD-old` ile başlıyor) ⇒ eşleşme TAM DEĞİL ÖNEK bazlı.
⇒ Ve tersi de kontrol edilir: RED listesindeki bir kategori de varsa
(ör. çift lisanslı bir sayfada PD kategorisiyle YAN YANA durabilir) KABUL
bulundu diye sessizce geçilmez — İKİSİ DE raporlanır ve sayfa YİNE RED
sayılır (D024: iki ayrı bulgu tek satırda birleşince yanlış çare
uygulanır — burada çare "reddet", birleşme onu GİZLEMEMELİ).

═══ SINIRI — ÖLÇMEDİĞİM ═══
Bu betik BİR sayfanın BİR ANLIK durumunu okur. Commons lisans etiketleri
değişebilir (nadiren) — bir kayıt bugün KABUL, yarın tartışmalı çıkabilir.
Periyodik yeniden sınama BU BETİĞİN İŞİ DEĞİL, borç olarak kayıtlı.
"""
import io
import re
import sys
import time
import urllib.error
import urllib.request

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

# 🔴 KAPALI KÜME — denetim/ONERI-GORSEL-0907.md §④, KITA-24 şartnamesi
# aynen onayladı. Buraya YENİ bir jeton eklemek bir KARAR gerektirir —
# elle genişletme YOK (D028: bir alan tasarlamadan önce zaten var olanı ölç).
# ⚠️ `PD` TAM EŞİTLİKLE aranır — ÖNEK OLARAK DEĞİL. Sınandı (Mehmedpasha.jpg,
#   13 Eylül 2026): `startswith("PD")` verseydi, Commons'ın TUTARSIZ eski
#   kategorileri (ör. bu sayfadaki "PD_Old" — standart "PD-old"dan AYRI,
#   muhtemelen bakımsız bir yinelenen kategori) da kabul edilirdi ve o
#   zaman KABUL_ONEKLI listesi anlamsızlaşırdı. Bare `PD` kendi başına
#   ONERI-0907'nin altıncı jetonu; genişletmeden ayrı tutuldu.
KABUL_TAM = ("PD", "CC0")
KABUL_ONEKLI = ("PD-old-100", "PD-old-70", "PD-old-80", "PD-old-90",
                "PD-old", "PD-US", "PD-Art", "PD-Art-two", "PD-because",
                "PD-scan")
# En sık görülen RET kategorileri — bulunursa sebep AÇIKÇA yazılır.
# ⚠️ Bu liste TAM DEĞİL: KABUL'da olmayan HER kategori zaten RED sayılır,
# buradakiler yalnız "sebep" mesajını insan-okunur yapmak için.
RET_BILINEN = ("CC-BY-SA", "CC-BY", "GFDL", "Copyrighted free use",
               "Attribution", "Non-free", "FAL", "OTRS")

# Commons dosya sayfasında bir lisans kategorisi HER ZAMAN şu biçimde
# bağlanır: /wiki/Category:<ad> — ad alt çizgiyle ayrılmış, parantez içerebilir.
KATEGORI_RX = re.compile(r'Category:([A-Za-z0-9][\w().+-]*)')


def _getir(url, deneme=3):
    """Sayfa HTML'ini getirir. Başarısızsa None döner — SESSİZCE değil,
    çağıran taraf bunu ÖLÇÜLEMEDİ diye raporlar."""
    son_hata = None
    for i in range(deneme):
        try:
            req = urllib.request.Request(
                url, headers={"User-Agent": "osmanli-tarih-atlasi-lisans-sinavi/1.0"})
            with urllib.request.urlopen(req, timeout=20) as r:
                return r.read().decode("utf-8", "replace")
        except urllib.error.HTTPError as e:
            son_hata = e
            if e.code in (404, 410):
                break  # kalıcı hata — tekrar denemek zaman kaybı
            time.sleep(1.5)
        except Exception as e:  # noqa: BLE001 — geçici ağ hatası, tekrar denenir
            son_hata = e
            time.sleep(1.5)
    print("  [AĞ HATASI] %s — %s" % (url, son_hata))
    return None


def sina(url):
    """Tek bir URL için (jeton_kabul, jeton_red, hüküm, sebep) döndürür."""
    html = _getir(url)
    if html is None:
        return None, None, "ÖLÇÜLEMEDİ", "sayfa getirilemedi (ağ/zaman aşımı)"

    # 🔴 YALNIZ LİSANS KATEGORİLERİ — dosya sayfası onlarca kategoriye
    #   düşebilir ("Paintings by Leonardo", "1503 works" …); hepsini KABUL/
    #   RED kümesine karşı sınamak gürültü üretir. Önek eşleşmesi yalnız
    #   bizim aradığımız iki kümeye karşı yapılır, kalan kategoriler
    #   umursanmaz (ne KABUL ne RED — ne olduklarının önemi yok).
    kategoriler = set(KATEGORI_RX.findall(html))
    kabul_bulunan = sorted(c for c in kategoriler
                            if c in KABUL_TAM or
                            any(c.startswith(j) for j in KABUL_ONEKLI))
    red_bulunan = sorted(c for c in kategoriler
                          if any(c.upper().startswith(b.upper())
                                 for b in RET_BILINEN))

    if red_bulunan:
        # 🔴 KABUL kategorisi de bulunmuş olsa bile RED — karışık/tartışmalı
        #   lisans, "en iyimser okuma" ile geçirilmez (yukarı bak, D024).
        return kabul_bulunan, red_bulunan, "RED", (
            "yasak kategori(ler) de bağlı: %s" % ", ".join(red_bulunan))
    if kabul_bulunan:
        return kabul_bulunan, red_bulunan, "KABUL", "kategori: %s" % ", ".join(kabul_bulunan)
    return [], [], "RED", "kabul edilen lisans kategorisi bulunamadı"


def main(argv):
    if "--dosya" in argv:
        yol = argv[argv.index("--dosya") + 1]
        urller = [s.strip() for s in io.open(yol, encoding="utf-8")
                  if s.strip() and not s.strip().startswith("#")]
    else:
        urller = [a for a in argv if a.startswith("http")]

    if not urller:
        print("kullanım: py denetim/ARAC-GORSEL-LISANS-0913.py <url...> "
              "| --dosya <liste.txt>")
        return 2

    sayim = {"KABUL": 0, "RED": 0, "ÖLÇÜLEMEDİ": 0}
    for u in urller:
        kabul, red, hukum, sebep = sina(u)
        sayim[hukum] += 1
        im = {"KABUL": "🟢", "RED": "🔴", "ÖLÇÜLEMEDİ": "⚪"}[hukum]
        print("%s %-8s %-70s %s" % (im, hukum, u[:70], sebep))

    print()
    print("=== SONUÇ — %d URL ===" % len(urller))
    for k in ("KABUL", "RED", "ÖLÇÜLEMEDİ"):
        print("  %-12s %d" % (k, sayim[k]))
    if sayim["ÖLÇÜLEMEDİ"]:
        print("  ⚠️ ÖLÇÜLEMEDİ'ler KABUL sayılmadı — sessizce atlanmadı, "
              "TEKRAR denenmeli.")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
