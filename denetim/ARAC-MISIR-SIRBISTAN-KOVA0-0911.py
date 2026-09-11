# -*- coding: utf-8 -*-
"""
ARAC-MISIR-SIRBISTAN-KOVA0-0911.py — 11 Eylül 2026

NE YAPAR: `denetim/ARAC-KRONOLOJI-KUNYE-0911.py`nin bulduğu "misir" ve
"sirbistan" ailelerindeki kova-0 (GERÇEK BOŞLUK) maddelerinin TAM METNİNİ
döker ve HER BİRİNİ mevcut devletler.js'teki TÜM künyelere (yalnız o
ailenin dar aday listesine DEĞİL) karşı ikinci kez sınar.

NİÇİN: sibling aracı (ARAC-KRONOLOJI-KUNYE-0911.py) her aile için DAR bir
aday listesi kullanıyor (AILE2 sözlüğü, örn. misir=["memluk",
"misir-kavalali"]). Bir madde bu dar listenin HİÇBİRİNE düşmüyorsa
"gerçek boşluk" sayılıyor — AMA aslında devletler.js'te o tarihi kapsayan
BAŞKA bir künye (dar listede unutulmuş) olabilir.

🔴 İLK SÜRÜM BİR REGEX HATASI TAŞIYORDU — kayıt: ilk taslak
   `id:"..."(.*?)f:"..."(.*?)t:"..."` düzenli ifadesi devletler.js'teki
   `kid:"..."` alanlarını da (`v:[{...,kid:"sirbistan-prensligi"}]` gibi
   vassal-referans alanları) "id:" gibi eşleştiriyordu ve HEMEN HEMEN HER
   künye "eşleşiyor" gibi göründü (140+ sahte pozitif). D107/D043 gereği
   BU İTİRAF EDİLİYOR — düzeltme: devletler.js artık Node.js'in KENDİ
   JS motoruyla (`eval`) doğru nesne modeline göre okunuyor, regex'le
   DEĞİL. Python yalnız kronoloji dosyalarındaki düz `t:"YYYY-MM-DD"`
   tarihlerini taramak için kullanılıyor (o dosyalarda "id:" alanı yok,
   risk yok).

SADECE OKUR. `data/`ye YAZMAZ.
"""
import io
import json
import re
import subprocess
import sys

ROOT = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"

AILE2 = {
    "misir": ["memluk", "misir-kavalali"],
    "sirbistan": ["sirbistan-nemanjic", "sirp-despotlugu",
                  "sirbistan-prensligi", "sirbistan-kralligi"],
}


def gun_no(s):
    y, a, g = s.split("-")
    return int(y) * 372 + int(a) * 31 + int(g)


def tum_kunyeler_node():
    """devletler.js'i Node.js'in KENDİ JS motoruyla oku (regex değil) —
    her künyenin GERÇEK f/t alanını, iç içe kid:/tabi: alanlarıyla
    KARIŞTIRMADAN döndürür."""
    js = (
        "global.window={};"
        "eval(require('fs').readFileSync(process.argv[1],'utf8'));"
        "const D=window.DEVLETLER;"
        "const out={};"
        "for (const d of D) out[d.id]=[d.f,d.t,d.bolge||''];"
        "console.log(JSON.stringify(out));"
    )
    p = subprocess.run(["node", "-e", js, ROOT + r"\data\devletler.js"],
                        capture_output=True, text=True, encoding="utf-8")
    if p.returncode != 0:
        raise RuntimeError("node basarisiz: " + p.stderr)
    return json.loads(p.stdout)


# 🔴 İKİNCİ DÜZELTME — "aynı bölge" ölçütü de yanlış çıktı (D107/D043):
# `bolge:"misir-sudan"` etiketi Mısır'ın YANI SIRA Sudan'daki bağımsız
# devletleri de (funj, darfur, tunciler) taşıyor — bunlar Mısır'ın ARDIL
# KİMLİĞİ değil, aynı geniş bölgede yaşayan AYRI ülkeler. "Aynı bölgede
# var olmak", "doğru adres olmak" ile AYNI ŞEY DEĞİL. Bu yüzden geniş
# bölge taraması TERK EDİLDİ; yerine yalnız GERÇEK ARDIL/HALEF kimlikler
# (aynı ülkenin bir SONRAKİ resmî evresi) ELLE, isimle belirlendi:
ARDIL_KIMLIKLER = {
    "misir": ["misir-sultanligi", "misir-kralligi"],   # Mısır'ın 1914 sonrası resmî devamı
    "sirbistan": ["yugoslavya"],                        # Sırbistan'ın 1918'deki hukuki devamı
}


def madde_dokup_sina(aile, tum):
    dar_ids = AILE2[aile]
    dar_aday = {i: tuple(tum[i][:2]) for i in dar_ids if i in tum}
    eksik = [i for i in dar_ids if i not in tum]
    if eksik:
        print(f"  UYARI: {aile} icin devletler.js'te bulunamayan id -> {eksik}")
    ilgili_ids = [i for i in ARDIL_KIMLIKLER[aile] if i in tum]

    txt = open(ROOT + r"\data\kronoloji_%s.js" % aile, encoding="utf-8").read()
    n_kova0, n_yanlis_adres, n_gercek_bosluk = 0, 0, 0
    gercek_liste = []
    for m in re.finditer(r'\{\s*t:"(\d{4}-\d{2}-\d{2})"', txt):
        t = m.group(1)
        gt = gun_no(t)
        dar_eslesen = [i for i, v in dar_aday.items()
                       if gun_no(v[0]) <= gt < gun_no(v[1])]
        if dar_eslesen:
            continue
        n_kova0 += 1
        snippet = txt[m.start():m.start() + 220]
        bm = re.search(r'b:"([^"]*)"', snippet)
        b = bm.group(1) if bm else "?"
        genis_eslesen = [i for i in ilgili_ids
                         if tum[i][0] and tum[i][1]
                         and gun_no(tum[i][0]) <= gt < gun_no(tum[i][1])]
        if genis_eslesen:
            n_yanlis_adres += 1
            print(f"  ⚠️ YANLIŞ ADRES  {t} | {b[:70]}")
            print(f"      -> aslında: {genis_eslesen}")
        else:
            n_gercek_bosluk += 1
            gercek_liste.append((t, b))
            print(f"  ✓ gerçek boşluk {t} | {b[:70]}")
    print(f"\n{aile}: kova0={n_kova0}  yanlış-adres={n_yanlis_adres}  "
          f"GERÇEK BOŞLUK={n_gercek_bosluk}")
    return n_gercek_bosluk, gercek_liste


if __name__ == "__main__":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
    tum = tum_kunyeler_node()
    toplam = 0
    for aile in ("misir", "sirbistan"):
        print(f"=== {aile} ===")
        n, _ = madde_dokup_sina(aile, tum)
        toplam += n
        print()
    print(f"TOPLAM GERÇEK BOŞLUK (misir+sirbistan): {toplam}")
