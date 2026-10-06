# -*- coding: utf-8 -*-
"""ODAK-AFRIKA-AMERIKA-0080 — kronoloji maddelerine HARİTA ODAĞI uygulayıcısı.

Paket ODAK-0080 · şartname oturumlar/ODAK-AFRIKA-AMERIKA-0080.md
Öneriler: denetim/ODAK-AFRIKA-AMERIKA-0080-oneriler.json (156 madde, sınıflı)
Ölçüm yardımcısı: denetim/ODAK-AFRIKA-AMERIKA-0080-olc.py (app.js mantığı)

    py denetim/ODAK-AFRIKA-AMERIKA-0080-uygula.py                 # KURU KOŞU
    py denetim/ODAK-AFRIKA-AMERIKA-0080-uygula.py --grup A,B,C    # kısmî (kuru)
    py denetim/ODAK-AFRIKA-AMERIKA-0080-uygula.py --uygula        # YAZAR
    py denetim/ODAK-AFRIKA-AMERIKA-0080-uygula.py --ayrinti       # her öneriyi bas
    py denetim/ODAK-AFRIKA-AMERIKA-0080-uygula.py --sina          # süzgecin iki yönlü sınavı

Gruplar: A (yer_id) · B (odak_yer/odak_kimlik, metinden/taraflardan/sınır hattından)
         BG (B'nin coğrafî eşleme alt kümesi — metin BÖLGE adlandırıyor, yer seçimi benim)
         C (tek devlet: odak_kimlik ya da kimliğin tek yerleşimi odak_yer) · E (bulunamadı)
E grubu yalnız yabancı maddedeki `kapsam_genis:true`yu KALDIRIR (kamera Osmanlı'ya
uçmasın, panel eksikliği YAZSIN); başka alan yazmaz. D sınıfı YOK (hiçbiri Osmanlı çapında değil).

Her öneri uygulanmadan önce SINANIR — geçemeyen DOKUNULMAZ ve sayılır:
  · kayıt (dosya, t, b) ile TEK olarak bulunmalı         → yoksa "kayıt yok" / "çok kayıt"
  · eski hâl: yer_id "" · odak alanı yok · kapsam_genis tabana uygun → değilse "eski tutmuyor"
  · yer_id / odak_yer adı havuzda TEK yerleşime eşleşmeli (app ilk eşleşeni alır)
  · odak_kimlik: her id devletler.js'te + madde gününde ≥2 yerleşim (app.js:11751)
  · kutu (0,35° paylı) ≤ 60° boylam × 50° enlem          → değilse "şartı sağlamadı"
Dosya yazılmadan önce node ile yeniden ayrıştırılır: kayıt sayısı aynı, hedef DIŞI her
kayıt JSON olarak birebir aynı, hedef kayıt yalnız beklenen alanlarda farklı — değilse
o dosya YAZILMAZ.
"""
import os
import re
import sys
import json
import tempfile
import subprocess
import importlib.util
from collections import Counter

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.join(KOK, "arac"))

_sp = importlib.util.spec_from_file_location(
    "odak_olc_yardimci", os.path.join(KOK, "denetim", "ODAK-AFRIKA-AMERIKA-0080-olc.py"))
olc = importlib.util.module_from_spec(_sp)
_sp.loader.exec_module(olc)

UYGULA = "--uygula" in sys.argv
AYRINTI = "--ayrinti" in sys.argv
GRUP = None
if "--grup" in sys.argv:
    GRUP = set(g.strip() for g in sys.argv[sys.argv.index("--grup") + 1].split(","))

PAY = 0.35
# Tavan kıta ölçeğidir: bir devletin kendisi (Peru Genel Valiliği 16°×44,5°) geçer;
# ana ülkeye çözülen sömürge kimliği (Lefkoşa + Nijerya) geçemez.
TAVAN_LON, TAVAN_LAT = 60.0, 50.0
ODAK_ALANLARI = ("yer_kon", "odak_kutu_kaynak", "odak_yer", "odak_kimlik")


# ---------------------------------------------------------------- JS okuma
def node_oku(yol):
    betik = ("global.window={};eval(require('fs').readFileSync(process.argv[1],'utf8'));"
             "const k=Object.keys(global.window);"
             "process.stdout.write(JSON.stringify({ad:k,kayit:global.window[k[0]]||[]}));")
    r = subprocess.run(["node", "-e", betik, yol], capture_output=True, text=True, encoding="utf-8")
    if r.returncode != 0:
        raise RuntimeError((r.stderr or "")[:300])
    return json.loads(r.stdout)


def nesne_araliklari(metin):
    """Dış dizinin (window.X = [ ... ]) üst düzey {…} kayıtlarının [baş, son) aralıkları.
    Dize ("…", '…', `…`), satır ve blok yorumu farkındadır."""
    m = re.search(r"window\.[A-Za-z0-9_]+\s*=\s*\[", metin)
    if not m:
        raise RuntimeError("window.X = [ bulunamadı")
    i = m.end()
    yigin = ["["]
    out, bas = [], None
    n = len(metin)
    while i < n and yigin:
        c = metin[i]
        if c in "\"'`":
            q = c
            i += 1
            while i < n and metin[i] != q:
                i += 2 if metin[i] == "\\" else 1
        elif c == "/" and i + 1 < n and metin[i + 1] == "/":
            while i < n and metin[i] != "\n":
                i += 1
        elif c == "/" and i + 1 < n and metin[i + 1] == "*":
            j = metin.find("*/", i + 2)
            i = n if j < 0 else j + 1
        elif c in "[{":
            if c == "{" and yigin == ["["]:
                bas = i
            yigin.append(c)
        elif c in "]}":
            yigin.pop()
            if c == "}" and yigin == ["["]:
                out.append((bas, i + 1))
        i += 1
    return out


# ---------------------------------------------------------------- havuz
_ADIX = None


def ad_eslesme(ad):
    """app.js: sad === ad || sad.split(" (")[0] === ad — eşleşen BÜTÜN yerleşimler."""
    global _ADIX
    if _ADIX is None:
        _ADIX = {}
        for y in olc.yerlesimler():
            a = y.get("ad") or ""
            for k in {a, a.split(" (")[0]}:
                _ADIX.setdefault(k, []).append(y)
    return _ADIX.get(ad, [])


def kutu_olc(noktalar):
    lons = [p[1] for p in noktalar]
    lats = [p[0] for p in noktalar]
    k = [min(lons) - PAY, min(lats) - PAY, max(lons) + PAY, max(lats) + PAY]
    return k, k[2] - k[0], k[3] - k[1]


def sart(o):
    """(geçti_mi, not) — öneri app'te GERÇEKTEN çözülür mü."""
    alan, deger, t = o["alan"], o["deger"], o["t"]
    if alan is None:
        return True, "alan yazılmıyor"
    if alan in ("yer_id", "odak_yer"):
        adlar = [deger] if alan == "yer_id" else deger
        nok = []
        for a in adlar:
            e = ad_eslesme(a)
            if len(e) != 1:
                return False, f"'{a}' havuzda {len(e)} eşleşme (TEK olmalı)"
            nok.append((e[0]["lat"], e[0]["lon"]))
        if alan == "yer_id":
            return True, f"nokta {nok[0][0]:.2f},{nok[0][1]:.2f}"
        k, dx, dy = kutu_olc(nok)
    else:
        kix = olc.kunyeler()
        yok = [i for i in deger if i not in kix]
        if yok:
            return False, f"künye yok: {yok}"
        n, adlar = olc.kimlik_yerlesim(deger, t)
        if n < 2:
            return False, f"{deger} @{t} → {n} yerleşim (≥2 şart)"
        byad = {y["ad"]: y for y in olc.yerlesimler()}
        k, dx, dy = kutu_olc([(byad[a]["lat"], byad[a]["lon"]) for a in adlar])
    if dx > TAVAN_LON or dy > TAVAN_LAT:
        return False, f"kutu {dx:.1f}°×{dy:.1f}° tavanı aşıyor ({TAVAN_LON}×{TAVAN_LAT})"
    return True, f"kutu [{k[0]:.1f},{k[1]:.1f},{k[2]:.1f},{k[3]:.1f}] {dx:.1f}°×{dy:.1f}°"


# ---------------------------------------------------------------- sınıflama (öngörü)
def app_sinif(r):
    """app.js haritayiOlayaGotur sırası (yerleşim sayısıyla)."""
    yk = r.get("yer_kon")
    if isinstance(yk, list) and len(yk) == 2:
        return "KONUMLU"
    if r.get("yer_id") and ad_eslesme(r["yer_id"]):
        return "KONUMLU"
    if r.get("odak_kutu_kaynak"):
        return "KUTULU"
    oy = r.get("odak_yer")
    if oy:
        oy = oy if isinstance(oy, list) else [oy]
        if any(ad_eslesme(a) for a in oy):
            return "KUTULU"
    ok = r.get("odak_kimlik")
    if ok:
        ok = ok if isinstance(ok, list) else [ok]
        if olc.kimlik_yerlesim(ok, r["t"][:10])[0] >= 2:
            return "KUTULU"
    return "BEYANLI" if r.get("kapsam_genis") is True else "ODAKSIZ"


# ---------------------------------------------------------------- metin düzeltme
def duzelt(nesne, o):
    """Nesne metnine öneriyi uygular. (yeni_metin, hata)"""
    tirnakli = bool(re.search(r'"t"\s*:', nesne))
    s = nesne
    if o["kaldir_kapsam_genis"]:
        desen = r'"?kapsam_genis"?\s*:\s*true'
        if len(re.findall(desen, s)) != 1:
            return None, "kapsam_genis metinde tek değil"
        s2, n = re.subn(r'\s*,\s*"?kapsam_genis"?\s*:\s*true(?=\s*[,}])', "", s)
        if n != 1:
            s2, n = re.subn(r'"?kapsam_genis"?\s*:\s*true\s*,\s*', "", s)
        if n != 1:
            return None, "kapsam_genis kaldırılamadı"
        s = s2
    if o["alan"] == "yer_id":
        desen = r'("?yer_id"?\s*:\s*)""'
        if len(re.findall(r'"?yer_id"?\s*:', s)) != 1 or len(re.findall(desen, s)) != 1:
            return None, "yer_id metinde tek ve boş değil"
        s = re.sub(desen, lambda m: m.group(1) + json.dumps(o["deger"], ensure_ascii=False), s)
    elif o["alan"] in ("odak_yer", "odak_kimlik"):
        if re.search(r'"?' + o["alan"] + r'"?\s*:', s):
            return None, f"{o['alan']} zaten var"
        anahtar = f'"{o["alan"]}"' if tirnakli else o["alan"]
        deger = json.dumps(o["deger"], ensure_ascii=False)
        govde = s[:-1].rstrip()
        kuyruk = s[len(govde):-1]
        ayrac = "" if govde.endswith(",") else ","
        bosluk = "" if tirnakli else " "
        s = govde + ayrac + bosluk + anahtar + ":" + deger + kuyruk + "}"
    return s, None


def beklenen(r, o):
    r = dict(r)
    if o["kaldir_kapsam_genis"]:
        r.pop("kapsam_genis", None)
    if o["alan"]:
        r[o["alan"]] = o["deger"]
    return r


# ---------------------------------------------------------------- ana akış
def main():
    oneriler = json.load(open(os.path.join(KOK, "denetim", "ODAK-AFRIKA-AMERIKA-0080-oneriler.json"),
                              encoding="utf-8"))
    say = Counter()
    once, sonra = Counter(), Counter()          # app'e göre öngörü (seçilen gruplar)
    olc_once, olc_sonra = Counter(), Counter()  # arac/odak_olc.py'ye göre
    import odak_olc
    # W32b (6 Ekim 2026): T4 — sinifla · yer_havuzu 26741c10 (27 Eyl) ile odak_olc'tan KALDIRILDI;
    # betik AttributeError ile çöküp ÇIKIŞ 1 ("ihlal") veriyordu. Artık açılışta ÇIKIŞ 2,
    # veriye HİÇBİR ŞEY yazılmadan. Taşıma: arac/odak_cozum.js (W36: ODAK-ASYA-0080-uygula).
    import olcu_kapisi_1006 as _w32_ok
    _w32_ok.api(odak_olc, ['sinifla', 'yer_havuzu'], "odak_olc")
    havuz = odak_olc.yer_havuzu()

    dosyalar = sorted(set(o["dosya"] for o in oneriler))
    for dosya in dosyalar:
        yol = os.path.join(KOK, "data", dosya)
        with open(yol, encoding="utf-8", newline="") as f:     # satır sonu KORUNUR
            metin = f.read()
        veri = node_oku(yol)["kayit"]
        aralik = nesne_araliklari(metin)
        if len(aralik) != len(veri):
            print(f"🔴 {dosya}: metinde {len(aralik)} nesne, node {len(veri)} kayıt — DOSYA ATLANDI")
            say["dosya atlandı"] += 1
            continue
        degis = {}          # kayıt indeksi → (yeni nesne metni, beklenen kayıt)
        for o in [x for x in oneriler if x["dosya"] == dosya]:
            etiket = f"[{o['i']}] {o['sinif']}/{o['grup']} {o['t']} {o['b'][:70]}"
            if GRUP and o["grup"] not in GRUP:
                say["grup dışı"] += 1
                continue
            bul = [j for j, r in enumerate(veri) if r.get("t") == o["t"] and r.get("b") == o["b"]]
            if not bul:
                say["kayıt yok"] += 1
                print("🔴 KAYIT YOK  ", etiket)
                continue
            if len(bul) > 1:
                say["çok kayıt"] += 1
                print("🔴 ÇOK KAYIT  ", etiket)
                continue
            j = bul[0]
            r = veri[j]
            if o["alan"] is None and not o["kaldir_kapsam_genis"]:
                say["E — bulunamadı, dokunulmadı"] += 1
                if AYRINTI:
                    print(f"· {etiket}\n     E: {o['gerekce']}")
                continue
            if o["alan"] and r.get(o["alan"]) == o["deger"] and \
               (not o["kaldir_kapsam_genis"] or "kapsam_genis" not in r):
                say["zaten böyle"] += 1
                continue
            eski_ok = (r.get("yer_id", "") == "" and not any(r.get(a) for a in ODAK_ALANLARI)
                       and (r.get("kapsam_genis") is True) == (o["taban"] == "BEYANLI"))
            if not eski_ok:
                say["eski tutmuyor"] += 1
                print("🔴 ESKİ TUTMUYOR", etiket, {a: r.get(a) for a in ("yer_id", "kapsam_genis") + ODAK_ALANLARI})
                continue
            gecti, not_ = sart(o)
            if not gecti:
                say["şartı sağlamadı"] += 1
                print("🟡 ŞART YOK   ", etiket, "→", not_)
                continue
            yeni, hata = duzelt(metin[aralik[j][0]:aralik[j][1]], o)
            if hata:
                say["metin düzeltilemedi"] += 1
                print("🔴 METİN      ", etiket, "→", hata)
                continue
            degis[j] = (yeni, beklenen(r, o))
            b_r = beklenen(r, o)
            once[app_sinif(r)] += 1
            sonra[app_sinif(b_r)] += 1
            olc_once[odak_olc.sinifla(r, havuz)[0]] += 1
            olc_sonra[odak_olc.sinifla(b_r, havuz)[0]] += 1
            if AYRINTI:
                deg = "" if o["alan"] is None else f"{o['alan']}={json.dumps(o['deger'], ensure_ascii=False)}"
                kg = " · kapsam_genis KALDIRILIR" if o["kaldir_kapsam_genis"] else ""
                print(f"✓ {etiket}\n     {deg}{kg}\n     sınama: {not_}\n     gerekçe: {o['gerekce']}"
                      f"\n     madde kaynağı: {o['kaynak'][:140]}")
        if not degis:
            continue
        # yeni metni kur (sondan başa, aralıklar kaymasın)
        yeni_metin = metin
        for j in sorted(degis, reverse=True):
            a, b = aralik[j]
            yeni_metin = yeni_metin[:a] + degis[j][0] + yeni_metin[b:]
        # doğrula
        with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8",
                                         newline="") as f:
            f.write(yeni_metin)
            gecici = f.name
        try:
            yeni_veri = node_oku(gecici)["kayit"]
        finally:
            os.unlink(gecici)
        hata = None
        if len(yeni_veri) != len(veri):
            hata = f"kayıt sayısı {len(veri)} → {len(yeni_veri)}"
        else:
            for j in range(len(veri)):
                hedef = degis[j][1] if j in degis else veri[j]
                if json.dumps(yeni_veri[j], sort_keys=True, ensure_ascii=False) != \
                   json.dumps(hedef, sort_keys=True, ensure_ascii=False):
                    hata = f"kayıt {j} beklenenden farklı ({'HEDEF' if j in degis else 'hedef DIŞI'})"
                    break
        if hata:
            say["dosya doğrulanamadı"] += 1
            print(f"🔴 {dosya}: {hata} — YAZILMADI")
            continue
        say["değişen"] += len(degis)
        durum = "YAZILDI" if UYGULA else "kuru koşu (yazılmadı)"
        print(f"   {dosya}: {len(degis)} kayıt · doğrulama ✓ · {durum}")
        if UYGULA:
            with open(yol, "w", encoding="utf-8", newline="") as f:
                f.write(yeni_metin)

    print()
    print("SAYAÇLAR:", dict(say))
    print("ÖNGÖRÜ (uygulanan kümede) — app.js mantığına göre:",
          dict(once), "→", dict(sonra))
    print("ÖNGÖRÜ — arac/odak_olc.py'ye göre (tek kimlikli odak_kimlik'i ODAKSIZ/BEYANLI sayar):",
          dict(olc_once), "→", dict(olc_sonra))
    if not UYGULA:
        print("⚠️ KURU KOŞU — yazmak için --uygula")


def sinav():
    """Süzgeç İKİ YÖNDE sınanır (CLAUDE.md §11): bilinen iyi geçer, bilinen kötü düşer."""
    vakalar = [
        (True,  {"alan": "yer_id", "deger": "Cajamarca", "t": "1532-11-16"}),
        (True,  {"alan": "odak_kimlik", "deger": ["ispanyol-peru"], "t": "1542-11-20"}),
        (True,  {"alan": "odak_kimlik", "deger": ["lupaqa-krallik", "colla-krallik"], "t": "1430-01-01"}),
        (False, {"alan": "yer_id", "deger": "Mérida", "t": "1542-01-01"}),           # 2 eşleşme
        (False, {"alan": "yer_id", "deger": "Mora", "t": "1916-02-18"}),             # Kamerun Mora'sı YOK
        (False, {"alan": "odak_kimlik", "deger": ["ingiliz-nijerya"], "t": "1913-03-11"}),  # imparatorluk
        (False, {"alan": "odak_kimlik", "deger": ["japonya"], "t": "1600-01-01"}),   # D215
        (False, {"alan": "odak_kimlik", "deger": ["evfat"], "t": "1328-01-01"}),     # 0 yerleşim
        (False, {"alan": "odak_yer", "deger": ["Hawikuh"], "t": "1540-07-07"}),      # havuzda yok
    ]
    kotu = 0
    for bek, o in vakalar:
        g, n = sart(o)
        # ⚠️ Süzgeç ad TEKLİĞİNİ sınar, yer DOĞRULUĞUNU değil: havuzda tek eşleşen ama
        # başka ülkedeki bir ad geçer. 'Mora' burada 2 eşleşmeyle düşüyor; tek olsaydı
        # (ör. yalnız Mora (Tripoliçe)) GEÇERDİ — o tuzak insan okumasıyla düşer (öneri
        # tablosu Kamerun Mora'sını bu yüzden KULLANMADI).
        ok = (g == bek)
        kotu += not ok
        print(f"  {'✓' if ok else '🔴'} beklenen={'geçer' if bek else 'düşer'} · {o['alan']}={o['deger']} → {n}")
    print("SINAV:", "TEMİZ" if not kotu else f"{kotu} HATA")
    return kotu


if __name__ == "__main__":
    if "--sina" in sys.argv:
        sys.exit(1 if sinav() else 0)
    main()
