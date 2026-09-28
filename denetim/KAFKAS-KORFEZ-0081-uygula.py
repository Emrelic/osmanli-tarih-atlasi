# KAFKAS-KORFEZ-0081 — uygulayıcı (koordinatör koşturur; KOŞU 17'den SONRA)
#
# Varsayılan KURU KOŞU: hiçbir dosyaya yazmaz, her değişikliğin çapasını
# count==1 ile sınar ve basar. Yazmak için:  py denetim/KAFKAS-KORFEZ-0081-uygula.py --uygula
#
# Bölümler (hepsi ayrı bayrakla seçilir; bayrak yoksa YALNIZ A):
#   A  H-0035  Şehrizor 1550 kaybının kronoloji maddesi      (data/olaylar_ek5.js)   KAYNAKLI, önerim: UYGULA
#   B  H-0043  Bozkır (Deşt-i Kıpçak) 1570'ten Don Kazak     (data/yerlesimler.js)   --don     (Emre kararı D'ye dokunur)
#   C  H-0038  Batum + Murvaneti 1555-1578 Güryel tâbiliği   (data/yerlesimler.js, yerlesimler_sinir_kuzey.js)  --guryel  (bölgeden şehre)
#
# Sonra: py arac/denetle.py  (Değişmez 2: A yeni madde, B/C kırılmaları 1570-01-01
# ve 1555-05-29 günlerinde, ikisinin de maddesi var — ölçülecek, varsayılmadı).
import sys, os
sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
UYGULA = "--uygula" in sys.argv
BOLUMLER = {"A"}
if "--don" in sys.argv: BOLUMLER.add("B")
if "--guryel" in sys.argv: BOLUMLER.add("C")

DEGISIKLIKLER = []  # (bölüm, dosya, eski, yeni, açıklama)

# ---------------------------------------------------------------- A · H-0035
# TDV sehrizor: «Osmanlı hâkimiyetini kabul eden Bige Bey'in 1550'de ölümünün
# ardından Zalm Kalesi'ni ele geçirip beyliğe hâkim olan kardeşi Sührâb,
# Safevîler'e meyledip Osmanlılar'a itaatten ayrıldı.» Veri (Şehrizor d:
# 1535→1550-01-01, Halepçe d: 1534-12-04→1550-01-01, ikisi de s:safevi'ye
# döner) ZATEN bu kaybı çiziyor; eksik olan yalnız MADDE. Değişmez 2'nin
# "temiz" demesi aynı gündeki Lahsa maddesinin ±30 gün penceresindendir
# (yanlış senkron) — kırılmayı anlatan madde yoktu. Gün yok → 1550-01-01 (§4).
LAHSA_CAPA = 'kaynak:"lahsa", duygu:["🎉"] },\n'
SEHRIZOR_MADDE = (
    '{ t:"1550-01-01", k:"kayip", etiket:["toprak-kayip","konu-askeri"], '
    'b:"Şehrizor Osmanlı itaatinden çıktı — Erdelân beyi Sührâb Safevîlere meyletti", '
    'gun:"1550", yer:"Şehrizor, Zalm Kalesi, Halepçe", yer_id:"Şehrizor", '
    'kisiler:"Bige Bey, Sührâb", '
    'd:"Kanunî\'nin Irakeyn Seferi\'nde (1535) Osmanlı hâkimiyetini tanıyan Erdelân emiri Bige Bey 1550\'de öldü. '
    'Zalm Kalesi\'ni ele geçirip beyliğe hâkim olan kardeşi Sührâb Safevîlere meyletti ve Osmanlı itaatinden ayrıldı; '
    'Şehrizor yöresi dört yıl Safevî tarafında kaldı. Bölge ancak Nahcıvan Seferi sırasında, Zalm Kalesi\'nin '
    '22 Ağustos 1554\'te zaptıyla yeniden Osmanlı idaresine girdi.", '
    'kaynak:"sehrizor", ic_not_gun:"TDV sehrizor yalnız yıl veriyor (1550); gün bulunamadı, §4 gereği 1550-01-01. '
    'Veri (Şehrizor/Halepçe d: t:1550-01-01) bu maddeden ÖNCE vardı — madde onu anlatır, veri değişmedi.", '
    'duygu:["😔"] },\n'
)
DEGISIKLIKLER.append(("A", "data/olaylar_ek5.js", LAHSA_CAPA, LAHSA_CAPA + SEHRIZOR_MADDE,
                      "1550 Şehrizor kaybı maddesi, Lahsa maddesinin hemen ardına"))

# ---------------------------------------------------------------- B · H-0043
# Bozkır (Deşt-i Kıpçak) 48.50K 42.00D — Orta Don / Donets arası. 1570'ten
# sonra komşusu Don bozkırı (Sal) don-kazak'a geçtiği için Kırım'ın "gevşek
# himaye"si kuzeyde KOPUK bir adacık olarak kalıyor (görsel H-0043-1).
# Dayanak: Brehunenko, Enciklopedija istoriji Ukrajiny T.2 (2004) «Донські
# козаки»: topluluk 16. yy ortasında Orta ve Aşağı Don'da biçimlendi;
# 1570 yılı: olaylar_p0051.js maddesinin kendi kaynağı (Voennaya enciklopediya).
# ⚠️ Emre kararı D (13 Eyl 2026) bu noktaya v:kirim 1502→1774 yazdırmıştı;
# bu bölüm o kararın 1570 sonrasını DEĞİŞTİRİR ⇒ yalnız --don ile.
BOZKIR_ESKI = 'tur:"bolge", lat:48.50, lon:42.00, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1502-03-01",d:"altinorda"},{f:"1774-07-21",t:"1783-04-19",d:"kirim"},{f:"1783-04-19",t:"1917-03-15",d:"rusya"}'
BOZKIR_YENI = 'tur:"bolge", lat:48.50, lon:42.00, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1502-03-01",d:"altinorda"},{f:"1570-01-01",t:"1721-01-01",d:"don-kazak",kaynak:"KAFKAS-KORFEZ-0081 (H-0043): Brehunenko EIU T.2 2004 Донські козаки — Orta ve Aşağı Don · yıl: olaylar_p0051.js 1570 maddesinin kaynağı"},{f:"1721-01-01",t:"1917-03-15",d:"rusya"}'
BOZKIR_V_ESKI = '{ ad:"Bozkır (Deşt-i Kıpçak)", v:[{f:"1502-03-01",t:"1774-07-21",k:"Kırım Hanlığı"'
BOZKIR_V_YENI = '{ ad:"Bozkır (Deşt-i Kıpçak)", v:[{f:"1502-03-01",t:"1570-01-01",k:"Kırım Hanlığı"'
DEGISIKLIKLER.append(("B", "data/yerlesimler.js", BOZKIR_V_ESKI, BOZKIR_V_YENI, "Kırım gevşek himayesi 1570'te biter"))
DEGISIKLIKLER.append(("B", "data/yerlesimler.js", BOZKIR_ESKI, BOZKIR_YENI, "1570-1721 don-kazak, 1721'den rusya (Sal ile aynı zincir)"))

# ---------------------------------------------------------------- C · H-0038
# TDV gurcistan: «Amasya Antlaşması'na göre (1555) İmeret, Dadyan (Megrel ve
# Svanet), Güryel, Daveli/Tao-eli Osmanlı Devleti'ne; Kartli, Kahet ve Mosuk
# ise Safevî Devleti'ne veriliyordu.» Kutaisi (İmereti) bu yüzden 1555-05-29
# tâbi; Güryel kıyısı ise 1578'e dek "müstakil Gürcistan" boyanıyor.
# ⚠️ Batum'un 1555'te Güryel'e ait olduğunu TDV YAZMIYOR (bölgeden şehre
# taşıma) ⇒ yalnız --guryel ile; gün Kutaisi'nin v:'sinden DEĞİL Amasya
# maddesinden (olaylar) okunmalı — koordinatör teyit etsin.
GURYEL_V = 'v:[{f:"1555-05-29",t:"1578-08-09",k:"Güryel beyliği (tâbi)",kaynak:"TDV gurcistan: Amasya (1555) — Güryel Osmanlı\'ya; Batum\'un Güryel\'e aidiyeti bölge düzeyinde (KAFKAS-KORFEZ-0081)"}], '
GURYEL_V_JSON = ('"v":[{"f":"1555-05-29","t":"1578-08-09","k":"Güryel beyliği (tâbi)","kaynak":"TDV gurcistan: '
                 'Amasya (1555) — Güryel Osmanlı\'ya; Batum\'un Güryel\'e aidiyeti bölge düzeyinde (KAFKAS-KORFEZ-0081)"}],')
DEGISIKLIKLER.append(("C", "data/yerlesimler.js", '{ ad:"Batum", ', '{ ad:"Batum", ' + GURYEL_V,
                      "1555-1578 Güryel tâbiliği"))
DEGISIKLIKLER.append(("C", "data/yerlesimler_sinir_kuzey.js", '{"ad":"Murvaneti",', '{"ad":"Murvaneti",' + GURYEL_V_JSON,
                      "1555-1578 Güryel tâbiliği"))

# ---------------------------------------------------------------- çalıştır
hata = 0
metinler = {}
for bolum, dosya, eski, yeni, aciklama in DEGISIKLIKLER:
    if bolum not in BOLUMLER:
        print(f"  [{bolum}] ATLANDI (bayrak yok) · {dosya} · {aciklama}")
        continue
    yol = os.path.join(KOK, dosya)
    if dosya not in metinler:
        metinler[dosya] = open(yol, encoding="utf-8").read()
    n = metinler[dosya].count(eski)
    if n != 1:
        print(f"  [{bolum}] 🔴 ÇAPA {n} kez (1 olmalı) · {dosya} · {aciklama}")
        hata += 1
        continue
    if "v:[" in yeni and bolum == "C":
        # Batum/Murvaneti kaydında zaten v: varsa ikinci v: anahtarı yazılmaz
        bas = metinler[dosya].index(eski)
        satir = metinler[dosya][bas:metinler[dosya].find("\n", bas)]
        if satir.count(" v:[") + satir.count(",v:[") + satir.count('"v":[') > 0:
            print(f"  [{bolum}] 🔴 kayıtta zaten v: var — elle birleştir · {dosya}")
            hata += 1
            continue
    metinler[dosya] = metinler[dosya].replace(eski, yeni, 1)
    print(f"  [{bolum}] ✓ çapa 1 · {dosya} · {aciklama}")

if hata:
    print(f"🔴 {hata} çapa tutmadı — HİÇBİR DOSYA YAZILMADI")
    sys.exit(1)
if not UYGULA:
    print("KURU KOŞU — yazılmadı. Yazmak için --uygula")
    sys.exit(0)
for dosya, metin in metinler.items():
    open(os.path.join(KOK, dosya), "w", encoding="utf-8", newline="").write(metin)
    print(f"  yazıldı: {dosya}")
print("Sonra: py arac/denetle.py")
