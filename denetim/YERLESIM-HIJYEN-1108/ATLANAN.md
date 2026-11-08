# YERLEŞİM-HİJYEN 1108 — ATLANAN KAYITLAR (gerekçeli)

Oturum: YERLESIM-HIJYEN, 8 Kasım 2026. Girdi: `denetim/YERLESIM-SAHNE-1108/cikti/`.

## ① `kur` hijyeni — 1281–1923 aralığı (129 ihlal)

**Düzeltilen (21 madde, `yer_id` yeniden bağlandı, `kur` değişmedi):** Malatya→Eski Malatya (Battalgazi) 6,
Van→Eski Van (Tuşpa) 5, Kandehar→Eski Kandehar (Şehr-i Köhne) 8, Taipei→Tainan 2.
Sebep: 13-14 Ekim kararlarıyla modern nokta ayrılmış, eski şehir ayrı kayda taşınmış; maddelerin `yer_id`'si geride kalmış.

**Atlanan — meşru (kur = kuruluş maddesi, fark yalnız gün/ay hassasiyeti; madde `YYYY-01-01`, kur günü verir):**
Ayutthaya (1351-01-01/03-04), Ahmedâbâd, Potosí, Salvador (Bahia), Tsaritsyn 1589, Saratov, Yakutsk, Olyokminsk,
Srednekolımsk, Balagansk, Selenginsk, Bolşeretsk, Üç Aziz Körfezi, Plymouth (11-21 iniş ↔ 12-21 yerleşim),
İsmâiliye, Perth (06-18 ilân ↔ 08-12 şehir), Rumeli Hisarı (kitâbe 07-17 ↔ kur 08-31), İlbasan, Tıtvân,
Malaka (1396 madde ↔ kur 1400; kaynak yeniden bakılmalı), Berezov (madde 1592 ↔ kur 1593; madde yılı sorgulanmalı).

**Atlanan — madde modern şehre bağlı ama eski/öncül yerleşim atlasta YOK (yeni yerleşim gerekir, bu oturumun işi değil):**
Bahçesaray 5 madde (Kırım Hanlığı 1441–1501; Kırk Yer/Salacık atlasta yok, 14 Ekim kararı toprağı komşu peteğe bırakmış),
Loja (1486 Levşe/Loja düşüşü — `yer_id:"Loja"` **Ekvador** Loja'sına bağlı, İspanyol Loja atlasta yok; yanlış kamera!),
Sydney (1770 Cook Botany Bay), Gisborne (1769 Cook), Darwin (1863 Kuzey Bölge), Basseterre (1627/1713 Saint Kitts),
Batavia (1527 Sunda Kalapa/Cayakarta), Caypûr (Amber), Bharatpûr (Hânüvâ savaşı 1527), Şikârpûr (Bakkar),
Haydarâbâd (Sind) 1701 Kalhora, Feyzâbâd (Bedahşan), Perm 1573 (Çerdin), Orenburg 1735, St. Petersburg 1617,
Tatarpazarcığı 1373, Saraybosna 1448, Mostar 1448, Şırnak 1884, Aşkabad 1842, Krasnovodsk 1819, Cağbûb, Malolos 1898,
Şârika 1820, Fort Washakie 1868.

**Dokunulmadı (araştırma ister; Boşluk merdiveni, Sonnet alt ajan gerekir):** `bosluk_sahipsiz` 39 (Palermo 1282, Padova 1318,
Lucca, Verona, Kars×3, Tilimsan×2, Sisam×2, Ahlat×2, Kadıköy×2, Akçahisar (Kruja)×2, Misis×2, Mazara del Vallo×2,
Taormina, Saluzzo, Harran, Alamut, Meyyâfârikīn, Türabe, Dilem, Thane, Banavasi, Phayao, Dambadeniya, Leshou,
Nakhon Pathom, Tilantongo×2, Hanoi, Fort Astoria, Fort Vancouver), `donemler_arasi_bosluk` 2 (Timbuktu, Poti),
`donemsiz` 2 (Volsinii, Ogaden), `ilk_donem_oncesi` 3 (Semipalatinsk, Korsakov, Honolulu), `son_donem_bitis_gunu` 6 (terk/kayıp, çoğu meşru).
`kur_sonrasi`(115 içinde) kalan ve `ilk_donem_oncesi` (547, antik/ortaçağ) → bkz. KALAN.md.

## ② Başkent → künye bağı

**Bağlanan: 47 künye** (aşağıda commit). Ölçüt: yerleşim dönemsiz, `devletler.js baskent` birebir (parantezli yerel karşılık dahil)
tek başkent, künye f ve t günü ±30 gün kronoloji maddesi var.

**Atlanan DONEMSIZ (başkent birden çok / kayıyor — tek yerleşimi künyenin bütün ömrüne yazmak yanlış olur):**
dogu-ganga (Kalinganagara→Utkala), franche-comte (Dole/Besançon), odris (Seuthopolis/Kabyle), misir-orta-krallik (Itj-tawy/Teb),
misir-3-ara (Tanis/Bubastis), danimarka-erken (Hedeby/Sliesthorp), nordmark (Salzwedel/Stendal), vasconia (Auch/Pamplona),
sahra-sanhaca ("Awdaghust?" belirsiz), seddadiler-gence (Dvin→Gence 971), hirvat-dukalik (Nin·Klis/Solin), kalabhra,
misir-28-30-hanedan (Sais/Mendes/Sebennytos), makedon-merisleri (4 başkent), vishnukundina (Denduluru/Amaravati).
**Atlanan — künye f/t günü yakınında madde YOK (Değişmez 2 riski; "dilimi UYGULAMA" kuralı):** hadramavt, moab, saba, deheubarth,
esnunna, manna, aitolia-birligi, habbari, delmatai-federasyon, teispid-pers, altava-mauro-roma, dilmun, nevers-kontlugu, pattikera.
**Atlanan — dilim künye bitişinden sonra yerleşimi sahipsiz bırakır (künye 1936/37 biter, şehir sürer; Değişmez 1):** alevi-devleti-lazkiye (Lazkiye), cebel-durzi-devleti (Süveyde).
**Atlanan — kaynak zayıf / kalıp farklı:** isin (künye kaynağı Wikipedia/Met ipucu; kayıtta `s:[]` ayrı satırda).
**Dokunulmayan: `baska_devlete_bagli` 197** (Dubrovnik→venedik, Lübeck→almanya, Trento→almanya …) — dilim çakışması ölçümü
ve gün gün sahipsiz dilim ayıklaması ister; bkz. KALAN.md.
