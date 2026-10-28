# ARAC-KELIME-CAKISMA-YER-1006 — Değişmez 2sk YER kolunun kapanışlarını YOLUNA göre döker (SALT OKUR).
#
# denetle.py'nin KENDİ işlevleri çağrılır (_2s_yeri_aniyor · _2s_tarafi_aniyor · _2s_gecer ·
# _2s_merkez_aniyor · _2s_norm · gun_no · yükleyiciler); birim kümesi ARAC-2SK-TOPLU-SINIF-1006'nın
# taklidiyle kurulur ve KAPANIS_2S ile ÇAPRAZ sınanır (uyuşmazsa çıkış 1).
# Her birim için: kol (yer · yalniz_taraf · eksik), YER kolunu hangi YOL kapattı
# (yer_id · merkez · kok), kök eşleşmesinin HAM metindeki biçimi (BÜYÜK harfle mi başlıyor),
# hangi alanda (b · yer · d) ve ±40 karakter bağlam.
# Koşum: py denetim/ARAC-KELIME-CAKISMA-YER-1006.py <cikti.tsv>
# Hiçbir dosyaya yazmaz (yalnız argümandaki TSV). Kökünü __file__den bulur.
import os, re, sys, unicodedata

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, os.path.join(KOK, "arac"))
import denetle as D
out = sys.stdout

# büyük/küçük harfi KORUYAN norm — _2s_norm ile aynı uzunluk/konum (yalnız harf büyüklüğü farklı)
_KORU = str.maketrans({
    "İ": "I", "ı": "i", "Ş": "S", "ş": "s", "Ğ": "G", "ğ": "g", "Ü": "U", "ü": "u",
    "Ö": "O", "ö": "o", "Ç": "C", "ç": "c", "Â": "A", "â": "a", "Î": "I", "î": "i",
    "Û": "U", "û": "u", "’": "'", "‘": "'", "”": '"', "“": '"', "–": "-", "—": "-"})


def koru(s):
    s = (s or "").translate(_KORU)
    s = unicodedata.normalize("NFKD", s)
    return "".join(c for c in s if not unicodedata.combining(c)).strip()


Y = D.yerlesimleri_yukle()
O = D.olaylari_yukle()
Yc = [y for y in Y if y.get("_kaynak") not in D.KUYRUK_DOSYALARI]
D.degismez2(Yc, O, ("s",), yer_sarti=True)
RESMI = dict(D.KAPANIS_2S)

ol = []
for o in O:
    ham = " ".join([o.get("b") or "", o.get("yer") or "", o.get("d") or ""])
    k = {"g": D.gun_no(o["t"]), "t": o["t"], "b": o["b"],
         "yer": o.get("yer_id") or o.get("yer"),
         "nrm": D._2s_norm(ham), "nrm_b": D._2s_norm(o.get("b") or ""),
         "nrm_y": D._2s_norm(" ".join([o.get("b") or "", o.get("yer") or ""])),
         "yer_id": o.get("yer_id") or "", "_o": o,
         "_kor": koru(ham), "_lb": len(D._2s_norm(o.get("b") or "")),
         "_ly": len(D._2s_norm(o.get("yer") or ""))}
    if hasattr(D, "_2s_kor"):   # yamalı denetle.py bu iki alanı okur (degismez2 ile AYNI kurulum)
        k["kor"] = D._2s_kor(ham)
        k["nrm_yer"] = D._2s_norm(o.get("yer") or "")
    ol.append(k)
Y_KOK = {y["ad"]: D._2s_norm(re.sub(r"\s*\(.*?\)", "", y["ad"] or "").strip()) for y in Yc}
Y_MERKEZ = {y["ad"]: (y.get("m") or "", D._2s_norm(y.get("m") or "")) for y in Yc}
Y_KAY = {y["ad"]: y.get("_kaynak") or "" for y in Yc}

kir = {}
for y in Yc:
    for p in (y.get("s") or []):
        for d, tip in ((p.get("f"), "kazanc"), (p.get("t"), "kayip")):
            if not d or d <= "1281-01-01" or d >= "1923-10-29":
                continue
            kk = kir.setdefault(d, {"ad": set(), "sahip": {}})
            kk["ad"].add(y["ad"])
            tr = kk["sahip"].setdefault(y["ad"], {"eski": "", "yeni": ""})
            tr["yeni" if tip == "kazanc" else "eski"] = p.get("d") or ""


def yol_dok(o, ad):
    """YER kolunun bu madde için HANGİ yoldan geçtiğini döker (orijinal mantığın sırasıyla)."""
    if o.get("yer_id") and o["yer_id"] == ad:
        return "yer_id", "", "", ""
    nk = Y_KOK.get(ad, "")
    if nk and len(nk) >= 3:
        m = re.search(r"(?<![a-z0-9])" + re.escape(nk) + r"(?![a-z0-9])", o["nrm"])
        if m:
            i = m.start()
            ham_es = o["_kor"][i:i + len(nk)] if len(o["_kor"]) == len(o["nrm"]) else "?"
            alan = "b" if i < o["_lb"] else ("yer" if i < o["_lb"] + 1 + o["_ly"] else "d")
            bag = o["_kor"][max(0, i - 40):i + len(nk) + 40] if ham_es != "?" else o["nrm"][max(0, i - 40):i + 40]
            return "kok", ham_es, alan, bag
    ham_m, nrm_m = Y_MERKEZ.get(ad, ("", ""))
    if D._2s_merkez_aniyor(o, ham_m, nrm_m):
        return "merkez", ham_m, "", ""
    return "?", "", "", ""


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
        say[{"OCAK1": "ocak1_", "GUN-MASKELI": "maskeli_", "GUN-KAPALI": "gun_"}[sutun] + kol] += 1
        if kol != "yer":
            continue
        yollar = [(o,) + yol_dok(o, ad) for o in yu]
        yol_kume = sorted({y[1] for y in yollar})
        kokler = [y for y in yollar if y[1] == "kok"]
        # sınıf: yer_id/merkez yolu VARSA kapanış kökten bağımsızdır
        if any(y[1] in ("yer_id", "merkez") for y in yollar):
            sinif = "BAGIMSIZ"
        elif kokler and all(y[2][:1].islower() for y in kokler):
            sinif = "KUCUK-HARF"          # aday sahte: hiçbir eşleşme büyük harfle başlamıyor
        elif kokler and any(y[2][:1].islower() for y in kokler):
            sinif = "KARISIK"
        else:
            sinif = "BUYUK-HARF"
        ilk = kokler[0] if kokler else (yollar[0] if yollar else None)
        satirlar.append([d, ad, Y_KAY.get(ad, ""), Y_KOK.get(ad, ""), str(len(Y_KOK.get(ad, ""))),
                         sutun, "+".join(yol_kume), sinif, str(len(yu)), "1" if tu else "0",
                         ilk[2] if ilk else "", ilk[3] if ilk else "",
                         (ilk[4] if ilk else "").replace("\n", " "),
                         ("%s %s" % (ilk[0]["t"], ilk[0]["b"][:70])) if ilk else ""])

ok = all(say[k] == RESMI[k] for k in say)
out.write("taklit %s\nresmî  %s\nçapraz %s\n" % (say, {k: RESMI[k] for k in say}, "✓" if ok else "✗"))
from collections import Counter
out.write("YER birim sınıfları: %s\n" % dict(Counter(s[7] for s in satirlar)))
with open(sys.argv[1], "w", encoding="utf-8", newline="\n") as f:
    f.write("tarih\tyer\tyer_dosya\tkok_nrm\tkok_uzun\tsutun\tyollar\tsinif\tyer_madde_n\ttaraf_da_kapatir"
            "\tham_eslesme\talan\tbaglam\tilk_madde\n")
    for s in satirlar:
        f.write("\t".join(x.replace("\t", " ") for x in s) + "\n")
sys.exit(0 if ok else 1)
