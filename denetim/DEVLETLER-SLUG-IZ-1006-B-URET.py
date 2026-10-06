# DEVLETLER-SLUG-IZ-1006-B — "ucuz okuma turu" 14 kaleminin kaynak önerisini üretir (SALT OKUR).
# Depoya YAZMAZ: data/devletler.js'i okur, önerilen hâli argv[1] yoluna yazar; diff'i çağıran üretir.
# Her alıntı TDV gövdesinden (kaynakça HARİÇ, ARAC-TDV-CIKARICI-1006.tam) BİREBİR aranır; yoksa assert düşer.
# Kullanım: py DEVLETLER-SLUG-IZ-1006-B-URET.py <cikti-yolu> [--onbellek <dizin>]
import sys, os, importlib.util
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sp = importlib.util.spec_from_file_location("cik", os.path.join(KOK, "denetim", "ARAC-TDV-CIKARICI-1006.py"))
cik = importlib.util.module_from_spec(sp); sp.loader.exec_module(cik)
if "--onbellek" in sys.argv:
    cik.ONBELLEK = sys.argv[sys.argv.index("--onbellek") + 1]

# (madde, eski kaynak, slug, birebir alıntı, ek not, yeni t ya da None)
K = [
 ("suriye-lubnan-mandasi#0", "TDV suriye (künyenin kendi kaynak alanından devralındı)", "sam--suriye",
  "Fransızlar temmuzda Suriyeliler’i ağır bir yenilgiye uğrattıktan sonra Şam’a girerek Faysal yönetimine son verdiler (25 Temmuz 1920).",
  " · TDV: suriye — «Temmuz 1920’de Beyrut-Şam arasında Han Meyselûn’da Fransızlar’ın Suriyeliler’i ağır bir yenilgiye uğratmasının ardından Suriye’de Faysal dönemi sona erdi ve kendisi sürgüne gönderildi.» (AY) — eski t 1920-07-24 Meyselûn SAVAŞININ günüdür; maddenin olayı (Faysal yönetiminin sonu) TDV sam--suriye'de 25 Temmuz",
  "1920-07-25"),
 ("filistin-mandasi#0", "TDV filistin (künyenin kendi kaynak alanından)", "filistin",
  "İngiltere, Temmuz 1920 tarihinden itibaren Filistin’de bir sivil manda yönetimi kurdu", " — AY (gün TDV'de yok)", None),
 ("filistin-mandasi#1", "TDV filistin (künyenin kendi kaynak alanından)", "filistin",
  "İngiltere’nin Filistin ve Ürdün üzerinde kurduğu manda idaresi 24 Temmuz 1922’de Milletler Cemiyeti tarafından da onaylandı.", "", None),
 ("urdun-emirligi#0", "TDV urdun (künyenin kendi kaynak alanından)", "urdun",
  "kardeşi Abdullah Ürdün’e gelerek Şubat 1921’de kendini Şarkī Ürdün emîri ilân etti.", " — AY (gün TDV'de yok)", None),
 ("misir-sultanligi#0", "TDV misir (künyenin kendi kaynak alanından, raw HTML doğrulanmış)", "misir",
  "İngiltere, 18 Aralık 1914’te tek taraflı olarak Osmanlı hükümranlık haklarını kaldırıp Mısır’ı himayesine aldı. Hidiv II. Abbas Hilmi’yi de düşmanla iş birliği yaptığı gerekçesiyle 19 Aralık’ta görevden alarak yerine amcası Hüseyin Kâmil’i Mısır sultanı olarak ilân etti.",
  " — himaye ve hükümranlığın kaldırılışı 18 Aralık; Hüseyin Kâmil'in sultan ilânı TDV'de 19 Aralık", None),
 ("misir-sultanligi#1", "TDV misir (künyenin kendi kaynak alanından, raw HTML doğrulanmış)", "misir",
  "Sultan Ahmed Fuâd 15 Mart 1922’de kral (melik) unvanını aldı ve Mısır’da monarşi ilân edildi.", "", None),
 ("misir-kralligi#0", "TDV misir (künyenin kendi kaynak alanından, raw HTML doğrulanmış)", "misir",
  "Sultan Ahmed Fuâd 15 Mart 1922’de kral (melik) unvanını aldı ve Mısır’da monarşi ilân edildi.", "", None),
 ("kesiri-sultanligi#0", "TDV hadramut (künyenin kendi kaynak alanından, 'XV. yüzyılın ikinci yarısı' — yıl kaba)", "hadramut",
  "Aynı yüzyılın ikinci yarısında da Kesîrîler ülkenin bir bölümüne hâkim oldular.",
  " — YÜZYIL YARISI (XV. yy; yıl TDV'de yok, 1450 kaba) · Sayvân/Terîm/Şibâm ayrıntısı bu cümlede yok", None),
 ("kuayti-sultanligi#0", "TDV hadramut (künyenin kendi kaynak alanından)", "hadramut",
  "İngilizler Yâfiîler’i destekleyerek onların 1881 sonunda Şihr ve Mükellâ dahil bütün Hadramut sahilini ele geçirmelerini sağladılar.",
  " — YIL (TDV '1881 sonunda'; gün yok)", None),
 ("kuayti-sultanligi#1", "TDV hadramut (künyenin kendi kaynak alanından)", "hadramut",
  "1888’de imzaladıkları himaye antlaşmasıyla da sahilde hâkim olan Yâfiîler’in dış ilişkilerini tamamen üzerlerine aldılar.",
  " — YIL (gün TDV'de yok)", None),
 ("ingiliz-sudani#0", "TDV sudan (künyenin kendi kaynak alanından, raw HTML doğrulanmış)", "sudan",
  "19 Ocak 1899’da Sudan’da yönetimin çerçevesini oluşturan bir antlaşmanın imzalanmasıyla Sudan’ın kontrolü fiilen İngiltere’nin eline geçmiş oldu.", "", None),
 ("mekke-serifligi#0", "TDV haremeyn (künyenin kendi kaynak alanından)", "haremeyn",
  "Mısır’ın fethiyle birlikte (1517) Memlükler’in nüfuzu altında bulunan Haremeyn de Osmanlı hâkimiyetini tanıdı.",
  " — YIL (gün TDV'de yok)", None),
 ("sani-emirligi#0", "TDV katar (künyenin kendi kaynak alanından)", "katar",
  "Böylece 1871 sonbaharında Katar’da da Osmanlı kontrolü sağlandı ve burası Necid sancağına bağlı bir kaza olarak teşkilâtlandırılıp Câsim b. Sânî fahrî kaymakam tayin edildi.",
  " — MEVSİM (TDV '1871 sonbaharında'); 09-20 günü KAYNAKSIZ (künye f: ile aynı, veriden)", None),
 ("sabah-emirligi#2", "TDV kuveyt (künyenin kendi kaynak alanından)", "kuveyt",
  "Hindistan genel valisi Lord Curzon yüzbaşı Mead’i Küveyt’e göndererek Mübârek es-Sabâh ile gizli bir antlaşma yaptı (23 Ocak 1899).", "", None),
]

govde = {}
def g(slug):
    if slug not in govde:
        kod, h = cik.getir(slug)
        assert kod == "200", (slug, kod)
        govde[slug] = cik.tam(h)["govde"]
    return govde[slug]

yol = os.path.join(KOK, "data", "devletler.js")
ham = open(yol, "rb").read().decode("utf-8")
for madde, eski, slug, q, ek, yeni_t in K:
    assert q in g(slug), ("ALINTI GÖVDEDE YOK", madde, slug)
    for parca in [p for p in ek.split("«")[1:]]:          # ekteki ikinci alıntı da birebir olmalı
        assert parca.split("»")[0] in g("suriye"), ("EK ALINTI YOK", madde)
    yeni = "TDV: %s — «%s»%s" % (slug, q, ek)
    eski_a = 'kaynak:"%s"' % eski
    yeni_a = 'kaynak:"%s"' % yeni.replace('"', '\\"')
    # aynı eski dizgiden birden çok varsa (filistin #0/#1, misir) t değeriyle ayırt edilir
    kid, i = madde.split("#")
    satirlar = ham.split("\n")
    bas = next(n for n, s in enumerate(satirlar) if s.startswith('{ id:"%s"' % kid))
    adaylar = [n for n in range(bas, len(satirlar)) if eski_a in satirlar[n]]
    n = adaylar[0]          # sıralı işlenir: öncekinin satırı artık eski dizgiyi taşımaz
    t_bekl = {"suriye-lubnan-mandasi#0": "1920-07-24", "filistin-mandasi#0": "1920-07-01",
              "filistin-mandasi#1": "1922-07-24", "misir-sultanligi#0": "1914-12-18",
              "misir-sultanligi#1": "1922-03-15"}.get(madde)
    assert t_bekl is None or ('t:"%s"' % t_bekl) in satirlar[n], ("YANLIŞ SATIR", madde)
    satirlar[n] = satirlar[n].replace(eski_a, yeni_a, 1)
    if yeni_t:
        t_eski = satirlar[n].split('t:"')[1].split('"')[0]
        satirlar[n] = satirlar[n].replace('t:"%s"' % t_eski, 't:"%s"' % yeni_t, 1)
    ham = "\n".join(satirlar)
    print("OK", madde, slug, "satir", n + 1)
open(sys.argv[1], "wb").write(ham.encode("utf-8"))
