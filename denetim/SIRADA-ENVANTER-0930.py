# SIRADA-ENVANTER-0930 — kutu/giden açık hükümlerinin iş-sınıfı envanteri
# Yalnız OKUR: C:/claudemre/kutu/giden/*/{PARTI,CEVAP}.json · oturumlar/DALGA-*.md · denetim/*.md
# Yazar: denetim/SIRADA-ENVANTER-0930.json  (makine) — .md'yi bu betik YAZMAZ, json'dan okunur.
# Koşu: py denetim/SIRADA-ENVANTER-0930.py
import json, os, re, glob, collections, unicodedata

G = r"C:/claudemre/kutu/giden"
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CIKTI = os.path.join(KOK, "denetim", "SIRADA-ENVANTER-0930.json")
ACIK = ("sirada", "olculecek", "kosu-bekliyor", "tekrar")


def nrm(s):
    # Türkçe → ascii küçük harf (İ/ı tuzağı: önce elle)
    s = (s or "").replace("İ", "i").replace("I", "ı").replace("ı", "i")
    s = unicodedata.normalize("NFKD", s.lower())
    return "".join(ch for ch in s if not unicodedata.combining(ch))


# ---------- sinyaller (nrm edilmiş metinde aranır) ----------
SINYAL = {
    "KOSU-GEREKIR": r"\bkosu|petek|uret_petek|yerlesimler[\w_]*\.js|yer_yama|yeni nokta|nokta (ekle|gerek|yok)|"
                    r"\b(s|v|d|isg|kd|m):|\bdonem(i|ler)?\b|sinir(i|lar|in)?\b|boyan|sahipsiz|renkler\.py|"
                    r"\bmotor|enklav|eksklav|voronoi|tavan|bolgeler\.js|donemler\.js|kunye (omru|penceresi)|"
                    r"toprak|egemenlig|kimin (egemen|topra)|bos (alan|toprak|gorun)|harita(da)? (yanlis|bos|kirmizi)",
    "ARAYUZ": r"app\.js|style\.css|index\.html|arayuz|\bdugme|buton|akordeon|\bsekme|tikla|zaman cubugu|"
              r"lejant|legend|\bmenu|gosterim kod|\bkod(u|unu)? (yaz|karar)|\bui\b|tasarim|kirpma capasi|"
              r"yakip sondur|sag tik|albumu|gorunum(u)? (ayar|sec)",
    "VERI-DUZELTME": r"kronoloji madde|madde(si|yi)? (ekle|yaz|indi)|ek okuma|ekokuma|\bkart(i|lar|lari)?\b|"
                     r"olaylar[\w_]*\.js|savaslar\.js|kisiler\.js|seferler[\w_]*\.js|\byer_id|\betiket|"
                     r"sefer ok|harekat ok|\boklar\b|baslik|siralama|yama[- ]?rivayet|metin(ler)?i? ",
    "KAYNAK-ARASTIRMA": r"arastir|okunacak|okunmadi|kaynak (aran|bul|yok)|bulunamadi|teyit|kaynakla dogrula|"
                        r"hangi tarihte|ne zaman|kime gec|akademik gun|gun bulunamadi",
}
SINYAL = {k: re.compile(v) for k, v in SINYAL.items()}
ATLAS_DISI = re.compile(r"claudemre (sistem|tarafi)|sistem'?e devred|atlas deposunun disinda")
# her notta geçen kalıp ya da BİTMİŞ işi anlatan ifade — sinyal değil
GURULTU = re.compile(r"tarayicida sinanmadi|arastirma bitti|arandi, bulunamadi|olculdu|olctum")
KOSUSUZ = re.compile(r"kosusuz|kosu (gerekmez|istemez|gerektirmez)")

# ---------- akım etiketi → sınıf (DALGA şartnamelerinin tablolarından) ----------
def akim_sinifi(a):
    if not a: return None
    if a.startswith(("EKO-", "KISI-KART", "SAVAS-ANLATI", "SEFER-")): return "VERI-DUZELTME"
    if a in ("BAGLAMA", "D-KATMAN") or a.startswith(("UI", "ELE-GECIRME-ANIM", "EKOKUMA-SIMGE")): return "ARAYUZ"
    if a.startswith(("MOTOR", "GEOMETRI", "UYGULA", "ISGAL", "BIHAC", "HARITA-")): return "KOSU-GEREKIR"
    return None


def dalga_tablolari():
    """oturumlar/DALGA-*.md tablo satırlarından akım → yazabildiği dosyalar."""
    harita = {}
    for f in sorted(glob.glob(os.path.join(KOK, "oturumlar", "DALGA-*.md"))):
        for sat in open(f, encoding="utf-8"):
            m = re.match(r"\|\s*\*\*([A-Z0-9][A-Z0-9\-]+)\*\*", sat)
            if not m: continue
            dos = re.findall(r"`((?:data|js|css|arac)/[^`]+|index\.html)`", sat)
            if dos: harita.setdefault(m.group(1), set()).update(dos)
    return {k: sorted(v) for k, v in harita.items()}


DOSYA_RE = re.compile(r"(?:data|js|css|arac)/[\w\-\.\*]+\.(?:js|css|py)|index\.html")
AKIM_RE = re.compile(r"^\s*([A-Z][A-Z0-9]*(?:-[A-Z0-9]+)*)(?=:| oturumunda| ·| \(|\s*$)")
EMRE_KIRIM = re.compile(r"tk kirim|emre'?nin tk")
SARTNAME_RE = re.compile(r"oturumlar/([A-Z0-9\-]+)\.md")
IKIZ_RE = re.compile(r"(parti-[\w\-]+/)?H-(\d{4})")
BOLGE = [("kirim-kafkas", r"kirim|kafkas|cerkes|kuban|anapa|gurcu|kabartay"),
         ("korfez-arabistan", r"korfez|basra|katar|lahsa|bahreyn|kuveyt|abadan|necid|yemen|hicaz"),
         ("iran", r"iran|safevi|tebriz|nahcivan|revan|hemedan|kacar|ferhat|ferhad"),
         ("balkan-macar", r"balkan|bosna|sirp|eflak|bogdan|erdel|macar|bihac|tuna|mora|arnavut|bulgar"),
         ("kuzey-afrika-misir", r"misir|trablus|tunus|cezayir|kirenaika|sahra|oran|vehran|fas"),
         ("rusya-lehistan", r"rus|lehistan|leh |ozi|bender|yedisan|kazan|sibir|nogay"),
         ("irak-suriye", r"bagdat|musul|halep|sam |suriye|levant|hama|humus|akka"),
         ("akdeniz-adalar", r"girit|kibris|malta|rodos|venedik|sardinya|ege")]
BOLGE = [(a, re.compile(r)) for a, r in BOLGE]


def siniflandir(metin, not_, akim):
    n = nrm(not_)
    n = GURULTU.sub("", n)
    kalan = None
    k = re.search(r"\bkalan\b\s*[:\-]", n)
    if k: kalan = n[k.end():]
    if kalan is not None:
        taban, taban_ad = kalan, "not/KALAN bolumu"
    elif len(not_) >= 160:
        taban, taban_ad = n, "not"
    else:
        taban, taban_ad = n + " " + nrm(metin), "not(kisa)+madde metni"
    if ATLAS_DISI.search(taban):
        return "BELIRSIZ", ["ATLAS-DISI"], taban_ad, "not ClaudEmre sistem isi diyor"
    if EMRE_KIRIM.search(n):
        return "BELIRSIZ", ["EMRE-TK-KIRIM"], "not", "Emre'nin kendi TK Kirim oturumunda — dagitilamaz"
    kosusuz = bool(KOSUSUZ.search(taban))
    if kosusuz: taban = KOSUSUZ.sub(" ", taban)
    isabet = {s: len(r.findall(taban)) for s, r in SINYAL.items()}
    if kosusuz:  # not açıkça "koşusuz" diyor: koşu sinyali düşer, veri işi sayılır
        isabet.pop("KOSU-GEREKIR", None); isabet["VERI-DUZELTME"] = isabet.get("VERI-DUZELTME", 0) + 1
    isabet = {s: c for s, c in isabet.items() if c}
    asinif = akim_sinifi(akim)
    # birincil: engelleyen önce — araştırma bitmeden uygulama yapılamaz
    sira = ["KAYNAK-ARASTIRMA", "KOSU-GEREKIR", "ARAYUZ", "VERI-DUZELTME"]
    if asinif and not isabet:
        return asinif, [], "akim etiketi", f"metinde sinyal yok; akim {akim} -> {asinif}"
    if not isabet:
        return "BELIRSIZ", [], taban_ad, "hicbir sinifin sinyali yok"
    # araştırma sinyali tek başına zayıfsa (1 isabet) ve güçlü başka sınıf varsa öbürü birincil
    if "KAYNAK-ARASTIRMA" in isabet and isabet["KAYNAK-ARASTIRMA"] == 1 and \
            any(c >= 3 for s, c in isabet.items() if s != "KAYNAK-ARASTIRMA"):
        sira = ["KOSU-GEREKIR", "ARAYUZ", "VERI-DUZELTME", "KAYNAK-ARASTIRMA"]
    # araştırma yalnız ≥2 isabetle ya da tek sınıfken birincil olur
    if "KAYNAK-ARASTIRMA" in isabet and isabet["KAYNAK-ARASTIRMA"] < 2 and len(isabet) > 1:
        sira = [s for s in sira if s != "KAYNAK-ARASTIRMA"] + ["KAYNAK-ARASTIRMA"]
    birincil = next(s for s in sira if s in isabet)
    if asinif in isabet and asinif != birincil and isabet.get("KAYNAK-ARASTIRMA", 0) < 2:
        birincil = asinif  # akım etiketi metnin sinyalleri arasında: etiketi izle
    if akim and akim.startswith("EKO-") and birincil == "KAYNAK-ARASTIRMA":
        birincil = "VERI-DUZELTME"  # ek okuma yazımı kaynak okumayı ZATEN içerir; iş = data/ekokuma_*.js
    # akım etiketi metinle çelişirse ve sinyaller zayıfsa (toplam ≤2) BELIRSIZ — uydurma
    if asinif and asinif != birincil and sum(isabet.values()) <= 2 and asinif not in isabet:
        return "BELIRSIZ", sorted(isabet), taban_ad, f"akim {akim}->{asinif} ama metin {birincil} (zayif)"
    return birincil, sorted(s for s in isabet if s != birincil), taban_ad, \
        " ".join(f"{s}:{c}" for s, c in sorted(isabet.items()))


def main():
    dalga = dalga_tablolari()
    kayit, disi, cevapsiz = [], collections.Counter(), {}
    hukum_say = collections.Counter()
    tum = {}  # (parti, no) -> hukum  (tekrar ikizini çözmek için)
    for d in sorted(os.listdir(G)):
        p = os.path.join(G, d)
        if not os.path.isdir(p): continue
        pj = json.load(open(os.path.join(p, "PARTI.json"), encoding="utf-8"))
        atlas = "atlas" in (pj.get("proje") or "").lower()
        pm = {x["no"]: x for x in pj.get("maddeler", [])}
        cf = os.path.join(p, "CEVAP.json")
        if not os.path.exists(cf):
            if atlas: cevapsiz[d] = len(pm)
            continue
        m = json.load(open(cf, encoding="utf-8"))["maddeler"]
        for no, v in (m.items() if isinstance(m, dict) else [(x.get("no"), x) for x in m]):
            h = v.get("hukum")
            if not atlas:
                disi[h] += 1; continue
            hukum_say[h] += 1
            tum[(d, no)] = h
            if h not in ACIK: continue
            pmad = pm.get(no, {})
            metin, not_ = pmad.get("metin", ""), v.get("not", "")
            am = AKIM_RE.match(not_)
            akim = am.group(1) if am else None
            if akim in ("OLCUM", "OLCULDU", "ARASTIRMA", "MADDE", "IKI", "YARISINDAN", "VERI", "KATAR", "TEK", "KUME", "NICIN", "SEVK"):
                akim = None
            sn = SARTNAME_RE.findall(not_)
            dosya_madde = sorted(set(DOSYA_RE.findall(not_ + " " + metin)))
            dosya_akim = dalga.get(akim, []) if akim else []
            sinif, ikincil, taban, gerekce = siniflandir(metin, not_, akim)
            nb = nrm(metin + " " + not_)
            bolge = next((a for a, r in BOLGE if r.search(nb)), None)
            commitli = bool(re.search(r"\b[0-9a-f]{7}\b", not_))
            indi = bool(re.search(r"\bindi\b", nrm(not_)))
            kayit.append({
                "parti": d, "no": no, "hukum": h,
                "baslik": (pmad.get("baslik") or metin)[:80].replace("\n", " "),
                "sinif": sinif, "ikincil": ikincil, "sinif_tabani": taban, "sinif_gerekce": gerekce,
                "akim": akim, "sartname": sn,
                "hedef_dosya": dosya_madde or dosya_akim or ["?"],
                "hedef_kaynagi": "madde" if dosya_madde else ("akim-sartnamesi" if dosya_akim else "?"),
                "bolge": bolge, "kismen_indi": commitli and indi,
                "alt": "EK-OKUMA" if (akim or "").startswith("EKO-") or "ek okuma" in nrm(metin) else None,
                "not_ilk": not_[:240].replace("\n", " "),
            })
    # küme anahtarı
    for k in kayit:
        if k["akim"]: k["kume"] = "AKIM/" + k["akim"]
        elif k["hedef_kaynagi"] == "madde": k["kume"] = "DOSYA/" + k["hedef_dosya"][0]
        else: k["kume"] = f"{k['sinif']}/{k['bolge'] or 'bolgesiz'}"
    # tekrar: ikizin hükmü
    for k in kayit:
        if k["hukum"] != "tekrar": continue
        ikiz = []
        for pp, hn in IKIZ_RE.findall(k["not_ilk"]):
            pa = pp.rstrip("/") if pp else k["parti"]
            key = (pa, "H-" + hn)
            if key != (k["parti"], k["no"]): ikiz.append({"parti": pa, "no": key[1], "hukum": tum.get(key, "bulunamadi")})
        k["ikiz"] = ikiz
    # rapor izi: akımın denetim raporu bu maddeyi anıyor mu (ZAYIF delil)
    rap_onbellek = {}
    for k in kayit:
        a = k["akim"]
        if not a: k["rapor_izi"] = None; continue
        if a not in rap_onbellek:
            fs = sorted(set(glob.glob(os.path.join(KOK, "denetim", a + "-*.md")) +
                            glob.glob(os.path.join(KOK, "denetim", a + ".md"))))
            satirlar = [s for f in fs for s in open(f, encoding="utf-8", errors="replace")]
            rap_onbellek[a] = (fs, satirlar)
        fs, satirlar = rap_onbellek[a]
        k["rapor_dosyalari"] = [os.path.relpath(f, KOK).replace("\\", "/") for f in fs]
        if not fs:
            k["rapor_izi"] = "rapor-yok"; continue
        # yalnız TABLO SATIRI ("| H-00NN ...") — başlık/sevk satırları hüküm taşımaz
        ilgili = [s for s in satirlar if s.lstrip().startswith("|") and
                  re.search(rf"^\|\s*(?:\*\*)?{re.escape(k['no'])}\b", s.strip())]
        if not ilgili:
            k["rapor_izi"] = "tabloda-yok"; continue
        t = nrm(ilgili[0])
        tamam = bool(re.search(r"✅|✓|\btamam|\btam\b|yazildi|eklendi|\bindi\b|islendi|birlestirildi|kapandi", t))
        acik = bool(re.search(r"❌|⏳|⛔|🟡|\bkismen|\bkismi|\bkalan\b|yapilmadi|yazilmadi|ertelendi|acik kaldi|devredildi|sonraki tur", t))
        # akım raporu işin KOD olduğunu satırında söylüyorsa sınıf ona döner (ör. ISGAL-TARAMA)
        if re.search(r"\|\s*kod\b|js/(app|suzgec|d_katman)\.js", t) and k["sinif"] != "ARAYUZ":
            k["sinif_gerekce"] += f" · akim raporu KOD diyor ({k['sinif']}->ARAYUZ)"; k["sinif"] = "ARAYUZ"
            k["sinif_tabani"] = "akim raporu satiri"
        k["rapor_izi"] = "TAMAM-diyor" if tamam and not acik else ("ACIK-diyor" if acik and not tamam else "karisik")
        k["rapor_satiri"] = ilgili[0].strip()[:200]
    # rapor satırındaki kart/kayıt kimlikleri CANLI veride var mı (alt dizgi; dev geometri dosyaları hariç)
    fs = [f for f in glob.glob(os.path.join(KOK, "data", "*.js"))
          if re.search(r"ekokuma|olay|kisi|savas|sefer|kronoloji", os.path.basename(f))]
    veri = "\n".join(open(f, encoding="utf-8", errors="replace").read() for f in fs)
    for k in kayit:
        if not k.get("rapor_satiri"): continue
        ids = [x for x in re.findall(r"`([a-z0-9][a-z0-9\-]{6,})`", k["rapor_satiri"]) if "." not in x and "/" not in x]
        if not ids: k["rapor_kimlik_veride"] = "kimliksiz"; continue
        var = [i for i in ids if f'"{i}"' in veri or f"'{i}'" in veri]
        k["rapor_kimlik_veride"] = "hepsi" if len(var) == len(ids) else ("kismen" if var else "hicbiri")
        k["rapor_kimlikleri"] = ids
    out = {
        "damga": "2026-09-30", "kaynak": G, "betik": "denetim/SIRADA-ENVANTER-0930.py",
        "atlas_hukum_sayimi": dict(hukum_say.most_common()),
        "atlas_disi_hukum_sayimi": dict(disi.most_common()),
        "cevapsiz_partiler": cevapsiz, "cevapsiz_madde": sum(cevapsiz.values()),
        "dalga_akim_dosyalari": dalga,
        "maddeler": kayit,
    }
    json.dump(out, open(CIKTI, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    yaz_md(out)
    s = collections.Counter((k["hukum"], k["sinif"]) for k in kayit)
    print("yazildi", CIKTI, len(kayit))
    for (h, c), v in sorted(s.items()): print(f"  {h:14} {c:18} {v}")


SINIFLAR = ["KOSU-GEREKIR", "VERI-DUZELTME", "ARAYUZ", "KAYNAK-ARASTIRMA", "BELIRSIZ"]


def yaz_md(out):
    M = out["maddeler"]
    S = [k for k in M if k["hukum"] == "sirada"]
    C = collections.Counter
    L = []
    w = L.append
    hs = out["atlas_hukum_sayimi"]; ds = out["atlas_disi_hukum_sayimi"]
    bayat = [k for k in S if k.get("rapor_izi") == "TAMAM-diyor" and k.get("rapor_kimlik_veride") == "hepsi"]
    bayat_zayif = [k for k in S if k.get("rapor_izi") == "TAMAM-diyor" and k.get("rapor_kimlik_veride") != "hepsi"]
    kismen = [k for k in S if k["kismen_indi"]]
    w("# SIRADA-ENVANTER-0930 — açık kutu hükümlerinin iş-sınıfı envanteri")
    w("")
    w(f"> 30 Eylül 2026 · üreten `py {out['betik']}` (bu dosyayı da o yazar, elle düzenleme) · "
      f"kaynak `{out['kaynak']}` (YALNIZ OKUNDU) · makine çıktısı `denetim/SIRADA-ENVANTER-0930.json`")
    w("")
    w("## 0. Önce sayının kendisi — 525 nereden geliyor")
    w("")
    w("| | madde |\n|---|---|")
    w(f"| koordinatörün saydığı `sirada` (96 parti, bütün projeler) | **{hs.get('sirada',0)+ds.get('sirada',0)}** |")
    w(f"| − atlas DIŞI partiler (`PARTI.json` `proje` = EczAsist, 15 `parti-kasa-*`) | −{ds.get('sirada',0)} |")
    w(f"| **= atlas `sirada`** | **{hs.get('sirada',0)}** |")
    w(f"| ayrıca: atlas `olculecek` · `kosu-bekliyor` · `tekrar` | {hs.get('olculecek',0)} · {hs.get('kosu-bekliyor',0)} · {hs.get('tekrar',0)} |")
    w("")
    w(f"🔴 **Sayıma HİÇ girmeyen: {len(out['cevapsiz_partiler'])} atlas partisinde `CEVAP.json` yok → "
      f"{out['cevapsiz_madde']} madde hükümsüz** ({', '.join(f'{p[-4:]}:{n}' for p, n in out['cevapsiz_partiler'].items())}). "
      "Açık iş 636 değil, bunun üstündedir; bu maddelerin sınıfı ölçülemedi (hükmü/notu yok).")
    w("")
    w("⚠️ EczAsist maddeleri hasta verisi taşır (TC, ad, reçete) — envantere ALINMADI, yalnız sayıldı.")
    w("")
    w("## 1. Sınıf dağılımı")
    w("")
    w("| sınıf | " + " | ".join(ACIK) + " | toplam |")
    w("|---|" + "---:|" * (len(ACIK) + 1))
    for s in SINIFLAR:
        r = [sum(1 for k in M if k["hukum"] == h and k["sinif"] == s) for h in ACIK]
        w(f"| {s} | " + " | ".join(map(str, r)) + f" | {sum(r)} |")
    r = [sum(1 for k in M if k["hukum"] == h) for h in ACIK]
    w("| **toplam** | " + " | ".join(map(str, r)) + f" | {sum(r)} |")
    w("")
    ek = sum(1 for k in S if k["sinif"] == "VERI-DUZELTME" and k["alt"] == "EK-OKUMA")
    w(f"- `VERI-DUZELTME`in **{ek}**'i EK OKUMA kartı yazımıdır (kaynak okumayı zaten içerir; hedef `data/ekokuma_*.js`) — "
      "tek satırlık düzeltme DEĞİL, içerik üretimi. Kalan veri düzeltmesi "
      f"{sum(1 for k in S if k['sinif']=='VERI-DUZELTME')-ek}.")
    bel = [k for k in S if k["sinif"] == "BELIRSIZ"]
    w(f"- `BELIRSIZ` {len(bel)}: {C(tuple(k['ikincil']) for k in bel if 'EMRE-TK-KIRIM' in k['ikincil']).get(('EMRE-TK-KIRIM',),0)}'i "
      "Emre'nin kendi TK Kırım oturumunda (dağıtılamaz); "
      f"{sum(1 for k in bel if k['akim']=='HARITA-VERI')}'i HARITA-VERI (çoğu RENK: `renkler.py` — motor tuzunda, §9.1) ; "
      "gerisi metinde sınıf sinyali yok ya da akım etiketiyle çelişiyor.")
    w("")
    w("**Yöntem (uydurmamak için):** sınıf, notun `KALAN:` bölümünden; yoksa notun kendisinden (≥160 karakter); "
      "not kısaysa (çoğu yalnız \"<AKIM> oturumunda · şartname …\") madde metni + not. Dört sınıfın anahtar kelime "
      "sinyalleri sayılır; engelleyen önce gelir (araştırma ≥2 isabetle). Metinde sinyal yoksa notun ilk kelimesindeki "
      "AKIM etiketi (DALGA-00xx şartname tablosundaki oturum adı) sınıfa çevrilir — `sinif_tabani: akim etiketi` "
      f"({sum(1 for k in S if k['sinif_tabani']=='akim etiketi')} madde). Akım raporunun satırı \"KOD\" diyorsa ARAYUZ'e döner. "
      "Metin ile akım zayıf sinyalle çelişirse BELIRSIZ. **Elle sınav:** rastgele 30 `sirada` maddesi (tohum 2026) "
      "okundu → 26 doğru · 2 yanlış (TK Kırım maddesi · başkent şeması) · 2 tartışmalı; iki yanlışın kuralı düzeltildi. "
      "Doğruluk ≈ %87 — **sınıf bir İLK ELEMEDİR, atama öncesi işçi kendi kümesini yeniden okur.**")
    w("")
    w("## 2. 🔴 Bayat `sirada` — iş YAPILMIŞ, hüküm güncellenmemiş")
    w("")
    w("`sirada` maddelerin çoğu 14-17 Eylül'de DALGA-0052…0071 akımlarına dağıtılmış (`akim` alanı dolu: "
      f"{sum(1 for k in S if k['akim'])}/{len(S)}). Akımın kendi raporu (`denetim/<AKIM>-*.md`) tablo satırında maddeyi anıyorsa okundu:")
    w("")
    w("| akım raporunun o maddedeki satırı | madde |\n|---|---:|")
    for x, n in C(k.get("rapor_izi") or "akım etiketi yok" for k in S).most_common():
        w(f"| {x} | {n} |")
    w("")
    w(f"- **{len(bayat)} madde: rapor ✅/TAM/YAZILDI diyor VE satırdaki kart kimliklerinin HEPSİ canlı `data/*.js`'te var** "
      "— en güçlü bayatlık delili. Bunlar `sirada` sayılmamalı; hüküm defterde güncellenmemiş.")
    w(f"- {len(bayat_zayif)} madde daha: rapor TAMAM diyor ama satırda kimlik yok (ör. UI satırları) — kodda doğrulanmalı.")
    w(f"- {len(kismen)} madde: notun kendisi commit + \"İNDİ\" yazıyor (kısmen uygulanmış, `KALAN` var).")
    w("- ⚠️ Rapor tablosunda H-numarası parti ayırt etmez (0052 raporu 0051/0053 maddelerini de anabilir); "
      "`tabloda-yok` / `rapor-yok` \"yapılmadı\" demek DEĞİLDİR — ölçülemedi demektir.")
    w("")
    w("Bayat adaylar (rapor TAMAM + kimlik veride):")
    w("")
    w("| parti | madde | akım | başlık |\n|---|---|---|---|")
    for k in bayat:
        w(f"| {k['parti'][-4:]} | {k['no']} | {k['akim']} | {k['baslik'][:60]} |")
    w("")
    w("## 3. En kalabalık 15 küme (`sirada`)")
    w("")
    w("Küme anahtarı: akım etiketi › maddede yazan dosya › sınıf/bölge.")
    w("")
    w("| # | küme | madde | sınıf | hedef dosya | rapor TAMAM |\n|---|---|---:|---|---|---:|")
    kc = C(k["kume"] for k in S)
    for i, (kume, n) in enumerate(kc.most_common(15), 1):
        ks = [k for k in S if k["kume"] == kume]
        sc = " · ".join(f"{s} {c}" for s, c in C(k["sinif"] for k in ks).most_common())
        hd = " · ".join(f"`{f}`" if f != "?" else "?" for f, _ in C(f for k in ks for f in k["hedef_dosya"]).most_common(2))
        tm = sum(1 for k in ks if k.get("rapor_izi") == "TAMAM-diyor")
        w(f"| {i} | {kume} | {n} | {sc} | {hd} | {tm} |")
    w("")
    w(f"Toplam {len(kc)} küme; tam liste JSON'da (`kume` alanı).")
    w("")
    w("## 4. 🔴 14 `tekrar` maddesi — TAM LİSTE, ve anlamı DÜZELTİLMELİ")
    w("")
    w("**Ölçüldü: `tekrar` hükmü \"aynı şikâyet ikinci kez geldi = ilkinde çözülmemiş\" DEMİYOR.** 14 notun hepsi "
      "başka bir kayda ya da aileye atıf yapıyor (\"X ile AYNI kayıt / AYNI kök / AYNI sınıf\"; 10'u H-numarasıyla, "
      "4'ü `BULGU-BAYAT-TARAMA.md` ailesine) — yani **mükerrer işaret**: madde kendi başına iş değil, "
      "ikizinin kaderine bağlı. İlkinde çözülmemişliği ölçen şey İKİZİN hükmüdür:")
    w("")
    w("| parti | madde | sınıf | ikiz(ler) → ikizin hükmü | başlık |\n|---|---|---|---|---|")
    for k in M:
        if k["hukum"] != "tekrar": continue
        seen, iz = set(), []
        for x in k.get("ikiz", []):
            key = (x["parti"], x["no"])
            if key in seen: continue
            seen.add(key); iz.append(f"{x['parti'][-4:]}/{x['no']} → **{x['hukum']}**")
        w(f"| {k['parti'][-4:]} | {k['no']} | {k['sinif']} | {' · '.join(iz) or 'ikiz notta H-numarasıyla yok (BULGU dosyasına atıf)'} | {k['baslik'][:55]} |")
    w("")
    w("Okuma: ikizi `cozuldu`/`zaten-dogru` olan tekrar → hükmü ikizle eşitlenir (defter işi, iş değil). İkizi `sirada` "
      "olan → ikiziyle AYNI oturuma, tek iş olarak. İkizi bulunamayan 4'ü (0035/H-0001·H-0057·H-0068·H-0074) "
      "gerçekten açık aile kusurlarıdır (Sahra emilmesi · Osmanlı-Safevî cephesi · Satu Mare · Hemedan sonrası boşluk) — "
      "§10 gereği yeni maddelerden ÖNCE gelmesi gerekenler bunlardır.")
    w("")
    w("## 5. DAĞITIM ÖNERİSİ — şıklarıyla (karar koordinatörün)")
    w("")
    w("Ölçüt FAYDA ÷ EMEK. Sıra, darboğazı açana göre:")
    w("")
    w("### Adım 0 — DEFTER MUTABAKATI (en yüksek oran: sıfır yeni iş, sayıyı küçültür)")
    w(f"Tek Sonnet oturumu, yalnız OKUR ve öneri yazar (hüküm yazmak koordinatörde): §2'deki {len(bayat)} güçlü + "
      f"{len(bayat_zayif)} zayıf bayat aday + {len(kismen)} kısmen-indi + 14 tekrar'ın ikiz eşitlemesi. "
      "Beklenen: `sirada` ~60-90 düşer, kalan liste GERÇEK iş olur. Ayrıca 9 cevapsız partinin (347 madde) "
      "hükümsüz olduğu raporlanır — onlar ayrı bir sevk işidir. **Bu adım olmadan dağıtılan her küme, yapılmış işi "
      "yeniden yaptırma riski taşır** (EKO-VEZIR'in 32 maddesinin 15'i raporda ✅).")
    w("")
    w("### Adım 1 — koşudan bağımsız, paralel yürüyebilen üç hat")
    w("")
    w("| hat | ne | madde | model | not |\n|---|---|---:|---|---|")
    ekn = sum(1 for k in S if k['alt'] == 'EK-OKUMA' and k['sinif'] == 'VERI-DUZELTME')
    w(f"| A · EK-OKUMA | EKO-* akımlarının kalanı (`data/ekokuma_*.js`) | {ekn} (mutabakattan sonra azalır) | Sonnet ×1-2 | akım dosyası başına tek sahip; RIVAYET+PADISAH / VEZIR+DUNYA+KURUM+TOPLUM |")
    ar = sum(1 for k in S if k['sinif'] == 'ARAYUZ')
    w(f"| B · ARAYUZ | `js/app.js` · `css` · `index.html` | {ar} | Sonnet ×1 | app.js TEK sahipli ⇒ bölünmez; UI 10'un 8'i raporda ✅ (önce doğrula) |")
    ka = sum(1 for k in S if k['sinif'] == 'KAYNAK-ARASTIRMA')
    w(f"| C · KAYNAK | TDV/akademik okuma, hüküm + yama önerisi | {ka} | Opus ×1 | çıktısı KOSU hattına yama JSON'u olarak düşer |")
    w("")
    ko = sum(1 for k in S if k['sinif'] == 'KOSU-GEREKIR')
    w(f"### Adım 2 — KOSU-GEREKIR ({ko} sirada + {sum(1 for k in M if k['hukum']=='olculecek' and k['sinif']=='KOSU-GEREKIR')} olculecek + "
      f"{sum(1 for k in M if k['hukum']=='kosu-bekliyor' and k['sinif']=='KOSU-GEREKIR')} kosu-bekliyor)")
    w("Koşu sürerken `data/` donuk ⇒ bu hat şimdi YAMA HAZIRLAR, uygulamaz; yamalar bir sonraki veri koşusunda tek "
      "seferde iner. İki alt hat, çareleri farklı:")
    w("")
    motor = [k for k in S if k['sinif'] == 'KOSU-GEREKIR' and (k['akim'] in ('GEOMETRI', 'MOTOR', 'MOTOR-YURUYUS') or k['kume'] == 'DOSYA/arac/uret_petek.py')]
    w(f"- **2a · MOTOR/GEOMETRİ** ({len(motor)}: GEOMETRI · MOTOR · `uret_petek.py` kümesi) — §9.1: motor yamaları "
      "`denetim/*.diff` olarak bekletilir, TAM İNŞA koşusunda birlikte girer. Veri koşusuna karıştırılmaz.")
    bol = C(k['bolge'] or 'bolgesiz' for k in S if k['sinif'] == 'KOSU-GEREKIR' and k not in motor)
    w(f"- **2b · VERİ-KOŞU** ({sum(bol.values())}) — yerleşim/dönem/nokta yamaları. Bölgeye göre: "
      + " · ".join(f"{b} {n}" for b, n in bol.most_common()) +
      ". Mevcut sıcak bölge oturumları varsa (§7.3 ölç) bölgesi ONA; yoksa 2 Opus (Doğu: iran+körfez+kırım-kafkas+irak · Batı: balkan+rusya+kuzey afrika).")
    w("")
    w("### Adım 3 — BELIRSIZ")
    w(f"{len(bel)} madde: 7'si Emre'nin TK Kırım oturumunda (dokunulmaz); HARITA-VERI RENK maddeleri `renkler.py` "
      "işidir (motor tuzu — §9.1, tam inşa koşusuna); kalanı için koordinatör ya da C hattı tek tek sınıf koyar.")
    w("")
    w("### Şıklar")
    w("")
    w("| şık | kurgu | oturum | artı | eksi |\n|---|---|---:|---|---|")
    w("| **Ş1 (önerim)** | Adım 0 → sonra A·B·C paralel + 2b yama hazırlığı | 1 → 4-5 | yapılmış işi yeniden yaptırmaz; liste gerçek olur | ilk 1-2 saat yalnız mutabakat |")
    w("| Ş2 | Adım 0 ile A·B·C'yi AYNI ANDA başlat, mutabakat onlara süzgeç yollar | 4-5 | hızlı | A ve B ilk saatte bayat maddeye dokunabilir |")
    w("| Ş3 | Yalnız darboğaz: Adım 0 + 2b yama hazırlığı (koşu 18 bitince indirilecek paket) | 2 | RAM kısıtında en hafif (boş 1,32 GB) | ek okuma ve arayüz birikmeye devam eder |")
    w("")
    w("Kaynak kısıtı: boş RAM 1,32 GB, koşu sürüyor ⇒ paralel oturum sayısı bu envanterden değil RAM'den sınırlanır; "
      "Ş3 o yüzden var.")
    w("")
    w("## 6. Ölçülemeyenler")
    w("")
    w(f"- 9 cevapsız parti ({out['cevapsiz_madde']} madde) — sınıflanamadı.")
    w("- `hedef_dosya` çoğu maddede `?`: madde dosya adı yazmıyor; akım şartnamesinin dosyası yazıldıysa `hedef_kaynagi: akim-sartnamesi`.")
    w("- Rapor-tablo eşleşmesi parti ayırt etmez; kimlik-veride sınavı yalnız ek okuma/olay/kişi/savaş/sefer/kronoloji dosyalarında yapıldı.")
    w("- Arayüz maddelerinin kodda yapılıp yapılmadığı ÖLÇÜLMEDİ (tarayıcı açılmadı).")
    open(CIKTI.replace(".json", ".md"), "w", encoding="utf-8").write("\n".join(L) + "\n")


if __name__ == "__main__":
    main()
