# UMIT-W46b ölçüm betiği — YALNIZ OKUR. Kök: argv[1] (ör. C:\atlas-w46b).
#   py UMIT-W46b-OLC-1006.py <kok> d2       önerilen kırılma günlerinin ±30 gün maddeleri (Değişmez 2 evreni)
#   py UMIT-W46b-OLC-1006.py <kok> komsu    "komşum kesinti taşıyor, ben taşımıyorum" sayımı
#   py UMIT-W46b-OLC-1006.py <kok> sina     komşu kontrolünün iki yönlü sınavı
import sys, os, math
from datetime import date
sys.stdout.reconfigure(encoding="utf-8")
KOK = sys.argv[1]
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi
import denetle

# (yerleşim, gün, ne) — W46 önerilerinin kırılma uçları
ONERI = [
    ("Dimetoka", "1913-09-29", "d: Osmanlı başı (İstanbul Ant.)"),
    ("Dimetoka", "1915-09-06", "d: Osmanlı sonu (Hudut Tashihi)"),
    ("Dimetoka", "1920-05-22", "s: yunanistan başı (TDV bati-trakya işgal günü)"),
    ("Bosna Dubiçası (Bosanska Dubica)", "1687-01-01", "isg avusturya başı (HE yıl)"),
    ("Bosna Dubiçası (Bosanska Dubica)", "1701-01-01", "isg avusturya sonu (HE yıl)"),
    ("Bosna Novi'si (Bosanski Novi)", "1691-01-01", "isg avusturya başı (HE yıl)"),
    ("Bosna Novi'si (Bosanski Novi)", "1703-01-01", "isg avusturya sonu (HE yıl)"),
    ("Kostayniçe (Kostajnica)", "1687-01-01", "d: sonu 1699-01-26 → 1687 (HE yıl)"),
    ("Banaluka", "1688-01-01", "isg avusturya (HE yıl, süre bilinmiyor)"),
    ("Erzurum", "1829-07-08", "isg rusya başı (TDV)"),
    ("Erzurum", "1829-09-14", "isg rusya sonu (TDV)"),
    ("Van", "1918-04-02", "isg sonu (TDV) — başı ölçülemedi"),
    # W46b yeni doğrulananlar
    ("Egina (Aegina)", "1664-01-01", "s venedik başı (HE yıl)"),
    ("Egina (Aegina)", "1715-01-01", "s venedik sonu (HE yıl)"),
    ("Doğubayazıt", "1828-01-01", "isg rusya başı (TDV yıl)"),
    ("Doğubayazıt", "1829-09-14", "isg rusya sonu (TDV: Edirne Ant.)"),
    ("Doğubayazıt", "1854-07-29", "isg rusya başı (TDV)"),
    ("Doğubayazıt", "1856-03-30", "isg rusya sonu (TDV: Paris Ant.)"),
    ("Doğubayazıt", "1877-04-30", "isg rusya başı (TDV)"),
    ("Doğubayazıt", "1878-07-13", "isg rusya sonu (TDV: Berlin Ant.)"),
    ("Doğubayazıt", "1918-04-14", "isg sonu (TDV) — başı ölçülemedi (31 Ekim 1914 = saldırı)"),
    ("Lüleburgaz", "1912-01-01", "s bulgaristan başı (TDV yıl)"),
    ("Lüleburgaz", "1913-01-01", "s bulgaristan sonu (TDV yıl)"),
]


def d2():
    O = denetle.olaylari_yukle()
    ol = [(denetle.gun_no(o["t"]), o) for o in O if o.get("t")]
    for ad, g, ne in ONERI:
        gn = denetle.gun_no(g)
        yakin = sorted(((abs(x - gn), x - gn, o) for x, o in ol if abs(x - gn) <= 30), key=lambda z: z[0])
        kok = ad.split(" (")[0].split("'")[0][:6].lower()
        yerli = [t for t in yakin if kok in ((t[2].get("yer_id") or "") + " " + (t[2].get("yer") or "") + " " + (t[2].get("b") or "")).lower()]
        hukum = "VAR" if yakin else "YOK — madde gerekir"
        print(f"{ad} · {g} · {ne}\n   ±30: {len(yakin)} madde → {hukum} · yeri anan: {len(yerli)}")
        for f, s, o in yakin[:3]:
            print(f"     {s:+d} g  {o['t']}  {o['b'][:90]}  (yer_id={o.get('yer_id')})")


def km(a, b):
    return girdi.km(a["lat"], a["lon"], b["lat"], b["lon"])


def kesik_mi(y, f, t):
    """[f,t) içinde y'nin Osmanlı d: sürekliliği başka bir katmanla kesiliyor mu."""
    for k in ("s", "v", "isg"):
        for p in y.get(k) or []:
            if p.get("f", "") < t and (p.get("t") or "9999") > f:
                return True
    return False


def komsu(Y, R=40.0, MIN_GUN=180, sessiz=False):
    """Bir komşunun (≤R km) Osmanlı d:'si içindeki GEÇİCİ kesinti (isg/v/s, ≥MIN_GUN gün, iki yanı d:)
    aynı tarihte benim kesintisiz d:'m tarafından örtülüyorsa → aday."""
    aday = {}
    # komşunun geçici kesintileri: d: içine düşen s/v/isg dönemleri (öncesi VE sonrası Osmanlı)
    for k in Y:
        dd = k.get("d") or []
        for kat in ("s", "v", "isg"):
            for p in k.get(kat) or []:
                f, t = p.get("f"), p.get("t")
                if not f or not t:
                    continue
                if (date.fromisoformat(t) - date.fromisoformat(f)).days < MIN_GUN:
                    continue
                # GEÇİCİ = komşu kesintiden ÖNCE de SONRA da Osmanlı (d:) — kalıcı kayıp sayılmaz
                once = any(q["f"] < f for q in dd)
                sonra = any((q.get("t") or "9999") > t for q in dd)
                if not (once and sonra):
                    continue
                for y in Y:
                    if y is k or km(y, k) > R:
                        continue
                    if not any(q["f"] <= f and (q.get("t") or "9999") >= t for q in y.get("d") or []):
                        continue
                    if kesik_mi(y, f, t):
                        continue
                    aday.setdefault(y["ad"], []).append((f, t, kat, p.get("d") or p.get("kid"), k["ad"], round(km(y, k))))
    return aday


def komsu_rapor():
    Y = girdi.yukle(sessiz=True)
    A = komsu(Y)
    print(f"ADAY yerleşim: {len(A)} / {len(Y)}  (R=40 km, kesinti ≥180 gün)")
    # pencere kümelemesi: (on yıl, katman) bazında
    from collections import Counter
    c = Counter()
    for ad, L in A.items():
        for kim in {(x[0][:3] + "0s", x[3]) for x in L}:
            c[kim] += 1
    print("en kalabalık (onyıl, kesinti sahibi) → aday yerleşim sayısı:")
    for (o, kim), n in c.most_common(25):
        print(f"   {o} {kim}: {n}")
    for ad in ["İskenderun", "Birecik", "Mersin", "Kemah", "Harput (Elazığ)", "Egina (Aegina)", "Bosna Dubiçası (Bosanska Dubica)", "Dimetoka"]:
        L = A.get(ad)
        print(f"   örnek {ad}: {L[:2] if L else 'aday DEĞİL'}")


def sina():
    """İki yön: ① yapay — komşu kesintili, ben kesintisiz ⇒ aday ② ben de kesintiyi taşıyorum ⇒ aday DEĞİL."""
    a = {"ad": "A", "lat": 40.0, "lon": 30.0, "d": [{"f": "1500-01-01", "t": "1900-01-01"}], "s": [], "v": [],
         "isg": [{"f": "1600-01-01", "t": "1610-01-01", "d": "x"}]}
    b = {"ad": "B", "lat": 40.1, "lon": 30.1, "d": [{"f": "1500-01-01", "t": "1900-01-01"}], "s": [], "v": [], "isg": []}
    c = {"ad": "C", "lat": 40.1, "lon": 30.0, "d": [{"f": "1500-01-01", "t": "1900-01-01"}], "s": [], "v": [],
         "isg": [{"f": "1600-01-01", "t": "1610-01-01", "d": "x"}]}
    u = {"ad": "U", "lat": 45.0, "lon": 30.0, "d": [{"f": "1500-01-01", "t": "1900-01-01"}], "s": [], "v": [], "isg": []}
    A = komsu([a, b, c, u])
    s1 = "B" in A
    s2 = "C" not in A and "A" not in A
    s3 = "U" not in A
    print(f"① B (komşusu kesintili, kendisi değil) aday: {s1}\n② A/C (kesintiyi taşıyor) aday değil: {s2}\n③ U (580 km uzak) aday değil: {s3}")
    print("SINAV:", "GEÇTİ" if s1 and s2 and s3 else "KALDI")


{"d2": d2, "komsu": komsu_rapor, "sina": sina}[sys.argv[2]]()
