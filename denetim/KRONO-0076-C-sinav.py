# -*- coding: utf-8 -*-
"""KRONO-0076-C SINAVI — uretilen ek okuma kartlari GERCEKTEN baglaniyor mu?
app.js `_ekNorm` + `_ekBagEslesir` mantigi BIREBIR taklit edilir.
POZITIF KONTROL once atesleniyor (M-5024 ①: normallestiricinin kor olmadigi
KANITLANMADAN "0 bulundu" raporlanmaz). Salt okur."""
import io, os, re, sys, unicodedata

KOK = r"C:\atlas"
DATA = os.path.join(KOK, "data")
KART = os.path.join(KOK, "denetim", "KRONO-0076-C-YAMA-ekokuma_p76f.js")

# ---- app.js _ekNorm'un birebir karsiligi ----
ESLEME = {"İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g", "ğ": "g",
          "Ü": "u", "ü": "u", "Ö": "o", "ö": "o", "Ç": "c", "ç": "c",
          "Â": "a", "â": "a", "Î": "i", "î": "i", "Û": "u", "û": "u"}
def eknorm(s):
    s = "".join(ESLEME.get(c, c) for c in (s or ""))
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    s = s.lower()
    for k in "'\u2018\u2019`\u02bc":
        s = s.replace(k, "")
    return re.sub(r"\s+", " ", s).strip()

# ---- POZITIF KONTROL (once ates) ----
KONTROL = [("İstanbul Antlaşması", "istanbul antlasmasi"),
           ("Cihâd-ı Ekber", "cihad-i ekber"),
           ("Nikarya'nın bağımsızlık ilanı", "nikaryanin bagimsizlik ilani"),
           ("Mahmud Şevket Paşa", "mahmud sevket pasa")]
hatali = [(a, eknorm(a), b) for a, b in KONTROL if eknorm(a) != b]
print("POZITIF KONTROL: %d/%d gecti" % (len(KONTROL) - len(hatali), len(KONTROL)))
for a, g, b in hatali:
    print("   KIRIK: %r -> %r (beklenen %r)" % (a, g, b))
if hatali:
    print("🔴 NORMALLESTIRICI KIRIK — asagidaki sayilara GUVENILMEZ.")
    sys.exit(2)

# ---- kronoloji kayitlari ----
def kayitlar(metin):
    i, n = 0, len(metin)
    while i < n:
        if metin[i] == '{':
            d, j, q, esc = 0, i, None, False
            while j < n:
                c = metin[j]
                if esc: esc = False
                elif q:
                    if c == '\\': esc = True
                    elif c == q: q = None
                elif c in '"\'': q = c
                elif c == '{': d += 1
                elif c == '}':
                    d -= 1
                    if d == 0:
                        yield metin[i:j+1]; i = j; break
                j += 1
            else: return
        i += 1

kayit = []   # (t, b, dosya)
for dosya in sorted(os.listdir(DATA)):
    if not (dosya.startswith("olaylar") or dosya.startswith("kronoloji")) or not dosya.endswith(".js"):
        continue
    with io.open(os.path.join(DATA, dosya), encoding="utf-8") as f:
        metin = f.read()
    for k in kayitlar(metin):
        mt = re.search(r'(?:^|[\s,{])t\s*:\s*"([^"]*)"', k)
        mb = re.search(r'b\s*:\s*"((?:[^"\\]|\\.)*)"', k)
        if mt: kayit.append((mt.group(1), mb.group(1) if mb else "", dosya))
print("kronoloji kaydi: %d" % len(kayit))

# ---- kartlarin olay caplari ----
with io.open(KART, encoding="utf-8") as f:
    kmetin = f.read()
kartlar = re.findall(r'id:"([^"]+)"[\s\S]*?olay:\[([^\]]*)\]', kmetin)
print("kart: %d\n" % len(kartlar))

def eslesir(v, t, b):
    if "|" not in v: return v == t
    gun, ayirt = v.split("|", 1)
    if gun != t: return False
    a = eknorm(ayirt)
    return (not a) or (a in eknorm(b))

acik = 0
for kid, capalar in kartlar:
    caps = re.findall(r'"([^"]*)"', capalar)
    toplam = 0
    satir = []
    for c in caps:
        hit = [k for k in kayit if eslesir(c, k[0], k[1])]
        toplam += len(hit)
        satir.append("%-42s -> %d" % ('"' + c + '"', len(hit)))
        for t, b, d in hit[:2]:
            satir.append("        %-26s t=%-12s %s" % (d, t, b[:52]))
    bayrak = "OK " if toplam > 0 else "🔴 CAPA TUTMUYOR"
    if toplam == 0: acik += 1
    print("%s %s  (toplam %d kayda baglanir)" % (bayrak, kid, toplam))
    for s in satir: print("   " + s)
print("\nSONUC: %d kart · capasi TUTMAYAN %d" % (len(kartlar), acik))
