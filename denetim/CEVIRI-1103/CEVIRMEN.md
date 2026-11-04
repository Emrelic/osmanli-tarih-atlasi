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
4. Kod, kimlik, dosya yolu, değişken adı gibi görünen ya da çevrilemeyen öğeyi AYNEN bırak.
5. Arayüz metni kısa ve düğme diliyle: "Göster" → "Show", "Kapat" → "Close". Cümle parçası
   gelirse parça olarak çevir (bir cümlenin ortası olabilir; büyük/küçük harfi koru).
6. Türkçe'de geçen "Emre" sitenin yazarıdır; adı çevirme.
