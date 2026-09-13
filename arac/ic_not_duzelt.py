# -*- coding: utf-8 -*-
"""IC NOT BOLME DUZELTICISI — arac/ic_not_uygula.py'nin uyguladigi kayitlarda
BOZUK BOLMEYI onarir.

Neden var (13 Eylul 2026): yama bolme noktasini "ilk yapisal isaret" (backtick,
data/ yolu, ⚠️ ...) konumundan secmisti. Isaret cumlenin ORTASINDAYSA okura
gorunen metin yarim kaliyordu: "... denetiminde kaldi. Tarih" / "... (TDV".
Olcum: 409 uygulanmis kaydin 121'i supheli.

Kural:
  d / b  : bolme, eski metinde yama bolme noktasindan ONCEKI son TAM CUMLE
           sonuna cekilir (. ! ? ardindan bosluk ve BUYUK harf / isaret / son).
           Roma rakami, tek harf, "bkz." gibi kisaltmalar ve ardindan kucuk
           harf gelen nokta (15. yuzyil) cumle sonu SAYILMAZ.
  gun    : kapanmamis "(" varsa bolme o parantezin basina cekilir.
  Kullaniciya kalan metin 12 karakterden kisa olursa kayit ELLE listesine gider.
  Dosyada `alan:"<yeni>", ic_not_<alan>:"<not>"` TAM BIR KEZ gecmeli.

    py arac/ic_not_duzelt.py denetim/YAMA-IC-NOT-0913.json [--uygula] [--haric a.js,b.js]
"""
import io, json, os, re, sys, collections

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KISALTMA = {"bkz", "vb", "vs", "yy", "hz", "st", "dr", "s", "c", "ö", "m.ö", "m.s", "haz", "çev", "ed", "no", "nr", "vol"}
BUYUK = re.compile(r"[A-ZÇĞİÖŞÜÂÎÛ\"“'‘(\[⚠🔴🟢🟡📌🔒0-9]")


def cumle_sonu_mu(m, i):
    if m[i] not in ".!?":
        return False
    j = i + 1
    while j < len(m) and m[j] in "\"”’')":
        j += 1
    if j >= len(m):
        return True
    if m[j] != " ":
        return False
    k = j
    while k < len(m) and m[k] == " ":
        k += 1
    if k >= len(m):
        return True
    if not BUYUK.match(m[k]):
        return False
    if m[i] == ".":
        w = re.search(r"([\wÇĞİÖŞÜçğıöşüâîû.]+)$", m[:i])
        kelime = (w.group(1) if w else "").lower()
        if kelime in KISALTMA or re.fullmatch(r"[ivxlcdm]+", kelime) or len(kelime) == 1:
            return False
    return True


IC_ISARET = re.compile(r"`|data/|\.js|\.md|\.py|§|KITA \d|D\d{3}|dunya|⚠|🔴|🟢|🟡|📌|künye|devletler|atlas|kaynak|koordinat|M-\d{3,4}|yerlesim|TDV|bkz", re.I)


def gevsek_sonu_mu(m, i):
    # ikinci geçiş: ". " ya da "; " — ardından küçük harf de olabilir (". dunya puanı")
    if m[i] not in ".;" or i + 1 >= len(m) or m[i + 1] != " ":
        return False
    w = re.search(r"([\wÇĞİÖŞÜçğıöşüâîû.]+)$", m[:i])
    kelime = (w.group(1) if w else "").lower()
    if kelime in KISALTMA or re.fullmatch(r"[ivxlcdm]+", kelime) or len(kelime) < 3:
        return False
    return True


def yeniden_bol(eski, yeni, alan):
    p = len(yeni)
    if alan == "gun":
        acik = [i for i, ch in enumerate(eski[:p]) if ch == "("]
        kapali = eski[:p].count(")")
        if len(acik) > kapali:
            kes = acik[kapali] if kapali < len(acik) else acik[-1]
            return eski[:kes].rstrip(" ,;"), eski[kes:].strip()
        return None
    # ① cümle İÇİNDE kalan parantezli iç atıf: "(bkz. `data/x.js`)" — yalnız
    #    parantez çıkar, parantezden SONRAKİ okur metni yerinde kalır
    derin, acik_q = 0, None
    for i, ch in enumerate(eski[:p]):
        if ch == "(":
            if derin == 0:
                acik_q = i
            derin += 1
        elif ch == ")" and derin:
            derin -= 1
            if derin == 0:
                acik_q = None
    if derin and acik_q is not None:
        d2, kap = 0, None
        for i in range(acik_q, len(eski)):
            if eski[i] == "(":
                d2 += 1
            elif eski[i] == ")":
                d2 -= 1
                if d2 == 0:
                    kap = i
                    break
        if kap is not None:
            okur = (eski[:acik_q].rstrip() + eski[kap + 1:]).strip()
            okur = re.sub(r"\s+([.,;—])", r"\1", okur).replace(" —", " —")
            return okur, eski[acik_q:kap + 1].strip()
    son = None
    for i in range(min(p, len(eski)) - 1, -1, -1):
        if cumle_sonu_mu(eski, i):
            son = i
            break
    if son is None:
        for i in range(min(p, len(eski)) - 1, -1, -1):
            if gevsek_sonu_mu(eski, i):
                son = i
                break
    if son is None:
        return None
    j = son + 1
    while j < len(eski) and eski[j] in "\"”’')":
        j += 1
    okur = eski[:j].rstrip()
    if okur.endswith(";"):
        okur = okur[:-1] + "."
    return okur, eski[j:].strip()


def notta_okur_cumlesi_var_mi(not_):
    # taşınan notun SON cümlesi hiçbir iç işaret taşımıyorsa, okura ait bir
    # cümle nota kaymış olabilir — otomatik uygulanmaz, ELLE listesine gider
    cumleler = [c for c in re.split(r"(?<=[.!?])\s+", not_.strip()) if c]
    return bool(cumleler) and len(cumleler) > 1 and not IC_ISARET.search(cumleler[-1])


def supheli(yeni, alan, not_):
    if yeni.count("(") != yeni.count(")") or yeni.count("[[") != yeni.count("]]"):
        return True
    if not_[:1] in (")", ",", ";", "."):
        return True
    if alan in ("d", "b") and yeni.rstrip()[-1:] not in (".", "!", "?", "”", '"', "'", ")", "…"):
        return True
    return False


def bul_ve_degistir(metin, alan, yeni, not_, y_yeni, y_not):
    anahtar = "ic_not_%s" % alan
    for kal in (lambda s: json.dumps(s, ensure_ascii=False), lambda s: '"' + s + '"'):
        desen = re.compile(r"(?<![A-Za-z_])" + re.escape(alan) + r"\s*:\s*" + re.escape(kal(yeni))
                           + r"\s*,\s*" + re.escape(anahtar) + r"\s*:\s*" + re.escape(kal(not_)))
        b = list(desen.finditer(metin))
        if len(b) == 1:
            yerine = "%s:%s, %s:%s" % (alan, kal(y_yeni), anahtar, kal(y_not))
            return metin[:b[0].start()] + yerine + metin[b[0].end():], "ok"
        if len(b) > 1:
            return metin, "eşleşme %d" % len(b)
    return metin, "eşleşme 0"


def main():
    arg = sys.argv[1:]
    if not arg:
        print(__doc__); sys.exit(2)
    uygula = "--uygula" in arg
    haric = set()
    if "--haric" in arg:
        haric = {h.strip() for h in arg[arg.index("--haric") + 1].split(",")}
    Y = json.load(io.open(os.path.join(KOK, arg[0]), encoding="utf-8"))
    dosyaya = collections.defaultdict(list)
    for r in Y["kayitlar"]:
        if r["kova"] in ("karisik", "ic-not", "kozmetik"):
            dosyaya[r["dosya"].replace("\\", "/")].append(r)
    say = collections.Counter()
    elle, atla = [], []
    for yol, rs in sorted(dosyaya.items()):
        if os.path.basename(yol) in haric:
            say["haric"] += sum(1 for r in rs if supheli(r["yeni_metin"], r["alan"], (r.get("tasinan_not") or "").strip()))
            continue
        tam = os.path.join(KOK, yol)
        metin = io.open(tam, encoding="utf-8").read()
        once = metin
        for r in rs:
            not_ = (r.get("tasinan_not") or "").strip()
            if not not_ or not supheli(r["yeni_metin"], r["alan"], not_):
                continue
            say["supheli"] += 1
            sonuc = yeniden_bol(r["eski_metin"], r["yeni_metin"], r["alan"])
            enaz = 1 if r["alan"] == "gun" else 12
            if not sonuc or len(sonuc[0]) < enaz or not sonuc[1]:
                elle.append((yol, r["t"], r["alan"], "cümle sınırı bulunamadı ya da kalan metin çok kısa"))
                continue
            y_yeni, y_not = sonuc
            if r["alan"] != "gun" and notta_okur_cumlesi_var_mi(y_not):
                elle.append((yol, r["t"], r["alan"], "notun son cümlesi iç işaret taşımıyor — okur cümlesi nota kaymış olabilir"))
                continue
            metin, durum = bul_ve_degistir(metin, r["alan"], r["yeni_metin"], not_, y_yeni, y_not)
            if durum != "ok":
                atla.append((yol, r["t"], r["alan"], durum))
                continue
            say["duzeltildi"] += 1
            if supheli(y_yeni, r["alan"], y_not):
                elle.append((yol, r["t"], r["alan"], "düzeltme sonrası HÂLÂ şüpheli: ..." + y_yeni[-40:]))
        if metin != once:
            say["dosya"] += 1
            if uygula:
                io.open(tam, "w", encoding="utf-8", newline="").write(metin)
    print("%s  şüpheli %d · düzeltildi %d · dosya %d · hariç dosyada şüpheli %d · ELLE %d · ATLANAN %d"
          % ("UYGULANDI" if uygula else "KURU KOŞU", say["supheli"], say["duzeltildi"], say["dosya"],
             say["haric"], len(elle), len(atla)))
    for e in elle:
        print("  ELLE    %s  t=%s  %s  — %s" % e)
    for a in atla:
        print("  ATLANDI %s  t=%s  %s  — %s" % a)


if __name__ == "__main__":
    main()
