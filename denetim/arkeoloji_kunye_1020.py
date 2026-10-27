"""Arkeoloji kültür künyelerini data/devletler.js'e ekler (VERI-MO-ARKEO, 20 Ekim 2026; Emre ek yönü: "her kültür/devlet için künye f/t + kaynaklı kur:").

    py denetim/arkeoloji_kunye_1020.py          (idempotent: id zaten varsa atlar)

f/t ve kronoloji maddeleri denetim/arastirma/*.json'daki kur/bit bloklarından, olay üreticisiyle AYNI kuralla (orta nokta / alt sınır / tek değer) gelir.
Yeni boya anahtarı YAZILMAZ (harita: yok) → renkler.py'ye dokunulmaz; boya listesi denetim/ARKEOLOJI-BOYA-LISTESI-1020.md'dedir.
"""
import importlib.util, json, os, sys

KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
sp = importlib.util.spec_from_file_location("uret", os.path.join(KOK, "denetim", "arkeoloji_uret_1020.py"))
U = importlib.util.module_from_spec(sp)
sp.loader.exec_module(U)

# araştırma dosyası, kayıt id, künye id, künye adı, bölge, tür, süre-bayrağı(f=bas,t=son) ya da None
T = [
 ("levant-anadolu", "natufiyen-kultur", "natufiyen", "Natufiyen Kültürü (Levant)", "suriye-filistin"),
 ("levant-anadolu", "ppna-guney-levant", "ppna-guney-levant", "PPNA — Çanak Öncesi Neolitik A (Güney Levant)", "suriye-filistin"),
 ("levant-anadolu", "ppnb-guney-levant", "ppnb-guney-levant", "PPNB — Çanak Öncesi Neolitik B (Güney Levant)", "suriye-filistin"),
 ("levant-anadolu", "ppnc-guney-levant", "ppnc-guney-levant", "PPNC — Çanak Öncesi Neolitik C (Güney Levant)", "suriye-filistin"),
 ("mezopotamya", "ubaid-kulturu", "ubaid-kultur", "Ubaid Kültürü (Güney Mezopotamya)", "mezopotamya"),
 ("mezopotamya", "halaf-kulturu", "halaf-kultur", "Halaf Kültürü", "mezopotamya"),
 ("mezopotamya", "uruk-yazi", "uruk-geç-kultur".replace("ç", "c"), "Geç Uruk Kültürü (Uruk IV–III, yazının ortaya çıkışı)", "mezopotamya"),
 ("hint", "erken-harappa-donemi", "erken-harappa", "Erken Harappa Dönemi", "guney-asya"),
 ("hint", "gec-harappa-donemi", "gec-harappa", "Geç Harappa Dönemi", "guney-asya"),
 ("misir-nil-sahra", "naqada-kulturu", "naqada-kultur", "Naqada Kültürü (Yukarı Mısır)", "misir-sudan"),
 ("misir-nil-sahra", "pre-kerma", "pre-kerma", "Pre-Kerma Kültürü (Nubya)", "misir-sudan"),
 ("misir-nil-sahra", "erken-hartum", "erken-hartum", "Erken Hartum Mezolitiği (Orta Sudan)", "misir-sudan"),
 ("misir-nil-sahra", "fayum-erken-holosen", "fayum-neolitik", "Fayum Neolitiği ve Erken Holosen İskânı", "misir-sudan"),
 ("cin", "peiligang-kulturu", "peiligang", "Peiligang Kültürü", "dogu-asya"),
 ("cin", "yangshao-kulturu", "yangshao", "Yangshao Kültürü", "dogu-asya"),
 ("cin", "shangshan-kulturu", "shangshan", "Shangshan Kültürü", "dogu-asya"),
 ("cin", "kuahuqiao-kulturu", "kuahuqiao", "Kuahuqiao Kültürü", "dogu-asya"),
 ("cin", "hemudu-kulturu", "hemudu", "Hemudu Kültürü", "dogu-asya"),
 ("cin", "liangzhu-kulturu", "liangzhu", "Liangzhu Kültürü", "dogu-asya"),
 ("avrupa", "lepenski-vir-trapez-evresi", "lepenski-vir-trapez", "Lepenski Vir — trapez yapılı Mezolitik-Neolitik geçiş evresi", "balkanlar"),
]


def kayit(dosya, rid):
    d = json.load(open(os.path.join(KOK, "denetim", "arastirma", dosya + ".json"), encoding="utf-8"))
    return [r for r in d["kayitlar"] if r["id"] == rid][0]


def js(x):
    return json.dumps(x, ensure_ascii=False)


def sinir(b):
    """-> (iso_t, 'gun' metni, tür) kur/bit bloğundan; olay üreticisiyle aynı kural"""
    t_mo, kes, ar, gun, ic, kt = U.uc(b, None)
    return U.iso(t_mo), gun, kes


def kunye(dosya, rid, kid, ad, bolge):
    r = kayit(dosya, rid)
    kur, bit = r["kur"], r.get("bit") or r.get("bit_kunye")
    f, fgun, _ = sinir(kur)
    sure = kur.get("aralik_turu") in U.SURE and kur.get("son_mo") is not None
    if sure:
        t = U.iso(kur["son_mo"])
        tgun = "MÖ %d" % kur["son_mo"]
    elif bit:
        t, tgun, _ = sinir(bit)
    else:
        return None
    if not int(f[:f.index("-", 1)] if f[0] == "-" else f[:4]) < int(t[:t.index("-", 1)] if t[0] == "-" else t[:4]):
        return None
    kay = kur["kaynak"] + (" · " + kur["url"] if kur.get("url") else "")
    kr = [{"t": f, "tur": "kurulus", "b": "%s: başlangıç (%s)" % (ad, fgun), "kaynak": kay}]
    if bit and not sure:
        kr.append({"t": t, "tur": "son", "b": "%s: sona erer (%s)" % (ad, tgun),
                   "kaynak": bit["kaynak"] + (" · " + bit["url"] if bit.get("url") else "")})
    else:
        kr.append({"t": t, "tur": "son", "b": "%s: dönem sona erer (%s; kaynağın verdiği dönem sınırı)" % (ad, tgun), "kaynak": kay})
    ozet = ("Arkeolojik KÜLTÜR/DÖNEM — siyasî devlet değil, sahip kavramı yok; haritada boyanmaz (veri-yok). %s → %s. %s" %
            (fgun, tgun, (r.get("ic_not") or "")[:380]))
    return ("{ id:%s, ad:%s, tur:\"kultur\", bolge:%s, f:%s, t:%s, baskent:\"yok (kültür; merkez tanımsız)\", ozet:%s, kaynak:%s,\n  kronoloji:[\n%s\n  ] }," %
            (js(kid), js(ad), js(bolge), js(f), js(t), js(ozet), js(kay),
             ",\n".join("    { t:%s, tur:%s, b:%s, kaynak:%s }" % (js(x["t"]), js(x["tur"]), js(x["b"]), js(x["kaynak"])) for x in kr)))


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    p = os.path.join(KOK, "data", "devletler.js")
    s = open(p, encoding="utf-8").read()
    ek, atla = [], []
    for dosya, rid, kid, ad, bolge in T:
        if 'id:"%s"' % kid in s or ('id:%s' % js(kid)) in s:
            atla.append((kid, "zaten var"))
            continue
        k = kunye(dosya, rid, kid, ad, bolge)
        if not k:
            atla.append((kid, "f<t sağlanmadı/uç yok"))
            continue
        ek.append(k)
    if ek:
        son = s.rstrip().rfind("];")
        blok = "\n// =========== ARKEOLOJİ KÜLTÜRLERİ (MÖ) — VERI-MO-ARKEO 20 Ekim 2026; denetim/arkeoloji_kunye_1020.py üretir ===========\n" + "\n".join(ek) + "\n"
        s = s[:son] + blok + s[son:]
        open(p, "w", encoding="utf-8", newline="").write(s)
    print(len(ek), "künye eklendi;", atla)


main()
