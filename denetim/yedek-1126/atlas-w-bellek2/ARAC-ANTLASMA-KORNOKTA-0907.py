# -*- coding: utf-8 -*-
"""ANTLASMA-KORNOKTA-0907 — `oku_pencere` niçin 41 yerine 31 okuyor.

🔴 TEŞHİS: AYRAÇ DÖNGÜSÜNDE BİR KUSUR YOK. Sevkin öncülü *"ayraç
   derinliği döngüsünde bir şey"* idi ve ÇÜRÜDÜ — döngü doğru çalışıyor
   ve dizinin GERÇEK kapanışını buluyor.

   `data/savaslar.js`:
```
     397-471   window.ANTLASMALAR = [ … 31 kayıt … ]
     474       ];                      ← dizi BURADA KAPANIYOR
     476-478   // "…tarihi sıraya göre eklenmedi, ayrı ekleniyor…"
     479       window.ANTLASMALAR.push(  …  2 kayıt … )
     489       window.ANTLASMALAR.push(  …  8 kayıt … )
```
   ⇒ 31 (literal) + 10 (push) = 41. `oku_pencere` bir **BİLDİRİMİ**
   okuyor; veri **bildirim + MUTASYON** ile kuruluyor. Metin ayrıştırıcı
   çalışma zamanı mutasyonunu **yapısal olarak göremez** — node görür
   çünkü dosyayı ÇALIŞTIRIR.
   📌 `§11`in *"veri zaten bir dilde yazılıysa, o dilin yorumlayıcısını
   çağır"* dersinin en saf hâli: burada ayrıştırıcı KUSURSUZ ve yine de
   eksik, çünkü okuduğu şey verinin TAMAMI DEĞİL.

🔴 VE İLK HİPOTEZİM (GİRİNTİ) BİR KORELASYONDU, SEBEP DEĞİL.
   Düşen 10 kaydın 10'u girintili, kalan 31'in 31'i sütun 0'da — kusursuz
   ayrışma. Ama girinti SEBEP değil: düşenler dosyada 480-504 satırları,
   kalanlar 241-471. İç içe geçmiyorlar ⇒ ayrım KONUM, ve girinti yalnız
   `push(` bloklarının yazım biçimi. `§11`: *ölçüm doğru, çıkarım yanlış.*
"""
import io
import json
import os
import re
import subprocess
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "arac"))
sys.argv = [sys.argv[0]]
import girdi  # noqa: E402
import denetle as d  # noqa: E402

KOK = os.path.join(os.path.dirname(__file__), "..")


def pad(s):
    """Üç haneli yıl tuzağı (`§3.5.0`) — `330-01-01` `gun_no`u çökertir."""
    s = (s or "")
    m = re.match(r"^(\d{1,4})-(\d{2})-(\d{2})", s)
    return "%04d-%s-%s" % (int(m.group(1)), m.group(2), m.group(3)) if m \
        else s


def node_dizi(dosya, dizi):
    js = ("const fs=require('fs'),vm=require('vm');const c={window:{}};"
          "vm.createContext(c);vm.runInContext("
          "fs.readFileSync(%s,'utf8'),c);"
          "process.stdout.write(JSON.stringify(c.window.%s));"
          % (json.dumps("data/" + dosya), dizi))
    r = subprocess.run(["node", "-e", js], capture_output=True, cwd=KOK)
    return json.loads(r.stdout.decode("utf-8"))


def main():
    yol = os.path.join(girdi.DATA, "savaslar.js")
    p = d.oku_pencere(yol, "ANTLASMALAR")
    n = node_dizi("savaslar.js", "ANTLASMALAR")
    kp = {(x.get("t"), x.get("ad")) for x in p}
    eksik = [x for x in n if (x.get("t"), x.get("ad")) not in kp]
    print("oku_pencere %d · node %d · FARK %d" % (len(p), len(n), len(eksik)))

    s = io.open(yol, encoding="utf-8").read()
    lit = s[s.index("window.ANTLASMALAR = ["):]
    lit = lit[:lit.index("];")]
    bloklar = re.findall(r"window\.ANTLASMALAR\.push\((.*?)\n\);", s, re.S)
    pn = [len(re.findall(r'\{\s*t:"', b)) for b in bloklar]
    print("literal %d + push %s = %d  %s"
          % (len(re.findall(r'\{\s*t:"', lit)), pn,
             len(re.findall(r'\{\s*t:"', lit)) + sum(pn),
             "🟢 node ile AYNI" if len(re.findall(r'\{\s*t:"', lit))
             + sum(pn) == len(n) else "🔴"))

    print("\nKÖR NOKTADAKİ 10 KAYIT:")
    for x in eksik:
        print("   %-12s %s" % (x.get("t"), x.get("ad")))

    # ── ASIL SORU: kör noktanın ARKASINDA gerçek bir kusur var mı? ─────
    D = girdi.oku_devletler()
    omur = {x["id"]: (d.gun_no(pad(x["f"])), d.gun_no(pad(x["t"])))
            for x in D if x.get("f") and x.get("t")}
    kunye = {x["id"]: x for x in D}
    tarafli = [x for x in eksik if isinstance(x.get("taraf"), list)]
    print("\nBu 10 kaydın `taraf:` listesi olan: %d  ⇒ anakronizm denetimi "
          "bunları ÖLÇEBİLİRDİ ama HİÇ GÖRMEDİ" % len(tarafli))
    print("\nANAKRONİZM SINAVI — kör noktada SAKLANAN kusur var mı?")
    ayk, kunyesiz = 0, 0
    for x in tarafli:
        g = d.gun_no(pad(x["t"]))
        for kid in x["taraf"]:
            if kid not in omur:
                kunyesiz += 1
                print("   ⚪ %-12s %-30s künyesiz kimlik: %s"
                      % (x["t"], x["ad"][:30], kid))
                continue
            f, t = omur[kid]
            if not (f <= g <= t):
                ayk += 1
                k = kunye[kid]
                print("   🔴 %-12s %-26s %-20s künye [%s .. %s] AYKIRI"
                      % (x["t"], x["ad"][:26], kid, k["f"], k["t"]))
    print("\n   AYKIRI %d · künyesiz %d" % (ayk, kunyesiz))
    print("   %s" % ("🟢 kör nokta BOŞ — kusur saklamıyor"
                     if not ayk and not kunyesiz else
                     "🔴 kör nokta KUSUR SAKLIYOR"))

    print("\n📌 KAPSAM: `.push(` ile mutasyon TÜM `data/` içinde")
    r = subprocess.run(["git", "grep", "-c", r"^window\.\w*\.push(", "--",
                        "data"], capture_output=True, text=True,
                       encoding="utf-8", cwd=KOK)
    print("   %s" % (r.stdout.strip() or "yok"))
    print("   ⇒ bu kusur sınıfı TEK BİR değişkende var; genel değil.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
