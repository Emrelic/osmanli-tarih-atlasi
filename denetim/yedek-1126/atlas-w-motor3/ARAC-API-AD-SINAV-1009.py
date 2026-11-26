# -*- coding: utf-8 -*-
"""API-AD-1009 — geride kalmış daldan gelen dosya, hedef modülde OLMAYAN ad çağırıyor mu.

Vaka (9 Ekim 2026): `arac/tahta_sunucu.py` `makine/umit-tahtaweb` dalından
(main'in ~970 commit gerisi) geldi; `tahta.py`den 13 ad kullanıyordu, 5'i
main'de YOKTU (`_yaz_ekle` · `_yaz_hazirla` · `_teyit_uygula` · `_tamam_uygula`
· `_kapat_uygula`). Sunucu ayağa kalkıyor, okuyordu; ilk yazmada AttributeError.
İçe aktarma bunu YAKALAMAZ (öznitelik çağrı anında çözülür) ⇒ AST ile sorulur.

KULLANIM:
  py denetim/ARAC-API-AD-SINAV-1009.py <dosya> <modül.py> [takma_ad]
      dosyadaki `<takma_ad>.<ad>` erişimlerini çıkarır (takma ad verilmezse
      `import <modül> as X` satırından bulunur), modülün ÜST DÜZEY adlarında
      (def/class/atama/import) arar. Çıkış 0 = hepsi var · 1 = eksik var ·
      2 = ÖLÇÜLEMEDİ (dosya yok / ayrıştırılamadı / takma ad bulunamadı).
  py denetim/ARAC-API-AD-SINAV-1009.py --sina
      İKİ YÖN: dal sürümü (git show origin/makine/umit-tahtaweb) → 1 beklenir
      (5 eksik, adlarıyla) · çalışma ağacındaki sürüm → 0 beklenir.
⚠️ Kapsam: yalnız `takma_ad.ad` biçimi; `getattr(T, "ad")` ve `from m import ad`
   bu sınavın evreninde DEĞİL (ikisi de basılır, sayılır).
"""
import ast
import io
import os
import subprocess
import sys
import tempfile

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def ust_adlar(agac):
    ad = set()
    for n in agac.body:
        if isinstance(n, (ast.FunctionDef, ast.AsyncFunctionDef, ast.ClassDef)):
            ad.add(n.name)
        elif isinstance(n, (ast.Assign, ast.AnnAssign, ast.AugAssign)):
            hedefler = n.targets if isinstance(n, ast.Assign) else [n.target]
            for t in hedefler:
                for x in ast.walk(t):
                    if isinstance(x, ast.Name):
                        ad.add(x.id)
        elif isinstance(n, (ast.Import, ast.ImportFrom)):
            for a in n.names:
                ad.add((a.asname or a.name).split(".")[0])
        elif isinstance(n, (ast.If, ast.Try)):        # koşullu tanımlar
            for x in ast.walk(n):
                if isinstance(x, (ast.FunctionDef, ast.ClassDef)):
                    ad.add(x.name)
                elif isinstance(x, ast.Name) and isinstance(x.ctx, ast.Store):
                    ad.add(x.id)
    return ad


def takma_ad_bul(agac, modul):
    for n in ast.walk(agac):
        if isinstance(n, ast.Import):
            for a in n.names:
                if a.name == modul:
                    return a.asname or a.name
    return None


def denetle(dosya_metni, modul_yolu, takma=None, etiket=""):
    """(kod, eksik_liste, kullanilan_liste)"""
    try:
        agac = ast.parse(dosya_metni)
        hedef = ast.parse(io.open(modul_yolu, encoding="utf-8").read())
    except Exception as e:                                  # noqa: BLE001
        print("ÖLÇÜLEMEDİ: %s" % e)
        return 2, [], []
    modul = os.path.splitext(os.path.basename(modul_yolu))[0]
    takma = takma or takma_ad_bul(agac, modul)
    if not takma:
        print("ÖLÇÜLEMEDİ: `import %s` bulunamadı (takma ad ver)" % modul)
        return 2, [], []
    # dosyanın KENDİSİNİN modüle atadığı adlar (T.x = ...) — onlar çağrı değil
    atanan = {t.attr for n in ast.walk(agac) if isinstance(n, ast.Assign)
              for t in n.targets if isinstance(t, ast.Attribute)
              and isinstance(t.value, ast.Name) and t.value.id == takma}
    kullan = sorted({n.attr for n in ast.walk(agac) if isinstance(n, ast.Attribute)
                     and isinstance(n.value, ast.Name) and n.value.id == takma})
    var = ust_adlar(hedef)
    eksik = [a for a in kullan if a not in var and a not in atanan]
    kapsam_disi = sum(1 for n in ast.walk(agac) if isinstance(n, ast.Call)
                      and isinstance(n.func, ast.Name) and n.func.id == "getattr"
                      and n.args and isinstance(n.args[0], ast.Name) and n.args[0].id == takma)
    print("%s%s.* kullanılan %d ad · %s'de var %d · EKSİK %d%s" % (
        etiket, takma, len(kullan), os.path.basename(modul_yolu), len(kullan) - len(eksik),
        len(eksik), (" · getattr(%s, …) %d (kapsam dışı)" % (takma, kapsam_disi))
        if kapsam_disi else ""))
    for a in eksik:
        print("   EKSİK  %s.%s" % (takma, a))
    return (1 if eksik else 0), eksik, kullan


def sina():
    modul = os.path.join(KOK, "arac", "tahta.py")
    hata = 0
    r = subprocess.run(["git", "-C", KOK, "show", "origin/makine/umit-tahtaweb:arac/tahta_sunucu.py"],
                       capture_output=True)
    if r.returncode != 0:
        print("HATA: dal sürümü okunamadı — ÖLÇÜLEMEDİ")
        return 2
    kod, eksik, kullan = denetle(r.stdout.decode("utf-8"), modul, etiket="[ESKİ] ")
    bek = ["_kapat_uygula", "_tamam_uygula", "_teyit_uygula", "_yaz_ekle", "_yaz_hazirla"]
    ok = kod == 1 and eksik == bek and len(kullan) == 13
    print(("  OK   " if ok else "  HATA ") + "ESKİ sunucu FAIL (13 ad, 5 eksik, adlarıyla)")
    hata += not ok
    yeni = io.open(os.path.join(KOK, "arac", "tahta_sunucu.py"), encoding="utf-8").read()
    kod, eksik, _ = denetle(yeni, modul, etiket="[YENİ] ")
    ok = kod == 0
    print(("  OK   " if ok else "  HATA ") + "YENİ sunucu PASS (eksik 0)")
    hata += not ok
    # ölçülemedi yönü: takma ad yok → 2 (temiz SAYILMAZ)
    kod, _, _ = denetle("x = 1\n", modul, etiket="[BOŞ] ")
    ok = kod == 2
    print(("  OK   " if ok else "  HATA ") + "import'suz dosya → 2 ÖLÇÜLEMEDİ (temiz değil)")
    hata += not ok
    print("SONUÇ: %d/3" % (3 - hata))
    return 1 if hata else 0


def main(argv):
    if argv[:1] == ["--sina"]:
        return sina()
    if len(argv) < 2:
        print(__doc__)
        return 2
    if not os.path.exists(argv[0]):
        print("ÖLÇÜLEMEDİ: %s yok" % argv[0])
        return 2
    metin = io.open(argv[0], encoding="utf-8").read()
    return denetle(metin, argv[1], argv[2] if len(argv) > 2 else None)[0]


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
