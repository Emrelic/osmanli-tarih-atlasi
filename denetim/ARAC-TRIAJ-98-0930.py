r"""TRIAJ-98-0930 — 98 dosyasız `sirada` maddesini sahiplendirir.

Evren: denetim/ACIK-BIRLESIK-0930.json `acik` içinde hukum=="sirada" ve `not`unda
dosya adı (…\.(js|py|md|json|css|html)) GEÇMEYEN maddeler = 98 (koordinatörün sayısı).
Tam metin: denetim/KAPAT-*.json. Bugünkü veri: arac/girdi.yukle() (93 dosya, 4296 nokta).
Çıktı: denetim/TRIAJ-98-0930.json + .md
Koşu:  py denetim/ARAC-TRIAJ-98-0930.py
"""
import json, re, sys, os, glob, io, contextlib
sys.stdout.reconfigure(encoding="utf-8")
os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, "arac")
import girdi

Y_ = "UYGULA-YERLESIM-0930"; O_ = "UYGULA-OLAYLAR-0930"; K_ = "UYGULA-KART-0930"
M_ = "YAMA-MOTOR-0930"; A_ = "ARAYUZ-MADDE-0930"; B_ = "belirlenemedi"

# ── KAPAT dosyalarını tek biçime indir ─────────────────────────────────────
def kapat_maddeleri():
    out = []
    for f in sorted(glob.glob("denetim/KAPAT-*.json")):
        kay = os.path.basename(f)[:-5]
        d = json.load(open(f, encoding="utf-8"))
        def ekle(parti, mid, m):
            r = dict(m); r["_kaynak"] = kay
            r["_parti"] = r.get("parti") or parti; r["_madde"] = r.get("madde") or mid
            r["_hukum"] = r.get("yeni_hukum") or r.get("hukum"); out.append(r)
        if isinstance(d.get("madde"), dict):
            for mid, m in d["madde"].items(): ekle(d.get("parti", "?"), mid, m)
        P = d.get("partiler", {})
        items = P.items() if isinstance(P, dict) else [(p.get("parti"), p) for p in P]
        for pad, p in items:
            if isinstance(p, list):
                for m in p: ekle(pad, m.get("madde"), m)
                continue
            M = p.get("madde", p) if isinstance(p, dict) else p
            if isinstance(M, dict):
                for mid, m in M.items():
                    if isinstance(m, dict) and ("hukum" in m or "yeni_hukum" in m): ekle(pad, mid, m)
            elif isinstance(M, list):
                for m in M: ekle(pad, m.get("madde"), m)
    return out

PAT = re.compile(r"[\w\-]+\.(?:js|py|md|json|css|html)\b")
A = json.load(open("denetim/ACIK-BIRLESIK-0930.json", encoding="utf-8"))["acik"]
s98 = [a for a in A if a["hukum"] == "sirada" and not PAT.search(a["not"])]
assert len(s98) == 98, len(s98)
tam = kapat_maddeleri(); kul = set(); satirlar = []
for a in s98:
    k = [m for m in tam if m["_kaynak"] == a["kaynak"] and str(m.get("not", ""))[:120] == a["not"][:120]
         and m["_hukum"] == "sirada" and id(m) not in kul]
    assert k, a["not"][:60]
    kul.add(id(k[0])); satirlar.append(k[0])

# ── bugünkü yerleşim verisi: ad → "dosya:satır" ────────────────────────────
with contextlib.redirect_stdout(io.StringIO()):
    Y = girdi.yukle(sessiz=True)
_dosya = {}
def yer(ad):
    y = next((y for y in Y if y["ad"] == ad), None)
    if y is None: return f"{ad}: YOK (evren {len(Y)})"
    yol = "data/" + y["_kaynak"]
    if yol not in _dosya: _dosya[yol] = open(yol, encoding="utf-8").read().split("\n")
    kal = re.compile(r'ad\s*"?\s*:\s*"' + re.escape(ad) + '"')
    for i, l in enumerate(_dosya[yol], 1):
        if kal.search(l): return f"{yol}:{i}"
    return yol

# ── TASNİF — sıra no (1..98) → (hedef, sahip, hüküm, gerekçe, [delil yerleşim adları | "dosya:satır"]) ──
T = {
 1: ("data/yerlesimler_afrika.js · data/yerlesimler.js", Y_, "sirada", "El-Arîş hâlâ d 1517-05-19, Süveyş d 1517-02-15 — düşüş günleri için kaynak sevki, sonra yerleşim penceresi.", ["El-Arîş", "Süveyş"]),
 2: ("arac/uret_petek.py", M_, "sirada", "Uzun düz Voronoi kenarı — çare GORUNUM-ABCD A, motor yaması (denetim/*.diff).", []),
 3: ("data/yerlesimler*.js (Mısır noktaları)", Y_, "sirada", "1799 Mısır isg: listesi çıkarılmadı; Bilbîs/Sâlihiyye bugün de isg:siz.", ["Bilbîs (Şarkiye)", "Sâlihiyye"]),
 4: ("arac/uret_petek.py", M_, "sirada", "bizans∩OSMANLI gövde binmesi — gövde kırpma sırası motor işi, yama.", []),
 5: ("data/yerlesimler.js", Y_, "sirada", "Gümülcine hâlâ s:bizans→1363-01-01 kaynaksız; T4 kümesi TDV'den + kronoloji senkronu (UYGULA-OLAYLAR ile birlikte).", ["Gümülcine"]),
 6: ("data/yerlesimler*.js (+ renk: arac/renkler.py)", Y_, "sirada", "v:bizans kaydı bugün 0, statu 'haracguzar' 0 — ①② veri işi; ③ açık ton gövde rengi YAMA-MOTOR'a ayrı yama.", []),
 7: ("data/ekokuma_*.js (yeni kart)", K_, "sirada", "Avrupa karşılaştırmalı ekonomi kartı yok; akademik kaynak sevki gerekiyor (TDV kapsamıyor).", ["data/ekokuma_toplum.js:77"]),
 8: ("data/yerlesimler*.js (Aral kıyısı)", Y_, "sirada", "Kutuda bugün 4 nokta (Küngrat, Aral kuzeyi, Emba, Kazalı); kıyı noktası + Emre kararının bu maddeye teyidi.", []),
 9: ("data/yerlesimler_asya.js", Y_, "sirada", "Hainan kutusunda bugün 1 nokta (Qiongzhou); kaynaklı kıyı noktası gerekiyor.", ["Qiongzhou (Haikou)"]),
 10: ("data/yerlesimler.js", Y_, "sirada", "Çehrin bugün s:lehistan→1678-08-21; 1672 Doroşenko himayesi ve 1676 Rus dönemi yazılmamış (+ kronoloji senkronu).", ["Çehrin (Çigirin)"]),
 11: ("data/yerlesimler*.js (Sırbistan)", Y_, "sirada", "sirbistan s:29 v:0 · sirbistan-prensligi s:10 v:5 — değişmedi; 0075/H-0005 uygulamasına (denetim/SIRP-NOKTA-0930.json) eklenmeli.", []),
 12: ("data/yerlesimler*.js", Y_, "sirada", "Noktasızlık (sivri köşe); kaynaklı yeni nokta yazılmadı.", []),
 13: ("data/yerlesimler*.js (Hicaz-Necd)", Y_, "sirada", "Pencere 40.46–45.05E·18.27–21.14N bugün 0 nokta; kaynaklı nokta sevki.", []),
 14: ("data/yerlesimler*.js (Hicaz-Necd)", Y_, "sirada", "Pencere 41.68–46.90E·18.72–21.27N bugün 0 nokta; kaynaklı nokta sevki.", []),
 15: ("data/yerlesimler*.js (Tesalya/İskiathos)", Y_, "sirada", "Pencere 23.0–23.6E·39.0–39.65N bugün 1 nokta (İskiathos).", []),
 16: ("data/yerlesimler.js (Tuna/Kars isg:)", Y_, "sirada", "1878-01-04 Tuna isg 0/58; Plevne s:rusya 1877-12-10 (işgal değil sahiplik) — değişmedi.", ["Plevne", "Sofya"]),
 17: ("data/yerlesimler.js", Y_, "sirada", "Darfur noktası s:darfur 1695→1916 kesintisiz; komşuları (Kebkâbiye, Tîne) 1874 Mısır · 1883 Mehdi zincirinde.", ["Darfur", "Kebkâbiye"]),
 18: ("data/yerlesimler.js", Y_, "sirada", "=17 kökü: Darfur noktası 1883-12-23'te mehdi'ye geçmiyor; komşu günlerinin kaynağı sınanarak uygulanmalı.", ["Darfur", "Nühûd"]),
 19: ("data/yerlesimler_ek29.js", Y_, "sirada", "Banaluka/Bihaç 1878 isg VAR; Bosna Dubiçası·Bosna Novi'si yalnız 1788-91 isg taşıyor, Brod·Krupa hiç — 1878→1908 isg eksik.", ["Bosna Dubiçası (Bosanska Dubica)", "Bosna Novi'si (Bosanski Novi)", "Bosna Brod'u (Bosanski Brod)", "Krupa (Bosanska Krupa)"]),
 20: ("data/yerlesimler.js", Y_, "sirada", "Tekirdağ s:bulgaristan-kralligi 1912-11-01→1913-07-21 değişmedi; kaynaklı gün gerekiyor.", ["Tekirdağ"]),
 21: ("data/d_sinirlar_ortadogu.js + data/yerlesimler*.js (Ras Ecdir)", B_, "sirada", "1886 D hattı + Ras Ecdir noktası; d_sinirlar_*.js sahip tablosunda YOK. Ras Ecdir 0 nokta. Kaynak gerek (1910'u kopyalamak sahte kesinlik).", []),
 22: ("data/d_sinirlar_ortadogu.js · d_sinirlar_afrika.js", B_, "sirada", "1886/1892 Trablus-Tunus hattı yok; D hattı dosyalarının sahibi tabloda yok; kaynak sevki.", []),
 23: ("data/yerlesimler*.js", Y_, "sirada", "Taba ve Refah noktası bugün 0; koordinat kaynaktan alınmalı (§4).", []),
 24: ("data/yerlesimler.js", Y_, "sirada", "Yezd/Şiraz/Kirmanşah hâlâ akkoyunlu→1508-01-01; denetim/SAFEVI-DOGU-0081-uygula.py KOŞTURULMADI (data/'da etiket 0).", ["Yezd", "Şiraz", "Kirmanşah"]),
 25: ("data/olaylar_ek16.js", O_, "sirada", "Oran maddesi bugün 'TDV bu olayı doğrulamıyor' diyor; TDV vehran düzeltmesi inmedi, DUNYA-KRONO-0081 etiketi data/'da 0.", ["data/olaylar_ek16.js:286"]),
 26: ("data/yerlesimler*.js (Kars·Sarıkamış·Ardahan)", Y_, "sirada", "=0081/H-0003; KAFKAS-KORFEZ/SAFEVI-DOGU uygulayıcısı inmedi.", ["Kars", "Sarıkamış", "Ardahan"]),
 27: ("data/olaylar_ek8.js", O_, "sirada", "KISMEN: senkron kapandı — günlü madde olaylar_ok107.js:46 (1515-09-19) VAR ve ek8 maddesi toprak-kazanc'tan çıkarıldı (:80 ic_not). KALAN: SAFEVI-DOGU'nun istediği ek8 maddesi hâlâ t:'1515-01-01' (:70; TDV '921 sonları', 921 H 1515-02-15'te başlar) — 09-19'a çekmek ok107 ile mükerrer yapar: uygulayıcı karar versin.", ["data/olaylar_ek8.js:70", "data/olaylar_ok107.js:46", "Nusaybin"]),
 28: ("data/yerlesimler.js", Y_, "sirada", "Diyarbakır d hâlâ 1515-09-10 (öneri 09-19) · Harput 1516-05-01 (öneri 03-26).", ["Diyarbakır", "Harput (Elazığ)"]),
 29: ("data/yerlesimler.js", Y_, "sirada", "Urfa d hâlâ 1516-05-01 (öneri 1517-05-01).", ["Urfa"]),
 30: ("data/olaylar_ek5.js", O_, "sirada", "KISMEN: yeni Mardin maddesi VAR (olaylar_ek13.js:398, 1517-05-01). KALAN: Koçhisar başlığı hâlâ 'Mardin ile Urfa'nın fethi' (1516-05-01) — Mardin 1517 ile çelişiyor.", ["data/olaylar_ek5.js:152", "data/olaylar_ek13.js:398"]),
 31: ("data/yerlesimler_afrika.js", Y_, "sirada", "DÜZELTME: Tobruk noktası VAR (KAPAT 'YOK' dedi) ama d 1556-01-01'den başlıyor ⇒ 1517-05-19 görselinde katkısı yok; 1517 için kaynaklı pencere ya da Bardiyya gerekiyor.", ["Tobruk"]),
 32: ("data/yerlesimler.js", Y_, "sirada", "Doha yalnız 1871'den; 1521 ve 1670-1871 zinciri, Zubare noktası yok. İkizi 0082/H-0101.", ["Doha (Katar)"]),
 33: ("data/yerlesimler*.js (Budin)", Y_, "sirada", "denetim/BALKAN-MACAR-0081-uygula.py KOŞTURULMADI (etiket 0).", []),
 34: ("data/yerlesimler_ek29.js", Y_, "sirada", "Gospić d hâlâ 1527-01-01 (öneri 1527-05-01); Kvarner noktası yok.", ["Gospić"]),
 35: ("data/yerlesimler.js", Y_, "sirada", "Estergon hâlâ s:macaristan→1543-08-10; BALKAN-MACAR uygulayıcısı inmedi.", ["Estergon"]),
 36: ("data/yerlesimler_ek26.js · yerlesimler_sinir_kuzey.js", Y_, "sirada", "Arpaçay·Digor·Iğdır·Beri d hâlâ 1534-01-01 (öneri 1534-06-01).", ["Arpaçay (Akyaka)", "Digor", "Iğdır", "Beri"]),
 37: ("data/yerlesimler.js", Y_, "sirada", "Halepçe d hâlâ 1534-12-04 (öneri 1535-01-01).", ["Halepçe"]),
 38: ("data/olaylar*.js", O_, "sirada", "Şehrizor/Halepçe 1550 kaybı maddesi yok (olaylar/kronoloji'de t:1550 + Şehrizor 0); Halepçe d→1550-01-01 kırılması maddesiz.", ["Halepçe"]),
 39: ("data/yerlesimler*.js (Guryel kıyısı)", Y_, "sirada", "Guryel kıyısı tâbiliği inmedi; Batum kısmı Emre kararı (o kısma dokunulmaz).", []),
 40: ("data/olaylar_ek14.js", O_, "sirada", "Mersiye maddesi hâlâ t:'1566-09-01' (ölümden önce sıralanıyor).", ["data/olaylar_ek14.js:81"]),
 41: ("data/olaylar*.js", O_, "sirada", "Gyula teslimi maddesi olaylar*'da yok; UYARI olaylar_p0036.js:9 'Gyula 1566 için TDV/akademik kaynak BULUNAMADI' diyor — kaynak sevki önce.", ["data/olaylar_p0036.js:9"]),
 42: ("data/yerlesimler_sinir_kuzey.js", Y_, "sirada", "Klıçatak·Norapat hâlâ s:safevi 1501→1736, Osmanlı penceresi yok. İkizi 0082/H-0008.", ["Kliçatak (Suser)", "Norapat"]),
 43: ("data/yerlesimler.js", Y_, "sirada", "Erbil safevi hâlâ →1638-12-25 (öneri 12-24).", ["Erbil"]),
 44: ("data/yerlesimler_sinir_kuzey.js", Y_, "sirada", "=42 (Klıçatak/Norapat).", ["Kliçatak (Suser)", "Norapat"]),
 45: ("data/yerlesimler*.js", Y_, "sirada", "Klıçatak/Norapat inmedi; Kotur/Serdest değişmedi; Şeyh Salu Emre kararı (dokunulmaz).", ["Kliçatak (Suser)"]),
 46: ("data/yerlesimler.js", Y_, "sirada", "Urmiye yalnız d 1724-01-01→1730-08-12; 1731 geri alınışı yok.", ["Urmiye"]),
 47: ("data/yerlesimler.js", Y_, "sirada", "Özi 1737 hâlâ s:rusya 1737-07-11→1738-08-01 (öneri isg:, bitiş 1739).", ["Özi"]),
 48: ("data/olaylar*.js", O_, "sirada", "Niş'in 1737 düşüşü maddesi yok (olaylar*'da 1737-06..08: yalnız 07-11 Özi, 07-14 ilan, 08-04 Banaluka); Niş isg:avusturya 1737-07-27 kırılması maddesiz.", ["Niş"]),
 49: ("data/yerlesimler*.js", Y_, "sirada", "=47 + Kılburun noktası yok.", ["Özi"]),
 50: ("data/yerlesimler*.js", Y_, "sirada", "Novomirgorod noktası yok; Yelisavetgrad s:rusya 1754'ten. BOLGELER taşması 8b tavanlı borç (motor değil).", ["Yelisavetgrad (Aziz Yelizaveta Kalesi)"]),
 51: ("data/yerlesimler*.js", Y_, "sirada", "=50 kökü (Novomirgorod yok).", []),
 52: ("data/yerlesimler*.js (Yedisan)", Y_, "sirada", "Yedisan kutusunda bugün 4 nokta (Akkirman, Özi, Hacıbey, Yedisan bozkırı); önerilen noktalar yok.", []),
 53: ("data/yerlesimler*.js", Y_, "sirada", "Arabat noktası yok; Kerç/Yenikale/Taman isg 1771-07-12 duruyor, gün kaynağı okunmadı.", ["Kerç"]),
 54: ("data/yerlesimler*.js", Y_, "sirada", "Deşt-i Kıpçak alt sorusu = 0082/H-0014; Zaporojye statüsü Emre kararı (dokunulmaz).", []),
 55: ("data/yerlesimler.js · yerlesimler_kirim.js", Y_, "sirada", "Kefe/Sudak/Yalta/Aluşta hâlâ d→1783-04-19 + isg:rusya 1771-07-01→1783-04-19 (Kaynarca'da bitmiyor).", ["Kefe", "Sudak (Suğdak)", "Yalta"]),
 56: ("data/seferler*.js", K_, "sirada", "Mogilev/Rumyantsev 1788 oku seferler*'de 0.", []),
 57: ("data/yerlesimler.js", Y_, "sirada", "Özi 1788 hâlâ s:rusya 1788-12-17'den (öneri isg:→1792-01-09).", ["Özi"]),
 58: ("data/yerlesimler.js", Y_, "sirada", "Yaş/Roman/Bırlad'da 1788-92 isg: yok (gün kaynağı bulunamamıştı).", ["Yaş", "Roman", "Birlad (Bârlad)"]),
 59: ("data/yerlesimler.js", Y_, "sirada", "Krayova'da 1789 isg:avusturya yok; Küçük Eflak yok.", ["Krayova (Craiova)"]),
 60: ("data/yerlesimler.js", Y_, "sirada", "Hacıbey'de 1789 isg: yok (d 1538→1792).", ["Hacıbey (Odessa)"]),
 61: ("data/yerlesimler.js", Y_, "sirada", "Orsova hâlâ s:avusturya 1790-04-16'dan (öneri isg:→1791-08-04 sonra s:).", ["Orsova (Eski Orsova)"]),
 62: ("data/yerlesimler.js", Y_, "sirada", "Kök 0082/H-0033 (Boğdan işgali eksik).", ["Yaş"]),
 63: ("data/yerlesimler.js", Y_, "sirada", "Kök 0082/H-0033.", ["Yaş"]),
 64: ("data/yerlesimler.js", Y_, "sirada", "Kök 0082/H-0033.", ["Yaş"]),
 65: ("data/yerlesimler.js", Y_, "sirada", "Kök 0082/H-0033.", ["Yaş"]),
 66: ("data/yerlesimler_avrupa.js", Y_, "sirada", "Konstanz ve Freiburg hâlâ s:almanya 1281→1923.", ["Konstanz", "Freiburg"]),
 67: ("data/yerlesimler*.js (yeni nokta)", Y_, "sirada", "Görz·Gradisca·Tarvisio·Villach·Belluno·Feltre·Cortina 7/7 yok.", []),
 68: ("data/yerlesimler*.js (yeni nokta)", Y_, "sirada", "Sondrio·Chiavenna·Chur·Lugano·Bellinzona·Locarno 6/6 yok.", []),
 69: ("data/yerlesimler_avrupa.js", Y_, "sirada", "Chambéry s:sardinya→1860 · Nice s:sardinya 1388→1860; 1792/93 Fransa penceresi yok, akademik gün teyidi.", ["Chambéry", "Nice"]),
 70: ("data/yerlesimler.js", Y_, "sirada", "Elba s:piombino 1399→1923 (künye aşımı — önce §3.5 sınıflandırma); Lucca, Piombino noktası yok.", ["Elba"]),
 71: ("data/yerlesimler*.js", Y_, "sirada", "Hazarecat/Bamyan noktası yok; kaynaklı koordinat sevki.", []),
 72: ("data/yerlesimler.js", Y_, "sirada", "DÜZELTME: Asyut'ta isg:fransa-cumhuriyet 1798-07-01→1801-10-09 VAR (KAPAT 'yok' dedi) ama CEVAP günü 1798-12-25 (Juillet) — başlangıç günü uyuşmuyor; Nil vadisi öteki noktaları isg:siz.", ["Asyut"]),
 73: ("data/yerlesimler_afrika.js", Y_, "sirada", "Bilbîs, Sâlihiyye'de 1799 isg: yok.", ["Bilbîs (Şarkiye)", "Sâlihiyye"]),
 74: ("data/yerlesimler.js", Y_, "sirada", "DÜZELTME: Reşîd/Dimyat/Asyut isg VAR ama üçü de 1801-10-09'da bitiyor; CEVAP: Reşîd 1801-04-19 · Dimyat ≤06-27 · Asyut 06-27 — bitiş günleri uygulanmadı.", ["Reşîd (Rosetta)", "Dimyat", "Asyut"]),
 75: ("data/yerlesimler.js", Y_, "sirada", "DÜZELTME: Mljet noktası VAR ('Mliyet (Mljet)', KAPAT 'YOK' dedi) ama s:venedik 1281→1797 — CEVAP '1410'dan Dubrovnik' uygulanmadı. Dalmaçya kimliği alt sorusu Emre kararı.", ["Mliyet (Mljet)"]),
 76: ("data/yerlesimler*.js (yeni nokta)", Y_, "sirada", "Kişinev·Belz·Leova·Ungheni 4/4 yok.", []),
 77: ("data/yerlesimler.js", Y_, "sirada", "Hâil hâlâ s:hail-ibn-ali 1779→1836 (öneri 1779-1818 suud, 1836→1835).", ["Hâil"]),
 78: ("data/yerlesimler*.js", Y_, "sirada", "Bîşe·Necran·Vâdi'd-Devâsir yok; Doha 1670-1871 yok.", ["Doha (Katar)"]),
 79: ("data/yerlesimler.js", Y_, "sirada", "Culfa hâlâ s:kacar 1794→1923 (öneri 1828-02-22'den rusya). Lenkeran 1813 kısmı Emre kararı.", ["Culfa"]),
 80: ("data/seferler*.js", K_, "sirada", "1828 Prut geçişi oku seferler*'de 0.", []),
 81: ("data/yerlesimler*.js (yeni nokta)", Y_, "sirada", "Kule (Turnu Măgurele) noktası yok; kutuda 3 nokta (Niğbolu, Slatina, Krayova). Turnu Severin AYRI yer.", []),
 82: ("data/yerlesimler*.js", Y_, "sirada", "Köln·Aachen·Münster·Trier s:almanya 1281→1923; Düsseldorf·Koblenz yok. prusya künye (devletler.js) + boya (renkler.py) VAR ⇒ motor yaması gerekmez.", ["Köln", "Aachen", "Münster", "Trier"]),
 83: ("data/yerlesimler.js", Y_, "sirada", "Krakov avusturya 1795→1815 (1809-15 Varşova Dukalığı yok); Lemberg, Tarnow yok.", ["Krakov"]),
 84: ("data/yerlesimler.js · yerlesimler_afrika.js", Y_, "sirada", "Tilimsan·Medea·Miliana·Blida·Şerşel s:fransa 1830-07-05'ten; 4 şehir için A/B Emre kararı — o kısım bekler.", ["Tilimsan", "Medea (Titteri)"]),
 85: ("data/yerlesimler.js", Y_, "sirada", "Şam v 1832-06-15 (TDV 16 Haz) · Halep 1832-06-25 (TDV 15 Tem) — değişmedi.", ["Şam", "Halep"]),
 86: ("data/yerlesimler_ek26.js · yerlesimler_sinir_kuzey.js", Y_, "sirada", "Iğdır/Beri hâlâ d 1534→1878; SAFEVI-DOGU ile SIRALI uygulanmalı.", ["Iğdır", "Beri"]),
 87: ("data/yerlesimler_ek26.js", Y_, "sirada", "=86 (Iğdır); 8a sapması koşu sonrası ölçülür.", ["Iğdır"]),
 88: ("data/yerlesimler_seyrek.js", Y_, "sirada", "Teymâ ve Dûmetülcendel hâlâ s:sammar 1836'dan; künye (A yeni künye · B __BOSLUK__) Emre kararı — o kısım bekler.", ["Teymâ", "Dûmetülcendel (Cevf)"]),
 89: ("data/yerlesimler*.js (Doğu Asir)", Y_, "sirada", "Asir kutusunda (17-20K·42.5-45D) 1 nokta (Ebha); kaynaklı nokta sevki.", []),
 90: ("data/yerlesimler.js", Y_, "sirada", "=32 (Doha 1871 öncesi, Zubare yok).", ["Doha (Katar)"]),
 91: ("data/ekokuma_*.js (yeni kart)", K_, "sirada", "1683-99 dört tâbinin (Erdel/Eflak/Boğdan/Kırım) tutumu kartı yok.", ["data/ekokuma_dunya.js:378"]),
 92: ("js/app.js", A_, "sirada", "(a) 'Emre' temizliği YAPILDI; KALAN (b) sebep/sonuç yoksa başlık h4 — js/app.js KİLİTLİ.", ["js/app.js:11747"]),
 93: ("data/yerlesimler*.js (Erdel)", Y_, "sirada", "v:kid 'erdel' bugün 0; Erdel noktalarında v:k 'Erdel' yazılı ama kid alanı yok (Erdel (Kaloşvar), Lugos, Varad, Yanova, Debrecen) — kid eklenmeli.", ["Erdel (Kaloşvar)"]),
 94: ("data/ekokuma_dunya.js", K_, "bayat", "1744-01-01 Dir'iye bağı EKLENDİ (UYGULA-KART-0930, bugün).", ["data/ekokuma_dunya.js:506-507"]),
 95: ("data/kisiler.js", K_, "sirada", "Kişi kartlarının çoğu hâlâ zayıf (KAPAT: 287'nin 221'i <150 karakter) — kaynaklı anlatı.", ["data/kisiler.js:453"]),
 96: ("data/ekokuma_*.js (yeni tartışma kartı)", K_, "sirada", "'Küçük Kaynarca diplomatik skandal mıydı' kartı yok (ekokuma*'da 'skandal' geçen Kaynarca kartı 0).", []),
 97: ("data/yerlesimler.js (+ olaylar KK-2)", Y_, "sirada", "Nalçik (Kabartay) hâlâ altinorda→kabartay 1441; 1427 maddesiyle çelişki (Y-1 a/b kararı gerekir); KK-2 (1563 Terek) kaynak bulunamadı.", ["Kabartay (Nalçik)"]),
 98: ("data/yerlesimler.js (+ olaylar K1-K4)", Y_, "sirada", "YAMA-BASRA Y1-Y6 canlıda yok: Basra 1696-1701 İran penceresi yok (bugün yalnız zend 1776-79); Fâv/Kürne/Kuveyt değişmedi. K1-K4 → UYGULA-OLAYLAR. Sonra koşu.", ["Basra", "Fâv", "Kürne", "Kuveyt"]),
}
assert sorted(T) == list(range(1, 99))

out = []
for i, m in enumerate(satirlar, 1):
    hedef, sahip, huk, ger, dl = T[i]
    delil = [d if (":" in d and d.startswith(("data/", "js/"))) else yer(d) for d in dl]
    out.append({
        "no": i, "kaynak": m["_kaynak"], "parti": m["_parti"], "madde": m["_madde"],
        "sinif": m.get("sinif", ""), "eski_hukum": "sirada", "yeni_hukum": huk,
        "hedef_dosya": hedef, "sahip_oturum": sahip, "gerekce": ger,
        "delil": " · ".join(delil), "kendim_yaptim": False,
        "kapat_notu": m.get("not", ""),
    })
from collections import Counter
dag = Counter(r["sahip_oturum"] for r in out)
hk = Counter(r["yeni_hukum"] for r in out)
json.dump({"oturum": "TRIAJ-98-0930", "tarih": "2026-09-30",
           "evren": "ACIK-BIRLESIK-0930 sirada ∧ notta dosya adı yok = 98 (tam metin KAPAT-*.json)",
           "veri_evreni": f"girdi.yukle: {len(Y)} nokta", "sahip_dagilimi": dict(dag),
           "hukum_dagilimi": dict(hk), "maddeler": out},
          open("denetim/TRIAJ-98-0930.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("yazıldı", len(out), dict(dag), dict(hk))
