# -*- coding: utf-8 -*-
"""PAKET-A5 — 0035/H-0034 afet etiketleri + 0035/H-0066 konu başlıkları (26 başlık).

py denetim/ARAC-A5-ETIKET-0913.py MADDELER.json            → ölç, ekrana bas
py denetim/ARAC-A5-ETIKET-0913.py MADDELER.json --yaz      → data/etiket_yama.js'e
                                                             "konu26" ve "afet" bölümlerini ekle
Girdi: denetim/ARAC-A3-MADDE-TOPLA-0913.js çıktısı (çekirdek + kuyruk, 83 dosya).

🔴 ÖNERİDİR, VERİ DEĞİL — etiket_yama.js motor/arayüz tarafından okunmaz (dosyanın
   kendi başlığı). Uygulama js/suzgec.js ve veri sahiplerinde.
KURAL: başlık = (k ∪ tur ∪ etiket değer kümesi) VEYA başlık (b) üzerinde kelime deseni.
   Gövde (d) KULLANILMAZ — gövde kelimesi konuyu değil bağlamı gösterir (imar elemesinin
   sekiz geçişlik dersi, etiket_yama.js imar bölümü). Afette gövde yalnız OKUNARAK
   seçilmiş açık listeyle girer.
"""
import io, json, re, sys, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
O = json.load(open(sys.argv[1], encoding="utf-8"))
H = "a-zçğıöşüâîûA-ZÇĞİÖŞÜÂÎÛ"
def kel(*ws):
    return re.compile("(?<![" + H + "])(" + "|".join(ws) + ")", re.I)

# ── AFET (H-0034) ────────────────────────────────────────────────────
AFET_ALT = {
  "afet-deprem": kel("deprem", "zelzele"),
  "afet-yangin": kel("yangın", "harîk"),
  # ⚠️ ilk koşuda "seli" sınırsızdı ve "Selim"i yakaladı (25 sahte sel) — sınır her ekte
  "afet-sel": kel("sel(?:i|in|de|den|ler|leri)?(?![" + H + "])", "taşkın", "su baskını"),
  "afet-salgin": kel("veba", "tâun", "kolera", "salgın", "çiçek hastalığı", "tifüs", "kara ölüm"),
  # ⚠️ "çekirge" tek başına Boğdan voyvodası "Çekirge Stefan"ı yakalar — yalnız istila bağlamı
  "afet-kitlik": kel("kıtlı[kğ]", "kuraklık", "çekirge istila", "çekirge sürü"),
  "afet-volkan-firtina": kel("yanardağ", "volkan", "tsunami", "kasırga"),
}
AFET_DEGER = {"salgin": "afet-salgin", "veba": "afet-salgin", "kitlik": "afet-kitlik",
              "dogal-afet": None, "afet": None}
# başlıkta eşleşip OKUNARAK elenenler (t|b öneki) — afet değil, insan eliyle kuşatma açlığı
AFET_HARIC = {"1554-01-26|Siena kuşatmasının başlaması", "1722-07-01|İsfahan kuşatması sırasında"}
# yalnız gövdede geçip OKUNARAK seçilenler — olayın kendisi afet ya da afetin doğrudan sonucu
AFET_GOVDE_DAHIL = {
  "1755-11-02|Pombal, Lizbon'un yeniden": ["afet-deprem"],
  "1354-03-02|Gelibolu'nun alınışı": ["afet-deprem"],
  "1631-05-20|Magdeburg'un yakılıp": ["afet-yangin"],
  "1571-01-01|Devlet Giray, Oka Nehri": ["afet-yangin"],
  "1736-01-01|Feldmareşal Münnich": ["afet-yangin"],
  "1720-06-01|Tulumbacı Ocağı'nın kuruluşu": ["afet-yangin"],
  "1351-01-01|Sarı Nehir'in Jia Lu'ya": ["afet-sel"],
  "1494-01-01|Liu Daxia'nın Sarı Nehir": ["afet-sel"],
  "1642-09-01|Kaifeng sedleri bilerek": ["afet-sel"],
  "1796-05-14|Edward Jenner ilk çiçek": ["afet-salgin"],
  "1803-11-30|Balmis Aşı Seferi": ["afet-salgin"],
  "1890-12-01|Kitasato Şibasaburō": ["afet-salgin"],
  "1416-01-01|İbn Hacer Bezlü'l-mâ'ûn": ["afet-salgin"],
  "1430-01-01|Bezlü'l-mâ'ûn on dört": ["afet-salgin"],
  "1402-09-03|Gian Galeazzo'nun ölümü": ["afet-salgin"],
  "1846-11-29|Dede Efendi'nin hac": ["afet-salgin"],
  "1270-07-18|Sekizinci Haçlı Seferi": ["afet-salgin"],
  "1770-01-01|Büyük Bengal Kıtlığı": ["afet-kitlik", "afet-salgin"],
  "1666-01-01|Kaşan-İsfahan bölgesinde": ["afet-kitlik"],
  "1782-01-01|Tenmei Kıtlığı başladı": ["afet-kitlik", "afet-volkan-firtina"],
  "1908-12-28|Messina Depremi": ["afet-volkan-firtina"],
  "1303-08-08|Doğu Akdeniz depremi": ["afet-volkan-firtina"],
  "1755-11-01|Büyük Lizbon Depremi": ["afet-volkan-firtina", "afet-yangin"],
  "1923-09-01|Büyük Kantō Depremi": ["afet-yangin"],
}

def anahtar_eslesir(o, kume):
    return any((o["t"] + "|" + o["b"]).startswith(x) for x in kume)

def afet_etiketleri(o):
    out = set()
    if not anahtar_eslesir(o, AFET_HARIC):
        for ad, rx in AFET_ALT.items():
            if rx.search(o["b"]):
                out.add(ad)
    for v in [o["k"], o["tur"]] + o["etiket"]:
        if v in AFET_DEGER and AFET_DEGER[v]:
            out.add(AFET_DEGER[v])
    for on, ek in AFET_GOVDE_DAHIL.items():
        if (o["t"] + "|" + o["b"]).startswith(on):
            out.update(ek)
    return out

# ── KONU BAŞLIKLARI (H-0066) — Emre'nin listesi, SIRASI ve ADI korunarak ──
K = [
 ("askeri", "Askerî",
  {"savas","fetih","kayip","kazanc","kusatma","sefer","askeri","deniz","isgal","toprak-kazanc","toprak-kayip","toprak-kaybi","toprak","ic-savas","denizcilik","donanma","serhat","hacli","akin","yagma","yenilgi","zafer","savunma","kurtulus","savas-ilani","tahkimat","asker"}, None),
 ("siyasi", "Siyasî",
  {"siyaset","siyasi","bolunme","birlesme","yikilis","son","kurulus","tabiiyet","itaat","bagimsizlik","milliyetcilik","devrim","devlet-bolunmesi","devlet-sonu","devlet-kurulus","koloni","somurge","sömürgecilik","kolonyalizm","kolonizasyon","kriz","vassal","ilhak","donum-noktasi"}, None),
 ("idari", "İdarî",
  {"idari","eyalet","idari merkez","baskent","başkent","sinir","sınır","ikta"}, kel("eyalet", "sancağı", "beylerbeyiliği", "vilâyet", "kaza teşkilât")),
 ("diplomasi", "Diplomasi ve uluslararası ilişkiler",
  {"antlasma","antlaşma","diplomasi","ittifak","baris","barış","dis-iliskiler","milletler-cemiyeti","osmanli-temasi","himaye","haraç","ticaret antlaşması","aracilik"}, kel("elçi", "sefaret", "konferans", "kongre")),
 ("kisiler", "Kişiler",
  {"kisi","olum","ölüm","dogum","vefat","idam","suikast","esaret"}, kel("vefatı", "ölümü", "doğumu", "doğdu", "öldü", "öldürüldü", "idamı", "idam edildi", "hayatı")),
 ("isyan", "İç ayaklanma ve isyanlar",
  {"isyan","ayaklanma","ic-karisiklik","ic-savas","direnis","direniş","hizip","isyan sonu"}, kel("isyan", "ayaklanma", "ihtilâl", "ihtilal")),
 ("darbe", "Darbeler",
  {"darbe","darbe-askeri","darbe-siyasi"}, kel("darbe", "hal'i", "hal’i", "tahttan indiril")),
 ("burokrasi", "Bürokrasi",
  {"sadrazam","kurum"}, kel("sadrazam", "vezîriâzam", "sadâret", "şeyhülislâm", "defterdar", "reîsülküttâb", "nişancı", "kaptan-ı derya", "divan-ı hümâyun", "nezâret", "nazırlığ")),
 ("hanedan", "Hânedan",
  {"taht","evlilik","hukumdar","hanedan","culus","cülus","taht-kavgasi","taht-degisikligi","hanedan-degisimi","hükümdar değişimi","veraset","saray","taç","tahta çıkış","müşterek saltanat"}, kel("tahta çık", "cülûs", "hânedan", "hanedan", "şehzade", "padişah")),
 ("bilim", "Bilim teknoloji",
  {"bilim","teknoloji","tip","tıp","astronomi","muhendislik","ilim","bakteriyoloji","matbaa","saglik","hastane","mekanik","otomat","tıp eseri"}, kel("rasathane", "matbaa", "hastane", "tıp", "astronom", "bilim")),
 ("ekonomi", "Ekonomi",
  {"ekonomi","ticaret","mali","finans","para","vergi","gümüş","darphane","sikke","tekel","baharat","esir-ticareti","seker","tahil","lonca","esnaf","zanaat","kervan","ticaret yolu","Karadeniz ticareti","karimi"}, kel("ticaret", "gümrük", "borç", "akçe", "sikke", "vergi", "kapitülasyon", "tahvil")),
 ("din", "Din ve felsefe",
  {"din","felsefe","tasavvuf","tarikat","misyonerlik","fikih","Mevlevîlik","vahdet-i vücûd","Katoliklik","fütüvvet","Ahilik","suryani","tapinak","manastir"}, kel("cami", "tarikat", "şeyh", "patrik", "kilise", "fetva", "halife", "hilâfet", "ulemâ", "hac ", "hacc")),
 ("sanat", "Sanat",
  {"muzik","minyatur","minyatür","siir","tiyatro","dans","ukiyo-e","haiku","zanaat"}, kel("ressam", "minyatür", "mûsiki", "musiki", "besteci", "şair", "dîvân", "heykel", "opera", "tiyatro", "hattat", "çini", "resim")),
 ("kultur", "Kültür",
  {"kultur","edebiyat","dil","kitap","basin","tarih-yaziciligi","tarih","ceviri","yazi","seyahat","toren","kokugaku","cay-seremonisi","tartisma","hikaye"}, kel("gazete", "kitap", "eser", "tarihçi", "seyahatnâme", "edebiyat")),
 ("spor", "Spor",
  {"spor"}, kel("cirit", "güreş", "okçu", "Kırkpınar", "olimpiyat", "futbol", "Okmeydanı")),
 ("imar", "İmar ve mimari",
  {"imar","mimari","sehircilik","cami","kopru","külliye","kervansaray","ulucami","tersane","restorasyon","yenileme","kale","Ulu Cami","İsa Bey Camii","Karatay Medresesi","İnce Minareli Medrese","Sultan Hanı"}, kel("camii", "külliye", "köprü", "saray", "inşa", "sebil", "çeşme", "kervansaray", "türbe")),
 ("egitim", "Eğitim",
  {"egitim","medrese"}, kel("medrese", "mektep", "mekteb", "okul", "dârülfünûn", "darülfünun", "üniversite", "maârif", "maarif")),
 ("islahat", "Yenileşme ve ıslahat",
  {"reform","islahat","anayasa","donusum"}, kel("ıslahat", "tanzimat", "nizâm-ı cedîd", "nizam-ı cedid", "meşrutiyet", "reform", "yenileşme")),
 ("sosyal", "Sosyal yaşam",
  {"sosyal","sosyoloji","toplum","kadin","vakif","kast","azinlik","hosgoru"}, kel("kahvehane", "hamam", "düğün", "şenlik", "sûr-ı hümâyun", "kıyafet", "yasağı")),
 ("afet", "Doğal afetler ve hastalıklar", set(), None),   # afet_etiketleri() ile
 ("demografi", "Demografi ve göç",
  {"goc","göç","demografi","iskan","tehcir","surgun","sürgün","gocmen","nufus","diaspora"}, kel("göç", "muhacir", "iskân", "sürgün", "tehcir", "nüfus sayımı", "mübadele")),
 ("hukuk", "Hukuk düzeni",
  {"kanun","hukuk","anayasa","kadı","meclis","dilekce"}, kel("kanunnâme", "kanunname", "nizamnâme", "nizamname", "mahkeme", "mecelle", "hukuk", "kanun")),
 ("ulastirma", "Ulaştırma haberleşme altyapı",
  {"ulasim","yol","altyapi","liman","kopru","telgraf"}, kel("demiryolu", "demir yolu", "telgraf", "posta", "kanal", "köprü", "vapur", "tramvay", "tünel", "şimendifer", "isâle", "su yolu")),
 ("sanayi", "Sanayi tarım hayvancılık madencilik",
  {"sanayi","tarim","maden","tahil"}, kel("fabrika", "sanayi", "maden", "tarım", "pamuk", "dokuma", "baruthane", "tophane")),
 ("kesif", "Keşif ve icatlar",
  {"kesif","cografya"}, kel("keşf", "icad", "icat", "buluş", "mucit", "patent", "dolaştı")),
 ("magazin", "Magazin",
  {"magazin","hikaye","rivayet"}, None),
]

def konular(o):
    degerler = set([o["k"], o["tur"]] + o["etiket"]) - {None}
    out = []
    for kid, _, deg, rx in K:
        if kid == "afet":
            if afet_etiketleri(o):
                out.append(kid)
            continue
        if degerler & deg or (rx and rx.search(o["b"])):
            out.append(kid)
    if o.get("vefat_id") and "kisiler" not in out:
        out.append("kisiler")
    return out

sonuc = [(o, konular(o)) for o in O]
say = collections.Counter(k for _, ks in sonuc for k in ks)
yalniz = collections.Counter(ks[0] for _, ks in sonuc if len(ks) == 1)
bos = [o for o, ks in sonuc if not ks]
kova = collections.Counter(o["kova"] for o in bos)
print(f"madde {len(O)} · en az bir başlık {len(O)-len(bos)} (%{100*(len(O)-len(bos))/len(O):.1f}) · başlıksız {len(bos)} {dict(kova)}")
print(f"ortalama başlık/madde {sum(len(ks) for _, ks in sonuc)/len(O):.2f} · birden çok başlık {sum(1 for _, ks in sonuc if len(ks)>1)}")
tablo = []
for kid, ad, deg, rx in K:
    tablo.append({"id": kid, "ad": ad, "madde": say[kid], "yalniz": yalniz[kid],
                  "deger_kumesi": sorted(deg) if kid != "afet" else "afet bölümüne bak",
                  "baslik_deseni": (rx.pattern if rx else None)})
    print(f"  {ad:40} {say[kid]:5}  yalnız {yalniz[kid]:4}")
afetli = [(o, sorted(afet_etiketleri(o))) for o in O]
afetli = [(o, e) for o, e in afetli if e]
aa = collections.Counter(e for _, es in afetli for e in es)
print(f"\nAFET madde {len(afetli)} · alt: {dict(aa)} · çekirdek {sum(1 for o,_ in afetli if o['kova']=='cekirdek')}")
for o in bos[:25]:
    print(f"   BAŞLIKSIZ {o['t']} [{o['kova'][:3]}] k={o['k']} tur={o['tur']} et={o['etiket'][:3]} {o['b'][:70]}")

if "--yaz" in sys.argv:
    yol = "data/etiket_yama.js"
    ham = io.open(yol, encoding="utf-8").read()
    i = ham.index("window.ETIKET_YAMA =")
    j = ham.index("{", i)
    son = ham.rindex("}")
    veri = json.loads(ham[j:son + 1])
    veri["konu26"] = {
      "kaynak": "0035/H-0066 · Emre'nin listesi (26 başlık — sayfada '25' deniyor, liste 26 satır) · PAKET-A5 13 Eylül 2026",
      "kural": "Bir madde bir başlığa girer ⇔ k ∪ tur ∪ etiket değerlerinden biri başlığın deger_kumesi'nde VEYA başlık (b) baslik_deseni'ne uyuyor. Gövde (d) kullanılmaz. Çok başlık serbest (Emre: 'bir madde hem bilim teknoloji hem askeri olabilir'). vefat_id taşıyan madde Kişiler'e girer. Afet başlığı 'afet' bölümündeki kurala bağlı.",
      "uretici": "denetim/ARAC-A5-ETIKET-0913.py",
      "evren": "data/olaylar*.js + data/kronoloji*.js · %d madde (çekirdek %d · kuyruk %d)" % (len(O), sum(1 for o in O if o['kova']=='cekirdek'), sum(1 for o in O if o['kova']=='kuyruk')),
      "olcum": {"en_az_bir_baslik": len(O) - len(bos), "basliksiz": len(bos), "basliksiz_kova": dict(kova),
                "ortalama_baslik": round(sum(len(ks) for _, ks in sonuc) / len(O), 2),
                "birden_cok": sum(1 for _, ks in sonuc if len(ks) > 1),
                "basliksiz_ornek": [f"{o['t']}|{o['b'][:80]}" for o in bos[:40]]},
      "tablo": tablo,
      "sinirlar": [
        "Başlık desenleri kelime düzeyindedir ve yanlış pozitif üretebilir (imar bölümünün 'Köprülü' dersi); 'saray' Hânedan ile İmar'ı, 'kanun' Hukuk ile İslahat'ı birlikte tetikleyebilir — kesişme kasıtlı ama tek tek OKUNMADI (orneklem yok: ölçülemedi).",
        "Sanat ile Kültür verideki k/tur:'kultur' değerinde birleşik duruyor; ayrım yalnız etiket ve başlık desenleriyle yapılabildi — kültür başlığı sanatı da içerir.",
        "Spor · Keşif · Magazin · Ulaştırma · Sanayi başlıkları verideki karşılığı ince olduğu için küçük kalır; bu bir kusur değil, kronolojinin bugünkü içeriği.",
        "577 etiket değerinin çoğu özel ad (kuyruk dosyaları: 'Mardin', 'Timur' …) — başlığa bağlanmadı; normalizasyon ayrı iş."
      ]
    }
    veri["afet"] = {
      "kaynak": "0035/H-0034 · Emre: 'deprem yangın sel gibi afetleri etiketleyelim' · PAKET-A5 13 Eylül 2026",
      "alt_etiketler": {k: v.pattern for k, v in AFET_ALT.items()},
      "deger_eslemesi": {k: v for k, v in AFET_DEGER.items()},
      "kural": "BAŞLIKTA alt etiket deseni (okunarak elenen haric listesi hariç) + mevcut salgin/veba/kitlik değerleri + YALNIZ GÖVDEDE geçip OKUNARAK seçilen açık liste. Gövde deseni tek başına etiket VERMEZ: 125 gövde adayının çoğu savaşın ya da biyografinin yan cümlesiydi.",
      "haric_okunarak": sorted(AFET_HARIC),
      "govde_dahil_okunarak": AFET_GOVDE_DAHIL,
      "olcum": {"madde": len(afetli), "cekirdek": sum(1 for o, _ in afetli if o["kova"] == "cekirdek"), "alt": dict(aa)},
      "maddeler": [{"dosya": o["dosya"], "t": o["t"], "b": o["b"], "etiket_oneri": e} for o, e in afetli],
      "sel_notu": "Emre'nin örneği 'sel' için başlıkta HİÇ madde yok (ölçüldü: 0); gövdede 7 aday okundu, 3'ü seçildi (Sarı Nehir). Osmanlı çekirdeğinde sel maddesi yok — içerik boşluğu, etiket boşluğu değil."
    }
    yeni = ham[:j] + json.dumps(veri, ensure_ascii=False, indent=1) + ham[son + 1:]
    baslik_ek = ("// ── PAKET-A5 (13 Eylül 2026): 'konu26' (0035/H-0066 · Emre'nin 26 başlığı) ve 'afet'\n"
                 "//    (0035/H-0034) bölümleri eklendi — üretici denetim/ARAC-A5-ETIKET-0913.py. ÖNERİ, veri değil.\n")
    yeni = yeni[:i] + baslik_ek + yeni[i:]
    io.open(yol, "w", encoding="utf-8", newline="").write(yeni)
    print("etiket_yama.js yazıldı:", len(yeni), "kr")
