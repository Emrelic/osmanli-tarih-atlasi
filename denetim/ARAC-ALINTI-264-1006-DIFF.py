# ARAC-ALINTI-264-1006-DIFF — hüküm (ALINTI-264-1006-HUKUM.json) + ölçüm TSV'sinden tırnak kaldırma diff'i üretir.
#
# SALT OKUR: veri dosyalarına YAZMAZ. Dosya içeriğini `git show HEAD:<yol>` blob'undan okur (satır sonu deponun
# kendi biçimi: devletler.js -text/CRLF korunur, ötekiler LF), yalnız diff ve TSV yazar.
# Kullanım: py ARAC-ALINTI-264-1006-DIFF.py --olcum <olc.tsv> --cikti-kok <denetim/ALINTI-264-1006>
#   → <kok>.diff (UMIT sırası) · <kok>-KOORD.diff (yerlesimler*/yer_yama*/yama_*) · <kok>.tsv
#
# Kural (OLCUM-KITA-SARTLARI §5): A ve D hükmünde YALNIZ tırnak karakterleri silinir — metne tek harf eklenmez,
# metinden tek harf çıkarılmaz (tırnağı gövdeye uydurmak YASAK). V/VY/T/M satırına dokunulmaz.
import sys, os, re, csv, json, argparse, subprocess, difflib
from collections import Counter

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ap = argparse.ArgumentParser()
ap.add_argument("--olcum", required=True)
ap.add_argument("--cikti-kok", required=True)
ap.add_argument("--dok", default=None, help="sınav için: değişen dosyaların SON hâlini bu dizine (veri ağacının DIŞINA) yazar")
a = ap.parse_args()

H = json.load(open(os.path.join(KOK, "denetim", "ALINTI-264-1006-HUKUM.json"), encoding="utf-8"))
SINIF = {}
for s in ("M", "V", "VY", "D", "T"):
    for k, v in H[s].items():
        SINIF[int(k)] = (s, v)
NOT = {int(k): v for k, v in H["A_not"].items()}

ACAN = {'\\"': '\\"', '"': '"', "'": "'", "“": "”", "‘": "’", "«": "»"}


def blob(yol):
    r = subprocess.run(["git", "-C", KOK, "show", "HEAD:" + yol], capture_output=True)
    return r.stdout.decode("utf-8") if r.returncode == 0 else None


DOSYA, DEGISEN = {}, {}
JS_DEGER = []


def satirlar(yol):
    if yol not in DOSYA:
        b = blob(yol)
        DOSYA[yol] = b.splitlines(keepends=True) if b is not None else None
        DEGISEN[yol] = list(DOSYA[yol]) if b is not None else None
    return DEGISEN[yol]


def js_sinirlayici(sat, i):
    """sat[i] ('"' ya da "'") bir JS dizgisini AÇAN karakter mi? Satır başından küçük bir sözcük çözücüyle bakılır:
    dizgi DIŞINDA duran bir tırnak = sınırlayıcı. (Kaçışlı \\" ve öbür tırnak türü içindekiler değildir.)"""
    ic = None
    j = 0
    while j < i:
        c = sat[j]
        if ic:
            if c == "\\":
                j += 2
                continue
            if c == ic:
                ic = None
        elif c in "\"'`":
            ic = c
        elif c == "/" and sat[j + 1:j + 2] == "/":
            return False      # yorum satırı
        j += 1
    return ic is None


def tirnak_kaldir(sat, al):
    """Satırda alıntıyı saran açılış+kapanış tırnağını siler. (yeni_satır, kaç_yer) — yalnız tırnak karakteri."""
    n = 0
    for ac in sorted(ACAN, key=len, reverse=True):
        kap = ACAN[ac]
        desen = re.escape(ac) + r"(\s*)" + re.escape(al) + r"(\s*)" + re.escape(kap)
        def degis(m):
            # Tırnak bir JS DEĞERİNİN sınırlayıcısıysa (ör. `alinti: "…"`) silinemez — sözdizimini kırar ve
            # alanın kendisi iddiadır. O satır elle/şema kararıyla çözülür (rapor §4). isyan_tarama.js vakası.
            if ac in ('"', "'") and js_sinirlayici(m.string, m.start()):
                JS_DEGER.append(al)
                return m.group(0)
            return m.group(1) + al + m.group(2)
        sat2, k = re.subn(desen, degis, sat)
        k = 0 if sat2 == sat else k
        if k:
            sat, n = sat2, n + k
    return sat, n


olc = list(csv.DictReader(open(a.olcum, encoding="utf-8"), delimiter="\t"))
cik, say = [], Counter()
for x in olc:
    no = int(x["no"])
    s, gerekce = SINIF.get(no, ("A", NOT.get(no, "birebir yok; anlam en yakın gövde cümlesinde (en_yakin_cumle sütunu)")))
    konumlar = [k.strip() for k in x["w30_konum"].split("·")]
    uygulanan = []
    if s in ("A", "D"):
        al = x["alinti"]
        for kon in konumlar:
            ad, _, sat = kon.partition(":")
            if ad.startswith("paket_"):
                continue      # üretilmiş — koşu yeniden üretir
            yol = "data/" + ad
            L = satirlar(yol)
            if L is None:
                uygulanan.append(f"{ad}:DOSYA-YOK")
                continue
            adaylar = [i for i, l in enumerate(L) if al in l]
            if not adaylar:
                uygulanan.append(f"{ad}:ALINTI-BULUNAMADI")
                continue
            # W30 satır numarası a59e4b7b'ye göre; önce TIRNAKLI geçişler, onların içinde en yakını seçilir
            # (aynı metin daha uzun bir alıntının BAŞI olarak da geçebilir — #139/#140 Zaria vakası)
            tirnakli = [j for j in adaylar if tirnak_kaldir(L[j], al)[1]]
            i = min(tirnakli or adaylar, key=lambda j: abs(j + 1 - int(sat or 0)))
            yeni, n = tirnak_kaldir(L[i], al)
            if n == 0 and al in JS_DEGER:
                uygulanan.append(f"{ad}:{i+1}:JS-DEGER-ALANI(elle)")
            elif n == 0:
                uygulanan.append(f"{ad}:{i+1}:TIRNAK-ZATEN-YOK")
            else:
                L[i] = yeni
                uygulanan.append(f"{ad}:{i+1}")
        say[s + ("" if any(":" in u and u.split(":")[-1].isdigit() for u in uygulanan) else "-uygulanamadi")] += 1
    else:
        say[s] += 1
    cik.append(dict(no=no, sinif=s, gerekce=gerekce, alinti=x["alinti"], slug=x["slug"],
                    w30_konum=x["w30_konum"], simdi=x["simdi"], diff_konum=";".join(uygulanan),
                    w30_kova=x["kova"], birebir_olcum=x["birebir"] + ("/" + x["birebir_yer"] if x["birebir_yer"] else ""),
                    en_yakin_cumle=x["en_yakin_cumle"]))


def koord(yol):
    b = os.path.basename(yol)
    return b.startswith("yerlesimler") or b.startswith("yer_yama") or b.startswith("yama_")


for ek, sec in (("", lambda y: not koord(y)), ("-KOORD", koord)):
    parca = []
    for yol in sorted(DOSYA):
        if DOSYA[yol] is None or DOSYA[yol] == DEGISEN[yol] or not sec(yol):
            continue
        parca.extend(difflib.unified_diff(DOSYA[yol], DEGISEN[yol], "a/" + yol, "b/" + yol, n=3))
    with open(a.cikti_kok + ek + ".diff", "w", encoding="utf-8", newline="") as f:
        for p in parca:
            f.write(p if p.endswith("\n") else p + "\n\\ No newline at end of file\n")
    print(ek or "UMIT", "dosya:", sum(1 for y in DOSYA if DOSYA[y] != DEGISEN[y] and DOSYA[y] is not None and sec(y)))

if a.dok:
    for yol in DOSYA:
        if DOSYA[yol] is not None and DOSYA[yol] != DEGISEN[yol]:
            hedef = os.path.join(a.dok, os.path.basename(yol))
            with open(hedef, "w", encoding="utf-8", newline="") as f:
                f.write("".join(DEGISEN[yol]))
with open(a.cikti_kok + ".tsv", "w", encoding="utf-8", newline="") as f:
    w = csv.DictWriter(f, fieldnames=list(cik[0]), delimiter="\t")
    w.writeheader()
    w.writerows(cik)
print(say)
print("uygulanamayan:", [(c["no"], c["diff_konum"]) for c in cik if c["sinif"] in "AD" and not re.search(r":\d+(;|$)", c["diff_konum"])])
print("kısmi:", [(c["no"], c["diff_konum"]) for c in cik if c["sinif"] in "AD" and re.search(r"BULUNAMADI|ZATEN|YOK", c["diff_konum"])])
