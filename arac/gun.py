# -*- coding: utf-8 -*-
"""GÜN SAYACI — tarih dizgisi ↔ tam sayı gün. TEK otorite (ikizi: js/gun.js).

GUN-SAYACI-C0-1009 · tasarım `denetim/GUN-SAYACI-TASARIM-1009.md` (koordinatör onayı, 9 Ekim 2026).

## Neden
Atlas tarihleri DİZGİ olarak karşılaştırıyordu. Bu üç yerde sessizce yanlış:
  · negatif yıl:   "-0499" < "-2999"  (TERS sıra)
  · üç haneli yıl: "900-01-01" > "1281-01-01"
  · JS Date.UTC:   0-99 yılını 1900+ yapar (app.js gunIdx, ölçüldü 36.159/36.159 gün)
Çare biçim seçmek değil, dizgi KARŞILAŞTIRMASINI TERK ETMEK: tarih okunduğu sınırda
bir kez bu modülle sayıya çevrilir, kıyas ve sıralama yalnız sayıyla yapılır. Dizgi
yalnız giriş/çıkış ve gösterim biçimidir.

## Sözleşme (onaylı kurallar)
  · Takvim PROLEPTİK GREGORYEN (1582 öncesi de). Bugünkü app.js `gunIdx` (JS Date) ve
    denetle `gun_no` (Python ordinal) ikisi de böyle ⇒ bugünkü her gün BİREBİR aynı sayı.
    Kaynağın Jülyen olup olmadığı AYRI bir veri sorusudur, burada çevrilmez.
  · Yıl ASTRONOMİK (ISO 8601): 0 yılı VAR. MÖ 1 = 0000 · MÖ 3000 = -2999 · MS 1 = 0001.
  · Sıfır günü 1970-01-01 = 0 (app.js `gunIdx` ile aynı; denetle ordinal'i = gun + 719163).
  · Girdi: ^([+-]?)(\\d{1,6})(-MM(-GG)?)?$ — 908 ≡ 0908 ≡ +000908 · "1453" = 1453-01-01 ·
    "1453-05" = 1453-05-01. Ay 1-12, gün o ayın gerçek uzunluğu (29 Şubat artık yılda).
  · 🔴 GEÇERSİZ GİRDİDE FIRLATIR (ValueError / TypeError). None dönmek YASAK: eski
    `denetle._gun_farki` negatif yılda None dönüyordu ve 11 site ihlali GÖRMEDEN geçiyordu.
  · Algoritma: Howard Hinnant `days_from_civil` / `civil_from_days` — yalnız tam sayı ve
    TABAN bölme (Python `//`, JS `Math.floor`). Date/datetime KULLANILMAZ (MINYEAR = 1).

Sınav: `py denetim/ARAC-GUN-SAYACI-C0-SINAV-1009.py` (node eşiyle, iki yönde).
"""
import re

_RX = re.compile(r"^([+-]?)(\d{1,6})(?:-(\d{2})(?:-(\d{2}))?)?$")
_AY_GUN = (31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)


def artik_mi(y):
    """Proleptik Gregoryen artık yıl — astronomik yıl (0, -4, -400 artık)."""
    return y % 4 == 0 and (y % 100 != 0 or y % 400 == 0)


def ay_uzunlugu(y, a):
    return 29 if a == 2 and artik_mi(y) else _AY_GUN[a - 1]


def gun_sayisi(y, a, g):
    """(astronomik yıl, ay, gün) → gün sayısı (1970-01-01 = 0). Doğrulama YAPMAZ."""
    y -= 1 if a <= 2 else 0
    era = y // 400
    yoe = y - era * 400
    doy = (153 * (a + (-3 if a > 2 else 9)) + 2) // 5 + g - 1
    doe = yoe * 365 + yoe // 4 - yoe // 100 + doy
    return era * 146097 + doe - 719468


def parcala(n):
    """gün sayısı → (astronomik yıl, ay, gün)."""
    if isinstance(n, bool) or not isinstance(n, int):
        raise TypeError("gün sayısı tam sayı olmalı: %r" % (n,))
    z = n + 719468
    era = z // 146097
    doe = z - era * 146097
    yoe = (doe - doe // 1460 + doe // 36524 - doe // 146096) // 365
    doy = doe - (365 * yoe + yoe // 4 - yoe // 100)
    mp = (5 * doy + 2) // 153
    g = doy - (153 * mp + 2) // 5 + 1
    a = mp + (3 if mp < 10 else -9)
    return era * 400 + yoe + (1 if a <= 2 else 0), a, g


def gun(s):
    """Tarih dizgisi → gün sayısı. Geçersizse FIRLATIR."""
    if not isinstance(s, str):
        raise TypeError("tarih dizgi olmalı: %r" % (s,))
    m = _RX.match(s)
    if not m:
        raise ValueError("tarih biçimi geçersiz: %r" % (s,))
    y = int(m.group(2)) * (-1 if m.group(1) == "-" else 1)
    a = int(m.group(3)) if m.group(3) else 1
    g = int(m.group(4)) if m.group(4) else 1
    if not 1 <= a <= 12:
        raise ValueError("ay 1-12 olmalı: %r" % (s,))
    if not 1 <= g <= ay_uzunlugu(y, a):
        raise ValueError("gün o ayda yok: %r" % (s,))
    return gun_sayisi(y, a, g)


def _yil_dizgi(y):
    if 0 <= y <= 9999:
        return "%04d" % y
    if -9999 <= y < 0:
        return "-%04d" % -y
    return ("+%06d" if y > 0 else "-%06d") % abs(y)    # ISO 8601 genişletilmiş


def dizgi(n, hassasiyet="gun"):
    """gün sayısı → kanonik dizgi. hassasiyet: "gun" (YYYY-MM-DD) · "ay" (YYYY-MM) · "yil" (YYYY)."""
    y, a, g = parcala(n)
    if hassasiyet == "gun":
        return "%s-%02d-%02d" % (_yil_dizgi(y), a, g)
    if hassasiyet == "ay":
        return "%s-%02d" % (_yil_dizgi(y), a)
    if hassasiyet == "yil":
        return _yil_dizgi(y)
    raise ValueError("hassasiyet gun/ay/yil olmalı: %r" % (hassasiyet,))


def yil(n):
    """gün sayısı → astronomik yıl."""
    return parcala(n)[0]


def yil_yazi(y):
    """astronomik yıl → okunur yazı: 1453 → "1453" · 0 → "MÖ 1" · -2999 → "MÖ 3000"."""
    if isinstance(y, bool) or not isinstance(y, int):
        raise TypeError("yıl tam sayı olmalı: %r" % (y,))
    return str(y) if y >= 1 else "MÖ %d" % (1 - y)


# ---------------------------------------------------------------------------
# ÇAPRAZ DENETİM — metin (`gun:"MÖ 3000"`) ile sayı çelişmez. UYARI DEĞİL KAPI:
# çağıran (C1'de denetle) dönen listede kalem varsa çıkış ≠ 0 verir.
# Ölçüt yalnız MÖ'ye bakar — MS metinlerinde hicrî/rûmî yıllar ("16 Zilkade 416 /
# 8 Ocak 1026") geçer, onları yıl sanmak yanlış alarm üretir.
#   ① metin "MÖ n" diyor  ⇒ sayının yılı 1 − n olmalı (−2999 ↔ MÖ 3000)
#   ② sayının yılı ≤ 0 (MÖ) ⇒ metinde "MÖ n" ZORUNLU (bir yıllık yazım hatası
#      — MÖ 3000 için "-3000" — ancak metinle yakalanır; metinsiz MÖ = yakalanamaz)
#   ③ metin "MÖ" diyor ama sayı MS ⇒ çelişki
# ---------------------------------------------------------------------------
_MO_RX = re.compile(r"(?<![A-Za-zÇĞİÖŞÜçğıöşü])M\.?\s?Ö\.?\s*(\d{1,6})")


def metin_mo_yillari(metin):
    """Metindeki "MÖ n" / "M.Ö. n" yıllarını ASTRONOMİK yıla çevirip döker (n → 1 − n)."""
    return [1 - int(x) for x in _MO_RX.findall(metin or "")]


def capraz_denetim(t, metin):
    """→ çelişki açıklaması (str) ya da None (tutarlı). `t` geçersizse FIRLATIR."""
    y = yil(gun(t))
    mo = metin_mo_yillari(metin)
    if y <= 0:
        if not mo:
            return "MÖ tarih (%s = %s) metinsiz: gun alanında \"%s\" yazılı olmalı" % (t, yil_yazi(y), yil_yazi(y))
        if y not in mo:
            return "metin %s diyor, sayı %s (%s) — %+d yıl kayık" % (
                ", ".join(yil_yazi(x) for x in mo), t, yil_yazi(y), y - mo[0])
        return None
    if mo:
        return "metin %s diyor ama tarih MS (%s)" % (", ".join(yil_yazi(x) for x in mo), t)
    return None


def capraz_kapi(kayitlar):
    """kayitlar: [(ad, t, metin)] → (çıkış_kodu, [satır]). Çelişki varsa 1; tarih
    geçersizse o kalem de ihlaldir (çağıran ölçemediği tarihi TEMİZ saymaz)."""
    satir = []
    for ad, t, metin in kayitlar:
        try:
            c = capraz_denetim(t, metin)
        except (TypeError, ValueError) as e:
            c = "tarih okunamadı: %s" % e
        if c:
            satir.append("%s · %s" % (ad, c))
    return (1 if satir else 0), satir


# ---------------------------------------------------------------------------
# GEÇİCİ KAPI (C0 → C3) — "veride negatif yıl var + motor sayaçsız ⇒ ÖLÇÜLEMEDİ".
# Motor (uret_petek.py) C3'e kadar tarihleri DİZGİ olarak kıyaslar: ters sıralı bir
# MÖ dönemi SESSİZ sahipsizlik üretir. Motorun sayaçlı olduğunu C3 tek bir işaretle
# beyan eder: uret_petek.py içinde satır başında `GUN_SAYACI = True`. İşaret yoksa ve
# veride yıl ≤ 0 varsa harita ÖLÇÜLEMEZ. C3 inince işaret konur, kapı kendiliğinden açılır.
# ---------------------------------------------------------------------------
_ISARET_RX = re.compile(r"^GUN_SAYACI\s*=\s*True\b", re.M)


def motor_sayacli_mi(uret_petek_yolu):
    """uret_petek.py `GUN_SAYACI = True` taşıyor mu. Dosya okunamazsa FIRLATIR."""
    with open(uret_petek_yolu, encoding="utf-8") as f:
        return bool(_ISARET_RX.search(f.read()))


def negatif_yil_kapisi(tarihler, motor_sayacli):
    """tarihler: [(ad, t)] → ("TAMAM" | "OLCULEMEDI", [satır]).
    Okunamayan tarih de ÖLÇÜLEMEDİ'dir (temiz sayılmaz)."""
    neg, bozuk = [], []
    for ad, t in tarihler:
        try:
            if yil(gun(t)) <= 0:
                neg.append("%s · %s (%s)" % (ad, t, yil_yazi(yil(gun(t)))))
        except (TypeError, ValueError) as e:
            bozuk.append("%s · %s" % (ad, e))
    satir = ["tarih okunamadı: " + x for x in bozuk]
    if neg and not motor_sayacli:
        satir += ["negatif yıl, motor SAYAÇSIZ (uret_petek.py `GUN_SAYACI = True` yok): " + x for x in neg]
    return ("OLCULEMEDI" if satir else "TAMAM"), satir
