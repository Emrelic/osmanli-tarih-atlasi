# DUNYA-KRONO-0081 — parti-emrelic-0081 H-0006 · H-0007 · H-0039 · H-0040 uygulayıcısı
# Varsayılan KURU KOŞU: hiçbir dosyaya yazmaz, her eşleşmenin sayısını basar.
#   py denetim/DUNYA-KRONO-0081-uygula.py            → kuru koşu
#   py denetim/DUNYA-KRONO-0081-uygula.py --uygula   → yazar (her değişiklik count==1 şartıyla)
# Bir tek eşleşme bile 1 değilse HİÇBİR dosyaya yazılmaz.
# Sonra: py arac/denetle.py (Değişmez 2: 1566-09-02 Gyula kırılması artık kendi maddesine bağlanır)
import os, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
UYGULA = "--uygula" in sys.argv

def oku(yol):
    with open(os.path.join(KOK, yol), encoding="utf-8", newline="") as f:
        return f.read()

# ── H-0039 · Bâkî mersiyesi vefattan ÖNCE sıralanıyordu ─────────────────────
# t:"1566-09-01" "Eylül 1566"nın ayın 1'ine kodlanmış hâli (D213) ve Kanunî'nin
# 7 Eylül vefatından 6 gün ÖNCEYE düşüyordu: mersiye, yazılmasına sebep olan
# ölümden önce okunuyor, Zigetvar sefer oku da "bir madde önce" görünüyordu.
# TDV baki--sair: "Kanûnî Sultan Süleyman'ın Sigetvar'dan ölüm haberi geldi
# (Eylül 1566). ... ünlü mersiyesini yazdı. ... mersiyenin ardından da II. Selim
# tahta çıktığında (15 Rebîülevvel 974 / 30 Eylül 1566) hemen bir cülûsiye".
# ⇒ Kaynak AY veriyor; alt sınır vefat günü (7 Eylül, TDV suleyman-i "6-7 Eylül
# gecesi"). Gün UYDURULMADI: t alt sınırdır, kesinlik:"ay", gs:60 ile aynı gün
# vefat maddesinin (gs varsayılan 50) ARDINDAN sıralanır.
MERSIYE_ESKI_BAS = '{ t:"1566-09-01", k:"kultur", etiket:["kultur","konu-kultur","konu-hukuk"], b:"Bâkî\'nin Kanunî Sultan Süleyman için mersiye yazması", gun:"Eylül 1566",'
MERSIYE_YENI_BAS = ('{ t:"1566-09-07", gs:60, kesinlik:"ay", k:"kultur", etiket:["kultur","konu-kultur","konu-hukuk"], '
                    'b:"Bâkî\'nin Kanunî Sultan Süleyman için mersiye yazması", '
                    'gun:"Eylül 1566 (Kanunî\'nin 7 Eylül\'deki vefatının ardından; gün kaynakta yok)",')
MERSIYE_ESKI_D = 'd:"Sigetvar seferi dönüşünde Kanûnî Sultan Süleyman\'ın ölüm haberi İstanbul\'a ulaştığında,'
MERSIYE_YENI_D = 'd:"Kanûnî Sultan Süleyman\'ın Sigetvar\'dan ölüm haberi geldiğinde,'
MERSIYE_ESKI_K = 'mersiyelerinden birini kaleme aldı.", kaynak:"baki--sair", duygu:["🎨"] },'
MERSIYE_YENI_K = ('mersiyelerinden birini kaleme aldı.", '
                  'ic_not_d:"DUNYA-KRONO-0081 / H-0039: eski t:1566-09-01 (ay, ayın 1\'ine kodlanmış) vefattan 6 gün ÖNCEYE düşüyordu. '
                  'TDV baki--sair yalnız AY verir (\'ölüm haberi geldi (Eylül 1566)\', mersiye bundan sonra, cülûsiye 30 Eylül\'den önce); '
                  't vefat gününe (alt sınır) çekildi, gs:60 ile vefat maddesinin ardından. Eski d \'Sigetvar seferi dönüşünde\' diyordu — '
                  'ordu Sigetvar\'dan ancak 21 Ekim\'de ayrıldı (TDV selim-ii), ifade kaldırıldı.", '
                  'kaynak:"baki--sair · suleyman-i", duygu:["🎨"] },')
# Aynı dosyanın bir sonraki satırı (cülûsiye): "birkaç hafta" TDV'de yok; TDV "mersiyenin ardından ... hemen" der.
CULUS_ESKI = "— Kanuni'nin ölümü üzerine yazdığı mersiyeden yalnızca birkaç hafta sonra."
CULUS_YENI = "— TDV'ye göre Kanunî'nin ölümü üzerine yazdığı mersiyenin hemen ardından."

# ── H-0040 · Gyula (Göle) haritada düşüyor, kronolojide yok ──────────────────
# yerlesimler_ek5.js Gyula d: 1566-09-02'de başlıyor; Değişmez 2 bunu 5 gün sonraki
# Zigetvar vefat maddesiyle "kapalı" sayıyordu (başka olay). Maddesi yazılıyor.
ZIGETVAR_CAPA = '{ t:"1566-09-07", k:"taht", etiket:["siyaset","konu-siyasi","konu-kisiler","konu-hanedan","konu-hukuk"], b:"Zigetvar — Kanunî\'nin vefatı",'
GYULA_MADDE = (
 '{ t:"1566-09-02", k:"fetih", etiket:["toprak-kazanc","savas","konu-askeri"], b:"Gyula (Göle) Kalesi\'nin teslimi — Pertev Paşa\'nın Zigetvar seferine koşut harekâtı", '
 'gun:"2 Eylül 1566 (teslim sözleşmesi 30 Ağustos\'ta imzalandı, garnizon 2 Eylül öğlen çıktı)", yer:"Gyula (Göle), Körös boyu — Macaristan", yer_id:"Gyula (Göle)", '
 'kisiler:"Pertev Paşa, Kerecsényi László", '
 'd:"Kanunî\'nin 1566 seferi iki kollu yürüdü: padişah Zigetvar\'a yönelirken Pertev Paşa kumandasındaki ayrı bir ordu 2 Haziran 1566\'da Körös kıyısındaki Gyula kalesini kuşattı. '
 'Kale komutanı Kerecsényi László otuz günü aşan bir direnişin ardından Pertev Paşa ile pazarlığa girdi ve 30 Ağustos\'ta teslim sözleşmesini imzaladı; garnizon 2 Eylül\'de kaleden çıktı. '
 'Çıkış sırasında sözleşme çiğnenip çekilen askerlere saldırıldı, Kerecsényi esir alındı. Gyula\'nın düşüşü üzerine komşu Jenő (Yanova) garnizonu da kaleyi bırakıp kaçtı. '
 'Kale, Osmanlıca adıyla Göle, Tımışvar eyaletine bağlı bir sancak merkezi oldu.", '
 'ic_not_d:"DUNYA-KRONO-0081 / H-0040 (Emre: \'göle kalesi gyula kalesi ele geçmiş görünüyor ama kronolojide bundan bahsedilmiyor\'). '
 'Atlas kırılması yerlesimler_ek5.js Gyula d.f 1566-09-02 — bu madde onu kendi olayına bağlar (önceden 5 gün sonraki Zigetvar maddesine yapışıktı). '
 'TDV\'de gyula/göle maddesi YOK (arama boş); TDV timisvar yalnız \'Göle (Gyula)\' sancağını anar. Zigetvar ile ilgisi: aynı seferin ikinci kolu (Bánlaky: Pertev\'in görevi önce Gyula\'yı almaktı).", '
 'kaynak:"Bánlaky József, A magyar nemzet hadtörténelme (1928-42), MEK 09477, B 0013/1056 (Gyula kuşatması Karácsonyi János, Békésvármegye története I, 160-175\'e dayanır): '
 '\'Pertev június 2-án ért Gyula alá\' · \'a vár feladásáról szóló szerződést … aláírták 1566 augusztus 30.-án\' · \'szeptember 2.-án délben maga a kivonulás is kezdetét vette\' — hassasiyet: GÜN · '
 'TDV timisvar: \'Göle (Gyula) ve Arad (birlikte)\' sancağı", duygu:["🎉"], fethedilen:["Gyula (Göle)"] },\n')
ZIGETVAR_ESKI_K = 'kaynak:"zigetvar", vefat_id:"suleyman1"'
ZIGETVAR_YENI_K = ('kaynak:"sigetvar · suleyman-i", ic_not_kaynak:"DUNYA-KRONO-0081: eski kaynak \'zigetvar\' TDV\'de \'bk. SİGETVAR\' yönlendirme stubudur, '
                   'gövde taşımaz (D211 ④). sigetvar: kuşatma 5 Ağustos 1566 · suleyman-i: vefat 20-21 Safer 974 (6-7 Eylül 1566) gecesi", vefat_id:"suleyman1"')

# ── H-0006 · Oran 1509 maddesi TDV'yi "doğrulamıyor" sanıyordu ────────────────
# TDV vehran AYNEN: "Kastilya Krallığı 17 Mayıs 1509'da Vehrân'ı işgal edip halkının büyük
# kısmını katletti, geri kalanları da esir aldı." ⇒ madde kaynaksız DEĞİL; kaynak alanı
# Vikipedi makale başlığına benzeyen "Spanish conquest of Oran, 1509 tarihyazımı" idi ve
# d'deki sayılar (80 gemi, 10-12 bin, 12.000 kayıp, <30) ile "Cartagena'dan (zaten 1505'ten beri
# İspanyol elinde olan)" cümlesi (1505'te alınan Mersa'l-Kebîr'dir) hiçbir kaynağa dayanmıyordu.
ORAN_ESKI_GUN = 'gun:"17-18 Mayıs 1509 (filo 16\'sında Cartagena\'dan kalktı, şehir 18\'inde alındı, Cisneros 20\'sinde girdi)",'
ORAN_YENI_GUN = 'gun:"17 Mayıs 1509",'
ORAN_ESKI_D_BAS = 'd:"TDV\'nin Cezayir/Mağrib maddeleri bu olayı doğrulamıyor;'
ORAN_ESKI_D_SON = 'Oran, 1708\'e kadar İspanyol enklavı olarak kaldı.",'
ORAN_YENI_D = ('d:"Batı Akdeniz deniz yolunu denetleyen ve Tilimsân\'ın limanı olan Vehrân (Oran), 1492\'de Gırnata\'dan kaçan Endülüslü müslüman ve yahudilerin '
               'sığınmasıyla büyümüştü. XVI. yüzyıl başında Mağrib kıyısındaki liman şehirlerini birer birer alan Kastilya Krallığı 17 Mayıs 1509\'da Vehrân\'ı işgal etti; '
               'halkın büyük kısmı katledildi, kalanlar esir alındı ve şehirde müslüman ile yahudi nüfus kalmadı. İspanyollar sur ve kaleleri genişletti; '
               'Vehrân 1708\'e kadar İspanya\'nın elinde kaldı.", '
               'ic_not_d:"DUNYA-KRONO-0081 / H-0006: eski d \'TDV bu olayı doğrulamıyor\' diyordu — TDV vehran gün vererek doğruluyor. '
               'Eski d\'deki sefer ayrıntıları (Cartagena kalkışı 16 Mayıs, 18 Mayıs düşüş, Cisneros\'un 20 Mayıs girişi, gemi/asker/kayıp sayıları) '
               'kaynak adı taşımadığı için çıkarıldı; Batı tarihyazımı düşüşü 18 Mayıs\'a koyar, TDV 17 Mayıs der — TDV esastır (§4). '
               'Emre\'nin istediği ek okuma ZATEN VAR: data/ekokuma_akdeniz.js tartisma-akdeniz-vehran-onemi, olay:\'1509-05-17|Oran\'.",')
ORAN_ESKI_K = 'kaynak:"bulunamadı — TDV bu olayı yeterli ayrıntıda doğrulamıyor, dayanak: standart akademik kaynak (Spanish conquest of Oran, 1509 tarihyazımı)"'
ORAN_YENI_K = 'kaynak:"vehran — TDV AYNEN: \'Kastilya Krallığı 17 Mayıs 1509\'da Vehrân\'ı işgal edip halkının büyük kısmını katletti, geri kalanları da esir aldı.\' · hassasiyet: GÜN"'

# ── H-0007 · Hint Okyanusu ek okuma kartı (yeni dosya + yükleyici satırı) ─────
KART_KAYNAK = "denetim/DUNYA-KRONO-0081-ekokuma_hint0081.js"
KART_HEDEF = "data/ekokuma_hint0081.js"
YUKLEYICI_CAPA = '  "ekokuma_p75c",        // window.EKOKUMA_P75C — EKOKUMA-TOPLUM-0075, M-4982 (7 kart)\n'
YUKLEYICI_SATIR = '  "ekokuma_hint0081",    // window.EKOKUMA_HINT0081 — DUNYA-KRONO-0081 H-0007 (1 kart, Hint Okyanusu)\n'

degisim = {}   # yol -> yeni metin
hata = 0
def degistir(yol, eski, yeni, ad):
    global hata
    metin = degisim.get(yol) or oku(yol)
    n = metin.count(eski)
    print(f"  {'✓' if n == 1 else '✗'} {ad}: {yol} eşleşme={n}")
    if n != 1:
        hata += 1; return
    degisim[yol] = metin.replace(eski, yeni, 1)

def araya(yol, bas, son, yeni, ad):
    """bas ile başlayıp son ile biten TEK parçayı yeni ile değiştirir."""
    global hata
    metin = degisim.get(yol) or oku(yol)
    i = metin.find(bas); n = metin.count(bas)
    j = metin.find(son, i) if i >= 0 else -1
    tamam = n == 1 and j > i and metin[i:j].count("\n") == 0
    print(f"  {'✓' if tamam else '✗'} {ad}: {yol} baş={n} son={'var' if j > i else 'yok'}")
    if not tamam:
        hata += 1; return
    degisim[yol] = metin[:i] + yeni + metin[j + len(son):]

print("H-0039 · mersiye")
degistir("data/olaylar_ek14.js", MERSIYE_ESKI_BAS, MERSIYE_YENI_BAS, "t/gs/kesinlik/gun")
degistir("data/olaylar_ek14.js", MERSIYE_ESKI_D, MERSIYE_YENI_D, "d 'seferi dönüşünde'")
degistir("data/olaylar_ek14.js", MERSIYE_ESKI_K, MERSIYE_YENI_K, "ic_not_d + kaynak")
degistir("data/olaylar_ek14.js", CULUS_ESKI, CULUS_YENI, "cülûsiye 'birkaç hafta'")
print("H-0040 · Gyula")
degistir("data/olaylar.js", ZIGETVAR_CAPA, GYULA_MADDE + ZIGETVAR_CAPA, "Gyula maddesi (Zigetvar'ın önüne)")
degistir("data/olaylar.js", ZIGETVAR_ESKI_K, ZIGETVAR_YENI_K, "Zigetvar kaynağı (ölü stub)")
print("H-0006 · Oran")
degistir("data/olaylar_ek16.js", ORAN_ESKI_GUN, ORAN_YENI_GUN, "gun")
araya("data/olaylar_ek16.js", ORAN_ESKI_D_BAS, ORAN_ESKI_D_SON, ORAN_YENI_D, "d")
degistir("data/olaylar_ek16.js", ORAN_ESKI_K, ORAN_YENI_K, "kaynak")
print("H-0007 · Hint Okyanusu kartı")
if os.path.exists(os.path.join(KOK, KART_HEDEF)):
    print(f"  ✗ {KART_HEDEF} ZATEN VAR — üstüne yazılmaz"); hata += 1
else:
    print(f"  ✓ {KART_HEDEF} yok, oluşturulacak")
    degisim[KART_HEDEF] = oku(KART_KAYNAK)
degistir("js/app.js", YUKLEYICI_CAPA, YUKLEYICI_CAPA + YUKLEYICI_SATIR, "yükleyici satırı")

print()
if hata:
    print(f"🔴 {hata} eşleşme tutmadı — HİÇBİR DOSYAYA YAZILMADI."); sys.exit(1)
if not UYGULA:
    print(f"KURU KOŞU temiz · {len(degisim)} dosya değişecek: " + ", ".join(sorted(degisim)))
    print("Yazmak için: py denetim/DUNYA-KRONO-0081-uygula.py --uygula"); sys.exit(0)
for yol, metin in degisim.items():
    with open(os.path.join(KOK, yol), "w", encoding="utf-8", newline="") as f:
        f.write(metin)
    print("  yazıldı:", yol)
print("Sonra: node --check (değişen JS) · py arac/denetle.py · py arac/denetle_yayin.py")
