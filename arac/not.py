# -*- coding: utf-8 -*-
"""GELİŞTİRİCİ NOTLARI — Claude tarafı. Emre'nin sitede (geliştirici kipi,
js/gelistirici.js) haritaya / kronoloji maddesine / arayüz öğesine düştüğü
notlar GitHub Issues'tadır (etiket `harita-notu`, durum `not:<anahtar>`).

    py arac/not.py liste [--durum acik] [--hepsi]     açık notlar (--hepsi: arşiv dahil)
    py arac/not.py oku 123                           not + bağlam + yorumlar
                                                     (çok bölgeli notta her bölge numarasıyla)
    py arac/not.py yanit 123 --dosya <yol> [--durum arastiriliyor]
    py arac/not.py durum 123 cozuldu
    py arac/not.py arsivle 123                       yalnız Emre isterse

Durumlar: acik · okundu · arastiriliyor · karar-bekliyor · cozuldu · dogru-bulundu
(js/gelistirici.js `DURUM` ile AYNI liste).

Yanıt metni Bash heredoc'uyla DEĞİL, `Write` ile dosyaya yazılıp `--dosya` ile
verilir (CLAUDE.md: kabuk_nobetci). Yanıtın başına "🤖 **Claude** — " eklenir;
site bu önekle yorumu Claude'unki diye mavi gösterir.

Okuma token'sız çalışır (depo açık; saatte 60 istek). Yazma token ister:
ortam değişkeni ATLAS_GH_TOKEN (ya da GITHUB_TOKEN) veya ~/.atlas_gh_token
dosyası. Token'ı Emre koyar.

Çıkış: 0 tamam · 1 hata (yanlış kullanım, GitHub reddetti) · 2 ölçülemedi (ağ / token yok).
"""
import argparse
import json
import os
import re
import sys
import urllib.error
import urllib.request

DEPO = "emrelic/osmanli-tarih-atlasi"
API = "https://api.github.com/repos/" + DEPO
ETIKET = "harita-notu"
DURUMLAR = ["acik", "okundu", "arastiriliyor", "karar-bekliyor", "cozuldu", "dogru-bulundu"]
SITE = "https://emrelic.github.io/osmanli-tarih-atlasi/"
ONEK = "🤖 **Claude** — "


class Olculemedi(Exception):
    pass


def token():
    t = os.environ.get("ATLAS_GH_TOKEN") or os.environ.get("GITHUB_TOKEN")
    if t:
        return t.strip()
    yol = os.path.join(os.path.expanduser("~"), ".atlas_gh_token")
    if os.path.exists(yol):
        with open(yol, encoding="utf-8") as f:
            return f.read().strip() or None
    return None


def gh(yol, yontem="GET", govde=None, yazma=False):
    t = token()
    if yazma and not t:
        raise Olculemedi("yazma için token yok: ATLAS_GH_TOKEN ya da ~/.atlas_gh_token")
    h = {"Accept": "application/vnd.github+json", "User-Agent": "atlas-not"}
    if t:
        h["Authorization"] = "Bearer " + t
    veri = None
    if govde is not None:
        veri = json.dumps(govde).encode("utf-8")
        h["Content-Type"] = "application/json"
    istek = urllib.request.Request(yol if yol.startswith("http") else API + yol,
                                   data=veri, headers=h, method=yontem)
    try:
        with urllib.request.urlopen(istek, timeout=30) as r:
            ham = r.read().decode("utf-8")
            return json.loads(ham) if ham else None
    except urllib.error.HTTPError as e:
        metin = e.read().decode("utf-8", "replace")[:300]
        if e.code in (401, 403) and "rate limit" not in metin.lower():
            raise RuntimeError("GitHub %d (token yetkisi?): %s" % (e.code, metin))
        if e.code == 403:
            raise Olculemedi("GitHub istek sınırı: " + metin)
        raise RuntimeError("GitHub %d: %s" % (e.code, metin))
    except urllib.error.URLError as e:
        raise Olculemedi("ağ: %s" % e.reason)


def coz(issue):
    m = re.search(r"<!--\s*atlas-not v1\s*([\s\S]*?)\s*-->", issue.get("body") or "")
    v = None
    if m:
        try:
            v = json.loads(m.group(1))
        except ValueError:
            v = None
    durum = "acik"
    for l in issue.get("labels") or []:
        ad = l["name"] if isinstance(l, dict) else l
        if ad.startswith("not:") and ad[4:] in DURUMLAR:
            durum = ad[4:]
    return v, durum


def notlar(hepsi=False):
    cik, sayfa = [], 1
    while True:
        l = gh("/issues?labels=%s&state=%s&per_page=100&page=%d"
               % (ETIKET, "all" if hepsi else "open", sayfa))
        cik += [i for i in l if "pull_request" not in i]
        if len(l) < 100:
            return cik
        sayfa += 1


def bolgeler(v):
    """Notun harita bölgeleri — İKİ BİÇİM (js/gelistirici.js `bolgeler()` ile AYNI):
    v1 tek bölge: hedef.geo + bolge · v2 çok bölge (surum 2): hedef.bolgeler[] +
    bolgeler[] (bağlam `no` ile eşleşir). Döner: [{no, sekil, geo, baglam, ...}]."""
    v = v or {}
    h = v.get("hedef") or {}
    if h.get("tur") != "harita":
        return []

    def gecerli(g):
        return isinstance(g, list) and len(g) > 2

    if isinstance(h.get("bolgeler"), list):
        bg = v.get("bolgeler") if isinstance(v.get("bolgeler"), list) else []
        cik = []
        for i, b in enumerate(x for x in h["bolgeler"] if isinstance(x, dict) and gecerli(x.get("geo"))):
            no = b.get("no") or i + 1
            bag = next((x for x in bg if isinstance(x, dict) and x.get("no") == no), None)
            if bag is None and i < len(bg):
                bag = bg[i]
            cik.append(dict(b, no=no, baglam=bag))
        return cik
    if gecerli(h.get("geo")):
        return [dict(h, no=1, baglam=v.get("bolge"))]
    return []


def cok_bolgeli(v):
    return isinstance(((v or {}).get("hedef") or {}).get("bolgeler"), list)


def hedef_yazi(v):
    h = (v or {}).get("hedef") or {}
    if h.get("tur") == "harita":
        if cok_bolgeli(v):
            rs = bolgeler(v)
            return "harita (%d bölge: %s)" % (len(rs), ", ".join(str(r.get("sekil")) for r in rs))
        return "harita (%s)" % h.get("sekil")
    if h.get("tur") == "madde":
        return "madde: %s" % h.get("b")
    if h.get("tur") == "oge":
        return "öğe: %s" % (h.get("metin") or h.get("secici"))
    return "?"


def k_liste(a):
    l = notlar(a.hepsi)
    satir = []
    for i in l:
        v, d = coz(i)
        if a.durum and d != a.durum:
            continue
        satir.append((v.get("gun") if v else "?", i["number"], d, i["state"],
                      i.get("comments", 0), hedef_yazi(v), i["title"]))
    satir.sort()
    for gun, no, d, st, yc, hd, bas in satir:
        print("#%-4d %-10s %-14s %s yorum:%d  %s  ·  %s" %
              (no, gun, d, "" if st == "open" else "[ARŞİV]", yc, hd, bas))
    print("— %d not" % len(satir))


def baglam_bas(v):
    """Makine okur bağlam. v1 (tek bölge): eski çıktının AYNISI. v2: her bölge
    numarasıyla — şekli, bağlam JSON'u, geo halkası."""
    if cok_bolgeli(v):
        rs = bolgeler(v)
        print("\n[%d bölge — tek not, tek post-it]" % len(rs))
        for r in rs:
            ek = (" · r ≈ %s km" % r["yaricap_km"]) if r.get("yaricap_km") else ""
            print("\n[bölge %s · %s%s]" % (r["no"], r.get("sekil"), ek))
            if r.get("baglam"):
                bag = {k: x for k, x in r["baglam"].items() if k != "no"}
                print("[bağlam JSON — bölge %s]" % r["no"])
                print(json.dumps(bag, ensure_ascii=False, indent=1))
            else:
                print("[bağlam JSON — bölge %s] YOK" % r["no"])
            print("[geo halkası — bölge %s]" % r["no"], json.dumps(r["geo"]))
        return
    if v and v.get("bolge"):
        print("\n[bağlam JSON — bolge]")
        print(json.dumps(v["bolge"], ensure_ascii=False, indent=1))
    if v and v.get("hedef", {}).get("tur") == "harita":
        print("\n[geo halkası]", json.dumps(v["hedef"]["geo"]))


def k_oku(a):
    i = gh("/issues/%d" % a.no)
    v, d = coz(i)
    print("#%d · %s · durum: %s · %s" % (i["number"], i["title"], d, i["state"]))
    print(i["html_url"])
    print("sitede: %s?gelistirici=1&not=%d" % (SITE, i["number"]))
    print()
    print((i.get("body") or "").split("<!--")[0].rstrip())
    baglam_bas(v)
    for c in gh("/issues/%d/comments?per_page=100" % a.no):
        print("\n--- %s · %s" % (c["user"]["login"], c["created_at"]))
        print(c["body"])


def durum_yaz(no, yeni):
    if yeni not in DURUMLAR:
        raise ValueError("durum şunlardan biri olmalı: " + ", ".join(DURUMLAR))
    if not token():
        raise Olculemedi("yazma için token yok: ATLAS_GH_TOKEN ya da ~/.atlas_gh_token")
    i = gh("/issues/%d" % no)
    etiketler = [l["name"] for l in i.get("labels") or [] if not l["name"].startswith("not:")]
    etiketler.append("not:" + yeni)
    gh("/issues/%d/labels" % no, "PUT", {"labels": etiketler}, yazma=True)


def k_yanit(a):
    with open(a.dosya, encoding="utf-8") as f:
        metin = f.read().strip()
    if not metin:
        raise ValueError("yanıt dosyası boş")
    c = gh("/issues/%d/comments" % a.no, "POST", {"body": ONEK + metin}, yazma=True)
    print("yazıldı:", c["html_url"])
    if a.durum:
        durum_yaz(a.no, a.durum)
        print("durum:", a.durum)


def k_durum(a):
    durum_yaz(a.no, a.durum)
    print("#%d durum: %s" % (a.no, a.durum))


def k_arsivle(a):
    gh("/issues/%d/labels" % a.no, "POST", {"labels": ["not:arsiv"]}, yazma=True)
    gh("/issues/%d" % a.no, "PATCH", {"state": "closed", "state_reason": "completed"}, yazma=True)
    print("#%d arşive gitti" % a.no)


def main():
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass
    p = argparse.ArgumentParser(description="Geliştirici notları (GitHub Issues)")
    alt = p.add_subparsers(dest="komut", required=True)
    s = alt.add_parser("liste"); s.add_argument("--durum", choices=DURUMLAR); s.add_argument("--hepsi", action="store_true")
    s.set_defaults(f=k_liste)
    s = alt.add_parser("oku"); s.add_argument("no", type=int); s.set_defaults(f=k_oku)
    s = alt.add_parser("yanit"); s.add_argument("no", type=int); s.add_argument("--dosya", required=True)
    s.add_argument("--durum", choices=DURUMLAR); s.set_defaults(f=k_yanit)
    s = alt.add_parser("durum"); s.add_argument("no", type=int); s.add_argument("durum", choices=DURUMLAR)
    s.set_defaults(f=k_durum)
    s = alt.add_parser("arsivle"); s.add_argument("no", type=int); s.set_defaults(f=k_arsivle)
    a = p.parse_args()
    try:
        a.f(a)
    except Olculemedi as e:
        print("ÖLÇÜLEMEDİ:", e, file=sys.stderr)
        return 2
    except (RuntimeError, ValueError, OSError) as e:
        print("HATA:", e, file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
