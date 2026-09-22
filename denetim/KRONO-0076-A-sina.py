# -*- coding: utf-8 -*-
"""KRONO-0076-A yama sinavi — uretilen kartlari ITIRAZ EDILEBILIR sekilde olcer.

Sinar: ① dosya JS olarak ayristirilabiliyor mu (node varsa) ② her kartta yedi
alan var mi ③ id'ler data/ altindaki 594 kartla ve kendi icinde tekil mi
④ her `olay:` bagi GERCEK bir kronoloji kaydiyla eslesiyor mu (gun + anahtar)
⑤ gelistirici sesi sizmis mi (dosya adi · D### · H-#### · "Emre" · "bu oturum").
Ongoru (olcumden ONCE yazildi): ①-④ temiz cikar, ⑤'te 0 ihlal olur.
"""
import io, os, re, json, subprocess, sys, unicodedata

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KOK, "data")
YAMA = os.path.join(KOK, "denetim", "KRONO-0076-A-YAMA-ekokuma_p76d.js")

metin = io.open(YAMA, encoding="utf-8").read()
hata = []

# ① JS ayristirma (node varsa)
try:
    p = subprocess.run(["node", "--check", YAMA], capture_output=True, text=True)
    print("① node --check: %s" % ("TEMIZ" if p.returncode == 0 else "HATA\n" + p.stderr))
    if p.returncode != 0:
        hata.append("JS ayristirma")
except FileNotFoundError:
    print("① node bulunamadi — JS ayristirma OLCULEMEDI (yok degil, olculemedi)")

# ② alanlar
KART = re.compile(r"\{\s*id\s*:\s*\"(?P<id>[^\"]+)\"(?P<govde>.*?)\n\s*(?=\{\s*id\s*:|\];)", re.S)
kartlar = list(KART.finditer(metin))
print("② kart sayisi: %d" % len(kartlar))
ZORUNLU = ["tur", "kisa", "metin", "kesinlik", "olay", "kaynak"]
for m in kartlar:
    for alan in ZORUNLU:
        if not re.search(r"\b%s\s*:" % alan, m.group("govde")):
            hata.append("%s: %s alani YOK" % (m.group("id"), alan))

# ③ tekillik
benim = [m.group("id") for m in kartlar]
if len(set(benim)) != len(benim):
    hata.append("kendi icinde mukerrer id")
mevcut = set()
for ad in os.listdir(DATA):
    if ad.endswith(".js") and (ad.startswith("ekokuma") or ad.startswith("merak")):
        mevcut |= set(re.findall(r'id\s*:\s*"([^"]+)"', io.open(os.path.join(DATA, ad), encoding="utf-8").read()))
carpisan = [i for i in benim if i in mevcut]
print("③ data/ altindaki kart id sayisi: %d | carpisan: %d %s"
      % (len(mevcut), len(carpisan), carpisan))
if carpisan:
    hata.append("id carpismasi: %s" % carpisan)

# ④ capa sinavi — bag gercek bir kronoloji kaydiyla eslesiyor mu
def norm(s):
    for a, b in (("I", "i"), ("İ", "i"), ("ı", "i"), ("Ş", "s"), ("ş", "s"),
                 ("Ğ", "g"), ("ğ", "g"), ("Ü", "u"), ("ü", "u"),
                 ("Ö", "o"), ("ö", "o"), ("Ç", "c"), ("ç", "c"),
                 ("Â", "a"), ("â", "a"), ("Î", "i"), ("î", "i"),
                 ("Û", "u"), ("û", "u")):
        s = s.replace(a, b)
    s = s.lower()
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    return re.sub(r"[^a-z0-9 ]+", " ", s)

# normallestirici SINAVI (D215 / YASALAR B9): bilinen pozitif vakayla atesle
assert "islahat" in norm("Islâhat"), "normallestirici KIRIK — Islahat"
assert "kibris" in norm("Kıbrıs"), "normallestirici KIRIK — Kibris"
assert "sura" in norm("Şûrâ"), "normallestirici KIRIK — Sura"
print("④a normallestirici pozitif vaka sinavi: GECTI (Islâhat · Kıbrıs · Şûrâ)")

KAYIT = re.compile(r"\{[^{}]*?\bt\s*:\s*\"(?P<t>\d{3,4}[^\"]*)\"[^{}]*?\}", re.S)
BASLIK = re.compile(r"\bb\s*:\s*\"((?:[^\"\\]|\\.)*)\"")
krono = []
for ad in sorted(os.listdir(DATA)):
    if ad.endswith(".js") and (ad.startswith("olaylar") or ad.startswith("kronoloji")):
        icerik = io.open(os.path.join(DATA, ad), encoding="utf-8").read()
        for m in KAYIT.finditer(icerik):
            b = BASLIK.search(m.group(0))
            krono.append((m.group("t"), b.group(1) if b else "", ad))

capasiz = []
for m in kartlar:
    o = re.search(r"olay\s*:\s*\[([^\]]*)\]", m.group("govde"), re.S)
    baglar = re.findall(r'"([^"]+)"', o.group(1)) if o else []
    for bag in baglar:
        gun, _, anahtar = bag.partition("|")
        esl = [k for k in krono if k[0].startswith(gun) and norm(anahtar) in norm(k[1])]
        if not esl:
            capasiz.append((m.group("id"), bag))
print("④b capa sinavi: %d bag, capasiz %d %s"
      % (sum(len(re.findall(r'"[^"]+"', re.search(r'olay\s*:\s*\[([^\]]*)\]', m.group("govde"), re.S).group(1))) for m in kartlar),
         len(capasiz), capasiz))
if capasiz:
    hata.append("capasiz bag: %s" % capasiz)

# ⑤ gelistirici sesi — YALNIZ okura giden alanlarda (kisa · metin), ust yorumda degil
govde_metni = "\n".join(
    (re.search(r'kisa\s*:\s*"((?:[^"\\]|\\.)*)"', m.group("govde")).group(1) if re.search(r'kisa\s*:\s*"((?:[^"\\]|\\.)*)"', m.group("govde")) else "")
    + "\n" + m.group("govde").split("metin:")[-1].split("kesinlik:")[0]
    for m in kartlar)
SIZINTI = [
    (r"\bH-\d{4}\b", "madde kodu"),
    (r"\bD\d{3}\b", "ders kodu"),
    (r"\bEmre\b", "isim"),
    (r"bu oturum", "oturum sesi"),
    (r"data/|denetim/|\.js\b|\.py\b", "dosya yolu"),
    (r"CLAUDE\.md", "belge adi"),
]
# 🔴 YASALAR B9 — "0 ihlal" raporlanmadan once SUZGECIN CALISTIGI kanitlanir.
# Bilerek kirletilmis bir dizgi uzerinde ates edilir; ates almazsa suzgec kordur.
_deneme = "bu kart H-0001 maddesi icin D215 uyarinca Emre'nin data/olaylar.js dosyasindan"
_vurus = sum(1 for kalip, _ in SIZINTI for _m in re.finditer(kalip, _deneme, re.I))
assert _vurus >= 5, "SIZINTI suzgeci KOR — pozitif vakada %d vurus" % _vurus
print("⑤a sizinti suzgeci pozitif vaka sinavi: GECTI (%d vurus)" % _vurus)

ihlal = []
for kalip, ad in SIZINTI:
    for m in re.finditer(kalip, govde_metni, re.I):
        ihlal.append((ad, govde_metni[max(0, m.start()-40):m.start()+40].replace("\n", " ")))
print("⑤ gelistirici sesi ihlali: %d" % len(ihlal))
for i in ihlal[:10]:
    print("   -", i)
if ihlal:
    hata.append("gelistirici sesi: %d" % len(ihlal))

print("-" * 70)
print("SONUC: %s" % ("TEMIZ" if not hata else "KUSUR VAR -> " + " | ".join(hata)))
sys.exit(1 if hata else 0)
