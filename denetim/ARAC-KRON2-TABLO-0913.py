# -*- coding: utf-8 -*-
"""PAKET-KRON2 — düzenleme tablosu üreticisi → denetim/KRON2-DUZENLE-0913.json
py denetim/ARAC-KRON2-TABLO-0913.py

KURALLAR (her kayıt birini taşır):
  K1  TARİH KODLAMA NOTU → ic_not: "TDV/kaynak yıl/ay verir, gün vermez", "ay/gün kaynaklarda
      geçmiyor", "YYYY-01-01", "§4 gereği", "madde X tarihine bağlandı/konuldu/yerleştirildi,
      bir tercihtir", "veride … kullanılıyor", "atlas penceresi/ufku yüzünden bu güne kondu".
      Tarih yer tutucu ise (yıl/gün kaynaksız) okur için `gun` alanına DÖNEM adı yazılır;
      kaynakta yıl VARSA (YYYY-01-01 zaten yalnız yıl gösterir) gun eklenmez.
  K2  VERİ / HARİTA ÜRETİM NOTU → ic_not: yer_id · uçuş hedefi · "atlasta yerleşim olarak kayıtlı
      değil" · petek · "veriye işlenmedi" · "gösterilmelidir / bağlanmalıdır / bitmesi gerekir /
      esas alması önerilen" · "atlas bu kaydı önce … taşıyordu" · Oturum/Denetim/künye/devletler.js
      atfı · "Ölçmedim … bu oturumda" · "X esas alındı / TDV bu coğrafyayı kapsamamaktadır".
  K2b Konum açıklaması okur için değerliyse yalnız "yer_id:" öneki düşer, cümle kalır.
  K3  KALIR: okura haritada NE GÖRDÜĞÜNÜ anlatan cümle ("haritada Mısır tâbi tona geçer"),
      "atlasın açılışında/kapanışında" çerçevesi, tarihyazımı belirsizliği ("kaynaklar 1488 ile
      1508 arasında değişir", "rivayet doğrulanamadı").
  K4  KALIR (kapsam dışı, sayıldı): başlık/metindeki 🔴⚠️📌 süs işaretleri, meta not taşımıyorsa.
  K5  YANLIŞ POZİTİF: denetlemek · koşul · kırılma · Atlas Okyanusu/Dağları · anatomi atlası ·
      meclis oturumu.
  A2  PAKET-A2 §4b kaynak çelişkisi düzeltmesi (metin/gün/yer/kaynak; t DEĞİŞMEZ — öneri YAMA-KRON2).
"""
import io, json, os, re

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
K = []


def temiz(s):
    s = s.strip()
    s = re.sub(r"^[;,.—\s]+", "", s)
    s = s.replace("⚠️", "").strip()
    if s.startswith("(") and s.endswith(")"):
        s = s[1:-1]
    return s.strip(" ;—")


def tasi(dosya, b, eski, yeni="", alan="d", kural="K2", not_=None, t=None):
    r = {"dosya": dosya, "b": b, "islem": "degistir", "alan": alan, "eski": eski, "yeni": yeni,
         "not": not_ if not_ is not None else temiz(eski), "kural": kural}
    if t:
        r["t"] = t
    K.append(r)


def duz(dosya, b, eski, yeni, alan="d", kural="A2", t=None):  # iç notsuz metin düzeltmesi
    r = {"dosya": dosya, "b": b, "islem": "degistir", "alan": alan, "eski": eski, "yeni": yeni, "kural": kural}
    if t:
        r["t"] = t
    K.append(r)


def gun(dosya, b, deger, kural="K1"):
    K.append({"dosya": dosya, "b": b, "islem": "gun_ekle", "deger": deger, "kural": kural})


def ata(dosya, b, alan, deger, kural="A2", not_=None, not_alan=None, not_eski=False, yoksa_ekle=False):
    r = {"dosya": dosya, "b": b, "islem": "ata", "alan": alan, "deger": deger, "kural": kural,
         "not_eski": not_eski, "yoksa_ekle": yoksa_ekle}
    if not_:
        r["not"] = not_
    if not_alan:
        r["not_alan"] = not_alan
    K.append(r)


def notek(dosya, b, alan, not_, kural="A2"):
    K.append({"dosya": dosya, "b": b, "islem": "not_ekle", "alan": alan, "not": not_, "kural": kural})


# ═════════════════════ KALEM 1 · KUYRUK (kronoloji_*.js) ═════════════════════
F = "kronoloji_akkoyunlu.js"
for b, eski, donem in [
    ("HASAN PADİŞAH KANUNLARI", " ⚠️ TARİH HAKKINDA: kaynak kanunnâmenin çıkarılış yılını vermiyor; madde Uzun Hasan'ın iktidara geldiği tarihe bağlandı. Bu bir TERCİHTİR, ölçüm değildir.", "Uzun Hasan devri"),
    ("'Hasanbegî' sikkesi bastırıldı", " ⚠️ TARİH HAKKINDA: kaynak basım yılını vermiyor; madde iktidara geliş tarihine bağlandı, bir tercihtir.", "Uzun Hasan devri"),
    ("Bayındır damgası devlet arması yapıldı", " ⚠️ TARİH HAKKINDA: kaynak yıl vermiyor; iktidara geliş tarihine bağlandı, bir tercihtir.", "Uzun Hasan devri"),
    ("Uzun Hasan'ın haftalık ilim meclisleri", " ⚠️ TARİH HAKKINDA: himayenin yılı kaynakta verilmiyor; madde Uzun Hasan'ın iktidara geldiği tarihe bağlandı, bir tercihtir.", "Uzun Hasan devri"),
    ("Cami, medrese, zâviye ve kervansaray imar programı", " ⚠️ TARİH HAKKINDA: kaynak tek tek yapıların tarihini vermiyor; imar programı iktidara geliş tarihine bağlandı, bir tercihtir.", "Uzun Hasan devri"),
    ("TÜRKMEN MİNYATÜR MEKTEBİ", " ⚠️ TARİH HAKKINDA: kaynak tek bir yıl vermiyor; madde Yâkub Bey'in cülûsuna bağlandı, bir tercihtir.", "Yâkub Bey devri"),
    ("Yâkub Bey'in Türkçe ve Farsça şiirleri", " ⚠️ TARİH HAKKINDA: kaynak yıl vermiyor; cülûs tarihine bağlandı, bir tercihtir.", "Yâkub Bey devri"),
    ("Gökmescid'in tamamlanması", " ⚠️ TARİH HAKKINDA: tamamlanma yılı kaynakta verilmiyor, yalnız 'Yâkub Bey devrinde' deniyor; madde cülûs tarihine bağlandı, bir tercihtir.", "Yâkub Bey devri"),
]:
    tasi(F, b, eski, kural="K1")
    gun(F, b, donem)
tasi(F, "Nasriyye bahçesi", " ⚠️ Nasriyye bahçesinin atlas verisinde ayrı bir kaydı yoktur; `yer_id` şehre verildi.")
tasi(F, "Çekim, Âmid önünde mağlûp edildi", "; künye de başkenti 'Diyarbekir → Tebriz' diye kaydeder.", ".")

F = "kronoloji_altinorda.js"
tasi(F, "İlk fetret devri sürüyor", " Atlasın zaman çizgisi bu dosyada 1281'de başladığı için devlet sahneye tam bu buhranın içinde girer.")
tasi(F, "Özbek Han İlhanlı hükümdarı Olcaytu'ya elçi gönderdi", " yer_id boş: elçiliğin ulaştığı İlhanlı ordugâhı kayıtlarda tek bir yerleşime bağlanmıyor.")
tasi(F, "Altın Orda kuvvetleri Trakya'yı yağmaladı", " yer_id boş: kaynak tek bir şehir adı vermiyor, bölge adı veriyor.")

F = "kronoloji_balkan.js"
tasi(F, "Nikšić, Podgorica ve Bar alındı", " Yerel atlas kaydı Podgorica'yı 'karadag'a diplomatik tanıma tarihiyle (1878-07-13) bağlıyor; fiilî fetih on ay önce, burada.")
tasi(F, "Bulgar (Tırnova) Patrikliği kuruldu", " Gün TDV'de ve standart akademik kaynakta verilmiyor, YYYY-01-01.", kural="K1")
tasi(F, "Evtimiy Tırnova Patrikliği'ne getirildi", " Gün akademik kaynakta net değil, YYYY-01-01.", kural="K1")
tasi(F, "Chiprovtsi (Kiprovça) İsyanı", " Gün kesin değil, ay YYYY-09-01 olarak işaretlendi.", kural="K1")
gun(F, "Chiprovtsi (Kiprovça) İsyanı", "Eylül 1688")
tasi(F, "Paisiy Hilendarski 'Slav-Bulgar Tarihi'ni yazdı", " Gün belirtilmiyor, YYYY-01-01.", kural="K1")

tasi("kronoloji_bizans.js", "Georgios Gemistos Plethon Mistra'da ders vermeye başladı", " Mistra'nın yerleşim kaydı atlasta bulunmadığı için uçuş hedefi boş bırakıldı.")

F = "kronoloji_dogu_afrika.js"
for b, eski in [
    ("Dehlek adasının Habeşistan'a bağlanması", " (Dehlek atlasta yerleşim noktası olarak KAYITLI DEĞİL — yer_id boş bırakıldı.)"),
    ("Şimbra Kure Muharebesi", " (Savaş alanı atlasta yerleşim olarak KAYITLI DEĞİL.)"),
    ("Wayna Daga Muharebesi", " (Savaş alanı atlasta yerleşim olarak KAYITLI DEĞİL.)"),
    ("Vebi nehri bozgunu", " (Savaş alanı atlasta yerleşim olarak KAYITLI DEĞİL.)"),
    ("Merkezin Aussa'ya nakli", " (Aussa atlasta yerleşim olarak KAYITLI DEĞİL.)"),
    ("Şeleneko Muharebesi", " (Şeleneko atlasta yerleşim olarak KAYITLI DEĞİL.)"),
    ("Debârvâ'nın alınması", " (Debârvâ atlasta yerleşim olarak KAYITLI DEĞİL.)"),
    ("Enderta Muharebesi", " (Enderta atlasta yerleşim olarak KAYITLI DEĞİL.)"),
    ("Addi Karro Muharebesi", " (Addi Karro atlasta yerleşim olarak KAYITLI DEĞİL.)"),
    ("Dehlek adalarının İtalya tarafından işgali", " (Dehlek atlasta yerleşim olarak KAYITLI DEĞİL.)"),
    ("Adva Muharebesi", " (Adva atlasta yerleşim olarak KAYITLI DEĞİL — en önemli yer_id eksiği.)"),
    ("Portekizlilerin Dehlek'e çıkışı", " (Dehlek atlasta yerleşim olarak KAYITLI DEĞİL.)"),
    ("Fransa'nın Ubûk'u (Obock) sömürge ilân etmesi", " (Obock atlasta yerleşim olarak KAYITLI DEĞİL; en yakın kayıtlı nokta Tacûra kullanıldı.)"),
    ("Toro Krallığı'nın Bunyoro'dan ayrılması", " (Toro atlasta yerleşim olarak KAYITLI DEĞİL.)"),
]:
    tasi(F, b, eski)

F = "kronoloji_guney_asya.js"
for b, eski in [
    ("Ekber Şah, Sind'deki Ömerkût Kalesi'nde doğdu", " (yer_id boş: Ömerkût atlasın yerleşim kayıtlarında yok.)"),
    ("Ekber Şah, merkezi Bakkar olan Yukarı Sind'i", " (yer_id: Bakkar atlasın kayıtlarında yok; en yakın kayıtlı yerleşim Şikârpûr'dur.)"),
    ("Sindî şairi Şah Abdüllatîf Bhitâî öldü", " (yer_id boş: Bhit Şah atlasın yerleşim kayıtlarında yok.)"),
    ("Sindî şairi Sachal Sarmast öldü", " (yer_id boş: Daraza atlasın yerleşim kayıtlarında yok.)"),
    ("Alâeddin Halacî Ranthambor'u aldı", " (yer_id boş: Ranthambor atlasın yerleşim kayıtlarında yok.)"),
    ("Calor'un düşmesiyle Racputana'nın batı direnişi kırıldı", " (yer_id boş: Calor atlasın kayıtlarında yok.)"),
    ("Skardu emîri Ali Mîr Şîr Han Ladakh'ı yendi", " (yer_id boş: Skardu atlasın kayıtlarında yok.)"),
    ("Ravi Varma Kulaşekhara Kançi'de imparatorluk tacını giydi", " (yer_id boş: Kançipuram atlasın yerleşim kayıtlarında yok.)"),
    ("Kolaçel Muharebesi", " (yer_id boş: Kolaçel atlasın kayıtlarında yok.)"),
    ("Manipûr ile Pong (Şan) krallığı Kyang Khampat'ı birlikte aldı", " (yer_id boş: Kyang Khampat atlasın kayıtlarında yok.)"),
    ("Kabav vadisi İngiliz hakemliğiyle Burma'ya bırakıldı", " (yer_id boş: Kabav vadisi atlasın kayıtlarında yok.)"),
    ("Rânâ Kumbha, Mâlvâ sultanını Sârangpûr'da yendi", " (yer_id: Sârangpûr kayıtlarda yok; Mâlvâ'nın merkezi Mandu alındı.)"),
]:
    tasi(F, b, eski)
tasi(F, "Hânüvâ Meydan Savaşı", " (yer_id: Hânüvâ kayıtlarda yok; savaş alanı bugünkü Bharatpûr çevresindedir.)",
     " Savaş alanı bugünkü Bharatpûr çevresindedir.", not_="yer_id: Hânüvâ kayıtlarda yok")
for b in ["Amber Racası Bhâra Mel", "Haldigâtî Muharebesi", "Çâvend'de Râgamâlâ dizisi", "Hurda Konferansı",
          "Bâbürlü yardımı Basgo kuşatmasını kaldırdı", "Tipu Sultan'ın ordusu Nedumkotta hattına saldırdı",
          "Velu Thampi Dalavâ Kundara Bildirisi", "Khongcom Muharebesi", "Kişangarh ekolünde Bani Thani",
          "Bhaktapur'da Nyatapola Tapınağı", "Padmanâbhapuram Sarayı", "Kottârakkara'da Râmanâttam",
          "Kottayam'da matbaa kuruldu"]:
    tasi(F, b, "(yer_id: ", "(", kural="K2b", not_="yer_id yakın kayıtlı yerleşime bağlandı; konum açıklaması okur metninde bırakıldı")
tasi(F, "Nepal, Alâeddin Halacî döneminde", " (TDV himayeyi Alâeddin'in saltanatına — 1296-1316 — bağlar, gün vermez; madde saltanatın ortasına yerleştirildi.)",
     " Himaye Alâeddin'in saltanatı (1296-1316) içindedir; yılı kesin değildir.", kural="K1")
gun(F, "Nepal, Alâeddin Halacî döneminde", "Alâeddin Halacî devri (1296-1316)")
tasi(F, "Nepal, III. Fîrûz Şah Tuğluk'un hâkimiyetini kabul etti", " (TDV yıl vermiyor; madde Fîrûz Şah'ın saltanatının erken yıllarına yerleştirildi.)", kural="K1")
gun(F, "Nepal, III. Fîrûz Şah Tuğluk'un hâkimiyetini kabul etti", "III. Fîrûz Şah Tuğluk devri")
tasi(F, "Müslüman tüccarlar Katmandu'ya yerleşmeye başladı", " (TDV 'XV. yüzyıl sonları' der, yıl vermez; madde yüzyıl dönümüne yerleştirildi.)", kural="K1")
gun(F, "Müslüman tüccarlar Katmandu'ya yerleşmeye başladı", "XV. yüzyıl sonları")
tasi(F, "Bâbürlü etkisi Nepal sarayının", " (TDV 'XVI. yüzyıldan itibaren' der, yıl vermez.)", kural="K1")
gun(F, "Bâbürlü etkisi Nepal sarayının", "XVI. yüzyıldan itibaren")
tasi(F, "Nepal, İngiltere ile tam bağımsızlığını tanıyan antlaşmayı", " (Atlasın ufku 29 Ekim 1923'te bittiği için madde bu güne yerleştirildi; antlaşmanın gerçek tarihi metinde açıkça yazılıdır.)", kural="K1")
gun(F, "Nepal, İngiltere ile tam bağımsızlığını tanıyan antlaşmayı", "1923")

F = "kronoloji_hindistan.js"
tasi(F, "Mümtaz Mahal doğumda öldü", " (Burhanpûr, proje yerleşim kümesinde kayıtlı değil.)")
tasi(F, "Şîr Şah Sûrî'nin türbesi Sâsârâm'da tamamlandı", " (Sâsârâm, proje yerleşim kümesinde kayıtlı değil.)")

F = "kronoloji_iran_ardillari.js"
for b, eski, donem in [
    ("Bizans ile evlilik ittifakı", " ⚠️ TARİH HAKKINDA: kaynak yıl vermiyor; madde Olcaytu'nun Bizans'a yöneldiği saltanat başına bağlandı, bir tercihtir.", "Olcaytu devri"),
    ("Ebû İshak şair ve âlimleri himaye etti", " ⚠️ TARİH HAKKINDA: kaynak yıl vermiyor; madde saltanatın son yıllarına konuldu.", "Ebû İshak devri"),
    ("Mes'ûd, Şiî şeyhi Hasan-ı Cûrî ile ittifak yaptı", " ⚠️ TARİH HAKKINDA: kaynak yıl vermiyor; madde Mes'ûd'un iktidarının ilk yılına konuldu.", "Mes'ûd devri"),
    ("Hâce Ali, Şehîd-i Evvel'i Sebzevâr'a davet etti", " ⚠️ TARİH HAKKINDA: kaynak 'saltanatının sonuna doğru' diyor, yıl vermiyor.", "Hâce Ali'nin saltanatının sonları"),
    ("Serbedârî bayındırlık işleri", " ⚠️ TARİH HAKKINDA: kaynak bu işlerin yıllarını vermiyor; madde iki emîrin dönemlerinin ortasına konuldu, bir tercihtir.", "Yahyâ Kerrâbî ve Hâce Ali devirleri"),
    ("Kal'a-i İhtiyârüddin ve Herat'ın Kert dönemi mimarisi", " ⚠️ TARİH HAKKINDA: kaynak kalenin yapım yılını vermiyor; madde hânedanın en müreffeh dönemine konuldu ve bu bir tercihtir.", "Kertler devri"),
    ("Lur atabeglikleri zaman zaman İlhanlı vilâyeti statüsüne girdi", " ⚠️ TARİH HAKKINDA: kaynak bu statü değişimlerine yıl vermiyor; madde İlhanlı'nın en güçlü olduğu döneme konuldu ve bu bir tercihtir.", "İlhanlı devri"),
]:
    tasi(F, b, eski, kural="K1")
    gun(F, b, donem)
tasi(F, "Lur-ı Büzürg Atabegliği sona erdi", "; `devletler.js` künyesinin `t:1424-01-01` tarihi buna dayanır.", ".")
duz(F, "Lur-ı Büzürg Atabegliği sona erdi", "TDV `luristan` maddesinin", "TDV'nin Luristan maddesinin", kural="K2")

F = "kronoloji_ispanya.js"
tasi(F, "Fernando de Rojas'ın La Celestina'sının yayımlanması", " Yayım yılı kesin biliniyor, ay/gün kaynaklarda geçmiyor.", kural="K1")
tasi(F, "El Greco Toledo'ya yerleşti", " Yıl kesin, ay/gün kaynaklarda net değil.", kural="K1")

tasi("kronoloji_italya.js", "Garibaldi'nin Bin'i Marsala'ya çıkar", " (Marsala yerleşim veri tabanında kayıtlı değil.)")
tasi("kronoloji_italya_sehir.js", "Eski ve Yeni Foça'nın kaybedilmesi", "; iki tarih arasındaki fark bu maddede açıkça bırakılmıştır.", ".")
tasi("kronoloji_italya_sehir.js", "Piacenza panayırlarının kurulması", " (Olayın mahalli PIACENZA'dır; yerleşim havuzunda karşılığı YOKTUR, bu yüzden yer_id boş bırakıldı — uydurulmadı.)",
     " Olayın mahalli Piacenza'dır.", not_="Piacenza yerleşim havuzunda yok, yer_id boş bırakıldı — uydurulmadı")

F = "kronoloji_japonya.js"
for b, yer in [("Portekizliler Tanegaşima'ya ulaşıp", "Tanegaşima"), ("Hideyoshi öldü, Kore'den çekilme başladı", "Fuşimi"),
               ("Komodor Perry'nin", "Uraga"), ("Tomioka İpek Fabrikası açıldı", "Tomioka"),
               ("Iwakura Heyeti, Batı'yı incelemek üzere yola çıktı", "Yokohama"),
               ("Ertuğrul Fırkateyni Kuşimoto açıklarında battı", "Kuşimoto/Oşima"),
               ("Şimonoseki Antlaşması imzalandı", "Şimonoseki")]:
    tasi(F, b, f" ({yer}, proje yerleşim kümesinde kayıtlı değil.)")

F = "kronoloji_karakoyunlu.js"
tasi(F, "Kara Mehmed başa geçti", "; künye onu 'Tebriz'i alarak devleti güçlendiren' hükümdar diye anar.", ".")
tasi(F, "Gökmescid banisinin ölümüyle yarım kaldı", "⚠️ Bu madde bilerek Bingöl baskınıyla aynı güne yazıldı: Karakoyunlu", "Karakoyunlu",
     not_="Bu madde bilerek Bingöl baskınıyla aynı güne yazıldı.")
for b, eski, donem in [
    ("Hanedan içinde bir şairler halkası", " ⚠️ TARİH HAKKINDA: kaynak bu şairliklerin dönemini yıl olarak vermiyor; madde Cihan Şah'ın cülûsuna bağlandı ve bu bir tercihtir.", "Cihan Şah devri"),
    ("Dört halife adına para basımı", " ⚠️ TARİH HAKKINDA: kaynak sikkelerin basım yılını vermiyor; madde Cihan Şah'ın cülûsuna bağlandı, bir tercihtir. `kapsam_genis` sayılabilecek imparatorluk çapında bir uygulamadır, bu yüzden `yer_id` boştur.", "Karakoyunlu devri"),
    ("Malî teşkilât: muhassıl ve tahvildarlar", " ⚠️ TARİH HAKKINDA: kaynak bu teşkilâtın kuruluş yılını vermiyor; madde devletin sınırlarının en geniş olduğu ve teşkilâtın en çok yüklendiği Bağdat fethi yılına bağlandı. Bir tercihtir. İmparatorluk çapında olduğu için `yer_id` boştur.", "Karakoyunlu devri"),
]:
    tasi(F, b, eski, kural="K1")
    gun(F, b, donem)

tasi("kronoloji_kirim.js", "Hacı Giray, Altın Orda'dan bağımsızlığını ilan etti", ", haritada ayrı bir yerleşim noktası olmadığı için yer_id boş bırakıldı.", ".")
F = "kronoloji_lehistan.js"
tasi(F, "Mikołaj Kopernik Toruń'da doğdu", " Toruń'un yerleşim kaydı atlasta bulunmadığı için uçuş hedefi boş bırakıldı.")
tasi(F, "Kopernik öldü", " Frombork'un yerleşim kaydı atlasta yok.")
tasi(F, "Zamość kuruldu", " Şehrin yerleşim kaydı atlasta bulunmuyor.")
tasi("kronoloji_memluk.js", "İbn Haldun Mukaddime'nin müsveddelerini tamamladı", "; bu yüzden Kahire'ye bağlı bir yer_id verilemiyor.", ".")
F = "kronoloji_misir.js"
tasi(F, "Ehramlar (İmbâbe) Muharebesi", " Muharebe sahası haritadaki yerleşim kayıtlarıyla birebir eşleşmediği için yer_id boş bırakıldı.")
tasi(F, "Nizip Muharebesi", " Muharebe sahası haritadaki yerleşim kayıtlarıyla birebir eşleşmediği için yer_id boş bırakıldı.")
tasi("kronoloji_orta_asya.js", "Küçüm Han Nogayların yanında öldürüldü", " Tarih kesin değildir; kaynak yıl vermez.", " Ölüm tarihi kesin değildir.", kural="K1", not_="kaynak yıl vermez")
F = "kronoloji_ozbek.js"
tasi(F, "Ebulgazi Bahadır Han'ın ölümü",
     " Ölçmedim ama genel Orta Asya tarihyazımında ona atfedilen ikinci büyük eseri, Cengizli soy kütüğünü anlatan Şecere-i Türk, TDV'nin bu oturumda çekilen özetinde doğrudan geçmiyor — standart akademik kaynaklara göre eser",
     " Genel Orta Asya tarihyazımında ona atfedilen ikinci büyük eser, Cengizli soy kütüğünü anlatan Şecere-i Türk'tür; standart akademik kaynaklara göre eser",
     not_="Ölçmedim: Şecere-i Türk TDV'nin bu oturumda çekilen özetinde doğrudan geçmiyor")
tasi(F, "Çin (Qing) ile antlaşma", " Ölçmedim ama bu olayın Çin kronolojisinde ayrı bir kaydı olup olmadığı bu oturumda karşılaştırılmadı.")
tasi("kronoloji_safevi.js", "Molla Sadrâ'nın İsfahan'dan Kum yakınlarına çekilmesi", ", burada Iranica'nın verdiği erken tarih esas alındı.", ".", kural="K1")
tasi("kronoloji_sirbistan.js", "Duşan imparatorluk tacı giydi",
     " TDV maddesi olayı '1345'te' verip gün belirtmiyor; taç giyme töreninin gününü (Paskalya, 16 Nisan 1346, Üsküp) standart akademik literatür kesinleştiriyor.",
     " Taç giyme töreni 16 Nisan 1346 Paskalya günü Üsküp'te yapıldı.", kural="K1")

# ═════════════════════ KALEM 1 · ÇEKİRDEK (olaylar*.js) ═════════════════════
tasi("olaylar_ek10.js", "Eflak'tan çekiliş ve Yergöğü baskını", " Haritada bu dönemin üç voyvodalığı hâlâ tâbi renkte görünüyor — ayaklanma yıllarının toprak karşılığı henüz veriye işlenmedi.")
tasi("olaylar_ek11.js", "Tanca İngiltere'ye devredildi", " Atlas bu kaydı önce 23 Ocak 1661 olarak taşıyordu — antlaşma günüyle fiilî devir günü arasında bir karışma; Bombay için zaten fiilî devir tarihi (18 Şubat 1665) yazıldığından aynı ölçüt Tanca'ya da uygulandı.")
tasi("olaylar_ek12.js", "Cerbe kalesinin düşüşü", "; haritada toprak değişimi ikincisine bağlanmalıdır, çünkü ada", "; ada", not_="haritada toprak değişimi ikincisine (30 Temmuz) bağlanmalıdır")
tasi("olaylar_ek13.js", "Safevîler'in Bahreyn'i Portekiz'den alması", " (TDV ay/gün vermez)", alan="gun", kural="K1")
tasi("olaylar_ek14.js", "Ahî Evran", " — atlas penceresi 1281'de başladığı için madde açılış gününe yerleştirildi", alan="gun", kural="K1")
tasi("olaylar_ek14.js", "Orhan Gazi'nin Bursa fethi sonrası cirit oyunları", ", TDV kesin yıl vermiyor)", ")", alan="gun", kural="K1", not_="TDV kesin yıl vermiyor")
F = "olaylar_ek15.js"
tasi(F, "Dârfûr'da Dâcû hâkimiyetinin Tuncûrlar'a geçmesi", " (TDV yüzyıl verir, gün vermez — 1400-01-01 yüzyıl sınırıdır)", alan="gun", kural="K1")
tasi(F, "İspanya'nın Bâdis (Peñón de Vélez) kayalığını geri alışı", " (TDV yıl verir, gün vermez)", alan="gun", kural="K1")
tasi(F, "Sa’dî hânedanının sonu", " (TDV yıl verir, gün vermez)", alan="gun", kural="K1")
tasi(F, "Kârkiyâ hânedanı Gîlân'da kuruldu", " ⚠️ Tarih düzeltmesi: TDV'nin genel Gîlân maddesi 1307'de bir otorite boşluğundan söz eder ve Kârkiyâ'nın ne zaman hâkim olduğunu belirtmez; Encyclopaedia Iranica'nın hânedana ayrılmış maddesi kuruluşu 773/1371-72 verir. Aradaki 64 yıl için harita İlhanlı gösterir.", kural="K1")
F = "olaylar_ek16.js"
tasi(F, "Karesi ve Hamîdoğulları beyliklerinin kuruluşu", " — TDV yıl verir, gün vermez", alan="gun", kural="K1")
tasi(F, "Aydınoğulları Beyliği'nin kuruluşu", " (TDV yıl verir, gün vermez)", alan="gun", kural="K1")
tasi(F, "Anadolu Selçuklu Devleti'nin fiilen sona ermesi", " — TDV gün vermez, yalnız yıl ve şehir (Kayseri) verir", alan="gun", kural="K1")
tasi(F, "Celayirli Devleti'nin kuruluşu", " (TDV yıl verir, gün vermez)", alan="gun", kural="K1")
tasi(F, "Bağdat'ın Karakoyunlu eline geçişi", " — TDV ay/gün vermez", alan="gun", kural="K1")
tasi(F, "Karakoyunlu Cihan Şah'ın Timurlu İran'ını", " — TDV yıl aralığı verir, gün vermez", alan="gun", kural="K1")
tasi(F, "Moskova-Litvanya Mütarekesi", " — veride 1503-04-02 kesinleşme günü olarak kullanılıyor", alan="gun", kural="K1")
F = "olaylar_ek17.js"
tasi(F, "IV. Mehmed avdan vazgeçti", "⚠️ TDV'de bu olayla ilgili mizahi/eğlenceli bir rivayet bulunamadı — olayın ciddi seyri şöyle: Mohaç", "Mohaç",
     not_="TDV'de bu olayla ilgili mizahi/eğlenceli bir rivayet bulunamadı")
tasi(F, "Cezayir Ocaklığı'nın Sahra'ya doğru genişlemesi", " — TDV ve akademik kaynak yıl verir, gün vermez", alan="gun", kural="K1")
tasi(F, "Cezayir Ocaklığı'nın Sahra'ya doğru genişlemesi",
     "Salih Reis'in bağımsız sultanlıklar olan Tuggurt ve Vargla üzerine düzenlediği sefer — TDV bu iki şehri kapsamıyor; standart akademik anlatıma göre Osmanlı",
     "Salih Reis bağımsız sultanlıklar olan Tuggurt ve Vargla üzerine bir sefer düzenledi; Osmanlı",
     not_="TDV Tuggurt ve Vargla'yı kapsamıyor; bu kısmın dayanağı standart akademik anlatım")
tasi(F, "Anabolu'nun (Nauplion) Venedik'e kaybı", " (TDV yalnız yıl verir; akademik kaynağa göre yardım ordusu", " (yardım ordusu", alan="gun", kural="K1",
     not_="TDV yalnız yıl verir; gün ve ayrıntı akademik kaynağa göre")
tasi(F, "Semendire'nin Avusturya'dan geri alınışı", " (TDV ay verir, gün vermez)", alan="gun", kural="K1")
tasi(F, "Pîrî Reis, günümüze ulaşan en eski dünya haritasını çizdi", " — TDV yıl verir, ay vermez", alan="gun", kural="K1")
tasi(F, "Kars çevresinin bütünleşmesi", " (TDV doğrudan tarih vermiyor — Kars'ın alınışıyla aynı güne bağlandı)", alan="gun", kural="K1")
tasi("olaylar_ek20.js", "Gürcistan Krallığı üçe bölündü", " — ancak yılını vermiyor.", ".", kural="K1", not_="TDV Gürcistan maddesi bölünmenin yılını vermiyor (1490 başka dayanaktan)")
F = "olaylar_ek21.js"
for b in ["Niğbolu'nun geri alınışı — altı aylık Rus işgali", "Silistre'nin tahliyesi", "Kutuzov Rusçuk'u boşalttı"]:
    tasi(F, b, " (TDV yalnız ayı veriyor, gün kaynakta yok)", alan="gun", kural="K1")
tasi("olaylar_ek22.js", "Zend hânedanının sonu", " Atlas tasarrufu esas aldığı için Derbend'den Ahvaz'a kadar İran ve Kafkasya kayıtlarında Zend dönemi bu günde biter.")
tasi("olaylar_ek6.js", "Annaba'nın (Bône) işgali", "; alınması, adaya en yakın peteğin sahibini değiştirdiği için haritada Akdeniz'in batısındaki dengeyi de görünür şekilde çevirir.", ".")
F = "olaylar_ek8.js"
tasi(F, "İzvornik (Zvornik) kalesinin fethi", " ⚠️ TARİH HAKKINDA: TDV yalnız yıl veriyor, gün vermiyor.", kural="K1")
tasi(F, "Nusaybin ve Cizre-Mardin çevresinin", " TDV kesin ay/gün vermiyor, yalnız 'yılın sonlarında' diyor. ⚠️ Komşu kasabalar Derik (Malikiye) ve Silopi aynı bölgesel teslim dalgasının parçası olabilir ama TDV'de müstakil maddeleri yok — bulunamadı, tarihleri buraya dayandırılmadı.", kural="K1")
gun(F, "Nusaybin ve Cizre-Mardin çevresinin", "921 (1515) yılı sonları")
tasi(F, "Deli Hasan Paşa isyanı", " TDV yalnız yıl veriyor, ay/gün belirtmiyor.", kural="K1")
tasi(F, "Knin'in Venedik'e kaybı", " TDV dönemin genel kayıp listesinde 'Bosna'daki Knin ve civarındaki kaleler ise Venedikliler'in eline geçmişti' diye anar ama gün vermez.", kural="K1")
tasi(F, "Abdullah b. Reşîd Hâil emirliğini ele geçirdi", " TDV kaynağı yalnız yılı veriyor, gün belirtmiyor. ⚠️ VERİ NOTU: data/yerlesimler.js'teki Hâil kaydı bu değişimi 1836-01-01 olarak taşıyor (1 yıl fark) — Değişmez 2 senkronu için yerleşim tarihinin 1835-01-01'e çekilmesi gerekir; bu düzeltme Yerleşim/Entegrasyon oturumuna aittir, benim yetkim dışında.")
tasi(F, "Hârizm SSC ve Buhara Halk Sovyet Cumhuriyeti", " (gün KAYNAKLAR ARASINDA ÇELİŞİYOR — künyenin kendi f:/t: günü DEVRALINDI, bkz. not)", " (kaynaklar farklı günler verir)", alan="gun", kural="K1")
F = "olaylar_ek9.js"
tasi(F, "Sîdî Bel Abbès müstahkem kampının kurulması", " Oturum 14 bu noktayı 1844-03-04'e yuvarlamıştı; gerçek tarih budur.")
tasi(F, "Ağvât'ın (Laghouat) düşüşü", " Oturum 14 bu tarihi 1854-12-02'ye (Tuggurt) yuvarlamak zorunda kalmıştı.")
tasi(F, "Konstantin'in düşüşü", " Denetim bu kırılmayı iki gün sonraki Cebel-i Dürûz ayaklanması maddesiyle eşleştiriyordu — bu madde o eşleşmeyi düzeltir.")
tasi(F, "Trablus şehrinin İtalyanlara teslim olması", " — atlasta bu, taban rengi Osmanlı, üstü İtalyan taraması olarak gösterilmelidir.", ".")
tasi(F, "Dongola'nın geri alınışı", " Atlasta Dongola'nın Mehdî döneminin bu tarihte bitmesi gerekir — bugün Hartum'la aynı güne (1899) bağlı görünüyor.")
tasi(F, "Napolyon'un Akkâ kuşatması", " Bu tarih atlasta toprak değiştirmez — işgalin sınırını gösterdiği için yazılmıştır.")
F = "olaylar_kamerika.js"
tasi(F, "Britanya, Arktik Takımadalar'ı Kanada'ya devretti", " Bu gün, atlasta otuz üç İnuit yerleşiminin bağlı olduğu kimliğin değiştiği gündür. TDV bu coğrafyayı kapsamamaktadır; Historical Atlas of Canada (University of Toronto Press) esas alındı.")
tasi(F, "Fontainebleau Antlaşması", " Atlasta bu ayrım önemlidir — Luizyana İspanya'ya, İllinois ülkesi Britanya'ya gitti ve iki bölge o günden sonra farklı kimlikler taşır. TDV bu coğrafyayı kapsamamaktadır.")
tasi(F, "Fort Laramie Antlaşması", ", ama atlasta bu gün Missouri kıyısındaki köy halklarının kimliğinin tanımlandığı gündür. TDV bu coğrafyayı kapsamamaktadır; Handbook of North American Indians c.13 (Smithsonian) esas alındı.", ".")
tasi(F, "Fort Bridger Antlaşması", " TDV bu coğrafyayı kapsamamaktadır; Handbook of North American Indians c.11 (Smithsonian) esas alındı.")
for b, eski_d in [
    ("Fort Halkett kuruldu", " ⚠️ Kaynak kuruluş yılını verir, gününü vermez; §4 gereği YYYY-01-01 yazılmıştır. Historical Atlas of Canada esas alındı."),
    ("Fort Pitt kuruldu", " ⚠️ Kaynak yıl verir, gün vermez; §4 gereği YYYY-01-01."),
    ("Springfield kuruldu", " ⚠️ Kaynak kuruluş yılını verir, gününü vermez; §4 gereği YYYY-01-01 yazılmıştır. Handbook of North American Indians c.13 (Smithsonian) esas alındı."),
    ("Fort William kuruldu", " ⚠️ Kaynak yıl verir, gün vermez; §4 gereği YYYY-01-01."),
    ("Fort Dearborn kuruldu", " ⚠️ Kaynak yıl verir, gün vermez; §4 gereği YYYY-01-01."),
    ("Fort George (Chisasibi) kuruldu", " ⚠️ Kaynak yıl verir, gün vermez; §4 gereği YYYY-01-01."),
]:
    tasi(F, b, " — kaynak yıl verir, gün vermez", alan="gun", kural="K1")
    tasi(F, b, eski_d, kural="K1")
tasi("olaylar_ok109.js", "Avusturya Cumhuriyeti'nin kuruluşu", " Bu gün, atlasın Habsburg egemenliğinin sona erdiği gün olarak esas alması önerilen tarihtir — TDV'nin toprak üzerindeki egemenlik değişimini anlatan tek cümlesi budur.")
F = "olaylar_p0044.js"
tasi(F, "Moskova Çarlığı Astarhan'ı aldı", " (TDV yıl verir, gün vermez)", alan="gun", kural="K1")
tasi(F, "Moskova Çarlığı Astarhan'ı aldı", " ⚠️ TARİH HAKKINDA: TDV yıl veriyor (1556), gün vermiyor; `astarhan-hanligi` maddesi işgale tarih vermiyor. ⚠️ HARİTA HAKKINDA: atlas aynı gün Aşağı Volga'daki Astarhan ve Nogay kayıtlarını Rusya'ya geçiriyor.")

# ═════════════════════ KALEM 2 · A2 §4b KAYNAK ÇELİŞKİLERİ ═════════════════════
F = "olaylar_ek.js"
tasi(F, "Otranto çıkarması",
     "; teslim olmayı reddeden yaklaşık 800 kişi (din değiştirmeyi kabul etmeyen halk) kılıçtan geçirildi (Otranto şehitleri).",
     "; şehre savaşarak girildiği için direnen ileri gelenlerin bir kısmı idam edildi, bir kısmı esir alındı. Kilise geleneği ölenleri yaklaşık 800 kişilik 'Otranto şehitleri' olarak anar; TDV bu sayının abartılmasını kilise propagandasına bağlar.",
     kural="A2", not_="A2 §4b: eski metin ~800 kişinin kılıçtan geçirildiğini kesin olgu gibi veriyordu; kaynak:gedik-ahmed-pasa'da 800 yok; TDV otranto-seferi: direnen ileri gelenlerin bir kısmı idam, bir kısmı esir; sayının abartıldığı kaydedilir")
ata(F, "Otranto çıkarması", "kaynak", "otranto-seferi · gedik-ahmed-pasa")
tasi(F, "Rumeli Hisarı tamamlandı", "Dört ay gibi olağanüstü bir sürede tamamlanan hisarla", "Kaynaklara göre dört beş ay süren olağanüstü hızlı bir inşaatla tamamlanan hisarla",
     kural="A2", not_="A2 §4b: 'dört ay' — TDV rumelihisari 'dört beş ay'; Dukas başlangıcı Mart 1452 sonu")
ata(F, "Rumeli Hisarı tamamlandı", "gun", "Receb 856 (Temmuz-Ağustos 1452)", not_eski=True,
    not_="TDV rumelihisari: kitâbe Receb 856 (Temmuz-Ağustos 1452); 31 Ağustos günü TDV'de YOK. t:1452-08-31 KORUNDU — ekokuma_mimari '1452-08-31|Boğazkesen' ve merak canakkale-hisar-ve-zincir bağı (D181) · öneri YAMA-KRON2")
ata(F, "Rumeli Hisarı tamamlandı", "kaynak", "rumelihisari", not_eski=True, not_alan="d")

F = "kronoloji_italya.js"
duz(F, "Otranto'nun Osmanlı çıkarmasıyla işgali", "şehri kısa süreli bir katliamın ardından ele geçirdi", "şehri top ateşiyle, savaşarak ele geçirdi")
ata(F, "Otranto'nun Osmanlı çıkarmasıyla işgali", "kaynak", "otranto-seferi (TDV): hisar toplarla zaptedildi, direnen ileri gelenlerin bir kısmı idam edildi; ölü sayısının abartıldığı kaydedilir",
    not_eski=True, not_alan="d", not_="A2 §4b: 'kısa süreli bir katliamın ardından' TDV otranto-seferi ile uyuşmuyordu")
ata(F, "Otranto'nun geri alınması", "kaynak", "bayezid-ii (TDV): Türk garnizonu Napoli kuvvetlerine teslim oldu (10 Eylül 1481) — gün DOĞRULANDI · otranto-seferi",
    not_eski=True, not_alan="d")

duz("olaylar_ek7.js", "Topkapı Sarayı'nın (Saray-ı Cedîd) tamamlanması",
    "göre Fâtih'in emriyle 1459'da başlayan inşaat 1478'de büyük ölçüde tamamlandı ve saray",
    "göre devrin kaynakları inşaatın başlangıç ve bitiş tarihlerinde ayrışır; Bâb-ı Hümâyun kitâbesindeki 883 (1478) tarihine göre Fâtih'in emriyle muhtemelen 1465'te başlanan inşaat bu yıla kadar büyük ölçüde tamamlanmıştı ve saray")
notek("olaylar_ek7.js", "Topkapı Sarayı'nın (Saray-ı Cedîd) tamamlanması", "d", "A2 §4b: eski metin '1459'da başlayan' diyordu; TDV topkapi-sarayi'de 1459 YOK — kitâbe 883 (1478), başlangıç 'muhtemelen 1465'")

F = "olaylar_ek14.js"
B = "Beyazıt Camii ve Külliyesi'nin tamamlanması"
ata(F, B, "d", "II. Bayezid için yaptırılan Beyazıt Camii ve Külliyesi'nin inşasına bir arşiv belgesine göre 906'da (1500) başlandı ve 14 Cemâziyelevvel 911'de (13 Ekim 1505) tamamlandı. Mimarı tartışmalıdır: Ayvansarâyî'nin kaydına dayanılarak uzun süre Mimar Hayreddin'in eseri sayıldı, sonra Mimar Kemâleddin'e bağlandı, bazılarına göre ikisi birlikte çalıştı; aynı belge ise ustanın Yâkub Şah b. Sultan Şah olduğunu gösterir. Cami, klasik öncesi Osmanlı mimarîsinden klasik döneme geçişin önemli anıtlarından sayılır.",
    not_eski=True, not_="A2 §4b: mimar 'Hayreddin' tek ad olarak veriliyordu; TDV beyazit-ii-camii-ve-kulliyesi--istanbul ve hayreddin-mimar--beyazit-camii üç adı tartışır")
ata(F, B, "gun", "906 – 14 Cemâziyelevvel 911 (1500 – 13 Ekim 1505)", not_eski=True,
    not_="t:1505-01-01 KORUNDU — TDV günü 13 Ekim 1505; t değişirse ekokuma_mimari '1505-01-01|Beyazıt' bağı kopar (D181) · öneri YAMA-KRON2 (D147 ③ = 0 ölçüldü)")
ata(F, B, "kisiler", "II. Bayezid, Yâkub Şah b. Sultan Şah, Mimar Hayreddin, Mimar Kemâleddin", not_eski=True, not_alan="d")
ata(F, B, "kaynak", "beyazit-ii-camii-ve-kulliyesi--istanbul · hayreddin-mimar--beyazit-camii", not_eski=True, not_alan="d")

F = "olaylar.js"
B = "Budin'in ilhakı — Macaristan Osmanlı eyaleti"
ata(F, B, "gun", "Ağustos-Eylül 1541 (26 Ağustos'ta ordu Budin önüne vardı, 2 Eylül'de padişah şehre girdi)", not_eski=True,
    not_="A2 §4b: 29 Ağustos günü TDV suleyman-i ve budin maddelerinde YOK (suleyman-i: varış 26 Ağustos, giriş 2 Eylül; budin: yeniçeriler veliaht otağdayken stratejik noktaları tuttu — günsüz). t:1541-08-29 KORUNDU — 18 uçlu kırılma günü + ekokuma_savas 3 bağ · öneri YAMA-KRON2")
ata(F, B, "kaynak", "budin · suleyman-i", not_eski=True, not_alan="d")
ata("kronoloji_habsburg.js", "Budin'in fethi — Macaristan üçe bölündü", "kaynak",
    "TDV suleyman-i: ordu 26 Ağustos 1541'de Budin önüne vardı, padişah 2 Eylül'de şehre girdi · budin: eyalet 948/1541 — 29 Ağustos günü bu iki maddede YOK",
    not_eski=True, not_alan="d")
notek(F, "Haçova Meydan Muharebesi", "gun",
      "A2 §4b: t:'1596-10' ay hassasiyetli (§8 ihlali) — öneri t→1596-10-26 (D147 ③ = 0 ölçüldü) ama ekokuma_savas.js '1596-10' bağı AYNI ANDA değişmeli (D181) · YAMA-KRON2. TDV hacova-meydan-savasi: ilk çarpışma 25 Ekim, asıl savaş 26 Ekim; cigalazade-sinan-pasa: '23-25 Ekim' (§4⑥ iç ayrışma)")
duz(F, "Çeşme baskını", "Baltık'tan yola çıkıp Cebelitarık üzerinden Akdeniz'e giren Rus filosu", "İngilizlerin desteğiyle Akdeniz'e açılan Rus donanması")
notek(F, "Çeşme baskını", "d", "A2 §4b: eski metin 'Baltık'tan yola çıkıp Cebelitarık üzerinden Akdeniz'e giren' diyordu — TDV cesme-vakasi'nda yok (TDV: Spiridov ve Elphinston kumandasında, İngiliz desteğiyle Akdeniz'e açıldı); Baltık çıkışı akademik kaynakla (Anderson, Naval Wars in the Levant — TDV bibliyografyasında) bu oturumda OKUNMADI")

F = "olaylar_ek5.js"
B = "Plevne savunmasının başlaması"
ata(F, B, "kaynak", "gazi-osman-pasa · plevne-muharebeleri", not_eski=True, not_alan="d")
notek(F, B, "gun", "A2 §4b: TDV gazi-osman-pasa: Plevne'ye 7 Temmuz 1877'de ulaştı, I. Plevne 8 Temmuz, II. Plevne 18 Temmuz. Üç günde de madde/kronoloji_balkan ile tam 12 gün fark (19 · 20-21 · 30 Temmuz) = XIX. yy Jülyen/Rumî-Gregoryen farkı; TDV tarihlerinin Rumî/Jülyen olduğu akademik kaynakla ÖLÇÜLMEDİ. t korundu (ekokuma_savas '1877-07-19|Plevne savunmasının' bağı)")
B = "İstanbul Antlaşması — Azak'ın Rusya'ya bırakılması"
ata(F, B, "kaynak", "karlofca · rusya · mustafa-ii", not_eski=True, not_alan="d")
notek(F, B, "gun", "A2 §4b: TDV karlofca '27 Muharrem 1112 (14 Temmuz 1700)' · TDV rusya '13 Temmuz 1700' — §4⑥ iç ayrışma; hicrî karşılığı yazılı olan karlofca günü korundu. Kırım vergisi hükmü karlofca'da var")

F = "olaylar_ek7.js"
duz(F, "Sinop Baskını", "yedi cami", "yedi mescid")
notek(F, "Sinop Baskını", "d", "A2 §4b: 'yedi cami' → TDV sinop 'yedi mescid'. TDV sinop baskını '1854 yılı başları' diye tarihliyor (§4⑥ — 30 Kasım 1853 ile çelişir); TDV'de gün veren madde bulunamadı (kirim-savasi · sinop-baskini · osman-pasa-topal 302); 30 Kasım 1853 akademik kaynakla bu oturumda ÖLÇÜLMEDİ")
B = "Abdülaziz şüpheli şekilde öldü"
ata(F, B, "yer", "İstanbul, Fer‘iye Sarayı", not_eski=True, not_alan="d")
ata(F, B, "d", "Tahttan indirildikten sonra kendi isteğiyle Fer‘iye Sarayı'na nakledilen (1 Haziran 1876) Abdülaziz, 4 Haziran'da odasında bilek damarları kesilmiş hâlde bulundu. Elçilik hekimlerinin de yer aldığı on dokuz kişilik doktor heyeti müphem ifadeli bir rapor hazırladı; ölüm 6 Haziran'da gazetelerde intihar olarak ilân edildi. II. Abdülhamid'in açtırdığı tahkikat ise ölümün intihar değil cinayet olduğu kanaatine vardı ve sanıklar 1881'de Yıldız Mahkemesi'nde yargılandı; mesele tarih yazımında bugün de tartışmalıdır.",
    not_eski=True, not_="A2 §4b: yer 'Çırağan Sarayı' ve 'resmî soruşturma intihar sonucuna vardı' — TDV abdulaziz: Fer‘iye Sarayı; 1881 tahkikatı cinayet kanaatine vardı")

F = "olaylar_ek2.js"
B = "Ferhad Paşa Antlaşması — doğuda en geniş sınırlar"
ata(F, B, "gun", "998 (1590)", not_eski=True,
    not_="A2 §4b: 21 Mart 1590 günü okunan 6 TDV maddesinde YOK (safeviler · murad-iii · luristan · ferhad-pasa: yalnız 998/1590). t:1590-03-21 KORUNDU — kırılma günü + ekokuma_antlasma2 bağı + savaslar.js; 1590-01-01'e çekmek D147 ③ ile 1 sahte kapanış doğurur (Rengat · São Cristóvão) · YAMA-KRON2")
tasi(F, B, "12 yıllık savaşı bitiren antlaşmayla", "Şah Abbas'ın elçisi Haydar Mirza'nın İstanbul'a gelişinin (18 Ocak 1590) ardından, fethedilen yerlerin Osmanlı'da kalması şartıyla yapılan ve 12 yıllık savaşı bitiren antlaşmayla",
     kural="A2", not_="")
ata(F, B, "kaynak", "luristan · murad-iii · safeviler", not_eski=True, not_alan="d")
for F2, B2 in [("kronoloji_gurcistan.js", "Ferhad Paşa Antlaşması — Gürcistan'ın büyük kısmı"), ("kronoloji_iran.js", "Ferhad Paşa (İstanbul) Antlaşması")]:
    gun(F2, B2, "998 (1590)", kural="A2")
    ata(F2, B2, "kaynak", "TDV luristan · safeviler · murad-iii — hükümler bu maddelerden; ferhad-pasa-antlasmasi slugu ÖLÜ (302). 21 Mart günü bu maddelerde YOK (yalnız 998/1590)",
        not_eski=True, not_alan="d")

# ═════════════════════ KALEM 5 · PAKET-EK2 §4 (1.MURAT eki) ═════════════════════
F = "olaylar_ek5.js"
B = "Alaçayır zaferi ve Kalenderoğlu isyanının bastırılması"
ata(F, B, "gun", "26 Rebîülâhir 1017 (9 Ağustos 1608)", kural="EK2", not_eski=True,
    not_="EK2 §4: 5 Ağustos günü kaynakta YOK — TDV kalenderoglu-mehmed '26 Rebîülâhir 1017 / 9 Ağustos 1608' (Göksun Boğazı), kuyucu-murad-pasa 'Rebîülâhir 1017 (Ağustos 1608)'. t:1608-08-05 KORUNDU — ekokuma_celali '1608-08-05|Kalenderoğlu' bağları + savaslar.js; D147 ③ 1608-08-09 = 0 · öneri YAMA-KRON2")
duz(F, B, "Kuyucu Murad Paşa'nın kuyulara doldurduğu isyancılarla anılan tasfiyesi",
    "Kuyucu Murad Paşa'nın, öldürttüğü âsileri kazdırdığı kuyulara doldurduğu rivayet edilen sert tasfiyesi", kural="EK2")
notek(F, B, "d", "EK2 §4: 'kuyulara doldurma' olgu gibi yazılmıştı; TDV kuyucu-murad-pasa bunu (ve 60-70.000 sayısını) 'rivayet edilir' diye veriyor; lakabın öteki rivayeti 1585 Tebriz seferinde atıyla kuyuya düşmesi", kural="EK2")
ata(F, B, "kaynak", "kuyucu-murad-pasa · kalenderoglu-mehmed", kural="EK2", not_eski=True, not_alan="d")

B = "Oruç Ovası zaferi ve Canbolatoğlu isyanının bastırılması"
ata(F, B, "gun", "23-24 Ekim 1607 (asıl savaş 24 Ekim)", kural="EK2", not_eski=True,
    not_="EK2 §4: TDV kuyucu-murad-pasa: çatışmalar 2 Receb 1016 (23 Ekim) başladı, esas savaş ertesi gün; canbolatogullari '3 Receb 1016 / 24 Ekim 1607'; ahmed-i '24 Ekim 1607'. t:1607-10-23 KORUNDU — ekokuma_celali '1607-10-23|Canbolatoğlu' bağları + savaslar.js; D147 ③ 1607-10-24 = 0 · öneri YAMA-KRON2")
ata(F, B, "kaynak", "kuyucu-murad-pasa · canbolatogullari · ahmed-i", kural="EK2", not_eski=True, not_alan="d")

B = "Tiryaki Hasan Paşa'nın Kanije savunması"
duz(F, B, "yaklaşık iki bin kişilik garnizonla direndi. Yaptığı ani huruç harekâtları ve hileleriyle düşmanı",
    "9000 kişilik kuvvetiyle direndi. Dışarıdan yardım alamamasına rağmen genel hücumları püskürttü ve huruç harekâtlarıyla düşmanı", kural="EK2")
notek(F, B, "d", "EK2 §4: 'yaklaşık iki bin kişilik garnizon' — TDV tiryaki-hasan-pasa '9000 kişilik kuvvet' (kanije: olağan kadro ~1400); 'hileleriyle' TDV'de yok", kural="EK2")
ata(F, B, "gun", "9-10 Eylül – 17-18 Kasım 1601", kural="EK2", not_eski=True,
    not_="EK2 §4: TDV kanije 10 Eylül–17 Kasım · tiryaki-hasan-pasa 9 Eylül varış, çekiliş '22 Cemâziyelevvel 1010 / 18 Kasım 1601' · mehmed-iii 18 Kasım (§4⑥ iç ayrışma, iki uç birlikte gösterildi). t korundu (ekokuma_savas '1601-09-10|Kanije')")
ata(F, B, "kaynak", "kanije · tiryaki-hasan-pasa · mehmed-iii", kural="EK2", not_eski=True, not_alan="d")

B = "Karayazıcı Abdülhalim ayaklanması"
duz(F, B, "Orta Anadolu'da geniş bir bölgeyi denetimine alarak Urfa'da kendi adına hutbe okuttu",
    "Orta Anadolu'da geniş bir bölgeyi denetimine aldı, Urfa Kalesi'ni ele geçirdi (Kasım 1599) ve 'Halim Şah' unvanıyla padişahlığını ilân ederek kendi tuğrasını taşıyan fermanlar gönderdi", kural="EK2")
notek(F, B, "d", "EK2 §4: 'Urfa'da kendi adına hutbe okuttu' TDV karayazici-abdulhalim'de YOK; TDV: 'Halim Şah muzaffer bâdâ' tuğralı fermanlar (hutbe-sikke Canbolatoğlu için anlatılıyor). t:1599-06-01 günü kaynaksız (TDV: serdar Ağustos 1599'da yola çıktı, Urfa Kasım 1599) — t korundu: ekokuma_celali/ekonomi/savas '1599-06-01|Karayazıcı' bağları + savaslar.js · öneri YAMA-KRON2", kural="EK2")

B = "Kozluca Bozgunu"
ata(F, B, "gun", "25 Haziran 1774", kural="EK2", not_eski=True,
    not_="EK2 §4: TDV kucuk-kaynarca-antlasmasi Kozluca'yı 25 Haziran 1774 veriyor; t:1774-06-20 günü dayanaksızdı. t KORUNDU — ekokuma_antlasma2 '1774-06-20|Kozluca' bağı + savaslar.js; D147 ③ 1774-06-25 = 0 · öneri YAMA-KRON2. Akademik kaynakla (Jülyen/Gregoryen ayrımı dahil) bu oturumda ÖLÇÜLMEDİ")

F = "olaylar_ek.js"
B = "Kanije'nin fethi"
ata(F, B, "gun", "11-13 Rebîülâhir 1009 (20-22 Ekim 1600)", kural="EK2", not_eski=True,
    not_="EK2 §4: TDV kanije '11 Rebîülâhir 1009 (20 Ekim 1600)' ↔ tiryaki-hasan-pasa ve mehmed-iii '13 Rebîülâhir 1009 (22 Ekim 1600)' (§4⑥ iç ayrışma); kronoloji_habsburg ve savaslar.js 22 Ekim taşıyor. t korundu — ekokuma_savas '1600-10-20|Kanije' bağı")
ata(F, B, "kaynak", "kanije · tiryaki-hasan-pasa · mehmed-iii", kural="EK2", not_eski=True, not_alan="d")
ata("kronoloji_habsburg.js", "Kanije'nin kaybı", "kaynak",
    "TDV tiryaki-hasan-pasa · mehmed-iii: kale 13 Rebîülâhir 1009 (22 Ekim 1600) teslim oldu; TDV kanije 20 Ekim diyor (iç ayrışma)",
    kural="EK2", not_eski=True, not_alan="d")

F = "olaylar_ek8.js"
gun(F, "Deli Hasan Paşa isyanı", "Şevval 1011 (Mart 1603)", kural="EK2")
notek(F, "Deli Hasan Paşa isyanı", "d", "EK2 §4: yukarıdaki 'TDV yalnız yıl veriyor' notu YANLIŞTI — TDV mehmed-iii 'Şevval 1011 / Mart 1603' veriyor (ay düzeyi). t:1603-01-01 kaba güvenli düzeyde kaldı (§4: ay metne yazılır)", kural="EK2")

F = "kronoloji_habsburg.js"
B = "Vasvár Antlaşması — zafere rağmen ödün"
gun(F, B, "16 Muharrem 1075 (9 Ağustos 1664)", kural="EK2")
ata(F, B, "kaynak", "TDV vasvar-antlasmasi: 16 Muharrem 1075 (9 Ağustos 1664); 10 Ağustos Türkçe metindeki tarihin yanlış çevrilmesinden doğan Batı tarihidir",
    kural="EK2", not_eski=True, not_alan="d",
    not_="EK2 §4: t:1664-08-10 yanlış gün. t KORUNDU — ekokuma_antlasma2 '1664-08-10|Vasvár' bağı (D181) · öneri YAMA-KRON2: t→1664-08-09 + bağ güncellemesi (kuyruk dosyası Değişmez 2 evreninde değil)")

# not_="" olan kayıtlarda iç not yazılmasın
for r in K:
    if r.get("not") == "":
        r.pop("not")

cikti = {"aciklama": "PAKET-KRON2 · 13 Eylül 2026 · uygulayıcı: denetim/ARAC-KRON2-UYGULA-0913.py", "kayitlar": K}
io.open(os.path.join(KOK, "denetim", "KRON2-DUZENLE-0913.json"), "w", encoding="utf-8").write(json.dumps(cikti, ensure_ascii=False, indent=1))
from collections import Counter
print("kayıt", len(K), dict(Counter(r["kural"] for r in K)), dict(Counter(r["islem"] for r in K)))
