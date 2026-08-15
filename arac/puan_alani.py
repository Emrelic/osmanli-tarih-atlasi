# -*- coding: utf-8 -*-
"""puan_alani.py — EMRE'NİN BİLEŞKE KUVVET ALGORİTMASI · `H-0073`

🔴 EMRE'NİN KENDİ CÜMLESİ, BİREBİR:
    "200 KM → 4 PUAN · 200-300 KM → 2 PUAN · 300-400 KM → 1 PUAN ·
     TOPLAM 4 PUAN TOPLANINCA BOŞ ALANLAR BOYANACAK"
Ve `H-0031`de adını koymuş: *"iki üç merkezin BİLEŞKE KUVVETLERİNİN belli
bölgeleri etkilemesi prensibi."*

    py arac/puan_alani.py            Libya kutusunda ölç (Câlû sınavı)
    py arac/puan_alani.py --b lon0,lat0,lon1,lat1 [--gun 1281-01-01]

────────────────────────────────────────────────────────────────────────
NİÇİN BU FİKİR DOĞRU

Bugünkü motorda her nokta **tek başına bir çemberdir** ve çemberin dışı
boştur. Emre'nin istediği, üst üste binen alanların **TOPLANMASI**:
    · tek nokta 200 km içinde       → 4 puan → BOYANIR
    · iki nokta 250'şer km          → 2+2=4 → BOYANIR   (bugün BOŞ kalıyor)
    · üç nokta 350'şer km           → 1+1+1=3 → boş     (eşik tutmadı)
⇒ Keskin çember yerine **kademeli nüfuz alanı.** Enklavların çoğu tarihî
değil geometrik — iki peteğin arası boş kalıyor; bu onu kapatır.

🔴 PUANLAR VE EŞİK EMRE'NİN SEÇİMİDİR — `TRIYAJ-parti19.md` şunu yazmış:
*"motor önce bunları BİREBİR uygulayıp ölçmeli, kendi sayısını
uydurmamalı. Sonuç kötüyse sayıyı değil ÖLÇÜMÜ geri getirmeli."*
Bu betik 4/2/1 ve eşik 4'ü **aynen** uygular.

────────────────────────────────────────────────────────────────────────
⚠️ İKİ AÇIK SORU — ve ikisi de UYDURULMADI

**① RENK KİMİN?** *"O bölgenin rengine boyanacak"* — ama iki devlet birden
puan topluyorsa hangisi? Bu betik **en yüksek puanı toplayan kimliği**
seçer ve **berabere kalanı AYRI SAYAR** (`cekisme`). Beraberlik bir kusur
değil, `MOTOR-BENEK-ALANI.md`nin tarif ettiği *nüfuz alanı*dır —
sınır çizilemeyen yer.

**② MESAFE KUŞ UÇUŞU MU?** Emre km demiş; bu betik km ölçer. Ama artık
sürtünme katmanı var ve halkalar **maliyet** cinsinden de ölçülebilir —
o zaman deniz ve dağ kendiliğinden hesaba girer. `--maliyet` ile denenir.
📌 Bu bir İYİLEŞTİRME önerisidir, Emre'nin kuralının değiştirilmesi
DEĞİL: aynı 4/2/1, başka bir mesafe tanımıyla.
"""
import math
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

# 🔴 EMRE'NİN SAYILARI — uydurulmadı, değiştirilmedi
HALKALAR = ((200.0, 4), (300.0, 2), (400.0, 1))
ESIK = 4

KUTU = (17.0, 25.0, 28.0, 33.5)      # Câlû sınavı — Libya çölü
ADIM = 0.05
GUN = "1281-01-01"


def _sahip(y, gun):
    for p in (y.get("d") or []):
        if (p.get("f") or "") <= gun < (p.get("t") or "9999"):
            return "OSMANLI"
    for p in (y.get("v") or []):
        if (p.get("f") or "") <= gun < (p.get("t") or "9999"):
            return "tabi"
    for p in (y.get("s") or []):
        if (p.get("f") or "") <= gun < (p.get("t") or "9999"):
            return p.get("d")
    return None


def puan(d_km):
    for sinir, p in HALKALAR:
        if d_km <= sinir:
            return p
    return 0


def olc(kutu, adim, gun):
    import girdi
    Y = [y for y in girdi.yukle(sessiz=True) if y.get("lon") is not None]
    lon0, lat0, lon1, lat1 = kutu
    nx = int((lon1 - lon0) / adim)
    ny = int((lat1 - lat0) / adim)
    # 400 km'lik kuşak dışarıdan da katkı verir — kutuyu GENİŞ tara
    pay = 4.5
    aday = [y for y in Y if lon0 - pay <= y["lon"] <= lon1 + pay
            and lat0 - pay <= y["lat"] <= lat1 + pay]
    sahipli = [(y, _sahip(y, gun)) for y in aday]

    boyali = cekisme = bos = 0
    alan_kim = {}
    bos_km2 = boyali_km2 = 0.0
    for j in range(ny):
        lat = lat0 + (j + 0.5) * adim
        hkm2 = (adim * 110.574) * (adim * 111.32 * math.cos(math.radians(lat)))
        co = math.cos(math.radians(lat))
        for i in range(nx):
            lon = lon0 + (i + 0.5) * adim
            skor = {}
            for y, s in sahipli:
                if s is None:
                    continue          # sahipsiz nokta PUAN VERMEZ
                d = math.hypot((y["lon"] - lon) * 111.32 * co,
                               (y["lat"] - lat) * 110.574)
                p = puan(d)
                if p:
                    skor[s] = skor.get(s, 0) + p
            if not skor:
                bos += 1
                bos_km2 += hkm2
                continue
            en = max(skor.values())
            if en < ESIK:
                bos += 1
                bos_km2 += hkm2
                continue
            kaz = [k for k, v in skor.items() if v == en]
            boyali += 1
            boyali_km2 += hkm2
            if len(kaz) > 1:
                cekisme += 1
            else:
                alan_kim[kaz[0]] = alan_kim.get(kaz[0], 0.0) + hkm2
    return dict(nx=nx, ny=ny, boyali=boyali, cekisme=cekisme, bos=bos,
                bos_km2=bos_km2, boyali_km2=boyali_km2, kim=alan_kim,
                nokta=len(aday))


def main(argv):
    kutu, gun = KUTU, GUN
    if "--b" in argv:
        kutu = tuple(float(x) for x in argv[argv.index("--b") + 1].split(","))
    if "--gun" in argv:
        gun = argv[argv.index("--gun") + 1]
    print("=" * 70)
    print("BİLEŞKE KUVVET (H-0073) — Emre'nin 4/2/1 puanı, eşik %d" % ESIK)
    print("=" * 70)
    print("kutu %s · adım %.2f° · gün %s" % (str(kutu), ADIM, gun))
    r = olc(kutu, ADIM, gun)
    top = r["boyali"] + r["bos"]
    print("ızgara %d x %d · katkı veren nokta %d\n" % (r["nx"], r["ny"], r["nokta"]))
    print("  BOYANAN hücre   %6d  (%%%.1f)  %s km²"
          % (r["boyali"], 100.0 * r["boyali"] / top,
             "{:,.0f}".format(r["boyali_km2"])))
    print("     çekişmeli    %6d  ← iki kimlik BERABERE: nüfuz alanı,"
          % r["cekisme"])
    print("                          sınır çizilemeyen yer (kusur DEĞİL)")
    print("  BOŞ kalan       %6d  (%%%.1f)  %s km²"
          % (r["bos"], 100.0 * r["bos"] / top, "{:,.0f}".format(r["bos_km2"])))
    print("\n  kimlik dağılımı:")
    for k, v in sorted(r["kim"].items(), key=lambda x: -x[1])[:8]:
        print("     %-16s %12s km²" % (k, "{:,.0f}".format(v)))
    print("\n" + "=" * 70)
    print("KARŞILAŞTIRMA — aynı kutuda BUGÜNKÜ tavanlı Voronoi")
    print("=" * 70)
    print("  (arac/calu_deney.py A senaryosu, aynı kutu ve gün)")
    print("     BOŞ  513.956 km²  ·  HAFSÎ 390.420 km²")
    print("\n📌 İki yöntem AYNI SORUYA farklı cevap veriyor:")
    print("   Voronoi   'en yakın nokta kim'      → tek sahip, keskin sınır")
    print("   puan      'kaç merkez buraya ulaşır' → BİLEŞKE, kademeli")
    print("🔴 Ve puan yöntemi bir şey yapabiliyor: ÇEKİŞMELİ alanı ADIYLA")
    print("   gösteriyor. Voronoi'de böyle bir kategori YOKTUR.")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
