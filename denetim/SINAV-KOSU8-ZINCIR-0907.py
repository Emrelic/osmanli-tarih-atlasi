# -*- coding: utf-8 -*-
u"""ÜÇ YAYIN ZİNCİRİ YAN YANA — hangisi merge gecesinde çağrılır?

    SINAV-KOSU8-0907 · sevk: 1.MURAT · 7 Eylül 2026 · 🔴 SALT OKUR

Depoda **üç** yayın zinciri var ve üçü farklı davranıyor. Merge gecesi
saat 04:00'te hangisinin çağrılacağı **bir hatırlama meselesi
olmamalı.**

Bugün ölçülen üç ayrışma:
```
· `_yayin_zinciri.py`de `uret_altlik` ADIMI YOK ⇒ o koşulursa
  `altlik.js` BAYAT KALIR ve kapı TEK BAŞINA onun yüzünden reddeder
· `kos_ve_yayinla.py` damga adımını KAPIDAN SONRAYA koymuş
· `kosu_yayin.py` kapıyı UYARIYA düşürmüş (`uyari_kodu=True`)
```

## NİÇİN ELLE YAZILMIYOR
Bu belge tam **bayatlayan cinsten**: bir zincire adım eklenince elle
yazılmış bir tablo sessizce yanlışlaşır, ve `§1.5`in dersi bu —
*"bir kez bayatlayan belge tekrar bayatlar; çare yeni bir satır değil,
satırı ELLE YAZILMAKTAN ÇIKARMAKTIR."* ⇒ Tablo **kaynaktan üretiliyor.**

## VE AYRIŞTIRICI REGEX DEĞİL — `ast`
Bu proje *"veri zaten bir dilde yazılıysa, o dilin yorumlayıcısını
çağır"* dersini sekiz kez öğrendi. Zincirler **Python**; `ast` ile
okunuyor. Bugün aynı oturumda bir regex girinti derinliğini sözleşme
sandı ve yanlış alarm verdi — dokuzuncusu olmasın.

## ÖLÇÜLEN ÜÇ ŞEY
```
① ADIM SIRASI      hangi zincir hangi adımı, KAÇINCI sırada taşıyor
② ÖLÜMCÜLLÜK       adım düşerse zincir DURUR mu
   🔴 ve iki ayrı şey: `kos()` ÖLÜMCÜL DAVRANIR mı (mesaj basar,
      None döner) ve ÇAĞIRAN onu KARARA BAĞLAR mı (`if … return`).
      İkincisi olmadan birincisi bir MESAJDIR, bir kapı değil.
③ YAYIN YAPAR MI   git commit/push adımı VAR mı
```

    py denetim/SINAV-KOSU8-ZINCIR-0907.py
    py denetim/SINAV-KOSU8-ZINCIR-0907.py --atesle
Bu alet hiçbir dosyaya yazmaz.
"""
from __future__ import unicode_literals

import ast
import io
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ZINCIRLER = ["arac/kos_ve_yayinla.py", "arac/_yayin_zinciri.py",
             "arac/kosu_yayin.py"]

# Bir adımın "aynı iş" olduğunu ADINDAN değil ÇAĞIRDIĞI BETİKTEN anla.
# (Adlar zincirden zincire değişiyor: "ALTI DEĞİŞMEZ (denetle.py)" ↔
#  "③ denetle (altı değişmez)" ↔ "denetle.py")
ILGI = ["uret_petek.py", "uret_devirler.py", "uret_altlik.py",
        "uret_bekleyenler.py", "renk_olc.py", "denetle.py",
        "denetle_yayin.py", "denetle_kronoloji.py", "denetle_arayuz.py",
        "adres_nobetci.py", "surum_damgala.py"]


def _dizgi(d):
    if isinstance(d, ast.Constant) and isinstance(d.value, str):
        return d.value
    return None


def _betik(cagri):
    u"""Çağrının hangi betiği koşturduğunu argümanlarından çıkar."""
    parcalar = []
    for a in cagri.args:
        s = _dizgi(a)
        if s:
            parcalar.append(s)
        elif isinstance(a, (ast.List, ast.Tuple)):
            for e in a.elts:
                s2 = _dizgi(e)
                if s2:
                    parcalar.append(s2)
    metin = " ".join(parcalar)
    for i in ILGI:
        if i in metin:
            return i
    # git adımları
    for g in ("commit", "push", "add", "pull"):
        if ("git" in metin or "git" in (parcalar[0] if parcalar else "")) \
                and g in metin:
            return "git " + g
    return None


def _kw(cagri, ad):
    for k in cagri.keywords:
        if k.arg == ad:
            if isinstance(k.value, ast.Constant):
                return k.value.value
            return "?"
    return None


def zinciri_oku(yol):
    u"""(adımlar, notlar) — adım: (betik, olumcul_davranis, karara_bagli)."""
    with io.open(os.path.join(KOK, yol), encoding="utf-8") as f:
        agac = ast.parse(f.read())

    adimlar, notlar = [], []

    # ── Biçim A: `kos(...)` çağrıları (kos_ve_yayinla · kosu_yayin)
    # Karara bağlı mı: çağrı bir `If`in TESTİNDE mi ve gövdesinde
    # `return`/`sys.exit` var mı?
    kararli = set()
    for d in ast.walk(agac):
        if not isinstance(d, ast.If):
            continue
        cagrilar = [n for n in ast.walk(d.test)
                    if isinstance(n, ast.Call)
                    and isinstance(n.func, ast.Name) and n.func.id == "kos"]
        if not cagrilar:
            continue
        durur = any(isinstance(n, (ast.Return,)) or
                    (isinstance(n, ast.Call) and
                     isinstance(n.func, ast.Attribute) and
                     n.func.attr == "exit")
                    for st in d.body for n in ast.walk(st))
        for c in cagrilar:
            if durur:
                kararli.add(id(c))

    for d in ast.walk(agac):
        if not (isinstance(d, ast.Call) and isinstance(d.func, ast.Name)
                and d.func.id == "kos"):
            continue
        b = _betik(d)
        if b is None:
            continue
        # ölümcül DAVRANIŞ: `kos()`un kendi bayrağı
        ol = _kw(d, "olumcul")
        zo = _kw(d, "zorunlu")
        uy = _kw(d, "uyari_kodu")
        if uy is True:
            davranis = "UYARI"
        elif ol is False or zo is False:
            davranis = "gevşek"
        else:
            davranis = "ÖLÜMCÜL"          # ikisinin de varsayılanı True
        adimlar.append((b, davranis, id(d) in kararli, d.lineno))

    # ── Biçim B: `ADIMLAR = [...]` + döngü (_yayin_zinciri)
    if not adimlar:
        for d in ast.walk(agac):
            if isinstance(d, ast.Assign) and any(
                    isinstance(t, ast.Name) and t.id == "ADIMLAR"
                    for t in d.targets):
                for e in getattr(d.value, "elts", []):
                    parcalar = []
                    for x in ast.walk(e):
                        s = _dizgi(x)
                        if s:
                            parcalar.append(s)
                    metin = " ".join(parcalar)
                    for i in ILGI:
                        if i in metin:
                            adimlar.append((i, "gevşek", False, d.lineno))
                            break
        kirilma = any(isinstance(n, ast.Break)
                      for d in ast.walk(agac) if isinstance(d, ast.For)
                      for n in ast.walk(d))
        notlar.append("döngü `break` içeriyor mu: %s" % ("evet" if kirilma
                                                         else "HAYIR"))

    # 🔴 `ast.walk` KAYNAK SIRASINI KORUMAZ — genişlik öncelikli dolaşır.
    #   İlk yazımda sıralamadım ve tablo `uret_petek.py`yi 12. ADIM,
    #   `renk_olc.py`yi 1. ADIM gösterdi. Sayılar MAKUL görünüyordu ve
    #   tamamen uydurmaydı; bir merge gecesi o tabloya bakıp yanlış
    #   zinciri çağırabilirdi.
    #   ⇒ Sıra `lineno` ile kurulur. `§11`: *"alet hata vermez, temiz
    #     bir sayı üretir"* — burada temiz bir SIRA üretti.
    adimlar.sort(key=lambda x: x[3])

    # ── yayın yapıyor mu: git commit/push
    kaynak = io.open(os.path.join(KOK, yol), encoding="utf-8").read()
    yayin = ('"push"' in kaynak or "'push'" in kaynak
             or '"commit"' in kaynak or "'commit'" in kaynak)
    notlar.append("git commit/push adımı: %s" % ("VAR" if yayin else "YOK"))
    return adimlar, notlar, yayin


def main():
    if "--atesle" in sys.argv:
        return atesle()

    veri = {}
    for z in ZINCIRLER:
        veri[z] = zinciri_oku(z)

    print("═" * 78)
    print("ÜÇ YAYIN ZİNCİRİ — kaynaktan ÜRETİLDİ, elle yazılmadı")
    print("═" * 78)
    print("")

    # ── ① adım sırası, yan yana
    print("① ADIM SIRASI ve ÖLÜMCÜLLÜK")
    print("")
    basliklar = [os.path.basename(z) for z in ZINCIRLER]
    print("   %-24s %-22s %-22s %s"
          % ("ADIM (çağrılan betik)", basliklar[0], basliklar[1],
             basliklar[2]))
    print("   " + "-" * 92)
    for i in ILGI + ["git add", "git commit", "git push"]:
        satir = []
        var_mi = False
        for z in ZINCIRLER:
            bulundu = [(n, a, k, l) for n, a, k, l in veri[z][0] if n == i]
            if not bulundu:
                satir.append("—")
                continue
            var_mi = True
            n, a, k, l = bulundu[0]
            sira = [x[0] for x in veri[z][0]].index(i) + 1
            im = a if a != "ÖLÜMCÜL" else ("ÖLÜMCÜL" if k else "🔴 BAĞLANMAMIŞ")
            satir.append("%d. %s" % (sira, im))
        if var_mi:
            print("   %-24s %-22s %-22s %s"
                  % (i, satir[0], satir[1], satir[2]))
    print("")

    # ── ② karara bağlanmamış ölümcül adımlar
    print("② «ÖLÜMCÜL DAVRANIYOR AMA KARARA BAĞLANMAMIŞ» ADIMLAR")
    print("   (kos() «ZİNCİR DURDU» basar ve None döner — ama çağıran")
    print("    dönüşü OKUMUYORSA zincir DEVAM EDER: mesaj var, kapı yok)")
    hic = True
    for z in ZINCIRLER:
        for n, a, k, l in veri[z][0]:
            if a == "ÖLÜMCÜL" and not k:
                hic = False
                print("   🔴 %-22s %-20s satır %d" % (os.path.basename(z),
                                                      n, l))
    if hic:
        print("   🟢 yok")
    print("")

    # ── ③ hüküm
    print("③ YAYIN YAPAR MI")
    for z in ZINCIRLER:
        adim, notlar, yayin = veri[z]
        print("   %-24s %s" % (os.path.basename(z),
                               "YAYIN YAPAR" if yayin else "yalnız RAPOR"))
        for nt in notlar:
            print("        %s" % nt)
    print("")

    # ── eksik adımlar
    print("④ BİR ZİNCİRDE VAR, ÖTEKİNDE YOK")
    for i in ILGI:
        sahip = [os.path.basename(z) for z in ZINCIRLER
                 if any(n == i for n, _a, _k, _l in veri[z][0])]
        if 0 < len(sahip) < len(ZINCIRLER):
            yok = [os.path.basename(z) for z in ZINCIRLER
                   if os.path.basename(z) not in sahip]
            print("   %-22s VAR: %-40s YOK: %s"
                  % (i, ", ".join(sahip), ", ".join(yok)))
    print("")
    print("─" * 78)
    print("⚠️ Bu tablo KAYNAKTAN üretilir. Bir zincire adım eklenirse")
    print("   burada KENDİLİĞİNDEN görünür — elle güncellenmez.")
    return 0


def atesle():
    u"""C13 ② — ayrıştırıcının her dalı zorlanır."""
    print("C13 ② ATEŞLEME — zincir ayrıştırıcısı")
    d = []
    a, n, y = zinciri_oku("arac/kos_ve_yayinla.py")
    d.append(("kos_ve_yayinla adım bulundu", len(a) > 5, True, "%d" % len(a)))
    d.append(("kos_ve_yayinla YAYIN yapar", y, True, ""))
    d.append(("denetle.py ÖLÜMCÜL ve KARARA BAĞLI",
              any(x[0] == "denetle.py" and x[1] == "ÖLÜMCÜL" and x[2]
                  for x in a), True, ""))
    d.append(("renk_olc gevşek",
              any(x[0] == "renk_olc.py" and x[1] == "gevşek" for x in a),
              True, ""))
    a2, n2, y2 = zinciri_oku("arac/_yayin_zinciri.py")
    d.append(("_yayin_zinciri ADIMLAR listesinden okundu",
              len(a2) >= 2, True, "%d" % len(a2)))
    d.append(("_yayin_zinciri YAYIN YAPMAZ", not y2, True, ""))
    d.append(("_yayin_zinciri'de uret_altlik YOK",
              not any(x[0] == "uret_altlik.py" for x in a2), True, ""))
    a3, n3, y3 = zinciri_oku("arac/kosu_yayin.py")
    d.append(("kosu_yayin kapısı UYARI",
              any(x[0] == "denetle_yayin.py" and x[1] == "UYARI"
                  for x in a3), True, ""))
    kotu = 0
    for ad, ger, bek, bilgi in d:
        ok = bool(ger) == bek
        kotu += (not ok)
        print("  %s %-42s %s" % ("🟢" if ok else "🔴", ad, bilgi))
    print("")
    print("%d/%d dal ateşledi" % (len(d) - kotu, len(d)))
    return 1 if kotu else 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())
