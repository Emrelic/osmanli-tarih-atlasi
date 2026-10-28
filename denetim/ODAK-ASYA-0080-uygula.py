# -*- coding: utf-8 -*-
"""ODAK-ASYA-0080 — Asya kolunun kronoloji maddelerine HARİTA ODAĞI.

Paket ODAK-0080 · 27 Eylül 2026 · şartname oturumlar/ODAK-ASYA-0080.md
Koşturan: koordinatör (YILDIRIM BAYEZIT) — `data/` sahipliği ondadır (§7).

    py denetim/ODAK-ASYA-0080-uygula.py                 # KURU KOŞU (varsayılan)
    py denetim/ODAK-ASYA-0080-uygula.py --uygula        # data/'ya yaz
    py denetim/ODAK-ASYA-0080-uygula.py --grup A,B,C    # yalnız bu sınıflar
    py denetim/ODAK-ASYA-0080-uygula.py --konsuz        # AK (yer_kon) yerine YEDEĞİ uygula

SINIFLAR (şartname):
  A   tek ve belli yer, havuzda VAR          → yer_id
  AK  tek ve belli yer, havuzda YOK          → yer_kon  (🔴 koordinat YAKLAŞIK — yerin
      bilinen konumu, ölçüm değil; her birinde `yedek` odak_yer var, --konsuz onu uygular)
  B   birkaç belli yer / iki taraf / sınır kesimi → odak_yer ya da odak_kimlik
  C   bir devletin tamamı (ferman, reform)   → odak_kimlik:[tek kimlik]
  E   yer kaynaktan belirlenemedi            → odak YAZILMAZ; BEYANLI ise yalnız
      kapsam_genis kaldırılır (kamera Osmanlı'ya uçmasın, dursun ve panel söylesin)
  A/AK/B/C'de `kapsam_genis:true` KALDIRILIR (yabancı madde — Osmanlı çapı beyanı yalandır).
  D (Osmanlı çapı) bu kolda YOK: 8 dosyanın hiçbiri Osmanlı çekirdeği değil.

SÜZGEÇ (sessiz atlama YOK, hepsi sayılır):
  · madde (dosya, t, b-öneki) ile TEK kayda çözülmeli      → yoksa "kayıt yok"
  · eski değer: madde hâlâ ODAKSIZ/BEYANLI, odak alanı yok  → yoksa "eski tutmuyor"
    (hedefle birebir aynıysa "zaten böyle")
  · yer_id / odak_yer adı havuzda TAM BİR yerleşime çözülmeli (app.js ad kuralı:
    tam ad ya da " (" öncesi) — 0 ya da >1 ise "şartı sağlamadı"
  · odak_kimlik o GÜN ≥ 2 yerleşim (app.js SUZGEC.sahipKimlikte) + künye var
  · metin düzenlemesinden sonra dosya node ile YENİDEN ayrıştırılır; düzenlenen
    madde hedefe, ötekiler eskiye birebir eşit değilse o dosya YAZILMAZ.

ÖLÇÜM ÖNGÖRÜSÜ iki anlamla basılır: ① `arac/odak_olc.py`nin bugünkü `sinifla`sı
(tek kimlikli odak_kimlik'i KUTULU saymaz — satır 156 `len(ok) >= 2` LİSTE
uzunluğuna bakar) ② app.js'in gerçeği (kimlik sayısına değil YERLEŞİM sayısına
bakar, tek kimlik yeter). İkisi farklıysa sebep budur.
"""
import io
import json
import os
import re
import subprocess
import sys
import tempfile

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import odak_olc  # noqa: E402  — olc(): app.js'in KENDİ sınıflaması (arac/odak_cozum.js)

# 🔴 W36b (6 Ekim 2026): `odak_olc.yer_havuzu` · `_oku` · `sinifla` `26741c10` ile (27 Eyl)
#   KALDIRILDI — çözüm Python'dan `arac/odak_cozum.js`e taşındı. Betik o günden beri
#   satır 401'de AttributeError ile çöküyordu (hiçbir şey yazmadan — sessiz silme YOK).
#   Onarım, sınayıcı ODAK-ASYA-0080-sina.js'in W36 çaresiyle uyumlu:
#     · havuz `girdi.yukle()`den kurulur (eski `yer_havuzu`nun BİREBİR tanımı);
#       kurulamaz ya da BOŞ çıkarsa ÇIKIŞ 2 — hiçbir dosyaya dokunulmaz.
#     · `_oku` yerelde (eski tanımın aynısı: veri JS ise JS yorumlayıcısı okur).
#     · "eski tutmuyor" süzgeci: madde ODAK ALANI TAŞIMIYORSA uygundur. Eski
#       `sinifla(o) in (BEYANLI, ODAKSIZ)` + `ODAK` alanları boş şartının bugünkü
#       karşılığı budur (fark yalnız `odak_kutu_kaynak`tı; o da artık sayılıyor).
#     · ÖNGÖRÜ app.js'in gerçek sınıflamasından (`odak_olc.olc`) okunur; eski
#       "odak_olc ≠ app.js" satırı düştü — o fark, kaldırılan Python kuralının
#       kusuruydu ve artık yok.


def _oku(yol):
    """node ile ayrıştır (eski `odak_olc._oku`nun aynısı)."""
    betik = (
        "global.window={};"
        "eval(require('fs').readFileSync(process.argv[1],'utf8'));"
        "const k=Object.keys(global.window)[0];"
        "process.stdout.write(JSON.stringify({ad:k,kayit:global.window[k]||[]}));"
    )
    r = subprocess.run(["node", "-e", betik, yol],
                       capture_output=True, text=True, encoding="utf-8")
    if r.returncode != 0:
        return None, (r.stderr or "").strip()[:200]
    return json.loads(r.stdout), None


def yer_havuzu():
    """Eski `odak_olc.yer_havuzu`nun tanımı — `girdi.yukle()` evreni + " (" öncesi.
    Kurulamaz ya da BOŞ ise None (çağıran ÇIKIŞ 2 verir, ATLAMAZ)."""
    try:
        import girdi
        havuz = set()
        for y in girdi.yukle(sessiz=True):
            ad = y.get("ad")
            if not ad:
                continue
            havuz.add(ad)
            havuz.add(ad.split(" (")[0])        # app.js'in tek esnekliği
    except Exception as e:                      # noqa: BLE001
        print("🔴 yerleşim havuzu kurulamadı: %s" % str(e)[:200])
        return None
    return havuz or None


ODAK_ALANI = ("yer_kon", "yer_id", "odak_kutu_kaynak", "odak_yer", "odak_kimlik")


def eski_sinif(o):
    """ODAK ALANI TAŞIMAYAN madde için sınıf (BEYANLI/ODAKSIZ); taşıyorsa None."""
    if any(o.get(a) not in (None, "", []) for a in ODAK_ALANI):
        return None
    return "BEYANLI" if o.get("kapsam_genis") is True else "ODAKSIZ"

UYGULA = "--uygula" in sys.argv
KONSUZ = "--konsuz" in sys.argv
GRUP = None
if "--grup" in sys.argv:
    GRUP = set(sys.argv[sys.argv.index("--grup") + 1].split(","))

SA, CN, OA, OZ = ("kronoloji_sinir_asya.js", "kronoloji_cin.js",
                  "kronoloji_orta_asya.js", "kronoloji_ozbek.js")
HI, GA, JP, TM = ("kronoloji_hindistan.js", "kronoloji_guney_asya.js",
                  "kronoloji_japonya.js", "kronoloji_timurlu.js")
DOSYALAR = [SA, CN, OA, OZ, HI, GA, JP, TM]

KARARLAR = []


def K(dosya, t, bon, sinif, gerekce, **alan):
    KARARLAR.append(dict(dosya=dosya, t=t, bon=bon, sinif=sinif,
                         gerekce=gerekce, alan=alan))


SINIR = "sınır kesimi — kamera kesimin iki yakasındaki havuz noktalarına (imza yeri değil)"
MET = "yer maddenin kendi metninde (d) adıyla geçiyor"

# ───────────────────────── kronoloji_sinir_asya.js (95 madde, 94 BEYANLI) ──
# 🔴 ÜRETİLMİŞ DOSYA: üreticisi denetim/ARAC-D5-ASYA-KRONOLOJI-0916.py. Üretici
#    yeniden koşarsa bu odaklar SİLİNİR — koordinatöre raporlandı.
K(SA, "1287-01-01", "Wareru Aşağı Birmanya", "C", "Hanthawaddy'nin doğuşu — yeni devletin toprağı (Aşağı Birmanya); Martaban havuzda yok", odak_kimlik=["hanthawaddy"])
K(SA, "1292-01-01", "Kertanagara öldürüldü", "B", "Singhasari'nin atlas kimliği Bali/Sumbawa'yı döndürüyor (yanlış bölge); başkent Singhasari (Doğu Cava) havuzda yok, en yakın havuz noktası Malang — gösterim", odak_yer=["Malang"])
K(SA, "1318-01-01", "Mübârek Şah Halacî Devâgirî", "B", "ilhak edilen ülkenin merkezi Devâgirî — " + MET, odak_yer=["Devagiri (Devletâbâd)"])
K(SA, "1323-01-01", "Uluğ Han Varangal", "A", "Varangal zaptı — " + MET, yer_id="Varangal")
K(SA, "1336-01-01", "Harihara ve Bukka", "B", "yeni başkent Vijayanagara — " + MET + "; bağımsızlık ilanının yeri kaynakta yok, yer_id YAZILMADI", odak_yer=["Vijayanagara (Hampi)"])
K(SA, "1340-01-01", "Bengal Delhi Sultanlığı'ndan", "B", "iki valilik merkezi Leknevtî (Gaur) ve Sonârgâon — " + MET, odak_yer=["Gaur (Lakhnautî)", "Sonârgâon"])
K(SA, "1343-01-01", "III. Ballala", "B", "Hoysala'yı sıkıştıran iki güç Ma'bar (Madurai) ve Vijayanagara — " + MET + "; ölüm yeri kaynakta yok", odak_yer=["Madurai", "Vijayanagara (Hampi)"])
K(SA, "1351-01-01", "Ayutthaya Krallığı kuruldu", "A", "Ayutthaya'yı başkent yaparak krallığı kurdu — " + MET, yer_id="Ayutthaya")
K(SA, "1354-01-01", "Phagmodrupa", "C", "Tibet'in idaresi el değiştirdi — ülke çapı; Nêdong havuzda yok", odak_kimlik=["tibet"])
K(SA, "1370-01-01", "Melik Ahmed Handeş", "B", "farukiler kimliği o gün 1 yerleşim (≥2 şartı tutmuyor); Handeş'in havuz noktaları Asîrgarh + Burhânpûr — gösterim", odak_yer=["Asîrgarh", "Burhânpûr"])
K(SA, "1394-01-01", "Jaunpûr valisi", "B", "bağımsızlaşan eyaletin merkezi Jaunpûr — " + MET, odak_yer=["Cavnpur (Jaunpur)"])
K(SA, "1396-01-01", "Prens Parameşvara", "A", "Malaka şehrinin kuruluşu — " + MET, yer_id="Malaka")
K(SA, "1400-01-01", "Trần hanedanı devrildi", "C", "Đại Việt tahtı el değiştirdi — ülke çapı; yer kaynakta yok", odak_kimlik=["tran-hanedani"])
K(SA, "1405-01-01", "Awang Alak Betatar", "B", "sultanlığın merkezi Brunei — başlıkta adıyla; kurulan ilk sultanlık dar alanlıydı, brunei-sultanligi kimliği sonraki geniş toprağı da döndürür", odak_yer=["Brunei"])
K(SA, "1431-01-01", "Ayutthaya ordusu Angkor", "A", "Angkor yağması — " + MET, yer_id="Angkor")
K(SA, "1438-01-01", "Zayıflayan Sukhothai", "B", "iki taraf Sukhothai ve Ayutthaya — " + MET, odak_yer=["Sukhothai", "Ayutthaya"])
K(SA, "1450-01-01", "Şerif Ebû Bekir", "B", "sultanlığın başkenti Jolo — " + MET + " (yıl kaynakta soru işaretli)", odak_yer=["Colo (Jolo)"])
K(SA, "1451-01-01", "Lengâh kabilesinden", "A", "Mültan'ın idaresini ele geçirdi — " + MET, yer_id="Multan")
K(SA, "1492-01-01", "Kāsım Berîd", "A", "Bîder'de bağımsızlık ilanı — " + MET, yer_id="Bîdar")
K(SA, "1503-01-01", "Albuquerque Koçin", "A", "Koçin'de kale kuruldu — " + MET, yer_id="Koçin")
K(SA, "1521-01-01", "Ali Mugâyet Şah", "C", "Açe Sultanlığı'nın doğuşu — yeni devletin toprağı (Kuzey Sumatra)", odak_kimlik=["ace-sultanligi"])
K(SA, "1521-01-01", "Portekizliler Pasai", "A", "Pasai'nin alınışı — " + MET, yer_id="Samudra Pasai")
K(SA, "1522-01-01", "Sunan Gunung Jati Bentem", "A", "Bentem limanının alınışı — " + MET, yer_id="Banten")
K(SA, "1527-01-01", "Behmenî Sultanlığı sona erdi", "B", "beş ardıl merkezi (Bîcâpûr · Ahmednagar · Berâr · Golkonda · Bîder) — " + MET + " (Berâr = Elicpûr)", odak_yer=["Bîcâpur (Bijapur)", "Ahmednagar", "Elicpûr (Achalpur)", "Golkonda", "Bîdar"])
K(SA, "1527-01-01", "Sind hâkimi Hüseyin Şah Argun", "A", "Mültan'daki hânedana son verildi — " + MET, yer_id="Multan")
K(SA, "1527-01-01", "Sunda Kalapa limanı", "A", "Sunda Kalapa (Cayakarta) limanının alınışı — " + MET + "; havuz adı Batavia (Cakarta)", yer_id="Batavia (Cakarta)")
K(SA, "1527-01-01", "Mạc Đăng Dung", "B", "Thăng Long (Hanoi) valisinin taht gaspı — " + MET + ". 🔴 mac-hanedani kimliği KULLANILMADI: o gün Erdel/Budin/Peşte döndürüyor (suzgec.js çekirdek-ad eşleşmesi 'Mac'→'Macar' — ayrı rapor)", odak_yer=["Hanoi (Thăng Long)"])
K(SA, "1530-01-01", "Alâeddin Riâyet Şah", "B", "Johor nehri kıyısında kuruluş — " + MET + "; Pekan Tua havuzda yok", odak_yer=["Johor"])
K(SA, "1552-01-01", "Hasanüddin Demak", "C", "Bentem bağımsız devlet oldu, Lampung'a genişledi — yeni devletin toprağı", odak_kimlik=["banten-sultanligi"])
K(SA, "1555-01-01", "Bayinnaung Ava", "A", "Ava'nın alınışı — " + MET, yer_id="Ava")
K(SA, "1558-01-01", "Lan Na başkenti", "A", "Chiang Mai'nin alınışı — " + MET, yer_id="Chiang Mai")
K(SA, "1558-01-01", "Nguyễn ailesi", "C", "Huế merkezli güney eyaletlerinin idaresi — beyliğin toprağı", odak_kimlik=["nguyen-beyligi"])
K(SA, "1562-01-01", "Mâlvâ, Ekber", "B", "ilhak edilen Mâlvâ'nın havuz noktası Mandu — gösterim; yer kaynakta yok", odak_yer=["Mandu (Mândû)"])
K(SA, "1564-01-01", "Sûrî hânedanının Bengal", "B", "Sûrîlerin Bengal kolu — sur-hanedani o gün 0 yerleşim; Bengal'in havuz noktası Gaur — gösterim", odak_yer=["Gaur (Lakhnautî)"])
K(SA, "1568-01-01", "Kral Mukunda", "B", "Orissa krallığı — orissa kimliği o gün 0 yerleşim; Orissa'nın havuz noktası Kattak — gösterim", odak_yer=["Kattak (Cuttack)"])
K(SA, "1571-01-01", "Legazpi Manila", "A", "Manila'nın alınışı — " + MET, yer_id="Manila")
K(SA, "1572-01-01", "Nizamşâhîler Berâr", "B", "iki taraf: Berâr (Elicpûr) ve Nizamşâhî merkezi Ahmednagar — gösterim", odak_yer=["Elicpûr (Achalpur)", "Ahmednagar"])
K(SA, "1573-01-01", "Oda Nobunaga", "A", "şogunun Kyoto'dan sürülmesi — " + MET, yer_id="Kyoto")
K(SA, "1578-01-01", "Parçalanan Demak", "B", "Demak'ın parçalanması — " + MET + "; yeni hâkimler kaynakta adsız", odak_yer=["Demak"])
K(SA, "1585-01-01", "Orta Cava'da Mataram", "B", "Orta Cava — mataram-sultanligi o gün 0 yerleşim; 🔴 havuzdaki 'Mataram (Lombok)' YANLIŞ Mataram, KULLANILMADI; Orta Cava havuz noktaları Yogyakarta + Surakarta — gösterim", odak_yer=["Yogyakarta", "Surakarta (Solo)"])
K(SA, "1601-01-01", "Ekber Şah Asîrgarh", "A", "Asîrgarh kuşatması ve zaptı — " + MET, yer_id="Asîrgarh")
K(SA, "1689-08-27", "Nerçinsk Antlaşması", "B", SINIR + " (Argun–Şilka–Amur)", odak_yer=["Nerçinsk", "Aigun"])
K(SA, "1727-10-12", "Bur Antlaşması", "B", SINIR + " (Kiahta havuzda yok; Selenginsk ile Urga arasında)", odak_yer=["Selenginsk", "Urga (Ulan Batur)"])
K(SA, "1792-01-01", "Çin–Nepal antlaşması", "B", SINIR + " (Nepal–Tibet Himalayası)", odak_yer=["Katmandu", "Şigatse"])
K(SA, "1816-03-04", "Sugauli ile Kali", "B", SINIR + " (Kumaon havuzda yok; Leh–Katmandu kutusu Kumaon'u içine alır)", odak_yer=["Leh (Ladakh)", "Katmandu"])
K(SA, "1816-03-04", "Sugauli Antlaşması yürürlükte", "B", SINIR + " (Nepal ovaları / Terai)", odak_yer=["Katmandu", "Gorakhpûr"])
K(SA, "1842-09-17", "Ladakh–Tibet mektubu", "B", SINIR + " (Ladakh yakası; Tibet yakasında havuz noktası yok)", odak_yer=["Leh (Ladakh)"])
K(SA, "1856-03-24", "Nepal–Tibet barışı", "B", SINIR + " (Kerong–Kuti)", odak_yer=["Katmandu", "Şigatse"])
K(SA, "1858-05-28", "Aigun Antlaşması", "B", SINIR + " (Amur boyu)", odak_yer=["Aigun", "Nikolayevsk (Amur ağzı)"])
K(SA, "1860-08-13", "Lizbon Antlaşması yürürlükte", "B", SINIR + " (Timor; imza yeri Lizbon KAMERA DEĞİL)", odak_yer=["Dili", "Kupang"])
K(SA, "1860-10-24", "Peking Konvansiyonu — Kowloon", "B", "Kowloon — Hong Kong'un parçası; havuz noktası Hong Kong", odak_yer=["Hong Kong"])
K(SA, "1860-11-01", "Katmandu Antlaşması", "B", SINIR + " (Kali–Gorakhpur arası Terai)", odak_yer=["Gorakhpûr", "Katmandu"])
K(SA, "1860-11-14", "Pekin Ek Antlaşması", "B", SINIR + " (Ussuri–Tumen)", odak_yer=["Habarovka", "Vladivostok"])
K(SA, "1864-10-07", "Tarbagatay (Çuguçak)", "B", SINIR + " (Tarbagatay'dan Kaşgar batısına)", odak_yer=["Çöçek (Tarbagatay)", "Gulca (Yining)", "Kaşgar"])
K(SA, "1868-07-03", "İngiliz–Siyam Sözleşmesi", "B", SINIR + " (Tenasserim)", odak_yer=["Moulmein (Mawlamyine)", "Mergui (Myeik)"])
K(SA, "1873-01-31", "İngiliz–Rus anlaşması — Amuderya", "B", SINIR + " (Amuderya · Badahşan · Vahan)", odak_yer=["Termez", "Feyzâbâd (Bedahşan)", "Horog (Khorog)"])
K(SA, "1875-01-07", "Dhundwa tepeleri", "B", SINIR + " (Dhundwa havuzda yok; Hindistan–Nepal sınırının genel kesimi)", odak_yer=["Katmandu", "Gorakhpûr"])
K(SA, "1881-08-19", "İli (St. Petersburg)", "B", SINIR + " (Tekes–Kara İrtiş; Zaysan " + "metinde adıyla)", odak_yer=["Gulca (Yining)", "Zaysan"])
K(SA, "1884-05-22", "Novi-Margelan", "B", SINIR + " (Kaşgar kesimi — metinde adıyla)", odak_yer=["Kaşgar", "Narın (Naryn)"])
K(SA, "1885-09-10", "Londra protokolü — Afgan", "B", SINIR + " (Zülfikar–Amuderya; imza yeri Londra KAMERA DEĞİL)", odak_yer=["Herat", "Merv (Mari)"])
K(SA, "1887-06-26", "Pekin Sözleşmesi — Tonkin", "B", SINIR + " (Tonkin–Çin)", odak_yer=["Lạng Sơn", "Cao Bằng", "Nanning"])
K(SA, "1888-01-26", "Kham Ab", "B", SINIR + " (Zülfikar–Kham Ab)", odak_yer=["Herat", "Merv (Mari)", "Belh"])
K(SA, "1888-08-20", "Seul Tumen", "B", SINIR + " (Tumen ağzı)", odak_yer=["Kyongsong (Gyeongseong)", "Vladivostok"])
K(SA, "1890-08-27", "Kalküta Sözleşmesi", "B", SINIR + " (Sikkim–Tibet; Sikkim havuzda yok, Katmandu–Gyantse kutusu içine alır)", odak_yer=["Katmandu", "Gyantse"])
K(SA, "1891-06-20", "Londra Sözleşmesi — Borneo'da", "B", SINIR + " (Borneo doğu kıyısı 4°10')", odak_yer=["Tawau kıyısı (bölge)", "Tarakan"])
K(SA, "1891-06-20", "Londra Sözleşmesi — Sarawak", "B", SINIR + " (Sarawak–Hollanda Borneosu)", odak_yer=["Kuching (Sarawak)", "Pontianak"])
K(SA, "1893-10-03", "Fransız–Siyam Barış", "B", SINIR + " (Mekong sol yakası)", odak_yer=["Luang Prabang", "Vientiane", "Champasak"])
K(SA, "1893-11-12", "Durand anlaşması", "B", SINIR + " (Afgan–Hint hattı)", odak_yer=["Kâbil", "Peşâver", "Kandehar"])
K(SA, "1893-12-20", "Barlık protokolü", "B", SINIR + " (Tarbagatay–Barlık)", odak_yer=["Çöçek (Tarbagatay)"])
K(SA, "1894-08-23", "Londra Konvansiyonu onaylandı", "B", SINIR + " (Burma–Çin güneyi)", odak_yer=["Bhamo", "Tengyue (Tengchong)", "Kengtung"])
K(SA, "1894-10-17", "İngiliz–Siyam sınır haritaları", "B", SINIR + " (kuzey Burma–Siyam, Mae Sai)", odak_yer=["Chiang Rai", "Kengtung"])
K(SA, "1895-03-11", "İngiliz–Rus Pamir notaları", "B", SINIR + " (Pence–Pamir–Zorkul)", odak_yer=["Horog (Khorog)", "Feyzâbâd (Bedahşan)"])
K(SA, "1895-03-11", "Pamir notaları — Vahan", "B", SINIR + " (Vahan'ın doğu ucu)", odak_yer=["Horog (Khorog)", "Kaşgar"])
K(SA, "1895-03-11", "Pamir'de Rus–Çin", "B", SINIR + " (Kizil Jik Dawan güneyi, Pamir)", odak_yer=["Kaşgar", "Horog (Khorog)"])
K(SA, "1896-01-15", "İngiliz–Fransız Deklarasyonu", "B", SINIR + " (Mekong: Burma–Laos)", odak_yer=["Kengtung", "Muang Sing", "Chiang Rai"])
K(SA, "1896-08-07", "1895 Tamamlayıcı Sözleşme", "B", SINIR + " (Tonkin/Laos–Yünnan)", odak_yer=["Muang Sing", "Lạng Sơn", "Kunming"])
K(SA, "1897-06-05", "Peking Anlaşması onaylandı", "B", SINIR + " (Burma–Çin güneyi, Namwan)", odak_yer=["Bhamo", "Tengyue (Tengchong)", "Kengtung"])
K(SA, "1899-03-14", "Macdonald hattı", "B", SINIR + " (Karakurum; 🔴 havuzdaki 'Hunza' KOLOMBİYA'DAKİ Tunja — KULLANILMADI)", odak_yer=["Srinagar (Keşmir)", "Kaşgar", "Leh (Ladakh)"])
K(SA, "1899-03-19", "Hong Kong Yeni Toprakları", "B", "Yeni Topraklar'ın kara sınırı — havuz noktası Hong Kong", odak_yer=["Hong Kong"])
K(SA, "1904-02-13", "Fransız–Siyam Sözleşmesi", "B", SINIR + " (Luang Prabang karşısı — Dangrek)", odak_yer=["Luang Prabang", "Battambang", "Angkor (Siem Reap)"])
K(SA, "1905-09-05", "Portsmouth Antlaşması", "B", SINIR + " (Sahalin 50. paralel; imza yeri Portsmouth KAMERA DEĞİL)", odak_yer=["Aleksandrovsk (Kuzey Sahalin)", "Korsakov (Güney Sahalin)"])
K(SA, "1907-03-23", "Fransız–Siyam Antlaşması", "B", SINIR + " (Kamboçya–Siyam; Battambang metinde adıyla)", odak_yer=["Battambang", "Angkor (Siem Reap)"])
K(SA, "1908-08-29", "1904 Timor Sözleşmesi", "B", SINIR + " (Timor)", odak_yer=["Dili", "Kupang"])
K(SA, "1909-07-09", "Bangkok Antlaşması", "B", SINIR + " (Siyam–Malaya, Perlis–Golok)", odak_yer=["Kedah (Alor Setar)", "Kelantan (Kota Bharu)"])
K(SA, "1909-09-04", "Gando Anlaşması", "B", SINIR + " (Tumen + Paektu; Hamhung–Vladivostok kutusu ikisini de içine alır)", odak_yer=["Hamhung", "Vladivostok"])
K(SA, "1913-11-05", "Rus–Çin Pekin Deklarasyonu", "C", "Dış Moğolistan'ın sınırları — o ülkenin tamamı", odak_kimlik=["mogolistan"])
K(SA, "1914-06-25", "Timor sınırı hakem", "B", SINIR + " (Oecussi; hakem yeri Paris KAMERA DEĞİL)", odak_yer=["Kupang", "Atapupu"])
K(SA, "1914-07-03", "Simla Sözleşmesi", "B", SINIR + " (McMahon hattı — Tibet–Assam; Simla/Assam havuzda yok, Lhasa–Myitkyina kutusu hattı içine alır)", odak_yer=["Lhasa", "Myitkyina"])
K(SA, "1915-06-07", "Kiahta Üçlü", "C", "Dış Moğolistan'ın özerkliği ve sınırı — o ülkenin tamamı", odak_kimlik=["mogolistan"])
K(SA, "1915-06-12", "Horgos nehri", "B", SINIR + " (Horgos — Gulca ile Almatı arası)", odak_yer=["Gulca (Yining)", "Almatı (Vernıy)"])
K(SA, "1915-09-28", "Londra Anlaşması — Borneo", "B", SINIR + " (Sebatik / 4°20'; Tawao metinde adıyla)", odak_yer=["Tawau kıyısı (bölge)", "Tarakan"])
K(SA, "1916-08-17", "Timor sınırını düzenleyen", "B", SINIR + " (Maucatar–Noimuti)", odak_yer=["Kupang", "Atapupu", "Dili"])
K(SA, "1919-08-08", "Ravalpindi Antlaşması", "B", SINIR + " (Hayber batısı)", odak_yer=["Peşâver", "Kâbil"])
K(SA, "1922-02-06", "Kabil Antlaşması yürürlükte", "B", SINIR + " (Torham sırtı)", odak_yer=["Peşâver", "Kâbil"])

# ───────────────────────── kronoloji_cin.js (25 BEYANLI, `devlet` alanı yok) ──
CK = "kültür/idare eseri — tek yeri kaynakta yok; hanedan kutusu gösterim"
K(CN, "1313-01-01", "Konfüçyüsçü sınav", "C", "imparatorluk sınav sistemi — Yuan çapında", odak_kimlik=["yuan-hanedani"])
K(CN, "1313-01-01", "Wang Zhen", "C", CK, odak_kimlik=["yuan-hanedani"])
K(CN, "1370-01-01", "İmparatorluk sınav sistemi Ming", "C", "Ming çapında sistem", odak_kimlik=["ming-hanedani"])
K(CN, "1381-01-01", "Sarı Kayıtlar", "C", "Ming çapında hane/vergi sistemi", odak_kimlik=["ming-hanedani"])
K(CN, "1403-01-01", "Yongle Ansiklopedisi", "C", CK, odak_kimlik=["ming-hanedani"])
K(CN, "1406-01-01", "Ming, Đại Ngu", "B", "işgal edilen taraf Vietnam (Hồ) — o gün 12 yerleşim", odak_kimlik=["ho-hanedani"])
K(CN, "1414-01-01", "Zheng He'nin dördüncü", "B", "seferin ulaştığı yerler Hürmüz · Arabistan (Mekke) · Doğu Afrika — " + MET, odak_yer=["Hürmüz Adası", "Mekke", "Mogadişu", "Malindi"])
K(CN, "1424-08-12", "Yongle, Moğol seferinde", "E", "ölüm yeri kaynakta yok ('yolda') — bulunamadı; kapsam_genis kaldırılır ki kamera Osmanlı'ya uçmasın")
K(CN, "1427-01-01", "Ming, Vietnam'dan çekildi", "B", "çekilinen ülke Vietnam — le-hanedani künyesi 1428'de başlıyor (o gün 0); havuz noktası Thăng Long", odak_yer=["Hanoi (Thăng Long)"])
K(CN, "1581-01-01", "Tek Kırbaç", "C", "Ming çapında vergi reformu", odak_kimlik=["ming-hanedani"])
K(CN, "1592-01-01", "Wu Cheng'en", "C", CK, odak_kimlik=["ming-hanedani"])
K(CN, "1592-05-23", "Japonya'nın Kore'yi işgali", "B", "savaş sahası Kore (Joseon) — o gün 15 yerleşim", odak_kimlik=["joseon"])
K(CN, "1645-07-21", "Saç örgüsü", "C", "Qing çapında ferman", odak_kimlik=["qing-hanedani"])
K(CN, "1685-01-01", "Dört gümrük limanı", "B", "dört liman: Kanton · Xiamen · Ningbo · Şanghay — " + MET, odak_yer=["Kanton (Guangzhou)", "Amoy (Xiamen)", "Ningbo", "Şanghay"])
K(CN, "1700-01-01", "Çin Ayinleri", "C", "Çin misyonları tartışması — tek yeri yok; Qing kutusu gösterim", odak_kimlik=["qing-hanedani"])
K(CN, "1708-01-01", "Kangxi Atlası", "C", "bütün imparatorluğun haritalanması — gerçekten Qing çapında", odak_kimlik=["qing-hanedani"])
K(CN, "1711-01-01", "Kangxi toprak vergisi", "C", "Qing çapında vergi kararı", odak_kimlik=["qing-hanedani"])
K(CN, "1716-01-01", "Kangxi Sözlüğü", "C", CK, odak_kimlik=["qing-hanedani"])
K(CN, "1755-01-01", "Qianlong'un Cungar", "B", "seferin hedefi Cungar Hanlığı — o gün 15 yerleşim", odak_kimlik=["cungar"])
K(CN, "1782-01-01", "Siku Quanshu", "C", CK, odak_kimlik=["qing-hanedani"])
K(CN, "1796-02-01", "Beyaz Lotus", "B", "kaynak yalnız 'orta Çin' diyor; orta Çin'in havuz noktaları Xiangyang + Xi'an — gösterim", odak_yer=["Xiangyang", "Xi'an (Chang'an)"])
K(CN, "1862-01-01", "Kendini Güçlendirme", "C", "Qing çapında modernleşme programı", odak_kimlik=["qing-hanedani"])
K(CN, "1899-10-18", "Boksör Ayaklanması", "B", "ayaklanmanın başladığı Şantung — " + MET + "; Şantung'un havuz noktaları Jinan + Yantai", odak_yer=["Jinan", "Yantai (Chefoo)"])
K(CN, "1901-01-29", "Yeni Politikalar", "C", "Qing çapında reform", odak_kimlik=["qing-hanedani"])
K(CN, "1905-09-02", "İmparatorluk sınav sistemi (keju) kaldırıldı", "C", "Qing çapında karar", odak_kimlik=["qing-hanedani"])

# ───────────────────────── kronoloji_orta_asya.js (20 ODAKSIZ) ──
NG = "Nogay ordasının iç/dış siyaseti — ordanın toprağı (o gün 5-14 yerleşim)"
K(OA, "1420-06-01", "Edige'nin ölümü", "C", "Cuci ulusu / Deştikıpçak — " + MET + "; ölüm yeri kaynakta yok. nogay künyesi 1440'ta başlıyor (o gün 0)", odak_kimlik=["altinorda"])
K(OA, "1500-01-01", "Mûsâ Mirza", "C", NG, odak_kimlik=["nogay"])
K(OA, "1554-01-01", "Yûsuf Mirza öldürüldü", "C", NG + "; ölüm yeri kaynakta yok", odak_kimlik=["nogay"])
K(OA, "1563-01-01", "İsmâil ve Tin Ahmed", "C", NG, odak_kimlik=["nogay"])
K(OA, "1578-01-02", "Urus Mirza", "C", NG, odak_kimlik=["nogay"])
K(OA, "1600-01-01", "İşterek Mirza", "C", NG, odak_kimlik=["nogay"])
K(OA, "1865-01-01", "Kitlesel göç sona erdi", "B", "iskân yerleri Çukurova · Ankara · Konya · Kırşehir · Sivas — " + MET + " (Çukurova = Adana)", odak_yer=["Ankara", "Konya", "Kırşehir", "Sivas", "Adana"])
K(OA, "1922-04-01", "Nogay kurultayı Açikulak", "B", "Açikulak havuzda yok; Nogay bozkırının havuz noktaları (Kuma bozkırı + Terek deltası) arasında — gösterim", odak_yer=["Stavropol–Kuma bozkırı", "Terek deltası (Kızlar)"])
K(OA, "1601-01-01", "Küçüm Han Nogayların", "C", "Nogayların yanında öldürüldü — " + MET + "; ölüm yeri kaynakta yok, ordanın toprağı", odak_kimlik=["nogay"])
K(OA, "1465-01-02", "Ebülhayr'a tâbi olmayan", "B", "Çu ile Talas arası — " + MET + "; havuz noktaları Taraz (Talas) + Balasagun (Çu)", odak_yer=["Taraz (Evliya-Ata)", "Balasagun (Ak-Beşim)"])
K(OA, "1847-01-01", "KENASARI KIRGIZLAR", "B", "Çu'nun yukarı mecrası (Mey-Tuble) — " + MET + "; Mey-Tuble havuzda yok, en yakın Çu noktası Balasagun", odak_yer=["Balasagun (Ak-Beşim)"])
K(OA, "1207-01-01", "Kırgızlar Cengiz Han'a", "E", "itaatin yeri kaynakta yok — bulunamadı")
K(OA, "1218-01-01", "Cuci Kırgız direnişini", "E", "bastırmanın yeri kaynakta yok — bulunamadı")
K(OA, "1650-01-01", "Kırgızların İslâmlaşması", "E", "süreç, yeri kaynakta yok — bulunamadı")
K(OA, "1864-01-01", "Kırgızlar Rus hâkimiyetine", "B", "Kırgız toprakları (Semireçe/Fergana) — havuz noktaları Narın · Issık Göl · Oş — gösterim", odak_yer=["Narın (Naryn)", "Issık Göl havzası", "Oş"])
K(OA, "1916-06-25", "II. Nikola'nın fermanı", "B", "Çu ve Isık Göl vadileri — " + MET, odak_yer=["Issık Göl havzası", "Balasagun (Ak-Beşim)"])
K(OA, "1890-01-01", "Sart Kalmuklar", "B", "Isık Göl civarı — " + MET, odak_yer=["Issık Göl havzası"])
K(OA, "1879-09-01", "BİRİNCİ GÖKTEPE", "AK", "Göktepe muharebesi — havuzda yok. 🔴 yer_kon YAKLAŞIK: Göktepe kalesinin bilinen konumu (~38,16 K · 57,97 D), ölçüm değil", yer_kon=[38.16, 57.97], yedek=dict(odak_yer=["Krasnovodsk (Türkmenbaşı)", "Serahs"]))
K(OA, "1856-01-01", "Çokan Velihanoğlu", "B", "'Kırgızistan'da yaptığı gezi' — " + MET + "; Kırgız havuz noktaları — gösterim", odak_yer=["Issık Göl havzası", "Narın (Naryn)"])
K(OA, "1885-01-01", "Radloff Manas", "A", "yayın yeri St. Petersburg — " + MET, yer_id="St. Petersburg")

# ───────────────────────── kronoloji_ozbek.js (18 ODAKSIZ) ──
HZ = ["Hîve", "Köhne Ürgenç (Gürgenç)"]
HV = "Hîve hanının saltanat olayı — yeri kaynakta yok; hanlığın toprağı (o gün 5 yerleşim)"
K(OZ, "1538-01-01", "Ubeydullah Han Harzem", "B", "Harzem (Hîve) toprağı — " + MET, odak_yer=HZ)
K(OZ, "1596-01-01", "Harzem'in (Hîve) yeniden", "B", "Harzem (Hîve) — " + MET, odak_yer=HZ)
K(OZ, "1512-01-01", "Yadigâroğulları Harzem", "B", "Harzem'in fethi, başkent Köhne Ürgenç — " + MET, odak_yer=HZ)
K(OZ, "1626-01-01", "Ebulgazi'nin iktidar", "B", "iki yer: Harzem ve sığındığı Yesi (Türkistan) — " + MET, odak_yer=["Hîve", "Türkistan (Yesi)"])
K(OZ, "1629-01-01", "Ebulgazi başkent Hîve", "A", "Hîve'nin baskınla alınışı — " + MET, yer_id="Hîve")
K(OZ, "1639-01-01", "Ebulgazi'nin on yıllık", "B", "Harzem'e dönüş — " + MET + "; kaçış yeri kaynakta yok", odak_yer=HZ)
K(OZ, "1645-01-01", "Ebulgazi tüm Harzem", "C", "bölgenin tamamı — hanlığın toprağı", odak_kimlik=["hive"])
K(OZ, "1648-01-01", "Ebulgazi'nin Türkmen", "B", "iki taraf: Hîve ve Türkmen boyları (o gün 5 + 3 yerleşim); Kalmuk akınlarının yeri kaynakta yok", odak_kimlik=["hive", "turkmen"])
K(OZ, "1655-01-01", "Ebulgazi'nin Buhara", "B", "iki taraf: Hîve ve Buhara hanlıkları", odak_kimlik=["hive", "buhara"])
K(OZ, "1659-01-01", "Ebulgazi Bahadır Han'ın Şecere-i Terâkime", "C", HV, odak_kimlik=["hive"])
K(OZ, "1663-01-01", "Ebulgazi Bahadır Han'ın ölümü", "C", HV + " (ölüm yeri kaynakta yok)", odak_kimlik=["hive"])
K(OZ, "1825-01-01", "Allahkulı Han", "C", HV, odak_kimlik=["hive"])
K(OZ, "1864-01-01", "Seyyid Muhammed Rahim", "C", HV, odak_kimlik=["hive"])
K(OZ, "1873-08-12", "Hîve Hanlığı Rus himayesine", "C", "hanlığın tamamı himayeye girdi (Gendemiyan havuzda yok)", odak_kimlik=["hive"])
K(OZ, "1873-01-01", "Osmanlı'nın Hîve'ye", "B", "elçilerin gittiği üç merkez Kâbil · Buhara · Hîve — " + MET, odak_yer=["Kâbil", "Buhara", "Hîve"])
K(OZ, "1920-02-02", "Son Han Seyyid Abdullah", "C", HV, odak_kimlik=["hive"])
K(OZ, "1920-04-26", "Harezm Halk Cumhuriyeti", "B", "harezm-halk-cumhuriyeti ve hive kimlikleri o gün 0 (künye sınırı); Harzem havuz noktaları — gösterim", odak_yer=HZ)
K(OZ, "1569-01-01", "Osmanlı'nın Astrahan", "A", "Astrahan kuşatması — " + MET, yer_id="Astrahan")

# ───────────────────────── kronoloji_hindistan.js (8 ODAKSIZ + 9 BEYANLI) ──
BB = "Bâbürlü çapında karar — imparatorluğun toprağı"
K(HI, "1542-01-01", "Şîr Şah Sûrî Delhi-Bengal", "C", "Bengal'den Kâbil'e yol + vergi/sikke reformu — Sûrî devletinin tamamı (o gün 32 yerleşim)", odak_kimlik=["sur-hanedani"])
K(HI, "1564-01-01", "Ekber Şah gayrimüslimlerden", "C", BB, odak_kimlik=["babur-imparatorlugu"])
K(HI, "1571-01-01", "Ekber Şah yeni başkent", "AK", "Fetihpûr Sikri havuzda yok — 'Agra yakınında' " + MET + ". 🔴 yer_kon YAKLAŞIK: Fetihpûr Sikri'nin bilinen konumu (~27,09 K · 77,66 D)", yer_kon=[27.09, 77.66], yedek=dict(odak_yer=["Agra"]))
K(HI, "1575-01-01", "Ekber Şah Fetihpûr Sikri'de", "AK", "İbâdethâne Fetihpûr Sikri'de — " + MET + "; havuzda yok. 🔴 yer_kon YAKLAŞIK (~27,09 K · 77,66 D)", yer_kon=[27.09, 77.66], yedek=dict(odak_yer=["Agra"]))
K(HI, "1579-06-22", "Ekber Şah Mahzar", "C", BB, odak_kimlik=["babur-imparatorlugu"])
K(HI, "1582-01-01", "Ekber Şah Dîn-i İlâhî", "C", BB + " (inanç yalnız saray çevresinde yayıldı; sarayın yeri kaynakta yok)", odak_kimlik=["babur-imparatorlugu"])
K(HI, "1590-01-01", "Ebü'l-Fazl", "C", "imparatorluğun almanağı — Bâbürlü toprağı", odak_kimlik=["babur-imparatorlugu"])
K(HI, "1600-12-31", "İngiliz Doğu Hindistan Şirketi Londra", "A", "şirket Londra'da kuruldu — başlıkta adıyla", yer_id="Londra")
K(HI, "1631-06-17", "Mümtaz Mahal", "A", "Burhanpûr'da öldü — " + MET, yer_id="Burhânpûr")
K(HI, "1679-04-02", "Evrengzîb gayrimüslimlerden", "C", BB, odak_kimlik=["babur-imparatorlugu"])
K(HI, "1689-03-11", "Evrengzîb, Şivâcî'nin oğlu", "B", "Maratha tarafı (o gün 6 yerleşim); infazın yeri kaynakta yok", odak_kimlik=["maratha"])
K(HI, "1699-04-13", "Guru Gobind Singh", "B", "'Pencap'ta' — " + MET + "; Anandpur havuzda yok, Pencap havuz noktaları", odak_yer=["Lahor", "Amritsar"])
K(HI, "1764-10-23", "Buksar Savaşı", "AK", "Buksar muharebesi — havuzda yok. 🔴 yer_kon YAKLAŞIK: Buxar kasabasının bilinen konumu (~25,56 K · 83,98 D)", yer_kon=[25.56, 83.98], yedek=dict(odak_yer=["Patna (Azîmâbâd)"]))
K(HI, "1499-01-01", "Guru Nanak", "B", "'[bölge — Pencap]' — " + MET + "; Pencap havuz noktaları", odak_yer=["Lahor", "Amritsar"])
K(HI, "1545-05-22", "Şîr Şah Sûrî'nin türbesi", "AK", "türbe Sâsârâm'da — " + MET + "; havuzda yok. 🔴 yer_kon YAKLAŞIK: Sasaram'ın bilinen konumu (~24,95 K · 84,03 D)", yer_kon=[24.95, 84.03], yedek=dict(odak_yer=["Patna (Azîmâbâd)"]))
K(HI, "1630-01-01", "Dekken'de büyük kıtlık", "B", "'Dekken'de' — " + MET + "; Dekken havuz noktaları", odak_yer=["Burhânpûr", "Ahmednagar", "Bîdar"])
K(HI, "1770-01-01", "Büyük Bengal Kıtlığı", "B", "Bengal — " + MET + "; Bengal havuz noktaları", odak_yer=["Kalküta", "Gaur (Lakhnautî)", "Sonârgâon"])

# ───────────────────────── kronoloji_guney_asya.js (10 ODAKSIZ + 1 BEYANLI) ──
K(GA, "1542-10-14", "Ekber Şah, Sind'deki Ömerkût", "AK", "Ömerkût Kalesi'nde doğdu — " + MET + " (TDV alıntılı); havuzda yok. 🔴 yer_kon YAKLAŞIK: Umerkot'un bilinen konumu (~25,36 K · 69,74 D)", yer_kon=[25.36, 69.74], yedek=dict(odak_yer=["Haydarâbâd (Sind)"]))
K(GA, "1752-01-01", "Sindî şairi Şah Abdüllatîf", "C", "Sind şairi — ölüm yeri kaynakta yok; Sind'in toprağı (o gün 3 yerleşim)", odak_kimlik=["sind"])
K(GA, "1827-01-01", "Sindî şairi Sachal Sarmast", "C", "Sind şairi — ölüm yeri kaynakta yok; Sind'in toprağı (o gün 4 yerleşim)", odak_kimlik=["sind"])
K(GA, "1301-07-11", "Alâeddin Halacî Ranthambor", "AK", "Ranthambor kuşatması — " + MET + "; havuzda yok. 🔴 yer_kon YAKLAŞIK: Ranthambor kalesinin bilinen konumu (~26,02 K · 76,46 D)", yer_kon=[26.02, 76.46], yedek=dict(odak_yer=["Agra", "Çitor (Chittorgarh)"]))
K(GA, "1311-01-01", "Calor'un düşmesiyle", "AK", "Calor (Jalore) — " + MET + "; havuzda yok. 🔴 yer_kon YAKLAŞIK: Jalore'nin bilinen konumu (~25,35 K · 72,62 D)", yer_kon=[25.35, 72.62], yedek=dict(odak_yer=["Çitor (Chittorgarh)", "Bhuc (Kutch)"]))
K(GA, "1679-04-02", "Evrengzîb cizyeyi yeniden", "C", "Bâbürlü çapında vergi kararı (hindistan.js'teki aynı olayla tutarlı)", odak_kimlik=["babur-imparatorlugu"])
K(GA, "1600-01-01", "Skardu emîri Ali Mîr", "B", "istilâ edilen Ladakh — " + MET + "; Skardu havuzda yok", odak_yer=["Leh (Ladakh)"])
K(GA, "1312-01-01", "Ravi Varma Kulaşekhara", "AK", "Kançi'de taç giydi — başlıkta adıyla; havuzda yok. 🔴 yer_kon YAKLAŞIK: Kanchipuram'ın bilinen konumu (~12,83 K · 79,70 D)", yer_kon=[12.83, 79.70], yedek=dict(odak_yer=["Madurai"]))
K(GA, "1741-08-10", "Kolaçel Muharebesi", "AK", "Kolaçel muharebesi — havuzda yok. 🔴 yer_kon YAKLAŞIK: Colachel'in bilinen konumu (~8,18 K · 77,25 D)", yer_kon=[8.18, 77.25], yedek=dict(odak_yer=["Trivandrum (Thiruvananthapuram)"]))
K(GA, "1470-01-01", "Manipûr ile Pong", "B", "Kabav vadisi — " + MET + "; manipur kimliği 1 yerleşim (≥2 tutmuyor); vadi İmphâl ile Ava arasında — gösterim", odak_yer=["İmphâl (Manipûr)", "Ava (İnwa)"])
K(GA, "1834-01-01", "Kabav vadisi İngiliz", "B", "Kabav vadisi — " + MET + "; İmphâl ile Ava arasında — gösterim", odak_yer=["İmphâl (Manipûr)", "Ava (İnwa)"])

# ───────────────────────── kronoloji_japonya.js (6 BEYANLI) ──
K(JP, "1588-08-29", "Hideyoshi \"Kılıç Avı\"", "C", "ülke çapında ferman — Oda-Toyotomi Japonyası", odak_kimlik=["azuchi-momoyama"])
K(JP, "1614-01-27", "Tokugawa şogunluğu Hıristiyanlığı", "C", "ülke çapında yasak", odak_kimlik=["edo-bakufu"])
K(JP, "1639-07-05", "\"Sakoku\" fermanıyla", "C", "ülke çapında kapanma (Nagazaki istisnası metinde)", odak_kimlik=["edo-bakufu"])
K(JP, "1782-01-01", "Tenmei Kıtlığı", "B", "'kuzey Japonya' — " + MET + "; kuzey Honşu havuz noktaları", odak_yer=["Sendai", "Morioka", "Hirosaki"])
K(JP, "1872-08-03", "Gakusei", "C", "ülke çapında ferman (1872'de meiji-japonya kutusu yalnız ana adalar)", odak_kimlik=["meiji-japonya"])
K(JP, "1918-08-03", "Pirinç Ayaklanmaları", "B", "'yüzlerce şehir' — ana adalar; meiji-japonya kimliği 1918'de Kore/Tayvan'ı da döndürür, kutu şişer — ana adaların havuz noktaları", odak_yer=["Edo (Tokyo)", "Osaka", "Kumamoto", "Sendai"])

# ───────────────────────── kronoloji_timurlu.js (3 ODAKSIZ + 2 BEYANLI) ──
K(TM, "1391-06-18", "Kunduzca Savaşı", "B", "'İdil yakınlarındaki Kunduzca' — " + MET + "; Kunduzca havuzda yok, en yakın İdil havuz noktası Samara — gösterim", odak_yer=["Samara"])
K(TM, "1395-04-15", "Terek Savaşı", "B", "Terek nehri kıyısı — " + MET + "; savaş yeri havuzda yok, Terek boyunun havuz noktaları", odak_yer=["Terek deltası (Kızlar)", "Vladikavkaz"])
K(TM, "1398-01-01", "Hindistan seferine çıkış", "B", "seferin yolu Hindukuş → Pencap → Delhi — " + MET, odak_yer=["Kâbil", "Multan", "Delhi"])
K(TM, "1405-04-01", "Timur sonrası taht", "B", "iki merkez Semerkant (Halil Sultan) ve Herat (Şahruh) — " + MET, odak_yer=["Semerkant", "Herat"])
K(TM, "1469-04-01", "Ebû Said Mirza", "B", "'Azerbaycan'a doğru' sefer — " + MET + "; savaş yeri kaynakta yok, Azerbaycan havuz noktaları", odak_yer=["Tebriz", "Erdebil"])

ODAK = ("yer_id", "yer_kon", "odak_yer", "odak_kimlik")


def gun(t):
    t = str(t or "")
    return (t + "-01-01")[:10] if len(t) < 10 else t[:10]


def hedef_alan(k):
    """Kararın yazacağı alanlar (--konsuz AK'yi yedeğe çevirir)."""
    a = dict(k["alan"])
    yedek = a.pop("yedek", None)
    if KONSUZ and k["sinif"] == "AK" and yedek:
        return dict(yedek)
    return a


def sina(kararlar):
    """app.js ad/kimlik kuralıyla node'da sına."""
    yer, kim = set(), []
    for k in kararlar:
        a = hedef_alan(k)
        if a.get("yer_id"):
            yer.add(a["yer_id"])
        for ad in a.get("odak_yer", []):
            yer.add(ad)
        if a.get("odak_kimlik"):
            kim.append({"ids": a["odak_kimlik"], "gs": gun(k["t"])})
    r = subprocess.run(["node", os.path.join(KOK, "denetim", "ODAK-ASYA-0080-sina.js")],
                       input=json.dumps({"yer": sorted(yer), "kimlik": kim}),
                       capture_output=True, text=True, encoding="utf-8")
    if r.returncode != 0:
        print("🔴 şart sınayıcı çalışmadı — HİÇBİR ŞEY UYGULANMAZ:", r.stderr[:300])
        sys.exit(2)
    return json.loads(r.stdout), kim


def nesne_araliklari(metin):
    """Dizinin üst düzey nesnelerinin [baş, son) aralıkları — dize/yorum farkında."""
    m = re.search(r"window\.[A-Z_0-9]+\s*=\s*\[", metin)
    i = m.end()
    derin, bas, out, n = 0, None, [], len(metin)
    while i < n:
        c = metin[i]
        if c in "\"'`":
            q = c
            i += 1
            while i < n and metin[i] != q:
                i += 2 if metin[i] == "\\" else 1
        elif c == "/" and metin[i + 1] == "/":
            i = metin.index("\n", i)
            continue
        elif c == "/" and metin[i + 1] == "*":
            i = metin.index("*/", i) + 2
            continue
        elif c == "{":
            if derin == 0:
                bas = i
            derin += 1
        elif c == "}":
            derin -= 1
            if derin == 0:
                out.append((bas, i + 1))
        elif c == "]" and derin == 0:
            break
        i += 1
    return out


def duzenle(parca, alan, kg_kaldir):
    """Tek nesnenin metnini düzenle; hata varsa ValueError."""
    tirnak = '"' if re.search(r'"yer_id"\s*:', parca) else ""
    if kg_kaldir:
        desen = [r'[ \t]*(["\']?)kapsam_genis\1\s*:\s*true[ \t]*,[ \t]*',
                 r',\s*(["\']?)kapsam_genis\1\s*:\s*true']
        for d in desen:
            bul = list(re.finditer(d, parca))
            if len(bul) == 1:
                b, s = bul[0].span()
                parca = parca[:b] + parca[s:]
                # satır boş kaldıysa satırı da sil
                sb = parca.rfind("\n", 0, b) + 1
                ss = parca.find("\n", b)
                if ss != -1 and parca[sb:ss].strip() == "":
                    parca = parca[:sb] + parca[ss + 1:]
                break
        else:
            raise ValueError("kapsam_genis:true tek kez bulunamadı")
    if not alan:
        return parca
    bul = list(re.finditer(r'(["\']?)yer_id\1\s*:\s*(""|\'\')', parca))
    if len(bul) != 1:
        raise ValueError("boş yer_id tek kez bulunamadı (%d)" % len(bul))
    ayr = (",", ":") if tirnak else (", ", ":")
    ek = []
    yid = alan.get("yer_id", "")
    for ad in ("yer_kon", "odak_yer", "odak_kimlik"):
        if ad in alan:
            ek.append("%s%s%s:%s" % (tirnak, ad, tirnak,
                                      json.dumps(alan[ad], ensure_ascii=False, separators=ayr)))
    yeni = "%syer_id%s:%s" % (tirnak, tirnak, json.dumps(yid, ensure_ascii=False))
    if ek:
        yeni += ("," if tirnak else ", ") + ("," if tirnak else ", ").join(ek)
    b, s = bul[0].span()
    return parca[:b] + yeni + parca[s:]


def main():
    havuz = yer_havuzu()
    if not havuz:
        print("🔴 ÖLÇÜLEMEDİ — yerleşim havuzu yok; HİÇBİR ŞEY UYGULANMAZ.")
        return 2
    # ÖNGÖRÜNÜN "şimdi"si app.js'in KENDİ çözücüsünden, 8 dosya için TEK seferde ve
    # HİÇBİR DOSYA YAZILMADAN ÖNCE — ölçüm yarıda arızalanıp yarım yazım bırakmasın.
    olcum = {}
    for dosya in DOSYALAR:
        o_ = odak_olc.olc(tek=dosya)
        od = (o_.get("dosyalar") or [{}])[0] if not o_.get("hata") else {}
        if o_.get("hata") or od.get("hata") or "sinif" not in od:
            print("🔴 ÖLÇÜLEMEDİ — %s öngörüsü okunamadı: %s · HİÇBİR ŞEY UYGULANMAZ."
                  % (dosya, o_.get("hata") or od.get("hata") or "sınıf yok"))
            return 2
        olcum[dosya] = od["sinif"]
    secili = [k for k in KARARLAR if GRUP is None or k["sinif"] in GRUP]
    sonuc, _ = sina(secili)
    say = dict(degisen=0, zaten=0, kayit_yok=0, eski_tutmuyor=0, sart_yok=0)
    sinif_say = {}
    toplam_kg = 0
    onc_app = {"ODAKSIZ": 0, "BEYANLI": 0}
    son_app = {"ODAKSIZ": 0, "BEYANLI": 0}
    ki = 0
    kim_sonuc = sonuc["kimlik"]
    kim_i = {}
    for k in secili:
        if hedef_alan(k).get("odak_kimlik"):
            kim_i[id(k)] = kim_sonuc[ki]
            ki += 1
    print("ODAK-ASYA-0080 — %s · %d karar%s%s" % (
        "UYGULA" if UYGULA else "KURU KOŞU", len(secili),
        " · grup " + ",".join(sorted(GRUP)) if GRUP else "",
        " · --konsuz (AK → yedek odak_yer)" if KONSUZ else ""))
    print("=" * 100)
    for dosya in DOSYALAR:
        yol = os.path.join(KOK, "data", dosya)
        d, hata = _oku(yol)
        if hata:
            print("🔴 %s ayrıştırılamadı: %s — dosya ATLANMADI, iş durdu" % (dosya, hata))
            return 2
        kayit = d["kayit"]
        metin = io.open(yol, encoding="utf-8", newline="").read()
        araliklar = nesne_araliklari(metin)
        if len(araliklar) != len(kayit):
            print("🔴 %s: metinde %d nesne, node %d kayıt — eşleşme güvenilmez, DOKUNULMADI"
                  % (dosya, len(araliklar), len(kayit)))
            continue
        beklenen = [json.loads(json.dumps(o)) for o in kayit]
        duzen = {}
        kim_n = {}
        for k in [k for k in secili if k["dosya"] == dosya]:
            aday = [i for i, o in enumerate(kayit)
                    if o.get("t") == k["t"] and str(o.get("b", "")).startswith(k["bon"])]
            et = "%s %s %s" % (k["sinif"].ljust(2), k["t"], k["bon"][:38])
            if len(aday) != 1:
                say["kayit_yok"] += 1
                print("  ✗ KAYIT YOK (%d aday)  %s · %s" % (len(aday), dosya, et))
                continue
            i = aday[0]
            o = kayit[i]
            alan = hedef_alan(k)
            hedef = dict(o)
            kg_kaldir = hedef.get("kapsam_genis") is True
            if kg_kaldir:
                del hedef["kapsam_genis"]
            for a, v in alan.items():
                hedef[a] = v
            if all(o.get(a) == hedef.get(a) for a in ODAK) and not o.get("kapsam_genis"):
                say["zaten"] += 1
                print("  = ZATEN BÖYLE  %s#%d %s" % (dosya, i, et))
                continue
            sn = eski_sinif(o)
            if sn is None:
                say["eski_tutmuyor"] += 1
                print("  ✗ ESKİ TUTMUYOR (%s)  %s#%d %s" % (sn, dosya, i, et))
                continue
            sorun = []
            for ad in ([alan["yer_id"]] if alan.get("yer_id") else []) + alan.get("odak_yer", []):
                r = sonuc["yer"].get(ad, {"n": 0})
                if r["n"] != 1:
                    sorun.append("'%s' havuzda %d yerleşime çözülüyor" % (ad, r["n"]))
                if ad not in havuz:
                    sorun.append("'%s' odak_olc havuzunda yok" % ad)
            if alan.get("odak_kimlik"):
                r = kim_i[id(k)]
                if r["kunyesiz"]:
                    sorun.append("künyesiz kimlik " + ",".join(r["kunyesiz"]))
                if r["n"] < 2:
                    sorun.append("odak_kimlik o gün %d yerleşim (<2)" % r["n"])
                kim_n[i] = r["n"]
            yk = alan.get("yer_kon")
            if yk is not None and not (isinstance(yk, list) and len(yk) == 2
                                       and -90 <= yk[0] <= 90 and -180 <= yk[1] <= 180):
                sorun.append("yer_kon bozuk")
            if sorun:
                say["sart_yok"] += 1
                print("  ✗ ŞARTI SAĞLAMADI  %s#%d %s — %s" % (dosya, i, et, " · ".join(sorun)))
                continue
            beklenen[i] = hedef
            duzen[i] = (alan, kg_kaldir)
            say["degisen"] += 1
            sinif_say[k["sinif"]] = sinif_say.get(k["sinif"], 0) + 1
            toplam_kg += 1 if kg_kaldir else 0
            print("  ✓ %s#%d %s" % (dosya, i, et))
            print("      → %s%s" % (json.dumps(alan, ensure_ascii=False) if alan else "(odak yazılmaz)",
                                   " · kapsam_genis KALDIRILIR" if kg_kaldir else ""))
            print("      gerekçe: %s" % k["gerekce"])
            print("      kaynak : %s" % str(o.get("kaynak", ""))[:110])
        # metni düzenle — sondan başa, aralıklar kaymasın
        yeni = metin
        try:
            for i in sorted(duzen, reverse=True):
                b, s = araliklar[i]
                yeni = yeni[:b] + duzenle(yeni[b:s], duzen[i][0], duzen[i][1]) + yeni[s:]
        except ValueError as e:
            print("🔴 %s metin düzenlemesi: %s — dosya YAZILMADI" % (dosya, e))
            continue
        # yeniden ayrıştır ve BİREBİR karşılaştır
        with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8",
                                         newline="") as f:
            f.write(yeni)
            gecici = f.name
        d2, hata2 = _oku(gecici)
        os.unlink(gecici)
        if hata2 or len(d2["kayit"]) != len(beklenen):
            print("🔴 %s düzenlenmiş metin ayrışmadı: %s — YAZILMADI" % (dosya, hata2))
            continue
        fark = [i for i, (x, y) in enumerate(zip(d2["kayit"], beklenen)) if x != y]
        if fark:
            print("🔴 %s düzenleme sonrası %d madde beklenenden farklı (ilk #%d) — YAZILMADI"
                  % (dosya, len(fark), fark[0]))
            continue
        # ÖNGÖRÜ — şimdiki sınıflar app.js'in KENDİ çözücüsünden; sonrası, yalnız
        # düzenlenen maddelerin geçişiyle (her biri yukarıda app.js kuralıyla sınandı)
        sn_simdi = {k: olcum[dosya].get(k, 0) for k in onc_app}
        sn_sonra = dict(sn_simdi)
        for i, (alan, kg) in duzen.items():
            once = "BEYANLI" if kayit[i].get("kapsam_genis") is True else "ODAKSIZ"
            if alan.get("yer_kon") or alan.get("yer_id"):
                sonra = "KONUMLU"
            elif alan.get("odak_yer") or alan.get("odak_kimlik"):
                sonra = "KUTULU"
            else:
                sonra = "ODAKSIZ" if kg else once
            sn_sonra[once] -= 1
            if sonra in sn_sonra:
                sn_sonra[sonra] += 1
        for k in onc_app:
            onc_app[k] += sn_simdi[k]
            son_app[k] += sn_sonra[k]
        if UYGULA and duzen:
            io.open(os.path.join(KOK, "data", dosya), "w", encoding="utf-8", newline="").write(yeni)
            print("  💾 %s yazıldı (%d madde)" % (dosya, len(duzen)))
    print("=" * 100)
    print("SAYAÇ  değişen %(degisen)d · zaten böyle %(zaten)d · kayıt yok %(kayit_yok)d · "
          "eski tutmuyor %(eski_tutmuyor)d · şartı sağlamadı %(sart_yok)d" % say)
    print("SINIF  " + " · ".join("%s %d" % (s, n) for s, n in sorted(sinif_say.items()))
          + "   (kapsam_genis kaldırılan %d)" % toplam_kg)
    print("ÖNGÖRÜ (8 dosya, bu düzenlemeyle)")
    print("  şimdi  app.js    ODAKSIZ %4d · BEYANLI %4d   ← odak_olc.olc (arac/odak_cozum.js)"
          % (onc_app["ODAKSIZ"], onc_app["BEYANLI"]))
    print("  sonra  app.js    ODAKSIZ %4d · BEYANLI %4d   ← kameranın GERÇEKTEN yapacağı"
          % (son_app["ODAKSIZ"], son_app["BEYANLI"]))
    if not UYGULA:
        print("KURU KOŞU — hiçbir dosya yazılmadı. Yazmak için --uygula.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
