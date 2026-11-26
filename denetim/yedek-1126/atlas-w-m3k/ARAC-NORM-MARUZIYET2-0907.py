# -*- coding: utf-8 -*-
"""NORM-MARUZIYET2-0907 — DÜZELTİLMİŞ sınıflandırıcı, 18'lik tarama YENİDEN.

🔴 BİRİNCİ SÜRÜMÜN `DIGER` KOVASI, SINIFLANDIRICININ KENDİ KÖR NOKTASIYDI.
   Beş `DIGER` aleti satır satır okundu ve ÜÇ ayrı sebep çıktı — ikisi
   ARAÇ KUSURU, biri GERÇEK yeni sınıf:
```
   Ⓐ İKİ SATIRA YAYILMIŞ KOVA        ← ARAÇ KUSURU, 2 alet kaçtı
        n = norm(anahtar)
        ix.setdefault(n, d["id"])     ← `norm(` bu satırda YOK
      Eski desen `\\w+\\.setdefault\\(\\s*norm\\(` istiyordu ⇒ göremedi.
   Ⓑ ANAHTAR, norm()İN TÜREVİ        ← ARAÇ KUSURU, aynı 2 alet
        tok = norm(v).split()
        dizin.setdefault(kok(tok[0]), set())
      Anahtar `kok(norm(v).split()[0])` — norm()den DAHA KABA, yani
      çakışmaya DAHA açık, ve desen onu hiç aramıyordu.
   Ⓒ METİN NORMALLEŞTİRME 🆕          ← GERÇEK yeni sınıf, araç kusuru DEĞİL
        nc = [norm(c) for c in cs]    (cs = TDV gövdesinin CÜMLELERİ)
      `norm` burada bir AD indeksi kurmuyor, metni arama için hazırlıyor.
      Ad çakışması bu kullanımı İLGİLENDİRMEZ.
```
📌 Ve dersin kendisi: ***bir sınıflandırıcının ARTIK KOVASI, çoğu zaman
   sınıflandırıcının kendi kör noktasıdır.*** `DIGER` bir sonuç değil bir
   İTİRAFTIR — ve okunmadan bırakılırsa "incelendi" sanılır.

DÜZELTME: artık VERİ AKIŞI izleniyor — `norm(...)`dan türeyen değişkenler
   toplanıyor, sonra o değişkenlerin ANAHTAR olarak kullanıldığı satırlar
   aranıyor. Tek satırlık desenler de korunuyor.
"""
import io
import os
import re
import subprocess
import sys

KOK = os.path.join(os.path.dirname(__file__), "..")

TEK_SATIR_KOVA = [
    re.compile(r"\w+\.setdefault\(\s*norm\("),
    re.compile(r"\w+\[\s*norm\("),
    re.compile(r"\{\s*norm\(.*?\)\s*:"),
    re.compile(r"\.(?:set|get|add)\(\s*norm\("),
]
KIYAS_RX = [
    re.compile(r"norm\(.*?\)\s*===?\s*norm\("),
    re.compile(r"norm\(.*?\)\s*(?:==|!=)"),
    re.compile(r"\bin\s+norm\("),
    re.compile(r"norm\(.*?\)\.includes\("),
    re.compile(r"\bin\s+\w+\s*$"),          # `if any(a in n ...)` kalıbı
]
# Ⓒ metin normallestirme: norm() bir LISTE URETIMINDE, ogeler CUMLE/DESEN
METIN_RX = [
    re.compile(r"\[\s*norm\(\w+\)\s+for\s+"),
    re.compile(r"norm\(d\)\s+for\s+d\s+in\s+desen"),
]


def atama_degiskenleri(satirlar):
    """`X = ...norm(...)...` — X ve ondan TUREYENLER (Ⓑ)."""
    d = set()
    for _, l in satirlar:
        m = re.match(r"\s*(?:const|let|var\s+)?(\w+)\s*=\s*(.*norm\(.*)$", l)
        if m:
            d.add(m.group(1))
    # ikinci tur: X'ten tureyen Y = f(X...)
    for _, l in satirlar:
        m = re.match(r"\s*(?:const|let|var\s+)?(\w+)\s*=\s*(.+)$", l)
        if m and any(re.search(r"\b%s\b" % re.escape(v), m.group(2))
                     for v in list(d)):
            d.add(m.group(1))
    return d


def main():
    r = subprocess.run(["git", "grep", "-l", "norm(", "--", "arac", "denetim",
                        "js"], capture_output=True, text=True,
                       encoding="utf-8", cwd=KOK)
    dosyalar = sorted(x for x in r.stdout.split()
                      if x.endswith((".py", ".js"))
                      and "USKUP-MUKERRER" not in x
                      and "NORM-MARUZIYET" not in x)

    sonuc = []
    for yol in dosyalar:
        s = io.open(os.path.join(KOK, yol), encoding="utf-8").read()
        if not re.search(r"(?:def|function)\s+norm\s*\(", s) \
                and "ARAC-NORMAL" not in s:
            sonuc.append((yol, "ALAKASIZ", "-", "", []))
            continue
        sat = [(i, l.rstrip()) for i, l in enumerate(s.split("\n"), 1)
               if "norm(" in l and not l.strip().startswith(("#", "//"))]
        tum = [(i, l.rstrip()) for i, l in enumerate(s.split("\n"), 1)
               if not l.strip().startswith(("#", "//"))]
        dv = atama_degiskenleri(sat)
        # ── Ⓐ+Ⓑ: turemis degisken ANAHTAR olarak kullaniliyor mu ────
        iki_satir = []
        for i, l in tum:
            for v in dv:
                if re.search(r"\.setdefault\(\s*\w*\(?\s*%s\b" % re.escape(v), l) \
                   or re.search(r"\w+\[\s*%s\s*\]" % re.escape(v), l) \
                   or re.search(r"\.(?:get|set|add)\(\s*\w*\(?\s*%s\b"
                                % re.escape(v), l) \
                   or re.search(r"\bif\s+%s\s+in\s+\w+" % re.escape(v), l):
                    iki_satir.append((i, l))
                    break
        tek = [(i, l) for i, l in sat
               if any(rx.search(l) for rx in TEK_SATIR_KOVA)]
        metin = [(i, l) for i, l in sat
                 if any(rx.search(l) for rx in METIN_RX)]
        kiyas = [(i, l) for i, l in sat
                 if any(rx.search(l) for rx in KIYAS_RX)]

        if tek or iki_satir:
            cins = "KOVA"
            kanit = (tek or iki_satir)[:2]
        elif metin:
            cins = "METIN"
            kanit = metin[:1]
        elif kiyas:
            cins = "KIYAS"
            kanit = kiyas[:1]
        else:
            cins = "DIGER"
            kanit = sat[:1]

        tam = ("girdi.yukle" in s or "yerlesimleri_yukle" in s)
        # ── ANAHTARIN ALANI: yerlesim mi kunye mi ──────────────────────
        y_ip = bool(re.search(r"norm\(\s*(?:y|z)\[[\"']ad[\"']\]", s)) or \
            bool(re.search(r"for\s+(?:y|z)\s+in\s+Y\b", s)) and "KOVA" == cins
        k_ip = bool(re.search(r"norm\(\s*(?:d|k)\.get\(|norm\(\s*(?:d|k)\[",
                              s)) or "KUNYE" in s or "devletler" in s
        alan = "YERLESIM" if y_ip and not (k_ip and not y_ip) else (
            "KUNYE/TABLO" if k_ip else "?")
        if cins == "KOVA" and y_ip:
            alan = "YERLESIM"
        elif cins == "KOVA":
            alan = "KUNYE/TABLO"
        sonuc.append((yol, cins, "EVET" if tam else "hayir", alan, kanit))

    print("%-44s %-9s %-7s %s" % ("DOSYA", "CINS", "KULLIYAT", "ANAHTAR ALANI"))
    print("-" * 92)
    say = {}
    riskli = []
    for yol, cins, tam, alan, kanit in sonuc:
        say[cins] = say.get(cins, 0) + 1
        print("%-44s %-9s %-7s %s" % (os.path.basename(yol), cins, tam, alan))
        for i, l in kanit:
            print("%46s:%d %s" % ("", i, l.strip()[:64]))
        if cins == "KOVA" and tam == "EVET" and alan == "YERLESIM":
            riskli.append(yol)
    print("\nCINS: %s" % say)
    print("\n🔴 UC SART DA TUTAN (KOVA + tam kulliyat + YERLESIM anahtari): %d"
          % len(riskli))
    for y in riskli:
        print("   %s" % y)
    return 0


if __name__ == "__main__":
    sys.exit(main())
