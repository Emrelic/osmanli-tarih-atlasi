"""Şehir tarihçesi (`data/sehir_tarihce_*.js`) — üretici ve denetçi. Şema: VERI-YAPISI.md.

    py arac/sehir_tarihce.py yaz <girdi.json> <data/sehir_tarihce_x.js> <BOLGE>
    py arac/sehir_tarihce.py denetle <data/sehir_tarihce_x.js>
    py arac/sehir_tarihce.py devletler <çıktı.tsv>          (araştırmacı için künye dökümü)

`yaz` önce denetler; ihlal varsa dosyayı YAZMAZ. Çıkış: 0 temiz · 1 ihlal · 2 ölçülemedi.
Motor, denetle.py ve site bu dosyaları OKUMAZ — araştırma birikimidir, aktarım ayrı iştir.
"""
import json, os, re, sys

KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
sys.path.insert(0, os.path.join(KOK, "arac"))
TARIH = re.compile(r"^(-?)(\d{4,6})-(\d{2})-(\d{2})$")   # MÖ 10000+ = 5 haneli astronomik yıl (gun.py 1-6 hane kabul eder)
NICELIK = {"kurulus", "ilk_anilis", "arkeolojik"}
KESINLIK = {"gun", "ay", "yil", "onyil", "yuzyil", "belirsiz"}
ZINCIR_SONU_ATLASSIZ = "1900-01-01"
OLAY_PENCERE_GUN = 30


def gun_no(s):
    """Tarih → yaklaşık gün sayısı (yalnız SIRA ve ±30 gün için; takvim aritmetiği değil)."""
    m = TARIH.match(s or "")
    if not m:
        return None
    y = int(m.group(2)) * (-1 if m.group(1) else 1)
    return y * 365.2425 + (int(m.group(3)) - 1) * 30.44 + int(m.group(4))


def yil(s):
    m = TARIH.match(s)
    return int(m.group(2)) * (-1 if m.group(1) else 1)


def gun_metni_tutar(t, gun):
    """`gun` metni sayıyla çelişiyor mu? MÖ n ↔ -(n-1); 'yüzyıl' metni yüzyıl aralığıyla."""
    y = yil(t)
    mo = "MÖ" in gun or "M.Ö" in gun
    if (y <= 0) != mo:
        return False
    sayilar = [int(x) for x in re.findall(r"\d+", gun)]
    if not sayilar:
        return False
    tarihi = (1 - y) if y <= 0 else y          # tarihî numaralandırmadaki yıl
    if re.search(r"yüzyıl|yy\b|binyıl", gun):
        carp = 1000 if "binyıl" in gun else 100
        return any((c - 1) * carp < tarihi <= c * carp for c in sayilar)
    return tarihi in sayilar


def atlas_ilk_gunleri():
    import girdi
    cwd = os.getcwd()
    os.chdir(KOK)
    try:
        Y = girdi.yukle(sessiz=True)
    finally:
        os.chdir(cwd)
    out = {}
    for y in Y:
        g = [(p["f"], p.get("d") or "osmanli") if a != "s" else (p["f"], p.get("d"))
             for a in ("s", "d", "v") for p in (y.get(a) or []) if p.get("f")]
        if g:
            out[y["ad"]] = min(g, key=lambda x: gun_no(x[0]))   # (ilk gün, ilk sahip)
    return out


def kesinlik_gecerli(k):
    """Skaler ya da {f,t} nesnesi — VERI-YAPISI ③: okuyucu İKİ biçimi de kabul eder."""
    if isinstance(k, dict):
        return bool(k) and set(k) <= {"f", "t"} and all(v in KESINLIK for v in k.values())
    return k in KESINLIK


def devlet_omurleri():
    import girdi
    cwd = os.getcwd()
    os.chdir(KOK)
    try:
        D = girdi.oku_devletler()
    finally:
        os.chdir(cwd)
    if isinstance(D, dict):
        D = list(D.values())
    return {d["id"]: (d.get("f"), d.get("t"), d.get("harita") or d["id"]) for d in D}


def denetle_kayitlar(K, sessiz=False):
    ihlal, uyari = [], []
    try:
        atlas = atlas_ilk_gunleri()
        omur = devlet_omurleri()
    except Exception as e:                       # ölçülemedi ≠ temiz
        print("ÖLÇÜLEMEDİ:", e)
        return 2
    gorulen = set()

    def tarih_ok(yer, t, gun=None):
        if not TARIH.match(t or ""):
            ihlal.append(f"{yer}: tarih biçimi '{t}'")
            return False
        if gun is not None and not gun_metni_tutar(t, gun):
            ihlal.append(f"{yer}: gun metni '{gun}' tarih {t} ile çelişiyor")
        return True

    for k in K:
        i = k.get("id") or "?"
        if i in gorulen:
            ihlal.append(f"{i}: mükerrer id")
        gorulen.add(i)
        for alan in ("ad", "lat", "lon", "kat1900", "ilk", "sahip", "olay"):
            if alan not in k:
                ihlal.append(f"{i}: '{alan}' yok")
        ilk = k.get("ilk") or {}
        if ilk.get("nicelik") not in NICELIK:
            ihlal.append(f"{i}: ilk.nicelik '{ilk.get('nicelik')}'")
        for ad_ in ("ilk", "kur", "ark", "bit"):
            o = k.get(ad_)
            if not o:
                continue
            tarih_ok(f"{i}.{ad_}", o.get("t"), o.get("gun") or "")
            if not kesinlik_gecerli(o.get("kesinlik")):
                ihlal.append(f"{i}.{ad_}: kesinlik '{o.get('kesinlik')}'")
            if not (o.get("kaynak") or "").strip():
                ihlal.append(f"{i}.{ad_}: kaynak boş")
        if k.get("kur") and ilk.get("nicelik") == "ilk_anilis" and k["kur"].get("t") == ilk.get("t"):
            uyari.append(f"{i}: kur.t == ilk.t ama nicelik ilk_anilis — ilk anılıştan kur türetilmiş olabilir")

        # zincir
        S = k.get("sahip") or []
        atlas_ad = k.get("atlas_ad")
        if atlas_ad and atlas_ad not in atlas:
            ihlal.append(f"{i}: atlas_ad '{atlas_ad}' atlasta yok")
            son, atlas_sahip = None, None   # parti 20: atlas_sahip atanmadan okunuyordu (UnboundLocalError)
        else:
            son, atlas_sahip = atlas[atlas_ad] if atlas_ad else (ZINCIR_SONU_ATLASSIZ, None)
        if ilk.get("t") and son and TARIH.match(ilk["t"]) and gun_no(ilk["t"]) >= gun_no(son):
            if S:
                ihlal.append(f"{i}: ilk.t {ilk['t']} atlas başlangıcından ({son}) sonra ama zincir dolu")
            uyari.append(f"{i}: atlas noktası {son}'da başlıyor, şehir {ilk.get('t')} — atlas başlangıcı düzeltilmeli")
        elif ilk.get("t"):
            if not S:
                ihlal.append(f"{i}: zincir boş")
            else:
                if S[0].get("f") != ilk.get("t"):
                    ihlal.append(f"{i}: sahip[0].f {S[0].get('f')} ≠ ilk.t {ilk.get('t')}")
                if son and S[-1].get("t") != son:
                    ihlal.append(f"{i}: zincir {S[-1].get('t')}'da bitiyor, atlas başlangıcı {son}")
        for j, p in enumerate(S):
            yer = f"{i}.sahip[{j}]"
            if not (tarih_ok(yer + ".f", p.get("f")) and tarih_ok(yer + ".t", p.get("t"))):
                continue
            if gun_no(p["f"]) >= gun_no(p["t"]):
                ihlal.append(f"{yer}: f {p['f']} ≥ t {p['t']} (ters ya da sıfır uzunluk)")
            if j + 1 < len(S) and p["t"] != S[j + 1].get("f"):
                ihlal.append(f"{yer}: kopukluk {p['t']} → {S[j + 1].get('f')}")
            d = p.get("d")
            if d in ("__YOK__", "__BILINMIYOR__"):
                # __YOK__: yerleşim bu dönemde YOK · __BILINMIYOR__: VARLIĞI da bilinmiyor (Emre, 14 Ekim 2026)
                # ikisi de __BOSLUK__ ("şehir var, sahibi bilinmiyor") DEĞİL
                if not (p.get("ic_not") or "").strip():
                    ihlal.append(f"{yer}: {d} beyansız (ic_not yok)")
            elif d == "osmanli":
                # atlas Osmanlı'yı künyeyle değil `d:` alanıyla taşır — devletler.js'te kaydı YOK, kasıtlı.
                # Bu dosyada `osmanli` = atlasın `d:` dönemi (aktarımda `d:`ye dönüşür).
                if p.get("kunye_yok"):
                    uyari.append(f"{yer}: 'osmanli' için kunye_yok gereksiz (atlas d: alanı)")
            elif p.get("kunye_yok"):
                # devletler.js'te künyesi olmayan yapı: önerilen id + beyan; künye açılınca işaret kalkar
                if d in omur:
                    ihlal.append(f"{yer}: '{d}' künyesi VAR ama kunye_yok işaretli")
                elif not (p.get("ic_not") or "").strip():
                    ihlal.append(f"{yer}: kunye_yok '{d}' beyansız (ic_not yok)")
                else:
                    uyari.append(f"{yer}: künye bekliyor '{d}'")
            elif d != "__BOSLUK__":
                if d not in omur:
                    ihlal.append(f"{yer}: devlet '{d}' devletler.js'te yok")
                else:
                    df, dt, _ = omur[d]
                    if df and TARIH.match(df) and gun_no(p["f"]) < gun_no(df) - OLAY_PENCERE_GUN:
                        uyari.append(f"{yer}: '{d}' {p['f']}'de, künye {df}'de başlıyor (hayalet)")
                    if dt and TARIH.match(dt) and gun_no(p["t"]) > gun_no(dt) + OLAY_PENCERE_GUN:
                        uyari.append(f"{yer}: '{d}' {p['t']}'ye kadar, künye {dt}'de bitiyor (hayalet)")
            elif not (p.get("ic_not") or "").strip():
                ihlal.append(f"{yer}: __BOSLUK__ beyansız (ic_not yok)")
            if not (p.get("kaynak") or "").strip():
                ihlal.append(f"{yer}: kaynak boş")
            if not kesinlik_gecerli(p.get("kesinlik")):
                ihlal.append(f"{yer}: kesinlik '{p.get('kesinlik')}'")

        O = k.get("olay") or []
        for j, o in enumerate(O):
            tarih_ok(f"{i}.olay[{j}]", o.get("t"), o.get("gun") or "")
            for alan in ("k", "b", "kaynak"):
                if not (o.get(alan) or "").strip():
                    ihlal.append(f"{i}.olay[{j}]: '{alan}' boş")
        og = [gun_no(o.get("t")) for o in O if gun_no(o.get("t")) is not None]
        gecisler = [(p.get("t"), p.get("d"), S[j + 1].get("d")) for j, p in enumerate(S[:-1])]
        # dikiş: zincirin son sahibi atlasın ilk sahibinden farklıysa geçiş TAM atlas başlangıcındadır
        # atlas `s:` dönemleri künye id'si DEĞİL harita anahtarı da taşıyabilir (kibris-krallik ↔ lusignan)
        son_d = S[-1].get("d") if S else None
        ayni_sahip = son_d == atlas_sahip or (son_d in omur and omur[son_d][2] == atlas_sahip)
        if S and son and atlas_ad and S[-1].get("t") == son and not ayni_sahip:
            gecisler.append((son, S[-1].get("d"), f"{atlas_sahip} (atlas)"))
        for t, a, b in gecisler:
            if {"__YOK__", "__BILINMIYOR__"} & {a, b} and not b.endswith("(atlas)"):
                # terk/yeniden iskân ve "varlığı bilinmiyor" günü olmayan süreçtir: olay ZORLANMAZ (uydurma olur).
                # ⚠️ ATLAS DİKİŞİ MUAF DEĞİL: atlasın "1281'de X" iddiası kaynaksızsa borç görünür kalmalı
                # (14 Ekim: muafiyet ilk yazıldığında Şelif/Kalama/Sükeyke'nin dikiş borcunu sessizce siliyordu).
                continue
            g = gun_no(t)
            if g is not None and not any(abs(g - x) <= OLAY_PENCERE_GUN for x in og):
                if b.endswith("(atlas)") and (k.get("dikis_beyan") or "").strip():
                    # atlasın kendi başlangıç iddiası kaynaksız: yer tutucu olay UYDURULMAZ, borç beyan edilir
                    uyari.append(f"{i}: dikiş beyanlı borç {a} → {b} ({t}): {k['dikis_beyan'][:80]}")
                else:
                    ihlal.append(f"{i}: sahiplik {a} → {b} ({t}) için ±30 gün olay yok")
        for j, o in enumerate(O):
            if (o.get("kaynak") or "").strip().lower().startswith("bulunamad"):
                ihlal.append(f"{i}.olay[{j}]: kaynağı 'bulunamadı' olan olay — olay uydurulmaz; "
                             "tanık yoksa madde yazılmaz (dikişse `dikis_beyan`)")

    if not sessiz:
        for u in uyari:
            print("  UYARI", u)
        for x in ihlal:
            print("  İHLAL", x)
    print(f"{len(K)} şehir · {sum(len(k.get('sahip') or []) for k in K)} sahiplik dönemi · "
          f"{sum(len(k.get('olay') or []) for k in K)} olay · ihlal {len(ihlal)} · uyarı {len(uyari)}")
    return 1 if ihlal else 0


def oku_js(yol):
    metin = open(yol, encoding="utf-8").read()
    m = re.search(r"=\s*(\[.*\])\s*;?\s*$", metin, re.S)
    return json.loads(m.group(1))


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    if len(sys.argv) < 3:
        print(__doc__)
        return 2
    if sys.argv[1] == "denetle":
        return denetle_kayitlar(oku_js(sys.argv[2]))
    if sys.argv[1] == "devletler":
        # araştırmacılar için künye dökümü (d: alanına yazılabilecek id'ler)
        omur = devlet_omurleri()
        with open(sys.argv[2], "w", encoding="utf-8") as f:
            f.write("id\tf\tt\tharita\n")
            for i, (df, dt, h) in sorted(omur.items(), key=lambda x: gun_no(x[1][0]) or 0):
                f.write(f"{i}\t{df}\t{dt}\t{h}\n")
        print(len(omur), "künye →", sys.argv[2], "(+ ayrılmış: osmanli · __BOSLUK__ · __YOK__ · __BILINMIYOR__)")
        return 0
    if sys.argv[1] == "yaz" and len(sys.argv) == 5:
        K = json.load(open(sys.argv[2], encoding="utf-8"))
        K.sort(key=lambda k: k["id"])
        kod = denetle_kayitlar(K)
        if kod != 0:
            print("YAZILMADI — önce ihlaller giderilmeli")
            return kod
        bolge = sys.argv[4].upper()
        with open(sys.argv[3], "w", encoding="utf-8", newline="\n") as f:
            f.write(f"// ŞEHİR TARİHÇESİ — {bolge} · üretici: arac/sehir_tarihce.py · şema: VERI-YAPISI.md\n")
            f.write("// Motor/denetle/site OKUMAZ — araştırma birikimi. Elle düzenleme: JSON'u düzelt, yeniden üret.\n")
            f.write(f"window.SEHIR_TARIHCE_{bolge} = ")
            json.dump(K, f, ensure_ascii=False, indent=1)
            f.write(";\n")
        print("yazıldı →", sys.argv[3])
        return 0
    print(__doc__)
    return 2


if __name__ == "__main__":
    sys.exit(main())
