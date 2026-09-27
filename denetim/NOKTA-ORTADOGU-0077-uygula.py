# -*- coding: utf-8 -*-
"""NOKTA-ORTADOGU-0077 — koordinatör hükmü M-5238 ile yamaları UYGULAR.
  A  (Mısır 5)       UYGULA
  B1 (Sudan 39)      UYGULA
  B2 (kıyı 8)        7'si uygulanır (gün TDV sudan'dan, komşudan DEĞİL); Sevâkin BIRAKILIR
  C  (Katar dolgu)   yalnız 1913 s: ve 1916 isg: (TDV katar'dan doğrudan); 1871 v: BIRAKILIR
  D  (Qaţţīnah)      s/d Ceylanpınar'dan "gün komşudan" notuyla; isg BIRAKILIR (komşuda kaynaksız)
Her değişiklik kayıt metni içinde TAM BİR eşleşme ister; biri tutmazsa HİÇBİR dosya yazılmaz.
Kullanım: py denetim/NOKTA-ORTADOGU-0077-uygula.py [--yaz]   (varsayılan: kuru koşu)"""
import sys
import re
import json

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
YAZ = "--yaz" in sys.argv
D = r"C:\atlas\data\\"
metin = {}


def oku(dosya):
    if dosya not in metin:
        metin[dosya] = open(D + dosya, encoding="utf-8").read()
    return metin[dosya]


def kayit_araligi(dosya, ad):
    t = oku(dosya)
    bas = [m.start() for m in re.finditer(r'\{\s*"?ad"?\s*:\s*"' + re.escape(ad) + '"', t)]
    if len(bas) != 1:
        raise SystemExit("HATA %s: '%s' kaydı %d kez bulundu" % (dosya, ad, len(bas)))
    b = bas[0]
    m = re.compile(r'\n\s*\{\s*"?ad"?\s*:').search(t, b + 5)
    s = m.start() if m else len(t)
    return b, s


def P(f, t_, d):
    return r'\{\s*f:\s*"%s",\s*t:\s*"%s",\s*d:\s*"%s"\s*\}' % (f, t_, d)


def degistir(dosya, ad, desen, yeni, etiket):
    b, s = kayit_araligi(dosya, ad)
    t = oku(dosya)
    parca = t[b:s]
    es = list(re.finditer(desen, parca))
    if len(es) != 1:
        raise SystemExit("HATA %s / %s / %s: desen %d kez eşleşti" % (dosya, ad, etiket, len(es)))
    e = es[0]
    parca2 = parca[:e.start()] + yeni(e.group(0)) + parca[e.end():]
    metin[dosya] = t[:b] + parca2 + t[s:]
    print("  ✓ %-28s %-26s %s" % (dosya, ad[:26], etiket))


def js(s):
    return json.dumps(s, ensure_ascii=False)


K_MISIR = js("TDV `misir` (gövde okundu): \"İngiltere, 18 Aralık 1914'te tek taraflı olarak Osmanlı hükümranlık "
             "haklarını kaldırıp Mısır'ı himayesine aldı\"; Sînâ yarımadası TDV'de Mısır'ın dört bölgesinden biri; "
             "TDV `suveys`: \"Mısır'ın diğer yerleri gibi kanal bölgesi de\". Sultanlık→Krallık 1922-03-15 = künye "
             "misir-kralligi f (unvan değişikliği, Kahire notu). NOKTA-ORTADOGU-0077 · YAMA A · M-5238")
K_SUDAN = js("TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak "
             "hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. "
             "NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238")
K_KIYI = js("Gün TDV `sudan`dan (kapsayıcı madde, Sudan geneli: 19 Ocak 1899 condominium) — KOMŞUDAN DEĞİL. "
            "Kıyıya özel katılış günü okunan kaynakta BULUNAMADI. NOKTA-ORTADOGU-0077 · YAMA B2 · M-5238")
K_KATAR = js("TDV `katar` (gövde okundu): \"29 Temmuz 1913'te Londra'da imzalanan ... antlaşmanın ilgili maddesinde "
             "Osmanlı Devleti Katar yarımadası üzerindeki bütün taleplerinden feragat etti\" · \"3 Kasım 1916'da Katar "
             "Emîri Abdullah ile ... himaye antlaşması\". İki gün de TDV'den DOĞRUDAN (komşudan değil). 1871 tâbilik "
             "dönemi YAZILMADI: TDV yalnız 'sonbahar' diyor, Doha'nın 1871-09-20'si kendi kaynağına değil bir "
             "kronoloji maddesine hizalı (§4 ① sağlanmıyor) — bulunamadı. NOKTA-ORTADOGU-0077 · YAMA C · M-5238")

# ---- A: Mısır 5 ------------------------------------------------------------------
for dosya, ad in (("yerlesimler.js", "Süveyş"), ("yerlesimler.js", "Sina güneyi"),
                  ("yerlesimler_afrika.js", "Tûr (Sînâ)"), ("yerlesimler_afrika.js", "Sefâce"),
                  ("yerlesimler_afrika.js", "Kusayr")):
    degistir(dosya, ad, P("1914-12-18", "1923-10-29", "ingiltere"),
             lambda g: ('{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi",kaynak:%s},'
                        '{f:"1922-03-15",t:"1923-10-29",d:"misir-kralligi",kaynak:%s}') % (K_MISIR, K_MISIR),
             "A s: ingiltere → sultanlık/krallık")
    if ad != "Sina güneyi":
        degistir(dosya, ad, r'\{\s*f:\s*"1882-09-13",\s*t:\s*"1914-12-18",\s*d:\s*"ingiltere",\s*kaynak:\s*"urabi-pasa"\s*\}',
                 lambda g: g + ',{f:"1914-12-18",t:"1923-10-29",d:"ingiltere",kaynak:%s}' % K_MISIR,
                 "A isg: +1914-1923 ingiltere")
        degistir(dosya, ad, r'k:\s*"Kavalalı hanedanı"\s*\}',
                 lambda g: 'k:"Kavalalı hanedanı",kid:"misir-kavalali",statu:"vassal"}', "A v: kid")
    else:
        # Sina güneyi: isg alanı YOK, iki v kaydı var
        degistir(dosya, ad, r'k:\s*"Mısır valiliği \(Kavalalı hanedanı\)"\s*\}',
                 lambda g: 'k:"Mısır valiliği (Kavalalı hanedanı)",kid:"misir-kavalali",statu:"vassal"}', "A v1: kid")
        degistir(dosya, ad, r'k:\s*"Mısır Hidivliği"\s*\}',
                 lambda g: 'k:"Mısır Hidivliği",kid:"misir-kavalali",statu:"vassal"}', "A v2: kid")

# ---- B1 / B2: Sudan -----------------------------------------------------------------
yama = json.load(open(r"C:\atlas\denetim\NOKTA-ORTADOGU-0077-YAMA.json", encoding="utf-8"))
b1 = b2 = 0
for o in yama["oneriler"]:
    n = o.get("not") or ""
    if not (n.startswith("B1") or n.startswith("B2")):
        continue
    eski = [k for k in o["eski"] if k.get("d") == "ingiltere" and (k.get("t") or "") >= "1923"]
    assert len(eski) == 1, o["ad"]
    f = eski[0]["f"]
    if n.startswith("B1"):
        degistir(o["dosya"], o["ad"], P(f, "1923-10-29", "ingiltere"),
                 lambda g, f=f: '{f:"%s",t:"1923-10-29",d:"ingiliz-sudani",kaynak:%s}' % (f, K_SUDAN),
                 "B1 %s ingiltere → ingiliz-sudani" % f)
        b1 += 1
    else:
        if o["ad"] == "Sevâkin":
            print("  · %-28s %-26s B2 BIRAKILDI (Sevâkin'in katılış günü bulunamadı)" % (o["dosya"], o["ad"]))
            continue
        # enklav vb. ek alan taşıyan kayıt olursa desen tutmaz ve betik durur — bilerek
        degistir(o["dosya"], o["ad"], P(f, "1923-10-29", "ingiltere"),
                 lambda g, f=f: ('{f:"%s",t:"1899-01-19",d:"ingiltere"},'
                                 '{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:%s}') % (f, K_KIYI),
                 "B2 %s → 1899 bölündü" % f)
        b2 += 1

# ---- C: Katar dolgusu -------------------------------------------------------------
degistir("yerlesimler_ek_korfez.js", "Katar Yarımadası (iç, dolgu)", r'd:\[\],\s*s:\[\],',
         lambda g: ('d:[], s:[{f:"1913-07-29",t:"1923-10-29",d:"katar",kaynak:%s}],\n'
                    '  isg:[{f:"1916-11-03",t:"1923-10-29",d:"ingiltere",kaynak:%s}],') % (K_KATAR, K_KATAR),
         "C s:1913 katar + isg:1916")

# ---- D: Qaţţīnah (JSON satırı) -----------------------------------------------------
dosya = "yerlesimler_sinir_guney.js"
b, s = kayit_araligi(dosya, "Qaţţīnah")
t = oku(dosya)
satir = t[b:s].rstrip()
son = ""
if satir.endswith(","):
    satir, son = satir[:-1], ","
y = json.loads(satir)
assert [k for k in y["s"] if k["f"] == "1918-10-26"], "Qaţţīnah beklenen dönemi yok"
NOT_D = ("NOKTA-ORTADOGU-0077 · YAMA D · M-5238: eski s: fransa-cumhuriyet 1918-10-26 (Halep'in işgal günü; "
         "Ras'ülayn için kaynak YOK) kaldırıldı. Gün komşudan: Ceylanpınar (4,3 km, aynı süreç) · kaynağı: "
         "'ankraj Mardin — külliyattaki zincir' (d: → 1920-04-23 tbmm-turkiye). 1921-10-20 bu kaydın KENDİ "
         "kaynağından (Ankara İtilafnamesi md. 8). Ceylanpınar'ın isg: fransa kaydı DEVRALINMADI: onun kaynağı "
         "'bulunamadı — KAYNAKSIZ' (§4 ① sağlanmıyor).")
y["s"] = [k for k in y["s"] if k["t"] <= "1516-08-24"] + [
    {"f": "1920-04-23", "t": "1921-10-20", "d": "tbmm-turkiye", "kaynak": "gün komşudan: Ceylanpınar · ankraj Mardin (külliyattaki zincir)"},
    {"f": "1921-10-20", "t": "1923-10-29", "d": "suriye-lubnan-mandasi", "kaynak": "Ankara İtilafnamesi md. 8 (20.10.1921) — kaydın kendi kaynağı"}]
y["d"] = [{"f": "1516-08-24", "t": "1920-04-23", "kaynak": "gün komşudan: Ceylanpınar · ankraj Mardin (külliyattaki zincir)"}]
y["yama_notu"] = NOT_D
yeni = json.dumps(y, ensure_ascii=False, separators=(",", ":")) + son
metin[dosya] = t[:b] + yeni + t[b + len(t[b:s].rstrip()):]
print("  ✓ %-28s %-26s D s/d Ceylanpınar zinciri" % (dosya, "Qaţţīnah"))

print("B1 %d · B2 %d" % (b1, b2))
if YAZ:
    for dosya, icerik in metin.items():
        open(D + dosya, "w", encoding="utf-8", newline="").write(icerik)
    print("YAZILDI:", ", ".join(sorted(metin)))
else:
    print("KURU KOŞU — hiçbir dosya yazılmadı")
