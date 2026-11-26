# -*- coding: utf-8 -*-
"""EKOKUMA İZ DENETİMİ — okura giden metinde geliştirici izi var mı?
EKO-BOLGE-0073 · 21 Eylül 2026 · 1.MURAT sevki M-4923.

╔══════════════════════════════════════════════════════════════════════════╗
║ SORU                                                                     ║
║   Ek okuma kartlarının OKUYUCUYA BASILAN metninde, oraya ait olmayan     ║
║   geliştirme izi var mı? (kişi adı · oturum adı · şartname · commit ·    ║
║   dosya yolu · ders kodu · parti madde numarası · mesaj numarası …)      ║
║   Kural: 1.MURAT M-4876 — "Metin SON OKUYUCUYA gidiyor: geliştirici      ║
║   notu, 'Emre', iç tartışma olmaz."                                      ║
║   Doğuran vaka: EKO-BOLGE-0073 kendi COMMİTLENMİŞ kartında               ║
║   "⑦ EMRE'NİN SORUSU: …" satırını buldu (M-4915 §5d).                    ║
╚══════════════════════════════════════════════════════════════════════════╝

🔴 YÖNTEM — ALAN LİSTESİ TAHMİN EDİLMEZ, KART GERÇEKTEN ÇİZİLİR
  Hangi alanın basıldığı `tur`a göre DEĞİŞİR (`sebep-sonuc` dalı `kisa`yı
  basmaz, son çare dalı basar; `magazin` `bag`ı basmaz…). Elle tutulan bir
  alan listesi bu yüzden bayatlar — bu projede tam o sınıf üç kez yaşandı.
  ⇒ Alet `js/app.js`in KENDİ fonksiyonlarını (`ekKartHtml`,
    `_maddeliMetniHtmle`, `_icNotAyikla`, `kesinlikRozeti`, `ekEsc`,
    `_tartismaVarMi`, `_icNotMu`) çıkarıp node'da koşturur, kartı ÇİZER ve
    ÇIKAN HTML'in düz metnini tarar. Yani "okura giden" tanımı motorun
    kendisinden gelir, benim listemden değil.

EVREN ve KOVALAR (şart 2)
  Evren : data/ekokuma*.js içindeki bütün `window.EKOKUMA*` kayıtları.
  KOVA A — OKURA GİDEN : ekKartHtml çıktısının düz metni. İhlal buradadır.
  KOVA B — DOSYADA DURAN: `ic_not*` alanları. `_icNotAyikla` bunları
           SİLDİĞİ için okura GİTMEZ; ihlal DEĞİLDİR, yalnız karşılaştırma
           için sayılır ("iz var ama görünmüyor" ile "iz görünüyor"u ayırmak).
  ⚠️ `zincir` alanı kart id'lerini OKURA BASAR (app.js "İlgili: <id>").
     Bu bir tasarım tercihidir, geliştirici izi sayılmadı — ama C kovasında
     ayrıca sayıldı ki hüküm veren görsün.

SINIFLAR (şart 3 — SAYILIR ve SINIFLANIR, DÜZELTİLMEZ)
  KESİN   : okura ait olamayacak izler (kişi/oturum adı, M-NNNN, D-NNN,
            H-00NN, dosya yolu, commit, şartname, koordinatör, ic_not…)
  ŞÜPHELİ : bağlama göre meşru olabilecek üst-dil ("bu kart", "atlasta",
            "ölçüldü"). Karar insanındır; alet HÜKÜM VERMEZ, gösterir.

Kullanım:
  py denetim/ARAC-EKOKUMA-IZ-0921.py            # tarama + özet
  py denetim/ARAC-EKOKUMA-IZ-0921.py --sina     # İKİ YÖNLÜ SINAV (şart 1)
  py denetim/ARAC-EKOKUMA-IZ-0921.py --ayrinti  # her bulguyu bağlamıyla bas
Çıktı: ekrana özet + denetim/EKOKUMA-IZ-0921.json
🔴 SALT OKUR — hiçbir data/ dosyasına yazmaz.
"""
import os, re, sys, json, glob, subprocess, tempfile

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.path.join(KOK, "js", "app.js")
CIKTI = os.path.join(KOK, "denetim", "EKOKUMA-IZ-0921.json")

# ── KALIPLAR ───────────────────────────────────────────────────────────────
# Her kalıp: (ad, regex, açıklama). HEPSİ re.IGNORECASE ile koşar.
#
# 🔴 İKİ KÖR NOKTA — ALETİN KENDİ SINAVI YAKALADI, KAYDA GEÇİYOR:
#   ① İlk yazımda kalıplar büyük/küçük harfi ELLE sayıyordu
#     (`şartname|sartname|SARTNAME|ŞARTNAME`) ve "Şartname" (yalnız ilk harf
#     büyük) HİÇBİRİNE uymuyordu. Sınav kartımda o kelime VARDI ve alet onu
#     GÖRMEDİ — ölçüt "≥5 bulgu" olduğu için sınav yine de "geçti" dedi.
#     ⇒ Ders iki katlı: (a) Türkçe'de harf varyantı elle sayılmaz (D215),
#       (b) gevşek geçme ölçütü körlüğü ÖRTER. İkisi de düzeltildi.
#   ② `ders-kodu` kalıbı `\bD\d{3}\b(?!\s*[°'])` yazılmıştı; kesme işareti
#     koordinat ("D231°") elemek içindi ama Türkçe'nin İYELİK EKİNİ de eliyor
#     ve "D231'de" kaçıyordu — yani kalıp tam da en sık geçen biçimi atıyordu.
#     Artık derece işareti ayrıca elenıyor, kesme işareti ELENMİYOR.
# ⇒ Sınav artık "kaç bulgu" değil, "PLANLANAN KALIPLARIN HEPSİ yakalandı mı"
#   diye soruyor (BEKLENEN_KALIPLAR).
KESIN = [
    # 🔴 ÜÇÜNCÜ KÖR NOKTA — TARAMA SONUCU İNCELENİNCE ÇIKTI, İKİ YANLIŞ POZİTİF:
    #   (a) "emre uymayışı" — Türkçe'de `emir` kelimesinin YÖNELME HÂLİ.
    #       `\bemre\b` + IGNORECASE bunu kişi adı sanıyordu.
    #   (b) "Emre Karakaya, 'Safranbolu Şer'iyye Sicil Defteri…'" — künyede
    #       ATIF YAPILAN AKADEMİSYEN. Adaşlık ihlal değildir.
    # ⇒ Kalıp BÜYÜK/KÜÇÜK HARFE DUYARLI koşar (bayrak 0) ve yalnız iyelik/
    #   ilgi ekli ya da tamamı büyük biçimi arar; ardından BÜYÜK HARFLE
    #   başlayan bir soyadı geliyorsa künye sayılıp ELENİR.
    #   Bedeli: "Emre" tek başına, ekssiz ve küçük harfli geçerse kaçar.
    #   Kazancı: 5 bulgunun 2'si yanlıştı, artık 0.
    ("kisi-emre",      r"(?<![A-Za-zÇĞİÖŞÜçğıöşü])"
                       r"(?:EMRE(?=['’\s,.!?:]|$)|Emre['’]\w+)"
                       r"(?!\s+[A-ZÇĞİÖŞÜ][a-zçğıöşü]+)",  "Emre adı", 0),
    ("kisi-claudemre", r"claudemre",                       "ClaudEmre"),
    ("oturum-adi",     r"\b1\.\s?murat\b|h[üu]davendi?[gğ]ar|"
                       r"\b(eko|kita|motor|sinir|krono|yama|dalga|paket|kunye|isgal)"
                       r"-[a-z0-9ışğüöçİŞĞÜÖÇ]*-?\d{3,4}\b",
                                                           "oturum/sevk adı"),
    ("mesaj-no",       r"\bm-\d{3,5}\b",                   "tahta mesaj numarası"),
    ("ders-kodu",      r"\bd\d{3}(['’]\w*)?\b(?!\s*°)",    "ders kodu (D231 gibi)"),
    ("parti-madde",    r"\bh-\d{4}\b",                     "parti madde numarası"),
    ("sartname",       r"[şs]artname",                     "şartname atfı"),
    ("koordinator",    r"koordinat[öo]r",                   "koordinatör atfı"),
    ("tahta",          r"\btahtaya?\b|\btahta\.py\b",      "tahta"),
    ("commit",         r"\bcommit\w*\b|\bpush\b|\bpathspec\b", "sürüm kontrolü"),
    ("dosya-yolu",     r"\b(data|arac|denetim|oturumlar|js|dersler)/[\w\-./]+",
                                                           "depo içi dosya yolu"),
    ("dosya-adi",      r"\b[\w\-]+\.(js|py|json|md)\b",    "dosya adı"),
    ("ic-not",         r"\bic_not\w*\b|\bi[çc] not\b",     "iç not sızıntısı"),
    # 🔴 `kaynak:` BİLEREK YOK: `ekKartHtml`in kendisi her kartın sonuna
    #   "Kaynak: …" ETİKETİNİ basıyor (app.js, `if (k.kaynak) h += …`).
    #   İlk yazımda kalıba dahildi ve sınavın TEMİZ kartını yakaladı —
    #   yani alet bütün kartları ihlalli sayacaktı. Motorun kendi etiketi
    #   sızıntı değildir. Sınav bunu yakaladı, kalıp daraltıldı.
    ("alan-adi",       r"\b(yer_id|vefat_id|ic_not_\w+)\b|"
                       r"(?<![A-Za-zÇĞİÖŞÜçğıöşü])(etiket|olay|zincir|kesinlik|tur|gun):",
                                                           "şema alan adı"),
    ("tdv-tuzagi",     r"tdv tuza[ğg]ı|tuza[ğg]ı\s*[①-⑳]", "iç yöntem terimi"),
    ("slug-dili",      r"\bslug\b|\bhttp\s*3?02\b|\bg[öo]vde\s*(okundu|[çc]ekildi)",
                                                           "kaynak çekme dili"),
]
SUPHELI = [
    ("kart-ustdili",   r"\bbu kart\b|\bkartta\b|\bkart[ıi]n\b|\bkart[ıi]m[ıi]z\b",
                                                           "kartın kendine atfı"),
    ("atlas-ustdili",  r"\batlas(ta|[ıi]n|a|[ıi])?\b",     "atlasa atıf"),
    ("kronoloji-ustd", r"kronoloji(de|deki|ye|nin)\b|\bmadde(ye|nin|si) ba[ğg]l",
                                                           "kronolojiye atıf"),
    ("olcum-ustdili",  r"\b[öo]l[çc][üu]ld[üu]\b|\b[öo]l[çc]t[üu]m\b|"
                       r"\btarand[ıi]\b|\bsay[ıi]ld[ıi]\b", "ölçüm dili"),
    ("bulunamadi",     r"\bbulunamad[ıi]\b|\b[öo]l[çc][üu]lemedi\b",
                                                           "kaynak boşluğu beyanı"),
]
BAYRAK = re.IGNORECASE | re.UNICODE

# Sınav kartına BİLEREK konan kalıplar — hepsi yakalanmalı (şart 1).
BEKLENEN_KALIPLAR = {"kisi-emre", "oturum-adi", "mesaj-no", "ders-kodu",
                     "parti-madde", "sartname", "commit", "dosya-yolu",
                     "dosya-adi", "ic-not"}

# ── app.js'ten çizici zinciri ──────────────────────────────────────────────
GEREKLI = ["function ekEsc(", "function _icNotMu(", "function _icNotAyikla(",
           "function kesinlikRozeti(", "function _maddeliMetniHtmle(",
           "function _tartismaVarMi(", "function ekKartHtml("]
SABIT = ["var _DAIRE_RAKAM_VAR = /", "var _DAIRE_RAKAM_ONCESI = /"]


def app_parcalari():
    app = open(APP, encoding="utf-8").read()
    parca = []
    for s in SABIT:
        i = app.index(s)
        parca.append(app[i:app.index("\n", i)])
    for imza in GEREKLI:
        i = app.find(imza)
        if i < 0:
            raise SystemExit("🔴 app.js'te bulunamadı: " + imza +
                             "  (fonksiyon yeniden adlandırılmış olabilir — "
                             "alet SESSİZCE yanlış ölçmesin diye duruyor)")
        parca.append(app[i:app.index("\n}", i) + 2])
    return "\n".join(parca)


CIZICI = r"""
const fs = require("fs");
const girdi = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const sandbox = {};
new Function("window", girdi.kod + "\nwindow.__ciz = ekKartHtml;")(sandbox);
const ciz = sandbox.__ciz;
const cikti = [];
for (const yol of girdi.dosyalar) {
  const w = {};
  let veri;
  try { veri = fs.readFileSync(yol, "utf8"); }
  catch (e) { cikti.push({dosya: yol, hata: "okunamadi"}); continue; }
  try { new Function("window", veri)(w); }
  catch (e) { cikti.push({dosya: yol, hata: "eval: " + e.message}); continue; }
  for (const anahtar of Object.keys(w)) {
    if (!/^EKOKUMA(_[A-Z0-9]+)?$/.test(anahtar)) continue;
    const dizi = w[anahtar];
    if (!Array.isArray(dizi)) continue;
    for (const k of dizi) {
      let html = "";
      try { html = ciz(k); } catch (e) { html = "__CIZILEMEDI__ " + e.message; }
      // ALAN ATFI — modelleme YOK, ÖLÇÜM: her alan tek tek bosaltilip kart
      // yeniden cizilir. HTML degisiyorsa o alan RENDER EDILIYOR demektir ve
      // kaybolan metin o alanin katkisidir. Boylece "hangi alan basiliyor"
      // sorusu app.js'in dallarini elle modellemeden cevaplanir.
      const alanKatki = {};
      if (!html.startsWith("__CIZILEMEDI__")) {
        for (const alan of Object.keys(k)) {
          if (alan === "id" || alan === "tur") continue;
          const kopya = Object.assign({}, k);
          kopya[alan] = Array.isArray(k[alan]) ? [] : "";
          let h2 = "";
          try { h2 = ciz(kopya); } catch (e) { continue; }
          if (h2 !== html) alanKatki[alan] = h2;   // render EDILIYOR
        }
      }
      const icnot = Object.keys(k)
        .filter((a) => /^ic_not/.test(a))
        .map((a) => String(k[a])).join("\n");
      cikti.push({
        dosya: yol, degisken: anahtar, id: k.id || "(id yok)",
        tur: k.tur || "(tur yok)", html: html, ic_not: icnot,
        alan_katki: alanKatki,
        zincir: Array.isArray(k.zincir) ? k.zincir : []
      });
    }
  }
}
fs.writeFileSync(girdi.cikti, JSON.stringify(cikti), "utf8");
"""


def duz_metin(html):
    m = re.sub(r"(?s)<[^>]+>", " ", html)
    for a, b in (("&amp;", "&"), ("&lt;", "<"), ("&gt;", ">"),
                 ("&quot;", '"'), ("&#39;", "'"), ("&nbsp;", " ")):
        m = m.replace(a, b)
    return re.sub(r"[ \t\xa0]+", " ", m).strip()


def tara(metin, kaliplar):
    """Kalıp 3'lü ise BAYRAK (IGNORECASE) ile, 4'lü ise kendi bayrağıyla koşar.
    Dördüncü öğe, büyük/küçük harfe DUYARLI olması gereken kalıplar içindir
    (`kisi-emre`: 'emre uymak' fiili ile 'Emre'nin' adını ayırmanın tek yolu)."""
    bulgu = []
    for kalip in kaliplar:
        ad, desen, aciklama = kalip[0], kalip[1], kalip[2]
        bayrak = kalip[3] if len(kalip) > 3 else BAYRAK
        for m in re.finditer(desen, metin, bayrak):
            a, b = max(0, m.start() - 45), min(len(metin), m.end() + 45)
            bulgu.append({"kalip": ad, "aciklama": aciklama,
                          "eslesen": m.group(0),
                          "baglam": "…" + metin[a:b] + "…"})
    return bulgu


def kartlari_ciz(dosyalar):
    kod = app_parcalari()
    tmp = tempfile.mkdtemp(prefix="ekokuma_iz_")
    g = os.path.join(tmp, "girdi.json")
    c = os.path.join(tmp, "cikti.json")
    s = os.path.join(tmp, "ciz.js")
    json.dump({"kod": kod, "dosyalar": dosyalar, "cikti": c},
              open(g, "w", encoding="utf-8"), ensure_ascii=False)
    open(s, "w", encoding="utf-8").write(CIZICI)
    r = subprocess.run(["node", s, g], capture_output=True, text=True,
                       encoding="utf-8")
    if r.returncode != 0:
        raise SystemExit("🔴 çizici koşmadı:\n" + (r.stderr or "")[:3000])
    return json.load(open(c, encoding="utf-8"))


# ── İKİ YÖNLÜ SINAV (şart 1) ───────────────────────────────────────────────
SINAV_KIRLI = """window.EKOKUMA_SINAVKIRLI = [
{ id:"sinav-kirli", tur:"tartisma",
  baslik:"Sınav kartı — kirli",
  metin:"① Emre'nin sorusu şuydu. Şartname H-0012 diyor, 1.MURAT M-4444'te "+
        "onayladı; ayrıntı data/olaylar_ek5.js ve D231'de. ic_not: commitlendi. "+
        "② EKO-BOLGE-0073 ölçtü, slug ölüydü (HTTP 302).",
  bag:"Bu kart ölçüldü.", kesinlik:"kesin", olay:[], kaynak:"TDV: timar",
  ic_not:"Burası okura GİTMEZ — Emre, M-4444, D231 burada serbest." }
];
"""
SINAV_TEMIZ = """window.EKOKUMA_SINAVTEMIZ = [
{ id:"sinav-temiz", tur:"tartisma",
  baslik:"Sınav kartı — temiz",
  metin:"① Tımar sistemi, nakit ekonomisinin gelişmediği devletlerde "+
        "süvarinin masrafını toprak geliriyle karşılamanın yoluydu. "+
        "② Bizans'ta aynı düzenin adı pronoia idi. "+
        "③ TUZAK — Has Murad Paşa'nın emre uymayışı kaynaklarda iki sebebe "+
        "bağlanır. ('emre' burada kişi adı DEĞİL, `emir`in yönelme hâli.)",
  bag:"Önemi: sistemin adı değişse de sorunu aynıydı.",
  kesinlik:"kesin", olay:[],
  kaynak:"TDV: timar · Emre Karakaya, \\"Safranbolu Şer'iyye Sicili\\" "+
         "(TUZAK: künyede atıf yapılan akademisyen, ihlal değil)",
  ic_not:"Emre, M-4444, D231, data/x.js — hepsi burada ve okura gitmiyor." }
];
"""


def sinav():
    tmp = tempfile.mkdtemp(prefix="ekokuma_iz_sinav_")
    kirli = os.path.join(tmp, "ekokuma_sinavkirli.js")
    temiz = os.path.join(tmp, "ekokuma_sinavtemiz.js")
    open(kirli, "w", encoding="utf-8").write(SINAV_KIRLI)
    open(temiz, "w", encoding="utf-8").write(SINAV_TEMIZ)
    kartlar = kartlari_ciz([kirli.replace("\\", "/"), temiz.replace("\\", "/")])
    sonuc = {}
    for k in kartlar:
        okur = duz_metin(k.get("html", ""))
        sonuc[k["id"]] = {
            "okur_kesin": tara(okur, KESIN),
            "okur_supheli": tara(okur, SUPHELI),
            "icnot_kesin": tara(k.get("ic_not", ""), KESIN),
        }
    print("── İKİ YÖNLÜ SINAV ──────────────────────────────────────────────")
    a = sonuc.get("sinav-kirli", {})
    b = sonuc.get("sinav-temiz", {})
    ak, bk = a.get("okur_kesin", []), b.get("okur_kesin", [])
    ai, bi = len(a.get("icnot_kesin", [])), len(b.get("icnot_kesin", []))

    # ① GEÇME ÖLÇÜTÜ SAYI DEĞİL KÜME: kirli karta BİLEREK konan her kalıp
    #    yakalanmalı. "≥5 bulgu" ölçütü ilk yazımda İKİ körlüğü örtmüştü.
    yakalanan = {x["kalip"] for x in ak}
    kacan = sorted(BEKLENEN_KALIPLAR - yakalanan)
    y1 = not kacan
    y2 = len(bk) == 0
    y3 = ai > 0 and bi > 0          # ic_not kovası ayrı çalışıyor mu

    print("  ① kirli kart: beklenen %d kalıbın %d'i yakalandı   %s"
          % (len(BEKLENEN_KALIPLAR), len(BEKLENEN_KALIPLAR & yakalanan),
             "✓" if y1 else "🔴 ALET KÖR"))
    for x in ak:
        print("       %-14s %s" % (x["kalip"], x["eslesen"]))
    if kacan:
        print("       🔴 KAÇAN KALIP: " + ", ".join(kacan))
    print("  ② temiz kart yanlış yakalanıyor mu? KESİN bulgu = %2d   %s"
          % (len(bk), "✓ yanlış pozitif yok" if y2 else "🔴 YANLIŞ POZİTİF"))
    for x in bk[:8]:
        print("       %-14s %s   %s" % (x["kalip"], x["eslesen"], x["baglam"][:70]))
    print("  ③ ic_not AYRI kovada mı? (ikisinde de iz var, okura gitmiyor)")
    print("       kirli ic_not=%d · temiz ic_not=%d   %s"
          % (ai, bi, "✓" if y3 else "🔴 KOVA AYRIMI ÇALIŞMIYOR"))
    tamam = y1 and y2 and y3
    print("  SINAV: " + ("GEÇTİ — sayıya güvenilebilir ✓" if tamam
                         else "🔴 GEÇMEDİ — tarama sonucu KULLANILMAZ"))
    return tamam


# ── ANA TARAMA ─────────────────────────────────────────────────────────────
def main():
    ayrinti = "--ayrinti" in sys.argv
    if "--sina" in sys.argv:
        sys.exit(0 if sinav() else 1)

    if not sinav():
        sys.exit("🔴 sınav geçmeden tarama yapılmaz (şart 1).")
    print()

    dosyalar = sorted(glob.glob(os.path.join(KOK, "data", "ekokuma*.js")))
    dosyalar = [d.replace("\\", "/") for d in dosyalar]
    kartlar = kartlari_ciz(dosyalar)

    hatali = [k for k in kartlar if k.get("hata")]
    kartlar = [k for k in kartlar if not k.get("hata")]

    rapor = {"evren": {"dosya": len(dosyalar), "kart": len(kartlar),
                       "okunamayan_dosya": hatali},
             "kova_A_okura_giden": [], "kova_B_ic_not": [],
             "kova_C_zincir_id": 0, "ozet": {}}
    kesin_kart, supheli_kart, kalip_say = set(), set(), {}
    cizilemeyen = []
    alan_say = {}            # hangi RENDER EDİLEN alanda kaç KESİN iz
    govde_kart, kaynak_kart = set(), set()
    basilan_alanlar = {}     # ölçülen "bu alan render ediliyor" sayacı
    for k in kartlar:
        html = k.get("html", "")
        if html.startswith("__CIZILEMEDI__"):
            cizilemeyen.append({"id": k["id"], "dosya": k["dosya"],
                                "hata": html})
            continue
        okur = duz_metin(html)
        kes = tara(okur, KESIN)
        sup = tara(okur, SUPHELI)
        rapor["kova_C_zincir_id"] += len(k.get("zincir") or [])
        katki = k.get("alan_katki") or {}
        for alan in katki:
            basilan_alanlar[alan] = basilan_alanlar.get(alan, 0) + 1
        if kes:
            kesin_kart.add(k["id"])
            # ALAN ATFI: bir bulgu, o alan boşaltılınca KAYBOLUYORSA o alandandır.
            for x in kes:
                kalip_say[x["kalip"]] = kalip_say.get(x["kalip"], 0) + 1
                # 🔴 ATIF ÖLÇÜTÜ VARLIK DEĞİL SAYIMDIR. İlk yazımda "alan
                #   boşalınca dizgi KAYBOLDU mu" diye soruyordum; aynı dizgi
                #   iki alanda birden geçtiğinde (ör. dosya adı hem `metin`de
                #   hem `kaynak`ta) birini boşaltmak onu yok etmediği için
                #   bulgu HİÇBİR alana atfedilemiyordu — 51 bulgu böyle
                #   "(atfedilemedi)" kovasına düşmüştü. Artık ESLEŞME SAYISI
                #   düşüyor mu diye bakılıyor; iki alanda da geçiyorsa bulgu
                #   İKİSİNE BİRDEN atfedilir.
                nereden = []
                hedef = x["eslesen"].lower()
                tam = duz_metin(html).lower().count(hedef)
                for alan, h2 in katki.items():
                    if duz_metin(h2).lower().count(hedef) < tam:
                        nereden.append(alan)
                x["alan"] = nereden or ["(atfedilemedi)"]
                for a in x["alan"]:
                    alan_say[a] = alan_say.get(a, 0) + 1
            alanlar = {a for x in kes for a in x["alan"]}
            if alanlar - {"kaynak"}:
                govde_kart.add(k["id"])
            if "kaynak" in alanlar:
                kaynak_kart.add(k["id"])
            rapor["kova_A_okura_giden"].append(
                {"dosya": k["dosya"], "id": k["id"], "tur": k["tur"],
                 "sinif": "KESIN",
                 "agirlik": "GOVDE" if (alanlar - {"kaynak"}) else "KAYNAK-SATIRI",
                 "bulgu": kes})
        if sup:
            supheli_kart.add(k["id"])
            rapor["kova_A_okura_giden"].append(
                {"dosya": k["dosya"], "id": k["id"], "tur": k["tur"],
                 "sinif": "SUPHELI", "bulgu": sup})
        ic = tara(k.get("ic_not", ""), KESIN)
        if ic:
            rapor["kova_B_ic_not"].append(
                {"dosya": k["dosya"], "id": k["id"], "iz": len(ic)})

    rapor["cizilemeyen"] = cizilemeyen
    dosya_kesin = sorted({s["dosya"] for s in rapor["kova_A_okura_giden"]
                          if s["sinif"] == "KESIN"})
    rapor["ozet"] = {
        "taranan_dosya": len(dosyalar), "taranan_kart": len(kartlar),
        "cizilemeyen_kart": len(cizilemeyen),
        "KESIN_ihlalli_kart": len(kesin_kart),
        "KESIN_ihlalli_dosya": len(dosya_kesin),
        "KESIN_govde_kart": len(govde_kart),
        "KESIN_yalniz_kaynak_satiri_kart": len(kaynak_kart - govde_kart),
        "SUPHELI_kart": len(supheli_kart),
        "kalip_dagilimi": dict(sorted(kalip_say.items(), key=lambda x: -x[1])),
        "alan_dagilimi": dict(sorted(alan_say.items(), key=lambda x: -x[1])),
        "render_edilen_alanlar": dict(sorted(basilan_alanlar.items(),
                                             key=lambda x: -x[1])),
        "ic_not_izli_kart": len(rapor["kova_B_ic_not"]),
        "zincir_basilan_id": rapor["kova_C_zincir_id"],
    }
    json.dump(rapor, open(CIKTI, "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)

    o = rapor["ozet"]
    print("── EVREN ────────────────────────────────────────────────────────")
    print("  data/ekokuma*.js : %d dosya · %d kart" % (o["taranan_dosya"],
                                                       o["taranan_kart"]))
    if hatali:
        print("  🔴 okunamayan dosya: %d" % len(hatali))
        for h in hatali:
            print("      %s — %s" % (h["dosya"], h["hata"]))
    if cizilemeyen:
        print("  🔴 ÇİZİLEMEYEN kart: %d (okura ne gittiği ÖLÇÜLEMEDİ)"
              % len(cizilemeyen))
        for c in cizilemeyen[:10]:
            print("      %s · %s" % (c["dosya"], c["id"]))
    print()
    print("── RENDER EDİLEN ALANLAR (ölçüldü, modellenmedi) ────────────────")
    print("  Bir alan, boşaltılınca çıkan HTML değişiyorsa RENDER EDİLİYOR.")
    print("  " + " · ".join("%s:%d" % (a, n)
                            for a, n in o["render_edilen_alanlar"].items()))
    print()
    print("── KOVA A · OKURA GİDEN METİN (ihlal burada) ────────────────────")
    print("  KESİN  : %d kart · %d dosya" % (o["KESIN_ihlalli_kart"],
                                             o["KESIN_ihlalli_dosya"]))
    print("     ├─ GÖVDEDE (başlık/metin/bağ…)   : %d kart  ← AĞIR"
          % o["KESIN_govde_kart"])
    print("     └─ YALNIZ 'Kaynak:' satırında    : %d kart  ← hafif, "
          "künye hijyeni" % o["KESIN_yalniz_kaynak_satiri_kart"])
    print("  kalıp dağılımı:")
    for ad, n in o["kalip_dagilimi"].items():
        print("       %-16s %d" % (ad, n))
    print("  alan dağılımı (izin hangi alandan geldiği ÖLÇÜLDÜ):")
    for ad, n in o["alan_dagilimi"].items():
        print("       %-16s %d" % (ad, n))
    print("  ŞÜPHELİ: %d kart (hüküm insanın, alet göstermekle yetinir)"
          % o["SUPHELI_kart"])
    print()
    print("── KOVA B · ic_not (okura GİTMEZ, ihlal DEĞİL) ──────────────────")
    print("  iz taşıyan kart: %d — karşılaştırma için sayıldı" %
          o["ic_not_izli_kart"])
    print("── KOVA C · zincir id'leri (okura basılıyor, tasarım tercihi) ───")
    print("  basılan id sayısı: %d" % o["zincir_basilan_id"])
    print()
    if rapor["kova_A_okura_giden"]:
        print("── KESİN BULGULAR ───────────────────────────────────────────")
        for s in sorted(rapor["kova_A_okura_giden"],
                        key=lambda z: (z.get("agirlik") != "GOVDE",
                                       z["dosya"])):
            if s["sinif"] != "KESIN":
                continue
            print("  [%s] %s · %s" % (s.get("agirlik", "?"),
                                      s["dosya"].split("/")[-1], s["id"]))
            for x in (s["bulgu"] if ayrinti else s["bulgu"][:3]):
                print("      [%s · %s] %s" % (x["kalip"],
                                              ",".join(x.get("alan", [])),
                                              x["baglam"][:130]))
            if not ayrinti and len(s["bulgu"]) > 3:
                print("      … %d bulgu daha (--ayrinti)" % (len(s["bulgu"]) - 3))
    print()
    print("🔴 DÜZELTME YAPILMADI (şart 3): bir kartın metnini değiştirmek")
    print("   anlamını da değiştirebilir; toplu düzeltme 1.MURAT hükmüyle.")
    print("-> " + CIKTI)


if __name__ == "__main__":
    main()
