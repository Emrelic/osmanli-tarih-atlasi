# -*- coding: utf-8 -*-
"""viabundus_indir.py — Viabundus 1.3 · premodern Avrupa yol ağı.

🔴 NİÇİN — `ALTYAPI ⑤`: koridor ağı bugün **Anadolu-Rumeli** ile sınırlı
(65 düğüm · 64 kenar · tek kaynak: Sak-Çetin menzilleri). Emre'nin
istediği kapsam *"tüm dünya nezdinde"* ve kararı **halka halka
genişlesin.** Viabundus, HALKA 2'nin batı kanadını kaynaklı olarak
kapatan tek açık veri kümesi.

    py arac/viabundus_indir.py            indir (varsa DOKUNMAZ)
    py arac/viabundus_indir.py --zorla    yeniden indir

────────────────────────────────────────────────────────────────────────
KÜNYE — `§4` kırmızı çizgisi: kaynağı yazılmayan bilgi, kaynağı olmayan
bilgiden ayırt edilemez.

    veri seti : Viabundus 1.3 (17 Mart 2024)
    kapsam    : kuzey ve orta Avrupa · **1350-1650**
    içerik    : uzun mesafe kara yolları · iç su yolları · şehirler ·
                GÜMRÜK İSTASYONLARI · istapel pazarları · panayırlar ·
                köprüler · feribotlar · limanlar · gemi kilitleri
    kurum     : Radboud Universiteit + ortaklar (hakemli — Brill,
                Research Data Journal for the Humanities and Social
                Sciences 7/1, 2022)
    lisans    : CC-BY 4.0
    DOI       : 10.5281/zenodo.10828107

🟢 `§4`in kabul kümesine tam oturuyor: **hakemli dergide yayımlanmış,
üniversite yürütücülü, açık lisanslı** bir veri kümesi. Forum değil,
blog değil, içerik çiftliği değil.

────────────────────────────────────────────────────────────────────────
⚠️ NE İNDİRİLİYOR, NE İNDİRİLMİYOR — ve niçin

  🟢 Edges.geojson        48,1 MB  YOL AĞI — asıl işimiz
  🟢 Town_Outlines.geojson 2,4 MB  şehir sınırları (düğüm eşleştirme)
  🟢 CSV.zip              25,8 MB  öznitelikler: gümrük · panayır · köprü
  🟢 Documentation_v1.3   1,3 MB   şema — okunmadan veri kullanılmaz
  🔴 GML kopyaları        77,4 MB  GeoJSON'ın AYNISI, başka biçimde
  🔴 Water-1500           26,7 MB  su yolları — bugünkü motorda deniz
                                   ZATEN sonsuz sürtünme; almadan önce
                                   kullanılacağı yer belli olmalı
  🔴 DK / SA-Thü ekleri    1,0 MB  bölgesel belgeler, şimdilik gereksiz

⇒ 183,1 MB'ın **77,6 MB**'ı alınıyor. Alınmayanlar SİLİNMİŞ değil,
**seçilmemiş**: gerekirse tek satır değişikliğiyle gelir.
📌 Ve gerekçe her satırda yazılı — *"niçin almadım"* sorusu bir sonraki
oturumda yeniden sorulmasın diye.

────────────────────────────────────────────────────────────────────────
🔴 VE İNDİRMEK KULLANMAK DEĞİLDİR — kapsam çakışması ÖLÇÜLMEDİ

Viabundus **1350-1650 kuzey/orta Avrupa**. Atlasın çekirdeği Osmanlı
küresi. İkisinin kesişimi (Macaristan · Lehistan · Balkan kuzeyi) bu
betikle ÖLÇÜLMÜYOR — bu bir sonraki işin konusu.
⚠️ *"İndirildi"* demek *"bağlandı"* demek DEĞİLDİR. Bu projede
bağlanmamış veri dosyası **üç kez** yaşandı: dosya diskte durdu, motor
okumadı, denetim temiz raporladı.
"""
import io
import os
import sys
import time
import urllib.parse
import urllib.request

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZIN = os.path.join(KOK, "veri-kaynak", "viabundus")
KAYIT = "https://zenodo.org/records/10828107/files/"

DOSYALAR = [
    ("Viabundus-1.3-Edges.geojson", 48.1, "yol ağı — ASIL VERİ"),
    ("Viabundus-1.3-Town_Outlines.geojson", 2.4, "şehir sınırları"),
    ("Viabundus-1.3-CSV.zip", 25.8, "öznitelikler (gümrük · panayır · köprü)"),
    ("Viabundus_Documentation_v1.3.pdf", 1.3, "şema belgesi"),
]


def _cek(ad, mb, not_):
    hedef = os.path.join(DIZIN, ad)
    if os.path.exists(hedef):
        v = os.path.getsize(hedef) / 1048576.0
        # 🔴 VARLIK BÜTÜNLÜK DEĞİLDİR (bugün yükseklik verisinde ölçüldü:
        # yarım kalan dosya "zaten var" diye geçiliyordu). Beklenen boyutun
        # %90'ının altındaysa YARIM sayılır ve yeniden çekilir.
        if v >= mb * 0.90:
            print("   🟢 %-42s %6.1f MB  zaten TAM" % (ad[:42], v))
            return True
        print("   🔴 %-42s %6.1f MB  YARIM (beklenen ~%.1f) — yeniden"
              % (ad[:42], v, mb))
    t0 = time.time()
    try:
        req = urllib.request.Request(
            KAYIT + urllib.parse.quote(ad),
            headers={"User-Agent": "tarih-atlasi/1.0 (akademik kullanim)"})
        with urllib.request.urlopen(req, timeout=300) as r, \
                open(hedef, "wb") as f:
            while True:
                p = r.read(1 << 20)
                if not p:
                    break
                f.write(p)
    except Exception as e:
        print("   🔴 %-42s İNDİRİLEMEDİ: %s" % (ad[:42], str(e)[:60]))
        return False
    v = os.path.getsize(hedef) / 1048576.0
    print("   🟢 %-42s %6.1f MB  %4.1f dk  · %s"
          % (ad[:42], v, (time.time() - t0) / 60, not_))
    return True


def indir(zorla=False):
    os.makedirs(DIZIN, exist_ok=True)
    if zorla:
        for a, _, _n in DOSYALAR:
            y = os.path.join(DIZIN, a)
            if os.path.exists(y):
                os.remove(y)
    print("VIABUNDUS 1.3 — Zenodo · CC-BY 4.0 · DOI 10.5281/zenodo.10828107")
    print("indirilecek: %d dosya · ~%.1f MB (kayıttaki 183,1 MB'ın bir kısmı)"
          % (len(DOSYALAR), sum(m for _, m, _n in DOSYALAR)))
    ok = sum(1 for a, m, n in DOSYALAR if _cek(a, m, n))
    print("\n%d/%d dosya hazır" % (ok, len(DOSYALAR)))
    if ok == len(DOSYALAR):
        _kaynak_yaz()
    return 0 if ok == len(DOSYALAR) else 1


def _kaynak_yaz():
    io.open(os.path.join(DIZIN, "KAYNAK.md"), "w", encoding="utf-8",
            newline="\n").write("""# VIABUNDUS — kaynak künyesi

| alan | değer |
|---|---|
| veri seti | **Viabundus 1.3** (17 Mart 2024) |
| kapsam | kuzey ve orta Avrupa · **1350-1650** |
| içerik | kara yolları · iç su yolları · şehirler · gümrük istasyonları · istapel pazarları · panayırlar · köprüler · feribotlar · limanlar · gemi kilitleri |
| kurum | Radboud Universiteit ve ortakları |
| hakemli yayın | *Research Data Journal for the Humanities and Social Sciences* 7/1 (2022), Brill |
| lisans | **CC-BY 4.0** — atıf zorunlu |
| DOI | 10.5281/zenodo.10828107 |
| indirilme | %s |

## Niçin bu veri

`ALTYAPI ⑤` koridor ağı bugün Anadolu-Rumeli ile sınırlı (65 düğüm ·
64 kenar · tek kaynak). Emre'nin kararı: **halka halka, tüm dünyaya
doğru.** Viabundus, HALKA 2'nin batı kanadını *kaynaklı* olarak kapatan
tek açık veri kümesi ve `§4`ün kabul kümesine tam oturuyor: hakemli
dergide yayımlanmış, üniversite yürütücülü, açık lisanslı.

## ⚠️ İNDİRİLDİ ≠ BAĞLANDI

Bu veri motora **bağlanmadı** ve kapsam çakışması **ölçülmedi**.
Viabundus 1350-1650 kuzey/orta Avrupa; atlasın çekirdeği Osmanlı küresi.
Kesişim (Macaristan · Lehistan · Balkan kuzeyi) ayrı bir işin konusu.
📌 Bu projede bağlanmamış veri dosyası **üç kez** yaşandı: dosya diskte
durdu, motor okumadı, denetim temiz raporladı.

## Alınmayanlar — silinmedi, SEÇİLMEDİ

`GML` kopyaları (77,4 MB, GeoJSON'ın aynısı) · `Water-1500` (26,7 MB —
motorda deniz zaten sonsuz sürtünme, kullanılacağı yer belli olmadan
alınmadı) · bölgesel belgeler (DK, SA-Thü). Gerekirse tek satırla gelir.

## ATIF ZORUNLU (CC-BY)

Bu veriden türetilen her çıktıda Viabundus atfı bulunmalıdır.
""" % time.strftime("%Y-%m-%d %H:%M"))
    print("🟢 KAYNAK.md yazıldı.")


if __name__ == "__main__":
    sys.exit(indir("--zorla" in sys.argv[1:]))
