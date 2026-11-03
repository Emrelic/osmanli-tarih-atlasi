# -*- coding: utf-8 -*-
"""olc_enklav_1103.py çıktısından ADAYLAR.md + adaylar.json üretir.
Öncelik (EMRELİC 1 KASIM koordinatör kararı, 4 Kasım 2026 gecesi):
  ① ENKLAV ≥ 50 km² — hepsi
  ② KARA-EKSKLAV ≥ 50 km², koridorda BAŞKA DEVLETİN KARASI (9 örneğin ≥ 5'i
     yabancı sahipli) — alanı en büyük 100
  ③ ADA / DAR-AYRIM — yalnız sayı
"""
import json, os, sys, collections

BURA = os.path.dirname(os.path.abspath(__file__))
J = json.load(open(sys.argv[1], encoding="utf-8"))
A = J["adaylar"]
ONC = ["ENKLAV", "KARA-EKSKLAV", "DAR-AYRIM", "ADA"]


def sinif(a):
    for s in ONC:
        if a["siniflar"].get(s):
            return s
    return "?"


def yabanci_kara(a):
    k = a.get("koridor") or {}
    return sum(v for s, v in k.items() if s not in ("DENIZ/BOS", "KENDI"))


for a in A:
    a["S"] = sinif(a)
say = collections.Counter()
for a in A:
    for e in (1, 50, 500, 5000):
        if a["alan_max"] >= e:
            say[(a["S"], e)] += 1
enk = sorted([a for a in A if a["S"] == "ENKLAV" and a["alan_max"] >= 50], key=lambda a: -a["alan_max"])
kara_hepsi = [a for a in A if a["S"] == "KARA-EKSKLAV" and a["alan_max"] >= 50]
kara = sorted([a for a in kara_hepsi if yabanci_kara(a) >= 5], key=lambda a: -a["alan_max"])
deniz = len([a for a in kara_hepsi if yabanci_kara(a) < 5])
sec = [("E", a) for a in enk] + [("K", a) for a in kara[:100]]
for i, (t, a) in enumerate(sec, 1):
    a["no"] = "%s%03d" % (t, i if t == "E" else i - len(enk))


def yer(L, n=8):
    if not L:
        return "—"
    s = "; ".join("%s (%s)" % (y["ad"], y["sahip"] or "sahipsiz") for y in L[:n])
    return s + (" … +%d" % (len(L) - n) if len(L) > n else "")


def kom(a):
    return ", ".join("%s %d%%" % (k, round(v * 100)) for k, v in sorted(a["komsular"].items(), key=lambda x: -x[1])[:3]) or "—"


def kor(a):
    k = a.get("koridor") or {}
    return ("%s km · " % a.get("koridor_km", "?")) + ", ".join("%s %d/9" % (s, v) for s, v in sorted(k.items(), key=lambda x: -x[1]))


L = []
L.append("# ENKLAV-1103 — enklav / eksklav ADAYLARI (koşu 32)\n")
L.append("Ölçen: LAB SALI · 4 Kasım 2026 gecesi · ağaç: worktree `lab-1103-enklav` @ taban `01d545bdb` "
         "(origin/main, kosu_damga no 32) · `coz-c` ile çözülen `devletler_harita.js` + `donemler.js` · "
         "alet `denetim/ENKLAV-1103/olc_enklav_1103.py` · üreteç `adaylar_yaz.py`.\n")
L.append("## Evren\n")
L.append("- Her devlet dönemi (`DEVLET_HARITA[].dnm`, OSMANLI = `DONEMLER[].o`) bir kesittir. Parçalar birleştirilir; "
         "en büyük bağlı bileşen ana gövde, ötekiler **kopuk**. Tâbiler yalnız komşu olarak sayılır.")
L.append("- Kopuk parçanın 0,05° tampon halkası o günün öteki gövdeleriyle kesiştirilir: **ENKLAV** (halkanın ≥ %90'ı "
         "başka devlet, tek devlet ≥ %85) · **KARA-EKSKLAV** (≥ %10'u başka devlet) · **DAR-AYRIM** (kendi ana gövdesine "
         "≤ ~5 km) · **ADA** (< %10, deniz ayırıyor).")
L.append("- **Koridor:** parçadan kendinden büyük en yakın kardeş gövdeye en kısa doğru; doğru üstünde 9 örnek nokta, "
         "her birinin o günkü sahibi. Koridor yerleşimleri: doğrunun 0,25° yakınındaki noktalar ve o günkü sahipleri.")
L.append("- Ardışık dönemlerde örtüşen parça tek aday sayılır; yıl aralığı ilk ve son dönemdir. Alan küresel km², "
         "en büyük kesitteki değer. İçindeki yerleşimler o kesitte, o günkü sahipleriyle.")
L.append("- Yaklaşıklama: tampon düzlemsel derece; koridor düz çizgi (nehir/dağ yok).\n")
L.append("## Sayılar\n")
L.append("Ölçüm: %s.\n" % json.dumps(J["olcum"], ensure_ascii=False))
L.append("| sınıf | ≥1 km² | ≥50 | ≥500 | ≥5.000 |")
L.append("|---|---|---|---|---|")
for s in ONC:
    L.append("| %s | %s |" % (s, " | ".join("{:,}".format(say[(s, e)]).replace(",", ".") for e in (1, 50, 500, 5000))))
L.append("")
L.append("KARA-EKSKLAV ≥ 50 km²: %d; koridorunda yabancı kara ≥ 5/9 olan **%d**, denizle/boşlukla ayrılan %d "
         "(çoğunlukla denizaşırı sömürge gövdesi — bu gece incelenmedi)." % (len(kara_hepsi), len(kara), deniz))
L.append("ADA ve DAR-AYRIM bu gece incelenmedi (koordinatör kararı); yalnız sayı.\n")
L.append("`s.eksklav` taşıyan dönem: %d (yerleşim %d). Devletlere göre: %s.\n" % (
    len(J["s_eksklav"]), len({e["ad"] for e in J["s_eksklav"]}),
    ", ".join("%s %d" % kv for kv in collections.Counter(e["d"] for e in J["s_eksklav"]).most_common())))
HUK = {k: v for k, v in json.load(open(os.path.join(BURA, "hukumler.json"), encoding="utf-8")).items()
       if not k.startswith("_")}
kc = collections.Counter((h["kova"], h["guven"]) for h in HUK.values())
L.append("## Hüküm özeti — %d / %d aday hükümlü\n" % (len(HUK), len(sec)))
L.append("Güven: **OLCUM** = yalnız ölçülmüş veri olgusu (noktasızlık, kayıt alanı, gün çakışması) · "
         "**KAYNAKLI** = akademik kaynak okundu · **KAYNAK-GEREK** = tarihsel iddia teyitsiz, KASA uygulamadan önce "
         "kaynak sırasıyla teyit eder, gün uydurulmaz.\n")
L.append("| kova | OLCUM | KAYNAKLI | KAYNAK-GEREK |")
L.append("|---|---|---|---|")
for k in ("GERCEK", "BIRLESMELI", "YAPAY-a", "YAPAY-b", "YAPAY-c", "YAPAY-d", "YAPAY-m"):
    L.append("| %s | %d | %d | %d |" % (k, kc[(k, "OLCUM")], kc[(k, "KAYNAKLI")], kc[(k, "KAYNAK-GEREK")]))
L.append("\nKovalar: YAPAY-a noktasız emilme · YAPAY-b ara yerleşimin dönemi eksik · YAPAY-c parçanın içindeki "
         "yerleşimin dönemi yanlış · YAPAY-d kısa ara (gün çakışması) · YAPAY-m motor (veriyle çözülmez) · "
         "BIRLESMELI ara yerleşime dönem yazılınca parça ana gövdeye bağlanır.\n")
for baslik, grup in (("① ENKLAV (hepsi, ≥ 50 km²)", [a for t, a in sec if t == "E"]),
                     ("② KARA-EKSKLAV — koridorda yabancı kara (alanı en büyük 100)", [a for t, a in sec if t == "K"])):
    L.append("## %s\n" % baslik)
    for a in grup:
        eks = sum(1 for y in a["yerlesimler"] if y.get("eksklav"))
        L.append("### %s · %s (`%s`) · %s → %s · %s km²\n" % (
            a["no"], a["devlet_ad"], a["devlet"], a["f"], a["t"], "{:,}".format(int(a["alan_max"])).replace(",", ".")))
        L.append("- nokta %s, en büyük kesit %s · kesit sayısı %d · sınıf sayımı %s" % (
            a["nokta"], a["buyuk_gun"], a["kesit"], a["siniflar"]))
        L.append("- çevre: %s" % kom(a))
        L.append("- koridor: %s" % kor(a))
        L.append("- içindeki yerleşimler (%d, s.eksklav %d): %s" % (len(a["yerlesimler"]), eks, yer(a["yerlesimler"])))
        L.append("- koridor yerleşimleri: %s" % yer(a.get("koridor_yer"), 10))
        h = HUK.get(a["no"])
        if not h:
            L.append("- **HÜKÜM:** _bekliyor_\n")
        else:
            L.append("- **HÜKÜM: %s** · kova `%s` · güven `%s`" % (h["hukum"], h["kova"], h["guven"]))
            L.append("  - gerekçe: %s" % h["gerekce"])
            L.append("  - önerilen düzeltme: %s" % h["duzeltme"])
            L.append("  - kaynak: %s\n" % h["kaynak"])
open(os.path.join(BURA, "ADAYLAR.md"), "w", encoding="utf-8").write("\n".join(L))
json.dump([a for _, a in sec], open(os.path.join(BURA, "adaylar.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
print("ENKLAV", len(enk), "KARA yabanci", len(kara), "deniz", deniz, "secilen", len(sec))
