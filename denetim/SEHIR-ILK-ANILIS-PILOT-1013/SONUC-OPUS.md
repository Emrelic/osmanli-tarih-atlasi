# 20 Anadolu şehrinin tarihte ilk anılışı (Adım 0 pilotu)

Araştırmacı: Opus · Tarih: 2026-10-13 · Ölçüm: web (TDV, Pleiades JSON, Perseus, Oracc). Depoya yazılmadı.

**Genel yöntem notları**
- Astronomik yıl: MÖ n → -(n-1). Aralıklarda **güvenli uç = aralığın son ucu** (kesin var olduğu en erken an).
- `ilk_anilis` için tarih, kaynağın yerleşimin var olduğunu tanıkladığı **olay** tarihidir (metnin yazım tarihi ayrıca belirtilir). Ör. Arrianos MS 2. yy'da yazar ama Ankyra'yı MÖ 333 için tanıklar.
- `haritada_baslangic_onerisi` kuralı (tutarlılık için): varsa `kurulus`, yoksa `ilk_anilis`; `arkeolojik` yalnız yazılı tanık hiç yoksa. Arkeolojik tarih daima ayrıca yazıldı.
- Pleiades mesafeleri: atlas koordinatı ile Pleiades `reprPoint` arası büyük-daire mesafesi (betikle hesaplandı).
- TDV sayfaları WebFetch ile çekildi; aracın özetleyici modeli araya girdiği için **tırnak içindeki TDV alıntıları, özetleyicinin "aynen" diye verdiği metindir** — birkaçını ikinci bir sorgu ile tekrar okuttum (Bursa, Çanakkale, İzmit, Van); yine de birebir doğrulama için sayfaya bakılmalı.
- Görev metnindeki bir öncül yanlış çıktı: **Abydos KARŞI yakada değil, Anadolu yakasında, Çanakkale'nin 5,25 km kuzeyindedir** (Pleiades 501325, Nara Burnu). Karşı yakadaki Sestos'tur. Ayrıntı 15. maddede.

---

### 1. İzmir
- antik_adlar: Smyrna / Zmyrna / Eurydikeia (yeni şehir, Kadifekale–Konak); Naulochon / Palaia Smyrna (eski şehir, Bayraklı/Tepekule)
- kurulus: -0280-01-01 · metin: yeni Smyrna'nın yeniden kuruluşu, Antigonos sonra Lysimakhos (en geç Lysimakhos'un ölümü MÖ 281) · kesinlik: onyil · kaynak: Strabon 14.1.37 (Perseus, Jones çev.); Pausanias 7.5.1 kuruluşu İskender'e bağlar (rüya efsanesi). İskender (MÖ 334) / Antigonos (öl. 301) / Lysimakhos (öl. 281) aralığında güvenli uç MÖ 281 seçildi.
- ilk_anilis: -0643-01-01 · metin: MÖ 7. yy (Lydia kralı Gyges'in Smyrna'ya saldırısı, Herodotos 1.14–15; Gyges'in modern tarihi yakl. MÖ 680–644, güvenli uç 644) — **bu tanıklık ESKİ Smyrna'ya (Bayraklı) aittir, atlas noktasına değil** · kesinlik: onyil · kaynak: Herodotos 1.15 (Pleiades 550893: "Toponym as attested in Herodotus"); Gyges tarihleri genel kronoloji, ayrıca doğrulamadım
- arkeolojik: -2999-01-01 · metin: MÖ 3000'den itibaren — **Bayraklı'daki eski İzmir için** · kesinlik: belirsiz · kaynak: TDV "İZMİR" (M. S. Kütükoğlu): "Milâttan önce 3000'den itibaren varlığı tesbit edilen bu şehir"; Pleiades 550771: Bayraklı'da en erken Helen buluntuları MÖ 11.–10. yy. Atlas noktası (Konak) için ayrı bir arkeolojik tarih: bulunamadı.
- haritada_baslangic_onerisi: -0280-01-01 · hangi nicelikten: kurulus · gerekçe: atlas noktası Kadifekale–Konak Smyrna'sıdır (Pleiades 550893'e 1,10 km); Bayraklı Smyrna'sı 6,17 km uzakta ayrı yerdir. Atlas "İzmir"i kesintisiz şehir sayacaksa alternatif: -0643 (yazılı) ya da -2999 (arkeolojik), ama bunlar başka noktayı tarihler.
- o_tarihteki_sahip: Lysimakhos Krallığı (MÖ 281 başındaki Kurupedion'dan sonra Seleukos Krallığı) — sınırda olduğu için belirsiz sayılmalı
- tanik_cumle: "Then they were reassembled into a city by Antigonus, and afterwards by Lysimachus" (Strabon 14.1.37, Jones çev., Perseus)
- yer_notu: Strabon eski Smyrna'yı yenisinden 20 stadion (~3,7 km) uzak verir; Pleiades ölçümüyle Bayraklı höyüğü atlas noktasına 6,17 km. Hangi noktanın tarihlendiği yukarıda her alanda yazıldı.
- acilan_url: https://islamansiklopedisi.org.tr/izmir · https://pleiades.stoa.org/places/550893/json · https://pleiades.stoa.org/places/550771/json · https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0198:book=14:chapter=1:section=37 · https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0160:book=7:chapter=5:section=1
- guven: orta · neden: kuruluş birden çok antik yazarca tanıklanıyor ama kesin yıl yok (İskender/Antigonos/Lysimakhos); iki ayrı yer sorunu var.

### 2. Bursa
- antik_adlar: Prusa / Prousa ad Olympum (Prusa ad Olympum)
- kurulus: -0148-01-01 · metin: Bithynia kralı Prusias tarafından, MÖ 2. yy ilk yarısı; hangi Prusias olduğu belirsiz (I. Prusias öl. ~182, II. Prusias öl. 149) → güvenli uç MÖ 149 · kesinlik: onyil · kaynak: TDV "BURSA" (H. İnalcık): şehir Bithinya krallarından Prusias tarafından kuruldu; Strabon 12.4.3 (Prusa'yı Prusias'ın kurduğunu söyler).
- ilk_anilis: -0148-01-01 · metin: aynı tanıklık (Strabon, yazım MS 1. yy başı; Plinius NH 5.148 Hannibal'e bağlar) · kesinlik: onyil · kaynak: Strabon 12.4.3; Pleiades 511384 (Prousa adı Strabon 12.4'e dayandırılmış)
- arkeolojik: bulunamadı · metin: TDV "şimdiki hisarın yerinde bulunan daha eski bir yerleşim"den söz eder, tarih vermez · kesinlik: belirsiz · kaynak: TDV "BURSA"
- haritada_baslangic_onerisi: -0148-01-01 · hangi nicelikten: kurulus · gerekçe: kurucu kral kesin, kral kimliği/yıl değil; güvenli uç.
- o_tarihteki_sahip: Bithynia Krallığı
- tanik_cumle: "şimdiki hisarın yerinde bulunan daha eski bir yerleşimin üzerinde yeniden tesis edildiği" (TDV "BURSA", H. İnalcık)
- yer_notu: Pleiades Prusa noktasına 0,62 km. **TDV iç çelişkisi:** "milâttan önce II. yüzyıl sonlarında Prusias'a iltica eden ... Hannibal" ifadesi kronolojik olarak imkânsız (Hannibal MÖ 183/181'de öldü); bu cümleden tarih türetmedim. Pleiades 511384'ün açıklama metni Prusa'yı Kios ile karıştırıyor (Kios/Prusias ad Mare ayrı şehir) — kullanılmadı.
- acilan_url: https://islamansiklopedisi.org.tr/bursa · https://pleiades.stoa.org/places/511384/json · https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0198:book=12:chapter=4:section=3
- guven: orta · neden: kurucu hanedan kesin, hangi Prusias ve yıl tartışmalı; TDV cümlesi hatalı.

### 3. Ankara
- antik_adlar: Ankyra / Ancyra; Sebaste Tektosagon (Roma); Engürü / Angora
- kurulus: bulunamadı · metin: Pausanias kuruluşu Frig kralı Midas'a, Stephanos Byzantios Galatlara bağlar; ikisi de tarihsiz/efsane, kuruluş tanığı sayılmadı · kesinlik: belirsiz · kaynak: Pausanias 1.4.5; TDV "ANKARA" (S. Erdem)
- ilk_anilis: -0332-01-01 · metin: MÖ 333 — İskender Gordion'dan sonra Galatia'daki Ankyra'ya gelir, Paphlagonia elçilerini burada kabul eder (Arrianos, Anabasis 2.4.1; metin MS 2. yy) · kesinlik: yil · kaynak: Arrianos 2.4.1 (Perseus'tan çekilemedi, 503; metni ikincil sayfadaki de Selincourt çevirisinden gördüm — birincil metin açılarak doğrulanmalı). Hitit "Ankuruwa" = Ankara eşitlemesi TDV'ye göre kanıtlanamaz (Ankuruwa büyük olasılıkla Alişar).
- arkeolojik: -0600-01-01 · metin: Hacıbayram kazıları ilk şehri Friglerin kurduğunu gösterir, MÖ 8.–7. yy (güvenli uç MÖ 7. yy sonu = 601) · kesinlik: yuzyil · kaynak: TDV "ANKARA" (S. Erdem): kazılarda Hitit ya da daha eski kavme ait iz yok; şehir merkezinde Paleolitik aletler (yerleşim değil)
- haritada_baslangic_onerisi: -0332-01-01 · hangi nicelikten: ilk_anilis · gerekçe: kuruluş tanığı yok; ilk yazılı ve tarihli tanıklık MÖ 333. Arkeolojik alternatif: Frig yerleşimi (MÖ 8.–7. yy).
- o_tarihteki_sahip: Ahameniş (Pers) İmparatorluğu → MÖ 333'te İskender'in Makedon krallığına geçiş
- tanik_cumle: "capturing Ancyra, a city of the Phrygians, which Midas son of Gordius had founded" (Pausanias 1.4.5, Jones çev., Perseus)
- yer_notu: Pleiades Ancyra noktasına 1,20 km. Gâvurkale, Karaoğlan, Ahlatlıbel, Etiyokuşu (Kalkolitik–Tunç) şehir çevresinde, atlas noktasında değil.
- acilan_url: https://islamansiklopedisi.org.tr/ankara · https://pleiades.stoa.org/places/619103/json · https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0160:book=1:chapter=4:section=5
- guven: orta · neden: MÖ 333 tanıklığı sağlam ama Arrianos pasajını birincil metinden açamadım.

### 4. Konya
- antik_adlar: İkonion / Iconium / Claudiconium; Frigce Kawania (TDV); Hititçe Ikkuwaniya (önerilen eşitleme, Pleiades)
- kurulus: bulunamadı · metin: TDV: "kimler tarafından nasıl kurulduğu bilinmeyen" · kesinlik: belirsiz · kaynak: TDV "KONYA" (T. Baykara)
- ilk_anilis: -0400-01-01 · metin: MÖ 401 — Kyros'un ordusu "Frigya'nın son şehri" İkonion'a varır, üç gün kalır · kesinlik: yil · kaynak: Ksenophon, Anabasis 1.2.19 (Perseus, Brownson çev.). Alternatif (zayıf): Hitit Ikkuwaniya (MÖ 13. yy) — Pleiades 648647 adı listeler, ama eşitleme öneridir, dayanak yazmadım.
- arkeolojik: -1999-01-01 · metin: Alâeddin Tepesi kazısı (1941): bakir toprak üzerinde MÖ 2000'e kadar inebilecek çanak çömlek; ilk yerleşmenin MÖ 9.–8. yy'da başlamış olabileceği ileri sürülür (ihtimal olarak) · kesinlik: belirsiz · kaynak: M. Akok, "Konya Şehri İçindeki Alâeddin Tepesinde ... Kazıların Mimari Buluntuları", Belleten 39/154 (1975), 217–224; Pleiades 648647 de "en az MÖ 2000'den beri" der
- haritada_baslangic_onerisi: -0400-01-01 · hangi nicelikten: ilk_anilis · gerekçe: ilk tarihli yazılı tanıklık; aynı nokta (Pleiades'e 0,06 km).
- o_tarihteki_sahip: Ahameniş (Pers) İmparatorluğu
- tanik_cumle: "to Iconium, the last city of Phrygia. There he remained three days." (Ksenophon, Anabasis 1.2.19, Brownson çev.)
- yer_notu: Atlas noktası Alâeddin Tepesi höyüğünün üstünde (0,06 km).
- acilan_url: https://islamansiklopedisi.org.tr/konya · https://pleiades.stoa.org/places/648647/json · https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0202:book=1:chapter=2:section=19 · https://belleten.gov.tr/tam-metin/1359/tur
- guven: yuksek · neden: birincil metin açıldı, nokta tam örtüşüyor, kazı yayını açıldı.

### 5. Sivas
- antik_adlar: Sebasteia / Sebastia; Megalopolis (Pompeius, eşitleme Barrington'da "?"); Talaura? ; Sivas, Sīwās
- kurulus: -0062-01-01 · metin: Pompeius'un Pontus düzenlemesi (MÖ 64–63) Megalopolis'i şehir yapar; Megalopolis = Sebasteia eşitlemesi Barrington'da soru işaretlidir · kesinlik: yil · kaynak: Strabon 12.3.37 (Perseus); Pleiades 629075 "Sebasteia/Megalopolis?/Talaura?". TDV: kuruluş "tam olarak bilinmemektedir"; Sebasteia adını Pythodoris vermiştir (yıl yok).
- ilk_anilis: -0062-01-01 · metin: aynı Strabon tanıklığı (eşitleme kabul edilirse); Sebasteia adıyla kesin anılış: Plinius NH 6.8 (MS 77 civarı) → 0077 · kesinlik: yil · kaynak: Strabon 12.3.37; Plinius NH 6.8 (Pleiades referansı, metni açmadım)
- arkeolojik: -1199-01-01 · metin: Dört Eylül Parkı'ndaki 30 m'lik tepe (Topraktepe); ilk yerleşme Hititler dönemine iner (güvenli uç: Hitit döneminin sonu ~MÖ 1200) · kesinlik: belirsiz · kaynak: TDV "SİVAS" (Ö. Demirel). Pleiades Hitit Šamuḫa adını da bu yere bağlar; bu eşitleme tartışmalıdır (dayanak yazmadım).
- haritada_baslangic_onerisi: -0062-01-01 · hangi nicelikten: kurulus · gerekçe: tek tarihli yazılı tanık; ama eşitleme belirsiz. Daha muhafazakâr seçenek: 0077 (Sebasteia adıyla).
- o_tarihteki_sahip: Roma Cumhuriyeti (Pompeius'un Pontus düzenlemesi)
- tanik_cumle: "named Zela, as he did Megalopolis, a city" (Strabon 12.3.37, Jones çev., Perseus)
- yer_notu: Pleiades Sebasteia noktasına 0,18 km.
- acilan_url: https://islamansiklopedisi.org.tr/sivas · https://pleiades.stoa.org/places/629075/json · https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0198:book=12:chapter=3:section=37
- guven: dusuk · neden: Megalopolis = Sebasteia eşitlemesi kesin değil; TDV tarih vermiyor.

### 6. Trabzon
- antik_adlar: Trapezous / Trapezus; Trebizond; Aṭrabazunda
- kurulus: -0755-01-01 · metin: Eusebios kroniği MÖ 756 (yakl. 757) verir; modern araştırma şüpheli bulur (G. Huxley: Sinop kolonisi ise MÖ 7. yy'ın 3. çeyreğinden önce olamaz) · kesinlik: yil (kaynağın verdiği) — güvenilirlik düşük · kaynak: Eusebios; Huxley'nin makalesi (Deltio KMS, ekt.gr) — **açılmadı, arama özetinden**; TDV: kuruluş belirsiz, Milet kolonisi görüşü var
- ilk_anilis: -0399-01-01 · metin: MÖ 400 başı — Onbinler Trapezus'a varır, Sinop kolonisi bir Grek şehri olarak tanıklanır · kesinlik: yil · kaynak: Ksenophon, Anabasis 4.8.22 (Perseus); TDV "TRABZON" de şehri adlandıran en eski metnin Anabasis olduğunu söyler
- arkeolojik: bulunamadı · metin: — · kesinlik: — · kaynak: TDV ve Pleiades tarihli kazı bulgusu vermiyor
- haritada_baslangic_onerisi: -0399-01-01 · hangi nicelikten: ilk_anilis · gerekçe: Eusebios tarihi bilimsel olarak tartışmalı ve "kurulus" alanına yalnız beyan olarak yazıldı; güvenli ilk tanık Ksenophon.
- o_tarihteki_sahip: Sinop'a bağlı Grek şehri (nominal Ahameniş çevresi)
- tanik_cumle: "Trapezus, an inhabited Greek city on the Euxine Sea, a colony of the Sinopeans" (Ksenophon 4.8.22, Brownson çev.)
- yer_notu: Pleiades Trapezus noktasına 0,09 km.
- acilan_url: https://islamansiklopedisi.org.tr/trabzon · https://pleiades.stoa.org/places/857359/json · https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0202:book=4:chapter=8:section=22
- guven: yuksek (ilk anılış) / dusuk (kuruluş) · neden: Ksenophon birincil metinden doğrulandı; Eusebios tarihi tartışmalı.

### 7. Erzurum
- antik_adlar: Theodosiopolis / Theodosioupolis; Karin, Karnu-Kalak (Ermenice); Kālîkalâ (Arapça); Arzan er-Rum; Autisparate? (Tabula Peutingeriana, Barrington eşitlemesi)
- kurulus: 0422-01-01 · metin: muhtemelen 415–422 yıllarında (II. Theodosios, İran saldırılarına karşı) kuruldu; güvenli uç 422 · kesinlik: onyil · kaynak: TDV "ERZURUM" (C. Küçük)
- ilk_anilis: 0422-01-01 · metin: kuruluş tanıklığıyla aynı. Daha erken aday: Tabula Peutingeriana'daki Autisparate (Barrington "Autisparate/Theodosiopolis") — eşitleme ve tarih belirsiz, kullanmadım · kesinlik: onyil · kaynak: TDV; Pleiades 874373
- arkeolojik: bulunamadı · metin: Pleiades "en az Urartu dönemine kadar inen öncüller" der ama tarihli bulgu vermez · kesinlik: belirsiz · kaynak: Pleiades 874373
- haritada_baslangic_onerisi: 0422-01-01 · hangi nicelikten: kurulus · gerekçe: TDV aralığının güvenli ucu.
- o_tarihteki_sahip: Doğu Roma (Bizans) İmparatorluğu
- tanik_cumle: "muhtemelen 415-422 yıllarında kurulmuş" (TDV "ERZURUM", C. Küçük)
- yer_notu: Pleiades Erzurum noktasına 0,92 km.
- acilan_url: https://islamansiklopedisi.org.tr/erzurum · https://pleiades.stoa.org/places/874373/json
- guven: orta · neden: TDV "muhtemelen" diyor; tek kaynak.

### 8. Diyarbakır
- antik_adlar: Amedu / Amedi / Amidi (Asurca); Amida; Âmid; Kara Amid; Diyarbekir
- kurulus: bulunamadı · metin: — · kesinlik: — · kaynak: TDV "DİYARBAKIR" (N. Göyünç) kuruluş vermez
- ilk_anilis: -0865-01-01 · metin: MÖ 866 — II. Assurnasirpal'in 18. yıl seferi (eponim Šamaš-nūrī, 866): Bit-Zamani'li Ilānu'nun "kral şehri" Amēdu'ya kesik başlar götürülür · kesinlik: yil · kaynak: RIMA 2 A.0.101.1 iii 92b–109 (Oracc RIAo Q004455, açıldı). Daha erken "Orta Asur" anılışı ve I. Adad-nirari kılıç kabzası iddiaları doğrulanamadı.
- arkeolojik: -2999-01-01 · metin: İçkale'deki Amida Höyük'te Geç Kalkolitik–İlk Tunç geçişi (MÖ 4. binyıl sonu) çanak çömleği; 3. binyılın ilk yarısında boşluk, 3. binyıl ortasından itibaren yeniden iskân. TDV: "milâttan önce 2300'den beri bir yerleşim merkezi" · kesinlik: belirsiz · kaynak: A. T. Ökse vd., "The Earliest Settlement of the City of Diyarbakır: Amida Höyük at İçkale", OLBA 23 (2015), 59–110 (yalnız özet açıldı); TDV
- haritada_baslangic_onerisi: -0865-01-01 · hangi nicelikten: ilk_anilis · gerekçe: birincil Asur metninde tarihli tanık.
- o_tarihteki_sahip: Bit-Zamani (Aramî krallığı, Asur vasalı; MÖ 856'da Asur eyaleti)
- tanik_cumle: "I took the live soldiers (and) the heads to the city Amēdu, his royal city" (RIMA 2 A.0.101.1 iii 107, Oracc RIAo)
- yer_notu: Pleiades Amida noktasına 0,34 km.
- acilan_url: https://islamansiklopedisi.org.tr/diyarbakir · https://oracc.museum.upenn.edu/riao/Q004455/html · https://oracc.museum.upenn.edu/riao/cbd/qpn/onebigfile.html · https://pleiades.stoa.org/places/874298/json · https://avesis.kocaeli.edu.tr/yayin/89bbf13c-9f25-451e-a9c4-45c927bb3227/the-earliest-settlement-of-the-city-of-diyarbakir-amida-hoyuk-at-ickale · https://www.livius.org/articles/place/amida/
- guven: yuksek · neden: birincil metin satır numarası ve eponim yılıyla açıldı. (Daha erken bir anılış olabilir; RIAo sözlüğünde Amedu 3 örnek, hepsini görmedim.)

### 9. Van
- antik_adlar: Ṭušpa / Turušpa (Asurca); Thospia, Bouana, 'Ospa'; Rusaḫinili (Toprakkale, ayrı nokta); Van
- kurulus: -0829-01-01 · metin: Urartu kralı I. Sarduri Tuşpa'yı (Van Kalesi) başkent yapar; Sardur Burcu kuruluş kitabeleri (taşları Alniunu şehrinden getirdim der). I. Sarduri'nin bitiş tarihi kaynaklarda farklı; TDV oğlu İşpuini'yi MÖ 830–810'a koyar → güvenli uç MÖ 830 · kesinlik: onyil · kaynak: TDV "VAN" (O. Kılıç); Pleiades 874771 ("Sarduri I'den başlayan" yazıtlar)
- ilk_anilis: -0829-01-01 · metin: Sardur Burcu kitabeleri "Urartu tarihinin bilinen ilk yazılı kaynakları" (TDV). Not: bu kitabelerin Tuşpa ADINI içerip içermediğini doğrulayamadım; adla anılış İşpuini sonrası Urartu yazıtlarında ve Asur kaynaklarında (Tiglat-pileser III, MÖ 735 Turušpa) — eCUT sözlüğünde Ṭušpa 158 örnek, ilk örneğin metnini göremedim · kesinlik: onyil · kaynak: TDV "VAN"; Oracc eCUT sözlüğü
- arkeolojik: bulunamadı (atlas noktası için) · metin: TDV bölgenin MÖ 4000'e indiğini söyler ama bu Tilkitepe'dir (Van Kalesi'nin ~6 km güneyi), ayrı yer · kesinlik: belirsiz · kaynak: TDV "VAN"
- haritada_baslangic_onerisi: -0829-01-01 · hangi nicelikten: kurulus · gerekçe: yerinde (in situ) kuruluş kitabesi, TDV kronolojisine göre güvenli uç.
- o_tarihteki_sahip: Urartu Krallığı
- tanik_cumle: "başşehri Tuşpa (bugünkü Van Kalesi) oldu" (TDV "VAN", O. Kılıç)
- yer_notu: **Atlas noktası Van Kalesi'ne değil modern şehre düşüyor: Tuşpa (Pleiades 874771) 4,74 km batıda.** Eski Van şehri kalenin güneyindeydi; yeni şehir eski Norşen ve Arak mahallelerinin yerinde, göl kıyısından ~7 km içeride kuruldu (TDV). Önerilen tarih Van Kalesi'ni tarihler; atlas noktasının kendisi için ayrı tarih bulunamadı.
- acilan_url: https://islamansiklopedisi.org.tr/van · https://pleiades.stoa.org/places/874771/json · https://oracc.museum.upenn.edu/ecut/cbd/qpn/onebigfile.html · https://www.livius.org/articles/place/tuspa-van/
- guven: orta · neden: kuruluş sağlam ama nokta 4,7 km kayık ve Sarduri I tarihi ±10 yıl oynuyor.

### 10. Adana
- antik_adlar: Adaniya / Ataniya (Hititçe, eşitleme muhtemel); Adana(wa) (Karatepe); Antiocheia pros Saro / Antiochia ad Sarum (Seleukos dönemi); "Que şehri" (Asur kaynaklarında belki Adana — Bagg, RGTC 7/1)
- kurulus: bulunamadı · metin: TDV kuruluş vermez; Uranos oğlu Adanos efsanesini anar · kesinlik: — · kaynak: TDV "ADANA" (S. Erdem)
- ilk_anilis: -1499-01-01 · metin: MÖ 2. binyıl — Telipinu Fermanı (MÖ ~1500) Ammuna döneminde isyan eden Adaniya'yı anar; TDV Adaniya'nın bugünkü Adana olduğunun "kabul edildiğini, ancak kesin olmadığını" söyler; güvenli uç olarak fermanın yazımı (MÖ ~1500) seçildi · kesinlik: yuzyil · kaynak: TDV "ADANA"; Pleiades 648548 (Atanija, Orta Hitit). Daha güvenli ama geç tanık: Karatepe çift dilli yazıtı (MÖ 9.–8. yy, TDV): Karatepe'nin "Adana Kralı Awarikus'a" tâbi olduğu.
- arkeolojik: bulunamadı · metin: Tepebağ Höyüğü için akademik yayın açamadım; haber kaynakları İlk Tunç Çağı / MÖ 3000 diyor (yalnız ipucu, dayanak değil) · kesinlik: — · kaynak: —
- haritada_baslangic_onerisi: -1499-01-01 · hangi nicelikten: ilk_anilis · gerekçe: TDV birincil ve eşitlemeyi "kabul edilir" diye veriyor. Eşitleme reddedilirse alternatif: Karatepe yazıtı (MÖ ~700, güvenli uç) ya da Antiocheia pros Saro adı (MÖ 2. yy).
- o_tarihteki_sahip: Kizzuwatna (Hitit'ten ayrılan krallık) — belirsiz
- tanik_cumle: "Adana Kralı Awarikus'a tâbi olduğunu" (TDV "ADANA", S. Erdem — Karatepe yazıtı hakkında)
- yer_notu: Pleiades Adana/Antiochia ad Sarum noktasına 1,17 km; Taşköprü (Roma köprüsü) 1,97 km. "Adaniya" metinde ülke mi şehir mi, kaynaklar ayrışıyor.
- acilan_url: https://islamansiklopedisi.org.tr/adana · https://pleiades.stoa.org/places/648548/json · https://pleiades.stoa.org/places/650062/json
- guven: dusuk · neden: ilk anılış ad eşitlemesine dayanıyor; Telipinu fermanında "Adaniya" ülke adı da olabilir.

### 11. Kastamonu
- antik_adlar: Kastamon (Bizans); Kastamoni / Qastamuni; Kastra Komnenon (etimoloji önerisi, TDV'ye göre varsayım); Hitit Tum(m)ana (bölge adı, şehir değil)
- kurulus: bulunamadı · metin: TDV: kuruluş tarihi ve ad kökeni kesin bilinmiyor; adın klasik antik ve erken Orta Çağ kaynaklarında geçmediğini söyler · kesinlik: — · kaynak: TDV "KASTAMONU" (İ. Şahin)
- ilk_anilis: 1135-01-01 · metin: II. Ioannes Komnenos'un Kastamon'u Danişmendlilerden alması; tarih kaynaklarda 1132 ya da 1135 → güvenli uç 1135. Dolaylı ve daha erken: Anna Komnene'nin Aleksiad'ında ~1090 olayları için "Nicetas Castamonites" (yer adından türemiş soyadı) — yer adının o tarihte var olduğunu ima eder ama yerin kendisini anmaz · kesinlik: yil · kaynak: Aleksiad VII ve XII (Fordham, Dawes çev., açıldı); 1132/1135 tarihleri için Choniates/Kinnamos'u birincil metinden açamadım (Britannica "Dānishmend dynasty" ve Paphlagonia maddeleri arama özetinden). TDV: şehir Aleksios Komnenos (1081–1118) zamanında Danişmendlilerce fethedildi — bu da 1118'den önce şehrin var olduğunu gösterir.
- arkeolojik: bulunamadı (yerleşim için) · metin: TDV: yörede Alt Paleolitik'ten başlayan izler, Geç Kalkolitik–İlk Tunç yerleşmeleri, Hitit–Roma süreklilik — hepsi YÖRE için, şehir noktası için değil. Barrington/DARMC atlas noktasına 0,1 km'de Klasik dönem (MÖ 480–330) "kaya mezarı" işaretler — mezar, yerleşim tarihi değil · kesinlik: belirsiz · kaynak: TDV; Pleiades 844974
- haritada_baslangic_onerisi: 1118-01-01 · hangi nicelikten: ilk_anilis · gerekçe: TDV'nin "Aleksios Komnenos zamanında fethedildi" tanıklığının güvenli ucu (Aleksios'un ölümü 1118) 1132/1135'ten erken ve TDV'ye dayanıyor. (ilk_anilis alanındaki 1135 doğrudan Kastamon adını taşıyan olay; 1118 TDV'nin dolaylı tanıklığı.)
- o_tarihteki_sahip: Danişmendliler (1118 itibarıyla, TDV'ye göre Aleksios döneminde fethedilmiş)
- tanik_cumle: "Kastamonu, İmparator Aleksios Komnenos zamanında Dânişmendliler tarafından fethedildi" (TDV "KASTAMONU", İ. Şahin)
- yer_notu: Pleiades Kastamonu noktası 2,54 km (Barrington genel noktası); DARMC 11907 noktası 0,1 km.
- acilan_url: https://islamansiklopedisi.org.tr/kastamonu · https://pleiades.stoa.org/places/844974/json · https://sourcebooks.web.fordham.edu/basis/AnnaComnena-Alexiad07.asp · https://sourcebooks.web.fordham.edu/basis/AnnaComnena-Alexiad12.asp
- guven: dusuk · neden: antik dönemde ad yok; ilk doğrudan anılışın birincil metnini açamadım.

### 12. Bitlis
- antik_adlar: Bałałēš / Baghaghesh, Bałeš (Ermenice); Balaleisa / Balaleison, 'Balouos' (Georgios Kyprios), Cymiza? (Barrington); Badlîs / Bidlîs
- kurulus: bulunamadı · metin: TDV: kalenin yerine ilk kimin yerleştiği bilinmiyor; İskender'in kumandanı Badlîs efsanesini yalnız efsane olarak aktarır · kesinlik: — · kaynak: TDV "BİTLİS" (M. Tuncel)
- ilk_anilis: 0610-01-01 · metin: MS ~600–610 — Georgios Kyprios'un Descriptio orbis Romani'sinde Balaleisa/Balouos (Barrington eşitlemesi; Honigmann 1935) → güvenli uç 610 · kesinlik: onyil · kaynak: Pleiades 874438 (referanslar: GCyp 943H, 945G; Honigmann 1935, 31–32, 37; Barrington 89 E2). Georgios Kyprios metnini açmadım. TDV'deki en eski tarihli olay: Hz. Ömer döneminde (641) İyâz b. Ganm'ın fethi (TDV hicrî yıl vermiyor; ~H. 20).
- arkeolojik: bulunamadı · metin: akademik tarihli bulgu açamadım (Bitlis Kalesi'nde İlk Tunç Çağı haberi yalnız basında) · kesinlik: — · kaynak: —
- haritada_baslangic_onerisi: 0610-01-01 · hangi nicelikten: ilk_anilis · gerekçe: Barrington'un yer kimliği ve geç antik tanık; TDV'nin 641'i daha geç. Eşitleme reddedilirse: 0641 (TDV).
- o_tarihteki_sahip: belirsiz — 591 antlaşmasından sonra Bizans, 600'lerin başında Sâsânî geri alımı; bulunamadı (kesin)
- tanik_cumle: "Büyük İskender'in emri üzerine onun kumandanlarından Badlîs kurmuş" (TDV "BİTLİS" — efsane olarak aktarılır)
- yer_notu: Pleiades Cymiza/Balaleisa noktasına 0,07 km.
- acilan_url: https://islamansiklopedisi.org.tr/bitlis · https://pleiades.stoa.org/places/874438/json
- guven: dusuk · neden: ilk anılış ikincil referanstan (Pleiades/Barrington), birincil metin açılmadı; Ermenice kaynaklardaki daha erken anılış olasılığı araştırılmadı.

### 13. Kütahya
- antik_adlar: Kotiaeion / Kotiaion / Kotyaion / Cotyaeum; Quṭayya (Arapça)
- kurulus: bulunamadı · metin: TDV kuruluş vermez · kesinlik: — · kaynak: TDV "KÜTAHYA" (M. Ç. Varlık)
- ilk_anilis: 0023-01-01 · metin: Strabon Coğrafya'sında (MÖ 7 – MS ~23 arası yazıldı) Phrygia Epiktetos şehirleri arasında Kotiaeion; güvenli uç MS 23 · kesinlik: onyil · kaynak: Strabon 12.8.12 (Perseus). Pleiades/Barrington adı Helenistik dönem için de tanıklı sayar (kaynağını görmedim).
- arkeolojik: bulunamadı · metin: TDV "Frigler döneminden beri bir seramik merkezi" der, tarih vermez · kesinlik: belirsiz · kaynak: TDV "KÜTAHYA"
- haritada_baslangic_onerisi: 0023-01-01 · hangi nicelikten: ilk_anilis · gerekçe: tek tarihlenebilir yazılı tanık; muhtemelen çok daha eskidir (Helenistik).
- o_tarihteki_sahip: Roma İmparatorluğu
- tanik_cumle: "To Phrygia Epictetus belong the cities Azani, Nacolia, Cotiäeium, Midäeium, and Dorylaeum" (Strabon 12.8.12, Jones çev.)
- yer_notu: Pleiades Kotiaeion noktasına 0,66 km. Seyitömer Höyük ~25 km uzakta, ayrı yer.
- acilan_url: https://islamansiklopedisi.org.tr/kutahya · https://pleiades.stoa.org/places/609444/json · https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0198:book=12:chapter=8:section=12
- guven: orta · neden: anılış kesin ama muhtemelen gerçek ilk anılış değil (geç bir üst sınır).

### 14. Samsun
- antik_adlar: Amisos / Amisus; Peiraieus (Atina iskânı); Enete (TDV, eski yerleşim); Kara Samsun (Toramantepe); Samsun
- kurulus: -0500-01-01 · metin: "milâttan önce VI. yüzyılda Miletliler tarafından kurulan Amisos" → güvenli uç MÖ 6. yy sonu (501) · kesinlik: yuzyil · kaynak: TDV "SAMSUN" (M. Öz); Strabon 12.3.14 (Theopompos'a göre ilk kez Miletliler kurdu)
- ilk_anilis: -0314-01-01 · metin: MÖ 4. yy — Theopompos'un (öl. ~MÖ 315) Strabon'daki aktarımı; daha erken tanık (sikke, Hekataios, Ps.-Skylaks) doğrulanamadı · kesinlik: onyil · kaynak: Strabon 12.3.14 (Perseus)
- arkeolojik: bulunamadı (atlas noktası için) · metin: TDV Tekkeköy, Dündartepe, Kaledoruğu gibi tarih öncesi yerleşmeleri sayar; bunlar ayrı noktalar, tarih vermez · kesinlik: — · kaynak: TDV
- haritada_baslangic_onerisi: -0500-01-01 · hangi nicelikten: kurulus · gerekçe: TDV kuruluş yüzyılı; güvenli uç.
- o_tarihteki_sahip: Milet kolonisi; bölge MÖ 6. yy sonunda Ahameniş hâkimiyetinde
- tanik_cumle: "milâttan önce VI. yüzyılda Miletliler tarafından kurulan Amisos'a bağlanır" (TDV "SAMSUN", M. Öz)
- yer_notu: Barrington/DARMC Amisus noktası atlas noktasına 0,75 km. Ancak TDV, Pers kralı Dareios'un Amisos'u "3 km. batısındaki Toramantepe'de yeniden kurduğunu" yazar; antik Amisos akropolü (Toraman Tepe/Baruthane) ile modern merkez arasındaki mesafeyi ben ölçemedim — 3 km eşiğinde olabilir, kontrol gerekir.
- acilan_url: https://islamansiklopedisi.org.tr/samsun · https://pleiades.stoa.org/places/857024/json · https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0198:book=12:chapter=3:section=14
- guven: orta · neden: kuruluş yüzyılı TDV'de; ilk anılış tarihi ve kesin yer belirsiz.

### 15. Çanakkale
- antik_adlar: yok (aynı noktada antik şehir yok); Kal'a-i Sultâniyye → Çanak-Kal'ası → Çanakkale
- kurulus: 1463-01-01 · metin: 1463 — Fatih Sultan Mehmed'in boğazı denetlemek için yaptırdığı kale (Kal'a-i Sultâniyye); şehrin çekirdeği · kesinlik: yil · kaynak: TDV "ÇANAKKALE" (M. Tuncel). Hicrî karşılık TDV'de verilmiyor (1463, H. 867–868'e düşer).
- ilk_anilis: 1463-01-01 · metin: Kal'a-i Sultâniyye adının ilk geçişi kale ile aynı (TDV). TDV ayrıca "bu caminin yapımı kaleden de önce 1452 yılındadır" der — kale-şehirden önce bir yerleşmeye işaret edebilir ama tek cümle ve olağan dışı; kullanmadım, kontrol edilmeli · kesinlik: yil · kaynak: TDV "ÇANAKKALE"
- arkeolojik: yok (atlas noktası için) · metin: TDV Truva (İlk Tunç) ve Dardanos'u anar; ikisi de ayrı yerler · kesinlik: — · kaynak: TDV; Pleiades
- haritada_baslangic_onerisi: 1463-01-01 · hangi nicelikten: kurulus · gerekçe: şehir Osmanlı kuruluşu.
- o_tarihteki_sahip: Osmanlı Devleti
- tanik_cumle: "1463 yılında inşa edilen ve Kal'a-i Sultâniyye adı verilen bu yapı" (TDV "ÇANAKKALE", M. Tuncel)
- yer_notu: **Görev metnindeki "Abydos KARŞI yakadadır" yanlış:** Abydos (Pleiades 501325, Nara Burnu/Maltepe) Anadolu yakasında, atlas noktasının 5,25 km kuzeyinde; karşı (Rumeli) yakada Sestos var. Dardanos 8,04 km güneybatıda. İkisi de 3 km eşiğinin dışında, atlas noktasını tarihlemez.
- acilan_url: https://islamansiklopedisi.org.tr/canakkale · https://pleiades.stoa.org/places/501325/json · https://pleiades.stoa.org/places/501393/json
- guven: yuksek · neden: TDV açık yıl veriyor; yalnız 1452 cami cümlesi açıklanmalı.

### 16. Maraş
- antik_adlar: Gurgume / Gurgum (şehir adı, III. Salmanasar); Marqasi / Marqasa / Marqasu, Maraqasi, Marhasi (Asurca); Germanikeia / Caesarea Germanice; Mar'aş
- kurulus: bulunamadı · metin: TDV: kuruluş antik çağa iner; ilk yerleşim Erkenez çayı kenarında, Roma'da Karasu kıyısına taşındı · kesinlik: — · kaynak: TDV "KAHRAMANMARAŞ" (T. Gündüz)
- ilk_anilis: -0823-01-01 · metin: III. Salmanasar (MÖ 858–824) kraliyet yazıtlarında Gurgume şehir adı olarak; güvenli uç MÖ 824. Marqasa adıyla: III. Tiglat-pileser (745–727) ve II. Sargon (721–705) metinlerinde; Sargon MÖ 711'de Gurgum'u alıp Marqasu eyaleti yapar · kesinlik: yuzyil (hükümdarlık aralığı) · kaynak: Pleiades 658474 ad kayıtları (Bagg, RGTC 7/1, 80–81 ve 169–170); Oracc ATAE "Marqasu" giriş sayfası; Oracc RIAo sözlüğü (Marqasa 1, Marqasayu 6 örnek)
- arkeolojik: -2999-01-01 · metin: kale çevresinde MÖ 3000'e inen çanak çömlek; kaledeki aslan heykeli yazıtları MÖ 11. yy'dan itibaren yoğun iskânı düşündürür · kesinlik: belirsiz · kaynak: TDV "KAHRAMANMARAŞ"
- haritada_baslangic_onerisi: -0823-01-01 · hangi nicelikten: ilk_anilis · gerekçe: Asur yazıtında tarihli tanık (Bagg). Not: Gurgume'nin bu metinlerde ülke mi şehir mi olduğu bağlama göre değişir; Bagg/Pleiades şehir adı olarak alır.
- o_tarihteki_sahip: Gurgum Krallığı (Geç Hitit şehir devleti)
- tanik_cumle: "Name of Maraş in royal inscriptions of the ninth-century-BC Assyrian king Shalmaneser III" (Pleiades 658474, Bagg'a dayanarak)
- yer_notu: Pleiades Germanikeia noktasına 1,38 km. TDV'ye göre ilk yerleşim şehrin güneydoğusunda Erkenez çayı kenarındaydı — mesafesi ölçülemedi; Maraş höyüğü/kale (ATAE fotoğraf açıklaması: "şehrin kalbindeki höyük") atlas noktasına yakın.
- acilan_url: https://islamansiklopedisi.org.tr/maras (yalnız "bk. KAHRAMANMARAŞ") · https://islamansiklopedisi.org.tr/kahramanmaras · https://pleiades.stoa.org/places/658474/json · https://oracc.museum.upenn.edu/atae/marqasu/ · https://oracc.museum.upenn.edu/riao/cbd/qpn/onebigfile.html
- guven: orta · neden: Bagg'ın RGTC'si sağlam ikincil kaynak; birincil Salmanasar pasajını açmadım.

### 17. Antalya
- antik_adlar: Attaleia / Attalea; Adalya, Antāliya
- kurulus: -0137-01-01 · metin: Bergama kralı II. Attalos Philadelphos kurdu (TDV: eski bir şehrin yerinde yeniden kurdu); II. Attalos'un saltanatı MÖ 159–138 → güvenli uç MÖ 138. Pleiades "MÖ 150'de" der (kaynağı belirtilmemiş) · kesinlik: onyil · kaynak: Strabon 14.4.1 (Perseus); TDV "ANTALYA" (F. Emecen); Pleiades 638778
- ilk_anilis: -0137-01-01 · metin: kuruluş tanıklığıyla aynı (Strabon) · kesinlik: onyil · kaynak: Strabon 14.4.1
- arkeolojik: bulunamadı · metin: TDV'nin andığı "eski şehir" tarihsiz · kesinlik: — · kaynak: TDV
- haritada_baslangic_onerisi: -0137-01-01 · hangi nicelikten: kurulus · gerekçe: kurucu kral kesin, yıl saltanat aralığından.
- o_tarihteki_sahip: Bergama (Attalos) Krallığı
- tanik_cumle: "Attaleia, so named after its founder Attalus Philadelphus" (Strabon 14.4.1, Jones çev.)
- yer_notu: Pleiades Attalea noktasına 0,46 km.
- acilan_url: https://islamansiklopedisi.org.tr/antalya · https://pleiades.stoa.org/places/638778/json · https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0198:book=14:chapter=4:section=1
- guven: yuksek · neden: birincil metin + TDV + Pleiades uyumlu; yalnız yıl aralığı.

### 18. İzmit
- antik_adlar: Nikomedeia / Nicomedia; Olbia?; İznikmid; (Astakos ayrı yer)
- kurulus: -0261-01-01 · metin: MÖ 262 — I. Nikomedes Nikomedya'yı kurdu, Bitinya başşehri yaptı. Perseus Strabon notu ve Pleiades MÖ 264 der; çelişkide TDV esas ve aynı zamanda güvenli uç · kesinlik: yil · kaynak: TDV "İZMİT" (İ. Bostan); Strabon 12.4.2
- ilk_anilis: -0261-01-01 · metin: kuruluş tanığıyla aynı (Strabon 12.4.2: Astakos halkı kurucu tarafından Nikomedeia'ya taşındı) · kesinlik: yil · kaynak: Strabon 12.4.2 (Perseus)
- arkeolojik: bulunamadı · metin: — · kesinlik: — · kaynak: —
- haritada_baslangic_onerisi: -0261-01-01 · hangi nicelikten: kurulus · gerekçe: TDV yılı.
- o_tarihteki_sahip: Bithynia Krallığı
- tanik_cumle: "milâttan önce 262'de Nikomedya adıyla kuruldu" (TDV "İZMİT", İ. Bostan)
- yer_notu: Pleiades Nicomedia noktasına 0,26 km. **Astakos ayrı yer:** Megaralılarca MÖ 712'de (TDV) kurulan Astakos, Başiskele'de, atlas noktasına 5,81 km (Pleiades 511169). Astakos tarihi İzmit'e devredilmemeli.
- acilan_url: https://islamansiklopedisi.org.tr/izmit · https://pleiades.stoa.org/places/511337/json · https://pleiades.stoa.org/places/511169/json · https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0198:book=12:chapter=4:section=2
- guven: yuksek · neden: kurucu ve yıl net; 262/264 farkı küçük ve beyanlı.

### 19. Amasya
- antik_adlar: Amaseia / Amasia; Ḫaraşna (Âlî'ye göre "kâfirler zamanındaki adı"); Amāsiya
- kurulus: bulunamadı · metin: TDV: kim ve ne zaman kurduğu kesin bilinmiyor; İskender öncesinde var olduğu ve Hitit dönemine uzanabileceği düşünülüyor · kesinlik: — · kaynak: TDV "AMASYA" (İ. Şahin – F. Emecen)
- ilk_anilis: -0062-01-01 · metin: Strabon ~MÖ 64'te Amaseia'da doğdu ve onu "kendi şehrim" diye anlatır; aralık 64/63 → güvenli uç MÖ 63 · kesinlik: onyil · kaynak: Strabon 12.3.39 (Perseus); Pleiades 857018. Not: Pleiades editörleri Amaseia'yı yakl. MÖ 300–183 Pontus başkenti sayar (ikincil beyan, birincil tanığı görmedim); Strabon kral mezarlarının burada olduğunu söyler — tarihsiz.
- arkeolojik: bulunamadı · metin: Pontus kral kaya mezarları (MÖ 3.–2. yy olarak bilinir) için akademik kaynak açmadım · kesinlik: — · kaynak: —
- haritada_baslangic_onerisi: -0062-01-01 · hangi nicelikten: ilk_anilis · gerekçe: tarihlenebilen ilk yazılı tanık. Gerçekte en az MÖ 3. yy başında var (Pontus başkenti) — kaynak bulunursa geri çekilmeli.
- o_tarihteki_sahip: Pontus Krallığı'nın sonu / Roma Cumhuriyeti (TDV: MÖ 63'te Roma sınırlarına katıldı)
- tanik_cumle: "The geographer Strabo was born in Amaseia ca. 64 BC." (Pleiades 857018, Barrington notu)
- yer_notu: Pleiades Amaseia noktasına 1,92 km.
- acilan_url: https://islamansiklopedisi.org.tr/amasya · https://pleiades.stoa.org/places/857018/json · https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0198:book=12:chapter=3:section=39
- guven: dusuk · neden: önerilen tarih açıkça geç bir üst sınır; Pontus dönemi tanığı bulunamadı.

### 20. Muğla
- antik_adlar: Mobolla (Barrington "*Mobolla"); Mogola (TDV); Muğla
- kurulus: bulunamadı · metin: TDV: "Şehrin kuruluş tarihi kesin olarak bilinmemekle birlikte" ilk yerleşim kuzeydeki kalede · kesinlik: — · kaynak: TDV "MUĞLA" (Z. Mete)
- ilk_anilis: bulunamadı · metin: kesin tarihli ilk anılışı bulamadım. Barrington/Pleiades Mobolla'yı Helenistik (MÖ 330–30) dönem için tanıklı sayar (güvenli uç MÖ 30 → -0029). İpucu (dayanak değil): Vikipedi ilk anılışı MÖ 2. yy başına koyuyor; Muğla Müzesi'ndeki Rodoslu Iason onurlandırma yazıtı (Ünver – Çörtük, Arkhaia Anatolika 4, 2021, MÖ 188 sonrası) Mobolla–Pisye yöresine atfediliyor ama buluntu yeri belirsiz ve sayfayı açamadım (403) · kesinlik: belirsiz · kaynak: Pleiades 599801 (Barrington 61 G3)
- arkeolojik: bulunamadı · metin: TDV arkeolojik verilere göre çevrenin Helenistik öncesine uzandığını söyler, tarih vermez · kesinlik: belirsiz · kaynak: TDV
- haritada_baslangic_onerisi: -0029-01-01 · hangi nicelikten: ilk_anilis (Barrington dönem tanıklığı) · gerekçe: tek doğrulanabilir tanık Barrington'un Helenistik dönem ataması; güvenli uç dönem sonu. Iason yazıtı doğrulanırsa -0149'a (MÖ 150) çekilebilir.
- o_tarihteki_sahip: Roma (Asia eyaleti) — TDV'ye göre bölge MÖ 129'dan beri Roma'da
- tanik_cumle: "Şehrin kuruluş tarihi kesin olarak bilinmemekle birlikte" (TDV "MUĞLA", Z. Mete)
- yer_notu: Pleiades Mobolla noktasına 1,96 km.
- acilan_url: https://islamansiklopedisi.org.tr/mugla · https://pleiades.stoa.org/places/599801/json
- guven: dusuk · neden: yazılı ilk anılış bulunamadı; öneri yalnız dönem atamasına dayanıyor.

---

## Özet

- **TDV ile yetinilen (önerilen tarih doğrudan TDV'den): 5** — Erzurum (415–422), Van (Sarduri I / İşpuini 830), Adana (Adaniya), Çanakkale (1463), İzmit (262). Kastamonu'da da önerilen tarih TDV'den (Aleksios dönemi, güvenli uç 1118) ama ilk anılış alanı için akademik kaynağa gidildi.
- **Akademik/birincil kaynağa gidilen: 15** — İzmir, Bursa, Ankara, Konya, Sivas, Trabzon, Diyarbakır, Kastamonu, Bitlis, Kütahya, Samsun, Maraş, Antalya, Amasya, Muğla (Strabon/Ksenophon/Pausanias Perseus'tan; Asur metni Oracc RIAo'dan; Pleiades/Barrington; Belleten 1975; OLBA 2015 özeti). 20 şehrin 20'sinde TDV maddesi açıldı (Maraş → "bk. KAHRAMANMARAŞ").
- **"Bulunamadı" denen:** ilk_anilis 1 şehirde (Muğla); kurulus 10 şehirde (Ankara, Konya, Diyarbakır, Adana, Kastamonu, Bitlis, Kütahya, Maraş, Amasya, Muğla); arkeolojik 13 şehirde, atlas noktası için (Bursa, Trabzon, Erzurum, Van, Adana, Kastamonu, Bitlis, Kütahya, Samsun, Antalya, İzmit, Amasya, Muğla; Çanakkale "yok").
- **Görev öncülünde hata:** Abydos Anadolu yakasında, Çanakkale'nin 5,25 km kuzeyinde (Pleiades 501325).
- **TDV'de şüpheli iki cümle:** Bursa "MÖ II. yüzyıl sonlarında ... Hannibal" (kronolojik olarak imkânsız) ve Çanakkale "caminin yapımı kaleden de önce 1452" — ikisinden de tarih türetmedim.
- **Nokta kaymaları (> 3 km):** Van (Tuşpa 4,74 km), İzmir (Bayraklı 6,17 km), İzmit (Astakos 5,81 km, ayrı yer), Çanakkale (Abydos 5,25 km / Dardanos 8,04 km, ayrı yerler); Samsun (Toramantepe ~3 km, ölçülemedi).
- **En zor 3 şehir:**
  1. **Muğla** — Mobolla adının tarihli ilk anılışı yok; önerim yalnız Barrington'un dönem atamasına dayanıyor (MÖ 30 güvenli uç), muhtemelen 2 yüzyıl geç.
  2. **Adana** — ilk anılış Hititçe Adaniya eşitlemesine bağlı (TDV "kabul edilir ama kesin değil"); metinde ülke mi şehir mi belirsiz; reddedilirse MÖ 1500'den MÖ ~700'e kayar.
  3. **Kastamonu** — adı antik kaynaklarda yok; ilk doğrudan anılışın (II. Ioannes, 1132/1135) birincil metnini açamadım; Aleksiad'daki "Kastamonites" soyadı ve TDV'nin Aleksios dönemi fethi dolaylı tanıklar.
  (Yakın aday: Sivas — Megalopolis = Sebasteia eşitlemesi Barrington'da soru işaretli; Amasya — önerilen MÖ 63 açıkça geç bir üst sınır.)
- **Açamadığım/eksik:** Arrianos 2.4.1 Perseus'ta 503 verdi (pasaj ikincil sayfadan görüldü); Encyclopaedia Iranica 403; PHI ve DOAJ 403; Georgios Kyprios, Choniates, Plinius metinleri açılmadı.
