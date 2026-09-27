# ODAK-1DUNYA-0080 — I. Dünya Savaşı kronolojisinin HARİTA ODAĞI (uygulayıcı)
#
# Şartname: oturumlar/ODAK-1DUNYA-0080.md · paket ODAK-0080 · 27 Eylül 2026
# Dosyalar: data/kronoloji_cok_1dunya_A.js (97 ODAKSIZ) · data/kronoloji_cok_1dunya_B.js
#           (55 BEYANLI→yabancı) · YÜK 152 madde.
#
# Kullanım:
#   py denetim/ODAK-1DUNYA-0080-uygula.py                  KURU KOŞU (hiçbir şey yazmaz)
#   py denetim/ODAK-1DUNYA-0080-uygula.py --uygula         yazar
#   py denetim/ODAK-1DUNYA-0080-uygula.py --grup A,B       yalnız o sınıflar
#   py denetim/ODAK-1DUNYA-0080-uygula.py --ayrinti        her önerinin gerekçesi + kaynağı
#
# Her madde (dosya, t, b) ile BULUNUR; ESKİ değer doğrulanır (yer_id "" · yer_kon/odak_yer/
# odak_kimlik YOK · kapsam_genis A'da yok, B'de true). Bulunamayan, eski değeri tutmayan,
# şartı sağlamayan öneri SESSİZCE ATLANMAZ: sayılır ve basılır.
#
# ŞARTLAR (betik kendisi sınar, sağlamayanı YAZMAZ):
#   yer_id / odak_yer  → yerleşim havuzunda (girdi.yukle, app.js `sehirler` ile aynı evren)
#                        BİREBİR ad ya da " (" öncesi ile TAM BİR kayıt. İki kayıt eşleşirse
#                        app.js ilkini alır ve hangisi olduğu sıraya bağlıdır → RED ("Roma"
#                        vakası: Roma + Roma (Queensland)).
#   odak_kimlik        → id devletler.js'te VAR + madde GÜNÜNDE ≥2 yerleşim (app.js:11751)
#                        + kutu boylamca ≤ 120° (sömürgeli kimlik kıtalar arası kutu kurar:
#                        `abd` 1917 = 224 yerleşim, boylam -170.7…144.8 → kullanılmadı).
#   yer_kon            → [enlem, boylam] aralıkta. Koordinat KAYNAKTAN DEĞİL yerin bilinen
#                        konumundandır; her birinin hassasiyeti gerekçede ±km olarak yazılı
#                        (şartname: "yaklaşık ise AÇIKÇA söyle", D210).
#
# SINIFLAR (şartname §SINIFLANDIRMA):
#   A tek belli yer → yer_id (ad havuzda VE maddenin kendi metni o yeri anıyor) / yer_kon
#   B birkaç yer ya da iki taraf → odak_yer (kamera tercihi — VERİYE YER İDDİASI YAZMAZ)
#   C bir devletin tamamı → odak_kimlik; kimlik kutusu bozuksa (sömürge) başkent odak_yer
#   D Osmanlı çapı → kapsam_genis KALIR (bu kolda 0 madde)
#   E yer belirlenemedi / atlasta nokta yok → odak alanı YAZILMAZ; B dosyasındaki yalan
#     `kapsam_genis:true` yine de KALDIRILIR (yoksa kamera Osmanlı'ya uçar — şartname 🔴)
#
# 🔴 yer_id YALNIZ maddenin kendi metni (b/d) yeri adlandırıyorsa yazıldı; metin yer
#    vermiyorsa (savaş ilanı, ültimatom, konuşma) odak_yer — kart yalan söylemez (app.js:11697).
# ⚠️ Bu iki veri dosyası ÜRETİLMİŞ (denetim/ARAC-1DUNYA-A-URET-0917.py · ARAC-1DUNYA-B-URET-
#    0917.py). Üretici yeniden koşarsa bu alanlar SİLİNİR (B üreticisi 438. satırda
#    `kapsam_genis: not yer` yazıyor). Karar koordinatörün.

import json
import os
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

DOSYA = {"A": "data/kronoloji_cok_1dunya_A.js", "B": "data/kronoloji_cok_1dunya_B.js"}
ODAK_ALANLARI = ("yer_kon", "odak_yer", "odak_kimlik", "odak_kutu_kaynak")
KUTU_TAVAN_BOYLAM = 120.0   # kıta ölçeği geçer (kanada 100.4°), kıtalar arası düşer (abd 315.5°)


def iid(ad, g):
    return {"yer_id": ad}, g


def kon(lat, lon, g):
    return {"yer_kon": [lat, lon]}, g


def oy(adlar, g):
    return {"odak_yer": list(adlar)}, g


def ok(ids, g):
    return {"odak_kimlik": list(ids)}, g


def bos(g):
    return {}, g


MK = "madde metni"   # kısaltma: yeri maddenin kendi b/d metni adlandırıyor
BK = "yerin bilinen konumu, kaynakta koordinat YOK"

# (dosya, t, b, sınıf, (alanlar, gerekçe))
ONERILER = [
    # ───────────────────────── A dosyası — 97 ODAKSIZ ─────────────────────────
    ("A", "1914-06-28", "Saraybosna suikastı — Avusturya-Macaristan veliahdı Franz Ferdinand öldürüldü", "A",
     iid("Saraybosna", MK + ": \"Saraybosna'da ... öldürüldü\"")),
    ("A", "1914-07-23", "Avusturya-Macaristan Sırbistan'a ültimatom verdi", "B",
     oy(["Viyana", "Belgrad"], "iki taraf; metin ültimatomun verildiği yeri söylemiyor → yer_id YOK")),
    ("A", "1914-07-28", "Avusturya-Macaristan Sırbistan'a savaş ilan etti", "B",
     oy(["Viyana", "Belgrad"], "iki taraf; savaş ilanı devlet işlemi, metinde yer yok")),
    ("A", "1914-08-01", "Almanya Rusya'ya savaş ilan etti", "B",
     oy(["Berlin", "St. Petersburg"], "iki taraf; metinde yer yok")),
    ("A", "1914-08-02", "Alman ordusu tarafsız Lüksemburg'u işgal etti", "C",
     ok(["luksemburg"], "ülkenin tamamı işgal edildi; `luksemburg` o gün 2 yerleşim, kutu dar")),
    ("A", "1914-08-02", "Almanya Belçika'ya 24 saatlik geçiş ültimatomu verdi", "A",
     iid("Brüksel", MK + ": \"Alman elçisi ... Brüksel'de ültimatomu teslim etti\"")),
    ("A", "1914-08-03", "Almanya Fransa'ya savaş ilan etti", "B",
     oy(["Berlin", "Paris"], "iki taraf; metinde yer yok")),
    ("A", "1914-08-04", "Almanya Belçika'yı işgale başladı, İngiltere Almanya'ya savaş ilan etti", "B",
     oy(["Liège", "Brüksel"], MK + ": \"Liège YAKININDA Belçika topraklarına girdi\" — 'yakınında' yer_id taşımaz; kamera Belçika")),
    ("A", "1914-08-07", "Karadağ Avusturya-Macaristan'a savaş ilan etti", "B",
     oy(["Cetinje", "Viyana"], "iki taraf; metinde yer yok")),
    ("A", "1914-08-17", "Cer Muharebesi — İtilâf'ın ilk zaferi", "A",
     kon(44.60, 19.45, MK + ": \"batı Sırbistan'da Cer Dağı'nın yamaçlarında\" · " + BK + " · ±10 km (dağ sırtı)")),
    ("A", "1914-08-20", "Alman ordusu Brüksel'e girdi, Belçika ordusu Anvers'e çekildi", "A",
     iid("Brüksel", MK + ": \"Brüksel aynı gün savaşmadan düştü\" (başlığın ilk olayı)")),
    ("A", "1914-08-21", "Charleroi Muharebesi — Sınır Muharebeleri", "A",
     kon(50.41, 4.44, MK + ": Charleroi (havuzda YOK) · " + BK + " · ±5 km (şehir)")),
    ("A", "1914-08-28", "Helgoland Körfezi Deniz Muharebesi", "A",
     kon(54.20, 7.70, MK + ": \"Kuzey Denizi'ndeki Helgoland Körfezi'nde\" · " + BK + " · ±30 km (açık deniz, körfez ortası)")),
    ("A", "1914-09-05", "Birinci Marne Muharebesi — Almanların Paris yürüyüşü durduruldu", "A",
     kon(49.00, 3.40, MK + ": \"Marne nehrine\" · " + BK + " · ±60 km (Paris-Verdun arası cephenin Marne kesimi, Château-Thierry yöresi)")),
    ("A", "1914-09-07", "Birinci Mazurya Gölleri Muharebesi", "A",
     kon(53.90, 21.80, MK + ": \"Doğu Prusya ... Mazurya Gölleri'nde\" · " + BK + " · ±40 km (göller bölgesi ortası)")),
    ("A", "1914-09-12", "Birinci Aisne Muharebesi — «Denize Koşu» başladı", "A",
     kon(49.43, 3.55, MK + ": Aisne (havuzda YOK) · " + BK + " · ±25 km (Aisne vadisi, Soissons-Craonne arası)")),
    ("A", "1914-11-06", "Avusturya-Macaristan'ın Sırbistan'a üçüncü taarruzu başladı", "C",
     ok(["sirbistan-kralligi"], "taarruz ülkeye; metinde tek yer yok (Belgrad boşaltılması sonucu). `sirbistan-kralligi` o gün 21 yerleşim")),
    ("A", "1914-12-03", "Kolubara Muharebesi — Sırp karşı taarruzu", "A",
     kon(44.30, 20.10, MK + ": Kolubara (nehir; havuzda YOK) · " + BK + " · ±25 km (Kolubara vadisi, Valyevo-Lazarevac)")),
    ("A", "1914-12-08", "Birinci Şampanya Muharebesi", "A",
     kon(49.20, 4.60, MK + ": \"Şampanya'da\" · " + BK + " · ±25 km (Perthes-Souain kesimi)")),
    ("A", "1914-12-14", "Sırplar Belgrad'ı geri aldı", "A",
     iid("Belgrad", MK + ": \"Belgrad'ı ... geri verdiler\"")),
    ("A", "1914-12-24", "Batı Cephesi'nde Noel Ateşkesi", "B",
     oy(["Ypres", "Lille"], "metin: \"Batı Cephesi'nin bazı kesimlerinde İngiliz ve Alman askerleri\" — tek yer yok; kamera İngiliz kesimine (Ypres-Lille arası)")),
    ("A", "1915-01-24", "Dogger Bank Deniz Muharebesi", "A",
     kon(54.70, 3.00, MK + ": \"Kuzey Denizi'ndeki Dogger Bank'ta\" · " + BK + " · ±50 km (sığlık ortası, açık deniz)")),
    ("A", "1915-02-04", "Almanya sınırsız denizaltı savaşını ilan etti", "B",
     oy(["Berlin", "Londra"], "iki taraf; ilan devlet işlemi, metinde yer yok")),
    ("A", "1915-05-02", "Gorlice-Tarnów yarması — Rus ordusu Galiçya'dan çekildi", "A",
     kon(49.66, 21.16, MK + ": Gorlice-Tarnów (ikisi de havuzda YOK) · " + BK + " · ±5 km Gorlice; yarma hattı Gorlice'den Tarnów'a ~40 km")),
    ("A", "1915-05-07", "Lusitania bir Alman denizaltısınca batırıldı", "A",
     kon(51.42, -8.55, "metin batış yerini söylemiyor; batış İrlanda'da Old Head of Kinsale açığı · " + BK + " · ±20 km — tartışmalıysa --grup ile ayrılabilir")),
    ("A", "1915-05-23", "İtalya Avusturya-Macaristan'a savaş ilan etti", "B",
     oy(["Viyana", "Venedik"], "iki taraf; metinde yer yok. 🔴 'Roma' havuzda İKİ kayıt (Roma + Roma (Queensland)) → kullanılmadı; kamera İtalya-Avusturya sınırına")),
    ("A", "1915-06-23", "Birinci Isonzo Muharebesi", "A",
     kon(45.90, 13.60, MK + ": Isonzo (nehir; havuzda YOK) · " + BK + " · ±25 km (Gorizia-Doberdò kesimi)")),
    ("A", "1915-08-05", "Alman ordusu Varşova'ya girdi — Rus Polonyası işgal edildi", "A",
     iid("Varşova", MK + ": \"Alman süvarisi ... Varşova'ya girdi\"")),
    ("A", "1915-09-06", "Bulgaristan Merkezî Devletler'le gizli ittifak anlaşması imzaladı", "B",
     oy(["Sofya", "Berlin"], "iki taraf; metin imza yerini söylemiyor → yer_id YOK")),
    ("A", "1915-09-22", "İkinci Şampanya Muharebesi başladı", "A",
     kon(49.20, 4.60, MK + ": \"Şampanya'da\" · " + BK + " · ±25 km")),
    ("A", "1915-10-06", "Alman ve Avusturya-Macaristan orduları Sırbistan'a saldırdı", "C",
     ok(["sirbistan-kralligi"], "saldırı ülkeye; metinde tek yer yok. 21 yerleşim")),
    ("A", "1915-10-14", "Bulgaristan Sırbistan'a savaş ilan ederek Merkezî Devletler yanında savaşa girdi", "B",
     oy(["Sofya", "Belgrad"], "iki taraf; metinde yer yok")),
    ("A", "1915-11-26", "Sırbistan seferi sona erdi — Sırbistan işgal altına girdi", "C",
     ok(["sirbistan-kralligi"], "ülkenin tamamı işgal altına girdi. 21 yerleşim")),
    ("A", "1916-01-11", "Lovćen düştü, Avusturya-Macaristan Karadağ'ı işgal etti", "B",
     oy(["Cetinje", "Kotor"], MK + ": Lovćen + başkent Çetine; Lovćen dağı Kotor ile Cetinje ARASINDADIR → iki ad kutusu dağı kapsar")),
    ("A", "1916-02-21", "Verdun Muharebesi başladı", "A",
     kon(49.16, 5.39, MK + ": Verdun (havuzda YOK) · " + BK + " · ±10 km (şehir)")),
    ("A", "1916-03-09", "Almanya Portekiz'e savaş ilan etti", "B",
     oy(["Berlin", "Lizbon"], "iki taraf; metinde yer yok")),
    ("A", "1916-05-04", "Sussex Taahhüdü — Almanya denizaltı savaşını sınırladı", "B",
     oy(["Berlin"], "taahhüt Almanya'nın notasıdır; öbür taraf ABD'nin başkenti havuzda YOK")),
    ("A", "1916-06-04", "Brusilov Taarruzu başladı", "B",
     oy(["Lutsk", "Çernovitz"], "metin: \"Rus güney orduları grubu\" — tek yer yok; kamera cephenin kuzey (Lutsk) ve güney (Çernovitz) ucu arası")),
    ("A", "1916-07-01", "Somme Muharebesi başladı", "A",
     kon(50.00, 2.75, MK + ": Somme (havuzda YOK) · " + BK + " · ±20 km (Albert-Péronne arası)")),
    ("A", "1916-08-04", "Gorizia Muharebesi", "A",
     kon(45.94, 13.62, MK + ": Gorizia (havuzda YOK) · " + BK + " · ±5 km (şehir)")),
    ("A", "1916-08-17", "Romanya ile İtilâf devletleri arasında siyasî ve askerî sözleşme imzalandı", "B",
     oy(["Bükreş"], "metin imza yerini söylemiyor → yer_id YOK; kamera Romanya başkenti")),
    ("A", "1916-08-17", "Makedonya cephesinde Merkezî Devletler'in ani taarruzu", "B",
     oy(["Filorina (Florina)", "Manastır"], MK + ": Gorniçevo, Kaymakçalan, Çerna vadisi — üçü de Florina-Manastır kesiminde")),
    ("A", "1916-08-27", "Romanya Avusturya-Macaristan'a savaş ilan etti", "B",
     oy(["Bükreş", "Viyana"], "iki taraf; metinde ilan yeri yok")),
    ("A", "1916-08-30", "Selanik'te Venizelos yanlılarının hareketi — Yunanistan'da ikilik", "A",
     iid("Selanik", MK + ": \"Selanik'teki Yunan garnizonunu\"")),
    ("A", "1916-09-11", "Kavala'daki Yunan kolordusu Bulgar ordusuna teslim oldu", "A",
     iid("Kavala", MK + ": \"Kavala'daki Yunan IV. Kolordusu\"")),
    ("A", "1916-09-15", "İngilizler Somme cephesinde tankı ilk kez kullandı", "A",
     kon(50.00, 2.75, MK + ": \"Somme cephesinde\" · " + BK + " · ±20 km (1 Temmuz maddesiyle AYNI nokta; metin köy adı vermiyor)")),
    ("A", "1916-11-05", "Merkezî Devletler'e bağlı «Polonya Krallığı» ilan edildi", "C",
     ok(["kongre-polonyasi"], MK + ": \"işgal altındaki Rus Polonyası'nda\" — tam bu kimlik; o gün 8 yerleşim, kutu [19.1,50.7,23.5,52.2]")),
    ("A", "1916-12-01", "İtilâf deniz piyadeleri Pire'ye çıktı", "A",
     kon(37.94, 23.64, MK + ": \"Pire'ye ... çıkardı\" (Pire havuzda YOK) · " + BK + " · ±3 km (liman)")),
    ("A", "1917-01-22", "Wilson'ın «zafersiz barış» konuşması", "E",
     bos("metin konuşmanın yerini söylemiyor; ABD başkenti havuzda YOK; `abd` kimlik kutusu 224 yerleşim, boylam -170.7…144.8 (Pasifik) → odak_kimlik kullanılamaz. NOKTA GEREKİYOR: Washington")),
    ("A", "1917-03-16", "Alman ordusu Hindenburg Hattı'na çekildi", "B",
     oy(["Arras", "Reims"], "hat Arras'tan Soissons'a uzanır; metin hat adından başka yer vermiyor → kamera kutusu")),
    ("A", "1917-04-17", "Üçüncü Şampanya Muharebesi (Nivelle Taarruzu)", "A",
     kon(49.20, 4.40, MK + ": \"Şampanya'da\" · " + BK + " · ±30 km (Moronvilliers tepeleri kesimi)")),
    ("A", "1917-06-11", "Fransa Yunanistan'a ültimatom verdi — Kral Konstantin'in çekilmesi istendi", "B",
     oy(["Atina"], "ültimatom Yunan hükümetine; metin yer vermiyor → yer_id YOK, kamera Atina")),
    ("A", "1917-07-01", "Kerenski Taarruzu başladı", "B",
     oy(["Lvov", "Çernovitz"], "metin: \"Doğu Cephesi'nde\" — tek yer yok; kamera Galiçya cephesi")),
    ("A", "1917-07-20", "Korfu Bildirisi — Sırp, Hırvat ve Slovenlerin birleşme ilkeleri", "A",
     iid("Korfu", MK + ": \"Korfu'da ortak bir bildiri yayımladı\"")),
    ("A", "1917-07-24", "Mărăşti ve Mărăşeşti muharebeleri — Rumen-Rus yaz taarruzu", "A",
     kon(45.88, 27.23, MK + ": Mărăşeşti (havuzda YOK) · " + BK + " · ±15 km (Mărăşti ~25 km KB'da)")),
    ("A", "1917-07-31", "Üçüncü Ypres (Passchendaele) Muharebesi başladı", "A",
     iid("Ypres", MK + ": \"Belçika'da Ypres kesiminde\"")),
    ("A", "1917-09-03", "Alman ordusu Riga'yı aldı", "A",
     iid("Riga", MK + ": \"iki gün sonra şehri aldı\" (Riga)")),
    ("A", "1917-10-24", "Caporetto yarması — on ikinci Isonzo Muharebesi", "A",
     kon(46.25, 13.58, MK + ": Caporetto (Kobarid; havuzda YOK) · " + BK + " · ±5 km")),
    ("A", "1917-11-08", "Barış Kararnamesi kabul edildi", "B",
     oy(["St. Petersburg"], "metin: \"İkinci Sovyetler Kongresi'nde\" — şehir metinde yok → yer_id YOK, kamera Petrograd")),
    ("A", "1917-12-07", "Focşani Mütarekesi — Romanya savaşı durdurdu", "A",
     kon(45.70, 27.19, MK + ": \"Focşani'de ... mütareke imzaladı\" (havuzda YOK) · " + BK + " · ±3 km")),
    ("A", "1917-12-15", "Brest-Litovsk Mütarekesi — Rusya ile Merkezî Devletler savaşı durdurdu", "A",
     iid("Brest-Litovsk", MK + ": başlık \"Brest-Litovsk Mütarekesi\"")),
    ("A", "1918-01-08", "Wilson'ın On Dört Madde'si", "A",
     kon(38.890, -77.009, MK + ": \"Kongre'de\" — ABD Kongresi (Capitol, Washington; havuzda YOK) · " + BK + " · ±1 km")),
    ("A", "1918-02-09", "«Ekmek Barışı» — Ukrayna ile Merkezî Devletler arasında Brest-Litovsk Antlaşması", "A",
     iid("Brest-Litovsk", MK + ": \"Brest-Litovsk'ta ... barış antlaşması imzaladı\"")),
    ("A", "1918-03-03", "Brest-Litovsk Antlaşması — Rusya savaştan çekildi", "A",
     iid("Brest-Litovsk", MK + ": başlık \"Brest-Litovsk Antlaşması\"")),
    ("A", "1918-03-05", "Buftea Ön Barışı — Romanya ile Merkezî Devletler", "A",
     kon(44.57, 25.95, MK + ": \"Bükreş yakınındaki Buftea'da\" (havuzda YOK) · " + BK + " · ±3 km")),
    ("A", "1918-03-21", "Alman Bahar Taarruzu başladı", "B",
     oy(["Arras", "Amiens"], "metin: \"Batı Cephesi'nde\" — tek yer yok; kamera taarruz kesimi (Arras-St-Quentin, hedef Amiens)")),
    ("A", "1918-04-09", "La Lys Muharebesi — Portekiz tümeni ağır kayıp verdi", "A",
     kon(50.60, 2.80, MK + ": La Lys (nehir; havuzda YOK) · " + BK + " · ±15 km (Armentières-La Bassée, Portekiz kesimi)")),
    ("A", "1918-04-17", "General Foch İtilâf orduları başkomutanı oldu", "B",
     oy(["Paris", "Londra"], "ortak karar; metin yer vermiyor → yer_id YOK. ABD başkenti havuzda YOK")),
    ("A", "1918-05-07", "Bükreş Antlaşması — Romanya ile Merkezî Devletler barışı", "A",
     iid("Bükreş", MK + ": başlık \"Bükreş Antlaşması\"")),
    ("A", "1918-06-15", "Piave Muharebesi", "A",
     kon(45.80, 12.25, MK + ": \"Piave nehri boyunca\" (havuzda YOK) · " + BK + " · ±30 km (Montello-Nervesa, cephe ortası)")),
    ("A", "1918-07-15", "İkinci Marne Muharebesi", "A",
     kon(49.07, 3.65, MK + ": \"Marne'da\" · " + BK + " · ±30 km (Dormans kesimi, Reims'in güneybatısı)")),
    ("A", "1918-08-08", "Amiens Taarruzu", "A",
     iid("Amiens", MK + ": \"Amiens'de taarruza geçti\"")),
    ("A", "1918-09-29", "Üsküp'ün düşüşü — Bulgar direnişi çöktü", "A",
     iid("Üsküp", MK + ": \"Üsküp'ü aldı\"")),
    ("A", "1918-10-03", "Çar Ferdinand tahttan çekildi — III. Boris çar oldu", "B",
     oy(["Sofya"], "metin tahttan çekilmenin yerini söylemiyor → yer_id YOK; kamera Bulgar başkenti")),
    ("A", "1918-10-12", "Sırp ordusu Niş'i aldı", "A",
     iid("Niş", MK + ": \"Niş'i aldı\"")),
    ("A", "1918-10-24", "Vittorio Veneto Muharebesi başladı", "A",
     kon(45.99, 12.30, MK + ": Vittorio Veneto (havuzda YOK) · " + BK + " · ±10 km (şehir; muharebe Piave boyunca)")),
    ("A", "1918-10-30", "Polonyalılar Krakov'da yönetimi ele geçirdi", "A",
     iid("Krakov", MK + ": \"Krakov'da yönetimi ele geçirdi\"")),
    ("A", "1918-11-03", "Kiel'de denizci ayaklanması başladı", "A",
     iid("Kiel", MK + ": \"Kiel'deki denizcileri ... ayaklandı\"")),
    ("A", "1918-11-10", "Romanya yeniden savaşa girdi", "C",
     ok(["romanya-kralligi"], "devlet işlemi, metinde yer yok; `romanya-kralligi` o gün 32 yerleşim, kutu [21.9,43.9,30.3,48.5]")),
    ("A", "1918-11-11", "Compiègne Mütarekesi — Batı Cephesi'nde savaş sona erdi", "A",
     kon(49.43, 2.91, MK + ": \"Compiègne ormanında\" (havuzda YOK) · " + BK + " · ±3 km (Rethondes açıklığı)")),
    ("A", "1918-11-13", "Belgrad Mütarekesi — Macaristan ile savaşın son mütarekesi", "A",
     iid("Belgrad", MK + ": \"Belgrad'da ... imzalandı\"")),
    ("A", "1918-11-20", "Alman işgal ordusu Lüksemburg'dan çekildi", "C",
     ok(["luksemburg"], "ülkeden çekilme; 2 yerleşim, kutu dar")),
    ("A", "1918-11-21", "Belçika'da yeni hükümet kuruldu — kral ülkeye döndü", "B",
     oy(["Brüksel"], "C niyetli; ama `belcika` kimliği sömürgeyi (Kongo) kapsar → kutu kıtalar arası. Kamera başkent; metin şehir vermiyor → yer_id YOK")),
    ("A", "1919-01-18", "Paris Barış Konferansı toplandı", "A",
     iid("Paris", MK + ": \"Paris'te toplandı\"")),
    ("A", "1919-04-28", "Paris Barış Konferansı Milletler Cemiyeti Misakı'nı kabul etti", "A",
     iid("Paris", MK + ": \"Paris Barış Konferansı ... onayladı\"")),
    ("A", "1919-05-11", "Vorarlberg'de İsviçre'ye katılma referandumu", "B",
     oy(["Bregenz", "Feldkirch"], MK + ": \"Vorarlberg eyaletinde\" — eyalet çapı; havuzdaki iki Vorarlberg şehri")),
    ("A", "1919-06-19", "Cēsis Muharebesi", "A",
     iid("Cēsis", MK + ": başlık \"Cēsis Muharebesi\" (havuzda 'Cēsis (Wenden)')")),
    ("A", "1919-06-28", "Versay Antlaşması imzalandı", "A",
     kon(48.805, 2.120, MK + ": başlık \"Versay Antlaşması\" (Versay havuzda YOK) · " + BK + " · ±1 km (saray)")),
    ("A", "1919-07-12", "Müttefiklerin Almanya'ya uyguladığı deniz ablukası kaldırıldı", "B",
     oy(["Londra", "Berlin"], "iki taraf; metinde yer yok — kutu Kuzey Denizi'ni de kapsar")),
    ("A", "1919-09-10", "Saint-Germain Antlaşması — Avusturya ile barış", "A",
     kon(48.898, 2.094, MK + ": başlık \"Saint-Germain\" (havuzda YOK) · " + BK + " · ±1 km (Saint-Germain-en-Laye şatosu)")),
    ("A", "1919-11-27", "Neuilly Antlaşması — Bulgaristan ile barış", "A",
     kon(48.885, 2.268, MK + ": başlık \"Neuilly\" (havuzda YOK) · " + BK + " · ±1 km (Neuilly-sur-Seine)")),
    ("A", "1920-01-10", "Versay Antlaşması yürürlüğe girdi", "B",
     oy(["Paris", "Köln"], "yürürlük hukukî işlem; metnin somut değişikliği Ren bölgesi idaresi → kamera Paris-Ren (Köln) arası")),
    ("A", "1920-04-25", "Polonya-Sovyet Savaşı", "B",
     oy(["Varşova", "Kiev"], "iki taraf; metinde tek yer yok")),
    ("A", "1920-06-04", "Trianon Antlaşması — Macaristan ile barış", "A",
     kon(48.815, 2.105, MK + ": başlık \"Trianon\" (havuzda YOK) · " + BK + " · ±1 km (Büyük Trianon, Versay)")),
    ("A", "1920-11-15", "Milletler Cemiyeti ilk kez Cenevre'de toplandı", "A",
     iid("Cenevre", MK + ": \"Cenevre'de ilk toplantısını yaptı\"")),
    ("A", "1921-03-18", "Riga Antlaşması — Polonya-Sovyet Savaşı sona erdi", "A",
     iid("Riga", MK + ": başlık \"Riga Antlaşması\"")),
    ("A", "1921-05-23", "Leipzig savaş suçları davaları başladı", "A",
     iid("Leipzig", MK + ": \"Leipzig davaları\"")),

    # ───────────────────── B dosyası — 55 BEYANLI→yabancı ─────────────────────
    ("B", "1914-08-04", "Kanada, İngiltere'nin savaş ilanıyla kendiliğinden savaşa girdi", "C",
     ok(["kanada"], "dominyonun tamamı savaşa girdi; `kanada` 187 yerleşim, kutu Kuzey Amerika (100.4°). ⚠️ kutunun batı ucu 5 ALASKA yerleşimidir (Nikolai -154.4 vb.) — veride 1867-1923 `kanada` yazılı, Alaska 1867'den ABD'dir: AYRI KUSUR, raporlandı")),
    ("B", "1914-08-23", "Japonya Almanya'ya savaş ilan etti", "B",
     oy(["Edo (Tokyo)", "Qingdao"], MK + ": Japonya + \"Tsingtao'daki Alman üssünü almak üzere asker gönderdi\"")),
    ("B", "1914-08-26", "Togo'daki Alman kuvvetleri Kamina'da teslim oldu", "A",
     kon(7.55, 1.15, MK + ": \"Kamina kasabası önünde\" · 🔴 havuzdaki 'Kamina' KONGO'dadır (-8.74, 25.00) → yer_id YAZILAMAZ · " + BK + " · ±10 km (Atakpamé yakını)")),
    ("B", "1914-08-29", "Yeni Zelanda kuvvetleri Alman Samoası'nı direnişsiz aldı", "A",
     iid("Apia", MK + ": \"Apia'ya çıktı ve ... teslimini kabul etti\"")),
    ("B", "1914-10-03", "Japon donanması Jaluit'i işgal etti — Alman Mikronezyası'nın işgali başladı", "A",
     iid("Jaluit", MK + ": \"Jaluit'i işgal etti\"")),
    ("B", "1914-10-09", "Maritz isyanı — Güney Afrikalı subay birlikleriyle Almanların yanına geçti", "B",
     oy(["Upington"], MK + ": Keimoes (havuzda YOK) — Upington'un ~30 km batısı; kutu kapsar")),
    ("B", "1914-10-14", "Saipan'ın alınmasıyla Alman Mikronezyası'nın Japon işgali tamamlandı", "B",
     oy(["Garapan (Saipan)"], MK + ": \"Saipan'ı aldı\" — ada, yerleşim değil → yer_id yerine kamera")),
    ("B", "1914-11-01", "Coronel Deniz Muharebesi — Alman Doğu Asya filosu İngiliz filosunu yendi", "A",
     kon(-37.00, -73.30, MK + ": \"Coronel limanı açıklarında\" (havuzda YOK) · " + BK + " · ±30 km (açık deniz)")),
    ("B", "1914-11-01", "Rus Kafkas ordusu sınırı aşıp Erzurum yönünde taarruza geçti", "B",
     oy(["Sarıkamış", "Erzurum"], MK + ": \"Erzurum istikametine\" — sınırdan Erzurum'a eksen")),
    ("B", "1914-11-02", "Rusya Osmanlı Devleti'ne savaş ilan etti", "B",
     oy(["St. Petersburg", "İstanbul"], "iki taraf; D DEĞİL: madde Rusya künyesinde — kamera iki başkent arası")),
    ("B", "1914-11-06", "Köprüköy Muharebesi — Rus taarruzu geri püskürtüldü", "A",
     kon(39.97, 41.87, MK + ": Köprüköy (havuzda YOK) · " + BK + " · ±5 km")),
    ("B", "1914-11-09", "Avustralya kruvazörü Sydney, Emden'i Cocos Adaları'nda imha etti", "A",
     kon(-12.00, 96.85, MK + ": \"Cocos Takımadaları'na\" (havuzda YOK) · " + BK + " · ±25 km (takımada)")),
    ("B", "1914-12-08", "Falkland Deniz Muharebesi — von Spee filosu batırıldı", "A",
     oy(["Stanley"], MK + ": \"Falkland Adaları açıklarında\" — havuzdaki Stanley Falkland'dadır (-51.69, -57.86); muharebe açık denizde → yer_id değil kamera")),
    ("B", "1915-01-01", "İngiltere ile İbn Suûd arasında gizli anlaşma (Aralık 1915)", "B",
     oy(["Riyad"], MK + ": \"Necid toprakları\" — anlaşmanın konusu; metin imza yerini söylemiyor")),
    ("B", "1915-01-04", "Sarıkamış'ta Rus Kafkas Ordusu'nun zaferi — Osmanlı taarruzu çöktü", "A",
     iid("Sarıkamış", MK + ": \"Sarıkamış taarruzu\" · \"Bardız-Sarıkamış-Eşekmeydanı üçgeninde\"")),
    ("B", "1915-01-18", "Japonya Yuan Shikai'ye \"Yirmi Bir Talep\"i sundu", "B",
     oy(["Pekin (Hanbalık)", "Edo (Tokyo)"], "iki taraf; metinde yer yok")),
    ("B", "1915-02-03", "Süveyş Kanalı savunması — Osmanlı kanal geçişi püskürtüldü", "A",
     kon(30.55, 32.33, MK + ": \"Süveyş Kanalı'nı geçmeye\" · " + BK + " · ±15 km — kanalın geçiş kesimi (Tûsûn-Serapeum, İsmailiye güneyi); metin kesim adı VERMİYOR, --grup ile ayrılabilir")),
    ("B", "1915-02-19", "İtilaf donanması Çanakkale Boğazı'nın dış tabyalarını topa tuttu", "A",
     kon(40.03, 26.19, MK + ": \"Boğaz'ın dış tabyaları\" · " + BK + " · ±5 km (Seddülbahir-Kumkale, Boğaz ağzı)")),
    ("B", "1915-03-18", "İtilaf donanmasının Boğaz'ı geçme teşebbüsü başarısız oldu — üç zırhlı battı", "B",
     oy(["Çanakkale", "Kilitbahir"], MK + ": \"Çanakkale Boğazı'nı geçmeye\" — Boğaz'ın iki yakası (Kilitbahir-Çanakkale); kutu Boğaz'ın tamamını kapsar")),
    ("B", "1915-04-25", "Anzak birlikleri Gelibolu'da Arıburnu'na çıktı", "A",
     kon(40.24, 26.28, MK + ": \"Arıburnu kıyısına çıktı\" (havuzda YOK) · " + BK + " · ±2 km")),
    ("B", "1915-05-25", "Çin, Yirmi Bir Talep'e dayanan antlaşmaları imzaladı", "B",
     oy(["Pekin (Hanbalık)", "Edo (Tokyo)"], "iki taraf; metin imza yerini söylemiyor")),
    ("B", "1915-07-14", "Hüseyin-McMahon yazışmaları başladı", "B",
     oy(["Mekke", "Kahire"], "yazışmanın iki ucu (Şerif Hüseyin · İngiliz Mısır Yüksek Komiseri McMahon); metin şehir vermiyor")),
    ("B", "1915-08-06", "Anafartalar taarruzu — İngiliz ve Anzak kuvvetleri yeni çıkarma yaptı", "A",
     kon(40.29, 26.27, MK + ": \"yarımadanın Anafartalar bölgesinde\" (havuzda YOK) · " + BK + " · ±5 km (Suvla-Anafarta)")),
    ("B", "1915-11-22", "Selmanıpak Muharebesi — Townshend'in Bağdat yürüyüşü durduruldu", "A",
     kon(33.09, 44.58, MK + ": \"Bağdat'a 30 km mesafedeki Selmanıpak'ta\" (havuzda YOK) · " + BK + " · ±3 km")),
    ("B", "1916-02-18", "Rus kuvvetleri Muş'u işgal etti", "A",
     kon(38.75, 41.50, MK + ": \"Muş ... işgal edildi\" · 🔴 Muş havuzda YOK · " + BK + " · ±3 km (şehir)")),
    ("B", "1916-05-16", "Sykes-Picot Antlaşması — Osmanlı Arap toprakları nüfuz bölgelerine ayrıldı", "B",
     oy(["Adana", "Mersin", "Akkâ", "Bağdat", "Basra", "Kerkük"], MK + ": paylaşılan yerlerin kendisi (Adana, Mersin, Akkâ, Bağdat-Basra, Kerkük)")),
    ("B", "1916-07-26", "Muş Rus işgalinden geri alındı", "A",
     kon(38.75, 41.50, MK + ": \"şehir ... geri alındı\" · 🔴 Muş havuzda YOK · " + BK + " · ±3 km")),
    ("B", "1917-03-14", "Çin Almanya ile diplomatik ilişkilerini kesti", "C",
     ok(["cin-cumhuriyeti"], "devlet işlemi, metinde yer yok; 120 yerleşim, kutu [75.2,20.0,129.6,50.2]")),
    ("B", "1917-04-07", "Küba Almanya'ya savaş ilan etti", "C",
     ok(["kuba-cumhuriyeti"], "devlet işlemi; 4 yerleşim")),
    ("B", "1917-04-07", "Panama Almanya ile ilişkilerini kesti ve ABD'nin yanında yer aldı", "C",
     ok(["panama-cumhuriyeti"], "devlet işlemi; 4 yerleşim")),
    ("B", "1917-04-09", "Vimy Sırtı Muharebesi — Kanada kolordusu sırtı aldı", "A",
     kon(50.38, 2.77, MK + ": Vimy Sırtı (havuzda YOK) · " + BK + " · ±3 km")),
    ("B", "1917-04-11", "Brezilya Almanya ile diplomatik ilişkilerini kesti", "C",
     ok(["brezilya-cumhuriyeti"], "devlet işlemi; 127 yerleşim")),
    ("B", "1917-04-13", "Bolivya Almanya ile diplomatik ilişkilerini kesti", "C",
     ok(["bolivya-cumhuriyeti"], "devlet işlemi; 25 yerleşim")),
    ("B", "1917-04-27", "Guatemala Almanya ile diplomatik ilişkilerini kesti", "C",
     ok(["guatemala"], "devlet işlemi; 3 yerleşim")),
    ("B", "1917-05-08", "Liberya Almanya ile diplomatik ilişkilerini kesti", "C",
     ok(["liberya"], "devlet işlemi; 5 yerleşim")),
    ("B", "1917-05-17", "Honduras Almanya ile diplomatik ilişkilerini kesti", "B",
     oy(["Trujillo (Honduras)"], "C niyetli ama `honduras-cumhuriyeti` 0 yerleşim; havuzdaki TEK Honduras şehri (tam adla — 'Trujillo' yalın hâli Peru ile İKİ kayıt)")),
    ("B", "1917-05-19", "Nikaragua Almanya ile diplomatik ilişkilerini kesti", "E",
     bos("`nikaragua-cumhuriyeti` 0 yerleşim, havuzda Nikaragua şehri YOK (Managua, León-Nikaragua, Granada-Nikaragua aranıp bulunamadı; 'León'/'Granada' İspanya'dadır). NOKTA GEREKİYOR")),
    ("B", "1917-06-17", "Haiti Almanya ile diplomatik ilişkilerini kesti", "C",
     ok(["haiti"], "devlet işlemi; 2 yerleşim (≥2 şartı sınırda)")),
    ("B", "1917-07-22", "Siyam Almanya ve Avusturya-Macaristan'a savaş ilan etti", "C",
     ok(["siyam-chakri"], "devlet işlemi; 24 yerleşim")),
    ("B", "1917-08-04", "Liberya Almanya'ya savaş ilan etti", "C",
     ok(["liberya"], "devlet işlemi; 5 yerleşim")),
    ("B", "1917-08-14", "Çin Almanya'ya savaş ilan etti", "C",
     ok(["cin-cumhuriyeti"], "devlet işlemi; 120 yerleşim")),
    ("B", "1917-10-06", "Peru Almanya ile diplomatik ilişkilerini kesti", "C",
     ok(["peru-cumhuriyeti"], "devlet işlemi; 37 yerleşim")),
    ("B", "1917-10-07", "Uruguay Almanya ile diplomatik ilişkilerini kesti", "C",
     ok(["uruguay-cumhuriyeti"], "devlet işlemi; 5 yerleşim")),
    ("B", "1917-10-26", "Brezilya ile Almanya arasında savaş hali ilan edildi", "C",
     ok(["brezilya-cumhuriyeti"], "devlet işlemi; 127 yerleşim")),
    ("B", "1917-12-07", "Ekvador Almanya ile diplomatik ilişkilerini kesti", "B",
     oy(["Quito"], "C niyetli ama `ekvador-cumhuriyeti` kutusu Galápagos'u kapsar (boylam -91.0…-75.2) → kamera başkent")),
    ("B", "1917-12-10", "Panama Avusturya-Macaristan'a savaş ilan etti", "C",
     ok(["panama-cumhuriyeti"], "devlet işlemi; 4 yerleşim")),
    ("B", "1917-12-16", "Küba Avusturya-Macaristan'a savaş ilan etti", "C",
     ok(["kuba-cumhuriyeti"], "devlet işlemi; 4 yerleşim")),
    ("B", "1918-04-21", "Guatemala Almanya ile savaş halinde olduğunu ilan etti", "C",
     ok(["guatemala"], "devlet işlemi; 3 yerleşim")),
    ("B", "1918-05-08", "Nikaragua Almanya ile savaş halinde olduğunu ilan etti", "E",
     bos("`nikaragua-cumhuriyeti` 0 yerleşim, havuzda Nikaragua şehri YOK. NOKTA GEREKİYOR")),
    ("B", "1918-05-23", "Kosta Rika Almanya ile savaş halinde olduğunu ilan etti", "E",
     bos("`kosta-rika-cumhuriyeti` 0 yerleşim, havuzda Kosta Rika şehri YOK (San José, Cartago-KR, Puntarenas aranıp bulunamadı; havuzdaki 'Cartago' Kolombiya'dadır). NOKTA GEREKİYOR")),
    ("B", "1918-07-12", "Haiti Almanya ile savaş halinde olduğunu ilan etti", "C",
     ok(["haiti"], "devlet işlemi; 2 yerleşim")),
    ("B", "1918-07-19", "Honduras Almanya ile savaş halinde olduğunu ilan etti", "B",
     oy(["Trujillo (Honduras)"], "C niyetli ama `honduras-cumhuriyeti` 0 yerleşim; havuzdaki TEK Honduras şehri")),
    ("B", "1918-09-23", "İngiliz kuvvetleri Hayfa'yı aldı", "A",
     kon(32.82, 34.99, MK + ": \"Hayfa'yı da içine aldı\" · 🔴 Hayfa havuzda YOK · " + BK + " · ±3 km (şehir)")),
    ("B", "1918-11-25", "Lettow-Vorbeck Kuzey Rodezya'da teslim oldu — Doğu Afrika'da savaş bitti", "B",
     oy(["Kasama"], MK + ": \"Kuzey Rodezya'ya ... teslim oldu\" — metin kasaba vermiyor → yer_id YOK; kamera havuzdaki Kuzey Rodezya şehri (Kasama (Bemba), -10.21, 31.18)")),
    ("B", "1920-04-25", "San Remo Konferansı — Irak ve Filistin mandası İngiltere'ye verildi", "B",
     oy(["Şam", "Beyrut", "Kudüs", "Bağdat", "Musul"], MK + ": manda konusu yerler (Suriye, Lübnan, Filistin, Irak, Musul); San Remo'nun kendisi değil kararın konusu — konferans yeri havuzda YOK")),
]


def _arg(ad):
    if ad in sys.argv:
        i = sys.argv.index(ad)
        if i + 1 < len(sys.argv):
            return sys.argv[i + 1]
    return None


def yukle_evren():
    import girdi
    Y = [y for y in girdi.yukle(sessiz=True) if y.get("ad")]
    r = subprocess.run(
        ["node", "-e",
         "global.window={};eval(require('fs').readFileSync('data/devletler.js','utf8'));"
         "process.stdout.write(JSON.stringify(window.DEVLETLER.map(d=>({id:d.id,h:d.harita||null}))))"],
        capture_output=True, text=True, encoding="utf-8", cwd=KOK)
    if r.returncode != 0:
        print("🔴 devletler.js okunamadı — ŞART SINANAMAZ, betik durdu:", r.stderr[:200])
        sys.exit(2)
    DIX = {d["id"]: d for d in json.loads(r.stdout)}
    return Y, DIX


def ad_eslesme(Y, ad):
    return [y for y in Y if y["ad"] == ad or y["ad"].split(" (")[0] == ad]


def sahip(y, gs):
    # suzgec.js sahipAnahtari ile AYNI sıra: d → v → s  (f dahil, t hariç)
    for p in y.get("d") or []:
        if p["f"] <= gs < p["t"]:
            return "osmanli"
    for p in y.get("v") or []:
        if p["f"] <= gs < p["t"]:
            return "tabi:" + (p.get("kid") or "")
    for p in y.get("s") or []:
        if p["f"] <= gs < p["t"]:
            return "s:" + p["d"]
    return ""


def kimlik_kutusu(Y, DIX, ids, gs):
    # suzgec.js sahipKimlikte'nin kid'li kısmı; kid'siz v: çekirdek-ad dalı Osmanlı tâbileri
    # içindir (bu kolda kullanılan kimliklerin hiçbiri değil) — taşınmadı, ölçüm alt sınırdır.
    n, bb = 0, [180.0, 90.0, -180.0, -90.0]
    for y in Y:
        if not isinstance(y.get("lat"), (int, float)) or not isinstance(y.get("lon"), (int, float)):
            continue
        k = sahip(y, gs)
        if not k:
            continue
        for i in ids:
            h = (DIX.get(i) or {}).get("h")
            if k in ("s:" + i, "tabi:" + i) or (h and k in ("s:" + h, "tabi:" + h)):
                n += 1
                bb = [min(bb[0], y["lon"]), min(bb[1], y["lat"]), max(bb[2], y["lon"]), max(bb[3], y["lat"])]
                break
    return n, bb


def sart(alan, t, Y, DIX):
    """Dönüş: (geçti_mi, açıklama)"""
    if "yer_id" in alan:
        m = ad_eslesme(Y, alan["yer_id"])
        if len(m) != 1:
            return False, "yer_id '%s' havuzda %d kayıt" % (alan["yer_id"], len(m))
        return True, "yer_id → %s (%.3f, %.3f)" % (m[0]["ad"], m[0]["lat"], m[0]["lon"])
    if "yer_kon" in alan:
        la, lo = alan["yer_kon"]
        if not (-90 <= la <= 90 and -180 <= lo <= 180):
            return False, "yer_kon aralık dışı"
        return True, "yer_kon [%.3f, %.3f]" % (la, lo)
    if "odak_yer" in alan:
        not_ = []
        for a in alan["odak_yer"]:
            m = ad_eslesme(Y, a)
            if len(m) != 1:
                return False, "odak_yer '%s' havuzda %d kayıt" % (a, len(m))
            not_.append("%s (%.2f, %.2f)" % (m[0]["ad"], m[0]["lat"], m[0]["lon"]))
        return True, "odak_yer → " + " · ".join(not_)
    if "odak_kimlik" in alan:
        ids = alan["odak_kimlik"]
        yok = [i for i in ids if i not in DIX]
        if yok:
            return False, "odak_kimlik devletler.js'te YOK: " + ",".join(yok)
        n, bb = kimlik_kutusu(Y, DIX, ids, t)
        if n < 2:
            return False, "odak_kimlik %s → %d yerleşim (<2, app.js kutu kurmaz)" % (",".join(ids), n)
        if bb[2] - bb[0] > KUTU_TAVAN_BOYLAM:
            return False, "odak_kimlik kutusu boylamca %.1f° (> %.0f°)" % (bb[2] - bb[0], KUTU_TAVAN_BOYLAM)
        return True, "odak_kimlik %s → %d yerleşim, kutu [%.1f,%.1f,%.1f,%.1f]" % (",".join(ids), n, *bb)
    return True, "odak alanı yazılmaz (E)"


def satir_oku(yol):
    with open(os.path.join(KOK, yol), encoding="utf-8", newline="") as f:
        return f.read().split("\n")


def satir_coz(s):
    g = s.rstrip()
    virgul = g.endswith(",")
    if virgul:
        g = g[:-1]
    if not (g.startswith("{") and g.endswith("}")):
        return None, None
    try:
        o = json.loads(g)
    except ValueError:
        return None, None
    return o, virgul


def yeni_nesne(o, alan, harf):
    """Anahtar sırası korunur; yeni odak alanları `yer_id`nin hemen ardına girer."""
    yeni = {}
    for k, v in o.items():
        if k == "kapsam_genis":
            continue                       # A/B/C/E: yalan beyan kalkar (D bu kolda yok)
        if k == "yer_id" and "yer_id" in alan:
            yeni[k] = alan["yer_id"]
        else:
            yeni[k] = v
        if k == "yer_id":
            for ak in ("yer_kon", "odak_yer", "odak_kimlik"):
                if ak in alan:
                    yeni[ak] = alan[ak]
    return yeni


def main():
    uygula = "--uygula" in sys.argv
    ayrinti = "--ayrinti" in sys.argv
    grup = _arg("--grup")
    gruplar = set(grup.split(",")) if grup else set("ABCDE")

    Y, DIX = yukle_evren()
    print("yerleşim havuzu: %d kayıt · künye: %d · kip: %s · grup: %s"
          % (len(Y), len(DIX), "UYGULA" if uygula else "KURU KOŞU", ",".join(sorted(gruplar))))

    sayac = {"degisen": 0, "zaten": 0, "kayit_yok": 0, "eski_tutmuyor": 0, "sart_yok": 0,
             "grup_disi": 0, "satir_bicimi": 0}
    sinif_say = {}
    satirlar = {h: satir_oku(p) for h, p in DOSYA.items()}
    degisti = {h: False for h in DOSYA}
    gorulen = set()

    for harf, t, b, sinif, (alan, gerekce) in ONERILER:
        anahtar = (harf, t, b)
        if anahtar in gorulen:
            print("🔴 MÜKERRER ÖNERİ:", anahtar)
            sys.exit(2)
        gorulen.add(anahtar)
        sinif_say[sinif] = sinif_say.get(sinif, 0) + 1
        bas = "[%s] %s %s · %s" % (sinif, harf, t, b[:70])
        if sinif not in gruplar:
            sayac["grup_disi"] += 1
            continue

        bulunan = []
        for i, s in enumerate(satirlar[harf]):
            o, v = satir_coz(s)
            if o is not None and o.get("t") == t and o.get("b") == b:
                bulunan.append((i, o, v))
        if len(bulunan) != 1:
            sayac["kayit_yok"] += 1
            print("🔴 KAYIT %s (%d eşleşme): %s" % ("YOK" if not bulunan else "ÇOK", len(bulunan), bas))
            continue
        i, o, virgul = bulunan[0]

        if json.dumps(o, ensure_ascii=False) != satirlar[harf][i].rstrip().rstrip(","):
            sayac["satir_bicimi"] += 1
            print("🔴 SATIR BİÇİMİ gidiş-dönüşte korunmuyor — DOKUNULMADI:", bas)
            continue

        hedef = yeni_nesne(o, alan, harf)
        if hedef == o and list(hedef) == list(o):
            sayac["zaten"] += 1
            if ayrinti:
                print("= zaten böyle:", bas)
            continue

        beklenen_kg = (harf == "B")
        eski_ok = (o.get("yer_id", "") == "" and not any(o.get(k) for k in ODAK_ALANLARI)
                   and bool(o.get("kapsam_genis")) == beklenen_kg)
        if not eski_ok:
            sayac["eski_tutmuyor"] += 1
            print("🔴 ESKİ DEĞER TUTMUYOR — dokunulmadı:", bas,
                  json.dumps({k: o.get(k) for k in ("yer_id", "kapsam_genis") + ODAK_ALANLARI if k in o},
                             ensure_ascii=False))
            continue

        gecti, not_ = sart(alan, t, Y, DIX)
        if not gecti:
            sayac["sart_yok"] += 1
            print("🔴 ŞART SAĞLANMADI — yazılmadı:", bas, "·", not_)
            continue

        sayac["degisen"] += 1
        satirlar[harf][i] = json.dumps(hedef, ensure_ascii=False) + ("," if virgul else "")
        degisti[harf] = True
        print("✓ " + bas)
        if ayrinti:
            print("     ölçüm   :", not_)
            print("     gerekçe :", gerekce)
            print("     kaynak  : yer/konum hükmü → maddenin kendi `kaynak` alanı (dokunulmadı); "
                  "koordinat → yerin bilinen konumu (gerekçedeki ±km)")
            if o.get("kapsam_genis"):
                print("     kaldırılan: kapsam_genis:true (kamerayı Osmanlı kutusuna gönderiyordu)")

    print("\n" + "=" * 78)
    print("sınıf dağılımı (öneri): " + " · ".join("%s %d" % (k, sinif_say[k]) for k in sorted(sinif_say)))
    print("değişen %(degisen)d · zaten böyle %(zaten)d · kayıt yok %(kayit_yok)d · eski tutmuyor "
          "%(eski_tutmuyor)d · şartı sağlamadı %(sart_yok)d · satır biçimi %(satir_bicimi)d · "
          "grup dışı %(grup_disi)d" % sayac)
    toplam = sum(sinif_say.values())
    print("öneri toplamı: %d (beklenen 152)" % toplam)

    if uygula:
        for h, p in DOSYA.items():
            if degisti[h]:
                with open(os.path.join(KOK, p), "w", encoding="utf-8", newline="") as f:
                    f.write("\n".join(satirlar[h]))
                print("yazıldı:", p)
        print("sonraki adım: py arac/odak_olc.py --dosya kronoloji_cok_1dunya_A.js ; ... _B.js ; py arac/denetle.py")
    else:
        print("KURU KOŞU — hiçbir dosya yazılmadı. Yazmak için --uygula.")
    bozuk = sayac["kayit_yok"] + sayac["eski_tutmuyor"] + sayac["sart_yok"] + sayac["satir_bicimi"]
    sys.exit(1 if bozuk else 0)


if __name__ == "__main__":
    main()
