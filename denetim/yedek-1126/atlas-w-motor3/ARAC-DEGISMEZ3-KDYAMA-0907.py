# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ⑪ — Ö3 YAMASI: 372 kayda `kd:` yaz, `m:` KORUYARAK.

ÜRETİM KURALI — hiçbir tarih UYDURULMUYOR:
    kırılma günü = MERKEZİN ilk `d:`/`v:` günü (zaten veride)
    [UFUK_F .. o gün)   -> m: null   ← İDDİA GERİ ÇEKİLİYOR
    [o gün .. UFUK_T)   -> m: <mevcut m:>   ← İDDİA KORUNUYOR
`m:` alanı SİLİNMİYOR (S2 ölçümünün şartı: silinirse bölge üyeliği
874 -> 496 düşüyor, -378).

🔴 DAMGA — koordinatörün talimatından SAPTIM ve gerekçesi ölçüm:
   Talimat: *"`turetildi:True` damgası — yeni yazdıkların damgalı doğsun."*
   `turetildi:True` `girdi.kd_oku()`nun **`kd:` YOKKEN** ürettiği SANAL
   döneme koyduğu damga (`girdi.py:1262`). Veriye yazılan GERÇEK bir
   döneme aynı damgayı koymak iki ayrı şeyi tek adla işaretler ve
   `kd_oku` onu olduğu gibi geri döndürür (`return [dict(p) for p in kd]`)
   ⇒ okuyan taraf "bu sanal mı gerçek mi" diye SORAMAZ HÂLE GELİR.
   ⇒ Kullanılan damga:  `yontem: "mekanik-anakronik"`
   Amaç AYNI (bu dönem ARAŞTIRMA ÜRÜNÜ DEĞİL), ad ÇAKIŞMIYOR.
   ⚠️ Bu bir itiraz değil bir ayrım; koordinatöre BİLDİRİLDİ.

🔴 İKİ ARAÇ KÖR NOKTASI — ölçüldü, yamadan ÖNCE:
   ① `_sahiplik_uygula.py` `CATISABILIR` = (d,s,v,isg,m,kaynak,bos,neden,
      not,kur) — **`kd` YOK** ⇒ mevcut uygulayıcı bu yamayı İNDİREMEZ.
      (`CLAUDE.md §11` Timbuktu vakası: *"bir beyan, aracın alan kümesinde
      yoksa SESSİZCE DÜŞER"* — yamanın yarısı iner, yarısı düşer.)
   ② `girdi.yukle()` dönem alanlarını yalnız ("s","d","v","isg") için
      denetliyor (`girdi.py:1211`) ⇒ **`kd:` içeriği HİÇ denetlenmiyor**;
      yazım hatası uyarı BASMAZ.
"""
import io
import json
import os
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi    # noqa: E402
import denetle  # noqa: E402

UFUK_F, UFUK_T = "1281-01-01", "1923-10-29"

Y = girdi.yukle(sessiz=True)
ix = {y["ad"]: y for y in Y}
tes = json.load(open(os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-TESHIS-0907.json"),
                     encoding="utf-8"))
anak = sorted(set(r["yerlesim"] for r in
                  tes["detay"].get("① ANAKRONİK — merkez HENÜZ Osmanlı DEĞİLKEN", [])))


def osmanli_ilk(y):
    g = [p["f"] for p in (y.get("d") or [])] + [p["f"] for p in (y.get("v") or [])]
    return min(g) if g else None


print("=" * 72)
print("Ö3 YAMASI — üretim")
print("=" * 72)
print("  ANAKRONİK kovadaki yerleşim : %d" % len(anak))

yama, atlanan = [], {"kd_zaten_var": [], "merkez_yok": [], "kirilma_ufukta": []}
for ad in anak:
    y = ix[ad]
    if y.get("kd"):
        atlanan["kd_zaten_var"].append(ad)      # DOKUNMA — kendi kalemi
        continue
    m_ad = y.get("m")
    m = ix.get(m_ad)
    if not m:
        atlanan["merkez_yok"].append(ad)
        continue
    kir = osmanli_ilk(m)
    if not kir or kir <= UFUK_F:
        atlanan["kirilma_ufukta"].append(ad)    # anakronik pencere YOK
        continue
    k = y.get("k") or 0
    yama.append({
        "ad": ad,
        "kd": [
            {"f": UFUK_F, "t": kir, "k": k, "m": None,
             "yontem": "mekanik-anakronik",
             "kaynak": "mekanik — merkez %s'in ilk d:/v: günü %s; bu tarihten "
                       "ÖNCE o idarî bağ YOKTU. ARAŞTIRMA ÜRÜNÜ DEĞİL, "
                       "iddia GERİ ÇEKİLİYOR." % (m_ad, kir)},
            {"f": kir, "t": UFUK_T, "k": k, "m": m_ad,
             "yontem": "mekanik-anakronik"},
        ]})

print("\n[ÜRETİM]")
print("  yama kaydı            : %d" % len(yama))
for k, v in atlanan.items():
    print("  atlanan · %-16s: %d %s" % (k, len(v), (v[:4] if v else "")))

# ═════════════ SINAV — bellekte uygula, DÖRT ekseni ölç ═════════════
print("\n" + "=" * 72)
print("SINAV — yama bellekte uygulanıp ÖLÇÜLÜYOR")
print("=" * 72)
Yp = [dict(y) for y in Y]
ixp = {y["ad"]: y for y in Yp}
for r in yama:
    ixp[r["ad"]]["kd"] = r["kd"]

# ① ZAMANSIZ sayaç — DÜŞMEMELİ (degismez3 y["m"] okuyor)
c0, c1 = len(denetle.degismez3(Y)), len(denetle.degismez3(Yp))
# ② ZAMANLI sayaç — DÜŞMELİ
z0, kd0 = denetle.degismez3z(Y)
z1, kd1 = denetle.degismez3z(Yp)
print("\n① ZAMANSIZ (degismez3)  %d -> %d   %s"
      % (c0, c1, "✓ değişmedi (BEKLENEN)" if c0 == c1 else "🔴 DEĞİŞTİ"))
print("② ZAMANLI  (degismez3z) %d -> %d   (%+d)  %s"
      % (len(z0), len(z1), len(z1) - len(z0),
         "✓ DÜŞTÜ" if len(z1) < len(z0) else "🔴 DÜŞMEDİ"))
print("   gerçek kd: kayıt      %d -> %d" % (kd0, kd1))

# ③ BÖLGE ÜYELİĞİ — DEĞİŞMEMELİ (S2)
def uyelik(Yl):
    ad2 = {y["ad"]: i for i, y in enumerate(Yl)}

    def k12(i, azami=5):
        gor, j = set(), i
        for _ in range(azami):
            yy = Yl[j]
            if (yy.get("k") or 0) in (1, 2):
                return j
            a = yy.get("m")
            if not a or a not in ad2 or j in gor:
                return None
            gor.add(j)
            j = ad2[a]
        return None
    uy = {}
    for j, yy in enumerate(Yl):
        if not (yy.get("d") or yy.get("v")) or not (yy.get("k") or 0):
            continue
        mi = k12(j)
        if mi is not None:
            uy.setdefault(Yl[mi]["ad"], []).append(yy["ad"])
    return uy


u0, u1 = uyelik(Y), uyelik(Yp)
n0, n1 = sum(len(v) for v in u0.values()), sum(len(v) for v in u1.values())
print("③ BÖLGE üyelik          %d -> %d   %s"
      % (n0, n1, "✓ DEĞİŞMEDİ (S2 şartı tuttu)" if u0 == u1 else "🔴 DEĞİŞTİ"))

# ④ DEĞİŞMEZ 1 — sahipsizlik BOZULMAMALI
d0 = denetle.degismez1(Y)
d1 = denetle.degismez1(Yp)


def say(r):
    return len(r[0]) if isinstance(r, tuple) else len(r)


print("④ DEĞİŞMEZ 1 sahipsiz   %d -> %d   %s"
      % (say(d0), say(d1), "✓ değişmedi" if say(d0) == say(d1) else "🔴 DEĞİŞTİ"))

hata = (c0 != c1) or (len(z1) >= len(z0)) or (u0 != u1) or (say(d0) != say(d1))
print("\n%s" % ("🔴 SINAV DÜŞTÜ" if hata else "✓ DÖRT EKSEN DE BEKLENDİĞİ GİBİ"))

# ═════════════ YAMA DOSYASI ═════════════
yol = os.path.join(KOK, "denetim", "YAMA-DEGISMEZ3-KD-0907.json")
json.dump({
    "_NOT": (
        "Ö3 — ANAKRONİK kovanın mekanik çözümü. `m:` KORUNUR, `kd:` EKLENİR.\n"
        "Kırılma günü UYDURULMADI: merkezin ilk d:/v: günü, zaten veride.\n"
        "🔴 UYGULAYAN OKUSUN — ÜÇ ŞART:\n"
        " ① `m:` alanına DOKUNULMAZ. Silinirse bölge üyeliği 874->496 (-378).\n"
        " ② `_sahiplik_uygula.py` bu yamayı İNDİREMEZ: CATISABILIR'da `kd` YOK\n"
        "    (d,s,v,isg,m,kaynak,bos,neden,not,kur). Ya araca `kd` eklenir ya\n"
        "    ayrı bir uygulayıcı yazılır. Eklenmezse yama SESSİZCE DÜŞER.\n"
        " ③ `degismez3`in ZAMANSIZ sayacı DÜŞMEYECEK — o da `y[\"m\"]` okuyor.\n"
        "    Yalnız `degismez3z` düşer. Sayının 690'da (6 kesitte 493) kalması\n"
        "    BEKLENEN DAVRANIŞTIR, KUSUR DEĞİL.\n"
        "DAMGA: `turetildi:True` KULLANILMADI — o ad `kd_oku`nun SANAL\n"
        "dönemine ait (girdi.py:1262). Yerine `yontem:\"mekanik-anakronik\"`.\n"
        "⚠️ `girdi.yukle()` `kd:` dönem alanlarını DENETLEMİYOR (yalnız\n"
        "s/d/v/isg) — bu alanlar uyarı basmaz, ama denetlenmiyor da."),
    "olcum": {
        "zamansiz_degismez3": {"once": c0, "sonra": c1, "beklenen": "DEĞİŞMEZ"},
        "zamanli_degismez3z": {"once": len(z0), "sonra": len(z1),
                               "beklenen": "DÜŞER"},
        "bolge_uyelik": {"once": n0, "sonra": n1, "beklenen": "DEĞİŞMEZ"},
        "degismez1_sahipsiz": {"once": say(d0), "sonra": say(d1),
                               "beklenen": "DEĞİŞMEZ"},
        "gercek_kd": {"once": kd0, "sonra": kd1}},
    "atlanan": {k: v for k, v in atlanan.items()},
    "yama": yama,
}, open(yol, "w", encoding="utf-8", newline=""), ensure_ascii=False, indent=1)
print("\n[YAZILDI] %s  (%d kayıt)" % (yol, len(yama)))
sys.exit(1 if hata else 0)
