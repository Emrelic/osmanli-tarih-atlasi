# -*- coding: utf-8 -*-
"""ARAC-NOT-CELISKI-1006 — tarih ALANI ile kaydın KENDİ açıklama metni çelişiyor mu?

UMIT-W12-NOT-CELISKI-1006 · YALNIZ ÖLÇÜM (veri yazmaz).
Evren: data/kisiler.js · data/padisahlar.js · arac/girdi.py GIRDI_DOSYALARI (yerleşimler).

Kullanım:  py ARAC-NOT-CELISKI-1006.py <depo-kökü> [--json <çıktı>]
Çıkış: 0 ölçüldü · 2 ölçülemedi (node/dosya yok).

YÖNTEM (mekanik — hüküm DEĞİL; her ① adayı elle okunur):
  1. Metin cümlelere bölünür. Her yıl geçişi (miladî; ya da hicrî → iki miladî aday)
     cümledeki EN YAKIN olay anahtar kelimesine bağlanır (doğum · ölüm · tahta · tahttan ·
     el değiştirme). Anahtar yoksa yıl "bağsız" sayılır, hüküm üretmez.
  2. Olayın tarihlediği alanla (kişi f/t · padişah dogum/olum/from/to/tahta · yerleşim
     dönem uçları) karşılaştırılır.
  3. Sınıf: ① aday   = alanın olayına bağlı yıl(lar) var, HİÇBİRİ alanla uyuşmuyor
            ② farklı = alanın yılı metinde geçiyor ama BAŞKA olaya bağlı
            ③ belirsiz = aynı olaya bağlı yıllar hem uyuşan hem uyuşmayan (ihtilaf /
                         "eski değer" / aralık) ya da bağ zayıf
  Düzeltme kaydı cümleleri ("eski", "yerine", "→", "değil", "yanlış") ③'e düşer:
  orada yıl çoğu zaman BİLEREK reddedilmiş eski değerdir.
"""
import json, os, re, subprocess, sys

KOK = os.path.abspath(sys.argv[1]) if len(sys.argv) > 1 else os.getcwd()
JSON_CIKTI = sys.argv[sys.argv.index("--json") + 1] if "--json" in sys.argv else None

DOKUM_JS = r"""
const fs=require('fs'),vm=require('vm'),path=require('path');
const [kok,dosyalarJson]=process.argv.slice(2);const dosyalar=JSON.parse(dosyalarJson);
const out=[];
function satirBul(src,desen){const i=src.search(desen);return i<0?null:src.slice(0,i).split('\n').length;}
function kac(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}
for(const [tur,f] of dosyalar){
  const p=path.join(kok,'data',f);if(!fs.existsSync(p)){out.push({hata:'yok',f});continue;}
  const src=fs.readFileSync(p,'utf8');const w={};w.window=w;vm.createContext(w);
  try{vm.runInContext(src,w);}catch(e){out.push({hata:e.message,f});continue;}
  for(const k of Object.keys(w)){if(!Array.isArray(w[k]))continue;
    for(const r of w[k]){if(!r||typeof r!=='object')continue;
      const anahtar=tur==='yer'?r.ad:r.id;
      const satir=tur==='yer'?satirBul(src,new RegExp('ad: *"'+kac(String(r.ad))+'"'))
                             :satirBul(src,new RegExp('id: *"'+kac(String(r.id))+'"'));
      out.push({tur,f,degisken:k,anahtar,satir,r});}}
}
process.stdout.write(JSON.stringify(out));
"""

# ---------------------------------------------------------------- olay sözlüğü
OLAY = {
    "dogum":  r"doğ(?:du|muş|um|duğu|an|arak|ması)|dünyaya gel|born",
    "olum":   r"\böl(?:dü|müş|üm|düğü|en|ünce|mesi|mesiyle)|vefat|idam|şehi[td]|katledil|öldürül|"
              r"boğdurul|boğul|hayatını kaybet|can verdi|gözlerini yum|\bdied|executed|killed",
    "tahta":  r"tahta (?:çık|geç|otur)|cülûs|cülus|hükümdar oldu|tahtına çık|sultan ilân",
    "tahttan": r"tahttan (?:indir|feragat|çekil)|hal' ?edil|hal edil|tahtı bırak|azled",
    "devir":  r"fet[hi]|ele geçir|aldı|alındı|zapt|teslim|düş(?:tü|mesi|ünce)|bağlan|kat(?:ıl|ıldı|mış|tı)|"
              r"hâkimiyet|hakimiyet|kontrol|işgal|boşalt|terk|çekil|kuruldu|kurul|yıkıl|ilhak|devred|"
              r"geçti|sahib|conquer|captur|annex|ced|occup|founded|seized|took",
}
OLAY_RX = {k: re.compile(v, re.I) for k, v in OLAY.items()}
DUZELTME_RX = re.compile(r"\beski\b|yerine|→|->|\bdeğil\b|yanlış|düzelt|hatalı|ÇIKARILAN|çıkarılan", re.I)
YAKLASIK_RX = re.compile(r"yaklaşık|dolay|civar|sularında|tahmin|muhtemel|ca\.|c\.\s", re.I)
HICRI_RX = re.compile(r"hicr[îi]|\bH\.\s?$|\bh\.\s?$", re.I)

def h2m(h):
    g = h * 0.970224 + 621.5774
    return [int(g), int(g) + 1]

YIL_RX = re.compile(r"(?<![\d.,/-])(\d{3,4})(?![\d.,]\d)")

def yillar(cumle, alan_yil):
    """cümledeki yıl geçişleri: [(konum, [aday yıllar], hicri_mi, ham)]"""
    sonuc = []
    atla = set()
    # "828 (1425)" · "940 (1533)" · "905-913/1500-1507" · "823/1420"
    for m in re.finditer(r"(?<!\d)(\d{3,4})\s*(?:\((?:m\.\s*)?(\d{4})\)?|/(\d{4}))", cumle):
        h, mil = int(m.group(1)), int(m.group(2) or m.group(3))
        if 500 <= h <= 1350 and 600 <= mil <= 1950 and abs(mil - (h * 0.97 + 621.6)) <= 3:
            sonuc.append((m.start(), [mil], True, m.group(0)))
            atla.update({m.start(1), m.start(2) if m.group(2) else m.start(3)})
    for m in YIL_RX.finditer(cumle):
        if m.start(1) in atla:
            continue
        y = int(m.group(1))
        if not (600 <= y <= 2030):
            continue
        onu = cumle[max(0, m.start() - 12):m.start()]
        if HICRI_RX.search(onu) or (y <= 1350 and alan_yil and alan_yil - y > 300):
            sonuc.append((m.start(), h2m(y), True, m.group(0)))
        else:
            sonuc.append((m.start(), [y], False, m.group(0)))
    return sorted(sonuc)

def cumleler(metin):
    # tek harfli kısaltmada ("m. 1339", "h. 828", "ö. 1420") bölme YOK
    return [c for c in re.split(r"(?<![\s(][A-Za-zçğıöşüÇĞİÖŞÜ]\.)(?<=[.;!?])\s+(?=[A-ZÇĞİÖŞÜ0-9'\"«(])"
                                r"|\s·\s|\n", metin) if c.strip()]

def bagla(cumle, konum, olaylar, uzunluk=4):
    """yıla en yakın olay anahtarı (aynı cümlede); uzunluk = yıl geçişinin ham boyu
    ("823 (1420)" tek geçiştir — içindeki 1420 "araya giren yıl" sayılmaz)"""
    # Türkçe yüklem SONDADIR ("1478'de doğdu, 1546'da öldü"): yıldan SONRA gelen ilk
    # anahtar, önceki anahtardan güçlüdür. Önceki anahtar 3 kat uzak sayılır; araya
    # başka bir yıl girerse o yıl o anahtarı daha önce "kapar".
    en, enk = None, 10 ** 9
    for olay in olaylar:
        for m in OLAY_RX[olay].finditer(cumle):
            if m.start() >= konum:
                ara = cumle[konum + uzunluk:m.start()]
                # "1183 (1769) ya da 1184 (1770) yılında doğdu": araya giren yıl bir
                # ALTERNATİF ise (ya da · veya · - · /) ceza yok, ikisi de aynı fiile bağlanır
                alternatif = re.match(r"\s*\)?\s*(?:ya da|veya|yahut|ile|-|–|/)\s*", ara)
                d = m.start() - konum - uzunluk + (200 if YIL_RX.search(ara) and not alternatif else 0)
            else:
                d = (konum - m.end()) * 3
            if d < enk:
                en, enk = olay, d
    return en, enk

def yil_of(v):
    if v is None:
        return None
    m = re.match(r"\s*(-?\d{1,4})", str(v))
    return int(m.group(1)) if m else None

def metinler(r, alanlar_disi):
    out = []
    for k, v in r.items():
        if k in alanlar_disi:
            continue
        if isinstance(v, str) and re.search(r"\d{3}", v):
            out.append((k, v))
        elif isinstance(v, list):
            for i, x in enumerate(v):
                if isinstance(x, str) and re.search(r"\d{3}", x):
                    out.append((f"{k}[{i}]", x))
    return out

# ---------------------------------------------------------------- değerlendirme
def degerlendir(alan_olay, metin_listesi, olay_kumesi, uzak=130):
    """alan_olay: {alan: (olay, yıl)} → bulgular"""
    bul = []
    for alan, (olay, ay) in alan_olay.items():
        if ay is None:
            continue
        ayni, farkli_olay, duz, yak = [], [], [], False
        for mk, metin in metin_listesi:
            for c in cumleler(metin):
                for konum, adaylar, hicri, ham in yillar(c, ay):
                    o, d = bagla(c, konum, olay_kumesi, len(ham))
                    if o is None or d > uzak:
                        if ay in adaylar:
                            farkli_olay.append(dict(metin_alani=mk, cumle=c.strip()[:400], ham=ham,
                                                    adaylar=adaylar, hicri=hicri, olay=o or "bağsız",
                                                    uzaklik=d))
                        continue
                    kayit = dict(metin_alani=mk, cumle=c.strip()[:400], ham=ham, adaylar=adaylar,
                                 hicri=hicri, olay=o, uzaklik=d)
                    if o == olay:
                        if DUZELTME_RX.search(c):
                            duz.append(kayit)
                        else:
                            ayni.append(kayit)
                            yak = yak or bool(YAKLASIK_RX.search(c))
                    elif ay in adaylar:
                        farkli_olay.append(kayit)
        uyan = [k for k in ayni if ay in k["adaylar"]]
        uymayan = [k for k in ayni if ay not in k["adaylar"]]
        if uymayan and not uyan:
            bul.append(dict(sinif="1", alan=alan, deger=ay, olay=olay, kanit=uymayan,
                            yaklasik=yak, ek=farkli_olay))
        elif uymayan and uyan:
            bul.append(dict(sinif="3", alan=alan, deger=ay, olay=olay, kanit=uymayan + uyan,
                            neden="aynı olaya hem uyan hem uymayan yıl (ihtilaf/aralık)"))
        elif not ayni and farkli_olay:
            bul.append(dict(sinif="2", alan=alan, deger=ay, olay=olay, kanit=farkli_olay))
        if duz and not uyan and not uymayan:
            bul.append(dict(sinif="3", alan=alan, deger=ay, olay=olay, kanit=duz,
                            neden="düzeltme cümlesi (eski/yerine/→) — yıl bilerek reddedilmiş olabilir"))
    return bul

def kisi(r):
    al = {"f": ("dogum", yil_of(r.get("f"))), "t": ("olum", yil_of(r.get("t")))}
    return degerlendir(al, metinler(r, {"f", "t", "donem", "id", "ad", "tur", "devlet"}),
                       ["dogum", "olum", "tahta", "tahttan"])

def padisah(r):
    al = {"dogum": ("dogum", yil_of(r.get("dogum"))), "olum": ("olum", yil_of(r.get("olum"))),
          "from": ("tahta", yil_of(r.get("from"))), "tahta": ("tahta", yil_of(r.get("tahta"))),
          "to": ("tahttan", yil_of(r.get("to")))}
    # dogum/olum/tahta alanlarının kendi parantez içi açıklaması da metindir
    ml = metinler(r, {"id", "ad", "from", "to", "saltanat_yil"})
    ml = [(k, v) for k, v in ml if k not in ("dogum", "olum", "tahta")] + \
         [(k + "(açıklama)", re.sub(r"^\s*\d{3,4}(-\d\d){0,2}", "", str(r.get(k))))
          for k in ("dogum", "olum", "tahta") if isinstance(r.get(k), str)]
    return degerlendir(al, ml, ["dogum", "olum", "tahta", "tahttan"])

def yerlesim(r):
    """dönem kaynağındaki devir yılı ↔ o dönemin f/t; yerleşim notu ↔ bütün uçlar"""
    bul = []
    uclar = set()
    for c in ("d", "s", "v", "isg"):
        for p in r.get(c) or []:
            uclar.update(x for x in (yil_of(p.get("f")), yil_of(p.get("t"))) if x)
    for x in ("kur", "bit"):
        if yil_of(r.get(x)):
            uclar.add(yil_of(r.get(x)))
    # ÖLÇÜLDÜ (ilk koşu, 231 aday, 15'lik örneklem elle okundu): yerleşim metni çoğu
    # zaman BAŞKA bir şeyi tarihliyor (belediye statüsü, komşu şehir, "kaldı" = değişim
    # YOK, mesafe "923 km"). Bu yüzden ① YALNIZ "yakın ıska" ile verilir: metindeki devir
    # yılı hedef uca 1-10 yıl yakın ama hiçbir uçla birebir değil (turgut-reis 1485↔1487
    # sınıfının yerleşimdeki aynası). Uzak yıl ③'e düşer; hicrî tahmini yalnız açık
    # işaretle ("hicrî", "828 (1425)") yapılır — sayı-büyüklüğü sezgisi burada kapalı.
    def tara(metin, hedef_uclar, etiket, mk, pencere):
        for c in cumleler(metin):
            for konum, adaylar, hicri, ham in yillar(c, None):
                if re.match(r"\s*km\b", c[konum + len(ham):]):
                    continue
                o, d = bagla(c, konum, ["devir"], len(ham))
                if o is None or d > 40:
                    continue
                if any(a in uclar for a in adaylar):
                    continue        # yıl yerleşimin HERHANGİ bir ucuyla uyuşuyor
                yakin = min((abs(a - h) for a in adaylar for h in hedef_uclar), default=999)
                if yakin > pencere:
                    sinif = "3"
                else:
                    sinif = "3" if DUZELTME_RX.search(c) else "1"
                bul.append(dict(sinif=sinif, alan=etiket, deger=sorted(hedef_uclar), olay="devir",
                                kanit=[dict(metin_alani=mk, cumle=c.strip()[:400], ham=ham,
                                            adaylar=adaylar, hicri=hicri, olay=o, uzaklik=d)]))
    for c in ("d", "s", "v", "isg"):
        for i, p in enumerate(r.get(c) or []):
            if isinstance(p.get("kaynak"), str):
                hu = {x for x in (yil_of(p.get("f")), yil_of(p.get("t"))) if x}
                tara(p["kaynak"], hu, f"{c}[{i}] {p.get('d') or p.get('kid') or p.get('k') or ''} "
                     f"{p.get('f')}→{p.get('t')}", f"{c}[{i}].kaynak", 10)
    for k in ("not", "neden", "devir_beyani", "kaynak"):
        if isinstance(r.get(k), str):
            tara(r[k], uclar, "yerleşim uçları", k, 5)
    return bul

def main():
    sys.path.insert(0, os.path.join(KOK, "arac"))
    try:
        import girdi
    except Exception as e:
        print("ÖLÇÜLEMEDİ: girdi.py okunamadı —", e); return 2
    dosyalar = [["kisi", "kisiler.js"], ["padisah", "padisahlar.js"]] + \
               [["yer", f] for f in girdi.GIRDI_DOSYALARI]
    try:
        import tempfile
        with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8") as fh:
            fh.write(DOKUM_JS)
        sonuc = subprocess.run(["node", fh.name, KOK, json.dumps(dosyalar)], capture_output=True)
        os.unlink(fh.name)
        if sonuc.returncode:
            raise RuntimeError(sonuc.stderr.decode("utf-8", "replace")[-400:])
        ham = sonuc.stdout.decode("utf-8")
    except Exception as e:
        print("ÖLÇÜLEMEDİ: node dökümü —", e); return 2
    kayitlar = json.loads(ham)
    hatalar = [k for k in kayitlar if "hata" in k]
    sayac = {"kisi": 0, "padisah": 0, "yer": 0}
    bulgular = []
    for k in kayitlar:
        if "hata" in k:
            continue
        sayac[k["tur"]] += 1
        fn = {"kisi": kisi, "padisah": padisah, "yer": yerlesim}[k["tur"]]
        for b in fn(k["r"]):
            b.update(tur=k["tur"], dosya="data/" + k["f"], satir=k["satir"], anahtar=k["anahtar"])
            bulgular.append(b)
    print(f"evren: kişi {sayac['kisi']} · padişah {sayac['padisah']} · yerleşim {sayac['yer']} "
          f"({len(dosyalar) - 2} dosya) · döküm hatası {len(hatalar)}")
    for h in hatalar:
        print("  HATA", h)
    from collections import Counter
    c = Counter((b["tur"], b["sinif"]) for b in bulgular)
    for t in ("kisi", "padisah", "yer"):
        print(f"  {t:8s} ①aday {c[(t,'1')]:4d} · ② {c[(t,'2')]:4d} · ③ {c[(t,'3')]:4d}")
    for b in bulgular:
        if b["sinif"] != "1":
            continue
        kn = b["kanit"][0]
        print(f"①? {b['dosya']}:{b['satir']} {b['anahtar']} · {b['alan']}={b['deger']} · metin "
              f"{kn['ham']}→{kn['adaylar']} ({kn['olay']}) · «{kn['cumle'][:160]}»")
    if JSON_CIKTI:
        with open(JSON_CIKTI, "w", encoding="utf-8") as fh:
            json.dump(bulgular, fh, ensure_ascii=False, indent=1)
    return 0

if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.exit(main())
