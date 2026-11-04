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
4. Kod, kimlik, dosya yolu, değişken adı gibi görünen ya da çevrilemeyen öğeyi AYNEN bırak.
5. Arayüz metni kısa ve düğme diliyle: "Göster" → "Show", "Kapat" → "Close". Cümle parçası
   gelirse parça olarak çevir (bir cümlenin ortası olabilir; büyük/küçük harfi koru).
6. Türkçe'de geçen "Emre" sitenin yazarıdır; adı çevirme.
