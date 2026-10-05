# -*- coding: utf-8 -*-
"""EKOKUMA-0077-B — teslim edilen kart dosyasının SINAVI.

ÖNGÖRÜ (ölçümden ÖNCE yazıldı, CLAUDE.md §11):
  ① 15 kart (12 madde; H-0037 → 2, H-0052 → 2, H-0068 → 2 kart)
  ② her kartta id·tur·baslik·kisa·kesinlik·kaynak DOLU; `tur` arayüzün
     tanıdığı kümeden; savas-hikayesi kartında oncesi·akis·sonuc·tartisma,
     sebep-sonuc kartında sebep{b,t}·sonuc{b,t}, öteki türlerde metin DOLU
     (arayüz her türü farklı alandan çiziyor — boş alan = görünmeyen kart)
  ③ GELİŞTİRİCİ SESİ: 0 ihlal
  ④ `olay:` çapalarının HEPSİ canlı kronolojide var (gün + ayırt edici)
  ⑤ id'ler tekil ve mevcut ek okuma havuzuyla çakışmıyor
  ⑥ dosya JS olarak ayrıştırılabiliyor (node varsa `node --check`)
SINAV ANI: dosya yazıldıktan hemen sonra, teslimden ÖNCE.
EVREN: data/ekokuma_p77b.js + data/ekokuma*.js (kendisi hariç) +
       data/olaylar*.js + data/kronoloji*.js

İKİ YÖN (§11 — "yeni denetim iki yönde sınanmadan çalışıyor sayılmaz"):
  py denetim/EKOKUMA-0077-B-sina.py          → temiz dosya: TEMİZ beklenir
  py denetim/EKOKUMA-0077-B-sina.py --ters   → dosyanın bellekte BOZULMUŞ
     kopyası (sahte çapa + geliştirici sesi + mükerrer id + eksik alan):
     her bozulmanın AYRI AYRI yakalanması beklenir.
"""
import glob
import importlib.util
import io
import os
import re
import shutil
import subprocess
import sys

K = os.path.dirname(os.path.abspath(__file__))
_spec = importlib.util.spec_from_file_location("capa", os.path.join(K, "EKOKUMA-0076-B-capa.py"))
capa = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(capa)

KOK = os.path.dirname(K)
HEDEF = os.path.join(KOK, "data", "ekokuma_p77b.js")
DATA = os.path.join(KOK, "data")
capa.KOK = DATA  # capa.py kendi KOK'unu mutlak tasiyor; okumayi BU agaca bagla
BEKLENEN = 15
DEGISKEN = "window.EKOKUMA_P77B"
# 28 Eylül 2026 — paket 0080 kartı için: --p80b (tek kart, EKOKUMA_P80B).
# Ters yön bozulmaları p77b kartlarına göre yazılı; --p80b ile yalnız düz yön.
if "--p80b" in sys.argv:
    HEDEF, BEKLENEN, DEGISKEN = os.path.join(DATA, "ekokuma_p80b.js"), 1, "window.EKOKUMA_P80B"

TURLER = {"sebep-sonuc", "magazin", "merak", "antlasma", "tartisma",
          "teknik-bilimsel", "kimdir", "dis-yankilar", "kahramanlik",
          "menkibeler", "sok-haberler", "edebiyat", "savas-hikayesi",
          "karsi-anlati"}

SES = [(r"\bD\d{3}\b", "ders kodu"),
       (r"\bH-\d{4}\b", "madde kodu"),
       (r"\bEmre\b", "kullanıcı adı"),
       (r"bu oturum", "oturum sesi"),
       (r"data/|denetim/|arac/|js/app\.js", "dosya yolu"),
       (r"\.js\b", "dosya adı"),
       (r"\bşartname", "şartname sesi"),
       (r"\batlas\b", "atlas kelimesi")]


def kartlar(t):
    out = []
    for m in re.finditer(r'\{ id:"([^"]+)"', t):
        bas = m.start()
        son = t.find('\n{ id:"', bas + 5)
        out.append((m.group(1), t[bas:son if son > 0 else len(t)]))
    return out


def alan(blok, ad):
    m = re.search(r'(?<![\w])' + ad + r':"((?:[^"\\]|\\.)*)"', blok)
    return m.group(1) if m else None


def sina(t, etiket):
    govde = t[t.find(DEGISKEN):]
    ks = kartlar(govde)
    hata = []

    if len(ks) != BEKLENEN:
        hata.append("① kart sayısı %d (beklenen %d)" % (len(ks), BEKLENEN))
    print("① KART SAYISI:", len(ks), "✓" if len(ks) == BEKLENEN else "🔴")

    print("② ALANLAR + TÜR")
    for kid, blok in ks:
        tur = alan(blok, "tur")
        zorunlu = ["tur", "baslik", "kisa", "kesinlik", "kaynak"]
        if tur == "savas-hikayesi":
            zorunlu += ["oncesi", "akis", "sonuc", "tartisma"]
        elif tur != "sebep-sonuc":
            zorunlu += ["metin"]
        eksik = [a for a in zorunlu if not alan(blok, a)]
        if tur == "sebep-sonuc":
            for a in ("sebep", "sonuc"):
                if not re.search(a + r':\{ b:"[^"]+", t:"\d{4}-\d{2}-\d{2}" \}', blok):
                    eksik.append(a + "{b,t}")
            if "metin:" not in blok:
                eksik.append("metin")
        if "olay:[" not in blok.replace(" ", ""):
            eksik.append("olay")
        ok = not eksik and tur in TURLER
        print("   %-50s %-15s %s" % (kid, tur, "✓" if ok else "🔴 " + str(eksik)))
        if not ok:
            hata.append("② %s eksik %s / tur %s" % (kid, eksik, tur))

    print("③ GELİŞTİRİCİ SESİ (kaynak alanı hariç — künyeler orada)")
    n = 0
    for kid, blok in ks:
        temiz = re.sub(r'kaynak:"(?:[^"\\]|\\.)*"', "", blok)
        for kalip, et in SES:
            for m in re.finditer(kalip, temiz):
                n += 1
                print("   🔴 %s — %s: %s" % (kid, et, m.group(0)))
    # kaynak alanında da dosya yolu/adı olmamalı
    for kid, blok in ks:
        kay = alan(blok, "kaynak") or ""
        for kalip, et in SES[4:6]:
            for m in re.finditer(kalip, kay):
                n += 1
                print("   🔴 %s — kaynakta %s: %s" % (kid, et, m.group(0)))
    print("   ihlal:", n, "✓" if not n else "🔴")
    if n:
        hata.append("③ geliştirici sesi %d" % n)

    print("④ ÇAPALAR")
    hepsi = capa.maddeler()
    for kid, blok in ks:
        m = re.search(r'olay:\[([^\]]*)\]', blok)
        for v in (re.findall(r'"([^"]+)"', m.group(1)) if m else []):
            gun, _, ayirt = v.partition("|")
            bul = [b for d, g, b in hepsi
                   if g == gun and (not ayirt or capa.norm(ayirt) in capa.norm(b))]
            print("   %-50s %-28s %s" % (kid, v, ("✓ " + bul[0][:48]) if bul else "🔴 ÇAPA YOK"))
            if not bul:
                hata.append("④ %s çapa yok: %s" % (kid, v))

    print("⑤ ID TEKİLLİĞİ VE HAVUZ")
    idler = [k for k, _ in ks]
    tekrar = sorted(set(x for x in idler if idler.count(x) > 1))
    havuz = set()
    for yol in glob.glob(os.path.join(DATA, "ekokuma*.js")):
        if os.path.basename(yol) == os.path.basename(HEDEF):
            continue
        havuz |= set(re.findall(r'\bid:"([^"]+)"', io.open(yol, encoding="utf-8").read()))
    cak = sorted(set(idler) & havuz)
    print("   dosya içi mükerrer:", tekrar or "yok", "· havuzla çakışan:", cak or "yok",
          "· havuz:", len(havuz))
    if tekrar:
        hata.append("⑤ mükerrer %s" % tekrar)
    if cak:
        hata.append("⑤ havuz çakışması %s" % cak)

    print("⑥ JS SÖZDİZİMİ")
    node = shutil.which("node")
    if not node:
        print("   ölçülemedi — node yok")
    else:
        gecici = os.path.join(os.environ.get("TEMP", K), "p77b_%s.js" % etiket)
        io.open(gecici, "w", encoding="utf-8").write(t)
        r = subprocess.run([node, "--check", gecici], capture_output=True, text=True)
        print("   node --check:", "✓" if r.returncode == 0 else "🔴 " + r.stderr[:300])
        if r.returncode != 0:
            hata.append("⑥ sözdizimi")
    return hata


def main():
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    if not capa.sina():
        print("🔴 çapa tarayıcısının kendi sınavı kaldı — sayı yayımlanmaz")
        return 1
    t = io.open(HEDEF, encoding="utf-8").read()
    if "--ters" not in sys.argv:
        hata = sina(t, "temiz")
        print("\nSONUÇ:", "TEMİZ ✓" if not hata else "🔴 %d KUSUR" % len(hata))
        for h in hata:
            print("  ", h)
        return 0 if not hata else 1
    # TERS YÖN: dört ayrı bozulma, her biri ayrı yakalanmalı
    bozuk = t
    bozuk = bozuk.replace('olay:["1921-09-13|Sakarya"]', 'olay:["1921-09-14|Sakarya"]', 1)
    bozuk = bozuk.replace('kisa:"Medine\'yi', 'kisa:"H-0051 Medine\'yi', 1)
    bozuk = bozuk.replace('{ id:"p77b-misak-i-milli-nedir"', '{ id:"p77b-sakarya-meydan-muharebesi-1921"', 1)
    bozuk = re.sub(r'(id:"p77b-istanbulun-resmi-isgali-1920-sebep-sonuc"[\s\S]*?)sebep:\{', r'\1sebepX:{', bozuk, count=1)
    hata = sina(bozuk, "ters")
    beklenen = {"④": "sahte çapa", "③": "geliştirici sesi", "⑤": "mükerrer id", "②": "eksik alan"}
    yakalanan = {k: any(h.startswith(k) for h in hata) for k in beklenen}
    print("\nTERS YÖN:")
    for k, v in beklenen.items():
        print("   %s %-18s %s" % (k, v, "✓ yakalandı" if yakalanan[k] else "🔴 KAÇTI"))
    return 0 if all(yakalanan.values()) else 1


if __name__ == "__main__":
    sys.exit(main())
