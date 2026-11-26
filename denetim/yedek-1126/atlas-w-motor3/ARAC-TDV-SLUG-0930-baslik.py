# -*- coding: utf-8 -*-
"""TDV-SLUG-HARITA-0930 — tamamlayıcı geçiş: BAŞLIK ARAMASI.

Bulgu (30 Eyl): TDV aynı adlı maddeleri `--` ile ayırır — `hurmuz` 302 ama `hurmuz--iran` 200,
`kuba` 302 ama `kuba--azerbaycan` 200. Slug tahmini bu maddeleri KAÇIRIR.
Sitenin kendi otomatik tamamlama ucu başlık listesini slug'larıyla verir:
  /ajax_search_auto.php?sp=aa&=ac&q=<ad>   (Referer + X-Requested-With başlığıyla)
KRONO-BOSLUK-0930 §8 "arama listesi bulunamadı" demişti (sp=… boş dönmüştü — sp değeri
`aa` olmalıymış; arama sayfasının JS'indeki sr_type).

Evren: hükmü BELIRSIZ ya da YANLIS? olan künyeler. Çekirdek adla (ve aksanlıysa sadeleştirilmiş
adla) sorulur. Başlığı çekirdek adla BAŞLAYAN sonuç "baslik_isabet"e, tümü "baslik_arama"ya yazılır.
Hüküm: isabet varsa BELIRSIZ → "BASLIK-ARAMASI" (elle bakılacak aday madde). Ağ istekleri nazik (0.5 sn).
"""
import json, re, sys, io, time, html, importlib.util, urllib.parse, http.client
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
_s = importlib.util.spec_from_file_location("a", "denetim/ARAC-TDV-SLUG-0930.py")
A = importlib.util.module_from_spec(_s); _s.loader.exec_module(A)
J = "denetim/TDV-SLUG-HARITA-0930.json"
YON = {"orta", "kuzey", "guney", "bati", "dogu", "yukari", "asagi", "buyuk", "kucuk", "yeni", "eski", "ic", "dis",
       "ingiliz", "fransiz", "portekiz", "ispanyol", "hollanda", "alman", "italyan", "rus"}


def ara(q):
    for dn in range(3):
        try:
            h = http.client.HTTPSConnection("islamansiklopedisi.org.tr", timeout=20)
            h.request("GET", "/ajax_search_auto.php?sp=aa&=ac&q=" + urllib.parse.quote(q),
                      headers={"User-Agent": "Mozilla/5.0 (atlas TDV-SLUG-HARITA; olcum)",
                               "X-Requested-With": "XMLHttpRequest",
                               "Referer": "https://islamansiklopedisi.org.tr/arama/?q=" + urllib.parse.quote(q)})
            r = h.getresponse(); g = r.read().decode("utf-8", "replace"); h.close()
            if r.status >= 500:
                time.sleep(3 * (dn + 1)); continue
            if r.status != 200:
                return None
            return [(s, html.unescape(re.sub(r"<[^>]+>", "", t)).replace("\xa0", " ").strip())
                    for s, t in re.findall(r'<a href="/([^"]+)"><li><span class="sr-title">(.*?)</span>', g)]
        except Exception:
            time.sleep(3 * (dn + 1))
    return None


def main():
    d = json.load(open(J, encoding="utf-8"))
    ev = [r for r in d["kunyeler"] if r["hukum"] in ("BELIRSIZ", "YANLIS?")]
    print("EVREN", len(ev))
    for n, r in enumerate(ev, 1):
        ana = re.sub(r"\(.*?\)", "", r["ad"])
        w = [re.split(r"['’]", x)[0] for x in re.split(r"[\s/,\-–·]+", ana)]
        w = [x for x in w if x and A.norm(x) not in YON and A.slugla(x) not in A.GENEL and len(A.slugla(x)) >= 3]
        sorgu = []
        if w:
            sorgu.append(w[0])
            if A.norm(w[0]) != w[0].lower():
                sorgu.append(A.norm(w[0]))
        ic = re.findall(r"\((.*?)\)", r["ad"])
        if ic:
            x = re.split(r"[,/;·]", ic[0])[0].strip()
            if x and A.norm(x) not in YON:
                sorgu.append(x)
        sonuc, isabet = [], []
        for q in sorgu[:3]:
            res = ara(q if not q.startswith("İ") else "i" + q[1:].lower())
            time.sleep(0.5)
            if res is None:
                sonuc.append({"q": q, "ariza": True}); continue
            sonuc.append({"q": q, "n": len(res), "ilk": res[:6]})
            k = A.slugla(q)
            for s, t in res:
                if A.slugla(t).startswith(k[:5]) and (s, t) not in isabet:
                    isabet.append((s, t))
        r["baslik_arama"] = sonuc
        r["baslik_isabet"] = [{"slug": s, "baslik": t} for s, t in isabet]
        if isabet and r["hukum"] == "BELIRSIZ":
            r["hukum"] = "BASLIK-ARAMASI"
        print(f"{n:3d}/{len(ev)} {r['id']:30s} {r['hukum']:15s} {[s for s, _ in isabet][:4]}", flush=True)
    import collections
    d["hukum_dagilimi"] = dict(collections.Counter(r["hukum"] for r in d["kunyeler"]))
    d["baslik_aramasi_evreni"] = len(ev)
    json.dump(d, open(J, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(d["hukum_dagilimi"])


if __name__ == "__main__":
    main()
