# -*- coding: utf-8 -*-
"""EKOKUMA-0076-B — teslim edilen kart dosyasının SINAVI.

ÖNGÖRÜ (ölçümden ÖNCE yazıldı, ORTAK-0076 §4 ⑤):
  ① 14 kart · her kartta id·tur·ad·kisa·metin·kesinlik·olay·kaynak DOLU
  ② `tur` değerlerinin hepsi arayüzün tanıdığı kümeden
  ③ GELİŞTİRİCİ SESİ: 0 ihlal (dosya adı · D### · H-#### · 'Emre' ·
     'bu oturum' · dosya yolu · 'atlas' kelimesi kart gövdesinde)
  ④ `olay:` çapalarının HEPSİ canlı kronolojide var (gün + ayırt edici)
  ⑤ id'ler tekil ve mevcut ek okuma havuzuyla çakışmıyor
SINAV ANI: dosya yazıldıktan hemen sonra, koordinatöre teslimden ÖNCE.
EVREN: denetim/EKOKUMA-0076-B-YAMA-ekokuma_p76c.js + data/ekokuma*.js +
       data/olaylar*.js + data/kronoloji*.js
"""
import glob
import io
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import importlib.util

_spec = importlib.util.spec_from_file_location(
    "capa", os.path.join(os.path.dirname(os.path.abspath(__file__)),
                         "EKOKUMA-0076-B-capa.py"))
capa = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(capa)

YAMA = r"C:\atlas\denetim\EKOKUMA-0076-B-YAMA-ekokuma_p76c.js"
DATA = r"C:\atlas\data"

TURLER = {"sebep-sonuc", "magazin", "merak", "antlasma", "tartisma",
          "teknik-bilimsel", "kimdir", "dis-yankilar", "kahramanlik",
          "menkibeler", "sok-haberler", "edebiyat", "savas-hikayesi",
          "karsi-anlati"}

# Geliştirici sesi kalıpları — kart GÖVDESİNDE (yorum satırlarında değil)
SES = [(r"\bD\d{3}\b", "ders kodu"),
       (r"\bH-\d{4}\b", "madde kodu"),
       (r"\bEmre\b", "kullanıcı adı"),
       (r"bu oturum", "oturum sesi"),
       (r"data/|denetim/|arac/|js/app\.js", "dosya yolu"),
       (r"\.js\b", "dosya adı"),
       (r"\bşartname", "şartname sesi")]


def kartlar(t):
    """Kart bloklarını kabaca ayır — `{ id:"` ile başlayanlar."""
    out = []
    for m in re.finditer(r'\{ id:"([^"]+)"', t):
        bas = m.start()
        son = t.find('\n{ id:"', bas + 5)
        out.append((m.group(1), t[bas:son if son > 0 else len(t)]))
    return out


def alan(blok, ad):
    m = re.search(r'\b' + ad + r':"((?:[^"\\]|\\.)*)"', blok)
    return m.group(1) if m else None


def main():
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    t = io.open(YAMA, encoding="utf-8").read()
    # yorum başlığını ayır: kart gövdesi `window.EKOKUMA_P76C = [` sonrası
    i = t.find("window.EKOKUMA_P76C")
    govde = t[i:]
    ks = kartlar(govde)
    hata = 0

    print("① KART SAYISI:", len(ks), "(beklenen 14)",
          "✓" if len(ks) == 14 else "🔴")
    hata += 0 if len(ks) == 14 else 1

    print("② ZORUNLU ALANLAR + TÜR")
    for kid, blok in ks:
        eksik = [a for a in ("tur", "ad", "kisa", "metin", "kesinlik", "kaynak")
                 if not alan(blok, a)]
        tur = alan(blok, "tur")
        ok = not eksik and tur in TURLER and 'olay:[' in blok.replace(" ", "")
        print("   %-46s %-16s %s" % (kid, tur, "✓" if ok else "🔴 " + str(eksik)))
        if not ok:
            hata += 1

    print("③ GELİŞTİRİCİ SESİ")
    toplam = 0
    for kid, blok in ks:
        for kalip, etiket in SES:
            for m in re.finditer(kalip, blok):
                # `kaynak:` alanındaki akademik künyeler serbest DEĞİL:
                # dosya adı/kod hiçbir alanda geçmemeli.
                toplam += 1
                print("   🔴 %s — %s: %s" % (kid, etiket, m.group(0)))
    print("   ihlal:", toplam, "✓" if not toplam else "🔴")
    hata += 1 if toplam else 0

    print("④ ÇAPALAR")
    if not capa.sina():
        print("   🔴 çapa tarayıcısı sınavı kaldı — sayı yayımlanmaz")
        hata += 1
    else:
        hepsi = capa.maddeler()
        for kid, blok in ks:
            m = re.search(r'olay:\[([^\]]*)\]', blok)
            degerler = re.findall(r'"([^"]+)"', m.group(1)) if m else []
            for v in degerler:
                gun, _, ayirt = v.partition("|")
                bul = [b for d, g, b in hepsi
                       if g == gun and (not ayirt or capa.norm(ayirt) in capa.norm(b))]
                print("   %-46s %-28s %s" % (kid, v,
                      ("✓ " + bul[0][:52]) if bul else "🔴 ÇAPA YOK"))
                if not bul:
                    hata += 1

    print("⑤ ID TEKİLLİĞİ VE HAVUZ ÇAKIŞMASI")
    idler = [k for k, _ in ks]
    tekrar = set(x for x in idler if idler.count(x) > 1)
    print("   dosya içi mükerrer:", tekrar or "yok",
          "✓" if not tekrar else "🔴")
    hata += 1 if tekrar else 0
    havuz = set()
    for yol in glob.glob(os.path.join(DATA, "ekokuma*.js")):
        havuz |= set(re.findall(r'\bid:"([^"]+)"',
                                io.open(yol, encoding="utf-8").read()))
    cakisma = set(idler) & havuz
    print("   mevcut havuzla çakışan:", cakisma or "yok",
          "✓" if not cakisma else "🔴", "· havuz boyu:", len(havuz))
    hata += 1 if cakisma else 0

    print("\nSONUÇ:", "TEMİZ ✓" if not hata else "🔴 %d KUSUR" % hata)
    return 0 if not hata else 1


if __name__ == "__main__":
    sys.exit(main())
