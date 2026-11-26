# -*- coding: utf-8 -*-
"""ENKLAV-0907 — B-BİLİNMİYOR (166) TRİYAJI.

🔴 ÖLÇÜT NE DEĞİL: "enklav mı değil mi" DEĞİL. O bir KAYNAK sorusudur ve
   bu alet kaynağa gitmez. Ölçtüğü şey ***ADA İLE ANA GÖVDE ARASINDA NE
   VAR*** — çünkü `§2`ye göre bir adanın üç ayrı sebebi olabilir ve
   ÜÇÜNÜN ÇARESİ TERSTİR:

     ARADA BAŞKA DEVLET   koridor fiziksel olarak İMKÂNSIZ
                          ⇒ HAKİKİ ENKLAV adayı · çare `enklav:true`
     ARADA HİÇ NOKTA YOK  `§2` NOKTASIZLIK — "o bölgede yerleşim noktası
                          var mı? Cevap hayırsa hata orada, kodda değil"
                          ⇒ çare NOKTA EKLEMEK · `enklav:true` YANLIŞ olur
     ARADA SAHİPSİZ /     koridor MÜMKÜN ama dönem yazılmamış
     AYNI KİMLİK          ⇒ KORİDOR adayı · çare kaynağa sormak

🔴 ÖLÇÜT ELLE DOĞRULANMIŞ KÜMEYE KARŞI SINANDI VE İKİ KEZ ÇÖKTÜ:
     ① ilk yazım EN YAKIN AYNI-KİMLİK noktasına bakıyordu, `denetle` ise
        ANA GÖVDEye ⇒ 12'de 4 ayrışma. Çare: yönü aletin KENDİ `ana`
        alanından almak (taklit etme, aletin çıktısını kullan).
     ② düzeltilmiş hâli 12/12 "yabancı var" dedi — ama elle doğrulanmış
        sonuç 9 hakiki + 2 tarih kusuru + 1 kimlik tutarsızlığı.
   ⇒ Alet `NOKTASIZLIK` ve `KORİDOR-ADAY`ı GÜVENİLİR ayırır (ölçtüğü şey
     tam budur); `ARADA-YABANCI` ise bir KALINTIDIR ve içinde en az ÜÇ
     ayrı sınıf vardır. Sayısı bir HÜKÜM olarak okunmamalıdır.

⚠️ ALET HÜKÜM VERMEZ. Çıktısı bir ADAY listesidir; "kaynak susuyorsa
   KAYDET, uydurma" şartı kaynağa giden turda uygulanır.
"""
import sys, os, math, json, io

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import denetle

Y = denetle.yerlesimleri_yukle()
d7, muaf = denetle.degismez7(Y)
assert len(d7) == 661, "TABAN 661 DEĞİL (%d) — aleti yanlış yerden okuyorum" % len(d7)

ix = {}
for y in Y:
    ix.setdefault(y["ad"], []).append(y)

def km(a, b):
    R = 6371.0
    dla = math.radians(b["lat"] - a["lat"]); dlo = math.radians(b["lon"] - a["lon"])
    h = math.sin(dla / 2) ** 2 + math.cos(math.radians(a["lat"])) * \
        math.cos(math.radians(b["lat"])) * math.sin(dlo / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))

def sahip(y, g):
    for p in y.get("d", []):
        if p["f"] <= g < p["t"]: return "OSMANLI"
    for p in y.get("v", []):
        if p["f"] <= g < p["t"]: return "tâbi"
    for p in y.get("s", []):
        if p["f"] <= g < p["t"]: return p["d"]
    return None

KOVA = sys.argv[1] if len(sys.argv) > 1 else "B-bilinmiyor"
kayitlar = [r for r in d7 if r["kova"] == KOVA]
print("%s: %d kayıt" % (KOVA, len(kayitlar)))

sonuc = []
for r in kayitlar:
    ad, g, kim = r["yerlesim"], r["gun"], r["sahip"]
    if ad not in ix:
        sonuc.append(dict(r, sinif="AD-BULUNAMADI", ara=0, komsu={}))
        continue
    y = ix[ad][0]
    # 🔴 YÖN, `denetle`nin KENDİ `ana` alanından gelir — TAKLİT EDİLMEZ.
    #    İlk yazımda "en yakın aynı-kimlik noktası" kullanılmıştı ve sınav
    #    ÇÖKTÜ: Portsmouth'un yolu Plymouth'a (124 km) gidiyordu, oysa
    #    `denetle` ANA GÖVDEye (Jamestown, 829 km) bakıyor. İki farklı yön,
    #    iki farklı cevap — ve elle doğrulanmış kümede 12'de 4 ayrışma.
    anaAd = r.get("ana")
    if not anaAd or anaAd not in ix:
        sonuc.append(dict(r, sinif="GÖVDESİZ", ara=0, komsu={}))
        continue
    hedef = ix[anaAd][0]
    ayni = [(km(y, hedef), hedef)]
    la0, la1 = sorted((y["lat"], hedef["lat"]))
    lo0, lo1 = sorted((y["lon"], hedef["lon"]))
    PAY = 1.0
    ara = [o for o in Y if o is not y and o is not hedef and
           la0 - PAY <= o["lat"] <= la1 + PAY and lo0 - PAY <= o["lon"] <= lo1 + PAY]
    komsu = {}
    for o in ara:
        s = sahip(o, g) or "—YOK—"
        komsu[s] = komsu.get(s, 0) + 1
    # yabancı = ne kendi kimliği, ne sahipsiz
    yabanci = sum(n for s, n in komsu.items() if s not in (kim, "—YOK—"))
    if not ara:
        sinif = "NOKTASIZLIK"          # arada HİÇ nokta yok
    elif yabanci:
        sinif = "ARADA-YABANCI"        # arada BAŞKA KİMLİK var — ne olduğu ÖLÇÜLMEDİ
    else:
        sinif = "KORİDOR-ADAY"         # arada sahipsiz / aynı kimlik
    sonuc.append(dict(r, sinif=sinif, ara=len(ara), yabanci=yabanci, komsu=komsu,
                      en_yakin_ayni=round(ayni[0][0]), hedef=hedef["ad"]))

say = {}
for s in sonuc:
    say[s["sinif"]] = say.get(s["sinif"], 0) + 1
print("\nSINIF DAĞILIMI")
for k, n in sorted(say.items(), key=lambda x: -x[1]):
    print("   %-14s %4d" % (k, n))

if "--dok" in sys.argv:
    for s in sorted(sonuc, key=lambda x: (x["sinif"], -x["ana_km"])):
        print("\n[%s] %s  %s → %s   ana %d km · en yakın aynı %s km (%s)"
              % (s["sinif"], s["gun"], s["yerlesim"], s["sahip"], s["ana_km"],
                 s.get("en_yakin_ayni", "?"), s.get("hedef", "—")))
        if s.get("komsu"):
            print("     arada %d nokta: %s" % (s["ara"], dict(
                sorted(s["komsu"].items(), key=lambda x: -x[1]))))

with io.open("denetim/TRIYAJ-ENKLAV-%s-0907.json" % KOVA.split("-")[0],
             "w", encoding="utf-8") as f:
    json.dump({
        "_NOT": "ENKLAV-0907 · `Değişmez 7` %s kovasının ARADAKİ ALAN triyajı. "
                "Bu bir HÜKÜM listesi DEĞİL, bir ADAY listesidir — hangi "
                "SORUNUN sorulacağını söyler, cevabı değil." % KOVA,
        "_OLCUT": {
            "ARADA-YABANCI": "ada ile ANA GÖVDE arasında BAŞKA BİR KİMLİK "
                            "var. 🔴 BU BİR HÜKÜM DEĞİL, KALINTI KOVADIR — "
                            "alet aradakinin GERÇEKTEN başka bir devlet mi "
                            "olduğunu SORAMAZ. C-hakiki sınavında bu kovanın "
                            "12 kaydının 9'u hakiki enklav, 2'si TARİH KUSURU "
                            "(Khami · Danangombe: kaydın kendisi yanlış olunca "
                            "arada elbette yabancı çıkar), 1'i KİMLİK "
                            "TUTARSIZLIĞI (Delgo: aradaki 27 nokta `ingiltere` "
                            "— aynı kondominyumun öteki kimliği) çıktı. "
                            "İsabet 9/12; alt-ayrım bir KİMLİK SÖZLÜĞÜ ister "
                            "(ingiltere ↔ ingiliz-sudani ↔ ingiliz-hindistani) "
                            "ve o sözlük YOK.",
            "NOKTASIZLIK":  "arada HİÇ nokta yok ⇒ §2 vakası ⇒ çare NOKTA "
                            "EKLEMEK, `enklav:true` YANLIŞ olur",
            "KORİDOR-ADAY": "arada sahipsiz ya da aynı kimlik ⇒ koridor mümkün, "
                            "dönem yazılmamış ⇒ KAYNAĞA sorulur",
            "GÖVDESİZ":     "o gün o kimliği taşıyan BAŞKA nokta YOK",
        },
        "_TABAN": {"toplam": len(d7), "tavan": denetle.BEKLENEN_ENKLAV_SORGU,
                   "muaf": muaf},
        "kova": KOVA, "n": len(kayitlar), "dagilim": say,
        "kayitlar": sonuc,
    }, f, ensure_ascii=False, indent=1)
print("\nyazıldı: denetim/TRIYAJ-ENKLAV-%s-0907.json" % KOVA.split("-")[0])
