# -*- coding: utf-8 -*-
"""KOVALAR F (hayalet İlhanlı, 151 nokta) — 1335-1357 arası bölge bölge gerçek sahip, kaynakla.

Yöntem: her noktanın 1335-11-30 sonrası 'ilhanli' dönemi ve ARDINDAN gelen dönem (atlasın halefi) ölçülür; nokta koordinatla
bölgeye atanır; bölgenin 1335-1357 sahiplik zinciri TDV (ve EMRELİC'in okuduğu Iranica) cümleleriyle kurulur; hüküm:
  KORU-BEYAN  — dönem TDV'deki kukla İlhanlar dönemiyle örtüşüyor; ilhanli kalsın, ic_not'a kukla han + gerçek güç yazılsın
  DUZELT      — kaynak, dönemin içinde başka bir sahip gösteriyor; önerilen s: zinciri satırda
  KAYNAK-GEREK— bölgenin 1335-1357 sahibi okunan kaynaklarda yok
Çıktı: denetim/ENKLAV-1103/ilhanli.json + ILHANLI.md
"""
import os, sys, json, collections

KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi

BURA = os.path.join(KOK, "denetim", "ENKLAV-1103")
Y = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
F = [k for k in json.load(open(os.path.join(BURA, "kovalar.json"), encoding="utf-8"))["kovalar"] if k["kod"] == "F"][0]

TDV = {
    "ilhanlilar": "TDV İslâm Ansiklopedisi, \"İlhanlılar\" (Abdülkadir Yuvalı), https://islamansiklopedisi.org.tr/ilhanlilar — hükümdar "
                  "listesi: Arpa 736 (1335), Mûsâ 736 (1336); Hasan-ı Büzürg'ün tayin ettiği ilhanlar Muhammed 736 (1336), Tuga Timur 738 "
                  "(1337), Cihan Timur 739 (1338); Hasan-ı Kûçek'in tayin ettikleri Sâtî Beg 739 (1339), Süleyman 740 (1340), Nûşirevân "
                  "745-754 (1344-1353); \"Ebû Said’in vâris bırakmadan ölümü İlhanlı Devleti’nin parçalanmasına ... yol açtı\"",
    "celayirliler": "TDV, \"Celâyirliler\" (Muzaffer Ürekli), https://islamansiklopedisi.org.tr/celayirliler — Hasan-ı Büzürg bağımsız "
                    "devleti 1340'ta kurdu; \"Üveys 1358’de Azerbaycan ile Tebriz’i, 1364’te Musul ve Diyarbekir’i ele geçirerek\"",
    "tebriz": "TDV, \"Tebriz\" (Ali Sinan Bilgili), https://islamansiklopedisi.org.tr/tebriz — \"İlhanlılar’ın ardından Çobanlı, Altın "
              "Orda, Muzafferîler ve Celâyirliler’in hâkimiyetine girdi\" (gün yok)",
    "altinorda": "TDV, \"Altın Orda Hanlığı\" (Mehmet Saray), https://islamansiklopedisi.org.tr/altin-orda-hanligi — Canıbeg Han 1342-1357",
    "erzurum": "TDV, \"Erzurum\" (Cevdet Küçük vd.), https://islamansiklopedisi.org.tr/erzurum — şehir \"Sutay Noyan’ın oğlu Hacı Togay’ın "
               "eline geçti (1336). Emîr Çoban’ın torunu Şeyh Hasan 1340’ta Erzurum’a gelerek Togaylılar’ı şehirden uzaklaştırdı\"; "
               "\"Erzurum 1360’ta Eretnaoğulları’nın\"",
    "ahlat": "TDV, \"Ahlat\" (Faruk Sümer), https://islamansiklopedisi.org.tr/ahlat — Hasan Kûçek Hacı Togay'a karşı \"Muş ve Bulanık "
             "yörelerinde yağma ve tahripte bulundu (1340-1342). 741’de (1340-41) Süleyman Han adına Ahlat’ta para basılmış olması, şehrin "
             "bu tarihte Çobanlı Küçük Şeyh Hasan’ın hâkimiyetine geçtiğini gösterir\"",
    "eretna": "TDV, \"Eretnaoğulları\" (Kemal Göde), https://islamansiklopedisi.org.tr/eretnaogullari — Eretna 1335'te Büyük Şeyh Hasan'ın "
              "vekili kaldı; ölümünde (1352) Sivas, Kayseri, Amasya, Tokat, ... Erzincan, Doğu Karahisar ve Dârende hâkimiyetindeydi",
    "dulkadir": "TDV, \"Dulkadiroğulları\" (Refet Yınanç), https://islamansiklopedisi.org.tr/dulkadirogullari — Karaca Bey 1335 Mayısında "
                "Çukurova akınından Elbistan'a döndü; 1337'de Memlük sultanınca Elbistan yöresi Türkmenlerinin başına getirildi",
    "lur": "TDV, \"Lur-ı Kûçek\" (Rıza Kurtuluş), https://islamansiklopedisi.org.tr/lur-i-kucek — Hürremâbâd merkezli atabeglik; Şücâüddin "
           "Mahmûd Celâyirli ve Muzafferîlerle dostane ilişkiler kurdu, 750'de (1349) öldürüldü, yerine Melik İzzeddin geçti (1386 Timur)",
    "serbedar": "TDV, \"Serbedârîler\" (Erdoğan Merçil), https://islamansiklopedisi.org.tr/serbedariler — Abdürrezzâk Sebzevâr'ı \"12 Safer "
                "738 / 9 Eylül 1337\" aldı; \"bölgenin hâkimi Togay (Toga) Timur\"; Mes‘ûd 741'de (1340-41) Nîşâbur'u aldı; Togay Timur "
                "\"16 Zilkade 754 / 13 Aralık 1353\" öldürüldü",
    "muzafferi": "TDV, \"Muzafferîler\" (Rıza Kurtuluş), https://islamansiklopedisi.org.tr/muzafferiler — İncû Ebû İshak'ı öldürdü (758/1357), "
                 "aynı yıl Kirman eyaletini kendi topraklarına kattı",
    "herat": "TDV, \"Herat\" (Recep Uslu), https://islamansiklopedisi.org.tr/herat — Kert hânedanı dönemi 1255-1381",
    "iranica": "Encyclopaedia Iranica, \"CHOBANIDS\" (Charles Melville – Abbas Zaryab, 1991) ve \"JALAYERIDS\" (Peter Jackson) — EMRELİC "
               "okuması, 4 Kasım 2026: Alatak 27 Zilhicce 738 / 16 Temmuz 1338 (\"a triumph for the newly cohesive Chobanid forces\"); "
               "Tebriz 1338'de Hasan-ı Büzürg'ün valisi Pir Hüseyin'de; Marağa 29 Zilhicce 740 / 26 Haziran 1340; Hasan-ı Kûçek'in ölümü "
               "27 Receb 744 / 15 Aralık 1343; Altın Orda \"late spring of 758/1357\", Melik Eşref Tebriz'de asıldı; 1357'de Tebriz'i "
               "Ahiçuk aldı; Üveys \"achieved the definitive conquest of Azarbaijan in 1359\". Hasan-ı Kûçek'in Tebriz'i alış günü okunmadı.",
}

# bölge: (ad, kural, zincir metni, hüküm, kaynak anahtarları, önerilen s: zinciri)
BOLGELER = [
    ("IRAK-ARAP", lambda la, lo: la < 36.9 and lo < 47.9 and la < 37.0 and not (la > 35.8 and lo > 45.9),
     "1335-11-30 → 1340: Hasan-ı Büzürg'ün tayin ettiği kukla İlhanlar (Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338); 1340 → "
     "Celâyirli devleti (Bağdat).", "KORU-BEYAN", ["ilhanlilar", "celayirliler"],
     "ilhanli 1335-11-30 → 1340 kalsın; ic_not: 'kukla İlhanlar — fiilî güç Celâyirli Hasan-ı Büzürg (TDV İlhanlılar)'; 1340 → celayirli."),
    ("AZERBAYCAN-ARRAN-ERMENİSTAN-IRAK-I ACEM", lambda la, lo: lo >= 43.6 and la >= 35.8 and lo < 50.6 and not (lo < 44.6 and la < 39.5),
     "1335-11-30 → 1338: kukla İlhanlar (Arpa, Mûsâ, Muhammed); Alatak 16 Temmuz 1338 Çobânî zaferi, ama Tebriz 1338'de Hasan-ı "
     "Büzürg'ün valisi Pir Hüseyin'de; Marağa zaferi 26 Haziran 1340 → Çobânîler (Hasan-ı Kûçek'in kuklaları Sâtî Beg 1339, Süleyman "
     "1340; Hasan-ı Kûçek ölümü 15 Aralık 1343; sonra Melik Eşref) → 758/1357 ilkbahar sonu Altın Orda (Canıbeg; Melik Eşref Tebriz'de "
     "asıldı) → 1357 Ahiçuk ve Muzafferî Mübârizüddin ara dönemi → 1358 Celâyirli (TDV; Iranica 1359 kesin fetih).", "KORU-BEYAN",
     ["ilhanlilar", "tebriz", "altinorda", "celayirliler", "iranica"],
     "ilhanli → 1340-06-26 kalsın (kukla han + 1338-1340 Tebriz Celâyirli valisi beyanıyla); 1340-06-26 → 1357-01-01 cobaniler "
     "(Marağa, Iranica; bitiş 758 ∩ 1357, 'late spring' ay vermiyor → yıl hassasiyeti, beyan); 1357-01-01 → 1357 altinorda "
     "(yıl, beyan); 1357 → 1358-01-01 Ahiçuk / muzafferi ara dönemi (yerel kimlik yoksa beyanlı muzafferi; KAYNAK-GEREK ayrım); "
     "1358-01-01 → celayirli (TDV Celâyirliler: \"Üveys 1358’de Azerbaycan ile Tebriz’i\" — CLAUDE.md: İslâm dünyasında tarih "
     "çelişkisinde TDV esas). ic_not: Iranica JALAYERIDS 1359'u \"definitive conquest of Azarbaijan\" (kesin fetih) olarak verir; "
     "iki kaynak ve çelişki beyan edilsin."),
    ("VAN-HAKKÂRİ-MUŞ-BİTLİS", lambda la, lo: 37.0 <= la < 39.7 and 41.3 <= lo < 44.6,
     "1336 → 1340 Hacı Togay (Sutayoğulları) Muş-Bulanık; 1340-1342 Çobanlı Hasan-ı Kûçek seferi, Ahlat 1340-41 Çobanlı; 1351 → "
     "Karakoyunlu (atlas).", "DUZELT", ["ahlat", "erzurum"],
     "ilhanli t → 1336 (Hacı Togay); 1336 → 1340 sutayogullari; 1340 → 1351 cobaniler (Ahlat 741/1340-41 sikke); günler kaynakla. Künye "
     "sutayogullari f 1343 → 1336 (TDV Erzurum)."),
    ("ERZURUM-PASİNLER-KARS", lambda la, lo: la >= 39.7 and 40.5 <= lo < 43.6,
     "1336 Hacı Togay; 1340 Şeyh Hasan Togaylıları çıkardı; 1360 Eretna.", "DUZELT", ["erzurum"],
     "ilhanli t → 1336; 1336 → 1340 sutayogullari; 1340 → (1343'ten sonra Çobânî/Sutay çekişmesi) → 1360 eretna; ara günler KAYNAK-GEREK."),
    ("ERZİNCAN-KELKİT", lambda la, lo: la >= 39.7 and lo < 40.5,
     "Eretna hâkimiyeti (ölümünde 1352 Erzincan ve Doğu Karahisar onundu).", "DUZELT", ["eretna"],
     "ilhanli t → 1335-11-30 → eretna (1335 vekâlet; gün KAYNAK-GEREK)."),
    ("DULKADİR-ZAMANTI", lambda la, lo: lo < 38.0,
     "1335-1337 Karaca Bey Elbistan'da (Memlük himayesi 1337); Zamantı Eretna sınırı.", "DUZELT", ["dulkadir", "eretna"],
     "Elbistan, Göksun: ilhanli t → 1335-11-30, 1337 dulkadir'e kadar Karaca Bey (dulkadir öncülü, beyan) ; Zamantı → eretna; gün KAYNAK-GEREK."),
    ("HARPUT-DİYARBEKİR-CEZİRE", lambda la, lo: lo < 43.6 and la < 39.7,
     "Okunan kaynaklarda 1335-1353 sahibi yok (Harput, Palu, Meyyâfârikīn, Cizre, Silopi). Komşu künyeler: artuklu (Mardin), "
     "eyyubi-hisnikeyfa, cizre-botan (1300 →).", "KAYNAK-GEREK", [],
     "1335-1353 sahibi kaynakla (TDV Harput/Cizre/Meyyâfârikîn yüzyıl özetleri; Iranica). Cizre için cizre-botan künyesi zaten 1300'den var."),
    ("LURİSTAN", lambda la, lo: la < 34.5 and lo >= 47.9,
     "Lur-i Küçek atabegliği (Hürremâbâd) 1335-1386 kesintisiz.", "DUZELT", ["lur"],
     "Luristan, Burûcird, Nihâvend: ilhanli → lur-i-kucek 1335-12-01 → (atlas sonraki dönemi); günler mevcut uçlarla."),
    ("GİLAN", lambda la, lo: lo >= 49.0 and lo < 50.6 and la > 36.9,
     "Gilan yerel beylikleri; okunan kaynaklarda yok (gilan-kiya künyesi 1371).", "KAYNAK-GEREK", [],
     "Lâhîcan, Reşt, Enzeli 1335-1353 sahibi kaynakla (Iranica 'Gilan', 'Kar-Kiya')."),
    ("MÂZENDERAN", lambda la, lo: 50.6 <= lo < 53.8 and la > 36.3,
     "Bâvendîler (künye t 1349-04-17), sonra Çelâvî Kiyâ Afrâsiyâb; Togay Timur'un hanlık iddiası.", "KAYNAK-GEREK", [],
     "1335-1349 bavendi (künye), 1349 → Afrâsiyâb Çelâvî (yeni künye) — kaynakla (TDV Bâvendîler)."),
    ("KÛMİS-GÜRGÂN", lambda la, lo: 53.0 <= lo < 57.0 and la < 39.5 and la > 35.0 and not lo > 57,
     "1335-1353 Togay Timur'un (İlhanlı tahtı iddiacısı) bölgesi; Serbedârîler Dâmgan-Simnân'a uzandı.", "KORU-BEYAN", ["serbedar", "ilhanlilar"],
     "ilhanli 1335-11-30 → 1337-09-09 kalsın (Togay Timur, beyan); 1337 sonrası atlas dönemi Gürgân için Togay Timur'u (1353-12-13'e dek) "
     "gösteriyor mu sınansın."),
    ("HORASAN", lambda la, lo: lo >= 57.0 and la > 35.0,
     "1335-1337 Togay Timur Horasan hâkimi; Sebzevâr 1337-09-09 Serbedâr; Nîşâbur 741 (1340-41) Serbedâr; Herat Kert; Tûs/Meşhed "
     "Câvun-ı Kurbanî ve Derviş Azîz.", "KORU-BEYAN", ["serbedar", "herat"],
     "ilhanli → 1337-09-09 kalsın (Togay Timur, beyan). DİKKAT: 1337-09-09'dan sonraki atlas dönemi her şehir için ayrı sınanmalı — "
     "Nîşâbur Serbedâr ancak 1340-41, Tûs/Meşhed/Kelât Câvun-ı Kurbanî, Turbet-i Câm/Serahs Kert, Merv/Ebîverd/Nesâ Çağatay sınırı."),
    ("KUHİSTAN-SİSTAN-KİRMAN", lambda la, lo: lo >= 56.0 and la <= 35.0,
     "Kirman: 1340 Mübârizüddin Muhammed (Muzafferî) — atlas t 1340-06-27; Kuhistan ve Sistan okunan kaynaklarda yok.", "KAYNAK-GEREK",
     ["muzafferi"], "Kirman KORU (t 1340, Muzafferî); Kâin, Bîrcend, Tebbes, Turşiz, Zerenc 1335-1353 sahibi kaynakla (Kert? Mihrabânî?)."),
]


AD = {b[0]: b for b in BOLGELER}
# Kural SIRASI önemli: dar bölgeler önce, geniş kutular sonra.
SIRA = [("GİLAN", lambda la, lo: la > 36.9 and 49.0 <= lo < 50.6),
        ("MÂZENDERAN", lambda la, lo: la > 36.3 and 50.6 <= lo < 53.8),
        ("LURİSTAN", lambda la, lo: 33.0 <= la < 34.5 and 47.9 <= lo < 50.0),
        ("AZERBAYCAN-ARRAN-ERMENİSTAN-IRAK-I ACEM", lambda la, lo: 34.5 <= la < 36.9 and 47.9 <= lo < 51.0),
        ("KUHİSTAN-SİSTAN-KİRMAN", lambda la, lo: lo >= 56.0 and la <= 35.0),
        ("HORASAN", lambda la, lo: lo >= 57.0 and la > 35.0),
        ("KÛMİS-GÜRGÂN", lambda la, lo: 53.0 <= lo < 57.0 and 35.0 < la < 39.5),
        ("IRAK-ARAP", lambda la, lo: la < 36.9 and lo < 48.6 and not (la > 35.8 and lo > 45.9)),
        ("DULKADİR-ZAMANTI", lambda la, lo: lo < 38.0),
        ("ERZİNCAN-KELKİT", lambda la, lo: la >= 39.7 and lo < 40.5),
        ("ERZURUM-PASİNLER-KARS", lambda la, lo: la >= 39.7 and 40.5 <= lo < 43.6),
        ("VAN-HAKKÂRİ-MUŞ-BİTLİS", lambda la, lo: 37.0 <= la < 39.7 and 41.3 <= lo < 44.6),
        ("HARPUT-DİYARBEKİR-CEZİRE", lambda la, lo: lo < 43.6 and la < 39.7),
        ("AZERBAYCAN-ARRAN-ERMENİSTAN-IRAK-I ACEM", lambda la, lo: lo >= 43.6 and la >= 35.8 and lo < 50.6)]


def bolge(la, lo):
    for ad, kural in SIRA:
        if kural(la, lo):
            return AD[ad]
    return None


S, sayac = [], collections.Counter()
for s in F["satirlar"]:
    y = Y.get(s["ad"])
    la, lo = s["lat"], s["lon"]
    b = bolge(la, lo)
    il = [p for p in (y.get("s") or []) if p.get("d") == "ilhanli" and p["t"] > "1335-12-01"]
    p = il[0]
    sonra = [q for q in (y.get("s") or []) if q["f"] >= p["t"]]
    sonra = "%s %s→%s" % (sonra[0].get("d"), sonra[0]["f"], sonra[0]["t"]) if sonra else "—"
    hk = b[3] if b else "KAYNAK-GEREK"
    if b and b[0] == "KUHİSTAN-SİSTAN-KİRMAN" and y["ad"] == "Kirman":
        hk = "KORU-BEYAN"
    if b and b[0] == "VAN-HAKKÂRİ-MUŞ-BİTLİS" and y["ad"] == "Ahlat":
        hk = "KORU-BEYAN"  # Ahlat t 1340-06-27 zaten Çobanlı geçişine yakın
    oneri = b[5] if b else "—"
    if b and b[0] in ("HORASAN", "KUHİSTAN-SİSTAN-KİRMAN") and sonra.startswith("serbedariler 1337-09-09"):
        if y["ad"] == "Sebzevâr":
            hk = "KORU-BEYAN"
        elif y["ad"] == "Nîşâbur":
            hk = "DUZELT"
            oneri = ("ilhanli (Togay Timur) t → 741/1340-41 (Mes‘ûd'un Nîşâbur'u alışı, TDV Serbedârîler; 741 ∩ 1340 → 1340-06-27); "
                     "serbedariler f 1337-09-09 → 1340-06-27.")
        else:
            hk = "DUZELT"
            oneri = ("ARDIL YANLIŞ: atlas 1337-09-09'dan serbedariler veriyor; TDV'ye göre 1337'de Serbedâr yalnız Sebzevâr'ı aldı ve "
                     "'bölgenin hâkimi' Togay Timur'du (öldürülüşü 1353-12-13). Öneri: ilhanli (Togay Timur, beyanlı) t → 1353-12-13 ya da "
                     "şehrin gerçek sahibi (Tûs-Meşhed-Kelât: Câvun-ı Kurbanî; Câm-Serahs: Kert; Merv-Nesâ-Ebîverd: Çağatay sınırı; Kuhistan, "
                     "Sîstan: yerel) — KAYNAK-GEREK.")
    if b and b[0] == "LURİSTAN":
        oneri = "ilhanli 1335-12-01 → 1353-01-01 yerine lur-i-kucek (atlasın halefi 1353'ten başlıyor; f → 1335-12-01)."
    sayac[(b[0] if b else "?", hk)] += 1
    S.append(dict(ad=y["ad"], yer=s["yer"], lat=la, lon=lo, bolge=b[0] if b else "?", simdi="ilhanli %s→%s" % (p["f"], p["t"]),
                  sonra=sonra, hukum=hk, zincir=b[2] if b else "—", oneri=oneri,
                  kaynak=" · ".join(TDV[k] for k in (b[4] if b else [])) or "KAYNAK-GEREK"))
json.dump(dict(kaynaklar=TDV, satirlar=S), open(os.path.join(BURA, "ilhanli.json"), "w", encoding="utf-8", newline="\n"),
          ensure_ascii=False, indent=1)

L = ["# İLHANLI — KOVALAR F'nin (151 nokta) 1335-1357 bölge bölge sahipleri\n",
     "Ölçen: LAB SALI · 4 Kasım 2026 · dal `lab-1104-ilhanli` · alet `ilhanli_olc.py` · girdi KOVALAR F (kovalar.json).\n",
     "**Ana bulgu:** atlastaki 'ilhanli' bitişleri (1337-09-09, 1340, 1351, 1353) halef künyelerinin başlangıçlarıyla (serbedariler "
     "1337-09-09, celayirli 1340, karakoyunlu 1351, sutayogullari t 1353) örtüşüyor; TDV 'İlhanlılar' 1335-1353 arasını Hasan-ı Büzürg ve "
     "Hasan-ı Kûçek'in tayin ettiği **kukla İlhanlar** dönemi olarak sayıyor (Nûşirevân 1344-1353). Dolayısıyla 151 noktanın çoğu "
     "'hayalet' değil, **beyansız** kukla-han dönemidir: hüküm KORU-BEYAN. Gerçek düzeltme Doğu Anadolu (Sutay/Çobanî/Eretna), Luristan "
     "(Lur-i Küçek) ve Elbistan (Dulkadir öncülü) noktalarında.\n",
     "**İkinci bulgu (ardıl):** atlas 1337-09-09'dan sonra Horasan'ın ve Kuhistan-Sîstan'ın bütün noktalarını `serbedariler`e veriyor; "
     "TDV 'Serbedârîler'e göre Serbedâr 1337'de yalnız Sebzevâr'ı, 1340-41'de Nîşâbur'u aldı, bölgenin hâkimi Togay Timur'du (1353'e dek). "
     "Bu satırlar DUZELT (ardıl yanlış).\n",
     "- **KORU-BEYAN** — `ilhanli` kalsın; `ic_not`a kukla han + fiilî güç (kaynak satırdaki) yazılsın.",
     "- **DUZELT** — kaynak dönem içinde başka sahip gösteriyor; önerilen zincir satırda (günler çoğunlukla yıl; gün KAYNAK-GEREK).",
     "- **KAYNAK-GEREK** — bölgenin sahibi okunan kaynaklarda yok.\n", "## Özet\n", "| bölge | hüküm | nokta |", "|---|---|---|"]
for (bo, hk), n in sorted(sayac.items()):
    L.append("| %s | %s | %d |" % (bo, hk, n))
L.append("\nToplam: %d nokta · %s.\n" % (len(S), ", ".join("%s %d" % kv for kv in collections.Counter(x["hukum"] for x in S).most_common())))
for b in BOLGELER:
    R = [x for x in S if x["bolge"] == b[0]]
    if not R:
        continue
    L.append("## %s (%d)\n" % (b[0], len(R)))
    L.append("- Zincir: %s" % b[2])
    L.append("- Önerilen s: %s" % b[5])
    L.append("- Kaynak: %s\n" % (" · ".join(TDV[k] for k in b[4]) or "KAYNAK-GEREK"))
    L.append("| nokta | dosya:satır | şimdi | atlasın halefi | hüküm | satıra özel öneri |")
    L.append("|---|---|---|---|---|---|")
    for x in R:
        L.append("| %s | `%s` | %s | %s | %s | %s |" % (x["ad"], x["yer"], x["simdi"], x["sonra"], x["hukum"],
                                                     "—" if x["oneri"] == b[5] else x["oneri"]))
    L.append("")
L.append("## Kaynak künyeleri\n")
for k, v in TDV.items():
    L.append("- **%s** — %s" % (k, v))
open(os.path.join(BURA, "ILHANLI.md"), "w", encoding="utf-8", newline="\n").write("\n".join(L))
print(dict(collections.Counter(x["hukum"] for x in S)))
for (bo, hk), n in sorted(sayac.items()):
    print("%-40s %-13s %d" % (bo, hk, n))
