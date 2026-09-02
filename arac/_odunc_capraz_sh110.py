# -*- coding: utf-8 -*-
"""ÖDÜNÇ TARİH — MAKİNE İMZASI (SONNET HAZIR KITA 110, 2 Eylül 2026)

İKİ ALETİN KESİŞİMİ — bu geceye kadar hiç birlikte koşturulmamıştı:
    arac/_odunc_tarih.py        "bu günü kaç UZAK yerleşim paylaşıyor?"
    arac/_yer_eslesme_ok102.py  "o güne eşleşen madde HANGİ YERİ gösteriyor?"

Bu gece elle taranan üç vaka (Budin/Kalocsa/Şimontorna · Niş/Vidin ·
Estergon/İstolni Belgrad) HEPSİ AYNI YAPIYI taşıyordu: bir kümenin
eşleştiği maddenin `yer_id`si kümenin YALNIZ BİR üyesini gösteriyor,
ötekiler o güne binmiş. Bu araç o imzayı ARAR:

    Bir küme, eşleştiği maddenin `yer_id`si kümenin yalnız BİR üyesini
    gösteriyorsa (küme N>1) — ötekiler o güne BİNMİŞTİR.

DÖRT KOVA (§11: "ölçülemedi ASLA temiz diye raporlanmaz" — dördüncü kova ŞART):
    🔴 GÜÇLÜ ADAY   yer_id kümenin BİR üyesini gösteriyor, küme N>1
    🟡 AYRI SORU    yer_id VAR ama kümede HİÇ YOK — bu `2y`nin alanı,
                    burada yalnız SAYILIR, derinleştirilmez
    🟢 MEŞRU        madde antlaşma/toplu-ilhak türünde (k=="antlasma"
                    veya iskan/kurulus gibi tek-kalemde-çok-yer türleri)
    ⚪ ÖLÇÜLEMEDİ    maddede yer_id yok, ya da eşleşen madde YOK (>30 gün)

C13 SINAVI — alet üç BİLİNEN vakayı yakalamalı, yoksa alet yanlıştır:
    1686-09-02 (Budin+4) · 1689-09-24 (Niş+4) · 1543-08-10 (Estergon+2)
    `--sinav` ile ayrıca kontrol edilir.

ÇALIŞTIRMA
    py arac/_odunc_capraz_sh110.py            # 100-400km bandı, ilk 30
    py arac/_odunc_capraz_sh110.py --hepsi    # bütün 156 küme
    py arac/_odunc_capraz_sh110.py --sinav    # C13: üç bilinen vaka yakalanıyor mu

⚠️ `arac/_yer_eslesme_ok102.py`nin (PAKET-0036) 33 adayına DOKUNULMADI —
   yalnız o dosyanın `yer_dizini`/`kok`/`_hedefler` MANTIĞI buraya
   AYRI bir kopya olarak kuruldu (aynı KURAL, ayrı dosya — §7 ad alanı
   ayrımı). `2y`nin kendi kuyruğu (kronoloji*.js) burada OKUNMADI,
   yalnız ÇEKİRDEK (olaylar*.js) kullanıldı — bu aracın sorusu
   Değişmez 2'nin GÖRDÜĞÜ maddeyle sınırlı, `2y`nin AŞAMA B'si değil.
"""
import io
import json
import math
import os
import re
import subprocess
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ESIK_KAYIT = 3
# 🔴 100 km, 150 DEĞİL — ve sebebi ÖLÇÜLDÜ (C13 sınavı).
#   `_odunc_tarih.py`nin 150 km eşiği KENDİ bilinen vakalarından birini
#   (Budin+4, 137 km) KAÇIRIYORDU. İkinci sinyal (yer_id tekliği) bu
#   aracı zaten daraltıyor, o yüzden mesafe ağını GENİŞLETMEK güvenli —
#   gürültüyü km değil yer_id-eşleşmesi süzüyor.
ESIK_KM = 100.0
ESIK_TAVAN = 12
PENCERE_GUN = 30          # Değişmez 2 ile AYNI, bilerek

# 🟢 MEŞRU imzası — tek kalemde çok yer devreden madde türleri.
#    `k` alanı ölçüldü (2 Eylül, _yer_eslesme_ok102.py yorumu):
#    antlasma en açık MEŞRU imzası. `kurulus`/`isgal` de toplu olabilir
#    ama HER ZAMAN değil, o yüzden yalnız antlasma KESİN sayıldı.
MESRU_MADDE_TURU = {"antlasma"}


def km(a, b, c, d):
    R = 6371.0
    dl, dn = math.radians(c - a), math.radians(d - b)
    h = (math.sin(dl / 2) ** 2
         + math.cos(math.radians(a)) * math.cos(math.radians(c))
         * math.sin(dn / 2) ** 2)
    return 2 * R * math.asin(math.sqrt(h))


def kok_ad(ad):
    """'Şeki (Nuha)' → 'Şeki' — parantezli açıklama atılır. _yer_eslesme_ok102.py'nin
    aynı fonksiyonunun ayrı ad alanındaki KOPYASI (§7: ayrı dosya, ayrı ad alanı)."""
    return re.sub(r"\s*\(.*?\)", "", ad or "").strip()


JS = r"""
global.window = {};
const fs = require('fs');
for (const f of JSON.parse(process.argv[1] || '[]')) {
  try { eval(fs.readFileSync('data/' + f, 'utf8')); } catch (e) {}
}
const cik = [];
for (const k of Object.keys(global.window)) {
  const v = global.window[k];
  if (!Array.isArray(v)) continue;
  for (const r of v) {
    if (!r || !r.ad || r.lat === undefined) continue;
    cik.push({ad: r.ad, lat: r.lat, lon: r.lon,
              d: r.d || [], s: r.s || [], v: r.v || [], isg: r.isg || []});
  }
}
process.stdout.write(JSON.stringify(cik));
"""


def yerlesim_yukle():
    """`girdi.py`nin BAĞLI dosya listesinden — desenle taramaktan DEĞİL.
    `_odunc_tarih.py`nin aynı korumasının kopyası (2 Eylül'ün mükerrer
    kayıt yanılgısı burada da tekrarlanmasın)."""
    import girdi as _g
    _yer = [f for f in _g.GIRDI_DOSYALARI if f.startswith("yerlesimler")]
    p = subprocess.run(["node", "-e", JS, json.dumps(_yer)],
                        cwd=KOK, capture_output=True)
    if p.returncode != 0:
        print("NODE HATASI:\n" + p.stderr.decode("utf-8", "replace")[:600])
        sys.exit(2)
    return json.loads(p.stdout.decode("utf-8"))


def kumeleri_kur(Y, tavan_goster=False):
    gun = {}
    for r in Y:
        for alan in ("d", "s", "v", "isg"):
            for par in r[alan]:
                f = (par or {}).get("f")
                if not f or f <= "1281-01-01" or f >= "1923-10-29":
                    continue
                sahip = par.get("d") or alan
                gun.setdefault(f, []).append((r["ad"], r["lat"], r["lon"], sahip))

    kume = {}
    for g, L in gun.items():
        if g.endswith("-01-01"):          # yuvarlak gün — bir İDDİA değil
            continue
        for ad, la, lo, sahip in L:
            kume.setdefault((g, sahip), []).append((ad, la, lo, sahip))

    supheli = []
    for (g, sahip), L in kume.items():
        if len(L) < ESIK_KAYIT:
            continue
        if len(L) > ESIK_TAVAN and not tavan_goster:
            continue
        en = 0.0
        for i in range(len(L)):
            for j in range(i + 1, len(L)):
                d = km(L[i][1], L[i][2], L[j][1], L[j][2])
                if d > en:
                    en = d
        if en >= ESIK_KM:
            supheli.append({"g": g, "sahip": sahip, "en_km": en,
                             "uyeler": sorted(set(a for a, _, _, _ in L))})
    supheli.sort(key=lambda x: -x["en_km"])
    return supheli


def madde_dizini(O):
    import denetle
    ol = [{"g": denetle.gun_no(o["t"]), "o": o} for o in O]
    return ol


def en_yakin_madde(ol, g, gun_no_fn):
    gd = gun_no_fn(g)
    if not ol:
        return None, None
    m = min(ol, key=lambda x: abs(x["g"] - gd))
    fark = abs(m["g"] - gd)
    if fark > PENCERE_GUN:
        return None, fark
    return m["o"], fark


def sinifla(kume, madde, tam, koklu):
    """Dört kovadan birini döndürür: 'guclu' · 'ayri_soru' · 'mesru' · 'olculemedi'."""
    if madde is None:
        return "olculemedi", None
    yid = madde.get("yer_id")
    if not yid:
        return "olculemedi", madde
    k = (madde.get("k") or "").strip()
    if k in MESRU_MADDE_TURU:
        return "mesru", madde
    hedefler = set()
    if yid in tam:
        hedefler.add(yid)
    hedefler |= koklu.get(kok_ad(yid), set())
    isabet = hedefler & set(kume["uyeler"])
    if not isabet:
        return "ayri_soru", madde
    if len(isabet) == 1 and len(kume["uyeler"]) > 1:
        return "guclu", madde
    return None, madde        # birden fazla üyeye isabet — sinyal yok


def yer_dizini(Y):
    tam, koklu = {}, {}
    for y in Y:
        tam[y["ad"]] = y["ad"]
        koklu.setdefault(kok_ad(y["ad"]), set()).add(y["ad"])
    return tam, koklu


BILINEN_VAKALAR = [
    ("1686-09-02", "Budin"),
    ("1689-09-24", "Niş"),
    ("1543-08-10", "Estergon"),
]


def main(argv):
    import girdi as _g
    import denetle
    Y = _g.yukle(sessiz=True)
    O = denetle.olaylari_yukle()
    tam, koklu = yer_dizini(Y)
    ol = madde_dizini(O)

    Yham = yerlesim_yukle()
    kumeler = kumeleri_kur(Yham, tavan_goster="--tavan" in argv)

    if "--sinav" in argv:
        print("C13 SINAVI — üç bilinen vaka aletin süzgecinden GEÇMELİ")
        ix = {(k["g"], ) if False else k["g"]: k for k in kumeler}
        tamam = 0
        for g, beklenen_yer in BILINEN_VAKALAR:
            aday = [k for k in kumeler if k["g"] == g]
            if not aday:
                print(f"  🔴 YAKALANAMADI  {g}  — küme hiç oluşmadı")
                continue
            for k in aday:
                madde, fark = en_yakin_madde(ol, g, denetle.gun_no)
                kova, m = sinifla(k, madde, tam, koklu)
                ok = (kova == "guclu")
                isaret = "🟢" if ok else "🔴"
                print(f"  {isaret} {g} [{k['sahip']}] {len(k['uyeler'])} üye "
                      f"-> kova={kova} (madde yer_id={madde.get('yer_id') if madde else None})")
                if ok:
                    tamam += 1
        print(f"\nSONUÇ: {tamam}/{len(BILINEN_VAKALAR)} bilinen vaka 'guclu' kovasına düştü.")
        if tamam < len(BILINEN_VAKALAR):
            print("🔴 ALET EKSİK — yakalanamayan vaka(lar) var, düzeltilmeli.")
        return 0 if tamam == len(BILINEN_VAKALAR) else 1

    kovalar = {"guclu": [], "ayri_soru": [], "mesru": [], "olculemedi": []}
    icin_sinyal_yok = 0
    for k in kumeler:
        madde, fark = en_yakin_madde(ol, k["g"], denetle.gun_no)
        kova, m = sinifla(k, madde, tam, koklu)
        if kova is None:
            icin_sinyal_yok += 1
            continue
        kovalar[kova].append((k, m))

    print("ÖDÜNÇ TARİH — MAKİNE İMZASI (iki aletin kesişimi)")
    print(f"yerleşim: {len(Yham)} · çekirdek madde: {len(O)} · şüpheli küme: {len(kumeler)}")
    print(f"  🔴 GÜÇLÜ ADAY   {len(kovalar['guclu']):4d}  — yer_id kümenin BİR üyesi, N>1")
    print(f"  🟡 AYRI SORU    {len(kovalar['ayri_soru']):4d}  — yer_id kümede yok (2y'nin alanı)")
    print(f"  🟢 MEŞRU        {len(kovalar['mesru']):4d}  — antlaşma türü madde")
    print(f"  ⚪ ÖLÇÜLEMEDİ    {len(kovalar['olculemedi']):4d}  — madde yok ya da yer_id yok")
    print(f"  (sinyal yok — çoklu isabet)  {icin_sinyal_yok:4d}")
    print()

    sinir = 10 ** 9 if "--hepsi" in argv else 30
    print("=== 🔴 GÜÇLÜ ADAYLAR ===")
    for k, m in kovalar["guclu"][:sinir]:
        print(f"  {k['g']} [{k['sahip']}] {len(k['uyeler'])} üye · {k['en_km']:.0f} km"
              f" — madde yer_id={m.get('yer_id')!r} b={m.get('b', '')[:50]!r}")
        print(f"       üyeler: {', '.join(k['uyeler'])}")
    if len(kovalar["guclu"]) > sinir:
        print(f"  … {len(kovalar['guclu']) - sinir} tane daha (--hepsi)")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
