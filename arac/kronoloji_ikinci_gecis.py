"""KRONOLOJI-1104 — Liste 2 ikinci geçiş kapsamı.

ACIK-LISTE.tsv'deki (CEKILEMEDI + BULUNAMADI) satırları liste2_sira.tsv ile eşler ve önceliklendirir:
  1 — sınır kırılmasına bağlı (toprak=1, Değişmez 2 evreni)
  2 — künye f/t satırı (evren kunye-kronoloji)
  3 — öteki olay/kültür satırları
Tarayıcı gerektiren (önceki denemede 401/403/Cloudflare/Anubis/ödünç kilidi; Cambridge/JSTOR/HLS/bigenc…) satırlar
ayrı işaretlenir. Çıktı: denetim/KRONOLOJI-1104/IKINCI-GECIS.tsv + özet. Ölçümdür, veri yazmaz.
"""
import collections, csv, os, re

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = os.path.join(KOK, "denetim", "KRONOLOJI-1104")
TARAYICI = re.compile(r"40[13]|cloudflare|anubis|ödünç|odunc|kilitli|paywall|abonelik|cambridge|jstor|\bhls\b|bigenc|"
                      r"bot (doğrulama|koruma)|tarayıcı (gerek|şart)|captcha|oxford reference|britannica 403", re.I)


def main():
    sira = {}
    with open(os.path.join(D, "liste2_sira.tsv"), encoding="utf-8") as f:
        for r in csv.DictReader(f, delimiter="\t"):
            sira["L2-" + r["no"]] = r
    out, say = [], collections.Counter()
    with open(os.path.join(D, "ACIK-LISTE.tsv"), encoding="utf-8") as f:
        for r in csv.DictReader(f, delimiter="\t"):
            no = r["no"].replace("-ek", "")
            s = sira.get(no)
            if s is None:
                oncelik, kademe = "?", ""
            elif s.get("toprak") == "1":
                oncelik, kademe = "1-sinir", s["kademe"]
            elif s.get("evren") == "kunye-kronoloji":
                oncelik, kademe = "2-kunye", s["kademe"]
            else:
                oncelik, kademe = "3-olay", s["kademe"]
            metin = " ".join(r.get(k, "") or "" for k in ("denenen_kaynak", "not"))
            tarayici = "evet" if TARAYICI.search(metin) else ""
            ozet = "evet" if re.search(r"arama özeti|arama ozeti|yalnız özet|snippet", metin, re.I) else ""
            say[(r["sonuc"], oncelik, tarayici)] += 1
            out.append([oncelik, r["sonuc"], tarayici, ozet, r["parti"], r["no"], kademe,
                        s["sira_no"] if s else "", r["dosya_satir"], r["tarih_atlas"], r["baslik"][:120]])
    out.sort(key=lambda x: (x[0], x[2], int(x[7] or 0)))
    yol = os.path.join(D, "IKINCI-GECIS.tsv")
    with open(yol, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, delimiter="\t")
        w.writerow(["oncelik", "sonuc", "tarayici_gerek", "arama_ozeti", "parti", "no", "kademe", "sira_no",
                    "dosya_satir", "tarih_atlas", "baslik"])
        w.writerows(out)
    print("ikinci geçiş kapsamı:", len(out), "satır ->", os.path.relpath(yol, KOK))
    ana = collections.Counter()
    for (s, o, t), n in say.items():
        ana[(o, "tarayıcı" if t else "WebFetch")] += n
    for k in sorted(ana):
        print("  %-8s %-9s %4d" % (k[0], k[1], ana[k]))
    print("  sonuç:", dict(collections.Counter(x[1] for x in out)))
    print("  arama özeti işaretli:", sum(1 for x in out if x[3]))


if __name__ == "__main__":
    main()
