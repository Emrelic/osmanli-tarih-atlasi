# -*- coding: utf-8 -*-
"""ARAC-KUNYE-ONCESI-0911 — kunye ONCESI kullanim taramasi.

Sorduğu soru CLAUDE.md §3.5'in HİÇ sormadığı soru: bir kimlik veride,
kendi devletler.js kaydının f: gününden ÖNCE kullanılıyor mu?
(§3.5 hep SONRASI aşımı örnekler — hafsi 1574→1577, artuklu vb.)

Doğuran vaka: `sih-imparatorlugu` f:1801-04-12, ama yerlesimler_asya.js
1764-01-14'ten beri bu id'yi kullanıyor (37 yıl önce, BELGELENMİŞ karar).

Evren: arac/girdi.py GIRDI_DOSYALARI, `s:` + `isg:` alanları (`d:` alanlı
her düz obje — array adına değil FIELD'a bakar, bu yüzden hem s: hem isg:
hem de ileride açılacak benzer bir alan otomatik yakalanır).
`v:` TARANMADI — şemaya göre k: serbest metin taşıyor, d: değil (VERI-
YAPISI.md). `d:` (doğrudan Osmanlı) dizisi TARANMADI — o dizinin
öğelerinde hiç d: alanı yok (isim çakışması: dizi adı "d:", alan adı da
"d:", ama doğrudan dizisinin öğeleri f:/t:/y: taşır, devlet kimliği
taşımaz) ve zaten "osmanli" diye bir devletler.js kaydı da YOK.

Sınıflandırma ÜÇ KOVA (D024: iki ayrı kusur tek satırda raporlanırsa
çareleri ters olsa bile aynı çare uygulanır — o yüzden ayrılıyor):
  🟢 MESRU_ERKEN   yakın bir yorum satırı gerekçe yazmış (heuristik —
                   bkz. AYIRT_ANAHTAR_KELIMELER)
  🔴 YANLIS_ATIF   ayırt edilemedi VE sapma büyük (>= YANLIS_ATIF_ESIK yıl)
                   — bu durumda "büyük ve gerekçesiz" YANLIŞ ATIF şüphesi
                   taşır, ama KESİN DEĞİL (⚠️ altta okunmalı)
  ⚪ AYIRT_EDEMEDIM küçük sapma VE gerekçe bulunamadı — muhtemelen hizalama/
                   yuvarlama, ama aracın kendi sınırı (D015: ölçemediğini
                   eleyen bir süzgeç onu TEMİZ SAYAR — bu yüzden bu kova
                   küçük değil BÜYÜK çıkarsa doğru davranan araçtır)

🔴 BU ARAÇ HÜKÜM VERMEZ, YALNIZ SINIFLAR. Kısaltmak `Değişmez 1`i ihlal
eder (toprak boş değildi), genişletmek kuruluştan önce boyar — hangisi
olduğunu bu araç ÖLÇMÜYOR, yalnız ADAY gösteriyor.
"""
import re, os, sys, json, io, importlib.util
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "arac"))
import girdi  # noqa: E402

YANLIS_ATIF_ESIK_GUN = 5 * 365  # 5 yıldan büyük VE gerekçesiz sapma → YANLIŞ ATİF şüphesi

AYIRT_ANAHTAR_KELIMELER = [
    "erken evre", "ayrı kimlik açılmadı", "aynı siyasi gövde", "aynı siyasî gövde",
    "misl", "konfederasyon", "erken dönem", "erken tarih", "kasıtlı", "bilinçli",
    "aynı gövdenin", "devralınan", "esas alan", "esas alındı",
]


def gun_sayisi(tarih):
    """YYYY-MM-DD -> yaklaşık gün sayısı (365 gün/yıl, karşılaştırma için yeterli)."""
    try:
        y, a, g = tarih.split("-")
        return int(y) * 365 + int(a) * 30 + int(g)
    except Exception:
        return None


def kunye_f_oku():
    """devletler.js'ten {id: f_tarihi} sözlüğü. Yalnız TOP-LEVEL kayıtların
    kendi f:'i alınır (kronoloji dizisinin İÇİNDEKİ t: alanları KARIŞTIRILMAZ —
    id:"..." ile f:"..." arası mesafe 400 karakterle SINIRLANDI, bu mesafe
    her top-level kaydın kendi f:/t: satırını kapsar ama kronoloji dizisine
    girmeden önce kesilir)."""
    content = open(os.path.join(BASE, "data", "devletler.js"), encoding="utf-8").read()
    sozluk = {}
    for m in re.finditer(r'id:"([^"]+)"', content):
        pencere = content[m.end():m.end() + 400]
        fm = re.search(r'\bf:"(\d{4}-\d{2}-\d{2})"', pencere)
        if fm:
            # id ilk kez görülüyorsa kaydet (bazı id'ler kronoloji İÇİNDE
            # yanlışlıkla "id:" içerebilir diye ilk eşleşme tutuluyor DEĞİL —
            # devletler.js'de kronoloji öğeleri id: alanı TAŞIMIYOR, ölçüldü)
            if m.group(1) not in sozluk:
                sozluk[m.group(1)] = fm.group(1)
    return sozluk


def veri_en_erken_kullanim():
    """{id: (en_erken_f_tarihi, dosya, ornek_ad)} — s:/isg: alanlarındaki
    HER düz obje (f: VE d: birlikte taşıyan) taranır."""
    en_erken = {}
    obj_pat = re.compile(r"\{[^{}]*\}")
    f_pat = re.compile(r'f:"(\d{4}-\d{2}-\d{2})"')
    d_pat = re.compile(r'\bd:"([a-z0-9_\-]+)"')
    ad_pat = re.compile(r'ad:"([^"]+)"')

    for dosya in girdi.GIRDI_DOSYALARI:
        yol = os.path.join(BASE, "data", dosya)
        try:
            icerik = open(yol, encoding="utf-8").read()
        except Exception:
            continue
        # satır satır işleyip her satırın "en yakın önceki ad:" bilgisini taşı
        # (basit ve yeterli: bir yerleşim kaydı genelde tek satırda tanımlı)
        for satir in icerik.split("\n"):
            adm = ad_pat.search(satir)
            ad = adm.group(1) if adm else "?"
            for obj in obj_pat.finditer(satir):
                parca = obj.group(0)
                fm = f_pat.search(parca)
                dm = d_pat.search(parca)
                if not (fm and dm):
                    continue
                kid = dm.group(1)
                tarih = fm.group(1)
                mevcut = en_erken.get(kid)
                if mevcut is None or tarih < mevcut[0]:
                    en_erken[kid] = (tarih, dosya, ad)
    return en_erken


def yorum_baglami_ara(dosya, ad, kid):
    """ad'ın geçtiği satırın ÖNCESİNDEKİ (en fazla 25 satır) yorum
    bloğunda gerekçe anahtar kelimesi var mı — heuristik, KESİN DEĞİL."""
    yol = os.path.join(BASE, "data", dosya)
    try:
        satirlar = open(yol, encoding="utf-8").read().split("\n")
    except Exception:
        return False
    for i, s in enumerate(satirlar):
        if ('ad:"%s"' % ad) in s:
            baglam = "\n".join(satirlar[max(0, i - 25):i + 1]).lower()
            if kid.replace("-", " ") in baglam or kid in baglam:
                for kelime in AYIRT_ANAHTAR_KELIMELER:
                    if kelime in baglam:
                        return True
            return False
    return False


def main():
    kunyeler = kunye_f_oku()
    kullanim = veri_en_erken_kullanim()

    print("devletler.js kunye sayisi (f: tasiyan):", len(kunyeler))
    print("veride s:/isg: ile kullanilan BENZERSIZ kimlik sayisi:", len(kullanim))

    sonuclar = []
    for kid, (erken_tarih, dosya, ad) in kullanim.items():
        kunye_f = kunyeler.get(kid)
        if kunye_f is None:
            continue  # bu aracın konusu değil (D064/D054 ailesi, ayrı sorun)
        if erken_tarih < kunye_f:
            sapma_gun = gun_sayisi(kunye_f) - gun_sayisi(erken_tarih)
            sapma_yil = round(sapma_gun / 365, 1)
            gerekce_var = yorum_baglami_ara(dosya, ad, kid)
            if gerekce_var:
                kova = "MESRU_ERKEN"
            elif sapma_yil >= (YANLIS_ATIF_ESIK_GUN / 365):
                kova = "YANLIS_ATIF_SUPHESI"
            else:
                kova = "AYIRT_EDEMEDIM"
            sonuclar.append({
                "id": kid, "kunye_f": kunye_f, "veri_en_erken_f": erken_tarih,
                "sapma_yil": sapma_yil, "ornek_dosya": dosya, "ornek_ad": ad,
                "kova": kova,
            })

    sonuclar.sort(key=lambda r: -r["sapma_yil"])

    print("\nTOPLAM ONCESI-KULLANIM ADAYI:", len(sonuclar))
    kova_sayac = {}
    for r in sonuclar:
        kova_sayac[r["kova"]] = kova_sayac.get(r["kova"], 0) + 1
    print("KOVA DAGILIMI:", kova_sayac)

    print("\n--- İLK 20 (sapma büyükten küçüğe) ---")
    for r in sonuclar[:20]:
        print("  %-28s kunye_f=%-12s veri_f=%-12s sapma=%5.1f yil  [%s]  orn: %s (%s)"
              % (r["id"], r["kunye_f"], r["veri_en_erken_f"], r["sapma_yil"],
                 r["kova"], r["ornek_ad"], r["ornek_dosya"]))

    # D010 iki yönlü sınama — bilinen pozitif
    print("\n--- D010 SINAMASI (bilinen pozitif: sih-imparatorlugu) ---")
    bulundu = [r for r in sonuclar if r["id"] == "sih-imparatorlugu"]
    if bulundu:
        print("  ✓ BULUNDU:", bulundu[0])
    else:
        print("  🔴🔴 BULUNAMADI — ARAÇ ÇALIŞMIYOR OLABİLİR, SONUÇLARA GÜVENME")

    out = {
        "kunye_sayisi": len(kunyeler),
        "veride_kullanilan_benzersiz_kimlik": len(kullanim),
        "oncesi_kullanim_adayi": len(sonuclar),
        "kova_dagilimi": kova_sayac,
        "d010_sinama_sih_imparatorlugu_bulundu": bool(bulundu),
        "sonuclar": sonuclar,
    }
    with open(os.path.join(BASE, "denetim", "OLCUM-KUNYE-ONCESI-0911.json"), "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, indent=2)
    print("\nYazildi: denetim/OLCUM-KUNYE-ONCESI-0911.json")


if __name__ == "__main__":
    main()
