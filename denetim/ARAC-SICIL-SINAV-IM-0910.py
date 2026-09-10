# -*- coding: utf-8 -*-
"""ARAC-SICIL-SINAV-IM-0910 — YENI IMLERI, VERI GELMEDEN SINAR.

🔴 NICIN VAR (D010): *yeni yazilan bir denetim, IKI YONDE DE sinanmadan
   "calisiyor" sayilmaz.* `IZ-YOK DENETIM A/B/C` sonuclari `CEVAP.json`a
   HENUZ islenmedi; yani `veride-dogrulandi` · `yapilmamis` · `olculemedi`
   degerlerini tasiyan TEK BIR MADDE bile yok. Bu alet o veriyi TAKLIT eder
   ve uretici o gun HATA VERMEDEN calisacak mi diye ONCEDEN olcer.

⚠️ Taklit dosyasi GECICIDIR ve gercek olcume DOKUNMAZ; `--girdi` ile verilir.

Dort sinav:
  ① yeni degerler DOGRU imlere dusuyor mu, ve 🟠 SIFIRA iniyor mu
  ② TANIMSIZ bir `delil_atlas` degeri geldiginde uretici COKUYOR mu
     (sessizce 🟠'ye dusmemeli)
  ③ `dogrulandi` damgasi var ama `delil_commit` BOSSA cokuyor mu (S-011)
  ④ `delil_yer` / `delil_kim` sicile YAZILIYOR mu

Kullanim: py denetim/ARAC-SICIL-SINAV-IM-0910.py
"""
import json, io, os, sys, subprocess, tempfile

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
G = "denetim/OLCUM-SICIL-KUME-0910.json"
YAZ = "denetim/ARAC-SICIL-YAZ-0910.py"

# Koordinatorun bildirdigi A/B/C dagilimi: 207 = 172 + 11 + 9 + 15
DAGILIM = [("veride-dogrulandi", 172), ("yapilmamis", 11),
           ("olculemedi", 9), ("iddiasiz", 15)]


def taklit(bozma=None):
    d = json.load(io.open(G, encoding="utf-8"))
    izsiz = [m for m in d["maddeler"]
             if m["hukum"] == "cozuldu" and m["delil_atlas"] == "iz-yok"]
    if len(izsiz) != sum(n for _, n in DAGILIM):
        print("🔴 TABAN DEGISMIS: iz-yok", len(izsiz), "≠",
              sum(n for _, n in DAGILIM))
        return None
    i = 0
    for deger, adet in DAGILIM:
        for m in izsiz[i:i + adet]:
            m["delil_atlas"] = deger
            if deger == "veride-dogrulandi":
                m["delil_yer"] = "data/olaylar_ek5.js:%d" % (100 + i)
                m["delil_kim"] = "IZ-YOK DENETIM A"
        i += adet
    if bozma == "tanimsiz":
        izsiz[0]["delil_atlas"] = "bilinmeyen-bir-deger"
    if bozma == "damgasiz":
        izsiz[0]["delil_atlas"] = "dogrulandi"
        izsiz[0]["delil_commit"] = ""
    y = os.path.join(tempfile.gettempdir(), "sicil_taklit_%s.json" % (bozma or "temiz"))
    json.dump(d, io.open(y, "w", encoding="utf-8"), ensure_ascii=False)
    return y


def kos(yol):
    p = subprocess.run([sys.executable, YAZ, "--girdi", yol],
                       capture_output=True, text=True, encoding="utf-8",
                       errors="replace")
    return p.returncode, (p.stdout or "") + (p.stderr or "")


gecti = 0
toplam = 0

# ── ① yeni degerler dogru imlere dusuyor mu ──────────────────────────────
toplam += 1
y = taklit()
if y:
    kod, cikti = kos(y)
    bekle = ["🔵 VERİDE VAR 172", "✅ ÇÖZÜLDÜ 120", "🔴 YAPILMAMIŞ 11",
             "❔ ÖLÇÜLEMEDİ 9", "➖ İDDİA TAŞIMIYOR 15"]
    eksik = [b for b in bekle if b not in cikti]
    turuncu_sifir = "🟠" not in cikti.split("dagilim:")[-1]
    if kod == 0 and not eksik and turuncu_sifir:
        print("🟢 ① yeni imler + 🟠 SIFIR — GECTI")
        gecti += 1
    else:
        print("🔴 ① KALDI · kod", kod, "· eksik:", eksik,
              "· 🟠 sifir mi:", turuncu_sifir)
        print("   ", cikti.strip().splitlines()[-2:])

# ── ② tanimsiz deger COKMELI ─────────────────────────────────────────────
toplam += 1
y = taklit("tanimsiz")
kod, cikti = kos(y)
if kod == 1 and "TANIMSIZ" in cikti:
    print("🟢 ② tanimsiz deger uretiyi DURDURDU — GECTI")
    gecti += 1
else:
    print("🔴 ② KALDI — tanimsiz deger SESSIZCE gecti · kod", kod)

# ── ③ damga var, commit yok ⇒ COKMELI (S-011) ────────────────────────────
toplam += 1
y = taklit("damgasiz")
kod, cikti = kos(y)
if kod == 1 and "damga delilin yerine gecemez" in cikti:
    print("🟢 ③ delilsiz `dogrulandi` damgasi DURDURDU — GECTI")
    gecti += 1
else:
    print("🔴 ③ KALDI — damga delilin yerine gecti · kod", kod)

# ── ④ delil_yer / delil_kim GERCEKTEN METNE yaziliyor mu ─────────────────
# 🔴 Bu sinavin ilk hali yalniz "🔵 kovasi doldu mu" diye soruyordu — o, ALANIN
#    METNE INDIGINI GOSTERMEZ. Simdi TAKLIT bir hedef dosyaya yazip metni
#    okuyor. (D042: bir seyin veride inmesi, ciktida indigi anlamina gelmez.)
toplam += 1
y = taklit()
tak_hedef = os.path.join(tempfile.gettempdir(), "SICIL_TAKLIT.md")
if os.path.exists(tak_hedef):
    os.remove(tak_hedef)
p = subprocess.run([sys.executable, YAZ, "--girdi", y, "--yaz",
                    "--hedef", tak_hedef],
                   capture_output=True, text=True, encoding="utf-8",
                   errors="replace")
metin = io.open(tak_hedef, encoding="utf-8").read() if os.path.exists(tak_hedef) else ""
aranan = ["veride doğrulanan", "IZ-YOK DENETIM A", "data/olaylar_ek5.js:",
          "🔵 VERİDE VAR", "❔ ÖLÇÜLEMEDİ", "➖ İDDİA TAŞIMIYOR"]
yok = [a for a in aranan if a not in metin]
if p.returncode == 0 and not yok:
    print("🟢 ④ delil_yer/delil_kim SICIL METNINDE — GECTI (%d karakter)"
          % len(metin))
    gecti += 1
else:
    print("🔴 ④ KALDI — metinde bulunamayan:", yok, "· kod", p.returncode)

print()
print("SINAV: %d/%d" % (gecti, toplam))
sys.exit(0 if gecti == toplam else 1)
