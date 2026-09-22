# -*- coding: utf-8 -*-
"""EKOKUMA-0076-A · kart dosyasının sınavı.

Beş soru sorar, her birinin cevabını SAYIYLA basar:
  ① şema: her kartta id · tur · kisa · metin · kesinlik · olay · kaynak var mı
  ② id çakışması: mevcut data/ekokuma*.js id havuzuyla kesişiyor mu (0 olmalı)
  ③ çapa: her `olay:` günü kronolojide GERÇEKTEN var mı (uydurma çapa yok)
  ④ tür: `tur:` değeri js/app.js EKOKUMA_TUR anahtarlarında mı — değilse
     YAMA ŞART (buton çıkmaz, D099 sınıfı)
  ⑤ geliştirici sesi: kart METNİNDE dosya adı · madde kodu · ders kodu ·
     "bu oturum" · kişi adı geçiyor mu (0 olmalı; başlık yorumları muaf)

🔴 YASALAR B9 / tahta M-5024 ①: her arama ÖNCE bilinen bir POZİTİF vakayla
ateşlenir; ateşlenmezse "0 bulundu" raporlanmaz, ALET KIRIK denir.
Türkçe büyük/küçük harf katlaması KULLANILMAZ — aranan kalıplar ASCII.
"""
import io, os, re, sys, glob

sys.stdout.reconfigure(encoding="utf-8")

KOK = r"C:\atlas"
KART = os.path.join(KOK, "denetim", "EKOKUMA-0076-A-YAMA-ekokuma_p76b.js")

ham = io.open(KART, encoding="utf-8").read()

# ---------------------------------------------------------------- kart ayır
# Kayıtlar satır başındaki `{ id:"..."` ile başlar.
baslar = [m.start() for m in re.finditer(r'(?m)^\{ id:"', ham)]
kartlar = []
for i, b in enumerate(baslar):
    s = baslar[i + 1] if i + 1 < len(baslar) else ham.rindex("\n];")
    kartlar.append(ham[b:s])
print("KART SAYISI: %d" % len(kartlar))
if not kartlar:
    print("🔴 ALET KIRIK — hiç kart ayrıştırılamadı"); sys.exit(2)

def alan(blok, ad):
    # 🔴 İLK HÂLİ ^\s* ile satır başına bağlıydı; `{ id:"..." , tur:"..."`
    # aynı satırda durduğu için 33 kartın hepsinde id ve tur "eksik" göründü.
    # Ölçüm doğruydu, ALET yanlıştı — sınır \b'ye çevrildi.
    m = re.search(r'\b%s:"((?:[^"\\]|\\.)*)"' % ad, blok)
    return m.group(1) if m else None

# ---------------------------------------------------------------- ① şema
ZORUNLU = ["id", "tur", "kisa", "kesinlik", "kaynak"]
eksik = []
for k in kartlar:
    kid = alan(k, "id") or "?"
    for a in ZORUNLU:
        if alan(k, a) is None:
            eksik.append((kid, a))
    if 'metin:"' not in k:
        eksik.append((kid, "metin"))
    if not re.search(r"(?m)^\s*olay:\s*\[", k):
        eksik.append((kid, "olay"))
print("① ŞEMA eksik alan: %d %s" % (len(eksik), eksik if eksik else ""))

# ---------------------------------------------------------------- ② id
yeni = [alan(k, "id") for k in kartlar]
if len(set(yeni)) != len(yeni):
    print("🔴 ② dosya İÇİNDE mükerrer id var")
havuz = set()
for y in glob.glob(os.path.join(KOK, "data", "ekokuma*.js")):
    havuz |= set(re.findall(r'\bid:"([^"]+)"', io.open(y, encoding="utf-8").read()))
# POZİTİF ATEŞLEME: havuzda bilinen bir id gerçekten var mı?
if "kimdir-midhat-pasa" not in havuz:
    print("🔴 ALET KIRIK — id havuzu okunamadı (pozitif vaka tutmadı)"); sys.exit(2)
carpisma = sorted(set(yeni) & havuz)
print("② ID havuzu %d kayıt · çakışma: %d %s" % (len(havuz), len(carpisma), carpisma))

# ---------------------------------------------------------------- ③ çapa
gunler = set()
for y in glob.glob(os.path.join(KOK, "data", "olaylar*.js")) + \
         glob.glob(os.path.join(KOK, "data", "kronoloji*.js")):
    gunler |= set(re.findall(r't:\s*"(\d{4}(?:-\d{2}){0,2})"',
                             io.open(y, encoding="utf-8").read()))
# POZİTİF ATEŞLEME
if "1878-07-13" not in gunler:
    print("🔴 ALET KIRIK — kronoloji günleri okunamadı"); sys.exit(2)
capasiz = []
capa_sayi = 0
for k in kartlar:
    kid = alan(k, "id")
    m = re.search(r"(?m)^\s*olay:\s*\[([^\]]*)\]", k)
    for v in re.findall(r'"([^"]+)"', m.group(1) if m else ""):
        capa_sayi += 1
        gun = v.split("|")[0]
        if gun not in gunler:
            capasiz.append((kid, gun))
print("③ ÇAPA: %d bağ · kronolojide bulunamayan: %d %s"
      % (capa_sayi, len(capasiz), capasiz if capasiz else ""))

# ---------------------------------------------------------------- ④ tür
app = io.open(os.path.join(KOK, "js", "app.js"), encoding="utf-8").read()
blok = app[app.index("var EKOKUMA_TUR = {"):]
blok = blok[:blok.index("\n};")]
tanimli = set(re.findall(r'(?m)^\s*"([a-z0-9\-]+)":\s*\{', blok))
if "sebep-sonuc" not in tanimli:
    print("🔴 ALET KIRIK — EKOKUMA_TUR okunamadı"); sys.exit(2)
kullanilan = {}
for k in kartlar:
    kullanilan.setdefault(alan(k, "tur"), []).append(alan(k, "id"))
tanimsiz = {t: v for t, v in kullanilan.items() if t not in tanimli}
print("④ TÜR: app.js'te tanımlı %d · kartlarda kullanılan %d · TANIMSIZ %d"
      % (len(tanimli), len(kullanilan), len(tanimsiz)))
for t, v in tanimsiz.items():
    print("     🟡 %s → %d kart BUTON ÇIKARMAZ (yama şart): %s" % (t, len(v), v))

# ---------------------------------------------------------------- ⑤ üslup
# Yalnız KART İÇİ metin taranır (kisa + metin); başlık/bölüm yorumları muaf.
KALIP = [
    (r"H-\d{4}", "madde kodu"),
    (r"\bD\d{2,3}\b", "ders kodu"),
    (r"Emre", "kişi adı"),
    (r"bu oturum", "oturum sesi"),
    (r"\.js\b", "dosya adı"),
    (r"\bdata/|\bdenetim/|\barac/|\boturumlar/", "dosya yolu"),
    (r"CLAUDE\.md", "belge adı"),
]
ihlal = []
for k in kartlar:
    kid = alan(k, "id")
    govde = (alan(k, "kisa") or "")
    m = re.search(r'metin:"(.*?)",\n\s*kesinlik:', k, re.S)
    govde += "\n" + (m.group(1) if m else "")
    for kal, ad in KALIP:
        for h in re.findall(kal, govde):
            ihlal.append((kid, ad, h))
# POZİTİF ATEŞLEME: kalıpların çalıştığını göster
deneme = "H-0008 ve D231 · data/ekokuma.js · CLAUDE.md · Emre · bu oturum"
sinav = sum(len(re.findall(kal, deneme)) for kal, _ in KALIP)
if sinav < 6:
    print("🔴 ALET KIRIK — üslup kalıpları pozitif vakada %d/6 tuttu" % sinav); sys.exit(2)
print("⑤ ÜSLUP: kalıp sınavı %d/6 ateşlendi · kart içi ihlal: %d %s"
      % (sinav, len(ihlal), ihlal if ihlal else ""))

# ---------------------------------------------------------------- özet
print("\nÖZET: kart %d · şema eksik %d · id çakışma %d · çapasız %d · "
      "tanımsız tür %d · üslup ihlali %d"
      % (len(kartlar), len(eksik), len(carpisma), len(capasiz),
         len(tanimsiz), len(ihlal)))
