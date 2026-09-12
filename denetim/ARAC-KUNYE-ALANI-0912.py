# -*- coding: utf-8 -*-
"""
ARAC-KUNYE-ALANI-0912.py — KITA 5 — KÜNYE ALANI oturumu, 12 Eylül 2026

NE YAPAR: `denetim/YAMA-KUNYE-ALANI-0912.json`daki 38+12 kararı, ilgili
`data/kronoloji_<dosya>.js` dosyalarındaki GERÇEK kayıtlarla (tarih+başlık
eşleşmesiyle) eşleştirir ve `kunye:` alanının NEREYE, HANGİ DEĞERLE
yazılacağını RAPORLAR.

🔴 §7 — BU BETİK data/'YA TEK SATIR YAZMAZ. `data/olaylar*.js` ve
`data/kronoloji*.js` bu gece KITA 3 ve KITA 4'te; sessiz veri kaybı
riskini önlemek için iniş YAPILMIYOR. Bu betik yalnız DRY-RUN raporu
üretir — KITA 3/4 bitince kim uygularsa bu raporu KILAVUZ olarak kullanır.

D053 — OKUNAN DOSYALAR (açıkça):
    denetim/YAMA-KUNYE-ALANI-0912.json   (karar kaynağı, bu oturumun kendi çıktısı)
    data/kronoloji_misir.js               (30 kayıt eşleşecek)
    data/kronoloji_ozbek.js               (2 kayıt eşleşecek)
    data/kronoloji_sirbistan.js           (7 kayıt eşleşecek)
    data/kronoloji_hindistan.js           (11 kayıt eşleşecek)
"""
import io
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"

DOSYA_ADI = {
    "misir": "kronoloji_misir.js",
    "ozbek": "kronoloji_ozbek.js",
    "sirbistan": "kronoloji_sirbistan.js",
    "hindistan": "kronoloji_hindistan.js",
}


def kayit_bul(dosya_yolu, tarih, baslik_parcasi):
    """Dosyada `t:"<tarih>"` ile başlayan ve `b:` alanında başlık parçasını
    içeren kaydı ARAR — tam metin eşleşmesi ARANMAZ (başlıklar bu betikte
    HAZIRLIK dosyasından kısaltılmış/normalize edilmiş olabilir), yalnız
    TARİH + başlığın İLK birkaç kelimesi.
    """
    try:
        txt = io.open(dosya_yolu, encoding="utf-8").read()
    except FileNotFoundError:
        return None, "DOSYA BULUNAMADI"
    ilk_kelimeler = " ".join(baslik_parcasi.split()[:4])
    for m in re.finditer(r'\{\s*t:"' + re.escape(tarih) + r'"[^}]*?\}', txt, re.DOTALL):
        parca = m.group(0)
        if ilk_kelimeler[:10] in parca or baslik_parcasi[:15] in parca:
            return m.start(), "bulundu"
    # tarih eşleşen ama başlık eşleşmeyen kayıt var mı — teşhis için
    if f't:"{tarih}"' in txt:
        return None, "TARIH VAR AMA BASLIK ESLESMEDI — elle kontrol gerekir"
    return None, "TARIH DE BULUNAMADI"


def main():
    yama = json.load(io.open(KOK + r"\denetim\YAMA-KUNYE-ALANI-0912.json", encoding="utf-8"))
    print("[GİRDİ] YAMA-KUNYE-ALANI-0912.json okundu")

    for kova_adi, kova in (("KOVA 1 — kunye_yok", yama["kova_1_kunye_yok"]),
                           ("KOVA 2 — ucuncu_taraf", yama["kova_2_ucuncu_taraf"])):
        print(f"\n{'=' * 70}\n{kova_adi} ({kova['toplam']} kayıt)\n{'=' * 70}")
        bulunan, bulunamayan = 0, 0
        for k in kova["kayitlar"]:
            dosya = DOSYA_ADI.get(k["dosya"])
            if not dosya:
                print(f"  ⚠️ bilinmeyen dosya kısaltması: {k['dosya']}")
                continue
            yol = os.path.join(KOK, "data", dosya)
            konum, durum = kayit_bul(yol, k["tarih"], k["b"])
            kunye_str = json.dumps(k["kunye"], ensure_ascii=False) if k.get("kunye") is not None else "null"
            if konum is not None:
                bulunan += 1
                print(f"  ✓ {k['tarih']}  {k['b'][:45]:45s}  → kunye:{kunye_str}  ({dosya}, konum ~{konum})")
            else:
                bulunamayan += 1
                print(f"  ✗ {k['tarih']}  {k['b'][:45]:45s}  → {durum} ({dosya})")
        print(f"\n  toplam: {bulunan} eşleşti, {bulunamayan} eşleşmedi (elle kontrol gerekir)")

    print("\n" + "=" * 70)
    print("EKSİK KÜNYE RAPORU")
    print("=" * 70)
    for e in yama["eksik_kunye_raporu"]:
        print(f"  - {e['ad']}: {e['gerekce']} ({e['vaka_sayisi']} vaka)")

    print("\n" + "=" * 70)
    print("KITA 1'E BAĞIMLILIK — bu künyeler bu gece YAZILIYOR, iniş ONLAR")
    print("YAZDIKTAN SONRA yapılmalı:")
    for k in yama["kita1_e_bagimlilik"]:
        print(f"  - {k}")
    print("\n🔒 BU BETİK data/'YA HİÇBİR ŞEY YAZMADI. Yukarıdaki, KITA 3/4")
    print("bitince uygulanacak bir DRY-RUN raporudur.")


if __name__ == "__main__":
    main()
