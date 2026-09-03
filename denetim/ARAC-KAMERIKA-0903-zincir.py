# -*- coding: utf-8 -*-
"""ZİNCİR ÜRETİCİ — 377 adayın `s:` dönem zinciri.

🔴 NİÇİN AYRI BİR ADIM: `ADAY-...-kunyeli.json`daki `s_oneri` yalnız
BAŞLANGIÇLARI taşıyordu, ve YERLİ künyelerde ARDIL YOKTU. Öyle
bırakılsa her yerli nokta 1923'e kadar kendi künyesiyle boyanırdı —
oysa künyelerin `t:`si 1649-1899 arasında biter ⇒ `§3.5` HAYALET
DEVLET, bu projenin denetimin GÖRMEDİĞİ hata sınıfı.

Bu araç her zinciri kapatır ve HER DÖNEMİ künyenin KENDİ ÖMRÜNE
karşı sınar.

PROJE KÖKÜNDEN:  py denetim/ARAC-KAMERIKA-0903-zincir.py
"""
import io
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

UFUK_SON = "1923-10-29"
KANADA = "1867-07-01"
PARIS = "1763-02-10"
ALASKA = "1867-10-18"
ABD_BAG = "1783-09-03"
GRONLAND = "1721-01-01"

def gun(v):
    """'987-01-01' ve '1600-01-01' DOĞRU sıralansın diye demet kıyası.

    🔴 M-2396: sözlüksel kıyasta '1600-01-01' < '987-01-01' çünkü
    '1' < '9'. `fransa` f=987 ve bu aletin ilk sürümü tam bu yüzden
    Yeni Fransa'nın 20 kaydını SAHTE HAYALET diye bildirdi.
    """
    p = v.split("-")
    return (int(p[0]), int(p[1]), int(p[2]))


# ---- künye ömürleri: JS'i KENDİ yorumlayıcısıyla oku (§11) ----
BURA = os.path.dirname(os.path.abspath(__file__))
if not os.path.exists(os.path.join(BURA, "_omur.json")):
    os.system('node "%s" > "%s"' % (os.path.join(BURA, "ARAC-KAMERIKA-0903-omur.js"),
                                    os.path.join(BURA, "_omur.json")))
OMUR = {k: tuple(v) for k, v in json.load(
    io.open(os.path.join(BURA, "_omur.json"), encoding="utf-8-sig")).items()}

for d in ("denetim/KUNYE-KAMERIKA-0903.json",
          "denetim/KUNYE-KAMERIKA-0903-parti2.json",
          "denetim/KUNYE-KAMERIKA-0903-parti3.json",
          "denetim/KUNYE-KAMERIKA-0903-parti4.json"):
    for k in json.load(io.open(d, encoding="utf-8")):
        OMUR[k["id"]] = (k["f"], k["t"])
# koordinatörün kesecegi düzeltme — reçetede istendi
OMUR["ingiliz-kuzey-amerika"] = (PARIS, KANADA)
print("künye ömrü bilinen: %d" % len(OMUR))

ADAY = json.load(io.open("denetim/ADAY-KAMERIKA-0903-kunyeli.json",
                         encoding="utf-8"))
print("aday: %d" % len(ADAY))


def kanada_mi(a):
    """Nokta bugünkü Kanada/Newfoundland alanında mı (kaba kutu)."""
    la, lo = a["lat"], a["lon"]
    if lo < -141.0:
        return False                       # Alaska
    if la >= 60.0:
        return True                        # Yukon · NWT · Nunavut
    if la >= 49.0 and lo <= -95.0:
        return True                        # batı Kanada
    if la >= 45.5 and -95.0 < lo <= -52.0:
        return True                        # doğu Kanada · Newfoundland
    return False


def alaska_mi(a):
    return a["lon"] < -141.0 and a["lat"] > 54.0


def gronland_mi(a):
    return a["lon"] > -60.0 and a["lat"] > 59.0


# ---- yerli künyenin ARDILI ----
def ardil(a, kunye, bit):
    """`kunye` `bit` gününde biterken toprağı kim devralır?"""
    z = []
    if kunye == "inuit":
        if alaska_mi(a):
            return [("abd", ALASKA)]
        if gronland_mi(a):
            return [("danimarka", GRONLAND)]
    if kunye in ("aleut", "alutiiq"):
        # Rus-Amerika Şirketi 1784-1867, sonra ABD — `rusya` künyesi
        # 1917'ye kadar sürer ama ALASKA 1867'de elden çıktı
        return [("rusya", bit), ("abd", ALASKA)]
    if alaska_mi(a) or kunye in ("tlingit", "yupik"):
        return [("abd", max(bit, ALASKA))]
    if kanada_mi(a):
        if bit < PARIS:
            z.append(("fransa", bit))
            z.append(("ingiliz-kuzey-amerika", PARIS))
            z.append(("kanada", KANADA))
        elif bit < KANADA:
            z.append(("ingiliz-kuzey-amerika", bit))
            z.append(("kanada", KANADA))
        else:
            z.append(("kanada", bit))
        return z
    # ABD ya da Meksika
    if a["lat"] < 32.5 and a["lon"] < -97.0:
        return [("yeni-ispanya", bit)] if bit < "1821-09-27" else \
               [("meksika", bit)]
    if bit < ABD_BAG:
        z.append(("ingiltere", bit))
        z.append(("abd", ABD_BAG))
    else:
        z.append(("abd", bit))
    return z


# ---- SELEF / HALEF haritası — bir künye dönemi ömrünün dışına
# taştığında araya kimin gireceği. Hepsi ölçülmüş kırılma günleri.
SELEF = {
    "ingiliz-kuzey-amerika": "ingiltere",     # künye 1763-02-10'da başlar
    "kanada": "ingiliz-kuzey-amerika",        # künye 1867-07-01'de başlar
    "abd": "ingiltere",                       # künye 1776-07-04'te başlar
    "meksika": "yeni-ispanya",                # künye 1821-09-27'de başlar
    "teksas-cumhuriyeti": "meksika",
    # 🔴 `yeni-ispanya` künyesi 1535-04-17'de (genel valilik) başlar, ama
    # Küba 1514 · Pánuco 1522 · Trujillo 1525 DAHA ERKEN kuruldu ⇒ arada
    # 10-21 yıllık sahipsizlik doğuyordu. Selefi `ispanya` künyesidir ve
    # atlasta ZATEN 43 nokta onu kullanıyor (Baracoa · Havana · Caparra…).
    "yeni-ispanya": "ispanya",
}
HALEF = {
    "yeni-ispanya": "meksika",                # künye 1821-09-27'de biter
    "fransa": "yeni-ispanya",                 # 1762 Fontainebleau: Luizyana
    "ingiliz-kuzey-amerika": "kanada",
    "ingiltere": "abd",
    "inuit": "kanada",
    "dene": "kanada",
    "kri": "kanada",
    "metis": "kanada",
    "ojibwe": "ingiliz-kuzey-amerika",
    "hayda": "ingiliz-kuzey-amerika",
    "vendat": "fransa",
    "beothuk": "ingiliz-kuzey-amerika",
    "mikmak": "ingiltere",
    "maliseet": "ingiltere",
    "abenaki": "ingiltere",
    "aleut": "rusya",
    "alutiiq": "rusya",
    "tlingit": "abd",
    "yupik": "abd",
    "lakota": "abd", "navaho": "abd", "nez-perce": "abd",
    "sosoni": "abd", "ute": "abd", "mandan": "abd", "hidatsa": "abd",
    "karga": "abd", "pavni": "abd", "wicita": "abd", "cikasav": "abd",
    "savni": "abd", "miami": "abd", "sauk": "abd",
    "cherokee": "abd", "choctaw": "abd", "creek-konfederasyonu": "abd",
    "powhatan": "ingiltere", "natchez": "fransa",
    "haudenosaunee": "ingiltere", "komanci": "abd",
    "apaci-ovalar": "yeni-ispanya", "pueblo-bagimsizligi": "yeni-ispanya",
}

YERLI_KUNYE = {k["id"] for d in ("denetim/KUNYE-KAMERIKA-0903.json",
                                 "denetim/KUNYE-KAMERIKA-0903-parti2.json",
                                 "denetim/KUNYE-KAMERIKA-0903-parti3.json",
                                 "denetim/KUNYE-KAMERIKA-0903-parti4.json")
               for k in json.load(io.open(d, encoding="utf-8"))} | {
    "haudenosaunee", "cherokee", "choctaw", "powhatan", "natchez",
    "creek-konfederasyonu", "komanci", "apaci-ovalar",
    "pueblo-bagimsizligi", "cahokia", "zapotek-krallik"}
YERLI_KUNYE -= {"kanada"}

cikti = []
uyari = []
kova = {"yesil": 0, "sari": 0}
for a in ADAY:
    z = [(p["d"], p["f"]) for p in a.get("s_oneri", [])]
    if not z:
        uyari.append("%-44s zincir YOK" % a["ad"])
        continue
    # yerli künye ise ARDILINI ekle
    son_k, son_f = z[-1]
    if son_k in YERLI_KUNYE and son_k in OMUR:
        bit = OMUR[son_k][1]
        if bit < UFUK_SON:
            for k2, f2 in ardil(a, son_k, bit):
                if f2 >= son_f and (not z or k2 != z[-1][0]):
                    z.append((k2, f2))
    # 🔴 KURULUŞTAN ÖNCEKİ DÖNEMLERİ AT: bir nokta `kur:`undan önce
    # yoktur, ve zincirin ondan önce başlaması `kur:`u yalanlar.
    # (Prairie du Chien 1781'de kuruldu ama zinciri 1763'ten başlıyordu:
    #  Paris günü sabit, kuruluş günü ondan SONRA.)
    kur = a.get("f")
    if kur:
        z = [(k, f) for (k, f) in z if gun(f) >= gun(kur)] or [z[-1]]
        if z and gun(z[0][1]) > gun(kur):
            z[0] = (z[0][0], kur)

    # dönemleri kapat
    donem = []
    for i, (k, f) in enumerate(z):
        t = z[i + 1][1] if i + 1 < len(z) else UFUK_SON
        if gun(f) >= gun(t):
            continue
        donem.append({"d": k, "f": f, "t": t})

    # 🔧 ONARIM — dönemi künyenin ÖMRÜNE oturt
    # Bir dönem künyeden ERKEN başlıyorsa, araya SELEFİ girer.
    # Geç bitiyorsa, sonraki dönem künyenin bitiminde başlar.
    onarik = []
    for p in donem:
        if p["d"] not in OMUR:
            onarik.append(p)
            continue
        kf, kt = OMUR[p["d"]]
        if gun(p["f"]) < gun(kf) and gun(kf) < gun(p["t"]):
            # 🔴 BEYANLI kayıtta selef ARANMAZ: o boşluk kaza değil,
            # `kasitli_bosluk` + `bos:` ile BEYAN edilecek bir penceredir.
            # Selef koymak beyanı siler ve boşluğu SAHTE bir sahiple
            # doldurur — `§3.5.1`: hayalet yok olmaz, TARAF DEĞİŞTİRİR.
            sel = None if a.get("erken_bos") else SELEF.get(p["d"])
            if sel:
                onarik.append({"d": sel, "f": p["f"], "t": kf})
                p = dict(p, f=kf)
            else:
                p = dict(p, f=kf)          # selefi yok: kırp, uyarı kalsın
        if gun(p["t"]) > gun(kt):
            p = dict(p, t=kt)
            hal = HALEF.get(p["d"])
            if hal and gun(kt) < gun(UFUK_SON):
                onarik.append(p)
                p = {"d": hal, "f": kt, "t": UFUK_SON}
        if gun(p["f"]) < gun(p["t"]):
            onarik.append(p)
    # ardışık aynı kimliği birleştir
    donem = []
    for p in onarik:
        if donem and donem[-1]["d"] == p["d"]:
            donem[-1]["t"] = p["t"]
        else:
            donem.append(p)
    # 🔴 HAYALET SINAVI — her dönem künyenin ÖMRÜ içinde mi
    for p in donem:
        if p["d"] not in OMUR:
            uyari.append("%-44s %-24s KÜNYE YOK" % (a["ad"], p["d"]))
            continue
        kf, kt = OMUR[p["d"]]
        if gun(p["f"]) < gun(kf) or gun(p["t"]) > gun(kt):
            uyari.append("%-44s %-24s HAYALET: dönem %s..%s · künye %s..%s"
                         % (a["ad"], p["d"], p["f"], p["t"], kf, kt))
    # 🔴 ZİNCİR TUTARLILIK SINAVI — hayalet sınavından AYRI bir soru.
    # Hayalet: "her dönem KÜNYESİNİN ömrü içinde mi"
    # Tutarlılık: "zincirin KENDİSİ sağlam mı" (§8: ters/sıfır dönem yok,
    # ve Değişmez 1: dönemler arası boşluk yok)
    # ⚠️ İlk sürümde YALNIZ hayalet soruluyordu ve üretilen dosya
    #    4 ters dönem + 3 boşluk taşıyordu — kusuru ancak çıktıyı
    #    `node` ile eval edince gördüm. İki soru ayrıdır ve ikisi de gerekir.
    for i, p in enumerate(donem):
        if gun(p["f"]) >= gun(p["t"]):
            uyari.append("%-44s %-24s TERS/SIFIR dönem %s..%s"
                         % (a["ad"], p["d"], p["f"], p["t"]))
        if i and donem[i - 1]["t"] != p["f"]:
            uyari.append("%-44s %-24s ZİNCİR BOŞLUĞU %s -> %s"
                         % (a["ad"], p["d"], donem[i - 1]["t"], p["f"]))

    a2 = dict(a)
    a2.pop("s_oneri", None)
    a2["s"] = donem
    cikti.append(a2)
    kova["yesil" if a.get("f", "").endswith("-01-01") is False else "sari"] += 1

json.dump(cikti, io.open("denetim/ZINCIR-KAMERIKA-0903.json", "w",
                         encoding="utf-8"), ensure_ascii=False, indent=1)

print("\nzincir yazılan: %d" % len(cikti))
print("dönem toplamı : %d" % sum(len(a["s"]) for a in cikti))
print("kur: günü KAYNAKLI (gün hassas): %d · ORTAK TAKVİM (YYYY-01-01): %d"
      % (kova["yesil"], kova["sari"]))
print("\n--- 🔴 HAYALET / EKSİK SINAVI ---")
if uyari:
    print("🔴 %d UYARI" % len(uyari))
    for u in uyari[:60]:
        print("   " + u)
    if len(uyari) > 60:
        print("   ... +%d" % (len(uyari) - 60))
else:
    print("🟢 TEMİZ — hiçbir dönem künyesinin ömrü dışına taşmıyor")
print("\n-> denetim/ZINCIR-KAMERIKA-0903.json")
