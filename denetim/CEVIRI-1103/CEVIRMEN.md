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
   - Ad, dönemin akademik adıdır: 1453 öncesi Bizans bağlamında Constantinople; Osmanlı dönemi
     için akademik İngilizce yaygın olarak "Istanbul" (metin "Kostantiniyye" diyorsa: Constantinople).
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
4. Kod, kimlik, dosya yolu, değişken adı gibi görünen ya da çevrilemeyen öğeyi AYNEN bırak.
5. Arayüz metni kısa ve düğme diliyle: "Göster" → "Show", "Kapat" → "Close". Cümle parçası
   gelirse parça olarak çevir (bir cümlenin ortası olabilir; büyük/küçük harfi koru).
6. Türkçe'de geçen "Emre" sitenin yazarıdır; adı çevirme.
