# KASA · 4 Ekim 2026 · YALNIZ OLCUM: KASA-KAYNAKSIZ-1004'teki 100 "devralma
# ibaresi" kaydinin ELLE okunmus siniflamasi + komsu zincirinin derinligi/ucu.
# Komsu adlari ve devralinan alan kaynak: metinleri tek tek okunarak yazildi
# (regex degil). Ciktisi: denetim/KASA-ZINCIR-1004.json
# Kullanim: py denetim/ARAC-KASA-ZINCIR-1004.py denetim/KASA-ZINCIR-1004.json
import sys, os, re, json
AR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "arac")
sys.path.insert(0, AR)
os.chdir(AR)
import girdi

h = {y["ad"]: y for y in girdi.yukle(sessiz=True)}

# ad -> (devralinan alan, [komsu kayit adlari])
#   DEVLET/YIL : donem zinciri (devlet ve/veya yil) komsudan  -> §4 IZINSIZ
#   YIL        : devlet kendi kaynagindan, yil komsudan       -> §4 IZINSIZ
#   GUN        : yil/olay kendi kaynagindan, gun komsudan     -> §4 SARTLI IZIN
#   OLAY-GUNU  : gun kulliyatin olaylar.js maddesinden (komsu kayit degil)
#   KUNYE      : gun/pencere devletler.js kunyesinden (konvansiyon)
#   KADEME     : yer_yama_kademe.js'ten k:/m: devralma, s: ile ilgisiz
#   YANLIS     : ibare var ama devralma yok
E = {
 "Bitlis": ("DEVLET/YIL", ["Van"]),
 "Malatya": ("YIL", ["Sivas", "Kayseri"]),
 "Drama": ("GUN", ["Kavala", "Praviște (Eleftheroupoli)", "Serez"]),
 "Dimetoka": ("GUN", ["Sofulu"]),
 "Niş": ("GUN", []),
 "Soçi (Sâşe)": ("DEVLET/YIL", ["Anapa"]),
 "Tuapse": ("DEVLET/YIL", ["Anapa"]),
 "Maykop (Çerkezya)": ("DEVLET/YIL", ["Anapa"]),
 "Derne": ("OLAY-GUNU", []),
 "Agadez": ("KUNYE", []),
 "Ferecik (Feres)": ("GUN", ["Sofulu", "Dedeağaç"]),
 "Gümülcine": ("GUN", ["Sofulu", "Dedeağaç"]),
 "Kirmanşah": ("YANLIS", []),
 "Divriği": ("YIL", ["Sivas", "Kayseri"]),
 "Arapkir": ("DEVLET/YIL", ["Divriği", "Sivas", "Malatya"]),
 "Kragujevac": ("GUN", ["Niş", "Vidin"]),
 "Çaçak": ("GUN", ["Niş", "Vidin"]),
 "Ceylanpınar": ("DEVLET/YIL", ["Mardin"]),
 "Arpaçay (Akyaka)": ("DEVLET/YIL", ["Revan"]),
 "Digor": ("DEVLET/YIL", ["Revan"]),
 "Iğdır": ("DEVLET/YIL", ["Revan"]),
 "Gümrü (Aleksandropol)": ("DEVLET/YIL", ["Revan"]),
 "Eçmiyadzin": ("DEVLET/YIL", ["Revan"]),
 "Çaldıran": ("GUN", ["Van"]),
 "Özalp (Saray)": ("DEVLET/YIL", ["Van"]),
 "Başkale": ("GUN", ["Van"]),
 "Yüksekova (Gever)": ("DEVLET/YIL", ["Çölemerik (Hakkâri)"]),
 "Jasenovaç (Jasenovac)": ("YIL", ["Bosna Dubiçası"]),
 "Bosna Brod'u (Bosanski Brod)": ("YIL", ["Bosna Dubiçası"]),
 "Ba'lebek (Baalbek)": ("GUN", ["Şam"]),
 "Sûr (Tyre) — Lübnan": ("GUN", ["Şam"]),
 "Yedisan bozkırı": ("OLAY-GUNU", []),
 "Şeyhrumi (Yücelen)": ("GUN", ["Van"]),
 "Şeyh Salû-yi Ulyâ": ("DEVLET/YIL", ["Mâku", "Kotur"]),
 "Qaţţīnah": ("DEVLET/YIL", ["Ceylanpınar", "Rakka"]),
 "Ḩīmū": ("DEVLET/YIL", ["Nusaybin", "Malikiye (Derik)"]),
 "Jadlā’": ("DEVLET/YIL", ["Akçakale", "Ayn el-Arab (Kobani)"]),
 "Mercihamis (Yurtbağı)": ("DEVLET/YIL", ["Birecik"]),
 "Sincan": ("DEVLET/YIL", ["İskenderun"]),
 "Cibri (Güçlü)": ("DEVLET/YIL", ["Cizre"]),
 "Babū": ("DEVLET/YIL", ["Nusaybin", "Malikiye (Derik)"]),
 "Kilise": ("DEVLET/YIL", ["Çölemerik (Hakkâri)"]),
 "Gōrabī": ("DEVLET/YIL", ["Şemdinli (Şemdinni)", "Rewândiz"]),
 "Tirwānīsh": ("DEVLET/YIL", ["İmâdiye (Amêdî)"]),
 "Balıklı": ("DEVLET/YIL", ["Şemdinli (Şemdinni)"]),
 "Cumai (Birlikköy)": ("DEVLET/YIL", ["Silopi"]),
 "Uluköy (Akçadam)": ("DEVLET/YIL", ["Uzunköprü"]),
 "Stérna": ("DEVLET/YIL", ["Orestiada (Kumçiftliği)"]),
 "Távri": ("DEVLET/YIL", ["Ferecik (Feres)"]),
 "Küfkaynapınarı (Azatlı)": ("DEVLET/YIL", ["Havsa"]),
 "Karpuzlu (Yenikarpuzlu)": ("DEVLET/YIL", ["İpsala"]),
 "Malak Dervent (Lalkovo)": ("DEVLET/YIL", ["Elhova (Elhovo)"]),
 "Umur Fakih (Fakia)": ("DEVLET/YIL", ["Elhova (Elhovo)"]),
 "Zazalo": ("DEVLET/YIL", ["Ahıska"]),
 "Murvaneti": ("DEVLET/YIL", ["Batum"]),
 "Ts’q’altbila": ("DEVLET/YIL", ["Ahıska"]),
 "Saylıca": ("DEVLET/YIL", ["Şavşat"]),
 "Makhalak’auri": ("DEVLET/YIL", ["Hulo (Acara)"]),
 "Norapat": ("DEVLET/YIL", ["Eçmiyadzin"]),
 "Beri": ("DEVLET/YIL", ["Iğdır"]),
 "Kliçatak (Suser)": ("DEVLET/YIL", ["Gümrü (Aleksandropol)"]),
 "Küçükperveli": ("DEVLET/YIL", ["Arpaçay (Akyaka)"]),
 "Lubnı": ("DEVLET/YIL", ["Poltava"]),
 "Darende": ("DEVLET/YIL", ["Malatya"]),
 "Oodnadatta": ("YANLIS", []),
 "Meekatharra": ("YANLIS", []),
 "Sîva (Siwa)": ("DEVLET/YIL", ["Dâhile", "Hârice", "Ferâfire", "Bahriye"]),
 "Braslav (Bratslav)": ("GUN", ["Vinnitsa"]),
 "Berdiçev (Berdychiv)": ("YIL", ["Jitomir"]),
 "Bayburt": ("KUNYE", []),
 "Dera Gazi Han": ("KUNYE", []),
 "Dera İsmail Han": ("KUNYE", []),
 "Chenzhou (Hunan)": ("GUN", ["Hengyang"]),
 "Şelon havzası (Soltsı)": ("DEVLET/YIL", ["Novgorod", "Staraya Russa"]),
 "Murska Sobota": ("DEVLET/YIL", ["Kanije", "Varaždin"]),
 "Filorina (Florina)": ("GUN", ["Kesriye", "Manastır", "Vodina"]),
 "Vanimo": ("GUN", ["Herbertshöhe", "Madang"]),
 "Garapan (Saipan)": ("GUN", ["Hagåtña"]),
 "Whanganui": ("KUNYE", []),
}
# kaynak: alani DOLU ama devralinan 1281-1918 zincirini KAPSAMIYOR (elle okundu)
ZAYIF = {
 "Şam": "yalniz 1920 Meysalun gunu", "İskenderun": "yalniz 1920 Meysalun gunu",
 "Rakka": "yalniz 1920 Meysalun gunu", "Ayn el-Arab (Kobani)": "yalniz 1920 Meysalun gunu",
 "Şemdinli (Şemdinni)": "GeoNames konum, tarih kaynagi degil",
}
KADEME_IBARE = "kademe yamasından DEVRALINDI"

def bul(n):
    if n in h:
        return n
    alt = [a for a in h if a.split(" (")[0] == n or a.startswith(n + " ")
           or n in re.findall(r"\(([^)]+)\)", a)]
    return alt[0] if len(alt) == 1 else (None if not alt else alt)

def durum(ad):
    y = h[ad]
    k = (y.get("kaynak") or "").strip()
    dk = sum(1 for p in (y.get("s") or []) if p.get("kaynak"))
    if ad in E and E[ad][0] in ("DEVLET/YIL", "YIL", "GUN") and E[ad][1]:
        return "DEVRALAN", k, dk
    if not k and not dk:
        return "BOS", k, dk
    if not k and dk:
        return "YALNIZ-DONEM", k, dk
    if ad in ZAYIF:
        return "ZAYIF:" + ZAYIF[ad], k, dk
    if re.fullmatch(r"[a-z0-9\-]+", k):
        return "ZAYIF:yalniz slug", k, dk
    return "KAYNAKLI", k, dk

def uc(ad, yol, out):
    st, k, dk = durum(ad)
    if st != "DEVRALAN" or ad in yol:
        out.append((yol + [ad], st))
        return
    for n in E[ad][1]:
        b = bul(n)
        if isinstance(b, str):
            uc(b, yol + [ad], out)
        else:
            out.append((yol + [ad, f"{n}?"], "BULUNAMADI" if b is None else f"BELIRSIZ:{b[:3]}"))

d = json.load(open("../denetim/KASA-KAYNAKSIZ-1004.json", encoding="utf-8"))
satir = []
for r in d["devralan"]:
    ad = r["ad"]
    y = h[ad]
    if KADEME_IBARE in (y.get("kaynak") or ""):
        satir.append(dict(ad=ad, dosya=y["_kaynak"], alan="KADEME", komsu=[], zincir=[]))
        continue
    if ad not in E:
        satir.append(dict(ad=ad, dosya=y["_kaynak"], alan="OKUNMADI", komsu=[], zincir=[]))
        continue
    alan, kom = E[ad]
    yollar = []
    if kom:
        uc(ad, [], yollar)
    satir.append(dict(ad=ad, dosya=y["_kaynak"], alan=alan, komsu=kom,
                      zincir=[dict(yol=" ← ".join(p), derinlik=len(p) - 1, uc=s) for p, s in yollar]))
json.dump(satir, open(sys.argv[1], "w", encoding="utf-8"), ensure_ascii=False, indent=1)
from collections import Counter
print(Counter(s["alan"] for s in satir))
print("uc:", Counter(z["uc"] for s in satir for z in s["zincir"]))
