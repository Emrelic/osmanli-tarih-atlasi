# -*- coding: utf-8 -*-
u"""`--uretimsiz` NE ATLIYOR? — gecenin en pahalı komutu, ÖLÇÜLEREK.

    SINAV-KOSU8-0907 · sevk: 1.MURAT · 7 Eylül 2026 · 🔴 SALT OKUR

Koşu 8 bitince zincir `denetle.py`de duracak. İhlaller kapatıldıktan
sonra **kalan adımlar `uret_petek.py` TEKRAR KOŞULMADAN** sürdürülmeli.
Yanlış bayrak **12 saatlik üretimi baştan başlatır** — gecenin en pahalı
hatası, ve tek bir komut satırına bağlı.

## NİÇİN GÖZLE DEĞİL `ast` İLE
`--uretimsiz` bir `if uretimsiz: … else: …` bloğuyla çalışıyor ve
**hangi adımın hangi dalda olduğu GİRİNTİYE bağlı.** Bu oturum bugün
tam bu sınıfta yanıldı: bir regex `\\n    return` (dört boşluk) aradı,
`return 1` sekiz boşlukla girintiliydi, ve alet *"birden çok ret yolu"*
diye **yanlış alarm** verdi.
⇒ Girinti gözle okunmaz; `ast` **dalların gerçek üyeliğini** verir.

    py denetim/SINAV-KOSU8-URETIMSIZ-0907.py
Bu alet hiçbir dosyaya yazmaz ve HİÇBİR ZİNCİR KOŞTURMAZ.
"""
from __future__ import unicode_literals

import ast
import io
import os
import subprocess
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "arac", "kos_ve_yayinla.py")


def _cagri_adlari(dugum):
    u"""Bir AST dalındaki `kos(...)` çağrılarının koşturduğu betikler."""
    out = []
    for n in ast.walk(dugum):
        if not (isinstance(n, ast.Call) and isinstance(n.func, ast.Name)
                and n.func.id == "kos"):
            continue
        parca = []
        for a in n.args:
            if isinstance(a, ast.Constant) and isinstance(a.value, str):
                parca.append(a.value)
            elif isinstance(a, (ast.List, ast.Tuple)):
                for e in a.elts:
                    if isinstance(e, ast.Constant) and isinstance(e.value, str):
                        parca.append(e.value)
        metin = " ".join(parca)
        betik = None
        for i in ("uret_petek.py", "uret_devirler.py", "uret_altlik.py",
                  "uret_bekleyenler.py", "renk_olc.py", "denetle.py",
                  "denetle_yayin.py", "adres_nobetci.py",
                  "surum_damgala.py"):
            if i in metin:
                betik = i
                break
        if betik is None and "git" in parca:
            # `["git", "commit", "-F", MESAJ]` → alt komut İKİNCİ öğe
            alt = [p for p in parca if p != "git" and not p.startswith("-")]
            betik = "git " + (alt[0] if alt else "?")
        out.append((betik or metin[:28], n.lineno))
    return out


def main():
    with io.open(YOL, encoding="utf-8") as f:
        kaynak = f.read()
    agac = ast.parse(kaynak)

    # `_zincir` gövdesindeki `if uretimsiz:` dalını bul
    hedef = None
    for d in ast.walk(agac):
        if isinstance(d, ast.FunctionDef) and d.name == "_zincir":
            hedef = d
    if hedef is None:
        print("🔴 `_zincir` bulunamadı — alet DURDU (sessizce geçmiyor)")
        return 2

    dal = None
    for d in ast.walk(hedef):
        if isinstance(d, ast.If) and isinstance(d.test, ast.Name) \
                and d.test.id == "uretimsiz":
            dal = d
    if dal is None:
        print("🔴 `if uretimsiz:` dalı bulunamadı — alet DURDU")
        return 2

    print("═" * 78)
    print("`--uretimsiz` NE ATLIYOR — `ast` ile ölçüldü, gözle değil")
    print("═" * 78)
    print("dal: kos_ve_yayinla.py satır %d-%d" % (dal.lineno,
                                                  dal.body[-1].lineno))
    print("")

    # 🔴 `_cagri_adlari(dal)` YAZMA — `ast.walk` bir `If` düğümünü
    #   dolaşırken `orelse`i DE dolaşır, ve iki dal AYNI listeyi verir.
    #   İlk yazımda öyleydi: çıktı hem «atlanan» hem «koşan» kovasında
    #   aynı dört betiği gösterdi — kendi kendiyle çelişen bir tablo.
    #   ⇒ Dallar GÖVDELERİNDEN ayrı ayrı okunur.
    #   📌 Ve bu, bugün `ast.walk`ın ikinci kez ısırması: zincir
    #     kıyasında KAYNAK SIRASINI kaybetmişti, burada DAL ÜYELİĞİNİ.
    #     `walk` düzleştirir; yapı sorulacaksa `body`/`orelse` okunur.
    uretimsiz_dali = []
    for st in dal.body:
        uretimsiz_dali += _cagri_adlari(st)
    else_dali = []
    for st in dal.orelse:
        else_dali += _cagri_adlari(st)

    # dal DIŞINDA kalan, yani HER İKİ hâlde de koşan adımlar
    hepsi = _cagri_adlari(hedef)
    dal_ici = set(l for _a, l in uretimsiz_dali + else_dali)
    ortak = [(a, l) for a, l in hepsi if l not in dal_ici]

    print("① `--uretimsiz` VERİLİNCE KOŞMAYAN adımlar (`else` dalında):")
    if else_dali:
        for a, l in sorted(else_dali, key=lambda x: x[1]):
            print("   🔴 %-24s satır %d" % (a, l))
    else:
        print("   (yok)")
    print("")

    print("② `--uretimsiz` DALININ KENDİ adımları:")
    if uretimsiz_dali:
        for a, l in sorted(uretimsiz_dali, key=lambda x: x[1]):
            print("   %-24s satır %d" % (a, l))
    else:
        print("   (kos() çağrısı yok — yalnız TAZELİK KONTROLÜ var)")
    print("")

    print("③ HER İKİ HÂLDE DE KOŞAN adımlar:")
    for a, l in sorted(ortak, key=lambda x: x[1]):
        print("   🟢 %-24s satır %d" % (a, l))
    print("")

    # ── tazelik kapısı
    print("④ `--uretimsiz` DALININ TAZELİK KAPISI")
    kaynak_dal = ast.get_source_segment(kaynak, dal) or ""
    for anahtar, aciklama in (
            ("donemler.js", "hangi dosyaya bakıyor"),
            ("6", "kaç saatlik eşik")):
        pass
    import re as _re
    esik = _re.search(r"yas\s*>\s*(\d+)", kaynak_dal)
    dosya = _re.search(r'"data",\s*"([^"]+)"', kaynak_dal)
    print("   baktığı dosya : %s" % (dosya.group(1) if dosya else "?"))
    print("   eşik          : %s SAAT" % (esik.group(1) if esik else "?"))
    if esik:
        print("   🔴 ÇIKTI BU EŞİKTEN ESKİYSE ZİNCİR DURUR:")
        print("      «ÇIKTI 6 SAATTEN ESKİ — bu, bu geceki koşunun ürünü")
        print("       DEĞİL. Bayat çıktıyı yayınlamak, hiç yayınlamamaktan")
        print("       KÖTÜDÜR. DURDUM, yayın YAPILMADI.»")
        print("   ⇒ Üretim bitişi ile bu komut arasında %s SAATTEN fazla"
              % esik.group(1))
        print("     geçerse EMNİYET AĞI DA ÇALIŞMAZ.")
    print("")

    # ── MESAJ dosyası
    print("⑤ COMMIT MESAJI DOSYASI")
    m = _re.search(r'MESAJ\s*=\s*os\.path\.join\(KOK,\s*"([^"]+)",\s*"([^"]+)"',
                   kaynak)
    if m:
        yol = os.path.join(m.group(1), m.group(2))
        tam = os.path.join(KOK, yol)
        var = os.path.exists(tam)
        print("   yol : %s" % yol.replace("\\", "/"))
        print("   VAR : %s" % ("EVET" if var else "🔴 HAYIR"))
        if var:
            import datetime
            t = datetime.datetime.fromtimestamp(os.path.getmtime(tam))
            print("   mtime: %s" % t)
            with io.open(tam, encoding="utf-8", errors="replace") as f:
                ilk = f.readline().strip()
            print("   ilk satır: %s" % ilk[:66])
            yas_gun = (datetime.datetime.now() - t).days
            if yas_gun > 1:
                print("   🔴 %d GÜN ESKİ — bu mesaj BU KOŞUYU anlatmıyor."
                      % yas_gun)
                print("      Dosyanın VARLIĞI zinciri geçirir; İÇERİĞİ")
                print("      yanlış bir commit mesajı üretir. Eksik bir")
                print("      dosya GÜRÜLTÜYLE durdururdu; bayat bir dosya")
                print("      SESSİZCE yanlış yazar.")
    print("")

    # ── sahneleme kapsamı
    print("⑥ ZİNCİRİN SAHNELEYECEĞİ KAPSAM (anlık ölçüm)")
    g = subprocess.run(["git", "status", "--porcelain", "--",
                        "data", "index.html"],
                       cwd=KOK, capture_output=True, timeout=180)
    satir = [s for s in g.stdout.decode("utf-8", "replace").splitlines() if s]
    print("   pathspec: `-- data index.html` (denetim/ ve arac/ DIŞARIDA)")
    print("   şu an kirli: %d" % len(satir))
    for s in satir[:12]:
        print("      %s" % s)
    yama = [s for s in satir if "yama" in s.lower()]
    print("   ⇒ içinde YAMA dosyası: %d %s"
          % (len(yama), "🔴" if yama else "🟢"))
    print("   ⚠️ Bu bir ANLIK ölçüm. Koşu 8 bitince `data/` altındaki")
    print("     üretilmiş çıktılar da kirlenecek — o BEKLENEN. Kapsamı")
    print("     merge ANINDA yeniden sor.")
    return 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())
