"""KORIDOR-0081 — rng7 JSON'larından evren karşılaştırması + S0/S1/S2 MAKİNE sınıflaması.

Her ihlal kaydı için (ada noktası P = kaydın yerleşimi, B = D7'nin "ana" noktası):
  mercek = o gün sahibi YAZILI ya da sahipsiz, kurulmuş, P ve B'den başka noktalar
           ki uzak(q,P) < uzak(P,B) ve uzak(q,B) < uzak(P,B)
  S0  aralık = uzak(P,B) / (n_mercek+1) > 40 km          (ETİKET — sonlandırıcı değil)
  S1  mercekte o gün SAHİPSİZ nokta var                  (öncü/iç boşluk koridorda)
  S2  adanın o günkü döneminde kaynak yok — dönemde de kayıtta da `kaynak:` alanı yok
      ya da kaynak "veri-içi sözleşme" (D207: atlasın kendisi)
S3 (kur:/kuruluş) makineyle sorulamaz — kaynak ister, sayılmadı.
⚠️ Bu yalnız "ucuz sorular hangi payı eliyor" ölçümüdür; S2 = "uzak kayıt kaynaksız"
bir ŞÜPHEDİR, "yanlış" hükmü değildir.

Kullanım: py denetim/KORIDOR-0081-rng7-fark.py <d7-json> <kip-json> [<kip-json> ...]
"""
import json
import re
import sys

sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8")
import girdi  # noqa: E402

VERI_ICI = re.compile(r"veri.?i[cç]i", re.I)


def donem_bul(y, gun, sahip):
    kats = ("d", "v") if sahip == "OSMANLI" else ("s",)
    for k in kats:
        for p in y.get(k) or []:
            if p.get("f") == gun and (k != "s" or p.get("d") == sahip):
                return p
    return None


def sahip_gun(y, g):
    for k in ("d", "v"):
        for p in y.get(k) or []:
            if p.get("f", "") <= g < p.get("t", "9999"):
                return "OSMANLI"
    for p in y.get("s") or []:
        if p.get("f", "") <= g < p.get("t", "9999"):
            return p.get("d")
    return None


def sinifla(kayitlar, Y, ada):
    km = girdi.km
    say = {"S0": 0, "S1": 0, "S2": 0, "S1|S2": 0, "herhangi": 0, "hicbiri": 0}
    for r in kayitlar:
        P, B, g, s = ada[r["yerlesim"]], ada.get(r["ana"]), r["gun"], r["sahip"]
        s0 = s1 = False
        if B is not None:
            d = km(P["lat"], P["lon"], B["lat"], B["lon"])
            merc = [q for q in Y if q is not P and q is not B
                    and not (q.get("kur") and q["kur"] > g)
                    and km(q["lat"], q["lon"], P["lat"], P["lon"]) < d
                    and km(q["lat"], q["lon"], B["lat"], B["lon"]) < d]
            merc = [q for q in merc if sahip_gun(q, g) != s]
            s0 = d / (len(merc) + 1) > 40
            s1 = any(sahip_gun(q, g) is None and (q.get("d") or q.get("s") or q.get("v"))
                     for q in merc)
        p = donem_bul(P, g, s) or {}
        kay = p.get("kaynak") or P.get("kaynak") or ""
        s2 = (not kay) or bool(VERI_ICI.search(kay))
        say["S0"] += s0
        say["S1"] += s1
        say["S2"] += s2
        say["S1|S2"] += s1 or s2
        say["herhangi"] += s0 or s1 or s2
        say["hicbiri"] += not (s0 or s1 or s2)
    return say


def yuzde(say, n):
    return " · ".join(f"{k} {v} (%{100 * v / max(n, 1):.0f})" for k, v in say.items())


def main():
    Y = [y for y in girdi.yukle(sessiz=True) if y.get("lat") is not None]
    ada = {y["ad"]: y for y in Y}
    ilk = json.load(open(sys.argv[2], encoding="utf-8"))
    d7 = ilk["d7"]
    print(f"D7 evreni ({len(d7)}): {yuzde(sinifla(d7, Y, ada), len(d7))}")
    for yol in sys.argv[2:]:
        J = json.load(open(yol, encoding="utf-8"))
        idx = {(r["gun"], r["yerlesim"], r["sahip"]): r for r in J["rng"]}
        kac = [idx[tuple(k)] for k in J["kacan"]]
        kova = {}
        for r in kac:
            kova[r["kova"]] = kova.get(r["kova"], 0) + 1
        print(f"\n{yol}: kova {len(J['rng'])} · kesişim {len(J['kesisim'])} · "
              f"D7'nin kaçırdığı {len(kac)} {kova} · düşen {len(J['dusen'])}")
        print(f"  kaçanlar: {yuzde(sinifla(kac, Y, ada), len(kac))}")


if __name__ == "__main__":
    main()
