# -*- coding: utf-8 -*-
"""BUDAMA-0907 · CLAUDE.md BÜYÜME HIZI  +  §3.5/§4'ün vaka payı

🔴 NİÇİN GEREKTİ — ölçüm sırasında taban DEĞİŞTİ:
    14:5x  CLAUDE.md  7.374 satır · 145.947 token
    16:0x  CLAUDE.md  7.662 satır · 151.356 token     (+288 satır · +5.409 tok)
⇒ Budama bir FOTOĞRAFTIR. Büyüme hızı ölçülmezse, budanan belge
  aynı hızla geri şişer ve iş bir kez daha yapılır.

Bu alet iki şey ölçer:
  ① `git log` üzerinden gün gün CLAUDE.md satır/token büyümesi
  ② `§3.5` ve `§4`ün içindeki VAKA anlatısı payı (🟡 KABA — o iki bölüm
     madde listesi değil DÜZYAZI; ölçüt kod bloğu + "Vaka" paragrafı)
     🔴 BU TURDA DOKUNULMUYOR — yalnız ölçülüp bildiriliyor.
"""
import os
import re
import sys
import subprocess

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
import tiktoken
ENC = tiktoken.get_encoding("o200k_base")
tok = lambda s: len(ENC.encode(s))


def git(*a):
    r = subprocess.run(["git"] + list(a), cwd=KOK, capture_output=True)
    return r.stdout.decode("utf-8", "replace")


def buyume():
    print("① BÜYÜME — CLAUDE.md, günün SON commit'indeki hâli")
    ham = git("log", "--format=%H|%ad", "--date=format:%Y-%m-%d", "--", "CLAUDE.md")
    gunler = {}
    for satir in ham.strip().split("\n"):
        if "|" not in satir:
            continue
        sha, gun = satir.split("|", 1)
        gunler.setdefault(gun, sha)   # ilk gelen = en yeni (git ters sırada)
    onceki = None
    print("  %-12s %8s %9s %9s %9s" % ("gün", "satır", "token", "Δsatır", "Δtoken"))
    for gun in sorted(gunler)[-14:]:
        metin = git("show", "%s:CLAUDE.md" % gunler[gun])
        n, t = metin.count("\n"), tok(metin)
        if onceki:
            print("  %-12s %8d %9d %+9d %+9d" % (gun, n, t, n - onceki[0],
                                                 t - onceki[1]))
        else:
            print("  %-12s %8d %9d %9s %9s" % (gun, n, t, "-", "-"))
        onceki = (n, t)
    su = open(os.path.join(KOK, "CLAUDE.md"), "rb").read().decode("utf-8")
    print("  %-12s %8d %9d %+9d %+9d   ← ÇALIŞMA KOPYASI (commit'siz dâhil)" % (
        "ŞİMDİ", su.count("\n"), tok(su),
        su.count("\n") - onceki[0], tok(su) - onceki[1]))
    return sorted(gunler)


def vaka_payi():
    print()
    print("② §3.5 ve §4'ÜN VAKA PAYI — 🟡 KABA · BU TURDA DOKUNULMUYOR")
    satirlar = open(os.path.join(KOK, "CLAUDE.md"), "rb").read() \
        .decode("utf-8").split("\n")
    kesitler = {}
    ad = None
    for s in satirlar:
        if s.startswith("## "):
            b = s[3:].strip()
            ad = ("3.5" if b.startswith("3.5") else
                  "4" if b.startswith("4.") else None)
            if ad:
                kesitler[ad] = []
                continue
            ad = None
        if ad:
            kesitler[ad].append(s)

    VAKA = re.compile(r"\*{0,2}(Vaka|VAKA|Vakalar|Yaşanmış|Ölçüldü|ÖLÇÜLDÜ)\b")
    for k in ("3.5", "4"):
        sat = kesitler.get(k, [])
        if not sat:
            print("  §%s bulunamadı" % k)
            continue
        toplam = tok("\n".join(sat))
        icinde, kod, vaka = False, [], []
        for s in sat:
            if s.strip().startswith("```"):
                icinde = not icinde
                kod.append(s)
                continue
            (kod if icinde else vaka).append(s) if icinde else None
            if not icinde and VAKA.search(s):
                vaka.append(s)
        t_kod = tok("\n".join(kod))
        t_vaka = tok("\n".join(vaka))
        print("  §%-4s toplam %6d tok · kod bloğu %5d (%%%2.0f) · «Vaka/Ölçüldü» "
              "satırı %4d (%%%2.0f)" % (
                  k, toplam, t_kod, 100.0 * t_kod / toplam,
                  t_vaka, 100.0 * t_vaka / toplam))
    print("  ⚠️ Bu bir ALT SINIRDIR: kod bloğu ve «Vaka» satırı sayıldı, o")
    print("     satırları AÇIKLAYAN düzyazı sayılmadı. Gerçek vaka payı daha")
    print("     yüksek; kesin ölçüm ayrı bir kalem.")


def main():
    buyume()
    vaka_payi()
    return 0


if __name__ == "__main__":
    sys.exit(main())
