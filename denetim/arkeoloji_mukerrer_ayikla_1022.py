"""MÖ olay dosyalarında MÜKERRER MADDE ayıklama (VERI-MO-ARKEO, 22 Ekim 2026).
denetle 'mükerrer madde' tavanı 95; antik dalgalar (3./4./devir) +17 çift ekledi. Her grup: AYNI günün, aynı olayı (komşu iki evrenin ortak sınırı,
aynı fetih, aynı geçiş) anlatan iki-üç madde. Tutulan maddeye atılanın `yer` adları EKLENİR (Değişmez 2s: dönem ucunu YERİ anan madde şart) — olay kaybolmaz.
Sıra: arkeoloji_hepsini_uret_1020.sh'nin SON adımıdır (üretici betikler yeniden madde üretir). İdempotent.
Grup = (t, tutulan başlık öneki, [atılan başlık önekleri]) — başlık öneki `b` alanına göre."""
import glob, json, os, re, sys

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))

GRUP = [
    ("-1479-01-01", "Nubya'nin Yeni Krallik Misir'i", ["Klasik Kerma (Kerma Classique): Klasik Kerma sona er", "Son Kerma (Kerma Recent/Final): Son Kerma başlar"]),
    ("-1449-01-01", "Kerma (Kush) krallığı/kültürü: sona erer", ["Son Kerma (Kerma Recent/Final): Son Kerma sona erer"]),
    ("-1749-01-01", "Klasik Kerma (Kerma Classique): Klasik Kerma başlar", ["Orta Kerma (Kerma Moyen): Orta Kerma sona erer"]),
    ("-2049-01-01", "Orta Krallık: başlar", ["Orta Kerma (Kerma Moyen): Orta Kerma başlar"], 1),
    ("-1299-01-01", "Ajalpan evresi (Tehuacán Vadisi)", ["Purrón evresi (Tehuacán Vadisi): sona erer"]),
    ("-1299-01-01", "Mumun dönemi başlangıcı", ["Chulmun dönemi (Kore Neolitiği): Chulmun kültürü ort"]),
    ("-1045-01-01", "Zhou'nun Shang'ı fethi (Muye)", ["Zhou'nun Shang seferi/fethi (Zhou kuruluşu", "Shang hanedan/dönem sınırları"]),
    ("-0929-01-01", "Kudüs: Yahuda Krallığı dönemi başlar", ["Samiriye (Samaria / Sebaste): Israil Krallığı (Samir"]),
    ("-0507-01-01", "Roma: Krallık -> Cumhuriyet (ilk konsüller)", ["Roma: Roma Krallığı → Roma Cumhuriyeti"], 1),
    ("-0499-01-01", "San Jose Mogote: koy yerlesimi", ["Monte Albán: başlar"]),
    ("-0320-01-01", "Maurya İmparatorluğu: Maurya İmparatorluğu: Chandrag", ["Nanda hanedanı (Magadha): Nanda'dan Maurya'ya geçiş"]),
    ("-0145-01-01", "Korint: Korint dönemi sona erer", ["Karthago: sahipsiz aralık dönemi sona erer"]),
]

RETITLE = [("-0311-01-01", "Ekbatana: sahipsiz aralık → Selevkos", "Ekbatana, Seleukeia: Seleukos Nikator hâkimiyeti başlar (Medya ve Dicle)")]


def yil(t):
    m = re.match(r"^(-?)(\d{4})", t)
    return (-1 if m.group(1) else 1) * int(m.group(2))


def oku(yol):
    s = open(yol, encoding="utf-8").read()
    m = re.match(r"^(.*?window\.\w+\s*=\s*)(\[.*\])(\s*;?\s*)$", s, re.S)
    return m.group(1), json.loads(m.group(2)), m.group(3)


def main():
    dosyalar = {}
    for yol in sorted(glob.glob(os.path.join(KOK, "data", "olaylar_arkeoloji*.js"))):
        dosyalar[yol] = oku(yol)
    degisen = set()
    atilan = 0
    for g_ in GRUP:
        t, tut, at = g_[:3]
        tol = g_[3] if len(g_) > 3 else 0                  # aynı GÜN; yalnız belirtilen grupta ±1 yıl (iki kaynak MÖ N / N+1 verir)
        # tutulan: t'ye en fazla 1 yıl yakın, başlığı önekle başlayan
        def bul(onek):
            out = []
            for yol, (_, L, _) in dosyalar.items():
                for i, o in enumerate(L):
                    if abs(yil(o["t"]) - yil(t)) <= tol and o["b"].startswith(onek):
                        out.append((yol, i))
            return out
        T = bul(tut)
        if not T:
            print("tutulan bulunamadı:", t, tut)
            continue
        ty, ti = T[0]
        K = dosyalar[ty][1][ti]
        for a in at:
            for (ay, ai) in sorted(bul(a), key=lambda x: -x[1]):
                O = dosyalar[ay][1][ai]
                adlar = [x.strip() for x in (K.get("yer") or "").split("/") if x.strip()]
                for x in [x.strip() for x in (O.get("yer") or "").split("/") if x.strip()]:
                    if x not in adlar:
                        adlar.append(x)
                K["yer"] = " / ".join(adlar)
                del dosyalar[ay][1][ai]
                degisen.update({ay, ty})
                atilan += 1
                print("atıldı:", t, "|", O["b"][:70], "→ tutulan:", K["b"][:50])
    # Başlık ayrıştırma: MÖ 312/311 Seleukos'un Medya ve Dicle noktalarına hâkimiyeti BİR YIL arayla iki ayrı geçiş (kaynaklarda iki ayrı yıl) — iki gün de korunur,
    # yalnız başlık 'sahipsiz aralık → Selevkos İmparatorluğu' kalıbını paylaşıp mükerrer sayılmasın diye Medya kolu özel adla yazılır.
    for t, onek, yeni_b in RETITLE:
        for yol, (_, L, _) in dosyalar.items():
            for o in L:
                if o["t"] == t and o["b"].startswith(onek):
                    o["b"] = yeni_b
                    degisen.add(yol)
                    print("başlık:", t, "→", yeni_b[:70])
    for yol in degisen:
        ust, L, alt = dosyalar[yol]
        with open(yol, "w", encoding="utf-8", newline="\n") as fh:
            fh.write(ust)
            json.dump(L, fh, ensure_ascii=False, indent=1)
            fh.write(alt if alt.strip() else ";\n")
    print("atılan madde:", atilan, "· değişen dosya:", len(degisen))


main()
