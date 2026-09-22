# Dört araştırma çıktısını D5-ASYA kararlarıyla birleştirip denetim/D5-ASYA-NOKTA-ARASTIRMA-0917.json yazar.
import io, json, os, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
# ham kol çıktıları (nokta_A..D.json) oturumun geçici klasöründe; birleşim denetim/D5-ASYA-NOKTA-ARASTIRMA-0917.json'da kalıcı
SP = r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-\06fad4a8-e58e-4850-b3e8-c68a109e7e22\scratchpad"
KOK = r"C:\atlas"
B = "__BOSLUK__"

def oku(g):
    return json.load(io.open(os.path.join(SP, f"nokta_{g}.json"), encoding="utf-8"))

def kaynak_metni(n):
    parca = [n.get("kaynak", "")]
    if n.get("kur_kaynak"):
        parca.append("KURULUŞ: " + n["kur_kaynak"])
    parca.append("DÖNEM DAYANAKLARI: " + " ‖ ".join(f'{p["f"]}→{p["t"]} {p["d"]} ({p.get("hassasiyet","")}): {p.get("dayanak","")}' for p in n["s"] if p["d"] != B))
    return " · ".join(x for x in parca if x)

def not_metni(n, ek=""):
    k = n.get("kodlanmayan") or []
    s = (ek + " ") if ek else ""
    s += n.get("not", "")
    if k:
        s += " 🔴 KODLANMAYAN: " + " | ".join(k)
    return s.strip()

def bosluk(f, t, neden):
    return {"f": f, "t": t, "d": B, "hassasiyet": "beyan", "dayanak": neden}

KARAR, NEDEN = {}, {}
out = []

# ---- B: Mançurya · Doğu Sincan · İç Moğolistan (zincirler olduğu gibi; Qitai boşluğu beyan)
NEDEN.update({
 "Mergen (Nenjiang)": "NOKTASIZLIK-ADAY-0917 k25 kümesi 49,44K/124,56D (28.100 km², komşular Qiqihar · Aigun) — Qing'in Nonni garnizon şehri noktasızdı.",
 "Sanxing (Yilan)": "NOKTASIZLIK-ADAY-0917 k25 kümesi 45,98K/130,25D (17.395 km², komşu Ningguta) — Sungari aşağı havzasının Qing garnizonu noktasızdı.",
 "Barkol (Balikun / Zhenxi)": "NOKTASIZLIK-ADAY-0917 'Kumul-Turfan' kümesi 43,83K/92,24D (90.439 km², komşular Hâmi · Turfan · Ürümçi) — Hami ile Turfan arasındaki Qing garnizon şehri noktasızdı.",
 "Qitai (Gucheng)": "NOKTASIZLIK-ADAY-0917 'Kumul-Turfan' boşluğunun batı ucu (Turfan 121 km · Ürümçi 157 km) — Doğu Sincan'ın Gucheng garnizonu noktasızdı.",
 "Chifeng (Ulanhad)": "NOKTASIZLIK-ADAY-0917 k24 kümesi 42,51K/118,26D (20.783 km², komşu Cehol) — İç Moğolistan'ın Qing idarî merkezi noktasızdı.",
})
for n in oku("B")["noktalar"]:
    if n["ad"].startswith("Qitai"):
        S = [p for p in n["s"]]
        i = next(i for i, p in enumerate(S) if p["t"] == "1865-01-01")
        S.insert(i + 1, bosluk("1865-01-01", "1876-01-01", "Urumçi Tungan rejimi (Tuo Ming/Daud Halife) — künyesi yok; yakub-beg'e İTİLMEDİ (Kim s.102: Yakub Bey hâkimiyeti doğuda Gumadi'de biter)"))
        n["s"] = S
        n["not"] = ("1865–1876 __BOSLUK__: Urumçi Tungan rejiminin künyesi yok (eksik kimlik). 1876 Qing dönüşü ÜST SINIR (Millward s.128) — geri alış daha erken olabilir. " + n.get("not", ""))
    out.append(n)

# ---- C: Dekken kuzeyi (Jagdalpur yazılmaz: 1281–1923 tamamı künyesiz)
NEDEN.update({
 "Raipur": "NOKTASIZLIK-ADAY-0917 'Dekken kuzeyi' kümesi 20,85K/81,42D (68.815 km², komşular Cabalpûr · Vişâkapatnam · Varangal) — Chhattisgarh ovasının merkezi noktasızdı.",
 "Ratanpur": "NOKTASIZLIK-ADAY-0917 'Dekken kuzeyi' kümesinin kuzeyi — Haihaya (Kalachuri) krallığının başkenti noktasızdı.",
 "Sambalpur": "NOKTASIZLIK-ADAY-0917 k14 kümesi 21,26K/84,8D (18.473 km², komşular Kattak · Puri · Bâlâsor) — Mahanadi yukarı havzası noktasızdı; bölge Orissa kıyısının peteklerine emiliyordu.",
})
for n in oku("C")["noktalar"]:
    ad = n["ad"]
    if ad.startswith("Jagdalpur"):
        n["devlet_yok"] = True
        n["neden_yazilmadi"] = "DEVLET VAR ama KÜNYE YOK: Bastar racalığı 1281–1923 (IGI c.7 s.121-122). Bütün zincir __BOSLUK__ olurdu — VERI-YAPISI: tamamı sahipsiz nokta açılmaz. Künye (bastar) gelince yazılır."
        out.append(n); continue
    S = sorted(n["s"], key=lambda p: p["f"])
    Y = []
    if ad == "Raipur":
        Y = [bosluk("1281-01-01", "1750-01-01", "Haihaya (Kalachuri) Raipur kolu — künye yok"), S[0],
             bosluk("1818-01-01", "1853-01-01", "Nagpur Bhonsle devleti 1818–1853 — `maratha` künyesi 1818-06-03'te bitiyor, ardıl künye yok"), S[1]]
    elif ad == "Ratanpur":
        Y = [bosluk("1281-01-01", "1741-01-01", "Haihaya (Kalachuri) Ratanpur krallığı — künye yok"), S[0],
             bosluk("1818-01-01", "1853-01-01", "Nagpur Bhonsle devleti 1818–1853 — ardıl künye yok"), S[1]]
    elif ad == "Sambalpur":
        Y = [bosluk("1281-01-01", "1797-01-01", "Sambalpur/Patna Chauhan racalıkları (ve öncesi yerel beylikler) — künye yok; orissa'ya İTİLMEDİ (kaynak Gajapati tasarrufu yazmıyor)"), S[0],
             bosluk("1817-01-01", "1849-01-01", "1817'de iade edilen Chauhan racalığı (İngiliz denetiminde) — künye yok"), S[1]]
    n["s"] = Y
    n["not"] = "__BOSLUK__ dilimleri künyesi olmayan yerel devletlerdir (eksik kimlik), 'kimsenin değil' DEĞİL. " + n.get("not", "")
    out.append(n)

# ---- D: İndus batısı · Sibirya
NEDEN.update({
 "Dera Gazi Han": "NOKTASIZLIK-ADAY-0917 k14 kümesi 30,72K/70,23D (28.361 km², komşular Multan · Bahâvelpûr) — İndus'un batı yakası (Derajat güneyi) noktasızdı.",
 "Dera İsmail Han": "NOKTASIZLIK-ADAY-0917 k14 kümesi 32,34K/69,34D (33.892 km², komşular Gazne · Peşâver · Kâbil) — Derajat noktasızdı.",
 "Bannu (Edwardesabad)": "NOKTASIZLIK-ADAY-0917 k14 kümesi 32,34K/69,34D (Gazne–Peşâver–Kâbil boşluğu) — Bannu vadisi noktasızdı.",
 "Vitim (Vitimskoye zimov'e / Vitimskiy ostrog)": "NOKTASIZLIK-ADAY-0917 'Vitim-Lena' kümesi 57,36K/111,99D (118.578 km², komşular Bodaybo · Kirensk · Bauntovsk) — Lena–Vitim kavşağı noktasızdı.",
 "İlimsk (Ilimskiy ostrog)": "NOKTASIZLIK-ADAY-0917 k24 kümesi 57,93K/102,01D (24.230 km², komşu Bratsk ostrogu) — Lena taşıma yolunun (Ленский волок) başı noktasızdı.",
})
for n in oku("D")["noktalar"]:
    ad = n["ad"]
    S = sorted(n["s"], key=lambda p: p["f"])
    if ad == "Dera Gazi Han":
        # şehir 15. yy sonundan önce yok: 'founded before the end of the fifteenth century' ⇒ kur ÜST SINIR 1500
        n["kur"] = "1500-01-01"
        n["kur_kaynak"] = "ÜST SINIR (yıl yok): IGI v11 s.250 'gave his name to the town which he founded before the end of the fifteenth century' ⇒ en geç 1500 · " + n.get("kur_kaynak", "")
        lang = next(p for p in S if p["d"] == "multan-langah")
        lang = dict(lang, f="1500-01-01")
        S = [lang, bosluk("1527-01-01", "1739-01-01", "Mirani (Dodai) beyliği, fiilen bağımsız — künye yok")] + [p for p in S if p["f"] >= "1739"]
        n["not"] = ("kur ÜST SINIRDIR. 1281–1500 yazılmadı (şehir yoktu; eski 1281–1437 delhi-sultanligi ve 1451 langah dönemleri bölge hükmüydü). "
                    "Konum modern şehir; tarihî şehir ~14 km doğuda (70,78D) — nehir yatağı değişimi. " + n.get("not", ""))
    elif ad == "Dera İsmail Han":
        n["kur"] = "1739-01-01"
        n["kur_kaynak"] = ("ÜST SINIR (kuruluş yılı yok): IGI v11 s.261 kasabayı 15. yy sonunda gelen Beluç reisinin oğullarına bağlıyor, yıl vermiyor; "
                           "şehir 1739 devrinde Hot navablarının merkeziydi (DIK Gaz. 1883 s.29-30). Nokta en geç 1739'dan gösterilir; 1739 öncesi Hot beyliği künyesiz olduğu için zincir yazılmadı. " + n.get("kur_kaynak", ""))
        S = [p for p in S if p["f"][:1].isdigit() and p["f"] >= "1739"]
        n["not"] = "kur ÜST SINIRDIR. 1821–1836 Navab Sih'e haraçlı yarı bağımsız — sih olarak kodlandı. " + n.get("not", "")
    elif ad.startswith("Vitim"):
        n["kur_kaynak"] = "ÜST SINIR — ilk kayıt yılı, kuruluş değil. " + n.get("kur_kaynak", "")
        n["not"] = "kur ÜST SINIRDIR (1661 ilk kayıt). 1917 geçişleri künye günleridir (yere özgü kaynak okunamadı). " + n.get("not", "")
    elif ad.startswith("İlimsk"):
        n["not"] = "1917 geçişleri künye günleridir (yere özgü kaynak okunamadı). " + n.get("not", "")
    n["s"] = S
    out.append(n)

# ---- A: Çin iç kesim
if os.path.exists(os.path.join(SP, "nokta_A.json")):
    NEDEN.update({
     "Hengyang (Hengzhou)": "NOKTASIZLIK-ADAY-0917 DAĞ kümesi 'Guilin-Şaoguan' 26,78K/114,35D (145.083 km²) — Xiang ırmağı orta havzası noktasızdı (Changsha 153 km).",
     "Ji'an (Jizhou)": "NOKTASIZLIK-ADAY-0917 k14 kümesi 27,25K/116,25D (11.815 km², komşu Nanchang) — Gan ırmağı orta havzası noktasızdı (Nanchang 195 km).",
     "Ganzhou": "NOKTASIZLIK-ADAY-0917 DAĞ kümesi 'Guilin-Şaoguan' 26,78K/114,35D — Gan ırmağı yukarı havzası noktasızdı (Şaoguan 178 km).",
     "Chenzhou (Hunan)": "NOKTASIZLIK-ADAY-0917 DAĞ kümesi 'Guilin-Şaoguan' — Hunan–Guangdong geçidi (Nanling kuzeyi) noktasızdı (Şaoguan 123 km).",
     "Xinyang": "NOKTASIZLIK-ADAY-0917 k14 kümesi 31,87K/114,75D (17.048 km², komşular Wuchang · Jiujiang) — Huai yukarı havzası noktasızdı (Wuchang 176 km).",
    })
    GEREKCE = {
     ("1356", "1368"): "Tianwan → Chen Han → Wu (Zhu Yuanzhang'ın hanedan öncesi rejimi) — üçünün de künyesi yok; ming-hanedani 1368-01-23'te başlıyor",
     ("1358", "1368"): "Tianwan → Chen Han → Wu (Zhu Yuanzhang'ın hanedan öncesi rejimi) — üçünün de künyesi yok; ming-hanedani 1368-01-23'te başlıyor",
     ("1351", "1368"): "1351 Kızıl Sarıklı ayaklanması sonrası (Liu Futong/Song) — şehir düzeyinde sahip BELGELENEMEDİ; künye de yok",
     ("1644", "1645"): "1644-04 → 1645-09: Li Zicheng (dashun) mı yerel Güney Ming gücü mü — BULUNAMADI; komşuya İTİLMEDİ",
    }
    for n in oku("A")["noktalar"]:
        S = sorted(n["s"], key=lambda p: p["f"])
        Y, onceki = [], "1281-01-01"
        for p in S:
            if p["f"] > onceki:
                Y.append(bosluk(onceki, p["f"], GEREKCE[(onceki[:4], p["f"][:4])]))
            Y.append(p); onceki = p["t"]
        n["s"] = Y
        if any(p["d"] == B for p in Y):
            n["not"] = "__BOSLUK__ dilimleri künyesi olmayan rejimlerdir ya da sahibi bulunamamıştır (gerekçesi dilimde) — 'kimsenin değil' DEĞİL. " + n.get("not", "")
        out.append(n)
else:
    print("UYARI: nokta_A.json yok")

for n in out:
    n["neden"] = n.get("neden") or NEDEN.get(n["ad"], "")
    if not n["neden"] and not n.get("devlet_yok"):
        print("NEDEN EKSİK", n["ad"])
    n["kaynak"] = kaynak_metni(n) if n.get("s") else n.get("kaynak", "")
    n["not"] = not_metni(n)
    for p in n.get("s", []):
        if len(p["f"]) != 10 or len(p["t"]) != 10:
            print("TARİH BİÇİMİ", n["ad"], p)

# ≤15 kelime alıntı kuralı — uzun alıntılar kırpılır (… ile)
KIRP = {
 "in 1750 Amar Singh ... was quietly ousted. Between 1750 and 1818 the country was governed by the Marathas": "Between 1750 and 1818 the country was governed by the Marathas",
 "On the death of a successor without heirs in 1849 the District was annexed as an escheat": "in 1849 the District was annexed as an escheat",
 "gave his name to the town which he founded before the end of the fifteenth century": "the town which he founded before the end of the fifteenth century",
 "In the autumn of 1821, Ranjit Singh ... the town was surrendered by the Governor, Diwan Manak Rai": "In the autumn of 1821 … the town was surrendered",
 "the war that ended in the annexation of the Punjab. The District then passed quietly under British rule": "The District then passed quietly under British rule",
 "continued to form part of the Moghal empire till the invasion of Nadir Shah in A.D. 1738": "part of the Moghal empire till the invasion of Nadir Shah",
 "Bazar Ahmad Khan, which had formed the commercial centre of the Bannu valley prior to annexation": "the commercial centre of the Bannu valley prior to annexation",
 "first settled in Han times (206 BCE–220 CE) and became a county seat in the 3rd century CE": "became a county seat in the 3rd century CE",
}
IC_NOT = [("atlas referans alınmadı", "komşu kayıt dayanak alınmadı"), ("atlasın Nagpûr kaydı", "veride Nagpûr kaydı"),
          ("atlastaki Nagpûr kaydının", "veride Nagpûr kaydının"), ("atlas bu iki dilimi", "veri bu iki dilimi"),
          ("atlas Ocak-Nisan 1646'yı", "veri Ocak-Nisan 1646'yı"), ("atlas 'kale' için", "veri şemasında 'kale' için")]
import re as _re
for n in out:
    for a in ("kaynak", "not", "neden"):
        t = n.get(a, "")
        for u, k in KIRP.items():
            if u in t:
                t = t.replace(u, k)
            elif u[:40] in t:
                print("KIRPILAMADI (biçim farkı)", n["ad"], a, u[:40])
        for u, k in IC_NOT:
            t = t.replace(u, k)
        if _re.search("atlas", t, _re.I):
            print("ATLAS KALDI", n["ad"], a, _re.findall(r".{30}atlas.{30}", t, _re.I))
        n[a] = t

eksik, olu = [], set()
for g in "ABCD":
    if os.path.exists(os.path.join(SP, f"nokta_{g}.json")):
        j = oku(g); eksik += [dict(x, kol=g) for x in j.get("eksik_kimlik", [])]; olu |= set(j.get("olu_slug", []))
res = {"_aciklama": "D5-ASYA · NOKTA-ASYA araştırma birleşimi (dört kol: A Çin iç kesim · B Mançurya/Sincan/İç Moğolistan · C Dekken kuzeyi · D İndus batısı/Sibirya). "
                    "Üretici: denetim/ARAC-D5-ASYA-NOKTA-0917.py → data/yerlesimler_nokta_asya_0917.js",
       "noktalar": out, "eksik_kimlik": eksik, "olu_slug": sorted(olu)}
io.open(os.path.join(KOK, "denetim", "D5-ASYA-NOKTA-ARASTIRMA-0917.json"), "w", encoding="utf-8", newline="\n").write(json.dumps(res, ensure_ascii=False, indent=1))
print("nokta", len(out), "· eksik kimlik", len(eksik), "· ölü slug", len(olu))
for n in out:
    print(" ", n["ad"], n.get("kur"), [(p["f"][:4], p["t"][:4], p["d"]) for p in n.get("s", [])])
