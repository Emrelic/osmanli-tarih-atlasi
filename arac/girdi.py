# -*- coding: utf-8 -*-
"""
GİRDİ — yerleşim verisinin TEK okuma noktası
=============================================
`arac/uret_petek.py` ve `arac/denetle.py` yerleşim verisini buradan okur.

## Neden ayrı bir modül

Bu depoda iki araç aynı veriyi FARKLI katılıkta okuduğu için bir kez üretim
çöktü: `denetle.py` JS dizisinin sonundaki fazladan virgüle toleranslıydı,
motor değildi — denetim "temiz" derken üretim düşüyordu (bkz. uret_petek.py
içindeki uyarı). Aynı hatanın çok dosyalı girdide tekrar etmemesi için okuma
mantığı ve DOSYA LİSTESİ tek yerde duruyor. Bir parti canlıya alınacaksa
değişecek tek şey aşağıdaki `GIRDI_DOSYALARI` listesidir.

## Neden glob değil, izin listesi

`data/yerlesimler_*.js` desenini çıplak okumak cazip ama TEHLİKELİ: depoda
merge'e hazır OLMAYAN partiler duruyor ve desen onları sessizce içeri alır.

  data/yerlesimler_asya.js    344 nokta — 135 devlet kimliği renkler.py'de YOK,
                              tamamı 62°D'nin doğusunda, harita penceresi dışı
  (sayılar 2 Ağustos 2026 ölçümü — yorumdaki sayı ölçümün fotoğrafıdır ve
  eskir; partiye dokunan oturum yeniden ölçüp burayı düzeltir.
  yerlesimler_avrupa.js de bir dönem bu listedeydi: 15 kimliği renksizdi;
  RENK 15'ini yazınca — BOYALAR 114→129, c8cb964 — canlıya alındı, aşağıda.)

Kimliği tanımsız nokta üretimde uyarı verir ve bölgesi BOYANMAZ; yani glob
kullanmak "bir dosya ekledim" ile "haritada renksiz delik açtım"ı aynı işleme
indirger. İzin listesiyle bir partiyi canlıya almak tek satırlık, gözden
geçirilmiş bir karar oluyor.

## Bir parti nasıl canlıya alınır

1. Partinin bütün devlet kimlikleri `arac/renkler.py`'deki BOYALAR'da olsun
2. `py arac/denetle.py` — altı denetim de temiz olsun (ad çakışması, 3 km
   yakınlık ve maske kontrolü bu modül üzerinden çalışır)
3. Dosya adını aşağıdaki listeye ekle
4. `py arac/uret_petek.py` — üretim koşarken hiçbir girdi dosyasına YAZILMAZ
"""
import io
import json
import math
import os
import re

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KOK, "data")


def anlik_goruntu():
    """Girdi dosyalarını geçici bir dizine kopyalar ve DATA'yı oraya çevirir.

    ⚠️ ÜRETİM KİLİDİNİ KALDIRAN DEĞİŞİKLİK. Kilit teknik bir zorunluluk değil,
    protokoldü — ölçüldü: `uret_petek.py` 1320 satırda girdiye ÜÇ kez dokunuyor
    ve üçü de başta (parmak_izi · oku_goller · yukle). 233. satırdan sonraki
    1087 satır tamamen bellekle çalışıyor. Yani koşu sırasında dosyanın
    değişmesi motorun OKUDUĞUNU değiştirmiyor; kilit, değişikliğin çıktıya
    girdiğini SANMAYI önlemek için vardı.

    Anlık görüntü o sanıyı imkânsız kılıyor: motor koşu boyunca kopyadan okur,
    kopya değişmez, orijinaller serbest kalır.

    ⚠️ KOPYA ATOMİK DEĞİL. Üç dosya sırayla kopyalanırken araya bir yazma
    girerse KARIŞIK anlık görüntü çıkar (biri değişiklik öncesi, öteki sonrası).
    Pencere milisaniye ama sıfır değil. Bu yüzden kopyadan sonra orijinaller
    yeniden özetlenir; biri değiştiyse kopya TEKRARLANIR.
    Ölçülen maliyet: 3 dosya / 369 KB / 18 ms (iki tur sha256 dahil) —
    44 dakikalık koşuda 1/147.000.

    📌 VE BUGÜN AÇIK OLAN BİR KAPIYI KAPATIYOR: `oku_goller()` motorun 125.
    satırında, `yukle()` 233'te. Aralarında bir pencere var ve girdi orada
    değişirse motor KARIŞIK okur; `_GIRDI_IZI` bunu ancak üçüncü yazma
    noktasında, ~40 dakika sonra yakalar. Kilit tam bu pencereyi kapatmak için
    konmuştu ama KAPATMIYORDU. Anlık görüntü kapatıyor.
    """
    global DATA
    import hashlib
    import shutil
    import tempfile

    def _ozet(kok):
        iz = {}
        for ad in list(GIRDI_DOSYALARI) + [GOL_DOSYASI, GECIT_DOSYASI]:
            y = os.path.join(kok, ad)
            if os.path.exists(y):
                iz[ad] = hashlib.sha256(io.open(y, "rb").read()).hexdigest()
        return iz

    kaynak = DATA
    hedef = tempfile.mkdtemp(prefix="petek_girdi_")
    for deneme in range(1, 6):
        once = _ozet(kaynak)
        for ad in list(GIRDI_DOSYALARI) + [GOL_DOSYASI, GECIT_DOSYASI]:
            y = os.path.join(kaynak, ad)
            if os.path.exists(y):
                shutil.copy2(y, os.path.join(hedef, ad))
        if _ozet(kaynak) == once:
            DATA = hedef
            print(f"Girdi anlık görüntüsü: {len(once)} dosya kopyalandı"
                  + (f" ({deneme}. denemede)" if deneme > 1 else "")
                  + " → girdi dosyaları SERBEST")
            return hedef
        print(f"  anlık görüntü sırasında girdi değişti, tekrarlanıyor "
              f"({deneme}/5)")
    raise SystemExit("Girdi 5 denemede de durulmadı — kopya alınamadı.")

# ⚠️ SIRA ÖNEMLİ: aynı ad iki dosyada varsa hangisinin kazandığı değil, HATA
# verilmesi gerekir (aşağıda kontrol ediliyor). Sıra yalnız okunabilirlik için.
# 🔴 GIRDI_DOSYALARI ARTIK AYRI MODULDE — 24 Eylul 2026 (Emre)
# Liste `girdi.py`nin icindeyken her yeni yerlesim dosyasi motor TUZUNU
# degistirip 279 MB'lik onbellegi olduruyor ve kosuyu ~19 saate donduruyordu.
# Liste KOD DEGIL VERIDIR. Gerekce, guvenlik olcumu ve "bunu motor_izi()'ye
# geri EKLEME" uyarisi: arac/girdi_listesi.py baslik blogunda.
from girdi_listesi import GIRDI_DOSYALARI  # noqa: E402,F401

YAKINLIK_ESIK_KM = 3.0          # CLAUDE.md §11: 3 km içinde ikinci nokta açma

# ⚠️ ALAN NORMALİZASYONU — bu modülün var olma sebebinin ikinci kanıtı
# Şema alanlarının çoğu İSTEĞE BAĞLI ve dosyalar farklı alışkanlıklarla yazılmış:
#   yerlesimler.js       : d: HER kayıtta var (boşsa d:[] yazılmış)
#   yerlesimler_afrika.js: 47 kayıtta d: HİÇ YOK — Osmanlı dönemi olmayan yerler
# Motor `y["d"]` diye okuyordu, denetim `y.get("d")` diye. Afrika partisi girdiye
# eklendiği anda üretim `KeyError: 'd'` ile düştü — denetim ise TEMİZ diyordu.
# Bu, sondaki virgül vakasının birebir aynısı: iki araç aynı veriyi farklı
# katılıkta okuyor. Çözüm de aynı yerde olmalı — normalizasyon burada yapılır,
# iki araç da tam alanlı kayıt alır. Yeni bir isteğe bağlı alan eklenirse
# (kur:, bit:, kd:) varsayılanı BURAYA yazılır, iki aracın koduna değil.
VARSAYILAN = {
    "tur": "sehir",
    "g": 0,
    "k": 0,          # idari kademe: 0 = kademesiz
    "m": None,       # bağlı olunan k1/k2 merkezin adı
    "s": [],         # yabancı sahiplik dönemleri
    "d": [],         # doğrudan Osmanlı dönemleri
    "v": [],         # tâbi / dolaylı idare dönemleri
}

# ⚠️ BİLİNEN ALAN KÜTÜĞÜ — "sessizce yutulan alan" hata sınıfının kapağı
# Yeni bir alan (isg:, kur:, bit:, go:) şemaya girdiğinde motor onu tanımaz ve
# HİÇ SES ÇIKARMADAN yok sayar. Sorun yeni alanda değil, YAZIM HATASINDA:
# `isg:` yerine `isgal:`, `kur:` yerine `kr:` yazılırsa veri dosyada durur,
# denetim temiz raporlar, harita eski hâlinde kalır ve kimse fark etmez.
# Bu depoda aynı sınıftan üç hata çıktı (sondaki virgül, KeyError:'d', ek9'un
# yayına bağlanmaması) ve üçü de "iki araç aynı veriyi farklı katılıkta okuyor"
# yüzündendi. Kütük, yeni alanı AÇIKÇA kaydetmeye zorlar.
# Bir alanı buraya eklemek "motor bunu okuyor" demek DEĞİLDİR; "bu alanın
# varlığından haberdarım" demektir. Hangi aracın okuduğu yorumda yazılı.
BILINEN_ALANLAR = {
    # 🔴 `kaynak` 16 Ağustos 2026'da EKLENDİ ve gecikmesi ölçüldü:
    # eklendiği anda veride ZATEN 299 kayıt onu kullanıyordu. Yani
    # ayrıştırıcı, projenin **kırmızı çizgisinin** ürettiği alanı
    # tanımıyordu — `CLAUDE.md §4`: *"Kaynağı yazılmayan bilgi, kaynağı
    # olmayan bilgiden ayırt edilemez"* ve `kaynak:` zorunlu.
    # ⇒ Kural yazılmış, VERİ yazılmış, ama ALET güncellenmemişti.
    # Bir araştırma oturumu (Okyanusya partisi) kabul kapısının
    # doğrulama adımında yakaladı — kapı ilk kullanımında iş gördü.
    # 📌 `§11`in *"bir ders veriye serbest metin olarak inerse inmiş
    # sayılmaz"* dersinin TERSİ: burada ders veriye DÜZGÜN indi,
    # inmeyen ALETİN kendisiydi.
    "kaynak": "TDV slug ya da akademik kaynak · `bulunamadı` da geçerli "
              "bir DEĞERDİR (§4 kırmızı çizgi)",
    "ad":  "zorunlu — benzersiz yerleşim adı",
    "lat": "zorunlu — enlem",
    "lon": "zorunlu — boylam",
    "tur": "sehir / kale / bolge …",
    "g":   "gösterim önceliği (app.js: etiket zoom kademesi)",
    "k":   "idari kademe 0-4",
    "m":   "bağlı olunan k1/k2 merkezin adı",
    "s":   "yabancı sahiplik dönemleri — MOTOR BOYAR",
    "d":   "doğrudan Osmanlı dönemleri — MOTOR BOYAR",
    "v":   "tâbi / dolaylı idare dönemleri — MOTOR BOYAR",
    "kur": "kuruluş tarihi — motor: petek_epok() bu tarihten önce peteği "
           "komşuya devreder",
    "bit": "yok oluş tarihi — kur:'un aynadaki hâli",
    "go":  "önemin söndüğü gün — YALNIZ app.js (etiket kalabalığı); motor okumaz",
    # ⚠️ isg: MOTOR TARAFINDAN KASTEN OKUNMAZ. Sebebi şema kararıdır, ihmal
    # değil: işgal bir dönem TÜRÜ değil ÖRTÜ katmanıdır (commit 043e911).
    #   d:/v:/s: → DE JURE sahiplik → peteğin TABAN RENGİ (motorun işi)
    #   isg:     → DE FACTO denetim → tarama katmanı (uret_devirler.py'nin işi)
    # Mısır bunu zorunlu kılıyor: İngiltere 1882'den beri fiilen orada ama
    # Osmanlı hükümranlığı hukuken 1914'e kadar sürüyor. İşgal bir dönem türü
    # olsaydı taban rengi değişir ve 32 yıllık hukukî durum haritadan silinirdi.
    # Bosna aynı desen: 1878 Avusturya işgali, 1908 ilhak — ikisi AYRI gösterim.
    "isg": "işgal örtüsü — motor OKUMAZ (taban rengi de jure kalır); "
           "window.ISGALLER üreticisi arac/uret_devirler.py",
    # ⚠️ GEOMETRİNİN SORAMADIĞI SORUYU TAŞIYAN ALAN.
    # Motor "bu peteğin çevresi sahipli mi" diye sorabiliyor ama "o dağ
    # YÖNETİLİYOR muydu" diye soramıyor. Kuşatılmışlık ölçütü bu yüzden
    # Cetinje'yi devretmek istiyor (%94,5) — oysa TDV `karadag` Karadağ'ı
    # "göçebe kabilelerin GEVŞEK KONFEDERASYONU" diye tarif ediyor ve
    # Podgorica XVIII. yy'da hâlâ dağa karşı altı tabyayla tahkim ediliyor.
    # Kuşatılmışlık ovadan geliyor; dağ yönetilmiyordu.
    # ⇒ Ölçüt VARSAYILAN, bu alan İSTİSNA. Ve istisna YALNIZ KAYNAKLI
    #   araştırma hükmüyle yazılır — "bence öyle" ile değil.
    # 📌 Alan yoksa varsayılan False'tur: yani sessizlik "kasıtlı değil"
    #   demektir, "bilinmiyor" değil. Bilinmiyorsa yazılmaz ve ölçüt karar
    #   verir; bu, bilgisizliği kasıt gibi göstermenin önüne geçiyor.
    "kasitli_bosluk": "True ise kuşatılmışlık ölçütü bu peteği DEVRETMEZ — "
                      "boşluk kasten öyle. Yalnız kaynaklı hükümle yazılır. "
                      "Okuyan: uret_petek.py, _kusatilmis()",
    # 🔴 BOŞLUĞUN CİNSİ — `kasitli_bosluk`un MAKİNE OKUNUR tamamlayıcısı.
    # 12 Ağustos 2026'da doğdu. Emre'nin `*nedenboş` kısaltması BEŞ şık
    # soruyor: "insan mı yok · devlet mi yok · kabile yönetimi mi var ·
    # veri mi yok · hata mı". `neden:` serbest metni bu soruyu taşıyordu
    # ama MAKİNE SORAMIYORDU — 138 kaydın 102'sinde cins okunamıyordu.
    # Adı `VERI-YAPISI.md:69`daki plandan (orada `bos:` diye tasarlanmış,
    # ve `MIMARI §6` ona bir GÖRSEL karşılık da vermiş: devletsiz düz,
    # veri-yok taralı, lejantta ayrı satır). Değer kümesi ÖLÇÜMDEN:
    # plan iki değer öngörüyordu, gerçek veri beşe ayrıldı.
    # SINAV (NOKTA SİBİRYA vakası): kaynağa sor — KONUŞUYORSA `devletsiz`,
    # SUSUYORSA `veri-yok`. `devletsiz` bir İDDİADIR ve kaynak ister.
    "bos": "boşluğun CİNSİ: devletsiz | veri-yok | kabile | insansiz | hata. "
           "`kasitli_bosluk` ile birlikte yazılır; bayrak VARsa bu da OLMALI.",
    # 🔴 `kasitli_bosluk`un GEREKÇESİ — serbest metin.
    # `denetle_bosluk.py:270` bu alanı ZATEN okuyor ve kendi yorumunda
    # mevcut bayraklı kayıtların hiçbirinde `neden:` olmamasını bir KUSUR
    # olarak yazıyor ("boş bıraksın VE SEBEBİNİ KAYDETSİN"). Ama alan
    # kütüğe kayıtlı değildi, o yüzden yükleyici her yüklemede uyarı
    # basıyordu: doğru davranış, hatalıymış gibi görünüyordu.
    # (PETEK/NOKTA ölçtü ve ilk dört gerekçeli kaydı yazdı, 3 Ağustos 2026)
    "neden": "kasitli_bosluk'un gerekçesi — niçin kasten boş",
    # 🔴 kd: — `k:` ve `m:`nin ZAMANLI hâli (`ALTYAPI ④`, `VERI-YAPISI §kd`)
    #   kd:[{f,t,k,m}, …]  —  "şu tarihten şu tarihe kademe K, merkez M"
    # NİÇİN: bugün bir yerleşim bütün tarih boyunca TEK merkeze bağlı; bu
    # `Değişmez 3`ün ölçülmüş 359 çiftini doğuruyor (1300'de Söğüt Osmanlı
    # ama m:"Bursa" ve Bursa Bizans). Ayrı bir `sinif:` alanı kademeyi
    # çözer, `m:`yi ÇÖZMEZDİ — `kd:` ikisini BİRLİKTE zamanlı yapıyor.
    #
    # 🟢 GEÇİŞ KURALI — `kd_oku()`: kd: YOKSA k:/m: tek dönemlik kd: gibi
    # okunur. Yani alan BUGÜN CANLI ve hiçbir veri satırı değişmedi.
    # ⚠️ Ve türetilmiş dönem `turetildi:True` taşır: "bütün tarih boyunca
    # aynıydı" bir ÖLÇÜM DEĞİL, bilgi yokluğudur. Onu ölçüm gibi
    # kaydetmek, bilmediğini bilgi diye yazmaktır.
    "kd":  "zamanlı idari kademe+merkez [{f,t,k,m}] — k:/m:'nin yerini "
           "ALACAK; yoksa k:/m:'den türetilir (kd_oku)",

    # ═══ 2 EYLÜL 2026 — A2. ÜÇÜ DE VERİDE ZATEN CANLIYDI.
    # `renk_olc.py` her koşuda bunları "BILINEN_ALANLAR'da yok — yazım
    # hatası mı, yeni şema alanı mı?" diye soruyordu. Soru ÖLÇÜLDÜ ve
    # üçü de MEŞRU çıktı; dördüncü bir aday (`baskent`) REDDEDİLDİ.
    # 📌 `kaynak` alanının 16 Ağustos vakasının aynısı: kural yazılmış,
    #    veri yazılmış, ALET güncellenmemişti.
    "kesinlik":
           "tarih hassasiyeti: gun|ay|yil|onyil|yuzyil|belirsiz. SKALER "
           "ya da NESNE ({f,t}) — bir dönemin iki ucu farklı hassasiyette "
           "olabilir (Vidin: başı ay, sonu gün). VERI-YAPISI.md'de tam. "
           "⚠️ 'ne kadar kesin' der, 'biliyor muyuz' DEMEZ — dayanaksız "
           "bir tarihi kesinlik alanıyla meşrulaştırmak YASAK",
    "pencere_disi":
           "True ise nokta harita PENCERESİNİN dışında — İHLAL DEĞİL, "
           "'pencere oraya açılana kadar BEKLEYEN veri'. Sofala vakasında "
           "öğrenildi: bu kayıtları 'düzeltmek' ihlali kapatır ve DOĞRU "
           "VERİYİ BOZAR (§11). Pencere büyüyünce KENDİLİĞİNDEN canlanır",
    "sinir":
           "True ise 1923 sınır hattı köyü — Emre'nin 'sınırları birebir "
           "çizelim' kararının kayıtları. denetle.py'nin 4d yorumu "
           "bunları adıyla anıyor",
    "ikiz":
           "3 km'den yakın AMA mükerrer OLMAYAN çiftin karşılıklı beyanı. "
           "`denetle.ikiz_ayikla` iki şart koşar: beyan KARŞILIKLI olacak "
           "(tek taraflı beyan yazım hatasıdır) ve İKİ TARAFTA DA `kaynak:` "
           "bulunacak — 'beyan kaynaksız geçmez', böylece takma-ad çiftleri "
           "beyan EDİLEMEZ ve mükerrer tespiti zayıflamaz. "
           "🔴 3 km bir YASAK değil bir ŞÜPHE EŞİĞİDİR: kuralın doğduğu "
           "vakalarda (Varat/Varad · Afyon-Karahisâr) kusur yakınlık değil "
           "AYNI YERİN İKİ KEZ ve TUTARSIZ yazılmasıydı. Zaman çizgileri "
           "FARKLIYSA iki nokta mükerrer değildir. "
           "Bugünkü beyanlılar: Anadolu Hisarı ↔ Rumeli Hisarı (1,54 km, "
           "Boğaz'ın iki yakası) · Budin ↔ Peşte (1,57 km, Tuna'nın iki "
           "yakası). Karaağaç bu kapıdan GEÇMEDİ: ölçüldü, sahibi hiçbir "
           "gün Edirne'den farklı değil ⇒ ifade edilecek fark YOK, kalem "
           "geometriye düştü",
    "not":
           "Serbest metin — yamayı yazan oturumun gerekçesi. "
           "🔴 3 Eylül 2026'da eklendi ve gecikmesi ölçüldü: "
           "`_sahiplik_uygula.py` bu alanı 2 Eylül'de yazmaya başlamıştı "
           "ama BILINEN_ALANLAR'da yoktu ⇒ inen her kayıt UYARI üretecekti. "
           "Bağlı evrende o gün 0 kayıt taşıyordu, yani zarar DOĞMADAN "
           "kapatıldı — `bos:`/`neden:`in Timbuktu'da doğurduğu vakanın "
           "tersi (orada alan araçta yoktu ve beyan SESSİZCE DÜŞTÜ)",
}
# 🔴 `baskent` BİLEREK EKLENMEDİ — 2 Eylül 2026'da ölçüldü ve REDDEDİLDİ.
#   Tek kayıtta geçiyor (yerlesimler_amerika2.js: Comanchería) ve değeri
#   bir sözlük değil bir CÜMLE: "merkezi yok — göçebe, son direniş
#   noktası Palo Duro Kanyonu". İki ayrı sebep, ikisi de tek başına yeter:
#   ① İÇERİK  makine ona soru soramaz — `§11`in on birinci kusur sınıfı.
#             Doğru yeri `neden:` ya da `kaynak:`.
#   ② AD      aynı gün künye tarafına `bk:[{f,t,ad}]` zamanlı başkent
#             alanı yazıldı. Yerleşim kaydında `baskent` adlı bir alan
#             bırakmak, AYNI ADI İKİ EKSENDE iki farklı anlamda kullanmak
#             olur — ve bir gün biri onu okumaya kalkar.
#   🔜 O kaydın düzeltilmesi (cümle `neden:`e taşınır, anahtar kalkar)
#      dosya sahibine bildirildi.

# Dönem nesnelerinin (s/d/v/isg elemanları) alanları
BILINEN_DONEM_ALANLARI = {
    "f": "başlangıç (YYYY-AA-GG)",
    "t": "bitiş",
    "d": "devlet kimliği — s: ve isg: içinde; renkler.py'de tanımlı olmalı",
    "k": "tâbi devletin adı — v: içinde (motor okumaz, gösterim için)",
    # ── 🅑 (Emre, 6 Eylül 2026) — `k` SERBEST METİN, makine SORAMAZ ──
    # Ölçüldü: 429 dönem · 373'ü `k` taşıyor · 40 ayrı METİN · ve ikisi
    # aynı şeyin iki yazımı ("Mısır (Kavalalı)" 74 + "Kavalalı hânedanı"
    # 54 = 128 dönem). Künye bağı yok ⇒ renk yok, dizin yok, ve
    # `denetle.py` "bu devlet o tarihte yaşıyor mu" diye SORAMIYOR.
    # `CLAUDE.md`: bir ders serbest metin olarak inerse inmiş sayılmaz —
    # sınavı tek soru: bunu bir `if` ile sorabiliyor muyum?
    "kid": "tâbi devletin KÜNYE kimliği — v: içinde. `k` görünen ad olarak "
           "KALIR; eşleşme bunun üzerinden yapılır. devletler.js'te tanımlı "
           "olmalı VE künye penceresi dönemi kapsamalı (§3.5.0).",
    # ⚠️ `statu:` — Emre'nin "parantez içinde vassal özerk himaye gibi
    # terimler yazalım" isteğinin YAPILANDIRILMIŞ karşılığı. Terimi `k`
    # metninden ÇIKARMAK denenmedi: parantez slotu zaten hanedan/kişi
    # taşıyor ("Mısır (Kavalalı)"), ve `VERI-YAPISI.md:399` o yolu adıyla
    # yasaklıyor ("bu proje onu ÜÇ KEZ denedi").
    "statu": "tâbiiyet cinsi — v: içinde. Varsayılan 'vassal' (katmanın "
             "tanımı zaten tâbiiyet). İnceltme: özerk · himaye · haraçgüzâr · "
             "ocaklık · voyvodalık · gevsek — KAYNAKLI olarak, ayrı iş. "
             "'gevsek' (Emre 13 Eyl 2026, 0043/H-0003 D): gevşek kontrollü "
             "bozkır (Kırım Hanlığı'nın Nogay bozkırı); himaye:true ile "
             "birlikte yazılır, motor d.h[].renk'i AÇIK TONA (#e8a2aa) çeker "
             "— iç dolgu devletin kendi rengi DEĞİL.",
    # 🆕 `himaye` — VERI-YAPISI.md "v:[{… himaye:true}] — ÜÇÜNCÜ GÖRSEL
    # KADEME" (Emre, 2 Eylül 2026) şemayı tanımlıyordu ama bu sözlükte
    # YOKTU (ölçüldü 14 Eylül: grep 'himaye' → yalnız statu açıklaması).
    # Motor alanı artık OKUYOR (uret_petek.py himaye_gruplari) ⇒ veri
    # yaması inince her kayıt "BILINEN_ALANLAR'da yok" UYARISI basacaktı.
    "himaye": "True ise tâbilik HİMAYE kademesinde — v: içinde. Okuyan: "
              "uret_petek.py → donemler.js d.h (şerit + iç dolgu). Yoksa "
              "düz tâbi tonu (bugünkü davranış).",
    # ⚠️ `enklav:` — GEOMETRİNİN SORAMADIĞI SORUYU TAŞIYAN İKİNCİ ALAN.
    # `kasitli_bosluk` ile aynı sınıftır ve gerekçesi tek cümle:
    # ENKLAVLIK HUKUKÎ BİR DURUMDUR, GEOMETRİK DEĞİL. Motor "bu peteğin
    # çevresi kimin" diye sorabiliyor ama "burası bir presidio muydu, yoksa
    # hinterlandı olan bir şehir mi" diye soramıyor.
    # Ölçüldü (MOTOR 3, 3 Ağustos): yetim petek payı EN ÇOK ÖRTÜŞEN noktaya
    # verilince ölçüt 7 çiftin 6'sında doğru sonuç verdi — ama Sebte'de
    # yanıldı ve İLKEDEN değil TESADÜFEN tutuyordu (enklav çoğu zaman kısa
    # kenarlı olur). Presidionun hinterlandı YOKTUR; toprağı ona vermek ayrı,
    # ondan almak ayrı sorudur ve hiçbir geometrik ölçüt ikisini ayıramaz.
    #
    # 🔴 DÖNEM BAZLIDIR, NOKTA BAZLI DEĞİL — ayrım şart:
    #     Sebte 1281-1415 fas       → sıradan Fas kasabası, enklav DEĞİL
    #           1415-1581 portekiz  → ENKLAV
    #     Mersa'l-Kebîr 1509-1792 ispanya → ENKLAV
    #                   1831-1923 fransa  → DEĞİL (sömürge, hinterlandı VAR)
    # ⚠️ Motorun taban geometrisi ZAMANSIZ olduğu için bugünkü uygulama
    #    yaklaşıktır: bir dönemde bile enklavsa nokta hiç yetim ememez.
    #    Bedeli ÖLÇÜLDÜ — 1.609 km² · 155 yıl · tek nokta (Oran), yani
    #    Osmanlı tepe gövdesinin on binde 3'ü. Dönem bazlı gerçek çözüm
    #    (petek_epok deseni) bu bedele değmedi; ölçüm MOTOR-3 raporunda.
    #
    # ⚠️ COĞRAFÎ TARİF DEĞİL. Bu depoda "enklav" kelimesi dokuz yorumda
    #    GÖRÜNTÜ anlamında geçiyor ("Şirvan enklav görünüyor", "Saraybosna
    #    enklavı", "Dubrovnik enklavı") ve orada kastedilen şey bir KUSURDUR.
    #    Buradaki alan ise bir HÜKÜMDÜR: "bu dönemde hinterlandı yoktu".
    #    İkisi karıştırılırsa alan, düzeltilmesi gereken bir görüntü hatasına
    #    yazılır ve hatayı kalıcılaştırır.
    #
    # 📌 A LİSTESİ (PETEK/NOKTA parti 14, Oturum 0 işledi): 13 nokta / 17
    #    dönem. Sebte · Melîle · Mersa'l-Kebîr · Oran · Bicâye · Halkulvâdî ·
    #    Tanca · Mazagan · Safi · Azemmûr · Arzila · Agadir · Cebelitarık.
    # 🔴 MENORKA LİSTEDEYDİ, YAZILMADI: İngiltere 1708-1802'de ADANIN
    #    TAMAMINI tutuyordu, yani hinterlandı VARDI (kendi adası). Ölçüt
    #    "yabancı hâkimiyet" değil "hinterlandı yok" — ikisi karıştırılırsa
    #    alan bütün sömürgelere yayılır ve anlamını yitirir. Aynı sebeple
    #    Oran'ın ve Mersa'l-Kebîr'in `fransa 1831-1923` dönemleri de HARİÇ.
    # 📌 Otomatik tarama DENENDİ ve ÇÜRÜDÜ (iki ölçüt, PETEK/NOKTA parti 14):
    #    enklavı görünmez yapan seyreklik, testi de kör ediyor. Liste ELLE
    #    kurulur.
    "enklav": "True ise yerleşimin BU DÖNEMDE hinterlandı yoktur (presidio, "
              "karşı-kıyı karakolu) — yetim petek payı ona DEVREDİLMEZ ve "
              "yedinci denetimin %10 bayrağından MUAFTIR. s: içinde. "
              "Okuyan: uret_petek.py. Yalnız kaynaklı hükümle yazılır.",
    # ⚠️ `y:` İKİ ANLAMDA KULLANILMIŞTI — Oturum 2'nin bulgusu, kütüğün ilk
    # gerçek müşterisi. d:/s: içinde KAZANIM BİÇİMİ enum'u (kusatma 85, savas
    # 77, antlasma 67 kayıt), isg: içinde ise KAYNAK SLUG'ı. Aynı ada iki
    # anlam: `y:` üzerinden istatistik alan bir araç işgal kayıtlarını enum
    # sanıp sayardı. Ayrıldı — isg: tarafı `kaynak:` oldu (olaylar.js'in zaten
    # kullandığı sözleşme; yeni ad uydurulmadı).
    "y": "kazanım biçimi enum'u (kusatma/savas/antlasma…) — d: ve s: içinde",
    "kaynak": "kaynak slug'ı — isg: içinde; motor OKUMAZ, "
              "üretici arac/uret_devirler.py",
    # 🆕 `kesinlik` (UYGULA, 16 Eylül 2026) — şema 2 Eylül'de karara
    # bağlanmıştı (VERI-YAPISI.md "kesinlik: İKİ BİÇİM ALIR", 1.MURAT) ama
    # bu sözlükte YOKTU: `s.kesinlik` 4 kayıtta (Vidin · Musul · Kerkük …)
    # "BILINEN_ALANLAR'da yok" uyarısı basıyordu, ve YAMA-KARADENIZ-0914
    # `isg.kesinlik` getiriyor. ⚠️ TANINDI ≠ OKUNUYOR: motor bu alanı
    # okumaz; alan yalnız beyandır (`D067`: beyan araçta yoksa sessizce düşer).
    "kesinlik": "tarih hassasiyeti — s:/d:/v:/isg: içinde. SKALER "
                "(\"ay\") ya da uçları ayrı NESNE ({f:\"gun\",t:\"ay\"}); "
                "değerler gun·ay·yil·onyil·yuzyil·belirsiz. Motor OKUMAZ.",
}


def _cevir(js, degisken):
    """`window.<degisken> = [ ... ];` gövdesini JSON'a çevirir."""
    js = "\n".join(l for l in js.split("\n") if not l.strip().startswith("//"))
    anahtar = f"window.{degisken} = "
    govde = js[js.index(anahtar) + len(anahtar):]
    govde = govde[:govde.rindex("]") + 1]
    # 🔴 ANAHTAR TIRNAKLAMA DİZELERİN DIŞINDA YAPILIR — 28 Ağustos 2026.
    #   Eski hâli gövdenin TAMAMINA `re.sub` uyguluyordu ve `neden:`/`kaynak:`
    #   gibi PROZA alanlarının İÇİNDE de eşleşiyordu. Gerçekleşen vaka
    #   (`yerlesimler_ek_korfez.js`): metinde "…Doha kaydı, v: 1871'den
    #   başlıyor…" geçiyor; `, v:` bir ALAN sanılıp `, "v":` yapıldı ve JSON
    #   çöktü — dosya bağlandığı an bütün üretim durdu.
    #   ⚠️ Ve kusur veride DEĞİLDİ: kayıt geçerli JS'ti, hiçbir kuralı
    #   çiğnemiyordu. Bir açıklama metninde `, d:` `, s:` `, v:` yazmak
    #   yasak olamaz — o yüzden çare veriyi değil ARACI düzeltmekti.
    #   📌 `CLAUDE.md`nin "iki araç aynı veriyi farklı katılıkta okuyor"
    #   ailesinin üçüncü vakası (sondaki virgül · bölünmüş dize · bu).
    _dize = re.compile(r'"(?:[^"\\]|\\.)*"')
    _anahtar = re.compile(r'([{,]\s*)([A-Za-zçğıöşüÇĞİÖŞÜ_]\w*)\s*:')
    _parca, _son = [], 0
    for _m in _dize.finditer(govde):
        _parca.append(_anahtar.sub(r'\1"\2":', govde[_son:_m.start()]))
        _parca.append(_m.group(0))        # dizenin İÇİNE DOKUNULMAZ
        _son = _m.end()
    _parca.append(_anahtar.sub(r'\1"\2":', govde[_son:]))
    j = "".join(_parca)
    # JS'te dizi/nesne sonundaki fazladan virgül geçerli, JSON'da değil.
    j = re.sub(r',(\s*[\]}])', r'\1', j)
    # JS'te uzun metin "a" + "b" diye bölünebilir, JSON'da bölünemez. goller.js'in
    # `kaynak:` alanı böyle yazılmış ve okuyucu burada patlamıştı. Birleştirme
    # güvenli: JSON dizesi kaçışsız `"` içeremez, dolayısıyla desen dizenin
    # İÇİNDEKİ bir artıyla eşleşemez.
    _bir = r'"((?:[^"\\]|\\.)*)"\s*\+\s*"((?:[^"\\]|\\.)*)"'
    while re.search(_bir, j):
        j = re.sub(_bir, lambda m: '"' + m.group(1) + m.group(2) + '"', j)
    return json.loads(j)


# ⚠️ DEVLETLER.JS'İN TEK OKUYUCUSU — "herkes kendi ayrıştırıcısını yazıyor"
# sınıfının kapağı (2 Ağustos 2026). O gün AYNI dosya için ÜÇ geçici çözüm
# yazıldı ve yarısı YANLIŞ cevap verdi: düz regex 0 kayıt döndürdü (sessiz
# sıfır "veri yok" diye okundu), parantez sayan "zend KAYIT YOK" dedi (kayıt
# vardı), hedefli dört-alan çalıştı ama işine özeldi. Sebep: `_cevir`
# devletler.js'i ÇEVİREMİYOR — anahtar-tırnaklama regex'i dizelerin İÇİNE
# işliyor ve özet düzyazısındaki "(kaynak: TDV, madde: sirbistan)" gibi
# `, kelime:` desenlerini anahtar sanıp JSON'u kırıyor. yerlesimler
# dosyalarının düzyazısında bu desen yok, devletler.js'inkinde var.
# Bu okuyucu bu yüzden DİZE-FARKINDA tek geçiş yapar: dizelerin içi hiç
# değiştirilmez, yorumlar yalnız dize DIŞINDA atılır (1724. satırdaki yorum
# içi `harita:"bosna"` kayda sızmaz), sondaki virgül dize dışında ayıklanır.
# 🔴 SESSİZ SIFIR YASAK: ayrıştırma tutmazsa boş liste değil SystemExit —
# "bulamadım" ile "yok" ekranda aynı görünür, araç farkı SÖYLEMEK zorunda.
DEVLET_DOSYASI = "devletler.js"


def oku_devletler():
    """data/devletler.js → kayıt listesi (bütün alanlar, kronoloji dahil).
    Kullanıcıları: renk_olc.py, denetle*.py ve yarın yazılacaklar."""
    yol = os.path.join(DATA, DEVLET_DOSYASI)
    if not os.path.exists(yol):
        raise SystemExit(f"!! {DEVLET_DOSYASI} bulunamadı: {yol}")
    js = io.open(yol, encoding="utf-8").read()
    m = re.search(r"window\.DEVLETLER\s*=", js)
    if not m:
        raise SystemExit(f"!! {DEVLET_DOSYASI}: window.DEVLETLER bulunamadı")
    govde = js[m.end():]
    son = govde.rfind("]")
    if son < 0:
        raise SystemExit(f"!! {DEVLET_DOSYASI}: kapanış ']' bulunamadı")
    govde = govde[:son + 1]
    out, i, n = [], 0, len(govde)
    dize = False
    son_anlam = ""                      # son anlamlı karakter (dize dışı)
    while i < n:
        c = govde[i]
        if dize:                        # dizenin İÇİ: olduğu gibi geçir
            out.append(c)
            if c == "\\" and i + 1 < n:
                out.append(govde[i + 1])
                i += 2
                continue
            if c == '"':
                dize = False
            i += 1
            continue
        if c == '"':
            dize = True
            out.append(c)
            son_anlam = c
            i += 1
            continue
        if c == "'":                    # 🔴 TEK TIRNAKLI DİZE — JS'te geçerli, JSON'da değil
            # 8 Ağustos 2026: `kaynak:'bulunamadı — TDV\'de müstakil maddesi
            # yok…'` biçiminde 112 değer yazıldı. Yazan haklıydı: değer
            # kesme işareti taşıyor ve JS'te tek tırnak en kolay yol. Ama bu
            # okuyucu JSON'a çeviriyordu ve JSON tek tırnak KABUL ETMEZ ⇒
            # `renk_olc` bütün künye denetimini kaybetti.
            # ⚠️ Alet SESSİZCE SIFIR DÖNDÜRMEDİ, "okuyucu düzeltilmeden sonuç
            # kullanılamaz" deyip DURDU — doğru davranış, ve kusuru bu yüzden
            # aynı gün bulduk. `node` dosyayı 381 kayıt diye ayrıştırıyordu:
            # dosya geçerliydi, OKUYUCU dardı.
            out.append('"')
            i += 1
            while i < n:
                ch = govde[i]
                if ch == "\\" and i + 1 < n:
                    nx = govde[i + 1]
                    if nx == "'":       # \' JSON'da geçersiz kaçış → çıplak '
                        out.append("'")
                    else:
                        out.append(ch); out.append(nx)
                    i += 2
                    continue
                if ch == "'":
                    out.append('"')
                    i += 1
                    break
                if ch == '"':           # tek tırnaklı dizenin İÇİNDEKİ " → kaçışla
                    out.append('\\"')
                    i += 1
                    continue
                if ch == "\n":          # JSON dizesinde çıplak satır sonu yasak
                    out.append("\\n")
                    i += 1
                    continue
                out.append(ch)
                i += 1
            son_anlam = '"'
            continue
        if govde[i:i + 2] == "//":      # yorum: satır sonuna dek at
            while i < n and govde[i] != "\n":
                i += 1
            continue
        if c == ",":                    # sondaki virgül: JSON'da geçersiz
            j = i + 1
            while j < n:
                if govde[j] in " \t\r\n":
                    j += 1
                elif govde[j:j + 2] == "//":
                    while j < n and govde[j] != "\n":
                        j += 1
                else:
                    break
            if j < n and govde[j] in "]}":
                i += 1
                continue
            out.append(c)
            son_anlam = c
            i += 1
            continue
        if c.isalpha() or c == "_":     # çıplak anahtar → tırnakla
            j = i
            while j < n and (govde[j].isalnum() or govde[j] == "_"):
                j += 1
            kelime = govde[i:j]
            k = j
            while k < n and govde[k] in " \t\r\n":
                k += 1
            if k < n and govde[k] == ":" and son_anlam in "{,":
                out.append('"' + kelime + '"')
            else:
                out.append(kelime)      # true/false/null gibi değerler
            son_anlam = kelime[-1]
            i = j
            continue
        out.append(c)
        if not c.isspace():
            son_anlam = c
        i += 1
    try:
        kayitlar = json.loads("".join(out))
    except ValueError as e:
        raise SystemExit(f"!! {DEVLET_DOSYASI} ayrıştırılamadı ({e}) — "
                         f"bu 'veri yok' DEĞİLDİR, okuyucu düzeltilmeden "
                         f"sonuç kullanılamaz")
    if not isinstance(kayitlar, list) or not kayitlar:
        raise SystemExit(f"!! {DEVLET_DOSYASI}: 0 kayıt döndü — dosya boş "
                         f"olamaz, ayrıştırma çürümüş demektir (sessiz sıfır "
                         f"yasak)")
    return kayitlar


def oku_dosya(ad):
    """Tek dosyayı okur; `window.YERLESIMLER*` değişkenini kendisi bulur."""
    yol = os.path.join(DATA, ad)
    js = io.open(yol, encoding="utf-8").read()
    m = re.search(r"window\.(YERLESIMLER\w*)\s*=", js)
    if not m:
        raise ValueError(f"{ad}: window.YERLESIMLER* bulunamadı")
    return _cevir(js, m.group(1))


def km(a_lat, a_lon, b_lat, b_lon):
    orta = math.radians((a_lat + b_lat) / 2)
    return 111.32 * math.hypot(a_lat - b_lat, (a_lon - b_lon) * math.cos(orta))


def yukle(sessiz=False):
    """Bütün girdi dosyalarını birleştirip döker. Ad çakışmasında ValueError."""
    hepsi, nereden, bilinmeyen = [], {}, {}
    for ad in GIRDI_DOSYALARI:
        kayitlar = oku_dosya(ad)
        for y in kayitlar:
            if y["ad"] in nereden:
                raise ValueError(
                    f"AD ÇAKIŞMASI: '{y['ad']}' hem {nereden[y['ad']]} hem {ad} "
                    f"içinde. Yerleşim adı benzersiz olmalı (VERI-YAPISI.md)."
                )
            nereden[y["ad"]] = ad
            for alan in y:
                if alan not in BILINEN_ALANLAR:
                    bilinmeyen.setdefault(alan, []).append(f"{ad}:{y['ad']}")
            for kat in ("s", "d", "v", "isg"):
                for p in y.get(kat) or []:
                    for alan in p:
                        if alan not in BILINEN_DONEM_ALANLARI:
                            bilinmeyen.setdefault(f"{kat}.{alan}", []).append(
                                f"{ad}:{y['ad']}")
            for alan, deger in VARSAYILAN.items():
                y.setdefault(alan, [] if deger == [] else deger)
            # Kaynak damgası — dosyadan OKUNMAZ, yükleyici basar (bu yüzden
            # BILINEN_ALANLAR kontrolüne girmez; kontrol yukarıda, damga
            # burada). Tüketicisi denetle.py'nin İŞ KUYRUĞU ayrımı (İş O):
            # yeni partinin kırılmaları çekirdek tavanına KATILMAZ, kaynağa
            # göre ayrı sayaçta raporlanır.
            y["_kaynak"] = ad
        hepsi.extend(kayitlar)
        if not sessiz:
            print(f"  {ad}: {len(kayitlar)} nokta")
    # ⚠️ Bilinmeyen alan HATA DEĞİL, UYARIDIR — bir alanı şemaya eklemek ile
    # motoru ona göre değiştirmek ayrı işlerdir ve ayrı oturumlarda yapılır.
    # Ama SESSİZ de olamaz: yazım hatası olan alan da tam böyle görünür.
    for alan, kimde in sorted(bilinmeyen.items()):
        print(f"  UYARI alan: '{alan}' BILINEN_ALANLAR'da yok — {len(kimde)} "
              f"kayıtta ({', '.join(kimde[:3])}{'…' if len(kimde) > 3 else ''}). "
              f"Yazım hatası mı, yeni şema alanı mı? girdi.py'ye kaydet.")
    if not sessiz and len(GIRDI_DOSYALARI) > 1:
        print(f"  toplam: {len(hepsi)} nokta")
    return hepsi


def kd_oku(y):
    """`kd:` dönemleri — YOKSA `k:`/`m:`den TÜRETİLİR. (`ALTYAPI ④`)

    🟢 Bu fonksiyon sayesinde `kd:` alanı BUGÜN CANLIDIR ve **tek bir veri
    satırı değişmedi.** Motorlar ve denetimler artık `y["k"]`/`y["m"]`
    yerine `kd_oku(y)` çağırabilir; bir kayda gerçek zaman derinliği
    yazıldığı gün, çağıran taraf hiç değişmeden onu görür.

    📌 Niçin göç yerine okuyucu: 2503 kaydı tek gecede `kd:`ye çevirmek
    dev bir diff üretir ve **hiçbir yeni bilgi taşımaz** — her kayıt tek
    dönemlik olurdu. Bilgi getirmeyen bir değişiklik, getirdiği çakışma
    riskini hak etmez.

    ⚠️ TÜRETİLEN DÖNEM `turetildi: True` TAŞIR. *"Bütün tarih boyunca aynı
    kademedeydi"* bir ölçüm değil, **bilgi yokluğudur.** Bunu ölçüm gibi
    kaydetmek, bilmediğini bilgi diye yazmaktır (`B10`).
    """
    kd = y.get("kd")
    if kd:
        return [dict(p) for p in kd]
    return [{"f": UFUK[0], "t": UFUK[1],
             "k": y.get("k") or 0, "m": y.get("m"),
             "turetildi": True}]


def kd_gun(y, gun):
    """O GÜN geçerli (k, m) — yoksa (0, None). Zaman boyutunun tek kapısı."""
    for p in kd_oku(y):
        if p.get("f", "") <= gun < p.get("t", "9999"):
            return p.get("k") or 0, p.get("m")
    return 0, None


# ⚠️ EK GÖLLER — Natural Earth'ün MODERN göl katmanının tarihî düzeltmesi
# Baraj gölü kuralı (uret_petek.py:73-88) maskeye FAZLA su giren hâli düzeltir:
# 1960 sonrası yapılmış bir baraj 1500 haritasında delik açmasın diye maskeden
# çıkarılmaz. Bu dosya TERS yöndeki hatayı düzeltir: tarihte VAR OLAN ama
# modern katmanda kurumuş/küçülmüş göller. Bugün tek kayıt var — Aral.
# Natural Earth Aral'ı kuruma SONRASI iki artık parça olarak taşıyor; oysa
# 1281-1923 boyunca ~68.000 km²'lik tek göldü. Motor farkı bilmediği için
# gölün yerini KARA sayıyor ve en yakın petek oraya emiliyor (MIMARI.md §2).
# ⚠️ ZAMAN BOYUTU YOK: motorun GOLLER birleşimi statiktir. Bu yüzden
# `gecerli` penceresi atlasın ufkunu KAPSAMIYORSA kayıt ALINMAZ — dar
# pencereli bir gölü statik uygulamak, düzeltmeye çalıştığı anakronizmin
# aynısını üretir. Zamana bağlı göl gerekirse önce motorda epok desteği
# (petek_epok deseni) kurulmalı.
GOL_DOSYASI = "goller.js"
# 🆕 GEÇİTLER (UYGULA, 16 Eylül 2026 · MOTOR'un M-3994 notu üzerine) —
# uret_petek.py (3581661) koşu başında `data/gecitler.js`i okuyor, ama bu
# dosya anlık görüntüye ve parmak izine GİRMİYORDU: koşu sırasında bir
# düzenleme çıktıya girer ya da girmez, iz ikisini AYIRT EDEMEZDİ.
# ⚠️ `yukle()` bu dosyaya DOKUNMAZ (YERLESIMLER değişkeni yok) — yalnız
#    anlık görüntü ve parmak izi kapsar.
# ⚠️ Kopyanın İŞE YARAMASI için motorun dosyayı `girdi.DATA`dan okuması
#    gerekir; bugün `KOK/data`dan okuyor (MOTOR'a bildirildi).
# ⚠️ İz KÜMESİ değişti: bu satırdan önce alınmış bir koşu izi, yayın
#    kapısında "girdi DOSYA KÜMESİ değişmiş: gecitler.js" der (denetle_yayin).
GECIT_DOSYASI = "gecitler.js"
UFUK = ("1281-01-01", "1923-10-29")


def oku_goller(sessiz=False):
    """Ek göl poligonları — GeoJSON `geometry` sözlüklerinin listesi.
    Dosya yoksa boş liste döner (motor onsuz da çalışır)."""
    yol = os.path.join(DATA, GOL_DOSYASI)
    if not os.path.exists(yol):
        return []
    js = io.open(yol, encoding="utf-8").read()
    m = re.search(r"window\.(GOLLER\w*)\s*=", js)
    if not m:
        raise ValueError(f"{GOL_DOSYASI}: window.GOLLER bulunamadı")
    alinan = []
    for g in _cevir(js, m.group(1)):
        gec = g.get("gecerli") or {}
        if gec.get("f", UFUK[0]) > UFUK[0] or gec.get("t", UFUK[1]) < UFUK[1]:
            print(f"  UYARI göl: '{g.get('ad')}' yalnız {gec.get('f')}→"
                  f"{gec.get('t')} arası geçerli, motor statik göl kullanıyor "
                  f"— ATLANDI (zamana bağlı göl için epok desteği gerekir)")
            continue
        alinan.append(g)
    if not sessiz and alinan:
        print(f"  {GOL_DOSYASI}: {len(alinan)} tarihî göl düzeltmesi "
              f"({', '.join(g['ad'].split('(')[0].strip() for g in alinan)})")
    return alinan


# ⚠️ KOŞU BEKÇİSİ — yedi üretimi yakan hata sınıfının TEKNİK kapağı
# Motor girdiyi koşunun BAŞINDA bir kez okur. Koşunun 13. dakikasında yapılan
# bir düzenleme çıktıya HİÇ girmez ama koşu temiz biter, denetim temiz çıkar
# ve harita sessizce veriden geri kalır. Bugün canlı örneği yaşandı:
#   21:53:33 üretim başladı
#   22:06:07 yerlesimler_afrika.js'e 108 satır eklendi (Mısır batı çölü vahaları)
#   → o koşunun çıktısında vahalar YOK, ama hiçbir denetim bunu göremez.
# Protokol "her oturum 'girdi sabit' desin" diyordu; yetmedi, çünkü duyuru
# mesaj katmanında ve mesaj kuyrukta bekleyebiliyor (bugün öyle oldu).
# Bekçi duyuruya değil ÖLÇÜME bağlar: parmak izi başta alınır, her yazımdan
# önce doğrulanır, tutmazsa çıktı YAZILMAZ.
# Kapsam: yalnız data/ girdileri. veri-kaynak/*.geojson (27 MB) kapsam dışı —
# depo verisi, oturumlar arasında değişmiyor ve her yazımda hashlemek pahalı.
def parmak_izi():
    """Okunan data/ girdilerinin sha256'ları — {dosya: özet}."""
    import hashlib
    iz = {}
    for ad in list(GIRDI_DOSYALARI) + [GOL_DOSYASI, GECIT_DOSYASI]:
        yol = os.path.join(DATA, ad)
        if os.path.exists(yol):
            iz[ad] = hashlib.sha256(io.open(yol, "rb").read()).hexdigest()
    return iz


def motor_izi():
    """Üretimi yapan KODUN sha256'ları — {dosya: özet}.

    `parmak_izi()` "çıktı hangi VERİDEN üretildi" sorusunu cevaplar; bu ise
    "hangi KODDAN üretildi" sorusunu. İkisi çıktıya birlikte yazılır.

    ⚠️ Neden gerekli — 31 Temmuz'da yaşandı. Koordinatör elindeki
    `donemler.js`in düzeltilmiş motordan mı çıktığını soramadı: dosya damgası
    koşuyu değil son dokunuşu gösteriyor, boyut kaba bir ipucu, ve sekiz
    denetimin "temiz" demesi kanıt değil — hiçbiri o soruyu sormuyor. Cevap
    ancak log arkeolojisiyle verilebildi. Damga çıktının İÇİNDE olursa soru
    dosyanın kendisinden cevaplanır.
    """
    import hashlib
    iz = {}
    for ad in ("uret_petek.py", "renkler.py", "girdi.py"):
        yol = os.path.join(os.path.dirname(os.path.abspath(__file__)), ad)
        if os.path.exists(yol):
            iz[ad] = hashlib.sha256(io.open(yol, "rb").read()).hexdigest()
    return iz


# ⚠️ ÜRETİM İZİ YARDIMCISI — "7 üretilen çıktının 6'sında iz yok" ölçümünün
# (2 Ağustos, İş G) kapağı. denetle_yayin.py yayın tazeliğini URETIM_IZI'yle
# ölçüyor ve hükmü YALNIZ izi taşıyan dosya için geçerli — izi olmayan çıktı
# hakkında hiçbir şey bilinmiyor ama ekran "✓ tazelik" diyordu. Her üretici
# kendi çıktısına bu satırı yazar; denetim her izi kendi girdileriyle
# karşılaştırır. uret_petek.py BUNU KULLANMAZ: onun izi koşu BAŞINDA alınan
# _GIRDI_IZI'dir (motorun okuduğu hâl) — burada yeniden hashlemek koşu
# ortasında değişen girdiye taze damgası basardı.
def uretim_izi_js(girdiler, betikler):
    """`window.URETIM_IZI = …;` satırı — üretilen çıktının künyesi.

    girdiler: KÖK'e göre yollar ("data/donemler.js", "BEKLEYENLER.md",
    "veri-kaynak/ne_10m_land.geojson"…). betikler: arac/ içindeki üretici
    dosya adları. 🔴 Eksik dosya SystemExit — listeden sessizce düşen girdi,
    izi küçültür ve küçük iz 'taze' okunur.
    """
    import hashlib

    def _oz(yol):
        return hashlib.sha256(io.open(yol, "rb").read()).hexdigest()

    iz_g = {}
    for ad in girdiler:
        yol = os.path.join(KOK, ad)
        if not os.path.exists(yol):
            raise SystemExit("URETIM_IZI: girdi dosyası yok: %s — iz eksik "
                             "yazılamaz, eksik iz taze okunur" % ad)
        iz_g[ad] = _oz(yol)
    iz_m = {}
    for ad in betikler:
        yol = os.path.join(os.path.dirname(os.path.abspath(__file__)), ad)
        if not os.path.exists(yol):
            raise SystemExit("URETIM_IZI: betik yok: %s" % ad)
        iz_m[ad] = _oz(yol)
    return ("window.URETIM_IZI = "
            + json.dumps({"girdi": iz_g, "motor": iz_m},
                         separators=(",", ":"), sort_keys=True) + ";\n")


def motor_izi_dogrula(baslangic, nerede):
    """Motor KODU koşu sırasında değiştiyse ÖLDÜRÜR.

    `izi_dogrula`nın kod eksenindeki eşi. 1 Ağustos 2026'da ölçüldü: girdi
    koşunun BAŞINDA damgalanıp üç yerde doğrulanıyordu, kod ise SONUNDA
    diskten okunuyordu ve hiç doğrulanmıyordu. Koşu sırasında `renkler.py`
    düzenlense süreç etkilenmez (Python dosyayı başta belleğe alır) ama
    damga, koşunun ÇALIŞTIRMADIĞI kodun özetini yazardı — "çıktı hangi
    koddan üretildi" sorusuna sessizce yanlış cevap.

    📌 Sebep bilgi eksikliği değildi: `uret_petek.py`nin çıktı bölümünde
    aynı gerekçe GİRDİ için yazılıydı. Gerekçe yazılmış, bir argüman
    ötesine uygulanmamıştı.
    ⇒ Bir yöntemin bağışık olduğunu varsaydığın eksen, taramayı en çok
      atlayacağın eksendir.
    """
    simdi = motor_izi()
    degisen = [a for a in set(baslangic) | set(simdi)
               if baslangic.get(a) != simdi.get(a)]
    if degisen:
        raise SystemExit(
            "MOTOR KODU KOSU SIRASINDA DEGISTI: " + ", ".join(sorted(degisen))
            + " (" + nerede + " yazilmadan once olculdu). Cikti karisik"
            " koddan uretilmis olabilir ve damga da yalan soylerdi."
            " Kosu OLDURULDU -- bastan baslat.")


def izi_dogrula(baslangic, nerede):
    """Girdi koşu sırasında değiştiyse ÖLDÜRÜR. Sessiz geçiş yok."""
    simdi = parmak_izi()
    degisen = [a for a in set(baslangic) | set(simdi)
               if baslangic.get(a) != simdi.get(a)]
    if degisen:
        print("")
        print("  " + "=" * 66)
        print(f"  ✗ GİRDİ KOŞU SIRASINDA DEĞİŞTİ — '{nerede}' YAZILMADI")
        for a in sorted(degisen):
            print(f"      {a}")
        print("  Bu çıktı bayat olurdu: motor girdiyi koşunun başında bir kez")
        print("  okur, sonraki düzenlemeler çıktıya girmez ve hiçbir denetim")
        print("  bunu göremez. Girdiyi sabitleyip üretimi BAŞTAN koşturun.")
        print("  " + "=" * 66)
        raise SystemExit(1)


def yakin_ciftler(Y, esik=YAKINLIK_ESIK_KM):
    """Eşikten yakın nokta çiftleri — mükerrer/çelişen kayıt avı."""
    ciftler = []
    for i in range(len(Y)):
        for j in range(i + 1, len(Y)):
            d = km(Y[i]["lat"], Y[i]["lon"], Y[j]["lat"], Y[j]["lon"])
            if d < esik:
                ciftler.append((d, Y[i]["ad"], Y[j]["ad"]))
    ciftler.sort()
    return ciftler
