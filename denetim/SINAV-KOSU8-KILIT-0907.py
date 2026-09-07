# -*- coding: utf-8 -*-
u"""MERGE KİLİDİ TARAMASI  ·  SINAV-KOSU8-0907  ·  7 Eylül 2026

══════════════════════════════════════════════════════════════════════════
ÖLÇÜT — 1.MURAT'ın tanımı, aynen
══════════════════════════════════════════════════════════════════════════
    MERGE KİLİDİ = düzeltilmezse, kuyruktaki bir yama
                   🔴 YANLIŞ iner   ya da   🔴 SESSİZCE inmez

    🔴 KİLİT      araç alan kümesi eksik · glob tutmuyor · şema uyuşmuyor ·
                  ön koşul (künye/renk) yok
    ⚪ KİLİT DEĞİL  "şunu da ölçmek lazım" · "bir gün bakılmalı" · öneri

🔴 İKİNCİ YARI ASIL OLANI: *"yanlış inen"* bir gün fark edilir,
   **sessizce inmeyen asla.** `not` vakası tam oydu — yama *"uygulandı"*
   diyecek, 17 beyan iz bırakmadan kaybolacaktı.

BU BETİK BULUR, ADLANDIRIR — **DÜZELTMEZ.** Düzeltme yetkisi dosya
sahibinde (`§7`); bugün o sıra üç kez işe yaradı.

🔴 VE BİR UYARI, BAŞA: BU PROJEDE BİR DESEN TARAMASI KABUKTAN GEÇTİĞİNDE
   `0` ÜRETEBİLİYOR — ve `0`, *"yok"* ile *"bakmadım"* arasında ayrım
   yapmaz. Bugün üç kez oldu (`grep -P` · `grep -F` döngüsü · bir kural
   sırası) ve dördüncüsü koordinatörün `py -c`siydi. O yüzden buradaki
   her tarama Python'un kendi `re`/`os`uyla yapılıyor, kabuk YOK.

KOŞULUŞ
    py denetim/SINAV-KOSU8-KILIT-0907.py
    py denetim/SINAV-KOSU8-KILIT-0907.py --atesle
"""
from __future__ import unicode_literals

import io
import os
import re
import subprocess
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ── UYGULAYICILARIN OKUDUĞU DOSYA KÜMESİ — koddan ÇIKARILDI, varsayılmadı ──
# (ad, nasıl_okur, desen/liste)   `kod` alanı hangi satırdan geldiğini söyler
OKUYUCULAR = [
    ("_sahiplik_uygula", "regex", r"^yer_yama.*\.js$", "arac/_sahiplik_uygula.py"),
    ("_kademe_uygula", "liste",
     ["data/yer_yama_kademe.js", "data/yer_yama_kademe2.js"],
     "arac/_kademe_uygula.py:29"),
]


def data_yamalari():
    d = os.path.join(KOK, "data")
    return sorted(a for a in os.listdir(d)
                  if a.startswith("yer_yama") and a.endswith(".js"))


def kim_okur(ad):
    u"""Bir data/ yamasını hangi uygulayıcılar okur?"""
    okuyan = []
    for kayit in OKUYUCULAR:
        tur = kayit[1]
        if tur == "regex":
            if re.match(kayit[2], ad):
                okuyan.append(kayit[0])
        else:
            if ("data/" + ad) in kayit[2]:
                okuyan.append(kayit[0])
    return okuyan


def glob_maruziyeti():
    u"""Varsayılan glob'ların kaç bekleyen yamayı KAÇIRDIĞI."""
    out = []
    for alet, dizin, onek, varsayilan in [
            ("_kunye_uygula", "denetim", "YAMA-KUNYE-", "0905"),
            ("_kronoloji_uygula", "denetim", "KRONOLOJI-", "0905")]:
        d = os.path.join(KOK, dizin)
        hepsi = [a for a in sorted(os.listdir(d))
                 if a.startswith(onek) and a.endswith(".json")]
        tutan = [a for a in hepsi if varsayilan in a]
        out.append((alet, onek, varsayilan, len(tutan), len(hepsi),
                    [a for a in hepsi if a not in tutan]))
    return out


def alan_kumesi(yol, isim):
    u"""Bir uygulayıcının alan kümesini KODDAN okur (elle liste YOK)."""
    try:
        with io.open(os.path.join(KOK, yol), encoding="utf-8") as f:
            m = f.read()
    except Exception:                                # noqa: BLE001
        return None
    # 🔴 ÜÇ BİÇİM DE OKUNUR — ve üçüncüsü bu aletin İLK KOŞUSUNDA eksikti:
    #   `ALAN_RX = {a: re.compile(...) for a in ("d","s","v","isg")}`
    #   bir SÖZLÜK KURGUSU ve ilk çıkarıcı onu okuyamayıp `(okunamadı)`
    #   bastı — okuyan kişi bunu bir BULGU sanabilirdi. Oysa aracın alan
    #   kümesi oradaydı; ölçülemeyen şey ALET DEĞİL benim ÇIKARICIMDI.
    #   `§11`: *"«ölçülemedi» asla «temiz» diye raporlanmaz — ama «çürüdü»
    #   diye de raporlanmaz."* Burada üçüncü bir hâl vardı: **ölçülemeyen
    #   şeyin ne olduğu belirsiz.** Çıkarıcı düzeltildi.
    for kalip in (r"\s*=\s*\(([^)]*)\)",          # tuple
                  r"\s*=\s*\[([^\]]*)\]",         # liste
                  r"\s*=\s*\{[^}]*?for \w+ in \(([^)]*)\)"):   # sözlük kurgusu
        r = re.search(re.escape(isim) + kalip, m, re.S)
        if r:
            bulunan = sorted(set(re.findall(r'"([a-zA-Z_]+)"', r.group(1))))
            if bulunan:
                return bulunan
    return None


def atesleme():
    t = []

    def de(ad, bekle, olc):
        t.append((ad, bekle, olc, bekle == olc))

    de("regex okuyucu · yer_yama_X.js tutar", ["_sahiplik_uygula"],
       kim_okur("yer_yama_test.js"))
    de("liste okuyucu · kademe.js İKİ okuyucu",
       ["_sahiplik_uygula", "_kademe_uygula"], kim_okur("yer_yama_kademe.js"))
    de("kademe3 listede YOK ⇒ yalnız sahiplik", ["_sahiplik_uygula"],
       kim_okur("yer_yama_kademe3.js"))
    de("yer_yama ile başlamayan HİÇ okunmaz", [], kim_okur("baska.js"))
    de("alan kümesi KODDAN okunur (SKALER_ALANLAR · tuple)",
       ["bos", "kaynak", "kur", "m", "neden", "not"],
       alan_kumesi("arac/_sahiplik_uygula.py", "SKALER_ALANLAR"))
    # 🔴 İLK KOŞUDA EKSİK OLAN DAL — çıkarıcı sözlük kurgusunu okuyamıyordu
    de("SÖZLÜK KURGUSU da okunur (ALAN_RX)", ["d", "isg", "s", "v"],
       alan_kumesi("arac/_sahiplik_uygula.py", "ALAN_RX"))
    de("LİSTE de okunur (_kunye_uygula.sira içinde `not`)", True,
       "not" in (alan_kumesi("arac/_kunye_uygula.py", "sira") or []))
    de("olmayan sabit → None", None,
       alan_kumesi("arac/_sahiplik_uygula.py", "YOK_BOYLE_BIR_SABIT"))
    return t


def main():
    if "--atesle" in sys.argv:
        print("C13 ② ATEŞLEME\n")
        d = atesleme()
        kotu = 0
        for ad, b, o, ok in d:
            print(("  🟢 " if ok else "  🔴 ") + ad.ljust(44) +
                  "beklenen %r · ölçülen %r" % (b, o))
            kotu += (not ok)
        print("\n%d/%d dal ateşledi" % (len(d) - kotu, len(d)))
        return 1 if kotu else 0

    print("═" * 78)
    print("MERGE KİLİDİ TARAMASI — koşu 8 sonrası kuyruk")
    print("═" * 78)
    kilit = []

    # ── ① GLOB TUTMUYOR ──────────────────────────────────────────────────
    print("\n① GLOB TUTMUYOR — varsayılan desen bekleyen yamayı KAÇIRIYOR")
    for alet, onek, vars_, tutan, hepsi, kacan in glob_maruziyeti():
        d = hepsi - tutan
        isaret = "🔴" if d else "🟢"
        print("  %s %-20s varsayılan «%s»  tutuyor %d/%d  ·  KAÇAN %d"
              % (isaret, alet, vars_, tutan, hepsi, d))
        if d:
            kilit.append(("GLOB", alet,
                          "%d/%d bekleyen yama varsayılan glob'a DÜŞMÜYOR "
                          "⇒ «0 kayıt» diye SESSİZ geçer" % (d, hepsi)))
            for a in kacan[:8]:
                print("        · %s" % a)
            if len(kacan) > 8:
                print("        … %d dosya daha" % (len(kacan) - 8))

    # ── ② HİÇBİR OKUYUCUSU OLMAYAN YAMA ─────────────────────────────────
    print("\n② OKUYUCUSU OLMAYAN / TEK OKUYUCULU data/ YAMASI")
    yamalar = data_yamalari()
    oksuz = [a for a in yamalar if not kim_okur(a)]
    print("  data/yer_yama*.js : %d dosya  ·  hiçbir uygulayıcının "
          "okumadığı: %d" % (len(yamalar), len(oksuz)))
    if oksuz:
        kilit.append(("OKUYUCUSUZ", "-", "%d yama hiçbir uygulayıcıya "
                      "düşmüyor" % len(oksuz)))
        for a in oksuz[:10]:
            print("     🔴 %s" % a)
    # kademe ailesi ayrıca: adı kademe olup kademe aletine düşmeyenler
    kad = [a for a in yamalar if "kademe" in a]
    kad_dis = [a for a in kad if "_kademe_uygula" not in kim_okur(a)]
    print("  «kademe» adlı yama: %d  ·  _kademe_uygula'nın SABİT listesinde "
          "OLMAYAN: %d" % (len(kad), len(kad_dis)))
    for a in kad_dis:
        print("     🟡 %s   (yalnız %s okuyor)" % (a, ", ".join(kim_okur(a)) or "HİÇBİRİ"))
    if kad_dis:
        kilit.append(("SABİT LİSTE", "_kademe_uygula",
                      "%d «kademe» yaması sabit iki dosyalık listeye "
                      "girmiyor — adı kademe, okuyucusu başkası" % len(kad_dis)))

    # ── ③ ALAN KÜMESİ ────────────────────────────────────────────────────
    print("\n③ ALAN KÜMESİ — aracın taşıyabildikleri")
    for isim in ("ALAN_RX", "SKALER_ALANLAR", "SKALER_KORUNAN", "CATISABILIR"):
        v = alan_kumesi("arac/_sahiplik_uygula.py", isim)
        print("  _sahiplik_uygula.%-16s %s" % (isim, v if v else "(okunamadı)"))
    v = alan_kumesi("arac/_kunye_uygula.py", "sira")
    print("  _kunye_uygula.sira%15s %s" % ("", v if v else "(okunamadı)"))
    print("  🟢 `not` kontrolü: %s"
          % ("VAR — 97523a7 ile eklendi" if v and "not" in v else "🔴 YOK"))
    print("  ⚠️ `_kademe_uygula` node izdüşümü yalnız {ad, eski.k, yeni.k,")
    print("     olcut} taşıyor — `m` alanı Python'a HİÇ ULAŞMIYOR")
    print("     (`CLAUDE.md` bunu ölçmüş: 24/38 kayıtta `oneri.m` iniyor değil)")

    # ── RAPOR ────────────────────────────────────────────────────────────
    print("\n" + "═" * 78)
    print("KİLİT ADAYI: %d" % len(kilit))
    for tur, alet, ne in kilit:
        print("  🔴 [%s] %s — %s" % (tur, alet, ne))
    print("")
    print("🔴 BU BİR HÜKÜM DEĞİL, BİR LİSTE. Düzeltme yetkisi dosya sahibinde.")
    print("⚠️ VE KAPSAM: yalnız `data/yer_yama*.js` ile `denetim/YAMA-KUNYE-*`")
    print("   `denetim/KRONOLOJI-*` ölçüldü. Öteki yama biçimleri OKUNMADI —")
    print("   «bulunamadı» DEĞİL.")
    return 1 if kilit else 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())
