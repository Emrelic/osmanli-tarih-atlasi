# -*- coding: utf-8 -*-
"""ARAC-ODAK-VEKIL-1003 — kronoloji maddesinin `yer_id`/`odak_yer` alanı, maddenin
serbest `yer` metniyle AYNI yeri mi söylüyor? (VEKİL-DUZELT-1003, ODAK-KAPAT)

Niçin: odak kapısı alanın havuzda ÇÖZÜLMESİNİ zorluyor; havuzda olmayan bir yer için
yazar komşu bir noktayı yazınca kapı susuyor (KASA-ONCE1281-1003). Kapı "çözüldü" der,
soru "DOĞRU yere mi çözüldü"dür. Bu alet onu sorar.

Kovalar (alan değeri başına):
  TUTUYOR      değerin adı (tam, " (" öncesi çekirdek ya da parantez içi eş adı) `yer`
               metninde TAM KELİME olarak geçiyor
  VEKIL        `yer` metninin BİR PARÇASI havuzda bir ada eşleşiyor, alan onu değil komşusunu
               gösteriyor ⇒ olması gereken ad havuzda OLABİLİR — 🔴 ELLE DOĞRULA: ilk koşuda
               iki aday tuzak çıktı ("Bar" → Bar (Podolya)/Ukrayna · "Kassel" → Almanya;
               metindeki Bar Karadağ'da, Cassel Flandre'de). Parça eşleşmesi kanıt değildir.
  VEKIL-YOK    `yer` metni bir yerleşim adı söylüyor ama havuzda yok; alan başka bir yer
  MESRU-ADAY   `yer` metni bölge/ülke/ırmak/dağ diyor (anahtar kelime ya da sözlük)
  OLCULEMEDI   `yer` boş
  ⚠️ VEKIL-YOK ile MESRU-ADAY arasındaki sınır bir SÖZLÜKTÜR (BOLGE_ADLARI) — elle
     okunur, denetlenir; alet şüpheliyi VEKİL'e değil ayrı kovaya atar (D256 disiplini).

Ek ölçüm: ÇÖZÜLÜYOR-AMA-YANLIŞ — alan değerinin app.js `adKonumBul` ile çözüldüğü nokta
(birebir ad ya da " (" öncesi; İLK eşleşme kazanır) dosyanın kıtasının DIŞINDA mı.

Kullanım:  py denetim/ARAC-ODAK-VEKIL-1003.py [--json <yol>]
Yalnız OKUR. data/'ya yazmaz.
"""
import io, json, os, re, subprocess, sys, unicodedata, collections

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

DOSYALAR = sorted(f for f in os.listdir(os.path.join(KOK, "data"))
                  if f.startswith("kronoloji_cok_once1281_") and f.endswith(".js"))

# dosya → beklenen kaba kutu (lon0, lat0, lon1, lat1); dışına çözülen alan şüphelidir
KUTU = {
    "afrika":       (-26, -40, 60, 38),
    "anadolu":      (20, 30, 50, 46),
    "avrupa":       (-30, 30, 60, 72),
    "dogu_asya":    (60, -12, 160, 60),
    "hint_amerika": (-180, -60, 180, 60),   # iki kıta tek dosyada — kutu sınamaz
    "iran":         (30, 20, 95, 58),
    "ortadogu":     (20, 10, 65, 45),
}

BOLGE_KELIME = re.compile(
    r"\b(bolge|bolgesi|ova|ovasi|irmak|irmagi|nehri|nehir|kiyi|kiyisi|kiyilari|dag|dagi|daglari|"
    r"ulke|ulkesi|eyalet|eyaleti|yore|yoresi|civar|civari|havali|havalisi|korfez|korfezi|deniz|"
    r"denizi|ada|adasi|adalari|vadi|vadisi|colu|col|yarimada|yarimadasi|bogaz|bogazi|gecit|gecidi|"
    r"sinir|siniri|cephe|cephesi|boyu|boylari|havzasi|kuzey|guney|dogu|bati|yakini|yakininda|"
    r"arasi|arasinda|sahil|sahili)\b")

def norm(s):
    s = (s or "").replace("İ", "i").replace("I", "ı").lower().replace("ı", "i")
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    s = s.replace("’", "'").replace("‘", "'")
    return s

def adlar(deger):
    """değer → karşılaştırılacak ad kümesi: tam, çekirdek, parantez içi eşler."""
    out = {deger.strip()}
    m = re.match(r"^(.*?)\s*\((.*)\)\s*$", deger)
    if m:
        out.add(m.group(1).strip())
        for p in re.split(r"[,/;]| ve ", m.group(2)):
            p = p.strip()
            if p and len(p) > 2:
                out.add(p)
    return {a for a in out if a}

def kelime_gecer(ad, metin):
    a, t = norm(ad), norm(metin)
    if not a or not t:
        return False
    # Türkçe ek kesme işaretiyle gelir ("Halep'e"); bitişik harf = başka kelime
    return re.search(r"(?<![a-z0-9])" + re.escape(a) + r"(?![a-z0-9])", t) is not None

def yer_parcalari(yer):
    """`yer` metni → aday ad parçaları ("Musul, Harran" · "Clontarf (Dublin)")."""
    p = re.split(r",|;|/| ve |\(|\)", yer or "")
    return [x.strip() for x in p if x.strip()]

def yukle_havuz():
    import girdi
    H = girdi.yukle(sessiz=True)
    # app.js AD_KONUM sırası: önce d/v/s taşıyanlar (ISARET_KAYNAK), sonra kalanlar.
    # ⚠️ ISARET_KAYNAK'ın kendi iç sırası YERLESIMLER sırasıdır varsayımı — index.html
    #    yükleme sırası girdi.py sırasından farklıysa İLK eşleşme farklı olabilir.
    dolu = [y for y in H if (y.get("d") or y.get("v") or y.get("s"))]
    bos = [y for y in H if not (y.get("d") or y.get("v") or y.get("s"))
           and isinstance(y.get("lat"), (int, float))]
    return [(y["ad"], y["lat"], y["lon"]) for y in dolu + bos if y.get("ad")]

def ad_konum_bul(ad, havuz):
    for a, la, lo in havuz:
        if a == ad or a.split(" (")[0] == ad:
            return (a, la, lo)
    return None

def tum_eslesmeler(ad, havuz):
    return [(a, la, lo) for a, la, lo in havuz if a == ad or a.split(" (")[0] == ad]

def yukle_kronoloji(f):
    js = ("global.window={};eval(require('fs').readFileSync(%r,'utf8'));"
          "const k=Object.keys(window)[0];process.stdout.write(JSON.stringify(window[k]));"
          % os.path.join(KOK, "data", f).replace("\\", "/"))
    r = subprocess.run(["node", "-e", js], capture_output=True, text=True, encoding="utf-8")
    return json.loads(r.stdout)

def main():
    havuz = yukle_havuz()
    havuz_ad = set()
    for a, _, _ in havuz:
        havuz_ad.add(a); havuz_ad.add(a.split(" (")[0])
    kayit, say = [], collections.Counter()
    for f in DOSYALAR:
        bolge = f[len("kronoloji_cok_once1281_"):-3]
        kutu = KUTU.get(bolge)
        for i, o in enumerate(yukle_kronoloji(f), 1):
            degerler = []
            if o.get("yer_id"):
                degerler.append(("yer_id", o["yer_id"]))
            oy = o.get("odak_yer")
            if oy:
                for v in (oy if isinstance(oy, list) else [oy]):
                    degerler.append(("odak_yer", v))
            for alan, v in degerler:
                yer = o.get("yer") or ""
                ad_k = adlar(v)
                cozum = ad_konum_bul(v, havuz)
                es = tum_eslesmeler(v, havuz)
                disari = bool(cozum and kutu and not (kutu[0] <= cozum[2] <= kutu[2]
                                                       and kutu[1] <= cozum[1] <= kutu[3]))
                if not yer.strip():
                    kova = "OLCULEMEDI"
                elif any(kelime_gecer(a, yer) for a in ad_k):
                    kova = "TUTUYOR"
                else:
                    parca = yer_parcalari(yer)
                    havuzda = [p for p in parca if p in havuz_ad]
                    if havuzda:
                        kova = "VEKIL"
                    elif BOLGE_KELIME.search(norm(yer)):
                        kova = "MESRU-ADAY"
                    else:
                        kova = "VEKIL-YOK"
                say[(alan, kova)] += 1
                kayit.append({"dosya": f, "no": i, "t": o.get("t"), "b": (o.get("b") or "")[:90],
                              "alan": alan, "deger": v, "yer": yer, "kova": kova,
                              "havuzda_olan_yer": [p for p in yer_parcalari(yer) if p in havuz_ad],
                              "cozum": cozum, "esleşme_sayisi": len({(round(x[1], 2), round(x[2], 2)) for x in es}),
                              "kita_disi": disari, "kaynak": (o.get("kaynak") or "")[:200]})
    print("evren: %d dosya · %d alan değeri" % (len(DOSYALAR), len(kayit)))
    for k in sorted(say):
        print("  %-9s %-11s %4d" % (k[0], k[1], say[k]))
    kd = [x for x in kayit if x["kita_disi"]]
    print("ÇÖZÜLÜYOR-AMA-KITA-DIŞI: %d" % len(kd))
    for x in kd:
        print("   %s #%d %s=%r → %s (%.2f, %.2f) · yer: %s" % (x["dosya"][23:-3], x["no"], x["alan"],
              x["deger"], x["cozum"][0], x["cozum"][1], x["cozum"][2], x["yer"]))
    cok = [x for x in kayit if x["esleşme_sayisi"] > 1]
    print("BİRDEN ÇOK NOKTAYA EŞLEŞEN AD: %d" % len(cok))
    for x in cok:
        print("   %s #%d %s=%r · %d farklı nokta · ilk: %s" % (x["dosya"][23:-3], x["no"], x["alan"],
              x["deger"], x["esleşme_sayisi"], x["cozum"][0] if x["cozum"] else None))
    if "--json" in sys.argv:
        yol = sys.argv[sys.argv.index("--json") + 1]
        io.open(yol, "w", encoding="utf-8").write(json.dumps(kayit, ensure_ascii=False, indent=1))
        print("döküm:", yol)

if __name__ == "__main__":
    main()
