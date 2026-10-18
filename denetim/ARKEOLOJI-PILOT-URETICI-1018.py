"""Arkeoloji pilotu üretici — MÖ 12000-3000. Çıktı: data/olaylar_arkeoloji_pilot.js + data/sehir_tarihce_arkeoloji.json (yaz için)."""
import json, os, sys

KOK = r"C:\atlas\.claude\worktrees\distracted-carson-626369"


def iso(mo):                      # MÖ N -> astronomik "-(N-1)"
    return "-%04d-01-01" % (mo - 1)


def orta(a, b):                   # MÖ sayıları; yarım çıkarsa DAHA GEÇ (küçük MÖ) yıla
    return (a + b) // 2


# ---------------------------------------------------------------- kaynaklar
DAI = "DAI Göbekli Tepe Araştırma Projesi, «How old is it? Dating Göbekli Tepe» (dainst.blog/the-tepe-telegrams, 22.06.2016): Enclosure D duvar sıvası KIA-44149 (9984±42 14C-BP) = 9745–9314 cal BC (%95,4)"
DAI_TERK = "DAI Göbekli Tepe Araştırma Projesi, aynı yazı: terk «orta PPNB sonrası, yaklaşık MÖ 8000» (kalibre aralık verilmemiş)"
VALLA = "Valla vd., «Eynan (Ain Mallaha)», Quaternary of the Levant (2017), Valla vd. 2007 raporuna atfen: GifA-70014 (12250±60 BP) = 12240–12070 cal BC (%68,2)"
PPND_J = "PPND (Platform for Neolithic Radiocarbon Dates, exoriente.org, Jericho/Tell es-Sultan sayfası): «en erken PPN tarihleri Stage IV/IVA; toplamları 9300–8700 BC»"
CATAL_B = "Bayliss vd. 2015, Journal of World Prehistory 28(1): Bayes kronolojisi ile yerleşimin başlangıcı MÖ 7100 (kronoloji önceki tahminden ~200 yıl geç) — başlangıç değeri ikincil aktarımla okundu"
CATAL_S = "Marciniak vd. 2015, Antiquity 89(343): 56 AMS tarihi — Doğu Höyük'te yerleşim faaliyeti «MÖ 6000 cal BC'den hemen sonra» sona erer"
JIAHU = "Zhang, Harbottle, Wang, Kong 1999, Nature 401 (doi 10.1038/43865): Jiahu yerleşimi yaklaşık MÖ 7000–5700 (kalibrasyon durumu özette belirtilmemiş)"
MEHR = "Vidale vd. 2025, «New radiocarbon dates of human tooth enamel reveal a late appearance of farming life in the Indus Valley» (PubMed 40234596): aseramik mezarlığın başlangıcı MÖ 5200–4900"
HARP = "Harappa Archaeological Research Project (harappa.com/beas/chronology; Kenoyer): Period 1, Ravi evresi, MÖ 3300 – yaklaşık MÖ 2800"
VARNA = "Higham vd. 2018, Radiocarbon (Varna mezarlığı, 71 AMS tarihi, 53 mezar): mezarlık faaliyeti 4596–4516 cal BC'de başlar, 4427–4341 cal BC'de biter (%95,4)"
DEE = "Dee vd. 2013, Proc. R. Soc. A 469 (doi 10.1098/rspa.2013.0395), Tablo 1: Badari başlangıcı 4489–4266 BCE (%95)"
AHA = "Dee vd. 2013, aynı makale: Mısır'ın kuruluşu (Aha'nın tahta çıkışı) 3111–3045 BCE (%68; %95 aralığı 3218–3035)"

olaylar = []


def olay(mo, k, b, yer, d, kaynak, kes, ic, aralik=None, gun=None):
    o = {"t": iso(mo), "k": k, "etiket": ["arkeoloji"], "b": b, "gun": gun or ("MÖ %d" % mo),
         "yer": yer, "d": d, "kaynak": kaynak, "kaynak_turu": "arkeoloji", "kesinlik": kes}
    if aralik:
        o["aralik"] = aralik
    o["ic_not_d"] = ic
    olaylar.append(o)
    return o


def aralikli(a, b, guven, tur="kalibre-14C"):
    return {"bas": iso(a), "son": iso(b), "guven": guven, "tur": tur}


def mid_ic(a, b, m, ek=""):
    return ("ARALIK→ORTA NOKTA: MÖ %d–%d (kaynağın verdiği uçlar); orta nokta MÖ %d = astronomik %s. "
            "Harita bu tek günü gösterir, aralık kullanıcıya «~» ile açılır. %s" % (a, b, m, iso(m)[:5], ek))


# 1 Ain Mallaha
m = orta(12240, 12070)
olay(m, "kurulus", "Ain Mallaha (Eynan): Erken Natufiyen yerleşiminin ilk tarihli kanıtı", "Ain Mallaha / Eynan (Hule Gölü, Hulah Vadisi)",
     "Natufiyen avcı-toplayıcıların yarı gömülü yapılardan oluşan yerleşimi; mezar (Locus 239) kömür örneği tarihi.", VALLA, "yuzyil",
     mid_ic(12240, 12070, m, "Yalnız %68,2 aralığı okundu (%95,4 verilmemiş); birincil rapor okunmadı, aktarım ikincil. "
            "UFUK ihlali: MÖ 12155, ufuk olan MÖ 12000'den 155 yıl önce."),
     aralikli(12240, 12070, "68.2"), "MÖ 12240–12070 arası (orta nokta MÖ %d)" % m)
# 2-3 Göbekli
m = orta(9745, 9314)
olay(m, "kurulus", "Göbekli Tepe: Çevre D'nin (Tabaka III) duvar sıvası tarihi — anıtsal yapılaşmanın tarihli kanıtı", "Göbekli Tepe (Şanlıurfa)",
     "T biçimli dikilitaşlı dairesel yapıların (Tabaka III, PPNA) tarihlenebilen en doğrudan örneği duvar sıvasıdır; dolgu örnekleri yalnız yıkım sonrası alt sınırdır.",
     DAI, "yuzyil", mid_ic(9745, 9314, m, "Sıva, doğrudan yapı malzemesidir (dolgu değil); dolgu örneği UGAMS-10798 (9127–8763 cal BC) yalnız terminus ante quem. "
                          "Bu kayıt KURULUŞ değil, ilk tarihli kanıttır."), aralikli(9745, 9314, "95.4"), "MÖ 9745–9314 arası (orta nokta MÖ %d)" % m)
olay(8000, "kayip", "Göbekli Tepe terk edilir (orta PPNB sonrası)", "Göbekli Tepe (Şanlıurfa)",
     "Ok uçlarına göre yer orta PPNB'den sonra terk edildi; kaynak kalibre aralık vermiyor.", DAI_TERK, "yuzyil",
     "TEK DEĞER: kaynak «yaklaşık MÖ 8000» der, aralık yok → orta nokta kuralı UYGULANMAZ; uç beyanı yok.", None, "MÖ 8000 civarı")
# 4 Jericho
olay(9300, "kurulus", "Eriha (Tell es-Sultan): en erken PPN tabakasının (Stage IV/IVA) radyokarbon tarihleri başlar", "Eriha / Tell es-Sultan (Filistin)",
     "Natufiyen izleri daha eskidir (aynı sayfada «11170–10980 BC» kalibrasyonu belirsiz); yerleşik PPN tabakası tarihleri MÖ 9300'de başlar.",
     PPND_J, "yuzyil",
     "DÖNEM TOPLAMI aralığı (MÖ 9300–8700) = tabakanın süresini gösterir, oluş-zamanı belirsizliği DEĞİL → orta nokta ALINMADI; en erken uç (ALT SINIR) yazıldı. "
     "Kule inşasının başlangıcı sayfada YOK («açık soru»); kule kaydı yazılmadı. PPND bir veri tabanıdır, birincil kazı yayını (Kenyon, Bar-Yosef, Nigro) okunmadı.",
     aralikli(9300, 8700, "toplam", "donem-toplami"), "MÖ 9300 (tarihli en erken uç; ALT SINIR)")
# 5-6 Çatalhöyük
olay(7100, "kurulus", "Çatalhöyük Doğu Höyük'te yerleşim başlar", "Çatalhöyük (Konya Ovası)",
     "Bayes modeli yerleşimin başlangıcını önceki tahminlerden ~200 yıl geriye (daha geç) çekti.", CATAL_B, "yuzyil",
     "TEK DEĞER MÖ 7100 (kaynak aralık vermiyor). Bu değer ikincil bir aktarımdan; Bayliss vd. tam metni (ücretli) okunmadı.", None, "MÖ 7100 civarı")
olay(6000, "kayip", "Çatalhöyük Doğu Höyük'te yerleşim faaliyeti sona erer", "Çatalhöyük (Konya Ovası)",
     "56 AMS tarihi: faaliyet MÖ 6000 cal BC'den hemen sonra biter; Neolitik gömü birkaç on yıl sonra kesilir.", CATAL_S, "yuzyil",
     "TEK DEĞER (aralık yok): «hemen sonrası» = en erken sınır MÖ 6000 yazıldı (bit için EN ERKEN uç, gerçek bitiş birkaç on yıl geç olabilir).", None, "MÖ 6000'den hemen sonra")
# 7-8 Jiahu
olay(7000, "kurulus", "Jiahu (Henan): yerleşim başlar", "Jiahu (Wuyang, Henan, Çin)",
     "Üç evreli yerleşim; en eski bölümün çanak çömleği MÖ 7000–6600 arasına tarihlenir.", JIAHU, "yuzyil",
     "Kaynak yerleşimin TOPLAM süresini (7000–5700) verir; orta nokta alınmaz, başlangıç ucu yazılır. Kalibre mi ham 14C mi belirsiz → «kalibrasyon belirsiz» beyanı.",
     aralikli(7000, 5700, "belirsiz", "yerlesim-suresi"), "MÖ 7000 civarı")
olay(5700, "kayip", "Jiahu yerleşiminin sonu", "Jiahu (Wuyang, Henan, Çin)",
     "Üçüncü evre MÖ 6200–5700.", JIAHU + " (bir başka yayında bitiş 5500: Frontiers ek tablosu)", "yuzyil",
     "TEK DEĞER (aralık yok): Bitiş için iki kaynak çelişir (5700 / 5500); Nature 1999 esas alındı.", None, "MÖ 5700 civarı")
# 9 Mehrgarh
m = orta(5200, 4900)
olay(m, "kurulus", "Mehrgarh (Belucistan): aseramik Neolitik mezarlık dizisi başlar", "Mehrgarh (Belucistan, Pakistan)",
     "Diş minesi AMS tarihleri mezarlığın başlangıcını MÖ 5200–4900'e koyar; çanak çömlek (IIA) MÖ 4650'den sonra.", MEHR, "yuzyil",
     mid_ic(5200, 4900, m, "ÇELİŞKİ: Jarrige-dönemi yayınlarda Dönem I «MÖ 7000 öncesi–5500» (aynı kaynak özeti); 2025 çalışması bunu kök kütlesi bozulmasıyla çarpık sayıyor. "
            "Burada yerleşimin kuruluşu değil, mezarlığın tarihli ilk kanıtı yazıldı (yerleşim daha eski olabilir)."),
     aralikli(5200, 4900, "belirsiz"), "MÖ 5200–4900 arası (orta nokta MÖ %d)" % m)
# 10 Harappa
olay(3300, "kurulus", "Harappa: Ravi evresi (Dönem 1) başlar — Hint vadisi öncesi dönem", "Harappa (Pencap, Pakistan)",
     "HARP kronolojisi Dönem 1'i MÖ 3300–~2800 verir; aynı sitede başka tablolar 3700 ve >3500 başlangıcı verir.", HARP, "yuzyil",
     "TEK DEĞER (aralık yok): KAYNAK ÇELİŞKİSİ: en sık anılan MÖ 3300 yazıldı; alternatifler 3700 / >3500 (aynı site, farklı yayın). Tek değer; orta nokta alınmaz.", None, "MÖ 3300 civarı")
# 11-12 Varna
a, b = 4596, 4516
m = orta(a, b)
olay(m, "kurulus", "Varna nekropolü (Bulgaristan): altın buluntulu mezarlık başlar", "Varna (Karadeniz kıyısı, Bulgaristan)",
     "Dünyanın en eski işlenmiş altın hazinelerinden birini veren Geç Bakır Çağı mezarlığı.", VARNA, "onyil",
     mid_ic(a, b, m, "Başlangıç belirsizliği için kaynağın %95,4 aralığı kullanıldı."), aralikli(a, b, "95.4"), "MÖ 4596–4516 arası (orta nokta MÖ %d)" % m)
a, b = 4427, 4341
m = orta(a, b)
olay(m, "kayip", "Varna nekropolünde mezar faaliyeti sona erer", "Varna (Karadeniz kıyısı, Bulgaristan)",
     "Mezarlık toplam ~120–260 yıl kullanıldı.", VARNA, "onyil", mid_ic(a, b, m, "Bitiş belirsizliği için kaynağın %95,4 aralığı."), aralikli(a, b, "95.4"),
     "MÖ 4427–4341 arası (orta nokta MÖ %d)" % m)
# 13 Badari
a, b = 4489, 4266
m = orta(a, b)
olay(m, "kurulus", "Mısır: Badari kültürü başlar (Nil Vadisi, Yukarı Mısır)", "Badari (Asyut, Yukarı Mısır)",
     "Bayes modeli Badari başlangıcını MÖ 4489–4266 arasına koyar; Mısır'ın devlet öncesi dönemidir.", DEE, "yuzyil",
     mid_ic(a, b, m, "Yarım yıl çıktı (4377,5) → daha geç yıla yuvarlandı. Tablo değeri WebFetch özetinden; PDF tablosuyla bir kez daha teyit edilmeli."),
     aralikli(a, b, "95"), "MÖ 4489–4266 arası (orta nokta MÖ %d)" % m)
# 14 Aha
a, b = 3218, 3035
m = orta(a, b)
olay(m, "kurulus", "Mısır birleşir: Aha'nın tahta çıkışı (arkeolojik-radyokarbon tarihleme)", "Mısır (Yukarı ve Aşağı Mısır)",
     "Bayes modeli: %68 aralığı 3111–3045 (ortanca 3085); %95 aralığı 3218–3035.", AHA, "yuzyil",
     mid_ic(a, b, m, "En geniş verilen güven düzeyi (%%95) kullanıldı. ⚠️ ATLAS ÇELİŞKİSİ: `devletler.js` misir-erken-hanedan f=-3099 (MÖ 3100, Shaw 2000); "
            "bu kayıt −%s verir. Künye DEĞİŞTİRİLMEDİ — künye-kayma kararı Emre'nin (iki ucu ölç)." % iso(m)[1:5]),
     aralikli(a, b, "95"), "MÖ 3218–3035 arası (orta nokta MÖ %d)" % m)

# ---------------------------------------------------------------- olaylar dosyası
os.chdir(KOK)
with open("data/olaylar_arkeoloji_pilot.js", "w", encoding="utf-8", newline="\n") as f:
    f.write("// ARKEOLOJİ KATMANI — PİLOT (MÖ 12000–3000) · ARKEOLOJI-KATMANI-ŞARTNAME-1018 · 18 Ekim 2026\n")
    f.write("// Üretici: denetim/ARKEOLOJI-PILOT-URETICI-1018.py. DALDA TUT: negatif yıl kapısı (arac/gun.py) bağlanmadan main'e itilmez.\n")
    f.write("// index.html'e <script> satırı EKLENMEDİ ⇒ site yüklemez. Her madde kaynak_turu:\"arkeoloji\" + aralık/orta-nokta beyanı taşır.\n")
    f.write("window.OLAYLAR_ARKEOLOJI_PILOT = ")
    json.dump(olaylar, f, ensure_ascii=False, indent=1)
    f.write(";\n")


# ---------------------------------------------------------------- yerleşimler (sehir_tarihce şeması)
def yer(id_, ad, lat, lon, ilk_mo, ilk_kaynak, ilk_gun, kes, bit_mo, bit_kaynak, ic, konum):
    ilk_t = iso(ilk_mo)
    sahip = []
    son = iso(bit_mo) if bit_mo else "-2999-01-01"        # MÖ 3000 = pilot penceresi sonu
    sahip.append({"f": ilk_t, "t": son, "d": "__BOSLUK__", "kesinlik": kes, "kaynak": ilk_kaynak,
                  "ic_not": "Devlet öncesi yerleşim: siyasî sahip YOK, atlasta devletsiz kültür bölgesi. __BOSLUK__ burada «sahibi bilinmiyor» değil "
                            "«sahip kavramı henüz yok» demektir; arayüzde KÜLTÜR etiketi alacak (şartname §6)."})
    sahip.append({"f": son, "t": "1900-01-01", "d": "__BILINMIYOR__", "kesinlik": "belirsiz", "kaynak": "bulunamadı",
                  "ic_not": "Pilot penceresi (MÖ 12000–3000) dışı: yerin sonraki durumu ARAŞTIRILMADI — uydurma süreklilik/kesinti yazılmaz."})
    k = {"id": id_, "ad": ad, "atlas_ad": None, "lat": lat, "lon": lon, "kat1900": 3, "adlar": [ad], "konum_teyit": konum,
         "ilk": {"t": ilk_t, "gun": ilk_gun, "nicelik": "arkeolojik", "kesinlik": kes, "kaynak": ilk_kaynak, "kaynak_turu": "arkeoloji"},
         "kur": None,
         "ark": {"t": ilk_t, "gun": ilk_gun, "kesinlik": kes, "kaynak": ilk_kaynak},
         "bit": ({"t": iso(bit_mo), "gun": "MÖ %d" % bit_mo, "kesinlik": kes, "kaynak": bit_kaynak} if bit_mo else None),
         "sahip": sahip, "olay": [], "ic_not": ic}
    return k


K = []
KT = "KOORDİNAT HAFIZADAN yazıldı, Pleiades/TGN ikinci tanığıyla ÖLÇÜLMEDİ — haritaya basılmadan önce teyit şart (CLAUDE.md: yeni yerleşimden önce mükerrer tara)."
UF = "ufuk dışı (MÖ 12000'den eski): ham orta nokta tutuldu, harita f'i ufka kenetlenir (şartname §3)."
MID = lambda a, b: " (orta nokta; uçlar MÖ %d–%d)" % (a, b)
K.append(yer("ain-mallaha", "Ain Mallaha (Eynan)", 33.037, 35.610, orta(12240, 12070), VALLA,
             "MÖ %d" % orta(12240, 12070) + MID(12240, 12070), "yuzyil", None, None, UF, KT))
K.append(yer("gobekli-tepe", "Göbekli Tepe", 37.223, 38.922, orta(9745, 9314), DAI,
             "MÖ %d" % orta(9745, 9314) + MID(9745, 9314), "yuzyil", 8000, DAI_TERK,
             "ilk tarihli kanıt = Çevre D sıvası; bit: terk «yaklaşık MÖ 8000».", KT))
K.append(yer("eriha", "Eriha (Tell es-Sultan)", 31.871, 35.444, 9300, PPND_J, "MÖ 9300 (ALT SINIR; dönem toplamı 9300–8700)", "yuzyil", None, None,
             "orta nokta ALINMADI (dönem toplamı aralığı).", KT))
K.append(yer("catalhoyuk", "Çatalhöyük", 37.667, 32.828, 7100, CATAL_B, "MÖ 7100 civarı", "yuzyil", 6000, CATAL_S,
             "bit: «MÖ 6000'den hemen sonra» → en erken uç MÖ 6000.", KT))
K.append(yer("jiahu", "Jiahu", 33.62, 113.67, 7000, JIAHU, "MÖ 7000 civarı", "yuzyil", 5700, JIAHU,
             "kalibrasyon durumu kaynak özetinde belirsiz.", KT))
K.append(yer("mehrgarh", "Mehrgarh", 29.383, 67.617, orta(5200, 4900), MEHR,
             "MÖ %d" % orta(5200, 4900) + MID(5200, 4900), "yuzyil", None, None,
             "ÇELİŞKİ: Jarrige Dönem I «MÖ 7000 öncesi». Bu kayıt mezarlığın tarihli ilk kanıtıdır, yerleşimin kuruluşu değil.", KT))
K.append(yer("harappa", "Harappa", 30.631, 72.864, 3300, HARP, "MÖ 3300 civarı", "yuzyil", None, None,
             "Ravi evresi başlangıcı kaynaklar arasında çelişkili (3700 / >3500 / 3300).", KT))
json.dump(K, open(os.path.join(KOK, "denetim", "ARKEOLOJI-PILOT-YERLESIM-1018.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(len(olaylar), "olay ·", len(K), "yerleşim")
