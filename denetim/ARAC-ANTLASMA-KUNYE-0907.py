# -*- coding: utf-8 -*-
"""ARAC-ANTLASMA-KUNYE-0907 — olculen her seyi TEK KUNYEYE toplar.

🔴 EN ONEMLI OZELLIGI: HER ALINTIYI GOVDEDE BIREBIR YENIDEN ARAR.
   Bir alinti bulunamazsa alet CIKIS 1 ile DURUR ve dosya YAZILMAZ.
   Gerekce `CLAUDE.md §4`: "kaynagi yazilmayan bilgi, kaynagi olmayan
   bilgiden ayirt edilemez" — ve bu aletin karsi durdugu sey, alintinin
   HATIRLANARAK yazilmasi.  Hatirlanan bir alinti govdede BULUNMAZ.

C13④ (ciktiyi dogru yerden okuma): --atesle ile bir alinti bilerek bozulur;
alet DURMALIDIR.  Durmuyorsa dogrulama calismiyor demektir.

Kullanim: py denetim/ARAC-ANTLASMA-KUNYE-0907.py [--atesle]
"""
import sys, os, re, json, time, html as H

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
BURA = os.path.dirname(os.path.abspath(__file__))
CIKTI = os.path.join(BURA, "ANTLASMA-1923-0907.json")


def govde(slug):
    """Uc kovadan okur: benim onbellegim · ham HTML · paylasilan onbellek."""
    for yol, hamdir in ((os.path.join(BURA, "_antlasma_govde", slug + ".txt"), False),
                        (os.path.join(BURA, "_antlasma_govde", "_ham", slug + ".html"), True),
                        (os.path.join(BURA, "_tdv_onbellek", slug + ".txt"), False)):
        if os.path.exists(yol) and os.path.getsize(yol) > 0:
            g = open(yol, encoding="utf-8").read()
            if hamdir:
                g = re.sub(r"(?is)<(script|style|noscript)[^>]*>.*?</\1>", " ", g)
                g = re.sub(r"(?s)<[^>]+>", " ", g)
                g = H.unescape(g)
            return re.sub(r"[\s\xa0]+", " ", g)
    return ""


def normal(s):
    return re.sub(r"[\s\xa0]+", " ", s).strip()


# ═══════════════════════════════════════════════════════════════════════
#  KUNYE — her `alinti` ASAGIDA gövdede BIREBIR aranir.
#  iliski:  tarif   = antlasma o kenari KENDI METNINDE cizer
#           atif    = kenari BASKA bir antlasmaya havale eder
#           erteleme= kenari GELECEGE birakir  (1923'te hukuki hat YOK)
# ═══════════════════════════════════════════════════════════════════════
K = [
 {"id": "lozan", "ad": "Lozan Barış Antlaşması", "gun": "1923-07-24", "gun_kesinlik": "gun",
  "taraflar": "Türkiye — İngiltere, Fransa, İtalya, Japonya, Yunanistan, Romanya, SHS Devleti",
  "tdv_slug": "lozan-antlasmasi", "tdv_hal": "canli", "govde_kar": 19305,
  "gun_dayanak": [("lozan-antlasmasi", "24 Temmuz 1923’te imzalanan antlaşma")],
  "kenar": [
    {"kenar": "Türkiye ↔ Yunanistan (Trakya)", "iliski": "tarif", "kapi": "lozan-antlasmasi",
     "alinti": "Trakya’daki Türkiye-Yunanistan sınırı Karaağaç Türkiye’de kalmak üzere Meriç ırmağının “talvek”i olarak tesbit edilmişti."},
    {"kenar": "Türkiye ↔ Suriye", "iliski": "atif", "kapi": "lozan-antlasmasi",
     "alinti": "Türkiye-Suriye sınırı, Fransa ile imzalanmış olan 20 Ekim 1921 Ankara Antlaşması ile belirlenen sınır olarak kabul edilmişti."},
    {"kenar": "Türkiye ↔ Irak", "iliski": "erteleme", "kapi": "lozan-antlasmasi",
     "alinti": "Bütün çabalara rağmen Türk-Irak sınırının nerelerden geçeceği hususunda İngiltere ile bir uyuşma sağlanamadı."},
    {"kenar": "Türkiye ↔ Irak", "iliski": "erteleme", "kapi": "lozan-antlasmasi",
     "alinti": "Antlaşmada çözümü ileriye bırakılan Musul meselesi Türk-Irak sınırının tesbit edilmesi olarak anılmış ve bunun dokuz ay içinde Türkiye ile Büyük Britanya arasında dostça belirleneceği hükmüne yer verilmişti"}]},

 {"id": "ankara-1921", "ad": "Ankara İtilâfnâmesi", "gun": "1921-10-20", "gun_kesinlik": "gun",
  "taraflar": "TBMM hükümeti — Fransa",
  "tdv_slug": None, "tdv_hal": "olu", "denenen_slug": ["ankara-itilafnamesi", "ankara-antlasmasi", "franklin-bouillon"],
  "kapsayici": ["misak-i-milli", "lozan-antlasmasi"],
  "gun_dayanak": [("lozan-antlasmasi", "20 Ekim 1921 Ankara Antlaşması")],
  "kenar": [
    {"kenar": "Türkiye ↔ Suriye", "iliski": "tarif", "kapi": "misak-i-milli",
     "alinti": "Türkiye Büyük Millet Meclisi hükümetiyle Fransa arasında 20 Ekim’de imzalanan Ankara İtilâfnâmesi’yle bugünkü sınır çizilerek Suriye ve Lübnan Fransa’ya bırakıldı."}]},

 {"id": "ankara-1926", "ad": "Ankara Antlaşması (Türk-Irak Sınırı ve İyi Komşuluk Antlaşması)",
  "gun": "1926-06-05", "gun_kesinlik": "gun", "taraflar": "Türkiye — İngiltere — Irak",
  "tdv_slug": None, "tdv_hal": "olu", "denenen_slug": ["ankara-antlasmasi--1926", "musul"],
  "kapsayici": ["musul--irak", "kerkuk", "irak--ulke"],
  "gun_dayanak": [("musul--irak", "5 Haziran 1926’da Türkiye ile İngiltere arasında imzalanan antlaşma")],
  "kenar": [
    {"kenar": "Türkiye ↔ Irak", "iliski": "tarif", "kapi": "musul--irak",
     "alinti": "5 Haziran 1926’da Türkiye ile İngiltere arasında imzalanan antlaşma ile bugünkü Türkiye-Irak sınırı çizildi ve Musul Irak sınırları içinde kaldı."},
    {"kenar": "Türkiye ↔ Irak (1924 statüko hattı)", "iliski": "tarif", "kapi": "musul--irak",
     "alinti": "Milletler Cemiyeti tarafından 29 Ekim 1924’te statüko hattı olarak tesbit edilen çizginin"}]},

 {"id": "kars", "ad": "Kars Antlaşması", "gun": "1921-10-13", "gun_kesinlik": "gun",
  "taraflar": "Türkiye — Ermenistan, Azerbaycan, Gürcistan (RSFSR katılımıyla)",
  "tdv_slug": None, "tdv_hal": "olu", "denenen_slug": ["kars-antlasmasi"], "kapsayici": ["kars"],
  "gun_dayanak": [("kars", "Kars (13 Ekim 1921) antlaşmalarıyla yapılan son sınır tashihleri")],
  "kenar": [
    {"kenar": "Türkiye ↔ Ermenistan/Gürcistan/Azerbaycan", "iliski": "tarif", "kapi": "kars",
     "alinti": "Moskova (16 Mart 1921) ve Kars (13 Ekim 1921) antlaşmalarıyla yapılan son sınır tashihleri sayesinde Kars yeni Türk devletinin sınırları dahilinde kaldı."}]},

 {"id": "moskova-1921", "ad": "Moskova Antlaşması", "gun": "1921-03-16", "gun_kesinlik": "gun",
  "taraflar": "TBMM hükümeti — RSFSR",
  "tdv_slug": None, "tdv_hal": "olu", "denenen_slug": ["moskova-antlasmasi"], "kapsayici": ["batum", "kars"],
  "gun_dayanak": [("batum", "16 Mart 1921’de Rusya Şûralar Federatif Sosyalist Cumhuriyeti hükümeti ile imzalanan Moskova Antlaşması")],
  "kenar": [
    {"kenar": "Türkiye ↔ Gürcistan (Batum)", "iliski": "tarif", "kapi": "batum",
     "alinti": "Fakat 16 Mart 1921’de Rusya Şûralar Federatif Sosyalist Cumhuriyeti hükümeti ile imzalanan Moskova Antlaşması gereğince Gürcistan’a bırakıldı."}]},

 {"id": "gumru", "ad": "Gümrü Antlaşması", "gun": "1920-12-03", "gun_kesinlik": "gun-CELISKILI",
  "taraflar": "TBMM hükümeti — Ermenistan",
  "tdv_slug": None, "tdv_hal": "olu", "denenen_slug": ["gumru-antlasmasi", "gumru"], "kapsayici": ["kars", "revan"],
  "gun_dayanak": [("kars", "Ermeniler’le 3 Aralık 1920’de imzalanan Gümrü Antlaşması"),
                  ("revan", "Gümrü Antlaşması ile birlikte (2 Aralık 1920)")],
  "kenar": []},

 {"id": "ukayr", "ad": "Ukayr Protokolü (TDV ADIYLA ANMIYOR)", "gun": "1922-12-02", "gun_kesinlik": "gun-ADSIZ",
  "taraflar": "Necid — Küveyt / Irak (İngiliz gözetiminde)",
  "tdv_slug": None, "tdv_hal": "olu", "denenen_slug": ["ukayr", "ukayr-protokolu", "akir"],
  "kapsayici": ["kuveyt", "suudi-arabistan", "necid", "basra"],
  "gun_dayanak": [("kuveyt", "Suudi Arabistan ile antlaşma imzalayarak (2 Aralık 1922) sınır meselelerini halletti.")],
  "kenar": [
    {"kenar": "Necid ↔ Küveyt / Irak / Doğu Ürdün", "iliski": "tarif", "kapi": "suudi-arabistan",
     "alinti": "1922’de İngilizler’in gözetiminde yaptığı anlaşmalarla Irak, Doğu Ürdün ve Küveyt sınırları belirlendi."}]},

 {"id": "brest", "ad": "Brest-Litovsk Antlaşması", "gun": "1918-03-03", "gun_kesinlik": "gun",
  "taraflar": "Sovyet Rusya — İttifak devletleri",
  "tdv_slug": None, "tdv_hal": "olu", "denenen_slug": ["brest-litovsk-antlasmasi"], "kapsayici": ["rusya"],
  "gun_dayanak": [("rusya", "Brest-Litovsk Antlaşması ile (3 Mart 1918)")],
  "kenar": [
    {"kenar": "Osmanlı ↔ Rusya (Kars · Ardahan · Batum)", "iliski": "tarif", "kapi": "rusya",
     "alinti": "Brest-Litovsk Antlaşması ile (3 Mart 1918) Rusya Doksanüç Harbi’nde ele geçirdiği Kars, Ardahan ve Batum’u geri vermek zorunda kaldı."}]},

 {"id": "londra-1913", "ad": "Londra Antlaşması", "gun": "1913-05-30", "gun_kesinlik": "gun",
  "taraflar": "Osmanlı Devleti — Balkan devletleri",
  "tdv_slug": None, "tdv_hal": "olculemedi", "denenen_slug": ["londra-antlasmasi (200 · 2708 kar. — BOILERPLATE)"],
  "kapsayici": ["balkan-savasi"],
  "gun_dayanak": [("balkan-savasi", "30 Mayıs 1913’te Osmanlı Devleti ile Balkan devletleri arasında imzalanan bir antlaşma ile sona erdi")],
  "kenar": [
    {"kenar": "Osmanlı ↔ Bulgaristan (Midye-Enez)", "iliski": "tarif", "kapi": "balkan-savasi",
     "alinti": "Londra Antlaşması’nda kabul edilen Midye-Enez hattının belirlenmesine yanaşmayan Bulgaristan’ın tutumundan şikâyet edilerek"}]},

 {"id": "istanbul-1913", "ad": "İstanbul Antlaşması (Osmanlı-Bulgar)", "gun": "1913-09-29", "gun_kesinlik": "gun",
  "taraflar": "Osmanlı Devleti — Bulgaristan",
  "tdv_slug": None, "tdv_hal": "olu", "denenen_slug": ["istanbul-antlasmasi"], "kapsayici": ["balkan-savasi"],
  "gun_dayanak": [("balkan-savasi", "Osmanlı-Bulgar antlaşması da 29 Eylül 1913’te İstanbul’da imzalandı.")],
  "kenar": [
    {"kenar": "Osmanlı ↔ Bulgaristan (Edirne)", "iliski": "tarif", "kapi": "balkan-savasi",
     "alinti": "Yirmi maddeden oluşan İstanbul Antlaşması’na göre, Edirne ile batı tarafında"}]},

 {"id": "atina-1913", "ad": "Atina Antlaşması (Osmanlı-Yunan)", "gun": "1913-11-14", "gun_kesinlik": "gun",
  "taraflar": "Osmanlı Devleti — Yunanistan",
  "tdv_slug": None, "tdv_hal": "olu", "denenen_slug": ["atina-antlasmasi"], "kapsayici": ["balkan-savasi"],
  "gun_dayanak": [("balkan-savasi", "Osmanlı-Yunan Antlaşması 14 Kasım 1913’te Atina’da imzalandı.")],
  "kenar": []},

 {"id": "bukres-1913", "ad": "Bükreş Antlaşması", "gun": "1913-08-10", "gun_kesinlik": "gun",
  "taraflar": "Bulgaristan — Sırbistan, Yunanistan, Karadağ (ve Romanya)",
  "tdv_slug": None, "tdv_hal": "olu", "denenen_slug": ["bukres-antlasmasi"], "kapsayici": ["balkan-savasi"],
  "gun_dayanak": [("balkan-savasi", "10 Ağustos 1913’te Bulgaristan’la Sırbistan, Yunanistan ve Karadağ arasında imzalanan Bükreş Antlaşması")],
  "kenar": []},

 {"id": "neuilly", "ad": "Nöyyi (Neuilly-sur-Seine) Antlaşması", "gun": "1919-11-27", "gun_kesinlik": "gun",
  "taraflar": "Bulgaristan — İtilâf devletleri",
  "tdv_slug": None, "tdv_hal": "olu", "denenen_slug": ["noyyi-antlasmasi", "neuilly-antlasmasi", "noyyi"],
  "kapsayici": ["bulgaristan"],
  "gun_dayanak": [("bulgaristan", "Neully Antlaşması’yla (27 Kasım 1919)")],
  "kenar": [
    {"kenar": "Bulgaristan ↔ Yunanistan (Batı Trakya) · ↔ SHS · ↔ Romanya", "iliski": "tarif", "kapi": "bulgaristan",
     "alinti": "Bulgaristan Sırplar lehine belirli bir stratejik toprak kaybına uğramış, Batı Trakya’nın tamamını kaybetmiş, Ege denizi kıyısını Yunanistan’a bırakmak durumunda kalmış"}]},

 {"id": "trianon", "ad": "Trianon Antlaşması", "gun": "1920-06-04", "gun_kesinlik": "gun-YIL_TURETILDI",
  "taraflar": "Macaristan — İtilâf devletleri",
  "tdv_slug": None, "tdv_hal": "olu", "denenen_slug": ["trianon-antlasmasi", "trianon"], "kapsayici": ["macaristan"],
  "gun_dayanak": [("macaristan", "4 Haziran günü imzalanan Trianon Antlaşması gereğince Macaristan toprak ve insan kaybına uğradı.")],
  "kenar": []},

 {"id": "saint-germain", "ad": "Saint-Germain Barış Antlaşması", "gun": "1919-09-10", "gun_kesinlik": "gun",
  "taraflar": "Avusturya — İtilâf devletleri",
  "tdv_slug": None, "tdv_hal": "olu", "denenen_slug": ["saint-germain-antlasmasi", "sen-jermen-antlasmasi"],
  "kapsayici": ["avusturya"],
  "gun_dayanak": [("avusturya", "Saint-Germain Barış Antlaşması’nı imzaladı (10 Eylül 1919)")],
  "kenar": []},

 {"id": "versay", "ad": "Versailles Barış Antlaşması", "gun": "1919-06-28", "gun_kesinlik": "gun",
  "taraflar": "Almanya — İtilâf devletleri",
  "tdv_slug": None, "tdv_hal": "olu", "denenen_slug": ["versay-antlasmasi", "versailles"], "kapsayici": ["almanya"],
  "gun_dayanak": [("almanya", "Versailles Barış Antlaşması (28 Haziran 1919)")],
  "kenar": []},

 {"id": "usi", "ad": "Uşi (Ouchy) Antlaşması", "gun": "1912-10-18", "gun_kesinlik": "gun",
  "taraflar": "Osmanlı Devleti — İtalya",
  "tdv_slug": None, "tdv_hal": "olu", "denenen_slug": ["usi-antlasmasi", "ouchy"], "kapsayici": ["libya", "trablusgarp"],
  "gun_dayanak": [("libya", "18 Ekim 1912’de Uşi (Ouchy/Lozan) Antlaşması imzalandı")],
  "kenar": [
    {"kenar": "Osmanlı ↔ İtalya (Trablusgarp)", "iliski": "tarif", "kapi": "trablusgarp",
     "alinti": "Osmanlı Devleti, Afrika’daki bu son vilâyetini İtalya’ya terkettiğini kabul etti"}]},

 {"id": "san-remo", "ad": "San Remo Konferansı", "gun": "1920-04-01", "gun_kesinlik": "ay",
  "taraflar": "İtilâf devletleri (manda dağıtımı)",
  "tdv_slug": None, "tdv_hal": "olu", "denenen_slug": ["san-remo-konferansi", "san-remo"], "kapsayici": ["suriye", "filistin"],
  "gun_dayanak": [("suriye", "Nisan 1920 San Remo Konferansı’nda Suriye’yi Fransız manda yönetimine vermesiyle")],
  "kenar": [
    {"kenar": "Suriye/Lübnan · Filistin manda tahsisi (sınır DEĞİL)", "iliski": "tarif", "kapi": "filistin",
     "alinti": "San Remo Konferansı 1920’de Filistin’i İngiliz mandasına verdi."}]},

 {"id": "sevr", "ad": "Sevr Antlaşması", "gun": "1920-08-10", "gun_kesinlik": "olculmedi",
  "taraflar": "Osmanlı Devleti — İtilâf devletleri",
  "tdv_slug": "sevr-antlasmasi", "tdv_hal": "canli", "govde_kar": 28216,
  "gun_dayanak": [],
  "kenar": [
    {"kenar": "Osmanlı güney sınırı (Ceyhan → İran)", "iliski": "tarif", "kapi": "sevr-antlasmasi",
     "alinti": "Türkiye’nin güney sınırı Ceyhan nehrinin denize döküldüğü yerden başlayarak Osmaniye, Antep, Urfa, Siverek ve Mardin’in kuzeyinden İran sınırına uzanıyordu"},
    {"kenar": "Osmanlı batı sınırı (Çatalca)", "iliski": "tarif", "kapi": "sevr-antlasmasi",
     "alinti": "Yeni bir taslak hazırlanıp Çatalca hattı Türkiye’nin batı sınırı olarak kabul edildi."}]},

 {"id": "mudanya", "ad": "Mudanya Mütarekesi", "gun": "1922-10-11", "gun_kesinlik": "gun",
  "taraflar": "TBMM hükümeti — İtilâf devletleri", "tdv_slug": "mudanya-mutarekesi", "tdv_hal": "canli",
  "govde_kar": 14602, "gun_dayanak": [("mudanya-mutarekesi", "Mudanya Mütarekesi 11 Ekim 1922 sabahı imzalandı.")],
  "kenar": []},

 {"id": "mondros", "ad": "Mondros Mütarekesi", "gun": "1918-10-30", "gun_kesinlik": "gun",
  "taraflar": "Osmanlı Devleti — İtilâf devletleri", "tdv_slug": "mondros-mutarekesi", "tdv_hal": "canli",
  "govde_kar": 14207,
  "gun_dayanak": [("mondros-mutarekesi", "30 Ekim 1918’de yapılan ateşkes antlaşması")], "kenar": []},

 {"id": "berlin-1878", "ad": "Berlin Antlaşması", "gun": None, "gun_kesinlik": "olculmedi",
  "taraflar": "Osmanlı Devleti — büyük devletler", "tdv_slug": "berlin-antlasmasi", "tdv_hal": "canli",
  "govde_kar": 10153, "gun_dayanak": [], "kenar": [],
  "not": "CANLI, gövdesi OKUNMADI (bütçe). ⚪ okumadım — 'bulunamadi' DEĞİL."},
 {"id": "ayastefanos", "ad": "Ayastefanos Antlaşması", "gun": None, "gun_kesinlik": "olculmedi",
  "taraflar": "Osmanlı Devleti — Rusya", "tdv_slug": "ayastefanos-antlasmasi", "tdv_hal": "canli",
  "govde_kar": 11012, "gun_dayanak": [], "kenar": [], "not": "CANLI, gövdesi OKUNMADI (bütçe)."},
 {"id": "sykes-picot", "ad": "Sykes-Picot Anlaşması", "gun": None, "gun_kesinlik": "olculmedi",
  "taraflar": "İngiltere — Fransa (— Rusya)", "tdv_slug": "sykes-picot-antlasmasi", "tdv_hal": "canli",
  "govde_kar": 17708, "gun_dayanak": [], "kenar": [], "not": "CANLI, gövdesi OKUNMADI (bütçe). GİZLİ anlaşma — sınır ANTLAŞMASI değil, PAYLAŞIM tasarısı."},
 {"id": "cidde", "ad": "Cidde Antlaşması", "gun": None, "gun_kesinlik": "olculmedi",
  "taraflar": "İngiltere — Necid/Hicaz", "tdv_slug": "cidde", "tdv_hal": "canli", "govde_kar": 14821,
  "gun_dayanak": [], "kenar": [], "not": "§4③ DESENİ: dar slug `cidde-antlasmasi` 302 ÖLÜ, kapsayıcı `cidde` 200 CANLI."},
 {"id": "taif", "ad": "Taif Antlaşması", "gun": None, "gun_kesinlik": "olculmedi",
  "taraflar": "Suudi Arabistan — Yemen", "tdv_slug": "taif", "tdv_hal": "canli", "govde_kar": 32202,
  "gun_dayanak": [], "kenar": [], "not": "§4③ DESENİ: `taif-antlasmasi` 302 ÖLÜ, `taif` 200 CANLI. 1934 — çıpadan 11 yıl SONRA."},
 {"id": "misak", "ad": "Mîsâk-ı Millî", "gun": None, "gun_kesinlik": "olculmedi",
  "taraflar": "Osmanlı Meclis-i Meb'ûsanı (BEYAN — antlaşma DEĞİL)", "tdv_slug": "misak-i-milli",
  "tdv_hal": "canli", "govde_kar": 14820, "gun_dayanak": [], "kenar": [],
  "not": "Bir ANTLAŞMA DEĞİL bir BEYANDIR; hiçbir kenarın hukukî metni olamaz. Künyede duruyor çünkü altı kol onu antlaşma sanabilir."},

 {"id": "riga", "ad": "Riga Antlaşması", "gun": None, "gun_kesinlik": "bulunamadi",
  "taraflar": "Polonya — Sovyet Rusya", "tdv_slug": None, "tdv_hal": "olu",
  "denenen_slug": ["riga-antlasmasi"], "kapsayici": ["polonya", "rusya"],
  "gun_dayanak": [], "kenar": [],
  "not": "ARANDI, YOK: dar slug 302; iki CANLI kapsayıcı gövde (polonya 88.402 kar. · rusya) tarandı, 'Riga' hiç geçmiyor. §4: akademik kaynak MEŞRU, `kaynak:` alanına AÇIKÇA yazılır."},
 {"id": "rapallo", "ad": "Rapallo Antlaşması (1920)", "gun": None, "gun_kesinlik": "bulunamadi",
  "taraflar": "İtalya — SHS Devleti",
  "tdv_slug": None, "tdv_hal": "olu", "denenen_slug": ["rapallo-antlasmasi", "rapallo"],
  "kapsayici": ["italya", "yugoslavya", "arnavutluk"], "gun_dayanak": [], "kenar": [],
  "not": "ARANDI, YOK. ⚠️ TUZAK: 'Rapallo' adını İKİ antlaşma taşır — 1920 İtalya-SHS (SINIR) ve 1922 Almanya-Sovyet (SINIR DEĞİL). Bir kol adı görüp yanlışını alabilir."},
 {"id": "muhammara", "ad": "Muhammere Antlaşması", "gun": None, "gun_kesinlik": "bulunamadi",
  "taraflar": "Necid — Irak", "tdv_slug": None, "tdv_hal": "olu",
  "denenen_slug": ["muhammere", "muhammara"], "kapsayici": ["kuveyt", "irak--ulke", "necid", "suudi-arabistan", "basra"],
  "gun_dayanak": [], "kenar": [],
  "not": "ARANDI, YOK: beş canlı kapsayıcı gövde tarandı, ad hiç geçmiyor."},
]

CELISKI = [
 {"konu": "Gümrü Antlaşması'nın günü", "cins": "TDV KENDİ İÇİNDE ÇELİŞİYOR (§4⑥)",
  "a": ("kars", "Ermeniler’le 3 Aralık 1920’de imzalanan Gümrü Antlaşması"),
  "b": ("revan", "Gümrü Antlaşması ile birlikte (2 Aralık 1920)"),
  "hukum": "VERİLMEDİ. Fark 1 gün. Taraf SEÇMİYORUM — §4⑥: çelişkiyi BİLDİRMEK taraf seçmekten değerlidir."},
 {"konu": "Ankara 1926'nın günü", "cins": "TDV MADDELERİ ARASINDA ÇELİŞİYOR (§4⑥)",
  "a": ("musul--irak + kerkuk", "5 Haziran 1926 — musul--irak'ta İKİ kez, kerkuk'te bir kez, ve TAM AD ile"),
  "b": ("irak--ulke", "Temmuz 1926’da Türkiye, İngiltere ve Irak arasında imzalanan bir antlaşma"),
  "hukum": "VERİLMEDİ. ⚠️ Ama ağırlık eşit DEĞİL: (a) günü ve resmî adı veriyor (3 anma), (b) 'bir antlaşma' diyor (1 anma). Bunu bir HÜKÜM değil bir ÖLÇÜM olarak yazıyorum."},
]


def main():
    atesle = "--atesle" in sys.argv
    kayitlar = json.loads(json.dumps(K))
    if atesle:
        kayitlar[0]["kenar"][0]["alinti"] = "BU CUMLE GOVDEDE YOKTUR — ATESLEME DALI"

    onbellek, hata, dogrulanan = {}, [], 0
    for k in kayitlar:
        for kapi, alinti in [(a, b) for a, b in k.get("gun_dayanak", [])] + \
                            [(e["kapi"], e["alinti"]) for e in k.get("kenar", [])]:
            if kapi not in onbellek:
                onbellek[kapi] = normal(govde(kapi))
            g = onbellek[kapi]
            if not g:
                hata.append((k["id"], kapi, "GOVDE YOK")); continue
            if normal(alinti) in g:
                dogrulanan += 1
            else:
                hata.append((k["id"], kapi, alinti[:70]))

    print("ALINTI DOGRULAMA: 🟢 %d birebir bulundu · 🔴 %d bulunamadi" % (dogrulanan, len(hata)))
    for h in hata:
        print("   🔴 %-14s [%s] %s" % h)

    if atesle:
        ok = len(hata) == 1
        print("\nC13② ATESLEME: bozuk alinti -> %s" % ("YAKALANDI · GECTI" if ok else "🔴 KACTI"))
        sys.exit(0 if ok else 1)

    if hata:
        print("\n🔴 DOSYA YAZILMADI — dogrulanmamis alinti ile kunye uretilmez.")
        sys.exit(1)

    sayac = {"kunye": len(K),
             "tdv_dogrudan_canli": sum(1 for k in K if k["tdv_hal"] == "canli"),
             "kapsayici_ile_bulundu": sum(1 for k in K if k["tdv_hal"] != "canli" and k.get("gun_dayanak")),
             "bulunamadi": sum(1 for k in K if k["gun_kesinlik"] == "bulunamadi"),
             "olculemedi_govde": sum(1 for k in K if k["tdv_hal"] == "olculemedi"),
             "govdesi_okunmadi": sum(1 for k in K if "OKUNMADI" in (k.get("not") or "")),
             "kenar_kaydi": sum(len(k.get("kenar", [])) for k in K),
             "alinti_dogrulandi": dogrulanan}
    json.dump({"_NOT": "ANTLASMA-0907 · 1923 cipasi cevresi sinir antlasmalari kunyesi. "
                       "HER alinti kaynak govdesinde BIREBIR dogrulandi; dogrulanmayan varsa dosya YAZILMAZ. "
                       "'canli' ADRESI olcer, DOGRU MADDE oldugunu OLCMEZ (§4②).",
               "cipa": "1923-10-29", "olcum_zamani": time.strftime("%Y-%m-%d %H:%M"),
               "sayac": sayac, "celiski": CELISKI, "kunyeler": K},
              open(CIKTI, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("\n" + json.dumps(sayac, ensure_ascii=False, indent=1))
    print("YAZILDI: " + CIKTI)


if __name__ == "__main__":
    main()
