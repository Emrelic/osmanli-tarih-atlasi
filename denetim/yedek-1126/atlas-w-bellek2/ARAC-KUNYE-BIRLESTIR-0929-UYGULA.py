# -*- coding: utf-8 -*-
"""KUNYE-BIRLESTIR-0929 — paketlerin künye önerilerini TEK yamada birleştirir.

    py -X utf8 denetim/ARAC-KUNYE-BIRLESTIR-0929-UYGULA.py              # KURU KOŞU (varsayılan)
    py -X utf8 denetim/ARAC-KUNYE-BIRLESTIR-0929-UYGULA.py --kosullu    # + kaynaksız uçlu grup
    py -X utf8 denetim/ARAC-KUNYE-BIRLESTIR-0929-UYGULA.py --uygula     # data/devletler.js'e YAZAR
    py -X utf8 denetim/ARAC-KUNYE-BIRLESTIR-0929-UYGULA.py --uygula --kosullu

🔴 YAZAN YALNIZ KOORDİNATÖRDÜR (M-5433 görevi: "SEN UYGULAMA — ben koşturacağım").
   Bu betiği yazan oturum `--uygula` ile KOŞTURMADI.

GRUPLAR
  kesin    her uç kaynağa dayanıyor (TDV cümlesi ya da adıyla anılan akademik eser)
  kosullu  en az bir uç KAYNAKSIZ ya da hükmü koordinatörde bekleyen bir çakışmaya bağlı;
           yalnız `--kosullu` ile girer. Her satır NEDEN koşullu olduğunu söyler.
  bekleyen yamaya GİRMEZ (uç "bulunamadı" — uydurulmaz); rapor için listelenir.

KANITLAR (her değişiklik, yazmadan ÖNCE):
  yeni   `id:"<id>"` dosyada 0 kez · ekleme çapası "\\n];" dosyada TAM 1 kez
  degis  `{ id:"<id>",` TAM 1 kez · değişecek dizgi o KAYDIN BLOĞUNDA TAM 1 kez
  Biri tutmazsa o değişiklik REDDEDİLİR, öteki değişiklikler etkilenmez; --uygula
  en az bir ret varsa HİÇ YAZMAZ (yarım yama yok).
SONRA (kuru koşuda da): yamalı metin node+vm ile ÇALIŞTIRILIR — DEVLETLER uzunluğu
  678+N mi, yeni id'ler çözülüyor mu; kronoloji dosyaları node+vm ile okunup künyesiz
  `devlet:` id'lerinin kaçının bağlandığı ölçülür (ETKİ) ve bağlanan maddelerin künye
  penceresine düşüp düşmediği sayılır (4c/4d'ye takılır mı).
HARİTA: kısaltılan/yeni künye için yerleşim `s:`/`isg:`/`v:kid` pencereleri taranır:
  yeni pencerenin DIŞINA düşen harita dönemi varsa ret DEĞİL, UYARI basılır (hüküm
  koordinatörde; `yerlesimler*.js` Oturum 0'ın).
"""
import io, os, re, sys, json, subprocess, tempfile, contextlib

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, os.path.join(KOK, "arac"))
DOSYA = os.path.join("data", "devletler.js")


def kunye(id, ad, tur, bolge, f, t, ozet, kaynak, not_=""):
    s = ('{ id:%s, ad:%s, tur:%s, bolge:%s,\n  f:%s, t:%s,\n  ozet:%s,\n  kaynak:%s,\n'
         % tuple(json.dumps(x, ensure_ascii=False) for x in (id, ad, tur, bolge, f, t, ozet, kaynak)))
    if not_:
        s += "  not:%s,\n" % json.dumps(not_, ensure_ascii=False)
    return s + "  kronoloji:[] }"


# ════════════════════════════════════════════════════════════════════════
# ÖNERİLER — kaynağı: denetim/KRONO-*-0929-KUNYE.md + KUNYE-DUNYA-0929.json
# `harita` alanı koordinatörün sorusunu cevaplar: "bu künye haritada kullanılacak mı"
# (ölçüm: 29 Eylül, o yerin o tarihteki s: kimliği — `denetim/KUNYE-BIRLESTIR-0929.md`).
# ════════════════════════════════════════════════════════════════════════
YENI = [
 dict(grup="kesin", sinif="③ ARDIL (bosna-kralligi'nin ardılı)", paket="KRONO-BALKAN-B",
      harita="HAYIR — Saraybosna 1600'de s: boş (OSMANLI). Yalnız kronoloji künyesi (§1.5 ⚪ kovası, renk gerekmez)",
      cakisma="Ç6: bosna-kralligi t 1463-05-01 ↔ f 1463-06-01 (1 ay boşluk) · bosna-isgal f 1878-07-13 ↔ t 1878-07-29 (16 gün örtüşme)",
      kayit=kunye("bosna-eyaleti", "Osmanlı Bosna'sı (sancak → 1580 eyalet → 1866 vilâyet)", "eyalet", "balkanlar",
                  "1463-06-01", "1878-07-29",
                  "Bosna Krallığı'nın yıkılışından Avusturya-Macaristan işgaline kadar Bosna'nın doğrudan Osmanlı idaresindeki dönemi; önce sancak, 1580'den beylerbeyilik, 1866'dan vilâyet. sirbistan-eyaleti emsaline göre açıldı. Harita rengi KASITLI OLARAK verilmedi — toprak haritada OSMANLI.",
                  "f: çekirdek olaylar_ek.js 1463-06-01 (ay hassasiyetli; TDV yalnız yıl verir) · TDV `bosna-eyaleti`: 'önce sancak beyliği iken 1580'den itibaren beylerbeyilik' · t: TDV `bosna-hersek`: işgal '29 Temmuz'da başlayan' (1878). Öneren: KRONO-BALKAN-B-0929.",
                  "🟡 f: bosna-kralligi t: (1463-05-01) ile bir ay açık; t: bosna-isgal f: (1878-07-13, Berlin) ile 16 gün örtüşür — hukukî/fiilî ayrım, koordinatör kararı.")),
 dict(grup="kesin", sinif="yeni polity (yarı özerk paşalık)", paket="KRONO-BALKAN-B",
      harita="HAYIR — İşkodra 1800'de s: boş (OSMANLI). Yalnız kronoloji künyesi",
      cakisma="arnavutluk-osmanli ile 1756-1831 eşzamanlı (paşalık vilâyetin İÇİNDE) — iki künye aynı toprağı taşır; tasarım gereği",
      kayit=kunye("iskodra-pasaligi", "İşkodra Paşalığı (Buşatlılar)", "eyalet", "balkanlar",
                  "1756-01-01", "1831-04-21",
                  "Buşatlı ailesinin İşkodra merkezli yarı özerk paşalığı; Tepedelenli Ali Paşa'nın Yanya'sının kuzeydeki eşi. Mustafa Paşa Buşatlı'nın 1831'de Babuna'da yenilmesiyle sona erdi. Harita rengi KASITLI OLARAK verilmedi.",
                  "TDV `iskodra`: 'Buşatlı ailesinin hükümranlığı 1756-1831' · t: TDV `mustafa-pasa-busatli` (Babuna, 21 Nisan 1831). Öneren: KRONO-BALKAN-B-0929.",
                  "🟡 f: YIL kodlu (TDV yalnız yıl). t: TDV'nin verdiği son GÜNLÜ olay; kalenin teslim günü (1831 sonbaharı) bulunamadı — bulunursa ② genişlet.")),
 dict(grup="kosullu", neden="f: 1537-08-25 kaynaksız (arvanid-sancagi'nin kendisi 'veriden devralınan bitiş, kaynaksız' diyor); alternatif 1479-01-25 — Ç7, hüküm koordinatörde",
      sinif="③ ARDIL (arvanid-sancagi'nin ardılı, arnavutluk-bagimsiz'in öncülü)", paket="KRONO-BALKAN-B",
      harita="HAYIR — toprak haritada OSMANLI",
      cakisma="Ç7",
      kayit=kunye("arnavutluk-osmanli", "Osmanlı Arnavutluğu (İşkodra/Yanya/Manastır/Kosova sancak ve vilâyetleri)", "eyalet", "balkanlar",
                  "1537-08-25", "1912-11-28",
                  "Arvanid Sancağı döneminin sonundan 1912 istiklâline kadar Arnavutluk'un Osmanlı idaresindeki dönemi (İşkodra, Yanya, Manastır, Kosova sancak ve vilâyetleri). Harita rengi KASITLI OLARAK verilmedi.",
                  "TDV `arnavutluk` (Osmanlı idaresi; 28 Kasım 1912 istiklâl). f: arvanid-sancagi t: ile ardışık — o uç KAYNAKSIZ. Öneren: KRONO-BALKAN-B-0929.",
                  "🔴 f: KAYNAKSIZ (arvanid-sancagi t:'sine yaslı). Alternatif f:1479-01-25 (Kastriota direnişinin sonu) — o zaman arvanid-sancagi ile 1479-1537 örtüşür.")),
 dict(grup="kesin", sinif="yeni künye (Gürcü atabekliği)", paket="KRONO-KAFKAS + KUNYE-DUNYA",
      harita="EVET adayı — Ahıska 1500'de `gurcistan` ile boyanıyor; ayrılırsa renkler.py'ye renk gerekir (ayrı iş). Künye tek başına haritayı DEĞİŞTİRMEZ",
      cakisma="yok",
      kayit=kunye("samtshe-atabegligi", "Samçhe (Meskheti, Ahıska/Çıldır) Atabekliği", "devlet", "kafkasya",
                  "1268-01-01", "1578-08-09",
                  "Ahıska merkezli Gürcü atabekleri yönetimi; 1578 Çıldır zaferiyle Osmanlı'ya geçti ve Çıldır eyaleti kuruldu.",
                  "f: TDV `ahiska`: 'atabegler, 1268-1578 tarihleri arasında bölgenin yönetimini ellerinde tuttular' (yıl) · t: TDV `cildir-eyaleti`: Çıldır zaferi, 'Atabeg ülkesinin geri kalan kısımlarının fethi tamamlanmış oldu'. Öneren: KRONO-KAFKAS-0929.",
                  "f: YIL kodlu.")),
 dict(grup="kesin", sinif="③ ARDIL (Safevî Çukursaad beylerbeyiliğinin ardılı; müstakil hanlık)", paket="KRONO-KAFKAS + KUNYE-DUNYA",
      harita="EVET — Revan 1760'ta `zend` ile boyanıyor (denetle.py künye aşımı: zend 1751'de başlıyor, 8 yerleşim ~3,5 yıl önce). Doğru boya revan-hanligi: renkler.py'ye renk + yerleşim s: değişikliği (Oturum 0) gerekir",
      cakisma="KUNYE-DUNYA'nın kaynak cümlesi Safevî BEYLERBEYİLİĞİNİ anlatıyordu (KRONO-KAFKAS düzeltti) — f:1747 müstakil hanlık",
      kayit=kunye("revan-hanligi", "Revan (Erivan) Hanlığı", "hanlik", "kafkasya",
                  "1747-01-01", "1828-04-02",
                  "Nâdir Şah'ın ölümünden sonra Mîr Mehdî'nin kurduğu müstakil Revan Hanlığı; 1828 Türkmençay sürecinde Rus çarının emriyle ilga edildi. Safevî dönemindeki Çukursaad beylerbeyiliği ayrı bir yapıdır (eyalet).",
                  "f: TDV `revan`: '1747'de öldürülünce Mîr Mehdî müstakil bir Revan Hanlığı oluşturdu' (yıl) · t: TDV `revan`: 'çarın 2 Nisan 1828 tarihli emriyle Nahcıvan ve Revan hanlıkları ilga edildi'. Öneren: KRONO-KAFKAS-0929.",
                  "f: YIL kodlu. Harita bugün 1747-1751 arasını künyesi o tarihte olmayan `zend` ile boyuyor.")),
 dict(grup="kesin", sinif="yeni künye (1918-1919 geçici hükûmet)", paket="KRONO-KAFKAS + KUNYE-DUNYA",
      harita="HAYIR — Kars 1919'da s: boş (OSMANLI/işgal katmanı). Yalnız kronoloji",
      cakisma="bağladığı TEK madde (1919-04-13) künyenin t:'sinden (1919-04-12) 1 gün SONRA — pencere dışı",
      kayit=kunye("cenub-i-garbi-kafkas", "Cenûb-ı Garbî Kafkas Hükûmet-i Muvakkate-i Milliyesi (Kars)", "gecici-hukumet", "kafkasya",
                  "1918-11-05", "1919-04-12",
                  "Mondros sonrası Kars'ta kurulan millî geçici hükûmet (önce Kars İslâm Şûrası); İngiliz işgaliyle dağıtıldı.",
                  "f: TDV `kars`: '5 Kasım 1918'de Kars İslâm Şûrası kuruldu' (ad değişikliği 17-18 Ocak 1919) · t: TDV `kars`: İngiliz işgali, 'Hükümet dağıtıldı'. Öneren: KRONO-KAFKAS-0929.")),
 dict(grup="kesin", sinif="yeni künye (1918 Hetmanlık rejimi)", paket="KRONO-TUNA",
      harita="HAYIR bugün — Kiev 1918'de `sovyet-rusya` ile boyanıyor (kendisi bir sorun; ayrı iş)",
      cakisma="Ç4: ukrayna-halk-cumhuriyeti ile tek künye mi iki künye mi — veride İKİ id de kullanılıyor",
      kayit=kunye("ukrayna-devleti-1918", "Ukrayna Devleti (Skoropadski Hetmanlığı)", "devlet", "dogu-avrupa",
                  "1918-04-29", "1918-12-14",
                  "Skoropadski'nin 29 Nisan 1918 darbesiyle kurulan, Alman desteğine dayanan Hetmanlık rejimi; Aralık 1918'de sona erdi. Osmanlı elçisi Ahmed Murad Bey 12 Ekim 1918'de kabul edildi.",
                  "Encyclopedia of Ukraine 'Hetman government' (darbe 29 Nisan 1918; çekilme 14 Aralık 1918) · TDV `hatman`: 'Skoropadski son Ukrayna hatmanıdır'. Öneren: KRONO-TUNA-0929.")),
 dict(grup="kosullu", neden="f: TDV/EoU gün vermez; 1204 sonrası — f: YIL da kaynakta yok (1205 atlas tahmini)",
      sinif="yeni künye", paket="KRONO-BALKAN-D + KUNYE-DUNYA",
      harita="EVET adayı — Yanya 1380'de `bizans` ile boyanıyor; epir renk ister (ayrı iş)",
      cakisma="yok",
      kayit=kunye("epir-despotlugu", "Epir (Yanya) Despotluğu — Tocco dönemi dâhil", "prenslik", "balkanlar",
                  "1205-01-01", "1430-10-09",
                  "IV. Haçlı Seferi sonrası Epir'de kurulan Bizans ardılı despotluk; Sırp, Arnavut ve Tocco yönetimlerinden geçerek 1430'da Yanya'nın Osmanlı'ya teslimiyle sona erdi.",
                  "TDV `yanya` (M. Kiel, 2013) · t: çekirdek olaylar_ek.js 1430-10-09 (Yanya'nın teslimi). Öneren: KRONO-BALKAN-D-0929.",
                  "🔴 f: KAYNAKSIZ — TDV 'Haçlı Seferi'nden sonra' der, yıl vermez. 1205 bir alt sınır tahminidir.")),
 dict(grup="kosullu", neden="f: TDV '1360'tan kısa bir süre önce' — gün/yıl yok; t: atlas 1396-10-01, kaynağı ayrıca doğrulanmalı. Ç2 (bulgar-carligi kısalır mı) açık",
      sinif="③ bölünme (bulgar-carligi'nden)", paket="KRONO-BALKAN-D + KUNYE-DUNYA",
      harita="EVET adayı — Vidin 1370'te `bulgaristan` boyasıyla; ayrılırsa renk ister",
      cakisma="Ç2",
      kayit=kunye("vidin-carligi", "Vidin Çarlığı (İvan Sracimir)", "prenslik", "balkanlar",
                  "1360-01-01", "1396-10-01",
                  "İvan Aleksandr'ın Vidin ve çevresini oğlu İvan Sracimir'e vermesiyle doğan yarı bağımsız Bulgar çarlığı; Niğbolu'dan sonra Osmanlı'ya geçti.",
                  "TDV `vidin` (M. Kiel, 2013): İvan Aleksandr '1360'tan kısa bir süre önce' Vidin'i Sracimir'e vererek bölgeyi yarı bağımsız bir prenslik haline getirdi; 1396 Haçlı ordusu. Öneren: KRONO-BALKAN-D-0929.",
                  "🔴 f: 1360-01-01 MUHAFAZAKÂR uç (gerçek başlangıç 'kısa bir süre önce'). t: gün atlastan (1396-10-01), bağımsız doğrulanmadı.")),
 dict(grup="kosullu", neden="f: 1490 kaynakta YIL olarak yok (imereti/gurcistan künyeleriyle tutarlılık için); ayrıca gurcistan künyesinin 1490'da kısalıp kısalmayacağı hükmü açık",
      sinif="yeni künye (ayrıştırma — gurcistan 'Krallıkları'ndan)", paket="KRONO-KAFKAS + KUNYE-DUNYA",
      harita="EVET adayı — Tiflis 1600'de `gurcistan` ile boyanıyor; ayrılırsa renk ister",
      cakisma="gurcistan 1008-1801 aynı toprağı taşımayı sürdürür (10 maddenin hepsi gurcistan'a da bağlı)",
      kayit=kunye("kartli-kralligi", "Kartli Krallığı (1762'den Kartli-Kaheti)", "krallik", "kafkasya",
                  "1490-01-01", "1801-09-12",
                  "Gürcistan'ın 15. yüzyıl sonunda üç krallığa bölünmesinden doğan Tiflis merkezli krallık; 1762'de Kaheti ile birleşti, 1801'de Rusya'ya ilhak edildi.",
                  "TDV `gurcistan`: 'üç krallığa (Kartliya, Kahetya, İmeretiya) ve beş beyliğe ayrıldı' (yılsız) · t: TDV `gurcistan`: '12 Eylül 1801 tarihli emirle Rusya'nın bir eyaleti'. Öneren: KRONO-KAFKAS-0929.",
                  "🔴 f: KAYNAKSIZ yıl (imereti künyesiyle aynı 1490).")),
 dict(grup="kosullu", neden="Ç3 — M-5416 Hetmanlık maddelerini `zaporojye`ye bağladı (26 madde); ayrı künye açılırsa 25 madde taşınmalı",
      sinif="③ eşzamanlı ayrı polity", paket="KRONO-TUNA + KUNYE-DUNYA",
      harita="HAYIR bugün (veride id kullanılmıyor)",
      cakisma="Ç3",
      kayit=kunye("kazak-hetmanligi", "Kazak Hetmanlığı (Ukrayna)", "devlet", "dogu-avrupa",
                  "1648-01-01", "1764-01-01",
                  "Hmelnitski ayaklanmasıyla doğan Ukrayna Kazak devleti (Çehrin, Baturin, Hluhiv); Doroşenko döneminde Osmanlı tâbiliği. Hatmanlık 1764'te kaldırıldı. Dinyeper çağlayanlarındaki Zaporojye Seç'i ayrı yapıdır.",
                  "TDV `hatman`: 'hatman unvanı 1648-1764 yılları arasında Dinyeper Kazakları'nda seçimle başa gelen kumandanın' · Encyclopedia of Ukraine 'Hetman state' (1648-1782). Öneren: KRONO-TUNA-0929 Ö-3.",
                  "f/t YIL kodlu.")),
]

# DEĞİŞİKLİK: (id, [(eski, yeni), ...]) — eski dizgi KAYIT BLOĞUNDA tam 1 kez
DEGIS = [
 dict(grup="kesin", id="erdel", sinif="② GENİŞLET (f) + ① KISALT (yalnız tabi.t)", paket="KRONO-TUNA Ö-1/Ö-2 + KUNYE-DUNYA ④",
      kaynak="f: TDV `erdel` '1541'de … haraçgüzâr statüsünde bir voyvodalık' · gün: History of Transylvania I (MTA) s.101, 29 Ağustos 1541 · tabi.t: TDV `erdel` '1699 Karlofça Antlaşması ile Erdel Avusturya'ya terkedildi'",
      degis=[('  f:"1570-01-01", t:"1711-04-30", baskent:', '  f:"1541-08-29", t:"1711-04-30", baskent:'),
             ('tabi:[{f:"1570-01-01", t:"1711-04-30", ust:"osmanli"}]', 'tabi:[{f:"1541-08-29", t:"1699-01-26", ust:"osmanli"}]'),
             ("A5'in önerdiği 1541 başlangıcı kaydın kendi f:'sinden 29 yıl önceye düştüğü için burada kullanılmadı)",
              "29 Eylül 2026 KUNYE-BIRLESTIR-0929: f: 1541-08-29'a GENİŞLETİLDİ — TDV `erdel` 1541 haraçgüzar voyvodalık, 1570 Speyer yalnız unvan değişimi; tâbilik 1699 Karlofça'da bitti)")]),
 dict(grup="kesin", id="mekke-serifligi", sinif="gün (t)", paket="KUNYE-DUNYA ④",
      kaynak="TDV `mekke`: '8 Mayıs 1919'da çıkarılan Meclis-i Vükelâ kararı ve irâde-i seniyye ile emirlik unvanı kaldırılıp…'",
      degis=[('t:"1919-01-10"', 't:"1919-05-08"')]),
 dict(grup="kesin", id="karakoyunlu", sinif="② GENİŞLET (t)", paket="KUNYE-DUNYA ④",
      kaynak="kronoloji_karakoyunlu.js 1469-04-01 maddesi, kaynağı TDV `karakoyunlular` · `uzun-hasan`: 'Şevval 873 (Nisan 1469)' — AY hassasiyeti",
      degis=[('  f:"1351-01-01", t:"1469-01-01", baskent:', '  f:"1351-01-01", t:"1469-04-01", baskent:')]),
 dict(grup="kesin", id="katalan", sinif="② GENİŞLET (t)", paket="KUNYE-DUNYA ④",
      kaynak="kronoloji_katalan.js 1388-05-02 maddesi, kaynağı TDV `atina`",
      degis=[('  f:"1311-03-15", t:"1388-01-01", baskent:', '  f:"1311-03-15", t:"1388-05-02", baskent:')]),
 dict(grup="kesin", id="kaheti-kralligi", sinif="② GENİŞLET (t)", paket="KRONO-KAFKAS §2",
      kaynak="TDV `gurcistan`: '1762 yılında Irakli, Kartli ve Kahet'i bir idare altında birleştirdi' (yıl)",
      degis=[('bolge:"kafkasya", f:"1578-08-09", t:"1606-01-01",', 'bolge:"kafkasya", f:"1578-08-09", t:"1762-01-01",')]),
 dict(grup="kosullu", id="kaheti-kralligi", neden="f: 1490 kaynakta YIL olarak yok", sinif="② GENİŞLET (f)", paket="KRONO-KAFKAS §2",
      kaynak="TDV `gurcistan` üçe bölünme (yılsız); imereti künyesiyle tutarlılık",
      degis=[('bolge:"kafkasya", f:"1578-08-09", t:"1762-01-01",', 'bolge:"kafkasya", f:"1490-01-01", t:"1762-01-01",')]),
]

BEKLEYEN = [
 ("ukrayna-halk-cumhuriyeti", "t: bulunamadı (EoU 'until 1920', gün yok; KRONO-TUNA 1920-01-01'i açıkça reddetti)", 3),
 ("megrelya-prensligi", "f: bulunamadı (TDV 'beş beyliğe ayrıldı', yılsız)", 2),
 ("guria-prensligi", "f: bulunamadı", 2),
 ("abhazya-prensligi", "f: bulunamadı (TDV `sohum` 1451 itaat — kuruluş değil)", 4),
 ("trablus-cumhuriyeti", "t: bulunamadı (TDV 'kısa süre yaşayan'); f 1919 yıl", 1),
 ("trablusgarp-ocagi t → 1835", "harita v:kid tâbi dönemleri (39) 1835 sonrasına uzanıyor — önce yerleşim, sonra künye (Oturum 0)", 0),
 ("bulgar-carligi t", "Ç2 — genişlet (BALKAN-D) mı, Vidin ayrılınca Tırnova 1393'e kısalt mı", 0),
 ("sirbistan-nemanjic", "③ — ad değişikliği mi ardıl künye (Lazarević) mi; hüküm", 0),
 ("kuveyt↔sabah-emirligi · katar↔sani-emirligi · sadi↔fas · zeta↔crnojevic-zetasi", "mükerrer künye — birleştirme kararı", 0),
 ("almanya", "③ — 1806-1871 tek künye; kronoloji_almanya.js 76 madde 10 künyesiz id taşıyor ama dosya KRONOLOJI_ALMANYA olarak bağlandığı için devlet: OKUNMUYOR (M-5428)", 76),
 ("batav-cumhuriyeti · habsburg-hollandasi · hollanda-brezilyasi · rio-de-la-plata-valiligi · yeni-granada-valiligi · venezuela-genel-kaptanligi",
  "veride KULLANILIYOR (kronoloji_cok_hollanda.js · kronoloji_cok_guney_amerika.js) ama ÖNERİ DOSYASI YOK (denetim/*-0929-KUNYE.md) — f/t/kaynak öneren paketten istenmeli", 18),
 ("MAGRIB gün düzeltmeleri", "hafsi.t · zeyyani.t · rif-cumhuriyeti.f · tunus-ocagi/trablusgarp-ocagi künye maddeleri — KRONO-MAGRIB-0929-DUZELTME.md B3-B6; harita pencere etkisi ölçülmedi", 0),
]


# ─── node+vm ──────────────────────────────────────────────────────────────
_JS = r"""
const vm=require('vm'),fs=require('fs');
const dev=process.argv[1];
const w0={};const c0={window:w0};vm.createContext(c0);
vm.runInContext(fs.readFileSync(dev,'utf8'),c0);
const D=w0.DEVLETLER, ix={}; D.forEach(d=>ix[d.id]=d);
const files=fs.readdirSync('data').filter(f=>/^(kronoloji|olaylar).*\.js$/.test(f)).sort();
const kunyesiz={}, bag=[];
for(const f of files){const w={};const c={window:w};vm.createContext(c);
 try{vm.runInContext(fs.readFileSync('data/'+f,'utf8'),c);}catch(e){continue;}
 for(const [g,arr] of Object.entries(w)){ if(!Array.isArray(arr)||!/^KRONOLOJI_(SINIR|COK)_/.test(g))continue;
  arr.forEach(r=>{ if(!r)return; (r.taraflar||r.devletler||(r.devlet?[r.devlet]:[])).forEach(x=>{
    if(!ix[x]){kunyesiz[x]=(kunyesiz[x]||0)+1;return;}
    bag.push([x,r.t,f,(r.b||'').slice(0,60)]);});});}}
process.stdout.write(JSON.stringify({n:D.length, kunyesiz, bag,
  pencere:Object.fromEntries(D.map(d=>[d.id,[d.f,d.t]]))}));
"""


def node_olc(yol):
    p = subprocess.run(["node", "-e", _JS, yol], capture_output=True, cwd=KOK)
    if p.returncode:
        raise SystemExit("node HATASI (yamalı metin çalışmıyor): " + p.stderr.decode("utf-8", "replace")[:800])
    return json.loads(p.stdout.decode("utf-8"))


def pad(t):
    t = (t or "")[:10]
    m = re.match(r"^(-?)(\d+)(.*)$", t)
    return (m.group(1) + m.group(2).zfill(4) + m.group(3)) if m else t


def blok(metin, id):
    bas = '{ id:"%s",' % id
    if metin.count(bas) != 1:
        return None, metin.count(bas)
    i = metin.index(bas)
    j = metin.find("\n{ id:", i + 1)
    j = j if j >= 0 else metin.rindex("\n];")
    return (i, j), 1


def yamala(metin, kosullu):
    ret, uyg = [], []
    for d in DEGIS:
        if d["grup"] == "kosullu" and not kosullu:
            continue
        (ij, n) = blok(metin, d["id"])
        if not ij:
            ret.append("%s: kayıt başı %d kez (1 olmalı)" % (d["id"], n))
            continue
        i, j = ij
        b = metin[i:j]
        ok = True
        for eski, yeni in d["degis"]:
            k = b.count(eski)
            if k != 1:
                ret.append("%s: '%s' blokta %d kez (1 olmalı)" % (d["id"], eski[:50], k))
                ok = False
        if not ok:
            continue
        for eski, yeni in d["degis"]:
            b = b.replace(eski, yeni, 1)
        metin = metin[:i] + b + metin[j:]
        uyg.append("DEGIS %-18s %s (%d dizgi, her biri count==1)" % (d["id"], d["sinif"], len(d["degis"])))
    ekle = []
    for y in YENI:
        if y["grup"] == "kosullu" and not kosullu:
            continue
        id = re.search(r'id:"([^"]+)"', y["kayit"]).group(1)
        k = metin.count('id:"%s"' % id)
        if k:
            ret.append("%s: dosyada zaten %d kez VAR" % (id, k))
            continue
        ekle.append(y["kayit"])
        uyg.append("YENI  %-18s %s" % (id, y["sinif"]))
    capa = "\n];"
    if ekle:
        if metin.count(capa) != 1:
            ret.append("ekleme çapası '\\n];' %d kez (1 olmalı)" % metin.count(capa))
        else:
            metin = metin.replace(capa, ",\n" + ",\n".join(ekle) + capa, 1)
    return metin, uyg, ret, len(ekle)


def harita_uyar(pencere_yeni, idler):
    """Değişen/yeni künyelerin yerleşimde s:/isg:/v:kid dönemleri yeni pencerenin dışında mı."""
    import girdi
    with contextlib.redirect_stdout(io.StringIO()):
        Y = girdi.yukle(sessiz=True)
    dev = {}
    t = io.open(DOSYA, encoding="utf-8").read()
    for m in re.finditer(r'\{ id:"([^"]+)"[^\n]*\n(?:[^\n]*\n){0,3}?[^\n]*harita:"([^"]+)"', t):
        dev[m.group(1)] = m.group(2)
    uyar = []
    for id in idler:
        f, tt = map(pad, pencere_yeni[id])
        anah = {id, dev.get(id, id)}
        for y in Y:
            for kat in ("s", "isg"):
                for p in (y.get(kat) or []):
                    if isinstance(p, dict) and p.get("d") in anah:
                        if pad(p.get("f")) < f or pad(p.get("t") or "9999") > tt:
                            uyar.append("%s %s:%s %s..%s  (künye %s..%s)" % (y.get("ad"), kat, p["d"], p.get("f"), p.get("t"), f, tt))
            for p in (y.get("v") or []):
                if isinstance(p, dict) and p.get("kid") == id:
                    if pad(p.get("f")) < f or pad(p.get("t") or "9999") > tt:
                        uyar.append("%s v:kid %s..%s  (künye %s..%s)" % (y.get("ad"), p.get("f"), p.get("t"), f, tt))
    return uyar


def main(argv):
    kosullu = "--kosullu" in argv
    yaz = "--uygula" in argv
    once = io.open(DOSYA, encoding="utf-8", newline="").read()
    sonra, uyg, ret, n_yeni = yamala(once, kosullu)
    print("KİP:", "UYGULA" if yaz else "KURU KOŞU", "· grup:", "kesin+kosullu" if kosullu else "kesin")
    for u in uyg:
        print("  ✓", u)
    for r in ret:
        print("  ✗ RET", r)

    with tempfile.NamedTemporaryFile("w", encoding="utf-8", suffix=".js", delete=False, newline="") as tf:
        tf.write(sonra)
        gecici = tf.name
    try:
        A, B = node_olc(DOSYA), node_olc(gecici)
    finally:
        os.unlink(gecici)
    print("\nDEVLETLER: %d → %d (beklenen +%d)" % (A["n"], B["n"], n_yeni))
    assert B["n"] == A["n"] + n_yeni, "künye sayısı tutmuyor"
    bag_a = sum(A["kunyesiz"].values())
    bag_b = sum(B["kunyesiz"].values())
    print("ETKİ — bağlayıcının gördüğü (COK_/SINIR_) künyesiz taraf: %d id / %d madde → %d id / %d madde"
          % (len(A["kunyesiz"]), bag_a, len(B["kunyesiz"]), bag_b))
    print("       BAĞLANAN: %d madde · %s" % (bag_a - bag_b,
          ", ".join("%s %d" % (k, v) for k, v in sorted(A["kunyesiz"].items(), key=lambda x: -x[1]) if k not in B["kunyesiz"])))
    print("       kalan künyesiz:", ", ".join("%s %d" % kv for kv in sorted(B["kunyesiz"].items(), key=lambda x: -x[1])))
    yeni_idler = [k for k in A["kunyesiz"] if k not in B["kunyesiz"]]
    disi = [(x, t, f, b) for x, t, f, b in B["bag"] if x in yeni_idler
            and not (pad(B["pencere"][x][0]) <= pad(t) <= pad(B["pencere"][x][1]))]
    print("       bağlanan maddelerden künye PENCERESİ DIŞINDA: %d" % len(disi))
    for x in disi:
        print("         ⚠️", *x)
    degisen = sorted({d["id"] for d in DEGIS if d["grup"] == "kesin" or kosullu})
    once_disi = [(x, t) for x, t, f, b in A["bag"] if x in degisen and not (pad(A["pencere"][x][0]) <= pad(t) <= pad(A["pencere"][x][1]))]
    sonra_disi = [(x, t) for x, t, f, b in B["bag"] if x in degisen and not (pad(B["pencere"][x][0]) <= pad(t) <= pad(B["pencere"][x][1]))]
    print("       değişen künyelerde pencere dışı COK_ maddesi: %d → %d" % (len(once_disi), len(sonra_disi)))
    for x in sonra_disi:
        print("         ⚠️ hâlâ dışında:", *x, "· künye", *B["pencere"][x[0]])

    idler = degisen + [re.search(r'id:"([^"]+)"', y["kayit"]).group(1) for y in YENI if y["grup"] == "kesin" or kosullu]
    uy = harita_uyar(B["pencere"], idler)
    print("\nHARİTA — yeni pencerenin DIŞINA düşen yerleşim dönemi: %d" % len(uy))
    for u in uy[:40]:
        print("  ⚠️", u)

    print("\nBEKLEYEN (yamaya girmez):")
    for a, n, k in BEKLEYEN:
        print("  ·", a, "—", n, ("· %d madde" % k) if k else "")
    if not kosullu:
        print("\nKOŞULLU (yalnız --kosullu):")
        for y in YENI:
            if y["grup"] == "kosullu":
                print("  ·", re.search(r'id:"([^"]+)"', y["kayit"]).group(1), "—", y["neden"])
        for d in DEGIS:
            if d["grup"] == "kosullu":
                print("  ·", d["id"], "—", d["neden"])

    if yaz:
        if ret:
            raise SystemExit("\n✗ %d RET var — HİÇBİR ŞEY YAZILMADI (yarım yama yok)" % len(ret))
        io.open(DOSYA, "w", encoding="utf-8", newline="").write(sonra)
        print("\n✓ YAZILDI:", DOSYA, "· sonra: py arac/denetle.py · py arac/durum_tablosu.py")
    else:
        print("\n(kuru koşu — dosyaya dokunulmadı; yazmak için --uygula)")


if __name__ == "__main__":
    main(sys.argv[1:])
