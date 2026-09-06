# -*- coding: utf-8 -*-
"""🅑 YAMA ÜRETECI — `v:` donemlerine `kid:` ve `statu:` ekler.

Emre 🅑'yi sectti (6 Eylul 2026). Bu alet YAMA URETIR, veri YAZMAZ;
yazmayi `arac/_sahiplik_uygula.py` yapar (projenin kendi uygulayicisi —
`js_yaz` jeneriktir, sozlukteki HER anahtari yazar, olculdu).

IKI KURAL, ve ikincisi bu gece bir ihlali ONLEDI:
  ① `statu` HER `v:` donemine yazilir — katmanin TANIMI zaten tabiiyet.
     Deger tek: "vassal". Inceltme (ozerk/himaye/haracguzar) KAYNAKLI
     olarak, AYRI IS. Terimi `k` metninden CIKARMAK DENENMEDI:
     `VERI-YAPISI.md:399` o yolu adiyla yasakliyor.
  ② `kid` YALNIZ kunye penceresi donemi KAPSIYORSA yazilir (`§3.5.0`).
     Olculdu: 279 kapsiyor · 22 ASIYOR. O 22'ye `kid` yazmak `4c`/`4d`
     ihlali dogururdu — ve ucu de GERCEK bir tarih sorusu (eflak/bogdan
     1859 birlesmesi · erdel 1541 vs 1570 Speyer · Sofya Ayastefanos).

CIKTI: denetim/YAMA-VASSAL-KID-0906.json
"""
import io, os, sys, json

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

import importlib.util as _iu
_sp = _iu.spec_from_file_location(
    "arac_normal", os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py"))
_m = _iu.module_from_spec(_sp)
_sp.loader.exec_module(_m)
norm = _m.norm


def a(s):
    for x, y in [("İ","I"),("ı","i"),("ş","s"),("Ş","S"),("ü","u"),("Ü","U"),
                 ("ö","o"),("Ö","O"),("ç","c"),("Ç","C"),("ğ","g"),("Ğ","G"),
                 ("â","a"),("î","i"),("û","u"),("’","'"),("Â","A")]:
        s = s.replace(x, y)
    return "".join(c if ord(c) < 256 else "?" for c in s)

def p(s=""):
    sys.stdout.write(a(str(s)) + "\n")


# ── ESLEME — denetim/ESLEME-VASSAL-KUNYE-0906.md §① ────────────────────
TAM = {
    "Mısır (Kavalalı)": "misir-kavalali",
    "Kavalalı hânedanı": "misir-kavalali",
    "Mısır (İbrahim Paşa)": "misir-kavalali",
    "Mısır valiliği (Kavalalı hânedanı)": "misir-kavalali",
    "Mısır Hidivliği": "misir-kavalali",
    "Cezayir Ocaklığı (dayı idaresi)": "cezayir-ocagi",
    "Eflak Voyvodalığı": "eflak",
    "Bulgaristan Prensliği": "bulgaristan-prensligi",
    "Kırım Hanlığı": "kirim",
    "Sırbistan Prensliği": "sirbistan-prensligi",
    "Erdel Prensliği": "erdel",
    "İmereti krallığı (tâbi)": "imereti",
    "Dubrovnik Cumhuriyeti (haraçgüzar)": "dubrovnik",
    "Crnojević Zetası (Osmanlı tâbii)": "zeta",
}
ONEK = [
    ("Boğdan Voyvodalığı", "bogdan"),
    ("Trablusgarp Ocaklığı", "trablusgarp-ocagi"),
    ("Şarkî Rumeli", "sarki-rumeli"),
    ("Hacıemiroğulları", "haciemir"),
    ("Şabah emirliği", "kuveyt"),
    ("Sânî emirliği", "katar"),
]
_TAM_N = {norm(k): v for k, v in TAM.items()}
_ONEK_N = [(norm(o), v) for o, v in ONEK]

def kid_bul(k):
    if not k:
        return None
    nk = norm(k)
    if nk in _TAM_N:
        return _TAM_N[nk]
    for onek, kid in _ONEK_N:
        if nk.startswith(onek):
            return kid
    return None


D = girdi.oku_devletler()
KUNYE = {}
for x in (D.values() if isinstance(D, dict) else D):
    if x.get("id"):
        KUNYE[x["id"]] = (x.get("f") or "?", x.get("t") or "?")

Y = girdi.yukle(sessiz=True)

kayitlar = []
say = {"statu": 0, "kid": 0, "asan": 0, "eslesmeyen": 0, "ksiz": 0}
asanlar = []

for y in Y:
    v = y.get("v")
    if not v:
        continue
    yeni = []
    degisti = False
    for d in v:
        o = dict(d)                      # mevcut alanlar AYNEN korunur
        if "statu" not in o:
            o["statu"] = "vassal"
            say["statu"] += 1
            degisti = True
        k = o.get("k")
        if not k:
            say["ksiz"] += 1
        else:
            kid = kid_bul(k)
            if kid is None:
                say["eslesmeyen"] += 1
            elif kid not in KUNYE:
                say["eslesmeyen"] += 1
            else:
                kf, kt = KUNYE[kid]
                f, t = o.get("f") or "?", o.get("t") or "?"
                if f >= kf and t <= kt:
                    if "kid" not in o:
                        o["kid"] = kid
                        say["kid"] += 1
                        degisti = True
                else:
                    say["asan"] += 1
                    asanlar.append((y.get("ad"), kid, f, t, kf, kt))
        yeni.append(o)
    if degisti:
        kayitlar.append({"ad": y.get("ad"), "v": yeni})

p("=" * 72)
p("🅑 YAMA URETILDI")
p("=" * 72)
p("  kayit          : %d" % len(kayitlar))
p("  `statu` eklendi: %d donem" % say["statu"])
p("  `kid`   eklendi: %d donem" % say["kid"])
p("  pencere ASAN   : %d  (kid YAZILMADI — 4c/4d ihlali olurdu)" % say["asan"])
p("  eslesmeyen `k` : %d" % say["eslesmeyen"])
p("  `k` bos        : %d" % say["ksiz"])
p("")
p("  ASAN ornekleri:")
for r in asanlar[:6]:
    p("    %-22s %-22s %s>%s  kunye %s>%s" % (a(str(r[0]))[:22], r[1], r[2], r[3], r[4], r[5]))

CIKTI = os.path.join(KOK, "denetim", "YAMA-VASSAL-KID-0906.json")
govde = {
    "_NOT": ("SECENEK 🅑 — `v:` donemlerine `kid:` (kunye kimligi) ve "
             "`statu:` (tabiiyet cinsi) eklenir. Uretici: "
             "denetim/ARAC-VASSAL-YAMA-URET-0906.py. Mevcut alanlar "
             "(f/t/k/enklav) AYNEN korunur — dict kopyalanip UZERINE eklenir."),
    "_KURAL": ("`statu` HER doneme yazilir (katmanin tanimi zaten tabiiyet, "
               "deger tek: vassal). `kid` YALNIZ kunye penceresi donemi "
               "KAPSIYORSA yazilir — %d donem pencereyi ASIYOR ve onlara "
               "kid YAZILMADI (4c/4d ihlali olurdu)." % say["asan"]),
    "_ASAN": [{"ad": r[0], "kid": r[1], "donem": r[2] + ">" + r[3],
               "kunye": r[4] + ">" + r[5]} for r in asanlar],
    "kayitlar": kayitlar,
}
io.open(CIKTI, "w", encoding="utf-8", newline="\n").write(
    json.dumps(govde, ensure_ascii=False, indent=1) + "\n")
p("")
p("  YAZILDI: denetim/YAMA-VASSAL-KID-0906.json")
