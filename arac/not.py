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

POST-İT KUYRUĞU (Emre 16 Ekim 2026 — `/postit` skill'i, 1 not = 1 oturum):
    py arac/not.py al [N]                            bu oturumun notu varsa onu, yoksa sıradaki
                                                     sahipsiz notu (ya da #N'i) al, tam metnini bas
                                                     · çıkış 3 = alınacak not yok
    py arac/not.py yanit 123 --dosya <yol> --durum karar-bekliyor
    py arac/not.py birak 123                         notu bırak (Emre isterse)
    py arac/not.py al 12 --zorla                     canlı başka oturumdaki notu devral (Emre "zorla" dedi)
    py arac/not.py al --model sonnet                 `model:opus` notlarını atla
    py arac/not.py opus 123                          motor notu: `model:opus` koy ve bırak
    py arac/not.py son-doldur                        eski notlara `son:` etiketini bir kez yaz

Etiketler: `son:claude` | `son:emre` = son sözü kim söyledi (site listede gösterir) ·
`oturum:<id>` = notun sahibi oturum (id = CLAUDE_CODE_SESSION_ID'nin ilk 6 hanesi,
kilit.py'nin `oturum-xxxxxx` adıyla aynı).
UHDE (Emre 16 Ekim 2026): not ARŞİVE KADAR sahibinde kalır — cevap yazmak bırakmaz. Sahipsiz
not (yeni, eski/hiç sahiplenilmemiş, Emre'nin sitede "sahipsiz bırak"tığı) kim yazmış olursa
olsun alınabilir. Güvenlik ağı: sahip SURE_SAAT (7 gün) boyunca ne etiket koydu ne Claude yorumu
yazdıysa düşmüş sayılır.
GitHub'da kilit olmadığı için iki oturum aynı anda alabilir — `al` etiketi koyduktan sonra
olay geçmişini okur, etiketi İLK koyan kazanır, kaybeden kendi etiketini siler.

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
import urllib.parse
import urllib.request

DEPO = "emrelic/osmanli-tarih-atlasi"
API = "https://api.github.com/repos/" + DEPO
ETIKET = "harita-notu"
DURUMLAR = ["acik", "okundu", "arastiriliyor", "karar-bekliyor", "cozuldu", "dogru-bulundu"]
SITE = "https://emrelic.github.io/osmanli-tarih-atlasi/"
ONEK = "🤖 **Claude** — "
SON = "son:"
YENI = "yeni:claude"   # Emre'nin okumadığı Claude mesajı (js/gelistirici.js aynı ad)
OTURUM = "oturum:"
SURE_SAAT = 7 * 24
MODEL_OPUS = "model:opus"   # motor/geometri notu: Sonnet oturumu almaz, sitede 🧠 Opus rozeti
BOS_YOK = 3          # `al`: alınacak not yok (hata değil)


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


# ------------------------------------------------------------- POST-İT KUYRUĞU
def etiketler(issue):
    return [l["name"] if isinstance(l, dict) else l for l in issue.get("labels") or []]


def son_yazan(issue):
    """'claude' | 'emre' | None (eski not, `son-doldur` görmemiş). Yorumsuz not Emre'nindir."""
    for ad in etiketler(issue):
        if ad.startswith(SON):
            return ad[len(SON):]
    return "emre" if not issue.get("comments") else None


def sahip_etiketleri(issue):
    return [ad for ad in etiketler(issue) if ad.startswith(OTURUM)]


def ben():
    sid = os.environ.get("CLAUDE_CODE_SESSION_ID") or os.environ.get("CLAUDE_SESSION_ID") or ""
    if not sid:
        raise ValueError("oturum kimliği yok (CLAUDE_CODE_SESSION_ID) — --kim ver")
    return sid[:6]


def kim_coz(a):
    k = getattr(a, "kim", None) or ben()
    return k[len("oturum-"):] if k.startswith("oturum-") else k


def etiket_sil(no, ad):
    try:
        gh("/issues/%d/labels/%s" % (no, urllib.parse.quote(ad, safe="")), "DELETE", yazma=True)
    except RuntimeError as e:
        if "GitHub 404" not in str(e):
            raise


def son_yaz(issue, kim):
    """`son:<kim>`; Claude yazdıysa `yeni:claude` da konur (Emre'ye okunmamış mesaj —
    site notun panelini açınca siler)."""
    no = issue["number"]
    gh("/issues/%d/labels" % no, "POST",
       {"labels": [SON + kim] + ([YENI] if kim == "claude" else [])}, yazma=True)
    for ad in etiketler(issue):
        if ad.startswith(SON) and ad != SON + kim:
            etiket_sil(no, ad)


def etiket_olaylari(no):
    """{etiket adı: (son 'labeled' olay id'si, zamanı)} — yalnız `oturum:` etiketleri."""
    cik = {}
    for o in gh("/issues/%d/events?per_page=100" % no) or []:
        ad = (o.get("label") or {}).get("name", "")
        if o.get("event") == "labeled" and ad.startswith(OTURUM):
            cik[ad] = (o["id"], o["created_at"])
    return cik


def bayat(zaman):
    import datetime
    t = datetime.datetime.strptime(zaman, "%Y-%m-%dT%H:%M:%SZ").replace(tzinfo=datetime.timezone.utc)
    return (datetime.datetime.now(datetime.timezone.utc) - t).total_seconds() > SURE_SAAT * 3600


def son_claude_yorumu(no):
    """Notun son Claude yorumunun zamanı (yoksa '') — sahibin hâlâ çalıştığının izi."""
    zaman = ""
    for c in gh("/issues/%d/comments?per_page=100" % no) or []:
        if re.match(r"^\s*(🤖|\*\*Claude)", c.get("body") or ""):
            zaman = c["created_at"]
    return zaman


def alinabilir_mi(issue, kim, zorla=False, model=None):
    """(evet/hayır, gerekçe). UHDE: sahipsiz not her zaman alınabilir (son yazan kim olursa
    olsun); sahipli not sahibinde kalır, sahip 7 gündür sessizse düşmüş sayılır.
    zorla: Emre "/postit N zorla" dedi — canlı sahipten devral.
    model: oturumun modeli; `model:opus` etiketli notu Opus olmayan oturum almaz."""
    if model and model != "opus" and MODEL_OPUS in etiketler(issue):
        return False, "Opus ister (%s)" % MODEL_OPUS
    sahipler = [s for s in sahip_etiketleri(issue) if s != OTURUM + kim]
    if not sahipler:
        return True, ""
    if zorla:
        return True, "Emre'nin isteğiyle devralınıyor: " + ", ".join(sahipler)
    ol = etiket_olaylari(issue["number"])
    yorum = son_claude_yorumu(issue["number"])
    canli = [s for s in sahipler if s not in ol or not bayat(max(ol[s][1], yorum))]
    if canli:
        return False, "başka oturumda: " + ", ".join(canli)
    return True, "7 gündür sessiz sahip düşürülecek: " + ", ".join(sahipler)


def almaya_calis(issue, kim):
    """Etiketi koy, olay geçmişinden kazananı oku. Kazandıysa True."""
    no, ben_et = issue["number"], OTURUM + kim
    for s in sahip_etiketleri(issue):
        if s != ben_et:
            etiket_sil(no, s)               # alinabilir_mi bayat dedi
    gh("/issues/%d/labels" % no, "POST", {"labels": [ben_et]}, yazma=True)
    simdi = set(sahip_etiketleri(gh("/issues/%d" % no)))
    ol = etiket_olaylari(no)
    adaylar = sorted((ol.get(s, (float("inf"), ""))[0], s) for s in simdi)
    if adaylar and adaylar[0][1] == ben_et:
        return True
    etiket_sil(no, ben_et)
    return False


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
        sahip = ",".join(s[len(OTURUM):] for s in sahip_etiketleri(i)) or "-"
        satir.append((v.get("gun") if v else "?", i["number"], d, i["state"],
                      i.get("comments", 0), son_yazan(i) or "?", sahip, hedef_yazi(v), i["title"]))
    satir.sort()
    for gun, no, d, st, yc, son, sahip, hd, bas in satir:
        print("#%-4d %-10s %-14s %s yorum:%d son:%-6s oturum:%-6s  %s  ·  %s" %
              (no, gun, d, "" if st == "open" else "[ARŞİV]", yc, son, sahip, hd, bas))
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
    metin = re.sub(r"^\s*🤖\s*\*\*Claude\*\*\s*—\s*", "", metin)   # önek iki kez basılmasın
    c = gh("/issues/%d/comments" % a.no, "POST", {"body": ONEK + metin}, yazma=True)
    print("yazıldı:", c["html_url"])
    if a.durum:
        durum_yaz(a.no, a.durum)
        print("durum:", a.durum)
    i = gh("/issues/%d" % a.no)
    son_yaz(i, "claude")
    if a.birak:
        k_birak(a)


def k_al(a):
    kim = kim_coz(a)
    if a.no:
        # 1 oturum = 1 not: bu oturumun başka bir notu varsa yenisini alma.
        diger = [i["number"] for i in notlar()
                 if OTURUM + kim in sahip_etiketleri(i) and i["number"] != a.no]
        if diger:
            print("Bu oturumun zaten notu var: #%d — ikinci not alınmaz (yeni oturum aç)." % diger[0])
            return BOS_YOK
        adaylar = [gh("/issues/%d" % a.no)]
    else:
        adaylar = notlar()
        # Bu oturumun zaten bir notu varsa "/postit" = devam: o notu bas, yenisini alma.
        benim = [i for i in adaylar if OTURUM + kim in sahip_etiketleri(i)]
        if benim:
            i = min(benim, key=lambda x: x["number"])
            print("#%d bu oturumun notu (oturum:%s) — devam\n" % (i["number"], kim))
            return k_oku(argparse.Namespace(no=i["number"]))
        # Sıra: sahipsizler önce (sahipliler yalnız 7 gün sessizse alınır); içinde Emre'nin
        # yazdıkları (son:emre) önce, sonra eski notlar; en eski önce.
        adaylar = sorted(adaylar, key=lambda i: (bool(sahip_etiketleri(i)),
                                                 son_yazan(i) != "emre", i["number"]))
    for i in adaylar:
        if OTURUM + kim in sahip_etiketleri(i):
            print("#%d zaten bu oturumda (oturum:%s) — devam\n" % (i["number"], kim))
            return k_oku(argparse.Namespace(no=i["number"]))
        evet, neden = alinabilir_mi(i, kim, zorla=a.zorla and bool(a.no), model=a.model)
        if not evet:
            if a.no:
                print("#%d alınamadı: %s" % (i["number"], neden))
                return BOS_YOK
            continue
        if almaya_calis(i, kim):
            print("ALINDI #%d · oturum:%s%s\n" % (i["number"], kim, (" · " + neden) if neden else ""))
            return k_oku(argparse.Namespace(no=i["number"]))
        print("#%d yarışı kaybedildi, sıradakine geçiliyor" % i["number"], file=sys.stderr)
    print("Alınacak not yok (hepsi başka oturumlarda).")
    return BOS_YOK


def k_birak(a):
    etiket_sil(a.no, OTURUM + kim_coz(a))
    print("#%d bırakıldı" % a.no)


def k_opus(a):
    """Sonnet oturumu motor/geometri notu aldıysa: işe girişmeden işaretle ve bırak.
    `--dosya` verilirse o ana kadarki bulgu yorum olarak yazılır ama `son:` DEĞİŞMEZ →
    not Opus oturumu için alınabilir kalır, Opus bulguyu yazışmada okur."""
    if a.dosya:
        with open(a.dosya, encoding="utf-8") as f:
            metin = f.read().strip()
        if metin:
            gh("/issues/%d/comments" % a.no, "POST",
               {"body": ONEK + "(ara bulgu — Opus devralacak) " + metin}, yazma=True)
    gh("/issues/%d/labels" % a.no, "POST", {"labels": [MODEL_OPUS]}, yazma=True)
    k_birak(a)
    print("#%d → %s" % (a.no, MODEL_OPUS))


def k_son_doldur(a):
    n = 0
    for i in notlar():
        if son_yazan(i) is not None and any(x.startswith(SON) for x in etiketler(i)):
            continue
        yorumlar = gh("/issues/%d/comments?per_page=100" % i["number"]) or []
        kim = "emre"
        if yorumlar and re.match(r"^\s*(🤖|\*\*Claude)", yorumlar[-1].get("body") or ""):
            kim = "claude"
        son_yaz(i, kim)
        n += 1
        print("#%d son:%s" % (i["number"], kim))
    print("— %d nota `son:` yazıldı" % n)


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
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass
    p = argparse.ArgumentParser(description="Geliştirici notları (GitHub Issues)")
    alt = p.add_subparsers(dest="komut", required=True)
    s = alt.add_parser("liste"); s.add_argument("--durum", choices=DURUMLAR); s.add_argument("--hepsi", action="store_true")
    s.set_defaults(f=k_liste)
    s = alt.add_parser("oku"); s.add_argument("no", type=int); s.set_defaults(f=k_oku)
    s = alt.add_parser("yanit"); s.add_argument("no", type=int); s.add_argument("--dosya", required=True)
    s.add_argument("--durum", choices=DURUMLAR); s.add_argument("--birak", action="store_true")
    s.add_argument("--kim"); s.set_defaults(f=k_yanit)
    s = alt.add_parser("al"); s.add_argument("no", type=int, nargs="?"); s.add_argument("--kim")
    s.add_argument("--zorla", action="store_true"); s.add_argument("--model", choices=["opus", "sonnet", "haiku"])
    s.set_defaults(f=k_al)
    s = alt.add_parser("opus"); s.add_argument("no", type=int); s.add_argument("--kim"); s.add_argument("--dosya")
    s.set_defaults(f=k_opus)
    s = alt.add_parser("birak"); s.add_argument("no", type=int); s.add_argument("--kim")
    s.set_defaults(f=k_birak)
    s = alt.add_parser("son-doldur"); s.set_defaults(f=k_son_doldur)
    s = alt.add_parser("durum"); s.add_argument("no", type=int); s.add_argument("durum", choices=DURUMLAR)
    s.set_defaults(f=k_durum)
    s = alt.add_parser("arsivle"); s.add_argument("no", type=int); s.set_defaults(f=k_arsivle)
    a = p.parse_args()
    try:
        return a.f(a) or 0
    except Olculemedi as e:
        print("ÖLÇÜLEMEDİ:", e, file=sys.stderr)
        return 2
    except (RuntimeError, ValueError, OSError) as e:
        print("HATA:", e, file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
