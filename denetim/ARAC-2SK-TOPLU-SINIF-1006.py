# ARAC-2SK-TOPLU-SINIF-1006 — Değişmez 2sk birimlerini BİRİM BİRİM döker (SALT OKUR).
#
# denetle.py'nin KENDİ işlevleri kullanılır (_2s_yeri_aniyor · _2s_tarafi_aniyor · gun_no ·
# yerlesimleri_yukle · olaylari_yukle · KUYRUK_DOSYALARI); degismez2'nin yer_sarti dalı
# satır satır taklit edilir ve her birimin SÜTUNU (GUN-KAPALI · GUN-MASKELI · OCAK1) ve KOLU
# (yer · yalniz_taraf) yazılır. Taklidin doğruluğu çıkışta KAPANIS_2S ile ÇAPRAZ sınanır
# (uyuşmazsa çıkış 1).
# Koşum: py denetim/ARAC-2SK-TOPLU-SINIF-1006.py <cikti.tsv>
# Hiçbir dosyaya yazmaz (yalnız argümandaki TSV).
import io, os, re, sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, os.path.join(KOK, "arac"))
import denetle as D
out = sys.stdout  # denetle stdout'u zaten UTF-8 sarıyor; yeniden sarmak buffer'ı kapatıyor

# ── madde kaynağı: oku_pencere'yi sar, her maddeye dosya adını iliştir ──
_asil = D.oku_pencere


def _sarili(yol, ad):
    k = _asil(yol, ad)
    for o in k:
        o["_dosya"] = os.path.basename(yol)
    return k


D.oku_pencere = _sarili
_METIN = {}


def satir_bul(o):
    f = o.get("_dosya") or ""
    if not f:
        return "?"
    if f not in _METIN:
        _METIN[f] = open(os.path.join(D.DATA, f), encoding="utf-8").read().split("\n")
    b = (o.get("b") or "")[:40]
    for i, s in enumerate(_METIN[f], 1):
        if b and b in s:
            return "%s:%d" % (f, i)
    return f + ":?"


Y = D.yerlesimleri_yukle()
O = D.olaylari_yukle()
Yc = [y for y in Y if y.get("_kaynak") not in D.KUYRUK_DOSYALARI]

# resmî sayaç (çapraz sınav için)
D.degismez2(Yc, O, ("s",), yer_sarti=True)
RESMI = dict(D.KAPANIS_2S)

ol = []
for o in O:
    ol.append({"g": D.gun_no(o["t"]), "t": o["t"], "b": o["b"],
               "yer": o.get("yer_id") or o.get("yer"),
               "nrm": D._2s_norm(" ".join([o.get("b") or "", o.get("yer") or "", o.get("d") or ""])),
               "nrm_b": D._2s_norm(o.get("b") or ""),
               "nrm_y": D._2s_norm(" ".join([o.get("b") or "", o.get("yer") or ""])),
               "yer_id": o.get("yer_id") or "", "_o": o})
    if hasattr(D, "_2s_kor"):  # KELIME-CAKISMA-YER-1006 yaması: degismez2 ile AYNI iki alan
        ol[-1]["kor"] = D._2s_kor(" ".join([o.get("b") or "", o.get("yer") or "", o.get("d") or ""]))
        ol[-1]["nrm_yer"] = D._2s_norm(o.get("yer") or "")
Y_KOK = {y["ad"]: D._2s_norm(re.sub(r"\s*\(.*?\)", "", y["ad"] or "").strip()) for y in Yc}
Y_MERKEZ = {y["ad"]: (y.get("m") or "", D._2s_norm(y.get("m") or "")) for y in Yc}
Y_KAY = {y["ad"]: y.get("_kaynak") or "" for y in Yc}

kir = {}
for y in Yc:
    for p in (y.get("s") or []):
        for d, tip in ((p.get("f"), "kazanc"), (p.get("t"), "kayip")):
            if not d or d <= "1281-01-01" or d >= "1923-10-29":
                continue
            k = kir.setdefault(d, {"ad": set(), "sahip": {}})
            k["ad"].add(y["ad"])
            tr = k["sahip"].setdefault(y["ad"], {"eski": "", "yeni": ""})
            tr["yeni" if tip == "kazanc" else "eski"] = p.get("d") or ""

say = {"gun_yer": 0, "gun_yalniz_taraf": 0, "ocak1_yer": 0, "ocak1_yalniz_taraf": 0,
       "maskeli_yer": 0, "maskeli_yalniz_taraf": 0}
satirlar = []
for d in sorted(kir):
    gd = D.gun_no(d)
    yakinlar = [o for o in ol if abs(o["g"] - gd) <= 30]
    if not yakinlar:
        continue
    eksik, birim = [], []
    for ad in sorted(kir[d]["ad"]):
        sah = {ad: kir[d]["sahip"].get(ad, {})}
        yu = [o for o in yakinlar if D._2s_yeri_aniyor(o, {ad}, Y_KOK, Y_MERKEZ)]
        tu = [o for o in yakinlar if D._2s_tarafi_aniyor(o, sah)]
        if yu or tu:
            birim.append((ad, "yer" if yu else "yalniz_taraf", yu, tu, sah[ad]))
        else:
            eksik.append(ad)
    ocak1 = d[4:] == "-01-01"
    sutun = "OCAK1" if ocak1 else ("GUN-MASKELI" if eksik else "GUN-KAPALI")
    for ad, kol, yu, tu, tr in birim:
        anahtar = {"OCAK1": "ocak1_", "GUN-MASKELI": "maskeli_", "GUN-KAPALI": "gun_"}[sutun] + kol
        say[anahtar] += 1
        kap = sorted(yu if kol == "yer" else tu, key=lambda o: abs(o["g"] - gd))
        satirlar.append([d, ad, Y_KAY.get(ad, ""), tr.get("eski", ""), tr.get("yeni", ""),
                         sutun, kol, str(len(kap)),
                         " ¦ ".join("%s %s [%s]" % (o["t"], o["b"][:90], satir_bul(o["_o"]))
                                    for o in kap[:3]),
                         ",".join(eksik[:6])])

ok = all(say[k] == RESMI[k] for k in say if k in RESMI and not k.startswith("maskeli_")) \
    and say["maskeli_yer"] == RESMI["maskeli_yer"] \
    and say["maskeli_yalniz_taraf"] == RESMI["maskeli_yalniz_taraf"]
toplam_taraf = say["gun_yalniz_taraf"] + say["ocak1_yalniz_taraf"] + say["maskeli_yalniz_taraf"]
out.write("taklit %s · resmî %s\n" % (say, {k: RESMI[k] for k in say}))
out.write("2sk yalnız-taraf görünür+maskeli = %d · çapraz %s\n" % (toplam_taraf, "✓" if ok else "✗"))
with open(sys.argv[1], "w", encoding="utf-8", newline="\n") as f:
    f.write("tarih\tyer\tyer_dosya\teski\tyeni\tsutun\tkol\tkapatan_n\tkapatan_ilk3\tkovada_eksik\n")
    for s in satirlar:
        f.write("\t".join(x.replace("\t", " ") for x in s) + "\n")
sys.exit(0 if ok else 1)
