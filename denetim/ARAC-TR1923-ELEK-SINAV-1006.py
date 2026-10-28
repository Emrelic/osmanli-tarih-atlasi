# -*- coding: utf-8 -*-
"""ARAC-TR1923-YAZ kopya eleği SINAVI (UMIT-W6-DALGA6/7-1006). data/'ya YAZMAZ.

Elek (dalga 7): kopya beyanlı aday ELENMEZ, YÖNLENDİRİLİR — beyan penceresi kökenin
zinciriyle dolar. Sınav "ikinci kuşak İÇERİK iniyor mu?" sorusunu sorar.

Kollar (beyan benzetimi: W9 — 45 elle kopya, gerçek kaynak + pencere ile):
 ① İKİ YÖN: Norapat · Kliçatak · Beri · Küçükperveli için, komşunun kopya penceresindeki
    zincir KÖKENİN zinciriyle aynı olmalı (yeni betik) ve BAYAT kopyanın zinciriyle aynı
    olmalı (eski betik) — ters yön ötmezse sınav bir şey görmüyor demektir.
 ①c W9: 28 seçimde, beyanlı komşudan gelen her pencere kökenle aynı (ihlal 0).
 ①q QAŢŢĪNAH: Ceylanpınar beyanlıyken birleşimin A kolu Ceylanpınar KALIR (komşu düşmez)
    ve T öncesi zincir kökenin (Mardin) zinciridir.
 ② BEYANSIZ: hiç beyan yokken yeni çıktı = eski çıktı + `zincir_kaynagi`. Başka fark 0.
 ③ BUGÜN: yeni çıktı (beyansız) ↔ data/: fark yalnız `zincir_kaynagi` + BEKLENEN_KAYMA.
Çıktılar yalnız geçici dizine; gerçek data/ yolu `assert` ile engellenir.
Eski betik `git show <ref>:denetim/ARAC-TR1923-YAZ-0914.py` ile okunur.

Kullanım: py denetim/ARAC-TR1923-ELEK-SINAV-1006.py [--eski-ref origin/main]
Çıkış: 0 = geçti · 1 = bir kol düştü.
"""
import sys, os, io, json, copy, tempfile, subprocess, importlib.util, contextlib, argparse
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, "arac")
import girdi

BETIK = os.path.join(KOK, "denetim", "ARAC-TR1923-YAZ-0914.py")
SECIM = os.path.join(KOK, "denetim", "OLCUM-TR1923-SINIR-0914.json")
B, S = "1281-01-01", "1923-10-29"
# W9 benzetimi — kopya: (kaynak, pencere başı, pencere sonu, tür). Kaynak: UMIT-W6-DALGA4-1006 §3.2
# (54 − kaynak adsız 4 − bilerek ayrılmış 5 = 45). Gerçek W9 verisi inince bu tablo değil veri sınanır.
W9 = {
    "Linz": ("Freistadt", B, S, "birebir"), "Třeboň (Wittingau)": ("České Budějovice (Budweis)", B, S, "birebir"),
    "Feldkirch": ("Bregenz", B, S, "birebir"), "Innsbruck": ("Landeck", B, S, "birebir"),
    "Annemasse": ("Thonon", B, S, "birebir"), "Bastogne": ("Arlon", B, S, "birebir"),
    "Neufchâteau (Belçika)": ("Arlon", B, S, "birebir"), "Virton": ("Arlon", B, S, "birebir"),
    "Wiltz": ("Lüksemburg", B, S, "birebir"), "Nyala": ("El-Fâşir", B, S, "birebir"),
    "Reşadiye (İskefsir)": ("Ordu (Bayramlı)", B, S, "birebir"), "Blagoveşçensk": ("Albazin", B, S, "birebir"),
    "Ceylanpınar": ("Mardin", B, S, "birebir"), "Gümrü (Aleksandropol)": ("Revan", B, S, "birebir"),
    "Eçmiyadzin": ("Revan", B, S, "birebir"), "Özalp (Saray)": ("Van", B, S, "birebir"),
    "Yüksekova (Gever)": ("Çölemerik (Hakkâri)", B, S, "birebir"), "Yagodina (Jagodina)": ("Kragujevac", B, S, "birebir"),
    "Hayber": ("Medine", B, S, "birebir"), "Midyat": ("Mardin", B, S, "birebir"), "Bedir": ("Yenbu", B, S, "birebir"),
    "Râbiğ": ("Cidde", B, S, "birebir"), "Taraz (Evliya-Ata)": ("Çimkent", B, S, "birebir"),
    "Sayram (İsficâb)": ("Çimkent", B, S, "birebir"), "Lovozero (Luyavr)": ("Kola", B, S, "birebir"),
    "Sîva (Siwa)": ("Dâhile", B, S, "birebir"), "Zaural Başkurt toprakları": ("Tümen (Çimgi-Tura)", B, S, "birebir"),
    "Bacirge (Esendere)": ("Yüksekova (Gever)", B, S, "birebir"), "Çatalca": ("Silivri", B, S, "birebir"),
    "Bitlis": ("Van", B, "1508-01-01", "pencere"), "Arpaçay (Akyaka)": ("Revan", B, "1508-01-01", "pencere"),
    "Digor": ("Revan", B, "1508-01-01", "pencere"), "Iğdır": ("Revan", B, "1508-01-01", "pencere"),
    "Divriği": ("Sivas", B, "1381-01-01", "pencere"), "Şehirköy (Pirot)": ("Niş", "1410-02-13", "1412-01-01", "pencere"),
    "Şeyh Salû-yi Ulyâ": ("Kotur", "1548-08-24", "1639-05-17", "pencere"),
    "Culfa": ("Nahçıvan", "1585-01-01", "1603-10-21", "pencere"),
    "Bolayır": ("Gelibolu", "1366-08-01", "1376-09-01", "pencere"),
    "Maydos (Eceabat)": ("Gelibolu", "1366-08-01", "1376-09-01", "pencere"),
    "İshakçı (Isaccea)": ("Silistre", "1402-07-28", "1420-01-01", "pencere"),
    "Debrecen": ("Varad (Oradea)", "1526-09-01", "1700-01-01", "pencere"),
    "Kahul (Cahul)": ("İsmail", "1456-01-01", "1538-09-01", "pencere"),
    "Lublin": ("Varşova", "1917-01-01", "1918-11-11", "pencere"),
    "Białystok": ("Varşova", "1918-11-11", "1919-01-01", "pencere"),
    "Çehrin (Çigirin)": ("Kiev", B, "1400-01-01", "pencere"),
}
ZINCIRLEME = ("Norapat", "Kliçatak (Suser)", "Beri", "Küçükperveli")
# Dalga 5 sınavı (UMIT-W6-DALGA5-1006 §2.3): kaynak kayıtlar üretimden sonra değişti.
BEKLENEN_KAYMA = {"Norapat", "Kliçatak (Suser)", "Stérna", "Küfkaynapınarı (Azatlı)",
                  "Malak Dervent (Lalkovo)", "Umur Fakih (Fakia)"}


def modul(yol, ad):
    spec = importlib.util.spec_from_file_location(ad, yol)
    m = importlib.util.module_from_spec(spec)
    # betik yüklenirken `sys.stdout`u kendi sarmalayıcısıyla değiştirir; o sarmalayıcı
    # çöpe gidince altındaki tamponu KAPATIR. Ona sahte bir tampon ver, sonra geri al.
    eski_out = sys.stdout
    sys.stdout = io.TextIOWrapper(io.BytesIO(), encoding="utf-8")
    spec.loader.exec_module(m)
    sys.stdout = eski_out
    os.chdir(KOK)                             # betik kendi konumuna göre chdir yapar; geçici kopyada yanlış kök
    return m


def isaretle(Y):
    Y = copy.deepcopy(Y)
    for y in Y:
        if y["ad"] in W9:
            s, f, t, tur = W9[y["ad"]]
            y["zincir_kaynagi"] = {"yer": s, "pencere": [f, t], "tur": tur}
    return Y


def kos(m, cikti, beyan=False):
    os.makedirs(cikti, exist_ok=True)
    gercek = {k: os.path.abspath(v[0]) for k, v in m.DOSYA.items()}
    m.DOSYA = {k: (os.path.join(cikti, os.path.basename(v[0])), v[1], v[2]) for k, v in m.DOSYA.items()}
    for k, v in m.DOSYA.items():
        assert os.path.abspath(v[0]) != gercek[k], "GERÇEK data/ YOLU — durdu"
        assert os.path.commonpath([os.path.abspath(v[0]), os.path.abspath(cikti)]) == os.path.abspath(cikti)
    asil = girdi.yukle
    m.girdi.yukle = (lambda sessiz=False: isaretle(asil(sessiz=sessiz))) if beyan else asil
    eski_argv, sys.argv = sys.argv, [BETIK, SECIM]
    try:
        with contextlib.redirect_stdout(io.StringIO()):
            m.main()
    finally:
        sys.argv = eski_argv
        m.girdi.yukle = asil
    out = {}
    for v in m.DOSYA.values():
        for l in open(v[0], encoding="utf-8"):
            l = l.strip()
            if l.startswith('{"ad"'):
                o = json.loads(l.rstrip(","))
                out[o["ad"]] = o
    return out


def komsu(o):
    z = o.get("zincir_kaynagi")
    if isinstance(z, dict):
        return [z["yer"]]
    if isinstance(z, list):
        return [x["yer"] for x in z]
    import re
    return re.findall(r"«([^»]+)»", o.get("kaynak", ""))


def kesit(o, f, t):
    """[f,t) içindeki (gün sınırlı) sahiplik kümesi — s/d/v ayrı."""
    out = set()
    for a in ("s", "d", "v"):
        for p in o.get(a) or []:
            x, y = max(p["f"], f), min(p["t"], t)
            if x < y:
                out.add((a, x, y, p.get("d")))
    return out


def koken(ad, AD, f, t):
    """Beyan zincirini izleyerek [f,t) penceresinin KÖKEN kaydını döndürür (sınavın kendi çözümü)."""
    seen = set()
    while ad in W9 and ad not in seen:
        seen.add(ad)
        s, pf, pt, _ = W9[ad]
        if pf <= f and t <= pt:
            ad = s
        else:
            break
    return AD[ad]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--eski-ref", default="origin/main")
    a = ap.parse_args()
    tmp = tempfile.mkdtemp(prefix="tr1923_elek_")
    eski_yol = os.path.join(tmp, "eski_betik.py")
    kod = subprocess.run(["git", "show", f"{a.eski_ref}:denetim/ARAC-TR1923-YAZ-0914.py"],
                         capture_output=True, check=True).stdout
    open(eski_yol, "wb").write(kod)
    with contextlib.redirect_stdout(io.StringIO()), contextlib.redirect_stderr(io.StringIO()):
        Y0 = girdi.yukle(sessiz=True)
    AD = {y["ad"]: y for y in Y0}
    for k, (s, *_) in W9.items():
        assert k in AD and s in AD, (k, s)
    dus = 0

    # ② BEYANSIZ — eski ↔ yeni
    E = kos(modul(eski_yol, "eski"), os.path.join(tmp, "eski_beyansiz"))
    N = kos(modul(BETIK, "yeni"), os.path.join(tmp, "yeni_beyansiz"))
    fark2 = [ad for ad in sorted(set(E) | set(N))
             if E.get(ad) != {k: v for k, v in N.get(ad, {}).items() if k != "zincir_kaynagi"}]
    fark2 += [f"{ad} (zincir_kaynagi YOK)" for ad in N if "zincir_kaynagi" not in N[ad]]
    print(f"② BEYANSIZ  eski↔yeni fark (zincir_kaynagi hariç): {len(fark2)} {fark2[:6]}  {'✓' if not fark2 else '✗'}")
    dus += bool(fark2)

    # ① İKİ YÖN — beyanlı komşunun penceresi: yeni = köken · eski = bayat kopya
    E1 = kos(modul(eski_yol, "eski1"), os.path.join(tmp, "eski_w9"), beyan=True)
    N1 = kos(modul(BETIK, "yeni1"), os.path.join(tmp, "yeni_w9"), beyan=True)
    for ad in ZINCIRLEME:
        k = komsu(N1[ad])[0]
        s, f, t, _ = W9[k]
        kok = koken(k, AD, f, t)
        yeni_kok = kesit(N1[ad], f, t) == kesit(kok, f, t)
        eski_kopya = kesit(E1[ad], f, t) == kesit(AD[k], f, t)
        bayat = kesit(AD[k], f, t) != kesit(kok, f, t)
        ok = yeni_kok and eski_kopya
        print(f"① {ad:18s} komşu {k} [{f}→{t}] köken {kok['ad']}: yeni=köken {'✓' if yeni_kok else '✗'} · "
              f"eski=kopya {'✓' if eski_kopya else '✗'} · kopya bayat mı: {'evet' if bayat else 'HAYIR (ters yön ayırt edemez)'}  "
              f"{'✓' if ok else '✗'}")
        dus += not ok

    # ①c W9 — 28 seçimde beyanlı komşudan gelen her pencere kökenle aynı
    ihlal, yonlu = [], 0
    for ad, o in N1.items():
        z = o["zincir_kaynagi"]
        for b in (z if isinstance(z, list) else [z]):
            k = b["yer"]
            if k not in W9:
                continue
            s, f, t, _ = W9[k]
            f, t = max(f, b["pencere"][0]), min(t, b["pencere"][1])
            if f >= t:
                continue
            yonlu += 1
            if kesit(o, f, t) != kesit(koken(k, AD, f, t), f, t):
                ihlal.append((ad, k, f, t))
    print(f"①c W9 benzetimi: beyanlı komşudan pencere {yonlu} · köken dışı içerik {len(ihlal)} {ihlal[:4]}  {'✓' if not ihlal else '✗'}")
    dus += bool(ihlal)

    # ①q QAŢŢĪNAH — Ceylanpınar komşu KALIR, T öncesi Mardin
    q = N1["Qaţţīnah"]
    kq = komsu(q)
    z = q["zincir_kaynagi"]
    T = z[0]["pencere"][1] if isinstance(z, list) else None
    ok_q = "Ceylanpınar" in kq and T and kesit(q, B, T) == kesit(AD["Mardin"], B, T)
    print(f"①q Qaţţīnah komşular {kq} · T={T} · T öncesi = Mardin: {'✓' if ok_q else '✗'}")
    dus += not ok_q

    # ③ BUGÜN
    fark3, uyari = [], 0
    bugun = {}
    for f in ("yerlesimler_sinir_kuzey.js", "yerlesimler_sinir_guney.js"):
        for l in open(os.path.join("data", f), encoding="utf-8"):
            l = l.strip()
            if l.startswith('{"ad"'):
                o = json.loads(l.rstrip(","))
                bugun[o["ad"]] = o
    for ad in sorted(set(N) | set(bugun)):
        n = {k: v for k, v in N.get(ad, {}).items() if k != "zincir_kaynagi"}
        b = bugun.get(ad, {})
        alan = sorted(k for k in set(n) | set(b) if n.get(k) != b.get(k))
        if alan and not (ad in BEKLENEN_KAYMA and set(alan) <= {"s", "d", "v"}):
            fark3.append((ad, alan))
    uyari = sum(1 for o in N.values() if set(o) - set(girdi.BILINEN_ALANLAR))
    print(f"③ BUGÜN  yeni çıktı ↔ data/: beklenmeyen fark {len(fark3)} {fark3[:6]}  {'✓' if not fark3 else '✗'}")
    print(f"③ UYARI  BILINEN_ALANLAR dışı alan taşıyan kayıt: {uyari} (beklenen 28 — `zincir_kaynagi`, W9 kaydedene dek)")
    dus += bool(fark3)
    print(f"SONUÇ: {'GEÇTİ' if not dus else f'{dus} KOL/SATIR DÜŞTÜ'} · geçici dizin {tmp}")
    sys.exit(1 if dus else 0)


if __name__ == "__main__":
    main()
