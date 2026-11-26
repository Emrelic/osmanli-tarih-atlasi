# -*- coding: utf-8 -*-
"""KOK-CAKISMA-0907 — `kok(norm(x).split()[0])` KABA anahtarını ölç.

🔴 KENDİ AÇIK KALEMİM (M-3241): *"`kok()` anahtarının KÜNYE evreninde kaç
   çakışma ürettiğini ÖLÇMEDİM — norm()den daha riskli bir anahtar."*

⚠️ VE SORUYU SORARKEN BİR ÖNCÜLÜ ÖNCE SINAMALIYIM. Sevk şöyle diyor:
   *"yanlış birleşen iki künye SESSİZCE TEK KAYDA İNER."* Aletin kodu
   okundu ve bu **bu alet için doğru değil**:
```
   dizin.setdefault(kok(tok[0]), set()).add("%s (%s)" % (id, ad))
                                    ^^^^^  KÜME — ezmez, BİRİKTİRİR
   docstring: "Bu sürüm HÜKÜM VERMEZ: her etiket için ADAY künyeleri
               listeler, kararı okumaya bırakır. 🔴 VERİ YAZMAZ."
```
   ⇒ Çakışmanın bedeli **sessiz birleşme değil, GÜRÜLTÜLÜ ADAY LİSTESİ.**
   Ve kabalık **kaza değil TASARIM**: a sürümü `Ocaklığı ↔ Ocağı`yı
   bağlayamadığı için çürümüştü; b sürümü bilerek gevşetti.

⇒ O HÂLDE DOĞRU SORU "kaç çakışma var" DEĞİL:
```
   ① kaç anahtar çok üyeli — ve bu TASARIMIN İSTEDİĞİ mi?
   ② ADAY SAYISI okunabilir mi, yoksa gürültüye mi gömülüyor?
      (bir aday listesi ancak İNSAN OKUYABİLDİĞİ kadar değerlidir)
   ③ AYNI KÖKTE BULUŞAN ama ALAKASIZ künye var mı — yani kabalık
      tasarımın hedefini AŞIYOR mu?
```
`§11`: *bir ölçütün kusur mu tasarım mı ölçtüğü, denetime dönüştürülmeden
ÖNCE sorulur.*
"""
import json
import os
import re
import subprocess
import sys
import unicodedata

KOK = os.path.join(os.path.dirname(__file__), "..")


def norm(s):
    s = (s or "").replace("İ", "i").replace("I", "i").replace("ı", "i")
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    return re.sub(r"[^a-z0-9]+", " ", s.lower()).strip()


def kok(t):
    t = re.sub(r"(ligi|liği|lik|lığı|lugu|luk)$", "", t)
    t = re.sub(r"(gi|ği|si|si|i|u|a|e)$", "", t)
    return t[:5]


def main():
    js = ("const fs=require('fs'),vm=require('vm');const c={window:{}};"
          "vm.createContext(c);vm.runInContext("
          "fs.readFileSync('data/devletler.js','utf8'),c);"
          "const k=Object.keys(c.window).find(x=>Array.isArray(c.window[x]));"
          "process.stdout.write(JSON.stringify(c.window[k]));")
    r = subprocess.run(["node", "-e", js], capture_output=True, cwd=KOK)
    K = json.loads(r.stdout.decode("utf-8"))
    print("künye: %d" % len(K))

    dizin = {}
    for k in K:
        for alan in ("id", "ad", "harita"):
            v = k.get(alan)
            if isinstance(v, str) and v:
                tok = norm(v).split()
                if tok:
                    dizin.setdefault(kok(tok[0]), set()).add(k["id"])

    tek = {a: v for a, v in dizin.items() if len(v) == 1}
    cok = {a: v for a, v in dizin.items() if len(v) > 1}
    print("anahtar: %d · TEK üyeli %d · ÇOK üyeli %d (%.1f%%)"
          % (len(dizin), len(tek), len(cok), 100.0 * len(cok) / len(dizin)))

    boy = sorted(cok.items(), key=lambda kv: -len(kv[1]))
    print("\n② ADAY SAYISI OKUNABİLİR Mİ — en kalabalık 12 anahtar:")
    for a, v in boy[:12]:
        print("   %-8s %3d aday   %s%s"
              % (a, len(v), ", ".join(sorted(v)[:5]),
                 " …" if len(v) > 5 else ""))
    med = sorted(len(v) for v in cok.values())
    print("\n   çok üyeli kovada aday: ortanca %d · en büyük %d"
          % (med[len(med) // 2], med[-1]))

    # ── ③ KABALIK TASARIMIN HEDEFİNİ AŞIYOR MU ─────────────────────────
    # Tasarımın hedefi: AYNI KÖKÜN türevleri (`Ocaklığı` ↔ `Ocağı`).
    # Aşma sınavı: aynı kovadaki iki künyenin İLK TOKEN'ı normalde
    # BİRBİRİNİ İÇERMİYORSA, o buluşma tasarımın istediği türev değil —
    # yalnızca ilk 5 harfin çakışmasıdır.
    ilk = {}
    for k in K:
        t = norm(k.get("ad") or k["id"]).split()
        ilk[k["id"]] = t[0] if t else ""
    asan = []
    for a, v in cok.items():
        ids = sorted(v)
        for i in range(len(ids)):
            for j in range(i + 1, len(ids)):
                x, y = ilk[ids[i]], ilk[ids[j]]
                if not x or not y:
                    continue
                if x not in y and y not in x:
                    asan.append((a, ids[i], x, ids[j], y))
    print("\n③ TASARIMIN HEDEFİNİ AŞAN ÇİFT (ilk token biri ötekini "
          "İÇERMİYOR): %d" % len(asan))
    for a, i1, x, i2, y in sorted(asan)[:14]:
        print("   %-8s %-26s (%s)  ↔  %-26s (%s)" % (a, i1, x, i2, y))

    print("\n🔴 SEVKİN ÖNCÜLÜ SINANDI: 'sessizce tek kayda iner'")
    print("   dizin değeri bir KÜME (`set()`) — EZMEZ, BİRİKTİRİR.")
    print("   Alet docstring'i: 'HÜKÜM VERMEZ · ADAY listeler · VERİ YAZMAZ'")
    print("   ⇒ bedel SESSİZ BİRLEŞME değil, GÜRÜLTÜLÜ ADAY LİSTESİ.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
