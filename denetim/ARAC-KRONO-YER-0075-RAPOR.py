# -*- coding: utf-8 -*-
"""ARAC-KRONO-YER-0075-RAPOR — KRONO-YER-0075 çıktısını (denetim/KRONO-YER-0075.json) üretir.

Koşum (depo kökünden):  py -X utf8 denetim/ARAC-KRONO-YER-0075-RAPOR.py
Yalnız OKUR (data/ ve arac/ dizinlerine YAZMAZ). Sayım ölçütü ARAC-KRONO-YER-0075.py'dedir
ve js/app.js olayKonumu/maddeOdakKutusu ile aynıdır.

A (Osmanlı listesi, 94 madde) — KARAR tablosu ELLE yazıldı: her maddenin d/yer alanı okundu.
B (devlet kronolojileri, 1136 madde) — `yer:` alanı YOK; başlıktan MAKİNE ADAYI çıkarılır.
   🔴 Makine yazmaz, aday gösterir (ARAC-KRONO-EKSIK-ADAY-0921 ile aynı ilke): eşdeğer ad tuzağı
   (Novorossiysk = Karadeniz mi Alaska mı; Rimnik = Vâlcea mı Sărat mı) ancak okuyarak çözülür.
"""
import importlib.util
import json
import os
import re
import sys
from collections import Counter

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
_sp = importlib.util.spec_from_file_location("k75", os.path.join(KOK, "denetim", "ARAC-KRONO-YER-0075.py"))
k = importlib.util.module_from_spec(_sp)
_sp.loader.exec_module(k)

# ── A · KARAR TABLOSU ───────────────────────────────────────────────────────
# (t, b'nin ilk 22 karakteri) -> (sınıf, alan, değer, güven, dayanak, gerekçe)
# alan: yer_id | odak_yer | odak_kimlik | kapsam_genis_kalir | kaynak_taramasi | yer_kon_gerekli | zaten_odakli
K1, K2, K3, K4, Z = "K1_YERI_BELLI_BAGLANMAMIS", "K2_BOLGESEL", "K3_DEVLET_BUTUNU", "K4_YERSIZ_ya_da_GEZICI", "ZATEN_ODAKLI"
YER = "yer: alanı"
GOVDE = "d: alanı (madde gövdesi)"
YAMA = "yer_id — kaynak yeri söylemiyorsa uydurma değil GÖSTERİM"

KARAR = {
    ("1877-04", "93 Harbi (1877–78 Os"): (K2, "kaynak_taramasi", ["Plevne"], "düşük", GOVDE,
        "İki cephe (Tuna+Kafkas). d yalnız Plevne'yi adlandırır; Kafkas cephesi için şehir YOK ⇒ bulunamadı. kapsam_genis kalabilir (1877 sınırı)."),
    ("1914-11", "I. Dünya Savaşı'na g"): (K3, "odak_yer", ["İstanbul"], "orta", YER + " 'Karadeniz / İstanbul' + d: Goeben/Breslau Boğaz'dan alındı",
        "Devleti bütünüyle ilgilendiren giriş; Boğaz/İstanbul çapası d'de geçiyor. kapsam_genis YERİNDE kalır."),
    ("1330-01-01", "Osmanlı-Aydın-Saru"): (K2, "odak_kimlik", ["aydin", "saruhan"], "düşük", YER + " 'Batı Anadolu' + d: üç beylik",
        "Bölgesel; iki künye id'si devletler.js'te VAR. ⚠️ odak_kimlik kimlik uzayı app.js SUZGEC.sahipKimlikte'ye bağlı — uygulayıcı kutuyu (≥2 yerleşim) ÖLÇMELİ."),
    ("1305-06-01", "Katalan birliklerin"): (K2, "kaynak_taramasi", [], "yok", "bizans (TDV) — sefer güzergâhı adlandırılmıyor",
        "Bölgesel (Batı Anadolu); şehir çapası d'de yok ⇒ bulunamadı. Not: kapsam_genis 1305'te Osmanlı'nın küçük kutusuna gider, seferin bölgesine DEĞİL."),
    ("1421-08-15", "Düzmece Mustafa ay"): (K2, "kaynak_taramasi", [], "yok", "kaynak: bulunamadı (madde kendisi belirtiyor)",
        "Rumeli'de saltanat ilanı; şehir kaynakta yok ⇒ bulunamadı."),
    ("1594-08-28", "Üç voyvodalığın ay"): (Z, "zaten_odakli", ["odak_kimlik"], "—", "veride var", "0072'de çözüldü; dokunulmaz."),
    ("1912-10-23", "Şark Ordusu'nun boz"): (K2, "odak_yer", ["Çatalca", "Selanik"], "orta", GOVDE,
        "d: Çatalca hattına çekiliş + Selânik'te teslim; Kumanova atlasta YOK (yer_kon gerekir)."),
    ("1432-06-01", "Tımar sisteminin ku"): (K3, "kapsam_genis_kalir", [], "—", YER + " '(genel…)'",
        "Süreç; tek kararın yeri yok. kapsam_genis DOĞRU beyan, dokunulmaz (0074 'S' sınıfı)."),
    ("1421-06-01", "Devşirme sisteminin"): (K3, "kapsam_genis_kalir", [], "—", YER + " '(genel)'", "Süreç; dokunulmaz."),
    ("1830-12-01", "Osmanlı'da ilk düzen"): (Z, "zaten_odakli", ["odak_yer"], "—", "veride var", "0074'te odak_yer:İstanbul uygulandı (js/app.js SENDE)."),
    ("1859-06-01", "Kırım Tatarları ve"): (K3, "kapsam_genis_kalir", [], "—", YER + " 'Kırım, Kafkasya → Osmanlı toprakları'", "Göç süreci; dokunulmaz."),
    ("1864-07-01", "Büyük Çerkes Sürgü"): (K3, "kapsam_genis_kalir", [], "—", YER, "Göç süreci; dokunulmaz."),
    ("1648-10-24", "Vestfalya Barışı —"): (K1, "yer_id", "Münster", "orta", YER + " 'Münster ve Osnabrück'",
        "İki imza yerinden yalnız Münster atlasta VAR (Osnabrück YOK). kapsam:'dis'."),
    ("1402-08-01", "Şehzadeler arasınd"): (K2, "odak_yer", ["Edirne", "Bursa", "Amasya"], "orta", GOVDE,
        "d üç payı adlandırır: Edirne (Süleyman) · Bursa (İsa) · Amasya-Tokat-Sivas (Mehmed)."),
    ("1816-09-01", "İbrâhim Paşa Necid"): (Z, "zaten_odakli", ["odak_kimlik"], "—", "veride var", "0072'de çözüldü. Kaynak hareket şehri vermiyor (bulunamadı)."),
    ("1841-02-25", "Mısır ordusu Suriye"): (K2, "odak_yer", ["Halep", "Gazze", "Adana"], "düşük", GOVDE,
        "d: 'Halep'ten Gazze'ye, Adana'dan Girit'e uzanan kuşak'. Girit'i katmak kutuyu şişirir; alternatif: kapsam_genis kalsın."),
    ("1821-02-22", "Eflak İsyanı — Ypsi"): (Z, "zaten_odakli", ["odak_kimlik"], "—", "veride var", "0072'de çözüldü."),
    ("1827-02-01", "Tımar sisteminin ta"): (Z, "zaten_odakli", ["odak_yer"], "—", "veride var", "0074'te uygulandı (SENDE)."),
    ("1828-04-26", "1828-1829 Osmanlı-R"): (Z, "zaten_odakli", ["odak_yer"], "—", "veride var", "0074'te uygulandı: Yaş+Anapa (SENDE)."),
    ("1860-05-30", "Cebel-i Lübnan'da"): (K2, "odak_yer", ["Sayda", "Şam"], "orta", GOVDE, "d: çatışma Sayda yakınında başladı, Şam'a sıçradı."),
    ("1861-06-09", "Cebel-i Lübnan Niza"): (K2, "kaynak_taramasi", [], "yok", "lubnan (TDV)",
        "Nizamnâmenin yeri ve mutasarrıflık merkezi d'de yok. Atlasta 'Deyrülkamer' VAR ama d onu anmıyor — atlas dayanak DEĞİL ⇒ bulunamadı."),
    ("1868-01-04", "Girit Nizamnâmesi:"): (K2, "odak_yer", ["Hanya", "Kandiye (Girit)"], "orta", YER + " 'Girit (Hanya, Kandiye)'", "Ada çapası; iki şehir yer: alanında adıyla."),
    ("1903-10-02", "Mürzsteg Programı:"): (K2, "odak_yer", ["Selanik", "Manastır"], "orta", YER + " 'Makedonya (Selanik, Manastır, Kosova vilâyetleri)'",
        "Konu Makedonya; toplantı yeri Mürzsteg atlasta YOK. Kosova vilâyeti için Üsküp eklenebilir ama yer: alanında adı yok."),
    ("1910-04-01", "Arnavutluk İsyanı:"): (K2, "odak_yer", ["İşkodra", "Priştine", "Üsküp"], "yüksek", YER, "Üçü yer: alanında adıyla; Kosova = vilâyet, nokta değil."),
    ("1913-06-29", "II. Balkan Savaşı'n"): (K2, "odak_yer", ["Edirne"], "düşük", GOVDE,
        "d: Osmanlı Edirne'yi geri aldı. Makedonya çapası d'de YOK ⇒ bulunamadı; tek çapa bölgeyi eksik temsil eder."),
    ("1914-10-29", "Karadeniz Baskını:"): (K2, "odak_yer", ["Hacıbey (Odessa)"], "düşük", YER + " 'Odessa, Sivastopol, Novorossiysk'",
        "Tek çapa: atlasta yalnız Hacıbey (Odessa) VAR (bölgeyi eksik temsil eder); Sivastopol YOK; ⚠️ 'Novorossiysk' aramasının tuttuğu düğüm ALASKA'daki Yakutat (59.5°K, -139.7°B) — eşdeğer ad tuzağı, KULLANILMAZ."),
    ("1915-05-27", "Sevk ve İskân (Teh"): (K3, "odak_yer", ["İstanbul"], "orta", "d: padişah tasdik etti — yer YOK",
        "Merkezî karar; kaynak yeri söylemiyor ⇒ yer_id DEĞİL odak_yer (0074 kuralı). kapsam_genis kalır."),
    ("1834-07-08", "Redif-i Asâkir-i Ma"): (K3, "odak_yer", ["İstanbul"], "orta", "d: 8 Temmuz 1834 nizamnamesi; yer_yama.js kaydı 'İstanbul'da ilan edilse de taşrada örgütlendi'",
        "H-0020. Teşkilat kararı merkezî; TDV redif--ordu yeri söylemiyor ⇒ yer_id DEĞİL odak_yer. kapsam_genis KALIR."),
    ("1387-11-01", "Timur'un İran'ın bü"): (K2, "odak_kimlik", ["serbedariler", "kert", "muzafferi"], "düşük", GOVDE + " (Serbedârîler, Kertler, Muzafferîler)",
        "Üç künye id'si devletler.js'te VAR; kapsam:'dis'. ⚠️ odak_kimlik 1387 günü sahipliğe bağlı — uygulayıcı kutuyu ÖLÇMELİ."),
    ("1819-11-01", "ʻAi Noa — Hawaii'd"): (K1, "yer_kon_gerekli", ["Kailua-Kona"], "yok", "kaynak: akademik dayanaksız işaretli",
        "Kailua-Kona atlasta YOK; koordinat kaynağı yok ⇒ bulunamadı. Madde zaten dayanaksız işaretli."),
    ("1901-06-11", "Yeni Zelanda sınırl"): (K2, "yer_kon_gerekli", ["Rarotonga"], "yok", YER, "Rarotonga atlasta YOK."),
    ("1924-01-01", "Hârizm SSC ve Buhar"): (K2, "odak_yer", ["Hîve", "Buhara", "Taşkent"], "yüksek", YER, "Üçü atlasta VAR ve yer: alanında adıyla."),
    ("1918-10-28", "Çekoslovakya'nın ba"): (K2, "odak_yer", ["Prag", "Bratislava", "Kassa (Košice)"], "orta", YER, "d yer vermiyor; yer: alanı toprak temsilcisi üç kent."),
    ("1918-10-30", "Avusturya Cumhuriye"): (K2, "odak_yer", ["Viyana", "Graz"], "orta", YER, ""),
    ("1918-11-03", "Villa Giusti Mütar"): (K1, "yer_id", "Padova", "yüksek", GOVDE + " 'Villa Giusti'de imzaladı' + yer: 'Padova (Villa Giusti)'",
        "Villa Giusti Padova yakınında; atlasta Padova VAR. Trento/Trieste toprak devri ayrı (Değişmez 2 evreni)."),
    ("1918-11-11", "Avusturya-Macaristan"): (K2, "odak_yer", ["Viyana", "Budin", "Prag", "Zagreb", "Belgrad", "Varşova"], "orta", YER,
        "Toplu devir günü; geniş kutu. Alternatif: kapsam_genis kalsın."),
    ("1918-12-01", "Sırp-Hırvat-Sloven"): (K2, "odak_yer", ["Belgrad", "Zagreb", "Saraybosna", "Suçava (Suceava)", "Çernovitz (Çernivtsi)"], "orta", YER, ""),
    ("1919-09-10", "Saint-Germain Antla"): (K1, "yer_kon_gerekli", ["Saint-Germain-en-Laye"], "yok", YER,
        "İmza yeri atlasta YOK. Emsal: data/yer_yama.js Sevr'i 'en yakın anlamlı yerleşim' Paris ile bağladı (not: ile) — aynı yol seçilebilir."),
    ("1920-06-04", "Trianon Antlaşması"): (K1, "yer_kon_gerekli", ["Trianon"], "yok", YER, "Trianon atlasta YOK; emsal Sevr→Paris (yer_yama.js)."),
    ("1919-06-28", "Versailles Antlaşm"): (K2, "odak_yer", ["Strazburg", "Metz", "Colmar", "Mulhouse"], "yüksek", GOVDE + " 'Haritada bu gün Strazburg, Metz, Colmar, Mulhouse … geçer'",
        "İmza yeri Versailles atlasta YOK; haritadaki karşılık toprak devri."),
    ("1919-11-27", "Neuilly Antlaşması"): (K2, "odak_yer", ["Gümülcine", "İskeçe", "Dedeağaç (Alexandroupoli)", "Sofya"], "orta", YER, "Neuilly atlasta YOK."),
    ("1527-01-01", "Cetin Meclisi — Hı"): (K1, "yer_id", "Cetin", "yüksek", YER, ""),
    ("1431-01-01", "Bugüne ulaşan en es"): (K2, "kaynak_taramasi", [], "yok", "tahrir (TDV)", "Sancak merkezi d'de yok; atlas dayanak DEĞİL ⇒ bulunamadı."),
    ("1520-01-01", "Tarihçi Neşrî'nin ö"): (K1, "yer_id", "Bursa", "orta", YER, "'Bursa' birebir VAR (ayrıca 'Yenişehir (Bursa)' düğümü var — o DEĞİL)."),
    ("1574-01-01", "Darüssaade ağalığı"): (K1, "yer_id", "İstanbul", "yüksek", YER + " 'Topkapı Sarayı'", "Saray İstanbul'da; olay yeri saray."),
    ("1648-01-01", "Evliya Çelebi İznik"): (K1, "yer_id", "İznik", "yüksek", YER, ""),
    ("1702-01-01", "Naîmâ vakanüvis ola"): (K1, "yer_id", "İstanbul", "orta", YER, ""),
    ("1734-01-01", "Naîmâ Tarihi (Ravz"): (K1, "yer_id", "İstanbul", "yüksek", YER + " + Müteferrika Matbaası", ""),
    ("1756-12-22", "Veliaht Şehzade Meh"): (K1, "yer_id", "İstanbul", "orta", YER, ""),
    ("1723-09-23", "Petersburg Antlaşm"): (K1, "yer_id", "St. Petersburg", "yüksek", YER, ""),
    ("1734-05-31", "Nâdir'in Rus elçisi"): (K4, "kaynak_taramasi", [], "yok", YER + " 'Nâdir'in karargâhı'", "Gezici ordugâh; kaynak audiyans yerini vermiyor ⇒ bulunamadı."),
    ("1735-08-23", "Kutsal Haç kalesini"): (K2, "odak_yer", ["Terek deltası (Kızlar)"], "düşük", YER + " 'Sulak ırmağı, Kızlar (Terek)'",
        "Tek atlas düğümü 'Terek deltası (Kızlar)'; Kutsal Haç kalesi atlasta YOK. Düğümün Kızlar kalesini temsil edip etmediği ölçülmeli."),
    ("1737-07-14", "Avusturya Osmanlı'y"): (K3, "odak_yer", ["Viyana"], "orta", YER + " 'Viyana' + kaynak ilan yerini vermiyor",
        "İmparatorun resmî ilanı; yer_id değil odak_yer. Cephe için Niş (d'de geçer) eklenebilir."),
    ("1738-08-17", "Adakale'nin Avustur"): (K1, "yer_kon_gerekli", ["Adakale"], "yok", YER,
        "Adakale atlasta YOK. En yakın düğüm 'Orsova (Eski Orsova)' — d kuşatmayı 'Orsova ve Adakale' der ama Adakale DEĞİL."),
    ("1788-01-25", "Melek Mehmed Paşa'n"): (K1, "yer_id", "İstanbul", "orta", YER, "Azil/tayin; yer: alanı İstanbul — kaynağın yeri söylediği teyit edilebilir."),
    ("1788-02-22", "Serdâr-ı ekrem Koca"): (K1, "yer_id", "İstanbul", "orta", YER + " 'İstanbul, Rumeli'", "Sefere çıkış İstanbul'dan."),
    ("1788-05-10", "Cezayirli Gazi Hasa"): (K2, "odak_yer", ["Özi"], "orta", GOVDE + " 'Özi ve Kılburun hattında baskı'", "yer: sadece 'Karadeniz'; d çapa veriyor."),
    ("1788-01-01", "Yılan Adası (Fidoni"): (K1, "yer_kon_gerekli", ["Yılan Adası"], "yok", YER, "Atlasta YOK."),
    ("1789-05-01", "Kalas bozgunu"): (K1, "yer_id", "Kalas", "yüksek", YER + " 'Kalas (Galaţi)'", "Atlas adı 'Kalas (Galatz)'; 'Kalas' birebir çözülür."),
    ("1789-06-07", "Koca Yûsuf Paşa'nın"): (K4, "kaynak_taramasi", [], "yok", YER + " 'Ordugâh'", "Gezici; azil merkezden mi ordugâhtan mı d'de yok (0074 raporunda 'ölçülmeli')."),
    ("1789-08-01", "Fokşani bozgunu"): (K1, "yer_kon_gerekli", ["Fokşani"], "yok", YER, "Atlasta YOK."),
    ("1789-09-22", "Rimnik (Boze) bozg"): (K1, "yer_kon_gerekli", ["Rimnik"], "yok", YER + " 'Rimnik ve Boza suyu, Eflak'",
        "⚠️ EŞDEĞER AD TUZAĞI: atlastaki 'Rimnik (Râmnicu Vâlcea)' 45.1°K 24.4°D — Râmnicu Vâlcea. Boza suyu (Buzău) ile anılan savaş Râmnicu Sărat çevresinde; kaynakla ÖLÇÜLMELİ, bağlanmaz."),
    ("1789-10-11", "İsmâil Kalesi'nin t"): (K1, "yer_id", "İsmail", "yüksek", YER, "Atlas adı 'İsmail' (yer: 'İsmâil')."),
    ("1789-12-03", "Cezayirli Gazi Hasa"): (K1, "yer_id", "İstanbul", "orta", YER, ""),
    ("1790-03-30", "Serdâr-ı ekremin Şu"): (K1, "yer_id", "Şumnu", "yüksek", YER, ""),
    ("1790-04-16", "Eski Hırsova'nın dü"): (K1, "yer_kon_gerekli", ["Eski Hırsova"], "yok", YER, "Atlasta YOK."),
    ("1790-01-01", "Kalafat çıkarması v"): (K1, "yer_kon_gerekli", ["Kalafat"], "yok", YER, "Atlasta YOK."),
    ("1790-06-08", "Avusturya kuvvetler"): (K1, "yer_id", "Yergöğü", "yüksek", YER + " 'Yergöğü (Giurgiu)'", ""),
    ("1789-01-01", "Akkirman'ın Ruslar"): (K1, "yer_id", "Akkirman", "yüksek", YER, ""),
    ("1791-01-01", "Rusların İbrâil ku"): (K1, "yer_id", "İbrail", "yüksek", YER, "Atlas adı 'İbrail'."),
    ("1791-02-27", "Koca Yûsuf Paşa'nın"): (K1, "yer_id", "Şumnu", "yüksek", YER + " + başlık 'Şumnu ordugâhında'", ""),
    ("1791-07-09", "Maçin bozgunu"): (K1, "yer_kon_gerekli", ["Maçin"], "yok", YER, "Atlasta YOK."),
    ("1790-09-06", "İstanbul meşveret m"): (K1, "yer_id", "İstanbul", "yüksek", YER + " + başlık", ""),
    ("1790-09-18", "Yergöğü Mütarekesi"): (K1, "yer_id", "Yergöğü", "yüksek", YER, ""),
    ("1790-09-21", "Yergöğü Mütarekesi'"): (K1, "yer_id", "Yergöğü", "yüksek", YER, ""),
    ("1791-06-11", "Yergöğü Mütarekesi'"): (K1, "yer_kon_gerekli", ["Ziştovi"], "yok", YER + " 'Ziştovi'", "Ziştovi atlasta YOK (başlıktaki Yergöğü mütarekesi konu, yer: Ziştovi)."),
    ("1791-08-08", "Kalas'ta Vâsıf Efen"): (K1, "yer_id", "Kalas", "yüksek", YER + " + başlık", ""),
    ("1791-08-11", "Kalas (Galaç) Müta"): (K1, "yer_id", "Kalas", "yüksek", YER + " + başlık", ""),
    ("1790-12-30", "Ziştovi barış konfe"): (K1, "yer_kon_gerekli", ["Ziştovi"], "yok", YER, "Atlasta YOK."),
    ("1791-06-10", "Ziştovi görüşmeleri"): (K1, "yer_kon_gerekli", ["Ziştovi"], "yok", YER + " 'Ziştovi, Bükreş'", "Ziştovi YOK; ikincil çapa Bükreş atlasta VAR (heyet oraya çekildi)."),
    ("1791-07-18", "Barış müzakereleri"): (K1, "yer_kon_gerekli", ["Ziştovi"], "yok", YER, "Atlasta YOK."),
    ("1791-08-12", "Ziştovi Antlaşması'"): (K1, "yer_id", "İstanbul", "orta", YER, "Padişah onayı İstanbul'da."),
    ("1791-08-31", "Ziştovi tasdiknâmel"): (K1, "yer_kon_gerekli", ["Ziştovi"], "yok", YER, "Atlasta YOK."),
    ("1791-10-16", "Potemkin'in ölümü —"): (K2, "odak_yer", ["Yaş"], "orta", "başlık 'Yaş görüşmelerinin…' + 0074 raporu", "yer: 'Boğdan' bölge; Boğdan çapası Yaş."),
    ("1791-11-10", "Yaş'ta Osmanlı-Rus"): (K1, "yer_id", "Yaş", "yüksek", YER + " 'Yaş (Iaşi)'", ""),
    ("1792-01-07", "Yaş'ta on dördüncü"): (K1, "yer_id", "Yaş", "yüksek", YER, ""),
    ("1792-01-18", "Yaş Antlaşması'nın"): (K1, "yer_id", "Yaş", "yüksek", YER, ""),
    ("1792-01-27", "Yaş'ta on altıncı o"): (K1, "yer_id", "Yaş", "yüksek", YER, ""),
    ("1792-02-10", "Yaş tasdiknâmelerin"): (K1, "yer_id", "Yaş", "yüksek", YER, ""),
    ("1792-05-03", "Koca Yûsuf Paşa'nın"): (K1, "yer_id", "İstanbul", "orta", YER, ""),
    ("1792-05-04", "Melek Mehmed Paşa'n"): (K1, "yer_id", "İstanbul", "orta", YER, ""),
    ("1886-01-01", "Fransız-Osmanlı düz"): (K2, "kaynak_taramasi", [], "yok", YER + " 'Tunus-Trablusgarp sınırı'", "Sınır çizgisi olayı; uç noktalar d/kaynakta yok ⇒ bulunamadı."),
    ("1892-01-01", "İkinci Fransız-Osma"): (K2, "kaynak_taramasi", [], "yok", YER, "Aynı."),
    ("1906-10-01", "Refah Anlaşması —"): (K1, "yer_kon_gerekli", ["Refah"], "yok", YER + " 'Refah, Sina'",
        "Refah atlasta YOK; ⚠️ 'Sina' aramasının tuttuğu 'Tûr (Sînâ)' (28.2°K) Refah'a ait DEĞİL — kullanılmaz."),
}

# ── B · başlıktan makine adayı ──────────────────────────────────────────────
TOK = re.compile(r"[A-ZÇĞİÖŞÜÂÎÛ][A-Za-zÇĞİÖŞÜÂÎÛçğıöşüâîû\-]*(?:['’][A-Za-zçğıöşüâîû]+)?")


def b_adaylar(b):
    toks = [t.split("'")[0].split("’")[0] for t in TOK.findall(b or "")]
    bul, gorulen = [], set()
    for n in (3, 2, 1):
        for i in range(len(toks) - n + 1):
            g = " ".join(toks[i:i + n])
            nk = k.norm(g)
            if nk in k.NORM_AD and nk not in gorulen:
                gorulen.add(nk)
                bul.append({"parca": g, "atlas": k.NORM_AD[nk]})
    # daha uzun bir eşleşmenin İÇİNDE kalan kısa eşleşmeyi at
    bul = [x for x in bul if not any(x is not y and k.norm(x["parca"]) in k.norm(y["parca"]) and len(y["parca"]) > len(x["parca"]) for y in bul)]
    return bul


def cozulur(ad):
    return ad in k.AD


def main():
    d = json.load(open(os.path.join(KOK, "denetim", "_krono0075_ham.json"), encoding="utf-8"))
    A = [m for m in d["A"] if not k.coz(m)]
    B = [m for m in d["B"] if not k.coz(m)]
    yuklu_k = set(re.findall(r"data/(kronoloji_[a-z0-9_]+\.js)", open(os.path.join(KOK, "index.html"), encoding="utf-8").read()))

    hatalar = []
    A_out, kullanildi = [], set()
    for m in A:
        # anahtar = (t, başlık ÖNEKİ): önek uzunluğu serbest; tam bir eşleşme ŞART, birden çoksa hata
        adaylar_k = [a for a in KARAR if a[0] == m["t"] and m["b"].startswith(a[1])]
        if len(adaylar_k) > 1:
            hatalar.append(("COK_ANAHTAR", m["t"], m["b"][:30]))
        anahtar = adaylar_k[0] if adaylar_k else (m["t"], m["b"][:22])
        kar = KARAR.get(anahtar)
        bugun = {"yer": m.get("yer"), "kapsam_genis": bool(m.get("kapsam_genis")), "odak": [a for a in k.odak(m) if a != "kapsam_genis"], "kapsam": m.get("kapsam")}
        if not kar:
            A_out.append({"dosya": m["_dosya"], "t": m["t"], "b": m["b"], "bugun": bugun, "sinif": "KARAR_YOK"})
            hatalar.append(("KARAR_YOK", anahtar))
            continue
        kullanildi.add(anahtar)
        sinif, alan, deger, guven, dayanak, gerekce = kar
        # 🔴 "yer_id gerçekten var mı" — uydurma yasağı: önerilen her ad atlasta çözülmeli
        if alan in ("yer_id", "odak_yer"):
            for ad in ([deger] if isinstance(deger, str) else deger):
                if not cozulur(ad):
                    hatalar.append(("COZULMUYOR", anahtar, ad))
        A_out.append({"dosya": m["_dosya"], "t": m["t"], "b": m["b"], "bugun": bugun, "sinif": sinif,
                      "oneri": {"alan": alan, "deger": deger}, "guven": guven, "dayanak": dayanak, "gerekce": gerekce})
    artik = set(KARAR) - kullanildi

    # ── B ──
    B_out = []
    sayac = Counter()
    for m in B:
        ad = b_adaylar(m["b"])
        kg = bool(m.get("kapsam_genis"))
        tek = [x for x in ad if len(x["atlas"]) == 1]
        if len(ad) == 1 and len(ad[0]["atlas"]) == 1:
            s = "B1_TEK_ADAY" + ("_KG" if kg else "")
        elif len(ad) >= 2:
            s = "B2_COK_ADAY" + ("_KG" if kg else "")
        elif ad:
            s = "B1x_ESDEGER_AD_TEK_ADAY" + ("_KG" if kg else "")
        else:
            s = "B3_ADAYSIZ_KG" if kg else "B4_ADAYSIZ"
        sayac[s] += 1
        B_out.append({"dosya": m["_dosya"], "t": m["t"], "b": m["b"], "kapsam": m.get("kapsam"), "kapsam_genis": kg,
                      "yuklu": m["_dosya"] in yuklu_k, "sinif": s,
                      "aday": [{"parca": x["parca"], "atlas": x["atlas"]} for x in ad],
                      "not": "MAKİNE ADAYI — başlıkta ad geçiyor; OLAY YERİ olduğu ve eşdeğer ad tuzağı OKUNARAK teyit edilmeli" if ad else ""})

    sayim_A = Counter(x["sinif"] for x in A_out)
    alan_A = Counter(x.get("oneri", {}).get("alan") for x in A_out)
    sonuc = {
        "oturum": "KRONO-YER-0075", "tarih": "2026-09-21", "yazdi_data": False,
        "olcut": "js/app.js olayKonumu (yer_kon | yer_id BİREBİR atlas adı) + maddeOdakKutusu (odak_yer|odak_kimlik|odak_kutu_kaynak) + kapsam_genis",
        "evren": {"A_olaylar": len(d["A"]), "A_noktasiz": len(A), "B_kronoloji": len(d["B"]), "B_noktasiz": len(B)},
        "A_sinif_dagilimi": dict(sayim_A), "A_oneri_alanlari": {str(a): v for a, v in alan_A.items()},
        "B_sinif_dagilimi": dict(sayac),
        "denetim_hatalari": [list(map(str, h)) for h in hatalar], "kullanilmayan_karar_anahtari": [list(x) for x in artik],
        "A_maddeler": A_out, "B_maddeler": B_out,
    }
    yol = os.path.join(KOK, "denetim", "KRONO-YER-0075.json")
    json.dump(sonuc, open(yol, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    ozet = {k_: v for k_, v in sonuc.items() if k_ not in ("A_maddeler", "B_maddeler", "denetim_hatalari", "kullanilmayan_karar_anahtari")}
    ozet["denetim_hatasi_sayisi"] = len(hatalar)
    ozet["denetim_hatalari_ilk10"] = [list(map(str, h)) for h in hatalar[:10]]
    ozet["kullanilmayan_karar_anahtari_sayisi"] = len(artik)
    ozet["kullanilmayan_ilk10"] = [list(x) for x in list(artik)[:10]]
    print(json.dumps(ozet, ensure_ascii=False, indent=1))
    return sonuc


if __name__ == "__main__":
    main()
