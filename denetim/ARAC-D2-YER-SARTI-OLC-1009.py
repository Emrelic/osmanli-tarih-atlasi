# -*- coding: utf-8 -*-
"""D2-YER-SARTI-OLC-1009 — Değişmez 2'nin d:/v:/isg: kollarına YER ŞARTI eklenirse
kaç kırılma AÇILIR? YALNIZ ÖLÇÜM: denetle.py'yi DEĞİŞTİRMEZ, import eder ve onun
yüklediği aynı evrende (Y_cekirdek, O = olaylar*.js + kronoloji_sinir*.js) sorar.

Birim: 2s ile aynı — kırılma = TARİH; tarih ancak HER yerleşimi (birim = yer×gün)
açıklanmışsa kapanır (Mankup 1349 kuralı). Bugünkü d:/v: kuralı: ±30 günde HERHANGİ
bir madde ⇒ kapalı.

Sıkılıklar (her birim için, ±30 gün penceresinde):
  A  maddenin `yer_id`si ya da `odak_yer`i = nokta ya da noktanın `m:` merkezi
  B  A + madde BAŞLIĞINDA (`b`) noktanın adı (kök + parantez içi ad), norm
     (ARAC-NORMAL-0903), kelime sınırı + özel ad (büyük harf) şartı, eş-ad kökleri
     (`_2S_ES_AD`) hariç
  C  B + `yer_id`si/`odak_yer`i noktaya ≤150 km olan madde
Açılanların sınıfı (sıkılıktan bağımsız GEVŞEK "yeri anıyor" ölçütüyle):
  GEVŞEK = A ∪ (ad b+yer+d metninde, özel ad) ∪ (merkez adı b+yer metninde)
  ESLESTIRME  ±30 içinde GEVŞEK'i tutan madde var (alan farklı yazılmış)
  KAYMA       ±30 içinde yok, ±365 içinde GEVŞEK'i tutan madde var
  MADDESIZ    ±365 içinde hiç yok
Kesen iki BAYRAK (sınıfı değiştirmez, ayrıca sayılır):
  TARAF       ±30 içinde, noktanın o gün el değiştirdiği KARŞI devletin (`s:`/`isg:`
              ucundaki `d:`) künye adı madde BAŞLIĞINDA geçiyor (2s TARAF kolu ①;
              Osmanlı tarafı aday SAYILMAZ — her başlıkta geçer, ölçmez)
  AYNIGUN     kırılma günü `YYYY-01-01` DEĞİL ve tam o güne (fark 0) yazılmış madde
              var ⇒ gün o maddeden alınmış, toplu devir olası (olay maddesi yer saymıyor)
Kullanım:  py denetim/ARAC-D2-YER-SARTI-OLC-1009.py [--json çıktı.json] [--sinav]
  --sinav  iki yönlü sınav: Divriği 1401-01-01 maddesi bellekte ÇIKARILINCA A/B açmalı,
           yerindeyken açmamalı (bugünkü kural ikisinde de KAPALI der — ilgisiz
           "Diyarbekir 1401-01-01" yüzünden)
"""
import importlib.util
import io
import json
import math
import os
import re
import sys
from collections import defaultdict

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import denetle as D  # noqa: E402  (stdout sarmalayıcısı korumalı)

_sp = importlib.util.spec_from_file_location(
    "arac_normal", os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py"))
_nm = importlib.util.module_from_spec(_sp)
_sp.loader.exec_module(_nm)
norm = _nm.norm

PENCERE, KAYMA_UFUK, KM = 30, 365, 150.0


def km(a, b):
    la1, lo1, la2, lo2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = (math.sin((la2 - la1) / 2) ** 2
         + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2)
    return 6371.0 * 2 * math.asin(math.sqrt(min(1.0, h)))


def adlar_of(ad):
    kok = norm(re.sub(r"\s*\(.*?\)", "", ad or "").strip())
    out = [kok] if len(kok) >= 3 else []
    for p in re.findall(r"\((.*?)\)", ad or ""):
        n = norm(p)
        if len(n) >= 3 and n not in out:
            out.append(n)
    return out


def ozel_gecer(nrm, kor, ad_n, ham_ad):
    """kelime sınırı + ham metinde büyük harf (denetle._2s_ozel_ad_gecer mantığı)."""
    if not ad_n or len(ad_n) < 3:
        return False
    hizali = kor is not None and len(kor) == len(nrm)
    kucuk = (ham_ad or "")[:1].islower()
    for e in re.finditer(r"(?<![a-z0-9])" + re.escape(ad_n) + r"(?![a-z0-9])", nrm):
        if not hizali or kucuk or kor[e.start()].isupper():
            return True
    return False


def hazirla(O, YIX):
    M = []
    for i, o in enumerate(O):
        oy = o.get("odak_yer") or []
        if isinstance(oy, str):
            oy = [oy]
        yerler = [x for x in ([o.get("yer_id")] + list(oy)) if x]
        koords = [(YIX[x]["lat"], YIX[x]["lon"]) for x in yerler
                  if x in YIX and YIX[x].get("lat") is not None]
        b, yer, d = o.get("b") or "", o.get("yer") or "", o.get("d") or ""
        M.append({
            "i": i, "g": D.gun_no(o["t"]), "t": o["t"], "b": b,
            "yerler": set(yerler), "koord": koords,
            "nb": norm(b), "kb": D._2s_kor(b),
            "nt": norm(" ".join([b, yer, d])), "kt": D._2s_kor(" ".join([b, yer, d])),
            "ny": norm(" ".join([b, yer])),
        })
    return M


class Olcer:
    def __init__(self, Y, O, YIX):
        self.YIX = YIX
        self.M = hazirla(O, YIX)
        self._cache = {}

    def seviye(self, m, ad):
        """Maddenin bu noktayı hangi en sıkı düzeyde andığı: 'A','B','C' ya da None;
        ayrıca GEVŞEK (sınıflama) bayrağı."""
        key = (m["i"], ad)
        if key in self._cache:
            return self._cache[key]
        y = self.YIX.get(ad, {})
        mer = y.get("m") or ""
        hedef = {ad} | ({mer} if mer else set())
        adl = adlar_of(ad)
        es = any(a in D._2S_ES_AD for a in adl)
        A = bool(m["yerler"] & hedef)
        B = A or (not es and any(ozel_gecer(m["nb"], m["kb"], a, ad) for a in adl))
        C = B
        if not C and y.get("lat") is not None:
            C = any(km((y["lat"], y["lon"]), k) <= KM for k in m["koord"])
        gev = B or (not es and any(ozel_gecer(m["nt"], m["kt"], a, ad) for a in adl))
        if not gev and mer:
            nm_ = norm(mer)
            gev = len(nm_) >= 3 and re.search(
                r"(?<![a-z0-9])" + re.escape(nm_) + r"(?![a-z0-9])", m["ny"]) is not None
        r = ("A" if A else "B" if B else "C" if C else None, gev)
        self._cache[key] = r
        return r

    def en_yakin_anan(self, ad, gd):
        best = None
        for m in self.M:
            _s, gev = self.seviye(m, ad)
            if gev:          # GEVŞEK ⊇ B ⊇ A; C (≤150 km) "yeri anmak" SAYILMAZ
                f = abs(m["g"] - gd)
                if best is None or f < best[0]:
                    best = (f, m)
        return best


SIRA = {"A": 0, "B": 1, "C": 2}


def olc(Y, O, YIX, kategoriler, ol):
    kir, acik = D.degismez2(Y, O, kategoriler)
    acik_t = {a[0] for a in acik}
    sonuc = {"kirilma": len(kir), "acik_bugun": len(acik_t), "seviye": {}}
    satirlar = []          # tarih bazında
    for d in sorted(kir):
        if d in acik_t:
            continue
        gd = D.gun_no(d)
        yakin = [m for m in ol.M if abs(m["g"] - gd) <= PENCERE]
        birimler = []
        for ad in sorted(kir[d]["ad"]):
            en_iyi, gev30 = None, False
            for m in yakin:
                s, gev = ol.seviye(m, ad)
                if s and (en_iyi is None or SIRA[s] < SIRA[en_iyi]):
                    en_iyi = s
                gev30 = gev30 or gev
            karsi = set()
            for kat in ("s", "isg", "v", "d"):
                for p in (YIX.get(ad, {}).get(kat) or []):
                    if (p.get("f") == d or p.get("t") == d) and p.get("d"):
                        karsi.add(p["d"])
            karsi.discard("osmanli")
            taraf = any(D._2s_gecer(m["nb"], a) for m in yakin for sid in karsi
                        for a in D._2s_taraf_adaylari(sid))
            birimler.append({"ad": ad, "en_iyi": en_iyi, "gev30": gev30,
                             "taraf": taraf, "karsi": sorted(karsi)})
        satirlar.append((d, gd, yakin, birimler, kir[d]["t"]))
    for L in ("A", "B", "C"):
        acilan, birim_acik = [], 0
        sinif = defaultdict(int)
        bayrak = defaultdict(int)
        for d, gd, yakin, birimler, tip in satirlar:
            aynigun = d[4:] != "-01-01" and any(m["g"] == gd for m in yakin)
            eksik = [b for b in birimler
                     if b["en_iyi"] is None or SIRA[b["en_iyi"]] > SIRA[L]]
            if not eksik:
                continue
            birim_acik += len(eksik)
            det = []
            for b in eksik:
                ya = ol.en_yakin_anan(b["ad"], gd)
                if b["gev30"]:
                    s = "ESLESTIRME"
                elif ya and ya[0] <= KAYMA_UFUK:
                    s = "KAYMA"
                else:
                    s = "MADDESIZ"
                sinif[s] += 1
                bayrak["TARAF"] += b["taraf"]
                bayrak["AYNIGUN"] += aynigun
                bayrak["TARAF_veya_AYNIGUN"] += (b["taraf"] or aynigun)
                det.append({"ad": b["ad"], "m": YIX.get(b["ad"], {}).get("m") or "",
                            "sinif": s, "taraf": b["taraf"], "karsi": b["karsi"],
                            "aynigun": aynigun,
                            "en_yakin_anan": (None if not ya else
                                              {"fark": ya[0], "t": ya[1]["t"],
                                               "b": ya[1]["b"][:90]})})
            kapatan = sorted(yakin, key=lambda m: abs(m["g"] - gd))
            acilan.append({"t": d, "tip": tip, "nokta_sayisi": len(birimler),
                           "eksik": det,
                           "kapatan": [{"fark": abs(m["g"] - gd), "t": m["t"],
                                        "b": m["b"][:90]} for m in kapatan[:3]],
                           "kapatan_sayisi": len(kapatan)})
        sonuc["seviye"][L] = {"acilan_tarih": len(acilan), "acilan_birim": birim_acik,
                              "sinif": dict(sinif), "bayrak": dict(bayrak),
                              "liste": acilan}
    sonuc["birim_toplam_kapali"] = sum(len(s[3]) for s in satirlar)
    return sonuc


def kumeler(liste, n=20):
    k = defaultdict(list)
    for a in liste:
        for e in a["eksik"]:
            k[(a["t"], e["m"] or e["ad"])].append(e)
    return sorted(k.items(), key=lambda kv: -len(kv[1]))[:n]


def sinav(Yc, O, YIX):
    """İki yön: Divriği 1401-01-01 kaybı."""
    print("\n--- SINAV (iki yön) ---")
    hedef = "Divriği, Timur tehlikesi"
    for etiket, O2 in (("madde YERİNDE", O),
                       ("madde ÇIKARILDI", [o for o in O if not (o.get("b") or "").startswith(hedef)])):
        ol2 = Olcer(Yc, O2, YIX)
        r = olc(Yc, O2, YIX, ("d", "v"), ol2)
        bugun = "AÇIK" if any(a[0] == "1401-01-01" for a in D.degismez2(Yc, O2)[1]) else "KAPALI"
        hit = {L: any(a["t"] == "1401-01-01" and any(e["ad"] == "Divriği" for e in a["eksik"])
                      for a in r["seviye"][L]["liste"]) for L in "ABC"}
        print(f"  {etiket:<16} ({len(O)-len(O2)} madde çıkarıldı) bugünkü kural: {bugun} · "
              + " · ".join(f"{L}: {'AÇAR' if v else 'kapalı'}" for L, v in hit.items()))


def main():
    out = None
    if "--json" in sys.argv:
        out = sys.argv[sys.argv.index("--json") + 1]
    Y = D.yerlesimleri_yukle()
    O = D.olaylari_yukle()
    Yc = [y for y in Y if y.get("_kaynak") not in D.KUYRUK_DOSYALARI]
    YIX = {y["ad"]: y for y in Y}
    ol = Olcer(Yc, O, YIX)
    print(f"Evren: {len(Y)} yerleşim ({len(Yc)} çekirdek), {len(O)} madde")
    R = {}
    for ad_, kat in (("dv", ("d", "v")), ("d", ("d",)), ("v", ("v",)), ("isg", ("isg",))):
        r = olc(Yc, O, YIX, kat, ol)
        R[ad_] = r
        kap = r["kirilma"] - r["acik_bugun"]
        print(f"\n=== kol {ad_}: {r['kirilma']} kırılma, bugün açık {r['acik_bugun']}, "
              f"kapalı {kap} tarih / {r['birim_toplam_kapali']} birim")
        for L in "ABC":
            s = r["seviye"][L]
            print(f"  {L}: açılan {s['acilan_tarih']} tarih ({s['acilan_birim']} birim) "
                  f"· sınıf {s['sinif']} · bayrak {s['bayrak']}")
    for L in "ABC":
        print(f"\n--- en büyük 20 küme (dv, {L}) ---")
        for (t, b), es in kumeler(R["dv"]["seviye"][L]["liste"]):
            print(f"  {t}  {b:<22} {len(es):3d}  "
                  f"{dict((s, sum(1 for e in es if e['sinif']==s)) for s in ('ESLESTIRME','KAYMA','MADDESIZ'))}")
    if "--sinav" in sys.argv:
        sinav(Yc, O, YIX)
    # sınav noktaları
    print("\n--- sınav noktaları (dv) ---")
    for ad in ("Divriği", "Erciş", "Kars", "Kağızman", "Ardahan", "Çıldır", "Arpaçay"):
        for L in "ABC":
            hit = [(a["t"], e["sinif"]) for a in R["dv"]["seviye"][L]["liste"]
                   for e in a["eksik"] if e["ad"] == ad]
            print(f"  {ad:<10} {L}: {hit[:6]}")
    if out:
        with open(out, "w", encoding="utf-8") as f:
            json.dump(R, f, ensure_ascii=False, indent=1)
        print(f"\nJSON: {out}")


if __name__ == "__main__":
    main()
