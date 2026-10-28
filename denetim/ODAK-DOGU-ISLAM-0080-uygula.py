# -*- coding: utf-8 -*-
"""ODAK-DOGU-ISLAM-0080 — İran · Kafkas · Kuzey Karadeniz · Arabistan · Memlük kronoloji
maddelerinin HARİTA ODAĞI. 13 dosya, 202 madde (96 ODAKSIZ + 106 BEYANLI→yabancı).

    py denetim/ODAK-DOGU-ISLAM-0080-uygula.py                 KURU KOŞU (varsayılan) — hiçbir şey yazmaz
    py denetim/ODAK-DOGU-ISLAM-0080-uygula.py --uygula        data/ dosyalarına yazar
    py denetim/ODAK-DOGU-ISLAM-0080-uygula.py --grup A,B      yalnız bu sınıflar
    py denetim/ODAK-DOGU-ISLAM-0080-uygula.py --ayrinti       her öneriyi sınıf+gerekçe+kaynakla bas

Sınıflar (şartname oturumlar/ODAK-DOGU-ISLAM-0080.md):
  A  olayın tek ve belli yeri  → yer_id (havuzda) / yer_kon (havuzda yok, konum biliniyor)
     "A→odak_yer": yer biliniyor ama havuzda yok VE koordinatı kesin veremiyorum → yalnız
     kamera (odak_yer), veriye "olay burada" YAZILMAZ.
  B  birkaç belli yer / iki taraf → odak_yer (havuz adları) ya da odak_kimlik
  C  bir devletin tamamı          → odak_kimlik [o devlet] ya da o ülkenin çerçevesi (odak_yer)
  D  Osmanlı çapında              → kapsam_genis KALIR (bu pakette 0 madde)
  E  yer kaynaktan belirlenemedi  → HİÇBİR ŞEY YAZILMAZ. Tek istisna: E + BEYANLI maddede
     kapsam_genis:true kaldırılır (kamerayı Osmanlı'ya gönderen yalan beyan) — ayrı grup "E".

Her madde (dosya, t, b) ile BULUNUR; eski hâli doğrulanır (beklenen: ODAKSIZ ya da BEYANLI,
başka odak alanı yok). Şartlar: odak_yer adlarının HEPSİ havuzda · odak_kimlik o GÜN ≥2
yerleşim (app.js/suzgec.js sahipKimlikte taklidi) · yer_id havuzda · yer_kon geçerli.
Sağlamayan öneri UYGULANMAZ ve sayılır. Yazımdan sonra dosya node ile yeniden okunur ve
her değişen maddenin yeni alanları geri doğrulanır; tutmazsa dosya ESKİ HÂLİNE döner.
Salt alan ekler/kaldırır: t · b · d · kaynak · tarih alanlarına DOKUNMAZ.
"""
import io, json, os, re, subprocess, sys
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

UYGULA = "--uygula" in sys.argv
AYRINTI = "--ayrinti" in sys.argv
GRUP = None
if "--grup" in sys.argv:
    GRUP = set(sys.argv[sys.argv.index("--grup") + 1].upper().split(","))

KG = "kaldir_kg"   # kapsam_genis:true kaldırılır
TK = "TDV karakoyunlular"
TA = "TDV akkoyunlular"
TU = "TDV uzun-hasan"


def O(dosya, t, b, sinif, yeni=None, kaldir=False, gerekce="", kaynak=""):
    return {"dosya": dosya, "t": t, "b": b, "sinif": sinif, "yeni": yeni or {},
            "kaldir": kaldir, "gerekce": gerekce, "kaynak": kaynak}


KK, AK, ME, SA = "kronoloji_karakoyunlu.js", "kronoloji_akkoyunlu.js", "kronoloji_memluk.js", "kronoloji_safevi.js"
IR, IA, AR, KI = "kronoloji_iran.js", "kronoloji_iran_ardillari.js", "kronoloji_arabistan.js", "kronoloji_kirim.js"
AO, SO, GU, RU, SK = ("kronoloji_altinorda.js", "kronoloji_sinir_ortadogu.js", "kronoloji_gurcistan.js",
                      "kronoloji_rusya.js", "kronoloji_sinir_komsu.js")

MISIR = ["İskenderiye", "Asvan"]                 # Mısır çerçevesi (Nil deltası → Yukarı Mısır)
KIBRIS = ["Lefkoşa", "Magosa", "Limasol"]
YEMEN = ["Sana", "Zebîd", "Aden"]
GURCISTAN = ["Tiflis", "Kutaisi", "Zagem"]       # Kartli · İmereti · Kaheti
KIRIM_YM = ["Bahçesaray", "Kefe", "Akmescid"]    # Kırım yarımadası
RUS_CEKIRDEK = ["St. Petersburg", "Moskova", "Kazan"]  # rusya kimlik kutusu 1839+ Alaska'ya dek uzanıyor (ölçüldü)

ONERILER = [
    # ── KARAKOYUNLU (25) ────────────────────────────────────────────────────────
    O(KK, "1374-01-01", "Sultan Üveys'in ölümü — Celâyirli baskısı gevşedi", "B",
      {"odak_kimlik": ["karakoyunlu", "celayirli"]},
      gerekce="Ölüm yeri metinde/TDV'de yok; olayın konusu iki devlet arası güç dengesi (Doğu Anadolu)", kaynak=TK + ": Üveys ölümü → Bayram Hoca Doğu Anadolu'da hâkimiyeti tekrar sağladı"),
    O(KK, "1382-01-01", "Kara Mehmed, Celâyirli Şehzade Ali'yi beş bin kişiyle yendi", "B",
      {"odak_kimlik": ["karakoyunlu", "celayirli"]},
      gerekce="Savaş yeri kaynakta yok; iki taraf", kaynak=TK + " (784/1382, yer vermiyor)"),
    O(KK, "1389-04-01", "Kara Mehmed öldü", "E",
      gerekce="Pîr Hasan'la giriştiği savaşta öldü — savaş yeri kaynakta YOK", kaynak=TK + ": 'isyanı üzerine giriştiği savaşta öldü' (bulunamadı: yer)"),
    O(KK, "1390-01-01", "Döğer Sâlim Bey'in arabuluculuğu ve Pîr Hasan'ın ölümü", "C",
      {"odak_kimlik": ["karakoyunlu"]},
      gerekce="Beyliğin başına Kara Yûsuf'un geçmesi (veraset) — beylik çapında; yer yok", kaynak=TK),
    O(KK, "1394-07-31", "Timur Avnik Kalesi'ni 43 günlük kuşatmadan sonra aldı", "A→odak_yer",
      {"odak_yer": ["Erzurum"]},
      gerekce="Avnik havuzda yok, kale koordinatını kesin veremiyorum → yalnız kamera", kaynak=TK + ": 'Erzurum ovasına hâkim bir noktada bulunan Avnik Kalesi'"),
    O(KK, "1395-01-01", "Kara Yûsuf, Avnik kumandanı Atlamış'ı esir aldı", "A→odak_yer",
      {"odak_yer": ["Erzurum"]},
      gerekce="Avnik (bkz. 1394)", kaynak=TK + ": 'Avnik Kalesi'ne saldırarak kale kumandanı Atlamış'ı esir aldı (797/1395)'"),
    O(KK, "1400-01-01", "Kara Yûsuf Osmanlı topraklarına sığındı", "B",
      {"odak_yer": ["Bursa"]},
      gerekce="Sığındığı Osmanlı ülkesi; TDV Bursa'dan ayrıldığını yazıyor → kamera Bursa (yer_id değil: sığınma günü Bursa'da olduğu yazmıyor)", kaynak=TK + ": 'Osmanlı ülkesinde sekiz dokuz ay … ikamet eden … Bursa'dan Hille'ye geldi'"),
    O(KK, "1402-07-28", "ANKARA SAVAŞI — Kara Yûsuf'un sığındığı Osmanlı devleti çöktü", "A",
      {"yer_id": "Ankara"}, gerekce="Savaş Ankara'da", kaynak="madde metni ('Ankara'da yenmesi')"),
    O(KK, "1405-02-18", "Timur'un ölümü — Karakoyunlu'nun önündeki engel kalktı", "A",
      {"yer_kon": [42.85, 68.30]},
      gerekce="Otrar havuzda yok; koordinat Otrar harabesinin bilinen konumu, YAKLAŞIK (±5 km)", kaynak="TDV timur: 'Otrar'a vardı, fakat burada hastalanarak 17 Şâban 807'de (18 Şubat 1405) öldü'"),
    O(KK, "1405-07-01", "Kara Yûsuf dönüş yoluna çıktı", "B",
      {"odak_yer": ["Şam"]},
      gerekce="Yola çıkış noktası: onu serbest bırakan Şam nâibinin şehri — kamera; yer_id değil (kaynak yola çıktığı şehri adıyla söylemiyor)", kaynak=TK + ": 'Şam nâibi … onları serbest bıraktı (Ocak 1405) … 808 Muharreminde (Temmuz 1405) yola çıktı'"),
    O(KK, "1406-10-15", "Aras kıyısında Ebû Bekir Mirza'ya karşı zafer", "E",
      gerekce="Kaynak yalnız 'Aras nehri kenarında' diyor; Aras yüzlerce km — nokta yok. (Akademik literatür Nahçıvan yakını der; bu oturumda kaynağı açılmadı, YAZILMADI)", kaynak=TK + ": 'Aras nehri kenarında cereyan eden savaşta' (bulunamadı: kesin yer)"),
    O(KK, "1412-01-01", "Kür boyunda Gürcü-Şirvan-Şeki ittifakı yenildi", "B",
      {"odak_yer": ["Gence", "Şeki"]},
      gerekce="'Kür boyları' + müttefik Şeki — orta Kür havzası çerçevesi (kamera)", kaynak=TK + ": 'Kür boylarında yapılan savaşta müttefikler ağır bir yenilgiye uğradı (815/1412)'"),
    O(KK, "1418-09-20", "Mercidâbık'ta Karayülük'e karşı ikinci zafer", "A",
      {"yer_kon": [36.54, 37.27]},
      gerekce="Mercidâbık havuzda yok; Dâbık köyünün bilinen konumu, YAKLAŞIK (ova ±10 km)", kaynak=TK + ": 'Mercidâbık'ta bir defa daha mağlûbiyete uğrattı (18 Şâban 821 / 20 Eylül 1418)'"),
    O(KK, "1418-10-01", "Pîr Budak'ın ölüm haberi", "A→odak_yer",
      {"odak_yer": ["Mardin"]},
      gerekce="Haberi aldığı yer: 'Mardin'e yaklaştığında' — yaklaşık, yalnız kamera", kaynak=TK + ": 'Kara Yûsuf Mardin'e yaklaştığında oğlu Pîr Budak'ın ölüm haberini aldı (Ramazan 821 / Ekim 1418)'"),
    O(KK, "1420-11-13", "Kara Yûsuf Ucan'da öldü", "A→odak_yer",
      {"odak_yer": ["Tebriz"]},
      gerekce="Ucan havuzda yok, koordinatını kesin veremiyorum; kaynak konumu Tebriz'e göre tarif ediyor → kamera Tebriz", kaynak=TK + ": 'Tebriz'in güneydoğusunda Ucan'a yakın bir yerde vefat etti (7 Zilkade 823 / 13 Kasım 1420)'"),
    O(KK, "1421-04-01", "İskender, Karayülük'ü Şeyhkendi'de yendi", "A→odak_yer",
      {"odak_yer": ["Nusaybin"]},
      gerekce="Şeyhkendi havuzda yok; kaynak 'Nusaybin yakınları' diyor", kaynak=TK + ": 'Nusaybin yakınlarındaki Şeyhkendi'nde yapılan savaşta (Rebîülâhir 824 / Nisan 1421)'"),
    O(KK, "1421-07-30", "Eleşkirt'te Şâhruh'a yenilgi", "A",
      {"yer_kon": [39.80, 42.67]},
      gerekce="Eleşkirt havuzda yok; Eleşkirt ilçe merkezinin bilinen konumu, YAKLAŞIK (savaş ovada)", kaynak=TK + ": 'Erzurum ile Ağrı arasındaki Eleşkirt ovasında … (30 Temmuz - 1 Ağustos 1421)'"),
    O(KK, "1434-11-01", "Şâhruh'un üçüncü seferi — Cihan Şah desteklendi", "B",
      {"odak_kimlik": ["karakoyunlu"]},
      gerekce="Seferin hedefi Azerbaycan = Karakoyunlu ülkesi; tek meydan yok", kaynak=TK),
    O(KK, "1436-05-01", "Şâhruh, Cihan Şah'ı Azerbaycan valiliğine tayin etti", "A→odak_yer",
      {"odak_yer": ["Tebriz"]},
      gerekce="Tayin Ucan'da; Ucan havuzda yok (bkz. 1420)", kaynak=TK + ": 'Ucan'a gelen Şâhruh burada Azerbaycan hükümdarlığını Cihan Şah'a verdi'"),
    O(KK, "1438-05-01", "İskender, oğlu Şah Kubâd tarafından Alıncak Kalesi'nde öldürüldü", "A→odak_yer",
      {"odak_yer": ["Culfa", "Nahçıvan"]},
      gerekce="Alıncak Kalesi havuzda yok; kale Nahçıvan–Culfa arasında (genel coğrafya) → kamera o ikisinin kutusu", kaynak=TK + ": 'Alıncak Kalesi'ne sığındı … oğlu Şah Kubâd tarafından öldürüldü (Zilkade 841 / Mayıs 1438)'"),
    O(KK, "1467-11-10", "BİNGÖL BASKINI — Cihan Şah öldürüldü", "A",
      {"yer_kon": [39.10, 40.42]},
      gerekce="Sancak mevkii havuzda yok; kaynak 'Bingöl ile Kiğı arası' diyor → iki ilçe merkezinin ortası, YAKLAŞIK (±25 km)", kaynak=TK + ": 'Bingöl ile Kiğı arasındaki Sancak mevkiinde … (12 Rebîülâhir 872 / 10 Kasım 1467)'"),
    O(KK, "1468-07-01", "Hasan Ali'nin yenilgisi", "A→odak_yer",
      {"odak_yer": ["Merend"]},
      gerekce="Savaş Merend'de (TDV uzun-hasan). ⚠️ İki TDV maddesi AYI farklı veriyor: karakoyunlular 'Zilhicce 872 / Temmuz 1468', uzun-hasan 'Safer 873 / Eylül 1468' — tarih alanına DOKUNULMADI, koordinatöre bildirildi", kaynak=TU + ": 'Savaşmak için Merend'e gelen Hasan Ali'nin ordusunu bozguna uğrattı'"),
    O(KK, "1469-06-01", "Yûsuf Mirza öldürüldü, son direniş kırıldı", "B",
      {"odak_yer": ["Şiraz"]},
      gerekce="Fars'ta hükümdar ilân edilmişti → Fars çerçevesi (Şiraz); ölüm yeri kaynakta yok", kaynak=TK + ": 'Yûsuf Mirza'yı Fars'ta hükümdar ilân ettilerse de … Uğurlu Mehmed onu da yenerek öldürttü (1469)'"),
    O(KK, "1438-04-19", "Dört halife adına para basımı — Sünnî çizginin sürdüğünün delili", "C",
      {"odak_kimlik": ["karakoyunlu"]}, kaldir=True, gerekce="Devlet çapında sikke siyaseti", kaynak=TK),
    O(KK, "1446-01-01", "Malî teşkilât: muhassıl ve tahvildarlar eliyle şer'î ve örfî vergi düzeni", "C",
      {"odak_kimlik": ["karakoyunlu"]}, kaldir=True, gerekce="Devlet çapında maliye", kaynak=TK),

    # ── AKKOYUNLU (22) ──────────────────────────────────────────────────────────
    O(AK, "1402-07-28", "ANKARA SAVAŞI — Karayülük Timur'un safında", "A",
      {"yer_id": "Ankara"}, gerekce="Savaş Ankara'da", kaynak=TA),
    O(AK, "1412-01-01", "Ergani yakınında Kara Yûsuf'a yenilgi", "A",
      {"yer_kon": [38.27, 39.76]},
      gerekce="Ergani havuzda yok; ilçe merkezinin bilinen konumu, YAKLAŞIK ('yakınlarında')", kaynak=TA + ": 'Ergani yakınlarında yenilgiye uğramasına rağmen (1412)'"),
    O(AK, "1421-04-01", "Şeyhkendi'de İskender'e yenilgi", "A→odak_yer",
      {"odak_yer": ["Nusaybin"]}, gerekce="Şeyhkendi havuzda yok (bkz. Karakoyunlu 1421-04)", kaynak=TK + ": 'Nusaybin yakınlarındaki Şeyhkendi'"),
    O(AK, "1429-01-01", "Memlükler, Karayülük'ün oğlu Hâbil'i esir aldı", "B",
      {"odak_yer": ["Urfa"]}, gerekce="Esir düştüğü akın Urfa ve civarında", kaynak=TA + ": 'Memlük kuvvetleri Urfa ve civarını yağmaladılar, hatta oğullarından Hâbil de onlara esir düştü (1429)'"),
    O(AK, "1431-01-01", "Memlükler'e tâbi kalma şartıyla barış yapıldı", "C",
      {"odak_kimlik": ["akkoyunlu"]}, kaldir=True,
      gerekce="Akkoyunlu'nun tamamının statüsü (o gün 6 yerleşim); yabancı dosyada Osmanlı kutusu yanlıştı", kaynak=TA + " (1431)"),
    O(AK, "1462-01-01", "Hasankeyf alındı, Eyyûbî kalıntısı sona erdi; Bayburt katıldı", "B",
      {"odak_yer": ["Hasankeyf", "Bayburt"]}, gerekce="İki belli yer", kaynak=TU + ": 'Hısnıkeyfâ (Hasankeyf) … Bayburt'u da ülkesine kattı'"),
    O(AK, "1467-11-10", "BİNGÖL BASKINI — Cihan Şah öldürüldü, Karakoyunlu çöktü", "A",
      {"yer_kon": [39.10, 40.42]}, gerekce="Bkz. Karakoyunlu 1467-11-10 — aynı nokta, YAKLAŞIK", kaynak=TK + ": 'Bingöl ile Kiğı arasındaki Sancak mevkii'"),
    O(AK, "1469-01-29", "Timurlu Ebû Said Mirza Han yenildi ve idam edildi", "B",
      {"odak_yer": ["Tebriz", "Erdebil"]},
      gerekce="Kaynak savaş yerini vermiyor, yalnız 'Azerbaycan'a gelmişti' → Azerbaycan çerçevesi (kamera)", kaynak=TU + ": 'Ebû Said Mirza Han da kalabalık bir orduyla Azerbaycan'a gelmişti … bozguna uğrattılar (29 Ocak 1469)' (bulunamadı: meydan)"),
    O(AK, "1472-01-01", "Venedik'e elçi gönderildi — ateşli silâh talebi", "B",
      {"odak_yer": ["Venedik"]}, kaldir=True, gerekce="Elçiliğin varış yeri", kaynak=TU + ": '1472'de Hacı Muhammed'i elçi olarak Venedikliler'e yollamıştı'"),
    O(AK, "1472-08-01", "Yûsufça Mirza Eflâtunpınarı'nda yenildi", "A→odak_yer",
      {"odak_yer": ["Beyşehir"]}, gerekce="Eflâtunpınarı havuzda yok; Beyşehir gölünün doğusunda (genel coğrafya) → kamera", kaynak="TDV otlukbeli-savasi: 'Eflâtunpınarı denilen yerde mağlûp etti (Ağustos 1472)'"),
    O(AK, "1473-02-01", "Venedik on altı top ve bin tüfek gönderdi — hiçbiri ulaşmadı", "B",
      {"odak_yer": ["Venedik"]}, kaldir=True, gerekce="Sevkiyatın çıkış yeri", kaynak=TU + ": '1473 Şubatında gemilerle ateşli silâhlar gönderdiler'"),
    O(AK, "1473-08-11", "OTLUKBELİ SAVAŞI — Osmanlı topçusu karşısında ağır yenilgi", "A→odak_yer",
      {"odak_yer": ["Erzincan", "Erzurum"]},
      gerekce="Tercan/Otlukbeli havuzda yok; Tercan Erzincan–Erzurum arasında → iki şehrin kutusu (kamera). Nokta gerekiyor (bkz. rapor)", kaynak="TDV otlukbeli-savasi: 'Tercan yakınlarında Otlukbeli (Başkent) mevkiinde'"),
    O(AK, "1475-07-01", "Uzun Hasan'ın kardeşi Üveys isyanda idam edildi", "B",
      {"odak_yer": ["Urfa"]}, gerekce="Üveys Urfa valisiydi; öldürüldüğü yer kaynakta yok → kamera Urfa", kaynak=TU + ": 'Urfa Valisi Üveys Bey … isyanı bastırıldı ve Üveys öldürüldü (Temmuz 1475)'"),
    O(AK, "1493-01-01", "Baysungur mağlûp edilip öldürüldü", "E",
      gerekce="Yer kaynakta YOK", kaynak=TA + ": 'baş kaldıran Baysungur mağlûp edilerek öldürüldü (1493)' (bulunamadı: yer)"),
    O(AK, "1499-01-01", "Aziz Kendi savaşı — Muhammedî Mirza kazandı, İbe Sultan öldü", "E",
      gerekce="Aziz Kendi havuzda yok ve konumu kaynakta verilmiyor; tahmin YAZILMADI", kaynak=TA + " (bulunamadı: Aziz Kendi'nin yeri)"),
    O(AK, "1500-01-01", "DEVLET RESMEN İKİYE BÖLÜNDÜ — Elvend ve Murad", "C",
      {"odak_kimlik": ["akkoyunlu"]}, kaldir=True, gerekce="Devletin tamamının bölünmesi", kaynak=TA),
    O(AK, "1505-01-01", "Elvend öldü", "A",
      {"yer_id": "Diyarbakır"}, gerekce="Âmid = Diyarbakır; kaynak ölümüne kadar orada yaşadığını yazıyor", kaynak=TA + ": 'Âmid'e çekildi ve 1505'te ölümüne kadar burada yaşadı'"),
    O(AK, "1514-01-01", "MURAD ÖLDÜRÜLDÜ — Akkoyunlu Devleti tarih sahnesinden silindi", "B",
      {"odak_yer": ["Diyarbakır", "Mardin", "Urfa"]},
      gerekce="Kaynak yalnız bölge veriyor: Güneydoğu Anadolu seferi sırasında bir savaşta → bölge çerçevesi", kaynak=TA + ": 'Güneydoğu Anadolu'nun fethine memur edilen Murad … bir savaşta mağlûp düşerek öldürüldü (1514)'"),
    O(AK, "1452-09-01", "HASAN PADİŞAH KANUNLARI — Akkoyunlu vergi kanunnâmesi", "C",
      {"odak_kimlik": ["akkoyunlu"]}, kaldir=True, gerekce="Devlet çapında kanunnâme", kaynak=TU),
    O(AK, "1452-09-01", "'Hasanbegî' sikkesi bastırıldı", "C",
      {"odak_kimlik": ["akkoyunlu"]}, kaldir=True, gerekce="Devlet çapında sikke", kaynak=TU),
    O(AK, "1452-09-01", "Bayındır damgası devlet arması yapıldı — Oğuz soy iddiası", "C",
      {"odak_kimlik": ["akkoyunlu"]}, kaldir=True, gerekce="Devlet arması", kaynak=TU),
    O(AK, "1452-09-01", "Cami, medrese, zâviye ve kervansaray imar programı", "C",
      {"odak_kimlik": ["akkoyunlu"]}, kaldir=True, gerekce="Ülke çapında imar", kaynak=TA + " · " + TU),

    # ── MEMLÜK (19, hepsi BEYANLI) ──────────────────────────────────────────────
    O(ME, "1271-01-01", "Baybars'ın başarısız Kıbrıs deniz seferi", "B",
      {"odak_yer": KIBRIS}, kaldir=True, gerekce="Seferin hedefi Kıbrıs (kibris-krallik kimliği 1271'de 0 yerleşim — ölçüldü, kullanılmadı)", kaynak="TDV kibris"),
    O(ME, "1298-01-01", "Sultan Lâçin toprakları yeniden ölçtürdü — er-Ravkü'l-Hüsâmî", "C",
      {"odak_yer": MISIR}, kaldir=True, gerekce="Tahrir MISIR arazisi (Suriye değil) → Mısır çerçevesi; memluk kimliği Suriye'yi de kapsardı", kaynak="madde metni ('Mısır'ın iktâ gelirleri') · TDV ikta"),
    O(ME, "1301-01-01", "Gayrimüslimlere karşı ayrımcı kararname çıkarıldı", "B",
      {"odak_yer": ["Kahire", "Bilbîs"]}, kaldir=True, gerekce="Metinde adı geçen iki yer", kaynak="madde metni (akademik)"),
    O(ME, "1315-01-01", "Nâsır Muhammed büyük toprak tahririni tamamlattı — er-Ravkü'n-Nâsırî", "C",
      {"odak_yer": MISIR}, kaldir=True, gerekce="Mısır'ın bütün tarım arazileri → Mısır çerçevesi", kaynak="madde metni · TDV ikta"),
    O(ME, "1318-01-01", "Yasavur istilası sırasında Memlük akını", "B",
      {"odak_yer": ["Malatya", "Erzurum", "Van", "Diyarbakır"]}, kaldir=True,
      gerekce="Kaynak yalnız bölge veriyor ('Doğu Anadolu bölgesindeki bazı yerler') → bölge çerçevesi", kaynak="TDV ebu-said-bahadir-han (bulunamadı: yerleşim adları)"),
    O(ME, "1370-01-01", "Memlük-Kıbrıs barış antlaşması", "B",
      {"odak_kimlik": ["memluk", "kibris-krallik"]}, kaldir=True, gerekce="İki taraf (1370'te 136 yerleşim)", kaynak="TDV kibris"),
    O(ME, "1372-01-01", "Habeş kralı Memlük kervanlarına sınırı kapattı", "B",
      {"odak_kimlik": ["habesistan"]}, kaldir=True, gerekce="Karar Habeş ülkesinde ve Habeş sınırında", kaynak="TDV etiyopya"),
    O(ME, "1386-01-01", "Ceneviz ile barış antlaşması", "B",
      {"odak_yer": ["İskenderiye", "Şam"]}, kaldir=True, gerekce="Antlaşmanın güvenceye aldığı iki ticaret yeri (metin)", kaynak="madde metni (ikincil)"),
    O(ME, "1409-05-01", "Şeyh el-Mahmûdî'nin Sarhad'da mağlûp edilmesi", "A",
      {"yer_kon": [32.49, 36.71]}, kaldir=True,
      gerekce="Sarhad (Salhad, Havran) havuzda yok; kasabanın bilinen konumu, YAKLAŞIK", kaynak="TDV ferec"),
    O(ME, "1416-01-01", "Memlük-Osmanlı dostluk ve ticaret antlaşması", "B",
      {"odak_kimlik": ["memluk", "osmanli"]}, kaldir=True, gerekce="İki taraf", kaynak="TDV seyh-el-mahmudi"),
    O(ME, "1420-01-01", "Şeyh el-Mahmûdî Karamanoğulları'nı itaate zorladı", "B",
      {"odak_kimlik": ["karaman"]}, kaldir=True, gerekce="Politikanın hedefi Karaman ülkesi (1420'de 10 yerleşim)", kaynak="TDV memlukler"),
    O(ME, "1424-01-01", "Barsbay'ın birinci Kıbrıs seferi", "B",
      {"odak_yer": KIBRIS}, kaldir=True, gerekce="Seferin hedefi Kıbrıs", kaynak="TDV barsbay"),
    O(ME, "1425-01-01", "Barsbay'ın ikinci Kıbrıs seferi", "B",
      {"odak_yer": KIBRIS}, kaldir=True, gerekce="Seferin hedefi Kıbrıs", kaynak="TDV barsbay"),
    O(ME, "1425-06-01", "Kârimîlere ağır vergi ve korsanlık baskısı", "C",
      {"odak_kimlik": ["memluk"]}, kaldir=True, gerekce="Devlet maliye siyaseti", kaynak="TDV karimi · barsbay"),
    O(ME, "1430-01-01", "Kârimî tüccarların çöküşü", "C",
      {"odak_kimlik": ["memluk"]}, kaldir=True, gerekce="Devlet tekeli sonucu", kaynak="TDV karimi"),
    O(ME, "1438-01-01", "Zara Yakob'dan Barsbay'a dostane mektup", "B",
      {"odak_kimlik": ["habesistan", "memluk"]}, kaldir=True, gerekce="İki taraf arası yazışma", kaynak="Taddesse Tamrat 1972"),
    O(ME, "1441-01-01", "Zara Yakob'dan Çakmak'a Nil tehdidi içeren protesto", "B",
      {"odak_kimlik": ["habesistan", "memluk"]}, kaldir=True, gerekce="İki taraf arası yazışma", kaynak="Taddesse Tamrat 1972 · Krebs"),
    O(ME, "1484-01-01", "Osmanlı-Dulkadir birleşik kuvvetlerinin Memlük ordusunu yenmesi", "B",
      {"odak_kimlik": ["dulkadir"]}, kaldir=True,
      gerekce="Meydan kaynakta yok; çatışmanın sahası Dulkadir ülkesi (memluk kutusu Libya'dan Yemen'e uzanır, kullanılmadı)", kaynak="TDV dulkadirogullari ('gün/yer vermiyor')"),
    O(ME, "1491-01-01", "On beş yıllık Osmanlı-Memlük barış antlaşması", "B",
      {"odak_yer": ["Adana", "Maraş"]}, kaldir=True, gerekce="Metin çekişme sahasını adlandırıyor: Dulkadir beyliği ve Çukurova", kaynak="TDV kayitbay"),

    # ── SAFEVÎ (18) ─────────────────────────────────────────────────────────────
    O(SA, "1500-12-01", "Şirvanşah Ferruh Yesar'ın yenilgisi — ilk büyük Kızılbaş zaferi", "A→odak_yer",
      {"odak_yer": ["Şamahı"]}, gerekce="Gülistan Kalesi havuzda yok; Şirvan merkezi Şamahı'nın yanında", kaynak="EIr ESMĀʿĪL I · TDV sirvan"),
    O(SA, "1508-10-01", "Cebel Âmil'den Şiî ulemanın İran'a davet edilmesi başladı", "B",
      {"odak_yer": ["Sayda"]}, kaldir=True,
      gerekce="Cebel Âmil (Sayda'nın güneydoğusu) — ⚠️ havuzdaki 'Sûr' UMMAN'daki Sur'dur, Lübnan Sur'u değil; kullanılmadı", kaynak="EIr JABAL ʿĀMEL"),
    O(SA, "1512-11-01", "Gucduvan Muharebesi — Necm-i Sâni'nin ölümü, Mâverâünnehir'in kaybı", "A",
      {"yer_kon": [40.10, 64.68]}, gerekce="Gucduvan havuzda yok; kasabanın bilinen konumu, YAKLAŞIK", kaynak="EIr NAJM-E ṮĀNI"),
    O(SA, "1612-11-20", "Nasuh Paşa Antlaşması — 1555 sınırının teyidi", "B",
      {"odak_yer": ["Kars", "Van", "Bağdat"]},
      gerekce="İmza yeri metinde yok; konu 1555 sınırı → sınır hattı boyunca çerçeve", kaynak="Cambridge History of Iran c.6"),
    O(SA, "1613-08-01", "Birinci Kahetî (Gürcistan) seferi", "B",
      {"odak_yer": ["Zagem", "Tiflis"]}, gerekce="Kaheti + Kartli (metin)", kaynak="EIr GEORGIA xi"),
    O(SA, "1616-01-01", "İkinci Kahetî seferi — büyük kıyım ve tehcir", "B",
      {"odak_yer": ["Zagem"]}, gerekce="Kaheti (kaheti-kralligi künyesi 1606'da bitiyor, kimlik kullanılmadı)", kaynak="EIr GEORGIA xi"),
    O(SA, "1618-09-10", "Serav Antlaşması — savaşın 1555 sınırına dönerek bitmesi", "A→odak_yer",
      {"odak_yer": ["Selmâs"]}, gerekce="Serav havuzda yok; metin 'Selmas yakını' diyor", kaynak="Cambridge History of Iran c.6"),
    O(SA, "1598-06-01", "Tüfekçi (Tofangchi) ve Kurçi ocaklarının kurumsallaşması", "C",
      {"odak_kimlik": ["safevi"]}, kaldir=True, gerekce="Devlet ordusu", kaynak="EIr ARMY iv"),
    O(SA, "1600-01-01", "Vilayetlerin \"has\" (hâlisa) topraklara dönüştürülmesi", "C",
      {"odak_kimlik": ["safevi"]}, kaldir=True, gerekce="Birden çok eyalet, devlet çapında", kaynak="EIr ʿABBĀS I"),
    O(SA, "1611-01-01", "Sikke reformu — abbasî gümüş parasının standardizasyonu", "C",
      {"odak_kimlik": ["safevi"]}, kaldir=True, gerekce="Devlet parası", kaynak="EIr COINAGE iv"),
    O(SA, "1623-01-01", "Bender Abbas limanının kurulması", "A",
      {"yer_id": "Bender Abbas"}, gerekce="Olay limanın kendisi", kaynak="EIr BANDAR ʿABBAS"),
    O(SA, "1598-01-01", "Kervan yolu ve kervansaray ağının genişletilmesi", "C",
      {"odak_kimlik": ["safevi"]}, kaldir=True, gerekce="Ülke çapında altyapı", kaynak="EIr CARAVANSARY"),
    O(SA, "1600-01-01", "Safevî halı sanatının Avrupa'ya ihracı — \"Polonaise\" halıları", "B",
      {"odak_yer": ["Isfahan", "Kâşân"]}, kaldir=True, gerekce="Metinde adı geçen atölye şehirleri (havuz adı 'Isfahan')", kaynak="EIr CARPETS xi"),
    O(SA, "1600-01-01", "Meraga geleneğinin İsfahan'da devamı — özel rasathane çalışmaları", "B",
      {"odak_yer": ["Isfahan"]}, kaldir=True, gerekce="Başlıktaki yer; kamera (yer_id değil — belli bir olay değil)", kaynak="madde metni ('ölçmedim' notu duruyor)"),
    O(SA, "1651-01-01", "Rus (Kazak) baskınlarının Hazar kıyısına ulaşması", "B",
      {"odak_yer": ["Sârî", "Reşt"]}, gerekce="Mâzenderân + Gîlân (metin) → iki eyalet merkezi", kaynak="EIr RUSSIA i"),
    O(SA, "1714-01-01", "Sünni Afgan ve Belûclara yönelik zorla ihtida baskısı", "B",
      {"odak_yer": ["Kandehar", "Herat"]}, kaldir=True, gerekce="Gilzai (Kandehar) ve Abdâlî (Herat) boyları", kaynak="EIr AFGHANISTAN v"),
    O(SA, "1729-02-01", "Tahmasb II'nin Nadir'in gölgesinde nominal şahlığı", "C",
      {"odak_kimlik": ["safevi"]}, gerekce="Hanedanın (devletin) statüsü; tek yer yok", kaynak="EIr ṬAHMĀSP II"),
    O(SA, "1732-08-01", "Nadir'in Tahmasb II'yi tahttan indirip bebek III. Abbas'ı şah ilan etmesi", "C",
      {"odak_kimlik": ["safevi"]}, gerekce="Taht değişimi — devlet çapında; yeri metinde yok", kaynak="EIr ʿABBĀS III"),

    # ── İRAN (17, hepsi BEYANLI) ────────────────────────────────────────────────
    O(IR, "1381-01-01", "Timur'un İran seferleri başladı", "B",
      {"odak_yer": ["Herat", "Şiraz", "Tebriz", "Isfahan"]}, kaldir=True,
      gerekce="Yıkılan hanedanların merkezleri (Kert=Herat, Muzafferî=Şiraz, Celâyirli=Tebriz) + metinde adı geçen İsfahan → İran çerçevesi. timurlu kimliği 1381'de yalnız Horasan (ölçüldü)", kaynak="TDV timur"),
    O(IR, "1578-01-01", "Osmanlı-Safevî Savaşı başladı (1590'a dek)", "B",
      {"odak_yer": ["Tiflis", "Şamahı", "Tebriz"]}, kaldir=True, gerekce="'Kafkasya ve Azerbaycan'a sefer' (metin)", kaynak="TDV luristan (Ferhad Paşa)"),
    O(IR, "1598-01-01", "Gulâm ordu reformu — Kızılbaş gücünün dengelenmesi", "C",
      {"odak_kimlik": ["safevi"]}, kaldir=True, gerekce="Devlet ordusu", kaynak="EIr ḠOLĀM"),
    O(IR, "1723-06-24", "Osmanlı, İran'ın batı topraklarını işgale başladı", "B",
      {"odak_yer": ["Hemedan", "Kirmanşah", "Tebriz"]}, kaldir=True, gerekce="Metinde adı geçen üç şehir", kaynak="EIr OTTOMAN-PERSIAN RELATIONS"),
    O(IR, "1750-01-01", "Kerim Han Zend'in yükselişi başladı", "C",
      {"odak_kimlik": ["zend"]}, kaldir=True,
      gerekce="'İran'ın büyük kısmında hâkimiyet' → Zend ülkesi (o gün 131 yerleşim). ⚠️ zend künyesi f:1751-01-01 — veride 1750'de zend yerleşimi var (hayalet devlet sınıfı, bildirildi)", kaynak="EIr KARIM KHAN ZAND"),
    O(IR, "1826-07-19", "İkinci Rus-İran Savaşı başladı (1828'e dek)", "B",
      {"odak_yer": ["Tebriz", "Revan"]}, kaldir=True, gerekce="Metinde işgal edilen Tebriz; Revan bu savaşta Rusya'ya geçti (sinir_komsu Türkmençay maddesi, TDV revan)", kaynak="EIr RUSSIA vii · TDV revan"),
    O(IR, "1891-12-01", "Tütün İsyanı — büyük fetva ve kitlesel boykot", "C",
      {"odak_kimlik": ["kacar"]}, kaldir=True, gerekce="'Bütün ülkede kitlesel boykot'", kaynak="EIr TOBACCO PROTEST"),
    O(IR, "1907-08-31", "1907 İngiliz-Rus Antlaşması — İran nüfuz bölgelerine bölündü", "C",
      {"odak_kimlik": ["kacar"]}, kaldir=True, gerekce="İran'ın tamamı bölgelere ayrıldı", kaynak="EIr ANGLO-RUSSIAN CONVENTION"),
    O(IR, "1555-01-01", "İran halı ve ipek dokuma sanayii zirveye ulaştı", "C",
      {"odak_kimlik": ["safevi"]}, kaldir=True, gerekce="Ülke çapında sanat/ekonomi", kaynak="EIr CARPETS"),
    O(IR, "1618-09-26", "Osmanlı-Safevî Savaşı (Nasuh Paşa sonrası) yeniden alevlendi", "B",
      {"odak_yer": ["Van", "Kars"]}, kaldir=True, gerekce="'Van ve Kars bölgesinde' (metin)", kaynak="EIr OTTOMAN-PERSIAN RELATIONS"),
    O(IR, "1600-01-01", "İpek ticareti devlet tekeline alındı", "B",
      {"odak_yer": ["Reşt", "Sârî"]}, kaldir=True, gerekce="'Gîlân ve Mâzenderân'ın ham ipek üretimi' → iki eyalet merkezi", kaynak="EIr SILK TRADE"),
    O(IR, "1699-01-01", "Belûc ve Afgan sınır boylarında merkezî otoritenin zayıflaması", "B",
      {"odak_yer": ["Kandehar", "Herat"]}, kaldir=True, gerekce="Gilzai ve Abdâlî boyları", kaynak="EIr AFGHANISTAN v"),
    O(IR, "1730-01-01", "Osmanlı ile savaş yeniden başladı (1736'ya dek, aralıklı)", "B",
      {"odak_yer": ["Hemedan", "Kirmanşah", "Tebriz"]}, kaldir=True, gerekce="Metinde adı geçen üç şehir", kaynak="EIr OTTOMAN-PERSIAN RELATIONS"),
    O(IR, "1873-01-01", "Nâsırüddin Şah'ın ilk Avrupa seyahati", "B",
      {"odak_yer": ["St. Petersburg", "Berlin", "Londra", "Paris"]}, kaldir=True, gerekce="Ziyaret edilen dört ülkenin başkentleri (metin)", kaynak="EIr NĀṢER-AL-DIN SHAH ii"),
    O(IR, "1909-04-14", "Anglo-Persian Oil Company kuruldu", "E",
      kaldir=True, gerekce="Havuzda Mescid-i Süleyman yok; şirketin kuruluş yeri metinde yok → odak YAZILMADI. Yalnız Osmanlı'ya uçuran kapsam_genis kaldırılır (madde ODAKSIZ olur, panel eksikliği söyler). Nokta gerekiyor", kaynak="EIr ANGLO-PERSIAN OIL COMPANY"),
    O(IR, "1917-01-01", "1917-1919 büyük kıtlığı", "C",
      {"odak_kimlik": ["kacar"]}, kaldir=True, gerekce="Ülke çapında kıtlık", kaynak="EIr FAMINE ii"),
    O(IR, "1922-01-01", "Şeyh Hazal ve Simko Kürt isyanlarının bastırılması", "B",
      {"odak_yer": ["Muhammere", "Urmiye"]}, kaldir=True, gerekce="Huzistan (Şeyh Hazal'ın merkezi Muhammere) + kuzeybatı (Simko, Urmiye)", kaynak="EIr REZA SHAH"),

    # ── İRAN ARDILLARI (17) ─────────────────────────────────────────────────────
    O(IA, "1253-01-01", "Büyük Han Mengü, kardeşi Hülâgû'yu batıya görevlendirdi", "B",
      {"odak_yer": ["Karakurum"]}, gerekce="Kurultay yeri TDV'de yok; metin karargâhı Karakorum diye anıyor → kamera", kaynak="TDV ilhanlilar"),
    O(IA, "1260-09-03", "Aynicâlût Savaşı — Moğol ilerleyişi Memlükler karşısında durdu", "A",
      {"yer_kon": [32.55, 35.36]}, gerekce="Aynicâlût (Harod pınarı) havuzda yok; bilinen konum, YAKLAŞIK", kaynak="TDV ilhanlilar: 'Filistin'de Aynicâlût'ta'"),
    O(IA, "1277-04-15", "Elbistan Savaşı — Baybars Anadolu'da İlhanlı ordusunu yendi", "A",
      {"yer_id": "Elbistan"}, gerekce="'Elbistan'da İlhanlı ordusunu yendi'", kaynak="TDV ilhanlilar"),
    O(IA, "1295-06-19", "Gāzân Han Lâr vadisinde müslüman oldu ve Mahmud adını aldı", "A→odak_yer",
      {"odak_yer": ["Tahran", "Âmül"]}, gerekce="Lâr vadisi (Elburz) havuzda yok; iki şehrin kutusu vadiyi kapsar (kamera)", kaynak="TDV gazan-han: 'Elburz'da Lâr vadisinde'"),
    O(IA, "1299-12-22", "Vâdilhâzindâr Savaşı — Moğol ordusu Dımaşk'a girdi", "A→odak_yer",
      {"odak_yer": ["Hama", "Humus"]}, gerekce="'Hama-Humus arasındaki Vâdilhâzindâr'", kaynak="TDV gazan-han"),
    O(IA, "1302-04-12", "Gāzân Han Papa VIII. Bonifacius'a mektup yazdı", "B",
      {"odak_yer": ["Roma"]}, kaldir=True, gerekce="Mektubun alıcısı Papalık", kaynak="TDV gazan-han"),
    O(IA, "1303-04-20", "Dımaşk yenilgisi — Suriye ümidi kesin olarak bitti", "A→odak_yer",
      {"odak_yer": ["Şam"]}, gerekce="'Dımaşk yakınlarında' — meydan adı yok", kaynak="TDV gazan-han"),
    O(IA, "1303-08-01", "Gāzân Han'ın toprak tahriri ve iktâ dağıtımı", "C",
      {"odak_kimlik": ["ilhanli"]}, kaldir=True, gerekce="Ülke çapında tahrir", kaynak="TDV incu"),
    O(IA, "1300-01-01", "Gāzân Han'ın vergi ve posta reformu — menzilhâneler", "C",
      {"odak_kimlik": ["ilhanli"]}, kaldir=True, gerekce="Ülke çapında reform", kaynak="TDV ilhanlilar"),
    O(IA, "1305-01-01", "Bizans ile evlilik ittifakı — Andronikos'un kızıyla nikâh", "B",
      {"odak_kimlik": ["bizans"]}, gerekce="Karşı taraf Bizans", kaynak="TDV ilhanlilar"),
    O(IA, "1323-01-01", "Memlüklerle barış antlaşması — altmış yıllık savaş bitti", "B",
      {"odak_kimlik": ["ilhanli", "memluk"]}, kaldir=True, gerekce="İki taraf", kaynak="TDV ilhanlilar · ebu-said-bahadir-han"),
    O(IA, "1402-07-28", "Ankara Savaşı — Celâyirli ve Karakoyunlu sığınmacıları savaşın sebeplerinden", "A",
      {"yer_id": "Ankara"}, gerekce="Savaş Ankara'da", kaynak="TDV celayirliler"),
    O(IA, "1391-01-01", "Şah Mansûr, Zeynelâbidîn'i Rey'de yakalatıp gözlerine mil çektirdi", "A→odak_yer",
      {"odak_yer": ["Tahran"]}, gerekce="Rey havuzda yok; Tahran'ın hemen güneyinde → kamera", kaynak="TDV muzafferiler: 'Rey'de yakalandığında'"),
    O(IA, "1246-01-01", "Şemseddin, Mültan'ı 100.000 dinar karşılığında yağmadan kurtardı", "A",
      {"yer_id": "Multan"}, gerekce="Mültan kuşatması (havuz adı 'Multan')", kaynak="TDV kert"),
    O(IA, "1257-01-01", "Mültan Valisi Kaşlu Han, Şemseddin'in aracılığıyla Moğol hâkimiyetine girdi", "B",
      {"odak_yer": ["Multan"]}, gerekce="Olay Mültan valiliğine dair; belli bir yer-anı değil → kamera", kaynak="TDV kert"),
    O(IA, "1265-01-01", "Şemseddin, Hülâgû'nun yanında yer aldı ve Muhammed Karluk'a saldırdı", "E",
      gerekce="Kuh-ı Cud ve Binban havuzda yok, kaynak konum vermiyor; tahmin YAZILMADI", kaynak="TDV kert (bulunamadı: Kuh-ı Cud/Binban konumu)"),
    O(IA, "1184-01-01", "Lur-ı Küçek Atabegliği kuruldu — Bersekiyân idaresinin sonu", "B",
      {"odak_yer": ["Luristan"]}, gerekce="Luristan (havuzda nokta var); lur-i-kucek kimliğinin harita karşılığı yok", kaynak="TDV luristan"),

    # ── ARABİSTAN (17) ──────────────────────────────────────────────────────────
    O(AR, "1567-01-01", "Mutahhar isyanı — Yemen ikiye bölündü", "C",
      {"odak_yer": YEMEN}, kaldir=True, gerekce="Yemen'in tamamı → Yemen çerçevesi", kaynak="TDV yemen"),
    O(AR, "1608-01-01", "İmam Kāsım b. Muhammed ile on yıllık antlaşma", "B",
      {"odak_yer": YEMEN}, kaldir=True, gerekce="Yemen'de iki taraf; imza yeri yok", kaynak="TDV yemen"),
    O(AR, "1619-01-01", "Mehmed Paşa - Zeydîler arasında ikinci on yıllık antlaşma", "B",
      {"odak_yer": YEMEN}, kaldir=True, gerekce="Yemen'de iki taraf", kaynak="TDV yemen"),
    O(AR, "1630-08-01", "Kansu Paşa ile İmam Müeyyed arasında geçici anlaşma", "B",
      {"odak_yer": YEMEN}, kaldir=True, gerekce="Yemen'de iki taraf", kaynak="TDV yemen"),
    O(AR, "1681-01-01", "Ahmed b. Hasan'ın nominal Osmanlı bağı iddiası", "C",
      {"odak_yer": YEMEN}, kaldir=True, gerekce="Yemen'in yönetimine dair beyan", kaynak="TDV yemen"),
    O(AR, "1889-01-01", "Zeydîler isyan etti", "C",
      {"odak_yer": YEMEN}, kaldir=True, gerekce="Yaygın ayaklanma — yer adı yok", kaynak="TDV yemen"),
    O(AR, "1895-01-01", "Hüseyin Hilmi Paşa isyanı bastırdı", "C",
      {"odak_yer": YEMEN}, kaldir=True, gerekce="Yemen seferi — yer adı yok", kaynak="TDV yemen"),
    O(AR, "1507-01-01", "Portekiz, Uman kıyı şehirlerini işgale başladı", "B",
      {"odak_yer": ["Maskat"]}, kaldir=True, gerekce="Metinde adı geçen kıyı şehri", kaynak="TDV uman"),
    O(AR, "1728-01-01", "İç savaş sona erdi, II. Seyf'in imameti kabul edildi", "C",
      {"odak_kimlik": ["umman"]}, kaldir=True, gerekce="İmametin ülke çapında tanınması", kaynak="TDV yarubiler"),
    O(AR, "1749-06-10", "Bû Saîd hanedanı resmen kuruldu", "C",
      {"odak_kimlik": ["umman"]}, kaldir=True, gerekce="Hanedan kuruluşu — ülke çapında", kaynak="TDV uman"),
    O(AR, "1806-01-01", "Kuzeni Bedr b. Seyf bertaraf edildi", "C",
      {"odak_kimlik": ["umman"]}, gerekce="İktidarın ülke çapında sağlamlaştırılması; yer yok", kaynak="TDV said-b-sultan"),
    O(AR, "1821-01-01", "Kardeşi Sâlim'in ölümüyle tek hükümdar oldu", "C",
      {"odak_kimlik": ["umman"]}, gerekce="Hükümdarlık statüsü (umman-zengibar eklenmedi: kutu Zengibar'a dek 38° uzanır)", kaynak="TDV said-b-sultan"),
    O(AR, "1856-01-01", "Saîd b. Sultân'ın ölümü — ülke Maskat ve Zengibar arasında bölündü", "B",
      {"odak_yer": ["Maskat", "Zanzibar"]}, kaldir=True, gerekce="Metinde adı geçen iki yer (havuz adı 'Zanzibar (Zengibar)')", kaynak="TDV uman · said-b-sultan"),
    O(AR, "1862-01-01", "Zengibar ve Uman ayrı devletler olarak tanındı", "B",
      {"odak_yer": ["Maskat", "Zanzibar"]}, kaldir=True, gerekce="İki devlet", kaynak="TDV uman"),
    O(AR, "1868-01-01", "Azzam b. Kays, Bû Saîd hattından son imam oldu", "C",
      {"odak_kimlik": ["umman"]}, gerekce="İmamet makamı — ülke çapında", kaynak="TDV uman"),
    O(AR, "1691-01-01", "Muhammed b. Berrâk, Necid'e akınlarını sürdürdü", "B",
      {"odak_kimlik": ["benihalid"]}, kaldir=True, gerekce="Akınların çıkış ülkesi (o gün 4 yerleşim); Necid'de yer adı yok", kaynak="devletler.js benihalid künyesi (madde kendi kaynağı)"),
    O(AR, "1830-01-01", "Mâcid el-Ureyyir'in ölümü — emirlik kesin olarak sona erdi", "A→odak_yer",
      {"odak_yer": ["Lahsa"]}, gerekce="Aklâ havuzda yok ve konumu bilinmiyor; metin Lahsa'nın el değiştirdiğini söylüyor → kamera Lahsa", kaynak="madde metni"),

    # ── KIRIM (15, hepsi BEYANLI) ───────────────────────────────────────────────
    O(KI, "1476-01-01", "Altın Orda Hanı Seyyid Ahmed Kırım'ı istila etti", "B",
      {"odak_yer": KIRIM_YM}, kaldir=True, gerekce="İstilanın hedefi Kırım yarımadası (Mengli Giray Kırkyer'e sığındı)", kaynak="TDV kirim: '881'de (1476) … Kırım'ı istilâ etti. Mengli Giray Kırkyer'e (Çufutkale) sığındı'"),
    O(KI, "1476-07-01", "Eminek Mirza komutasındaki Kırım birliği Boğdan'a (Moldavya) sefer düzenledi", "B",
      {"odak_kimlik": ["bogdan"]}, kaldir=True, gerekce="Seferin hedefi Boğdan (o gün 14 yerleşim)", kaynak="TDV giray: '1476 yazında … Kırım birliği Boğdan'a karşı'"),
    O(KI, "1511-01-01", "Moskova Knezliği'ne karşı Yagellonlar'la (Lehistan-Litvanya) sıkı ittifak siyaseti benimsendi", "B",
      {"odak_kimlik": ["kirim", "litvanya-buyuk-dukalik", "polonya-erken"]}, kaldir=True, gerekce="İttifakın tarafları", kaynak="TDV kirim"),
    O(KI, "1520-01-01", "Yagellonlar'la ittifak yenilendi", "B",
      {"odak_kimlik": ["kirim", "litvanya-buyuk-dukalik", "polonya-erken"]}, kaldir=True, gerekce="İttifakın tarafları", kaynak="TDV kirim"),
    O(KI, "1523-01-01", "I. Mehmed Giray, Nogaylar'ın baskınında öldürüldü", "B",
      {"odak_yer": ["Astrahan"]}, kaldir=True, gerekce="Kaynak: Astarhan seferinden DÖNERKEN — kesin yer yok, yalnız kamera", kaynak="TDV kirim: 'Astarhan seferinden dönerken Nogaylar tarafından bir baskında öldürüldü'"),
    O(KI, "1524-01-01", "Saadet Giray han oldu", "C",
      {"odak_kimlik": ["kirim"]}, kaldir=True, gerekce="Taht değişimi", kaynak="TDV giray"),
    O(KI, "1532-01-01", "Eski Kazan hanı Sâhib Giray, Osmanlı desteğiyle Kırım tahtına çıktı; sekban vergisi başladı", "C",
      {"odak_kimlik": ["kirim"]}, kaldir=True, gerekce="Taht + hanlık çapında vergi", kaynak="TDV giray · kirim"),
    O(KI, "1534-01-01", "Osmanlı metbûluğu Kırım'da kesin biçimde yerleşti", "C",
      {"odak_kimlik": ["kirim"]}, kaldir=True, gerekce="Hanlığın statüsü", kaynak="TDV giray"),
    O(KI, "1565-01-01", "Devlet Giray, Osmanlı topçularının da bulunduğu ordusuyla kış aylarında Rusya'ya sefer düzenledi", "B",
      {"odak_yer": ["Bahçesaray", "Moskova"]}, kaldir=True, gerekce="Kırım → Moskova sefer ekseni (rusya kimlik kutusu Sibirya'ya uzanır, kullanılmadı)", kaynak="TDV kirim"),
    O(KI, "1594-04-01", "II. Gazi Giray, Rusya ile bir barış antlaşması imzaladı", "B",
      {"odak_yer": ["Bahçesaray", "Moskova"]}, kaldir=True, gerekce="İki taraf; imza yeri yok", kaynak="TDV gazi-giray-ii"),
    O(KI, "1648-01-01", "İslâm Giray, 1653'e dek birkaç kez Lehistan'a sefer düzenledi", "B",
      {"odak_kimlik": ["kirim", "lehistan"]}, kaldir=True, gerekce="İki taraf", kaynak="TDV kirim"),
    O(KI, "1770-01-01", "Rus orduları Bucak bölgesini işgal etti", "B",
      {"odak_yer": ["Akkirman", "Kili"]}, kaldir=True, gerekce="Bucak (Dinyester–Prut arası, Akkirman dolayları) havuzda yok", kaynak="TDV kirim: 'Rus orduları 1770'te Bucak'ı … istilâ ettiler'"),
    O(KI, "1782-10-01", "General Potemkin, Kırım'ın fiilî Rus işgalini başlattı", "B",
      {"odak_yer": KIRIM_YM}, kaldir=True, gerekce="Kırım yarımadası", kaynak="TDV sahin-giray · kirim"),
    O(KI, "1782-01-01", "Kırım'dan padişaha durumu bildiren mahzarlar (dilekçeler) gönderildi", "B",
      {"odak_yer": ["Bahçesaray", "İstanbul"]}, kaldir=True, gerekce="Gönderen Kırım kurultayı → alıcı padişah", kaynak="TDV kirim: 'Toplanan kurultay padişaha mahzarlar yolladı (Eylül 1782)'"),
    O(KI, "1792-01-01", "Yaş Antlaşması sonrası Osmanlı, Kırım Hanlığı'nı yeniden canlandırma fikrinden vazgeçti", "B",
      {"odak_yer": ["Bahçesaray", "Kuban"]}, kaldir=True, gerekce="Konu: Kırım hanlığı + terk edilen Kuban hanlıkları (metin)", kaynak="TDV giray"),

    # ── ALTIN ORDA (13) ─────────────────────────────────────────────────────────
    O(AO, "1314-05-11", "Özbek Han İlhanlı hükümdarı Olcaytu'ya elçi gönderdi", "B",
      {"odak_yer": ["Sultâniye"]}, gerekce="Elçinin gittiği hükümdarın başkenti (Olcaytu = Sultâniye)", kaynak="TDV ozbek-han"),
    O(AO, "1314-01-01", "Kahire'ye 174 kişilik büyük elçilik heyeti gönderildi — Memlük ittifakının tazelenmesi", "B",
      {"odak_yer": ["Kahire"]}, gerekce="Heyetin varış yeri (metin)", kaynak="TDV ozbek-han"),
    O(AO, "1319-01-01", "Altın Orda kuvvetleri Trakya'yı yağmaladı — yağma kırk gün sürdü", "B",
      {"odak_yer": ["Edirne", "Tekirdağ"]}, gerekce="Trakya çerçevesi (kaynak yerleşim adı vermiyor)", kaynak="TDV ozbek-han"),
    O(AO, "1320-05-16", "Mısır Memlük hânedanından Tolun-Bige Hatun ile evlilik anlaşması", "B",
      {"odak_yer": ["Kahire"]}, gerekce="Gelinin geldiği Memlük sarayı", kaynak="TDV ozbek-han"),
    O(AO, "1380-09-08", "Kulikovo Muharebesi — Mamay'ın ordusu Moskova Knezi Dmitri Donskoy'a yenildi", "A",
      {"yer_kon": [53.66, 38.66]}, gerekce="Kulikovo sahası havuzda yok; bilinen konum (Nepryadva–Don birleşimi), YAKLAŞIK", kaynak="TDV toktamis-han"),
    O(AO, "1380-01-01", "Toktamış, Kalka boyunda Mamay'ı yendi — yirmi yıllık kargaşa sona erdi, devlet yeniden birleşti", "E",
      gerekce="TDV 'Don'a dökülen Kalka' diyor; Kalka Don'a değil Kalmius'a dökülür — kaynak kendi içinde tutarsız (tuzak ⑥), yer YAZILMADI", kaynak="TDV toktamis-han (bulunamadı: tutarlı konum)"),
    O(AO, "1391-06-01", "Kunduzca (Kondurça) Savaşı — Timur, Toktamış'ı ilk kez ağır yenilgiye uğrattı", "A→odak_yer",
      {"odak_yer": ["Samara"]}, gerekce="Kondurça ırmağı havuzda yok, meydan koordinatı kesin değil; ırmak Samara'nın kuzeyinde → bölge kamerası", kaynak="TDV toktamis-han · timur"),
    O(AO, "1393-01-01", "Toktamış Han, Lehistan-Litvanya Kralı Jagiello'ya yarlık gönderdi — bozkır diplomasisinin belgesi", "B",
      {"odak_yer": ["Krakov", "Vilnius"]}, gerekce="Alıcı: Lehistan kralı + Litvanya", kaynak="TDV yarlik"),
    O(AO, "1399-01-01", "Edigü Mirza, Toktamış ve Litvanya ordusunu yendi — beylerin hanlar üzerindeki hâkimiyeti kesinleşti", "A→odak_yer",
      {"odak_yer": ["Poltava"]}, gerekce="Vorskla ırmağı (metin) — meydan Poltava yöresi; koordinat kesin değil → kamera", kaynak="TDV toktamis-han"),
    O(AO, "1405-01-01", "Toktamış Han öldürüldü — devleti son kez birleştiren hanın sonu", "E",
      gerekce="Karaton ırmağının yeri kaynakta yok, havuzda yok", kaynak="TDV toktamis-han (bulunamadı: Karaton)"),
    O(AO, "1419-01-01", "Edigü'nün yirmi yıllık fiilî idaresi sona erdi", "C",
      {"odak_kimlik": ["altinorda"]}, gerekce="Devlet idaresi", kaynak="TDV altin-orda-hanligi"),
    O(AO, "1420-01-01", "Edigü öldü — oğulları Nogay Ordası'nın çekirdeğini kurdu", "C",
      {"odak_kimlik": ["altinorda"]}, gerekce="Ölüm yeri kaynakta yok; konu devletin bölünmesi (nogay künyesi 1440'ta başlıyor)", kaynak="TDV nogaylar"),
    O(AO, "1480-11-11", "Ugra Nehri karşılaşması — Rus knezliklerinin haraç ödemesi sona erdi", "A→odak_yer",
      {"odak_yer": ["Kaluga"]}, gerekce="Ugra kıyısı Kaluga yakını; nokta koordinatı kesin değil → kamera", kaynak="madde metni (Riasanovsky)"),

    # ── SINIR ORTADOĞU (11) ─────────────────────────────────────────────────────
    O(SO, "1553-08-28", "Kanunî'nin üçüncü İran (Nahçıvan) seferine çıkışı", "B",
      {"odak_yer": ["İstanbul", "Nahçıvan"]}, gerekce="Çıkış (İstanbul) → hedef (Nahçıvan) ekseni", kaynak="TDV suleyman-i · nahcivan"),
    O(SO, "1886-01-01", "Fransız–Osmanlı düzenlemesi — Tunus ile Trablusgarp arasındaki sınırın kıyı kesimi çizildi", "B",
      {"odak_yer": ["Zuvâre", "Medenîn"]}, gerekce="Sınırın kıyı kesimi iki yakanın arasında; imza yeri yok", kaynak="IBS 121"),
    O(SO, "1892-01-01", "Fransız–Osmanlı düzenlemesi — Tunus–Trablusgarp sınırı Gadames'e kadar uzatıldı", "B",
      {"odak_yer": ["Zuvâre", "Ğadâmis"]}, gerekce="Kıyıdan Gadames'e hat", kaynak="IBS 121"),
    O(SO, "1906-10-01", "Refah Anlaşması — Osmanlı ile Mısır Hidivliği arasındaki Refah–Taba hattı tarif edildi", "A",
      {"yer_kon": [31.29, 34.25]}, gerekce="Anlaşma Refah'ta; Refah havuzda yok — bilinen konum, YAKLAŞIK", kaynak="Taba hakem kararı RIAA XX"),
    O(SO, "1910-05-19", "Trablus Sözleşmesi — Tunus ile Trablusgarp vilayeti arasındaki sınır Ras Ecdir'den Gadames'e çizildi", "A",
      {"yer_id": "Trablus"}, gerekce="'Trablus'ta imzalanan sözleşme' (metin); havuzdaki 'Trablus' Libya'dakidir (Trablusşam ayrı kayıt)", kaynak="IBS 121 · Martens"),
    O(SO, "1912-10-18", "Uşi Antlaşması — Libya'nın Tunus ve Cezayir sınırları Osmanlı'dan İtalya'ya geçti", "B",
      {"odak_yer": ["Zuvâre", "Ğadâmis"]},
      gerekce="İmza Uşi'de (İsviçre) — konuyla ilgisiz uzak nokta; madde el değiştiren SINIRA dair → sınır çerçevesi", kaynak="TDV trablusgarp-savasi"),
    O(SO, "1914-12-18", "İngiltere Mısır'da Osmanlı hükümranlığını kaldırdı — Refah (1906) hattının Osmanlı–Mısır hukukî dayanağı düştü", "C",
      {"odak_kimlik": ["misir-sultanligi"]}, gerekce="Mısır'ın tamamının statüsü (o gün 57 yerleşim)", kaynak="TDV misir"),
    O(SO, "1917-10-31", "Birüssebi'nin düşüşü — Refah hattının iki yakası İngiliz elinde, hat fiilî sınır olarak yeniden", "A",
      {"yer_kon": [31.25, 34.79]}, gerekce="Birüssebi havuzda yok; şehrin bilinen konumu, YAKLAŞIK", kaynak="TDV filistin"),
    O(SO, "1920-07-01", "Filistin'de sivil manda yönetimi — Refah (1906) hattının Filistin yakası askerî idareden çıkıyor", "C",
      {"odak_kimlik": ["filistin-mandasi"]}, gerekce="Filistin'in tamamı (o gün 6 yerleşim)", kaynak="TDV filistin"),
    O(SO, "1922-03-15", "Mısır Krallığı ilân edildi — Refah–Taba hattının Mısır yakası krallığa geçiyor", "C",
      {"odak_kimlik": ["misir-kralligi"]}, gerekce="Mısır'ın tamamı", kaynak="TDV misir"),
    O(SO, "1922-12-02", "Ukayr Protokolü — Necid–Küveyt sınırı ve Tarafsız Bölge çizildi", "A",
      {"yer_id": "Ukayr"}, gerekce="'Ukayr'da imzalanan protokol'", kaynak="TDV kuveyt · IBS 103"),

    # ── GÜRCİSTAN (10, hepsi BEYANLI) ───────────────────────────────────────────
    # gurcistan kimliği 1231: 0 · 1590: 0 · 1724: 1 · 1736: 2 yerleşim (ölçüldü) → tek tip ülke çerçevesi
    O(GU, "1231-01-01", "Moğol istilası başladı", "C",
      {"odak_yer": GURCISTAN}, kaldir=True, gerekce="Ülkenin istilası → Gürcistan çerçevesi (Kartli/İmereti/Kaheti)", kaynak="TDV gurcistan"),
    O(GU, "1386-01-01", "Timur'un birinci Gürcistan seferi", "B",
      {"odak_yer": GURCISTAN}, kaldir=True, gerekce="Seferin hedefi Gürcistan", kaynak="TDV gurcistan"),
    O(GU, "1399-01-01", "Timur'un ikinci Gürcistan seferi (1399-1400)", "B",
      {"odak_yer": GURCISTAN}, kaldir=True, gerekce="Seferin hedefi Gürcistan", kaynak="TDV gurcistan"),
    O(GU, "1402-01-01", "Timur'un üçüncü Gürcistan seferi", "B",
      {"odak_yer": GURCISTAN}, kaldir=True, gerekce="Seferin hedefi Gürcistan", kaynak="TDV gurcistan"),
    O(GU, "1403-01-01", "Timur'un dördüncü ve son Gürcistan seferi", "B",
      {"odak_yer": GURCISTAN}, kaldir=True, gerekce="Seferin hedefi Gürcistan", kaynak="TDV gurcistan"),
    O(GU, "1490-01-01", "Krallığın Kartli, Kaheti ve İmereti'ye bölünmesi", "C",
      {"odak_yer": GURCISTAN}, kaldir=True, gerekce="Üç krallığın merkezleri: Tiflis (Kartli) · Kutaisi (İmereti) · Zagem (Kaheti)", kaynak="TDV gurcistan"),
    O(GU, "1555-05-29", "Amasya Antlaşması — Gürcistan'ın Osmanlı-Safevî nüfuz bölgelerine bölünmesi", "B",
      {"odak_yer": GURCISTAN}, kaldir=True, gerekce="İmza Amasya'da, ama madde Gürcistan'ın taksimine dair → taksim edilen ülke", kaynak="TDV amasya-antlasmasi"),
    O(GU, "1590-03-21", "Ferhad Paşa Antlaşması — Gürcistan'ın büyük kısmı Osmanlı'da kaldı", "B",
      {"odak_yer": GURCISTAN}, kaldir=True, gerekce="Madde Gürcistan topraklarına dair", kaynak="TDV luristan · safeviler · murad-iii"),
    O(GU, "1724-06-24", "İstanbul Mukâsemenâmesi — Gürcistan'ın Osmanlı-Rusya arasında paylaşılması", "B",
      {"odak_yer": GURCISTAN}, kaldir=True, gerekce="Madde Gürcistan'ın paylaşılmasına dair", kaynak="TDV ahmed-iii"),
    O(GU, "1736-09-01", "İstanbul Antlaşması — Osmanlı'nın on üç yıllık işgalin ardından Gürcistan'dan çekilmesi", "B",
      {"odak_yer": GURCISTAN}, kaldir=True, gerekce="Çekilinen ülke", kaynak="TDV osmanlilar"),

    # ── RUSYA (10, hepsi BEYANLI) ───────────────────────────────────────────────
    O(RU, "1601-01-01", "Büyük kıtlık başladı (1603'e dek)", "C",
      {"odak_yer": ["Moskova", "Novgorod"]}, kaldir=True, gerekce="Moskova Rusyası çekirdeği; rusya kimlik kutusu 1601'de Sibirya'ya (82°D) uzanıyor (ölçüldü)", kaynak="Riasanovsky & Steinberg"),
    O(RU, "1697-03-09", "Büyük Elçilik seferi başladı (1698'e dek)", "B",
      {"odak_yer": ["Amsterdam", "Londra", "Viyana"]}, kaldir=True, gerekce="Metinde adı geçen üç ülke (Hollanda, İngiltere, Avusturya)", kaynak="Riasanovsky & Steinberg"),
    O(RU, "1700-01-01", "Büyük Kuzey Savaşı başladı (1721'e dek) ⭐", "B",
      {"odak_yer": ["Narva", "Riga", "Stokholm"]}, kaldir=True, gerekce="İsveç'e karşı Baltık savaşı (rusya kutusu 162°D'ye uzanır)", kaynak="Riasanovsky & Steinberg"),
    O(RU, "1735-06-01", "Osmanlı ile savaş başladı (1739'a dek)", "B",
      {"odak_yer": ["Azak"]}, kaldir=True, gerekce="Metinde adı geçen Azak", kaynak="TDV belgrad-antlasmalari"),
    O(RU, "1756-08-29", "Yedi Yıl Savaşları'na girdi", "B",
      {"odak_yer": ["Berlin"]}, kaldir=True, gerekce="Prusya'ya karşı; metinde Berlin", kaynak="Riasanovsky & Steinberg"),
    O(RU, "1839-01-01", "Devlet köylülerinin reformu (Kiselev reformu)", "C",
      {"odak_yer": RUS_CEKIRDEK}, kaldir=True, gerekce="İmparatorluk reformu → Avrupa Rusyası çekirdeği (rusya kutusu Alaska'ya uzanıyor, ölçüldü)", kaynak="Riasanovsky & Steinberg"),
    O(RU, "1874-01-01", "\"Halka Gitme\" (Hojdeniye v narod) hareketi", "C",
      {"odak_yer": RUS_CEKIRDEK}, kaldir=True, gerekce="Kırsala yayılan hareket → Avrupa Rusyası çekirdeği", kaynak="Riasanovsky & Steinberg"),
    O(RU, "1877-04-24", "93 Harbi — Ayastefanos ve Berlin antlaşmalarına giden savaş ⭐", "B",
      {"odak_yer": ["Rusçuk", "Kars"]}, kaldir=True, gerekce="'Tuna ve Kafkas cephelerinde' (metin)", kaynak="TDV ayastefanos-antlasmasi"),
    O(RU, "1891-01-01", "1891-92 kıtlığı — Volga bölgesi büyük açlık", "B",
      {"odak_yer": ["Kazan", "Samara", "Saratov"]}, kaldir=True, gerekce="Volga havzası (metin)", kaynak="Riasanovsky & Steinberg"),
    O(RU, "1897-01-28", "İlk genel nüfus sayımı yapıldı", "C",
      {"odak_yer": RUS_CEKIRDEK}, kaldir=True, gerekce="İmparatorluk çapında — Avrupa Rusyası çekirdeği", kaynak="Riasanovsky & Steinberg"),

    # ── SINIR KOMŞU (8) ─────────────────────────────────────────────────────────
    O(SK, "1923-03-07", "Paulet–Newcombe sınır raporu imzalandı — Filistin ile Suriye-Lübnan arasındaki hat", "B",
      {"odak_yer": ["Akkâ", "Sayda"]}, gerekce="İmza Paris'te; hat Nakura–el-Hamme — iki yakadaki havuz noktalarının kutusu hattı kapsar", kaynak="IBS 75"),
    O(SK, "1813-10-24", "Gülistan Antlaşması: Kafkasya'daki hanlıklar Rusya'ya bırakıldı", "B",
      {"odak_yer": ["Gence", "Şeki", "Şamahı", "Bakü", "Derbend"]}, gerekce="Bırakılan hanlıkların merkezleri (metin)", kaynak="EIr GOLESTĀN · TDV azerbaycan"),
    O(SK, "1828-02-22", "Türkmençay Antlaşması: Revan ve Nahçıvan Rusya'ya, Aras sınır oldu", "B",
      {"odak_yer": ["Revan", "Nahçıvan"]}, gerekce="Bırakılan iki hanlık (metin)", kaynak="TDV feth-ali-sah · revan"),
    O(SK, "1869-12-13", "Rus-İran anlaşması: aşağı Atrek nehri Hazar doğusunda sınır sayıldı", "B",
      {"odak_yer": ["Esterâbâd", "Dihistan ovası"]}, gerekce="Aşağı Atrek iki havuz noktasının arasında", kaynak="IBS 25"),
    O(SK, "1881-12-21", "Ahal-Horasan Sözleşmesi: Rus-İran sınırı Babadurmaz'a kadar çizildi", "B",
      {"odak_yer": ["Esterâbâd", "Aşkabad"]}, gerekce="Atrek'ten Aşkabat doğusuna hat (metin)", kaynak="IBS 25"),
    O(SK, "1723-09-23", "Petersburg Antlaşması: Derbend, Bakü ve Hazar'ın güney kıyıları Rusya'ya bırakıldı", "B",
      {"odak_yer": ["Derbend", "Bakü", "Reşt"]}, gerekce="İmza Petersburg'da (uzak); bırakılan kıyı: Derbend, Bakü, güney kıyı (Gîlân)", kaynak="TDV derbend--dagistan · baku"),
    O(SK, "1732-01-01", "Reşt Antlaşması: Rusya Hazar kıyısındaki toprakların bir kısmını İran'a iade etti", "A",
      {"yer_id": "Reşt"}, gerekce="Antlaşma Reşt'te", kaynak="TDV dagistan"),
    O(SK, "1735-01-01", "Gence Antlaşması: Rusya Hazar kıyısından çekildi", "A",
      {"yer_id": "Gence"}, gerekce="Antlaşma Gence'de", kaynak="TDV derbend--dagistan"),
]

# ═════════════════════════════════════════════════════════════════════════════
DOSYALAR = sorted({o["dosya"] for o in ONERILER})


def node_oku(yol):
    b = ("global.window={};eval(require('fs').readFileSync(process.argv[1],'utf8'));"
         "const k=Object.keys(global.window)[0];process.stdout.write(JSON.stringify(global.window[k]||[]));")
    r = subprocess.run(["node", "-e", b, yol], capture_output=True, text=True, encoding="utf-8")
    if r.returncode:
        raise RuntimeError(r.stderr[:300])
    return json.loads(r.stdout)


def devlet_ix():
    b = ("global.window={};eval(require('fs').readFileSync(process.argv[1],'utf8'));"
         "process.stdout.write(JSON.stringify(global.window.DEVLETLER||[]))")
    r = subprocess.run(["node", "-e", b, os.path.join(KOK, "data", "devletler.js")],
                       capture_output=True, text=True, encoding="utf-8")
    return {d["id"]: d for d in json.loads(r.stdout)}


def sahip(y, g):
    """suzgec.js sahipAnahtari ile birebir: d → v → s."""
    for p in y.get("d") or []:
        if p["f"] <= g < p["t"]:
            return "osmanli"
    for p in y.get("v") or []:
        if p["f"] <= g < p["t"]:
            return "tabi:" + (p.get("kid") or "")
    for p in y.get("s") or []:
        if p["f"] <= g < p["t"]:
            return "s:" + p["d"]
    return ""


def kimlik_say(Y, IX, g, ids):
    """suzgec.js sahipKimlikte taklidi. ⚠️ kid'siz v: döneminin `k` adıyla eşleşme dalı
    TAKLİT EDİLMEDİ — sayı app.js'ten AZ olabilir, fazla olamaz (güvenli yön)."""
    n = 0
    for y in Y:
        k = sahip(y, g)
        if not k:
            continue
        for i in ids:
            h = IX.get(i, {}).get("harita")
            if (i == "osmanli" and (k == "osmanli" or k.startswith("tabi:"))) or \
               k in ("tabi:" + i, "s:" + i) or (h and k in ("s:" + h, "tabi:" + h)):
                n += 1
                break
    return n


def odak_sinifi(o, havuz):
    """app.js sırası (olayKonumu → maddeOdakKutusu → kapsam_genis). odak_kimlik TEK ögeli
    de sayılır (app.js ids.length yeter, ≥2 YERLEŞİM ister — o şart ayrıca sınanır)."""
    yk = o.get("yer_kon")
    if isinstance(yk, list) and len(yk) == 2:
        return "KONUMLU"
    if o.get("yer_id") and o["yer_id"] in havuz:
        return "KONUMLU"
    if o.get("odak_kutu_kaynak"):
        return "KUTULU"
    oy = o.get("odak_yer")
    oy = oy if isinstance(oy, list) else ([oy] if oy else [])
    if any(a in havuz for a in oy):
        return "KUTULU"
    if o.get("odak_kimlik"):
        return "KUTULU"
    if o.get("kapsam_genis") is True:
        return "BEYANLI"
    return "ODAKSIZ"


def js_str(s):
    return s.replace("\\", "\\\\").replace('"', '\\"')


def js_deger(v):
    return json.dumps(v, ensure_ascii=False).replace('", "', '","').replace(", ", ",")


def nesne_araligi(metin, t, b):
    """b:"…" dizgisini bulur, çevreleyen { … } aralığını döner; t de o nesnede olmalı."""
    desen = re.compile(r'(?<![\w$])"?b"?\s*:\s*"' + re.escape(js_str(b)) + '"')
    bulunan = []
    for m in desen.finditer(metin):
        i = metin.rfind("{", 0, m.start())
        # eşleşen kapanış — dizgi içindeki süslüleri atla
        j, derin, dizgi, kac = i, 0, False, False
        while j < len(metin):
            c = metin[j]
            if dizgi:
                if kac:
                    kac = False
                elif c == "\\":
                    kac = True
                elif c == '"':
                    dizgi = False
            elif c == '"':
                dizgi = True
            elif c == "{":
                derin += 1
            elif c == "}":
                derin -= 1
                if derin == 0:
                    break
            j += 1
        govde = metin[i:j + 1]
        if re.search(r'(?<![\w$])"?t"?\s*:\s*"' + re.escape(t) + '"', govde):
            bulunan.append((i, j + 1, m.end()))
    return bulunan


def duzenle(govde, b_son, oneri):
    """govde: nesne metni; b_son: b dizgisinin bittiği göreli konum.
    Dosyanın anahtar üslubu korunur: nesne "b": yazıyorsa yeni anahtarlar da tırnaklı."""
    tirnak = re.search(r'"b"\s*:', govde) is not None
    ad = (lambda s: '"%s"' % s) if tirnak else (lambda s: s)
    sep = "," if tirnak else ", "
    ek = []
    for alan, deger in oneri["yeni"].items():
        if alan == "yer_id":
            continue
        ek.append("%s:%s" % (ad(alan), js_deger(deger)))
    yid = oneri["yeni"].get("yer_id")
    if yid is not None:
        bos = re.search(r'(?<![\w$])"?yer_id"?\s*:\s*""', govde)
        if bos:
            yeni = '%s:"%s"' % (ad("yer_id"), js_str(yid))
            govde2 = govde[:bos.start()] + yeni + govde[bos.end():]
            if bos.start() < b_son:
                b_son += len(govde2) - len(govde)
            govde = govde2
        elif re.search(r'(?<![\w$])"?yer_id"?\s*:', govde):
            raise RuntimeError("yer_id dolu — eski tutmuyor")
        else:
            ek.insert(0, '%s:"%s"' % (ad("yer_id"), js_str(yid)))
    if ek:
        govde = govde[:b_son] + sep + sep.join(ek) + govde[b_son:]
    if oneri["kaldir"]:
        g2 = re.sub(r',\s*"?kapsam_genis"?\s*:\s*true', "", govde, count=1)
        if g2 == govde:
            g2 = re.sub(r'"?kapsam_genis"?\s*:\s*true\s*,\s*', "", govde, count=1)
        if g2 == govde:
            raise RuntimeError("kapsam_genis:true kaldırılamadı")
        govde = g2
    return govde


def main():
    import girdi
    Y = girdi.yukle(sessiz=True)
    havuz = set()
    for y in Y:
        havuz.add(y["ad"]); havuz.add(y["ad"].split(" (")[0])
    IX = devlet_ix()

    say = {"değişen": 0, "zaten böyle": 0, "kayıt yok": 0, "eski tutmuyor": 0,
           "şartı sağlamadı": 0, "E (dokunulmadı)": 0, "grup dışı": 0}
    sinif_say = {}
    once = {"ODAKSIZ": 0, "BEYANLI": 0}
    sonra = {"KONUMLU": 0, "KUTULU": 0, "BEYANLI": 0, "ODAKSIZ": 0}
    olc_sonra_odaksiz = 0      # arac/odak_olc.py'nin BUGÜNKÜ sınavıyla (tek ögeli odak_kimlik'i saymaz)

    kayitlar = {f: node_oku(os.path.join(KOK, "data", f)) for f in DOSYALAR}
    metinler = {f: io.open(os.path.join(KOK, "data", f), encoding="utf-8").read() for f in DOSYALAR}
    yeni_metin = dict(metinler)
    bekleyen = {f: [] for f in DOSYALAR}   # (t, b, yeni alanlar, kaldir)

    for o in ONERILER:
        sn = o["sinif"]
        grup = sn[0]
        sinif_say[sn] = sinif_say.get(sn, 0) + 1
        adaylar = [r for r in kayitlar[o["dosya"]] if r.get("t") == o["t"] and r.get("b") == o["b"]]
        etiket = "%s %s %s" % (o["dosya"].replace("kronoloji_", "").replace(".js", ""), o["t"], o["b"][:60])
        if len(adaylar) != 1:
            say["kayıt yok"] += 1
            print("  🔴 KAYIT YOK (%d eşleşme): %s" % (len(adaylar), etiket))
            continue
        r = adaylar[0]
        eski = odak_sinifi(r, havuz)
        if eski in once:
            once[eski] += 1
        if grup == "E" and not o["kaldir"]:
            say["E (dokunulmadı)"] += 1
            sonra[eski] += 1
            olc_sonra_odaksiz += (eski == "ODAKSIZ")
            if AYRINTI:
                print("  [E] %s\n       gerekçe: %s\n       kaynak : %s" % (etiket, o["gerekce"], o["kaynak"]))
            continue
        beklenen_eski = "BEYANLI" if o["kaldir"] else "ODAKSIZ"
        # hedef hâl
        hedef = dict(r)
        hedef.update(o["yeni"])
        if o["kaldir"]:
            hedef.pop("kapsam_genis", None)
        if all(r.get(k) == v for k, v in o["yeni"].items()) and (not o["kaldir"] or "kapsam_genis" not in r):
            say["zaten böyle"] += 1
            sonra[odak_sinifi(r, havuz)] += 1
            continue
        if eski != beklenen_eski:
            say["eski tutmuyor"] += 1
            print("  🔴 ESKİ TUTMUYOR (beklenen %s, bulunan %s): %s" % (beklenen_eski, eski, etiket))
            sonra[eski] += 1
            continue
        # şartlar
        hata = []
        for a in o["yeni"].get("odak_yer", []):
            if a not in havuz:
                hata.append("odak_yer havuzda yok: " + a)
        if "odak_kimlik" in o["yeni"]:
            for i in o["yeni"]["odak_kimlik"]:
                if i != "osmanli" and i not in IX:
                    hata.append("künye yok: " + i)
            n = kimlik_say(Y, IX, o["t"], o["yeni"]["odak_kimlik"])
            if n < 2:
                hata.append("odak_kimlik %s → %d yerleşim (<2)" % (o["yeni"]["odak_kimlik"], n))
        if "yer_id" in o["yeni"] and o["yeni"]["yer_id"] not in havuz:
            hata.append("yer_id havuzda yok: " + o["yeni"]["yer_id"])
        if "yer_kon" in o["yeni"]:
            la, lo = o["yeni"]["yer_kon"]
            if not (-90 <= la <= 90 and -180 <= lo <= 180):
                hata.append("yer_kon geçersiz")
        if hata:
            say["şartı sağlamadı"] += 1
            print("  🔴 ŞART: %s — %s" % (etiket, "; ".join(hata)))
            sonra[eski] += 1
            continue
        if grup == "E" and not o["kaldir"]:
            say["E (dokunulmadı)"] += 1
            sonra[eski] += 1
            olc_sonra_odaksiz += (eski == "ODAKSIZ")
            if AYRINTI:
                print("  [E] %s\n       gerekçe: %s\n       kaynak : %s" % (etiket, o["gerekce"], o["kaynak"]))
            continue
        if GRUP and grup not in GRUP:
            say["grup dışı"] += 1
            sonra[eski] += 1
            continue
        yeni_sinif = odak_sinifi(hedef, havuz)
        sonra[yeni_sinif] += 1
        ok = hedef.get("odak_kimlik")
        if yeni_sinif == "ODAKSIZ" or (ok and len(ok) < 2 and not hedef.get("odak_yer")
                                        and not hedef.get("yer_kon") and hedef.get("yer_id") not in havuz):
            olc_sonra_odaksiz += 1
        say["değişen"] += 1
        bekleyen[o["dosya"]].append(o)
        if AYRINTI:
            print("  [%s] %s\n       yeni   : %s%s\n       gerekçe: %s\n       kaynak : %s" % (
                sn, etiket, json.dumps(o["yeni"], ensure_ascii=False),
                " · kapsam_genis:true KALDIRILIR" if o["kaldir"] else "", o["gerekce"], o["kaynak"]))

    # ── metin düzenleme (kuru koşuda da yapılır, yazılmaz) ─────────────────────
    duzen_hata = 0
    for f, liste in bekleyen.items():
        m = yeni_metin[f]
        for o in liste:
            ar = nesne_araligi(m, o["t"], o["b"])
            if len(ar) != 1:
                print("  🔴 METİNDE NESNE BULUNAMADI (%d): %s %s" % (len(ar), f, o["b"][:60]))
                duzen_hata += 1
                continue
            i, j, bson = ar[0]
            try:
                g = duzenle(m[i:j], bson - i, o)
            except RuntimeError as e:
                print("  🔴 DÜZENLEME: %s %s — %s" % (f, o["b"][:60], e))
                duzen_hata += 1
                continue
            m = m[:i] + g + m[j:]
        yeni_metin[f] = m

    print()
    print("SINIF DAĞILIMI:", ", ".join("%s=%d" % kv for kv in sorted(sinif_say.items())))
    print("SAYAÇLAR      :", " · ".join("%s %d" % kv for kv in say.items()))
    print("ÖNCE          : ODAKSIZ %d · BEYANLI %d (toplam %d)" % (once["ODAKSIZ"], once["BEYANLI"], sum(once.values())))
    print("SONRA (app.js): KONUMLU %d · KUTULU %d · BEYANLI %d · ODAKSIZ %d"
          % (sonra["KONUMLU"], sonra["KUTULU"], sonra["BEYANLI"], sonra["ODAKSIZ"]))
    print("SONRA (odak_olc.py bugünkü sınavıyla — tek ögeli odak_kimlik'i ODAKSIZ sayar): ODAKSIZ ≈ %d"
          % olc_sonra_odaksiz)
    if duzen_hata:
        print("🔴 %d düzenleme hatası — YAZILMAYACAK" % duzen_hata)
        return 2

    # ── geri doğrulama: düzenlenmiş metni node ile oku, hedefle karşılaştır ─────
    # + ÖNGÖRÜ: arac/odak_olc.py'nin KENDİ sinifla()'sı ile dosya başına önce/sonra
    import tempfile
    import odak_olc
    # W32b (6 Ekim 2026): T4 — sinifla 26741c10 (27 Eyl) ile odak_olc'tan KALDIRILDI;
    # betik AttributeError ile çöküp ÇIKIŞ 1 ("ihlal") veriyordu. Artık açılışta ÇIKIŞ 2,
    # veriye HİÇBİR ŞEY yazılmadan. Taşıma: arac/odak_cozum.js (W36: ODAK-ASYA-0080-uygula).
    import olcu_kapisi_1006 as _w32_ok
    _w32_ok.api(odak_olc, ['sinifla'], "odak_olc")
    print()
    print("ÖNGÖRÜ — arac/odak_olc.py sinifla() ile, dosyanın TÜM maddeleri (koordinatörün sınavı):")
    print("  %-34s %14s %14s" % ("dosya", "ODAKSIZ önce→sonra", "BEYANLI önce→sonra"))
    tO = [0, 0]; tB = [0, 0]
    for f in DOSYALAR:
        if yeni_metin[f] == metinler[f]:
            continue
        tmp = os.path.join(tempfile.gettempdir(), "odak0080_" + f)
        io.open(tmp, "w", encoding="utf-8", newline="").write(yeni_metin[f])
        try:
            yeni = node_oku(tmp)
        except RuntimeError as e:
            print("🔴 %s düzenlenmiş hâli AYRIŞMIYOR: %s — YAZILMAYACAK" % (f, e))
            return 2
        eski = kayitlar[f]
        if len(yeni) != len(eski):
            print("🔴 %s madde sayısı değişti %d→%d — YAZILMAYACAK" % (f, len(eski), len(yeni)))
            return 2
        hedefler = {(o["t"], o["b"]): o for o in bekleyen[f]}
        for a, b_ in zip(eski, yeni):
            o = hedefler.get((a.get("t"), a.get("b")))
            beklenen = dict(a)
            if o:
                beklenen.update(o["yeni"])
                if o["kaldir"]:
                    beklenen.pop("kapsam_genis", None)
            if beklenen != b_:
                print("🔴 %s geri doğrulama tutmadı: %s %s — YAZILMAYACAK" % (f, a.get("t"), a.get("b", "")[:50]))
                return 2
        os.remove(tmp)
        so = [sum(1 for x in L if odak_olc.sinifla(x, havuz)[0] == "ODAKSIZ") for L in (eski, yeni)]
        sb = [sum(1 for x in L if odak_olc.sinifla(x, havuz)[0] == "BEYANLI") for L in (eski, yeni)]
        tO = [tO[0] + so[0], tO[1] + so[1]]; tB = [tB[0] + sb[0], tB[1] + sb[1]]
        print("  %-34s %8d → %-4d %8d → %-4d" % (f, so[0], so[1], sb[0], sb[1]))
    print("  %-34s %8d → %-4d %8d → %-4d" % ("TOPLAM", tO[0], tO[1], tB[0], tB[1]))
    print("  ⚠️ odak_olc.py sinifla() tek ögeli odak_kimlik'i KUTULU saymaz (len>=2 şartı); app.js sayar.")
    print("     Aradaki fark = tek kimlikli C/B maddeleri — alet kusuru, veri kusuru değil (rapora bak).")
    print("geri doğrulama: düzenlenen %d dosyanın her maddesi beklenen hâlde ✓ (başka alan değişmedi)"
          % sum(1 for f in DOSYALAR if yeni_metin[f] != metinler[f]))

    if not UYGULA:
        print("KURU KOŞU — hiçbir dosya yazılmadı. Yazmak için --uygula")
        return 0
    for f in DOSYALAR:
        if yeni_metin[f] != metinler[f]:
            io.open(os.path.join(KOK, "data", f), "w", encoding="utf-8", newline="").write(yeni_metin[f])
            print("yazıldı: data/%s (%d madde)" % (f, len(bekleyen[f])))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
