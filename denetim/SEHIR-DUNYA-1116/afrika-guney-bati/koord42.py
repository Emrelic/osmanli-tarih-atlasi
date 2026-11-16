# -*- coding: utf-8 -*-
"""42 koordinatsız Afrika şehri — koordinat arama sonucu (LAB, 16 Kasım 2026).
Kaynak: GeoNames arama sayfası (geonames.org/search.html?q=<ad>&country=<kod>), sayfada görünen DMS değeri olduğu gibi alındı
(koord_kaynak). GeoNames yalnız KOORDİNAT BULMAK içindir, atlas verisinde kaynak sayılmaz.
durum: kesin  = ülke içinde tek yerleşim adayı ya da bağlamla (ülke/koloni) tek yerleşim
       olasi  = birden çok aday var, biri öne çıkıyor (seçim gerekçesi notta; F2'de kaynakla teyit edilmeli)
       belirsiz = birden çok aday, seçilemedi (adaylar notta)
       bulunamadi = GeoNames'te yerleşim kaydı yok (yalnız akarsu/boş) ya da 1900 listesinde ad 'bulunamadı'
Getty TGN ve NGA GNS denenmedi: sayfa sorgusu form/indirme gerektirir (bu oturumda ulaşılamadı → ölçülemedi)."""
import csv, io, os, re, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
D = os.path.dirname(os.path.abspath(__file__))
def dec(s):
    m = re.match(r"(\d+)°(\d+)′([\d.]+)″ ([NSEW])", s.strip())
    d, mi, se, h = int(m.group(1)), int(m.group(2)), float(m.group(3)), m.group(4)
    v = d + mi / 60 + se / 3600
    return round(-v if h in "SW" else v, 5)
# (ad_1900, ülke, durum, secilen DMS 'lat, lon' ya da '', not)
K = [
 ("Gambaga", "Gana", "kesin", "10°31′55.92″ N, 0°26′16.19″ W", "GeoNames PPL Gambaga (East Mamprusi)"),
 ("Britstown", "Güney Afrika", "kesin", "30°35′14.86″ S, 23°30′14.08″ E", "GeoNames PPL Britstown (Emthanjeni)"),
 ("Griquatown", "Güney Afrika", "kesin", "28°51′05.08″ S, 23°15′08.93″ E", "GeoNames 'Griekwastad' (modern ad) PPL"),
 ("Herschel", "Güney Afrika", "kesin", "30°36′55.26″ S, 27°09′50.69″ E", "GeoNames PPL Herschel (Senqu) tek kayıt"),
 ("Sutherland", "Güney Afrika", "olasi", "32°23′39.66″ S, 20°39′39.85″ E", "14 sonuç; Ümit Burnu Kolonisi ⇒ Karoo Hoogland (K. Cape) şehri; KZN çiftlik/Limpopo tepe adayları elendi"),
 ("Umzimkulu", "Güney Afrika", "kesin", "30°15′38.92″ S, 29°56′24.79″ E", "GeoNames PPL Umzimkulu (Eastern Cape)"),
 ("Verulam", "Güney Afrika", "kesin", "29°38′36.24″ S, 31°02′49.52″ E", "GeoNames PPL Verulam (Natal/eThekwini); Limpopo çiftliği elendi"),
 ("Banana", "Kongo DC", "olasi", "6°00′14.87″ S, 12°23′57.44″ E", "Bas-Congo kıyısı (Kongo Serbest Devleti limanı); Ituri'de aynı adlı ikinci PPL elendi"),
 ("Lukungu", "Kongo DC", "olasi", "5°01′18.70″ S, 14°18′29.05″ E", "13 sonuç; 'Lukunga (also Lukungu)' Mbanza-Ngungu, Bas-Congo — Kongo Serbest Devleti Bas-Kongo istasyonu ile uyumlu; teyit gerekli"),
 ("Nouvelle-Anvers", "Kongo DC", "olasi", "1°36′25.13″ N, 19°06′08.06″ E", "modern ad Makanza/Mankanza (Équateur); 'Mankanza' PPL seçildi; idari birim kayıtları ayrıca var"),
 ("Niangara", "Kongo DC", "kesin", "3°41′33.97″ N, 27°53′42.72″ E", "GeoNames PPL Niangara (Haut-Uele)"),
 ("Bandawe", "Malavi", "olasi", "11°52′27.44″ S, 34°08′56.47″ E", "iki PPL (Nkhata Bay ve Salima); Britanya Orta Afrika kıyı/Nyasa gölü ⇒ Nkhata Bay"),
 ("Chiromo", "Malavi", "kesin", "16°32′48.30″ S, 35°09′20.38″ E", "GeoNames PPL Chiromo (Nsanje) tek kayıt"),
 ("Bandajuma", "Sierra Leone", "belirsiz", "", "35 sonuç; en az iki PPL Bandajuma: 8°02′42″N 11°01′04″W (Eastern) ve 7°34′20″N 11°39′13″W (Southern); 1900 listesi hangisini kastettiğini söylemiyor"),
 ("Falaba", "Sierra Leone", "olasi", "9°51′19.22″ N, 11°19′17.44″ W", "üç PPL Falaba; Kuzey Eyaleti (Sulima/Kuranko Falaba kalesi) seçildi; ikisi Güney Eyaleti"),
 ("Karene", "Sierra Leone", "belirsiz", "", "4 PPL Karene (9°06′57″N 12°56′52″W vb.); belirleyici bağlam yok"),
 ("Kwelu", "Sierra Leone", "belirsiz", "", "5+ PPL Kwelu; belirleyici bağlam yok"),
 ("Bismarckburg", "Togo", "bulunamadi", "", "GeoNames 'Adele' araması boş döndü (ad: Adélé/Bismarckburg); ölçülemedi"),
 ("Misahöhe", "Togo", "kesin", "6°57′00.00″ N, 0°34′59.99″ E", "GeoNames PPL Missahohé; orman koruma alanı kaydı ayrı"),
 ("Kalungwishi", "Zambiya", "bulunamadi", "", "GeoNames'te yalnız akarsu/sulak alan kaydı (Kalungwishi nehri 9°02′S 28°55′E); yerleşim kaydı yok"),
 ("Kori", "Burkina Faso", "kesin", "12°44′31.60″ N, 3°29′43.40″ W", "GeoNames PPL Kouri (also Koury) — tek kayıt; ad 'Koury'/'Kori' eşlemesi"),
 ("Benty", "Gine", "olasi", "9°10′31.01″ N, 13°14′01.00″ W", "GeoNames PPL 'Benti' (also Benty), Forecariah; yazım farkı"),
 ("Friguiagbé", "Gine", "kesin", "9°57′00.00″ N, 12°55′59.99″ W", "GeoNames PPL Friguiagbé (Kindia)"),
 ("Kadé", "Gine", "belirsiz", "", "tek kayıt 'Galo Kadé' (Gaoual, 12°10′N 13°51′W); 1900 listesi 'Kadé' diyor, aynı yer mi bilinmiyor"),
 ("Ouassou", "Gine", "belirsiz", "", "üç aday: ADM3 Ouassou (Dubréka, 10°10′59.99″N 13°33′W), PPL Ouassou (Boké, 11°00′N 13°57′W), Wassou"),
 ("Goumbou", "Mali", "olasi", "14°59′17.52″ N, 7°27′14.40″ W", "iki PPL (Koulikoro: Goumbou ve Goumbou Dyoupé) + bir akarsu; Goumbou (Fr. Sudan, Koulikoro) seçildi"),
 ("Satadougou", "Mali", "olasi", "12°36′42.16″ N, 11°24′52.99″ W", "iki PPL (Kayes 12°36′N 11°24′W ve 12°21′N 10°07′W); Senegal nehri/Gine sınırı Satadugu kalesi ⇒ Kayes"),
 ("Sumpi", "Mali", "kesin", "15°50′36.96″ N, 4°19′31.80″ W", "GeoNames PPL Soumpi (Tombouctou); göl/vadi kayıtları ayrı"),
 ("Belingwe", "Zimbabve", "olasi", "20°28′37.92″ S, 29°54′30.56″ E", "modern ad Mberengwa; PPL Mberengwa seçildi (ilçe/zirve kayıtları elendi)"),
]
# 1900 listesinde adı 'bulunamadı' olan 11 satır
BUL = 42 - len(K)
rows = []
for ad, ulke, durum, dms, not_ in K:
    lat = lon = ""
    if dms:
        a, b = dms.split(", ")
        lat, lon = dec(a), dec(b)
    rows.append(dict(ad_1900=ad, ulke=ulke, durum=durum, lat=lat, lon=lon, koord_kaynak=("GeoNames arama sayfası, 16 Kasım 2026: " + dms) if dms else "", not_=not_))
for i in range(BUL):
    rows.append(dict(ad_1900="bulunamadı", ulke="(liste)", durum="bulunamadi", lat="", lon="", koord_kaynak="", not_="1900 kaynak listesinde şehir adı 'bulunamadı' (ad yok ⇒ koordinat aranamaz)"))
with open(os.path.join(D, "KOORD42.tsv"), "w", encoding="utf-8", newline="") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0].keys()), delimiter="\t"); w.writeheader(); w.writerows(rows)
import collections
print(len(rows), dict(collections.Counter(r["durum"] for r in rows)))
# LISTE.tsv'ye yalnız 'kesin' olanları yaz
kesin = {r["ad_1900"]: r for r in rows if r["durum"] == "kesin"}
yol = os.path.join(D, "LISTE.tsv")
f = open(yol, encoding="utf-8"); rd = csv.DictReader(f, delimiter="\t"); cols = rd.fieldnames; L = list(rd); f.close()
n = 0
for x in L:
    k = kesin.get(x["ad_1900"])
    if k and not x["lat"]:
        x["lat"], x["lon"], x["koord_yolu"] = k["lat"], k["lon"], "geonames-sayfa(16Kas)"; n += 1
with open(yol, "w", encoding="utf-8", newline="") as f:
    w = csv.DictWriter(f, fieldnames=cols, delimiter="\t"); w.writeheader(); w.writerows(L)
print("LISTE.tsv'ye yazılan (kesin):", n, "koordinatı hâlâ boş:", sum(1 for x in L if not x["lat"]))
