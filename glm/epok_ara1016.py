# -*- coding: utf-8 -*-
"""GLM-I EPOK-SAHI P 1016 — ④ sinirini TDV autosuggest ucuyla TAM dogrula.

Ucan: /ajax_search_auto.php?sp=aa&=ac&q=<ad>  (oturumlu; robots Allow /,
site kendi arama kutusunun ucudur). Baslik sayisi + gercek sluglar doner.
Kayit: glm/epok_ara1016.jsonl (ekleme kipi; ad varsa atla).
  sonuc: yok (Baslik 0) · bulundu (normallesmis baslik eslesmesi) ·
         kismi (aday baslik var, eslesme belirsiz — elle bakilir) · hata
Nezaket: 1.05 sn; 5xx/000/403 yeniden dene (403 = oturum tazele).
"""
import io, json, os, re, sys, time, unicodedata, urllib.parse, urllib.request
if __name__ == "__main__":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CIK = os.path.join(KOK, "glm", "epok_ara1016.jsonl")
AS1 = ("Anadolu", "Kırım-Karadeniz", "Balkan", "Ortadoğu", "İran-Kafkas",
       "Kuzey Afrika", "Arabistan-Hint")
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36"
KAVANOZ = {}


def oturum():
    ist = urllib.request.Request("https://islamansiklopedisi.org.tr/arama/?q=oturum",
                                 headers={"User-Agent": UA, "Accept-Language": "tr-TR,tr;q=0.9"})
    with urllib.request.urlopen(ist, timeout=25) as c:
        for k, v in c.headers.items():
            if k.lower() == "set-cookie" and "=" in v.split(";")[0]:
                a, b = v.split(";")[0].split("=", 1)
                KAVANOZ[a.strip()] = b.strip()


def cek(u, deneme=3):
    for n in range(deneme):
        try:
            h = {"User-Agent": UA, "Accept-Language": "tr-TR,tr;q=0.9",
                 "Referer": "https://islamansiklopedisi.org.tr/arama/",
                 "X-Requested-With": "XMLHttpRequest"}
            if KAVANOZ:
                h["Cookie"] = "; ".join(f"{k}={v}" for k, v in KAVANOZ.items())
            with urllib.request.urlopen(urllib.request.Request(u, headers=h), timeout=25) as c:
                return c.status, c.read().decode("utf-8", "replace")
        except urllib.error.HTTPError as ex:
            if ex.code == 403:
                oturum()
                time.sleep(1.5)
                continue
            if ex.code >= 500:
                time.sleep(3 + 2 * n)
                continue
            return ex.code, ""
        except Exception:
            time.sleep(3 + 2 * n)
    return None, ""


def norm(s):
    s = unicodedata.normalize("NFKD", s.replace("İ", "i").replace("I", "i"))
    s = "".join(c for c in s if not unicodedata.combining(c)).lower()
    return re.sub(r"[^a-z0-9]+", " ", s).strip()


def ayikla(html):
    """Baslik sayisi + [(slug, baslik, aciklama)] dondurur."""
    m = re.search(r'as-m[^>]*n(\d+)', html)
    say = int(m.group(1)) if m else -1
    oyeler = []
    for m in re.finditer(r'<a href="/([^"]+)"><li><span class="sr-title">([^<]*)</span>(.*?)</li>', html, re.S):
        slug = m.group(1)
        baslik = re.sub(r"&nbsp;", " ", m.group(2)).strip()
        d = re.search(r'<span class="sr-desc">(.*?)</span>', m.group(3), re.S)
        acik = re.sub(r"<[^>]+>", "", d.group(1)).strip() if d else ""
        oyeler.append({"slug": slug, "baslik": baslik, "aciklama": acik[:90]})
    return say, oyeler


def adaylar(ad):
    a = [ad]
    m = re.match(r"^(.*?)\s*\((.*?)\)\s*$", ad)
    if m:
        if m.group(1).strip():
            a.append(m.group(1).strip())
        if m.group(2).strip():
            a.append(m.group(2).strip())
    return a[:3]


def main():
    yeni = {e["ad"]: e for e in json.load(io.open(os.path.join(KOK, "glm", "epok_evren.json"), encoding="utf-8"))}
    tarama = {}
    for l in io.open(os.path.join(KOK, "glm", "epok_asama1.jsonl"), encoding="utf-8"):
        r = json.loads(l)
        tarama[r["ad"]] = r
    yanlis = {json.loads(l)["ad"] for l in io.open(os.path.join(KOK, "glm", "epok_yanlis1016.jsonl"), encoding="utf-8") if l.strip()}
    var = set()
    if os.path.exists(CIK):
        for l in io.open(CIK, encoding="utf-8"):
            if l.strip():
                var.add(json.loads(l)["ad"])
    kuyruk = []
    for e in yeni.values():
        if e["bolge"] not in AS1:
            continue
        ad = e["ad"]
        r = tarama.get(ad)
        if ad in var:
            continue
        if r and r.get("http") in ("302", "404"):
            kuyruk.append(ad)
        elif ad in yanlis:
            kuyruk.append(ad)
    kuyruk.sort()
    print(f"sorgulanacak: {len(kuyruk)} (atlanan {len(var)})")
    oturum()
    acik_dosya = io.open(CIK, "a", encoding="utf-8")
    hata = 0
    for i, ad in enumerate(kuyruk):
        kay = {"ad": ad, "sorgu": None, "sonuc": "yok", "slug": None, "tumu": []}
        for aday in adaylar(ad):
            u = "https://islamansiklopedisi.org.tr/ajax_search_auto.php?sp=aa&=ac&q=" + urllib.parse.quote(aday)
            kod, govde = cek(u)
            if kod != 200 or not govde:
                hata += 1
                kay["sonuc"] = "hata"
                kay["not"] = f"http={kod}"
                break
            say, oyeler = ayikla(govde)
            kay["sorgu"] = aday
            kay["baslik_sayisi"] = say
            kay["tumu"] = oyeler
            if say == 0 or not oyeler:
                continue                      # siradaki aday
            na = norm(aday)
            tam = [o for o in oyeler if norm(o["baslik"]) == na]
            if tam:
                kay["sonuc"], kay["slug"] = "bulundu", tam[0]["slug"]
                break
            kis = [o for o in oyeler if norm(o["baslik"]).startswith(na) or na.startswith(norm(o["baslik"]))]
            if kis:
                kay["sonuc"], kay["slug"] = "kismi", kis[0]["slug"]
                break
            # basliklar hic benzemiyorsa: farkli kelimeler — sonraki aday
        acik_dosya.write(json.dumps(kay, ensure_ascii=False) + "\n")
        acik_dosya.flush()
        if (i + 1) % 50 == 0:
            print(f"  {i + 1}/{len(kuyruk)} · hata {hata}")
        time.sleep(1.05)
    acik_dosya.close()
    print(f"bitti: {len(kuyruk)} sorgu · hata {hata}")


if __name__ == "__main__":
    main()
