# -*- coding: utf-8 -*-
"""BEKLEYENLER — Emre'yi bekleyen kalemleri ÜRETİR, elle yazılmaz.

🔴 NİÇİN VAR — 23 Ağustos 2026, ölçülmüş bir bayatlama:
    BEKLEYENLER.md son değişiklik  17 Ağustos 00:17
    ölçüm anı                      23 Ağustos 14:30
    ⇒ 158 saat (6,6 gün) dokunulmamış
Bu sürede paket cevaplarında **10 kalem** `senin-kararin` hükmü aldı ve
hiçbiri bu dosyaya girmedi. Emre sordu: *"orada bekleyenler sistemimiz
var ... bu sistem biraz tavsadı galiba."* Ölçüm onu doğruladı.

📌 `CLAUDE.md §1.5`in dersi: *"Bir kez bayatlayan belge tekrar bayatlar
   — çare yeni bir satır değil, satırı ELLE YAZILMAKTAN ÇIKARMAKTIR."*
   Orada `durum_tablosu.py` bunun için yazılmıştı; bu onun BEKLEYENLER
   tarafı.

NE YAPAR: bütün `CEVAP.json` dosyalarını tarar, `senin-kararin` hükmü
alan her kalemi toplar ve `data/bekleyenler_uretilen.md`ye yazar.
BEKLEYENLER.md'nin ELLE yazılan kısmına DOKUNMAZ — orada nüans var
(gerekçe, seçenekler, öneri) ve onu makine üretemez.

    py arac/bekleyen_topla.py           # ekrana bas
    py arac/bekleyen_topla.py --yaz     # dosyaya yaz
"""
import io
import json
import os
import re
import sys
from datetime import datetime

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GIDEN = os.path.join(os.path.dirname(KOK), "ClaudEmre", "kutu", "giden")
CIKTI = os.path.join(KOK, "data", "bekleyenler_uretilen.md")
YAZ = "--yaz" in sys.argv


def topla():
    """Bütün paket cevaplarından `senin-kararin` kalemlerini çıkar."""
    kalemler = []
    if not os.path.isdir(GIDEN):
        return kalemler, "🔴 kutu dizini bulunamadı: %s" % GIDEN
    for p in sorted(os.listdir(GIDEN)):
        cj = os.path.join(GIDEN, p, "CEVAP.json")
        if not os.path.exists(cj):
            continue
        try:
            c = json.load(io.open(cj, encoding="utf-8"))
        except Exception as e:
            kalemler.append({"paket": p, "no": "?", "hata": str(e)[:60]})
            continue
        damga = str(c.get("damga") or "")[:16]
        for no, v in (c.get("maddeler") or {}).items():
            if not isinstance(v, dict) or v.get("hukum") != "senin-kararin":
                continue
            notu = re.sub(r"\s+", " ", str(v.get("not") or "")).strip()
            kalemler.append({"paket": p, "no": no, "damga": damga,
                             "ozet": notu})
    return kalemler, None


def yas_gun(damga):
    try:
        d = datetime.strptime(damga[:10], "%Y-%m-%d")
        return (datetime.now() - d).days
    except Exception:
        return None


kalemler, hata = topla()

satir = []
satir.append("<!-- 🤖 ÜRETİLMİŞ — ELLE DÜZENLEME. Kaynak: arac/bekleyen_topla.py -->")
satir.append("")
satir.append("# BEKLEYENLER — ÜRETİLEN BÖLÜM")
satir.append("")
satir.append("> Üretim anı: **%s**" % datetime.now().strftime("%Y-%m-%d %H:%M"))
satir.append("> Kaynak: bütün `CEVAP.json` dosyalarındaki `senin-kararin` hükümleri.")
satir.append("")
satir.append("⚠️ Bu bölüm **elle yazılmaz.** `BEKLEYENLER.md`nin elle yazılan")
satir.append("kısmına dokunulmuyor — orada nüans var (gerekçe, şıklar, öneri) ve")
satir.append("onu makine üretemez. Burası yalnız **hiçbirinin unutulmadığını**")
satir.append("garanti eder.")
satir.append("")

if hata:
    satir.append(hata)
elif not kalemler:
    satir.append("🟢 **Emre'nin kararını bekleyen kalem YOK.**")
else:
    satir.append("## %d KALEM EMRE'Yİ BEKLİYOR" % len(kalemler))
    satir.append("")
    satir.append("| paket | no | yaş | özet |")
    satir.append("|---|---|---|---|")
    for k in sorted(kalemler, key=lambda x: (x.get("damga") or "", x["no"])):
        y = yas_gun(k.get("damga") or "")
        yas = ("%d gün" % y) if y is not None else "?"
        ozet = (k.get("ozet") or k.get("hata") or "")[:110].replace("|", "·")
        satir.append("| `%s` | **%s** | %s | %s |"
                     % (k["paket"], k["no"], yas, ozet))
    satir.append("")
    en_eski = max((yas_gun(k.get("damga") or "") or 0) for k in kalemler)
    if en_eski > 7:
        satir.append("🔴 **EN ESKİSİ %d GÜNLÜK.** Bir karar beklerken duran iş,"
                     % en_eski)
        satir.append("beklediğini söylemeyen iştir.")

metin = "\n".join(satir) + "\n"

if YAZ:
    io.open(CIKTI, "w", encoding="utf-8").write(metin)
    print("YAZILDI: %s" % CIKTI)
    print("%d kalem" % len(kalemler))
else:
    print(metin)
