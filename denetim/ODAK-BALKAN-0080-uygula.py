# -*- coding: utf-8 -*-
"""ODAK-BALKAN-0080 — kronoloji maddelerinin HARİTA ODAĞI uygulayıcısı.

Kapsam: kronoloji_balkan · kronoloji_sirbistan · kronoloji_bizans ·
kronoloji_rodos_sovalyeleri · kronoloji_atina_dukaligi  (şartname:
oturumlar/ODAK-BALKAN-0080.md). Yük 145 madde = 62 ODAKSIZ + 83 BEYANLI.

Kullanım:
  py denetim/ODAK-BALKAN-0080-uygula.py                 KURU KOŞU (varsayılan)
  py denetim/ODAK-BALKAN-0080-uygula.py --uygula        yazar
  py denetim/ODAK-BALKAN-0080-uygula.py --grup A,B      yalnız bu sınıflar

Kurallar:
  · madde (dosya, t, b başı) ile BULUNUR; bulunamaz/çok eşleşirse ATLANIR ve sayılır
  · ESKİ hâl doğrulanır: yer_id:"" TEK olmalı, hiçbir odak alanı olmamalı,
    kapsam_genis:true beklenen sınıfa (BEY/ODA) uymalı — uymazsa DOKUNULMAZ
  · yeni değer zaten yazılıysa "zaten böyle" (idempotent)
  · ŞART SINAVI app.js ile AYNI mantıkla (node + js/suzgec.js, künye data/devletler.js):
      yer_id / odak_yer adı `sehirler` havuzunda BİREBİR ya da " (" öncesi
      odak_kimlik o GÜN ≥ 2 yerleşim ve künye VAR
    sınavı geçmeyen öneri YAZILMAZ ("şartı sağlamadı")
  · A/B/C'ye çevrilen BEYANLI maddede kapsam_genis:true KALDIRILIR (şartname)
  · yalnız odak alanlarına dokunur; t/b/d/kaynak DEĞİŞMEZ
  · E sınıfı hiçbir şey yazmaz, yalnız basılır (bulunamadı meşru sonuçtur)
Rapor: denetim/ODAK-BALKAN-0080.md
"""
import io, json, os, re, subprocess, sys, tempfile
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
UYGULA = "--uygula" in sys.argv
GRUP = None
if "--grup" in sys.argv:
    GRUP = set(sys.argv[sys.argv.index("--grup") + 1].upper().split(","))

OSM = "OSM Nominatim sorgusu 27 Eyl 2026"
MT = "yer madde metninde (b/d) adıyla geçiyor"

# (dosya-kısa, t, b başı, beklenen ölçüm sınıfı, SINIF, alanlar, gerekçe · kaynak)
# alanlar: {"yer_id": ad} | {"yer_kon": [lat, lon]} | {"odak_yer": [..]} | {"odak_kimlik": [..]} | {}
O = []
def o(f, t, b, olc, s, alan, g):
    O.append(dict(dosya="kronoloji_%s.js" % f, t=t, b=b, olc=olc, sinif=s, alan=alan, gerekce=g))

# ── BALKAN · Zeta / Karadağ ─────────────────────────────────────────────
ZB = ["Podgorica", "İşkodra"]   # Balšić Zetası: Zeta ovası + İşkodra (kamera tercihi)
ZC = ["Cetinje", "Podgorica"]   # Crnojević Zetası / Karadağ çekirdeği (kamera tercihi)
KNOT = "karadag/zeta kimliği o gün <2 yerleşim (ölçüldü: zeta 0-1, karadag 1530-1688 0, 1711-1876 1) → odak_yer"
o("balkan", "1356-01-01", "Balšić ailesi", "BEY", "B", {"odak_yer": ZB}, "zeta 1356'da 1 yerleşim; " + KNOT)
o("balkan", "1385-01-01", "Osmanlı ile ilk çarpışma", "BEY", "B", {"odak_yer": ZB}, "yer kaynakta yok; kamera Zeta'ya · " + KNOT)
o("balkan", "1421-01-01", "Son Balšić", "BEY", "B", {"odak_yer": ZB}, KNOT)
o("balkan", "1451-01-01", "Crnojević ailesi", "BEY", "B", {"odak_yer": ZC}, "Žabljak havuzda yok · " + KNOT)
o("balkan", "1465-01-01", "İvan Crnojević", "BEY", "B", {"odak_yer": ZC}, KNOT)
o("balkan", "1482-06-01", "Stanko Crnojević İstanbul", "BEY", "A", {"yer_id": "İstanbul"}, "rehine İstanbul'daki saraya gönderildi, ihtida orada · " + MT)
o("balkan", "1490-01-01", "Đurađ Crnojević babasının", "BEY", "B", {"odak_yer": ZC}, "crnojevic-zetasi 0 yerleşim · " + KNOT)
o("balkan", "1496-01-01", "Đurađ Crnojević Venedik", "BEY", "B", {"odak_yer": ZC}, "Firuz Bey'in Zeta'ya girişi; yer tek değil · " + KNOT)
o("balkan", "1514-01-01", "İskender Bey yönetiminde", "BEY", "B", {"odak_yer": ["Cetinje", "İşkodra"]}, "sancağın kuruluşu; karadag künyesi 1516'da başlıyor")
o("balkan", "1528-01-01", "İskender Bey öldü", "BEY", "B", {"odak_yer": ["Cetinje", "İşkodra"]}, "Karadağ'ın İşkodra'ya bağlanışı — iki uç")
o("balkan", "1530-01-01", "Karadağ'ın vergi düzeni", "BEY", "B", {"odak_yer": ZC}, KNOT)
o("balkan", "1614-01-01", "Karadağ'ın Osmanlı dönemi nüfus", "BEY", "B", {"odak_yer": ZC}, KNOT)
o("balkan", "1683-09-12", "II. Viyana bozgunu", "BEY", "A", {"yer_id": "Viyana"}, "bozgun Viyana önünde (Kahlenberg) · " + MT)
o("balkan", "1688-01-01", "Karadağlılar Venedik himayesine", "BEY", "B", {"odak_yer": ZC}, KNOT)
o("balkan", "1711-01-01", "Rusya Karadağ'a elçi", "BEY", "B", {"odak_yer": ZC}, KNOT)
o("balkan", "1718-07-21", "Pasarofça Antlaşması", "BEY", "A", {"yer_kon": [44.620, 21.185]}, "imza Pasarofça (Požarevac), havuzda yok · " + OSM)
o("balkan", "1785-01-01", "Buşatlı Kara Mahmud Paşa Karadağ", "BEY", "B", {"odak_yer": ["İşkodra", "Cetinje"]}, "İşkodra valisi ↔ Karadağ, iki taraf")
o("balkan", "1795-01-01", "Kara Mahmud Paşa Kruse", "BEY", "B", {"odak_yer": ZC}, "Kruse (Krusi) havuzda yok, konumu OSM'de çözülemedi → kamera; ⚠️ yıl 1796 olabilir (tahtaya ayrı bildirildi)")
o("balkan", "1838-01-01", "Grahova tarafsız", "BEY", "A", {"yer_kon": [42.653, 18.671]}, "konu Grahova arazisi · Grahovo köyü, " + OSM)
o("balkan", "1847-02-01", "Njegoš'un 'Dağlar Tacı'", "BEY", "A", {"yer_id": "Viyana"}, "eser Viyana'da basıldı · " + MT)
o("balkan", "1852-06-01", "Ömer Paşa'nın Karadağ", "BEY", "B", {"odak_yer": ZC}, KNOT)
o("balkan", "1853-03-01", "Sınırların mevcut", "BEY", "B", {"odak_yer": ZC}, KNOT)
o("balkan", "1856-03-30", "Paris Kongresi", "BEY", "A", {"yer_id": "Paris"}, MT)
o("balkan", "1858-05-13", "Grahova Savaşı", "BEY", "A", {"yer_kon": [42.653, 18.671]}, "Grahovo köyü (meydan çevresi, YAKLAŞIK) · " + OSM)
o("balkan", "1859-01-01", "İstanbul'da Grahova", "BEY", "A", {"yer_id": "İstanbul"}, "elçiler İstanbul'da toplandı · " + MT)
o("balkan", "1862-04-01", "Hersek isyanını destekleyen", "BEY", "B", {"odak_yer": ZC}, "iki koldan giriş, yer tek değil · " + KNOT)
o("balkan", "1876-06-30", "Sırbistan'ın müttefiki olarak", "BEY", "B", {"odak_yer": ZC}, "savaş ilanı, yer yok · " + KNOT)
o("balkan", "1876-07-18", "Vučji Do Savaşı", "BEY", "B", {"odak_yer": ["Trebinye", "Cetinje"]}, "Vučji Do (Nikšić) havuzda yok, OSM'de meydan çözülemedi → kamera kutusu Nikšić-Bileća arasını kapsıyor")
o("balkan", "1878-03-03", "Ayastefanos Antlaşması — bağımsızlık", "BEY", "A", {"yer_kon": [40.963, 28.825]}, "imza Ayastefanos (Yeşilköy), havuzda yok · " + OSM)
o("balkan", "1878-08-01", "Bağımsızlık sonrası Müslüman", "BEY", "B", {"odak_yer": ZC}, "ilhak edilen bölgeler (Podgorica vb.) · kamera")
o("balkan", "1912-08-01", "Karadağ-Bulgaristan ittifakı", "BEY", "B", {"odak_kimlik": ["karadag", "bulgaristan-kralligi"]}, "iki taraf; imza yeri metinde yok")
o("balkan", "1912-10-06", "Karadağ-Sırbistan ittifakı", "BEY", "B", {"odak_kimlik": ["karadag", "sirbistan-kralligi"]}, "iki taraf; imza yeri metinde yok")
o("balkan", "1912-10-08", "Osmanlı'ya savaş ilan eden ilk", "BEY", "C", {"odak_kimlik": ["karadag"]}, "savaş ilanı devlet kararı (karadag 1912'de 2 yerleşim)")
# ── BALKAN · Bulgar ───────────────────────────────────────────────────
o("balkan", "1230-03-09", "Klokotnitsa Zaferi", "BEY", "A", {"yer_kon": [41.989, 25.497]}, "Klokotnitsa köyü (meydan YAKLAŞIK) · " + OSM)
o("balkan", "1277-01-01", "İvaylo Ayaklanması", "BEY", "B", {"odak_yer": ["Tırnova", "Silistre"]}, "bulgar-carligi 1277'de 0 yerleşim (ölçüldü) → başkent Tırnova + Moğol akın kıyısı, kamera")
o("balkan", "1371-09-26", "Çirmen (Meriç) Savaşı", "BEY", "A", {"yer_id": "Çirmen"}, MT)
o("balkan", "1688-09-01", "Chiprovtsi (Kiprovça)", "BEY", "A", {"yer_kon": [43.384, 22.881]}, "isyan Chiprovtsi merkezli · " + OSM)
o("balkan", "1762-01-01", "Paisiy Hilendarski", "BEY", "A", {"yer_id": "Aynaroz"}, "eser Athos'taki Hilandar'da yazıldı · " + MT)
o("balkan", "1835-01-02", "Aprilov Mektebi", "BEY", "A", {"yer_kon": [42.964, 25.212]}, "Gabrovo havuzda yok · " + OSM)
o("balkan", "1876-05-02", "Nisan İsyanı", "BEY", "B", {"odak_yer": ["Filibe"]}, "isyan 'Filibe vilâyeti kırsalında' (metin); Batak kutu içinde")
o("balkan", "1877-04-24", "93 Harbi başladı", "BEY", "B", {"odak_yer": ["Vidin", "Varna", "Filibe"]}, "savaş 'Bulgar topraklarında' (metin) → Tuna-Balkan sahası")
o("balkan", "1877-08-21", "Şıpka Geçidi Savunması", "BEY", "A", {"yer_kon": [42.753, 25.320]}, "Şıpka Geçidi · " + OSM)
o("balkan", "1878-07-13", "Berlin Antlaşması — Bulgaristan", "BEY", "A", {"yer_id": "Berlin"}, "imza Berlin · " + MT)
o("balkan", "1885-11-14", "Sırp-Bulgar Savaşı başladı", "BEY", "B", {"odak_kimlik": ["sirbistan-kralligi", "bulgaristan-prensligi"]}, "iki taraf (ölçüldü 22 yerleşim)")
o("balkan", "1886-03-03", "Bükreş Barışı", "BEY", "A", {"yer_id": "Bükreş"}, MT)
o("balkan", "1912-10-08", "Birinci Balkan Savaşı'na giriş", "BEY", "C", {"odak_kimlik": ["bulgaristan-kralligi"]}, "savaş ilanı devlet kararı (14 yerleşim)")
o("balkan", "1913-05-30", "Londra Antlaşması — I. Balkan", "BEY", "A", {"yer_id": "Londra"}, "imza Londra")
o("balkan", "1913-06-29", "İkinci Balkan Savaşı başladı", "BEY", "B", {"odak_yer": ["Üsküp", "Selanik"]}, "Sırp ve Yunan mevzilerine saldırı — Makedonya cephesi, kamera")
o("balkan", "1913-08-10", "Bükreş Antlaşması — İkinci Balkan Savaşı sona erdi, Güney", "BEY", "A", {"yer_id": "Bükreş"}, "imza Bükreş")
o("balkan", "1915-10-14", "Bulgaristan I. Dünya", "BEY", "B", {"odak_kimlik": ["bulgaristan-kralligi", "sirbistan-kralligi"]}, "Sırbistan'a savaş ilanı, iki taraf (55 yerleşim)")
o("balkan", "1919-11-27", "Neuilly Antlaşması", "BEY", "A", {"yer_kon": [48.885, 2.270]}, "imza Neuilly-sur-Seine, havuzda yok · " + OSM)
# ── BALKAN · Bosna ────────────────────────────────────────────────────
BK = {"odak_kimlik": ["bosna-kralligi"]}
KOS = [42.691, 21.124]   # Gazimestan — Kosova Ovası meydanı, YAKLAŞIK
o("balkan", "1388-08-27", "Bileća Meydan Savaşı", "ODA", "A", {"yer_kon": [42.875, 18.428]}, "Bileća, havuzda yok · " + OSM)
o("balkan", "1389-06-15", "I. Kosova Savaşı'na katılım", "ODA", "A", {"yer_kon": KOS}, "Kosova Ovası — Gazimestan (meydan YAKLAŞIK) · " + OSM)
o("balkan", "1390-06-01", "Kral unvanının genişlemesi", "BEY", "B", {"odak_yer": ["Split", "Şibenik", "Brakya", "Hvar", "Korçula"]}, "metinde sayılan kıyı şehirleri ve adalar (Trogir havuzda yok)")
o("balkan", "1391-01-01", "Tvrtko I'in ölümü", "BEY", "C", BK, "krallık çapı (15 yerleşim)")
o("balkan", "1394-07-01", "Đakovo Antlaşması", "BEY", "A", {"yer_kon": [45.308, 18.412]}, "Đakovo, havuzda yok · " + OSM)
o("balkan", "1395-09-08", "Kraliçe Jelena", "BEY", "C", BK, "krallık çapı")
o("balkan", "1400-01-01", "Stećci mezar", "BEY", "C", BK, "krallık çapı")
o("balkan", "1404-01-01", "Büyük Dük Hrvoje", "BEY", "C", BK, "krallık çapı")
o("balkan", "1414-01-01", "Osmanlı'ya ilk haraç", "BEY", "C", BK, "krallığın statüsü")
o("balkan", "1420-01-01", "II. Tvrtko'nun ikinci", "BEY", "C", BK, "krallık çapı")
o("balkan", "1428-01-01", "Haracın pekiştirilmesi", "BEY", "C", BK, "krallık çapı; şehirler metinde adsız")
o("balkan", "1430-01-01", "Ortodoks Sırp göçünün", "BEY", "C", BK, "doğu/güneydoğu Bosna — krallık kutusu")
o("balkan", "1435-01-01", "Stjepan Vukčić Kosača'nın fiilî", "BEY", "B", {"odak_yer": ["Mostar", "Trebinye"]}, "Hum bölgesi; hersek künyesi 1435'te 0 yerleşim (ölçüldü)")
o("balkan", "1443-01-01", "Stjepan Tomaš'ın tahta", "BEY", "C", BK, "krallık çapı")
o("balkan", "1448-01-20", "Stjepan Vukčić Kosača'nın 'Herceg'", "BEY", "C", {"odak_kimlik": ["hersek"]}, "yeni dukalığın toprağı (2 yerleşim)")
o("balkan", "1450-01-01", "Gümüş madenciliği", "BEY", "C", BK, "maden şehirleri (Srebrenica, Fojnica, Olovo, Kreševo) havuzda yok → krallık kutusu")
o("balkan", "1459-01-01", "Bosna Kilisesi'nin tasfiyesi", "BEY", "C", BK, "krallık çapı")
o("balkan", "1461-11-01", "Stjepan Tomašević'in tahta", "BEY", "C", BK, "krallık çapı")
# ── BALKAN · Yunanistan ───────────────────────────────────────────────
YK = {"odak_kimlik": ["yunanistan"]}
MORA = ["Balyabadra", "Modon", "Anabolu"]
o("balkan", "1821-02-22", "İpsilantis'in Eflak-Boğdan", "ODA", "B", {"odak_kimlik": ["eflak", "bogdan"]}, "Eflak-Boğdan'a giriş (15 yerleşim)")
o("balkan", "1821-03-25", "Mora İsyanı başladı", "BEY", "B", {"odak_yer": MORA}, "Mora yarımadası (metin)")
o("balkan", "1825-06-22", "Tripoliçe'nin Mısır", "ODA", "A", {"yer_id": "Mora (Tripoliçe)"}, MT + " (havuz adı 'Mora (Tripoliçe)', TAM ad yazıldı)")
o("balkan", "1826-04-22", "Missolonghi'nin düşüşü", "ODA", "A", {"yer_kon": [38.369, 21.428]}, "Mesolongi, havuzda yok · " + OSM)
o("balkan", "1827-07-06", "Londra Protokolü imzalandı", "BEY", "A", {"yer_id": "Londra"}, "imza Londra")
o("balkan", "1827-10-20", "Navarin Deniz Savaşı", "ODA", "A", {"yer_kon": [36.914, 21.696]}, "Navarin (Pilos) koyu, YAKLAŞIK — kasaba noktası · " + OSM)
o("balkan", "1829-09-14", "Edirne Antlaşması", "ODA", "A", {"yer_id": "Edirne"}, "imza Edirne")
o("balkan", "1830-02-03", "Bağımsızlığın Londra", "BEY", "A", {"yer_id": "Londra"}, "protokol Londra")
o("balkan", "1831-10-09", "Kapodistrias'ın suikastı", "ODA", "A", {"yer_id": "Anabolu"}, "Nafplion (Anabolu) · " + MT)
o("balkan", "1832-05-07", "Otto'nun Yunanistan kralı", "BEY", "A", {"yer_id": "Londra"}, "Londra Antlaşması · " + MT)
o("balkan", "1832-07-21", "İstanbul Antlaşması", "BEY", "A", {"yer_id": "İstanbul"}, "imza İstanbul")
o("balkan", "1833-02-06", "Otto'nun Yunanistan'a gelişi", "ODA", "A", {"yer_id": "Anabolu"}, "Nafplion'a ulaştı · " + MT)
o("balkan", "1833-07-25", "Yunan Kilisesi'nin", "BEY", "C", YK, "ülke çapı ilan (41 yerleşim); toplantı yeri metinde yok")
o("balkan", "1864-05-21", "İyon adalarının", "ODA", "B", {"odak_yer": ["Korfu", "Kefalonya", "Zaklise"]}, "metinde sayılan adalar")
o("balkan", "1823-01-01", "Solomos'un", "ODA", "B", {"odak_yer": ["Zaklise"]}, "şair Zakintoslu; yazıldığı yer metinde açık değil → yer_id DEĞİL, kamera")
o("balkan", "1865-01-01", "'Özgürlüğe İlahi'nin millî", "ODA", "C", YK, "ülke çapı kabul")
o("balkan", "1881-05-24", "Tesalya'nın Yunanistan'a", "BEY", "B", {"odak_yer": ["Yenişehir (Larissa)", "Arta"]}, "devredilen Tesalya + Epir kesimi (metin)")
o("balkan", "1893-08-06", "Korint Kanalı'nın", "ODA", "A", {"yer_kon": [37.934, 22.985]}, "Korint Kanalı · " + OSM)
o("balkan", "1897-04-17", "1897 Osmanlı-Yunan", "BEY", "B", {"odak_yer": ["Yenişehir (Larissa)", "Yanya"]}, "Rumeli sınırı (Tesalya-Epir) — kamera")
o("balkan", "1897-05-17", "Dömeke Savaşı", "ODA", "A", {"yer_kon": [39.128, 22.303]}, "Domokos · " + OSM)
o("balkan", "1912-10-08", "Balkan Savaşları'na giriş", "BEY", "C", YK, "savaş ilanı devlet kararı (53 yerleşim)")
o("balkan", "1913-05-30", "Londra Antlaşması\"", "BEY", "A", {"yer_id": "Londra"}, "imza Londra")
o("balkan", "1913-08-10", "Bükreş Antlaşması\"", "BEY", "A", {"yer_id": "Bükreş"}, "imza Bükreş")
o("balkan", "1920-08-10", "Sevr Antlaşması", "BEY", "A", {"yer_kon": [48.825, 2.213]}, "imza Sèvres, havuzda yok · " + OSM)
o("balkan", "1922-08-26", "Büyük Taarruz", "ODA", "B", {"odak_yer": ["Karahisâr-ı Sâhib (Afyon)", "Uşak"]}, "'Afyon-Dumlupınar hattı' (metin); Dumlupınar havuzda yok")
o("balkan", "1923-01-30", "Nüfus mübadelesi", "BEY", "A", {"yer_id": "Lozan"}, "Lozan görüşmelerinde imzalandı · " + MT)
o("balkan", "1923-07-24", "Lozan Antlaşması", "BEY", "A", {"yer_id": "Lozan"}, "imza Lozan")
# ── SIRBİSTAN ─────────────────────────────────────────────────────────
NK = {"odak_kimlik": ["sirbistan-nemanjic"]}
o("sirbistan", "1217-01-01", "Sırbistan Krallığı ilan", "ODA", "B", {"odak_yer": ["Yenipazar"]}, "sirbistan-nemanjic 1217'de 0 yerleşim (ölçüldü) → Raška çekirdeği, kamera")
o("sirbistan", "1331-01-01", "Stefan Duşan tahta", "ODA", "C", NK, "krallık çapı (22 yerleşim)")
o("sirbistan", "1355-12-20", "Duşan'ın ani ölümü", "ODA", "C", NK, "imparatorluğun çözülüşü (32 yerleşim)")
o("sirbistan", "1371-09-26", "Çirmen (Meriç) Savaşı", "ODA", "A", {"yer_id": "Çirmen"}, MT)
o("sirbistan", "1389-06-15", "I. Kosova Savaşı", "ODA", "A", {"yer_kon": KOS}, "Kosova Ovası — Gazimestan (YAKLAŞIK) · " + OSM)
o("sirbistan", "1402-01-01", "Sırp Despotluğu'nun kuruluşu", "ODA", "C", {"odak_kimlik": ["sirp-despotlugu"]}, "yeni devletin toprağı (10 yerleşim)")
o("sirbistan", "1448-10-17", "II. Kosova Savaşı", "ODA", "A", {"yer_kon": KOS}, "Kosova Ovası (YAKLAŞIK) · " + OSM)
PEC = [42.661, 20.265]
o("sirbistan", "1463-01-01", "Peç (İpek) Patrikliği kaldırıldı", "ODA", "A", {"yer_kon": PEC}, "konu Peç Patrikhanesi; Peç havuzda yok · " + OSM)
o("sirbistan", "1557-01-01", "Peç Patrikliği ihya", "ODA", "A", {"yer_kon": PEC}, "Peç Patrikhanesi · " + OSM)
o("sirbistan", "1690-01-01", "Büyük Sırp Göçü", "ODA", "B", {"odak_yer": ["Priştine", "Belgrad", "Varadin"]}, "Kosova'dan Karlofça'ya göç (Karlofça havuzda yok; Varadin komşusu)")
o("sirbistan", "1766-01-01", "Peç Patrikliği kalıcı", "ODA", "A", {"yer_kon": PEC}, "Peç Patrikhanesi · " + OSM)
o("sirbistan", "1804-02-14", "Birinci Sırp Ayaklanması", "ODA", "A", {"yer_kon": [44.331, 20.587]}, "Orašac meclisi (metin) · " + OSM)
o("sirbistan", "1815-04-23", "İkinci Sırp Ayaklanması", "ODA", "A", {"yer_kon": [44.044, 20.387]}, "Takovo meclisi (metin) · " + OSM)
o("sirbistan", "1826-10-07", "Akkerman Sözleşmesi", "ODA", "A", {"yer_id": "Akkirman"}, "imza Akkerman")
o("sirbistan", "1830-10-17", "Özerklik fermanı", "ODA", "B", {"odak_yer": ["Belgrad", "Kragujevac"]}, "sirbistan-prensligi 1830'da 0 yerleşim (ölçüldü) → prenslik çekirdeği, kamera")
o("sirbistan", "1876-06-30", "Sırbistan Osmanlı Devleti'ne savaş", "ODA", "C", {"odak_kimlik": ["sirbistan-prensligi"]}, "savaş ilanı devlet kararı (5 yerleşim)")
o("sirbistan", "1878-03-03", "Ayastefanos", "ODA", "A", {"yer_kon": [40.963, 28.825]}, "imza Ayastefanos (Yeşilköy) · " + OSM)
o("sirbistan", "1878-07-13", "Berlin Antlaşması", "ODA", "A", {"yer_id": "Berlin"}, "imza Berlin")
o("sirbistan", "1885-11-14", "Sırp-Bulgar Savaşı", "ODA", "B", {"odak_kimlik": ["sirbistan-kralligi", "bulgaristan-prensligi"]}, "iki taraf (22 yerleşim)")
o("sirbistan", "1908-10-06", "Bosna-Hersek'in ilhakı", "ODA", "B", {"odak_yer": ["Saraybosna", "Belgrad"]}, "ilhak edilen Bosna ↔ tehdit eden Sırbistan")
o("sirbistan", "1912-10-08", "Birinci Balkan Savaşı'na giriş", "ODA", "B", {"odak_yer": ["Priştine", "Üsküp", "Manastır"]}, "metinde alınan Kosova + Vardar Makedonyası (Üsküp, Manastır)")
o("sirbistan", "1913-08-10", "Bükreş Antlaşması", "ODA", "A", {"yer_id": "Bükreş"}, "imza Bükreş")
# ── BİZANS ────────────────────────────────────────────────────────────
MIS = [37.073, 22.368]   # Mistra kale-şehri
MD = ["Mora (Tripoliçe)", "Koron", "Modon"]
HEX = [37.934, 22.985]   # Korint berzahı — Hexamilion hattı, YAKLAŞIK (Kanal noktası)
o("bizans", "1290-01-01", "Anadolu sınırı çözüldü", "BEY", "B", {"odak_yer": ["İznik", "Manisa"]}, "'Batı Anadolu' sınır boyu (metin) — kamera")
o("bizans", "1302-07-27", "KOYUNHİSAR (Bapheus)", "ODA", "B", {"odak_yer": ["Yalova", "İzmit"]}, "Bapheus'un yeri tartışmalı (metin 'Yalova yakını'); nokta uydurulmadı, kamera")
o("bizans", "1321-01-01", "Birinci iç savaş", "BEY", "C", {"odak_kimlik": ["bizans"]}, "imparatorluk çapı (121 yerleşim)")
o("bizans", "1329-06-10", "Pelekanon bozgunu", "ODA", "A", {"yer_id": "Pelekanon"}, MT)
o("bizans", "1355-12-20", "Stefan Dušan öldü", "ODA", "C", NK, "Sırp imparatorluğunun çözülüşü")
o("bizans", "1371-09-26", "ÇİRMEN (Meriç)", "ODA", "A", {"yer_id": "Çirmen"}, MT)
o("bizans", "1389-06-15", "I. Kosova", "ODA", "A", {"yer_kon": KOS}, "Kosova Ovası (YAKLAŞIK) · " + OSM)
o("bizans", "1408-01-01", "Mora Despotluğu güçlendi", "ODA", "B", {"odak_yer": MD}, "mora-despotlugu 1 yerleşim (ölçüldü) → Mora güneyi, Mistra kutu içinde")
o("bizans", "1413-07-05", "Çelebi Mehmed birliği", "ODA", "C", {"odak_kimlik": ["bizans"]}, "konu Bizans'ın alanı (36 yerleşim); muharebe yeri metinde yok")
o("bizans", "1415-01-01", "Hexamilion yeniden", "ODA", "A", {"yer_kon": HEX}, "Korint berzahı (YAKLAŞIK) · " + OSM)
o("bizans", "1428-01-01", "Mora'da son Latin", "ODA", "B", {"odak_yer": MD}, "Mora; mora-despotlugu 1 yerleşim")
o("bizans", "1446-12-10", "Hexamilion duvarı yıkıldı", "ODA", "A", {"yer_kon": HEX}, "Korint berzahı (YAKLAŞIK) · " + OSM)
o("bizans", "1448-10-17", "II. Kosova", "ODA", "A", {"yer_kon": KOS}, "Kosova Ovası (YAKLAŞIK) · " + OSM)
o("bizans", "1449-01-06", "XI. Konstantinos", "ODA", "A", {"yer_kon": MIS}, "taç Mistra'da · Mistra havuzda yok · " + OSM)
o("bizans", "1460-05-31", "Mora Despotluğu ilhak", "ODA", "B", {"odak_yer": MD}, "Mora; mora-despotlugu o gün 0 yerleşim")
o("bizans", "1410-01-01", "Georgios Gemistos Plethon", "ODA", "A", {"yer_kon": MIS}, "Mistra · " + OSM)
o("bizans", "1428-05-01", "Mistra Mora'nın merkezi", "ODA", "A", {"yer_kon": MIS}, "Mistra · " + OSM)
# ── RODOS ŞÖVALYELERİ ─────────────────────────────────────────────────
o("rodos_sovalyeleri", "1291-05-18", "Akkâ'nın düşüşü", "ODA", "A", {"yer_id": "Akkâ"}, MT)
o("rodos_sovalyeleri", "1312-05-03", "Tapınak Şövalyeleri", "ODA", "A", {"yer_kon": [45.525, 4.875]}, "Vienne Konsili · Vienne havuzda yok · " + OSM)
o("rodos_sovalyeleri", "1365-10-09", "İskenderiye Haçlı", "ODA", "A", {"yer_id": "İskenderiye"}, MT)
o("rodos_sovalyeleri", "1396-09-25", "Niğbolu Savaşı", "ODA", "A", {"yer_id": "Niğbolu"}, MT)
o("rodos_sovalyeleri", "1489-03-13", "Cem Sultan'ın papalığa", "ODA", "A", {"yer_id": "Roma"}, "Papa'ya teslim Roma'da")
o("rodos_sovalyeleri", "1517-04-13", "Memlük Devleti'nin sona", "ODA", "B", {"odak_yer": ["Kahire"]}, "Memlük başkenti — kamera (metin yer vermiyor, yer_id DEĞİL)")
o("rodos_sovalyeleri", "1560-05-11", "Cerbe bozgunu", "ODA", "A", {"yer_id": "Cerbe"}, MT)
o("rodos_sovalyeleri", "1792-09-19", "Fransa'daki tarikat", "ODA", "B", {"odak_yer": ["Paris"]}, "Fransız meclisi kararı, el koyma ülke çapında → kamera")
o("rodos_sovalyeleri", "1786-01-01", "Tarikat gelirlerinin", "ODA", "E", {}, "bulunamadı: Avrupa'ya dağılmış commanderie ağı, tek yer yok; rodos-sovalyeleri 1786'da 1 yerleşim (Malta) → kimlik kutusu kurulamaz")
# ── ATİNA DUKALIĞI ────────────────────────────────────────────────────
o("atina_dukaligi", "1259-09-01", "Pelagonia Savaşı", "ODA", "B", {"odak_yer": ["Manastır"]}, "Pelagonia ovası (Manastır); meydanın kesin yeri tartışmalı → kamera")


def blok_bul(metin, t, bbas):
    """`{ t:"<t>", b:"<bbas>` — tek eşleşme şart. Dönüş: (bas, son) ya da (None, sebep).
    bbas `"` ile biterse b alanı BİREBİR eşlenir (aynı günlü kısa/uzun başlık ayrımı)."""
    desen = re.compile(r'\{\s*t:"%s",\s*b:"%s' % (re.escape(t), re.escape(bbas)))
    es = list(desen.finditer(metin))
    if len(es) != 1:
        return None, "eşleşme %d" % len(es)
    bas = es[0].start()
    sonraki = re.compile(r'\n\{\s*t:"').search(metin, es[0].end())
    son = sonraki.start() if sonraki else len(metin)
    return (bas, son), None


def alan_metni(alan):
    if "yer_id" in alan:
        return 'yer_id:%s' % json.dumps(alan["yer_id"], ensure_ascii=False)
    if "yer_kon" in alan:
        return 'yer_id:"", yer_kon:[%s,%s]' % tuple(alan["yer_kon"])
    if "odak_yer" in alan:
        return 'yer_id:"", odak_yer:%s' % json.dumps(alan["odak_yer"], ensure_ascii=False)
    if "odak_kimlik" in alan:
        return 'yer_id:"", odak_kimlik:%s' % json.dumps(alan["odak_kimlik"], ensure_ascii=False)
    return None


def kg_sil(blok):
    for d in (", kapsam_genis:true", "kapsam_genis:true, ", "kapsam_genis:true,", "kapsam_genis:true"):
        if d in blok:
            return blok.replace(d, "", 1)
    return blok


def sart_sinavi(liste):
    """node + suzgec.js (app.js ile aynı işlevler) — havuz girdi.yukle()den."""
    import girdi
    Y = []
    for y in girdi.yukle(sessiz=True):
        if y.get("ad"):
            Y.append({k: y.get(k) for k in ("ad", "lat", "lon", "d", "v", "s") if y.get(k) is not None})
    td = tempfile.mkdtemp(prefix="odak_balkan_")
    hv = os.path.join(td, "havuz.json"); on = os.path.join(td, "oneri.json")
    io.open(hv, "w", encoding="utf-8").write(json.dumps(Y, ensure_ascii=False))
    io.open(on, "w", encoding="utf-8").write(json.dumps(
        [{"dosya": x["dosya"], "t": x["t"], "b": x["b"], "sinif": x["sinif"], "yeni": x["alan"]} for x in liste],
        ensure_ascii=False))
    r = subprocess.run(["node", os.path.join(KOK, "denetim", "ODAK-BALKAN-0080-sina.js"), hv, "dosya", on],
                       capture_output=True, text=True, encoding="utf-8")
    if r.returncode != 0:
        print("🔴 şart sınavı koşamadı — HİÇBİR ŞEY YAZILMAZ:", r.stderr[:300]); sys.exit(2)
    return json.loads(r.stdout)


def ters_sinav():
    """§11 — süzgeç İKİ YÖNDE sınanır: bilerek bozuk dört öneri REDDEDİLMELİ."""
    bozuk = [
        {"dosya": "kronoloji_balkan.js", "t": "1852-06-01", "b": "Ömer Paşa", "sinif": "C", "yeni": {"odak_kimlik": ["karadag"]}},   # 1 yerleşim
        {"dosya": "kronoloji_balkan.js", "t": "1356-01-01", "b": "Balšić", "sinif": "B", "yeni": {"odak_yer": ["Grahovo"]}},       # havuzda yok
        {"dosya": "kronoloji_sirbistan.js", "t": "1331-01-01", "b": "Duşan", "sinif": "C", "yeni": {"odak_kimlik": ["sirbistan"]}},  # künye yok (D215)
        {"dosya": "kronoloji_bizans.js", "t": "1449-01-06", "b": "XI.", "sinif": "A", "yeni": {"yer_id": "Mistra"}},             # havuzda yok
    ]
    r = sart_sinavi([{"dosya": x["dosya"], "t": x["t"], "b": x["b"], "sinif": x["sinif"], "alan": x["yeni"]} for x in bozuk])
    red = [(z.get("yer_id") == "YOK") or (":YOK" in z.get("odak_yer", "")) or bool(z.get("kunye_yok"))
           or ("odak_kimlik" in z and int(z["odak_kimlik"].split()[0]) < 2) for z in r]
    for x, z, k in zip(bozuk, r, red):
        print("  %s  %s %s → %s" % ("✓ RED" if k else "🔴 GEÇTİ", x["t"], json.dumps(x["yeni"], ensure_ascii=False), json.dumps(z, ensure_ascii=False)))
    # eski-değer süzgeci: BEYANLI beklenen ama ODAKSIZ madde → dokunmamalı
    m = io.open(os.path.join(KOK, "data", "kronoloji_sirbistan.js"), encoding="utf-8").read()
    (b, s), _ = blok_bul(m, "1804-02-14", "Birinci Sırp")
    eski_red = ("kapsam_genis:true" in m[b:s]) != True
    print("  %s  eski-değer süzgeci (ODAKSIZ maddeye BEY beklentisi)" % ("✓ RED" if eski_red else "🔴 GEÇTİ"))
    return all(red) and eski_red


def main():
    if "--ters" in sys.argv:
        ok = ters_sinav(); print("TERS SINAV:", "GEÇTİ (hepsi reddedildi)" if ok else "🔴 KALDI"); return
    liste =[x for x in O if GRUP is None or x["sinif"] in GRUP]
    print("öneri: %d  (%s)%s" % (len(liste), " ".join("%s:%d" % (s, sum(1 for x in liste if x["sinif"] == s)) for s in "ABCDE"),
                                  "" if UYGULA else "  — KURU KOŞU"))
    sinav = sart_sinavi([x for x in liste if x["alan"]])
    si = iter(sinav)
    for x in liste:
        if not x["alan"]:
            x["sart"] = True; continue
        r = next(si); x["sinav"] = r; ok = True
        if r.get("yer_id") == "YOK": ok = False
        if "odak_yer" in r and ":YOK" in r["odak_yer"]: ok = False   # KATI: her ad çözülmeli
        if "odak_kimlik" in r and int(r["odak_kimlik"].split()[0]) < 2: ok = False
        if r.get("kunye_yok"): ok = False
        x["sart"] = ok

    say = dict(degisen=0, zaten=0, kayit_yok=0, eski_tutmuyor=0, sart_yok=0, E=0)
    metinler = {}
    for x in liste:
        f = os.path.join(KOK, "data", x["dosya"])
        if f not in metinler:
            metinler[f] = io.open(f, encoding="utf-8", newline="").read()
        m = metinler[f]
        etiket = "%s %s %s «%s»" % (x["sinif"], x["dosya"][10:-3], x["t"], x["b"][:34])
        if x["sinif"] == "E":
            say["E"] += 1
            print("  E  ⚪ %s — YAZILMADI · %s" % (etiket, x["gerekce"])); continue
        yer, hata = blok_bul(m, x["t"], x["b"])
        if hata:
            say["kayit_yok"] += 1; print("  🔴 KAYIT YOK  %s (%s)" % (etiket, hata)); continue
        bas, son = yer; blok = m[bas:son]
        yeni_alan = alan_metni(x["alan"])
        if yeni_alan in blok and "kapsam_genis:true" not in blok:
            say["zaten"] += 1; print("  =  zaten böyle  %s" % etiket); continue
        kg = "kapsam_genis:true" in blok
        eski_ok = (blok.count('yer_id:""') == 1
                   and not any(k in blok for k in ("yer_kon:", "odak_yer:", "odak_kimlik:", "odak_kutu_kaynak:"))
                   and kg == (x["olc"] == "BEY"))
        if not eski_ok:
            say["eski_tutmuyor"] += 1; print("  🔴 ESKİ TUTMUYOR  %s — dokunulmadı" % etiket); continue
        if not x["sart"]:
            say["sart_yok"] += 1; print("  🔴 ŞART SAĞLANMADI  %s  %s" % (etiket, json.dumps(x["sinav"], ensure_ascii=False))); continue
        yeni = kg_sil(blok).replace('yer_id:""', yeni_alan, 1)
        metinler[f] = m[:bas] + yeni + m[son:]
        say["degisen"] += 1
        sv = x.get("sinav", {})
        sn = " ".join("%s=%s" % (k, v) for k, v in sv.items() if k not in ("anahtar", "sinif"))
        print("  ✓  %s → %s%s  · %s  [%s]" % (etiket, yeni_alan, " (−kapsam_genis)" if kg else "", x["gerekce"], sn))

    # öngörü: yeni metni odak_olc.sinifla ile yeniden sınıfla
    import odak_olc as OL
    havuz = OL.yer_havuzu()
    print("\nÖNGÖRÜ (odak_olc.sinifla — bugünkü alet; tek-kimlik C maddeleri alette ODAKSIZ görünür):")
    td = tempfile.mkdtemp(prefix="odak_balkan_on_")
    for f, m in sorted(metinler.items()):
        p = os.path.join(td, os.path.basename(f)); io.open(p, "w", encoding="utf-8", newline="").write(m)
        d, h = OL._oku(p)
        c = {"KONUMLU": 0, "KUTULU": 0, "BEYANLI": 0, "ODAKSIZ": 0}; tek = 0
        for k in d["kayit"]:
            s, _ = OL.sinifla(k, havuz); c[s] += 1
            if s == "ODAKSIZ" and isinstance(k.get("odak_kimlik"), list) and len(k["odak_kimlik"]) == 1:
                tek += 1
        print("  %-34s %s  · bunun %d'i tek-kimlik C (app.js'te UÇAR)" % (os.path.basename(f), c, tek))

    print("\nSAYAÇ: değişen %(degisen)d · zaten böyle %(zaten)d · kayıt yok %(kayit_yok)d · "
          "eski tutmuyor %(eski_tutmuyor)d · şartı sağlamadı %(sart_yok)d · E (yazılmadı) %(E)d" % say)
    if UYGULA:
        for f, m in metinler.items():
            io.open(f, "w", encoding="utf-8", newline="").write(m)
        print("YAZILDI: %d dosya" % len(metinler))
    else:
        print("KURU KOŞU — yazmak için --uygula")


if __name__ == "__main__":
    main()
