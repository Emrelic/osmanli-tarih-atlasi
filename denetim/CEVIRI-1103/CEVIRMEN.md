# Çeviri ajanı talimatı (CEVIRI-1103)

Sen Osmanlı Tarih Atlası'nın (eğitim amaçlı tarih atlası sitesi) Türkçe metnini çeviriyorsun.
Girdi: bir JSON dosyası `{"dil": "<hedef dil kodu>", "tur": "...", "kaynak": {id: ...}}`.
Çıktı: aynı klasöre `<girdi adı>.cevap.json` — `{"dil": ..., "tur": ..., "kayit": {id: ...}}`.
Çıktıyı Write aracıyla yaz; geçerli JSON olmalı (UTF-8, ensure_ascii gerekmez). Her id için bir kayıt.
Büyük girdide çıktıyı tek Write ile yazamıyorsan parçalara böl: `<girdi>.cevap.1.json`, `.2.json` …
(her biri aynı biçimde, id'ler ayrık). Başka dosyaya dokunma, başka komut koşturma.

## Tür başına biçim
- `olay`: kaynak[id] = `{"b": başlık, "d": detay}` (biri eksik olabilir) → kayit[id] = `{"b": ..., "d": ...}`
  (kaynakta hangi alan varsa onu çevir).
- `devlet`: kaynak[id] = devlet adı → kayit[id] = çevrilmiş ad (dizgi).
- `arayuz`: kaynak[id] = arayüz metni (id ile aynı) → kayit[id] = çevrilmiş metin (dizgi).

## Kurallar
1. Anlamı aynen aktar; ekleme, yorum, kısaltma, düzeltme YOK. Tarih, sayı, kişi sayısı aynen.
2. Biçimi koru: emoji, ok, ①②, `**kalın**`, HTML etiketleri, `#` (sayı yer tutucusu — sayısı ve
   sırası aynı kalmalı), baştaki/sondaki noktalama ve boşluk-anlamı ( "(" , ":" , "·" , "—").
3. **Yer ve devlet adları: hedef dildeki yerleşik akademik ad.** İngilizce için ölçü: Cambridge
   History of Turkey, Encyclopaedia of Islam (THREE), Oxford Dictionary of Byzantium kullanımı.
   - Ad, dönemin akademik adıdır. Kent **29 Mayıs 1453 fethine kadar (kuşatma dahil) Constantinople**:
     "İstanbul kuşatması" (1453, 1422, 1394…) → "Siege of Constantinople", "İstanbul'un fethi" →
     "Conquest of Constantinople". Fetihten sonra "Istanbul" (metin "Kostantiniyye" diyorsa:
     Constantinople). Kayıt kimliğindeki tarih (id'nin ortası, ör. 1453-04-06) ölçüdür.
     Edirne/Adrianople: Osmanlı dönemi Edirne, öncesi Adrianople. Belgrad → Belgrade, Viyana → Vienna,
     Mora → the Morea, Rumeli → Rumelia, Eflak → Wallachia, Boğdan → Moldavia, Erdel → Transylvania,
     Kırım Hanlığı → Crimean Khanate, Akkoyunlu → Aqquyunlu, Karakoyunlu → Qaraquyunlu,
     Memlûkler → Mamluks / Mamluk Sultanate, Selçuklu → Seljuk, Safevî → Safavid, Venedik → Venice.
   - Türkçe ünvanlar ve kurumlar akademik transliterasyonla, sade biçimde: beylerbeyi, sancak,
     timar, devşirme, kadı, vezir-i âzam → grand vizier, şeyhülislâm → şeyhülislam, Yeniçeri → Janissary.
   - Kişi adları: Osmanlı sultanları Mehmed II, Bayezid I, Süleyman I (the Magnificent yalnız metin
     lakabı veriyorsa), Murad, Selim; Batılı hükümdarlar o dilin akademik adıyla (Kanuni = Süleyman
     the Lawgiver/the Magnificent; Şarlken → Charles V; Kutsal Roma → Holy Roman Empire).
   - Emin değilsen metindeki Türkçe özel adı modern Türkçe yazımıyla bırak (uydurma ad üretme).
3a. **Arapça (ar) ölçüsü:** Arap tarih yazımının yerleşik adları — *Dâ'irat al-Ma'ârif
   al-Islâmiyya*, Arap üniversitelerinin Osmanlı tarihi yayınları (ör. Muhammed Ferid Bey
   geleneği, Abdülaziz eş-Şinnâvî). Modern Standart Arapça (fushâ), akademik üslup.
   - الدولة العثمانية; padişah → السلطان; sadrazam → الصدر الأعظم; Yeniçeri → الإنكشارية;
     beylerbeyi → بكلربك; sancak → سنجق; timar → التيمار; devşirme → الدوشرمة.
   - 1453 öncesi القسطنطينية, sonrası إسطنبول. Edirne: fetihten önce أدرنة (Adrianopolis
     bağlamında أدريانوبل), Bursa بورصة, Belgrad بلغراد, Viyana فيينا, Mora المورة,
     Rumeli الروملي, Eflak الأفلاق, Boğdan البغدان, Erdel ترانسلفانيا, Memlükler المماليك,
     Safevîler الصفويون, Selçuklular السلاجقة, Akkoyunlu آق قويونلو, Karakoyunlu قره قويونلو.
   - Kişiler: محمد الثاني (الفاتح yalnız metin lakabı veriyorsa), بايزيد الأول, سليمان القانوني,
     مراد, سليم. Batılılar Arapçadaki yerleşik yazımla (شارل الخامس).
   - **Rakamlar Batı Arap rakamıyla (0-9) yazılır**, Doğu Arap rakamı (٠-٩) KULLANILMAZ:
     `#` şablonları ve tarih denetimi rakam üzerinden çalışır. MÖ → ق.م (sayıdan sonra:
     "500 ق.م"), MS → م. Hicrî aylar Arapça adıyla (محرم، صفر، ربيع الأول …).
   - Latin harfli kısaltma, kaynak adı, dosya adı (TDV, Shaw, data/devletler.js) aynen kalır.
3b. **Fransızca (fr) ölçüsü:** Fransız Osmanistiği ve bizantinoloji kullanımı — Robert Mantran
   (dir.), *Histoire de l'Empire ottoman*; *Encyclopédie de l'Islam* (EI2 fr.); *Le Monde
   byzantin* (PUF). Akademik düzyazı, "passé simple" yerine anlatı için "passé composé"/şimdiki
   zaman yerine metnin zamanı ne ise o (kronoloji dili: kısa, olgusal).
   - l'Empire ottoman; padişah → le sultan; sadrazam → le grand vizir; Yeniçeri → les janissaires;
     beylerbeyi → beylerbey; sancak → sandjak; timar → timar; devşirme → devchirmé; kadı → cadi.
   - 1453 öncesi Constantinople, sonrası Istanbul (Fransız Osmanistiğinin yaygın kullanımı).
     Edirne/Andrinople aynı mantıkla; Belgrade, Vienne, la Morée, la Roumélie, la Valachie,
     la Moldavie, la Transylvanie, le khanat de Crimée, les Mamelouks, les Séfévides,
     les Seldjoukides, les Qaraqoyunlu / Aqqoyunlu, Venise, Raguse (Dubrovnik).
   - Kişiler: Mehmed II (le Conquérant yalnız metin lakabı veriyorsa), Bayezid Ier, Soliman le
     Magnifique (metin "Kanuni" diyorsa: Soliman le Législateur / le Magnifique), Charles Quint.
   - Sayı: Fransız tipografisi — binlik ayracı boşluk ("10 000"), ondalık virgül; tarih
     "29 mai 1453"; MÖ → av. J.-C. ("500 av. J.-C."), MS → apr. J.-C.; yüzyıl Roma rakamıyla
     ("XVe siècle").
3b. **İspanyolca (es) ölçüsü:** İspanyolca akademik tarih yazımının yerleşik adları (Enciclopedia
   del Islam, İspanyolca Osmanlı/Bizans tarihi yayınları). Akademik ve sade, nötr İspanyolca.
   Düğme dili kısa ("Mostrar", "Cerrar").
   - Imperio otomano; sultán; gran visir; jenízaros; beylerbeyi → beylerbeyi; sancak → sanjacado
     (sancak adı olarak geçerse sancak); timar → timar; devşirme → devshirme; kadı → cadí;
     şeyhülislâm → sheij al-Islam.
   - Kent **29 Mayıs 1453 fethine kadar (kuşatma dahil) Constantinopla**, sonrası **Estambul**
     (metin "Kostantiniyye" diyorsa Constantinopla). Edirne: fetihten önce Adrianópolis, sonra
     Edirne. Belgrad → Belgrado, Viyana → Viena, Mora → Morea, Rumeli → Rumelia, Eflak → Valaquia,
     Boğdan → Moldavia, Erdel → Transilvania, Kırım Hanlığı → Kanato de Crimea, Memlükler →
     mamelucos / sultanato mameluco, Selçuklular → selyúcidas, Safevîler → safávidas, Akkoyunlu →
     Ak Koyunlu, Karakoyunlu → Kara Koyunlu, Venedik → Venecia.
   - Kişiler: Mehmed II, Bayezid I, Solimán I (el Magnífico yalnız metin lakabı veriyorsa; Kanuni →
     el Legislador), Murad, Selim; Batılılar İspanyolcadaki yerleşik adla (Carlos V, Sacro Imperio
     Romano Germánico).
   - Rakamlar Batı rakamı; `#` şablonları ve tarih denetimi rakamla çalışır. MÖ → a. C., MS → d. C.
     Ay adları küçük harfle (enero, febrero …). Ters soru/ünlem işareti (¿ ¡) kullan.
   - Uydurma ad üretme: emin değilsen modern Türkçe yazımı bırak.
3c. **Almanca (de) ölçüsü:** Almanca akademik Osmanistik ve Bizantinistik yazımı (Brockhaus,
   Lexikon des Mittelalters, Neue Fischer Weltgeschichte, Almanca Osmanlı tarihi yayınları).
   Akademik, sade, nötr Almanca; düğme dili kısa ("Anzeigen", "Schließen"). Sıra sayıları
   Almanca noktalı yazılır: Mehmed II., Süleyman I., Karl V.
   - Osmanisches Reich; Sultan; Großwesir; Janitscharen; beylerbeyi → Beylerbey; sancak →
     Sandschak; timar → Timar; devşirme → Devschirme; kadı → Kadi; şeyhülislâm → Scheich ül-Islam.
   - Kent **29 Mayıs 1453 fethine kadar (kuşatma dahil) Konstantinopel**, sonrası **Istanbul**
     (metin "Kostantiniyye" diyorsa Konstantinopel). Edirne: fetihten önce Adrianopel, sonra
     Edirne. Belgrad → Belgrad, Viyana → Wien, Mora → Morea, Rumeli → Rumelien, Eflak →
     Walachei, Boğdan → Moldau, Erdel → Siebenbürgen, Kırım Hanlığı → Krim-Khanat, Memlükler →
     Mamluken / Mamlukensultanat, Selçuklular → Seldschuken, Safevîler → Safawiden, Akkoyunlu →
     Ak Koyunlu, Karakoyunlu → Kara Koyunlu, Venedik → Venedig, Kutsal Roma → Heiliges Römisches Reich.
   - Kişiler: Mehmed II., Bayezid I. (Bayezid), Süleyman I. (der Prächtige yalnız metin lakabı
     veriyorsa; Kanuni → der Gesetzgeber), Murad, Selim; Batılılar Almancadaki yerleşik adla
     (Karl V., Franz I.).
   - Rakamlar Batı rakamı; "#" şablonları ve tarih denetimi rakamla çalışır. MÖ → v. Chr.,
     MS → n. Chr. Ay adları büyük harfle (Januar, Februar …). Tırnak: „…“.
   - **Ad muhafazakârlığı:** emin değilsen modern Türkçe yazımı bırak; Almanca ekzonim UYDURMA,
     Türkçe adı "Almancalaştırma" (önceki bir geçişte "Yalayiridas" gibi uydurma biçimler çıktı).
     Yerleşik Almanca adı olmayan hanedan/boy/kişi adları Türkçe yazımla kalır.
3c. **Portekizce (pt) ölçüsü:** Portekizce akademik tarih yazımının yerleşik adları (Portekiz ve
   Brezilya üniversitelerinin Osmanlı/Bizans/İslâm tarihi yayınları, *Enciclopédia Luso-Brasileira*
   kullanımı). Akademik ve sade, **Avrupa Portekizcesi yazımı** (AO 1990 imlâsıyla: "ação", "ótimo";
   Brezilya'ya özgü kelime seçmekten kaçın). Düğme dili kısa ("Mostrar", "Fechar").
   - Império Otomano; sultão; grão-vizir; janízaros; beylerbeyi → beylerbei; sancak → sanjaco
     (sancak adı olarak geçerse sancak); timar → timar; devşirme → devshirme; kadı → cádi;
     şeyhülislâm → xeique do Islão (şeyhülislam).
   - Kent **29 Mayıs 1453 fethine kadar (kuşatma dahil) Constantinopla**, sonrası **Istambul**
     (metin "Kostantiniyye" diyorsa Constantinopla). Edirne: fetihten önce Adrianópolis, sonra
     Edirne. Belgrad → Belgrado, Viyana → Viena, Mora → Moreia, Rumeli → Rumélia, Eflak → Valáquia,
     Boğdan → Moldávia, Erdel → Transilvânia, Kırım Hanlığı → Canato da Crimeia, Memlükler →
     mamelucos / sultanato mameluco, Selçuklular → seljúcidas, Safevîler → safávidas, Akkoyunlu →
     Ak Koyunlu, Karakoyunlu → Kara Koyunlu, Venedik → Veneza, Cenova → Génova, Macaristan → Hungria. İşkodra → Shkodër ("Escútari"
     KULLANILMAZ — Portekizcede Üsküdar ile karışır; Üsküdar → Üsküdar).
   - Türkçe terimi parantez içinde açıklama olarak EKLEME ("tipografia (Matbaa)" yok): yalnız
     kaynakta olan parantez kalır.
   - Kişiler: Maomé II (Mehmed II; Fâtih lakabı yalnız metin veriyorsa "o Conquistador"),
     Bajazeto I (Bayezid I), Solimão I (o Magnífico yalnız metin lakabı veriyorsa; Kanuni → o
     Legislador), Murad, Selim; Batılılar Portekizcedeki yerleşik adla (Carlos V, Sacro Império
     Romano-Germânico). Yerleşik Portekizce biçimi olmayan sultan adı (Orhan, Murad, Selim,
     Mustafa, Ahmed, Mahmud, Abdülhamid…) akademik transliterasyonla kalır.
   - Rakamlar Batı rakamı; `#` şablonları ve tarih denetimi rakamla çalışır. MÖ → a.C., MS → d.C.
     Ay adları küçük harfle (janeiro, fevereiro …). Binlik ayracı nokta, ondalık virgül (kaynaktaki
     sayı biçimini değiştirme).
   - Uydurma ad üretme: emin değilsen modern Türkçe yazımı bırak.
3c. **Rusça (ru) ölçüsü:** Rus akademik tarih yazımının yerleşik adları: RAN Doğu Bilimleri Enstitüsü (Институт востоковедения РАН) Osmanlı tarihi yayınları, «История Османского государства, общества и цивилизации» (Rusça baskısı), Büyük Rus Ansiklopedisi (БРЭ). Dil akademik, sade ve çağdaş Rusçadır. Düğme dili kısa ve emir kipindedir («Показать», «Закрыть»).
   - **Devlet ve kurumlar:**
     - Османская империя; султан; великий визирь; янычары.
     - Kurum adları: бейлербей; санджак; тимар; девширме; кади; шейх-уль-ислам; диван.
   - **İstanbul:**
     - 29 Mayıs 1453 fethine kadar (kuşatma dahil) **Константинополь**, sonrası **Стамбул**.
     - Metin "Kostantiniyye" diyorsa: Константинополь.
     - Edirne: fetihten önce Адрианополь, sonra Эдирне.
   - **Yer ve devlet adları:**
     - Belgrad → Белград, Viyana → Вена, Mora → Морея, Rumeli → Румелия.
     - Eflak → Валахия, Boğdan → Молдавия (Молдавское княжество), Erdel → Трансильвания.
     - Kırım Hanlığı → Крымское ханство, Venedik → Венеция (Венецианская республика).
     - Memlükler → мамлюки / Мамлюкский султанат, Selçuklular → сельджуки, Safevîler → Сефевиды.
     - Akkoyunlu → Ак-Коюнлу, Karakoyunlu → Кара-Коюнлу, Kutsal Roma → Священная Римская империя.
   - **Kişiler:**
     - Osmanlı sultanları: Мехмед II (Завоеватель yalnız metin lakabı veriyorsa), Баязид I, Сулейман I (Великолепный ya da Кануни yalnız metin lakabı veriyorsa), Мурад, Селим, Осман, Орхан.
     - Batılılar Rus akademik yazımıyla: Карл V, Иван IV, Пётр I, Екатерина II.
   - **Yazım ayrıntıları:**
     - Rakamlar Batı rakamıyla yazılır. `#` şablonları ve tarih denetimi rakamla çalışır.
     - Hükümdar sıra numaraları Roma rakamıyla yazılır (Мехмед II).
     - MÖ → до н. э., MS → н. э. Ay adları küçük harfle ve hâl ekiyle yazılır ("29 мая 1453").
     - Ё harfi yalnız yerleşik adlarda kullanılır (Пётр). Tırnak «…».
     - **Söz dizimi Rusçanın doğal sırasıdır**, Türkçenin değil.
       - `#` yer tutucuları cümle içinde yer değiştirebilir.
       - Birden çok `#` varsa birbirlerine göre sıraları korunur: ilk `#` ilk sayıdır.
       - Örnekler: "# başı" → «начало #», "Haziran # ortası" → «середина июня #», "# sonu" → «конец #», "# civarı" → «около #», "Ağustos # başı" → «начало августа #».
   - **Emin değilsen:** özel adı modern Türkçe yazımıyla, Latin harfle bırak. Kiril harfine **çevirme**; uydurma ad üretme. Örnek: az bilinen bir kasaba ya da beylik adı Türkçe kalır.
   - **Ad önceliği** (olay metinlerinde, 4 Kasım 2026 düzeltisi):
     1. **Rus tarih yazımında yerleşik bir olay ya da antlaşma adı varsa o ad kullanılır**, metindeki yer adı kuralından önce gelir. Örnekler:
        - Edirne 1829 → «Адрианопольский мир»
        - Küçük Kaynarca → «Кючук-Кайнарджийский мир»
        - Yaş → «Ясский мир»
        - Bükreş 1812 → «Бухарестский мир»
        - Prut → «Прутский мир»
        - İstanbul 1479 → «Константинопольский мир»
        - Karlofça → «Карловицкий мир»
        - Pasarofça → «Пожаревацкий мир»
        - Ayastefanos → «Сан-Стефанский мир»
     2. **Yerin Rus akademik yazımında yerleşik adı varsa o ad kullanılır.** Türkçe adın Kiril okunuşu kullanılmaz. Örnekler:
        - Yanıkkale → Дьёр
        - Uyvar → Нове-Замки
        - İbrail → Брэила
        - Ahıska → Ахалцихе
        - Narda → Арта
        - Belgrad, Niş → Ниш
        - Vidin → Видин
        - Özi → Очаков
        - Hotin → Хотин
        - Bender → Бендеры
        - Akkirman → Аккерман
     3. **Yerleşik ad yoksa** Türkçe ad Latin harfle kalır. Örnekler: Böğürdelen, Güvercinlik. Türkçe adın Kiril harf çevirisi (Яныккале, Сырпсындыгы gibi) **yazılmaz**.
     4. **Kişi lakapları:** yerleşik Rusça karşılık varsa o kullanılır. Örnek: Kazıklı Voyvoda → «Влад Цепеш (Колосажатель)». Yoksa lakap Latin harfle kalır.
     5. **Hanedan / beylik adları:** devlet adı dosyasındaki karşılık kullanılır. Örnekler: Teke → «Текеогуллары» değil, devlet listesindeki biçim. Karşılık yoksa Latin harfle kalır.
4. Kod, kimlik, dosya yolu, değişken adı gibi görünen ya da çevrilemeyen öğeyi AYNEN bırak.
5. Arayüz metni kısa ve düğme diliyle: "Göster" → "Show", "Kapat" → "Close". Cümle parçası
   gelirse parça olarak çevir (bir cümlenin ortası olabilir; büyük/küçük harfi koru).
6. Türkçe'de geçen "Emre" sitenin yazarıdır; adı çevirme.
