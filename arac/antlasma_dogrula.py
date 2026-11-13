# -*- coding: utf-8 -*-
"""antlasma_dogrula.py — data/antlasma_madde_*.js kayıtlarının VERİ SÖZLEŞMESİ denetimi.

EMRELIC 13 Kasım 2026 (KASA/ANTLAŞMA-1113; tasarım: denetim/ANTLASMA-OYNATICI-TASARIM-1113.md §3.3).
Tüketici: js/antlasma_oynatici.js (+ js/antlasma_eslesme.js). Ağır değil (node ile veri okur, saniyeler).

    py arac/antlasma_dogrula.py              # tüm kayıtlar; çıkış 0 temiz · 1 ihlal · 2 ölçülemedi (node yok / veri okunamadı)
    py arac/antlasma_dogrula.py --ayrinti    # her uyarıyı tek tek yaz
    py arac/antlasma_dogrula.py --kok <yol>  # başka worktree

İHLAL (çıkış 1):  şema (zorunlu alan eksik/geçersiz) · adım `no` boş/yinelenen · `ozet` < 20 karakter ·
                  adım `yer[]` adı `yerler`de YOK (haritada işaret çıkmaz) · koordinat aralık dışı ·
                  kaynak YOK (ne adımda ne kayıt düzeyinde) · kronoloji bağı YOK (kayıt `t` ±30 gününde madde yok ya da
                  `eslesen()` hiçbirini yakalamıyor ⇒ kullanıcıda düğme çıkmaz; çare `anahtarlar[]`).
UYARI (tavanlı): odak yok (adım `yer[]` boş) · `dogrulanmadi:true` adım · `md.` aralığında eksik no.
Referans: Lozan ve Sevr kayıtları İHLAL 0 ile geçmeli (geriye uyum sınaması).
"""
import json
import os
import re
import subprocess
import sys

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:       # noqa: BLE001
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import gun as G  # noqa: E402

# Tavanlar: bugünkü ölçüm (sabitle aynı commit'te yazılır, yalnız gerileme bloke eder)
BEKLENEN_ODAKSIZ = 227          # 13 Kasım 2026 ÖLÇÜM (Lozan 105 + Sevr ~83 + Karlofça ~23 + Kerden 5 + Küçük Kaynarca 10 + Aynalıkavak 1 = 227; eski tavan 211; genel/ek hüküm adımları meşru) — yalnız gerileme bloke eder
BEKLENEN_DOGRULANMADI = 9       # 13 Kasım 2026 ÖLÇÜM (Lozan+Sevr+Karlofça `dogrulanmadi:true` adımları)


def yukle(kok):
    js = os.path.join(kok, "arac", "antlasma_dogrula_yukle.js")
    try:
        r = subprocess.run(["node", js, kok], capture_output=True, timeout=300)
    except (OSError, subprocess.SubprocessError) as e:
        print("ÖLÇÜLEMEDİ: node çalışmadı:", e)
        sys.exit(2)
    if r.returncode != 0:
        print("ÖLÇÜLEMEDİ: node hata:", r.stderr.decode("utf-8", "replace")[:300])
        sys.exit(2)
    return json.loads(r.stdout.decode("utf-8"))


def gun_gecerli(s):
    try:
        return G.gun(s)
    except Exception:   # noqa: BLE001
        return None


def eslesen_mi(madde, k):
    """js/antlasma_eslesme.js ile AYNI kural (ikisi birlikte değişir)."""
    if madde.get("aid"):
        return madde["aid"] == k.get("id")
    if k.get("eslesme_kipi") == "acik":      # düğme YALNIZ açık antlasma_id'li maddede
        return False
    kt, mt = gun_gecerli(k.get("t", "")), gun_gecerli(madde["t"])
    if kt is None or mt is None:
        return False
    pencere = k.get("pencere_gun", 60)
    if abs(kt - mt) > pencere:
        return False
    ak = k.get("anahtarlar") or [k.get("ad", "")]
    return any(a and a in madde["b"] for a in ak)


NON_TARAF = re.compile(r"^(ek|ekler|ek belge|protokol|madde|fıkra|annex|bölüm|kısım)$", re.I)


def bilinen_taraflar(k):
    """js/antlasma_oynatici.js bilinenTaraflar ile AYNI: `taraf` alanı ya da «Taraf 3» biçimli eski no'lar."""
    t = []
    for a in k.get("adimlar") or []:
        x = str(a.get("taraf") or "").strip()
        if not x:
            m = re.fullmatch(r"([^\d]*[^\d\s])\s+(\d[\d–\-]*)", str(a.get("no", "")).strip())
            if m and not NON_TARAF.match(m.group(1)):
                x = m.group(1)
        if x and x not in t:
            t.append(x)
    return t


def taraf_no(a, bilinen=()):
    """js/antlasma_oynatici.js adimTarafNo ile AYNI: (taraf, no). `taraf` alanı varsa o; yoksa ESKİ biçim «Venedik 3»
    (bölüm başına string) taraf='Venedik', no='3'; «Venedik giriş» → bilinen tarafla başlıyorsa ayrılır; «Ek 1» taraf değildir.
    Tekrar no reddi taraf kapsamındadır."""
    taraf = str(a.get("taraf") or "").strip()
    no = str(a.get("no", "")).strip()
    if not taraf:
        m = re.fullmatch(r"([^\d]*[^\d\s])\s+(\d[\d–\-]*)", no)
        if m and not NON_TARAF.match(m.group(1)):
            taraf, no = m.group(1), m.group(2)
        else:
            for b in bilinen:
                if no.startswith(b + " "):
                    taraf, no = b, no[len(b) + 1:]
                    break
    return taraf, no


def no_aralik(no):
    """"37-45" -> (37,45); "12" -> (12,12); sayı olmayan ("Ek A", "Önsöz") -> None."""
    m = re.fullmatch(r"\s*(\d+)\s*(?:[-–]\s*(\d+))?\s*", str(no))
    if not m:
        return None
    a = int(m.group(1))
    return (a, int(m.group(2) or a))


def denetle_kayit(k, maddeler, ayrinti):
    ihlal, uyari = [], []
    kid = k.get("id", "?")
    for alan in ("id", "ad", "t", "kadraj", "kaynak", "yerler", "adimlar"):
        if not k.get(alan):
            ihlal.append("şema: zorunlu alan yok/boş: %s" % alan)
    kt = gun_gecerli(k.get("t", ""))
    if k.get("t") and kt is None:
        ihlal.append("şema: t geçerli gün değil: %r" % k.get("t"))
    kd = k.get("kadraj")
    if kd:
        if not (isinstance(kd, list) and len(kd) == 4 and all(isinstance(x, (int, float)) for x in kd)
                and kd[0] < kd[2] and kd[1] < kd[3]):
            ihlal.append("şema: kadraj [bati,guney,dogu,kuzey] 4 sayı ve bati<dogu, guney<kuzey olmalı: %r" % kd)
    yerler = k.get("yerler") or {}
    for ad, c in yerler.items():
        if not (isinstance(c, list) and len(c) == 2 and -180 <= c[0] <= 180 and -90 <= c[1] <= 90):
            ihlal.append("yer koordinatı geçersiz: %s %r" % (ad, c))
    adimlar = k.get("adimlar") or []
    gorulen, aralik = set(), {}
    bilinen = bilinen_taraflar(k)
    for i, a in enumerate(adimlar):
        taraf, no = taraf_no(a, bilinen)
        et = ("%s md. %s" % (taraf, no)) if taraf else no
        if not no:
            ihlal.append("adım %d: no boş" % (i + 1))
        elif (taraf, no) in gorulen:
            ihlal.append("adım no yinelenen (taraf kapsamında): %s" % et)
        gorulen.add((taraf, no))
        r = no_aralik(no)
        if r:
            if r[0] > r[1]:
                ihlal.append("adım %s: aralık ters" % et)
            aralik.setdefault(taraf, []).append(r)
        no = et
        if len(str(a.get("ozet", "")).strip()) < 20:
            ihlal.append("adım %s: ozet < 20 karakter" % no)
        for y in a.get("yer") or []:
            if y not in yerler:
                ihlal.append("adım %s: yer '%s' `yerler`de YOK (haritada işaret çıkmaz)" % (no, y))
        if not (a.get("kaynak") or k.get("kaynak")):
            ihlal.append("adım %s: KAYNAK yok" % no)
        if not a.get("yer"):
            uyari.append(("odaksiz", "adım %s: yer[] boş (odak yok)" % no))
        if a.get("dogrulanmadi"):
            uyari.append(("dogrulanmadi", "adım %s: dogrulanmadi:true" % no))
    # eksik no: sayısal adımların kapsadığı md. aralığında boşluk
    for taraf, aralar in aralik.items():             # eksik no TARAF başına (her tarafın md. dizisi ayrı)
        sayilar = set()
        for lo, hi in aralar:
            sayilar.update(range(lo, hi + 1))
        if sayilar:
            eksik = [n for n in range(min(sayilar), max(sayilar) + 1) if n not in sayilar]
            if eksik:
                uyari.append(("eksik_no", "%smd. aralığında eksik no: %s%s" % (
                    (taraf + " ") if taraf else "", eksik[:12], "…" if len(eksik) > 12 else "")))
    # kronoloji bağı
    if kt is not None:
        yakin = [m for m in maddeler if (gun_gecerli(m["t"]) is not None and abs(gun_gecerli(m["t"]) - kt) <= 30)]
        yakalanan = [m for m in maddeler if eslesen_mi(m, k)]
        if not yakin:
            ihlal.append("kronoloji bağı: kayıt gününün ±30 gününde HİÇ madde yok")
        if not yakalanan:
            ihlal.append("kronoloji bağı: eslesen() hiçbir maddeyi yakalamıyor (düğme çıkmaz) — `anahtarlar[]` ya da maddede `antlasma_id` ekle")
        k["_yakalanan"] = len(yakalanan)
        k["_yakin"] = len(yakin)
    return ihlal, uyari


def main():
    ayrinti = "--ayrinti" in sys.argv
    kok = KOK
    if "--kok" in sys.argv:
        kok = os.path.abspath(sys.argv[sys.argv.index("--kok") + 1])
    v = yukle(kok)
    for h in v.get("hatalar", [])[:5]:
        print("  not: yüklenemeyen dosya:", h)
    kayitlar, maddeler = v["kayitlar"], v["maddeler"]
    if not kayitlar:
        print("ÖLÇÜLEMEDİ: data/antlasma_madde_*.js kaydı bulunamadı")
        return 2
    toplam_ihlal, sayac = 0, {"odaksiz": 0, "dogrulanmadi": 0, "eksik_no": 0}
    for k in kayitlar:
        ihlal, uyari = denetle_kayit(k, maddeler, ayrinti)
        for tur, _m in uyari:
            sayac[tur] = sayac.get(tur, 0) + 1
        toplam_ihlal += len(ihlal)
        print("%s %-16s md/adım %-4d  kronoloji ±30g madde %-3s  eslesen() yakaladığı %-3s  ihlal %d  uyarı %d  [%s]"
              % ("✓" if not ihlal else "✗", k.get("id"), len(k.get("adimlar") or []), k.get("_yakin", "?"),
                 k.get("_yakalanan", "?"), len(ihlal), len(uyari), k.get("_dosya")))
        for m in ihlal[:(None if ayrinti else 6)]:
            print("     İHLAL", m)
        if ayrinti:
            for _t, m in uyari:
                print("     uyarı", m)
    print("— %d kayıt · ihlal %d · uyarı: odaksız %d, doğrulanmadı %d, eksik-no %d"
          % (len(kayitlar), toplam_ihlal, sayac["odaksiz"], sayac["dogrulanmadi"], sayac["eksik_no"]))
    if sayac["odaksiz"] > BEKLENEN_ODAKSIZ or sayac["dogrulanmadi"] > BEKLENEN_DOGRULANMADI:
        print("🔴 uyarı tavanı aşıldı")
        return 1
    return 1 if toplam_ihlal else 0


if __name__ == "__main__":
    sys.exit(main())
