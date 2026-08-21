# -*- coding: utf-8 -*-
"""KRONOLOJİ ŞEMA DENETİMİ — `data/kronoloji_*.js` dosyalarının tamamı.

🔴 NİÇİN DOĞDU — 21 Ağustos 2026.
MEMLÜK KRONOLOJİ oturumu kendi çıktısında bir şema hatası yakaladı:
bir kolun yazdığı **8 maddenin 8'inde de `dunya:0`** vardı; şema 1-5
istiyor. Kendisi düzeltti ve bildirdi.

⚠️ VE ASIL SORU O DEĞİLDİ: *"bir kolda çıktıysa ÖTEKİ DOSYALARDA DA
olabilir mi?"* — `CLAUDE.md §11`in "ölçüm doğru, EVREN dar" refleksi.
Dokuz kronoloji dosyası var, hiçbirini denetleyen bir şey YOKTU.
Yayın kapısı `data/*.js`in YÜKLENİP yüklenmediğine bakıyor, İÇİNE değil.

📌 Ve bu, projenin ölçülmüş bir dersinin tekrarı: *"denetim var ≠ o soruyu
soruyor."* Altı değişmez yerleşim verisini denetler; kronoloji maddelerinin
şemasını **hiçbiri** sormuyordu.

## NE DENETLER

    ① zorunlu alanlar        t · b · onem · dunya · kapsam · kaynak
    ② tarih biçimi           YYYY-AA-GG (uydurma gün YOK, YYYY-01-01 meşru)
    ③ onem ve dunya          1-5 tamsayı  (0 ve 6+ İHLAL)
    ④ kapsam                 "ic" | "dis"
    ⑤ yer_id                 doluysa GERÇEK bir yerleşim adına eşleşmeli
    ⑥ mükerrer               aynı dosyada tarih+başlık çifti
    ⑦ dunya TUTARLILIĞI      aynı olay (tarih+eşleşen başlık) FARKLI
                             dosyalarda AYNI `dunya` taşımalı — bu, şemanın
                             kendi değişmezi ve ayrışması KUSURDUR

Çıkış kodu: ihlal varsa 1, temizse 0.

    py arac/denetle_kronoloji.py
    py arac/denetle_kronoloji.py --ayrinti
"""
import io
import json
import os
import re
import subprocess
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

AYRINTI = "--ayrinti" in sys.argv
ZORUNLU = ("t", "b", "onem", "dunya", "kapsam", "kaynak")
GUN = re.compile(r"^\d{4}-\d{2}-\d{2}$")


def _oku(yol):
    """Dosyayı node ile ayrıştırıp JSON olarak alır — kendi ayrıştırıcımı
    yazmıyorum. `CLAUDE.md §11`: veri zaten bir dilde yazılıysa, o dilin
    yorumlayıcısını çağır (bu proje aynı dersi ÜÇ KEZ öğrendi)."""
    betik = (
        "global.window={};"
        "eval(require('fs').readFileSync(process.argv[1],'utf8'));"
        "const k=Object.keys(global.window)[0];"
        "process.stdout.write(JSON.stringify({ad:k,kayit:global.window[k]||[]}));"
    )
    r = subprocess.run(["node", "-e", betik, yol],
                       capture_output=True, text=True, encoding="utf-8")
    if r.returncode != 0:
        return None, r.stderr.strip()[:200]
    return json.loads(r.stdout), None


def main():
    dizin = os.path.join(KOK, "data")
    dosyalar = sorted(f for f in os.listdir(dizin)
                      if f.startswith("kronoloji_") and f.endswith(".js"))
    if not dosyalar:
        print("kronoloji dosyası yok")
        return 0

    # yerleşim adları — yer_id doğrulaması için
    try:
        import girdi
        YER = {y["ad"] for y in girdi.yukle(sessiz=True)}
    except Exception as e:                                  # noqa: BLE001
        print("⚠️ yerleşim havuzu okunamadı, yer_id denetimi ATLANIYOR:", e)
        YER = None

    ihlal = 0
    toplam = 0
    dunya_havuz = {}          # (tarih, başlık normalize) -> {dunya: [dosya]}

    print("=" * 72)
    for f in dosyalar:
        d, hata = _oku(os.path.join(dizin, f))
        if hata:
            print("🔴 %-30s AYRIŞTIRILAMADI: %s" % (f, hata))
            ihlal += 1
            continue
        kayit = d["kayit"]
        toplam += len(kayit)
        beklenen = "KRONOLOJI_" + f[10:-3].upper()
        sorun = []

        if d["ad"] != beklenen:
            sorun.append("ad alanı %s, beklenen %s" % (d["ad"], beklenen))

        eksik = bicim = aralik = kaps = yerid = 0
        for m in kayit:
            for a in ZORUNLU:
                if m.get(a) in (None, ""):
                    eksik += 1
                    break
            if not GUN.match(str(m.get("t") or "")):
                bicim += 1
            for a in ("onem", "dunya"):
                v = m.get(a)
                if not isinstance(v, int) or not (1 <= v <= 5):
                    aralik += 1
                    if AYRINTI:
                        print("     %s=%r  %s  %s" % (a, v, m.get("t"),
                                                      str(m.get("b"))[:40]))
            if m.get("kapsam") not in ("ic", "dis"):
                kaps += 1
            yi = m.get("yer_id")
            if yi and YER is not None and yi not in YER:
                yerid += 1
                if AYRINTI:
                    print("     yer_id EŞLEŞMİYOR: %r  (%s)" % (yi, m.get("t")))
            # dunya tutarlılığı havuzu
            anahtar = (m.get("t"), re.sub(r"\W+", "", str(m.get("b") or ""))[:26])
            dunya_havuz.setdefault(anahtar, {}).setdefault(m.get("dunya"),
                                                           []).append(f)

        g = {}
        for m in kayit:
            k = (m.get("t"), str(m.get("b") or "")[:30])
            g[k] = g.get(k, 0) + 1
        muk = sum(1 for v in g.values() if v > 1)

        for ad, n in (("zorunlu alan eksik", eksik), ("tarih biçimi", bicim),
                      ("onem/dunya 1-5 dışı", aralik), ("kapsam geçersiz", kaps),
                      ("yer_id eşleşmiyor", yerid), ("mükerrer", muk)):
            if n:
                sorun.append("%s: %d" % (ad, n))

        ihlal += len(sorun)
        print("%-30s %4d madde   %s"
              % (f, len(kayit), "✓ temiz" if not sorun else "🔴 " + " · ".join(sorun)))

    # ⑦ dunya tutarlılığı — aynı olay, farklı dosya, farklı puan
    ayrisan = {k: v for k, v in dunya_havuz.items()
               if len(v) > 1 and sum(len(x) for x in v.values()) > 1}
    print("=" * 72)
    if ayrisan:
        print("🔴 `dunya` AYRIŞMASI: %d olay farklı dosyalarda farklı puan taşıyor"
              % len(ayrisan))
        for (t, b), v in list(ayrisan.items())[:12]:
            print("   %s  %-28s  %s" % (t, b[:28],
                                        " · ".join("%s→%s" % (d, ",".join(set(fs)))
                                                   for d, fs in v.items())))
        ihlal += len(ayrisan)
    else:
        print("✓ `dunya` tutarlı — aynı olay her dosyada aynı puan")

    print("=" * 72)
    print("%d dosya · %d madde · %s"
          % (len(dosyalar), toplam,
             "SONUÇ: temiz" if not ihlal else "SONUÇ: %d İHLAL" % ihlal))
    return 1 if ihlal else 0


if __name__ == "__main__":
    sys.exit(main())
