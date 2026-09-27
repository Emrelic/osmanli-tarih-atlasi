# -*- coding: utf-8 -*-
"""ODAK-KAPI-SINAV — odak nöbetçisi GERÇEKTEN ötüyor mu? İKİ YÖNDE sınar.

🔴 NİÇİN VAR — `CLAUDE.md §11`: *"yeni denetim iki yönde sınanmadan çalışıyor
sayılmaz"* ve *"`0 bulundu` aletin ateşlendiğinin kanıtı değildir"* (`B9`).
Temiz veride `✓` basan bir kapı, hiçbir şeyi ÖLÇMÜYOR da olabilir.

## ÖNGÖRÜ — ölçümden ÖNCE yazıldı (27 Eylül 2026, koordinatör)

    ① tavan indirilirse            → İHLAL ("ODAKSIZ GERİLEDİ")
    ② bilinen borç beyandan silinirse → İHLAL ("YENİ çözülmeyen odak atfı: 1")
    ③ veriye olmayan bir `odak_yer` adı sokulursa → İHLAL (yeni kırık atıf)
    ④ hepsi geri alınınca          → TEMİZ

## NE YAPMAZ

Veriyi KALICI değiştirmez: ③'te `data/` dosyasına yazar ve `git checkout --`
ile GERİ ALIR. Sınav çökse bile `sonunda` bloğu geri almayı dener; yine de
koşmadan önce `git status --short data/` TEMİZ olmalı — betik bunu kendisi
sınar ve kirli ağaçta ÇALIŞMAYI REDDEDER (başkasının yarım işini geri almak
bu betiğin hakkı değil).

    py denetim/ODAK-KAPI-SINAV.py
"""
import io
import json
import os
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
TAVAN = os.path.join(KOK, "denetim", "ODAK-TAVAN.json")
KURBAN = "kronoloji_misir.js"          # ③ için; en küçük yüklü dosyalardan
SAHTE = "Zzz Olmayan Yer 0080"

import odak_olc as OO                                        # noqa: E402

gecti = 0
kaldi = 0


def sina(ad, bekle_ihlal):
    global gecti, kaldi
    r = OO.kapi_olcumu()
    v = bool(r["ihlal"])
    ok = (v == bekle_ihlal)
    print("  %s %-46s ihlal=%-5s (beklenen %s)"
          % ("✓" if ok else "🔴 SINAV BAŞARISIZ", ad, v, bekle_ihlal))
    for s in r["satirlar"]:
        if s.strip().startswith("✗"):
            print("        %s" % s.strip())
    if ok:
        gecti += 1
    else:
        kaldi += 1
    return r


def git_temiz_mi():
    r = subprocess.run(["git", "status", "--short", "--", "data"], cwd=KOK,
                       capture_output=True, text=True, encoding="utf-8",
                       errors="replace")
    return not (r.stdout or "").strip(), (r.stdout or "").strip()


def main():
    temiz, kirli = git_temiz_mi()
    if not temiz:
        print("🔴 `data/` KİRLİ — sınav ÇALIŞMAZ. Başkasının yarım işini geri")
        print("   almak bu betiğin hakkı değil. Kirli dosyalar:")
        print(kirli[:600])
        return 2
    if not os.path.isfile(TAVAN):
        print("🔴 tavan yok:", TAVAN)
        return 2

    ilk = io.open(TAVAN, encoding="utf-8").read()
    kurban_yol = os.path.join(KOK, "data", KURBAN)
    print("=" * 84)
    print("ODAK KAPISI — İKİ YÖNLÜ SINAV")
    print("=" * 84)

    try:
        # ---------- ⓿ taban: olduğu gibi TEMİZ olmalı
        print("\n⓿ TABAN — dokunulmamış hâl")
        sina("taban (hiçbir şey değiştirilmedi)", False)

        # ---------- ① tavan indirilirse GERİLEME ötmeli
        print("\n① GERİLEME — tavan bir eksiğe indirildi")
        tv = json.loads(ilk)
        tv["odaksiz"] = max(tv["odaksiz"] - 1, 0)
        io.open(TAVAN, "w", encoding="utf-8", newline="\n").write(
            json.dumps(tv, ensure_ascii=False, indent=1) + "\n")
        sina("ODAKSIZ tavanı 1 düşük", True)
        io.open(TAVAN, "w", encoding="utf-8", newline="\n").write(ilk)

        # ---------- ② beyanlı borç silinirse YENİ sayılmalı
        print("\n② BEYAN SİLİNDİ — bilinen borç artık beyanlı değil")
        tv = json.loads(ilk)
        onceki = len(tv.get("bilinen_kusur") or [])
        tv["bilinen_kusur"] = []
        io.open(TAVAN, "w", encoding="utf-8", newline="\n").write(
            json.dumps(tv, ensure_ascii=False, indent=1) + "\n")
        sina("bilinen_kusur boşaltıldı (%d kayıt vardı)" % onceki, onceki > 0)
        io.open(TAVAN, "w", encoding="utf-8", newline="\n").write(ilk)

        # ---------- ③ veriye OLMAYAN bir odak_yer adı sokulursa
        print("\n③ KIRIK ATIF — veriye olmayan bir `odak_yer` adı sokuldu")
        ham = io.open(kurban_yol, encoding="utf-8").read()
        # ilk `{ t:"…"` kaydına odak_yer ekle — şema bozmadan, tek yerde
        m = re.search(r'\{\s*t\s*:\s*"(\d{4}-\d{2}-\d{2})"', ham)
        if not m:
            print("  🔴 kurban dosyada `{ t:\"…\"` kalıbı bulunamadı — ③ ATLANDI")
            print("     (ATLANDI ≠ GEÇTİ: sınav bu yönü ölçemedi)")
            kaldi_atla = True
        else:
            kaldi_atla = False
            yeni = ham[:m.end()] + (', odak_yer:["%s"]' % SAHTE) + ham[m.end():]
            io.open(kurban_yol, "w", encoding="utf-8", newline="").write(yeni)
            sina("%s içine odak_yer:[%r]" % (KURBAN, SAHTE), True)
            subprocess.run(["git", "checkout", "--", "data/" + KURBAN], cwd=KOK,
                           capture_output=True, text=True)

        # ---------- ④ her şey geri alındı: yine TEMİZ
        print("\n④ GERİ ALINDI — kapı yeniden temiz olmalı")
        sina("taban (geri alma sonrası)", False)

    finally:
        io.open(TAVAN, "w", encoding="utf-8", newline="\n").write(ilk)
        subprocess.run(["git", "checkout", "--", "data/" + KURBAN], cwd=KOK,
                       capture_output=True, text=True)

    print()
    print("=" * 84)
    print("SONUÇ: geçen %d · BAŞARISIZ %d" % (gecti, kaldi))
    if kaldi_atla:
        print("⚠️ ③ ATLANDI — o yön ÖLÇÜLEMEDİ, temiz sayılmaz.")
    temiz2, kirli2 = git_temiz_mi()
    print("geri alma doğrulandı: %s" % ("✓ data/ temiz" if temiz2
                                        else "🔴 KİRLİ KALDI:\n" + kirli2[:400]))
    return 0 if (kaldi == 0 and temiz2 and not kaldi_atla) else 1


if __name__ == "__main__":
    raise SystemExit(main())
