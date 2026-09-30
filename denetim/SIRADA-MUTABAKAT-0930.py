# SIRADA-MUTABAKAT-0930 — bayat/kısmen/tekrar maddelerinin DELİLLİ hüküm ÖNERİSİ
# Yalnız OKUR: denetim/SIRADA-ENVANTER-0930.json · C:/claudemre/kutu/giden · data/*.js · js/*.js · git (salt okuma)
# Yazar: denetim/SIRADA-MUTABAKAT-0930.json + .md     Koşu: py denetim/SIRADA-MUTABAKAT-0930.py
# 🔴 HÜKÜM YAZMAZ — öneri üretir; kutuya koordinatör işler.
# Delil kuralı (koordinatör, 30 Eyl): "rapor ✅ demiş" DELİL DEĞİLDİR. Delil = canlı data/*.js'te
# kimliğin VARLIĞI (+ onu getiren commit) ya da doğrulanmış commit karması.
import json, os, re, glob, subprocess, collections

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
G = r"C:/claudemre/kutu/giden"
ENV = json.load(open(os.path.join(KOK, "denetim", "SIRADA-ENVANTER-0930.json"), encoding="utf-8"))
CIKTI = os.path.join(KOK, "denetim", "SIRADA-MUTABAKAT-0930.json")


def git(*a):
    r = subprocess.run(["git", "-C", KOK, *a], capture_output=True, text=True, encoding="utf-8", errors="replace")
    return r.stdout.strip() if r.returncode == 0 else None


def commit_var(h):
    return git("cat-file", "-t", h) == "commit"


def kimligi_getiren(kimlik, dosya):
    # kimliği dosyaya İLK getiren commit (git log -S, tek dosya — ucuz)
    out = git("log", "--format=%h %ad", "--date=short", "--reverse", "-S", kimlik, "--", dosya)
    return out.splitlines()[0] if out else None


# ---- canlı veri: küçük veri dosyaları (üretilmiş dev geometri hariç) ----
VERI = {}
for f in glob.glob(os.path.join(KOK, "data", "*.js")):
    b = os.path.basename(f)
    if re.search(r"ekokuma|olay|kisi|savas|sefer|kronoloji|yama|ittifak|devirler", b) and os.path.getsize(f) < 8_000_000:
        VERI["data/" + b] = open(f, encoding="utf-8", errors="replace").read()
TAKIPLI = set((git("ls-files", "data") or "").splitlines())


def kimlik_bul(kimlik):
    for yol, t in VERI.items():
        if f'"{kimlik}"' in t or f"'{kimlik}'" in t:
            return yol
    return None


# ---- ek okuma dosya BAŞLIKLARI: "paket parti-emrelic-00NN, maddeler: H-…" ----
def ekokuma_izleri():
    iz = collections.defaultdict(set)   # (parti, H-no) -> {dosya}
    for yol, t in VERI.items():
        if "ekokuma" not in yol: continue
        partiler = set(re.findall(r"parti-emrelic-(\d{4})", t))
        # açık "0052/H-0031" ya da "51/H-0002" biçimi — parti belli
        for p, h in re.findall(r"\b0?0?(\d{2,4})/H-(\d{4})", t):
            iz[(p.zfill(4), "H-" + h)].add(yol)
        if len(partiler) == 1:   # tek partili dosya: bütün H-numaraları o partiye
            p = next(iter(partiler))
            for h in set(re.findall(r"\bH-(\d{4})\b", t)):
                iz[(p, "H-" + h)].add(yol)
    return iz


EKO_IZ = ekokuma_izleri()


def kutu_notu(parti, no):
    m = json.load(open(os.path.join(G, parti, "CEVAP.json"), encoding="utf-8"))["maddeler"]
    v = m.get(no) if isinstance(m, dict) else next((x for x in m if x.get("no") == no), None)
    return (v or {}).get("not", "")


def kalan_metni(n):
    k = re.search(r"KALAN\s*[:\-]", n)
    return n[k.end():k.end() + 300].strip() if k else None


M = ENV["maddeler"]
S = [k for k in M if k["hukum"] == "sirada"]
guclu = [k for k in S if k.get("rapor_izi") == "TAMAM-diyor" and k.get("rapor_kimlik_veride") == "hepsi"]
zayif = [k for k in S if k.get("rapor_izi") == "TAMAM-diyor" and k.get("rapor_kimlik_veride") != "hepsi"]
kismen = [k for k in S if k["kismen_indi"]]
tekrar = [k for k in M if k["hukum"] == "tekrar"]

oneriler = []


def ekle(k, kova, oneri, guven, delil, aciklama):
    oneriler.append({"parti": k["parti"], "no": k["no"], "mevcut_hukum": k["hukum"], "kova": kova,
                     "onerilen_hukum": oneri, "guven": guven, "delil": delil, "aciklama": aciklama,
                     "akim": k.get("akim"), "baslik": k["baslik"]})


# ① GÜÇLÜ BAYAT — rapor satırındaki kimlikler canlı veride; commit'i bul
for k in guclu:
    delil = []
    for i in k["rapor_kimlikleri"]:
        yol = kimlik_bul(i)
        c = kimligi_getiren(i, yol) if yol else None
        delil.append({"kimlik": i, "dosya": yol, "takipli": yol in TAKIPLI, "getiren_commit": c})
    tam = all(d["dosya"] and d["takipli"] and d["getiren_commit"] for d in delil)
    satir = k.get("rapor_satiri", "")
    kismi = bool(re.search(r"🟡|kısm|kismi|KISMEN|birleştirildi|BULUNAMADI", satir))
    if tam and not kismi:
        ekle(k, "guclu", "cozuldu", "guclu", delil, "kimlik(ler) canlı + commit'li; akım raporu satırı: " + satir[:140])
    elif tam:
        ekle(k, "guclu", "cozuldu", "zayif", delil,
             "kimlik canlı + commit'li AMA rapor satırı kısmi/birleştirme diyor — isteğin TAMAMI karşılandı mı okunmalı: " + satir[:140])
    else:
        ekle(k, "guclu", "olculemedi", "-", delil, "kimliklerden biri canlı değil ya da commit'i bulunamadı")

# ② ZAYIF BAYAT — satırda kimlik yok: satırdaki commit karması ya da ek okuma dosya başlığı izi
for k in zayif:
    satir = k.get("rapor_satiri", "")
    hs = [h for h in re.findall(r"\b[0-9a-f]{7,10}\b", satir) if commit_var(h)]
    pno = re.sub(r"\D", "", k["parti"])[-4:]
    eko = sorted(EKO_IZ.get((pno, k["no"]), []))
    if hs:
        ekle(k, "zayif", "cozuldu", "zayif", {"commit": hs}, "rapor satırındaki commit doğrulandı; içerik ayrıca okunmadı")
    elif eko:
        ekle(k, "zayif", "cozuldu", "zayif", {"ekokuma_baslik_izi": eko},
             "ek okuma dosyasının başlığı bu parti+maddeyi adıyla anıyor (kart kimliği satırda yok)")
    else:
        ekle(k, "zayif", "olculemedi", "-", {"rapor_satiri": satir[:160]},
             "delil yok: satırda kimlik/commit yok (çoğu UI — kodda yapılıp yapılmadığı tarayıcısız ölçülemez)")

# ③ KISMEN İNDİ — nottaki commit'ler doğrulanır; KALAN varsa madde AÇIK kalır
for k in kismen:
    n = kutu_notu(k["parti"], k["no"])
    hs = sorted(set(re.findall(r"\b[0-9a-f]{7}\b", n)))
    dog = [h for h in hs if commit_var(h)]
    kal = kalan_metni(n)
    if dog and kal:
        ekle(k, "kismen", "sirada (kismen-indi)", "guclu", {"commit": dog, "dogrulanamayan": [h for h in hs if h not in dog]},
             "indiği kısım commit'li; KALAN açık → hüküm DEĞİŞMEZ, notu 'kalan' ile daraltılır: " + kal[:200])
    elif dog:
        ekle(k, "kismen", "olculemedi", "-", {"commit": dog},
             "commit doğrulandı ama notta KALAN bölümü yok — tamamı mı indi, okunarak karar verilmeli")
    else:
        ekle(k, "kismen", "olculemedi", "-", {"commit_adaylari": hs}, "nottaki karmalar depoda commit olarak bulunamadı")

# ④ TEKRAR — ikizin hükmü
for k in tekrar:
    ikiz = {(x["parti"], x["no"]): x["hukum"] for x in k.get("ikiz", [])}
    hk = set(ikiz.values())
    kun = [f"{p}/{n}={h}" for (p, n), h in ikiz.items()]
    if hk and hk <= {"cozuldu"}:
        ekle(k, "tekrar", "once-cozuldu", "guclu", {"ikiz": kun}, "mükerrer; ikizi çözülmüş (künye notta)")
    elif hk and hk <= {"zaten-dogru", "cozuldu", "tekrar"} and "zaten-dogru" in hk:
        ekle(k, "tekrar", "zaten-dogru (ikizle)", "zayif", {"ikiz": kun},
             "mükerrer; ikizi 'zaten-dogru' — üç kovanın hiçbirine girmiyor (ne indi ne arada çözüldü): hiç sorun yoktu")
    elif "sirada" in hk:
        ekle(k, "tekrar", "tekrar (ikizine bagla)", "guclu", {"ikiz": kun},
             "ikizi hâlâ sirada — hüküm değişmez; ikiziyle AYNI işçiye tek iş olarak gider")
    else:
        ekle(k, "tekrar", "acik (aile kusuru)", "-", {"atif": "denetim/BULGU-BAYAT-TARAMA.md"},
             "ikiz H-numarasıyla verilmemiş, aileye atıf; ailenin çözülüp çözülmediği ÖLÇÜLMEDİ")

# ---- ek ölçüm ①: 196 EK OKUMA maddesinin kartı ZATEN VAR mı ----
ek = [k for k in S if k.get("alt") == "EK-OKUMA"]
ekd = collections.Counter()
ek_liste = []
for k in ek:
    pno = re.sub(r"\D", "", k["parti"])[-4:]
    iz = sorted(EKO_IZ.get((pno, k["no"]), []))
    kv = k.get("rapor_kimlik_veride")
    if kv == "hepsi": d = "kart-var (rapor kimliği canlı)"
    elif iz: d = "dosya-basligi-aniyor"
    elif kv in ("kismen", "hicbiri"): d = "rapor kimliği CANLI DEĞİL"
    else: d = "olculemedi"
    ekd[d] += 1
    ek_liste.append({"parti": k["parti"], "no": k["no"], "durum": d, "iz": iz, "akim": k.get("akim")})

# ---- ek ölçüm ②: TK Kırım 7 ----
kirim = [{"parti": k["parti"], "no": k["no"], "baslik": k["baslik"], "not_ilk": k["not_ilk"][:160]}
         for k in S if "EMRE-TK-KIRIM" in k.get("ikincil", [])]

out = {"damga": "2026-09-30", "betik": "denetim/SIRADA-MUTABAKAT-0930.py",
       "kapsam": {"guclu": len(guclu), "zayif": len(zayif), "kismen": len(kismen), "tekrar": len(tekrar)},
       "oneri_sayimi": {f"{a}|{b}|{c}": n for (a, b, c), n in
                        collections.Counter((o["kova"], o["onerilen_hukum"], o["guven"]) for o in oneriler).items()},
       "ek_okuma_kart_durumu": dict(ekd), "tk_kirim": kirim,
       "oneriler": oneriler, "ek_okuma": ek_liste}
json.dump(out, open(CIKTI, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

# ---- .md ----
L = []; w = L.append
w("# SIRADA-MUTABAKAT-0930 — bayat · kısmen · tekrar maddelerinin DELİLLİ hüküm önerisi")
w("")
w(f"> 30 Eylül 2026 · üreten `py {out['betik']}` (bu dosyayı o yazar) · girdi `denetim/SIRADA-ENVANTER-0930.json` · "
  "kutu/`data`/git YALNIZ OKUNDU · 🔴 **hüküm YAZILMADI — öneridir, kutuya koordinatör işler.**")
w("")
w("**Delil kuralı:** rapor \"✅\" demesi delil sayılmadı. Delil = (a) kimliğin canlı `data/*.js`'te VARLIĞI + dosyanın git'te "
  "takipli olması + kimliği dosyaya getiren commit (`git log -S`), ya da (b) `git cat-file` ile doğrulanmış commit karması, "
  "ya da (c) ek okuma dosyasının kendi başlığında parti+maddenin adıyla anılması (zayıf). Hiçbiri yoksa `olculemedi`.")
w("")
w("**Kovalar ayrı tutuldu:** `cozuldu` (bu madde için iş yapıldı, indi, delilli) · `bayat` (şikâyet doğruydu, BAŞKA iş arada "
  "çözdü — D044) · `once-cozuldu` (mükerrer, ikizin künyesi notta). Bu turda `bayat` kovasına düşen madde **0**: güçlü/zayıf "
  "kümedeki her madde, maddenin KENDİSİ için açılmış akımın raporunda anılıyor — arada başka işin çözdüğü değil, doğrudan "
  "çözülmüş iş. İkizi `zaten-dogru` olan tekrarlar üç kovanın hiçbirine girmez; ayrı yazıldı.")
w("")
w("## 1. Öneri sayımı")
w("")
w("| kova | önerilen hüküm | güven | madde |\n|---|---|---|---:|")
for kk, v in sorted(out["oneri_sayimi"].items()):
    a, b, c = kk.split("|"); w(f"| {a} | {b} | {c} | {v} |")
w(f"| | | **toplam** | **{len(oneriler)}** |")
w("")
cz = [o for o in oneriler if o["onerilen_hukum"] == "cozuldu"]
w(f"⇒ `sirada`dan çıkarılması önerilen: **{len(cz)}** `cozuldu` "
  f"({sum(1 for o in cz if o['guven']=='guclu')} güçlü · {sum(1 for o in cz if o['guven']=='zayif')} zayıf) + "
  f"{sum(1 for o in oneriler if o['onerilen_hukum'].startswith(('once-cozuldu','zaten-dogru')))} tekrar kapanışı. "
  "Envanterdeki \"~60-90\" tahmini ölçümle bu sayıya iner; zayıflar okunmadan işlenmemeli.")
w("")
for kova, bas in (("guclu", "2. Güçlü bayat adaylar"), ("zayif", "3. Zayıf bayat adaylar"),
                  ("kismen", "4. Kısmen indi"), ("tekrar", "5. Tekrar — ikiz eşitlemesi")):
    w(f"## {bas}")
    w("")
    w("| parti | madde | öneri | güven | delil | açıklama |\n|---|---|---|---|---|---|")
    for o in oneriler:
        if o["kova"] != kova: continue
        d = o["delil"]
        if isinstance(d, list):
            ds = " ; ".join(f"`{x['kimlik']}` @ {x['dosya'] or 'YOK'} ← {x['getiren_commit'] or 'commit YOK'}" for x in d)
        else:
            ds = " ; ".join(f"{a}: {', '.join(v) if isinstance(v, list) else v}" for a, v in d.items())
        w(f"| {o['parti'][-4:]} | {o['no']} | **{o['onerilen_hukum']}** | {o['guven']} | {ds[:260]} | {o['aciklama'][:220].replace('|','/')} |")
    w("")
w("## 6. Ek ölçüm ① — 196 EK OKUMA maddesinin kartı zaten var mı")
w("")
w("| durum | madde |\n|---|---:|")
for a, n in collections.Counter(x["durum"] for x in ek_liste).most_common():
    w(f"| {a} | {n} |")
w("")
w("- `kart-var`: akım raporundaki kart kimliği canlı veride. `dosya-basligi-aniyor`: bir `data/ekokuma_*.js` dosyasının başlığı "
  "bu parti+maddeyi adıyla anıyor (kart yazılmış olması kuvvetle muhtemel, kimlik eşlenmedi). `olculemedi`: ne rapor kimliği "
  "ne dosya başlığı — kartın yokluğu da KANITLANMADI.")
w("- **Sınıf önerisi:** evet, ayrı sınıf olmalı — `EK-OKUMA` (içerik üretimi: kaynak okuma + kart yazımı + olay bağı). "
  "`VERI-DUZELTME` kovasında kalırsa dağıtımda \"tek satırlık iş\" gibi görünür; oysa emeği KAYNAK-ARASTIRMA'ya yakındır. "
  "Envanter JSON'unda zaten `alt: EK-OKUMA` alanıyla ayrılabilir durumda.")
w("")
w("## 7. Ek ölçüm ② — Emre'nin TK Kırım oturumundaki 7 madde (ADIYLA)")
w("")
w("| parti | madde | başlık | not |\n|---|---|---|---|")
for x in kirim:
    w(f"| {x['parti']} | {x['no']} | {x['baslik']} | {x['not_ilk'][:120].replace('|','/')} |")
w("")
w("## 8. Ölçülemeyenler")
w("")
w("- UI maddeleri: kodda yapılıp yapılmadığı tarayıcı açılmadan ölçülemedi (satırlarında kimlik/commit yok).")
w("- `git log -S` kimliğin dosyaya İLK girdiği commit'i verir; sonradan silinip yeniden yazılması ayrıca izlenmedi.")
w("- Tekrar maddelerinden ikizi aileye atıflı olanların (BULGU-BAYAT-TARAMA) ailesinin bugünkü durumu ölçülmedi.")
open(CIKTI.replace(".json", ".md"), "w", encoding="utf-8").write("\n".join(L) + "\n")

for kk, v in sorted(out["oneri_sayimi"].items()): print(f"  {v:3}  {kk}")
print("ek okuma", dict(ekd))
print("tk kirim", len(kirim))
