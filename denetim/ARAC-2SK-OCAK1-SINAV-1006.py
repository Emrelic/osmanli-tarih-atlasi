# ARAC-2SK-OCAK1-SINAV-1006 — 2sk OCAK-1 kovaları BİRİM BAŞINA (SENARYO B) sınavı (UMIT-W41).
#
#   S1  OCAK-1 kovası AÇIK, bir birim açıklanmış → birim OCAK-1 sütununa düşer, MASKEYE düşmez
#   S2  GÜN kovası aynı kurguyla → birim MASKEYE düşer, OCAK-1 sütununa DÜŞMEZ (ters yön)
#   S3  GÜN kovası KAPALI → birim GÜN sütununa düşer
#   S4  OCAK-1'de TARAF kolu → ocak1_yalniz_taraf
#   S5  HÜKÜM DEĞİŞMEZ: OCAK-1 kovası birim sayılsa da AÇIK listesinde kalır
#   S6  gerçek veri: yer = gün + ocak1 · taraf = gün + ocak1 · görünür+maskeli TARAF = tavan
#   S7  gerçek veri: OCAK-1 sütunu BAĞIMSIZ birim-başına sayımla birebir (yer + taraf)
#   S8  çağrı başına sıfırlama: iki ardışık çağrı aynı sayıları verir
# Koşum: py denetim/ARAC-2SK-OCAK1-SINAV-1006.py   (çıkış 0 = hepsi geçti)
# İki yön: bu sınav değişiklik ÖNCESİ denetle.py'de S1/S6/S7 ✗ verir (anahtar yok ⇒ ✗, çökmez).
import io, os, re, sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, os.path.join(KOK, "arac"))
_out = sys.stdout
import denetle as D
sys.stdout = _out
out = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8") if hasattr(sys.stdout, "buffer") else sys.stdout

gecti = toplam = 0


def sina(ad, kosul, ayrinti=""):
    global gecti, toplam
    toplam += 1
    gecti += bool(kosul)
    out.write("%s %s%s\n" % ("✓" if kosul else "✗", ad,
                             ("  — " + str(ayrinti)) if (ayrinti and not kosul) else ""))


def K(a):
    return D.KAPANIS_2S.get(a)


def yer(ad, gun, eski, yeni, lat=40.0, lon=30.0):
    return {"ad": ad, "lat": lat, "lon": lon, "_kaynak": "sinav.js",
            "s": [{"f": "1281-01-01", "t": gun, "d": eski},
                  {"f": gun, "t": "1923-10-29", "d": yeni}]}


def madde(t, b, yer_id="", d=""):
    return {"t": t, "b": b, "yer_id": yer_id, "yer": yer_id, "d": d}


# ── Sentetik: iki yerleşimli kova, yalnız A maddede anılıyor (B anılmıyor ⇒ kova AÇIK) ──
for gun, etiket in (("1500-01-01", "OCAK-1"), ("1500-06-15", "GÜN")):
    Y = [yer("Sinavkent Alfa", gun, "safevi", "akkoyunlu"),
         yer("Sinavkent Beta", gun, "safevi", "akkoyunlu", lat=41.0)]
    O = [madde(gun, "Sinavkent Alfa düştü", yer_id="Sinavkent Alfa")]
    kir, acik = D.degismez2(Y, O, ("s",), yer_sarti=True)
    acik_gun = [a[0] for a in acik]
    if etiket == "OCAK-1":
        sina("S1 OCAK-1 AÇIK kova: açıklanmış birim ocak1_yer'e düşer (1)", K("ocak1_yer") == 1, K("ocak1_yer"))
        sina("S1 OCAK-1 AÇIK kova: birim MASKEYE düşmez (maskeli_yer 0, acik_kovada 0)",
             K("maskeli_yer") == 0 and K("acik_kovada") == 0, (K("maskeli_yer"), K("acik_kovada")))
        sina("S1 OCAK-1: görünür yer = 1 (toplam anahtar)", K("yer") == 1, K("yer"))
        sina("S5 HÜKÜM DEĞİŞMEZ: OCAK-1 kovası yine AÇIK listesinde", gun in acik_gun, acik_gun)
    else:
        sina("S2 GÜN AÇIK kova: birim MASKEYE düşer (maskeli_yer 1)", K("maskeli_yer") == 1, K("maskeli_yer"))
        sina("S2 GÜN AÇIK kova: ocak1_yer'e DÜŞMEZ (0)", (K("ocak1_yer") or 0) == 0, K("ocak1_yer"))
        sina("S2 GÜN AÇIK kova: görünür yer 0", K("yer") == 0, K("yer"))
        sina("S2 GÜN: kova AÇIK listesinde", gun in acik_gun, acik_gun)

# ── S3: GÜN kovası KAPALI (iki yer de anılıyor) ──
gun = "1500-06-15"
Y = [yer("Sinavkent Alfa", gun, "safevi", "akkoyunlu"), yer("Sinavkent Beta", gun, "safevi", "akkoyunlu", lat=41.0)]
O = [madde(gun, "Sinavkent Alfa ve Sinavkent Beta düştü", yer_id="Sinavkent Alfa")]
kir, acik = D.degismez2(Y, O, ("s",), yer_sarti=True)
sina("S3 GÜN KAPALI kova: gun_yer 2 · ocak1_yer 0", K("gun_yer") == 2 and (K("ocak1_yer") or 0) == 0,
     (K("gun_yer"), K("ocak1_yer")))

# ── S4: OCAK-1 TARAF kolu — başlıkta taraf adı, yer adı yok ──
taraf = D._2s_taraf_adaylari("akkoyunlu")
gun = "1500-01-01"
Y = [yer("Sinavkent Gamma", gun, "safevi", "akkoyunlu")]
O = [madde(gun, "%s olayı" % (taraf[0].title() if taraf else "Akkoyunlu"))]
kir, acik = D.degismez2(Y, O, ("s",), yer_sarti=True)
sina("S4 OCAK-1 TARAF kolu: ocak1_yalniz_taraf 1 · ocak1_yer 0 (taraf adayı %r)" % (taraf[:1],),
     K("ocak1_yalniz_taraf") == 1 and K("ocak1_yer") == 0, (K("ocak1_yalniz_taraf"), K("ocak1_yer")))

# ── Gerçek veri ──
Y = D.yerlesimleri_yukle()
O = D.olaylari_yukle()
Yc = [y for y in Y if y.get("_kaynak") not in D.KUYRUK_DOSYALARI]
kir, acik = D.degismez2(Yc, O, ("s",), yer_sarti=True)
R1 = dict(D.KAPANIS_2S)
g = lambda a: R1.get(a) or 0
sina("S6 gerçek: yer = gun_yer + ocak1_yer (%d = %d + %d)" % (g("yer"), g("gun_yer"), g("ocak1_yer")),
     "gun_yer" in R1 and g("yer") == g("gun_yer") + g("ocak1_yer"))
sina("S6 gerçek: taraf = gun + ocak1 (%d = %d + %d)" % (g("yalniz_taraf"), g("gun_yalniz_taraf"), g("ocak1_yalniz_taraf")),
     "gun_yalniz_taraf" in R1 and g("yalniz_taraf") == g("gun_yalniz_taraf") + g("ocak1_yalniz_taraf"))
tum = g("yalniz_taraf") + g("maskeli_yalniz_taraf")
sina("S6 gerçek: görünür+maskeli TARAF %d = tavan %d" % (tum, D.BEKLENEN_2S_YALNIZ_TARAF),
     tum == D.BEKLENEN_2S_YALNIZ_TARAF)

# S7 — BAĞIMSIZ birim-başına sayım (degismez2'nin kova mantığını KULLANMAZ; yalnız kırılma
#   kümesini ve iki kol yardımcısını kullanır) → OCAK-1 sütunu ile birebir.
Y_KOK = {y["ad"]: D._2s_norm(re.sub(r"\s*\(.*?\)", "", y["ad"] or "").strip()) for y in Y}
Y_MERKEZ = {y["ad"]: (y.get("m") or "", D._2s_norm(y.get("m") or "")) for y in Y}
ol = [{"g": D.gun_no(o["t"]), "b": o["b"], "yer": o.get("yer_id") or o.get("yer"),
       "nrm": D._2s_norm(" ".join([o.get("b") or "", o.get("yer") or "", o.get("d") or ""])),
       "nrm_b": D._2s_norm(o.get("b") or ""),
       "nrm_y": D._2s_norm(" ".join([o.get("b") or "", o.get("yer") or ""])),
       "yer_id": o.get("yer_id") or ""} for o in O]
by, bt = 0, 0
for d in kir:
    if str(d)[4:] != "-01-01":
        continue
    gd = D.gun_no(d)
    yak = [o for o in ol if abs(o["g"] - gd) <= 30]
    for ad in kir[d]["ad"]:
        if any(D._2s_yeri_aniyor(o, {ad}, Y_KOK, Y_MERKEZ) for o in yak):
            by += 1
        elif any(D._2s_tarafi_aniyor(o, {ad: kir[d]["sahip"].get(ad, {})}) for o in yak):
            bt += 1
sina("S7 gerçek: ocak1_yer %s = bağımsız sayım %d" % (R1.get("ocak1_yer"), by), R1.get("ocak1_yer") == by)
sina("S7 gerçek: ocak1_yalniz_taraf %s = bağımsız sayım %d" % (R1.get("ocak1_yalniz_taraf"), bt),
     R1.get("ocak1_yalniz_taraf") == bt)

# S8 — ikinci çağrı aynı sayıları vermeli (sıfırlama)
D.degismez2(Yc, O, ("s",), yer_sarti=True)
R2 = dict(D.KAPANIS_2S)
sina("S8 ikinci çağrı aynı sayılar (birikme yok)", R1 == R2,
     {k: (R1.get(k), R2.get(k)) for k in R2 if R1.get(k) != R2.get(k)})

out.write("SINAV %d/%d\n" % (gecti, toplam))
out.flush()
raise SystemExit(0 if gecti == toplam else 1)
