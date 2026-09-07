# -*- coding: utf-8 -*-
u"""YAYIN KAPISI TABANI — 11 ret şartının hangisi, NİÇİN ötüyor?

    SINAV-KOSU8-0907 · sevk: 1.MURAT · 7 Eylül 2026 · 🔴 SALT OKUR

`arac/denetle_yayin.py` bu oturumda bir kez bile koşturulmamıştı ve
zincirin **son** halkası. Bugün beş uygulayıcıdan ikisinin hiç
koşmadığı ölçüldü; kapı da öyleyse merge gecesi 05:00'te anlaşılır.

Soru *"kapı geçiyor mu"* DEĞİL — geçmeyecek, çıktı bayat, bu
**beklenen.** Soru:
```
① Kapı KOŞUYOR mu?
② Kaç ret şartı var, hangileri ATEŞLİYOR?
③ Her ateşleyen şart: BAYAT ÇIKTI yüzünden mi (⇒ koşu 8 inince
   kendiliğinden susar) yoksa KOŞU BUNU ÇÖZMEZ mi?
```
③ ayrımı işin tamamı. Tek sayıda toplanırsa merge gecesinde *"kapı
ötüyor"* denir ve hangisinin beklediği bilinmez.

## VE DÖRDÜNCÜ SORU — KAPININ KENDİSİ SORMUYOR
Kapı *"çıktı girdiden geride mi"* diye sorar. Sormadığı şey:
***girdi, KOŞU BAŞLADIKTAN SONRA mı değişti?*** Değiştiyse koşu 8'in
çıktısı **doğduğu anda bayat** olur — `§7`de adıyla kayıtlı vaka:
*"koşu 10 saat 35 dakika çalıştı, temiz bitti, ve yayın kapısı
reddetti."* Bu alet o soruyu **koşu bitmeden** soruyor.

    py denetim/SINAV-KOSU8-KAPI-0907.py
Bu alet hiçbir dosyaya yazmaz ve kapıyı DEĞİŞTİRMEZ.
"""
from __future__ import unicode_literals

import datetime
import io
import os
import re
import subprocess
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KAPI = os.path.join(KOK, "arac", "denetle_yayin.py")

# `main()`in 1356. satırındaki ret zinciri — ADIYLA, tahminle değil.
SARTLAR = ["yoklar", "izlenmeyenler", "kayitsiz", "damgalar>1",
           "damga_ihlali", "bayat", "izsiz", "iz_bayat", "_sz",
           "_bagli", "_dizinsiz"]

# Her şartı ÇIKTIDAKİ satırına bağlayan desen. Kapının kendi
# `durum` değişkenlerinden okundu (satır 814 · 819 · 1112 · 1154 ·
# 1162 · 1193 · 1222 · 1261 · 1283 · 1341).
ESLEME = [
    ("yoklar",       r"diskte HİÇ YOK: (\d+)"),
    ("izlenmeyenler", r"GIT'TE İZLENMİYOR: (\d+)"),
    ("kayitsiz",     r"yetim veri dosyası: (\d+) /"),
    ("damgalar>1",   r"sürüm damgası: (r\d+)"),
    ("damga_ihlali", r"ÇALIŞMA AĞACI: (\d+) kod dosyası"),
    ("bayat",        r"YAYIN BAYAT"),
    ("izsiz",        r"üretim izi:.*izsiz (\d+)"),
    ("iz_bayat",     r"üretim izi:.*bayat (\d+)"),
    ("_sz",          r"inline sözdizimi: (\d+) <script>"),
    ("_bagli",       r"iki kapı da aynı dosyaları tanıyor"),
    ("_dizinsiz",    r"dizinsiz harita kimliği: (\d+)"),
]


def kos_kapi():
    p = subprocess.run(["py", KAPI], cwd=KOK, capture_output=True,
                       timeout=1800)
    return p.returncode, p.stdout.decode("utf-8", "replace")


def ret_yollari():
    u"""Kapının ret yolu GERÇEKTEN tek mi? `main()`in return'leri sayılır."""
    with io.open(KAPI, encoding="utf-8") as f:
        kaynak = f.read()
    i = kaynak.find("\ndef main(")
    govde = kaynak[i:] if i >= 0 else ""
    # 🔴 `\n    return` YAZMA: `return 1` bir `if`in İÇİNDE, SEKİZ boşlukla
    #   girintili. İlk yazımda dört boşluk arandı, `return 1` bulunamadı,
    #   ve alet «BİRDEN ÇOK ret yolu — 11 sayısı EKSİK» diye YANLIŞ ALARM
    #   verdi. Girinti derinliği bir SÖZLEŞME değil; `\s+` kullanılır.
    donusler = re.findall(r"\n\s+return\s+(\S+)", govde)
    cikislar = re.findall(r"sys\.exit\(", kaynak)
    return donusler, len(cikislar)


def kosu_baslangici():
    u"""uret_petek.py sürecinin başlangıç anı — beyandan değil SÜREÇTEN."""
    ps = ("Get-CimInstance Win32_Process -Filter \"Name like 'python%'\" | "
          "Where-Object { $_.CommandLine -like '*uret_petek*' } | "
          "ForEach-Object { $_.CreationDate.ToString('yyyy-MM-dd HH:mm:ss') }")
    p = subprocess.run(["powershell", "-NoProfile", "-Command", ps],
                       capture_output=True, timeout=180)
    s = p.stdout.decode("utf-8", "replace").strip().splitlines()
    if not s:
        return None
    return datetime.datetime.strptime(s[0].strip(), "%Y-%m-%d %H:%M:%S")


def girdi_dosyalari():
    p = subprocess.run(
        ["py", "-c",
         "import sys;sys.path.insert(0,'arac');import girdi;"
         "print('@@'+'|'.join(girdi.GIRDI_DOSYALARI))"],
        cwd=KOK, capture_output=True, timeout=600)
    s = p.stdout.decode("utf-8", "replace")
    if "@@" not in s:
        return None
    return [x for x in s.split("@@", 1)[1].strip().split("|") if x]


def main():
    print("═" * 78)
    print("YAYIN KAPISI TABANI — `arac/denetle_yayin.py`")
    print("═" * 78)

    # ── ② ret yolu gerçekten tek mi
    donusler, n_exit = ret_yollari()
    print("② RET YOLU")
    print("   main() içindeki return: %s" % ", ".join(donusler))
    print("   sys.exit çağrısı      : %d" % n_exit)
    tek = donusler.count("1") == 1
    print("   ⇒ %s"
          % ("🟢 TEK ret yolu — 1356'daki 11 şartlık zincir"
             if tek else
             "🔴 BİRDEN ÇOK ret yolu — 11 sayısı EKSİK"))
    print("")

    # ── ① kapı koşuyor mu
    print("① KAPI KOŞUYOR MU")
    kod, cikti = kos_kapi()
    satir = len(cikti.splitlines())
    print("   çıkış kodu: %d · çıktı: %d satır" % (kod, satir))
    if satir < 5:
        print("   🔴 KAPI ÖLDÜ ya da hiçbir şey basmadı — çıktı:")
        print(cikti[:600])
        return 2
    print("   🟢 koşuyor ve gövdeyi basıyor")
    print("")

    # ── ② hangileri ateşliyor
    print("② HANGİ ŞART ATEŞLİYOR")
    atesleyen = []
    for ad, desen in ESLEME:
        m = re.search(desen, cikti)
        if m is None:
            print("   ⚫ %-14s ÇIKTIDA SATIRI YOK — «geçti» SAYILMAZ" % ad)
            atesleyen.append((ad, "ölçülemedi"))
            continue
        deger = m.group(1) if m.groups() else ""
        # 🟢 ÖTÜP ÖTMEDİĞİNİ TAHMİN ETME — KAPININ KENDİ İŞARETİNİ OKU.
        #   Kapı her satıra `durum` değişkeninden bir ✓/✗ basıyor
        #   (satır 814 · 819 · 1112 · 1164 · 1222 · …). O işaret,
        #   değişkenin doğruluk değerinin ta kendisi; sayıyı yeniden
        #   yorumlamak, aletin cevabını YANLIŞ YERDEN okumaktır.
        bas = cikti.rfind("\n", 0, m.start()) + 1
        isaret = cikti[bas:bas + 2].strip()
        if ad in ("izsiz", "iz_bayat"):
            # tek satır İKİ değişkeni birden raporluyor ⇒ sayıya bakılır
            oter = deger not in ("0", "")
        elif isaret in ("✓", "✗"):
            oter = (isaret == "✗")
        elif ad == "damgalar>1":
            oter = len(set(re.findall(r"\?v=(r\d+)", _index()))) > 1
        elif ad == "_bagli":
            oter = "SONUÇ: TEMİZ" not in cikti
        else:
            oter = deger not in ("0", "")
            isaret = "(işaretsiz)"
        deger = "%s  %s" % (isaret, deger)
        print("   %s %-14s %s" % ("🔴 ÖTÜYOR " if oter else "🟢 sessiz  ",
                                  ad, deger))
        if oter:
            atesleyen.append((ad, deger))
    print("   ⇒ %d / %d şart ötüyor"
          % (len([a for a in atesleyen if a[1] != "ölçülemedi"]),
             len(SARTLAR)))
    print("")

    # ── ④ girdi koşu BAŞLADIKTAN SONRA değişti mi
    print("④ GİRDİ, KOŞU BAŞLADIKTAN SONRA DEĞİŞTİ Mİ?")
    print("   (kapı bunu SORMUYOR — `§7`: koşu sürerken `data/` DONUK)")
    bas = kosu_baslangici()
    if bas is None:
        print("   ⚫ ÖLÇÜLEMEDİ — koşan `uret_petek` süreci bulunamadı.")
        print("   ⚠️ Bu «temiz» DEĞİL: koşu bitmişse ayrıca ölçülmeli.")
    else:
        print("   koşu başlangıcı (SÜREÇ damgası): %s" % bas)
        dosyalar = girdi_dosyalari()
        if dosyalar is None:
            print("   ⚫ `girdi.GIRDI_DOSYALARI` okunamadı")
        else:
            sonra = []
            for d in dosyalar:
                t = os.path.join(KOK, d if "/" in d or "\\" in d
                                 else os.path.join("data", d))
                if not os.path.exists(t):
                    t = os.path.join(KOK, "data", os.path.basename(d))
                if not os.path.exists(t):
                    continue
                m = datetime.datetime.fromtimestamp(os.path.getmtime(t))
                if m > bas:
                    sonra.append((os.path.basename(t), m))
            print("   girdi dosyası: %d" % len(dosyalar))
            if sonra:
                print("   🔴 KOŞU BAŞLADIKTAN SONRA DEĞİŞEN: %d" % len(sonra))
                for ad, m in sorted(sonra, key=lambda x: x[1]):
                    print("      %-42s %s" % (ad, m))
                print("   ⇒ ÇIKTI DOĞDUĞU ANDA BAYAT OLUR. `§7`de kayıtlı")
                print("     vaka: 10s35dk koşu temiz bitti, kapı REDDETTİ.")
            else:
                print("   🟢 koşu başladıktan sonra değişen girdi: 0")
                print("     ⇒ çıktı taze doğacak (bu ölçüm ANLIKTIR;")
                print("       koşu bitene kadar yeniden sorulmalı)")
    print("")

    print("─" * 78)
    print("⚠️ SINIR: bu alet şartları ÇIKTIDAN okur. Bir şartın satırı")
    print("   yoksa `ölçülemedi` yazar — «geçti» SAYMAZ. `0`, «yok» ile")
    print("   «bakmadım» arasında ayrım yapmaz.")
    return 0


def _index():
    with io.open(os.path.join(KOK, "index.html"), encoding="utf-8",
                 errors="replace") as f:
        return f.read()


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())
