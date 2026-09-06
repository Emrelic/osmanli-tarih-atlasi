# -*- coding: utf-8 -*-
"""AFRİKA aday kimlikleri — künye VE RENK durumu.

🔴 NİÇİN AYRI BİR BETİK: `ARAC-AFRIKA-SUDAN-0906.js` renkleri
`py -c` ile çekmeye çalıştı, çıktı JSON değildi (renkler.py import
edilirken kendi tanı satırlarını basıyor), BOYALAR boş kaldı ve alet
sekiz kimliğin sekizine de "renk 🔴 YOK" bastı.
⇒ O bir ÖLÇÜM DEĞİL, bir ÖLÇÜM BAŞARISIZLIĞIYDI — ve `YOK` diye
raporlanınca `ölçülemedi`ye `bulunamadı` damgası vurulmuş oldu.
`YONTEM-1923-SINIR.md §④`: yanlış damga hatayı KALICILAŞTIRIR.

🔴 VE RENK `harita:` ANAHTARINA BAKAR, `id`ye DEĞİL.
🔴 VE BİR KİMLİĞİ "KÜNYESİ YOK" İLAN ETMEDEN ÖNCE `devletler.js`
   TARANIR — `ingiliz-hindistani` (sondaki bir `i`) ve `urdun-emirligi`
   vakaları. Bu betik id'yi TAHMİN ETMEZ: alt-dizgi ve normalleştirilmiş
   ad üzerinden arar.
"""
import io
import json
import os
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
os.chdir(r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ")
sys.path.insert(0, "arac")
G = "1923-10-28"

# renkler.py'yi IMPORT et — ayrıştırma yok (§11: veri kendi dilinde
# yazılıysa o dilin yorumlayıcısını çağır)
import renkler  # noqa: E402
BOYALAR = renkler.BOYALAR
print("BOYALAR anahtarı: %d" % len(BOYALAR))

D = json.loads(subprocess.run(
    ["node", "-e", "const fs=require('fs'),vm=require('vm');"
     "const d={window:{}};vm.createContext(d);"
     "vm.runInContext(fs.readFileSync('data/devletler.js','utf8'),d);"
     "console.log(JSON.stringify(d.window.DEVLETLER||[]));"],
    capture_output=True, text=True, encoding="utf-8").stdout)
print("künye: %d" % len(D))
ix = {k["id"]: k for k in D}

# 1923'te AFRİKA kutumda kullanılan kimlikler + aday sömürge kimlikleri
KIMLIK = ["ingiltere", "fransa-cumhuriyet", "belcika", "portekiz", "italya",
          "habesistan", "somali", "umman-zengibar", "liberya", "cimma",
          "adal", "buganda", "ingiliz-sudani"]

print("\n=== KÜNYE + RENK — `harita:` ÇÖZÜLEREK ===")
for kid in KIMLIK:
    k = ix.get(kid)
    if not k:
        # id TAHMİN EDİLMEZ — TARANIR
        aday = [x for x in D
                if kid in str(x.get("id", "")).lower()
                or kid in str(x.get("ad", "")).lower()
                or kid in str(x.get("harita", "")).lower()]
        if aday:
            print("  🟡 %-20s id YOK — ama TARAMA buldu: %s"
                  % (kid, " · ".join("%s (%s→%s)"
                                     % (a["id"], a.get("f"), a.get("t"))
                                     for a in aday[:3])))
        else:
            print("  🔴 %-20s KÜNYE YOK (id ve ad tarandı)" % kid)
        continue
    anahtar = k.get("harita") or k["id"]
    renk = BOYALAR.get(anahtar)
    tutar = str(k.get("f", "")) <= G < str(k.get("t", ""))
    print("  %s %-20s %s→%s  harita:%-14s renk:%s"
          % ("🟢" if tutar else "⚪", kid, k.get("f"), k.get("t"),
             k.get("harita") or "(yok)",
             renk if renk else "🔴 YOK"))

print("\n=== `cimma` — veri onu kullanıyor, künyesi hangi id'de? ===")
for x in D:
    hepsi = " ".join(str(x.get(a, "")) for a in ("id", "ad", "harita", "ozet"))
    if "cimma" in hepsi.lower() or "jimma" in hepsi.lower():
        print("  id=%-22s ad=%-34s f=%s t=%s harita=%s"
              % (x["id"], str(x.get("ad"))[:34], x.get("f"), x.get("t"),
                 x.get("harita")))

print("\n=== RENKSİZ ama VERİDE KULLANILAN — harita DELİĞİ mi ===")
for kid in KIMLIK:
    k = ix.get(kid)
    if not k:
        continue
    anahtar = k.get("harita") or k["id"]
    if anahtar not in BOYALAR:
        print("  🔴 %-20s (harita anahtarı %r) BOYALAR'da YOK" % (kid, anahtar))
