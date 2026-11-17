# -*- coding: utf-8 -*-
"""Aşama 0 — KAYNAK-HARITASI-<bolge>.tsv üretici (LAB: Hint, Orta Asya, Afrika; 17 Kasım 2026).
Kolonlar (PLAN-KAYNAK-TARAMA-1117.md): ulke | dil | kaynak | tur | url | tam_govde (E/K/H/?) | sehir_sorgulanabilir | ornek_sorgu | olcum_notu
tam_govde: E = gömülü tarayıcıyla TAM METİN okundu (karakter sayısı notta) · K = KISMEN (ana/dergi sayfası açıldı, makale gövdesi ölçülmedi) · H = engelli/okunamadı · ? = ölçülmedi (aday; sayılmaz).
Yalnız LAB'ın 16-17 Kasım ölçümleri 'E/K/H' alır; ölçülmeyen aday kaynaklar '?' kalır. Vikipedi/blog/forum yok."""
import csv, os
D = os.path.dirname(os.path.abspath(__file__))
KOL = ["ulke", "dil", "kaynak", "tur", "url", "tam_govde", "sehir_sorgulanabilir", "ornek_sorgu", "olcum_notu"]
GEN = [  # her bölgeye ortak, ölçülmüş genel kaynaklar
 ("(genel)", "en", "Encyclopaedia Britannica", "ansiklopedi", "https://www.britannica.com/place/<Ad>", "E", "E (/place/<Ad>; slug tahmini, 404 = slug yok)", "britannica.com/place/Ahmedabad", "13 404 kr (Ahmedabad); tek başına yetmez (CLAUDE.md çift teyit)"),
 ("(genel)", "en", "Encyclopaedia Iranica", "ansiklopedi", "https://www.iranicaonline.org/articles/<slug>", "E", "E (slug)", "iranicaonline.org/articles/bukhara-i", "8 529 kr (BUKHARA i); WebFetch 403 veriyordu, gömülü tarayıcıda açılıyor"),
 ("(genel)", "tr", "TDV İslâm Ansiklopedisi", "ansiklopedi", "https://islamansiklopedisi.org.tr/<slug>", "E", "E (arama /arama/?q=; madde BAŞLIĞI eşleşmesi şart)", "islamansiklopedisi.org.tr/hucend", "~7 400 kr madde gövdesi (Hucend); 429 riski: ≥10 sn aralık"),
 ("(genel)", "en", "UNESCO World Heritage Centre", "kurumsal", "https://whc.unesco.org/en/list/<no>", "E", "K (yalnız dünya mirası şehirleri)", "whc.unesco.org/en/list/1551", "14 806 kr (Historic City of Ahmadabad)"),
 ("(genel)", "en", "Cambridge Core (dergi/kitap)", "dergi/monografi", "https://www.cambridge.org/core", "K", "K (arama ölçülmedi)", "cambridge.org/core/journals/journal-of-african-history", "dergi sayfası 6 398 kr; makale/bölüm tam metni giriş/ücret isteyebilir"),
 ("(genel)", "en", "JSTOR", "dergi", "https://www.jstor.org", "K", "H (makale tam metni 'library access' ister)", "jstor.org/journal/jafricanhistory", "kısa 'Client Challenge' kendiliğinden geçti; dergi sayfası 2 456 kr; makale metni yok"),
 ("(genel)", "en", "Oxford Academic (OUP)", "dergi/monografi", "https://academic.oup.com", "K", "? ", "academic.oup.com", "ilk girişte Cloudflare 'Just a moment' (403), 10 sn bekleyince açıldı; ana sayfa 2 039 kr; makale metni ölçülmedi"),
 ("(genel)", "fr", "Persée", "dergi arşivi", "https://www.persee.fr", "K", "? ", "persee.fr", "ana sayfa 6 470 kr; Fransızca makale tam metni ölçülmedi"),
 ("(genel)", "tr/en", "DergiPark", "dergi platformu", "https://dergipark.org.tr", "K", "H (ARAMA CAPTCHA)", "dergipark.org.tr/tr/pub/otam", "dergi ana sayfası açılıyor (OTAM 3 968 kr); arama 'gerçek kişi doğrulaması' ister"),
]
HINT = [
 ("Hindistan", "en", "Imperial Gazetteer of India (DSAL, Chicago)", "gazetteer", "https://dsal.uchicago.edu/reference/gazetteer/", "K", "? (şehir girişi sayfası ölçülmedi)", "dsal.uchicago.edu/reference/gazetteer/", "ana sayfa açıldı (1 434 kr); şehir girişi tam gövdesi ölçülmedi — F2'de denenecek"),
 ("Hindistan", "en", "Sewell, A Forgotten Empire (Vijayanagar) — archive.org tam metin", "monografi", "https://archive.org/stream/forgottenempire00robe/forgottenempire00robe_djvu.txt", "E", "H (şehir arama yok; metinde ara)", "sayfayı aç, innerText ara", "884 536 kr; JS fetch 45 sn'yi aşar, sayfa olarak aç"),
 ("Hindistan", "en", "Majumdar (ed.), HCIP Vol. VI The Delhi Sultanate — archive.org", "monografi", "https://archive.org/stream/delhisultanate00bhar/delhisultanate00bhar_djvu.txt", "E", "H (metinde ara)", "sayfayı aç, innerText ara", "433 869 kr; ilk istek 504 verdi, yenilenince açıldı"),
 ("Hindistan", "en", "Majumdar (ed.), HCIP Vol. IV The Age of Imperial Kanauj — archive.org", "monografi", "https://archive.org/stream/ageofimperialkan04bhar/ageofimperialkan04bhar_djvu.txt", "E", "H (metinde ara)", "—", "ajanlar parti 4'te okudu; LAB karakter ölçümü yapmadı (okundu)"),
 ("Hindistan", "en", "Majumdar (ed.), HCIP Vol. V The Struggle for Empire — archive.org", "monografi", "https://archive.org/details/historycultureof0000unse_n2v6", "H", "—", "—", "ödünç/kısıtlı: tam metin 252 kr (okunamadı)"),
 ("Bangladeş", "en", "Banglapedia (Asiatic Society of Bangladesh)", "ansiklopedi", "https://en.banglapedia.org/index.php/<Ad>", "E", "E (/index.php/<Ad>)", "en.banglapedia.org/index.php/Dhaka", "86 950 kr (Dhaka)"),
 ("Hindistan/Pakistan/Bangladeş", "fa/ar", "Elliot & Dowson, History of India as Told by Its Own Historians; Ferishta; Barani", "kronik neşri", "archive.org", "?", "?", "—", "ölçülmedi (aday)"),
 ("Hindistan", "en", "Epigraphia Indica / Epigraphia Carnatica / ASI raporları", "epigrafi", "archive.org / indianculture.gov.in", "?", "?", "—", "ölçülmedi (aday; Bîcâpur/Bîdar/Golkonda 1281 öncesi ilk anılış için gerekli)"),
 ("Hindistan", "en", "Hooja, A History of Rajasthan; Tillotson, Jaipur Nama", "monografi", "(kitap)", "?", "—", "—", "web'de tam metin bulunamadı; Çitor/Udeypûr/Codhpûr/Caypûr için gerekli"),
 ("Sri Lanka", "en", "K. M. de Silva, A History of Sri Lanka; Paranavitana", "monografi", "(kitap)", "?", "—", "—", "ölçülmedi (aday; Kandy/Kotte/Dambadeniya için)"),
 ("Nepal", "en", "Regmi, Ancient Nepal; Slusser, Nepal Mandala", "monografi", "(kitap)", "?", "—", "—", "ölçülmedi (aday; Katmandu k12'de var)"),
 ("Maldivler", "en", "Maloney, People of the Maldive Islands; Bell, The Maldive Islands", "monografi", "archive.org", "?", "?", "—", "ölçülmedi (aday; Malé TDV'de şehre özgü tarih yok)"),
 ("Hindistan", "en/fr/pt/nl", "Sömürge arşivi neşirleri (Goa/Daman: Portekiz; Pondichéry/Karaikal/Mahé/Yanam: Fransız; Tranquebar: Danimarka; Serampore: Danimarka)", "arşiv neşri", "gallica.bnf.fr / archive.org", "?", "?", "—", "ölçülmedi (aday)"),
]
ORTA = [
 ("Özbekistan/Türkmenistan/Tacikistan/Kazakistan/Kırgızistan", "tr", "TDV (Buhara, Semerkant, Taşkent, Hokand, Hîve, Hucend, Endican, Tirmiz, Aşkabat…)", "ansiklopedi", "https://islamansiklopedisi.org.tr", "E", "E", "islamansiklopedisi.org.tr/hucend", "Hucend tam gövde; 14+ şehir parti 1-3'te yazıldı"),
 ("Moğolistan/Sincan", "tr", "TDV (Karakorum, Kâşgar, Hoten, Turfan, Kulca, Uygurlar, Karahıtaylar)", "ansiklopedi", "https://islamansiklopedisi.org.tr", "E", "K (Hotan/Yarkent/Kuça/Ürümçi için şehre özgü madde yok)", "islamansiklopedisi.org.tr/hoten", "Hoten/Turfan/Kâşgar tam gövde okundu"),
 ("Özbekistan/Tacikistan", "en", "Iranica (Bukhara, Khotan, Kashgar, Yarkand, Kucha, Turfan)", "ansiklopedi", "https://www.iranicaonline.org", "E", "E", "iranicaonline.org/articles/yarkand", "Iranica slug'ları ajanca doğrulandı: khotan-i, khotan-ii, kashgar, yarkand, kucha, turfan, chinese-turkestan"),
 ("Orta Asya", "en", "Barthold, Turkestan Down to the Mongol Invasion; Bosworth, The Ghaznavids; Golden; Soucek", "monografi", "archive.org", "?", "?", "—", "ölçülmedi (aday; çift teyit için TDV'ye karşı)"),
 ("Orta Asya", "tr", "İSAM / ktp.isam.org.tr; TTK Belleten (belleten.gov.tr)", "veritabanı/dergi", "https://ktp.isam.org.tr", "?", "?", "—", "ölçülmedi (aday)"),
 ("Kazakistan/Kırgızistan/Özbekistan", "ru", "Rus/Kazak/Özbek akademik tarih (Bol'shaya Rossiyskaya Entsiklopediya, Qazaq Entsiklopediyası)", "ansiklopedi", "bigenc.ru", "?", "?", "—", "ölçülmedi (aday; Taraz, Sayram, Çimkent, Semipalatinsk için gerekli)"),
 ("Sincan", "zh/en", "Millward, Beyond the Pass; Han shu/Tang shu çevirileri", "monografi/kaynak", "(kitap)", "?", "—", "—", "ölçülmedi (aday; Hotan/Yarkent/Kuça/Gulca/Ürümçi/Turfan)"),
 ("Moğolistan", "en/mn", "Bawden, Modern History of Mongolia; Moğol akademik", "monografi", "(kitap)", "?", "—", "—", "ölçülmedi (aday; Urga/Ulan Bator 1639↔1778 çelişkisi)"),
]
AFRIKA = [
 ("Güney Afrika/Namibya/Zimbabve", "en", "South African History Online (SAHO)", "kurumsal ansiklopedi", "https://www.sahistory.org.za", "E", "K (site araması ölçülmedi)", "sahistory.org.za/place/<yer>", "ana sayfa 8 872 kr; zaman çizelgeleri parti 1'de kullanıldı (Cape Town, Pretoria, Bloemfontein)"),
 ("Namibya", "en", "Dierks, Chronology of Namibian History (klausdierks.com)", "kronoloji", "http://www.klausdierks.com", "E", "K", "klausdierks.com/Chronology/", "ajan okudu (Windhoek); hakemli değil: tek kaynak olarak beyan"),
 ("Batı/Orta/Güney Afrika", "en", "Dictionary of African Christian Biography (DACB)", "biyografi sözlüğü", "https://dacb.org", "K", "? ", "dacb.org", "ana sayfa 1 465 kr; Soyo/Kongo 1491 vaftizi için kullanıldı (ajan); şehir sorgusu ölçülmedi"),
 ("Batı Afrika (Frankofon)", "fr", "Persée (Cahiers d'études africaines, Journal des Africanistes, Afrique & Histoire…)", "dergi arşivi", "https://www.persee.fr", "K", "?", "persee.fr", "site açılıyor; Fransızca makale tam metni ölçülmedi"),
 ("Afrika", "en", "Journal of African History (Cambridge/JSTOR)", "dergi", "https://www.cambridge.org/core/journals/journal-of-african-history", "K", "H (JSTOR giriş)", "—", "Cambridge dergi sayfası 6 398 kr; makale metni giriş ister"),
 ("Afrika", "en", "UNESCO WHC (Agadez 1268, Abomey 323, Djenné 116, Mapungubwe, Büyük Zimbabve)", "kurumsal", "https://whc.unesco.org/en/list/<no>", "E", "K", "whc.unesco.org/en/list/1268", "Agadez parti 4'te (çift teyit)"),
 ("Batı Afrika", "ar/en", "Tarikh al-Sudan / Tarikh al-Fattash çevirileri (Hunwick; Levtzion–Hopkins, Corpus of Early Arabic Sources)", "kronik neşri", "archive.org", "?", "?", "—", "ölçülmedi (aday; Agadez/Cenne/Segu/Kumbî Sâlih/Awdaghust)"),
 ("Orta/Doğu Afrika", "pt/en/nl", "Sömürge arşivi neşirleri (Portekiz: Monumenta Missionaria Africana; Hollanda; Alman koloni belgeleri)", "arşiv neşri", "archive.org", "?", "?", "—", "ölçülmedi (aday; Soyo, Boma, Loango, Lüderitz)"),
 ("Afrika", "en", "Historical Dictionary of … serileri (Scarecrow/Rowman)", "sözlük", "(kitap)", "?", "?", "—", "ölçülmedi (aday; web'de tam metin yok)"),
 ("Nijerya/Gana/Mali", "en", "Britannica (Kumasi, Abomey, Segou, Djenné, Niani, Kano…)", "ansiklopedi", "https://www.britannica.com", "E", "E (slug)", "britannica.com/place/Kumasi", "parti 4'te kullanıldı; Boma, Mao, Loango, Kumbî, Birni N'gazargamu slug'ı 404"),
]
for ad, bolge in (("hint", HINT), ("orta-asya", ORTA), ("afrika", AFRIKA)):
    satirlar = bolge + GEN
    yol = os.path.join(D, "KAYNAK-HARITASI-" + ad + ".tsv")
    with open(yol, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, delimiter="\t"); w.writerow(KOL); w.writerows(satirlar)
    print(ad, len(satirlar), "satır; E:", sum(1 for s in satirlar if s[5] == "E"), "K:", sum(1 for s in satirlar if s[5] == "K"), "H:", sum(1 for s in satirlar if s[5] == "H"), "?:", sum(1 for s in satirlar if s[5] == "?"))
