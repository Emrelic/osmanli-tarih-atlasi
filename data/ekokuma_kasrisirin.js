// ============================================================================
// EK OKUMA — KASR-I ŞİRİN (ZÜHÂB) ANTLAŞMASI, 1639
// ============================================================================
// Yazan: PAKET-EK-A · 14 Eylül 2026 · kutu parti-emrelic-0050 H-0005
// Koordinatör: 1.MURAT · rapor: denetim/PAKET-EK-A-0914.md
// Emre: "Kasr-ı Şirin anlaşması ile ilgili ek okumalar oluşturup maddelerin
// içine serpiştirelim."
//
// 🔴 AD ALANI (CLAUDE.md §7): bu dosya YALNIZ window.EKOKUMA_KASRISIRIN tanımlar.
//    app.js `_ekHavuz()` /^EKOKUMA(_[A-Z0-9]+)?$/ desenini okur ⇒ ad uyar.
//    YÜKLEYİCİ: `_EKOKUMA_DOSYA_ADLARI` listesine "ekokuma_kasrisirin" satırı
//    arayüz oturumunca (PAKET-UI3) eklenecek — bu oturum js/ dosyasına dokunmadı.
//
// KAYNAK YÖNTEMİ (14 Eylül 2026, gövdeler çekildi ve okundu):
//   TDV 200: kasrisirin-antlasmasi · murad-iv · kemankes-mustafa-pasa ·
//            hafiz-ahmed-pasa · safeviler · iran · erzurum · bagdat
//   TDV 302 (ÖLÜ): kasr-i-sirin · kasr-i-sirin-antlasmasi · zuhab · zohab ·
//            erzurum-antlasmasi · kerden-antlasmasi · nadir-sah · mihriban
//   Akademik: Sabri Ateş, "Treaty of Zohab, 1639: Foundational Myth or
//            Foundational Document?", Iranian Studies 52/3-4 (2019) 397-423 —
//            YALNIZ ÖZET okundu (Cambridge Core); tam metin erişilemedi.
//   Erişilemeyen: Encyclopaedia Iranica (403) · Britannica (403) ·
//            academia.edu "Belated Consummation of the Peace of Zuhab" (403).
// Metinler KOPYALANMADI, özetlendi. Hiçbir tarih/sınır atlasın verisinden
// alınmadı (§4 "atlas referans değildir").
//
// ŞEMA: app.js ekKartHtml —
//   sebep-sonuc → sebep.b → sonuc.b başlığı + bag + metin
//   antlasma · tartisma → SON ÇARE dalı: ad + metin · kisa · not · bag
// `kaynak` son kullanıcıya GÖRÜNÜR. `ic_not` çizilmez (_icNotAyikla).
// `zincir:[]` bilerek boş (app.js zinciri yalnız window.EKOKUMA'da arar).
// ============================================================================
window.EKOKUMA_KASRISIRIN = [

// ── 1 · ARKA PLAN: BAĞDAT'IN KAYBINDAN ANTLAŞMAYA ───────────────────────────
{ id:"sebep-sonuc-kasrisirin-arka-plan", tur:"sebep-sonuc",
  kisa:"On altı yıllık bir savaş, bir şehrin kaybıyla başladı ve aynı şehrin geri alınmasıyla bitti.",
  sebep:{ b:"Bağdat'ın, şehirdeki Bekir Subaşı karışıklığı sırasında Şah Abbas'ın kuvvetlerine geçmesi", t:"1623-11-28" },
  sonuc:{ b:"Kasr-ı Şirin (Zühâb) Antlaşması: Bağdat Osmanlılarda, Revan Safevîlerde kaldı", t:"1639-05-17" },
  bag:"Önemi: IV. Murad devrinin iki büyük seferi — Revan (1635) ve Bağdat (1638) — bu antlaşmanın zeminini hazırladı. Antlaşma, 1514 Çaldıran'dan beri aralıklarla süren Osmanlı-Safevî savaşlarının sonuncusunu kapattı ve iki devlet arasında uzun bir barış dönemi başlattı.",
  metin:"Bağdat'ı elinde tutan Bekir Subaşı, kendisine valilik verilmeyince şehri bir yandan Osmanlı ordusuna karşı savundu, bir yandan da Şah Abbas'tan yardım istedi; olayların sonunda şehir hicrî 1033 yılında (1623-24) Safevîlerin eline geçti. İstanbul'da tahta henüz çıkmış olan genç IV. Murad, önceliği Bağdat'ın geri alınmasına verdi. İlk deneme Hâfız Ahmed Paşa'nın kuşatmasıydı ve 1626'da sonuç vermedi. Husrev Paşa 1630'da Şehrizor bölgesini yoluna koyup Bağdat'ı ikinci kez kuşattı (kuşatma 6 Ekim 1630'da başladı), o da başarısız oldu. Bu arada Şah Abbas 1629'da ölmüş, yerine torunu Şah Safî geçmişti. Safevîlerin Gürcistan'a yayılması ve Van'a saldırması üzerine IV. Murad ordunun başına bizzat geçti: 8 Ağustos 1635'te on bir günlük direnişten sonra Revan teslim oldu, boşaltılmış Tebriz tahrip edildi. Ne var ki ordu çekilince Şah Safî Revan'ı 1 Nisan 1636'da geri aldı ve barış için İstanbul'a elçi yolladı. Padişah elçiyi kabul etmedi, cevabın Bağdat'ta verileceğini bildirdi. 8 Mayıs 1638'de yola çıkan büyük ordu Kasım ortasında Bağdat önüne vardı; haftalar süren kuşatmanın sonunda kale komutanı Bektaş Han 24 Aralık 1638'de şehri teslim etti. Barışın şartlarını görüşmek ise padişahın değil, Bağdat'ta bıraktığı sadrazam Kemankeş Kara Mustafa Paşa'nın işi oldu.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1623-11-28|Bağdat","1629-01-19|Abbas","1635-08-08|Revan","1636-04-01|Revan","1638-12-24|Bağdat","1638-12-25|Bağdat","1639-05-17|Kasr-ı Şirin"],
  kaynak:"TDV: murad-iv · TDV: hafiz-ahmed-pasa · TDV: safeviler · TDV: kasrisirin-antlasmasi",
  ic_not:"1624-1626 Hâfız Ahmed Paşa kuşatması ve 1630 Husrev Paşa kuşatması için çekirdek/kuyruk evreninde MADDE YOK — bağ kurulamadı. 1623-01-14 kronoloji_iran 'Bağdat'ın geçici olarak geri alınması' maddesine BİLEREK bağlanmadı (TDV murad-iv 1623 başı için böyle bir olay anlatmıyor; sınanmadı). 1633-01-01 kronoloji_safevi 'Erivan'ın Osmanlı'ya kısa süreli kaybı' da bağlanmadı: TDV Revan'ın düşüşünü 1635 veriyor." },

// ── 2 · MÜZAKERE VE İMZA ────────────────────────────────────────────────────
{ id:"antlasma-kasrisirin-1639-muzakere", tur:"antlasma",
  ad:"Zühâb ovasında üç gün: antlaşma nasıl imzalandı?",
  kisa:"İki ordu karşı karşıyayken başlayan görüşmeler üç günde bitti; metnin padişaha ulaşıp tasdik edilmesi ise altı ay sürdü.",
  metin:"Bağdat düştükten sonra Şah Safî'nin ordusu, Rüstem Han komutasında, Diyâle nehrinin doğusundaki Kasr-ı Şirin şehri yakınlarına çekildi. Sadrazam Kemankeş Kara Mustafa Paşa ise orduyla Diyâle'yi geçip Derteng yakınlarına geldi. Paşa, şaha yazdığı mektupta Kanûnî Sultan Süleyman ile Şah Tahmasb zamanındaki sınırların esas alınmasını önerirken, bir yandan da Safevîleri barışa zorlamak için İran içlerine doğru ilerliyordu. Safevî tarafının 'Kars bize bırakılırsa barış olur' teklifini reddetti ve Zühâb ovasına kadar yürüdü. Görüşmeler Kasr-ı Şirin'e yakın, dağ eteğindeki Zühâb'da yapıldı; bu yüzden antlaşma bazı kaynaklarda Zühâb Antlaşması adıyla geçer. Şah adına vekili Saruhan ile başelçi Muhammed Kulı Han masaya oturdu. 14 Mayıs 1639'da başlayan görüşmeler üç gün sürdü ve antlaşma 17 Mayıs 1639'da imzalandı. IV. Murad o sırada İstanbul'a dönüş yolundaydı; daha Musul'dayken şaha, eski Osmanlı topraklarının geri verilmesini ve her yıl hediye gönderilmesini isteyen, aksi hâlde savaşın yeniden başlayacağını bildiren bir mektup yollamıştı. Zühâb'da varılan metni Muhammed Kulı Han Temmuz 1639'da İstanbul'a getirdi; antlaşma Kasım 1639 sonunda kesin olarak tasdik edildi.",
  not:"İki ad, tek antlaşma: Osmanlı kaynakları çoğunlukla imza yerinin yakınındaki şehrin adını (Kasr-ı Şirin), bazı kaynaklar ise görüşmelerin yapıldığı ovanın adını (Zühâb / Zohab) kullanır.",
  kesinlik:"kesin",
  olay:["1639-05-17|Kasr-ı Şirin","1638-12-24|Bağdat"],
  kaynak:"TDV: kasrisirin-antlasmasi · TDV: kemankes-mustafa-pasa · TDV: murad-iv",
  ic_not:"Günler TDV kasrisirin-antlasmasi gövdesinden (Naîmâ ve Feridun Bey'e dayanıyor): 11 Muharrem 1049 = 14 Mayıs 1639 başlangıç, 14 Muharrem 1049 = 17 Mayıs imza, Rebîülevvel 1049 = Temmuz 1639 İstanbul'a götürülüş, Şâban 1049 başı = Kasım 1639 sonu tasdik. Kemankeş'in 'Kanûnî-Tahmasb sınırları' teklifi TDV kemankes-mustafa-pasa gövdesinden (Mehmed Halîfe'ye dayanıyor)." },

// ── 3 · SINIR MADDELERİ ─────────────────────────────────────────────────────
{ id:"antlasma-kasrisirin-1639-sinir", tur:"antlasma",
  ad:"Kasr-ı Şirin'in hükümleri: kim neyi aldı, neyi bıraktı?",
  kisa:"Özü basit bir takastı: Osmanlılar Irak'ı tuttu, Safevîler Revan'ı. Hattın ayrıntısı ise yüzyıllarca tartışıldı.",
  metin:"Antlaşmanın ana hükümleri açıktır. ① Irâk-ı Arab denilen bölge — Bağdat, Basra ve Şehrizor — Osmanlıların elinde kaldı. ② Revan (bugünkü Erivan) ve çevresi Safevîlere bırakıldı; IV. Murad'ın 1635'teki büyük zaferi böylece masada geri verilmiş oldu. ③ Safevîlerin Irak'a ve kuzeyde Kars, Ahıska ve Van'a yönelik saldırılarının önü kesildi; bu üç yer Osmanlı tarafında sayıldı. ④ Safevîler, Osmanlıların Basra körfezindeki hâkimiyetini de tanımış oldu. Özetle Azerbaycan ve Irak üzerinde hak iddia eden iki devlet, birer büyük kazancı karşılıklı tanıyarak savaşı bitirdi. Bugünkü haritayla düşünüldüğünde iki devlet arasındaki hat yaklaşık 2.185 km uzunluğundaydı, ama anlaşmazlık bunun yalnız Ağrı Dağı ile Şattülarap arasındaki kısmında, yaklaşık 1.296 km'lik bir şeritte yaşandı. İşin zor kısmı da buydu: tek tek sınır kalelerinin, dağ geçitlerinin ve sınırın iki yanına yayılmış aşiretlerin hangi tarafa ait olduğu. Antlaşmanın bize ulaşan farklı nüshaları ve kroniklerdeki özetleri bu ayrıntılarda birbirini tutmaz; sonraki yüzyıllarda iki taraf da sınır görüşmelerine kendi elindeki nüshayla geldi. Bu yüzden 'hangi köy, hangi kale kimde kaldı' sorusuna tek bir cevap vermek mümkün değildir; kaynaklar bu noktada ayrışır.",
  kesinlik:"kesin",
  olay:["1639-05-17|Kasr-ı Şirin","1636-04-01|Revan","1635-01-01|Ahıska"],
  kaynak:"TDV: kasrisirin-antlasmasi · TDV: iran · Sabri Ateş, \"Treaty of Zohab, 1639: Foundational Myth or Foundational Document?\", Iranian Studies 52 (2019), makale özeti",
  ic_not:"ARAS-BAGDAT işçisi aynı anda sınır maddelerini HARİTA için araştırıyor — bu kart OKUR içindir ve TDV'nin söylediğinden fazlasını SAYMAZ. Tek tek kale adları (Zencir, Mihriban, Derne, Kotur vb.) BİLEREK yazılmadı: okunan hiçbir kaynak onları hükümle birlikte vermiyor; Ateş makalesinin tam metni erişilemedi (yalnız özet: farklı nüshalar, sınır görüşmelerine getirilen versiyonlar). 2.185 / 1.296 km TDV gövdesinden (Hubbard ve Sykes'a dayanarak). 1635-01-01 Ahıska maddesi kronoloji_gurcistan'da; TDV murad-iv Ahıska'nın 1635'te Kenan Paşa'ca 23 günlük kuşatmayla alındığını söylüyor — gün 01-01 yuvarlak." },

// ── 4 · KALICILIK: KERDEN, ERZURUM VE BUGÜNKÜ SINIR ─────────────────────────
{ id:"sebep-sonuc-kasrisirin-kalicilik", tur:"sebep-sonuc",
  kisa:"Üç günde yapılan bir antlaşma, iki yüz yıl sonra hâlâ masadaki temel belgeydi.",
  sebep:{ b:"Kasr-ı Şirin Antlaşması ile Osmanlı-Safevî sınırının ana hatlarıyla çizilmesi", t:"1639-05-17" },
  sonuc:{ b:"1746 Kerden ile 1823 ve 1847 Erzurum antlaşmalarında sınır meselelerinin Kasr-ı Şirin esas alınarak çözülmesi", t:"1847-05-31" },
  bag:"Önemi: TDV bu antlaşmayı bugünkü Türkiye-İran sınırını belirleyen antlaşma olarak tanımlar. Aynı hattın güney kesimi bugün Irak ile İran arasındadır; yani 1639'da çizilen çerçeve, Osmanlı Devleti ortadan kalktıktan sonra da iki ayrı modern sınırın arka planında yaşamaya devam etti.",
  metin:"Zühâb'daki görüşmeler üç günde bitti, ama iki devlet arasındaki ilişkiler uzun süre bu antlaşmaya göre yürüdü. Nâdir Şah ile 1746'da imzalanan Kerden Antlaşması 1639 düzenini yeniledi. 1823'teki birinci Erzurum Antlaşması, İran'ın Erzurum üzerine yürüyüp ordusundaki kolera salgını yüzünden barış istemesiyle imzalandı ve İran aldığı yerleri geri verdi; 1847'deki ikinci Erzurum Antlaşması da sınır meselelerini yine 1639'u temel alarak çözmeye çalıştı. Barışın ekonomik bir yüzü de vardı: Safevî başkentinin İsfahan'a taşınması ve Ermeni tüccarlarının Yeni Culfa'da toplanmasıyla canlanan İran ipeği, Bağdat-Halep ve Musul-Diyarbekir yolları üzerinden Osmanlı topraklarına aktı. TDV'nin aktardığı hesaplara göre İran'ın ipek ihracatı 1640 ile 1670 arasında yarı yarıya arttı. Bu sakin dönem, Afşar hânedanının kurucusu Nâdir Şah'ın 1736'da iktidara geçmesine kadar sürdü. Bir uyarı da gerekir: 'sınır belirlendi' demek, bugünkü anlamda ölçülmüş ve işaretlenmiş bir hat çizildi demek değildir. Tarihçi Sabri Ateş'in vurguladığı gibi bu geniş sınır bölgesi, ancak 1843-1914 arasında aralıklarla çalışan karma uluslararası komisyonların uğraşıyla uluslararası tanınan kesin bir sınıra dönüşebildi.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1639-05-17|Kasr-ı Şirin","1746-09-04|Kerden","1847-05-31|Erzurum"],
  kaynak:"TDV: kasrisirin-antlasmasi · TDV: erzurum · Sabri Ateş, \"Treaty of Zohab, 1639: Foundational Myth or Foundational Document?\", Iranian Studies 52 (2019), makale özeti",
  ic_not:"1823 I. Erzurum Antlaşması için evrende MADDE YOK (1818-1825 tarandı) — bağ kurulamadı; TDV erzurum gövdesi günü veriyor: 28 Temmuz 1823. Kerden ve 1847 maddelerinin gün doğruluğu bu oturumda SINANMADI (bağ yalnız başlık eşleşmesi). 'Irak-İran' cümlesi coğrafî tespittir, TDV'de o kelimelerle geçmez; TDV'nin tanım satırı 'bugünkü Türkiye-İran doğu sınırını belirleyen antlaşma'. İpek %50 TDV'nin EI2 Suppl. atfıyla verdiği rakam." },

// ── 5 · TARİH YAZIMINDA KASR-I ŞİRİN ────────────────────────────────────────
{ id:"tartisma-kasrisirin-tarih-yazimi", tur:"tartisma",
  ad:"Kurucu belge mi, kurucu efsane mi? Kasr-ı Şirin'e iki bakış",
  kisa:"1639 genellikle dünyanın en eski sınırlarından birinin doğum tarihi sayılır. Bazı tarihçiler bu anlatının fazla düzgün olduğunu düşünür.",
  metin:"Yaygın anlatı şudur: 1639'da Osmanlı ile Safevî İran'ı arasındaki sınır çizildi ve o gün bugündür neredeyse değişmeden duruyor. Türk tarih yazımında bu anlatı, IV. Murad'ın Revan ve Bağdat zaferleriyle birlikte okunur: padişah Irak'ı geri almış, İran'ı barışa zorlamış, doğu sınırını da kalıcı olarak güvenceye bağlamıştır. Osmanlı tarafının bilgisi büyük ölçüde Kâtib Çelebi'nin Fezleke'si, Naîmâ'nın Tarih'i ve Feridun Bey'in Münşeât'ındaki kayıtlara dayanır. İran açısından ise aynı antlaşma, Şah Safî döneminin Kandehar ile birlikte Bağdat'ı da kaybettiği bir dönemin kapanışıdır; TDV'nin Safevîler maddesi onu hem sınırı geniş ölçüde belirleyen hem de iki ülke arasında uzun bir barış başlatan antlaşma olarak anar. Tarihçi Sabri Ateş bu tabloya itiraz eder. Ona göre '1639 sınırı' fikri, bu sınırı paylaşan ülkelerin tarih yazımlarına ve milliyetçiliklerine güçlü biçimde yerleşmiş bir kuruluş efsanesidir. Oysa antlaşmanın elde birbirinden farklı nüshaları vardır; belirsiz bir sınır bölgesinin açıkça tanımlanmış ve denetlenen bir hatta dönüşmesi yaklaşık dört yüzyıl sürmüş, hat ancak 1843-1914 arasındaki karma komisyonların çalışmasıyla uluslararası tanınan bir sınır olmuştur. İki bakış tamamen zıt değildir: 1639 gerçekten sonraki bütün antlaşmaların başvurduğu belgedir; tartışma, o belgenin ne kadar kesin bir hat çizdiğindedir.",
  not:"Okurken dikkat: bir antlaşmanın 'esas alınması' ile metnin her ayrıntısının aynen uygulanması aynı şey değildir. Kerden ve Erzurum görüşmeleri 1639'a dayandı, ama tarafların hangi nüshayı ve nasıl okuduğu tartışma konusu oldu.",
  kesinlik:"tartismali",
  olay:["1639-05-17|Kasr-ı Şirin","1847-05-31|Erzurum"],
  kaynak:"TDV: kasrisirin-antlasmasi · TDV: safeviler · TDV: iran · Sabri Ateş, \"Treaty of Zohab, 1639: Foundational Myth or Foundational Document?\", Iranian Studies 52 (2019), makale özeti",
  ic_not:"İRAN TARAFININ KENDİ KRONİKLERİ (ör. Safevî vakayinameleri) OKUNMADI — 'İran açısından' cümlesi yalnız TDV iran/safeviler gövdelerine dayanıyor ve öyle yazıldı. Ateş'in görüşü makale ÖZETİNDEN; tam metin (Cambridge Core / T&F) erişilemedi ⇒ nüshaların HANGİ maddede ayrıştığı YAZILMADI. TDV bibliyografyasındaki Remzi Kılıç (2001) OKUNMADI, kaynak diye konmadı." }

];
