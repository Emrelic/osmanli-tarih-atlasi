# -*- coding: utf-8 -*-
"""BUDAMA-0907 · Ⓐ GERCEK TOKEN SAYISI

Sartname: `wc -c` BAYT sayar; Turkce UTF-8'de cogu harf 2 bayt ve Turkce
Ingilizceden kotu tokenlasir. Bu alet ucunu de olcer ve AYRI raporlar:

    BAYT        os.path.getsize
    KARAKTER    len(metin)          <- UTF-8 okunarak
    TOKEN       tiktoken o200k_base <- PROXY, Anthropic'in tokenlastiricisi DEGIL

DAMGA: token sayisi `🟡 PROXY` -- OpenAI o200k_base ile olculdu. Anthropic'in
kendi tokenlastiricisi yerelde yok (tiktoken/transformers kurulu degildi;
tiktoken bu is icin kuruldu). Mutlak sayi +-%15 sapabilir; ORANLAR
(bolum/bolum pay) tokenlastirici degisiminden cok daha az etkilenir.

`§11`: "bir olcumun birimi yazilmadan tasinmaz." Her sayinin yaninda birimi var.
"""
import os
import sys
import json

try:  # Windows konsolu cp1254 -- emoji ve Turkce harf patlatir
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DOSYALAR = [
    "CLAUDE.md",
    "OGRENILENLER.md",
    "YAPILACAKLAR.md",
    "ONCELIK.md",
    "YOL-HARITASI.md",
    "MIMARI.md",
    "VERI-YAPISI.md",
    "DURUM.md",
    "BES-ALTYAPI.md",
    "ETIKETLEME.md",
]


def enc_yukle():
    try:
        import tiktoken
    except ImportError:
        return None, "tiktoken YOK"
    for ad in ("o200k_base", "cl100k_base"):
        try:
            return tiktoken.get_encoding(ad), ad
        except Exception as e:  # aglar / indirme hatasi
            son = e
    return None, "tiktoken var ama encoding yuklenemedi: %r" % (son,)


def olc(metin, enc):
    ch = len(metin)
    tok = len(enc.encode(metin)) if enc else None
    return ch, tok


def main():
    enc, enc_ad = enc_yukle()
    if enc is None:
        print("🔴 OLCULEMEDI —", enc_ad)
        print("   (token sutunu bos kalacak; karakter ve bayt yine de olculdu)")
    else:
        print("tokenlastirici: %s  🟡 PROXY (Anthropic'in kendisi DEGIL)" % enc_ad)
    print()

    satir = "%-20s %9s %10s %9s %8s %8s" % (
        "dosya", "satir", "bayt", "karakter", "token", "kar/tok")
    print(satir)
    print("-" * len(satir))

    toplam = {"satir": 0, "bayt": 0, "kar": 0, "tok": 0}
    kayit = []
    for d in DOSYALAR:
        yol = os.path.join(KOK, d)
        if not os.path.exists(yol):
            print("%-20s %9s" % (d, "YOK"))
            continue
        ham = open(yol, "rb").read()
        metin = ham.decode("utf-8")
        ch, tok = olc(metin, enc)
        nsatir = metin.count("\n") + (0 if metin.endswith("\n") else 1)
        oran = (ch / tok) if tok else 0
        print("%-20s %9d %10d %9d %8s %8s" % (
            d, nsatir, len(ham), ch,
            ("%d" % tok) if tok else "-",
            ("%.2f" % oran) if tok else "-"))
        toplam["satir"] += nsatir
        toplam["bayt"] += len(ham)
        toplam["kar"] += ch
        toplam["tok"] += tok or 0
        kayit.append({"dosya": d, "satir": nsatir, "bayt": len(ham),
                      "karakter": ch, "token": tok})

    print("-" * len(satir))
    print("%-20s %9d %10d %9d %8d %8s" % (
        "TOPLAM", toplam["satir"], toplam["bayt"], toplam["kar"], toplam["tok"],
        ("%.2f" % (toplam["kar"] / toplam["tok"])) if toplam["tok"] else "-"))

    # --- sartnamenin kaba tahminiyle KIYAS ---
    print()
    print("KIYAS — sartnamenin `wc -c` tahmini vs olculen token")
    kaba = {"CLAUDE.md": 104000, "OGRENILENLER.md": 50000, "YAPILACAKLAR.md": 14000}
    for k in kayit:
        if k["dosya"] in kaba and k["token"]:
            t = kaba[k["dosya"]]
            print("  %-18s kaba ~%6d  olculen %6d  sapma %+.0f%%" % (
                k["dosya"], t, k["token"], 100.0 * (t - k["token"]) / k["token"]))

    # --- Turkce/ASCII tokenlasma farki, ayni dosya icinde olculur ---
    if enc:
        print()
        print("TURKCE CEZASI — ayni metnin Turkce harfleri ASCII'ye indirilirse")
        yol = os.path.join(KOK, "CLAUDE.md")
        metin = open(yol, "rb").read().decode("utf-8")
        cev = str.maketrans("ıİşŞğĞüÜöÖçÇâîûÂÎÛ", "iIsSgGuUoOcCaiuAIU")
        duz = metin.translate(cev)
        t1 = len(enc.encode(metin))
        t2 = len(enc.encode(duz))
        print("  Turkce harfli : %6d token" % t1)
        print("  ASCII'ye inmis: %6d token   ⇒ Turkce cezasi %+.1f%% (%+d token)" % (
            t2, 100.0 * (t1 - t2) / t2, t1 - t2))

    with open(os.path.join(KOK, "denetim", "_budama_token.json"), "w",
              encoding="utf-8") as f:
        json.dump({"tokenlastirici": enc_ad, "dosyalar": kayit}, f,
                  ensure_ascii=False, indent=1)
    print()
    print("yazildi: denetim/_budama_token.json")


if __name__ == "__main__":
    sys.exit(main())
