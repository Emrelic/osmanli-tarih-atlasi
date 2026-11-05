# EVREN4 HAVVA kovası birleşik sayım (HAVVA + KASA + UMIT), kural kaymaları ayrı sütunda.
# Kullanım: py -X utf8 birlesik.py <çıktı.md> <klasör1> [<klasör2> ...]   (her klasörde e4_*.json)
import json, glob, os, sys, re, collections
KURAL = [
    ("ticari", re.compile(r"encyclopedia\.com|columbia encyclopedia|columbia ency|ebsco|research starters|"
                          r"britannica|eb ?1911|1911 encyclop|gale ", re.I)),
    ("japon_genel", re.compile(r"nipponica|heibonsha|日本大百科|世界大百科|sekai daihyakka", re.I)),
    ("stategov_tanima", re.compile(r"history\.state\.gov.*(recogni|tanı)|office of the historian.*(recogni|tanı)", re.I | re.S)),
]
ESKI_TRECCANI = re.compile(r"enciclopedia italiana|\(19(29|3\d)\)|EI 19(29|3\d)|eski treccani", re.I)
YAMAKAWA = re.compile(r"yamakawa|山川", re.I)
SIRA_H = {"KAYNAKLI": 4, "ONERI": 3, "BULUNAMADI": 2, "BAKILMADI": 1}
cikti = sys.argv[1]
satir = collections.Counter(); kisi = collections.Counter(); dus = collections.Counter()
eski_tr = 0; yamakawa = 0; kural_sonrasi = collections.Counter(); siralar = {}; siralar_ks = {}; dosya = 0
for k in sys.argv[2:]:
    for f in sorted(glob.glob(os.path.join(k, "e4_*.json"))):
        kim = "HAVVA" if "_HAVVA_" in f else ("KASA" if "_KASA_" in f else ("UMIT" if "_UMIT_" in f else "?"))
        try:
            js = json.load(open(f, encoding="utf-8"))
        except Exception as e:
            print("BOZUK", f, e); continue
        dosya += 1
        for ad, rs in (js.items() if isinstance(js, dict) else []):
            for r in rs if isinstance(rs, list) else []:
                if not isinstance(r, dict):
                    continue
                h = (str(r.get("hukum") or "?").split() or ["?"])[0].upper().strip(",.;")
                satir[h] += 1; kisi[(kim, h)] += 1
                metin = " ".join(str(r.get(x, "")) for x in ("kaynak", "alinti", "not"))
                h2 = h
                if h == "KAYNAKLI":
                    for ad_k, rx in KURAL:
                        if rx.search(str(r.get("kaynak", ""))) or (ad_k == "stategov_tanima" and rx.search(metin)):
                            dus[ad_k] += 1; h2 = "ONERI"; break
                    if ESKI_TRECCANI.search(str(r.get("kaynak", ""))): eski_tr += 1
                    if YAMAKAWA.search(str(r.get("kaynak", ""))): yamakawa += 1
                kural_sonrasi[h2] += 1
                s = r.get("sira")
                if s is not None:
                    if SIRA_H.get(h, 0) > SIRA_H.get(siralar.get(s, ""), 0): siralar[s] = h
                    if SIRA_H.get(h2, 0) > SIRA_H.get(siralar_ks.get(s, ""), 0): siralar_ks[s] = h2
H = ["KAYNAKLI", "ONERI", "BULUNAMADI", "BAKILMADI"]
L = ["# EVREN4 — HAVVA kovası birleşik sayım (5 Kasım 2026, HAVVA SALI)", "",
     f"Kaynak dosya: {dosya} (HAVVA + KASA SALI r8_060–075 + UMIT SALI r8_033/038/039, r8_076–127). Kuyruk: 4494 dönem.", "",
     "## Satır bazında", "", "| hüküm | ham | kural sonrası |", "|---|---:|---:|"]
for h in H: L.append(f"| {h} | {satir[h]} | {kural_sonrasi[h]} |")
L += ["", f"Benzersiz sıra: {len(siralar)} / 4494 (en iyi hükme göre).", "",
      "| hüküm (sıra başına en iyi) | ham | kural sonrası |", "|---|---:|---:|"]
c1 = collections.Counter(siralar.values()); c2 = collections.Counter(siralar_ks.values())
for h in H: L.append(f"| {h} | {c1[h]} | {c2[h]} |")
L += ["", "## Kural kaymaları (KAYNAKLI → ONERI-güçlü)", "",
      f"- ticari/genel ansiklopedi (encyclopedia.com, Columbia, EBSCO, Britannica, EB1911, Gale): {dus['ticari']}",
      f"- Japon genel ansiklopedi (Nipponica, Heibonsha): {dus['japon_genel']}",
      f"- state.gov tanıma günü alıntısı: {dus['stategov_tanima']}",
      f"- (indirilmedi, ayrı sayım) eski Treccani / Enciclopedia Italiana 1929-37 kökenli KAYNAKLI: {eski_tr} — sürüm sorusu Emre'ye",
      f"- (indirilmedi) Yamakawa KAYNAKLI-çekinceli: {yamakawa}", "",
      "Tespit kaynak alanındaki ad eşleşmesiyle yapıldı (otomatik); satır satır gözden geçirme KASA'da.", "",
      "## Kişi bazında (ham)", "", "| oturum | " + " | ".join(H) + " |", "|---|" + "---:|" * len(H)]
for kim in ("HAVVA", "KASA", "UMIT"):
    L.append(f"| {kim} | " + " | ".join(str(kisi[(kim, h)]) for h in H) + " |")
open(cikti, "w", encoding="utf-8").write("\n".join(L) + "\n")
print("\n".join(L))
