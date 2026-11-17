# TANIK DUZELTME — afrika_misir / afrika_magrip / afrika_magrip2 / adalar_ek

Kapsam: tarama TSV'sinde bu 4 dosyadaki 19 kayit (rabat-ma, tanca-ma atlandi). Kaynak sayfalar tarayicida tam govdeden okundu (TDV, Wikisource, SLS, Uppslagsverket); okunamayan sayfa yok. Denetim: `py -I arac/sehir_tarihce.py denetle` 4 dosyada ihlal 0. Commit/push yapilmadi. kesinlik hicbir kayitta degismedi, ilk kaldirilan kayit yok.

## Sayim
- (a) tek cumle, yil+sehir adi ayni cumlede, birebir: 8 — aswan (tanik yoktu, eklendi), fustat, fes-ma, oran-dz, sfax-tn, tripoli-ly, constantine-dz, mariehamn-ax
- (b) iki cumlelik tanik: 5 — kayravan-tn, tlemcen-dz, murzuk-ly, bomarsund-ax, kastelholm-ax
- (b') yil cumlede, sehir adi ayni cumlede/yakin cumlede YOK (ad paragrafta 3-4 cumle ote, aradaki cumleler adsiz; birebir tek cumle tutuldu, ic_not'a beyan): 5 — annaba-dz, bicaye-dz, mehdiye-tn, benghazi-ly, saltvik-ax. Kurala tam uymaz; LAB karar versin (kesinlik dusurmek yerine beyanli birakildi, cunku yil kaynakta var ve ozne kesintisiz ayni sehir).
- (c) yil kaynakta yok: 1 — algiers-dz (Plinius metni "Vespasiano" der, sayisal yil yok; kesinlik zaten onyil, tanik ayni, ic_not'a beyan eklendi)
- (d) okunamadi: 0

Toplam 19 = 8 (a) + 5 (b) + 5 (b') + 1 (c).
(a) kayitlari: aswan, fustat, fes-ma, oran-dz, sfax-tn, tripoli-ly, constantine-dz, mariehamn-ax.

## Kayit kayit (eski -> yeni tanik, kaynak)
- aswan: (yok) -> "Asvan Mısır’ın 640’ta müslümanlar tarafından fethinden sonra Nübye Devleti’ne karşı bir sınır kalesi oldu ve X. yüzyıla kadar ..." — https://islamansiklopedisi.org.tr/asvan
- fustat: kisa parca -> tam cumle "Hz. Ömer zamanında Mısır’ı fetheden Amr b. Âs, eski Babilon civarında bölgedeki ilk İslâm şehri olan Fustat’ı kurdu (22/643)." — https://islamansiklopedisi.org.tr/kahire
- algiers-dz: tanik ayni (Icosium, Vespasiano), yalniz ic_not eki — https://la.wikisource.org/wiki/Naturalis_Historia/Liber_V
- annaba-dz (b'): ayni cumle, ic_not eki — https://islamansiklopedisi.org.tr/bune
- bicaye-dz (b'): cumle tamamlandi (Hammâdî emîrlerinin beşincisi ... (457/1065) ... (461/1068-69).) — https://islamansiklopedisi.org.tr/bicaye
- fes-ma: parafraz -> birebir "Bazı müellifler de şehrin yarısını I. İdrîs’in ırmağın sağ kıyısına ve 172’de (789) Medînetü Fâs adıyla ... kurduğunu ileri sürmektedirler." — https://islamansiklopedisi.org.tr/fas--fas
- kayravan-tn (b): 2 cumle ("Kayrevân / Kayruvân adı ... Arapçalaşmış şeklidir (Lane, VII, 2577). Şehre bu adın verilmesi, ... 50 (670) yılında ...") — https://islamansiklopedisi.org.tr/kayrevan
- mehdiye-tn (b'): tam cumle "İnşası 8 Şevval 308 (20 Şubat 921) tarihinde tamamlanan şehir ..." — https://islamansiklopedisi.org.tr/mehdiye--tunus
- oran-dz: parafraz -> birebir "Vehrân, Endülüs Emevî Hükümdarı Abdullah b. Muhammed’in ... 290 (903) yılında kuruldu." — https://islamansiklopedisi.org.tr/vehran
- sfax-tn: parafraz -> birebir "Bugünkü Sefâkus, Ağlebî Hükümdarı I. Muhammed zamanında 235’te (849), ... kuruldu." — https://islamansiklopedisi.org.tr/sefakus
- tlemcen-dz (b): 2 cumle (Tilimsân adi + "Romalılar II. yüzyılda bugünkü şehrin yakınındaki Agādîr’i kurdular ...") — https://islamansiklopedisi.org.tr/tilimsan
- tripoli-ly: kisaltma -> tam cumle "... Trablusgarp, Hz. Ömer döneminde ... 22 (643) yılında bir aylık kuşatmanın ardından fethedildi." — https://islamansiklopedisi.org.tr/trablusgarp . NOT: ayni maddede daha erken cumle var ("Trablusgarp şehri milâttan önce VII. yüzyılda burayı Oea diye isimlendiren Fenikeliler tarafından tesis edildi"); ilk.t degistirilmedi, yeniden degerlendirilebilir.
- benghazi-ly (b'): ayni cumle, ic_not eki — https://islamansiklopedisi.org.tr/bingazi
- constantine-dz: parca -> tam cumle "Başşehir Cezayir’in doğusunda yer alan Kostantîne (...) ... 311 yılında geçirdiği büyük yıkımdan sonra ..." — https://islamansiklopedisi.org.tr/kostantine
- murzuk-ly (b): 2 cumle ("XVI. yüzyıl başlarındaki Bornu-Kânim savaşlarının ardından ... Evlâd-ı Muhammed sülâlesine geçti. Bugünkü Merzûk’u kurarak merkez yapan ...") — https://islamansiklopedisi.org.tr/fizan . Kaynak kurulus yili vermez; yuzyil hassasiyeti korundu.
- bomarsund-ax (b): 2 cumle (SLS: "Jag som är uppvuxen i Sverige ... Bomarsund ... Planeringen av fästningen ... byggandet kom i gång 1830.") — https://www.sls.fi/sv/blogg/kriget-lockade-turister-till-bomarsund/
- kastelholm-ax (b): 2 cumle ("Kastelholm, välbevarad slottsruin ... Borgen, ... omnämns första gången 1388.") — https://uppslagsverket.fi/sv/view-170045-Kastelholm
- mariehamn-ax: parca -> tam cumle "Mariehamn, ursprungligen en liten kustby, blev stad 1861 och fick namn efter ryske tsarens gemål Maria." — https://uppslagsverket.fi/sv/sok/view-170045-Mariehamn
- saltvik-ax (b'): ayni cumle "Socknen omtalas första gången 1322.", ic_not eki — https://www.uppslagsverket.fi/sv/view-170045-Saltvik

Her degisen kaydin `ilk.ic_not` alanina "Tanik kontrolu / iki cumlelik tanik / tam govdeden eklendi" gerekcesi yazildi.
