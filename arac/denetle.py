# -*- coding: utf-8 -*-
"""
DENETLE — üç değişmezin toplu denetimi
=======================================
CLAUDE.md §3'teki üç node tek-satırlığını tek script'te toplar. Her oturum
kendi başına kopyala-yapıştır yapmak yerine bunu çalıştırır.

Değişmez 1 — sahipsizlik yok        (data/yerlesimler.js)
Değişmez 2 — sessiz toprak değişimi yok  (yerlesimler.js × olaylar*.js)
Değişmez 3 — dört boyut çelişmez (bilinen borç, sayı artmamalı)

Kullanım:
    py arac/denetle.py            # üçünü de koştur, özet bas
    py arac/denetle.py --ayrinti  # her ihlali tek tek listele

İhlal varsa çıkış kodu sıfırdan farklıdır (Değişmez 1: sahipsiz > beklenen;
Değişmez 2: açık > 0; Değişmez 3: çelişki > beklenen üst sınır).
"""
import argparse
import glob
import io
import json
import os
import re
import sys
from datetime import date

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KOK, "data")

# Bugün doğru kabul edilen sayılar — CLAUDE.md §3 ile aynı. Sapma varsa uyar.
BEKLENEN_YERLESIM = 567
BEKLENEN_SAHIPSIZ = 29
BEKLENEN_KIRILMA = 424
BEKLENEN_ACIK = 0
# MIMARI.md §3.4 — bilinen borç, tavan bu. 311'den 318'e çıkarıldı: beylik
# düzeltmesiyle 19 yerleşim eklendi (567 -> 586) ve 11'i bu borcu tetikliyor.
# Ölçüldü, indirilemez: m alanının zaman boyutu yok, bir yerleşim bütün tarih
# boyunca tek merkeze bağlı. Birgi/Tire/Ayasuluk m:"İzmir" — ama İzmir 1344-1402
# arası St. Jean Şövalyeleri'nde, Birgi Osmanlı'da. Hangi merkez seçilirse
# seçilsin bir dönemde çelişiyor. Gerçek çözüm zamanlı kd: alanı (VERI-YAPISI).
# 318 -> 325: Likya kıyısı (3) ve Batı Karadeniz (7) noktaları eklendi.
BEKLENEN_CELISKI_UST_SINIR = 325


def oku_pencere(yol, degisken):
    """`window.<degisken> = [ ... ];` biçimindeki dosyayı JSON'a çevirip döker.
    Yöntem uret_petek.py'nin 274-281. satırlarından birebir alınmıştır."""
    js = open(yol, encoding="utf-8").read()
    js = "\n".join(l for l in js.split("\n") if not l.strip().startswith("//"))
    anahtar = f"window.{degisken} = "
    govde = js[js.index(anahtar) + len(anahtar):]
    govde = govde[:govde.rindex("]") + 1]
    j = re.sub(r'([{,]\s*)([A-Za-zçğıöşüÇĞİÖŞÜ_]\w*)\s*:', r'\1"\2":', govde)
    # JS dizi/nesne sonundaki fazladan virgul gecerlidir, JSON'da degildir.
    # olaylar_ek7.js bu yuzden ceviriciyi dusuruyordu: veri saglamdi, arac katiydi.
    j = re.sub(r',(\s*[\]}])', r'\1', j)
    return json.loads(j)


def yerlesimleri_yukle():
    return oku_pencere(os.path.join(DATA, "yerlesimler.js"), "YERLESIMLER")


def olaylari_yukle():
    olaylar = []
    for yol in sorted(glob.glob(os.path.join(DATA, "olaylar*.js"))):
        js = open(yol, encoding="utf-8").read()
        m = re.search(r"window\.(OLAYLAR\w*)\s*=", js)
        if not m:
            continue
        olaylar.extend(oku_pencere(yol, m.group(1)))
    return olaylar


def tam(s):
    return s + "-01" if len(s) == 7 else s


def gun_no(s):
    s = tam(s)
    y, a = int(s[0:4]), int(s[5:7])
    g = int(s[8:10]) if len(s) >= 10 else 1
    return date(y, a, g).toordinal()


# ---------------- Değişmez 1 — sahipsizlik yok ----------------
def degismez1(Y):
    def ir(periods, g):
        return bool(periods) and any(p["f"] <= g < p["t"] for p in periods)

    sahipsiz = {}
    # ⚠️ Kesitler 1300'den başlıyordu ve KURULUŞ DEVRİNİ (1281-1300) hiç
    # örneklemiyordu. İnegöl ile Bilecik'in 1281-1299 arası sahipsiz olduğu
    # bu yüzden aylarca görünmedi — Osmanlı çekirdeğinin tam ortasında iki
    # delik. Kuruluş devri seyrek örneklenemez: en hareketli dönem odur.
    for yil in [1285, 1290, 1295] + list(range(1300, 1921, 20)):
        g = f"{yil}-06-15"
        for t in Y:
            kur = t.get("kur")
            if kur and kur > g:
                continue
            if ir(t.get("d"), g) or ir(t.get("s"), g) or ir(t.get("v"), g):
                continue
            sahipsiz.setdefault(t["ad"], []).append(yil)
    return sahipsiz


# ---------------- Değişmez 2 — sessiz toprak değişimi yok ----------------
def degismez2(Y, O):
    ol = [{"g": gun_no(o["t"]), "b": o["b"]} for o in O]
    kir = {}
    for y in Y:
        donemler = (y.get("d") or []) + (y.get("v") or [])
        for p in donemler:
            for d, tip in ((p.get("f"), "kazanc"), (p.get("t"), "kayip")):
                if not d or d <= "1281-01-01" or d >= "1923-10-29":
                    continue
                kayit = kir.setdefault(d, {"t": tip, "ad": set()})
                kayit["ad"].add(y["ad"])
    acik = []
    for d in sorted(kir):
        gd = gun_no(d)
        en_yakin = min(ol, key=lambda o: abs(o["g"] - gd)) if ol else {"g": gd, "b": "—"}
        fark = abs(en_yakin["g"] - gd)
        if fark > 30:
            acik.append((d, kir[d]["t"], sorted(kir[d]["ad"])[:4], en_yakin["b"], fark))
    return kir, acik


# ---------------- Değişmez 3 — dört boyut çelişmez ----------------
def degismez3(Y):
    ix = {y["ad"]: y for y in Y}

    def durum(y, g):
        for p in (y.get("d") or []):
            if p["f"] <= g < p["t"]:
                return "OSMANLI"
        for p in (y.get("v") or []):
            if p["f"] <= g < p["t"]:
                return "tabi"
        for p in (y.get("s") or []):
            if p["f"] <= g < p["t"]:
                return p["d"]
        return "—"

    celiskiler = []
    for g in ("1300-06-15", "1400-06-15", "1500-06-15", "1600-06-15", "1700-06-15", "1800-06-15"):
        for y in Y:
            if not y.get("m"):
                continue
            m = ix.get(y["m"])
            if not m:
                continue
            a, b = durum(y, g), durum(m, g)
            if a != "—" and b != "—" and a != b:
                celiskiler.append((g, y["ad"], y["m"], a, b))
    return celiskiler


# ---------------- Ek denetim — dönem sağlığı ----------------
# Üç değişmezden biri DEĞİL; VERI-YAPISI.md'nin d/s/v kuralı: "Dönemler
# çakışmamalı, ters olmamalı, sıfır uzunlukta olmamalı." Tebriz'in sıfır
# uzunluklu dönemi (Çaldıran sonrası hiç Osmanlı görünmemesi) tam bu türden
# bir hataydı ve üç değişmez onu yakalayamazdı — biri o pencerede zaten
# sahipsizdi/kırılmasızdı diye değil, dönem baştan geçersizdi diye.
def donem_sagligi(Y):
    sifir, ters, cakisan_ayni, sd_ortusme, dv_ortusme = [], [], [], [], []

    def orusuyor(a, b):
        return a["f"] < b["t"] and b["f"] < a["t"]

    for y in Y:
        kategoriler = {"d": y.get("d") or [], "s": y.get("s") or [], "v": y.get("v") or []}
        for kat, donemler in kategoriler.items():
            for p in donemler:
                f, t = p.get("f"), p.get("t")
                if not f or not t:
                    continue
                if f == t:
                    sifir.append((y["ad"], kat, f))
                elif f > t:
                    ters.append((y["ad"], kat, f, t))
            gecerli = sorted((p for p in donemler if p.get("f") and p.get("t")), key=lambda p: p["f"])
            for i in range(len(gecerli) - 1):
                if orusuyor(gecerli[i], gecerli[i + 1]):
                    cakisan_ayni.append((y["ad"], kat, gecerli[i], gecerli[i + 1]))

        # s ile d/v çakışması İHLAL DEĞİL: uret_petek.py 551-554. satırlar bunu
        # kasıtlı kullanıyor — geniş bir yabancı egemenlik döneminin (s) içine
        # gömülü kısa bir Osmanlı fethi (d/v) deseni. Üretim, Osmanlı aktifken
        # o yerleşimi yabancı devletin gövdesinden açıkça dışlıyor
        # (`not _osm_aktif(...)`), yani d/v her zaman kazanır — tıpkı d×v için
        # VERI-YAPISI.md'de yazılı "tâbi kazanır" kuralı gibi, yalnız s'ye de
        # genelleşmiş hâli belgede yok. Bilgi olarak listelenir, ihlal sayılmaz.
        for sp in kategoriler["s"]:
            if not sp.get("f") or not sp.get("t"):
                continue
            for dp in kategoriler["d"] + kategoriler["v"]:
                if dp.get("f") and dp.get("t") and orusuyor(sp, dp):
                    sd_ortusme.append((y["ad"], sp, dp))

        # d ile v çakışması da VERI-YAPISI.md'de kasıtlı: "d ve v çakışırsa
        # tâbi kazanır (açık ton)". İhlal değil, yalnız bilgi.
        for dp in kategoriler["d"]:
            if not dp.get("f") or not dp.get("t"):
                continue
            for vp in kategoriler["v"]:
                if vp.get("f") and vp.get("t") and orusuyor(dp, vp):
                    dv_ortusme.append((y["ad"], dp, vp))

    return {"sifir": sifir, "ters": ters, "cakisan_ayni": cakisan_ayni,
            "sd_ortusme": sd_ortusme, "dv_ortusme": dv_ortusme}


def main():
    ap = argparse.ArgumentParser(description="Üç değişmezi tek komutta denetler.")
    ap.add_argument("--ayrinti", action="store_true", help="her ihlali tek tek listele")
    args = ap.parse_args()

    print("Veri okunuyor...")
    Y = yerlesimleri_yukle()
    O = olaylari_yukle()
    print(f"  {len(Y)} yerleşim, {len(O)} kronoloji maddesi\n")

    ihlal = False

    # Değişmez 1
    sahipsiz = degismez1(Y)
    n1 = len(sahipsiz)
    durum1 = "✓" if n1 <= BEKLENEN_SAHIPSIZ else "✗"
    if n1 > BEKLENEN_SAHIPSIZ:
        ihlal = True
    print(f"Değişmez 1  {durum1}  {len(Y)} yerleşim, {n1} sahipsiz (beklenen {BEKLENEN_SAHIPSIZ})")
    if len(Y) != BEKLENEN_YERLESIM:
        print(f"            ! yerleşim sayısı beklenenden farklı ({len(Y)} ≠ {BEKLENEN_YERLESIM}) — sadece bilgi")
    if args.ayrinti and sahipsiz:
        for ad, yillar in sahipsiz.items():
            print(f"    {ad:<28} {', '.join(str(y) for y in yillar)}")

    # Değişmez 2
    kir, acik = degismez2(Y, O)
    n2_kirilma, n2_acik = len(kir), len(acik)
    durum2 = "✓" if n2_acik <= BEKLENEN_ACIK else "✗"
    if n2_acik > BEKLENEN_ACIK:
        ihlal = True
    print(f"\nDeğişmez 2  {durum2}  {n2_kirilma} kırılma, {n2_acik} açık (beklenen {BEKLENEN_ACIK})")
    if n2_kirilma != BEKLENEN_KIRILMA:
        print(f"            ! kırılma sayısı beklenenden farklı ({n2_kirilma} ≠ {BEKLENEN_KIRILMA}) — sadece bilgi")
    if args.ayrinti and acik:
        for d, tip, adlar, baslik, fark in acik:
            print(f"    {d}  {tip:<7} {', '.join(adlar):<40} en yakın madde {fark} gün uzakta: {baslik}")

    # Değişmez 3
    celiskiler = degismez3(Y)
    n3 = len(celiskiler)
    durum3 = "✓" if n3 <= BEKLENEN_CELISKI_UST_SINIR else "✗"
    if n3 > BEKLENEN_CELISKI_UST_SINIR:
        ihlal = True
    print(f"\nDeğişmez 3  {durum3}  {n3} çelişki (beklenen ≤{BEKLENEN_CELISKI_UST_SINIR}) — bilinen borç, bkz. MIMARI.md §3.4")
    if args.ayrinti and celiskiler:
        for g, ad, m, a, b in celiskiler:
            print(f"    {g}  {ad:<20} (m:{m})  yerleşim={a:<10} merkez={b}")

    # Ek denetim — dönem sağlığı (üç değişmezden biri değil, VERI-YAPISI.md kuralı)
    ds = donem_sagligi(Y)
    n4 = len(ds["sifir"]) + len(ds["ters"]) + len(ds["cakisan_ayni"])
    durum4 = "✓" if n4 == 0 else "✗"
    if n4 > 0:
        ihlal = True
    print(f"\nEk denetim  {durum4}  dönem sağlığı: {len(ds['sifir'])} sıfır-uzunluk, "
          f"{len(ds['ters'])} ters, {len(ds['cakisan_ayni'])} kategori-içi çakışma (beklenen: hepsi 0)")
    if ds["sd_ortusme"] or ds["dv_ortusme"]:
        print(f"            i {len(ds['sd_ortusme'])} s×d/v + {len(ds['dv_ortusme'])} d×v örtüşmesi — "
              f"uret_petek.py'de kasıtlı (Osmanlı/tâbi kazanır), ihlal SAYILMADI")
    if args.ayrinti:
        for ad, kat, f in ds["sifir"]:
            print(f"    SIFIR    {ad:<28} {kat}: {f}")
        for ad, kat, f, t in ds["ters"]:
            print(f"    TERS     {ad:<28} {kat}: {f} > {t}")
        for ad, kat, p1, p2 in ds["cakisan_ayni"]:
            print(f"    ÇAKIŞMA  {ad:<28} {kat}: [{p1['f']}, {p1['t']}) ile [{p2['f']}, {p2['t']})")

    print()
    if ihlal:
        print("SONUÇ: İHLAL VAR — çıkış kodu 1")
        sys.exit(1)
    print("SONUÇ: temiz")
    sys.exit(0)


if __name__ == "__main__":
    main()
